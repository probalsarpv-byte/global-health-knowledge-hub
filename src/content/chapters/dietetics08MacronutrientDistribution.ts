import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics08References: LessonReference[] = [
  {
    id: 'ref-iom-amdr-2005',
    authors: 'Institute of Medicine (US) Food and Nutrition Board',
    title: 'Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids',
    organization: 'National Academies Press (US)',
    year: 2005,
    url: 'https://nap.nationalacademies.org/catalog/10490/dietary-reference-intakes-for-energy-carbohydrate-fiber-fat-fatty-acids-cholesterol-protein-and-amino-acids',
    doi: '10.17226/10490',
  },
  {
    id: 'ref-evert-diabetes-mnt-2019',
    authors: 'Evert AB, Dennison M, Gardner CD, et al.',
    title: 'Nutrition Therapy for Adults with Diabetes or Prediabetes: A Consensus Report',
    organization: 'Diabetes Care',
    year: 2019,
    url: 'https://diabetesjournals.org/care/article/42/5/731/40480/Nutrition-Therapy-for-Adults-With-Diabetes-or',
    doi: '10.2337/dci19-0014',
  },
  {
    id: 'ref-grundy-aha-acc-2019',
    authors: 'Grundy SM, Stone NJ, Bailey AL, et al.',
    title: '2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol',
    organization: 'Circulation',
    year: 2019,
    url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000625',
    doi: '10.1161/CIR.0000000000000625',
  },
  {
    id: 'ref-slavin-dietary-fiber-2013',
    authors: 'Slavin J',
    title: 'Fiber and Prebiotics: Mechanisms and Health Benefits',
    organization: 'Nutrients',
    year: 2013,
    url: 'https://www.mdpi.com/2072-6643/5/4/1417',
    doi: '10.3390/nu5041417',
  },
  {
    id: 'ref-atwater-energy-factors',
    authors: 'Atwater WO, Bryant AP',
    title: 'The Chemical Composition of American Food Materials',
    organization: 'US Department of Agriculture, Office of Experiment Stations',
    year: 1906,
    url: 'https://naldc.nal.usda.gov/catalog/IND43861348',
  },
]

export const dietetics08MacronutrientLesson: LessonTopic = {
  id: 'topic.dietetics.macronutrient-distribution',
  slug: 'macronutrient-distribution-ranges-amdr-goals',
  title: l(
    '08 · Macronutrient Distribution: AMDR Allocation & Clinical Energy Balancing',
    '০৮ · ম্যাক্রোনিউট্রিয়েন্ট বিভাজন: এএমডিআর বণ্টন ও ক্লিনিক্যাল শক্তি ভারসাম্য'
  ),
  summary: l(
    'Clinical translation of caloric prescriptions into balanced macronutrient targets: applying Acceptable Macronutrient Distribution Ranges (AMDR), mastering Atwater energy conversion math, tailoring carbohydrate-fat-protein splits for diabetes, COPD, and hypertriglyceridemia, and engineering dietary fiber architecture.',
    'মোট ক্যালোরি ব্যবস্থাপত্রকে নির্দিষ্ট খাদ্য উপাদানে রূপান্তর: গ্রহণযোগ্য ম্যাক্রোনিউট্রিয়েন্ট বিভাজন (AMDR) প্রয়োগ, অ্যাটওয়াটার রূপান্তর সূত্রের নিখুঁত হিসাব, ডায়াবেটিস, ফুসফুসের রোগ ও উচ্চ ট্রাইগ্লিসারাইডের জন্য উপযুক্ত কার্বোহাইড্রেট-ফ্যাট-প্রোটিনের অনুপাত এবং ডায়েটারি ফাইবারের বিজ্ঞানভিত্তিক নকশা।'
  ),
  subject: 'dietetics',
  version: 1,
  updatedAt: '2026-11-03',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-03',
  prerequisiteIds: ['topic.dietetics.predictive-energy-equations', 'topic.dietetics.protein-requirements'],
  relatedTopicIds: ['topic.dietetics.predictive-energy-equations', 'topic.metabolism.fatty-acid-synthesis-lipogenesis'],
  objectives: [
    l(
      'Apply standard Acceptable Macronutrient Distribution Ranges (AMDR): Carbohydrates 45–65%, Fats 20–35%, and Protein 10–35% of total daily energy.',
      'মানসম্মত গ্রহণযোগ্য ম্যাক্রোনিউট্রিয়েন্ট বিভাজন (AMDR) সীমা প্রয়োগ: কার্বোহাইড্রেট ৪৫-৬৫%, ফ্যাট ২০-৩৫% এবং প্রোটিন ১০-৩৫%।'
    ),
    l(
      'Convert energy prescriptions into exact macronutrient grams using Atwater physiological energy factors (Carb = 4 kcal/g, Protein = 4 kcal/g, Fat = 9 kcal/g).',
      'অ্যাটওয়াটার রূপান্তর সূত্র (কার্ব = ৪ kcal/গ্রাম, প্রোটিন = ৪ kcal/গ্রাম, ফ্যাট = ৯ kcal/গ্রাম) ব্যবহার করে ক্যালোরিকে সঠিক গ্রামে রূপান্তর করা।'
    ),
    l(
      'Modify macronutrient distribution for respiratory failure and COPD (higher fat, lower carb) to minimize carbon dioxide generation and ventilatory burden.',
      'ফুসফুসের দীর্ঘমেয়াদী রোগ ও সিওপিডিতে কার্বন ডাই-অক্সাইড উৎপাদন কমাতে ফ্যাট বাড়িয়ে এবং কার্বোহাইড্রেট কমিয়ে খাদ্যতালিকা প্রস্তুত করা।'
    ),
    l(
      'Formulate ultra-low fat prescriptions (<15–20% of energy) for severe hypertriglyceridemia (TG > 500–1000 mg/dL) to prevent acute necrotizing pancreatitis.',
      'মারাত্মক উচ্চ ট্রাইগ্লিসারাইডে (TG > ৫০০-১০০০ mg/dL) প্যানক্রিয়াটাইটিস প্রতিরোধে অতি-স্বল্প চর্বির (<১৫-২০%) ডায়েট প্রণয়ন করা।'
    ),
    l(
      'Calculate therapeutic dietary fiber goals (14 g / 1,000 kcal, minimum 25–35 g/day) balancing soluble viscous fibers with insoluble bulking fractions.',
      'প্রতি ১০০০ ক্যালোরির জন্য ১৪ গ্রাম (দৈনিক ২৫-৩৫ গ্রাম) হারে দ্রবণীয় ও অদ্রবণীয় খাদ্যআঁশের সঠিক অনুপাত নির্ধারণ করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A tri-sector clinical macronutrient allocation circle: Sector 1 (Protein) is locked first based on clinical g/kg demands (10–35%); Sector 2 (Fat) is titrated based on cardiovascular and metabolic criteria (20–35%, with SFA < 7–10%); Sector 3 (Carbohydrate) fills the remaining caloric window (45–65%) fortified with a minimum of 14g fiber per 1000 kcal.',
      'ম্যাক্রোনিউট্রিয়েন্ট বণ্টনের তিন স্তরের বৃত্তাকার চিত্র: প্রথমে প্রোটিনকে রোগীর ক্লিনিক্যাল প্রয়োজন (g/kg) অনুযায়ী লক করা হয় (১০-৩৫%); এরপর হৃদরোগ ও মেটাবলিক লক্ষ্য অনুযায়ী ফ্যাট নির্ধারণ করা হয় (২০-৩৫%); অবশিষ্ট ক্যালোরি স্বাস্থ্যকর জটিল কার্বোহাইড্রেট (৪৫-৬৫%) ও আঁশ দিয়ে পূরণ করা হয়।'
    ),
    steps: [
      l(
        'Step 1: Calculate Total Energy (TEE). Establish the patient’s validated daily caloric target (e.g., 1,800 kcal/day).',
        'ধাপ ১: মোট ক্যালোরি নির্ধারণ: রোগীর দৈনিক মোট শক্তির কাঙ্ক্ষিত পরিমাণ (যেমন ১৮০০ kcal/দিন) নির্ধারণ করুন।'
      ),
      l(
        'Step 2: Lock Clinical Protein First. Determine protein grams based on clinical status (e.g., 1.2 g/kg = 84 g = 336 kcal = 18.7% of TEE).',
        'ধাপ ২: প্রোটিনের পরিমাণ নির্দিষ্টকরণ: রোগের চাহিদা অনুযায়ী প্রথমে প্রোটিনের গ্রাম ও ক্যালোরি (যেমন ৮৪ গ্রাম = ৩৩৬ kcal = ১৮.৭%) নির্ধারণ করুন।'
      ),
      l(
        'Step 3: Establish Fat Boundaries. Select fat percentage based on lipid panel (e.g., 28% of TEE = 504 kcal / 9 = 56 g fat, with SFA < 7%).',
        'ধাপ ৩: ফ্যাটের সীমা নির্ধারণ: রক্তের চর্বির রিপোর্ট অনুযায়ী ফ্যাটের ক্যালোরি ও গ্রাম (যেমন ২৮% = ৫০৪ kcal / ৯ = ৫৬ গ্রাম ফ্যাট) নির্ধারণ করুন।'
      ),
      l(
        'Step 4: Balance Complex Carbohydrates & Fiber. Remaining calories: $1,800 - (336 + 504) = 960\\text{ kcal} / 4 = 240\\text{ g carb}$ (53.3% of TEE). Ensure $\\ge 25\\text{ g}$ total fiber.',
        'ধাপ ৪: কার্বোহাইড্রেট ও আঁশের ভারসাম্য: অবশিষ্ট ক্যালোরি থেকে কার্বোহাইড্রেটের গ্রাম ($৯৬০ / ৪ = ২৪০\text{ গ্রাম}$) এবং অন্তত ২৫ গ্রাম খাদ্যআঁশ নিশ্চিত করুন।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 58-year-old male with severe chronic hypertriglyceridemia (fasting serum triglycerides = 1,120 mg/dL, normal < 150) and eruptive xanthomas presents to your metabolic clinic. He is at imminent risk for acute necrotizing pancreatitis. What is the mandatory immediate dietary macronutrient adjustment for this patient?',
      'মারাত্মক দীর্ঘমেয়াদী হাইপারট্রাইগ্লিসারাইডিয়ায় (রক্তে ট্রাইগ্লিসারাইড = ১১২০ mg/dL, স্বাভাবিক < ১৫০) আক্রান্ত ৫৮ বছর বয়সী এক পুরুষ মেটাবলিক ক্লিনিকে এসেছেন। তার তীব্র প্যানক্রিয়াটাইটিসের মারাত্মক ঝুঁকি রয়েছে। এই রোগীর ক্ষেত্রে তাৎক্ষণিক কোন খাদ্য ম্যাক্রোনিউট্রিয়েন্ট পরিবর্তন বাধ্যতামূলক?'
    ),
    options: [
      l(
        'Prescribe a high-fat ketogenic diet (75% fat) to suppress insulin secretion and lower glucose.',
        'ইনসুলিন কমাতে এবং গ্লুকোজ হ্রাস করতে একটি উচ্চ-চর্বিযুক্ত কিটোজেনিক ডায়েট (৭৫% ফ্যাট) দেওয়া।'
      ),
      l(
        'Immediately restrict total dietary fat to < 15–20% of total daily energy (approximately 20–30 g of total fat/day) and completely eliminate all alcohol and refined simple sugars to clear circulating chylomicrons.',
        'রক্তের কাইলোমাইক্রন দ্রুত পরিষ্কার করতে এবং প্যানক্রিয়াটাইটিস ঠেকাতে মোট চর্বি তাৎক্ষণিকভাবে কমিয়ে মোট ক্যালোরির < ১৫-২০% (দিনে মাত্র ২০-৩০ গ্রাম ফ্যাট) করা এবং সব ধরনের অ্যালকোহল ও চিনিযুক্ত খাবার সম্পূর্ণ নিষিদ্ধ করা।'
      ),
      l(
        'Increase saturated animal fats to 25% of energy to stimulate bile acid secretion and clearance.',
        'পিত্তরস নিঃসরণ বাড়াতে প্রাণিজ চর্বি বাড়িয়ে মোট ক্যালোরির ২৫% করা।'
      ),
      l(
        'Maintain a standard 35% fat diet while advising the patient to take over-the-counter fish oil capsules without medical supervision.',
        'খাবারে সাধারণ ৩৫% ফ্যাট বজায় রেখে রোগীকে সাধারণ ফিশ অয়েল ক্যাপসুল খাওয়ার পরামর্শ দেওয়া।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'When fasting triglycerides exceed 1,000 mg/dL, lipoprotein lipase (LPL) enzymes are completely saturated, causing massive accumulation of large chylomicrons. This dramatically increases blood viscosity and triggers capillary ischemia in the pancreas, precipitating fatal acute necrotizing pancreatitis. Standard AHA/Endocrine Society guidelines mandate emergency restriction of total dietary fat to < 15–20% of daily energy (20–30 g/day) and absolute cessation of alcohol and simple sugars until serum triglycerides fall below 500 mg/dL.',
      'যখন ট্রাইগ্লিসারাইড ১০০০ mg/dL ছাড়িয়ে যায়, তখন চর্বি ভাঙার এনজাইম (LPL) স্যাচুরেটেড হয়ে রক্তে কাইলোমাইক্রনের বিশাল কণা জমে যায়। এটি রক্তের ঘনত্ব বাড়িয়ে প্যানক্রিয়াসের সূক্ষ্ম রক্তনালী বন্ধ করে দেয়, যা মারাত্মক প্যানক্রিয়াটাইটিস সৃষ্টি করে। আন্তর্জাতিক নির্দেশিকা অনুযায়ী ট্রাইগ্লিসারাইড ৫০০-এর নিচে না নামা পর্যন্ত চর্বির পরিমাণ তাৎক্ষণিকভাবে মোট ক্যালোরির ১৫-২০%-এর নিচে (দিনে মাত্র ২০-৩০ গ্রাম) নামিয়ে আনতে হবে এবং চিনি ও অ্যালকোহল পুরোপুরি বন্ধ করতে হবে।'
    ),
  },
  evidenceBySection: {
    'sec-macronutrient-basics': ['ref-iom-amdr-2005', 'ref-atwater-energy-factors'],
    'sec-amdr-intro': ['ref-iom-amdr-2005', 'ref-evert-diabetes-mnt-2019'],
    'sec-fiber-simple': ['ref-slavin-dietary-fiber-2013', 'ref-evert-diabetes-mnt-2019'],
    'sec-amdr-framework': ['ref-iom-amdr-2005', 'ref-atwater-energy-factors'],
    'sec-diabetes-lipid-mnt': ['ref-evert-diabetes-mnt-2019', 'ref-grundy-aha-acc-2019'],
    'sec-copd-pancreatitis-splits': ['ref-grundy-aha-acc-2019', 'ref-iom-amdr-2005'],
    'sec-fiber-architecture': ['ref-slavin-dietary-fiber-2013', 'ref-evert-diabetes-mnt-2019'],
  },
  references: dietetics08References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-macronutrient-basics',
          heading: l('1. The Three Macro Fuel Sources', '১. তিনটি প্রধান খাদ্য উপাদান'),
          paragraphs: [
            l(
              'Everything you eat is composed of three primary macronutrients that supply energy to the human body: **Carbohydrates**, **Fats**, and **Proteins** [1]. To calculate how much energy they provide, nutritionists use standard values called **Atwater energy factors** [5]:',
              'আমরা যা খাই তার সবকিছুই মূলত তিনটি প্রধান ম্যাক্রোনিউট্রিয়েন্ট দিয়ে গঠিত যা আমাদের শরীরে শক্তি যোগায়: **কার্বোহাইড্রেট**, **ফ্যাট বা চর্বি**, এবং **প্রোটিন** [1]। এগুলো থেকে প্রাপ্ত শক্তি হিসাব করতে পুষ্টিবিদরা বিশ্বজুড়ে স্বীকৃত **অ্যাটওয়াটার রূপান্তর মান** ব্যবহার করেন [5]:'
            ),
            l(
              '$$\\begin{aligned} &\\textbf{1 gram of Carbohydrate} \\quad = \\quad 4\\text{ calories (kcal)} \\\\ &\\textbf{1 gram of Protein} \\quad = \\quad 4\\text{ calories (kcal)} \\\\ &\\textbf{1 gram of Fat} \\quad = \\quad 9\\text{ calories (kcal)} \\\\ &\\textbf{1 gram of Alcohol} \\quad = \\quad 7\\text{ calories (kcal)} \\end{aligned}$$',
              '$$\\begin{aligned} &\\textbf{১ গ্রাম কার্বোহাইড্রেট} \\quad = \\quad ৪\\text{ ক্যালোরি (kcal)} \\\\ &\\textbf{১ গ্রাম প্রোটিন} \\quad = \\quad ৪\\text{ ক্যালোরি (kcal)} \\\\ &\\textbf{১ গ্রাম ফ্যাট বা চর্বি} \\quad = \\quad ৯\\text{ ক্যালোরি (kcal)} \\\\ &\\textbf{১ গ্রাম অ্যালকোহল} \\quad = \\quad ৭\\text{ ক্যালোরি (kcal)} \\end{aligned}$$'
            ),
            l(
              'Notice that fat is more than **twice as calorie-dense** as carbohydrates or protein. A single tablespoon of cooking oil contains about 14 grams of fat, which delivers 126 calories—the same energy as a large baked potato or a cup of cooked rice!',
              'লক্ষ করুন যে চর্বি বা তেলে কার্বোহাইড্রেট বা প্রোটিনের চেয়ে **দ্বিগুণেরও বেশি ক্যালোরি** থাকে। রান্নার মাত্র এক টেবিল চামচ তেলে প্রায় ১৪ গ্রাম ফ্যাট থাকে যা ১২৬ ক্যালোরি শক্তি যোগায়—যা একটি মাঝারি আলুর সমান ক্যালোরি!'
            ),
          ],
        },
        {
          id: 'sec-amdr-intro',
          heading: l('2. The Balanced Plate (AMDR Guidelines)', '২. সুষম খাদ্যের শতকরা অনুপাত (AMDR নির্দেশিকা)'),
          paragraphs: [
            l(
              'To ensure optimal health and prevent chronic disease, medical guidelines recommend the **Acceptable Macronutrient Distribution Ranges (AMDR)** [1]:',
              'সুস্বাস্থ্য রক্ষা এবং দীর্ঘমেয়াদী রোগ প্রতিরোধের জন্য চিকিৎসাবিজ্ঞান দৈনিক খাবারে প্রতিটি উপাদানের একটি স্বাস্থ্যকর সীমা বা **AMDR** সুপারিশ করে [1]:'
            ),
            l(
              '• **Carbohydrates: 45% to 65%** of daily calories (focused on whole grains, legumes, vegetables, and whole fruits).\n• **Fats: 20% to 35%** of daily calories (focused on healthy unsaturated fats from fish, nuts, seeds, and vegetable oils, while keeping saturated animal fats under 10%).\n• **Protein: 10% to 35%** of daily calories (from fish, poultry, eggs, dairy, beans, and lentils).',
              '• **কার্বোহাইড্রেট: ৪৫% থেকে ৬৫%** ক্যালোরি (লাল চালের ভাত, আটা, ডাল, শাকসবজি ও ফল থেকে)।\n• **ফ্যাট বা চর্বি: ২০% থেকে ৩৫%** ক্যালোরি (মাছের তেল, বাদাম, বীজ ও রান্নার উদ্ভিজ্জ তেল থেকে; স্যাচুরেটেড চর্বি ১০%-এর কম)।\n• **প্রোটিন: ১০% থেকে ৩৫%** ক্যালোরি (মাছ, মুরগি, ডিম, দুধ, ডাল ও ছোলার মতো পুষ্টিকর খাবার থেকে)।'
            ),
          ],
        },
        {
          id: 'sec-fiber-simple',
          heading: l('3. Why Fiber Is Essential', '৩. খাদ্যআঁশ বা ফাইবার কেন এত জরুরি?'),
          paragraphs: [
            l(
              'Dietary fiber is the indigestible part of plant foods that your stomach cannot break down [4]. Instead of being absorbed, fiber travels through your intestines, feeding your healthy gut bacteria, slowing down blood sugar spikes after meals, and escorting cholesterol out of your body. Adults need at least **25 to 35 grams of fiber every day**.',
              'ডায়েটারি ফাইবার বা খাদ্যআঁশ হলো উদ্ভিজ্জ খাবারের সেই অংশ যা আমাদের পাকস্থলী হজম করতে পারে না [4]। রক্তে শোষিত না হয়ে এটি অন্ত্রের ভেতর দিয়ে যায়, উপকারি ব্যাকটেরিয়ার খাবার যোগায়, খাওয়ার পর রক্তে চিনি দ্রুত বাড়তে বাধা দেয় এবং অতিরিক্ত কোলেস্টেরল মলের সাথে বের করে দেয়। প্রতিটি প্রাপ্তবয়স্ক মানুষের প্রতিদিন অন্তত **২৫ থেকে ৩৫ গ্রাম আঁশ** খাওয়া উচিত।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-amdr-framework',
          heading: l('1. The Acceptable Macronutrient Distribution Range (AMDR) Architecture', '১. গ্রহণযোগ্য ম্যাক্রোনিউট্রিয়েন্ট বিভাজন (AMDR) কাঠামো'),
          paragraphs: [
            l(
              'Established by the Institute of Medicine (now National Academy of Medicine), the **Acceptable Macronutrient Distribution Ranges (AMDR)** designate the percentage ranges of energy intake associated with reduced risk of chronic lifestyle diseases while providing adequate intakes of essential nutrients [1].',
              'আন্তর্জাতিক ন্যাশনাল অ্যাকাডেমি অব মেডিসিন কর্তৃক নির্ধারিত **AMDR** হলো প্রতিটি খাদ্য উপাদানের এমন একটি বৈজ্ঞানিক সীমানা, যা দীর্ঘমেয়াদী হৃদরোগ বা ডায়াবেটিসের ঝুঁকি কমিয়ে দেহের প্রয়োজনীয় সকল পুষ্টি নিশ্চিত করে [1]।'
            ),
            l(
              'Translating an energy prescription into macronutrient grams follows a sequential algorithmic protocol [1, 5]:',
              'মোট ক্যালোরিকে খাদ্য উপাদানের গ্রামে রূপান্তরের সঠিক ধারাবাহিক নিয়ম হলো [1, 5]:'
            ),
            l(
              '1. Establish Total Energy Requirement ($TEE$, kcal/day).\n2. Calculate clinical Protein needs ($g/kg \\rightarrow \\text{grams} \\times 4 = \\text{Protein kcal}$).\n3. Assign targeted Fat percentage based on lipid risk ($TEE \\times \\%\\text{Fat} / 9 = \\text{Fat grams}$).\n4. Allocate remaining calories to complex Carbohydrates ($[TEE - (\\text{Protein kcal} + \\text{Fat kcal})] / 4 = \\text{Carbohydrate grams}$).',
              '১. মোট ক্যালোরির চাহিদা ($TEE$) নির্ধারণ করুন।\n২. ক্লিনিক্যাল অবস্থা অনুযায়ী প্রোটিনের গ্রাম ও ক্যালোরি বের করুন ($গ্রাম \times ৪ = প্রোটিন ক্যালোরি$)।\n৩. রোগীর মেটাবলিক লক্ষ্য অনুযায়ী ফ্যাটের শতকরা হার ও গ্রাম বের করুন ($ক্যালোরি / ৯ = ফ্যাট গ্রাম$)।\n৪. অবশিষ্ট সকল ক্যালোরি স্বাস্থ্যকর কার্বোহাইড্রেটে বরাদ্দ করুন ($অবশিষ্ট ক্যালোরি / ৪ = কার্বোহাইড্রেট গ্রাম$)।'
            ),
          ],
        },
        {
          id: 'sec-diabetes-lipid-mnt',
          heading: l('2. Clinical Macronutrient Splits for Diabetes and Atherosclerosis', '২. ডায়াবেটিস ও হৃদরোগের জন্য ম্যাক্রোনিউট্রিয়েন্ট বিভাজন'),
          paragraphs: [
            l(
              'In adult patients with Type 2 Diabetes Mellitus, consensus guidelines from the American Diabetes Association (ADA) emphasize that there is no universal "ideal" percentage of calories from carbs, fat, and protein [2]. However, clinical trials consistently confirm that moderating carbohydrates to **40–45% of total energy**—while elevating monounsaturated fatty acids (MUFA, 15–20%) and dietary fiber—significantly blunts postprandial glycemic excursions and reduces triglyceride levels.',
              'টাইপ ২ ডায়াবেটিসের ক্ষেত্রে আমেরিকান ডায়াবেটিস অ্যাসোসিয়েশন (ADA) নিশ্চিত করেছে যে সবার জন্য কোনো বাঁধাধরা একক অনুপাত নেই [2]। তবে গবেষণায় দেখা গেছে কার্বোহাইড্রেট কমিয়ে **মোট ক্যালোরির ৪০-৪৫%** রাখা এবং মনো-আনস্যাচুরেটেড ফ্যাট (MUFA, ১৫-২০%) ও ফাইবার বাড়িয়ে দিলে খাওয়ার পর রক্তে চিনি হঠাৎ বেড়ে যাওয়া এবং ট্রাইগ্লিসারাইড দ্রুত হ্রাস পায়।'
            ),
            l(
              'For cardiovascular risk and dyslipidemia, the AHA/ACC guidelines mandate stringent quality boundaries on the fat sector: Saturated Fatty Acids (SFA) must be restricted to **< 7% to 10% of total daily calories**, industrial trans fats must be completely eliminated (< 1%), and cholesterol-raising SFAs (palmitic, myristic) must be replaced with polyunsaturated fatty acids (PUFA, 5–10%) to stimulate LDL receptor clearance [3].',
              'হৃদরোগের ক্ষেত্রে আমেরিকান হার্ট অ্যাসোসিয়েশন (AHA) ফ্যাটের গুণগত মানের ওপর কঠোর নির্দেশনা দেয়: স্যাচুরেটেড চর্বি **মোট ক্যালোরির ৭% থেকে ১০%-এর নিচে** সীমাবদ্ধ করতে হবে, ট্র্যান্স ফ্যাট পুরোপুরি নিষিদ্ধ করতে হবে এবং রক্তের ক্ষতিকর কোলেস্টেরল কমাতে স্যাচুরেটেড ফ্যাটের বদলে পলি-আনস্যাচুরেটেড উদ্ভিজ্জ তেল (PUFA, ৫-১০%) গ্রহণ করতে হবে [3]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-copd-pancreatitis-splits',
          heading: l('1. Extreme Shifts: COPD Ventilatory Splits vs Pancreatitis Fat Restriction', '১. চরম পরিবর্তন: সিওপিডিতে শ্বাসকষ্টের ডায়েট বনাম প্যানক্রিয়াটাইটিসে ফ্যাট নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'In severe Chronic Obstructive Pulmonary Disease (COPD) and acute respiratory failure, macronutrient metabolism alters alveolar ventilation through respiratory quotient ($RQ$) dynamics [1, 4]:',
              'তীব্র সিওপিডি (COPD) ও ফুসফুসের শ্বাসকষ্টে খাদ্য উপাদানের জারণ ফুসফুসের কাজের চাপ সরাসরি বাড়িয়ে বা কমিয়ে দেয় [1, 4]:'
            ),
            l(
              '$$\\text{Carbohydrate Oxidation: } \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\quad (RQ = 1.00)$$\n$$\\text{Fat Oxidation: } \\text{C}_{16}\\text{H}_{32}\\text{O}_2 + 23\\text{O}_2 \\rightarrow 16\\text{CO}_2 + 16\\text{H}_2\\text{O} \\quad (RQ = 0.70)$$',
              '$$\\text{কার্বোহাইড্রেট জারণ: } \\text{C}_6\\text{H}_{12}\\text{O}_6 + ৬\\text{O}_2 \\rightarrow ৬\\text{CO}_2 + ৬\\text{H}_2\\text{O} \\quad (RQ = ১.০০)$$\n$$\\text{ফ্যাট জারণ: } \\text{C}_{16}\\text{H}_{32}\\text{O}_2 + ২৩\\text{O}_2 \\rightarrow ১৬\\text{CO}_2 + ১৬\\text{H}_2\\text{O} \\quad (RQ = ০.৭০)$$'
            ),
            l(
              'Because fat produces approximately 30% less carbon dioxide per unit of oxygen consumed than carbohydrate, high-fat formulas ($40\\text{--}50\\%\\text{ fat}$) with moderated carbohydrates ($30\\text{--}40\\%$) decrease minute ventilation requirements ($V_E$), reducing the physical work of breathing in borderline respiratory failure [1].',
              'যেহেতু ফ্যাট পুড়লে কার্বোহাইড্রেটের তুলনায় প্রায় ৩০% কম কার্বন ডাই-অক্সাইড তৈরি হয়, তাই সিওপিডি রোগীদের খাবারে ফ্যাট বাড়িয়ে (৪০-৫০%) এবং কার্বোহাইড্রেট কমিয়ে (৩০-৪০%) দিলে ফুসফুসকে কম বাতাস পাম্প করতে হয়, যা রোগীর শ্বাসকষ্ট কমায় [1]।'
            ),
            l(
              'At the opposite metabolic extreme, in **severe hypertriglyceridemia (triglycerides > 1,000 mg/dL)**, dietary fat must be restricted to **< 15–20% of energy (< 20–30 g/day)** [3]. Chylomicrons cannot be cleared by saturated endothelial lipoprotein lipase; excessive chylomicronemia obstructs pancreatic capillaries, releasing free fatty acids that induce autodigestive acute necrotizing pancreatitis.',
              'বিপরীতভাবে, **মারাত্মক হাইপারট্রাইগ্লিসারাইডিয়ায় (রক্তে চর্বি > ১০০০ mg/dL)** খাবারের ফ্যাট তাৎক্ষণিকভাবে কমিয়ে **< ১৫-২০% (দিনে মাত্র ২০-৩০ গ্রাম)** করতে হয় [3]। রক্তে অতিরিক্ত কাইলোমাইক্রন জমে প্যানক্রিয়াসের রক্তনালী বন্ধ করে দেয়, যা জীবনঘাতী প্যানক্রিয়াটাইটিস তৈরি করে।'
            ),
          ],
        },
        {
          id: 'sec-fiber-architecture',
          heading: l('2. Dietary Fiber Architecture: Physicochemical Viscosity & Fermentation', '২. ডায়েটারি ফাইবারের বিজ্ঞান: সান্দ্রতা, শোষণ ও শর্ট-চেইন ফ্যাটি অ্যাসিড'),
          paragraphs: [
            l(
              'Dietary fiber is categorized based on solubility, viscosity, and colonic fermentability [4]:',
              'ডায়েটারি ফাইবার বা খাদ্যআঁশকে তিনটি ভৌত বৈশিষ্ট্যে ভাগ করা হয় [4]:'
            ),
            l(
              '1. **Soluble, Viscous, Fermentable Fibers (Beta-glucan, Psyllium, Pectins, Mucilages):** Form a thick gelatinous matrix in the small intestine that delays gastric emptying and physically entraps glucose, blunting postprandial glucose absorption. In the ileum, they bind bile acids, preventing enterohepatic recirculation and forcing the liver to clear LDL cholesterol to synthesize replacement bile.\n2. **Colonic Microbiome Fermentation:** In the cecum and colon, anaerobic bacteria ferment soluble fibers into **Short-Chain Fatty Acids (SCFAs)**—principally acetate, propionate, and **butyrate**. Butyrate serves as the primary energetic fuel for colonocytes ($70\\%\\text{ of ATP needs}$), induces histone deacetylase (HDAC) inhibition, tightens epithelial tight junctions (occludin, claudin-1), and stimulates GLP-1 release from enteroendocrine L-cells [4].\n3. **Insoluble Bulking Fibers (Cellulose, Hemicellulose, Lignin):** Resist bacterial degradation, increase fecal mass via water binding, accelerate colonic transit time, and decrease intraluminal pressure in the sigmoid colon.',
              '১. **দ্রবণীয় ও সান্দ্র ফাইবার (বিটা-গ্লুক্যান, ইসবগুলের ভুসি, পেকটিন):** অন্ত্রে পিচ্ছিল জেলির মতো স্তর তৈরি করে গ্লুকোজ শোষণকে ধীর করে দেয়, ফলে রক্তে চিনি হঠাৎ বাড়ে না। এছাড়া এরা পিত্তরস আটকে মলের সাথে বের করে দেয়, যার ফলে লিভার রক্ত থেকে কোলেস্টেরল কমিয়ে নতুন পিত্তরস তৈরি করতে বাধ্য হয়।\n২. **অন্ত্রের জীবাণু দ্বারা গাঁজন (Fermentation):** কোলনে উপকারি ব্যাকটেরিয়ারা এই ফাইবার ভেঙে **শর্ট-চেইন ফ্যাটি অ্যাসিড (SCFA—বিশেষ করে বিউটাইরেট)** তৈরি করে। বিউটাইরেট কোলনের কোষের ৭০% শক্তি যোগায়, অন্ত্রের প্রাচীর শক্ত করে এবং রক্তে ইনসুলিন নিঃসরণকারী হরমোন GLP-1 বাড়ায় [4]।\n৩. **অদ্রবণীয় ফাইবার (সেলুলোজ, ভুসি):** পানি ধরে রেখে মলের পরিমাণ বাড়ায়, কোষ্ঠকাঠিন্য দূর করে এবং অন্ত্রের ওপর চাপ কমায়।'
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. AMDR Framework & Atwater Math', '১. AMDR কাঠামো ও অ্যাটওয়াটার রূপান্তর'), sectionId: 'sec-amdr-framework' },
      { id: 'toc-2', label: l('2. Diabetes & Cardiovascular Lipid Targets', '২. ডায়াবেটিস ও হৃদরোগের জন্য অনুপাত'), sectionId: 'sec-diabetes-lipid-mnt' },
      { id: 'toc-3', label: l('3. COPD vs Pancreatitis Extreme Splits', '৩. সিওপিডি বনাম প্যানক্রিয়াটাইটিসের খাদ্যাভ্যাস'), sectionId: 'sec-copd-pancreatitis-splits' },
      { id: 'toc-4', label: l('4. Dietary Fiber Architecture & SCFA Kinetics', '৪. ডায়েটারি ফাইবার ও SCFA গতিবিদ্যা'), sectionId: 'sec-fiber-architecture' },
    ],
    terms: [
      {
        term: l('AMDR', 'এএমডিআর (AMDR)'),
        definition: l(
          'Acceptable Macronutrient Distribution Range; the percentage range of energy intake associated with reduced chronic disease risk: Carbohydrates 45–65%, Fats 20–35%, Protein 10–35%.',
          'গ্রহণযোগ্য ম্যাক্রোনিউট্রিয়েন্ট বিভাজন সীমা; রোগ প্রতিরোধ ও সুস্বাস্থ্যের জন্য নির্ধারিত ক্যালোরির শতকরা অনুপাত: কার্বোহাইড্রেট ৪৫-৬৫%, ফ্যাট ২০-৩৫%, প্রোটিন ১০-৩৫%।'
        ),
      },
      {
        term: l('Atwater Energy Factors', 'অ্যাটওয়াটার মান (Atwater Factors)'),
        definition: l(
          'Standardized physiological energy values: 4 kcal/g for carbohydrate and protein, 9 kcal/g for fat, and 7 kcal/g for ethanol.',
          'প্রমিত শারীরবৃত্তীয় শক্তির মান: কার্বোহাইড্রেট ও প্রোটিনে ৪ kcal/গ্রাম, ফ্যাটে ৯ kcal/গ্রাম এবং অ্যালকোহলে ৭ kcal/গ্রাম।'
        ),
      },
      {
        term: l('Butyrate', 'বিউটাইরেট (Butyrate)'),
        definition: l(
          'A four-carbon short-chain fatty acid produced by bacterial fermentation of soluble fiber; primary metabolic fuel for colonocytes and epigenetic regulator.',
          'অন্ত্রের ব্যাকটেরিয়া দ্বারা ফাইবার ভেঙে তৈরি চার কার্বনের শর্ট-চেইন ফ্যাটি অ্যাসিড, যা কোলন কোষের প্রধান শক্তি যোগায় এবং ক্যান্সার প্রতিরোধে সাহায্য করে।'
        ),
      },
      {
        term: l('Chylomicronemia', 'কাইলোমাইক্রনেমিয়া (Chylomicronemia)'),
        definition: l(
          'Severe accumulation of large triglyceride-rich chylomicrons in plasma (TG > 1,000 mg/dL) carrying extreme risk for acute necrotizing pancreatitis.',
          'রক্তে চর্বির বিশাল কণা কাইলোমাইক্রনের মারাত্মক আধিক্য (TG > ১০০০ mg/dL), যা জীবনঘাতী তীব্র প্যানক্রিয়াটাইটিসের সৃষ্টি করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Designing an Individualized Macronutrient Allocation for Type 2 Diabetes with Mixed Dyslipidemia',
          'বাস্তব কেস স্টাডি: ডায়াবেটিস ও মিশ্র ডিসলিপিডেমিয়ায় আক্রান্ত রোগীর ম্যাক্রোনিউট্রিয়েন্ট বিভাজন'
        ),
        steps: [
          l(
            'Step 1: Patient Profile & Prescription Goals. A 54-year-old male with Type 2 Diabetes, hypertension, and mixed dyslipidemia (Triglycerides = 280 mg/dL, LDL = 145 mg/dL, HbA1c = 8.2%). Weight = 80 kg, Height = 172 cm. Energy requirement is formulated at 1,800 kcal/day.',
            'ধাপ ১: রোগীর তথ্য ও লক্ষ্য: টাইপ ২ ডায়াবেটিস ও ডিসলিপিডেমিয়ায় আক্রান্ত ৫৪ বছর বয়সী পুরুষ (ট্রাইগ্লিসারাইড ২৮০ mg/dL, এলডিএল ১৪৫ mg/dL, HbA1c ৮.২%)। ওজন ৮০ কেজি, উচ্চতা ১৭২ সেমি। দৈনিক ক্যালোরি চাহিদা ১৮০০ kcal/দিন।'
          ),
          l(
            'Step 2: Allocate Protein First. Prescribe 1.2 g/kg body weight for lean mass maintenance: $80 \\times 1.2 = 96\\text{ g protein/day}$. Energy from protein = $96 \\times 4 = 384\\text{ kcal}$ ($384 / 1,800 = 21.3\\%\\text{ of TEE}$).',
            'ধাপ ২: প্রোটিন নির্ধারণ: পেশির সুরক্ষায় প্রতি কেজিতে ১.২ গ্রাম প্রোটিন: ৮০ x ১.২ = ৯৬ গ্রাম প্রোটিন/দিন। প্রোটিনের ক্যালোরি = ৯৬ x ৪ = ৩৮৪ kcal (১৮০০-র ২১.৩%)।'
          ),
          l(
            'Step 3: Allocate Fat with Strict SFA Cap. Target 30% of energy from fat to lower triglycerides: $1,800 \\times 0.30 = 540\\text{ kcal} / 9 = 60\\text{ g fat/day}$. To reduce LDL, cap SFA at $<7\\%$: $1,800 \\times 0.07 = 126\\text{ kcal} / 9 = 14\\text{ g max SFA}$. Emphasize MUFA (olive/mustard oil) and omega-3 PUFA.',
            'ধাপ ৩: ফ্যাটের বণ্টন: ট্রাইগ্লিসারাইড কমাতে মোট ক্যালোরির ৩০% ফ্যাট: ১৮০০ x ০.৩০ = ৫৪০ kcal / ৯ = ৬০ গ্রাম ফ্যাট/দিন। এলডিএল কমাতে স্যাচুরেটেড চর্বি <৭% (সর্বোচ্চ ১৪ গ্রাম)। অলিভ/সরিষার তেল ও মাছের তেল প্রাধান্য দিন।'
          ),
          l(
            'Step 4: Allocate Complex Carbohydrates. Remaining energy: $1,800 - (384 + 540) = 876\\text{ kcal} / 4 = 219\\text{ g carbohydrate/day}$ ($876 / 1,800 = 48.7\\%\\text{ of TEE}$).',
            'ধাপ ৪: কার্বোহাইড্রেট হিসাব: অবশিষ্ট ক্যালোরি: ১৮০০ - (৩৮৪ + ৫৪০) = ৮৭৬ kcal / ৪ = ২১৯ গ্রাম কার্বোহাইড্রেট/দিন (৪৮.৭%)।'
          ),
          l(
            'Step 5: Prescribe Fiber Architecture. Set fiber target at $14\\text{ g / 1,000 kcal} \\times 1.8 = 25.2\\text{ g} \\rightarrow \\text{round to } 30\\text{ g/day}$. Include minimum 10g soluble viscous fiber (oats, legumes, psyllium husk) to lower LDL and postprandial glucose.',
            'ধাপ ৫: ফাইবার নিশ্চিতকরণ: দিনে অন্তত ৩০ গ্রাম ফাইবার নিশ্চিত করা, যার মধ্যে ১০ গ্রাম দ্রবণীয় আঁশ (ওটস, ডাল, ইসবগুলের ভুসি) রক্তে চিনি ও কোলেস্টেরল কমাবে।'
          ),
        ],
        conclusion: l(
          'The resulting clinical split—48.7% Complex Carbohydrate (219g with 30g fiber), 30.0% Heart-Healthy Fat (60g, SFA < 14g), and 21.3% Protein (96g)—achieves perfect glycemic control while driving lipid clearance.',
          'চূড়ান্ত পুষ্টি বণ্টন—৪৮.৭% জটিল কার্বোহাইড্রেট (২১৯ গ্রাম ও ৩০ গ্রাম আঁশ), ৩০% স্বাস্থ্যকর ফ্যাট (৬০ গ্রাম) এবং ২১.৩% প্রোটিন (৯৬ গ্রাম)—রোগীর রক্তে চিনি নিয়ন্ত্রণের পাশাপাশি কোলেস্টেরল ও ট্রাইগ্লিসারাইড কমাতে সফল ভূমিকা রাখে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does increasing dietary fat at the expense of carbohydrates help a patient who is struggling to be weaned from a mechanical ventilator?',
          'ভেন্টিলেটর থেকে বের হতে কষ্ট পাওয়া রোগীর খাবারে কার্বোহাইড্রেট কমিয়ে ফ্যাট বাড়ালে কেন উপকার হয়?'
        ),
        answer: l(
          'Oxidizing carbohydrates produces one molecule of carbon dioxide for every molecule of oxygen consumed ($RQ = 1.00$). In contrast, oxidizing fat produces only 0.7 molecules of CO2 per molecule of oxygen ($RQ = 0.70$). A higher-fat, lower-carbohydrate formula produces approximately 30% less CO2, decreasing the volume of air the damaged lungs must expel and preventing hypercapnic respiratory exhaustion.',
          'কার্বোহাইড্রেট পুড়লে যত অক্সিজেন লাগে ঠিক ততটাই কার্বন ডাই-অক্সাইড তৈরি হয় ($RQ = ১.০০$)। কিন্তু ফ্যাট পুড়লে প্রায় ৩০% কম কার্বন ডাই-অক্সাইড গ্যাস তৈরি হয় ($RQ = ০.৭০$)। তাই খাবারে ফ্যাট বাড়িয়ে দিলে রক্তে কার্বন ডাই-অক্সাইড কম জমে, যা ফুসফুসের শ্বাসকষ্ট কমিয়ে রোগীকে দ্রুত ভেন্টিলেটর থেকে বের করতে সাহায্য করে।'
        ),
      },
      {
        question: l(
          'What is the physiological mechanism by which soluble viscous fibers lower circulating serum LDL cholesterol?',
          'দ্রবণীয় সান্দ্র ফাইবার কোন শারীরবৃত্তীয় প্রক্রিয়ায় রক্তের ক্ষতিকর এলডিএল (LDL) কোলেস্টেরল কমিয়ে দেয়?'
        ),
        answer: l(
          'Soluble viscous fibers (such as beta-glucan and psyllium) form an unabsorbable gel matrix in the small intestine that binds cholesterol-rich bile acids and excretes them in the feces. This interrupts the enterohepatic circulation of bile. To replenish the lost bile acid pool, the liver is forced to up-regulate LDL receptors and pull circulating LDL cholesterol particles out of the bloodstream to convert them into new bile acids.',
          'দ্রবণীয় ফাইবার (যেমন ওটসের বিটা-গ্লুক্যান ও ইসবগুল) অন্ত্রে জেলির মতো স্তর তৈরি করে পিত্তরসের সাথে যুক্ত হয়ে তা মলের সাথে বের করে দেয়। ফলে স্বাভাবিক পিত্তরসের পুনঃশোষণ ব্যাহত হয়। হারিয়ে যাওয়া পিত্তরস পুনরায় তৈরি করতে যকৃত বাধ্য হয়ে রক্ত থেকে ক্ষতিকর এলডিএল কোলেস্টেরল টেনে ভেতরে নিয়ে নেয়, ফলে রক্তে কোলেস্টেরলের মাত্রা উল্লেখযোগ্যভাবে কমে যায়।'
        ),
      },
    ],
  },
}

