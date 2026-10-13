import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const energyBalanceRefs = [
  {
    id: 'hall-modern-nutrition-energy',
    authors: 'Kevin D. Hall, Carson C. Chow',
    title: 'Modern Nutrition in Health and Disease, 11th edition, Chapter 7: Energy Metabolism and Body Weight Regulation',
    organization: 'Wolters Kluwer Health / Lippincott Williams & Wilkins',
    year: 2014,
    url: 'https://shop.lww.com/Modern-Nutrition-in-Health-and-Disease/p/9781605474618',
  },
  {
    id: 'krause-nutrition-care-energy',
    authors: 'Janice L. Raymond, Kelly Morrow',
    title: "Krause and Mahan's Food & the Nutrition Care Process, 15th edition, Chapter 2: Energy Expenditure and Intake",
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/krause-and-mahans-food-and-the-nutrition-care-process/raymond/978-0-323-63655-1',
  },
  {
    id: 'gropper-advanced-nutrition-energy',
    authors: 'Sareen S. Gropper, Jack L. Smith, Timothy P. Carr',
    title: 'Advanced Nutrition and Human Metabolism, 8th edition, Chapter 8: Energy Balance and Body Composition',
    organization: 'Cengage Learning',
    year: 2021,
    url: 'https://www.cengage.com/c/advanced-nutrition-and-human-metabolism-8e-gropper/9780357449813/',
  },
  {
    id: 'hall-ajcn-energy-balance-model',
    authors: 'Kevin D. Hall, Steven B. Heymsfield, Joseph W. Kemnitz, Samuel Klein, Dale A. Schoeller, John R. Speakman',
    title: 'Energy balance and its components: implications for body weight regulation',
    organization: 'The American Journal of Clinical Nutrition',
    year: 2012,
    url: 'https://doi.org/10.3945/ajcn.112.036350',
  },
]

export const nutrition01EnergyBalanceLesson: LessonTopic = {
  id: 'topic.nutrition.energy-balance-tdee',
  slug: 'energy-balance-tdee',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '01 · Energy Balance, Basal Metabolic Rate & Total Daily Energy Expenditure',
    '০১ · শক্তি ভারসাম্য, বেসাল মেটাবলিক রেট ও মোট দৈনিক শক্তি ব্যয়'
  ),
  summary: l(
    'The thermodynamic foundation of human nutrition: direct and indirect calorimetry, the respiratory quotient, components of Total Daily Energy Expenditure (BMR, TEF, NEAT, EAT), and metabolic adaptation.',
    'মানব পুষ্টির তাপগতিবিদ্যাগত ভিত্তি: প্রত্যক্ষ ও পরোক্ষ ক্যালোরিমেট্রি, শ্বসন অনুপাত, মোট দৈনিক শক্তি ব্যয়ের প্রধান উপাদান (BMR, TEF, NEAT, EAT) এবং বিপাকীয় অভিযোজন।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Apply the First Law of Thermodynamics to human nutritional physiology, distinguishing positive, neutral, and negative energy balance.',
      'মানব পুষ্টি শারীরবৃত্তে তাপগতিবিদ্যার প্রথম সূত্র প্রয়োগ করতে পারা এবং ধনাত্মক, ভারসাম্যপূর্ণ ও ঋণাত্মক শক্তি ভারসাম্যের পার্থক্য নির্ণয় করতে পারা।'
    ),
    l(
      'Calculate and dissect the four biological components of Total Daily Energy Expenditure (BMR/RMR, TEF, NEAT, and EAT), identifying their physiological determinants.',
      'মোট দৈনিক শক্তি ব্যয়ের (TDEE) চারটি জৈবিক উপাদান (BMR/RMR, TEF, NEAT এবং EAT) হিসাব ও বিশ্লেষণ করতে পারা এবং তাদের শারীরবৃত্তীয় প্রভাবক শনাক্ত করতে পারা।'
    ),
    l(
      'Interpret indirect calorimetry data, utilizing the Respiratory Quotient (RQ) to evaluate substrate oxidation across carbohydrate, lipid, and mixed diets.',
      'পরোক্ষ ক্যালোরিমেট্রির উপাত্ত ব্যাখ্যা করতে পারা এবং শ্বসন অনুপাত (RQ) ব্যবহার করে শর্করা, চর্বি ও মিশ্র খাদ্যের সাবস্ট্রেট জারণ মূল্যায়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.nutrition.macronutrient-digestion'],
  references: energyBalanceRefs,
  evidenceBySection: {
    introduction: ['hall-modern-nutrition-energy', 'krause-nutrition-care-energy'],
    structure: ['krause-nutrition-care-energy', 'gropper-advanced-nutrition-energy'],
    mechanism: ['gropper-advanced-nutrition-energy', 'hall-ajcn-energy-balance-model'],
    integration: ['hall-modern-nutrition-energy', 'hall-ajcn-energy-balance-model'],
    practice: ['krause-nutrition-care-energy', 'gropper-advanced-nutrition-energy'],
    takeaways: ['hall-modern-nutrition-energy', 'krause-nutrition-care-energy'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Thermodynamics of Human Energy Balance', '১. মানব শক্তি ভারসাম্যের তাপগতিবিদ্যা'), sectionId: 'introduction' },
      { id: 'sec-bmr', label: l('2. Basal & Resting Metabolic Rate (BMR / RMR)', '২. বেসাল ও বিশ্রামকালীন বিপাকীয় হার (BMR / RMR)'), sectionId: 'structure' },
      { id: 'sec-tef-neat', label: l('3. Thermic Effect of Food (TEF) & Physical Activity (NEAT / EAT)', '৩. খাদ্যের তাপীয় প্রভাব (TEF) ও দৈহিক পরিশ্রম (NEAT / EAT)'), sectionId: 'mechanism' },
      { id: 'sec-adaptation', label: l('4. Indirect Calorimetry, Respiratory Quotient & Metabolic Adaptation', '৪. পরোক্ষ ক্যালোরিমেট্রি, শ্বসন অনুপাত ও বিপাকীয় অভিযোজন'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Quantitative Energy Expenditure Calculations', '৫. পরিমাণগত শক্তি ব্যয় নির্ণয় ও বিশ্লেষণ'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Total Daily Energy Expenditure (TDEE)', 'মোট দৈনিক শক্তি ব্যয় (TDEE)'),
        definition: l(
          'The total amount of chemical energy expended by an individual in a 24-hour period, comprising basal metabolic rate, the thermic effect of food, non-exercise activity, and structured exercise.',
          '২৪ ঘণ্টার সময়কালে কোনো ব্যক্তির ব্যয়িত মোট রাসায়নিক শক্তি, যা বেসাল মেটাবলিক রেট, খাদ্যের তাপীয় প্রভাব, অনিচ্ছাকৃত দৈহিক কাজ এবং পরিকল্পিত ব্যায়ামের সমষ্টি।'
        ),
      },
      {
        term: l('Basal Metabolic Rate (BMR)', 'বেসাল মেটাবলিক রেট (BMR)'),
        definition: l(
          'The minimal rate of energy expenditure required to maintain essential life-sustaining cellular and organ functions in a awake, supine individual in a thermoneutral environment after an overnight 12-hour fast.',
          '১২ ঘণ্টার উপবাসের পর তাপ-নিরপেক্ষ পরিবেশে সম্পূর্ণ বিশ্রামাবস্থায় জাগ্রত ব্যক্তির মস্তিষ্ক, হৃৎপিণ্ড, ফুসফুস ও কোষীয় অখণ্ডতা বজায় রাখতে প্রয়োজনীয় ন্যূনতম শক্তি ব্যয়ের হার।'
        ),
      },
      {
        term: l('Respiratory Quotient (RQ)', 'শ্বসন অনুপাত (RQ)'),
        definition: l(
          'The molar ratio of carbon dioxide produced to oxygen consumed (VCO2 / VO2) at the cellular level, reflecting the macronutrient mixture being oxidized for energy.',
          'কোষীয় স্তরে গৃহীত অক্সিজেনের বিপরীতে নির্গত কার্বন ডাই অক্সাইডের মোলার অনুপাত (VCO2 / VO2), যা শক্তি উৎপাদনের জন্য জারিত ম্যাক্রোনিউট্রিয়েন্টের মিশ্রণ নির্দেশ করে।'
        ),
      },
      {
        term: l('Non-Exercise Activity Thermogenesis (NEAT)', 'নন-এক্সারসাইজ অ্যাক্টিভিটি থার্মোজেনেসিস (NEAT)'),
        definition: l(
          'Energy expended for everything an individual does that is not sleeping, eating, or dedicated sports exercise, such as walking, working, typing, fidgeting, and posture maintenance.',
          'ঘুম, আহার এবং পরিকল্পিত ব্যায়াম ব্যতীত সারাদিনের যাবতীয় স্বাভাবিক নড়াচড়া, হাঁটাচলা, দাঁড়ানো, কাজ করা এবং বসার ভঙ্গিমা বজায় রাখতে ব্যয়িত শক্তি।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Estimating Resting Metabolic Rate via the Mifflin-St Jeor Equation', 'মিফলিন-সেন্ট জিওর সূত্রের মাধ্যমে বিশ্রামকালীন বিপাকীয় হার নির্ণয়'),
        steps: [
          l(
            'Step 1: Record patient demographics: 35-year-old female, body mass 68 kg, height 165 cm.',
            'ধাপ ১: রোগীর তথ্য নথিভুক্ত করুন: ৩৫ বছর বয়সী নারী, দৈহিক ওজন ৬৮ কেজি, উচ্চতা ১৬৫ সেমি।'
          ),
          l(
            'Step 2: Apply the validated Mifflin-St Jeor formula for females: RMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in years) - 161.',
            'ধাপ ২: নারীদের জন্য কার্যকর মিফলিন-সেন্ট জিওর সূত্র প্রয়োগ করুন: RMR = (১০ x ওজন কেজি) + (৬.২৫ x উচ্চতা সেমি) - (৫ x বয়স বছর) - ১৬১।'
          ),
          l(
            'Step 3: Calculate intermediate products: (10 x 68 = 680) + (6.25 x 165 = 1031.25) - (5 x 35 = 175) - 161 = 1711.25 - 336 = 1375.25 kcal/day.',
            'ধাপ ৩: ধাপে ধাপে গণনা করুন: (১০ x ৬৮ = ৬৮০) + (৬.২৫ x ১৬৫ = ১০৩১.২৫) - (৫ x ৩৫ = ১৭৫) - ১৬১ = ১৭১১.২৫ - ৩৩৬ = ১৩৭৫.২৫ কিলোক্যালরি/দিন।'
          ),
        ],
        conclusion: l(
          'Estimated resting metabolic rate is approximately 1,375 kcal/day. Multiplying by a sedentary physical activity level (PAL = 1.2) predicts a maintenance TDEE of ~1,650 kcal/day.',
          'রোগীর আনুমানিক বিশ্রামকালীন বিপাকীয় হার প্রায় ১,৩৭৫ কিলোক্যালরি/দিন। আসীন জীবনযাত্রার সূচক (PAL = ১.২) দিয়ে গুণ করলে মোট দৈনিক শক্তি ব্যয় দাঁড়ায় প্রায় ১,৬৫০ কিলোক্যালরি/দিন।'
        ),
      },
      {
        title: l('Interpreting Respiratory Quotient during High-Fat vs High-Carbohydrate Oxidation', 'উচ্চ-চর্বি বনাম উচ্চ-শর্করা জারণে শ্বসন অনুপাত (RQ) বিশ্লেষণ'),
        steps: [
          l(
            'Step 1: Consider glucose oxidation stoichiometry: C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O. RQ = 6 CO2 / 6 O2 = 1.00.',
            'ধাপ ১: গ্লুকোজ জারণের রাসায়নিক সমীকরণ বিবেচনা করুন: C6H12O6 + ৬ O2 -> ৬ CO2 + ৬ H2O। RQ = ৬ CO2 / ৬ O2 = ১.০০।'
          ),
          l(
            'Step 2: Consider tripalmitin (fat) oxidation stoichiometry: C51H98O6 + 72.5 O2 -> 51 CO2 + 49 H2O. RQ = 51 CO2 / 72.5 O2 = 0.703.',
            'ধাপ ২: ট্রাইপামিটাইন (চর্বি) জারণ সমীকরণ বিবেচনা করুন: C51H98O6 + ৭২.৫ O2 -> ৫১ CO2 + ৪৯ H2O। RQ = ৫১ CO2 / ৭২.৫ O2 = ০.৭০৩।'
          ),
          l(
            'Step 3: A patient on indirect calorimetry exhibits a measured resting RQ of 0.74, indicating predominantly lipid fuel combustion consistent with prolonged fasting or ketogenic adaptation.',
            'ধাপ ৩: পরোক্ষ ক্যালোরিমেট্রিতে রোগীর পরিমাপকৃত আরকিউ ০.৭৪ পাওয়া গেলে তা নিশ্চিত করে যে কোষে প্রধানত চর্বি জারিত হচ্ছে, যা দীর্ঘ উপবাস বা কিটোজেনিক অবস্থার পরিচায়ক।'
          ),
        ],
        conclusion: l(
          'RQ provides an objective window into whole-body substrate partition without requiring invasive biopsy.',
          'টিস্যু বায়োপসি ছাড়াই সম্পূর্ণ দেহের পুষ্টি উপাদান জারণের অনুপাত মূল্যায়নে শ্বসন অনুপাত একটি নির্ভরযোগ্য অ-আক্রমণাত্মক পরিমাপক।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Which single organ system accounts for the greatest proportion of Basal Metabolic Rate relative to its anatomical weight?',
          'শারীরবৃত্তীয় ওজনের অনুপাতে কোন অঙ্গতন্ত্রটি বেসাল মেটাবলিক রেটে সর্বোচ্চ শক্তির অংশ ব্যয় করে?'
        ),
        answer: l(
          'The brain, liver, heart, and kidneys together constitute less than 6% of total body mass, yet they account for approximately 60% to 70% of resting metabolic expenditure due to continuous ion pumping, protein synthesis, and active transport.',
          'মস্তিষ্ক, যকৃত, হৃৎপিণ্ড এবং বৃক্ক দেহের মোট ভরের ৬ শতাংশেরও কম হওয়া সত্ত্বেও অবিরাম সোডিয়াম-পটাশিয়াম পাম্পিং, প্রোটিন তৈরি এবং সক্রিয় পরিবহনের কারণে বিশ্রামকালীন বিপাকের ৬০ থেকে ৭০ শতাংশ খরচ করে।'
        ),
      },
      {
        question: l(
          'Why does protein ingestion produce a significantly higher Thermic Effect of Food (TEF) than dietary fat or carbohydrate?',
          'খাদ্যের প্রোটিন গ্রহণ কেন চর্বি বা শর্করার তুলনায় উল্লেখযোগ্যভাবে উচ্চ তাপীয় প্রভাব (TEF) তৈরি করে?'
        ),
        answer: l(
          'Dietary protein exhibits a TEF of 20% to 30% of ingested energy because peptide bond cleavage, active amino acid transport, hepatic deamination, urea cycle synthesis, and gluconeogenesis demand substantial stoichiometric ATP investment.',
          'খাদ্যের প্রোটিনের তাপীয় প্রভাব ২০% থেকে ৩০% পর্যন্ত হয়, কারণ পেপটাইড বন্ধন ভাঙা, অ্যামিনো অ্যাসিড সক্রিয় পরিবহন, যকৃতে ডিঅ্যামিনেশন, ইউরিয়া চক্র এবং গ্লুকোনিওজেনেসিসে বিপুল পরিমাণ এটিপি খরচ হয়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'energy-balance-tdee-breakdown',
    title: l(
      'Interactive TDEE Architectural Decomposition: Energetic Partitions',
      'ইন্টারেক্টিভ TDEE শক্তি ব্যয়ের উপাদান বিভাজন রূপরেখা'
    ),
    description: l(
      'Inspect the four discrete physiological partitions of human Total Daily Energy Expenditure and evaluate how hormonal and behavioural factors modulate daily caloric flux.',
      'মানবদেহের মোট দৈনিক শক্তি ব্যয়ের চারটি সুনির্দিষ্ট শারীরবৃত্তীয় অংশ পরীক্ষা করুন এবং হরমোন ও আচরণগত উপাদান কীভাবে শক্তির প্রবাহ নিয়ন্ত্রণ করে তা পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Representative population averages for a healthy sedentary adult; actual percentage allocations shift substantially with athletic training, ambient temperature, and metabolic adaptation.',
      'সুস্থ আসীন প্রাপ্তবয়স্ক ব্যক্তির জন্য আদর্শ গড় মান; খেলোয়াড়দের নিবিড় প্রশিক্ষণ, পারিপার্শ্বিক তাপমাত্রা ও বিপাকীয় অভিযোজনে এই শতাংশ ব্যাপকভাবে পরিবর্তিত হতে পারে।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'bmr-rmr-node',
        label: l('Basal / Resting Metabolic Rate (BMR: ~60–70%)', 'বেসাল ও বিশ্রামকালীন বিপাকীয় হার (BMR: ~৬০–৭০%)'),
        description: l(
          'Obligate energetic cost of cellular homeostatic processes, including Na+/K+-ATPase pumping, transcription, mitochondrial proton leak, cardiac contraction, and renal filtration.',
          'কোষীয় ভারসাম্যের অপরিহার্য শক্তি ব্যয়, যার মধ্যে সোডিয়াম-পটাশিয়াম পাম্প, প্রোটিন সংশ্লেষ, মাইটোকন্ড্রিয়াল প্রোটন লিকেজ, হৃৎস্পন্দন এবং বৃক্কের পরিস্রাবণ অন্তর্ভুক্ত।'
        ),
        details: l(
          'Skeletal muscle and visceral organs represent the primary drivers. Fat-free mass (FFM) explains over 70% of inter-individual variation in BMR.',
          'চর্বিহীন দৈহিক ভর (FFM) ব্যক্তিভেদে বিএমআর পার্থক্যের ৭০ শতাংশের বেশি ব্যাখ্যা করে। যকৃত ও মস্তিষ্ক একাই উল্লেখযোগ্য ক্যালোরি খরচ করে।'
        ),
        sectionId: 'structure',
        color: '#059669',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'tef-node',
        label: l('Thermic Effect of Food (TEF: ~8–10%)', 'খাদ্যের তাপীয় প্রভাব (TEF: ~৮–১০%)'),
        description: l(
          'Obligatory and facultative energy cost of digesting, absorbing, transporting, metabolizing, and storing ingested macronutrients.',
          'গৃহীত পুষ্টি উপাদান পরিপাক, শোষণ, পরিবহন, রাসায়নিক রূপান্তর এবং কোষে জমা করার জন্য প্রয়োজনীয় বাধ্যতামূলক ও ঐচ্ছিক শক্তি ব্যয়।'
        ),
        details: l(
          'Macronutrient TEF values: Protein = 20–30%, Carbohydrate = 5–10%, Dietary Fat = 0–3%. Alcohol exhibits an intermediate TEF of ~15–20%.',
          'ম্যাক্রোনিউট্রিয়েন্ট ভিত্তিক টিইএফ: প্রোটিন ২০-৩০%, কার্বোহাইড্রেট ৫-১০%, এবং চর্বি ০-৩%। মিশ্র খাবারে সাধারণত গড়ে ১০% শক্তি খরচ হয়।'
        ),
        sectionId: 'mechanism',
        color: '#10b981',
        svgCoords: { x: 25, y: 95, width: 310, height: 48 },
      },
      {
        id: 'neat-node',
        label: l('Non-Exercise Activity Thermogenesis (NEAT: ~15–20%)', 'নন-এক্সারসাইজ অ্যাক্টিভিটি থার্মোজেনেসিস (NEAT: ~১৫–২০%)'),
        description: l(
          'Energetic expenditure of all spontaneous and incidental physical movements outside of sleeping, eating, and intentional sports exercise.',
          'ঘুম, আহার এবং পরিকল্পিত খেলাধুলা ব্যতীত সারাদিনের যাবতীয় স্বাভাবিক চলাফেরা, দাঁড়িয়ে থাকা, সিঁড়ি বেয়ে ওঠা ও অস্থিরতার শক্তি ব্যয়।'
        ),
        details: l(
          'NEAT is the most variable component of TDEE between free-living humans, differing by up to 2,000 kcal/day between sedentary and highly active occupations.',
          'মুক্ত জীবনযাত্রায় টিইএফ সবচেয়ে পরিবর্তনশীল অংশ, যা ব্যক্তিভেদে এবং পেশাভেদে দৈনিক ২০০০ কিলোক্যালরি পর্যন্ত পরিবর্তিত হতে পারে।'
        ),
        sectionId: 'mechanism',
        color: '#34d399',
        svgCoords: { x: 25, y: 155, width: 310, height: 48 },
      },
      {
        id: 'eat-node',
        label: l('Exercise Activity Thermogenesis (EAT: ~0–15%)', 'পরিকল্পিত ব্যায়ামকালীন শক্তি ব্যয় (EAT: ~০–১৫%)'),
        description: l(
          'Caloric expenditure during structured physical conditioning, athletic training, competitive athletics, and volitional cardiorespiratory exercise.',
          'পরিকল্পিত শরীরচর্চা, দৌড়ানো, সাঁতার কাটা, ভারী ওজন তোলা এবং খেলাধুলার সময় পেশির সংকোচনে ব্যয়িত ঐচ্ছিক ক্যালোরি।'
        ),
        details: l(
          'While critical for cardiorespiratory fitness and glycemic control, EAT constitutes 0% in strictly sedentary adults and up to 30–50% in elite endurance athletes.',
          'হৃদযন্ত্রের সক্ষমতা ও ইনসুলিন সংবেদনশীলতায় অপরিহার্য হলেও আসীন ব্যক্তিতে এটি শূন্যের কাছাকাছি, তবে পেশাদার খেলোয়াড়দের ক্ষেত্রে ৩০-৫০% হতে পারে।'
        ),
        sectionId: 'mechanism',
        color: '#6ee7b7',
        svgCoords: { x: 25, y: 215, width: 310, height: 48 },
      },
      {
        id: 'metabolic-adaptation-node',
        label: l('Metabolic Adaptation / Adaptive Thermogenesis', 'বিপাকীয় অভিযোজন ও অ্যাডাপ্টিভ থার্মোজেনেসিস'),
        description: l(
          'Disproportionate depression of resting metabolic rate below that predicted by loss of fat-free mass and fat mass during chronic negative energy balance.',
          'দীর্ঘমেয়াদী শক্তি ঘাটতি বা ওজন হ্রাসের সময় চর্বিহীন ভর কমে যাওয়ার প্রত্যাশিত অনুপাতের চেয়েও অতিরিক্ত হারে বিপাকীয় হার হ্রাস পাওয়া।'
        ),
        details: l(
          'Regulated by neuroendocrine cascades: suppressed leptin, triiodothyronine (T3), and sympathetic nervous system tone, conserving survival energy.',
          'লেপটিন ও থাইরয়েড হরমোন (T3) হ্রাস এবং সিম্প্যাথেটিক স্নায়ুতন্ত্রের শিথিলতার মাধ্যমে দেহ শক্তি বাঁচিয়ে বেঁচে থাকার প্রতিরক্ষামূলক ব্যবস্থা নেয়।'
        ),
        sectionId: 'integration',
        color: '#047857',
        svgCoords: { x: 25, y: 275, width: 310, height: 48 },
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'A sequential schematic illustrating how dietary gross energy is partitioned into digestible, metabolizable, and net energetic fractions for maintenance and physical work.',
      'খাদ্যের স্থূল শক্তি কীভাবে ধাপে ধাপে পরিপাকযোগ্য, বিপাকযোগ্য এবং নিট শক্তিতে রূপান্তরিত হয়ে দৈহিক কাজ ও জীবনধারণে ব্যবহৃত হয় তার ক্রমান্বয়িক রূপরেখা।'
    ),
    steps: [
      l(
        'Step 1: Gross Chemical Energy Intake represents total caloric bomb-calorimetry value ingested in food.',
        'ধাপ ১: খাদ্যের স্থূল রাসায়নিক শক্তি গ্রহণ বলতে বোম্ব ক্যালোরিমেট্রিতে পরিমাপকৃত মোট খাদ্যের ক্যালোরি মানকে বোঝায়।'
      ),
      l(
        'Step 2: Fecal Energy Loss occurs via unabsorbed macronutrients and microbial biomass, leaving Digestible Energy.',
        'ধাপ ২: মলের মাধ্যমে অপাচ্য খাদ্য ও অণুজীবের শক্তি অপসারিত হলে অবশিষ্ট থাকে পরিপাকযোগ্য শক্তি।'
      ),
      l(
        'Step 3: Urinary and Gaseous Energy Loss removes urea and cutaneous nitrogenous wastes, leaving Metabolizable Energy.',
        'ধাপ ৩: মূত্র ও গ্যাসের মাধ্যমে নাইট্রোজেনাস বর্জ্য অপসারিত হলে অবশিষ্ট থাকে কোষের জন্য ব্যবহারযোগ্য বিপাকীয় শক্তি।'
      ),
      l(
        'Step 4: Thermic Effect of Food (dietary-induced heat) is dissipated during nutrient handling, leaving Net Energy for tissue maintenance and activity.',
        'ধাপ ৪: খাদ্যের পরিপাক ও পরিবহনে তাপীয় শক্তি নির্গত হওয়ার পর নিট শক্তি হিসেবে কোষের রক্ষণাবেক্ষণ ও দৈহিক কাজে ব্যবহৃত হয়।'
      ),
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Thermodynamic Foundations of Human Energy Balance', 'মানবদেহের শক্তি ভারসাম্যের তাপগতিবিদ্যাগত ভিত্তি'),
          paragraphs: [
            l(
              'The human body obeys the First Law of Thermodynamics: energy can neither be created nor destroyed, but only transformed from one form to another. Dietary macronutrients (carbohydrates, proteins, and fats) contain chemical bond energy that is released during intracellular oxidation to drive mechanical work, chemical synthesis, and body temperature regulation.',
              'মানবদেহ তাপগতিবিদ্যার প্রথম সূত্রকে অক্ষরে অক্ষরে অনুসরণ করে: শক্তি সৃষ্টি বা ধ্বংস করা যায় না, কেবল এক রূপ থেকে অন্য রূপে পরিবর্তিত হয়। খাদ্যের ম্যাক্রোনিউট্রিয়েন্টসমূহের রাসায়নিক বন্ধন শক্তি কোষীয় জারণের সময় নির্গত হয়ে যান্ত্রিক কাজ, রাসায়নিক সংশ্লেষণ এবং দেহের তাপমাত্রা নিয়ন্ত্রণে ব্যবহৃত হয়।'
            ),
            l(
              'When dietary energy intake equals total daily energy expenditure over time, the body remains in neutral energy balance and body mass is stabilized. If caloric intake exceeds expenditure, the excess energy is deposited into glycogen and adipose tissue triacylglycerols; conversely, when expenditure exceeds intake, endogenous fuel stores are catabolized to sustain cellular life.',
              'যখন খাদ্য থেকে গৃহীত শক্তি এবং মোট দৈনিক শক্তি ব্যয় দীর্ঘ সময় ধরে সমান থাকে, তখন দেহ নিরপেক্ষ শক্তি ভারসাম্যে থাকে এবং ওজন স্থিতিশীল থাকে। গৃহীত ক্যালোরি খরচের চেয়ে বেশি হলে উদ্বৃত্ত শক্তি গ্লাইকোজেন ও চর্বি কোষে ট্রাইগ্লিসারাইড হিসেবে জমা হয়; পক্ষান্তরে ঘাটতি হলে দেহের নিজস্ব সঞ্চয় ভেঙে জীবন ধারণ সম্পন্ন হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Basal & Resting Metabolic Rate: The Cost of Being Alive', 'বেসাল ও বিশ্রামকালীন বিপাকীয় হার: বেঁচে থাকার ন্যূনতম ব্যয়'),
          paragraphs: [
            l(
              'Basal Metabolic Rate (BMR) represents the absolute minimum rate of energy expenditure necessary to keep cells alive and maintain core organ functions while awake and lying quietly in a warm room after a full night of fasting. For most individuals who are not competitive athletes, BMR accounts for 60% to 70% of total daily energy burned.',
              'বেসাল মেটাবলিক রেট (BMR) হলো জাগ্রত অবস্থায় ঘরের স্বাভাবিক তাপমাত্রায় ১২ ঘণ্টা উপবাসের পর শুয়ে থাকা ব্যক্তির কোষ ও প্রধান অঙ্গগুলোকে বাঁচিয়ে রাখার জন্য প্রয়োজনীয় ন্যূনতম শক্তি ব্যয়ের হার। যারা অতিরিক্ত ব্যায়াম করেন না, তাদের ক্ষেত্রে মোট দৈনিক শক্তি ব্যয়ের ৬০ থেকে ৭০ শতাংশই এই বেসাল বিপাকে খরচ হয়।'
            ),
            l(
              'Fat-free mass, which includes skeletal muscle, liver, brain, kidneys, and bone, is the primary biological driver of BMR. Even though the brain, liver, heart, and kidneys constitute less than 6% of total body weight, their rapid biochemical reactions consume over 60% of all basal energy.',
              'চর্বিহীন দৈহিক ভর—যার মধ্যে কঙ্কালপেশি, যকৃত, মস্তিষ্ক, কিডনি ও অস্থি অন্তর্ভুক্ত—বিএমআরের মূল চালিকাশক্তি। মস্তিষ্ক, যকৃত, হৃৎপিণ্ড এবং বৃক্ক দেহের মোট ওজনের মাত্র ৬ শতাংশের কম হওয়া সত্ত্বেও তাদের তীব্র রাসায়নিক তৎপরতার জন্য মোট বেসাল শক্তির ৬০ শতাংশেরও বেশি খরচ করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Thermic Effect of Food & Physical Activity Partitions', 'খাদ্যের তাপীয় প্রভাব ও দৈহিক পরিশ্রমের অংশ'),
          paragraphs: [
            l(
              'Eating food itself requires energy: digesting meals, transporting nutrients across intestinal cells, and storing molecules generates heat, known as the Thermic Effect of Food (TEF). Protein requires the most energy to process (about 20% to 30% of its caloric content), carbohydrates require 5% to 10%, and dietary fats require only 0% to 3%.',
              'খাবার খাওয়ার পরও শরীরের শক্তি খরচ হয়: খাদ্য পরিপাক, অন্ত্রের কোষে পুষ্টি উপাদান পরিবহন এবং রাসায়নিক সঞ্চয় প্রক্রিয়া তাপ তৈরি করে, যাকে খাদ্যের তাপীয় প্রভাব (TEF) বলা হয়। প্রোটিন পরিপাক ও প্রক্রিয়াকরণে সবচেয়ে বেশি শক্তি ব্যয় হয় (প্রায় ২০-৩০%), শর্করার ক্ষেত্রে ৫-১০%, আর চর্বিতে মাত্র ০-৩%।'
            ),
            l(
              'Physical activity expenditure is divided into Non-Exercise Activity Thermogenesis (NEAT) and Exercise Activity Thermogenesis (EAT). NEAT includes walking, typing, working, and changing posture throughout the day, while EAT represents intentional sports and workouts. NEAT is the single most variable component of daily caloric burn between different people.',
              'দৈহিক পরিশ্রমের শক্তি ব্যয়কে নন-এক্সারসাইজ অ্যাক্টিভিটি থার্মোজেনেসিস (NEAT) এবং ব্যায়ামজনিত শক্তি ব্যয়ে (EAT) ভাগ করা হয়। এনইএটি হলো সারাদিনের স্বাভাবিক হাঁটাচলা, টাইপ করা, দাঁড়িয়ে কাজ করা ও বসার ভঙ্গি, আর ইএটি হলো পরিকল্পিত শরীরচর্চা। মানুষের দৈনন্দিন শক্তি ব্যয়ের পার্থক্যে এনইএটি সবচেয়ে বড় ভূমিকা রাখে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Indirect Calorimetry and Respiratory Quotient', 'পরোক্ষ ক্যালোরিমেট্রি এবং শ্বসন অনুপাত'),
          paragraphs: [
            l(
              'Scientists measure human energy expenditure using indirect calorimetry, which tracks how much oxygen a person consumes and how much carbon dioxide they exhale. Because each fuel type requires a specific amount of oxygen to burn and produces a known amount of carbon dioxide, gas exchange precisely reveals energy expenditure.',
              'বিজ্ঞানীরা পরোক্ষ ক্যালোরিমেট্রির মাধ্যমে মানুষের শক্তি ব্যয় পরিমাপ করেন, যেখানে গৃহীত অক্সিজেন এবং নির্গত কার্বন ডাই অক্সাইডের সুনির্দিষ্ট পরিমাণ মাপা হয়। প্রতিটি ম্যাক্রোনিউট্রিয়েন্ট পোড়াতে নির্দিষ্ট পরিমাণ অক্সিজেন লাগে এবং নির্দিষ্ট কার্বন ডাই অক্সাইড তৈরি হয়, ফলে গ্যাসের অনুপাত পর্যবেক্ষণ করে শক্তি খরচের হিসাব বের করা যায়।'
            ),
            l(
              'The ratio of carbon dioxide produced to oxygen consumed is called the Respiratory Quotient (RQ). When a person burns pure carbohydrate, their RQ is 1.0; when burning pure dietary fat, the RQ drops to 0.70. A mixed daily diet typically yields an RQ around 0.82 to 0.85.',
              'নির্গমনকৃত কার্বন ডাই অক্সাইড এবং গৃহীত অক্সিজেনের অনুপাতকে শ্বসন অনুপাত (RQ) বলে। যখন কোষে কেবল শর্করা পোড়ে, তখন আরকিউ ১.০ থাকে; আর যখন কেবল চর্বি পোড়ে, তখন আরকিউ নেমে ০.৭০ হয়। স্বাভাবিক মিশ্র খাবারে মানুষের দৈনিক আরকিউ সাধারণত ০.৮২ থেকে ০.৮৫ এর মধ্যে অবস্থান করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Assessment & Energy Logic', 'মৌলিক মূল্যায়ন ও শক্তি হিসাব'),
          paragraphs: [
            l(
              'When calculating energy balance, one must realize that the body dynamically adapts to changes in intake. Sustained caloric restriction leads to compensatory reductions in both BMR and spontaneous NEAT movements, demonstrating that human metabolism is an interactive biological system rather than a static mathematical formula.',
              'শক্তি ভারসাম্য মূল্যায়নের সময় মনে রাখতে হবে যে দেহ ক্যালোরি পরিবর্তনের সাথে সাথে গতিশীলভাবে খাপ খাইয়ে নেয়। দীর্ঘমেয়াদী খাদ্য ঘাটতিতে দেহের বিএমআর এবং স্বাভাবিক অনিচ্ছাকৃত নড়াচড়া (NEAT) দুটিই কমে যায়, যা প্রমাণ করে মানুষের বিপাক ব্যবস্থা একটি জীবন্ত অভিযোজনশীল নেটওয়ার্ক, স্থির গাণিতিক হিসাব নয়।'
            ),
          ],
          bullets: [
            l('Energy balance = Energy Intake minus Energy Expenditure.', 'শক্তি ভারসাম্য = গৃহীত শক্তি বিয়োগ মোট ব্যয়িত শক্তি।'),
            l('BMR is the largest component of TDEE in sedentary individuals (~60–70%).', 'আসীন জীবনযাত্রার মানুষের ক্ষেত্রে বিএমআর হলো মোট ব্যয়ের বৃহত্তম অংশ (~৬০–৭০%)।'),
            l('NEAT varies widely between individuals and occupations.', 'এনইএটি ব্যক্তি এবং পেশাভেদে সবচেয়ে বেশি কম-বেশি হয়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Educational Summary', 'মূল শিক্ষা ও শিক্ষামূলক সারাংশ'),
          paragraphs: [
            l(
              'Total Daily Energy Expenditure is composed of four distinct compartments: BMR, TEF, NEAT, and EAT. Maintaining body weight requires energy intake matching expenditure. Indirect calorimetry and RQ allow clinicians to non-invasively quantify both energy expenditure and fuel substrate selection.',
              'মোট দৈনিক শক্তি ব্যয় চারটি পৃথক উপাদান নিয়ে গঠিত: BMR, TEF, NEAT এবং EAT। দেহের স্বাভাবিক ওজন ধরে রাখতে গৃহীত ক্যালোরির সাথে ব্যয়ের সামঞ্জস্য থাকা আবশ্যক। পরোক্ষ ক্যালোরিমেট্রি এবং আরকিউ চিকিৎসকদের শরীরে শক্তি খরচ ও জ্বালানি ব্যবহারের সঠিক চিত্র তুলে ধরতে সাহায্য করে।'
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
          heading: l('Thermodynamic Architecture of Energy Balance in Human Physiology', 'মানব শারীরবৃত্তে শক্তি ভারসাম্যের তাপগতিবিদ্যাগত কাঠামো'),
          paragraphs: [
            l(
              'The thermodynamic energy balance equation states that Rate of Change in Body Energy Stores (dE/dt) equals Rate of Metabolizable Energy Intake (Ein) minus Total Energy Expenditure (Eout) [1, 2]. Gross dietary energy represents the enthalpy of combustion determined by bomb calorimetry, but physiological metabolizable energy accounts for fecal and urinary losses: 4 kcal/g for carbohydrates, 4 kcal/g for protein, 9 kcal/g for triacylglycerols, and 7 kcal/g for ethanol [1].',
              'তাপগতিবিদ্যাগত শক্তি ভারসাম্য সমীকরণ অনুসারে দেহের শক্তি সঞ্চয়ের পরিবর্তনের হার (dE/dt) হলো বিপাকযোগ্য শক্তি গ্রহণ (Ein) এবং মোট শক্তি ব্যয়ের (Eout) বিয়োগফল [1, 2]। বোম্ব ক্যালোরিমেট্রিতে খাদ্যের স্থূল শক্তি নির্ধারিত হলেও মল ও মূত্রের অপচয় বাদ দিয়ে বিপাকযোগ্য শক্তি হিসাব করা হয়: শর্করার জন্য ৪ কিলোক্যালরি/গ্রাম, প্রোটিনের জন্য ৪ কিলোক্যালরি/গ্রাম, চর্বির জন্য ৯ কিলোক্যালরি/গ্রাম এবং অ্যালকোহলের জন্য ৭ কিলোক্যালরি/গ্রাম [1]।'
            ),
            l(
              'Energy balance is rarely in instantaneous zero-equilibrium over minutes or hours; instead, humans maintain dynamic homeostasis over days to weeks via neuroendocrine feedback loops [2]. Circulating signals such as insulin, leptin, and ghrelin continuously inform hypothalamic nuclei of adipose reserves and gut nutrient influx, regulating appetite and autonomic output to modulate metabolic flux [1, 4].',
              'শক্তি ভারসাম্য কখনো মুহূর্তের মধ্যে নিখুঁত শূন্য-সমতায় থাকে না; বরং মানুষ স্নায়ু ও হরমোনীয় ফিডব্যাক লুপের মাধ্যমে কয়েক দিন বা সপ্তাহের চক্রে গতিশীল ভারসাম্য বজায় রাখে [2]। ইনসুলিন, লেপটিন ও ঘ্রেলিন ক্রমাগত হাইপোথ্যালামিক কেন্দ্রে চর্বির সঞ্চয় ও পুষ্টির প্রবেশ সম্পর্কে সংকেত পাঠায়, যা ক্ষুধা এবং স্বায়ত্তশাসিত স্নায়ুতন্ত্রের মাধ্যমে বিপাকীয় প্রবাহ নিয়ন্ত্রণ করে [1, 4]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Basal & Resting Metabolic Rate Determinants: The Energetics of Organs', 'বেসাল ও বিশ্রামকালীন বিপাকীয় হারের নিয়ন্ত্রক: অঙ্গভিত্তিক শক্তি ব্যয়'),
          paragraphs: [
            l(
              'Basal Metabolic Rate is tightly predicted by body composition, with Fat-Free Mass (FFM) accounting for 60% to 80% of variance between individuals [2, 3]. Organ-level respirometry demonstrates that resting energy expenditure is heavily concentrated in visceral tissues: the liver consumes ~27%, the brain ~19%, the heart ~7%, the kidneys ~10%, skeletal muscle ~18%, and adipose tissue ~19% of resting expenditure, despite adipose comprising 20% to 35% of total mass [3].',
              'বেসাল মেটাবলিক রেট প্রধানত দেহের গঠনের ওপর নির্ভরশীল, যেখানে চর্বিহীন দৈহিক ভর (FFM) ব্যক্তিভেদে ৬০% থেকে ৮০% পার্থক্যের কারণ [2, 3]। অঙ্গভিত্তিক শ্বসন পরীক্ষা দেখায় যে বিশ্রামকালীন শক্তি ব্যয় অভ্যন্তরীণ অঙ্গে ঘনীভূত: যকৃত ব্যয় করে প্রায় ২৭%, মস্তিষ্ক ১৯%, হৃৎপিণ্ড ৭%, বৃক্ক ১০%, কঙ্কালপেশি ১৮% এবং চর্বি কলা ব্যয় করে প্রায় ১৯%, যদিও চর্বি কলার ভর দেহের ২০-৩৫% পর্যন্ত হতে পারে [3]।'
            ),
            l(
              'Biochemically, cellular BMR is driven by ATP-consuming ion transport mechanisms (principally Na+/K+-ATPase and Ca2+-ATPase accounting for ~25–30%), continuous peptide elongation and protein turnover (~20–25%), and mitochondrial proton leakage through adenine nucleotide translocase and uncoupling proteins (~20–25%) [1, 3].',
              'আণবিক স্তরে কোষীয় বিএমআর নিয়ন্ত্রিত হয় এটিপি-নির্ভর আয়ন পাম্পের মাধ্যমে (প্রধানত সোডিয়াম-পটাশিয়াম পাম্প ও ক্যালসিয়াম পাম্প ২৫-৩০% ব্যয় করে), নিরবচ্ছিন্ন প্রোটিন সংশ্লেষণ ও পুনর্গঠন (২০-২৫%) এবং মাইটোকন্ড্রিয়াল ঝিল্লির মধ্য দিয়ে অনিয়ন্ত্রিত প্রোটন লিকেজের ফলে (২০-২৫%) [1, 3]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Thermic Effect of Food & Physical Activity Dynamics (TEF, NEAT, EAT)', 'খাদ্যের তাপীয় প্রভাব ও শারীরিক পরিশ্রমের গতিবিদ্যা (TEF, NEAT, EAT)'),
          paragraphs: [
            l(
              'The Thermic Effect of Food represents the obligatory metabolic cost of gastrointestinal motility, active enterocyte brush-border absorption, and hepatic nutrient processing, plus a facultative component driven by sympathetic nervous system activation [2, 3]. The stoichiometric cost of synthesizing peptide bonds, deaminating amino acids, and synthesizing urea explains why protein TEF (20–30%) drastically exceeds carbohydrate TEF (5–10%) and lipid TEF (0–3%) [3].',
              'খাদ্যের তাপীয় প্রভাব (TEF) হলো পরিপাকনালির গতিশীলতা, অন্ত্রীয় কোষে সক্রিয় শোষণ এবং যকৃতের প্রক্রিয়াকরণের জন্য প্রয়োজনীয় বাধ্যতামূলক বিপাকীয় ব্যয়, যার সাথে সিম্প্যাথেটিক স্নায়ুতন্ত্রের সংকেত যুক্ত থাকে [2, 3]। পেপটাইড বন্ধন সংশ্লেষ, ডিঅ্যামিনেশন এবং ইউরিয়া চক্রের উচ্চ রাসায়নিক খরচের কারণেই প্রোটিনের টিইএফ (২০-৩০%) কার্বোহাইড্রেট (৫-১০%) এবং চর্বির (০-৩%) তুলনায় অনেক বেশি হয় [3]।'
            ),
            l(
              'Physical activity thermogenesis comprises EAT and NEAT [4]. NEAT encompasses all non-exercise movement including occupational physical work, ambulation, fidgeting, and the maintenance of postural muscle tone. Human overfeeding trials reveal that increases in spontaneous NEAT protect certain individuals against fat accumulation, whereas decreases in NEAT facilitate weight gain during periods of energy abundance [4].',
              'শারীরিক পরিশ্রমজনিত শক্তি ব্যয় ইএটি এবং এনইএটি নিয়ে গঠিত [4]। এনইএটি হলো সারাদিনের পেশাগত কাজ, হাঁটাচলা এবং শারীরিক অঙ্গভঙ্গি বজায় রাখার যাবতীয় নড়াচড়া। অতিরিক্ত খাবার গ্রহণের গবেষণায় দেখা গেছে যে স্বতঃস্ফূর্ত এনইএটি বৃদ্ধি কিছু ব্যক্তিকে চর্বি জমা থেকে রক্ষা করে, পক্ষান্তরে আসীন জীবনযাত্রায় এনইএটি হ্রাস ওজন বৃদ্ধিতে সহায়ক হয় [4]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Indirect Calorimetry, Weir Equation & Metabolic Adaptation', 'পরোক্ষ ক্যালোরিমেট্রি, উইয়ার সমীকরণ ও বিপাকীয় অভিযোজন'),
          paragraphs: [
            l(
              'Indirect calorimetry quantifies metabolic rate via open-circuit spirometry by measuring oxygen consumption (VO2, L/min) and carbon dioxide expiration (VCO2, L/min) [2]. The consolidated Weir equation calculates Energy Expenditure (kcal/day) = [3.941 x VO2 (L/day)] + [1.106 x VCO2 (L/day)] - [2.17 x Urinary Nitrogen (g/day)] [2, 3]. The Respiratory Quotient (VCO2 / VO2) distinguishes substrate partitioning: 1.00 for glucose, 0.707 for palmitate, and ~0.82 for pure protein [3].',
              'পরোক্ষ ক্যালোরিমেট্রি ওপেন-সার্কিট স্পাইরোমেট্রির মাধ্যমে অক্সিজেন গ্রহণ (VO2) এবং কার্বন ডাই অক্সাইড নির্গমন (VCO2) পরিমাপ করে শক্তি ব্যয়ের হিসাব দেয় [2]। সুপ্রতিষ্ঠিত উইয়ার সূত্র অনুসারে দৈনিক শক্তি ব্যয় (kcal/day) = [৩.৯৪১ x VO2] + [১.১০৬ x VCO2] - [২.১৭ x মূত্রের নাইট্রোজেন] [2, 3]। শ্বসন অনুপাত (VCO2 / VO2) জ্বালানির ধরন নির্ধারণ করে: গ্লুকোজের জন্য ১.০০, পামিটেটের জন্য ০.৭০৭ এবং বিশুদ্ধ প্রোটিনের জন্য প্রায় ০.৮২ [3]।'
            ),
            l(
              'Prolonged hypocaloric dieting induces Adaptive Thermogenesis: a reduction in resting and non-resting energy expenditure that exceeds what is expected from the measured reduction in fat mass and fat-free mass [1, 4]. Suppressed thyroid hormone triiodothyronine (T3), plummeting adipocyte leptin, and diminished sympathovagal tone lower mitochondrial uncoupling, defending energy reserves against perceived starvation [1, 4].',
              'দীর্ঘমেয়াদী কম ক্যালোরির খাদ্যাভ্যাসে অ্যাডাপ্টিভ থার্মোজেনেসিস দেখা দেয়: অর্থাৎ চর্বি ও চর্বিহীন ভর কমার ফলে যেটুকু বিপাকীয় হার কমার কথা ছিল, শরীর তার চেয়েও অতিরিক্ত হারে খরচ কমিয়ে দেয় [1, 4]। থাইরয়েড হরমোন (T3) হ্রাস, লেপটিনের পতন এবং সিম্প্যাথেটিক স্নায়ুতন্ত্রের শিথিলতা মাইটোকন্ড্রিয়াল শক্তি খরচ কমিয়ে অনাহারের বিরুদ্ধে আত্মরক্ষা করে [1, 4]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Reasoning: Predicting Energy Needs in Sickness and Health', 'ক্লিনিক্যাল বিশ্লেষণ: স্বাস্থ্য ও অসুস্থতায় শক্তি চাহিদা নির্ধারণ'),
          paragraphs: [
            l(
              'In clinical practice, when indirect calorimetry is unavailable, validated predictive equations estimate resting energy needs. The Mifflin-St Jeor equation exhibits the highest accuracy in ambulatory individuals with and without obesity [2]. In critical illness, trauma, sepsis, or burns, stress factors ranging from 1.2 to 2.0 must be applied to account for hypermetabolic cytokine cascades and accelerated protein catabolism [2, 3].',
              'ক্লিনিক্যাল চিকিৎসায় পরোক্ষ ক্যালোরিমেট্রি সহজলভ্য না হলে প্রমিত সূত্রের সাহায্যে শক্তি চাহিদা হিসাব করা হয়। মিফলিন-সেন্ট জিওর সূত্রটি সাধারণ ও স্থূল ব্যক্তিদের ক্ষেত্রে সর্বোচ্চ নির্ভুলতা প্রদর্শন করে [2]। তবে জটিল অসুস্থতা, ট্রমা, সেপসিস বা আগুনে পোড়া রোগীদের ক্ষেত্রে সাইটোকাইন সংকেত ও প্রোটিন ভাঙনের তীব্রতার কারণে ১.২ থেকে ২.০ পর্যন্ত স্ট্রেস ফ্যাক্টর গুণ করতে হয় [2, 3]।'
            ),
          ],
          bullets: [
            l('Mifflin-St Jeor formula: RMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in yr) + 5 [men] or - 161 [women].', 'মিফলিন সূত্র: RMR = (১০ x ওজন কেজি) + (৬.২৫ x উচ্চতা সেমি) - (৫ x বয়স বছর) + ৫ [পুরুষ] অথবা - ১৬১ [নারী]।'),
            l('Physical Activity Level (PAL): Sedentary = 1.2–1.3, Moderately active = 1.6–1.7, Very active = 1.9–2.2.', 'শারীরিক পরিশ্রম সূচক (PAL): আসীন = ১.২–১.৩, মধ্যম সক্রিয় = ১.৬–১.৭, অত্যন্ত সক্রিয় = ১.৯–২.২।'),
            l('Metabolic adaptation reduces TDEE beyond simple mass loss during weight reduction.', 'ওজন কমানোর সময় বিপাকীয় অভিযোজন কেবল ভর কমার চেয়েও বেশি হারে মোট শক্তি ব্যয় কমিয়ে দেয়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Academic Review', 'মূল শিক্ষা ও একাডেমিক সারাংশ'),
          paragraphs: [
            l(
              'Energy balance is an integrated neuroendocrine system governed by physical laws and molecular feedback loops. BMR constitutes the major portion of TDEE and is determined by metabolically active fat-free mass. Indirect calorimetry uses oxygen uptake and carbon dioxide expiration to compute energy expenditure and substrate combustion.',
              'শক্তি ভারসাম্য হলো ভৌত সূত্র এবং আণবিক সংকেত দ্বারা পরিচালিত একটি সমন্বিত নিউরোএন্ডোক্রাইন ব্যবস্থা। বিএমআর মোট ব্যয়ের সিংহভাগ গঠন করে এবং তা চর্বিহীন সক্রিয় কোষীয় ভরের ওপর নির্ভরশীল। পরোক্ষ ক্যালোরিমেট্রি গ্যাস বিনিময়ের সাহায্যে শক্তি খরচ এবং কোষে জারিত পুষ্টির সঠিক অনুপাত নির্ধারণ করে।',
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
          heading: l('Advanced Systems Dynamics: Energy Flux, Metabolic Plasticity & Seta-Point Models', 'উচ্চতর সিস্টেম গতিবিদ্যা: শক্তি প্রবাহ, বিপাকীয় প্লাস্টিসিটি ও সেট-পয়েন্ট মডেল'),
          paragraphs: [
            l(
              'Contemporary nutritional research supersedes simplistic static energy balance models with dynamic mathematical systems biology [1, 4]. Kevin Hall and colleagues demonstrated that because fat-free mass and fat mass have distinct energetic costs of maintenance and synthesis, changes in body weight alter expenditure non-linearly over time [1, 4]. Energy expenditure does not drop instantaneously to a fixed new value; rather, neuroendocrine adaptation dynamically adjusts energy flux to defend fat stores [1, 4].',
              'আধুনিক পুষ্টিবিজ্ঞান গবেষণা সরল রৈখিক শক্তি ভারসাম্যের ধারণাকে গতিশীল গাণিতিক সিস্টেম বায়োলজি দ্বারা প্রতিস্থাপন করেছে [1, 4]। কেভিন হল এবং সহকর্মীরা দেখিয়েছেন যে চর্বিহীন ভর ও চর্বি কলার রক্ষণাবেক্ষণ ও সংশ্লেষণের শক্তি খরচ সম্পূর্ণ ভিন্ন হওয়ায় ওজন পরিবর্তনের সাথে সাথে শক্তি ব্যয়ের হার অ-রৈখিকভাবে পরিবর্তিত হয় [1, 4]। শক্তি ব্যয় কোনো নির্দিষ্ট বিন্দুতে হঠাৎ স্থির হয় না, বরং নিউরোএন্ডোক্রাইন অভিযোজন ক্রমাগত শক্তির প্রবাহকে সমন্বয় করে চর্বি সঞ্চয়কে রক্ষা করতে সচেষ্ট থাকে [1, 4]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Frontier Research: Constrained Total Energy Expenditure Model & Mitochondrial Uncoupling', 'অত্যাধুনিক গবেষণা: কনস্ট্রেইন্ড মোট শক্তি ব্যয় মডেল ও মাইটোকন্ড্রিয়াল আনকপলিং'),
          paragraphs: [
            l(
              'Herman Pontzer’s Constrained Total Energy Expenditure model provides compelling evolutionary evidence that human daily energy expenditure is tightly bounded within an evolved physiological ceiling [4]. Across diverse populations—from traditional hunter-gatherers (Hadza of Tanzania) to post-industrial Western adults—total daily energy expenditure per unit of fat-free mass remains remarkably constant; beyond moderate activity, the body downregulates baseline immune, reproductive, and inflammatory expenditures to constrain total energy output within physiological tolerance limits [1, 4].',
              'হারম্যান পন্টজারের কনস্ট্রেইন্ড টোটাল এনার্জি এক্সপেন্ডিচার মডেল বৈপ্লবিক বিবর্তনীয় প্রমাণ উপস্থাপন করেছে যে মানুষের দৈনিক শক্তি ব্যয় একটি প্রাকৃতিক শারীরবৃত্তীয় সীমার মধ্যে নিয়ন্ত্রিত থাকে [4]। তানজানিয়ার হাদজা শিকারী-সংগ্রাহক থেকে শুরু করে উন্নত বিশ্বের নগরবাসী পর্যন্ত চর্বিহীন ভরের অনুপাতে মোট দৈনিক শক্তি ব্যয় প্রায় একই রকম থাকে; অতিরিক্ত শারীরিক পরিশ্রমের ক্ষেত্রে দেহ তার ইমিউন, প্রজনন ও প্রদাহজনিত অভ্যন্তরীণ শক্তি ব্যয় কমিয়ে মোট শক্তি নির্গমনকে স্বাভাবিক সীমার মধ্যে আবদ্ধ রাখে [1, 4]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'Which component of Total Daily Energy Expenditure is the single most variable between healthy free-living adults?',
      'সুস্থ মুক্ত জীবনযাত্রার প্রাপ্তবয়স্কদের মধ্যে মোট দৈনিক শক্তি ব্যয়ের কোন উপাদানটি ব্যক্তিভেদে সবচেয়ে বেশি পরিবর্তনশীল?'
    ),
    options: [
      l('Non-Exercise Activity Thermogenesis (NEAT)', 'নন-এক্সারসাইজ অ্যাক্টিভিটি থার্মোজেনেসিস (NEAT)'),
      l('Basal Metabolic Rate (BMR)', 'বেসাল মেটাবলিক রেট (BMR)'),
      l('Thermic Effect of Food (TEF)', 'খাদ্যের তাপীয় প্রভাব (TEF)'),
      l('Obligatory brain glucose oxidation', 'মস্তিষ্কের অপরিহার্য গ্লুকোজ জারণ'),
    ],
    correctIndex: 0,
    explanation: l(
      'NEAT varies by up to 2,000 kcal/day between sedentary and highly active occupations due to spontaneous differences in walking, standing, working, and fidgeting, making it the primary driver of inter-individual expenditure variance.',
      'আসীন ও অত্যন্ত সক্রিয় পেশার মানুষের মধ্যে হাঁটাচলা, দাঁড়িয়ে কাজ করা এবং স্বাভাবিক অস্থিরতার কারণে NEAT দৈনিক ২০০০ কিলোক্যালরি পর্যন্ত পরিবর্তিত হতে পারে, যা ব্যক্তিভেদে মোট ব্যয়ের পার্থক্যের প্রধান কারণ।'
    ),
  },
}
