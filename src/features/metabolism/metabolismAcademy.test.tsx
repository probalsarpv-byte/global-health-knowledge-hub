import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from '../../App'
import { metabolismCurriculum } from '../../content/metabolismCurriculum'
import {
  allCompletedChapters,
  batch1MetabolismChapters,
  batch2MetabolismChapters,
  batch3MetabolismChapters,
  batch4MetabolismChapters,
  batch5MetabolismChapters,
  batch6MetabolismChapters,
  batch7MetabolismChapters,
  allCompletedMetabolismChapters,
} from '../../content/chapters/chapterRegistry'
import { lessons } from '../../content/lessons'
import { validateLessons } from '../../content/lessonSchema'

beforeEach(() => window.history.replaceState({ idx: 0 }, '', '/'))
afterEach(cleanup)

describe('Human Metabolism Academy curriculum and all 36 Chapters (Batches 1–7 complete, 100% available)', () => {
  it('defines an ordered 36-chapter curriculum with all Batches 1–7 available across 6 thematic groups', () => {
    expect(metabolismCurriculum.chapters).toHaveLength(36)
    expect(metabolismCurriculum.groups.map((group) => group.id)).toEqual([
      'metabolism.foundations',
      'metabolism.lipids',
      'metabolism.nitrogen',
      'metabolism.integration',
      'metabolism.clinical',
      'metabolism.advanced',
    ])
    expect(metabolismCurriculum.chapters.map((chapter) => chapter.order)).toEqual(
      Array.from({ length: 36 }, (_, index) => index + 1)
    )

    const availableChapters = metabolismCurriculum.chapters.filter((chapter) => chapter.status === 'available')
    expect(availableChapters).toHaveLength(36)
    expect(availableChapters.map((chapter) => chapter.id)).toEqual([
      'metabolism.chapter.01',
      'metabolism.chapter.02',
      'metabolism.chapter.03',
      'metabolism.chapter.04',
      'metabolism.chapter.05',
      'metabolism.chapter.06',
      'metabolism.chapter.07',
      'metabolism.chapter.08',
      'metabolism.chapter.09',
      'metabolism.chapter.10',
      'metabolism.chapter.11',
      'metabolism.chapter.12',
      'metabolism.chapter.13',
      'metabolism.chapter.14',
      'metabolism.chapter.15',
      'metabolism.chapter.16',
      'metabolism.chapter.17',
      'metabolism.chapter.18',
      'metabolism.chapter.19',
      'metabolism.chapter.20',
      'metabolism.chapter.21',
      'metabolism.chapter.22',
      'metabolism.chapter.23',
      'metabolism.chapter.24',
      'metabolism.chapter.25',
      'metabolism.chapter.26',
      'metabolism.chapter.27',
      'metabolism.chapter.28',
      'metabolism.chapter.29',
      'metabolism.chapter.30',
      'metabolism.chapter.31',
      'metabolism.chapter.32',
      'metabolism.chapter.33',
      'metabolism.chapter.34',
      'metabolism.chapter.35',
      'metabolism.chapter.36',
    ])

    const plannedChapters = metabolismCurriculum.chapters.filter((chapter) => chapter.status === 'planned')
    expect(plannedChapters).toHaveLength(0)
  })

  it('validates complete bilingual Batch 1, Batch 2, Batch 3, Batch 4, Batch 5, Batch 6, and Batch 7 records, paragraph lengths (>=120 chars), and scientific citations', () => {
    expect(batch1MetabolismChapters).toHaveLength(4)
    expect(batch2MetabolismChapters).toHaveLength(4)
    expect(batch3MetabolismChapters).toHaveLength(4)
    expect(batch4MetabolismChapters).toHaveLength(3)
    expect(batch5MetabolismChapters).toHaveLength(3)
    expect(batch6MetabolismChapters).toHaveLength(9)
    expect(batch7MetabolismChapters).toHaveLength(9)
    expect(allCompletedMetabolismChapters).toHaveLength(36)
    const issues = validateLessons([...lessons, ...allCompletedChapters, ...allCompletedMetabolismChapters])
    expect(issues).toEqual([])

    for (const chapter of allCompletedMetabolismChapters) {
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
    expect(screen.getByText(/36 \/ 36 chapters available/i)).toBeInTheDocument()
    expect(screen.getByText(/01 · Introduction to Human Metabolism & Bioenergetics/i)).toBeInTheDocument()
    expect(screen.getByText(/05 · Fatty Acid Beta-Oxidation & Ketogenesis/i)).toBeInTheDocument()
    expect(screen.getByText(/09 · Amino Acid Catabolism & Urea Cycle/i)).toBeInTheDocument()
    expect(screen.getByText(/12 · Heme Biosynthesis & Bilirubin Metabolism/i)).toBeInTheDocument()
    expect(screen.getByText(/13 · Fed, Fasted & Starvation Dynamics/i)).toBeInTheDocument()
    expect(screen.getByText(/14 · Endocrine Regulation of Fuel Flux/i)).toBeInTheDocument()
    expect(screen.getByText(/15 · Organ-Specific Metabolic Specialization/i)).toBeInTheDocument()
    expect(screen.getByText(/16 · Micronutrients & Metabolic Cofactors/i)).toBeInTheDocument()
    expect(screen.getByText(/17 · Inborn Errors of Metabolism/i)).toBeInTheDocument()
    expect(screen.getByText(/18 · Metabolic Disease & Clinical Integration/i)).toBeInTheDocument()

    const searchInput = screen.getByPlaceholderText(/Search available or planned metabolism lessons/i)
    await user.type(searchInput, 'Purine')

    expect(screen.getByText(/11 · Purine & Pyrimidine Metabolism/i)).toBeInTheDocument()
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

  it('navigates to Chapter 05 (Beta-Oxidation) and operates CPT-I shuttle and assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/fatty-acid-oxidation-ketones')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '05 · Fatty Acid Beta-Oxidation & Ketogenesis' })
    ).toBeInTheDocument()

    const cpt1Node = screen.getByRole('button', {
      name: /1\. CPT-I & Carnitine Shuttle \[Mitochondrial Entry Valve\]/i,
    })
    await user.click(cpt1Node)
    expect(screen.getByText(/Rate-limiting gateway of lipid oxidation/i)).toBeInTheDocument()

    // Answer assessment on MCAD deficiency
    const mcadOption = screen.getByRole('radio', {
      name: /Severe hypoglycemia with undetectable or inappropriately low urine and serum ketone bodies/i,
    })
    await user.click(mcadOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 06 (Lipogenesis) and operates ACC regulation node and assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/lipogenesis-triglycerides')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '06 · Fatty Acid & Triglyceride Synthesis' })
    ).toBeInTheDocument()

    const accNode = screen.getByRole('button', {
      name: /2\. Acetyl-CoA Carboxylase \(ACC\) \[Rate-Limiting Valve\]/i,
    })
    await user.click(accNode)
    expect(screen.getByText(/Carboxylates acetyl-CoA into malonyl-CoA/i)).toBeInTheDocument()

    // Answer assessment on adipose lacking glycerol kinase
    const glycerolOption = screen.getByRole('radio', {
      name: /Adipocytes completely lack the enzyme glycerol kinase and must rely on glycolysis of glucose/i,
    })
    await user.click(glycerolOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 07 (Cholesterol) and operates HMGCR node and statin assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/cholesterol-steroids')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '07 · Cholesterol & Steroid Metabolism' })
    ).toBeInTheDocument()

    const hmgcrNode = screen.getByRole('button', {
      name: /1\. HMG-CoA Reductase \[Committed Mevalonate Step\]/i,
    })
    await user.click(hmgcrNode)
    expect(screen.getByText(/Rate-limiting enzyme of cholesterol synthesis located in ER membrane/i)).toBeInTheDocument()

    // Answer assessment on statin mechanism
    const statinOption = screen.getByRole('radio', {
      name: /Depletion of hepatic intracellular cholesterol activates SREBP-2, upregulating transcription and cell-surface expression of LDL receptors/i,
    })
    await user.click(statinOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 08 (Lipoproteins) and operates PCSK9 switch node and FH assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/lipoproteins-lipid-flux')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '08 · Lipoprotein Transport & Lipid Flux' })
    ).toBeInTheDocument()

    const pcsk9Node = screen.getByRole('button', {
      name: /5\. PCSK9 Receptor Degradation Switch \[Pharmacological Target\]/i,
    })
    await user.click(pcsk9Node)
    expect(screen.getByText(/Secreted liver protease that binds the EGF-A domain of the LDL receptor/i)).toBeInTheDocument()

    // Answer assessment on Familial Hypercholesterolemia LDLR mutation
    const fhOption = screen.getByRole('radio', {
      name: /Autosomal dominant loss-of-function mutation in the LDLR gene encoding the cell-surface LDL receptor/i,
    })
    await user.click(fhOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 09 (Urea Cycle) and operates 3D organ explorer, pathway diagram and OTC deficiency assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/amino-acid-catabolism-urea')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '09 · Amino Acid Catabolism & Urea Cycle' })
    ).toBeInTheDocument()

    // Verify 3D Inter-Organ Explorer exists
    expect(screen.getByText(/3D Inter-Organ Nitrogen Flux & Urea Clearance Topography/i)).toBeInTheDocument()

    // Operate interactive diagram
    const altAstNode = screen.getByRole('button', {
      name: /1\. ALT \/ AST Aminotransferases/i,
    })
    await user.click(altAstNode)
    expect(screen.getByText(/Transfers alpha-amino groups from donor amino acids onto alpha-ketoglutarate/i)).toBeInTheDocument()

    // Answer assessment on OTC deficiency
    const otcOption = screen.getByRole('radio', {
      name: /Ornithine transcarbamoylase \(OTC\) deficiency/i,
    })
    await user.click(otcOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 10 (Carbon Skeletons) and operates BCKDH MSUD node and TPP assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/carbon-skeletons-specialized-products')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '10 · Carbon Skeleton Fates & Specialized Products' })
    ).toBeInTheDocument()

    const bckdhNode = screen.getByRole('button', {
      name: /2\. Branched-Chain Amino Acids \(BCAA\) & BCKDH Complex/i,
    })
    await user.click(bckdhNode)
    expect(screen.getByText(/Mitochondrial BCKDH complex decarboxylates deaminated leucine/i)).toBeInTheDocument()

    // Answer assessment on MSUD TPP cofactor
    const tppOption = screen.getByRole('radio', {
      name: /Thiamine pyrophosphate \(TPP, derived from vitamin B1\)\./i,
    })
    await user.click(tppOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 11 (Purines & Pyrimidines) and operates PRPP node, 3D explorer and Lesch-Nyhan assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/purine-pyrimidine-metabolism')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '11 · Purine & Pyrimidine Metabolism' })
    ).toBeInTheDocument()

    // Verify 3D Nucleotide Economy Explorer exists
    expect(screen.getByText(/3D Inter-Organ Nucleotide Economy, Gout & Chemotherapy Targets/i)).toBeInTheDocument()

    const prppNode = screen.getByRole('button', {
      name: /1\. PRPP Gateway & Purine Commitment/i,
    })
    await user.click(prppNode)
    expect(screen.getByText(/PRPP synthetase activates ribose-5-phosphate using ATP/i)).toBeInTheDocument()

    // Answer assessment on Lesch-Nyhan HGPRT deficiency
    const lnsOption = screen.getByRole('radio', {
      name: /Hypoxanthine-guanine phosphoribosyltransferase \(HGPRT\) complete deficiency/i,
    })
    await user.click(lnsOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 12 (Heme & Bilirubin) and operates 3D multi-organ explorer, ALAS node and AIP assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/heme-bilirubin-metabolism')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '12 · Heme Biosynthesis & Bilirubin Metabolism' })
    ).toBeInTheDocument()

    // Verify 3D Multi-Organ Explorer exists
    expect(screen.getByText(/3D Multi-Organ Heme Economy, Porphyrias & Jaundice Differential/i)).toBeInTheDocument()

    const alasNode = screen.getByRole('button', {
      name: /1\. Mitochondrial ALAS Rate-Limiting Gateway/i,
    })
    await user.click(alasNode)
    expect(screen.getByText(/Mitochondrial delta-aminolevulinate synthase \(ALAS\) condenses succinyl-CoA and glycine/i)).toBeInTheDocument()

    // Answer assessment on Acute Intermittent Porphyria
    const aipOption = screen.getByRole('radio', {
      name: /Porphobilinogen deaminase \(hydroxymethylbilane synthase\) deficiency/i,
    })
    await user.click(aipOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 13 (Fuel Dynamics) and operates 3D multi-organ explorer, fed state node and starvation MCT1 assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/fed-fasted-starvation-states')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '13 · Fed, Fasted & Starvation Dynamics' })
    ).toBeInTheDocument()

    // Verify 3D Multi-Organ Explorer exists
    expect(screen.getByText(/3D Multi-Organ Temporal Fuel Coordination & Starvation Adaptation/i)).toBeInTheDocument()

    const absorptiveNode = screen.getByRole('button', {
      name: /1\. Absorptive Fed State \(0–4h\): Anabolic Storage/i,
    })
    await user.click(absorptiveNode)
    expect(screen.getByText(/Portal glucose reaches 140 mg\/dL; liver takes up 60g via glucokinase/i)).toBeInTheDocument()

    // Answer assessment on starvation MCT1 brain adaptation
    const mctOption = screen.getByRole('radio', {
      name: /Upregulation of blood-brain barrier monocarboxylate transporters allowing cerebral utilization of ketone bodies/i,
    })
    await user.click(mctOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 14 (Endocrine Regulation) and operates 3D multi-organ explorer, insulin RTK node and FOXO1 assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/endocrine-fuel-regulation')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '14 · Endocrine Regulation of Fuel Flux' })
    ).toBeInTheDocument()

    // Verify 3D Multi-Organ Explorer exists
    expect(screen.getByText(/3D Multi-Organ Endocrine Signal Transduction & Metabolic Triage/i)).toBeInTheDocument()

    const rtkNode = screen.getByRole('button', {
      name: /1\. Insulin Receptor Autophosphorylation & IRS-1 Docking/i,
    })
    await user.click(rtkNode)
    expect(screen.getByText(/Insulin receptor is a disulfide-linked \(alpha-beta\)2 heterotetramer/i)).toBeInTheDocument()

    // Answer assessment on FOXO1 phosphorylation failure
    const foxoOption = screen.getByRole('radio', {
      name: /Failure of Akt-mediated phosphorylation of FOXO1, allowing uninhibited nuclear transcription of PEPCK and glucose-6-phosphatase/i,
    })
    await user.click(foxoOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 15 (Organ Specialization) and operates 3D multi-organ explorer, glucokinase hub node and thiophorase deficiency assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/organ-metabolic-specialization')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '15 · Organ-Specific Metabolic Specialization' })
    ).toBeInTheDocument()

    // Verify 3D Multi-Organ Explorer exists
    expect(screen.getByText(/3D Multi-Organ Metabolic Specialization & Inter-Organ Fuel Loops/i)).toBeInTheDocument()

    const gkNode = screen.getByRole('button', {
      name: /1\. Hepatic Glucokinase & Fuel Distribution Hub/i,
    })
    await user.click(gkNode)
    expect(screen.getByText(/Glucokinase is not inhibited by glucose-6-phosphate/i)).toBeInTheDocument()

    // Answer assessment on hepatic lack of thiophorase (SCOT)
    const scotOption = screen.getByRole('radio', {
      name: /Succinyl-CoA:3-ketoacid CoA transferase \(thiophorase \/ SCOT\); sampled tissue is the Liver/i,
    })
    await user.click(scotOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 16 (Micronutrients) and operates 3D multi-organ explorer, TPP node and Wernicke assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/micronutrients-cofactors')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '16 · Micronutrients & Metabolic Cofactors' })
    ).toBeInTheDocument()

    // Verify 3D Multi-Organ Explorer exists
    expect(screen.getByText(/3D Multi-Organ Micronutrient Absorption, Activation & Storage Network/i)).toBeInTheDocument()

    const tppNode = screen.getByRole('button', {
      name: /1\. Thiamine Pyrophosphate \(TPP\): Alpha-Ketoacid Decarboxylation/i,
    })
    await user.click(tppNode)
    expect(screen.getByText(/Forms a reactive thiazolium carbanion that attacks carbonyl carbons/i)).toBeInTheDocument()

    // Answer assessment on Wernicke thiamine prior to glucose
    const thiamineOption = screen.getByRole('radio', {
      name: /Thiamine \(vitamin B1\) must be administered intravenously BEFORE or concurrently with glucose/i,
    })
    await user.click(thiamineOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 17 (Inborn Errors) and operates 3D multi-organ explorer, GALT node and galactosemia assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/inborn-errors-metabolism')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '17 · Inborn Errors of Metabolism' })
    ).toBeInTheDocument()

    // Verify 3D Multi-Organ Explorer exists
    expect(screen.getByText(/3D Multi-Organ Pathology of Monogenic Metabolic Blocks/i)).toBeInTheDocument()

    const galtNode = screen.getByRole('button', {
      name: /1\. Classical Galactosemia: GALT Block & Galactitol Cataracts/i,
    })
    await user.click(galtNode)
    expect(screen.getAllByText(/Autosomal recessive deficiency of galactose-1-phosphate uridylyltransferase/i)[0]).toBeInTheDocument()

    // Answer assessment on GALT deficiency and galactitol cataracts
    const galtOption = screen.getByRole('radio', {
      name: /Galactose-1-phosphate uridylyltransferase \(GALT\) deficiency; accumulated toxic intermediates are Galactose-1-phosphate/i,
    })
    await user.click(galtOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 18 (Metabolic Disease) and operates 3D multi-organ explorer, T1D node and DAG/PKC assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/metabolic-disease-clinical-integration')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '18 · Metabolic Disease & Clinical Integration' })
    ).toBeInTheDocument()

    // Verify 3D Multi-Organ Explorer exists
    expect(screen.getByText(/3D Multi-Organ Landscape of Systemic Metabolic Disease/i)).toBeInTheDocument()

    const t1dNode = screen.getByRole('button', {
      name: /1\. Type 1 Diabetes: Autoimmune Beta-Cell Destruction & DKA/i,
    })
    await user.click(t1dNode)
    expect(screen.getByText(/Autoreactive CD8\+ T cells destroy pancreatic beta-cells/i)).toBeInTheDocument()

    // Answer assessment on DAG / novel PKC serine phosphorylation of IRS-1
    const pkcOption = screen.getByRole('radio', {
      name: /Accumulation of intracellular sn-1,2-diacylglycerol \(DAG\) activating novel PKC isoforms/i,
    })
    await user.click(pkcOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 19 (Enzyme Kinetics) and operates 3D multi-organ explorer, MM node and MCA assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/enzyme-kinetics-control')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '19 · Enzyme Kinetics, Inhibition & Metabolic Control Analysis' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Landscape of Catalytic Enzyme/i)).toBeInTheDocument()

    const node1 = screen.getByRole('button', {
      name: /1\. Michaelis-Menten Hyperbolic Steady State/i,
    })
    await user.click(node1)
    expect(screen.getByText(/rectangular hyperbola/i)).toBeInTheDocument()

    const mcaOption = screen.getByRole('radio', {
      name: /Pure noncompetitive inhibition/i,
    })
    await user.click(mcaOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 20 (Compartmentation & Shuttles) and operates 3D multi-organ explorer and assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/cellular-compartmentation-shuttles')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '20 · Cellular Compartmentation, Metabolite Transport & Shuttle Systems' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Landscape of Metabolite Shuttles/i)).toBeInTheDocument()

    const shuttleOption = screen.getByRole('radio', {
      name: /ABCD1 \(Adrenoleukodystrophy protein\) in the peroxisomal membrane/i,
    })
    await user.click(shuttleOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 21 (Pentose Phosphate Pathway) and operates 3D explorer and G6PD assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/pentose-phosphate-pathway')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '21 · Pentose Phosphate Pathway & NADPH Generation' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Landscape of Pentose Phosphate/i)).toBeInTheDocument()

    const g6pdOption = screen.getByRole('radio', {
      name: /G6PD deficiency causing inability to regenerate NADPH/i,
    })
    await user.click(g6pdOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 22 (Alternative Sugars) and operates 3D explorer and fructolysis assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/fructose-galactose-alternative-sugars')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '22 · Fructose, Galactose & Alternative Sugar Metabolism' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Landscape of Non-Glucose Sugar/i)).toBeInTheDocument()

    const khcOption = screen.getByRole('radio', {
      name: /Aldolase B deficiency/i,
    })
    await user.click(khcOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 23 (Lactate Shuttle & Cori Cycle) and operates 3D explorer and lactate assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/lactate-cori-glucose-alanine')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '23 · Lactate Metabolism, Cori Cycle & Glucose–Alanine Cycle' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Landscape of Inter-Tissue Lactate/i)).toBeInTheDocument()

    const lactateOption = screen.getByRole('radio', {
      name: /Type B2 lactic acidosis \(MALA\)/i,
    })
    await user.click(lactateOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 24 (Lipid Digestion & Chylomicrons) and operates 3D explorer and abetalipoproteinemia assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/lipid-digestion-chylomicrons')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '24 · Intestinal Lipid Digestion, Absorption & Chylomicron Assembly' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Landscape of Intestinal Lipid Digestion/i)).toBeInTheDocument()

    const mtpOption = screen.getByRole('radio', {
      name: /Abetalipoproteinemia/i,
    })
    await user.click(mtpOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 25 (Phospholipids & Eicosanoids) and operates 3D explorer and aspirin assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/phospholipids-sphingolipids-eicosanoids')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '25 · Phospholipid, Sphingolipid & Eicosanoid Metabolism' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Landscape of Phospholipid/i)).toBeInTheDocument()

    const aspirinOption = screen.getByRole('radio', {
      name: /Irreversible acetylation of platelet COX-1 Ser529 in anucleate cells/i,
    })
    await user.click(aspirinOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 26 (Proteostasis & Autophagy) and operates 3D explorer and bortezomib assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/protein-turnover-proteasome-autophagy')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '26 · Protein Turnover, Proteasomes, Autophagy & Amino Acid Pools' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Landscape of Proteostasis/i)).toBeInTheDocument()

    const borteOption = screen.getByRole('radio', {
      name: /Beta-5 subunit \(PSMB5\) responsible for chymotrypsin-like proteolytic cleavage/i,
    })
    await user.click(borteOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 27 (One-Carbon & Transsulfuration) and operates 3D explorer and folate trap assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/one-carbon-methylation-transsulfuration')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '27 · One-Carbon Metabolism, Methylation & Transsulfuration' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Landscape of One-Carbon Metabolism/i)).toBeInTheDocument()

    const folateTrapOption = screen.getByRole('radio', {
      name: /Because the MTHFR reaction reducing 5,10-methylene-THF to 5-methyl-THF is irreversible/i,
    })
    await user.click(folateTrapOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 28 (Neurotransmitter Metabolism) and operates 3D explorer and assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/neurotransmitters-specialized-amines')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '28 · Neurotransmitters, Biogenic Amines & Neurochemistry' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Landscape of Neurotransmitter/i)).toBeInTheDocument()

    const aadcOption = screen.getByRole('radio', {
      name: /Carbidopa selectively inhibits peripheral aromatic L-amino acid decarboxylase/i,
    })
    await user.click(aadcOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 34 (Cancer Reprogramming) and operates 3D explorer and assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/cancer-metabolic-reprogramming')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '34 · Cancer Metabolic Reprogramming & Oncometabolite Dynamics' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Landscape of Cancer Metabolic Reprogramming/i)).toBeInTheDocument()

    const pkm2Option = screen.getByRole('radio', {
      name: /Dissociation of the highly active tetramer into the low-activity dimer/i,
    })
    await user.click(pkm2Option)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 35 (Flux & In Vivo Metabolomics) and operates 3D explorer and assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/flux-analysis-metabolomics')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '35 · Metabolic Flux Analysis, Stable Isotope Tracing & Metabolomics' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Mapping of Whole-Body Isotope Tracing/i)).toBeInTheDocument()

    const fluxOption = screen.getByRole('radio', {
      name: /The net rate of turnover of molecules per unit time and volume through a specific enzymatic step/i,
    })
    await user.click(fluxOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })

  it('navigates to Chapter 36 (Clinical Grand Rounds) and operates 3D explorer and assessment', async () => {
    window.history.replaceState({}, '', '/learn/metabolism/chapters/clinical-cases-grand-rounds')
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '36 · Clinical Grand Rounds: Acute Metabolic Emergencies & Inborn Errors' })
    ).toBeInTheDocument()
    expect(screen.getByText(/3D Multi-Organ Landscape of Acute Metabolic Emergencies/i)).toBeInTheDocument()

    const lacticOption = screen.getByRole('radio', {
      name: /Combination of Type A lactic acidosis/i,
    })
    await user.click(lacticOption)
    expect(screen.getByRole('status')).toHaveTextContent(/Correct\./i)
  })
})


