import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics02References: LessonReference[] = [
  {
    id: 'ref-and-ncp-2017',
    authors: 'Swan WI, Vivanti A, Hakel-Smith NA, et al.',
    title: 'Nutrition Care Process and Model Update: Toward Realizing People-Centered Care and Outcomes Management',
    organization: 'Journal of the Academy of Nutrition and Dietetics',
    year: 2017,
    url: 'https://jandonline.org/article/S2212-2672(17)31238-X/fulltext',
    doi: '10.1016/j.jand.2017.07.015',
  },
  {
    id: 'ref-encpt-guide',
    authors: 'Academy of Nutrition and Dietetics',
    title: 'electronic Nutrition Care Process Terminology (eNCPT): A Resource for Professional Practice and Clinical Documentation',
    organization: 'Academy of Nutrition and Dietetics',
    year: 2023,
    url: 'https://www.ncpro.org/',
    doi: '10.1016/j.jand.2020.08.012',
  },
  {
    id: 'ref-lacey-pritchett',
    authors: 'Lacey K, Pritchett E',
    title: 'Nutrition Care Process and Model: ADA Adopts Road Map to Quality Care and Outcomes Management',
    organization: 'Journal of the American Dietetic Association',
    year: 2003,
    url: 'https://pubmed.ncbi.nlm.nih.gov/12920257/',
    doi: '10.1016/S0002-8223(03)00971-4',
  },
  {
    id: 'ref-field-malnutrition',
    authors: 'Field LB, Hand RK',
    title: 'Differentiating Malnutrition from Cachexia and Sarcopenia in the Nutrition Care Process',
    organization: 'Topics in Clinical Nutrition',
    year: 2015,
    url: 'https://journals.lww.com/topicsinclinicalnutrition/Abstract/2015/07000/Differentiating_Malnutrition_from_Cachexia_and.4.aspx',
    doi: '10.1097/TIN.0000000000000036',
  },
  {
    id: 'ref-writing-pes-statements',
    authors: 'Charney P, Malone AM',
    title: 'ADA Pocket Guide to Nutrition Assessment: PES Statement Formulation and Clinical Problem Solving',
    organization: 'American Dietetic Association',
    year: 2009,
    url: 'https://www.eatrightstore.org/',
    doi: '10.1016/j.jada.2008.06.435',
  },
]

export const dietetics02NcpPesLesson: LessonTopic = {
  id: 'topic.dietetics.ncp-pes-diagnostics',
  slug: 'ncp-pes-diagnostic-statements',
  title: l(
    '02 · The Nutrition Care Process & Standardized eNCPT PES Diagnostics',
    '০২ · নিউট্রিশন কেয়ার প্রসেস ও প্রমিত ই-এনসিপিটি পিইএস (PES) রোগনির্ণয়'
  ),
  summary: l(
    'A clinical methodology for systematic nutrition care: mastering the four-stage ADIME framework, distinguishing nutritional diagnoses from medical pathology, and engineering rigorous Problem-Etiology-Signs/Symptoms (PES) statements across Intake, Clinical, and Behavioral domains.',
    'সুশৃঙ্খল পুষ্টি চিকিৎসার বৈজ্ঞানিক কর্মপ্রবাহ: চার ধাপের ADIME কাঠামো আয়ত্তকরণ, চিকিৎসাগত রোগ ও পুষ্টিগত সমস্যার স্পষ্ট পার্থক্য এবং ইনটেক, ক্লিনিক্যাল ও আচরণগত ক্ষেত্রে প্রমিত Problem-Etiology-Signs/Symptoms (PES) বাক্য প্রণয়ন কৌশল।'
  ),
  subject: 'dietetics',
  version: 1,
  updatedAt: '2026-11-03',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-03',
  prerequisiteIds: ['topic.dietetics.assessment-abcd'],
  relatedTopicIds: ['topic.dietetics.assessment-abcd', 'topic.nutrition.clinical-malnutrition-wasting-cachexia'],
  objectives: [
    l(
      'Navigate the four continuous stages of the Nutrition Care Process (Assessment, Diagnosis, Intervention, Monitoring & Evaluation).',
      'নিউট্রিশন কেয়ার প্রসেসের চারটি ধারাবাহিক ধাপ (অ্যাসেসমেন্ট, ডায়াগনোসিস, ইন্টারভেনশন, মনিটরিং ও ইভ্যালুয়েশন) সঠিকভাবে পরিচালনা করা।'
    ),
    l(
      'Distinguish a nutrition diagnosis that a dietitian can resolve or manage from an overarching physician medical diagnosis.',
      'চিকিৎসকের মূল মেডিকেল ডায়াগনোসিস থেকে ডায়েটিশিয়ানের সমাধানযোগ্য পুষ্টি রোগনির্ণয়ের সুস্পষ্ট পার্থক্য নিরূপণ করা।'
    ),
    l(
      'Construct syntactically valid PES statements using standardized eNCPT nomenclature connecting Problem (P), Etiology (E), and Signs/Symptoms (S).',
      'প্রমিত eNCPT পরিভাষা ব্যবহার করে সমস্যা (P), কারণ (E) ও লক্ষণ (S) সমন্বয়ে ব্যাকরণগতভাবে নির্ভুল PES বাক্য গঠন করা।'
    ),
    l(
      'Prioritize the Intake domain (NI) over Clinical (NC) and Behavioral (NB) terms whenever multiple nutritional diagnoses coexist.',
      'একাধিক পুষ্টি সমস্যা একসাথে উপস্থিত থাকলে ক্লিনিক্যাল বা আচরণগত সমস্যার তুলনায় ইনটেক ডোমেইনকে (NI) অগ্রাধিকার দেওয়া।'
    ),
    l(
      'Directly align nutrition interventions with the root Etiology while tying monitoring parameters to the explicit Signs and Symptoms.',
      'পুষ্টি চিকিৎসার মূল লক্ষ্যকে কারণের (Etiology) সাথে এবং পর্যালোচনার মানদণ্ডকে সুনির্দিষ্ট লক্ষণের (Signs/Symptoms) সাথে যুক্ত করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A cyclical clinical flowchart illustrating the four connected steps of the Nutrition Care Process (ADIME): Nutrition Assessment feeds into Nutrition Diagnosis via PES statements; the Diagnosis directs Nutrition Intervention targeting the etiology; the Intervention is evaluated via Nutrition Monitoring and Evaluation tracking the signs and symptoms, which in turn cycles back to reassessment.',
      'নিউট্রিশন কেয়ার প্রসেসের চার ধাপের (ADIME) চক্রাকার চিত্র: পুষ্টি মূল্যায়ন থেকে PES বাক্যের মাধ্যমে রোগনির্ণয় গঠিত হয়; রোগনির্ণয় কারণকে লক্ষ্য করে পুষ্টি ব্যবস্থাপত্র তৈরি করে; ব্যবস্থাপত্র লক্ষণসমূহ মূল্যায়নের মাধ্যমে পর্যবেক্ষণ করা হয়, যা পুনরায় মূল্যায়নের সাথে যুক্ত থাকে।'
    ),
    steps: [
      l(
        'Step 1: Nutrition Assessment (A). The clinician systematically aggregates and synthesizes ABCD data, identifying comparative standards, metabolic stressors, and nutritional deficits.',
        'ধাপ ১: পুষ্টি মূল্যায়ন (A): চিকিৎসক পদ্ধতিগতভাবে রোগীর ABCD তথ্য সংগ্রহ ও বিশ্লেষণ করেন এবং মেটাবলিক চাপ ও পুষ্টি ঘাটতি শনাক্ত করেন।'
      ),
      l(
        'Step 2: Nutrition Diagnosis (D). The clinician identifies and labels a specific nutrition problem that dietetics professionals can independently resolve or improve, structured as a standardized PES statement.',
        'ধাপ ২: পুষ্টি রোগনির্ণয় (D): ডায়েটিশিয়ান স্বাধীনভাবে সমাধান বা উন্নতি করতে পারেন এমন সুনির্দিষ্ট পুষ্টি সমস্যা প্রমিত PES বাক্যের মাধ্যমে নির্ধারণ করেন।'
      ),
      l(
        'Step 3: Nutrition Intervention (I). Targeted prescription, education, or counseling specifically designed to alleviate the root etiology identified in the PES statement.',
        'ধাপ ৩: পুষ্টি হস্তক্ষেপ বা চিকিৎসা (I): PES বাক্যে চিহ্নিত মূল কারণকে (Etiology) দূর বা নিয়ন্ত্রণ করতে লক্ষ্যভিত্তিক খাদ্য ব্যবস্থাপত্র, শিক্ষা বা কাউন্সেলিং প্রদান।'
      ),
      l(
        'Step 4: Nutrition Monitoring & Evaluation (ME). Tracking the quantifiable signs and symptoms from the PES statement at designated intervals to assess clinical efficacy and trigger revision.',
        'ধাপ ৪: পর্যবেক্ষণ ও মূল্যায়ন (ME): চিকিৎসাগত সাফল্য পরিমাপ এবং প্রয়োজনীয় সংশোধনের জন্য PES বাক্যের সংখ্যাগত লক্ষণগুলো নিয়মিত বিরতিতে পরীক্ষা করা।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 62-year-old male with newly diagnosed non-metastatic head and neck cancer undergoing chemoradiotherapy has developed grade 3 oral mucositis and severe odynophagia. His oral intake has declined to 40% of estimated needs for 3 weeks, and he has experienced a 7% involuntary weight loss in 1 month. Which of the following represents the most professionally rigorous, prioritized eNCPT PES statement?',
      'মাথা ও গলার ক্যান্সারে আক্রান্ত ৬২ বছর বয়সী এক পুরুষ কেমোরেডিওথেরাপির কারণে তীব্র মুখের ক্ষত (গ্রেড ৩ মিউকোসাইটিস) এবং গিলতে মারাত্মক ব্যথায় ভুগছেন। গত ৩ সপ্তাহ ধরে তিনি চাহিদার মাত্র ৪০% খাবার খেতে পেরেছেন এবং ১ মাসে তার ৭% অনিচ্ছাকৃত ওজন হ্রাস পেয়েছে। নিচের কোনটি সবচেয়ে নির্ভুল এবং অগ্রাধিকারপ্রাপ্ত প্রমিত PES বাক্য?'
    ),
    options: [
      l(
        'Head and neck cancer related to radiation therapy as evidenced by oral mucositis and 7% weight loss.',
        'মাথা ও গলার ক্যান্সার related to রেডিয়েশন থেরাপি as evidenced by ওরাল মিউকোসাইটিস এবং ৭% ওজন হ্রাস।'
      ),
      l(
        'Inadequate oral intake (NI-2.1) related to painful radiation-induced stomatitis and odynophagia as evidenced by 24-hour recall showing ~40% of estimated energy requirements for 3 weeks and 7% involuntary weight loss in 1 month.',
        'অপর্যাপ্ত খাদ্য গ্রহণ (NI-2.1) related to রেডিয়েশনজনিত তীব্র ওরাল স্টোমাটাইটিস ও গিলতে প্রচণ্ড ব্যথা as evidenced by ৩ সপ্তাহ ধরে চাহিদার মাত্র ~৪০% খাবার গ্রহণ এবং ১ মাসে ৭% অনিচ্ছাকৃত ওজন হ্রাস।'
      ),
      l(
        'Swallowing difficulty (NC-1.1) related to cancer chemotherapy as evidenced by low albumin of 2.9 g/dL.',
        'গিলতে সমস্যা (NC-1.1) related to ক্যান্সার কেমোথেরাপি as evidenced by কম অ্যালবুমিন ২.৯ g/dL।'
      ),
      l(
        'Unintended weight loss (NC-3.2) related to patient refusing to eat hospital food as evidenced by 7% weight loss.',
        'অনাকাঙ্ক্ষিত ওজন হ্রাস (NC-3.2) related to রোগীর হাসপাতালের খাবার খেতে অনীহা as evidenced by ৭% ওজন হ্রাস।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'Option 2 correctly prioritizes the Intake domain (NI-2.1: Inadequate oral intake) as the primary problem that a clinical dietitian can resolve (e.g., through high-calorie oral liquid supplements or enteral tube feeding). The etiology identifies the specific functional barrier (radiation-induced mucositis and odynophagia), and the signs/symptoms are specific, measurable metrics (intake percentage and weight loss velocity). Option 1 incorrectly uses a medical diagnosis as the problem.',
      '২ নম্বর বিকল্পটি অত্যন্ত সঠিকভাবে ইনটেক ডোমেইনকে (NI-2.1: অপর্যাপ্ত খাদ্য গ্রহণ) প্রাথমিক সমস্যা হিসেবে অগ্রাধিকার দেয়, যা একজন ক্লিনিক্যাল ডায়েটিশিয়ান সমাধান করতে পারেন (যেমন হাই-ক্যালোরি লিকুইড সাপ্লিমেন্ট বা টিউব ফিডিংয়ের মাধ্যমে)। কারণটি (Etiology) সুনির্দিষ্ট শারীরিক বাধা তুলে ধরে এবং লক্ষণসমূহ সুস্পষ্ট ও পরিমাপযোগ্য। ১ নম্বর বিকল্পে ভুলভাবে মেডিকেল ডায়াগনোসিসকে পুষ্টি সমস্যা হিসেবে দেখানো হয়েছে।'
    ),
  },
  evidenceBySection: {
    'sec-ncp-intro': ['ref-and-ncp-2017', 'ref-lacey-pritchett'],
    'sec-pes-basics': ['ref-encpt-guide', 'ref-writing-pes-statements'],
    'sec-actionable-care': ['ref-and-ncp-2017', 'ref-writing-pes-statements'],
    'sec-ncp-foundations': ['ref-and-ncp-2017', 'ref-lacey-pritchett'],
    'sec-pes-architecture': ['ref-encpt-guide', 'ref-writing-pes-statements'],
    'sec-domain-priorities': ['ref-encpt-guide', 'ref-field-malnutrition'],
    'sec-pes-audit-metrics': ['ref-and-ncp-2017', 'ref-writing-pes-statements'],
    'sec-clinical-alignment': ['ref-and-ncp-2017', 'ref-writing-pes-statements'],
  },
  references: dietetics02References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-ncp-intro',
          heading: l('1. What Is the Nutrition Care Process (NCP)?', '১. নিউট্রিশন কেয়ার প্রসেস (NCP) কী?'),
          paragraphs: [
            l(
              'The Nutrition Care Process (NCP) is a systematic, scientifically validated framework designed by the Academy of Nutrition and Dietetics to guide healthcare professionals in providing high-quality, individualized medical nutrition therapy [1]. Instead of giving generic dietary advice, the clinician works through four distinct, interconnected steps: Assessment, Diagnosis, Intervention, and Monitoring & Evaluation (ADIME).',
              'নিউট্রিশন কেয়ার প্রসেস (NCP) হলো আন্তর্জাতিকভাবে স্বীকৃত এমন একটি সুশৃঙ্খল বৈজ্ঞানিক কর্মপদ্ধতি, যা রোগীদের ব্যক্তিগতকৃত এবং প্রমাণভিত্তিক পুষ্টিসেবা প্রদানে পথ দেখায় [1]। গতানুগতিক ডায়েট চার্ট দেওয়ার পরিবর্তে চিকিৎসক চারটি ধারাবাহিক ধাপে কাজ করেন: মূল্যায়ন (Assessment), রোগনির্ণয় (Diagnosis), চিকিৎসা বা পরিকল্পনা (Intervention), এবং পর্যবেক্ষণ ও মূল্যায়ন (Monitoring & Evaluation — ADIME)।'
            ),
            l(
              'A critical distinction in modern dietetics is the difference between a medical diagnosis and a nutrition diagnosis [2]. A physician diagnoses a medical disease or pathology (for example, *Type 2 Diabetes Mellitus* or *Crohn’s Disease*). In contrast, a nutrition professional identifies and diagnoses a specific nutritional or metabolic problem that nutrition interventions can directly treat, alleviate, or improve (such as *Inconsistent carbohydrate intake* or *Altered GI function*).',
              'আধুনিক ডায়েটেটিক্সের সবচেয়ে গুরুত্বপূর্ণ দিক হলো চিকিৎসাগত রোগ (Medical Diagnosis) এবং পুষ্টিগত সমস্যার (Nutrition Diagnosis) পার্থক্য বোঝা [2]। একজন চিকিৎসক রোগীর শারীরিক রোগ নির্ণয় করেন (যেমন *টাইপ ২ ডায়াবেটিস* বা *ক্রোনস ডিজিজ*)। পক্ষান্তরে, একজন পুষ্টিবিদ এমন একটি নির্দিষ্ট পুষ্টি বা মেটাবলিক সমস্যা নির্ণয় করেন যা খাদ্যাভ্যাস ও পুষ্টি চিকিৎসার মাধ্যমে সারিয়ে তোলা বা নিয়ন্ত্রণ করা সম্ভব (যেমন *অনিয়মিত কার্বোহাইড্রেট গ্রহণ* বা *অন্ত্রের শোষণ ত্রুটি*)।'
            ),
          ],
        },
        {
          id: 'sec-pes-basics',
          heading: l('2. The Anatomy of a PES Statement', '২. পিইএস (PES) বাক্যের গঠন ও কার্যপদ্ধতি'),
          paragraphs: [
            l(
              'To communicate a nutrition diagnosis with absolute clinical clarity, dietitians use a standardized syntactic formula known as a **PES Statement** [3]. Every PES statement links three core elements into a single coherent sentence:',
              'চিকিৎসাদলে পুষ্টিজনিত সমস্যা স্পষ্টভাবে তুলে ধরার জন্য আন্তর্জাতিকভাবে স্বীকৃত **PES বাক্য** ব্যবহার করা হয় [3]। প্রতিটি PES বাক্য তিনটি মূল অংশকে একটি অর্থপূর্ণ বাক্যে সংযুক্ত করে:'
            ),
            l(
              '$$\\textbf{Problem (P)} \\quad \\xrightarrow{\\text{related to (r/t)}} \\quad \\textbf{Etiology (E)} \\quad \\xrightarrow{\\text{as evidenced by (AEB)}} \\quad \\textbf{Signs/Symptoms (S)}$$',
              '$$\\textbf{সমস্যা (P)} \\quad \\xrightarrow{\\text{সম্পর্কিত (related to)}} \\quad \\textbf{মূল কারণ (E)} \\quad \\xrightarrow{\\text{যার প্রমাণ (as evidenced by)}} \\quad \\textbf{লক্ষণসমূহ (S)}$$'
            ),
            l(
              'The **Problem (P)** is the nutrition diagnosis label chosen from the standardized electronic Nutrition Care Process Terminology (eNCPT) dictionary [2]. The **Etiology (E)** describes the root cause or contributing factors generating the problem, connected by the words "related to". The **Signs and Symptoms (S)** are the objective laboratory values, physical measurements, or dietary records that prove the problem exists, connected by the words "as evidenced by" [3].',
              '**Problem (P)** হলো আন্তর্জাতিক পরিভাষা (eNCPT) থেকে নেওয়া সুনির্দিষ্ট সমস্যা [2]। **Etiology (E)** হলো সমস্যাটির পেছনের মূল কারণ বা ঝুঁকি, যা "related to" দিয়ে যুক্ত হয়। আর **Signs and Symptoms (S)** হলো রক্তপরীক্ষা, ওজন হ্রাস বা খাদ্যের হিসাবের মতো সুনির্দিষ্ট প্রমাণ যা সমস্যাটির সত্যতা প্রমাণ করে এবং "as evidenced by" দিয়ে যুক্ত থাকে [3]।'
            ),
          ],
        },
        {
          id: 'sec-actionable-care',
          heading: l('3. Why the Etiology Drives the Nutrition Treatment', '৩. কারণ কেন পুষ্টি চিকিৎসার দিক নির্ধারণ করে?'),
          paragraphs: [
            l(
              'The fundamental rule of the Nutrition Care Process is that the Nutrition Intervention must directly resolve or manage the **Etiology** [1, 5]. If the intervention does not target the root cause, the treatment will fail. For example, if a patient has *Inadequate energy intake* caused by *Severe tooth pain (etiology)*, giving them written calorie brochures will not help; the clinician must prescribe soft, calorie-dense liquid supplements and coordinate dental care.',
              'নিউট্রিশন কেয়ার প্রসেসের মূল নীতি হলো: পুষ্টি চিকিৎসা বা ব্যবস্থাপত্রকে সরাসরি **মূল কারণের (Etiology)** ওপর কাজ করতে হবে [1, 5]। যদি চিকিৎসা মূল কারণকে লক্ষ্য না করে, তবে রোগী সুস্থ হবে না। উদাহরণস্বরূপ, কোনো রোগীর খাবার কম খাওয়ার কারণ যদি হয় *দাঁতের প্রচণ্ড ব্যথা (Etiology)*, তবে তাকে খাদ্যতালিকা ধরিয়ে দিলে লাভ হবে না; তাকে নরম পুষ্টিকর তরল খাবার দিতে হবে এবং ডেন্টাল চিকিৎসার ব্যবস্থা করতে হবে।'
            ),
            l(
              'Similarly, when the patient returns for follow-up during Nutrition Monitoring & Evaluation, the clinician does not guess whether progress was made. Instead, they re-measure the exact **Signs and Symptoms** documented in the PES statement to prove whether the intervention worked [1].',
              'একইভাবে, রোগী যখন পরবর্তী ফলো-আপে আসেন, তখন চিকিৎসা সফল হয়েছে কি না তা অনুমানের ওপর ছেড়ে দেওয়া হয় না। PES বাক্যে উল্লেখ করা সুনির্দিষ্ট **লক্ষণসমূহ (Signs and Symptoms)** পুনরায় পরিমাপ করেই নিশ্চিত হওয়া যায় রোগীর উন্নতি হয়েছে কি না [1]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-ncp-foundations',
          heading: l('1. The Four-Stage ADIME Framework and Systems Architecture', '১. চার ধাপের ADIME কাঠামো ও সিস্টেমস আর্কিটেকচার'),
          paragraphs: [
            l(
              'The Nutrition Care Process (NCP) is organized into four distinct but non-linear, interrelated phases collectively abbreviated as ADIME: Assessment, Diagnosis, Intervention, and Monitoring & Evaluation [1]. This framework transforms dietetics from subjective recipe generation into an evidence-based clinical discipline with auditable patient outcomes.',
              'নিউট্রিশন কেয়ার প্রসেস (NCP) চারটি ধারাবাহিক কিন্তু আন্তঃসম্পর্কিত ধাপে বিন্যস্ত, যাকে সংক্ষেপে ADIME বলা হয়: অ্যাসেসমেন্ট, ডায়াগনোসিস, ইন্টারভেনশন এবং মনিটরিং ও ইভ্যালুয়েশন [1]। এই কাঠামো ডায়েটেটিক্সকে সাধারণ খাদ্যতালিকা তৈরির স্তর থেকে আধুনিক প্রমাণভিত্তিক ক্লিনিক্যাল বিজ্ঞানে রূপান্তরিত করে।'
            ),
            l(
              'In Step 1 (Assessment), the practitioner collects and categorizes anthropometric, biochemical, clinical physical, and dietary data (the ABCD model), comparing raw metrics against population-specific reference standards (e.g., DRI, Hamwi IBW, WHO percentiles) [1, 4]. In Step 2 (Diagnosis), critical thinking bridges assessment data to a discrete nutritional problem labeled using standardized eNCPT diagnostic codes.',
              '১ম ধাপে (Assessment) চিকিৎসক রোগীর ABCD তথ্য সংগ্রহ করে প্রমিত রেফারেন্স মানের সাথে তুলনা করেন [1, 4]। ২য় ধাপে (Diagnosis) সংগৃহীত উপাত্ত বিশ্লেষণ করে আন্তর্জাতিক eNCPT কোড অনুযায়ী সুনির্দিষ্ট পুষ্টি রোগনির্ণয় নির্ধারণ করা হয়।'
            ),
            l(
              'In Step 3 (Intervention), the clinician selects specific prescription modalities—food and nutrient delivery (ND), nutrition education (E), nutrition counseling (C), or coordination of nutrition care (RC)—specifically engineered to eradicate or circumvent the diagnosed etiology [2]. In Step 4 (Monitoring and Evaluation), progress is tracked via comparative indicators directly mapped to the original signs and symptoms.',
              '৩য় ধাপে (Intervention) কারণ দূর করার জন্য সুনির্দিষ্ট পদক্ষেপ নেওয়া হয়—যেমন খাবার সরবরাহ (ND), পুষ্টি শিক্ষা (E), কাউন্সেলিং (C), বা অন্যান্য চিকিৎসকের সাথে সমন্বয় (RC) [2]। ৪র্থ ধাপে (Monitoring & Evaluation) মূল লক্ষণের সাথে তুলনা করে রোগীর অগ্রগতি পর্যবেক্ষণ করা হয়।'
            ),
          ],
        },
        {
          id: 'sec-pes-architecture',
          heading: l('2. eNCPT Diagnostic Taxonomy: Problem, Etiology & Signs/Symptoms', '২. ই-এনসিপিটি ডায়াগনস্টিক পরিভাষা: সমস্যা, কারণ ও লক্ষণের বিজ্ঞান'),
          paragraphs: [
            l(
              'The electronic Nutrition Care Process Terminology (eNCPT) divides all standardized diagnostic labels into three primary clinical domains [2]:',
              'আন্তর্জাতিক eNCPT ডিরেক্টরি সকল পুষ্টি রোগনির্ণয় পরিভাষাকে প্রধান তিনটি ক্লিনিক্যাল ডোমেইনে ভাগ করে [2]:'
            ),
            l(
              '1. **Intake Domain (NI):** Problems related to the actual intake of energy, nutrients, fluids, or bioactive substances via oral, enteral, or parenteral routes (e.g., *Inadequate energy intake [NI-1.2]*, *Excessive carbohydrate intake [NI-5.8.2]*, *Less than optimal fluid intake [NI-3.1]*).\n2. **Clinical Domain (NC):** Nutritional problems secondary to medical, physical, or mechanical conditions (e.g., *Swallowing difficulty [NC-1.1]*, *Altered GI function [NC-1.4]*, *Unintended weight loss [NC-3.2]*, *Food-medication interaction [NC-2.3]*).\n3. **Behavioral-Environmental Domain (NB):** Problems related to knowledge, attitudes, beliefs, physical environment, access to food, or food safety (e.g., *Food- and nutrition-related knowledge deficit [NB-1.1]*, *Limited access to food [NB-3.1]*).',
              '১. **ইনটেক ডোমেইন (NI):** মুখ, টিউব বা শিরার মাধ্যমে ক্যালোরি, পুষ্টি উপাদান বা তরল গ্রহণের সমস্যা (যেমন *অপর্যাপ্ত ক্যালোরি গ্রহণ [NI-1.2]*, *অতিরিক্ত কার্বোহাইড্রেট গ্রহণ [NI-5.8.2]*, *অপর্যাপ্ত তরল গ্রহণ [NI-3.1]*)।\n২. **ক্লিনিক্যাল ডোমেইন (NC):** শারীরিক, যান্ত্রিক বা চিকিৎসা জটিলতাজনিত সমস্যা (যেমন *গিলতে অসুবিধা [NC-1.1]*, *অন্ত্রের শোষণ ত্রুটি [NC-1.4]*, *অনাকাঙ্ক্ষিত ওজন হ্রাস [NC-3.2]*)।\n৩. **আচরণগত ও পরিবেশগত ডোমেইন (NB):** পুষ্টিজ্ঞান, দৃষ্টিভঙ্গি, পরিবেশ বা নিরাপদ খাদ্যের প্রাপ্যতা সম্পর্কিত সমস্যা (যেমন *পুষ্টিজ্ঞানের অভাব [NB-1.1]*, *খাদ্যের অপ্রতুলতা [NB-3.1]*)।'
            ),
            l(
              'A syntactically valid PES statement must adhere to the format: `[Standardized Problem from eNCPT] related to [Root Etiology] as evidenced by [Objective Signs and Subjective Symptoms]` [3, 5]. The etiology must describe the root mechanistic cause that a nutrition intervention can influence, rather than merely re-stating a physician medical diagnosis.',
              'একটি ব্যাকরণগতভাবে নির্ভুল PES বাক্যের গঠন হবে: `[eNCPT মানসম্মত সমস্যা] related to [মূল কারণ বা Etiology] as evidenced by [সুনির্দিষ্ট লক্ষণ ও গবেষণাগার প্রমাণ]` [3, 5]। কারণটিতে কেবল কোনো মেডিকেল রোগের নাম না লিখে এমন মেটাবলিক বা কার্যকরী কারণ লিখতে হবে যা পুষ্টি চিকিৎসার মাধ্যমে পরিবর্তনযোগ্য।'
            ),
          ],
        },
        {
          id: 'sec-domain-priorities',
          heading: l('3. Domain Prioritization: Why Intake Trumps Clinical and Behavioral', '৩. ডোমেইন অগ্রাধিকার: কেন ইনটেক ডোমেইন সবার আগে বিবেচিত হয়?'),
          paragraphs: [
            l(
              'In clinical practice, complex multimorbid patients frequently exhibit multiple concurrent nutritional abnormalities across all three domains [1, 2]. For example, a patient with metastatic cancer may simultaneously qualify for *Malnutrition (NC-4.1)*, *Inadequate oral intake (NI-2.1)*, and *Not ready for diet/lifestyle change (NB-1.3)*.',
              'জটিল রোগীদের ক্ষেত্রে প্রায়ই একই সাথে তিনটি ডোমেইনের একাধিক পুষ্টি সমস্যা দেখা যায় [1, 2]। উদাহরণস্বরূপ, একজন ক্যান্সার রোগীর একই সাথে *অপুষ্টি (NC-4.1)*, *অপর্যাপ্ত খাদ্য গ্রহণ (NI-2.1)* এবং *খাদ্যাভ্যাস পরিবর্তনে অনীহা (NB-1.3)* থাকতে পারে।'
            ),
            l(
              'The established rule of clinical prioritization dictates that **the Intake Domain (NI) is the preferred and prioritized diagnosis** whenever possible [2]. This rule exists because nutrition professionals are uniquely credentialed and trained to manipulate macro- and micronutrient intake. Resolving an intake deficit (e.g., initiating high-density enteral feeding) directly treats the downstream clinical manifestations (e.g., reversing weight loss and halting muscle wasting).',
              'ক্লিনিক্যাল ডায়েটেটিক্সের স্বীকৃত নিয়ম হলো: যখনই সম্ভব **ইনটেক ডোমেইনকে (NI) সর্বোচ্চ অগ্রাধিকার দিতে হবে** [2]। কারণ একজন পুষ্টিবিদ খাদ্য উপাদান ও ক্যালোরি নিয়ন্ত্রণে সবচেয়ে দক্ষ। ইনটেক ঘাটতি দূর করতে পারলে (যেমন টিউব ফিডিং শুরু করা) তা স্বয়ংক্রিয়ভাবে অন্যান্য ক্লিনিক্যাল সমস্যা (যেমন ওজন হ্রাস বা পেশি ক্ষয়) সারিয়ে তুলতে সাহায্য করে।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-pes-audit-metrics',
          heading: l('1. Diagnostic Audit Algorithms: The Critical Thinking Validation Filter', '১. ডায়াগনস্টিক অডিট অ্যালগরিদম: ক্লিনিক্যাল যাঁচাইকরণ ফিল্টার'),
          paragraphs: [
            l(
              'To guarantee scientific precision and audit quality in clinical health records, every formulated PES statement must pass a standardized five-question validation filter before implementation [1, 3]:',
              'হাসপাতালের রেকর্ড এবং গবেষণায় নির্ভুলতা বজায় রাখার জন্য প্রতিটি PES বাক্য চূড়ান্ত করার আগে পাঁচটি আন্তর্জাতিক মানদণ্ডে যাচাই করা বাধ্যতামূলক [1, 3]:'
            ),
            l(
              '$$\\begin{aligned} &\\text{Filter 1: Can the dietitian resolve or improve the Problem (P)?} \\\\ &\\text{Filter 2: Is the Etiology (E) truly the root cause, or just another symptom?} \\\\ &\\text{Filter 3: Will the planned Intervention (I) directly eliminate or lessen the Etiology?} \\\\ &\\text{Filter 4: Are the Signs and Symptoms (S) specific, quantifiable, and trackable over time?} \\\\ &\\text{Filter 5: Does the assessment data reliably substantiate the chosen diagnostic term?} \\end{aligned}$$',
              '$$\\begin{aligned} &\\text{ফিল্টার ১: পুষ্টিবিদ কি সরাসরি সমস্যাটির (P) সমাধান বা উন্নতি করতে সক্ষম?} \\\\ &\\text{ফিল্টার ২: কারণটি (E) কি আসলেই মূল কারণ, নাকি কেবল অন্য একটি উপসর্গ?} \\\\ &\\text{ফিল্টার ৩: প্রস্তাবিত চিকিৎসা কি সরাসরি এই কারণকে দূর বা উপশম করতে পারবে?} \\\\ &\\text{ফিল্টার ৪: লক্ষণসমূহ (S) কি সুনির্দিষ্ট, সংখ্যায় পরিমাপযোগ্য এবং সময়ের সাথে পরিবর্তনশীল?} \\\\ &\\text{ফিল্টার ৫: মূল্যায়নের তথ্য কি এই রোগনির্ণয়কে সন্দেহাতীতভাবে প্রমাণ করে?} \\end{aligned}$$'
            ),
            l(
              'A common diagnostic failure mode occurs when clinicians write medical diagnoses as etiologies (e.g., *related to chronic kidney disease*). A scientifically robust PES statement disassembles the medical diagnosis into its physiological mechanism, writing instead: *related to impaired renal tubular clearance of phosphate and potassium secondary to Stage 4 CKD* [1]. This distinction immediately clarifies that the dietitian must restrict dietary phosphate/potassium substrates and titrate phosphate binders.',
              'চিকিৎসকদের সাধারণ একটি ভুল হলো কারণ হিসেবে সরাসরি রোগের নাম লিখে ফেলা (যেমন *related to ক্রনিক কিডনি ডিজিজ*)। অথচ বৈজ্ঞানিকভাবে সঠিক PES বাক্যে রোগের ভেতরের শারীরবৃত্তীয় প্রক্রিয়া তুলে ধরা হয়: *related to স্টেজ ৪ সিকেডিতে বৃক্কের ফসফেট ও পটাশিয়াম নিষ্কাশন ক্ষমতা কমে যাওয়া* [1]। এর ফলে পরিষ্কার বোঝা যায় যে ডায়েটিশিয়ানকে খাবারে ফসফেট ও পটাশিয়াম কমাতে হবে এবং ফসফেট বাইন্ডার সমন্বয় করতে হবে।'
            ),
          ],
        },
        {
          id: 'sec-clinical-alignment',
          heading: l('2. Linking PES to Outcomes Management & Health Informatics', '২. স্বাস্থ্য তথ্যপ্রযুক্তি ও ফলাফল ব্যবস্থাপনায় PES বাক্যের ভূমিকা'),
          paragraphs: [
            l(
              'Standardized eNCPT diagnostic codes play an indispensable role in international health informatics and electronic health record (EHR) interoperability [1, 2]. By assigning discrete SNOMED-CT and LOINC concept identifiers to nutrition diagnoses, healthcare systems can track the epidemiological prevalence of hospital malnutrition, assess the cost-effectiveness of medical nutrition therapies, and benchmark clinical outcomes across hospital networks.',
              'আন্তর্জাতিক স্বাস্থ্য তথ্যপ্রযুক্তি (Health Informatics) এবং ইলেকট্রনিক হেলথ রেকর্ডে (EHR) প্রমিত eNCPT কোড অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে [1, 2]। এর মাধ্যমে প্রতিটি পুষ্টি রোগনির্ণয়কে আন্তর্জাতিক SNOMED-CT এবং LOINC কোডের সাথে যুক্ত করা যায়, যা হাসপাতালের অপুষ্টির হার পরিমাপ, পুষ্টি চিকিৎসার ব্যয়-সাশ্রয়ী কার্যকারিতা মূল্যায়ন এবং বিভিন্ন হাসপাতালের সেবার মান তুলনামূলক বিশ্লেষণে সাহায্য করে।'
            ),
            l(
              'When the nutrition monitoring and evaluation (M&E) stage tracks quantifiable indicators (e.g., nitrogen balance, serum phosphate velocity, bioelectrical impedance phase angle), it closes the diagnostic feedback loop [4]. If the targeted signs and symptoms fail to improve within the anticipated timeframe, the clinician does not merely increase nutritional delivery; they re-examine the assessment data to determine whether the original PES diagnosis or root etiology was inaccurate.',
              'মনিটরিং ও ইভ্যালুয়েশন ধাপে যখন সংখ্যাগত সূচকগুলো (যেমন নাইট্রোজেন ব্যালেন্স, ফসফেটের গতিশীলতা, বিআইএ ফেজ অ্যাঙ্গেল) নিয়মিত পর্যবেক্ষণ করা হয়, তখন তা রোগনির্ণয় প্রক্রিয়ার ফিডব্যাক লুপ সম্পূর্ণ করে [4]। প্রত্যাশিত সময়ে রোগীর লক্ষণ উন্নতি না হলে অন্ধভাবে খাবার না বাড়িয়ে চিকিৎসক পুনরায় মূল্যায়ন করেন যে প্রাথমিক রোগনির্ণয় বা চিহ্নিত কারণে কোনো ভুল ছিল কি না।'
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Nutrition Care Process (NCP) Architecture', '১. নিউট্রিশন কেয়ার প্রসেস (NCP) কাঠামো'), sectionId: 'sec-ncp-foundations' },
      { id: 'toc-2', label: l('2. Standardized eNCPT PES Formulation', '২. প্রমিত eNCPT PES বাক্য প্রণয়ন'), sectionId: 'sec-pes-architecture' },
      { id: 'toc-3', label: l('3. Domain Prioritization (Intake vs Clinical)', '৩. ডোমেইন অগ্রাধিকার (ইনটেক বনাম ক্লিনিক্যাল)'), sectionId: 'sec-domain-priorities' },
      { id: 'toc-4', label: l('4. Validation Filter & Health Informatics', '৪. মূল্যায়ন ফিল্টার ও স্বাস্থ্য তথ্যপ্রযুক্তি'), sectionId: 'sec-pes-audit-metrics' },
    ],
    terms: [
      {
        term: l('ADIME', 'এডিমে (ADIME)'),
        definition: l(
          'The clinical documentation framework reflecting the four steps of the Nutrition Care Process: Assessment, Diagnosis, Intervention, and Monitoring & Evaluation.',
          'নিউট্রিশন কেয়ার প্রসেসের চার ধাপের চিকিৎসাগত নথিকরণ পদ্ধতি: অ্যাসেসমেন্ট (A), ডায়াগনোসিস (D), ইন্টারভেনশন (I), এবং মনিটরিং ও ইভ্যালুয়েশন (ME)।'
        ),
      },
      {
        term: l('PES Statement', 'পিইএস (PES) বাক্য'),
        definition: l(
          'A structured clinical diagnostic sentence linking the Nutrition Problem (P), Etiology (E), and Signs/Symptoms (S) in standardized eNCPT terminology.',
          'সুনির্দিষ্ট পুষ্টি সমস্যা (P), তার মূল কারণ (E) এবং পরিমাপযোগ্য লক্ষণসমূহকে (S) যুক্ত করে রচিত প্রমিত ক্লিনিক্যাল বাক্য।'
        ),
      },
      {
        term: l('eNCPT', 'ই-এনসিপিটি (eNCPT)'),
        definition: l(
          'The electronic Nutrition Care Process Terminology; a standardized, peer-reviewed clinical nomenclature used internationally to document nutrition care.',
          'আন্তর্জাতিকভাবে স্বীকৃত পুষ্টি চিকিৎসার মানসম্মত পরিভাষা ডিরেক্টরি, যা চিকিৎসায় ধারাবাহিকতা ও নির্ভুলতা নিশ্চিত করে।'
        ),
      },
      {
        term: l('Intake Domain (NI)', 'ইনটেক ডোমেইন (NI)'),
        definition: l(
          'The primary diagnostic category describing problems related to energy, nutrient, fluid, or bioactive substance consumption, prioritized in clinical dietetics.',
          'ক্লিনিক্যাল ডায়েটেটিক্সে সর্বোচ্চ অগ্রাধিকারপ্রাপ্ত ডায়াগনস্টিক বিভাগ, যা ক্যালোরি, পুষ্টি উপাদান বা তরল গ্রহণের সমস্যা নির্দেশ করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Formulating a Prioritized PES Statement for Post-Surgical Malnutrition with Chylothorax',
          'বাস্তব কেস স্টাডি: পোস্ট-সার্জিক্যাল কাইলথোরাক্স ও অপুষ্টিতে অগ্রাধিকারপ্রাপ্ত PES বাক্য প্রণয়ন'
        ),
        steps: [
          l(
            'Step 1: Patient Profile & Assessment Data. A 58-year-old male post-esophagectomy develops an thoracic duct lymphatic leak (chylothorax, 1,200 mL/day milky drainage). Weight dropped from 74 kg to 67 kg in 3 weeks (9.5% severe weight loss). Current diet is NPO with clear fluids. Triglycerides in pleural fluid = 240 mg/dL. Albumin = 2.4 g/dL; CRP = 78 mg/L.',
            'ধাপ ১: রোগীর তথ্য ও মূল্যায়ন: খাদ্যনালীর অস্ত্রোপচারের পর ৫৮ বছর বয়সী এক পুরুষের থোরাসিক ডাক্ট থেকে লিম্ফ ক্ষরণ (কাইলথোরাক্স, দিনে ১২০০ মিলি) হচ্ছে। ৩ সপ্তাহে ওজন ৭৪ কেজি থেকে কমে ৬৭ কেজি হয়েছে (৯.৫% তীব্র ওজন হ্রাস)। বর্তমান খাদ্য: মুখে খাবার বন্ধ (NPO)। প্লুরাল তরলে ট্রাইগ্লিসারাইড ২৪০ mg/dL, রক্তে অ্যালবুমিন ২.৪ g/dL, সিআরপি ৭৮ mg/L।'
          ),
          l(
            'Step 2: Identify Competing Diagnoses. The clinician identifies three possible problems: (a) Malnutrition / Severe adult undernutrition in acute illness (NC-4.1.1); (b) Inadequate oral intake (NI-2.1); (c) Altered GI function (NC-1.4).',
            'ধাপ ২: সম্ভাব্য রোগনির্ণয়সমূহ চিহ্নিতকরণ: (ক) তীব্র অসুস্থতাজনিত মারাত্মক অপুষ্টি (NC-4.1.1); (খ) অপর্যাপ্ত খাদ্য গ্রহণ (NI-2.1); (গ) পরিপাকতন্ত্রের শোষণ ও পরিবহন ব্যাঘাত (NC-1.4)।'
          ),
          l(
            'Step 3: Select and Prioritize the Primary Problem. While severe malnutrition is present, the immediate physiological driver that dietetics must manage is the lymphatic lipid flow. Standard practice dictates prioritizing the Intake or Clinical functional driver that dictates the prescription: Altered GI/nutrient transport (NC-1.4) or Inadequate intake (NI-2.1). The team selects **Altered GI function (NC-1.4)** for the primary prescription.',
            'ধাপ ৩: প্রাথমিক সমস্যা নির্ধারণ ও অগ্রাধিকার: তীব্র অপুষ্টি থাকলেও রোগীর তাৎক্ষণিক জীবনঝুঁকি হলো লিম্ফে চর্বি ক্ষরণ। তাই খাদ্যের চর্বি পরিবহন স্বাভাবিক করতে অথবা বিশেষ ফিডিং নিশ্চিত করতে পরিপাকতন্ত্রের ক্রিয়াকে অগ্রাধিকার দেওয়া হয়।'
          ),
          l(
            'Step 4: Draft the Complete Validated PES Statement. Problem: Altered GI function (NC-1.4) related to thoracic duct injury with chylous lymphatic extravasation as evidenced by pleural fluid triglycerides 240 mg/dL, 1,200 mL/day chest tube output, and 9.5% weight loss in 3 weeks.',
            'ধাপ ৪: চূড়ান্ত PES বাক্য গঠন: Altered GI function (NC-1.4) related to অস্ত্রোপচারে থোরাসিক ডাক্ট ক্ষতিগ্রস্ত হওয়ায় কাইলাস লিম্ফ ক্ষরণ as evidenced by প্লুরাল তরলে ট্রাইগ্লিসারাইড ২৪০ mg/dL, প্রতিদিন ১২০০ মিলি লিম্ফ নিঃসরন এবং ৩ সপ্তাহে ৯.৫% ওজন হ্রাস।'
          ),
          l(
            'Step 5: Direct the Intervention and Monitoring Parameters. Intervention: Prescribe exclusive total parenteral nutrition (TPN) or an extremely low long-chain triglyceride (LCT < 10g/day) enteral formula fortified with medium-chain triglycerides (MCT) to bypass lymphatic lacteals. Monitoring: Track daily chest tube output volume, pleural fluid clearing, and weekly body weight.',
            'ধাপ ৫: চিকিৎসা ও পর্যবেক্ষণ সংযোগ: ইন্টারভেনশন হিসেবে সাধারণ চর্বি (LCT) বন্ধ করে সরাসরি শিরার পুষ্টি (TPN) অথবা মিডিয়াম চেইন ট্রাইগ্লিসারাইড (MCT) সমৃদ্ধ ফর্মুলা প্রদান, যা লিম্ফে চর্বি ক্ষরণ কমায়। পর্যবেক্ষণে প্রতিদিনের ড্রেনেজ ভলিউম ও ওজন ট্র্যাক করা হয়।'
          ),
        ],
        conclusion: l(
          'By precisely structuring the PES statement to target the pathophysiological cause (lymphatic extravasation), the clinical nutrition team successfully designed an MCT-based metabolic intervention that halted the leak while resolving the patient’s negative energy balance.',
          'শারীরবৃত্তীয় কারণকে লক্ষ্য করে নিখুঁত PES বাক্য রচনার মাধ্যমে পুষ্টি দল একটি বিশেষ এমসিটি (MCT) নির্ভর ডায়েট প্রণয়ন করতে সক্ষম হয়, যা লিম্ফ ক্ষরণ বন্ধ করে রোগীর পুষ্টিহীনতা দূর করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why is "Type 2 Diabetes Mellitus" considered an invalid Nutrition Problem in a PES statement?',
          'কেন PES বাক্যে "টাইপ ২ ডায়াবেটিস" কে একটি ভুল বা অগ্রহণযোগ্য পুষ্টি সমস্যা ধরা হয়?'
        ),
        answer: l(
          'Type 2 Diabetes Mellitus is a medical pathology diagnosed by a physician. A dietitian cannot independently cure or resolve the chronic pathology itself. Instead, the dietitian diagnoses the nutritional and metabolic behaviors or intakes associated with it, such as "Inconsistent carbohydrate intake (NI-5.8.4)" or "Excessive energy intake (NI-1.3)", which nutrition therapy directly resolves.',
          'টাইপ ২ ডায়াবেটিস হলো চিকিৎসকের নির্ণয়কৃত একটি মেডিকেল রোগ। ডায়েটিশিয়ান একা এই দীর্ঘমেয়াদী রোগ সম্পূর্ণ নির্মূল করতে পারেন না। কিন্তু তিনি এর সাথে সম্পর্কিত পুষ্টিগত সমস্যা নির্ণয় করেন—যেমন "অনিয়মিত কার্বোহাইড্রেট গ্রহণ (NI-5.8.4)" বা "অতিরিক্ত ক্যালোরি গ্রহণ (NI-1.3)", যা পুষ্টি চিকিৎসার মাধ্যমে পুরোপুরি নিয়ন্ত্রণ করা সম্ভব।'
        ),
      },
      {
        question: l(
          'What is the critical requirement for the Etiology in a clinically sound PES statement?',
          'একটি বিজ্ঞানসম্মত PES বাক্যে কারণের (Etiology) সবচেয়ে অপরিহার্য বৈশিষ্ট্য কী?'
        ),
        answer: l(
          'The Etiology must identify the root cause or primary contributing risk factor that can be directly addressed, eliminated, or substantially alleviated by a specific nutrition intervention. If the etiology cannot be resolved, the intervention must at least be able to reduce the severity of the signs and symptoms.',
          'কারণটিকে এমন একটি মূল সমস্যা হতে হবে যা সুনির্দিষ্ট পুষ্টি চিকিৎসার মাধ্যমে সরাসরি দূর বা উল্লেখযোগ্যভাবে উপশম করা সম্ভব। কোনো কারণে কারণটি অপরিবর্তনীয় হলে চিকিৎসার এমন ক্ষমতা থাকতে হবে যাতে তা লক্ষণসমূহের তীব্রতা হ্রাস করতে পারে।'
        ),
      },
    ],
  },
}

