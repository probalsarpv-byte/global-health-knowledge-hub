import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const carbohydrateQualityRefs = [
  {
    id: 'jenkins-modern-nutrition-carbs',
    authors: 'David J. A. Jenkins, Cyril W. C. Kendall, Livia S. A. Augustin',
    title: 'Modern Nutrition in Health and Disease, 11th edition, Chapter 3: Carbohydrates, Dietary Fiber, and Resistant Starch',
    organization: 'Wolters Kluwer Health / Lippincott Williams & Wilkins',
    year: 2014,
    url: 'https://shop.lww.com/Modern-Nutrition-in-Health-and-Disease/p/9781605474618',
  },
  {
    id: 'atkinson-ajcn-gi-tables',
    authors: 'Fiona S. Atkinson, Jennie C. Brand-Miller, Kaye Foster-Powell, Anette E. Buyken, Janina Goletzke',
    title: 'International tables of glycemic index and glycemic load values 2021: a systematic review',
    organization: 'The American Journal of Clinical Nutrition',
    year: 2021,
    url: 'https://doi.org/10.1093/ajcn/nqaa350',
  },
  {
    id: 'krause-nutrition-care-carbs',
    authors: 'Janice L. Raymond, Kelly Morrow',
    title: "Krause and Mahan's Food & the Nutrition Care Process, 15th edition, Chapter 32: Medical Nutrition Therapy for Diabetes Mellitus",
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/krause-and-mahans-food-and-the-nutrition-care-process/raymond/978-0-323-63655-1',
  },
  {
    id: 'reynolds-lancet-carb-quality',
    authors: 'Andrew Reynolds, Jim Mann, John Cummings, Nicola Winter, Evelyn Mete, Lisa Te Morenga',
    title: 'Carbohydrate quality and human health: a series of systematic reviews and meta-analyses',
    organization: 'The Lancet',
    year: 2019,
    url: 'https://doi.org/10.1016/S0140-6736(18)31809-9',
  },
]

export const nutrition03CarbohydrateQualityLesson: LessonTopic = {
  id: 'topic.nutrition.carbohydrate-quality-gi-gl',
  slug: 'carbohydrate-quality-gi-gl',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '03 · Carbohydrate Quality: Glycemic Index, Glycemic Load & Resistant Starch',
    '০৩ · কার্বোহাইড্রেটের গুণমান: গ্লাইসেমিক ইনডেক্স, গ্লাইসেমিক লোড ও প্রতিরোধী শ্বেতসার'
  ),
  summary: l(
    'Evaluating dietary carbohydrates beyond simple gram totals: starch amylose/amylopectin architecture, standardized Glycemic Index (GI) and Glycemic Load (GL) testing, types 1–4 resistant starches, and postprandial insulinemia.',
    'শুধু মোট গ্রাম পরিমাণের বাইরে খাদ্যের শর্করার মান মূল্যায়ন: শ্বেতসারের অ্যামাইলোজ/অ্যামাইলোপেকটিন গঠন, প্রমিত গ্লাইসেমিক ইনডেক্স (GI) ও গ্লাইসেমিক লোড (GL) পরিমাপ, ধরন ১–৪ প্রতিরোধী শ্বেতসার এবং খাবার-পরবর্তী ইনসুলিন প্রতিক্রিয়া।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Distinguish the enzymatic susceptibility of linear alpha-1,4-linked amylose from branched alpha-1,6-linked amylopectin and correlate starch geometry with digestion rate.',
      'সরল আলফা-১,৪ অ্যামাইলোজ এবং শাখাযুক্ত আলফা-১,৬ অ্যামাইলোপেকটিনের এনজাইমীয় সংবেদনশীলতার তুলনা করা এবং শ্বেতসারের গঠনের সাথে পরিপাকের গতির সম্পর্ক ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Calculate and differentiate Glycemic Index (GI) and Glycemic Load (GL), interpreting their physiological relevance in postprandial glycemic excursions and beta-cell workload.',
      'গ্লাইসেমিক ইনডেক্স (GI) ও গ্লাইসেমিক লোড (GL) গণনা ও পার্থক্য করা এবং খাবার-পরবর্তী রক্তের গ্লুকোজ বৃদ্ধি ও অগ্ন্যাশয়ের বিটা-কোষের চাপের সাথে এদের সম্পর্ক বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Categorize resistant starch types 1 through 4 (RS1–RS4), tracing their passage through the small intestine and their colonic fermentation to metabolic signaling molecules.',
      'প্রতিরোধী শ্বেতসারের ধরন ১ থেকে ৪ (RS1–RS4) শ্রেণিবদ্ধ করা এবং ক্ষুদ্রান্ত্র অতিক্রম করে বৃহদান্ত্রে এদের গাঁজন ও বিপাকীয় সংকেত উৎপাদনের পথ মূল্যায়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  references: carbohydrateQualityRefs,
  evidenceBySection: {
    introduction: ['jenkins-modern-nutrition-carbs', 'atkinson-ajcn-gi-tables'],
    structure: ['jenkins-modern-nutrition-carbs', 'reynolds-lancet-carb-quality'],
    mechanism: ['atkinson-ajcn-gi-tables', 'krause-nutrition-care-carbs'],
    integration: ['jenkins-modern-nutrition-carbs', 'reynolds-lancet-carb-quality'],
    practice: ['atkinson-ajcn-gi-tables', 'krause-nutrition-care-carbs'],
    takeaways: ['jenkins-modern-nutrition-carbs', 'atkinson-ajcn-gi-tables'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Carbohydrate Quality vs Quantity Paradigms', '১. শর্করার পরিমাণ বনাম গুণমানের ধারণা'), sectionId: 'introduction' },
      { id: 'sec-amylose', label: l('2. Starch Architecture: Amylose vs Amylopectin', '২. শ্বেতসারের রাসায়নিক গঠন: অ্যামাইলোজ বনাম অ্যামাইলোপেকটিন'), sectionId: 'structure' },
      { id: 'sec-gi-gl', label: l('3. Glycemic Index & Glycemic Load Metrics', '৩. গ্লাইসেমিক ইনডেক্স ও গ্লাইসেমিক লোডের পরিমাপক'), sectionId: 'mechanism' },
      { id: 'sec-rs', label: l('4. Resistant Starch Classes (RS1–RS4) & Colonic Delivery', '৪. প্রতিরোধী শ্বেতসারের শ্রেণিবিভাগ (RS1–RS4) ও অন্ত্রীয় পরিণতি'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Calculating Glycemic Load for Mixed Meals', '৫. মিশ্র খাবারের গ্লাইসেমিক লোড হিসাব ও বিশ্লেষণ'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Glycemic Index (GI)', 'গ্লাইসেমিক ইনডেক্স (GI)'),
        definition: l(
          'A standardized numerical scale ranking carbohydrate-containing foods based on the incremental area under the 2-hour postprandial blood glucose curve (iAUC) compared to 50 grams of pure glucose reference.',
          'খাদ্যের একটি প্রমিত সংখ্যাসূচক মান যা ৫০ গ্রাম বিশুদ্ধ গ্লুকোজ গ্রহণের ২ ঘণ্টার রক্তে গ্লুকোজ বৃদ্ধির ক্ষেত্রফলের (iAUC) সাথে সমপরিমাণ কার্বোহাইড্রেটযুক্ত খাদ্যের গ্লুকোজ বৃদ্ধির অনুপাত নির্দেশ করে।'
        ),
      },
      {
        term: l('Glycemic Load (GL)', 'গ্লাইসেমিক লোড (GL)'),
        definition: l(
          'A composite nutritional metric that incorporates both carbohydrate quality (GI) and the actual quantity of available carbohydrate in a typical dietary serving: GL = (GI x Available Carbohydrate in grams) / 100.',
          'একটি সমন্বিত পুষ্টিসূচক যা খাদ্যের গুণমান (GI) এবং পরিবেশনকৃত খাদ্যে উপস্থিত মোট ব্যবহারযোগ্য শর্করার পরিমাণ (গ্রাম) উভয়কেই আমলে নেয়: GL = (GI x শর্করার গ্রাম) / ১০০।'
        ),
      },
      {
        term: l('Resistant Starch (RS)', 'প্রতিরোধী শ্বেতসার (RS)'),
        definition: l(
          'Starch and starch degradation products that resist chemical hydrolysis by endogenous human salivary and pancreatic enzymes in the small intestine, passing into the large intestine for bacterial fermentation.',
          'শ্বেতসার ও তার রূপান্তরজাত অংশ যা ক্ষুদ্রান্ত্রে মানুষের নিজস্ব লালা ও অগ্ন্যাশয়ের এনজাইমে পরিপাক না হয়ে অক্ষত অবস্থায় বৃহদান্ত্রে পৌঁছে উপকারী ব্যাকটেরিয়ার খাদ্য হিসেবে ব্যবহৃত হয়।'
        ),
      },
      {
        term: l('Retrograded Starch (RS3)', 'রিট্রোগ্রেডেড শ্বেতসার (RS3)'),
        definition: l(
          'Resistant starch formed when cooked, gelatinized starches (such as boiled potatoes, rice, or pasta) undergo cooling, causing amylose chains to realign into dense, enzyme-resistant crystalline double helices.',
          'রান্না করা তরলীকৃত শ্বেতসার (যেমন সেদ্ধ আলু বা ভাত) ঠাণ্ডা হলে অ্যামাইলোজের শিকলগুলো পুনরায় ঘন স্ফটিকাকার দ্বিসূত্রক কাঠামো গঠন করে যা এনজাইমের পক্ষে ভাঙা অত্যন্ত কঠিন।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Comparing Watermelon vs Brown Rice: Dissecting the GI vs GL Paradox', 'তরমুজ বনাম লাল চালের ভাত: GI এবং GL-এর আপাত বৈপরীত্য বিশ্লেষণ'),
        steps: [
          l(
            'Step 1: Watermelon possesses a high Glycemic Index of 76 (due to rapidly absorbed sugars per unit of carbohydrate). However, a standard 120-gram serving contains only 6 grams of available carbohydrate and 92% water.',
            'ধাপ ১: তরমুজের গ্লাইসেমিক ইনডেক্স উচ্চ (৭৬), কারণ এর কার্বোহাইড্রেট দ্রুত রক্তে মেশে। কিন্তু ১২০ গ্রামের এক টুকরো তরমুজে ৯২% পানি থাকে এবং শর্করা থাকে মাত্র ৬ গ্রাম।'
          ),
          l(
            'Step 2: Calculate Watermelon GL: (76 x 6) / 100 = 4.56 (classified as Low Glycemic Load, under 10).',
            'ধাপ ২: তরমুজের জিএল হিসাব করুন: (৭৬ x ৬) / ১০০ = ৪.৫৬ (১০-এর নিচে হওয়ায় এটি নিম্ন গ্লাইসেমিক লোড)।'
          ),
          l(
            'Step 3: Cooked brown rice has a moderate GI of 55, but a standard 150-gram cup contains 35 grams of dense available carbohydrate. Calculate Rice GL: (55 x 35) / 100 = 19.25 (High Glycemic Load, near 20).',
            'ধাপ ৩: সেদ্ধ লাল চালের ভাতের জিআই মাঝারি (৫৫), কিন্তু এক কাপ (১৫০ গ্রাম) ভাতে ৩৫ গ্রাম ঘন শর্করা থাকে। ভাতের জিএল: (৫৫ x ৩৫) / ১০০ = ১৯.২৫ (উচ্চ গ্লাইসেমিক লোড)।'
          ),
        ],
        conclusion: l(
          'Glycemic Load accurately reflects real-world clinical impact by integrating portion size with digestion velocity.',
          'গ্লাইসেমিক লোড খাবারের পরিমাণের সাথে শোষণের গতিকে সমন্বয় করে বাস্তব জীবনের ক্লিনিক্যাল প্রভাব অত্যন্ত নিখুঁতভাবে তুলে ধরে।'
        ),
      },
      {
        title: l('The Second-Meal Effect: How Resistant Starch Improves Next-Day Insulin Sensitivity', 'সেকেন্ড-মিল ইফেক্ট: প্রতিরোধী শ্বেতসার কীভাবে পরবর্তী বেলার ইনসুলিন সংবেদনশীলতা বাড়ায়'),
        steps: [
          l(
            'Step 1: An evening meal rich in RS3 (e.g., cooled cooked legumes or potatoes) delivers undigested starch to the caecum overnight.',
            'ধাপ ১: রাতের খাবারে উচ্চ RS3 গ্রহণ করলে (যেমন ঠাণ্ডা করা শিম বা সেদ্ধ আলু) অপাচ্য শ্বেতসার রাতে সিকামে পৌঁছায়।'
          ),
          l(
            'Step 2: Colonic microbiota ferment resistant starch into short-chain fatty acids, predominantly propionate and butyrate, which enter portal and systemic blood over 8 to 12 hours.',
            'ধাপ ২: অন্ত্রের ব্যাকটেরিয়ার গাঁজনে প্রোপিওনেট ও বিউটাইরেট তৈরি হয় যা পরের ৮-১২ ঘণ্টা ধরে ধীরে ধীরে রক্তে প্রবেশ করে।'
          ),
          l(
            'Step 3: Circulating propionate inhibits hepatic gluconeogenesis and circulating butyrate enhances GLP-1 secretion. When breakfast is consumed the following morning, the postprandial glucose spike is attenuated by 20% to 35%.',
            'ধাপ ৩: রক্তে সঞ্চালিত প্রোপিওনেট যকৃতে বাড়তি গ্লুকোজ উৎপাদন বন্ধ করে এবং বিউটাইরেট GLP-1 হরমোন বাড়ায়, ফলে পরের দিন সকালে নাস্তা করার পর রক্তের গ্লুকোজ বৃদ্ধি ২০-৩৫% কমে যায়।'
          ),
        ],
        conclusion: l(
          'Resistant starch exerts prolonged systemic metabolic benefits that transcend the acute meal window.',
          'প্রতিরোধী শ্বেতসার কেবল খাবার খাওয়ার সময় নয়, বরং পরবর্তী কয়েক বেলা জুড়ে দেহের বিপাকীয় কার্যকারিতায় ইতিবাচক প্রভাব বিস্তার করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does amylose digest significantly slower than amylopectin in the human gastrointestinal tract?',
          'মানব পরিপাকতন্ত্রে অ্যামাইলোজ কেন অ্যামাইলোপেকটিনের চেয়ে অনেক ধীরে পরিপাক হয়?'
        ),
        answer: l(
          'Amylose is a linear, tightly wound polymer of alpha-1,4-linked glucose units with strong internal hydrogen bonding, presenting few end-terminal substrate sites for amylase. In contrast, amylopectin has an open, highly branched structure (alpha-1,6 branch points every 24–30 residues) with thousands of accessible non-reducing ends for simultaneous multi-point enzymatic hydrolysis.',
          'অ্যামাইলোজ হলো আলফা-১,৪ বন্ধনযুক্ত একটি সরল ও অত্যন্ত ঘন কুন্ডলীকৃত শিকল যার হাইড্রোজেন বন্ধন শক্ত এবং এনজাইম আক্রমণ করার প্রান্ত কম। অন্যদিকে অ্যামাইলোপেকটিন শাখাযুক্ত হওয়ায় (প্রতি ২৪-৩০টি গ্লুকোজ পরপর আলফা-১,৬ শাখা) হাজার হাজার উন্মুক্ত প্রান্ত থাকে, ফলে একাধিক এনজাইম একসাথে কাজ করে দ্রুত ভেঙে ফেলে।'
        ),
      },
      {
        question: l(
          'What are the clinically accepted cutoff thresholds for Low, Medium, and High Glycemic Index and Glycemic Load?',
          'গ্লাইসেমিক ইনডেক্স এবং গ্লাইসেমিক লোডের নিম্ন, মাঝারি ও উচ্চ মানের স্বীকৃত ক্লিনিক্যাল সীমাগুলো কী কী?'
        ),
        answer: l(
          'Glycemic Index: Low = 55 or less; Medium = 56 to 69; High = 70 or greater. Glycemic Load: Low = 10 or less; Medium = 11 to 19; High = 20 or greater per serving.',
          'গ্লাইসেমিক ইনডেক্স: নিম্ন = ৫৫ বা কম; মাঝারি = ৫৬ থেকে ৬৯; উচ্চ = ৭০ বা বেশি। গ্লাইসেমিক লোড: নিম্ন = ১০ বা কম; মাঝারি = ১১ থেকে ১৯; উচ্চ = ২০ বা বেশি প্রতি পরিবেশনে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'carbohydrate-quality-gi-gl-landscape',
    title: l(
      'Interactive Carbohydrate Quality & Glycemic Response Hierarchy',
      'ইন্টারেক্টিভ কার্বোহাইড্রেটের গুণমান ও গ্লাইসেমিক প্রতিক্রিয়া রূপরেখা'
    ),
    description: l(
      'Inspect how polymer architecture, digestion velocity, and resistant starch crystallography govern postprandial glucose waves and pancreatic beta-cell insulin demand.',
      'শ্বেতসারের আণবিক গঠন, পরিপাকের গতি এবং প্রতিরোধী স্ফটিকায়ন কীভাবে রক্তের গ্লুকোজের তরঙ্গ এবং অগ্ন্যাশয়ের ইনসুলিন নিঃসরণের চাপ নিয়ন্ত্রণ করে তা পরীক্ষা করুন।'
    ),
    disclaimer: l(
      'In vivo glycemic waveforms vary with individual gastric emptying rates, mastication efficiency, and insulin sensitivity index.',
      'ব্যক্তিভেদে পাকস্থলী খালি হওয়ার গতি, চিবানোর গভীরতা এবং ইনসুলিন সংবেদনশীলতার পার্থক্যের কারণে রক্তে গ্লুকোজের তরঙ্গের সুনির্দিষ্ট রূপ সামান্য পরিবর্তিত হতে পারে।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'amylose-amylopectin-node',
        label: l('Starch Architecture: Amylose vs Amylopectin', 'শ্বেতসারের গঠন: অ্যামাইলোজ বনাম অ্যামাইলোপেকটিন'),
        description: l(
          'High-amylose starches form tight crystalline helices with slow enzyme penetration, whereas high-amylopectin starches yield rapid gelatinization and explosive digestion.',
          'উচ্চ অ্যামাইলোজযুক্ত শ্বেতসার ঘন স্ফটিক তৈরি করে ধীরে পরিপাক হয়, আর উচ্চ অ্যামাইলোপেকটিন শ্বেতসার দ্রুত এনজাইমে উন্মুক্ত হয়ে তীব্র গ্লুকোজ বৃদ্ধি ঘটায়।'
        ),
        details: l(
          'Normal starches contain ~20–25% amylose and 75–80% amylopectin. Legumes and resistant corn hybrids with >50% amylose yield significantly blunted postprandial glucose curves.',
          'স্বাভাবিক খাদ্যশস্যে ২০-২৫% অ্যামাইলোজ থাকে। ডালে এবং বিশেষ জাতের ভুট্টার দানায় ৫০% এর বেশি অ্যামাইলোজ থাকায় রক্তে গ্লুকোজের বৃদ্ধি অনেক মৃদু হয়।'
        ),
        sectionId: 'structure',
        color: '#059669',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'gi-waveform-node',
        label: l('Postprandial Glycemic Waveform Dynamics', 'খাবার-পরবর্তী রক্তের গ্লুকোজ তরঙ্গের গতিবিদ্যা'),
        description: l(
          'High-GI carbohydrates provoke sharp glucose spikes exceeding 8–10 mmol/L followed by reactive hypoglycemic dips; Low-GI carbohydrates produce a gentle, sustained plateau.',
          'উচ্চ-জিআই শর্করা রক্তে গ্লুকোজের তীব্র উত্থান ঘটিয়ে পরে রিঅ্যাক্টিভ হাইপোগ্লাইসেমিয়ার পতন ঘটায়; নিম্ন-জিআই শর্করা মৃদু ও দীর্ঘস্থায়ী শক্তি সরবরাহ করে।'
        ),
        details: l(
          'Rapid glucose influx triggers supra-physiological insulin secretion, driving cellular nutrient uptake so aggressively that blood glucose plummets below baseline at 2–3 hours, triggering hunger.',
          'হঠাৎ গ্লুকোজ বৃদ্ধিতে অতিরিক্ত ইনসুলিন নিঃসরণ ঘটে যা ২-৩ ঘণ্টা পর রক্তে গ্লুকোজের পতন ঘটায় এবং ক্ষুধা উদ্দীপিত করে।'
        ),
        sectionId: 'mechanism',
        color: '#10b981',
        svgCoords: { x: 25, y: 95, width: 310, height: 48 },
      },
      {
        id: 'gl-calculation-node',
        label: l('Glycemic Load: Mathematical Synthesis', 'গ্লাইসেমিক লোড: সমন্বিত গাণিতিক রূপরেখা'),
        description: l(
          'GL integrates quality and quantity: a food with high GI eaten in tiny carbohydrate portions has minimal glycemic impact, whereas large portions of moderate GI food drive high GL.',
          'জিএল খাবারের গুণমান ও পরিমাণের মেলবন্ধন: উচ্চ-জিআই খাবার কম পরিমাণে খেলে দেহের গ্লুকোজে প্রভাব কম হয়, কিন্তু মাঝারি খাবারের বড় পরিবেশন রক্তে বিরাট চাপ তৈরি করতে পারে।'
        ),
        details: l(
          'Daily Glycemic Load <80 is classified as low; >120 is classified as high. Epidemiological cohorts link high chronic GL diets to elevated risks of type 2 diabetes and coronary heart disease.',
          'দৈনিক মোট জিএল ৮০ এর নিচে থাকলে কম এবং ১২০ এর বেশি হলে উচ্চ ধরা হয়। দীর্ঘমেয়াদী উচ্চ জিএল ডায়েটের সাথে ডায়াবেটিস ও হৃদরোগের গভীর যোগসূত্র রয়েছে।'
        ),
        sectionId: 'mechanism',
        color: '#34d399',
        svgCoords: { x: 25, y: 155, width: 310, height: 48 },
      },
      {
        id: 'rs-classes-node',
        label: l('Resistant Starch Taxonomy: RS1 through RS4', 'প্রতিরোধী শ্বেতসারের শ্রেণিবিন্যাস: RS1 থেকে RS4'),
        description: l(
          'RS1: physically trapped (whole grains); RS2: raw crystalline (green bananas, raw potato); RS3: retrograded cooled starches; RS4: chemically modified ethers/esters.',
          'RS1: দানায় আবদ্ধ শ্বেতসার; RS2: কাঁচা স্ফটিকাকার (কাঁচা কলা); RS3: রান্না করে ঠাণ্ডা করা শ্বেতসার; RS4: রাসায়নিকভাবে পরিবর্তিত শ্বেতসার।'
        ),
        details: l(
          'Unlike dietary fibers that contain beta-linkages, resistant starches are composed of pure alpha-glucans that escape digestion due to tertiary physical conformation rather than chemical bond type.',
          'ফাইবার বিটা-বন্ধনযুক্ত হলেও প্রতিরোধী শ্বেতসার আলফা-গ্লুকান দিয়েই গঠিত; রাসায়নিক বন্ধন নয় বরং বাহ্যিক ভৌত গঠনের কারণেই এরা এনজাইমের হাত থেকে বেঁচে যায়।'
        ),
        sectionId: 'integration',
        color: '#6ee7b7',
        svgCoords: { x: 25, y: 215, width: 310, height: 48 },
      },
      {
        id: 'second-meal-node',
        label: l('The Second-Meal Effect & Gut Fermentation', 'সেকেন্ড-মিল ইফেক্ট ও অন্ত্রীয় গাঁজন'),
        description: l(
          'Colonic fermentation of resistant starch to short-chain fatty acids modulates hepatic gluconeogenesis and augments insulin sensitivity during subsequent feeding sessions.',
          'বৃহদান্ত্রে প্রতিরোধী শ্বেতসারের গাঁজনে উৎপন্ন শর্ট-চেইন ফ্যাটি অ্যাসিড যকৃতে গ্লুকোজ তৈরি নিয়ন্ত্রণ করে এবং পরবর্তী বেলার খাবারে ইনসুলিন সংবেদনশীলতা বজায় রাখে।'
        ),
        details: l(
          'Colonic propionate downregulates glucose-6-phosphatase in the liver, while acetate and butyrate increase GLP-1 and PYY secretion via enterocyte FFAR2/FFAR3 receptors.',
          'অন্ত্রের প্রোপিওনেট যকৃতের গ্লুকোজ উৎপাদন কমায় এবং বিউটাইরেট রিসেপ্টরের মাধ্যমে ইনক্রেটিন হরমোন নিঃসরণ বাড়ায়।'
        ),
        sectionId: 'integration',
        color: '#047857',
        svgCoords: { x: 25, y: 275, width: 310, height: 48 },
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'A multi-step diagram showing how carbohydrate complexity dictates intestinal digestion speed, portal glucose appearance, and pancreatic insulin secretion.',
      'শর্করার জটিলতা কীভাবে পরিপাকের গতি, পোর্টাল রক্তে গ্লুকোজের প্রবেশ এবং অগ্ন্যাশয়ের ইনসুলিন নিঃসরণের চাপ নির্ধারণ করে তার ধারাবাহিক রূপরেখা।'
    ),
    steps: [
      l(
        'Step 1: Rapidly digestible starch undergoes instantaneous amylolysis, producing a steep postprandial glucose spike.',
        'ধাপ ১: দ্রুত পরিপাকযোগ্য শ্বেতসার ক্ষণিকেই ভেঙে গিয়ে রক্তে গ্লুকোজের তীব্র উত্থান ঘটায়।'
      ),
      l(
        'Step 2: Slowly digestible starch releases glucose in an attenuated, prolonged curve matching peripheral tissue clearance.',
        'ধাপ ২: ধীরে পরিপাকযোগ্য শ্বেতসার থেকে দীর্ঘ সময় ধরে সহনীয় মাত্রায় গ্লুকোজ নির্গত হয় যা কোষ সহজে গ্রহণ করতে পারে।'
      ),
      l(
        'Step 3: Resistant starch escapes small-bowel hydrolysis completely and enters the large intestine.',
        'ধাপ ৩: প্রতিরোধী শ্বেতসার ক্ষুদ্রান্ত্রে একেবারেই না ভেঙে অক্ষত অবস্থায় বৃহদান্ত্রে প্রবেশ করে।'
      ),
      l(
        'Step 4: Colonic anaerobic microbes ferment resistant starch into short-chain fatty acids that improve whole-body glycemic control.',
        'ধাপ ৪: বৃহদান্ত্রের অবাত ব্যাকটেরিয়া প্রতিরোধী শ্বেতসার ভেঙে শর্ট-চেইন ফ্যাটি অ্যাসিড তৈরি করে যা সামগ্রিক ইনসুলিন দক্ষতা বৃদ্ধি করে।'
      ),
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Quality vs Quantity in Dietary Carbohydrates', 'খাদ্যের শর্করায় গুণমান বনাম পরিমাণের গুরুত্ব'),
          paragraphs: [
            l(
              'Not all carbohydrates behave the same way inside the human body. Two foods with the exact same number of total carbohydrate grams can produce drastically different effects on blood sugar, energy levels, and hunger depending on how quickly they are digested and absorbed.',
              'সব ধরনের কার্বোহাইড্রেট মানবদেহের ভেতরে একই রকম আচরণ করে না। সমান গ্রাম পরিমাণের শর্করাযুক্ত দুটি খাবার রক্তের গ্লুকোজ, দৈহিক শক্তি এবং ক্ষুধার ওপর সম্পূর্ণ ভিন্ন প্রভাব ফেলতে পারে, যা নির্ভর করে খাবারটি কত দ্রুত পরিপাক ও শোষিত হচ্ছে তার ওপর।',
            ),
            l(
              'A sugary soda or refined white bread releases glucose into the bloodstream in a sudden surge, forcing the pancreas to release high amounts of insulin. In contrast, intact whole grains, beans, and lentils release their sugars slowly and steadily over several hours.',
              'মিষ্টি কোমল পানীয় বা সাদা পাউরুটি রক্তে দ্রুত গ্লুকোজ ঢেলে দেয়, ফলে অগ্ন্যাশয়কে অতিরিক্ত ইনসুলিন ক্ষরণ করতে হয়। পক্ষান্তরে লাল চাল, গোটা শস্যদানা এবং ডাল জাতীয় খাবার ঘণ্টার পর ঘণ্টা ধরে অত্যন্ত ধীরগতিতে রক্তে শক্তি সরবরাহ করে।',
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Two Forms of Plant Starch: Amylose and Amylopectin', 'উদ্ভিজ্জ শ্বেতসারের দুই রূপ: অ্যামাইলোজ ও অ্যামাইলোপেকটিন'),
          paragraphs: [
            l(
              'Natural plant starch is a mixture of two distinct glucose chains: amylose and amylopectin. Amylose is a straight, tightly wound chain like a twisted rope, making it hard for digestive enzymes to reach inside. Amylopectin is widely branched like a tree, allowing thousands of enzymes to break it down at the same time.',
              'উদ্ভিজ্জ শ্বেতসার মূলত দুটি ভিন্ন গঠনের গ্লুকোজ শিকলের মিশ্রণ: অ্যামাইলোজ ও অ্যামাইলোপেকটিন। অ্যামাইলোজ হলো একটি সরল ও শক্তভাবে পেঁচানো দড়ির মতো শিকল, যার ভেতরে পরিপাককারী এনজাইম সহজে ঢুকতে পারে না। পক্ষান্তরে অ্যামাইলোপেকটিন গাছের ডালপালার মতো শাখাযুক্ত হওয়ায় অসংখ্য এনজাইম একসাথে কাজ করে দ্রুত ভেঙে ফেলে।',
            ),
            l(
              'Foods with higher percentages of amylose, such as basmati rice, beans, and oats, take much longer to digest, resulting in a smooth and gentle rise in blood sugar rather than an unhealthy spike.',
              'যেসব খাবারে অ্যামাইলোজের অনুপাত বেশি—যেমন বাসমতি চাল, শিম ও ওটস—সেগুলো পরিপাক হতে বেশি সময় নেয়, ফলে রক্তের গ্লুকোজে আকস্মিক লাফানোর পরিবর্তে মৃদু ও সুষম বৃদ্ধি ঘটে।',
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Understanding the Glycemic Index and Glycemic Load', 'গ্লাইসেমিক ইনডেক্স ও গ্লাইসেমিক লোডের সহজ ধারণা'),
          paragraphs: [
            l(
              'The Glycemic Index (GI) rates carbohydrates on a scale from 0 to 100 based on how fast they raise blood sugar compared to pure glucose. Foods with a GI of 55 or less are considered Low-GI; foods with a GI of 70 or higher are High-GI.',
              'গ্লাইসেমিক ইনডেক্স (GI) হলো ০ থেকে ১০০ পর্যন্ত একটি পরিমাপক যা বিশুদ্ধ গ্লুকোজের সাথে তুলনা করে দেখায় কোনো খাবার কত দ্রুত রক্তে শর্করা বাড়ায়। ৫৫ বা তার কম জিআই যুক্ত খাবার হলো নিম্ন-জিআই, আর ৭০ বা তার বেশি হলে তা উচ্চ-জিআই হিসেবে গণ্য হয়।',
            ),
            l(
              'However, GI only tells part of the story because it does not consider how much of that food you actually eat. Glycemic Load (GL) combines the speed of digestion with the actual portion size, giving a much more accurate picture of a meal’s impact on blood sugar.',
              'তবে জিআই কেবল অর্ধেক সত্য প্রকাশ করে, কারণ এটি পরিবেশনের পরিমাণের কথা বলে না। গ্লাইসেমিক লোড (GL) শোষণের গতির সাথে পরিবেশন করা খাবারের মোট শর্করার পরিমাণকে গুণ করে রক্তের ওপর খাবারের আসল প্রভাব নিখুঁতভাবে তুলে ধরে।',
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Resistant Starch: Food for Your Gut Microbiome', 'প্রতিরোধী শ্বেতসার: আপনার অন্ত্রের জীবাণুর খাদ্য'),
          paragraphs: [
            l(
              'Resistant starch is a special type of starch that resists digestion in the small intestine. Instead of being converted into blood glucose, it travels all the way to the large intestine where friendly gut bacteria ferment it into beneficial short-chain fatty acids.',
              'প্রতিরোধী শ্বেতসার হলো এমন এক বিশেষ শ্বেতসার যা ক্ষুদ্রান্ত্রে হজম হয় না। রক্তে গ্লুকোজ হিসেবে না ঢুকে এটি সোজা বৃহদান্ত্রে চলে যায়, যেখানে উপকারী ব্যাকটেরিয়া এটিকে গাঁজন প্রক্রিয়ায় শর্ট-চেইন ফ্যাটি অ্যাসিডে রূপান্তর করে স্বাস্থ্য সুরক্ষা দেয়।',
            ),
            l(
              'An easy way to create resistant starch at home is by cooking potatoes, pasta, or rice and then allowing them to cool in the refrigerator. Cooling changes the shape of the starch molecules into tight crystals that enzymes cannot easily break apart.',
              'ঘরে বসেই প্রতিরোধী শ্বেতসার তৈরির একটি সহজ উপায় হলো আলু, ভাত বা পাস্তা রান্না করে ফ্রিজে ঠাণ্ডা করা। ঠাণ্ডা করার ফলে শ্বেতসারের অণুগুলো শক্ত স্ফটিকে রূপ নেয় যা পরিপাককারী এনজাইম সহজে ভাঙতে পারে না।',
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Everyday Dietary Choices', 'দৈনন্দিন খাদ্য নির্বাচন'),
          paragraphs: [
            l(
              'Choosing carbohydrates with a low glycemic load and higher resistant starch keeps energy levels stable throughout the day, prevents mid-afternoon energy crashes, and supports long-term metabolic health without requiring strict carbohydrate elimination.',
              'কম গ্লাইসেমিক লোড এবং উচ্চ প্রতিরোধী শ্বেতসারযুক্ত খাবার বেছে নিলে সারাদিন শক্তি স্থিতিশীল থাকে, দুপুরের পর ক্লান্তি ও অলসতা দূর হয় এবং শর্করা পুরোপুরি বাদ না দিয়েই দীর্ঘমেয়াদী বিপাকীয় সুস্থতা নিশ্চিত হয়।',
            ),
          ],
          bullets: [
            l('Low-GI foods: lentils, chickpeas, apples, steel-cut oats.', 'নিম্ন-জিআই খাদ্য: ডাল, ছোলা, আপেল, ওটস।'),
            l('High-GI foods: white bread, instant puffed cereals, soda, jasmine rice.', 'উচ্চ-জিআই খাদ্য: সাদা পাউরুটি, মিষ্টি সিরিয়াল, কোলা, জেসমিন চাল।'),
            l('Cooling cooked starches increases resistant starch content.', 'রান্না করা শ্বেতসার ঠাণ্ডা করলে প্রতিরোধী শ্বেতসারের পরিমাণ বৃদ্ধি পায়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Educational Summary', 'মূল শিক্ষা ও শিক্ষামূলক সারাংশ'),
          paragraphs: [
            l(
              'Carbohydrate quality is determined by chemical structure, digestion velocity, and portion size. Glycemic Load provides a practical tool for evaluating meals, and resistant starch nourishes the gut microbiome while smoothing postprandial blood sugar responses.',
              'কার্বোহাইড্রেটের গুণমান রাসায়নিক গঠন, পরিপাকের গতি এবং পরিবেশনের পরিমাণের ওপর নির্ভর করে। গ্লাইসেমিক লোড খাবারের সঠিক মূল্যায়নে সাহায্য করে এবং প্রতিরোধী শ্বেতসার অন্ত্রের জীবাণুকে পুষ্ট করে রক্তে গ্লুকোজের সুষম ভারসাম্য রক্ষা করে।',
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
          heading: l('Carbohydrate Quality Paradigms & Metabolic Homeostasis', 'শর্করার গুণমানের বৈজ্ঞানিক মডেল ও বিপাকীয় ভারসাম্য'),
          paragraphs: [
            l(
              'The traditional classification of carbohydrates into simple sugars versus complex starches fails to predict human postprandial glycemic excursions [1, 2]. Rapidly digestible refined starches, such as white bread and maltodextrin, exhibit in vivo glycemic waveforms indistinguishable from pure oral glucose solutions, while certain simple fruit sugars like fructose produce minimal acute glycemic responses due to specialized hepatic first-pass fructokinase metabolism [1, 2].',
              'কার্বোহাইড্রেটকে সাধারণ শর্করা ও জটিল শ্বেতসারে ভাগ করার সনাতন পদ্ধতি খাবার-পরবর্তী রক্তের গ্লুকোজ বৃদ্ধির পূর্বাভাস দিতে সম্পূর্ণ ব্যর্থ [1, 2]। সাদা পাউরুটি ও মল্টোডেক্সট্রিনের মতো দ্রুত পরিপাকযোগ্য শ্বেতসার রক্তে সরাসরি বিশুদ্ধ গ্লুকোজের মতোই তীব্র তরঙ্গ তৈরি করে, পক্ষান্তরে ফ্রুক্টোজের মতো কিছু সাধারণ শর্করা যকৃতের বিশেষায়িত মেটাবলিজমের কারণে রক্তে তাৎক্ষণিক গ্লুকোজ বৃদ্ধি ঘটায় না [1, 2]।'
            ),
            l(
              'Carbohydrate quality is objectively defined by three physicochemical pillars: the rate and extent of small intestinal hydrolysis, dietary fiber content, and the proportion of resistant starch delivered intact to the colonic lumen [1, 4]. Systematic reviews and meta-analyses published in The Lancet substantiate that diets prioritizing high carbohydrate quality reduce all-cause mortality, cardiovascular incidence, and type 2 diabetes risk independently of total carbohydrate intake [4].',
              'কার্বোহাইড্রেটের গুণমান তিনটি ভৌত-রাসায়নিক ভিত্তির ওপর প্রতিষ্ঠিত: ক্ষুদ্রান্ত্রে আর্দ্রবিশ্লেষণের গতি ও ব্যাপ্তি, খাদ্যের ফাইবারের পরিমাণ এবং অক্ষত অবস্থায় বৃহদান্ত্রে পৌঁছানো প্রতিরোধী শ্বেতসারের অনুপাত [1, 4]। ল্যানসেটে প্রকাশিত সুসংহত পর্যালোচনা প্রমাণ করে যে উচ্চ মানের কার্বোহাইড্রেট সমৃদ্ধ খাদ্যাভ্যাস মোট শর্করার পরিমাণ নির্বিশেষে অকাল মৃত্যু, হৃদরোগ এবং টাইপ ২ ডায়াবেটিসের ঝুঁকি উল্লেখযোগ্যভাবে কমায় [4]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Starch Architecture: Linear Amylose vs Branched Amylopectin', 'শ্বেতসারের আণবিক বিন্যাস: সরল অ্যামাইলোজ বনাম শাখাযুক্ত অ্যামাইলোপেকটিন'),
          paragraphs: [
            l(
              'Starch is a semicrystalline plant polysaccharide granule composed of two homopolymers of D-glucose [1, 3]. Amylose consists of linear chains of alpha-1,4-D-glucopyranosyl units with minimal branching (<0.5%), forming tight helical conformations stabilized by intramolecular hydrogen bonds [1]. Amylopectin is a colossal, highly branched macromolecule containing linear alpha-1,4 backbones punctuated by alpha-1,6 branch linkages every 24 to 30 residues, constituting 70% to 80% of normal starch [1, 2].',
              'শ্বেতসার হলো ডি-গ্লুকোজের দুটি হোমোপলিমার দ্বারা গঠিত একটি অর্ধ-স্ফটিকাকার উদ্ভিজ্জ দানাদার যৌগ [1, 3]। অ্যামাইলোজ হলো আলফা-১,৪ বন্ধনযুক্ত একটি দীর্ঘ সরল শিকল যাতে প্রায় কোনো শাখা থাকে না (<০.৫%) এবং যা অভ্যন্তরীণ হাইড্রোজেন বন্ধনের মাধ্যমে শক্ত কুন্ডলী গঠন করে [1]। অন্যদিকে অ্যামাইলোপেকটিন হলো একটি সুবিশাল শাখাযুক্ত অণু যাতে প্রতি ২৪ থেকে ৩০টি গ্লুকোজ পরপর আলফা-১,৬ শাখা থাকে এবং যা সাধারণ শ্বেতসারের ৭০-৮০% গঠন করে [1, 2]।'
            ),
            l(
              'Because pancreatic alpha-amylase and brush-border glucoamylase are steric enzymes that cleave alpha-1,4 bonds from accessible non-reducing ends, the branched architecture of amylopectin presents thousands of simultaneous cleavage sites, accelerating hydrolysis velocity [1, 2]. Conversely, the compact helical geometry of amylose restricts water penetration and enzyme docking, resulting in significantly lower digestion rates and attenuated postprandial glucose surges [1, 3].',
              'অগ্ন্যাশয় অ্যামাইলেজ এবং ব্রাশ-বর্ডার গ্লুকোঅ্যামাইলেজ এনজাইমগুলো যেহেতু প্রান্তীয় গ্লুকোজের উন্মুক্ত স্থান থেকে বন্ধন কাটে, তাই অ্যামাইলোপেকটিনের অসংখ্য শাখা হাজার হাজার আক্রমণের স্থান তৈরি করে পরিপাককে বহুলাংশে ত্বরান্বিত করে [1, 2]। পক্ষান্তরে অ্যামাইলোজের ঘন কুন্ডলীতে পানি ও এনজাইমের প্রবেশ বাধাগ্রস্ত হওয়ায় আর্দ্রবিশ্লেষণের গতি অত্যন্ত ধীর থাকে এবং রক্তে গ্লুকোজের তীব্র উত্থান ঘটে না [1, 3]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Standardized Testing of Glycemic Index (GI) and Glycemic Load (GL)', 'গ্লাইসেমিক ইনডেক্স ও গ্লাইসেমিক লোডের প্রমিত বৈজ্ঞানিক পরিমাপ'),
          paragraphs: [
            l(
              'Standardized Glycemic Index determination adheres to strict ISO protocols: after an overnight fast, human participants ingest a 50-gram available carbohydrate test portion, and blood capillary glucose is sampled at 15, 30, 45, 60, 90, and 120 minutes [2]. The incremental Area Under the Curve (iAUC) is calculated geometrically, ignoring areas below baseline, and expressed as a percentage of the iAUC obtained from 50 grams of reference glucose in the same subject [1, 2].',
              'গ্লাইসেমিক ইনডেক্স নির্ণয়ে কঠোর আন্তর্জাতিক আইএসও মানদণ্ড অনুসরণ করা হয়: ১২ ঘণ্টার উপবাসের পর অংশগ্রহণকারীদের ৫০ গ্রাম ব্যবহারযোগ্য শর্করাযুক্ত খাদ্য পরিবেশন করা হয় এবং ১৫, ৩০, ৪৫, ৬০, ৯০ ও ১২০ মিনিটে কৈশিক রক্তের গ্লুকোজ মাপা হয় [2]। অতঃপর বক্ররেখার নিচের ক্ষেত্রফল (iAUC) জ্যামিতিকভাবে হিসাব করে সমপরিমাণ বিশুদ্ধ গ্লুকোজের ক্ষেত্রফলের সাপেক্ষে শতকরা হারে প্রকাশ করা হয় [1, 2]।'
            ),
            l(
              'Glycemic Load incorporates portion density: GL = (GI x Available Carbohydrate [g]) / 100 [2]. Rapid postprandial glucose absorption from high-GL diets induces rapid supra-physiological insulin secretion from pancreatic beta cells, accelerating peripheral glucose uptake and hepatic lipogenesis, followed by a late-postprandial reactive hypoglycemic nadir that triggers counter-regulatory cortisol, ghrelin, and sympathetic activation [1, 3].',
              'গ্লাইসেমিক লোড পরিবেশনের ঘনত্বের হিসাব যুক্ত করে: GL = (GI x ব্যবহারযোগ্য শর্করা গ্রাম) / ১০০ [2]। উচ্চ-জিএল খাবারের দ্রুত শোষণের ফলে অগ্ন্যাশয়ের বিটা-কোষ থেকে মাত্রাতিরিক্ত ইনসুলিন ক্ষরিত হয়, যা কোষে পুষ্টি প্রবেশ ও যকৃতে চর্বি উৎপাদন বাড়িয়ে দেয় এবং পরবর্তী ২-৩ ঘণ্টার মধ্যে রিঅ্যাক্টিভ হাইপোগ্লাইসেমিয়ার সৃষ্টি করে কর্টিসল ও ক্ষুধা উদ্দীপিত করে [1, 3]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Resistant Starch Taxonomy (RS1–RS4) & Colonic Physiological Actions', 'প্রতিরোধী শ্বেতসারের শ্রেণিবিভাগ (RS1–RS4) ও বৃহদান্ত্রের শারীরবৃত্ত'),
          paragraphs: [
            l(
              'Resistant starches are divided into four established physiological classes [1, 4]. RS1 represents physically inaccessible starch trapped within intact plant cell walls (whole grains, seeds, intact legumes). RS2 comprises ungelatinized native B-type starch granules whose compact crystalline packing resists alpha-amylase (raw potatoes, green bananas, high-amylose maize) [1, 4].',
              'প্রতিরোধী শ্বেতসারকে চারটি স্বীকৃত শ্রেণিতে ভাগ করা হয় [1, 4]। RS1 হলো উদ্ভিদের কোষপ্রাচীরের ভেতরে প্রাকৃতিকভাবে আবদ্ধ শ্বেতসার যা এনজাইমের নাগালের বাইরে থাকে (গোটা শস্য, বীজ, ডাল)। RS2 হলো কাঁচা স্ফটিকাকার বি-টাইপ শ্বেতসার দানা যা অ্যামাইলেজ এনজাইম ভাঙতে পারে না (কাঁচা আলু, কাঁচা কলা, বিশেষ ভুট্টা) [1, 4]।'
            ),
            l(
              'RS3 (retrograded starch) forms when cooked, gelatinized starches are cooled, causing dissociated amylose chains to re-crystallize into dense double-helical structures with an exceptionally high melting temperature (boiled-and-chilled potatoes, chilled cooked rice) [1, 3]. RS4 consists of chemically modified starches featuring cross-linking, etherification, or esterification that obstruct enzyme active sites [1]. All four classes bypass the small bowel and undergo anaerobic fermentation by Bifidobacterium and Faecalibacterium into short-chain fatty acids [1, 4].',
              'RS3 (রিট্রোগ্রেডেড শ্বেতসার) গঠিত হয় যখন রান্না করা শ্বেতসার ঠাণ্ডা করা হয়, ফলে উন্মুক্ত অ্যামাইলোজ পুনরায় ঘন দ্বিসূত্রক স্ফটিকে পরিণত হয় যার গলনাঙ্ক অত্যন্ত উচ্চ (সেদ্ধ করে ঠাণ্ডা করা আলু বা ভাত) [1, 3]। RS4 হলো রাসায়নিকভাবে পরিবর্তিত শ্বেতসার যাতে কৃত্রিম বন্ধন এনজাইমের সক্রিয় স্থানকে আটকে দেয় [1]। এই চার ধরনের প্রতিরোধী শ্বেতসারই অক্ষত অবস্থায় বৃহদান্ত্রে পৌঁছে উপকারী ব্যাকটেরিয়ার দ্বারা শর্ট-চেইন ফ্যাটি অ্যাসিডে পরিণত হয় [1, 4]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Applications: Medical Nutrition Therapy in Diabetes', 'ক্লিনিক্যাল প্রয়োগ: ডায়াবেটিসে পুষ্টি চিকিৎসা থেরাপি'),
          paragraphs: [
            l(
              'The American Diabetes Association (ADA) and European Association for the Study of Diabetes (EASD) endorse low-GI, low-GL, and high-fiber dietary patterns as effective Medical Nutrition Therapy [3]. Clinical trials show that replacing high-GI starches with low-GI alternatives reduces glycated hemoglobin (HbA1c) by 0.4% to 0.5%, an effect size comparable to first-line oral anti-hyperglycemic agents [1, 3].',
              'আমেরিকান ডায়াবেটিস অ্যাসোসিয়েশন (ADA) এবং ইউরোপীয় ডায়াবেটিস সংস্থা (EASD) নিম্ন-জিআই, নিম্ন-জিএল এবং উচ্চ-ফাইবার খাদ্যাভ্যাসকে ডায়াবেটিসের প্রথম সারির চিকিৎসা পুষ্টি থেরাপি হিসেবে স্বীকৃতি দিয়েছে [3]। ক্লিনিক্যাল ট্রায়ালে দেখা গেছে যে উচ্চ-জিআই খাদ্যের বদলে নিম্ন-জিআই খাদ্য গ্রহণ করলে রক্তে HbA1c প্রায় ০.৪% থেকে ০.৫% পর্যন্ত হ্রাস পায়, যা ডায়াবেটিসের প্রারম্ভিক ওষুধের কার্যকারিতার সমান [1, 3]।'
            ),
          ],
          bullets: [
            l('Low-GI: 55 or below; Moderate-GI: 56–69; High-GI: 70 or above.', 'নিম্ন-জিআই: ৫৫ বা কম; মাঝারি-জিআই: ৫৬–৬৯; উচ্চ-জিআই: ৭০ বা বেশি।'),
            l('Low-GL: 10 or below; Moderate-GL: 11–19; High-GL: 20 or above.', 'নিম্ন-জিএল: ১০ বা কম; মাঝারি-জিএল: ১১–১৯; উচ্চ-জিএল: ২০ বা বেশি।'),
            l('RS3 formation via cooking and cooling reduces postprandial glycemic excursions.', 'রান্নার পর ঠাণ্ডা করার মাধ্যমে RS3 তৈরি খাবার-পরবর্তী গ্লুকোজ বৃদ্ধি কমিয়ে দেয়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Academic Review', 'মূল শিক্ষা ও একাডেমিক সারাংশ'),
          paragraphs: [
            l(
              'Carbohydrate quality is determined by polymer branching, digestion kinetics, and portion density. Amylose digests more slowly than amylopectin. Glycemic Load synthesizes speed with serving size, and resistant starch provides vital metabolic signaling through colonic microbiome fermentation.',
              'কার্বোহাইড্রেটের মান পলিমারের শাখা, পরিপাকের গতি এবং পরিবেশনের ঘনত্বের ওপর নির্ভরশীল। অ্যামাইলোজ অ্যামাইলোপেকটিনের চেয়ে ধীরে পরিপাক হয়। গ্লাইসেমিক লোড গতির সাথে পরিমাণের মেলবন্ধন ঘটায় এবং প্রতিরোধী শ্বেতসার অন্ত্রের জীবাণুর গাঁজনের মাধ্যমে গুরুত্বপূর্ণ বিপাকীয় সংকেত তৈরি করে।',
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'integration',
          heading: l('Advanced Metabolomics: The Incretin and Bile Acid Axes', 'উচ্চতর মেটাবলোমিক্স: ইনক্রেটিন ও পিত্ত অম্লের চক্র'),
          paragraphs: [
            l(
              'Advanced fluxomic tracing demonstrates that the clinical benefits of low-GI and resistant starch diets operate via coordinated enteroendocrine axes [1, 4]. Slower luminal glucose transit extends SGLT1 engagement into the distal jejunum and ileum, triggering robust L-cell GLP-1 secretion while simultaneously curtailing glucose-dependent insulinotropic polypeptide (GIP) hypersecretion from proximal K-cells [1, 2]. Because GIP promotes adipocyte lipid accumulation whereas GLP-1 inhibits gastric emptying and suppresses glucagon, this incretin shift attenuates postprandial lipemia and hepatic steatosis [1, 4].',
              'উচ্চতর মেটাবলোমিক্স গবেষণা প্রমাণ করে যে নিম্ন-জিআই এবং প্রতিরোধী শ্বেতসারের ক্লিনিক্যাল সুফল সুসংহত এন্টারোএন্ডোক্রাইন অক্ষের মাধ্যমে কার্যকর হয় [1, 4]। লুমেনে গ্লুকোজের ধীর সঞ্চালনের ফলে দূরবর্তী জেজুনাম ও ইলিয়ামের এল-কোষ থেকে প্রচুর GLP-1 ক্ষরিত হয় এবং একই সাথে প্রক্সিমাল কে-কোষ থেকে ক্ষতিকর GIP নিঃসরণ হ্রাস পায় [1, 2]। জিআইপি চর্বি কোষে মেদ সঞ্চয় বাড়ায় পক্ষান্তরে জিএলপি-১ পাকস্থলী খালি হওয়া বিলম্বিত করে গ্লুকাগন কমায়, ফলে এই ইনক্রেটিন পরিবর্তন যকৃতে চর্বি জমা ও রক্তে লিপিড বৃদ্ধি কার্যকরভাবে প্রতিরোধ করে [1, 4]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Frontier Research: Resistant Starch Crystallography & Metabolic Epigenetics', 'অত্যাধুনিক গবেষণা: প্রতিরোধী শ্বেতসারের স্ফটিকায়ন ও এপিজেনেটিক্স'),
          paragraphs: [
            l(
              'Crystallographic X-ray diffraction analyses reveal that retrograded RS3 starches adopt distinct A-type or B-type polymorphic double-helical unit cells that resist alpha-amylolytic cleavage up to 120°C [1]. When fermented by specialized colonic commensals (such as Ruminococcus bromii and Faecalibacterium prausnitzii), RS3 yields disproportionately high molar ratios of butyrate [1, 4]. Butyrate acts as an endogenous histone deacetylase (HDAC) inhibitor, epigenetically upregulating anti-inflammatory mucosal genes and fortifying epithelial barrier tight junctions against endotoxemia [1, 4].',
              'এক্স-রে ডিফ্র্যাকশন স্ফটিক পরীক্ষায় দেখা গেছে যে রিট্রোগ্রেডেড RS3 শ্বেতসার এমন বিশেষ পলিমরফিক দ্বিসূত্রক একক গঠন করে যা ১২০ ডিগ্রি সেলসিয়াস তাপমাত্রা পর্যন্ত অ্যামাইলেজ এনজাইমের আক্রমণ প্রতিহত করে [1]। রুমিমোকক্কাস ব্রোমাই এবং ফিকালিব্যাকটেরিয়াম প্রাউসনিটজি ব্যাকটেরিয়ার গাঁজনে RS3 থেকে বিপুল অনুপাতে বিউটাইরেট উৎপন্ন হয় [1, 4]। এই বিউটাইরেট হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) এনজাইমকে অবদমিত করে এপিজেনেটিকভাবে অন্ত্রের প্রদাহরোধী জিন সক্রিয় করে এবং এন্ডোটক্সিন রক্তে ঢোকার পথ বন্ধ করে দেয় [1, 4]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'What type of resistant starch forms when cooked, gelatinized starches (such as boiled potatoes or rice) undergo cooling and amylose retrogradation?',
      'রান্না করা তরলীকৃত শ্বেতসার (যেমন সেদ্ধ আলু বা ভাত) ঠাণ্ডা করার পর অ্যামাইলোজের রিট্রোগ্রেডেশনে কোন ধরনের প্রতিরোধী শ্বেতসার তৈরি হয়?'
    ),
    options: [
      l('Type 3 Resistant Starch (RS3)', 'টাইপ ৩ প্রতিরোধী শ্বেতসার (RS3)'),
      l('Type 1 Resistant Starch (RS1)', 'টাইপ ১ প্রতিরোধী শ্বেতসার (RS1)'),
      l('Type 2 Resistant Starch (RS2)', 'টাইপ ২ প্রতিরোধী শ্বেতসার (RS2)'),
      l('Type 4 Chemically Modified Starch (RS4)', 'টাইপ ৪ রাসায়নিকভাবে পরিবর্তিত শ্বেতসার (RS4)'),
    ],
    correctIndex: 0,
    explanation: l(
      'RS3 (retrograded starch) forms when gelatinized amylose chains realign during cooling into enzyme-resistant, thermally stable crystalline double helices.',
      'RS3 (রিট্রোগ্রেডেড শ্বেতসার) গঠিত হয় যখন ঠাণ্ডা করার সময় অ্যামাইলোজের শিকলগুলো এনজাইম-প্রতিরোধী ও তাপ-স্থিতিশীল স্ফটিকাকার দ্বিসূত্রকে রূপান্তরিত হয়।'
    ),
  },
}
