import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics06References: LessonReference[] = [
  {
    id: 'ref-mifflin-1990',
    authors: 'Mifflin MD, St Jeor ST, Hill LA, Scott BJ, Daugherty SA, Koh YO',
    title: 'A New Predictive Equation for Resting Energy Expenditure in Healthy Individuals',
    organization: 'The American Journal of Clinical Nutrition',
    year: 1990,
    url: 'https://academic.oup.com/ajcn/article-abstract/51/2/241/4695104',
    doi: '10.1093/ajcn/51.2.241',
  },
  {
    id: 'ref-frankenfield-penn-state-2011',
    authors: 'Frankenfield DC, Coleman A, Alam S, Cooney RN',
    title: 'Analysis of Estimation Methods for Resting Metabolic Rate in Critically Ill, Mechanically Ventilated Adults',
    organization: 'Journal of Parenteral and Enteral Nutrition',
    year: 2011,
    url: 'https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607110389025',
    doi: '10.1177/0148607110389025',
  },
  {
    id: 'ref-mcclave-aspen-icu-2016',
    authors: 'McClave SA, Taylor BE, Martindale RG, et al.',
    title: 'Guidelines for the Provision and Assessment of Nutrition Support Therapy in the Adult Critically Ill Patient',
    organization: 'Journal of Parenteral and Enteral Nutrition',
    year: 2016,
    url: 'https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607115621863',
    doi: '10.1177/0148607115621863',
  },
  {
    id: 'ref-weir-equation-1949',
    authors: 'Weir JB',
    title: 'New Methods for Calculating Metabolic Rate with Special Reference to Protein Metabolism',
    organization: 'The Journal of Physiology',
    year: 1949,
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1392602/',
    doi: '10.1113/jphysiol.1949.sp004363',
  },
  {
    id: 'ref-singer-espen-icu-2019',
    authors: 'Singer P, Blaser AR, Berger MM, et al.',
    title: 'ESPEN Guideline on Clinical Nutrition in the Intensive Care Unit',
    organization: 'Clinical Nutrition',
    year: 2019,
    url: 'https://www.clinicalnutritionjournal.com/article/S0261-5614(18)32432-4/fulltext',
    doi: '10.1016/j.clnu.2018.08.037',
  },
]

export const dietetics06PredictiveEnergyLesson: LessonTopic = {
  id: 'topic.dietetics.predictive-energy-equations',
  slug: 'predictive-energy-equations-mifflin-penn',
  title: l(
    '06 · Energy Expenditure Formulation: Mifflin-St Jeor, Penn State & Stress Factors',
    '০৬ · শক্তি খরচের সমীকরণ: মিফলিন-সেন্ট জিওর, পেন স্টেট ও স্ট্রেস গুণক'
  ),
  summary: l(
    'A masterclass in human energy expenditure formulation: mastering the validated Mifflin-St Jeor equation for ambulatory adults, deploying Penn State algorithms for mechanically ventilated critical care, calculating activity and stress factors without overfeeding, and analyzing indirect calorimetry with Respiratory Quotient (RQ) substrate kinetics.',
    'মানবদেহের শক্তি খরচের আধুনিক ক্লিনিক্যাল গাণিতিক বিজ্ঞান: সুস্থ ও সাধারণ রোগীদের জন্য মিফলিন-সেন্ট জিওর সমীকরণ প্রয়োগ, আইসিইউতে ভেন্টিলেটরে থাকা রোগীদের জন্য পেন স্টেট সমীকরণ, অতিরিক্ত ক্যালোরি খাওয়ানোর (ওভারফিডিং) বিপদ এড়িয়ে স্ট্রেস ফ্যাক্টরের সঠিক ব্যবহার এবং ইনডাইরেক্ট ক্যালোরিমেট্রি ও রেসপিরেটরি কোশেন্ট (RQ) বিশ্লেষণ।'
  ),
  subject: 'dietetics',
  version: 1,
  updatedAt: '2026-11-03',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-03',
  prerequisiteIds: ['topic.dietetics.assessment-abcd'],
  relatedTopicIds: ['topic.dietetics.assessment-abcd', 'topic.metabolism.bioenergetics-atp-thermodynamics'],
  objectives: [
    l(
      'Calculate Resting Metabolic Rate (RMR) with precision using the validated Mifflin-St Jeor equation across both normal-weight and obese adults.',
      'স্বাভাবিক ওজন ও স্থূল রোগীদের ক্ষেত্রে বৈজ্ঞানিকভাবে প্রমাণিত মিফলিন-সেন্ট জিওর সমীকরণ নির্ভুলভাবে প্রয়োগ করে বিশ্রামকালীন শক্তি খরচ (RMR) নির্ণয় করা।'
    ),
    l(
      'Deploy the Penn State (PSU 2003b and PSU 2010) predictive equations for mechanically ventilated intensive care patients, integrating real-time minute ventilation and peak body temperature.',
      'আইসিইউতে কৃত্রিম শ্বাসযন্ত্রে (ভেন্টিলেটর) থাকা রোগীদের জন্য মিনিট ভেন্টিলেশন ও সর্বোচ্চ তাপমাত্রার ভিত্তিতে পেন স্টেট সমীকরণ (PSU 2003b ও ২০১০) প্রয়োগ করা।'
    ),
    l(
      'Select evidence-based Physical Activity Factors (AF) and Injury/Stress Factors (IF) while avoiding the clinical catastrophe of compounding hypercaloric overfeeding.',
      'একাধিক গুণক একটার ওপর একটা চাপিয়ে মারাত্মক অতিরিক্ত ক্যালোরি খাওয়ানোর (ওভারফিডিং) ভুল এড়িয়ে প্রমাণভিত্তিক অ্যাক্টিভিটি ও স্ট্রেস ফ্যাক্টর নির্ধারণ করা।'
    ),
    l(
      'Interpret indirect calorimetry measurements via the Weir equation and evaluate cellular fuel substrate oxidation profiles using the Respiratory Quotient (RQ).',
      'উইয়ার সমীকরণের মাধ্যমে ইনডাইরেক্ট ক্যালোরিমেট্রির উপাত্ত এবং রেসপিরেটরি কোশেন্ট (RQ) দেখে কোষে কার্বোহাইড্রেট, প্রোটিন বা ফ্যাটের জারণ অবস্থা বিশ্লেষণ করা।'
    ),
    l(
      'Formulate hypocaloric, high-protein feeding regimens (11–14 kcal/kg actual weight or 22–25 kcal/kg IBW) for critically ill patients with severe obesity to protect respiratory function and prevent hepatic steatosis.',
      'স্থূল আইসিইউ রোগীদের শ্বাসযন্ত্রের সুরক্ষা এবং লিভারে চর্বি জমা প্রতিরোধে হাইপোক্যালোরিক উচ্চ-প্রোটিন পুষ্টি প্রেসক্রিপশন প্রণয়ন করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'An architectural diagram of Total Energy Expenditure (TEE) components and predictive pathways: Resting Metabolic Rate (RMR, 60–75%) calculated via Mifflin-St Jeor or Penn State forms the primary baseline; Thermic Effect of Food (TEF, 10%) and Physical Activity (PAL, 15–30%) are added conditionally; for critically ill patients, indirect calorimetry measures true oxygen consumption (VO2) and carbon dioxide production (VCO2) to generate exact Resting Energy Expenditure via the Weir equation.',
      'মোট শক্তি খরচের (TEE) বিভিন্ন অংশের স্থাপত্য প্রবাহচিত্র: ভিত্তি হলো বিশ্রামকালীন মেটাবলিজম (RMR, ৬০-৭৫%) যা মিফলিন বা পেন স্টেট সূত্রে হিসাব করা হয়; এর ওপর খাবার হজমের শক্তি (TEF, ১০%) এবং শারীরিক কার্যকলাপ (PAL, ১৫-৩০%) যোগ হয়; আর সংকটাপন্ন রোগীর ক্ষেত্রে ক্যালোরিমেট্রি দিয়ে অক্সিজেন ও কার্বন ডাই-অক্সাইড মেপে উইয়ার সমীকরণে প্রকৃত শক্তি খরচ বের করা হয়।'
    ),
    steps: [
      l(
        'Step 1: Baseline RMR Calculation. For ambulatory patients, calculate baseline Resting Metabolic Rate using the validated Mifflin-St Jeor equation based on actual weight, height, age, and biological sex.',
        'ধাপ ১: বেসলাইন RMR হিসাব: সাধারণ রোগীর ক্ষেত্রে লিঙ্গ, বয়স, প্রকৃত ওজন ও উচ্চতার ভিত্তিতে মিফলিন-সেন্ট জিওর সমীকরণ প্রয়োগ করে বিশ্রামকালীন মেটাবলিক রেট বের করুন।'
      ),
      l(
        'Step 2: ICU Ventilator Adaptation. For critically ill ventilated patients, apply the Penn State equations integrating exhaled minute ventilation (VE) from the ventilator and maximum body temperature (Tmax).',
        'ধাপ ২: ভেন্টিলেটরের রোগীদের হিসাব: আইসিইউতে ভেন্টিলেটরে থাকা রোগীর জন্য মিনিট ভেন্টিলেশন (VE) ও শরীরের সর্বোচ্চ তাপমাত্রা (Tmax) যোগ করে পেন স্টেট সূত্রে ক্যালোরি হিসাব করুন।'
      ),
      l(
        'Step 3: Factor Titration. Apply appropriate Physical Activity Factors (1.2 for bedridden, 1.3–1.5 for ambulatory) and cautious Stress Factors (1.1–1.3 for sepsis/surgery), guarding strictly against compounding stacked multipliers.',
        'ধাপ ৩: ফ্যাক্টরের সমন্বয়: রোগীর অবস্থা অনুযায়ী সতর্কতার সাথে শারীরিক পরিশ্রম (বিছানায় ১.২, হাঁটাচলায় ১.৩-১.৫) এবং সংক্রমণ/অপারেশনের স্ট্রেস ফ্যাক্টর (১.১-১.৩) গুণ করুন, যাতে একাধিক ফ্যাক্টর যোগ হয়ে ক্যালোরি মাত্রাতিরিক্ত না হয়।'
      ),
      l(
        'Step 4: Calorimetric Validation. If available, measure Respiratory Quotient (RQ = VCO2 / VO2) via indirect calorimetry: an RQ > 1.00 warns of net lipogenesis and dangerous hypercaloric overfeeding.',
        'ধাপ ৪: ক্যালোরিমেট্রিক মূল্যায়ন: সম্ভব হলে ইনডাইরেক্ট ক্যালোরিমেট্রির মাধ্যমে RQ দেখুন: RQ > ১.০০ হলে রোগী অতিরিক্ত ক্যালোরি পেয়ে ফ্যাট তৈরি করছে এবং শ্বাসকষ্টের ঝুঁকিতে আছে বলে প্রমাণিত হয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 52-year-old mechanically ventilated female with acute respiratory distress syndrome (ARDS) and septic shock has the following parameters: Height = 165 cm, Weight = 110 kg (BMI = 40.4 kg/m², Class III obesity), Ideal Body Weight (IBW) = 56.5 kg. She is intubated in the ICU with an exhaled minute ventilation (VE) of 11.5 L/min and maximum body temperature (Tmax) of 38.6°C. According to ASPEN/SCCM critical care guidelines, what is the recommended energy prescribing strategy for this patient?',
      'তীব্র শ্বাসকষ্ট (ARDS) ও সেপটিক শকে আক্রান্ত ৫২ বছর বয়সী এক নারী ভেন্টিলেটরে আছেন: উচ্চতা ১৬৫ সেমি, প্রকৃত ওজন ১১০ কেজি (বিএমআই ৪০.৪ kg/m², চরম স্থূলতা), আদর্শ ওজন (IBW) ৫৬.৫ কেজি। ভেন্টিলেটরে তার মিনিট ভেন্টিলেশন ১১.৫ লিটার/মিনিট এবং তাপমাত্রা ৩৮.৬°C। ASPEN/SCCM আইসিইউ নির্দেশিকা অনুযায়ী এই রোগীর জন্য কোন এনার্জি প্রেসক্রিপশন সবচেয়ে বিজ্ঞানসম্মত?'
    ),
    options: [
      l(
        'Prescribe full predictive energy using actual weight multiplied by heavy stress factors: 110 kg × 35 kcal/kg = 3,850 kcal/day.',
        'প্রকৃত ওজনের সাথে অতিরিক্ত স্ট্রেস ফ্যাক্টর গুণ করে পুরো ক্যালোরি দেওয়া: ১১০ কেজি × ৩৫ kcal/কেজি = ৩৮৫০ kcal/দিন।'
      ),
      l(
        'Prescribe a hypocaloric, high-protein regimen delivering 11–14 kcal/kg actual weight (1,210–1,540 kcal/day) or 22–25 kcal/kg IBW (1,240–1,410 kcal/day) paired with 2.0–2.5 g protein/kg IBW.',
        'একটি নিয়ন্ত্রিত হাইপোক্যালোরিক, উচ্চ-প্রোটিন খাদ্য প্রদান করা যা প্রকৃত ওজনের ভিত্তিতে ১১-১৪ kcal/কেজি (১২১০-১৫৪০ kcal/দিন) অথবা আদর্শ ওজনে ২২-২৫ kcal/কেজি (১২৪০-১৪১০ kcal/দিন) ক্যালোরি এবং ২.০-২.৫ গ্রাম প্রোটিন/কেজি IBW সরবরাহ করে।'
      ),
      l(
        'Provide zero nutrition for the first 14 days of ICU admission to stimulate endogenous lipolysis and accelerate weight reduction.',
        'চর্বি গলিয়ে ওজন কমাতে আইসিইউ ভর্তির প্রথম ১৪ দিন রোগীকে কোনো খাবার বা পুষ্টি না দেওয়া।'
      ),
      l(
        'Feed 50 kcal/kg IBW to compensate for the extreme thermic cost of ARDS lung work.',
        'ফুসফুসের অতিরিক্ত কাজের ঘাটতি মেটাতে আদর্শ ওজনের প্রতি কেজিতে ৫০ কিলোক্যালোরি প্রদান করা।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'In critically ill patients with class III obesity (BMI ≥ 40), the ASPEN/SCCM and ESPEN guidelines strongly recommend a hypocaloric, high-protein feeding strategy: 11–14 kcal/kg actual weight/day (or 22–25 kcal/kg IBW/day) paired with 2.0–2.5 g protein/kg IBW/day. Full caloric feeding using actual weight (e.g., > 3,000 kcal/day) causes severe hypercaloric overfeeding, triggering severe hyperglycemia, hepatic steatosis, and excessive carbon dioxide production (VCO2) that precipitates respiratory acidosis and prevents weaning from mechanical ventilation.',
      'চরম স্থূলতায় (বিএমআই ≥ ৪০) আক্রান্ত সংকটাপন্ন রোগীদের ক্ষেত্রে আন্তর্জাতিক ASPEN/SCCM নির্দেশিকা স্পষ্টভাবে হাইপোক্যালোরিক উচ্চ-প্রোটিন ডায়েট সুপারিশ করে: প্রকৃত ওজনের প্রতি কেজিতে ১১-১৪ kcal (বা আদর্শ ওজনে ২২-২৫ kcal) এবং ২.০-২.৫ গ্রাম প্রোটিন/কেজি IBW। প্রকৃত ওজন দিয়ে বেশি ক্যালোরি দিলে (যেমন ৩০০০+ ক্যালোরি) মারাত্মক "ওভারফিডিং" হয়, রক্তে চিনি বেড়ে যায়, লিভারে চর্বি জমে এবং ফুসফুসে অতিরিক্ত কার্বন ডাই-অক্সাইড তৈরি হয়ে ভেন্টিলেটর থেকে রোগীকে বের করা অসম্ভব হয়ে পড়ে।'
    ),
  },
  evidenceBySection: {
    'sec-calories-intro': ['ref-mifflin-1990', 'ref-weir-equation-1949'],
    'sec-mifflin-simple': ['ref-mifflin-1990', 'ref-weir-equation-1949'],
    'sec-danger-overfeeding': ['ref-mcclave-aspen-icu-2016', 'ref-singer-espen-icu-2019'],
    'sec-mifflin-mechanics': ['ref-mifflin-1990', 'ref-weir-equation-1949'],
    'sec-penn-state-icu': ['ref-frankenfield-penn-state-2011', 'ref-mcclave-aspen-icu-2016'],
    'sec-calorimetry-rq': ['ref-weir-equation-1949', 'ref-singer-espen-icu-2019'],
    'sec-obesity-icu-hypocaloric': ['ref-mcclave-aspen-icu-2016', 'ref-singer-espen-icu-2019'],
  },
  references: dietetics06References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-calories-intro',
          heading: l(
            '1. How Many Calories Does a Living Human Actually Need?',
            '১. বেঁচে থাকার জন্য একজন মানুষের আসলে কত ক্যালোরি শক্তির প্রয়োজন?'
          ),
          paragraphs: [
            l(
              'Every living cell in the human body operates like a microscopic furnace, consuming fuel (glucose, fatty acids, amino acids) and oxygen to generate adenosine triphosphate (ATP)—the universal energy currency that powers life [1]. The total sum of all biochemical energy expended by your body across a 24-hour day is termed your **Total Energy Expenditure (TEE)**.',
              'মানবদেহের প্রতিটি জীবন্ত কোষ একটি অতিক্ষুদ্র চুল্লির মতো কাজ করে, যা বেঁচে থাকার শক্তি বা এটিপি (ATP) তৈরির জন্য জ্বালানি (গ্লুকোজ, ফ্যাটি অ্যাসিড, অ্যামিনো অ্যাসিড) ও অক্সিজেন পোড়ায় [1]। চব্বিশ ঘণ্টায় সারাদিনে আপনার শরীর সব মিলিয়ে যে মোট শক্তি খরচ করে, চিকিৎসাবিজ্ঞানে তাকে বলা হয় **টোটাল এনার্জি এক্সপেন্ডিচার (TEE)** বা মোট দৈনিক শক্তি ব্যয়।'
            ),
            l(
              'Many people imagine that energy expenditure is dominated by how much they run or exercise. In reality, human energetics is divided into three distinct biological tiers [1, 4]:',
              'অনেকে মনে করেন ব্যায়াম বা দৌড়াদৌড়িই হয়তো মানুষের সারাদিনের সিংহভাগ শক্তি খরচ করে। কিন্তু মানবদেহের বাস্তব শারীরবৃত্তীয় নিয়ম সম্পূর্ণ ভিন্ন। আমাদের দৈনিক শক্তি খরচ প্রধানত তিনটি স্বতন্ত্র ভাগে বিভক্ত [1, 4]:'
            ),
          ],
          bullets: [
            l(
              'Resting Metabolic Rate (RMR, 60% to 75% of TEE): The lion’s share of daily energy. This is the metabolic baseline burned merely staying alive in bed in a quiet room—fueling continuous cardiac contraction, lung expansion, brain synaptic firing, liver detoxification, and renal filtration.',
              'রেস্টিং মেটাবলিক রেট (RMR, মোট শক্তির ৬০% থেকে ৭৫%): দৈনিক শক্তি খরচের সিংহভাগই হলো এটি। কোনো নড়াচড়া ছাড়া কেবল বিছানায় শুয়ে বেঁচে থাকার জন্য (হৃদপিণ্ডের স্পন্দন, শ্বাসপ্রশ্বাস, মস্তিষ্কের চিন্তা, লিভারের কাজ ও কিডনির রক্ত ছাঁকা) এই শক্তি খরচ হয়।',
            ),
            l(
              'Thermic Effect of Food (TEF, approximately 10% of TEE): The metabolic processing fee required to chew, swallow, chemically digest, absorb, transport, and biochemically store the nutrients you consume at meals.',
              'থার্মিক ইফেক্ট অব ফুড (TEF, মোট শক্তির প্রায় ১০%): খাবার মুখে চিবানো, পাকস্থলীতে হজম করা, অন্ত্রে শোষণ করা এবং কোষে কোষে পুষ্টি উপাদান পৌঁছে দেওয়ার কাজে শরীর যে শক্তি ব্যয় করে।',
            ),
            l(
              'Physical Activity Expenditure (15% to 30% of TEE): The most flexible component, comprising intentional structured exercise as well as Non-Exercise Activity Thermogenesis (NEAT)—fidgeting, standing, walking up stairs, and typing.',
              'শারীরিক কার্যকলাপ (মোট শক্তির ১৫% থেকে ৩০%): এটি সবচেয়ে পরিবর্তনশীল অংশ, যা পরিকল্পিত ব্যায়ামের পাশাপাশি দৈনন্দিন সাধারণ নড়াচড়া (হাঁটাচলা, দাঁড়ানো, সিঁড়ি বেয়ে ওঠা, হাত-পা নাড়ানো) দ্বারা খরচ হয়।',
            ),
          ],
        },
        {
          id: 'sec-mifflin-simple',
          heading: l(
            '2. The Clinical Yardstick: The Mifflin-St Jeor Formula',
            '২. চিকিৎসাবিজ্ঞানের প্রমিত মাপকাঠি: মিফলিন-সেন্ট জিওর সমীকরণ'
          ),
          paragraphs: [
            l(
              'Measuring exact energy expenditure in every patient using complex laboratory gas analyzers is impractical in daily medical practice. In 1990, Dr. Mark Mifflin and colleagues conducted rigorous metabolic chamber trials and published the **Mifflin-St Jeor equation** [1]. Today, clinical guidelines across the globe recommend this equation as the premier predictive formula for estimating Resting Metabolic Rate in non-critically ill adults.',
              'প্রতিটি রোগীর ক্ষেত্রে ল্যাবরেটরির দামি গ্যাস অ্যানালাইজার যন্ত্র দিয়ে মেপে মেপে শক্তি বের করা দৈনন্দিন হাসপাতালে অসম্ভব। ১৯৯০ সালে ড. মার্ক মিফলিন এবং তার সহকর্মীরা নিখুঁত গবেষণার মাধ্যমে উদ্ভাবন করেন **মিফলিন-সেন্ট জিওর সমীকরণ** [1]। বর্তমানে বিশ্বজুড়ে সাধারণ প্রাপ্তবয়স্কদের বিশ্রামকালীন শক্তি খরচ (RMR) নির্ণয়ের জন্য এই সূত্রটিকে সবচেয়ে নির্ভরযোগ্য মানদণ্ড হিসেবে স্বীকৃতি দেওয়া হয়েছে।'
            ),
            l(
              'The equation requires only four easily accessible physiological parameters: biological sex, body weight in kilograms, height in centimeters, and chronological age in years [1]:',
              'এই সমীকরণটি প্রয়োগ করতে রোগীর মাত্র চারটি সাধারণ শারীরিক তথ্য জানা প্রয়োজন: লিঙ্গ, কেজিতে শরীরের ওজন, সেন্টিমিটারে উচ্চতা এবং বছরে বয়স [1]:'
            ),
            l(
              'Men: RMR (kcal/day) = 10 × Weight (kg) + 6.25 × Height (cm) - 5 × Age (years) + 5\nWomen: RMR (kcal/day) = 10 × Weight (kg) + 6.25 × Height (cm) - 5 × Age (years) - 161',
              'পুরুষ: RMR (kcal/দিন) = ১০ × ওজন (কেজি) + ৬.২৫ × উচ্চতা (সেমি) - ৫ × বয়স (বছর) + ৫\nনারী: RMR (kcal/দিন) = ১০ × ওজন (কেজি) + ৬.২৫ × উচ্চতা (সেমি) - ৫ × বয়স (বছর) - ১৬১'
            ),
            l(
              'Once baseline RMR is determined, the clinician multiplies it by an appropriate **Physical Activity Factor (AF)**—for example, 1.2 for a patient confined to a hospital bed, or 1.4 to 1.6 for an active individual returning to work—to determine target daily caloric intake [1].',
              'একবার বেসলাইন RMR বের করার পর, রোগী কতটা সচল তার ওপর ভিত্তি করে একটি **অ্যাক্টিভিটি ফ্যাক্টর (AF)** দিয়ে গুণ করা হয়—যেমন বিছানায় শুয়ে থাকা রোগীর জন্য ১.২, বা স্বাভাবিক হাঁটাচলা করা মানুষের জন্য ১.৪ থেকে ১.৬—যার মাধ্যমে সারাদিনের কাঙ্ক্ষিত মোট ক্যালোরি পাওয়া যায় [1]।'
            ),
          ],
        },
        {
          id: 'sec-danger-overfeeding',
          heading: l(
            '3. The Clinical Danger of Overfeeding Hospitalized Patients',
            '৩. হাসপাতালে অসুস্থ রোগীকে অতিরিক্ত ক্যালোরি খাওয়ানোর মারাত্মক বিপদ'
          ),
          paragraphs: [
            l(
              'One of the most persistent and dangerous errors in clinical practice is the emotional impulse to aggressively force-feed sick patients [3]. Family members and inexperienced clinicians frequently assume: "The patient is desperately ill and losing weight; therefore, we must pump 3,500 calories into them to rebuild their body." In severe illness, this practice is catastrophic.',
              'চিকিৎসা সেবায় সবচেয়ে প্রচলিত অথচ মারাত্মক ভুলগুলোর একটি হলো অসুস্থ রোগীকে জোর করে অতিরিক্ত খাবার খাওয়ানোর প্রবণতা [3]। রোগীর স্বজন এবং অনভিজ্ঞ কর্মীরা প্রায়ই আবেগতাড়িত হয়ে ভাবেন: "রোগী এত বেশি দুর্বল হয়ে শুকিয়ে যাচ্ছে, তাই তাকে দিনে সাড়ে তিন হাজার ক্যালোরি জোর করে খাওয়াতে হবে যাতে শরীর দ্রুত ভরে ওঠে।" কিন্তু গুরুতর অসুস্থতায় এই কাজটি ডেকে আনে চরম সর্বনাশ।'
            ),
            l(
              'When the human body is paralyzed by systemic shock, sepsis, or surgical trauma, mitochondrial enzyme pathways are "stunned" and cannot process large carbohydrate or fat loads [3, 5]. Force-feeding excess calories does not build new muscle tissue; instead, it triggers a cascade of life-threatening metabolic complications termed **hypercaloric overfeeding**.',
              'যখন শরীর সেপসিস, তীব্র শক বা বড় অস্ত্রোপচারের আঘাতে জর্জরিত থাকে, তখন কোষের ভেতরের মাইটোকন্ড্রিয়া নিস্তেজ অবস্থায় থাকে এবং অতিরিক্ত শর্করা বা চর্বি পুড়িয়ে ব্যবহার করতে পারে না [3, 5]। এ অবস্থায় মাত্রাতিরিক্ত খাবার দিলে তা কোনো মাংসপেশি তৈরি করে না; বরং তা শরীরে তৈরি করে প্রাণঘাতী এক জটিলতা, যাকে চিকিৎসাবিজ্ঞানে **হাইপারক্যালোরিক ওভারফিডিং (Overfeeding)** বলা হয়।'
            ),
          ],
          bullets: [
            l(
              'Hyperglycemia and Infection Risk: Excess glucose overwhelms cellular uptake, skyrocketing blood sugars > 200 mg/dL, which paralyzes neutrophil white blood cells and triggers severe secondary bloodstream infections.',
              'রক্তে চিনি বৃদ্ধি ও সংক্রমণের ঝুঁকি: অতিরিক্ত শর্করা রক্তে গ্লুকোজ ২০০ mg/dL-এর ওপরে তুলে দেয়, যা রক্তের রোগ প্রতিরোধক শ্বেতকণিকাকে পক্ষাঘাতগ্রস্ত করে ফেলে এবং নতুন সংক্রমণের পথ তৈরি করে।',
            ),
            l(
              'Hepatic Steatosis (Fatty Liver): The liver is forced to convert excess carbohydrates into triglycerides via de novo lipogenesis, engorging hepatocytes with fat and causing acute cholestatic liver enzyme elevations.',
              'লিভারে বিষাক্ত চর্বি জমা: অতিরিক্ত শর্করা ব্যবহার করতে না পেরে যকৃত তা চর্বিতে রূপান্তর করতে বাধ্য হয়, যার ফলে লিভার কোষে দ্রুত চর্বি জমে লিভারের এনজাইমগুলো অস্বাভাবিক মাত্রায় বেড়ে যায়।',
            ),
            l(
              'Excessive Carbon Dioxide Production: Converting excess carbohydrate into body fat produces massive amounts of CO2 gas, forcing the lungs to work violently and preventing critically ill patients from being removed from mechanical ventilators.',
              'ফুসফুসে অতিরিক্ত কার্বন ডাই-অক্সাইডের বোঝা: শর্করা থেকে চর্বি তৈরি হওয়ার সময় শরীরে বিপুল পরিমাণ কার্বন ডাই-অক্সাইড (CO2) গ্যাস তৈরি হয়, যা রোগীকে শ্বাসযন্ত্র বা ভেন্টিলেটর থেকে বের করে আনার পথে প্রধান বাধা হয়ে দাঁড়ায়।',
            ),
            l(
              'Azotemia and Fluid Retention: Forcing excess calories requires high fluid volumes and creates metabolic byproducts that stress the kidneys and precipitate acute pulmonary edema.',
              'কিডনিতে চাপ ও ফুসফুসে পানি জমা: অতিরিক্ত খাবার पचाতে প্রচুর তরলের প্রয়োজন হয় এবং অতিরিক্ত বর্জ্য তৈরি হয়ে কিডনিকে দুর্বল করে ফুসফুসে পানি জমিয়ে শ্বাসকষ্ট তীব্র করে তোলে।',
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-mifflin-mechanics',
          heading: l(
            '1. Algorithmic Energy Formulation: Mifflin-St Jeor Validation vs Harris-Benedict',
            '১. শক্তি খরচের গাণিতিক বিশ্লেষণ: মিফলিন-সেন্ট জিওর বনাম পুরোনো হ্যারিস-বেনেডিক্ট'
          ),
          paragraphs: [
            l(
              'Extensive validation studies endorsed by the Academy of Nutrition and Dietetics and ESPEN have proven that the **Mifflin-St Jeor equation** is significantly superior to historical formulas [1]. In non-critically ill adults, Mifflin-St Jeor predicts Resting Metabolic Rate within ± 10% of measured indirect calorimetry in up to 82% of non-obese individuals and 70% of obese individuals, making it the international gold standard.',
              'আন্তর্জাতিক ডায়েটেটিক্স অ্যাকাডেমি এবং ইউরোপীয় এসপেন (ESPEN) কর্তৃক পরিচালিত ব্যাপক গবেষণায় প্রমাণিত হয়েছে যে **মিফলিন-সেন্ট জিওর সমীকরণ** পুরোনো সূত্রের তুলনায় বহুগুণ শ্রেষ্ঠ [1]। সাধারণ প্রাপ্তবয়স্কদের ক্ষেত্রে এটি ইনডাইরেক্ট ক্যালোরিমেট্রি যন্ত্রের প্রকৃত মানের সাথে শতকরা ৮২ ভাগ স্বাভাবিক ও ৭০ ভাগ স্থূল ব্যক্তির ক্ষেত্রে হুবহু মিলে যায়, যা এটিকে বিশ্বব্যাপী স্বীকৃত মানদণ্ডে পরিণত করেছে।'
            ),
            l(
              'In stark contrast, the historical **Harris-Benedict equation** (formulated in 1919) systematically overestimates resting energy expenditure by 5% to 15% across contemporary populations [1]. The 1919 cohort comprised young, lean individuals with physically demanding lifestyles; applying those coefficients to modern sedentary populations routinely produces unintended positive energy balance and weight gain.',
              'বিপরীতে, ১৯১৯ সালে আবিষ্কৃত পুরোনো **হ্যারিস-বেনেডিক্ট সমীকরণ** আধুনিক মানুষের ক্ষেত্রে শক্তি খরচ প্রায় ৫% থেকে ১৫% পর্যন্ত অতিরিক্ত দেখায় [1]। ১৯১৯ সালের সেই গবেষণায় অংশ নিয়েছিলেন অত্যন্ত কর্মঠ ও কায়িক শ্রমজীবী যুবকেরা; আজকের দিনের অলস ও কম পেশীবহুল মানুষের ওপর সেই পুরোনো সূত্র প্রয়োগ করলে রোগীকে অজান্তেই প্রয়োজনের বেশি ক্যালোরি দিয়ে ফেলার ঝুঁকি থাকে।'
            ),
          ],
          bullets: [
            l(
              'The Danger of Stacked Multipliers: Historically, clinicians multiplied RMR by an Activity Factor (1.3) AND an Injury Factor (1.5), compounding numbers to prescribe 3,000+ kcal/day to bedridden patients. Modern consensus mandates cautious, singular adjustment.',
              'একাধিক গুণক চাপানোর বিপদ: অতীতে চিকিৎসকরা RMR-এর সাথে অ্যাক্টিভিটি ফ্যাক্টর (১.৩) এবং ইনজুরি ফ্যাক্টর (১.৫) একটার পর একটা গুণ করে রোগীর চাহিদা ৩০০০ ক্যালোরির ওপরে তুলে দিতেন। আধুনিক বিজ্ঞান স্পষ্টভাবে এই ভুল বর্জন করতে বলেছে।',
            ),
            l(
              'Evidence-Based Injury Factors: Minor surgery = 1.05 to 1.15; Major elective trauma/sepsis = 1.20 to 1.30; Severe multi-trauma = 1.30 to 1.40; Major thermal burns (> 40% TBSA) = 1.50 to 1.80.',
              'প্রমাণভিত্তিক ইনজুরি গুণক: ছোট অপারেশন = ১.০৫ থেকে ১.১৫; বড় আঘাত বা সেপসিস = ১.২০ থেকে ১.৩০; মারাত্মক পলি-ট্রমা = ১.৩০ থেকে ১.৪০; এবং শরীরের ৪০% পুড়ে যাওয়া পোড়া রোগী = ১.৫০ থেকে ১.৮০।',
            ),
            l(
              'Which Weight to Use: In normal weight (BMI 18.5–24.9) and overweight (BMI 25–29.9), always use ACTUAL measured weight. In severe obesity, specialized hypocaloric algorithms or adjusted weights must be used.',
              'কোন ওজন ব্যবহার করবেন: স্বাভাবিক ওজন এবং অতিরিক্ত ওজনের মানুষের ক্ষেত্রে সর্বদা রোগীর বর্তমান প্রকৃত ওজন ব্যবহার করুন। কেবল চরম স্থূলতার ক্ষেত্রে বিশেষ হাইপোক্যালোরিক নিয়ম প্রযোজ্য।',
            ),
            l(
              'Reassessing Weekly: In hospitalized patients, fluid shifts and clinical recovery alter weight and metabolic demands; energy targets must be recalculated weekly rather than remaining static.',
              'সাপ্তাহিক পুনঃমূল্যায়ন: হাসপাতালের রোগীর শরীরে পানি জমা বা আরোগ্যের সাথে সাথে ওজন ও মেটাবলিজম দ্রুত পরিবর্তিত হয়; তাই প্রতি সপ্তাহে নতুন করে ক্যালোরি হিসাব করা আবশ্যক।',
            ),
          ],
        },
        {
          id: 'sec-penn-state-icu',
          heading: l(
            '2. Critical Care Energetics: The Penn State Equations for Mechanical Ventilation',
            '২. আইসিইউ ক্রিটিক্যাল কেয়ার: যান্ত্রিক ভেন্টিলেটরের জন্য পেন স্টেট সমীকরণ'
          ),
          paragraphs: [
            l(
              'In the intensive care unit, static predictive equations completely collapse [2, 3]. A patient on mechanical ventilation is influenced by high positive end-expiratory pressure, continuous intravenous sedatives (propofol, midazolam), paralytic neuromuscular blockers, fluctuating sepsis, and spikes of fever. To overcome this, Dr. David Frankenfield and colleagues developed the **Penn State predictive equations**, dynamically incorporating real-time respiratory and thermal telemetry [2].',
              'আইসিইউতে সাধারণ সমীকরণগুলো সম্পূর্ণ ব্যর্থ হয় [2, 3]। কারণ ভেন্টিলেটরে থাকা রোগীর শ্বাসযন্ত্রের কাজ, শক্তিশালী ব্যথানাশক ও ঘুম পাড়ানোর ওষুধ (যেমন প্রোপোফল), মাংসপেশি শিথিল করার ইনজেকশন এবং জ্বরের ওঠানামা রোগীর শক্তি খরচকে প্রতি মুহূর্তে বদলে দেয়। এই সমস্যার সমাধানে ড. ডেভিড ফ্রাঙ্কেনফিল্ড উদ্ভাবন করেন **পেন স্টেট সমীকরণ**, যা রোগীর ভেন্টিলেটরের ডিসপ্লে এবং শরীরের তাপমাত্রার ডেটা সরাসরি ব্যবহার করে [2]।'
            ),
            l(
              'Two primary validated Penn State iterations are deployed based on patient age and body mass index [2, 3]:',
              'রোগীর বয়স এবং বিএমআই-এর ওপর ভিত্তি করে দুটি প্রধান পেন স্টেট সংস্করণ বিশ্বব্যাপী ব্যবহৃত হয় [2, 3]:'
            ),
            l(
              'PSU 2003b (For Non-obese individuals of any age, or Obese with BMI < 30):\nRMR (kcal/day) = Mifflin(0.96) + VE(31) + Tmax(167) - 6212\n\nPSU 2010 (For Obese individuals with BMI ≥ 30 AND Age ≥ 60):\nRMR (kcal/day) = Mifflin(0.71) + VE(64) + Tmax(85) - 3085',
              'PSU 2003b (যেকোনো বয়সের স্বাভাবিক ওজন বা বিএমআই < ৩০ রোগীর জন্য):\nRMR (kcal/দিন) = মিফলিন(০.৯৬) + VE(৩১) + Tmax(১৬৭) - ৬২১২\n\nPSU 2010 (বিএমআই ≥ ৩০ এবং বয়স ≥ ৬০ বছর বয়সী স্থূল রোগীর জন্য):\nRMR (kcal/দিন) = মিফলিন(০.৭১) + VE(৬৪) + Tmax(৮৫) - ৩০৮৫'
            ),
          ],
          bullets: [
            l(
              'Exhaled Minute Ventilation (VE): The volume of gas exhaled per minute in liters (L/min) displayed on the mechanical ventilator; elevated VE directly reflects increased cellular metabolic carbon dioxide production and respiratory work.',
              'নিঃসরিত মিনিট ভেন্টিলেশন (VE): ভেন্টিলেটরের স্ক্রিনে প্রদর্শিত প্রতি মিনিটে ফুসফুস থেকে বের হওয়া বাতাসের আয়তন (লিটার/মিনিট); VE বেশি হওয়ার অর্থ হলো কোষে বেশি শক্তি খরচ ও কার্বন ডাই-অক্সাইড তৈরি হচ্ছে।',
            ),
            l(
              'Peak Core Temperature (Tmax): The maximum core body temperature in degrees Celsius recorded over the preceding 24 hours; every 1°C elevation in body temperature raises basal metabolic expenditure by approximately 10% to 13%.',
              'সর্বোচ্চ শারীরিক তাপমাত্রা (Tmax): গত ২৪ ঘণ্টায় রোগীর শরীরের সর্বোচ্চ তাপমাত্রা (সেলসিয়াস); শরীরের তাপমাত্রা প্রতি ১°C বৃদ্ধির জন্য বেসাল মেটাবলিক খরচ প্রায় ১০% থেকে ১৩% বেড়ে যায়।',
            ),
            l(
              'Baseline Mifflin Input: The unmodified Mifflin-St Jeor RMR calculated using actual weight is plugged directly into the equation before applying the regression coefficients.',
              'বেসলাইন মিফলিন ইনপুট: রোগীর প্রকৃত ওজন দিয়ে হিসাব করা মূল মিফলিন মানটি এই সমীকরণে গুণকগুলোর সাথে সরাসরি যুক্ত করা হয়।',
            ),
            l(
              'Superior Accuracy in Critical Care: Studies show the Penn State equations achieve 70% to 75% accuracy compared against gold-standard indirect calorimetry in mechanically ventilated ICU cohorts.',
              'আইসিইউতে নির্ভুলতা: গবেষণায় দেখা গেছে ভেন্টিলেটরে থাকা রোগীদের ক্ষেত্রে পেন স্টেট সমীকরণ গোল্ড-স্ট্যান্ডার্ড ক্যালোরিমেট্রির মানের সাথে প্রায় ৭৫% ক্ষেত্রে হুবহু মিলে যায়।',
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-calorimetry-rq',
          heading: l(
            '1. Indirect Calorimetry, the Weir Equation & Respiratory Quotient Kinetics',
            '১. ইনডাইরেক্ট ক্যালোরিমেট্রি, উইয়ার সমীকরণ ও রেসপিরেটরি কোশেন্ট (RQ) গতিবিদ্যা'
          ),
          paragraphs: [
            l(
              'Indirect calorimetry represents the undisputed clinical gold standard for measuring human energy expenditure [4, 5]. Rather than predicting what a statistical model thinks a patient burns, a metabolic cart directly measures cellular combustion in real time. By continuously sampling inspired and expired oxygen concentrations (VO2) and carbon dioxide concentrations (VCO2) through a face mask, canopy hood, or mechanical ventilator circuit, the instrument calculates true Resting Energy Expenditure (REE) via the historic **Weir Equation** [4]:',
              'ইনডাইরেক্ট ক্যালোরিমেট্রি হলো মানবদেহের শক্তি খরচ পরিমাপের অপ্রতিদ্বন্দ্বী আন্তর্জাতিক স্বর্ণমান [4, 5]। কোনো সমীকরণের অনুমানের ওপর নির্ভর না করে, একটি মেটাবলিক কার্ট যন্ত্র সরাসরি রোগীর কোষের শ্বসন প্রক্রিয়াকে তাৎক্ষণিকভাবে পরিমাপ করে। মাস্ক বা ভেন্টিলেটরের মাধ্যমে রোগীর গৃহীত অক্সিজেনের পরিমাণ (VO2) এবং নির্গত কার্বন ডাই-অক্সাইডের পরিমাণ (VCO2) মেপে বিখ্যাত **উইয়ার সমীকরণের (Weir Equation)** সাহায্যে প্রকৃত শক্তি খরচ হিসাব করা হয় [4]:'
            ),
            l(
              'Weir Equation: REE (kcal/day) = [3.941 × VO2 (mL/min) + 1.106 × VCO2 (mL/min)] × 1.44',
              'উইয়ার সমীকরণ: REE (kcal/দিন) = [৩.৯৪১ × VO2 (মিলি/মিনিট) + ১.১০৬ × VCO2 (মিলি/মিনিট)] × ১.৪৪'
            ),
            l(
              'Simultaneously, indirect calorimetry provides profound clinical insight into which cellular fuel substrate is being oxidized inside the patient’s mitochondria by computing the **Respiratory Quotient (RQ)** [4, 5]:',
              'একই সাথে ইনডাইরেক্ট ক্যালোরিমেট্রি রোগীর কোষের মাইটোকন্ড্রিয়ায় কোন জ্বালানি পুড়ছে তা উন্মোচন করে দেয়, যাকে বলা হয় **রেসপিরেটরি কোশেন্ট (Respiratory Quotient বা RQ)** [4, 5]:'
            ),
            l(
              'Respiratory Quotient: RQ = VCO2 / VO2',
              'রেসপিরেটরি কোশেন্ট: RQ = উৎপন্ন কার্বন ডাই-অক্সাইড (VCO2) / ব্যবহৃত অক্সিজেন (VO2)'
            ),
          ],
          bullets: [
            l(
              'RQ = 1.00 (Pure Carbohydrate Oxidation): The combustion of glucose consumes 6 molecules of O2 and produces 6 molecules of CO2 (6 CO2 / 6 O2 = 1.00).',
              'RQ = ১.০০ (কেবল কার্বোহাইড্রেটের জারণ): গ্লুকোজ পুড়তে ৬টি অক্সিজেন অণু লাগে এবং ৬টি কার্বন ডাই-অক্সাইড তৈরি হয় (৬ CO2 / ৬ O2 = ১.০০)।',
            ),
            l(
              'RQ = 0.80 to 0.82 (Mixed Protein Oxidation): Normal mixed substrate metabolism in a well-nourished, stable individual.',
              'RQ = ০.৮০ থেকে ০.৮২ (মিশ্র প্রোটিন ও খাবার জারণ): সুস্থ, স্বাভাবিক ও সুষম খাদ্যে থাকা মানুষের কোষে প্রোটিন ও শর্করার স্বাভাবিক দহন।',
            ),
            l(
              'RQ = 0.70 to 0.71 (Pure Fat Oxidation): Fat molecules are oxygen-poor and require high oxygen consumption relative to carbon dioxide release (e.g., palmitic acid: 16 CO2 / 23 O2 = 0.70). Seen in fasting, ketoacidosis, or hypocaloric underfeeding.',
              'RQ = ০.৭০ থেকে ০.৭১ (কেবল চর্বি বা ফ্যাটের জারণ): ফ্যাটে অক্সিজেনের অভাব থাকায় বেশি অক্সিজেন পুড়ে কম কার্বন ডাই-অক্সাইড বের হয় (১৬ CO2 / ২৩ O2 = ০.৭০)। এটি দীর্ঘ উপবাস, কিটোসিস বা কম ক্যালোরিতে দেখা যায়।',
            ),
            l(
              'RQ > 1.00 (Net Lipogenesis and Overfeeding): When carbohydrate infusion exceeds oxidative capacity, the excess glucose is synthesized into fat (lipogenesis). This biochemical conversion generates CO2 without consuming equivalent O2, driving RQ up to 1.10–1.25. In ventilated patients, this massive CO2 burden precipitates respiratory failure and blocks ventilator weaning.',
              'RQ > ১.০০ (মারাত্মক ওভারফিডিং ও চর্বি তৈরি): রোগী প্রয়োজনের চেয়ে বেশি শর্করা পেলে লিভার তা চর্বিতে রূপান্তর (Lipogenesis) শুরু করে। এতে প্রচুর কার্বন ডাই-অক্সাইড তৈরি হয় এবং RQ বেড়ে ১.১০-১.২৫ এ ওঠে। ভেন্টিলেটরের রোগীর ফুসফুসে এই অতিরিক্ত CO2 গ্যাস জমা হয়ে মারাত্মক অ্যাসিড তৈরি করে রোগীকে মৃত্যুর ঝুঁকিতে ফেলে দেয়।',
            ),
            l(
              'RQ < 0.67 (Physiological Impossibility or Ketone Excretion): Values below 0.67 suggest equipment leak, hyperventilation artifact, or profound urinary ketone wasting.',
              'RQ < ০.৬৭ (শারীরবৃত্তীয় বিভ্রান্তি বা কিটোন অপচয়): ০.৬৭-এর কম মান যন্ত্রের ত্রুটি, গ্যাস লিক বা তীব্র ডায়াবেটিক কিটোঅ্যাসিডোসিসে মূত্রে কিটোন নির্গমন নির্দেশ করে।',
            ),
          ],
        },
        {
          id: 'sec-obesity-icu-hypocaloric',
          heading: l(
            '2. High-Protein Hypocaloric Regimens in Severe Obesity ICU Care',
            '২. স্থূল আইসিইউ রোগীদের ক্ষেত্রে হাইপোক্যালোরিক উচ্চ-প্রোটিন পুষ্টি কৌশল'
          ),
          paragraphs: [
            l(
              'Prescribing energy for critically ill patients with class II and III obesity (BMI ≥ 35 kg/m²) represents one of the most intellectually demanding challenges in clinical nutrition [3, 5]. Calculating energy based on actual scale weight (e.g., 25–30 kcal/kg actual weight) causes devastating hypercaloric overfeeding. Adipose tissue is metabolically indolent compared to viscera and skeletal muscle—adipose tissue burns only ~4.5 kcal/kg/day, whereas skeletal muscle burns 13 kcal/kg/day and liver/kidneys burn > 200 kcal/kg/day.',
              'চরম স্থূলতায় (বিএমআই ≥ ৩৫ kg/m²) আক্রান্ত সংকটজনক আইসিইউ রোগীদের ক্ষেত্রে ক্যালোরি নির্ধারণ করা চিকিৎসাবিজ্ঞানের অন্যতম সূক্ষ্ম পরীক্ষা [3, 5]। রোগীর প্রকৃত স্কেলের ওজন দিয়ে হিসাব করলে (যেমন ২৫-৩০ kcal/কেজি) রোগীকে ধ্বংসাত্মক মাত্রায় অতিরিক্ত খাবার দিয়ে ফেলা হয়। কারণ চর্বি কলা মাংসপেশি বা অঙ্গপ্রত্যঙ্গের তুলনায় অত্যন্ত অলস—চর্বি কলায় দিনে মাত্র ৪.৫ kcal/কেজি শক্তি খরচ হয়, অথচ পেশিতে ১৩ kcal/কেজি এবং লিভার ও কিডনিতে ২০০ kcal/কেজির বেশি খরচ হয়।'
            ),
            l(
              'To avoid the respiratory failure, hyperglycemia, and hepatic steatosis of overfeeding while simultaneously preventing the rapid loss of somatic muscle mass, ASPEN, SCCM, and ESPEN critical care consensus guidelines mandate a **hypocaloric, high-protein feeding strategy** [3, 5]:',
              'ওভারফিডিংজনিত শ্বাসকষ্ট, রক্তের অতিরিক্ত চিনি এবং ফ্যাটি লিভারের ভয়াবহতা এড়িয়ে রোগীর মূল্যবান মাংসপেশি রক্ষা করার জন্য আন্তর্জাতিক নির্দেশিকা **হাইপোক্যালোরিক উচ্চ-প্রোটিন পুষ্টি প্রেসক্রিপশন** বাধ্যতামূলক করেছে [3, 5]:'
            ),
            l(
              'Energy Target:\n11 to 14 kcal/kg actual body weight/day (for BMI 30 to 50)\nOR\n22 to 25 kcal/kg Ideal Body Weight/day (IBW calculated via Hamwi formula)\n\nProtein Target:\n2.0 g protein/kg IBW/day (for BMI 30 to 39.9, Class I and II obesity)\nOR\n2.5 g protein/kg IBW/day (for BMI ≥ 40, Class III severe obesity)',
              'ক্যালোরির লক্ষ্যমাত্রা:\nপ্রকৃত ওজনের প্রতি কেজিতে ১১ থেকে ১৪ kcal/দিন (বিএমআই ৩০ থেকে ৫০ এর জন্য)\nঅথবা\nআদর্শ ওজনের (IBW) প্রতি কেজিতে ২২ থেকে ২৫ kcal/দিন (হামউই সূত্রে নির্ণীত IBW)\n\nপ্রোটিনের লক্ষ্যমাত্রা:\n২.০ গ্রাম প্রোটিন/কেজি IBW/দিন (বিএমআই ৩০ থেকে ৩৯.৯ এর জন্য)\nঅথবা\n২.৫ গ্রাম প্রোটিন/কেজি IBW/দিন (বিএমআই ≥ ৪০ এর চরম স্থূলতার জন্য)'
            ),
          ],
          bullets: [
            l(
              'The Metabolic Logic: Hypocaloric feeding forces the body to mobilize and oxidize endogenous adipose triglyceride stores for daily energy, while the massive protein provision (2.0–2.5 g/kg IBW) halts skeletal muscle proteolysis and maintains immune function.',
              'মেটাবলিক যুক্তি: কম ক্যালোরি দেওয়ায় শরীর বাধ্য হয়ে নিজের জমানো চর্বি পুড়িয়ে শক্তির ঘাটতি মেটায়; আর প্রচুর প্রোটিন দেওয়ায় রোগীর গুরুত্বপূর্ণ মাংসপেশি ভেঙে যাওয়া পুরোপুরি বন্ধ থাকে।',
            ),
            l(
              'The Hamwi Equation for Ideal Body Weight (IBW): Men = 48 kg for first 152 cm (5 feet) + 2.7 kg per additional 2.54 cm (inch). Women = 45.5 kg for first 152 cm + 2.3 kg per additional inch.',
              'আদর্শ ওজন (IBW) নির্ণয়ের হামউই সূত্র: পুরুষ = প্রথম ৫ ফুটের জন্য ৪৮ কেজি + প্রতি অতিরিক্ত ইঞ্চির জন্য ২.৭ কেজি। নারী = প্রথম ৫ ফুটের জন্য ৪৫.৫ কেজি + প্রতি অতিরিক্ত ইঞ্চির জন্য ২.৩ কেজি।',
            ),
            l(
              'Clinical Outcomes: Randomized clinical trials confirm that hypocaloric high-protein feeding in obese ICU patients significantly shortens duration of mechanical ventilation, reduces intensive care length of stay, and prevents glycemic volatility.',
              'ক্লিনিক্যাল ফলাফল: আন্তর্জাতিক গবেষণায় প্রমাণিত হয়েছে যে এই নিয়মে আইসিইউতে চিকিৎসা দিলে রোগীর ভেন্টিলেটর থেকে দ্রুত মুক্তি মেলে, হাসপাতালে থাকার দিন কমে এবং রক্তের গ্লুকোজ নিয়ন্ত্রণে থাকে।',
            ),
            l(
              'Electrolyte Monitoring Protocol: Due to high amino acid turnover and endogenous lipolysis, strict daily monitoring of serum potassium, phosphate, magnesium, and blood urea nitrogen is mandatory.',
              'খনিজ লবণ পর্যবেক্ষণের নিয়ম: উচ্চ প্রোটিন এবং চর্বি ভাঙনের কারণে প্রতিদিন রক্তে পটাসিয়াম, ফসফেট, ম্যাগনেসিয়াম ও ইউরিয়ার মাত্রা পরীক্ষা করা বাধ্যতামূলক।',
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. How Many Calories Does a Person Need?', '১. বেঁচে থাকার জন্য কত ক্যালোরি প্রয়োজন?'), sectionId: 'sec-calories-intro' },
      { id: 'toc-2', label: l('2. The Mifflin-St Jeor Yardstick', '২. মিফলিন-সেন্ট জিওর সমীকরণ'), sectionId: 'sec-mifflin-simple' },
      { id: 'toc-3', label: l('3. Danger of Overfeeding Hospitalized Patients', '৩. হাসপাতালে রোগীকে অতিরিক্ত খাওয়ানোর বিপদ'), sectionId: 'sec-danger-overfeeding' },
      { id: 'toc-4', label: l('4. Algorithmic Energy Formulation & Harris-Benedict', '৪. গাণিতিক সূত্র ও হ্যারিস-বেনেডিক্ট তুলনা'), sectionId: 'sec-mifflin-mechanics' },
      { id: 'toc-5', label: l('5. Penn State Mechanical Ventilation Algorithms', '৫. ভেন্টিলেটরের জন্য পেন স্টেট সমীকরণ'), sectionId: 'sec-penn-state-icu' },
      { id: 'toc-6', label: l('6. Indirect Calorimetry, Weir Formula & RQ', '৬. ইনডাইরেক্ট ক্যালোরিমেট্রি ও রেসপিরেটরি কোশেন্ট'), sectionId: 'sec-calorimetry-rq' },
      { id: 'toc-7', label: l('7. High-Protein Hypocaloric ICU Regimens', '৭. আইসিইউতে হাইপোক্যালোরিক উচ্চ-প্রোটিন পুষ্টি'), sectionId: 'sec-obesity-icu-hypocaloric' },
    ],
    terms: [
      {
        term: l('Mifflin-St Jeor Equation', 'মিফলিন-সেন্ট জিওর সমীকরণ'),
        definition: l(
          'The validated predictive clinical equation estimating Resting Metabolic Rate (RMR) based on actual weight, height, age, and sex in non-critically ill adults.',
          'সাধারণ প্রাপ্তবয়স্কদের ক্ষেত্রে প্রকৃত ওজন, উচ্চতা, বয়স ও লিঙ্গের ভিত্তিতে বিশ্রামকালীন শক্তি খরচ (RMR) নির্ণয়ের আন্তর্জাতিক মানসম্মত সূত্র।'
        ),
      },
      {
        term: l('Penn State Equation', 'পেন স্টেট সমীকরণ (Penn State)'),
        definition: l(
          'A validated critical care predictive equation calculating resting energy expenditure in mechanically ventilated ICU patients using minute ventilation and temperature.',
          'ভেন্টিলেটরে থাকা আইসিইউ রোগীদের শ্বাস-প্রশ্বাসের ভেন্টিলেশন ও তাপমাত্রার ওপর ভিত্তি করে শক্তি খরচ নির্ণয়ের বিশেষ সমীকরণ।'
        ),
      },
      {
        term: l('Respiratory Quotient (RQ)', 'রেসপিরেটরি কোশেন্ট (RQ)'),
        definition: l(
          'The volumetric ratio of carbon dioxide produced to oxygen consumed (VCO2 / VO2), reflecting cellular fuel substrate oxidation and warning of overfeeding when > 1.00.',
          'উৎপন্ন কার্বন ডাই-অক্সাইড এবং ব্যবহৃত অক্সিজেনের অনুপাত (VCO2 / VO2), যা কোষে কোন খাদ্য পুড়ছে তা নির্দেশ করে এবং ১.০০-এর বেশি হলে অতিরিক্ত খাবার প্রমাণ করে।'
        ),
      },
      {
        term: l('Weir Equation', 'উইয়ার সমীকরণ (Weir Equation)'),
        definition: l(
          'The fundamental calorimetric equation converting measured oxygen consumption (VO2) and carbon dioxide production (VCO2) volumes into total resting energy expenditure (kcal/day).',
          'অক্সিজেন গ্রহণ ও কার্বন ডাই-অক্সাইড ত্যাগের পরিমাণকে সরাসরি মোট ক্যালোরিতে রূপান্তরের বৈজ্ঞানিক সমীকরণ।'
        ),
      },
      {
        term: l('Hypercaloric Overfeeding', 'হাইপারক্যালোরিক ওভারফিডিং (Overfeeding)'),
        definition: l(
          'The administration of energy exceeding metabolic expenditure, resulting in hyperglycemia, hepatic steatosis, azotemia, and excessive CO2 retention.',
          'প্রয়োজনের বেশি ক্যালোরি খাওয়ানোর মারাত্মক অবস্থা, যার ফলে রক্তে চিনি বৃদ্ধি, লিভারে বিষাক্ত চর্বি জমা এবং ফুসফুসে কার্বন ডাই-অক্সাইড জমে শ্বাসকষ্ট তৈরি হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Formulating Energy Needs for a Septic Mechanically Ventilated Patient with Class II Obesity',
          'বাস্তব কেস স্টাডি: সেপসিস ও ক্লাস ২ স্থূলতায় ভেন্টিলেটরে থাকা রোগীর ক্যালোরি নির্ধারণ'
        ),
        steps: [
          l(
            'Step 1: Patient Parameters & Clinical Presentation. A 64-year-old male with severe community-acquired pneumonia progressing to septic shock is intubated in the ICU. Height = 172 cm (68 inches), Actual Weight = 105 kg (BMI = 35.5 kg/m², Class II obesity). Ideal Body Weight (Hamwi) = 48 + 2.7 × 8 = 69.6 kg. Mechanical ventilator settings: Exhaled minute ventilation (VE) = 9.2 L/min, Maximum 24-hr core body temperature (Tmax) = 38.8°C.',
            'ধাপ ১: রোগীর তথ্য: নিউমোনিয়া ও সেপসিসে আক্রান্ত ৬৪ বছর বয়সী ভেন্টিলেটরের পুরুষ রোগী। উচ্চতা ১৭২ সেমি, প্রকৃত ওজন ১০৫ কেজি (বিএমআই ৩৫.৫ kg/m², স্থূলতা)। আদর্শ ওজন (IBW) = ৪৮ + ২.৭ × ৮ = ৬৯.৬ কেজি। ভেন্টিলেটরে মিনিট ভেন্টিলেশন ৯.২ লিটার/মিনিট এবং সর্বোচ্চ তাপমাত্রা ৩৮.৮°C।'
          ),
          l(
            'Step 2: Calculate Baseline Mifflin-St Jeor. Using actual weight: Mifflin = 10(105) + 6.25(172) - 5(64) + 5 = 1,050 + 1,075 - 320 + 5 = 1,810 kcal/day.',
            'ধাপ ২: বেসলাইন মিফলিন মান হিসাব: প্রকৃত ওজনে হিসাব: মিফলিন = ১০(১০৫) + ৬.২৫(১৭২) - ৫(৬৪) + ৫ = ১০৫০ + ১০৭৫ - ৩২০ + ৫ = ১৮১০ kcal/দিন।'
          ),
          l(
            'Step 3: Calculate Penn State 2010 (Obese, Age ≥ 60). PSU 2010 = Mifflin(0.71) + VE(64) + Tmax(85) - 3085 = 1810(0.71) + 9.2(64) + 38.8(85) - 3085 = 1,285.1 + 588.8 + 3,298 - 3,085 = 2,086.9 kcal/day (measured REE ~ 2,090 kcal/day).',
            'ধাপ ৩: পেন স্টেট ২০১০ সূত্রে হিসাব: PSU 2010 = ১৮১০(০.৭১) + ৯.২(৬৪) + ৩৮.৮(৮৫) - ৩০৮৫ = ১২৮৫.১ + ৫৮৮.৮ + ৩২৯৮ - ৩০৮৫ = ২০৮৭ kcal/দিন।'
          ),
          l(
            'Step 4: Formulate ASPEN Guideline Hypocaloric Target for Class II Obesity. Target via actual weight: 11 to 14 kcal/kg actual weight = 11 × 105 to 14 × 105 = 1,155 to 1,470 kcal/day. Target via IBW: 22 to 25 kcal/kg IBW = 22 × 69.6 to 25 × 69.6 = 1,530 to 1,740 kcal/day. Target protein: 2.0 g/kg IBW/day = 2.0 × 69.6 = 139 g protein/day.',
            'ধাপ ৪: আন্তর্জাতিক নির্দেশিকা অনুযায়ী হাইপোক্যালোরিক লক্ষ্য নির্ধারণ: প্রকৃত ওজনের প্রতি কেজিতে ১১-১৪ kcal = ১১৫৫ থেকে ১৪৭০ kcal/দিন। অথবা আদর্শ ওজনে ২২-২৫ kcal = ১৫৩০ থেকে ১৭৪০ kcal/দিন। প্রোটিনের লক্ষ্যমাত্রা: ২.০ গ্রাম/কেজি IBW = ১৩৯ গ্রাম প্রোটিন/দিন।'
          ),
          l(
            'Step 5: Clinical Prescription & Tube Feeding Formulation. The dietitian initiates a specialized very-high-protein, low-carbohydrate enteral formula delivering 1,400 kcal/day (hypocaloric, ~67% of PSU 2010) and 140 g protein/day. This shields the patient from hypercaloric overfeeding, reduces metabolic CO2 burden to facilitate ventilator weaning, and halts somatic muscle proteolysis.',
            'ধাপ ৫: চূড়ান্ত প্রেসক্রিপশন: পুষ্টিবিদ দিনে ১৪০০ ক্যালোরি (নিয়ন্ত্রিত হাইপোক্যালোরিক) এবং ১৪০ গ্রাম উচ্চ-প্রোটিন সমৃদ্ধ টিউব ফিডিং শুরু করেন। এটি কার্বন ডাই-অক্সাইড উৎপাদন কমিয়ে রোগীকে দ্রুত ভেন্টিলেটর মুক্ত করতে সাহায্য করে এবং পেশি ক্ষয় সফলভাবে রোধ করে।'
          ),
        ],
        conclusion: l(
          'Deploying the Penn State equation and ASPEN hypocaloric obesity guidelines protected the patient from hypercapnic respiratory failure and glycemic spikes while providing 140 g of protein to sustain lean somatic tissue.',
          'পেন স্টেট সমীকরণ এবং হাইপোক্যালোরিক নির্দেশিকা প্রয়োগের মাধ্যমে অতিরিক্ত কার্বন ডাই-অক্সাইডের শ্বাসকষ্ট ও অনিয়ন্ত্রিত ডায়াবেটিস প্রতিরোধ করা সম্ভব হয় এবং ১৪০ গ্রাম প্রোটিন নিশ্চিত করে পেশি ক্ষয় সফলভাবে ঠেকানো হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does stacking separate activity and injury stress factors onto the Mifflin equation often lead to harmful outcomes in hospitalized patients?',
          'হাসপাতালের রোগীর ক্ষেত্রে মিফলিন সূত্রের ওপর একাধিক অ্যাক্টিভিটি ও স্ট্রেস গুণক একটার ওপর একটা গুণ করলে কেন রোগীর ক্ষতি হয়?'
        ),
        answer: l(
          'Historically, clinicians multiplied RMR by an Activity Factor (1.3) AND an Injury Factor (1.5), compounding the numbers exponentially and prescribing 3,000+ kcal/day to bedridden patients. Modern evidence shows that hospitalized patients are mostly immobilized, and severe trauma dampens rather than doubles actual energy utilization due to mitochondrial stunning. Stacking multipliers causes severe hypercaloric overfeeding, hepatic steatosis, glycemic volatility, and ventilator weaning failure.',
          'অতীতে চিকিৎসকরা RMR-এর সাথে অ্যাক্টিভিটি ফ্যাক্টর (১.৩) এবং স্ট্রেস ফ্যাক্টর (১.৫) একটার পর একটা গুণ করে রোগীর চাহিদা ৩০০০ ক্যালোরির ওপরে তুলে দিতেন। কিন্তু হাসপাতালের রোগীরা বিছানায় শুয়ে থাকেন এবং অতিরিক্ত ক্যালোরি লিভারে বিষাক্ত চর্বি জমায় ও রক্তে অ্যাসিড বাড়িয়ে রোগীকে মৃত্যুর মুখে ঠেলে দেয়।'
        ),
      },
      {
        question: l(
          'What cellular metabolic phenomenon is occurring if indirect calorimetry reveals a Respiratory Quotient (RQ) of 1.15 in an ICU patient?',
          'আইসিইউতে কোনো রোগীর ইনডাইরেক্ট ক্যালোরিমেট্রিতে রেসপিরেটরি কোশেন্ট (RQ) ১.১৫ পাওয়া গেলে শরীরের ভেতরে কোন মেটাবলিক প্রক্রিয়া ঘটছে?'
        ),
        answer: l(
          'An RQ greater than 1.00 indicates net de novo lipogenesis driven by excessive carbohydrate overfeeding. The liver is synthesizing fatty acids from surplus glucose, a biochemical pathway that generates massive excess volumes of carbon dioxide (VCO2), precipitating severe respiratory acidosis and preventing extubation from mechanical ventilation.',
          'RQ ১.০০-এর বেশি হওয়ার অর্থ হলো রোগী প্রয়োজনের চেয়ে অনেক বেশি খাবার বা কার্বোহাইড্রেট পাচ্ছে যার ফলে অতিরিক্ত গ্লুকোজ থেকে যকৃতে চর্বি তৈরি (Lipogenesis) হচ্ছে। এই প্রক্রিয়ায় প্রচুর কার্বন ডাই-অক্সাইড গ্যাস তৈরি হয় যা রক্তে অ্যাসিড বাড়িয়ে দেয় এবং রোগীকে ভেন্টিলেটর থেকে বের করা অসম্ভব করে তোলে।'
        ),
      },
    ],
  },
}
