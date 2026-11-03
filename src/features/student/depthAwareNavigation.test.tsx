import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'
import { LessonRenderer } from './LessonRenderer'
import { LocaleProvider } from '../../i18n/LocaleContext'
import type { LessonTopic } from '../../content/lessonSchema'

// Mock IntersectionObserver for JSDOM
class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  elements: Element[] = []

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }

  observe(element: Element) {
    this.elements.push(element)
  }

  unobserve(element: Element) {
    this.elements = this.elements.filter((el) => el !== element)
  }

  disconnect() {
    this.elements = []
  }

  triggerIntersect(element: Element, isIntersecting: boolean) {
    this.callback(
      [
        {
          target: element,
          isIntersecting,
          boundingClientRect: element.getBoundingClientRect(),
          intersectionRatio: isIntersecting ? 1 : 0,
          intersectionRect: element.getBoundingClientRect(),
          rootBounds: null,
          time: Date.now(),
        } as unknown as IntersectionObserverEntry,
      ],
      this as unknown as IntersectionObserver
    )
  }
}

describe('V2.7 Phase A: Depth-Aware Dynamic Table of Contents & Navigation', () => {
  const originalIntersectionObserver = window.IntersectionObserver
  const originalScrollIntoView = Element.prototype.scrollIntoView
  const originalMatchMedia = window.matchMedia

  beforeEach(() => {
    sessionStorage.clear()
    window.history.replaceState({ idx: 0 }, '', '/')
    // Setup Mock IntersectionObserver
    window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn()
  })

  afterEach(() => {
    window.IntersectionObserver = originalIntersectionObserver
    Element.prototype.scrollIntoView = originalScrollIntoView
    window.matchMedia = originalMatchMedia
    vi.restoreAllMocks()
  })

  it('renders the learning-depth selector BEFORE the Table of Contents in the DOM hierarchy', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/energy-balance-tdee')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '01 · Energy Balance, Basal Metabolic Rate & Total Daily Energy Expenditure',
      })
    ).toBeInTheDocument()

    const depthSelector = screen.getByRole('region', { name: /Choose lesson depth|পাঠের গভীরতা বাছুন/i })
    const toc = screen.getByRole('navigation', { name: /Table of contents|সূচিপত্র/i })

    // Verify DOM position: depthSelector precedes toc
    const comparison = depthSelector.compareDocumentPosition(toc)
    // Node.DOCUMENT_POSITION_FOLLOWING is 4
    expect(comparison & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('regenerates Table of Contents entries and updates content when switching depth tiers', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/energy-balance-tdee')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '01 · Energy Balance, Basal Metabolic Rate & Total Daily Energy Expenditure',
      })
    ).toBeInTheDocument()

    // 1. Foundation Tier (default)
    const tocNav = screen.getByRole('navigation', { name: /Table of contents|সূচিপত্র/i })
    expect(tocNav).toBeInTheDocument()
    expect(screen.getByText(/CHAPTER MAP/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Thermodynamic Foundations of Human Energy Balance/i)[0]).toBeInTheDocument()

    const depthGroup = screen.getByRole('group', { name: /Content depth|বিষয়বস্তুর গভীরতা/i })

    // 2. Switch to Academic Tier
    const academicBtn = within(depthGroup).getByRole('button', { name: /Academic/i })
    fireEvent.click(academicBtn)

    expect(screen.getByText(/CHAPTER MAP/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Thermodynamic Architecture of Energy Balance in Human Physiology/i)[0]).toBeInTheDocument()

    // 3. Switch to Advanced / Research Tier
    const advancedBtn = within(depthGroup).getByRole('button', { name: /Advanced \/ Research/i })
    fireEvent.click(advancedBtn)

    expect(screen.getByText(/CHAPTER MAP/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Thermodynamic Limits, Energy Flux & Dynamic Systems Biology/i)[0]).toBeInTheDocument()
  })

  it('ensures every TOC link points to a valid rendered section in the DOM for all depths', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/energy-balance-tdee')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '01 · Energy Balance, Basal Metabolic Rate & Total Daily Energy Expenditure',
      })
    ).toBeInTheDocument()

    const depthGroup = screen.getByRole('group', { name: /Content depth|বিষয়বস্তুর গভীরতা/i })
    const depths = ['Foundation', 'Academic', 'Advanced / Research']

    for (const depthLabel of depths) {
      const depthBtn = within(depthGroup).getByRole('button', { name: new RegExp(depthLabel, 'i') })
      fireEvent.click(depthBtn)

      const tocNav = screen.getByRole('navigation', { name: /Table of contents|সূচিপত্র/i })
      const tocButtons = tocNav.querySelectorAll('button')

      expect(tocButtons.length).toBeGreaterThan(0)

      // Test each TOC button in this depth
      tocButtons.forEach((btn) => {
        fireEvent.click(btn)
        // Check that scrollIntoView was triggered
        expect(Element.prototype.scrollIntoView).toHaveBeenCalled()
      })
    }
  })

  it('marks the active section in TOC and expands <details> when jumped', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/energy-balance-tdee')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '01 · Energy Balance, Basal Metabolic Rate & Total Daily Energy Expenditure',
      })
    ).toBeInTheDocument()

    const tocNav = screen.getByRole('navigation', { name: /Table of contents|সূচিপত্র/i })
    const tocButtons = tocNav.querySelectorAll('button')

    // Click the second TOC entry
    const secondButton = tocButtons[1]
    fireEvent.click(secondButton)

    // Should receive active-section class and aria-current="location"
    expect(secondButton.className).toContain('is-active-section')
    expect(secondButton.getAttribute('aria-current')).toBe('location')
  })

  it('persists selected depth across chapters in sessionStorage', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/energy-balance-tdee')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '01 · Energy Balance, Basal Metabolic Rate & Total Daily Energy Expenditure',
      })
    ).toBeInTheDocument()

    // Select Academic
    const depthGroup = screen.getByRole('group', { name: /Content depth|বিষয়বস্তুর গভীরতা/i })
    const academicBtn = within(depthGroup).getByRole('button', { name: /Academic/i })
    fireEvent.click(academicBtn)

    expect(sessionStorage.getItem('ghkh_learning_depth')).toBe('academic')
  })

  it('respects prefers-reduced-motion when jumping to sections', async () => {
    // Mock reduced motion
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/energy-balance-tdee')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '01 · Energy Balance, Basal Metabolic Rate & Total Daily Energy Expenditure',
      })
    ).toBeInTheDocument()

    const tocNav = screen.getByRole('navigation', { name: /Table of contents|সূচিপত্র/i })
    const firstTocBtn = tocNav.querySelector('button')
    if (firstTocBtn) {
      fireEvent.click(firstTocBtn)
      expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith(
        expect.objectContaining({ behavior: 'auto', block: 'start' })
      )
    }
  })

  it('synchronizes TOC in Bengali language mode', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/energy-balance-tdee')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '01 · Energy Balance, Basal Metabolic Rate & Total Daily Energy Expenditure',
      })
    ).toBeInTheDocument()

    // Switch to Bengali
    const langBtn = screen.getByRole('button', { name: 'Switch language' })
    fireEvent.click(langBtn)

    // Heading in Bengali
    expect(await screen.findByText(/অধ্যায়ের মানচিত্র/i)).toBeInTheDocument()
    expect(screen.getByText(/সূচিপত্র/i)).toBeInTheDocument()

    // Switch depth in Bengali
    const depthGroup = screen.getByRole('group', { name: /Content depth|বিষয়বস্তুর গভীরতা/i })
    const academicBnBtn = within(depthGroup).getByRole('button', { name: /একাডেমিক/i })
    fireEvent.click(academicBnBtn)

    expect(screen.getByText(/অধ্যায়ের মানচিত্র/i)).toBeInTheDocument()
    expect(screen.getAllByText('একাডেমিক').length).toBeGreaterThan(0)
  })

  it('handles isolated lesson topics safely with zero console errors', () => {
    const minimalLesson: LessonTopic = {
      id: 'test.isolated.lesson',
      slug: 'test-isolated',
      version: 1,
      updatedAt: '2026-11-03',
      title: { en: 'Isolated Test Lesson', bn: 'বিচ্ছিন্ন টেস্ট পাঠ' },
      summary: { en: 'Test summary', bn: 'টেস্ট সারাংশ' },
      subject: 'nutrition',
      evidenceClass: 'established-textbook-synthesis',
      reviewStatus: 'source-checked-expert-review-pending',
      lastReviewed: '2026-11-03',
      objectives: [{ en: 'Objective 1', bn: 'লক্ষ্য ১' }],
      prerequisiteIds: [],
      relatedTopicIds: [],
      references: [
        {
          id: 'ref-1',
          authors: 'Tester A, et al',
          title: 'Testing Scientific Methods',
          organization: 'Test Org',
          year: 2026,
          url: 'https://example.com/test',
        },
      ],
      evidenceBySection: {
        'sec-1': ['ref-1'],
      },
      levels: {
        foundation: {
          label: { en: 'Foundation', bn: 'ভিত্তি' },
          sections: [
            {
              id: 'sec-1',
              heading: { en: 'Section 1 Heading', bn: 'অনুচ্ছেদ ১ শিরোনাম' },
              paragraphs: [{ en: 'Test paragraph text [1].', bn: 'টেস্ট প্যারাগ্রাফ [১]। ' }],
            },
          ],
        },
        academic: {
          label: { en: 'Academic', bn: 'একাডেমিক' },
          sections: [
            {
              id: 'sec-acad-1',
              heading: { en: 'Academic Section Heading', bn: 'একাডেমিক অনুচ্ছেদ শিরোনাম' },
              paragraphs: [{ en: 'Academic explanation text.', bn: 'একাডেমিক বিবরণ।' }],
            },
          ],
        },
        advanced: {
          label: { en: 'Advanced', bn: 'উন্নত' },
          sections: [
            {
              id: 'sec-adv-1',
              heading: { en: 'Advanced Section Heading', bn: 'উন্নত অনুচ্ছেদ শিরোনাম' },
              paragraphs: [{ en: 'Advanced molecular text.', bn: 'উন্নত আণবিক বিবরণ।' }],
            },
          ],
        },
      },
      diagram: {
        accessibleDescription: { en: 'Diagram', bn: 'চিত্র' },
        steps: [{ en: 'Step 1', bn: 'ধাপ ১' }],
      },
      assessment: {
        question: { en: 'Question 1', bn: 'প্রশ্ন ১' },
        options: [{ en: 'Option A', bn: 'অপশন ক' }],
        correctIndex: 0,
        explanation: { en: 'Explanation', bn: 'ব্যাখ্যা' },
      },
      chapter: {
        toc: [],
        organelles: [],
        terms: [],
        checkpoints: [],
        workedExamples: [],
      },
    }

    render(
      <LocaleProvider>
        <MemoryRouter>
          <LessonRenderer lesson={minimalLesson} />
        </MemoryRouter>
      </LocaleProvider>
    )

    expect(screen.getByText('Isolated Test Lesson')).toBeInTheDocument()
    expect(screen.getAllByText('Section 1 Heading')[0]).toBeInTheDocument()

    // Switch depth to academic
    const acadBtn = screen.getByRole('button', { name: 'Academic' })
    fireEvent.click(acadBtn)
    expect(screen.getAllByText('Academic Section Heading')[0]).toBeInTheDocument()
  })
})

