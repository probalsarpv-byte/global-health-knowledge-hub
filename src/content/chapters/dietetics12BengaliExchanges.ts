import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics12References: LessonReference[] = [
  {
    id: 'ref-misra-consensus-2009',
    authors: 'Misra A, Chowbey P, Makkar BM, et al.',
    title: 'Consensus Statement for Diagnosis of Obesity, Abdominal Obesity and the Metabolic Syndrome for Asian Indians',
    organization: 'Journal of the Association of Physicians of India',
    year: 2009,
    url: 'https://pubmed.ncbi.nlm.nih.gov/19753765/',
  },
  {
    id: 'ref-joshi-starch-study-2014',
    authors: 'Joshi SR, Bhansali A, Bajaj S, et al.',
    title: 'Results from a Dietary Survey in an Indian T2D Population: A Cross-Sectional Study (STARCH Study)',
    organization: 'BMJ Open',
    year: 2014,
    url: 'https://bmjopen.bmj.com/content/4/10/e005138',
    doi: '10.1136/bmjopen-2014-005138',
  },
  {
    id: 'ref-infs-bangladesh-fct-2013',
    authors: 'Institute of Nutrition and Food Science (INFS)',
    title: 'Food Composition Table for Bangladesh',
    organization: 'Centre for Advanced Research in Sciences, University of Dhaka',
    year: 2013,
    url: 'https://www.fao.org/infoods/infoods/tables-and-databases/asia/en/',
  },
  {
    id: 'ref-mohan-cures-carbs-2011',
    authors: 'Mohan V, Radhika G, Sathya RM, et al.',
    title: 'Dietary Carbohydrates, Glycaemic Load, Food Groups and Risk of Incident Type 2 Diabetes Among Asian Indians: The Chennai Urban Rural Epidemiology Study (CURES-128)',
    organization: 'British Journal of Nutrition',
    year: 2011,
    url: 'https://www.cambridge.org/core/journals/british-journal-of-nutrition/article/dietary-carbohydrates-glycaemic-load-food-groups-and-risk-of-incident-type-2-diabetes-among-asian-indians-the-chennai-urban-rural-epidemiology-study-cures128/9D08BBBBBFCEAC629F942468307EB2C0',
    doi: '10.1017/S000711451100293X',
  },
  {
    id: 'ref-rahman-bengali-greens-fish-2016',
    authors: 'Rahman MS, Roy SK, Begum A, et al.',
    title: 'Traditional Leafy Vegetables and Fish Intake Among Rural and Urban Bangladeshi Populations: Nutrient Contributions and Culinary Patterns',
    organization: 'Asia Pacific Journal of Clinical Nutrition',
    year: 2016,
    url: 'https://pubmed.ncbi.nlm.nih.gov/27855482/',
    doi: '10.6133/apjcn.112015.02',
  },
  {
    id: 'ref-and-ada-choose-foods-2019',
    authors: 'American Diabetes Association and Academy of Nutrition and Dietetics',
    title: 'Choose Your Foods: Food Lists for Diabetes',
    organization: 'Academy of Nutrition and Dietetics',
    year: 2019,
    url: 'https://www.eatrightstore.org/product-type/pocket-guides/choose-your-foods-food-lists-for-diabetes',
  },
]

export const dietetics12BengaliExchangesLesson: LessonTopic = {
  id: 'topic.dietetics.south-asian-exchanges',
  slug: 'south-asian-bengali-cultural-food-exchanges',
  title: l(
    '12 · Bengali & South Asian Food Exchanges: Regional Carbohydrate & Protein Adaptation',
    '১২ · বাঙালি ও দক্ষিণ এশীয় খাদ্য বিনিময়: আঞ্চলিক ভাত-রুটি ও মাছ-ডালের রূপান্তর'
  ),
  summary: l(
    'Cultural and biochemical translation of clinical food exchange systems for South Asian and Bengali populations: overcoming the high-carbohydrate Asian Indian phenotype, mastering the parboiled rice (Siddha chal) versus polished rice dialectic, decoding the lentil (dal) dual-exchange classification (Starch + Very Lean Meat), quantifying indigenous freshwater fish (Rui, Katla, Ilish, small fish with bones), evaluating traditional leafy greens (Shak), and leveraging the balanced fatty acid profile of cold-pressed mustard oil.',
    'বাঙালি ও দক্ষিণ এশীয় জনগোষ্ঠীর জন্য ক্লিনিক্যাল খাদ্য বিনিময় ব্যবস্থার সাংস্কৃতিক ও জৈবরাসায়নিক রূপান্তর: অতিরিক্ত শর্করা নির্ভর "এশিয়ান ইন্ডিয়ান ফেনোটাইপ" এর ঝুঁকি মোকাবিলা, সিদ্ধ চাল বনাম আতপ চালের গ্লাইসেমিক পার্থক্য, ডালের দ্বৈত বিনিময় শ্রেণিবিভাগ (শ্বেতসার + চর্বিহীন আমিষ), দেশি মিঠা পানির মাছের (রুই, কাতলা, ইলিশ ও ছোট মাছ) পুষ্টিমান নির্ধারণ, ঐতিহ্যবাহী শাকসবজির গুরুত্ব এবং খাঁটি সরিষার তেলের চমৎকার ফ্যাটি অ্যাসিড ভারসাম্যের সঠিক প্রয়োগ।'
  ),
  subject: 'dietetics',
  version: 1,
  updatedAt: '2026-11-04',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-04',
  prerequisiteIds: ['topic.dietetics.food-exchange-systems'],
  relatedTopicIds: ['topic.dietetics.food-exchange-systems', 'topic.dietetics.macronutrient-distribution'],
  objectives: [
    l(
      'Identify the unique "thin-fat" South Asian phenotype and explain why Western food exchange lists fail without regional adaptation.',
      'দক্ষিণ এশীয়দের বিশেষ "থিন-ফ্যাট ফেনোটাইপ" চিহ্নিত করা এবং আঞ্চলিক খাদ্য রূপান্তর ছাড়া কেন পশ্চিমা ডায়েট চার্ট ব্যর্থ হয় তা ব্যাখ্যা করা।'
    ),
    l(
      'Quantify the biochemical difference between parboiled rice (Siddha chal) and polished white rice, calculating retrograded resistant starch (RS3) portions.',
      'সিদ্ধ চাল ও আতপ চালের জৈবরাসায়নিক পার্থক্য বিশ্লেষণ করা এবং প্রতিরোধী শ্বেতসার (Resistant Starch) সমন্বিত ভাতের সঠিক অংশের হিসাব করা।'
    ),
    l(
      'Classify cooked lentils (Dal) under its dual-exchange identity: 1 Starch Exchange + 1 Very Lean Meat Exchange per 1/2 cup cooked portion.',
      'রান্না করা ডালকে তার সঠিক দ্বৈত পরিচয়ে ভাগ করা: প্রতি ১/২ কাপ রান্না ঘন ডালে ১ অংশ শ্বেতসার + ১ অংশ চর্বিহীন আমিষ হিসাব করা।'
    ),
    l(
      'Formulate precise exchange equivalents for indigenous Bengali fish: lean carps (Rui/Katla), high-fat hilsa (Ilish), and calcium-dense small fish (Mola/Kanchki).',
      'দেশি মাছের সঠিক বিনিময় অংশ নির্ধারণ করা: চর্বিহীন রুই/কাতলা, ওমেগা-৩ সমৃদ্ধ ইলিশ এবং ক্যালসিয়ামে ভরপুর গুঁড়া মাছ।'
    ),
    l(
      'Evaluate the optimal Alpha-Linolenic Acid (ALA) to Linoleic Acid (LA) ratio of cold-pressed mustard oil compared to inflammatory refined seed oils.',
      'প্রদাহ সৃষ্টিকারী পরিশোধিত সয়াবিন তেলের তুলনায় খাঁটি সরিষার তেলের স্বাস্থ্যকর ওমেগা-৩ ও ওমেগা-৬ ফ্যাটি অ্যাসিডের অনুপাত বিশ্লেষণ করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A cultural adaptation plate model comparing a traditional Bengali meal with an evidence-based adapted plate: Traditional Plate shows 70% polished white rice mound (3 cups = 9 Starch exchanges = 135g Carb), small fish in oil, and thin watery dal; The Adapted Plate shows 25% Parboiled Brown/Coarse Rice (1 cup = 3 Starch exchanges = 45g Carb), 25% Rui Fish & Thick Dal (2 Lean Meat exchanges = 14g Protein), 50% Steamed Mixed Leafy Shak & Vegetables (2 Vegetable exchanges), and 1 tsp Mustard Oil, slashing postprandial glucose surges by 65%.',
      'ঐতিহ্যবাহী বনাম বৈজ্ঞানিক বাঙালি খাবার থালার তুলনামূলক চিত্র: ঐতিহ্যবাহী থালায় ৭০% সাদা ভাতের বিশাল স্তূপ (৩ কাপ = ৯ অংশ শ্বেতসার = ১৩৫ গ্রাম কার্ব), সামান্য তেলযুক্ত মাছ ও পাতলা ডাল; পক্ষান্তরে বিজ্ঞানসম্মত থালায় ২৫% লাল সিদ্ধ চালের ভাত (১ কাপ = ৩ অংশ শ্বেতসার = ৪৫ গ্রাম কার্ব), ২৫% রুই মাছ ও ঘন ডাল (২ অংশ চর্বিহীন আমিষ = ১৪ গ্রাম প্রোটিন), ৫০% রান্না করা শাকসবজি (২ অংশ সবজি) এবং রান্নার জন্য ১ চা চামচ সরিষার তেল, যা রক্তে খাওয়ার পরের সুগার বৃদ্ধি ৬৫% কমিয়ে দেয়।'
    ),
    steps: [
      l(
        'Step 1: Confront the Rice Monolith. Reduce typical 2–3 cup white rice mounds down to 1 cup cooked parboiled coarse rice (3 Starch exchanges = 45g Carb).',
        'ধাপ ১: ভাতের বিশাল স্তূপ কমানো: প্রচলিত ২–৩ কাপ সাদা ভাতের স্তূপ কমিয়ে ১ কাপ লাল সিদ্ধ চালের ভাতে (৩ অংশ শ্বেতসার = ৪৫ গ্রাম কার্ব) নামিয়ে আনুন।'
      ),
      l(
        'Step 2: Correct the Dal Classification. Count 1/2 cup thick cooked dal not as pure protein, but as 1 Starch exchange (15g Carb) PLUS 1 Very Lean Meat exchange (7g Protein).',
        'ধাপ ২: ডালের দ্বৈত হিসাব: ১/২ কাপ রান্না ঘন ডালকে কেবল প্রোটিন না ভেবে ১ অংশ শ্বেতসার (১৫ গ্রাম কার্ব) এবং ১ অংশ চর্বিহীন আমিষ (৭ গ্রাম প্রোটিন) হিসেবে গণ্য করুন।'
      ),
      l(
        'Step 3: Leverage Indigenous Fish. Prescribe 2 to 3 ounces of freshwater carp (Rui/Katla) as Lean Meat (14–21g protein, low saturated fat) or small fish with bones for calcium.',
        'ধাপ ৩: দেশি মাছের ব্যবহার: ২ থেকে ৩ আউন্স রুই বা কাতলা মাছকে চর্বিহীন আমিষ হিসেবে দিন অথবা ক্যালসিয়ামের জন্য কাঁটাসহ ছোট মাছ বরাদ্দ করুন।'
      ),
      l(
        'Step 4: Maximize Shak & Non-Starchy Sabji. Fill half the plate with 1 cup cooked leafy greens (Pui, Lal, Palong) and gourds, supplying viscous fiber and potassium with minimal calories.',
        'ধাপ ৪: শাক ও সবজি দ্বিগুণ করা: থালার অর্ধেক অংশ ১ কাপ রান্না শাক (পুঁই, লাল, পালং) এবং শ্বেতসারহীন সবজি দিয়ে পূর্ণ করুন যা প্রচুর আঁশ ও পটাশিয়াম দেবে।'
      ),
      l(
        'Step 5: Regulate Cooking Oil. Restrict mustard oil to 1 measuring teaspoon (5 mL = 1 Fat exchange) per serving, avoiding the common Bengali error of unmeasured pouring.',
        'ধাপ ৫: তেলের নিয়ন্ত্রণ: তরকারিতে সরিষার তেল প্রতি পরিবেশনে ঠিক ১ চা চামচে (৫ মিলি = ১ অংশ ফ্যাট) সীমাবদ্ধ রাখুন, আন্দাজে ঢালা সম্পূর্ণ বন্ধ করুন।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 49-year-old Bengali businessman with newly diagnosed Type 2 Diabetes and central adiposity (waist circumference = 98 cm, BMI = 26.2 kg/m²) presents for meal planning. He insists: "I only eat healthy home-cooked Bengali food: two big bowls of boiled white rice, a large bowl of yellow lentil soup (dal), fried eggplant, and Rui fish curry twice a day. Why is my HbA1c 8.8%?" What is the primary clinical dietetic reason for his poor glycemic control?',
      'টাইপ ২ ডায়াবেটিস এবং পেটে অতিরিক্ত চর্বিতে আক্রান্ত ৪৯ বছর বয়সী এক বাঙালি ব্যবসায়ী (কোমরের মাপ ৯৮ সেমি, BMI = ২৬.২) খাদ্য পরামর্শের জন্য আসেন। তিনি অবাক হয়ে বলেন: "আমি তো বাইরের কিছু খাই না, ঘরে রান্না খাঁটি বাঙালি খাবার খাই: দুই থালা সাদা ভাত, বড় বাটি ভরে ডাল, বেগুন ভাজা আর রুই মাছের ঝোল। তবুও আমার HbA1c ৮.৮% কেন?" তার ডায়াবেটিস অনিয়ন্ত্রিত থাকার প্রধান পুষ্টিগত কারণ কোনটি?'
    ),
    options: [
      l(
        'Rui fish produces toxic inflammatory ketones that block skeletal muscle insulin signaling.',
        'রুই মাছ শরীরে বিষাক্ত কিটোন তৈরি করে যা ইনসুলিনের কার্যকারিতা নষ্ট করে দেয়।'
      ),
      l(
        'His diet is overwhelming his hepatic portal vein with massive uncounted carbohydrate loads: 2 large bowls of white rice represent 6 to 8 Starch exchanges (90–120g carbs) per meal, and the large bowl of dal adds another 2 Starch exchanges (30g carbs), totaling over 120–150g of fast-acting glucose per sitting, driving intense hepatic de novo lipogenesis and insulin resistance.',
        'তার খাবারে প্রচুর লুকানো অতিরিক্ত শর্করা রয়েছে: প্রতি বেলায় দুই বাটি সাদা ভাত মূলত ৬ থেকে ৮ অংশ শ্বেতসার (৯০–১২০ গ্রাম কার্ব) এবং বড় বাটির ডাল আরও ২ অংশ শ্বেতসার (৩০ গ্রাম কার্ব) যোগ করে; যার ফলে প্রতি বেলায় ১২০–১৫০ গ্রাম দ্রুত শোষণশীল গ্লুকোজ সরাসরি যকৃতে ঢুকে ফ্যাটি লিভার ও তীব্র ইনসুলিন রেজিস্ট্যান্স তৈরি করছে।'
      ),
      l(
        'Bengali vegetables contain dangerous levels of cholesterol that convert into blood glucose.',
        'বাঙালি শাকসবজিতে প্রচুর ক্ষতিকর কোলেস্টেরল থাকে যা সরাসরি চিনিতে রূপান্তরিত হয়।'
      ),
      l(
        'Lentils contain zero carbohydrates and should be quadrupled to cure his diabetes.',
        'ডালে কোনো শর্করা নেই এবং ডালের পরিমাণ চারগুণ বাড়িয়ে দিলে ডায়াবেটিস সেরে যাবে।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'This scenario illustrates the classic South Asian clinical dietary paradox. In traditional Bengali culture, white rice is consumed in enormous unmeasured quantities (often 2 to 3 cups per meal = 6 to 9 Starch exchanges = 90–135g carbs). Furthermore, patients universally view dal as "pure protein," failing to realize that 1 large bowl of dal (1 cup) delivers 30g of carbohydrates (2 Starch exchanges) alongside its 14g of protein. Combining a giant rice mound with a large bowl of dal delivers an astronomical glycemic load of 120g to 150g of carbohydrates in a single meal. In an Asian Indian with high visceral adiposity, this massive glucose influx overwhelms hepatic storage, triggering rampant De Novo Lipogenesis (DNL), hypertriglyceridemia, and persistent hyperglycemia (HbA1c = 8.8%). Restructuring the plate to 1 cup parboiled rice (3 Starch) and 1/2 cup dal (1 Starch + 1 Lean Meat) resolves this overload.',
      'এটি দক্ষিণ এশীয়দের জন্য অত্যন্ত পরিচিত একটি পুষ্টি সংকট। বাঙালি সংস্কৃতিতে এক থালায় ২ থেকে ৩ কাপ সাদা ভাত খাওয়া হয়, যা মূলত ৬ থেকে ৯ অংশ শ্বেতসার (৯০–১৩৫ গ্রাম কার্বোহাইড্রেট)। উপরন্তু, রোগীরা ডালকে শুধুই "আমিষ" ভাবেন; তারা জানেন না যে ১ বড় বাটি ডালে (১ কাপ) ১৪ গ্রাম প্রোটিনের পাশাপাশি ৩০ গ্রাম খাঁটি শর্করা (২ অংশ শ্বেতসার) থাকে। ফলে এক বেলাতেই রোগী ১২০ থেকে ১৫০ গ্রাম গ্লুকোজ খেয়ে ফেলেন। পেটে চর্বি থাকা একজন মানুষের শরীরে এই বিপুল পরিমাণ চিনি সরাসরি যকৃতে গিয়ে চর্বিতে রূপান্তরিত হয় (ফ্যাটি লিভার) এবং ইনসুলিনকে পুরোপুরি অকেজো করে HbA1c ৮.৮%-এ তুলে দেয়।'
    ),
  },
  evidenceBySection: {
    'sec-south-asian-phenotype': ['ref-misra-consensus-2009', 'ref-joshi-starch-study-2014'],
    'sec-parboiled-vs-atap': ['ref-infs-bangladesh-fct-2013', 'ref-mohan-cures-carbs-2011'],
    'sec-dal-dichotomy': ['ref-infs-bangladesh-fct-2013', 'ref-and-ada-choose-foods-2019'],
    'sec-bengali-fish-exchanges': ['ref-infs-bangladesh-fct-2013', 'ref-rahman-bengali-greens-fish-2016'],
    'sec-shak-and-mustard-oil': ['ref-infs-bangladesh-fct-2013', 'ref-rahman-bengali-greens-fish-2016'],
    'sec-parboiling-biochemistry': ['ref-infs-bangladesh-fct-2013', 'ref-mohan-cures-carbs-2011'],
    'sec-bengali-fct-matrix': ['ref-infs-bangladesh-fct-2013', 'ref-and-ada-choose-foods-2019'],
    'sec-anti-nutrients-bengali': ['ref-infs-bangladesh-fct-2013', 'ref-rahman-bengali-greens-fish-2016'],
    'sec-hepatic-dnl-cascade': ['ref-misra-consensus-2009', 'ref-joshi-starch-study-2014', 'ref-mohan-cures-carbs-2011'],
    'sec-south-asian-menu-blueprint': ['ref-evert-ada-consensus-2019', 'ref-infs-bangladesh-fct-2013'],
  },
  references: dietetics12References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-south-asian-phenotype',
          heading: l(
            '1. The South Asian "Thin-Fat" Phenotype: Why Western Diet Lists Fail in Bengal',
            '১. দক্ষিণ এশীয়দের বিশেষ "থিন-ফ্যাট" শরীর: পশ্চিমা ডায়েট চার্ট কেন বাংলায় অচল?'
          ),
          paragraphs: [
            l(
              'For decades, clinical dietetics textbooks published in the United States and Europe advised patients to structure their meals around whole-wheat pita bread, low-fat cottage cheese, baked salmon, and steamed broccoli [1, 6]. When these Western exchange lists were handed to patients in Bangladesh and West Bengal, adherence collapsed. Patients felt alienated, frustrated, and misunderstood. More dangerously, standard Western Body Mass Index (BMI) categories completely failed to capture South Asian metabolic vulnerability.',
              'বহু দশক ধরে আমেরিকা ও ইউরোপের চিকিৎসা বইয়ে ডায়েটের উদাহরণ হিসেবে ওটস, কটেজ পনির, স্যামন মাছ এবং ব্রকলির কথা বলা হয়েছে [1, 6]। যখন এই চার্ট বাংলাদেশের বা পশ্চিমবঙ্গের রোগীদের হাতে দেওয়া হতো, তখন কেউই তা মানতে পারতেন না। রোগীরা নিজেদের সংস্কৃতি থেকে বিচ্ছিন্ন বোধ করতেন। এর চেয়েও বিপজ্জনক বিষয় হলো, পশ্চিমা শরীরের ভর সূচক (BMI) দক্ষিণ এশীয়দের বিপাকীয় জটিলতা পরিমাপ করতে সম্পূর্ণ ব্যর্থ হয়েছিল।'
            ),
            l(
              'Epidemiological research reveals that South Asians possess a distinct biological phenotype known as the **"Thin-Fat" Asian Indian Phenotype** [1, 2]. Even at a "normal" Western BMI of 22 to 24 kg/m², South Asians carry a remarkably high percentage of visceral body fat surrounding the liver, pancreas, and mesenteric organs, paired with low skeletal muscle mass (sarcopenic obesity). Consequently, international consensus guidelines establish much stricter clinical thresholds for South Asians: **Overweight begins at BMI ≥ 23.0 kg/m²**, and **Obesity begins at BMI ≥ 25.0 kg/m²** (compared to 25.0 and 30.0 kg/m² in Caucasians) [1].',
              'চিকিৎসা গবেষণায় প্রমাণিত হয়েছে যে দক্ষিণ এশীয়দের শরীর একটি বিশেষ গঠন বহন করে, যাকে চিকিৎসাবিজ্ঞানে **"থিন-ফ্যাট এশিয়ান ইন্ডিয়ান ফেনোটাইপ" (Thin-Fat Phenotype)** বলা হয় [1, 2]। অর্থাৎ বাইরে থেকে একজন বাঙালিকে শারীরিকভাবে রোগা বা স্বাভাবিক দেখালেও (BMI ২২–২৪) তার পেটের ভেতরে লিভার, অগ্ন্যাশয় এবং নাড়িভুঁড়ির চারপাশের ক্ষতিকর চর্বি (Visceral Fat) ইউরোপিয়ানদের চেয়ে অনেক বেশি থাকে এবং মাংসপেশির পরিমাণ থাকে অনেক কম। তাই আন্তর্জাতিক স্বাস্থ্য সংস্থা দক্ষিণ এশীয়দের জন্য সতর্কতার সীমা কমিয়ে দিয়েছে: **BMI ২৩ এর বেশি হলেই অতিরিক্ত ওজন** এবং **BMI ২৫ এর বেশি হলেই তা স্থূলতা বা ওবেসিটি** হিসেবে গণ্য হয় [1]।'
            ),
            l(
              'When this visceral fat-prone phenotype meets the traditional Bengali culinary pattern—where 70% to 80% of daily calories come from massive mounds of refined white rice eaten three times a day—the liver is flooded with unbuffered glucose, triggering explosive rates of Type 2 Diabetes, premature coronary artery disease, and fatty liver (MASLD) [1, 4]. Clinical dietetics must adapt to regional staples rather than trying to erase cultural heritage.',
              'এই পেটে চর্বি জমার প্রবণতার সাথে যখন আমাদের ঐতিহ্যবাহী বাঙালি খাদ্যাভ্যাস যুক্ত হয়—যেখানে সারাদিনের মোট শক্তির ৭০% থেকে ৮০% আসে বিশাল থালাভর্তি সাদা ভাত থেকে—তখন যকৃতে গ্লুকোজের বন্যা বয়ে যায়। এর ফলে দক্ষিণ এশিয়ায় ডায়াবেটিস, অল্প বয়সে হৃদরোগ এবং ফ্যাটি লিভার মহামারী রূপ ধারণ করেছে [1, 4]। তাই সংস্কৃতি পরিবর্তন না করে আমাদের দেশীয় ভাত, মাছ, ডাল ও শাকসবজিকে বিজ্ঞানসম্মত বিনিময় অংশে রূপান্তর করাই আধুনিক ডায়েটেটিক্সের মূল লক্ষ্য।'
            ),
          ],
        },
        {
          id: 'sec-parboiled-vs-atap',
          heading: l(
            '2. The Parboiled Rice (Siddha Chal) vs. Polished Rice Dialectic',
            '২. সিদ্ধ চাল বনাম আতপ চালের পুষ্টিবিজ্ঞান: ভাতের সঠিক অংশ নির্ধারণ'
          ),
          paragraphs: [
            l(
              'Rice is the beating heart of Bengali culture ("Maache-Bhaate Bangali"). However, from a biochemical perspective, all rice is not identical [3, 4]. The traditional method of processing paddy in Bengal creates a profound physiological divergence between **Parboiled Rice (Siddha Chal)** and **Untreated White Rice (Atap Chal)**.',
              '"মাছে-ভাতে বাঙালি"—ভাত হলো বাঙালির প্রাণ। কিন্তু পুষ্টিবিজ্ঞানের দৃষ্টিতে সব চাল এক নয় [3, 4]। ধান ভাঙানোর পদ্ধতির ওপর ভিত্তি করে আমাদের দেশীয় **সিদ্ধ চাল** এবং **আতপ চালের** মধ্যে বিশাল শারীরবৃত্তীয় পার্থক্য তৈরি হয়।'
            ),
          ],
          bullets: [
            l(
              'The Parboiling Advantage (Hydrothermal Processing): In traditional parboiling (Siddha process), harvested paddy is soaked in water and steamed under pressure before the outer husk is removed. This hydrothermal pressure forces water-soluble B vitamins (thiamine B1, niacin B3, pyridoxine B6) and minerals from the nutrient-dense aleurone layer and bran into the central starchy endosperm. When the rice is subsequently milled and polished, it retains 70% to 80% of its natural micronutrients, historically protecting the Bengali population from the fatal thiamine-deficiency disease beriberi [3].',
              'ধান সিদ্ধ করার পুষ্টিগুণ: সিদ্ধ চাল তৈরির সময় ধানকে খোসাসহ ভিজিয়ে ভাপে সিদ্ধ করা হয়। এই তাপে ধানের বাইরের খোসার সব ভিটামিন বি (থায়ামিন, নিয়াসিন) এবং খনিজ চালের ভেতরের শ্বেতসারে ঢুকে স্থায়ীভাবে মিশে যায়। ফলে চাল মেশিনে ছাঁটার পরও তার ৭০% থেকে ৮০% ভিটামিন সংরক্ষিত থাকে, যা ঐতিহাসিকভাবে বাঙালিদের মারাত্মক বেরিবেরি রোগ থেকে বাঁচিয়ে রেখেছে [3]। ',
            ),
            l(
              'Retrograded Resistant Starch (RS3): Parboiled rice has a significantly higher amylose content than sticky atap rice. When parboiled coarse rice is cooked and allowed to cool slightly, the amylose chains recrystallize through a process called retrogradation, forming **Type 3 Resistant Starch (RS3)**. RS3 completely resists enzymatic cleavage by salivary and pancreatic alpha-amylase in the small intestine, acting like soluble dietary fiber. It lowers the Glycemic Index (GI ~ 55–60 for parboiled rice vs. GI > 75 for atap rice) and travels intact to the colon, where anaerobic microbes ferment it into anti-inflammatory butyrate [3, 4].',
              'প্রতিরোধী শ্বেতসার (Resistant Starch): সিদ্ধ চালে অ্যামাইলোজের পরিমাণ বেশি থাকে। সিদ্ধ চালের ভাত রান্না করার পর সামান্য ঠান্ডা হলে তার শ্বেতসার এক বিশেষ শক্ত রূপ ধারণ করে, যাকে **টাইপ-৩ রেজিসট্যান্ট স্টার্চ (RS3)** বলা হয়। আমাদের পেটের সাধারণ এনজাইম এই শ্বেতসার হজম করতে পারে না, ফলে এটি দ্রবণীয় আঁশের মতো কাজ করে। এটি রক্তে সুগার বৃদ্ধির গতি কমিয়ে দেয় (সিদ্ধ চালের গ্লাইসেমিক ইনডেক্স ৫৫–৬০, যেখানে আতপ চালের ৭৫ এর বেশি) এবং কোলনে গিয়ে উপকারি ফ্যাটি অ্যাসিড তৈরি করে অন্ত্র ভালো রাখে [3, 4]। ',
            ),
            l(
              'The Portion Metric: In clinical food exchanges, **1/3 cup of cooked parboiled rice** (approx. 75g to 80g wet weight, or 1 small flat serving spoon) equals **1 Starch Exchange** (15g Carbohydrate, 3g Protein, 80 kcal). The typical Bengali plate contains 2 to 3 full domestic measuring cups of cooked rice (6 to 9 Starch exchanges = 90–135g carbs in a single meal!), overwhelming insulin reserves.',
              'ভাতের প্রমিত অংশের পরিমাপ: খাদ্য বিনিময় তালিকায় **১/৩ কাপ রান্না সিদ্ধ চালের ভাত** (প্রায় ৭৫ থেকে ৮০ গ্রাম বা ১টি ছোট চামচ) হলো ঠিক **১ অংশ শ্বেতসার** (১৫ গ্রাম কার্বোহাইড্রেট, ৩ গ্রাম প্রোটিন এবং ৮০ ক্যালোরি)। সাধারণ বাঙালি থালায় এক বেলাতেই ২ থেকে ৩ কাপ ভাত থাকে (৬ থেকে ৯ অংশ শ্বেতসার = ৯০ থেকে ১৩৫ গ্রাম চিনি!), যা শরীরের ইনসুলিনের ওপর মারাত্মক চাপ সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'sec-dal-dichotomy',
          heading: l(
            '3. The Lentil (Dal) Biochemical Truth: Is Dal Protein or Starch?',
            '৩. ডালের আসল সত্য: ডাল কি আমিষ নাকি শ্বেতসার?'
          ),
          paragraphs: [
            l(
              'Ask almost any person in South Asia, and they will tell you with absolute certainty: "Dal is protein." This pervasive cultural myth is the single most common cause of unexplained diabetic hyperglycemia in South Asian outpatient clinics [2, 3].',
              'বাঙালি সমাজের যে কাউকে জিজ্ঞেস করলে তিনি নির্দ্বিধায় বলবেন: "ডাল তো প্রোটিন।" এই বহুল প্রচলিত সাংস্কৃতিক ভুল ধারণাটিই দক্ষিণ এশিয়ার ডায়াবেটিস রোগীদের সুগার অনিয়ন্ত্রিত থাকার সবচেয়ে বড় কারণ [2, 3]।'
            ),
            l(
              'Biochemically, legumes and lentils (Moshur dal, Moong dal, Cholar dal) are seeds packed with storage starches to fuel the embryonic plant. When 1/2 cup of thick cooked dal (100g cooked weight) is analyzed in a nutritional laboratory, it yields [3]:',
              'উদ্ভিদবিজ্ঞানের দৃষ্টিতে ডাল হলো গাছের বীজ, যা ভবিষ্যতের চারার জন্য প্রচুর শ্বেতসার জমিয়ে রাখে। গবেষণাগারে ১/২ কাপ রান্না করা ঘন ডাল (১০০ গ্রাম) পরীক্ষা করলে পাওয়া যায় [3]:'
            ),
          ],
          bullets: [
            l(
              'Carbohydrates: 15 grams per 1/2 cup cooked thick dal (equal to 1 full Starch exchange, exactly like a slice of bread or 1/3 cup of rice!).',
              'কার্বোহাইড্রেট: প্রতি ১/২ কাপ রান্না ঘন ডালে থাকে ১৫ গ্রাম কার্বোহাইড্রেট (যা হুবহু ১ টুকরো পাউরুটি বা ১/৩ কাপ ভাতের সমান ১টি পূর্ণ শ্বেতসার অংশ!)।',
            ),
            l(
              'Protein: 7 grams per 1/2 cup cooked thick dal (equal to 1 Very Lean Meat exchange, equivalent to 1 ounce of chicken breast or fish).',
              'প্রোটিন: প্রতি ১/২ কাপ রান্না ঘন ডালে থাকে ৭ গ্রাম প্রোটিন (যা ১ আউন্স মুরগির মাংস বা মাছের সমান ১টি চর্বিহীন আমিষ অংশ)।',
            ),
            l(
              'Fat: 0 to 1 gram (without added tarka oil). Energy: ~90 to 100 kcal.',
              'ফ্যাট: ০ থেকে ১ গ্রাম (অতিরিক্ত তেলের ফোড়ন ছাড়া)। মোট ক্যালোরি: প্রায় ৯০ থেকে ১০০ কিলোক্যালোরি।',
            ),
            l(
              'The Dual-Exchange Identity: Clinical dietitians must teach patients that Dal is NOT pure protein; **1/2 cup of cooked thick dal = 1 Starch Exchange + 1 Very Lean Meat Exchange**. If a diabetic patient eats a large bowl of dal (1 cup) alongside their rice, they have consumed 30 extra grams of uncounted carbohydrates (2 extra slices of bread!), driving severe postprandial glucose surges [2, 3].',
              'ডালের দ্বৈত পরিচয়: ডাল কখনোই শুধুই আমিষ নয়; **১/২ কাপ রান্না ঘন ডাল = ১ অংশ শ্বেতসার + ১ অংশ চর্বিহীন আমিষ**। কোনো ডায়াবেটিস রোগী যদি ভাতের সাথে এক বড় বাটি ডাল (১ কাপ) খান, তবে তিনি অজান্তেই ভাতের বাইরে আরও ৩০ গ্রাম অতিরিক্ত চিনি (২ টুকরো পাউরুটির সমান!) খেয়ে ফেলেছেন।'
            ),
            l(
              'Amino Acid Complementation (Khichuri Synergy): Plant proteins are "incomplete" because they lack certain essential amino acids. Rice is deficient in the essential amino acid **Lysine** but abundant in sulfur-containing **Methionine** and Cysteine. Conversely, lentils (dal) are rich in Lysine but deficient in Methionine. When rice and dal are cooked together in traditional Bengali Khichuri (or eaten together in a meal in a 3:1 or 2:1 ratio), their amino acids complement each other perfectly, synthesizing a complete protein with a biological value rivaling animal egg albumin [3].',
              'খিচুড়ির অনন্য পুষ্টিবিজ্ঞান (Amino Acid Complementation): চাল ও ডালের যুগলবন্দি উদ্ভিজ্জ প্রোটিনের এক জাদুকরি সমন্বয়। চালে লাইসিন (Lysine) নামের অ্যামিনো অ্যাসিড কম থাকে কিন্তু মিথিওনিন (Methionine) বেশি থাকে। অন্যদিকে ডালে প্রচুর লাইসিন থাকে কিন্তু মিথিওনিন কম থাকে। যখন ভাত ও ডাল একসাথে খাওয়া হয় (যেমন আমাদের ঐতিহ্যবাহী খিচুড়ি), তখন তারা একে অপরের ঘাটতি পূরণ করে ডিমের মতো শতভাগ উন্নত মানের প্রথম শ্রেণীর প্রোটিন তৈরি করে [3]। ',
            ),
          ],
        },
        {
          id: 'sec-bengali-fish-exchanges',
          heading: l(
            '4. Indigenous Freshwater Fish Exchanges: From Rui to Ilish and Small Fish',
            '৪. দেশি মিঠা পানির মাছের খাদ্য বিনিময়: রুই, ইলিশ ও কাঁটাসহ ছোট মাছ'
          ),
          paragraphs: [
            l(
              'Fish is the premier source of animal protein in Bengal, offering distinct cardiovascular and micronutrient advantages over terrestrial red meat [3, 5]. In clinical dietetics, indigenous fish are categorized into three therapeutic tiers:',
              'বাঙালির পাতে আমিষের প্রধান ও সেরা উৎস হলো মাছ, যা লাল মাংসের চেয়ে হৃদযন্ত্রের জন্য শতগুণ উপকারি [3, 5]। চিকিৎসাবিজ্ঞানে দেশি মাছকে তিনটি প্রধান শ্রেণীতে ভাগ করা হয়:'
            ),
          ],
          bullets: [
            l(
              'Lean Freshwater Carps (Rui, Katla, Mrigal): 1 ounce (28g) of cooked boneless flesh = 1 Lean Meat exchange (7g Protein, 1–3g Fat, ~50 kcal). A standard domestic cross-cut piece of Rui (roughly 2 to 3 ounces / 60–85g) provides 14 to 21 grams of high-biological-value protein with negligible saturated fat. Excellent for diabetic, hypertensive, and chronic kidney disease meal plans.',
              'চর্বিহীন বড় মাছ (রুই, কাতলা, মৃগেল): ১ আউন্স (২৮ গ্রাম) রান্না মাছ = ১ অংশ হালকা চর্বিযুক্ত আমিষ (৭ গ্রাম প্রোটিন, ১–৩ গ্রাম ফ্যাট, ৫০ ক্যালোরি)। একটি মাঝারি সাইজের রুই মাছের টুকরো (প্রায় ২ থেকে ৩ আউন্স বা ৬০–৮৫ গ্রাম) কোনো ক্ষতিকর চর্বি ছাড়াই ১৪ থেকে ২১ গ্রাম উন্নত প্রোটিন দেয়। ডায়াবেটিস ও কিডনি রোগীদের জন্য আদর্শ।',
            ),
            l(
              'High-Fat Hilsa (Ilish - Tenualosa ilisha): Ilish is an anadromous marine/riverine clupeid fish packed with rich natural lipids. 1 ounce of cooked Ilish = 1 High-Fat Meat exchange (7g Protein, 8g Fat, ~100 kcal). A single thick cross-cut steak of Ilish (approx. 2 to 2.5 ounces / 60–70g) supplies 14g Protein and 16g to 20g of healthy fat (up to 200 kcal!). Unlike red meat saturated fat, Ilish fat is extraordinarily rich in long-chain Marine Omega-3 Polyunsaturated Fatty Acids (EPA and DHA), which lower serum triglycerides, stabilize cardiac membranes, and suppress vascular inflammation [3, 5].',
              'উচ্চ চর্বির ইলিশ মাছ: ইলিশ হলো চর্বিযুক্ত মাছের রাজা। ১ আউন্স ইলিশ = ১ অংশ উচ্চ চর্বিযুক্ত আমিষ (৭ গ্রাম প্রোটিন, ৮ গ্রাম ফ্যাট, ১০০ ক্যালোরি)। এক টুকরো বড় ইলিশ মাছে (প্রায় ৬০–৭০ গ্রাম) প্রায় ১৪ গ্রাম প্রোটিন এবং ১৬ থেকে ২০ গ্রাম উপকারি তেল থাকে। তবে এই তেল গরুর চর্বির মতো ক্ষতিকর নয়; এটি ওমেগা-৩ ফ্যাটি অ্যাসিডে (EPA ও DHA) ভরপুর, যা রক্তে ট্রাইগ্লিসারাইড কমায় এবং হার্ট অ্যাটাক প্রতিরোধ করে [3, 5]। ',
            ),
            l(
              'Small Indigenous Fish Eaten with Bones (Mola, Dhela, Kanchki, Batashi): Small freshwater fish eaten whole with their head, soft bones, and viscera are unmatched micronutrient powerhouses. While providing standard lean protein (7g per oz), 100 grams of whole Mola fish delivers over 800 to 1,000 mg of bioavailable Calcium (100% of daily adult requirements!), along with massive stores of preformed Vitamin A (retinol), iron, and zinc [3, 5]. In a region where dairy consumption is low and lactose intolerance is widespread, small fish are the premier nutritional safeguard against osteoporosis and maternal anemia.',
              'কাঁটাসহ খাওয়ার ছোট দেশি মাছ (মলা, ঢেলা, কাঁচকি): মাথা ও কাঁটাসহ চিবিয়ে খাওয়া ছোট মাছ হলো প্রকৃতির অন্যতম সেরা মাল্টিভিটামিন। প্রতি ১০০ গ্রাম ছোট মালায় প্রায় ৮০০ থেকে ১,০০০ মিলিগ্রাম শোষণযোগ্য ক্যালসিয়াম থাকে (যা সারাদিনের ক্যালসিয়ামের চাহিদার সমান!), সাথে থাকে প্রচুর ভিটামিন এ, আয়রন ও জিংক [3, 5]। যারা দুধ খেতে পারেন না তাদের জন্য হাড় মজবুত করতে ছোট মাছের কোনো বিকল্প নেই।'
            ),
          ],
        },
        {
          id: 'sec-shak-and-mustard-oil',
          heading: l(
            '5. Traditional Greens (Shak) and Cold-Pressed Mustard Oil (Shorishe Tel)',
            '৫. ঐতিহ্যবাহী শাকসবজি এবং খাঁটি সরিষার তেলের অনন্য গুণ'
          ),
          paragraphs: [
            l(
              'Two indigenous culinary pillars of the Bengali kitchen possess exceptional biochemical properties that should be championed in modern medical nutrition therapy: **traditional leafy greens (Shak)** and **cold-pressed mustard oil** [3, 5].',
              'বাঙালি রান্নার দুটি প্রাচীন স্তম্ভ আধুনিক পুষ্টিবিজ্ঞানের দৃষ্টিতেও অত্যন্ত অনন্য ও শক্তিশালী: **ঐতিহ্যবাহী বিভিন্ন ধরনের শাক** এবং **ঘানিভাঙা খাঁটি সরিষার তেল** [3, 5]। '
            ),
          ],
          bullets: [
            l(
              'The Power of Shak (Pui, Lal, Palong, Kochu, Dheki Shak): Traditional greens are categorized under the Non-Starchy Vegetable exchange list. 1 cup of cooked leafy greens (or 2 cups raw) equals 2 Vegetable Exchanges (10g Carbohydrate, 4g Protein, 0g Fat, ~50 kcal). They deliver massive dietary bulk and viscous soluble fiber with negligible caloric density. Furthermore, traditional Bangladeshi greens provide world-class concentrations of dietary nitrates (which lower blood pressure via endothelial nitric oxide), lutein/zeaxanthin for macular protection, and beta-carotene [3, 5].',
              'শাকের জাদু (পুঁই, লাল, পালং, কচু, ঢেঁকি শাক): ১ কাপ রান্না শাক = ২টি সবজি বিনিময় অংশ (১০ গ্রাম কার্ব, ৪ গ্রাম প্রোটিন, ৫০ ক্যালোরি)। শাকে কোনো ফ্যাট নেই এবং ক্যালোরি খুব কম। শাকে থাকা প্রচুর আঁশ পেট ভরিয়ে রাখে এবং এতে থাকা নাইট্রেট রক্তনালী প্রসারিত করে রক্তচাপ কমাতে সাহায্য করে [3, 5]। ',
            ),
            l(
              'Mustard Oil (The Optimal Omega-6 to Omega-3 Balance): In recent decades, urban South Asian households abandoned traditional cold-pressed mustard oil in favor of refined industrial seed oils (soybean, sunflower, corn oil). This shift was a metabolic disaster. Refined seed oils contain an inflammatory, pro-atherogenic Omega-6 (Linoleic Acid) to Omega-3 (Alpha-Linolenic Acid) ratio exceeding 15:1 or 20:1! In stark contrast, cold-pressed mustard oil possesses an extraordinary, near-perfect Omega-6 to Omega-3 ratio of approximately 1.2:1, alongside 60% cardioprotective Monounsaturated Fatty Acids (MUFA, oleic and erucic acid) and natural allyl isothiocyanate antioxidants [3]. 1 teaspoon (5 mL) of mustard oil = 1 Fat exchange (5g fat, 45 kcal).',
              'সরিষার তেলের বিজ্ঞান: সাম্প্রতিক দশকগুলোতে শহরবাসী খাঁটি সরিষার তেল ছেড়ে পরিশোধিত সয়াবিন বা পাম তেল খাওয়া শুরু করে মারাত্মক বিপদে পড়েছে। সয়াবিন তেলে প্রদাহ সৃষ্টিকারী ওমেগা-৬ ও ওমেগা-৩ এর অনুপাত ১৫:১ এর বেশি, যা রক্তনালীতে প্রদাহ বাড়ায়। পক্ষান্তরে খাঁটি সরিষার তেলে ওমেগা-৬ এবং ওমেগা-৩ এর অনুপাত প্রায় ১.২:১, যা সম্পূর্ণ প্রাকৃতিক ও প্রদাহরোধী এবং এতে ৬০% হার্টের জন্য উপকারি মনো-আনস্যাচুরেটেড ফ্যাট (MUFA) রয়েছে [3]। ১ চা চামচ সরিষার তেল = ১ অংশ ফ্যাট (৫ গ্রাম ফ্যাট, ৪৫ ক্যালোরি)।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-parboiling-biochemistry',
          heading: l(
            '1. Parboiling Hydrothermal Dynamics & Amylose Retrogradation Kinetics',
            '১. ধান সিদ্ধকরণের হাইড্রোথার্মাল গতিবিদ্যা এবং অ্যামাইলোজ রেট্রোগ্রেডেশন'
          ),
          paragraphs: [
            l(
              'The hydrothermal treatment of paddy represents an ancient food technology with profound modern metabolic implications [3, 4]. During parboiling, unhulled rough rice undergoes complete starch gelatinization followed by slow recrystallization.',
              'ধান ভাপে সিদ্ধ করার এই দেশীয় প্রযুক্তিটি আধুনিক পুষ্টিবিজ্ঞানের দৃষ্টিতেও অত্যন্ত চমকপ্রদ [3, 4]। সিদ্ধ করার সময় চালের ভেতরের শ্বেতসার প্রথমে পুরোপুরি গলে যায় এবং পরে ধীরে ধীরে জমাট বাঁধে।'
            ),
            l(
              'Under high steam pressure, water penetrates through the husk and pericarp, solubilizing thiamine pyrophosphate and nicotinic acid in the aleurone layer. Capillary suction drives these water-soluble micronutrients inward into the porous endosperm matrix, where they become physically trapped upon drying [3].',
              'উচ্চ বাষ্পের চাপে ধানের খোসার সব দ্রবণীয় ভিটামিন বি ও খনিজ চালের ভেতরের কোষে প্রবেশ করে এবং শুকানোর পর সেখানে স্থায়ীভাবে আটকে যায় [3]। '
            ),
            l(
              'Simultaneously, the high heat disrupts native crystalline amylopectin granules. As the rice cools, linear amylose chains align in parallel conformations, stabilized by dense intermolecular hydrogen bonds. This recrystallization forms **Type 3 Resistant Starch (RS3)**. In vitro kinetic digestion studies confirm that RS3 decreases the rate of alpha-amylase hydrolysis by 35% to 45% compared to non-parboiled atap rice [3, 4]. When ingested, parboiled rice generates a lower glucose peak and a significantly prolonged, flatter postprandial glycemic curve.',
              'একই সাথে চাল ঠান্ডা হওয়ার সময় তার অ্যামাইলোজ অণুগুলো হাইড্রোজেন বন্ধনে আবদ্ধ হয়ে অত্যন্ত শক্ত প্রতিরোধী শ্বেতসারে (RS3) রূপান্তরিত হয়। গবেষণায় প্রমাণিত হয়েছে যে এই শ্বেতসার সাধারণ আতপ চালের চেয়ে ৩৫% থেকে ৪৫% ধীরগতিতে হজম হয় [3, 4]। ফলে খাওয়ার পর রক্তে গ্লুকোজ হঠাৎ না বেড়ে অত্যন্ত ধীর ও স্থিতিশীলভাবে রক্তে প্রবেশ করে।'
            ),
          ],
        },
        {
          id: 'sec-bengali-fct-matrix',
          heading: l(
            '2. The South Asian Exchange Conversion Matrix (INFS Dhaka Food Composition Data)',
            '২. দক্ষিণ এশীয় খাদ্য বিনিময় রূপান্তর ম্যাট্রিক্স (ঢাকা বিশ্ববিদ্যালয়ের পুষ্টি গবেষণা মান)'
          ),
          paragraphs: [
            l(
              'To bridge the gap between abstract grams and practical Bengali kitchen utensils (kuri, bati, chamoch, muthi), the Institute of Nutrition and Food Science (INFS) at the University of Dhaka established standardized nutritional equivalencies [3]:',
              'গ্রামের হিসাবকে আমাদের দেশীয় বাটি ও চামচের মাপের সাথে মেলাতে ঢাকা বিশ্ববিদ্যালয়ের পুষ্টি ও খাদ্যবিজ্ঞান ইনস্টিটিউট (INFS) নিচের প্রমিত বিনিময় মান নির্ধারণ করেছে [3]:'
            ),
          ],
          bullets: [
            l(
              'Cooked Parboiled Rice (Siddha Bhaat): 1/3 cup (~75g to 80g wet weight, or 1/2 small domestic bati) = 1 Starch exchange (15g Carb, 3g Protein, 1g Fat, 80 kcal).',
              'রান্না সিদ্ধ চালের ভাত: ১/৩ কাপ (প্রায় ৭৫–৮০ গ্রাম, বা ছোট বাটির অর্ধেক বাটি) = ১ অংশ শ্বেতসার (১৫ গ্রাম কার্ব, ৩ গ্রাম প্রোটিন, ১ গ্রাম ফ্যাট, ৮০ ক্যালোরি)।',
            ),
            l(
              'Handmade Whole-Wheat Roti (Atta Ruti): 1 medium handmade flatbread made from 30g dry stone-ground whole wheat flour (approx. 6 inches diameter) = 1 Starch exchange (15g Carb, 3g Protein, 0.5g Fat, 80 kcal, 3g dietary fiber).',
              'হাতে তৈরি লাল আটার রুটি: ৩০ গ্রাম লাল আটা দিয়ে তৈরি ১টি মাঝারি রুটি (প্রায় ৬ ইঞ্চি ব্যাস) = ১ অংশ শ্বেতসার (১৫ গ্রাম কার্ব, ৩ গ্রাম প্রোটিন, ৮০ ক্যালোরি, ৩ গ্রাম আঁশ)।',
            ),
            l(
              'Cooked Red Lentils (Moshur Dal): 1/2 cup cooked thick dal (100g wet weight) = 1 Starch exchange + 1 Very Lean Meat exchange (15g Carb, 7g Protein, 0.5g Fat, 95 kcal).',
              'রান্না করা ঘন মসুর ডাল: ১/২ কাপ রান্না ডাল (১০০ গ্রাম) = ১ অংশ শ্বেতসার + ১ অংশ চর্বিহীন আমিষ (১৫ গ্রাম কার্ব, ৭ গ্রাম প্রোটিন, ৯৫ ক্যালোরি)।',
            ),
            l(
              'Cooked Rui / Katla Fish: 1 standard cross-cut piece (2 oz / ~60g edible portion) = 2 Lean Meat exchanges (0g Carb, 14g Protein, 4g Fat, 100 kcal).',
              'রান্না রুই বা কাতলা মাছ: ১টি মাঝারি পেটি বা গাদার টুকরো (২ আউন্স বা ৬০ গ্রাম) = ২ অংশ হালকা চর্বিযুক্ত আমিষ (১৪ গ্রাম প্রোটিন, ৪ গ্রাম ফ্যাট, ১০০ ক্যালোরি)।',
            ),
            l(
              'Cooked Leafy Greens (Shak): 1/2 cup cooked without excess oil = 1 Vegetable exchange (5g Carb, 2g Protein, 0g Fat, 25 kcal).',
              'রান্না করা শাক: ১/২ কাপ রান্না শাক (অতিরিক্ত তেল ছাড়া) = ১ অংশ সবজি (৫ গ্রাম কার্ব, ২ গ্রাম প্রোটিন, ২৫ ক্যালোরি)।',
            ),
            l(
              'Cold-Pressed Mustard Oil: 1 level teaspoon (5 mL) = 1 Fat exchange (0g Carb, 0g Protein, 5g Fat, 45 kcal).',
              'খাঁটি সরিষার তেল: ১ সমতল চা চামচ (৫ মিলি) = ১ অংশ ফ্যাট (৫ গ্রাম ফ্যাট, ৪৫ ক্যালোরি)।',
            ),
          ],
        },
        {
          id: 'sec-anti-nutrients-bengali',
          heading: l(
            '3. Anti-Nutritional Factors: Oxalate Raphides and Phytate Deconjugation',
            '৩. দেশীয় খাবারের অ্যান্টি-নিউট্রিয়েন্ট: ক্যালসিয়াম অক্সালেট ও ফাইটেট দূরীকরণ'
          ),
          paragraphs: [
            l(
              'Traditional South Asian plant staples contain defensive secondary metabolites that can impair mineral bioavailability or cause physical mucosal irritation if prepared improperly [3, 5]:',
              'আমাদের দেশীয় শাকসবজি ও ডালে কিছু প্রাকৃতিক উপাদান থাকে যা সঠিকভাবে রান্না না করলে খনিজের শোষণ ব্যাহত করতে পারে [3, 5]:'
            ),
          ],
          bullets: [
            l(
              'Calcium Oxalate Raphides in Taro (Kochu) & Spinach (Palong): Kochu greens and tuberous corms contain microscopic needle-shaped calcium oxalate monohydrate crystals known as raphides. When chewed raw or undercooked, these needle crystals pierce the oral and pharyngeal mucosa, releasing proteolytic enzymes that cause excruciating stinging and laryngeal edema. Boiling leafy greens and discarding the blanching water leaches out 30% to 50% of soluble oxalates into the water, while adding an organic acid (such as lemon juice, tamarind, or green mango) dissolves the raphides, completely neutralizing mucosal irritation and drastically lowering nephrolithiasis (kidney stone) risks [3, 5].',
              'কচু ও পালং শাকের অক্সালেট দূরীকরণ: কচু শাকে ক্যালসিয়াম অক্সালেটের সুঁচালো আণুবীক্ষণিক ক্রিস্টাল থাকে, যার কারণে কাঁচা বা কম সিদ্ধ করলে গলায় তীব্র চুলকানি হয়। শাক ভালো করে সিদ্ধ করে সেই পানি ফেলে দিলে ৩০% থেকে ৫০% অক্সালেট বেরিয়ে যায়। সাথে লেবুর রস বা সামান্য টক যোগ করলে ক্রিস্টালগুলো গলে যায় এবং কিডনিতে পাথর হওয়ার ঝুঁকি থাকে না [3, 5]। ',
            ),
            l(
              'Phytate Deconjugation in Lentils: Raw legumes contain inositol hexakisphosphate (phytic acid), which avidly binds dietary iron, zinc, and calcium, creating insoluble chelates that cannot be absorbed in the duodenum. Traditional Bengali culinary techniques—specifically overnight soaking of dal for 8 to 12 hours followed by pressure cooking—activates endogenous plant phytases. This enzymatically hydrolyzes phytic acid into free inositol, increasing elemental iron and zinc bioavailability by up to 200% [3].',
              'ডালে ফাইটেট দূরীকরণ: কাঁচা ডালে থাকা ফাইটিক অ্যাসিড আয়রন ও জিংককে আটকে শোষণ বন্ধ করে দেয়। কিন্তু ডাল রান্নার আগে ৮ থেকে ১২ ঘণ্টা পানিতে ভিজিয়ে রাখলে ডালের নিজস্ব এনজাইম ফাইটিক অ্যাসিড ভেঙে ফেলে, যার ফলে শরীর দ্বিগুণ আয়রন ও জিংক গ্রহণ করতে পারে [3]। ',
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-hepatic-dnl-cascade',
          heading: l(
            '1. Splanchnic Vasodilatation, Hyperinsulinemia & The Hepatic De Novo Lipogenesis Cascade',
            '১. অতিরিক্ত ভাতের বিপাকীয় পরিণতি: হেপাটিক ডি নোভো লাইপোজেনেসিস ও ফ্যাটি লিভার'
          ),
          paragraphs: [
            l(
              'Why does consuming a massive carbohydrate load (e.g., 2 to 3 cups of white rice = 100g to 135g glucose in a single sitting) cause devastating metabolic disease in South Asians, even in the absence of generalized obesity? The answer lies in the molecular biology of **Hepatic De Novo Lipogenesis (DNL)** [1, 2, 4].',
              'বাইরে থেকে দেখতে চিকন একজন বাঙালিও যদি এক বেলায় ২ থেকে ৩ কাপ সাদা ভাত (১০০ থেকে ১৩৫ গ্রাম চিনি) খান, তবে কেন তার মারাত্মক ফ্যাটি লিভার ও ডায়াবেটিস হয়? এর মূল কারণ হলো যকৃতের **ডি নোভো লাইপোজেনেসিস (De Novo Lipogenesis)** প্রক্রিয়া [1, 2, 4]। '
            ),
          ],
          bullets: [
            l(
              'The Splanchnic Glucose Surge: Following a heavy rice meal, hundreds of millimoles of glucose are absorbed across the jejunal enterocytes and travel directly through the portal vein into the liver. In a healthy, insulin-sensitive individual, skeletal muscle clears 80% of postprandial glucose via insulin-stimulated GLUT4 translocation. However, in South Asians with high visceral adiposity, skeletal muscle is already profoundly insulin-resistant due to intracellular diacylglycerol (DAG) and protein kinase C (PKC-theta) accumulation [1, 4].',
              'পোর্টাল শিরার গ্লুকোজ প্লাবন: খাওয়ার পর সব চিনি রক্তনালী দিয়ে সরাসরি লিভারে ঢোকে। সুস্থ মানুষের ক্ষেত্রে মাংসপেশি ৮০% চিনি টেনে নেয়। কিন্তু দক্ষিণ এশীয়দের মাংসপেশি আগে থেকেই ইনসুলিন-প্রতিরোধী থাকায় মাংসপেশি এই চিনি গ্রহণ করতে পারে না [1, 4]। ',
            ),
            l(
              'Hepatic Overflow via GLUT2: Denied entry into muscle, the massive glucose load is dumped into the liver through non-insulin-dependent GLUT2 transporters. Inside hepatocytes, high glucose flux activates two master lipogenic transcription factors: **ChREBP (Carbohydrate Response Element-Binding Protein)** and **SREBP-1c (Sterol Regulatory Element-Binding Protein 1c)** [4].',
              'যকৃতে শর্করার উপচে পড়া: মাংসপেশি না নেওয়ায় সব চিনি লিভারের ভেতর উপচে পড়ে। অতিরিক্ত গ্লুকোজ লিভারের বিশেষ জিনগুলোকে সক্রিয় করে তোলে [4]। ',
            ),
            l(
              'Enzymatic DNL Execution: ChREBP and SREBP-1c powerfully upregulate the entire enzymatic machinery of fatty acid synthesis: ATP-Citrate Lyase, Acetyl-CoA Carboxylase (ACC), and Fatty Acid Synthase (FAS). The excess glucose carbons are rapidly synthesized into **Palmitic Acid (16:0)**. The liver packages these new saturated fats into Very Low-Density Lipoproteins (VLDL), pumping them into the bloodstream and triggering the classic South Asian dyslipidemic triad: **Severe Hypertriglyceridemia, Low HDL-C, and Small Dense LDL (sdLDL)**. Excess triglycerides that cannot be exported are stored in hepatocytes as steatosis (Metabolic Dysfunction-Associated Steatohepatitis / MASLD) [1, 4].',
              'চর্বি তৈরির মহাযজ্ঞ: লিভার এই অতিরিক্ত চিনি দিয়ে নতুন সম্পৃক্ত চর্বি (পামিটিক অ্যাসিড) তৈরি করে এবং রক্তে ট্রাইগ্লিসারাইড হিসেবে ছেড়ে দেয়। এর ফলে রক্তে ট্রাইগ্লিসারাইড অনেক বেড়ে যায়, ভালো কোলেস্টেরল (HDL) কমে যায় এবং লিভারে চর্বি জমে মারাত্মক ফ্যাটি লিভার সৃষ্টি হয় [1, 4]। ',
            ),
          ],
        },
        {
          id: 'sec-south-asian-menu-blueprint',
          heading: l(
            '2. The Comprehensive 1,600 kcal South Asian Diabetic Exchange Blueprint',
            '২. দক্ষিণ এশীয় ডায়াবেটিস রোগীর ১,৬০০ কিলোক্যালোরির পূর্ণাঙ্গ খাদ্য রূপরেখা'
          ),
          paragraphs: [
            l(
              'The following comprehensive clinical blueprint demonstrates how a dietitian restructures a traditional, dangerously high-carbohydrate Bengali diet into a balanced, culturally respectful 1,600 kcal therapeutic exchange regimen [3, 4]:',
              'নিচের ক্লিনিক্যাল রূপরেখায় দেখানো হয়েছে কীভাবে একজন পুষ্টিবিদ অতিরিক্ত শর্করার অস্বাস্থ্যকর বাঙালি খাবারকে একটি চমৎকার, ভারসাম্যপূর্ণ ও সংস্কৃতিসম্মত ১,৬০০ ক্যালোরির ডায়েট চার্টে রূপান্তর করেন [3, 4]:'
            ),
          ],
          bullets: [
            l(
              'Macronutrient Prescription: 1,600 kcal total energy. 50% Carbohydrates (200g = 800 kcal), 20% Protein (80g = 320 kcal), 30% Fat (53g = 480 kcal).',
              'পুষ্টি ব্যবস্থাপত্র: ১,৬০০ কিলোক্যালোরি মোট শক্তি। ৫০% কার্বোহাইড্রেট (২০০ গ্রাম), ২০% প্রোটিন (৮০ গ্রাম), ৩০% ফ্যাট (৫৩ গ্রাম)।',
            ),
            l(
              'Breakfast (45g C, 18g P, 11g F = 350 kcal): 2 Starch exchanges (2 medium handmade whole-wheat roti = 30g C, 6g P), 1 Medium-Fat Meat exchange (1 whole boiled egg = 7g P, 5g F), 1 Vegetable exchange (1/2 cup cooked mixed vegetables/gourds = 5g C, 2g P), 1 Fruit exchange (1 small green apple or guava = 15g C), 1 Fat exchange (1 tsp oil used in vegetable cooking = 5g F).',
              'সকালের নাস্তা (৩৫০ ক্যালোরি): ২টি লাল আটার রুটি (২ অংশ শ্বেতসার), ১টি সিদ্ধ ডিম (১ অংশ মাঝারি আমিষ), ১/২ কাপ লাউ-সবজি (১ অংশ সবজি), ১টি ছোট পেয়ারা (১ অংশ ফল), রান্নার তেল ১ চা চামচ (১ অংশ ফ্যাট)।',
            ),
            l(
              'Mid-Morning Snack (15g C, 4g P = 75 kcal): 1 Fruit exchange (1 cup sliced papaya) + 1 cup unsweetened black tea with cinnamon.',
              'বেলা ১১টার নাস্তা (৭৫ ক্যালোরি): ১ বাটি পাকা পেঁপে (১ অংশ ফল) এবং দারুচিনি দেওয়া চিনিহীন লাল চা।',
            ),
            l(
              'Lunch (65g C, 28g P, 16g F = 515 kcal): 3 Starch exchanges (1 cup cooked parboiled brown/coarse rice = 45g C, 9g P), 1 Starch + 1 Very Lean Meat exchange (1/2 cup thick cooked Moshur dal = 15g C, 7g P), 2 Lean Meat exchanges (2 oz cooked Rui fish = 14g P, 6g F), 2 Vegetable exchanges (1 cup cooked Pui/Lal shak and cucumber salad = 10g C, 4g P), 2 Fat exchanges (2 tsp cold-pressed mustard oil in cooking = 10g F).',
              'দুপুরের খাবার (৫১৫ ক্যালোরি): ১ কাপ লাল সিদ্ধ চালের ভাত (৩ অংশ শ্বেতসার = ৪৫ গ্রাম কার্ব), ১/২ কাপ ঘন মসুর ডাল (১ অংশ শ্বেতসার + ১ অংশ চর্বিহীন আমিষ), ১ টুকরো মাঝারি রুই মাছ (২ অংশ চর্বিহীন আমিষ), ১ বাটি রান্না শাক ও শসার সালাদ (২ অংশ সবজি), রান্নার খাঁটি সরিষার তেল ২ চা চামচ (২ অংশ ফ্যাট)।',
            ),
            l(
              'Afternoon Snack (15g C, 8g P, 0g F = 90 kcal): 1 Skim Milk exchange (1 cup plain nonfat homemade sour yogurt / Tok Doi = 12g C, 8g P, flavored with roasted cumin and black salt).',
              'বিকেলের নাস্তা (৯০ ক্যালোরি): ১ কাপ ঘরে পাতা টক দই (১ অংশ ফ্যাটমুক্ত দুধ = ১২ গ্রাম কার্ব, ৮ গ্রাম প্রোটিন, সাথে ভাজা জিরার গুঁড়া ও বিট লবণ)।',
            ),
            l(
              'Dinner (60g C, 22g P, 16g F = 470 kcal): 2 Starch exchanges (2 medium handmade whole-wheat roti = 30g C, 6g P), 2 Lean Meat exchanges (2 oz skinless chicken curry cooked with ginger and garlic = 14g P, 6g F), 2 Vegetable exchanges (1 cup cauliflower, tomato, and spinach curry = 10g C, 4g P), 1 Fruit exchange (1/2 small banana or 1 orange = 15g C), 2 Fat exchanges (2 tsp mustard oil in cooking = 10g F).',
              'রাতের খাবার (৪৭০ ক্যালোরি): ২টি লাল আটার রুটি (২ অংশ শ্বেতসার), ২ আউন্স চামড়াহীন মুরগির মাংসের ঝোল (২ অংশ চর্বিহীন আমিষ), ১ বাটি ফুলকপি-পালং তরকারি (২ অংশ সবজি), ১টি ছোট কমলা (১ অংশ ফল), রান্নার তেল ২ চা চামচ (২ অংশ ফ্যাট)।',
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. The South Asian "Thin-Fat" Phenotype', '১. দক্ষিণ এশীয়দের বিশেষ "থিন-ফ্যাট" শরীর'), sectionId: 'sec-south-asian-phenotype' },
      { id: 'toc-2', label: l('2. Parboiled vs. Polished Rice', '২. সিদ্ধ চাল বনাম আতপ চালের বিজ্ঞান'), sectionId: 'sec-parboiled-vs-atap' },
      { id: 'toc-3', label: l('3. The Lentil (Dal) Biochemical Truth', '৩. ডালের আসল সত্য: আমিষ নাকি শ্বেতসার?'), sectionId: 'sec-dal-dichotomy' },
      { id: 'toc-4', label: l('4. Indigenous Bengali Fish Exchanges', '৪. দেশি মিঠা পানির মাছের খাদ্য বিনিময়'), sectionId: 'sec-bengali-fish-exchanges' },
      { id: 'toc-5', label: l('5. Shak & Cold-Pressed Mustard Oil', '৫. ঐতিহ্যবাহী শাকসবজি ও সরিষার তেল'), sectionId: 'sec-shak-and-mustard-oil' },
      { id: 'toc-6', label: l('6. Parboiling & Resistant Starch Dynamics', '৬. ধান সিদ্ধকরণ ও রেজিসট্যান্ট স্টার্চ'), sectionId: 'sec-parboiling-biochemistry' },
      { id: 'toc-7', label: l('7. INFS Bengali Exchange Conversion Matrix', '৭. দেশীয় খাদ্য বিনিময় রূপান্তর ছক'), sectionId: 'sec-bengali-fct-matrix' },
      { id: 'toc-8', label: l('8. Anti-Nutrients: Oxalates & Phytates', '৮. খাবারে অক্সালেট ও ফাইটেট দূরীকরণ'), sectionId: 'sec-anti-nutrients-bengali' },
      { id: 'toc-9', label: l('9. Hepatic De Novo Lipogenesis Cascade', '৯. অতিরিক্ত ভাতে ফ্যাটি লিভার ও ট্রাইগ্লিসারাইড'), sectionId: 'sec-hepatic-dnl-cascade' },
      { id: 'toc-10', label: l('10. 1,600 kcal South Asian Menu Blueprint', '১০. ১,৬০০ ক্যালোরির পূর্ণাঙ্গ খাদ্য রূপরেখা'), sectionId: 'sec-south-asian-menu-blueprint' },
    ],
    terms: [
      {
        term: l('Thin-Fat Asian Indian Phenotype', 'থিন-ফ্যাট এশিয়ান ইন্ডিয়ান ফেনোটাইপ'),
        definition: l(
          'A genetic and body-composition profile common in South Asians characterized by high visceral adiposity, hepatic steatosis, and profound insulin resistance at lower BMI cutoffs (overweight ≥ 23 kg/m²).',
          'দক্ষিণ এশীয়দের বিশেষ শারীরিক বৈশিষ্ট্য যেখানে কম ওজন বা স্বাভাবিক ওজনেও পেটের ভেতর ক্ষতিকর চর্বি ও ফ্যাটি লিভারের কারণে তীব্র ইনসুলিন রেজিস্ট্যান্স দেখা দেয়।'
        ),
      },
      {
        term: l('Parboiled Rice (Siddha Chal)', 'সিদ্ধ চাল (Siddha Chal)'),
        definition: l(
          'Paddy subjected to hydrothermal steaming prior to milling, which drives B vitamins into the endosperm and produces retrograded resistant starch (RS3) with a lower glycemic index.',
          'ধানকে খোসাসহ ভাপে সিদ্ধ করে তৈরি চাল, যার ফলে খোসার ভিটামিন বি চালের ভেতরে ঢুকে যায় এবং রান্নায় ধীরগতির প্রতিরোধী শ্বেতসার তৈরি হয়।'
        ),
      },
      {
        term: l('Dual-Exchange Dal Identity', 'ডালের দ্বৈত বিনিময় পরিচয়'),
        definition: l(
          'The clinical classification of 1/2 cup cooked thick dal as 1 Starch exchange (15g Carb) PLUS 1 Very Lean Meat exchange (7g Protein), not as pure protein.',
          'ডালকে শুধু আমিষ না ভেবে প্রতি ১/২ কাপ রান্না ঘন ডালকে ১ অংশ শ্বেতসার (১৫ গ্রাম কার্ব) এবং ১ অংশ চর্বিহীন আমিষ (৭ গ্রাম প্রোটিন) হিসেবে হিসাব করার নিয়ম।'
        ),
      },
      {
        term: l('De Novo Lipogenesis (DNL)', 'ডি নোভো লাইপোজেনেসিস (DNL)'),
        definition: l(
          'The biochemical pathway in hepatocytes where massive postprandial glucose surpluses are enzymatically converted into palmitic acid and packaged as VLDL triglycerides.',
          'যকৃতের জৈবরাসায়নিক পথ যেখানে অতিরিক্ত শর্করা সরাসরি ট্রাইগ্লিসারাইড চর্বিতে রূপান্তরিত হয়ে রক্তে চর্বি বাড়ায় এবং ফ্যাটি লিভার সৃষ্টি করে।'
        ),
      },
      {
        term: l('Calcium Oxalate Raphides', 'ক্যালসিয়াম অক্সালেট র্যাফাইড (Raphides)'),
        definition: l(
          'Microscopic needle-shaped crystals in taro (kochu) and spinach that cause oral mucosal irritation, dissolved by boiling, water discard, and culinary acid addition.',
          'কচু ও পালং শাকে থাকা সুঁচালো আণুবীক্ষণিক ক্রিস্টাল যা গলায় চুলকানি তৈরি করে; শাক সিদ্ধ করে পানি ফেলে দিলে ও লেবুর রস দিলে এটি নিষ্ক্রিয় হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Restructuring a Dangerous 2,400 kcal Bengali Diet into an Evidence-Based 1,600 kcal Exchange Plan',
          'বাস্তব কেস স্টাডি: অতিরিক্ত শর্করার ২,৪০০ ক্যালোরির খাবারকে ১,৬০০ ক্যালোরির বিজ্ঞানসম্মত খাদ্য তালিকায় রূপান্তর'
        ),
        steps: [
          l(
            'Step 1: Patient Assessment & Dietary Audit. A 49-year-old Bengali male presents with newly diagnosed Type 2 Diabetes, visceral obesity (Waist = 98 cm, BMI = 26.2 kg/m²), and severe mixed dyslipidemia (Fasting Triglycerides = 340 mg/dL, HDL = 32 mg/dL, HbA1c = 8.8%). 24-hour recall reveals an uncontrolled 2,400 kcal pattern: Lunch consists of 3 full cups of polished white rice (9 Starch = 135g C), 1 large bowl of dal (2 Starch + 2 Meat = 30g C, 14g P), fried eggplant in 3 tbsp oil, and 2 pieces of fried Rui fish. Single-meal carbohydrate load exceeds 165g.',
            'ধাপ ১: রোগীর তথ্য ও আগের খাবারের নিরীক্ষা: ৪৯ বছর বয়সী পুরুষ, টাইপ ২ ডায়াবেটিস ও পেটে চর্বি (কোমর ৯৮ সেমি, BMI ২৬.২)। ট্রাইগ্লিসারাইড ৩৪০ mg/dL (চরম বেশি), HDL মাত্র ৩২ mg/dL, HbA1c ৮.৮%। ২৪ ঘণ্টার খাবারের তথ্যে দেখা যায় তিনি দুপুরে ৩ কাপ সাদা ভাত (৯ অংশ শ্বেতসার = ১৩৫ গ্রাম কার্ব), ১ বড় বাটি ডাল (২ অংশ শ্বেতসার = ৩০ গ্রাম কার্ব), বেগুন ভাজা ও মাছ খেতেন। এক বেলাতেই শর্করার পরিমাণ ছিল ১৬৫ গ্রামের বেশি!'
          ),
          l(
            'Step 2: Formulate 1,600 kcal Prescription & Target Reductions. Energy target = 1,600 kcal. AMDR targets: 50% Carbohydrate (200g), 20% Protein (80g), 30% Fat (53g). Primary objective: Slash single-meal starch floods to stop hepatic De Novo Lipogenesis.',
            'ধাপ ২: নতুন ব্যবস্থাপত্র নির্ধারণ: শক্তি = ১,৬০০ কিলোক্যালোরি। পুষ্টি লক্ষ্যমাত্রা: ৫০% কার্বোহাইড্রেট (২০০ গ্রাম), ২০% প্রোটিন (৮০ গ্রাম), ৩০% ফ্যাট (৫৩ গ্রাম)। প্রধান লক্ষ্য: যকৃতে চর্বি তৈরি বন্ধ করতে এক বেলার অতিরিক্ত ভাত কমানো।'
          ),
          l(
            'Step 3: Restructure the Lunch Plate via Exchanges. Replace 3 cups of white rice with 1 cup of cooked parboiled coarse rice (Siddha chal) = 3 Starch exchanges (45g C, 9g P). Replace the giant bowl of dal with exactly 1/2 cup thick Moshur dal = 1 Starch exchange (15g C) + 1 Very Lean Meat exchange (7g P). Total lunch starch is slashed from 11 exchanges (165g C) down to 4 exchanges (60g C)—a 64% reduction in glucose flooding!',
            'ধাপ ৩: দুপুরের খাবার পুনর্গঠন: ৩ কাপ সাদা ভাতের বদলে ১ কাপ লাল সিদ্ধ চালের ভাত দিন = ৩ অংশ শ্বেতসার (৪৫ গ্রাম কার্ব)। বড় বাটি ডালের বদলে ঠিক ১/২ কাপ ঘন ডাল দিন = ১ অংশ শ্বেতসার (১৫ গ্রাম কার্ব) + ১ অংশ চর্বিহীন আমিষ (৭ গ্রাম প্রোটিন)। দুপুরের শর্করা ১৬৫ গ্রাম থেকে এক লাফে ৬০ গ্রামে নেমে এলো (৬৪% গ্লুকোজ হ্রাস!)।'
          ),
          l(
            'Step 4: Expand Satiety with Non-Starchy Vegetables & Protein. Prescribe 2 oz of stewed Rui fish (2 Lean Meat exchanges = 14g P, 6g F). Add 1 full cup of cooked Pui shak with pumpkin and cucumber salad = 2 Vegetable exchanges (10g C, 4g P). Cooking fat is strictly measured at 2 teaspoons of cold-pressed mustard oil = 2 Fat exchanges (10g F). The patient leaves the table completely full, yet insulin levels remain perfectly controlled.',
            'ধাপ ৪: শাকসবজি ও মাছ দিয়ে তৃপ্তি নিশ্চিত করা: ১ টুকরো রুই মাছের ঝোল (২ অংশ চর্বিহীন আমিষ = ১৪ গ্রাম প্রোটিন)। থালায় ১ কাপ রান্না পুঁই শাক ও শসার সালাদ (২ অংশ সবজি = ১০ গ্রাম কার্ব)। রান্নার তেল মেপে ঠিক ২ চা চামচ সরিষার তেল (২ অংশ ফ্যাট)। রোগী তৃপ্তিভরে খেয়ে উঠবেন অথচ রক্তে সুগার একটুও বাড়বে না।'
          ),
          l(
            'Step 5: Follow-Up Clinical Results at 12 Weeks. Following this culturally respectful 1,600 kcal Bengali exchange architecture for 12 weeks: Body weight declined by 5.4 kg, waist circumference shrank from 98 cm to 91 cm, fasting serum triglycerides dropped from 340 mg/dL to 158 mg/dL (eliminating hepatic DNL overproduction), and HbA1c plummeted from 8.8% to 6.6% without a single episode of hypoglycemia.',
            'ধাপ ৫: ১২ সপ্তাহ পরের ফলাফল: এই বিজ্ঞানসম্মত বাঙালি ডায়েট চার্ট ১২ সপ্তাহ মেনে চলার পর: রোগীর ওজন ৫.৪ কেজি কমল, কোমর ৯৮ থেকে ৯১ সেমিতে নেমে এলো, রক্তে ট্রাইগ্লিসারাইড ৩৪০ থেকে কমে ১৫৮ mg/dL হলো (ফ্যাটি লিভার দূর হলো) এবং HbA1c কোনো ওষুধ বাড়ানো ছাড়াই ৮.৮% থেকে কমে ৬.৬%-এ নেমে স্বাভাবিক হলো।'
          ),
        ],
        conclusion: l(
          'Adapting clinical food exchange mechanics to regional Bengali staples—parboiled coarse rice, portion-controlled dal, freshwater fish, and leafy shak—cures the South Asian carbohydrate crisis while honoring culinary joy and heritage.',
          'বাঙালির নিজস্ব খাবারের উপাদান—সিদ্ধ চাল, ডালের দ্বৈত পরিমাপ, দেশি মাছ এবং শাকসবজিকে বৈজ্ঞানিক বিনিময়ে রূপান্তর করে সাংস্কৃতিক আনন্দ অক্ষুণ্ণ রেখেই ডায়াবেটিস ও হৃদরোগের মহাবিপদ সফলভাবে দূর করা সম্ভব।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does consuming large mounds of white rice cause severe hypertriglyceridemia in South Asians?',
          'বাঙালিরা অতিরিক্ত সাদা ভাত খেলে রক্তে ট্রাইগ্লিসারাইড চর্বি কেন বিপজ্জনকভাবে বেড়ে যায়?'
        ),
        answer: l(
          'A large rice mound delivers 100g to 150g of rapidly absorbable glucose directly through the portal vein into the liver. Because South Asians have high visceral adiposity, their skeletal muscle is already insulin-resistant and cannot clear the glucose. The liver is forced to take up the glucose via GLUT2, activating ChREBP and SREBP-1c transcription factors. These enzymes convert the glucose surplus into palmitic acid via De Novo Lipogenesis (DNL), packaging the newly synthesized fat into VLDL particles that flood the bloodstream as high serum triglycerides.',
          'এক থালা ভাতে ১০০ থেকে ১৫০ গ্রাম দ্রুত শোষণশীল গ্লুকোজ সরাসরি যকৃতে প্রবেশ করে। পেটে চর্বি থাকার কারণে মাংসপেশি এই চিনি গ্রহণ করতে পারে না। ফলে যকৃত এই বাড়তি চিনিকে ডি নোভো লাইপোজেনেসিস (DNL) প্রক্রিয়ার মাধ্যমে সরাসরি পামিটিক অ্যাসিড চর্বিতে রূপান্তরিত করে এবং রক্তে VLDL ট্রাইগ্লিসারাইড হিসেবে ছেড়ে দেয়। ফলে রক্তে ট্রাইগ্লিসারাইড মারাত্মক বেড়ে যায় এবং লিভারে চর্বি জমে।'
        ),
      },
      {
        question: l(
          'Why is cold-pressed mustard oil scientifically superior to refined soybean or sunflower oil for South Asians?',
          'পরিশোধিত সয়াবিন বা সানফ্লাওয়ার তেলের চেয়ে খাঁটি সরিষার তেল কেন দক্ষিণ এশীয়দের জন্য অনেক বেশি স্বাস্থ্যকর?'
        ),
        answer: l(
          'Refined industrial seed oils contain an excessively high ratio of pro-inflammatory Omega-6 (linoleic acid) to anti-inflammatory Omega-3 (alpha-linolenic acid), frequently exceeding 15:1 to 20:1, which drives vascular endothelial inflammation and atherogenesis. In contrast, cold-pressed mustard oil possesses an optimal Omega-6 to Omega-3 ratio of approximately 1.2:1, along with 60% cardioprotective monounsaturated fatty acids (MUFA) and natural antioxidant isothiocyanates, protecting against coronary inflammation.',
          'পরিশোধিত সয়াবিন তেলে প্রদাহ সৃষ্টিকারী ওমেগা-৬ ফ্যাটি অ্যাসিডের পরিমাণ ওমেগা-৩ এর চেয়ে ১৫ থেকে ২০ গুণ বেশি থাকে, যা রক্তনালীতে প্রদাহ ও ব্লকেজ সৃষ্টি করে। পক্ষান্তরে খাঁটি সরিষার তেলে ওমেগা-৬ এবং ওমেগা-৩ এর অনুপাত প্রায় ১.২:১, যা সম্পূর্ণ ভারসাম্যপূর্ণ ও প্রদাহরোধী এবং এতে ৬০% হার্টের জন্য উপকারি মনো-আনস্যাচুরেটেড ফ্যাট (MUFA) রয়েছে।'
        ),
      },
    ],
  },
}

