import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics07References: LessonReference[] = [
  {
    id: 'ref-wolfe-protein-2006',
    authors: 'Wolfe RR',
    title: 'The Underappreciated Role of Muscle in Health and Disease',
    organization: 'The American Journal of Clinical Nutrition',
    year: 2006,
    url: 'https://academic.oup.com/ajcn/article/84/3/475/4648796',
    doi: '10.1093/ajcn/84.3.475',
  },
  {
    id: 'ref-prot-age-study-2013',
    authors: 'Bauer J, Biolo G, Cederholm T, et al.',
    title: 'Evidence-Based Recommendations for Optimal Dietary Protein Intake in Older People: A Position Paper from the PROT-AGE Study Group',
    organization: 'Journal of the American Medical Directors Association',
    year: 2013,
    url: 'https://www.jamda.com/article/S1525-8610(13)00326-5/fulltext',
    doi: '10.1016/j.jamda.2013.05.021',
  },
  {
    id: 'ref-kdoqi-guidelines-2020',
    authors: 'Ikizler TA, Burrowes JD, Byham-Gray LD, et al.',
    title: 'KDOQI Clinical Practice Guideline for Nutrition in CKD: 2020 Update',
    organization: 'American Journal of Kidney Diseases',
    year: 2020,
    url: 'https://www.ajkd.org/article/S0272-6386(20)30726-5/fulltext',
    doi: '10.1053/j.ajkd.2020.05.006',
  },
  {
    id: 'ref-paddon-jones-leucine-2009',
    authors: 'Paddon-Jones D, Rasmussen BB',
    title: 'Dietary Protein Recommendations and the Prevention of Sarcopenia',
    organization: 'Current Opinion in Clinical Nutrition and Metabolic Care',
    year: 2009,
    url: 'https://journals.lww.com/co-clinicalnutrition/Abstract/2009/01000/Dietary_protein_recommendations_and_the.14.aspx',
    doi: '10.1097/MCO.0b013e32831cef8b',
  },
  {
    id: 'ref-weijs-optimal-protein-icu',
    authors: 'Weijs PJ, Looijaard WG, Beishuizen A, Girbes AR, Oudemans-van Straaten HM',
    title: 'Early High Protein Intake Is Associated with Low Mortality and Energy Overfeeding with High Mortality in Non-Septic Mechanically Ventilated Critically Ill Patients',
    organization: 'Critical Care',
    year: 2014,
    url: 'https://ccforum.biomedcentral.com/articles/10.1186/s13054-014-0701-z',
    doi: '10.1186/s13054-014-0701-z',
  },
]

export const dietetics07ProteinRequirementsLesson: LessonTopic = {
  id: 'topic.dietetics.protein-requirements',
  slug: 'protein-requirements-metabolic-stress-kinetics',
  title: l(
    '07 · Clinical Protein Prescriptions: Nitrogen Balance & Hypercatabolic Titration',
    '০৭ · ক্লিনিক্যাল প্রোটিন প্রেসক্রিপশন: নাইট্রোজেন ভারসাম্য ও ক্যাটাবলিক সমন্বয়'
  ),
  summary: l(
    'Formulating clinical protein therapy across the disease spectrum: executing 24-hour urinary urea nitrogen balance kinetics, titrating hypercatabolic prescriptions from non-dialysis CKD restrictions to burn hypermetabolism, and engineering mealtime leucine trigger thresholds to maximize muscle protein synthesis.',
    'বিভিন্ন রোগের ক্ষেত্রে প্রোটিনের বৈজ্ঞানিক ব্যবস্থাপত্র: ২৪ ঘণ্টার ইউরিনারি ইউরিয়া নাইট্রোজেনের মাধ্যমে ভারসাম্য নির্ণয়, ডায়ালাইসিসবিহীন কিডনি রোগের প্রোটিন নিয়ন্ত্রণ থেকে তীব্র পোড়া রোগীর উচ্চ-প্রোটিন নির্ধারণ এবং পেশি গঠনে লিউসিন থ্রেশহোল্ড প্রয়োগ।'
  ),
  subject: 'dietetics',
  version: 1,
  updatedAt: '2026-11-03',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-03',
  prerequisiteIds: ['topic.dietetics.predictive-energy-equations'],
  relatedTopicIds: ['topic.dietetics.predictive-energy-equations', 'topic.metabolism.amino-acid-catabolism-urea-cycle'],
  objectives: [
    l(
      'Formulate tailored daily protein targets across diverse clinical states (healthy sedentary, geriatric sarcopenia, non-dialysis CKD, hemodialysis, and severe trauma).',
      'সুস্থ ব্যক্তি, বার্ধক্যের সারকোপেনিয়া, ডায়ালাইসিস-পূর্ব সিকেডি, হেমোডায়ালাইসিস এবং তীব্র ট্রমার জন্য সঠিক প্রোটিন প্রেসক্রিপশন নির্ধারণ করা।'
    ),
    l(
      'Calculate clinical Nitrogen Balance using 24-hour Urinary Urea Nitrogen (UUN) excretion to objectively evaluate tissue catabolism.',
      '২৪ ঘণ্টার ইউরিনারি ইউরিয়া নাইট্রোজেন (UUN) পরীক্ষার মাধ্যমে নাইট্রোজেন ব্যালেন্স হিসাব করে পেশির ক্ষয় গাণিতিকভাবে নিরূপণ করা।'
    ),
    l(
      'Apply KDOQI guidelines to prescribe low-protein diets (0.55–0.60 g/kg/day) for non-dialysis CKD stages 3–5 to preserve remaining nephrons.',
      'ডায়ালাইসিসবিহীন ক্রনিক কিডনি ডিজিজ স্টেজ ৩-৫ এর রোগীদের জন্য KDOQI নির্দেশিকা অনুযায়ী নিয়ন্ত্রিত প্রোটিন (০.৫৫-০.৬০ গ্রাম/কেজি) প্রদান করা।'
    ),
    l(
      'Explain the molecular mechanism of the "Leucine Trigger" (2.5–3.0 g leucine/meal) in activating mTORC1-mediated Muscle Protein Synthesis (MPS).',
      'প্রতিবেলার খাবারে ২.৫ থেকে ৩.০ গ্রাম লিউসিনের মাধ্যমে mTORC1 সক্রিয় করে মাংসপেশি তৈরির আণবিক প্রক্রিয়া ব্যাখ্যা করা।'
    ),
    l(
      'Design clinical refeeding titration schedules that target +2 to +4 g/day positive nitrogen balance for wound remodeling without precipitating uremia.',
      'অতিরিক্ত ইউরিয়া না বাড়িয়ে ক্ষত নিরাময় ও পেশি পুনর্গঠনের জন্য দিনে +২ থেকে +৪ গ্রাম পজিটিভ নাইট্রোজেন ব্যালেন্স অর্জন করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A clinical decision continuum chart of daily protein prescriptions per kilogram body weight across diseases: Non-dialysis CKD Stages 3–5 sits at 0.55–0.60 g/kg; Healthy baseline RDA at 0.8 g/kg; Geriatric sarcopenia at 1.0–1.2 g/kg; Hemodialysis and Peritoneal Dialysis at 1.2–1.4 g/kg; ICU sepsis and major surgery at 1.5–2.0 g/kg; and severe thermal burns at 2.0–2.5 g/kg.',
      'রোগভেদে প্রতি কেজি ওজনে দৈনিক প্রোটিন প্রেসক্রিপশনের সিদ্ধান্ত রেখাচিত্র: ডায়ালাইসিসবিহীন সিকেডি স্টেজ ৩-৫ এ ০.৫৫-০.৬০ গ্রাম/কেজি; সুস্থ মানুষের RDA ০.৮ গ্রাম/কেজি; বয়স্কদের সারকোপেনিয়ায় ১.০-১.২ গ্রাম/কেজি; ডায়ালাইসিসের ক্ষেত্রে ১.২-১.৪ গ্রাম/কেজি; আইসিইউ সেপসিস ও ট্রমাতে ১.৫-২.০ গ্রাম/কেজি; এবং মারাত্মক পোড়া রোগীর ক্ষেত্রে ২.০-২.৫ গ্রাম/কেজি।'
    ),
    steps: [
      l(
        'Step 1: Nephron Protection Window (0.55–0.60 g/kg). For non-dialysis CKD 3–5, restrict protein to decrease intraglomerular capillary hypertension and nitrogenous waste generation.',
        'ধাপ ১: কিডনি সুরক্ষার মাত্রা (০.৫৫-০.৬০ গ্রাম/কেজি): ডায়ালাইসিসবিহীন সিকেডি ৩-৫ এ কিডনির ভেতরের রক্তচাপ ও বর্জ্য কমাতে প্রোটিন নিয়ন্ত্রণ করা হয়।'
      ),
      l(
        'Step 2: Healthy Baseline & Geriatric Optimization (0.8–1.2 g/kg). Healthy adults require 0.8 g/kg; older adults require 1.0–1.2 g/kg to overcome anabolic resistance.',
        'ধাপ ২: সুস্থ ও বয়স্কদের মাত্রা (০.৮-১.২ গ্রাম/কেজি): সাধারণ সুস্থ মানুষের ০.৮ গ্রাম/কেজি এবং বয়স্কদের পেশি ক্ষয় রোধে ১.০-১.২ গ্রাম/কেজি প্রয়োজন।'
      ),
      l(
        'Step 3: Dialytic Replacement (1.2–1.4 g/kg). Hemodialysis filters remove 10–15g of free amino acids per session; dialysis patients require high protein to prevent protein-energy wasting.',
        'ধাপ ৩: ডায়ালাইসিস ক্ষতিপূরণ (১.২-১.৪ গ্রাম/কেজি): ডায়ালাইসিসের ফিল্টারে প্রচুর অ্যামিনো অ্যাসিড নষ্ট হয়, তাই ডায়ালাইসিসের রোগীদের উচ্চ প্রোটিন দেওয়া হয়।'
      ),
      l(
        'Step 4: Hypercatabolic Trauma & Burns (1.5–2.5 g/kg). Severe critical illness drives massive skeletal proteolysis; high-protein titration restores nitrogen balance and wound collagen.',
        'ধাপ ৪: তীব্র ট্রমা ও পোড়া রোগীর মাত্রা (১.৫-২.৫ গ্রাম/কেজি): মারাত্মক রোগ ও পোড়া রোগীদের পেশি দ্রুত ভেঙে যায়; তাই ক্ষত সারাতে উচ্চমাত্রার প্রোটিন প্রদান আবশ্যক।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 62-year-old male with Stage 4 Chronic Kidney Disease (non-dialysis, eGFR = 22 mL/min/1.73m², non-diabetic) presents to your nephrology nutrition clinic. He weighs 70 kg (BMI = 23.5 kg/m²). Based on the updated 2020 KDOQI Clinical Practice Guidelines for Nutrition in CKD, what is the recommended dietary protein prescription for this patient?',
      'ডায়ালাইসিসবিহীন স্টেজ ৪ ক্রনিক কিডনি ডিজিজে আক্রান্ত ৬২ বছর বয়সী পুরুষ (eGFR = ২২ mL/min/1.73m², ডায়াবেটিস নেই) নেফ্রোলজি ক্লিনিকে এসেছেন। তার ওজন ৭০ কেজি (বিএমআই ২৩.৫ kg/m²)। ২০২০ সালের আধুনিক KDOQI কিডনি পুষ্টি নির্দেশিকা অনুযায়ী এই রোগীর জন্য দৈনিক প্রোটিনের সঠিক প্রেসক্রিপশন কোনটি?'
    ),
    options: [
      l(
        'Prescribe 1.5–2.0 g/kg/day (105–140 g/day) to build up muscle reserves prior to starting dialysis.',
        'ডায়ালাইসিস শুরুর আগে পেশির শক্তি বাড়াতে দিনে ১.৫-২.০ গ্রাম/কেজি (১০৫-১৪০ গ্রাম/দিন) উচ্চ প্রোটিন প্রদান করা।'
      ),
      l(
        'Prescribe a low-protein diet providing 0.55–0.60 g dietary protein/kg body weight/day (38.5–42.0 g/day), or a very low-protein diet of 0.28–0.43 g/kg/day supplemented with essential amino acid / keto-acid analogs.',
        'একটি নিয়ন্ত্রিত লো-প্রোটিন ডায়েট প্রদান করা যাতে দিনে ০.৫৫-০.৬০ গ্রাম প্রোটিন/কেজি (৩৮.৫-৪২.০ গ্রাম/দিন) থাকে, অথবা কিটো-অ্যাসিড অ্যানালগ সহ ০.২৮-০.৪৩ গ্রাম/কেজি খুব কম প্রোটিন খাদ্যতালিকা দেওয়া।'
      ),
      l(
        'Completely eliminate all dietary protein (0.0 g/day) for 6 months to reverse glomerular sclerosis.',
        'কিডনির ক্ষত সারাতে টানা ৬ মাস খাবারের সব প্রোটিন (০.০ গ্রাম/দিন) সম্পূর্ণ বন্ধ রাখা।'
      ),
      l(
        'Prescribe exactly 0.8 g/kg/day without regard to renal function or glomerular filtration rate.',
        'কিডনির কার্যক্ষমতা বা ফিল্ট্রেশন রেট বিবেচনা না করে সাধারণ মানুষের মতো ঠিক ০.৮ গ্রাম/কেজি প্রোটিন দেওয়া।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'According to the KDOQI 2020 Clinical Practice Guidelines, adults with CKD stages 3–5 who are metabolically stable and not on dialysis should be prescribed a low-protein diet of 0.55–0.60 g/kg/day (or 0.28–0.43 g/kg with keto-acid analogs). This reduces uremic toxins (BUN, p-cresyl sulfate), reduces glomerular hyperfiltration and intraglomerular pressure, slows CKD progression, and delays the onset of dialysis without causing protein-energy wasting when energy intake is adequate (25–35 kcal/kg).',
      '২০২০ সালের KDOQI আন্তর্জাতিক নির্দেশিকা অনুসারে, ডায়ালাইসিসবিহীন সিকেডি স্টেজ ৩-৫ রোগীদের জন্য লো-প্রোটিন ডায়েট (০.৫৫-০.৬০ গ্রাম/কেজি/দিন) বা কিটো-অ্যাসিড সহ খুব কম প্রোটিন ডায়েট (০.২৮-০.৪৩ গ্রাম/কেজি/দিন) সুপারিশ করা হয়। এটি রক্তে ইউরিয়া ও বিষাক্ত বর্জ্য কমায়, কিডনির নেফ্রনের ওপর চাপ হ্রাস করে এবং রোগীকে দীর্ঘদিন ডায়ালাইসিস ছাড়াই স্বাভাবিক রাখতে সাহায্য করে।'
    ),
  },
  evidenceBySection: {
    'sec-protein-roles': ['ref-wolfe-protein-2006', 'ref-prot-age-study-2013'],
    'sec-different-protein-needs': ['ref-prot-age-study-2013', 'ref-kdoqi-guidelines-2020'],
    'sec-leucine-intro': ['ref-paddon-jones-leucine-2009', 'ref-prot-age-study-2013'],
    'sec-nitrogen-balance-kinetics': ['ref-wolfe-protein-2006', 'ref-weijs-optimal-protein-icu'],
    'sec-ckd-dialysis-dichotomy': ['ref-kdoqi-guidelines-2020'],
    'sec-leucine-threshold-mps': ['ref-paddon-jones-leucine-2009', 'ref-prot-age-study-2013'],
    'sec-icu-trauma-titration': ['ref-weijs-optimal-protein-icu', 'ref-wolfe-protein-2006'],
  },
  references: dietetics07References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-protein-roles',
          heading: l('1. Why Protein Is the Master Building Block', '১. প্রোটিন কেন শরীরের মূল নির্মাণ সামগ্রী?'),
          paragraphs: [
            l(
              'Proteins are the structural and functional machinery of the human body [1]. Every skeletal muscle fiber, antibody, digestive enzyme, and blood clotting factor is built from amino acids. While the body can store surplus energy as fat or glycogen, it has **no true storage pool for protein**; every gram of protein in your body is actively doing work as functional tissue.',
              'প্রোটিন হলো মানবদেহের গঠন ও কার্যক্ষমতার মূল ভিত্তি [1]। শরীরের প্রতিটি মাংসপেশি, রোগ প্রতিরোধী অ্যান্টিবডি, হজমকারী এনজাইম এবং রক্ত জমাট বাঁধার উপাদান অ্যামিনো অ্যাসিড দিয়ে তৈরি। শরীর অতিরিক্ত ক্যালোরি চর্বি বা গ্লাইকোজেন হিসেবে জমিয়ে রাখতে পারলেও, **প্রোটিনের কোনো সঞ্চয় ভাণ্ডার থাকে না**; শরীরের প্রতিটি গ্রাম প্রোটিনই কোনো না কোনো টিস্যুর অংশ হিসেবে কাজ করে।'
            ),
            l(
              'When you do not eat enough protein, or when severe illness increases your body’s breakdown rates, your liver and immune system cannibalize your skeletal muscles to harvest the amino acids needed for immediate survival [1, 2]. Over time, this leads to muscle wasting, weakness, bed sores, and immune failure.',
              'যখন আপনি পর্যাপ্ত প্রোটিন খান না, অথবা কোনো গুরুতর রোগের কারণে প্রোটিন ক্ষয়ের হার বেড়ে যায়, তখন শরীর বেঁচে থাকার জন্য নিজের মাংসপেশি ভেঙে প্রয়োজনীয় অ্যামিনো অ্যাসিড সংগ্রহ করে [1, 2]। এর ফলে ধীরে ধীরে পেশি শুকিয়ে যায়, শরীর দুর্বল হয়, ঘা শুকায় না এবং রোগ প্রতিরোধ ক্ষমতা নষ্ট হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'sec-different-protein-needs',
          heading: l('2. How Much Protein Do Different People Need?', '২. কার কতটুকু প্রোটিন প্রয়োজন?'),
          paragraphs: [
            l(
              'A common mistake is assuming that everyone needs the exact same amount of protein. Clinical science proves that protein needs vary dramatically depending on age and disease [2, 3]:',
              'একটি সাধারণ ভুল হলো ভাবা যে সবার একই পরিমাণ প্রোটিন দরকার। কিন্তু বিজ্ঞান প্রমাণ করেছে যে বয়স ও রোগের ভিত্তিতে প্রোটিনের চাহিদা সম্পূর্ণ আলাদা হয় [2, 3]:'
            ),
            l(
              '• **Healthy Sedentary Adult:** $0.8\\text{ g per kg}$ body weight (e.g., $56\\text{ g/day}$ for a $70\\text{ kg}$ adult).\n• **Older Adults (Age 65+):** $1.0\\text{--}1.2\\text{ g per kg}$ to prevent age-related muscle loss (sarcopenia).\n• **Kidney Disease (Non-dialysis):** Reduced to $0.55\\text{--}0.60\\text{ g per kg}$ to protect damaged kidneys from working too hard.\n• **Dialysis Patients:** Increased to $1.2\\text{--}1.4\\text{ g per kg}$ to replace protein lost in the dialysis filter machine.\n• **Severe Burns or ICU Trauma:** Increased to $1.5\\text{--}2.5\\text{ g per kg}$ to heal massive open wounds and fight infections.',
              '• **সুস্থ সাধারণ মানুষ:** প্রতি কেজি ওজনে $০.৮\text{ গ্রাম}$ প্রোটিন (যেমন ৭০ কেজি ওজনের মানুষের দিনে ৫৬ গ্রাম)।\n• **বয়োজ্যেষ্ঠ মানুষ (বয়স ৬৫+):** পেশি ক্ষয় রোধে প্রতি কেজিতে $১.০\text{ থেকে } ১.২\text{ গ্রাম}$ প্রোটিন।\n• **কিডনি রোগী (ডায়ালাইসিস ছাড়া):** কিডনির ওপর চাপ কমাতে প্রোটিন কমিয়ে প্রতি কেজিতে $০.৫৫\text{ থেকে } ০.৬০\text{ গ্রাম}$ দেওয়া হয়।\n• **ডায়ালাইসিসের রোগী:** মেশিনে প্রোটিন নষ্ট হওয়ার ক্ষতিপূরণে প্রতি কেজিতে $১.২\text{ থেকে } ১.৪\text{ গ্রাম}$ উচ্চ প্রোটিন দরকার।\n• **পোড়া বা ট্রমার রোগী:** ক্ষত নিরাময় ও ইনফেকশন ঠেকাতে প্রতি কেজিতে $১.৫\text{ থেকে } ২.৫\text{ গ্রাম}$ প্রচুর প্রোটিন প্রয়োজন।'
            ),
          ],
        },
        {
          id: 'sec-leucine-intro',
          heading: l('3. The Leucine Trigger for Muscle Growth', '৩. পেশি গঠনের "লিউসিন ট্রিগার"'),
          paragraphs: [
            l(
              'Eating small dribbles of protein throughout the day (e.g., 5g here and 5g there) fails to build muscle [4]. Your muscle cells have an internal chemical switch called mTOR. To flip this switch and trigger muscle protein building, you need to eat a meal containing at least **2.5 to 3 grams of the amino acid leucine** (equivalent to ~25–30g of high-quality protein like eggs, fish, dairy, or chicken) in a single sitting [4].',
              'সারাদিনে একটু একটু করে প্রোটিন খেলে (যেমন এখন ৫ গ্রাম, পরে ৫ গ্রাম) পেশি তৈরি হয় না [4]। পেশি কোষে mTOR নামের একটি সুইচ থাকে। পেশি তৈরির এই সুইচটি অন করতে প্রতিবেলার খাবারে অন্তত **২.৫ থেকে ৩.০ গ্রাম লিউসিন নামের অ্যামিনো অ্যাসিড** থাকতে হয় (যা ডিম, মাছ, দুধ বা মুরগির মতো উচ্চমানের প্রায় ২৫-৩০ গ্রাম প্রোটিন থেকে পাওয়া যায়) [4]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-nitrogen-balance-kinetics',
          heading: l('1. The Quantitative Nitrogen Balance Equation and Clinical Kinetics', '১. নাইট্রোজেন ভারসাম্যের গাণিতিক সমীকরণ ও ক্লিনিক্যাল গতিবিদ্যা'),
          paragraphs: [
            l(
              'Nitrogen balance is the reference clinical method for assessing whole-body protein turnover and adequacy of nutritional support [1, 5]. Because nitrogen constitutes approximately 16% of dietary protein by molecular weight, 1 gram of nitrogen represents $6.25\\text{ g}$ of protein ($1 / 0.16 = 6.25$).',
              'নাইট্রোজেন ব্যালেন্স হলো শরীরের প্রোটিন বিপাক এবং পুষ্টি চিকিৎসার সাফল্য যাচাইয়ের প্রধান ক্লিনিক্যাল পদ্ধতি [1, 5]। যেহেতু প্রোটিনে গড়ে ১৬% নাইট্রোজেন থাকে, তাই ১ গ্রাম নাইট্রোজেন সমান $৬.২৫\text{ গ্রাম}$ প্রোটিন ($১ / ০.১৬ = ৬.২৫$)।'
            ),
            l(
              'Clinical Nitrogen Balance is calculated from a timed 24-hour urine collection measuring Urinary Urea Nitrogen (UUN) [1]:',
              '২৪ ঘণ্টার প্রস্রাবের ইউরিয়া নাইট্রোজেন (UUN) মেপে নিচের সমীকরণে নাইট্রোজেন ভারসাম্য হিসাব করা হয় [1]:'
            ),
            l(
              '$$\\text{Nitrogen Balance (g/day)} = \\left( \\frac{\\text{Protein Intake (g)}}{6.25} \\right) - \\left( \\text{24-hr UUN (g)} + 4.0 \\right)$$',
              '$$\\text{নাইট্রোজেন ব্যালেন্স (গ্রাম/দিন)} = \\left( \\frac{\\text{প্রোটিন গ্রহণ (গ্রাম)}}{৬.২৫} \\right) - \\left( \\text{২৪ ঘণ্টার UUN (গ্রাম)} + ৪.০ \\right)$$'
            ),
            l(
              'The constant $+4.0$ accounts for unmeasured nitrogen losses: $2.0\\text{ g}$ for non-urea urinary nitrogen (ammonia, creatinine, uric acid, amino acids) and $2.0\\text{ g}$ for obligatory fecal, dermal, and integumentary losses [1]. A balance of $0$ indicates maintenance; negative balance indicates active proteolysis; and $+2\\text{ to } +4\\text{ g N/day}$ is the therapeutic target for tissue remodeling.',
              'এখানে ধ্রুবক $+৪.০$ হলো না মাপা অন্যান্য ক্ষতি: $২.০\text{ গ্রাম}$ প্রস্রাবের অন্যান্য নাইট্রোজেন (অ্যামোনিয়া, ক্রিয়েটিনিন, ইউরিক অ্যাসিড) এবং $২.০\text{ গ্রাম}$ ত্বক, ঘাম ও মলের মাধ্যমে অপচয় [1]। ব্যালেন্স $০$ হলে সমতা, মাইনাস হলে পেশি ক্ষয় এবং $+২\text{ থেকে } +৪\text{ গ্রাম/দিন}$ হলো ক্ষত সারাতে কাঙ্ক্ষিত থেরাপিউটিক লক্ষ্য।'
            ),
          ],
        },
        {
          id: 'sec-ckd-dialysis-dichotomy',
          heading: l('2. The Renal Dichotomy: Non-Dialysis CKD vs Dialysis Hypercatabolism', '২. কিডনি রোগের দ্বিমুখী নীতি: ডায়ালাইসিসবিহীন বনাম ডায়ালাইসিস ক্যাটাবলিজম'),
          paragraphs: [
            l(
              'In clinical nephrology, protein prescribing follows a profound therapeutic dichotomy between pre-dialysis and dialysis states [3]:',
              'কিডনি পুষ্টিতে ডায়ালাইসিস শুরুর আগে এবং পরে প্রোটিন ব্যবস্থাপত্রে এক নাটকীয় বিপরীতমুখী পরিবর্তন ঘটে [3]:'
            ),
            l(
              '1. **Non-Dialysis CKD Stages 3–5 ($eGFR < 60\\text{ mL/min}$):** Damaged nephrons suffer intraglomerular capillary hypertension. Amino acid catabolism generates nitrogenous uremic toxins (urea, guanidines, sulfates, indoxyl sulfate). The 2020 KDOQI guidelines recommend a **Low-Protein Diet (LPD) of 0.55–0.60 g/kg/day** to reduce glomerular hyperfiltration, slow eGFR decline, and delay dialysis onset [3].\n2. **Maintenance Dialysis (Hemodialysis & Peritoneal Dialysis):** The moment a patient initiates dialysis, the prescription flips from restriction to aggressive supplementation: **1.2–1.4 g/kg/day** [3]. Dialysis filters clear 10–15g of free amino acids per treatment, while the artificial dialyzer membrane triggers cytokine activation that drives severe protein catabolism and muscle wasting.',
              '১. **ডায়ালাইসিসবিহীন সিকেডি স্টেজ ৩-৫ ($eGFR < ৬০\text{ mL/min}$):** ক্ষতিগ্রস্ত কিডনির নেফ্রনের ওপর রক্তচাপ কমাতে এবং বিষাক্ত বর্জ্য (ইউরিয়া, সালফেট) হ্রাস করতে ২০২০ KDOQI নির্দেশিকা অনুযায়ী **০.৫৫-০.৬০ গ্রাম/কেজি/দিন লো-প্রোটিন ডায়েট** দেওয়া হয়, যা কিডনি দীর্ঘদিন ভালো রাখতে সাহায্য করে [3]।\n২. **ডায়ালাইসিসের রোগী (হেমোডায়ালাইসিস ও পেরিটনিয়াল):** ডায়ালাইসিস শুরু হলেই নিয়ম উল্টে গিয়ে উচ্চ প্রোটিন দিতে হয়: **১.২-১.৪ গ্রাম/কেজি/দিন** [3]। প্রতিবার ডায়ালাইসিসে ১০-১৫ গ্রাম অ্যামিনো অ্যাসিড মেশিনেই নষ্ট হয়ে যায় এবং কৃত্রিম ফিল্টার রক্তে প্রদাহ তৈরি করে পেশি দ্রুত ভেঙে দেয়।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-leucine-threshold-mps',
          heading: l('1. The Leucine Trigger Hypothesis and mTORC1 Signal Transduction', '১. লিউসিন ট্রিগার হাইপোথিসিস ও mTORC1 সংকেত পরিবাহন'),
          paragraphs: [
            l(
              'Muscle Protein Synthesis (MPS) is fundamentally regulated by the mechanistic Target of Rapamycin Complex 1 (mTORC1) [4]. Intracellular sensing of essential amino acids—specifically the branched-chain amino acid **L-Leucine**—activates the Sestrin2-GATOR2 pathway, recruiting mTORC1 to the lysosomal membrane via Rag GTPases.',
              'মাংসপেশি গঠনের আণবিক প্রক্রিয়া পরিচালিত হয় mTORC1 নামের প্রোটিন কমপ্লেক্সের মাধ্যমে [4]। কোষে থাকা পুষ্টি সেন্সরগুলো মূলত ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিড **এল-লিউসিনের (L-Leucine)** উপস্থিতি শনাক্ত করে লাইসোজোমের গায়ে mTORC1 কমপ্লেক্সকে সক্রিয় করে তোলে।'
            ),
            l(
              'Once activated, mTORC1 phosphorylates downstream effectors: ribosomal protein S6 kinase 1 (p70S6K) and eukaryotic initiation factor 4E-binding protein 1 (4E-BP1), initiating ribosomal translation of skeletal muscle myofibrillar actin and myosin [4].',
              'সক্রিয় mTORC1 পরবর্তীতে p70S6K এবং 4E-BP1 কে ফসফোরাইলেশনের মাধ্যমে উদ্দীপ্ত করে রাইবোসোমে নতুন মাংসপেশির অ্যাকটিন ও মায়োসিন প্রোটিন তৈরির কাজ শুরু করায় [4]।'
            ),
            l(
              'Crucially, this pathway operates as an all-or-none digital switch known as the **Leucine Trigger** [4]. In young adults, ~1.8–2.0 g of leucine per meal triggers maximal MPS. In older adults and catabolic patients with "anabolic resistance," the threshold rises to **2.5 to 3.0 g of leucine per bolus meal** [2, 4]. Consuming meals below this threshold fails to activate translation, regardless of total daily protein intake.',
              'এই পথটি একটি "অন-অফ সুইচের" মতো কাজ করে যাকে **লিউসিন ট্রিগার** বলা হয় [4]। তরুণদের প্রতিবেলায় ১.৮-২.০ গ্রাম লিউসিন লাগলেও বয়স্ক ও অসুস্থ রোগীদের পেশি প্রতিরোধী (Anabolic resistance) হয়ে যাওয়ায় প্রতিবেলায় **২.৫ থেকে ৩.০ গ্রাম লিউসিন** অপরিহার্য [2, 4]। এই পরিমাণের কম প্রোটিন খেলে শরীরে কোনো নতুন পেশি গঠিত হয় না।'
            ),
          ],
        },
        {
          id: 'sec-icu-trauma-titration',
          heading: l('2. Hypercatabolic Titration in Critical Trauma, Sepsis and Severe Burns', '২. ট্রমা, সেপসিস ও পোড়া রোগীদের ক্ষেত্রে ক্যাটাবলিক প্রোটিন টাইট্রেশন'),
          paragraphs: [
            l(
              'In severe metabolic stress—such as polytrauma, septic shock, and thermal burns covering $>20\\%$ Total Body Surface Area (TBSA)—the hypothalamic-pituitary-adrenal axis unleashes massive spikes of cortisol, glucagon, epinephrine, and cytokines [1, 5]. This induces profound activation of the **ATP-ubiquitin-proteasome proteolytic cascade** in skeletal muscle, exporting amino acids (glutamine, alanine) to the liver for gluconeogenesis and acute-phase protein synthesis.',
              'মারাত্মক ট্রমা, সেপসিস বা ২০%-এর বেশি পুড়ে যাওয়া রোগীদের ক্ষেত্রে কর্টিসোল, এপিনেফ্রিন ও সাইটোকাইন হরমোনের বন্যা বয়ে যায় [1, 5]। এটি পেশির ভেতরে প্রোটিন ভাঙার যন্ত্রপাতি (ATP-ubiquitin-proteasome) পুরোদমে চালু করে দেয়, যার ফলে পেশি ভেঙে গ্লুকোজ ও প্রতিরক্ষা প্রোটিন তৈরিতে ব্যবহৃত হতে থাকে।'
            ),
            l(
              'Patients can lose over $20\\text{ g of nitrogen/day}$ (equivalent to $>600\\text{ g of wet muscle tissue/day}$) [1]. To blunt this catastrophic wasting, ASPEN guidelines mandate high-protein delivery [5]:',
              'এই সংকটাপন্ন রোগীরা প্রতিদিন ২০ গ্রামের বেশি নাইট্রোজেন হারাতে পারে (যা দিনে ৬০০ গ্রামের বেশি পেশি ধ্বংসের সমান) [1]। এই মারাত্মক অপচয় রোধ করতে আন্তর্জাতিক নির্দেশিকা উচ্চমাত্রার প্রোটিন প্রেসক্রিপশন নির্ধারণ করে [5]:'
            ),
            l(
              '$$\\begin{aligned} &\\textbf{Major Surgery / Sepsis / Polytrauma:} \\quad 1.5\\text{--}2.0\\text{ g protein/kg actual weight/day} \\\\ &\\textbf{Severe Thermal Burns (>30% TBSA):} \\quad 2.0\\text{--}2.5\\text{ g protein/kg actual weight/day} \\\\ &\\textbf{Obese ICU Patients (BMI 30--39.9):} \\quad \\ge 2.0\\text{ g protein/kg IBW/day} \\\\ &\\textbf{Obese ICU Patients (BMI } \\ge 40\\text{):} \\quad \\ge 2.5\\text{ g protein/kg IBW/day} \\end{aligned}$$',
              '$$\\begin{aligned} &\\textbf{বড় অস্ত্রোপচার / সেপসিস / ট্রমা:} \\quad ১.৫\\text{--}২.০\\text{ গ্রাম প্রোটিন/কেজি প্রকৃত ওজন/দিন} \\\\ &\\textbf{তীব্র পোড়া রোগী (>৩০% TBSA):} \\quad ২.০\\text{--}২.৫\\text{ গ্রাম প্রোটিন/কেজি প্রকৃত ওজন/দিন} \\\\ &\\textbf{স্থূল আইসিইউ রোগী (বিএমআই ৩০--৩৯.৯):} \\quad \\ge ২.০\\text{ গ্রাম প্রোটিন/কেজি IBW/দিন} \\\\ &\\textbf{চরম স্থূল আইসিইউ রোগী (বিএমআই } \\ge ৪০\\text{):} \\quad \\ge ২.৫\\text{ গ্রাম প্রোটিন/কেজি IBW/দিন} \\end{aligned}$$'
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Nitrogen Balance Equation & Clinical Kinetics', '১. নাইট্রোজেন ভারসাম্য সমীকরণ ও গতিবিদ্যা'), sectionId: 'sec-nitrogen-balance-kinetics' },
      { id: 'toc-2', label: l('2. Renal Dichotomy: Non-Dialysis vs Dialysis', '২. কিডনির দ্বিমুখী নীতি: ডায়ালাইসিস ছাড়া বনাম ডায়ালাইসিস'), sectionId: 'sec-ckd-dialysis-dichotomy' },
      { id: 'toc-3', label: l('3. Leucine Trigger Hypothesis & mTORC1', '৩. লিউসিন ট্রিগার ও mTORC1 সংকেত পথ'), sectionId: 'sec-leucine-threshold-mps' },
      { id: 'toc-4', label: l('4. Hypercatabolic Titration in Burns & Trauma', '৪. ট্রমা ও পোড়া রোগীর প্রোটিন টাইট্রেশন'), sectionId: 'sec-icu-trauma-titration' },
    ],
    terms: [
      {
        term: l('Nitrogen Balance', 'নাইট্রোজেন ভারসাম্য (Nitrogen Balance)'),
        definition: l(
          'The quantitative mathematical difference between dietary nitrogen intake and total biological nitrogen excretion: (Protein / 6.25) - (UUN + 4).',
          'খাদ্যে গৃহীত নাইট্রোজেন এবং শরীর থেকে নির্গত নাইট্রোজেনের গাণিতিক পার্থক্য: (প্রোটিন / ৬.২৫) - (UUN + ৪)।'
        ),
      },
      {
        term: l('Urinary Urea Nitrogen (UUN)', 'ইউরিনারি ইউরিয়া নাইট্রোজেন (UUN)'),
        definition: l(
          'The mass of urea nitrogen excreted in a 24-hour urine collection, reflecting the catabolic rate of systemic protein breakdown.',
          '২৪ ঘণ্টার প্রস্রাবে নির্গত ইউরিয়ার নাইট্রোজেনের মোট পরিমাণ, যা শরীরে প্রোটিন ভাঙার গতি নির্দেশ করে।'
        ),
      },
      {
        term: l('Leucine Trigger', 'লিউসিন ট্রিগার (Leucine Trigger)'),
        definition: l(
          'The minimum intracellular concentration of leucine (~2.5–3.0 g/meal) required to activate mTORC1 and initiate muscle protein synthesis.',
          'প্রতিবেলার খাবারে লিউসিনের ন্যূনতম মাত্রা (~২.৫-৩.০ গ্রাম), যা কোষে mTORC1 সক্রিয় করে পেশি তৈরির সংকেত দেয়।'
        ),
      },
      {
        term: l('mTORC1', 'এমটরসি১ (mTORC1)'),
        definition: l(
          'Mechanistic Target of Rapamycin Complex 1; the master cellular serine/threonine protein kinase orchestrating cell growth and protein translation.',
          'কোষের প্রধান নিয়ন্ত্রক এনজাইম কমপ্লেক্স, যা পুষ্টি ও অ্যামিনো অ্যাসিডের সংকেত পেয়ে পেশি প্রোটিন সংশ্লেষণ পরিচালনা করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Reversing Severe Negative Nitrogen Balance in an ICU Surgical Trauma Patient',
          'বাস্তব কেস স্টাডি: আইসিইউর ট্রমা রোগীর তীব্র নেগেটিভ নাইট্রোজেন ব্যালেন্স দূরীকরণ'
        ),
        steps: [
          l(
            'Step 1: Patient Profile & Current Nutrition. A 62-year-old male post-motor vehicle collision with multiple pelvic fractures is intubated in the ICU. Weight = 75 kg. He is receiving a standard 1.0 kcal/mL enteral formula delivering 1,800 kcal and 60 g protein/day ($0.8\\text{ g/kg}$).',
            'ধাপ ১: রোগীর তথ্য ও বর্তমান খাদ্য: সড়ক দুর্ঘটনায় মারাত্মক আহত ৬২ বছর বয়সী ভেন্টিলেটরের পুরুষ রোগী (ওজন ৭৫ কেজি)। তিনি সাধারণ টিউব ফিডিংয়ে দিনে ১৮০০ ক্যালোরি ও ৬০ গ্রাম প্রোটিন ($০.৮\text{ গ্রাম/কেজি}$) পাচ্ছেন।'
          ),
          l(
            'Step 2: Measure 24-Hour Urinary Urea Nitrogen (UUN). A 24-hour urine collection reveals an excreted UUN of 18.5 g.',
            'ধাপ ২: ২৪ ঘণ্টার প্রস্রাবের নাইট্রোজেন পরীক্ষা: ল্যাবে ২৪ ঘণ্টার প্রস্রাবের UUN পাওয়া গেল ১৮.৫ গ্রাম।'
          ),
          l(
            'Step 3: Calculate Current Nitrogen Balance. $\\text{Nitrogen Intake} = 60 / 6.25 = 9.6\\text{ g N/day}$. $\\text{Nitrogen Output} = 18.5 + 4.0 = 22.5\\text{ g N/day}$. $\\text{Nitrogen Balance} = 9.6 - 22.5 = -12.9\\text{ g N/day}$.',
            'ধাপ ৩: বর্তমান নাইট্রোজেন ব্যালেন্স হিসাব: গৃহীত নাইট্রোজেন = ৬০ / ৬.২৫ = ৯.৬ গ্রাম। নির্গত নাইট্রোজেন = ১৮.৫ + ৪.০ = ২২.৫ গ্রাম। ব্যালেন্স = ৯.৬ - ২২.৫ = -১২.৯ গ্রাম/দিন।'
          ),
          l(
            'Step 4: Quantify Muscle Loss. Losing $12.9\\text{ g of nitrogen/day}$ means losing: $12.9 \\times 6.25 = 80.6\\text{ g of dry protein/day}$. Because wet muscle is ~20% protein and 80% water, this equates to losing: $80.6 \\times 5 = 403\\text{ g of skeletal muscle tissue}$ (nearly 1 pound of muscle) every single day!',
            'ধাপ ৪: পেশি ক্ষয়ের পরিমাণ হিসাব: দিনে ১২.৯ গ্রাম নাইট্রোজেন হারানোর অর্থ হলো দিনে ৮০.৬ গ্রাম বিশুদ্ধ প্রোটিন ধ্বংস হওয়া। যেহেতু জীবন্ত মাংসপেশিতে ৮০% পানি থাকে, তাই রোগী দিনে ৮০.৬ x ৫ = ৪০৩ গ্রাম জীবন্ত মাংসপেশি হারাচ্ছেন (প্রতিদিন প্রায় আধা কেজি পেশি ধ্বংস)!'
          ),
          l(
            'Step 5: Formulate the Titrated Prescription. Target a positive nitrogen balance of $+2.0\\text{ g N/day}$ for pelvic bone healing. Target Nitrogen Intake = $22.5 + 2.0 = 24.5\\text{ g N/day}$. Target Protein Intake = $24.5 \\times 6.25 = 153.1\\text{ g protein/day} \\approx 150\\text{ g/day}$ ($2.0\\text{ g/kg}$). The dietitian switches to a high-protein ICU formula providing 150g protein/day.',
            'ধাপ ৫: সঠিক প্রোটিন প্রেসক্রিপশন: হাড় ও ক্ষত সারাতে কাঙ্ক্ষিত লক্ষ্য $+২.০\\text{ গ্রাম N/দিন}$। প্রয়োজনীয় নাইট্রোজেন = ২২.৫ + ২.০ = ২৪.৫ গ্রাম। প্রয়োজনীয় প্রোটিন = ২৪.৫ x ৬.২৫ = ১৫৩ গ্রাম প্রোটিন/দিন ($\\approx ২.০\\text{ গ্রাম/কেজি}$)। পুষ্টি দল অবিলম্বে উচ্চ-প্রোটিন ফর্মুলায় উন্নীত করে দিনে ১৫০ গ্রাম প্রোটিন সরবরাহ নিশ্চিত করে।'
          ),
        ],
        conclusion: l(
          'Quantifying nitrogen balance revealed that standard feeding was allowing massive daily skeletal muscle destruction. Titrating protein to 2.0 g/kg (150 g/day) halted proteolysis and enabled successful wound healing and extubation.',
          'নাইট্রোজেন ব্যালেন্স পরীক্ষার মাধ্যমে প্রমাণিত হয় যে সাধারণ খাবারে রোগীর দিনে ৪০০ গ্রাম করে মাংসপেশি ধ্বংস হচ্ছিল। প্রোটিন বাড়িয়ে ১৫০ গ্রাম (২.০ গ্রাম/কেজি) করায় পেশি ক্ষয় বন্ধ হয় এবং রোগী দ্রুত সুস্থ হয়ে ভেন্টিলেটর মুক্ত হন।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why do older adults require a higher per-meal leucine threshold (2.5–3.0 g) compared to younger adults to stimulate muscle protein synthesis?',
          'মাংসপেশি তৈরির সংকেত জাগাতে তরুণদের চেয়ে বয়স্কদের প্রতিবেলার খাবারে কেন বেশি লিউসিন (২.৫-৩.০ গ্রাম) প্রয়োজন হয়?'
        ),
        answer: l(
          'Aging is characterized by "anabolic resistance," where skeletal muscle tissue exhibits diminished sensitivity to amino acid stimulation and hyperinsulinemia. Downstream signaling kinases (mTORC1, p70S6K) require a higher intracellular concentration of leucine to surpass the activation threshold and initiate myofibrillar protein translation in senescent muscle fibers.',
          'বয়স বাড়ার সাথে সাথে পেশি কোষগুলোতে "অ্যানাবলিক রেজিস্ট্যান্স" তৈরি হয়, যার ফলে অ্যামিনো অ্যাসিডের প্রতি পেশির সংবেদনশীলতা কমে যায়। তাই বয়স্ক পেশি কোষে প্রোটিন তৈরির প্রধান সুইচ mTORC1 সক্রিয় করতে তরুণদের চেয়ে অনেক বেশি ঘনত্বের লিউসিন (প্রতিবেলায় ২.৫-৩.০ গ্রাম) প্রয়োজন হয়।'
        ),
      },
      {
        question: l(
          'Why must protein be restricted in non-dialysis Stage 4 CKD, but aggressively increased once the patient begins hemodialysis?',
          'ডায়ালাইসিস ছাড়া স্টেজ ৪ সিকেডিতে কেন প্রোটিন কমানো হয়, অথচ হেমোডায়ালাইসিস শুরু করার সাথে সাথেই কেন প্রচুর প্রোটিন দেওয়া হয়?'
        ),
        answer: l(
          'In non-dialysis CKD, restricting protein (0.55–0.60 g/kg) reduces intraglomerular hypertension and slows the accumulation of toxic nitrogenous uremic waste products in diseased kidneys. However, once dialysis begins, the artificial filter clears 10–15g of amino acids per run, and blood contact with dialyzer tubing triggers massive inflammatory cytokines that accelerate proteolysis. High protein (1.2–1.4 g/kg) is required to prevent fatal Protein-Energy Wasting (PEW).',
          'ডায়ালাইসিসের আগে প্রোটিন কমালে কিডনির রক্তনালীর চাপ কমে এবং ইউরিয়া কম জমে কিডনির আয়ু বাড়ে। কিন্তু একবার ডায়ালাইসিস শুরু হলে ডায়ালাইসিস মেশিনের ফিল্টারে প্রতিবার ১০-১৫ গ্রাম জরুরি অ্যামিনো অ্যাসিড রক্ত থেকে বের হয়ে নষ্ট হয়ে যায় এবং মেশিনের কৃত্রিম নল রক্তে প্রদাহ সৃষ্টি করে পেশি দ্রুত ভেঙে দেয়। তাই ডায়ালাইসিসের রোগীকে অপুষ্টি ও মৃত্যু থেকে বাঁচাতে উচ্চমাত্রার প্রোটিন (১.২-১.৪ গ্রাম/কেজি) দেওয়া বাধ্যতামূলক।'
        ),
      },
    ],
  },
}

