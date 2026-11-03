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
    'A comprehensive scientific guide to translating total caloric prescriptions into precision macronutrient architectures: applying Acceptable Macronutrient Distribution Ranges (AMDR), mastering Atwater energy conversion math, designing tailored carbohydrate-fat-protein splits for diabetes, respiratory failure, and extreme hypertriglyceridemia, and engineering therapeutic dietary fiber kinetics.',
    'মোট ক্যালোরি ব্যবস্থাপত্রকে নির্দিষ্ট খাদ্য উপাদানে রূপান্তরের পূর্ণাঙ্গ বিজ্ঞানভিত্তিক নির্দেশিকা: গ্রহণযোগ্য ম্যাক্রোনিউট্রিয়েন্ট বিভাজন (AMDR) প্রয়োগ, অ্যাটওয়াটার রূপান্তর সূত্রের নিখুঁত হিসাব, ডায়াবেটিস, ফুসফুসের রোগ ও মারাত্মক উচ্চ ট্রাইগ্লিসারাইডের জন্য উপযুক্ত কার্বোহাইড্রেট-ফ্যাট-প্রোটিন অনুপাত নির্ধারণ এবং ডায়েটারি ফাইবারের রোগ নিরাময়কারী ভূমিকা।'
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
      'Apply standard Acceptable Macronutrient Distribution Ranges (AMDR): Carbohydrates 45–65%, Fats 20–35%, and Protein 10–35% of total daily energy to prevent chronic disease while meeting micronutrient demands.',
      'দীর্ঘমেয়াদী রোগ প্রতিরোধ ও পুষ্টি নিশ্চিত করতে গ্রহণযোগ্য ম্যাক্রোনিউট্রিয়েন্ট বিভাজন (AMDR) সীমা প্রয়োগ: কার্বোহাইড্রেট ৪৫-৬৫%, ফ্যাট ২০-৩৫% এবং প্রোটিন ১০-৩৫%।'
    ),
    l(
      'Convert energy prescriptions into exact macronutrient grams using Atwater physiological energy factors (Carbohydrate = 4 kcal/g, Protein = 4 kcal/g, Fat = 9 kcal/g, Alcohol = 7 kcal/g).',
      'অ্যাটওয়াটার রূপান্তর সূত্র (কার্বোহাইড্রেট = ৪ kcal/গ্রাম, প্রোটিন = ৪ kcal/গ্রাম, ফ্যাট = ৯ kcal/গ্রাম, অ্যালকোহল = ৭ kcal/গ্রাম) ব্যবহার করে ক্যালোরিকে নিখুঁত গ্রামে রূপান্তর করা।'
    ),
    l(
      'Modify macronutrient distribution for respiratory failure and COPD (higher fat 40–50%, lower carbohydrate 30–40%) to minimize metabolic carbon dioxide production and respiratory work.',
      'ফুসফুসের দীর্ঘমেয়াদী রোগ ও সিওপিডিতে কার্বন ডাই-অক্সাইড উৎপাদন কমাতে ফ্যাট বাড়িয়ে এবং কার্বোহাইড্রেট কমিয়ে খাদ্যতালিকা প্রস্তুত করা।'
    ),
    l(
      'Formulate emergency ultra-low fat prescriptions (< 15–20% of energy, < 20–30 g/day) for severe hypertriglyceridemia (TG > 1,000 mg/dL) to clear chylomicronemia and prevent acute necrotizing pancreatitis.',
      'মারাত্মক উচ্চ ট্রাইগ্লিসারাইডে (TG > ১০০০ mg/dL) কাইলোমাইক্রন দূর করতে ও প্যানক্রিয়াটাইটিস প্রতিরোধে অতি-স্বল্প চর্বির (< ১৫-২০%, দিনে ২০-৩০ গ্রাম) ডায়েট প্রণয়ন করা।'
    ),
    l(
      'Calculate therapeutic dietary fiber goals (14 g per 1,000 kcal, minimum 25–35 g/day), balancing soluble viscous fibers with insoluble bulking fractions to optimize glycemic control and colonic butyrate generation.',
      'প্রতি ১০০০ ক্যালোরির জন্য ১৪ গ্রাম (দৈনিক ২৫-৩৫ গ্রাম) হারে দ্রবণীয় ও অদ্রবণীয় খাদ্যআঁশের সঠিক অনুপাত নির্ধারণ করে রক্তের চিনি নিয়ন্ত্রণ ও কোলন কোষে বিউটাইরেট উৎপাদন নিশ্চিত করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A tri-sector clinical macronutrient allocation circle: Sector 1 (Protein) is locked first based on clinical g/kg demands (10–35% of TEE); Sector 2 (Fat) is titrated based on cardiovascular and metabolic criteria (20–35%, with saturated fatty acids capped at < 7–10%); Sector 3 (Carbohydrate) fills the remaining caloric window (45–65%) fortified with a minimum of 14g dietary fiber per 1,000 kcal.',
      'ম্যাক্রোনিউট্রিয়েন্ট বণ্টনের তিন স্তরের বৃত্তাকার প্রবাহচিত্র: প্রথমে প্রোটিনকে রোগীর ক্লিনিক্যাল প্রয়োজন (g/kg) অনুযায়ী লক করা হয় (১০-৩৫%); এরপর হৃদরোগ ও মেটাবলিক লক্ষ্য অনুযায়ী ফ্যাট নির্ধারণ করা হয় (২০-৩৫%, স্যাচুরেটেড ফ্যাট < ৭-১০%); অবশিষ্ট ক্যালোরি স্বাস্থ্যকর জটিল কার্বোহাইড্রেট (৪৫-৬৫%) ও প্রতি ১০০০ ক্যালোরিতে ১৪ গ্রাম আঁশ দিয়ে পূরণ করা হয়।'
    ),
    steps: [
      l(
        'Step 1: Calculate Total Energy (TEE). Establish the patient’s validated daily caloric requirement (e.g., 1,800 kcal/day) using Mifflin-St Jeor or indirect calorimetry.',
        'ধাপ ১: মোট ক্যালোরি নির্ধারণ: রোগীর দৈনিক মোট শক্তির কাঙ্ক্ষিত পরিমাণ (যেমন ১৮০০ kcal/দিন) নির্ধারণ করুন।'
      ),
      l(
        'Step 2: Lock Clinical Protein First. Determine protein grams based on clinical status and body weight (e.g., 1.2 g/kg = 96 g = 384 kcal = 21.3% of TEE).',
        'ধাপ ২: প্রোটিনের পরিমাণ নির্দিষ্টকরণ: রোগের চাহিদা অনুযায়ী প্রথমে প্রোটিনের গ্রাম ও ক্যালোরি (যেমন ৯৬ গ্রাম = ৩৮৪ kcal = ২১.৩%) নির্ধারণ করুন।'
      ),
      l(
        'Step 3: Establish Fat Boundaries. Select fat percentage based on lipid panel and cardiovascular risk (e.g., 30% of TEE = 540 kcal / 9 = 60 g fat, with SFA < 7%).',
        'ধাপ ৩: ফ্যাটের সীমা নির্ধারণ: রক্তের চর্বির রিপোর্ট অনুযায়ী ফ্যাটের ক্যালোরি ও গ্রাম (যেমন ৩০% = ৫৪০ kcal / ৯ = ৬০ গ্রাম ফ্যাট) নির্ধারণ করুন।'
      ),
      l(
        'Step 4: Balance Complex Carbohydrates & Fiber. Remaining calories: 1,800 - (384 + 540) = 876 kcal / 4 = 219 g carbohydrate (48.7% of TEE). Ensure at least 25 to 30 g total dietary fiber.',
        'ধাপ ৪: কার্বোহাইড্রেট ও আঁশের ভারসাম্য: অবশিষ্ট ক্যালোরি থেকে কার্বোহাইড্রেটের গ্রাম (৮৭৬ / ৪ = ২১৯ গ্রাম) এবং অন্তত ২৫ থেকে ৩০ গ্রাম খাদ্যআঁশ নিশ্চিত করুন।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 58-year-old male with severe chronic hypertriglyceridemia (fasting serum triglycerides = 1,120 mg/dL, normal < 150) and eruptive cutaneous xanthomas presents to your metabolic clinic. He is at imminent risk for acute necrotizing pancreatitis. What is the mandatory immediate dietary macronutrient adjustment for this patient?',
      'মারাত্মক দীর্ঘমেয়াদী হাইপারট্রাইগ্লিসারাইডিয়ায় (রক্তে ট্রাইগ্লিসারাইড = ১১২০ mg/dL, স্বাভাবিক < ১৫০) আক্রান্ত ৫৮ বছর বয়সী এক পুরুষ মেটাবলিক ক্লিনিকে এসেছেন। তার তীব্র প্যানক্রিয়াটাইটিসের মারাত্মক ঝুঁকি রয়েছে। এই রোগীর ক্ষেত্রে তাৎক্ষণিক কোন খাদ্য ম্যাক্রোনিউট্রিয়েন্ট পরিবর্তন বাধ্যতামূলক?'
    ),
    options: [
      l(
        'Prescribe a high-fat ketogenic diet (75% fat) to suppress insulin secretion and force hepatic ketone production.',
        'ইনসুলিন কমাতে এবং কিটোন তৈরি করতে একটি উচ্চ-চর্বিযুক্ত কিটোজেনিক ডায়েট (৭৫% ফ্যাট) দেওয়া।'
      ),
      l(
        'Immediately restrict total dietary fat to < 15–20% of total daily energy (approximately 20–30 g of total fat/day) and completely eliminate all alcohol and refined simple sugars to clear circulating chylomicrons.',
        'রক্তের কাইলোমাইক্রন দ্রুত পরিষ্কার করতে এবং প্যানক্রিয়াটাইটিস ঠেকাতে মোট চর্বি তাৎক্ষণিকভাবে কমিয়ে মোট ক্যালোরির < ১৫-২০% (দিনে মাত্র ২০-৩০ গ্রাম ফ্যাট) করা এবং সব ধরনের অ্যালকোহল ও চিনিযুক্ত খাবার সম্পূর্ণ নিষিদ্ধ করা।'
      ),
      l(
        'Increase saturated animal fats to 25% of energy to stimulate bile acid secretion and accelerate gastrointestinal clearance.',
        'পিত্তরস নিঃসরণ বাড়াতে প্রাণিজ চর্বি বাড়িয়ে মোট ক্যালোরির ২৫% করা।'
      ),
      l(
        'Maintain a standard 35% fat diet while advising the patient to take over-the-counter fish oil capsules without medical supervision.',
        'খাবারে সাধারণ ৩৫% ফ্যাট বজায় রেখে রোগীকে সাধারণ ফিশ অয়েল ক্যাপসুল খাওয়ার পরামর্শ দেওয়া।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'When fasting serum triglycerides exceed 1,000 mg/dL, endothelial Lipoprotein Lipase (LPL) enzymes are completely saturated, causing massive accumulation of large, triglyceride-rich chylomicrons in the circulation. This dramatic surge in blood viscosity triggers capillary plugging and microvascular ischemia in the pancreas, releasing toxic free fatty acids that precipitate fatal acute necrotizing pancreatitis. Standard AHA and Endocrine Society guidelines mandate emergency restriction of total dietary fat to < 15–20% of daily energy (20–30 g total fat/day) and absolute cessation of alcohol and simple sugars until serum triglycerides fall below 500 mg/dL.',
      'যখন ট্রাইগ্লিসারাইড ১০০০ mg/dL ছাড়িয়ে যায়, তখন চর্বি ভাঙার এনজাইম (LPL) পুরোপুরি স্যাচুরেটেড হয়ে রক্তে কাইলোমাইক্রনের বিশাল কণা জমে যায়। এটি রক্তের ঘনত্ব বাড়িয়ে প্যানক্রিয়াসের সূক্ষ্ম রক্তনালী বন্ধ করে দেয়, যা জীবনঘাতী প্যানক্রিয়াটাইটিস সৃষ্টি করে। আন্তর্জাতিক নির্দেশিকা অনুযায়ী ট্রাইগ্লিসারাইড ৫০০-এর নিচে না নামা পর্যন্ত চর্বির পরিমাণ তাৎক্ষণিকভাবে মোট ক্যালোরির ১৫-২০%-এর নিচে (দিনে মাত্র ২০-৩০ গ্রাম) নামিয়ে আনতে হবে এবং চিনি ও অ্যালকোহল পুরোপুরি বন্ধ করতে হবে।'
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
          heading: l(
            '1. The Three Chemical Fuels of Life and the Atwater Energy Factors',
            '১. জীবনের তিনটি রাসায়নিক জ্বালানি ও অ্যাটওয়াটার শক্তির মানদণ্ড'
          ),
          paragraphs: [
            l(
              'Every morsel of food you consume is composed of three primary chemical fuels that supply energy to the human body: **Carbohydrates**, **Fats**, and **Proteins** [1]. To quantify exactly how much biochemical energy is released when your cells combust these nutrients, nutritional science relies on the classic **Atwater physiological energy factors**, established through bomb calorimetry and human respiration chambers by Wilbur Olin Atwater in the late nineteenth century [5]:',
              'আমাদের আহার করা প্রতিটি খাবারের উপাদান মূলত তিনটি প্রধান রাসায়নিক জ্বালানি দিয়ে গঠিত যা মানবদেহে শক্তি যোগায়: **কার্বোহাইড্রেট বা শর্করা**, **ফ্যাট বা চর্বি**, এবং **প্রোটিন বা আমিষ** [1]। আমাদের কোষ যখন এই পুষ্টি উপাদানগুলোকে জারিত বা দহন করে, তখন ঠিক কতটা শক্তি উৎপন্ন হয় তা পরিমাপ করতে পুষ্টিবিজ্ঞান ব্যবহার করে বিখ্যাত **অ্যাটওয়াটার রূপান্তর মান**, যা ঊনবিংশ শতাব্দীর শেষভাগে বিজ্ঞানী উইলবার ওলিন অ্যাটওয়াটার উদ্ভাবন করেছিলেন [5]:'
            ),
            l(
              '1 gram of Carbohydrate = 4 calories (kcal)\n1 gram of Protein = 4 calories (kcal)\n1 gram of Fat = 9 calories (kcal)\n1 gram of Alcohol (Ethanol) = 7 calories (kcal)',
              '১ গ্রাম কার্বোহাইড্রেট = ৪ ক্যালোরি (kcal)\n১ গ্রাম প্রোটিন = ৪ ক্যালোরি (kcal)\n১ গ্রাম ফ্যাট বা চর্বি = ৯ ক্যালোরি (kcal)\n১ গ্রাম অ্যালকোহল = ৭ ক্যালোরি (kcal)'
            ),
            l(
              'Notice the striking energetic asymmetry: fat is more than **twice as calorie-dense** as carbohydrates or protein [5]. A single level tablespoon of cooking oil (mustard, soybean, or olive oil) weighs 14 grams and delivers 126 calories—pure liquid energy with zero water. In contrast, 14 grams of boiled rice contains mostly water and starch, delivering only 18 calories. Understanding this caloric density is the bedrock of clinical weight and metabolic management.',
              'লক্ষ করুন এক অসাধারণ বৈষম্য: চর্বি বা তেলে কার্বোহাইড্রেট বা প্রোটিনের চেয়ে **দ্বিগুণেরও বেশি ক্যালোরি** থাকে [5]। রান্নার মাত্র এক টেবিল চামচ ভোজ্যতেলে (সরিষা, সয়াবিন বা অলিভ অয়েল) প্রায় ১৪ গ্রাম খাঁটি চর্বি থাকে যা একাই ১২৬ ক্যালোরি শক্তি যোগায়। অথচ ১৪ গ্রাম সেদ্ধ ভাতে প্রচুর পানি ও আঁশ থাকায় তা মাত্র ১৮ ক্যালোরি শক্তি দেয়। চর্বির এই ঘনীভূত শক্তির রূপটি বুঝতে পারাই হলো আধুনিক ওজন নিয়ন্ত্রণ ও চিকিৎসার মূল ভিত্তি।'
            ),
          ],
          bullets: [
            l(
              'Carbohydrates (The Quick-Burning Gas): Stored as glycogen in the liver (~100g) and skeletal muscle (~400g); acts as the mandatory high-octane fuel for red blood cells and the central nervous system.',
              'কার্বোহাইড্রেট (দ্রুত জ্বলনশীল জ্বালানি): লিভারে প্রায় ১০০ গ্রাম এবং পেশিতে প্রায় ৪০০ গ্রাম গ্লাইকোজেন হিসেবে জমা থাকে; এটি লোহিত রক্তকণিকা ও মস্তিষ্কের স্নায়ুর জন্য অপরিহার্য দ্রুত শক্তির উৎস।',
            ),
            l(
              'Fats (The Dense Storage Kerosene): Stored virtually without water in adipose tissue; provides the body with an immense survival energy reserve, insulates vital organs, forms cellular lipid bilayers, and transports fat-soluble vitamins (A, D, E, K).',
              'ফ্যাট বা চর্বি (ঘনীভূত দীর্ঘস্থায়ী সঞ্চয়): কোনো পানি ছাড়াই চর্বি কলায় বিপুল পরিমাণে জমা থাকে; এটি শরীরের দীর্ঘমেয়াদী বেঁচে থাকার রিজার্ভ, অঙ্গের সুরক্ষাকবচ, কোষের দেয়ালের উপাদান এবং চর্বিতে দ্রবণীয় ভিটামিন (এ, ডি, ই, কে) পরিবহনের বাহক।',
            ),
            l(
              'Proteins (The Structural Brick and Mortar): Composed of 20 amino acids; primarily utilized for building muscle contractile filaments, cellular enzymes, and immunoglobulins rather than routine energy oxidation.',
              'প্রোটিন বা আমিষ (শরীরের ইট-পাথর): ২০টি অ্যামিনো অ্যাসিড দিয়ে তৈরি; এটি শক্তি উৎপাদনের চেয়ে মূলত মাংসপেশির ফিলামেন্ট, এনজাইম এবং রোগ প্রতিরোধক অ্যান্টিবডি তৈরিতে ব্যবহৃত হয়।',
            ),
            l(
              'Alcohol (The Toxic Non-Nutrient): Yields 7 kcal/g but cannot be stored in tissues; the liver must prioritize alcohol dehydrogenase clearance above all other metabolic pathways, shutting down fatty acid oxidation and promoting fatty liver.',
              'অ্যালকোহল (বিষাক্ত অপ্রয়োজনীয় ক্যালোরি): প্রতি গ্রামে ৭ ক্যালোরি শক্তি দিলেও এটি কোনো পুষ্টি দেয় না এবং শরীরে জমা থাকতে পারে না; লিভার অন্য সব কাজ ফেলে আগে অ্যালকোহল দূর করতে বাধ্য হয়, যার ফলে লিভারে চর্বি জমে।',
            ),
          ],
        },
        {
          id: 'sec-amdr-intro',
          heading: l(
            '2. The Balanced Plate: Understanding AMDR Guidelines',
            '২. সুষম খাদ্যের সমীকরণ: AMDR নির্দেশিকার সহজ রূপরেখা'
          ),
          paragraphs: [
            l(
              'To prevent chronic nutritional deficiencies while simultaneously shielding the human body from chronic cardiometabolic diseases (obesity, coronary artery disease, Type 2 diabetes), the Food and Nutrition Board established the **Acceptable Macronutrient Distribution Ranges (AMDR)** [1].',
              'শরীরে কোনো পুষ্টির ঘাটতি যেন না হয় এবং একই সাথে দীর্ঘমেয়াদী মারাত্মক হৃদরোগ, ডায়াবেটিস ও স্থূলতা থেকে শরীর সুরক্ষিত থাকে, সেজন্য আন্তর্জাতিক স্বাস্থ্য সংস্থা তৈরি করেছে **গ্রহণযোগ্য ম্যাক্রোনিউট্রিয়েন্ট বিভাজন সীমা বা AMDR** [1]।',
            ),
            l(
              'Rather than prescribing a single rigid percentage for all humanity, the AMDR defines flexible, scientifically validated healthy corridors for each macronutrient sector [1]:',
              'সবার জন্য একটিমাত্র অনমনীয় সংখ্যা চাপিয়ে না দিয়ে, AMDR প্রতিটি খাদ্য উপাদানের জন্য একটি স্বাস্থ্যকর ও বিজ্ঞানসম্মত পরিসর নির্ধারণ করেছে [1]:',
            ),
          ],
          bullets: [
            l(
              'Carbohydrates: 45% to 65% of Total Daily Calories. Emphasizes complex unrefined carbohydrates—whole grains (brown rice, whole wheat), legumes (lentils, chickpeas), tubers, and fresh vegetables—while capping added refined sugars at < 10% (ideally < 5%) of total energy.',
              'কার্বোহাইড্রেট: দৈনিক মোট ক্যালোরির ৪৫% থেকে ৬৫%। লাল চালের ভাত, লাল আটার রুটি, ডাল, ছোলা ও শাকসবজির মতো জটিল শর্করার ওপর জোর দেওয়া হয়; আর প্রক্রিয়াজাত চিনি মোট ক্যালোরির ১০%-এর নিচে (সেরা হয় ৫%-এর কম) রাখতে বলা হয়।',
            ),
            l(
              'Fats: 20% to 35% of Total Daily Calories. Prioritizes heart-healthy unsaturated fats from fish, nuts, seeds, and vegetable oils (mustard, olive), while strictly capping saturated animal fats at < 7% to 10% and eliminating industrial trans fatty acids (< 1%).',
              'ফ্যাট বা চর্বি: দৈনিক মোট ক্যালোরির ২০% থেকে ৩৫%। মাছের তেল, বাদাম, বীজ ও উদ্ভিজ্জ তেলের মতো স্বাস্থ্যকর আনস্যাচুরেটেড ফ্যাট প্রাধান্য পায়; আর প্রাণিজ ক্ষতিকর স্যাচুরেটেড চর্বি < ৭-১০% এবং ট্র্যান্স ফ্যাট পুরোপুরি বর্জন করতে হয়।',
            ),
            l(
              'Protein: 10% to 35% of Total Daily Calories. Sourced from high biological value proteins—fish, poultry, eggs, low-fat dairy, lentils, and soy—to fulfill essential amino acid requirements and preserve somatic muscle mass.',
              'প্রোটিন বা আমিষ: দৈনিক মোট ক্যালোরির ১০% থেকে ৩৫%। মাছ, মুরগি, ডিম, দুধ, ডাল ও ছোলার মতো উন্নত প্রোটিন থেকে আসে, যা শরীরের প্রয়োজনীয় অ্যামিনো অ্যাসিডের চাহিদা পূরণ করে পেশি ক্ষয় রোধ করে।',
            ),
            l(
              'The Flexible Spectrum: A distance runner may thrive at 60% carbohydrate and 20% fat, whereas an individual with Type 2 diabetes may achieve superior glycemic stability at 45% carbohydrate and 35% healthy fat.',
              'প্রয়োজনের ভিন্নতা: একজন দৌড়বিদ ৬০% শর্করা ও ২০% ফ্যাটে দারুণ কর্মক্ষম থাকতে পারেন; পক্ষান্তরে ডায়াবেটিসের রোগী ৪৫% শর্করা ও ৩৫% স্বাস্থ্যকর ফ্যাটে রক্তে চিনির চমৎকার নিয়ন্ত্রণ পেতে পারেন।',
            ),
          ],
        },
        {
          id: 'sec-fiber-simple',
          heading: l(
            '3. Why Dietary Fiber Is Essential to the Human Engine',
            '৩. ডায়েটারি ফাইবার বা খাদ্যআঁশ কেন আমাদের শরীরের জন্য অপরিহার্য'
          ),
          paragraphs: [
            l(
              'Dietary fiber consists of the non-digestible carbohydrates and lignin naturally present in plant foods [4]. Unlike starch or sugar, human digestive enzymes in the stomach and small intestine lack the biochemical scissors needed to cleave the beta-acetal bonds linking fiber molecules together. As a consequence, fiber travels through the upper gastrointestinal tract largely untouched.',
              'ডায়েটারি ফাইবার বা খাদ্যআঁশ হলো উদ্ভিজ্জ খাবারের সেই জটিল কার্বোহাইড্রেট যা আমাদের পাকস্থলী বা ক্ষুদ্রান্ত্রের এনজাইমগুলো হজম করতে পারে না [4]। সাধারণ ভাত বা চিনির মতো এটি ক্ষুদ্রান্ত্রে ভেঙে রক্তে গ্লুকোজ হিসেবে শোষিত হয় না; বরং অক্ষত অবস্থায় অন্ত্রের ভেতর দিয়ে ভ্রমণ করে বৃহদন্ত্র বা কোলনে পৌঁছায়।',
            ),
            l(
              'Far from being useless "roughage," dietary fiber is a dynamic physiological engine [4]. It mechanically sweeps the intestine, acts as a prebiotic feast for trillions of beneficial gut microbes, delays carbohydrate absorption to prevent postprandial blood sugar spikes, and traps cholesterol-laden bile salts to excrete them in the stool. Every adult requires at least **25 to 35 grams of fiber every single day** (or 14 grams per 1,000 kcal).',
              'আঁশ কোনো অপ্রয়োজনীয় আবর্জনা নয়; এটি মানবদেহের এক অনন্য সুরক্ষাকবচ [4]। এটি অন্ত্র পরিষ্কার রাখে, কোটি কোটি উপকারি অন্ত্রের ব্যাকটেরিয়ার খাদ্য যোগায়, খাওয়ার পর রক্তে চিনি হঠাৎ বেড়ে যাওয়া রোধ করে এবং অতিরিক্ত কোলেস্টেরল আটকে মলের সাথে বের করে দেয়। প্রতিটি প্রাপ্তবয়স্ক মানুষের প্রতিদিন অন্তত **২৫ থেকে ৩৫ গ্রাম আঁশ** (অথবা প্রতি ১০০০ ক্যালোরিতে ১৪ গ্রাম) খাওয়া আবশ্যক।',
            ),
          ],
          bullets: [
            l(
              'The Satiety Anchor: Fiber draws water into the stomach and small intestine, forming a voluminous food bolus that distends gastric mechanoreceptors, triggering vagal satiety signals that prevent overeating.',
              'তৃপ্তির অনুভূতি: আঁশ পাকস্থলীতে পানি শোষণ করে ফুলে ওঠে এবং পেট ভরা থাকার সংকেত মস্তিষ্কে পাঠায়, যার ফলে অতিরিক্ত খাওয়ার প্রবণতা স্বাভাবিকভাবেই কমে যায়।',
            ),
            l(
              'Blood Sugar Stabilization: Viscous fibers create a molecular gel web that physically traps starch and slows the action of pancreatic amylase, flattening the postprandial glucose curve.',
              'রক্তের চিনি নিয়ন্ত্রণ: পিচ্ছিল আঁশ অন্ত্রে জেলের মতো স্তর তৈরি করে গ্লুকোজ শোষণকে ধীর করে দেয়, ফলে খাওয়ার পর রক্তে চিনির মাত্রা হঠাৎ লাফিয়ে ওঠে না।',
            ),
            l(
              'Cholesterol Lowering: Soluble fibers bind bile acids in the ileum and flush them out of the body; the liver is forced to draw LDL cholesterol out of the bloodstream to synthesize replacement bile.',
              'কোলেস্টেরল হ্রাস: দ্রবণীয় আঁশ অন্ত্রের পিত্তরসকে নিজের সাথে বেঁধে বের করে দেয়; ফলে লিভার বাধ্য হয়ে রক্ত থেকে ক্ষতিকর এলডিএল কোলেস্টেরল টেনে নিয়ে নতুন পিত্তরস তৈরি করে।',
            ),
            l(
              'Healthy Gut Microbiome: Fermentable fibers nourish probiotic bacteria, which transform fiber into anti-inflammatory short-chain fatty acids that protect against colon cancer and systemic inflammation.',
              'অন্ত্রের সুরক্ষা: ব্যাকটেরিয়ারা এই আঁশ খেয়ে বিশেষ ফ্যাটি অ্যাসিড (বিউটাইরেট) তৈরি করে, যা কোলনের স্বাস্থ্য রক্ষা করে এবং কোলন ক্যান্সার প্রতিরোধে সাহায্য করে।',
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
          heading: l(
            '1. The Acceptable Macronutrient Distribution Range (AMDR) Architecture',
            '১. গ্রহণযোগ্য ম্যাক্রোনিউট্রিয়েন্ট বিভাজন (AMDR) কাঠামো ও গাণিতিক অ্যালগরিদম'
          ),
          paragraphs: [
            l(
              'Established by the Institute of Medicine (now the National Academy of Medicine), the **Acceptable Macronutrient Distribution Ranges (AMDR)** delineate the statistical percentage boundaries of daily energy intake associated with reduced risk of chronic lifestyle disease while ensuring adequate intakes of essential micronutrients [1].',
              'আন্তর্জাতিক ন্যাশনাল অ্যাকাডেমি অব মেডিসিন কর্তৃক প্রণীত **AMDR** হলো প্রতিটি খাদ্য উপাদানের এমন একটি প্রমিত গাণিতিক সীমানা, যা দীর্ঘমেয়াদী হৃদরোগ, স্ট্রোক বা ডায়াবেটিসের ঝুঁকি কমিয়ে দেহের সকল প্রয়োজনীয় ভিটামিন ও খনিজের প্রাপ্যতা নিশ্চিত করে [1]।',
            ),
            l(
              'In clinical practice, translating an overarching caloric prescription into exact macronutrient grams does not occur by random guessing. Expert dietitians execute a strict, four-step clinical algorithm [1, 5]:',
              'ক্লিনিক্যাল প্র্যাকটিসে মোট ক্যালোরিকে খাদ্য উপাদানের গ্রামে রূপান্তর করার কাজটি কোনো অনুমানের ওপর নির্ভর করে না। অভিজ্ঞ পুষ্টিবিদরা একটি অত্যন্ত সুশৃঙ্খল চার ধাপের গাণিতিক অ্যালগরিদম অনুসরণ করেন [1, 5]:',
            ),
          ],
          bullets: [
            l(
              'Step 1: Formulate Total Energy Expenditure (TEE): Calculate the patient’s baseline daily energy goal (e.g., 1,800 kcal/day) using validated equations (Mifflin-St Jeor) or indirect calorimetry.',
              'ধাপ ১: মোট ক্যালোরি নির্ধারণ: রোগীর দৈনিক মোট শক্তির কাঙ্ক্ষিত পরিমাণ (যেমন ১৮০০ kcal/দিন) মিফলিন সমীকরণ বা ক্যালোরিমেট্রি দিয়ে চূড়ান্ত করুন।',
            ),
            l(
              'Step 2: Lock Clinical Protein Requirements FIRST: Determine protein grams based on clinical disease state per kilogram of body weight (e.g., 1.2 g/kg for an 80 kg adult = 96 g protein). Convert to calories using the Atwater factor: 96 g × 4 kcal/g = 384 kcal (representing 21.3% of TEE). Protein is locked first because tissue requirements are non-negotiable.',
              'ধাপ ২: প্রথমে প্রোটিনের পরিমাণ নির্দিষ্ট করুন: রোগের অবস্থা অনুযায়ী প্রতি কেজি ওজনে প্রোটিন গ্রাম হিসাব করুন (যেমন ৮০ কেজিতে ১.২ গ্রাম/কেজি = ৯৬ গ্রাম প্রোটিন)। অ্যাটওয়াটার মান দিয়ে ক্যালোরিতে নিন: ৯৬ × ৪ = ৩৮৪ kcal (মোট ক্যালোরির ২১.৩%)। টিস্যুর ক্ষয় রোধে প্রোটিন অপরিবর্তনীয় হওয়ায় এটিকে সর্বপ্রথমে লক করা হয়।',
            ),
            l(
              'Step 3: Establish Fat Quality and Percentage Boundaries: Assign a targeted fat percentage based on serum lipid profile and cardiovascular risk (e.g., 30% of 1,800 kcal = 540 kcal). Convert to grams: 540 kcal / 9 kcal/g = 60 g fat/day. Enforce the clinical sub-target: saturated fatty acids (SFA) capped at < 7% to 10% (max 14–20 g).',
              'ধাপ ৩: ফ্যাটের শতকরা হার ও গুণগত মান নির্ধারণ: রক্তের লিপিড প্রোফাইল দেখে ফ্যাটের হার ঠিক করুন (যেমন ১৮০০-র ৩০% = ৫৪০ kcal)। গ্রামে নিন: ৫৪০ / ৯ = ৬০ গ্রাম ফ্যাট/দিন। এর মধ্যে ক্ষতিকর স্যাচুরেটেড চর্বিকে < ৭-১০% (সর্বোচ্চ ১৪-২০ গ্রাম) এর ভেতরে কঠোরভাবে সীমাবদ্ধ রাখুন।',
            ),
            l(
              'Step 4: Allocate Remaining Energy to Complex Carbohydrates: Subtract protein and fat calories from TEE to find the carbohydrate window: 1,800 - (384 + 540) = 876 kcal. Convert to grams: 876 kcal / 4 kcal/g = 219 g carbohydrate/day (representing 48.7% of TEE). Calculate the accompanying fiber goal: 14 g / 1,000 kcal × 1.8 = 25 to 30 g fiber.',
              'ধাপ ৪: অবশিষ্ট ক্যালোরি জটিল কার্বোহাইড্রেটে বরাদ্দ করুন: মোট ক্যালোরি থেকে প্রোটিন ও ফ্যাট বাদ দিন: ১৮০০ - (৩৮৪ + ৫৪০) = ৮৭৬ kcal। গ্রামে নিন: ৮৭৬ / ৪ = ২১৯ গ্রাম কার্বোহাইড্রেট/দিন (৪৮.৭%)। এর সাথে দৈনিক ২৫ থেকে ৩০ গ্রাম খাদ্যআঁশ নিশ্চিত করুন।',
            ),
          ],
        },
        {
          id: 'sec-diabetes-lipid-mnt',
          heading: l(
            '2. Clinical Macronutrient Splits for Diabetes and Atherosclerosis',
            '২. ডায়াবেটিস ও হৃদরোগের জন্য লক্ষ্যভিত্তিক ম্যাক্রোনিউট্রিয়েন্ট বিভাজন'
          ),
          paragraphs: [
            l(
              'In adult patients with Type 2 Diabetes Mellitus, official consensus guidelines from the American Diabetes Association (ADA) explicitly state that there is no single universal "ideal" percentage of calories from carbs, fat, and protein [2]. The historical dogma of prescribing a uniform 60% carbohydrate, 20% protein, 20% fat diet has been definitively retired.',
              'টাইপ ২ ডায়াবেটিসে আক্রান্ত প্রাপ্তবয়স্কদের ক্ষেত্রে আমেরিকান ডায়াবেটিস অ্যাসোসিয়েশনের (ADA) আধুনিক নির্দেশিকা স্পষ্টভাবে ঘোষণা করেছে যে সবার জন্য কোনো একক "আদর্শ" অনুপাত নেই [2]। অতীতে সবাইকে চোখ বন্ধ করে ৬০% কার্বোহাইড্রেট, ২০% প্রোটিন ও ২০% ফ্যাটের ডায়েট দেওয়ার পুরোনো নিয়ম এখন বাতিল হয়ে গেছে।',
            ),
            l(
              'Contemporary clinical trials demonstrate that tailoring macronutrient splits to patient insulin resistance yields superior metabolic control [2, 3]:',
              'আধুনিক গবেষণায় প্রমাণিত হয়েছে যে রোগীর ইনসুলিন প্রতিরোধের মাত্রা অনুযায়ী খাবার ভাগ করে দিলে রক্তে গ্লুকোজ ও চর্বির নিয়ন্ত্রণ অনেক বেশি নিখুঁত হয় [2, 3]:',
            ),
          ],
          bullets: [
            l(
              'The Moderate-Carbohydrate Split for Diabetes (40% to 45% Carb, 35% Fat, 20% Protein): Moderating carbohydrate intake blunts acute postprandial glucose excursions, reduces daytime glycemic variability, and lowers circulating triglycerides while elevating HDL cholesterol.',
              'ডায়াবেটিসের জন্য পরিমিত শর্করা নীতি (৪০-৪৫% কার্ব, ৩৫% ফ্যাট, ২০% প্রোটিন): কার্বোহাইড্রেট কমিয়ে পরিমিত রাখলে খাওয়ার পর রক্তে চিনি হঠাৎ বেড়ে যাওয়া বন্ধ হয় এবং ট্রাইগ্লিসারাইড দ্রুত হ্রাস পেয়ে ভালো এইচডিএল বাড়ে।',
            ),
            l(
              'The Monounsaturated Fatty Acid (MUFA) Anchor: When fat is increased to 30–35% in diabetes, the elevation must come exclusively from monounsaturated fats (oleic acid from olive oil, mustard oil, nuts, and avocados). MUFAs enhance cell membrane fluidity and improve peripheral insulin sensitivity without driving hepatic steatosis.',
              'মনো-আনস্যাচুরেটেড ফ্যাটের (MUFA) ভূমিকা: ডায়াবেটিসে চর্বি সামান্য বাড়ালে তা অবশ্যই উদ্ভিজ্জ তেল (অলিভ অয়েল, সরিষার তেল, বাদাম) থেকে আসতে হবে। এই স্বাস্থ্যকর চর্বি কোষের ইনসুলিন সংবেদনশীলতা বৃদ্ধি করে।',
            ),
            l(
              'AHA/ACC Dyslipidemia Guidelines on Saturated Fat: To lower atherogenic ApoB and LDL particles, saturated fatty acids (palmitic, myristic, lauric acid) must be restricted to < 7% of total daily calories. Replacing saturated fat with polyunsaturated fatty acids (PUFA) up-regulates hepatic LDL receptor transcription, clearing circulating cholesterol.',
              'হৃদরোগের জন্য স্যাচুরেটেড ফ্যাট নিয়ন্ত্রণ: রক্তনালীতে চর্বি জমা ও হার্ট অ্যাটাক ঠেকাতে স্যাচুরেটেড চর্বিকে মোট ক্যালোরির ৭%-এর নিচে নামিয়ে আনতে হবে। স্যাচুরেটেড ফ্যাটের বদলে ওমেগা-৩ ও পলি-আনস্যাচুরেটেড ফ্যাট খেলে লিভার রক্ত থেকে দ্রুত ক্ষতিকর কোলেস্টেরল দূর করে।',
            ),
            l(
              'Absolute Trans Fat Elimination: Industrial partially hydrogenated vegetable oils (trans fats) must be strictly < 1% of energy (ideally 0 g), as trans fats uniquely elevate atherogenic LDL while simultaneously depressing protective HDL.',
              'ট্র্যান্স ফ্যাট সম্পূর্ণ বর্জন: ডালডা বা বারবার পোড়ানো তেলে তৈরি খাবারের ট্র্যান্স ফ্যাট পুরোপুরি বন্ধ করতে হবে, কারণ এটি রক্তে খারাপ কোলেস্টেরল বাড়িয়ে একই সাথে ভালো কোলেস্টেরল কমিয়ে দেয়।',
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
          heading: l(
            '1. Extreme Macronutrient Shifts: COPD Ventilatory Splits vs Pancreatitis Fat Restriction',
            '১. চরম পরিবর্তন: সিওপিডিতে শ্বাসকষ্টের ডায়েট বনাম প্যানক্রিয়াটাইটিসে ফ্যাট নিয়ন্ত্রণ'
          ),
          paragraphs: [
            l(
              'In severe metabolic and pulmonary disease, clinicians must execute extreme, pathophysiologically driven macronutrient shifts that deviate substantially from standard AMDR guidelines [1, 3]. Two classic clinical scenarios illustrate the profound biochemical power of altering macronutrient fuel ratios.',
              'তীব্র ফুসফুসের রোগ বা অগ্ন্যাশয়ের মারাত্মক প্রদাহে চিকিৎসকদের সাধারণ নিয়মের বাইরে গিয়ে একদম চরম মাত্রার খাদ্য পরিবর্তন করতে হয় [1, 3]। দুটি গুরুত্বপূর্ণ ক্লিনিক্যাল পরিস্থিতি ম্যাক্রোনিউট্রিয়েন্ট পরিবর্তনের এই গভীর শারীরবৃত্তীয় ক্ষমতাকে স্পষ্টভাবে প্রমাণ করে।',
            ),
            l(
              'First, in acute respiratory failure and severe Chronic Obstructive Pulmonary Disease (COPD), the body struggles to eliminate carbon dioxide [1]. Cellular combustion of glucose and fat follows fundamentally different stoichiometric equations:',
              'প্রথমত, তীব্র সিওপিডি (COPD) ও ফুসফুসের শ্বাসকষ্টে রোগী শরীর থেকে কার্বন ডাই-অক্সাইড গ্যাস বের করে দিতে মারাত্মক কষ্ট পায় [1]। কোষের ভেতরে শর্করা এবং ফ্যাট পোড়ার রাসায়নিক সমীকরণ দুটি সম্পূর্ণ ভিন্ন:',
            ),
            l(
              'Carbohydrate Oxidation (Glucose):\nC6H12O6 + 6 O2 → 6 CO2 + 6 H2O (Respiratory Quotient: RQ = 6 CO2 / 6 O2 = 1.00)\n\nFat Oxidation (Palmitic Acid):\nC16H32O2 + 23 O2 → 16 CO2 + 16 H2O (Respiratory Quotient: RQ = 16 CO2 / 23 O2 = 0.70)',
              'কার্বোহাইড্রেট জারণ (গ্লুকোজ):\nC6H12O6 + ৬ O2 → ৬ CO2 + ৬ H2O (রেসপিরেটরি কোশেন্ট: RQ = ৬ CO2 / ৬ O2 = ১.০০)\n\nফ্যাট বা চর্বি জারণ (পামিটিক অ্যাসিড):\nC16H32O2 + ২৩ O2 → ১৬ CO2 + ১৬ H2O (রেসপিরেটরি কোশেন্ট: RQ = ১৬ CO2 / ২৩ O2 = ০.৭০)',
            ),
            l(
              'Because fat produces approximately 30% less carbon dioxide per unit of oxygen consumed than carbohydrate, shifting a ventilator-dependent patient from a high-carbohydrate formula to a high-fat (40% to 50% fat) and low-carbohydrate (30% to 40% carb) enteral split significantly reduces metabolic CO2 generation (VCO2) [1]. This slashes minute ventilation requirements (VE) and prevents hypercapnic respiratory exhaustion, allowing difficult patients to be successfully extubated.',
              'যেহেতু ফ্যাট পুড়লে কার্বোহাইড্রেটের তুলনায় প্রায় ৩০% কম কার্বন ডাই-অক্সাইড তৈরি হয়, তাই ভেন্টিলেটরে আটকে থাকা শ্বাসকষ্টের রোগীর খাবারে শর্করা কমিয়ে (৩০-৪০%) এবং স্বাস্থ্যকর ফ্যাট বাড়িয়ে (৪০-৫০%) দিলে শরীরে কার্বন ডাই-অক্সাইড তৈরি অনেক কমে যায় [1]। এটি ফুসফুসের কাজের বোঝা কমিয়ে রোগীকে দ্রুত ভেন্টিলেটর থেকে বের করে আনতে সাহায্য করে।',
            ),
          ],
          bullets: [
            l(
              'The COPD Prescription Rule: High-fat, low-carbohydrate enteral formulas decrease CO2 production only when total caloric intake is maintained at maintenance requirements; overfeeding any high-fat formula still drives massive net lipogenesis and CO2 retention.',
              'সিওপিডি প্রেসক্রিপশন নিয়ম: খাবারে ফ্যাট বাড়িয়ে কার্বোহাইড্রেট কমালে কার্বন ডাই-অক্সাইড তখনই কমবে যখন মোট ক্যালোরি সীমার ভেতরে থাকবে; রোগীকে অতিরিক্ত খাবার দিলে ফ্যাট থেকেও শরীরে অতিরিক্ত CO2 তৈরি হবে।',
            ),
            l(
              'The Pancreatitis Emergency Threshold (TG > 1,000 mg/dL): At triglycerides > 1,000 mg/dL, capillary Lipoprotein Lipase (LPL) enzymes are saturated. Unhydrolyzed chylomicrons pool in the microcirculation, causing capillary plugging and localized ischemia in the pancreas.',
              'প্যানক্রিয়াটাইটিসের জরুরি সীমা (TG > ১০০০ mg/dL): রক্তে ট্রাইগ্লিসারাইড ১০০০ ছাড়ালে চর্বি ভাঙার এনজাইম saturated হয়ে রক্তে কাইলোমাইক্রনের বিশাল কণা জমা হয়, যা প্যানক্রিয়াসের সূক্ষ্ম রক্তনালী বন্ধ করে দেয়।',
            ),
            l(
              'Mandatory Extreme Fat Restriction (< 15–20% of energy, < 20–30 g/day): All dietary fats must be immediately slashed to bare survival levels; alcohol and simple refined sugars must be completely prohibited to stop hepatic VLDL synthesis until TG drops < 500 mg/dL.',
              'চর্বি অত্যন্ত কমিয়ে আনার নিয়ম (< ১৫-২০%, দিনে ২০-৩০ গ্রাম): রক্তে চর্বি ৫০০-র নিচে না নামা পর্যন্ত খাবারে সব ধরনের তেল ও চর্বি একদম নামমাত্র (দিনে ২০-৩০ গ্রাম) করতে হবে এবং সব ধরনের চিনি ও মদ পুরোপুরি বন্ধ রাখতে হবে।',
            ),
            l(
              'Medium-Chain Triglyceride (MCT) Utilization: In severe chylomicronemia, calories can be supported with MCT oil (C8 and C10 fatty acids), which are absorbed directly across enterocytes into the portal vein without requiring chylomicron assembly.',
              'MCT তেলের বিশেষ ব্যবহার: কাইলোমাইক্রন তৈরি না করেই শক্তি জোগাতে রোগীকে মিডিয়াম-চেইন ট্রাইগ্লিসারাইড (MCT) তেল দেওয়া যায়, যা সরাসরি রক্তের মাধ্যমে লিভারে গিয়ে শক্তি তৈরি করে।',
            ),
          ],
        },
        {
          id: 'sec-fiber-architecture',
          heading: l(
            '2. Dietary Fiber Architecture: Physicochemical Viscosity & Colonic SCFA Kinetics',
            '২. ডায়েটারি ফাইবারের বিজ্ঞান: সান্দ্রতা, অন্ত্রের ব্যাকটেরিয়ার গাঁজন ও বিউটাইরেট'
          ),
          paragraphs: [
            l(
              'In clinical dietetics, fiber is not treated as a single inert substance. It is categorized by its three fundamental physicochemical characteristics: solubility in water, viscosity in the small intestine, and rate of fermentation by the colonic microbiome [4].',
              'ক্লিনিক্যাল পুষ্টিবিজ্ঞানে ফাইবারকে কোনো একটি একক উপাদান হিসেবে দেখা হয় না। এর তিনটি মৌলিক ভৌত ও রাসায়নিক বৈশিষ্ট্যের ওপর ভিত্তি করে এটিকে বিচার করা হয়: পানিতে দ্রবণীয়তা, অন্ত্রে পিচ্ছিল জেলের সান্দ্রতা এবং বৃহদন্ত্রের জীবাণু দ্বারা গাঁজন (Fermentation) হওয়ার গতি [4]।',
            ),
            l(
              'The therapeutic mechanisms of dietary fiber operate across two distinct anatomical zones [4]:',
              'খাদ্যআঁশের রোগ নিরাময়কারী ভূমিকা মানবদেহের দুটি ভিন্ন অংশে শক্তিশালীভাবে কাজ করে [4]:',
            ),
          ],
          bullets: [
            l(
              'Small Intestinal Viscous Entrapment: Soluble viscous fibers (beta-glucan from oats and barley, psyllium husk, pectins from fruits, and glucomannan) hydrate to form an unstirred gelatinous layer over the intestinal brush border. This physical barrier slows the diffusion of glucose toward enterocyte SGLT1 transporters, dampening peak insulin demand. Simultaneously, the viscous gel physically entraps bile acids, preventing active reabsorption in the terminal ileum and flushing cholesterol into the stool.',
              'ক্ষুদ্রান্ত্রে জেলের মতো প্রতিবন্ধকতা: দ্রবণীয় সান্দ্র ফাইবার (ওটসের বিটা-গ্লুক্যান, ইসবগুলের ভুসি, ফলের পেকটিন) পানিতে ভিজে অন্ত্রের প্রাচীরে পিচ্ছিল জেলির স্তর তৈরি করে। এই বাধা গ্লুকোজ শোষণকে ধীর করে দেয়, ফলে রক্তে ইনসুলিনের চাহিদা কমে। একই সাথে এটি পিত্তরসের সাথে যুক্ত হয়ে তা শরীর থেকে বের করে দেয়, যা রক্তের কোলেস্টেরল উল্লেখযোগ্যভাবে কমিয়ে আনে।',
            ),
            l(
              'Colonic Microbiome Anaerobic Fermentation: Soluble fermentable fibers (inulin, fructooligosaccharides, resistant starches) travel to the cecum and ascending colon, where anaerobic commensal bacteria (Faecalibacterium prausnitzii, Roseburia) ferment them into Short-Chain Fatty Acids (SCFAs): acetate (60%), propionate (20%), and butyrate (20%).',
              'বৃহদন্ত্রে জীবাণু দ্বারা গাঁজন: দ্রবণীয় ফাইবারগুলো কোলনে পৌঁছালে সেখানে থাকা উপকারি ব্যাকটেরিয়ারা একে ভেঙে শর্ট-চেইন ফ্যাটি অ্যাসিড (SCFA) তৈরি করে: অ্যাসিটেট (৬০%), প্রোপিওনেট (২০%) এবং বিউটাইরেট (২০%)।',
            ),
            l(
              'The Epigenetic Role of Butyrate: Butyrate serves as the primary metabolic fuel, supplying 70% of total ATP energy requirements for colon epithelial cells (colonocytes). It acts as an endogenous histone deacetylase (HDAC) inhibitor, up-regulating tumor suppressor genes, down-regulating inflammatory NF-kappaB, tightening epithelial junction proteins (occludin, claudin-1), and stimulating enteroendocrine L-cells to release GLP-1 and PYY.',
              'বিউটাইরেটের অনন্য ক্ষমতা: বিউটাইরেট কোলনের কোষগুলোর ৭০% শক্তি একাই সরবরাহ করে। এটি কোষের জিনের ওপর কাজ করে প্রদাহ দমন করে, অন্ত্রের দেয়ালকে ছিদ্র হওয়া থেকে রক্ষা করে এবং রক্তে ইনসুলিন বাড়াতে ও ক্ষুধা কমাতে সাহায্যকারী হরমোন GLP-1 নিঃসরণ করে।',
            ),
            l(
              'Insoluble Bulking Architecture: Insoluble non-fermentable fibers (cellulose, hemicellulose, lignin from wheat bran and vegetable skins) resist bacterial breakdown. By mechanically binding water, they dramatically increase fecal bulk, stimulate peristalsis via stretch reflexes, shorten intestinal transit time, and decrease intraluminal pressure in the sigmoid colon to prevent diverticulosis.',
              'অদ্রবণীয় ফাইবারের কাঠামো: গম বা শাকসবজির খোসার অদ্রবণীয় ফাইবার (সেলুলোজ) অন্ত্রে হজম হয় না। এটি পানি ধরে রেখে মলের পরিমাণ বাড়ায়, অন্ত্রের মাংসপেশিকে উদ্দীপ্ত করে দ্রুত মলত্যাগে সাহায্য করে এবং কোষ্ঠকাঠিন্য ও কোলনের ডাইভার্টিকুলার রোগ প্রতিরোধ করে।',
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. The Three Chemical Fuels & Atwater Math', '১. তিনটি রাসায়নিক জ্বালানি ও অ্যাটওয়াটার মান'), sectionId: 'sec-macronutrient-basics' },
      { id: 'toc-2', label: l('2. The Balanced Plate (AMDR Guidelines)', '২. সুষম খাদ্যের সমীকরণ (AMDR নির্দেশিকা)'), sectionId: 'sec-amdr-intro' },
      { id: 'toc-3', label: l('3. Why Dietary Fiber Is Essential', '৩. ডায়েটারি ফাইবার কেন এত জরুরি?'), sectionId: 'sec-fiber-simple' },
      { id: 'toc-4', label: l('4. AMDR Framework & 4-Step Allocation Algorithm', '৪. AMDR কাঠামো ও ৪-ধাপের গাণিতিক বণ্টন'), sectionId: 'sec-amdr-framework' },
      { id: 'toc-5', label: l('5. Diabetes & Cardiovascular Lipid Targets', '৫. ডায়াবেটিস ও হৃদরোগের জন্য ম্যাক্রো অনুপাত'), sectionId: 'sec-diabetes-lipid-mnt' },
      { id: 'toc-6', label: l('6. COPD Ventilatory Splits vs Pancreatitis Restrictions', '৬. সিওপিডি বনাম প্যানক্রিয়াটাইটিসের খাদ্যাভ্যাস'), sectionId: 'sec-copd-pancreatitis-splits' },
      { id: 'toc-7', label: l('7. Dietary Fiber Architecture & Colonic Butyrate', '৭. ডায়েটারি ফাইবার ও কোলন বিউটাইরেট গতিবিদ্যা'), sectionId: 'sec-fiber-architecture' },
    ],
    terms: [
      {
        term: l('AMDR', 'এএমডিআর (AMDR)'),
        definition: l(
          'Acceptable Macronutrient Distribution Range; the percentage range of energy intake associated with reduced chronic disease risk: Carbohydrates 45–65%, Fats 20–35%, and Protein 10–35% of total daily calories.',
          'গ্রহণযোগ্য ম্যাক্রোনিউট্রিয়েন্ট বিভাজন সীমা; দীর্ঘমেয়াদী রোগ প্রতিরোধ ও সুস্বাস্থ্যের জন্য নির্ধারিত ক্যালোরির শতকরা অনুপাত: কার্বোহাইড্রেট ৪৫-৬৫%, ফ্যাট ২০-৩৫%, প্রোটিন ১০-৩৫%।',
        ),
      },
      {
        term: l('Atwater Energy Factors', 'অ্যাটওয়াটার মান (Atwater Factors)'),
        definition: l(
          'Standardized physiological energy values: 4 kcal/g for carbohydrate and protein, 9 kcal/g for fat, and 7 kcal/g for ethanol.',
          'প্রমিত শারীরবৃত্তীয় শক্তির মান: কার্বোহাইড্রেট ও প্রোটিনে ৪ kcal/গ্রাম, ফ্যাটে ৯ kcal/গ্রাম এবং অ্যালকোহলে ৭ kcal/গ্রাম।',
        ),
      },
      {
        term: l('Butyrate', 'বিউটাইরেট (Butyrate)'),
        definition: l(
          'A four-carbon short-chain fatty acid produced by bacterial fermentation of soluble fiber; supplies 70% of colonocyte energy and acts as an epigenetic anti-inflammatory regulator.',
          'অন্ত্রের ব্যাকটেরিয়া দ্বারা ফাইবার ভেঙে তৈরি চার কার্বনের শর্ট-চেইন ফ্যাটি অ্যাসিড, যা কোলন কোষের ৭০% শক্তি যোগায় এবং ক্যান্সার প্রতিরোধ ও প্রদাহ দমনে কাজ করে।',
        ),
      },
      {
        term: l('Chylomicronemia', 'কাইলোমাইক্রনেমিয়া (Chylomicronemia)'),
        definition: l(
          'Severe accumulation of large triglyceride-rich chylomicrons in plasma (triglycerides > 1,000 mg/dL) carrying extreme risk for acute necrotizing pancreatitis.',
          'রক্তে চর্বির বিশাল কণা কাইলোমাইক্রনের মারাত্মক আধিক্য (ট্রাইগ্লিসারাইড > ১০০০ mg/dL), যা জীবনঘাতী তীব্র প্যানক্রিয়াটাইটিসের সৃষ্টি করে।',
        ),
      },
      {
        term: l('Respiratory Quotient (RQ)', 'রেসপিরেটরি কোশেন্ট (RQ)'),
        definition: l(
          'The volumetric ratio of CO2 produced to O2 consumed; carbohydrate oxidation generates an RQ of 1.00, whereas fat oxidation generates an RQ of 0.70.',
          'উৎপন্ন কার্বন ডাই-অক্সাইড এবং ব্যবহৃত অক্সিজেনের অনুপাত; শর্করা পুড়লে RQ হয় ১.০০, অথচ ফ্যাট পুড়লে RQ নেমে আসে ০.৭০-এ।',
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
            'Step 1: Patient Profile & Prescription Goals. A 54-year-old male with Type 2 Diabetes, hypertension, and mixed dyslipidemia (Fasting Triglycerides = 280 mg/dL, LDL = 145 mg/dL, HbA1c = 8.2%). Weight = 80 kg, Height = 172 cm. Total daily energy requirement is calculated at 1,800 kcal/day.',
            'ধাপ ১: রোগীর তথ্য ও লক্ষ্য: টাইপ ২ ডায়াবেটিস ও রক্তে চর্বির সমস্যায় আক্রান্ত ৫৪ বছর বয়সী পুরুষ (ট্রাইগ্লিসারাইড ২৮০ mg/dL, এলডিএল ১৪৫ mg/dL, HbA1c ৮.২%)। ওজন ৮০ কেজি, উচ্চতা ১৭২ সেমি। দৈনিক ক্যালোরি চাহিদা ১৮০০ kcal/দিন।',
          ),
          l(
            'Step 2: Allocate Protein First. Prescribe 1.2 g/kg body weight to preserve somatic muscle and enhance satiety: 80 × 1.2 = 96 g protein/day. Energy from protein = 96 × 4 = 384 kcal (representing 21.3% of TEE).',
            'ধাপ ২: প্রোটিন নির্ধারণ: পেশির সুরক্ষা ও ক্ষুধা নিয়ন্ত্রণে প্রতি কেজিতে ১.২ গ্রাম প্রোটিন: ৮০ × ১.২ = ৯৬ গ্রাম প্রোটিন/দিন। প্রোটিনের ক্যালোরি = ৯৬ × ৪ = ৩৮৪ kcal (১৮০০-র ২১.৩%)।',
          ),
          l(
            'Step 3: Allocate Fat with Strict Saturated Fat Cap. Target 30% of daily energy from fat to blunt carbohydrate glycemic spikes and lower triglycerides: 1,800 × 0.30 = 540 kcal / 9 = 60 g fat/day. To lower atherogenic LDL, cap saturated fatty acids at < 7%: 1,800 × 0.07 = 126 kcal / 9 = 14 g max SFA. Emphasize monounsaturated fats (mustard oil, olive oil) and omega-3 polyunsaturated fats.',
            'ধাপ ৩: ফ্যাটের বণ্টন: ট্রাইগ্লিসারাইড কমাতে ও চিনি নিয়ন্ত্রণ করতে মোট ক্যালোরির ৩০% ফ্যাট: ১৮০০ × ০.৩০ = ৫৪০ kcal / ৯ = ৬০ গ্রাম ফ্যাট/দিন। এলডিএল কমাতে স্যাচুরেটেড চর্বি < ৭% (সর্বোচ্চ ১৪ গ্রাম)। সরিষার তেল, অলিভ অয়েল ও মাছের তেল প্রাধান্য দিন।',
          ),
          l(
            'Step 4: Allocate Complex Carbohydrates. Allocate remaining caloric window to low-glycemic carbohydrates: 1,800 - (384 + 540) = 876 kcal / 4 = 219 g carbohydrate/day (representing 48.7% of TEE).',
            'ধাপ ৪: কার্বোহাইড্রেট হিসাব: অবশিষ্ট ক্যালোরি স্বাস্থ্যকর জটিল কার্বোহাইড্রেটে বরাদ্দ: ১৮০০ - (৩৮৪ + ৫৪০) = ৮৭৬ kcal / ৪ = ২১৯ গ্রাম কার্বোহাইড্রেট/দিন (৪৮.৭%)।',
          ),
          l(
            'Step 5: Prescribe Fiber Architecture. Calculate fiber goal: 14 g / 1,000 kcal × 1.8 = 25.2 g → round up to 30 g/day. Prescribe at least 10g soluble viscous fiber (oats, lentils, chickpeas, psyllium husk) to lower LDL and blunt postprandial glucose surges.',
            'ধাপ ৫: ফাইবার নিশ্চিতকরণ: দিনে অন্তত ৩০ গ্রাম ফাইবার নিশ্চিত করা, যার মধ্যে ১০ গ্রাম দ্রবণীয় আঁশ (ওটস, ডাল, ছোলা, ইসবগুলের ভুসি) রক্তে চিনি ও কোলেস্টেরল কমাবে।',
          ),
        ],
        conclusion: l(
          'The resulting clinical split—48.7% Complex Carbohydrate (219g with 30g fiber), 30.0% Heart-Healthy Fat (60g, SFA < 14g), and 21.3% Protein (96g)—achieves tight glycemic control while driving rapid clearance of atherogenic lipoproteins.',
          'চূড়ান্ত পুষ্টি বণ্টন—৪৮.৭% জটিল কার্বোহাইড্রেট (২১৯ গ্রাম ও ৩০ গ্রাম আঁশ), ৩০% স্বাস্থ্যকর ফ্যাট (৬০ গ্রাম) এবং ২১.৩% প্রোটিন (৯৬ গ্রাম)—রোগীর রক্তে চিনি নিয়ন্ত্রণের পাশাপাশি কোলেস্টেরল ও ট্রাইগ্লিসারাইড কমাতে সফল ভূমিকা রাখে।',
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does increasing dietary fat at the expense of carbohydrates benefit a mechanically ventilated patient struggling to be weaned?',
          'ভেন্টিলেটর থেকে বের হতে কষ্ট পাওয়া রোগীর খাবারে কার্বোহাইড্রেট কমিয়ে ফ্যাট বাড়ালে কেন শারীরিক উপকার হয়?'
        ),
        answer: l(
          'Cellular oxidation of carbohydrates produces one molecule of carbon dioxide for every molecule of oxygen consumed (RQ = 1.00). In contrast, cellular oxidation of fat produces only 0.7 molecules of CO2 per molecule of oxygen consumed (RQ = 0.70). A higher-fat, lower-carbohydrate formula produces approximately 25% to 30% less carbon dioxide gas (VCO2), decreasing the volume of air the patient’s respiratory muscles must expel and preventing hypercapnic respiratory exhaustion during ventilator weaning.',
          'কার্বোহাইড্রেট পুড়লে যত অক্সিজেন লাগে ঠিক ততটাই কার্বন ডাই-অক্সাইড তৈরি হয় (RQ = ১.০০)। কিন্তু ফ্যাট পুড়লে প্রায় ৩০% কম কার্বন ডাই-অক্সাইড গ্যাস তৈরি হয় (RQ = ০.৭০)। তাই খাবারে ফ্যাট বাড়িয়ে দিলে রক্তে কার্বন ডাই-অক্সাইড কম জমে, যা ফুসফুসের শ্বাসকষ্ট কমিয়ে রোগীকে দ্রুত ভেন্টিলেটর থেকে বের করতে সাহায্য করে।',
        ),
      },
      {
        question: l(
          'What is the precise physiological mechanism by which soluble viscous fibers lower circulating serum LDL cholesterol?',
          'দ্রবণীয় সান্দ্র ফাইবার কোন শারীরবৃত্তীয় প্রক্রিয়ায় রক্তের ক্ষতিকর এলডিএল (LDL) কোলেস্টেরল কমিয়ে দেয়?'
        ),
        answer: l(
          'Soluble viscous fibers (such as beta-glucan and psyllium) hydrate in the small intestine to form an unabsorbable gelatinous matrix that physically binds cholesterol-rich bile acids and excretes them in the feces. This interrupts the normal enterohepatic recirculation of bile. To replenish the lost bile acid pool, the liver is forced to up-regulate surface LDL receptors and pull circulating atherogenic LDL particles out of the bloodstream to convert them into replacement bile salts.',
          'দ্রবণীয় ফাইবার (যেমন ওটসের বিটা-গ্লুক্যান ও ইসবগুল) অন্ত্রে জেলির মতো স্তর তৈরি করে পিত্তরসের সাথে যুক্ত হয়ে তা মলের সাথে বের করে দেয়। ফলে স্বাভাবিক পিত্তরসের পুনঃশোষণ ব্যাহত হয়। হারিয়ে যাওয়া পিত্তরস পুনরায় তৈরি করতে যকৃত বাধ্য হয়ে রক্ত থেকে ক্ষতিকর এলডিএল কোলেস্টেরল টেনে ভেতরে নিয়ে নেয়, ফলে রক্তে কোলেস্টেরলের মাত্রা উল্লেখযোগ্যভাবে কমে যায়।',
        ),
      },
    ],
  },
}
