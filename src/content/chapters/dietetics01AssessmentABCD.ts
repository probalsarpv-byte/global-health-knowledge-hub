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
    authors: 'Jane V. White, Peggi Guenter, Gordon Jensen, Ainsley Malone, Marsha Schofield, et al.',
    title: 'Consensus Statement of the Academy of Nutrition and Dietetics/American Society for Parenteral and Enteral Nutrition: Characteristics Recommended for the Identification and Documentation of Adult Malnutrition (Undernutrition)',
    organization: 'Journal of the Academy of Nutrition and Dietetics',
    year: 2012,
    url: 'https://doi.org/10.1016/j.jand.2012.03.012',
    doi: '10.1016/j.jand.2012.03.012',
  },
  {
    id: 'evans-serum-albumin-inflammation-2014',
    authors: 'David C. Evans, Mark R. Corkins, Ainsley Malone, Sarah Miller, et al.',
    title: 'The Use of Visceral Proteins as Nutrition Markers: An ASPEN Position Paper',
    organization: 'Nutrition in Clinical Practice',
    year: 2014,
    url: 'https://doi.org/10.1177/0884533613516588',
    doi: '10.1177/0884533613516588',
  },
  {
    id: 'hamwi-ideal-body-weight-1964',
    authors: 'George J. Hamwi',
    title: 'Therapy: Changing Concepts in Diabetes Mellitus (Formula for Ideal Body Weight)',
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
    '০১ · ক্লিনিক্যাল পুষ্টি মূল্যায়ন: এ-বি-সি-ডি মডেল ও শারীরিক পরিমাপের বিজ্ঞান'
  ),
  summary: l(
    'How clinical nutritionists act as biological detectives: using four core pillars—Anthropometry (body math), Biochemical labs, Clinical physical exams, and Dietary records—to uncover hidden malnutrition, calculate true metabolic goals, and protect living muscle tissue.',
    'কীভাবে পুষ্টিবিদরা শরীরের ভেতরের গোয়েন্দা হিসেবে কাজ করেন: চারটি মূল স্তম্ভ—অ্যানথ্রোপোমেট্রি (শারীরিক মাপ), বায়োকেমিস্ট্রি (রক্ত পরীক্ষা), ক্লিনিক্যাল পরীক্ষা (পেশি ও চর্বি যাচাই) এবং ডায়েটারি হিস্ট্রি (খাবারের হিসাব)—ব্যবহার করে ভেতরের লুকায়িত অপুষ্টি শনাক্ত করা এবং গুরুত্বপূর্ণ পেশি রক্ষা করা।'
  ),
  subject: 'dietetics',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-03',
  objectives: [
    l(
      'Understand the four ABCD pillars (Anthropometry, Biochemistry, Clinical exam, and Dietary intake) as an interconnected clinical investigation system.',
      'অপুষ্টি নির্ণয়ে চারটি স্তম্ভকে (অ্যানথ্রোপোমেট্রি, বায়োকেমিস্ট্রি, ক্লিনিক্যাল পরীক্ষা ও খাদ্যাভ্যাস) একটি ধারাবাহিক ও পারস্পরিক নির্ভরশীল গোয়েন্দা ব্যবস্থা হিসেবে বোঝা।'
    ),
    l(
      'Calculate Ideal Body Weight (Hamwi equation), Adjusted Body Weight for obesity, and percent involuntary weight loss over time using simple step-by-step arithmetic.',
      'সহজ ধাপে হ্যামউই সূত্রে আদর্শ ওজন (IBW), অতিরিক্ত ওজনের সমন্বিত ওজন (AdjBW) এবং সময়ের ব্যবধানে অনিচ্ছাকৃত ওজন হ্রাসের শতকরা হার গণনা করা।'
    ),
    l(
      'Discover why low blood albumin during infection or injury reflects an emergency immune response rather than dietary starvation.',
      'রোগ বা সংক্রমণের সময় রক্তে অ্যালবুমিন কমে যাওয়ার কারণ খাদ্য ঘাটতি নয়, বরং শরীরের জরুরি ইমিউন প্রতিক্রিয়া—তা পরিষ্কারভাবে বোঝা।'
    ),
    l(
      'Perform a hands-on physical exam (NFPE) to spot real muscle wasting at the temples, collarbones, and thumbs, and stage fluid edema from 1+ to 4+.',
      'চোখে দেখে ও হাত দিয়ে ছুঁয়ে কপালের দুই পাশ (টেম্পল), কলারবোন ও বৃদ্ধাঙ্গুলির গোড়ার পেশি ক্ষয় এবং ১+ থেকে ৪+ এডিমা বা পানি জমা শনাক্ত করা।'
    ),
    l(
      'Apply the international GLIM consensus framework to diagnose and grade malnutrition by combining physical evidence with underlying disease causes.',
      'আন্তর্জাতিক GLIM ফ্রেমওয়ার্ক অনুযায়ী শারীরিক প্রমাণ এবং রোগের মূল কারণ মিলিয়ে নিশ্চিতভাবে অপুষ্টি শনাক্ত ও তার মাত্রা নির্ধারণ করা।'
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
      { id: 'sec-abcd-overview', label: l('1. The Detective Story: The ABCD Model', '১. পুষ্টিবিজ্ঞানের গোয়েন্দা কাহিনী: এ-বি-সি-ডি মডেল'), sectionId: 'sec-abcd-overview' },
      { id: 'sec-anthropometry', label: l('2. Anthropometric Equations: Hamwi IBW, Adjusted Weight & Weight Loss Velocity', '২. নৃতাত্ত্বিক সমীকরণ: হ্যামউই আদর্শ ওজন, সমন্বিত ওজন ও ওজন ক্ষয়ের গতি'), sectionId: 'sec-anthropometry' },
      { id: 'sec-biochemical', label: l('3. Biochemical Indices: Visceral Proteins vs Inflammation', '৩. রক্তের ভেতরের পরীক্ষা: ভিসেরাল প্রোটিন বনাম প্রদাহ'), sectionId: 'sec-biochemical' },
      { id: 'sec-nfpe', label: l('4. Hands-On Body Check: Muscle Palpation & Edema Staging', '৪. সরাসরি শারীরিক পরীক্ষা: মাংসপেশি স্পর্শ ও এডিমা গ্রেডিং'), sectionId: 'sec-nfpe' },
      { id: 'sec-glim-advanced', label: l('5. The GLIM Global Consensus Diagnostic Framework', '৫. আন্তর্জাতিক GLIM ফ্রেমওয়ার্ক ও কোষীয় গঠন'), sectionId: 'sec-glim-advanced' },
      { id: 'sec-worked-cases', label: l('6. Quantitative Calculations & Diagnostic Case Studies', '৬. বাস্তব গাণিতিক হিসাব ও ক্লিনিক্যাল কেস স্টাডি'), sectionId: 'sec-worked-cases' },
    ],
    terms: [
      {
        term: l('The ABCD Assessment Model', 'এ-বি-সি-ডি পুষ্টি মূল্যায়ন মডেল'),
        definition: l(
          'A systematic four-lens clinical framework: Anthropometry (body dimensions and weight changes), Biochemical markers (blood and laboratory indices), Clinical findings (physical examination of muscles and fat), and Dietary intake (what the patient actually eats and absorbs).',
          'রোগীর পুষ্টি পরীক্ষার চারটি মূল ধাপ: অ্যানথ্রোপোমেট্রি (শরীরের আকার ও ওজন), বায়োকেমিস্ট্রি (রক্তের পরীক্ষা), ক্লিনিক্যাল লক্ষণ (হাত দিয়ে পেশি ও চর্বি যাচাই) এবং ডায়েটারি হিস্ট্রি (প্রকৃত খাবারের পরিমাণ ও পুষ্টিমান)।'
        ),
      },
      {
        term: l('Ideal Body Weight (IBW)', 'আদর্শ দেহের ওজন (IBW)'),
        definition: l(
          'A healthy benchmark weight calculated from adult height using the standardized Hamwi equation. It represents the baseline metabolic body mass of an individual without excess adipose fat.',
          'উচ্চতার ভিত্তিতে হ্যামউই সমীকরণ দিয়ে বের করা একজন মানুষের স্বাভাবিক স্বাস্থ্যকর ওজন। এতে অতিরিক্ত চর্বি বাদ দিয়ে শরীরের প্রকৃত মেটাবলিক ভরের আদর্শ মান পাওয়া যায়।'
        ),
      },
      {
        term: l('Negative Acute-Phase Reactant', 'নেগেটিভ একিউট-ফেজ প্রোটিন (যেমন অ্যালবুমিন)'),
        definition: l(
          'A protein produced by the liver (such as albumin or prealbumin) whose production drops sharply during acute infection, surgery, or injury because the liver temporarily shifts its factories to make emergency immune-defense proteins.',
          'যকৃতে তৈরি এমন এক ধরনের প্রোটিন (যেমন অ্যালবুমিন বা প্রিঅ্যালবুমিন), যা শরীরে তীব্র রোগ বা আঘাতের সময় কমে যায়; কারণ যকৃৎ তখন খাদ্য ঘাটতির জন্য নয়, বরং রোগ প্রতিরোধের জন্য জরুরি ডিফেন্স প্রোটিন তৈরিতে ব্যস্ত থাকে।'
        ),
      },
      {
        term: l('GLIM Malnutrition Criteria', 'গ্লিম (GLIM) অপুষ্টি নির্দেশিকা'),
        definition: l(
          'The Global Leadership Initiative on Malnutrition framework. To formally confirm malnutrition, a patient must show at least one visible physical sign (weight loss, low BMI, or muscle wasting) combined with at least one root biological cause (poor intake or disease inflammation).',
          'বিশ্বজুড়ে পুষ্টিবিদদের সর্বসম্মত অপুষ্টি নির্ণয় মানদণ্ড। এতে নিশ্চিতভাবে অপুষ্টি প্রমাণ করতে অন্তত একটি শারীরিক লক্ষণ (যেমন ওজন হ্রাস বা পেশি ক্ষয়) এবং একটি পেছনের মূল কারণ (যেমন খাবার না খাওয়া বা তীব্র প্রদাহ) একসাথে থাকতে হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Practical Worked Example: Calculating Hamwi Ideal Weight and Adjusted Weight for an Obese Patient',
          'বাস্তব গাণিতিক উদাহরণ: স্থূল রোগীর ক্ষেত্রে হ্যামউই আদর্শ ওজন ও সমন্বিত ওজন নির্ণয়'
        ),
        steps: [
          l(
            'Step 1: Meet the Patient. A 52-year-old man named Mr. Rahman with Type 2 diabetes visits the nutrition clinic. His height is 175 cm (5 feet 9 inches, which equals 69 inches). His bathroom scale shows 104 kg (BMI = 34.0 kg/m², which falls into Class I/II obesity).',
            'ধাপ ১: রোগীর তথ্য: ৫২ বছর বয়সী জনাব রহমান ডায়াবেটিস ক্লিনিকে এসেছেন। তার উচ্চতা ১৭৫ সেমি (৫ ফুট ৯ ইঞ্চি, অর্থাৎ মোট ৬৯ ইঞ্চি)। ওজনের স্কেলে তার ওজন দেখাচ্ছে ১০৪ কেজি (তার বিএমআই ৩৪.০ kg/m², অর্থাৎ তিনি স্থূলতার শ্রেণিতে পড়েন)।'
          ),
          l(
            'Step 2: Calculate Ideal Body Weight (IBW) using the Hamwi rule for men. The rule gives 48.0 kg for the first 5 feet (60 inches), plus 2.7 kg for every extra inch above 5 feet. Mr. Rahman is 9 inches taller than 5 feet: $\\text{IBW} = 48.0\\text{ kg} + (2.7 \\times 9) = 48.0 + 24.3 = 72.3\\text{ kg}$. This is his healthy target weight.',
            'ধাপ ২: পুরুষদের হ্যামউই সূত্রে আদর্শ ওজন (IBW) বের করা। সূত্রটি বলে: প্রথম ৫ ফুটের (৬০ ইঞ্চি) জন্য ৪৮.০ কেজি, এবং ৫ ফুটের অতিরিক্ত প্রতি ইঞ্চির জন্য আরও ২.৭ কেজি যোগ করতে হবে। জনাব রহমান ৫ ফুটের চেয়ে ৯ ইঞ্চি লম্বা: $\\text{IBW} = ৪৮.০\\text{ কেজি} + (২.৭ \\times ৯) = ৪৮.০ + ২৪.৩ = ৭২.৩\\text{ কেজি}$। এটিই তার সুস্থ আদর্শ ওজন।'
          ),
          l(
            'Step 3: Calculate Adjusted Body Weight (AdjBW) for obesity. Why do we need this? Adipose fat tissue is mostly stored energy; it does not burn calories or need protein at the same high rate as active muscle! If we calculated his diet using all 104 kg, we would give him far too much food and cause dangerous hyperglycemia. The formula is: $\\text{AdjBW} = \\text{IBW} + 0.40 \\times (\\text{Actual} - \\text{IBW}) = 72.3 + 0.40 \\times (104 - 72.3) = 72.3 + 0.40 \\times (31.7) = 72.3 + 12.68 = 85.0\\text{ kg}$.',
            'ধাপ ৩: অতিরিক্ত ওজনের জন্য সমন্বিত ওজন (AdjBW) হিসাব। কেন এটি দরকার? শরীরের অতিরিক্ত চর্বি কিন্তু সচল মাংসপেশির মতো বেশি ক্যালোরি পোড়ায় না! যদি আমরা পুরো ১০৪ কেজির ওপর খাবার হিসাব করি, তবে তাকে প্রয়োজনের চেয়ে অনেক বেশি খাবার দেওয়া হবে এবং রক্তের সুগার মারাত্মক বেড়ে যাবে। সূত্রটি হলো: $\\text{AdjBW} = \\text{IBW} + ০.৪০ \\times (\\text{প্রকৃত ওজন} - \\text{IBW}) = ৭২.৩ + ০.৪০ \\times (১০৪ - ৭২.৩) = ৭২.৩ + ০.৪০ \\times (৩১.৭) = ৭২.৩ + ১২.৬৮ = ৮৫.০\\text{ কেজি}$।'
          ),
          l(
            'Step 4: Formulate the Clinical Meal Plan. The dietitian now prescribes energy targets (25 kcal/kg) and protein targets (1.2 g/kg) using the 85.0 kg Adjusted Weight instead of 104 kg: Daily Energy = $85 \\times 25 = 2,125\\text{ kcal/day}$; Daily Protein = $85 \\times 1.2 = 102\\text{ g protein/day}$.',
            'ধাপ ৪: খাদ্য পরিকল্পনা তৈরি: পুষ্টিবিদ এখন ১০৪ কেজির বদলে এই ৮৫.০ কেজি সমন্বিত ওজনের ভিত্তিতে ক্যালোরি (প্রতি কেজিতে ২৫ কিলোক্যালোরি) ও প্রোটিন (প্রতি কেজিতে ১.২ গ্রাম) হিসাব করেন: দৈনিক ক্যালোরি = $৮৫ \\times ২৫ = ২,১২৫\\text{ kcal/দিন}$; দৈনিক প্রোটিন = $৮৫ \\times ১.২ = ১০২\\text{ গ্রাম/দিন}$।'
          ),
        ],
        conclusion: l(
          'Using Adjusted Body Weight (85.0 kg) protects the patient from being overfed with dangerous blood sugar spikes, while delivering exactly enough protein to preserve his active heart and skeletal muscle.',
          'সমন্বিত ওজন (৮৫.০ কেজি) ব্যবহারের ফলে রোগী অতিরিক্ত ক্যালোরি ও অনিয়ন্ত্রিত সুগারের বিপদ থেকে রক্ষা পান, এবং একই সাথে তার হৃদপিণ্ড ও মাংসপেশি বাঁচাতে প্রয়োজনীয় সঠিক প্রোটিন নিশ্চিত হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why is a single number on a bathroom scale not enough to tell if a hospital patient is malnourished?',
          'হাসপাতালের কোনো রোগী অপুষ্টিতে ভুগছেন কি না তা জানতে শুধু সাধারণ ওজনের স্কেলের মাপ যথেষ্ট নয় কেন?'
        ),
        answer: l(
          'A scale measures total mass, not what makes up that mass! A patient with heart or liver disease might retain 5–10 liters of excess water (edema and ascites) while quietly losing 4 kg of essential muscle. Their scale weight might look normal or even increased, completely masking severe internal muscle wasting.',
          'স্কেল কেবল শরীরের মোট ওজন মাপে, কিন্তু সেই ওজন কিসের তা বলতে পারে না! হৃদরোগ বা লিভারের রোগী শরীরে ৫-১০ লিটার অতিরিক্ত পানি জমিয়ে ফেলতে পারেন (এডিমা), যখন ভেতরে ভেতরে তার গুরুত্বপূর্ণ মাংসপেশি শুকিয়ে যাচ্ছে। স্কেলে ওজন স্বাভাবিক বা বেশি দেখালেও রোগী আসলে তীব্র পেশিক্ষয়জনিত মারাত্মক অপুষ্টিতে থাকতে পারেন।'
        ),
      },
      {
        question: l(
          'Why does serum albumin drop rapidly during severe infection or surgery, and why does this NOT mean the patient is starving?',
          'তীব্র সংক্রমণ বা অস্ত্রোপচারের সময় রক্তে অ্যালবুমিন দ্রুত কমে যায় কেন, এবং কেন এর অর্থ এই নয় যে রোগী খাবার না পেয়ে না খেয়ে আছেন?'
        ),
        answer: l(
          'Albumin is a negative acute-phase protein. When inflammation or tissue injury occurs, immune messengers called cytokines (like IL-6) command the liver to prioritize making emergency defense proteins (like CRP) instead of albumin. At the same time, leaky blood vessels let albumin seep into body tissues. Minnesota starvation studies proved that pure dietary hunger does not lower albumin until late stages; low albumin in acute illness reflects immune battle, not dietary intake.',
          'অ্যালবুমিন হলো একটি নেগেটিভ একিউট-ফেজ প্রোটিন। শরীরে কোনো তীব্র প্রদাহ বা ক্ষত হলে রোগপ্রতিরোধ ব্যবস্থার বার্তাবাহক সাইটোকাইন (যেমন IL-6) যকৃৎকে নির্দেশ দেয় অ্যালবুমিনের কাজ বন্ধ রেখে জরুরি সুরক্ষামূলক প্রোটিন (যেমন CRP) তৈরি করতে। একই সাথে রক্তনালি আলগা হয়ে অ্যালবুমিন টিস্যুতে ছড়িয়ে পড়ে। গবেষণায় প্রমাণিত হয়েছে যে শুধু না খেয়ে থাকলে অ্যালবুমিন কমে না; অসুস্থতার সময় অ্যালবুমিন কমা মূলত শরীরের ভেতরের রোগপ্রতিরোধ যুদ্ধের লক্ষণ, খাদ্যের অভাব নয়।'
        ),
      },
      {
        question: l(
          'What are the two mandatory gates required by the international GLIM framework to confirm malnutrition?',
          'আন্তর্জাতিক GLIM ফ্রেমওয়ার্কে অপুষ্টি নিশ্চিত করতে কোন দুটি শর্ত অবশ্যই একসাথে পূরণ হতে হয়?'
        ),
        answer: l(
          'The diagnosis requires at least one Phenotypic sign (observable body loss: involuntary weight loss, low BMI, or muscle depletion) PLUS at least one Etiologic root cause (reduced food intake/absorption, or disease-related inflammation).',
          'অপুষ্টি নিশ্চিত করতে অন্তত একটি শারীরিক লক্ষণ (যেমন চোখে দেখা ওজন হ্রাস, অতি কম বিএমআই, বা মাংসপেশির ক্ষয়) এবং সাথে অন্তত একটি পেছনের মূল কারণ (যেমন খাবার খেতে বা হজম করতে না পারা, অথবা রোগের প্রদাহজনিত চাপ) একসাথে বিদ্যমান থাকতে হয়।'
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
          heading: l('1. The Detective Story of Clinical Nutrition: The ABCD Model', '১. পুষ্টিবিজ্ঞানের গোয়েন্দা কাহিনী: এ-বি-সি-ডি মডেল'),
          paragraphs: [
            l(
              'Imagine walking into a hospital room to care for a patient. How do you know if their body is quietly running out of fuel and breaking down its own organs? You cannot simply ask them how they feel, and you cannot rely solely on a bathroom scale [1]. Clinical nutrition assessment is the science of investigating the human body like a master detective, gathering clues from four distinct perspectives known as the **ABCD Model** [2].',
              'মনে করুন, আপনি হাসপাতালের একজন রোগীর বিছানার পাশে দাঁড়িয়েছেন। আপনি কীভাবে বুঝবেন যে তার শরীর নীরবে পুষ্টির অভাবে ধুঁকছে এবং বেঁচে থাকার জন্য নিজের গুরুত্বপূর্ণ অঙ্গের প্রোটিন ধ্বংস করছে? শুধু রোগী কেমন আছেন জিজ্ঞেস করলেই এর উত্তর মিলবে না, কিংবা শুধু ওজনের স্কেল দিয়েও তা বোঝা অসম্ভব [1]। ক্লিনিক্যাল পুষ্টি মূল্যায়ন হলো একজন দক্ষ গোয়েন্দার মতো মানবদেহের প্রতিটি সূত্র খুঁজে বের করার বিজ্ঞান, যা চারটি সহজ ইংরেজি বর্ণমালার মাধ্যমে পরিচালিত হয়—যাকে বলা হয় **এ-বি-সি-ডি (ABCD) মডেল** [2]।'
            ),
            l(
              'To make this intuitive, think of the human body like a historic building under inspection:\n\n' +
              '• **A (Anthropometry / শারীরিক পরিমাপ):** Measuring the outer dimensions. How tall is the building? How heavy is it? Has it lost weight suddenly over the last month?\n' +
              '• **B (Biochemical / ল্যাবরেটরি রক্ত পরীক্ষা):** Testing the hidden pipes and wiring. What is circulating in the bloodstream? Are electrolytes balanced? Are internal organs under stress?\n' +
              '• **C (Clinical / সরাসরি শারীরিক পরীক্ষা):** Touching and examining the actual bricks and mortar. Are the pillars sturdy, or have the muscles around the temples and collarbones eroded into hollows?\n' +
              '• **D (Dietary / খাদ্য গ্রহণের ইতিহাস):** Auditing the supply truck. How much energy, protein, and water actually entered the building over the past week compared to what it burns?',
              'বিষয়টি সহজে বোঝার জন্য মানুষের দেহকে একটি পরিদর্শনাধীন বহুতল ভবনের সাথে তুলনা করা যেতে পারে:\n\n' +
              '• **A (অ্যানথ্রোপোমেট্রি বা শারীরিক মাপ):** ভবনের বাহ্যিক পরিমাপ নেওয়া। ভবনটি কত উঁচু? এর ওজন কত? গত এক বা তিন মাসে এর ওজনে কি কোনো হঠাৎ ধস নেমেছে?\n' +
              '• **B (বায়োকেমিস্ট্রি বা রক্তের পরীক্ষা):** ভবনের ভেতরের গোপন পাইপলাইন ও বৈদ্যুতিক তারের পরীক্ষা। রক্তস্রোতে কী ভাসছে? রক্তে খনিজ লবণ ঠিক আছে কি? ভেতরের অঙ্গগুলো কি মেটাবলিক চাপে আছে?\n' +
              '• **C (ক্লিনিক্যাল শারীরিক পরীক্ষা):** ভবনের মূল পিলার আর ইটের গাঁথুনি নিজে হাত দিয়ে ছুঁয়ে দেখা। রোগীর গায়ের মাংসপেশি কি শক্ত আছে, নাকি কপাল ও কলারবোনের চারপাশের পেশি শুকিয়ে গভীর গর্ত তৈরি হয়েছে?\n' +
              '• **D (ডায়েটারি বা খাদ্যের হিসাব):** রসদ সরবরাহকারী ট্রাকের হিসাব মেলানো। গত কয়েক দিনে বা সপ্তাহে রোগী আসলে কতটা ক্যালোরি ও প্রোটিন মুখে খেয়েছেন বা স্যালাইনে পেয়েছেন, আর তার শরীরের চাহিদাই বা কত ছিল?'
            ),
            l(
              'No single letter can tell the whole truth on its own [1, 2]. A patient might have a normal weight (A) but severely low muscle mass hidden beneath fluid retention (C) because an inflamed liver has halted protein production (B) while their appetite has collapsed from pain (D). By connecting all four letters, the clinician sees the complete biological picture.',
              'এই চারটি উপাদানের কোনো একটি একা সম্পূর্ণ সত্য প্রকাশ করতে পারে না [1, 2]। যেমন—একজন রোগীর ওজন দেখতে একেবারে স্বাভাবিক মনে হতে পারে (A), কিন্তু তার পেটে বা পায়ে অতিরিক্ত পানি জমার নিচে আসল মাংসপেশি পুরোপুরি শুকিয়ে যেতে পারে (C); কারণ তার যকৃতে প্রদাহের কারণে প্রোটিন তৈরি ব্যাহত হচ্ছে (B), আর তীব্র ব্যথার কারণে তিনি গত এক সপ্তাহ ধরে কিছুই খেতে পারছেন না (D)। এই চারটিকে একসাথে মেলালেই একজন রোগীর আসল শারীরিক অবস্থা স্পষ্ট হয়ে ওঠে।'
            ),
          ],
          bullets: [
            l('Anthropometry (A): Dry body weight, standing or arm-span height, BMI, and weight loss velocity.', 'অ্যানথ্রোপোমেট্রি (A): শুকনো দেহের ওজন, উচ্চতা, বিএমআই এবং সময়ের সাথে ওজন কমার গতি।'),
            l('Biochemical (B): Blood panels, kidney indices (BUN/creatinine), electrolytes, and inflammation markers (CRP).', 'বায়োকেমিস্ট্রি (B): রক্তের পরীক্ষা, কিডনির সূচক, ইলেক্ট্রোলাইট এবং প্রদাহের মার্কার (CRP)।'),
            l('Clinical (C): A gentle head-to-toe physical exam evaluating muscle wasting, fat loss, and fluid swelling (edema).', 'ক্লিনিক্যাল পরীক্ষা (C): মাথা থেকে পা পর্যন্ত হাত দিয়ে ছুঁয়ে পেশি ক্ষয়, চর্বি হ্রাস এবং পানি জমা (এডিমা) পরীক্ষা।'),
            l('Dietary (D): Comparing actual food and beverage intake against what the body needs to heal.', 'ডায়েটারি (D): রোগী প্রতিদিন কী খাবার ও পানীয় গ্রহণ করছেন তা তার শারীরিক চাহিদার সাথে তুলনা করা।'),
          ],
        },
        {
          id: 'sec-anthropometry',
          heading: l('2. Reading Body Changes: BMI, True Weight Loss, and Speed of Loss', '২. দেহের পরিবর্তন বোঝা: বিএমআই, প্রকৃত ওজন হ্রাস এবং ক্ষয়ের গতি'),
          paragraphs: [
            l(
              'The simplest place to begin an assessment is by measuring the physical body [2]. Body Mass Index (BMI), calculated as weight in kilograms divided by height in meters squared ($kg/m^2$), gives a quick snapshot of body size. For adults, normal weight sits between $18.5$ and $24.9\\text{ kg/m}^2$, while a BMI under $18.5$ flags potential chronic undernutrition, and over $30.0$ indicates obesity.',
              'শারীরিক মূল্যায়নের সবচেয়ে প্রাথমিক ধাপ হলো দেহের বাহ্যিক পরিমাপ নেওয়া [2]। বডি ম্যাস ইনডেক্স (BMI), যা ওজনকে (কেজি) উচ্চতার বর্গ (মিটার) দিয়ে ভাগ করে ($kg/m^2$) বের করা হয়, শরীরের সাধারণ আকারের একটি দ্রুত ধারণা দেয়। প্রাপ্তবয়স্কদের ক্ষেত্রে ১৮.৫ থেকে ২৪.৯ হলো স্বাভাবিক সুস্থ ওজন। ১৮.৫ এর নিচে নামলে তা অপুষ্টির ঝুঁকি নির্দেশ করে, আর ৩০.০ এর বেশি হলে তা স্থূলতা হিসেবে চিহ্নিত হয়।'
            ),
            l(
              'However, relying on BMI alone is dangerous [3]! BMI cannot tell the difference between heavy bone and muscle versus excess water weight or body fat. A muscular athlete might have a high BMI of 29 without having an ounce of unhealthy fat. Conversely, an elderly patient with liver cirrhosis might have a "normal" BMI of 22 only because their abdomen is filled with 10 liters of trapped fluid (ascites), completely masking life-threatening muscle loss.',
              'কিন্তু শুধুমাত্র বিএমআই এর ওপর নির্ভর করা চিকিৎসাক্ষেত্রে মারাত্মক ভুল হতে পারে [3]! বিএমআই কখনো মাংসপেশি, চর্বি এবং শরীরের জমে থাকা অতিরিক্ত পানির পার্থক্য করতে পারে না। একজন শক্তপোক্ত অ্যাথলেটের বিএমআই ২৯ হতে পারে তার ভারী পেশির কারণে, যেখানে ক্ষতিকর চর্বির ছিটেফোঁটাও নেই। আবার লিভারের রোগে আক্রান্ত একজন প্রবীণ ব্যক্তির পেটে ১০ লিটার পানি জমে থাকার কারণে তার বিএমআই স্বাভাবিক ২২ দেখাতে পারে, যদিও তার ভেতরের সমস্ত মাংসপেশি শুকিয়ে হাড় বেরিয়ে গেছে।'
            ),
            l(
              'This is why clinicians focus intensely on **Weight Loss Velocity**—the speed at which someone loses weight without trying to [2]. Losing 5 kg over an entire year during a planned fitness diet is healthy; losing that exact same 5 kg in 10 days during an acute illness means the body is breaking down its own vital tissues at an alarming rate.',
              'এই কারণেই অভিজ্ঞ পুষ্টিবিদরা সবচেয়ে বেশি গুরুত্ব দেন **ওজন হ্রাসের গতি (Weight Loss Velocity)** বা অনিচ্ছাকৃতভাবে কত দ্রুত ওজন কমছে তার ওপর [2]। সারা বছর ধরে ব্যায়াম ও নিয়ন্ত্রিত খাদ্যাভ্যাসে ৫ কেজি ওজন কমা স্বাস্থ্যের জন্য ভালো; কিন্তু কোনো অসুস্থতায় মাত্র ১০ দিনে সেই একই ৫ কেজি ওজন কমে যাওয়ার অর্থ হলো শরীর বেঁচে থাকার তাগিদে নিজের অতি জরুরি অঙ্গ ও পেশি জ্বালানি হিসেবে পুড়িয়ে ফেলছে।'
            ),
          ],
        },
        {
          id: 'sec-biochemical',
          heading: l('3. The Blood Window: What Lab Tests Tell Us and the Albumin Myth', '৩. রক্তের ভেতরের জানালা: ল্যাব পরীক্ষা এবং অ্যালবুমিন সংক্রান্ত ভুল ধারণা'),
          paragraphs: [
            l(
              'Blood tests act like a window into the body’s chemistry [3]. A complete blood count reveals whether the bone marrow has enough iron, folate, and vitamin B12 to manufacture healthy red blood cells. Kidney tests (blood urea nitrogen and creatinine) and liver enzymes show whether organs are clearing cellular waste efficiently or failing under stress.',
              'রক্তের বিভিন্ন ল্যাব পরীক্ষা আমাদের শরীরের ভেতরের রাসায়নিক কারখানার সচল জানালা হিসেবে কাজ করে [3]। একটি কমপ্লিট ব্লাড কাউন্ট (CBC) পরীক্ষা দেখায় অস্থিমজ্জায় পর্যাপ্ত আয়রন, ফোলেট ও ভিটামিন বি১২ আছে কি না রক্তকণিকা তৈরির জন্য। রক্তের ইউরিয়া, ক্রিয়েটিনিন ও লিভারের এনজাইম পরীক্ষা জানান দেয় ভেতরের অঙ্গগুলো বর্জ্য ঠিকমতো দূর করতে পারছে কি না।'
            ),
            l(
              'For many decades, a persistent myth existed in hospitals: doctors believed that if a patient’s blood albumin level was low, it proved they were starving for dietary protein [3]. Modern science has completely overturned this assumption! **Albumin is a negative acute-phase protein.** When the body suffers severe trauma, surgery, or infection, the immune system releases chemical alarm signals called cytokines (such as Interleukin-6).',
              'বিগত কয়েক দশক ধরে চিকিৎসাজগতে একটি প্রচলিত ভুল ধারণা ছিল: কোনো রোগীর রক্তে অ্যালবুমিন কমে গেলে মনে করা হতো তিনি খাদ্য প্রোটিনের তীব্র অভাবে ভুগছেন [3]। আধুনিক চিকিৎসাবিজ্ঞান এই ধারণা পুরোপুরি বদলে দিয়েছে! **অ্যালবুমিন হলো একটি নেগেটিভ একিউট-ফেজ প্রোটিন।** শরীরে কোনো তীব্র আঘাত, সংক্রমণ বা অপারেশন হলে রোগপ্রতিরোধ ব্যবস্থা সাইটোকাইন (যেমন ইন্টারলিউকিন-৬) নামের জরুরি রাসায়নিক বার্তা পাঠায়।'
            ),
            l(
              'These cytokines instruct the liver to immediately pause albumin production and redirect all its cellular factories toward making emergency defense proteins (such as C-Reactive Protein, or CRP) [3]. In the historic Minnesota Starvation Experiment, healthy men starved for six months lost huge amounts of weight and muscle, yet their blood albumin remained almost completely normal until the very end! Therefore, low albumin tells you that the patient has active inflammation, not that they need a protein shake.',
              'এই সাইটোকাইনগুলো যকৃৎ বা লিভারকে নির্দেশ দেয় অ্যালবুমিন তৈরির কাজ সাময়িক বন্ধ করে সমস্ত মনোযোগ জরুরি প্রতিরক্ষামূলক প্রোটিন (যেমন সি-রিঅ্যাক্টিভ প্রোটিন বা CRP) তৈরিতে দিতে [3]। বিখ্যাত মিনেসোটা অনাহার গবেষণায় দেখা গিয়েছিল, ছয় মাস ধরে তীব্র অনাহারে থাকা মানুষদের দেহের চর্বি ও মাংসপেশি শুকিয়ে কঙ্কালসার হয়ে গেলেও তাদের রক্তের অ্যালবুমিন প্রায় স্বাভাবিক ছিল! সুতরাং অসুস্থ রোগীর রক্তে অ্যালবুমিন কমে যাওয়া মূলত শরীরের তীব্র প্রদাহ ও লড়াইয়ের প্রমাণ, খাদ্যের প্রোটিন ঘাটতি নয়।'
            ),
          ],
        },
        {
          id: 'sec-nfpe',
          heading: l('4. The Hands-On Body Check: Touching and Spotting Muscle Loss', '৪. সরাসরি শারীরিক পরীক্ষা: মাংসপেশির ক্ষয় ও চর্বির পরিবর্তন নিজে দেখে বোঝা'),
          paragraphs: [
            l(
              'Before advanced laboratory machinery existed, the best doctors used their eyes and fingertips [5]. The **Nutrition-Focused Physical Exam (NFPE)** brings this art back into clinical medicine. Instead of just glancing at a chart, the clinician carefully examines specific anatomical regions where the body first cannibalizes its own protein stores when calories run short.',
              'আধুনিক ল্যাব যন্ত্রপাতির আবিষ্কারের আগে পৃথিবীর সেরা চিকিৎসকরা তাদের চোখ এবং হাতের স্পর্শ দিয়ে রোগীর শারীরিক অবস্থা নির্ভুলভাবে বুঝতে পারতেন [5]। **পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE)** সেই অমূল্য দক্ষতাকে ক্লিনিক্যাল চিকিৎসায় ফিরিয়ে এনেছে। শুধু ফাইল দেখার বদলে পুষ্টিবিদ রোগীর শরীরের নির্দিষ্ট কিছু অংশ নিবিড়ভাবে পর্যবেক্ষণ করেন, যেখান থেকে শরীর ক্ষুধার্ত হলে সবার আগে প্রোটিন ক্ষয় করা শুরু করে।'
            ),
            l(
              'The clinician checks three key muscular areas:\n\n' +
              '1. **The Temples (Temporalis Muscle):** Look at the side of the head while the patient bites down. A well-nourished person has a smooth, firm muscle pad. In malnutrition, this hollows out into visible scooped depressions [5].\n' +
              '2. **The Collarbones (Clavicles):** Look at the clavicle bone. In a healthy adult, the bone is cushioned by muscle and fat. In wasting, the clavicle juts out sharply like a coat hanger, creating deep hollows above and below.\n' +
              '3. **The Thumb Web Space (Interosseous Muscle):** Have the patient touch their thumb and index finger together. In good nutrition, a firm fleshy mound rises between the bones. In malnutrition, this area becomes flat or sunken like a shallow valley.',
              'শারীরিক পরীক্ষায় তিনটি প্রধান মাংসপেশি সরাসরি পরীক্ষা করা হয়:\n\n' +
              '১. **কপালের দুই পাশ বা টেম্পল (Temporalis পেশি):** রোগীকে দাঁতে দাঁত চেপে কামড় দিতে বলুন। সুস্থ মানুষের এখানে টানটান মাংসপেশি ফুলে ওঠে। কিন্তু পুষ্টিহীনতায় পেশি শুকিয়ে গিয়ে কপালের দুই পাশে সুস্পষ্ট গর্ত বা খাঁজ তৈরি হয় [5]।\n' +
              '২. **কলারবোন বা কণ্ঠাস্থি (Clavicle):** রোগীর কলারবোনের দিকে তাকান। সুস্থ মানুষের এই হাড়ের ওপর মাংস ও চর্বির কোমল আবরণ থাকে। কিন্তু পেশিক্ষয় হলে কলারবোনটি কাপড়ের হ্যাঙ্গারের মতো অস্বাভাবিক উঁচু হয়ে ওঠে এবং হাড়ের ওপর-নিচে গভীর গর্ত দেখা যায়।\n' +
              '৩. **বৃদ্ধাঙ্গুলির গোড়ার খাঁজ (Interosseous পেশি):** রোগীকে তার বৃদ্ধাঙ্গুলি ও তর্জনী একসাথে মেলাতে বলুন। ভালো পুষ্টির শরীরে সেখানে গোল আলুর মতো মাংসপেশি ফুলে ওঠে। কিন্তু মারাত্মক অপুষ্টিতে সেখানে মাংস মিলিয়ে গিয়ে সমতল বা ভেতরে বসা ফাঁকা জায়গার সৃষ্টি হয়।'
            ),
            l(
              'Finally, the examiner checks for fluid swelling (**Edema**) by pressing a thumb firmly against the bony shin or ankle for 5 full seconds [5]. If the thumb leaves an indentation that remains sunken, fluid is trapped in the tissues. This is graded from 1+ (mild 2 mm pit that rebounds instantly) to 4+ (deep 8 mm pit that stays sunken for minutes), warning the clinician that scale weight is artificially inflated by water.',
              'পরীক্ষার শেষ ধাপে শরীরে অতিরিক্ত পানি জমা বা **এডিমা (Edema)** পরীক্ষা করা হয়। রোগীর পায়ের নলার হাড়ের ওপর বুড়ো আঙুল দিয়ে পূর্ণ ৫ সেকেন্ড শক্তভাবে চেপে ধরে রাখা হয় [5]। আঙুল তুলে নেওয়ার পর যদি চামড়ায় গর্ত থেকে যায়, তবে বুঝতে হবে টিস্যুতে পানি জমেছে। একে ১+ (সামান্য ২ মিলিমিটার গর্ত যা সাথে সাথে মিলিয়ে যায়) থেকে ৪+ (গভীর ৮ মিলিমিটার গর্ত যা কয়েক মিনিট পর্যন্ত দেবে থাকে) গ্রেডে ভাগ করা হয়; যা চিকিৎসককে সতর্ক করে দেয় যে স্কেলের ওজন আসলে চর্বি বা পেশির নয়, জমে থাকা পানির।'
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
          heading: l('1. The ABCD Diagnostic Framework in Hospital Practice', '১. হাসপাতালে এ-বি-সি-ডি রোগনির্ণয় কাঠামো'),
          paragraphs: [
            l(
              'In clinical dietetics, the ABCD assessment framework transforms bedside evaluation into a standardized, reproducible diagnostic workflow [1, 2]. Clinical nutrition assessment differs fundamentally from rapid nutrition screening: while screening merely flags potential risk using tools like the MUST (Malnutrition Universal Screening Tool) or NRS-2002, assessment conducts an in-depth diagnostic evaluation that quantifies metabolic compromise and defines targeted interventions [1].',
              'ক্লিনিক্যাল ডায়েটেটিক্সে এবিসিডি (ABCD) ফ্রেমওয়ার্ক রোগীর শয্যাপাশের মূল্যায়নকে একটি প্রমিত, নির্ভরযোগ্য ও বিজ্ঞানসম্মত রোগনির্ণয় কর্মপ্রবাহে রূপ দেয় [1, 2]। পুষ্টি মূল্যায়ন প্রাথমিক পুষ্টি স্ক্রিনিং থেকে সম্পূর্ণ আলাদা: স্ক্রিনিং টুল (যেমন MUST বা NRS-2002) যেখানে কেবল অপুষ্টির সম্ভাব্য ঝুঁকি নির্দেশ করে, পুষ্টি মূল্যায়ন সেখানে রোগীর মেটাবলিক ক্ষতি পুঙ্খানুপুঙ্খভাবে পরিমাপ করে সুনির্দিষ্ট চিকিৎসা নির্ধারণ করে [1]।'
            ),
            l(
              'The ABCD workflow synthesizes objective anthropometric dimensions with dynamic biochemical flux, physical signs of muscle-fat depletion, and verified nutrient assimilation [2]. This multidimensional perspective protects hospitalized patients from two equally dangerous outcomes: failure to recognize occult sarcopenic malnutrition, and hypercaloric overfeeding of critically ill or inflamed individuals.',
              'এবিসিডি পদ্ধতি শরীরের বাহ্যিক আকার, রক্তের মেটাবলিক পরিবর্তন, পেশি ও চর্বি ক্ষয়ের শারীরিক লক্ষণ এবং রোগীর খাবার গ্রহণের বাস্তব পরিমাণের মেলবন্ধন ঘটায় [2]। এই বহুমাত্রিক বিশ্লেষণ রোগীকে দুটি মারাত্মক বিপদ থেকে রক্ষা করে: প্রথমত, স্থূলতার আড়ালে থাকা গোপন পেশি ক্ষয় (Sarcopenic Malnutrition) শনাক্ত করতে ব্যর্থ হওয়া; এবং দ্বিতীয়ত, গুরুতর অসুস্থ বা প্রদাহে আক্রান্ত রোগীকে প্রয়োজনের চেয়ে বেশি ক্যালোরি খাইয়ে মেটাবলিক জটিলতা তৈরি করা।'
            ),
          ],
        },
        {
          id: 'sec-anthropometry',
          heading: l('2. Anthropometric Equations: Hamwi IBW, Adjusted Weight & Weight Loss Velocity', '২. নৃতাত্ত্বিক সমীকরণ: হ্যামউই আদর্শ ওজন, সমন্বিত ওজন ও ওজন ক্ষয়ের গতি'),
          paragraphs: [
            l(
              'Anthropometric diagnostics convert raw physical measurements into validated clinical targets using established mathematical formulations [4]. The classic **Hamwi Equation** provides an evidence-based estimate of Ideal Body Weight (IBW) based on adult height without excess adiposity:',
              'নৃতাত্ত্বিক রোগনির্ণয় পদ্ধতি রোগীর শারীরিক মাপগুলোকে প্রতিষ্ঠিত গাণিতিক সমীকরণের মাধ্যমে ব্যবহারিক ক্লিনিক্যাল লক্ষ্যে রূপান্তর করে [4]। ক্লাসিক **হ্যামউই সমীকরণ (Hamwi Formula)** একজন মানুষের উচ্চতার ওপর ভিত্তি করে অতিরিক্ত চর্বিমুক্ত আদর্শ দেহের ওজনের (IBW) নিখুঁত হিসাব প্রদান করে:'
            ),
            l(
              '$$\\begin{aligned} &\\textbf{Men:} \\quad 48.0\\text{ kg for the first } 152.4\\text{ cm (5 feet)} + 2.7\\text{ kg per } 2.54\\text{ cm (1 inch) over 5 feet} \\\\ &\\textbf{Women:} \\quad 45.5\\text{ kg for the first } 152.4\\text{ cm (5 feet)} + 2.3\\text{ kg per } 2.54\\text{ cm (1 inch) over 5 feet} \\end{aligned}$$',
              '$$\\begin{aligned} &\\textbf{পুরুষ:} \\quad \\text{প্রথম ৫ ফুটের (১৫২.৪ সেমি) জন্য } ৪৮.০\\text{ কেজি} + \\text{৫ ফুটের ওপরে প্রতি ইঞ্চির জন্য } ২.৭\\text{ কেজি} \\\\ &\\textbf{নারী:} \\quad \\text{প্রথম ৫ ফুটের (১৫২.৪ সেমি) জন্য } ৪৫.৫\\text{ কেজি} + \\text{৫ ফুটের ওপরে প্রতি ইঞ্চির জন্য } ২.৩\\text{ কেজি} \\end{aligned}$$'
            ),
            l(
              'In patients with severe obesity (BMI $\\ge 30.0\\text{ kg/m}^2$), calculating energy or protein prescriptions from actual body weight leads to dangerous hypercaloric overfeeding, because excess adipose tissue consumes only about 20–25% of the metabolic energy required by lean skeletal muscle [4]. Therefore, clinicians calculate **Adjusted Body Weight (AdjBW)**:',
              'স্থূলতায় আক্রান্ত রোগীদের ক্ষেত্রে (বিএমআই $\\ge ৩০.০\\text{ kg/m}^2$) প্রকৃত ওজনের ওপর ভিত্তি করে খাবার বা প্রোটিন হিসাব করলে মারাত্মক ওভারফিডিং বা অতিরিক্ত খাবারের ঝুঁকি তৈরি হয়; কারণ দেহের অতিরিক্ত চর্বি সচল মাংসপেশির তুলনায় মাত্র ২০-২৫% মেটাবলিক ক্যালোরি ব্যবহার করে [4]। তাই চিকিৎসকরা **অ্যাডজাস্টেড বা সমন্বিত ওজন (AdjBW)** ব্যবহার করেন:'
            ),
            l(
              '$$\\text{AdjBW} = \\text{IBW} + 0.40 \\times (\\text{Actual Weight} - \\text{IBW})$$',
              '$$\\text{AdjBW} = \\text{IBW} + ০.৪০ \\times (\\text{প্রকৃত ওজন} - \\text{IBW})$$'
            ),
            l(
              'Concurrently, **Percentage Weight Loss Velocity** is calculated to assess the acute severity of nutritional depletion [2]:',
              'একই সাথে পুষ্টি ঘাটতির তাৎক্ষণিক তীব্রতা নির্ধারণ করতে **অনিচ্ছাকৃত ওজন হ্রাসের শতকরা গতি** পরিমাপ করা হয় [2]:'
            ),
            l(
              '$$\\% \\text{ Weight Loss} = \\frac{\\text{Usual Weight} - \\text{Current Weight}}{\\text{Usual Weight}} \\times 100$$',
              '$$\\% \\text{ ওজন হ্রাস} = \\frac{\\text{স্বাভাবিক পূর্ববর্তী ওজন} - \\text{বর্তমান শুকনো ওজন}}{\\text{স্বাভাবিক পূর্ববর্তী ওজন}} \\times ১০০$$'
            ),
            l(
              'Clinical thresholds established by ASPEN and the Academy of Nutrition and Dietetics categorize severe non-volitional weight loss as $>2\\%$ in 1 week, $>5\\%$ in 1 month, $>7.5\\%$ in 3 months, or $>10\\%$ in 6 months [2]. Exceeding any of these temporal velocity gates confirms severe metabolic depletion.',
              'আন্তর্জাতিক ASPEN নির্দেশিকা অনুযায়ী তীব্র অনিচ্ছাকৃত ওজন হ্রাসের মাপকাঠি হলো: ১ সপ্তাহে >২%, ১ মাসে >৫%, ৩ মাসে >৭.৫%, অথবা ৬ মাসে >১০% ওজন হ্রাস [2]। এই সময়ের সীমার যেকোনো একটি অতিক্রম করলেই রোগীর দেহে মারাত্মক পুষ্টি ঘাটতি নিশ্চিত হয়।'
            ),
          ],
        },
        {
          id: 'sec-biochemical',
          heading: l('3. Biochemical Diagnostics: Negative Acute-Phase Reactants vs Somatic Reserves', '৩. জৈবরাসায়নিক পরীক্ষা: নেগেটিভ একিউট-ফেজ প্রোটিন বনাম শারীরিক প্রোটিন ভাণ্ডার'),
          paragraphs: [
            l(
              'Blood biomarkers provide quantifiable molecular indices of systemic inflammation, organ function, and micronutrient status [3]. In clinical dietetics, the interpretation of visceral hepatic proteins represents one of the most critical paradigm shifts in contemporary medicine. Serum albumin (biological half-life $\\approx 20\\text{ days}$) and prealbumin (transthyretin, half-life $\\approx 2\\text{ days}$) were historically assumed to mirror dietary protein intake.',
              'রক্তের বায়োমার্কারগুলো সিস্টেমিক প্রদাহ, অঙ্গের কার্যকারিতা এবং ভিটামিন-খনিজের সুনির্দিষ্ট আণবিক সূচক প্রকাশ করে [3]। ক্লিনিক্যাল ডায়েটেটিক্সে যকৃতে তৈরি প্রোটিনগুলোর সঠিক ব্যাখ্যা আধুনিক চিকিৎসাবিজ্ঞানের অন্যতম প্রধান বাঁক। রক্তরসের অ্যালবুমিন (অর্ধায়ু প্রায় ২০ দিন) এবং প্রিঅ্যালবুমিনকে (অর্ধায়ু প্রায় ২ দিন) অতীতে খাবারের প্রোটিন গ্রহণের প্রতিফলন বলে ধরে নেওয়া হতো।'
            ),
            l(
              'Authoritative position papers from ASPEN have demonstrated that circulating albumin and prealbumin concentrations correlate with the magnitude of the systemic inflammatory response, not with somatic protein reserves or caloric adequacy [3]. Under the influence of pro-inflammatory cytokines, hepatic transcription factors down-regulate albumin synthesis while up-regulating positive acute-phase reactants (C-reactive protein, ferritin, fibrinogen). Simultaneously, systemic capillary permeability increases, shifting albumin into the extravascular space.',
              'ASPEN-এর আন্তর্জাতিক অবস্থানপত্রে স্পষ্টভাবে প্রমাণিত হয়েছে যে রক্তরসের অ্যালবুমিন ও প্রিঅ্যালবুমিনের মাত্রা শারীরিক প্রোটিন ভাণ্ডার নয়, বরং সিস্টেমিক প্রদাহের তীব্রতার সাথে সরাসরি সম্পর্কিত [3]। প্রদাহজনক সাইটোকাইনের প্রভাবে যকৃৎ অ্যালবুমিন উৎপাদন বন্ধ করে জরুরি ডিফেন্স প্রোটিন (CRP, ফেরিটিন, ফাইব্রিনোজেন) তৈরি শুরু করে। পাশাপাশি রক্তনালির ভেদ্যতা বেড়ে অ্যালবুমিন ইন্টারস্টিশিয়াল স্পেসে চলে যায়।'
            ),
            l(
              'Therefore, an ICU patient with sepsis and an albumin of $1.9\\text{ g/dL}$ does not suffer from pure dietary protein deficiency; they suffer from massive cytokine-mediated capillary leak and hepatic metabolic reprioritization [3]. True somatic protein evaluation must rely on physical exam and nitrogen balance kinetics rather than visceral protein blood levels.',
              'সুতরাং সেপসিসে আক্রান্ত কোনো আইসিইউ রোগীর রক্তে অ্যালবুমিন ১.৯ g/dL হওয়ার মানে এই নয় যে তিনি খাবারে প্রোটিন কম পেয়েছেন; এর আসল কারণ হলো সাইটোকাইনের প্রভাবে রক্তনালি চুইয়ে প্রোটিন বের হয়ে যাওয়া এবং যকৃতের মেটাবলিক পুনর্গঠন [3]। শরীরের প্রকৃত প্রোটিন অবস্থা জানতে হলে রক্তের অ্যালবুমিনের বদলে শারীরিক পরীক্ষা (NFPE) এবং নাইট্রোজেন ব্যালেন্সের ওপর নির্ভর করতে হবে।'
            ),
          ],
        },
        {
          id: 'sec-nfpe',
          heading: l('4. Nutrition-Focused Physical Exam: Somatic Palpation & Edema Staging', '৪. পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা: মাংসপেশি স্পর্শ পরীক্ষা ও এডিমা গ্রেডিং'),
          paragraphs: [
            l(
              'The Nutrition-Focused Physical Examination (NFPE) is a head-to-toe clinical assessment conducted by qualified dietitians to physically identify muscle wasting, subcutaneous fat depletion, and fluid abnormalities [5]. Unlike a standard medical examination that listens for murmurs or wheezes, the NFPE systematically inspects and palpates anatomical landmarks.',
              'পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE) হলো যোগ্য পুষ্টিবিদদের দ্বারা পরিচালিত মাথা থেকে পা পর্যন্ত একটি সুশৃঙ্খল শারীরিক পরীক্ষা, যার মাধ্যমে সরাসরি হাত দিয়ে ছুঁয়ে পেশি ক্ষয়, চর্বি হ্রাস এবং ফ্লুইড অস্বাভাবিকতা শনাক্ত করা হয় [5]। সাধারণ মেডিকেল পরীক্ষার মতো কেবল স্টেথোস্কোপ দিয়ে শোনার বদলে NFPE রোগীর নির্দিষ্ট শারীরিক স্থানগুলো সরাসরি পর্যবেক্ষণ ও স্পর্শ করে।'
            ),
            l(
              'Muscle loss is evaluated across bilateral upper and lower body zones: temporalis muscles (inspecting for temporal scooping), clavicular pectoralis major and deltoid muscles (observing protruding clavicles and square shoulders), interosseous and thenar muscles of the hands (palpating thumb web pads), and the quadriceps and gastrocnemius muscles of the legs [2, 5]. Loss of subcutaneous adipose fat is palpated beneath the orbital eyes, over the triceps muscle, and along the lower mid-axillary ribs.',
              'মাংসপেশির ক্ষয় শরীরের উভয় পাশের নির্দিষ্ট স্থানে পরীক্ষা করা হয়: টেম্পোরাল পেশি (কপালের পাশের গর্ত দেখা), কলারবোন ও কাঁধের পেশি (হাড় বেরিয়ে যাওয়া ও চৌকো কাঁধ দেখা), হাতের বৃদ্ধাঙ্গুলির গোড়ার পেশি (পেশির পুরুত্ব স্পর্শ করা), এবং পায়ের কোয়াড্রিসেপস ও কাফ পেশি [2, 5]। ত্বকের নিচের চর্বি স্তর পরীক্ষা করা হয় চোখের নিচে (অরবিটাল ফ্যাট প্যাড), হাতের ট্রাইসেপস পেশির চামড়া চিমটি কেটে, এবং পাঁজরের দুই পাশে।'
            ),
            l(
              'Peripheral edema is staged using standardized 5-second digital pressure over the medial malleolus or pretibial surface [5]:\n\n' +
              '• **1+ Edema:** Mild pitting, depth $\\approx 2\\text{ mm}$, rebounds immediately.\n' +
              '• **2+ Edema:** Moderate pitting, depth $\\approx 4\\text{ mm}$, resolves in 10–15 seconds.\n' +
              '• **3+ Edema:** Deep pitting, depth $\\approx 6\\text{ mm}$, persists for >1 minute; extremity looks swollen.\n' +
              '• **4+ Edema:** Very deep pitting, depth $\\approx 8\\text{ mm}$, persists for 2–5 minutes; gross extremity distortion.',
              'শরীরে পানি জমার মাত্রা (Peripheral Edema) পায়ের গোড়ালি বা নলার হাড়ের ওপর বুড়ো আঙুল দিয়ে পূর্ণ ৫ সেকেন্ড চাপ দিয়ে নির্ণয় করা হয় [5]:\n\n' +
              '• **১+ এডিমা:** মৃদু গর্ত, গভীরতা প্রায় ২ মিলিমিটার, আঙুল সরালেই তৎক্ষণাৎ মিলিয়ে যায়।\n' +
              '• **২+ এডিমা:** মাঝারি গর্ত, গভীরতা প্রায় ৪ মিলিমিটার, ১০ থেকে ১৫ সেকেন্ডে স্বাভাবিক হয়।\n' +
              '• **৩+ এডিমা:** গভীর গর্ত, গভীরতা প্রায় ৬ মিলিমিটার, ১ মিনিটের বেশি স্থায়ী থাকে এবং হাত-পা দৃশ্যত ফোলা দেখায়।\n' +
              '• **৪+ এডিমা:** মারাত্মক গভীর গর্ত, গভীরতা প্রায় ৮ মিলিমিটার, ২ থেকে ৫ মিনিট পর্যন্ত দেবে থাকে এবং অঙ্গটি তীব্রভাবে ফুলে বিকৃত দেখায়।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-glim-advanced',
          heading: l('1. The GLIM Global Consensus Diagnostic Framework', '১. অপুষ্টির আন্তর্জাতিক গ্লিম (GLIM) ঐকমত্য রোগনির্ণয় কাঠামো'),
          paragraphs: [
            l(
              'In 2019, the world’s major clinical nutrition societies—including ASPEN, ESPEN, FELANPE, and PENSA—joined together to publish the **Global Leadership Initiative on Malnutrition (GLIM)** consensus framework [1]. Prior to GLIM, dozens of conflicting diagnostic systems created confusion in research and clinical trials. GLIM established a universal, two-tier diagnostic architecture requiring both a **Phenotypic** manifestation and an **Etiologic** driver.',
              '২০১৯ সালে বিশ্বের প্রধান ক্লিনিক্যাল পুষ্টি সংগঠনসমূহ—যেমন ASPEN (উত্তর আমেরিকা), ESPEN (ইউরোপ), FELANPE (ল্যাটিন আমেরিকা) এবং PENSA (এশিয়া)—একত্রিত হয়ে প্রকাশ করে আন্তর্জাতিক **গ্লিম (GLIM) ঐকমত্য নির্দেশিকা** [1]। এর আগে বিশ্বজুড়ে বিচ্ছিন্ন ও ভিন্ন ভিন্ন সংজ্ঞা থাকার কারণে চিকিৎসা ও গবেষণায় বিভ্রান্তি তৈরি হতো। GLIM একটি সর্বজনীন দ্বি-স্তরীয় কাঠামো প্রতিষ্ঠা করে, যেখানে অপুষ্টি নিশ্চিত করতে একটি দৃশ্যমান শারীরিক ক্ষতি বা **ফেনোটাইপিক লক্ষণ** এবং একটি পেছনের মূল কারণ বা **এটিওলজিক কারণ** একসাথে থাকা বাধ্যতামূলক।'
            ),
            l(
              '$$\\textbf{GLIM Diagnosis} = \\Big[\\ge 1\\text{ Phenotypic Criterion}\\Big] \\quad + \\quad \\Big[\\ge 1\\text{ Etiologic Criterion}\\Big]$$',
              '$$\\textbf{GLIM রোগনির্ণয়} = \\Big[\\ge ১\\text{ ফেনোটাইপিক শারীরিক মানদণ্ড}\\Big] \\quad + \\quad \\Big[\\ge ১\\text{ এটিওলজিক মূল কারণ}\\Big]$$'
            ),
            l(
              'The **Three Phenotypic Criteria** evaluate the physical damage to the human organism [1]:\n' +
              '1. *Non-volitional Weight Loss:* $>5\\%$ within past 6 months, or $>10\\%$ beyond 6 months.\n' +
              '2. *Low Body Mass Index:* $<18.5\\text{ kg/m}^2$ if under 70 years, or $<20.0\\text{ kg/m}^2$ if $\\ge 70$ years (Asian cutoffs: $<18.5$ and $<20.0$ respectively).\n' +
              '3. *Reduced Muscle Mass:* Objectively confirmed by bioelectrical impedance analysis (BIA), dual-energy X-ray absorptiometry (DXA), abdominal computed tomography (CT), or validated NFPE physical exam.',
              '**তিনটি ফেনোটাইপিক শারীরিক মানদণ্ড** দেহের দৃশ্যমান ক্ষতি পরিমাপ করে [1]:\n' +
              '১. *অনিচ্ছাকৃত ওজন হ্রাস:* গত ৬ মাসে >৫% ওজন হ্রাস, অথবা ৬ মাসের বেশি সময়ে >১০% ওজন হ্রাস।\n' +
              '২. *নিম্ন বডি ম্যাস ইনডেক্স:* ৭০ বছরের নিচে বিএমআই <১৮.৫ kg/m², অথবা ৭০ বছর বা তার বেশি বয়সে বিএমআই <২০.০ kg/m²।\n' +
              '৩. *পেশি ভরের হ্রাস:* বায়োইলেকট্রিক্যাল ইম্পিডেন্স (BIA), ডুয়াল-এনার্জি এক্স-রে (DXA), পেটের সিটি স্ক্যান (CT), অথবা শারীরিক পরীক্ষার (NFPE) মাধ্যমে প্রমাণিত পেশিক্ষয়।'
            ),
            l(
              'The **Two Etiologic Criteria** identify the underlying biological force driving the depletion [1]:\n' +
              '1. *Reduced Food Intake or Assimilation:* $\\le 50\\%$ of energy requirements for $>1$ week, any reduction for $>2$ weeks, or chronic gastrointestinal malabsorption (short bowel syndrome, severe Crohn’s, pancreatic exocrine insufficiency).\n' +
              '2. *Disease Burden / Inflammation:* Acute severe disease (sepsis, burns, trauma, major surgery, ARDS) or chronic inflammation (metastatic cancer, chronic kidney disease, COPD, congestive heart failure), verified by elevated serum CRP, fever, or leukocytosis.',
              '**দুটি এটিওলজিক মূল কারণ** পুষ্টি ক্ষয়ের পেছনের জৈবিক চালিকাশক্তি শনাক্ত করে [1]:\n' +
              '১. *খাদ্য গ্রহণ বা শোষণে ঘাটতি:* ১ সপ্তাহের বেশি সময় ধরে চাহিদার $\\le ৫০\\%$ খাবার খাওয়া, অথবা ২ সপ্তাহের বেশি সময় যেকোনো খাদ্য ঘাটতি, অথবা অন্ত্রের শোষণ ত্রুটি (যেমন ক্রোনস ডিজিজ, শর্ট বাওয়েল সিন্ড্রোম)।\n' +
              '২. *রোগের তীব্রতা বা প্রদাহ:* তীব্র জরুরি রোগ (সেপসিস, মারাত্মক পোড়া, পলিট্রম্যা, প্রধান অস্ত্রোপচার) অথবা দীর্ঘস্থায়ী প্রদাহজনিত রোগ (ক্যান্সার, কিডনি ফেইলিউর, হার্ট ফেইলিউর), যা রক্তে উচ্চ CRP বা জ্বর দ্বারা প্রমাণিত।'
            ),
            l(
              'Once diagnosed, malnutrition is graded into **Stage 1 (Moderate)** or **Stage 2 (Severe)** based strictly on phenotypic severity [1]. For example, weight loss $>10\\%$ in 6 months or BMI $<17.0\\text{ kg/m}^2$ immediately classifies the patient as Stage 2 Severe Malnutrition, mandating intensive nutritional resuscitation.',
              'রোগনির্ণয় নিশ্চিত হওয়ার পর ফেনোটাইপিক ক্ষতির ওপর ভিত্তি করে একে **গ্রেড ১ (মাঝারি)** অথবা **গ্রেড ২ (তীব্র)** অপুষ্টিতে ভাগ করা হয় [1]। যেমন—৬ মাসে >১০% ওজন হ্রাস বা বিএমআই <১৭.০ kg/m² হলে তা সরাসরি গ্রেড ২ তীব্র অপুষ্টি হিসেবে গণ্য হয়, যার জন্য হাসপাতালে অবিলম্বে নিবিড় পুষ্টি চিকিৎসা শুরু করা বাধ্যতামূলক।'
            ),
          ],
        },
        {
          id: 'sec-anthropometry',
          heading: l('2. Advanced Body Composition: BIA Phase Angle & CT L3 Skeletal Muscle Index', '২. উন্নত বডি কম্পোজিশন: BIA ফেজ অ্যাঙ্গেল ও CT L3 স্কেলিটাল মাসল ইনডেক্স'),
          paragraphs: [
            l(
              'While manual physical exam provides bedside utility, advanced clinical nutrition research relies on biophysical and radiologic body composition metrics to detect occult sarcopenia [1, 6]. **Bioelectrical Impedance Analysis (BIA)** introduces a safe, imperceptible alternating electrical current through the body to measure Resistance ($R$, the opposition to current flow through intracellular water) and Reactance ($X_c$, the capacitive resistance created by healthy cell membranes) [6].',
              'যদিও শয্যাপাশে শারীরিক পরীক্ষা দ্রুত তথ্য দেয়, উন্নত ক্লিনিক্যাল গবেষণায় লুকায়িত পেশি ক্ষয় (Sarcopenia) নির্ভুলভাবে পরিমাপ করতে জৈব-পদার্থবিজ্ঞান ও রেডিওলজির সাহায্য নেওয়া হয় [1, 6]। **বায়োইলেকট্রিক্যাল ইম্পিডেন্স অ্যানালাইসিস (BIA)** শরীরের মধ্য দিয়ে একটি নিরাপদ ও অতি মৃদু বিকল্প বিদ্যুৎ প্রবাহ পাঠিয়ে টিস্যুর রোধ ($R$) এবং কোষঝিল্লির ক্যাপাসিটিভ রিঅ্যাক্ট্যান্স ($X_c$) পরিমাপ করে [6]। এর থেকে **BIA ফেজ অ্যাঙ্গেল ($\\alpha$)** হিসাব করা হয়:'
            ),
            l(
              '$$\\alpha = \\arctan\\left(\\frac{X_c}{R}\\right) \\times \\left(\\frac{180}{\\pi}\\right)$$',
              '$$\\alpha = \\arctan\\left(\\frac{X_c}{R}\\right) \\times \\left(\\frac{১৮০}{\\pi}\\right)$$'
            ),
            l(
              'The Phase Angle directly quantifies cell membrane integrity and the vitality of living somatic cells [6]. A low phase angle ($<4.5^{\\circ}\\text{--}5.0^{\\circ}$) indicates damaged cell membranes and severe loss of lean muscle mass, serving as an independent predictor of hospital readmission and mortality in oncology and ICU patients.',
              'ফেজ অ্যাঙ্গেল সরাসরি কোষঝিল্লির অখণ্ডতা এবং জীবিত কোষীয় ভরের সুস্থতার প্রমাণ দেয় [6]। কম ফেজ অ্যাঙ্গেল ($<৪.৫^{\\circ}\\text{--}৫.০^{\\circ}$) দুর্বল কোষঝিল্লি ও ভয়াবহ পেশিক্ষয়ের ইঙ্গিত দেয়, যা ক্যান্সার ও আইসিইউ রোগীদের ক্ষেত্রে মৃত্যুর ঝুঁকির শক্তিশালী পূর্বাভাসক হিসেবে কাজ করে।'
            ),
            l(
              'In clinical oncology and hepatology, abdominal computed tomography (CT) scans acquired at the third lumbar vertebra ($L_3$) represent the gold standard for body composition [1]. Diagnostic imaging software segments skeletal muscle area ($cm^2$), which is divided by height squared to produce the **Skeletal Muscle Index (SMI, $cm^2/m^2$)**: Sarcopenia is established when SMI falls below $<55\\text{ cm}^2/m^2$ in men or $<39\\text{ cm}^2/m^2$ in women [1].',
              'ক্যান্সার ও লিভারের জটিল রোগে তৃতীয় লাম্বার কশেরুকা ($L_3$) বরাবর পেট স্ক্যান করে পেশির প্রস্থচ্ছেদ ক্ষেত্রফল ($cm^2$) মাপা হয় [1]। একে উচ্চতার বর্গ দিয়ে ভাগ করে **স্কেলিটাল মাসল ইনডেক্স (SMI, $cm^2/m^2$)** বের করা হয়: পুরুষদের ক্ষেত্রে SMI $<৫৫\\text{ cm}^2/m^2$ এবং নারীদের ক্ষেত্রে $<৩৯\\text{ cm}^2/m^2$ এর নিচে নামলে নিশ্চিত সারকোপেনিয়া বা মারাত্মক পেশি ক্ষয় শনাক্ত হয় [1]। এটি বাহ্যিকভাবে মোটা কিন্তু ভেতরে পেশিশূন্য রোগীদের নির্ভুলভাবে চিহ্নিত করে।'
            ),
          ],
        },
        {
          id: 'sec-biochemical',
          heading: l('3. Molecular Cytokine Signaling: The Hepatic Acute-Phase Response Switch', '৩. আণবিক সাইটোকাইন সংকেত: যকৃতে একিউট-ফেজ প্রতিক্রিয়া পরিবর্তনের বায়োকেমিস্ট্রি'),
          paragraphs: [
            l(
              'The molecular pathway governing hypoalbuminemia explains why serum visceral proteins fail as markers of nutrition in acute illness [3]. When bacterial lipopolysaccharide (LPS) or traumatic tissue injury activates macrophages and monocytes, they secrete large quantities of pro-inflammatory cytokines, predominantly Interleukin-6 ($IL\\text{-}6$), Interleukin-1 beta ($IL\\text{-}1\\beta$), and Tumor Necrosis Factor-alpha ($TNF\\text{-}\\alpha$).',
              'রক্তে অ্যালবুমিন কমে যাওয়ার আণবিক প্রক্রিয়া পরিষ্কারভাবে ব্যাখ্যা করে কেন তীব্র অসুস্থতায় অ্যালবুমিন দেখে পুষ্টির স্তর বিচার করা যায় না [3]। যখন ব্যাকটেরিয়াল এন্ডোটক্সিন বা টিস্যুর আঘাত ম্যাক্রোফেজ কোষগুলোকে উদ্দীপ্ত করে, তখন তারা প্রচুর পরিমাণে প্রদাহজনক সাইটোকাইন—বিশেষ করে ইন্টারলিউকিন-৬ ($IL\\text{-}6$), ইন্টারলিউকিন-১ বিটা ($IL\\text{-}1\\beta$) এবং টিউমার নেক্রোসিস ফ্যাক্টর-আলফা ($TNF\\text{-}\\alpha$) নিঃসরণ করে।'
            ),
            l(
              'Circulating $IL\\text{-}6$ binds to glycoprotein 130 ($gp130$) receptor complexes on hepatocyte cell membranes, activating the intracellular Janus kinase / signal transducer and activator of transcription ($JAK\\text{/}STAT3$) signaling cascade [3]. Phosphorylated STAT3 dimers translocate into the hepatocyte nucleus, binding to specific promoter regions that rapidly trigger high-volume transcription of positive acute-phase survival proteins: C-reactive protein (CRP), serum amyloid A (SAA), and fibrinogen.',
              'রক্তে ভাসমান $IL\\text{-}6$ যকৃৎ কোষের ঝিল্লিতে থাকা $gp130$ রিসেপ্টরে যুক্ত হয় এবং কোষের ভেতরে $JAK\\text{/}STAT3$ সংকেত পথকে তীব্রভাবে সক্রিয় করে [3]। ফসফোরাইলেটেড STAT3 অণুগুলো যকৃতের নিউক্লিয়াসে প্রবেশ করে জরুরি সারভাইভাল প্রোটিনের জিনগুলোকে চালু করে দেয়—যার ফলে সি-রিঅ্যাক্টিভ প্রোটিন (CRP), সিরাম অ্যামাইলয়েড A এবং ফাইব্রিনোজেনের উৎপাদন মুহূর্তের মধ্যে কয়েকশ গুণ বেড়ে যায়।'
            ),
            l(
              'Concurrently, $IL\\text{-}6$ and $TNF\\text{-}\\alpha$ repress the liver transcription factor $HNF\\text{-}1\\alpha$ (hepatocyte nuclear factor-1 alpha), severely down-regulating albumin gene transcription [3]. Albumin production plummets not because amino acids are depleted, but because the cell’s ribosomal machinery is genetically conscripted for immune survival. Understanding this molecular switch prevents clinicians from falsely blaming dietary intake for inflammatory laboratory values.',
              'একই সময়ে $IL\\text{-}6$ এবং $TNF\\text{-}\\alpha$ যকৃতের প্রধান ট্রান্সক্রিপশন ফ্যাক্টর $HNF\\text{-}1\\alpha$-কে দমন করে অ্যালবুমিনের জিন প্রতিলিপি বন্ধ করে দেয় [3]। রক্তে অ্যালবুমিন কমে যাওয়ার কারণ অ্যামাইনো অ্যাসিডের অভাব নয়, বরং কোষের পুরো শক্তি ও রাইবোজোম যন্ত্রপাতি রোগপ্রতিরোধ যুদ্ধে নিয়োজিত হওয়া। এই আণবিক সুইচটি বুঝতে পারলে চিকিৎসকরা কখনো প্রদাহের কারণে ঘটা পরিবর্তনকে ভুল করে অনাহার বলে চিহ্নিত করবেন না।'
            ),
          ],
        },
        {
          id: 'sec-worked-cases',
          heading: l('4. Quantitative Clinical Case Study: Surgical Oncology Malnutrition Decision', '৪. বাস্তব ক্লিনিক্যাল কেস স্টাডি: সার্জিক্যাল অনকোলজিতে পুষ্টি মূল্যায়ন ও সিদ্ধান্ত'),
          paragraphs: [
            l(
              '**Clinical Case Profile:** A 64-year-old male with Stage III colon cancer is admitted for elective hemicolectomy. Height: $178\\text{ cm}$ ($70\\text{ inches}$). Usual weight: $84\\text{ kg}$. Current dry weight: $71\\text{ kg}$ over 4 months. Serum Albumin: $2.9\\text{ g/dL}$, hs-CRP: $38\\text{ mg/L}$. Physical exam reveals marked temporal wasting and visible clavicular ridges; no peripheral edema.',
              '**বাস্তব কেস বিবরণ:** ৬৪ বছর বয়সী একজন পুরুষ কোলন ক্যান্সারে অস্ত্রোপচারের জন্য হাসপাতালে ভর্তি হয়েছেন। তার উচ্চতা ১৭৮ সেমি (৭০ ইঞ্চি)। ৪ মাস আগে তার স্বাভাবিক ওজন ছিল ৮৪ কেজি। বর্তমান শুকনো ওজন ৭১ কেজি। রক্তে অ্যালবুমিন: ২.৯ g/dL, প্রদাহ মার্কার hs-CRP: ৩৮ mg/L (স্বাভাবিকের চেয়ে অনেক বেশি)। শারীরিক পরীক্ষায় কপালের দুই পাশে সুস্পষ্ট গর্ত ও কলারবোনের খাঁজ দেখা গেছে; কোনো এডিমা নেই।'
            ),
            l(
              '**Step 1: Calculate Ideal Body Weight (Hamwi):**\n$$\\text{IBW} = 48.0\\text{ kg} + 2.7 \\times (70 - 60) = 48.0 + 27.0 = 75.0\\text{ kg}$$\n**Step 2: Calculate Percentage Weight Loss:**\n$$\\% \\text{ Loss} = \\frac{84 - 71}{84} \\times 100 = \\frac{13}{84} \\times 100 = 15.5\\% \\text{ in 4 months}$$\nThis far exceeds the $>7.5\\%$ threshold for 3 months, qualifying as **severe non-volitional weight loss** [2].',
              '**ধাপ ১: আদর্শ দেহের ওজন (Hamwi) হিসাব:**\n$$\\text{IBW} = ৪৮.০\\text{ কেজি} + ২.৭ \\times (৭০ - ৬০) = ৪৮.০ + ২৭.০ = ৭৫.০\\text{ কেজি}$$\n**ধাপ ২: শতকরা ওজন হ্রাস হিসাব:**\n$$\\% \\text{ ক্ষতি} = \\frac{৮৪ - ৭১}{৮৪} \\times ১০০ = \\frac{১৩}{৮৪} \\times ১০০ = ১৫.৫\\% \\text{ (৪ মাসে)}$$\nএটি ৩ মাসের >৭.৫% সীমা অনেকখানি ছাড়িয়ে যাওয়ায় **তীব্র অনিচ্ছাকৃত ওজন হ্রাস** হিসেবে প্রমাণিত হয় [2]।'
            ),
            l(
              '**Step 3: GLIM Consensus Evaluation:**\n' +
              '• *Phenotypic Criterion Met:* Severe involuntary weight loss ($15.5\\% > 5\\%$) AND severe temporalis muscle wasting on NFPE (meets Criteria 1 and 3) [1].\n' +
              '• *Etiologic Criterion Met:* Active systemic inflammation driven by colon adenocarcinoma ($hs\\text{-CRP } 38\\text{ mg/L} > 5\\text{ mg/L}$) (meets Criterion 2) [1].\n' +
              '• *Definitive Diagnosis:* **Severe Malnutrition in the Context of Chronic Disease with Active Inflammation (GLIM Stage 2)**. Serum albumin of $2.9\\text{ g/dL}$ corroborates inflammatory cytokine activity rather than diagnosing the condition alone [1, 3].',
              '**ধাপ ৩: GLIM আন্তর্জাতিক মানদণ্ডে রোগনির্ণয়:**\n' +
              '• *শারীরিক মানদণ্ড (Phenotypic):* তীব্র ওজন হ্রাস (১৫.৫% > ৫%) এবং শারীরিক পরীক্ষায় স্পষ্ট টেম্পোরাল পেশিক্ষয় [1]।\n' +
              '• *মূল কারণ (Etiologic):* কোলন ক্যান্সারের টিউমারজনিত সিস্টেমিক প্রদাহ (hs-CRP ৩৮ mg/L > ৫ mg/L) [1]।\n' +
              '• *চূড়ান্ত রোগনির্ণয়:* **প্রদাহজনিত দীর্ঘস্থায়ী রোগের প্রেক্ষাপটে তীব্র অপুষ্টি (GLIM গ্রেড ২)**। রক্তের অ্যালবুমিন ২.৯ g/dL প্রদাহের তীব্রতার প্রমাণ দেয়, তবে রোগনির্ণয়ের মূল মাপকাঠি নয় [1, 3]।'
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
