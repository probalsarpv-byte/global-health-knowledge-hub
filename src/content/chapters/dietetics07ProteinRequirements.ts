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
    'A masterclass in clinical protein prescribing across human health and disease: understanding why the body has no true protein storage reservoir, calculating 24-hour urinary urea nitrogen balance kinetics, navigating the renal dichotomy between pre-dialysis restriction and dialysis hypercatabolism, and engineering the mealtime leucine trigger to overcome anabolic resistance.',
    'মানবদেহের সুস্থতা ও বিভিন্ন রোগে প্রোটিনের বিজ্ঞানভিত্তিক ব্যবস্থাপত্র: শরীরে প্রোটিনের কোনো সঞ্চয় ভাণ্ডার না থাকার শারীরবৃত্তীয় কারণ, ২৪ ঘণ্টার ইউরিনারি ইউরিয়া নাইট্রোজেনের মাধ্যমে ভারসাম্য নির্ণয়, ডায়ালাইসিসবিহীন কিডনি রোগের প্রোটিন নিয়ন্ত্রণ বনাম ডায়ালাইসিসের উচ্চ-প্রোটিন নীতি এবং পেশি ক্ষয় রোধে লিউসিন ট্রিগারের প্রয়োগ।'
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
      'Formulate precision daily protein prescriptions per kilogram body weight across diverse clinical states (healthy sedentary, geriatric sarcopenia, non-dialysis CKD, hemodialysis, and critical trauma).',
      'সুস্থ ব্যক্তি, বার্ধক্যের সারকোপেনিয়া, ডায়ালাইসিসবিহীন সিকেডি, হেমোডায়ালাইসিস এবং তীব্র ট্রমার জন্য প্রতি কেজি ওজনে দৈনিক প্রোটিনের সঠিক ব্যবস্থাপত্র নির্ধারণ করা।'
    ),
    l(
      'Calculate clinical Nitrogen Balance using timed 24-hour Urinary Urea Nitrogen (UUN) excretion to objectively quantify somatic muscle proteolysis.',
      '২৪ ঘণ্টার ইউরিনারি ইউরিয়া নাইট্রোজেন (UUN) পরীক্ষার মাধ্যমে নাইট্রোজেন ভারসাম্য হিসাব করে রোগীর মাংসপেশি ক্ষয়ের সঠিক পরিমাণ গাণিতিকভাবে নিরূপণ করা।'
    ),
    l(
      'Apply updated KDOQI guidelines to prescribe low-protein diets (0.55–0.60 g/kg/day) for non-dialysis CKD stages 3–5 to preserve glomerular architecture and delay dialysis.',
      'ডায়ালাইসিসবিহীন ক্রনিক কিডনি ডিজিজ স্টেজ ৩-৫ এর রোগীদের জন্য KDOQI নির্দেশিকা অনুযায়ী নিয়ন্ত্রিত প্রোটিন (০.৫৫-০.৬০ গ্রাম/কেজি) প্রদান করে কিডনির আয়ু বৃদ্ধি করা।'
    ),
    l(
      'Explain the molecular mechanism of the "Leucine Trigger" (2.5–3.0 g leucine per meal) in activating mTORC1-mediated Muscle Protein Synthesis (MPS) to overcome anabolic resistance.',
      'প্রতিবেলার খাবারে ২.৫ থেকে ৩.০ গ্রাম লিউসিনের মাধ্যমে mTORC1 সক্রিয় করে বার্ধক্য ও অসুস্থতায় মাংসপেশি তৈরির আণবিক প্রক্রিয়া ব্যাখ্যা করা।'
    ),
    l(
      'Design clinical refeeding titration schedules that target +2 to +4 g/day positive nitrogen balance for wound remodeling without precipitating uremia or hyperphosphatemia.',
      'অতিরিক্ত ইউরিয়া না বাড়িয়ে ক্ষত নিরাময় ও পেশি পুনর্গঠনের জন্য দিনে +২ থেকে +৪ গ্রাম পজিটিভ নাইট্রোজেন ভারসাম্য অর্জনের থেরাপিউটিক শিডিউল প্রণয়ন করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A clinical decision continuum chart of daily protein prescriptions per kilogram body weight across health and disease: Non-dialysis CKD Stages 3–5 sits at the restricted floor of 0.55–0.60 g/kg; Healthy baseline RDA sits at 0.8 g/kg; Geriatric sarcopenia optimization requires 1.0–1.2 g/kg; Hemodialysis and Peritoneal Dialysis require 1.2–1.4 g/kg; ICU sepsis and major surgery escalate to 1.5–2.0 g/kg; and severe thermal burns (> 30% TBSA) peak at 2.0–2.5 g/kg.',
      'রোগভেদে প্রতি কেজি ওজনে দৈনিক প্রোটিন প্রেসক্রিপশনের সিদ্ধান্ত রেখাচিত্র: ডায়ালাইসিসবিহীন সিকেডি স্টেজ ৩-৫ এ ০.৫৫-০.৬০ গ্রাম/কেজি; সুস্থ মানুষের RDA ০.৮ গ্রাম/কেজি; বয়স্কদের সারকোপেনিয়ায় ১.০-১.২ গ্রাম/কেজি; ডায়ালাইসিসের ক্ষেত্রে ১.২-১.৪ গ্রাম/কেজি; আইসিইউ সেপসিস ও ট্রমাতে ১.৫-২.০ গ্রাম/কেজি; এবং মারাত্মক পোড়া রোগীর ক্ষেত্রে ২.০-২.৫ গ্রাম/কেজি।'
    ),
    steps: [
      l(
        'Step 1: Nephron Protection Window (0.55–0.60 g/kg). For non-dialysis CKD 3–5, restrict protein to decrease intraglomerular capillary hypertension and nitrogenous uremic waste generation.',
        'ধাপ ১: কিডনি সুরক্ষার মাত্রা (০.৫৫-০.৬০ গ্রাম/কেজি): ডায়ালাইসিসবিহীন সিকেডি ৩-৫ এ কিডনির ভেতরের রক্তচাপ ও বিষাক্ত বর্জ্য কমাতে প্রোটিন কঠোরভাবে নিয়ন্ত্রণ করা হয়।'
      ),
      l(
        'Step 2: Healthy Baseline & Geriatric Optimization (0.8–1.2 g/kg). Healthy young adults require 0.8 g/kg; older adults require 1.0–1.2 g/kg to overcome age-related anabolic resistance.',
        'ধাপ ২: সুস্থ ও বয়স্কদের মাত্রা (০.৮-১.২ গ্রাম/কেজি): সাধারণ সুস্থ মানুষের ০.৮ গ্রাম/কেজি এবং বয়স্কদের পেশি ক্ষয় রোধে ১.০-১.২ গ্রাম/কেজি প্রোটিন প্রয়োজন।'
      ),
      l(
        'Step 3: Dialytic Replacement (1.2–1.4 g/kg). Hemodialysis filters remove 10–15g of free amino acids per session; dialysis patients require high protein to prevent protein-energy wasting.',
        'ধাপ ৩: ডায়ালাইসিস ক্ষতিপূরণ (১.২-১.৪ গ্রাম/কেজি): ডায়ালাইসিসের ফিল্টারে প্রচুর অ্যামিনো অ্যাসিড নষ্ট হয়, তাই ডায়ালাইসিসের রোগীদের উচ্চ প্রোটিন দেওয়া হয়।'
      ),
      l(
        'Step 4: Hypercatabolic Trauma & Burns (1.5–2.5 g/kg). Severe critical illness drives massive skeletal proteolysis; high-protein titration restores nitrogen balance and wound collagen synthesis.',
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
        'Prescribe 1.5–2.0 g/kg/day (105–140 g/day) to build up somatic muscle reserves prior to starting dialysis.',
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
      'According to the KDOQI 2020 Clinical Practice Guidelines for Nutrition in CKD, metabolically stable adults with non-dialysis CKD stages 3–5 should be prescribed a Low-Protein Diet (LPD) of 0.55–0.60 g/kg body weight/day (or 0.28–0.43 g/kg with keto-acid analogs). This therapeutic restriction reduces intraglomerular capillary hypertension, lowers production of toxic nitrogenous waste products (urea, p-cresyl sulfate), slows the rate of eGFR decline, and delays the onset of chronic maintenance dialysis. Total daily caloric intake must be maintained at 25–35 kcal/kg to prevent catabolic protein-energy wasting.',
      '২০২০ সালের KDOQI আন্তর্জাতিক নির্দেশিকা অনুসারে, ডায়ালাইসিসবিহীন সিকেডি স্টেজ ৩-৫ রোগীদের জন্য লো-প্রোটিন ডায়েট (০.৫৫-০.৬০ গ্রাম/কেজি/দিন) বা কিটো-অ্যাসিড সহ খুব কম প্রোটিন ডায়েট (০.২৮-০.৪৩ গ্রাম/কেজি/দিন) সুপারিশ করা হয়। এটি রক্তে ইউরিয়া ও বিষাক্ত বর্জ্য কমায়, কিডনির সূক্ষ্ম ফিল্টারের রক্তচাপ হ্রাস করে এবং রোগীকে দীর্ঘদিন ডায়ালাইসিস ছাড়াই স্বাভাবিক রাখতে সাহায্য করে। তবে পেশি ক্ষয় রোধে রোগীকে পর্যাপ্ত ক্যালোরি (২৫-৩৫ kcal/কেজি) নিশ্চিত করতে হবে।'
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
          heading: l(
            '1. Why Protein Is the Master Building Block (The Reservoir That Is Not a Storage Pool)',
            '১. প্রোটিন কেন শরীরের মূল ভিত্তি (যে ভাণ্ডারের কোনো গুদাম নেই)'
          ),
          paragraphs: [
            l(
              'Proteins are the living machines of the human body [1]. Every skeletal muscle fiber that allows you to walk, every antibody patrolling your bloodstream against viral invaders, every digestive enzyme breaking down a meal, and every peptide hormone orchestrating cellular communication is assembled from amino acid chains. While carbohydrates and fats provide fuel, proteins provide the actual machinery of life.',
              'প্রোটিন হলো মানবদেহের জীবন্ত যন্ত্রপাতির মতো [1]। আপনার হাঁটাচলার প্রতিটি মাংসপেশি, ভাইরাসের বিরুদ্ধে লড়াই করা রক্তরসের প্রতিটি অ্যান্টিবডি, খাবার হজমকারী প্রতিটি এনজাইম এবং কোষের বার্তা বহনকারী প্রতিটি পেপটাইড হরমোন মূলত অ্যামিনো অ্যাসিডের শিকল দিয়ে তৈরি। কার্বোহাইড্রেট ও ফ্যাট যেখানে জ্বালানি জোগায়, প্রোটিন সেখানে জীবনের মূল কাঠামো নির্মাণ করে।'
            ),
            l(
              'Crucially, unlike energy which can be stored almost indefinitely in adipose tissue as triglycerides or in the liver and muscle as glycogen, the human body has **no true storage pool for protein** [1, 2]. Every single gram of protein inside you is actively performing a vital biological function. When dietary protein is inadequate, or when severe illness increases the body’s breakdown rate, the liver and immune system cannot draw from a storage warehouse. Instead, they must literally cannibalize your living skeletal muscle fibers to harvest the amino acids required for survival.',
              'সবচেয়ে তাৎপর্যপূর্ণ বিষয় হলো, শরীর অতিরিক্ত শক্তি যেমন চর্বি কলায় ট্রাইগ্লিসারাইড হিসেবে কিংবা লিভার ও পেশিতে গ্লাইকোজেন হিসেবে জমিয়ে রাখতে পারে, মানবদেহে **প্রোটিনের জন্য এমন কোনো সঞ্চয় ভাণ্ডার বা গুদাম নেই** [1, 2]। আপনার শরীরের প্রতিটি গ্রাম প্রোটিনই কোনো না কোনো টিস্যুর অংশ হিসেবে সক্রিয় কাজ করে চলেছে। তাই খাবারে প্রোটিন না থাকলে কিংবা গুরুতর রোগে প্রোটিন ভাঙন বেড়ে গেলে, শরীর নিজের জীবন্ত মাংসপেশি ভেঙে প্রয়োজনীয় অ্যামিনো অ্যাসিড সংগ্রহ করতে বাধ্য হয়।'
            ),
          ],
          bullets: [
            l(
              'Muscle as a Metabolic Reservoir: Skeletal muscle represents 40% of body mass and serves as the emergency reservoir of glutamine and alanine for the immune system, heart, and liver during acute illness.',
              'মেটাবলিক অঙ্গ হিসেবে মাংসপেশি: কঙ্কাল পেশি শরীরের ওজনের ৪০% এবং এটি অসুস্থতার সময় হৃদপিণ্ড, লিভার ও রোগ প্রতিরোধ ব্যবস্থার জন্য জরুরি গ্লুটামিন ও অ্যালানিন অ্যামিনো অ্যাসিডের প্রধান উৎস হিসেবে কাজ করে।',
            ),
            l(
              'Continuous Protein Turnover: In a healthy adult, approximately 300 to 400 grams of body protein is degraded and resynthesized every single day; dietary protein supplies the net balance to replace irreversible losses.',
              'অবিরাম প্রোটিন রূপান্তর: একজন সুস্থ মানুষের শরীরে প্রতিদিন প্রায় ৩০০ থেকে ৪০০ গ্রাম প্রোটিন ভেঙে আবার নতুন করে তৈরি হয়; খাবারে প্রোটিন খেয়ে শরীর এই দৈনন্দিন অপরিহার্য অপচয় পূরণ করে।',
            ),
            l(
              'Somatic Cannibalization: When dietary intake stops or severe inflammation occurs, muscle proteolysis accelerates, causing visible muscle wasting, weakness, impaired wound healing, and vulnerability to pneumonia.',
              'পেশির আত্মক্ষয়: খাবার বন্ধ হলে বা তীব্র প্রদাহে শরীর নিজের পেশি দ্রুত ভাঙতে শুরু করে, যার ফলে শরীর শুকিয়ে যায়, দুর্বলতা আসে, ঘা শুকাতে চায় না এবং নিউমোনিয়ার মতো মারাত্মক ইনফেকশন ঘটে।',
            ),
            l(
              'The Zero-Storage Reality: You cannot "load up" on protein on Sunday to cover your needs for the rest of the week; protein must be consumed regularly throughout every single day.',
              'গুদামবিহীন বাস্তবতা: রবিবারে একবারে অনেক প্রোটিন খেয়ে সার সপ্তাহের চাহিদা পূরণ করা অসম্ভব; প্রতিদিন প্রতিটি প্রধান খাবারে প্রোটিন নিয়মিত গ্রহণ করতে হয়।',
            ),
          ],
        },
        {
          id: 'sec-different-protein-needs',
          heading: l(
            '2. How Much Protein Do Different People Need Across Health and Disease?',
            '২. রোগ ও বয়সের ভিত্তিতে কার কতটুকু প্রোটিন প্রয়োজন?'
          ),
          paragraphs: [
            l(
              'A dangerous oversimplification in nutrition is assuming that a single daily protein number applies to all human beings [2, 3]. In clinical medicine, protein requirements form a vast continuum. Prescribing the wrong amount can be equally harmful: underfeeding protein allows catastrophic muscle wasting, while overfeeding protein in advanced kidney failure accelerates uremic poisoning.',
              'পুষ্টিবিজ্ঞানের একটি বিপজ্জনক ভুল ধারণা হলো সবার জন্য একই নির্দিষ্ট পরিমাণের প্রোটিন সুপারিশ করা [2, 3]। চিকিৎসাবিজ্ঞানে বয়স ও রোগের অবস্থার ওপর ভিত্তি করে প্রোটিনের চাহিদা সম্পূর্ণ পরিবর্তিত হয়। ভুল মাত্রায় প্রোটিন প্রেসক্রিপশন মারাত্মক ক্ষতি করতে পারে: কম প্রোটিন দিলে রোগীর মাংসপেশি ধ্বংস হয়ে যায়, আবার কিডনি ফেইলিউরে অতিরিক্ত প্রোটিন দিলে রক্তে বিষাক্ত ইউরিয়া জমে প্রাণ সংশয় দেখা দেয়।'
            ),
            l(
              'Clinical dietitians calculate daily protein needs based on grams per kilogram of body weight (g/kg/day) [2, 3]:',
              'দক্ষ ক্লিনিক্যাল পুষ্টিবিদরা রোগীর শরীরের ওজনের প্রতি কেজির ভিত্তিতে দৈনিক প্রোটিনের গ্রাম (g/kg/দিন) নির্ধারণ করেন [2, 3]:'
            ),
          ],
          bullets: [
            l(
              'Healthy Sedentary Adult (0.8 g/kg/day): The baseline Recommended Dietary Allowance (RDA) designed to meet the minimum maintenance needs of 97.5% of healthy individuals (e.g., 56 g/day for a 70 kg individual).',
              'সুস্থ সাধারণ মানুষ (০.৮ গ্রাম/কেজি/দিন): আন্তর্জাতিক RDA মানদণ্ড, যা ৯৭.৫% সুস্থ মানুষের ন্যূনতম রক্ষণাবেক্ষণের চাহিদা মেটায় (যেমন ৭০ কেজি ওজনের মানুষের দিনে ৫৬ গ্রাম)।',
            ),
            l(
              'Older Adults Age 65+ (1.0 to 1.2 g/kg/day): Required to overcome age-related "anabolic resistance" and preserve skeletal muscle mass, strength, and mobility against sarcopenia.',
              'বয়োজ্যেষ্ঠ মানুষ ৬৫+ বছর (১.০ থেকে ১.২ গ্রাম/কেজি/দিন): বার্ধক্যজনিত পেশির ক্ষয় (সারকোপেনিয়া) রোধ করতে এবং পেশির সংবেদনশীলতা বজায় রাখতে উচ্চ প্রোটিন প্রয়োজন।',
            ),
            l(
              'Chronic Kidney Disease Non-Dialysis Stages 3–5 (0.55 to 0.60 g/kg/day): Strictly restricted to lower intraglomerular pressure, reduce nitrogenous toxins (BUN), and delay the need for dialysis.',
              'ডায়ালাইসিসবিহীন কিডনি রোগী স্টেজ ৩-৫ (০.৫৫ থেকে ০.৬০ গ্রাম/কেজি/দিন): কিডনির ভেতরের রক্তনালীর চাপ কমাতে এবং রক্তে বিষাক্ত ইউরিয়া জমা প্রতিরোধ করতে নিয়ন্ত্রিত লো-প্রোটিন খাদ্য।',
            ),
            l(
              'Maintenance Dialysis (Hemodialysis: 1.2 g/kg/day; Peritoneal: 1.2 to 1.3 g/kg/day): Flipped to high protein because artificial dialyzer filters remove 10 to 15 grams of amino acids per treatment session and trigger chronic inflammation.',
              'ডায়ালাইসিসের রোগী (হেমোডায়ালাইসিস: ১.২ গ্রাম/কেজি; পেরিটনিয়াল: ১.২-১.৩ গ্রাম/কেজি): ডায়ালাইসিস মেশিনে প্রতিবার ১০-১৫ গ্রাম অ্যামিনো অ্যাসিড নষ্ট হয়, তাই অপচয় রোধে এদের উচ্চ প্রোটিন দেওয়া বাধ্যতামূলক।',
            ),
            l(
              'ICU Critical Sepsis, Major Surgery & Trauma (1.5 to 2.0 g/kg/day): Required to counteract massive neuroendocrine-driven muscle proteolysis and support immune and tissue repair.',
              'আইসিইউ সেপসিস, বড় অপারেশন ও ট্রমা (১.৫ থেকে ২.০ গ্রাম/কেজি/দিন): হরমোন ও সাইটোকাইনজনিত তীব্র মাংসপেশি ভাঙন রোধ করতে এবং টিস্যু পুনর্গঠনে উচ্চমাত্রার প্রোটিন প্রয়োজন।',
            ),
            l(
              'Severe Thermal Burns > 30% TBSA (2.0 to 2.5 g/kg/day): The highest requirement in clinical medicine, compensating for massive wound exudate protein weeping and extreme hypermetabolism.',
              'মারাত্মক পোড়া রোগী শরীরের ৩০% এর বেশি পুড়ে যাওয়া (২.০ থেকে ২.৫ গ্রাম/কেজি/দিন): চিকিৎসা বিজ্ঞানের সর্বোচ্চ মাত্রা; পোড়া ক্ষত দিয়ে পুঁজ ও প্রোটিন বের হয়ে যাওয়া ঠেকাতে এবং নতুন চামড়া তৈরিতে এটি অপরিহার্য।',
            ),
          ],
        },
        {
          id: 'sec-leucine-intro',
          heading: l(
            '3. The Mealtime Leucine Trigger for Muscle Protein Synthesis',
            '৩. পেশি গঠনের আণবিক সুইচ: খাবারের "লিউসিন ট্রিগার"'
          ),
          paragraphs: [
            l(
              'For decades, people assumed that as long as they hit their total daily protein target by midnight, their muscles would be well nourished. Breakthrough molecular research has disproven this view [4]. Human muscle protein synthesis is not regulated like a steady water drip; it functions like an electrical light switch.',
              'কয়েক দশক ধরে মানুষ ভাবতো সারাদিনে রাতের মধ্যে যেকোনোভাবে মোট প্রোটিনের লক্ষ্য পূরণ করলেই পেশি সুস্থ থাকবে। আধুনিক আণবিক জীববিদ্যা এই ধারণাকে ভ্রান্ত প্রমাণ করেছে [4]। মানবদেহে মাংসপেশি তৈরির প্রক্রিয়া কোনো অবিরাম পানির ফোঁটার মতো চলে না; এটি মূলত একটি বৈদ্যুতিক সুইচের মতো কাজ করে।',
            ),
            l(
              'Your muscle cells contain an internal chemical switch called **mTORC1** (Mechanistic Target of Rapamycin Complex 1) [4]. To flip this switch on and initiate Muscle Protein Synthesis (MPS), you need a specific concentration of a single essential branched-chain amino acid: **Leucine**. Consuming small, scattered amounts of protein (such as 5g at breakfast, 10g at lunch) never reaches the threshold required to turn the switch on. To trigger muscle growth, a meal must deliver at least **2.5 to 3.0 grams of leucine** (found in 25–35g of high-quality protein such as eggs, fish, poultry, dairy, or soy).',
              'আমাদের মাংসপেশির কোষে **mTORC1** নামের একটি প্রধান রাসায়নিক নিয়ন্ত্রণ সুইচ থাকে [4]। এই সুইচটি অন করে নতুন পেশি তৈরির কাজ শুরু করাতে হলে খাবারে একটি বিশেষ ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিডের সুনির্দিষ্ট মাত্রা থাকতে হয়: **লিউসিন (Leucine)**। সারাদিন ধরে অল্প অল্প প্রোটিন খেলে (যেমন সকালে ৫ গ্রাম, দুপুরে ১০ গ্রাম) তা কখনোই এই সুইচ অন করার মতো যথেষ্ট সংকেত তৈরি করতে পারে না। পেশি গঠনের কাজ চালু করতে প্রতিটি প্রধান খাবারে অন্তত **২.৫ থেকে ৩.০ গ্রাম লিউসিন** থাকতে হবে (যা ২৫-৩৫ গ্রাম ডিম, মাছ, দুধ বা মুরগির মতো উচ্চমানের প্রোটিন থেকে আসে)।',
            ),
          ],
          bullets: [
            l(
              'The Digital Switch Concept: Muscle Protein Synthesis operates on an all-or-none threshold. A meal with 1.2g leucine produces near-zero muscle synthesis; reaching 2.7g leucine triggers maximal protein building for 3 to 4 hours.',
              'ডিজিটাল অন-অফ সুইচ: পেশি গঠন অল-অর-নান নিয়মে চলে। খাবারে ১.২ গ্রাম লিউসিন থাকলে সুইচ অনই হয় না; কিন্তু ২.৭ গ্রাম লিউসিনের সীমা পার করলেই ৩ থেকে ৪ ঘণ্টার জন্য পেশি তৈরির প্রক্রিয়া সর্বোচ্চ গতি পায়।',
            ),
            l(
              'The "Muscle Full" Refractory Period: After mTORC1 is triggered, muscle synthesis remains active for several hours before resetting. Eating more protein 45 minutes later is oxidized as energy, not muscle; meals should be spaced 3 to 5 hours apart.',
              'পেশির পূর্ণতা ও বিরতি: একবার সুইচ চালু হলে কয়েক ঘণ্টা পেশি তৈরির কাজ চলার পর সাময়িক বিরতি আসে। আধা ঘণ্টার মধ্যে আবার প্রোটিন খেলে তা পেশি না হয়ে শক্তি হিসেবে পুড়ে যায়; তাই প্রোটিনযুক্ত খাবার ৩ থেকে ৫ ঘণ্টা পর পর খাওয়া বিজ্ঞানসম্মত।',
            ),
            l(
              'High-Leucine Food Sources: Whey protein isolate (11% leucine), eggs (8.5%), beef and poultry (8%), salmon (8%), and dairy (8%). Plant sources like lentils and soy can achieve the threshold with slightly larger portion volumes.',
              'উচ্চ-লিউসিনযুক্ত খাবার: ডিম, মাছ, মুরগির মাংস, ছানা, দুধ এবং সয়াবিন। ডাল ও উদ্ভিজ্জ প্রোটিনের পরিমাণ কিছুটা বেশি খেলে সহজেই এই কাঙ্ক্ষিত লিউসিন লক্ষ্যমাত্রা অর্জন করা যায়।',
            ),
            l(
              'Clinical Application in Frailty: Older hospitalized patients with small appetites must have their limited meals strategically enriched with leucine-rich protein to prevent bedside wasting.',
              'অসুস্থ ও বয়স্কদের ক্ষেত্রে প্রয়োগ: দুর্বল ও কম ক্ষুধা থাকা রোগীদের অল্প খাবারের ভেতরেই লিউসিন সমৃদ্ধ প্রোটিন নিশ্চিত করতে হবে যাতে বিছানায় শুয়ে তাদের মাংসপেশি শুকিয়ে না যায়।',
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
          heading: l(
            '1. The Quantitative Nitrogen Balance Equation and Clinical Kinetics',
            '১. নাইট্রোজেন ভারসাম্যের গাণিতিক সমীকরণ ও ক্লিনিক্যাল গতিবিদ্যা'
          ),
          paragraphs: [
            l(
              'Nitrogen balance represents the historic and contemporary gold standard for evaluating whole-body protein turnover and verifying the efficacy of clinical nutrition support [1, 5]. Because elemental nitrogen constitutes approximately 16% of dietary protein by molecular weight, 1 gram of nitrogen represents exactly 6.25 grams of protein (100 / 16 = 6.25).',
              'নাইট্রোজেন ব্যালেন্স বা ভারসাম্য হলো শরীরের সামগ্রিক প্রোটিন বিপাক এবং পুষ্টি চিকিৎসার সাফল্য যাচাইয়ের প্রধান বৈজ্ঞানিক পদ্ধতি [1, 5]। যেহেতু প্রোটিনে গড়ে ১৬% নাইট্রোজেন থাকে, তাই ১ গ্রাম নাইট্রোজেন ঠিক ৬.২৫ গ্রাম প্রোটিনের সমতুল্য (১০০ / ১৬ = ৬.২৫)।',
            ),
            l(
              'Clinical Nitrogen Balance is measured using a timed 24-hour urine collection measuring Urinary Urea Nitrogen (UUN) [1]:',
              '২৪ ঘণ্টার প্রস্রাবে নির্গত ইউরিয়া নাইট্রোজেন (UUN) মেপে বিশ্বস্বীকৃত সমীকরণে নাইট্রোজেন ভারসাম্য হিসাব করা হয় [1]:',
            ),
            l(
              'Nitrogen Balance (g N/day) = (Daily Protein Intake [g] / 6.25) - (24-hour Urinary Urea Nitrogen [g] + 4.0 g)',
              'নাইট্রোজেন ব্যালেন্স (গ্রাম N/দিন) = (দৈনিক প্রোটিন গ্রহণ [গ্রাম] / ৬.২৫) - (২৪ ঘণ্টার প্রস্রাবের UUN [গ্রাম] + ৪.০ গ্রাম)',
            ),
            l(
              'The constant 4.0 grams in the denominator accounts for mandatory unmeasured biological nitrogen losses [1]: 2.0 grams represents non-urea urinary nitrogen (ammonia, creatinine, uric acid, and free amino acids), while 2.0 grams represents obligatory non-urinary nitrogen shed via fecal excretion, shed cutaneous keratin, and sweat. A calculated balance of 0 g/day indicates steady-state maintenance; a negative balance indicates ongoing somatic muscle proteolysis; and a positive balance of +2 to +4 g N/day is the target for clinical anabolism and wound remodeling.',
              'এখানে ধ্রুবক ৪.০ গ্রাম হলো না মাপা অন্যান্য অনিবার্য শারীরিক অপচয় [1]: ২.০ গ্রাম হলো প্রস্রাবের ইউরিয়া ছাড়া অন্যান্য উপাদান (অ্যামোনিয়া, ক্রিয়েটিনিন, ইউরিক অ্যাসিড) এবং ২.০ গ্রাম হলো ত্বক, ঘাম ও মলের মাধ্যমে স্বাভাবিক ক্ষতি। হিসাবকৃত ব্যালেন্স ০ গ্রাম হলে সুস্থ সমতা, মাইনাস হলে তীব্র পেশি ক্ষয় এবং +২ থেকে +৪ গ্রাম/দিন হলো ক্ষত নিরাময় ও পেশি গঠনের জন্য কাঙ্ক্ষিত থেরাপিউটিক লক্ষ্য।',
            ),
          ],
          bullets: [
            l(
              'Translating Nitrogen Loss to Muscle Wasting: Because skeletal muscle is 20% protein and 80% intracellular water, every 1.0 g of negative nitrogen balance represents the destruction of 31.25 g of living skeletal muscle tissue (1.0 g N × 6.25 protein × 5.0 wet muscle = 31.25 g).',
              'নাইট্রোজেন ক্ষয় থেকে পেশির হিসাব: যেহেতু জীবন্ত পেশিতে ২০% প্রোটিন এবং ৮০% পানি থাকে, তাই প্রতিদিন ১ গ্রাম নেগেটিভ নাইট্রোজেন ব্যালেন্স মানে ৩১.২৫ গ্রাম জীবন্ত মাংসপেশি ধ্বংস হওয়া (১.০ × ৬.২৫ × ৫ = ৩১.২৫ গ্রাম)।',
            ),
            l(
              'Catabolic Severity Staging via UUN: Normal baseline UUN = 5 to 10 g/day; Mild stress = 10 to 15 g/day; Moderate stress = 15 to 20 g/day; Severe hypercatabolism (major burns/trauma) = > 20 g/day.',
              'UUN দেখে রোগের তীব্রতা নির্ণয়: স্বাভাবিক নির্গমন = ৫ থেকে ১০ গ্রাম/দিন; মৃদু স্ট্রেস = ১০ থেকে ১৫ গ্রাম/দিন; মাঝারি স্ট্রেস = ১৫ থেকে ২০ গ্রাম/দিন; এবং মারাত্মক ক্যাটাবলিজম = ২০ গ্রাম/দিনের বেশি।',
            ),
            l(
              'The Role of Non-Protein Calories: High protein intake cannot achieve positive nitrogen balance if total caloric energy is deficient; amino acids will simply be deaminated and burned as fuel instead of building tissue.',
              'পর্যাপ্ত ক্যালোরির অপরিহার্যতা: রোগীকে পর্যাপ্ত নন-প্রোটিন ক্যালোরি (শর্করা ও ফ্যাট) না দিলে উচ্চ প্রোটিন কোনো কাজে আসবে না; শরীর খাদ্য তৈরির বদলে সেই প্রোটিন পুড়িয়ে শক্তি মেটাতে বাধ্য হবে।',
            ),
            l(
              'Limitation in Severe Renal Failure: In oliguric acute kidney injury or end-stage renal disease, urea is retained in the blood rather than excreted, requiring urea kinetic modeling (BUN rise adjustment) rather than simple 24-hr UUN.',
              'কিডনি ফেইলিউরে সীমাবদ্ধতা: প্রস্রাব বন্ধ হয়ে কিডনি ফেইলিউর হলে ইউরিয়া প্রস্রাবে বের হতে পারে না এবং রক্তে জমে যায়; এ অবস্থায় সাধারণ UUN সূত্রের বদলে রক্তের ইউরিয়ার বৃদ্ধি সমন্বয় করে হিসাব করতে হয়।',
            ),
          ],
        },
        {
          id: 'sec-ckd-dialysis-dichotomy',
          heading: l(
            '2. The Renal Dichotomy: Non-Dialysis CKD Restriction vs Dialytic Hypercatabolism',
            '২. কিডনি রোগের দ্বিমুখী নীতি: ডায়ালাইসিসবিহীন নিয়ন্ত্রণ বনাম ডায়ালাইসিস ক্যাটাবলিজম'
          ),
          paragraphs: [
            l(
              'In clinical nephrology nutrition, protein prescribing follows one of the most profound therapeutic dichotomies in medicine [3]. When treating a patient with chronic kidney disease, the dietary prescription abruptly flips 180 degrees the moment the patient transitions from pre-dialysis care to maintenance dialysis.',
              'কিডনি রোগের পুষ্টি ব্যবস্থাপনায় চিকিৎসাবিজ্ঞানের সবচেয়ে নাটকীয় বিপরীতমুখী রূপান্তর ঘটে [3]। ক্রনিক কিডনি ডিজিজে আক্রান্ত রোগী যখন ডায়ালাইসিস শুরুর আগের অবস্থা থেকে নিয়মিত ডায়ালাইসিসে প্রবেশ করেন, তখন খাদ্য নির্দেশিকা মুহূর্তেই ১৮০ ডিগ্রি উল্টে যায়।',
            ),
            l(
              'The physiological rationale governing each distinct stage includes [3]:',
              'এই দুই বিপরীতমুখী অবস্থার পেছনের গভীর শারীরবৃত্তীয় কারণগুলো হলো [3]:',
            ),
          ],
          bullets: [
            l(
              'Non-Dialysis CKD Stages 3–5 (eGFR < 60 mL/min): The damaged kidney contains a reduced number of surviving nephrons, which suffer from compensatory intraglomerular capillary hypertension and hyperfiltration. High protein intake increases renal blood flow and accelerates glomerular sclerosis. Furthermore, amino acid catabolism generates toxic nitrogenous uremic retention solutes (urea, indoxyl sulfate, p-cresyl sulfate). The KDOQI guidelines recommend a Low-Protein Diet (LPD) of 0.55 to 0.60 g/kg/day to shield surviving glomeruli, reduce uremic nausea, and postpone dialysis onset.',
              'ডায়ালাইসিসবিহীন সিকেডি স্টেজ ৩-৫ (eGFR < ৬০ mL/min): কিডনির অধিকাংশ ছাঁকনি নষ্ট হওয়ায় বেঁচে থাকা নেফ্রনগুলোর ওপর অতিরিক্ত রক্তচাপ থাকে। বেশি প্রোটিন খেলে এই চাপ বাড়ে এবং বিষাক্ত বর্জ্য (ইউরিয়া, সালফেট) রক্তে জমে বমি ও বিষক্রিয়া তৈরি করে। KDOQI নির্দেশিকা অনুযায়ী ০.৫৫-০.৬০ গ্রাম/কেজি লো-প্রোটিন খাদ্য কিডনির রক্তনালী সুরক্ষা করে এবং রোগীকে দীর্ঘদিন ডায়ালাইসিস ছাড়াই বাঁচিয়ে রাখে।',
            ),
            l(
              'Maintenance Hemodialysis (HD: 1.2 g/kg/day) and Peritoneal Dialysis (PD: 1.2 to 1.3 g/kg/day): The moment a patient enters dialysis, the restriction is immediately abolished. The dialysis filter is non-selective and strips 10 to 15 grams of free amino acids and peptides from the blood during every 4-hour treatment. Simultaneously, blood contact with artificial dialysis membranes triggers systemic cytokine release, while continuous glucose absorption in PD causes chronic anorexia. Providing ≥ 1.2 g/kg/day is mandatory to prevent fatal Protein-Energy Wasting (PEW).',
              'নিয়মিত ডায়ালাইসিসের রোগী (হেমোডায়ালাইসিস: ১.২ গ্রাম/কেজি; পেরিটনিয়াল: ১.২-১.৩ গ্রাম/কেজি): ডায়ালাইসিস শুরু হলেই লো-প্রোটিন বন্ধ করে উচ্চ প্রোটিন দিতে হয়। কারণ কৃত্রিম ডায়ালাইজার ফিল্টারে প্রতি সেশনে রক্ত থেকে ১০-১৫ গ্রাম জরুরি অ্যামিনো অ্যাসিড বের হয়ে নষ্ট হয়ে যায় এবং মেশিনের কৃত্রিম সংস্পর্শ রক্তে প্রদাহ তৈরি করে পেশি দ্রুত ভেঙে দেয়। রোগীকে অপচয় ও মৃত্যু থেকে বাঁচাতে ১.২ গ্রাম/কেজির বেশি প্রোটিন দেওয়া বাধ্যতামূলক।',
            ),
            l(
              'Caloric Protection Shield: To prevent patients on a Low-Protein Diet (0.55–0.60 g/kg) from breaking down their own muscle mass for fuel, clinicians must ensure robust caloric energy: 30 to 35 kcal/kg/day for adults < 60 years and 30 kcal/kg/day for adults ≥ 60 years.',
              'ক্যালোরির সুরক্ষামূলক ঢাল: কিডনি রোগীদের লো-প্রোটিন ডায়েট দেওয়ার সময় তারা যেন নিজের পেশি ভেঙে শক্তি মেটাতে বাধ্য না হয়, সেজন্য খাবারে প্রচুর ক্যালোরি (৩০-৩৫ kcal/কেজি) নিশ্চিত করতে হবে।',
            ),
            l(
              'Phosphate and Potassium Management: Restricting protein in pre-dialysis CKD has the added benefit of naturally reducing dietary organic phosphorus burden, mitigating renal osteodystrophy and vascular calcification.',
              'ফসফেট ও পটাসিয়াম নিয়ন্ত্রণ: ডায়ালাইসিসের আগে প্রোটিন কমানোর আরেকটি বড় সুবিধা হলো খাবারে থাকা জৈব ফসফেটের বোঝা কমে যায়, যার ফলে রক্তনালীতে চুন জমা এবং হাড় ক্ষয় হওয়া প্রতিহত হয়।',
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
          heading: l(
            '1. The Leucine Trigger Hypothesis and mTORC1 Signal Transduction',
            '১. লিউসিন ট্রিগার হাইপোথিসিস ও mTORC1 সংকেত পরিবাহন'
          ),
          paragraphs: [
            l(
              'Muscle Protein Synthesis (MPS) is fundamentally driven at the molecular level by the kinase complex **mTORC1** (Mechanistic Target of Rapamycin Complex 1) [4]. Inside the skeletal myofiber, specialized intracellular nutrient sensor proteins—specifically **Sestrin2** and **CASTOR1**—act as molecular gatekeepers. In the absence of essential amino acids, Sestrin2 binds to and inhibits GATOR2, keeping the Rag GTPase complex locked in an inactive state and preventing mTORC1 activation.',
              'কঙ্কাল পেশিতে প্রোটিন তৈরির আণবিক কারখানা মূলত **mTORC1** নামের একটি প্রধান এনজাইম কমপ্লেক্স দ্বারা পরিচালিত হয় [4]। পেশি কোষের ভেতরে **সেস্ট্রিন২ (Sestrin2)** নামের একটি বিশেষ প্রোটিন খাদ্য উপাদান শনাক্তকারী প্রহরী হিসেবে কাজ করে। কোষে প্রয়োজনীয় অ্যামিনো অ্যাসিড না থাকলে সেস্ট্রিন২ অন্যান্য সংকেত আটকে রাখে, ফলে mTORC1 নিস্তেজ অবস্থায় থাকে এবং পেশি তৈরি বন্ধ থাকে।',
            ),
            l(
              'When the branched-chain amino acid **L-Leucine** enters the muscle cell via the LAT1 (SLC7A5) transporter, it directly binds Sestrin2 with micromolar affinity, inducing a conformational dissociation of Sestrin2 from GATOR2 [4]. This disinhibition allows GATOR2 to activate RagA/B GTPases, docking mTORC1 directly to the lysosomal membrane where Rheb-GTP activates its catalytic kinase domain.',
              'যখন খাবার থেকে ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিড **এল-লিউসিন (L-Leucine)** পেশি কোষে প্রবেশ করে, তখন এটি সরাসরি সেস্ট্রিন২ প্রোটিনের সাথে শক্তভাবে যুক্ত হয় [4]। এর ফলে সেস্ট্রিন২ সরে যায় এবং কোষে সংকেত চালু হয়ে mTORC1 কমপ্লেক্সটি কোষের লাইসোজোমের গায়ে গিয়ে সক্রিয় রূপ ধারণ করে।',
            ),
            l(
              'Once active, mTORC1 phosphorylates two master downstream translational effectors [4]: ribosomal protein S6 kinase 1 (p70S6K) and eukaryotic translation initiation factor 4E-binding protein 1 (4E-BP1). Phosphorylation of 4E-BP1 releases eukaryotic initiation factor 4E (eIF4E), allowing formation of the eIF4F translation pre-initiation complex and driving ribosomal translation of muscle contractile actin and myosin filaments.',
              'সক্রিয় mTORC1 তৎক্ষণাৎ দুটি প্রধান এনজাইমকে (p70S6K এবং 4E-BP1) ফসফরিলেশনের মাধ্যমে উদ্দীপ্ত করে [4]। এর ফলে রাইবোসোমের তালা খুলে যায় এবং মাংসপেশির মূল সংকোচনশীল প্রোটিন—অ্যাকটিন ও মায়োসিন ফিলামেন্ট তৈরি শুরু হয়।',
            ),
          ],
          bullets: [
            l(
              'The All-or-None Digital Switch: mTORC1 does not respond linearly to low amino acid levels; it behaves like a digital switch requiring an intracellular threshold of 2.5 to 3.0 grams of leucine in a single feeding bolus.',
              'অন-অফ ডিজিটাল সুইচ: mTORC1 অল্প প্রোটিনে সাড়া দেয় না; এটি একটি অন-অফ সুইচের মতো কাজ করে যা চালু করতে প্রতিবারের খাবারে একবারে ২.৫ থেকে ৩.০ গ্রাম লিউসিনের উপস্থিতি বাধ্যতামূলক।',
            ),
            l(
              'Anabolic Resistance in Sarcopenia and Illness: In older adults and catabolic ICU patients, chronic low-grade inflammation (IL-6, TNF-alpha) and intramuscular lipid accumulation blunt mTORC1 translocation, increasing the leucine threshold from 1.8g up to 3.0g per meal.',
              'বার্ধক্য ও অসুস্থতায় অ্যানাবলিক রেজিস্ট্যান্স: বৃদ্ধ বয়সে এবং আইসিইউর রোগীদের দীর্ঘমেয়াদী মৃদু প্রদাহের কারণে mTORC1-এর সংবেদনশীলতা কমে যায়, ফলে তাদের পেশি তৈরির সুইচ অন করতে তরুণদের চেয়ে অনেক বেশি (৩.০ গ্রাম) লিউসিন প্রয়োজন হয়।',
            ),
            l(
              'The "Muscle Full" Satiation Effect: Once MPS is activated, it remains elevated for ~90 to 120 minutes before returning to baseline despite persistent circulating aminoacidemia. Infusing continuous protein blunts responsiveness; pulsed bolus feeding is biologically superior.',
              'পেশির পূর্ণতার প্রভাব: একবার পেশি তৈরির সুইচ চালু হলে তা প্রায় দেড় থেকে দুই ঘণ্টা সক্রিয় থেকে স্বয়ংক্রিয়ভাবে বন্ধ হয়ে যায়। ক্রমাগত সারাদিন ড্রিপ করে প্রোটিন খাওয়ালে পেশির সাড়া দেওয়ার ক্ষমতা নষ্ট হয়; তাই প্রতি ৩-৫ ঘণ্টা পর পর খাবারের মাধ্যমে প্রোটিন দেওয়া শারীরবৃত্তীয়ভাবে সেরা।',
            ),
            l(
              'Clinical Leucine Supplementation: In frail geriatric patients who cannot consume large meals, supplementing meals with 2 to 3 grams of free crystalline L-leucine powder successfully restores youthful muscle protein synthesis rates.',
              'ক্লিনিক্যাল লিউসিন প্রয়োগ: দুর্বল বয়স্ক রোগীরা যারা একবারে বেশি খাবার খেতে পারেন না, তাদের সাধারণ খাবারের সাথে ২-৩ গ্রাম বিশুদ্ধ লিউসিন পাউডার যোগ করে দিলে তাদের পেশি গঠনের হার তরুণদের মতো উন্নত করা সম্ভব।',
            ),
          ],
        },
        {
          id: 'sec-icu-trauma-titration',
          heading: l(
            '2. Hypercatabolic Titration in Critical Trauma, Sepsis and Severe Burns',
            '২. ট্রমা, সেপসিস ও পোড়া রোগীদের ক্ষেত্রে ক্যাটাবলিক প্রোটিন টাইট্রেশন'
          ),
          paragraphs: [
            l(
              'In severe metabolic stress—such as polytrauma, septic shock, and thermal burns covering > 20% Total Body Surface Area (TBSA)—the neuroendocrine system mounts an overwhelming systemic defense [1, 5]. The hypothalamic-pituitary-adrenal axis floods the circulation with counter-regulatory hormones: cortisol, glucagon, and epinephrine, while macrophages produce an ongoing storm of IL-1, IL-6, and TNF-alpha.',
              'মারাত্মক শারীরিক আঘাত বা পলিট্রমা, সেপটিক শক এবং শরীরের ২০%-এর বেশি পুড়ে যাওয়ার মতো সংকটাপন্ন অবস্থায় মানবদেহ এক বিধ্বংসী বিপাকীয় সংকটে পড়ে [1, 5]। মস্তিষ্কের নির্দেশে রক্তে কর্টিসোল, গ্লুকাগন এবং অ্যাড্রেনালিন হরমোনের তীব্র বন্যা বয়ে যায় এবং সাথে যুক্ত হয় সাইটোকাইনের তীব্র ঝড়।',
            ),
            l(
              'This catabolic hormone profile relentlessly drives the **ATP-ubiquitin-proteasome system** in skeletal muscle fibers [1]. Intracellular contractile proteins (myosin heavy chains) are tagged with ubiquitin polymers and degraded inside the 26S proteasome chamber. Skeletal muscle is dismantled at an alarming velocity to export free glutamine and alanine to the liver for gluconeogenesis and acute-phase protein synthesis.',
              'এই ক্যাটাবলিক হরমোনগুলো পেশি কোষের ভেতরের প্রোটিন ধ্বংসকারী যন্ত্রপাতি **ইউবিকুইটিন-প্রোটিওসোম সিস্টেমকে** প্রচণ্ড গতিতে সক্রিয় করে তোলে [1]। পেশির জীবন্ত অ্যাকটিন ও মায়োসিন ফিলামেন্টগুলো ভেঙে ভেঙে লিভারে পাঠিয়ে দেওয়া হয় যাতে লিভার নতুন গ্লুকোজ ও জরুরি প্রতিরক্ষা প্রোটিন তৈরি করতে পারে।',
            ),
            l(
              'Without aggressive nutritional intervention, critically ill patients can lose over 20 grams of nitrogen per day—equivalent to shedding more than 600 grams of living skeletal muscle mass every single day [1, 5]. To counteract this massive somatic erosion, international ASPEN and ESPEN critical care guidelines recommend escalating protein delivery based on stress severity [5]:',
              'যদি সঠিক পুষ্টির মাধ্যমে দ্রুত চিকিৎসা না দেওয়া হয়, তবে একজন সংকটাপন্ন রোগী প্রতিদিন ২০ গ্রামের বেশি নাইট্রোজেন হারাতে পারে—যার অর্থ হলো তার শরীর থেকে প্রতিদিন ৬০০ গ্রামের বেশি জীবন্ত মাংসপেশি শুকিয়ে নিশ্চিহ্ন হয়ে যাচ্ছে [1, 5]। এই ভয়াবহ ক্ষয় রোধ করতে আন্তর্জাতিক নির্দেশিকা রোগের তীব্রতার ওপর ভিত্তি করে প্রোটিন বাড়ানোর নিয়ম নির্ধারণ করেছে [5]:',
            ),
            l(
              'Major Elective Surgery, Trauma & Sepsis:\n1.5 to 2.0 g protein/kg actual weight/day\n\nSevere Thermal Burns (> 30% TBSA):\n2.0 to 2.5 g protein/kg actual weight/day\n\nObese ICU Patients (BMI 30 to 39.9, Class I and II):\n≥ 2.0 g protein/kg Ideal Body Weight/day\n\nObese ICU Patients (BMI ≥ 40, Class III severe):\n≥ 2.5 g protein/kg Ideal Body Weight/day',
              'বড় অস্ত্রোপচার, পলিট্রমা ও সেপসিস:\nপ্রকৃত ওজনের প্রতি কেজিতে ১.৫ থেকে ২.০ গ্রাম প্রোটিন/দিন\n\nতীব্র পোড়া রোগী (শরীরের ৩০% এর বেশি পোড়া):\nপ্রকৃত ওজনের প্রতি কেজিতে ২.০ থেকে ২.৫ গ্রাম প্রোটিন/দিন\n\nস্থূল আইসিইউ রোগী (বিএমআই ৩০ থেকে ৩৯.৯):\nআদর্শ ওজনের (IBW) প্রতি কেজিতে ≥ ২.০ গ্রাম প্রোটিন/দিন\n\nচরম স্থূল আইসিইউ রোগী (বিএমআই ≥ ৪০):\nআদর্শ ওজনের (IBW) প্রতি কেজিতে ≥ ২.৫ গ্রাম প্রোটিন/দিন',
            ),
          ],
          bullets: [
            l(
              'Protein as a Survival Factor in the ICU: Prospective randomized trials demonstrate that meeting ≥ 80% of protein targets (≥ 1.2–1.5 g/kg) within the first 48 to 72 hours of ICU admission is significantly associated with reduced 28-day mortality and shorter duration of mechanical ventilation.',
              'আইসিইউতে জীবন বাঁচানোর হাতিয়ার: গবেষণায় অকাট্যভাবে প্রমাণিত হয়েছে যে আইসিইউতে ভর্তির প্রথম ৪৮-৭২ ঘণ্টার মধ্যে অন্তত ৮০% প্রোটিনের লক্ষ্য (≥ ১.২-১.৫ গ্রাম/কেজি) পূরণ করলে রোগীর মৃত্যুর ঝুঁকি উল্লেখযোগ্যভাবে হ্রাস পায় এবং রোগী দ্রুত ভেন্টিলেটর থেকে সুস্থ হয়ে ওঠে।',
            ),
            l(
              'Preventing Sepsis Autophagy vs Supporting Healing: While total calories must be carefully controlled to prevent hypercaloric overfeeding, high protein intake provides the critical amino acid building blocks required for immune cell proliferation, wound collagen cross-linking, and respiratory diaphragm integrity.',
              'ওভারফিডিং এড়িয়ে ক্ষত নিরাময়: ক্যালোরি যেন বেশি না হয় তা খেয়াল রাখার পাশাপাশি উচ্চ প্রোটিন নিশ্চিত করতে হবে, কারণ এই অ্যামিনো অ্যাসিডগুলোই শরীরের রোগ প্রতিরোধ কোষ গঠন, ক্ষত সারাতে কোলাজেন তৈরি এবং শ্বাসপ্রশ্বাসের ডায়াফ্রাম পেশি সচল রাখতে কাঁচামাল জোগায়।',
            ),
            l(
              'Monitoring Renal Solute Load: When infusing > 2.0 g/kg protein, clinicians must monitor serum BUN, creatinine, and urine output; rising BUN with an intact BUN/Cr ratio indicates elevated amino acid deamination and requires careful hydration management.',
              'কিডনির বর্জ্যের ভার পর্যবেক্ষণ: দিনে ২.০ গ্রাম/কেজির বেশি প্রোটিন দেওয়ার সময় রক্তে BUN, ক্রিয়েটিনিন ও প্রস্রাবের পরিমাণ লক্ষ্য রাখতে হবে এবং ইউরিয়া নির্গমন সুষ্ঠু রাখতে রোগীকে পর্যাপ্ত তরল সরবরাহ করতে হবে।',
            ),
            l(
              'Glutamine and Arginine Precautions in Septic Shock: While immune-modulating amino acids (arginine) benefit elective surgical wounds, free arginine is strictly contraindicated in active septic shock due to excessive nitric oxide synthase stimulation and refractory vasoplegic shock.',
              'সেপটিক শকে সতর্কতা: অস্ত্রোপচারের ক্ষত সারাতে আর্জিনিন কার্যকর হলেও তীব্র সেপটিক শকে আর্জিনিন দেওয়া নিষিদ্ধ, কারণ এটি অতিরিক্ত নাইট্রিক অক্সাইড তৈরি করে রক্তচাপ বিপজ্জনক মাত্রায় নামিয়ে দিতে পারে।',
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Why Protein Is the Master Building Block', '১. প্রোটিন কেন শরীরের মূল ভিত্তি'), sectionId: 'sec-protein-roles' },
      { id: 'toc-2', label: l('2. How Much Protein Do Different People Need?', '২. কার কতটুকু প্রোটিন প্রয়োজন?'), sectionId: 'sec-different-protein-needs' },
      { id: 'toc-3', label: l('3. The Mealtime Leucine Trigger', '৩. খাবারের লিউসিন ট্রিগার'), sectionId: 'sec-leucine-intro' },
      { id: 'toc-4', label: l('4. Nitrogen Balance Equation & Clinical Kinetics', '৪. নাইট্রোজেন ভারসাম্য সমীকরণ ও গতিবিদ্যা'), sectionId: 'sec-nitrogen-balance-kinetics' },
      { id: 'toc-5', label: l('5. Renal Dichotomy: Non-Dialysis vs Dialysis', '৫. কিডনির দ্বিমুখী নীতি: ডায়ালাইসিস ছাড়া বনাম ডায়ালাইসিস'), sectionId: 'sec-ckd-dialysis-dichotomy' },
      { id: 'toc-6', label: l('6. Leucine Trigger Hypothesis & mTORC1', '৬. লিউসিন ট্রিগার ও mTORC1 সংকেত পথ'), sectionId: 'sec-leucine-threshold-mps' },
      { id: 'toc-7', label: l('7. Hypercatabolic Titration in Burns & Trauma', '৭. ট্রমা ও পোড়া রোগীর প্রোটিন টাইট্রেশন'), sectionId: 'sec-icu-trauma-titration' },
    ],
    terms: [
      {
        term: l('Nitrogen Balance', 'নাইট্রোজেন ভারসাম্য (Nitrogen Balance)'),
        definition: l(
          'The quantitative mathematical difference between dietary nitrogen intake and total biological nitrogen excretion: (Daily Protein / 6.25) - (24-hr UUN + 4.0 g).',
          'খাদ্যে গৃহীত নাইট্রোজেন এবং শরীর থেকে নির্গত নাইট্রোজেনের গাণিতিক পার্থক্য: (দৈনিক প্রোটিন / ৬.২৫) - (২৪ ঘণ্টার UUN + ৪.০ গ্রাম)।',
        ),
      },
      {
        term: l('Urinary Urea Nitrogen (UUN)', 'ইউরিনারি ইউরিয়া নাইট্রোজেন (UUN)'),
        definition: l(
          'The mass of urea nitrogen excreted in a timed 24-hour urine collection, reflecting the catabolic rate of systemic protein breakdown.',
          '২৪ ঘণ্টার প্রস্রাবে নির্গত ইউরিয়ার নাইট্রোজেনের মোট পরিমাণ, যা শরীরে প্রোটিন ভাঙার গতি নির্দেশ করে।',
        ),
      },
      {
        term: l('Leucine Trigger', 'লিউসিন ট্রিগার (Leucine Trigger)'),
        definition: l(
          'The minimum intracellular concentration of leucine (~2.5–3.0 g/meal) required to activate mTORC1 and initiate muscle protein synthesis.',
          'প্রতিবেলার খাবারে লিউসিনের ন্যূনতম মাত্রা (~২.৫-৩.০ গ্রাম), যা কোষে mTORC1 সক্রিয় করে পেশি তৈরির সংকেত দেয়।',
        ),
      },
      {
        term: l('mTORC1', 'এমটরসি১ (mTORC1)'),
        definition: l(
          'Mechanistic Target of Rapamycin Complex 1; the master cellular serine/threonine protein kinase orchestrating cell growth, translation, and muscle protein synthesis.',
          'কোষের প্রধান নিয়ন্ত্রক এনজাইম কমপ্লেক্স, যা পুষ্টি ও অ্যামিনো অ্যাসিডের সংকেত পেয়ে পেশি প্রোটিন সংশ্লেষণ পরিচালনা করে।',
        ),
      },
      {
        term: l('Anabolic Resistance', 'অ্যানাবলিক রেজিস্ট্যান্স (Anabolic Resistance)'),
        definition: l(
          'The blunted muscle protein synthesis response to dietary protein and hyperinsulinemia seen in aging, physical immobilization, and chronic systemic inflammation.',
          'বার্ধক্য, শারীরিক অক্ষমতা ও দীর্ঘমেয়াদী প্রদাহের কারণে খাবারের প্রোটিনের প্রতি পেশি কোষের সংবেদনশীলতা কমে যাওয়ার শারীরবৃত্তীয় অবস্থা।',
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
            'Step 1: Patient Profile & Current Nutrition. A 62-year-old male post-motor vehicle collision with multiple unstable pelvic fractures and diffuse soft-tissue crush injury is intubated in the ICU. Weight = 75 kg. He is receiving a standard 1.0 kcal/mL enteral tube feeding formula delivering 1,800 kcal and 60 g protein/day (0.8 g/kg).',
            'ধাপ ১: রোগীর তথ্য ও বর্তমান খাদ্য: সড়ক দুর্ঘটনায় মারাত্মক আহত ও পেলভিক ফ্র্যাকচারে আক্রান্ত ৬২ বছর বয়সী ভেন্টিলেটরের পুরুষ রোগী (ওজন ৭৫ কেজি)। তিনি সাধারণ টিউব ফিডিংয়ে দিনে ১৮০০ ক্যালোরি ও ৬০ গ্রাম প্রোটিন (০.৮ গ্রাম/কেজি) পাচ্ছেন।',
          ),
          l(
            'Step 2: Measure 24-Hour Urinary Urea Nitrogen (UUN). A timed 24-hour urine collection reveals an excreted UUN of 18.5 g.',
            'ধাপ ২: ২৪ ঘণ্টার প্রস্রাবের নাইট্রোজেন পরীক্ষা: ল্যাবে ২৪ ঘণ্টার প্রস্রাবের UUN পাওয়া গেল ১৮.৫ গ্রাম।',
          ),
          l(
            'Step 3: Calculate Current Nitrogen Balance. Nitrogen Intake = 60 / 6.25 = 9.6 g N/day. Nitrogen Output = 18.5 + 4.0 = 22.5 g N/day. Nitrogen Balance = 9.6 - 22.5 = -12.9 g N/day. The patient is in profound negative nitrogen balance.',
            'ধাপ ৩: বর্তমান নাইট্রোজেন ব্যালেন্স হিসাব: গৃহীত নাইট্রোজেন = ৬০ / ৬.২৫ = ৯.৬ গ্রাম। নির্গত নাইট্রোজেন = ১৮.৫ + ৪.০ = ২২.৫ গ্রাম। ব্যালেন্স = ৯.৬ - ২২.৫ = -১২.৯ গ্রাম/দিন। রোগী তীব্র নেগেটিভ নাইট্রোজেন ভারসাম্যে আছেন।',
          ),
          l(
            'Step 4: Quantify Living Muscle Loss. Losing 12.9 g of nitrogen/day means losing: 12.9 × 6.25 = 80.6 g of pure dry protein/day. Because skeletal muscle is approximately 20% protein and 80% water, this equates to losing: 80.6 × 5 = 403 g of living skeletal muscle tissue (nearly 1 full pound of muscle) every single day!',
            'ধাপ ৪: পেশি ক্ষয়ের পরিমাণ হিসাব: দিনে ১২.৯ গ্রাম নাইট্রোজেন হারানোর অর্থ হলো দিনে ৮০.৬ গ্রাম বিশুদ্ধ প্রোটিন ধ্বংস হওয়া। যেহেতু জীবন্ত মাংসপেশিতে ৮০% পানি থাকে, তাই রোগী দিনে ৮০.৬ × ৫ = ৪০৩ গ্রাম জীবন্ত মাংসপেশি হারাচ্ছেন (প্রতিদিন প্রায় আধা কেজি পেশি শুকিয়ে যাচ্ছে)!',
          ),
          l(
            'Step 5: Formulate the Titrated Protein Prescription. Target an anabolic positive nitrogen balance of +2.0 g N/day to support pelvic bone remodeling and wound closure. Target Nitrogen Intake = 22.5 + 2.0 = 24.5 g N/day. Target Protein Intake = 24.5 × 6.25 = 153.1 g protein/day ≈ 150 g/day (2.0 g/kg actual weight). The clinical dietitian switches the patient to a specialized high-protein ICU formula delivering 1,800 kcal and 150 g protein/day.',
            'ধাপ ৫: সঠিক প্রোটিন প্রেসক্রিপশন: হাড় ও ক্ষত সারাতে কাঙ্ক্ষিত লক্ষ্য +২.০ গ্রাম N/দিন। প্রয়োজনীয় নাইট্রোজেন = ২২.৫ + ২.০ = ২৪.৫ গ্রাম। প্রয়োজনীয় প্রোটিন = ২৪.৫ × ৬.২৫ = ১৫৩ গ্রাম প্রোটিন/দিন (২.০ গ্রাম/কেজি)। পুষ্টি দল অবিলম্বে উচ্চ-প্রোটিন ফর্মুলায় উন্নীত করে দিনে ১৫০ গ্রাম প্রোটিন সরবরাহ নিশ্চিত করে।',
          ),
        ],
        conclusion: l(
          'Quantifying nitrogen balance revealed that standard hospital feeding was allowing massive daily skeletal muscle destruction (403 g/day). Titrating protein to 2.0 g/kg (150 g/day) halted proteolysis, restored anabolism, and enabled successful wound healing and extubation.',
          'নাইট্রোজেন ব্যালেন্স পরীক্ষার মাধ্যমে প্রমাণিত হয় যে সাধারণ খাবারে রোগীর দিনে ৪০০ গ্রাম করে মাংসপেশি ধ্বংস হচ্ছিল। প্রোটিন বাড়িয়ে ১৫০ গ্রাম (২.০ গ্রাম/কেজি) করায় পেশি ক্ষয় বন্ধ হয় এবং রোগী দ্রুত সুস্থ হয়ে ভেন্টিলেটর মুক্ত হন।',
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
          'Aging is characterized by "anabolic resistance," where senescent skeletal muscle tissue exhibits blunted sensitivity to hyperaminoacidemia and insulin. Downstream signaling kinases (mTORC1, p70S6K) require a higher intracellular concentration of leucine to achieve Sestrin2-GATOR2 dissociation, surpass the activation threshold, and initiate myofibrillar protein translation in aging muscle fibers.',
          'বয়স বাড়ার সাথে সাথে পেশি কোষগুলোতে "অ্যানাবলিক রেজিস্ট্যান্স" তৈরি হয়, যার ফলে অ্যামিনো অ্যাসিডের প্রতি পেশির সংবেদনশীলতা কমে যায়। তাই বয়স্ক পেশি কোষে প্রোটিন তৈরির প্রধান সুইচ mTORC1 সক্রিয় করতে তরুণদের চেয়ে অনেক বেশি ঘনত্বের লিউসিন (প্রতিবেলায় ২.৫-৩.০ গ্রাম) প্রয়োজন হয়।',
        ),
      },
      {
        question: l(
          'Why must protein be restricted in non-dialysis Stage 4 CKD, but aggressively increased once the patient begins hemodialysis?',
          'ডায়ালাইসিস ছাড়া স্টেজ ৪ সিকেডিতে কেন প্রোটিন কমানো হয়, অথচ হেমোডায়ালাইসিস শুরু করার সাথে সাথেই কেন প্রচুর প্রোটিন দেওয়া হয়?'
        ),
        answer: l(
          'In non-dialysis CKD, restricting protein (0.55–0.60 g/kg) reduces intraglomerular capillary hypertension and slows the accumulation of toxic nitrogenous uremic waste products in diseased kidneys. However, once dialysis begins, the artificial filter clears 10 to 15 grams of amino acids per treatment session, and blood contact with dialyzer tubing triggers massive inflammatory cytokines that accelerate proteolysis. High protein (1.2–1.4 g/kg) is required to prevent fatal Protein-Energy Wasting (PEW).',
          'ডায়ালাইসিসের আগে প্রোটিন কমালে কিডনির রক্তনালীর চাপ কমে এবং ইউরিয়া কম জমে কিডনির আয়ু বাড়ে। কিন্তু একবার ডায়ালাইসিস শুরু হলে ডায়ালাইসিস মেশিনের ফিল্টারে প্রতিবার ১০-১৫ গ্রাম জরুরি অ্যামিনো অ্যাসিড রক্ত থেকে বের হয়ে নষ্ট হয়ে যায় এবং মেশিনের কৃত্রিম নল রক্তে প্রদাহ সৃষ্টি করে পেশি দ্রুত ভেঙে দেয়। তাই ডায়ালাইসিসের রোগীকে অপুষ্টি ও মৃত্যু থেকে বাঁচাতে উচ্চমাত্রার প্রোটিন (১.২-১.৪ গ্রাম/কেজি) দেওয়া বাধ্যতামূলক।',
        ),
      },
    ],
  },
}
