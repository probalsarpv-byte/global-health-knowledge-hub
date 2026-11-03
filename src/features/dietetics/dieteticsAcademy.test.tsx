import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from '../../App'
import { dieteticsCurriculum } from '../../content/dieteticsCurriculum'
import {
  allCompletedDieteticsChapters,
  getDieteticsChapterLesson,
} from '../../content/chapters/chapterRegistry'

beforeEach(() => {
  window.history.replaceState({ idx: 0 }, '', '/')
  if (typeof window !== 'undefined' && window.sessionStorage) {
    window.sessionStorage.clear()
  }
})
afterEach(cleanup)

describe('Practical Diet Planning & Therapeutic Dietetics Academy (V2.8 Recovery Batch A)', () => {
  it('defines an ordered 32-chapter curriculum across 7 thematic groups with Chapter 01 available and Chapters 02–32 planned', () => {
    expect(dieteticsCurriculum.chapters).toHaveLength(32)
    expect(dieteticsCurriculum.groups).toHaveLength(7)
    expect(dieteticsCurriculum.groups.map((group) => group.id)).toEqual([
      'dietetics.assessment',
      'dietetics.prescriptions',
      'dietetics.exchanges',
      'dietetics.cardiometabolic',
      'dietetics.organspecific',
      'dietetics.nutritionsupport',
      'dietetics.lifespan-cases',
    ])

    // Chapter order continuity
    expect(dieteticsCurriculum.chapters.map((chapter) => chapter.order)).toEqual(
      Array.from({ length: 32 }, (_, index) => index + 1)
    )

    // Chapter 01 is available
    const availableChapters = dieteticsCurriculum.chapters.filter((chapter) => chapter.status === 'available')
    expect(availableChapters).toHaveLength(1)
    expect(availableChapters[0].id).toBe('dietetics.chapter.01')
    expect(availableChapters[0].slug).toBe('clinical-nutrition-assessment-abcd')

    // Chapters 02–32 are strictly planned
    const plannedChapters = dieteticsCurriculum.chapters.filter((chapter) => chapter.status === 'planned')
    expect(plannedChapters).toHaveLength(31)
    plannedChapters.forEach((ch) => {
      expect(ch.status).toBe('planned')
      expect(ch.completionStatus).toBe('not-started')
    })

    // Strict bilingual metadata coverage
    dieteticsCurriculum.chapters.forEach((chapter) => {
      expect(chapter.title.en).toBeTruthy()
      expect(chapter.title.bn).toBeTruthy()
      expect(chapter.summary.en).toBeTruthy()
      expect(chapter.summary.bn).toBeTruthy()
      expect(chapter.estimatedMinutes).toBeGreaterThan(0)
    })

    dieteticsCurriculum.groups.forEach((group) => {
      expect(group.title.en).toBeTruthy()
      expect(group.title.bn).toBeTruthy()
      expect(group.description.en).toBeTruthy()
      expect(group.description.bn).toBeTruthy()
    })
  })

  it('renders the Dietetics curriculum overview and filters chapters by search query', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/learn/dietetics')
    render(<App />)

    // Hero banner and header checks
    expect(
      screen.getByRole('heading', {
        name: /Practical diet planning & therapeutic dietetics curriculum/i,
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/1 \/ 32 chapters available/i)).toBeInTheDocument()

    // Flagship Chapter 01 card visible with available badge and link
    expect(screen.getByRole('link', { name: /Start chapter/i })).toBeInTheDocument()

    // Test Search filtering
    const searchInput = screen.getByPlaceholderText(/Search available or planned dietetics lessons/i)
    await user.type(searchInput, 'ABCD')
    expect(screen.getByText(/01 · Clinical Nutrition Assessment/i)).toBeInTheDocument()

    // Clear and search for planned topic
    await user.clear(searchInput)
    await user.type(searchInput, 'Mifflin')
    expect(screen.getByText(/06 · Energy Expenditure Formulation/i)).toBeInTheDocument()
    expect(screen.getByText(/In preparation/i)).toBeInTheDocument()
  })

  it('switches the Dietetics curriculum overview to Bengali', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/learn/dietetics')
    render(<App />)

    const langToggle = screen.getByRole('button', { name: /Switch language/i })
    await user.click(langToggle)

    expect(
      screen.getByRole('heading', {
        name: /ব্যবহারিক পথ্য পরিকল্পনা ও থেরাপিউটিক ডায়েটেটিক্স কারিকুলাম/i,
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/১ \/ ৩২ অধ্যায় উপলভ্য/i)).toBeInTheDocument()
    expect(screen.getByText(/০১ · ক্লিনিক্যাল পুষ্টি মূল্যায়ন/i)).toBeInTheDocument()
  })

  it('navigates to Chapter 01 (Clinical Nutrition Assessment) and operates depth tiers, citations, and completion toggle', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/learn/dietetics/chapters/clinical-nutrition-assessment-abcd')
    render(<App />)

    // Verify Chapter Title rendered
    expect(
      screen.getByRole('heading', {
        name: /01 · Clinical Nutrition Assessment: The ABCD Model & Anthropometric Diagnostics/i,
      })
    ).toBeInTheDocument()

    // Verify Lesson is retrieved by registry
    const lesson = getDieteticsChapterLesson('topic.dietetics.assessment-abcd')
    expect(lesson).toBeDefined()
    expect(lesson?.slug).toBe('clinical-nutrition-assessment-abcd')
    expect(allCompletedDieteticsChapters).toHaveLength(1)

    // Verify Vancouver Numeric Citations in text
    expect(screen.getAllByRole('link', { name: '1' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: '2' }).length).toBeGreaterThan(0)

    // Verify EndOfChapterReferences rendered
    expect(screen.getByRole('heading', { name: /References & Literature Evidence/i })).toBeInTheDocument()
    expect(screen.getByText(/GLIM Criteria for the Diagnosis of Malnutrition/i)).toBeInTheDocument()

    // Depth Switching to Academic
    const academicBtn = screen.getByRole('button', { name: /Academic/i })
    await user.click(academicBtn)
    expect(
      screen.getByRole('heading', {
        name: /2\. Anthropometric Equations: Hamwi IBW, Adjusted Weight & Weight Loss Velocity/i,
      })
    ).toBeInTheDocument()

    // Depth Switching to Advanced
    const advancedBtn = screen.getByRole('button', { name: /Advanced/i })
    await user.click(advancedBtn)
    expect(
      screen.getByRole('heading', {
        name: /1\. The GLIM Global Consensus Diagnostic Framework/i,
      })
    ).toBeInTheDocument()

    // Test session completion toggle
    const completeButton = screen.getByRole('button', { name: /Mark complete for this session/i })
    await user.click(completeButton)
    expect(screen.getByText(/Marked complete for this session/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Mark not started/i })).toBeInTheDocument()
  })
})

