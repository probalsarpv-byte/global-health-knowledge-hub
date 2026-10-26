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
    imageUrl: '/assets/satiety_neuroendocrinology_overview.jpg',
    imageCaption: l(
      'Medical Reference Figure 7.1: Gut-Brain Neuroendocrine Appetite Axis — Hypothalamic Arcuate Nucleus, Vagal Afferents, Leptin, Ghrelin & Incretin Cascades.',
      'মেডিকেল রেফারেন্স চিত্র ৭.১: অন্ত্র-মস্তিষ্ক নিউরোএন্ডোক্রিন ক্ষুধা অক্ষ — হাইপোথ্যালামিক আর্কুয়েট নিউক্লিয়াস, ভেগাস স্নায়ুপথ, লেপটিন, ঘ্রেলিন এবং ইনক্রিটিন সংকেত প্রণালী।'
    ),
    has3D: true,
    threeDType: 'satiety-neuroendocrine-3d',
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
        position3D: { x: -65, y: -45, z: 25 },
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
        position3D: { x: 55, y: -40, z: -20 },
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
        position3D: { x: -50, y: 40, z: -25 },
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
        position3D: { x: 0, y: 0, z: 35 },
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
        position3D: { x: 45, y: 45, z: 20 },
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
              'Appetite regulation is not a simple question of personal willpower or moral discipline; it is an exquisitely coordinated, ancient biological communication network operating between the gastrointestinal tract, adipose tissue energy stores, and the human brain [1, 4]. Every single waking hour, specialized chemical messengers—including digestive peptides, adiposity hormones, and electrical nerve impulses—travel through the systemic circulation and along sensory nerve pathways to inform the central nervous system about immediate stomach contents and total bodily energetic reserves [1, 3].',
              'ক্ষুধা ও পেট ভরার অনুভূতি কোনো সাধারণ ইচ্ছাশক্তি বা মানসিক দৃঢ়তার বিষয় নয়; এটি পরিপাকতন্ত্র, শরীরের চর্বি ভাণ্ডার এবং মস্তিষ্কের মধ্যে ক্রিয়াশীল এক অতি প্রাচীন ও নিখুঁত জৈব-স্নায়বিক যোগাযোগ ব্যবস্থা [১, ৪]। প্রতিটি মুহূর্তে পরিপাকনালীর পেপটাইড, চর্বি কোষের হরমোন এবং স্নায়বিক বৈদ্যুতিক তরঙ্গের মাধ্যমে মস্তিষ্ক নিরবচ্ছিন্ন তথ্য পায় যে পাকস্থলীতে কতটুকু খাবার আছে এবং সামগ্রিক দেহে শক্তি সঞ্চয়ের বর্তমান অবস্থা কী রকম [১, ৩]।'
            ),
            l(
              'To intuitively grasp how this neuroendocrine network functions, imagine the automated heating thermostat installed in a residential home [1, 4]. When the indoor ambient temperature drops below a pre-set threshold, the thermostat detects the chill and automatically fires up the heating furnace to warm the house. Similarly, when your body circulating nutrients and fat stores drop below an evolutionary set-point, your brain triggers biological hunger alarms that drive an intense, involuntary motivation to seek and consume energy-dense food [1, 4]. Once sufficient calories have been ingested and digested, internal hormonal sensors turn off the hunger drive and replace it with a tranquil state of satisfaction and fullness known as satiety [1, 3].',
              'এই নিউরোএন্ডোক্রিন ব্যবস্থাটি সহজে বোঝার জন্য ঘরের এয়ার কন্ডিশনার বা স্বয়ংক্রিয় থার্মোস্ট্যাটের কথা ভাবুন [১, ৪]। ঘরের তাপমাত্রা যখন একটি নির্দিষ্ট সীমার নিচে নেমে যায়, থার্মোস্ট্যাট তা বুঝতে পেরে স্বয়ংক্রিয়ভাবে হিটার চালু করে ঘর গরম করে তোলে। একইভাবে দেহে শক্তির সঞ্চয় বা পুষ্টি উপাদানের মাত্রা কমে গেলে মস্তিষ্ক তাৎক্ষণিকভাবে তীব্র ক্ষুধার সংকেত পাঠিয়ে খাবার খোঁজার তাগিদ সৃষ্টি করে [১, ৪]। পর্যাপ্ত খাবার খাওয়া এবং তা পরিপাক হওয়ার পর শরীরের অভ্যন্তরীণ হরমোনগুলো ক্ষুধার অ্যালার্ম বন্ধ করে দেয় এবং পেট ভরা থাকার প্রশান্তিদায়ক অনুভূতি জাগায় যাকে বিজ্ঞানের ভাষায় তৃপ্তি বা স্যাটাইটি (Satiety) বলা হয় [১, ৩]।'
            ),
            l(
              'The physiology of appetite operates across three distinct chronological phases: the cephalic phase, the gastric phase, and the post-absorptive intestinal phase [3, 4]. The cephalic phase begins before food even touches your tongue; the mere sight, aroma, or cognitive anticipation of a delicious meal triggers conditioned salivary secretion, vagal stimulation of gastric acid, and preparatory pancreatic polypeptide release [4]. Once food enters the stomach (the gastric phase), physical wall distension activates sensory mechanoreceptors, while the subsequent transit of nutrients into the duodenum and ileum (the intestinal phase) triggers a massive release of chemical satiety peptides that enter the bloodstream and command the brain to terminate the meal [3, 4].',
              'ক্ষুধার শারীরবৃত্ত মূলত তিনটি ধারাবাহিক ধাপে কাজ করে: সেফালিক ধাপ, গ্যাস্ট্রিক ধাপ এবং পোস্ট-অ্যাবজরপটিভ বা অন্ত্রীয় ধাপ [৩, ৪]। সেফালিক ধাপটি শুরু হয় খাবার জিভে স্পর্শ করারও আগে; সুস্বাদু খাবারের দৃশ্য, সুবাস কিংবা কেবল ভাবনার ফলেই মস্তিষ্কের নির্দেশে মুখে লালা ঝরে, পাকস্থলীতে অ্যাসিড নিঃসরণ শুরু হয় এবং অগ্ন্যাশয় খাদ্য পরিপাকের প্রস্তুতি নেয় [৪]। এরপর খাবার যখন পাকস্থলীতে প্রবেশ করে (গ্যাস্ট্রিক ধাপ), তখন পাকস্থলীর দেয়াল প্রসারিত হয়ে স্নায়বিক সংকেত পাঠায়; আর খাবার ক্ষুদ্রান্ত্রে পৌঁছালে (অন্ত্রীয় ধাপ) একদল শক্তিশালী তৃপ্তিদায়ক হরমোন রক্তে মিশে মস্তিষ্ককে খাওয়া বন্ধ করার চূড়ান্ত নির্দেশ দেয় [৩, ৪]।'
            ),
            l(
              'However, modern lifestyle factors can deeply disrupt this biological equilibrium [4, 6]. Chronic psychological stress floods the circulation with cortisol, which stimulates appetite for sugary and fatty foods, while chronic sleep deprivation elevates hunger-promoting peptides and blunts daytime fullness signals [4]. Furthermore, eating on an erratic schedule throws off the anticipatory circadian clock of the digestive tract, confusing the brain about genuine nutritional requirements [3, 4]. Understanding the foundational neurobiology of hunger empowers learners to design sustainable dietary habits that work with, rather than against, their innate human physiology [1, 4].',
              'তবে আধুনিক জীবনযাত্রার নানা অনিয়ম এই প্রাকৃতিক ভারসাম্যকে মারাত্মকভাবে বিঘ্নিত করতে পারে [৪, ৬]। দীর্ঘস্থায়ী মানসিক চাপ কর্টিসল হরমোন বাড়িয়ে চিনি ও চর্বিযুক্ত খাবারের প্রতি তীব্র লালসা জাগায়, আর অপর্যাপ্ত ঘুম ক্ষুধার হরমোন বাড়িয়ে তৃপ্তির সংকেতকে ভোঁতা করে দেয় [৪]। তাছাড়া অসময়ে খাওয়ার অভ্যাস পরিপাকতন্ত্রের প্রাকৃতিক বায়োলজিক্যাল ঘড়িকে এলোমেলো করে মস্তিষ্কে বিভ্রান্তি তৈরি করে [৩, ৪]। ক্ষুধার এই মৌলিক স্নায়ুবিজ্ঞান বোঝা মানুষকে এমন খাদ্য পরিকল্পনা তৈরি করতে শেখায় যা দেহের প্রাকৃতিক নিয়মের বিরুদ্ধে যুদ্ধ না করে তার সাথে চমৎকার বোঝাপড়ায় কাজ করে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Two Master Hormones: Ghrelin vs Leptin', 'দুই প্রধান নিয়ামক হরমোন: ঘ্রেলিন বনাম লেপটিন'),
          paragraphs: [
            l(
              'At the foundation of appetite neuroendocrinology stand two master hormones with diametrically opposing biological missions: ghrelin, the acute initiator of hunger, and leptin, the chronic guardian of long-term energy reserves [1, 3]. Ghrelin is the only known circulating hormone in the human body that directly stimulates appetite (an orexigenic peptide) [3]. Synthesized primarily by specialized P/D1 neuroendocrine cells located within the mucosal folds of the gastric fundus, ghrelin levels surge sharply during fasting periods, generating the physical gnawing sensations of hunger and driving exploratory food-seeking behavior prior to anticipated meal times [3, 4].',
              'ক্ষুধা নিয়ন্ত্রণের মূলে রয়েছে সম্পূর্ণ বিপরীতমুখী দুটি প্রধান হরমোন: ঘ্রেলিন, যা ক্ষুধার তাৎক্ষণিক উদ্দীপক, এবং লেপটিন, যা দীর্ঘমেয়াদী শক্তি সঞ্চয়ের সার্বক্ষণিক পাহারাদার [১, ৩]। মানবদেহের একমাত্র রক্তবাহিত ক্ষুধা উদ্দীপক হরমোন হলো ঘ্রেলিন [৩]। পাকস্থলীর উপরিভাগের মিউকোসায় অবস্থিত বিশেষ P/D1 কোষ থেকে এটি নিঃসৃত হয়; দীর্ঘক্ষণ না খেয়ে থাকলে রক্তে ঘ্রেলিনের মাত্রা দ্রুত বৃদ্ধি পেয়ে পেটে তীব্র ক্ষুধার টান তৈরি করে এবং খাবার অনুসন্ধানের প্রবল অনুপ্রেরণা জোগায় [৩, ৪]।'
            ),
            l(
              'To picture ghrelin in action, think of a persistent, loud alarm clock that has been programmed to ring right before your regular breakfast, lunch, and dinner hours [3, 4]. If you deliberately fast through your usual mealtime, you will notice that the sharp hunger pangs often peak and then paradoxically subside after 60 to 90 minutes [3]. This transient relief occurs because your liver releases stored glycogen to stabilize blood glucose, temporarily blunting the ghrelin surge; however, if energetic deprivation persists, the alarm will ring with even greater acoustic intensity at the subsequent circadian meal window [3, 4]. Ingestion of food triggers a rapid, postprandial collapse in ghrelin secretion, with the magnitude and duration of this suppression dictated primarily by the protein and complex carbohydrate content of the ingested meal [2, 3].',
              'ঘ্রেলিনের কাজ বোঝার জন্য একটি নিয়মিত অ্যালার্ম ঘড়ির কথা ভাবুন যা আপনার প্রতিদিনের সকাল, দুপুর ও রাতের নির্ধারিত খাবারের ঠিক আগে জোরে বেজে ওঠার জন্য সেট করা আছে [৩, ৪]। আপনি যদি কোনো কারণে সময়মতো না খান, তবে লক্ষ্য করবেন যে এক থেকে দেড় ঘণ্টা পর ক্ষুধার তীব্র যন্ত্রণা কিছুটা কমে যায় [৩]। এটি ঘটে কারণ যকৃত তার সঞ্চিত গ্লাইকোজেন ভেঙে রক্তে চিনি সরবরাহ করে সাময়িকভাবে ঘ্রেলিনের ঢেউ শান্ত করে; তবে খাবার না খেলে পরবর্তী খাবারের সময় এই অ্যালার্ম দ্বিগুণ শক্তিতে বেজে উঠবে [৩, ৪]। খাবার খাওয়ার সাথে সাথে রক্তে ঘ্রেলিনের মাত্রা দ্রুত নেমে যায়, এবং এই হ্রাসের মাত্রা ও স্থায়িত্ব মূলত খাবারে উপস্থিত প্রোটিন ও জটিল শর্করার পরিমাণের ওপর নির্ভর করে [২, ৩]।'
            ),
            l(
              'In stark physiological contrast to ghrelin, leptin operates not as a meal-to-meal hunger trigger, but as the body long-term energetic fuel gauge [1]. Secreted primarily by subcutaneous and visceral white adipose tissue in direct, linear proportion to total somatic fat mass, leptin enters the bloodstream and crosses into the hypothalamus [1, 4]. When energy stores are replete and body fat is abundant, elevated circulating leptin delivers a tonic, reassuring message to the central nervous system: energy reserves are overflowing, metabolic rate should be maintained at a high level, and hunger signals should be firmly reined in [1, 4].',
              'ঘ্রেলিনের তাৎক্ষণিক কাজের বিপরীতে লেপটিন কাজ করে দেহের দীর্ঘমেয়াদী জ্বালানি ট্যাংকের মূল পরিমাপক বা গেজ হিসেবে [১]। শরীরের শ্বেত চর্বি কোষ থেকে উৎপাদিত এই হরমোনের রক্তের মাত্রা সরাসরি দেহের মোট চর্বির পরিমাণের সাথে সমানুপাতিক [১, ৪]। দেহে যখন চর্বির পরিমাণ যথেষ্ট থাকে, তখন রক্তে উচ্চ লেপটিন মস্তিষ্কের হাইপোথ্যালামাসে পৌঁছে অবিরাম বার্তা দেয় যে জ্বালানি ট্যাংক কানায় কানায় পূর্ণ আছে, বিপাকীয় গতি সচল রাখা দরকার এবং ক্ষুধা নিয়ন্ত্রণের লাগাম শক্ত রাখা উচিত [১, ৪]।'
            ),
            l(
              'Conversely, when an individual embarks on a severe calorie-restricted diet or loses substantial amounts of body fat, circulating leptin levels plummet precipitously within twenty-four to forty-eight hours—falling far faster than the actual loss of fat mass would predict [1, 4]. The hypothalamus interprets this sudden drop in leptin not as a healthy weight-loss achievement, but as an existential, life-threatening starvation crisis [1, 4]. In response, the brain mounts an aggressive evolutionary defense: it drives ravenous biological hunger, heightens the sensory reward value of high-calorie foods, and suppresses thyroid hormone output and basal metabolic expenditure, explaining why long-term weight-loss maintenance demands sustained neuroendocrine adaptation [1, 4].',
              'বিপরীতভাবে যখন কেউ হঠাৎ কঠোর ডায়েট শুরু করে কিংবা ওজন কমিয়ে ফেলে, তখন মাত্র ২৪ থেকে ৪৮ ঘণ্টার মধ্যে রক্তের লেপটিন নাটকীয়ভাবে ধসে পড়ে [১, ৪]। মানব মস্তিষ্ক লেপটিনের এই আকস্মিক পতনকে কোনো অর্জন হিসেবে দেখে না, বরং মনে করে দেহ কোনো ভয়াবহ দুর্ভিক্ষ বা জীবনঘাতী সংকটের মুখোমুখি হয়েছে [১, ৪]। জীবন বাঁচানোর আদিম তাগিদে মস্তিষ্ক তখন চরম ক্ষুধার জন্ম দেয়, উচ্চ-ক্যালোরির খাবারের প্রতি তীব্র লালসা তৈরি করে এবং থাইরয়েড হরমোন কমিয়ে শরীরের মৌলিক শক্তি খরচ ধীর করে দেয়; এই কারণেই ওজন কমানোর পর তা ধরে রাখা শারীরবৃত্তীয়ভাবে এত চ্যালেঞ্জিং [১, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Intestinal Satiety Hormones: GLP-1 & PYY', 'অন্ত্রীয় তৃপ্তি হরমোন: GLP-1 ও PYY'),
          paragraphs: [
            l(
              'While ghrelin initiates feeding and leptin monitors total body adiposity, the precise, minute-to-minute decision to put down your fork and terminate a meal is governed by an elegant suite of peptide hormones released by the gastrointestinal tract [2, 3]. As chewed food passes through the pyloric sphincter into the duodenum, dietary fats and partially hydrolyzed proteins encounter specialized enteroendocrine I-cells [3]. These I-cells immediately secrete cholecystokinin (CCK), a rapid-acting peptide that stimulates the gallbladder to contract, triggers pancreatic enzyme secretion, and binds sensory endings of the vagus nerve to send the very first affirmative fullness signals to the brainstem within ten to fifteen minutes of eating [3, 4].',
              'ঘ্রেলিন যেখানে খাওয়ার সূচনা করে এবং লেপটিন দীর্ঘমেয়াদী চর্বি পর্যবেক্ষণ করে, সেখানে প্রতি বেলায় প্লেট থেকে হাত তুলে খাওয়া শেষ করার তাৎক্ষণিক সিদ্ধান্তটি পরিচালিত হয় অন্ত্রের একদল চমৎকার পেপটাইড হরমোন দ্বারা [২, ৩]। পাকস্থলী থেকে আংশিক পরিপাককৃত খাবার যখন ক্ষুদ্রান্ত্রের শুরুতে (ডিওডেনাম) প্রবেশ করে, তখন সেখানকার বিশেষ I-কোষগুলো চর্বি ও প্রোটিনের সংস্পর্শে এসে সাথে সাথে কোলেসিস্টোকাইনিন (CCK) নিঃসরণ করে [৩]। CCK পিত্তথলিকে সংকুচিত করে, অগ্ন্যাশয়ের এনজাইম ক্ষরণ বাড়ায় এবং ভেগাস স্নায়ুর মাধ্যমে খাবার শুরুর ১০ থেকে ১৫ মিনিটের মধ্যেই মস্তিষ্কে পেট ভরার প্রথম সবুজ সংকেত পাঠায় [৩, ৪]।'
            ),
            l(
              'As nutrient digestion proceeds further down the gastrointestinal canal into the distal ileum and ascending colon, unabsorbed macronutrients stimulate specialized enteroendocrine L-cells [2, 3]. These L-cells synthesize and co-secrete two powerful satiety hormones: Glucagon-Like Peptide-1 (GLP-1) and Peptide YY (specifically PYY3-36) [2, 3]. Released in direct proportion to the caloric and nutrient density of the meal, circulating GLP-1 and PYY orchestrate what gastroenterologists term the "ileal brake"—a master homeostatic feedback mechanism that physically decelerates gastric emptying and slows small intestinal peristalsis, ensuring that nutrients do not overwhelm downstream absorptive capacity [2, 3].',
              'খাবার যখন ক্ষুদ্রান্ত্রের শেষ প্রান্তে (ইলিয়াম) এবং কোলনের শুরুতে পৌঁছায়, তখন সেখানকার বিশেষ L-কোষগুলো অত্যন্ত শক্তিশালী দুটি তৃপ্তিদায়ক হরমোন তৈরি ও নিঃসরণ করে: Glucagon-Like Peptide-1 (GLP-1) এবং Peptide YY (PYY) [২, ৩]। খাদ্যের পুষ্টির উপস্থিতিতে নিঃসৃত এই হরমোন দুটি পরিপাকতন্ত্রে "ইলিয়াল ব্রেক" নামের এক অসাধারণ শারীরবৃত্তীয় মেকানিজম চালু করে; এটি পাকস্থলী খালি হওয়ার গতি মন্থর করে দেয় এবং অন্ত্রের পেরিস্টালসিস ধীর করে যাতে পুষ্টি উপাদানগুলো পূর্ণ শোষণের পর্যাপ্ত সময় পায় [২, ৩]।'
            ),
            l(
              'Beyond their local mechanical effects on gut motility, GLP-1 and PYY cross into the bloodstream and traverse semi-permeable sensory windows in the brain, such as the area postrema and the median eminence [2, 3]. In the central nervous system, GLP-1 and PYY directly excite satiety-promoting neuronal circuits while simultaneously dampening hunger-stimulating neurons, transforming gastric distension into a profound sense of mental satisfaction and postprandial tranquility [1, 2]. Furthermore, GLP-1 acts on the endocrine pancreas to stimulate glucose-dependent insulin secretion while suppressing glucagon, ensuring smooth postprandial glucose disposal without hypoglycemic turbulence [2].',
              'অন্ত্রের গতি কমানোর পাশাপাশি GLP-1 ও PYY রক্তে পরিবাহিত হয়ে মস্তিষ্কের বিশেষ সংবেদনশীল জানালাগুলো (যেমন এরিয়া পোস্ট্রিমা ও হাইপোথ্যালামাস) দিয়ে প্রবেশ করে [২, ৩]। কেন্দ্রীয় স্নায়ুতন্ত্রে পৌঁছে এরা সরাসরি তৃপ্তি উৎপাদনকারী স্নায়ুপথকে উদ্দীপ্ত করে এবং ক্ষুধার কেন্দ্রকে শান্ত করে, যা শারীরিক পূর্ণতাকে এক গভীর মানসিক তৃপ্তিতে রূপান্তর করে [১, ২]। একই সাথে GLP-1 অগ্ন্যাশয় থেকে রক্তে শর্করার মাত্রা অনুযায়ী ইনসুলিন নিঃসরণ বাড়ায় এবং গ্লুকাগন দমন করে, ফলে খাবার খাওয়ার পর রক্তের গ্লুকোজ অত্যন্ত স্থিতিশীল থাকে [২]।'
            ),
            l(
              'This multi-step hormonal sequence explains why eating too quickly is a universal recipe for uncomfortable overconsumption [3, 4]. Because L-cells are located predominantly in the distal small intestine, ingested food requires approximately fifteen to twenty minutes of mechanical transit, enzymatic breakdown, and luminal transport before reaching these endocrine cells in sufficient quantity to trigger maximal GLP-1 and PYY secretion [2, 3]. If a person inhales an entire meal in eight minutes, they will consume hundreds of unnecessary calories before their distal gut even has the physical opportunity to inform their brain that energy requirements have already been satisfied [3, 4].',
              'এই ধারাবাহিক শারীরবৃত্তীয় প্রক্রিয়াটি নিখুঁতভাবে ব্যাখ্যা করে কেন খুব দ্রুত খেলে মানুষ অজান্তেই অতিরিক্ত খেয়ে ফেলে [৩, ৪]। যেহেতু L-কোষগুলো মূলত ক্ষুদ্রান্ত্রের শেষ ভাগে অবস্থান করে, তাই মুখ থেকে খাবার সেখানে পৌঁছে পর্যাপ্ত GLP-1 ও PYY নিঃসরণ করতে অন্তত ১৫ থেকে ২০ মিনিট সময় প্রয়োজন হয় [২, ৩]। কেউ যদি মাত্র সাত-আট মিনিটে পুরো খাবার গিলে ফেলে, তবে অন্ত্র মস্তিষ্কে পেট ভরার সংকেত পাঠানোর আগেই সে প্রয়োজনের চেয়ে শত শত অতিরিক্ত ক্যালোরি পেটে ঢুকিয়ে ফেলে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Hedonic Hunger vs Metabolic Hunger', 'আনন্দঘন ক্ষুধা বনাম শারীরবৃত্তীয় ক্ষুধা'),
          paragraphs: [
            l(
              'Human nutritional behavior is not governed by a single monolithic command center; rather, it represents a continuous biological tug-of-war between two fundamentally distinct neural architectures: the homeostatic metabolic circuit centered in the hypothalamus, and the hedonic reward circuit anchored in the mesolimbic dopamine system [1, 6]. Homeostatic hunger is born of genuine energetic and cellular necessity; it reflects an authentic metabolic deficit of glucose, fatty acids, or amino acids required to sustain basal cellular survival, cardiovascular work, and thermoregulation [1, 4].',
              'মানুষের খাওয়ার আচরণ কোনো একক মস্তিষ্কের কেন্দ্র দ্বারা পরিচালিত হয় না; বরং এটি মূলত দুটি সম্পূর্ণ ভিন্ন স্নায়ুবিক ব্যবস্থার সার্বক্ষণিক বোঝাপড়া ও দ্বন্দ্বের ফল: হাইপোথ্যালামাসের শারীরবৃত্তীয় মেটাবলিক কেন্দ্র, এবং মস্তিষ্কের মেসোলিম্বিক ডোপামিন চালিত আনন্দঘন পুরষ্কার কেন্দ্র [১, ৬]। শারীরবৃত্তীয় ক্ষুধা তৈরি হয় যখন দেহকোষে সত্যিই গ্লুকোজ, ফ্যাটি অ্যাসিড বা অ্যামিনো অ্যাসিডের ঘাটতি দেখা দেয় এবং বেঁচে থাকার জন্য অপরিহার্য ক্যালোরির প্রয়োজন হয় [১, ৪]।'
            ),
            l(
              'In stark contrast, hedonic hunger is driven not by metabolic necessity, but by the anticipation of sensory pleasure, emotional comfort, and intense neurochemical gratification [4, 6]. This hedonic circuitry relies primarily on dopamine signaling originating in the ventral tegmental area (VTA) and projecting to the nucleus accumbens—the primary pleasure and reinforcement hub of the human forebrain [6]. Hedonic hunger explains the near-universal human experience of having a separate "dessert stomach": after finishing a massive, multi-course dinner that has physically stretched the stomach to its anatomical limit, the individual may feel completely full, yet the sudden appearance of a chocolate fudge cake instantly triggers fresh desire, salivation, and active eating [4, 6].',
              'বিপরীতে আনন্দঘন ক্ষুধা বা হেডোনিক হাঙ্গার কোনো শারীরিক শক্তির অভাবের জন্য তৈরি হয় না; এটি জন্ম নেয় খাবারের স্বাদ, সুবাস এবং তীব্র মানসিক আনন্দের প্রত্যাশা থেকে [৪, ৬]। এই আনন্দ কেন্দ্রটি মস্তিষ্কের ভেন্ট্রাল টেগমেন্টাল এরিয়া (VTA) থেকে নিঃসৃত ডোপামিনের ওপর নির্ভরশীল যা নিউক্লিয়াস অ্যাকুম্বেন্সের পুরষ্কার কেন্দ্রকে উদ্দীপ্ত করে [৬]। এটি মানুষের মধ্যে "মিষ্টি খাওয়ার জন্য পেটে আলাদা জায়গা থাকা"-র সর্বজনীন অভিজ্ঞতা ব্যাখ্যা করে: ভরপেট ভারী খাবার খেয়ে পেট টানটান থাকা সত্ত্বেও সামনে এক টুকরো চকোলেট কেক দেখলে ডোপামিনের ঢেউয়ে পেট ভরার অনুভূতি মুহূর্তের মধ্যে উধাও হয়ে যায় এবং নতুন করে খাওয়ার তীব্র ইচ্ছা জাগে [৪, ৬]।'
            ),
            l(
              'From an evolutionary anthropology perspective, this hedonic override was an ingenious survival adaptation [1, 6]. In ancient ancestral environments characterized by unpredictable seasonal famine and scarce nourishment, encountering rare, energy-dense foods—such as wild honeycomb, ripe seasonal fruits, or fatty bone marrow—was a lifesaving jackpot [1, 4]. Individuals whose brains were hardwired with a powerful dopamine reward surge that could override hypothalamic fullness signals would gorge themselves on these caloric treasures, storing the surplus energy as adipose tissue to survive the inevitable lean months ahead [1, 6].',
              'মানব বিবর্তনের দৃষ্টিকোণ থেকে এই আনন্দঘন ক্ষুধা ছিল এক চমৎকার জীবনরক্ষাকারী কৌশল [১, ৬]। আদিম পৃথিবীতে যখন নিয়মিত খাদ্যাভাব ও অনিশ্চিত অনাহার ছিল নিত্যসঙ্গী, তখন দুর্লভ কোনো উচ্চ-ক্যালোরির খাবারের সন্ধান পাওয়া—যেমন বুনো মধুর চাক, পাকা মিষ্টি ফল কিংবা চর্বিযুক্ত প্রাণীর মজ্জা—ছিল পরম সৌভাগ্যের বিষয় [১, ৪]। যাদের মস্তিষ্কের ডোপামিন কেন্দ্র অতিরিক্ত খেয়ে পেট ভরার সংকেতকে অগ্রাহ্য করতে পারত, তারা সেই খাবার বেশি বেশি খেয়ে চর্বি হিসেবে জমিয়ে রাখত যা পরবর্তী খরার দিনে তাদের বাঁচিয়ে রাখত [১, ৬]।'
            ),
            l(
              'Tragically, this ancestral survival mechanism has become an evolutionary trap in our modern industrial food environment [4, 6]. Contemporary supermarkets, convenience stores, and fast-food chains are inundated with cheap, industrially manufactured ultra-processed foods specifically engineered to combine refined sugars, industrial seed oils, and salt in hyper-palatable ratios that never existed in nature [4, 6]. Chronic overconsumption of these ultra-processed foods overstimulates dopamine release, gradually triggering hedonic allostasis—a state where dopamine D2 receptors are downregulated, leaving the individual with diminished baseline pleasure and compelling them to overeat continuously just to feel emotionally normal [4, 6].',
              'দুর্ভাগ্যবশত, আদিম মানুষের এই জীবনরক্ষাকারী ব্যবস্থা আধুনিক প্রক্রিয়াজাত খাদ্যের জগতে এক মরণফাঁদে পরিণত হয়েছে [৪, ৬]। আধুনিক বাজার ও ফাস্টফুডের দোকানগুলো এমন খাবারে ঠাসা যা পরিশোধিত চিনি, প্রক্রিয়াজাত চর্বি এবং লবণের এক কৃত্রিম সমন্বয়ে তৈরি যা প্রকৃতিতে কখনোই ছিল না [৪, ৬]। এই খাবারগুলো মস্তিষ্কে ডোপামিনের অতি-প্রবাহ ঘটিয়ে ধীরে ধীরে ডোপামিন রিসেপ্টর কমিয়ে দেয় (হেডোনিক অ্যালোস্ট্যাসিস); ফলে সাধারণ খাবারে কোনো আনন্দ মেলে না এবং মানসিক স্বস্তি পেতে মানুষ ক্রমাগত অতিরিক্ত জাঙ্ক ফুড খেতে বাধ্য হয় [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Dietary Strategies to Maximize Satiety', 'খাবারে দীর্ঘস্থায়ী তৃপ্তি নিশ্চিত করার কৌশল'),
          paragraphs: [
            l(
              'Translating the science of satiety neuroendocrinology into daily life requires intentional, evidence-based meal design [3, 4]. The single most impactful nutritional lever for commanding natural fullness is optimizing dietary protein intake [2, 3]. Across all rigorous clinical trials, dietary protein consistently demonstrates the highest satiety quotient per calorie of any macronutrient [3]. Delivering at least 25 to 35 grams of high-quality protein at each meal triggers robust, simultaneous release of duodenal CCK and ileal GLP-1 and PYY, while accelerating the postprandial collapse of circulating ghrelin [2, 3].',
              'তৃপ্তির এই আধুনিক স্নায়ুবিজ্ঞানকে দৈনন্দিন জীবনে প্রয়োগ করতে হলে বিজ্ঞানসম্মত খাদ্য পরিকল্পনা গ্রহণ করা আবশ্যক [৩, ৪]। প্রাকৃতিক তৃপ্তি অর্জনের সবচেয়ে শক্তিশালী হাতিয়ার হলো খাবারে পর্যাপ্ত প্রোটিন নিশ্চিত করা [২, ৩]। সমস্ত বৈজ্ঞানিক গবেষণায় প্রমাণিত যে প্রতি ক্যালোরির হিসাবে প্রোটিনই সবচেয়ে বেশি তৃপ্তি প্রদান করে [৩]। প্রতি বেলার প্রধান খাবারে অন্তত ২৫ থেকে ৩৫ গ্রাম উচ্চমানের প্রোটিন রাখলে তা অন্ত্রের CCK, GLP-1 ও PYY নিঃসরণ বহুগুণ বাড়িয়ে দেয় এবং ক্ষুধার ঘ্রেলিন হরমোনকে দ্রুত নামিয়ে এনে ক্ষুধা শান্ত রাখে [২, ৩]।'
            ),
            l(
              'The second pillar of practical satiety engineering is volumetric meal design, achieved by incorporating generous amounts of viscous soluble and intact insoluble dietary fiber [3, 4]. High-fiber foods—such as broccoli, cauliflower, leafy greens, lentils, chickpeas, and chia seeds—possess extraordinarily low energy density, meaning they provide massive physical mass and moisture per unit of caloric energy [4]. When this fibrous bulk enters the gastric lumen, it physically stretches the stomach walls, activating mechanosensitive intraganglionic stretch receptors that transmit immediate meal-termination commands to the brainstem via the vagus nerve, without burdening the body with excess calories [3, 4].',
              'ব্যবহারিক তৃপ্তি অর্জনের দ্বিতীয় স্তম্ভ হলো ভলিউমেট্রিক মিল ডিজাইন বা খাবারের আয়তন বৃদ্ধি কৌশল, যা প্রচুর পরিমাণ দ্রবণীয় ও অদ্রবণীয় আঁশযুক্ত খাবারের মাধ্যমে নিশ্চিত করা যায় [৩, ৪]। শাকসবজি, ফুলকপি, ব্রোকলি, বিভিন্ন ডাল ও শিমের মতো আঁশযুক্ত খাদ্যের ক্যালোরি ঘনত্ব অত্যন্ত কম থাকে, অর্থাৎ অল্প ক্যালোরিতে এদের খাবারের ওজন ও আয়তন অনেক বেশি হয় [৪]। এই আঁশযুক্ত খাবার পাকস্থলীতে প্রবেশ করে দেয়াল প্রসারিত করে এবং কোনো অতিরিক্ত ক্যালোরি ছাড়াই ভেগাস স্নায়ুর মেকানিক্যাল সেন্সর দিয়ে মস্তিষ্কে পেট ভরার চমৎকার সংকেত পাঠায় [৩, ৪]।'
            ),
            l(
              'Beyond macronutrient composition, the physical rate and sensory environment of food consumption critically dictate neuroendocrine signaling [3, 4]. Because enteroendocrine L-cells require fifteen to twenty minutes of mechanical transit before releasing therapeutic surges of GLP-1 and PYY, individuals who eat slowly and chew their food thoroughly allow these gut hormones to reach the brain before they finish their plates [2, 3]. In contrast, eating while distracted by television, smartphones, or computers blunts cephalic-phase sensory processing and prevents the brain from accurately recording caloric intake, directly promoting passive overconsumption [4, 6].',
              'খাদ্যের পুষ্টি উপাদানের বাইরে খাওয়ার গতি এবং পরিবেশ হরমোন নিঃসরণে বিশাল ভূমিকা রাখে [৩, ৪]। যেহেতু অন্ত্রের L-কোষগুলো থেকে পূর্ণমাত্রায় GLP-1 ও PYY নিঃসরণ হতে ১৫ থেকে ২০ মিনিট সময় লাগে, তাই যারা খাবার ধীরে ধীরে এবং ভালোভাবে চিবিয়ে খান, তাদের তৃপ্তির হরমোনগুলো প্লেট শেষ করার আগেই মস্তিষ্কে পৌঁছে ক্ষুধা শান্ত করে দেয় [২, ৩]। বিপরীতে টিভি, মোবাইল বা কম্পিউটারের পর্দার দিকে তাকিয়ে অমনোযোগী হয়ে খেলে মস্তিষ্ক কতটুকু ক্যালোরি খাওয়া হলো তা খেয়াল করতে পারে না, ফলে মানুষ অজান্তেই অতিরিক্ত খেয়ে ফেলে [৪, ৬]।'
            ),
            l(
              'Finally, simple behavioral interventions—such as consuming a large glass of water or a bowl of clear broth-based vegetable soup fifteen minutes prior to a meal—pre-load the gastric chamber, initiating partial wall stretch and dampening baseline ghrelin output before solid foods are presented [3, 4]. When combined with the elimination of liquid sugar calories (such as sodas and sweetened fruit juices, which bypass oral chewing and fail to stimulate GLP-1 or suppress ghrelin), these strategies empower individuals to effortlessly conquer constant hunger and maintain optimal metabolic vitality for life [2, 3, 4].',
              'পরিশেষে কিছু সহজ আচরণগত কৌশল—যেমন খাবার খাওয়ার ১৫ মিনিট আগে এক গ্লাস পানি কিংবা সবজির স্যুপ পান করা—পাকস্থলীর দেয়ালকে আংশিক প্রসারিত করে ঘ্রেলিনের তীব্রতা আগেভাগেই কমিয়ে দেয় [৩, ৪]। এর সাথে চিনিযুক্ত তরল পানীয় (যেমন কোমল পানীয় বা মিষ্টি জুস, যা কোনো তৃপ্তির হরমোন না বাড়িয়েই রক্তে চিনি বাড়িয়ে দেয়) বর্জন করলে একজন ব্যক্তি সারাদিনের অপ্রয়োজনীয় ক্ষুধা সহজেই জয় করতে পারেন এবং আজীবন সুস্থ ও কর্মক্ষম জীবন যাপন করতে পারেন [২, ৩, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Educational Takeaways', 'মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Human appetite is governed by an integrated neuroendocrine axis connecting the stomach, intestines, white adipose tissue, and the hypothalamic arcuate nucleus [1, 3]. Gastric ghrelin acts as the sole circulating initiator of pre-prandial hunger, while adipose-derived leptin serves as the long-term gauge of total somatic energy reserves [1, 3]. Acute meal termination is orchestrated by gut peptides—principally CCK from the duodenum and GLP-1 and PYY from the distal ileum—signaling satiety along the sensory vagus nerve to the solitary tract nucleus (NTS) in the hindbrain [2, 3].',
              'মানবদেহের ক্ষুধা মূলত পাকস্থলী, অন্ত্র, চর্বি কোষ এবং হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াসের একটি সমন্বিত নিউরোএন্ডোক্রিন অক্ষ দ্বারা পরিচালিত [১, ৩]। পাকস্থলীর ঘ্রেলিন আহারের আগে ক্ষুধার ঘণ্টা বাজায়, আর চর্বি কোষের লেপটিন দেহের মোট শক্তি সঞ্চয়ের দীর্ঘমেয়াদী হিসাব রাখে [১, ৩]। খাবার শেষ করার তাৎক্ষণিক সংকেত আসে অন্ত্রের পেপটাইড হরমোন (CCK, GLP-1, PYY) এবং ভেগাস স্নায়ুর মাধ্যমে যা পশ্চাৎমস্তিষ্কের NTS কেন্দ্রে পৌঁছে পেট ভরার অনুভূতি নিশ্চিত করে [২, ৩]।'
            ),
            l(
              'A critical evolutionary distinction exists between homeostatic metabolic hunger (cellular energy need) and mesolimbic hedonic hunger (dopamine-driven pleasure) [1, 6]. Modern ultra-processed foods combine refined carbohydrates, industrial fats, and salt to hijack the mesolimbic reward system, overriding hypothalamic satiety signals and promoting passive overconsumption through hedonic allostasis [4, 6].',
              'শারীরবৃত্তীয় মেটাবলিক ক্ষুধা (কোষের শক্তির প্রয়োজন) এবং মেসোলিম্বিক আনন্দঘন ক্ষুধা (ডোপামিন চালিত সুখের আসক্তি)—এই দুইয়ের পার্থক্য বোঝা অত্যন্ত জরুরি [১, ৬]। আধুনিক প্রক্রিয়াজাত খাদ্যগুলো চর্বি ও চিনির বিপজ্জনক সমন্বয়ে মস্তিষ্কের ডোপামিন পুরষ্কার কেন্দ্রকে এমনভাবে বশীভূত করে যে তা পেট ভরার প্রাকৃতিক সংকেতকে অবদমিত করে অতিরিক্ত খাওয়া অব্যাহত রাখে [৪, ৬]।'
            ),
            l(
              'Overcoming constant hunger and optimizing metabolic health requires leveraging the physiology of the ileal brake [2, 3]. Because enteroendocrine L-cells require fifteen to twenty minutes of nutrient transit to release maximal GLP-1 and PYY, pacing meal duration past twenty minutes and chewing thoroughly prevents overeating before fullness hormones can reach the central nervous system [2, 3].',
              'অপ্রয়োজনীয় ক্ষুধা নিবারণ ও মেটাবলিক স্বাস্থ্য সুরক্ষার মূল চাবিকাঠি হলো "ইলিয়াল ব্রেক"-এর সদ্ব্যবহার করা [২, ৩]। যেহেতু অন্ত্রের L-কোষগুলো থেকে পূর্ণ তৃপ্তির হরমোন বের হতে অন্তত ১৫ থেকে ২০ মিনিট সময় লাগে, তাই ধীরে ধীরে খাওয়া এবং ভালোভাবে চিবিয়ে সময় নিয়ে খাওয়া অতিরিক্ত ক্যালোরি গ্রহণ প্রতিহত করে [২, ৩]।'
            ),
            l(
              'Designing meals centered on 25 to 35 grams of high-quality protein, generous viscous soluble fiber, and low caloric density triggers maximal hormonal satiety and gastric stretch without excess calories [3, 4]. Understanding these biological mechanisms equips learners to conquer appetite challenges with scientific precision rather than self-defeating willpower battles [1, 4].',
              'প্রতি বেলার খাবারে ২৫ থেকে ৩৫ গ্রাম উচ্চমানের প্রোটিন, প্রচুর শাকসবজির দ্রবণীয় আঁশ এবং কম ক্যালোরি ঘনত্বের খাবার রাখলে তা কোনো বাড়তি ক্যালোরি ছাড়াই পেট ভরার চমৎকার অনুভূতি দেয় [৩, ৪]। এই শারীরবৃত্তীয় সত্যগুলো জানা থাকলে মানুষ আত্মবিধ্বংসী মানসিক লড়াই না করে নিখুঁত বৈজ্ঞানিক উপায়ে নিজের স্বাস্থ্য ও ওজনকে আজীবন বশে রাখতে সক্ষম হয় [১, ৪]।'
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
              'The arcuate nucleus (ARC) of the ventromedial hypothalamus serves as the primary master sensory gatekeeper integrating circulating metabolic hormones and nutrients with central autonomous feeding behavior [1]. Situated bilaterally at the base of the third ventricle immediately adjacent to the median eminence, ARC neurons reside behind a fenestrated, semi-permeable blood-brain barrier [1, 4]. This unique anatomical microvascular specialization permits specialized primary sensory neurons within the arcuate nucleus to directly sample circulating macromolecules—including leptin, insulin, ghrelin, peptide YY, and free branched-chain amino acids—without the strict exclusion imposed by tight astrocytic foot processes throughout the rest of the cerebrum [1, 4].',
              'হাইপোথ্যালামাসের ভেন্ট্রোমেডিয়াল অঞ্চলে অবস্থিত আর্কুয়েট নিউক্লিয়াস (ARC) হলো প্রান্তীয় রক্তের হরমোন এবং পুষ্টি উপাদানগুলোর সংকেত গ্রহণকারী কেন্দ্রীয় স্নায়ুবিক নিয়ন্ত্রণ কেন্দ্র [১]। তৃতীয় ভেন্ট্রিকলের নিচে মিডিয়ান এমিনেন্সের ঠিক পাশেই এর অবস্থান হওয়ায় এর রক্তনালীগুলো সূক্ষ্ম ছিদ্রযুক্ত (ফেনেস্ট্রেটেড) এবং রক্ত-মস্তিষ্ক প্রাচীর আংশিক ভেদ্য [১, ৪]। মস্তিষ্কের এই অনন্য শারীরিক সুবিধার কারণে আর্কুয়েট নিউক্লিয়াসের নিউরনগুলো রক্তের লেপটিন, ইনসুলিন, ঘ্রেলিন, PYY এবং অ্যামিনো অ্যাসিডের মতো বড় পেপটাইড অণুগুলোর সংস্পর্শে সরাসরি আসতে পারে এবং দেহের পুষ্টির তাৎক্ষণিক হিসাব নিতে পারে [১, ৪]।'
            ),
            l(
              'Within the cytoarchitectural framework of the arcuate nucleus reside two distinct, functionally antagonistic neuronal populations that together form an integrated, bistable metabolic toggle switch [1]. The first population comprises the anorexigenic (appetite-suppressing) pro-opiomelanocortin (POMC) and cocaine- and amphetamine-regulated transcript (CART) co-expressing neurons [1]. The second population comprises the orexigenic (appetite-stimulating) neuropeptide Y (NPY) and agouti-related protein (AgRP) co-expressing neurons, which also utilize gamma-aminobutyric acid (GABA) as a primary fast inhibitory co-transmitter [1]. Under physiological conditions, the activity of these two opposing circuits is cross-inhibited, ensuring that hunger and satiety states remain mutually exclusive [1].',
              'আর্কুয়েট নিউক্লিয়াসের কোষীয় কাঠামোর মধ্যে দুটি পরস্পর বিপরীতধর্মী নিউরন গুচ্ছ অবস্থান করে যা একসাথে একটি দ্বিমুখী মেটাবলিক টগল সুইচ বা অন-অফ চাবি হিসেবে কাজ করে [১]। প্রথম দলটি হলো ক্ষুধা দমনকারী POMC এবং CART নিউরন [১]। আর দ্বিতীয় দলটি হলো ক্ষুধা উদ্দীপনাকারী Neuropeptide Y (NPY) এবং Agouti-Related Protein (AgRP) নিউরন, যা একই সাথে GABA নামক নিউরোট্রান্সমিটার ক্ষরণ করে [১]। সুস্থ অবস্থায় এই দুটি সার্কিট পরস্পরকে অবদমিত করে রাখে, ফলে ক্ষুধার্ত থাকা এবং পেট ভরা থাকার অনুভূতি কখনোই একসাথে তৈরি হয় না [১]।'
            ),
            l(
              'In the anorexigenic pathway, the 241-amino-acid preprohormone POMC is processed post-translationally by prohormone convertase 1/3 (PC1/3, encoded by PCSK1) and prohormone convertase 2 (PC2) to yield the bioactive tridecapeptide alpha-Melanocyte-Stimulating Hormone (alpha-MSH) [1]. POMC axon terminals project to second-order target neurons located in the paraventricular nucleus (PVN), lateral hypothalamic area (LHA), and dorsomedial hypothalamus, where secreted alpha-MSH acts as a high-affinity full agonist at Melanocortin-4 Receptors (MC4R) [1]. MC4R is a Gs-protein-coupled receptor whose activation stimulates adenylate cyclase, elevating intracellular cAMP and activating protein kinase A (PKA), which directly represses downstream feeding programs while driving sympathetic outflow to promote adaptive thermogenesis and energy expenditure [1, 4].',
              'ক্ষুধা নিবারক পথে POMC প্রোটিন বিশেষ প্রো-হরমোন কনভার্টেজ এনজাইম (PC1/3 ও PC2) দ্বারা ভেঙে আলফা-মেলানোসাইট-স্টিমুলেটিং হরমোন (alpha-MSH) তৈরি করে [১]। POMC নিউরনের অ্যাক্সনগুলো হাইপোথ্যালামাসের প্যারাভেন্ট্রিকুলার নিউক্লিয়াসে (PVN) গিয়ে আলফা-MSH নিঃসরণ করে, যা সেখানকার Melanocortin-4 Receptors (MC4R)-এ যুক্ত হয় [১]। MC4R হলো একটি Gs-প্রোটিন যুক্ত রিসেপ্টর যা সক্রিয় হলে কোষে cAMP ও প্রোটিন কাইনেজ এ (PKA) বৃদ্ধি পায়; এটি মস্তিষ্কের খাওয়ার নির্দেশ বন্ধ করে দেয় এবং একই সাথে সিমপ্যাথেটিক স্নায়ুতন্ত্রের মাধ্যমে শক্তি ব্যয় ও তাপ উৎপাদন বাড়িয়ে দেয় [১, ৪]।'
            ),
            l(
              'Conversely, activation of the orexigenic NPY/AgRP pathway produces intense, immediate hyperphagia through a double-negative gating mechanism [1]. Neuropeptide Y binds inhibitory Gi-coupled Y1 and Y5 receptors in the PVN and perifornical area, directly silencing satiety outflow [1]. Simultaneously, AgRP acts as a unique endogenous competitive antagonist and inverse agonist at MC4R, displacing alpha-MSH and actively downregulating basal MC4R constitutive signaling [1]. Compounding this effect, AgRP axon collaterals release GABA directly onto adjacent POMC cell bodies, hyperpolarizing and completely silencing the anorexigenic circuit [1]. Monogenic loss-of-function mutations within this melanocortin signaling axis—encompassing mutations in LEPR, POMC, PCSK1, or MC4R—represent the most frequent monogenic causes of severe, early-onset morbid human obesity, manifesting as uncontrollable pediatric hyperphagia and rapid fat mass expansion [1, 4].',
              'বিপরীতভাবে NPY/AgRP সার্কিট সক্রিয় হলে তা এক দ্বিমুখী প্রক্রিয়ার মাধ্যমে প্রচণ্ড ক্ষুধার জন্ম দেয় [১]। Neuropeptide Y প্যারাভেন্ট্রিকুলার নিউক্লিয়াসের Gi-যুক্ত Y1 ও Y5 রিসেপ্টরে বসে তৃপ্তির সংকেত স্তব্ধ করে দেয় [১]। একই সাথে AgRP মেলানোকর্টিন-৪ রিসেপ্টরে (MC4R) গিয়ে আলফা-MSH কে তাড়িয়ে দিয়ে নিজে বসে পড়ে এবং বিপরীত ক্রিয়া ঘটিয়ে ক্ষুধার সুইচ পুরোপুরি অন করে দেয় [১]। তদুপরি AgRP নিউরনগুলো GABA ক্ষরণ করে পাশের POMC নিউরনগুলোকে বৈদ্যুতিকভাবে স্তব্ধ করে দেয় [১]। এই মেলানোকর্টিন পথের যেকোনো একটি উপাদানে জিনগত ত্রুটি থাকলে শিশুদের মধ্যে মারাত্মক অনিয়ন্ত্রিত খাওয়ার রোগ এবং ভয়াবহ শৈশব স্থূলতা দেখা দেয় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Biochemical Mechanisms of Ghrelin Octanoylation & Leptin-JAK-STAT Signaling', 'ঘ্রেলিন অক্টানয়লেশন ও লেপটিন-JAK-STAT সংকেত প্রবাহের প্রাণরসায়ন'),
          paragraphs: [
            l(
              'The molecular activation of circulating appetite hormones requires highly specific post-translational modifications and receptor signaling cascades [1, 3]. Ghrelin, a 28-amino-acid peptide encoded by the GHRL gene on chromosome 3, is synthesized initially as a 117-amino-acid preproghrelin precursor in gastric oxyntic mucosal endocrine cells [3]. Within the endoplasmic reticulum, the precursor is cleaved into proghrelin, which must undergo an obligatory enzymatic acylation catalyzed by Ghrelin O-Acyltransferase (GOAT, encoded by MBOAT4), a membrane-bound membrane-bound O-acyltransferase [3].',
              'ক্ষুধার হরমোনগুলোর কার্যকারিতা অর্জনের জন্য অত্যন্ত সুনির্দিষ্ট পোস্ট-ট্রান্সলেশনাল রূপান্তর এবং কোষীয় সংকেত পথের প্রয়োজন হয় [১, ৩]। ঘ্রেলিন হলো ২৮টি অ্যামিনো অ্যাসিডের একটি পেপটাইড যা ক্রোমোজোম ৩-এ অবস্থিত GHRL জিন দ্বারা পাকস্থলীর মিউকোসায় প্রিপ্রোঘ্রেলিন হিসেবে তৈরি হয় [৩]। এন্ডোপ্লাজমিক রেটিকুলামে এটি প্রোঘ্রেলিনে পরিণত হওয়ার পর Ghrelin O-Acyltransferase (GOAT) নামক একটি বিশেষ এনজাইম দ্বারা এতে ফ্যাটি অ্যাসিড যুক্ত হতে হয় [৩]।'
            ),
            l(
              'GOAT specifically transfers an eight-carbon medium-chain saturated fatty acid (octanoic acid, C8:0) from dietary or hepatic acyl-coenzyme A donors onto the hydroxyl oxygen of the Serine-3 residue of proghrelin [3]. This hydrophobic octanoyl moiety is biologically mandatory: unacylated des-acyl ghrelin (which constitutes >80% of total circulating ghrelin) is completely devoid of orexigenic activity because it cannot fit into the binding pocket of the Growth Hormone Secretagogue Receptor type 1a (GHSR1a) [3]. Octanoylated ghrelin binds the Gq/11-coupled GHSR1a on hypothalamic NPY/AgRP neurons, triggering inositol trisphosphate (IP3) generation, intracellular calcium mobilization, and activation of calcium/calmodulin-dependent protein kinase kinase 2 (CaMKK2), which phosphorylates AMPK to fire intense hunger output [1, 3].',
              'GOAT এনজাইমটি প্রোঘ্রেলিনের তিন নম্বর সেরিন অ্যামিনো অ্যাসিডের হাইড্রোক্সিল গ্রুপে একটি আট-কার্বনের ফ্যাটি অ্যাসিড (অক্টানোয়িক অ্যাসিড C8:0) যুক্ত করে [৩]। এই হাইড্রোফোবিক অক্টানয়ল লেজটি জৈবিকভাবে অপরিহার্য: এই রূপান্তরহীন ডেস-অ্যাসাইল ঘ্রেলিন (যা রক্তের ৮০% এর বেশি) কোনো ক্ষুধা তৈরি করতে পারে না কারণ তা মস্তিষ্কের GHSR1a রিসেপ্টরে ফিট হতে পারে না [৩]। কেবল অক্টানয়লেটেড ঘ্রেলিন NPY/AgRP নিউরনের GHSR1a রিসেপ্টরে বসে IP3 ও ক্যালসিয়াম বাড়িয়ে AMPK এনজাইমকে সক্রিয় করে এবং তীব্র ক্ষুধার সংকেত মস্তিষ্কে ছড়িয়ে দেয় [১, ৩]।'
            ),
            l(
              'In stark physiological contrast to ghrelin, leptin is a 16-kDa non-glycosylated helical cytokine-like peptide synthesized primarily by subcutaneous and visceral adipocytes [1, 4]. Encoded by the LEP gene, leptin secretion is directly proportional to adipocyte triglyceride volume and baseline glucose utilization [4]. Circulating leptin crosses the blood-brain barrier via saturable transport and binds the long signaling isoform of the leptin receptor (LepRb, encoded by LEPR), a class I cytokine receptor family member that lacks intrinsic kinase activity [1].',
              'ঘ্রেলিনের সম্পূর্ণ বিপরীতে লেপটিন হলো ১৬-কিলোডাল্টনের একটি সাইটোকাইন-সদৃশ পেপটাইড যা চর্বি কোষে LEP জিন দ্বারা তৈরি হয় [১, ৪]। রক্তে লেপটিনের নিঃসরণ চর্বি কোষের আয়তন এবং গ্লুকোজ খরচের সাথে সরাসরি সমানুপাতিক [৪]। রক্তবাহিত লেপটিন একটি বিশেষ ট্রান্সপোর্টারের মাধ্যমে মস্তিষ্কে প্রবেশ করে এবং লেপটিন রিসেপ্টরের দীর্ঘ সংকেতবাহী রূপ LepRb-এর সাথে যুক্ত হয়, যার নিজস্ব কোনো কাইনেজ কার্যকারিতা নেই [১]।',
            ),
            l(
              'Binding of a leptin homodimer induces LepRb receptor dimerization, triggering trans-phosphorylation and activation of receptor-associated Janus Kinase 2 (JAK2) [1]. Activated JAK2 subsequently phosphorylates multiple intracellular tyrosine residues on the cytoplasmic tail of LepRb, most crucially Tyr985, Tyr1077, and Tyr1138 [1]. Phosphorylated Tyr1138 acts as a specific docking site for the SH2 domain of Signal Transducer and Activator of Transcription 3 (STAT3) [1]. Recruited STAT3 is phosphorylated on Tyr705 by JAK2, homodimerizes, and translocates into the nucleus where it directly binds gamma-interferon-activated sequence (GAS) motifs in the promoter regions of target genes, directly upregulating POMC transcription while repressing the transcription of AgRP and NPY [1, 4].',
              'লেপটিন রিসেপ্টরে যুক্ত হওয়া মাত্রই রিসেপ্টর দুটি একত্রিত হয়ে তাদের সাথে থাকা Janus Kinase 2 (JAK2) এনজাইমকে ফসফোরাইলেট করে পূর্ণ সক্রিয় করে তোলে [১]। সক্রিয় JAK2 তখন রিসেপ্টরের লেজে অবস্থিত Tyr1138 টাইরোসিনকে ফসফোরাইলেট করে [১]। এই ফসফোরাইলেটেড স্থানে STAT3 প্রোটিন এসে যুক্ত হয় এবং JAK2 দ্বারা ফসফোরাইলেট হয়ে ডাইমার গঠন করে নিউক্লিয়াসে প্রবেশ করে [১]। নিউক্লিয়াসে STAT3 সরাসরি জিনের ওপর বসে ক্ষুধা দমনকারী POMC তৈরি বাড়িয়ে দেয় এবং একই সাথে ক্ষুধা উদ্দীপক AgRP ও NPY-এর উৎপাদন বন্ধ করে দেয় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Satiety Incretins: GLP-1, PYY, CCK & The Vagal-Brainstem Axis', 'তৃপ্তি ইনক্রিটিন: GLP-1, PYY, CCK ও ভেগাস-ব্রেনস্টেম অক্ষ'),
          paragraphs: [
            l(
              'The acute, short-term termination of individual meals is orchestrated by an intricate gut-brain endocrine axis linking specialized enteroendocrine cells to the dorsal vagal complex of the hindbrain [2, 3]. The earliest hormonal checkpoint occurs in the proximal duodenum and jejunum, where dietary long-chain fatty acids (>=12 carbons) and aromatic amino acids (phenylalanine, tryptophan) stimulate mucosal I-cells to secrete Cholecystokinin (CCK), predominantly in its bioactive octapeptide form (CCK-8) [3]. CCK acts locally through paracrine diffusion to bind CCK-1 (CCK-A) receptors located on unmyelinated sensory endings of the abdominal vagus nerve [3, 4].',
              'প্রতি বেলার খাবার সমাপ্ত করার তাৎক্ষণিক কাজটি সম্পন্ন হয় অন্ত্রের বিশেষ হরমোন উৎপাদনকারী কোষ এবং পশ্চাৎমস্তিষ্কের ডোরসাল ভেগাল কমপ্লেক্সের মধ্যকার এক অসাধারণ সমন্বয়ের মাধ্যমে [২, ৩]। খাদ্য গ্রহণের পর প্রথম হরমোন সংকেত আসে ক্ষুদ্রান্ত্রের শুরুর অংশ থেকে, যেখানে চর্বি ও অ্যামিনো অ্যাসিডের উপস্থিতিতে I-কোষগুলো কোলেসিস্টোকাইনিন (CCK-8) নিঃসরণ করে [৩]। CCK অন্ত্রের ভেতরেই স্থানীয়ভাবে নিঃসৃত হয়ে পেটের ভেগাস স্নায়ুর সেন্সরে থাকা CCK-1 রিসেপ্টরের সাথে যুক্ত হয় এবং খাওয়ার আকার সীমিত করার নির্দেশ পাঠায় [৩, ৪]।'
            ),
            l(
              'As nutrient digestion continues into the ileum and colon, unabsorbed luminal fatty acids stimulate free fatty acid receptor 4 (FFA4 / GPR120), bile acids engage the G-protein bile acid receptor 1 (GPBAR1 / TGR5), and microbial short-chain fatty acids stimulate FFAR2/FFAR3 on enteroendocrine L-cells [2, 3]. In response, L-cells synthesize preproglucagon, which is cleaved by proprotein convertase 1/3 (PC1/3) to yield Glucagon-Like Peptide-1 (specifically GLP-1 7-36 amide) and Peptide YY (co-secreted and cleaved by dipeptidyl peptidase-4 into active PYY 3-36) [2, 3].',
              'পরিপাককৃত খাদ্য যখন ক্ষুদ্রান্ত্রের শেষ প্রান্তে (ইলিয়াম) পৌঁছায়, তখন মুক্ত ফ্যাটি অ্যাসিড, পিত্তলবণ এবং ব্যাকটেরিয়ার তৈরি শর্ট-চেইন ফ্যাটি অ্যাসিড L-কোষের নির্দিষ্ট রিসেপ্টরগুলোকে উদ্দীপ্ত করে [২, ৩]। এর প্রতিক্রিয়ায় L-কোষগুলো প্রাক-হরমোন ভেঙে Glucagon-Like Peptide-1 (GLP-1 7-36 amide) এবং Peptide YY (PYY 3-36) নিঃসরণ করে [২, ৩]। এই দুটি হরমোন একই সাথে রক্তে মিশে অন্ত্র ও মস্তিষ্কের দিকে ধাবিত হয় [২, ৩]।'
            ),
            l(
              'GLP-1 and PYY orchestrate the classical "ileal brake" by binding peripheral enteric and vascular receptors [2, 3]. GLP-1 binds GLP-1 receptors on enteric neurons to inhibit vagal cholinergic outflow to the stomach, powerfully delaying gastric emptying and slowing intestinal transit [2]. Simultaneously, PYY3-36 binds Gi-coupled Y2 receptors on presynaptic vagal terminals, inhibiting acetylcholine release and suppressing cephalic-phase pancreaticobiliary secretion [3]. Concurrently, both peptides cross the fenestrated area postrema and median eminence, binding receptors in the nucleus tractus solitarius (NTS) and hypothalamic arcuate nucleus to extinguish appetite and induce postprandial tranquility [1, 2].',
              'GLP-1 এবং PYY অন্ত্রের ওপর "ইলিয়াল ব্রেক" প্রয়োগ করে পাকস্থলী খালি হওয়ার গতি নাটকীয়ভাবে মন্থর করে দেয় [২, ৩]। GLP-1 পাকস্থলীর মাংসপেশির সংকোচন ধীর করে খাদ্যকে ধীরে ধীরে ক্ষুদ্রান্ত্রে প্রবেশ করায়, আর PYY অন্ত্রের গতি ধীর করে পুষ্টি শোষণের সময় বাড়িয়ে দেয় [২, ৩]। একই সাথে রক্তে পরিবাহিত হয়ে এই হরমোন দুটি মস্তিষ্কের এরিয়া পোস্ট্রিমা ও হাইপোথ্যালামাসের NTS কেন্দ্রে পৌঁছে ক্ষুধা উৎপাদনকারী নিউরনকে নিস্তব্ধ করে দেয় এবং আহার সমাপ্তির পূর্ণ মানসিক প্রশান্তি দান করে [১, ২]।'
            ),
            l(
              'However, endogenous native GLP-1 possesses an extraordinarily short biological half-life of only 1.5 to 2.0 minutes in the circulation [2]. The ubiquitous serine protease Dipeptidyl Peptidase-4 (DPP-4), expressed heavily on the luminal surface of vascular endothelial cells, rapidly cleaves the two N-terminal amino acids (His7-Ala8) of active GLP-1(7-36)amide, rendering it into the biologically inactive and antagonist metabolite GLP-1(9-36)amide before more than 10% to 15% of gut-derived GLP-1 can even reach the portal vein [2]. Neutral Endopeptidase 24.11 (neprilysin) executes secondary cleavage, while renal clearance eliminates degradation fragments [2]. This enzymatic vulnerability represents the critical evolutionary rationale behind modern pharmacological degradation-resistant GLP-1 receptor mimetics [2, 5].',
              'তবে প্রাকৃতিক GLP-1 হরমোনের রক্তে স্থায়িত্বকাল অত্যন্ত সংক্ষিপ্ত—মাত্র দেড় থেকে দুই মিনিট [২]! রক্তনালীর প্রাচীরে অবস্থিত Dipeptidyl Peptidase-4 (DPP-4) নামক এনজাইম সক্রিয় GLP-1-এর সামনের দুটি অ্যামিনো অ্যাসিড কেটে একে মুহূর্তের মধ্যে নিষ্ক্রিয় করে ফেলে; ফলে অন্ত্র থেকে নিঃসৃত GLP-1-এর ৯০ শতাংশই যকৃতে পৌঁছানোর আগেই ধ্বংস হয়ে যায় [২]। এরপর কিডনির মাধ্যমে এটি নির্গত হয়। প্রাকৃতিক হরমোনের এই দ্রুত ধ্বংস হয়ে যাওয়ার দুর্বলতাই আধুনিক চিকিৎসায় কৃত্রিম দীর্ঘস্থায়ী GLP-1 ওষুধের আবিষ্কারের মূল ভিত্তি তৈরি করেছে [২, ৫]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Pathophysiology of Leptin Resistance & Mesolimbic Dopamine Hijacking', 'লেপটিন রেজিস্ট্যান্সের রোগতত্ত্ব ও ডোপামিন রিওয়ার্ড ব্যবস্থার বিপথগমন'),
          paragraphs: [
            l(
              'In contemporary human obesity, circulating leptin levels are not deficient; on the contrary, serum leptin is profoundly elevated in direct proportion to expanded white adipose tissue mass, frequently exceeding 50 to 100 ng/mL (compared to 5 to 10 ng/mL in lean individuals) [1, 4]. Despite this persistent hyperleptinemia, the central nervous system fails to perceive the abundance of stored energy and instead acts as if the body is undergoing severe starvation—a hallmark pathophysiological condition termed "central leptin resistance" [1, 4].',
              'আধুনিক স্থূলতায় আক্রান্ত ব্যক্তিদের দেহে লেপটিনের কোনো অভাব থাকে না; বরং তাদের চর্বির পরিমাণ বেশি হওয়ায় রক্তে লেপটিনের মাত্রা স্বাভাবিকের চেয়ে ১০ থেকে ২০ গুণ বেশি থাকে (স্বাভাবিক যেখানে ৫–১০ ng/mL, সেখানে স্থূলতায় তা ৫০ থেকে ১০০ ng/mL ছাড়িয়ে যায়) [১, ৪]। কিন্তু রক্তে এত বিপুল পরিমাণ লেপটিন থাকা সত্ত্বেও মস্তিষ্ক তা বুঝতে পারে না এবং দেহ অনাহারে শুকিয়ে যাচ্ছে ভেবে ক্ষুধা বাড়িয়ে দেয়—এই অদ্ভুত রোগতাত্ত্বিক অবস্থাকে "সেন্ট্রাল লেপটিন রেজিস্ট্যান্স" বলা হয় [১, ৪]।'
            ),
            l(
              'Molecular investigations have identified two primary intracellular negative-feedback inhibitors driving central leptin resistance: Suppressor of Cytokine Signaling 3 (SOCS3) and Protein Tyrosine Phosphatase 1B (PTP1B) [1, 4]. Chronic, uninterrupted activation of the LepRb-JAK2-STAT3 cascade in POMC neurons transcriptionally induces high levels of SOCS3 [1]. SOCS3 protein binds with high affinity to phosphorylated Tyr985 of the LepRb receptor and directly occludes the catalytic cleft of JAK2, physically terminating further trans-phosphorylation [1]. Concurrently, endoplasmic reticulum-localized PTP1B dephosphorylates active JAK2 and STAT3, completely uncoupling the leptin receptor from nuclear transcriptional regulation and creating central leptin insensitivity [1].',
              'কোষীয় গবেষণায় দেখা গেছে যে দুটি প্রধান প্রোটিন এই লেপটিন রেজিস্ট্যান্স সৃষ্টির জন্য দায়ী: Suppressor of Cytokine Signaling 3 (SOCS3) এবং Protein Tyrosine Phosphatase 1B (PTP1B) [১, ৪]। অতিরিক্ত লেপটিনের সার্বক্ষণিক উদ্দীপনার ফলে কোষে SOCS3 প্রোটিন অত্যধিক বেড়ে যায় [১]। SOCS3 গিয়ে লেপটিন রিসেপ্টরের Tyr985 স্থানে আটকে যায় এবং JAK2 এনজাইমের মুখ বন্ধ করে দেয়, ফলে আর কোনো সংকেত ভেতরে ঢুকতে পারে না [১]। একই সাথে PTP1B এনজাইম সক্রিয় JAK2 ও STAT3 থেকে ফসফেট মুছে দিয়ে এদের নিষ্ক্রিয় করে ফেলে, যার ফলে রক্তে লেপটিন থাকা সত্ত্বেও মস্তিষ্কের নিউক্লিয়াস কোনো খবর পায় না [১]।'
            ),
            l(
              'Parallel to hypothalamic resistance, feeding behavior is heavily modulated by the mesolimbic dopamine pathway, which processes incentive salience ("wanting") and positive reinforcement [4, 6]. Dopaminergic neurons in the ventral tegmental area (VTA) project heavily to the nucleus accumbens (NAc) and the prefrontal cortex [6]. The ingestion of hyper-palatable foods containing engineered combinations of refined carbohydrates and fats stimulates rapid, phasic dopamine efflux in the NAc, reinforcing the desire to seek out and consume those specific nutrient configurations independently of homeostatic metabolic state [6].',
              'হাইপোথ্যালামাসের এই সংবেদনহীনতার পাশাপাশি খাওয়ার আচরণকে প্রচণ্ডভাবে প্রভাবিত করে মস্তিষ্কের মেসোলিম্বিক ডোপামিন রিওয়ার্ড সার্কিট, যা আনন্দ ও প্রলোভন প্রক্রিয়াজাত করে [৪, ৬]। মস্তিষ্কের ভেন্ট্রাল টেগমেন্টাল এরিয়া (VTA) থেকে ডোপামিন নির্গত হয়ে নিউক্লিয়াস অ্যাকুম্বেন্সের পুরষ্কার কেন্দ্রে প্রবেশ করে [৬]। পরিশোধিত শর্করা ও চর্বির সমন্বয়ে তৈরি লোভনীয় খাবার খাওয়া মাত্রই নিউক্লিয়াস অ্যাকুম্বেন্সে প্রচুর ডোপামিন ক্ষরিত হয়, যা দেহের শক্তির প্রয়োজন না থাকা সত্ত্বেও খাবার খাওয়ার এক তীব্র মানসিক তাগিদ তৈরি করে [৬]।'
            ),
            l(
              'Under chronic exposure to ultra-processed foods, this reward circuitry undergoes neuroadaptive downregulation known as "hedonic allostasis" [6]. Striatal dopamine D2 receptor (D2R) density progressively declines—a neurobiological finding observed identically in severe substance abuse and addiction [6]. With fewer functional D2 receptors available, basal dopaminergic tone drops, producing emotional dysphoria and blunted reward sensitivity [6]. To achieve the same baseline state of neurochemical satisfaction, the individual must consume progressively larger quantities of hyper-palatable food, overriding homeostatic satiety signals and establishing a compulsive cycle of chronic overconsumption [4, 6].',
              'প্রক্রিয়াজাত ফাস্টফুড ক্রমাগত খেতে থাকলে মস্তিষ্কের পুরষ্কার কেন্দ্রটি ক্ষতিগ্রস্ত হয় যাকে "হেডোনিক অ্যালোস্ট্যাসিস" বলা হয় [৬]। মস্তিষ্কের স্ট্রাইটামে ডোপামিন D2 রিসেপ্টরের সংখ্যা নাটকীয়ভাবে কমে যায়—মাদকাসক্ত ব্যক্তিদের মস্তিষ্কেও ঠিক একই ধরনের পতন দেখা যায় [৬]! ডোপামিন রিসেপ্টর কমে যাওয়ায় স্বাভাবিক খাবারে কোনো আনন্দ পাওয়া যায় না এবং ব্যক্তি মানসিক বিষণ্ণতা অনুভব করে [৬]। ফলে সামান্য আনন্দ বা স্বস্তি পেতে ব্যক্তিকে ক্রমাগত আরও বেশি পরিমাণে উচ্চ-ক্যালোরির অস্বাস্থ্যকর খাবার খেতে হয়, যা স্থূলতা ও আসক্তির এক অন্তহীন চক্র তৈরি করে [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Pharmacology of Incretin Mimetics & Multi-Agonists', 'ইনক্রিটিন মিমেটিক্স ও মাল্টি-অ্যাগোনিস্ট ওষুধের ক্লিনিক্যাল ফার্মাকোলজি'),
          paragraphs: [
            l(
              'The translation of gut satiety neuroendocrinology into clinical medicine has yielded the most successful pharmacotherapeutic revolution in modern metabolic medicine: GLP-1 receptor agonists (GLP-1 RAs) and multi-incretin unimolecular co-agonists [2, 5]. To overcome the 2-minute half-life of native GLP-1 caused by rapid DPP-4 degradation, medicinal chemists engineered synthetic peptide analogues with structural modifications that confer absolute DPP-4 resistance and facilitate reversible binding to circulating serum albumin [2, 5].',
              'অন্ত্রের তৃপ্তিদায়ক হরমোনগুলোর স্নায়ুবিজ্ঞানকে কাজে লাগিয়ে আধুনিক চিকিৎসা বিজ্ঞানে এক যুগান্তকারী বিপ্লব ঘটেছে: GLP-1 রিসেপ্টর অ্যাগোনিস্ট এবং মাল্টি-ইনক্রিটিন ওষুধ [২, ৫]। প্রাকৃতিক GLP-1 যেখানে DPP-4 এনজাইম দ্বারা মাত্র দুই মিনিটে ধ্বংস হয়ে যায়, সেখানে আধুনিক গবেষকরা পেপটাইডের গঠনে এমন পরিবর্তন এনেছেন যা DPP-4 এনজাইমকে সম্পূর্ণরূপে প্রতিহত করে এবং রক্তের অ্যালবুমিন প্রোটিনের সাথে যুক্ত হয়ে দীর্ঘকাল টিকে থাকতে পারে [২, ৫]।'
            ),
            l(
              'In semaglutide, two critical modifications were introduced: substitution of alanine with 2-aminoisobutyric acid (Aib) at position 8 (rendering the N-terminus chemically resistant to DPP-4 cleavage), and attachment of a C-18 diacid fatty acid chain via an AEEA hydrophilic spacer to Lysine-26 [5]. This hydrophobic fatty diacid chain promotes non-covalent, high-affinity binding to circulating albumin, shielding the peptide from renal glomerular filtration and extending its human terminal elimination half-life to approximately 168 hours (one full week) [5]. The landmark STEP 1 trial (Wilding et al., 2021) demonstrated that once-weekly subcutaneous semaglutide 2.4 mg produced a mean body weight loss of 14.9% at 68 weeks, driven by dual mechanisms: delayed gastric emptying peripherally and profound suppression of appetite and food cravings centrally in the hypothalamus and mesolimbic reward system [5].',
              'সেমাগ্লুটাইড ওষুধে দুটি যুগান্তকারী পরিবর্তন করা হয়েছে: আট নম্বর অবস্থানে অ্যালানিনের বদলে Aib অ্যামিনো অ্যাসিড বসিয়ে একে DPP-4 থেকে অভেদ্য করা হয়েছে, এবং ২৬ নম্বর লাইসিনে ১৮-কার্বনের একটি ফ্যাটি অ্যাসিড শিকল যুক্ত করা হয়েছে [৫]। এই ফ্যাটি অ্যাসিড রক্তের অ্যালবুমিনের সাথে শক্তভাবে যুক্ত থাকে, ফলে কিডনি একে সহজে বের করে দিতে পারে না এবং মানবদেহে এর কার্যকারিতা পুরো এক সপ্তাহ (১৬৮ ঘণ্টা) বজায় থাকে [৫]। বিখ্যাত STEP 1 ক্লিনিক্যাল ট্রায়ালে (২০২১) দেখা গেছে যে সপ্তাহে মাত্র একবার ২.৪ মিলিগ্রাম সেমাগ্লুটাইড প্রয়োগে রোগীদের ওজন গড়ে ১৪.৯% হ্রাস পেয়েছে, যা পাকস্থলী খালি হওয়ার গতি ধীর করার পাশাপাশি মস্তিষ্কের ক্ষুধা ও অস্বাস্থ্যকর খাবারের আসক্তি নাটকীয়ভাবে দমন করেছে [৫]।'
            ),
            l(
              'Building upon pure GLP-1 receptor agonism, next-generation unimolecular twin- and tri-incretin agonists achieve even greater metabolic efficacy [2, 5]. Tirzepatide is a 39-amino-acid synthetic peptide engineered as a dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor agonist [5]. By engaging GIP receptors in white adipose tissue (promoting insulin sensitivity, vascular perfusion, and lipid storage flexibility) while engaging central GLP-1 receptors, tirzepatide produced mean weight reductions exceeding 20% to 22.5% in the SURMOUNT-1 clinical trial, approaching the efficacy of bariatric metabolic surgery [5]. Frontier agents like retatrutide add glucagon receptor agonism to GIP and GLP-1, stimulating hepatic energy expenditure and mitochondrial thermogenesis to produce up to 24% weight loss in Phase 2 human trials [5].',
              'কেবলমাত্র GLP-1 এর বাইরে গিয়ে আধুনিক বিজ্ঞানে ডুয়াল ও ট্রিপল ইনক্রিটিন ওষুধ তৈরি হয়েছে যা আরও বিস্ময়কর ফলাফল দিচ্ছে [২, ৫]। যেমন তিরজেপাটাইড হলো একটি ডুয়াল GIP এবং GLP-1 রিসেপ্টর অ্যাগোনিস্ট [৫]। এটি চর্বি কোষে GIP রিসেপ্টর এবং মস্তিষ্কে GLP-1 রিসেপ্টরকে একসাথে সক্রিয় করে SURMOUNT-1 ট্রায়ালে রোগীদের ওজন গড়ে ২০% থেকে ২২.৫% পর্যন্ত কমিয়ে দিয়েছে, যা প্রায় বেরিয়াট্রিক সার্জারির সমকক্ষ [৫]! আর সর্বাধুনিক রেটাট্রুটাইড ওষুধে GIP ও GLP-1 এর সাথে গ্লুকাগন রিসেপ্টরকেও যুক্ত করা হয়েছে, যা যকৃতের ক্যালোরি পোড়ানোর গতি বহুগুণ বাড়িয়ে ক্লিনিক্যাল ট্রায়ালে ২৪% পর্যন্ত ওজন হ্রাস করেছে [৫]।'
            ),
            l(
              'In clinical practice, managing patients on incretin pharmacotherapy requires comprehensive Medical Nutrition Therapy (MNT) [4, 5]. Due to profound appetite suppression, patients frequently experience precipitous drops in spontaneous protein intake, placing them at acute risk for accelerated loss of skeletal muscle mass (sarcopenic weight loss) [2, 5]. Clinical dietitians must aggressively protect lean mass by prescribing 1.5 to 2.0 grams of high-quality protein per kilogram of ideal body weight daily, coupled with mandatory progressive resistance exercise [2, 5]. Furthermore, dietary counseling must emphasize small, frequent, nutrient-dense meals and adequate hydration to mitigate common gastrointestinal side effects (nausea, vomiting, delayed gastric emptying, constipation) and ensure durable, healthspan-extending body composition optimization [4, 5].',
              'ক্লিনিক্যাল ক্ষেত্রে এই ওষুধগুলো ব্যবহারের সময় সঠিক পুষ্টি ব্যবস্থাপনা অপরিহার্য [৪, ৫]। তীব্র ক্ষুধা কমে যাওয়ার কারণে রোগীরা অনেক সময় পর্যাপ্ত প্রোটিন খাওয়া বন্ধ করে দেয়, যার ফলে চর্বির সাথে সাথে তাদের মূল্যবান কঙ্কাল পেশি মারাত্মকভাবে ক্ষয়প্রাপ্ত হতে পারে (সারকোপেনিয়া) [২, ৫]। এই পেশিক্ষয় রোধে ক্লিনিক্যাল ডায়েটিশিয়ানদের অবশ্যই রোগীর আদর্শ ওজনের প্রতি কেজিতে দৈনিক ১.৫ থেকে ২.০ গ্রাম উন্নতমানের প্রোটিন নিশ্চিত করতে হয় এবং নিয়মিত রেজিস্ট্যান্স ব্যায়াম বাধ্যতামূলক করতে হয় [২, ৫]। তদুপরি বমি বমি ভাব বা কোষ্ঠকাঠিন্যের মতো পার্শ্বপ্রতিক্রিয়া এড়াতে রোগীকে অল্প অল্প করে পুষ্টিকর খাবার খাওয়া এবং প্রচুর পানি পানের সুনির্দিষ্ট পরামর্শ দেওয়া আবশ্যক [৪, ৫]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Summary & Clinical Pearls', 'একাডেমিক সারাংশ ও ক্লিনিক্যাল মুক্তা'),
          paragraphs: [
            l(
              'Energy homeostasis is orchestrated by the hypothalamic arcuate nucleus, which functions as a coordinated metabolic toggle switch integrating orexigenic (NPY/AgRP) and anorexigenic (POMC/alpha-MSH acting on MC4R) circuits with dorsal vagal complex hindbrain inputs [1]. Loss-of-function mutations in the leptin-melanocortin axis represent the primary genetic driver of severe early-onset monogenic human obesity [1, 4].',
              'দেহের শক্তি ভারসাম্য মূলত হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াস দ্বারা পরিচালিত হয়, যা ক্ষুধা উদ্দীপক (NPY/AgRP) এবং ক্ষুধা নিবারক (POMC/alpha-MSH যা MC4R-এ যুক্ত হয়) সার্কিটের মাধ্যমে পশ্চাৎমস্তিষ্কের সংকেতকে সমন্বিত করে [১]। মেলানোকর্টিন পথের জিনগত ত্রুটি মানবদেহের মারাত্মক শৈশব স্থূলতার অন্যতম প্রধান কারণ [১, ৪]।'
            ),
            l(
              'Peripheral metabolic status is relayed by distinct peptide systems: pre-prandial gastric ghrelin requires stereospecific octanoylation by GOAT to engage GHSR1a receptors and stimulate feeding, while adipose-derived leptin binds LepRb to drive JAK2-STAT3 transcriptional activation [1, 3]. In common obesity, central leptin resistance arises from chronic overactivation inducing intracellular SOCS3 and PTP1B inhibitors, blinding the brain to peripheral adiposity [1, 4].',
              'প্রান্তীয় সংকেতগুলো সুনির্দিষ্ট পেপটাইড দ্বারা পরিবাহিত হয়: আহারের আগে পাকস্থলীর ঘ্রেলিন GOAT এনজাইম দ্বারা পরিবর্তিত হয়ে GHSR1a-এর মাধ্যমে ক্ষুধা বাড়ায়, আর চর্বি কোষের লেপটিন JAK2-STAT3 পথের মাধ্যমে তৃপ্তি আনে [১, ৩]। সাধারণ স্থূলতায় অতিরিক্ত লেপটিনের কারণে কোষে SOCS3 ও PTP1B বেড়ে গিয়ে লেপটিন রেজিস্ট্যান্স সৃষ্টি করে, যার ফলে মস্তিষ্ক শরীরের চর্বির প্রাচুর্য দেখতে পায় না [১, ৪]।'
            ),
            l(
              'Acute postprandial satiety is mediated by duodenal CCK acting on vagal sensory afferents and distal enteroendocrine L-cell co-secretion of GLP-1 and PYY, which trigger the ileal brake to delay gastric emptying and induce central satiety [2, 3]. Endogenous GLP-1 is rapidly degraded within 2 minutes by DPP-4, establishing the foundation for synthetic DPP-4-resistant analogues (semaglutide) and multi-receptor co-agonists (tirzepatide) that produce transformative clinical weight loss [2, 5].',
              'খাবার সমাপ্তির তাত্ক্ষণিক তৃপ্তি নিশ্চিত করে অন্ত্রের CCK এবং L-কোষের GLP-1 ও PYY হরমোন, যা "ইলিয়াল ব্রেক" চালু করে পাকস্থলী খালি হওয়ার গতি ধীর করে [২, ৩]। প্রাকৃতিক GLP-1 রক্তে DPP-4 এনজাইম দ্বারা মাত্র দুই মিনিটে ধ্বংস হয়ে যায়; এই দুর্বলতা কাটিয়ে আধুনিক ফার্মাকোলজিতে তৈরি হয়েছে সেমাগ্লুটাইড ও তিরজেপাটাইডের মতো দীর্ঘস্থায়ী ওষুধ যা ক্লিনিক্যাল চিকিৎসায় বৈপ্লবিক সাফল্য এনেছে [২, ৫]।'
            ),
            l(
              'Hedonic feeding driven by mesolimbic dopamine release in the nucleus accumbens can completely override homeostatic hypothalamic fullness signals, leading to striatal D2 receptor downregulation and hedonic allostasis in modern obesogenic food environments [4, 6]. Clinical management requires combining volumetric high-protein (1.5–2.0 g/kg) whole-food nutrition with resistance exercise and judicious pharmacotherapy to optimize long-term cardiometabolic health [2, 4, 5].',
              'মস্তিষ্কের ডোপামিন পুরষ্কার কেন্দ্র পেট ভরার প্রাকৃতিক সংকেতকে অগ্রাহ্য করতে পারে, যার ফলে আধুনিক অস্বাস্থ্যকর খাবারের জগতে ডোপামিন রিসেপ্টর কমে গিয়ে মারাত্মক আসক্তি তৈরি হয় [৪, ৬]। কার্যকর ক্লিনিক্যাল ব্যবস্থাপনায় উচ্চ প্রোটিনযুক্ত (১.৫–২.০ গ্রাম/কেজি) আঁশসমৃদ্ধ খাবার, নিয়মিত রেজিস্ট্যান্স ব্যায়াম এবং প্রয়োজনে আধুনিক ওষুধের সমন্বয়েই দীর্ঘমেয়াদী হৃদরোগ ও ডায়াবেটিসের ঝুঁকি দূর করা সম্ভব [২, ৪, ৫]।'
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
          heading: l('Single-Cell Transcriptomics & Functional Connectomics of Feeding Circuits', 'ক্ষুধা সার্কিটের একক-কোষ ট্রান্সক্রিপ্টোমিক্স ও ফাংশনাল কানেক্টোমিক্স'),
          paragraphs: [
            l(
              'Recent breakthroughs in high-throughput single-cell RNA sequencing (scRNA-seq) and spatial transcriptomics have fundamentally dismantled the classical, oversimplified binary model of hypothalamic feeding regulation [1]. Unbiased profiling of the murine and human arcuate nucleus reveals that "POMC neurons" and "AgRP neurons" do not represent homogeneous neurochemical pools; rather, they comprise at least five transcriptionally and functionally discrete POMC subclusters and multiple distinct AgRP/NPY subtypes characterized by unique combinatorial co-expression of neurotransmitter transporters, GPCRs, and ion channels [1].',
              'হাই-থ্রুপুট সিঙ্গেল-সেল আরএনএ সিকোয়েন্সিং (scRNA-seq) এবং স্প্যাশিয়াল ট্রান্সক্রিপ্টোমিক্সের সর্বাধুনিক গবেষণা হাইপোথ্যালামাসের ক্ষুধা নিয়ন্ত্রণের পুরোনো সরল দ্বিমুখী ধারণাকে সম্পূর্ণরূপে বদলে দিয়েছে [১]। মানুষ ও ইঁদুরের আর্কুয়েট নিউক্লিয়াসের গভীর বিশ্লেষণে দেখা গেছে যে তথাকথিত "POMC নিউরন" এবং "AgRP নিউরন" কোনো একক সমজাতীয় কোষের দল নয়; বরং POMC নিউরন অন্তত পাঁচটি স্বতন্ত্র উপদলে বিভক্ত এবং AgRP নিউরনও একাধিক উপদলে বিভক্ত, যাদের প্রত্যেকের রিসেপ্টর, আয়ন চ্যানেল ও সংকেত ব্যবস্থা সম্পূর্ণ আলাদা [১]।'
            ),
            l(
              'Functional interrogation using in vivo optogenetics and chemogenetics (Designer Receptors Exclusively Activated by Designer Drugs, DREADDs) has delineated the millisecond-scale temporal dynamics of these feeding circuits [1]. Channelrhodopsin-2 (ChR2)-mediated photostimulation of AgRP neurons in sated, fully fed mice induces voracious, ravenous feeding within seconds, driving animals to consume massive quantities of food and even overcome conditioned fear or noxious barriers to obtain calories [1]. Conversely, acute optogenetic silencing of AgRP neurons during fasting completely aborts food consumption, demonstrating that AgRP activity represents an obligatory, sufficient drive for acute energetic procurement [1].',
              'জীবন্ত মস্তিষ্কে অপটোজেনেটিক্স এবং কেমোজেনেটিক্স (DREADDs) প্রযুক্তির মাধ্যমে এই ক্ষুধা সার্কিটের মিলিসেকেন্ড পর্যায়ের গতিপ্রকৃতি নিখুঁতভাবে চিহ্নিত করা গেছে [১]। পেট ভরা থাকা অবস্থাতেও অপটোজেনেটিক আলোর সাহায্যে AgRP নিউরনকে উত্তেজিত করলে ইঁদুর কয়েক সেকেন্ডের মধ্যে তীব্র ক্ষিপ্ততার সাথে খাবার গিলতে শুরু করে এবং তীব্র বিদ্যুৎ বা ভয়ের বাধা পেরিয়ে খাবারের দিকে ছুটে যায় [১]। বিপরীতভাবে ক্ষুধার্ত অবস্থায় এই AgRP নিউরনকে আলো দিয়ে স্তব্ধ করে দিলে প্রাণী তাৎক্ষণিকভাবে খাবার খাওয়া সম্পূর্ণ বন্ধ করে দেয়, যা প্রমাণ করে যে ক্ষুধা সৃষ্টির জন্য এই নিউরনগুলোর সক্রিয়তা কতখানি চূড়ান্ত ও অপরিহার্য [১]।'
            ),
            l(
              'Downstream functional connectomics reveals that AgRP neurons do not project uniformly across the brain; rather, individual sub-populations project topographically to distinct second-order targets to coordinate different facets of feeding behavior [1]. Projections to the paraventricular nucleus of the hypothalamus (PVN) suppress anorexigenic Single-Minded 1 (SIM1) and MC4R neurons to permit food consumption, projections to the lateral hypothalamic area (LHA) stimulate motor foraging programs, and projections to the bed nucleus of the stria terminalis (BNST) and ventral tegmental area (VTA) suppress anxiety and heighten the incentive salience of food cues [1, 6].',
              'অ্যাক্সনের গতিপথ বিশ্লেষণে দেখা গেছে যে AgRP নিউরনগুলো মস্তিষ্কের সব জায়গায় একভাবে যায় না; বরং এর বিভিন্ন শাখা মস্তিষ্কের সুনির্দিষ্ট কেন্দ্রে গিয়ে খাবারের ভিন্ন ভিন্ন আচরণ পরিচালনা করে [১]। প্যারাভেন্ট্রিকুলার নিউক্লিয়াসে (PVN) গিয়ে এরা তৃপ্তির সুইচ বন্ধ করে দেয়, ল্যাটারাল হাইপোথ্যালামাসে গিয়ে খাবার খোঁজার শারীরিক দৌড়ঝাঁপ শুরু করায়, আর মস্তিষ্কের স্ট্রিয়া টার্মিনালিস (BNST) ও VTA কেন্দ্রে গিয়ে খাবার খোঁজার উদ্বেগ দূর করে খাবারের প্রতি অদম্য আকর্ষণ সৃষ্টি করে [১, ৬]।'
            ),
            l(
              'Furthermore, structural biology has elucidated critical endogenous allosteric modulators of the melanocortin receptor complex [1]. Melanocortin 2 Receptor Accessory Protein 2 (MRAP2), a single-transmembrane domain chaperone heavily expressed in POMC and MC4R neurons, forms stable heterodimers with MC4R at the plasma membrane [1]. MRAP2 enhances MC4R cell-surface trafficking, increases alpha-MSH binding sensitivity, and selectively potentiates Gs-protein signaling over arrestin recruitment; loss-of-function variants in human MRAP2 disrupt this allosteric tuning, manifesting as clinically severe, early-onset monogenic obesity [1].',
              'তদুপরি আণবিক গবেষণায় মেলানোকর্টিন রিসেপ্টরের একটি অত্যন্ত গুরুত্বপূর্ণ সহায়ক প্রোটিনের ভূমিকা স্পষ্ট হয়েছে যাকে MRAP2 বলা হয় [১]। MRAP2 প্রোটিন কোষপর্দায় MC4R রিসেপ্টরের সাথে যুক্ত হয়ে অবস্থান করে [১]। এটি MC4R-কে কোষপর্দায় সঠিকভাবে স্থাপন করতে সাহায্য করে, আলফা-MSH-এর প্রতি রিসেপ্টরের সংবেদনশীলতা বহুগুণ বৃদ্ধি করে এবং সংকেত প্রবাহকে মজবুত রাখে; মানুষের জিনে এই MRAP2 প্রোটিনে কোনো ত্রুটি থাকলে শৈশব থেকেই মারাত্মক স্থূলতা দেখা দেয় [১]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Cryo-EM Architecture & Structural Pharmacology of Ghrelin and Incretin Receptors', 'ঘ্রেলিন ও ইনক্রিটিন রিসেপ্টরের Cryo-EM কাঠামো ও স্ট্রাকচারাল ফার্মাকোলজি'),
          paragraphs: [
            l(
              'High-resolution cryogenic electron microscopy (cryo-EM) has unveiled the atomic-resolution structural mechanics of peptide hormone recognition across class A and class B G-protein-coupled receptors governing human appetite [3, 5]. In the case of the ghrelin receptor (GHSR1a, a class A GPCR), cryo-EM structures of the active-state receptor complexed with octanoylated ghrelin and heterotrimeric Gq protein have definitively resolved the longstanding mystery of ghrelin unique lipid-sensing pocket [3].',
              'ক্রায়ো-ইলেকট্রন মাইক্রোস্কোপির (cryo-EM) সর্বাধুনিক অগ্রগতি ক্ষুধা নিয়ন্ত্রণকারী জিপিসিআর (GPCR) রিসেপ্টরগুলোর পরমাণু পর্যায়ের ত্রিমাত্রিক কাঠামো উন্মোচন করেছে [৩, ৫]। ঘ্রেলিন রিসেপ্টরের (GHSR1a) ক্ষেত্রে সক্রিয় অবস্থায় অক্টানয়লেটেড ঘ্রেলিন এবং Gq প্রোটিনের সাথে এর যুক্ত থাকার আণবিক কাঠামো বিস্তারিত জানা গেছে, যা ঘ্রেলিনের ফ্যাটি অ্যাসিড লেজ কীভাবে রিসেপ্টরকে অন করে তার রহস্য সমাধান করেছে [৩]।'
            ),
            l(
              'The cryo-EM reconstruction reveals that the transmembrane bundle of GHSR1a features an unusually deep, hydrophobic cavity formed between transmembrane helices TM3, TM4, TM5, and extracellular loop 2 (ECL2) [3]. The eight-carbon octanoyl tail attached to Serine-3 of ghrelin inserts deeply into this hydrophobic pocket, establishing extensive van der Waals interactions with Phe119, Ile178, and Val204 [3]. This hydrophobic insertion acts as a molecular wedge that displaces the cytoplasmic end of TM6 outward by approximately 14 Angstroms, opening the intracellular cavity required for the C-terminal alpha-5 helix of the Gq alpha-subunit to dock and initiate downstream inositol phosphate signaling [3].',
              'ক্রায়ো-ইলেকট্রন বিশ্লেষণে দেখা গেছে যে GHSR1a রিসেপ্টরের ট্রান্সমেমব্রেন হেলিক্সের ভেতরে একটি অত্যন্ত গভীর হাইড্রোফোবিক পকেট থাকে [৩]। ঘ্রেলিনের তিন নম্বর সেরিনে লাগানো আট-কার্বনের ফ্যাটি অ্যাসিডের লেজটি এই গভীর পকেটে নিখুঁতভাবে ঢুকে গিয়ে ভেতরের অ্যামিনো অ্যাসিডগুলোর সাথে শক্তিশালী ভ্যান ডার ওয়ালস বন্ধনে আবদ্ধ হয় [৩]। এই চর্বির লেজটি একটি আণবিক কিলক বা কুড়ালের মতো কাজ করে রিসেপ্টরের ভেতরের অংশকে ১৪ অ্যাংস্ট্রম পর্যন্ত ফাঁক করে দেয়, যার ফলে কোষের ভেতরের Gq প্রোটিন সেখানে যুক্ত হয়ে ক্ষুধার চূড়ান্ত সংকেত ছড়িয়ে দিতে পারে [৩]।'
            ),
            l(
              'Simultaneously, cryo-EM has transformed structural pharmacology for class B1 incretin receptors, specifically the GLP-1 receptor (GLP-1R) and the GIP receptor (GIPR) [2, 5]. Class B1 receptors utilize a classic "two-domain" peptide-binding mechanism: the large extracellular N-terminal domain (ECD) captures the C-terminal alpha-helix of the peptide ligand, orienting the flexible N-terminus of the peptide to insert deep into the transmembrane domain (TMD) core [5]. Residues His7 and Gly10 of GLP-1 make critical hydrogen bonds with Gln234 and Arg190 in the transmembrane core, inducing TM6 unwinding and recruiting heterotrimeric Gs protein to stimulate adenylate cyclase [5].',
              'একই সাথে cryo-EM ক্লাস বি১ ইনক্রিটিন রিসেপ্টরগুলোর (GLP-1R ও GIPR) ওষুধ তৈরির ধারণায় বিশাল পরিবর্তন এনেছে [২, ৫]। এই রিসেপ্টরগুলো একটি "দ্বি-ডোমেন" পদ্ধতিতে কাজ করে: রিসেপ্টরের বাইরের অংশটি প্রথমে হরমোনের পেছনের অংশকে শক্ত করে ধরে, এবং তারপর হরমোনের সামনের মাথাটিকে রিসেপ্টরের ভেতরের গভীরে প্রবেশ করিয়ে দেয় [৫]। GLP-1 এর সামনের His7 অ্যামিনো অ্যাসিড রিসেপ্টরের ভেতরের অংশে যুক্ত হয়ে রিসেপ্টরকে মোচড় দেয় এবং Gs প্রোটিন সক্রিয় করে কোষে cAMP তৈরি করে [৫]।'
            ),
            l(
              'These structural insights have catalyzed the rational design of non-peptide small-molecule GLP-1R agonists, such as danuglipron and orforglipron [5]. Orforglipron binds not to the classical peptide orthosteric pocket, but rather to an allosteric pocket situated between TM1, TM2, and TM7 on the lipid-facing surface of the receptor [5]. Small-molecule binding mimics the conformational rearrangements induced by full peptide ligands, achieving biased signaling that selectively promotes Gs-cAMP production while minimizing beta-arrestin-mediated receptor endocytosis, opening the frontier for once-daily oral incretin pharmacotherapies [5].',
              'এই পারমাণবিক কাঠামোর জ্ঞান বিজ্ঞানীদের ইনজেকশনের বদলে খাবার উপযোগী ছোট অণুর মুখে খাওয়ার GLP-1 ওষুধ (যেমন অরফরগ্লিপ্রন) আবিষ্কারে সাহায্য করেছে [৫]। অরফরগ্লিপ্রন সাধারণ পেপটাইডের জায়গায় না বসে রিসেপ্টরের পাশের একটি বিশেষ স্থানে যুক্ত হয় [৫]। এর ফলে পেপটাইড ইনজেকশনের মতোই রিসেপ্টরটি সক্রিয় হয় এবং বিটা-অ্যারেস্টিন দ্বারা রিসেপ্টরটি নষ্ট না হয়ে দীর্ঘক্ষণ কার্যকর থাকে, যা প্রতিদিন একবার মুখে খাওয়ার আধুনিক ইনক্রিটিন ওষুধের নতুন দ্বার উন্মোচন করেছে [৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Vagal Sensorimotor Neurocircuitry & Hindbrain-Forebrain Gating', 'ভেগাস সেন্সরি-মোটর স্নায়ুপথ ও পশ্চাৎমস্তিষ্ক-অগ্রমস্তিষ্কের সংকেত সমন্বয়'),
          paragraphs: [
            l(
              'The sensory interface between the gastrointestinal tract and the central nervous system is mediated primarily by the vagus nerve (cranial nerve X), whose pseudo-unipolar sensory cell bodies reside in the paired nodose ganglia [3, 4]. Anterograde tracing and functional electrophysiology have categorized subdiaphragmatic vagal sensory afferents into two distinct morphological and physiological classes: mucosal chemoreceptors and muscular tension mechanoreceptors [3, 4].',
              'পরিপাকতন্ত্র এবং কেন্দ্রীয় স্নায়ুতন্ত্রের মধ্যকার মূল যোগাযোগ সেতুটি হলো ভেগাস স্নায়ু (দশম করোটিক স্নায়ু), যার সংবেদনশীল স্নায়ুকোষগুলো নোডোজ গ্যাংলিয়নে অবস্থান করে [৩, ৪]। গবেষণায় দেখা গেছে যে পেটের ভেগাস স্নায়ুর সংবেদনশীল তন্তুগুলো দুটি প্রধান ভাগে বিভক্ত: একটি হলো মিউকোসার রাসায়নিক সংবেদী তন্তু (কেমোরিসেপ্টর), এবং অপরটি হলো পেশির প্রসারণ সংবেদী তন্তু (মেকানোরিসেপ্টর) [৩, ৪]।'
            ),
            l(
              'Vagal mucosal endings terminate in close anatomical proximity to enteroendocrine cells in the mucosal lamina propria, expressing high densities of CCK-1 receptors, GLP-1 receptors, and 5-HT3 serotonin receptors to rapidly detect luminal nutrient hydrolysis [3]. In contrast, muscular vagal afferents form specialized, disc-like arborizations termed intraganglionic laminar endings (IGLEs) embedded within the myenteric plexus between the circular and longitudinal muscle layers of the gastric fundus and corpus [3, 4]. IGLEs function as ultra-sensitive mechanosensors; circumferential stretch of the gastric wall during meal distension activates mechanically gated ion channels (such as Piezo1 and Piezo2), inducing membrane depolarization and firing high-frequency trains of action potentials to the brainstem [3, 4].',
              'মিউকোসার ভেগাল তন্তুগুলো অন্ত্রের হরমোন উৎপাদনকারী কোষগুলোর ঠিক পাশেই অবস্থান করে এবং এগুলোতে প্রচুর পরিমাণে CCK-1, GLP-1 ও সেরোটোনিন রিসেপ্টর থাকে যাতে খাবার হজম হওয়া মাত্রই এরা রাসায়নিক সংকেত ধরতে পারে [৩]। অন্যদিকে পেশির তন্তুগুলো পাকস্থলীর মাংসপেশির স্তরের মাঝে বিশেষ ডিস্কের মতো জাল বিস্তার করে যাকে IGLE বলা হয় [৩, ৪]। পাকস্থলীতে খাবার ঢুকে এর দেয়াল টানটান হওয়া মাত্রই এই IGLE-এর মেকানিক্যাল সেন্সরগুলো (Piezo1 ও Piezo2 আয়ন চ্যানেল) বিদ্যুৎ প্রবাহ সৃষ্টি করে মস্তিষ্কে তীব্র সংকেত পাঠায় [৩, ৪]।'
            ),
            l(
              'Both mucosal chemical and muscular mechanical vagal afferents project centrally through the solitary tract to synapse within the Nucleus of the Solitary Tract (NTS) in the dorsal vagal complex of the caudal hindbrain [1, 4]. Vagal central terminals release L-glutamate onto second-order NTS neurons, activating ionotropic AMPA and NMDA receptors [4]. A critical subset of these second-order NTS neurons synthesize preproglucagon (yielding central GLP-1) and project directly to the adjacent lateral parabrachial nucleus (lPBN) and the hypothalamic PVN [1, 2]. Calcitonin gene-related peptide (CGRP)-expressing neurons in the outer external lateral PBN act as a definitive, non-negotiable brake on feeding; optogenetic activation of lPBN CGRP neurons instantly terminates feeding, while their ablation induces lethal hyperphagic gorging [1].',
              'রাসায়নিক ও মেকানিক্যাল উভয় ভেগাল তন্তুই পশ্চাৎমস্তিষ্কের ডোরসাল ভেগাল কমপ্লেক্সের Nucleus of the Solitary Tract (NTS) কেন্দ্রে গিয়ে শেষ হয় [১, ৪]। ভেগাস স্নায়ু সেখানে গ্লুটামেট নিউরোট্রান্সমিটার ক্ষরণ করে দ্বিতীয় সারির NTS নিউরনগুলোকে সক্রিয় করে তোলে [৪]। এই NTS নিউরনের একটি বিশেষ অংশ মস্তিষ্কের ভেতরে নিজস্ব GLP-1 তৈরি করে এবং পাশের ল্যাটারাল প্যারাব্র্যাকিয়াল নিউক্লিয়াসে (lPBN) সংকেত পাঠায় [১, ২]। lPBN-এর CGRP নিউরনগুলো খাওয়ার ওপর এক চূড়ান্ত ব্রেক হিসেবে কাজ করে; এদের সক্রিয় করলে প্রাণী মুহূর্তের মধ্যে খাওয়া বন্ধ করে দেয়, আর এদের ধ্বংস করে দিলে প্রাণী পেট ফেটে মারা যাওয়ার আগ পর্যন্ত খেতেই থাকে [১]।'
            ),
            l(
              'Crucially, this hindbrain-forebrain gating architecture is not a unidirectional feedforward path, but a dynamic, bidirectional neuroendocrine loop [1, 4]. Descending oxytocinergic and corticotropin-releasing hormone (CRH) projections originating in the hypothalamic PVN terminate directly within the NTS and dorsal motor nucleus of the vagus (DMV) [1, 4]. Under conditions of chronic stress or hyperleptinemia, PVN descending tone enhances glutamate sensitivity in the NTS, lowering the gastric distension threshold required to trigger meal termination [1, 4]. Conversely, in starvation or elevated ghrelin tone, descending inhibition desensitizes NTS neurons, allowing individuals to consume massive meal volumes before vagal satiety signals can overcome central orexigenic drive [1, 3].',
              'সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো পশ্চাৎমস্তিষ্ক ও অগ্রমস্তিষ্কের এই সমন্বয় কোনো একমুখী পথ নয়, বরং একটি গতিশীল দ্বিমুখী স্নায়বিক লুপ [১, ৪]। হাইপোথ্যালামাসের প্যারাভেন্ট্রিকুলার নিউক্লিয়াস (PVN) থেকে অক্সিটোসিন ও CRH স্নায়ুতন্তু নিচে নেমে এসে NTS কেন্দ্রের সংবেদনশীলতা নিয়ন্ত্রণ করে [১, ৪]। অতিরিক্ত লেপটিন বা চাপের সময় মস্তিষ্ক NTS কেন্দ্রকে অতি-সংবেদনশীল করে তোলে, ফলে অল্প খাবারেই পাকস্থলী ভরা মনে হয় [১, ৪]। আর উপবাস বা ঘ্রেলিনের আধিক্যের সময় মস্তিষ্ক NTS কেন্দ্রকে ভোঁতা করে রাখে, যার ফলে তীব্র ক্ষুধার সময় মানুষ পেট না ফাঁসা পর্যন্ত বিপুল পরিমাণ খাবার কোনো বাধা ছাড়াই গিলতে পারে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Epigenetics, Neuroinflammation & The Hypothalamic Gliosis Hypothesis', 'এপিজেনেটিক্স, স্নায়ুপ্রদাহ ও হাইপোথ্যালামিক গ্লায়োসিস হাইপোথিসিস'),
          paragraphs: [
            l(
              'A paradigm-shifting frontier in metabolic medicine is the discovery that common polygenic obesity is accompanied by chronic, localized neuroinflammation and structural synaptic reorganization within the hypothalamic arcuate nucleus—a phenomenon termed "hypothalamic gliosis" [1, 4]. Longitudinal preclinical imaging and human high-field magnetic resonance imaging (MRI) demonstrate that exposure to high-fat, high-sucrose diets triggers reactive microgliosis and astrogliosis within the mediobasal hypothalamus within forty-eight to seventy-two hours, occurring well before significant body weight gain or peripheral adiposity expansion manifests [1].',
              'মেটাবলিক চিকিৎসা বিজ্ঞানের সর্বাধুনিক গবেষণায় আবিষ্কৃত হয়েছে যে স্থূলতা কেবল চর্বি জমার রোগ নয়, বরং এটি হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াসে দীর্ঘস্থায়ী স্নায়ুপ্রদাহ এবং স্নায়বিক সংযোগ নষ্ট হওয়ার এক জটিল প্রক্রিয়া যাকে "হাইপোথ্যালামিক গ্লায়োসিস" বলা হয় [১, ৪]। মানুষ ও প্রাণীদের উচ্চ-ক্ষমতার এমআরআই (MRI) পরীক্ষায় দেখা গেছে যে অতিরিক্ত চর্বি ও চিনিযুক্ত খাবার খাওয়া শুরুর মাত্র ৪৮ থেকে ৭২ ঘণ্টার মধ্যেই হাইপোথ্যালামাসের রক্তনালী ও নিউরনের চারপাশে মাইক্রোগ্লিয়া ও অ্যাস্ট্রোসাইটের মারাত্মক প্রদাহজনক বিস্তার ঘটে, এমনকি শরীরে চর্বি জমার বহু আগেই এই স্নায়ুক্ষয় শুরু হয়ে যায় [১]।'
            ),
            l(
              'The molecular etiology of diet-induced hypothalamic neuroinflammation is driven by the direct cytotoxic influx of saturated fatty acids across the semi-permeable median eminence [1]. Circulating long-chain saturated fatty acids, particularly palmitic acid (C16:0), bind directly to microglial Toll-Like Receptor 4 (TLR4) complexes, recruiting adaptor proteins MyD88 and TRIF [1]. This triggers phosphorylation of the I-kappa-B kinase (IKK-beta) complex, precipitating the degradation of I-kappa-B and the nuclear translocation of nuclear factor kappa-B (NF-kappa-B) [1]. Active NF-kappa-B transcriptionally upregulates pro-inflammatory cytokines—including Tumor Necrosis Factor-alpha (TNF-alpha), Interleukin-1-beta (IL-1beta), and Interleukin-6 (IL-6)—creating a cytotoxic, inflamed microenvironment that induces marked endoplasmic reticulum (ER) stress in adjacent POMC neurons [1].',
              'এই স্নায়ুপ্রদাহের মূল কারণ হলো রক্তের সম্পৃক্ত ফ্যাটি অ্যাসিডের সরাসরি বিষক্রিয়া [১]। আধুনিক খাদ্যের অতিরিক্ত পামিটিক অ্যাসিড (C16:0) মিডিয়ান এমিনেন্সের ফাঁক গলে মস্তিষ্কে ঢুকে মাইক্রোগ্লিয়ার Toll-Like Receptor 4 (TLR4) রিসেপ্টরে আঘাত হানে [১]। এটি কোষের ভেতরে NF-kappa-B নামক ভয়াবহ প্রদাহের জিন সক্রিয় করে তোলে [১]। সক্রিয় NF-kappa-B প্রচুর পরিমাণে প্রদাহসৃষ্টিকারী সাইটোকাইন (TNF-alpha, IL-1beta) তৈরি করে যা পাশের ক্ষুধা দমনকারী POMC নিউরনগুলোর এন্ডোপ্লাজমিক রেটিকুলামে প্রচণ্ড চাপ (ER stress) সৃষ্টি করে তাদের কার্যক্ষমতা পঙ্গু করে দেয় [১]।'
            ),
            l(
              'Sustained hypothalamic gliosis leads to progressive structural synaptic remodeling and permanent neuronal damage [1]. Reactive astrocytes extend hypertrophic processes that encase POMC neuronal cell bodies and wrap around fenestrated arcuate capillaries, physically impeding circulating leptin and incretins from diffusing toward first-order metabolic sensors [1]. Prolonged ER stress and pro-inflammatory signaling downregulate brain-derived neurotrophic factor (BDNF) and activate pro-apoptotic caspase cascades, precipitating the selective loss and autophagic degeneration of anorexigenic POMC perikarya while orexigenic AgRP neurons remain resilient [1]. Consequently, the brain is left with an irreversible structural deficit in its satiety machinery [1, 4].',
              'দীর্ঘস্থায়ী স্নায়ুপ্রদাহের ফলে মস্তিষ্কের শারীরিক গঠনে স্থায়ী ক্ষতি সাধিত হয় [১]। প্রদাহগ্রস্ত অ্যাস্ট্রোসাইট কোষগুলো আকারে বড় হয়ে POMC নিউরনগুলোকে এমনভাবে ঢেকে ফেলে এবং রক্তনালীর মুখ বন্ধ করে দেয় যাতে রক্ত থেকে লেপটিন ও ইনক্রিটিন হরমোন নিউরনে পৌঁছাতে না পারে [১]। দীর্ঘদিন এই বিষাক্ত পরিবেশে থাকার কারণে ক্ষুধা নিবারক POMC নিউরনগুলো ধীরে ধীরে মারা যায় এবং শুকিয়ে যায়, অথচ ক্ষুধা বাড়ানো AgRP নিউরনগুলো ঠিকই বেঁচে থাকে [১]। এর ফলে মস্তিষ্ক স্থায়ীভাবে তার ক্ষুধা বন্ধ করার প্রাকৃতিক নিউরনগুলো হারিয়ে ফেলে [১, ৪]।'
            ),
            l(
              'Compounding this neuroarchitectural damage, diet-induced obesity alters the epigenetic landscape of hypothalamic appetite genes [1, 4]. Chronic hyperinsulinemia and lipid excess stimulate DNA methyltransferases (DNMT1, DNMT3a) to induce stable CpG island hypermethylation within the POMC promoter region, physically silencing gene transcription and blunting alpha-MSH synthesis [1]. Concurrently, histone deacetylation by sirtuins and histone deacetylases (HDACs) alters chromatin compaction around the LEPR locus, reinforcing central leptin resistance at the chromosomal level [1]. These stable epigenetic and architectural alterations explain why the brain stubbornly defends an elevated adiposity set-point, underscoring why obesity is a chronic, relapsing biological neuroendocrine disease rather than a transient failure of will [1, 4].',
              'এই স্নায়ুক্ষয়ের সাথে যুক্ত হয় এপিজেনেটিক বা জিনগত নিয়ন্ত্রণের পরিবর্তন [১, ৪]। দীর্ঘস্থায়ী অতিরিক্ত চর্বি ও ইনসুলিনের প্রভাবে বিশেষ এনজাইম (DNMT) ক্ষুধা দমনকারী POMC জিনের ওপর মিথাইল গ্রুপ বসিয়ে একে জিনগতভাবে স্তব্ধ করে দেয়, যার ফলে আলফা-MSH উৎপাদন স্থায়ীভাবে কমে যায় [১]। একই সাথে লেপটিন রিসেপ্টর জিনের ক্রোমাটিন সংকুচিত হয়ে জিনটি নিষ্ক্রিয় হয়ে পড়ে [১]। এই স্থায়ী এপিজেনেটিক ও স্নায়বিক পরিবর্তনের কারণেই ওজন কমানোর পর মস্তিষ্ক যেকোনো মূল্যে আবার পুরোনো স্থূল অবস্থায় ফিরে যেতে চায়; যা প্রমাণ করে যে স্থূলতা কোনো সাধারণ চারিত্রিক দুর্বলতা নয়, বরং এটি মস্তিষ্কের এক জটিল, দীর্ঘস্থায়ী নিউরোএন্ডোক্রিন ব্যাধি [১, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Frontier Clinical Trials: Tri-Agonists, Amylin Analogs & Weight Regain Biology', 'অগ্রবর্তী ক্লিনিক্যাল ট্রায়াল: ট্রাই-অ্যাগোনিস্ট, অ্যামাইলিন অ্যানালগ ও ওজন ফিরে আসার জীববিজ্ঞান'),
          paragraphs: [
            l(
              'The cutting-edge frontier of obesity pharmacotherapy has advanced into unimolecular multi-receptor agonism and rational combination peptide engineering [2, 5]. While single GLP-1 receptor agonists (such as semaglutide) achieve ~15% weight reduction, and dual GIP/GLP-1 agonists (tirzepatide) achieve ~21% weight loss, Phase 2 clinical trials of the triple GIP/GLP-1/Glucagon receptor agonist retatrutide have demonstrated unprecedented efficacy, producing an astonishing 24.2% mean body weight reduction at 48 weeks in adults with obesity [5].',
              'স্থূলতা চিকিৎসার সর্বাধুনিক গবেষণা এখন বহুমুখী মাল্টি-রিসেপ্টর অ্যাগোনিস্ট এবং সমন্বিত পেপটাইড থেরাপির দিকে এগিয়ে গেছে [২, ৫]। যেখানে একক GLP-1 ওষুধ (সেমাগ্লুটাইড) প্রায় ১৫% এবং ডুয়াল ওষুধ (তিরজেপাটাইড) প্রায় ২১% ওজন কমায়, সেখানে GIP, GLP-1 এবং গ্লুকাগন—এই তিন হরমোনের ত্রিমুখী অ্যাগোনিস্ট "রেটাট্রুটাইড" Phase 2 ট্রায়ালে মাত্র ৪৮ সপ্তাহে গড়ে ২৪.২% ওজন কমিয়ে চিকিৎসাজগতে সাড়া ফেলে দিয়েছে [৫]।'
            ),
            l(
              'The extraordinary potency of retatrutide stems from the synergistic orchestration of three complementary physiological pathways: GLP-1 receptor agonism suppresses appetite centrally and delays gastric emptying; GIP receptor agonism optimizes subcutaneous white fat lipid storage buffering and mitigates nausea; and glucagon receptor agonism acts directly on hepatocytes to stimulate beta-oxidation, glycogenolysis, and uncoupled mitochondrial thermogenesis, driving metabolic energy expenditure upward even under profound caloric restriction [5]. Concurrently, amylin analogues (such as cagrilintide, a long-acting dual amylin and calcitonin receptor agonist co-formulated with semaglutide as "CagriSema") target distinct hindbrain circuits in the area postrema to amplify satiety through independent neurochemical pathways, achieving ~17% weight reduction with superior gastrointestinal tolerability [5].',
              'রেটাট্রুটাইডের এই বিস্ময়কর কার্যকারিতার রহস্য হলো তিনটি শারীরবৃত্তীয় পথের যুগপৎ সমন্বয়: GLP-1 মস্তিষ্কে ক্ষুধা দমন করে ও অন্ত্রের গতি ধীর করে; GIP চর্বি কোষের বিপাক উন্নত করে ও বমি বমি ভাব কমায়; আর গ্লুকাগন সরাসরি যকৃতে গিয়ে মাইটোকন্ড্রিয়াল থার্মোজেনেসিস বৃদ্ধি করে ক্যালোরি পোড়ানোর গতি বহুগুণ বাড়িয়ে দেয়, ফলে রোগী কম খেয়েও অলস না হয়ে প্রচুর ক্যালোরি খরচ করে [৫]। একই সাথে অগ্ন্যাশয়ের অ্যামাইলিন হরমোনের দীর্ঘস্থায়ী অ্যানালগ (ক্যাগ্রিলিনটাইড) সেমাগ্লুটাইডের সাথে যুক্ত হয়ে (CagriSema) মস্তিষ্কের সম্পূর্ণ ভিন্ন পথ দিয়ে ক্ষুধা কমিয়ে চমৎকার ফলাফল দিচ্ছে [৫]।'
            ),
            l(
              'However, the discontinuation of incretin pharmacotherapy unmasks the relentless biological reality of "weight regain biology" [1, 5]. In the STEP 1 extension trial, participants who discontinued semaglutide regained two-thirds of their lost weight within one year, accompanied by the return of adverse cardiometabolic risk markers [5]. This rebound occurs because long-term dietary restriction and weight loss do not "reset" the hypothalamic set-point; on the contrary, weight loss leaves individuals in a persistent state of neuroendocrine starvation characterized by chronically suppressed circulating leptin, depressed PYY and GLP-1, elevated ghrelin, and reduced basal metabolic rate that persist for years post-weight loss [1, 4, 5].',
              'তবে এই আধুনিক ওষুধগুলো বন্ধ করে দিলে মানবদেহের আদিম "ওজন ফিরে আসার জীববিজ্ঞান" (Weight Regain Biology) ভয়াবহ রূপ নিয়ে ফিরে আসে [১, ৫]। বিখ্যাত STEP 1 এক্সটেনশন ট্রায়ালে দেখা গেছে যে রোগীরা সেমাগ্লুটাইড নেওয়া বন্ধ করার মাত্র এক বছরের মাথায় তাদের কমে যাওয়া ওজনের দুই-তৃতীয়াংশই পুনরায় ফিরে এসেছে [৫]! এটি ঘটে কারণ ওজন কমলেই মস্তিষ্কের সেট-পয়েন্ট ঠিক হয়ে যায় না; বরং ওজন কমার পর মস্তিষ্ক বহু বছর ধরে নিজেকে দুর্ভিক্ষপীড়িত মনে করে রক্তে লেপটিন, PYY ও GLP-1 কমিয়ে রাখে এবং ঘ্রেলিন বাড়িয়ে রাখে, যা ব্যক্তিকে আগের ওজনে ফিরে না যাওয়া পর্যন্ত খাওয়ার জন্য পাগল করে তোলে [১, ৪, ৫]।'
            ),
            l(
              'Consequently, modern endocrinology conceptualizes incretin pharmacotherapies not as temporary cosmetic fixes or short-term diets, but as chronic, long-term disease-modifying agents identical to antihypertensives for hypertension or statins for hypercholesterolemia [4, 5]. In clinical dietetics, the paramount challenge during pharmacological weight loss is preserving lean somatic muscle mass and preventing bone mineral loss through structured resistance training and high-protein nutrition (>=1.5 g/kg/day) [2, 5]. Long-term maintenance strategies require integrating chronic low-dose incretin pharmacotherapy, permanent dietary restructuring centered on whole foods with low caloric density, and progressive behavioral counseling to safeguard patient healthspan and metabolic longevity [1, 4, 5].',
              'এই বৈজ্ঞানিক বাস্তবতার কারণে আধুনিক এন্ডোক্রিনোলজিস্টরা এই ওষুধগুলোকে সাময়িক কোর্স নয়, বরং উচ্চ রক্তচাপ বা ডায়াবেটিসের ওষুধের মতোই দীর্ঘমেয়াদী রোগ নিয়ন্ত্রক ওষুধ হিসেবে বিবেচনা করেন [৪, ৫]। ওষুধ চলাকালীন ডায়েটিশিয়ানদের সবচেয়ে বড় চ্যালেঞ্জ হলো রোগীর কঙ্কাল পেশি ও হাড়ের ঘনত্ব রক্ষা করা, যার জন্য রেজিস্ট্যান্স ব্যায়াম এবং উচ্চ প্রোটিনযুক্ত খাবার (≥১.৫ গ্রাম/কেজি) নিশ্চিত করা জীবনরক্ষাকারী [২, ৫]। পরিশেষে স্থায়ী সুস্থতা বজায় রাখতে প্রয়োজন ন্যূনতম মাত্রার ওষুধের সাথে প্রাকৃতিক অপ্রক্রিয়াজাত খাদ্যাভ্যাস এবং নিয়মিত ব্যায়ামের এক আজীবন মেলবন্ধন [১, ৪, ৫]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Frontier Research Horizons & Precision Neuro-Nutrition', 'অগ্রবর্তী গবেষণা দিগন্ত ও প্রিসিশন নিউরো-নিউট্রিশন'),
          paragraphs: [
            l(
              'Contemporary molecular neuroscience has redefined our understanding of human energy intake: feeding behavior is the complex phenotypic output of distributed, bidirectional neural connectomes spanning the hypothalamic arcuate nucleus, the hindbrain dorsal vagal complex, the mesolimbic reward system, and the gut microbiota [1, 3, 6]. Monogenic obesity syndromes and single-cell transcriptomics confirm that appetite regulation is rooted in hardwired cellular machinery rather than subjective moral choices [1].',
              'আধুনিক আণবিক স্নায়ুবিজ্ঞান মানবদেহের খাদ্য গ্রহণের ধারণাকে নতুন রূপ দিয়েছে: মানুষের ক্ষুধা ও খাওয়ার আচরণ হলো হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াস, পশ্চাৎমস্তিষ্কের ডোরসাল ভেগাল কমপ্লেক্স, মেসোলিম্বিক পুরষ্কার কেন্দ্র এবং অন্ত্রের ব্যাকটেরিয়ার সমন্বয়ে গঠিত এক সুবিশাল স্নায়ুবিক নেটওয়ার্কের সম্মিলিত ফলাফল [১, ৩, ৬]। জিনগত গবেষণা দ্ব্যর্থহীনভাবে প্রমাণ করেছে যে ক্ষুধা নিয়ন্ত্রণ কোনো নৈতিক বা চারিত্রিক দুর্বলতা নয়, বরং এটি কঠোরভাবে জিন ও হরমোন দ্বারা নির্ধারিত একটি জৈবিক প্রক্রিয়া [১]।'
            ),
            l(
              'The global escalation of obesity and metabolic syndrome is the direct evolutionary consequence of an acute mismatch between ancient hunter-gatherer genetics—selected for efficient energy conservation, intense food reward salience, and defensive hyperphagia—and a modern industrial food environment saturated with cheap, hyper-palatable ultra-processed foods [4, 6]. Industrial food matrices bypass normal oral and gastric satiation kinetics, inducing hypothalamic neuroinflammation, microglial activation, and striatal dopamine D2 receptor downregulation [1, 6].',
              'বিশ্বজুড়ে স্থূলতা ও ডায়াবেটিসের মহামারীর মূল কারণ হলো হাজার বছরের শিকারী মানব জিনের সাথে আধুনিক প্রক্রিয়াজাত খাদ্যজগতের এক ভয়াবহ অমিল [৪, ৬]। আদিম মানুষের যে জিনটি দুর্ভিক্ষে বাঁচার জন্য বেশি খাওয়া ও চর্বি জমানোকে পুরস্কৃত করত, সেই জিনটিই আধুনিক কৃত্রিম ফাস্টফুডের যুগে মানুষের হাইপোথ্যালামাসে স্নায়ুপ্রদাহ সৃষ্টি করছে এবং ডোপামিন রিসেপ্টর কমিয়ে মানুষকে অতিরিক্ত খাওয়ার অন্ধ ফাঁদে বন্দি করছে [১, ৬]।'
            ),
            l(
              'The revolution in incretin pharmacotherapy—from long-acting GLP-1 receptor mimetics to dual GIP/GLP-1 and triple GIP/GLP-1/Glucagon agonists—demonstrates that modulating gut-brain peptide pathways can achieve unprecedented metabolic remissions, rivaling surgical interventions [2, 5]. However, the biological permanence of post-dieting neuroendocrine starvation and rapid weight regain upon drug cessation underscores that obesity is a lifelong, relapsing biological disease requiring chronic, multimodal management [1, 5].',
              'ইনক্রিটিন ওষুধের বৈপ্লবিক সাফল্য প্রমাণ করেছে যে অন্ত্র ও মস্তিষ্কের হরমোন সংকেত নিয়ন্ত্রণের মাধ্যমে অপারেশনের সমকক্ষ ওজন হ্রাস ও ডায়াবেটিসের নিরাময় সম্ভব [২, ৫]। কিন্তু ওষুধ বন্ধ করার পর শরীরের দ্রুত পুরোনো ওজনে ফিরে যাওয়ার তীব্র প্রবণতা চোখে আঙুল দিয়ে দেখিয়ে দেয় যে স্থূলতা একটি দীর্ঘমেয়াদী রোগ, যা নিয়ন্ত্রণে আজীবন সচেতন পর্যবেক্ষণ ও যত্ন প্রয়োজন [১, ৫]।'
            ),
            l(
              'The future of preventive metabolic medicine lies in "Precision Neuro-Nutrition"—integrating genomic profiling of appetite loci, gut microbiome bile acid metabolomics, continuous glucose and interstitial metabolic monitoring, and individualized volumetric dietary programming [1, 3, 4]. By designing whole-food diets rich in intact proteins and viscous fibers that maximize endogenous incretin and vagal signaling, clinicians and nutritionists can empower patients to achieve lifelong metabolic resilience and vitality [2, 3, 4].',
              'প্রতিরোধমূলক চিকিৎসার ভবিষ্যৎ লুকিয়ে আছে "প্রিসিশন নিউরো-নিউট্রিশন"-এর মধ্যে—যেখানে ব্যক্তির জিনের প্রোফাইল, অন্ত্রের ব্যাকটেরিয়ার স্বাস্থ্য এবং রক্তে গ্লুকোজের গতিপ্রকৃতি পর্যবেক্ষণ করে সম্পূর্ণ ব্যক্তিকেন্দ্রিক খাদ্য তালিকা তৈরি করা হবে [১, ৩, ৪]। প্রচুর প্রাকৃতিক প্রোটিন ও আঁশযুক্ত খাবারের মাধ্যমে অন্ত্রের প্রাকৃতিক হরমোনগুলোকে সচল রেখে মানুষ কোনো জটিল ওষুধ ছাড়াই আজীবন সুস্বাস্থ্য ও পূর্ণ কর্মক্ষমতা বজায় রাখতে সক্ষম হবে [২, ৩, ৪]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential mechanistic flowchart tracing the neuroendocrine regulation of appetite: pre-prandial gastric ghrelin octanoylation by GOAT and activation of orexigenic NPY/AgRP neurons versus post-prandial leptin, GLP-1, PYY, and CCK activation of anorexigenic POMC/alpha-MSH neurons at the hypothalamic arcuate nucleus and hindbrain solitary tract nucleus.',
      'ক্ষুধা ও তৃপ্তির ধারাবাহিক নিউরোএন্ডোক্রিন প্রবাহচিত্র: আহারের পূর্বে পাকস্থলীর GOAT এনজাইম দ্বারা ঘ্রেলিনের অক্টানয়লেশন এবং NPY/AgRP নিউরন সক্রিয়করণ বনাম আহারের পর লেপটিন, GLP-1, PYY ও CCK দ্বারা হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াসে POMC/আলফা-MSH ক্ষুধা নিবারক সার্কিট এবং পশ্চাৎমস্তিষ্কের NTS কেন্দ্রে আহার সমাপ্তির সংকেত প্রেরণের প্রক্রিয়া।'
    ),
    steps: [
      l(
        'Step 1: During fasting, gastric mucosal P/D1 cells octanoylate proghrelin at Serine-3 via Ghrelin O-Acyltransferase (GOAT); circulating acyl-ghrelin crosses the semi-permeable median eminence to bind GHSR1a receptors on hypothalamic NPY/AgRP neurons, stimulating orexigenic feeding drive.',
        'ধাপ ১: উপবাসের সময় পাকস্থলীর P/D1 কোষ GOAT এনজাইম দ্বারা ঘ্রেলিনের ৩ নম্বর সেরিনে অক্টানয়লেশন সম্পন্ন করে; রক্তবাহিত ঘ্রেলিন মিডিয়ান এমিনেন্স পেরিয়ে মস্তিষ্কের NPY/AgRP নিউরনের GHSR1a রিসেপ্টরে যুক্ত হয়ে তীব্র ক্ষুধার সৃষ্টি করে।'
      ),
      l(
        'Step 2: Meal ingestion introduces nutrients into the stomach, triggering physical wall stretch detected by intraganglionic laminar endings (IGLEs), while duodenal I-cells secrete Cholecystokinin (CCK-8) in response to long-chain fatty acids and peptides, activating CCK-1 receptors on sensory vagal afferents.',
        'ধাপ ২: খাদ্য গ্রহণের ফলে পাকস্থলীর দেয়াল প্রসারিত হয়ে IGLE মেকানোরিসেপ্টরকে সক্রিয় করে এবং ডিওডেনামের I-কোষ থেকে চর্বি ও প্রোটিনের সংস্পর্শে CCK নিঃসৃত হয়ে ভেগাস স্নায়ুর CCK-1 রিসেপ্টরের মাধ্যমে পশ্চাৎমস্তিষ্কে সংকেত পাঠায়।'
      ),
      l(
        'Step 3: In the distal ileum and colon, enteroendocrine L-cells secrete Glucagon-Like Peptide-1 (GLP-1) and Peptide YY (PYY3-36) upon nutrient arrival, triggering the ileal brake to delay gastric emptying and entering the area postrema to stimulate hindbrain Nucleus Tractus Solitarius (NTS) satiety centers.',
        'ধাপ ৩: অন্ত্রের শেষ প্রান্তে খাদ্য পৌঁছালে L-কোষ থেকে GLP-1 ও PYY নিঃসৃত হয়ে "ইলিয়াল ব্রেক" চালু করে পাকস্থলী খালি হওয়ার গতি ধীর করে এবং পশ্চাৎমস্তিষ্কের NTS কেন্দ্রে পৌঁছে দীর্ঘস্থায়ী তৃপ্তির সংকেত নিশ্চিত করে।'
      ),
      l(
        'Step 4: Adipose-derived leptin binds LepRb receptors on hypothalamic arcuate POMC neurons, activating the JAK2-STAT3 transcriptional cascade to increase alpha-MSH synthesis. Secreted alpha-MSH binds Melanocortin-4 Receptors (MC4R) in the paraventricular nucleus, suppressing appetite and terminating feeding.',
        'ধাপ ৪: চর্বি কোষের লেপটিন হাইপোথ্যালামাসের POMC নিউরনের LepRb রিসেপ্টরে যুক্ত হয়ে JAK2-STAT3 পথের মাধ্যমে আলফা-MSH তৈরি বাড়ায়। আলফা-MSH প্যারাভেন্ট্রিকুলার নিউক্লিয়াসের MC4R রিসেপ্টরে যুক্ত হয়ে ক্ষুধা সম্পূর্ণ বন্ধ করে আহার সমাপ্ত করে।'
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
