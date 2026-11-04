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
  it('defines an ordered 32-chapter curriculum across 7 thematic groups with Chapters 01–16 available and Chapters 17–32 planned', () => {
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

    // Chapters 01–16 are available
    const availableChapters = dieteticsCurriculum.chapters.filter((chapter) => chapter.status === 'available')
    expect(availableChapters).toHaveLength(16)
    expect(availableChapters.map((ch) => ch.order)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])

    // Chapters 17–32 are strictly planned
    const plannedChapters = dieteticsCurriculum.chapters.filter((chapter) => chapter.status === 'planned')
    expect(plannedChapters).toHaveLength(16)
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

    expect(allCompletedDieteticsChapters).toHaveLength(16)
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
    expect(screen.getByText(/16 \/ 32 chapters available/i)).toBeInTheDocument()

    // Available chapter card visible with link
    const startLinks = screen.getAllByRole('link', { name: /Start chapter/i })
    expect(startLinks.length).toBe(16)

    // Test Search filtering
    const searchInput = screen.getByPlaceholderText(/Search available or planned dietetics lessons/i)
    await user.type(searchInput, 'ABCD')
    expect(screen.getByText(/01 · Clinical Nutrition Assessment/i)).toBeInTheDocument()

    // Clear and search for another available topic
    await user.clear(searchInput)
    await user.type(searchInput, 'Mifflin')
    expect(screen.getByText(/06 · Energy Expenditure Formulation/i)).toBeInTheDocument()

    // Clear and search for planned topic (e.g. Ch 17 DASH)
    await user.clear(searchInput)
    await user.type(searchInput, 'DASH')
    expect(screen.getByText(/17 · The Clinical DASH Protocol/i)).toBeInTheDocument()
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
    expect(screen.getByText(/16 \/ 32 অধ্যায় উপলভ্য/i)).toBeInTheDocument()
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

  it('navigates to Chapter 07 (Clinical Protein Prescriptions) and Chapter 09 (Fluid & Electrolytes)', async () => {
    window.history.replaceState({}, '', '/learn/dietetics/chapters/protein-requirements-metabolic-stress-kinetics')
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /07 · Clinical Protein Prescriptions: Nitrogen Balance & Hypercatabolic Titration/i,
      })
    ).toBeInTheDocument()

    const lesson07 = getDieteticsChapterLesson('topic.dietetics.protein-requirements')
    expect(lesson07).toBeDefined()

    // Navigate to Chapter 09
    window.history.replaceState({}, '', '/learn/dietetics/chapters/fluid-electrolyte-osmolar-prescriptions')
    cleanup()
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /09 · Fluid & Electrolyte Architecture: Osmolar Clearance & Maintenance Formulations/i,
      })
    ).toBeInTheDocument()

    const lesson09 = getDieteticsChapterLesson('topic.dietetics.fluid-electrolyte-prescriptions')
    expect(lesson09).toBeDefined()
    expect(screen.getAllByText(/Holliday-Segar 100\/50\/20 algorithm/i).length).toBeGreaterThan(0)
  })

  it('navigates to Chapter 10 (Therapeutic Micronutrient Prescriptions) and operates depth tiers', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/learn/dietetics/chapters/micronutrient-therapeutic-supplementation-protocols')
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /10 · Therapeutic Micronutrient Prescriptions: Deficiency Repletion Protocols/i,
      })
    ).toBeInTheDocument()

    const lesson10 = getDieteticsChapterLesson('topic.dietetics.micronutrient-protocols')
    expect(lesson10).toBeDefined()
    expect(screen.getAllByText(/Endocrine Society 50,000 IU/i).length).toBeGreaterThan(0)

    // Depth switch to Academic
    const academicBtn = screen.getByRole('button', { name: /Academic/i })
    await user.click(academicBtn)
    expect(screen.getAllByText(/Ganzoni Formula/i).length).toBeGreaterThan(0)

    // Depth switch to Advanced
    const advancedBtn = screen.getByRole('button', { name: /Advanced/i })
    await user.click(advancedBtn)
    expect(screen.getAllByText(/Wernicke Encephalopathy/i).length).toBeGreaterThan(0)
  })

  it('navigates to Chapter 11 (Standard Food Exchanges) and Chapter 12 (Bengali Food Exchanges)', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/learn/dietetics/chapters/standard-food-exchange-system-mechanics')
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /11 · Standard Food Exchange Systems: Macronutrient Portioning Mechanics/i,
      })
    ).toBeInTheDocument()

    const lesson11 = getDieteticsChapterLesson('topic.dietetics.food-exchange-systems')
    expect(lesson11).toBeDefined()
    expect(screen.getAllByText(/iso-macronutrient substitution/i).length).toBeGreaterThan(0)

    // Academic switch on Chapter 11
    const academicBtn = screen.getByRole('button', { name: /Academic/i })
    await user.click(academicBtn)
    expect(screen.getAllByText(/6-Step Clinical Menu Planning Algorithm/i).length).toBeGreaterThan(0)

    // Navigate to Chapter 12
    window.history.replaceState({}, '', '/learn/dietetics/chapters/south-asian-bengali-cultural-food-exchanges')
    cleanup()
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /12 · Bengali & South Asian Food Exchanges: Regional Carbohydrate & Protein Adaptation/i,
      })
    ).toBeInTheDocument()

    const lesson12 = getDieteticsChapterLesson('topic.dietetics.south-asian-exchanges')
    expect(lesson12).toBeDefined()
    expect(screen.getAllByText(/Thin-Fat.*Asian Indian Phenotype/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Dual-Exchange.*Dal.*Identity/i).length).toBeGreaterThan(0)
  })

  it('navigates to Chapter 13 (Carbohydrate Counting & ICR) and Chapter 14 (Glycemic Index & Load)', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/learn/dietetics/chapters/carbohydrate-counting-insulin-to-carb-ratios')
    cleanup()
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /13 · Carbohydrate Counting & Advanced Insulin-to-Carbohydrate Ratio \(ICR\) Planning/i,
      })
    ).toBeInTheDocument()

    const lesson13 = getDieteticsChapterLesson('topic.dietetics.carb-counting-icr')
    expect(lesson13).toBeDefined()
    expect(screen.getAllByText(/Metabolic Engine & Fuel Injection Analogy/i).length).toBeGreaterThan(0)

    // Academic switch on Chapter 13
    const academicBtn = screen.getByRole('button', { name: /Academic/i })
    await user.click(academicBtn)
    expect(screen.getAllByText(/Rule of 500/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Rule of 1800/i).length).toBeGreaterThan(0)

    // Navigate to Chapter 14
    window.history.replaceState({}, '', '/learn/dietetics/chapters/glycemic-index-glycemic-load-menu-engineering')
    cleanup()
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /14 · Glycemic Index & Glycemic Load: Precision Meal Engineering/i,
      })
    ).toBeInTheDocument()

    const lesson14 = getDieteticsChapterLesson('topic.dietetics.glycemic-index-load')
    expect(lesson14).toBeDefined()

    // Switch to Foundation on Chapter 14
    const foundationBtn14 = screen.getByRole('button', { name: /Foundation/i })
    await user.click(foundationBtn14)
    expect(screen.getAllByText(/Campfire Kindling vs. Hardwood Log Analogy/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Watermelon Paradox/i).length).toBeGreaterThan(0)

    // Academic switch on Chapter 14
    const academicBtn14 = screen.getByRole('button', { name: /Academic/i })
    await user.click(academicBtn14)
    expect(screen.getAllByText(/Linear Amylose.*Branched Amylopectin/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Second-Meal Effect/i).length).toBeGreaterThan(0)
  })

  it('navigates to Chapter 15 (Meal Frequency & Circadian) and Chapter 16 (Diabetes MNT)', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/learn/dietetics/chapters/therapeutic-meal-distribution-circadian-timing')
    cleanup()
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /15 · Meal Frequency, Protein Pulsing & Circadian Chrono-Nutrition/i,
      })
    ).toBeInTheDocument()

    const lesson15 = getDieteticsChapterLesson('topic.dietetics.meal-frequency-circadian')
    expect(lesson15).toBeDefined()

    // Switch to Foundation on Chapter 15
    const foundationBtn15 = screen.getByRole('button', { name: /Foundation/i })
    await user.click(foundationBtn15)
    expect(screen.getAllByText(/Day-Shift Factory Analogy/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Meal Frequency Myths/i).length).toBeGreaterThan(0)

    // Academic switch on Chapter 15
    const academicBtn15 = screen.getByRole('button', { name: /Academic/i })
    await user.click(academicBtn15)
    expect(screen.getAllByText(/The Leucine Trigger/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Time-Restricted Eating/i).length).toBeGreaterThan(0)

    // Advanced switch on Chapter 15
    const advancedBtn15 = screen.getByRole('button', { name: /Advanced/i })
    await user.click(advancedBtn15)
    expect(screen.getAllByText(/Migrating Motor Complex \(MMC\)/i).length).toBeGreaterThan(0)

    // Navigate to Chapter 16
    window.history.replaceState({}, '', '/learn/dietetics/chapters/diabetes-mellitus-t1d-t2d-gestational-mnt')
    cleanup()
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /16 · Medical Nutrition Therapy for Diabetes Mellitus: T1D, T2D & Gestational Hyperglycemia/i,
      })
    ).toBeInTheDocument()

    const lesson16 = getDieteticsChapterLesson('topic.dietetics.diabetes-mnt')
    expect(lesson16).toBeDefined()

    // Switch to Foundation on Chapter 16
    const foundationBtn16 = screen.getByRole('button', { name: /Foundation/i })
    await user.click(foundationBtn16)
    expect(screen.getAllByText(/The Key Factory and Jammed Locks/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/The Life-Saving Rule of 15/i).length).toBeGreaterThan(0)

    // Academic switch on Chapter 16
    const academicBtn16 = screen.getByRole('button', { name: /Academic/i })
    await user.click(academicBtn16)
    expect(screen.getAllByText(/The DiRECT Trial Protocol/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Gestational Diabetes MNT/i).length).toBeGreaterThan(0)

    // Advanced switch on Chapter 16
    const advancedBtn16 = screen.getByRole('button', { name: /Advanced/i })
    await user.click(advancedBtn16)
    expect(screen.getAllByText(/Roy Taylor’s Twin Cycle Hypothesis/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Beta-Cell Dedifferentiation vs\. Apoptosis/i).length).toBeGreaterThan(0)
  })
})
