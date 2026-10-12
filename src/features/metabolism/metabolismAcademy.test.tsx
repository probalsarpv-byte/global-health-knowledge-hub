import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from '../../App'
import { metabolismCurriculum } from '../../content/metabolismCurriculum'
import {
  allCompletedChapters,
  batch1MetabolismChapters,
} from '../../content/chapters/chapterRegistry'
import { lessons } from '../../content/lessons'
import { validateLessons } from '../../content/lessonSchema'

beforeEach(() => window.history.replaceState({ idx: 0 }, '', '/'))
afterEach(cleanup)

describe('Human Metabolism Academy curriculum and Batch 1 Chapters (01–04 complete)', () => {
  it('defines an ordered 18-chapter curriculum with Batch 1 available across 5 thematic groups', () => {
    expect(metabolismCurriculum.chapters).toHaveLength(18)
    expect(metabolismCurriculum.groups.map((group) => group.id)).toEqual([
      'metabolism.foundations',
      'metabolism.lipids',
      'metabolism.nitrogen',
      'metabolism.integration',
      'metabolism.clinical',
    ])
    expect(metabolismCurriculum.chapters.map((chapter) => chapter.order)).toEqual(
      Array.from({ length: 18 }, (_, index) => index + 1)
    )

    const availableChapters = metabolismCurriculum.chapters.filter((chapter) => chapter.status === 'available')
    expect(availableChapters).toHaveLength(4)
    expect(availableChapters.map((chapter) => chapter.id)).toEqual([
      'metabolism.chapter.01',
      'metabolism.chapter.02',
      'metabolism.chapter.03',
      'metabolism.chapter.04',
    ])

    const plannedChapters = metabolismCurriculum.chapters.filter((chapter) => chapter.status === 'planned')
    expect(plannedChapters).toHaveLength(14)
  })

  it('validates complete bilingual Batch 1 records, paragraph lengths (>=120 chars), and scientific citations', () => {
    expect(batch1MetabolismChapters).toHaveLength(4)
    const issues = validateLessons([...lessons, ...allCompletedChapters, ...batch1MetabolismChapters])
    expect(issues).toEqual([])

    for (const chapter of batch1MetabolismChapters) {
      expect(chapter.subject).toBe('metabolism')
      for (const depth of ['foundation', 'academic', 'advanced'] as const) {
        const level = chapter.levels[depth]
        expect(level.sections.length).toBeGreaterThanOrEqual(2)
        expect(
          level.sections.every(
            (section) =>
              section.paragraphs[0].en.trim().length >= 120 &&
              section.paragraphs[0].bn.trim().length >= 120
          )
        ).toBe(true)
      }
      expect(
        chapter.references.every(
          (reference) => reference.url.startsWith('https://') && reference.authors && reference.year
        )
      ).toBe(true)
      expect(chapter.interactiveDiagram?.items.length).toBeGreaterThanOrEqual(4)
    }
  })

  it('renders the Metabolism curriculum overview and filters chapters by search query', async () => {
    window.history.replaceState({}, '', '/learn/metabolism')
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Metabolism curriculum' })).toBeInTheDocument()
    expect(screen.getByText(/4 \/ 18 chapters available/i)).toBeInTheDocument()
    expect(screen.getByText(/01 · Introduction to Human Metabolism & Bioenergetics/i)).toBeInTheDocument()
    expect(screen.getByText(/02 · Glycolysis & Pyruvate Oxidation/i)).toBeInTheDocument()

    const searchInput = screen.getByPlaceholderText(/Search available or planned metabolism lessons/i)
    await user.type(searchInput, 'Glycolysis')

    expect(screen.getByText(/02 · Glycolysis & Pyruvate Oxidation/i)).toBeInTheDocument()
    expect(screen.queryByText(/01 · Introduction to Human Metabolism & Bioenergetics/i)).not.toBeInTheDocument()
  })

  it('switches the Metabolism curriculum overview to Bengali', async () => {
    window.history.replaceState({}, '', '/learn/metabolism')
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Switch language' }))

    expect(screen.getByRole('heading', { name: 'বিপাক কারিকুলাম' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'বিপাকীয় ভিত্তি ও জৈবশক্তিবিজ্ঞান' })).toBeInTheDocument()
    expect(screen.getByText(/০১ · মানব বিপাক ও জৈবশক্তিবিজ্ঞানের পরিচয়/i)).toBeInTheDocument()
    expect(screen.getByText(/০২ · গ্লাইকোলাইসিস ও পাইরুভেট জারণ/i)).toBeInTheDocument()
  })

  it('navigates to Chapter 01 (Bioenergetics) and operates interactive bioenergetic landscape diagram', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/intro-bioenergetics')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '01 · Introduction to Human Metabolism & Bioenergetics' })
    ).toBeInTheDocument()

    const pepButton = screen.getByRole('button', {
      name: /Phosphoenolpyruvate \(PEP\) \[-61.9 kJ\/mol\]/i,
    })
    expect(pepButton).toBeInTheDocument()
    await user.click(pepButton)
    expect(screen.getByText(/The highest-energy phosphorylated metabolite in glycolysis/i)).toBeInTheDocument()

    // Answer knowledge assessment
    const correctOption = screen.getByRole('radio', {
      name: /The removal of the phosphate group traps PEP products because the enol tautomer spontaneously converts to the much more stable keto form of pyruvate/i,
    })
    await user.click(correctOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 02 (Glycolysis) and operates interactive pathway explorer and assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/glycolysis-pyruvate')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '02 · Glycolysis & Pyruvate Oxidation' })
    ).toBeInTheDocument()

    const pfk1Node = screen.getByRole('button', {
      name: /Step 3: Phosphofructokinase-1 \(F6P -> F1,6BP\)/i,
    })
    await user.click(pfk1Node)
    expect(screen.getByText(/The primary committed step and master valve of glycolysis/i)).toBeInTheDocument()

    // Answer assessment on Wernicke encephalopathy / thiamine
    const option = screen.getByRole('radio', {
      name: /Pyruvate dehydrogenase complex, due to severe deficiency of thiamine pyrophosphate \(TPP \/ vitamin B1\)\./i,
    })
    await user.click(option)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 03 (TCA & OxPhos) and operates electron transport chain diagram', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/tca-oxphos')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '03 · Citric Acid Cycle & Oxidative Phosphorylation' })
    ).toBeInTheDocument()

    const complex4Node = screen.getByRole('button', {
      name: /Complex IV: Cytochrome c Oxidase \[2 H\+ pumped, O2 consumed\]/i,
    })
    await user.click(complex4Node)
    expect(screen.getByText(/Terminal respiratory enzyme/i)).toBeInTheDocument()

    // Answer assessment on uncoupler
    const uncouplerOption = screen.getByRole('radio', {
      name: /An uncoupler of oxidative phosphorylation \(such as 2,4-dinitrophenol\)/i,
    })
    await user.click(uncouplerOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 04 (Glycogen & Gluconeogenesis) and tests session completion and previous/next navigation', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/glycogen-gluconeogenesis')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '04 · Glycogen Metabolism & Gluconeogenesis' })
    ).toBeInTheDocument()

    // Test session completion button
    const completionBtn = screen.getByRole('button', { name: /Mark complete for this session/i })
    await user.click(completionBtn)
    expect(screen.getByRole('heading', { name: /Marked complete for this session/i })).toBeInTheDocument()

    // Test previous chapter navigation link (Chapter 03)
    const prevLink = screen.getByRole('link', {
      name: /03 · Citric Acid Cycle & Oxidative Phosphorylation/i,
    })
    await user.click(prevLink)
    expect(
      screen.getByRole('heading', { name: '03 · Citric Acid Cycle & Oxidative Phosphorylation' })
    ).toBeInTheDocument()
  })
})
