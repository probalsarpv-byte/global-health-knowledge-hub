import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const satietyRefs = [
  {
    id: 'schwartz-nature-cns-appetite',
    authors: 'Michael W. Schwartz, Stephen C. Woods, Daniel Porte Jr, Randy J. Seeley, Denis G. Baskin',
    title: 'Central nervous system control of food intake',
    organization: 'Nature',
    year: 2000,
    url: 'https://doi.org/10.1038/35007534',
    doi: '10.1038/35007534',
  },
  {
    id: 'holst-physiolrev-glp1',
    authors: 'Jens Juul Holst',
    title: 'The Physiology of Glucagon-like Peptide 1',
    organization: 'Physiological Reviews',
    year: 2007,
    url: 'https://doi.org/10.1152/physrev.00034.2006',
    doi: '10.1152/physrev.00034.2006',
  },
  {
    id: 'cummings-jci-gut-hormones',
    authors: 'David E. Cummings, Joost Overduin',
    title: 'Gastrointestinal regulation of food intake',
    organization: 'The Journal of Clinical Investigation',
    year: 2007,
    url: 'https://doi.org/10.1172/JCI30227',
    doi: '10.1172/JCI30227',
  },
  {
    id: 'guyton-medical-physiology-appetite',
    authors: 'John E. Hall, Michael E. Hall',
    title: 'Guyton and Hall Textbook of Medical Physiology, 14th edition, Chapter 72: Dietary Balances; Regulation of Feeding; Obesity and Starvation',
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/guyton-and-hall-textbook-of-medical-physiology/hall/978-0-323-59712-8',
  },
  {
    id: 'wilding-nejm-step1-semaglutide',
    authors: 'John P. H. Wilding, Rachel L. Batterham, Salvatore Calanna, et al.',
    title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1 Trial)',
    organization: 'The New England Journal of Medicine',
    year: 2021,
    url: 'https://doi.org/10.1056/NEJMoa2032183',
    doi: '10.1056/NEJMoa2032183',
  },
  {
    id: 'volkow-physiolrev-food-addiction',
    authors: 'Nora D. Volkow, Gene-Jack Wang, Ruben D. Baler',
    title: 'Reward, dopamine and the control of food intake: implications for obesity',
    organization: 'Trends in Cognitive Sciences',
    year: 2011,
    url: 'https://doi.org/10.1016/j.tics.2010.11.001',
    doi: '10.1016/j.tics.2010.11.001',
  },
]

export const nutrition07SatietyNeuroendocrinologyLesson: LessonTopic = {
  id: 'topic.nutrition.satiety-neuroendocrinology-appetite',
  slug: 'satiety-neuroendocrinology-appetite',
  version: 2,
  updatedAt: '2026-10-14',
  title: l(
    '07 · Satiety Neuroendocrinology: Leptin, Ghrelin, GLP-1, PYY & Appetite Regulation',
    '০৭ · তৃপ্তি ও ক্ষুধার নিউরোএন্ডোক্রিনোলজি: লেপটিন, ঘ্রেলিন, GLP-1, PYY ও ক্ষুধা নিয়ন্ত্রণ'
  ),
  summary: l(
    'Comprehensive university textbook analysis of energy intake neuroendocrinology: hypothalamic arcuate POMC/CART vs NPY/AgRP toggle circuits, gastric ghrelin octanoylation by GOAT, adipocyte leptin-JAK2-STAT3 signaling, enteroendocrine incretins (GLP-1, PYY, CCK), vagal-hindbrain integration, mesolimbic dopamine food reward, and clinical incretin pharmacology.',
    'শক্তি গ্রহণের প্রামাণ্য বিশ্ববিদ্যালয় পাঠ্যপুস্তকীয় বিশ্লেষণ: হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াসের POMC/CART বনাম NPY/AgRP টগল সার্কিট, GOAT এনজাইম দ্বারা ঘ্রেলিনের অক্টানয়লেশন, অ্যাডিপোসাইটের লেপটিন-JAK2-STAT3 সংকেত, অন্ত্রের ইনক্রিটিন (GLP-1, PYY, CCK), ভেগাস-পশ্চাৎমস্তিষ্ক সংযোগ, ডোপামিন রিওয়ার্ড সার্কিট এবং আধুনিক ইনক্রিটিন ফার্মাকোলজি।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-14',
  objectives: [
    l(
      'Contrast the neurochemical architecture of the hypothalamic arcuate nucleus: anorexigenic POMC/CART neurons (alpha-MSH acting on MC4R) versus orexigenic NPY/AgRP neurons.',
      'হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াসের ক্ষুধা নিবারক POMC/CART নিউরন (MC4R এর ওপর আলফা-MSH) এবং ক্ষুধা উদ্দীপক NPY/AgRP নিউরনের আণবিক সার্কিট তুলনা করতে পারা।'
    ),
    l(
      'Trace the post-translational modification of ghrelin by Ghrelin O-Acyltransferase (GOAT) and its pre-prandial activation of GHSR1a receptors on NPY/AgRP neurons.',
      'Ghrelin O-Acyltransferase (GOAT) এনজাইম দ্বারা ঘ্রেলিনের অক্টানয়লেশন এবং আহারের পূর্বে NPY/AgRP নিউরনে GHSR1a রিসেপ্টর সক্রিয়করণের পথ বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Map the gut-brain axis signaling of meal termination: enteroendocrine release of GLP-1, PYY, and CCK, nodose vagal afferent activation, and hindbrain nucleus tractus solitarius (NTS) processing.',
      'খাওয়া সমাপ্তির অন্ত্র-মস্তিষ্ক সংকেত: L-কোষ থেকে GLP-1 ও PYY এবং I-কোষ থেকে CCK নিঃসরণ, ভেগাস স্নায়ু সংবেদন এবং পশ্চাৎমস্তিষ্কের NTS কেন্দ্রে সংকেত প্রক্রিয়াকরণ ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Evaluate the molecular pathophysiology of leptin resistance in obesity (SOCS3 and PTP1B induction) and the clinical pharmacology of GLP-1 receptor agonists (semaglutide, tirzepatide) in weight regulation.',
      'স্থূলতায় লেপটিন রেজিস্ট্যান্সের আণবিক রোগতত্ত্ব (SOCS3 ও PTP1B বৃদ্ধি) এবং ওজন নিয়ন্ত্রণে আধুনিক GLP-1 ও GIP রিসেপ্টর অ্যাগোনিস্টের ফার্মাকোলজিক্যাল কার্যপদ্ধতি মূল্যায়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.nutrition.protein-quality-diaas-nitrogen-balance'],
  references: satietyRefs,
  evidenceBySection: {
    introduction: ['schwartz-nature-cns-appetite', 'guyton-medical-physiology-appetite'],
    structure: ['schwartz-nature-cns-appetite', 'cummings-jci-gut-hormones'],
    mechanism: ['holst-physiolrev-glp1', 'cummings-jci-gut-hormones'],
    integration: ['volkow-physiolrev-food-addiction', 'schwartz-nature-cns-appetite'],
    practice: ['wilding-nejm-step1-semaglutide', 'cummings-jci-gut-hormones'],
    takeaways: ['schwartz-nature-cns-appetite', 'holst-physiolrev-glp1'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Hypothalamic Circuitry of Energy Homeostasis', '১. শক্তি ভারসাম্যের হাইপোথ্যালামিক স্নায়ুপথ'), sectionId: 'introduction' },
      { id: 'sec-ghrelin-leptin', label: l('2. Long-Term Adiposity & Acute Hunger: Leptin vs Ghrelin', '২. দীর্ঘমেয়াদী চর্বি সংকেত ও তীব্র ক্ষুধা: লেপটিন বনাম ঘ্রেলিন'), sectionId: 'structure' },
      { id: 'sec-incretins', label: l('3. Satiety Incretins: GLP-1, PYY & The Vagal Gut-Brain Axis', '৩. তৃপ্তি ইনক্রিটিন: GLP-1, PYY ও ভেগাস অন্ত্র-মস্তিষ্ক অক্ষ'), sectionId: 'mechanism' },
      { id: 'sec-hedonic', label: l('4. Hedonic Reward vs Homeostatic Feeding & Food Allostasis', '৪. আনন্দঘন ক্ষুধা বনাম শারীরবৃত্তীয় ক্ষুধা ও খাদ্যের আসক্তি'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Clinical Appetite Profiling & Meal Satiety Calculations', '৫. ক্লিনিক্যাল ক্ষুধা মূল্যায়ন ও খাবারের তৃপ্তি সূচক হিসাব'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Arcuate Nucleus (ARC)', 'আর্কুয়েট নিউক্লিয়াস (ARC)'),
        definition: l(
          'A specialized hypothalamic nucleus situated adjacent to the median eminence with a semi-permeable blood-brain barrier, allowing circulating metabolic hormones to directly contact POMC and NPY/AgRP neurons.',
          'হাইপোথ্যালামাসের একটি বিশেষ স্নায়ুকেন্দ্র যার রক্ত-মস্তিষ্ক প্রাচীর আংশিক ভেদ্য হওয়ায় রক্তের হরমোনগুলো (লেপটিন, ইনসুলিন, ঘ্রেলিন) সরাসরি এর নিউরনে পৌঁছাতে পারে।'
        ),
      },
      {
        term: l('Melanocortin-4 Receptor (MC4R)', 'মেলানোকর্টিন-৪ রিসেপ্টর (MC4R)'),
        definition: l(
          'A G-protein-coupled receptor predominantly localized in the paraventricular nucleus (PVN) of the hypothalamus; activated by alpha-MSH to suppress food intake and antagonized by AgRP to stimulate voracious feeding.',
          'হাইপোথ্যালামাসের প্যারাভেন্ট্রিকুলার নিউক্লিয়াসে অবস্থিত জিপিসিআর রিসেপ্টর; আলফা-MSH দ্বারা সক্রিয় হলে ক্ষুধা দমন করে এবং AgRP দ্বারা বাধাপ্রাপ্ত হলে প্রচণ্ড ক্ষুধা তৈরি করে।'
        ),
      },
      {
        term: l('Ghrelin O-Acyltransferase (GOAT)', 'ঘ্রেলিন ও-অ্যাসাইলট্রান্সফারেজ (GOAT)'),
        definition: l(
          'A membrane-bound endoplasmic reticulum enzyme in gastric mucosal cells that transfers an eight-carbon octanoic acid onto Serine-3 of proghrelin, an absolute biochemical requirement for GHSR1a receptor binding.',
          'পাকস্থলীর মিউকোসার একটি এনজাইম যা ঘ্রেলিনের তিন নম্বর সেরিনে আট-কার্বনের অক্টানোয়িক ফ্যাটি অ্যাসিড যুক্ত করে; এই পরিবর্তন ছাড়া ঘ্রেলিন মস্তিষ্কে ক্ষুধার সংকেত পাঠাতে পারে না।'
        ),
      },
      {
        term: l('Leptin Resistance & SOCS3', 'লেপটিন রেজিস্ট্যান্স ও SOCS3'),
        definition: l(
          'A pathophysiological state in obesity where chronic hyperleptinemia induces Suppressor of Cytokine Signaling 3 (SOCS3) and PTP1B, blocking LepRb-JAK2-STAT3 phosphorylation and causing perceived central starvation.',
          'স্থূলতায় সৃষ্ট রোগতাত্ত্বিক অবস্থা যেখানে অতিরিক্ত লেপটিনের প্রতিক্রিয়ায় কোষে SOCS3 প্রোটিন বেড়ে যায় এবং লেপটিনের সংকেত বন্ধ করে দিয়ে মস্তিষ্কে কৃত্রিম ক্ষুধার অনুভূতি জাগায়।'
        ),
      },
      {
        term: l('The Ileal Brake (GLP-1 and PYY)', 'ইলিয়াল ব্রেক (GLP-1 ও PYY)'),
        definition: l(
          'A nutrient-triggered physiological feedback mechanism mediated by distal enteroendocrine L-cells that delays gastric emptying and slows small intestinal transit to optimize absorption and induce prolonged satiety.',
          'ক্ষুদ্রান্ত্রের শেষ প্রান্তে খাদ্য পৌঁছালে L-কোষ থেকে GLP-1 ও PYY নিঃসৃত হয়ে পাকস্থলী খালি হওয়ার গতি কমিয়ে দেয় এবং দীর্ঘক্ষণ পেট ভরা থাকার মানসিক প্রশান্তি দেয়।'
        ),
      },
      {
        term: l('Hedonic Allostasis', 'আনন্দঘন ক্ষুধা ও পুরষ্কার আসক্তি'),
        definition: l(
          'The neurobiological phenomenon where repeated overconsumption of hyper-palatable, calorie-dense foods downregulates striatal D2 dopamine receptors, driving compensatory overeating to achieve baseline pleasure.',
          'চর্বি ও চিনিযুক্ত লোভনীয় খাবার ক্রমাগত খাওয়ার ফলে মস্তিষ্কের ডোপামিন রিসেপ্টর কমে যাওয়া, যার ফলে স্বাভাবিক আনন্দ পেতে ব্যক্তি ক্রমাগত অতিরিক্ত খাবার গ্রহণে বাধ্য হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Analyzing the Satiety Cascade & Macronutrient Satiety Index', 'খাদ্যের উপাদানভিত্তিক তৃপ্তি সূচক বিশ্লেষণ'),
        steps: [
          l(
            'Step 1: Compare the satiety efficiency per calorie of the three macronutrients. Protein induces the highest satiety per kilocalorie, followed by complex fiber-rich carbohydrates, with refined fats and liquid sugars exhibiting the lowest satiety per unit energy.',
            'ধাপ ১: তিন প্রধান খাদ্য উপাদানের প্রতি ক্যালোরিতে তৃপ্তি প্রদানের ক্ষমতা তুলনা করুন। প্রোটিন সর্বাধিক তৃপ্তি তৈরি করে, এরপর আঁশযুক্ত জটিল শর্করা, এবং পরিশোধিত চর্বি ও মিষ্টি পানীয় সর্বনিম্ন তৃপ্তি দেয়।'
          ),
          l(
            'Step 2: Trace the physiological basis of protein satiety: dietary amino acids directly stimulate CCK from duodenal I-cells and GLP-1/PYY from ileal L-cells, while simultaneously triggering hepatic gluconeogenesis and central leucine-mTORC1 anorexigenic signaling.',
            'ধাপ ২: প্রোটিন তৃপ্তির শারীরবৃত্তীয় কারণ: অ্যামিনো অ্যাসিড অন্ত্রের I-কোষ থেকে CCK এবং L-কোষ থেকে GLP-1 ও PYY নিঃসরণ করে, একই সাথে মস্তিষ্কে ক্ষুধার সংকেত দমন করে।'
          ),
          l(
            'Step 3: Evaluate gastric distension: fibrous foods recruit gastric mechanosensitive vagal stretch receptors (IGLEs), signaling fullness to the solitary tract nucleus (NTS) independent of calorie density.',
            'ধাপ ৩: পাকস্থলীর প্রসারণ মূল্যায়ন: আঁশযুক্ত খাবার পাকস্থলী প্রসারিত করে ভেগাস স্নায়ুর মাধ্যমে ক্যালোরি ছাড়াই মস্তিষ্কে পেট ভরা থাকার অনুভূতি পাঠায়।'
          ),
        ],
        conclusion: l(
          'Formulating meals with ≥30 g of high-DIAAS protein, ≥10 g of viscous soluble fiber, and low glycemic load maximizes the duration of GLP-1 and PYY secretion while accelerating post-prandial ghrelin suppression, significantly reducing ad libitum energy intake at subsequent meals.',
          'প্রতি বেলায় ≥৩০ গ্রাম উচ্চমানের প্রোটিন এবং ≥১০ গ্রাম দ্রবণীয় আঁশযুক্ত খাবার রাখলে GLP-1 ও PYY নিঃসরণ দীর্ঘস্থায়ী হয় এবং ঘ্রেলিন দ্রুত কমে যায়, যা পরবর্তী বেলায় অতিরিক্ত খাওয়ার প্রবণতা রোধ করে।'
        ),
      },
      {
        title: l('Calculating Gastric Distension Thresholds & Energy Density in Meal Design', 'খাবারে পাকস্থলীর প্রসারণ সীমা ও ক্যালোরি ঘনত্ব হিসাব'),
        steps: [
          l(
            'Step 1: Understand gastric mechanoreceptor threshold: In human adults, intraganglionic laminar endings (IGLEs) of the vagus nerve require approximately 400 to 500 mL of intragastric volume to generate significant mechanical tension and fire afferent meal-termination signals to the NTS.',
            'ধাপ ১: পাকস্থলীর মেকানোরিসেপ্টর সীমা বুঝুন: প্রাপ্তবয়স্কদের ক্ষেত্রে ভেগাস স্নায়ুর সেন্সরগুলো সক্রিয় হয়ে খাওয়ার তৃপ্তি পাঠাতে পাকস্থলীতে প্রায় ৪০০ থেকে ৫০০ মিলিলিটার আয়তনের খাবার বা তরল প্রয়োজন হয়।'
          ),
          l(
            'Step 2: Compare Meal A (Ultra-Processed fast food): Cheeseburger and fries provide 850 kcal in an ingested mass of only 250 g (volume ~260 mL; energy density = 3.4 kcal/g). Gastric stretch threshold (450 mL) is NOT achieved; patient remains hungry despite excessive calories.',
            'ধাপ ২: প্রথম খাবার (ফাস্টফুড): চিজবার্গার ও ফ্রাই মাত্র ২৫০ গ্রাম ওজনে ৮৫০ কিলোক্যালরি শক্তি দেয় (ঘনত্ব = ৩.৪ kcal/g)। পাকস্থলীর প্রসারণ সীমা (৪৫০ মিলি) অর্জিত না হওয়ায় প্রচুর ক্যালোরি সত্ত্বেও পেট খালি মনে হয়।'
          ),
          l(
            'Step 3: Compare Meal B (Volumetric High-Fiber Whole Food): Grilled chicken breast (150 g, 240 kcal), steamed broccoli and carrots (250 g, 90 kcal), and quinoa with lentils (150 g, 180 kcal) total 510 kcal across 550 g (volume ~560 mL; energy density = 0.93 kcal/g).',
            'ধাপ ৩: দ্বিতীয় খাবার (উচ্চ-আঁশযুক্ত প্রাকৃতিক খাবার): মুরগির মাংস, প্রচুর সবজি এবং ডাল-কুইনোয়ার মিশ্রণ মোট ৫৫০ গ্রাম ওজনে মাত্র ৫১০ কিলোক্যালরি দেয় (ঘনত্ব = ০.৯৩ kcal/g)। এর ৫৬০ মিলিলিটার আয়তন পাকস্থলীকে পূর্ণ প্রসারিত করে।'
          ),
        ],
        conclusion: l(
          'Meal B achieves the vagal stretch threshold (560 mL > 450 mL) while delivering 340 fewer kilocalories than Meal A, demonstrating how volumetric meal engineering triggers mechanical and hormonal satiety at lower energy densities.',
          'দ্বিতীয় খাবারটি পাকস্থলীর প্রসারণ সীমা অতিক্রম করে তৃপ্তির সংকেত পাঠায় এবং প্রথম খাবারের চেয়ে ৩৪০ কিলোক্যালরি কম গ্রহণ করেই দীর্ঘস্থায়ী পেট ভরার অনুভূতি নিশ্চিত করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'What is the precise biochemical mechanism of central leptin resistance observed in individuals with common polygenic obesity?',
          'সাধারণ স্থূলতায় আক্রান্ত ব্যক্তিদের মস্তিষ্কে লেপটিন রেজিস্ট্যান্স তৈরির সুনির্দিষ্ট প্রাণরাসায়নিক প্রক্রিয়াটি কী?'
        ),
        answer: l(
          'Chronic hyperleptinemia from expanded white adipose tissue triggers high intracellular expression of Suppressor of Cytokine Signaling 3 (SOCS3) and protein tyrosine phosphatases (PTP1B) in POMC neurons. SOCS3 binds phosphorylated Tyr985 of the LepRb receptor and blocks JAK2, terminating STAT3 transcriptional activation of alpha-MSH.',
          'অতিরিক্ত চর্বি থেকে ক্রমাগত উচ্চ লেপটিন নিঃসৃত হওয়ায় কোষে SOCS3 এবং PTP1B প্রোটিন বৃদ্ধি পায়। SOCS3 লেপটিন রিসেপ্টরে যুক্ত হয়ে JAK2-STAT3 সংকেত বন্ধ করে দেয়; ফলে লেপটিন উপস্থিত থাকা সত্ত্বেও মস্তিষ্ক ক্ষুধার্ত বোধ করে।'
        ),
      },
      {
        question: l(
          'How do modern GLP-1 receptor agonists (e.g., semaglutide) achieve profound weight loss through dual peripheral and central neuroendocrine mechanisms?',
          'আধুনিক GLP-1 রিসেপ্টর অ্যাগোনিস্টের ওষুধগুলো (যেমন সেমাগ্লুটাইড) কীভাবে প্রান্তীয় ও কেন্দ্রীয় স্নায়ুবিক দ্বিমুখী প্রক্রিয়ার মাধ্যমে কার্যকরভাবে ওজন হ্রাস করে?'
        ),
        answer: l(
          'Peripherally, GLP-1 receptor agonists bind enteric neurons to delay gastric emptying and slow nutrient entry into the duodenum. Centrally, they cross the semi-permeable median eminence and area postrema, directly exciting anorexigenic POMC neurons, inhibiting orexigenic NPY neurons, and dampening mesolimbic dopamine food reward signaling.',
          'প্রান্তীয়ভাবে এরা পাকস্থলী খালি হওয়ার গতি ধীর করে দেয়। কেন্দ্রীয়ভাবে মস্তিষ্কের এরিয়া পোস্ট্রিমা ও হাইপোথ্যালামাসে পৌঁছে এরা সরাসরি POMC নিউরনকে উত্তেজিত করে ক্ষুধা কমায় এবং ডোপামিন রিওয়ার্ড সার্কিট অবদমিত করে মিষ্টি ও চর্বিযুক্ত খাবারের প্রতি আসক্তি দূর করে।'
        ),
      },
      {
        question: l(
          'Why is ghrelin octanoylation by GOAT biologically mandatory for appetite induction, and when does circulating ghrelin peak?',
          'ক্ষুধা উদ্দীপনের জন্য GOAT এনজাইম দ্বারা ঘ্রেলিনের অক্টানয়লেশন কেন জৈবিকভাবে বাধ্যতামূলক এবং রক্তে ঘ্রেলিনের মাত্রা কখন শীর্ষে পৌঁছায়?'
        ),
        answer: l(
          'Ghrelin O-Acyltransferase (GOAT) attaches an 8-carbon medium-chain fatty acid to Serine-3 of proghrelin. Without this hydrophobic octanoyl tail, ghrelin cannot bind or activate the GHSR1a receptor on hypothalamic NPY/AgRP neurons. Ghrelin peaks 1–2 hours prior to scheduled meal times in an anticipatory circadian pulse and plummets within 60 minutes post-prandially.',
          'GOAT এনজাইম ঘ্রেলিনের ৩ নম্বর সেরিনে আট-কার্বনের ফ্যাটি অ্যাসিড যুক্ত করে। এই হাইড্রোফোবিক লেজ ছাড়া ঘ্রেলিন মস্তিষ্কের GHSR1a রিসেপ্টরে বসতে পারে না। নিয়মিত খাবারের ১-২ ঘণ্টা আগে রক্তে ঘ্রেলিন শীর্ষে পৌঁছায় এবং খাওয়ার ৬০ মিনিটের মধ্যে নেমে যায়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'satiety-neuroendocrine-axis',
    title: l('The Gut-Brain Neuroendocrine Appetite Axis', 'অন্ত্র-মস্তিষ্ক নিউরোএন্ডোক্রিন ক্ষুধা নিয়ন্ত্রণ অক্ষ'),
    description: l(
      'Follow the dual-circuit hypothalamic arcuate nucleus as it integrates peripheral hunger (ghrelin) and satiety signals (leptin, GLP-1, PYY, CCK) through the vagus nerve.',
      'হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াসে ক্ষুধার সংকেত (ঘ্রেলিন) এবং তৃপ্তির সংকেত (লেপটিন, GLP-1, PYY, CCK) কীভাবে সমন্বিত হয় তা ভেগাস স্নায়ুপথের মাধ্যমে পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Neuroendocrine signaling simulation for clinical education; clinical pharmacotherapy requires licensed medical consultation.',
      'ক্লিনিক্যাল শিক্ষার জন্য নিউরোএন্ডোক্রিন সংকেত সিমুলেশন; কোনো ওষুধ সেবনে চিকিৎসকের পরামর্শ আবশ্যক।'
    ),
    svgType: 'neuroendocrine-loop',
    items: [
      {
        id: 'node-ghrelin',
        label: l('Gastric Fundus: Ghrelin (P/D1 Cells & GOAT Enzyme)', 'পাকস্থলীর ফান্ডাস: ঘ্রেলিন (P/D1 কোষ ও GOAT এনজাইম)'),
        description: l(
          'Pre-prandial hunger hormone; requires Ser-3 octanoylation by GOAT to cross the median eminence and activate GHSR1a receptors on orexigenic NPY/AgRP neurons.',
          'খাবারের আগে নিঃসৃত একমাত্র ক্ষুধা উদ্দীপক হরমোন; GOAT এনজাইম দ্বারা পরিবর্তিত হয়ে মস্তিষ্কের NPY/AgRP নিউরনকে উত্তেজিত করে তীব্র ক্ষুধা তৈরি করে।'
        ),
        details: l(
          'Ghrelin levels surge 1–2 hours prior to scheduled meal times in an anticipatory circadian pulse. Post-prandial suppression is proportional to meal protein and complex carbohydrate content.',
          'নিয়মিত খাওয়ার সময়ের ১–২ ঘণ্টা আগে রক্তের ঘ্রেলিন বৃদ্ধি পায়। প্রোটিন ও জটিল শর্করা খেলে এই হরমোন দ্রুত নেমে গিয়ে ক্ষুধা নিবারণ করে।'
        ),
        color: '#ef4444',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-leptin',
        label: l('White Adipose Tissue: Leptin (LepRb Receptor & JAK2-STAT3)', 'শ্বেত চর্বি টিস্যু: লেপটিন (LepRb রিসেপ্টর ও JAK2-STAT3)'),
        description: l(
          'Tonic adiposity signal reflecting total somatic fat mass; stimulates anorexigenic POMC neurons and represses NPY/AgRP to curb chronic energy intake.',
          'দেহের মোট চর্বির সংকেতবাহী হরমোন; হাইপোথ্যালামাসে গিয়ে ক্ষুধা কমায় এবং শক্তি খরচ বৃদ্ধি করে।'
        ),
        details: l(
          'Leptin binds the long signaling LepRb isoform, recruiting JAK2 to phosphorylate Tyr1138, activating STAT3 homodimers to upregulate POMC transcription. In obesity, SOCS3 causes leptin resistance.',
          'লেপটিন রিসেপ্টরে যুক্ত হয়ে STAT3 সক্রিয়করণের মাধ্যমে ক্ষুধা কমানোর পেপটাইড তৈরি করে। স্থূলতায় অতিরিক্ত চর্বির কারণে মস্তিষ্কে এর সংকেত পৌঁছাতে বাধাগ্রস্ত হয়।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-lcells',
        label: l('Enteroendocrine L-Cells: GLP-1 & PYY (Ileum / Colon)', 'অন্ত্রীয় L-কোষ: GLP-1 ও PYY (ইলিয়াম ও কোলন)'),
        description: l(
          'Nutrient-stimulated satiety incretins; delay gastric emptying via the ileal brake and activate GLP-1R and Y2 receptors in the NTS and hypothalamus.',
          'খাদ্যের পুষ্টির উপস্থিতিতে নিঃসৃত হরমোন; পাকস্থলী খালি হওয়ার গতি কমায় এবং মস্তিষ্কে পেট ভরা থাকার অনুভূতি তৈরি করে।'
        ),
        details: l(
          'GLP-1(7-36) and PYY(3-36) are co-secreted by distal L-cells upon contact with fatty acids, bile acids (TGR5), and SCFAs (FFAR2). They slow gastrointestinal transit (ileal brake) and signal fullness.',
          'ক্ষুদ্রান্ত্রের শেষে খাবার পৌঁছালে L-কোষ থেকে GLP-1 ও PYY নিঃসৃত হয়ে ভেগাস স্নায়ুর মাধ্যমে মস্তিষ্কে দ্রুত খাওয়ার তৃপ্তি পৌঁছে দেয়।'
        ),
        color: '#10b981',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-arcuate',
        label: l('Arcuate Nucleus: POMC / alpha-MSH vs NPY / AgRP Circuits', 'আর্কুয়েট নিউক্লিয়াস: POMC/আলফা-MSH বনাম NPY/AgRP সার্কিট'),
        description: l(
          'Hypothalamic metabolic hub; alpha-MSH binds MC4R in the paraventricular nucleus to suppress appetite, while AgRP acts as a competitive MC4R antagonist.',
          'মস্তিষ্কের ক্ষুধা নিয়ন্ত্রক প্রধান কেন্দ্র; আলফা-MSH প্যারাভেন্ট্রিকুলার নিউক্লিয়াসের MC4R রিসেপ্টরে যুক্ত হয়ে ক্ষুধা কমায়, আর AgRP ক্ষুধা বাড়ায়।'
        ),
        details: l(
          'POMC is cleaved into alpha-MSH, stimulating MC4R. Mutations in POMC, LEPR, or MC4R produce monogenic, early-onset severe hyperphagic obesity.',
          'POMC থেকে উৎপাদিত আলফা-MSH ক্ষুধা দমন করে। MC4R রিসেপ্টরে জিনগত ত্রুটি থাকলে শৈশব থেকেই মারাত্মক অতিরিক্ত খাওয়ার রোগ দেখা দেয়।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-vagus',
        label: l('Vagal Afferent Pathway & Hindbrain NTS Integration', 'ভেগাস স্নায়ুপথ ও পশ্চাৎমস্তিষ্কের NTS কেন্দ্র'),
        description: l(
          'Sensory nodose ganglion fibers carry mechanical stretch and CCK/GLP-1 endocrine signals to the Nucleus Tractus Solitarius (NTS) for meal termination.',
          'পাকস্থলীর প্রসারণ এবং অন্ত্রের হরমোনের সংকেত ভেগাস স্নায়ু দিয়ে ব্রেনস্টেমের NTS কেন্দ্রে পৌঁছায়, যা প্রতি বেলার আহার সমাপ্ত করে।'
        ),
        details: l(
          'Intraganglionic laminar endings (IGLEs) detect mechanical wall stretch. Combined with chemical activation by CCK-A receptors, vagal afferents inhibit feeding within 15–20 minutes of meal initiation.',
          'পাকস্থলীর দেয়াল প্রসারিত হলে মেকানিক্যাল সেন্সর সক্রিয় হয় এবং খাবার শুরুর ১৫–২০ মিনিটের মাথায় মস্তিষ্ক খাওয়া থামানোর নির্দেশ দেয়।'
        ),
        color: '#06b6d4',
        svgCoords: { x: 190, y: 175, width: 310, height: 48 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('How The Body Regulates Hunger & Fullness', 'মানবদেহ কীভাবে ক্ষুধা ও তৃপ্তি নিয়ন্ত্রণ করে?'),
          paragraphs: [
            l(
              'Appetite regulation is not a simple matter of willpower; it is an intricately coordinated neuroendocrine communication network between the digestive tract, adipose fat stores, and the brain [1, 4]. Every waking hour, specialized chemical messengers travel through the circulation and along sensory nerves to inform the hypothalamus about immediate stomach fullness and long-term bodily energy reserves [1, 3].',
              'ক্ষুধা ও পেট ভরার অনুভূতি কেবল মানসিক ইচ্ছাশক্তির ওপর নির্ভরশীল নয়; এটি পরিপাকতন্ত্র, চর্বি কোষ এবং মস্তিষ্কের মধ্যে এক অত্যন্ত নিখুঁত ও জটিল নিউরোএন্ডোক্রিন যোগাযোগ ব্যবস্থা [১, ৪]। প্রতিটি মুহূর্তে রক্তের হরমোন এবং স্নায়ুতন্ত্রের মাধ্যমে মস্তিষ্ক খবর পায় যে পেটে খাবার আছে কিনা এবং দীর্ঘমেয়াদী শক্তি সঞ্চয়ের কী অবস্থা [১, ৩]।'
            ),
            l(
              'To understand how this system operates, imagine the thermostat in your home. When the room temperature drops below a set point, the heater kicks on. Similarly, when your body energy reserves drop, your brain turns on biological hunger signals that compel you to seek food. Once you have eaten enough, internal sensors shut off the hunger signal and activate fullness [1, 4].',
              'এই ব্যবস্থা বোঝার জন্য ঘরের এয়ার কন্ডিশনার বা থার্মোস্ট্যাটের কথা ভাবুন। তাপমাত্রা নির্দিষ্ট সীমার নিচে নেমে গেলে হিটার স্বয়ংক্রিয়ভাবে চালু হয়। একইভাবে দেহে শক্তির সঞ্চয় কমে গেলে মস্তিষ্ক ক্ষুধার অ্যালার্ম বাজিয়ে খাবার গ্রহণের নির্দেশ দেয়। খাবার খাওয়ার পর ভেতরের সেন্সরগুলো ক্ষুধা বন্ধ করে তৃপ্তির অনুভূতি জাগায় [১, ৪]।'
            ),
            l(
              'When the stomach has been empty for several hours, it produces a hormone that triggers hunger sensations. As food enters the intestines, stretching the gut walls and releasing digestive nutrients, a cascade of satiety hormones signals the brain that energy requirements have been satisfied, culminating in meal termination [3, 4].',
              'পাকস্থলী খালি থাকলে এটি একটি বিশেষ হরমোন নিঃসরণ করে যা আমাদের ক্ষুধার তীব্র অনুভূতি জাগায়। খাবার খাওয়ার পর তা অন্ত্রে পৌঁছালে এবং পুষ্টি উপাদান শোষিত হতে শুরু করলে একদল তৃপ্তিদায়ক হরমোন মস্তিষ্কে পৌঁছে জানান দেয় যে খাওয়া বন্ধ করার সময় হয়েছে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Two Master Hormones: Ghrelin vs Leptin', 'দুই প্রধান নিয়ামক হরমোন: ঘ্রেলিন বনাম লেপটিন'),
          paragraphs: [
            l(
              'Ghrelin is the body only known circulating hunger-stimulating hormone [3]. Secreted primarily by specialized endocrine cells in the fundus of the stomach, ghrelin levels rise sharply during fasting, creating the physical sensation of hunger before scheduled meal times. Immediately following meal ingestion, ghrelin synthesis drops rapidly in proportion to the protein and complex carbohydrate content of the food [3, 4].',
              'দেহের একমাত্র ক্ষুধা উদ্দীপক হরমোন হলো ঘ্রেলিন [৩]। পাকস্থলীর উপরিভাগ থেকে নিঃসৃত এই হরমোন উপবাসের সময় দ্রুত বৃদ্ধি পেয়ে তীব্র ক্ষুধা তৈরি করে। খাবার গ্রহণের সাথে সাথে পাকস্থলীতে এর উৎপাদন কমে যায়, বিশেষ করে খাবারটি যদি প্রোটিন ও জটিল শর্করার সমন্বয়ে গঠিত হয় [৩, ৪]।'
            ),
            l(
              'Think of ghrelin as a loud rumbling stomach alarm that goes off at your regular breakfast, lunch, or dinner hours. If you ignore it, the alarm often fades temporarily after an hour as your liver releases stored glucose, but it will ring louder at the next meal cycle [3, 4].',
              'ঘ্রেলিনকে একটি নিয়মিত অ্যালার্ম ঘড়ির সাথে তুলনা করা যায় যা আপনার সাধারণ খাওয়ার সময়ে জোরে বেজে ওঠে। আপনি খাবার না খেলেও যকৃতের সঞ্চিত গ্লুকোজের কারণে এক ঘণ্টা পর এই তীব্রতা কিছুটা কমতে পারে, তবে পরবর্তী খাবারের সময়ে তা আরও তীব্র হয়ে ফিরে আসে [৩, ৪]।'
            ),
            l(
              'In direct contrast to ghrelin, leptin acts as the body long-term energy gauge [1]. Secreted by white adipose fat cells in direct proportion to total body fat mass, leptin travels through the bloodstream into the hypothalamus. When fat stores are abundant, high leptin levels signal the brain that energy reserves are sufficient, curbing appetite and increasing basal metabolic expenditure [1, 4].',
              'ঘ্রেলিনের সম্পূর্ণ বিপরীত কাজটি করে লেপটিন, যা দীর্ঘমেয়াদী চর্বির হিসাবরক্ষক [১]। দেহের চর্বি কোষ থেকে নিঃসৃত এই হরমোন রক্তে মিশে মস্তিষ্কের হাইপোথ্যালামাসে পৌঁছায়। দেহে চর্বির পরিমাণ যথেষ্ট থাকলে উচ্চ লেপটিন মস্তিষ্ককে সংকেত দেয় যে সঞ্চয় পর্যাপ্ত, ফলে ক্ষুধা কমে যায় এবং বিপাকীয় শক্তি ব্যয় স্বাভাবিক থাকে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Intestinal Satiety Hormones: GLP-1 & PYY', 'অন্ত্রীয় তৃপ্তি হরমোন: GLP-1 ও PYY'),
          paragraphs: [
            l(
              'As partially digested food enters the small intestine, it comes into direct contact with specialized enteroendocrine cells [3]. Duodenal cells release cholecystokinin (CCK) in response to dietary proteins and fats, stimulating bile secretion and sending immediate fullness signals through the vagus nerve to the brainstem within fifteen minutes [3, 4].',
              'অর্ধ-পরিপাককৃত খাদ্য ক্ষুদ্রান্ত্রে প্রবেশ করা মাত্রই অন্ত্রের বিশেষ হরমোন উৎপাদনকারী কোষগুলো সক্রিয় হয়ে ওঠে [৩]। চর্বি ও প্রোটিন ক্ষুদ্রান্ত্রের প্রথম অংশে পৌঁছালে কোলেসিস্টোকাইনিন (CCK) নিঃসৃত হয়, যা পিত্তরস নিঃসরণ বাড়ায় এবং ভেগাস স্নায়ুর মাধ্যমে ১৫–২০ মিনিটের মধ্যে মস্তিষ্কে খাবার সমাপ্তির সংকেত পাঠায় [৩, ৪]।'
            ),
            l(
              'Further downstream in the ileum and colon, enteroendocrine L-cells secrete Glucagon-Like Peptide-1 (GLP-1) and Peptide YY (PYY) [2, 3]. These hormones act as a physiological "ileal brake," physically slowing the rate at which the stomach empties into the intestine while simultaneously entering the brain to promote prolonged post-prandial fullness and contentment [2, 3].',
              'ক্ষুদ্রান্ত্রের শেষ প্রান্তে অবস্থিত L-কোষগুলো Glucagon-Like Peptide-1 (GLP-1) এবং Peptide YY (PYY) নিঃসরণ করে [২, ৩]। এই হরমোনগুলো পাকস্থলী খালি হওয়ার গতি কমিয়ে দেয় ("ইলিয়াল ব্রেক") এবং মস্তিষ্কে পৌঁছে দীর্ঘক্ষণ পেট ভরা থাকার মানসিক প্রশান্তি নিশ্চিত করে [২, ৩]।'
            ),
            l(
              'This biological process explains why eating too fast frequently leads to uncomfortable overeating: it takes approximately 15 to 20 minutes for ingested food to reach the lower gut and stimulate sufficient GLP-1 and PYY to tell your brain you are full [2, 3].',
              'এই শারীরবৃত্তীয় প্রক্রিয়াটি ব্যাখ্যা করে কেন খুব দ্রুত খেলে অতিরিক্ত খাওয়া হয়ে যায়: খাবার ক্ষুদ্রান্ত্রে পৌঁছে পর্যাপ্ত GLP-1 ও PYY নিঃসরণ করে মস্তিষ্কে তৃপ্তির সংকেত পাঠাতে অন্তত ১৫ থেকে ২০ মিনিট সময় লাগে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Hedonic Hunger vs Metabolic Hunger', 'আনন্দঘন ক্ষুধা বনাম শারীরবৃত্তীয় ক্ষুধা'),
          paragraphs: [
            l(
              'Human feeding behavior is governed by two competing neural systems: the homeostatic metabolic circuit in the hypothalamus, and the hedonic reward circuit in the mesolimbic dopamine pathway [1, 4]. Homeostatic hunger arises from true energetic depletion, signaling that cells require glucose, amino acids, or fatty acids to maintain physiological survival [1, 4].',
              'মানুষের খাওয়ার আচরণ মূলত দুটি স্নায়ুবিক ব্যবস্থার লড়াই: হাইপোথ্যালামাসের শারীরবৃত্তীয় কেন্দ্র, এবং মস্তিষ্কের ডোপামিন চালিত আনন্দঘন কেন্দ্র [১, ৪]। শারীরবৃত্তীয় ক্ষুধা তৈরি হয় যখন কোষে সত্যিই শক্তির ঘাটতি দেখা দেয় এবং বেঁচে থাকার জন্য ক্যালোরির প্রয়োজন হয় [১, ৪]।'
            ),
            l(
              'Hedonic hunger, by contrast, is driven by the pleasure, aroma, and anticipation of ultra-palatable, calorie-dense foods combining sugar, salt, and fat [1, 4, 6]. This explains the common experience of having "room for dessert": your stomach may be physically full from dinner, but the sight of chocolate cake triggers a surge of dopamine in your reward centers that overrides hypothalamic fullness signals [4, 6].',
              'অন্যদিকে আনন্দঘন ক্ষুধা হলো চর্বি, মিষ্টি ও লবণে ভরা লোভনীয় খাবার দেখে মনে তৈরি হওয়া তীব্র আসক্তি [১, ৪, ৬]। এটি ব্যাখ্যা করে কেন পেট ভরা থাকার পরও মিষ্টি খাওয়ার আলাদা ক্ষুধা তৈরি হয়: পাকস্থলী পূর্ণ থাকলেও চকোলেট কেকের দৃশ্য মস্তিষ্কের ডোপামিন কেন্দ্রকে জাগিয়ে তোলে এবং প্রাকৃতিক তৃপ্তির সংকেতকে অবদমিত করে [৪, ৬]।'
            ),
            l(
              'In modern food environments, intense dopamine release can completely override hypothalamic satiety signals, causing individuals to consume large quantities of food even when cellular energy stores and adipose tissue are completely replete [1, 4, 6].',
              'আধুনিক প্রক্রিয়াজাত খাদ্যের জগতে এই ডোপামিন সংকেত মস্তিষ্কের প্রাকৃতিক তৃপ্তির সংকেতকে ছাপিয়ে যায়, ফলে পেট ভরা থাকা সত্ত্বেও মানুষ অতিরিক্ত ক্যালোরি গ্রহণ করে স্থূলতার দিকে ধাবিত হয় [১, ৪, ৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Dietary Strategies to Maximize Satiety', 'খাবারে দীর্ঘস্থায়ী তৃপ্তি নিশ্চিত করার কৌশল'),
          paragraphs: [
            l(
              'To structure meals that support natural satiety neuroendocrinology, individuals should build each plate around high-satiety macronutrients [3, 4]. Prioritizing at least 25 to 35 grams of lean protein stimulates maximal release of CCK, GLP-1, and PYY while accelerating post-prandial ghrelin suppression [2, 3].',
              'প্রাকৃতিক তৃপ্তি অক্ষকে কার্যকর রাখতে প্রতিটি প্রধান খাবারে উচ্চ-তৃপ্তিদায়ক উপাদান রাখা উচিত [৩, ৪]। প্রতি বেলায় অন্তত ২৫ থেকে ৩৫ গ্রাম প্রোটিন নিশ্চিত করলে তা অন্ত্রের CCK, GLP-1 ও PYY নিঃসরণ বহুগুণ বাড়িয়ে দেয় এবং ক্ষুধার ঘ্রেলিন হরমোনকে দ্রুত নামিয়ে আনে [২, ৩]।'
            ),
            l(
              'Incorporating abundant non-starchy vegetables and legumes provides viscous soluble fiber that physically expands in the stomach, activating mechanosensitive vagal stretch receptors to signal fullness early, while slowing carbohydrate absorption to prevent rapid post-prandial hypoglycemic hunger spikes [3, 4].',
              'সবজি ও ডালজাতীয় খাবারের দ্রবণীয় আঁশ পাকস্থলীতে ফুলে ওঠে এবং ভেগাস স্নায়ুর মেকানিক্যাল সেন্সরকে সক্রিয় করে ক্যালোরি ছাড়াই দ্রুত পেট ভরার অনুভূতি দেয়, একই সাথে রক্তে গ্লুকোজের আকস্মিক ওঠানামা রোধ করে [৩, ৪]।'
            ),
            l(
              'Eating whole foods that require active mastication and drinking water 15 minutes before meals extends meal duration past the 20-minute threshold, giving enteroendocrine L-cells sufficient time to release their hormonal brakes before second helpings are served [3, 4].',
              'চিবিয়ে খেতে হয় এমন প্রাকৃতিক খাবার খাওয়া এবং খাবারের ১৫ মিনিট আগে পানি পান খাওয়ার সময়কে ২০ মিনিটের সীমার ওপারে নিয়ে যায়, যা অন্ত্রের L-কোষগুলোকে পূর্ণমাত্রায় তৃপ্তির হরমোন নিঃসরণের সুযোগ দেয় [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Educational Takeaways', 'মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'In summary, appetite is tightly governed by peripheral endocrine signals (ghrelin, leptin, GLP-1, PYY) communicating with hypothalamic circuits and the vagus nerve [1, 3]. Protein and dietary fiber optimize satiety hormones, while understanding the distinction between metabolic hunger and hedonic dopamine cravings is essential for long-term weight management [1, 4].',
              'সংক্ষেপে, মানুষের ক্ষুধা পাকস্থলী ও অন্ত্রের হরমোন (ঘ্রেলিন, লেপটিন, GLP-1, PYY) এবং মস্তিষ্কের ভেগাস স্নায়ু দ্বারা নিয়ন্ত্রিত [১, ৩]। প্রোটিন ও আঁশযুক্ত খাবার তৃপ্তির হরমোন বাড়িয়ে ক্ষুধা বশে রাখে, আর শারীরবৃত্তীয় ও আনন্দঘন ক্ষুধার পার্থক্য বোঝা দীর্ঘস্থায়ী স্বাস্থ্য নিয়ন্ত্রণের মূল চাবিকাঠি [১, ৪]।'
            ),
            l(
              'Eating slowly, chewing thoroughly, and anchoring meals with protein and viscous fiber activates the ileal brake and satisfies stomach stretch receptors, preventing accidental caloric overconsumption [2, 3, 4].',
              'ধীরে ধীরে খাওয়া, ভালোভাবে চিবানো এবং প্রোটিন ও আঁশের সমন্বয়ে খাবার সাজানো অন্ত্রের ব্রেক চালু করে এবং অতিরিক্ত ক্যালোরি গ্রহণ থেকে দেহকে সুরক্ষিত রাখে [২, ৩, ৪]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'introduction',
          heading: l('Neurochemical Organization of the Hypothalamic Arcuate Nucleus', 'হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াসের নিউরোকেমিক্যাল বিন্যাস'),
          paragraphs: [
            l(
              'The arcuate nucleus (ARC) of the ventromedial hypothalamus acts as the primary sensory gatekeeper integrating peripheral metabolic hormones with central autonomous feeding behavior [1]. Situated directly adjacent to the semi-permeable median eminence, ARC neurons sample circulating peptides without an impermeable blood-brain barrier [1, 4]. The ARC contains two functionally antagonistic neuronal populations that form a coordinated metabolic toggle switch [1].',
              'হাইপোথ্যালামাসের ভেন্ট্রোমেডিয়াল অঞ্চলে অবস্থিত আর্কুয়েট নিউক্লিয়াস (ARC) হলো প্রান্তীয় হরমোনের সংকেত গ্রহণকারী প্রধান স্নায়ুকেন্দ্র [১]। মিডিয়ান এমিনেন্সের কাছাকাছি অবস্থানের কারণে এর নিউরনগুলো রক্ত-মস্তিষ্ক প্রাচীরের বাধা ছাড়াই সরাসরি রক্তের হরমোনগুলোর সংস্পর্শে আসতে পারে [১, ৪]। এখানে দুটি পরস্পর বিপরীত নিউরন গুচ্ছ অবস্থান করে যা ক্ষুধার অন-অফ সুইচ হিসেবে কাজ করে [১]।'
            ),
            l(
              'The anorexigenic (satiety-promoting) circuit comprises pro-opiomelanocortin (POMC) and cocaine- and amphetamine-regulated transcript (CART) neurons [1]. Post-translational cleavage of POMC by prohormone convertases (PC1/3 and PC2) produces alpha-Melanocyte-Stimulating Hormone (alpha-MSH), which projects to second-order neurons in the paraventricular nucleus (PVN) to activate Melanocortin-4 Receptors (MC4R), suppressing food intake and stimulating sympathetic thermogenesis [1].',
              'ক্ষুধা নিবারক সার্কিটে থাকে POMC এবং CART নিউরন [১]। বিশেষ এনজাইম দ্বারা POMC প্রোটিন ভেঙে আলফা-মেলানোসাইট-স্টিমুলেটিং হরমোন (alpha-MSH) তৈরি হয়, যা প্যারাভেন্ট্রিকুলার নিউক্লিয়াসের (PVN) মেলানোকর্টিন-৪ রিসেপ্টরে (MC4R) যুক্ত হয়ে ক্ষুধা বন্ধ করে এবং বিপাকীয় শক্তি ব্যয় বাড়িয়ে দেয় [১]।'
            ),
            l(
              'Mutations in the leptin-melanocortin pathway—including homozygous loss-of-function mutations in LEPR, POMC, PCSK1, or MC4R—represent the most frequent monogenic causes of severe, early-onset morbid obesity in humans, characterized by relentless hyperphagia and endocrine dysfunction [1, 4].',
              'লেপটিন-মেলানোকর্টিন পথের জিনগত ত্রুটি—যেমন LEPR, POMC বা MC4R রিসেপ্টরের মিউটেশন—মানবদেহে শৈশবকালীন মারাত্মক স্থূলতার অন্যতম প্রধান জিনগত কারণ, যার ফলে শিশু প্রচণ্ড ক্ষুধা ও অনিয়ন্ত্রিত খাওয়ার প্রবণতায় ভোগে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Orexigenic Circuit & Ghrelin O-Acyltransferase (GOAT) Biochemistry', 'ক্ষুধা উদ্দীপক সার্কিট ও ঘ্রেলিন ও-অ্যাসাইলট্রান্সফারেজের প্রাণরসায়ন'),
          paragraphs: [
            l(
              'The orexigenic (hunger-promoting) population comprises Neuropeptide Y (NPY) and Agouti-Related Protein (AgRP) co-expressing neurons [1]. AgRP acts as a potent endogenous inverse agonist and competitive antagonist at the MC4R, blocking alpha-MSH binding to drive voracious feeding behavior [1]. Concurrently, NPY/AgRP terminals release the inhibitory neurotransmitter GABA onto adjacent POMC somas, silencing anorexigenic output during energy deprivation [1].',
              'বিপরীত দিকে ক্ষুধা উদ্দীপক সার্কিটে থাকে NPY এবং AgRP নিউরন [১]। AgRP হলো MC4R রিসেপ্টরের প্রাকৃতিক অ্যান্টাগনিস্ট, যা আলফা-MSH কে বাধা দিয়ে প্রচণ্ড ক্ষুধার অনুভূতি জাগায় [১]। একই সাথে এই নিউরনগুলো GABA নিঃসরণ করে পাশের POMC নিউরনের সংকেতকে অবদমিত করে রাখে [১]।'
            ),
            l(
              'Orexigenic drive is stimulated by ghrelin, a 28-amino acid peptide synthesized by gastric oxyntic P/D1 cells [3]. To cross the median eminence and bind the Growth Hormone Secretagogue Receptor 1a (GHSR1a) on NPY/AgRP neurons, proghrelin requires post-translational modification by Ghrelin O-Acyltransferase (GOAT), an integral endoplasmic reticulum membrane enzyme that transfers an 8-carbon octanoyl moiety onto Serine-3 [3]. Des-acyl ghrelin lacks GHSR1a bioactivity, demonstrating the absolute requirement of lipid acylation for appetite signaling [3].',
              'পাকস্থলীর P/D1 কোষ থেকে নিঃসৃত ২৮-অ্যামিনো অ্যাসিডের ঘ্রেলিন এই ক্ষুধা সার্কিটকে সক্রিয় করে [৩]। মস্তিষ্কের GHSR1a রিসেপ্টরে যুক্ত হতে হলে ঘ্রেলিন ও-অ্যাসাইলট্রান্সফারেজ (GOAT) এনজাইম দ্বারা ঘ্রেলিনের তিন নম্বর সেরিনে আট-কার্বনের অক্টানয়েল ফ্যাটি অ্যাসিড যুক্ত হওয়া আবশ্যক; এই ফ্যাটি অ্যাসিড ছাড়া ঘ্রেলিন ক্ষুধার সংকেত পাঠাতে অক্ষম [৩]।'
            ),
            l(
              'Nutritional status dictates GOAT enzymatic substrate availability: dietary medium-chain triglycerides (MCTs, specifically octanoic acid C8:0) provide direct fatty acyl donors for GOAT, illustrating an intimate biochemical bridge between dietary lipid composition and endocrine appetite modulation [3, 4].',
              'খাদ্যের পুষ্টি উপাদান সরাসরি GOAT এনজাইমের কাঁচামাল সরবরাহ করে: খাদ্যের মিডিয়াম-চেইন ট্রাইগ্লিসারাইড (বিশেষ করে অক্টানোয়িক অ্যাসিড C8:0) ঘ্রেলিনের ফ্যাটি অ্যাসিড লেজ তৈরি করতে সরাসরি ব্যবহৃত হয়, যা খাদ্য চর্বি ও ক্ষুধা হরমোনের মধ্যে ঘনিষ্ঠ যোগসূত্র প্রমাণ করে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Enteroendocrine Incretin Cascades & The Vagal-NTS Circuit', 'অন্ত্রের ইনক্রিটিন সংকেত প্রবাহ ও ভেগাস-NTS সার্কিট'),
          paragraphs: [
            l(
              'Meal termination relies on the rapid integration of luminal nutrient signals by enteroendocrine cells lining the gut mucosa [3]. In the proximal duodenum and jejunum, I-cells release cholecystokinin (CCK) in response to free fatty acids (detected via GPR40/FFA1) and amino acids (sensed via the calcium-sensing receptor, CaSR) [3, 4]. CCK binds high-affinity CCK-A receptors on subdiaphragmatic vagal afferent terminals, firing action potentials into the Nucleus Tractus Solitarius (NTS) of the dorsal vagal complex [3].',
              'আহার সমাপ্তি ঘটে অন্ত্রের মিউকোসার বিশেষ হরমোন উৎপাদনকারী কোষগুলোর সক্রিয়তার মাধ্যমে [৩]। ডিওডেনামের I-কোষ থেকে নিঃসৃত CCK ভেগাস স্নায়ুর CCK-A রিসেপ্টরে যুক্ত হয়ে ব্রেনস্টেমের NTS কেন্দ্রে সংকেত পাঠায়, যা খাওয়ার গতি কমিয়ে দেয় [৩, ৪]।'
            ),
            l(
              'Distal enteroendocrine L-cells in the ileum and colon synthesize and co-secrete Glucagon-Like Peptide-1 (GLP-1) and Peptide YY (PYY3-36) [2, 3]. PYY acts as a high-affinity agonist at autoinhibitory presynaptic Neuropeptide Y Y2 receptors (NPY2R) on NPY/AgRP neurons, shutting down orexigenic peptide release [3]. Concurrently, circulating and vagal GLP-1 activates GLP-1 receptors in the NTS and hypothalamus, enhancing glucose-dependent insulin secretion, delaying gastric motility, and instigating central satiety [2, 3].',
              'ক্ষুদ্রান্ত্রের শেষ প্রান্তে অবস্থিত L-কোষগুলো GLP-1 এবং PYY(3-36) নিঃসরণ করে [২, ৩]। PYY মস্তিষ্কের NPY/AgRP নিউরনের Y2 রিসেপ্টরে যুক্ত হয়ে ক্ষুধার সংকেত বন্ধ করে দেয় [৩]। একই সাথে GLP-1 অগ্ন্যাশয়ে ইনসুলিন বাড়ায়, পাকস্থলী খালি হওয়ার গতি কমায় এবং হাইপোথ্যালামাসে পৌঁছে পেট ভরা থাকার তীব্র অনুভূতি তৈরি করে [২, ৩]।'
            ),
            l(
              'Native GLP-1 has an extremely brief plasma half-life of 1.5 to 2 minutes due to rapid enzymatic cleavage by Dipeptidyl Peptidase-4 (DPP-4) at alanine position 2, generating inactive GLP-1(9-36)amide. Consequently, endocrine signaling through the vagus nerve is predominantly local and paracrine before entering the portal vein [2, 3].',
              'প্রাকৃতিক GLP-1 রক্তে মাত্র দেড় থেকে দুই মিনিট টিকে থাকে কারণ DPP-4 নামক এনজাইম একে দ্রুত ভেঙে নিষ্ক্রিয় করে ফেলে। ফলে অন্ত্রের ভেগাস স্নায়ু সংবেদন স্থানীয় প্যারাড্রিন পদ্ধতিতে অতি-দ্রুত মস্তিষ্কে এই তৃপ্তির বার্তা পৌঁছে দিতে অগ্রণী ভূমিকা পালন করে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Molecular Mechanisms of Leptin Resistance & Pharmacotherapy', 'লেপটিন রেজিস্ট্যান্সের আণবিক প্রক্রিয়া ও আধুনিক চিকিৎসা'),
          paragraphs: [
            l(
              'Under physiological conditions, adipocyte-derived leptin binds the long-form leptin receptor (LepRb), activating receptor-associated Janus Kinase 2 (JAK2) [1]. JAK2 autophosphorylates and transphosphorylates cytoplasmic tyrosine residues on LepRb, including Tyr1138, which recruits Signal Transducer and Activator of Transcription 3 (STAT3) [1]. Phosphorylated STAT3 dimerizes, translocates to the nucleus, and directly drives POMC transcription while repressing AgRP expression [1].',
              'সুস্থ দেহে চর্বি থেকে নিঃসৃত লেপটিন LepRb রিসেপ্টরে যুক্ত হয়ে JAK2-STAT3 সংকেত চালু করে [১]। ফসফরাইলেটেড STAT3 নিউক্লিয়াসে গিয়ে সরাসরি POMC জিনের প্রকাশ বাড়ায় এবং ক্ষুধার AgRP জিনকে অবদমিত করে [১]।'
            ),
            l(
              'In diet-induced polygenic obesity, sustained hyperleptinemia triggers negative feedback via Suppressor of Cytokine Signaling 3 (SOCS3) and protein tyrosine phosphatase 1B (PTP1B) [1]. SOCS3 binds Tyr985 of LepRb, physically inhibiting JAK2 kinase activity and decoupling leptin from downstream STAT3 signaling. To bypass leptin resistance, modern pharmacology utilizes long-acting GLP-1 and dual GIP/GLP-1 receptor agonists (e.g., semaglutide, tirzepatide), which directly engage G-protein coupled receptors in the area postrema, NTS, and arcuate nucleus, inducing potent reductions in caloric intake and body weight [2, 3, 5].',
              'কিন্তু অতিরিক্ত চর্বিজাত স্থূলতায় অবিরত উচ্চ লেপটিনের কারণে কোষে SOCS3 প্রোটিন বেড়ে যায় [১]। SOCS3 সরাসরি JAK2 কে অবদমিত করে লেপটিনের সংকেত বন্ধ করে দেয় ("লেপটিন রেজিস্ট্যান্স")। এই প্রতিরোধকে এড়িয়ে আধুনিক সেমাগ্লুটাইড বা টির্জেপাটাইডের মতো ওষুধগুলো সরাসরি GLP-1 রিসেপ্টরকে উত্তেজিত করে মস্তিষ্কের ক্ষুধা কেন্দ্র নিয়ন্ত্রণ করে এবং নাটকীয়ভাবে ওজন কমাতে সাহায্য করে [২, ৩, ৫]।'
            ),
            l(
              'In the landmark STEP 1 randomized controlled trial, once-weekly subcutaneous semaglutide (2.4 mg) combined with lifestyle intervention produced a mean body weight loss of 14.9% at 68 weeks compared to 2.4% with placebo, fundamentally transforming obesity medicine from behavioral counseling into receptor-targeted neuroendocrine intervention [5].',
              'যুগান্তকারী STEP 1 ট্রায়ালে দেখা গেছে যে সপ্তাহে একবার সেমাগ্লুটাইড (২.৪ মিগ্রা) প্রয়োগে ৬৮ সপ্তাহে রোগীদের গড় ১৪.৯% ওজন হ্রাস পেয়েছে (যেখানে প্লাসিবোতে কমেছিল মাত্র ২.৪%), যা স্থূলতার চিকিৎসাকে সাধারণ কাউন্সেলিং থেকে রিসেপ্টর-নির্দিষ্ট বিজ্ঞানে রূপান্তরিত করেছে [৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Nutritional Modulation of Satiety Hormones in Clinical Practice', 'ক্লিনিক্যাল ক্ষেত্রে তৃপ্তি হরমোন নিয়ন্ত্রণের খাদ্যতালিকা কৌশল'),
          paragraphs: [
            l(
              'Evidence-based dietary prescription leverages macronutrient-specific hormonal responses to treat obesity and metabolic syndrome [3, 4]. High-protein diets (providing 1.2–1.6 g/kg/day) produce significantly higher post-prandial area-under-the-curve (AUC) for PYY and GLP-1 compared to isoenergetic high-fat diets, while sustaining ghrelin nadir for an extended duration [2, 3].',
              'স্থূলতা ও মেটাবলিক সিন্ড্রোম চিকিৎসায় খাদ্য উপাদানের হরমোন উদ্দীপনা ক্ষমতা কাজে লাগানো হয় [৩, ৪]। গবেষণায় প্রমাণিত যে উচ্চ প্রোটিনযুক্ত খাবার চর্বিযুক্ত খাবারের তুলনায় অন্ত্রের PYY ও GLP-1 নিঃসরণ অনেক বেশি বাড়িয়ে দেয় এবং দীর্ঘ সময় ঘ্রেলিন হরমোনকে অবদমিত রাখে [২, ৩]।'
            ),
            l(
              'Furthermore, prescribing non-digestible prebiotic fibers (inulin, fructo-oligosaccharides) promotes colonic microbial fermentation into short-chain fatty acids (acetate, propionate, butyrate), which bind Free Fatty Acid Receptor 2 (FFAR2) and FFAR3 on colonocytes to stimulate baseline L-cell secretion of GLP-1 and PYY over a 24-hour cycle [3, 4].',
              'অতিরিক্তভাবে ইনুলিনের মতো প্রিবায়োটিক আঁশ বৃহদন্ত্রের ব্যাকটেরিয়ার মাধ্যমে শর্ট-চেইন ফ্যাটি অ্যাসিডে রূপান্তরিত হয়ে কোলনের L-কোষ থেকে সারাদিন ধরে GLP-1 ও PYY নিঃসরণ বজায় রাখে, যা স্বাভাবিকভাবে ক্ষুধা নিয়ন্ত্রণে অত্যন্ত কার্যকর [৩, ৪]।'
            ),
            l(
              'Clinicians should counsel patients on the mechanics of solid vs liquid calories: liquid carbohydrate and fat beverages bypass oral mastication and accelerate gastric emptying, failing to elicit adequate CCK and GLP-1 release and promoting rapid passive overconsumption [3, 4].',
              'চিকিৎসকদের উচিত তরল বনাম কঠিন খাবারের পার্থক্যের ব্যাপারে রোগীদের সচেতন করা: জুস বা কোল্ড ড্রিংকসের মতো মিষ্টি পানীয় চিবানোর প্রয়োজন না থাকায় দ্রুত পেট থেকে নেমে যায় এবং পর্যাপ্ত তৃপ্তি হরমোন নিঃসরণ করতে ব্যর্থ হয়ে অতিরিক্ত ক্যালোরি গ্রহণের ঝুঁকি বহুগুণ বাড়ায় [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Summary & Clinical Pearls', 'একাডেমিক সারাংশ ও ক্লিনিক্যাল মুক্তা'),
          paragraphs: [
            l(
              'Appetite regulation is governed by the coordinated interaction between peripheral endocrine sensors (ghrelin, leptin, GLP-1, PYY, CCK), vagal-hindbrain pathways, and the hypothalamic arcuate toggle switch [1, 3]. Obesity is characterized by cellular leptin resistance driven by SOCS3 [1]. Targeting incretin and gastrointestinal hormone physiology through both targeted macronutrient design and pharmacological agonists provides effective therapeutic control over human energy intake [2, 3, 5].',
              'ক্ষুধা ও তৃপ্তি মূলত প্রান্তীয় হরমোন, ভেগাস স্নায়ু এবং হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াসের মেলানোকর্টিন ব্যবস্থার সুষম সমন্বয়ে পরিচালিত হয় [১, ৩]। স্থূলতায় SOCS3 দ্বারা লেপটিন রেজিস্ট্যান্স তৈরি হয় [১]। উচ্চ প্রোটিন, আঁশযুক্ত খাবার এবং প্রয়োজনে আধুনিক ইনক্রিটিন থেরাপির মাধ্যমে এই ক্ষুধা অক্ষকে নিয়ন্ত্রণ করা সম্ভব [২, ৩, ৫]।'
            ),
            l(
              'Optimizing protein distribution (≥30 g/meal), maximizing dietary fiber (≥35 g/day), and avoiding liquid calories form the evidence-based nutritional cornerstone for appetite control and metabolic health [3, 4].',
              'প্রতি বেলায় কমপক্ষে ৩০ গ্রাম প্রোটিন নিশ্চিত করা, দৈনিক অন্তত ৩৫ গ্রাম আঁশ গ্রহণ এবং মিষ্টি পানীয় বর্জন করাই ক্ষুধা নিয়ন্ত্রণ ও দীর্ঘমেয়াদী বিপাকীয় সুরক্ষার প্রধান বিজ্ঞানসম্মত ভিত্তি [৩, ৪]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'introduction',
          heading: l('Single-Cell Transcriptomics & Hypothalamic Circuit Heterogeneity', 'একক কোষ ট্রান্সক্রিপ্টোমিক্স ও হাইপোথ্যালামিক বৈচিত্র্য'),
          paragraphs: [
            l(
              'Single-cell RNA sequencing (scRNA-seq) has dismantled the traditional view of monolithic POMC and AgRP neuronal pools, uncovering profound transcriptional and functional heterogeneity within the hypothalamic arcuate nucleus [1]. Sub-clustering reveals that POMC neurons bifurcate into GABAergic and glutamatergic lineages expressing distinct receptors, including serotonin 2C receptors (5-HT2CR) and cannabinoid-1 receptors (CB1R) [1].',
              'একক কোষ আরএনএ সিকোয়েন্সিং হাইপোথ্যালামাসের POMC ও AgRP নিউরনের প্রথাগত ধারণাকে ভেঙে দিয়েছে [১]। বিশ্লেষণে দেখা গেছে যে POMC নিউরনগুলো একাধিক উপ-প্রকারে বিভক্ত; কিছু নিউরন গ্লুটামেটার্জিক এবং কিছু GABAergic সংকেত বহন করে যার ওপর সেরোটোনিন ও ক্যানাবিনয়েড রিসেপ্টরের ভিন্ন ভিন্ন নিয়ন্ত্রণ বিদ্যমান [১]।'
            ),
            l(
              'Similarly, AgRP neurons exhibit distinct neuroanatomical projection topographies, projecting selectively to the lateral hypothalamic area (LHA) to stimulate motor food seeking, to the bed nucleus of the stria terminalis (BNST) to relieve negative emotional hunger valence, and to the parabrachial nucleus (PBN) to suppress visceral threat responses [1].',
              'একইভাবে AgRP নিউরনগুলো মস্তিষ্কের ভিন্ন ভিন্ন অঞ্চলে শাখা বিস্তার করে: ল্যাটেরাল হাইপোথ্যালামাসে (LHA) সংকেত পাঠিয়ে এরা খাবার খোঁজার শারীরিক উদ্যম তৈরি করে, BNST-তে পাঠিয়ে ক্ষুধার মানসিক বিরক্তি কমায় এবং প্যারাব্রাকিয়াল নিউক্লিয়াসে গিয়ে বিপদের সংকেত অবদমিত করে খাবার খেতে বাধ্য করে [১]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Optogenetics, Negative Valence & Feeding Motivation', 'অপটোজেনেটিক্স, নেগেটিভ ভ্যালেন্স ও খাদ্যের প্রণোদনা'),
          paragraphs: [
            l(
              'Channelrhodopsin-assisted circuit mapping has revealed that hunger is primarily driven by "negative valence" rather than positive anticipation [1]. In vivo optogenetic photostimulation of AgRP neurons elicits an aversive, uncomfortable affective state in rodents. Animals actively perform operant tasks and seek food to turn off the unpleasant firing of AgRP neurons [1].',
              'অপটোজেনেটিক গবেষণায় দেখা গেছে যে ক্ষুধা মূলত একটি "অস্বস্তিকর অনুভূতি" (নেগেটিভ ভ্যালেন্স) দ্বারা পরিচালিত হয় [১]। ইঁদুরের AgRP নিউরন নীল আলো দিয়ে সক্রিয় করলে তাদের ভেতরে তীব্র বিরক্তি ও অস্বস্তি তৈরি হয়; ফলে প্রাণীটি যেকোনো উপায়ে খাবার খুঁজে খায় কেবল সেই অপ্রীতিকর সংকেতটি বন্ধ করার জন্য [১]।'
            ),
            l(
              'Remarkably, the sight or smell of food rapidly silences AgRP firing within seconds, long before nutrients enter the circulation, demonstrating predictive sensory pre-systemic feedback that reassures the brain that caloric replenishment is imminent [1, 3].',
              'আশ্চর্যজনকভাবে খাবার দেখা বা তার ঘ্রাণ পাওয়ার মাত্র কয়েক সেকেন্ডের মধ্যেই AgRP নিউরন শান্ত হয়ে যায়—খাবার পেটে গিয়ে রক্তে মেশার অনেক আগেই মস্তিষ্ক এই পূর্বানুমানমূলক সংকেতের মাধ্যমে বুঝতে পারে যে শক্তির জোগান আসছে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Mesolimbic Dopaminergic Crosstalk & Food Reward Allostasis', 'মেসোলিম্বিক ডোপামিন সংকেত ও খাদ্য পুরষ্কারের অ্যালোস্ট্যাসিস'),
          paragraphs: [
            l(
              'The homeostatic hypothalamic arcuate circuit engages in continuous bidirectional dialogue with the mesolimbic dopamine reward system [1, 6]. Dopaminergic neurons in the ventral tegmental area (VTA) project to the nucleus accumbens (NAc) shell, encoding the motivational salience and "wanting" of food [6]. Adiposity and satiety signals directly modulate this circuit: leptin and insulin bind receptors on VTA dopamine neurons, suppressing burst firing and lowering the reward value of food [1, 6].',
              'হাইপোথ্যালামাসের শারীরবৃত্তীয় কেন্দ্র মস্তিষ্কের ভেন্ট্রাল টেগমেন্টাল এরিয়া (VTA) এবং নিউক্লিয়াস অ্যাকুম্বেন্সের (NAc) ডোপামিন পুরষ্কার কেন্দ্রের সাথে প্রতিনিয়ত যোগাযোগ করে [১, ৬]। লেপটিন ও ইনসুলিন VTA-র নিউরনে যুক্ত হয়ে ডোপামিনের আকস্মিক নিঃসরণ কমায় এবং খাবারের প্রতি অতিরিক্ত আসক্তিকে নিয়ন্ত্রণ করে [১, ৬]।'
            ),
            l(
              'In chronic obesity, repeated consumption of ultra-processed foods rich in refined sugars and fats produces "hedonic allostasis" [6]. Striatal dopamine D2 receptor (D2R) density is progressively downregulated, mirroring the neuroadaptations observed in substance addictions [6]. Individuals with reduced D2R availability require increasingly larger portions of energy-dense foods to achieve the same dopamine reward response, reinforcing a compulsive overeating loop [4, 6].',
              'দীর্ঘমেয়াদী স্থূলতায় অতি-প্রক্রিয়াজাত চর্বি ও চিনিযুক্ত খাবার ডোপামিন রিসেপ্টর (D2R) কমিয়ে ফেলে, যাকে বিজ্ঞানের ভাষায় "আনন্দঘন অ্যালোস্ট্যাসিস" বলা হয় [৬]। এর ফলে স্বাভাবিক খাবারে তৃপ্তি আসে না এবং পূর্বের মতো আনন্দ পেতে রোগী আরও বেশি ক্ষতিকর ক্যালোরিযুক্ত খাবার খেতে বাধ্য হয় [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Hypothalamic Gliosis & Microglial Neuroinflammation', 'হাইপোথ্যালামাসের গ্লায়োসিস ও মাইক্রোগ্লিয়াল স্নায়ুপ্রদাহ'),
          paragraphs: [
            l(
              'High-fat, diet-induced obesity (DIO) provokes rapid, localized neuroinflammation within the hypothalamic arcuate nucleus [1]. Rodent models demonstrate that within 48 to 72 hours of high-saturated-fat feeding—long before significant body weight gain or systemic adiposity develops—microglia and astrocytes in the ARC proliferate and undergo reactive gliosis [1].',
              'উচ্চ চর্বিযুক্ত খাবার গ্রহণের মাত্র ৪৮ থেকে ৭২ ঘণ্টার মধ্যেই হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াসে তীব্র প্রদাহ বা গ্লায়োসিস শুরু হয়—এমনকি শরীরে দৃশ্যমান ওজন বৃদ্ধির অনেক আগেই [১]। এই অঞ্চলে মাইক্রোগ্লিয়া এবং অ্যাস্ট্রোসাইট কোষগুলো অতি-সক্রিয় হয়ে স্নায়ুপ্রদাহ সৃষ্টি করে [১]।'
            ),
            l(
              'Microglial activation is triggered by saturated fatty acids (e.g., palmitate) engaging Toll-Like Receptor-4 (TLR4), driving NF-kappa-B transcription of TNF-alpha, IL-1beta, and IL-6 [1]. Sustained neuroinflammation promotes endoplasmic reticulum (ER) stress and POMC neuronal apoptosis, impairing central leptin transport across the median eminence and locking the brain into an irreversible state of energy dysregulation [1, 4].',
              'পামিটিক অ্যাসিডের মতো সম্পৃক্ত চর্বি TLR4 রিসেপ্টরের মাধ্যমে NF-kappa-B সক্রিয় করে প্রদাহজনক সাইটোকাইন তৈরি বাড়িয়ে দেয় [১]। দীর্ঘস্থায়ী প্রদাহের ফলে POMC নিউরনগুলো ক্ষতিগ্রস্ত হয়ে মারা যায়, যা হাইপোথ্যালামাসে লেপটিনের প্রবেশাধিকার স্থায়ীভাবে নষ্ট করে দেয় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Incretin Tri-Agonists & Next-Generation Obesity Therapeutics', 'ইনক্রিটিন ট্রাই-অ্যাগোনিস্ট ও পরবর্তী প্রজন্মের স্থূলতার ওষুধ'),
          paragraphs: [
            l(
              'The clinical success of unimolecular dual agonists targeting GLP-1 and Glucose-Dependent Insulinotropic Polypeptide (GIP) receptors (tirzepatide) has spurred the clinical development of unimolecular triple agonists activating GLP-1, GIP, and Glucagon (GCGR) receptors (retatrutide) [2, 3]. While GLP-1 and GIP synergy enhances insulin secretion, suppresses appetite, and protects against nausea, co-activation of glucagon receptors stimulates hepatic beta-oxidation, increases basal metabolic expenditure, and promotes hepatic lipid clearance [2, 3].',
              'সেমাগ্লুটাইড এবং ডুয়াল অ্যাগোনিস্ট টির্জেপাটাইডের অভাবনীয় সাফল্যের পর বর্তমানে GLP-1, GIP এবং গ্লুকাগন রিসেপ্টর—এই তিনটিকে একসাথে সক্রিয়কারী ট্রাই-অ্যাগোনিস্ট (যেমন রিটাট্রুটাইড) নিয়ে ব্যাপক গবেষণা চলছে [২, ৩]। GLP-1 ও GIP ক্ষুধা নিবারণ ও ইনসুলিন নিয়ন্ত্রণ করে, আর গ্লুকাগন রিসেপ্টর সরাসরি যকৃতে চর্বি জারণ ও দৈহিক শক্তি ব্যয় বাড়িয়ে দেয় [২, ৩]।'
            ),
            l(
              'Phase 2 clinical trial data demonstrate unprecedented mean total body weight reductions exceeding 24% at 48 weeks, approaching the efficacy of bariatric Roux-en-Y gastric bypass surgery [2, 3]. Molecular nutritional management alongside these potent pharmacotherapies requires vigilant monitoring of lean mass preservation, demanding rigorous high-DIAAS protein intake and structured resistance training to prevent severe sarcopenic muscle loss during rapid adipose mass depletion [2, 3, 5].',
              'ক্লিনিক্যাল ট্রায়ালে এই ট্রাই-অ্যাগোনিস্ট ব্যবহারে ৪৮ সপ্তাহে প্রায় ২৪% এরও বেশি শারীরিক ওজন কমেছে, যা বেরিয়াট্রিক সার্জারির সমকক্ষ [২, ৩]। তবে এই দ্রুত ওজন হ্রাসের সময় পেশিক্ষয় রোধ করতে রোগীদের জন্য উচ্চমানের DIAAS প্রোটিন এবং নিয়মিত রেজিস্ট্যান্স ব্যায়াম নিশ্চিত করা চিকিৎসাবিজ্ঞানের অত্যন্ত গুরুত্বপূর্ণ শর্ত [২, ৩, ৫]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Advanced Research Frontiers & Future Directions', 'উন্নত গবেষণার দিগন্ত ও ভবিষ্যৎ সম্ভাবনা'),
          paragraphs: [
            l(
              'Appetite neuroendocrinology is transitioning from simple caloric balance models to complex neuro-circuit mapping, recognizing hunger as an integrated output of hypothalamic transcriptomics, gut vagal afferents, and mesolimbic reward allostasis [1, 6].',
              'ক্ষুধা বিজ্ঞান সাধারণ ক্যালোরি হিসাবের বাইরে গিয়ে স্নায়বিক সার্কিটের জটিল সমন্বয়ে পরিণত হয়েছে, যেখানে হাইপোথ্যালামাসের জিন প্রকাশ, ভেগাস স্নায়ু এবং মস্তিষ্কের ডোপামিন পুরষ্কার ব্যবস্থা একসাথে মানুষের ক্ষুধা নির্ধারণ করে [১, ৬]।',
            ),
            l(
              'Future therapeutic breakthroughs combine gut-derived multi-incretin polypharmacology with dietary macronutrient engineering, safeguarding lean myofibrillar mass and reversing hypothalamic neuroinflammation to achieve permanent cardiometabolic remission [1, 3, 5].',
              'ভবিষ্যতের চিকিৎসায় মাল্টি-ইনক্রিটিন ওষুধের পাশাপাশি খাদ্যের উচ্চ প্রোটিন ও আঁশের সমন্বয় ঘটিয়ে পেশির ক্ষয় রোধ করা এবং মস্তিষ্কের স্নায়ুপ্রদাহ সারিয়ে তোলাই স্থায়ীভাবে স্থূলতা ও ডায়াবেটিস নিরাময়ের মূল লক্ষ্য [১, ৩, ৫]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Flowchart tracing the neuroendocrine regulation of appetite: pre-prandial gastric ghrelin activation of orexigenic NPY/AgRP neurons versus post-prandial leptin, GLP-1, PYY, and CCK activation of anorexigenic POMC/alpha-MSH neurons at the hypothalamic arcuate nucleus.',
      'ক্ষুধা ও তৃপ্তির নিউরোএন্ডোক্রিন প্রবাহচিত্র: আহারের পূর্বে পাকস্থলীর ঘ্রেলিন দ্বারা NPY/AgRP নিউরন সক্রিয়করণ বনাম আহারের পর লেপটিন, GLP-1, PYY ও CCK দ্বারা হাইপোথ্যালামাসের POMC/আলফা-MSH ক্ষুধা নিবারক সার্কিট সক্রিয়করণের প্রক্রিয়া।'
    ),
    steps: [
      l(
        'Step 1: During fasting, gastric P/D1 cells octanoylate ghrelin via GOAT; circulating ghrelin crosses the median eminence to stimulate orexigenic NPY/AgRP neurons.',
        'ধাপ ১: উপবাসের সময় পাকস্থলীর P/D1 কোষ GOAT দ্বারা ঘ্রেলিন তৈরি করে; রক্তবাহিত ঘ্রেলিন মস্তিষ্কের NPY/AgRP নিউরনকে উত্তেজিত করে তীব্র ক্ষুধা তৈরি করে।'
      ),
      l(
        'Step 2: Meal ingestion stretches the stomach, firing vagal mechanoreceptors, while duodenal I-cells secrete CCK to activate vagal afferents terminating in the hindbrain NTS.',
        'ধাপ ২: খাবার গ্রহণের ফলে পাকস্থলী প্রসারিত হয় এবং ডিওডেনামের I-কোষ থেকে CCK নিঃসৃত হয়ে ভেগাস স্নায়ুর মাধ্যমে পশ্চাৎমস্তিষ্কের NTS কেন্দ্রে সংকেত পাঠায়।'
      ),
      l(
        'Step 3: Distal enteroendocrine L-cells secrete GLP-1 and PYY upon nutrient arrival, triggering the ileal brake and enhancing central hypothalamic satiety.',
        'ধাপ ৩: অন্ত্রের শেষ প্রান্তে খাদ্য পৌঁছালে L-কোষ থেকে GLP-1 ও PYY নিঃসৃত হয়ে পরিপাক নালীর গতি কমায় এবং হাইপোথ্যালামাসে তৃপ্তির সংকেত পাঠায়।'
      ),
      l(
        'Step 4: Adipose leptin and gut incretins activate anorexigenic POMC neurons, cleaving alpha-MSH to stimulate MC4R receptors and terminate feeding.',
        'ধাপ ৪: চর্বি কোষের লেপটিন এবং অন্ত্রের হরমোনগুলো POMC নিউরনকে সক্রিয় করে আলফা-MSH নিঃসরণ ঘটায়, যা MC4R রিসেপ্টরের মাধ্যমে আহার সমাপ্ত করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'Which hypothalamic molecular pathway explains why activation of the orexigenic AgRP neurons stimulates profound feeding behavior even in the presence of circulating satiety hormones?',
      'হাইপোথ্যালামাসের কোন আণবিক প্রক্রিয়ার কারণে AgRP নিউরন সক্রিয় হলে রক্তে তৃপ্তিদায়ক হরমোন থাকা সত্ত্বেও তীব্র ক্ষুধার সৃষ্টি হয়?'
    ),
    options: [
      l(
        'AgRP acts as an endogenous competitive antagonist and inverse agonist at Melanocortin-4 Receptors (MC4R), blocking alpha-MSH while releasing GABA to silence POMC neurons.',
        'AgRP মেলানোকর্টিন-৪ রিসেপ্টরে (MC4R) আলফা-MSH এর প্রাকৃতিক প্রতিযোগী ও বিপরীত অ্যাগোনিস্ট হিসেবে কাজ করে এবং GABA নিঃসরণের মাধ্যমে POMC নিউরনকে সম্পূর্ণ নিস্তব্ধ করে দেয়।'
      ),
      l(
        'AgRP directly degrades circulating leptin in the bloodstream, lowering serum leptin to zero.',
        'AgRP সরাসরি রক্তের সমস্ত লেপটিন ভেঙে ফেলে এর ঘনত্ব শূন্যে নামিয়ে আনে।'
      ),
      l(
        'AgRP permanently binds GLP-1 receptors in the pancreas, preventing insulin release.',
        'AgRP অগ্ন্যাশয়ের GLP-1 রিসেপ্টরে স্থায়ীভাবে যুক্ত হয়ে ইনসুলিন নিঃসরণ বন্ধ করে দেয়।'
      ),
      l(
        'AgRP stimulates the vagus nerve to accelerate gastric emptying to less than 5 minutes.',
        'AgRP ভেগাস স্নায়ুকে উত্তেজিত করে পাকস্থলী খালি হওয়ার সময় ৫ মিনিটের নিচে নামিয়ে আনে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Agouti-Related Protein (AgRP) acts as an endogenous inverse agonist and competitive antagonist at MC4R, displacing anorexigenic alpha-MSH and driving feeding. Concurrently, AgRP neurons corelease the inhibitory neurotransmitter GABA onto POMC cell bodies, shutting down appetite-suppressing output.',
      'AgRP মেলানোকর্টিন-৪ রিসেপ্টরের (MC4R) ওপর আলফা-MSH কে বসতে বাধা দেয় এবং বিপরীত ক্রিয়া ঘটায়। একই সাথে এরা GABA নিঃসরণ করে ক্ষুধা নিবারক POMC নিউরনগুলোকে অবদমিত করে ফেলে, ফলে তীব্র ক্ষুধার সৃষ্টি হয়।'
    ),
  },
}
