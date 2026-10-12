import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from '../App'
import { lessons } from './lessons'
import { validateLessons, type LessonTopic } from './lessonSchema'

beforeEach(() => window.history.replaceState({ idx: 0 }, '', '/'))
afterEach(cleanup)

describe('scientific lesson content', () => {
  it('ships Cell Structure as a complete three-level chapter with traceable evidence', () => {
    const cell = lessons.find((lesson) => lesson.id === 'topic.cell.structure') as LessonTopic
    expect(cell.version).toBe(2)
    expect(cell.chapter?.toc).toHaveLength(12)
    expect(cell.chapter?.organelles).toHaveLength(9)
    expect(cell.chapter?.terms.length).toBeGreaterThanOrEqual(4)
    expect(cell.chapter?.workedExamples).toHaveLength(2)
    expect(cell.chapter?.checkpoints).toHaveLength(2)
    for (const level of ['foundation', 'academic', 'advanced'] as const) {
      expect(cell.levels[level].sections).toHaveLength(12)
      expect(cell.levels[level].sections.every((section) => section.paragraphs[0].en.length >= 120)).toBe(true)
      expect(cell.levels[level].sections.every((section) => section.paragraphs[0].bn.length >= 120)).toBe(true)
    }
    expect(cell.references.every((reference) => reference.url.startsWith('https://'))).toBe(true)
    expect(cell.evidenceBySection).toEqual(expect.objectContaining({ membrane: ['openstax-biology-2e-ch5'], endomembrane: ['cooper-cell-2-9'] }))
  })

  it('validates all published sample records and all internal topic relations', () => {
    expect(validateLessons(lessons)).toEqual([])
    expect(lessons).toHaveLength(3)
    expect(new Set(lessons.map((lesson) => lesson.id)).size).toBe(3)
    for (const lesson of lessons) {
      expect(lesson.references.every((reference) => reference.url.startsWith('https://'))).toBe(true)
      expect(Object.keys(lesson.levels)).toEqual(['foundation', 'academic', 'advanced'])
      expect(lesson.reviewStatus).toBe('source-checked-expert-review-pending')
    }
  })

  it('rejects missing translations, unresolved sources, short scientific explanations and broken links', () => {
    const altered = structuredClone(lessons[0])
    altered.relatedTopicIds.push('topic.missing')
    altered.references[0].url = 'not-a-url'
    const evidenceBySection = altered.evidenceBySection as Record<string, string[]>
    evidenceBySection.transport = ['missing-reference']
    altered.levels.foundation.sections[0].paragraphs[0].bn = ''
    altered.levels.academic.sections.find((section) => section.id === 'transport')!.paragraphs[0].en = 'Too short.'
    const issues = validateLessons([altered])
    expect(issues.some((issue) => issue.message.includes('Unresolved topic link'))).toBe(true)
    expect(issues.some((issue) => issue.message.includes('Unresolved reference ID'))).toBe(true)
    expect(issues.some((issue) => issue.path.includes('references.0.url'))).toBe(true)
    expect(issues.some((issue) => issue.path.includes('foundation.introduction'))).toBe(true)
    expect(issues.some((issue) => issue.message.includes('suspiciously short'))).toBe(true)
  })

  it('connects Knowledge navigation to the integrated student lesson routes', async () => {
    window.history.replaceState({}, '', '/knowledge')
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Knowledge library' })).toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: /Open lesson: Cell Structure/i }))
    expect(await screen.findByRole('heading', { name: 'Cell Structure' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Scientific references' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Open source/ })[0]).toHaveAttribute('href', expect.stringContaining('openstax.org'))
  })

  it('renders the same full lesson in Bengali and English and switches substantive depth', async () => {
    window.history.replaceState({}, '', '/learn/nutrition')
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Macronutrient Digestion' })).toBeInTheDocument()
    expect(screen.getByText(/Digestion combines mechanical processing with chemical hydrolysis/)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Switch language' }))
    expect(await screen.findByRole('heading', { name: 'ম্যাক্রোনিউট্রিয়েন্টের পরিপাক' })).toBeInTheDocument()
    expect(screen.getByText(/পরিপাকে যান্ত্রিক প্রক্রিয়াকরণ ও রাসায়নিক হাইড্রোলাইসিস/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'ভিত্তি' })).toHaveAttribute('aria-pressed', 'true')
    await user.click(screen.getByRole('button', { name: 'একাডেমিক' }))
    await waitFor(() => expect(screen.getByText(/অগ্ন্যাশয়ের জাইমোজেন/)).toBeInTheDocument())
    expect(screen.getByRole('heading', { name: 'বৈজ্ঞানিক তথ্যসূত্র' })).toBeInTheDocument()
  })

  it('offers keyboard-operable pathway and assessment controls', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/lessons/glucose-metabolism')
    const user = userEvent.setup()
    render(<App />)
    const next = screen.getByRole('button', { name: 'Next step' })
    await user.click(next)
    expect(screen.getByText('2 / 4')).toBeInTheDocument()
    await user.click(screen.getByRole('radio', { name: 'Two ATP' }))
    expect(screen.getByRole('status')).toHaveTextContent('Correct.')
  })

  it('provides a navigable reading map, progress indicator and accessible organelle diagram', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/lessons/cell-structure')
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Table of contents' })).toBeInTheDocument()
    expect(screen.getByRole('progressbar', { name: 'Chapter reading progress' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: 'Nucleus' })).toHaveLength(3)
    await user.click(screen.getAllByRole('button', { name: 'Nucleus' })[1])
    expect(screen.getAllByText('Stores most genomic DNA and coordinates regulated gene expression.')).toHaveLength(2)
    await user.click(screen.getByRole('button', { name: 'Academic' }))
    expect(screen.getByText(/A gene is expressed through linked steps/)).toBeInTheDocument()
  })

  it('keeps the complete Cell Structure chapter available in Bengali', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/lessons/cell-structure')
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Switch language' }))
    expect(screen.getByRole('heading', { name: 'কোষের গঠন' })).toBeInTheDocument()
    expect(screen.getByText(/ইউক্যারিওটিক কোষ এমন একটি জীবন্ত ব্যবস্থা/)).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'সূচিপত্র' })).toBeInTheDocument()
  })
})
