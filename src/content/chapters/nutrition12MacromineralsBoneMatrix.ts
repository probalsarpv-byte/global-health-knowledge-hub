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
]

export const nutrition12MacromineralsBoneMatrixLesson: LessonTopic = {
  id: 'topic.nutrition.macrominerals-bone-calcium-magnesium',
  slug: 'macrominerals-bone-calcium-magnesium',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '12 · Macrominerals & Bone Matrix: Calcium, Phosphorus, Magnesium Homeostasis',
    '১২ · ম্যাক্রোমিনারেল ও অস্থি কাঠামো: ক্যালসিয়াম, ফসফরাস ও ম্যাগনেসিয়ামের ভারসাম্য'
  ),
  summary: l(
    'The biophysical endocrinology of macrominerals and skeletal remodeling: the calcium-sensing receptor (CaSR) and PTH feedback loop, enterocyte TRPV6 and renal TRPV5/NCX1 calcium transport, the osteocyte FGF23-Klotho phosphate wasting axis, Mg-ATP chelation and TRPM6 channel biology, hydroxyapatite mineralization, and the osteoblast-osteoclast RANKL-OPG signaling nexus.',
    'ম্যাক্রোমিনারেল ও কঙ্কাল পুনর্গঠনের জৈব-ভৌত এন্ডোক্রিনোলজি: ক্যালসিয়াম-সেন্সিং রিসেপ্টর (CaSR) ও PTH ফিডব্যাক লুপ, অন্ত্রের TRPV6 ও কিডনির TRPV5/NCX1 ক্যালসিয়াম পরিবহন, অস্টিওসাইটের FGF23-Klotho ফসফেট নিষ্কাশন অক্ষ, Mg-ATP চিলেশন ও TRPM6 চ্যানেল জীববিদ্যা, হাইড্রোক্সিঅ্যাপাটাইট স্ফটিকীকরণ এবং অস্টিওব্লাস্ট-অস্টিওক্ল্যাস্ট RANKL-OPG সংকেত সংযোগ।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Map the physiological control of extracellular ionized calcium (1.1–1.3 mmol/L) via parathyroid CaSR G-protein coupling, renal tubular reabsorption, and skeletal osteolysis.',
      'প্যারাথাইরয়েড CaSR রিসেপ্টর, বৃক্কীয় পুনঃশোষণ এবং অস্থি ভাঙনের মাধ্যমে রক্তে ক্যালসিয়ামের (১.১–১.৩ mmol/L) সুনির্দিষ্ট নিয়ন্ত্রণ পথ ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Trace the endocrine actions of osteocyte-derived Fibroblast Growth Factor 23 (FGF23) and renal alpha-Klotho on proximal tubule NaPi-IIa transporters and vitamin D metabolism.',
      'অস্টিওসাইট থেকে ক্ষরিত FGF23 এবং কিডনির Klotho প্রোটিনের যৌথ প্রভাবে NaPi-IIa চ্যানেল নিয়ন্ত্রণ ও ফসফেট নিষ্কাশন প্রক্রিয়া বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Evaluate the biochemical requirement of magnesium in Mg-ATP2- chelation and explain the clinical paradox wherein severe hypomagnesemia causes hypocalcemia refractory to calcium therapy.',
      'Mg-ATP2- চিলেশনে ম্যাগনেসিয়ামের জৈবরাসায়নিক অনিবার্যতা এবং তীব্র ম্যাগনেসিয়াম ঘাটতিতে কেন PTH অবদমিত হয়ে রক্তে ক্যালসিয়াম কমে যায় তা নিরূপণ করতে পারা।'
    ),
    l(
      'Contrast the molecular composition of the organic osteoid matrix (type I collagen) and inorganic hydroxyapatite crystals, detailing the osteoblast-osteoclast RANK/RANKL/OPG axis in bone turnover.',
      'অস্থির জৈব কোলাজেন কাঠামো এবং অজৈব হাইড্রোক্সিঅ্যাপাটাইট স্ফটিকের গঠন এবং হাড়ের গঠন ও ক্ষয়ে RANKL-OPG আণবিক সংকেতের ভারসাম্য বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.fat-soluble-vitamins', 'topic.nutrition.hydration-electrolytes-fluid-balance'],
  relatedTopicIds: ['topic.metabolism.organ-metabolic-specialization', 'topic.anatomy.skeletal-axial'],
  references: macromineralsRefs,
  evidenceBySection: {
    introduction: ['gropper-advanced-nutrition-macrominerals', 'brown-ann-rev-med-casr'],
    structure: ['brown-ann-rev-med-casr', 'gropper-advanced-nutrition-macrominerals'],
    mechanism: ['quarles-physiol-rev-fgf23', 'de-baaij-physiol-rev-magnesium'],
    integration: ['khosla-nejm-osteoporosis', 'gropper-advanced-nutrition-macrominerals'],
    practice: ['de-baaij-physiol-rev-magnesium', 'khosla-nejm-osteoporosis'],
    takeaways: ['gropper-advanced-nutrition-macrominerals', 'quarles-physiol-rev-fgf23'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Macromineral Homeostasis & Fluid Ion Compartments', '১. ম্যাক্রোমিনারেল ভারসাম্য ও তরল প্রকোষ্ঠের আয়ন বণ্টন'), sectionId: 'introduction' },
      { id: 'sec-casr-calcium', label: l('2. Calcium Regulation: The CaSR-PTH-TRPV6/5 Endocrine Axis', '২. ক্যালসিয়াম নিয়ন্ত্রণ: CaSR-PTH-TRPV6/5 হরমোনীয় অক্ষ'), sectionId: 'structure' },
      { id: 'sec-phosphate-fgf23', label: l('3. Phosphorus, FGF23-Klotho & Magnesium-ATP Chelation', '৩. ফসফরাস, FGF23-Klotho অক্ষ ও ম্যাগনেসিয়াম-ATP চিলেশন'), sectionId: 'mechanism' },
      { id: 'sec-bone-matrix', label: l('4. Skeletal Architecture: Hydroxyapatite, Osteoblasts & RANKL', '৪. অস্থির গঠন: হাইড্রোক্সিঅ্যাপাটাইট, অস্টিওব্লাস্ট ও RANKL'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Differential Diagnosis: Refractory Hypocalcemia & Osteomalacia', '৫. ক্লিনিক্যাল সমাধান: অনমনীয় হাইপোক্যালসেমিয়া ও অস্টিওম্যালাসিয়া'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Summary & Review Checkpoints', '৬. উচ্চ-গুরুত্বপূর্ণ সারাংশ ও রিভিশন চেকপয়েন্ট'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Calcium-Sensing Receptor (CaSR)', 'ক্যালসিয়াম-সেন্সিং রিসেপ্টর (CaSR)'),
        definition: l(
          'A homodimeric family C G-protein-coupled receptor predominantly expressed on parathyroid chief cells and renal thick ascending limb cells, which senses minute changes in extracellular ionized calcium, coupling to G-alpha-q and G-alpha-i to suppress parathyroid hormone secretion.',
          'প্যারাথাইরয়েড গ্রন্থি ও কিডনির কোষে অবস্থিত বিশেষ জিপিসিআর রিসেপ্টর যা রক্তে ক্যালসিয়ামের সামান্য পরিবর্তন পর্যবেক্ষণ করে প্যারাথাইরয়েড হরমোন (PTH) নিঃসরণ তাৎক্ষণিকভাবে নিয়ন্ত্রণ করে।'
        ),
      },
      {
        term: l('Fibroblast Growth Factor 23 (FGF23)', 'ফাইব্রোব্লাস্ট গ্রোথ ফ্যাক্টর ২৩ (FGF23)'),
        definition: l(
          'A phosphaturic peptide hormone secreted by osteocytes and osteoblasts in response to hyperphosphatemia and calcitriol; requires the obligate transmembrane coreceptor alpha-Klotho in renal proximal tubules to downregulate NaPi-IIa cotransporters, inducing urinary phosphate wasting.',
          'অস্থির অস্টিওসাইট কোষ থেকে ক্ষরিত হরমোন যা কিডনির Klotho প্রোটিনের সাথে যুক্ত হয়ে অতিরিক্ত ফসফেট প্রস্রাবের মাধ্যমে বের করে দেয় এবং সক্রিয় ভিটামিন ডি উৎপাদন দমন করে।'
        ),
      },
      {
        term: l('Mg-ATP2- Chelation Complex', 'Mg-ATP2- চিলেশন কমপ্লেক্স'),
        definition: l(
          'The stoichiometric biological coordination complex formed between divalent magnesium (Mg2+) and adenosine triphosphate, where Mg2+ neutralizes the repulsive negative charges of the beta- and gamma-phosphate oxygens, presenting the terminal phosphoanhydride bond for nucleophilic attack by kinases.',
          'ম্যাগনেসিয়াম ও এটিপির মধ্যকার অপরিহার্য বন্ধন; ম্যাগনেসিয়াম এটিপির ঋণাত্মক চার্জকে প্রশমিত করে কাইনেজ এনজাইমের জন্য একে কার্যক্ষম করে তোলে, যা ছাড়া কোনো কোষীয় শক্তি উৎপাদন সম্ভব নয়।'
        ),
      },
      {
        term: l('RANKL-RANK-OPG Axis', 'RANKL-RANK-OPG অক্ষ'),
        definition: l(
          'The master molecular paracrine signaling triad governing skeletal osteoclastogenesis: osteoblast-expressed RANKL binds RANK on osteoclast precursors to drive fusion and bone resorption, while soluble Osteoprotegerin (OPG) acts as a decoy receptor neutralizing RANKL to preserve bone density.',
          'হাড়ের ক্ষয় ও পুনর্গঠন নিয়ন্ত্রণকারী প্রধান সংকেত ব্যবস্থা; অস্টিওব্লাস্টের RANKL প্রোটিন অস্টিওক্ল্যাস্টকে উত্তেজিত করে হাড় কাটাতে বাধ্য করে, আর OPG প্রোটিন এই সংকেত আটকে দিয়ে হাড়ের ক্ষয় রোধ করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Resolving Severe Hypocalcemia Refractory to Intravenous Calcium', 'শিরায় ক্যালসিয়াম দেওয়া সত্ত্বেও না কমা হাইপোক্যালসেমিয়ার সমাধান'),
        steps: [
          l(
            'Step 1: A 58-year-old patient with short bowel syndrome presents with carpopedal spasm, perioral paresthesias, and a positive Chvostek sign. Serum ionized calcium is severely low at 0.72 mmol/L (reference 1.15–1.33 mmol/L).',
            'ধাপ ১: অন্ত্রের অস্ত্রোপচার হওয়া এক রোগীর হাত-পায়ের পেশিতে তীব্র খিঁচুনি (কার্পোপেডাল স্পাজম) এবং মুখে অসাড়তা দেখা গেছে। রক্তে আয়োনাইজড ক্যালসিয়াম মারাত্মক কম (০.৭২ mmol/L)।'
          ),
          l(
            'Step 2: Despite two successive intravenous boluses of calcium gluconate, serum calcium remains profoundly depressed. Obtain serum Parathyroid Hormone (PTH) and Magnesium: PTH is inappropriately low at 8 pg/mL (reference 15–65 pg/mL), while Serum Magnesium is undetectable at 0.35 mmol/L (reference 0.75–0.95 mmol/L).',
            'ধাপ ২: শিরায় দুই ডোজ ক্যালসিয়াম ইনজেকশন দেওয়া সত্ত্বেও ক্যালসিয়াম বাড়ছে না। প্যারাথাইরয়েড হরমোন ও ম্যাগনেসিয়াম পরীক্ষা করে দেখা গেল PTH অস্বাভাবিক কম (৮ pg/mL) এবং ম্যাগনেসিয়াম প্রায় শূন্য (০.৩৫ mmol/L)।'
          ),
          l(
            'Step 3: Recognize the Magnesium-PTH Paradox: Adenylate cyclase and the G-alpha-s subunits responsible for PTH vesicular exocytosis and renal tubular PTH1R signaling strictly require divalent Mg2+ as an obligate cofactor.',
            'ধাপ ৩: ম্যাগনেসিয়াম-PTH প্যারাডক্স চিহ্নিত করুন: প্যারাথাইরয়েড গ্রন্থি থেকে হরমোন বের হতে এবং কিডনিতে তা কাজ করতে ম্যাগনেসিয়াম অপরিহার্য কো-ফ্যাক্টর হিসেবে প্রয়োজন।'
          ),
          l(
            'Step 4: Severe hypomagnesemia (< 0.5 mmol/L) induces functional hypoparathyroidism and complete skeletal PTH resistance. Administer intravenous magnesium sulfate (2 g over 1 hour).',
            'ধাপ ৪: তীব্র ম্যাগনেসিয়াম ঘাটতিতে প্যারাথাইরয়েড গ্রন্থি অবশ হয়ে পড়ে। রোগীকে শিরায় ২ গ্রাম ম্যাগনেসিয়াম সালফেট ইনজেকশন প্রয়োগ করুন।'
          ),
        ],
        conclusion: l(
          'Repletion of intracellular magnesium restores adenylate cyclase activity, unfreezing PTH exocytosis within minutes and successfully correcting hypocalcemia.',
          'ম্যাগনেসিয়াম পূরণ করার সাথে সাথে প্যারাথাইরয়েড গ্রন্থি সচল হয়ে প্রচুর PTH নিঃসরণ শুরু করে এবং কয়েক ঘণ্টার মধ্যে রক্তে ক্যালসিয়াম স্বাভাবিক হয়ে খিঁচুনি বন্ধ হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'How does the osteocyte-derived hormone FGF23 protect the cardiovascular system from vascular calcification in chronic kidney disease?',
          'কিডনি রোগে অস্টিওসাইট থেকে ক্ষরিত FGF23 হরমোন কীভাবে রক্তনালীতে ক্যালসিয়াম জমে শক্ত হয়ে যাওয়া থেকে সুরক্ষা দেয়?'
        ),
        answer: l(
          'Elevated circulating phosphate forms insoluble calcium-phosphate nanocrystals that deposit within vascular smooth muscle cells, inducing phenotypic transdifferentiation into osteoblast-like cells that calcify arterial walls (Mönckeberg sclerosis). In response to rising phosphate, osteocytes secrete FGF23, which binds the FGFR1-alpha-Klotho receptor complex in the renal proximal tubule to internalize and degrade NaPi-IIa/c cotransporters, massively increasing urinary phosphate excretion. Concurrently, FGF23 suppresses renal CYP27B1 (1-alpha-hydroxylase) and induces CYP24A1, lowering calcitriol to decrease intestinal phosphate absorption, thereby lowering the calcium-phosphate solubility product below the crystallization threshold.',
          'রক্তে ফসফেট বেড়ে গেলে তা ক্যালসিয়ামের সাথে মিশে রক্তনালীর প্রাচীরে জমা হতে শুরু করে এবং রক্তনালীকে পাথরের মতো শক্ত করে ফেলে। এই বিপদ টের পেয়ে হাড়ের অস্টিওসাইট কোষ FGF23 হরমোন ক্ষরণ করে; এটি কিডনির Klotho প্রোটিনের সাহায্যে অতিরিক্ত ফসফেট প্রস্রাবের মাধ্যমে বের করে দেয় এবং একই সাথে অন্ত্রে ফসফেট শোষণ কমিয়ে দেয়। ফলে রক্তে ক্যালসিয়াম-ফসফেটের স্ফটিক তৈরি বন্ধ থাকে এবং হার্ট অ্যাটাকের ঝুঁকি কমে।'
        ),
      },
      {
        question: l(
          'Why does denosumab, a monoclonal antibody targeting RANKL, rapidly suppress bone resorption in severe postmenopausal osteoporosis?',
          'অস্টিওপোরোসিস রোগে ডেনোসুম্যাব নামক ওষুধ কীভাবে RANKL প্রোটিনকে আটকে দিয়ে দ্রুত হাড়ের ক্ষয় বন্ধ করে?'
        ),
        answer: l(
          'Osteoclast differentiation, fusion, and survival strictly require the binding of Receptor Activator of Nuclear Factor-kappa B Ligand (RANKL), expressed by osteoblasts and osteocytes, to its cognate receptor RANK on hematopoietic osteoclast precursors. Denosumab binds human RANKL with high affinity, mimicking the physiological decoy receptor Osteoprotegerin (OPG). By blocking RANKL from binding RANK, denosumab halts the NF-kB and NFATc1 transcriptional cascade, arresting osteoclastogenesis and inducing apoptosis in mature osteoclasts, which rapidly decreases bone resorption markers (such as serum CTX) by over 80% within days.',
          'হাড় ক্ষয়কারী অস্টিওক্ল্যাস্ট কোষ সক্রিয় হতে RANKL প্রোটিনের সংকেত অপরিহার্য। ডেনোসুম্যাব ওষুধটি সরাসরি RANKL-এর সাথে যুক্ত হয়ে একে নিষ্ক্রিয় করে দেয়, ঠিক যেমনটি দেহের প্রাকৃতিক OPG প্রোটিন করে। এর ফলে অস্টিওক্ল্যাস্ট কোষ তৈরি বন্ধ হয়ে যায় এবং বিদ্যমান ক্ষয়কারী কোষগুলো মারা যায়; ফলে হাড়ের ক্ষয় নাটকীয়ভাবে বন্ধ হয়ে হাড়ের ঘনত্ব দ্রুত বৃদ্ধি পায়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'macrominerals-bone-remodeling-axis',
    title: l('Macromineral Skeletal Axis: Calcium, Phosphate & Bone Remodeling', 'ম্যাক্রোমিনারেল কঙ্কাল অক্ষ: ক্যালসিয়াম, ফসফেট ও অস্থি পুনর্গঠন'),
    description: l(
      'Track the tripartite endocrine network governing systemic bone matrix integrity: parathyroid CaSR-PTH flux, the osteocyte FGF23-Klotho phosphate wasting loop, and the osteoblast-osteoclast RANKL-OPG remodeling unit.',
      'অস্থির স্বাস্থ্য নিয়ন্ত্রণকারী তিনটি হরমোনীয় পথ পর্যবেক্ষণ করুন: প্যারাথাইরয়েডের CaSR-PTH সংকেত, অস্টিওসাইটের FGF23-Klotho ফসফেট নিষ্কাশন এবং অস্টিওব্লাস্ট-অস্টিওক্ল্যাস্টের RANKL-OPG হাড় পুনর্গঠন ইউনিট।'
    ),
    disclaimer: l(
      'Educational endocrinological simulation; clinical osteoporosis diagnosis requires dual-energy X-ray absorptiometry (DEXA) densitometry.',
      'এন্ডোক্রিনোলজি ও পুষ্টি বিজ্ঞানের শিক্ষামূলক সিমুলেশন; অস্টিওপোরোসিস রোগ নির্ণয়ে ডেক্সা (DEXA) স্ক্যান অপরিহার্য।'
    ),
    svgType: 'bone-cascade',
    items: [
      {
        id: 'node-casr-pth',
        label: l('Parathyroid CaSR & PTH Exocytosis Flux', 'প্যারাথাইরয়েড CaSR ও PTH নিঃসরণ প্রবাহ'),
        description: l(
          'CaSR senses minute drops in serum ionized Ca2+, relieving Gq/Gi tonic inhibition and triggering rapid vesicular PTH release.',
          'CaSR রিসেপ্টর রক্তে ক্যালসিয়ামের পতন টের পাওয়া মাত্রই প্যারাথাইরয়েড হরমোন (PTH) নিঃসরণ বাড়িয়ে দেয়।'
        ),
        details: l(
          'Extracellular Ca2+ binds the venus flytrap domain of CaSR, activating G-alpha-q/11 to stimulate phospholipase C (PLC), elevating intracellular inositol 1,4,5-trisphosphate (IP3) and tonic Ca2+ to suppress PTH exocytosis. When serum Ca2+ falls, this inhibition is relieved, releasing PTH into systemic circulation within seconds.',
          'ক্যালসিয়াম কমলে প্যারাথাইরয়েড গ্রন্থি মুহূর্তের মধ্যে রক্তে PTH ঢেলে দেয়। এই হরমোন কিডনিতে গিয়ে ক্যালসিয়াম প্রস্রাবে বের হতে বাধা দেয় এবং হাড় থেকে ক্যালসিয়াম এনে রক্তে মাত্রা স্বাভাবিক করে।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-renal-trpv5',
        label: l('Renal DCT: TRPV5 & NCX1 Active Calcium Reabsorption', 'কিডনির দূরবর্তী নালী: TRPV5 ও NCX1 ক্যালসিয়াম পুনঃশোষণ'),
        description: l(
          'PTH upregulates apical TRPV5 channels and basolateral Na+/Ca2+ exchangers (NCX1) in the distal convoluted tubule.',
          'PTH কিডনির দূরবর্তী নালীতে TRPV5 চ্যানেল ও NCX1 পাম্প সক্রিয় করে প্রস্রাব থেকে ক্যালসিয়াম রক্তে ফিরিয়ে আনে।'
        ),
        details: l(
          'In the distal convoluted tubule (DCT), apical Ca2+ enters via constitutively open TRPV5 channels, binds intracellular calbindin-D28k for cytosolic shuttling, and is extruded into peritubular capillaries by basolateral NCX1 (3 Na+ in : 1 Ca2+ out) and PMCA1b, reclaiming 8% to 10% of filtered calcium under strict hormonal regulation.',
          'কিডনির এই অংশে PTH হরমোন ক্যালসিয়াম ক্ষতি শূন্যের কোঠায় নামিয়ে আনে; ফলে রক্তে ক্যালসিয়ামের মাত্রা দ্রুত পুনরুদ্ধার হয়।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-fgf23-klotho',
        label: l('Osteocyte FGF23 & Renal Klotho Phosphaturia', 'অস্টিওসাইট FGF23 ও কিডনির Klotho ফসফেট নিষ্কাশন'),
        description: l(
          'High serum phosphate stimulates osteocytes to secrete FGF23, which binds Klotho in proximal tubules to downregulate NaPi-IIa.',
          'রক্তে ফসফেট বাড়লে হাড় থেকে FGF23 ক্ষরিত হয় যা কিডনির Klotho প্রোটিনের সাহায্যে অতিরিক্ত ফসফেট প্রস্রাবে ফেলে দেয়।'
        ),
        details: l(
          'FGF23 forms a high-affinity ternary complex with FGFR1c and the obligate transmembrane coreceptor alpha-Klotho in renal proximal tubule basolateral membranes. This activates ERK1/2 phosphorylation, triggering the endocytic retrieval and lysosomal degradation of apical NaPi-IIa (SLC34A1) and NaPi-IIc cotransporters, inducing phosphaturia.',
          'এই প্রক্রিয়ায় রক্তে অতিরিক্ত ফসফেট জমে রক্তনালী পাথরের মতো শক্ত হয়ে যাওয়া প্রতিরোধ হয়। কিডনি ফেইলিউরে Klotho কমে গেলে এই প্রতিরোধ ভেঙে পড়ে।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-mg-trpm6',
        label: l('Magnesium TRPM6 & Mg-ATP2- Chelation Engine', 'ম্যাগনেসিয়াম TRPM6 চ্যানেল ও Mg-ATP2- শক্তি রূপান্তর'),
        description: l(
          'TRPM6 channels in the intestine and renal DCT absorb Mg2+, which coordinates ATP to drive all cell kinases and the Na+/K+-ATPase.',
          'TRPM6 চ্যানেল ম্যাগনেসিয়াম শোষণ করে, যা এটিপির সাথে যুক্ত হয়ে কোষের সমস্ত কাইনেজ এনজাইম ও আয়ন পাম্প সচল রাখে।'
        ),
        details: l(
          'Divalent Mg2+ is absorbed via TRPM6 kinase-coupled ion channels. Over 99% of total body magnesium is intracellular or skeletal. In the cytosol, ATP exists as the Mg-ATP2- chelate, which neutralizes phosphate charges. Severe hypomagnesemia impairs adenylate cyclase, paralyzing PTH exocytosis and causing refractory hypocalcemia.',
          'ম্যাগনেসিয়ামের তীব্র অভাব হলে প্যারাথাইরয়েড গ্রন্থি অকেজো হয়ে পড়ে এবং রক্তে ক্যালসিয়াম ভয়াবহ কমে গিয়ে খিঁচুনি হয়; ম্যাগনেসিয়াম ইনজেকশন না দিলে এই সমস্যা কখনোই ভালো হয় না।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-rankl-opg',
        label: l('Bone Remodeling Unit: RANKL vs OPG Coupling', 'অস্থি পুনর্গঠন ইউনিট: RANKL বনাম OPG ভারসাম্য'),
        description: l(
          'Osteoblast RANKL binds osteoclast RANK to stimulate bone resorption; Osteoprotegerin (OPG) binds RANKL as a decoy to preserve bone.',
          'অস্টিওব্লাস্টের RANKL প্রোটিন হাড়ের ক্ষয় ঘটায়, আর OPG প্রোটিন একে প্রতিহত করে হাড়ের শক্তি ও ঘনত্ব বজায় রাখে।'
        ),
        details: l(
          'The Basic Multicellular Unit (BMU) balances osteoclasts and osteoblasts. PTH and calcitriol induce osteoblast RANKL expression, which binds RANK on pre-osteoclasts, triggering NF-kB and NFATc1 to form mature resorptive osteoclasts. OPG, secreted by osteoblasts, acts as a soluble neutralizing decoy receptor; estrogen upregulates OPG, explaining postmenopausal bone loss.',
          'মেনোপজের পর নারীদের ইস্ট্রোজেন কমে গেলে OPG হ্রাস পায় এবং RANKL বাধাহীনভাবে হাড় কাটতে শুরু করে, যার ফলে তীব্র অস্টিওপোরোসিস এবং হাড় ভাঙার ঝুঁকি তৈরি হয়।'
        ),
        color: '#ec4899',
        svgCoords: { x: 190, y: 175, width: 310, height: 48 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'মৌলিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. The Macromineral Architecture of Human Physiology', '১. মানব শারীরবৃত্তে ম্যাক্রোমিনারেট সমাহার ও ভূমিকা'),
          paragraphs: [
            l(
              'While trace minerals are quantified in milligrams and micrograms, the macrominerals—calcium, phosphorus, and magnesium—are measured in hundreds of milligrams to whole grams within daily human dietary requirements and body composition [1]. An adult human body contains approximately 1,000 to 1,200 grams of calcium, 700 grams of phosphorus, and 25 grams of magnesium [1]. Over 99% of total body calcium and 85% of body phosphorus reside inside the skeletal framework, forming the inorganic hydroxyapatite mineral crystals that bestow rigidity, compressive strength, and structural integrity upon bone [1, 2].',
              'ট্রেস মিনারেলগুলো যেখানে মিলিগ্রাম বা মাইক্রোগ্রামে হিসাব করা হয়, সেখানে ম্যাক্রোমিনারেলগুলো—ক্যালসিয়াম, ফসফরাস ও ম্যাগনেসিয়াম—দৈনিক খাদ্য ও মানবদেহে শত শত মিলিগ্রাম থেকে গ্রাম হিসেবে অবস্থান করে [১]। একজন প্রাপ্তবয়স্ক মানুষের দেহে প্রায় এক হাজার থেকে বারোশত গ্রাম ক্যালসিয়াম, সাতশত গ্রাম ফসফরাস এবং পঁচিশ গ্রাম ম্যাগনেসিয়াম থাকে [১]। দেহের মোট ক্যালসিয়ামের ৯৯% এবং ফসফরাসের ৮৫% জমা থাকে অস্থির ভেতরে, যা হাইড্রোক্সিঅ্যাপাটাইট স্ফটিক গঠন করে কঙ্কালকে পাথরের মতো শক্ত ও চাপ সহ্য করার ক্ষমতা দেয় [১, ২]।'
            ),
            l(
              'Beyond their monumental mechanical contributions to bone and tooth enamel, these three macrominerals serve critical non-skeletal physiological duties in cellular signaling, neuromuscular transmission, cardiac electrophysiology, and nucleic acid energetics [1, 4]. Extracellular ionized calcium (Ca2+) governs synaptic neurotransmitter release and myocardial excitation-contraction coupling, inorganic phosphate provides the structural backbone of DNA, RNA, and high-energy ATP, and magnesium acts as the essential cofactor for over 300 enzymatic phosphorylation reactions [1, 4].',
              'হাড় ও দাঁত শক্ত করার বিশাল দায়িত্ব ছাড়াও এই তিনটি ম্যাক্রোমিনারেল স্নায়বিক বার্তা প্রেরণ, হৃদস্পন্দন নিয়ন্ত্রণ এবং কোষীয় শক্তি পরিচালনায় অপরিহার্য ভূমিকা রাখে [১, ৪]। রক্তে ক্যালসিয়াম স্নায়ুর সংযোগস্থলে বার্তা পৌঁছে দেয় এবং হৃদপেশির সংকোচন ঘটায়; ফসফেট ডিএনএ, আরএনএ এবং শক্তির মুদ্রা এটিপির মেরুদণ্ড তৈরি করে; আর ম্যাগনেসিয়াম কোষের ৩০০টিরও বেশি এনজাইমের চালিকাশক্তি হিসেবে কাজ করে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Calcium Regulation: The Parathyroid Hormone Feedback Loop', '২. ক্যালসিয়াম নিয়ন্ত্রণ: প্যারাথাইরয়েড হরমোন ফিডব্যাক লুপ'),
          paragraphs: [
            l(
              'Serum calcium is one of the most tightly defended physiological constants in human biology, held within a narrow homeostatic window between 2.15 and 2.55 mmol/L (with ionized active Ca2+ clamped strictly between 1.15 and 1.33 mmol/L) [1, 5]. Any deviation outside this window produces catastrophic neuromuscular instability: hypocalcemia induces spontaneous motor nerve depolarization, tetany, and laryngospasm, while hypercalcemia produces lethargy, cardiac arrhythmias, and renal calcification [1, 5].',
              'রক্তে ক্যালসিয়ামের মাত্রা মানব শারীরবৃত্তের সবচেয়ে কঠোরভাবে সুরক্ষিত সূচকগুলোর একটি, যা ২.১৫ থেকে ২.৫৫ mmol/L (এবং মুক্ত সক্রিয় ক্যালসিয়াম ১.১৫ থেকে ১.৩৩ mmol/L) এর মধ্যে অতি নিখুঁতভাবে সীমাবদ্ধ থাকে [১, ৫]। এই মাত্রায় সামান্য বিচ্যুতি ঘটলেই মারাত্মক স্নায়বিক বিপর্যয় ঘটে: ক্যালসিয়াম কমে গেলে স্নায়ু উত্তেজিত হয়ে হাত-পায়ের পেশিতে তীব্র খিঁচুনি ও শ্বাসকষ্ট হয়, আর বেড়ে গেলে চরম দুর্বলতা, হৃদস্পন্দনে গোলযোগ ও কিডনিতে পাথর হয় [১, ৫]।'
            ),
            l(
              'This homeostatic balance is orchestrated by four rice-grain-sized parathyroid glands nestled behind the thyroid gland [5]. Chief cells express the Calcium-Sensing Receptor (CaSR), a membrane receptor that constantly samples ionized calcium [5]. When serum calcium drops, CaSR inhibition is relieved, triggering the exocytosis of Parathyroid Hormone (PTH) into circulation within seconds [5]. PTH acts directly on the kidney to halt calcium excretion and induce calcitriol synthesis, while stimulating osteoclasts to mobilize mineral stores from bone [1, 5].',
              'এই ভারসাম্য রক্ষা করে থাইরয়েড গ্রন্থির পেছনে থাকা চারটি ক্ষুদ্র প্যারাথাইরয়েড গ্রন্থি [৫]। এদের কোষে থাকা CaSR রিসেপ্টর প্রতি মুহূর্তে রক্তের ক্যালসিয়াম পর্যবেক্ষণ করে [৫]। রক্তে ক্যালসিয়াম কমামাত্রই এটি সেকেন্ডের মধ্যে প্যারাথাইরয়েড হরমোন (PTH) রক্তে ছড়িয়ে দেয় [৫]। PTH হরমোন কিডনিকে প্রস্রাব দিয়ে ক্যালসিয়াম বের হওয়া বন্ধ করতে বলে, ভিটামিন ডি সক্রিয় করে অন্ত্রে ক্যালসিয়াম শোষণ বাড়ায় এবং হাড় থেকে ক্যালসিয়াম এনে রক্তের মাত্রা স্বাভাবিক করে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Phosphorus, FGF23 Signaling and Magnesium-ATP Chelation', '৩. ফসফরাস, FGF23 সংকেত এবং ম্যাগনেসিয়াম-ATP চিলেশন'),
          paragraphs: [
            l(
              'Dietary phosphorus is widely abundant in protein-rich foods and processed food additives, exhibiting high intestinal bioavailability (~60% to 80%) [1, 3]. Because excessive circulating phosphate readily precipitates with calcium to form calcified plaques within arterial walls, osteocytes in bone secrete Fibroblast Growth Factor 23 (FGF23) to eliminate excess phosphorus [3]. FGF23 travels to the kidney, where it binds its coreceptor Klotho to shut down proximal tubule phosphate transporters, driving excess phosphate harmlessly into urine [3].',
              'প্রোটিনযুক্ত খাদ্য ও প্রক্রিয়াজাত খাবারে প্রচুর ফসফরাস থাকে যা অন্ত্রে অতি দ্রুত শোষিত হয় [১, ৩]। রক্তে অতিরিক্ত ফসফেট থাকলে তা ক্যালসিয়ামের সাথে মিলে রক্তনালীর প্রাচীরে পাথরের মতো জমে রক্তনালী বন্ধ করে দিতে পারে; তাই এই বিপদ এড়াতে হাড়ের কোষ থেকে FGF23 হরমোন ক্ষরিত হয় [৩]। FGF23 কিডনিতে গিয়ে Klotho প্রোটিনের সাহায্যে অতিরিক্ত ফসফেট প্রস্রাবের মাধ্যমে বের করে দিয়ে রক্তনালীকে সুরক্ষিত রাখে [৩]।'
            ),
            l(
              'Magnesium is the second most abundant intracellular cation and the absolute prerequisite for cellular energy transduction [4]. In living cytoplasm, ATP does not float freely as an isolated molecule; over 90% of intracellular ATP is coordinated with divalent magnesium as an Mg-ATP2- chelation complex [4]. Magnesium neutralizes the repulsive negative charges on ATP’s phosphate chain, allowing kinases to attach to the terminal phosphate and transfer energy [4]. Without adequate magnesium, sodium-potassium pumps fail, cell membranes depolarize, and energy metabolism collapses [4].',
              'ম্যাগনেসিয়াম হলো কোষের ভেতরের দ্বিতীয় সর্বাধিক গুরুত্বপূর্ণ ধনাত্মক আয়ন এবং শক্তির রূপান্তরের মূল চাবিকাঠি [৪]। কোষের ভেতরে এটিপি কখনো একা একা ভেসে বেড়ায় না; এর ৯০% এরও বেশি ম্যাগনেসিয়ামের সাথে Mg-ATP2- আকারে আবদ্ধ থাকে [৪]। ম্যাগনেসিয়াম এটিপির ঋণাত্মক চার্জ প্রশমিত করে এনজাইমগুলোকে কাজ করার সুযোগ দেয় [৪]। ম্যাগনেসিয়াম না থাকলে কোষের সোডিয়াম-পটাশিয়াম পাম্প অচল হয়ে পড়ে এবং সমস্ত শক্তি উৎপাদন প্রক্রিয়া স্থবির হয়ে যায় [৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Skeletal Architecture: Hydroxyapatite and Bone Remodeling Units', '৪. কঙ্কালের কাঠামো: হাইড্রোক্সিঅ্যাপাটাইট ও হাড় পুনর্গঠন ইউনিট'),
          paragraphs: [
            l(
              'Bone is not an inert calcium reservoir, but a dynamic, metabolically active living tissue undergoing continuous architectural remodeling throughout human life [2]. The skeletal matrix consists of an organic osteoid scaffold (primarily type I collagen fibers conferring tensile elasticity) embedded within an inorganic ceramic phase (calcium hydroxyapatite crystals, Ca10(PO4)6(OH)2, conferring compressive stiffness) [1, 2].',
              'হাড় কোনো অনুভূতিহীন নিরেট পাথর নয়, বরং এটি একটি অত্যন্ত জীবন্ত ও গতিশীল কলা যা মানুষের সারাজীবন প্রতিনিয়ত ক্ষয় ও পুনর্গঠনের মধ্য দিয়ে যায় [২]। অস্থির মূল কাঠামোর মধ্যে রয়েছে টাইপ-১ কোলাজেনের জৈব দড়ি (যা হাড়কে নমনীয়তা ও টান সহ্য করার ক্ষমতা দেয়) এবং এর ফাঁকে ফাঁকে জমা হওয়া অজৈব ক্যালসিয়াম হাইড্রোক্সিঅ্যাপাটাইট স্ফটিক (যা হাড়কে কাঠিন্য ও দৃঢ়তা দেয়) [১, ২]।'
            ),
            l(
              'Bone remodeling is executed by specialized Basic Multicellular Units (BMUs) pairing bone-forming osteoblasts with bone-resorbing osteoclasts [2]. Osteoblasts express a surface protein called RANKL, which binds to the RANK receptor on osteoclasts to activate bone resorption [2]. Concurrently, osteoblasts secrete Osteoprotegerin (OPG), a soluble decoy receptor that catches RANKL and prevents it from activating osteoclasts [2]. In health, RANKL and OPG are perfectly balanced; after menopause, declining estrogen lowers OPG, allowing unrestrained osteoclast activity that thins the bone matrix into osteoporosis [2].',
              'হাড়ের পুনর্গঠন পরিচালিত হয় দুটি বিপরীতমুখী কোষের দলগত কাজের মাধ্যমে: হাড় নির্মাণকারী অস্টিওব্লাস্ট এবং হাড় ভাঙনকারী অস্টিওক্ল্যাস্ট [২]। অস্টিওব্লাস্ট RANKL সংকেত পাঠিয়ে অস্টিওক্ল্যাস্টকে হাড় কাটতে বলে, আবার OPG প্রোটিন ক্ষরণ করে এই ভাঙন নিয়ন্ত্রণে রাখে [২]। এই দুটি সংকেতের নিখুঁত ভারসাম্যে কঙ্কাল সুস্থ থাকে; কিন্তু বার্ধক্যে বা মেনোপজের পর OPG কমে গেলে অস্টিওক্ল্যাস্ট অতিরিক্ত হাড় খেয়ে ফেলে অস্টিওপোরোসিস রোগ সৃষ্টি করে [২]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Practical Clinical Syndromes: Osteoporosis, Tetany and Mineral Malabsorption', '৫. ব্যবহারিক ক্লিনিক্যাল রোগলক্ষণ: অস্টিওপোরোসিস, টিটেনি ও মিনারেল ঘাটতি'),
          paragraphs: [
            l(
              'Clinical disorders of macrominerals present with acute neuromuscular emergencies or insidious chronic skeletal degradation [1, 2]. Acute hypocalcemia triggers latent tetany, demonstrable clinically by tapping the facial nerve to elicit facial twitching (Chvostek’s sign) or inflating a blood pressure cuff on the upper arm to induce painful carpal spasm (Trousseau’s sign) [1, 5]. Chronic negative calcium balance forces the skeleton to sacrifice its own mineral content to preserve serum levels, culminating in osteoporosis characterized by microarchitectural deterioration and fragility fractures of the hip and spine [2].',
              'ম্যাক্রোমিনারেলের ভারসাম্যহীনতায় তীব্র স্নায়বিক জরুরি অবস্থা বা দীর্ঘস্থায়ী হাড়ের ক্ষয় দেখা দেয় [১, ২]। ক্যালসিয়াম হঠাৎ কমে গেলে তীব্র টিটেনি খিঁচুনি হয়, যা মুখে টোকা দিলে গালের পেশি কেঁপে ওঠা (ভোসতেক সাইন) বা রক্তচাপ মাপার কাফ ফোলালে হাতের আঙুল কুঁকড়ে যাওয়ার (ট্রুসো সাইন) মাধ্যমে ধরা পড়ে [১, ৫]। দীর্ঘদিনের ক্যালসিয়াম ঘাটতিতে শরীর রক্তের মাত্রা ঠিক রাখতে হাড় থেকে সব ক্যালসিয়াম খসিয়ে ফেলে, যার ফলে সামান্য আঘাতেই কোমর ও মেরুদণ্ডের হাড় ভেঙে যায় (অস্টিওপোরোসিস) [২]।'
            ),
            l(
              'Magnesium depletion frequently complicates gastrointestinal malabsorption, loop diuretic therapy, and chronic alcoholism [4]. Because magnesium is required for parathyroid hormone synthesis and release, hypomagnesemic patients often present with refractory hypocalcemia that is completely unresponsive to calcium infusions until intravenous magnesium is co-administered to awaken the parathyroid gland [4, 5].',
              'অন্ত্রের রোগ, প্রস্রাব বাড়ানোর ওষুধ সেবন বা অতিরিক্ত মদ্যপানে ম্যাগনেসিয়ামের মারাত্মক ঘাটতি তৈরি হয় [৪]। যেহেতু প্যারাথাইরয়েড হরমোন ক্ষরণের জন্য ম্যাগনেসিয়াম অপরিহার্য, তাই ম্যাগনেসিয়াম কমে গেলে রক্তে ক্যালসিয়ামও মারাত্মক কমে যায়; এবং রোগীকে কেবল ক্যালসিয়াম দিলে কোনো কাজ হয় না, যতক্ষণ না শিরায় ম্যাগনেসিয়াম দিয়ে প্যারাথাইরয়েড গ্রন্থিকে জাগিয়ে তোলা হয় [৪, ৫]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Educational Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ শিক্ষামূলক সারাংশ'),
          paragraphs: [
            l(
              'Calcium, phosphorus, and magnesium form an inseparable tripartite endocrine and structural continuum in human biology [1, 4]. Extracellular calcium is defended by parathyroid CaSR and PTH, phosphate is regulated by osteocyte FGF23 and renal Klotho, and magnesium coordinates cellular ATP while dictating parathyroid gland responsiveness [3, 4, 5].',
              'ক্যালসিয়াম, ফসফরাস ও ম্যাগনেসিয়াম মানবদেহের অবিচ্ছেদ্য তিনটি স্তম্ভ হিসেবে একসাথে কাজ করে [১, ৪]। ক্যালসিয়াম নিয়ন্ত্রিত হয় প্যারাথাইরয়েডের CaSR ও PTH দ্বারা, ফসফেট নিয়ন্ত্রিত হয় হাড়ের FGF23 ও কিডনির Klotho দ্বারা, এবং ম্যাগনেসিয়াম কোষের সমস্ত এটিপি শক্তি ও প্যারাথাইরয়েড গ্রন্থির কার্যক্ষমতা পরিচালনা করে [৩, ৪, ৫]।'
            ),
            l(
              'Clinical mastery requires recognizing that serum electrolyte levels reflect extracellular regulation rather than total bone stores, diagnosing the cause of refractory hypocalcemia through concurrent magnesium assessment, and evaluating the RANKL-OPG axis when treating metabolic bone diseases [2, 4, 5].',
              'চিকিৎসা বিজ্ঞানে সফলতার জন্য বুঝতে হবে যে রক্তের ক্যালসিয়াম অস্থির মোট সঞ্চয় নির্দেশ করে না, অনমনীয় ক্যালসিয়াম ঘাটতিতে সবার আগে ম্যাগনেসিয়াম পরীক্ষা করতে হবে এবং অস্টিওপোরোসিস প্রতিরোধে হাড়ের RANKL-OPG ভারসাম্যের ওপর গুরুত্ব দিতে হবে [২, ৪, ৫]।'
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
          heading: l('1. Biophysical Ion Gradients and Ionized Calcium Partitioning', '১. আয়নের বায়োফিজিক্যাল গ্রেডিয়েন্ট ও ক্যালসিয়াম বিভাজন'),
          paragraphs: [
            l(
              'The thermodynamic distribution of calcium across cellular boundaries represents one of the steepest ionic gradients in biological systems [1, 5]. Extracellular ionized calcium (Ca2+) is maintained at approximately 1.20 mmol/L (1.2 x 10^-3 M), whereas resting intracellular cytosolic free Ca2+ is clamped at a minute ~100 nmol/L (1.0 x 10^-7 M)—a staggering 10,000-fold gradient [5]. This gradient is sustained by active extrusion via plasma membrane Ca2+-ATPases (PMCA), sodium-calcium exchangers (NCX), and sequestration into the sarcoplasmic/endoplasmic reticulum by SERCA pumps [5].',
              'কোষের ভেতরে ও বাইরে ক্যালসিয়ামের ঘনত্বের পার্থক্য জীবজগতের সবচেয়ে খাড়া আয়নিক ঢালগুলোর একটি [১, ৫]। রক্তরসে মুক্ত ক্যালসিয়াম প্রায় ১.২০ mmol/L থাকলেও কোষের সাইটোপ্লাজমে মুক্ত ক্যালসিয়াম মাত্র ১০০ nmol/L থাকে—যা বাইরের তুলনায় প্রায় দশ হাজার গুণ কম [৫]। এই বিশাল পার্থক্য ধরে রাখতে কোষের মেমব্রেন পাম্প (PMCA), এক্সচেঞ্জার (NCX) এবং এন্ডোপ্লাজমিক রেটিকুলামের SERCA পাম্প অবিরাম শক্তি খরচ করে কাজ করে [৫]।'
            ),
            l(
              'In clinical chemistry, total serum calcium (~2.15–2.55 mmol/L) consists of three distinct physicochemical fractions: approximately 50% is free ionized biologically active Ca2+, 40% is bound to anionic plasma proteins (predominantly albumin), and 10% is complexed with small anions such as citrate, phosphate, and bicarbonate [1, 5]. Because each 1.0 g/dL drop in serum albumin reduces total calcium by ~0.8 mg/dL (~0.2 mmol/L) without altering active ionized Ca2+, clinical interpretation demands albumin-corrected calcium formulas or direct blood gas ion-selective electrode measurement [1, 5].',
              'রক্তে থাকা মোট ক্যালসিয়াম তিনটি রূপে বিভক্ত থাকে: প্রায় ৫০% মুক্ত ও সক্রিয় আয়ন, ৪০% রক্তের অ্যালবুমিন প্রোটিনের সাথে যুক্ত এবং ১০% সাইট্রেট ও ফসফেটের সাথে আবদ্ধ [১, ৫]। রক্তে অ্যালবুমিন কমলে মোট ক্যালসিয়াম আপাতদৃষ্টিতে কম দেখালেও আসল সক্রিয় ক্যালসিয়াম স্বাভাবিক থাকতে পারে; তাই নির্ভুল মূল্যায়নে সর্বদা অ্যালবুমিন-সংশোধিত ক্যালসিয়াম হিসাব করা বা সরাসরি ব্লাড গ্যাস পরীক্ষা করা আবশ্যক [১, ৫]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Molecular CaSR Structure, Signaling Biasing & Tubular Reabsorption', '২. CaSR আণবিক গঠন, সংকেত রূপান্তর ও নালীয় পুনঃশোষণ'),
          paragraphs: [
            l(
              'The Calcium-Sensing Receptor (CaSR) is a 120-kDa homodimeric Family C G-protein-coupled receptor featuring a massive extracellular bilobed "Venus flytrap" domain that binds multiple Ca2+ ions with cooperativity (Hill coefficient ~3.5–4.0) [5]. Binding of extracellular Ca2+ triggers closure of the Venus flytrap domain, activating G-alpha-q/11 to stimulate phospholipase C-beta (PLC-beta), elevating IP3 and intracellular Ca2+ [5]. Simultaneously, CaSR couples to G-alpha-i to inhibit adenylate cyclase, suppressing intracellular cAMP [5].',
              'ক্যালসিয়াম-সেন্সিং রিসেপ্টর (CaSR) হলো প্যারাথাইরয়েড কোষের গায়ে থাকা একটি বিশেষ রিসেপ্টর যার বাইরের অংশে ফাঁদ-সদৃশ ডোমেইন থাকে যা ক্যালসিয়াম আয়ন গ্রহণ করে [৫]। ক্যালসিয়াম যুক্ত হওয়া মাত্রই এটি Gq এবং Gi প্রোটিনকে সক্রিয় করে কোষে cAMP কমিয়ে দেয় [৫]। ফলে প্যারাথাইরয়েড হরমোন নিঃসরণ তাৎক্ষণিকভাবে থেমে যায় [৫]।'
            ),
            l(
              'In the kidney, CaSR is heavily expressed on the basolateral membrane of the cortical Thick Ascending Limb (TAL) of Henle [5]. Here, high extracellular Ca2+ activates CaSR to suppress the apical ROMK potassium channel and the Na+-K+-2Cl- cotransporter (NKCC2), dissipating the lumen-positive transepithelial potential [5]. Without this electrical driving force, paracellular calcium and magnesium reabsorption through claudin-16 and claudin-19 tight junctions collapses, dumping excess divalent cations into urine (hypercalciuria) to protect systemic circulation from hypercalcemia [5].',
              'কিডনির হেনলির লুপের কোষেও CaSR প্রচুর পরিমাণে থাকে [৫]। রক্তে ক্যালসিয়াম বেশি থাকলে এই রিসেপ্টরটি কিডনির পটাশিয়াম ও সোডিয়াম চ্যানেল বন্ধ করে নালীর ভেতরের ধনাত্মক বিদ্যুৎ বিভব কমিয়ে দেয় [৫]। এর ফলে ক্লোডিন-১৬ ও ১৯ দিয়ে ক্যালসিয়াম ও ম্যাগনেসিয়াম পুনরায় রক্তে শোষিত হতে পারে না এবং অতিরিক্ত ক্যালসিয়াম প্রস্রাবের মাধ্যমে বের হয়ে গিয়ে শরীরকে হাইপারক্যালসেমিয়ার হাত থেকে বাঁচায় [৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Klotho-FGF23 Phosphate Dynamics and TRPM6 Kinase Channel Biology', '৩. Klotho-FGF23 ফসফেট গতিবিদ্যা ও TRPM6 চ্যানেল জীববিদ্যা'),
          paragraphs: [
            l(
              'Phosphate balance is governed by the osteocyte-renal hormonal axis mediated by Fibroblast Growth Factor 23 (FGF23) [3]. Secreted by mature osteocytes embedded in bone matrix, FGF23 circulates as an intact 32-kDa phosphaturic hormone [3]. In the renal proximal tubule, FGF23 binds Fibroblast Growth Factor Receptor 1c (FGFR1c), but requires the mandatory presence of alpha-Klotho, a single-pass transmembrane coreceptor that dramatically enhances FGFR1c binding affinity for FGF23 [3].',
              'ফসফেটের ভারসাম্য নিয়ন্ত্রিত হয় হাড়ের অস্টিওসাইট ও কিডনির মধ্যে FGF23 হরমোনের মাধ্যমে [৩]। অস্টিওসাইট থেকে ক্ষরিত FGF23 রক্তে প্রবাহিত হয়ে কিডনির কোষে পৌঁছায় [৩]। সেখানে এটি FGFR1c রিসেপ্টরে বসে, কিন্তু কাজের জন্য কিডনির বিশেষ Klotho প্রোটিনের উপস্থিতি অপরিহার্য, যা এই বন্ধনকে শক্তিশালী করে তোলে [৩]।'
            ),
            l(
              'The FGF23-Klotho-FGFR1 complex stimulates downstream ERK1/2 and SGK1 phosphorylation cascades, promoting the clathrin-dependent endocytosis and lysosomal degradation of the apical sodium-phosphate cotransporters NaPi-IIa (SLC34A1) and NaPi-IIc (SLC34A3) [3]. Concurrently, FGF23 suppresses CYP27B1 and induces CYP24A1, dramatically lowering circulating 1,25(OH)2D and decreasing intestinal phosphate absorption [3]. In parallel, magnesium reabsorption in the Distal Convoluted Tubule (DCT) is mediated by Transient Receptor Potential Melastatin 6 (TRPM6), a unique chanzyme possessing an ion channel linked to a C-terminal atypical alpha-kinase domain that senses intracellular Mg-ATP levels [4].',
              'FGF23-Klotho সংকেত কিডনির নালী থেকে NaPi-IIa ও NaPi-IIc ফসফেট চ্যানেলগুলোকে ভেতরে টেনে নিয়ে ধ্বংস করে দেয়, যার ফলে ফসফেট দ্রুত প্রস্রাবে বের হয়ে যায় [৩]। একই সাথে এটি ভিটামিন ডি নিষ্ক্রিয় করে অন্ত্রে ফসফেট শোষণ কমিয়ে দেয় [৩]। অন্যদিকে কিডনির দূরবর্তী নালীতে ম্যাগনেসিয়াম শোষিত হয় TRPM6 চ্যানেলের মাধ্যমে, যা নিজেই একটি বিশেষ এনজাইম যুক্ত চ্যানেল এবং কোষের ম্যাগনেসিয়ামের মাত্রা নিখুঁতভাবে পরিমাপ করে শোষণ নিয়ন্ত্রণ করে [৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Molecular Osteoblast-Osteoclast Cross-Talk and Osteoprotegerin', '৪. অস্টিওব্লাস্ট-অস্টিওক্ল্যাস্ট আণবিক মিথস্ক্রিয়া ও অস্টিওপ্রোটেজেরিন'),
          paragraphs: [
            l(
              'The Basic Multicellular Unit (BMU) couples osteoclastic bone resorption with osteoblastic bone formation through the canonical RANKL-RANK-OPG signaling triad [2]. Receptor Activator of Nuclear Factor-kappa B Ligand (RANKL / TNFSF11) is synthesized by osteoblasts and osteocytes as both a membrane-bound and soluble cytokine [2]. RANKL binds its cognate receptor RANK (TNFRSF11A) on the surface of monocyte/macrophage-derived osteoclast precursors [2].',
              'হাড়ের পুনর্গঠন সম্পন্ন হয় BMU ইউনিটে অস্টিওব্লাস্ট ও অস্টিওক্ল্যাস্টের পারস্পরিক আণবিক সংকেতের মাধ্যমে [২]। অস্টিওব্লাস্ট কোষ RANKL নামক সংকেত প্রোটিন তৈরি করে [২]। এই RANKL রক্তকণিকা থেকে আসা অস্টিওক্ল্যাস্টের পূর্বসূরী কোষের গায়ে থাকা RANK রিসেপ্টরের সাথে যুক্ত হয় [২]।'
            ),
            l(
              'RANK trimerization recruits adaptor protein TRAF6, activating downstream NF-kB, c-Fos, and the master osteoclastogenic transcription factor NFATc1 [2]. Activated multinucleated osteoclasts seal onto bone matrix via alpha-v-beta-3 integrins, secreting hydrochloric acid (via vacuolar H+-ATPase) and Cathepsin K to dissolve hydroxyapatite and cleave type I collagen [2]. Osteoblasts tightly regulate this destructive process by secreting Osteoprotegerin (OPG / TNFRSF11B), a soluble decoy receptor that binds RANKL with high affinity, physically blocking it from engaging RANK and terminating osteoclastogenesis [2].',
              'RANK রিসেপ্টর উদ্দীপিত হলে কোষে NF-kB ও NFATc1 সক্রিয় হয়ে একাধিক কোষ একত্রিত হয়ে বিশাল অস্টিওক্ল্যাস্ট তৈরি করে [২]। এরা অস্থির গায়ে এঁটে বসে হাইড্রোক্লোরিক অ্যাসিড ও ক্যাথেপসিন কে এনজাইম ঢেলে কোলাজেন ও হাইড্রোক্সিঅ্যাপাটাইট স্ফটিক গলিয়ে গর্ত তৈরি করে [২]। অস্টিওব্লাস্ট এই ধ্বংসযজ্ঞ থামাতে OPG প্রোটিন ক্ষরণ করে, যা RANKL কে মাঝপথেই আটকে দিয়ে অস্টিওক্ল্যাস্টের কাজ বন্ধ করে দেয় [২]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Laboratory Differential Diagnosis of Metabolic Bone Diseases', '৫. মেটাবলিক বোন ডিজিজের ল্যাবরেটরি রোগনির্ণয়'),
          paragraphs: [
            l(
              'Biochemical profiles distinguish the major metabolic bone diseases with high fidelity [1, 2]. Primary hyperparathyroidism presents with elevated serum calcium, suppressed or low-normal phosphate, elevated or inappropriately normal intact PTH, and hypercalciuria [1, 5]. Secondary hyperparathyroidism (most commonly due to chronic kidney disease or severe vitamin D deficiency) presents with low or normal calcium, elevated PTH, and high phosphate (in renal failure) or low phosphate (in nutritional rickets) [1, 3].',
              'রক্তের বায়োকেমিক্যাল পরীক্ষা প্রধান মেটাবলিক বোন ডিজিজগুলোকে নিখুঁতভাবে আলাদা করে [১, ২]। প্রাইমারি হাইপারপ্যারাথাইরয়েডিজমে ক্যালসিয়াম বেশি, ফসফেট কম এবং PTH অস্বাভাবিক বেশি থাকে [১, ৫]। কিন্তু কিডনি রোগ বা ভিটামিন ডি ঘাটতিজনিত সেকেন্ডারি হাইপারপ্যারাথাইরয়েডিজমে ক্যালসিয়াম কম বা স্বাভাবিক থাকে এবং PTH অতিরিক্ত বৃদ্ধি পায় [১, ৩]।'
            ),
            l(
              'In postmenopausal osteoporosis, routine serum calcium, phosphate, PTH, and alkaline phosphatase are typically entirely normal, because osteoporosis represents a quantitative uncoupling of bone mass without a defect in mineral matrix crystallization [2]. In contrast, osteomalacia / rickets represents a qualitative failure of osteoid mineralization, characterized by elevated total and bone-specific alkaline phosphatase (BALP), low 25(OH)D, elevated PTH, and low serum phosphate [1, 2].',
              'পোস্টমেনোপজাল অস্টিওপোরোসিসে রক্তের ক্যালসিয়াম, ফসফেট ও ক্ষারীয় ফসফেটেজ (ALP) সম্পূর্ণ স্বাভাবিক থাকে; কারণ এখানে খনিজের কোনো ত্রুটি নেই, কেবল হাড়ের পরিমাণ কমে গেছে [২]। কিন্তু অস্টিওম্যালাসিয়া বা রিকেটস রোগে হাড়ে ক্যালসিয়াম জমতেই পারে না; ফলে রক্তে বোন অ্যালকালাইন ফসফেটেজ (BALP) ও PTH অনেক বেশি থাকে এবং ভিটামিন ডি ও ফসফেট মারাত্মক কম থাকে [১, ২]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Summary: Tripartite Macromineral Dynamics', '৬. প্রাতিষ্ঠানিক সারাংশ: ত্রিপাক্ষিক ম্যাক্রোমিনারেল গতিবিদ্যা'),
          paragraphs: [
            l(
              'The macrominerals calcium, phosphorus, and magnesium constitute a tightly integrated structural, enzymatic, and electrophysiological triad [1, 4]. Extracellular calcium is defended by the parathyroid CaSR-PTH loop, skeletal phosphate flux is balanced by the osteocyte FGF23-Klotho axis, and intracellular magnesium provides the absolute energetic bridge (Mg-ATP2-) for kinase activity and parathyroid secretion [3, 4, 5].',
              'ক্যালসিয়াম, ফসফরাস ও ম্যাগনেসিয়াম মানবদেহে একটি অবিচ্ছেদ্য ত্রিপাক্ষিক সমন্বয় গড়ে তোলে [১, ৪]। ক্যালসিয়াম সুরক্ষিত থাকে প্যারাথাইরয়েডের CaSR-PTH লুপ দ্বারা, ফসফেট নিয়ন্ত্রিত হয় হাড়ের FGF23-Klotho অক্ষ দ্বারা এবং ম্যাগনেসিয়াম কোষের সমস্ত এটিপি শক্তি ও প্যারাথাইরয়েড হরমোন ক্ষরণের সেতু হিসেবে কাজ করে [৩, ৪, ৫]।'
            ),
            l(
              'Clinical evaluation of skeletal and electrolyte pathology requires concurrent assessment of all three minerals alongside their regulatory hormones (PTH, calcitriol, FGF23), recognizing that targeting the RANKL-OPG axis with antiresorptive pharmacology preserves skeletal density in osteoporotic fracture prevention [2, 3, 5].',
              'কঙ্কাল ও ইলেক্ট্রোলাইটের রোগ নির্ণয়ে এই তিনটি মিনারেল এবং তাদের সংশ্লিষ্ট হরমোনগুলো (PTH, ভিটামিন ডি, FGF23) একসাথে পরীক্ষা করা আবশ্যক; এবং RANKL-OPG অক্ষকে ওষুধ দিয়ে নিয়ন্ত্রণ করে অস্টিওপোরোসিসের মারাত্মক হাড় ভাঙা প্রতিরোধ করা সম্ভব [২, ৩, ৫]।'
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
          heading: l('1. Allosteric CaSR Modulation, Calcimimetics & Familial Hypocalciuric Hypercalcemia', '১. CaSR অ্যালোস্টেরিক নিয়ন্ত্রণ ও FHH সিন্ড্রোম'),
          paragraphs: [
            l(
              'The structural pharmacology of the Calcium-Sensing Receptor (CaSR) has elucidated the mechanism of positive allosteric modulators known as calcimimetics (such as cinacalcet and etelcalcetide) [5]. Cinacalcet binds within the transmembrane 7-helical bundle of CaSR, altering the tertiary conformation to lower the threshold of extracellular Ca2+ required for receptor activation (shifting the EC50 from ~1.25 mmol/L down to ~0.8 mmol/L) [5]. This suppresses PTH transcription and secretion in secondary hyperparathyroidism without increasing serum calcium [5].',
              'CaSR রিসেপ্টরের আণবিক গবেষণায় ক্যালসিমাইমেটিক্স জাতীয় ওষুধের (যেমন সিনাক্যালসেট) চমৎকার ভূমিকা স্পষ্ট হয়েছে [৫]। এই ওষুধটি রিসেপ্টরের ভেতরের অংশে যুক্ত হয়ে এর গঠন এমনভাবে বদলে দেয় যাতে রক্তে ক্যালসিয়াম কম থাকলেও রিসেপ্টর মনে করে ক্যালসিয়াম অনেক বেশি আছে [৫]। এর ফলে কিডনি ফেইলিউরের রোগীদের ক্ষতিকর PTH নিঃসরণ দ্রুত বন্ধ হয়ে যায় [৫]।'
            ),
            l(
              'Conversely, genetic loss-of-function mutations in the CASR gene cause Familial Hypocalciuric Hypercalcemia (FHH), an autosomal dominant condition characterized by lifelong asymptomatic hypercalcemia, inappropriately normal or mildly elevated PTH, and a low urinary calcium-to-creatinine clearance ratio (< 0.01) [5]. Because the parathyroid set-point is shifted to the right, parathyroidectomy fails to normalize calcium and is strictly contraindicated, differentiating FHH from surgical primary hyperparathyroidism [5].',
              'বিপরীতে CASR জিনের জন্মগত মিউটেশনে ফ্যামিলিয়াল হাইপোক্যালসিউরিক হাইপারক্যালসেমিয়া (FHH) রোগ হয় [৫]। এদের প্যারাথাইরয়েড গ্রন্থি ক্যালসিয়াম সেন্সিং ক্ষমতা হারিয়ে ফেলে বেশি মাত্রায় ক্যালসিয়ামকে স্বাভাবিক মনে করে; তাই রক্তে ক্যালসিয়াম বেশি থাকা সত্ত্বেও কিডনি দিয়ে কোনো ক্যালসিয়াম প্রস্রাবে বের হয় না [৫]। এই রোগীদের ভুল করে প্যারাথাইরয়েড অপারেশন করা সম্পূর্ণ নিষিদ্ধ [৫]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. FGF23 Cleavage Genetics, GALNT3 & Tumoral Calcinosis', '২. FGF23 বিভাজন জিনবিজ্ঞান ও টিউমারাল ক্যালসিনোসিস'),
          paragraphs: [
            l(
              'Post-translational processing of FGF23 dictates its endocrine potency [3]. Intact biologically active FGF23 (iFGF23) possesses a conserved consensus furin-like proprotein convertase cleavage motif (176-RHTR-179) [3]. Cleavage at this site by furin produces inactive N-terminal and C-terminal fragments, abolishing phosphaturic activity [3]. The O-glycosyltransferase GALNT3 protects intact FGF23 from furin cleavage by O-glycosylating Thr178 [3].',
              'FGF23 হরমোনের কার্যকারিতা এর প্রোটিন বিভাজনের ওপর নির্ভর করে [৩]। অক্ষত FGF23 হরমোনের মধ্যে ফিউরিন এনজাইম কাটার একটি বিশেষ সংকেত থাকে [৩]। ফিউরিন এনজাইম এই অংশে কেটে ফেললে হরমোনটি নিষ্ক্রিয় হয়ে যায়; আর GALNT3 এনজাইম থ্রিওনিন অ্যামিনো অ্যাসিডে সুগার লাগিয়ে একে ফিউরিনের কাটার হাত থেকে বাঁচিয়ে রাখে [৩]।'
            ),
            l(
              'Mutations in GALNT3 or FGF23 that abolish glycosylation permit unrestrained furin cleavage, causing Familial Tumoral Calcinosis characterized by severe FGF23 deficiency, profound hyperphosphatemia, high calcitriol, and massive ectopic calcified periarticular tumors [3]. Conversely, gain-of-function mutations in the cleavage motif (e.g., Arg176Gln or Arg179Trp in Autosomal Dominant Hypophosphatemic Rickets) render FGF23 resistant to furin, flooding circulation with intact FGF23, inducing renal phosphate wasting and severe rickets [3].',
              'GALNT3 নষ্ট হলে FGF23 অতি দ্রুত কেটে নষ্ট হয়ে যায়; ফলে রক্তে ফসফেট অসম্ভব বেড়ে গিয়ে অস্থিসন্ধির চারপাশে বিশাল পাথরের মতো টিউমার গজায় (টিউমারাল ক্যালসিনোসিস) [৩]। আবার FGF23 জিনের বিশেষ মিউটেশনে যদি এটি ফিউরিন দ্বারা কাটাই না যায়, তবে রক্তে অতিরিক্ত হরমোন জমে গিয়ে কিডনি দিয়ে সব ফসফেট বেরিয়ে রিকেটস রোগ সৃষ্টি করে [৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. TRPM6/7 Heteromultimerization and C-Terminal Kinase Signaling', '৩. TRPM6/7 চ্যানেল গঠন ও কাইনেজ সংকেত পরিবহন'),
          paragraphs: [
            l(
              'Molecular electrophysiology of the Transient Receptor Potential Melastatin 6 and 7 (TRPM6 and TRPM7) channels reveals that they form functional heterotetrameric channel-kinase complexes [4]. TRPM6 is expressed exclusively in intestinal enterocytes and renal distal convoluted tubule cells, whereas TRPM7 is ubiquitously expressed in all cell types and is required for fundamental cellular survival [4].',
              'TRPM6 এবং TRPM7 চ্যানেলগুলো কোষের মেমব্রেনে চারটি সাবইউনিটের সমন্বয়ে জটিল চ্যানেল-কাইনেজ হিসেবে কাজ করে [৪]। TRPM6 কেবল অন্ত্রের কোষ ও কিডনির দূরবর্তী নালীতে থাকে, আর TRPM7 দেহের প্রতিটি কোষে বেঁচে থাকার জন্য মৌলিক উপাদান হিসেবে কাজ করে [৪]।'
            ),
            l(
              'The C-terminal atypical alpha-kinase domain of TRPM6 phosphorylates downstream target serine/threonine residues on cytoskeletal annexin A1 and nuclear histones, modulating channel opening probability in response to intracellular free Mg2+ and Mg-ATP levels [4]. Loss-of-function mutations in TRPM6 cause Hypomagnesemia with Secondary Hypocalcemia (HSH), where failure of apical Mg2+ entry in both intestine and kidney collapses systemic magnesium pools, paralyzing parathyroid hormone secretion and precipitating refractory infantile seizures [4].',
              'TRPM6-এর পেছনের কাইনেজ অংশটি কোষের ভেতরে ম্যাগনেসিয়ামের মাত্রা মেপে চ্যানেল খোলা বা বন্ধ রাখার কাজ পরিচালনা করে [৪]। এই জিনে জন্মগত ত্রুটি থাকলে অন্ত্র ও কিডনি দিয়ে ম্যাগনেসিয়াম শোষণ বন্ধ হয়ে গিয়ে নবজাতক শিশুদের মারাত্মক খিঁচুনি দেখা দেয়, যা সঠিক সময়ে ম্যাগনেসিয়াম ইনজেকশন না দিলে প্রাণঘাতী হয় [৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Osteoclast Acidification Vacuoles and Cathepsin K Enzymology', '৪. অস্টিওক্ল্যাস্ট অ্যাসিডিক ভ্যাকুওল ও ক্যাথেপসিন কে এনজাইম'),
          paragraphs: [
            l(
              'The mechanical dissolution of mineralized bone matrix by mature osteoclasts requires the assembly of a specialized extracellular microenvironment known as the sealed resorption lacuna (Howship’s lacuna) [2]. Osteoclasts polarize upon bone contact, forming an actin-rich sealing ring mediated by integrin alpha-v-beta-3 binding to matrix vitronectin and osteopontin [2]. Within this ring, the plasma membrane folds into an extensive ruffled border packed with vacuolar-type H+-ATPases (V-ATPase) and chloride-proton antiporters (ClC-7) [2].',
              'হাড় কাটার সময় অস্টিওক্ল্যাস্ট কোষ অস্থির গায়ে সিলের মতো আটকে গিয়ে একটি বদ্ধ গর্ত (হাওশিপ্স ল্যাকুনা) তৈরি করে [২]। অস্টিওক্ল্যাস্ট কোষের পর্দা ঢেউয়ের মতো ভাঁজ হয়ে রাফেল্ড বর্ডার তৈরি করে, যার মধ্যে প্রচুর পরিমাণ প্রোটন পাম্প (V-ATPase) এবং ক্লোরাইড চ্যানেল থাকে [২]।'
            ),
            l(
              'Intracellular carbonic anhydrase II (CAII) generates protons (H+) and bicarbonate from CO2 and water. V-ATPases pump H+ into the lacuna, while ClC-7 pumps Cl-, acidifying the lacunar space down to pH 4.5 [2]. This low pH completely dissolves inorganic hydroxyapatite crystals, unmasking the organic collagen scaffold [2]. Concurrently, osteoclasts exocytose Cathepsin K, a lysosomal cysteine protease optimally active at acidic pH, which hydrolyzes triple-helical type I collagen at multiple sites, liberating telopeptides (CTX-1 and NTX-1) into circulation as clinical biomarkers of bone resorption [2].',
              'কার্বনিক অ্যানহাইড্রেজ II এনজাইম পানি ও কার্বন ডাই-অক্সাইড থেকে অ্যাসিড প্রোটন তৈরি করে, যা পাম্পের মাধ্যমে গর্তের মধ্যে ফেলে পিএইচ ৪.৫-এ নামিয়ে আনে [২]। এই তীব্র অ্যাসিডে পাথরের মতো হাইড্রোক্সিঅ্যাপাটাইট গলে যায় [২]। এরপর ক্যাথেপসিন কে এনজাইম কোলাজেনের দড়িগুলোকে টুকরো টুকরো করে কেটে রক্তে ফেলে দেয় (CTX-1), যা রক্ত পরীক্ষা করে চিকিৎসকরা হাড় ক্ষয়ের গতি পরিমাপ করেন [২]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Complex Pathophysiology: Osteopetrosis, TIO & Hungry Bone Syndrome', '৫. জটিল রোগতত্ত্ব: অস্টিওপেট্রোসিস, টিউমার রিকেটস ও হাংরি বোন সিন্ড্রোম'),
          paragraphs: [
            l(
              'Contrasting pathologies illustrate extreme failures of bone remodeling [2]. In infantile malignant osteopetrosis, autosomal recessive mutations in the TCIRG1 gene (encoding the a3 subunit of the osteoclast V-ATPase) or the CLCN7 gene prevent osteoclastic acid secretion [2]. Bone cannot be resorbed; dense, brittle, unremodeled marble bone fills marrow spaces, obliterating hematopoiesis (severe pancytopenia) and impinging cranial nerves, resulting in blindness and deafness [2].',
              'অস্থি পুনর্গঠনের চরম বিপর্যয়ে অস্টিওপেট্রোসিস রোগ হয়, যাতে TCIRG1 জিনের ত্রুটিতে অস্টিওক্ল্যাস্ট আর অ্যাসিড ক্ষরণ করতে পারে না [২]। ফলে কোনো পুরানো হাড় ভাঙা যায় না এবং হাড় পাথরের মতো অসম্ভব ঘন হয়ে অস্থিমজ্জা বন্ধ করে দেয়; এতে রক্ত তৈরি বন্ধ হয়ে যায় এবং স্নায়ু চেপে গিয়ে শিশু অন্ধ ও বধির হয়ে যায় [২]।'
            ),
            l(
              'Conversely, following parathyroidectomy for severe primary hyperparathyroidism, sudden cessation of high PTH levels precipitates Hungry Bone Syndrome [1, 5]. With osteoclasts silenced, osteoblasts continue rampant osteoid matrix synthesis, driving massive, voracious influx of calcium, phosphate, and magnesium into the skeletal framework [5]. Patients develop profound, life-threatening tetany and hypocalcemia requiring intensive intravenous mineral replacement spanning weeks [5].',
              'বিপরীতে প্যারাথাইরয়েড অপারেশনের পর হাংরি বোন সিন্ড্রোম দেখা দেয় [১, ৫]। হঠাৎ PTH বন্ধ হয়ে যাওয়ায় অস্টিওক্ল্যাস্ট থেমে যায় কিন্তু ক্ষুধার্ত হাড় রক্ত থেকে সমস্ত ক্যালসিয়াম, ফসফেট ও ম্যাগনেসিয়াম নিজের ভেতরে শুষে নিতে থাকে [৫]। ফলে রক্তে ক্যালসিয়াম ও ম্যাগনেসিয়াম আকস্মিক শূন্যের কোঠায় নেমে গিয়ে তীব্র খিঁচুনি হয়, যার জন্য রোগীকে কয়েক সপ্তাহ ধরে শিরায় স্যালাইনের মাধ্যমে মিনারেল দিতে হয় [৫]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Horizons: Sclerostin Neutralization and Calcilytics', '৬. অনুবাদমূলক গবেষণা: স্ক্লেরোস্টিন থেরাপি ও ক্যালসিলাইটিক্স'),
          paragraphs: [
            l(
              'Therapeutic revolutions in metabolic bone disease focus on targeted biologicals that decouple bone formation from resorption [2]. Sclerostin, a secreted glycoprotein produced exclusively by osteocytes, binds LRP5/6 coreceptors on osteoblasts to inhibit the canonical Wnt/beta-catenin signaling pathway, terminating bone formation [2]. Romosozumab, a humanized monoclonal antibody targeting sclerostin, unblocks Wnt signaling, driving rapid, dual-action anabolic bone formation while concurrently suppressing bone resorption, achieving unprecedented bone mineral density increases in high-fracture-risk osteoporosis [2].',
              'অস্টিওপোরোসিসের সর্বাধুনিক চিকিৎসায় স্ক্লেরোস্টিন-দমনকারী রোমোসোজুম্যাব অ্যান্টিবডি একটি যুগান্তকারী বিপ্লব ঘটিয়েছে [২]। অস্থির কোষ থেকে ক্ষরিত স্ক্লেরোস্টিন স্বাভাবিকভাবে হাড় গঠন বন্ধ করে রাখে; এই ওষুধটি স্ক্লেরোস্টিনকে আটকে দিয়ে হাড়ের Wnt সংকেত খুলে দেয়, যার ফলে হাড় ক্ষয় পুরোপুরি থেমে গিয়ে অসম্ভব দ্রুত নতুন হাড় তৈরি হতে থাকে এবং হাড়ের শক্তি বহুগুণ বেড়ে যায় [২]।'
            ),
            l(
              'In parallel, calcilytics (negative allosteric modulators of the CaSR) are under active investigation to stimulate endogenous, pulsatile PTH secretion for anabolic bone synthesis, while anti-FGF23 monoclonal antibodies (burosumab) restore phosphate conservation and heal rickets in X-linked hypophosphatemia [3, 5].',
              'একই সাথে রক্তে ফসফেট বৃদ্ধির জন্য ক্ষতিকর FGF23 দমনকারী বুরোসুম্যাব ওষুধ এক্স-লিংকড রিকেটস রোগের শিশুদের সম্পূর্ণ সুস্থ করে তুলছে এবং ক্যালসিলাইটিক্স ওষুধ হাড়ের চিকিৎসায় নতুন দিগন্ত উন্মোচন করছে [৩, ৫]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential tripartite macromineral and skeletal remodeling network: Parathyroid CaSR sensing, renal DCT TRPV5/NCX1 calcium reclamation, osteocyte FGF23-Klotho phosphaturia, magnesium TRPM6 channel biology, and the osteoblast-osteoclast RANKL-OPG bone remodeling unit.',
      'পর্যায়ক্রমিক ত্রিপাক্ষিক ম্যাক্রোমিনারেল ও কঙ্কাল পুনর্গঠন নেটওয়ার্ক: প্যারাথাইরয়েড CaSR সংবেদন, কিডনির TRPV5/NCX1 ক্যালসিয়াম পুনঃশোষণ, অস্টিওসাইট FGF23-Klotho ফসফেট নিষ্কাশন, ম্যাগনেসিয়াম TRPM6 চ্যানেল এবং RANKL-OPG হাড় পুনর্গঠন ইউনিট।'
    ),
    steps: [
      l(
        'Step 1: Parathyroid chief cell CaSR senses falling ionized calcium, releasing tonic inhibition to exocytose Parathyroid Hormone (PTH) into systemic circulation within seconds.',
        'ধাপ ১: প্যারাথাইরয়েড CaSR ক্যালসিয়ামের পতন টের পাওয়া মাত্রই সেকেন্ডের মধ্যে রক্তে প্যারাথাইরয়েড হরমোন (PTH) ছড়িয়ে দেয়।'
      ),
      l(
        'Step 2: PTH upregulates distal convoluted tubule apical TRPV5 channels and basolateral NCX1 exchangers, reclaiming filtered calcium into peritubular capillaries.',
        'ধাপ ২: PTH কিডনির দূরবর্তী নালীতে TRPV5 চ্যানেল ও NCX1 পাম্প চালু করে প্রস্রাব থেকে ক্যালসিয়াম রক্তে ফিরিয়ে আনে।'
      ),
      l(
        'Step 3: High circulating phosphate stimulates osteocytes to secrete FGF23, which binds renal Klotho-FGFR1 to internalize NaPi-IIa cotransporters, inducing therapeutic phosphaturia.',
        'ধাপ ৩: রক্তে ফসফেট বাড়লে হাড়ের অস্টিওসাইট FGF23 ক্ষরণ করে যা কিডনির Klotho প্রোটিনের সাহায্যে অতিরিক্ত ফসফেট প্রস্রাবে বের করে দেয়।'
      ),
      l(
        'Step 4: Divalent magnesium absorbed via TRPM6 coordinates intracellular ATP as the Mg-ATP2- chelate, driving cell kinases and enabling parathyroid hormone exocytosis.',
        'ধাপ ৪: TRPM6 চ্যানেলে শোষিত ম্যাগনেসিয়াম এটিপির সাথে Mg-ATP2- বন্ধন তৈরি করে কোষের কাইনেজ ও প্যারাথাইরয়েড গ্রন্থিকে সচল রাখে।'
      ),
      l(
        'Step 5: Osteoblast RANKL binds pre-osteoclast RANK to drive bone resorption, while soluble Osteoprotegerin (OPG) acts as a neutralizing decoy to preserve skeletal density.',
        'ধাপ ৫: অস্টিওব্লাস্টের RANKL অস্টিওক্ল্যাস্টকে হাড় কাটতে নির্দেশ দেয়, আর OPG প্রোটিন এই সংকেত আটকে দিয়ে কঙ্কালের শক্তি ও ঘনত্ব বজায় রাখে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 68-year-old postmenopausal woman with severe osteoporosis (lumbar spine T-score = -3.4) sustains a vertebral compression fracture while lifting a light grocery bag. Her laboratory evaluation reveals completely normal serum calcium, phosphate, PTH, and alkaline phosphatase. Which cellular mechanism explains the pathophysiology of her fracture despite normal routine mineral blood tests?',
      'তীব্র অস্টিওপোরোসিসে আক্রান্ত এক ৬৮ বছর বয়সী নারী সামান্য বাজারের ব্যাগ তুলতে গিয়ে মেরুদণ্ডের হাড়ে ফ্র্যাকচার বাঁধিয়েছেন। রক্ত পরীক্ষায় সিরাম ক্যালসিয়াম, ফসফেট, PTH এবং অ্যালকালাইন ফসফেটেজ সম্পূর্ণ স্বাভাবিক পাওয়া গেছে। রক্তে মিনারেল স্বাভাবিক থাকা সত্ত্বেও কোন কোষীয় ত্রুটি এই হাড় ভাঙার সঠিক ব্যাখ্যা?'
    ),
    options: [
      l(
        'Estrogen deficiency downregulates osteoblast Osteoprotegerin (OPG) secretion, leaving RANKL uninhibited to accelerate osteoclast-mediated bone resorption, causing quantitative loss of structurally intact trabecular bone without altering serum mineral concentrations.',
        'ইস্ট্রোজেনের অভাবে অস্টিওব্লাস্টের OPG প্রোটিন তৈরি কমে গেছে; ফলে RANKL বাধাহীনভাবে অস্টিওক্ল্যাস্টকে অতিরিক্ত হাড় কাটতে বাধ্য করে হাড়ের মোট ভর কমিয়ে ফেলেছে, যা রক্তের খনিজ স্বাভাবিক রেখেই হাড়ের কাঠামো ভঙ্গুর করে তোলে।'
      ),
      l(
        'Renal 1-alpha-hydroxylase (CYP27B1) is completely inactivated, preventing active transcellular calcium absorption via TRPV6.',
        'কিডনির ১-আলফা-হাইড্রক্সিলেজ বন্ধ হয়ে যাওয়ায় অন্ত্রে TRPV6 চ্যানেল দিয়ে ক্যালসিয়াম শোষণ হতে পারছে না।'
      ),
      l(
        'Osteocytes hypersecrete FGF23, which paralyzes renal Klotho receptors and induces severe hypercalcemic osteosclerosis.',
        'অস্টিওসাইট অতিরিক্ত FGF23 ক্ষরণ করে কিডনির Klotho নষ্ট করে দিয়েছে এবং রক্তে ক্যালসিয়াম বাড়িয়ে দিয়েছে।'
      ),
      l(
        'TRPM6 channels in the distal convoluted tubule are genetically deleted, precipitating acute hypomagnesemic parathyroid failure.',
        'কিডনির দূরবর্তী নালীতে TRPM6 চ্যানেল নষ্ট হয়ে যাওয়ায় ম্যাগনেসিয়াম ফুরিয়ে প্যারাথাইরয়েড গ্রন্থি অকেজো হয়ে গেছে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Postmenopausal osteoporosis is a quantitative metabolic bone disease characterized by an uncoupling of the bone remodeling unit where osteoclast resorption exceeds osteoblast formation, thinning trabecular plates and predisposing to fragility fractures. Estrogen normally suppresses RANKL expression and upregulates the neutralizing decoy receptor Osteoprotegerin (OPG). Following menopause, estrogen deficiency eliminates this brake, allowing unchecked RANKL-RANK binding on osteoclast precursors to drive continuous osteoclastogenesis and bone resorption. Because the mineral phase that remains is normally crystallized (unlike the unmineralized osteoid of osteomalacia/rickets), homeostatic feedback loops maintain serum calcium, phosphate, and alkaline phosphatase within strict normal reference ranges. Normal blood tests are the hallmark of osteoporosis and must never be mistaken for skeletal health.',
      'পোস্টমেনোপজাল অস্টিওপোরোসিস হলো হাড়ের পরিমাণের এক নীরব ক্ষয়জনিত রোগ যেখানে অস্টিওক্ল্যাস্টের হাড় কাটা অস্টিওব্লাস্টের হাড় তৈরির চেয়ে অনেক বেশি হয়। সুস্থ অবস্থায় ইস্ট্রোজেন ক্ষতিকর RANKL দমন করে এবং সুরক্ষাকারী OPG প্রোটিন বাড়িয়ে রাখে। মেনোপজের পর ইস্ট্রোজেন কমে গেলে OPG হ্রাস পায় এবং RANKL বাধাহীনভাবে অস্টিওক্ল্যাস্ট তৈরি করে হাড় ক্ষয় করতে থাকে। কিন্তু যে হাড়টি অবশিষ্ট থাকে তার খনিজ স্ফটিকীকরণ স্বাভাবিক থাকে (রিকেটসের মতো খনিজহীন নয়); তাই রক্তে ক্যালসিয়াম, ফসফেট ও ক্ষারীয় ফসফেটেজ সম্পূর্ণ স্বাভাবিক দেখায়। রক্ত পরীক্ষা স্বাভাবিক থাকা অস্টিওপোরোসিসের একটি ক্লাসিক্যাল বৈশিষ্ট্য এবং এটি কখনোই সুস্থ হাড়ের প্রমাণ নয়।'
    ),
  },
}
