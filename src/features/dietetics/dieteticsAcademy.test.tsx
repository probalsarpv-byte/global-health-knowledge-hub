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

describe('Practical Diet Planning & Therapeutic Dietetics Academy (V2.8 Recovery Batches A & B)', () => {
  it('defines an ordered 32-chapter curriculum across 7 thematic groups with Chapters 01–10 available and Chapters 11–32 planned', () => {
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

    // Chapters 01–10 are available
    const availableChapters = dieteticsCurriculum.chapters.filter((chapter) => chapter.status === 'available')
    expect(availableChapters).toHaveLength(10)
    expect(availableChapters.map((ch) => ch.order)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    // Chapters 11–32 are strictly planned
    const plannedChapters = dieteticsCurriculum.chapters.filter((chapter) => chapter.status === 'planned')
    expect(plannedChapters).toHaveLength(22)
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

    expect(allCompletedDieteticsChapters).toHaveLength(10)
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
    expect(screen.getByText(/10 \/ 32 chapters available/i)).toBeInTheDocument()

    // Available chapter card visible with link
    const startLinks = screen.getAllByRole('link', { name: /Start chapter/i })
    expect(startLinks.length).toBe(10)

    // Test Search filtering
    const searchInput = screen.getByPlaceholderText(/Search available or planned dietetics lessons/i)
    await user.type(searchInput, 'ABCD')
    expect(screen.getByText(/01 · Clinical Nutrition Assessment/i)).toBeInTheDocument()

    // Clear and search for another available topic
    await user.clear(searchInput)
    await user.type(searchInput, 'Mifflin')
    expect(screen.getByText(/06 · Energy Expenditure Formulation/i)).toBeInTheDocument()

    // Clear and search for planned topic
    await user.clear(searchInput)
    await user.type(searchInput, 'Carbohydrate Counting')
    expect(screen.getByText(/13 · Carbohydrate Counting/i)).toBeInTheDocument()
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
    expect(screen.getByText(/10 \/ 32 অধ্যায় উপলভ্য/i)).toBeInTheDocument()
    expect(screen.getByText(/০১ · ক্লিনিক্যাল পুষ্টি মূল্যায়ন/i)).toBeInTheDocument()
    expect(screen.getByText(/০২ · নিউট্রিশন কেয়ার প্রসেস/i)).toBeInTheDocument()
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

    // Verify Vancouver Numeric Citations in text
    expect(screen.getAllByRole('doc-noteref', { name: /Citation \[1\]/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('doc-noteref', { name: /Citation \[2\]/i }).length).toBeGreaterThan(0)

    // Verify EndOfChapterReferences rendered
    expect(screen.getByRole('heading', { name: /Scientific references/i })).toBeInTheDocument()
    expect(screen.getAllByText(/GLIM Criteria for the Diagnosis of Malnutrition/i).length).toBeGreaterThan(0)

    // Depth Switching to Academic
    const academicBtn = screen.getByRole('button', { name: /Academic/i })
    await user.click(academicBtn)
    expect(
      screen.getByRole('button', {
        name: /2.*Anthropometric Equations: Hamwi IBW, Adjusted Weight & Weight Loss Velocity/i,
      })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/Anthropometric Equations: Hamwi IBW/i).length).toBeGreaterThan(0)

    // Depth Switching to Advanced
    const advancedBtn = screen.getByRole('button', { name: /Advanced/i })
    await user.click(advancedBtn)
    expect(
      screen.getByRole('button', {
        name: /1.*The GLIM Global Consensus Diagnostic Framework/i,
      })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/The GLIM Global Consensus Diagnostic Framework/i).length).toBeGreaterThan(0)

    // Test session completion toggle
    const completeButton = screen.getByRole('button', { name: /Mark complete for this session/i })
    await user.click(completeButton)
    expect(screen.getByText(/Marked complete for this session/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Mark not started/i })).toBeInTheDocument()
  })

  it('navigates to Chapter 02 (eNCPT PES Diagnostics) and verifies ADIME and PES structure', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/learn/dietetics/chapters/ncp-pes-diagnostic-statements')
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /02 · The Nutrition Care Process & Standardized eNCPT PES Diagnostics/i,
      })
    ).toBeInTheDocument()

    const lesson = getDieteticsChapterLesson('topic.dietetics.ncp-pes-diagnostics')
    expect(lesson).toBeDefined()
    expect(lesson?.slug).toBe('ncp-pes-diagnostic-statements')

    // Citations
    expect(screen.getAllByRole('doc-noteref', { name: /Citation \[1\]/i }).length).toBeGreaterThan(0)

    // Depth switch to Academic
    const academicBtn = screen.getByRole('button', { name: /Academic/i })
    await user.click(academicBtn)
    expect(screen.getAllByText(/eNCPT Diagnostic Taxonomy/i).length).toBeGreaterThan(0)
  })

  it('navigates to Chapter 06 (Mifflin & Penn State Energy Formulation) and operates depth tiers', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/learn/dietetics/chapters/predictive-energy-equations-mifflin-penn')
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /06 · Energy Expenditure Formulation: Mifflin-St Jeor, Penn State & Stress Factors/i,
      })
    ).toBeInTheDocument()

    const lesson = getDieteticsChapterLesson('topic.dietetics.predictive-energy-equations')
    expect(lesson).toBeDefined()

    // Academic check
    const academicBtn = screen.getByRole('button', { name: /Academic/i })
    await user.click(academicBtn)
    expect(screen.getAllByText(/The Penn State Equations for Mechanical Ventilation/i).length).toBeGreaterThan(0)
  })

  it('navigates to Chapter 07 (Clinical Protein Prescriptions) and Chapter 10 (Micronutrient Protocols)', async () => {
    window.history.replaceState({}, '', '/learn/dietetics/chapters/protein-requirements-metabolic-stress-kinetics')
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /07 · Clinical Protein Prescriptions: Nitrogen Balance & Hypercatabolic Titration/i,
      })
    ).toBeInTheDocument()

    const lesson07 = getDieteticsChapterLesson('topic.dietetics.protein-requirements')
    expect(lesson07).toBeDefined()

    // Navigate to Chapter 10
    window.history.replaceState({}, '', '/learn/dietetics/chapters/micronutrient-therapeutic-supplementation-protocols')
    cleanup()
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /10 · Therapeutic Micronutrient Prescriptions: Deficiency Repletion Protocols/i,
      })
    ).toBeInTheDocument()

    const lesson10 = getDieteticsChapterLesson('topic.dietetics.micronutrient-protocols')
    expect(lesson10).toBeDefined()
    expect(screen.getAllByText(/Endocrine Society 50,000 IU Vitamin D3/i).length).toBeGreaterThan(0)
  })
})
