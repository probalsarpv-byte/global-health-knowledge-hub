import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics13References: LessonReference[] = [
  {
    id: 'ref-ada-soc-behavior-2024',
    authors: 'American Diabetes Association Professional Practice Committee',
    title: '5. Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes—2024',
    organization: 'Diabetes Care',
    year: 2024,
    url: 'https://diabetesjournals.org/care/article/47/Supplement_1/S77/153954/5-Facilitating-Positive-Health-Behaviors-and-Well',
    doi: '10.2337/dc24-S005',
  },
  {
    id: 'ref-bell-fat-protein-2015',
    authors: 'Bell KJ, Smart CE, Steil GM, Brand-Miller JC, King B, Wolpert HA',
    title: 'Impact of Fat, Protein, and Glycemic Index on Postprandial Glucose Control in Type 1 Diabetes: Implications for Intensive Diabetes Management in the Continuous Glucose Monitoring Era',
    organization: 'Diabetes Care',
    year: 2015,
    url: 'https://diabetesjournals.org/care/article/38/6/1008/37703/Impact-of-Fat-Protein-and-Glycemic-Index-on',
    doi: '10.2337/dc15-0100',
  },
  {
    id: 'ref-battelino-tir-consensus-2019',
    authors: 'Battelino T, Danne T, Bergenstal RM, et al.',
    title: 'Clinical Targets for Continuous Glucose Monitoring Data Interpretation: Recommendations From the International Consensus on Time in Range',
    organization: 'Diabetes Care',
    year: 2019,
    url: 'https://diabetesjournals.org/care/article/42/8/1593/36127/Clinical-Targets-for-Continuous-Glucose-Monitoring',
    doi: '10.2337/dci19-0028',
  },
  {
    id: 'ref-walsh-pumping-insulin-2017',
    authors: 'Walsh J, Roberts R, Bailey TS',
    title: 'Pumping Insulin: Everything You Need for Success with a Smart Insulin Pump (6th Edition)',
    organization: 'Torrey Pines Press',
    year: 2017,
    url: 'https://www.torreypinespress.com/pumping-insulin',
  },
  {
    id: 'ref-pankowska-fpu-review-2016',
    authors: 'Pankowska E, Blazik M, Dziechciarz P',
    title: 'Does the Fat-Protein Unit Bolus Calculator Improve Postprandial Glycemia in Children with Type 1 Diabetes? A Systematic Review',
    organization: 'Pediatric Diabetes',
    year: 2016,
    url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/pedi.12282',
    doi: '10.1111/pedi.12282',
  },
  {
    id: 'ref-evert-nutrition-therapy-2019',
    authors: 'Evert AB, Dennison M, Gardner CD, et al.',
    title: 'Nutrition Therapy for Adults With Diabetes or Prediabetes: A Consensus Report',
    organization: 'Diabetes Care',
    year: 2019,
    url: 'https://diabetesjournals.org/care/article/42/5/731/40480/Nutrition-Therapy-for-Adults-With-Diabetes-or',
    doi: '10.2337/dci19-0014',
  },
]

export const dietetics13Lesson: LessonTopic = {
  id: 'topic.dietetics.carb-counting-icr',
  slug: 'carbohydrate-counting-insulin-to-carb-ratios',
  version: 1,
  updatedAt: '2026-11-04',
  title: l(
    '13 · Carbohydrate Counting & Advanced Insulin-to-Carbohydrate Ratio (ICR) Planning',
    '১৩ · কার্বোহাইড্রেট গণনা ও উন্নত ইনসুলিন-কার্ব অনুপাত (ICR) পরিকল্পনা'
  ),
  summary: l(
    'Master basic and advanced carbohydrate counting, clinical derivation of Insulin-to-Carbohydrate Ratios (Rule of 500), Insulin Sensitivity Factors (Rule of 1800), active insulin decay curves, and dual-wave bolusing for fat-protein units.',
    'মৌলিক ও উন্নত কার্বোহাইড্রেট গণনা, ৫০০ এর নিয়ম দিয়ে ইনসুলিন-কার্ব অনুপাত (ICR), ১৮০০ এর নিয়ম দিয়ে কারেকশন ফ্যাক্টর (ISF), সক্রিয় ইনসুলিন ক্ষয় এবং ফ্যাট-প্রোটিন ইউনিটের ডুয়াল-ওয়েভ বোলাস পদ্ধতি আয়ত্ত করুন।'
  ),
  subject: 'dietetics',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-04',
  prerequisiteIds: ['topic.dietetics.food-exchange-systems'],
  relatedTopicIds: ['topic.dietetics.food-exchange-systems', 'topic.dietetics.south-asian-exchanges'],
  objectives: [
    l(
      'Differentiate Basic Carbohydrate Counting (15g carbohydrate choices) from Advanced Carbohydrate Counting (gram-precise bolus matching) across clinical populations.',
      'ক্লিনিক্যাল ক্ষেত্রে প্রাথমিক কার্ব গণনা (১৫ গ্রাম কার্বোহাইড্রেট পছন্দ) এবং উন্নত কার্ব গণনার (গ্রামভিত্তিক নিখুঁত ইনসুলিন সমন্বয়) পার্থক্য চিহ্নিত করা।'
    ),
    l(
      'Calculate the Insulin-to-Carbohydrate Ratio (ICR) using the clinical Rule of 500 and titrate prandial meal boluses based on total digestible carbohydrate.',
      'ক্লিনিক্যাল ৫০০-এর নিয়ম ব্যবহার করে ইনসুলিন-টু-কার্বোহাইড্রেট রেশিও (ICR) গণনা করা এবং খাবারের শর্করার উপর ভিত্তি করে প্র্যান্ডিয়াল বোলাস নির্ধারণ করা।'
    ),
    l(
      'Derive the Insulin Sensitivity Factor (ISF) using the Rule of 1800, compute target correction boluses, and subtract active Insulin-on-Board (IOB) to prevent insulin stacking.',
      '১৮০০-এর নিয়মে ইনসুলিন সংবেদনশীলতা ফ্যাক্টর (ISF) বের করা, কারেকশন বোলাস হিসাব করা এবং ইনসুলিন ওভারল্যাপ রোধে সক্রিয় ইনসুলিন (IOB) বাদ দেওয়া।'
    ),
    l(
      'Apply clinical rules for dietary fiber deduction and sugar alcohols, and design extended/dual-wave boluses for high-fat and high-protein meals (Warsaw Fat-Protein Units).',
      'খাবারের আঁশ ও সুগার অ্যালকোহল সমন্বয় করার নিয়ম প্রয়োগ করা এবং উচ্চ চর্বি ও প্রোটিনযুক্ত খাবারের জন্য ডুয়াল-ওয়েভ বোলাস পরিকল্পনা তৈরি করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A clinical decision flow chart illustrating the 5-step advanced insulin dosing algorithm: 1) Tally total meal carbohydrates and subtract half the fiber if >= 5g to obtain Net Carbs. 2) Divide Net Carbs by personal ICR to calculate Meal Bolus. 3) Measure pre-meal blood glucose; if above target, subtract target and divide excess by ISF to get Correction Bolus. 4) Subtract active Insulin-on-Board (IOB) from recent injections. 5) Sum Meal Bolus + Correction Bolus - IOB to deliver the exact prandial dose.',
      'উন্নত ইনসুলিন ডোজ নির্ধারণের ৫-ধাপের ক্লিনিক্যাল প্রবাহচিত্র: ১) খাবারের মোট শর্করা গুনে আঁশ ৫ গ্রামের বেশি হলে তার অর্ধেক বাদ দিয়ে কার্যকর কার্ব (Net Carb) বের করা। ২) কার্যকর কার্বকে নিজস্ব ICR দিয়ে ভাগ করে খাবারের বোলাস নির্ধারণ। ৩) প্রাক-আহার সুগার পরীক্ষা করে অতিরিক্ত সুগারকে ISF দিয়ে ভাগ করে কারেকশন বোলাস হিসাব। ৪) শরীরে আগের ইনজেকশনের অবশিষ্ট সক্রিয় ইনসুলিন (IOB) হিসাব করা। ৫) খাবারের বোলাস + কারেকশন বোলাস - IOB যোগ-বিয়োগ করে সঠিক ইনসুলিন প্রয়োগ করা।'
    ),
    steps: [
      l(
        'Step 1: Net Carbohydrate Tally. Sum all digestible carbohydrate grams. If dietary fiber is >= 5g, subtract 50% of fiber grams: Net Carb = Total Carb - (Fiber / 2).',
        'ধাপ ১: কার্যকর শর্করা গণনা: মোট শর্করার গ্রাম যোগ করুন। আঁশ ৫ গ্রাম বা বেশি হলে তার অর্ধেক বাদ দিন: কার্যকর কার্ব = মোট কার্ব - (আঁশ / ২)।'
      ),
      l(
        'Step 2: Calculate Meal Bolus. Meal Bolus (units) = Net Carbohydrate (g) / ICR (g/unit), where ICR is derived from Rule of 500 (500 / Total Daily Dose).',
        'ধাপ ২: খাবারের বোলাস নির্ণয়: মিল বোলাস (ইউনিট) = কার্যকর শর্করা / ICR; যেখানে ICR = ৫০০ / মোট দৈনিক ইনসুলিন (TDD)।'
      ),
      l(
        'Step 3: Calculate Correction Bolus. If blood glucose is elevated above target: Correction Bolus = (Current BG - Target BG) / ISF, where ISF is derived from Rule of 1800 (1800 / TDD).',
        'ধাপ ৩: কারেকশন বোলাস নির্ণয়: সুগার বেশি থাকলে: কারেকশন বোলাস = (বর্তমান সুগার - লক্ষ্যমাত্রা) / ISF; যেখানে ISF = ১৮০০ / TDD।'
      ),
      l(
        'Step 4: Check Active Insulin-on-Board (IOB). Determine active insulin remaining from previous doses (decay curve over 3 to 5 hours) to prevent stacking.',
        'ধাপ ৪: সক্রিয় ইনসুলিন (IOB) যাচাই: আগের ডোজের অবশিষ্ট সক্রিয় ইনসুলিন চিহ্নিত করুন (৩ থেকে ৫ ঘণ্টার ক্ষয় বক্ররেখা) যাতে ইনসুলিন ওভারল্যাপ না হয়।'
      ),
      l(
        'Step 5: Final Prandial Delivery. Deliver Total Bolus = Meal Bolus + Correction Bolus - Active IOB immediately prior to eating.',
        'ধাপ ৫: চূড়ান্ত বোলাস প্রয়োগ: মোট ইনসুলিন = মিল বোলাস + কারেকশন বোলাস - সক্রিয় IOB খাবারের ঠিক আগে ইনজেকশন দিন।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 30-year-old female with Type 1 Diabetes uses a Total Daily Dose (TDD) of 50 units of insulin. Her pre-meal blood glucose is 218 mg/dL with a target of 110 mg/dL. She is about to consume a meal with 80g of carbohydrates and 12g of dietary fiber. She has 0.0 units of active Insulin-on-Board (IOB). Using the Rule of 500 and Rule of 1800, what is her total prandial insulin bolus?',
      '৩০ বছর বয়সী টাইপ ১ ডায়াবেটিসে আক্রান্ত এক নারীর দৈনিক মোট ইনসুলিন ডোজ (TDD) ৫০ ইউনিট। খাওয়ার আগে তার রক্তে সুগার ২১৮ mg/dL, যেখানে কাঙ্ক্ষিত লক্ষ্যমাত্রা ১১০ mg/dL। তিনি এমন একটি খাবার খাচ্ছেন যাতে ৮০ গ্রাম কার্বোহাইড্রেট এবং ১২ গ্রাম খাদ্য আঁশ রয়েছে। তার শরীরে কোনো সক্রিয় ইনসুলিন (IOB = ০.০) অবশিষ্ট নেই। ৫০০ এবং ১৮০০ এর নিয়ম ব্যবহার করে তার প্র্যান্ডিয়াল ইনসুলিনের মোট ডোজ কত হওয়া উচিত?'
    ),
    options: [
      l(
        '10.4 units (7.4 units Meal Bolus + 3.0 units Correction Bolus).',
        '১০.৪ ইউনিট (৭.৪ ইউনিট খাবারের বোলাস + ৩.০ ইউনিট কারেকশন বোলাস)।'
      ),
      l(
        '16.0 units (8.0 units Meal Bolus + 8.0 units Correction Bolus).',
        '১৬.০ ইউনিট (৮.০ ইউনিট খাবারের বোলাস + ৮.০ ইউনিট কারেকশন বোলাস)।'
      ),
      l(
        '5.0 units, ignoring the elevated blood glucose.',
        '৫.০ ইউনিট, উচ্চ সুগার বিবেচনা না করে।'
      ),
      l(
        'Zero units, requiring her to fast until blood glucose reaches 110 mg/dL.',
        'শূন্য ইউনিট, সুগার ১১০ এ না নামা পর্যন্ত উপবাস থাকতে হবে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Mathematical derivation: 1) ICR = 500 / 50 = 10 g/unit. 2) Net Carbs: Fiber is 12g (>= 5g), so subtract half: Net Carb = 80g - (12 / 2) = 74g. 3) Meal Bolus = 74g / 10 = 7.4 units. 4) ISF = 1800 / 50 = 36 mg/dL per unit. 5) Excess Glucose = 218 - 110 = 108 mg/dL. Correction Bolus = 108 / 36 = 3.0 units. 6) Total Bolus = 7.4 + 3.0 - 0.0 = 10.4 units (delivered as 10.5 units on a half-unit pen or pump).',
      'গাণিতিক বিশ্লেষণ: ১) ICR = ৫০০ / ৫০ = ১০ গ্রাম/ইউনিট। ২) কার্যকর কার্ব: আঁশ ১২ গ্রাম (৫ গ্রামের বেশি), তাই অর্ধেক বাদ: কার্যকর কার্ব = ৮০ - (১২ / ২) = ৭৪ গ্রাম। ৩) খাবারের বোলাস = ৭৪ / ১০ = ৭.৪ ইউনিট। ৪) ISF = ১৮০০ / ৫০ = ৩৬ mg/dL প্রতি ইউনিট। ৫) অতিরিক্ত সুগার = ২১৮ - ১১০ = ১০৮ mg/dL। কারেকশন বোলাস = ১০৮ / ৩৬ = ৩.০ ইউনিট। ৬) মোট বোলাস = ৭.৪ + ৩.০ - ০ = ১০.৪ ইউনিট (পেনে ১০.৫ ইউনিট নেওয়া হবে)।'
    ),
  },
  evidenceBySection: {
    'sec-engine-analogy': ['ref-ada-soc-behavior-2024'],
    'sec-two-counting-tiers': ['ref-evert-nutrition-therapy-2019', 'ref-ada-soc-behavior-2024'],
    'sec-portion-milestones': ['ref-evert-nutrition-therapy-2019'],
    'sec-rule-500-icr': ['ref-walsh-pumping-insulin-2017'],
    'sec-rule-1800-isf': ['ref-walsh-pumping-insulin-2017'],
    'sec-iob-stacking': ['ref-walsh-pumping-insulin-2017', 'ref-ada-soc-behavior-2024'],
    'sec-fiber-deductions': ['ref-evert-nutrition-therapy-2019', 'ref-ada-soc-behavior-2024'],
    'sec-fpu-warsaw': ['ref-bell-fat-protein-2015', 'ref-pankowska-fpu-review-2016'],
    'sec-cgm-tir-metrics': ['ref-battelino-tir-consensus-2019'],
    'sec-worked-case-study': ['ref-walsh-pumping-insulin-2017', 'ref-ada-soc-behavior-2024'],
  },
  references: dietetics13References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-engine-analogy',
          heading: l(
            '1. The Metabolic Engine & Fuel Injection Analogy',
            '১. বিপাকীয় ইঞ্জিন ও ফুয়েল ইনজেকশনের সহজ উপমা'
          ),
          paragraphs: [
            l(
              'To understand how carbohydrates affect blood glucose and why insulin dosing must be precise, imagine a high-performance modern car engine [1]. Dietary carbohydrates are like high-octane gasoline: they flow into the bloodstream within 15 to 90 minutes after eating, providing immediate fuel. However, glucose cannot enter body tissues (like skeletal muscle and liver cells) on its own; it requires insulin, which acts as the ignition key opening the cellular glucose gates [1].',
              'খাবারের কার্বোহাইড্রেট কীভাবে রক্তের সুগার বাড়ায় এবং কেন ইনসুলিনের মাত্রা নিখুঁত হতে হয়, তা বুঝতে একটি আধুনিক হাই-পারফর্ম্যান্স গাড়ির কথা ভাবুন [1]। শর্বরা বা কার্বোহাইড্রেট হলো হাই-অকটেন গ্যাসোলিনের মতো: খাওয়ার ১৫ থেকে ৯০ মিনিটের মধ্যে এটি ভেঙে রক্তে গ্লুকোজ হিসেবে ছড়িয়ে পড়ে। কিন্তু ইনসুলিন ছাড়া এই গ্লুকোজ পেশি বা যকৃতের কোষের ভেতর ঢুকতে পারে না। ইনসুলিন কাজ করে একটি চাবির মতো, যা কোষের দরজা খুলে জ্বালানি প্রবেশ করায় [1]।'
            ),
            l(
              'In a person without diabetes, the pancreas automatically injects the exact amount of insulin required for every gram of carbohydrate consumed [1]. But in someone with Type 1 Diabetes or insulin-requiring Type 2 Diabetes, the endogenous injection system is damaged or insufficient. Carbohydrate counting is the clinical skill of reading the fuel gauge: accurately estimating the grams of carbohydrate in a meal so the patient can inject the precise amount of insulin needed—preventing hazardous blood sugar spikes (hyperglycemia) and life-threatening drops (hypoglycemia) [1].',
              'একজন সুস্থ ব্যক্তির অগ্ন্যাশয় প্রতি গ্রাম শর্করার জন্য স্বয়ংক্রিয়ভাবে নিখুঁত মাপে ইনসুলিন নিঃসরণ করে [1]। কিন্তু টাইপ ১ ডায়াবেটিস বা ইনসুলিন-নির্ভর টাইপ ২ ডায়াবেটিসে এই প্রাকৃতিক ব্যবস্থা ক্ষতিগ্রস্ত থাকে। কার্বোহাইড্রেট গণনা হলো খাবারের জ্বালানি পরিমাপ করার বিজ্ঞান: পাতে ঠিক কত গ্রাম শর্করা আছে তা সঠিকভাবে গুনে ঠিক সেই পরিমাণ ইনসুলিন ইনজেকশন দেওয়া—যাতে রক্তে বিপজ্জনকভাবে সুগার বেড়ে (হাইপারগ্লাইসেমিয়া) না যায়, আবার মারাত্মকভাবে কমেও (হাইপোগ্লাইসেমিয়া) না যায় [1]।'
            ),
          ],
        },
        {
          id: 'sec-two-counting-tiers',
          heading: l(
            '2. Basic vs. Advanced Carbohydrate Counting: Two Clinical Tiers',
            '২. প্রাথমিক বনাম উন্নত কার্বোহাইড্রেট গণনা: দুটি ক্লিনিক্যাল স্তর'
          ),
          paragraphs: [
            l(
              'Carbohydrate counting is clinically structured into two distinct operational levels based on the patient’s cognitive ability, numeracy, and treatment regimen [6]:',
              'রোগীর ইনসুলিন পদ্ধতি, বোধগম্যতা ও গণিতের দক্ষতার উপর ভিত্তি করে কার্বোহাইড্রেট গণনাকে মূলত দুটি স্তরে প্রয়োগ করা হয় [6]:'
            ),
          ],
          bullets: [
            l(
              'Level 1: Basic Carbohydrate Counting (Carb Choices / Portions) — In this entry-level framework, 1 Carbohydrate Choice is standardized as 15 grams of available carbohydrate [6]. Patients on fixed daily insulin doses (e.g., premixed biphasic insulin 70/30 twice daily) or oral secretagogues learn to consume a steady, consistent number of carb choices at each meal (e.g., 3 to 4 carb choices = 45–60g per meal). This stabilizes postprandial glycemic excursions without requiring complex mathematical formulas.',
              'লেভেল ১: প্রাথমিক কার্ব গণনা (কার্ব চয়েস বা অংশ) — এখানে প্রতি ১৫ গ্রাম শর্করাকে ১টি "কার্ব চয়েস" বা খাদ্য অংশ ধরা হয় [6]। যেসব রোগী নির্দিষ্ট মাত্রার ইনসুলিন (যেমন মিক্সটার্ড ৭০/৩০) নেন, তারা প্রতি বেলা খাবারে নির্দিষ্ট সংখ্যক কার্ব চয়েস খান (যেমন দুপুরে ৩-৪ চয়েস = ৪৫-৬০ গ্রাম)। এতে জটিল হিসাব ছাড়াই রক্তে সুগার স্থির থাকে।'
            ),
            l(
              'Level 2: Advanced Carbohydrate Counting (Gram-Precision Matching) — Designed for patients on intensive insulin therapy, including Multiple Daily Injections (MDI: long-acting basal plus rapid-acting prandial boluses) or Continuous Subcutaneous Insulin Infusion (CSII / Insulin Pump) [1, 4]. In advanced counting, the patient tallies the exact grams of carbohydrate eaten and calculates a personalized prandial insulin bolus based on their personal Insulin-to-Carbohydrate Ratio (ICR).',
              'লেভেল ২: উন্নত কার্ব গণনা (গ্রামভিত্তিক নিখুঁত সমন্বয়) — এটি টাইপ ১ বা নিবিড় ইনসুলিন নেওয়া (দিনে ৪ বার ইনজেকশন বা ইনসুলিন পাম্প ব্যবহারকারী) রোগীদের জন্য প্রযোজ্য [1, 4]। রোগী পাতে থাকা প্রতিটি খাবারের সঠিক কার্বোহাইড্রেট গ্রাম হিসাব করেন এবং নিজস্ব ইনসুলিন-টু-কার্বোহাইড্রেট রেশিও (ICR) অনুযায়ী সুনির্দিষ্ট বোলাস ইনসুলিন নেন।'
            ),
          ],
        },
        {
          id: 'sec-portion-milestones',
          heading: l(
            '3. Everyday 15-Gram Carbohydrate Milestones',
            '৩. প্রতিদিনের সাধারণ ১৫-গ্রাম শর্করা একক'
          ),
          paragraphs: [
            l(
              'To build fast, practical portion recognition, clinicians teach memorable visual benchmarks. Each of the following standard servings contains approximately 15 grams of digestible carbohydrate (1 Carb Choice) [6]:',
              'সহজে চোখ দিয়ে দেখে শর্করার পরিমাণ বোঝার জন্য পুষ্টিবিজ্ঞানীরা কিছু সর্বজনীন মানদণ্ড ব্যবহার করেন। নিচের প্রতিটি খাবারে প্রায় ১৫ গ্রাম শর্করা (১ কার্ব চয়েস) থাকে [6]:'
            ),
          ],
          bullets: [
            l(
              'Bread & Starches: 1 slice of sandwich bread (white or whole grain); 1/3 cup of cooked white or parboiled rice; 1 small 6-inch handmade chapati/roti; 1/2 cup of cooked oatmeal or rolled oats; 1/2 cup of mashed potatoes; 3 cups of air-popped popcorn.',
              'রুটি ও শ্বেতসার: ১ টুকরো স্যান্ডউইচ পাউরুটি; ১/৩ কাপ রান্না করা সিদ্ধ ভাত; ১টি ছোট হাতে তৈরি লাল আটার রুটি (৬ ইঞ্চি); ১/২ কাপ রান্না ওটস; ১/২ কাপ সিদ্ধ আলু ভর্তা; ৩ কাপ পপকর্ন।'
            ),
            l(
              'Fruits: 1 small fresh apple or orange (tennis ball size); 1/2 medium banana; 1/2 cup canned or diced fruit packed in juice; 1 cup of fresh cubed melon or berries; 2 tablespoons of dried raisins.',
              'ফলমূল: ১টি ছোট আপেল বা কমলা (টেনিস বলের সাইজ); অর্ধেক মাঝারি কলা; ১/২ কাপ কাটা পেঁপে বা তরমুজ; ২ টেবিল চামচ কিসমিস।'
            ),
            l(
              'Dairy: 1 cup (240 mL) of skim, low-fat, or whole cow’s milk (supplies ~12–15g lactose); 6 ounces (170g) of plain unflavored yogurt. (Note: Hard cheeses and pure Greek strained yogurts have near-zero carbohydrate).',
              'দুধ ও দুগ্ধজাত: ১ কাপ (২৪০ মিলি) গরুর তরল দুধ (১২-১৫ গ্রাম ল্যাকটোজ শর্করা থাকে); ১৭০ গ্রাম সাধারণ টক দই। (পনির বা ছানায় শর্করা প্রায় শূন্য)।'
            ),
            l(
              'Non-Starchy Vegetables (Free Food Rule): Raw leafy greens, cucumbers, tomatoes, cauliflower, and zucchini contain only ~5g carb per cup. If eating standard modest portions (up to 1–2 cups), they are clinically considered "free" and require no insulin bolus.',
              'শ্বেতসারহীন সবজি (ফ্রি ফুড নিয়ম): শসা, টমেটো, পালং শাক, ফুলকপিতে প্রতি কাপে মাত্র ৫ গ্রাম কার্ব থাকে। সাধারণ পরিমাণে (১-২ কাপ) খেলে এর জন্য আলাদা ইনসুলিন নেওয়ার প্রয়োজন হয় না।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-rule-500-icr',
          heading: l(
            '1. Deriving the Insulin-to-Carbohydrate Ratio: The Clinical Rule of 500',
            '১. ইনসুলিন-টু-কার্ব রেশিও নির্ণয়: ক্লিনিক্যাল ৫০০-এর নিয়ম'
          ),
          paragraphs: [
            l(
              'The Insulin-to-Carbohydrate Ratio (ICR) dictates how many grams of carbohydrate are metabolized by 1 unit of rapid-acting prandial insulin (insulin lispro, aspart, or glulisine) [4]. The standard physiological derivation is based on the patient’s Total Daily Dose (TDD) of insulin, which represents their baseline degree of insulin sensitivity or resistance [4].',
              'ইনসুলিন-টু-কার্বোহাইড্রেট রেশিও (ICR) নির্দেশ করে ঠিক কত গ্রাম শর্করা হজম করতে ১ ইউনিট দ্রুত কার্যকর (র‍্যাপিড-অ্যাক্টিং) ইনসুলিন প্রয়োজন [4]। এর সার্বজনীন ক্লিনিক্যাল সমীকরণ রোগীর দৈনিক মোট ইনসুলিন চাহিদার (TDD) ওপর ভিত্তি করে তৈরি [4]।',
            ),
            l(
              'For rapid-acting insulin analogues, clinicians utilize the Rule of 500: ICR (grams carb covered per unit) = 500 / TDD. For older regular human insulin, the Rule of 450 is traditionally substituted due to its slower pharmacodynamic onset and clearance: ICR = 450 / TDD [4].',
              'আধুনিক দ্রুত কার্যকর ইনসুলিন অ্যানালগের (লিসপ্রো, অ্যাসপার্ট) ক্ষেত্রে চিকিৎসকেরা ৫০০-এর নিয়ম ব্যবহার করেন: ICR (গ্রাম/ইউনিট) = ৫০০ / TDD। পুরনো সাধারণ হিউম্যান ইনসুলিনের ক্ষেত্রে ৪৫০-এর নিয়ম ব্যবহার করা হয়: ICR = ৪৫০ / TDD [4]।',
            ),
          ],
          bullets: [
            l(
              'Clinical Example of ICR: If an adult with Type 1 Diabetes uses 20 units of glargine (basal) and an average of 30 units of prandial boluses across the day, their Total Daily Dose is 20 + 30 = 50 units. Applying the Rule of 500: ICR = 500 / 50 = 10 g/unit. This means 1 unit of rapid-acting insulin covers exactly 10 grams of digestible carbohydrate (a 1:10 ratio) [4].',
              'আইসিআরের বাস্তব উদাহরণ: একজন রোগী দিনে ২০ ইউনিট ল্যান্টাস (বেসাল) এবং গড়ে ৩০ ইউনিট মিল বোলাস নেন, অর্থাৎ তার দৈনিক মোট ডোজ (TDD) = ৫০ ইউনিট। ৫০০-এর নিয়ম অনুযায়ী: ICR = ৫০০ / ৫০ = ১০ গ্রাম/ইউনিট। অর্থাৎ প্রতি ১০ গ্রাম শর্করার জন্য তার ১ ইউনিট ইনসুলিন প্রয়োজন (১:১০ অনুপাত) [4]। ',
            ),
            l(
              'Calculating the Meal Bolus: Meal Bolus (units) = Total Carbohydrate in Meal (g) / ICR. If the patient with an ICR of 1:10 consumes a meal containing 60 grams of carbohydrate: Meal Bolus = 60 g / 10 g/unit = 6.0 units of rapid-acting insulin.',
              'খাবারের বোলাস হিসাব: মিল বোলাস (ইউনিট) = খাবারের মোট শর্করা (গ্রাম) / ICR। যদি ওই রোগী ৬০ গ্রাম শর্করাযুক্ত খাবার খান: বোলাস = ৬০ / ১০ = ৬.০ ইউনিট ইনসুলিন।'
            ),
          ],
        },
        {
          id: 'sec-rule-1800-isf',
          heading: l(
            '2. The Insulin Sensitivity Factor & High Blood Sugar Correction (Rule of 1800)',
            '২. ইনসুলিন সংবেদনশীলতা ফ্যাক্টর (ISF) ও অতিরিক্ত সুগার সংশোধনের নিয়ম (১৮০০ এর নিয়ম)'
          ),
          paragraphs: [
            l(
              'When a patient tests their blood glucose prior to a meal and discovers they are significantly above their clinical target, injecting insulin solely for the meal will leave their blood glucose elevated. They require an additional Correction Bolus. The magnitude of blood glucose reduction expected from 1 unit of rapid-acting insulin is called the Insulin Sensitivity Factor (ISF) or Correction Factor (CF) [4].',
              'খাওয়ার আগে সুগার মাপার পর যদি দেখা যায় রক্তের গ্লুকোজ কাঙ্ক্ষিত মাত্রার চেয়ে অনেক বেশি, তখন শুধু খাবারের ইনসুলিন দিলে রক্তে সুগার দীর্ঘক্ষণ বেশি থাকবে। এজন্য প্রয়োজন একটি অতিরিক্ত "সংশোধনী বোলাস" (Correction Bolus)। ১ ইউনিট ইনসুলিন রক্তে কত মিলিগ্রাম গ্লুকোজ কমাতে পারে, তাকে ইনসুলিন সংবেদনশীলতা ফ্যাক্টর (ISF) বলে [4]।',
            ),
            l(
              'For rapid-acting analogues, ISF is calculated using the Rule of 1800 (mg/dL) or Rule of 100 (mmol/L): ISF (mg/dL per unit) = 1800 / TDD. (In millimolar units: ISF = 100 / TDD). The Correction Bolus formula is: Correction Bolus (units) = (Current Blood Glucose - Target Blood Glucose) / ISF [4].',
              'দ্রুত কার্যকর ইনসুলিনের জন্য ISF বের করার সূত্র হলো ১৮০০-এর নিয়ম (mg/dL এককে): ISF = ১৮০০ / TDD। (mmol/L এককে: ISF = ১০০ / TDD)। কারেকশন বোলাসের সূত্র: কারেকশন বোলাস (ইউনিট) = (বর্তমান রক্তের সুগার - কাঙ্ক্ষিত রক্তের সুগার) / ISF [4]। ',
            ),
          ],
          bullets: [
            l(
              'Correction Calculation: Using the patient with TDD = 50 units: ISF = 1800 / 50 = 36 mg/dL per unit (1 unit drops blood glucose by 36 mg/dL; or 100 / 50 = 2.0 mmol/L per unit). If pre-meal blood glucose is 218 mg/dL and the physician’s preprandial target is 110 mg/dL: Blood Glucose Excess = 218 - 110 = 108 mg/dL. Correction Bolus = 108 mg/dL / 36 mg/dL/unit = 3.0 units [4].',
              'কারেকশন গণনার উদাহরণ: TDD = ৫০ ইউনিট হলে, ISF = ১৮০০ / ৫০ = ৩৬ mg/dL প্রতি ইউনিট (১ ইউনিট ইনসুলিন ৩৬ মিলিগ্রাম সুগার কমাবে)। যদি খাওয়ার আগে সুগার ২১৮ mg/dL থাকে এবং লক্ষ্যমাত্রা হয় ১১০ mg/dL, তবে অতিরিক্ত সুগার = ২১৮ - ১১০ = ১০৮ mg/dL। কারেকশন বোলাস = ১০৮ / ৩৬ = ৩.০ ইউনিট [4]। '
            ),
          ],
        },
        {
          id: 'sec-iob-stacking',
          heading: l(
            '3. Insulin-on-Board (IOB) & The Danger of Insulin Stacking',
            '৩. দেহে সক্রিয় ইনসুলিন (IOB) ও মারাত্মক ইনসুলিন ওভারল্যাপের ঝুঁকি'
          ),
          paragraphs: [
            l(
              'A critical pitfall in diabetes self-management is "insulin stacking." Rapid-acting insulin analogues do not finish acting immediately; their pharmacodynamic activity curve persists for 3 to 5 hours in subcutaneous tissue [4]. If a patient checks their blood glucose 2 hours after a meal, observes a reading of 200 mg/dL, and injects a full correction bolus without accounting for the active insulin still working from their previous injection, the overlapping doses will trigger severe late-phase hypoglycemia [1].',
              'ডায়াবেটিস ব্যবস্থাপনায় সবচেয়ে মারাত্মক ভুল হলো "ইনসুলিন স্ট্যাকিং" বা ওভারল্যাপ। দ্রুত কার্যকর ইনসুলিন শরীরে ৩ থেকে ৫ ঘণ্টা পর্যন্ত সক্রিয় থাকে [4]। খাওয়ার ২ ঘণ্টা পর সুগার ২০০ দেখে রোগী যদি না বুঝে আবারও পুরো মাত্রায় কারেকশন ইনসুলিন ইনজেকশন দেন, তবে আগের ইনসুলিন ও নতুন ইনসুলিন মিলে পরবর্তী কয়েক ঘণ্টায় রোগীকে মারাত্মক লো সুগার (হাইপোগ্লাইসেমিক শক) ও কোমায় ফেলতে পারে [1]।'
            ),
            l(
              'The active insulin remaining in the body is termed Insulin-on-Board (IOB) or Active Insulin. Modern insulin pumps calculate IOB in real time using exponential or curvilinear decay algorithms [4]. For manual injections: Combined Prandial Bolus = Meal Bolus + Correction Bolus - Active IOB [1, 4].',
              'শরীরে যে ইনসুলিন এখনও কাজ করছে তাকে ইনসুলিন-অন-বোর্ড (IOB) বলে। আধুনিক ইনসুলিন পাম্প নিজে থেকেই এই সক্রিয় ইনসুলিন বাদ দিয়ে বোলাস নির্ধারণ করে। কলম ব্যবহারকারীদের ক্ষেত্রে নিয়ম: মোট বোলাস = মিল বোলাস + কারেকশন বোলাস - সক্রিয় IOB [1, 4]।'
            ),
          ],
        },
        {
          id: 'sec-fiber-deductions',
          heading: l(
            '4. Dietary Fiber & Polyol Deductions: Calculating Net Digestible Carbohydrate',
            '৪. খাদ্যের আঁশ ও পলিঅল বাদ দেওয়া: কার্যকর শর্করা (Net Carb) নির্ণয়'
          ),
          paragraphs: [
            l(
              'Not all dietary carbohydrates trigger insulin secretion. Insoluble and viscous soluble dietary fibers resist hydrolysis by mammalian pancreatic alpha-amylase and brush-border disaccharidases, passing unabsorbed into the colon [6]. Similarly, sugar alcohols (polyols such as maltitol, xylitol, and sorbitol) exhibit incomplete gastrointestinal absorption.',
              'খাবারের সব কার্বোহাইড্রেট রক্তে গ্লুকোজ হিসেবে প্রবেশ করে না। খাদ্য আঁশ (ফাইবার) মানবদেহের পাচক এনজাইম দ্বারা ভাঙে না এবং অক্ষত অবস্থায় বৃহদন্ত্রে চলে যায় [6]। একইভাবে সুগার অ্যালকোহলগুলোও (মল্টিটল, সরবিটল) পরিপাকতন্ত্রে আংশিক শোষিত হয়।'
            ),
            l(
              'The American Diabetes Association (ADA) provides standardized subtraction algorithms for advanced carbohydrate counting [1, 6]:',
              'আমেরিকান ডায়াবেটিস অ্যাসোসিয়েশন (ADA) কার্যকর শর্করা বের করার জন্য সুনির্দিষ্ট নিয়ম দিয়েছে [1, 6]:'
            ),
          ],
          bullets: [
            l(
              'The Fiber Rule: If a food portion contains >= 5 grams of dietary fiber, subtract half of the fiber grams from the total carbohydrate value: Net Digestible Carbohydrate = Total Carbohydrate - (Fiber Grams / 2) [1, 6]. If dietary fiber is less than 5 grams per serving, its glycemic attenuation is clinically modest and no subtraction is performed.',
              'ফাইবারের নিয়ম: যদি খাবারে প্রতি অংশে ৫ গ্রাম বা তার বেশি আঁশ থাকে, তবে মোট শর্করা থেকে ফাইবারের অর্ধেক বাদ দিতে হবে: কার্যকর কার্ব = মোট কার্ব - (ফাইবার / ২) [1, 6]। যদি ৫ গ্রামের কম আঁশ থাকে, তবে কোনো বাদ দেওয়ার প্রয়োজন নেই।'
            ),
            l(
              'The Sugar Alcohol Rule: For foods sweetened with polyols containing >= 5 grams of sugar alcohols per serving, subtract half of the polyol grams: Net Digestible Carbohydrate = Total Carbohydrate - (Sugar Alcohol Grams / 2) [1]. An exception is erythritol, which is completely non-caloric and excreted unchanged in urine, permitting 100% deduction.',
              'সুগার অ্যালকোহলের নিয়ম: খাবারে ৫ গ্রাম বা তার বেশি সুগার অ্যালকোহল থাকলে তার অর্ধেক বাদ দিতে হয় [1]। তবে এরিথ্রিটল সম্পূর্ণ ক্যালোরিমুক্ত হওয়ায় তা ১০০% বাদ দেওয়া যায়।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উচ্চতর'),
      sections: [
        {
          id: 'sec-fpu-warsaw',
          heading: l(
            '1. Beyond Carbohydrates: The Warsaw Fat-Protein Unit (FPU) & Dual-Wave Bolusing',
            '১. শর্করার বাইরে: ওয়ারশ ফ্যাট-প্রোটিন ইউনিট (FPU) ও ডুয়াল-ওয়েভ বোলাস পদ্ধতি'
          ),
          paragraphs: [
            l(
              'In classical diabetes education, carbohydrates were considered the exclusive driver of prandial insulin needs. However, continuous glucose monitoring (CGM) studies demonstrate that high-fat and high-protein meals induce severe, delayed postprandial hyperglycemia lasting 3 to 8 hours after consumption [2, 5].',
              'ঐতিহ্যগতভাবে মনে করা হতো কেবল শর্করাই ইনসুলিনের চাহিদা তৈরি করে। কিন্তু আধুনিক গবেষণায় দেখা গেছে, উচ্চ চর্বি ও অতিরিক্ত প্রোটিনযুক্ত খাবার খাওয়ার ৩ থেকে ৮ ঘণ্টা পর রক্তে ব্যাপক ও বিলম্বিত সুগার বৃদ্ধি ঘটায় [2, 5]। '
            ),
            l(
              'To calculate insulin coverage for high-protein, high-fat meals without triggering early hypoglycemia, clinical researchers developed the Warsaw Fat-Protein Unit (FPU) model [5]:',
              'খাওয়ার পরপরই লো সুগারের ঝুঁকি এড়িয়ে কীভাবে চর্বি ও প্রোটিনের দেরিতে আসা সুগার নিয়ন্ত্রণ করা যায়, তার জন্য গবেষকেরা "ফ্যাট-প্রোটিন ইউনিট" (FPU) মডেল তৈরি করেন [5]:'
            ),
          ],
          bullets: [
            l(
              '1 Fat-Protein Unit (FPU) Definition: 1 FPU is defined as 100 kcal derived from fat and protein combined [5]. Formula: FPU = [(Fat Grams * 9) + (Protein Grams * 4)] / 100.',
              '১ ফ্যাট-প্রোটিন ইউনিটের (FPU) সংজ্ঞা: প্রোটিন ও ফ্যাট থেকে আসা প্রতি ১০০ ক্যালোরিকে ১টি FPU বলে [5]। সূত্র: FPU = [(ফ্যাট গ্রাম * ৯) + (প্রোটিন গ্রাম * ৪)] / ১০০।'
            ),
            l(
              'Bolus Equivalence: Each 1 FPU requires the equivalent insulin coverage of 10 grams of carbohydrate (Insulin for FPU = [FPU * 10] / ICR) [5].',
              'ইনসুলিন সমতুল্যতা: প্রতি ১ FPU এর জন্য ১০ গ্রাম কার্বোহাইড্রেটের সমপরিমাণ ইনসুলিন বরাদ্দ করতে হয় (ইনসুলিন = [FPU * ১০] / ICR) [5]। '
            ),
            l(
              'Extended Delivery Duration: The FPU bolus must NEVER be injected immediately. It is extended over time: 1 FPU -> extend over 3 hours; 2 FPU -> extend over 4 hours; 3 FPU -> extend over 5 hours; > 3 FPU -> extend over 6 to 8 hours [5].',
              'বর্ধিত সময়কাল (ডুয়াল-ওয়েভ): এই ইনসুলিন কখনোই একসাথে দেওয়া যাবে না। পাম্পে ডুয়াল-ওয়েভ বা পেন ব্যবহারকারীদের বিভক্ত ডোজে দিতে হবে: ১ FPU হলে ৩ ঘণ্টায়; ২ FPU হলে ৪ ঘণ্টায়; ৩ FPU হলে ৫ ঘণ্টায়; ৩ এর বেশি হলে ৬-৮ ঘণ্টায় ছড়িয়ে দিতে হবে [5]। '
            ),
            l(
              'Dual-Wave Bolus Splitting: The immediate normal bolus covers the carbohydrate grams upfront; the square-wave extended bolus covers the FPU slowly over 3 to 6 hours [4, 5].',
              'ডুয়াল-ওয়েভ বোলাস বিভাজন: সাধারণ বোলাসটি তাৎক্ষণিকভাবে খাবারের শর্করার জন্য আগে দিতে হয়, আর বর্ধিত বোলাসটি আগামী ৩ থেকে ৬ ঘণ্টায় ধীরে ধীরে প্রোটিন ও ফ্যাটের দেরিতে আসা সুগারকে প্রতিরোধ করে [4, 5]। '
            ),
          ],
        },
        {
          id: 'sec-cgm-tir-metrics',
          heading: l(
            '2. Continuous Glucose Monitoring Consensus: Time-in-Range (TIR) Architecture',
            '২. কন্টিনিউয়াস গ্লুকোজ মনিটরিং (CGM): টাইম-ইন-রেঞ্জ (TIR) মানদণ্ড'
          ),
          paragraphs: [
            l(
              'Carbohydrate counting accuracy is evaluated clinically not just by glycated hemoglobin (HbA1c), which conceals dangerous glycemic excursions, but via Continuous Glucose Monitoring (CGM) metrics. The International Consensus on Time in Range establishes clear therapeutic targets for patients utilizing advanced carbohydrate counting [3]:',
              'কার্বোহাইড্রেট গণনার কার্যকারিতা যাচাইয়ে কেবল HbA1c যথেষ্ট নয়, কারণ তা ক্ষতিকর সুগার ওঠানামা লুকিয়ে রাখে। আন্তর্জাতিক ঐকমত্য অনুযায়ী কন্টিনিউয়াস গ্লুকোজ মনিটরিংয়ের (CGM) মাধ্যমে ৪টি মূল পরিমাপক মূল্যায়ন করা হয় [3]:'
            ),
          ],
          bullets: [
            l(
              'Time in Range (TIR, 70–180 mg/dL [3.9–10.0 mmol/L]): Primary clinical goal is > 70% of readings within target [3]. Every 10% increase in TIR correlates with a ~0.8% reduction in HbA1c and significant reductions in microvascular and macrovascular complications.',
              'টাইম ইন রেঞ্জ (TIR: ৭০-১৮০ mg/dL বা ৩.৯-১০.০ mmol/L): মূল লক্ষ্য হলো সারাদিনের ৭০% এর বেশি সময় এই কাঙ্ক্ষিত সীমার মধ্যে থাকা [3]। প্রতি ১০% TIR বৃদ্ধি জটিলতার ঝুঁকি বহুলাংশে কমিয়ে দেয়।'
            ),
            l(
              'Time Below Range (TBR, < 70 mg/dL [< 3.9 mmol/L]): Must be kept < 4% of readings, with severe hypoglycemia (< 54 mg/dL [< 3.0 mmol/L]) strictly < 1% to prevent cardiac arrhythmias and cognitive impairment [3].',
              'টাইম বিলো রেঞ্জ (TBR: < ৭০ mg/dL): দিনের ৪% সময়ের কম হতে হবে। আর মারাত্মক লো সুগার (< ৫৪ mg/dL) কঠোরভাবে ১% সময়ের কম রাখা বাধ্যতামূলক [3]। '
            ),
            l(
              'Time Above Range (TAR, > 180 mg/dL [> 10.0 mmol/L]): Target is < 25% of readings, with severe hyperglycemia (> 250 mg/dL) limited to < 5% [3].',
              'টাইম অ্যাবাভ রেঞ্জ (TAR: > ১৮০ mg/dL): দিনের ২৫% সময়ের কম হতে হবে; আর ২৫০ এর বেশি সুগার ৫% এর নিচে সীমিত রাখতে হবে [3]। '
            ),
            l(
              'Glycemic Variability (%CV): The coefficient of variation (%CV = standard deviation / mean glucose * 100) must be <= 36% to indicate stable, predictable postprandial glucose dynamics [3].',
              'গ্লাইসেমিক পরিবর্তনশীলতা (%CV): সুগারের ঘন ঘন ওঠানামা মাপার মানদণ্ড। এটি অবশ্যই ৩৬% বা তার কম হতে হবে, যা স্থিতিশীল শর্করা নিয়ন্ত্রণের প্রমাণ [3]। '
            ),
          ],
        },
        {
          id: 'sec-worked-case-study',
          heading: l(
            '3. Comprehensive Clinical Case Study: Intensive Prandial Bolus Formulation',
            '৩. পূর্ণাঙ্গ ক্লিনিক্যাল কেস স্টাডি: নিবিড় প্র্যান্ডিয়াল বোলাস নির্ধারণ'
          ),
          paragraphs: [
            l(
              'Patient Profile: A 28-year-old male with Type 1 Diabetes (weight 70 kg, height 175 cm). Currently prescribed insulin degludec (basal) 22 units once daily and insulin aspart (prandial) with meals. His average Total Daily Dose (TDD) across the past 14 days is 50 units. He presents for lunch with a pre-meal fingerstick blood glucose of 218 mg/dL. Preprandial target blood glucose is 110 mg/dL [1, 4].',
              'রোগীর বিবরণ: ২৮ বছর বয়সী টাইপ ১ ডায়াবেটিসে আক্রান্ত পুরুষ (ওজন ৭০ কেজি)। তিনি দিনে ২২ ইউনিট ডিগ্লুডেক (বেসাল) এবং খাওয়ার আগে অ্যাসপার্ট ইনসুলিন নেন। গত ১৪ দিনের তথ্যে তার দৈনিক মোট ইনসুলিন ডোজ (TDD) = ৫০ ইউনিট। দুপুরের খাবারের আগে তার রক্তে সুগার ২১৮ mg/dL। চিকিৎসকের দেওয়া কাঙ্ক্ষিত প্রাক-আহার সুগারের লক্ষ্য ১১০ mg/dL [1, 4]। '
            ),
            l(
              'Meal Composition: 1 cup cooked parboiled rice (45g carb, 1g fiber), 1 cup cooked dal (30g carb, 8g fiber), 4 oz baked chicken breast (0g carb, 28g protein, 4g fat), 1 cup mixed vegetable salad with olive oil (5g carb, 3g fiber, 10g fat). Total meal carbohydrate = 45 + 30 + 0 + 5 = 80 grams. Total meal fiber = 1 + 8 + 0 + 3 = 12 grams. Last prandial bolus was injected 4 hours ago (active IOB = 0.0 units).',
              'খাবারের তালিকা: ১ কাপ সিদ্ধ চালের ভাত (৪৫ গ্রাম কার্ব, ১ গ্রাম ফাইবার), ১ কাপ মসুর ডাল (৩০ গ্রাম কার্ব, ৮ গ্রাম ফাইবার), ৪ আউন্স মুরগির মাংস (০ গ্রাম কার্ব, ২৮ গ্রাম প্রোটিন, ৪ গ্রাম ফ্যাট), ১ কাপ সালাদ ও অলিভ অয়েল (৫ গ্রাম কার্ব, ৩ গ্রাম ফাইবার, ১০ গ্রাম ফ্যাট)। মোট শর্করা = ৮০ গ্রাম; মোট আঁশ = ১২ গ্রাম। আগের ইনসুলিন দেওয়া হয়েছিল ৪ ঘণ্টা আগে (অবশিষ্ট সক্রিয় IOB = ০.০ ইউনিট)।'
            ),
          ],
          bullets: [
            l(
              'Step 1: Calculate ICR and ISF. ICR = 500 / 50 = 10 g/unit (1 unit per 10g carb). ISF = 1800 / 50 = 36 mg/dL per unit (1 unit drops glucose by 36 mg/dL) [4].',
              'ধাপ ১: ICR এবং ISF নির্ণয়: ICR = ৫০০ / ৫০ = ১০ গ্রাম/ইউনিট। ISF = ১৮০০ / ৫০ = ৩৬ mg/dL প্রতি ইউনিট [4]। '
            ),
            l(
              'Step 2: Calculate Net Digestible Carbohydrate. Total fiber is 12 grams (which exceeds the 5-gram threshold). Deduct half of the fiber: Net Carb = 80g - (12g / 2) = 80g - 6g = 74 grams [1, 6].',
              'ধাপ ২: কার্যকর শর্করা (Net Carb) বের করা: মোট ফাইবার ১২ গ্রাম (যা ৫ গ্রামের বেশি)। নিয়ম অনুযায়ী অর্ধেক বাদ: ৭৪ গ্রাম নিট শর্করা [1, 6]। '
            ),
            l(
              'Step 3: Calculate Meal Bolus. Meal Bolus = 74g / 10g/unit = 7.4 units of insulin aspart.',
              'ধাপ ৩: খাবারের বোলাস: ৭৪ গ্রাম / ১০ = ৭.৪ ইউনিট অ্যাসপার্ট ইনসুলিন।'
            ),
            l(
              'Step 4: Calculate Correction Bolus. Excess Glucose = 218 mg/dL - 110 mg/dL = 108 mg/dL. Correction Bolus = 108 mg/dL / 36 mg/dL/unit = 3.0 units [4].',
              'ধাপ ৪: কারেকশন বোলাস: অতিরিক্ত সুগার = ২১৮ - ১১০ = ১০৮ mg/dL। কারেকশন বোলাস = ১০৮ / ৩৬ = ৩.০ ইউনিট [4]। '
            ),
            l(
              'Step 5: Account for Insulin-on-Board (IOB) & Determine Final Dose. Total Bolus = Meal Bolus (7.4) + Correction Bolus (3.0) - IOB (0.0) = 10.4 units. On a standard half-unit pen or pump, deliver 10.5 units immediately before the meal [4].',
              'ধাপ ৫: মোট ইনসুলিন নির্ধারণ: মোট বোলাস = ৭.৪ + ৩.০ - ০.০ = ১০.৪ ইউনিট। পেন বা পাম্পে ১০.৫ ইউনিট ইনসুলিন খাবারের ঠিক আগে প্রয়োগ করতে হবে [4]। '
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Metabolic Engine & Injection Analogy', '১. বিপাকীয় ইঞ্জিন ও ইনজেকশন উপমা'), sectionId: 'sec-engine-analogy' },
      { id: 'toc-2', label: l('2. Basic vs. Advanced Carb Counting', '২. প্রাথমিক বনাম উন্নত কার্ব গণনা'), sectionId: 'sec-two-counting-tiers' },
      { id: 'toc-3', label: l('3. 15-Gram Carb Milestones', '৩. ১৫-গ্রাম শর্করা মাইলফলক'), sectionId: 'sec-portion-milestones' },
      { id: 'toc-4', label: l('4. Rule of 500 for ICR', '৪. আইসিআরের জন্য ৫০০-এর নিয়ম'), sectionId: 'sec-rule-500-icr' },
      { id: 'toc-5', label: l('5. Rule of 1800 for ISF', '৫. আইএসএফের জন্য ১৮০০-এর নিয়ম'), sectionId: 'sec-rule-1800-isf' },
      { id: 'toc-6', label: l('6. Active Insulin-on-Board (IOB)', '৬. শরীরে সক্রিয় ইনসুলিন (IOB) ও ক্ষয়'), sectionId: 'sec-iob-stacking' },
      { id: 'toc-7', label: l('7. Fiber & Polyol Deductions', '৭. খাদ্য আঁশ ও সুগার অ্যালকোহল হিসাব'), sectionId: 'sec-fiber-deductions' },
      { id: 'toc-8', label: l('8. Warsaw Fat-Protein Units (FPU)', '৮. ওয়ারশ ফ্যাট-প্রোটিন ইউনিট ও ডুয়াল-ওয়েভ'), sectionId: 'sec-fpu-warsaw' },
      { id: 'toc-9', label: l('9. CGM Time-in-Range Consensus', '৯. সিজিএম টাইম-ইন-রেঞ্জ আন্তর্জাতিক মান'), sectionId: 'sec-cgm-tir-metrics' },
      { id: 'toc-10', label: l('10. Intensive Bolus Case Study', '১০. নিবিড় ইনসুলিন বোলাস কেস স্টাডি'), sectionId: 'sec-worked-case-study' },
    ],
    terms: [
      {
        term: l('Insulin-to-Carbohydrate Ratio (ICR)', 'ইনসুলিন-টু-কার্ব অনুপাত (ICR)'),
        definition: l(
          'The number of grams of carbohydrate covered by 1 unit of rapid-acting prandial insulin, calculated as 500 / TDD.',
          '১ ইউনিট দ্রুত কার্যকর ইনসুলিন যত গ্রাম শর্করাকে বিপাক করতে পারে তার অনুপাত, যা ৫০০ / TDD দিয়ে হিসাব করা হয়।'
        ),
      },
      {
        term: l('Insulin Sensitivity Factor (ISF)', 'ইনসুলিন সংবেদনশীলতা ফ্যাক্টর (ISF)'),
        definition: l(
          'The reduction in blood glucose (in mg/dL) produced by 1 unit of rapid-acting insulin, calculated as 1800 / TDD.',
          '১ ইউনিট দ্রুত কার্যকর ইনসুলিন রক্তে যত মিলিগ্রাম গ্লুকোজ কমাতে পারে তার পরিমাপ, যা ১৮০০ / TDD দিয়ে নির্ণয় করা হয়।'
        ),
      },
      {
        term: l('Insulin-on-Board (IOB)', 'দেহে সক্রিয় ইনসুলিন (IOB)'),
        definition: l(
          'The residual active insulin remaining in subcutaneous tissue from previous boluses, decaying over a 3 to 5 hour pharmacodynamic curve.',
          'আগের ইনজেকশনের পর ত্বকের নিচে এখনও সক্রিয় থাকা অবশিষ্ট ইনসুলিনের পরিমাণ, যা ৩ থেকে ৫ ঘণ্টায় নিঃশেষ হয়।'
        ),
      },
      {
        term: l('Fat-Protein Unit (FPU)', 'ফ্যাট-প্রোটিন ইউনিট (FPU)'),
        definition: l(
          'A clinical unit equal to 100 kcal of fat and protein combined, requiring extended insulin coverage equivalent to 10g of carbohydrate.',
          'ফ্যাট ও প্রোটিন থেকে আসা প্রতি ১০০ ক্যালোরির একটি একক, যা ১০ গ্রাম শর্করার সমপরিমাণ বর্ধিত ইনসুলিন দাবি করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Worked Calculation: Pre-Meal Correction with Active Insulin-on-Board (IOB)',
          'হাতে-কলমে হিসাব: সক্রিয় ইনসুলিন (IOB) বাদ দিয়ে প্রাক-আহার কারেকশন'
        ),
        steps: [
          l(
            'Step 1: Patient Parameters: TDD = 40 units. Pre-meal blood glucose = 250 mg/dL. Target glucose = 110 mg/dL. Active IOB from a correction 2 hours ago = 1.2 units.',
            'ধাপ ১: রোগীর তথ্য: TDD = ৪০ ইউনিট। প্রাক-আহার সুগার = ২৫০ mg/dL। লক্ষ্যমাত্রা = ১১০ mg/dL। ২ ঘণ্টা আগের ইনজেকশনের অবশিষ্ট সক্রিয় IOB = ১.২ ইউনিট।'
          ),
          l(
            'Step 2: Calculate ISF: ISF = 1800 / 40 = 45 mg/dL per unit. (1 unit drops blood glucose by 45 mg/dL).',
            'ধাপ ২: ISF নির্ণয়: ISF = ১৮০০ / ৪০ = ৪৫ mg/dL প্রতি ইউনিট। (১ ইউনিট ইনসুলিন ৪৫ মিলিগ্রাম সুগার কমায়)।'
          ),
          l(
            'Step 3: Calculate Gross Correction: Excess Blood Glucose = 250 - 110 = 140 mg/dL. Gross Correction = 140 / 45 = 3.11 units.',
            'ধাপ ৩: মূল কারেকশন হিসাব: অতিরিক্ত সুগার = ২৫০ - ১১০ = ১৪০ mg/dL। মূল কারেকশন = ১৪০ / ৪৫ = ৩.১১ ইউনিট।'
          ),
          l(
            'Step 4: Subtract Active IOB: Net Correction Bolus = Gross Correction (3.11) - Active IOB (1.2) = 1.91 ≈ 2.0 units. If IOB were ignored and the patient took 3.1 units, they would experience severe hypoglycemia 2 hours later.',
            'ধাপ ৪: সক্রিয় IOB বাদ দেওয়া: নিট কারেকশন বোলাস = ৩.১১ - ১.২ = ১.৯১ ≈ ২.০ ইউনিট। IOB বাদ না দিলে অতিরিক্ত ১.২ ইউনিট ইনসুলিনের কারণে রোগী ভয়াবহ লো সুগারে পড়তেন।'
          ),
        ],
        conclusion: l(
          'Always account for active Insulin-on-Board to prevent insulin stacking and severe postprandial hypoglycemic crises.',
          'মারাত্মক ইনসুলিন ওভারল্যাপ ও বিপত্তি এড়াতে কারেকশন দেওয়ার আগে অবশ্যই অবশিষ্ট সক্রিয় ইনসুলিন (IOB) বাদ দিন।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why must a clinician deduct half of the dietary fiber grams only when fiber is 5 grams or greater per serving?',
          'খাবারে প্রতি অংশে ৫ গ্রাম বা তার বেশি আঁশ থাকলেই কেবল কেন ফাইবারের অর্ধেক বাদ দিতে হয়?'
        ),
        answer: l(
          'Dietary fiber is indigestible carbohydrate that does not yield systemic glucose. However, when foods contain only small amounts of fiber (< 5g), the metabolic delay is negligible, and subtracting it introduces minor dosing inaccuracies. When a single meal contains >= 5g of viscous or insoluble fiber, the physical barrier to enzymatic hydrolysis significantly blunts glucose absorption, requiring a mathematical deduction of 50% of fiber grams to prevent over-bolusing and postprandial hypoglycemia.',
          'খাদ্য আঁশ পরিপাক না হওয়ায় রক্তে সরাসরি সুগার হিসেবে ঢোকে না। তবে খাবারের আঁশ যদি ৫ গ্রামের কম হয়, তবে তার প্রভাব খুবই সামান্য হওয়ায় বাদ দিলে ইনসুলিনের ঘাটতি হতে পারে। কিন্তু ৫ গ্রাম বা তার বেশি আঁশ থাকলে তা পরিপাক প্রক্রিয়াকে লক্ষণীয়ভাবে মন্থর করে দেয়; ফলে তখন ফাইবারের অর্ধেক বাদ না দিলে অতিরিক্ত ইনসুলিন প্রয়োগের কারণে রোগীর রক্তে বিপজ্জনকভাবে সুগার কমে (হাইপোগ্লাইসেমিয়া) যেতে পারে।'
        ),
      },
      {
        question: l(
          'What physiological catastrophe occurs when a patient corrects a postprandial blood sugar of 220 mg/dL without subtracting active Insulin-on-Board (IOB)?',
          'শরীরে সক্রিয় ইনসুলিন (IOB) হিসাব না করে খাওয়ার ২ ঘণ্টা পর ২২০ সুগারের জন্য অতিরিক্ত ইনসুলিন দিলে কী শারীরিক বিপর্যয় ঘটে?'
        ),
        answer: l(
          'Rapid-acting insulin analogues have a pharmacodynamic activity curve lasting 3 to 5 hours. If a patient injects another full correction dose at hour 2, the residual active insulin from the meal bolus overlaps with the peak action of the new correction bolus—a dangerous event known as "insulin stacking." As both doses simultaneously drive glucose into cells and shut off hepatic glucose output, the patient experiences precipitous neuroglycopenic hypoglycemia, risking seizures, loss of consciousness, and cardiac arrhythmias.',
          'দ্রুত কার্যকর ইনসুলিন শরীরে ৩ থেকে ৫ ঘণ্টা পর্যন্ত কাজ করতে থাকে। খাওয়ার ২ ঘণ্টা পর না বুঝে আবার পুরো মাত্রায় কারেকশন ইনসুলিন দিলে আগের ইনসুলিন ও নতুন ইনসুলিনের ক্রিয়া একসাথে চূড়ায় পৌঁছায় (ইনসুলিন স্ট্যাকিং)। এর ফলে রক্ত থেকে সব গ্লুকোজ কোষে ঢুকে গিয়ে মস্তিষ্কে জ্বালানি শূন্য হয়ে যায়; রোগী খিঁচুনি, অজ্ঞান হওয়া ও প্রাণঘাতী কোমায় আক্রান্ত হতে পারেন।'
        ),
      },
    ],
  },
}

export const dietetics13CarbCountingLesson = dietetics13Lesson
