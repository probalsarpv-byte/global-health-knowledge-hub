import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from '../../App'
import { nutritionCurriculum } from '../../content/nutritionCurriculum'
import { lessons } from '../../content/lessons'
import {
  batch1NutritionChapters,
  batch2NutritionChapters,
  batch3NutritionChapters,
  allCompletedNutritionChapters,
  allCompletedChapters,
  allCompletedMetabolismChapters,
} from '../../content/chapters/chapterRegistry'
import { validateLessons } from '../../content/lessonSchema'

beforeEach(() => window.history.replaceState({ idx: 0 }, '', '/'))
afterEach(cleanup)

describe('Functional Nutrition & Dietetics Academy curriculum and Batches 1, 2 & 3 Chapters', () => {
  it('defines an ordered 26-chapter curriculum across 6 thematic groups with Batches 1, 2 & 3 (12 chapters) available', () => {
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
    expect(availableChapters).toHaveLength(12)
    expect(availableChapters.map((chapter) => chapter.id)).toEqual([
      'nutrition.chapter.01',
      'nutrition.chapter.02',
      'nutrition.chapter.03',
      'nutrition.chapter.04',
      'nutrition.chapter.05',
      'nutrition.chapter.06',
      'nutrition.chapter.07',
      'nutrition.chapter.08',
      'nutrition.chapter.09',
      'nutrition.chapter.10',
      'nutrition.chapter.11',
      'nutrition.chapter.12',
    ])

    const plannedChapters = nutritionCurriculum.chapters.filter((chapter) => chapter.status === 'planned')
    expect(plannedChapters).toHaveLength(14)
  })

  it('validates all Batches 1, 2 & 3 Nutrition chapters using the strict lesson schema validator', () => {
    expect(batch1NutritionChapters).toHaveLength(4)
    expect(batch2NutritionChapters).toHaveLength(4)
    expect(batch3NutritionChapters).toHaveLength(4)
    expect(allCompletedNutritionChapters).toHaveLength(12)

    const issues = validateLessons([
      ...lessons,
      ...allCompletedChapters,
      ...allCompletedMetabolismChapters,
      ...allCompletedNutritionChapters,
    ])
    expect(issues).toEqual([])
  })

  it('renders the Nutrition curriculum overview and filters chapters by search query', async () => {
    const user = userEvent.setup()
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition')
    render(<App />)

    expect(await screen.findByRole('heading', { name: 'Nutrition & dietetics curriculum' })).toBeInTheDocument()
    expect(screen.getByText('12 / 26 chapters available')).toBeInTheDocument()

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

  it('navigates to Chapter 04 (Dietary Fiber & SCFA) and inspects link to Chapter 05', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/dietary-fiber-scfa')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '04 · Dietary Fiber, Short-Chain Fatty Acids & Colonic Epithelial Integrity',
      })
    ).toBeInTheDocument()

    // Chapter 05 is now available and linked
    const nextLink = screen.getByRole('link', {
      name: /05 · Dietary Lipids/i,
    })
    expect(nextLink).toHaveAttribute('href', '/learn/nutrition/chapters/dietary-lipids-fatty-acids-pufa')
  })

  it('navigates to Chapter 05 (Dietary Lipids) and operates interactive diagram', async () => {
    const user = userEvent.setup()
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/dietary-lipids-fatty-acids-pufa')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '05 · Dietary Lipids: Fatty Acid Saturation, Trans-Fats & Essential PUFA Ratios',
      })
    ).toBeInTheDocument()

    // Operate trans fats node in diagram
    const transNodeBtns = screen.getAllByRole('button', { name: /Industrial Trans Fats/i })
    const transNodeBtn = transNodeBtns.find((b) => b.tagName.toLowerCase() === 'button') ?? transNodeBtns[0]
    await user.click(transNodeBtn)
    expect(screen.getByText(/mimics saturated fats/i)).toBeInTheDocument()
  })

  it('navigates to Chapter 06 (Dietary Proteins) and operates leucine threshold diagram node', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/protein-quality-diaas-nitrogen-balance')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '06 · Dietary Proteins, Amino Acid Quality, DIAAS/PDCAAS & Nitrogen Balance',
      })
    ).toBeInTheDocument()

    // Operate Leucine Threshold diagram node
    const leucineNodeBtns = screen.getAllByRole('button', { name: /The Leucine Threshold/i })
    for (const btn of leucineNodeBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getByText(/Sestrin2 binds free leucine/i)).toBeInTheDocument()
  })

  it('navigates to Chapter 07 (Satiety Neuroendocrinology) and operates ghrelin node', async () => {
    const user = userEvent.setup()
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/satiety-neuroendocrinology-appetite')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '07 · Satiety Neuroendocrinology: Leptin, Ghrelin, GLP-1, PYY & Appetite Regulation',
      })
    ).toBeInTheDocument()

    // Operate Ghrelin node
    const ghrelinNodeBtns = screen.getAllByRole('button', { name: /Gastric Fundus: Ghrelin/i })
    const ghrelinNodeBtn = ghrelinNodeBtns.find((b) => b.tagName.toLowerCase() === 'button') ?? ghrelinNodeBtns[0]
    await user.click(ghrelinNodeBtn)
    expect(screen.getByText(/Pre-prandial hunger hormone/i)).toBeInTheDocument()
  })

  it('navigates to Chapter 08 (Hydration & Electrolytes) and inspects link to Chapter 09', async () => {
    const user = userEvent.setup()
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/hydration-electrolytes-fluid-balance')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '08 · Cellular Hydration, Fluid Balance & Electrolyte Osmoregulation',
      })
    ).toBeInTheDocument()

    // Operate SGLT1 ORS node
    const sgltNodeBtns = screen.getAllByRole('button', { name: /Intestinal SGLT1 Cotransport/i })
    const sgltNodeBtn = sgltNodeBtns.find((b) => b.tagName.toLowerCase() === 'button') ?? sgltNodeBtns[0]
    await user.click(sgltNodeBtn)
    expect(screen.getAllByText(/Reduced-osmolarity ORS/i).length).toBeGreaterThanOrEqual(1)

    // Next chapter is Chapter 09 (available)
    expect(screen.getByText(/09 · Fat-Soluble Vitamins/i)).toBeInTheDocument()
  })

  it('navigates to Chapter 09 (Fat-Soluble Vitamins) and operates VKOR diagram node', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/fat-soluble-vitamins')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '09 · Fat-Soluble Vitamins (A, D, E, K): Genomic Signaling, Phototransduction & Antioxidation',
      })
    ).toBeInTheDocument()

    // Operate Vitamin K VKORC1 node
    const vkorBtns = screen.getAllByRole('button', { name: /Vitamin K Cycle: GGCX & VKORC1 Gla Synthesis/i })
    for (const btn of vkorBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getAllByText(/Reduced vitamin K hydroquinone/i).length).toBeGreaterThanOrEqual(1)
  })

  it('navigates to Chapter 10 (B-Complex Vitamins) and operates PDH TPP coenzyme node', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/b-complex-vitamins-bioenergetics')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '10 · Water-Soluble Vitamins: B-Complex Coenzymes in Mitochondrial Bioenergetics',
      })
    ).toBeInTheDocument()

    // Operate Thiamine TPP node
    const tppBtns = screen.getAllByRole('button', { name: /Thiamine \(B1\) - TPP \(E1: Pyruvate Decarboxylase\)/i })
    for (const btn of tppBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getByText(/Thiazolium carbanion of TPP attacks pyruvate/i)).toBeInTheDocument()
  })

  it('navigates to Chapter 11 (Vitamin C & Trace Minerals) and operates Selenium GPx node', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/vitamin-c-trace-minerals-redox')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '11 · Vitamin C, Trace Minerals & Cellular Antioxidant Defense Networks',
      })
    ).toBeInTheDocument()

    // Operate Selenium GPx node
    const gpxBtns = screen.getAllByRole('button', { name: /Selenium Glutathione Peroxidases \(GPx1–4\)/i })
    for (const btn of gpxBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getByText(/Reduces H2O2 and toxic lipid hydroperoxides/i)).toBeInTheDocument()
  })

  it('navigates to Chapter 12 (Macrominerals & Bone Matrix) and inspects next planned chapter indicator', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/macrominerals-bone-calcium-magnesium')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '12 · Macrominerals & Bone Matrix: Calcium, Phosphorus, Magnesium Homeostasis',
      })
    ).toBeInTheDocument()

    // Operate RANKL/OPG node
    const ranklBtns = screen.getAllByRole('button', { name: /Bone Remodeling Unit: RANKL vs OPG Coupling/i })
    for (const btn of ranklBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getByText(/Osteoblast RANKL binds osteoclast RANK/i)).toBeInTheDocument()

    // Next chapter is Chapter 13 (planned)
    expect(screen.getByText(/Next release/i)).toBeInTheDocument()
    expect(screen.getByText(/13 · Iron Biology/i)).toBeInTheDocument()
    expect(screen.getByText('Planned chapter')).toBeInTheDocument()
  })

  it('redirects from /learn/:module when visiting /learn/nutrition to the Nutrition overview', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition')
    render(<App />)

    expect(await screen.findByRole('heading', { name: 'Nutrition & dietetics curriculum' })).toBeInTheDocument()
  })
})
