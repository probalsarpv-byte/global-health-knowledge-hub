import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics11References: LessonReference[] = [
  {
    id: 'ref-wheeler-exchange-lists-1996',
    authors: 'Wheeler ML, Franz M, Barrier P, et al.',
    title: 'Macronutrient and Energy Database for the 1995 Exchange Lists for Meal Planning',
    organization: 'Journal of the American Dietetic Association',
    year: 1996,
    url: 'https://www.sciencedirect.com/science/article/pii/S000282239600298X',
    doi: '10.1016/S0002-8223(96)00298-X',
  },
  {
    id: 'ref-and-ada-choose-foods-2019',
    authors: 'American Diabetes Association and Academy of Nutrition and Dietetics',
    title: 'Choose Your Foods: Food Lists for Diabetes',
    organization: 'Academy of Nutrition and Dietetics',
    year: 2019,
    url: 'https://www.eatrightstore.org/product-type/pocket-guides/choose-your-foods-food-lists-for-diabetes',
  },
  {
    id: 'ref-franz-krause-mnt-2017',
    authors: 'Franz MJ',
    title: 'Medical Nutrition Therapy for Diabetes Mellitus and Hypoglycemia of Nondiabetic Origin',
    organization: 'Krause’s Food & the Nutrition Care Process (14th Edition)',
    year: 2017,
    url: 'https://www.elsevier.com/books/krauses-food-and-the-nutrition-care-process/9780323340755',
  },
  {
    id: 'ref-evert-ada-consensus-2019',
    authors: 'Evert AB, Dennison M, Gardner CD, et al.',
    title: 'Nutrition Therapy for Adults With Diabetes or Prediabetes: A Consensus Report',
    organization: 'Diabetes Care',
    year: 2019,
    url: 'https://diabetesjournals.org/care/article/42/5/731/40480/Nutrition-Therapy-for-Adults-With-Diabetes-or',
    doi: '10.2337/dci19-0014',
  },
  {
    id: 'ref-hall-macronutrient-adlib-2021',
    authors: 'Hall KD, Guo J, Courville AB, et al.',
    title: 'Effect of a Plant-Based, Low-Fat Diet Versus an Animal-Based, Ketogenic Diet on ad Libitum Energy Intake',
    organization: 'Nature Medicine',
    year: 2021,
    url: 'https://www.nature.com/articles/s41591-020-01209-1',
    doi: '10.1038/s41591-020-01209-1',
  },
]

export const dietetics11FoodExchangesLesson: LessonTopic = {
  id: 'topic.dietetics.food-exchange-systems',
  slug: 'standard-food-exchange-system-mechanics',
  title: l(
    '11 · Standard Food Exchange Systems: Macronutrient Portioning Mechanics',
    '১১ · প্রমিত খাদ্য বিনিময় ব্যবস্থা: ম্যাক্রোনিউট্রিয়েন্ট অংশের পুষ্টিবিজ্ঞান'
  ),
  summary: l(
    'The quantitative architecture of standardized food exchange systems: mastering the 6 core exchange categories (Starches, Meats across 4 fat tiers, Non-Starchy Vegetables, Fruits, Milks, and Fats), executing the 6-step menu translation algorithm, and converting mathematical energy and macronutrient prescriptions into modular, tangible patient meal plans.',
    'প্রমিত খাদ্য বিনিময় ব্যবস্থার গাণিতিক নকশা: ৬টি প্রধান বিনিময় বিভাগ (শ্বেতসার, ৪ স্তরের চর্বিযুক্ত মাংস ও আমিষ, শ্বেতসারহীন সবজি, ফল, দুধ এবং চর্বি/তেল) এর নিখুঁত ব্যবহার, ৬ ধাপের মেনু রূপান্তর অ্যালগরিদম এবং গাণিতিক ক্যালোরি ও ম্যাক্রোনিউট্রিয়েন্ট প্রেসক্রিপশনকে রোগীর ব্যবহারিক ও বৈচিত্র্যময় খাবার থালায় রূপান্তরের কৌশল।'
  ),
  subject: 'dietetics',
  version: 1,
  updatedAt: '2026-11-04',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-04',
  prerequisiteIds: ['topic.dietetics.macronutrient-distribution'],
  relatedTopicIds: ['topic.dietetics.macronutrient-distribution', 'topic.dietetics.protein-requirements'],
  objectives: [
    l(
      'Explain the foundational philosophy of the Food Exchange System and the physiological principle of iso-macronutrient substitution.',
      'খাদ্য বিনিময় ব্যবস্থার মৌলিক দর্শন এবং সম-ম্যাক্রোনিউট্রিয়েন্ট প্রতিস্থাপনের শারীরবৃত্তীয় মূলনীতি ব্যাখ্যা করা।'
    ),
    l(
      'Memorize and apply the precise carbohydrate, protein, fat, and energy yields across the 6 standardized exchange lists.',
      '৬টি প্রমিত খাদ্য বিনিময় তালিকার প্রতি অংশের সুনির্দিষ্ট কার্বোহাইড্রেট, প্রোটিন, ফ্যাট ও ক্যালোরির মান মুখস্থ ও নিখুঁতভাবে প্রয়োগ করা।'
    ),
    l(
      'Differentiate the 4 clinical fat categories of meat and protein substitutes (Very Lean, Lean, Medium-Fat, and High-Fat) for cardiovascular risk reduction.',
      'হৃদরোগের ঝুঁকি কমাতে মাংস ও প্রোটিন বিভাগের ৪টি চর্বি স্তর (চর্বিহীন, হালকা চর্বি, মাঝারি চর্বি এবং উচ্চ চর্বি) সঠিকভাবে পার্থক্য করা।'
    ),
    l(
      'Execute the systematic 6-step clinical meal planning algorithm to translate any daily energy and macronutrient prescription into exact exchange servings.',
      'যেকোনো দৈনিক ক্যালোরি ও পুষ্টি ব্যবস্থাপত্রকে সুনির্দিষ্ট খাদ্য অংশে রূপান্তর করতে ৬ ধাপের ক্লিনিক্যাল মিল প্ল্যানিং অ্যালগরিদম পরিচালনা করা।'
    ),
    l(
      'Distribute calculated food exchanges across meals and snacks to stabilize circadian postprandial glycemic excursions and prevent hypoglycemic troughs.',
      'রক্তে গ্লুকোজের ওঠানামা নিয়ন্ত্রণ এবং হঠাৎ সুগার নেমে যাওয়া রোধ করতে সারাদিনের বিভিন্ন খাবারে বিনিময় অংশগুলো বৈজ্ঞানিকভাবে বণ্টন করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A clinical modular matrix showing how a daily nutrient prescription translates into food exchanges: A 1,800 kcal target (225g Carb, 90g Protein, 60g Fat) breaks down systematically: 2 Skim Milk exchanges (24g C, 16g P), 4 Vegetable exchanges (20g C, 8g P), 3 Fruit exchanges (45g C), 9 Starch exchanges (135g C, 27g P), 5 Lean Meat exchanges (35g P, 15g F), and 7 Fat exchanges (35g F), perfectly balancing all macronutrient targets.',
      'একটি ক্লিনিক্যাল মডুলার ছক যা দেখায় কীভাবে একটি পুষ্টি ব্যবস্থাপত্র খাদ্য অংশে রূপান্তরিত হয়: ১,৮০০ কিলোক্যালোরির লক্ষ্যমাত্রা (২২৫ গ্রাম কার্বোহাইড্রেট, ৯০ গ্রাম প্রোটিন, ৬০ গ্রাম ফ্যাট) ধাপে ধাপে বিন্যস্ত: ২ অংশ ফ্যাটমুক্ত দুধ (২৪ গ্রাম কার্ব, ১৬ গ্রাম প্রোটিন), ৪ অংশ সবজি (২০ গ্রাম কার্ব, ৮ গ্রাম প্রোটিন), ৩ অংশ ফল (৪৫ গ্রাম কার্ব), ৯ অংশ শ্বেতসার (১৩৫ গ্রাম কার্ব, ২৭ গ্রাম প্রোটিন), ৫ অংশ চর্বিহীন মাংস (৩৫ গ্রাম প্রোটিন, ১৫ গ্রাম ফ্যাট), এবং ৭ অংশ তেল/চর্বি (৩৫ গ্রাম ফ্যাট)।'
    ),
    steps: [
      l(
        'Step 1: Determine Baseline Prescription. Lock in daily Total Energy Expenditure (TEE) and AMDR grams for Carbohydrates, Proteins, and Fats.',
        'ধাপ ১: ব্যবস্থাপত্র নির্ধারণ: দৈনিক মোট ক্যালোরি এবং কার্বোহাইড্রেট, প্রোটিন ও ফ্যাটের নির্দিষ্ট গ্রাম লক্ষ্যমাত্রা লক করুন।'
      ),
      l(
        'Step 2: Allocate Fixed Food Categories First. Assign Milk and Non-Starchy Vegetable exchanges based on patient lifestyle, calcium needs, and satiety goals.',
        'ধাপ ২: স্থায়ী বিভাগ আগে বরাদ্দ: রোগীর রুচি, ক্যালসিয়ামের চাহিদা ও তৃপ্তির ওপর ভিত্তি করে দুধ এবং শ্বেতসারহীন সবজির অংশ আগে নির্ধারণ করুন।'
      ),
      l(
        'Step 3: Calculate Remaining Carbohydrates. Subtract milk and vegetable carbs from total carb budget; distribute remaining carbs across Fruits and Starches.',
        'ধাপ ৩: বাকি শর্করার হিসাব: মোট শর্করা থেকে দুধ ও সবজির শর্করা বাদ দিয়ে বাকি অংশ ফল এবং শ্বেতসার (রুটি/ভাত/ওটস) এর মধ্যে ভাগ করুন।'
      ),
      l(
        'Step 4: Balance Protein Deficit with Meat Exchanges. Subtract protein provided by milk, vegetables, and starches from target protein; divide remainder by 7g to get Meat exchanges.',
        'ধাপ ৪: প্রোটিনের ঘাটতি পূরণ: দুধ, সবজি ও শ্বেতসার থেকে প্রাপ্ত প্রোটিন বাদ দিয়ে বাকি অংশকে ৭ দিয়ে ভাগ করে মাংস/আমিষের অংশ বের করুন।'
      ),
      l(
        'Step 5: Fill Fat Budget. Sum all hidden fats from meats and milk; allocate remaining fat grams as pure Fat exchanges (5g fat per exchange).',
        'ধাপ ৫: ফ্যাটের বাজেট পূরণ: দুধ ও মাংসের অদৃশ্য চর্বি যোগ করে বাকি ফ্যাটকে ৫ দিয়ে ভাগ করে তেল/ঘিয়ের অংশ নির্ধারণ করুন।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A clinical dietitian is formulating an 1,800 kcal diabetic meal plan for a 54-year-old male with Type 2 Diabetes and stage 2 hypertension. The macronutrient prescription targets 50% Carbohydrates (225 g), 20% Protein (90 g), and 30% Fat (60 g). The dietitian has already allocated: 2 Skim Milk exchanges (24g C, 16g P, 0g F), 4 Vegetable exchanges (20g C, 8g P, 0g F), and 3 Fruit exchanges (45g C, 0g P, 0g F). How many Starch exchanges and how many Lean Meat exchanges must be prescribed to satisfy the remaining carbohydrate and protein targets?',
      'টাইপ ২ ডায়াবেটিস এবং উচ্চ রক্তচাপে আক্রান্ত ৫৪ বছর বয়সী এক ব্যক্তির জন্য পুষ্টিবিদ ১,৮০০ কিলোক্যালোরির একটি ডায়েট চার্ট তৈরি করছেন। লক্ষ্যমাত্রা: ৫০% কার্বোহাইড্রেট (২২৫ গ্রাম), ২০% প্রোটিন (৯০ গ্রাম) এবং ৩০% ফ্যাট (৬০ গ্রাম)। পুষ্টিবিদ ইতোমধ্যে বরাদ্দ করেছেন: ২ অংশ ফ্যাটমুক্ত দুধ (২৪ গ্রাম কার্ব, ১৬ গ্রাম প্রোটিন), ৪ অংশ সবজি (২০ গ্রাম কার্ব, ৮ গ্রাম প্রোটিন) এবং ৩ অংশ ফল (৪৫ গ্রাম কার্ব)। অবশিষ্ট কার্বোহাইড্রেট ও প্রোটিনের লক্ষ্যমাত্রা পূরণ করতে রোগীকে ঠিক কত অংশ শ্বেতসার (Starch) এবং কত অংশ চর্বিহীন মাংস/আমিষ (Lean Meat) দিতে হবে?'
    ),
    options: [
      l(
        '9 Starch exchanges and 5.5 to 6 Lean Meat exchanges.',
        '৯ অংশ শ্বেতসার এবং ৫.৫ থেকে ৬ অংশ চর্বিহীন মাংস।'
      ),
      l(
        '15 Starch exchanges and 12 Lean Meat exchanges.',
        '১৫ অংশ শ্বেতসার এবং ১২ অংশ চর্বিহীন মাংস।'
      ),
      l(
        '4 Starch exchanges and 2 High-Fat Meat exchanges.',
        '৪ অংশ শ্বেতসার এবং ২ অংশ উচ্চ চর্বিযুক্ত মাংস।'
      ),
      l(
        'Zero Starches, replacing all remaining carbohydrates with pure butter and olive oil.',
        'কোনো শ্বেতসার দেওয়া যাবে না, সব শর্করা মাখন ও তেল দিয়ে পূরণ করতে হবে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Mathematical derivation: 1) Carbohydrates: Total target = 225g. Allocated so far = Milk (24g) + Vegetables (20g) + Fruit (45g) = 89g. Remaining carb deficit = 225g – 89g = 136g. Each Starch exchange provides 15g carbs. 136g / 15g = 9.07 ≈ 9 Starch exchanges (providing 135g carbs and 27g protein). 2) Protein: Total target = 90g. Protein accounted for so far = Milk (16g) + Vegetables (8g) + Starches (27g) = 51g. Remaining protein deficit = 90g – 51g = 39g. Each Lean Meat exchange provides 7g protein. 39g / 7g = 5.57 ≈ 5.5 to 6 Meat exchanges. This perfectly completes the macronutrient prescription.',
      'গাণিতিক বিশ্লেষণ: ১) কার্বোহাইড্রেট: মোট লক্ষ্যমাত্রা = ২২৫ গ্রাম। ইতোমধ্যে বরাদ্দ = দুধ (২৪ গ্রাম) + সবজি (২০ গ্রাম) + ফল (৪৫ গ্রাম) = ৮৯ গ্রাম। বাকি ঘাটতি = ২২৫ – ৮৯ = ১৩৬ গ্রাম। প্রতি অংশ শ্বেতসারে থাকে ১৫ গ্রাম কার্ব। সুতরাং ১৩৬ / ১৫ = ৯.০৭ ≈ ৯ অংশ শ্বেতসার (যা দেবে ১৩৫ গ্রাম কার্ব এবং ২৭ গ্রাম প্রোটিন)। ২) প্রোটিন: মোট লক্ষ্যমাত্রা = ৯০ গ্রাম। এখন পর্যন্ত প্রোটিন = দুধ (১৬ গ্রাম) + সবজি (৮ গ্রাম) + শ্বেতসার (২৭ গ্রাম) = ৫১ গ্রাম। বাকি প্রোটিন ঘাটতি = ৯০ – ৫১ = ৩৯ গ্রাম। প্রতি অংশ চর্বিহীন মাংসে থাকে ৭ গ্রাম প্রোটিন। সুতরাং ৩৯ / ৭ = ৫.৫৭ ≈ ৫.৫ থেকে ৬ অংশ মাংস। এটি নিখুঁতভাবে পুষ্টি লক্ষ্য পূরণ করে।'
    ),
  },
  evidenceBySection: {
    'sec-exchange-philosophy': ['ref-wheeler-exchange-lists-1996', 'ref-and-ada-choose-foods-2019'],
    'sec-six-core-groups': ['ref-wheeler-exchange-lists-1996', 'ref-and-ada-choose-foods-2019'],
    'sec-meat-fat-tiers': ['ref-wheeler-exchange-lists-1996', 'ref-franz-krause-mnt-2017'],
    'sec-menu-algorithm': ['ref-franz-krause-mnt-2017', 'ref-evert-ada-consensus-2019'],
    'sec-portion-precision': ['ref-and-ada-choose-foods-2019', 'ref-wheeler-exchange-lists-1996'],
    'sec-glycemic-distribution': ['ref-evert-ada-consensus-2019', 'ref-hall-macronutrient-adlib-2021'],
    'sec-clinical-pitfalls': ['ref-franz-krause-mnt-2017', 'ref-evert-ada-consensus-2019'],
  },
  references: dietetics11References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-exchange-philosophy',
          heading: l(
            '1. The Philosophy of Food Exchanges: Freedom from Weighing Every Bite',
            '১. খাদ্য বিনিময়ের দর্শন: প্রতি গ্রাস মেপে খাওয়ার বন্দিদশা থেকে মুক্তি'
          ),
          paragraphs: [
            l(
              'Imagine being diagnosed with diabetes or severe cardiovascular disease and being told by your clinician that you must consume exactly 225 grams of carbohydrates, 90 grams of protein, and 60 grams of fat every single day [1, 2]. How could any human being manage this in the real world? Must you carry a precision electronic jewelers scale into restaurants, dinner parties, and office cafeterias, weighing every forkful of rice, slice of bread, and piece of chicken?',
              'কল্পনা করুন, কোনো ব্যক্তির ডায়াবেটিস বা হৃদরোগ ধরা পড়ার পর চিকিৎসক তাকে বললেন প্রতিদিন মেপে ঠিক ২২৫ গ্রাম শর্করা, ৯০ গ্রাম আমিষ এবং ৬০ গ্রাম চর্বি খেতে হবে [1, 2]। বাস্তব জীবনে কোনো সাধারণ মানুষের পক্ষে কি প্রতি বেলা এভাবে মেপে খাওয়া সম্ভব? তাকে কি রেস্তোরাঁয় বা দাওয়াতে গিয়ে পকেট থেকে ডিজিটাল স্কেল বের করে প্রতি লোকমা ভাত, রুটি আর মাংসের টুকরো ওজন করতে হবে?'
            ),
            l(
              'The answer is an emphatic no. In 1950, a visionary joint committee of the American Dietetic Association (now the Academy of Nutrition and Dietetics), the American Diabetes Association (ADA), and the United States Public Health Service developed the **Food Exchange System** [1, 2]. It is one of the most brilliant practical inventions in modern clinical dietetics.',
              'বাস্তবে এটি একেবারেই অসম্ভব। আর এই সমস্যার সমাধান করতেই ১৯৫০ সালে আমেরিকান ডায়েটেটিক অ্যাসোসিয়েশন এবং আমেরিকান ডায়াবেটিস অ্যাসোসিয়েশন সম্মিলিতভাবে উদ্ভাবন করে **খাদ্য বিনিময় ব্যবস্থা (Food Exchange System)** [1, 2]। এটি আধুনিক ব্যবহারিক পুষ্টিবিজ্ঞানের অন্যতম সেরা উদ্ভাবন।'
            ),
            l(
              'The core philosophy of the exchange system is **iso-macronutrient substitution** [2]: foods are grouped into specific functional categories where any food item on a list can be freely "exchanged" or swapped for any other food on that same list. A patient does not need to calculate grams of molecules; they simply know that 1 slice of whole-wheat bread equals 1/3 cup of cooked rice, which equals 1/2 cup of cooked oatmeal, which equals 1 small boiled potato. Each of these items provides roughly 15 grams of carbohydrate and 80 calories. The patient gains lifelong nutritional freedom while preserving exact metabolic control.',
              'এই পদ্ধতির মূল দর্শন হলো **সম-পুষ্টি প্রতিস্থাপন (Iso-macronutrient substitution)** [2]: খাবারগুলোকে এমন কয়েকটি দলে ভাগ করা হয় যার প্রতিটির পুষ্টিগুণ প্রায় হুবহু এক। ফলে তালিকার একটি খাবারের বদলে অন্য যেকোনো খাবার চোখ বন্ধ করে অদল-বদল বা বিনিময় করা যায়। রোগীকে জটিল গ্রাম মনে রাখতে হয় না; তিনি কেবল জানেন যে ১ টুকরো পাউরুটি = ১/৩ কাপ রান্না ভাত = ১/২ কাপ রান্না ওটস = ১টি ছোট সিদ্ধ আলু। এদের প্রতিটিতে রয়েছে ঠিক ১৫ গ্রাম শর্করা এবং ৮০ ক্যালোরি। এর ফলে রোগী খাদ্যের বৈচিত্র্য উপভোগ করতে পারেন অথচ রক্তের গ্লুকোজ থাকে পুরোপুরি নিয়ন্ত্রণে।'
            ),
          ],
        },
        {
          id: 'sec-six-core-groups',
          heading: l(
            '2. The 6 Core Food Exchange Groups and Their Standard Nutrient Yields',
            '২. প্রমিত খাদ্য বিনিময়ের ৬টি প্রধান বিভাগ এবং তাদের পুষ্টিমান'
          ),
          paragraphs: [
            l(
              'To master food exchanges, every student of clinical nutrition and every patient must learn the standard nutrient fingerprints of the **6 foundational food lists** [1, 2]. These values represent the averaged macronutrient profile of standard portion sizes across thousands of analyzed foods.',
              'খাদ্য বিনিময় ব্যবস্থার পূর্ণ সুবিধা নিতে হলে পুষ্টিবিজ্ঞানের প্রতিটি শিক্ষার্থী ও রোগীকে **৬টি প্রধান খাদ্য তালিকার** নির্দিষ্ট পুষ্টিমান আত্মস্থ করতে হয় [1, 2]। গবেষণাগারে হাজার হাজার খাবারের পুষ্টি বিশ্লেষণ করে এই প্রমিত গড় মানগুলো নির্ধারণ করা হয়েছে।'
            ),
          ],
          bullets: [
            l(
              '1. Starch / Bread List: 1 serving = 15g Carbohydrate, 3g Protein, 1g Fat, and 80 kcal. Examples: 1 slice of bread, 1/3 cup of cooked rice or pasta, 1/2 cup of cooked beans, lentils, or peas, 1/2 cup of corn or mashed potatoes, 3/4 cup of dry whole-grain cereal.',
              '১. শ্বেতসার / রুটি তালিকা: ১ অংশ = ১৫ গ্রাম কার্বোহাইড্রেট, ৩ গ্রাম প্রোটিন, ১ গ্রাম ফ্যাট এবং ৮০ কিলোক্যালোরি। উদাহরণ: ১ টুকরো পাউরুটি, ১/৩ কাপ রান্না ভাত বা পাস্তা, ১/২ কাপ ডাল বা মটরশুঁটি, ১/২ কাপ সিদ্ধ আলু বা ভুট্টা।'
            ),
            l(
              '2. Meat and Meat Substitute List (per 1 ounce / 28g cooked weight): 0g Carbohydrate, 7g Protein, with fat varying by tier (0g to 8g Fat), ranging from 35 to 100 kcal. Examples: 1 oz skinless chicken breast, 1 oz fish fillet, 1 large egg, 1 oz lean beef, 1 oz cheddar cheese.',
              '২. মাংস ও আমিষ তালিকা (প্রতি ১ আউন্স / ২৮ গ্রাম রান্না মাংস): ০ গ্রাম কার্বোহাইড্রেট, ৭ গ্রাম প্রোটিন, এবং চর্বির স্তরভেদে ০ থেকে ৮ গ্রাম ফ্যাট (৩৫ থেকে ১০০ কিলোক্যালোরি)। উদাহরণ: ১ আউন্স চামড়াহীন মুরগির মাংস, ১ আউন্স মাছ, ১টি ডিম, ১ আউন্স পনির।'
            ),
            l(
              '3. Non-Starchy Vegetable List: 1 serving (1/2 cup cooked or 1 cup raw) = 5g Carbohydrate, 2g Protein, 0g Fat, and 25 kcal. Examples: Spinach, broccoli, cauliflower, carrots, green beans, tomatoes, cucumbers, bell peppers, cabbage.',
              '৩. শ্বেতসারহীন সবজি তালিকা: ১ অংশ (১/২ কাপ রান্না বা ১ কাপ কাঁচা) = ৫ গ্রাম কার্বোহাইড্রেট, ২ গ্রাম প্রোটিন, ০ গ্রাম ফ্যাট এবং ২৫ কিলোক্যালোরি। উদাহরণ: পালং শাক, ফুলকপি, ব্রকলি, গাজর, শসা, টমেটো, বাঁধাকপি।'
            ),
            l(
              '4. Fruit List: 1 serving = 15g Carbohydrate, 0g Protein, 0g Fat, and 60 kcal. Examples: 1 small fresh apple or orange (tennis-ball size), 1/2 cup of sliced fresh fruit or berries, 1/2 small banana, 1/4 cup of dried raisins, 1/2 cup of 100% unsweetened fruit juice.',
              '৪. ফল তালিকা: ১ অংশ = ১৫ গ্রাম কার্বোহাইড্রেট, ০ গ্রাম প্রোটিন, ০ গ্রাম ফ্যাট এবং ৬০ কিলোক্যালোরি। উদাহরণ: ১টি ছোট আপেল বা কমলা (টেনিস বলের সাইজ), ১/২ কাপ কাটা ফল বা বেরি, ১/২টি ছোট কলা, ১/৪ কাপ কিশমিশ।'
            ),
            l(
              '5. Milk and Dairy List (1 cup / 240 mL): 12g Carbohydrate, 8g Protein, with fat dictated by fat classification (Fat-Free/Skim = 0–3g Fat, 100 kcal; Reduced-Fat 2% = 5g Fat, 120 kcal; Whole Milk = 8g Fat, 160 kcal). Examples: Cow’s milk, plain yogurt, fortified unsweetened soy milk.',
              '৫. দুধ ও দুগ্ধজাত তালিকা (১ কাপ / ২৪০ মিলি): ১২ গ্রাম কার্বোহাইড্রেট, ৮ গ্রাম প্রোটিন, এবং ফ্যাটভেদে চর্বির তারতম্য (ফ্যাটমুক্ত দুধ = ০–৩ গ্রাম ফ্যাট, ১০০ ক্যালোরি; ২% ফ্যাটযুক্ত দুধ = ৫ গ্রাম ফ্যাট, ১২০ ক্যালোরি; পূর্ণ ননীযুক্ত দুধ = ৮ গ্রাম ফ্যাট, ১৬০ ক্যালোরি)।'
            ),
            l(
              '6. Fat and Oil List: 1 serving (1 teaspoon / 5g) = 0g Carbohydrate, 0g Protein, 5g Fat, and 45 kcal. Examples: 1 teaspoon of olive, canola, or mustard oil, 1 teaspoon of butter or ghee, 1 tablespoon of regular salad dressing, 1/8 of a medium avocado, 6 whole almonds or cashews.',
              '৬. তেল ও চর্বি তালিকা: ১ অংশ (১ চা চামচ / ৫ গ্রাম) = ০ গ্রাম কার্বোহাইড্রেট, ০ গ্রাম প্রোটিন, ৫ গ্রাম ফ্যাট এবং ৪৫ কিলোক্যালোরি। উদাহরণ: ১ চা চামচ জলপাই, সরিষা বা সয়াবিন তেল, ১ চা চামচ মাখন বা ঘি, ১ টেবিল চামচ সালাদ ড্রেসিং, ১/৮ অংশ অ্যাভোকাডো, ৬টি কাঠবাদাম।'
            ),
          ],
        },
        {
          id: 'sec-meat-fat-tiers',
          heading: l(
            '3. The 4 Meat Fat Tiers: Navigating Saturated Fat and Atherosclerosis',
            '৩. আমিষের ৪টি চর্বি স্তর: সম্পৃক্ত চর্বি ও রক্তনালীর ব্লকেজ প্রতিরোধের কৌশল'
          ),
          paragraphs: [
            l(
              'In clinical dietetics, not all protein foods are created equal [1, 3]. While every single ounce of meat or meat substitute contains exactly 7 grams of pure protein, the accompanying fat content varies dramatically from 0 grams up to 8 grams per ounce. This structural reality creates a massive 3-fold divergence in calorie density and cardiovascular atherogenicity.',
              'ক্লিনিক্যাল ডায়েটেটিক্সে সব প্রোটিন জাতীয় খাবার এক নয় [1, 3]। যদিও প্রতি ১ আউন্স মাংসে ঠিক ৭ গ্রাম বিশুদ্ধ প্রোটিন থাকে, কিন্তু তার সাথে মিশে থাকা চর্বির পরিমাণ ০ গ্রাম থেকে ৮ গ্রাম পর্যন্ত হতে পারে। এর ফলে একই ওজনের মাংসে ক্যালোরির পরিমাণ প্রায় তিন গুণ বেড়ে যেতে পারে এবং রক্তনালীতে চর্বি জমার ঝুঁকি তৈরি হয়।'
            ),
          ],
          bullets: [
            l(
              'Very Lean Meat (0 to 1g Fat, 35 kcal per ounce): Skinless chicken or turkey white breast meat, egg whites (2 large whites = 1 oz), nonfat cottage cheese (1/4 cup), water-packed canned tuna, wild cod or haddock. Ideal for aggressive lipid lowering and renal diets.',
              'চর্বিহীন মাংস (০ থেকে ১ গ্রাম ফ্যাট, ৩৫ ক্যালোরি/আউন্স): চামড়াহীন মুরগির বুকের মাংস, ডিমের সাদা অংশ (২টি বড় ডিমের সাদা অংশ = ১ আউন্স), ফ্যাটমুক্ত ছানা (১/৪ কাপ), পানিতে রাখা টুনা মাছ। হৃদরোগ ও রক্তে চর্বি কমানোর জন্য সর্বোত্তম।'
            ),
            l(
              'Lean Meat (3g Fat, 55 kcal per ounce): Skinless chicken dark meat (thigh), pork tenderloin, lean beef cuts (flank steak, round, sirloin 90% lean), salmon, canned light tuna, low-fat feta cheese (1 oz). Provides healthy balance for diabetic meal planning.',
              'হালকা চর্বিযুক্ত মাংস (৩ গ্রাম ফ্যাট, ৫৫ ক্যালোরি/আউন্স): মুরগির চামড়াহীন রানের মাংস, চর্বিহীন গরুর মাংস, স্যামন মাছ, মাঝারি ফ্যাটযুক্ত পনির। ডায়াবেটিসের সাধারণ রোগীদের জন্য চমৎকার ভারসাম্যপূর্ণ।'
            ),
            l(
              'Medium-Fat Meat (5g Fat, 75 kcal per ounce): Whole large egg (1 egg = 1 oz medium-fat meat), ground beef (85% lean), pork chops, mozzarella cheese, firm tofu (4 oz / 1/2 cup = 1 serving). Contains balanced monounsaturated and saturated fats.',
              'মাঝারি চর্বিযুক্ত মাংস (৫ গ্রাম ফ্যাট, ৭৫ ক্যালোরি/আউন্স): পুরো ১টি মুরগির ডিম (= ১ আউন্স মাংস), সাধারণ গরুর কিমা, মোজারেলা পনির, টফু (৪ আউন্স)।'
            ),
            l(
              'High-Fat Meat (8g Fat, 100 kcal per ounce): Sausage, bacon (2 slices = 1 oz), hot dogs, pork spareribs, processed luncheon meats (salami, bologna), hard aged cheddar cheeses. Consuming 3 high-fat meat exchanges adds 24 grams of saturated fat (216 kcal) compared to very lean choices, sharply elevating atherogenic LDL-C and ApoB.',
              'উচ্চ চর্বিযুক্ত মাংস (৮ গ্রাম ফ্যাট, ১০০ ক্যালোরি/আউন্স): সসেজ, বেকন (২ টুকরো = ১ আউন্স), হট ডগ, শক্ত প্রক্রিয়াজাত পনির (চেডার চিজ)। চর্বিহীন মাংসের বদলে দিনে ৩ অংশ উচ্চ চর্বির মাংস খেলে শরীরে ২৪ গ্রাম অতিরিক্ত সম্পৃক্ত চর্বি ঢুকে খারাপ কোলেস্টেরল (LDL) আশঙ্কাজনকভাবে বাড়িয়ে দেয়।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-menu-algorithm',
          heading: l(
            '1. The Systematic 6-Step Clinical Menu Planning Algorithm',
            '১. ক্লিনিক্যাল খাদ্যতালিকা প্রণয়নের নিয়মমাফিক ৬ ধাপের অ্যালগরিদম'
          ),
          paragraphs: [
            l(
              'Translating a medical nutrition prescription into an exact, error-free daily exchange allowance requires a rigorous mathematical algorithm [3, 4]. Experienced clinical dietitians never guess; they execute a systematic 6-step hierarchical allocation.',
              'একটি চিকিৎসকের পুষ্টি ব্যবস্থাপত্রকে নিখুঁত ও নির্ভুল খাদ্য অংশে রূপান্তর করতে একটি সুনির্দিষ্ট গাণিতিক অ্যালগরিদম অনুসরণ করতে হয় [3, 4]। অভিজ্ঞ পুষ্টিবিদরা কখনোই আন্দাজে ডায়েট দেন না; তারা ৬ ধাপের ক্রমবিন্যাস মেনে খাদ্য বরাদ্দ করেন।'
            ),
            l(
              'The allocation follows a strict biological hierarchy: fixed groups with rigid physiological functions (Milk and Vegetables) are assigned first, followed by flexible carbohydrates (Fruit and Starch), followed by the protein balancer (Meats), and completed by the energy cushion (Fats) [3, 4]:',
              'এই বরাদ্দের একটি সুনির্দিষ্ট জৈবিক ক্রম রয়েছে: যেসব খাবারের নির্দিষ্ট শারীরবৃত্তীয় কাজ রয়েছে (দুধ ও সবজি) সেগুলো আগে বরাদ্দ করা হয়, এরপর শর্করার ভারসাম্য (ফল ও শ্বেতসার), তারপর প্রোটিনের ঘাটতি পূরণ (আমিষ) এবং সবশেষে তেলের হিসাব (ফ্যাট) মেলানো হয় [3, 4]:'
            ),
          ],
          bullets: [
            l(
              'Step 1: Calculate Target Daily Energy & Macronutrient Grams. Derive Total Energy Expenditure (TEE) and AMDR percentages. Example: 1,800 kcal target; 50% Carb = 900 kcal / 4 = 225g; 20% Protein = 360 kcal / 4 = 90g; 30% Fat = 540 kcal / 9 = 60g.',
              'ধাপ ১: দৈনিক ক্যালোরি ও ম্যাক্রোনিউট্রিয়েন্টের গ্রাম নির্ধারণ: মোট শক্তি এবং AMDR অনুপাত হিসাব করুন। উদাহরণ: ১,৮০০ কিলোক্যালোরি; ৫০% কার্বোহাইড্রেট = ২২৫ গ্রাম; ২০% প্রোটিন = ৯০ গ্রাম; ৩০% ফ্যাট = ৬০ গ্রাম।'
            ),
            l(
              'Step 2: Allocate Fixed Milk & Non-Starchy Vegetable Exchanges. Assign Milk based on calcium and cultural habit (e.g., 2 Skim Milk exchanges = 24g Carb, 16g Protein). Assign Vegetables to guarantee micronutrients and satiety (e.g., 4 Vegetable exchanges = 20g Carb, 8g Protein). Running totals: 44g Carb, 24g Protein, 0g Fat.',
              'ধাপ ২: দুধ ও সবজি বরাদ্দ: ক্যালসিয়াম ও অভ্যাসের ভিত্তিতে দুধ দিন (যেমন: ২ অংশ ফ্যাটমুক্ত দুধ = ২৪ গ্রাম কার্ব, ১৬ গ্রাম প্রোটিন)। পর্যাপ্ত আঁশ ও তৃপ্তির জন্য সবজি দিন (যেমন: ৪ অংশ সবজি = ২০ গ্রাম কার্ব, ৮ গ্রাম প্রোটিন)। মোট হিসাব: ৪৪ গ্রাম কার্ব, ২৪ গ্রাম প্রোটিন।'
            ),
            l(
              'Step 3: Allocate Fruits and Starches. Determine Fruit allowance (e.g., 3 Fruit exchanges = 45g Carb). Total fixed carbs = 44g + 45g = 89g. Subtract from target carb budget: 225g – 89g = 136g Carb deficit. Divide by 15g to obtain Starch exchanges: 136 / 15 = 9.07 ≈ 9 Starch exchanges (delivering 135g Carb and 27g Protein). Total accumulated protein = 24g + 27g = 51g.',
              'ধাপ ৩: ফল ও শ্বেতসার বরাদ্দ: ফল নির্ধারণ করুন (যেমন: ৩ অংশ ফল = ৪৫ গ্রাম কার্ব)। এখন পর্যন্ত মোট কার্ব = ৪৪ + ৪৫ = ৮৯ গ্রাম। লক্ষ্যমাত্রা ২২৫ থেকে বাদ দিন: ২২৫ – ৮৯ = ১৩৬ গ্রাম বাকি। এটিকে ১৫ দিয়ে ভাগ করে শ্বেতসারের অংশ বের করুন: ১৩৬ / ১৫ = ৯ অংশ শ্বেতসার (যা দেবে ১৩৫ গ্রাম কার্ব এবং ২৭ গ্রাম প্রোটিন)। মোট প্রোটিন হলো = ২৪ + ২৭ = ৫১ গ্রাম।'
            ),
            l(
              'Step 4: Balance Protein Deficit with Meat Exchanges. Target Protein = 90g. Protein accounted for from milk, vegetables, and starches = 51g. Remaining protein deficit = 90g – 51g = 39g. Each Meat exchange supplies 7g Protein. 39g / 7g = 5.57 ≈ 5.5 to 6 Meat exchanges (e.g., 5.5 Lean Meat exchanges = 38.5g Protein, 16.5g Fat). Total protein is now exactly 89.5g ≈ 90g.',
              'ধাপ ৪: আমিষের ঘাটতি পূরণ: প্রোটিনের মোট লক্ষ্যমাত্রা = ৯০ গ্রাম। দুধ, সবজি ও শ্বেতসার থেকে প্রাপ্ত প্রোটিন = ৫১ গ্রাম। বাকি প্রোটিন ঘাটতি = ৯০ – ৫১ = ৩৯ গ্রাম। প্রতি অংশ মাংসে থাকে ৭ গ্রাম প্রোটিন। সুতরাং ৩৯ / ৭ = ৫.৫৭ ≈ ৫.৫ অংশ চর্বিহীন মাংস (যা দেবে ৩৮.৫ গ্রাম প্রোটিন এবং ১৬.৫ গ্রাম ফ্যাট)। প্রোটিন লক্ষ্যমাত্রা সফলভাবে পূরণ হলো।'
            ),
            l(
              'Step 5: Allocate Fat Exchanges. Target Fat = 60g. Fat contributed so far by Lean Meats = 16.5g (plus ~1g from starches = 17.5g). Remaining fat deficit = 60g – 17.5g = 42.5g. Divide by 5g per Fat exchange: 42.5 / 5 = 8.5 Fat exchanges (providing 42.5g fat = ~8.5 teaspoons of olive oil, avocado, or salad dressing).',
              'ধাপ ৫: তেলের হিসাব মেলানো: ফ্যাটের মোট লক্ষ্যমাত্রা = ৬০ গ্রাম। মাংস ও শ্বেতসার থেকে প্রাপ্ত অদৃশ্য চর্বি = ১৭.৫ গ্রাম। বাকি ফ্যাট ঘাটতি = ৬০ – ১৭.৫ = ৪২.৫ গ্রাম। প্রতি অংশ তেলে থাকে ৫ গ্রাম ফ্যাট। সুতরাং ৪২.৫ / ৫ = ৮.৫ অংশ তেল (দিনে সাড়ে আট চা চামচ তেল বা বাদাম)।'
            ),
            l(
              'Step 6: Distribute Exchanges Across Daily Meals. Distribute exchanges across Breakfast, Lunch, Dinner, and 1–2 snacks to optimize insulin kinetics and prevent energy crashes.',
              'ধাপ ৬: সারাদিনের বিভিন্ন বেলায় খাবার বণ্টন: রক্তে ইনসুলিনের স্বাভাবিক কার্যকারিতা বজায় রাখতে সকালের নাস্তা, দুপুরের খাবার, রাতের খাবার এবং বিকেলের নাস্তায় অংশগুলো সমবণ্টন করুন।'
            ),
          ],
        },
        {
          id: 'sec-portion-precision',
          heading: l(
            '2. Portion Estimation Mechanics: The Metric and Household Equivalency Guide',
            '২. পরিমাপের বৈজ্ঞানিক কলাকৌশল: মেট্রিক বনাম ঘরোয়া চামচ ও কাপের তুলনামূলক নির্দেশিকা'
          ),
          paragraphs: [
            l(
              'The single greatest cause of failure in outpatient dietetics is portion creep: patients misinterpreting "1 cup" or "1 portion," unintentionally overconsuming 300 to 500 hidden calories daily [2, 3]. Clinical dietitians must educate patients on tactile, visual, and volumetric anchor points.',
              'বাইরের রোগীদের ডায়েট ব্যর্থ হওয়ার সবচেয়ে বড় কারণ হলো "অংশের ভুল অনুমান (Portion creep)": রোগী নিজের চোখের আন্দাজে খাবার মেপে অজান্তেই দিনে ৩০০ থেকে ৫০০ অতিরিক্ত ক্যালোরি খেয়ে ফেলেন [2, 3]। তাই চিকিৎসকদের রোগীর বাস্তব জীবনের পাত্রের সাথে সঠিক পরিমাপ শিখিয়ে দিতে হয়।'
            ),
          ],
          bullets: [
            l(
              'The Starch Metric: 1 Starch exchange of cooked rice, pasta, or oatmeal is exactly 1/3 cup (80 mL volume, ~75g to 80g wet cooked weight). A standard domestic tea mug or cereal bowl in many cultures holds 2 to 3 cups of rice (6 to 9 exchanges = 90–135g carbs!), easily sabotaging diabetic glycemic control.',
              'শ্বেতসারের হিসাব: রান্না ভাত, পাস্তা বা ওটসের ১ অংশ হলো ঠিক ১/৩ কাপ (৮০ মিলি বা প্রায় ৭৫–৮০ গ্রাম রান্না করা ভাত)। অনেকেই এক থালা ভাত খান যা মূলত ২ থেকে ৩ কাপ (৬ থেকে ৯ অংশ শ্বেতসার = ৯০ থেকে ১৩৫ গ্রাম চিনি!), যা ডায়াবেটিস নিয়ন্ত্রণের বারোটা বাজিয়ে দেয়।'
            ),
            l(
              'The Meat Metric: 1 Meat exchange is 1 ounce (28.35g) of cooked boneless meat, roughly the size of a standard matchbox or 3 regular dice. A standard palm-sized chicken breast fillet (3 to 4 ounces) equals 3 to 4 Meat exchanges (21 to 28g protein).',
              'মাংসের হিসাব: ১ অংশ মাংস হলো রান্না করা ১ আউন্স (২৮.৩৫ গ্রাম) হাড়হীন মাংস, যা দেখতে একটি দিয়াশলাইয়ের বাক্সের সমান। হাতের তালুর সমান এক টুকরো মুরগির বুকের মাংস (৩ থেকে ৪ আউন্স) মূলত ৩ থেকে ৪ অংশ মাংস (২১ থেকে ২৮ গ্রাম প্রোটিন)।'
            ),
            l(
              'The Fat Metric: 1 Fat exchange is exactly 1 level measuring teaspoon (5 mL / 5g oil, butter, or ghee). Pouring oil directly from a bottle into a frying pan without a spoon routinely introduces 2 to 4 tablespoons (6 to 12 fat exchanges = 270–540 unmeasured calories).',
              'তেলের হিসাব: ১ অংশ ফ্যাট হলো ঠিক ১ সমতল চা চামচ (৫ মিলি বা ৫ গ্রাম তেল/ঘি)। বোতল থেকে আন্দাজে তেল ঢাললে খুব সহজেই ২ থেকে ৪ টেবিল চামচ (২৭০ থেকে ৫৪০ বাড়তি ক্যালোরি!) তরকারিতে ঢুকে যায়।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-glycemic-distribution',
          heading: l(
            '1. Chrono-Nutrition & Glycemic Excursion Engineering in Exchange Allocation',
            '১. ক্রোনো-নিউট্রিশন ও গ্লাইসেমিক ওঠানামা নিয়ন্ত্রণের উন্নত খাদ্য বিনিময় প্রকৌশল'
          ),
          paragraphs: [
            l(
              'Calculating the correct total daily exchanges is only half the clinical battle; the temporal distribution of exchanges across the circadian cycle governs hormonal sensitivity, insulin secretion, and nocturnal hepatic gluconeogenesis [4, 5].',
              'সারাদিনের মোট খাদ্য বিনিময় সঠিক করাই চিকিৎসার শেষ কথা নয়; ২৪ ঘণ্টার কোন সময়ে কতটুকু বিনিময় অংশ খাওয়া হচ্ছে তা শরীরের হরমোন, ইনসুলিন এবং রাতের বেলার লিভারের গ্লুকোজ তৈরির গতি নিয়ন্ত্রণ করে [4, 5]। '
            ),
          ],
          bullets: [
            l(
              'Circadian Insulin Resistance: Due to the dawn phenomenon and circadian cortisol rhythms, peripheral insulin sensitivity is naturally lowest in the early morning and highest at midday. Allocating massive starch loads (e.g., 4 to 5 starch exchanges) at breakfast triggers severe postprandial glycemic spikes. Evidence-based protocol: Limit breakfast starches to 1 to 2 exchanges (15–30g carbs), shifting complex carbohydrates to lunch and early dinner [4].',
              'সকালের ইনসুলিন রেজিস্ট্যান্স: ভোরে কর্টিসল হরমোন বৃদ্ধির কারণে সকালে ইনসুলিন সবচেয়ে কম কাজ করে। তাই সকালে ৪–৫ অংশ শ্বেতসার খেলে রক্তে চিনি হঠাৎ অনেক বেড়ে যায়। আধুনিক প্রোটোকল: সকালে শ্বেতসার ১–২ অংশে (১৫–৩০ গ্রাম কার্ব) সীমাবদ্ধ রেখে দুপুর ও রাতে জটিল শ্বেতসার বরাদ্দ করা উচিত [4]।',
            ),
            l(
              'The Second-Meal Effect: Combining non-starchy vegetable exchanges (rich in soluble viscous fiber like beta-glucans and pectins) with lean proteins at lunch delays gastric emptying and stimulates colonic fermentation into Short-Chain Fatty Acids (SCFAs). These SCFAs activate free fatty acid receptors (FFAR2/3), releasing GLP-1 and PYY, which blunts glycemic excursions at the subsequent dinner meal 5 hours later [4, 5].',
              'সেকেন্ড-মিল ইফেক্ট: দুপুরে সবজির দ্রবণীয় আঁশ এবং প্রোটিন একসাথে খেলে তা পাকস্থলী খালি হওয়ার গতি কমায় এবং অন্ত্রে উপকারি ফ্যাটি অ্যাসিড তৈরি করে। এর ফলে ৫ ঘণ্টা পর রাতের খাবার খাওয়ার পরও রক্তে গ্লুকোজ অতিরিক্ত বাড়ে না, যাকে বৈজ্ঞানিকভাবে "সেকেন্ড-মিল ইফেক্ট" বলা হয় [4, 5]। ',
            ),
            l(
              'Nocturnal Hypoglycemia Safeguards: For patients on basal-bolus insulin regimens or sulfonylureas, bedtime exchange allocation is vital. Prescribing a bedtime snack consisting of 1 Starch exchange paired with 1 Lean Meat or Fat exchange (e.g., 3 whole-wheat crackers with 1 oz low-fat cheese or 1 tbsp peanut butter) provides sustained glucose release, preventing nocturnal hypoglycemic crashes at 03:00 AM without inducing morning rebound hyperglycemia (Somogyi effect) [3, 4].',
              'রাতের লো-সুগার প্রতিরোধ: ইনসুলিন নেওয়া ডায়াবেটিস রোগীদের গভীর রাতে রক্তে সুগার বিপজ্জনকভাবে নেমে যাওয়া রোধ করতে ঘুমানোর আগে ১ অংশ শ্বেতসার এবং ১ অংশ আমিষের সমন্বয় (যেমন ৩টি লাল আটার বিস্কুট সাথে ১ টুকরো পনির) সারারাত রক্তের গ্লুকোজকে নিখুঁত ও স্থিতিশীল রাখে [3, 4]। ',
            ),
          ],
        },
        {
          id: 'sec-clinical-pitfalls',
          heading: l(
            '2. Clinical Pitfalls in Food Exchange System Implementation',
            '২. খাদ্য বিনিময় পদ্ধতির সাধারণ ক্লিনিক্যাল ভুলত্রুটি ও প্রতিকার'
          ),
          paragraphs: [
            l(
              'While the exchange system offers extraordinary clinical utility, improper application by novice clinicians introduces serious metabolic errors [3, 4]:',
              'খাদ্য বিনিময় ব্যবস্থা অসাধারণ কার্যকর হলেও অনভিজ্ঞ পুষ্টিবিদদের অসতর্ক প্রয়োগে মারাত্মক মেটাবলিক ত্রুটি ঘটতে পারে [3, 4]:'
            ),
          ],
          bullets: [
            l(
              'The Starchy Vegetable Trap: Confusing non-starchy vegetables with starchy vegetables is the single most common outpatient error. Green peas, sweet corn, boiled potatoes, sweet potatoes, and yams are NOT in the vegetable group; they are STARCHES (1/2 cup = 15g carb = 80 kcal). Treating a cup of mashed potatoes as a "free vegetable" injects 30 uncounted grams of fast-acting glucose into the patient’s bloodstream.',
              'আলু ও ভুট্টার ফাঁদ: সবচেয়ে সাধারণ ভুল হলো সবজি ও শ্বেতসারকে গুলিয়ে ফেলা। আলু, মিষ্টি আলু, ভুট্টা ও মটরশুঁটি কোনো সাধারণ সবজি নয়; এগুলো মূলত **শ্বেতসার (Starch)** (১/২ কাপ = ১৫ গ্রাম কার্ব = ৮০ ক্যালোরি)। এগুলোকে সাধারণ শসা বা পালং শাকের মতো আনলিমিটেড ভাবলে ডায়াবেটিস অনিয়ন্ত্রিত হয়ে পড়ে।',
            ),
            l(
              'The Fruit Juice Illusion: Liquid fruit exchanges (1/2 cup of 100% orange or apple juice) lack the intact insoluble cellulose matrix of whole fruit. They possess a high Glycemic Index (GI > 70) and empty from the stomach within 15 minutes, triggering rapid hepatic fructose flux and de novo lipogenesis. Guidelines mandate prioritizing whole, intact, fiber-rich fruits over fruit juices [2, 4].',
              'ফলের জুসের বিভ্রান্তি: ফলের জুসে আস্ত ফলের আঁশ বা ফাইবার থাকে না। জুস খেলে পেটে মাত্র ১৫ মিনিটে তা রক্তে শোষিত হয়ে লিভারে চর্বি তৈরি করে এবং সুগার দ্রুত বাড়িয়ে দেয়। তাই জুসের বদলে সর্বদা খোসাসহ গোটা ফল খাওয়া বাধ্যতামূলক [2, 4]।',
            ),
            l(
              'Hidden Trans Fats in Commercial Baked Goods: Many commercial starches (muffins, croissants, crackers) carry hidden fats. A standard commercially baked muffin may contain 1 Starch exchange PLUS 2 to 3 unlisted Fat exchanges (10–15g of industrial seed oil or shortening), doubling its real caloric payload.',
              'বেকারির পণ্যে লুকানো চর্বি: বিস্কুট, মাফিন ও প্যাটিস ইত্যাদিতে প্রচুর লুকানো ডালডা বা পাম তেল থাকে। একটি সাধারণ মাফিনে ১ অংশ শ্বেতসারের সাথে ২ থেকে ৩ অংশ অদৃশ্য তেল মিশে থাকে যা রোগীর ওজন ও রক্তচাপ বাড়িয়ে দেয়।',
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Philosophy of Food Exchanges', '১. খাদ্য বিনিময়ের দর্শন ও মূলনীতি'), sectionId: 'sec-exchange-philosophy' },
      { id: 'toc-2', label: l('2. The 6 Core Exchange Lists', '২. ৬টি প্রধান খাদ্য বিনিময় তালিকা'), sectionId: 'sec-six-core-groups' },
      { id: 'toc-3', label: l('3. The 4 Meat Fat Tiers', '৩. আমিষের ৪টি চর্বি স্তর'), sectionId: 'sec-meat-fat-tiers' },
      { id: 'toc-4', label: l('4. 6-Step Menu Algorithm', '৪. ৬ ধাপের খাদ্যতালিকা প্রণয়ন অ্যালগরিদম'), sectionId: 'sec-menu-algorithm' },
      { id: 'toc-5', label: l('5. Portion Precision & Household Units', '৫. খাদ্য অংশের পরিমাপ ও ঘরোয়া চামচের হিসাব'), sectionId: 'sec-portion-precision' },
      { id: 'toc-6', label: l('6. Chrono-Nutrition & Glycemic Engineering', '৬. ক্রোনো-নিউট্রিশন ও গ্লাইসেমিক নিয়ন্ত্রণ'), sectionId: 'sec-glycemic-distribution' },
      { id: 'toc-7', label: l('7. Clinical Pitfalls & Solutions', '৭. খাদ্য বিনিময়ের সাধারণ ভুলত্রুটি ও সমাধান'), sectionId: 'sec-clinical-pitfalls' },
    ],
    terms: [
      {
        term: l('Food Exchange System', 'খাদ্য বিনিময় ব্যবস্থা (Food Exchange System)'),
        definition: l(
          'A standardized meal planning framework that groups foods into 6 nutritional categories based on equivalent macronutrient and energy contents, permitting flexible within-group substitution.',
          'খাবারকে তাদের সমপরিমাণ ক্যালোরি ও পুষ্টিগুণের ভিত্তিতে ৬টি প্রধান দলে ভাগ করে তালিকা প্রণয়নের প্রমিত পদ্ধতি, যা একই দলের যে কোনো খাবার অদল-বদল করার স্বাধীনতা দেয়।'
        ),
      },
      {
        term: l('Iso-Macronutrient Substitution', 'সম-ম্যাক্রোনিউট্রিয়েন্ট প্রতিস্থাপন'),
        definition: l(
          'The physiological principle that exchanging one food item for another with an identical macronutrient payload produces equivalent metabolic and glycemic impacts.',
          'একই পরিমাণ শর্করা, প্রোটিন ও ফ্যাটযুক্ত একটি খাবারের বদলে অন্য একটি খাবার খেলে শরীরে মেটাবলিক প্রভাব একই থাকে—এই বৈজ্ঞানিক মূলনীতি।'
        ),
      },
      {
        term: l('Starch Exchange', 'শ্বেতসার অংশ (Starch Exchange)'),
        definition: l(
          'A standardized portion of carbohydrate-rich food providing exactly 15g Carbohydrate, 3g Protein, 1g Fat, and 80 kcal (e.g., 1 slice bread, 1/3 cup cooked rice).',
          'শ্বেতসার জাতীয় খাবারের প্রমিত অংশ যা ঠিক ১৫ গ্রাম কার্বোহাইড্রেট, ৩ গ্রাম প্রোটিন, ১ গ্রাম ফ্যাট এবং ৮০ ক্যালোরি সরবরাহ করে (যেমন: ১/৩ কাপ রান্না ভাত, ১টি রুটি)।'
        ),
      },
      {
        term: l('Portion Creep', 'অংশের বিস্তার বা ভুল অনুমান (Portion Creep)'),
        definition: l(
          'The insidious, unconscious gradual increase in self-served portion sizes over time, frequently contributing 300–500 uncounted kilocalories per day.',
          'চোখের আন্দাজে খাবার মেপে খাওয়ার কারণে সময়ের সাথে সাথে অজান্তেই খাবারের পরিমাণ অনেক বেড়ে গিয়ে অতিরিক্ত ক্যালোরি প্রবেশের অবস্থা।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Translating a 1,800 kcal Diabetic Prescription into Daily Food Exchanges',
          'বাস্তব কেস স্টাডি: ডায়াবেটিস রোগীর ১,৮০০ কিলোক্যালোরি ব্যবস্থাপত্রকে খাদ্য বিনিময়ে রূপান্তর'
        ),
        steps: [
          l(
            'Step 1: Patient Target Formulation. A 54-year-old male with Type 2 Diabetes and stage 2 hypertension. Daily target = 1,800 kcal. AMDR targets: 50% Carbohydrate (225g), 20% Protein (90g), 30% Fat (60g).',
            'ধাপ ১: রোগীর লক্ষ্যমাত্রা: টাইপ ২ ডায়াবেটিসের ৫৪ বছর বয়সী পুরুষ। দৈনিক শক্তি = ১,৮০০ কিলোক্যালোরি। পুষ্টি লক্ষ্য: ৫০% কার্বোহাইড্রেট (২২৫ গ্রাম), ২০% প্রোটিন (৯০ গ্রাম), ৩০% ফ্যাট (৬০ গ্রাম)।'
          ),
          l(
            'Step 2: Allocate Fixed Milk & Non-Starchy Vegetables. Prescribe 2 Skim Milk exchanges (24g C, 16g P, 0g F = 180 kcal) and 4 Vegetable exchanges (20g C, 8g P, 0g F = 100 kcal). Running subtotals: 44g C, 24g P, 0g F.',
            'ধাপ ২: দুধ ও সবজি নির্ধারণ: ২ অংশ ফ্যাটমুক্ত দুধ (২৪ গ্রাম কার্ব, ১৬ গ্রাম প্রোটিন) এবং ৪ অংশ সবজি (২০ গ্রাম কার্ব, ৮ গ্রাম প্রোটিন)। মোট: ৪৪ গ্রাম কার্ব, ২৪ গ্রাম প্রোটিন।'
          ),
          l(
            'Step 3: Allocate Fruits and Balance Remaining Carbohydrates with Starches. Prescribe 3 Fruit exchanges (45g C = 180 kcal). Total allocated carbs so far = 44g + 45g = 89g. Remaining carb budget = 225g – 89g = 136g. Divide by 15g per Starch exchange = 136 / 15 = 9.07 ≈ 9 Starch exchanges (providing 135g C, 27g P, 9g F = 720 kcal). Total accumulated protein = 24g + 27g = 51g.',
            'ধাপ ৩: ফল ও শ্বেতসার বরাদ্দ: ৩ অংশ ফল (৪৫ গ্রাম কার্ব)। মোট কার্ব = ৮৯ গ্রাম। বাকি কার্ব = ২২৫ – ৮৯ = ১৩৬ গ্রাম। শ্বেতসার অংশ = ১৩৬ / ১৫ = ৯ অংশ শ্বেতসার (যা দেবে ১৩৫ গ্রাম কার্ব, ২৭ গ্রাম প্রোটিন, ৯ গ্রাম ফ্যাট)। মোট প্রোটিন হলো = ৫১ গ্রাম।'
          ),
          l(
            'Step 4: Solve Protein Deficit with Lean Meat Exchanges. Protein target = 90g. Protein accounted for = 51g. Remaining protein deficit = 90g – 51g = 39g. Each Lean Meat exchange supplies 7g P and 3g F. 39g / 7g = 5.57 ≈ 5.5 Lean Meat exchanges (providing 38.5g P, 16.5g F = 302.5 kcal). Total protein is now exactly 89.5g ≈ 90g.',
            'ধাপ ৪: চর্বিহীন মাংস বরাদ্দ: প্রোটিনের লক্ষ্য = ৯০ গ্রাম। এখন পর্যন্ত প্রোটিন = ৫১ গ্রাম। বাকি প্রোটিন = ৯০ – ৫১ = ৩৯ গ্রাম। প্রতি অংশ চর্বিহীন মাংসে থাকে ৭ গ্রাম প্রোটিন। সুতরাং ৩৯ / ৭ = ৫.৫ অংশ চর্বিহীন মাংস (যা দেবে ৩৮.৫ গ্রাম প্রোটিন এবং ১৬.৫ গ্রাম ফ্যাট)।'
          ),
          l(
            'Step 5: Fill Fat Deficit with Pure Fat Exchanges. Fat target = 60g. Fat contributed by Lean Meats (16.5g) and Starches (9g) = 25.5g. Remaining fat deficit = 60g – 25.5g = 34.5g. Divide by 5g per Fat exchange = 34.5 / 5 = 6.9 ≈ 7 Fat exchanges (providing 35g F = 315 kcal). Total Calories = (224g C × 4) + (89.5g P × 4) + (60.5g F × 9) = 896 + 358 + 544.5 = 1,798.5 kcal (99.9% precision).',
            'ধাপ ৫: তেলের হিসাব মেলানো: ফ্যাটের লক্ষ্য = ৬০ গ্রাম। মাংস ও শ্বেতসার থেকে প্রাপ্ত চর্বি = ২৫.৫ গ্রাম। বাকি ফ্যাট = ৬০ – ২৫.৫ = ৩৪.৫ গ্রাম। প্রতি অংশ তেলে ৫ গ্রাম ফ্যাট। সুতরাং ৩৪.৫ / ৫ = ৭ অংশ তেল (৩৫ গ্রাম ফ্যাট)। মোট শক্তি = ১,৭৯৮.৫ কিলোক্যালোরি (১,৮০০ ক্যালোরির ৯৯.৯% নিখুঁত)।'
          ),
          l(
            'Step 6: Meal Distribution Blueprint. Breakfast: 2 Starch (2 slices bread), 1 Lean Meat (1 egg), 1 Fat (1 tsp butter), 1 Fruit (1 small orange). Lunch: 3 Starch (1 cup rice), 2 Lean Meat (2 oz fish), 2 Vegetable (1 cup salad), 2 Fat (2 tsp oil in cooking), 1 Fruit (1/2 cup papaya). Afternoon Snack: 1 Skim Milk (1 cup), 1 Starch (3 crackers). Dinner: 3 Starch (3 small roti), 2.5 Lean Meat (2.5 oz chicken breast), 2 Vegetable (cooked mixed vegetables), 3 Fat (cooking oil), 1 Fruit (1 small apple). Bedtime: 1 Skim Milk (1 cup).',
            'ধাপ ৬: খাবার বণ্টনের পূর্ণাঙ্গ রূপরেখা: সকাল: ২ শ্বেতসার (২টি রুটি), ১ মাংস (১টি ডিম), ১ তেল (১ চা চামচ মাখন), ১ ফল (১টি ছোট কমলা)। দুপুর: ৩ শ্বেতসার (১ কাপ ভাত), ২ মাংস (২ আউন্স মাছ), ২ সবজি (১ কাপ সালাদ), ২ তেল (রান্নার তেল), ১ ফল (পেঁপে)। বিকেল: ১ দুধ (১ কাপ ফ্যাটমুক্ত দুধ), ১ শ্বেতসার (৩টি বিস্কুট)। রাত: ৩ শ্বেতসার (৩টি ছোট লাল আটার রুটি), ২.৫ মাংস (মুরগির মাংস), ২ সবজি (সবজি তরকারি), ৩ তেল, ১ ফল (আপেল)। ঘুমানোর আগে: ১ দুধ।'
          ),
        ],
        conclusion: l(
          'Executing the 6-step menu engineering algorithm achieved complete mathematical parity with the macronutrient prescription while providing the patient with a flexible, delicious, and culturally empowering dietary architecture.',
          '৬ ধাপের অ্যালগরিদম সফলভাবে প্রয়োগ করে রোগীর পুষ্টি ব্যবস্থাপত্রকে শতভাগ নিখুঁতভাবে খাবারে রূপান্তর করা সম্ভব হয়, যা রোগীকে রক্তে গ্লুকোজ নিয়ন্ত্রণের পাশাপাশি খাদ্যের পরম স্বাধীনতা নিশ্চিত করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why must starchy vegetables (potatoes, corn, peas) never be counted under the Non-Starchy Vegetable exchange list?',
          'আলু, ভুট্টা ও মটরশুঁটিকে কেন কখনোই শ্বেতসারহীন সাধারণ সবজির তালিকায় অন্তর্ভুক্ত করা যায় না?'
        ),
        answer: l(
          'Non-starchy vegetables (spinach, cucumber, broccoli) have low carbohydrate density (5g carb, 25 kcal per 1/2 cup cooked). In contrast, starchy vegetables (potatoes, sweet potatoes, green peas, corn) possess high amylose/amylopectin starch matrices yielding 15g carbohydrate and 80 kcal per 1/2 cup—precisely identical to a slice of bread or 1/3 cup of rice. Counting starchy vegetables as non-starchy vegetables injects triple the anticipated carbohydrate load, causing severe postprandial hyperglycemia in diabetic patients.',
          'সাধারণ সবজিতে (পালং শাক, শসা, ফুলকপি) খুব সামান্য শর্করা থাকে (১/২ কাপে মাত্র ৫ গ্রাম কার্ব ও ২৫ ক্যালোরি)। কিন্তু আলু, মিষ্টি আলু, ভুট্টা ও মটরশুঁটিতে প্রচুর শ্বেতসার থাকে, যার প্রতি ১/২ কাপে ঠিক ১৫ গ্রাম কার্বোহাইড্রেট এবং ৮০ ক্যালোরি থাকে—যা হুবহু ১ টুকরো পাউরুটি বা ১/৩ কাপ ভাতের সমান। এগুলোকে সাধারণ সবজি ভাবলে রক্তে অতিরিক্ত চিনি ঢুকে ডায়াবেটিসের মাত্রা ভয়াবহভাবে বাড়িয়ে দেয়।'
        ),
      },
      {
        question: l(
          'Why does selecting High-Fat Meats instead of Very Lean Meats undermine cardiovascular medical nutrition therapy?',
          'চর্বিহীন মাংসের বদলে উচ্চ চর্বিযুক্ত মাংস খেলে কেন হৃদরোগীদের রক্তনালী ব্লকের ঝুঁকি বাড়ে?'
        ),
        answer: l(
          'While all meat exchanges yield 7g of protein per ounce, High-Fat Meats (sausage, bacon, cheddar cheese) contain 8g of fat (primarily atherogenic saturated fatty acids and myristic/palmitic acids) and 100 kcal per ounce, compared to Very Lean Meats which contain 0–1g fat and only 35 kcal. Consuming 4 ounces of high-fat meat injects 32g of fat (288 kcal) and dramatically increases hepatic ApoB-100 synthesis and circulating LDL particle concentrations, accelerating coronary atherogenesis.',
          'সব মাংসে প্রতি আউন্সে ৭ গ্রাম প্রোটিন থাকলেও উচ্চ চর্বিযুক্ত মাংসে (সসেজ, চিজ) থাকে ৮ গ্রাম চর্বি (মূলত ক্ষতিকর সম্পৃক্ত চর্বি) এবং ১০০ ক্যালোরি; যেখানে চর্বিহীন মাংসে থাকে মাত্র ০–১ গ্রাম চর্বি ও ৩৫ ক্যালোরি। দিনে ৪ আউন্স উচ্চ চর্বির মাংস খেলে রক্তে ৩২ গ্রাম অতিরিক্ত চর্বি ঢুকে খারাপ কোলেস্টেরল (LDL) আশঙ্কাজনকভাবে বাড়িয়ে দেয় এবং হৃদরোগের ব্লকেজ ত্বরান্বিত করে।'
        ),
      },
    ],
  },
}
