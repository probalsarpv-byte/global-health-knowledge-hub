import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const dieteticsAssessmentRefs = [
  {
    id: 'jensen-glim-malnutrition-2019',
    authors: 'Gordon L. Jensen, Tommy Cederholm, Marinos Elia, David C. Evans, Charlene Compher, et al.',
    title: 'GLIM Criteria for the Diagnosis of Malnutrition: A Consensus Report from the Global Clinical Nutrition Community',
    organization: 'Clinical Nutrition / Journal of Parenteral and Enteral Nutrition',
    year: 2019,
    url: 'https://doi.org/10.1016/j.clnu.2018.08.004',
    doi: '10.1016/j.clnu.2018.08.004',
  },
  {
    id: 'white-aspen-and-malnutrition-2012',
    authors: 'Jane V. White, Peggi Guenter, Gordon L. Jensen, Ainsley Malone, Marsha Schofield, et al.',
    title: 'Consensus Statement of the Academy of Nutrition and Dietetics/American Society for Parenteral and Enteral Nutrition: Characteristics Recommended for the Identification and Documentation of Adult Malnutrition (Undernutrition)',
    organization: 'Journal of the Academy of Nutrition and Dietetics',
    year: 2012,
    url: 'https://doi.org/10.1016/j.jand.2012.03.012',
    doi: '10.1016/j.jand.2012.03.012',
  },
  {
    id: 'evans-serum-albumin-inflammation-2014',
    authors: 'David C. Evans, Mark R. Corkins, Ainsley Malone, Sarah Miller, et al.',
    title: 'The Fallacy of Nutrition Assessment: Why Visceral Proteins (Albumin, Prealbumin) Are Not Reliable Indicators of Malnutrition in the Acutely Ill Patient',
    organization: 'Nutrition in Clinical Practice',
    year: 2014,
    url: 'https://doi.org/10.1177/0884533613514492',
    doi: '10.1177/0884533613514492',
  },
  {
    id: 'hamwi-ideal-body-weight-1964',
    authors: 'George J. Hamwi',
    title: 'Therapy: Changing Concepts in Diabetes Mellitus. In: Diabetes Mellitus: Diagnosis and Treatment',
    organization: 'American Diabetes Association',
    year: 1964,
    url: 'https://diabetesjournals.org/care',
  },
  {
    id: 'fischer-nfpe-adult-malnutrition-2015',
    authors: 'Margaret Fischer, Kelly JeVenn, Melissa Hipskind',
    title: 'Nutrition-Focused Physical Assessment in Adult Malnutrition',
    organization: 'Nutrition in Clinical Practice',
    year: 2015,
    url: 'https://doi.org/10.1177/0884533615570094',
    doi: '10.1177/0884533615570094',
  },
  {
    id: 'kyle-bia-principles-clinical-2004',
    authors: 'Ursula G. Kyle, Ingvar Bosaeus, Antonio D. De Lorenzo, Paul Deurenberg, et al.',
    title: 'Bioelectrical impedance analysis—part I: review of principles and methods',
    organization: 'Clinical Nutrition',
    year: 2004,
    url: 'https://doi.org/10.1016/j.clnu.2004.06.004',
    doi: '10.1016/j.clnu.2004.06.004',
  },
]

export const dietetics01AssessmentABCDLesson: LessonTopic = {
  id: 'topic.dietetics.assessment-abcd',
  slug: 'clinical-nutrition-assessment-abcd',
  version: 1,
  updatedAt: '2026-11-03',
  title: l(
    '01 · Clinical Nutrition Assessment: The ABCD Model & Anthropometric Diagnostics',
    '০১ · ক্লিনিক্যাল পুষ্টি মূল্যায়ন: এ-বি-সি-ডি মডেল ও নৃতাত্ত্বিক শারীরিক পরিমাপ'
  ),
  summary: l(
    'The foundational four-pillar assessment methodology in clinical dietetics: Anthropometric calculations, biochemical acute-phase dynamics, nutrition-focused physical examination (NFPE), and dietary intake validation, integrated with the GLIM diagnostic framework.',
    'ক্লিনিক্যাল ডায়েটেটিক্সের চার স্তরের ভিত্তিগত মূল্যায়ন পদ্ধতি: নৃতাত্ত্বিক সমীকরণ, একিউট-ফেজ প্রোটিনের গতিপ্রকৃতি, পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE) এবং খাদ্য গ্রহণের বিশ্লেষণ, যা আন্তর্জাতিক GLIM ফ্রেমওয়ার্কের সাথে সমন্বিত।'
  ),
  subject: 'dietetics',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-03',
  objectives: [
    l(
      'Apply the four-pillar ABCD diagnostic model (Anthropometry, Biochemical markers, Clinical exam, and Dietary intake) to detect adult malnutrition and assess physiological reserve.',
      'প্রাপ্তবয়স্কদের অপুষ্টি শনাক্তকরণ ও শারীরবৃত্তীয় সক্ষমতা মূল্যায়নে চার স্তরের ABCD মডেল (নৃতাত্ত্বিক পরিমাপ, বায়োকেমিস্ট্রি, ক্লিনিক্যাল পরীক্ষা ও খাদ্যাভ্যাস) প্রয়োগ করা।'
    ),
    l(
      'Calculate Ideal Body Weight (Hamwi equation), Adjusted Body Weight for obesity, and percentage involuntary weight loss across acute and chronic clinical time frames.',
      'হ্যামউই সমীকরণ দিয়ে আদর্শ দেহের ওজন (IBW), স্থূলতার জন্য সমন্বিত ওজন (AdjBW) এবং তীব্র ও দীর্ঘমেয়াদী সময়কালে অনিচ্ছাকৃত ওজন হ্রাসের শতকরা হার গণনা করা।'
    ),
    l(
      'Differentiate negative acute-phase reactants (serum albumin, prealbumin) driven by inflammatory cytokines from somatic protein malnutrition.',
      'প্রদাহজনিত সাইটোকাইন দ্বারা হ্রাসপ্রাপ্ত নেগেটিভ একিউট-ফেজ প্রোটিন (অ্যালবুমিন, প্রিঅ্যালবুমিন) এবং প্রকৃত শারীরিক প্রোটিন অপুষ্টির মধ্যে পার্থক্য নির্ণয় করা।'
    ),
    l(
      'Conduct a systematic Nutrition-Focused Physical Exam (NFPE) evaluating bilateral temporalis, clavicular, and thenar muscle wasting alongside subcutaneous fat-pad depletion and peripheral edema staging.',
      'টেম্পোরাল, ক্লাভিকল ও থেনার পেশির ক্ষয় এবং ত্বকের নিচের চর্বি স্তর হ্রাস ও এডিমা গ্রেডিং যাচাই করে একটি পদ্ধতিগত পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE) সম্পন্ন করা।'
    ),
    l(
      'Utilize the Global Leadership Initiative on Malnutrition (GLIM) consensus framework to establish clinical malnutrition diagnoses requiring phenotypic and etiologic criteria.',
      'ফেনোটাইপিক ও এটিওলজিক মানদণ্ডের সমন্বয়ে অপুষ্টির আনুষ্ঠানিক ক্লিনিক্যাল রোগনির্ণয় প্রতিষ্ঠায় GLIM ঐকমত্য ফ্রেমওয়ার্ক ব্যবহার করা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.energy-balance-tdee'],
  relatedTopicIds: ['topic.nutrition.clinical-malnutrition', 'topic.nutrition.macronutrient-digestion'],
  references: dieteticsAssessmentRefs,
  evidenceBySection: {
    'sec-abcd-overview': ['white-aspen-and-malnutrition-2012', 'jensen-glim-malnutrition-2019'],
    'sec-anthropometry': ['hamwi-ideal-body-weight-1964', 'white-aspen-and-malnutrition-2012'],
    'sec-biochemical': ['evans-serum-albumin-inflammation-2014'],
    'sec-nfpe': ['fischer-nfpe-adult-malnutrition-2015', 'white-aspen-and-malnutrition-2012'],
    'sec-glim-advanced': ['jensen-glim-malnutrition-2019', 'kyle-bia-principles-clinical-2004'],
    'sec-worked-cases': ['white-aspen-and-malnutrition-2012', 'jensen-glim-malnutrition-2019'],
  },
  chapter: {
    toc: [
      { id: 'sec-abcd-overview', label: l('1. The ABCD Clinical Architecture', '১. এ-বি-সি-ডি ক্লিনিক্যাল মূল্যায়ন কাঠামো'), sectionId: 'sec-abcd-overview' },
      { id: 'sec-anthropometry', label: l('2. Anthropometric Diagnostics & Weight Loss Kinetics', '২. নৃতাত্ত্বিক পরিমাপ ও ওজন হ্রাসের গতিপ্রকৃতি'), sectionId: 'sec-anthropometry' },
      { id: 'sec-biochemical', label: l('3. Biochemical Indices: Visceral Proteins vs Inflammation', '৩. জৈবরাসায়নিক উপাদান: ভিসেরাল প্রোটিন বনাম প্রদাহ'), sectionId: 'sec-biochemical' },
      { id: 'sec-nfpe', label: l('4. Nutrition-Focused Physical Examination (NFPE)', '৪. পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE)'), sectionId: 'sec-nfpe' },
      { id: 'sec-glim-advanced', label: l('5. The GLIM Consensus & Cellular Body Composition', '৫. আন্তর্জাতিক GLIM ফ্রেমওয়ার্ক ও কোষীয় গঠন'), sectionId: 'sec-glim-advanced' },
      { id: 'sec-worked-cases', label: l('6. Quantitative Calculations & Diagnostic Case Studies', '৬. পরিমাণগত সমীকরণ প্রয়োগ ও ক্লিনিক্যাল কেস স্টাডি'), sectionId: 'sec-worked-cases' },
    ],
    terms: [
      {
        term: l('ABCD Nutrition Assessment Model', 'এবিসিডি পুষ্টি মূল্যায়ন মডেল'),
        definition: l(
          'A systematic four-pillar methodology comprising Anthropometry (physical measurements), Biochemical data (laboratory diagnostics), Clinical findings (physical examination and history), and Dietary intake analysis.',
          'নৃতাত্ত্বিক পরিমাপ (A), গবেষণাগার পরীক্ষা (B), শারীরিক লক্ষণ ও ইতিহাস (C), এবং খাদ্য গ্রহণের বিশ্লেষণ (D) সমন্বয়ে গঠিত চার স্তরের সুশৃঙ্খল পদ্ধতি।'
        ),
      },
      {
        term: l('Ideal Body Weight (IBW)', 'আদর্শ দেহের ওজন (IBW)'),
        definition: l(
          'A standardized reference body weight calculated via the Hamwi equation reflecting baseline metabolic mass in non-obese individuals without excess adiposity.',
          'হ্যামউই সমীকরণের মাধ্যমে হিসাবকৃত প্রমিত ওজন, যা স্থূলতাহীন স্বাভাবিক মানুষের বেসলাইন মেটাবলিক ভর প্রকাশ করে।'
        ),
      },
      {
        term: l('Negative Acute-Phase Reactant', 'নেগেটিভ একিউট-ফেজ প্রোটিন'),
        definition: l(
          'A hepatic plasma protein (such as albumin or prealbumin/transthyretin) whose gene transcription and circulating concentration decrease during systemic inflammation and cytokine release.',
          'যকৃতে তৈরি রক্তরসের এমন প্রোটিন (যেমন অ্যালবুমিন বা প্রিঅ্যালবুমিন), যা সিস্টেমিক প্রদাহ ও সাইটোকাইনের প্রভাবে সংশ্লেষণ কমে রক্তে দ্রুত হ্রাস পায়।'
        ),
      },
      {
        term: l('GLIM Criteria', 'GLIM ফ্রেমওয়ার্ক'),
        definition: l(
          'The Global Leadership Initiative on Malnutrition diagnostic framework requiring at least one phenotypic criterion (weight loss, low BMI, reduced muscle mass) and one etiologic criterion (reduced intake/assimilation, disease burden/inflammation).',
          'অপুষ্টি নির্ণয়ে আন্তর্জাতিক ঐকমত্য ফ্রেমওয়ার্ক, যাতে অন্তত একটি শারীরিক লক্ষণ (ওজন হ্রাস, কম বিএমআই, পেশি ক্ষয়) এবং একটি মূল কারণ (খাবার ঘাটতি, তীব্র রোগ/প্রদাহ) উপস্থিতি আবশ্যক।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Calculating Ideal Body Weight (Hamwi) & Adjusted Weight for Class II Obesity',
          'হ্যামউই সূত্রে আদর্শ দেহের ওজন (IBW) ও স্থূলতায় সমন্বিত ওজন (AdjBW) নির্ণয়'
        ),
        steps: [
          l(
            'Step 1: Patient Profile. A 52-year-old male with Type 2 diabetes and hypertension presents for clinical weight management. Height = 175 cm (5 feet 9 inches, 69 inches), Actual Weight = 104 kg (BMI = 34.0 kg/m², Class I/II obesity).',
            'ধাপ ১: রোগীর বিবরণ: ৫২ বছর বয়সী পুরুষ, টাইপ ২ ডায়াবেটিস ও উচ্চ রক্তচাপ। উচ্চতা ১৭৫ সেমি (৫ ফুট ৯ ইঞ্চি, ৬৯ ইঞ্চি), প্রকৃত ওজন ১০৪ কেজি (বিএমআই ৩৪.০ kg/m², স্থূলতা)।'
          ),
          l(
            'Step 2: Calculate Ideal Body Weight (IBW) via Hamwi formula for men: IBW = 48.0 kg + 2.7 kg per inch over 60 inches. Calculation: 48.0 + (2.7 x 9) = 48.0 + 24.3 = 72.3 kg.',
            'ধাপ ২: পুরুষদের জন্য হ্যামউই সূত্রে আদর্শ ওজন নির্ণয়: IBW = ৪৮.০ কেজি + ২.৭ কেজি প্রতি ইঞ্চি (৬০ ইঞ্চির অতিরিক্ত)। গণনা: ৪৮.০ + (২.৭ x ৯) = ৪৮.০ + ২৪.৩ = ৭২.৩ কেজি।'
          ),
          l(
            'Step 3: Calculate Adjusted Body Weight (AdjBW) for obesity: AdjBW = IBW + 0.40 x (Actual Weight - IBW). Calculation: 72.3 + 0.40 x (104 - 72.3) = 72.3 + 0.40 x (31.7) = 72.3 + 12.68 = 85.0 kg.',
            'ধাপ ৩: স্থূলতার জন্য সমন্বিত দেহের ওজন (AdjBW) হিসাব: AdjBW = IBW + ০.৪০ x (প্রকৃত ওজন - IBW)। গণনা: ৭২.৩ + ০.৪০ x (১০৪ - ৭২.৩) = ৭২.৩ + ০.৪০ x (৩১.৭) = ৭২.৩ + ১২.৬৮ = ৮৫.০ কেজি।'
          ),
          l(
            'Step 4: Clinical Prescribing Application. Using actual weight (104 kg) would overestimate caloric expenditure by assuming excess adipose requires the same high metabolic perfusion as lean muscle. Energy prescriptions (e.g., 25–30 kcal/kg) and protein goals (e.g., 1.2 g/kg for lean preservation) are formulated using the 85.0 kg Adjusted Body Weight.',
            'ধাপ ৪: ক্লিনিক্যাল প্রয়োগ: প্রকৃত ওজন (১০৪ কেজি) ব্যবহার করলে শক্তি চাহিদা অতিরিক্ত বেশি হতো, কারণ চর্বির মেটাবলিক চাহিদা পেশির সমান নয়। তাই ৮৫.০ কেজি সমন্বিত ওজনের ভিত্তিতে ক্যালোরি (২৫-৩০ kcal/kg) ও প্রোটিন লক্ষ্যমাত্রা নির্ধারণ করা হয়।'
          ),
        ],
        conclusion: l(
          'Adjusted Body Weight (85.0 kg) prevents hypercaloric overfeeding and metabolic hyperglycemia in obese patients while ensuring adequate amino acid delivery for lean muscle mass preservation.',
          'সমন্বিত ওজন (৮৫.০ কেজি) স্থূল রোগীদের ক্ষেত্রে অতিরিক্ত ক্যালোরি ও হাইপারগ্লাইসেমিয়ার ঝুঁকি দূর করে এবং পেশির সুরক্ষায় পর্যাপ্ত প্রোটিন নিশ্চিত করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why are serum albumin and prealbumin no longer considered valid standalone biomarkers for assessing protein malnutrition in an acutely ill ICU patient?',
          'আইসিইউতে সংকটাপন্ন রোগীর ক্ষেত্রে সিরাম অ্যালবুমিন ও প্রিঅ্যালবুমিনকে কেন প্রোটিন অপুষ্টির একক নির্ভরযোগ্য সূচক ধরা হয় না?'
        ),
        answer: l(
          'Both albumin and prealbumin are negative acute-phase reactants. During acute inflammation and trauma, pro-inflammatory cytokines (IL-6, TNF-alpha) activate NF-κB in the liver, down-regulating albumin gene transcription while prioritizing positive acute-phase proteins (CRP, ferritin). Simultaneously, microvascular leakage shifts albumin into interstitial spaces. Hence, low levels indicate inflammatory stress rather than somatic dietary protein deficit.',
          'অ্যালবুমিন ও প্রিঅ্যালবুমিন উভয়ই নেগেটিভ একিউট-ফেজ প্রোটিন। তীব্র প্রদাহের সময় প্রো-ইনফ্ল্যামেটরি সাইটোকাইন যকৃতে অ্যালবুমিনের জিন প্রতিলিপি বন্ধ করে দেয় এবং সিআরপি ও ফেরিটিনের উৎপাদন বাড়ায়। পাশাপাশি রক্তনালি চুইয়ে অ্যালবুমিন বাইরে চলে যায়। তাই এদের নিম্ন মান খাদ্য ঘাটতির বদলে সিস্টেমিক প্রদাহ ও মেটাবলিক চাপের পরিচায়ক।'
        ),
      },
      {
        question: l(
          'Under the international GLIM consensus criteria, what two required categorical components must be simultaneously documented to confirm adult malnutrition?',
          'আন্তর্জাতিক GLIM ঐকমত্য ফ্রেমওয়ার্কে প্রাপ্তবয়স্কদের অপুষ্টি নিশ্চিত করতে কোন দুটি আবশ্যিক মানদণ্ড প্রমাণ করতে হয়?'
        ),
        answer: l(
          'Confirmation requires at least one Phenotypic criterion (non-volitional weight loss, low BMI, or reduced muscle mass) AND at least one Etiologic criterion (reduced food intake/assimilation or disease burden/systemic inflammation).',
          'অপুষ্টি নিশ্চিত করতে অন্তত একটি ফেনোটাইপিক মানদণ্ড (অনিচ্ছাকৃত ওজন হ্রাস, কম বিএমআই, বা পেশি ক্ষয়) এবং অন্তত একটি এটিওলজিক মানদণ্ড (খাদ্য গ্রহণ/শোষণে ঘাটতি, বা রোগের চাপ/সিস্টেমিক প্রদাহ) একসাথে পূরণ করতে হয়।'
        ),
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-abcd-overview',
          heading: l('1. What is Clinical Nutrition Assessment? The ABCD Model', '১. ক্লিনিক্যাল পুষ্টি মূল্যায়ন কী? এ-বি-সি-ডি মডেল'),
          paragraphs: [
            l(
              'Clinical nutrition assessment is the systematic process of collecting, verifying, and interpreting medical and dietary information to diagnose malnutrition and formulate individualized medical nutrition therapy [1]. Without accurate assessment, nutrient prescriptions risk being either insufficient, leading to muscle wasting, or excessive, causing metabolic overload.',
              'ক্লিনিক্যাল পুষ্টি মূল্যায়ন হলো রোগীর স্বাস্থ্য ও খাদ্যাভ্যাস সম্পর্কিত তথ্য সংগ্রহ, যাচাই এবং বিশ্লেষণের একটি সুশৃঙ্খল বৈজ্ঞানিক প্রক্রিয়া, যার মাধ্যমে অপুষ্টি নির্ণয় করে সঠিক পথ্য নির্ধারণ করা হয় [1]। নির্ভুল মূল্যায়ন ছাড়া পুষ্টির প্রেসক্রিপশন পেশির ক্ষয় সৃষ্টি করতে পারে কিংবা অতিরিক্ত ক্যালোরি দিয়ে বিপাকীয় জটিলতা বাড়াতে পারে।'
            ),
            l(
              'The ABCD framework organizes clinical evaluation into four practical pillars: Anthropometry (body dimensions), Biochemical data (blood tests), Clinical signs (physical exam of muscles, fat, and skin), and Dietary intake (what and how much the patient actually eats) [2]. Together, these four components establish whether a patient is well-nourished, at risk, or severely depleted.',
              'এবিসিডি (ABCD) মডেল ক্লিনিক্যাল মূল্যায়নকে চারটি স্তম্ভে ভাগ করে: অ্যানথ্রোপোমেট্রি (শরীরের উচ্চতা ও ওজন), বায়োকেমিস্ট্রি (রক্তের ল্যাবরেটরি পরীক্ষা), ক্লিনিক্যাল লক্ষণ (শারীরিক পরীক্ষা) এবং ডায়েটারি ইনটেক (খাদ্য গ্রহণের পরিমাণ ও মান) [2]। এই চারটি স্তম্ভ একত্রিত করে একজন রোগীর পুষ্টির স্তর ও ঘাটতি সঠিকভাবে নির্ধারণ করা সম্ভব হয়।'
            ),
          ],
          bullets: [
            l('A (Anthropometry): Objective body measurements including dry weight, height, BMI, and weight loss trends.', 'A (অ্যানথ্রোপোমেট্রি): দেহের শুকনো ওজন, উচ্চতা, বিএমআই এবং ওজন হ্রাসের ধারা।'),
            l('B (Biochemical): Laboratory blood indices reflecting organ function, electrolytes, and inflammatory status.', 'B (বায়োকেমিস্ট্রি): অঙ্গের কার্যকারিতা, ইলেক্ট্রোলাইট এবং প্রদাহের রক্ত পরীক্ষা।'),
            l('C (Clinical): A targeted head-to-toe physical examination evaluating muscle loss, fat depletion, and fluid edema.', 'C (ক্লিনিক্যাল): মাথা থেকে পা পর্যন্ত পেশি ক্ষয়, চর্বি হ্রাস এবং এডিমা শনাক্তকরণে শারীরিক পরীক্ষা।'),
            l('D (Dietary): Evaluating actual food and fluid intake against metabolic nutrient requirements.', 'D (ডায়েটারি): রোগীর প্রকৃত খাদ্য ও তরল গ্রহণকে শারীরবৃত্তীয় চাহিদার সাথে তুলনা করা।'),
          ],
        },
        {
          id: 'sec-anthropometry',
          heading: l('2. Anthropometric Measurements: Body Mass Index & Weight Change', '২. নৃতাত্ত্বিক পরিমাপ: বিএমআই ও ওজনের পরিবর্তন'),
          paragraphs: [
            l(
              'Anthropometry provides objective physical measurements of the human body [2]. Body Mass Index (BMI), calculated as weight in kilograms divided by height in meters squared ($kg/m^2$), is a rapid initial screening tool. Standard adult cutoffs define underweight as $<18.5$, normal weight as $18.5\\text{--}24.9$, overweight as $25.0\\text{--}29.9$, and obesity as $\\ge 30.0\\text{ kg/m}^2$.',
              'নৃতাত্ত্বিক পরিমাপ মানবদেহের বাহ্যিক আকারের পরিমাপ দেয় [2]। বডি ম্যাস ইনডেক্স বা বিএমআই ($kg/m^2$) দ্রুত প্রাথমিক স্ক্রিনিংয়ে ব্যবহৃত হয়। প্রাপ্তবয়স্কদের ক্ষেত্রে বিএমআই ১৮.৫ এর নিচে হলে কম ওজন, ১৮.৫–২৪.৯ স্বাভাবিক, ২৫.০–২৯.৯ অতিরিক্ত ওজন এবং ৩০.০ বা তার বেশি হলে স্থূলতা হিসেবে চিহ্নিত হয়।'
            ),
            l(
              'However, single BMI measurements can be misleading because they cannot distinguish muscle mass from fat mass, nor can they detect fluid retention such as ascites or peripheral edema [3]. Tracking the percentage and time course of involuntary weight loss is often far more clinically significant than static weight alone.',
              'তবে একক বিএমআই বিভ্রান্তিকর হতে পারে, কারণ এটি পেশি ও চর্বির পার্থক্য করতে পারে না এবং শরীরে অতিরিক্ত পানি বা এডিমা জমলেও তা শনাক্ত করতে পারে না [3]। তাই স্থির ওজনের চেয়ে নির্দিষ্ট সময়ে রোগীর অনিচ্ছাকৃত ওজন হ্রাসের শতকরা হার পর্যবেক্ষণ করা অনেক বেশি অর্থপূর্ণ।'
            ),
          ],
        },
        {
          id: 'sec-biochemical',
          heading: l('3. Biochemical Markers: Looking Inside the Blood', '৩. জৈবরাসায়নিক সূচক: রক্তের ভেতরের পরীক্ষা'),
          paragraphs: [
            l(
              'Laboratory blood tests provide objective data about internal organ function, fluid volume, electrolyte balance, and cellular inflammation [1, 3]. Complete blood counts evaluate hemoglobin and hematocrit for nutritional anemias (iron, folate, or vitamin B12 deficiency).',
              'রক্তের ল্যাবরেটরি পরীক্ষা দেহের অভ্যন্তরীণ অঙ্গের কার্যক্ষমতা, তরলের পরিমাণ, ইলেক্ট্রোলাইট ভারসাম্য এবং কোষীয় প্রদাহ সম্পর্কে তথ্য দেয় [1, 3]। রক্তের সিবিসি পরীক্ষা হিমোগ্লোবিনের মাত্রা দেখিয়ে আয়রন, ফোলেট বা বি১২ এর অভাবজনিত রক্তাল্পতা প্রকাশ করে।'
            ),
            l(
              'Historically, doctors viewed serum albumin as a simple measure of dietary protein intake. Modern clinical evidence has proved that serum albumin and prealbumin fall rapidly in response to acute inflammation, infection, and surgical trauma, making them unreliable as standalone markers of nutritional intake [3].',
              'অতীতে রক্তরসের অ্যালবুমিনকে খাদ্য প্রোটিন গ্রহণের নির্দেশক মনে করা হতো। তবে আধুনিক চিকিৎসাবিজ্ঞান প্রমাণ করেছে যে তীব্র প্রদাহ, সংক্রমণ বা অস্ত্রোপচারের কারণে অ্যালবুমিন দ্রুত কমে যায়, তাই এটি কেবল প্রোটিন ঘাটতির একক প্রমাণ হতে পারে না [3]।'),
          ],
        },
        {
          id: 'sec-nfpe',
          heading: l('4. Clinical Physical Examination & Muscle Checking', '৪. ক্লিনিক্যাল শারীরিক পরীক্ষা ও পেশি ক্ষয় পর্যবেক্ষণ'),
          paragraphs: [
            l(
              'The Nutrition-Focused Physical Exam (NFPE) is a structured hands-on assessment where the clinician inspects and palpates the patient from head to toe [5]. By assessing anatomical sites such as the temples, collarbones, shoulders, and thighs, the clinician checks whether the patient has lost skeletal muscle mass or protective fat stores.',
              'পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE) হলো চিকিৎসকের সরাসরি হাত দিয়ে রোগীর বিভিন্ন অংশ পর্যবেক্ষণের একটি সুশৃঙ্খল পদ্ধতি [5]। মাথার দুই পাশের টেম্পল, কলারবোন বা ক্লাভিকল, কাঁধ ও ঊরুর পেশি পরীক্ষা করে চিকিৎসক বুঝতে পারেন রোগীর পেশি বা চর্বির ক্ষয় হয়েছে কি না।'
            ),
            l(
              'The clinician also examines the lower limbs and sacrum for pitting edema, where pressure from a thumb leaves an indentation in fluid-filled tissues [2]. Swelling can falsely increase body weight, masking underlying severe muscle wasting.',
              'চিকিৎসক রোগীর পা ও স্যাক্রাম পরীক্ষা করে তরল জমার লক্ষণ (এডিমা) দেখেন, যেখানে আঙুল দিয়ে চাপ দিলে গর্ত তৈরি হয় [2]। অতিরিক্ত তরল জমে ওজন বাড়িয়ে দিতে পারে, যা ভেতরের তীব্র পেশি ক্ষয়কে লুকিয়ে রাখে।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-abcd-overview',
          heading: l('1. The Four-Pillar ABCD Clinical Diagnostic Architecture', '১. চার স্তম্ভের এবিসিডি (ABCD) ক্লিনিক্যাল কাঠামো'),
          paragraphs: [
            l(
              'The ABCD diagnostic architecture forms the foundational diagnostic phase of the Nutrition Care Process (NCP) established by the Academy of Nutrition and Dietetics and ASPEN [1, 2]. Each of the four pillars provides distinct physiological insight: Anthropometry quantifies somatic tissue dimensions; Biochemical assays illuminate metabolic flux and systemic inflammatory stress; Clinical evaluation identifies phenotypic signs of nutrient depletion; and Dietary assessment measures substrate intake against calculated demands.',
              'অ্যাকাডেমি অব নিউট্রিশন অ্যান্ড ডায়েটেটিক্স এবং অ্যাসপেন (ASPEN) কর্তৃক নির্ধারিত নিউট্রিশন কেয়ার প্রসেস (NCP)-এর মূল ভিত্তি হলো এবিসিডি (ABCD) কাঠামো [1, 2]। এর চারটি স্তম্ভ রোগীর ভিন্ন ভিন্ন শারীরবৃত্তীয় অবস্থা তুলে ধরে: অ্যানথ্রোপোমেট্রি শারীরিক আকার পরিমাপ করে; বায়োকেমিস্ট্রি মেটাবলিক প্রক্রিয়া ও প্রদাহ প্রকাশ করে; ক্লিনিক্যাল পরীক্ষা পুষ্টি ঘাটতির শারীরিক লক্ষণ দেখায়; এবং ডায়েটারি অ্যাসেসমেন্ট চাহিদার বিপরীতে খাদ্যের পরিমাণ হিসাব করে।'
            ),
            l(
              'Integrating all four pillars is critical to avoiding diagnostic errors. Relying solely on dietary intake overlooks intestinal malabsorption; relying solely on weight overlooks fluid expansion; and relying solely on visceral proteins confuses systemic inflammation with dietary insufficiency [3].',
              'ভুল রোগনির্ণয় এড়াতে চারটি স্তম্ভের সমন্বয় অপরিহার্য। কেবল খাদ্যাভ্যাসের ওপর নির্ভর করলে অন্ত্রের শোষণ ত্রুটি বাদ পড়তে পারে; শুধু ওজনের ওপর নির্ভর করলে ফ্লুইড রিটেনশন বা এডিমা ধরা পড়ে না; আর শুধু রক্তের অ্যালবুমিন দেখলে তীব্র প্রদাহকে খাদ্য ঘাটতি বলে ভুল করার ঝুঁকি থাকে [3]।'
            ),
          ],
        },
        {
          id: 'sec-anthropometry',
          heading: l('2. Anthropometric Equations: Hamwi IBW, Adjusted Weight & Weight Loss Velocity', '২. নৃতাত্ত্বিক সমীকরণ: হ্যামউই সূত্র, সমন্বিত ওজন ও ওজন হ্রাসের গতি'),
          paragraphs: [
            l(
              'In clinical dietetics, calculating reference body weights is essential for formulating energy and protein prescriptions. The validated **Hamwi equation** estimates Ideal Body Weight (IBW) based on biological sex and height [4]:',
              'ক্লিনিক্যাল ডায়েটেটিক্সে শক্তি ও প্রোটিনের প্রেসক্রিপশন নির্ধারণে আদর্শ ওজন হিসাব করা বাধ্যতামূলক। চিকিৎসাবিজ্ঞানে বহুল ব্যবহৃত **হ্যামউই সমীকরণ (Hamwi equation)** লিঙ্গ ও উচ্চতার ভিত্তিতে আদর্শ দেহের ওজন (IBW) নির্ধারণ করে [4]:'
            ),
            l(
              '$$\\text{Adult Men: } \\text{IBW (kg)} = 48.0 + 2.7 \\times (\\text{Height in inches} - 60)$$\n$$\\text{Adult Women: } \\text{IBW (kg)} = 45.5 + 2.2 \\times (\\text{Height in inches} - 60)$$',
              '$$\\text{প্রাপ্তবয়স্ক পুরুষ: } \\text{IBW (কেজি)} = ৪৮.০ + ২.৭ \\times (\\text{উচ্চতা (ইঞ্চি)} - ৬০)$$\n$$\\text{প্রাপ্তবয়স্ক নারী: } \\text{IBW (কেজি)} = ৪৫.৫ + ২.২ \\times (\\text{উচ্চতা (ইঞ্চি)} - ৬০)$$'
            ),
            l(
              'In patients with class I–III obesity ($\\text{BMI} \\ge 30.0\\text{ kg/m}^2$), using actual body weight can dramatically overestimate energy and protein needs because adipose tissue has a significantly lower metabolic rate than lean muscle. Clinicians therefore calculate **Adjusted Body Weight (AdjBW)** assuming $25\\text{--}40\\%$ of excess weight is metabolically active supporting lean mass [2]:',
              'স্থূলতায় আক্রান্ত রোগীদের ক্ষেত্রে (বিএমআই $\\ge ৩০.০\\text{ kg/m}^2$) প্রকৃত ওজন ব্যবহার করলে শক্তি ও প্রোটিনের মাত্রা অতিরিক্ত বেশি হয়ে যায়, কারণ চর্বি কলার মেটাবলিক চাহিদা পেশির চেয়ে অনেক কম। এজন্য চিকিৎসকরা **সমন্বিত দেহের ওজন (AdjBW)** হিসাব করেন, যেখানে অতিরিক্ত ওজনের ২৫-৪০% কে মেটাবলিকভাবে সক্রিয় ধরা হয় [2]:'
            ),
            l(
              '$$\\text{AdjBW} = \\text{IBW} + 0.40 \\times (\\text{Actual Weight} - \\text{IBW})$$',
              '$$\\text{AdjBW} = \\text{IBW} + ০.৪০ \\times (\\text{প্রকৃত ওজন} - \\text{IBW})$$'
            ),
            l(
              'Quantifying the percentage and velocity of involuntary weight loss is a core criterion in adult malnutrition consensus definitions [2]:',
              'অনিচ্ছাকৃত ওজন হ্রাসের শতকরা হার ও সময়কাল প্রাপ্তবয়স্কদের অপুষ্টি নির্ণয়ের অন্যতম প্রধান আন্তর্জাতিক মানদণ্ড [2]:'
            ),
            l(
              '$$\\% \\text{ Involuntary Weight Loss} = \\frac{\\text{Usual Weight} - \\text{Current Weight}}{\\text{Usual Weight}} \\times 100$$',
              '$$\\% \\text{ অনিচ্ছাকৃত ওজন হ্রাস} = \\frac{\\text{স্বাভাবিক ওজন} - \\text{বর্তমান ওজন}}{\\text{স্বাভাবিক ওজন}} \\times ১০০$$'
            ),
          ],
          bullets: [
            l('Significant Loss: >1–2% in 1 week, >5% in 1 month, >7.5% in 3 months, >10% in 6 months.', 'উল্লেখযোগ্য ওজন হ্রাস: ১ সপ্তাহে >১-২%, ১ মাসে >৫%, ৩ মাসে >৭.৫%, ৬ মাসে >১০%।'),
            l('Severe Loss: >2% in 1 week, >5% in 1 month, >7.5% in 3 months, >10% in 6 months under acute illness.', 'তীব্র অপুষ্টিজনিত ওজন হ্রাস: ১ সপ্তাহে >২%, ১ মাসে >৫%, ৩ মাসে >৭.৫%, ৬ মাসে >১০% (তীব্র অসুস্থতার সময়)।'),
          ],
        },
        {
          id: 'sec-biochemical',
          heading: l('3. Biochemical Indices: Visceral Negative Acute-Phase Reactants vs Inflammation', '৩. জৈবরাসায়নিক উপাদান: ভিসেরাল প্রোটিন বনাম একিউট-ফেজ প্রদাহ'),
          paragraphs: [
            l(
              'For decades, serum albumin ($t_{1/2} \\approx 20\\text{ days}$) and prealbumin/transthyretin ($t_{1/2} \\approx 2\\text{ days}$) were erroneously utilized as direct biomarkers of visceral protein stores and dietary protein adequacy [3]. Rigorous clinical evidence has dismantled this paradigm. Both albumin and prealbumin are **negative acute-phase reactants** synthesized by hepatocytes.',
              'কয়েক দশক ধরে রক্তের অ্যালবুমিন (অর্ধায়ু প্রায় ২০ দিন) এবং প্রিঅ্যালবুমিনকে (অর্ধায়ু প্রায় ২ দিন) প্রোটিন সঞ্চয় ও পর্যাপ্ততার প্রত্যক্ষ সূচক মনে করা হতো [3]। আধুনিক গবেষণায় এই ধারণা বাতিল হয়েছে। অ্যালবুমিন এবং প্রিঅ্যালবুমিন উভয়ই যকৃতে তৈরি **নেগেটিভ একিউট-ফেজ প্রোটিন**।'
            ),
            l(
              'During systemic inflammation, pro-inflammatory cytokines (interleukin-6, TNF-alpha, and interleukin-1beta) trigger nuclear factor kappa-B ($NF\\text{-}\\kappa B$) signaling in liver parenchymal cells. This represses albumin and prealbumin mRNA transcription while upregulating **positive acute-phase reactants** including C-reactive protein (CRP), fibrinogen, and ferritin [3]. Simultaneously, microvascular endothelial permeability increases, allowing serum albumin to leak into the extravascular interstitial space, resulting in profound hypoalbuminemia despite adequate nutritional intake.',
              'সিস্টেমিক প্রদাহের সময় প্রো-ইনফ্ল্যামেটরি সাইটোকাইনগুলো (IL-6, TNF-আলফা, IL-1বিটা) যকৃতের কোষে $NF\\text{-}\\kappa B$ সিগন্যালিং সক্রিয় করে। এর ফলে অ্যালবুমিন ও প্রিঅ্যালবুমিনের জিন প্রতিলিপিকরণ বন্ধ হয়ে যায় এবং সি-রিঅ্যাক্টিভ প্রোটিন (CRP), ফাইব্রিনোজেন ও ফেরিটিনের মতো **পজিটিভ একিউট-ফেজ প্রোটিন** উৎপাদন বৃদ্ধি পায় [3]। একই সাথে কৈশিকনালির ভেদ্যতা বেড়ে অ্যালবুমিন রক্তনালি থেকে বাইরে চুইয়ে পড়ে, যার ফলে পর্যাপ্ত খাবার খেলেও রক্তে অ্যালবুমিনের মাত্রা কমে যায়।'
            ),
          ],
        },
        {
          id: 'sec-nfpe',
          heading: l('4. Nutrition-Focused Physical Examination (NFPE) & Edema Staging', '৪. পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE) ও এডিমা স্টেজ নির্ধারণ'),
          paragraphs: [
            l(
              'The Nutrition-Focused Physical Exam (NFPE) systematically investigates anatomical regions for muscle loss, subcutaneous fat wasting, and fluid accumulation [5]. Muscle wasting is assessed at: (1) Temporalis muscle (hollowing above zygomatic arch); (2) Clavicular region (prominence of clavicle bones and pectoral wasting); (3) Scapular spine and acromion process (prominence and squaring of shoulders); (4) Dorsal interosseous and thenar muscles of the hands; and (5) Quadriceps and gastrocnemius muscles of the lower extremities.',
              'পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE) পদ্ধতিগতভাবে দেহের বিভিন্ন অংশ পরীক্ষা করে পেশির ক্ষয়, চর্বি হ্রাস এবং তরল জমা নিরূপণ করে [5]। পেশি ক্ষয় যেসব স্থানে মূল্যায়ন করা হয়: (১) টেম্পোরালিস পেশি (চোখের কোণের উপরে গর্ত); (২) কলারবোন বা ক্লাভিকল অঞ্চল (হাড় স্পষ্ট হওয়া); (৩) স্ক্যাপুলা ও কাঁধের অ্যাক্রোমিয়ন প্রসেস (কাঁধ কোণাকুণি হয়ে যাওয়া); (৪) হাতের বুড়ো আঙুলের গোড়ার থেনার ও ইন্টারঅসিয়াস পেশি; এবং (৫) ঊরু ও পায়ের কাফ পেশি।'
            ),
            l(
              'Peripheral edema staging evaluates fluid accumulation that masks true dry weight [2]:\n- **1+ Mild:** $2\\text{ mm}$ depression, disappears almost instantly.\n- **2+ Moderate:** $4\\text{ mm}$ depression, disappears in 10–15 seconds.\n- **3+ Severe:** $6\\text{ mm}$ depression, lasts over 1 minute; extremities visibly swollen.\n- **4+ Very Severe:** $8\\text{ mm}$ deep depression, lasts 2–5 minutes; gross limb distortion and weeping.',
              'পেরিফেরাল এডিমা গ্রেডিং অতিরিক্ত তরল জমার পরিমাণ নির্ধারণ করে যা রোগীর প্রকৃত শুকনো ওজনকে আড়াল করে [2]:\n- **১+ মৃদু:** ২ মিমি দেবে যাওয়া, মুহূর্তেই স্বাভাবিক হয়।\n- **২+ মাঝারি:** ৪ মিমি দেবে যাওয়া, ১০-১৫ সেকেন্ডের মধ্যে ঠিক হয়।\n- **৩+ তীব্র:** ৬ মিমি দেবে যাওয়া, ১ মিনিটের বেশি সময় স্থায়ী হয়; পা স্পষ্টভাবে ফোলা।\n- **৪+ অতি তীব্র:** ৮ মিমি গভীর গর্ত, ২-৫ মিনিট পর্যন্ত থাকে; অঙ্গ বিকৃত ও চামড়া ভিজে যায়।'
            ),
          ],
        },
        {
          id: 'sec-worked-cases',
          heading: l('5. Dietary Intake Methodologies & Assessment Workflow', '৫. খাদ্য গ্রহণ মূল্যায়ন পদ্ধতি ও ক্লিনিক্যাল মূল্যায়ন কর্মপ্রবাহ'),
          paragraphs: [
            l(
              'Dietary intake assessment validates substrate supply against calculated requirements. The **USDA Automated Multiple-Pass Method (AMPM)** is the gold-standard 24-hour recall tool, utilizing five systematic passes: (1) Quick Food List, (2) Forgotten Foods Probe, (3) Time and Occasion Mapping, (4) Detail and Portion Specification, and (5) Final Probe for omitted items [1].',
              'খাদ্য গ্রহণ মূল্যায়ন রোগীর খাদ্য ও তরলের পরিমাণকে তার দৈহিক চাহিদার সাথে তুলনা করে। **USDA অটোমেটেড মাল্টিপল-পাস পদ্ধতি (AMPM)** হলো ২৪ ঘণ্টার রিকলের আন্তর্জাতিক গোল্ড-স্ট্যান্ডার্ড, যাতে পাঁচটি ধাপ থাকে: (১) খাবারের প্রাথমিক তালিকা, (২) ভুলে যাওয়া খাবারের খোঁজ, (৩) সময় ও উপলক্ষের বিবরণ, (৪) খাবারের বিস্তারিত ও পরিমাপ, এবং (৫) চূড়ান্ত পর্যালোচনা [1]।'),
            l(
              'Clinicians combine dietary recalls with Food Frequency Questionnaires (FFQ) and weighted records to establish typical macronutrient and micronutrient density while statistically adjusting for habitual underreporting [1].',
              'চিকিৎসকরা ২৪ ঘণ্টার রিকলের সাথে খাদ্য গ্রহণের পুনরাবৃত্তি প্রশ্নমালা (FFQ) এবং খাবারের ওজনের রেকর্ড মিলিয়ে সামগ্রিক পুষ্টির ঘনত্ব ও অপূর্ণতা নির্ধারণ করেন [1]।'),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-abcd-overview',
          heading: l('1. The GLIM Global Consensus Diagnostic Framework', '১. আন্তর্জাতিক GLIM কনসেনসাস রোগনির্ণয় ফ্রেমওয়ার্ক'),
          paragraphs: [
            l(
              'In 2019, the Global Leadership Initiative on Malnutrition (GLIM)—convened by ASPEN, ESPEN, FELANPE, and PENSA—standardized the global diagnostic criteria for adult malnutrition across clinical settings [1]. To establish a confirmed diagnosis of malnutrition, a patient must meet at least **one Phenotypic criterion** AND at least **one Etiologic criterion** [1].',
              '২০১৯ সালে ASPEN, ESPEN, FELANPE এবং PENSA-এর যৌথ উদ্যোগে গঠিত Global Leadership Initiative on Malnutrition (GLIM) বিশ্বব্যাপী প্রাপ্তবয়স্কদের অপুষ্টি নির্ণয়ে একটি প্রমিত ফ্রেমওয়ার্ক প্রতিষ্ঠা করে [1]। অপুষ্টির আনুষ্ঠানিক রোগনির্ণয় নিশ্চিত করতে রোগীকে অবশ্যই অন্তত **একটি ফেনোটাইপিক (শারীরিক) মানদণ্ড** এবং অন্তত **একটি এটিওলজিক (কার্যকারণ) মানদণ্ড** পূরণ করতে হবে [1]।'),
          ],
          bullets: [
            l('Phenotypic Criterion 1 — Non-volitional Weight Loss: >5% within the past 6 months, or >10% beyond 6 months.', 'ফেনোটাইপিক মানদণ্ড ১ — অনিচ্ছাকৃত ওজন হ্রাস: গত ৬ মাসে >৫%, অথবা ৬ মাসের অধিক সময়ে >১০%।'),
            l('Phenotypic Criterion 2 — Low Body Mass Index: <18.5 kg/m² for adults <70 years; <20.0 kg/m² for adults ≥70 years.', 'ফেনোটাইপিক মানদণ্ড ২ — নিম্ন বিএমআই: ৭০ বছরের নিচে <১৮.৫ kg/m²; ৭০ বছর বা তদূর্ধ্বে <২০.০ kg/m²।'),
            l('Phenotypic Criterion 3 — Reduced Muscle Mass: Confirmed by validated body composition methods (BIA, DEXA, CT L3 area, or calf circumference).', 'ফেনোটাইপিক মানদণ্ড ৩ — পেশি ক্ষয়: স্বীকৃত বডি কম্পোজিশন পদ্ধতি (BIA, DEXA, CT L3 স্ক্যান বা কাফ পরিধি) দ্বারা প্রমাণিত।'),
            l('Etiologic Criterion 1 — Reduced Food Intake or Assimilation: ≤50% of energy requirements for >1 week, or any reduction for >2 weeks, or chronic GI conditions.', 'এটিওলজিক মানদণ্ড ১ — খাবার গ্রহণ বা শোষণে ঘাটতি: >১ সপ্তাহ ধরে চাহিদার ≤৫০% গ্রহণ, অথবা >২ সপ্তাহ ধরে কোনো ঘাটতি, বা দীর্ঘস্থায়ী গ্যাস্ট্রোইনটেস্টাইনাল সমস্যা।'),
            l('Etiologic Criterion 2 — Disease Burden or Systemic Inflammation: Acute infection, sepsis, trauma, burns, major surgery, or chronic inflammatory diseases.', 'এটিওলজিক মানদণ্ড ২ — রোগের প্রভাব বা সিস্টেমিক প্রদাহ: তীব্র সংক্রমণ, সেপসিস, ট্রমা, পোড়া, বড় অস্ত্রোপচার বা দীর্ঘমেয়াদী প্রদাহজনিত রোগ।'),
          ],
        },
        {
          id: 'sec-anthropometry',
          heading: l('2. Advanced Body Composition: BIA Phase Angle & CT L3 Skeletal Muscle Index', '২. উন্নত বডি কম্পোজিশন: BIA ফেজ অ্যাঙ্গেল ও CT L3 স্কেলিটাল মাসল ইনডেক্স'),
          paragraphs: [
            l(
              'While anthropometric circumferences offer bedside convenience, advanced clinical nutrition research relies on biophysical and radiologic body composition metrics. **Bioelectrical Impedance Analysis (BIA)** introduces an alternating electrical current to quantify tissue resistance ($R$) and reactance ($X_c$) [6]. From these, the **BIA Phase Angle ($\\alpha$)** is computed:',
              'নৃতাত্ত্বিক পরিমাপ শয্যাপাশে সহজ হলেও আধুনিক ক্লিনিক্যাল পুষ্টি গবেষণায় জৈব-পদার্থবিজ্ঞান এবং রেডিওলজিক্যাল পদ্ধতির ওপর নির্ভর করা হয়। **বায়োইলেকট্রিক্যাল ইম্পিডেন্স অ্যানালাইসিস (BIA)** একটি বিকল্প বৈদ্যুতিক প্রবাহ পাঠিয়ে টিস্যুর রোধ ($R$) এবং রিঅ্যাক্ট্যান্স ($X_c$) পরিমাপ করে [6]। এর থেকে **BIA ফেজ অ্যাঙ্গেল ($\\alpha$)** হিসাব করা হয়:'
            ),
            l(
              '$$\\alpha = \\arctan\\left(\\frac{X_c}{R}\\right) \\times \\left(\\frac{180}{\\pi}\\right)$$',
              '$$\\alpha = \\arctan\\left(\\frac{X_c}{R}\\right) \\times \\left(\\frac{১৮০}{\\pi}\\right)$$'
            ),
            l(
              'Phase angle directly reflects cell membrane integrity, capacitive capacitance, and somatic cell mass. A low phase angle ($<4.5^{\\circ}\\text{--}5.0^{\\circ}$) is an independent predictor of frailty, hospital readmission, and clinical mortality in oncology and critical care [6].',
              'ফেজ অ্যাঙ্গেল সরাসরি কোষঝিল্লির অখণ্ডতা, ক্যাপাসিটিভ শক্তি এবং সুস্থ কোষীয় ভরের প্রতিফলন ঘটায়। কম ফেজ অ্যাঙ্গেল ($<৪.৫^{\\circ}\\text{--}৫.০^{\\circ}$) অনকোলজি ও আইসিইউতে রোগীদের শারীরিক ভঙ্গুরতা এবং মৃত্যুর স্বাধীন পূর্বাভাসক হিসেবে কাজ করে [6]।'
            ),
            l(
              'In clinical oncology and hepatology, abdominal computed tomography (CT) scans taken at the third lumbar vertebra ($L_3$) provide the reference standard for quantifying cross-sectional skeletal muscle area ($cm^2$). Dividing this area by height squared yields the **Skeletal Muscle Index (SMI, $cm^2/m^2$)**, detecting occult sarcopenic obesity that escapes visual detection [1].',
              'ক্যান্সার ও লিভারের জটিল রোগে তৃতীয় কটিদেশীয় কশেরুকা ($L_3$) বরাবর অ্যাবডোমিনাল সিটি স্ক্যান করে পেশির প্রস্থচ্ছেদ ক্ষেত্রফল ($cm^2$) নির্ণয় করা হয়। একে উচ্চতার বর্গ দিয়ে ভাগ করে **স্কেলিটাল মাসল ইনডেক্স (SMI, $cm^2/m^2$)** বের করা হয়, যা আপাতদৃষ্টিতে মোটা রোগীর ভেতরের লুকায়িত সারকোপেনিয়া বা পেশিক্ষয় নির্ভুলভাবে শনাক্ত করে [1]।'
            ),
          ],
        },
        {
          id: 'sec-biochemical',
          heading: l('3. Molecular Kinetics of Hepatic Protein Synthesis During Sepsis', '৩. সেপসিসে যকৃতের প্রোটিন সংশ্লেষণের আণবিক গতিবিদ্যা'),
          paragraphs: [
            l(
              'The molecular mechanism underlying cytokine-mediated hypoalbuminemia illustrates why albumin is a poor metric of protein nutrition during critical illness [3]. Upon activation by endotoxins (LPS) or tissue injury, macrophages secrete interleukin-6 ($IL\\text{-}6$), which binds hepatic $gp130$ receptor complexes, activating the $JAK\\text{/}STAT3$ and $MAPK$ pathways. Phosphorylated $STAT3$ dimers translocate to the hepatocyte nucleus, binding acute-phase response elements (APRE) in promoter regions of CRP, serum amyloid A (SAA), and fibrinogen [3].',
              'সাইটোকাইন-প্ররোচিত হাইপোঅ্যালবুমিনিয়ার আণবিক প্রক্রিয়া পরিষ্কার করে কেন তীব্র অসুস্থতায় অ্যালবুমিন পুষ্টির সূচক নয় [3]। ব্যাকটেরিয়াল এন্ডোটক্সিন (LPS) বা টিস্যু আঘাতের ফলে ম্যাক্রোফেজ থেকে ইন্টারলিউকিন-৬ ($IL\\text{-}6$) নিঃসৃত হয়, যা যকৃতের $gp130$ রিসেপ্টরে যুক্ত হয়ে $JAK\\text{/}STAT3$ ও $MAPK$ পথ সক্রিয় করে। ফসফোরাইলেটেড $STAT3$ যকৃতের নিউক্লিয়াসে গিয়ে CRP, সিরাম অ্যামাইলয়েড A এবং ফাইব্রিনোজেনের জিন দ্রুত চালু করে [3]।'
            ),
            l(
              'Concurrently, $IL\\text{-}6$ and $TNF\\text{-}\\alpha$ repress the transcription factor $HNF\\text{-}1\\alpha$ (hepatocyte nuclear factor-1 alpha), severely down-regulating albumin gene transcription. Thus, albumin production plummets not because amino acid building blocks are missing, but because cellular energy and ribosomal machinery are genetically commandeered for host defense and immune survival [3].',
              'একই সময়ে $IL\\text{-}6$ এবং $TNF\\text{-}\\alpha$ হেপাটোসাইট নিউক্লিয়ার ফ্যাক্টর-১ অ্যালফা ($HNF\\text{-}1\\alpha$) দমন করে অ্যালবুমিনের জিন ট্রান্সক্রিপশন বন্ধ করে দেয়। অর্থাৎ রক্তে অ্যালবুমিনের পতন অ্যামাইনো অ্যাসিডের অভাবে ঘটে না, বরং কোষের পুরো শক্তি ও রাইবোজোম কাঠামো প্রতিরক্ষামূলক ইমিউন প্রোটিন তৈরিতে পুনঃনিয়োজিত হওয়ার কারণে ঘটে [3]।'
            ),
          ],
        },
        {
          id: 'sec-worked-cases',
          heading: l('4. Quantitative Worked Examples & Diagnostic Decision Case', '৪. পরিমাণগত হিসাব ও ক্লিনিক্যাল রোগনির্ণয় কেস স্টাডি'),
          paragraphs: [
            l(
              '**Clinical Case Profile:** A 64-year-old male with Stage III colon cancer admitted for elective hemicolectomy. Height: $178\\text{ cm}$ ($70\\text{ inches}$). Usual weight: $84\\text{ kg}$. Current dry weight: $71\\text{ kg}$ over 4 months. Serum Albumin: $2.9\\text{ g/dL}$, hs-CRP: $38\\text{ mg/L}$. Physical exam reveals marked temporal wasting and visible clavicular ridges; no peripheral edema.',
              '**ক্লিনিক্যাল কেস বিবরণ:** ৬৪ বছর বয়সী একজন পুরুষ কোলন ক্যান্সারে আক্রান্ত হয়ে অস্ত্রোপচারের জন্য ভর্তি হয়েছেন। উচ্চতা: ১৭৮ সেমি (৭০ ইঞ্চি)। স্বাভাবিক ওজন: ৮৪ কেজি। বর্তমান শুকনো ওজন: ৪ মাসের ব্যবধানে ৭১ কেজি। রক্তের অ্যালবুমিন: ২.৯ g/dL, hs-CRP: ৩৮ mg/L। শারীরিক পরীক্ষায় টেম্পোরাল পেশির সুস্পষ্ট গর্ত এবং কলারবোনের গভীর খাঁজ পরিলক্ষিত হয়েছে; কোনো এডিমা নেই।'
            ),
            l(
              '**Step 1: Calculate Ideal Body Weight (Hamwi):**\n$$\\text{IBW} = 48.0\\text{ kg} + 2.7 \\times (70 - 60) = 48.0 + 27.0 = 75.0\\text{ kg}$$\n**Step 2: Calculate Percentage Weight Loss:**\n$$\\% \\text{ Loss} = \\frac{84 - 71}{84} \\times 100 = \\frac{13}{84} \\times 100 = 15.5\\% \\text{ in 4 months}$$\nThis exceeds the $>7.5\\%$ threshold for 3 months, qualifying as **severe involuntary weight loss** [2].',
              '**ধাপ ১: আদর্শ ওজন (Hamwi) হিসাব:**\n$$\\text{IBW} = ৪৮.০\\text{ কেজি} + ২.৭ \\times (৭০ - ৬০) = ৪৮.০ + ২৭.০ = ৭৫.০\\text{ কেজি}$$\n**ধাপ ২: শতকরা ওজন হ্রাস হিসাব:**\n$$\\% \\text{ ক্ষতি} = \\frac{৮৪ - ৭১}{৮৪} \\times ১০০ = \\frac{১৩}{৮৪} \\times ১০০ = ১৫.৫\\% \\text{ (৪ মাসে)}$$\nএটি ৩ মাসের >৭.৫% সীমা ছাড়িয়ে যাওয়ায় **তীব্র অনিচ্ছাকৃত ওজন হ্রাস** হিসেবে গণ্য হয় [2]।'
            ),
            l(
              '**Step 3: GLIM Consensus Evaluation:**\n- *Phenotypic Criterion:* Severe weight loss ($15.5\\% > 5\\%$) AND severe muscle wasting on NFPE (meets Criteria 1 and 3) [1].\n- *Etiologic Criterion:* Systemic inflammation from colon adenocarcinoma (hs-CRP $38\\text{ mg/L} > 5\\text{ mg/L}$) (meets Criterion 2) [1].\n- *Diagnosis:* **Severe Malnutrition in the Context of Chronic Disease with Inflammation** (GLIM-confirmed). Serum albumin of $2.9\\text{ g/dL}$ corroborates systemic inflammation rather than determining the diagnosis [1, 3].',
              '**ধাপ ৩: GLIM মানদণ্ড মূল্যায়ন:**\n- *ফেনোটাইপিক মানদণ্ড:* তীব্র ওজন হ্রাস (১৫.৫% > ৫%) এবং NFPE পরীক্ষায় সুস্পষ্ট পেশি ক্ষয় (মানদণ্ড ১ ও ৩ পূরণ) [1]।\n- *এটিওলজিক মানদণ্ড:* কোলন ক্যান্সারের সিস্টেমিক প্রদাহ (hs-CRP ৩৮ mg/L > ৫ mg/L) (মানদণ্ড ২ পূরণ) [1]।\n- *রোগনির্ণয়:* **প্রদাহজনিত দীর্ঘস্থায়ী রোগের প্রেক্ষাপটে তীব্র অপুষ্টি** (GLIM-নিশ্চিত)। রক্তে অ্যালবুমিন ২.৯ g/dL প্রদাহের তীব্রতার প্রমাণ দেয়, তবে রোগনির্ণয়ের মূল মাপকাঠি নয় [1, 3]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Flowchart illustrating the four pillars of the ABCD clinical nutrition assessment model, branching into specific diagnostic tools: Anthropometry (Hamwi IBW, AdjBW, percent weight loss), Biochemical markers (visceral proteins vs inflammatory CRP), Clinical NFPE (temporalis, clavicle, edema staging), and Dietary methodologies (AMPM 24-hr recall, FFQ), synthesizing into the GLIM malnutrition consensus diagnosis.',
      'ক্লিনিক্যাল পুষ্টি মূল্যায়নের এবিসিডি (ABCD) মডেলের চার স্তম্ভের প্রবাহচিত্র: অ্যানথ্রোপোমেট্রি, বায়োকেমিস্ট্রি, ক্লিনিক্যাল পরীক্ষা এবং খাদ্য গ্রহণ পদ্ধতি, যা সমন্বিত হয়ে আন্তর্জাতিক GLIM অপুষ্টি রোগনির্ণয় নিশ্চিত করে।'
    ),
    steps: [
      l('1. Anthropometry: Measure dry weight and height; compute Hamwi IBW, AdjBW, and % involuntary weight loss velocity.', '১. অ্যানথ্রোপোমেট্রি: শুকনো ওজন ও উচ্চতা মেপে হ্যামউই IBW, AdjBW এবং ওজন হ্রাসের শতকরা গতি হিসাব করুন।'),
      l('2. Biochemistry: Inspect metabolic panels; interpret albumin/prealbumin as negative acute-phase reactants against CRP.', '২. বায়োকেমিস্ট্রি: মেটাবলিক প্যানেল ও সিআরপি দেখে অ্যালবুমিন/প্রিঅ্যালবুমিনের প্রদাহজনিত হ্রাস মূল্যায়ন করুন।'),
      l('3. Clinical NFPE: Palpate temporalis, clavicle, thenar muscles for somatic loss; stage pitting edema 1+ to 4+.', '৩. ক্লিনিক্যাল NFPE: টেম্পোরাল, কলারবোন ও হাতের পেশি পরীক্ষা করুন এবং ১+ থেকে ৪+ এডিমা গ্রেডিং করুন।'),
      l('4. Dietary Evaluation: Perform USDA 5-pass recall; compare substrate intake against calculated energy/protein goals.', '৪. ডায়েটারি ইনটেক: ৫-ধাপের রিকল করে খাদ্য উপাদানকে হিসাবকৃত ক্যালোরি ও প্রোটিন চাহিদার সাথে তুলনা করুন।'),
      l('5. GLIM Synthesis: Couple at least 1 phenotypic and 1 etiologic criterion to formally diagnose and grade malnutrition.', '৫. GLIM সমন্বয়: অন্তত একটি ফেনোটাইপিক ও একটি এটিওলজিক মানদণ্ড মিলিয়ে নিশ্চিতভাবে অপুষ্টির গ্রেডিং নির্ধারণ করুন।'),
    ],
  },
  assessment: {
    question: l(
      'A 68-year-old critically ill woman with severe sepsis has a serum albumin of 2.1 g/dL (normal: 3.5–5.0) and hs-CRP of 82 mg/L. Her weight is stable due to 3+ bilateral peripheral edema. Which clinical statement correctly explains her low serum albumin?',
      'তীব্র সেপসিসে আক্রান্ত ৬৮ বছর বয়সী এক সংকটাপন্ন নারীর সিরাম অ্যালবুমিন ২.১ g/dL (স্বাভাবিক: ৩.৫-৫.০) এবং hs-CRP ৮২ mg/L। ৩+ পেরিফেরাল এডিমার কারণে তার ওজন অপরিবর্তিত দেখাচ্ছে। তার নিম্ন অ্যালবুমিন সম্পর্কে কোন বক্তব্যটি চিকিৎসাগতভাবে সঠিক?'
    ),
    options: [
      l(
        'Her low albumin proves severe dietary protein starvation over the preceding 24 hours.',
        'তার নিম্ন অ্যালবুমিন প্রমাণ করে যে তিনি বিগত ২৪ ঘণ্টায় তীব্র খাদ্য প্রোটিন ঘাটতিতে ছিলেন।'
      ),
      l(
        'Albumin is a negative acute-phase reactant down-regulated by IL-6 and TNF-alpha, while systemic capillary leakage shifts albumin into interstitial spaces; it does not directly reflect dietary intake.',
        'অ্যালবুমিন হলো একটি নেগেটিভ একিউট-ফেজ প্রোটিন যা IL-6 এবং TNF-আলফা দ্বারা হ্রাস পায় এবং কৈশিকনালি চুইয়ে তরল জমায় এটি কমে; এটি সরাসরি খাদ্য গ্রহণের প্রতিফলন নয়।'
      ),
      l(
        'Her stable body weight definitively excludes any possibility of skeletal muscle wasting or malnutrition.',
        'তার স্থিতিশীল দেহের ওজন প্রমাণ করে যে তার পেশি ক্ষয় বা অপুষ্টির কোনো সম্ভাবনা নেই।'
      ),
      l(
        'High-dose intravenous albumin infusions will permanently cure her underlying malnutrition and restore somatic protein stores.',
        'উচ্চমাত্রার শিরায় অ্যালবুমিন প্রয়োগ তার ভেতরের অপুষ্টি স্থায়ীভাবে নিরাময় করবে এবং পেশির প্রোটিন পুনরুদ্ধার করবে।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'Serum albumin and prealbumin are negative acute-phase reactants whose hepatic transcription is repressed by inflammatory cytokines (IL-6, TNF-alpha) during acute critical illness and sepsis. Concurrently, increased vascular permeability allows albumin to escape into the extravascular interstitium (contributing to edema). Therefore, low visceral proteins reflect systemic inflammation and physiological stress rather than somatic malnutrition or short-term dietary intake.',
      'রক্তরসের অ্যালবুমিন এবং প্রিঅ্যালবুমিন হলো নেগেটিভ একিউট-ফেজ প্রোটিন, যার যকৃতের সংশ্লেষণ সেপসিস এবং তীব্র অসুস্থতায় প্রদাহজনক সাইটোকাইন (IL-6, TNF-আলফা) দ্বারা বাধাপ্রাপ্ত হয়। একই সাথে রক্তনালির ভেদ্যতা বেড়ে অ্যালবুমিন ইন্টারস্টিশিয়াল স্পেসে চলে গিয়ে এডিমা তৈরি করে। সুতরাং নিম্ন অ্যালবুমিন সিস্টেমিক প্রদাহ ও মেটাবলিক চাপের প্রতিফলন, যা সরাসরি খাদ্য প্রোটিন গ্রহণের ঘাটতি বোঝায় না।'
    ),
  },
}

