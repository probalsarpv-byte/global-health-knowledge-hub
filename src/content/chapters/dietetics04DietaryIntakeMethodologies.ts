import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics04References: LessonReference[] = [
  {
    id: 'ref-subar-ampm-2012',
    authors: 'Subar AF, Freedman LS, Tooze JA, et al.',
    title: 'Addressing Current Criticism Regarding the Value of Self-Report Dietary Data in Nutritional Epidemiology',
    organization: 'The Journal of Nutrition',
    year: 2015,
    url: 'https://academic.oup.com/jn/article/145/12/2639/4585642',
    doi: '10.3945/jn.115.219634',
  },
  {
    id: 'ref-willett-nutritional-epi',
    authors: 'Willett WC',
    title: 'Nutritional Epidemiology',
    organization: 'Oxford University Press',
    year: 2013,
    url: 'https://global.oup.com/academic/product/nutritional-epidemiology-9780199754038',
    doi: '10.1093/acprof:oso/9780199754038.001.0001',
  },
  {
    id: 'ref-goldberg-cutoff-1991',
    authors: 'Goldberg AE, Black AE, Jebb SA, et al.',
    title: 'Critical Evaluation of Energy Intake Data Using Fundamental Principles of Energy Physiology: 1. Derivation of Cut-Off Limits to Identify Under-Recording',
    organization: 'European Journal of Clinical Nutrition',
    year: 1991,
    url: 'https://pubmed.ncbi.nlm.nih.gov/1778106/',
  },
  {
    id: 'ref-bingham-biomarkers',
    authors: 'Bingham SA',
    title: 'Biomarkers in Nutritional Epidemiology',
    organization: 'Public Health Nutrition',
    year: 2002,
    url: 'https://www.cambridge.org/core/journals/public-health-nutrition/article/biomarkers-in-nutritional-epidemiology/F86BAEB789133AE566531393663AE630',
    doi: '10.1079/PHN2002389',
  },
  {
    id: 'ref-black-energy-expenditure',
    authors: 'Black AE',
    title: 'Critical Evaluation of Energy Intake Using the Goldberg Cut-Off for EI:BMR. A Practical Guide to Its Calculation, Use and Limitations',
    organization: 'International Journal of Obesity',
    year: 2000,
    url: 'https://www.nature.com/articles/0801376',
    doi: '10.1038/sj.ijo.0801376',
  },
]

export const dietetics04DietaryIntakeLesson: LessonTopic = {
  id: 'topic.dietetics.dietary-intake-methodologies',
  slug: 'dietary-intake-methodologies-ffq-recall',
  title: l(
    '04 · Dietary Intake Methodologies: 24-Hour Recalls, FFQ & Bias Quantification',
    '০৪ · খাদ্য গ্রহণ মূল্যায়ন পদ্ধতি: ২৪-ঘণ্টার রিকল, এফএফকিউ ও ভুলের পরিমাপ'
  ),
  summary: l(
    'A comprehensive scientific and clinical guide to measuring what humans actually eat: deploying the five-step Automated Multiple-Pass Method (AMPM), utilizing Food Frequency Questionnaires (FFQs), correcting for cognitive and social underreporting biases, and applying physiological validation models including the Goldberg cutoff and biochemical recovery biomarkers.',
    'মানুষ প্রকৃতপক্ষে কী খায় তা নিখুঁতভাবে পরিমাপের বিজ্ঞানভিত্তিক পূর্ণাঙ্গ নির্দেশিকা: পাঁচ ধাপের অটোমেটেড মাল্টিপল-পাস মেথড (AMPM) পরিচালনা, ফুড ফ্রিকোয়েন্সি প্রশ্নমালা (FFQ) বিশ্লেষণ, মনস্তাত্ত্বিক কম দেখানোর প্রবণতা (আন্ডার-রিপোর্টিং) দূর করার কৌশল এবং গোল্ডবার্গ কাট-অফ সূত্র ও বায়োমার্কারের মাধ্যমে খাদ্যের সত্যতা যাচাই।'
  ),
  subject: 'dietetics',
  version: 1,
  updatedAt: '2026-11-03',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-03',
  prerequisiteIds: ['topic.dietetics.assessment-abcd'],
  relatedTopicIds: ['topic.dietetics.assessment-abcd', 'topic.nutrition.clinical-malnutrition-wasting-cachexia'],
  objectives: [
    l(
      'Conduct a standardized 24-hour dietary recall using the five-step Automated Multiple-Pass Method (AMPM) to minimize memory omissions and portion size illusions.',
      'স্মৃতিভ্রম ও খাবারের পরিমাণের দৃষ্টিবিভ্রম দূর করতে পাঁচ ধাপের প্রমিত অটোমেটেড মাল্টিপল-পাস মেথডের (AMPM) মাধ্যমে ২৪ ঘণ্টার খাদ্য তালিকা গ্রহণ করা।'
    ),
    l(
      'Compare the clinical and epidemiological utilities, strengths, and limitations of 24-hour recalls, Food Frequency Questionnaires (FFQs), and weighed food records.',
      '২৪-ঘণ্টার রিকল, ফুড ফ্রিকোয়েন্সি প্রশ্নমালা (FFQ) এবং ওজনের ভিত্তিতে ফুড রেকর্ডের ব্যবহারিক উপযোগিতা, শক্তি ও সীমাবদ্ধতা তুলনা করা।'
    ),
    l(
      'Identify systematic cognitive biases in dietary reporting, including the "flat-slope syndrome", social desirability bias, and selective omission of energy-dense foods.',
      'খাবারের তথ্য প্রদানের মনস্তাত্ত্বিক ভুলসমূহ (যেমন কম ওজনের মানুষের বাড়িয়ে বলা, স্থূল মানুষের কম খাওয়ার দাবি বা ফ্যাট ও মিষ্টি গোপন করার প্রবণতা) শনাক্ত করা।'
    ),
    l(
      'Calculate and interpret the Goldberg cut-off ratio (Reported Energy Intake to Basal Metabolic Rate) to mathematically differentiate true physiological hypophagia from fabricated underreporting.',
      'গোল্ডবার্গ কাট-অফ অনুপাত (দাবিকৃত ক্যালোরি গ্রহণ ও বেসাল মেটাবলিক রেটের অনুপাত) হিসাব করে রোগী আসলেই অনাহারে আছেন নাকি খাবার গ্রহণের তথ্য কম দিয়েছেন তা গাণিতিকভাবে নিশ্চিত করা।'
    ),
    l(
      'Validate self-reported nutrient intakes using objective biochemical recovery biomarkers, including 24-hour urinary nitrogen for protein and doubly labeled water for total energy expenditure.',
      'প্রস্রাবের ২৪ ঘণ্টার নাইট্রোজেনের মাধ্যমে প্রোটিন এবং ডাবলি লেবেলড ওয়াটারের মাধ্যমে মোট ক্যালোরি ব্যয়ের নিরপেক্ষ বৈজ্ঞানিক সত্যতা যাচাই করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A structured five-step flowchart of the USDA Automated Multiple-Pass Method (AMPM): Pass 1 creates a rapid, uninterrupted quick food list; Pass 2 systematically probes for commonly forgotten foods (beverages, condiments, midnight snacks); Pass 3 chronologically groups eating occasions by time of day; Pass 4 gathers precise details on portion sizes, preparation, cooking oils, and brand names; Pass 5 performs a final review probing for omissions.',
      'ইউএসডিএ-র পাঁচ ধাপের অটোমেটেড মাল্টিপল-পাস মেথডের (AMPM) কর্মপ্রবাহ চিত্র: ধাপ ১ দ্রুত কোনো বাধা ছাড়া খাবারের তালিকা তৈরি করে; ধাপ ২ ভুলে যাওয়া খাবারগুলোর জন্য অনুসন্ধান চালায়; ধাপ ৩ খাওয়ার সময় ও উপলক্ষ অনুযায়ী খাবার বিন্যস্ত করে; ধাপ ৪ খাবারের পরিমাণ, রান্নার তেল ও প্রস্তুতপ্রণালীর খুঁটিনাটি বিবরণ নেয়; ধাপ ৫ চূড়ান্ত পর্যালোচনার মাধ্যমে সারাদিনের বাদ পড়া ফাঁকফোকর খুঁজে বের করে।'
    ),
    steps: [
      l(
        'Pass 1: Quick Food List. The patient lists all foods and beverages consumed over the preceding 24 hours in free, stream-of-consciousness recall without interruption by the clinician.',
        'ধাপ ১: দ্রুত খাবারের তালিকা (Quick Food List): রোগী কোনো বাধা ছাড়াই গত ২৪ ঘণ্টায় খাওয়া সমস্ত খাবার ও পানীয়ের একটি প্রাথমিক ধারাবাহিক তালিকা মুখে বলেন।'
      ),
      l(
        'Pass 2: Forgotten Foods Probe. The clinician asks targeted, non-judgmental questions probing for easily forgotten categories: snacks, sugar-sweetened beverages, alcohol, condiments, and midnight nibbles.',
        'ধাপ ২: ভুলে যাওয়া খাবারের অনুসন্ধান (Forgotten Foods Probe): চিকিৎসক মিষ্টি, স্ন্যাক্স, চা-কফির চিনি, রান্নার তেল, সস, অ্যালকোহল বা মধ্যরাতের খাবারের মতো সহজে বাদ পড়া বিষয়গুলো আলাদাভাবে জিজ্ঞাসা করেন।'
      ),
      l(
        'Pass 3: Time and Occasion Grouping. Foods are chronologically organized by meal occasions (breakfast, morning tea, lunch, evening snack, dinner) and times of day, anchoring memories to daily routines.',
        'ধাপ ৩: সময় ও উপলক্ষ নির্ধারণ (Time & Occasion Grouping): খাবারগুলোকে সকালের নাশতা, দুপুরের খাবার, বিকেলের স্ন্যাক্স ইত্যাদির সময় ও কাজের সাথে মিলিয়ে ধারাবাহিকভাবে সাজানো হয়।'
      ),
      l(
        'Pass 4: Detail Cycle. Precise quantification of portion sizes using three-dimensional food models, calibrated measuring bowls, preparation methods (fried, boiled, baked), cooking oils, and commercial brand names.',
        'ধাপ ৪: বিস্তারিত বিবরণ (Detail Cycle): খাবারের সঠিক পরিমাণ (বাটি বা কাপের মাপে), রান্নার পদ্ধতি (তেল/ঘি), ভাজা বা সেদ্ধ এবং ব্রান্ডের নাম বিস্তারিত নথিবদ্ধ করা হয়।'
      ),
      l(
        'Pass 5: Final Review Probe. A final comprehensive review of the entire 24-hour arc, probing for any remaining temporal gaps between meals or activities.',
        'ধাপ ৫: চূড়ান্ত পর্যালোচনা (Final Review Probe): পুরো দিনের খাবার শেষবারের মতো পর্যালোচনা করা হয় এবং দুই খাবারের মাঝের কোনো বাদ পড়া অংশ বা পানীয় আছে কি না তা নিশ্চিত করা হয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 45-year-old female with class II obesity (weight = 98 kg, height = 162 cm, BMI = 37.3 kg/m², calculated Basal Metabolic Rate via Mifflin-St Jeor = 1,620 kcal/day) presents for weight management. Her 3-day food diary reports an average Energy Intake (EI) of 1,050 kcal/day, yet her body weight has remained strictly stable over the past 6 months. How does the physiological Goldberg cut-off index classify this reported intake?',
      'ক্লাস ২ স্থূলতায় আক্রান্ত ৪৫ বছর বয়সী এক নারী (ওজন ৯৮ কেজি, উচ্চতা ১৬২ সেমি, বিএমআই ৩৭.৩ kg/m², মিফলিন সমীকরণে হিসাবকৃত বেসাল মেটাবলিক রেট = ১৬২০ kcal/দিন) ওজন কমাতে এসেছেন। তার ৩ দিনের ফুড ডায়েরিতে গড় ক্যালোরি গ্রহণ দেখানো হয়েছে ১০৫০ kcal/দিন; অথচ গত ৬ মাস ধরে তার ওজন অপরিবর্তিত রয়েছে। গোল্ডবার্গ কাট-অফ সূত্রের বিচারে এই খাদ্যের তথ্যকে কীভাবে মূল্যায়ন করা হবে?'
    ),
    options: [
      l(
        'The report is physiologically valid because obese individuals frequently require fewer than 1,100 kcal to maintain large body masses.',
        'তথ্যটি বৈজ্ঞানিকভাবে সঠিক, কারণ স্থূল রোগীদের বিশাল ওজন বজায় রাখতে প্রায়ই ১১০০ কিলোক্যালোরির কম শক্তি প্রয়োজন হয়।'
      ),
      l(
        'The ratio EI / BMR = 1,050 / 1,620 = 0.65, which falls far below the universal physiological survival cutoff of 1.20, proving severe cognitive underreporting bias or substantial portion size underestimation.',
        'অনুপাতটি হলো EI / BMR = ১০৫০ / ১৬২০ = ০.৬৫, যা মানুষের বেঁচে থাকার ন্যূনতম শারীরবৃত্তীয় সীমা ১.২০-এর অনেক নিচে; এটি খাদ্য গ্রহণ কম দেখানোর স্পষ্ট মনস্তাত্ত্বিক ভুল বা তেল ও খাবারের পরিমাণ অবমূল্যায়ন প্রমাণ করে।'
      ),
      l(
        'The patient has developed extreme adaptive thermogenesis that lowered her actual cellular energy expenditure by 60%.',
        'রোগীর মেটাবলিজমে চরম অ্যাডাপটিভ থার্মোজেনেসিস ঘটেছে যার ফলে তার প্রকৃত কোষীয় ক্যালোরি খরচ ৬০% কমে গেছে।'
      ),
      l(
        'The 1,050 kcal intake confirms that she is actively losing adipose tissue at a predictable rate of 1 kg per week.',
        '১০৫০ কিলোক্যালোরি প্রমাণ করে যে তার প্রতি সপ্তাহে ১ কেজি করে চর্বি ক্ষয় হচ্ছে।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'The Goldberg cut-off establishes that for a free-living individual maintaining a stable body weight, an Energy Intake to BMR ratio (EI : BMR) below 1.20 represents a level of energy intake incompatible with physiological survival. Basal Metabolic Rate sustains coma-level cellular life; minimal ambulatory movement and food digestion demand at least 20% to 30% additional energy. An EI : BMR ratio of 0.65 represents severe selective underreporting or massive portion size underestimation, a classic example of flat-slope syndrome in obesity.',
      'গোল্ডবার্গ কাট-অফ সূত্রের মূল বৈজ্ঞানিক সত্য হলো: কোনো ব্যক্তির ওজন যদি দীর্ঘদিন স্থির থাকে, তবে তার ক্যালোরি গ্রহণ ও বেসাল মেটাবলিজমের অনুপাত (EI : BMR) কখনোই ১.২০-এর নিচে হতে পারে না। বেসাল মেটাবলিক রেট কেবল কোমায় থাকা ব্যক্তির বেঁচে থাকার শক্তি জোগায়; সামান্য হাঁটাচলা ও খাদ্য পরিপাকে আরও ২০% থেকে ৩০% শক্তি ব্যয় হয়। ০.৬৫ অনুপাতটি প্রমাণ করে যে রোগী হয়তো খাবারের পরিমাণ কম জানিয়েছেন অথবা রান্নার তেল, মিষ্টি ও স্ন্যাক্সের তথ্য অবচেতনভাবে গোপন করেছেন, যাকে স্থূলতার ক্ষেত্রে "ফ্ল্যাট-স্লোপ সিন্ড্রোম" বলা হয়।'
    ),
  },
  evidenceBySection: {
    'sec-measuring-diet': ['ref-subar-ampm-2012', 'ref-willett-nutritional-epi'],
    'sec-recall-vs-ffq': ['ref-subar-ampm-2012', 'ref-willett-nutritional-epi'],
    'sec-underreporting-truth': ['ref-goldberg-cutoff-1991', 'ref-black-energy-expenditure'],
    'sec-intake-modalities': ['ref-subar-ampm-2012', 'ref-willett-nutritional-epi'],
    'sec-bias-mechanisms': ['ref-subar-ampm-2012', 'ref-goldberg-cutoff-1991'],
    'sec-goldberg-biomarkers': ['ref-goldberg-cutoff-1991', 'ref-black-energy-expenditure', 'ref-bingham-biomarkers'],
    'sec-nitrogen-recovery': ['ref-bingham-biomarkers', 'ref-black-energy-expenditure'],
  },
  references: dietetics04References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-measuring-diet',
          heading: l(
            '1. The Kitchen Detective: Why Measuring What People Eat Is So Difficult',
            '১. রান্নাঘরের গোয়েন্দা: মানুষ কী খায় তা পরিমাপ করা কেন এত কঠিন?'
          ),
          paragraphs: [
            l(
              'Determining what a person actually eats and drinks is one of the most deceptively complex puzzles in modern medicine [1]. When a physician orders an electrocardiogram or a serum glucose test, a calibrated instrument directly measures electrical currents or circulating molecules. In stark contrast, clinicians cannot install a video camera inside a patient’s kitchen or follow them into restaurants. We are compelled to rely almost entirely on what people remember, what they choose to share, and how accurately they estimate the physical volume of their food.',
              'একজন মানুষ প্রকৃতপক্ষে কী খাচ্ছেন এবং পান করছেন তা নির্ধারণ করা আধুনিক চিকিৎসাবিজ্ঞানের সবচেয়ে জটিল ও বিভ্রান্তিকর ধাঁধাগুলোর একটি [1]। চিকিৎসক যখন ইসিজি বা রক্তের গ্লুকোজ পরীক্ষার নির্দেশ দেন, তখন একটি প্রমিত যন্ত্র সরাসরি হৃদযন্ত্রের বিদ্যুৎ প্রবাহ বা রক্তের অণু পরিমাপ করে। কিন্তু পুষ্টিবিদ বা চিকিৎসক কখনো রোগীর রান্নাঘরে ক্যামেরা বসিয়ে রাখতে পারেন না কিংবা রেস্তোরাঁয় তার পেছনে পেছনে ঘুরতে পারেন না। আমাদের প্রায় পুরোপুরি নির্ভর করতে হয় রোগী কী মনে করতে পারছেন, তিনি কতটা বলতে স্বাচ্ছন্দ্যবোধ করছেন এবং খাবারের পরিমাণ তিনি কতটা নিখুঁতভাবে অনুমান করতে পারছেন তার ওপর।'
            ),
            l(
              'Human memory is not a high-definition recording device; it is a creative storyteller that simplifies and condenses [1, 2]. Decades of nutritional research confirm that free-living humans regularly omit 20% to 50% of the energy they ingest. People vividly remember the centerpiece of their meal—such as a plate of rice, a fillet of fish, or a chicken cutlet. However, the human brain consistently deletes the "invisible" calories: the two tablespoons of cooking oil absorbed into the vegetables, the sweetened creamer stirred into three cups of tea, the handful of roasted nuts taken from an office bowl, or the butter spread across morning toast.',
              'মানুষের স্মৃতি কোনো নিখুঁত ভিডিও ক্যামেরা নয়; এটি মূলত একটি সৃজনশীল গল্পকথক যা পেছনের ঘটনাকে সংক্ষেপ ও সহজ করে ফেলে [1, 2]। পুষ্টিবিজ্ঞানের কয়েক দশকের গবেষণা প্রমাণ করেছে যে সুস্থ-স্বাভাবিক মানুষও নিজের অজান্তে প্রতিদিনের ক্যালোরির ২০% থেকে ৫০% ভুলে যায়। মানুষ খাবারের প্রধান অংশটি স্পষ্টভাবে মনে রাখে—যেমন এক থালা ভাত, মাছের টুকরো বা মুরগির মাংস। কিন্তু মানুষের মস্তিষ্ক "অদৃশ্য" ক্যালোরিগুলোকে অবচেতনভাবেই মুছে ফেলে: যেমন সবজি রান্নায় ব্যবহৃত দুই চামচ ভোজ্যতেল, চায়ে মেশানো চিনি ও কনডেন্সড মিল্ক, কাজের ফাঁকে খাওয়া একমুঠো বাদাম কিংবা পাউরুটিতে মাখানো মাখনের প্রলেপ।'
            ),
          ],
          bullets: [
            l(
              'Memory Decay: The human brain rapidly discards mundane, repetitive eating events within 24 to 48 hours, remembering the occasion but losing the exact portions.',
              'স্মৃতির স্বাভাবিক ক্ষয়: গত ২৪ থেকে ৪৮ ঘণ্টার সাধারণ, প্রতিদিনের খাবারের খুঁটিনাটি মানুষের মস্তিষ্ক দ্রুত মুছে ফেলে; খাওয়ার কথা মনে থাকলেও সঠিক পরিমাণ হারিয়ে যায়।'
            ),
            l(
              'Portion Distortion: Modern restaurant serving sizes and oversized dinner plates create optical illusions (the Delboeuf illusion), causing people to underestimate food volumes by 30% or more.',
              'পরিমাণের দৃষ্টিবিভ্রম (Portion Distortion): রেস্তোরাঁর বিশাল পরিবেশন বা বড় থালার কারণে চোখের দৃষ্টিবিভ্রম ঘটে, যার ফলে মানুষ নিজের অজান্তেই ৩০% বা তার বেশি খাবার কম অনুমান করে।'
            ),
            l(
              'Liquid Calorie Blindness: Sweetened beverages, fruit juices, specialty coffees, and alcoholic drinks rarely trigger feelings of fullness, allowing hundreds of calories to bypass conscious recall.',
              'তরল ক্যালোরির বিস্মৃতি: মিষ্টি শরবত, ফলের জুস, কোল্ড ড্রিঙ্কস বা কফির দুধ-চিনি পেট ভরার অনুভূতি দেয় না, ফলে শত শত ক্যালোরি মানুষের স্মৃতি থেকে একদম মুছে যায়।'
            ),
            l(
              'Cooking Medium Concealment: Fats and oils used in sauteing, deep frying, and salad dressings soak invisibly into food, hiding enormous calorie densities in plain sight.',
              'রান্নার তেলের অদৃশ্য উপস্থিতি: ভাজাভুজি বা রান্নায় ব্যবহৃত তেল ও ঘি খাবারের ভেতরে এমনভাবে মিশে যায় যে খালি চোখে তার বিশাল ক্যালোরি বোঝা অসম্ভব হয়ে পড়ে।'
            ),
          ],
        },
        {
          id: 'sec-recall-vs-ffq',
          heading: l(
            '2. Capturing What People Eat: 24-Hour Recalls vs Food Frequency Questionnaires',
            '২. খাদ্যাভ্যাস নথিভুক্তকরণ: ২৪-ঘণ্টার রিকল বনাম ফুড ফ্রিকোয়েন্সি প্রশ্নমালা (FFQ)'
          ),
          paragraphs: [
            l(
              'To transform vague dietary recollections into actionable scientific data, clinical dietitians utilize two primary methodologies, each serving a distinct purpose with its own unique strengths and blind spots [1, 2]:',
              'রোগীর অস্পষ্ট স্মৃতিকে বিজ্ঞানসম্মত তথ্যে রূপান্তর করতে ক্লিনিক্যাল পুষ্টিবিদরা প্রধানত দুটি স্বতন্ত্র পদ্ধতি ব্যবহার করেন, যার প্রতিটির নিজস্ব শক্তি ও সীমাবদ্ধতা রয়েছে [1, 2]:'
            ),
            l(
              'Neither tool is perfect on its own [2]. A single 24-hour recall cannot define a patient’s true lifelong habits, because that specific day might have been a religious feast, a busy travel day, or an episode of illness. Conversely, an FFQ provides a panoramic, high-altitude view of customary nutrient intake over months or years, but lacks the granular, meal-by-meal precision required to calculate specific insulin-to-carbohydrate ratios or fine-tune daily renal electrolyte allowances.',
              'কোনো একক পদ্ধতিই সম্পূর্ণ স্বয়ংসম্পূর্ণ নয় [2]। কেবল একটি দিনের ২৪ ঘণ্টার রিকল দিয়ে একজন মানুষের সারা জীবনের চিরস্থায়ী অভ্যাস জানা অসম্ভব, কারণ সেই নির্দিষ্ট দিনে হয়তো কোনো উৎসব ছিল, রোগী ভ্রমণে ছিলেন কিংবা অসুস্থতার কারণে কম খেয়েছিলেন। পক্ষান্তরে, একটি এফএফকিউ দীর্ঘ কয়েক মাস বা বছরের খাদ্যাভ্যাসের সামগ্রিক চিত্র তুলে ধরে ঠিকই, কিন্তু ডায়াবেটিসের নিখুঁত ইনসুলিন সমন্বয় বা কিডনি রোগীর দৈনিক সোডিয়াম-পটাসিয়াম নিয়ন্ত্রণের জন্য যে সুনির্দিষ্ট গ্রামভিত্তিক তথ্য প্রয়োজন, তা দিতে পারে না।'
            ),
          ],
          bullets: [
            l(
              'The 24-Hour Dietary Recall: An in-depth, structured retrospective interview capturing every single morsel of food and drop of liquid ingested over the preceding 24 hours. Strength: exceptional granular detail regarding brands, cooking methods, and timing. Limitation: high day-to-day variability requiring multiple non-consecutive days to represent habitual intake.',
              '২৪-ঘণ্টার ডায়েটারি রিকল (24-Hour Recall): গত ২৪ ঘণ্টায় মুখে নেওয়া প্রতিটি খাবার ও পানীয়ের অত্যন্ত বিস্তারিত অতীতমুখী সাক্ষাৎকার। সুবিধা: ব্রান্ড, রান্নার প্রণালী ও খাওয়ার সঠিক সময় অত্যন্ত নিখুঁতভাবে জানা যায়। সীমাবদ্ধতা: একটি দিনের খাদ্যাভ্যাস দৈনন্দিন স্বাভাবিক অভ্যাসের চেয়ে ভিন্ন হতে পারে, তাই নির্ভুল চিত্র পেতে একাধিক দিনের রিকল প্রয়োজন।'
            ),
            l(
              'The Food Frequency Questionnaire (FFQ): A standardized survey asking patients how frequently (e.g., never, 1-3 times per month, once weekly, 2-3 times daily) they consume a predetermined catalog of specific food items. Strength: captures long-term nutritional patterns and seasonal variations across months or years. Limitation: relies on memory generalization and lacks precise daily gram measurements.',
              'ফুড ফ্রিকোয়েন্সি প্রশ্নমালা (FFQ): একটি প্রমিত প্রশ্নতালিকা যেখানে নির্দিষ্ট খাবারের তালিকা দেখে রোগী জানান তিনি সেগুলো কত ঘন ঘন খান (যেমন: কখনোই না, মাসে ১-৩ বার, সপ্তাহে একবার বা দিনে ২-৩ বার)। সুবিধা: দীর্ঘমেয়াদী পুষ্টির প্রবণতা ও ঋতুভিত্তিক খাদ্যাভ্যাস বোঝা যায়। সীমাবদ্ধতা: অনুমানের ওপর নির্ভর করে এবং এতে প্রতিদিনের সুনির্দিষ্ট গ্রামের পরিমাপ থাকে না।'
            ),
            l(
              'Weighed Food Records (WFR): A prospective assessment where the patient weighs every raw and cooked ingredient on digital scales calibrated to ± 1.0 g before eating, and weighs plate waste afterward. Strength: gold-standard precision for direct observation. Limitation: massive participant burden leading to behavioral reactivity (altering eating habits to avoid the chore of weighing).',
              'ওজনভিত্তিক ফুড রেকর্ড (Weighed Food Record): একটি ভবিষ্যৎমুখী পদ্ধতি যেখানে রোগী খাওয়ার ঠিক আগে ডিজিটাল স্কেলে (± ১.০ গ্রাম) প্রতিটি খাবারের ওজন মেপে খাতায় লেখেন এবং খাওয়ার পর ফেলে দেওয়া অংশের ওজন বাদ দেন। সুবিধা: পর্যবেক্ষণে সর্বোচ্চ বৈজ্ঞানিক নির্ভুলতা। সীমাবদ্ধতা: রোগীকে প্রচুর শ্রম দিতে হয়, যার ফলে বারবার ওজন করার ঝামেলা এড়াতে রোগী খাওয়ার অভ্যাসই বদলে ফেলেন।'
            ),
          ],
        },
        {
          id: 'sec-underreporting-truth',
          heading: l(
            '3. The Social Mask: Why People Report Less Than They Actually Eat',
            '৩. সামাজিক মুখোশ: মানুষ কেন খাওয়ার চেয়ে কম তথ্য প্রকাশ করে?'
          ),
          paragraphs: [
            l(
              'The single most pervasive challenge in dietary assessment is the universal psychological instinct known as **underreporting** [3]. When individuals know their food choices are being documented and evaluated by a healthcare professional, an innate defense mechanism called "social desirability bias" is immediately triggered. Consciously or unconsciously, people want to present the best possible version of themselves.',
              'খাদ্যাভ্যাস মূল্যায়নের সবচেয়ে বড় ও সার্বজনীন মনস্তাত্ত্বিক চ্যালেঞ্জ হলো খাবার কম দেখানোর প্রবণতা বা **আন্ডার-রিপোর্টিং (Underreporting)** [3]। মানুষ যখন বুঝতে পারে যে তার খাবারের তালিকা কোনো স্বাস্থ্য বিশেষজ্ঞ বা পুষ্টিবিদ পর্যালোচনা করছেন, তখন অবচেতনভাবেই মনের ভেতর "সোশ্যাল ডিজায়ারেবিলিটি বায়াস" বা সামাজিক গ্রহণযোগ্যতা পাওয়ার তাড়না কাজ করে। মানুষ অবচেতনভাবেই নিজেকে একজন আদর্শ, নিয়ন্ত্রিত ও স্বাস্থ্য সচেতন ব্যক্তি হিসেবে উপস্থাপন করতে চায়।'
            ),
            l(
              'Consequently, patients routinely minimize portion sizes of foods they perceive as sinful or harmful—such as sweets, chocolates, fried snacks, and sodas—while selectively emphasizing or exaggerating foods they view as virtuous, such as fresh salads, boiled vegetables, and lean proteins [1, 3]. Expert dietitians understand that underreporting is not deliberate deceit or malice; it is a fundamental human vulnerability. The clinician’s role is never to act as an interrogator, police officer, or judge, but as an empathic ally who creates a safe, non-judgmental sanctuary where the honest truth can emerge without shame.',
              'ফলে রোগীরা মিষ্টি, চকলেট, তেলে ভাজা স্ন্যাক্স বা কোল্ড ড্রিঙ্কসের মতো খাবারগুলোর কথা চেপে যান বা পরিমাণ অনেক কম বলেন; অথচ সালাদ, শাকসবজি বা স্বাস্থ্যকর প্রোটিন খাওয়ার কথা বাড়িয়ে বলেন [1, 3]। অভিজ্ঞ পুষ্টিবিদরা জানেন যে এই কম বলা কোনো অন্যায় বা ইচ্ছাকৃত প্রতারণা নয়; এটি মানুষের মনস্তাত্ত্বিক আত্মরক্ষার স্বাভাবিক অংশ। তাই চিকিৎসকের দায়িত্ব কোনো পুলিশ কর্মকর্তা বা বিচারকের মতো জেরা করা নয়; বরং একটি নিরাপদ, সহমর্মিতাপূর্ণ পরিবেশ তৈরি করা যেখানে রোগী কোনো লজ্জা বা সংকোচ ছাড়াই তার প্রকৃত খাদ্যাভ্যাস খুলে বলতে পারেন।'
            ),
          ],
          bullets: [
            l(
              'Social Desirability Bias: The psychological compulsion to report behaviors aligned with social approval while concealing behaviors perceived as taboo or unhealthy.',
              'সোশ্যাল ডিজায়ারেবিলিটি বায়াস: সমাজে প্রশংসিত কাজগুলো বেশি করে দেখানো এবং যা অস্বাস্থ্যকর বা নিয়ন্ত্রণের অভাব হিসেবে গণ্য হয় তা সচেতন বা অবচেতনভাবে গোপন করার মানসিক প্রবণতা।'
            ),
            l(
              'Selective Micronutrient Omission: Fat, refined sugar, and alcohol are omitted at rates two to three times higher than protein or fiber, distorting macronutrient calculations.',
              'নির্দিষ্ট উপাদানের গোপনীয়তা: চর্বি, পরিশোধিত চিনি ও অ্যালকোহল গোপন করার হার প্রোটিন বা আঁশের চেয়ে দুই থেকে তিন গুণ বেশি, যা খাদ্যের মোট ক্যালোরির চিত্র সম্পূর্ণ বিকৃত করে দেয়।'
            ),
            l(
              'The Guilt Reflex: The emotional distress of eating off-plan foods during stress often leads to psychological dissociation, where the patient genuinely forgets the eating episode.',
              'অপরাধবোধজনিত বিস্মৃতি: মানসিক চাপের সময় অনিয়ন্ত্রিত খাবার খেলে যে তীব্র অপরাধবোধ তৈরি হয়, তা মনস্তাত্ত্বিক প্রতিরক্ষার অংশ হিসেবে মস্তিষ্ক অনেক সময় সত্যই স্মৃতি থেকে সরিয়ে দেয়।'
            ),
            l(
              'Compassionate Interviewing: The clinician achieves diagnostic accuracy by replacing judgmental scrutiny with warm curiosity, asking open-ended questions like "Tell me about what you enjoyed drinking yesterday."',
              'সহমর্মিতাপূর্ণ সাক্ষাৎকার: কোনো বিচারমূলক ভঙ্গি না দেখিয়ে বন্ধুত্বপূর্ণ ও খোলামেলা প্রশ্ন করার মাধ্যমে (যেমন "গতকাল চা বা পানীয়ের সাথে কী কী উপভোগ করেছিলেন?") চিকিৎসক সঠিক তথ্য বের করে আনেন।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-intake-modalities',
          heading: l(
            '1. The Five Steps of the USDA Automated Multiple-Pass Method (AMPM)',
            '১. ইউএসডিএ অটোমেটেড মাল্টিপল-পাস মেথডের (AMPM) পাঁচটি বৈজ্ঞানিক ধাপ'
          ),
          paragraphs: [
            l(
              'To eliminate the haphazard biases of informal conversations, the United States Department of Agriculture (USDA) developed the Automated Multiple-Pass Method (AMPM) [1]. Rigorously validated in major epidemiological surveys including NHANES, the AMPM is universally recognized as the clinical gold standard for conducting 24-hour dietary recalls. Rather than asking a single overwhelming question, the AMPM guides the patient through five distinct, structured cognitive passes, each designed to activate different retrieval pathways in human long-term and working memory.',
              'অনানুষ্ঠানিক আলোচনার বিশৃঙ্খলা ও স্মৃতিভ্রম দূর করতে যুক্তরাষ্ট্রের কৃষি বিভাগ (USDA) উদ্ভাবন করে অটোমেটেড মাল্টিপল-পাস মেথড (AMPM) [1]। বিশ্ববিখ্যাত এনহ্যান্স (NHANES) গবেষণায় প্রমাণিত এই পদ্ধতিটি আন্তর্জাতিকভাবে ২৪ ঘণ্টার খাদ্য রিকল গ্রহণের বৈজ্ঞানিক মানদণ্ড হিসেবে স্বীকৃত। রোগীকে একবারে কঠিন প্রশ্ন করার পরিবর্তে, এএমপিএম মানুষের দীর্ঘমেয়াদী ও কার্যকরী স্মৃতির বিভিন্ন স্তরকে ধাপে ধাপে জাগ্রত করার জন্য পাঁচটি ধারাবাহিক পাস বা ধাপে পরিচালনা করে।'
            ),
            l(
              'Crucially, the method systematically separates the recollection of food items from the cognitive burden of estimating portion sizes [1, 2]. By deferring portion measurements to the fourth pass, the patient’s initial recall flow remains uninterrupted. During the detail cycle, standardized three-dimensional food models, concentric circle charts, thickness indicators, and calibrated graduated measuring vessels are deployed to anchor spatial volume perceptions, slashing reporting variance by over 40%.',
              'সবচেয়ে তাৎপর্যপূর্ণ বিষয় হলো, এই পদ্ধতিটি খাবার মনে করার প্রক্রিয়াকে খাবারের ওজন বা পরিমাণ নির্ধারণের মানসিক চাপ থেকে সম্পূর্ণ আলাদা রাখে [1, 2]। ৪র্থ ধাপের আগে পরিমাণের কথা না তোলায় রোগী কোনো মানসিক ক্লান্তি ছাড়াই সাবলীলভাবে খাবারের নাম মনে করতে পারেন। পরবর্তীতে ৪র্থ ধাপে ত্রিমাত্রিক বাটি, প্লেট, জ্যামিতিক নকশা ও চামচের মডেল দেখিয়ে খাবারের সঠিক আয়তন নির্ণয় করা হয়, যা তথ্যের ভুল প্রায় ৪০% কমিয়ে আনে।'
            ),
          ],
          bullets: [
            l(
              'Pass 1: Quick Food List. The patient provides an uninterrupted, free-recall stream of everything eaten and drunk between midnight and midnight of the previous day. The interviewer never interrupts or asks about portions, preserving pure memory flow.',
              'পাস ১: দ্রুত খাবারের তালিকা (Quick Food List): রোগী কোনো বাধা ছাড়াই গতকালের সারাদিন ও রাতে খাওয়া সমস্ত খাবারের নাম একটানা মুখে বলেন। চিকিৎসক এই ধাপে কোনো প্রশ্ন বা পরিমাণের কথা জিজ্ঞাসা করে তার স্মৃতির স্বাভাবিক প্রবাহে ব্যাঘাত ঘটান না।'
            ),
            l(
              'Pass 2: Forgotten Foods Probe. The interviewer systematically asks targeted, non-threatening questions about commonly forgotten food categories: alcoholic beverages, soda/juice, afternoon biscuits, midnight bites, condiments, sauces, and candies.',
              'পাস ২: ভুলে যাওয়া খাবারের অনুসন্ধান (Forgotten Foods Probe): চিকিৎসক অত্যন্ত নম্রভাবে কয়েকটি বিশেষ খাবার সম্পর্কে জিজ্ঞাসা করেন যা মানুষ প্রায়ই ভুলে যায়: চা-কফির চিনি, কোমল পানীয়, মিষ্টি, বিস্কুট, রান্নার সস, চিপস ও মধ্যরাতের স্ন্যাক্স।'
            ),
            l(
              'Pass 3: Time and Occasion Grouping. The listed foods are anchored chronologically to specific meal occasions (e.g., breakfast, mid-morning snack, lunch) and daily routines (e.g., waking up, driving to work, watching evening television).',
              'পাস ৩: সময় ও উপলক্ষ বিন্যাস (Time & Occasion Grouping): খাবারগুলোকে ঘড়ির সময় ও দৈনন্দিন অভ্যাসের সাথে মিলিয়ে সাজানো হয় (যেমন ঘুম থেকে উঠে, অফিসে কাজের ফাঁকে, দুপুরের খাবারের সময় বা সন্ধ্যায় টিভি দেখার সময়)।'
            ),
            l(
              'Pass 4: Detail and Review Cycle. For every item, precise details are documented: commercial brand name, exact ingredients, cooking fats used (ghee, butter, mustard oil, soybean oil), cooking method (deep-fried, grilled, steamed), and portion size aided by 3D visual models.',
              'পাস ৪: বিস্তারিত তথ্য ও পরিমাপ (Detail Cycle): প্রতিটি খাবারের নিখুঁত বিবরণ নেওয়া হয়: খাবারের ব্রান্ড, প্রস্তুতপ্রণালী, রান্নার তেলের ধরন ও চামচের সংখ্যা, ভাজা নাকি সেদ্ধ এবং ত্রিমাত্রিক মডেল দেখে খাবারের সঠিক আকার ও বাটির পরিমাপ।'
            ),
            l(
              'Pass 5: Final Review Probe. A comprehensive review of the entire 24-hour chronological arc is conducted, actively searching for unexplained time lapses (e.g., "Between your 1:00 PM lunch and 9:00 PM dinner, did you have any tea or snacks?").',
              'পাস ৫: চূড়ান্ত পর্যালোচনা (Final Review Probe): পুরো ২৪ ঘণ্টার দিনের শুরু থেকে রাত পর্যন্ত শেষবারের মতো মিলিয়ে দেখা হয় এবং দীর্ঘ বিরতিগুলোর শূন্যস্থান অনুসন্ধান করা হয় (যেমন "দুপুর ১টার লাঞ্চ থেকে রাত ৯টার ডিনারের মাঝে কি কোনো চা, বাদাম বা বিস্কুট খাওয়া হয়েছিল?")।'
            ),
          ],
        },
        {
          id: 'sec-bias-mechanisms',
          heading: l(
            '2. Cognitive Mechanics of Reporting Bias: The "Flat-Slope Syndrome"',
            '২. খাদ্য তথ্যের মানসিক বিচ্যুতি: "ফ্ল্যাট-স্লোপ সিন্ড্রোম" ও পদ্ধতিগত ত্রুটি'
          ),
          paragraphs: [
            l(
              'Dietary reporting errors in clinical interviews are not random statistical noise; they follow highly predictable, systematic socio-cognitive patterns [1, 3]. Across hundreds of clinical trials and population cohorts, nutritional epidemiologists have characterized this universal phenomenon as the **flat-slope syndrome**:',
              'ক্লিনিক্যাল সাক্ষাৎকারে খাবারের তথ্যের ভুলগুলো কোনো এলোমেলো বিভ্রান্তি নয়; এর পেছনে নিশ্চিত মনস্তাত্ত্বিক ও সামাজিক ধারা বিদ্যমান [1, 3]। শত শত ক্লিনিক্যাল গবেষণা ও বৈজ্ঞানিক নিরীক্ষায় পুষ্টিবিজ্ঞানীরা এই সার্বজনীন সত্যটিকে **ফ্ল্যাট-স্লোপ সিন্ড্রোম (Flat-Slope Syndrome)** নামে চিহ্নিত করেছেন:'
            ),
            l(
              'The underlying mechanics involve both cognitive failure and self-preservation [2, 3]. In individuals struggling with obesity or metabolic syndrome, food intake is frequently accompanied by internal shame, societal stigma, and medical pressure. When recalling food, the subconscious mind deploys memory suppression, collapsing portion size memories and erasing in-between snacks. Conversely, underweight or malnourished patients feel acute anxiety about appearing frail, subconsciously inflating their intake to convince caregivers and clinicians of their vitality.',
              'এই ভুলের পেছনে স্মৃতিবিভ্রম এবং মনস্তাত্ত্বিক আত্মরক্ষা উভয়ই সক্রিয় থাকে [2, 3]। অতিরিক্ত ওজন বা মেটাবলিক সিন্ড্রোমে আক্রান্ত ব্যক্তিদের খাদ্যাভ্যাস প্রায়ই অপরাধবোধ, সমাজের তিরস্কার এবং চিকিৎসকের চাপের সাথে যুক্ত থাকে। ফলে তাদের অবচেতন মন অতিরিক্ত খাবার বা স্ন্যাক্সের স্মৃতি দমিয়ে রাখে এবং পরিমাপ ছোট করে ফেলে। অন্যদিকে, অপুষ্টি বা মারাত্মক রোগা ব্যক্তিরা নিজেদের দুর্বল বা অসুস্থ প্রমাণ হওয়ার ভয়ে অবচেতনভাবেই খাবার বেশি খাওয়ার দাবি করেন, যাতে চিকিৎসক সন্তুষ্ট হন।'
            ),
          ],
          bullets: [
            l(
              'Flat-Slope Pattern in Underweight Individuals: Lean or malnourished patients consistently OVERREPORT their true dietary intake by 10% to 25%, attempting to demonstrate adequate nourishment.',
              'কম ওজনের মানুষের প্রবণতা: অপুষ্টি বা কম ওজনের রোগীরা নিজেদের সুস্থ প্রমাণ করার তাগিদে তাদের প্রকৃত খাবারের চেয়ে ১০% থেকে ২৫% বেশি খাবার দাবি করেন।',
            ),
            l(
              'Flat-Slope Pattern in Overweight/Obese Individuals: Patients with elevated body mass index (BMI) consistently UNDERREPORT their true dietary energy intake by 25% to 50%, with higher BMI correlating directly with greater magnitude of underreporting.',
              'স্থূল ও অতিরিক্ত ওজনের মানুষের প্রবণতা: অতিরিক্ত ওজনের মানুষেরা তাদের প্রকৃত ক্যালোরি গ্রহণের চেয়ে ২৫% থেকে ৫০% কম খাবার প্রদর্শন করেন; বিএমআই যত বেশি হয়, খাবার কম দেখানোর মাত্রাও তত বৃদ্ধি পায়।',
            ),
            l(
              'Selective Substrate Distortion: High-fat, calorie-dense foods (pastries, deep-fried snacks, oils, sweets) are omitted at alarming rates, whereas healthy items (fruits, salads, water) are reported with complete or exaggerated fidelity.',
              'নির্দিষ্ট উপাদানের বৈষম্যমূলক বিকৃতি: চর্বিযুক্ত ও অতি-ক্যালোরিবহুল খাবার (মিষ্টি, তেলে ভাজা খাবার, ড্রেসিং) ব্যাপকভাবে গোপন করা হয়; অথচ ফলমূল বা সালাদ অত্যন্ত যত্ন সহকারে বেশি করে দেখানো হয়।',
            ),
            l(
              'Epidemiological Impact: Unadjusted self-reported dietary recalls artificially flatten dose-response curves in clinical research, frequently obscuring the true pathogenic relationships between dietary fats, sugars, and chronic disease.',
              'গবেষণায় ক্ষতিকর প্রভাব: এই মনস্তাত্ত্বিক ভুল সমন্বয় না করে কাঁচা তথ্যের ওপর নির্ভর করলে চিকিৎসাবিজ্ঞানের গবেষণায় খাদ্য ও রোগের প্রকৃত সম্পর্কের সমীকরণ সম্পূর্ণ গুলিয়ে যায়।',
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-goldberg-biomarkers',
          heading: l(
            '1. The Goldberg Cut-off Equation and Doubly Labeled Water (²H₂¹⁸O)',
            '১. গোল্ডবার্গ কাট-অফ সমীকরণ ও ডাবলি লেবেলড ওয়াটার (²H₂¹⁸O) দ্বারা সত্যতা যাচাই'
          ),
          paragraphs: [
            l(
              'To elevate dietary evaluation from subjective guesswork into objective clinical science, investigators rely on fundamental principles of human energy physiology and the First Law of Thermodynamics [3, 5]. In 1991, Goldberg and colleagues established a mathematical boundary that defines the absolute minimum energy intake required for human survival at a stable body weight, known worldwide as the **Goldberg Cut-off Equation** [3]:',
              'খাদ্যাভ্যাসের মূল্যায়নকে অনুমানের স্তর থেকে নিখুঁত বিজ্ঞানে উন্নীত করতে গবেষকরা মানবদেহের শক্তি শারীরবৃত্তি এবং তাপগতিবিদ্যার প্রথম সূত্রের ওপর নির্ভর করেন [3, 5]। ১৯৯১ সালে বিজ্ঞানী গোল্ডবার্গ ও তার সহকর্মীরা একটি গাণিতিক সমীকরণ উদ্ভাবন করেন যা স্থির ওজনে বেঁচে থাকার জন্য একজন মানুষের ন্যূনতম প্রয়োজনীয় ক্যালোরির নিম্নসীমা নির্ধারণ করে, যা চিকিৎসাবিজ্ঞানে **গোল্ডবার্গ কাট-অফ সূত্র (Goldberg Cut-off Equation)** নামে পরিচিত [3]:'
            ),
            l(
              'Goldberg Index = Reported Energy Intake (EI) / Basal Metabolic Rate (BMR)',
              'গোল্ডবার্গ সূচক = দাবিকৃত দৈনিক ক্যালোরি গ্রহণ (EI) / বেসাল মেটাবলিক রেট (BMR)'
            ),
            l(
              'Basal Metabolic Rate (BMR) represents the absolute cellular energy expended merely to maintain life—driving cardiac contraction, pulmonary respiration, ion pump gradients, and cellular protein synthesis in a completely motionless, resting state. In free-living ambulatory humans, the physical act of getting out of bed, walking, standing, and digesting food (the thermic effect of food) requires an additional 20% to 30% expenditure above BMR [3, 5]. Therefore, for an individual maintaining a stable body weight over days or weeks, a ratio of Energy Intake to BMR (EI : BMR) falling below 1.20 is thermodynamically impossible. A value below 1.20 mathematically proves one of two clinical realities: either the patient is actively undergoing acute starvation and shedding substantial somatic tissue, or the reported dietary recall is invalid due to massive underreporting bias.',
              'বেসাল মেটাবলিক রেট (BMR) হলো কোনো নড়াচড়া ছাড়া সম্পূর্ণ বিশ্রামে থাকা অবস্থায় কেবল কোষের জীবন বাঁচিয়ে রাখার জন্য (হৃদস্পন্দন, শ্বাসপ্রশ্বাস, মস্তিষ্কের কাজ ও আয়ন পাম্প চালু রাখা) প্রয়োজনীয় শক্তি। কিন্তু সুস্থ মানুষ বিছানা থেকে ওঠে, হাঁটে, দাঁড়ায় এবং খাবার হজম করে (খাবারের থার্মিক ইফেক্ট), যার জন্য BMR-এর ওপর আরও কমপক্ষে ২০% থেকে ৩০% অতিরিক্ত ক্যালোরি খরচ হয় [3, 5]। সুতরাং, কোনো ব্যক্তির ওজন যদি দীর্ঘদিন স্থির থাকে, তবে তার ক্যালোরি গ্রহণ ও BMR-এর অনুপাত (EI : BMR) কখনোই ১.২০-এর নিচে নামতে পারে না। এই অনুপাত ১.২০-এর নিচে নামলে পদার্থবিজ্ঞানের নিয়মে মাত্র দুটি ঘটনা সম্ভব: হয় রোগী অনাহারে দিন কাটাচ্ছেন এবং তার শরীরের পেশি ও চর্বি দ্রুত ক্ষয় হচ্ছে, অথবা তিনি খাবারে যা খেয়েছেন তার চেয়ে অনেক কম তথ্য প্রকাশ করেছেন।'
            ),
            l(
              'In rigorous clinical research, the undeniable gold standard for measuring true Total Energy Expenditure (TEE) in free-living humans is **Doubly Labeled Water (²H₂¹⁸O)** [4]. Subjects drink a measured dose of water enriched with stable non-radioactive isotopes: deuterium (²H) and oxygen-18 (¹⁸O). Because deuterium is eliminated from the body exclusively as water (urine, sweat, breath vapor), while oxygen-18 is eliminated as both water and carbon dioxide (CO₂ produced during substrate oxidation in the Krebs cycle), the difference in their biological clearance rates allows precise calculation of carbon dioxide production. Using Weir’s respiratory equation, true metabolic energy expenditure is determined with an accuracy error of less than 1%, definitively exposing any dietary underreporting.',
              'ক্লিনিক্যাল গবেষণায় মানুষের মোট শক্তি ব্যয়ের (TEE) পরম বৈজ্ঞানিক সত্যতা যাচাইয়ের সেরা পদ্ধতি হলো **ডাবলি লেবেলড ওয়াটার (²H₂¹⁸O)** [4]। রোগীকে দুটি নিরাপদ অ-তেজস্ক্রিয় আইসোটোপযুক্ত পানি খাওয়ানো হয়: ডিউটেরিয়াম (²H) এবং অক্সিজেন-১৮ (¹⁸O)। ডিউটেরিয়াম শরীর থেকে কেবল পানি হিসেবে (ঘাম, প্রস্রাব ও শ্বাস) বের হয়; কিন্তু অক্সিজেন-১৮ পানি হিসেবেও বের হয় এবং কোষের শক্তি উৎপাদনে তৈরি কার্বন ডাই-অক্সাইড (CO₂) হিসেবেও ফুসফুস দিয়ে বের হয়। এই দুই আইসোটোপ শরীর থেকে বের হয়ে যাওয়ার গতির পার্থক্য হিসাব করে শরীরে তৈরি CO₂-এর সঠিক পরিমাণ জানা যায়। এর মাধ্যমে ১%-এরও কম ভুলের নিখুঁত মানদণ্ডে মানুষের ২৪ ঘণ্টার প্রকৃত ক্যালোরি খরচ পরিমাপ করা যায়, যা খাদ্যের কম তথ্য প্রদর্শনের সমস্ত বিভ্রান্তি ভেঙে দেয়।'
            ),
          ],
          bullets: [
            l(
              'Goldberg Cut-off Threshold: An EI : BMR ratio < 1.20 in a weight-stable individual definitively proves underreporting, as sustaining life below this floor without weight loss violates the conservation of energy.',
              'গোল্ডবার্গ কাট-অফ সীমা: ওজন স্থির থাকা অবস্থায় EI : BMR অনুপাত ১.২০-এর কম হলে তা নিশ্চিত আন্ডার-রিপোর্টিং নির্দেশ করে, কারণ ওজন ক্ষয় ছাড়া এই সীমার নিচে বেঁচে থাকা শক্তির নিত্যতা সূত্রের বিরোধী।'
            ),
            l(
              'Physical Activity Level (PAL) Factor: Sedentary adults exhibit an average PAL of 1.40 to 1.55, moderately active adults 1.60 to 1.75, and vigorously active individuals > 1.80, making reported ratios of 0.70 to 1.00 glaringly absurd.',
              'শারীরিক পরিশ্রমের মাত্রা (PAL): অলস বসে থাকা মানুষের ক্ষেত্রেও দৈনিক খরচের অনুপাত ১.৪০ থেকে ১.৫৫; মাঝারি পরিশ্রমীদের ১.৬০ থেকে ১.৭৫; তাই কোনো রোগীর তথ্যে ০.৭০ থেকে ১.০০ অনুপাত পাওয়া চরম অবাস্তব।'
            ),
            l(
              'Doubly Labeled Water Kinetics: ²H clearance tracks total body water turnover, while ¹⁸O clearance tracks water turnover PLUS carbon dioxide generation from cellular respiration.',
              'ডাবলি লেবেলড ওয়াটারের কার্যপ্রণালী: ²H আইসোটোপ কেবল পানির নির্গমন নির্দেশ করে, অথচ ¹⁸O আইসোটোপ পানির পাশাপাশি কোষীয় বিপাকে তৈরি কার্বন ডাই-অক্সাইড নির্গমন নির্দেশ করে।'
            ),
            l(
              'Validation Benchmark: DLW studies reveal that self-reported dietary tools in clinical populations systematically underestimate actual total energy expenditure by an average of 20% to 35%.',
              'গবেষণার অকাট্য প্রমাণ: ডাবলি লেবেলড ওয়াটার গবেষণায় দেখা গেছে সাধারণ মানুষ নিজেদের খাবারে যে পরিমাণ শক্তির দাবি করে, তাদের শরীর প্রকৃতপক্ষে তার চেয়ে ২০% থেকে ৩৫% বেশি শক্তি খরচ করে চলেছে।'
            ),
          ],
        },
        {
          id: 'sec-nitrogen-recovery',
          heading: l(
            '2. Biomarker Recovery Models: 24-Hour Urinary Nitrogen for Protein Validation',
            '২. প্রোটিন গ্রহণের সত্যতা যাচাইয়ে ২৪-ঘণ্টার ইউরিনারি নাইট্রোজেন রিকভারি মডেল'
          ),
          paragraphs: [
            l(
              'While energy intake is verified against Doubly Labeled Water, protein intake possesses its own objective, mathematically precise biological ledger: **24-hour urinary nitrogen excretion** [4]. Dietary protein is composed of amino acids, which uniquely contain approximately 16% elemental nitrogen by weight. When the human body metabolizes amino acids for energy or tissue turnover in a healthy adult maintaining steady protein balance, the excess nitrogen cannot be stored as a gas or fat deposit. It is converted by the liver into urea and excreted quantitatively in the urine.',
              'ক্যালোরির সত্যতা যেমন ডাবলি লেবেলড ওয়াটার দিয়ে যাচাই করা যায়, তেমনি প্রোটিনের ক্ষেত্রেও প্রকৃতির একটি অকাট্য হিসাবের খাতা রয়েছে: **২৪-ঘণ্টার প্রস্রাবের নাইট্রোজেন নির্গমন (24-Hour Urinary Nitrogen)** [4]। খাদ্যের প্রোটিন অ্যামিনো অ্যাসিড দিয়ে তৈরি, যার ওজনের প্রায় ১৬% হলো নাইট্রোজেন। প্রাপ্তবয়স্ক সুস্থ মানুষের শরীরে নাইট্রোজেন গ্যাস বা চর্বি হিসেবে জমা থাকতে পারে না। অতিরিক্ত নাইট্রোজেন লিভারে ইউরিয়াতে রূপান্তরিত হয় এবং শতভাগ প্রস্রাবের মাধ্যমে শরীর থেকে বের হয়ে যায়।'
            ),
            l(
              'Because nitrogen excretion is directly coupled to protein turnover, measuring 24-hour Urinary Urea Nitrogen (UUN) yields an unbiased recovery biomarker [4]. Accounting for minimal obligatory non-urinary nitrogen losses through feces, shed skin cells, and sweat (standardized at 2.0 grams of nitrogen per day), clinicians calculate true dietary protein intake using the universal protein recovery formula:',
              'যেহেতু নাইট্রোজেনের নির্গমন সরাসরি প্রোটিন ব্যবহারের ওপর নির্ভরশীল, তাই ২৪ ঘণ্টার প্রস্রাবের নাইট্রোজেন পরিমাপ একটি সম্পূর্ণ নিরপেক্ষ বৈজ্ঞানিক নির্দেশক [4]। মল, ঘাম এবং ত্বকের মৃত কোষের মাধ্যমে প্রতিদিন শরীর থেকে স্বাভাবিকভাবে যে সামান্য পরিমাণ নাইট্রোজেন নষ্ট হয় (ধরে নেওয়া হয় দৈনিক ২.০ গ্রাম), তা যোগ করে বিশ্বস্বীকৃত সূত্রের মাধ্যমে রোগীর প্রকৃত প্রোটিন গ্রহণের পরিমাণ বের করা হয়:'
            ),
            l(
              'Estimated Dietary Protein (g/day) = (24-hour Urinary Nitrogen [g] + 2.0 g non-urinary loss) × 6.25',
              'প্রকৃত প্রোটিন গ্রহণ (গ্রাম/দিন) = (২৪ ঘণ্টার প্রস্রাবের নাইট্রোজেন [গ্রাম] + ২.০ গ্রাম অপচয়) × ৬.২৫'
            ),
            l(
              'The factor 6.25 arises directly from the 16% nitrogen concentration in standard mixed proteins (100 / 16 = 6.25). If a patient submitting a 3-day food diary reports consuming an average of 45 grams of protein per day, but their verified 24-hour urinary nitrogen output is 14.0 grams, the arithmetic unmasks the clinical reality: (14.0 + 2.0) × 6.25 = 100 grams of true protein intake per day. The patient actually consumed more than double their reported protein, conclusively proving that their dietary record suffers from profound portion omission rather than metabolic dysfunction.',
              '৬.২৫ গুণকটি এসেছে প্রোটিনে ১৬% নাইট্রোজেন থাকার কারণে (১০০ / ১৬ = ৬.২৫)। ধরা যাক, কোনো রোগী তার ফুড ডায়েরিতে দাবি করলেন তিনি দিনে মাত্র ৪৫ গ্রাম প্রোটিন খেয়েছেন। কিন্তু তার ২৪ ঘণ্টার প্রস্রাব পরীক্ষা করে ১৪.০ গ্রাম নাইট্রোজেন পাওয়া গেল। গাণিতিক সত্যটি তৎক্ষণাৎ ধরা পড়ে: (১৪.০ + ২.০) × ৬.২৫ = ১০০ গ্রাম প্রকৃত প্রোটিন। অর্থাৎ রোগী তার দাবির দ্বিগুণেরও বেশি প্রোটিন খেয়েছেন। এটি অকাট্যভাবে প্রমাণ করে যে রোগীর মেটাবলিজমে কোনো রোগ নেই; বরং তিনি খাবারের পরিমাণের তথ্য ভুল দিয়েছেন।'
            ),
          ],
          bullets: [
            l(
              'Recovery Biomarker Status: Urinary nitrogen is classified as a true "recovery biomarker" because it is directly related to intake and quantitatively excreted with zero variable metabolic pooling.',
              'রিকভারি বায়োমার্কার: প্রস্রাবের নাইট্রোজেন একটি খাঁটি "রিকভারি বায়োমার্কার", কারণ এটি খাবারের প্রোটিনের সাথে সরাসরি যুক্ত এবং কোনো তারতম্য ছাড়া পুরোটা পরিমাপযোগ্যভাবে বের হয়ে আসে।'
            ),
            l(
              'Inviolable Mass Balance: Nitrogen input must equal nitrogen output in weight-stable adults. An adult cannot excrete 100 g worth of protein nitrogen while only consuming 45 g without massive muscle breakdown.',
              'নাইট্রোজেন ভারসাম্যের অলঙ্ঘনীয় সূত্র: স্থির ওজনের সুস্থ ব্যক্তির দেহে গৃহীত নাইট্রোজেন ও নির্গত নাইট্রোজেন সমান হতে হবে; ৪৫ গ্রাম প্রোটিন খেয়ে ১০০ গ্রামের নাইট্রোজেন নির্গমন মারাত্মক পেশি ক্ষয় ছাড়া শারীরবৃত্তীয়ভাবে অসম্ভব।'
            ),
            l(
              'Completeness Verification via PABA: To ensure the 24-hour urine collection is completely captured and not missing voids, para-aminobenzoic acid (PABA) tablets are co-ingested, requiring > 85% urinary recovery to confirm specimen validity.',
              'প্রস্রাব সংগ্রহের পূর্ণতা যাচাই: রোগী সারাদিনের সব প্রস্রাব সঠিকভাবে বোতলে জমিয়েছেন কি না তা নিশ্চিত করতে প্যারা-অ্যামিনোবেনজয়িক অ্যাসিড (PABA) ট্যাবলেট খাওয়ানো হয়, যার ৮৫%-এর বেশি প্রস্রাবে পাওয়া গেলে সংগ্রহটি নির্ভুল প্রমাণিত হয়।'
            ),
            l(
              'Dual Validation Synergy: Combining the Goldberg index (for overall energy) with 24-hour urinary nitrogen (for protein) provides an unassailable framework that resolves diagnostic confusion in challenging metabolic patients.',
              'যুগ্ম বৈজ্ঞানিক শক্তি: গোল্ডবার্গ সূত্রের সাথে প্রস্রাবের নাইট্রোজেন পরীক্ষার সমন্বয় জটিল রোগীদের ক্ষেত্রে পুষ্টিবিদকে সম্পূর্ণ নিরপেক্ষ ও নির্ভুল চিকিৎসার দিকনির্দেশনা প্রদান করে।'
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. The Kitchen Detective & Memory Fallibility', '১. রান্নাঘরের গোয়েন্দা ও স্মৃতির সীমাবদ্ধতা'), sectionId: 'sec-measuring-diet' },
      { id: 'toc-2', label: l('2. 24-Hour Recall vs FFQ vs Weighed Records', '২. ২৪-ঘণ্টার রিকল, এফএফকিউ ও ফুড রেকর্ড'), sectionId: 'sec-recall-vs-ffq' },
      { id: 'toc-3', label: l('3. The Social Mask: Psychology of Underreporting', '৩. সামাজিক মুখোশ ও আন্ডার-রিপোর্টিংয়ের মনস্তত্ত্ব'), sectionId: 'sec-underreporting-truth' },
      { id: 'toc-4', label: l('4. USDA Automated Multiple-Pass Method (AMPM)', '৪. ইউএসডিএ অটোমেটেড মাল্টিপল-পাস মেথড'), sectionId: 'sec-intake-modalities' },
      { id: 'toc-5', label: l('5. The Flat-Slope Syndrome & Selective Biases', '৫. ফ্ল্যাট-স্লোপ সিন্ড্রোম ও তথ্যের বৈষম্যমূলক বিকৃতি'), sectionId: 'sec-bias-mechanisms' },
      { id: 'toc-6', label: l('6. Goldberg Cut-off Equation & Doubly Labeled Water', '৬. গোল্ডবার্গ কাট-অফ ও ডাবলি লেবেলড ওয়াটার'), sectionId: 'sec-goldberg-biomarkers' },
      { id: 'toc-7', label: l('7. 24-Hour Urinary Nitrogen for Protein Validation', '৭. ইউরিনারি নাইট্রোজেনের মাধ্যমে প্রোটিন প্রমাণ'), sectionId: 'sec-nitrogen-recovery' },
    ],
    terms: [
      {
        term: l('AMPM', 'এএমপিএম (AMPM)'),
        definition: l(
          'Automated Multiple-Pass Method; a standardized five-step interviewing protocol developed by the USDA that maximizes recall accuracy and portion quantification for 24-hour dietary data.',
          '২৪ ঘণ্টার খাদ্যতালিকা নির্ভুলভাবে সংগ্রহ করতে ইউএসডিএ উদ্ভাবিত পাঁচ ধাপের আন্তর্জাতিক প্রমিত সাক্ষাৎকার পদ্ধতি।'
        ),
      },
      {
        term: l('FFQ', 'এফএফকিউ (FFQ)'),
        definition: l(
          'Food Frequency Questionnaire; a retrospective dietary survey measuring the habitual consumption frequency of predefined food categories over months or years.',
          'নির্দিষ্ট কিছু খাদ্যের তালিকা কত ঘন ঘন খাওয়া হয় তা পরিমাপ করে দীর্ঘমেয়াদী পুষ্টির অভ্যাস জানার প্রশ্নমালা।'
        ),
      },
      {
        term: l('Goldberg Cut-off', 'গোল্ডবার্গ কাট-অফ (Goldberg Cut-off)'),
        definition: l(
          'A fundamental physiological threshold (Reported Energy Intake to BMR < 1.20) used in clinical nutrition to identify implausibly low energy intake representing severe underreporting.',
          'ক্যালোরি গ্রহণ ও বেসাল মেটাবলিজমের অনুপাতের শারীরবৃত্তীয় মান (EI : BMR < ১.২০), যা খাবার কম দেখানোর অসম্ভব তথ্য গাণিতিকভাবে শনাক্ত করে।'
        ),
      },
      {
        term: l('Doubly Labeled Water (DLW)', 'ডাবলি লেবেলড ওয়াটার (DLW)'),
        definition: l(
          'An isotopic technique (²H₂¹⁸O) providing the reference gold standard for measuring true total energy expenditure in free-living humans through carbon dioxide production kinetics.',
          'নিরাপদ আইসোটোপ নির্ভর পরীক্ষা যা স্বাভাবিক চলাফেরায় মানুষের ২৪ ঘণ্টার প্রকৃত মোট ক্যালোরি খরচ পরিমাপের আন্তর্জাতিক মানদণ্ড।'
        ),
      },
      {
        term: l('Flat-Slope Syndrome', 'ফ্ল্যাট-স্লোপ সিন্ড্রোম (Flat-Slope Syndrome)'),
        definition: l(
          'A universal systematic reporting bias where underweight individuals overestimate food intake while overweight individuals underestimate food intake by 25% to 50%.',
          'একটি সার্বজনীন মনস্তাত্ত্বিক ভুল যেখানে কম ওজনের মানুষ খাবার বেশি দেখায় এবং অতিরিক্ত ওজনের মানুষ প্রকৃত খাবারের চেয়ে ২৫% থেকে ৫০% কম তথ্য দেয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Applying Goldberg Cut-off & Urinary Nitrogen to Unmask Subconscious Reporting Bias',
          'বাস্তব কেস স্টাডি: গোল্ডবার্গ সূত্র ও ইউরিনারি নাইট্রোজেনের মাধ্যমে খাদ্যের অসত্য তথ্য উন্মোচন'
        ),
        steps: [
          l(
            'Step 1: Patient Profile & Claimed Intake. A 50-year-old male corporate executive (height = 178 cm, weight = 102 kg, BMI = 32.2 kg/m²) presents for medical nutrition therapy. He insists he "cannot lose weight despite eating strictly 1,200 kcal/day for the last six months." His self-recorded 3-day food diary reports an average intake of 1,180 kcal/day and 42 g protein/day.',
            'ধাপ ১: রোগীর বিবরণ: ৫০ বছর বয়সী অতিরিক্ত ওজনের পুরুষ (উচ্চতা ১৭৮ সেমি, ওজন ১০২ কেজি, বিএমআই ৩২.২ kg/m²) পুষ্টিবিদের কাছে এসে দাবি করেন তিনি "গত ৬ মাস ধরে দিনে মাত্র ১২০০ ক্যালোরি খেয়েও এক ছটাক ওজন কমাতে পারছেন না।" তার ডায়েরিতে গড় ক্যালোরি ১১৮০ kcal এবং প্রোটিন ৪২ গ্রাম লেখা রয়েছে।'
          ),
          l(
            'Step 2: Calculate Basal Metabolic Rate (BMR). Using the Mifflin-St Jeor equation for men: BMR = 10(102) + 6.25(178) - 5(50) + 5 = 1,020 + 1,112.5 - 250 + 5 = 1,887.5 kcal/day.',
            'ধাপ ২: বেসাল মেটাবলিক রেট (BMR) নির্ণয়: পুরুষদের মিফলিন সূত্রে হিসাব: BMR = ১০(১০২) + ৬.২৫(১৭৮) - ৫(৫০) + ৫ = ১০২০ + ১১১২.৫ - ২৫০ + ৫ = ১৮৮৭.৫ kcal/দিন।'
          ),
          l(
            'Step 3: Evaluate Goldberg Cut-off. The ratio of Reported Energy Intake to BMR is: EI : BMR = 1,180 / 1,887.5 = 0.625. Since 0.625 is far below the universal physiological survival floor of 1.20, this reported intake is mathematically incompatible with survival at a stable weight of 102 kg. If genuine, the patient would be in acute starvation, shedding approximately 1.5 kg of body tissue per week.',
            'ধাপ ৩: গোল্ডবার্গ অনুপাত হিসাব: EI : BMR = ১১৮০ / ১৮৮৭.৫ = ০.৬২৫। যেহেতু ০.৬২৫ মানুষের বেঁচে থাকার ন্যূনতম মান ১.২০-এর অনেক নিচে, তাই স্থির ওজনে এই তথ্য পদার্থবিজ্ঞানের নিয়মে অসম্ভব। রোগী সত্যিই তা খেলে প্রতি সপ্তাহে তার ১.৫ কেজি করে চর্বি ও পেশি ক্ষয় হতো।'
          ),
          l(
            'Step 4: Analyze 24-Hour Urinary Nitrogen Recovery. A simultaneous 24-hour urine collection reveals 15.2 g of nitrogen. Actual Protein Intake = (15.2 + 2.0) × 6.25 = 107.5 g protein/day. His actual protein consumption is 2.5 times higher than his claimed 42 g, proving major portions of food were unrecorded.',
            'ধাপ ৪: প্রস্রাবের নাইট্রোজেন বিশ্লেষণ: রোগীর ২৪ ঘণ্টার প্রস্রাবে ১৫.২ গ্রাম নাইট্রোজেন পাওয়া গেল। প্রকৃত প্রোটিন গ্রহণ = (১৫.২ + ২.০) × ৬.২৫ = ১০৭.৫ গ্রাম/দিন। অর্থাৎ তিনি তার দাবিকৃত ৪২ গ্রামের চেয়ে আড়াই গুণ বেশি প্রোটিন খেয়েছেন, যা প্রমাণ করে তার খাদ্যতালিকায় বিশাল ফাঁক ছিল।'
          ),
          l(
            'Step 5: Empathetic Clinical Counseling. Rather than arguing with the patient, the dietitian explains the biology: "Your metabolism is working wonderfully—your body is burning approximately 2,400 kcal/day, and your urine shows you are nourishing yourself with 108 g of protein. High-calorie cooking oils, coffee creamers, and evening snacks often enter our bodies without conscious awareness. Let us track these hidden energy sources together without stress."',
            'ধাপ ৫: সহমর্মিতাপূর্ণ কাউন্সেলিং: রোগীর সাথে কোনো তর্ক না করে পুষ্টিবিদ বুঝিয়ে বলেন: "আপনার শরীর দিনে প্রায় ২৪০০ ক্যালোরি খরচ করছে এবং আপনার শরীর নিশ্চিত করছে যে আপনি ১০৮ গ্রাম পুষ্টিকর প্রোটিন গ্রহণ করছেন। রান্নায় ব্যবহৃত তেল, কফির দুধ-চিনি বা বিকেলের স্ন্যাক্স আমাদের অজান্তেই পেটে চলে যায়। আসুন আমরা কোনো লজ্জা বা চাপ ছাড়াই সেই অদৃশ্য ক্যালোরিগুলো একসাথে খুঁজে বের করি।"'
          ),
        ],
        conclusion: l(
          'Applying the Goldberg cut-off and 24-hour urinary nitrogen biomarker transformed a frustrating clinical standoff into a therapeutic counseling breakthrough, successfully uncovering 1,200 kcal/day of unrecorded oils, sauces, and sweetened beverages.',
          'গোল্ডবার্গ সূত্র এবং প্রস্রাবের নাইট্রোজেন পরীক্ষার বৈজ্ঞানিক প্রয়োগ রোগীর সাথে চিকিৎসকের ভুল বোঝাবুঝি দূর করে একটি গভীর আস্থার সম্পর্ক তৈরি করে এবং খাবারে থাকা লুকানো ১২০০ ক্যালোরির উৎস (রান্নার তেল, সস ও মিষ্টি পানীয়) উন্মোচন করে সঠিক চিকিৎসার পথ দেখায়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does a Goldberg cutoff ratio (EI : BMR) below 1.20 indicate physiological underreporting in a weight-stable individual?',
          'ওজন স্থির থাকা কোনো ব্যক্তির ক্ষেত্রে গোল্ডবার্গ অনুপাত (EI : BMR) ১.২০-এর নিচে হলে কেন তা নিশ্চিত আন্ডার-রিপোর্টিং নির্দেশ করে?'
        ),
        answer: l(
          'Basal Metabolic Rate accounts solely for the cellular maintenance energy of an individual in a comatose, resting state. Even the most sedentary free-living adult expends an additional 20% to 30% of energy above BMR for minimal posture maintenance, walking, and the thermic effect of feeding (Total Energy Expenditure ≥ 1.20 × BMR). Therefore, maintaining a stable body mass on less than 1.20 × BMR is thermodynamically impossible; the patient is either in active, wasting starvation or is omitting dietary energy from their report.',
          'বেসাল মেটাবলিক রেট হলো কোমায় থাকা ব্যক্তির কেবল বেঁচে থাকার ন্যূনতম শক্তি। সবচেয়ে অলস মানুষেরও সামান্য চলাফেরা, বসা এবং খাবার হজমের জন্য BMR-এর চেয়ে কমপক্ষে ২০% থেকে ৩০% বেশি শক্তি খরচ হয় (মোট শক্তি খরচ ≥ ১.২০ × BMR)। তাই ওজন স্থির রেখে ১.২০ × BMR-এর কম খেয়ে বেঁচে থাকা পদার্থবিজ্ঞানের শক্তির নিত্যতা সূত্রের বিরোধী; রোগী হয় মারাত্মক অনাহারে শুকিয়ে যাচ্ছেন, নতুবা তিনি খাবারের তথ্য গোপন বা ভুল করেছেন।'
        ),
      },
      {
        question: l(
          'What is the fundamental limitation of a Food Frequency Questionnaire compared to an AMPM 24-hour recall in precision clinical diet planning?',
          'ব্যক্তিগত চিকিৎসাভিত্তিক ডায়েট চার্ট তৈরিতে ২৪ ঘণ্টার রিকলের তুলনায় ফুড ফ্রিকোয়েন্সি প্রশ্নমালার (FFQ) প্রধান সীমাবদ্ধতা কী?'
        ),
        answer: l(
          'An FFQ captures broad, long-term dietary patterns across predetermined food lists over months or years, but lacks the granular precision of exact gram weights, specific commercial brands, cooking preparation techniques, and day-to-day macronutrient timings required to calculate medical nutrition prescriptions, such as insulin-to-carbohydrate meal ratios or strict renal potassium and phosphorus allowances.',
          'ফুড ফ্রিকোয়েন্সি প্রশ্নমালা (FFQ) কয়েক মাস বা বছরের সামগ্রিক খাদ্যাভ্যাস চিত্র তুলে ধরলেও এতে খাবারের সুনির্দিষ্ট গ্রাম ওজন, বাণিজ্যিক ব্রান্ড, রান্নার তেল ও পদ্ধতির বিবরণ এবং নির্দিষ্ট সময়ের সঠিক পুষ্টিমান থাকে না; যা ডায়াবেটিসের জন্য ইনসুলিন ও শর্করার অনুপাত নির্ধারণ কিংবা কিডনি রোগীর সোডিয়াম ও পটাসিয়াম নিয়ন্ত্রণের মতো নিখুঁত চিকিৎসা ডায়েট চার্ট তৈরিতে অপরিহার্য।'
        ),
      },
    ],
  },
}
