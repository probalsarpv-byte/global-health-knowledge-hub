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
  batch4NutritionChapters,
  batch5NutritionChapters,
  allCompletedNutritionChapters,
  allCompletedChapters,
  allCompletedMetabolismChapters,
} from '../../content/chapters/chapterRegistry'
import { validateLessons } from '../../content/lessonSchema'

beforeEach(() => window.history.replaceState({ idx: 0 }, '', '/'))
afterEach(cleanup)

describe('Functional Nutrition & Dietetics Academy curriculum and Batches 1, 2, 3, 4 & 5 Chapters', () => {
  it('defines an ordered 26-chapter curriculum across 6 thematic groups with Batches 1, 2, 3, 4 & 5 (20 chapters) available', () => {
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
    expect(availableChapters).toHaveLength(20)
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
      'nutrition.chapter.13',
      'nutrition.chapter.14',
      'nutrition.chapter.15',
      'nutrition.chapter.16',
      'nutrition.chapter.17',
      'nutrition.chapter.18',
      'nutrition.chapter.19',
      'nutrition.chapter.20',
    ])

    const plannedChapters = nutritionCurriculum.chapters.filter((chapter) => chapter.status === 'planned')
    expect(plannedChapters).toHaveLength(6)
  })

  it('validates all Batches 1, 2, 3, 4 & 5 Nutrition chapters using the strict lesson schema validator', () => {
    expect(batch1NutritionChapters).toHaveLength(4)
    expect(batch2NutritionChapters).toHaveLength(4)
    expect(batch3NutritionChapters).toHaveLength(4)
    expect(batch4NutritionChapters).toHaveLength(4)
    expect(batch5NutritionChapters).toHaveLength(4)
    expect(allCompletedNutritionChapters).toHaveLength(20)

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
    expect(screen.getByText('20 / 26 chapters available')).toBeInTheDocument()

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

  it('navigates to Chapter 12 (Macrominerals & Bone Matrix) and inspects link to Chapter 13', async () => {
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

    // Next chapter is Chapter 13 (now available)
    expect(screen.getByText(/13 · Iron Biology: Dietary Bioavailability, Ferritin, Transferrin & Hepcidin/i)).toBeInTheDocument()
  })

  it('navigates to Chapter 13 (Iron Biology) and operates Hepcidin degradation node', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/iron-biology-hepcidin-anemia')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '13 · Iron Biology: Dietary Bioavailability, Ferritin, Transferrin & Hepcidin',
      })
    ).toBeInTheDocument()

    // Operate Hepcidin node
    const hepcidinBtns = screen.getAllByRole('button', { name: /Hepatic Hepcidin & Lysosomal Degradation/i })
    for (const btn of hepcidinBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getAllByText(/Hepcidin binds Ferroportin/i).length).toBeGreaterThanOrEqual(1)
  })

  it('navigates to Chapter 14 (Gut Barrier) and operates MLCK leak pathway node', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/gut-barrier-mucosal-immunity')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '14 · The Gastrointestinal Barrier: Mucosal Immunity & Tight Junction Integrity',
      })
    ).toBeInTheDocument()

    // Operate MLCK node
    const mlckBtns = screen.getAllByRole('button', { name: /MLCK Phosphorylation & Leak Pathway/i })
    for (const btn of mlckBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getAllByText(/Myosin Light Chain Kinase \(MLCK\)/i).length).toBeGreaterThanOrEqual(1)
  })

  it('navigates to Chapter 15 (Gut Microbiome) and operates CutC TMAO node', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/gut-microbiome-metagenomics')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '15 · The Human Gut Microbiome: Taxonomic Architecture & Metagenomics',
      })
    ).toBeInTheDocument()

    // Operate CutC TMAO node
    const cutcBtns = screen.getAllByRole('button', { name: /CutC Choline Lyase & Hepatic FMO3 TMAO/i })
    for (const btn of cutcBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getAllByText(/CutC\/D cleaves dietary choline into Trimethylamine/i).length).toBeGreaterThanOrEqual(1)
  })

  it('navigates to Chapter 16 (Prebiotics & Probiotics) and inspects link to Chapter 17', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/prebiotics-probiotics-dysbiosis')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '16 · Prebiotics, Probiotics, Synbiotics & Dietary Interventions in Dysbiosis',
      })
    ).toBeInTheDocument()

    // Operate Low-FODMAP node
    const fodmapBtns = screen.getAllByRole('button', { name: /Three-Phase Low-FODMAP Personalization/i })
    for (const btn of fodmapBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getAllByText(/Phase 1 eliminates gas-distending fermentable oligosaccharides/i).length).toBeGreaterThanOrEqual(1)

    // Next chapter is Chapter 17 (available)
    expect(screen.getByRole('link', { name: /17 · Food Intolerances/i })).toBeInTheDocument()
  })

  it('navigates to Chapter 17 (Food Intolerances & Celiac Disease) and operates tTG-2 deamidation node', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/food-intolerances-celiac-allergy')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '17 · Food Intolerances, Non-Celiac Gluten Sensitivity, Celiac Disease & Food Allergies',
      })
    ).toBeInTheDocument()

    // Operate tTG-2 node
    const ttgBtns = screen.getAllByRole('button', { name: /tTG-2 Deamidation/i })
    for (const btn of ttgBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getAllByText(/Indigestible 33-mer gliadin traverses the epithelial barrier/i).length).toBeGreaterThanOrEqual(1)

    // Link to Chapter 18
    expect(screen.getByRole('link', { name: /18 · Nutritional Management of Obesity/i })).toBeInTheDocument()
  })

  it('navigates to Chapter 18 (Obesity & T2D MNT) and operates DiRECT remission node', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/nutrition-obesity-t2d-mnt')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '18 · Nutritional Management of Obesity, Insulin Resistance & Type 2 Diabetes',
      })
    ).toBeInTheDocument()

    // Operate DiRECT Remission node
    const directBtns = screen.getAllByRole('button', { name: /DiRECT Remission Rescue/i })
    for (const btn of directBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getAllByText(/Sustained hypocaloric energy deficit clears ectopic hepatic and pancreatic triglycerides/i).length).toBeGreaterThanOrEqual(1)

    // Link to Chapter 19
    expect(screen.getByRole('link', { name: /19 · Cardiovascular Dietetics/i })).toBeInTheDocument()
  })

  it('navigates to Chapter 19 (Cardiovascular Dietetics) and operates ApoB retention node', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/cardiovascular-dietetics-dash-mediterranean')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '19 · Cardiovascular Dietetics: Atherosclerosis, Dyslipidemia & Hypertension',
      })
    ).toBeInTheDocument()

    // Operate ApoB retention node
    const apobBtns = screen.getAllByRole('button', { name: /ApoB Particle Retention/i })
    for (const btn of apobBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getAllByText(/Circulating ApoB particles enter subendothelial intima/i).length).toBeGreaterThanOrEqual(1)

    // Link to Chapter 20
    expect(screen.getByRole('link', { name: /20 · Renal Nutrition/i })).toBeInTheDocument()
  })

  it('navigates to Chapter 20 (Renal Nutrition & CKD MNT) and operates FGF23 mineral axis node', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition/chapters/renal-nutrition-ckd-mnt')
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: '20 · Renal Nutrition: Chronic Kidney Disease & Glomerular Filtration',
      })
    ).toBeInTheDocument()

    // Operate FGF23 node
    const fgfBtns = screen.getAllByRole('button', { name: /FGF23 Osteocyte Axis/i })
    for (const btn of fgfBtns) {
      fireEvent.click(btn)
    }
    expect(screen.getAllByText(/Early phosphate retention drives osteocyte FGF23 secretion/i).length).toBeGreaterThanOrEqual(1)

    // Next chapter is Chapter 21 (planned)
    expect(screen.getByText(/Next release/i)).toBeInTheDocument()
    expect(screen.getByText(/21 · Hepatobiliary/i)).toBeInTheDocument()
    expect(screen.getByText('Planned chapter')).toBeInTheDocument()
  })

  it('redirects from /learn/:module when visiting /learn/nutrition to the Nutrition overview', async () => {
    window.history.replaceState({ idx: 0 }, '', '/learn/nutrition')
    render(<App />)

    expect(await screen.findByRole('heading', { name: 'Nutrition & dietetics curriculum' })).toBeInTheDocument()
  })
})
