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
    'A rigorous scientific guide to dietary measurement: executing the five-step Automated Multiple-Pass Method (AMPM), utilizing Food Frequency Questionnaires (FFQs), correcting for selective underreporting bias, and applying biomarker validation models including the physiological Goldberg cutoff.',
    'খাদ্যাভ্যাস পরিমাপের বিজ্ঞানভিত্তিক নির্দেশিকা: পাঁচ ধাপের অটোমেটেড মাল্টিপল-পাস মেথড (AMPM) পরিচালনা, ফুড ফ্রিকোয়েন্সি প্রশ্নমালা (FFQ) বিশ্লেষণ, কম দেখানোর প্রবণতা দূর করার গাণিতিক কৌশল এবং গোল্ডবার্গ কাট-অফ সূত্রের মাধ্যমে খাদ্যের সত্যতা যাচাই।'
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
      'Conduct a standardized 24-hour dietary recall using the five-step Automated Multiple-Pass Method (AMPM) to minimize memory omissions.',
      'স্মৃতিভ্রমজনিত ভুল দূর করতে পাঁচ ধাপের প্রমিত অটোমেটেড মাল্টিপল-পাস মেথডের (AMPM) মাধ্যমে ২৪ ঘণ্টার খাদ্য তালিকা গ্রহণ করা।'
    ),
    l(
      'Compare the clinical and epidemiological utilities of Food Frequency Questionnaires (FFQs), weighed food records, and diet histories.',
      'ফুড ফ্রিকোয়েন্সি প্রশ্নমালা (FFQ), ওজনের ভিত্তিতে খাবারের রেকর্ড এবং ডায়েট হিস্ট্রির ব্যবহারিক উপযোগিতা তুলনা করা।'
    ),
    l(
      'Identify systematic cognitive biases in dietary reporting, including the "flat-slope syndrome" and selective omission of energy-dense foods.',
      'খাবারের তথ্য প্রদানের মনস্তাত্ত্বিক ভুলসমূহ (যেমন অতিরিক্ত ওজনের মানুষের কম খাওয়ার দাবি বা ফ্যাট ও মিষ্টি গোপন করার প্রবণতা) শনাক্ত করা।'
    ),
    l(
      'Calculate the Goldberg cut-off ratio ($EI:BMR$) to mathematically differentiate true physiological hypophagia from fabricated underreporting.',
      'গোল্ডবার্গ সূত্রের ($EI:BMR$) মাধ্যমে রোগী আসলেই অনাহারে আছেন নাকি খাবার গ্রহণের তথ্য কম দিয়েছেন তা গাণিতিকভাবে নিশ্চিত করা।'
    ),
    l(
      'Validate self-reported nutrient intakes using objective biochemical recovery biomarkers (urinary nitrogen for protein, doubly labeled water for energy).',
      'প্রস্রাবের নাইট্রোজেনের মাধ্যমে প্রোটিন এবং ডাবলি লেবেলড ওয়াটারের মাধ্যমে শক্তির সত্যতা বৈজ্ঞানিকভাবে যাচাই করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A structured five-step flowchart of the USDA Automated Multiple-Pass Method (AMPM): Pass 1 creates a rapid, uninterrupted food list; Pass 2 systematically probes for commonly forgotten foods (beverages, condiments, sweets); Pass 3 groups items by time and eating occasion; Pass 4 gathers precise details on portion sizes, preparation, and brand names; Pass 5 performs a final review probing for omissions.',
      'ইউএসডিএ-র পাঁচ ধাপের অটোমেটেড মাল্টিপল-পাস মেথডের (AMPM) কর্মপ্রবাহ চিত্র: ধাপ ১ দ্রুত খাবারের তালিকা তৈরি করে; ধাপ ২ ভুলে যাওয়া খাবারগুলোর জন্য প্রশ্ন করে; ধাপ ৩ খাওয়ার সময় ও উপলক্ষ অনুযায়ী বিন্যস্ত করে; ধাপ ৪ খাবারের পরিমাণ ও প্রস্তুতপ্রণালীর বিবরণ নেয়; ধাপ ৫ চূড়ান্ত পর্যালোচনার মাধ্যমে কোনো বাদ পড়া খাবার খুঁজে বের করে।'
    ),
    steps: [
      l(
        'Pass 1: Quick Food List. The patient lists all foods and beverages consumed over the preceding 24 hours in free recall without interruption by the clinician.',
        'ধাপ ১: দ্রুত খাবারের তালিকা: রোগী কোনো বাধা ছাড়াই গত ২৪ ঘণ্টায় খাওয়া সকল খাবার ও পানীয়ের একটি প্রাথমিক তালিকা প্রদান করেন।'
      ),
      l(
        'Pass 2: Forgotten Foods Probe. The clinician asks targeted questions probing for easily forgotten categories: snacks, sugar-sweetened beverages, alcohol, condiments, and midnight foods.',
        'ধাপ ২: ভুলে যাওয়া খাবারের অনুসন্ধান: চিকিৎসক মিষ্টি, স্ন্যাক্স, চা-কফির চিনি, সস, অ্যালকোহল বা মধ্যরাতের খাবারের মতো সহজে বাদ পড়া বিষয়গুলো আলাদাভাবে জিজ্ঞাসা করেন।'
      ),
      l(
        'Pass 3: Time and Occasion Grouping. Foods are chronologically organized by meal occasions (breakfast, morning snack, lunch, dinner) and times of day.',
        'ধাপ ৩: সময় ও উপলক্ষ নির্ধারণ: খাবারগুলোকে সকালের নাশতা, দুপুরের খাবার, বিকেলের স্ন্যাক্স ইত্যাদির সময় অনুযায়ী ধারাবাহিকভাবে সাজানো হয়।'
      ),
      l(
        'Pass 4: Detail Cycle. Precise quantification of portion sizes using three-dimensional food models, preparation methods (e.g., fried vs boiled), cooking fats, and brand names.',
        'ধাপ ৪: বিস্তারিত বিবরণ: খাবারের সঠিক পরিমাণ (মডেল বা বাটি দেখে), রান্নার পদ্ধতি (তেল/ঘি), ভাজা বা সেদ্ধ এবং ব্রান্ডের নাম বিস্তারিত নথিবদ্ধ করা হয়।'
      ),
      l(
        'Pass 5: Final Review Probe. A final comprehensive review of the entire timeline, probing for any remaining gaps between meals or activities.',
        'ধাপ ৫: চূড়ান্ত পর্যালোচনা: পুরো দিনের খাবার শেষবারের মতো পর্যালোচনা করা হয় এবং দুই খাবারের মাঝের কোনো বাদ পড়া অংশ আছে কি না তা নিশ্চিত করা হয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 45-year-old female with class II obesity (weight = 98 kg, height = 162 cm, BMI = 37.3 kg/m², calculated Basal Metabolic Rate via Mifflin-St Jeor = 1,620 kcal/day) presents for weight management. Her 3-day food diary reports an average Energy Intake (EI) of 1,050 kcal/day, yet her weight has remained strictly stable over the past 6 months. How does the Goldberg cut-off index classify this reported intake?',
      'ক্লাস ২ স্থূলতায় আক্রান্ত ৪৫ বছর বয়সী এক নারী (ওজন ৯৮ কেজি, উচ্চতা ১৬২ সেমি, বিএমআই ৩৭.৩ kg/m², মিফলিন সমীকরণে হিসাবকৃত বেসাল মেটাবলিক রেট = ১৬২০ kcal/দিন) ওজন কমাতে এসেছেন। তার ৩ দিনের ফুড ডায়েরিতে গড় ক্যালোরি গ্রহণ দেখানো হয়েছে ১০৫০ kcal/দিন; অথচ গত ৬ মাস ধরে তার ওজন অপরিবর্তিত রয়েছে। গোল্ডবার্গ কাট-অফ সূত্রের বিচারে এই খাদ্যের তথ্যকে কীভাবে মূল্যায়ন করা হবে?'
    ),
    options: [
      l(
        'The report is physiologically valid because obese patients frequently require fewer than 1,100 kcal to maintain body mass.',
        'তথ্যটি বৈজ্ঞানিকভাবে সঠিক, কারণ স্থূল রোগীদের ওজন বজায় রাখতে প্রায়ই ১১০০ কিলোক্যালোরির কম প্রয়োজন হয়।'
      ),
      l(
        'The ratio $EI / BMR = 1050 / 1620 = 0.65$, which falls far below the universal physiological survival cutoff ($1.20$), proving severe cognitive underreporting bias or inaccurate portion estimation.',
        'অনুপাতটি হলো $EI / BMR = ১০৫০ / ১৬২০ = ০.৬৫$, যা মানুষের বেঁচে থাকার ন্যূনতম শারীরবৃত্তীয় সীমা ($১.২০$) থেকে অনেক নিচে; এটি খাদ্য গ্রহণ কম দেখানোর স্পষ্ট মনস্তাত্ত্বিক ভুল প্রমাণ করে।'
      ),
      l(
        'The patient has developed extreme adaptive thermogenesis that lowered her actual metabolic needs by 60%.',
        'রোগীর মেটাবলিজমে চরম অ্যাডাপটিভ থার্মোজেনেসিস ঘটেছে যার ফলে তার প্রকৃত ক্যালোরি চাহিদা ৬০% কমে গেছে।'
      ),
      l(
        'The 1,050 kcal intake confirms that she is losing adipose tissue at a rate of 1 kg per week.',
        '১০৫০ কিলোক্যালোরি প্রমাণ করে যে তার প্রতি সপ্তাহে ১ কেজি করে চর্বি ক্ষয় হচ্ছে।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'The Goldberg cut-off establishes that for a free-living individual maintaining a stable body weight, an Energy Intake to BMR ratio ($EI:BMR$) below 1.20 represents a level of energy intake that is incompatible with long-term survival. An $EI:BMR$ ratio of 0.65 represents severe selective underreporting or massive portion size underestimation, a well-documented phenomenon known as flat-slope syndrome in obesity.',
      'গোল্ডবার্গ কাট-অফ সূত্রের মূল বৈজ্ঞানিক সত্য হলো: কোনো ব্যক্তির ওজন যদি স্থির থাকে, তবে তার ক্যালোরি গ্রহণ ও বেসাল মেটাবলিজমের অনুপাত ($EI:BMR$) কখনোই ১.২০-এর নিচে হতে পারে না। ০.৬৫ অনুপাতটি প্রমাণ করে যে রোগী হয়তো খাবারের পরিমাণ কম জানিয়েছেন অথবা তেল, চিনি ও স্ন্যাক্সের তথ্য গোপন করেছেন, যাকে স্থূলতার ক্ষেত্রে "ফ্ল্যাট-স্লোপ সিন্ড্রোম" বলা হয়।'
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
          heading: l('1. Why Is Measuring What People Eat So Difficult?', '১. মানুষ কী খায় তা সঠিকভাবে পরিমাপ করা কেন এত কঠিন?'),
          paragraphs: [
            l(
              'Determining what a patient actually eats and drinks is one of the most challenging tasks in clinical medicine [1]. Unlike a blood test or an X-ray, clinicians cannot place a camera in a patient’s kitchen. Instead, we must rely on self-reported dietary recalls, food diaries, or questionnaires—all of which depend entirely on human memory, honesty, and accurate perception of portion sizes.',
              'রোগী প্রকৃতপক্ষে কী খাচ্ছেন তা পরিমাপ করা আধুনিক চিকিৎসাবিজ্ঞানের অন্যতম কঠিন কাজ [1]। রক্ত পরীক্ষা বা এক্স-রে করার মতো কোনো সার্বক্ষণিক ক্যামেরা রোগীর রান্নাঘরে রাখা সম্ভব নয়। তাই চিকিৎসককে রোগীর মুখের কথা, ফুড ডায়েরি বা প্রশ্নমালার ওপর নির্ভর করতে হয়—যা পুরোপুরি মানুষের স্মৃতিশক্তি, সততা এবং খাবারের পরিমাণের সঠিক ধারণার ওপর নির্ভরশীল।'
            ),
            l(
              'Scientific studies consistently demonstrate that humans routinely forget 20% to 50% of the calories they consume [1, 2]. People easily remember large main courses (like rice or chicken), but routinely omit cooking oils, salad dressings, sweetened tea, alcoholic drinks, and afternoon snacks. To capture an honest dietary picture, clinicians use specialized interview techniques.',
              'বিজ্ঞান গবেষণায় দেখা গেছে মানুষ নিজের অজান্তেই তার গৃহীত ক্যালোরির ২০% থেকে ৫০% ভুলে যায় [1, 2]। মানুষ সাধারণত ভাত বা মাংসের মতো প্রধান খাবারের কথা মনে রাখলেও রান্নায় ব্যবহৃত তেল, সালাদের ড্রেসিং, চায়ে দেওয়া চিনি, কোমল পানীয় বা বিকেলের স্ন্যাক্সের কথা সহজেই বাদ দিয়ে ফেলে। তাই সঠিক তথ্য পেতে বিশেষ কৌশল প্রয়োগ করা হয়।'
            ),
          ],
        },
        {
          id: 'sec-recall-vs-ffq',
          heading: l('2. The 24-Hour Recall vs The Food Frequency Questionnaire', '২. ২৪-ঘণ্টার রিকল বনাম ফুড ফ্রিকোয়েন্সি প্রশ্নমালা (FFQ)'),
          paragraphs: [
            l(
              'Two primary tools dominate clinical nutrition [1, 2]:',
              'ক্লিনিক্যাল পুষ্টিবিজ্ঞানে দুটি প্রধান পদ্ধতি সবচেয়ে বেশি ব্যবহৃত হয় [1, 2]:'
            ),
            l(
              '• **The 24-Hour Dietary Recall:** The clinician guides the patient through every single bite of food and sip of liquid consumed from the moment they woke up yesterday until waking today. It is rich in detail and reflects exact foods, but a single day may not represent usual habits (e.g., if the patient was traveling or ill).\n• **The Food Frequency Questionnaire (FFQ):** A standardized survey asking how often (daily, weekly, monthly) a person eats specific food categories (e.g., dark leafy greens, whole milk, fish). It captures long-term dietary patterns over months or years, but lacks the day-to-day precision of a recall.',
              '• **২৪-ঘণ্টার ডায়েটারি রিকল (24-Hour Recall):** গতকাল ঘুম থেকে ওঠার পর থেকে আজ সকাল পর্যন্ত পেটে যাওয়া প্রতিটি খাবার ও পানীয়ের বিস্তারিত বিবরণ নেওয়া হয়। এটি অত্যন্ত নিখুঁত হলেও কেবল একটি দিনের খাদ্যতালিকা হওয়ায় তা রোগীর সারা বছরের স্থায়ী খাদ্যাভ্যাস নাও দেখাতে পারে (যেমন গতকাল হয়তো রোগী দাওয়াতে গিয়েছিলেন)।\n• **ফুড ফ্রিকোয়েন্সি প্রশ্নমালা (FFQ):** একটি প্রমিত তালিকা যেখানে রোগী জানান তিনি নির্দিষ্ট কিছু খাবার (যেমন শাকসবজি, দুধ, মাছ বা লাল মাংস) কত ঘন ঘন খান (প্রতিদিন, সপ্তাহে কতবার বা মাসে কতবার)। এটি রোগীর দীর্ঘমেয়াদী খাদ্যাভ্যাস বোঝার জন্য চমৎকার, তবে এতে একটি নির্দিষ্ট দিনের সঠিক গ্রাম বা পরিমাণের কিছুটা ঘাটতি থাকে।'
            ),
          ],
        },
        {
          id: 'sec-underreporting-truth',
          heading: l('3. The Phenomenon of Underreporting', '৩. কম খাওয়ার দাবি বা আন্ডার-রিপোর্টিংয়ের রহস্য'),
          paragraphs: [
            l(
              'A nearly universal phenomenon in dietetics is **underreporting** [3]. When individuals know they are being evaluated, they experience "social desirability bias"—they consciously or unconsciously describe healthier diets, reducing reported portion sizes and omitting foods perceived as "unhealthy" (sugary sweets, fried foods).',
              'পুষ্টিবিজ্ঞানে সবচেয়ে সাধারণ মনস্তাত্ত্বিক প্রবণতা হলো খাবার কম দেখানোর প্রবণতা বা **আন্ডার-রিপোর্টিং** [3]। যখন মানুষ জানে যে তার খাদ্যাভ্যাস পরীক্ষা করা হচ্ছে, তখন সে অবচেতনভাবেই সমাজে প্রশংসিত খাবার বেশি দেখায় এবং মিষ্টি বা ভাজাপোড়ার মতো খাবারগুলো চেপে যায়।'
            ),
            l(
              'Trained dietitians never judge, accuse, or argue with patients. Instead, they use neutral, non-judgmental prompts and objective validation equations (such as the Goldberg formula) to identify underreporting mathematically and adjust meal plans accordingly [3, 5].',
              'দক্ষ পুষ্টিবিদরা কখনোই রোগীর সাথে বিতর্ক বা অভিযোগ করেন না। বরং তারা নিরপেক্ষ ভঙ্গিতে প্রশ্ন করেন এবং বৈজ্ঞানিক সূত্রের (যেমন গোল্ডবার্গ কাট-অফ) মাধ্যমে প্রকৃত সত্য উন্মোচন করে সঠিক ডায়েট চার্ট তৈরি করেন [3, 5]।'
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
          heading: l('1. The Automated Multiple-Pass Method (AMPM) and Weighed Records', '১. অটোমেটেড মাল্টিপল-পাস মেথড (AMPM) ও ওজনের ফুড রেকর্ড'),
          paragraphs: [
            l(
              'The five-step Automated Multiple-Pass Method (AMPM), developed by the USDA and adopted worldwide, is the gold standard for clinical 24-hour recalls [1]. The structured progression—Quick List, Forgotten Foods, Time/Occasion, Detail Cycle, and Final Probe—maximizes memory recall while minimizing cognitive respondent fatigue. Standardized three-dimensional food models, geometric shapes, and calibrated measuring cups are deployed during Pass 4 to anchor volume estimation.',
              'যুক্তরাষ্ট্রের ইউএসডিএ (USDA) কর্তৃক উদ্ভাবিত এবং বিশ্বজুড়ে সমাদৃত পাঁচ ধাপের অটোমেটেড মাল্টিপল-পাস মেথড (AMPM) হলো ২৪ ঘণ্টার খাদ্য রিকল গ্রহণের আন্তর্জাতিক মানদণ্ড [1]। এর পাঁচটি সুশৃঙ্খল ধাপ—দ্রুত তালিকা, ভুলে যাওয়া খাবার অনুসন্ধান, সময় নির্ধারণ, বিস্তারিত পরিমাপ এবং চূড়ান্ত পর্যালোচনা—রোগীর স্মৃতিকে ধাপে ধাপে জাগ্রত করে নিখুঁত তথ্য বের করে আনে। ৪র্থ ধাপে ত্রিমাত্রিক বাটি ও কাপ ব্যবহার করে খাবারের সঠিক আয়তন নির্ধারণ করা হয়।'
            ),
            l(
              'In clinical research trials, the **Weighed Food Record (WFR)** is utilized as the primary prospective reference method [2]. The participant weighs every ingredient and meal component immediately prior to ingestion and weighs plate waste afterward using digital scales calibrated to $\\pm 1.0\\text{ g}$. While eliminating memory decay, WFR introduces profound respondent reactivity: participants consciously simplify meals to reduce the burden of repeated weighing.',
              'ক্লিনিক্যাল গবেষণায় **ওজনভিত্তিক ফুড রেকর্ড (WFR)** ব্যবহৃত হয় [2]। এতে রোগী খাবার গ্রহণের ঠিক আগে প্রতিটি উপাদান ডিজিটাল স্কেলে ($\\pm ১.০\\text{ গ্রাম}$) ওজন করেন এবং খাওয়ার পর ফেলে দেওয়া অংশের ওজন বাদ দেন। এতে স্মৃতিভ্রম না থাকলেও রোগী বারবার ওজন করার ঝামেলা এড়াতে ইচ্ছাকৃতভাবে কম বা সহজ খাবার খেতে শুরু করেন, যাকে বিহেভিয়ারাল রিঅ্যাক্টিভিটি বলা হয়।'
            ),
          ],
        },
        {
          id: 'sec-bias-mechanisms',
          heading: l('2. Cognitive Mechanics of Reporting Bias: The "Flat-Slope Syndrome"', '২. খাদ্য তথ্যের মানসিক ত্রুটি: "ফ্ল্যাট-স্লোপ সিন্ড্রোম" ও পদ্ধতিগত বিচ্যুতি'),
          paragraphs: [
            l(
              'Dietary reporting errors are not purely random; they contain massive systematic biases [1, 3]. The most robustly documented error pattern in nutritional epidemiology is the **flat-slope syndrome**:',
              'খাদ্যের তথ্য প্রদানের ত্রুটিগুলো এলোমেলো নয়; এর পেছনে নিশ্চিত মনস্তাত্ত্বিক ধারা থাকে [1, 3]। নিউট্রিশনাল এপিডেমিওলজিতে সবচেয়ে সুপ্রতিষ্ঠিত ত্রুটি হলো **ফ্ল্যাট-স্লোপ সিন্ড্রোম (Flat-Slope Syndrome)**:'
            ),
            l(
              '$$\\text{Underweight / Malnourished individuals } \\longrightarrow \\text{ Overreport intake (trying to appear healthy)}$$\n$$\\text{Overweight / Obese individuals } \\longrightarrow \\text{ Underreport intake by } 25\\text{--}50\\% \\text{ (desirability bias)}$$',
              '$$\\text{অপুষ্টি বা কম ওজনের মানুষ } \\longrightarrow \\text{ খাবার বেশি দেখানোর প্রবণতা (সুস্থ প্রমাণ করার চেষ্টা)}$$\n$$\\text{স্থূল বা অতিরিক্ত ওজনের মানুষ } \\longrightarrow \\text{ খাবার ২৫ থেকে ৫০% কম দেখানোর প্রবণতা}$$'
            ),
            l(
              'Selective underreporting disproportionately targets specific macronutrient substrates: dietary fats, spreads, refined starches, and sugary confections are suppressed, while protein and fiber intake are selectively exaggerated [2]. Consequently, raw unadjusted dietary recalls artificially distort macronutrient distribution percentages.',
              'এই কম দেখানোর প্রবণতা সব খাবারের ক্ষেত্রে সমান নয়: রান্নার চর্বি, মিষ্টি, কোল্ড ড্রিঙ্কস এবং ভাজাপোড়া খাবারগুলো প্রায়ই গোপন করা হয়, অথচ শাকসবজি ও প্রোটিনের তথ্য বেশি দেখানো হয় [2]। এর ফলে প্রাথমিক তথ্যের ভিত্তিতে হিসাব করলে ম্যাক্রোনিউট্রিয়েন্টের শতকরা হারে মারাত্মক ভুল তৈরি হয়।'
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
          heading: l('1. The Goldberg Cut-off Equation and Doubly Labeled Water Validation', '১. গোল্ডবার্গ কাট-অফ সমীকরণ ও ডাবলি লেবেলড ওয়াটার দ্বারা সত্যতা যাচাই'),
          paragraphs: [
            l(
              'To eliminate subjective speculation, clinical investigators evaluate the physiological plausibility of reported energy intake ($EI$) against basal metabolic expenditure ($BMR$) using the fundamental **Goldberg Cut-off Equation** [3, 5]:',
              'রোগীর তথ্যের সত্যতা অনুমানের ওপর নির্ভর না করে বৈজ্ঞানিকভাবে প্রমাণের জন্য গোল্ডবার্গ কাট-অফ সমীকরণ ব্যবহার করা হয় [3, 5]:'
            ),
            l(
              '$$\\text{Goldberg Index} = \\frac{\\text{Reported Energy Intake (EI)}}{\\text{Basal Metabolic Rate (BMR)}}$$',
              '$$\\text{গোল্ডবার্গ সূচক} = \\frac{\\text{দাবিকৃত ক্যালোরি গ্রহণ (EI)}}{\\text{বেসাল মেটাবলিক রেট (BMR)}}$$'
            ),
            l(
              'For a sedentary individual maintaining stable weight over several days, the absolute physiological survival cut-off is: $\\text{EI} : \\text{BMR} < 1.20$. Any reported value falling below $1.20$ mathematically proves that either: (1) the individual was in active starvation losing somatic tissue during the recording period; or (2) the reported dietary data represents severe underreporting bias [3].',
              'স্থির ওজনের একজন সাধারণ মানুষের ক্ষেত্রে বেঁচে থাকার ন্যূনতম গাণিতিক সীমা হলো: $\\text{EI} : \\text{BMR} < ১.২০$। এই অনুপাত ১.২০-এর নিচে নেমে গেলে নিশ্চিতভাবেই প্রমাণিত হয় যে: হয় রোগী ওই কয়দিন চরম উপবাসে ছিলেন অথবা তিনি মিথ্যা/ভুল তথ্য দিয়েছেন [3]।'
            ),
            l(
              'In clinical research benchmarks, self-reported energy intake is validated against **Doubly Labeled Water ($^2\\text{H}_2^{18}\\text{O}$)** [4]. After dosing, deuterium ($^2\\text{H}$) is eliminated exclusively as water, while heavy oxygen ($^{18}\\text{O}$) is eliminated as water and carbon dioxide. The differential clearance velocity provides the absolute true Total Energy Expenditure (TEE) in free-living subjects with an error rate $<1\\%$.',
              'আন্তর্জাতিক গবেষণায় খাদ্যের ক্যালোরি যাচাই করতে **ডাবলি লেবেলড ওয়াটার ($^2\text{H}_2^{18}\text{O}$)** ব্যবহার করা হয় [4]। এতে রোগীকে বিশেষ পানির ডোজ দেওয়া হয়। ডিউটেরিয়াম কেবল প্রস্রাবে বের হলেও ভারী অক্সিজেন কার্বন ডাই-অক্সাইড হিসেবেও বের হয়। এই দুইটির নিষ্কাশনের গতির পার্থক্য ১%-এরও কম ভুলের মাধ্যমে মানুষের ২৪ ঘণ্টার প্রকৃত মোট শক্তি খরচ নিশ্চিতভাবে পরিমাপ করে।'
            ),
          ],
        },
        {
          id: 'sec-nitrogen-recovery',
          heading: l('2. Biomarker Recovery Models: 24-Hour Urinary Nitrogen for Protein Validation', '২. প্রোটিন গ্রহণের সত্যতা যাচাইয়ে ২৪-ঘণ্টার ইউরিনারি নাইট্রোজেন'),
          paragraphs: [
            l(
              'While energy intake is validated via Doubly Labeled Water, dietary protein intake is independently validated using **24-hour urinary nitrogen excretion** [4]:',
              'ক্যালোরির সত্যতা ডাবলি লেবেলড ওয়াটার দিয়ে দেখা হলেও, রোগী কত গ্রাম প্রোটিন খেয়েছেন তা ২৪ ঘণ্টার প্রস্রাবের নাইট্রোজেন মেপে প্রমাণ করা যায় [4]:'
            ),
            l(
              '$$\\text{Estimated Dietary Protein (g/day)} = \\left( \\text{24-hr Urinary Urea Nitrogen (g)} + 2.0\\text{ g fecal/skin loss} \\right) \\times 6.25$$',
              '$$\\text{প্রকৃত প্রোটিন গ্রহণ (গ্রাম/দিন)} = \\left( \\text{২৪ ঘণ্টার প্রস্রাবের নাইট্রোজেন (গ্রাম)} + ২.০\\text{ গ্রাম ত্বক/মল অপচয়} \\right) \\times ৬.২৫$$'
            ),
            l(
              'Because nitrogen cannot be stored and is eliminated quantitatively in steady-state adults, urinary nitrogen represents an unbiased recovery biomarker. If a patient’s food recall reports 45 g protein/day, but their 24-hour urinary nitrogen indicates 14 g of excreted nitrogen ($[14 + 2] \\times 6.25 = 100\\text{ g}$ protein), the recall is objectively refuted by biological evidence.',
              'যেহেতু শরীর অতিরিক্ত নাইট্রোজেন জমিয়ে রাখতে পারে না এবং তা প্রস্রাবে বের করে দেয়, তাই এটি একটি অকাট্য নির্দেশক। কোনো রোগী যদি দাবি করেন তিনি দিনে মাত্র ৪৫ গ্রাম প্রোটিন খেয়েছেন, অথচ তার ২৪ ঘণ্টার প্রস্রাবে ১৪ গ্রাম নাইট্রোজেন পাওয়া যায় ($[১৪ + ২] \times ৬.২৫ = ১০০\text{ গ্রাম}$ প্রোটিন), তবে বৈজ্ঞানিকভাবে প্রমাণিত হয় যে তিনি প্রকৃতপক্ষে ১০০ গ্রাম প্রোটিন গ্রহণ করেছেন।'
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Automated Multiple-Pass Method (AMPM)', '১. অটোমেটেড মাল্টিপল-পাস মেথড (AMPM)'), sectionId: 'sec-intake-modalities' },
      { id: 'toc-2', label: l('2. Cognitive Biases & Flat-Slope Syndrome', '২. মনস্তাত্ত্বিক ভুল ও ফ্ল্যাট-স্লোপ সিন্ড্রোম'), sectionId: 'sec-bias-mechanisms' },
      { id: 'toc-3', label: l('3. Goldberg Cut-off Equation & Validation', '৩. গোল্ডবার্গ কাট-অফ সমীকরণ ও যাচাই'), sectionId: 'sec-goldberg-biomarkers' },
      { id: 'toc-4', label: l('4. Urinary Nitrogen Biomarker Recovery', '৪. ইউরিনারি নাইট্রোজেন দ্বারা প্রোটিন প্রমাণ'), sectionId: 'sec-nitrogen-recovery' },
    ],
    terms: [
      {
        term: l('AMPM', 'এএমপিএম (AMPM)'),
        definition: l(
          'Automated Multiple-Pass Method; a standardized five-step interviewing protocol that maximizes recall accuracy for 24-hour dietary data.',
          '২৪ ঘণ্টার খাদ্যতালিকা নির্ভুলভাবে সংগ্রহ করতে পাঁচ ধাপের আন্তর্জাতিক প্রমিত সাক্ষাৎকার পদ্ধতি।'
        ),
      },
      {
        term: l('FFQ', 'এফএফকিউ (FFQ)'),
        definition: l(
          'Food Frequency Questionnaire; a retrospective dietary assessment tool measuring the habitual consumption frequency of a predetermined list of foods.',
          'নির্দিষ্ট কিছু খাদ্য তালিকা কত ঘন ঘন খাওয়া হয় তা পরিমাপ করে দীর্ঘমেয়াদী খাদ্যাভ্যাস জানার প্রশ্নমালা।'
        ),
      },
      {
        term: l('Goldberg Cut-off', 'গোল্ডবার্গ কাট-অফ (Goldberg Cut-off)'),
        definition: l(
          'A physiological threshold ($EI:BMR < 1.20$) used in clinical nutrition to identify implausibly low reported energy intake representing underreporting.',
          'ক্যালোরি গ্রহণ ও বেসাল মেটাবলিজমের অনুপাতের শারীরবৃত্তীয় মান ($EI:BMR < ১.২০$), যা খাবার কম দেখানোর অসত্য তথ্য শনাক্ত করে।'
        ),
      },
      {
        term: l('Doubly Labeled Water', 'ডাবলি লেবেলড ওয়াটার (DLW)'),
        definition: l(
          'An isotopic technique ($^2H_2^{18}O$) providing the reference gold standard for measuring total energy expenditure in free-living humans.',
          'আইসোটোপ নির্ভর পরীক্ষা যা মানুষের দৈনন্দিন স্বাভাবিক চলাফেরায় মোট শক্তি খরচ পরিমাপের আন্তর্জাতিক মানদণ্ড।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Applying Goldberg Cut-off & Urinary Nitrogen to Unmask Subconscious Reporting Bias',
          'বাস্তব কেস স্টাডি: গোল্ডবার্গ সূত্র ও ইউরিনারি নাইট্রোজেনের মাধ্যমে খাদ্যের অসত্য তথ্য শনাক্তকরণ'
        ),
        steps: [
          l(
            'Step 1: Patient Profile & Claimed Intake. A 50-year-old male corporate executive (height = 178 cm, weight = 102 kg, BMI = 32.2 kg/m²) claims he "cannot lose weight despite eating only 1,200 kcal/day for the last 6 months." His 3-day recall reports 1,180 kcal/day and 42 g protein/day.',
            'ধাপ ১: রোগীর বিবরণ: ৫০ বছর বয়সী অতিরিক্ত ওজনের পুরুষ (উচ্চতা ১৭৮ সেমি, ওজন ১০২ কেজি, বিএমআই ৩২.২ kg/m²) দাবি করেন তিনি "গত ৬ মাস ধরে দিনে মাত্র ১২০০ ক্যালোরি খেয়েও ওজন কমাতে পারছেন না।" তার ৩ দিনের খাদ্যতালিকায় গড় ক্যালোরি ১১৮০ kcal এবং প্রোটিন ৪২ গ্রাম দেখানো হয়েছে।'
          ),
          l(
            'Step 2: Calculate Basal Metabolic Rate (BMR). Using Mifflin-St Jeor for men: $BMR = 10(102) + 6.25(178) - 5(50) + 5 = 1020 + 1112.5 - 250 + 5 = 1,887.5\\text{ kcal/day}$.',
            'ধাপ ২: বেসাল মেটাবলিক রেট (BMR) নির্ণয়: মিফলিন সূত্রে হিসাব: $BMR = ১০(১০২) + ৬.২৫(১৭৮) - ৫(৫০) + ৫ = ১৮৮৭.৫\text{ kcal/দিন}$।'
          ),
          l(
            'Step 3: Evaluate Goldberg Cut-off. Reported $EI : BMR = 1,180 / 1,887.5 = 0.625$. Since $0.625 \\ll 1.20$, this reported intake is mathematically incompatible with survival at a stable weight of 102 kg. If genuine, he would be losing ~1.5 kg of tissue per week.',
            'ধাপ ৩: গোল্ডবার্গ অনুপাত হিসাব: $EI : BMR = ১১৮০ / ১৮৮৭.৫ = ০.৬২৫$। যেহেতু $০.৬২৫$ ন্যূনতম মান ১.২০ এর অনেক নিচে, তাই স্থির ওজনে এই তথ্য গাণিতিকভাবে অসম্ভব। রোগী সত্যিই তা খেলে সপ্তাহে ১.৫ কেজি করে ওজন কমতো।'
          ),
          l(
            'Step 4: Analyze 24-Hour Urinary Nitrogen Recovery. A simultaneous 24-hour urine collection reveals 15.2 g of nitrogen. Actual Protein Intake = $(15.2 + 2.0) \\times 6.25 = 107.5\\text{ g protein/day}$. This is 2.5 times higher than his claimed 42 g.',
            'ধাপ ৪: প্রস্রাবের নাইট্রোজেন বিশ্লেষণ: ২৪ ঘণ্টার প্রস্রাবে ১৫.২ গ্রাম নাইট্রোজেন পাওয়া গেল। প্রকৃত প্রোটিন গ্রহণ = $(১৫.২ + ২.০) \times ৬.২৫ = ১০৭.৫\text{ গ্রাম/দিন}$, যা তার দাবিকৃত ৪২ গ্রামের চেয়ে আড়াই গুণ বেশি।'
          ),
          l(
            'Step 5: Clinical Counseling Application. Rather than confronting the patient negatively, the dietitian explains the physiology: "Your body is actually burning at least 2,400 kcal/day, and your urine shows you are nourishing yourself with 108g of protein. Many calories are slipping in through unseen cooking oils, snacks, or drinks without your awareness. Let us track these hidden sources together."',
            'ধাপ ৫: ইতিবাচক কাউন্সেলিং: রোগীর সাথে তর্ক না করে ডায়েটিশিয়ান বুঝিয়ে বলেন: "আপনার শরীর দিনে প্রায় ২৪০০ ক্যালোরি খরচ করছে এবং আপনার পরীক্ষা বলছে আপনি ১০৮ গ্রাম প্রোটিন খাচ্ছেন। রান্নার তেল বা স্ন্যাক্সের মাধ্যমে অনেক ক্যালোরি অজান্তেই শরীরে চলে আসছে। আসুন আমরা সেগুলো একসাথে চিহ্নিত করি।"'
          ),
        ],
        conclusion: l(
          'Applying the Goldberg cut-off and urinary nitrogen biomarker transformed a frustrating clinical stalemate into a productive counseling breakthrough, identifying 1,200 kcal/day of unrecorded oils, sauces, and drinks.',
          'গোল্ডবার্গ সূত্র এবং প্রস্রাবের নাইট্রোজেন পরীক্ষার মাধ্যমে চিকিৎসক রোগীর লুকানো ১২০০ ক্যালোরির উৎস (তেল, সস ও পানীয়) উন্মোচন করতে সক্ষম হন এবং বিভ্রান্তি দূর করে কার্যকর চিকিৎসা প্রদান করেন।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does a Goldberg cutoff ratio (EI:BMR) below 1.20 indicate physiological underreporting in a weight-stable individual?',
          'ওজন স্থির থাকা কোনো ব্যক্তির ক্ষেত্রে গোল্ডবার্গ অনুপাত (EI:BMR) ১.২০-এর নিচে হলে কেন তা নিশ্চিত আন্ডার-রিপোর্টিং নির্দেশ করে?'
        ),
        answer: l(
          'Basal Metabolic Rate accounts for the energy required merely to maintain cellular life in a comatose state. Even sedentary free-living adults expend an additional 20–30% of energy above BMR for minimal movement, thermic effect of food, and vital organ work ($TEE \\ge 1.2 \\times BMR$). Therefore, sustaining stable weight on less than $1.2 \\times BMR$ is thermodynamically impossible; the patient is either starving or omitting dietary intake.',
          'বেসাল মেটাবলিক রেট হলো কোমায় থাকা অবস্থায় কেবল বেঁচে থাকার শক্তি। সাধারণ মানুষ নড়াচড়া ও খাবার হজমের জন্য BMR-এর চেয়ে অন্তত ২০-৩০% বেশি শক্তি খরচ করে ($TEE \\ge ১.২ \\times BMR$)। তাই ওজন স্থির থাকা অবস্থায় ১.২-এর কম ক্যালোরি খেয়ে বেঁচে থাকা পদার্থবিজ্ঞানের শক্তির নিত্যতা সূত্রের পরিপন্থী; রোগী নিশ্চিতভাবেই খাবারের তথ্য কম দিয়েছেন।'
        ),
      },
      {
        question: l(
          'What is the fundamental limitation of a Food Frequency Questionnaire compared to an AMPM 24-hour recall in individual clinical diet planning?',
          'ব্যক্তিগত ডায়েট চার্ট তৈরিতে ২৪ ঘণ্টার রিকলের তুলনায় ফুড ফ্রিকোয়েন্সি প্রশ্নমালার (FFQ) প্রধান সীমাবদ্ধতা কী?'
        ),
        answer: l(
          'An FFQ captures generalized long-term dietary patterns across broad predefined food categories, but lacks the exact portion size precision, preparation methods, brand names, and day-to-day macronutrient gram totals required to formulate precision medical nutrition therapies (such as insulin-to-carbohydrate ratios or renal electrolyte limits).',
          'ফুড ফ্রিকোয়েন্সি প্রশ্নমালা (FFQ) দীর্ঘদিনের সার্বিক খাদ্যাভ্যাস দেখালেও এতে খাবারের সঠিক ওজন বা গ্রাম, রান্নার পদ্ধতি, ব্রান্ড এবং নির্দিষ্ট দিনের সঠিক ক্যালোরি ও কার্বোহাইড্রেটের হিসাব থাকে না, যা ডায়াবেটিস বা কিডনি রোগের মতো নিখুঁত ডায়েট চার্ট তৈরিতে অত্যন্ত প্রয়োজন।'
        ),
      },
    ],
  },
}

