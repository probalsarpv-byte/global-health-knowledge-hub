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
    doi: '10.3945/ajcn.112.036350',
  },
  {
    id: 'pontzer-constrained-energy',
    authors: 'Herman Pontzer, Ramon Durazo-Arvizu, Lara R. Dugas, Jacob Plange-Rhule, Pascal Bovet, Terrence E. Forrester, et al.',
    title: 'Constrained Total Energy Expenditure and Metabolic Adaptation to Physical Activity in Adult Humans',
    organization: 'Current Biology',
    year: 2016,
    url: 'https://doi.org/10.1016/j.cub.2015.12.046',
    doi: '10.1016/j.cub.2015.12.046',
  },
  {
    id: 'fothergill-metabolic-adaptation',
    authors: 'Erin Fothergill, Juen Guo, Lilian de Jonge, Peter R. Brychta, Rebecca M. Howard, et al.',
    title: 'Persistent metabolic adaptation 6 years after "The Biggest Loser" competition',
    organization: 'Obesity (Silver Spring)',
    year: 2016,
    url: 'https://doi.org/10.1002/oby.21538',
    doi: '10.1002/oby.21538',
  },
]

export const nutrition01EnergyBalanceLesson: LessonTopic = {
  id: 'topic.nutrition.energy-balance-tdee',
  slug: 'energy-balance-tdee',
  version: 2,
  updatedAt: '2026-10-14',
  title: l(
    '01 · Energy Balance, Basal Metabolic Rate & Total Daily Energy Expenditure',
    '০১ · শক্তি ভারসাম্য, বেসাল মেটাবলিক রেট ও মোট দৈনিক শক্তি ব্যয়'
  ),
  summary: l(
    'The thermodynamic foundation of human nutrition: direct and indirect calorimetry, the respiratory quotient, components of Total Daily Energy Expenditure (BMR, TEF, NEAT, EAT), metabolic adaptation, and dynamic energy flux models.',
    'মানব পুষ্টির তাপগতিবিদ্যাগত ভিত্তি: প্রত্যক্ষ ও পরোক্ষ ক্যালোরিমেট্রি, শ্বসন অনুপাত, মোট দৈনিক শক্তি ব্যয়ের প্রধান উপাদান (BMR, TEF, NEAT, EAT), বিপাকীয় অভিযোজন এবং গতিশীল শক্তি প্রবাহ মডেল।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-14',
  objectives: [
    l(
      'Apply the First Law of Thermodynamics to human nutritional physiology, distinguishing positive, neutral, and negative energy balance across tissue storage compartments.',
      'মানব পুষ্টি শারীরবৃত্তে তাপগতিবিদ্যার প্রথম সূত্র প্রয়োগ করতে পারা এবং টিস্যু সঞ্চয়ের ভিত্তিতে ধনাত্মক, ভারসাম্যপূর্ণ ও ঋণাত্মক শক্তি ভারসাম্যের পার্থক্য নিরূপণ করা।'
    ),
    l(
      'Calculate and dissect the four biological components of Total Daily Energy Expenditure (BMR/RMR, TEF, NEAT, and EAT), identifying their organ-specific and cellular metabolic drivers.',
      'মোট দৈনিক শক্তি ব্যয়ের (TDEE) চারটি জৈবিক উপাদান (BMR/RMR, TEF, NEAT এবং EAT) হিসাব ও বিশ্লেষণ করা এবং তাদের অঙ্গভিত্তিক ও কোষীয় বিপাকীয় প্রভাবক শনাক্ত করা।'
    ),
    l(
      'Interpret indirect calorimetry open-circuit respirometry data, utilizing the Respiratory Quotient (RQ) and the consolidated Weir equation to evaluate carbohydrate versus lipid fuel oxidation.',
      'পরোক্ষ ক্যালোরিমেট্রির উন্মুক্ত গ্যাস বিনিময় উপাত্ত ব্যাখ্যা করা এবং শ্বসন অনুপাত (RQ) ও উইয়ার সূত্র ব্যবহার করে শর্করা বনাম চর্বির জ্বালানি জারণ সঠিকভাবে মূল্যায়ন করা।'
    ),
    l(
      'Differentiate static energy balance assumptions from dynamic systems models, evaluating adaptive thermogenesis, neuroendocrine feedback loops, and Pontzer constrained energy expenditure.',
      'স্থির শক্তি ভারসাম্যের অনুমান থেকে গতিশীল সিস্টেম মডেলের পার্থক্য করা এবং অ্যাডাপ্টিভ থার্মোজেনেসিস, নিউরোএন্ডোক্রাইন ফিডব্যাক লুপ ও পন্টজারের কনস্ট্রেইন্ড শক্তি ব্যয় মডেল মূল্যায়ন করা।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.nutrition.macronutrient-digestion'],
  references: energyBalanceRefs,
  evidenceBySection: {
    introduction: ['hall-modern-nutrition-energy', 'krause-nutrition-care-energy'],
    structure: ['krause-nutrition-care-energy', 'gropper-advanced-nutrition-energy'],
    mechanism: ['gropper-advanced-nutrition-energy', 'hall-ajcn-energy-balance-model'],
    integration: ['hall-modern-nutrition-energy', 'pontzer-constrained-energy', 'fothergill-metabolic-adaptation'],
    practice: ['krause-nutrition-care-energy', 'gropper-advanced-nutrition-energy', 'hall-modern-nutrition-energy'],
    takeaways: ['hall-modern-nutrition-energy', 'hall-ajcn-energy-balance-model'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Thermodynamics of Human Energy Balance', '১. মানব শক্তি ভারসাম্যের তাপগতিবিদ্যা'), sectionId: 'introduction' },
      { id: 'sec-bmr', label: l('2. Basal & Resting Metabolic Rate (BMR / RMR)', '২. বেসাল ও বিশ্রামকালীন বিপাকীয় হার (BMR / RMR)'), sectionId: 'structure' },
      { id: 'sec-tef-neat', label: l('3. Thermic Effect of Food (TEF) & Physical Activity (NEAT / EAT)', '৩. খাদ্যের তাপীয় প্রভাব (TEF) ও দৈহিক পরিশ্রম (NEAT / EAT)'), sectionId: 'mechanism' },
      { id: 'sec-adaptation', label: l('4. Indirect Calorimetry, Respiratory Quotient & Metabolic Adaptation', '৪. পরোক্ষ ক্যালোরিমেট্রি, শ্বসন অনুপাত ও বিপাকীয় অভিযোজন'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Quantitative Energy Expenditure Calculations & Case Reasoning', '৫. পরিমাণগত শক্তি ব্যয় নির্ণয় ও ক্লিনিক্যাল কেস বিশ্লেষণ'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Total Daily Energy Expenditure (TDEE)', 'মোট দৈনিক শক্তি ব্যয় (TDEE)'),
        definition: l(
          'The total amount of chemical and thermal energy liberated by an individual over a complete 24-hour period, mathematically partitioned into Basal Metabolic Rate (BMR), the Thermic Effect of Food (TEF), Non-Exercise Activity Thermogenesis (NEAT), and Exercise Activity Thermogenesis (EAT).',
          '২৪ ঘণ্টার সময়কালে কোনো ব্যক্তির দেহ থেকে বিমুক্ত মোট রাসায়নিক ও তাপীয় শক্তি, যা গাণিতিকভাবে বেসাল মেটাবলিক রেট (BMR), খাদ্যের তাপীয় প্রভাব (TEF), নন-এক্সারসাইজ অ্যাক্টিভিটি থার্মোজেনেসিস (NEAT) এবং পরিকল্পিত শরীরচর্চার শক্তি ব্যয়ের (EAT) সমষ্টি।'
        ),
      },
      {
        term: l('Basal Metabolic Rate (BMR)', 'বেসাল মেটাবলিক রেট (BMR)'),
        definition: l(
          'The minimal rate of continuous cellular energy transformation necessary to sustain vegetative biological life—including ion gradient maintenance, enzymatic synthesis, continuous myocardial contraction, pulmonary ventilation, and autonomic tone—measured under standardized conditions: immediately upon awakening, supine, fully rested, physically motionless, in a thermoneutral room, following an overnight 12- to 14-hour postabsorptive fast.',
          'উদ্ভিজ্জ বা মৌলিক জৈবিক জীবন টিকিয়ে রাখতে—যার মধ্যে আয়ন গ্রেডিয়েন্ট রক্ষা, এনজাইম সংশ্লেষণ, হৃদস্পন্দন, শ্বাসক্রিয়া ও স্নায়বিক ক্রিয়া অন্তর্ভুক্ত—প্রয়োজনীয় ন্যূনতম কোষীয় শক্তি রূপান্তরের হার; যা ঘুম থেকে ওঠার পরপরই শান্ত, শুয়ে থাকা অবস্থায়, নড়াচড়াহীন, তাপ-নিরপেক্ষ পরিবেশে এবং ১২-১৪ ঘণ্টার উপবাসের পর প্রমিত অবস্থায় মাপা হয়।'
        ),
      },
      {
        term: l('Respiratory Quotient (RQ)', 'শ্বসন অনুপাত (RQ)'),
        definition: l(
          'The molar ratio of carbon dioxide generated to oxygen consumed (VCO2 / VO2) at the steady-state cellular mitochondrial level. Because distinct macronutrient chemical structures contain variable hydrogen-to-oxygen ratios, steady-state RQ reflects the precise fuel mixture undergoing combustion: 1.00 for pure glucose, 0.707 for triacylglycerol palmitate, and ~0.82 for mixed amino acids.',
          'স্থিতিশীল অবস্থায় কোষের মাইটোকন্ড্রিয়ায় উৎপাদিত কার্বন ডাই অক্সাইড এবং ব্যবহৃত অক্সিজেনের মোলার অনুপাত (VCO2 / VO2)। বিভিন্ন পুষ্টি উপাদানের রাসায়নিক গঠনে হাইড্রোজেন ও অক্সিজেনের অনুপাত ভিন্ন হওয়ায় আরকিউ কোষে জারিত হওয়া সুনির্দিষ্ট জ্বালানির মিশ্রণ প্রকাশ করে: বিশুদ্ধ গ্লুকোজের জন্য ১.০০, ট্রাইগ্লিসারাইডের জন্য ০.৭০৭ এবং প্রোটিনের জন্য প্রায় ০.৮২।'
        ),
      },
      {
        term: l('Non-Exercise Activity Thermogenesis (NEAT)', 'নন-এক্সারসাইজ অ্যাক্টিভিটি থার্মোজেনেসিস (NEAT)'),
        definition: l(
          'The energetic expenditure of all spontaneous, occupational, and incidental muscular contractions occurring outside of dedicated athletic conditioning and voluntary sleep, such as walking between rooms, fidgeting, maintaining upright posture against gravity, stair ambulation, typing, and manual labor.',
          'ঘুম এবং পরিকল্পিত ব্যায়াম ব্যতীত সারাদিনের অনিচ্ছাকৃত, পেশাগত এবং স্বাভাবিক পেশি সংকোচনের শক্তি ব্যয়; যার মধ্যে হাঁটাচলা, অস্থির নড়াচড়া, মাধ্যাকর্ষণের বিপরীতে শরীর সোজা রাখা, সিঁড়ি বাওয়া, টাইপিং এবং দৈনন্দিন শারীরিক কাজকর্ম অন্তর্ভুক্ত।'
        ),
      },
      {
        term: l('Metabolic Adaptation (Adaptive Thermogenesis)', 'বিপাকীয় অভিযোজন (অ্যাডাপ্টিভ থার্মোজেনেসিস)'),
        definition: l(
          'The physiologically regulated reduction in resting and non-resting energy expenditure that exceeds what can be accounted for by the physical loss of metabolically active fat-free mass and adipose tissue during sustained negative energy balance, orchestrated by leptin, triiodothyronine (T3), and sympathetic nervous system suppression.',
          'দীর্ঘমেয়াদী শক্তি ঘাটতির সময় চর্বিহীন সক্রিয় কোষীয় ভর এবং চর্বি কলা কমে যাওয়ার ফলে প্রত্যাশিত হিসাবের চেয়েও অতিরিক্ত হারে শক্তি ব্যয় হ্রাস পাওয়ার শারীরবৃত্তীয় সমন্বয়; যা লেপটিন হ্রাস, থাইরয়েড হরমোন (T3) কমে যাওয়া এবং সিম্প্যাথেটিক স্নায়ুতন্ত্র শিথিল হওয়ার মাধ্যমে নিয়ন্ত্রিত হয়।'
        ),
      },
      {
        term: l('Weir Equation', 'উইয়ার সমীকরণ (Weir Equation)'),
        definition: l(
          'The foundational bioenergetic formula derived by J.B. de V. Weir in 1949 that quantifies 24-hour total energy expenditure (kcal/day) from open-circuit indirect calorimetry: Energy Expenditure = (3.941 x VO2) + (1.106 x VCO2) - (2.17 x Urinary Nitrogen), providing high accuracy without requiring direct bomb calorimetric heat chamber measurement.',
          '১৯৪৯ সালে বিজ্ঞানী জে.বি. ডি ভি. উইয়ার কর্তৃক উদ্ভাবিত মৌলিক জৈবশক্তি সমীকরণ, যা গ্যাস বিনিময় থেকে ২৪ ঘণ্টার শক্তি ব্যয় নির্ণয় করে: শক্তি ব্যয় (kcal/day) = (৩.৯৪১ x VO2) + (১.১০৬ x VCO2) - (২.১৭ x মূত্রীয় নাইট্রোজেন); যা সরাসরি তাপকক্ষ ছাড়াই অত্যন্ত নির্ভুল ফলাফল দেয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Estimating Resting Metabolic Rate & TDEE: Mifflin-St Jeor vs Katch-McArdle',
          'বিশ্রামকালীন বিপাকীয় হার ও TDEE নির্ণয়: মিফলিন-সেন্ট জিওর বনাম কাচ-ম্যাকআর্ডল সূত্র'
        ),
        steps: [
          l(
            'Step 1: Patient Demographics & Anthropometrics. A 38-year-old female corporate accountant presents for medical weight management. Height = 168 cm (1.68 m), Body Mass = 74 kg, Measured Body Fat via DXA = 32% (Fat-Free Mass = 74 x (1 - 0.32) = 50.32 kg; Fat Mass = 23.68 kg). Physical activity: sedentary desk job with minimal structured exercise.',
            'ধাপ ১: রোগীর শারীরিক পরিমাপ: ৩৮ বছর বয়সী নারী হিসাবরক্ষক। উচ্চতা ১৬৮ সেমি, ওজন ৭৪ কেজি, ডিএক্সএ স্ক্যানে পরিমাপকৃত চর্বির হার ৩২% (চর্বিহীন ভর FFM = ৭৪ x (১ - ০.৩২) = ৫০.৩২ কেজি; চর্বির ভর = ২৩.৬৮ কেজি)। আসীন ডেস্কের চাকরি এবং নিয়মিত ব্যায়ামের অভাব।'
          ),
          l(
            'Step 2: Calculate Resting Metabolic Rate (RMR) using the validated Mifflin-St Jeor equation for women: RMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in years) - 161. Calculation: (10 x 74 = 740) + (6.25 x 168 = 1050) - (5 x 38 = 190) - 161 = 1790 - 351 = 1,439 kcal/day.',
            'ধাপ ২: নারীদের জন্য মিফলিন-সেন্ট জিওর সূত্রে RMR গণনা: RMR = (১০ x ওজন কেজি) + (৬.২৫ x উচ্চতা সেমি) - (৫ x বয়স বছর) - ১৬১। গণনা: (১০ x ৭৪ = ৭৪০) + (৬.২৫ x ১৬৮ = ১০৫০) - (৫ x ৩৮ = ১৯০) - ১৬১ = ১৭৯০ - ৩৫১ = ১,৪৩৯ কিলোক্যালরি/দিন।'
          ),
          l(
            'Step 3: Compare with body composition-based Katch-McArdle equation: BMR = 370 + (21.6 x FFM in kg). Calculation: 370 + (21.6 x 50.32) = 370 + 1086.9 = 1,457 kcal/day. The two independent formulas converge closely within 18 kcal/day (1,439 vs 1,457 kcal/day), confirming a true biological resting baseline of ~1,450 kcal/day.',
            'ধাপ ৩: চর্বিহীন ভরের ওপর প্রতিষ্ঠিত কাচ-ম্যাকআর্ডল সমীকরণের সাথে তুলনা: BMR = ৩৭০ + (২১.৬ x FFM কেজি)। গণনা: ৩৭০ + (২১.৬ x ৫০.৩২) = ৩৭০ + ১০৮৬.৯ = ১,৪৫৭ কিলোক্যালরি/দিন। দুটি পৃথক সূত্র মাত্র ১৮ ক্যালোরির ব্যবধানে প্রায় একই মান (~১,৪৫০ কিলোক্যালরি/দিন) নিশ্চিত করে।'
          ),
          l(
            'Step 4: Compute Total Daily Energy Expenditure (TDEE). Apply a validated sedentary Physical Activity Level multiplier (PAL = 1.25) to account for light occupational ambulation, plus the Thermic Effect of Food (TEF ~10% of total intake). Baseline TDEE = 1,450 x 1.25 = 1,812.5 kcal/day (approximately 1,800 to 1,825 kcal/day for weight maintenance).',
            'ধাপ ৪: মোট দৈনিক শক্তি ব্যয় (TDEE) নির্ণয়: আসীন জীবনযাত্রার সূচক (PAL = ১.২৫) এবং খাদ্যের তাপীয় প্রভাব (TEF ~১০%) প্রয়োগ করুন। রক্ষণাবেক্ষণ TDEE = ১,৪৫০ x ১.২৫ = ১,৮১২.৫ কিলোক্যালরি/দিন (ওজন অপরিবর্তিত রাখতে আনুমানিক ১,৮০০–১,৮২৫ কিলোক্যালরি প্রয়োজন)।'
          ),
        ],
        conclusion: l(
          'Targeting a safe, evidence-based rate of adipose reduction (-0.5 kg/week, corresponding to a cumulative ~3,500 kcal deficit per week or ~500 kcal/day) establishes a prescribed caloric intake of 1,300 to 1,325 kcal/day, with protein maintained at >=1.2 g/kg (>=89 g/day) to preserve skeletal muscle FFM.',
          'সপ্তাহে ০.৫ কেজি চর্বি হ্রাসের নিরাপদ ক্লিনিক্যাল লক্ষ্যমাত্রার জন্য (দৈনিক ৫০০ কিলোক্যালরি ঘাটতি) রোগীর খাদ্যতালিকা ১,৩০০ থেকে ১,৩২৫ কিলোক্যালরিতে নির্ধারণ করতে হবে; একই সাথে কঙ্কালপেশি সুরক্ষায় প্রোটিনের পরিমাণ ন্যূনতম ১.২ গ্রাম/কেজি (দৈনিক প্রায় ৮৯ গ্রাম) বজায় রাখতে হবে।'
        ),
      },
      {
        title: l(
          'Deriving Fuel Substrate Partition from Indirect Calorimetry Respirometry',
          'পরোক্ষ ক্যালোরিমেট্রি গ্যাস বিনিময় থেকে জ্বালানি সাবস্ট্রেট জারণের হার নির্ণয়'
        ),
        steps: [
          l(
            'Step 1: Open-Circuit Respirometry Measurements. A marathon runner undergoing resting metabolic testing in the metabolic cart demonstrates a steady-state minute oxygen consumption (VO2) of 0.280 L/min (403.2 L/day) and carbon dioxide production (VCO2) of 0.207 L/min (298.08 L/day). 24-hour urinary urea nitrogen excretion = 12 g.',
            'ধাপ ১: মেটাবলিক কার্টের গ্যাস পরিমাপ: একজন ম্যারাথন দৌড়বিদের বিশ্রামকালীন মিনিটে অক্সিজেন গ্রহণ (VO2) = ০.২৮০ লিটার/মিনিট (৪০৩.২ লিটার/দিন) এবং কার্বন ডাই অক্সাইড নির্গমন (VCO2) = ০.২০৭ লিটার/মিনিট (২৯৮.০৮ লিটার/দিন)। ২৪ ঘণ্টায় মূত্রে নির্গত ইউরিয়া নাইট্রোজেন = ১২ গ্রাম।'
          ),
          l(
            'Step 2: Calculate Respiratory Quotient (RQ). RQ = VCO2 / VO2 = 0.207 / 0.280 = 0.739. An RQ value approaching 0.71 strongly indicates that cellular respiration is dominated by the beta-oxidation of long-chain fatty acids, with minimal glucose combustion.',
            'ধাপ ২: শ্বসন অনুপাত (RQ) নির্ণয়: RQ = VCO2 / VO2 = ০.২০৭ / ০.২৮০ = ০.৭৩৯। আরকিউ মান ০.৭১ এর কাছাকাছি হওয়ায় নিশ্চিত হয় যে কোষে মূলত ফ্যাটি অ্যাসিডের বিটা-জারণ ঘটছে এবং গ্লুকোজ জারণ অত্যন্ত কম।'
          ),
          l(
            'Step 3: Calculate 24-Hour Resting Energy Expenditure using the full Weir equation: REE = [3.941 x 403.2] + [1.106 x 298.08] - [2.17 x 12] = 1589.0 + 329.7 - 26.0 = 1,892.7 kcal/day.',
            'ধাপ ৩: উইয়ার সূত্রের সাহায্যে ২৪ ঘণ্টার শক্তি ব্যয়: REE = [৩.৯৪১ x ৪০৩.২] + [১.১০৬ x ২৯৮.০৮] - [২.১৭ x ১২] = ১৫৮৯.০ + ৩২৯.৭ - ২৬.০ = ১,৮৯২.৭ কিলোক্যালরি/দিন।'
          ),
          l(
            'Step 4: Non-Protein Fuel Partitioning. Using Lusk non-protein respiratory quotient tables, an npRQ of 0.74 corresponds to 85.5% of non-protein calories derived from lipid oxidation and only 14.5% derived from carbohydrate oxidation. Lipid oxidation rate = (1892.7 - (12 x 6.25 x 4)) x 0.855 / 9 = ~151 grams of fat oxidized per day at rest.',
            'ধাপ ৪: জ্বালানির শতাংশ বিভাজন: লাস্ক টেবিল অনুযায়ী ০.৭৪ npRQ নির্দেশ করে যে নন-প্রোটিন ক্যালোরির ৮৫.৫% আসছে চর্বি জারণ থেকে এবং মাত্র ১৪.৫% আসছে শর্করা থেকে। বিশ্রামাবস্থায় দৈনিক প্রায় ১৫১ গ্রাম চর্বি জারিত হচ্ছে।'
          ),
        ],
        conclusion: l(
          'Indirect calorimetry uniquely demonstrates both the quantitative energetic burn rate (1,893 kcal/day) and qualitative cellular substrate preference (predominant lipid utilization), proving that physiological energy balance cannot be accurately modeled through caloric numbers alone without understanding metabolic fuel partitioning.',
          'পরোক্ষ ক্যালোরিমেট্রি কেবল মোট শক্তি ব্যয়ের পরিমাণই (১,৮৯৩ কিলোক্যালরি) দেখায় না, বরং কোষে কোন জ্বালানি ব্যবহৃত হচ্ছে তাও স্পষ্টভাবে প্রমাণ করে; যা প্রমাণ করে যে জ্বালানির প্রকৃতি না জেনে কেবল সংখ্যার ভিত্তিতে শক্তি ভারসাম্য বোঝা অসম্ভব।'
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
          'The brain, liver, heart, and kidneys together constitute less than 6% of total body mass, yet they account for approximately 60% to 70% of resting metabolic expenditure due to continuous ion pumping (Na+/K+-ATPase and Ca2+-ATPase), protein synthesis, gluconeogenesis, cardiac contractility, and renal ultrafiltration.',
          'মস্তিষ্ক, যকৃত, হৃৎপিণ্ড এবং বৃক্ক দেহের মোট ভরের ৬ শতাংশেরও কম হওয়া সত্ত্বেও অবিরাম সোডিয়াম-পটাশিয়াম পাম্পিং, প্রোটিন তৈরি, গ্লুকোনিওজেনেসিস এবং সক্রিয় পরিস্রাবণের তীব্র রাসায়নিক তৎপরতার জন্য বিশ্রামকালীন বিপাকের ৬০ থেকে ৭০ শতাংশ শক্তি ব্যয় করে।'
        ),
      },
      {
        question: l(
          'Why does dietary protein ingestion produce a significantly higher Thermic Effect of Food (TEF) than fat or carbohydrate?',
          'খাদ্যের প্রোটিন গ্রহণ কেন চর্বি বা শর্করার তুলনায় উল্লেখযোগ্যভাবে উচ্চ তাপীয় প্রভাব (TEF) তৈরি করে?'
        ),
        answer: l(
          'Dietary protein exhibits a TEF of 20% to 30% of its ingested caloric value because the enzymatic cleavage of peptide bonds, secondary active enterocyte transport via PepT1, hepatic deamination, energy-intensive urea cycle synthesis (costing 4 ATP equivalents per molecule of urea), and gluconeogenesis demand substantial stoichiometric ATP investment compared to the simple packaging of dietary lipids (0–3% TEF).',
          'খাদ্যের প্রোটিনের তাপীয় প্রভাব ২০% থেকে ৩০% পর্যন্ত হয়, কারণ পেপটাইড বন্ধন ভাঙা, PepT1 দিয়ে অন্ত্রে সক্রিয় শোষণ, যকৃতে অ্যামিনো অ্যাসিডের ডিঅ্যামিনেশন, ইউরিয়া চক্রে বিপুল এটিপি খরচ (প্রতি অণু ইউরিয়া তৈরিতে ৪টি এটিপি সমতুল্য শক্তি) এবং গ্লুকোনিওজেনেসিসে বিপুল শক্তি ব্যয় হয়; যেখানে চর্বি সঞ্চয়ে মাত্র ০-৩% শক্তি খরচ হয়।'
        ),
      },
      {
        question: l(
          'How does Herman Pontzer’s Constrained Energy Model challenge traditional additive assumptions regarding high-volume athletic training?',
          'হারম্যান পন্টজারের কনস্ট্রেইন্ড শক্তি মডেল কীভাবে অতিরিক্ত ব্যায়ামের ক্ষেত্রে প্রচলিত সরল যোগাত্মক ধারণাকে চ্যালেঞ্জ করে?'
        ),
        answer: l(
          'The traditional additive model assumed that every calorie burned in structured exercise linearly increases total daily expenditure without limit. Pontzer’s doubly labeled water research demonstrated that in humans with high habitual physical activity, the body dynamically downregulates background metabolic expenditures—suppressing baseline immune activation, reproductive hormone pulsatility, and tissue inflammatory turnover—to hold total daily energy expenditure within an evolved physiological ceiling.',
          'প্রচলিত যোগাত্মক মডেলে ভাবা হতো যে ব্যায়ামে ব্যয়িত প্রতিটি ক্যালোরি মোট দৈনিক শক্তি ব্যয়কে সীমাহীনভাবে বাড়িয়ে দেয়। কিন্তু পন্টজারের গবেষণায় প্রমাণিত হয়েছে যে অতিরিক্ত দীর্ঘমেয়াদী শারীরিক পরিশ্রমে শরীর তার অভ্যন্তরীণ খরচ কমিয়ে দেয়—যেমন অনাক্রম্য প্রতিক্রিয়া শিথিল করা এবং প্রজনন হরমোনের খরচ কমানো—যাতে মোট দৈনিক শক্তি ব্যয় একটি নিরাপদ শারীরবৃত্তীয় সীমার মধ্যে আবদ্ধ থাকে।'
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
      'Inspect the four discrete physiological partitions of human Total Daily Energy Expenditure and evaluate how hormonal, cellular, and behavioral factors modulate daily caloric flux.',
      'মানবদেহের মোট দৈনিক শক্তি ব্যয়ের চারটি সুনির্দিষ্ট শারীরবৃত্তীয় অংশ পরীক্ষা করুন এবং হরমোন, কোষীয় বিপাক ও আচরণগত উপাদান কীভাবে শক্তির প্রবাহ নিয়ন্ত্রণ করে তা পর্যবেক্ষণ করুন।'
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
          'Obligate energetic cost of cellular homeostatic processes, including Na+/K+-ATPase pumping, transcription, translation, mitochondrial proton leak, cardiac contraction, and renal filtration.',
          'কোষীয় ভারসাম্যের অপরিহার্য শক্তি ব্যয়, যার মধ্যে সোডিয়াম-পটাশিয়াম পাম্প, জিন অনুবাদ, প্রোটিন সংশ্লেষ, মাইটোকন্ড্রিয়াল প্রোটন লিকেজ, হৃৎস্পন্দন এবং বৃক্কের পরিস্রাবণ অন্তর্ভুক্ত।'
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
          'Energetic expenditure of all spontaneous, occupational, and incidental physical movements outside of sleeping, eating, and intentional sports exercise.',
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
              'The human body functions as a living thermodynamic engine that strictly obeys the First Law of Thermodynamics, also known as the Law of Conservation of Energy: energy can neither be created nor destroyed, but only transformed from one physical or chemical form into another [1]. Every living cell requires a continuous flux of energy to stay alive, repair cellular structures, transport ions across membranes, and pump blood through tissues [1, 2]. We obtain this necessary energy entirely from the chemical bonds of dietary macronutrients—carbohydrates, lipids, and proteins—which were originally synthesized by plants using solar energy or stored in animal tissues [2, 3].',
              'মানবদেহ একটি জীবন্ত তাপগতিবিদ্যাগত ইঞ্জিনের মতো কাজ করে যা তাপগতিবিদ্যার প্রথম সূত্র অর্থাৎ শক্তির নিত্যতা সূত্রকে অক্ষরে অক্ষরে অনুসরণ করে: শক্তি সৃষ্টি বা ধ্বংস করা যায় না, কেবল এক রূপ থেকে অন্য রূপে রূপান্তরিত হতে পারে [1]। প্রতিটি জীবন্ত কোষকে বেঁচে থাকতে, অভ্যন্তরীণ অঙ্গাণু মেরামত করতে, ঝিল্লির মধ্য দিয়ে আয়ন পরিবহন করতে এবং রক্ত সঞ্চালন সচল রাখতে অবিরাম শক্তির প্রবাহ প্রয়োজন হয় [1, 2]। আমরা এই প্রয়োজনীয় শক্তি সম্পূর্ণভাবে খাদ্যের ম্যাক্রোনিউট্রিয়েন্ট—শর্করা, চর্বি এবং প্রোটিনের রাসায়নিক বন্ধন থেকে সংগ্রহ করি; যা মূলত উদ্ভিদ সৌরশক্তির সাহায্যে তৈরি করেছিল কিংবা প্রাণীদেহে জমা ছিল [2, 3]।'
            ),
            l(
              'To understand human nutrition, think of energy balance as a dynamic biological ledger. Energy Intake represents the calories contained in the foods and beverages we consume and absorb into our bloodstream. Energy Expenditure represents the total calories burned by the body to maintain life, digest meals, and perform daily physical movement [1, 2]. When Energy Intake matches Energy Expenditure over weeks or months, the body achieves neutral energy balance, and overall body mass remains stable [1, 4].',
              'মানব পুষ্টিবিজ্ঞানকে সহজভাবে বুঝতে হলে শক্তি ভারসাম্যকে একটি গতিশীল আর্থিক হিসাবের সাথে তুলনা করা যেতে পারে। "শক্তি গ্রহণ" হলো আমরা প্রতিদিন খাবার ও পানীয় থেকে যে ক্যালোরি হজম ও রক্তে শোষণ করি। আর "শক্তি ব্যয়" হলো বেঁচে থাকা, খাবার হজম করা এবং স্বাভাবিক চলাফেরায় শরীর যে ক্যালোরি খরচ করে [1, 2]। যখন গৃহীত ক্যালোরি এবং ব্যয়িত ক্যালোরির পরিমাণ দীর্ঘ সময় ধরে সমান থাকে, তখন দেহ নিরপেক্ষ শক্তি ভারসাম্যে পৌঁছায় এবং দেহের ওজন স্থির থাকে [1, 4]।'
            ),
            l(
              'When a person consumes more energy than their body expends, the resulting surplus is known as positive energy balance. Because excess chemical energy cannot simply disappear, the body stores it by synthesizing glycogen in the liver and skeletal muscle and storing triacylglycerols (fat molecules) in specialized adipose tissue [1, 3]. Conversely, when caloric expenditure exceeds dietary intake, the body enters negative energy balance; it must dismantle and oxidize its own internal glycogen, adipose reserves, and occasionally muscle proteins to generate the adenosine triphosphate (ATP) necessary to maintain life [3, 4].',
              'যখন কোনো ব্যক্তি শরীরের ব্যয়ের চেয়ে বেশি ক্যালোরি গ্রহণ করে, তখন সেই উদ্বৃত্ত অবস্থাকে "ধনাত্মক শক্তি ভারসাম্য" বলা হয়। যেহেতু অতিরিক্ত রাসায়নিক শক্তি ধ্বংস করা অসম্ভব, তাই দেহ এই বাড়তি শক্তিকে যকৃতে ও পেশিতে গ্লাইকোজেন হিসেবে এবং চর্বি কোষে ট্রাইগ্লিসারাইড হিসেবে সঞ্চয় করে [1, 3]। পক্ষান্তরে, যখন শক্তি ব্যয় খাদ্যের পরিমাণের চেয়ে বেশি হয়, তখন শরীর "ঋণাত্মক শক্তি ভারসাম্যে" প্রবেশ করে; তখন জীবনধারণের জন্য প্রয়োজনীয় এটিপি (ATP) তৈরির উদ্দেশ্যে দেহ তার নিজস্ব গ্লাইকোজেন, চর্বি এবং ক্ষেত্রবিশেষে পেশির প্রোটিন ভেঙে জ্বালানি হিসেবে পুড়িয়ে ফেলে [3, 4]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Basal & Resting Metabolic Rate: The Energetic Cost of Being Alive', 'বেসাল ও বিশ্রামকালীন বিপাকীয় হার: বেঁচে থাকার ন্যূনতম ব্যয়'),
          paragraphs: [
            l(
              'Even when you are lying completely still in bed asleep, your body is working furiously beneath the surface. Your heart pumps liters of blood per minute, your kidneys continuously filter metabolic waste, your lungs inflate and deflate, your nervous system fires continuous electrical impulses, and billions of cellular pumps transport sodium and potassium ions across cell membranes to maintain life [1, 2]. The absolute minimum rate of energy needed to sustain these vital vegetative biological functions while awake and resting quietly is known as the Basal Metabolic Rate (BMR) [2, 3].',
              'এমনকি যখন আপনি বিছানায় সম্পূর্ণ নিশ্চল হয়ে শুয়ে থাকেন, আপনার শরীর কিন্তু ভেতরে ভেতরে অবিরাম কাজ করে চলেছে। আপনার হৃৎপিণ্ড প্রতি মিনিটে কয়েক লিটার রক্ত পাম্প করছে, বৃক্ক অবিরাম বর্জ্য ছেঁকে বের করছে, ফুসফুস শ্বাস নিচ্ছে, মস্তিষ্ক স্নায়বিক সংকেত পাঠাচ্ছে এবং বিলিয়ন বিলিয়ন কোষীয় পাম্প সোডিয়াম ও পটাশিয়াম আয়ন টেনে কোষের জীবন রক্ষা করছে [1, 2]। সম্পূর্ণ শান্ত ও জাগ্রত অবস্থায় ঘরের স্বাভাবিক তাপমাত্রায় বেঁচে থাকার জন্য প্রয়োজনীয় এই ন্যূনতম শক্তি ব্যয়ের হারকে "বেসাল মেটাবলিক রেট" (BMR) বলা হয় [2, 3]।'
            ),
            l(
              'In clinical practice, measuring true BMR is technically challenging because it requires a patient to sleep overnight in a specialized metabolic laboratory and be tested immediately upon waking without any movement or food [2]. Therefore, clinicians frequently measure Resting Metabolic Rate (RMR), which is assessed under slightly less rigid conditions after a 4- to 6-hour fast and a brief rest period. RMR is typically only 3% to 10% higher than BMR and serves as an excellent clinical surrogate [2, 3]. For most sedentary adults, BMR accounts for 60% to 70% of all the calories burned throughout the day, making it the largest single component of Total Daily Energy Expenditure [1, 3].',
              'চিকিৎসা বিজ্ঞানে প্রকৃত বিএমআর পরিমাপ করা বেশ জটিল, কারণ রোগীকে সারারাত বিশেষায়িত ল্যাবরেটরিতে ঘুমাতে হয় এবং সকালে কোনো খাবার না খেয়ে কিংবা সামান্য নড়াচড়া না করেই পরীক্ষা করতে হয় [2]। এজন্য চিকিৎসকরা প্রায়শই "রেস্টিং মেটাবলিক রেট" (RMR) পরিমাপ করেন, যা ৪-৬ ঘণ্টার উপবাসের পর সামান্য বিশ্রাম নিয়ে পরিমাপ করা যায়। আরএমআর সাধারণত বিএমআরের চেয়ে মাত্র ৩% থেকে ১০% বেশি হয় এবং চিকিৎসায় অত্যন্ত কার্যকর বিকল্প হিসেবে কাজ করে [2, 3]। যারা সারাদিন বসে কাজ করেন, তাদের ক্ষেত্রে মোট দৈনিক ব্যয়ের ৬০ থেকে ৭০ শতাংশই এই বেসাল বিপাকে খরচ হয় [1, 3]।'
            ),
            l(
              'What determines whether a person has a fast or slow basal metabolic rate? The primary anatomical factor is Fat-Free Mass (FFM), which consists of your muscles, bones, brain, liver, kidneys, and other internal organs [3, 4]. While skeletal muscle burns energy during exercise, the four vital visceral organs—the brain, liver, heart, and kidneys—are biochemical powerhouses. Together, these four organs account for less than 6% of total body weight, yet they consume over 60% of all basal calories because their cells are constantly synthesizing proteins, detoxifying compounds, and maintaining cellular homeostasis [1, 3].',
              'কোনো ব্যক্তির মেটাবলিজম দ্রুত নাকি ধীর হবে তা মূলত কীসের ওপর নির্ভর করে? এর প্রধান শারীরিক নিয়ামক হলো "চর্বিহীন দৈহিক ভর" (Fat-Free Mass বা FFM), যা কঙ্কালপেশি, অস্থি, মস্তিষ্ক, যকৃত, কিডনি এবং অন্যান্য অভ্যন্তরীণ অঙ্গ নিয়ে গঠিত [3, 4]। কঙ্কালপেশি ব্যায়ামের সময় প্রচুর ক্যালোরি খরচ করলেও বিশ্রামাবস্থায় দেহের চারটি প্রধান অঙ্গ—মস্তিষ্ক, যকৃত, হৃৎপিণ্ড এবং বৃক্ক—বিস্ময়কর হারে শক্তি পোড়ায়। এই চারটি অঙ্গ দেহের মোট ওজনের মাত্র ৬ শতাংশের কম হওয়া সত্ত্বেও বিশ্রামকালীন মোট ক্যালোরির ৬০ শতাংশেরও বেশি একাই খরচ করে ফেলে [1, 3]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Thermic Effect of Food & Physical Activity Partitions', 'খাদ্যের তাপীয় প্রভাব ও দৈহিক পরিশ্রমের অংশ'),
          paragraphs: [
            l(
              'Eating food actually requires the body to expend energy. Just as an industrial manufacturing plant must consume electricity to unload, refine, and store raw materials, your digestive system must spend cellular energy to break down food, secrete digestive enzymes, transport nutrients across the intestinal wall into the bloodstream, and assemble them into storage molecules [2, 3]. This increase in metabolic rate following a meal is called the Thermic Effect of Food (TEF), or diet-induced thermogenesis [1, 2].',
              'খাবার খাওয়ার পরও শরীরের নিজস্ব কিছু শক্তি ব্যয় হয়। ঠিক যেমন একটি কারখানায় কাঁচামাল নামাতে, প্রক্রিয়া করতে ও গুদামজাত করতে বিদ্যুৎ খরচ হয়, তেমনি আমাদের পরিপাকনালিকেও খাদ্য ভাঙতে, এনজাইম ক্ষরণ করতে, অন্ত্রের দেয়াল দিয়ে রক্তে পুষ্টি টেনে নিতে এবং কোষে জমা করতে শক্তি ব্যয় করতে হয় [2, 3]। খাবার খাওয়ার পর এই যে শরীরের তাপ ও শক্তি ব্যয় বৃদ্ধি পায়, তাকে "খাদ্যের তাপীয় প্রভাব" (Thermic Effect of Food বা TEF) বলা হয় [1, 2]।'
            ),
            l(
              'Remarkably, the energetic cost of TEF varies dramatically depending on the macronutrient consumed. Dietary protein demands the greatest biochemical investment: approximately 20% to 30% of the calories contained in protein are consumed simply to digest, absorb, deaminate, and convert it into usable compounds or urea [1, 3]. Carbohydrates require about 5% to 10% of their energy to process, whereas dietary fats require only 0% to 3% because packaging dietary fatty acids into storage droplets is chemically straightforward [2, 3]. On a typical balanced mixed diet, TEF accounts for approximately 8% to 10% of Total Daily Energy Expenditure [1, 2].',
              'মজার বিষয় হলো, আপনি কোন ধরনের খাবার খাচ্ছেন তার ওপর ভিত্তি করে এই টিইএফের পরিমাণ ব্যাপকভাবে পরিবর্তিত হয়। প্রোটিন হজমে সবচেয়ে বেশি শক্তি খরচ হয়: প্রোটিনে থাকা মোট ক্যালোরির প্রায় ২০% থেকে ৩০% কেবল তাকে পরিপাক করতে, শোষণ করতে এবং যকৃতে ইউরিয়া চক্রে প্রক্রিয়াকরণ করতেই খরচ হয়ে যায় [1, 3]। শর্করার ক্ষেত্রে এই খরচ মাত্র ৫% থেকে ১০%, আর চর্বিতে মাত্র ০% থেকে ৩%, কারণ চর্বিকে অণু হিসেবে চর্বি কোষে জমা করা অত্যন্ত সহজ [2, 3]। একটি স্বাভাবিক সুষম মিশ্র খাবারে টিইএফ সাধারণত মোট দৈনিক ব্যয়ের প্রায় ৮% থেকে ১০% গঠন করে [1, 2]।'
            ),
            l(
              'The remainder of daily expenditure is driven by physical activity, which is divided into two distinct components: Exercise Activity Thermogenesis (EAT) and Non-Exercise Activity Thermogenesis (NEAT) [4]. EAT represents planned, intentional sports, gym workouts, running, or swimming. While critical for cardiovascular fitness, EAT actually accounts for 0% of energy expenditure in sedentary adults and rarely exceeds 10% to 15% in recreational exercisers [1, 4]. In contrast, NEAT encompasses all spontaneous movement: walking down hallways, typing on a keyboard, climbing stairs, cleaning, working, fidgeting, and maintaining posture [4]. Between two people of identical height and weight, NEAT can vary by up to 2,000 calories per day, making it the primary reason why some free-living individuals gain weight easily while others remain lean [1, 4].',
              'দৈনিক খরচের অবশিষ্ট অংশ আসে দৈহিক পরিশ্রম থেকে, যা দুটি ভাগে বিভক্ত: পরিকল্পিত ব্যায়ামের শক্তি ব্যয় (EAT) এবং নন-এক্সারসাইজ অ্যাক্টিভিটি থার্মোজেনেসিস (NEAT) [4]। ইএটি হলো পরিকল্পিত শরীরচর্চা, যেমন দৌড়ানো, জিম করা বা সাঁতার কাটা। এটি শারীরিক সুস্থতার জন্য অত্যন্ত জরুরি হলেও সাধারণ আসীন মানুষের ক্ষেত্রে এটি প্রায় শূন্য শতাংশ এবং অনিয়মিত ব্যায়ামকারীদের ক্ষেত্রে ১০-১৫ শতাংশের বেশি নয় [1, 4]। অন্যদিকে, এনইএটি হলো সারাদিনের যাবতীয় স্বাভাবিক চলাফেরা: করিডোরে হাঁটা, টাইপিং, সিঁড়ি বেয়ে ওঠা, ঘরের কাজ, দাঁড়িয়ে থাকা এবং বসার ভঙ্গি [4]। একই উচ্চতা ও ওজনের দুজন মানুষের মধ্যে এনইএটির পার্থক্য দৈনিক ২০০০ ক্যালোরি পর্যন্ত হতে পারে, যা ব্যাখ্যা করে কেন কিছু মানুষ সহজে ওজন বাড়ায় আর কেউ স্বাভাবিকভাবেই রোগা থাকে [1, 4]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Indirect Calorimetry, Respiratory Quotient & Metabolic Adaptation', 'পরোক্ষ ক্যালোরিমেট্রি, শ্বসন অনুপাত ও বিপাকীয় অভিযোজন'),
          paragraphs: [
            l(
              'How do medical scientists accurately measure how many calories a person burns without locking them inside an airtight, heavily insulated water chamber? They use a non-invasive technique called indirect calorimetry [1, 2]. All aerobic life depends on cellular respiration: cells consume oxygen ($O_2$) to oxidize nutrient molecules and release carbon dioxide ($CO_2$), water, and heat [2, 3]. By having a patient breathe into a specialized mask or canopy (a metabolic cart) that measures the exact volume of oxygen inhaled and carbon dioxide exhaled per minute, computers calculate instantaneous metabolic rate with extraordinary accuracy [1, 2].',
              'চিকিৎসা বিজ্ঞানীরা কীভাবে কোনো রোগীকে জটিল বদ্ধ তাপকক্ষে বন্দি না করেই নিখুঁতভাবে পরিমাপ করেন যে তিনি দৈনিক কত ক্যালোরি খরচ করছেন? তারা "পরোক্ষ ক্যালোরিমেট্রি" নামের একটি আধুনিক অ-আক্রমণাত্মক পদ্ধতি ব্যবহার করেন [1, 2]। মানবদেহের প্রতিটি কোষ অক্সিজেন ($O_2$) গ্রহণ করে পুষ্টির অণু জারিত করে এবং বর্জ্য হিসেবে কার্বন ডাই অক্সাইড ($CO_2$), পানি ও তাপ উৎপন্ন করে [2, 3]। রোগীকে একটি বিশেষায়িত মাস্ক বা ক্যানোপির (মেটাবলিক কার্ট) ভেতর শ্বাস নিতে দিয়ে প্রতি মিনিটে গৃহীত অক্সিজেন ও নির্গত কার্বন ডাই অক্সাইড মেপে কম্পিউটারের সাহায্যে মুহূর্তেই শক্তি ব্যয়ের হার বের করে ফেলা যায় [1, 2]।'
            ),
            l(
              'Indirect calorimetry provides a second invaluable piece of clinical information: it reveals exactly what type of fuel your cells are burning [2, 3]. The ratio of carbon dioxide produced to oxygen consumed is known as the Respiratory Quotient (RQ = $VCO_2 / VO_2$) [3]. Because a glucose molecule ($C_6H_{12}O_6$) already contains oxygen atoms within its ring structure, oxidizing one molecule of glucose requires 6 molecules of $O_2$ and yields 6 molecules of $CO_2$, creating an RQ of exactly 1.00 [3]. In contrast, long-chain fatty acids like palmitate ($C_{16}H_{32}O_2$) have very few oxygen atoms relative to hydrogen; burning them requires 23 $O_2$ molecules for every 16 $CO_2$ produced, resulting in an RQ of 0.707 [2, 3]. When a patient has an RQ close to 0.71, their cells are burning almost pure fat; an RQ near 1.00 indicates heavy carbohydrate burning; and an average mixed diet yields an RQ of ~0.82 to 0.85 [1, 3].',
              'পরোক্ষ ক্যালোরিমেট্রি আরেকটি অমূল্য তথ্য দেয়: আপনার কোষে এই মুহূর্তে শর্করা পুড়ছে নাকি চর্বি পুড়ছে তা ঠিকভাবে জানা যায় [2, 3]। নির্গত কার্বন ডাই অক্সাইড ও গৃহীত অক্সিজেনের অনুপাতকে "শ্বসন অনুপাত" (Respiratory Quotient বা RQ) বলে [3]। একটি গ্লুকোজ অণুর ($C_6H_{12}O_6$) গঠনে নিজস্ব অক্সিজেন থাকায় এটি পোড়াতে ৬টি অক্সিজেন লাগে এবং ৬টি কার্বন ডাই অক্সাইড বের হয়, ফলে এর আরকিউ হয় ঠিক ১.০০ [3]। বিপরীতে, ফ্যাটি অ্যাসিডে অক্সিজেনের পরিমাণ খুব কম থাকায় তা পোড়াতে প্রচুর অক্সিজেন লাগে, ফলে আরকিউ নেমে দাঁড়ায় ০.৭০৭-এ [2, 3]। রোগীর আরকিউ ০.৭১ এর কাছাকাছি থাকার অর্থ হলো তার কোষে প্রায় সম্পূর্ণ চর্বি পুড়ছে; ১.০০ এর কাছাকাছি হলে শর্করা পুড়ছে; আর স্বাভাবিক মিশ্র খাবারে তা ০.৮২ থেকে ০.৮৫ এর মধ্যে থাকে [1, 3]।'
            ),
            l(
              'A common misconception in nutrition is that human metabolism is a static calculator—that if you cut 500 calories from your diet every day, your weight will drop in a straight diagonal line forever [1, 4]. In reality, human biology evolved over millions of years to survive famine. When you restrict calories for several weeks, your body detects the deficit through plummeting levels of the satiety hormone leptin and active thyroid hormone triiodothyronine ($T_3$) [1, 4]. In response, your brain triggers metabolic adaptation: your cells become more efficient, your spontaneous fidgeting and NEAT movements drop unconsciously, and your resting metabolic rate slows down by 10% to 20% beyond what can be explained by weight loss alone, defending your body against perceived starvation [4, 6].',
              'পুষ্টিবিজ্ঞানে একটি প্রচলিত ভুল ধারণা হলো মানুষের মেটাবলিজম একটি স্থির ক্যালকুলেটর—অর্থাৎ প্রতিদিন ৫০০ ক্যালোরি কম খেলে আজীবন সরলরেখায় ওজন কমতেই থাকবে [1, 4]। বাস্তবে মানুষের শরীর দুর্ভিক্ষে বেঁচে থাকার জন্য বিবর্তিত হয়েছে। কয়েক সপ্তাহ কম ক্যালোরি খেলে রক্তে লেপটিন হরমোন এবং সক্রিয় থাইরয়েড হরমোন ($T_3$) দ্রুত কমে যায় [1, 4]। সংকেত পেয়ে মস্তিষ্ক "বিপাকীয় অভিযোজন" শুরু করে: কোষগুলো কম খরচে কাজ করতে শেখে, মানুষ অজান্তেই নড়াচড়া ও হাঁটাচলা কমিয়ে দেয় এবং বিশ্রামকালীন বিপাকীয় হার প্রত্যাশার চেয়েও ১০% থেকে ২০% বেশি কমে গিয়ে অনাহারের হাত থেকে দেহকে রক্ষা করতে চায় [4, 6]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Assessment & Energy Logic', 'মৌলিক মূল্যায়ন ও শক্তি হিসাবের যুক্তি'),
          paragraphs: [
            l(
              'When dietitians and clinicians evaluate a patient’s energy needs, they do not simply guess. They evaluate three foundational principles: energy balance stoichiometry, body composition quality, and behavioral activity multipliers [1, 2]. Relying on simple scale weight alone can be deceptive because two individuals of the exact same weight can possess completely different basal metabolic rates if one has a high proportion of muscular fat-free mass while the other has high adipose tissue mass [2, 3].',
              'ডায়েটিশিয়ান ও চিকিৎসকরা যখন কোনো রোগীর শক্তির চাহিদা মূল্যায়ন করেন, তারা অনুমানের ওপর নির্ভর করেন না। তারা তিনটি মৌলিক নীতি বিশ্লেষণ করেন: শক্তি ভারসাম্যের নিয়ম, দেহের গঠনের গুণমান এবং দৈনন্দিন কাজের মাত্রা [1, 2]। কেবল শরীরের ওজনের ওপর নির্ভর করা বিভ্রান্তিকর হতে পারে, কারণ একই ওজনের দুজন ব্যক্তির বিপাকীয় হার সম্পূর্ণ ভিন্ন হতে পারে যদি একজনের দেহে পেশির পরিমাণ বেশি থাকে আর অন্যজনের দেহে চর্বি বেশি থাকে [2, 3]।'
            ),
            l(
              'To estimate caloric requirements in healthy individuals without specialized laboratory equipment, clinicians multiply estimated RMR by a validated Physical Activity Level (PAL) factor [2]. A strictly bedridden patient has a PAL of ~1.1 to 1.2; a typical sedentary office worker has a PAL of 1.3 to 1.4; a moderately active individual who walks frequently has a PAL of 1.6 to 1.7; and an intense manual laborer or competitive endurance athlete may have a PAL exceeding 2.0 to 2.4 [1, 2].',
              'বিশেষায়িত ল্যাব ছাড়াই স্বাভাবিক মানুষের ক্যালোরি চাহিদা হিসাব করতে চিকিৎসকরা আরএমআরকে শারীরিক পরিশ্রম সূচক (PAL) দিয়ে গুণ করেন [2]। বিছানায় থাকা রোগীর PAL প্রায় ১.১–১.২; সাধারণ ডেস্কের চাকরিজীবীর PAL ১.৩–১.৪; নিয়মিত হাঁটাহাঁটি করা মধ্যম সক্রিয় ব্যক্তির PAL ১.৬–১.৭; এবং কঠোর কায়িক পরিশ্রমী বা পেশাদার অ্যাথলেটদের PAL ২.০ থেকে ২.৪ ছাড়িয়ে যেতে পারে [1, 2]।'
            ),
          ],
          bullets: [
            l('First Law of Thermodynamics: Energy intake = Energy expenditure + Change in body tissue energy stores [1].', 'তাপগতিবিদ্যার প্রথম সূত্র: গৃহীত শক্তি = ব্যয়িত শক্তি + দেহের সঞ্চিত শক্তির পরিবর্তন [1]।'),
            l('Basal Metabolic Rate is primarily determined by Fat-Free Mass, with the liver, brain, heart, and kidneys consuming over 60% of resting calories [3].', 'বেসাল বিপাক প্রধানত চর্বিহীন ভরের ওপর নির্ভরশীল; যকৃত, মস্তিষ্ক, হৃৎপিণ্ড ও বৃক্ক ৬০% এর বেশি ক্যালোরি খরচ করে [3]।'),
            l('Thermic Effect of Food requires ~20–30% of energy for protein, 5–10% for carbs, and 0–3% for fats [2].', 'খাদ্যের তাপীয় প্রভাবে প্রোটিনে প্রায় ২০-৩০%, শর্করার ক্ষেত্রে ৫-১০% এবং চর্বিতে ০-৩% শক্তি খরচ হয় [2]।'),
            l('Non-Exercise Activity Thermogenesis (NEAT) is the most flexible and variable component of daily caloric burn between people [4].', 'মানুষের দৈনন্দিন শক্তি ব্যয়ের পার্থক্যে নন-এক্সারসাইজ অ্যাক্টিভিটি থার্মোজেনেসিস (NEAT) সবচেয়ে বড় ভূমিকা রাখে [4]।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Foundational Educational Summary', 'মূল শিক্ষা ও শিক্ষামূলক সারাংশ'),
          paragraphs: [
            l(
              'Total Daily Energy Expenditure is composed of four biologically distinct partitions: Basal Metabolic Rate (the largest fraction at ~60–70%), the Thermic Effect of Food (~8–10%), Non-Exercise Activity Thermogenesis (~15–20%), and Exercise Activity Thermogenesis (variable from 0% to 15%+) [1, 2]. Sustaining body mass over time requires energy intake matching expenditure across cellular compartments [1, 4].',
              'মোট দৈনিক শক্তি ব্যয় চারটি সুস্পষ্ট জৈবিক উপাদান নিয়ে গঠিত: বেসাল মেটাবলিক রেট (যা প্রায় ৬০-৭০% নিয়ে বৃহত্তম অংশ), খাদ্যের তাপীয় প্রভাব (~৮-১০%), স্বাভাবিক চলাফেরার শক্তি ব্যয় বা NEAT (~১৫-২০%) এবং পরিকল্পিত শরীরচর্চা বা EAT (০% থেকে ১৫%+ পর্যন্ত হতে পারে) [1, 2]। দীর্ঘ মেয়াদে ওজন ধরে রাখতে হলে গৃহীত শক্তির সাথে কোষীয় শক্তি ব্যয়ের নিখুঁত সামঞ্জস্য থাকতে হয় [1, 4]।'
            ),
            l(
              'Indirect calorimetry and Respiratory Quotient measurements allow clinicians and researchers to objectively determine both the quantitative rate of daily caloric combustion and the qualitative fuel partition being oxidized [2, 3]. Recognizing that metabolic adaptation actively defends body weight during calorie deficits prevents unrealistic expectations and guides sustainable nutritional therapy [4, 6].',
              'পরোক্ষ ক্যালোরিমেট্রি এবং শ্বসন অনুপাত (RQ) চিকিৎসকদের কোনো রোগীর মোট শক্তি ব্যয়ের গতি এবং কোষে জারিত হওয়া পুষ্টির সঠিক অনুপাত নির্ধারণ করতে সাহায্য করে [2, 3]। ক্যালোরি ঘাটতির সময় শরীর যে বিপাকীয় অভিযোজনের মাধ্যমে শক্তি সঞ্চয় করতে চায় তা মনে রাখলে কাল্পনিক ডায়েটের ফাঁদ এড়িয়ে টেকসই স্বাস্থ্যবিধি তৈরি করা সম্ভব হয় [4, 6]।'
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
              'The thermodynamic energy balance equation states that the rate of change in total body energy storage ($dE_{store}/dt$) equals the rate of metabolizable energy intake ($E_{in}$) minus total energy expenditure ($E_{out}$) [1, 2]. Gross dietary energy, measured experimentally via bomb calorimetry as the heat of combustion, does not equate to biologically available energy. A portion of ingested energy is lost in feces as unabsorbed macronutrients and shedding enterocyte biomass, while another portion is lost in urine as combustible nitrogenous end products, principally urea, creatinine, and uric acid [1, 3].',
              'তাপগতিবিদ্যাগত শক্তি ভারসাম্য সমীকরণ অনুসারে দেহের শক্তি সঞ্চয়ের পরিবর্তনের হার ($dE_{store}/dt$) হলো বিপাকযোগ্য শক্তি গ্রহণ ($E_{in}$) এবং মোট শক্তি ব্যয়ের ($E_{out}$) বিয়োগফল [1, 2]। বোম্ব ক্যালোরিমেট্রিতে খাদ্যের যে স্থূল দহন তাপ পরিমাপ করা হয়, তা সরাসরি কোষে প্রাপ্ত জৈবিক শক্তির সমান নয়। অপাচ্য খাদ্য ও ব্যাকটেরিয়ার মাধ্যমে মলে এবং ইউরিয়া, ক্রিয়েটিনিন ও ইউরিক অ্যাসিডের মতো দাহ্য বর্জ্য হিসেবে মূত্রে শক্তির অপচয় ঘটে [1, 3]।'
            ),
            l(
              'Standard physiological Atwater factors correct for these fecal and urinary losses, yielding net metabolizable energy values: 4.0 kcal/g (16.7 kJ/g) for carbohydrates, 4.0 kcal/g (16.7 kJ/g) for proteins, 9.0 kcal/g (37.7 kJ/g) for triacylglycerols, and 7.0 kcal/g (29.3 kJ/g) for ethanol [1, 3]. When $E_{in} > E_{out}$, the surplus energy flux drives anabolic deposition: glucose is phosphorylated and polymerized into glycogen in hepatocyte and myocyte cytosol, while free fatty acids are esterified into triacylglycerols within adipocyte lipid droplets [1, 3]. When $E_{in} < E_{out}$, catabolic pathways dominate: glycogenolysis, intracellular lipolysis, hepatic ketogenesis, and gluconeogenesis mobilize substrate to maintain plasma glucose and sustain mitochondrial oxidative phosphorylation [2, 3].',
              'এই মল ও মূত্রীয় অপচয় সমন্বয় করে প্রমিত অ্যাটওয়াটার গুণক বিপাকযোগ্য শক্তির মান নির্ধারণ করেছে: শর্করার জন্য ৪.০ কিলোক্যালরি/গ্রাম, প্রোটিনের জন্য ৪.০ কিলোক্যালরি/গ্রাম, চর্বির জন্য ৯.০ কিলোক্যালরি/গ্রাম এবং অ্যালকোহলের জন্য ৭.০ কিলোক্যালরি/গ্রাম [1, 3]। যখন $E_{in} > E_{out}$ হয়, তখন উদ্বৃত্ত শক্তি অ্যানাবলিক সঞ্চয় ঘটায়: গ্লুকোজ যকৃত ও পেশিতে গ্লাইকোজেন হিসেবে জমা হয় এবং ফ্যাটি অ্যাসিড চর্বি কোষে ট্রাইগ্লিসারাইড গঠন করে [1, 3]। বিপরীতে শক্তি ঘাটতি দেখা দিলে গ্লাইকোজেনোলাইসিস, লিপোলাইসিস এবং গ্লুকোনিওজেনেসিসের মাধ্যমে সঞ্চিত জ্বালানি ভেঙে রক্তে গ্লুকোজ ও কোষীয় এটিপি সরবরাহ অব্যাহত রাখা হয় [2, 3]।'
            ),
            l(
              'Energy balance is rarely maintained in instantaneous zero-equilibrium across hourly intervals; rather, humans maintain dynamic homeostatic equilibrium over multiday and weekly cycles through complex neuroendocrine feedback loops [1, 4]. Circulating adiposity signals such as leptin, pancreatic insulin, and gut peptides like ghrelin, glucagon-like peptide-1 (GLP-1), and peptide YY (PYY) continuously signal hypothalamic and brainstem nuclei, adjusting appetite and autonomic outflow to coordinate intake with expenditure [1, 4].',
              'শক্তি ভারসাম্য কখনো মুহূর্তের মধ্যে নিখুঁত শূন্য-সমতায় থাকে না; বরং মানুষ বহুদিনের ও সাপ্তাহিক চক্রে স্নায়ু ও হরমোনীয় ফিডব্যাক লুপের মাধ্যমে গতিশীল ভারসাম্য রক্ষা করে [1, 4]। রক্তের লেপটিন, ইনসুলিন এবং অন্ত্রের ঘ্রেলিন, GLP-1 ও PYY হরমোন ক্রমাগত হাইপোথ্যালামাস ও ব্রেনস্টেম কেন্দ্রে চর্বির সঞ্চয় ও পুষ্টির প্রবেশ সম্পর্কে বার্তা পাঠায়, যা ক্ষুধা এবং স্বায়ত্তশাসিত স্নায়ুতন্ত্রের মাধ্যমে শক্তি ব্যয়ের হারকে সমন্বয় করে [1, 4]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Basal & Resting Metabolic Rate Determinants: The Energetics of Organs', 'বেসাল ও বিশ্রামকালীন বিপাকীয় হারের নিয়ন্ত্রক: অঙ্গভিত্তিক শক্তি ব্যয়'),
          paragraphs: [
            l(
              'Basal Metabolic Rate is tightly predicted by body composition, with Fat-Free Mass (FFM) explaining 60% to 80% of inter-individual variance [2, 3]. Organ-level in vivo respirometry and imaging studies demonstrate that metabolic activity is profoundly heterogeneous across body tissues [3]. The visceral organs possess mass-specific metabolic rates that are 20 to 30 times higher than resting skeletal muscle and over 50 times higher than adipose tissue [1, 3].',
              'বেসাল মেটাবলিক রেট প্রধানত দেহের গঠনের ওপর নির্ভরশীল, যেখানে চর্বিহীন দৈহিক ভর (FFM) ব্যক্তিভেদে ৬০% থেকে ৮০% পার্থক্যের বৈজ্ঞানিক ভিত্তি [2, 3]। অঙ্গভিত্তিক শ্বসন পরীক্ষা এবং ইমেজিং গবেষণায় দেখা গেছে যে দেহের বিভিন্ন কলায় বিপাকীয় শক্তি খরচের হার অত্যন্ত অসম [3]। অভ্যন্তরীণ অঙ্গসমূহের প্রতি গ্রাম ভরের শক্তি ব্যয়ের হার বিশ্রামরত কঙ্কালপেশির চেয়ে ২০ থেকে ৩০ গুণ এবং চর্বি কলার চেয়ে ৫০ গুণেরও বেশি [1, 3]।'
            ),
            l(
              'Quantitatively, resting metabolic expenditure breaks down across major organs as follows: the liver accounts for ~27% (metabolic synthesis, gluconeogenesis, transamination, bile generation), the brain ~19% (continuous action potentials, vesicular neurotransmitter recycling, ion gradient restoration), the heart ~7% (unremitting electromechanical contraction against systemic vascular resistance), the kidneys ~10% (active tubular reabsorption driven by Na+/K+-ATPase), skeletal muscle ~18% (resting tone and protein turnover), and white adipose tissue ~19% [1, 3].',
              'পরিমাণগতভাবে বিশ্রামকালীন শক্তি ব্যয়ের অঙ্গভিত্তিক বিভাজন নিম্নরূপ: যকৃত প্রায় ২৭% (গ্লুকোনিওজেনেসিস, ডিঅ্যামিনেশন ও পিত্ত উৎপাদন), মস্তিষ্ক প্রায় ১৯% (অবিরাম অ্যাকশন পটেনশিয়াল ও নিউরোট্রান্সমিটার পুনর্ব্যবহার), হৃৎপিণ্ড প্রায় ৭% (অবিরাম রক্ত পাম্পিং), বৃক্ক প্রায় ১০% (সোডিয়াম সক্রিয় পুনঃশোষণ), কঙ্কালপেশি প্রায় ১৮% (পেশির স্বাভাবিক টান ও প্রোটিন পুনর্গঠন) এবং চর্বি কলা প্রায় ১৯% খরচ করে [1, 3]।'
            ),
            l(
              'At the cellular level, BMR is driven by three dominant biochemical processes: continuous active ion transport against electrochemical gradients (primarily Na+/K+-ATPase and sarcoplasmic/endoplasmic reticulum Ca2+-ATPase, consuming ~25–30% of basal ATP); continuous protein synthesis and polypeptide elongation (~20–25% of basal ATP); and basal mitochondrial proton leak across the inner mitochondrial membrane (~20–25% of basal oxygen consumption) mediated by adenine nucleotide translocase (ANT) and uncoupling protein isoforms [1, 3].',
              'কোষীয় ও আণবিক স্তরে বিএমআরের চালিকাশক্তি হলো তিনটি প্রধান জৈবরাসায়নিক প্রক্রিয়া: তড়িৎ-রাসায়নিক গ্রেডিয়েন্টের বিপরীতে সক্রিয় আয়ন পরিবহন (প্রধানত Na+/K+-ATPase এবং ক্যালসিয়াম পাম্প, যা ২৫-৩০% এটিপি খরচ করে); নিরবচ্ছিন্ন প্রোটিন সংশ্লেষণ ও পেপটাইড চেইন গঠন (২০-২৫% এটিপি); এবং মাইটোকন্ড্রিয়াল ঝিল্লির মধ্য দিয়ে অনিয়ন্ত্রিত প্রোটন লিকেজ (মোট অক্সিজেন খরচের ২০-২৫%), যা অ্যাডেনিন নিউক্লিওটাইড ট্রান্সলোকেজ ও আনকপলিং প্রোটিনের মাধ্যমে ঘটে [1, 3]।'
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
              'Carbohydrate TEF encompasses intestinal active glucose transport via SGLT1 (driven by the sodium gradient), hepatic phosphorylation by glucokinase, and glycogen synthesis, which requires 1 mole of ATP per mole of glucose incorporated into glycogen (~5% energy loss). If excess carbohydrate undergoes hepatic de novo lipogenesis to form palmitate, the biochemical energy cost climbs to ~20–25% of the substrate’s caloric value [2, 3]. Dietary fat exhibits the lowest TEF (0–3%) because re-esterification of absorbed 2-monoacylglycerols and free fatty acids into triacylglycerols within the enterocyte requires only 2 ATP equivalents per triacylglycerol molecule synthesized [2, 3].',
              'শর্করার টিইএফের মধ্যে অন্তর্ভুক্ত হলো SGLT1 দিয়ে অন্ত্রে সক্রিয় শোষণ, গ্লুকোকাইনেজ দিয়ে ফসফোরাইলেশন এবং গ্লাইকোজেন সংশ্লেষণ; যাতে প্রতি মোল গ্লুকোজ গ্লাইকোজেনে যুক্ত করতে ১ মোল এটিপি খরচ হয় (~৫% শক্তি অপচয়)। কিন্তু শর্করা যদি যকৃতে ডি নভো লিপোজেনেসিসের মাধ্যমে চর্বিতে রূপান্তরিত হয়, তবে খরচের হার বেড়ে ২০-২৫% এ পৌঁছায় [2, 3]। অন্যদিকে খাদ্যের চর্বির টিইএফ সর্বনিম্ন (০-৩%), কারণ শোষিত ফ্যাটি অ্যাসিডকে অন্ত্রের কোষে পুনরায় ট্রাইগ্লিসারাইড বানাতে প্রতি অণুতে মাত্র ২টি এটিপি খরচ হয় [2, 3]।'
            ),
            l(
              'Physical activity thermogenesis comprises EAT and NEAT [4]. NEAT encompasses all non-exercise movement including occupational physical work, ambulation, fidgeting, and the maintenance of postural muscle tone. Human overfeeding trials reveal that increases in spontaneous NEAT protect certain individuals against fat accumulation, whereas decreases in NEAT facilitate weight gain during periods of energy abundance [4]. Hypothalamic orexinergic circuits (orexin A and B peptides) projecting to the locus coeruleus and substantia nigra modulate spontaneous physical activity, explaining biological variance in spontaneous movement [1, 4].',
              'শারীরিক পরিশ্রমজনিত শক্তি ব্যয় ইএটি এবং এনইএটি নিয়ে গঠিত [4]। এনইএটি হলো সারাদিনের পেশাগত কাজ, হাঁটাচলা এবং শারীরিক অঙ্গভঙ্গি বজায় রাখার যাবতীয় নড়াচড়া। অতিরিক্ত খাবার গ্রহণের গবেষণায় দেখা গেছে যে স্বতঃস্ফূর্ত এনইএটি বৃদ্ধি কিছু ব্যক্তিকে চর্বি জমা থেকে রক্ষা করে, পক্ষান্তরে আসীন জীবনযাত্রায় এনইএটি হ্রাস ওজন বৃদ্ধিতে সহায়ক হয় [4]। হাইপোথ্যালামাসের ওরেক্সিনার্জিক নিউরন থেকে নির্গত ওরেক্সিন পেপটাইড মস্তিষ্কের লোকাস সিরুলিয়াস কেন্দ্রে সংকেত পাঠিয়ে স্বাভাবিক নড়াচড়া নিয়ন্ত্রণ করে, যা মানুষের এনইএটির জৈবিক ভিন্নতা ব্যাখ্যা করে [1, 4]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Indirect Calorimetry, Weir Equation & Metabolic Adaptation', 'পরোক্ষ ক্যালোরিমেট্রি, উইয়ার সমীকরণ ও বিপাকীয় অভিযোজন'),
          paragraphs: [
            l(
              'Indirect calorimetry quantifies metabolic rate via open-circuit spirometry by measuring oxygen consumption (VO2, L/min) and carbon dioxide expiration (VCO2, L/min) [2]. The consolidated Weir equation calculates Energy Expenditure (kcal/day) = [3.941 × VO2 (L/day)] + [1.106 × VCO2 (L/day)] - [2.17 × Urinary Nitrogen (g/day)] [2, 3]. The Respiratory Quotient (VCO2 / VO2) distinguishes substrate partitioning: 1.00 for glucose, 0.707 for palmitate, and ~0.82 for pure protein [3].',
              'পরোক্ষ ক্যালোরিমেট্রি ওপেন-সার্কিট স্পাইরোমেট্রির মাধ্যমে অক্সিজেন গ্রহণ (VO2) এবং কার্বন ডাই অক্সাইড নির্গমন (VCO2) পরিমাপ করে শক্তি ব্যয়ের হিসাব দেয় [2]। সুপ্রতিষ্ঠিত উইয়ার সূত্র অনুসারে দৈনিক শক্তি ব্যয় (kcal/day) = [৩.৯৪১ × VO2] + [১.১০৬ × VCO2] - [২.১৭ × মূত্রের নাইট্রোজেন] [2, 3]। শ্বসন অনুপাত (VCO2 / VO2) জ্বালানির ধরন নির্ধারণ করে: গ্লুকোজের জন্য ১.০০, পামিটেটের জন্য ০.৭০৭ এবং বিশুদ্ধ প্রোটিনের জন্য প্রায় ০.৮২ [3]।'
            ),
            l(
              'The stoichiometric basis of the Respiratory Quotient reflects cellular balancing: for glucose oxidation, C6H12O6 + 6 O2 → 6 CO2 + 6 H2O, yielding RQ = 6 / 6 = 1.00. For tripalmitin, 2 C51H98O6 + 145 O2 → 102 CO2 + 98 H2O, yielding RQ = 102 / 145 = 0.703 [3]. When non-protein urinary nitrogen is accounted for, the non-protein RQ (npRQ) enables clinicians to calculate the exact gram-quantities of carbohydrate and lipid undergoing whole-body oxidation using Zuntz-Schumburg and Lusk tables [2, 3].',
              'শ্বসন অনুপাতের রাসায়নিক ভিত্তি হলো সম্পূর্ণ জারণের অনুপাত: গ্লুকোজের ক্ষেত্রে C6H12O6 + ৬ O2 → ৬ CO2 + ৬ H2O, ফলে RQ = ৬ / ৬ = ১.০০। ট্রাইপামিটাইন চর্বির ক্ষেত্রে ২ C51H98O6 + ১৪৫ O2 → ১০২ CO2 + ৯৮ H2O, ফলে RQ = ১০২ / ১৪৫ = ০.৭০৩ [3]। মূত্রের নাইট্রোজেন বাদ দিয়ে নন-প্রোটিন আরকিউ (npRQ) হিসাব করে লাস্ক টেবিলের সাহায্যে সম্পূর্ণ দেহে ঠিক কত গ্রাম শর্করা এবং কত গ্রাম চর্বি জারিত হচ্ছে তা নিখুঁতভাবে বের করা সম্ভব হয় [2, 3]।'
            ),
            l(
              'Prolonged hypocaloric dieting induces Adaptive Thermogenesis: a reduction in resting and non-resting energy expenditure that exceeds what is expected from the measured reduction in fat mass and fat-free mass [1, 4]. Suppressed thyroid hormone triiodothyronine ($T_3$), plummeting adipocyte leptin, and diminished sympathovagal tone lower mitochondrial uncoupling, defending energy reserves against perceived starvation [1, 4, 6]. Prospective trials in severe weight loss demonstrate persistent reductions of 300 to 500 kcal/day in resting expenditure that endure for years following weight reduction [4, 6].',
              'দীর্ঘমেয়াদী কম ক্যালোরির খাদ্যাভ্যাসে অ্যাডাপ্টিভ থার্মোজেনেসিস দেখা দেয়: অর্থাৎ চর্বি ও চর্বিহীন ভর কমার ফলে যেটুকু বিপাকীয় হার কমার কথা ছিল, শরীর তার চেয়েও অতিরিক্ত হারে খরচ কমিয়ে দেয় [1, 4]। থাইরয়েড হরমোন ($T_3$) হ্রাস, লেপটিনের পতন এবং সিম্প্যাথেটিক স্নায়ুতন্ত্রের শিথিলতা মাইটোকন্ড্রিয়াল শক্তি খরচ কমিয়ে অনাহারের বিরুদ্ধে আত্মরক্ষা করে [1, 4, 6]। নিবিড় ওজন হ্রাসের গবেষণায় দেখা গেছে যে ওজন কমার পরও কয়েক বছর ধরে বিশ্রামকালীন বিপাকীয় হার দৈনিক ৩০০ থেকে ৫০০ কিলোক্যালরি পর্যন্ত অবদমিত থাকতে পারে [4, 6]।'
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
            l(
              'Formulas comparing body composition versus simple weight demonstrate important diagnostic distinctions: while the Harris-Benedict equation (1919/1984) tends to overestimate RMR in overweight individuals by 5% to 15%, the Cunningham equation ($RMR = 500 + 22 \times \text{FFM in kg}$) provides exceptional precision for highly trained athletes whose muscular mass renders weight-based formulas inaccurate [2, 3]. In clinical nutrition support, avoiding overfeeding is just as critical as preventing underfeeding: excessive caloric infusion in critical care induces severe hepatic steatosis, hypercapnia ($CO_2$ retention impairing ventilator weaning), and refeeding syndrome [1, 2].',
              'শারীরিক গঠন বনাম সাধারণ ওজনের ওপর ভিত্তি করে তৈরি সমীকরণগুলো গুরুত্বপূর্ণ পার্থক্য তুলে ধরে: হ্যারিস-বেনেডিক্ট সূত্র অতিরিক্ত ওজনের মানুষের ক্ষেত্রে ৫% থেকে ১৫% অতিরিক্ত হিসাব দিতে পারে; পক্ষান্তরে কানিংহাম সূত্র ($RMR = ৫০০ + ২২ \times \text{FFM কেজি}$) পেশিবহুল অ্যাথলেটদের ক্ষেত্রে অতুলনীয় নির্ভুলতা প্রদর্শন করে [2, 3]। ক্লিনিক্যাল পুষ্টি সহায়তায় রোগীকে প্রয়োজনের অতিরিক্ত ক্যালোরি দেওয়াও অনাহারে রাখার মতোই বিপজ্জনক: অতিরিক্ত খাদ্য ইনফিউশন যকৃতে চর্বি জমা, রক্তে অতিরিক্ত কার্বন ডাই অক্সাইড সঞ্চয়ন (যা ভেন্টিলেটর থেকে রোগীকে মুক্ত করতে বাধা দেয়) এবং রিফিডিং সিন্ড্রোম ডেকে আনে [1, 2]।'
            ),
          ],
          bullets: [
            l('Mifflin-St Jeor formula: RMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in yr) + 5 [men] or - 161 [women] [2].', 'মিফলিন সূত্র: RMR = (১০ x ওজন কেজি) + (৬.২৫ x উচ্চতা সেমি) - (৫ x বয়স বছর) + ৫ [পুরুষ] অথবা - ১৬১ [নারী] [2]।'),
            l('Cunningham formula: RMR = 500 + 22 x Fat-Free Mass (kg), ideal for athletic populations with known body composition [3].', 'কানিংহাম সূত্র: RMR = ৫০০ + ২২ x চর্বিহীন ভর (কেজি), যা ক্রীড়াবিদদের জন্য সর্বাধিক উপযোগী [3]।'),
            l('Physical Activity Level (PAL): Sedentary = 1.2–1.3, Moderately active = 1.6–1.7, Heavy occupational = 1.9–2.2 [2].', 'শারীরিক পরিশ্রম সূচক (PAL): আসীন = ১.২–১.৩, মধ্যম সক্রিয় = ১.৬–১.৭, ভারী কায়িক শ্রম = ১.৯–২.২ [2]।'),
            l('Metabolic adaptation reduces TDEE beyond simple mass loss during sustained weight reduction [4, 6].', 'দীর্ঘমেয়াদী ওজন হ্রাসে বিপাকীয় অভিযোজন সাধারণ ভর হ্রাসের চেয়েও বেশি হারে মোট শক্তি ব্যয় কমিয়ে দেয় [4, 6]।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Academic Review', 'মূল শিক্ষা ও একাডেমিক সারাংশ'),
          paragraphs: [
            l(
              'Energy balance is an integrated neuroendocrine system governed by physical laws and molecular feedback loops. BMR constitutes the major portion of TDEE and is determined by metabolically active fat-free mass, with visceral organs consuming the overwhelming majority of basal ATP [1, 3]. Indirect calorimetry uses oxygen uptake and carbon dioxide expiration via the Weir equation to compute energy expenditure and substrate combustion [2, 3].',
              'শক্তি ভারসাম্য হলো ভৌত সূত্র এবং আণবিক সংকেত দ্বারা পরিচালিত একটি সমন্বিত নিউরোএন্ডোক্রাইন ব্যবস্থা। বিএমআর মোট ব্যয়ের সিংহভাগ গঠন করে এবং তা চর্বিহীন সক্রিয় কোষীয় ভরের ওপর নির্ভরশীল, যেখানে অভ্যন্তরীণ অঙ্গসমূহ বেসাল এটিপির সিংহভাগ খরচ করে [1, 3]। পরোক্ষ ক্যালোরিমেট্রি গ্যাস বিনিময়ের সাহায্যে উইয়ার সূত্রের মাধ্যমে শক্তি খরচ এবং কোষে জারিত পুষ্টির সঠিক অনুপাত নির্ধারণ করে [2, 3]।'
            ),
            l(
              'The metabolic response to energy restriction involves multi-organ neuroendocrine downregulations that reduce total energy expenditure beyond predicted tissue losses, explaining long-term weight regain vulnerabilities [4, 6]. Comprehensive clinical nutrition requires integrating predictive formulas with body composition metrics and metabolic monitoring [1, 2].',
              'শক্তি ঘাটতির শারীরবৃত্তীয় প্রতিক্রিয়ায় বহু-অঙ্গীয় নিউরোএন্ডোক্রাইন অবদমন ঘটে যা টিস্যু ক্ষয়ের প্রত্যাশিত মাত্রার চেয়েও বেশি হারে শক্তি ব্যয় কমিয়ে দেয়, যা ওজন পুনরায় বেড়ে যাওয়ার অন্যতম প্রধান কারণ [4, 6]। আধুনিক ক্লিনিক্যাল পুষ্টি চিকিৎসায় গাণিতিক সূত্রের পাশাপাশি শারীরিক গঠন এবং বিপাকীয় পর্যবেক্ষণ সমন্বিত করা অপরিহার্য [1, 2]।'
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
          heading: l('Thermodynamic Limits, Energy Flux & Dynamic Systems Biology', 'তাপগতিবিদ্যাগত সীমা, শক্তি প্রবাহ ও গতিশীল সিস্টেম বায়োলজি'),
          paragraphs: [
            l(
              'Contemporary nutritional bioenergetics rejects static energy balance paradigms (such as the historical 3,500 kcal per pound rule formulated by Wishnofsky in 1958) in favor of non-linear dynamic systems biology models [1, 4]. Dr. Kevin Hall and colleagues demonstrated that because fat-free mass and fat mass have vastly disparate energetic costs of maintenance (~13 kcal/kg/day for FFM versus ~4.5 kcal/kg/day for adipose tissue) and distinct biochemical efficiencies of deposition (~1,800 kcal/kg for FFM versus ~9,400 kcal/kg for fat mass), any alteration in body mass alters maintenance expenditure dynamically across time [1, 4].',
              'আধুনিক পুষ্টি জৈবশক্তিবিজ্ঞান উইশনফস্কির ঐতিহাসিক ৩৫০০ ক্যালোরি নিয়মের মতো সরল স্থির মডেলকে পুরোপুরি বর্জন করে অ-রৈখিক গতিশীল সিস্টেম বায়োলজি মডেল গ্রহণ করেছে [1, 4]। ড. কেভিন হল এবং সহকর্মীরা গাণিতিকভাবে প্রমাণ করেছেন যে চর্বিহীন ভর এবং চর্বি কলার রক্ষণাবেক্ষণের শক্তি খরচ সম্পূর্ণ আলাদা (FFM এর জন্য দৈনিক প্রায় ১৩ কিলোক্যালরি/কেজি বনাম চর্বির জন্য মাত্র ৪.৫ কিলোক্যালরি/কেজি) এবং নতুন টিস্যু তৈরির খরচও ভিন্ন (FFM এর জন্য ~১৮০০ কিলোক্যালরি/কেজি বনাম চর্বির জন্য ~৯৪০০ কিলোক্যালরি/কেজি); ফলে শরীরের ওজন পরিবর্তনের সাথে সাথে রক্ষণাবেক্ষণ ব্যয় সময়ের সাথে সাথে অবিরাম পরিবর্তিত হতে থাকে [1, 4]।'
            ),
            l(
              'Furthermore, the concept of Energy Flux (G-flux)—the absolute rate of daily energy turnover—exerts profound regulatory control over appetite and body composition [1, 4]. Individuals living in high energy flux states (high energy intake paired with high energy expenditure driven by exercise and NEAT) exhibit significantly tighter coupling between appetite and physiological caloric need, improved insulin sensitivity, and attenuated metabolic adaptation compared to individuals in low energy flux states maintaining neutral balance at very low caloric intake and sedentary activity [1, 4].',
              'অধিকন্তু, "এনার্জি ফ্লাক্স" (G-flux) বা দৈনিক শক্তি আদান-প্রদানের সামগ্রিক গতি ক্ষুধা এবং দেহের গঠনের ওপর গভীর প্রভাব বিস্তার করে [1, 4]। যারা উচ্চ শক্তি প্রবাহ অবস্থায় থাকেন (অর্থাৎ প্রচুর কায়িক পরিশ্রম ও ব্যায়ামের মাধ্যমে বেশি ক্যালোরি পোড়ান এবং বেশি সুষম খাবার গ্রহণ করেন), তাদের ক্ষুধা ও শরীরের চাহিদার মধ্যে সংকেত আদান-প্রদান অত্যন্ত নিখুঁত থাকে; তাদের ইনসুলিন সংবেদনশীলতা চমৎকার থাকে এবং বিপাকীয় স্থবিরতা কম দেখা দেয়—যা খুব কম খেয়ে বসে থাকা ব্যক্তিদের ক্ষেত্রে দেখা যায় না [1, 4]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Cellular Bioenergetics: Futile Substrate Cycles & Mitochondrial Proton Leak', 'কোষীয় জৈবশক্তিবিজ্ঞান: ফিউটাইল সাবস্ট্রেট চক্র ও প্রোটন লিকেজ'),
          paragraphs: [
            l(
              'A significant fraction of basal metabolic expenditure is dissipated as heat through substrate futile cycles and mitochondrial proton leak mechanisms [1, 3]. In hepatocytes, simultaneous activation of opposing enzymatic reactions—such as the phosphorylation of fructose-6-phosphate to fructose-1,6-bisphosphate by phosphofructokinase-1 paired with the dephosphorylation of fructose-1,6-bisphosphate by fructose-1,6-bisphosphatase—consumes ATP without generating net biochemical product, dissipating chemical energy directly as thermogenesis [3].',
              'বেসাল মেটাবলিজমের একটি উল্লেখযোগ্য অংশ "ফিউটাইল সাবস্ট্রেট চক্র" এবং মাইটোকন্ড্রিয়াল প্রোটন লিকেজের মাধ্যমে তাপ হিসেবে নির্গত হয় [1, 3]। যকৃতের কোষে একই সাথে দুটি বিপরীতমুখী এনজাইমের সক্রিয়তা—যেমন ফসফোফ্রুক্টোকাইনেজ-১ দ্বারা ফ্রুক্টোজ-৬-ফসফেটকে ফসফোরাইলেশন করা এবং ফ্রুক্টোজ-১,৬-বিসফসফাটেজ দ্বারা পুনরায় ডিফসফোরাইলেশন করা—কোনো নতুন রাসায়নিক যৌগ তৈরি না করেই নিট এটিপি নষ্ট করে এবং সরাসরি তাপ উৎপন্ন করে [3]।'
            ),
            l(
              'In the inner mitochondrial membrane, the proton motive force generated by the electron transport chain is not 100% coupled to ATP synthase [1, 3]. Basal proton leak occurs through the adenine nucleotide translocase (ANT) and inducible uncoupling proteins (UCP1 in brown adipose tissue; UCP2 in reticuloendothelial cells; UCP3 in skeletal muscle) [3]. This uncoupling serves a critical physiological purpose: by reducing the mitochondrial membrane potential (ΔΨm), it suppresses electron stall at Complex I and Complex III, drastically reducing the formation of superoxide radicals and protecting cells against oxidative stress [1, 3].',
              'মাইটোকন্ড্রিয়ার অভ্যন্তরীণ ঝিল্লিতে ইলেকট্রন ট্রান্সপোর্ট চেইনের তৈরি প্রোটন মোটিভ ফোর্স কখনোই এটিপি সিন্থেজের সাথে শতভাগ যুক্ত থাকে না [1, 3]। অ্যাডেনিন নিউক্লিওটাইড ট্রান্সলোকেজ (ANT) এবং আনকপলিং প্রোটিনের (বাদামী চর্বিতে UCP1, অনাক্রম্য কোষে UCP2 এবং পেশিতে UCP3) মাধ্যমে স্বাভাবিক প্রোটন লিকেজ ঘটে [3]। এই আনকপলিং একটি অত্যন্ত গুরুত্বপূর্ণ শারীরবৃত্তীয় ভূমিকা পালন করে: এটি মাইটোকন্ড্রিয়াল ঝিল্লি বিভব (ΔΨm) সামান্য কমিয়ে দিয়ে কমপ্লেক্স-১ এবং কমপ্লেক্স-৩ এ ইলেকট্রন আটকে থাকা রোধ করে, যা ক্ষতিকর সুপারঅক্সাইড ফ্রি র্যাডিক্যাল তৈরি কমিয়ে কোষকে জারণ চাপ থেকে রক্ষা করে [1, 3]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Neuroendocrine Counter-Regulation: Leptin, Thyroid & Autonomic Signatures', 'নিউরোএন্ডোক্রাইন সংকেত: লেপটিন, থাইরয়েড ও স্বায়ত্তশাসিত স্নায়বিক রূপরেখা'),
          paragraphs: [
            l(
              'The molecular orchestration of adaptive thermogenesis during caloric deficit is coordinated by a triad of neuroendocrine signals: falling circulating leptin, suppressed active triiodothyronine ($T_3$), and diminished sympathetic nervous system (SNS) efferent tone [1, 4]. As adipocyte lipid droplets shrink, leptin mRNA transcription drops precipitously. The loss of leptin binding to LepRb receptors in the hypothalamic arcuate nucleus de-represses orexigenic Neuropeptide Y (NPY) and Agouti-Related Peptide (AgRP) neurons while inactivating anorexigenic Pro-opiomelanocortin (POMC) and Cocaine- and Amphetamine-Regulated Transcript (CART) neurons [1, 4].',
              'ক্যালোরি ঘাটতির সময় অ্যাডাপ্টিভ থার্মোজেনেসিসের আণবিক নিয়ন্ত্রণ মূলত তিনটি নিউরোএন্ডোক্রাইন সংকেতের সমন্বয়ে ঘটে: রক্তে লেপটিনের পতন, সক্রিয় ট্রাইআইওডোথাইরোনিন ($T_3$) হ্রাস এবং সিম্প্যাথেটিক স্নায়ুতন্ত্রের শিথিলতা [1, 4]। চর্বি কোষের আকার সংকুচিত হওয়ার সাথে সাথে লেপটিনের উৎপাদন দ্রুত হ্রাস পায়। হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াসে লেপটিন রিসেপ্টরে সংকেত না পৌঁছালে ক্ষুধা উদ্দীপক NPY এবং AgRP নিউরন তীব্রভাবে সক্রিয় হয় এবং ক্ষুধা দমনকারী POMC/CART নিউরন নিষ্ক্রিয় হয়ে পড়ে [1, 4]।'
            ),
            l(
              'Simultaneously, hepatic and skeletal muscle type 1 and type 2 iodothyronine deiodinases (DIO1, DIO2) downregulate the peripheral conversion of thyroxine ($T_4$) into active $T_3$, while type 3 deiodinase (DIO3) shunts conversion toward inactive reverse-$T_3$ ($rT_3$) [1, 3]. Diminished nuclear $T_3$ receptor binding suppresses transcriptional coactivator PGC-1alpha and mitochondrial biogenesis, reducing skeletal muscle ATPase activity and slowing baseline metabolic cycling to conserve survival calories [1, 3, 6].',
              'একই সময়ে যকৃত ও কঙ্কালপেশির ডিআইও১ ও ডিআইও২ এনজাইম নিষ্ক্রিয় হয়ে থাইরক্সিন ($T_4$) থেকে সক্রিয় $T_3$ রূপান্তর কমিয়ে দেয়, এবং ডিআইও৩ এনজাইম তাকে নিষ্ক্রিয় রিভার্স-$T_3$ ($rT_3$) তে রূপান্তরিত করে [1, 3]। নিউক্লিয়াসে সক্রিয় $T_3$ এর অভাব PGC-1alpha এবং মাইটোকন্ড্রিয়াল বায়োজেনেসিস অবদমিত করে, যা পেশির এটিপেজ সক্রিয়তা কমিয়ে দিয়ে শক্তি বাঁচিয়ে রাখার চূড়ান্ত প্রতিরক্ষামূলক রূপরেখা তৈরি করে [1, 3, 6]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Advanced Systems Dynamics: Energy Flux, Metabolic Plasticity & Set-Point Models', 'উচ্চতর সিস্টেম গতিবিদ্যা: শক্তি প্রবাহ, বিপাকীয় প্লাস্টিসিটি ও সেট-পয়েন্ট মডেল'),
          paragraphs: [
            l(
              'Contemporary nutritional research supersedes simplistic static energy balance models with dynamic mathematical systems biology [1, 4]. Kevin Hall and colleagues demonstrated that because fat-free mass and fat mass have distinct energetic costs of maintenance and synthesis, changes in body weight alter expenditure non-linearly over time [1, 4]. Energy expenditure does not drop instantaneously to a fixed new value; rather, neuroendocrine adaptation dynamically adjusts energy flux to defend fat stores [1, 4].',
              'আধুনিক পুষ্টিবিজ্ঞান গবেষণা সরল রৈখিক শক্তি ভারসাম্যের ধারণাকে গতিশীল গাণিতিক সিস্টেম বায়োলজি দ্বারা প্রতিস্থাপন করেছে [1, 4]। কেভিন হল এবং সহকর্মীরা দেখিয়েছেন যে চর্বিহীন ভর ও চর্বি কলার রক্ষণাবেক্ষণ ও সংশ্লেষণের শক্তি খরচ সম্পূর্ণ ভিন্ন হওয়ায় ওজন পরিবর্তনের সাথে সাথে শক্তি ব্যয়ের হার অ-রৈখিকভাবে পরিবর্তিত হয় [1, 4]। শক্তি ব্যয় কোনো নির্দিষ্ট বিন্দুতে হঠাৎ স্থির হয় না, বরং নিউরোএন্ডোক্রাইন অভিযোজন ক্রমাগত শক্তির প্রবাহকে সমন্বয় করে চর্বি সঞ্চয়কে রক্ষা করতে সচেষ্ট থাকে [1, 4]।'
            ),
            l(
              'The traditional "set-point" model proposed an invariant biological thermostat defending a rigid adipose mass. Modern evidence favors a dynamic "settling point" or "dual-intervention point" model, which posits that body weight settles at an equilibrium dictated by the interaction between intrinsic genetic susceptibility and external obesogenic environments [1, 4]. Within lower and upper physiological boundaries, weight fluctuates freely; however, when energy intake or expenditure threatens the lower boundary, robust neuroendocrine counter-regulatory mechanisms fire to stimulate intense hyperphagia and suppress energy expenditure [1, 4, 6].',
              'প্রচলিত "সেট-পয়েন্ট" মডেলে ভাবা হতো যে মস্তিষ্কে একটি নির্দিষ্ট থার্মোস্টেটের মতো শরীরের ওজন স্থির করা থাকে। কিন্তু আধুনিক গবেষণা "ডুয়াল-ইন্টারভেনশন পয়েন্ট" মডেলকে সমর্থন করে, যা প্রমাণ করে যে দেহের ওজন বংশগত জেনেটিক প্রবণতা এবং পরিবেশগত খাবারের প্রাচুর্যের মিথস্ক্রিয়ায় একটি স্থিতিশীল বিন্দুতে অবস্থান নেয় [1, 4]। একটি নির্দিষ্ট সীমার মধ্যে ওজন স্বাভাবিকভাবে ওঠা-নামা করলেও ওজন যখন নিচের সংকটপূর্ণ সীমার নিচে নেমে যায়, তখন মস্তিষ্ক তীব্র ক্ষুধা তৈরি করে এবং শক্তি ব্যয় অবদমিত করে ওজন ফিরে পেতে বাধ্য করে [1, 4, 6]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Frontier Research: Constrained Total Energy Expenditure Model & Long-Term Metabolic Follow-Up', 'অত্যাধুনিক গবেষণা: কনস্ট্রেইন্ড মোট শক্তি ব্যয় মডেল ও দীর্ঘমেয়াদী বিপাকীয় পর্যবেক্ষণ'),
          paragraphs: [
            l(
              'Herman Pontzer’s Constrained Total Energy Expenditure model provides compelling evolutionary evidence that human daily energy expenditure is tightly bounded within an evolved physiological ceiling [5]. Across diverse populations—from traditional hunter-gatherers (Hadza of Tanzania) to post-industrial Western adults—total daily energy expenditure per unit of fat-free mass remains remarkably constant; beyond moderate activity, the body downregulates baseline immune, reproductive, and inflammatory expenditures to constrain total energy output within physiological tolerance limits [1, 5].',
              'হারম্যান পন্টজারের কনস্ট্রেইন্ড টোটাল এনার্জি এক্সপেন্ডিচার মডেল বৈপ্লবিক বিবর্তনীয় প্রমাণ উপস্থাপন করেছে যে মানুষের দৈনিক শক্তি ব্যয় একটি প্রাকৃতিক শারীরবৃত্তীয় সীমার মধ্যে নিয়ন্ত্রিত থাকে [5]। তানজানিয়ার হাদজা শিকারী-সংগ্রাহক থেকে শুরু করে উন্নত বিশ্বের নগরবাসী পর্যন্ত চর্বিহীন ভরের অনুপাতে মোট দৈনিক শক্তি ব্যয় প্রায় একই রকম থাকে; অতিরিক্ত শারীরিক পরিশ্রমের ক্ষেত্রে দেহ তার ইমিউন, প্রজনন ও প্রদাহজনিত অভ্যন্তরীণ শক্তি ব্যয় কমিয়ে মোট শক্তি নির্গমনকে স্বাভাবিক সীমার মধ্যে আবদ্ধ রাখে [1, 5]।'
            ),
            l(
              'Long-term prospective data from the 6-year follow-up of contestants from "The Biggest Loser" (Fothergill et al., 2016) demonstrated that massive rapid weight loss produced an average metabolic adaptation of -500 kcal/day [6]. Six years later, despite substantial weight regain, metabolic adaptation persisted at -499 kcal/day, proving that metabolic slowing is not a transient acute phenomenon but can persist as a durable physiological brake against long-term weight maintenance [1, 6]. Clinically, these findings emphasize that long-term obesity treatment requires permanent structural lifestyle support, resistance training to preserve FFM, and pharmacological or surgical interventions when biological counter-regulation overwhelms voluntary behavioral effort [1, 6].',
              'বিখ্যাত "দ্য বিগেস্ট লুজার" প্রতিযোগীদের ৬ বছর পরের দীর্ঘমেয়াদী ফলো-আপ গবেষণায় (Fothergill et al., 2016) দেখা গেছে যে তীব্র দ্রুত ওজন কমানোর ফলে প্রতিযোগীদের বিএমআর প্রত্যাশার চেয়ে দৈনিক ৫০০ কিলোক্যালরি কমে গিয়েছিল [6]। বিস্ময়করভাবে, ছয় বছর পর ওজন পুনরায় বেড়ে যাওয়ার পরও তাদের বিপাকীয় অবদমন দৈনিক -৪৯৯ কিলোক্যালরিতে বহাল ছিল; যা প্রমাণ করে যে বিপাকীয় মন্থরতা কেবল ক্ষণস্থায়ী কোনো ঘটনা নয় বরং দীর্ঘস্থায়ী একটি শারীরবৃত্তীয় প্রতিক্রিয়া [1, 6]। চিকিৎসাগতভাবে এটি প্রমাণ করে যে স্থূলতার চিকিৎসায় কেবল ইচ্ছাশক্তির ওপর নির্ভর না করে দীর্ঘমেয়াদী জীবনযাত্রা পরিবর্তন, পেশি সুরক্ষায় রেজিস্ট্যান্স ব্যায়াম এবং প্রয়োজনে আধুনিক ওষুধ বা সার্জারির সমন্বয় প্রয়োজন [1, 6]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Advanced Research Synthesis', 'মূল শিক্ষা ও উচ্চতর গবেষণা সংশ্লেষ'),
          paragraphs: [
            l(
              'Human bioenergetics operates as an adaptive non-linear biological network governed by tissue-specific metabolic rates, energy flux dynamics, and mitochondrial uncoupling [1, 4]. The Constrained Energy Model demonstrates that exercise does not produce an open-ended linear increase in daily expenditure, but induces compensatory downregulations of vegetative metabolic processes to maintain energetic homeostasis within evolutionary boundaries [5].',
              'মানব জৈবশক্তিবিজ্ঞান একটি গতিশীল অ-রৈখিক নেটওয়ার্ক হিসেবে পরিচালিত হয় যা অঙ্গভিত্তিক শক্তির চাহিদা, শক্তি প্রবাহের তীব্রতা এবং মাইটোকন্ড্রিয়াল আনকপলিং দ্বারা নিয়ন্ত্রিত [1, 4]। পন্টজারের কনস্ট্রেইন্ড মডেল প্রমাণ করে যে ব্যায়াম সীমাহীনভাবে ক্যালোরি খরচ বাড়ায় না, বরং শরীর অন্যান্য অভ্যন্তরীণ অঙ্গের খরচ কমিয়ে বিবর্তনীয় সীমার মধ্যে শক্তি বজায় রাখে [5]।',
            ),
            l(
              'Sustained weight loss triggers enduring neuroendocrine adaptations—including suppressed leptin, decreased active T3, and elevated metabolic efficiency—that persist for years and aggressively promote weight regain [4, 6]. Successful clinical dietetics requires replacing simplistic caloric math with rigorous systems physiology, targeted resistance training to maintain fat-free mass, and evidence-based Medical Nutrition Therapy [1, 2, 4].',
              'দীর্ঘমেয়াদী খাদ্য ঘাটতিতে লেপটিন ও থাইরয়েড হরমোনের দীর্ঘস্থায়ী পতন ঘটে যা বহু বছর ধরে টিকে থাকে এবং ওজন ফিরিয়ে আনতে ক্রমাগত চাপ প্রয়োগ করে [4, 6]। সফল পুষ্টিবিজ্ঞানের জন্য সরল যোগ-বিয়োগের ক্যালোরি হিসাব পরিহার করে সিস্টেম শারীরবৃত্ত, চর্বিহীন ভর সুরক্ষায় নিবিড় ব্যায়াম এবং আধুনিক চিকিৎসা পুষ্টি থেরাপির সমন্বয় অপরিহার্য [1, 2, 4]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'Which component of Total Daily Energy Expenditure is the single most variable between healthy free-living adults of similar body composition?',
      'একই শারীরিক গঠনের সুস্থ মুক্ত জীবনযাত্রার প্রাপ্তবয়স্কদের মধ্যে মোট দৈনিক শক্তি ব্যয়ের কোন উপাদানটি ব্যক্তিভেদে সবচেয়ে বেশি পরিবর্তনশীল?'
    ),
    options: [
      l('Non-Exercise Activity Thermogenesis (NEAT)', 'নন-এক্সারসাইজ অ্যাক্টিভিটি থার্মোজেনেসিস (NEAT)'),
      l('Basal Metabolic Rate (BMR)', 'বেসাল মেটাবলিক রেট (BMR)'),
      l('Thermic Effect of Food (TEF)', 'খাদ্যের তাপীয় প্রভাব (TEF)'),
      l('Obligatory brain glucose oxidation', 'মস্তিষ্কের অপরিহার্য গ্লুকোজ জারণ'),
    ],
    correctIndex: 0,
    explanation: l(
      'NEAT varies by up to 2,000 kcal/day between sedentary and highly active occupations due to spontaneous differences in walking, standing, working, and fidgeting, making it the primary driver of inter-individual expenditure variance in free-living humans.',
      'আসীন ও অত্যন্ত সক্রিয় পেশার মানুষের মধ্যে হাঁটাচলা, দাঁড়িয়ে কাজ করা এবং স্বাভাবিক অস্থিরতার কারণে NEAT দৈনিক ২০০০ কিলোক্যালরি পর্যন্ত পরিবর্তিত হতে পারে, যা ব্যক্তিভেদে মোট ব্যয়ের পার্থক্যের প্রধান চালিকাশক্তি।'
    ),
  },
}
