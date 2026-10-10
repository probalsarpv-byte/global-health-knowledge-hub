import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from '../../App'
import { anatomyCurriculum } from '../../content/anatomyCurriculum'
import { anatomyIntroductionLesson } from '../../content/anatomyIntroductionLesson'
import { lessons } from '../../content/lessons'
import { validateLessons } from '../../content/lessonSchema'

beforeEach(() => window.history.replaceState({ idx: 0 }, '', '/'))
afterEach(cleanup)

describe('Anatomy Academy curriculum and Chapter 01', () => {
  it('defines an ordered 28-chapter curriculum with only Chapter 01 available', () => {
    expect(anatomyCurriculum.chapters).toHaveLength(28)
    expect(anatomyCurriculum.groups.map((group) => group.id)).toEqual(['anatomy.foundations', 'anatomy.musculoskeletal', 'anatomy.organ-systems', 'anatomy.neuroanatomy', 'anatomy.regional', 'anatomy.imaging-clinical'])
    expect(anatomyCurriculum.chapters.map((chapter) => chapter.order)).toEqual(Array.from({ length: 28 }, (_, index) => index + 1))
    expect(anatomyCurriculum.chapters.filter((chapter) => chapter.status === 'available').map((chapter) => chapter.id)).toEqual(['anatomy.chapter.01'])
    expect(anatomyCurriculum.chapters.filter((chapter) => chapter.status === 'planned')).toHaveLength(27)
  })

  it('validates complete bilingual Chapter 01 records and reference metadata', () => {
    expect(validateLessons([...lessons, anatomyIntroductionLesson])).toEqual([])
    for (const depth of ['foundation', 'academic', 'advanced'] as const) {
      const level = anatomyIntroductionLesson.levels[depth]
      expect(level.sections).toHaveLength(8)
      expect(level.sections.every((section) => section.paragraphs[0].en.length >= 120 && section.paragraphs[0].bn.length >= 120)).toBe(true)
    }
    expect(anatomyIntroductionLesson.references.every((reference) => reference.url.startsWith('https://') && reference.authors && reference.year)).toBe(true)
    expect(anatomyIntroductionLesson.anatomyExplorer?.planes).toHaveLength(3)
    expect(anatomyIntroductionLesson.anatomyExplorer?.regions).toHaveLength(4)
  })

  it('navigates the curriculum to Chapter 01 and operates explorer controls', async () => {
    window.history.replaceState({}, '', '/learn/anatomy')
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Anatomy curriculum' })).toBeInTheDocument()
    expect(screen.getByText('Planned · Coming soon')).toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: 'Open chapter' }))
    expect(await screen.findByRole('heading', { name: 'Introduction to Human Anatomy' })).toBeInTheDocument()
    expect(screen.getByText(/Original 2D teaching schematic/)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Frontal / coronal plane' }))
    expect(screen.getByRole('button', { name: 'Frontal / coronal plane' })).toHaveAttribute('aria-pressed', 'true')
    await user.click(screen.getByRole('button', { name: 'Upper limb' }))
    expect(screen.getByText(/proximal and distal terms/)).toBeInTheDocument()
    await user.keyboard('{Enter}')
  })

  it('switches Chapter 01 and explorer content to Bengali', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/introduction-human-anatomy')
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Switch language' }))
    expect(await screen.findByRole('heading', { name: 'মানব অ্যানাটমির পরিচয়' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'স্যাজিটাল প্লেন' })).toBeInTheDocument()
    expect(screen.getByText(/মূল 2D শিক্ষামূলক schematic/)).toBeInTheDocument()
  })
})
