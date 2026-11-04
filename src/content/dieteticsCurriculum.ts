import type { CurriculumStatus, CompletionStatus, Localized } from './lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

export type DieteticsCurriculumChapter = {
  id: string
  order: number
  groupId: string
  slug: string
  title: Localized
  summary: Localized
  status: CurriculumStatus
  completionStatus: CompletionStatus
  prerequisiteIds: string[]
  lessonId?: string
  estimatedMinutes: number
}

export type DieteticsCurriculumGroup = {
  id: string
  order: number
  title: Localized
  description: Localized
}

export type DieteticsCurriculum = {
  id: 'subject.dietetics'
  version: number
  updatedAt: string
  groups: DieteticsCurriculumGroup[]
  chapters: DieteticsCurriculumChapter[]
}

export const dieteticsCurriculum: DieteticsCurriculum = {
  id: 'subject.dietetics',
  version: 1,
  updatedAt: '2026-11-03',
  groups: [
    {
      id: 'dietetics.assessment',
      order: 1,
      title: l(
        'Clinical Nutrition Assessment & The Nutrition Care Process',
        'ক্লিনিক্যাল পুষ্টি পরিমাপ ও নিউট্রিশন কেয়ার প্রসেস (NCP)'
      ),
      description: l(
        'Standardized clinical evaluation through the ABCD model (Anthropometry, Biochemistry, Clinical NFPE, and Dietary intake), eNCPT standardized diagnostic terminology, and validated diagnostic workflows for adult and pediatric malnutrition.',
        'ABCD মডেল (অ্যানথ্রোপোমেট্রি, বায়োকেমিস্ট্রি, ক্লিনিক্যাল শারীরিক পরীক্ষা এবং খাদ্যাভ্যাস), eNCPT মানসম্মত রোগনির্ণয় পরিভাষা এবং অপুষ্টি নির্ণয়ের আন্তর্জাতিক বৈজ্ঞানিক কর্মপ্রবাহ।'
      ),
    },
    {
      id: 'dietetics.prescriptions',
      order: 2,
      title: l(
        'Energy, Macronutrient & Fluid Prescription Engines',
        'শক্তি, ম্যাক্রোনিউট্রিয়েন্ট ও তরল ব্যবস্থাপত্র নির্ধারণ'
      ),
      description: l(
        'Algorithmic energy expenditure formulation (Mifflin-St Jeor, Penn State, stress and activity factors), disease-specific protein kinetics, AMDR macronutrient allocation, and fluid-electrolyte balancing.',
        'শক্তি খরচের গাণিতিক সমীকরণ (মিফলিন-সেন্ট জিওর, পেন স্টেট, স্ট্রেস ও অ্যাক্টিভিটি ফ্যাক্টর), রোগভিত্তিক প্রোটিন গতিবিদ্যা, AMDR বিভাজন এবং তরল ও ইলেক্ট্রোলাইট ভারসাম্য।'
      ),
    },
    {
      id: 'dietetics.exchanges',
      order: 3,
      title: l(
        'Food Exchange Systems & Menu Design Mechanics',
        'খাদ্য বিনিময় ব্যবস্থা ও খাদ্যতালিকা প্রণয়ন কৌশল'
      ),
      description: l(
        'Translating nutrient prescriptions into tangible meal portions using standardized exchange lists, Bengali and South Asian cultural staple adaptations, precision carbohydrate counting, and glycemic load engineering.',
        'পুষ্টি ব্যবস্থাপত্রকে খাবারের পরিমাণে রূপান্তর, প্রমিত বিনিময় তালিকা, বাঙালি ও দক্ষিণ এশীয় খাদ্যাভ্যাসের অভিযোজন, কার্বোহাইড্রেট গণনা এবং গ্লাইসেমিক লোড প্রকৌশল।'
      ),
    },
    {
      id: 'dietetics.cardiometabolic',
      order: 4,
      title: l(
        'Cardiometabolic & Endocrine Medical Nutrition Therapy',
        'কার্ডিওমেটাবলিক ও এন্ডোক্রাইন চিকিৎসা পুষ্টি থেরাপি (MNT)'
      ),
      description: l(
        'Evidence-based medical nutrition therapy protocols for Type 1 and Type 2 diabetes mellitus, the anti-hypertensive DASH dietary pattern, atherogenic dyslipidemia lipid management, metabolic syndrome, and PCOS.',
        'টাইপ ১ ও টাইপ ২ ডায়াবেটিস, উচ্চ রক্তচাপের DASH পথ্য, ডিসলিপিডেমিয়া ও এথেরোস্ক্লেরোসিসের কার্ডিয়াক পথ্য, মেটাবলিক সিন্ড্রোম এবং পিসিওএসের প্রমাণভিত্তিক ক্লিনিক্যাল ডায়েট।'
      ),
    },
    {
      id: 'dietetics.organspecific',
      order: 5,
      title: l(
        'Renal, Hepatic & Gastrointestinal Therapeutic Dietetics',
        'বৃক্ক, যকৃত ও পরিপাকতন্ত্রীয় থেরাপিউটিক ডায়েটেটিক্স'
      ),
      description: l(
        'Specialized nutrition interventions for non-dialysis chronic kidney disease, dialysis hypercatabolism, hepatic cirrhosis and ascites, inflammatory bowel disease (Crohn’s and UC), and the 3-phase low-FODMAP protocol for IBS.',
        'ডায়ালাইসিস-পূর্ব ক্রনিক কিডনি ডিজিজ, হেমোডায়ালাইসিস, যকৃতের সিরোসিস ও অ্যাসাইটিস, প্রদাহজনিত অন্ত্রের রোগ (IBD) এবং আইবিএসের ৩-পর্যায়ের লো-FODMAP ডায়েট।'
      ),
    },
    {
      id: 'dietetics.nutritionsupport',
      order: 6,
      title: l(
        'Specialized Clinical & Critical Care Nutrition Support',
        'বিশেষায়িত ক্লিনিক্যাল ও ক্রিটিক্যাল কেয়ার পুষ্টি সমর্থন'
      ),
      description: l(
        'Enteral tube feeding formula selection and infusion regimens, total parenteral nutrition (TPN) compounding and venous access safety, and vigilant prevention of refeeding syndrome.',
        'এন্টারাল টিউব ফিডিং ফর্মুলা নির্বাচন ও প্রদান পদ্ধতি, টোটাল প্যারেন্টেরাল নিউট্রিশন (TPN) এবং রিফিডিং সিন্ড্রোম প্রতিরোধের সতর্ক ক্লিনিক্যাল প্রোটোকল।'
      ),
    },
    {
      id: 'dietetics.lifespan-cases',
      order: 7,
      title: l(
        'Lifespan, Oncology & Critical Clinical Case Decision Trees',
        'জীবনকাল, অনকোলজি ও জটিল ক্লিনিক্যাল কেস ডিসিশন ট্রি'
      ),
      description: l(
        'Medical nutrition therapy for geriatric sarcopenia and pressure ulcers, pediatric growth failure, oncology cachexia, surgical ERAS protocols, and complex multimorbid clinical case decision algorithms.',
        'বার্ধক্যের সারকোপেনিয়া ও ক্ষতের নিরাময়, শিশুদের বৃদ্ধিজনিত সমস্যা, ক্যান্সারের ক্যাকেক্সিয়া, অস্ত্রোপচারের ERAS প্রোটোকল এবং বহুমুখী জটিল রোগের বাস্তব কেস স্টাডি।'
      ),
    },
  ],
  chapters: [
    // Group 1: Clinical Nutrition Assessment & The Nutrition Care Process (Ch 01–05)
    {
      id: 'dietetics.chapter.01',
      order: 1,
      groupId: 'dietetics.assessment',
      slug: 'clinical-nutrition-assessment-abcd',
      title: l(
        '01 · Clinical Nutrition Assessment: The ABCD Model & Anthropometric Diagnostics',
        '০১ · ক্লিনিক্যাল পুষ্টি মূল্যায়ন: এ-বি-সি-ডি মডেল ও নৃতাত্ত্বিক শারীরিক পরিমাপ'
      ),
      summary: l(
        'The foundational four-pillar assessment methodology: Anthropometric indices, biochemical acute-phase dynamics, nutrition-focused physical examination (NFPE), and dietary intake validation.',
        'ক্লিনিক্যাল মূল্যায়নের চার স্তরের ভিত্তি: নৃতাত্ত্বিক সূচক, জৈবরাসায়নিক উপাদান, শারীরিক লক্ষণ পরীক্ষা (NFPE) এবং খাদ্য গ্রহণের বৈজ্ঞানিক বিশ্লেষণ।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: [],
      lessonId: 'topic.dietetics.assessment-abcd',
      estimatedMinutes: 28,
    },
    {
      id: 'dietetics.chapter.02',
      order: 2,
      groupId: 'dietetics.assessment',
      slug: 'ncp-pes-diagnostic-statements',
      title: l(
        '02 · The Nutrition Care Process & Standardized eNCPT PES Diagnostics',
        '০২ · নিউট্রিশন কেয়ার প্রসেস ও প্রমিত ই-এনসিপিটি পিইএস (PES) রোগনির্ণয়'
      ),
      summary: l(
        'Formulating structured nutrition diagnoses using standardized Problem-Etiology-Signs/Symptoms (PES) statements across intake, clinical, and behavioral domains.',
        'ইনটেক, ক্লিনিক্যাল ও আচরণগত ক্ষেত্রে আন্তর্জাতিক মানসম্মত Problem-Etiology-Signs/Symptoms (PES) বাক্যের মাধ্যমে সঠিক পুষ্টি রোগনির্ণয় গঠন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.01'],
      lessonId: 'topic.dietetics.ncp-pes-diagnostics',
      estimatedMinutes: 24,
    },
    {
      id: 'dietetics.chapter.03',
      order: 3,
      groupId: 'dietetics.assessment',
      slug: 'nfpe-physical-exam-micronutrient-signs',
      title: l(
        '03 · Nutrition-Focused Physical Exam (NFPE) & Clinical Muscle-Fat Depletion',
        '০৩ · পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE) ও পেশি-চর্বি ক্ষয় নিরূপণ'
      ),
      summary: l(
        'Systematic physical examination techniques for detecting temporal and clavicular muscle wasting, orbital and thenar fat-pad loss, fluid accumulation, and cutaneous micronutrient deficiency signs.',
        'টেম্পোরাল ও ক্লাভিকুলার পেশি ক্ষয়, চোখের চারপাশের ফ্যাট হ্রাস, তরল জমা (এডিমা) এবং ত্বকে অনুপুষ্টি ঘাটতির শারীরিক লক্ষণ শনাক্তকরণ।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.01'],
      lessonId: 'topic.dietetics.nfpe-physical-exam',
      estimatedMinutes: 26,
    },
    {
      id: 'dietetics.chapter.04',
      order: 4,
      groupId: 'dietetics.assessment',
      slug: 'dietary-intake-methodologies-ffq-recall',
      title: l(
        '04 · Dietary Intake Methodologies: 24-Hour Recalls, FFQ & Bias Quantification',
        '০৪ · খাদ্য গ্রহণ মূল্যায়ন পদ্ধতি: ২৪-ঘণ্টার রিকল, এফএফকিউ ও ভুলের পরিমাপ'
      ),
      summary: l(
        'Automated multiple-pass 24-hour recalls, validated food frequency questionnaires (FFQs), weighted food diaries, and mathematical adjustment for underreporting bias.',
        'মাল্টিপল-পাস ২৪ ঘণ্টার ডায়েটারি রিকল, খাদ্য গ্রহণের পুনরাবৃত্তি প্রশ্নমালা (FFQ), খাবারের ওজনের রেকর্ড এবং কম দেখানোর প্রবণতা দূর করার গাণিতিক কৌশল।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.01'],
      lessonId: 'topic.dietetics.dietary-intake-methodologies',
      estimatedMinutes: 22,
    },
    {
      id: 'dietetics.chapter.05',
      order: 5,
      groupId: 'dietetics.assessment',
      slug: 'laboratory-biomarkers-acute-phase-proteins',
      title: l(
        '05 · Laboratory Diagnostics: Acute-Phase Reactants vs True Nutritional Indices',
        '০৫ · গবেষণাগার নির্ণয়: একিউট-ফেজ প্রোটিন বনাম প্রকৃত পুষ্টি সূচক'
      ),
      summary: l(
        'Distinguishing negative acute-phase reactants (albumin, prealbumin) from genuine somatic protein status in systemic inflammation, alongside comprehensive metabolic panel interpretation.',
        'সিস্টেমিক প্রদাহের সময় নেগেটিভ একিউট-ফেজ প্রোটিন (অ্যালবুমিন, প্রিঅ্যালবুমিন) এবং প্রকৃত প্রোটিন মাত্রার পার্থক্য নিরূপণ ও মেটাবলিক প্যানেল বিশ্লেষণ।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.01'],
      lessonId: 'topic.dietetics.laboratory-biomarkers',
      estimatedMinutes: 25,
    },

    // Group 2: Energy, Macronutrient & Fluid Prescription Engines (Ch 06–10)
    {
      id: 'dietetics.chapter.06',
      order: 6,
      groupId: 'dietetics.prescriptions',
      slug: 'predictive-energy-equations-mifflin-penn',
      title: l(
        '06 · Energy Expenditure Formulation: Mifflin-St Jeor, Penn State & Stress Factors',
        '০৬ · শক্তি খরচের সমীকরণ: মিফলিন-সেন্ট জিওর, পেন স্টেট ও স্ট্রেস গুণক'
      ),
      summary: l(
        'Validated resting metabolic rate equations, activity adjustments, injury factors for sepsis, burns, and surgery, and indirect calorimetry benchmarking.',
        'বিশ্রামকালীন শক্তি খরচের সমীকরণ, শারীরিক কার্যকলাপের সমন্বয়, সেপসিস, পোড়া ও অস্ত্রোপচারের স্ট্রেস ফ্যাক্টর এবং ইনডাইরেক্ট ক্যালোরিমেট্রির মান।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.01'],
      lessonId: 'topic.dietetics.predictive-energy-equations',
      estimatedMinutes: 28,
    },
    {
      id: 'dietetics.chapter.07',
      order: 7,
      groupId: 'dietetics.prescriptions',
      slug: 'protein-requirements-metabolic-stress-kinetics',
      title: l(
        '07 · Clinical Protein Prescriptions: Nitrogen Balance & Hypercatabolic Titration',
        '০৭ · ক্লিনিক্যাল প্রোটিন প্রেসক্রিপশন: নাইট্রোজেন ভারসাম্য ও ক্যাটাবলিক সমন্বয়'
      ),
      summary: l(
        'Determining individual protein targets across health, non-dialysis CKD, hemodialysis, and critical trauma using nitrogen balance kinetics and leucine thresholds.',
        'সুস্থ ব্যক্তি, ডায়ালাইসিস-পূর্ব সিকেডি, ডায়ালাইসিস ও তীব্র ট্রমার রোগীদের জন্য নাইট্রোজেন ভারসাম্য ও লিউসিন থ্রেশহোল্ড অনুযায়ী প্রোটিনের লক্ষ্যমাত্রা নির্ধারণ।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.06'],
      lessonId: 'topic.dietetics.protein-requirements',
      estimatedMinutes: 26,
    },
    {
      id: 'dietetics.chapter.08',
      order: 8,
      groupId: 'dietetics.prescriptions',
      slug: 'macronutrient-distribution-ranges-amdr-goals',
      title: l(
        '08 · Macronutrient Distribution: AMDR Allocation & Clinical Energy Balancing',
        '০৮ · ম্যাক্রোনিউট্রিয়েন্ট বিভাজন: এএমডিআর বণ্টন ও ক্লিনিক্যাল শক্তি ভারসাম্য'
      ),
      summary: l(
        'Balancing acceptable macronutrient distribution ranges (AMDR) for carbohydrates, fats, and proteins according to specific metabolic and endocrine goals.',
        'নির্দিষ্ট বিপাকীয় ও হরমোনজনিত লক্ষ্যের সাথে সঙ্গতি রেখে কার্বোহাইড্রেট, ফ্যাট ও প্রোটিনের গ্রহণযোগ্য বণ্টন (AMDR) নির্ধারণ।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.06', 'dietetics.chapter.07'],
      lessonId: 'topic.dietetics.macronutrient-distribution',
      estimatedMinutes: 22,
    },
    {
      id: 'dietetics.chapter.09',
      order: 9,
      groupId: 'dietetics.prescriptions',
      slug: 'fluid-electrolyte-osmolar-prescriptions',
      title: l(
        '09 · Fluid & Electrolyte Architecture: Osmolar Clearance & Maintenance Formulations',
        '০৯ · তরল ও ইলেক্ট্রোলাইট প্রেসক্রিপশন: অসমোলার ক্লিয়ারেন্স ও রক্ষণাবেক্ষণ'
      ),
      summary: l(
        'Holliday-Segar and weight-based fluid calculations, sensible and insensible losses, serum osmolar gap evaluation, and sodium/potassium titration.',
        'হলHoliday-সেগার ও ওজনের ভিত্তিতে তরলের হিসাব, দৃশ্যমান ও অদৃশ্য ক্ষতি পূরণ, সেরাম অসমোলারিটি এবং সোডিয়াম-পটাশিয়াম অনুপাত নিয়ন্ত্রণ।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.06'],
      lessonId: 'topic.dietetics.fluid-electrolyte-prescriptions',
      estimatedMinutes: 24,
    },
    {
      id: 'dietetics.chapter.10',
      order: 10,
      groupId: 'dietetics.prescriptions',
      slug: 'micronutrient-therapeutic-supplementation-protocols',
      title: l(
        '10 · Therapeutic Micronutrient Prescriptions: Deficiency Repletion Protocols',
        '১০ · থেরাপিউটিক অনুপুষ্টি প্রেসক্রিপশন: ঘাটতি পূরণ ও চিকিৎসা প্রোটোকল'
      ),
      summary: l(
        'Evidence-based high-dose repletion protocols for Vitamin D3, intravenous/oral iron, B12/folate, thiamine, and zinc in severe clinical depletion.',
        'গুরুতর ঘাটতিতে ভিটামিন ডি৩, শিরায় বা মুখে আয়রন, বি১২/ফোলেট, থায়ামিন এবং জিংকের প্রমাণভিত্তিক উচ্চমাত্রার চিকিৎসা প্রোটোকল।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.05'],
      lessonId: 'topic.dietetics.micronutrient-protocols',
      estimatedMinutes: 25,
    },

    // Group 3: Food Exchange Systems & Menu Design Mechanics (Ch 11–15)
    {
      id: 'dietetics.chapter.11',
      order: 11,
      groupId: 'dietetics.exchanges',
      slug: 'standard-food-exchange-system-mechanics',
      title: l(
        '11 · Standard Food Exchange Systems: Macronutrient Portioning Mechanics',
        '১১ · প্রমিত খাদ্য বিনিময় ব্যবস্থা: ম্যাক্রোনিউট্রিয়েন্ট অংশের পুষ্টিবিজ্ঞান'
      ),
      summary: l(
        'Mastering the exchange lists for meal planning: Starches, lean/medium/high-fat meats, non-starchy vegetables, fruits, and fats for precise macronutrient translation.',
        'খাদ্য তালিকা তৈরির বিনিময় ব্যবস্থা: শ্বেতসার, চর্বিহীন/মাঝারি মাংস, শ্বেতসারহীন সবজি, ফল ও তেলের সঠিক গ্রাম ও ক্যালোরি রূপান্তর।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.08'],
      lessonId: 'topic.dietetics.food-exchange-systems',
      estimatedMinutes: 26,
    },
    {
      id: 'dietetics.chapter.12',
      order: 12,
      groupId: 'dietetics.exchanges',
      slug: 'south-asian-bengali-cultural-food-exchanges',
      title: l(
        '12 · Bengali & South Asian Food Exchanges: Regional Carbohydrate & Protein Adaptation',
        '১২ · বাঙালি ও দক্ষিণ এশীয় খাদ্য বিনিময়: আঞ্চলিক ভাত-রুটি ও মাছ-ডালের রূপান্তর'
      ),
      summary: l(
        'Nutrient quantification of parboiled rice, handmade roti, lentils (dal), indigenous fish, traditional greens (shak), and mustard oil in standardized exchange units.',
        'সিদ্ধ চালের ভাত, লাল আটার রুটি, মসুর ডাল, দেশি মাছ, শাকসবজি এবং সরিষার তেলের সঠিক পুষ্টি উপাদানভিত্তিক বিনিময় তালিকা।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.11'],
      lessonId: 'topic.dietetics.south-asian-exchanges',
      estimatedMinutes: 30,
    },
    {
      id: 'dietetics.chapter.13',
      order: 13,
      groupId: 'dietetics.exchanges',
      slug: 'carbohydrate-counting-insulin-to-carb-ratios',
      title: l(
        '13 · Carbohydrate Counting & Advanced Insulin-to-Carbohydrate Ratio (ICR) Planning',
        '১৩ · কার্বোহাইড্রেট গণনা ও উন্নত ইনসুলিন-কার্ব অনুপাত (ICR) পরিকল্পনা'
      ),
      summary: l(
        'Basic and advanced carbohydrate counting, calculating meal boluses with insulin-to-carbohydrate ratios (ICR), and insulin sensitivity factor (ISF) correction rules.',
        'মৌলিক ও উন্নত কার্বোহাইড্রেট গণনা, ইনসুলিন-টু-কার্বোহাইড্রেট রেশিও (ICR) দিয়ে মিল বোলাস নির্ধারণ এবং ইনসুলিন সংবেদনশীলতা ফ্যাক্টর (ISF) সংশোধন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.11'],
      lessonId: 'topic.dietetics.carb-counting-icr',
      estimatedMinutes: 28,
    },
    {
      id: 'dietetics.chapter.14',
      order: 14,
      groupId: 'dietetics.exchanges',
      slug: 'glycemic-index-glycemic-load-menu-engineering',
      title: l(
        '14 · Glycemic Index & Glycemic Load: Precision Meal Engineering',
        '১৪ · গ্লাইসেমিক ইনডেক্স ও গ্লাইসেমিক লোড: নির্ভুল খাবার নকশা'
      ),
      summary: l(
        'Formulating composite meals to attenuate postprandial glycemic excursions using fiber viscosity, intact food architecture, and organic acid additions.',
        'খাবারের আঁশের ঘনত্ব, গোটা দানার গঠন এবং অম্লীয় উপাদানের সমন্বয়ে রক্তে গ্লুকোজের আকস্মিক বৃদ্ধি রোধকারী পথ্য তৈরি।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.11'],
      lessonId: 'topic.dietetics.glycemic-index-load',
      estimatedMinutes: 24,
    },
    {
      id: 'dietetics.chapter.15',
      order: 15,
      groupId: 'dietetics.exchanges',
      slug: 'therapeutic-meal-distribution-circadian-timing',
      title: l(
        '15 · Meal Frequency, Protein Pulsing & Circadian Chrono-Nutrition',
        '১৫ · খাবারের সময়কাল, প্রোটিন পালসিং ও ক্রোনো-নিউট্রিশন'
      ),
      summary: l(
        'Circadian rhythm synchronization with peripheral metabolic clocks, time-restricted eating, and distributing protein into optimal ~25–35 g anabolic pulses.',
        'শরীরের অভ্যন্তরীণ জৈব ঘড়ির সাথে খাদ্যাভ্যাসের সমন্বয়, সীমিত সময়ের খাওয়া (TRE) এবং পেশি পুনর্গঠনের জন্য ২৫-৩৫ গ্রামের প্রোটিন পালসিং বণ্টন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.11'],
      lessonId: 'topic.dietetics.meal-frequency-circadian',
      estimatedMinutes: 28,
    },

    // Group 4: Cardiometabolic & Endocrine Medical Nutrition Therapy (Ch 16–20)
    {
      id: 'dietetics.chapter.16',
      order: 16,
      groupId: 'dietetics.cardiometabolic',
      slug: 'diabetes-mellitus-t1d-t2d-gestational-mnt',
      title: l(
        '16 · Medical Nutrition Therapy for Diabetes Mellitus: T1D, T2D & Gestational Hyperglycemia',
        '১৬ · ডায়াবেটিস মেলিটাসে চিকিৎসা পুষ্টি থেরাপি: T1D, T2D ও গর্ভকালীন ডায়াবেটিস'
      ),
      summary: l(
        'Clinical nutrition guidelines, carbohydrate consistency, managing hypoglycemia risk in insulin-treated patients, and strict glycemic targets in gestational diabetes.',
        'ডায়াবেটিসের ক্লিনিক্যাল খাদ্য নির্দেশিকা, নিয়মিত কার্বোহাইড্রেট বণ্টন, হাইপোগ্লাইসেমিয়া প্রতিরোধ এবং গর্ভকালীন ডায়াবেটিসের কঠোর নিয়ন্ত্রণ।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.13', 'dietetics.chapter.14'],
      lessonId: 'topic.dietetics.diabetes-mnt',
      estimatedMinutes: 30,
    },
    {
      id: 'dietetics.chapter.17',
      order: 17,
      groupId: 'dietetics.cardiometabolic',
      slug: 'hypertension-dash-diet-sodium-potassium-ratio',
      title: l(
        '17 · The Clinical DASH Protocol & Sodium-Potassium Ratio Optimization',
        '১৭ · ক্লিনিক্যাল ড্যাশ (DASH) প্রোটোকল ও সোডিয়াম-পটাশিয়াম অনুপাত'
      ),
      summary: l(
        'Structuring the DASH diet: Sodium reduction to <1,500–2,000 mg/day, optimizing dietary potassium to 4,700 mg/day, and blood pressure reduction dynamics.',
        'ড্যাশ ডায়েট পরিকল্পনা: সোডিয়াম দৈনিক ১৫০০-২০০০ মিলিগ্রামে নামানো, পটাশিয়াম ৪৭০০ মিলিগ্রামে উন্নীতকরণ এবং রক্তচাপ কমানোর গতিপ্রকৃতি।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.09', 'dietetics.chapter.11'],
      estimatedMinutes: 26,
    },
    {
      id: 'dietetics.chapter.18',
      order: 18,
      groupId: 'dietetics.cardiometabolic',
      slug: 'dyslipidemia-cardiac-mediterranean-lipid-targets',
      title: l(
        '18 · Dyslipidemia & Atherosclerosis: Portfolio Diet & SFA-MUFA Replacement Mechanics',
        '১৮ · ডিসলিপিডেমিয়া ও এথেরোস্ক্লেরোসিস: পোর্টফোলিও ডায়েট ও ফ্যাট পরিবর্তন'
      ),
      summary: l(
        'Lowering LDL-C and ApoB through viscous fibers, phytosterols, soy proteins, and systematic replacement of saturated fatty acids with cis-monounsaturated and polyunsaturated fats.',
        'দ্রবণীয় আঁশ, ফাইটোরল ও উদ্ভিদ প্রোটিনের মাধ্যমে এলডিএল এবং অ্যাপো-বি কমানো এবং সম্পৃক্ত চর্বির বদলে অসম্পৃক্ত চর্বির সঠিক ব্যবহার।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.08', 'dietetics.chapter.11'],
      estimatedMinutes: 28,
    },
    {
      id: 'dietetics.chapter.19',
      order: 19,
      groupId: 'dietetics.cardiometabolic',
      slug: 'metabolic-syndrome-insulin-resistance-weight-loss-kinetics',
      title: l(
        '19 · Metabolic Syndrome & Obesity: Energy Deficit Dynamics & Visceral Fat Reduction',
        '১৯ · মেটাবলিক সিন্ড্রোম ও স্থূলতা: শক্তি ঘাটতির গতিবিদ্যা ও ভিসেরাল ফ্যাট হ্রাস'
      ),
      summary: l(
        'Prescribing safe hypocaloric deficits (500–750 kcal/day), preserving fat-free lean body mass with elevated protein, and reversing hepatic insulin resistance.',
        'নিরাপদ ৫০০-৭৫০ ক্যালোরি ঘাটতি তৈরি, উচ্চ প্রোটিনের মাধ্যমে পেশির ক্ষয় রোধ এবং যকৃতের ইনসুলিন প্রতিরোধ ক্ষমতা দূরীকরণ।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.06', 'dietetics.chapter.07'],
      estimatedMinutes: 28,
    },
    {
      id: 'dietetics.chapter.20',
      order: 20,
      groupId: 'dietetics.cardiometabolic',
      slug: 'pcos-endocrinopathies-metabolic-gynecology',
      title: l(
        '20 · PCOS & Endocrine-Metabolic Gynecological Nutrition',
        '২০ · পিসিওএস ও অন্তঃক্ষরা-মেটাবলিক গাইনোকোলজিক্যাল পুষ্টি'
      ),
      summary: l(
        'Targeting hyperinsulinemia, hyperandrogenism, and ovulatory dysfunction in Polycystic Ovary Syndrome through low-glycemic Mediterranean nutrition and inositol supplementation.',
        'পিসিওএসে উচ্চ ইনসুলিন, অ্যান্ড্রোজেন আধিক্য ও ডিম্বস্ফোটন ত্রুটি দূরীকরণে লো-গ্লাইসেমিক ভূমধ্যসাগরীয় খাদ্যাভ্যাস ও মায়ো-ইনোসিটল প্রয়োগ।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.14', 'dietetics.chapter.16'],
      estimatedMinutes: 26,
    },

    // Group 5: Renal, Hepatic & Gastrointestinal Therapeutic Dietetics (Ch 21–25)
    {
      id: 'dietetics.chapter.21',
      order: 21,
      groupId: 'dietetics.organspecific',
      slug: 'ckd-non-dialysis-low-protein-phosphate-binder-mnt',
      title: l(
        '21 · Renal Dietetics: Non-Dialysis CKD Stages 3–5 Low-Protein & Phosphate Titration',
        '২১ · রেনাল ডায়েটেটিক্স: ডায়ালাইসিস-পূর্ব সিকেডি ৩-৫ নিম্ন-প্রোটিন ও ফসফেট নিয়ন্ত্রণ'
      ),
      summary: l(
        'KDOQI clinical practice guidelines: 0.55–0.60 g/kg/day protein prescription, phosphorus restriction to <800–1,000 mg/day, timing phosphate binders, and potassium monitoring.',
        'কেডিওকিউআই গাইডলাইন: দৈনিক ০.৫৫-০.৬০ গ্রাম/কেজি প্রোটিন, ফসফেট ৮০০-১০০০ মিলিগ্রামে সীমাবদ্ধ রাখা, ফসফেট বাইন্ডারের সময়কাল এবং পটাশিয়াম পর্যবেক্ষণ।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.07', 'dietetics.chapter.09'],
      estimatedMinutes: 32,
    },
    {
      id: 'dietetics.chapter.22',
      order: 22,
      groupId: 'dietetics.organspecific',
      slug: 'end-stage-kidney-disease-hemodialysis-peritoneal-dialysis-mnt',
      title: l(
        '22 · End-Stage Kidney Disease: Hemodialysis & Peritoneal Dialysis Hypercatabolism',
        '২২ · শেষ পর্যায়ের কিডনি রোগ: হেমোডায়ালাইসিস ও পেরিটোনিয়াল ডায়ালাইসিসের পথ্য'
      ),
      summary: l(
        'Managing dialytic amino acid losses with elevated protein (1.0–1.2 g/kg/day), interdialytic fluid weight gain limits, and avoiding dialysis malnutrition-inflammation complex.',
        'ডায়ালাইসিসে অ্যামাইনো অ্যাসিড ক্ষয় পূরণে ১.০-১.২ গ্রাম/কেজি প্রোটিন প্রদান, দুটি ডায়ালাইসিসের মাঝে তরল বৃদ্ধি নিয়ন্ত্রণ ও অপুষ্টিনাশক ব্যবস্থা।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.21'],
      estimatedMinutes: 30,
    },
    {
      id: 'dietetics.chapter.23',
      order: 23,
      groupId: 'dietetics.organspecific',
      slug: 'cirrhosis-hepatic-encephalopathy-ascites-mnt',
      title: l(
        '23 · Hepatobiliary Disease: Cirrhosis, Ascites, and Hepatic Encephalopathy BCAA Therapy',
        '২৩ · যকৃত ও পিত্তনালির রোগ: সিরোসিস, অ্যাসাইটিস ও এনসেফালোপ্যাথিতে বিসিএএ পথ্য'
      ),
      summary: l(
        'Sodium restriction for ascites, preventing sarcopenia with frequent meals and late-evening carbohydrate/protein snacks, and branched-chain amino acid (BCAA) supplementation.',
        'অ্যাসাইটিসে সোডিয়াম সীমাবদ্ধতা, রাতে দেরিতে কার্বোহাইড্রেট-প্রোটিন স্ন্যাকসের মাধ্যমে পেশি ক্ষয় রোধ এবং ব্র্যাঞ্চড-চেইন অ্যামাইনো অ্যাসিডের প্রয়োগ।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.07', 'dietetics.chapter.09'],
      estimatedMinutes: 28,
    },
    {
      id: 'dietetics.chapter.24',
      order: 24,
      groupId: 'dietetics.organspecific',
      slug: 'ibd-crohns-ulcerative-colitis-elimination-diets',
      title: l(
        '24 · Inflammatory Bowel Disease: Crohn’s Disease, Ulcerative Colitis & Flare Remission',
        '২৪ · প্রদাহজনক অন্ত্রের রোগ (IBD): ক্রোনস ডিজিজ, আলসারেটিভ কোলাইটিস ও নিরাময় পথ্য'
      ),
      summary: l(
        'Exclusive enteral nutrition (EEN) mechanisms in Crohn’s mucosal healing, low-residue diets during active acute flares, and remission maintenance nutritional strategies.',
        'ক্রোনস রোগে মিউকোসা নিরাময়ে এক্সক্লুসিভ এন্টারাল নিউট্রিশন (EEN), তীব্র প্রদাহকালীন লো-রেসিডিউ পথ্য এবং দীর্ঘমেয়াদী সুস্থতার ডায়েট।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.01', 'dietetics.chapter.07'],
      estimatedMinutes: 28,
    },
    {
      id: 'dietetics.chapter.25',
      order: 25,
      groupId: 'dietetics.organspecific',
      slug: 'low-fodmap-ibs-celiac-gluten-free-protocols',
      title: l(
        '25 · Low-FODMAP IBS Protocol & Celiac Disease Gluten-Free Strict Management',
        '২৫ · লো-FODMAP আইবিএস প্রোটোকল ও সিলিয়াক ডিজিজের গ্লুটেন-মুক্ত পথ্য'
      ),
      summary: l(
        'The Monash 3-phase low-FODMAP protocol (elimination, reintroduction, personalization) for irritable bowel syndrome, and cross-contact avoidance in celiac auto-enteropathy.',
        'আইবিএসে মোনাশ বিশ্ববিদ্যালয়ের ৩-পর্যায়ের লো-FODMAP পদ্ধতি (বর্জন, পুনঃপ্রবর্তন, স্বকীয়করণ) এবং সিলিয়াক রোগে গ্লুটেন দূষণমুক্ত খাদ্য ব্যবস্থাপনা।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.01', 'dietetics.chapter.11'],
      estimatedMinutes: 30,
    },

    // Group 6: Specialized Clinical & Critical Care Nutrition Support (Ch 26–28)
    {
      id: 'dietetics.chapter.26',
      order: 26,
      groupId: 'dietetics.nutritionsupport',
      slug: 'enteral-nutrition-formula-selection-tube-feeding-delivery',
      title: l(
        '26 · Enteral Tube Feeding: Polymeric vs Oligomeric Formulas & Infusion Protocols',
        '২৬ · এন্টারাল টিউব ফিডিং: পলিমেরিক বনাম অলিগোমেরিক ফর্মুলা ও প্রয়োগ পদ্ধতি'
      ),
      summary: l(
        'Access route selection (NG, NJ, PEG, PEJ), closed enteral formula osmolarity, bolus vs continuous pump delivery, and gastric residual volume management.',
        'টিউবের স্থান নির্বাচন (NG, NJ, PEG, PEJ), ফর্মুলার অসমোলারিটি, বোলাস বনাম পাম্পের মাধ্যমে অবিরাম প্রদান এবং গ্যাস্ট্রিক রেসিডিউয়াল ভলিউমের যত্ন।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.06', 'dietetics.chapter.07'],
      estimatedMinutes: 32,
    },
    {
      id: 'dietetics.chapter.27',
      order: 27,
      groupId: 'dietetics.nutritionsupport',
      slug: 'parenteral-nutrition-compounding-tpn-electrolytes-monitoring',
      title: l(
        '27 · Total Parenteral Nutrition (TPN): Osmolarity, Lipid Emulsions & Venous Access Safety',
        '২৭ · টোটাল প্যারেন্টেরাল নিউট্রিশন (TPN): অসমোলারিটি, ফ্যাট ইমালশন ও শিরার নিরাপত্তা'
      ),
      summary: l(
        'Central vs peripheral line limits (>900 mOsm/L), calculating 3-in-1 macronutrient admixtures, preventing catheter-related bloodstream infections, and laboratory monitoring.',
        'সেন্ট্রাল বনাম পেরিফেরাল শিরার সীমা (>৯০০ mOsm/L), ৩-ইন-১ পুষ্টি দ্রবণ তৈরি, ক্যাথেটার সংক্রমণ রোধ এবং রক্তে জটিলতা পর্যবেক্ষণ।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.26'],
      estimatedMinutes: 34,
    },
    {
      id: 'dietetics.chapter.28',
      order: 28,
      groupId: 'dietetics.nutritionsupport',
      slug: 'refeeding-syndrome-prevention-electrolyte-resuscitation',
      title: l(
        '28 · Refeeding Syndrome: Hypophosphatemia Prevention, Thiamine Loading & Caloric Stepping',
        '২৮ · রিফিডিং সিন্ড্রোম: হাইপোফসফেটেমিয়া প্রতিরোধ, থায়ামিন লোডিং ও ক্যালোরি স্টেপিং'
      ),
      summary: l(
        'Pathophysiology of carbohydrate-triggered insulin surges, rapid intracellular shifts of phosphorus, potassium, and magnesium, prophylactic thiamine, and caloric initiation at 10 kcal/kg/day.',
        'কার্বোহাইড্রেটজনিত ইনসুলিনের আকস্মিক বৃদ্ধি, কোষে ফসফরাস-পটাশিয়ামের প্রবেশ, থায়ামিনের দ্রুত প্রয়োগ এবং ১০ ক্যালোরি/কেজি দিয়ে ধীরে ধীরে খাবার শুরুর নিয়ম।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.06', 'dietetics.chapter.26'],
      estimatedMinutes: 28,
    },

    // Group 7: Lifespan, Oncology & Critical Clinical Case Decision Trees (Ch 29–32)
    {
      id: 'dietetics.chapter.29',
      order: 29,
      groupId: 'dietetics.lifespan-cases',
      slug: 'geriatric-sarcopenia-frailty-wound-healing-mnt',
      title: l(
        '29 · Geriatric Sarcopenia, Leucine Thresholds & Pressure Injury Wound Care',
        '২৯ · বার্ধক্যের সারকোপেনিয়া, লিউসিন থ্রেশহোল্ড ও শয্যাক্ষত (বেড সোর) নিরাময়'
      ),
      summary: l(
        'Overcoming anabolic resistance in older adults with 1.2–1.5 g/kg protein and 3 g leucine pulses, and targeted wound healing nutrition (arginine, zinc, ascorbic acid).',
        'বয়স্কদের অ্যানাবলিক রেজিস্ট্যান্স কাটাতে ১.২-১.৫ গ্রাম/কেজি প্রোটিন ও ৩ গ্রাম লিউসিন পালস প্রদান এবং শয্যাক্ষত নিরাময়ে আর্জিনিন, জিংক ও ভিটামিন সি-এর ব্যবহার।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.07', 'dietetics.chapter.15'],
      estimatedMinutes: 28,
    },
    {
      id: 'dietetics.chapter.30',
      order: 30,
      groupId: 'dietetics.lifespan-cases',
      slug: 'pediatric-failure-to-thrive-growth-chart-diagnostics',
      title: l(
        '30 · Pediatric Failure to Thrive & WHO/CDC Growth Trajectory Diagnostics',
        '৩০ · শিশুদের বৃদ্ধিতে স্থবিরতা (FTT) ও ডব্লিউএইচও/সিডিসি গ্রোথ চার্ট বিশ্লেষণ'
      ),
      summary: l(
        'Identifying downward percentile crossing across weight-for-age, height-for-age, and weight-for-length z-scores, calculating catch-up caloric requirements, and feeding therapy.',
        'ওজন ও উচ্চতার পার্সেন্টাইল হ্রাস চিহ্নিতকরণ, দ্রুত ঘাটতি পূরণে ক্যালোরির পরিমাপ (ক্যাচ-আপ গ্রোথ) এবং শিশুদের পুষ্টি পুনরুদ্ধার থেরাপি।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.01', 'dietetics.chapter.06'],
      estimatedMinutes: 28,
    },
    {
      id: 'dietetics.chapter.31',
      order: 31,
      groupId: 'dietetics.lifespan-cases',
      slug: 'oncology-cachexia-post-surgical-enhanced-recovery-eras',
      title: l(
        '31 · Cancer Cachexia, Radiation Enteritis & Surgical ERAS Nutrition Protocols',
        '৩১ · ক্যান্সার ক্যাকেক্সিয়া, রেডিয়েশন এন্টারাইটিস ও সার্জিক্যাল ইরাশ (ERAS) পথ্য'
      ),
      summary: l(
        'Combating tumor-derived proteolysis-inducing factors (PIF) with high-protein anti-inflammatory nutrition (EPA/DHA), and preoperative carbohydrate loading under ERAS guidelines.',
        'টিউমারজনিত ক্যাকেক্সিয়ায় উচ্চ প্রোটিন ও ওমেগা-৩ ফ্যাটি অ্যাসিড (EPA/DHA) প্রয়োগ এবং অস্ত্রোপচারের আগে ইরাশ (ERAS) গাইডলাইনে কার্বোহাইড্রেট লোডিং।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['dietetics.chapter.07', 'dietetics.chapter.26'],
      estimatedMinutes: 30,
    },
    {
      id: 'dietetics.chapter.32',
      order: 32,
      groupId: 'dietetics.lifespan-cases',
      slug: 'interactive-clinical-case-studies-complex-multimorbidity',
      title: l(
        '32 · Complex Multimorbidity: Diabetic Nephropathy with Sarcopenia & Heart Failure',
        '৩২ · জটিল বহুমুখী রোগ: ডায়াবেটিক নেফ্রোপ্যাথি, সারকোপেনিয়া ও হার্ট ফেইলিউর কেস'
      ),
      summary: l(
        'Interactive clinical decision tree navigating competing therapeutic demands: Reconciling low-protein renal restrictions with sarcopenic protein needs and congestive heart failure fluid limits.',
        'পরস্পরবিরোধী চিকিৎসা চাহিদার মধ্যে সমন্বয়: রেনাল নিম্ন-প্রোটিন, সারকোপেনিয়ার প্রোটিন চাহিদা এবং হার্ট ফেইলিউরের কঠোর তরল নিয়ন্ত্রণের বাস্তব ক্লিনিক্যাল কেস সমাধান।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: [
        'dietetics.chapter.16',
        'dietetics.chapter.21',
        'dietetics.chapter.29',
      ],
      estimatedMinutes: 36,
    },
  ],
}

