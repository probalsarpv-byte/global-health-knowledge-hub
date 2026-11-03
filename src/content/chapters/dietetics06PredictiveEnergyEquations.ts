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
    'Clinical formulation of human energy expenditure: mastering the validated Mifflin-St Jeor equation for ambulatory adults, applying Penn State predictive algorithms in mechanically ventilated critical care, determining activity and stress coefficients, and understanding indirect calorimetry and respiratory quotient (RQ) kinetics.',
    'মানুষের দৈনন্দিন শক্তি খরচের ক্লিনিক্যাল হিসাব: সাধারণ প্রাপ্তবয়স্কদের জন্য মিফলিন-সেন্ট জিওর সমীকরণ প্রয়োগ, আইসিইউতে ভেন্টিলেটরে থাকা রোগীদের জন্য পেন স্টেট সমীকরণ, শারীরিক কার্যকলাপ ও স্ট্রেস ফ্যাক্টরের সঠিক ব্যবহার এবং ইনডাইরেক্ট ক্যালোরিমেট্রি ও রেসপিরেটরি কোশেন্ট (RQ) বিশ্লেষণ।'
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
      'Calculate Resting Metabolic Rate (RMR) with precision using the validated Mifflin-St Jeor equation across both normal weight and obese adults.',
      'স্বাভাবিক ওজন ও স্থূল রোগীদের ক্ষেত্রে মিফলিন-সেন্ট জিওর সমীকরণ নির্ভুলভাবে প্রয়োগ করে বিশ্রামকালীন শক্তি খরচ (RMR) নির্ণয় করা।'
    ),
    l(
      'Deploy the Penn State (PSU 2003b and PSU 2010) equations for mechanically ventilated ICU patients incorporating minute ventilation and peak body temperature.',
      'আইসিইউতে ভেন্টিলেটরে থাকা রোগীদের জন্য মিনিট ভেন্টিলেশন ও সর্বোচ্চ তাপমাত্রার ভিত্তিতে পেন স্টেট সমীকরণ (PSU 2003b ও 2010) প্রয়োগ করা।'
    ),
    l(
      'Select evidence-based Activity Factors (AF) and Injury/Stress Factors (IF) while avoiding the clinical catastrophe of hypercaloric overfeeding.',
      'অতিরিক্ত ক্যালোরি খাওয়ানোর (Overfeeding) জটিলতা এড়িয়ে প্রমাণভিত্তিক অ্যাক্টিভিটি ফ্যাক্টর ও ইনজুরি/স্ট্রেস ফ্যাক্টর নির্ধারণ করা।'
    ),
    l(
      'Interpret indirect calorimetry data via the Weir equation and evaluate substrate oxidation profiles using the Respiratory Quotient (RQ).',
      'উইয়ার সমীকরণের মাধ্যমে ইনডাইরেক্ট ক্যালোরিমেট্রির উপাত্ত এবং রেসপিরেটরি কোশেন্ট (RQ) দেখে কার্বোহাইড্রেট ও ফ্যাটের জারণ অবস্থা বিশ্লেষণ করা।'
    ),
    l(
      'Formulate hypocaloric, high-protein feeding regimens (11–14 kcal/kg actual weight or 22–25 kcal/kg IBW) for critically ill patients with severe obesity.',
      'স্থূল আইসিইউ রোগীদের মেটাবলিক জটিলতা প্রতিরোধে হাইপোক্যালোরিক উচ্চ-প্রোটিন পুষ্টি প্রেসক্রিপশন প্রণয়ন করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'An architectural diagram of Total Energy Expenditure (TEE) components and predictive pathways: Resting Metabolic Rate (RMR, 60–75%) calculated via Mifflin-St Jeor or Penn State forms the foundation; Thermic Effect of Food (TEF, 10%) and Physical Activity (PAL, 15–30%) are layered conditionally; for critically ill patients, indirect calorimetry measures true VO2 and VCO2 to generate precise REE via the Weir equation.',
      'মোট শক্তি খরচের (TEE) বিভিন্ন অংশের স্থাপত্য চিত্র: ভিত্তি হলো বিশ্রামকালীন মেটাবলিজম (RMR, ৬০-৭৫%) যা মিফলিন বা পেন স্টেট সূত্রে নির্ণীত হয়; এর ওপর খাবার হজমের শক্তি (TEF, ১০%) এবং শারীরিক কার্যকলাপ (PAL, ১৫-৩০%) যোগ হয়; আর সংকটাপন্ন রোগীর ক্ষেত্রে ক্যালোরিমেট্রি দিয়ে অক্সিজেন ও কার্বন ডাই-অক্সাইড মেপে প্রকৃত REE বের করা হয়।'
    ),
    steps: [
      l(
        'Step 1: Baseline RMR Calculation. For ambulatory patients, calculate baseline Resting Metabolic Rate using the validated Mifflin-St Jeor equation based on actual weight, height, age, and sex.',
        'ধাপ ১: বেসলাইন RMR হিসাব: সাধারণ রোগীর ক্ষেত্রে লিঙ্গ, বয়স, প্রকৃত ওজন ও উচ্চতার ভিত্তিতে মিফলিন-সেন্ট জিওর সমীকরণ প্রয়োগ করে বিশ্রামকালীন মেটাবলিক রেট বের করুন।'
      ),
      l(
        'Step 2: ICU Ventilator Adaptation. For critically ill ventilated patients, apply Penn State equations integrating minute ventilation ($V_E$) and maximum body temperature ($T_{\\max}$).',
        'ধাপ ২: ভেন্টিলেটরের রোগীদের হিসাব: আইসিইউতে ভেন্টিলেটরে থাকা রোগীর জন্য মিনিট ভেন্টিলেশন ($V_E$) ও শরীরের সর্বোচ্চ তাপমাত্রা ($T_{\\max}$) যোগ করে পেন স্টেট সূত্রে ক্যালোরি হিসাব করুন।'
      ),
      l(
        'Step 3: Factor Titration. Apply appropriate Physical Activity Factors (1.2–1.5) and cautious Stress Factors (1.1–1.3 for sepsis/surgery), guarding strictly against stacking compounding multipliers.',
        'ধাপ ৩: ফ্যাক্টরের সমন্বয়: রোগীর অবস্থা অনুযায়ী সতর্কতার সাথে শারীরিক পরিশ্রম (১.২-১.৫) এবং সংক্রমণ/অপারেশনের স্ট্রেস ফ্যাক্টর (১.১-১.৩) গুণ করুন, যাতে একাধিক ফ্যাক্টর যোগ হয়ে ক্যালোরি মাত্রাতিরিক্ত না হয়।'
      ),
      l(
        'Step 4: Calorimetric Validation. If available, measure Respiratory Quotient ($RQ = \\dot{V}\\text{CO}_2 / \\dot{V}\\text{O}_2$) via indirect calorimetry: an $RQ > 1.0$ warns of dangerous lipogenesis and overfeeding.',
        'ধাপ ৪: ক্যালোরিমেট্রিক মূল্যায়ন: সম্ভব হলে ইনডাইরেক্ট ক্যালোরিমেট্রির মাধ্যমে RQ দেখুন: $RQ > ১.০$ হলে রোগী অতিরিক্ত ক্যালোরি পেয়ে ফ্যাট তৈরি করছে বলে প্রমাণিত হয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 52-year-old mechanically ventilated female with ARDS and septic shock has the following parameters: Height = 165 cm, Weight = 110 kg (BMI = 40.4 kg/m², Class III obesity), Ideal Body Weight (IBW) = 56.5 kg. She is intubated in the ICU with a minute ventilation ($V_E$) of 11.5 L/min and maximum body temperature ($T_{\\max}$) of 38.6°C. According to ASPEN/SCCM critical care guidelines, what is the recommended energy prescribing strategy for this patient?',
      'তীব্র শ্বাসকষ্ট (ARDS) ও সেপটিক শকে আক্রান্ত ৫২ বছর বয়সী এক নারী ভেন্টিলেটরে আছেন: উচ্চতা ১৬৫ সেমি, প্রকৃত ওজন ১১০ কেজি (বিএমআই ৪০.৪ kg/m², চরম স্থূলতা), আদর্শ ওজন (IBW) ৫৬.৫ কেজি। ভেন্টিলেটরে তার মিনিট ভেন্টিলেশন ১১.৫ L/মিনিট এবং তাপমাত্রা ৩৮.৬°C। ASPEN/SCCM আইসিইউ নির্দেশিকা অনুযায়ী এই রোগীর জন্য কোন এনার্জি প্রেসক্রিপশন সবচেয়ে বিজ্ঞানসম্মত?'
    ),
    options: [
      l(
        'Prescribe full predictive energy using actual weight multiplied by heavy stress factors: $110\\text{ kg} \\times 35\\text{ kcal/kg} = 3,850\\text{ kcal/day}$.',
        'প্রকৃত ওজনের সাথে অতিরিক্ত স্ট্রেস ফ্যাক্টর গুণ করে পুরো ক্যালোরি দেওয়া: $১১০\text{ কেজি} \times ৩৫\text{ kcal/কেজি} = ৩৮৫০\text{ kcal/দিন}$।'
      ),
      l(
        'Prescribe a hypocaloric, high-protein regimen delivering 11–14 kcal/kg actual weight (1,210–1,540 kcal/day) or 22–25 kcal/kg IBW (1,240–1,410 kcal/day) while providing 2.0–2.5 g protein/kg IBW.',
        'একটি নিয়ন্ত্রিত হাইপোক্যালোরিক, উচ্চ-প্রোটিন খাদ্য প্রদান করা যা প্রকৃত ওজনের ভিত্তিতে ১১-১৪ kcal/কেজি (১২১০-১৫৪০ kcal/দিন) অথবা আদর্শ ওজনে ২২-২৫ kcal/কেজি (১২৪০-১৪১০ kcal/দিন) ক্যালোরি এবং ২.০-২.৫ গ্রাম প্রোটিন/কেজি IBW সরবরাহ করে।'
      ),
      l(
        'Provide no nutrition for the first 14 days of ICU admission to encourage endogenous lipolysis and weight reduction.',
        'চর্বি গলিয়ে ওজন কমাতে আইসিইউ ভর্তির প্রথম ১৪ দিন রোগীকে কোনো খাবার বা পুষ্টি না দেওয়া।'
      ),
      l(
        'Feed 50 kcal/kg IBW to compensate for the extreme thermic cost of ARDS lung work.',
        'ফুসফুসের অতিরিক্ত কাজের ঘাটতি মেটাতে আদর্শ ওজনের প্রতি কেজিতে ৫০ কিলোক্যালোরি প্রদান করা।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'In critically ill patients with class III obesity (BMI >= 40), the ASPEN/SCCM and ESPEN guidelines strongly recommend a hypocaloric, high-protein feeding strategy: 11–14 kcal/kg actual weight/day (or 22–25 kcal/kg IBW/day) paired with 2.0–2.5 g protein/kg IBW/day. Full caloric feeding using actual weight causes severe hypercaloric overfeeding, triggering hyperglycemia, hepatic steatosis, and excessive CO2 production that prevents weaning from the mechanical ventilator.',
      'চরম স্থূলতায় (বিএমআই >= ৪০) আক্রান্ত সংকটাপন্ন রোগীদের ক্ষেত্রে আন্তর্জাতিক ASPEN/SCCM নির্দেশিকা স্পষ্টভাবে হাইপোক্যালোরিক উচ্চ-প্রোটিন ডায়েট সুপারিশ করে: প্রকৃত ওজনের প্রতি কেজিতে ১১-১৪ kcal (বা আদর্শ ওজনে ২২-২৫ kcal) এবং ২.০-২.৫ গ্রাম প্রোটিন/কেজি IBW। প্রকৃত ওজন দিয়ে বেশি ক্যালোরি দিলে মারাত্মক "ওভারফিডিং" হয়, রক্তে চিনি বেড়ে যায়, লিভারে চর্বি জমে এবং ফুসফুসে অতিরিক্ত কার্বন ডাই-অক্সাইড তৈরি হয়ে ভেন্টিলেটর থেকে রোগীকে বের করা অসম্ভব হয়ে পড়ে।'
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
          heading: l('1. How Many Calories Does a Person Actually Need?', '১. একজন মানুষের আসলে কত ক্যালোরি শক্তির প্রয়োজন?'),
          paragraphs: [
            l(
              'Every human being requires energy to sustain life. The total calories you burn each day is called your **Total Energy Expenditure (TEE)** [1]. TEE is divided into three major buckets:',
              'বেঁচে থাকার জন্য প্রতিটি মানুষের শক্তির প্রয়োজন। প্রতিদিন আমাদের শরীর যে মোট শক্তি বা ক্যালোরি খরচ করে তাকে **টোটাল এনার্জি এক্সপেন্ডিচার (TEE)** বলা হয় [1]। এই মোট শক্তি খরচ মূলত তিনটি প্রধান ভাগে বিভক্ত:'
            ),
            l(
              '1. **Resting Metabolic Rate (RMR, 60–75%):** The energy burned merely staying alive while resting in bed (powering your heart, breathing, brain, and liver cells).\n2. **Thermic Effect of Food (TEF, ~10%):** The calories burned digesting, absorbing, and metabolizing the food you eat.\n3. **Physical Activity (15–30%):** The energy burned moving, walking, exercising, or performing physical labor.',
              '১. **রেস্টিং মেটাবলিক রেট (RMR, ৬০-৭৫%):** বিছানায় সম্পূর্ণ শান্ত হয়ে শুয়ে থাকলেও বেঁচে থাকার জন্য হৃদপিণ্ড, ফুসফুস, মস্তিষ্ক ও যকৃতের কোষ যে শক্তি খরচ করে।\n২. **থার্মিক ইফেক্ট অব ফুড (TEF, ~১০%):** খাবার চিবানো, হজম করা ও কোষে পৌঁছাতে যে শক্তি খরচ হয়।\n৩. **শারীরিক কার্যকলাপ (১৫-৩০%):** হাঁটাচলা, কাজ করা বা ব্যায়াম করার মাধ্যমে ব্যয়িত শক্তি।'
            ),
          ],
        },
        {
          id: 'sec-mifflin-simple',
          heading: l('2. The Mifflin-St Jeor Formula', '২. মিফলিন-সেন্ট জিওর সমীকরণ'),
          paragraphs: [
            l(
              'To estimate a person’s resting metabolic rate without expensive laboratory machines, clinical dietitians use the scientifically validated **Mifflin-St Jeor equation** [1]:',
              'ল্যাবরেটরির দামি যন্ত্রপাতি ছাড়া সাধারণ মানুষের বিশ্রামকালীন শক্তি খরচ নিখুঁতভাবে মাপার জন্য পুষ্টিবিদরা আন্তর্জাতিকভাবে স্বীকৃত **মিফলিন-সেন্ট জিওর সমীকরণ** ব্যবহার করেন [1]:'
            ),
            l(
              '$$\\text{Men: } \\text{RMR} = 10 \\times \\text{Weight (kg)} + 6.25 \\times \\text{Height (cm)} - 5 \\times \\text{Age (yr)} + 5$$\n$$\\text{Women: } \\text{RMR} = 10 \\times \\text{Weight (kg)} + 6.25 \\times \\text{Height (cm)} - 5 \\times \\text{Age (yr)} - 161$$',
              '$$\\text{পুরুষ: } \\text{RMR} = ১০ \\times \\text{ওজন (কেজি)} + ৬.২৫ \\times \\text{উচ্চতা (সেমি)} - ৫ \\times \\text{বয়স (বছর)} + ৫$$\n$$\\text{নারী: } \\text{RMR} = ১০ \\times \\text{ওজন (কেজি)} + ৬.২৫ \\times \\text{উচ্চতা (সেমি)} - ৫ \\times \\text{বয়স (বছর)} - ১৬১$$'
            ),
            l(
              'Once RMR is calculated, we multiply it by an **Activity Factor** (e.g., $1.2$ for someone resting in bed, or $1.4$ for a lightly active worker) to find their target daily calories [1].',
              'একবার RMR বের করার পর, দৈনন্দিন কাজের মাত্রার ওপর ভিত্তি করে একটি **অ্যাক্টিভিটি ফ্যাক্টর** (যেমন বিছানায় শুয়ে থাকা রোগীর জন্য ১.২, বা হালকা পরিশ্রমী মানুষের জন্য ১.৪) দিয়ে গুণ করলেই প্রতিদিনের কাঙ্ক্ষিত ক্যালোরি পাওয়া যায় [1]।'
            ),
          ],
        },
        {
          id: 'sec-danger-overfeeding',
          heading: l('3. The Danger of Overfeeding Sick Patients', '৩. অসুস্থ রোগীকে অতিরিক্ত ক্যালোরি খাওয়ানোর মারাত্মক বিপদ'),
          paragraphs: [
            l(
              'A common mistake among family members and untrained staff is the belief that "the sicker the patient, the more food they must be forced to eat" [3]. In critically ill hospital patients, force-feeding excess calories is dangerous. It overwhelms the liver, skyrockets blood sugar, and floods the lungs with carbon dioxide, making it difficult for the patient to breathe.',
              'রোগীর স্বজন এবং অনভিজ্ঞদের মধ্যে একটি ভুল ধারণা থাকে যে "রোগী যত বেশি অসুস্থ, তাকে তত বেশি বেশি খাবার খাওয়াতে হবে" [3]। কিন্তু হাসপাতালে ভর্তি সংকটাপন্ন রোগীর ক্ষেত্রে অতিরিক্ত ক্যালোরি দেওয়া চরম বিপজ্জনক। এটি লিভারে চর্বি জমায়, রক্তে চিনি মারাত্মক বাড়িয়ে দেয় এবং ফুসফুসে অতিরিক্ত কার্বন ডাই-অক্সাইড তৈরি করে শ্বাসকষ্টের সৃষ্টি করে।'
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
          heading: l('1. Algorithmic Predictive Formulation: Mifflin-St Jeor Validation', '১. শক্তি খরচের গাণিতিক সূত্র: মিফলিন-সেন্ট জিওর কার্যকারিতা'),
          paragraphs: [
            l(
              'Systematic reviews conducted by the Academy of Nutrition and Dietetics have established that the **Mifflin-St Jeor equation** is the most accurate predictive formula for non-critically ill adults, predicting RMR within 10% of measured indirect calorimetry in up to 82% of non-obese and 70% of obese individuals [1].',
              'আন্তর্জাতিক গবেষণায় প্রমাণিত হয়েছে যে সাধারণ অসুস্থ বা সুস্থ প্রাপ্তবয়স্কদের ক্ষেত্রে **মিফলিন-সেন্ট জিওর সমীকরণ** সবচেয়ে বেশি নির্ভুল। এটি ইনডাইরেক্ট ক্যালোরিমেট্রির প্রকৃত মানের সাথে শতকরা ৮২ ভাগ ক্ষেত্রে মিলে যায় [1]।'
            ),
            l(
              'In contrast, the historical **Harris-Benedict equation** (formulated in 1919) routinely overestimates resting metabolic rate by 5% to 15% in modern populations due to secular changes in body composition and reduced physical occupational demands [1]. Prescribing energy using unadjusted Harris-Benedict formulas frequently induces unintended positive energy balance.',
              'বিপরীতে, ১৯১৯ সালে আবিষ্কৃত পুরোনো **হ্যারিস-বেনেডিক্ট সমীকরণ** বর্তমান যুগের মানুষের ক্ষেত্রে শক্তি খরচ প্রায় ৫% থেকে ১৫% অতিরিক্ত দেখায়, কারণ মানুষের শারীরিক গঠন ও পেশীবহুল কায়িক শ্রমে পরিবর্তন এসেছে [1]। তাই পুরোনো সমীকরণ ব্যবহার করলে রোগীকে প্রয়োজনের অতিরিক্ত খাবার দিয়ে ফেলার ঝুঁকি থাকে।'
            ),
          ],
        },
        {
          id: 'sec-penn-state-icu',
          heading: l('2. Critical Care Energetics: The Penn State Equations for Mechanical Ventilation', '২. আইসিইউতে ক্রিটিক্যাল কেয়ার: ভেন্টিলেটরের জন্য পেন স্টেট সমীকরণ'),
          paragraphs: [
            l(
              'In mechanically ventilated intensive care patients, static equations fail because metabolic rate fluctuates wildly with ventilator work, sedation, neuromuscular blockade, and inflammatory pyrexia [2, 3]. The **Penn State predictive equations** mathematically integrate real-time pulmonary and thermal parameters:',
              'ভেন্টিলেটরে থাকা আইসিইউ রোগীদের ক্ষেত্রে সাধারণ সমীকরণ কাজ করে না, কারণ ভেন্টিলেটরের কাজ, ব্যথানাশক ওষুধ এবং জ্বরের কারণে শক্তি খরচ প্রতিনিয়ত ওঠানামা করে [2, 3]। তাই বিজ্ঞানসম্মত **পেন স্টেট সমীকরণ** ফুসফুসের কার্যকারিতা ও শরীরের তাপমাত্রাকে সরাসরি অন্তর্ভুক্ত করে:'
            ),
            l(
              '$$\\textbf{PSU 2003b (Non-obese or BMI < 30):} \\quad \\text{RMR (kcal/d)} = \\text{Mifflin}(0.96) + V_E(31) + T_{\\max}(167) - 6212$$\n$$\\textbf{PSU 2010 (Obese, BMI } \\ge 30, \\text{ age } \\ge 60\\text{):} \\quad \\text{RMR (kcal/d)} = \\text{Mifflin}(0.71) + V_E(64) + T_{\\max}(85) - 3085$$',
              '$$\\textbf{PSU 2003b (স্বাভাবিক বা বিএমআই < ৩০):} \\quad \\text{RMR (kcal/দিন)} = \\text{মিফলিন}(০.৯৬) + V_E(৩১) + T_{\\max}(১৬৭) - ৬২১২$$\n$$\\textbf{PSU 2010 (স্থূল, বিএমআই } \\ge ৩০, \\text{ বয়স } \\ge ৬০\\text{):} \\quad \\text{RMR (kcal/দিন)} = \\text{মিফলিন}(০.৭১) + V_E(৬৪) + T_{\\max}(৮৫) - ৩০৮৫$$'
            ),
            l(
              'Where $V_E$ is the exhaled minute ventilation in liters per minute recorded from the mechanical ventilator, and $T_{\\max}$ is the maximum core body temperature in degrees Celsius over the preceding 24 hours [2].',
              'এখানে $V_E$ হলো ভেন্টিলেটরের ডিসপ্লে থেকে প্রাপ্ত প্রতি মিনিটের নিঃসরিত বাতাসের আয়তন (লিটার/মিনিট), এবং $T_{\\max}$ হলো গত ২৪ ঘণ্টায় রোগীর শরীরের সর্বোচ্চ অভ্যন্তরীণ তাপমাত্রা (সেলসিয়াস) [2]।'
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
          heading: l('1. Indirect Calorimetry, the Weir Equation & Respiratory Quotient Kinetics', '১. ইনডাইরেক্ট ক্যালোরিমেট্রি, উইয়ার সূত্র ও রেসপিরেটরি কোশেন্ট (RQ)'),
          paragraphs: [
            l(
              'Indirect calorimetry represents the gold standard for clinical energy determination [4, 5]. By continuously sampling inspired and expired oxygen ($\\dot{V}\\text{O}_2$) and carbon dioxide ($\\dot{V}\\text{CO}_2$) concentrations, a metabolic cart calculates true Resting Energy Expenditure (REE) via the fundamental **Weir Equation** [4]:',
              'ইনডাইরেক্ট ক্যালোরিমেট্রি হলো রোগীর শক্তি খরচ পরিমাপের আন্তর্জাতিক মানদণ্ড [4, 5]। রোগীর শ্বাস-প্রশ্বাসের অক্সিজেন গ্রহণ ($\\dot{V}\\text{O}_2$) এবং কার্বন ডাই-অক্সাইড ত্যাগ ($\\dot{V}\\text{CO}_2$) মেপে বিখ্যাত **উইয়ার সমীকরণের (Weir Equation)** সাহায্যে প্রকৃত শক্তি খরচ হিসাব করা হয় [4]:'
            ),
            l(
              '$$\\text{REE (kcal/day)} = \\left[ 3.941 \\times \\dot{V}\\text{O}_2\\text{ (mL/min)} + 1.106 \\times \\dot{V}\\text{CO}_2\\text{ (mL/min)} \\right] \\times 1.44$$',
              '$$\\text{REE (kcal/দিন)} = \\left[ ৩.৯৪১ \\times \\dot{V}\\text{O}_2\\text{ (মিলি/মিনিট)} + ১.১০৬ \\times \\dot{V}\\text{CO}_2\\text{ (মিলি/মিনিট)} \\right] \\times ১.৪৪$$'
            ),
            l(
              'Simultaneously, the **Respiratory Quotient ($RQ = \\dot{V}\\text{CO}_2 / \\dot{V}\\text{O}_2$)** provides direct metabolic insight into cellular substrate oxidation [4]:',
              'একই সাথে **রেসপিরেটরি কোশেন্ট ($RQ = \\dot{V}\\text{CO}_2 / \\dot{V}\\text{O}_2$)** কোষে কোন ধরনের খাদ্য উপাদান পুড়ে শক্তি তৈরি হচ্ছে তা প্রকাশ করে [4]:'
            ),
            l(
              '• $RQ = 1.00$: Pure carbohydrate oxidation.\n• $RQ = 0.80$: Mixed protein oxidation.\n• $RQ = 0.70$: Pure fat oxidation (seen in fasting, ketosis, or underfeeding).\n• $RQ > 1.00$: Net lipogenesis and hypercaloric overfeeding. Excess carbohydrate is converted to fatty acids, generating excessive CO2 that precipitates acute hypercapnic respiratory failure and prevents ventilator weaning.',
              '• $RQ = ১.০০$: কেবল কার্বোহাইড্রেট পুড়ে শক্তি তৈরি হচ্ছে।\n• $RQ = ০.৮০$: প্রোটিনের জারণ নির্দেশ করে।\n• $RQ = ০.৭০$: কেবল চর্বি বা ফ্যাট পুড়ছে (অনাহার, কিটোসিস বা কম ক্যালোরিতে দেখা যায়)।\n• $RQ > ১.০০$: মারাত্মক ওভারফিডিং এবং ফ্যাট তৈরির প্রমাণ। অতিরিক্ত কার্বোহাইড্রেট চর্বিতে রূপান্তর হওয়ার সময় ফুসফুসে প্রচুর কার্বন ডাই-অক্সাইড তৈরি হয়, যা রোগীর ভেন্টিলেটর থেকে বের হওয়ার পথে প্রধান বাধা হয়ে দাঁড়ায়।'
            ),
          ],
        },
        {
          id: 'sec-obesity-icu-hypocaloric',
          heading: l('2. High-Protein Hypocaloric Regimens in Severe Obesity ICU Care', '২. স্থূল আইসিইউ রোগীদের ক্ষেত্রে হাইপোক্যালোরিক উচ্চ-প্রোটিন পুষ্টি কৌশল'),
          paragraphs: [
            l(
              'Prescribing energy for critically ill patients with class II and III obesity ($\\text{BMI} \\ge 35\\text{ kg/m}^2$) represents a classic dilemma in clinical dietetics [3, 5]. Calculating energy based on actual weight leads to massive overfeeding because surplus adipose tissue has a very low basal metabolic rate ($4.5\\text{ kcal/kg/day}$ vs $12.0\\text{ kcal/kg/day}$ for skeletal muscle).',
              'চরম স্থূলতায় (বিএমআই $\\ge ৩৫\\text{ kg/m}^2$) আক্রান্ত সংকটাপন্ন রোগীদের ক্ষেত্রে শক্তি নির্ধারণ করা একটি সূক্ষ্ম চ্যালেঞ্জ [3, 5]। রোগীর প্রকৃত ওজন দিয়ে হিসাব করলে বিশাল পরিমাণের অতিরিক্ত খাবার চলে যায়, কারণ শরীরের চর্বি কলার মেটাবলিক চাহিদা পেশির তুলনায় অনেক কম (চর্বিতে দিনে মাত্র ৪.৫ kcal/কেজি বনাম পেশিতে ১২.০ kcal/কেজি)।'
            ),
            l(
              'To preserve lean somatic muscle while mobilizing endogenous adipose reserves without inducing glycemic or respiratory stress, ASPEN and SCCM critical care guidelines recommend a **hypocaloric, high-protein regimen** [3]:',
              'পেশির সুরক্ষা এবং মেটাবলিক জটিলতা ছাড়া শরীরের জমানো চর্বি কাজে লাগানোর জন্য আন্তর্জাতিক ASPEN ও SCCM নির্দেশিকা **হাইপোক্যালোরিক উচ্চ-প্রোটিন খাদ্য** প্রেসক্রাইব করার পরামর্শ দেয় [3]:'
            ),
            l(
              '$$\\begin{aligned} &\\textbf{Energy Target:} \\quad 11\\text{--}14\\text{ kcal/kg actual weight/day} \\quad \\text{OR} \\quad 22\\text{--}25\\text{ kcal/kg IBW/day} \\\\ &\\textbf{Protein Target:} \\quad 2.0\\text{ g/kg IBW/day (BMI 30--39.9)} \\quad \\text{OR} \\quad 2.5\\text{ g/kg IBW/day (BMI } \\ge 40\\text{)} \\end{aligned}$$',
              '$$\\begin{aligned} &\\textbf{ক্যালোরির লক্ষ্যমাত্রা:} \\quad ১১\\text{--}১৪\\text{ kcal/কেজি প্রকৃত ওজন/দিন} \\quad \\text{অথবা} \\quad ২২\\text{--}২৫\\text{ kcal/কেজি আদর্শ ওজন (IBW)/দিন} \\\\ &\\textbf{প্রোটিনের লক্ষ্যমাত্রা:} \\quad ২.০\\text{ গ্রাম/কেজি IBW/দিন (বিএমআই ৩০--৩৯.৯)} \\quad \\text{অথবা} \\quad ২.৫\\text{ গ্রাম/কেজি IBW/দিন (বিএমআই } \\ge ৪০\\text{)} \\end{aligned}$$'
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Mifflin-St Jeor Predictive Formulation', '১. মিফলিন-সেন্ট জিওর সমীকরণ'), sectionId: 'sec-mifflin-mechanics' },
      { id: 'toc-2', label: l('2. Penn State Critical Care Algorithms', '২. আইসিইউর জন্য পেন স্টেট সমীকরণ'), sectionId: 'sec-penn-state-icu' },
      { id: 'toc-3', label: l('3. Indirect Calorimetry & RQ Substrate Kinetics', '৩. ইনডাইরেক্ট ক্যালোরিমেট্রি ও RQ বিশ্লেষণ'), sectionId: 'sec-calorimetry-rq' },
      { id: 'toc-4', label: l('4. High-Protein Hypocaloric Regimens in Obesity', '৪. স্থূলতায় হাইপোক্যালোরিক উচ্চ-প্রোটিন ডায়েট'), sectionId: 'sec-obesity-icu-hypocaloric' },
    ],
    terms: [
      {
        term: l('Mifflin-St Jeor Equation', 'মিফলিন-সেন্ট জিওর সমীকরণ'),
        definition: l(
          'The validated clinical equation estimating Resting Metabolic Rate (RMR) based on actual weight, height, age, and sex in non-critically ill adults.',
          'সাধারণ প্রাপ্তবয়স্কদের ক্ষেত্রে প্রকৃত ওজন, উচ্চতা, বয়স ও লিঙ্গের ভিত্তিতে বিশ্রামকালীন শক্তি খরচ (RMR) নির্ণয়ের আন্তর্জাতিক মানসম্মত সূত্র।'
        ),
      },
      {
        term: l('Penn State Equation', 'পেন স্টেট সমীকরণ (Penn State)'),
        definition: l(
          'A validated critical care predictive equation calculating resting energy expenditure in mechanically ventilated patients using minute ventilation and temperature.',
          'ভেন্টিলেটরে থাকা আইসিইউ রোগীদের শ্বাস-প্রশ্বাসের ভেন্টিলেশন ও তাপমাত্রার ওপর ভিত্তি করে শক্তি খরচ নির্ণয়ের বিশেষ সমীকরণ।'
        ),
      },
      {
        term: l('Respiratory Quotient (RQ)', 'রেসপিরেটরি কোশেন্ট (RQ)'),
        definition: l(
          'The volumetric ratio of CO2 produced to O2 consumed (VCO2 / VO2), reflecting cellular fuel substrate utilization and warning of overfeeding when > 1.0.',
          'উৎপন্ন কার্বন ডাই-অক্সাইড এবং ব্যবহৃত অক্সিজেনের অনুপাত ($VCO_2 / VO_2$), যা কোষে কোন খাদ্য পুড়ছে তা নির্দেশ করে এবং ১.০ এর বেশি হলে অতিরিক্ত খাবার প্রমাণ করে।'
        ),
      },
      {
        term: l('Weir Equation', 'উইয়ার সমীকরণ (Weir Equation)'),
        definition: l(
          'The fundamental calorimetric equation converting measured VO2 and VCO2 volumes into total resting energy expenditure (kcal/day).',
          'অক্সিজেন গ্রহণ ও কার্বন ডাই-অক্সাইড ত্যাগের পরিমাণকে সরাসরি মোট ক্যালোরিতে রূপান্তরের বৈজ্ঞানিক সমীকরণ।'
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
            'Step 1: Patient Parameters. A 64-year-old male with severe pneumonia-induced sepsis is intubated in the ICU. Height = 172 cm (68 inches), Actual Weight = 105 kg (BMI = 35.5 kg/m², Class II obesity). Ideal Body Weight (Hamwi) = $48 + 2.7(8) = 69.6\\text{ kg}$. Ventilator minute ventilation ($V_E$) = 9.2 L/min, $T_{\\max} = 38.8^\\circ\\text{C}$.',
            'ধাপ ১: রোগীর তথ্য: নিউমোনিয়া ও সেপসিসে আক্রান্ত ৬৪ বছর বয়সী ভেন্টিলেটরের পুরুষ রোগী। উচ্চতা ১৭২ সেমি, প্রকৃত ওজন ১০৫ কেজি (বিএমআই ৩৫.৫ kg/m², স্থূলতা)। আদর্শ ওজন (IBW) = ৪৮ + ২.৭(৮) = ৬৯.৬ কেজি। ভেন্টিলেটরে মিনিট ভেন্টিলেশন ৯.২ লিটার/মিনিট এবং সর্বোচ্চ তাপমাত্রা ৩৮.৮°C।'
          ),
          l(
            'Step 2: Calculate Baseline Mifflin-St Jeor. $\\text{Mifflin} = 10(105) + 6.25(172) - 5(64) + 5 = 1050 + 1075 - 320 + 5 = 1,810\\text{ kcal/day}$.',
            'ধাপ ২: বেসলাইন মিফলিন মান হিসাব: $\text{Mifflin} = ১০(১০৫) + ৬.২৫(১৭২) - ৫(৬৪) + ৫ = ১৮১০\text{ kcal/দিন}$।'
          ),
          l(
            'Step 3: Calculate Penn State 2010 (Obese, Age >= 60). $\\text{PSU 2010} = \\text{Mifflin}(0.71) + V_E(64) + T_{\\max}(85) - 3085 = 1810(0.71) + 9.2(64) + 38.8(85) - 3085 = 1285.1 + 588.8 + 3298 - 3085 = 2,086.9\\text{ kcal/day}$.',
            'ধাপ ৩: পেন স্টেট ২০১০ সূত্রে হিসাব: $\text{PSU 2010} = ১৮১০(০.৭১) + ৯.২(৬৪) + ৩৮.৮(৮৫) - ৩০৮৫ = ১২৮৫.১ + ৫৮৮.৮ + ৩২৯৮ - ৩০৮৫ = ২০৮৭\text{ kcal/দিন}$।'
          ),
          l(
            'Step 4: Formulate ASPEN Guideline Hypocaloric Target. Guideline target for BMI 35.5: 11–14 kcal/kg actual weight = $11 \\times 105\\text{ to } 14 \\times 105 = 1,155\\text{ to } 1,470\\text{ kcal/day}$. Or 22–25 kcal/kg IBW = $22 \\times 69.6\\text{ to } 25 \\times 69.6 = 1,530\\text{ to } 1,740\\text{ kcal/day}$. Protein goal: $2.0\\text{ g/kg IBW} = 2.0 \\times 69.6 = 139\\text{ g protein/day}$.',
            'ধাপ ৪: আন্তর্জাতিক নির্দেশিকা অনুযায়ী হাইপোক্যালোরিক লক্ষ্য নির্ধারণ: প্রকৃত ওজনের প্রতি কেজিতে ১১-১৪ kcal = ১১৫৫ থেকে ১৪৭০ kcal/দিন। প্রোটিন লক্ষ্যমাত্রা: ২.০ গ্রাম/কেজি IBW = ১৩৯ গ্রাম প্রোটিন/দিন।'
          ),
          l(
            'Step 5: Clinical Prescribing Synthesis. The team initiates an enteral formula delivering 1,400 kcal/day (hypocaloric) and 140 g protein/day. This prevents hypercaloric overfeeding, reduces ventilator CO2 burden, and supports wound healing.',
            'ধাপ ৫: চূড়ান্ত প্রেসক্রিপশন: পুষ্টি দল দিনে ১৪০০ ক্যালোরি (হাইপোক্যালোরিক) এবং ১৪০ গ্রাম উচ্চ-প্রোটিন সমৃদ্ধ টিউব ফিডিং শুরু করে। এটি কার্বন ডাই-অক্সাইড উৎপাদন কমিয়ে রোগীকে দ্রুত ভেন্টিলেটর মুক্ত করতে সাহায্য করে।'
          ),
        ],
        conclusion: l(
          'Deploying the Penn State equation and ASPEN hypocaloric obesity guidelines protected the patient from hypercapnic respiratory failure and hyperglycemia while providing 140g of protein to halt muscle proteolysis.',
          'পেন স্টেট সমীকরণ এবং হাইপোক্যালোরিক নির্দেশিকা প্রয়োগের মাধ্যমে অতিরিক্ত কার্বন ডাই-অক্সাইডের শ্বাসকষ্ট ও হাইপারগ্লাইসেমিয়া প্রতিরোধ করা হয় এবং ১৪০ গ্রাম প্রোটিন নিশ্চিত করে পেশি ক্ষয় সফলভাবে রোধ করা হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does stacking separate activity and injury stress factors onto the Mifflin equation often lead to harmful outcomes in hospitalized patients?',
          'হাসপাতালের রোগীর ক্ষেত্রে মিফলিন সূত্রের ওপর একাধিক অ্যাক্টিভিটি ও স্ট্রেস ফ্যাক্টর একটার ওপর একটা গুণ করলে কেন রোগীর ক্ষতি হয়?'
        ),
        answer: l(
          'Historically, clinicians multiplied $RMR \\times AF (1.3) \\times IF (1.5)$, compounding the numbers exponentially and prescribing 3,000+ kcal/day. Modern evidence shows that hospitalized patients are mostly bedridden, and severe trauma dampens rather than doubles actual energy utilization due to organ stunning. Stacking multipliers causes severe hypercaloric overfeeding, hepatic steatosis, and ventilator weaning failure.',
          'অতীতে চিকিৎসকরা RMR-এর সাথে অ্যাক্টিভিটি ফ্যাক্টর (১.৩) এবং স্ট্রেস ফ্যাক্টর (১.৫) একটার পর একটা গুণ করে রোগীর চাহিদা ৩০০০ ক্যালোরির ওপরে তুলে দিতেন। কিন্তু হাসপাতালের রোগীরা বিছানায় শুয়ে থাকেন এবং অতিরিক্ত ক্যালোরি লিভারে বিষাক্ত চর্বি জমায় ও ফুসফুসে রক্ত জমাট বেঁধে রোগীকে মৃত্যুর মুখে ঠেলে দেয়।'
        ),
      },
      {
        question: l(
          'What metabolic phenomenon is occurring if indirect calorimetry reveals a Respiratory Quotient (RQ) of 1.15 in an ICU patient?',
          'আইসিইউতে কোনো রোগীর ইনডাইরেক্ট ক্যালোরিমেট্রিতে রেসপিরেটরি কোশেন্ট (RQ) ১.১৫ পাওয়া গেলে শরীরের ভেতরে কোন মেটাবলিক প্রক্রিয়া ঘটছে?'
        ),
        answer: l(
          'An RQ greater than 1.00 indicates net de novo lipogenesis driven by excessive carbohydrate overfeeding. The liver is synthesizing fat from excess glucose, a biochemical pathway that generates massive amounts of CO2, creating respiratory acidosis and preventing extubation from mechanical ventilation.',
          'RQ ১.০০-এর বেশি হওয়ার অর্থ হলো রোগী প্রয়োজনের চেয়ে অনেক বেশি খাবার বা কার্বোহাইড্রেট পাচ্ছে যার ফলে অতিরিক্ত গ্লুকোজ থেকে যকৃতে চর্বি তৈরি (Lipogenesis) হচ্ছে। এই প্রক্রিয়ায় প্রচুর কার্বন ডাই-অক্সাইড গ্যাস তৈরি হয় যা রক্তে অ্যাসিড বাড়িয়ে দেয় এবং রোগীকে ভেন্টিলেটর থেকে বের করা অসম্ভব করে তোলে।'
        ),
      },
    ],
  },
}

