import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from '../../App'
import { nutritionCurriculum } from '../../content/nutritionCurriculum'
import { lessons } from '../../content/lessons'
import {
  batch1NutritionChapters,
  allCompletedNutritionChapters,
  allCompletedChapters,
  allCompletedMetabolismChapters,
} from '../../content/chapters/chapterRegistry'
import { validateLessons } from '../../content/lessonSchema'

beforeEach(() => window.history.replaceState({ idx: 0 }, '', '/'))
afterEach(cleanup)

describe('Functional Nutrition & Dietetics Academy curriculum and Batch 1 Chapters', () => {
  it('defines an ordered 26-chapter curriculum across 6 thematic groups with Batch 1 available', () => {
    expect(nutritionCurriculum.chapters).toHaveLength(26)
    expect(nutritionCurriculum.groups.map((group) => group.id)).toEqual([
      'nutrition.foundations',
      'nutrition.macronutrients',
      'nutrition.micronutrients',
      'nutrition.microbiome',
      'nutrition.clinical',
      'nutrition.lifespan',
    ])
    expect(nutritionCurriculum.chapters.map((chapter) => chapter.order)).toEqual(
      Array.from({ length: 26 }, (_, index) => index + 1)
    )

    const availableChapters = nutritionCurriculum.chapters.filter((chapter) => chapter.status === 'available')
    expect(availableChapters).toHaveLength(4)
    expect(availableChapters.map((chapter) => chapter.id)).toEqual([
      'nutrition.chapter.01',
      'nutrition.chapter.02',
      'nutrition.chapter.03',
      'nutrition.chapter.04',
    ])

    const plannedChapters = nutritionCurriculum.chapters.filter((chapter) => chapter.status === 'planned')
    expect(plannedChapters).toHaveLength(22)
  })

  it('validates all Batch 1 Nutrition chapters using the strict lesson schema validator', () => {
    expect(batch1NutritionChapters).toHaveLength(4)
    expect(allCompletedNutritionChapters).toHaveLength(4)

    const issues = validateLessons([
      ...lessons,
      ...allCompletedChapters,
      ...allCompletedMetabolismChapters,
      ...batch1NutritionChapters,
    ])
    expect(issues).toEqual([])
  })

  it('renders the Nutrition curriculum overview and filters chapters by search query', async () => {
    const user = userEvent.setup()
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition')
    render(<App />)

    expect(await screen.findByRole('heading', { name: 'Nutrition & dietetics curriculum' })).toBeInTheDocument()
    expect(screen.getByText('4 / 26 chapters available')).toBeInTheDocument()

    // Chapter 01 and Chapter 04 visible initially
    expect(screen.getByText(/01 · Energy Balance, Basal Metabolic Rate/)).toBeInTheDocument()
    expect(screen.getByText(/04 · Dietary Fiber, Short-Chain Fatty Acids/)).toBeInTheDocument()

    // Search for "fiber"
    const searchInput = screen.getByPlaceholderText('Search available or planned nutrition lessons')
    await user.type(searchInput, 'fiber')

    // Chapter 04 remains, while non-matching chapters are filtered out
    expect(screen.getByText(/04 · Dietary Fiber, Short-Chain Fatty Acids/)).toBeInTheDocument()
    expect(screen.queryByText(/01 · Energy Balance, Basal Metabolic Rate/)).not.toBeInTheDocument()

    // Clear search
    await user.clear(searchInput)
    expect(screen.getByText(/01 · Energy Balance, Basal Metabolic Rate/)).toBeInTheDocument()
  })

  it('switches the Nutrition curriculum overview to Bengali', async () => {
    const user = userEvent.setup()
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition')
    render(<App />)

    expect(await screen.findByRole('heading', { name: 'Nutrition & dietetics curriculum' })).toBeInTheDocument()

    // Switch language to Bengali
    await user.click(screen.getByRole('button', { name: 'Switch language' }))

    expect(await screen.findByRole('heading', { name: 'পুষ্টি ও ডায়েটেটিক্স কারিকুলাম' })).toBeInTheDocument()
    expect(screen.getByText(/অধ্যায় উপলভ্য/)).toBeInTheDocument()
    expect(screen.getByText(/০১ · শক্তি ভারসাম্য, বেসাল মেটাবলিক রেট/)).toBeInTheDocument()
  })

  it('navigates to Chapter 01 (Energy Balance) and operates interactive diagram, citations, and focus mode', async () => {
    const user = userEvent.setup()
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/energy-balance-tdee')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '01 · Energy Balance, Basal Metabolic Rate & Total Daily Energy Expenditure',
      })
    ).toBeInTheDocument()

    // Verify Vancouver citations bar and End of Chapter References
    expect(screen.getByRole('heading', { name: 'Scientific references' })).toBeInTheDocument()
    expect(screen.getAllByText(/Modern Nutrition in Health and Disease/)[0]).toBeInTheDocument()

    // Operate Interactive Nutrient Diagram
    expect(screen.getByText('FUNCTIONAL NUTRITION SIMULATION')).toBeInTheDocument()
    const neatBtn = screen.getAllByRole('button', { name: /Non-Exercise Activity Thermogenesis/i })[0]
    await user.click(neatBtn)
    expect(screen.getByText(/NEAT is the most variable component of TDEE/i)).toBeInTheDocument()

    // Toggle Focus Mode
    const focusBtn = screen.getByRole('button', { name: /Focus view/i })
    await user.click(focusBtn)
    expect(screen.getByRole('button', { name: /Exit focus mode/i })).toBeInTheDocument()

    // Switch Depth Levels: Academic
    const academicTab = screen.getByRole('button', { name: 'Academic' })
    await user.click(academicTab)
    expect(academicTab).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText(/Thermodynamic Architecture of Energy Balance in Human Physiology/i)).toBeInTheDocument()

    // Switch Depth Levels: Advanced / Research
    const advancedTab = screen.getByRole('button', { name: 'Advanced / Research' })
    await user.click(advancedTab)
    expect(advancedTab).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getAllByText(/Constrained Total Energy Expenditure model/i)[0]).toBeInTheDocument()

    // Toggle Session Completion
    const completeBtn = screen.getByRole('button', { name: /Mark complete for this session/i })
    await user.click(completeBtn)
    expect(screen.getByRole('button', { name: /Mark not started/i })).toBeInTheDocument()
  })

  it('navigates to Chapter 02 (Macronutrient Digestion) and checks prev/next links', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/macronutrient-digestion-absorption')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '02 · Macronutrient Digestion, Brush-Border Transport & Absorption Mechanics',
      })
    ).toBeInTheDocument()

    // Check Previous link to Chapter 01
    const prevLink = screen.getByRole('link', {
      name: /01 · Energy Balance, Basal Metabolic Rate/i,
    })
    expect(prevLink).toHaveAttribute('href', '/learn/nutrition/chapters/energy-balance-tdee')

    // Check Next link to Chapter 03
    const nextLink = screen.getByRole('link', {
      name: /03 · Carbohydrate Quality: Glycemic Index/i,
    })
    expect(nextLink).toHaveAttribute('href', '/learn/nutrition/chapters/carbohydrate-quality-gi-gl')
  })

  it('navigates to Chapter 03 (Carbohydrate Quality) and operates interactive diagram', async () => {
    const user = userEvent.setup()
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/carbohydrate-quality-gi-gl')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '03 · Carbohydrate Quality: Glycemic Index, Glycemic Load & Resistant Starch',
      })
    ).toBeInTheDocument()

    // Operate diagram node
    const rsNodeBtn = screen.getAllByRole('button', { name: /Resistant Starch Taxonomy/i })[0]
    await user.click(rsNodeBtn)
    expect(screen.getByText(/RS1: physically trapped/i)).toBeInTheDocument()
  })

  it('navigates to Chapter 04 (Dietary Fiber & SCFA) and inspects next planned chapter indicator', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/dietary-fiber-scfa')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '04 · Dietary Fiber, Short-Chain Fatty Acids & Colonic Epithelial Integrity',
      })
    ).toBeInTheDocument()

    // Chapter 05 is a planned chapter
    expect(screen.getByText(/Next release/i)).toBeInTheDocument()
    expect(screen.getByText(/05 · Dietary Lipids/i)).toBeInTheDocument()
    expect(screen.getByText('Planned chapter')).toBeInTheDocument()
  })

  it('redirects from /learn/:module when visiting /learn/nutrition to the Nutrition overview', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition')
    render(<App />)

    expect(await screen.findByRole('heading', { name: 'Nutrition & dietetics curriculum' })).toBeInTheDocument()
  })
})
