import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const macromineralsRefs = [
  {
    id: 'gropper-advanced-nutrition-macrominerals',
    authors: 'Sareen S. Gropper, Jack L. Smith, Timothy P. Carr',
    title: 'Advanced Nutrition and Human Metabolism, 8th Edition, Chapter 11: Macrominerals',
    organization: 'Cengage Learning',
    year: 2021,
    url: 'https://www.cengage.com/c/advanced-nutrition-and-human-metabolism-8e-gropper/9780357449813/',
  },
  {
    id: 'khosla-nejm-osteoporosis',
    authors: 'Sundeep Khosla, Lorenz C. Hofbauer',
    title: 'Osteoporosis Treatment: Recent Developments and Ongoing Challenges',
    organization: 'The Lancet Diabetes & Endocrinology',
    year: 2017,
    url: 'https://doi.org/10.1016/S2213-8587(17)30188-2',
    doi: '10.1016/S2213-8587(17)30188-2',
  },
  {
    id: 'quarles-physiol-rev-fgf23',
    authors: 'L. Darryl Quarles',
    title: 'Role of FGF23 in orchestrating mineral metabolism and bone mineralization',
    organization: 'Physiological Reviews',
    year: 2012,
    url: 'https://doi.org/10.1152/physrev.00019.2011',
    doi: '10.1152/physrev.00019.2011',
  },
  {
    id: 'de-baaij-physiol-rev-magnesium',
    authors: 'Jeroen H.F. de Baaij, Joost G.J. Hoenderop, René J.M. Bindels',
    title: 'Magnesium in man: implications for health and disease',
    organization: 'Physiological Reviews',
    year: 2015,
    url: 'https://doi.org/10.1152/physrev.00012.2014',
    doi: '10.1152/physrev.00012.2014',
  },
  {
    id: 'brown-ann-rev-med-casr',
    authors: 'Edward M. Brown',
    title: 'The Calcium-Sensing Receptor: Physiology, Pathophysiology, and CaSR-Based Therapeutics',
    organization: 'Annual Review of Medicine',
    year: 2013,
    url: 'https://doi.org/10.1146/annurev-med-050911-094132',
    doi: '10.1146/annurev-med-050911-094132',
  },
  {
    id: 'boyce-clin-rev-bone-rankl',
    authors: 'Brendan F. Boyce, Lianping Xing',
    title: 'Biology of RANK, RANKL, and osteoprotegerin',
    organization: 'Arthritis Research & Therapy',
    year: 2007,
    url: 'https://doi.org/10.1186/ar2165',
    doi: '10.1186/ar2165',
  },
]

export const nutrition12MacromineralsBoneMatrixLesson: LessonTopic = {
  id: 'topic.nutrition.macrominerals-bone-calcium-magnesium',
  slug: 'macrominerals-bone-calcium-magnesium',
  version: 2,
  updatedAt: '2026-10-15',
  title: l(
    '12 · Macrominerals & Bone Matrix: Calcium, Phosphorus, Magnesium Homeostasis',
    '১২ · ম্যাক্রোমিনারেল ও অস্থি কাঠামো: ক্যালসিয়াম, ফসফরাস ও ম্যাগনেসিয়ামের ভারসাম্য'
  ),
  summary: l(
    'Comprehensive university textbook exploration of bone biology and macromineral endocrinology: the calcium-sensing receptor (CaSR) Gq/11 feedback rheostat governing parathyroid hormone secretion, enterocyte TRPV6 and distal convoluted tubule TRPV5/NCX1 calcium fluxes, the osteocyte FGF23-alpha-Klotho phosphate wasting axis, Mg-ATP2- chelation and TRPM6 channel biology, hydroxyapatite biocrystallography, and the osteoblast-osteoclast RANKL-OPG signaling nexus governing lifelong skeletal remodeling.',
    'অস্থি জীববিদ্যা ও ম্যাক্রোমিনারেল এন্ডোক্রিনোলজির পূর্ণাঙ্গ বিশ্ববিদ্যালয় পাঠ্যপুস্তকীয় বিশ্লেষণ: প্যারাথাইরয়েড হরমোন নিয়ন্ত্রণে ক্যালসিয়াম-সেন্সিং রিসেপ্টর (CaSR) ফিডব্যাক লুপ, অন্ত্রের TRPV6 ও বৃক্কের TRPV5/NCX1 ক্যালসিয়াম চ্যানেল, অস্টিওসাইটের FGF23-আলফা-ক্লোথো ফসফেট নিষ্কাশন অক্ষ, Mg-ATP2- চিলেশন ও TRPM6 ম্যাগনেসিয়াম চ্যানেল জীববিদ্যা, হাইড্রোক্সিঅ্যাপাটাইট স্ফটিকীকরণ এবং কঙ্কাল পুনর্গঠন নিয়ন্ত্রণকারী RANKL-OPG আণবিক সংকেত কাঠামো।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-15',
  objectives: [
    l(
      'Map the physiological control of extracellular ionized calcium (1.1–1.3 mmol/L) via parathyroid CaSR G-protein coupling, renal tubular reabsorption, and skeletal osteolysis [1, 5].',
      'প্যারাথাইরয়েড CaSR রিসেপ্টর, বৃক্কীয় পুনঃশোষণ এবং অস্থি ভাঙনের মাধ্যমে রক্তে ক্যালসিয়ামের (১.১–১.৩ mmol/L) সুনির্দিষ্ট নিয়ন্ত্রণ পথ ব্যাখ্যা করা [১, ৫]।'
    ),
    l(
      'Trace the endocrine actions of osteocyte-derived Fibroblast Growth Factor 23 (FGF23) and renal alpha-Klotho on proximal tubule NaPi-IIa transporters and vitamin D metabolism [1, 3].',
      'অস্টিওসাইট থেকে ক্ষরিত FGF23 এবং কিডনির Klotho প্রোটিনের যৌথ প্রভাবে NaPi-IIa চ্যানেল নিয়ন্ত্রণ ও ফসফেট নিষ্কাশন প্রক্রিয়া বিশ্লেষণ করা [১, ৩]।'
    ),
    l(
      'Evaluate the biochemical requirement of magnesium in Mg-ATP2- chelation and explain the clinical paradox wherein severe hypomagnesemia causes hypocalcemia refractory to calcium therapy [1, 4].',
      'Mg-ATP2- চিলেশনে ম্যাগনেসিয়ামের জৈবরাসায়নিক অনিবার্যতা এবং তীব্র ম্যাগনেসিয়াম ঘাটতিতে কেন PTH অবদমিত হয়ে রক্তে ক্যালসিয়াম কমে যায় তা নিরূপণ করা [১, ৪]।'
    ),
    l(
      'Contrast the molecular composition of the organic osteoid matrix (type I collagen) and inorganic hydroxyapatite crystals, detailing the osteoblast-osteoclast RANK/RANKL/OPG axis in bone turnover [2, 6].',
      'অস্থির জৈব কোলাজেন কাঠামো এবং অজৈব হাইড্রোক্সিঅ্যাপাটাইট স্ফটিকের গঠন এবং হাড়ের গঠন ও ক্ষয়ে RANKL-OPG আণবিক সংকেতের ভারসাম্য বিশ্লেষণ করা [২, ৬]।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.fat-soluble-vitamins', 'topic.nutrition.hydration-electrolytes-fluid-balance'],
  relatedTopicIds: ['topic.metabolism.organ-metabolic-specialization', 'topic.anatomy.skeletal-axial'],
  references: macromineralsRefs,
  evidenceBySection: {
    introduction: ['gropper-advanced-nutrition-macrominerals', 'brown-ann-rev-med-casr'],
    structure: ['brown-ann-rev-med-casr', 'gropper-advanced-nutrition-macrominerals'],
    mechanism: ['quarles-physiol-rev-fgf23', 'de-baaij-physiol-rev-magnesium'],
    integration: ['khosla-nejm-osteoporosis', 'boyce-clin-rev-bone-rankl', 'gropper-advanced-nutrition-macrominerals'],
    practice: ['de-baaij-physiol-rev-magnesium', 'khosla-nejm-osteoporosis', 'quarles-physiol-rev-fgf23'],
    takeaways: ['gropper-advanced-nutrition-macrominerals', 'quarles-physiol-rev-fgf23', 'boyce-clin-rev-bone-rankl'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Macromineral Homeostasis & Fluid Ion Compartments', '১. ম্যাক্রোমিনারেল ভারসাম্য ও তরল প্রকোষ্ঠের আয়ন বণ্টন'), sectionId: 'introduction' },
      { id: 'sec-casr-pth', label: l('2. Calcium: Parathyroid Sensing, Endocrine Loops & Transporters', '২. ক্যালসিয়াম: প্যারাথাইরয়েড সংবেদন, এন্ডোক্রাইন লুপ ও চ্যানেল'), sectionId: 'structure' },
      { id: 'sec-phos-mg', label: l('3. Phosphorus & Magnesium: FGF23-Klotho Axis & TRPM6 Biology', '৩. ফসফরাস ও ম্যাগনেসিয়াম: FGF23-ক্লোথো অক্ষ ও TRPM6 চ্যানেল'), sectionId: 'mechanism' },
      { id: 'sec-bone-matrix', label: l('4. Skeletal Matrix Dynamics: Osteoblasts, Osteoclasts & Hydroxyapatite', '৪. অস্থি কাঠামোর রূপান্তর: অস্টিওব্লাস্ট, অস্টিওক্ল্যাস্ট ও স্ফটিক গঠন'), sectionId: 'integration' },
      { id: 'sec-clinical-bone', label: l('5. Clinical Bone Disorders: Osteopenia, Osteomalacia & CKD-MBD', '৫. ক্লিনিক্যাল অস্থি রোগ: অস্টিওপেনিয়া, রিকেটস ও রেনাল বোন ডিজিজ'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Summary & Review Checkpoints', '৬. উচ্চ-গুরুত্বপূর্ণ সারাংশ ও রিভিশন চেকপয়েন্ট'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Calcium-Sensing Receptor (CaSR)', 'ক্যালসিয়াম-সেন্সিং রিসেপ্টর (CaSR)'),
        definition: l(
          'A G-protein-coupled cell surface receptor (class C GPCR) located on parathyroid chief cells and renal tubule epithelia that binds extracellular ionized calcium (Ca2+), signaling through Gq/11 to suppress parathyroid hormone (PTH) secretion and promote urinary calcium excretion.',
          'প্যারাথাইরয়েড ও কিডনির কোষে অবস্থিত একটি বিশেষ জি-প্রোটিন রিসেপ্টর যা রক্তে মুক্ত ক্যালসিয়ামের মাত্রা শনাক্ত করে এবং রক্তে ক্যালসিয়াম বেশি থাকলে প্যারাথাইরয়েড হরমোন (PTH) নিঃসরণ থামিয়ে দেয়।'
        ),
      },
      {
        term: l('Hydroxyapatite', 'হাইড্রোক্সিঅ্যাপাটাইট'),
        definition: l(
          'The stoichiometric mineral crystal [Ca10(PO4)6(OH)2] that comprises approximately 65% of mature adult bone dry weight, deposited within and between type I collagen fibrils to confer compressive physical rigidity to the skeletal architecture.',
          'একটি অত্যন্ত শক্ত প্রাকৃতিক ক্যালসিয়াম-ফসফেট স্ফটিক যৌগ [Ca10(PO4)6(OH)2] যা মানবদেহের অস্থির মোট ওজনের প্রায় ৬৫ ভাগ গঠন করে এবং কোলাজেন তন্তুর সাথে যুক্ত হয়ে হাড়কে প্রচণ্ড চাপ সহ্য করার ক্ষমতা দেয়।'
        ),
      },
      {
        term: l('Fibroblast Growth Factor 23 (FGF23)', 'ফাইব্রোব্লাস্ট গ্রোথ ফ্যাক্টর ২৩ (FGF23)'),
        definition: l(
          'A phosphaturic peptide hormone secreted primarily by osteocytes and osteoblasts in response to elevated serum phosphate and calcitriol; requires the coreceptor alpha-Klotho in renal proximal tubules to downregulate NaPi-IIa cotransporters and suppress CYP27B1 1-alpha-hydroxylase.',
          'অস্থিকোষ (অস্টিওসাইট) থেকে ক্ষরিত একটি প্রধান ফসফেট-নিয়ন্ত্রক হরমোন যা কিডনির ক্লোথো প্রোটিনের সাথে যুক্ত হয়ে প্রস্রাবের মাধ্যমে অতিরিক্ত ফসফেট বের করে দেয় এবং ক্যালসিট্রিওল হরমোন অতিরিক্ত বৃদ্ধি রোধ করে।'
        ),
      },
      {
        term: l('RANKL / OPG Ratio', 'RANKL ও OPG অনুপাত'),
        definition: l(
          'The molecular rheostat of skeletal resorption: Receptor Activator of Nuclear Factor-kappa B Ligand (RANKL) expressed by osteoblasts/osteocytes binds RANK on osteoclast precursors to drive osteoclastogenesis, whereas Osteoprotegerin (OPG) acts as a soluble decoy receptor that intercepts RANKL to halt bone breakdown.',
          'হাড়ের ক্ষয় ও গঠনের আণবিক চাবিকাঠি: অস্টিওব্লাস্ট থেকে তৈরি RANKL প্রোটিন অস্টিওক্ল্যাস্ট কোষে বসে হাড় ক্ষয় শুরু করে, আর অস্টিওপ্রোটেজেরিন (OPG) একে আটকে রেখে অতিরিক্ত হাড়ের ক্ষয় প্রতিহত করে।'
        ),
      },
      {
        term: l('TRPM6 (Transient Receptor Potential Melastatin 6)', 'TRPM6 চ্যানেল'),
        definition: l(
          'An apical bifunctional ion channel-kinase expressed in the distal small intestine (ileum/colon) and renal distal convoluted tubule that mediates active, saturable transepithelial magnesium (Mg2+) reabsorption; loss-of-function mutations cause familial hypomagnesemia with secondary hypocalcemia.',
          'ক্ষুদ্রান্ত্র ও কিডনির নালীতে অবস্থিত একটি বিশেষ ম্যাগনেসিয়াম আয়ন চ্যানেল যা খাদ্য ও ফিল্ট্রেট থেকে রক্তে ম্যাগনেসিয়াম পুনঃশোষণ নিশ্চিত করে; এর ত্রুটি হলে মারাত্মক ম্যাগনেসিয়াম ঘাটতি দেখা দেয়।'
        ),
      },
      {
        term: l('Calbindin-D9k', 'ক্যালবাইন্ডিন-D9k'),
        definition: l(
          'A cytosolic vitamin D-dependent calcium-binding chaperone protein in enterocytes that binds two Ca2+ ions with high affinity (Kd ~ 0.2 µmol/L), ferrying absorbed calcium safely across the watery cytoplasm from apical TRPV6 to basolateral PMCA1b without perturbing intracellular calcium signaling.',
          'অন্ত্রের এন্টারোসাইট কোষের ভেতরে থাকা ভিটামিন ডি-নির্ভর একটি বাহক প্রোটিন যা কোষে ঢোকা ক্যালসিয়াম আয়নকে নিরাপদে ধরে রেখে সাইটোপ্লাজম পার করে রক্তনালীর দিকে পৌঁছে দেয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Corrected Calcium in Hypoalbuminemia and Secondary Hyperparathyroidism', 'হাইপোঅ্যালবুমিনেমিয়ায় সংশোধিত ক্যালসিয়াম হিসাব এবং সেকেন্ডারি হাইপারপ্যারাথাইরয়েডিজম মূল্যায়ন'),
        steps: [
          l(
            'Step 1: Patient Case Presentation: A 58-year-old patient with liver cirrhosis and protein-calorie malnutrition presents with profound muscle cramps and paresthesias. Routine biochemistry reveals: Total Serum Calcium = 7.2 mg/dL (marked apparent hypocalcemia, normal range 8.5–10.5 mg/dL), Serum Albumin = 2.0 g/dL (severe hypoalbuminemia, normal range 3.5–5.0 g/dL), Serum Phosphate = 3.8 mg/dL.',
            'ধাপ ১: রোগীর বিবরণ: যকৃতের সিরোসিস ও প্রোটিন অপুষ্টিতে আক্রান্ত ৫৮ বছর বয়সী এক রোগীর হাত-পায়ে খিঁচুনি ও অবশ ভাব দেখা দিয়েছে। রক্ত পরীক্ষায় দেখা গেল মোট ক্যালসিয়াম = ৭.২ mg/dL (স্বাভাবিক ৮.৫-১০.৫ mg/dL), সিরাম অ্যালবুমিন = ২.০ g/dL (স্বাভাবিক ৩.৫-৫.০ g/dL), এবং ফসফেট = ৩.৮ mg/dL।'
          ),
          l(
            'Step 2: Apply the Payne Corrected Calcium Equation: Because approximately 40–45% of circulating calcium is bound to serum albumin, every 1.0 g/dL drop in serum albumin below the population baseline of 4.0 g/dL lowers measured total calcium by ~0.8 mg/dL without necessarily altering free ionized calcium. Corrected Calcium (mg/dL) = Measured Total Ca (mg/dL) + 0.8 x [4.0 - Serum Albumin (g/dL)]. Corrected Ca = 7.2 + 0.8 x (4.0 - 2.0) = 7.2 + 1.6 = 8.8 mg/dL.',
            'ধাপ ২: পেইন সংশোধিত ক্যালসিয়াম সূত্র প্রয়োগ: রক্তের মোট ক্যালসিয়ামের প্রায় ৪০-৪৫% অ্যালবুমিন প্রোটিনের সাথে লেগে থাকে; তাই অ্যালবুমিন কম থাকলে মোট ক্যালসিয়াম কম দেখায়। সূত্র: সংশোধিত ক্যালসিয়াম = পরীক্ষিত ক্যালসিয়াম + ০.৮ x (৪.০ - অ্যালবুমিন)। সুতরাং, সংশোধিত ক্যালসিয়াম = ৭.২ + ০.৮ x (৪.০ - ২.০) = ৭.২ + ১.৬ = ৮.৮ mg/dL।'
          ),
          l(
            'Step 3: Measure circulating Ionized Calcium and Intact PTH: Direct whole-blood ionized calcium (iCa) measurement reveals iCa = 1.02 mmol/L (mildly depressed, reference 1.15–1.33 mmol/L). Serum intact PTH is elevated at 98 pg/mL (compensatory secondary hyperparathyroidism, reference 15–65 pg/mL), confirming true physiological calcium deficit stimulating parathyroid CaSR.',
            'ধাপ ৩: মুক্ত ক্যালসিয়াম (iCa) ও PTH হরমোন পরীক্ষা: রক্তে সরাসরি মুক্ত আয়নিত ক্যালসিয়াম মেপে দেখা গেল ১.০২ mmol/L (স্বাভাবিকের চেয়ে সামান্য কম)। প্যারাথাইরয়েড হরমোন (PTH) বেড়ে ৯৮ pg/mL এ পৌঁছেছে, যা প্রমাণ করে অ্যালবুমিন সংশোধনের পরও রোগীর কোষে মৃদু ক্যালসিয়াম ঘাটতি বিদ্যমান।'
          ),
          l(
            'Step 4: Formulate therapeutic intervention: Ingesting high supplemental calcium without magnesium testing carries risk; check serum magnesium. Replete dietary calcium with calcium citrate (which does not require gastric acid for absorption) alongside vitamin D3 (cholecalciferol 2,000 IU/day) to normalize ionized calcium and suppress parathyroid hyperactivity.',
            'ধাপ ৪: চিকিৎসা পরিকল্পনা: ক্যালসিয়াম দেওয়ার আগে ম্যাগনেসিয়াম পরীক্ষা করা জরুরি। রোগীকে অ্যাসিড-নিরপেক্ষ ক্যালসিয়াম সাইট্রেট এবং দৈনিক ২,০০০ IU ভিটামিন ডি৩ সাপ্লিমেন্ট দিয়ে রক্তের ক্যালসিয়াম স্বাভাবিক করা হয় এবং PTH হরমোন নিয়ন্ত্রণে আনা হয়।'
          ),
        ],
        conclusion: l(
          'Total serum calcium in hypoalbuminemic patients severely underestimates true physiological calcemia. The corrected calcium of 8.8 mg/dL and ionized calcium of 1.02 mmol/L revealed mild true hypocalcemia with early secondary hyperparathyroidism, successfully managed with calibrated calcium citrate and vitamin D3.',
          'অ্যালবুমিন কম থাকলে সাধারণ ক্যালসিয়াম পরীক্ষায় মারাত্মক ভুল হতে পারে। সংশোধিত ক্যালসিয়াম ৮.৮ mg/dL হিসাব করে এবং ভিটামিন ডি ও ক্যালসিয়াম সাইট্রেট প্রয়োগের মাধ্যমে রোগীর প্যারাথাইরয়েড হরমোন স্বাভাবিক করা সম্ভব হয়েছে।'
        ),
      },
      {
        title: l('Calculating Calcium-Phosphate Solubility Product (Ca x Pi) in CKD-MBD', 'কিডনি রোগে ক্যালসিয়াম-ফসফেট গুণফল (Ca x Pi) ও রক্তনালীর খনিজায়ন ঝুঁকি নিরূপণ'),
        steps: [
          l(
            'Step 1: Clinical Scenario: A 64-year-old patient with Stage 4 Chronic Kidney Disease (eGFR = 22 mL/min/1.73m2) presents for routine mineral and bone disorder (CKD-MBD) screening. Serum Total Calcium = 9.8 mg/dL, Serum Inorganic Phosphate (Pi) = 6.4 mg/dL (hyperphosphatemia due to impaired renal excretion), Serum Albumin = 4.0 g/dL, intact PTH = 280 pg/mL.',
            'ধাপ ১: ক্লিনিক্যাল দৃশ্যপট: দীর্ঘস্থায়ী কিডনি রোগের (CKD স্টেজ ৪) ৬৪ বছর বয়সী এক রোগীর রুটিন পরীক্ষায় দেখা গেল সিরাম ক্যালসিয়াম = ৯.৮ mg/dL, সিরাম ফসফেট = ৬.৪ mg/dL (কিডনি বের করতে না পারায় অতিরিক্ত ফসফেট জমেছে), এবং PTH = ২৮০ pg/mL।'
          ),
          l(
            'Step 2: Calculate the Calcium-Phosphate Ion Product: Ion Product = Total Calcium (mg/dL) x Serum Phosphate (mg/dL). Ion Product = 9.8 x 6.4 = 62.7 mg2/dL2.',
            'ধাপ ২: ক্যালসিয়াম-ফসফেট গুণফল হিসাব করুন: আয়ন গুণফল = মোট ক্যালসিয়াম (mg/dL) x সিরাম ফসফেট (mg/dL)। আয়ন গুণফল = ৯.৮ x ৬.৪ = ৬২.৭ mg2/dL2।'
          ),
          l(
            'Step 3: Evaluate biophysical precipitation and cardiovascular calcification threshold: Clinical nephrology guidelines (KDIGO) establish that a Ca x Pi product exceeding 55 mg2/dL2 dramatically accelerates spontaneous thermodynamic precipitation of amorphous calcium phosphate crystals within soft tissues. In arterial walls, this mineral excess triggers phenotypic transdifferentiation of vascular smooth muscle cells into osteoblast-like cells, causing extensive Monckeberg medial calcosclerosis, arterial stiffness, and left ventricular hypertrophy.',
            'ধাপ ৩: রক্তনালীতে খনিজ জমার ঝুঁকি বিশ্লেষণ: কিডনি নির্দেশিকা (KDIGO) অনুসারে Ca x Pi গুণফল ৫৫ mg2/dL2 ছাড়িয়ে গেলেই রক্তরসে থাকা ক্যালসিয়াম ও ফসফেট দলা পাকিয়ে নরম টিস্যু ও রক্তনালীতে পাথরের মতো জমতে শুরু করে। এর ফলে ধমনীর স্থিতিস্থাপকতা নষ্ট হয়ে রক্তনালী শক্ত পাইপের মতো হয়ে যায় এবং হার্ট অ্যাটাকের ঝুঁকি বহুগুণ বেড়ে যায়।'
          ),
          l(
            'Step 4: Execute medical nutrition therapy and pharmacotherapy: Immediately restrict dietary phosphorus intake to 800–1,000 mg/day (eliminating inorganic phosphate additives found in processed foods and dark sodas). Initiate non-calcium-based phosphate binders (such as sevelamer carbonate or lanthanum carbonate) with meals to trap phosphate in the intestinal lumen without adding extra calcium load.',
            'ধাপ ৪: খাদ্য ও ওষুধের চিকিৎসা: প্রক্রিয়াজাত খাবার ও কোমল পানীয়তে থাকা অজৈব ফসফেট বর্জন করে খাদ্যের ফসফেট দৈনিক ৮০০ মিলিগ্রামের নিচে সীমাবদ্ধ করুন। খাবারের সাথে নন-ক্যালসিয়াম ফসফেট বাইন্ডার (সেভেলামার) ওষুধ প্রয়োগ করে অন্ত্রের ভেতরেই ফসফেট আটকে মল দিয়ে বের করে দিন।'
          ),
        ],
        conclusion: l(
          'A Ca x Pi product of 62.7 mg2/dL2 breached the dangerous threshold of 55 mg2/dL2. Immediate dietary phosphate restriction and non-calcium binders lowered serum phosphate to 4.2 mg/dL, reducing the ion product to 41.2 mg2/dL2 and halting vascular calcification progression.',
          'Ca x Pi গুণফল ৬২.৭ mg2/dL2 বিপজ্জনক সীমা (৫৫) অতিক্রম করেছিল। খাবারে ফসফেট নিয়ন্ত্রণ এবং আধুনিক সেভেলামার ওষুধ প্রয়োগের মাধ্যমে গুণফল ৪১.২ এ নামিয়ে এনে রক্তনালী ও হৃদযন্ত্রকে রক্ষা করা সম্ভব হয়েছে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does severe hypomagnesemia produce refractory hypocalcemia that cannot be corrected by calcium infusions alone?',
          'মারাত্মক ম্যাগনেসিয়াম ঘাটতি হলে কেন কেবল ক্যালসিয়াম ইনজেকশন দিলেও রক্তে ক্যালসিয়াম বাড়ে না এবং খিঁচুনি সারে না?'
        ),
        answer: l(
          'Parathyroid hormone secretion and target-organ responsiveness are strictly magnesium-dependent. Magnesium is an essential cofactor for adenylate cyclase and G-protein alpha-subunits. In profound hypomagnesemia (<0.5 mmol/L), the G-protein transducer uncouples: parathyroid chief cells become unable to exocytose PTH despite hypocalcemic stimulation, producing functional hypoparathyroidism. Concurrently, renal tubular and osteoblast PTH receptors become refractory to any circulating PTH. Consequently, hypocalcemia remains completely refractory until intracellular magnesium stores are restored via magnesium sulfate therapy.',
          'প্যারাথাইরয়েড হরমোন নিঃসরণ এবং হাড় ও কিডনির রিসেপ্টরে এর কার্যকারিতার জন্য ম্যাগনেসিয়াম অপরিহার্য কো-ফ্যাক্টর হিসেবে কাজ করে। রক্তে ম্যাগনেসিয়াম মারাত্মক কমে গেলে প্যারাথাইরয়েড গ্রন্থি ক্যালসিয়াম ঘাটতি বুঝতে পেরেও PTH ক্ষরণ করতে পারে না; আবার কিডনি ও হাড়ও PTH হরমোনের ডাকে সাড়া দেয় না। ফলে আগে ম্যাগনেসিয়াম ইনজেকশন দিয়ে ঘাটতি পূরণ না করা পর্যন্ত ক্যালসিয়ামের মাত্রা কিছুতেই স্বাভাবিক হয় না।'
        ),
      },
      {
        question: l(
          'How does the osteocyte-derived hormone FGF23 coordinate with renal alpha-Klotho to maintain phosphate balance, and what happens when Klotho expression fails in chronic kidney disease?',
          'অস্টিওসাইটের FGF23 হরমোন কিডনির Klotho প্রোটিনের সাথে কীভাবে ফসফেট নিয়ন্ত্রণ করে এবং কিডনি বিকল হলে এই সমন্বয় কেন ভেঙে পড়ে?'
        ),
        answer: l(
          'Osteocytes synthesize FGF23 in response to elevated phosphate and calcitriol. In proximal renal tubules, FGF23 binds the FGF receptor-1 (FGFR1) complexed with its obligate coreceptor, membrane alpha-Klotho. This triggers ERK1/2 phosphorylation, inducing rapid endocytosis and lysosomal degradation of apical sodium-phosphate cotransporters (NaPi-IIa and NaPi-IIc), forcing massive urinary phosphate excretion. Simultaneously, FGF23 downregulates CYP27B1 (1-alpha-hydroxylase) and upregulates CYP24A1 (24-hydroxylase), shutting down calcitriol synthesis. In chronic kidney disease, loss of renal functional parenchyma leads to profound Klotho deficiency; FGF23 levels skyrocket thousands-fold but fail to clear phosphate, driving severe hyperphosphatemia, vascular calcification, and left ventricular hypertrophy.',
          'রক্তে ফসফেট বাড়লে অস্থির অস্টিওসাইট কোষ FGF23 হরমোন নিঃসরণ করে। কিডনির প্রক্সিমাল টিউবুলে এটি বিশেষ Klotho প্রোটিনের সাথে যুক্ত হয়ে ফসফেট পুনঃশোষণের চ্যানেলগুলোকে (NaPi-IIa) ধ্বংস করে দেয়, ফলে অতিরিক্ত ফসফেট প্রস্রাব দিয়ে বের হয়ে যায়। একই সাথে এটি ভিটামিন ডি সক্রিয়করণ বন্ধ করে দেয়। কিন্তু কিডনি নষ্ট হয়ে গেলে Klotho প্রোটিন হারিয়ে যায়; ফলে রক্তে FGF23 হাজার গুণ বাড়লেও কিডনি ফসফেট বের করতে পারে না এবং রক্তনালী ও হার্টে ক্যালসিয়াম জমে রোগী অকালে মারা যায়।'
        ),
      },
      {
        question: l(
          'What is the precise molecular mechanism by which Denosumab inhibits osteoclast-mediated bone resorption in severe osteoporosis, and how does it mimic the endogenous hormone Osteoprotegerin (OPG)?',
          'তীব্র অস্টিওপোরোসিস চিকিৎসায় ডেনোসুম্যাব ওষুধ কীভাবে অস্থির ক্ষয় রোধ করে এবং এটি মানবদেহের নিজস্ব হরমোন OPG-এর অনুকরণে কীভাবে কাজ করে?'
        ),
        answer: l(
          'Osteoblasts and bone marrow stromal cells express Receptor Activator of Nuclear Factor-kappa B Ligand (RANKL) on their plasma membranes in response to PTH, calcitriol, and inflammatory cytokines. RANKL binds to the RANK receptor on osteoclast precursors, recruiting adaptor protein TRAF6 and activating NF-kappa B and NFATc1 transcription factors to drive osteoclast fusion, activation, and acid/cathepsin K secretion. Endogenous Osteoprotegerin (OPG) is a secreted soluble decoy receptor that binds RANKL, blocking RANK activation. Denosumab is a fully human IgG2 monoclonal antibody that binds human RANKL with high sub-nanomolar affinity, neutralizing RANKL and completely arresting osteoclastogenesis and bone resorption.',
          'অস্থি ভাঙনের সময় অস্টিওব্লাস্ট কোষ RANKL নামক একটি আণবিক সংকেত প্রকাশ করে যা অস্টিওক্ল্যাস্ট কোষে বসে তাদের হাড় গলানোর নির্দেশ দেয়। দেহ প্রাকৃতিকভাবে এই ক্ষয় থামাতে OPG নামক একটি প্রোটিন তৈরি করে যা RANKL-কে আটকে রাখে। ডেনোসুম্যাব হলো একটি আধুনিক মনোক্লোনাল অ্যান্টিবডি যা হুবহু OPG-এর মতো কাজ করে; এটি রক্তে সমস্ত RANKL-কে শক্তভাবে বেঁধে ফেলে, ফলে অস্টিওক্ল্যাস্ট আর হাড় ক্ষয় করতে পারে না এবং হাড়ের ঘনত্ব দ্রুত বৃদ্ধি পায়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'macrominerals-bone-remodeling-axis',
    title: l('The Endocrine Triad of Macrominerals & Bone Remodeling', 'ম্যাক্রোমিনারেল ও অস্থি পুনর্গঠনের এন্ডোক্রাইন ত্রয়ী'),
    description: l(
      'Explore the multi-organ regulatory loop controlling extracellular calcium, phosphate, and magnesium across the parathyroid glands, renal tubules, intestinal enterocytes, and skeletal bone remodeling units.',
      'প্যারাথাইরয়েড গ্রন্থি, কিডনি, অন্ত্র এবং অস্থির মধ্যে ক্যালসিয়াম, ফসফরাস ও ম্যাগনেসিয়ামের সুনির্দিষ্ট সমন্বয় ও আণবিক চক্র পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Educational endocrine simulation; mineral management in metabolic bone disease requires laboratory serum ionized calcium and phosphate monitoring.',
      'ম্যাক্রোমিনারেল শারীরবৃত্তের শিক্ষামূলক সিমুলেশন; অস্থি রোগে চিকিৎসাগত সিদ্ধান্তের জন্য রক্ত পরীক্ষা অপরিহার্য।'
    ),
    svgType: 'bone-mineral-axis',
    imageUrl: '/assets/macrominerals_bone_matrix_overview.jpg',
    imageCaption: l(
      'Medical textbook illustration of the macromineral and bone matrix endocrine network: Parathyroid CaSR/PTH loop, enterocyte TRPV6 and renal TRPV5 calcium transport, osteocyte FGF23-Klotho phosphaturic signaling, and the osteoblast-osteoclast RANKL/OPG bone remodeling unit.',
      'ম্যাক্রোমিনারেল ও অস্থি ম্যাট্রিক্সের এন্ডোক্রাইন নেটওয়ার্কের মেডিকেল ইলাস্ট্রেশন: প্যারাথাইরয়েড CaSR/PTH চক্র, এন্টারোসাইট TRPV6 ও রেনাল TRPV5 ক্যালসিয়াম পরিবহন, অস্টিওসাইট FGF23-Klotho ফসফেট নির্গমন সংকেত এবং অস্টিওব্লাস্ট-অস্টিওক্ল্যাস্ট RANKL/OPG অস্থি পুনর্গঠন একক।'
    ),
    has3D: true,
    threeDType: 'bone-matrix-hydroxyapatite-3d',
    items: [
      {
        id: 'node-casr-pth',
        label: l('Calcium-Sensing Receptor (CaSR) & Parathyroid PTH Loop', 'ক্যালসিয়াম-সেন্সিং রিসেপ্টর (CaSR) ও প্যারাথাইরয়েড PTH চক্র'),
        description: l(
          'CaSR monitors extracellular ionized calcium; falling calcium relieves Gq inhibition, unleashing PTH exocytosis to rescue serum calcemia.',
          'CaSR রক্তে মুক্ত ক্যালসিয়াম শনাক্ত করে; ক্যালসিয়াম কমে গেলে প্যারাথাইরয়েড হরমোন (PTH) ক্ষরিত হয়ে রক্তে ক্যালসিয়াম ফিরিয়ে আনে।'
        ),
        details: l(
          'When ionized calcium falls below 1.15 mmol/L, parathyroid CaSR signaling is deactivated, relieving tonic Gq/11 and Gi suppression. Parathyroid chief cells rapidly exocytose preformed PTH granules within seconds, stimulating renal tubular calcium reabsorption and osteocyte osteolysis.',
          'রক্তে ক্যালসিয়াম সামান্য কমলেই CaSR বন্ধ হয়ে প্যারাথাইরয়েড কোষ থেকে বিদ্যুৎ গতিতে PTH হরমোন ক্ষরিত হয়। এটি কিডনি ও হাড়ে গিয়ে রক্তে ক্যালসিয়াম ফিরিয়ে আনে।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
        position3D: { x: -85, y: -50, z: 25 },
      },
      {
        id: 'node-trpv-calbindin',
        label: l('Enterocyte TRPV6 & Renal TRPV5 Transporters', 'অন্ত্রের TRPV6 ও কিডনির TRPV5 ক্যালসিয়াম চ্যানেল'),
        description: l(
          'Calcitriol-activated TRPV6 gates apical calcium entry, ferried by calbindin-D9k to basolateral PMCA1b extrusion pumps.',
          'ক্যালসিট্রিওলের প্রভাবে TRPV6 গেট দিয়ে ক্যালসিয়াম কোষে ঢোকে এবং ক্যালবাইন্ডিন প্রোটিনের সাহায্যে রক্তে প্রবেশ করে।'
        ),
        details: l(
          'In duodenal enterocytes, active transcellular calcium transport requires apical entry via TRPV6 channels, intracellular buffering and transit mediated by calbindin-D9k, and basolateral extrusion against a steep electrochemical gradient by the plasma membrane Ca2+-ATPase (PMCA1b) and NCX1 exchangers.',
          'অন্ত্রে খাদ্য থেকে ক্যালসিয়াম শোষণের জন্য TRPV6 চ্যানেল দিয়ে ক্যালসিয়াম কোষে ঢুকে ক্যালবাইন্ডিনের ট্রাকে চড়ে PMCA1b পাম্পের সাহায্যে রক্তে পৌঁছে যায়।'
        ),
        color: '#10b981',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
        position3D: { x: -85, y: 50, z: -20 },
      },
      {
        id: 'node-fgf23-klotho',
        label: l('Osteocyte FGF23 & Renal Phosphate Wasting Axis', 'অস্টিওসাইট FGF23 ও কিডনির ফসফেট নিষ্কাশন অক্ষ'),
        description: l(
          'Osteocyte FGF23 binds renal FGFR1-alpha-Klotho complexes, internalizing NaPi-IIa cotransporters to enforce urinary phosphate excretion.',
          'হাড়ের FGF23 কিডনির Klotho প্রোটিনে যুক্ত হয়ে NaPi-IIa চ্যানেল ধ্বংস করে প্রস্রাবের মাধ্যমে অতিরিক্ত ফসফেট বের করে দেয়।'
        ),
        details: l(
          'FGF23 acts as the master phosphaturic hormone. Binding to the FGFR1-Klotho coreceptor complex in renal proximal tubules activates downstream MAPK/ERK cascades, inducing rapid lysosomal internalization of apical NaPi-IIa and NaPi-IIc cotransporters, reducing renal phosphate reabsorption from 85% to <60%.',
          'FGF23 কিডনির নালীতে ফসফেট ধরে রাখার গেটগুলোকে বন্ধ করে দেয়, ফলে খাবারে অতিরিক্ত ফসফেট গ্রহণ করলেও তা প্রস্রাবের সাথে নির্গত হয়ে রক্তে স্বাভাবিক ভারসাম্য বজায় থাকে।'
        ),
        color: '#d97706',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
        position3D: { x: 85, y: -50, z: -25 },
      },
      {
        id: 'node-rankl-opg',
        label: l('Bone Remodeling Unit: RANKL vs OPG Coupling', 'অস্থি পুনর্গঠন একক: RANKL ও OPG সংকেতের ভারসাম্য'),
        description: l(
          'Osteoblast RANKL binds osteoclast RANK to stimulate bone resorption, counterbalanced by soluble Osteoprotegerin (OPG) decoys.',
          'অস্টিওব্লাস্টের RANKL প্রোটিন অস্টিওক্ল্যাস্ট কোষে বসে হাড় ক্ষয় চালায়, যা OPG প্রোটিন দ্বারা সুষম নিয়ন্ত্রণে থাকে।'
        ),
        details: l(
          'When membranous RANKL on osteoblasts engages the RANK receptor on hematopoietic monocyte precursors, it recruits TRAF6 to drive NFATc1 nuclear translocation, initiating osteoclast differentiation and pit excavation. Osteoprotegerin (OPG) binds RANKL as a soluble decoy, preventing RANK engagement and preserving bone mineral density.',
          'অস্টিওব্লাস্টের ঝিল্লিতে থাকা RANKL প্রোটিন অস্টিওক্ল্যাস্ট কোষে বসে হাড় ক্ষয় চালায়। OPG প্রোটিন RANKL-কে আটকে দিয়ে অতিরিক্ত হাড় ক্ষয় রোধ করে। এই দুই বিপরীতমুখী শক্তির ভারসাম্যই আমাদের কঙ্কালকে আজীবন শক্তিশালী রাখে।'
        ),
        color: '#dc2626',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
        position3D: { x: 85, y: 50, z: 20 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'মৌলিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. Macromineral Homeostasis & Fluid Ion Compartments', '১. ম্যাক্রোমিনারেল ভারসাম্য ও তরল প্রকোষ্ঠের আয়ন বণ্টন'),
          paragraphs: [
            l(
              'While trace minerals such as iron, zinc, and selenium are required in milligram or microgram quantities, the human body requires macrominerals—principally calcium, phosphorus, and magnesium—in substantial daily gram quantities [1]. An adult human body contains approximately 1,000 to 1,200 grams of calcium, 600 to 700 grams of phosphorus, and 25 grams of magnesium [1]. The vast majority of these immense mineral reserves (99% of calcium, 85% of phosphorus, and 60% of magnesium) are physically locked within our bones and teeth, serving as the rigid, load-bearing scaffolding of the human skeleton [1, 2].',
              'মানবদেহে আয়রন বা জিঙ্কের মতো ক্ষুদ্র খনিজ যেখানে মিলিগ্রাম বা মাইক্রোগ্রাম মাত্রায় প্রয়োজন হয়, সেখানে ম্যাক্রোমিনারেল—বিশেষ করে ক্যালসিয়াম, ফসফরাস ও ম্যাগনেসিয়াম—প্রতিদিন শত শত মিলিগ্রাম থেকে গ্রাম মাত্রায় অপরিহার্য [১]। একজন প্রাপ্তবয়স্ক মানুষের শরীরে প্রায় ১,০০০ থেকে ১,২০০ গ্রাম ক্যালসিয়াম, ৬০০ থেকে ৭০০ গ্রাম ফসফরাস এবং ২৫ গ্রাম ম্যাগনেসিয়াম থাকে [১]। এই বিপুল খনিজ ভাণ্ডারের সিংহভাগই (৯৯% ক্যালসিয়াম, ৮৫% ফসফরাস এবং ৬০% ম্যাগনেসিয়াম) আমাদের হাড় ও দাঁতের কাঠামোর ভেতরে শক্ত পাথরের মতো জমা থাকে যা পুরো শরীরের ভর বহন করে [১, ২]।'
            ),
            l(
              'However, it is a profound biological mistake to view bone as a dormant, dead chalk pillar [1]. Bone is a vibrant, dynamic living tissue that is perpetually dismantled, remodeled, and rebuilt throughout human life [2]. The remaining mineral fractions circulating in our bloodstream and bathed inside our soft tissues (1% of calcium, 15% of phosphorus, and 40% of magnesium) execute vital physiological operations: triggering skeletal muscle contraction, conducting nerve impulses, governing cardiac rhythm, and fueling cellular energy metabolism [1, 4].',
              'তবে হাড়কে কেবল চুন বা সিমেন্টের তৈরি একটি নির্জীব কাঠামো মনে করা শারীরবৃত্তীয়ভাবে মারাত্মক ভুল [১]। হাড় হলো একটি অত্যন্ত কর্মচঞ্চল ও জীবন্ত অঙ্গ যা আজীবন অবিরাম ভাঙা ও গড়ার মধ্য দিয়ে নতুন রূপ ধারণ করে [২]। হাড়ের বাইরে আমাদের রক্তরসে ও কোষের ভেতরে থাকা অবশিষ্ট খনিজগুলো (১% ক্যালসিয়াম, ১৫% ফসফরাস এবং ৪০% ম্যাগনেসিয়াম) মানবজীবনের সবচেয়ে গুরুত্বপূর্ণ কাজগুলো চালায়: পেশির সংকোচন, স্নায়ুর সংকেত পরিবহন, হৃদস্পন্দনের ছন্দ এবং কোষের সার্বক্ষণিক শক্তি উৎপাদন [১, ৪]।'
            ),
            l(
              'Because extracellular calcium governs the electrical excitability of nervous tissue and cardiac muscle membranes, our bodies regulate blood ionized calcium within an extraordinarily razor-thin window: approximately 1.15 to 1.33 mmol/L (4.6 to 5.3 mg/dL) [1, 5]. If blood calcium drops even slightly below this floor, peripheral nerves become hyperexcitable, firing spontaneously and precipitating painful muscle cramps, carpopedal spasms, and life-threatening laryngeal tetany [1, 5]. Conversely, if blood calcium rises too high, nervous conduction is suppressed, causing mental confusion, lethargy, cardiac arrhythmias, and kidney failure [1, 5].',
              'যেহেতু রক্তের মুক্ত ক্যালসিয়াম আমাদের স্নায়ু ও হৃদপেশির বৈদ্যুতিক সংবেদনশীলতা নিয়ন্ত্রণ করে, তাই মানবদেহ রক্তের ক্যালসিয়ামকে একটি অবিশ্বাস্য নিখুঁত সীমার মধ্যে (১.১৫ থেকে ১.৩৩ mmol/L) কঠোরভাবে বেঁধে রাখে [১, ৫]। এই মাত্রা সামান্য নিচে নামলেই স্নায়ুগুলো অনিয়ন্ত্রিতভাবে উত্তেজিত হয়ে পড়ে, যার ফলে হাত-পায়ের পেশিতে তীব্র খিঁচুনি (টিটেনি) দেখা দেয় এবং শ্বাসনালী বন্ধ হয়ে মৃত্যুর ঝুঁকি তৈরি হয় [১, ৫]। আবার রক্তে ক্যালসিয়াম বেড়ে গেলে মস্তিষ্ক ঝিমিয়ে পড়ে, স্মৃতিভ্রান্তি হয় এবং হৃদস্পন্দন বন্ধ হয়ে যেতে পারে [১, ৫]।'
            ),
            l(
              'To preserve this razor-thin equilibrium in the blood, evolution developed a tri-organ endocrine axis connecting the parathyroid glands in the neck, the intestinal tract in the abdomen, and the kidneys in the posterior abdominal wall [1, 5]. Whenever dietary intake drops, the parathyroid glands immediately mobilize calcium from the expansive skeletal bank to rescue the blood [1, 5]. Thus, understanding macromineral nutrition is fundamentally about understanding how our bodies balance the immediate survival needs of our blood against the lifelong structural durability of our bones [1, 2].',
              'রক্তে এই অতি-সূক্ষ্ম ভারসাম্য রক্ষা করার জন্য বিবর্তনের ধারায় মানবদেহে তিনটি অঙ্গের একটি সুসংগঠিত অক্ষ তৈরি হয়েছে: গলার প্যারাথাইরয়েড গ্রন্থি, পেটের ক্ষুদ্রান্ত্র এবং পেছনের কিডনি [১, ৫]। খাবারে ক্যালসিয়ামের অভাব হলেই প্যারাথাইরয়েড গ্রন্থি হাড়ের ব্যাংক থেকে ক্যালসিয়াম ধার নিয়ে রক্তে সরবরাহ করে [১, ৫]। তাই ম্যাক্রোমিনারেল পুষ্টিবিদ্যা বোঝা মানেই হলো তাৎক্ষণিক রক্ত রক্ষা বনাম দীর্ঘমেয়াদী হাড়ের স্থায়িত্বের মধ্যকার এই অসাধারণ ভারসাম্য প্রক্রিয়াটি উপলব্ধি করা [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Calcium: Parathyroid Sensing, Endocrine Loops & Transporters', '২. ক্যালসিয়াম: প্যারাথাইরয়েড সংবেদন, এন্ডোক্রাইন লুপ ও চ্যানেল'),
          paragraphs: [
            l(
              'The central sensor and rheostat of systemic calcium balance is the Calcium-Sensing Receptor (CaSR), an extraordinary G-protein-coupled receptor embedded in the plasma membranes of parathyroid chief cells and renal tubule cells [1, 5]. The CaSR functions as an exquisite biological thermostat: its expansive extracellular venous Venus flytrap domain directly binds ionized calcium ions with millimolar affinity [5]. When blood calcium is abundant, CaSR activation stimulates intracellular Gq/11 signaling, triggering an elevation in cytoplasmic calcium that paradoxically blocks parathyroid hormone (PTH) exocytosis [5].',
              'মানবদেহের রক্তে ক্যালসিয়াম পরিমাপের প্রধান কেন্দ্রীয় সেন্সর হলো ক্যালসিয়াম-সেন্সিং রিসেপ্টর (CaSR), যা গলার প্যারাথাইরয়েড এবং কিডনির কোষের পর্দায় বসানো থাকে [১, ৫]। CaSR একটি নিখুঁত বায়োলজিক্যাল থার্মোস্ট্যাটের মতো কাজ করে: এর বাইরের অংশটি রক্তের ক্যালসিয়াম আয়নের সাথে যুক্ত হতে পারে [৫]। রক্তে পর্যাপ্ত ক্যালসিয়াম থাকলে CaSR সক্রিয় হয়ে প্যারাথাইরয়েড হরমোন (PTH) নিঃসরণের দরজা শক্তভাবে বন্ধ রাখে [৫]।'
            ),
            l(
              'However, the moment extracellular ionized calcium dips by as little as 1%, calcium unbinds from the CaSR [5]. This relieves the inhibitory brake, unleashing rapid exocytosis of preformed Parathyroid Hormone (PTH) into the circulation within seconds [1, 5]. PTH acts as an emergency hormone with three distinct physiological targets: it stimulates renal tubular calcium reabsorption in the distal convoluted tubule, activates renal CYP27B1 (1-alpha-hydroxylase) to manufacture active calcitriol [1,25(OH)2D], and mobilizes osteoblast/osteoclast signaling in bone to dissolve calcium into the blood [1, 2, 5].',
              'কিন্তু রক্তে ক্যালসিয়াম মাত্র ১% কমে যাওয়া মাত্রই CaSR নিষ্ক্রিয় হয়ে পড়ে [৫]। সাথে সাথে প্যারাথাইরয়েড গ্রন্থি থেকে রক্তের মধ্যে টনকে টন প্যারাথাইরয়েড হরমোন (PTH) নির্গত হতে শুরু করে [১, ৫]। PTH একটি জরুরি উদ্ধারকারী হরমোন হিসেবে তিনটি অঙ্গে আক্রমণ চালায়: এটি কিডনিকে প্রস্রাব থেকে ক্যালসিয়াম ধরে রাখতে বাধ্য করে, কিডনিতে ভিটামিন ডি-কে সক্রিয় ক্যালসিট্রিওলে রূপান্তর করে এবং হাড়ের কোষগুলোকে নির্দেশ দেয় হাড় ভেঙে রক্তে ক্যালসিয়াম ঢালতে [১, ২, ৫]।'
            ),
            l(
              'In the small intestine, calcitriol synthesized under PTH stimulation binds to the enterocyte nuclear Vitamin D Receptor (VDR), driving the transcription of specialized calcium transport machinery [1, 2]. Calcitriol dramatically upregulates the apical calcium entry channel TRPV6 (Transient Receptor Potential Vanilloid 6), the intracellular cytosolic shuttle protein Calbindin-D9k, and the basolateral extrusion pump PMCA1b (Plasma Membrane Calcium ATPase 1b) [1]. This active transport cascade elevates dietary calcium absorption from a passive ~10% up to over 30–40% [1].',
              'ক্ষুদ্রান্ত্রে PTH-এর মাধ্যমে তৈরি হওয়া সক্রিয় ভিটামিন ডি (ক্যালসিট্রিওল) এন্টারোসাইট কোষে ঢুকে বিশেষ জিন চালু করে [১, ২]। এটি ক্যালসিয়াম প্রবেশের দরজা TRPV6, কোষের ভেতরে ক্যালসিয়াম বহনের ট্রাক Calbindin-D9k এবং রক্তে ঠেলে দেওয়ার পাম্প PMCA1b-এর সংখ্যা শতগুণ বাড়িয়ে দেয় [১]। ফলে খাদ্য থেকে ক্যালসিয়াম শোষণের হার সাধারণ ১০% থেকে লাফিয়ে ৩০-৪০% ছাড়িয়ে যায় [১]।'
            ),
            l(
              'Conversely, when blood calcium rises back into the safe therapeutic zone, ionized calcium re-engages parathyroid CaSRs [5]. This immediately extinguishes PTH secretion, shuts down calcitriol synthesis, promotes urinary calcium excretion, and allows bone to resume mineralization [1, 5]. This continuous, dynamic feedback loop runs uninterrupted every minute of our lives [1, 5].',
              'বিপরীতে রক্তে ক্যালসিয়াম স্বাভাবিক সীমায় ফিরে আসা মাত্রই অতিরিক্ত ক্যালসিয়াম গিয়ে CaSR রিসেপ্টরে বসে [৫]। সাথে সাথে প্যারাথাইরয়েড হরমোন তৈরি বন্ধ হয়ে যায়, কিডনি বাড়তি ক্যালসিয়াম প্রস্রাব দিয়ে বের করে দেয় এবং হাড় পুনরায় শক্ত হতে শুরু করে [১, ৫]। জীবনের প্রতিটি সেকেন্ডে আমাদের অজান্তেই এই অসাধারণ ভারসাম্য চক্রটি কাজ করে চলেছে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Phosphorus & Magnesium: FGF23-Klotho Axis & TRPM6 Biology', '৩. ফসফরাস ও ম্যাগনেসিয়াম: FGF23-ক্লোথো অক্ষ ও TRPM6 চ্যানেল'),
          paragraphs: [
            l(
              'Phosphorus is the indispensable chemical partner of calcium in skeletal mineralization and the master constituent of biological energy currencies (ATP, creatine phosphate), nucleic acid backbones (DNA, RNA), and phospholipid cell membranes [1, 3]. In the skeleton, phosphorus and calcium unite in an exact 1:1.67 molar stoichiometry to form insoluble hydroxyapatite crystals [1]. Because calcium and phosphate readily precipitate if circulating concentrations rise unchecked, human physiology maintains an intricate endocrine axis spearheaded by Fibroblast Growth Factor 23 (FGF23) [3].',
              'ফসফরাস হলো হাড়ের খনিজায়নে ক্যালসিয়ামের প্রধান জীবনসঙ্গী এবং কোষীয় শক্তির একক (ATP), ডিএনএ-আরএনএ কাঠামো এবং কোষপর্দার অপরিহার্য উপাদান [১, ৩]। হাড়ের ভেতরে ফসফরাস ও ক্যালসিয়াম একটি সুনির্দিষ্ট আনুপাতিক বন্ধনে যুক্ত হয়ে মজবুত হাইড্রোক্সিঅ্যাপাটাইট স্ফটিক তৈরি করে [১]। রক্তে ফসফরাস ও ক্যালসিয়াম অনিয়ন্ত্রিতভাবে বাড়লে এরা রক্তনালীর ভেতরে পাথরের মতো জমে যেতে পারে; তাই শরীর FGF23 নামক হরমোন দিয়ে ফসফরাসের মাত্রা কঠোর নিয়ন্ত্রণে রাখে [৩]।'
            ),
            l(
              'FGF23 is synthesized and secreted by mature osteocytes and osteoblasts in bone whenever circulating phosphate or calcitriol levels rise [3]. FGF23 travels through the blood to the renal proximal tubule, where it binds to the Fibroblast Growth Factor Receptor-1 (FGFR1) complexed with its obligate, membrane-anchored coreceptor, alpha-Klotho [3]. Activation of the FGF23-Klotho complex triggers rapid endocytosis and lysosomal destruction of apical NaPi-IIa and NaPi-IIc sodium-phosphate cotransporters, forcing massive urinary phosphate dumping (phosphaturia) to prevent metastatic tissue calcification [3].',
              'রক্তে ফসফেট বাড়লেই হাড়ের অস্টিওসাইট কোষ থেকে FGF23 হরমোন নিঃসৃত হয় [৩]। FGF23 রক্তে ভেসে কিডনির নালীতে গিয়ে বিশেষ Klotho প্রোটিনের সাথে হাত মেলায় [৩]। Klotho-এর সাহায্যে এটি কিডনির ফসফেট ধরে রাখার চ্যানেলগুলোকে (NaPi-IIa) ভেঙে ফেলে, যার ফলে অতিরিক্ত ফসফেট প্রস্রাব দিয়ে বের হয়ে যায় এবং রক্তনালী ও হৃৎপিণ্ডে পাথর জমার ঝুঁকি রোধ হয় [৩]।'
            ),
            l(
              'Magnesium (Mg2+) is the forgotten macromineral, serving as an obligate enzymatic cofactor for over 300 metabolic enzymes, including every single kinase reaction that consumes or generates ATP [1, 4]. Because ATP exists inside cells almost exclusively as an Mg-ATP2- chelate where the magnesium ion shields negative phosphate oxygens to facilitate nucleophilic attack, no carbohydrate, protein, or fatty acid can be metabolized without adequate magnesium [1, 4]. Magnesium absorption in the intestine and reabsorption in the renal distal convoluted tubule is governed by specialized TRPM6 channels [4].',
              'ম্যাগনেসিয়াম হলো মানবদেহের এক উপেক্ষিত অথচ অতি-গুরুত্বপূর্ণ ম্যাক্রোমিনারেল, যা শরীরের ৩০০ টিরও বেশি এনজাইমের চালিকাশক্তি হিসেবে কাজ করে [১, ৪]। কোষে উৎপন্ন প্রতিটি ATP অণু মূলত ম্যাগনেসিয়ামের সাথে যুক্ত থেকে Mg-ATP2- হিসেবে অবস্থান করে; ম্যাগনেসিয়াম ছাড়া কোষের কোনো শর্করা, চর্বি বা প্রোটিন ভেঙে শক্তি তৈরি হওয়া শারীরবৃত্তীয়ভাবে অসম্ভব [১, ৪]। অন্ত্র ও কিডনিতে বিশেষ TRPM6 চ্যানেলের মাধ্যমে ম্যাগনেসিয়াম রক্তে শোষিত হয় [৪]।'
            ),
            l(
              'The interconnectedness of these three macrominerals is illustrated by the clinical phenomenon of magnesium-dependent hypocalcemia [1, 4]. In severe magnesium depletion, parathyroid chief cells become paralyzed, unable to release PTH despite profound calcium deficits, while peripheral bone and kidney tissues become completely resistant to PTH signaling [1, 4]. Thus, attempting to correct low calcium without first checking and repleting magnesium is one of the most common pitfalls in clinical nutrition [1, 4].',
              'এই তিন খনিজের গভীর বন্ধুত্ব বোঝা যায় যখন রক্তে ম্যাগনেসিয়াম কমে যায় [১, ৪]। শরীরে মারাত্মক ম্যাগনেসিয়াম ঘাটতি দেখা দিলে প্যারাথাইরয়েড গ্রন্থি অচল হয়ে পড়ে এবং রক্তে ক্যালসিয়াম কমে যাওয়া সত্ত্বেও PTH হরমোন বের করতে পারে না; আবার হাড় ও কিডনিও কোনো হরমোনের ডাকে সাড়া দেয় না [১, ৪]। এ কারণে ম্যাগনেসিয়াম ঠিক না করে কেবল ক্যালসিয়াম খাওয়ালে রোগী কখনোই সুস্থ হয় না [১, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Skeletal Matrix Dynamics: Osteoblasts, Osteoclasts & Hydroxyapatite', '৪. অস্থি কাঠামোর রূপান্তর: অস্টিওব্লাস্ট, অস্টিওক্ল্যাস্ট ও স্ফটিক গঠন'),
          paragraphs: [
            l(
              'Bone is a composite biomineralized material constructed from two complementary phases: an organic protein matrix (osteoid) comprising 35% of bone dry weight, and an inorganic mineral phase comprising 65% [1, 2]. The organic matrix consists primarily of type I collagen fibers woven into a dense, cross-linked triple-helix meshwork supplemented by non-collagenous proteins such as osteocalcin and osteopontin [1]. The inorganic phase consists of nanoscopic hydroxyapatite crystals [Ca10(PO4)6(OH)2] packed securely within the spaces between collagen fibrils, providing immense compressive strength while collagen provides tensile flexibility [1, 2].',
              'হাড় হলো জৈব ও অজৈব উপাদানের একটি অসাধারণ প্রাকৃতিক যৌগিক পদার্থ: এর ৩৫% হলো জৈব প্রোটিন কাঠামো এবং ৬৫% হলো অজৈব খনিজ স্ফটিক [১, ২]। জৈব কাঠামোর মূল ভিত্তি হলো মজবুত টাইপ-১ কোলাজেন ফাইবার যা দড়ির মতো পেঁচিয়ে হাড়ের জাল তৈরি করে [১]। আর অজৈব অংশে থাকে অতি-ক্ষুদ্র হাইড্রোক্সিঅ্যাপাটাইট স্ফটিক [Ca10(PO4)6(OH)2], যা কোলাজেনের ফাঁকে ফাঁকে সিমেন্টের মতো শক্ত হয়ে বসে হাড়কে প্রচণ্ড চাপ ও মোচড় সহ্য করার ক্ষমতা দেয় [১, ২]।'
            ),
            l(
              'Throughout human life, skeletal architecture is continuously refreshed by microscopic remodeling teams called Basic Multicellular Units (BMUs) [2]. The destruction of old bone is executed by osteoclasts—giant, multinucleated polykaryons derived from macrophage-monocyte hematopoietic lineages [2, 6]. Osteoclasts seal onto bone surfaces via integrins, forming an isolated resorption lacuna (Howship’s lacuna) into which they pump hydrochloric acid (via vacuolar H+-ATPases) to dissolve mineral hydroxyapatite and secrete cathepsin K to digest the organic collagen matrix [2, 6].',
              'আমাদের সারা জীবনে হাড়ের পুরোনো ও দুর্বল অংশ ধ্বংস করে নতুন হাড় তৈরির কাজটি চালায় বিশেষ কোষীয় দল [২]। পুরোনো হাড় ভাঙার কাজটি করে অস্টিওক্ল্যাস্ট নামক বিশালাকার কোষ [২, ৬]। এই কোষগুলো হাড়ের গায়ে শক্তভাবে আটকে গিয়ে সেখানে শক্তিশালী হাইড্রোক্লোরিক অ্যাসিড নিঃসরণ করে খনিজ স্ফটিক গলিয়ে ফেলে এবং বিশেষ এনজাইম (ক্যাথপসিন কে) ছিটিয়ে কোলাজেনের জাল ধ্বংস করে গর্ত তৈরি করে [২, ৬]।'
            ),
            l(
              'Bone building is carried out by osteoblasts—mesenchymal-derived bone-forming cells that move into the excavated resorption pits to lay down fresh, unmineralized osteoid [2]. Osteoblasts express high levels of tissue non-specific alkaline phosphatase (TNAP), which hydrolyzes extracellular pyrophosphate (a natural mineralization inhibitor) to release free inorganic phosphate, driving spontaneous calcium-phosphate nucleated precipitation and progressive hydroxyapatite crystallization [1, 2]. Over several months, trapped osteoblasts differentiate into long-lived mechanosensory osteocytes [2, 3].',
              'হাড় ভাঙার পর সেখানে হাজির হয় অস্টিওব্লাস্ট কোষ [২]। এরা খনন করা গর্তের ভেতর নতুন তরল কোলাজেন প্রোটিন ঢেলে দেয় [২]। এরপর এরা অ্যালকালাইন ফসফাটেজ (TNAP) এনজাইমের সাহায্যে সেখানে প্রচুর ফসফেট ও ক্যালসিয়াম জমা করে নতুন হাইড্রোক্সিঅ্যাপাটাইট স্ফটিকের শক্ত পাথর তৈরি করে [১, ২]। কিছুদিন পর এই অস্টিওব্লাস্টগুলো নতুন হাড়ের ভেতর বন্দি হয়ে চিরস্থায়ী অস্টিওসাইট কোষে রূপ নেয় যা হাড়ের চাপ অনুভব করে [২, ৩]।'
            ),
            l(
              'The molecular communication coordinating bone destruction and bone formation is governed by the RANK/RANKL/OPG cytokine axis [2, 6]. Osteoblasts and osteocytes display Receptor Activator of Nuclear Factor-kappa B Ligand (RANKL) on their surface, which binds to RANK receptors on osteoclast precursors to stimulate bone resorption [2, 6]. Counterbalancing this signal, osteoblasts simultaneously secrete Osteoprotegerin (OPG), a soluble decoy receptor that catches RANKL before it can bind RANK, protecting the skeleton from excessive demolition [2, 6].',
              'হাড় ভাঙা ও গড়ার এই দ্বৈত কাজের ভারসাম্য নিয়ন্ত্রিত হয় RANKL ও OPG সংকেতের মাধ্যমে [২, ৬]। অস্টিওব্লাস্টের গায়ে থাকা RANKL প্রোটিন অস্টিওক্ল্যাস্ট কোষে বসে হাড় ভাঙার গতি বাড়িয়ে দেয় [২, ৬]। অপরদিকে অস্টিওব্লাস্ট নিজে থেকেই OPG নামক একটি রক্ষাকবচ প্রোটিন তৈরি করে যা RANKL-কে আটকে রেখে হাড়ের ক্ষয় থামায় [২, ৬]। এই দুইয়ের ভারসাম্যই ঠিক করে হাড় মজবুত থাকবে নাকি দুর্বল হবে [২, ৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Clinical Bone Disorders: Osteopenia, Osteomalacia & CKD-MBD', '৫. ক্লিনিক্যাল অস্থি রোগ: অস্টিওপেনিয়া, রিকেটস ও রেনাল বোন ডিজিজ'),
          paragraphs: [
            l(
              'Disruptions of macromineral homeostasis precipitate debilitating skeletal pathologies across the lifespan [1, 2]. Osteoporosis represents a silent metabolic disease characterized by low bone mineral density and microarchitectural deterioration of bone tissue, leaving bones porous and fragile [2]. In postmenopausal osteoporosis, the loss of circulating estrogen unhinges the RANKL/OPG balance: osteoblasts produce excess RANKL relative to OPG, causing uncoupled, accelerated osteoclastic bone resorption that outpaces bone formation and leads to catastrophic fragility fractures of the hip, spine, and wrist [2, 6].',
              'ম্যাক্রোমিনারেলের ভারসাম্য নষ্ট হলে মানবদেহে মারাত্মক হাড়ের রোগ দেখা দেয় [১, ২]। অস্টিওপোরোসিস হলো এমন একটি নীরব ঘাতক রোগ যাতে হাড়ের ঘনত্ব কমে গিয়ে হাড় মৌচাকের মতো ফাঁপা ও ভঙ্গুর হয়ে পড়ে [২]। বিশেষ করে নারীদের মেনোপজের পর ইস্ট্রোজেন হরমোন কমে গেলে OPG রক্ষাকবচ দুর্বল হয়ে পড়ে এবং RANKL অতিরিক্ত বেড়ে যায়; ফলে হাড় এত দ্রুত ক্ষয় হয় যে সামান্য আছাড়েই কোমর বা মেরুদণ্ডের হাড় ভেঙে যায় [২, ৬]।'
            ),
            l(
              'A critical distinction in clinical nutrition is the difference between osteoporosis and osteomalacia (or rickets in growing children) [1, 2]. While osteoporosis represents a balanced reduction in both the organic protein matrix and mineral content (too little bone of normal composition), osteomalacia represents a specific defect in mineralizing the organic matrix [1]. Due to severe prolonged deficiency of vitamin D, calcium, or phosphate, osteoid is synthesized normally but cannot calcify, producing soft, rubbery bones that bend under mechanical weight, causing bowed legs in toddlers and severe diffuse bone pain in adults [1, 2].',
              'ক্লিনিক্যাল পুষ্টিবিদ্যায় অস্টিওপোরোসিস এবং অস্টিওম্যালাশিয়ার (বা শিশুদের রিকেটস) পার্থক্য বোঝা অত্যন্ত জরুরি [১, ২]। অস্টিওপোরোসিসে হাড়ের প্রোটিন ও খনিজ উভয়ই একসাথে কমে গিয়ে হাড় ফাঁপা হয়; কিন্তু অস্টিওম্যালাশিয়ায় কোলাজেন প্রোটিন তৈরি হলেও ভিটামিন ডি বা ক্যালসিয়ামের অভাবে তাতে খনিজ স্ফটিক জমতে পারে না [১]। ফলে হাড় নরম ও রবারের মতো হয়ে দেহের ভারে ধনুকের মতো বেঁকে যায় এবং সারা শরীরে তীব্র হাড়ের ব্যথা হয় [১, ২]।'
            ),
            l(
              'In Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD), the progressive loss of functional nephrons dismantles the entire macromineral triad [1, 3]. As the glomerular filtration rate plunges, the kidneys fail to excrete dietary phosphate, precipitating hyperphosphatemia [3]. Concurrently, loss of renal 1-alpha-hydroxylase halts calcitriol synthesis, shutting off intestinal calcium absorption [1, 3]. The combination of hyperphosphatemia, hypocalcemia, and loss of Klotho hyper-stimulates parathyroid glands into tertiary, autonomous hyperparathyroidism, dissolving the skeleton while depositing calcium crystals in cardiac valves and coronaries [3, 5].',
              'দীর্ঘস্থায়ী কিডনি রোগে (CKD-MBD) বৃক্ক নষ্ট হওয়ার সাথে সাথে ক্যালসিয়াম, ফসফরাস ও ম্যাগনেসিয়ামের সম্পূর্ণ চক্রটি তছনছ হয়ে যায় [১, ৩]। কিডনি প্রস্রাবের সাথে ফসফেট বের করতে পারে না, ফলে রক্তে ফসফেট বিপজ্জনকভাবে বেড়ে যায় [৩]। একই সাথে কিডনি ভিটামিন ডি সক্রিয় করতে ব্যর্থ হওয়ায় অন্ত্রে ক্যালসিয়াম শোষণ বন্ধ হয়ে যায় [১, ৩]। রক্তে অতিরিক্ত ফসফেট ও কম ক্যালসিয়াম প্যারাথাইরয়েড গ্রন্থিকে উন্মাদ করে তোলে; গ্রন্থিটি অতিরিক্ত হরমোন ক্ষরণ করে রোগীর কঙ্কালকে ভেঙে চুরমার করে দেয় এবং সেই ক্যালসিয়াম রক্তনালী ও হার্টের ভালভে জমিয়ে হার্ট অ্যাটাক ঘটায় [৩, ৫]।'
            ),
            l(
              'Medical nutrition therapy for bone preservation requires targeted, calibrated lifelong strategies [1, 2]. Achieving peak bone mass during childhood and early adulthood through adequate dietary calcium (1,000–1,200 mg/day from dairy, fortified foods, leafy greens), sufficient vitamin D (800–2,000 IU/day), dietary magnesium, and weight-bearing physical exercise builds a resilient skeletal reserve that protects against fracture in old age [1, 2]. In patients with established osteoporosis, antiresorptive therapies (such as bisphosphonates or denosumab) are paired with daily calcium and vitamin D to rebuild skeletal density [2, 6].',
              'হাড় সুস্থ রাখার জন্য আজীবন সঠিক পুষ্টি কৌশল অনুসরণ করা অপরিহার্য [১, ২]। শৈশব ও যৌবনকালে পর্যাপ্ত ক্যালসিয়াম (প্রতিদিন ১,০০০-১,২০০ মিলিগ্রাম দুধ, শাকসবজি ও বাদাম থেকে), ভিটামিন ডি, ম্যাগনেসিয়াম এবং নিয়মিত ব্যায়ামের মাধ্যমে হাড়ের সর্বোচ্চ ঘনত্ব (পিক বোন মাস) গড়ে তুললে বার্ধক্যে হাড় ভাঙার ঝুঁকি দূর হয় [১, ২]। আর যাদের হাড় ক্ষয় হয়ে গেছে, তাদের ক্যালসিয়াম ও ভিটামিন ডি-এর পাশাপাশি আধুনিক ডেনোসুম্যাব বা বিসফসফোনেট ওষুধ দিয়ে হাড়কে পুনরায় শক্তিশালী করা হয় [২, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Summary & Review Checkpoints', '৬. উচ্চ-গুরুত্বপূর্ণ সারাংশ ও রিভিশন চেকপয়েন্ট'),
          paragraphs: [
            l(
              'Macrominerals calcium, phosphorus, and magnesium form the structural bedrock of the human skeleton as hydroxyapatite crystals while simultaneously orchestrating systemic neuromuscular excitability, intracellular enzymatic catalysis, and energy transfer [1, 4].',
              'ক্যালসিয়াম, ফসফরাস ও ম্যাগনেসিয়াম একদিকে হাড়ের ভেতর শক্ত হাইড্রোক্সিঅ্যাপাটাইট স্ফটিক তৈরি করে কঙ্কালকে সুরক্ষা দেয়, অন্যদিকে রক্তে ও কোষে স্নায়ু সংবেদন, পেশি সংকোচন ও শক্তি উৎপাদন নিয়ন্ত্রণ করে [১, ৪]।'
            ),
            l(
              'Extracellular ionized calcium is fiercely guarded by the parathyroid Calcium-Sensing Receptor (CaSR), which instantly deploys PTH to stimulate renal calcium recovery, intestinal calcitriol transport via TRPV6 and calbindin, and skeletal resorption [1, 5].',
              'রক্তের ক্যালসিয়াম সামান্য কমে গেলেই গলার CaSR রিসেপ্টর প্যারাথাইরয়েড হরমোন (PTH) ক্ষরণ করায়, যা কিডনি থেকে ক্যালসিয়াম ধরে রাখে, অন্ত্রের TRPV6 চ্যানেলের মাধ্যমে শোষণ বাড়ায় এবং হাড়ের ক্যালসিয়াম রক্তে ফিরিয়ে আনে [১, ৫]।'
            ),
            l(
              'Phosphorus balance is regulated by osteocyte-derived FGF23 in concert with renal alpha-Klotho to clear excess phosphate, while magnesium acts as an obligate partner for every ATP-dependent enzyme in human biochemistry [1, 3, 4].',
              'হাড়ের অস্টিওসাইট থেকে ক্ষরিত FGF23 হরমোন কিডনির Klotho প্রোটিনের সাথে মিলে অতিরিক্ত ফসফেট প্রস্রাব দিয়ে বের করে দেয়, আর ম্যাগনেসিয়াম কোষের সমস্ত ATP শক্তি ব্যবহারের চাবিকাঠি হিসেবে কাজ করে [১, ৩, ৪]।'
            ),
            l(
              'Skeletal health relies on the delicate balance between osteoclast bone demolition and osteoblast bone synthesis, mediated by the RANKL/OPG molecular rheostat [2, 6]. Clinical dietetics must ensure adequate lifelong intake of calcium, vitamin D, and magnesium while controlling excess processed phosphorus to preserve bone density and prevent cardiovascular calcification [1, 2, 3].',
              'কঙ্কালের সুস্থতা নির্ভর করে অস্টিওক্ল্যাস্ট দ্বারা হাড় ভাঙা এবং অস্টিওব্লাস্ট দ্বারা নতুন হাড় গড়ার নিখুঁত ভারসাম্যের ওপর যা RANKL ও OPG সংকেতের মাধ্যমে পরিচালিত হয় [২, ৬]। সঠিক খাদ্যতালিকায় ক্যালসিয়াম, ভিটামিন ডি ও ম্যাগনেসিয়াম নিশ্চিত করে এবং প্রক্রিয়াজাত ফসফেট বর্জন করে আজীবন মজবুত হাড় ও সুস্থ রক্তনালী রক্ষা করা সম্ভব [১, ২, ৩]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'প্রাতিষ্ঠানিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. Biophysics of Ionized Calcium and Albumin Binding Equilibria', '১. আয়নিত ক্যালসিয়াম ও অ্যালবুমিন বাইন্ডিং ইকুইলিব্রিয়াম'),
          paragraphs: [
            l(
              'In clinical biochemistry, total serum calcium (~2.15 to 2.55 mmol/L or 8.6 to 10.2 mg/dL) exists partitioned into three distinct physicochemical fractions: approximately 50% free ionized calcium (Ca2+), 40% protein-bound calcium (principally to serum albumin and globulins), and 10% complexed with small diffusible anions such as bicarbonate, citrate, and phosphate [1, 5]. Only the free ionized fraction is biologically active and accessible to cell surface receptors and ion channels [1, 5].',
              'ক্লিনিক্যাল ল্যাবরেটরিতে রক্তের মোট ক্যালসিয়াম মূলত তিনটি ভাগে বিভক্ত থাকে: প্রায় ৫০% হলো মুক্ত আয়নিত ক্যালসিয়াম (Ca2+), ৪০% সিরাম অ্যালবুমিন প্রোটিনের সাথে যুক্ত এবং ১০% অন্যান্য অ্যানায়নের সাথে জটিল যৌগ হিসেবে থাকে [১, ৫]। এই তিনটির মধ্যে কেবল মুক্ত আয়নিত ক্যালসিয়ামটুকুই মানবদেহের সমস্ত রিসেপ্টর ও আয়ন চ্যানেলে শারীরবৃত্তীয় কাজ সম্পাদন করে [১, ৫]।'
            ),
            l(
              'Calcium binding to serum albumin is highly sensitive to ambient extracellular pH [1, 5]. Albumin possesses multiple negatively charged carboxylate and imidazole side chains that bind both protons (H+) and calcium ions (Ca2+) in direct thermodynamic competition [5]. In acute respiratory or metabolic alkalosis (such as during hyperventilation), falling hydrogen ion concentrations cause protons to dissociate from albumin. This exposes unoccupied negative binding sites that avidly sequester free ionized calcium, causing acute hypocalcemia and severe neuromuscular tetany despite completely normal total serum calcium [1, 5].',
              'অ্যালবুমিনের সাথে ক্যালসিয়াম যুক্ত হওয়া রক্তের অ্যাসিড-বেস (pH) ভারসাম্যের ওপর সরাসরি নির্ভরশীল [১, ৫]। অ্যালবুমিনের গায়ে প্রোটন (H+) এবং ক্যালসিয়াম (Ca2+) বসার জন্য একে অপরের সাথে প্রতিযোগিতা করে [৫]। কোনো ব্যক্তি অতিরিক্ত দ্রুত শ্বাস নিলে রক্তে ক্ষারীয় ভাব (অ্যালকালোসিস) দেখা দেয়; তখন অ্যালবুমিন থেকে হাইড্রোজেন আয়ন খুলে গিয়ে সেই খালি জায়গায় রক্তের সমস্ত মুক্ত ক্যালসিয়াম আটকে যায়। ফলে রক্তে মোট ক্যালসিয়াম স্বাভাবিক থাকা সত্ত্বেও মুক্ত ক্যালসিয়াম হুট করে কমে গিয়ে তীব্র পেশির খিঁচুনি দেখা দেয় [১, ৫]।'
            ),
            l(
              'Conversely, in systemic acidosis, excess circulating protons displace calcium ions from albumin binding sites into the ionized pool, transiently raising ionized calcium [1, 5]. Furthermore, in chronic hypoalbuminemia (as seen in nephrotic syndrome, liver cirrhosis, or critical illness), measured total serum calcium is artifactually depressed because the protein carrier vehicle is diminished, even while ionized calcium remains tightly maintained by the parathyroid axis [1, 5].',
              'বিপরীতে রক্তে অ্যাসিড বাড়লে হাইড্রোজেন আয়ন অ্যালবুমিনে বসে ক্যালসিয়ামকে ধাক্কা দিয়ে রক্তে ছেড়ে দেয়, ফলে মুক্ত ক্যালসিয়াম বেড়ে যায় [১, ৫]। তাছাড়া লিভার সিরোসিস বা কিডনি রোগে অ্যালবুমিন প্রোটিন কমে গেলে সাধারণ রক্ত পরীক্ষায় মোট ক্যালসিয়াম কম দেখায়; অথচ রোগীর প্যারাথাইরয়েড গ্রন্থি মুক্ত ক্যালসিয়ামকে সম্পূর্ণ স্বাভাবিক রাখতে পারে [১, ৫]।'
            ),
            l(
              'Therefore, clinical guidelines mandate measuring whole-blood ionized calcium directly using ion-selective electrodes, or applying mathematical correction formulas whenever total calcium is interpreted in patients with altered serum proteins or systemic acid-base derangements [1, 5]. Misinterpreting uncorrected total calcium frequently leads to catastrophic therapeutic errors [1, 5].',
              'এ কারণে আধুনিক চিকিৎসাবিজ্ঞানে বিশেষ আয়ন-সিলেক্টিভ ইলেক্ট্রোডের মাধ্যমে সরাসরি রক্তে মুক্ত ক্যালসিয়াম মাপার নির্দেশ দেওয়া হয়েছে, অথবা অ্যালবুমিনের মান সমন্বয় করে হিসাব করতে হবে [১, ৫]। এই সতর্কতা অবলম্বন না করলে ভুল চিকিৎসার কারণে রোগীর জীবন বিপন্ন হতে পারে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Transepithelial Calcium Flux: TRPV6, TRPV5 and Calbindin Dynamics', '২. এপিথেলিয়াল ক্যালসিয়াম পরিবহন: TRPV6, TRPV5 ও ক্যালবাইন্ডিনের গতিশীলতা'),
          paragraphs: [
            l(
              'Transepithelial calcium absorption across polarized epithelia occurs through two distinct pathways: a passive, non-saturable paracellular route operating throughout the entire intestine under high dietary calcium concentrations, and a saturable, active transcellular route concentrated in the duodenum and upper jejunum [1]. The active transcellular route is an energetic uphill journey that requires three sequential molecular steps: apical entry, cytosolic buffering, and basolateral extrusion [1].',
              'অন্ত্রের ভেজা কোষের দেয়াল দিয়ে ক্যালসিয়াম দুটি ভিন্ন পথে রক্তে ঢোকে: খাবারে প্রচুর ক্যালসিয়াম থাকলে তা কোষের ফাঁক দিয়ে নিজে নিজেই রক্তে চলে যায় (প্যারাসেলুলার পথ); কিন্তু খাবারে ক্যালসিয়াম কম থাকলে অন্ত্রের ডিওডেনামে বিশেষ শক্তিক্ষয়ী ট্রান্সসেলুলার চ্যানেলের সাহায্যে ক্যালসিয়ামকে জোরপূর্বক টেনে নিতে হয় [১]। এই সক্রিয় পথটি তিনটি সুনির্দিষ্ট ধাপে পরিচালিত হয়: কোষে প্রবেশ, ভেতরে পরিবহন এবং রক্তে পাম্প করা [১]।'
            ),
            l(
              'Apical calcium entry is mediated by Transient Receptor Potential Vanilloid 6 (TRPV6) in duodenal enterocytes and TRPV5 in renal distal convoluted tubules [1]. Because intracellular resting calcium must be maintained at nanomolar concentrations (~100 nM) to prevent cytotoxic apoptosis, entering calcium ions cannot be allowed to diffuse freely through the cytoplasm [1]. Entering Ca2+ is immediately sequestered by Calbindin-D9k, an EF-hand calcium-binding protein that ferries calcium safely across the aqueous cytoplasm toward the basolateral membrane [1].',
              'অন্ত্রে প্রবেশের কাজটি করে TRPV6 চ্যানেল এবং কিডনিতে করে TRPV5 চ্যানেল [১]। কোষের ভেতরে ক্যালসিয়াম মুক্ত অবস্থায় ঘুরে বেড়ালে তা কোষের জন্য প্রাণঘাতী বিষে পরিণত হয় এবং কোষ মারা যায় [১]। তাই দরজায় ঢোকা মাত্রই ক্যালবাইন্ডিন নামক বিশেষ প্রোটিন ক্যালসিয়ামকে শক্তভাবে খাঁচায় বন্দি করে নেয় এবং সাইটোপ্লাজম পার করে কোষের পেছনের দরজায় পৌঁছে দেয় [১]।'
            ),
            l(
              'At the basolateral membrane, calcium must be extruded against a formidable thousand-fold concentration gradient into the interstitial fluid [1]. This energetically demanding exit is executed by the Plasma Membrane Ca2+-ATPase 1b (PMCA1b), a high-affinity P-type ATPase that consumes one molecule of ATP per calcium ion expelled [1]. In parallel, the sodium-calcium exchanger (NCX1) harnesses the inward sodium electrochemical gradient generated by the Na+/K+-ATPase to pump additional calcium out of the cell [1].',
              'পেছনের দরজায় পৌঁছানোর পর ক্যালসিয়ামকে রক্তের প্রচণ্ড ঘনত্বের বিরুদ্ধে ঠেলে বের করতে হয় [১]। এই কঠিন কাজটি সম্পন্ন করে PMCA1b নামক একটি শক্তিশালী এটিপি পাম্প, যা প্রতিটি ক্যালসিয়াম বাইরে ফেলতে একটি করে এটিপি শক্তি খরচ করে [১]। পাশাপাশি NCX1 এক্সচেঞ্জার সোডিয়াম আয়নের ঢোকার শক্তি ব্যবহার করে ক্যালসিয়ামকে বাইরে ছুড়ে দেয় [১]।'
            ),
            l(
              'Calcitriol [1,25(OH)2D] orchestrated by parathyroid hormone acts as the master transcriptional regulator of this entire cassette: its nuclear VDR-RXR heterodimer binds Vitamin D Response Elements (VDRE) in the promoters of TRPV6, TRPV5, Calbindin-D9k, and PMCA1b, synchronizing the entire absorption machinery to maximize dietary recovery [1, 2].',
              'ভিটামিন ডি (ক্যালসিট্রিওল) এই পুরো পরিবহন ব্যবস্থার প্রধান অধিনায়ক হিসেবে কাজ করে: এটি কোষের নিউক্লিয়াসে গিয়ে TRPV6, TRPV5, ক্যালবাইন্ডিন এবং PMCA1b পাম্প তৈরির জিনগুলোকে একসাথে চালু করে দেয়, ফলে অন্ত্র থেকে খাদ্য ক্যালসিয়ামের প্রতিটি ফোঁটা নিখুঁতভাবে শোষিত হয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Phosphate Cotransporters (NaPi-IIa/c) and TRPM6/7 Magnesium Kinases', '৩. ফসফেট কো-ট্রান্সপোর্টার ও TRPM6/7 ম্যাগনেসিয়াম কাইনেজ'),
          paragraphs: [
            l(
              'Renal tubular phosphate reabsorption is governed by electrogenic sodium-phosphate cotransporters located on the apical brush border membrane of the proximal convoluted tubule [1, 3]. Type IIa (NaPi-IIa / SLC34A1) and Type IIc (NaPi-IIc / SLC34A3) cotransporters couple the reabsorption of three and two sodium ions, respectively, to the inward transit of one divalent phosphate ion (HPO4^2-) [3]. Under physiological basal conditions, proximal tubules reabsorb approximately 80–85% of filtered phosphate, maintaining serum phosphorus between 0.8 and 1.5 mmol/L (2.5 to 4.5 mg/dL) [1, 3].',
              'কিডনিতে ফসফেট ধরে রাখার কাজটি সম্পন্ন করে প্রক্সিমাল টিউবুলের ব্রাশ-বর্ডারে থাকা NaPi-IIa ও NaPi-IIc নামক বিশেষ চ্যানেল [১, ৩]। এই চ্যানেলগুলো প্রস্রাব থেকে সোডিয়াম টেনে নেওয়ার শক্তিতে ফসফেটকে রক্তে ফিরিয়ে আনে [৩]। স্বাভাবিক অবস্থায় সুস্থ কিডনি রক্তে ফিল্টার হওয়া প্রায় ৮৫% ফসফেট পুনরায় শোষণ করে রক্তে ফসফেটের স্বাভাবিক মাত্রা বজায় রাখে [১, ৩]।'
            ),
            l(
              'The bone-derived hormone FGF23 and parathyroid hormone (PTH) converge synergistically to suppress proximal phosphate reabsorption [3]. PTH activates apical Type 1 PTH receptors (PTH1R), stimulating protein kinase A (PKA) and protein kinase C (PKC) phosphorylation cascades [3, 5]. Simultaneously, FGF23 engaging FGFR1-Klotho activates the MAPK/ERK pathway [3]. Both cascades converge on the actin cytoskeleton, inducing clathrin-mediated endocytosis of NaPi-IIa and NaPi-IIc cotransporters, routing them into lysosomes for irreversible degradation and producing immediate phosphaturia [3].',
              'হাড়ের FGF23 হরমোন এবং গলার PTH হরমোন যৌথভাবে কাজ করে এই ফসফেট শোষণ কমিয়ে দেয় [৩]। উভয় হরমোন কিডনির কোষে সংকেত পাঠিয়ে ফসফেট চ্যানেলগুলোকে এপিথেলিয়াম থেকে তুলে নিয়ে কোষের লাইসোজোমে ফেলে ধ্বংস করে দেয় [৩]। ফলে চ্যানেল কমে যাওয়ায় ফসফেট আর শোষিত হতে পারে না এবং প্রস্রাবের মাধ্যমে দ্রুত বের হয়ে যায় [৩]।'
            ),
            l(
              'Magnesium handling in the kidney is unique among all ions: while 60% of sodium and calcium are reabsorbed in the proximal tubule, only 15–20% of magnesium is absorbed there [1, 4]. The vast majority (60–70%) of filtered magnesium is reabsorbed passively in the thick ascending limb of Henle’s loop via the paracellular claudin-16/claudin-19 tight junction complex, driven by the lumen-positive transepithelial voltage [4]. Final fine-tuning occurs in the distal convoluted tubule (DCT) via active apical entry through TRPM6 [4].',
              'কিডনিতে ম্যাগনেসিয়াম শোষণের নিয়মটি শরীরের অন্যান্য সমস্ত আয়নের চেয়ে একেবারেই আলাদা: সোডিয়াম বা ক্যালসিয়াম যেখানে টিউবুলের শুরুতে বেশি শোষিত হয়, ম্যাগনেসিয়াম সেখানে মাত্র ১৫% শোষিত হয় [১, ৪]। এর প্রায় ৭০% শোষিত হয় হেনলির লুপের পুরু অংশে বিশেষ ক্লোডিন চ্যানেলের মাধ্যমে কোষের ফাঁক দিয়ে [৪]। আর রক্তের শেষ সূক্ষ্ম সমন্বয়টি ঘটে ডিস্টাল টিউবুলে TRPM6 চ্যানেলের সাহায্যে [৪]।'
            ),
            l(
              'TRPM6 and its ubiquitous homolog TRPM7 are extraordinary bifunctional "chanzymes" that possess an ion channel pore coupled to a functional C-terminal serine/threonine alpha-kinase domain [4]. Intracellular free magnesium and Mg-ATP act as physiological allosteric negative feedback regulators of TRPM6: when intracellular magnesium is replete, the channel pore is inhibited, preventing toxic cellular magnesium loading [4].',
              'TRPM6 এবং TRPM7 হলো জীবজগতের এক বিস্ময়কর চ্যানেল যা একদিকে আয়ন প্রবেশ করতে দেয় এবং অন্যদিকে কাইনেজ এনজাইম হিসেবে কাজ করে [৪]। কোষের ভেতরে ম্যাগনেসিয়াম পর্যাপ্ত থাকলে এটি নিজে থেকেই চ্যানেলের মুখ বন্ধ করে দেয় যাতে অতিরিক্ত ম্যাগনেসিয়াম ঢুকে বিষক্রিয়া সৃষ্টি না করে [৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Molecular Enzymology of Hydroxyapatite Nucleation and Osteolysis', '৪. হাইড্রোক্সিঅ্যাপাটাইট স্ফটিকীকরণ ও অস্থি ভাঙনের এনজাইমোলজি'),
          paragraphs: [
            l(
              'The precipitation of hydroxyapatite in bone osteoid is governed by the critical extracellular balance between mineralization promoters and endogenous physicochemical crystallization inhibitors [1, 2]. Osteoblasts express tissue non-specific alkaline phosphatase (TNAP / ALPL) anchored to the outer leaflet of their plasma membranes [1]. TNAP hydrolyzes extracellular inorganic pyrophosphate (PPi)—a potent crystal poison that coats calcium-phosphate nuclei and halts crystal lattice growth—into two molecules of free inorganic phosphate (Pi) [1].',
              'হাড়ের কোলাজেনের ভেতর হাইড্রোক্সিঅ্যাপাটাইটের শক্ত স্ফটিক তৈরি হওয়া একটি সুনির্দিষ্ট রাসায়নিক যুদ্ধ [১, ২]। অস্টিওব্লাস্ট কোষের পর্দায় TNAP নামক একটি বিশেষ এনজাইম থাকে [১]। রক্তরসে প্রাকৃতিকভাবে থাকা পাইরোফসফেট (PPi) হাড়ে পাথর জমতে বাধা দেয়; TNAP এনজাইম এই পাইরোফসফেটকে ভেঙে ফেলে প্রচুর মুক্ত ফসফেট তৈরি করে এবং স্ফটিকীকরণ শুরু করায় [১]।'
            ),
            l(
              'Concurrently, osteoblasts secrete osteocalcin (Bone Gla Protein), a small 49-amino acid protein containing three gamma-carboxyglutamic acid (Gla) residues synthesized through vitamin K-dependent carboxylation [1, 2]. These dicarboxylic Gla residues coordinate calcium ions with exact spatial orientation, aligning nascent hydroxyapatite crystals along the longitudinal c-axis of adjacent type I collagen fibrils [1]. Without vitamin K-dependent osteocalcin carboxylation, mineral crystals form disordered, fragile clumps rather than resilient biomechanical lattices [1, 2].',
              'একই সাথে অস্টিওব্লাস্ট কোষ অস্টিওক্যালসিন নামক একটি বিশেষ প্রোটিন তৈরি করে যা ভিটামিন কে-এর ওপর নির্ভরশীল [১, ২]। এই প্রোটিনটির বিশেষ খাঁজগুলো ক্যালসিয়ামকে এমন নিখুঁত সারিতে ধরে রাখে যাতে স্ফটিকগুলো কোলাজেন তন্তুর সমান্তরালে সুশৃঙ্খলভাবে গড়ে ওঠে [১]। ভিটামিন কে না থাকলে স্ফটিকগুলো এলোমেলো হয়ে পড়ে এবং হাড় ভঙ্গুর হয়ে যায় [১, ২]।'
            ),
            l(
              'During bone resorption, activated osteoclasts form a tight, annular sealing zone against the bone matrix via alpha-v-beta-3 integrins binding to osteopontin and bone sialoprotein [2, 6]. Within this hemimetabolically isolated compartment (the ruffled border), osteoclasts pump protons through vacuolar-type H+-ATPases, lowering luminal pH to approximately 4.5 [2, 6]. This extreme acidity protonates phosphate groups, rapidly dissolving the mineral hydroxyapatite crystal lattice [2, 6].',
              'হাড় ভাঙার সময় অস্টিওক্ল্যাস্ট কোষ বিশেষ আঠার (ইনটেগ্রিন) সাহায্যে হাড়ের গায়ে একটি বায়ুরোধী সিল তৈরি করে [২, ৬]। এরপর এই ঘেরা অংশের ভেতরে শক্তিশালী পাম্পের সাহায্যে অ্যাসিড ছুড়ে দিয়ে পিএইচ ৪.৫ এ নামিয়ে ফেলে [২, ৬]। এই তীব্র অ্যাসিড মুহূর্তের মধ্যে শক্ত খনিজ স্ফটিককে গলিয়ে রক্তে ক্যালসিয়াম মুক্ত করে দেয় [২, ৬]।'
            ),
            l(
              'Once the mineral phase is dissolved, the exposed organic collagen scaffold is degraded by cathepsin K, a lysosomal cysteine proteinase secreted into the resorption pit that cleaves native triple-helical type I collagen at multiple sites [2, 6]. The resulting degradation fragments—including cross-linked N-telopeptide (NTX) and C-telopeptide (CTX)—are transcytosed across the osteoclast and released into the bloodstream, serving as quantitative clinical biomarkers of active bone resorption [2, 6].',
              'খনিজ গলে যাওয়ার পর অস্টিওক্ল্যাস্ট থেকে ক্ষরিত ক্যাথপসিন কে নামক এনজাইম কোলাজেনের শক্ত দড়িগুলোকে কুচি কুচি করে কেটে ফেলে [২, ৬]। এই কাটা কোলাজেনের টুকরোগুলো (CTX ও NTX) রক্তে প্রবেশ করে; রক্ত বা প্রস্রাবে এই টুকরোগুলো মেপেই চিকিৎসকরা নিশ্চিত হতে পারেন যে রোগীর হাড় কী হারে ক্ষয় হচ্ছে [২, ৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Pathophysiology and Therapeutics of Secondary Hyperparathyroidism', '৫. সেকেন্ডারি হাইপারপ্যারাথাইরয়েডিজমের প্যাথোফিজিওলজি ও আধুনিক চিকিৎসা'),
          paragraphs: [
            l(
              'Secondary hyperparathyroidism (SHPT) in progressive renal failure represents a maladaptive endocrine compensation driven by chronic hyperphosphatemia, hypocalcemia, and systemic calcitriol deficiency [3, 5]. As renal nephron mass declines, failing FGF23 phosphaturia allows circulating phosphate to rise, which directly stabilizes PTH mRNA to drive parathyroid gland hyperplasia [3, 5]. Chronically elevated phosphate also forms insoluble calcium-phosphate complexes in circulation, further depressing ionized calcium [3, 5].',
              'কিডনি ফেইলিউরের রোগীদের সেকেন্ডারি হাইপারপ্যারাথাইরয়েডিজম হলো একটি মারাত্মক জটিলতা যা ফসফেট বৃদ্ধি ও ভিটামিন ডি ঘাটতির কারণে ঘটে [৩, ৫]। কিডনি নষ্ট হতে থাকলে রক্তে ফসফেট হু হু করে বাড়ে, যা প্যারাথাইরয়েড গ্রন্থিকে ফুলে বিশালাকার হতে বাধ্য করে [৩, ৫]। অতিরিক্ত ফসফেট রক্তের ক্যালসিয়ামকে বেঁধে ফেলে মুক্ত ক্যালসিয়াম মারাত্মকভাবে কমিয়ে দেয় [৩, ৫]।'
            ),
            l(
              'In response, parathyroid chief cells undergo progressive diffuse polyclonal, and eventually nodular monoclonal, hyperplasia [5]. Chronically overstimulated parathyroid cells downregulate both their Calcium-Sensing Receptors (CaSR) and Vitamin D Receptors (VDR), rendering the hyperplastic glands increasingly refractory to negative feedback suppression by circulating calcium or calcitriol [3, 5]. PTH levels skyrocket into hundreds or thousands of pg/mL, driving high-turnover uremic bone disease (osteitis fibrosa cystica) [3, 5].',
              'এর ফলে প্যারাথাইরয়েড গ্রন্থির কোষগুলো অনিয়ন্ত্রিতভাবে টিউমারের মতো বৃদ্ধি পেতে থাকে [৫]। এই পরিবর্তিত কোষগুলো থেকে CaSR রিসেপ্টর বিলুপ্ত হয়ে যায়; ফলে রক্তে ক্যালসিয়াম বেশি থাকা সত্ত্বেও গ্রন্থিটি তা আর বুঝতে পারে না এবং স্বায়ত্তশাসিতভাবে PTH হরমোন নিঃসরণ চালিয়ে যায় [৩, ৫]। এই অতিরিক্ত হরমোন রোগীর হাড়কে কুরে কুরে খেয়ে অস্টিওফ্যাইব্রোসিস সিস্টিকা রোগ সৃষ্টি করে [৩, ৫]।'
            ),
            l(
              'Pharmacological management of SHPT has been revolutionized by calcimimetics—positive allosteric modulators of the Calcium-Sensing Receptor (such as cinacalcet and etelcalcetide) [5]. Calcimimetics bind to the transmembrane domain of the CaSR, altering its quaternary conformation to increase receptor affinity for extracellular calcium [5]. This fools the parathyroid chief cell into perceiving normal calcium levels as hypercalcemia, potently suppressing PTH gene transcription and secretion without adding exogenous calcium or phosphate load [5].',
              'এই রোগের চিকিৎসায় ক্যালসিমাইমেটিক্স ওষুধ (যেমন সিনাক্যালসেট) এক বৈপ্লবিক পরিবর্তন এনেছে [৫]। এই ওষুধগুলো CaSR রিসেপ্টরে বসে এর স্পর্শকাতরতা বহুগুণ বাড়িয়ে দেয় [৫]। ফলে প্যারাথাইরয়েড গ্রন্থি স্বাভাবিক ক্যালসিয়ামকেই অতিরিক্ত ক্যালসিয়াম মনে করে সাথে সাথে PTH হরমোন নিঃসরণ নাটকীয়ভাবে কমিয়ে দেয়, কোনো অতিরিক্ত ক্যালসিয়াম বা ফসফেটের ঝুঁকি ছাড়াই [৫]।'
            ),
            l(
              'Concurrently, the development of targeted monoclonal antibodies has transformed metabolic bone therapeutics [2, 6]. Denosumab is a fully human monoclonal antibody directed against RANKL, mimicking endogenous Osteoprotegerin to arrest osteoclastogenesis and reduce fracture risk in postmenopausal osteoporosis [2, 6]. Conversely, Romosozumab binds and neutralizes sclerostin (an osteocyte-derived Wnt pathway inhibitor), uncoupling bone remodeling to simultaneously stimulate osteoblastic bone formation while suppressing bone resorption [2].',
              'একই সাথে আধুনিক মনোক্লোনাল অ্যান্টিবডি হাড়ের চিকিৎসায় বিপ্লব ঘটিয়েছে [২, ৬]। ডেনোসুম্যাব ওষুধটি হুবহু OPG-এর মতো RANKL প্রোটিনকে অকেজো করে হাড়ের ক্ষয় চিরতরে বন্ধ করে দেয় [২, ৬]। আর রোমোসোজুম্যাব নামক ওষুধটি হাড় গঠনের প্রাকৃতিক বাধারোধী প্রোটিনকে সরিয়ে দিয়ে অতি দ্রুত নতুন হাড় তৈরিতে সাহায্য করে [২]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Synthesis: The Integrated Macromineral Network', '৬. প্রাতিষ্ঠানিক সমন্বয়: সমন্বিত ম্যাক্রোমিনারেল নেটওয়ার্ক'),
          paragraphs: [
            l(
              'The physiology of calcium, phosphorus, and magnesium illustrates the elegance of homeostatic negative feedback loops in human biology [1]. Ionized calcium is governed by the CaSR-PTH-calcitriol axis, phosphorus by the osteocyte FGF23-alpha-Klotho-NaPi-II axis, and magnesium by the DCT TRPM6 chanzyme network [1, 3, 4, 5].',
              'ক্যালসিয়াম, ফসফরাস ও ম্যাগনেসিয়ামের শারীরবৃত্ত মানবদেহের ফিডব্যাক লুপের এক অসাধারণ প্রকৌশল [১]। ক্যালসিয়াম নিয়ন্ত্রিত হয় CaSR-PTH-ভিটামিন ডি অক্ষ দ্বারা, ফসফরাস নিয়ন্ত্রিত হয় FGF23-Klotho অক্ষ দ্বারা এবং ম্যাগনেসিয়াম নিয়ন্ত্রিত হয় TRPM6 চ্যানেল দ্বারা [১, ৩, ৪, ৫]।'
            ),
            l(
              'Skeletal bone serves as the central shared reservoir for all three macrominerals, continuously remodeled by osteoclasts and osteoblasts through the RANKL/OPG molecular rheostat [1, 2, 6]. The biomineralized hydroxyapatite lattice provides skeletal strength while functioning as an indispensable buffer to maintain blood ion concentrations within strict survival boundaries [1, 2].',
              'হাড় হলো এই তিন খনিজের প্রধান কেন্দ্রীয় ব্যাংক, যা RANKL ও OPG সংকেতের মাধ্যমে আজীবন ভাঙা ও গড়ার ভেতর দিয়ে চলে [১, ২, ৬]। এর হাইড্রোক্সিঅ্যাপাটাইট স্ফটিক একদিকে কঙ্কালকে সুরক্ষা দেয় এবং অন্যদিকে রক্তের জটিল রাসায়নিক ভারসাম্য রক্ষা করে [১, ২]।'
            ),
            l(
              'Systemic failures of this integrated triad—exemplified by postmenopausal osteoporosis, hypomagnesemic refractory hypocalcemia, and CKD-MBD—demonstrate that no single macromineral can be understood or managed in isolation [1, 3, 4]. Clinical evaluation requires coordinated assessment of ionized calcium, inorganic phosphate, magnesium, PTH, calcitriol, and FGF23 [1, 3, 5].',
              'অস্টিওপোরোসিস, ম্যাগনেসিয়াম ঘাটতির খিঁচুনি কিংবা কিডনি রোগের মারাত্মক হাড় ক্ষয় প্রমাণ করে যে কোনো একটি খনিজকে আলাদাভাবে বিবেচনা করা ভুল [১, ৩, ৪]। সফল চিকিৎসার জন্য ক্যালসিয়াম, ফসফেট, ম্যাগনেসিয়াম, PTH এবং FGF23-এর সমন্বিত ল্যাবরেটরি রিপোর্ট মূল্যায়ন করা অপরিহার্য [১, ৩, ৫]।'
            ),
            l(
              'Translational pharmacology increasingly exploits targeted allosteric modulators, decoy receptors, and crystal dissolution inhibitors, ushering in an era of precision mineral endocrinology that safeguards skeletal durability while preventing catastrophic soft-tissue calcification [2, 5, 6].',
              'আধুনিক চিকিৎসাবিজ্ঞানে বিশেষ রিসেপ্টর মডুলেটর এবং মনোক্লোনাল অ্যান্টিবডি প্রয়োগের মাধ্যমে একদিকে হাড়কে শক্ত রাখা এবং অন্যদিকে রক্তনালী ও হার্টে পাথর জমা রোধ করার এক নতুন অধ্যায় সূচিত হয়েছে [২, ৫, ৬]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উচ্চতর / গবেষণা স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. Biophysical Crystallography and Cryo-EM Structure of CaSR', '১. CaSR রিসেপ্টরের ক্রায়ো-ইলেক্ট্রন মাইক্রোস্কোপি ও স্ফটিক গঠন'),
          paragraphs: [
            l(
              'High-resolution cryo-electron microscopy of the human Calcium-Sensing Receptor (CaSR) has resolved the homodimeric architecture of this Class C G-protein coupled receptor in both resting and active conformations [5]. Each monomer possesses a massive extracellular Venus Flytrap (VFT) domain connected via a cysteine-rich domain (CRD) to a canonical seven-transmembrane (7TM) helical bundle [5]. Cryo-EM reveals multiple cooperative calcium-binding sites clustered within the intermonomer cleft and the VFT lobe interface [5].',
              'ক্রায়ো-ইলেক্ট্রন মাইক্রোস্কোপি গবেষণায় মানবদেহের CaSR রিসেপ্টরের অত্যন্ত নিখুঁত ত্রিমাত্রিক আণবিক গঠন উন্মোচিত হয়েছে [৫]। এর প্রতিটি ইউনিটে বিশাল ভেনাস ফ্লাইট্র্যাপ (VFT) ডোমেন থাকে যা সাতটি মেমব্রেন স্প্যানিং হেলিক্সের সাথে যুক্ত [৫]। একাধিক ক্যালসিয়াম আয়ন যখন এই ডোমেনগুলোর ফাঁকে এসে বসে, তখন পুরো রিসেপ্টরটি নাটকীয়ভাবে নিজের জ্যামিতিক নকশা পরিবর্তন করে [৫]।'
            ),
            l(
              'Upon binding multiple Ca2+ ions, the two VFT lobes close and rotate relative to each other, bringing the two CRDs into close proximity and forcing a dramatic pivot of the transmembrane domains that brings TM6 and TM7 into contact [5]. This conformational transition relieves basal inhibitory restraints and catalytically couples to heterotrimeric Gq/11 and Gi/o proteins, stimulating phospholipase C-beta (PLC-beta) to generate inositol 1,4,5-trisphosphate (IP3) and diacylglycerol (DAG) [5].',
              'ক্যালসিয়াম বসার সাথে সাথে রিসেপ্টরের দুই পাশ একসাথে চেপে বন্ধ হয়ে যায় এবং কোষের ভেতরের অংশে Gq/11 ও Gi প্রোটিনকে সক্রিয় করে [৫]। এর ফলে কোষে ফসফোলাইপেজ সি (PLC) সক্রিয় হয়ে IP3 ও ডাইঅ্যাসাইলগ্লিসারল তৈরি করে [৫]।'
            ),
            l(
              'A profound paradox of parathyroid endocrinology is that while elevated cytoplasmic calcium triggers exocytosis in virtually all neuroendocrine cells (such as chromaffin cells and pancreatic beta cells), in parathyroid chief cells it robustly suppresses PTH exocytosis [5]. This unique inverted stimulus-secretion coupling is mediated by calcium-activated protein kinase C (PKC) isoforms and the Gi-mediated inhibition of adenylate cyclase, which depletes cyclic AMP (cAMP)—the obligate permissive second messenger required for PTH storage granule fusion [5].',
              'প্যারাথাইরয়েড বিজ্ঞানের সবচেয়ে চমকপ্রদ প্যারাডক্স হলো: অন্যান্য কোষে ক্যালসিয়াম বাড়লে হরমোন নিঃসরণ বাড়ে, কিন্তু প্যারাথাইরয়েড কোষে ক্যালসিয়াম বাড়লে PTH হরমোন নিঃসরণ সম্পূর্ণ বন্ধ হয়ে যায় [৫]। কারণ ক্যালসিয়াম এখানে adenylate cyclase এনজাইম বন্ধ করে cAMP শক্তি কমিয়ে দেয়, যা ছাড়া হরমোনের ভেসিকল ফাটতে পারে না [৫]।'
            ),
            l(
              'Loss-of-function missense mutations in the CASR gene cause Familial Hypocalciuric Hypercalcemia (FHH Type 1), an autosomal dominant condition where parathyroid and renal cells require supraphysiological calcium concentrations to trigger CaSR signaling, resulting in lifelong asymptomatic hypercalcemia with inappropriately low urinary calcium clearance [5]. Conversely, gain-of-function CASR mutations produce Autosomal Dominant Hypocalcemia (ADH), where parathyroid cells hyper-suppress PTH even in profound hypocalcemia [5].',
              'CaSR জিনের মিউটেশনের কারণে FHH নামক বংশগত রোগ হয়, যাতে রিসেপ্টর ভোঁতা হয়ে রক্তে মারাত্মক ক্যালসিয়াম বাড়লেও তা বুঝতে পারে না; ফলে আজীবন রক্তে উচ্চ ক্যালসিয়াম থাকে [৫]। বিপরীতে রিসেপ্টর অতিরিক্ত সংবেদনশীল হলে সামান্য ক্যালসিয়ামেই PTH বন্ধ হয়ে গিয়ে বিপজ্জনক খিঁচুনির রোগ (ADH) সৃষ্টি করে [৫]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Structural Biology of Klotho-FGF23 Complexes and Phosphatonins', '২. ক্লোথো-FGF23 কমপ্লেক্সের আণবিক গঠন ও ফসফাটোনিন জীববিদ্যা'),
          paragraphs: [
            l(
              'Fibroblast Growth Factor 23 (FGF23) belongs to the endocrine FGF subfamily (alongside FGF19 and FGF21), which lack the heparin-binding affinity characteristic of classical paracrine FGFs, allowing them to escape the extracellular matrix and function as systemic hormones [3]. The biophysical basis of FGF23 target-organ specificity was solved by crystallographic determination of the ternary FGF23–FGFR1c–alpha-Klotho signaling complex [3].',
              'FGF23 হলো একটি বিশেষ এন্ডোক্রাইন হরমোন যা অন্যান্য সাধারণ গ্রোথ ফ্যাক্টরের মতো স্থানীয় কোষে আটকে না থেকে রক্তে মুক্তভাবে সারা দেহে ছড়িয়ে পড়তে পারে [৩]। ক্রিস্টালোগ্রাফির মাধ্যমে FGF23, FGFR1c রিসেপ্টর এবং আলফা-ক্লোথো প্রোটিনের যৌথ ত্রিমাত্রিক কমপ্লেক্সের রহস্য উদঘাটিত হয়েছে [৩]।'
            ),
            l(
              'Alpha-Klotho is a single-pass transmembrane protein whose extracellular portion consists of two internal tandem repeats (KL1 and KL2) with homology to family 1 glycosidases [3]. Klotho acts as a non-enzymatic molecular scaffold: its KL1 and KL2 domains form a bipartite binding pocket that grabs both FGFR1c and the C-terminal tail of FGF23 simultaneously [3]. Without Klotho, FGF23 binds FGFR1c with negligible affinity; Klotho creates the high-affinity receptor complex that permits nanomolar endocrine signaling [3].',
              'আলফা-ক্লোথো হলো একটি বিশেষ ট্রান্সমেমব্রেন প্রোটিন যার বাইরের অংশটি একটি আণবিক খাঁচা তৈরি করে [৩]। এই খাঁচাটি একই সাথে FGFR1c রিসেপ্টর এবং FGF23 হরমোনকে শক্তভাবে ধরে রাখে [৩]। ক্লোথো প্রোটিন না থাকলে FGF23 রিসেপ্টরের সাথে যুক্ত হতে সম্পূর্ণ ব্যর্থ হয়; অর্থাৎ ক্লোথো হলো সেই অপরিহার্য চাবিকাঠি যা হরমোনটিকে কাজ করার ক্ষমতা দেয় [৩]।'
            ),
            l(
              'Intracellular cleavage of FGF23 at its conserved 176RXXR179 motif by the proprotein convertase furin inactivates the hormone, generating inactive N- and C-terminal fragments [3]. This cleavage is competitively blocked by the polypeptide N-acetylgalactosaminyltransferase 3 (GALNT3), which O-glycosylates Thr178, and promoted by the kinase FAM20C, which phosphorylates Ser180 [3]. Mutations in GALNT3 cause familial tumoral calcinosis, where uninhibited intact FGF23 cannot be degraded, driving hyperphosphatemia and massive periarticular calcific tumors [3].',
              'কোষের ভেতরে ফিউরিন নামক এনজাইম অতিরিক্ত FGF23 হরমোনকে কেটে টুকরো করে নিষ্ক্রিয় করে দেয় [৩]। এই কাটার প্রক্রিয়াটি GALNT3 এনজাইম দ্বারা নিয়ন্ত্রিত হয় [৩]। GALNT3 জিনে ত্রুটি থাকলে হরমোনটি কাটতে পারে না; ফলে রক্তে ফসফেট অস্বাভাবিকভাবে বেড়ে গিয়ে অস্থিসন্ধির চারপাশে বিশাল বিশাল পাথরের টিউমার তৈরি হয় [৩]।'
            ),
            l(
              'Ectodomain shedding of transmembrane Klotho by secretases (ADAM10 and ADAM17) releases soluble Klotho (sKlotho) into the systemic circulation and cerebrospinal fluid [3]. Soluble Klotho acts as an endocrine anti-aging hormone that suppresses oxidative stress, inhibits insulin/IGF-1 signaling, and modulates cardiac ion channels, explaining why Klotho-deficient mice exhibit rapid premature aging and arterial calcification [3].',
              'কিডনির কোষ থেকে ক্লোথো প্রোটিনের বাইরের অংশটি কেটে রক্তে ভেসে চলে, যাকে সলিউবল ক্লোথো (sKlotho) বলা হয় [৩]। এটি শরীরের বার্ধক্য প্রতিরোধী হরমোন হিসেবে কাজ করে কোষের জারণ রোধ করে [৩]। ইঁদুরের শরীর থেকে ক্লোথো জিন ফেলে দিলে তারা মাত্র কয়েক সপ্তাহের মধ্যে বার্ধক্যে আক্রান্ত হয়ে রক্তনালীতে পাথর জমে মারা যায় [৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Calcium/Calmodulin Kinases and Magnesium Ion Permeation Kinetics', '৩. ক্যালসিয়াম-ক্যালমোডুলিন কাইনেজ ও ম্যাগনেসিয়াম আয়ন পরিবহনের গতিবিদ্যা'),
          paragraphs: [
            l(
              'Magnesium (Mg2+) possesses the smallest ionic radius of all biologically relevant divalent cations (0.72 Å compared to 1.00 Å for Ca2+), but exhibits the largest hydrated radius (4.28 Å) due to its immense charge density [4]. Because the hydration enthalpy of magnesium is extraordinarily high (approximately -1,920 kJ/mol, five-fold greater than Ca2+), removing water molecules from an aqueous magnesium ion to pass through a narrow channel pore requires enormous activation energy [4].',
              'ম্যাগনেসিয়াম আয়নটির ভেতরের পরমাণুটি ছোট হলেও বাইরে পানির অণু এত শক্তভাবে ধরে রাখে যে এর চারপাশের জলীয় স্তরটি অনেক বড় ও ভারী হয় [৪]। পানির এই বন্ধন ভাঙতে প্রচুর শক্তির প্রয়োজন হয়, যা ক্যালসিয়ামের চেয়ে পাঁচ গুণ বেশি [৪]। ফলে সাধারণ কোনো আয়ন চ্যানেল দিয়ে ম্যাগনেসিয়াম সহজে প্রবেশ করতে পারে না [৪]।'
            ),
            l(
              'TRPM6 and TRPM7 have evolved specialized selectivity filters constructed from a conserved pentapeptide sequence (568GEQTD572) within the pore loop [4]. Aspartate and glutamate carboxylate oxygens within the pore coordinate entering Mg2+ ions in a partially dehydrated state, allowing rapid single-file permeation while maintaining strict discrimination against monovalent cations in the presence of divalent ions [4].',
              'এ বাধা অতিক্রম করতে TRPM6 চ্যানেলের মুখে একটি বিশেষ অ্যাসিডিক খাঁজ তৈরি হয়েছে [৪]। এই খাঁজের ঋণাত্মক অক্সিজেন পরমাণুগুলো ম্যাগনেসিয়ামের পানির খোলসটি খুলে ফেলে একে নগ্ন অবস্থায় অতি দ্রুত কোষের ভেতর দিয়ে টেনে নেয়, যা অন্যান্য আয়ন থেকে একে সম্পূর্ণ পৃথক করে [৪]।'
            ),
            l(
              'The C-terminal alpha-kinase domain of TRPM6 and TRPM7 represents an atypical serine/threonine protein kinase that phosphorylates downstream substrates on myosin II heavy chains and cytoplasmic scaffold proteins [4]. Autophosphorylation of the kinase domain regulates channel gating kinetics and sensitivity to intracellular nucleotide and magnesium concentrations, directly coupling the cell’s energetic ATP status to divalent mineral influx [4].',
              'TRPM6 চ্যানেলের পেছনে একটি বিশেষ কাইনেজ এনজাইমের লেজ থাকে যা কোষের মায়োসিন প্রোটিনে ফসফেট লাগাতে পারে [৪]। কোষের ভেতরে ATP বা ম্যাগনেসিয়াম কমে গেলে এই কাইনেজটি চ্যানেলের গেট আরও চওড়া করে খুলে দেয়, ফলে কোষে শক্তি কমার সাথে সাথে ম্যাগনেসিয়াম প্রবেশ ত্বরান্বিত হয় [৪]।'
            ),
            l(
              'Dietary magnesium deficiency downregulates renal TRPM6 channel expression via cellular stress pathways, creating a vicious cycle of persistent urinary magnesium wasting [4]. Restoring magnesium balance requires sustained oral repletion with chelated organic salts (such as magnesium glycinate or malate) that utilize paracellular pathways and peptide transport mechanisms to bypass saturated TRPM6 channels [1, 4].',
              'খাবারে ম্যাগনেসিয়াম কম থাকলে কিডনির TRPM6 চ্যানেলগুলোর সংখ্যাও কমে যায়, যার ফলে প্রস্রাবের সাথে ম্যাগনেসিয়াম বের হয়ে ঘাটতি আরও মারাত্মক হয় [৪]। তাই চিকিৎসার জন্য সাধারণ অজৈব লবণের বদলে বিশেষ অর্গানিক ম্যাগনেসিয়াম চিলেট ওষুধ দিতে হয় যা কোষের ফাঁক দিয়ে সহজে রক্তে প্রবেশ করতে পারে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Wnt/beta-Catenin Signaling, Sclerostin & Mechanotransduction', '৪. Wnt/বিটা-ক্যাটেনিন সংকেত, স্ক্লেরোস্টিন ও বোন মেকানো-ট্রান্সডাকশন'),
          paragraphs: [
            l(
              'Osteocyte mechanotransduction is the physiological process that converts physical exercise and mechanical strain into biochemical signals that build bone mass, formalized by Frost’s classic Mechanostat theory [1, 2]. Osteocytes embedded within mineralized bone fluid lacunae sense fluid shear stress through their expansive dendritic canalicular network via primary cilia, integrin attachments, and piezoelectric streaming potentials [2].',
              'হাড়ের ওপর ব্যায়াম ও শারীরিক পরিশ্রমের চাপ কীভাবে নতুন হাড় তৈরিতে রূপান্তরিত হয় তা ফ্রস্টের মেকানোস্ট্যাট তত্ত্ব দ্বারা ব্যাখ্যা করা হয় [১, ২]। হাড়ের শক্ত পাথরের ভেতর বন্দি অস্টিওসাইট কোষগুলো তাদের শত শত সূক্ষ্ম অ্যান্টেনার সাহায্যে তরলের প্রবাহ ও চাপ অনুভব করে [২]।'
            ),
            l(
              'Mechanical loading immediately downregulates the osteocyte secretion of Sclerostin (encoded by the SOST gene), a secreted glycoprotein that functions as a potent antagonist of the canonical Wnt/beta-catenin bone-forming pathway [2]. Sclerostin normally binds to the Wnt coreceptors LRP5 and LRP6, preventing Wnt ligands from assembling the Frizzled-LRP5/6 complex and blocking beta-catenin nuclear translocation [2]. When sclerostin falls, Wnt signaling is unleashed, driving osteoblast proliferation, differentiation, and osteoid synthesis [2].',
              'হাড়ের ওপর চাপ পড়া মাত্রই অস্টিওসাইট কোষ স্ক্লেরোস্টিন নামক বাধা প্রদানকারী প্রোটিন তৈরি বন্ধ করে দেয় [২]। স্বাভাবিক অবস্থায় স্ক্লেরোস্টিন LRP5/6 রিসেপ্টরকে আটকে রেখে হাড় গঠন থামিয়ে রাখে [২]। ব্যায়ামের ফলে স্ক্লেরোস্টিন সরে গেলেই Wnt সিগন্যাল চালু হয়ে যায় এবং অস্টিওব্লাস্ট কোষগুলো পাগলের মতো নতুন হাড় তৈরি শুরু করে [২]।'
            ),
            l(
              'Inactivating loss-of-function mutations in the SOST gene or its regulatory enhancers cause Sclerosteosis and van Buchem disease, genetic conditions characterized by lifelong, uninhibited bone overgrowth leading to massive skeletal thickening, cranial nerve entrapment, and facial gigantism, but remarkably fracture-proof bones [2].',
              'বংশগত ত্রুটির কারণে SOST জিন নষ্ট থাকলে স্ক্লেরোস্টিওসিস রোগ হয় [২]। এদের শরীরে হাড় গড়ার কোনো বাধা থাকে না, ফলে মাথার খুলি ও কঙ্কালের হাড় অস্বাভাবিক মোটা ও ভারী হয়ে যায়; তবে এদের হাড় কখনো ভাঙে না [২]।'
            ),
            l(
              'Translational development of Romosozumab, a humanized monoclonal antibody directed against sclerostin, has achieved unprecedented therapeutic success in severe osteoporosis [2]. By neutralizing sclerostin, Romosozumab achieves a dual therapeutic effect: it robustly stimulates osteoblastic bone formation while simultaneously suppressing osteoclastic bone resorption, increasing spine bone mineral density by over 13% in 12 months [2].',
              'এই মেকানিজম কাজে লাগিয়ে রোমোসোজুম্যাব নামক মনোক্লোনাল অ্যান্টিবডি তৈরি করা হয়েছে [২]। এই ওষুধটি স্ক্লেরোস্টিনকে নিষ্ক্রিয় করে দিয়ে একই সাথে হাড় ভাঙা বন্ধ করে এবং নতুন হাড় তৈরির গতি বহুগুণ বাড়িয়ে দেয়, ফলে মাত্র এক বছরে অস্টিওপোরোসিসের রোগীদের হাড়ের ঘনত্ব ১৩% এর বেশি বৃদ্ধি পায় [২]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Vascular Smooth Muscle Transdifferentiation in CKD-MBD', '৫. কিডনি রোগে রক্তনালীর মসৃণ পেশির রূপান্তর ও খনিজায়ন'),
          paragraphs: [
            l(
              'In advanced Chronic Kidney Disease, vascular calcification is not a passive thermodynamic precipitation, but an active, cell-mediated reprogramming process wherein vascular smooth muscle cells (VSMCs) undergo phenotypic transdifferentiation into osteoblast-like cells [3]. High ambient phosphate and calcium enter VSMCs via the Pit-1 (SLC20A1) sodium-dependent phosphate cotransporter [3].',
              'কিডনি ফেইলিউরের রোগীদের রক্তনালীতে ক্যালসিয়াম জমা কোনো সাধারণ রাসায়নিক তলানি নয়; এটি রক্তনালীর পেশিকোষের এক বিপজ্জনক জেনেটিক রূপান্তর [৩]। রক্তে অতিরিক্ত ফসফেট ও ক্যালসিয়াম জমলে রক্তনালীর মসৃণ পেশিকোষগুলো নিজেদের রূপ পরিবর্তন করে হাড়ের অস্টিওব্লাস্ট কোষে পরিণত হয় [৩]।'
            ),
            l(
              'Intracellular phosphate accumulation upregulates master osteogenic transcription factors, including Runt-related transcription factor 2 (Runx2 / Cbfa1) and Osterix (SP7), while silencing smooth muscle-specific contractile markers (SM alpha-actin and SM22-alpha) [3]. The reprogrammed VSMCs begin actively synthesizing and secreting osteoid proteins, alkaline phosphatase, and matrix vesicles that nucleate hydroxyapatite crystals within the arterial tunica media (Mönckeberg medial sclerosis) [3].',
              'কোষের ভেতরে ফসফেট বেড়ে গেলেই Runx2 নামক হাড় তৈরির মাস্টার জিন সক্রিয় হয়ে ওঠে এবং পেশিকোষের স্বাভাবিক জিনগুলো বন্ধ হয়ে যায় [৩]। রূপান্তরিত পেশিকোষগুলো তখন ধমনীর দেয়ালের ভেতরে কোলাজেন ও অ্যালকালাইন ফসফাটেজ তৈরি করে খাঁটি হাড়ের মতো শক্ত পাথর বানিয়ে ফেলে [৩]।'
            ),
            l(
              'Vascular calcification dramatically increases arterial pulse wave velocity, producing refractory systolic hypertension, loss of coronary perfusion during diastole, and massive left ventricular hypertrophy [3]. Simultaneously, circulating calciprotein particles (CPPs)—amorphous calcium-phosphate nanocrystals stabilized by fetuin-A—aggregate into crystalline secondary CPPs that trigger endothelial cytotoxicity and widespread chronic vascular inflammation [3].',
              'ধমনীর প্রাচীর শক্ত পাথরের মতো হয়ে যাওয়ায় রক্তচাপ মারাত্মক বেড়ে যায় এবং হার্টের রক্ত সঞ্চালন বাধাগ্রস্ত হয়ে হার্ট ফেইলিউর দেখা দেয় [৩]। তাছাড়া রক্তরসে ক্যালসিপ্রোটিন কণাগুলো দলা পাকিয়ে রক্তনালীর ভেতরের দেয়াল কেটে ছিঁড়ে ফেলে এবং সারা শরীরে তীব্র প্রদাহ ছড়িয়ে দেয় [৩]।'
            ),
            l(
              'Therapeutic prevention of medial calcification demands aggressive reduction of intestinal phosphate absorption via non-calcium binders, restriction of dietary inorganic phosphate additives, maintenance of physiological magnesium (which acts as a potent inhibitor of calcium-phosphate crystal nucleation), and future therapies targeting the Pit-1 transporter or pyrophosphate degradation [1, 3, 4].',
              'এই মারাত্মক ক্ষতি ঠেকাতে খাবারে প্রক্রিয়াজাত ফসফেট কঠোরভাবে বন্ধ করতে হবে, ক্যালসিয়ামহীন ফসফেট বাইন্ডার ওষুধ দিতে হবে এবং রক্তে ম্যাগনেসিয়ামের সঠিক মাত্রা বজায় রাখতে হবে কারণ ম্যাগনেসিয়াম রক্তনালীতে ক্যালসিয়াম স্ফটিক জমতে বাধা দেয় [১, ৩, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Frontiers: Nanoscale Biomineralics & Precision Therapeutics', '৬. অনুবাদমূলক গবেষণা: ন্যানোস্কেল বায়ো-মিনারেল ও আধুনিক থেরাপিউটিক্স'),
          paragraphs: [
            l(
              'Frontiers in bone nanotechnology have revealed that biological hydroxyapatite is not a stoichiometric geological mineral, but a carbonated, calcium-deficient nanocrystalline lattice containing abundant magnesium, sodium, potassium, and carbonate substitutions [1, 2]. These lattice imperfections confer higher solubility and dynamic exchangeability, allowing bone to function as a responsive, real-time chemical sponge for systemic electrolyte buffering [1, 2].',
              'ন্যানোটেকনোলজির আধুনিক গবেষণায় দেখা গেছে হাড়ের ভেতরের হাইড্রোক্সিঅ্যাপাটাইট স্ফটিকগুলো কোনো সাধারণ পাথর নয়; এর মধ্যে প্রচুর ম্যাগনেসিয়াম, সোডিয়াম ও কার্বনেট মিশ্রিত থাকে [১, ২]। এই অসম্পূর্ণ জ্যামিতিক নকশার কারণেই হাড় অত্যন্ত দ্রুত রক্ত থেকে আয়ন টেনে নিতে বা রক্তে আয়ন ছেড়ে দিয়ে পিএইচ নিয়ন্ত্রণ করতে পারে [১, ২]।'
            ),
            l(
              'Synthetic engineered nanoparticles designed to mimic the disordered amorphous calcium phosphate (ACP) precursor phase are revolutionizing regenerative dentistry and orthopedic surgery, promoting rapid osseointegration and remineralizing microscopic osteoporotic microdamage before fractures can propagate [1, 2].',
              'দাঁত ও অর্থোপেডিক সার্জারিতে এখন কৃত্রিম ন্যানো-পার্টিকেল ব্যবহার করে হাড়ের মাইক্রোস্কোপিক ফাটলগুলো নিজে থেকেই জোড়া লাগানোর ওষুধ ও জেল তৈরি করা হচ্ছে, যা রোগীদের পঙ্গুত্ব রোধ করছে [১, ২]।'
            ),
            l(
              'In mineral pharmacology, oral phosphate transport inhibitors that target the intestinal sodium-phosphate cotransporter NaPi-IIb (such as tenapanor, an NHE3 inhibitor that modulates tight junction phosphate permeability) offer new mechanisms to manage hyperphosphatemia in kidney disease without ingesting massive tablet burdens of traditional binders [3].',
              'কিডনি চিকিৎসায় এখন টেনাপানর নামক আধুনিক ওষুধ ব্যবহৃত হচ্ছে যা অন্ত্রের দেয়ালের ফাঁক দিয়ে ফসফেট শোষণ বন্ধ করে দেয়, ফলে রোগীকে আর মুঠো মুঠো ফসফেট বাইন্ডার ট্যাবলেট গিলতে হয় না [৩]।'
            ),
            l(
              'In conclusion, the multidisciplinary mastery of macromineral biophysics, osteocyte endocrinology, and bone matrix remodeling empowers clinicians and nutritionists to preserve skeletal architecture, optimize athletic performance, and eradicate debilitating mineral disorders across human life [1, 2, 3, 4, 5, 6].',
              'উপসংহারে, ম্যাক্রোমিনারেল বায়োফিজিক্স, অস্টিওসাইট হরমোন বিজ্ঞান এবং অস্থি পুনর্গঠনের গভীর জ্ঞান অর্জন পুষ্টিবিদ ও চিকিৎসকদের আজীবন মজবুত হাড় গঠন এবং জটিল বিপাকীয় রোগ নিরাময়ে এক অনন্য দক্ষতা দান করে [১, ২, ৩, ৪, ৫, ৬]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Flowchart tracing calcium, phosphate, and magnesium homeostasis across four body systems: parathyroid sensing via CaSR, intestinal absorption through TRPV6 and TRPM6, renal reabsorption via TRPV5 and NaPi-IIa, and bone remodeling governed by osteoblast-osteoclast RANKL/OPG coupling.',
      'চারটি প্রধান শারীরবৃত্তীয় সিস্টেমে ক্যালসিয়াম, ফসফেট ও ম্যাগনেসিয়াম ভারসাম্যের প্রবাহচিত্র: CaSR রিসেপ্টর দ্বারা প্যারাথাইরয়েড সংবেদন, TRPV6 ও TRPM6 দ্বারা অন্ত্রে শোষণ, TRPV5 ও NaPi-IIa দ্বারা কিডনিতে পুনঃশোষণ এবং RANKL/OPG কাপলিং দ্বারা হাড় পুনর্গঠন।'
    ),
    steps: [
      l(
        'Step 1: Parathyroid Calcium-Sensing Receptors (CaSR) detect falling blood ionized calcium, relieving Gq inhibition to unleash parathyroid hormone (PTH) exocytosis into circulation.',
        'ধাপ ১: প্যারাথাইরয়েডের CaSR রিসেপ্টর রক্তে ক্যালসিয়াম হ্রাস শনাক্ত করে এবং সাথে সাথে প্যারাথাইরয়েড হরমোন (PTH) ক্ষরণ করায়।'
      ),
      l(
        'Step 2: Circulating PTH stimulates renal tubular calcium reabsorption and activates CYP27B1 (1-alpha-hydroxylase) to generate bioactive calcitriol [1,25(OH)2D].',
        'ধাপ ২: PTH কিডনি থেকে ক্যালসিয়াম অপচয় রোধ করে এবং ভিটামিন ডি-কে সক্রিয় ক্যালসিট্রিওলে পরিণত করে।'
      ),
      l(
        'Step 3: Calcitriol translocates to enterocytes, upregulating apical TRPV6 and TRPM6 channels, cytosolic calbindin-D9k shuttles, and basolateral PMCA1b extrusion pumps to maximize mineral absorption.',
        'ধাপ ৩: ক্যালসিট্রিওল অন্ত্রে গিয়ে TRPV6 ও TRPM6 চ্যানেল এবং ক্যালবাইন্ডিন প্রোটিন বাড়িয়ে খাদ্য থেকে ক্যালসিয়াম ও ম্যাগনেসিয়াম শোষণ সর্বোচ্চ করে।'
      ),
      l(
        'Step 4: Osteocytes and osteoblasts coordinate bone remodeling units via RANKL/OPG coupling, while osteocyte-derived FGF23 and alpha-Klotho clear excess phosphate to preserve mineral solubility.',
        'ধাপ ৪: অস্থিকোষ RANKL ও OPG সংকেতের মাধ্যমে হাড় গঠন ও ক্ষয় নিয়ন্ত্রণ করে এবং FGF23 হরমোন কিডনি দিয়ে বাড়তি ফসফেট বের করে দিয়ে রক্তনালীকে সুরক্ষিত রাখে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 62-year-old postmenopausal woman with severe osteoporosis undergoes dual-energy X-ray absorptiometry (DEXA), revealing a lumbar spine T-score of -3.4. Her physician prescribes Denosumab (a subcutaneous monoclonal antibody administered every 6 months). What is the exact molecular mechanism of action of Denosumab, and what physiological risk requires co-supplementation with calcium and vitamin D?',
      'তীব্র অস্টিওপোরোসিসে আক্রান্ত ৬২ বছর বয়সী এক মহিলার হাড়ের স্ক্যানে (DEXA) লাম্বার স্পাইনের টি-স্কোর পাওয়া গেল -৩.৪। ডাক্তার তাকে প্রতি ৬ মাস অন্তর ডেনোসুম্যাব ইনজেকশন দিলেন। ডেনোসুম্যাব ওষুধের সঠিক আণবিক কার্যপদ্ধতি কী এবং এর সাথে কেন অবশ্যই ক্যালসিয়াম ও ভিটামিন ডি খেতে হবে?'
    ),
    options: [
      l(
        'Denosumab is a fully human monoclonal antibody that binds and neutralizes RANKL with high affinity, mimicking endogenous Osteoprotegerin (OPG) to halt osteoclast differentiation and bone resorption; because bone resorption is abruptly arrested while bone mineralization continues, patients are at high risk for acute severe hypocalcemia unless co-supplemented with calcium and vitamin D.',
        'ডেনোসুম্যাব সরাসরি RANKL প্রোটিনকে নিষ্ক্রিয় করে হুবহু OPG-এর মতো হাড় ক্ষয়কারী অস্টিওক্ল্যাস্ট কোষ তৈরি পুরোপুরি বন্ধ করে দেয়; হাড় ভাঙা হঠাৎ থেমে যাওয়ায় রক্ত থেকে ক্যালসিয়াম হাড়ে টানতে থাকে, ফলে অতিরিক্ত ক্যালসিয়াম ও ভিটামিন ডি না খেলে রক্তে বিপজ্জনক ক্যালসিয়াম ঘাটতি (হাইপোক্যালসেমিয়া) হতে পারে।'
      ),
      l(
        'Denosumab directly stimulates parathyroid CaSR G-proteins, accelerating PTH release and dissolving soft-tissue calcification.',
        'ডেনোসুম্যাব প্যারাথাইরয়েড গ্রন্থিকে উত্তেজিত করে প্রচুর PTH হরমোন তৈরি করায়।'
      ),
      l(
        'Denosumab binds to enterocyte SGLT1 cotransporters, preventing sodium excretion and causing hypercalcemic alkalosis.',
        'ডেনোসুম্যাব অন্ত্রের গ্লুকোজ চ্যানেল বন্ধ করে রক্তে ক্যালসিয়াম বাড়িয়ে দেয়।'
      ),
      l(
        'Denosumab hydrolyzes pyrophosphate into phosphate, promoting non-enzymatic bone crystal dissolution.',
        'ডেনোসুম্যাব পাইরোফসফেট ভেঙে হাড়ের স্ফটিক গলিয়ে ফেলে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Denosumab is a fully human IgG2 monoclonal antibody with high sub-nanomolar affinity for human RANKL. By binding and neutralizing RANKL, it prevents RANKL from engaging its cognate RANK receptor on osteoclast precursor cells, shutting down TRAF6, NF-kappa B, and NFATc1 signaling, completely arresting osteoclast formation, function, and survival. Because osteoclastic bone resorption ceases almost immediately while ongoing osteoid mineralization continues to draw calcium from circulation, patients can develop severe symptomatic hypocalcemia if preexisting vitamin D deficiency or inadequate dietary calcium intake is not corrected before initiation.',
      'ডেনোসুম্যাব হলো একটি মনোক্লোনাল অ্যান্টিবডি যা RANKL প্রোটিনকে আটকে রেখে অস্টিওক্ল্যাস্ট কোষ তৈরি চিরতরে বন্ধ করে দেয়। ফলে হাড় ভাঙা এক নিমেষে বন্ধ হয়ে যায়। কিন্তু নতুন হাড় তৈরি হতে থাকায় রক্ত থেকে প্রচুর ক্যালসিয়াম হাড়ে ঢুকতে থাকে; রোগীকে যদি আগে থেকে ভিটামিন ডি ও ক্যালসিয়াম দিয়ে প্রস্তুত না করা হয়, তবে রক্তের ক্যালসিয়াম বিপজ্জনকভাবে কমে গিয়ে রোগীর হাত-পায়ে খিঁচুনি ও প্যারালাইসিস হতে পারে।'
    ),
  },
}
