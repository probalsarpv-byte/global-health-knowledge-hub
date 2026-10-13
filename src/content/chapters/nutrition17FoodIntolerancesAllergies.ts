import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const allergyRefs = [
  {
    id: 'sicherer-jaci-food-allergy',
    authors: 'Scott H. Sicherer, Hugh A. Sampson',
    title: 'Food allergy: A review and update on epidemiology, pathogenesis, diagnosis, prevention, and management',
    organization: 'Journal of Allergy and Clinical Immunology',
    year: 2018,
    url: 'https://doi.org/10.1016/j.jaci.2017.11.003',
    doi: '10.1016/j.jaci.2017.11.003',
  },
  {
    id: 'misselwitz-gut-lactose-malabsorption',
    authors: 'Benjamin Misselwitz et al.',
    title: 'Update on lactose malabsorption and intolerance: pathogenesis, diagnosis and clinical management',
    organization: 'Gut',
    year: 2019,
    url: 'https://doi.org/10.1136/gutjnl-2019-318404',
    doi: '10.1136/gutjnl-2019-318404',
  },
  {
    id: 'lebwohl-lancet-celiac-disease',
    authors: 'Benjamin Lebwohl, David S. Sanders, Peter H. R. Green',
    title: 'Coeliac disease',
    organization: 'The Lancet',
    year: 2018,
    url: 'https://doi.org/10.1016/S0140-6736(17)31796-8',
    doi: '10.1016/S0140-6736(17)31796-8',
  },
  {
    id: 'sollid-nat-rev-celiac-immunology',
    authors: 'Ludvig M. Sollid, Bana Jabri',
    title: 'Triggers and drivers of autoimmunity: lessons from coeliac disease',
    organization: 'Nature Reviews Immunology',
    year: 2013,
    url: 'https://doi.org/10.1038/nri3407',
    doi: '10.1038/nri3407',
  },
  {
    id: 'shan-science-33mer-gliadin',
    authors: 'Lu Shan et al.',
    title: 'Structural basis for gluten intolerance in celiac sprue',
    organization: 'Science',
    year: 2002,
    url: 'https://doi.org/10.1126/science.1074129',
    doi: '10.1126/science.1074129',
  },
  {
    id: 'galli-nat-med-mast-cells-ige',
    authors: 'Stephen J. Galli, Mindy Tsai',
    title: 'IgE and mast cells in allergic disease',
    organization: 'Nature Medicine',
    year: 2012,
    url: 'https://doi.org/10.1038/nm.2755',
    doi: '10.1038/nm.2755',
  },
  {
    id: 'catassi-nutrients-ncgs-consensus',
    authors: 'Carlo Catassi et al.',
    title: 'Diagnosis of Non-Celiac Gluten Sensitivity (NCGS): The Salerno Experts\' Consensus',
    organization: 'Nutrients',
    year: 2015,
    url: 'https://doi.org/10.3390/nu7064966',
    doi: '10.3390/nu7064966',
  },
]

export const nutrition17FoodIntolerancesAllergiesLesson: LessonTopic = {
  id: 'topic.nutrition.food-intolerances-celiac-allergy',
  slug: 'food-intolerances-celiac-allergy',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '17 · Food Intolerances, Non-Celiac Gluten Sensitivity, Celiac Disease & Food Allergies',
    '১৭ · খাদ্যের অসহনশীলতা, নন-সিলিয়াক গ্লুটেন সংবেদনশীলতা, সিলিয়াক রোগ ও খাদ্য অ্যালার্জি'
  ),
  summary: l(
    'Differential immunopathology of food-induced adverse reactions: genetic lactase persistence (MCM6/LCT C/T-13910), IgE-mediated Type I hypersensitivity and mast cell degranulation, HLA-DQ2/8 autoimmune Celiac enteropathy with tTG-2 deamidation, and wheat ATI innate activation in non-celiac sensitivity.',
    'খাদ্যজনিত প্রতিকূল প্রতিক্রিয়ার রোগপ্রতিরোধগত ও বংশগত ভিত্তি: ল্যাকটেজ দীর্ঘস্থায়ী জিনতত্ত্ব (MCM6/LCT C/T-13910), আইজিই-নির্ভর প্রথম ধরনের অ্যালার্জি ও মাস্ট সেল ক্ষরণ, এইচএলএ-ডিকিউ২/৮ নির্ভর সিলিয়াক রোগ ও টিটিজি-২ রূপান্তর, এবং নন-সিলিয়াক গমের সংবেদনশীলতা।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Differentiate non-immune food intolerances, IgE-mediated food allergies, and autoimmune food-triggered enteropathies based on molecular pathophysiology and diagnostic testing.',
      'অ-প্রতিরোধমূলক খাদ্য অসহনশীলতা, আইজিই-নির্ভর অ্যালার্জি এবং অটোইমিউন এন্টারোপ্যাথির আণবিক পার্থক্য ও রোগ নির্ণয় পদ্ধতি ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Describe the molecular genetics of lactase persistence (MCM6 C/T-13910 polymorphism) and the physiological consequences of brush-border lactase-phlorizin hydrolase decline.',
      'ল্যাকটেজ জিনের বংশগত রূপান্তর (MCM6 C/T-13910) এবং এন্টারোসাইট ব্রাশ-বর্ডার ল্যাকটেজ হ্রাসের অন্ত্রীয় ফলাফল বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Detail the immunopathogenesis of Celiac Disease: 33-mer gliadin peptide resistance, tTG-2 deamidation, HLA-DQ2.5/8 binding, CD4+ Th1 activation, and IL-15/NKG2D enterocyte cytotoxicity.',
      'সিলিয়াক রোগের অনাক্রম্য প্রক্রিয়া: ৩৩-মার গ্লিয়াডিনের অবিকৃত থাকা, টিটিজি-২ ডিঅ্যামিডেশন, এইচএলএ-ডিকিউ২.৫ বন্ধন, টিএইচ১ সক্রিয়করণ এবং আইএল-১৫/এনকেজি২ডি কোষ ধ্বংস ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Formulate evidence-based clinical management strategies: strict gluten-free diet adherence, epinephrine autoinjector action in anaphylaxis, and structured hydrogen breath test interpretation.',
      'প্রমাণভিত্তিক চিকিৎসা রূপরেখা: শতভাগ গ্লুটেন-মুক্ত খাদ্যাভ্যাস, অ্যানাফিল্যাক্সিসে এপিনেফ্রিনের আণবিক ক্রিয়া এবং হাইড্রোজেন ব্রেথ টেস্টের ফলাফল বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.gut-barrier-mucosal-immunity', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.nutrition.gut-microbiome-metagenomics', 'topic.anatomy.digestive'],
  references: allergyRefs,
  evidenceBySection: {
    introduction: ['sicherer-jaci-food-allergy', 'misselwitz-gut-lactose-malabsorption'],
    structure: ['misselwitz-gut-lactose-malabsorption', 'lebwohl-lancet-celiac-disease'],
    mechanism: ['sollid-nat-rev-celiac-immunology', 'shan-science-33mer-gliadin'],
    integration: ['galli-nat-med-mast-cells-ige', 'catassi-nutrients-ncgs-consensus'],
    practice: ['sicherer-jaci-food-allergy', 'lebwohl-lancet-celiac-disease'],
    takeaways: ['sicherer-jaci-food-allergy', 'sollid-nat-rev-celiac-immunology'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Adverse Food Reactions: Classification & Paradigms', '১. খাদ্যজনিত বিরূপ প্রতিক্রিয়া: শ্রেণিবিভাগ ও মূল ধারণা'), sectionId: 'introduction' },
      { id: 'sec-lactase', label: l('2. Lactase Persistence Genetics & Breath Testing', '২. ল্যাকটেজ দীর্ঘস্থায়ী জিনতত্ত্ব ও শ্বাস পরীক্ষা'), sectionId: 'structure' },
      { id: 'sec-celiac', label: l('3. Celiac Disease: 33-mer Gliadin & HLA-DQ2.5 Autoimmunity', '৩. সিলিয়াক ডিজিজ: ৩৩-মার গ্লিয়াডিন ও HLA-DQ2.5 অটোইমিউনিটি'), sectionId: 'mechanism' },
      { id: 'sec-ige', label: l('4. IgE-Mediated Food Anaphylaxis & Mast Cell Signaling', '৪. আইজিই-নির্ভর খাদ্য অ্যালার্জি ও মাস্ট সেল ক্ষরণ'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('5. Clinical Workup & Gluten-Free Dietetics', '৫. ক্লিনিক্যাল রোগ নির্ণয় ও গ্লুটেন-মুক্ত খাদ্যবিধি'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('6. High-Yield Clinical Takeaways', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Lactase-Phlorizin Hydrolase (LPH)', 'ল্যাকটেজ-ফ্লোরিজিন হাইড্রোলেজ (LPH)'),
        definition: l(
          'A beta-galactosidase brush-border enzyme anchored in duodenal and jejunal enterocytes that hydrolyzes dietary lactose into D-glucose and D-galactose.',
          'ক্ষুদ্রান্ত্রের ব্রাশ-বর্ডারে অবস্থিত একটি বিটা-গ্যালাক্টোসিডেজ এনজাইম যা দুধের ল্যাকটোজকে গ্লুকোজ ও গ্যালাক্টোজে ভেঙে শোষণযোগ্য করে তোলে।'
        ),
      },
      {
        term: l('Tissue Transglutaminase 2 (tTG-2)', 'টিস্যু ট্রান্সগ্লুটামিনেজ ২ (tTG-2)'),
        definition: l(
          'A calcium-dependent cross-linking enzyme that converts neutral glutamine residues in gliadin peptides into negatively charged glutamic acid, accelerating HLA-DQ2.5 binding.',
          'একটি ক্যালসিয়াম-নির্ভর এনজাইম যা গ্লিয়াডিন পেপটাইডের নিরপেক্ষ গ্লুটামিনকে ঋণাত্মক গ্লুটামিক অ্যাসিডে রূপান্তর করে সিলিয়াক রোগের অনাক্রম্য প্রতিক্রিয়া তীব্র করে।'
        ),
      },
      {
        term: l('HLA-DQ2.5 & HLA-DQ8', 'এইচএলএ-ডিকিউ২.৫ ও এইচএলএ-ডিকিউ৮'),
        definition: l(
          'MHC Class II heterodimers whose positively charged P4, P6, P7, and P9 binding pockets accommodate negatively charged deamidated gliadin epitopes with high affinity for presentation to CD4+ T cells.',
          'প্রধান হিস্টোকম্প্যাটিবিলিটি ক্লাস ২ অণু, যার ধনাত্মক খাঁজে ঋণাত্মক গ্লিয়াডিন শক্তিশালীভাবে আটকে টি-সহায়ক কোষের কাছে উপস্থাপিত হয়।'
        ),
      },
      {
        term: l('Fc-epsilon-RI Cross-linking', 'Fc-অ্যাপসিলন-RI রিসেপ্টর বন্ধন'),
        definition: l(
          'The high-affinity IgE receptor complex on mast cells and basophils that triggers explosive cytosolic calcium influx and granule exocytosis upon bivalent allergen binding.',
          'মাস্ট সেল ও ব্যাসোফিলের অতি-সংবেদনশীল রিসেপ্টর যা অ্যালার্জেন যুক্ত হওয়ার সাথে সাথে ক্যালসিয়াম বাড়িয়ে হিস্টামিন ও প্রোস্টাগ্ল্যান্ডিন ক্ষরণ ঘটায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Diagnostic Workup of Suspected Celiac Disease vs Non-Celiac Wheat Sensitivity', 'সিলিয়াক ডিজিজ বনাম নন-সিলিয়াক গমের সংবেদনশীলতা নির্ণয়ের ক্লিনিক্যাল বিশ্লেষণ'),
        steps: [
          l(
            'Step 1: Clinical Presentation: A 28-year-old female presents with refractory iron-deficiency anemia (Hb 9.8 g/dL, ferritin 7 ng/mL), postprandial flatulence, and intermittent watery diarrhea. She suspects a gluten sensitivity and asks to start a gluten-free diet.',
            'ধাপ ১: রোগীর লক্ষণ: ২৮ বছর বয়সী নারী রক্তাল্পতা (হিমোগ্লোবিন ৯.৮, ফেরিটিন ৭), খাবার পর পেট ফাঁপা এবং ডায়রিয়ায় ভুগছেন। তিনি ধারণা করছেন গমের আটা বা গ্লুটেনে তাঁর সমস্যা হচ্ছে।'
          ),
          l(
            'Step 2: Mandatory Pre-Diet Serological Panel: Crucially advise the patient NOT to eliminate gluten prior to testing. Order total serum IgA (to exclude selective IgA deficiency, which occurs in 2-3% of Celiac patients) and anti-tissue transglutaminase IgA (anti-tTG IgA).',
            'ধাপ ২: খাদ্যাভ্যাস পরিবর্তনের পূর্বেই রক্ত পরীক্ষা: কোনোভাবেই গ্লুটেন বন্ধ করার আগে পরীক্ষা করা যাবে না। মোট আইজিএ (IgA) এবং অ্যান্টি-টিটিজি আইজিএ পরীক্ষা করা হলো।'
          ),
          l(
            'Step 3: Serological & Endoscopic Confirmation: Anti-tTG IgA returns markedly positive (>100 U/mL, >10x upper limit of normal). Endoscopic esophagogastroduodenoscopy with 4 duodenal bulb and second-part biopsies reveals Marsh IIIc total villous atrophy, crypt hyperplasia, and intraepithelial lymphocytosis (>40 IELs per 100 enterocytes).',
            'ধাপ ৩: বায়োপসি ও রোগ নিশ্চিতকরণ: রক্তে অ্যান্টি-টিটিজি ১০ গুণের বেশি পজিটিভ। এন্ডোস্কোপি করে বায়োপসিতে দেখা গেল অন্ত্রের শোষণকারী ভিলি সম্পূর্ণ ধ্বংস হয়ে গেছে (Marsh IIIc)। সিলিয়াক রোগ নিশ্চিত হলো।'
          ),
          l(
            'Step 4: Dietary Prescription & Surveillance: Prescribe a lifelong, strict gluten-free diet (<20 ppm gluten threshold). Re-evaluate serology at 6 and 12 months, supplement oral iron bisglycinate and active vitamin D, and arrange dual-energy X-ray absorptiometry (DXA) for metabolic bone density screening.',
            'ধাপ ৪: চিকিৎসা পরিকল্পনা: আজীবন ১০০% গ্লুটেন-মুক্ত খাবার নিশ্চিত করা (<২০ পিপিএম)। ৬ মাস পর পুনরায় রক্ত পরীক্ষা, ভিটামিন ডি ও আয়রন গ্রহণ এবং হাড়ের ক্ষয় নির্ণয়ে ডিএক্সএ (DXA) স্ক্যান করা।'
          ),
        ],
        conclusion: l(
          'Testing prior to gluten withdrawal prevents false-negative serologies and distinguishes lifelong autoimmune Celiac disease requiring absolute strictness from transient non-celiac sensitivities.',
          'খাবার বন্ধ করার আগেই অ্যান্টিবডি পরীক্ষা করলে রোগ ভুলভাবে বাদ পড়ার ঝুঁকি থাকে না এবং আজীবন অটোইমিউন সিলিয়াক ও সাধারণ অসহনশীলতার সঠিক পার্থক্য নির্ণয় হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does tissue transglutaminase 2 (tTG-2) deamidation exponentially increase the immunogenicity of dietary gluten in HLA-DQ2.5 positive individuals?',
          'টিস্যু ট্রান্সগ্লুটামিনেজ ২ (tTG-2) কীভাবে গ্লিয়াডিনকে রূপান্তরিত করে HLA-DQ2.5 পজিটিভ ব্যক্তিদের দেহে মারাত্মক অনাক্রম্য আক্রমণ তৈরি করে?'
        ),
        answer: l(
          'Dietary gluten contains high fractions of glutamine and proline. The primary HLA-DQ2.5 peptide-binding groove possesses positively charged basic residues at the P4, P6, P7, and P9 anchor pockets. Native neutral glutamine residues in gliadin fit poorly into these pockets. tTG-2 catalyzes a calcium-dependent post-translational deamidation that converts neutral glutamine into negatively charged glutamic acid. The resulting negative charge forms stable, high-affinity electrostatic salt bridges with the basic HLA-DQ2.5 pockets, dramatically enhancing presentation to CD4+ T helper cells and triggering robust Th1 inflammatory cascades.',
          'গ্লুটেনে প্রচুর গ্লুটামিন থাকে যা বিদ্যুৎ নিরপেক্ষ হওয়ায় HLA-DQ2.5 এর ধনাত্মক খাঁজে সহজে আটকায় না। tTG-2 এনজাইম ক্যালসিয়ামের সহায়তায় এই নিরপেক্ষ গ্লুটামিনকে ঋণাত্মক গ্লুটামিক অ্যাসিডে রূপান্তর করে। এই ঋণাত্মক আধান HLA-DQ2.5 এর ধনাত্মক অংশের সাথে শক্তিশালী আয়নিক বন্ধন তৈরি করে টি-সহায়ক কোষের কাছে প্রবলভাবে উপস্থাপিত হয় এবং প্রদাহের সৃষ্টি করে।'
        ),
      },
      {
        question: l(
          'What physiological mechanism explains why lactase non-persistent individuals can often tolerate up to 12 grams of lactose (approximately 250 mL of milk) when consumed alongside a mixed meal?',
          'ল্যাকটোজ অসহনশীল ব্যক্তিরা একটি ভারী খাবারের সাথে এক গ্লাস দুধ (প্রায় ১২ গ্রাম ল্যাকটোজ) খেলে কোনো লক্ষণ ছাড়াই কেন তা হজম করতে পারেন?'
        ),
        answer: l(
          'A mixed meal containing dietary lipids, complex proteins, and soluble fibers stimulates the release of cholecystokinin (CCK) and Peptide YY (PYY), which activate the ileal break and substantially decelerate gastric emptying. The slowed gastric emptying delivers lactose into the duodenum at a markedly reduced rate per unit time. This gradual transit allows residual brush-border lactase to hydrolyze a higher percentage of the substrate and permits the distal colonic microbiome to adaptively metabolize unabsorbed lactose without exceeding osmotic or gas-handling thresholds.',
          'ভারী খাবারের চর্বি ও আমিষ পাকস্থলী খালি হওয়ার গতিকে অনেক কমিয়ে দেয় (CCK ও PYY হরমোনের মাধ্যমে)। এর ফলে দুধের ল্যাকটোজ একবারে অন্ত্রে না গিয়ে ফোঁটায় ফোঁটায় ধীরে ধীরে ক্ষুদ্রান্ত্রে প্রবেশ করে। এতে অবশিষ্ট সামান্য ল্যাকটেজ এনজাইমই তা হজম করে ফেলে এবং বৃহদন্ত্রের জীবাণুও আকস্মিক অতিরিক্ত গ্যাস তৈরি করার সুযোগ পায় না।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'food-adverse-reactions-immunopathology',
    title: l(
      'Adverse Food Reactions: Molecular & Immunological Pathways',
      'খাদ্যজনিত বিরূপ প্রতিক্রিয়া: আণবিক ও অনাক্রম্যতাতত্ত্বীয় গতিপথ'
    ),
    description: l(
      'Interactive architecture comparing non-immune lactase enzymology, IgE mast-cell degranulation, and HLA-DQ2/8 autoimmune Celiac enteropathy.',
      'অ-প্রতিরোধমূলক ল্যাকটেজ এনজাইমের ক্রিয়া, আইজিই-নির্ভর মাস্ট সেল ক্ষরণ এবং এইচএলএ-ডিকিউ২/৮ চালিত অটোইমিউন সিলিয়াক রোগের তুলনামূলক চিত্র।'
    ),
    disclaimer: l(
      'Educational immunological simulation; suspected Celiac disease or food allergies require formal clinical laboratory evaluation.',
      'অনাক্রম্যতাতত্ত্বীয় শিক্ষামূলক সিমুলেশন; যেকোনো খাদ্যজনিত জটিলতায় বিশেষজ্ঞ চিকিৎসকের পরামর্শ নিন।'
    ),
    svgType: 'food-adverse-reactions',
    items: [
      {
        id: 'node-lph',
        label: l('Lactase Deficiency', 'ল্যাকটেজ ঘাটতি'),
        description: l(
          'Absence of MCM6 C/T-13910 enhancer allele leads to brush-border LPH decline, luminal lactose accumulation, osmotic diarrhea, and colonic bacterial H2 gas generation.',
          'MCM6 C/T-13910 রূপান্তর না থাকলে ল্যাকটেজ উৎপাদন কমে গিয়ে অন্ত্রে অতিরিক্ত পানি ও ব্যাকটেরিয়াল গাঁজনে হাইড্রোজেন গ্যাস তৈরি হয়।'
        ),
        details: l(
          'Lactase-phlorizin hydrolase downregulation prevents disaccharide cleavage into glucose and galactose, creating high osmotic luminal loads and microbial fermentation.',
          'ল্যাকটেজ এনজাইম কমে গেলে ল্যাকটোজ না ভেঙে অন্ত্রে পানি টানে এবং বৃহদন্ত্রের ব্যাকটেরিয়ার গাঁজনে হাইড্রোজেন ও মিথেন গ্যাস তৈরি করে।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-ttg2',
        label: l('tTG-2 Deamidation', 'tTG-2 ডিঅ্যামিডেশন'),
        description: l(
          'Indigestible 33-mer gliadin traverses the epithelial barrier; calcium-dependent tTG-2 converts neutral glutamine into negatively charged glutamic acid.',
          'অবিকৃত ৩৩-মার গ্লিয়াডিন অন্ত্রের প্রাচীর পার হলে tTG-2 এনজাইম নিরপেক্ষ গ্লুটামিনকে ঋণাত্মক গ্লুটামিক অ্যাসিডে রূপান্তর করে।'
        ),
        details: l(
          'Calcium-dependent tissue transglutaminase 2 deamidates glutamine residues at Q65 and Q72, engineering high-affinity electrostatic docking into basic HLA-DQ2.5 pockets.',
          'tTG-2 এনজাইম গ্লুটামিনকে ঋণাত্মক গ্লুটামিক অ্যাসিডে রূপান্তর করে, যা HLA-DQ2.5 এর ধনাত্মক খাঁজে শক্তিশালী আয়নিক বন্ধনে আটকে যায়।'
        ),
        color: '#ef4444',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-hladq2',
        label: l('HLA-DQ2.5 / CD4+ T Cells', 'HLA-DQ2.5 ও CD4+ টি-কোষ'),
        description: l(
          'Negatively charged deamidated gliadin fits into basic pockets of HLA-DQ2.5 on dendritic cells, activating CD4+ Th1 cells to release IFN-gamma and IL-21.',
          'রূপান্তরিত ঋণাত্মক গ্লিয়াডিন HLA-DQ2.5 এর ধনাত্মক খাঁজে শক্তভাবে আটকে গিয়ে CD4+ টি-কোষকে তীব্র প্রদাহ সৃষ্টির নির্দেশ দেয়।'
        ),
        details: l(
          'Dendritic presentation of deamidated gliadin drives massive Th1 clonal expansion and high-level IFN-gamma production in the lamina propria.',
          'ডেনড্রাইটিক কোষ পরিবর্তিত গ্লিয়াডিন উপস্থাপন করে ল্যামিনা প্রোপ্রিয়ায় বিপুল পরিমাণ প্রদাহ সৃষ্টিকারী ইন্টারফেরন-গামা তৈরি করে।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-cytotoxicity',
        label: l('IL-15 / IEL Cytotoxicity', 'IL-15 ও ঘাতক লিম্ফোসাইট'),
        description: l(
          'Enterocyte-derived IL-15 upregulates NKG2D on intraepithelial lymphocytes; cytotoxic engagement of enterocyte MICA/MICB drives apoptotic Marsh 3 villous atrophy.',
          'অন্ত্রের কোষ থেকে ক্ষরিত IL-15 ঘাতক কোষকে সক্রিয় করে এবং ভিলি কোষগুলোকে আক্রমণ করে সম্পূর্ণ সমতল ও ধ্বংস করে দেয়।'
        ),
        details: l(
          'IL-15 induces intraepithelial cytotoxic killer reprogramming; perforin and granzyme B release causes widespread enterocyte apoptosis and total villous blunting.',
          'IL-15 ঘাতক লিম্ফোসাইট তৈরি করে যা পারফোরিন ও গ্র্যানজাইম বিষ ঢেলে অন্ত্রের ভিলি পুরোপুরি ধ্বংস করে চরম শোষণহীনতা তৈরি করে।'
        ),
        color: '#dc2626',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-ige-anaphylaxis',
        label: l('IgE / Fc-epsilon-RI Shock', 'IgE ও মাস্ট সেল ক্ষরণ'),
        description: l(
          'Allergen cross-linking of bivalent IgE on mast cells triggers explosive histamine and cysteinyl leukotriene release, driving vasodilatory anaphylactic shock.',
          'অ্যালার্জেন সরাসরি মাস্ট সেলের গায়ের IgE এর সাথে যুক্ত হয়ে বিপুল হিস্টামিন ও লিউকোট্রিয়েন বের করে শ্বাসকষ্ট ও অ্যানাফিল্যাক্সিস ঘটায়।'
        ),
        details: l(
          'Multivalent food proteins cross-link membrane-bound IgE/Fc-epsilon-RI complexes, triggering Syk kinase, calcium surge, and degranulation of histamine and LTC4/LTD4.',
          'অ্যালার্জেন প্রোটিন পাশাপাশি দুটি IgE যুক্ত করে ক্যালসিয়াম বাড়িয়ে কয়েক মিনিটের মধ্যে হিস্টামিন ও লিউকোট্রিয়েন ক্ষরণ ঘটিয়ে রক্তচাপ কমায় ও শ্বাসরোধ করে।'
        ),
        color: '#06b6d4',
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
          heading: l('1. Adverse Food Reactions: Classification & Paradigms', '১. খাদ্যজনিত বিরূপ প্রতিক্রিয়া: শ্রেণিবিভাগ ও মূল ধারণা'),
          paragraphs: [
            l(
              'Adverse food reactions fall into three distinct scientific categories: non-immune food intolerances, IgE-mediated food allergies, and autoimmune food-triggered enteropathies [1]. Food intolerances represent non-immunological defects, predominantly stemming from brush-border digestive enzyme deficiencies or pharmacological sensitivities to food compounds (such as histamine or caffeine) [1, 2].',
              'খাবার খাওয়ার পর শরীরে যে বিভিন্ন বিরূপ প্রতিক্রিয়া দেখা দেয়, চিকিৎসাবিজ্ঞানে সেগুলোকে প্রধানত তিনটি পৃথক শ্রেণিতে ভাগ করা হয়: অ-প্রতিরোধমূলক খাদ্য অসহনশীলতা (Food Intolerance), অনাক্রম্যতাতত্ত্বীয় খাদ্য অ্যালার্জি (Food Allergy), এবং অটোইমিউন রোগ যেমন সিলিয়াক ডিজিজ (Celiac Disease) [১]। খাদ্য অসহনশীলতা কোনো রোগপ্রতিরোধগত সমস্যা নয়; এটি মূলত খাবার হজমকারী উৎসেচক বা এনজাইমের ঘাটতি অথবা খাদ্যের বিশেষ উপাদানের প্রতি শারীরবৃত্তীয় সংবেদনশীলতার কারণে ঘটে [১, ২]।'
            ),
            l(
              'The most common intolerance worldwide is primary lactase deficiency, wherein intestinal expression of the enzyme lactase declines following early childhood [2]. When an affected individual consumes milk, undigested lactose remains in the intestinal lumen, drawing water into the gut through osmosis and undergoing rapid bacterial fermentation in the colon, producing hydrogen, methane, carbon dioxide, and watery loose stools [2, 3]. Importantly, food intolerances are dose-dependent, meaning small quantities of the offending food are frequently well-tolerated without evoking systemic immune responses [3].',
              'এর সবচেয়ে পরিচিত উদাহরণ হলো ল্যাকটোজ অসহনশীলতা, যেখানে দুধের চিনি ল্যাকটোজ হজম করার এনজাইম ল্যাকটেজ শরীরে কমে যায় [২]। ল্যাকটোজ হজম না হয়ে বৃহদন্ত্রে চলে গেলে সেখানকার ব্যাকটেরিয়া দ্রুত তা ফারমেন্ট বা গাঁজন করে প্রচুর গ্যাস ও অ্যাসিড তৈরি করে এবং অন্ত্রে পানি টেনে এনে পেট ফাঁপা, গ্যাস ও পাতলা পায়খানা ঘটায় [২, ৩]। অসহনশীলতা সাধারণত খাবারের পরিমাণের ওপর নির্ভরশীল; অর্থাৎ সামান্য খেলে প্রায়শই কোনো তীব্র সমস্যা হয় না [৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Lactase Persistence Genetics & Breath Testing', '২. ল্যাকটেজ দীর্ঘস্থায়ী জিনতত্ত্ব ও শ্বাস পরীক্ষা'),
          paragraphs: [
            l(
              'The molecular genetics of adult-type hypolactasia reveal that lactase persistence is an evolutionary autosomal dominant trait [2]. The lactase gene (*LCT*) on chromosome 2q21 is transcriptionally regulated by an upstream enhancer element located in intron 13 of the adjacent *MCM6* gene [2, 3].',
              'প্রাপ্তবয়স্ক মানুষের শরীরে ল্যাকটোজ হজম করার ক্ষমতা বজায় থাকা বা কমে যাওয়া একটি বংশগত আণবিক প্রক্রিয়ার ওপর নির্ভর করে [২]। মানুষের ২ নম্বর ক্রোমোজোমে অবস্থিত ল্যাকটেজ জিন (*LCT*) এর নিয়ন্ত্রণ ঘটে পার্শ্ববর্তী *MCM6* জিনের ১৩ নম্বর ইন্ট্রনে অবস্থিত একটি বিশেষ নিয়ন্ত্রক অঞ্চলের মাধ্যমে [২, ৩]।'
            ),
            l(
              'Specific single-nucleotide polymorphisms—predominantly C/T-13910 in European lineages and G/C-14010 in East African pastoralist populations—create novel binding sites for the transcription factor OCT-1, preserving high-level *LCT* transcription throughout adulthood [2, 3]. In lactase non-persistent individuals, unhydrolyzed lactose creates a potent luminal osmotic gradient, accelerating peristalsis and delivering intact sugar to the cecal microbiome, where diffusing hydrogen is measured non-invasively via breath testing [3, 5].',
              'নির্দিষ্ট বংশগত রূপান্তর—যেমন ইউরোপীয়দের মধ্যে C/T-13910 পলিমরফিজম—ঘটার ফলে প্রাপ্তবয়স্ক অবস্থাতেও ল্যাকটেজ তৈরি অব্যাহত থাকে [২, ৩]। যাদের এই রূপান্তর নেই, তাদের অন্ত্রে অপাচ্য ল্যাকটোজ পানি টেনে এনে বৃহদন্ত্রে ব্যাকটেরিয়াল ফারমেন্টেশনের মাধ্যমে হাইড্রোজেন গ্যাস উৎপন্ন করে, যা হাইড্রোজেন ব্রেথ টেস্টের মাধ্যমে ল্যাবরেটরিতে শনাক্ত করা হয় [৩, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Celiac Disease: 33-mer Gliadin & HLA-DQ2.5 Autoimmunity', '৩. সিলিয়াক ডিজিজ: ৩৩-মার গ্লিয়াডিন ও HLA-DQ2.5 অটোইমিউনিটি'),
          paragraphs: [
            l(
              'Celiac disease represents a complex, multi-organ autoimmune enteropathy triggered by the ingestion of dietary gluten in genetically susceptible individuals expressing human leukocyte antigen (HLA) Class II molecules DQ2 or DQ8 [4, 6]. Gluten comprises alcohol-insoluble glutenins and alcohol-soluble gliadins rich in proline (~15%) and glutamine (~35%) [6].',
              'সিলিয়াক ডিজিজ হলো একটি বহুতান্ত্রিক অটোইমিউন রোগ যা জিনগতভাবে সংবেদনশীল মানুষের দেহে গ্লুটেনযুক্ত খাবার (গম, বার্লি, রাই) খাওয়ার ফলে সৃষ্টি হয় [৪, ৬]। গ্লুটেনের প্রধান প্রোটিন গ্লিয়াডিনে প্রচুর পরিমাণে প্রোলিন ও গ্লুটামিন অ্যামিনো অ্যাসিড থাকে [৬]।'
            ),
            l(
              'Because human gastrointestinal proteases lack post-proline cleaving endoprotease activity, the 33-mer alpha-gliadin peptide remains intact and enters the lamina propria, where tissue transglutaminase 2 (tTG-2) deamidates neutral glutamine into negatively charged glutamic acid [6, 8]. Deamidated gliadin binds with extraordinary affinity into the basic pockets of HLA-DQ2.5 on dendritic cells, activating CD4+ T helper cells and triggering intraepithelial lymphocyte cytotoxicity that destroys absorptive villi (Marsh 3 villous atrophy) [8, 12].',
              'মানুষের পাচক এনজাইম প্রোলিনের বন্ধন ভাঙতে পারে না বলে একটি ৩৩-অ্যামিনো অ্যাসিড বিশিষ্ট বৃহৎ পেপটাইড (33-mer gliadin) অক্ষত অবস্থায় অন্ত্রের প্রাচীর পার হয় [৬, ৮]। সেখানে tTG-2 এনজাইম একে ঋণাত্মক গ্লুটামিক অ্যাসিডে রূপান্তর করে HLA-DQ2.5 এর সাথে শক্তভাবে আটকে দেয়, যা ঘাতক লিম্ফোসাইটকে ডেকে এনে অন্ত্রের ভিলি সম্পূর্ণ ধ্বংস করে দেয় (Marsh 3) [৮, ১২]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. IgE-Mediated Food Anaphylaxis & Mast Cell Signaling', '৪. আইজিই-নির্ভর খাদ্য অ্যালার্জি ও মাস্ট সেল ক্ষরণ'),
          paragraphs: [
            l(
              'Classical food allergy is an IgE-mediated Type I immediate hypersensitivity reaction directed against intact food glycoproteins (peanut, tree nuts, milk, egg, soy, wheat, fish, shellfish, sesame) [1, 6]. Allergen cross-linking of adjacent IgE molecules bound to high-affinity Fc-epsilon-RI receptors on mast cells triggers explosive degranulation of preformed histamine and de novo synthesized leukotrienes (LTC4, LTD4) [6, 7].',
              'সাধারণ খাদ্য অ্যালার্জি হলো একটি তাৎক্ষণিক আইজিই (IgE) অ্যান্টিবডি নির্ভর তীব্র প্রতিক্রিয়া, যা খাবারের অবিকৃত গ্লাইকোপ্রোটিনের বিরুদ্ধে ঘটে [১, ৬]। অ্যালার্জেন মাস্ট সেলের গায়ে থাকা Fc-epsilon-RI রিসেপ্টরের সাথে যুক্ত IgE অণুগুলোকে গুচ্ছবদ্ধ করে কয়েক মিনিটের মধ্যে প্রচুর হিস্টামিন ও লিউকোট্রিয়েন রক্তে ছড়িয়ে দেয় [৬, ৭]।'
            ),
            l(
              'In systemic anaphylaxis, rapid vasodilatation and macromolecular plasma extravasation cause profound hypotension and laryngeal edema [7]. Intramuscular epinephrine (0.01 mg/kg into the anterolateral mid-thigh) is the mandatory first-line therapy: it stimulates alpha-1 adrenergic vasoconstriction and beta-2 adrenergic bronchodilation, halting mediator exocytosis [6, 7].',
              'তীব্র অ্যানাফিল্যাক্সিসে রক্তচাপ মারাত্মক কমে গিয়ে এবং গলার স্বরযন্ত্র ফুলে শ্বাসরোধের সৃষ্টি হয় [৭]। এই জরুরি অবস্থায় প্রথম জীবনরক্ষাকারী চিকিৎসা হলো উরুর মাংসে তাৎক্ষণিক এপিনেফ্রিন (অ্যাড্রেনালিন) ইনজেকশন দেওয়া, যা রক্তচাপ স্বাভাবিক করে এবং শ্বাসনালি খুলে দেয় [৬, ৭]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Clinical Workup & Gluten-Free Dietetics', '৫. ক্লিনিক্যাল রোগ নির্ণয় ও গ্লুটেন-মুক্ত খাদ্যবিধি'),
          paragraphs: [
            l(
              'Definitive Celiac screening requires total serum IgA alongside anti-tissue transglutaminase IgA (anti-tTG IgA) while maintaining a normal gluten-containing diet [4, 6]. If anti-tTG IgA is elevated, duodenal endoscopic biopsies demonstrating Marsh 3 villous atrophy confirm the diagnosis [4]. Patients must adhere to a strict lifelong gluten-free diet (<20 ppm threshold) [4].',
              'সিলিয়াক রোগ নির্ণয়ের জন্য রোগীকে স্বাভাবিকভাবে গ্লুটেনযুক্ত খাবার খাওয়া অবস্থায় রেখে মোট সিরাম আইজিএ এবং অ্যান্টি-টিটিজি আইজিএ পরীক্ষা করতে হয় [৪, ৬]। রিপোর্ট পজিটিভ হলে এন্ডোস্কোপিক বায়োপসিতে ভিলির ধ্বংসাবশেষ দেখে রোগ নিশ্চিত হয় এবং আজীবন শতভাগ গ্লুটেন-মুক্ত খাবার (<২০ পিপিএম) খেতে হয় [৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Clinical Takeaways', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Food intolerances are non-immunological and dose-dependent enzymatic failures; food allergies are immediate IgE-driven mast-cell emergencies treated with epinephrine; and Celiac disease is an HLA-DQ2/8 autoimmune enteropathy requiring lifelong strict gluten avoidance [1, 4].',
              'খাদ্য অসহনশীলতা হলো এনজাইমের ঘাটতিজনিত অ-অনাক্রম্যতাতত্ত্বীয় সমস্যা; খাদ্য অ্যালার্জি হলো তাৎক্ষণিক আইজিই-নির্ভর জরুরি অবস্থা যার চিকিৎসা এপিনেফ্রিন; এবং সিলিয়াক ডিজিজ হলো একটি অটোইমিউন রোগ যার একমাত্র চিকিৎসা আজীবন গ্লুটেন বর্জন [১, ৪]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. Differential Molecular Pathophysiology of Adverse Food Reactions', '১. খাদ্যজনিত বিরূপ প্রতিক্রিয়ার আণবিক রোগশারীরবৃত্ত'),
          paragraphs: [
            l(
              'Adverse food reactions diverge into non-immune enzyme deficiencies, IgE-mediated Type I immediate hypersensitivity, and cell-mediated autoimmune enteropathies [1]. Primary adult hypolactasia results from developmental downregulation of brush-border lactase-phlorizin hydrolase [2]. Undigested disaccharide generates luminal osmotic fluid retention (~3 mL per gram lactose), driving rapid bacterial fermentation in the colon to yield H2, CH4, and organic acids [2, 3].',
              'খাদ্যজনিত বিরূপ প্রতিক্রিয়া প্রধানত এনজাইম ঘাটতি, আইজিই-নির্ভর প্রথম ধরনের অ্যালার্জি এবং কোষ-নির্ভর অটোইমিউন এন্টারোপ্যাথিতে বিভক্ত [১]। ল্যাকটেজ এনজাইমের অভাব অন্ত্রের ভেতর অসমোটিক টানে প্রচুর পানি ধরে রাখে এবং বৃহদন্ত্রের ব্যাকটেরিয়াল গাঁজনের মাধ্যমে হাইড্রোজেন ও মিথেন গ্যাস তৈরি করে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Evolutionary Genetics of the MCM6 / LCT Regulon', '২. MCM6 / LCT জিনের বিবর্তনীয় বংশগতিবিদ্যা'),
          paragraphs: [
            l(
              'Lactase persistence is governed by regulatory enhancers located within intron 13 of the *MCM6* gene on chromosome 2q21 [2]. The C/T-13910 polymorphism creates an accessible binding motif for the transcription factor OCT-1, preserving high-level *LCT* transcription into adulthood [2, 3]. In lactase non-persistence, progressive promoter methylation silences the gene, precipitating post-weaning hypolactasia [3].',
              'ল্যাকটেজ জিনের স্থায়িত্ব নিয়ন্ত্রিত হয় ২ নম্বর ক্রোমোজোমের *MCM6* জিনের ১৩ নম্বর ইন্ট্রনের বিশেষ নিয়ন্ত্রক অঞ্চল দিয়ে [২]। C/T-13910 রূপান্তরটি OCT-1 ট্রান্সক্রিপশন ফ্যাক্টরের সংযোগস্থল তৈরি করে প্রাপ্তবয়স্ক অবস্থাতেও ল্যাকটেজ উৎপাদন অব্যাহত রাখে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Immunopathogenesis of Celiac Disease: The 33-mer Peptide Cascade', '৩. সিলিয়াক রোগের অনাক্রম্য প্রক্রিয়া: ৩৩-মার পেপটাইডের ধ্বংসযজ্ঞ'),
          paragraphs: [
            l(
              'In Celiac enteropathy, dietary gliadin contains the proteolytically resistant 33-mer peptide (residues 56–88) [5]. Upon crossing the epithelial barrier, calcium-dependent tissue transglutaminase 2 (tTG-2) catalyzes deamidation of neutral glutamine residues (Q65, Q72) to negatively charged glutamic acid [4, 5]. This negative charge creates stable electrostatic salt bridges with basic lysine/arginine residues in the P4, P6, P7, and P9 anchor pockets of HLA-DQ2.5 [4].',
              'সিলিয়াক রোগে পাচক রসে অবিকৃত ৩৩-মার গ্লিয়াডিন পেপটাইড অন্ত্রের প্রাচীর পার হয়ে এলে tTG-2 এনজাইম নিরপেক্ষ গ্লুটামিনকে ঋণাত্মক গ্লুটামিক অ্যাসিডে রূপান্তর করে [৪, ৫]। এই ঋণাত্মক আধান HLA-DQ2.5 এর ধনাত্মক খাঁজে শক্তিশালী আয়নিক বন্ধনে আটকে যায় [৪]।'
            ),
            l(
              'Antigen presentation to CD4+ Th1 cells unleashes robust IFN-gamma and IL-21 secretion, while enterocyte-derived IL-15 reprograms intraepithelial CD8+ lymphocytes into cytotoxic killer cells expressing NKG2D [4, 6]. Engaging stress ligands MICA/MICB on enterocytes triggers perforin/granzyme-mediated apoptosis, destroying mucosal architecture into Marsh 3 total villous atrophy [4].',
              'টি-কোষ উদ্দীপ্ত হয়ে প্রচুর ইন্টারফেরন-গামা তৈরি করে এবং এন্টারোসাইট থেকে ক্ষরিত IL-15 ঘাতক কোষে NKG2D রিসেপ্টর বাড়িয়ে দেয়, যা অন্ত্রের ভিলি কোষগুলোকে মেরে ফেলে সমতল করে দেয় (Marsh 3) [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Type I Hypersensitivity: High-Affinity Fc-epsilon-RI Mast Cell Activation', '৪. টাইপ ১ অতিসংবেদনশীলতা: মাস্ট সেলের আণবিক সক্রিয়করণ'),
          paragraphs: [
            l(
              'In IgE-mediated food allergies, allergen binding cross-links Fc-epsilon-RI receptor complexes on tissue mast cells and circulating basophils [1, 6]. ITAM phosphorylation by Lyn recruits Syk kinase, mobilizing intracellular calcium and inducing SNARE-mediated exocytosis of preformed histamine, tryptase, and proteoglycans within minutes [6].',
              'খাদ্য অ্যালার্জিতে অ্যালার্জেন মাস্ট সেলের গায়ের Fc-epsilon-RI রিসেপ্টরের সাথে যুক্ত IgE অণুগুলোকে গুচ্ছবদ্ধ করে [১, ৬]। এর ফলে দ্রুত কোষে ক্যালসিয়াম বেড়ে কয়েক মিনিটের মধ্যে হিস্টামিন ও ট্রিপটেজ রক্তে ছড়িয়ে পড়ে [৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Diagnostic Algorithm & Serological Surveillance', '৫. ডায়াগনস্টিক অ্যালগরিদম ও সেরোলজিক্যাল নজরদারি'),
          paragraphs: [
            l(
              'Diagnostic precision requires total serum IgA alongside anti-tTG IgA while maintaining gluten consumption [3, 4]. Selective IgA deficiency occurs in ~2-3% of Celiac patients, which can cause false-negative IgA results unless IgG-based testing (anti-DGP IgG, anti-tTG IgG) is substituted [4]. Double-blind placebo-controlled food challenges remain the gold standard for clinical food allergies [1].',
              'সিলিয়াক রোগ নির্ণয়ে মোট আইজিএ এবং অ্যান্টি-টিটিজি আইজিএ পরীক্ষা আবশ্যক; জন্মগত আইজিএ ঘাটতি থাকলে ফলস-নেগেটিভ এড়াতে আইজিজি ভিত্তিক পরীক্ষা করতে হয় [৩, ৪]। খাদ্য অ্যালার্জি নিশ্চিতের চূড়ান্ত মানদণ্ড হলো চিকিৎসকের তত্ত্বাবধানে ওরাল ফুড চ্যালেঞ্জ [১]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Key Mechanistic Takeaways', '৬. প্রধান আণবিক সারসংক্ষেপ'),
          paragraphs: [
            l(
              'tTG-2 deamidation is the obligate immunological license for HLA-DQ2.5 gluten presentation, whereas IgE cross-linking drives immediate calcium-dependent vasoactive shock [1, 4].',
              'tTG-2 ডিঅ্যামিডেশনই হলো HLA-DQ2.5 এর মাধ্যমে সিলিয়াক রোগ তৈরির মূল চাবিকাঠি; আর অ্যালার্জিতে IgE গুচ্ছবদ্ধকরণ ঘটায় তাৎক্ষণিক রক্তচাপহীন শক [১, ৪]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উন্নত স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. Structural Proteomics of Dietary Gluten & Transamidation', '১. গ্লুটেন প্রোটিনের আণবিক গঠন ও ট্রান্সঅ্যামিডেশন'),
          paragraphs: [
            l(
              'The structural basis of Celiac pathogenicity is dictated by repetitive polyproline-II helical conformations within the alpha-gliadin 33-mer peptide (LQLQPFPQPQLPYPQPQLPYPQPQLPYPQPQPF) [5]. The extreme steric hindrance of proline rings prevents access to the catalytic triads of human endopeptidases [5]. Lamina propria tTG-2 selectively targets specific glutamine residues located within Q-X-P motifs, executing transamidation or deamidation depending on microenvironmental pH and calcium concentration [4, 5].',
              'গ্লুটেনের ক্ষতিকর ক্ষমতার মূলে রয়েছে এর ৩৩-মার পেপটাইডের প্রোলিন শিকল যা কোনো মানব এনজাইম কাটতে পারে না [৫]। ল্যামিনা প্রোপ্রিয়ায় ক্যালসিয়াম-নির্ভর tTG-2 এনজাইম সুনির্দিষ্টভাবে গ্লুটামিনকে ঋণাত্মক গ্লুটামিক অ্যাসিডে রূপান্তর করে [৪, ৫]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. MHC Class II Structural Crystallography: HLA-DQ2.5 vs HLA-DQ8', '২. এমএইচসি ক্লাস ২ অণুর ক্রিস্টালোগ্রাফি: HLA-DQ2.5 বনাম HLA-DQ8'),
          paragraphs: [
            l(
              'X-ray crystallography reveals that the peptide-binding cleft of HLA-DQ2.5 (encoded by *DQA1*05:01* and *DQB1*02:01*) contains basic residues (Lys71beta, Arg52alpha) that create positively charged electrostatic anchor pockets at P4, P6, P7, and P9 [4]. Deamidated glutamic acid residues in gliadin fit with sub-nanomolar affinity into these pockets, forming stable salt bridges that resist dissociation and provoke vigorous CD4+ TCR engagement [4].',
              'ক্রিস্টালোগ্রাফিতে দেখা গেছে যে HLA-DQ2.5 অণুর খাঁজে ধনাত্মক লাইসিন ও আরজিনিন অ্যামিনো অ্যাসিড থাকে [৪]। ঋণাত্মক গ্লুটামিক অ্যাসিডযুক্ত পরিবর্তিত গ্লিয়াডিন এই খাঁজে অত্যন্ত শক্ত লবণ-বন্ধন তৈরি করে টি-কোষের কাছে প্রবলভাবে উপস্থাপিত হয় [৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. IL-15 / NKG2D Cytotoxicity & Enterocyte Apoptosis', '৩. IL-15 ও ঘাতক লিম্ফোসাইট দ্বারা অন্ত্রীয় কোষ ধ্বংস'),
          paragraphs: [
            l(
              'Gliadin fragments induce enterocytes to express stress-inducible non-classical MHC molecules MICA and MICB, while simultaneously secreting interleukin-15 (IL-15) [4]. IL-15 trans-presentation by dendritic cells upregulates the activating C-type lectin-like receptor NKG2D and adapter DAP10 on intraepithelial CD8+ alpha-beta and gamma-delta T lymphocytes, overriding self-tolerance and driving perforin-mediated enterocyte death [4].',
              'গ্লিয়াডিনের প্রভাবে অন্ত্রের কোষে MICA ও MICB প্রোটিন বাড়ে এবং IL-15 ক্ষরিত হয় [৪]। IL-15 ঘাতক লিম্ফোসাইটে NKG2D রিসেপ্টর বাড়িয়ে দেয়, যা নিজের অন্ত্রের কোষগুলোকে আক্রমণ করে মেরে ফেলে এবং ভিলি ধ্বংস করে [৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Non-Celiac Wheat Sensitivity: ATI Innate Immune Signaling', '৪. নন-সিলিয়াক গমের সংবেদনশীলতা: এটিআই সহজাত প্রতিরোধ সংকেত'),
          paragraphs: [
            l(
              'Non-Celiac Gluten/Wheat Sensitivity (NCGS) is mechanistically distinct from adaptive autoimmunity [7]. It is largely mediated by wheat amylase-trypsin inhibitors (ATIs)—pest-defense plant proteins that directly bind toll-like receptor 4 (TLR4) on intestinal monocytes and macrophages, stimulating the MyD88-dependent transcription of TNF-alpha and IL-8 without inducing villous atrophy or HLA restriction [7].',
              'নন-সিলিয়াক গমের সংবেদনশীলতায় কোনো অটোইমিউন ভিলি ধ্বংস হয় না [৭]। এতে গমের অ্যামাইলোজ-ট্রিপসিন ইনহিবিটর (ATI) উপাদান অন্ত্রের ম্যাক্রোফেজের TLR4 রিসেপ্টর উদ্দীপিত করে মৃদু প্রদাহ তৈরি করে [৭]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Clinical Anaphylaxis Management & Epinephrine Pharmacodynamics', '৫. ক্লিনিক্যাল অ্যানাফিল্যাক্সিস ব্যবস্থাপনা ও এপিনেফ্রিনের ক্রিয়া'),
          paragraphs: [
            l(
              'In severe food anaphylaxis, rapid intramuscular injection of epinephrine into the vastus lateralis achieves peak plasma bioavailability in ~8 minutes (versus >34 minutes subcutaneously) [1, 6]. Epinephrine alpha-1 stimulation reverses life-threatening peripheral vasodilation and restores effective circulating volume, while beta-2 stimulation halts mast cell degranulation via cyclic AMP upregulation [6].',
              'তীব্র খাদ্য অ্যানাফিল্যাক্সিসে উরুর ভাস্টাস ল্যাটেরালিস পেশিতে এপিনেফ্রিন দিলে মাত্র ৮ মিনিটে রক্তে সর্বোচ্চ ঘনত্বে পৌঁছায় [১, ৬]। এটি রক্তনালি সংকুচিত করে রক্তচাপ স্বাভাবিক করে এবং শ্বাসনালি খুলে দিয়ে জীবন রক্ষা করে [৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Immunology Summary', '৬. ফলিত অনাক্রম্যতাতত্ত্বের সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Translational management requires distinguishing non-immune lactase deficiency, ATI-driven innate NCGS, adaptive HLA-DQ2.5 Celiac enteropathy, and IgE mast-cell anaphylaxis through validated serologies, genetic panels, and clinical dietetics [1, 4, 7].',
              'সঠিক চিকিৎসার জন্য এনজাইমের ঘাটতি, এটিআই চালিত সাধারণ সংবেদনশীলতা, সিলিয়াক অটোইমিউনিটি এবং আইজিই খাদ্য অ্যালার্জির পার্থক্য সঠিকভাবে নির্ণয় করা অপরিহার্য [১, ৪, ৭]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential differential pathways of non-immune lactase enzymology, IgE mast cell degranulation, and HLA-DQ2.5 autoimmune enteropathy.',
      'অ-প্রতিরোধমূলক ল্যাকটেজ ঘাটতি, আইজিই-নির্ভর মাস্ট সেল ক্ষরণ এবং সিলিয়াক অটোইমিউন ভিলি ধ্বংসের ধারাবাহিক ধাপসমূহ।'
    ),
    steps: [
      l(
        'Step 1: Ingestion triggers non-immune enzymatic failure (lactose) or immunological recognition by immune cells.',
        'ধাপ ১: খাবার গ্রহণের পর এনজাইমের ঘাটতি অথবা অনাক্রম্য কোষের রিসেপ্টর দ্বারা অ্যান্টিজেন শনাক্তকরণ ঘটে।'
      ),
      l(
        'Step 2: In Celiac, 33-mer gliadin crosses into the lamina propria and is deamidated by calcium-dependent tTG-2.',
        'ধাপ ২: সিলিয়াক রোগে অবিকৃত ৩৩-মার গ্লিয়াডিন ল্যামিনা প্রোপ্রিয়ায় এসে tTG-2 দ্বারা ঋণাত্মক কণিকায় রূপান্তরিত হয়।'
      ),
      l(
        'Step 3: Deamidated gliadin docks in basic pockets of HLA-DQ2.5, stimulating Th1 IFN-gamma and IL-15 cytotoxic enterocyte apoptosis.',
        'ধাপ ৩: পরিবর্তিত গ্লিয়াডিন HLA-DQ2.5 এর খাঁজে বসে টি-কোষ ও ঘাতক লিম্ফোসাইট দিয়ে অন্ত্রের ভিলি পুরোপুরি ধ্বংস করে।'
      ),
      l(
        'Step 4: In food allergy, allergen cross-links membrane IgE, triggering explosive histamine shock treated with intramuscular epinephrine.',
        'ধাপ ৪: খাদ্য অ্যালার্জিতে অ্যালার্জেন মাস্ট সেলের IgE যুক্ত করে তাৎক্ষণিক হিস্টামিন শক তৈরি করে যা এপিনেফ্রিন দিয়ে নিয়ন্ত্রণ করতে হয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'Why must total serum IgA be measured simultaneously when screening for Celiac disease with anti-tissue transglutaminase IgA (anti-tTG IgA)?',
      'অ্যান্টি-টিটিজি আইজিএ পরীক্ষার মাধ্যমে সিলিয়াক রোগ নির্ণয়ের সময় কেন একই সাথে মোট সিরাম আইজিএ (Total IgA) পরীক্ষা করা বাধ্যতামূলক?'
    ),
    options: [
      l(
        'Selective IgA deficiency occurs at a 10- to 15-fold higher rate in Celiac patients, which can cause a false-negative anti-tTG IgA result unless IgG-based testing is substituted.',
        'সিলিয়াক রোগীদের মধ্যে জন্মগত আইজিএ ঘাটতি ১০-১৫ গুণ বেশি থাকে, যার কারণে অ্যান্টি-টিটিজি ফলস-নেগেটিভ আসতে পারে; তাই ঘাটতি থাকলে আইজিজি টেস্ট করতে হয়।'
      ),
      l(
        'Total serum IgA neutralizes tissue transglutaminase 2 in circulation, preventing liver damage.',
        'মোট আইজিএ রক্তে থাকা টিটিজি এনজাইমকে নিষ্ক্রিয় করে যকৃতের সুরক্ষা নিশ্চিত করে।'
      ),
      l(
        'High total IgA proves that the patient has already fully cleared gluten from the lamina propria.',
        'উচ্চ আইজিএ প্রমাণ করে যে রোগীর অন্ত্র থেকে গ্লুটেন সম্পূর্ণ দূর হয়ে গেছে।'
      ),
      l(
        'Total IgA differentiates between HLA-DQ2.5 and HLA-DQ8 genotypes without DNA sequencing.',
        'মোট আইজিএ পরীক্ষা দিয়ে ডিএনএ সিকোয়েন্সিং ছাড়াই জিনোটাইপ নির্ধারণ করা যায়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Selective IgA deficiency has a prevalence of ~2–3% in Celiac disease compared to ~0.2% in the general population. If an IgA-deficient patient is tested only for anti-tTG IgA, the test will return falsely negative despite severe enteropathy. Measuring total IgA detects this deficiency and alerts clinicians to order IgG-based serology (anti-tTG IgG or anti-DGP IgG).',
      'সিলিয়াক রোগীদের প্রায় ২-৩ শতাংশের জন্মগতভাবে আইজিএ ঘাটতি থাকে। এই অবস্থায় শুধু অ্যান্টি-টিটিজি আইজিএ পরীক্ষা করলে তীব্র রোগ থাকা সত্ত্বেও রিপোর্ট ভুলভাবে নেগেটিভ আসবে। তাই মোট আইজিএ পরিমাপ করে ঘাটতি ধরা পড়লে আইজিজি ভিত্তিক অ্যান্টিবডি পরীক্ষা করতে হয়।'
    ),
  },
}
