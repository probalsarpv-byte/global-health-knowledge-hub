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
    'A scientific guide to modern clinical dietetics: moving beyond generic diet charts into a rigorous four-step problem-solving system (ADIME), clearly separating medical pathology from nutrition problems, and crafting standardized Problem-Etiology-Signs/Symptoms (PES) statements that directly heal patients.',
    'আধুনিক ক্লিনিক্যাল ডায়েটেটিক্সের বিজ্ঞানভিত্তিক রূপরেখা: গতানুগতিক ডায়েট চার্ট পরিহার করে চার ধাপের সুশৃঙ্খল সমাধান কাঠামো (ADIME), শারীরিক রোগের সাথে পুষ্টি সমস্যার সুস্পষ্ট পার্থক্য এবং প্রমিত Problem-Etiology-Signs/Symptoms (PES) বাক্য গঠনের মাধ্যমে রোগীর মূল কারণভিত্তিক পুষ্টি চিকিৎসা নিশ্চিতকরণ।'
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
      'Understand the four interconnected stages of the Nutrition Care Process (Assessment, Diagnosis, Intervention, Monitoring & Evaluation - ADIME) like an airline pilot’s flight checklist.',
      'বিমানচালকের চেকলিস্টের মতো নিউট্রিশন কেয়ার প্রসেসের চারটি আন্তঃসম্পর্কিত ধাপ (মূল্যায়ন, রোগনির্ণয়, চিকিৎসা ও পর্যবেক্ষণ - ADIME) সহজে অনুধাবন করা।'
    ),
    l(
      'Distinguish a doctor’s medical diagnosis (such as Type 2 diabetes or stroke) from a dietitian’s nutrition diagnosis (such as inconsistent carbohydrate intake or swallowing difficulty).',
      'চিকিৎসকের শারীরিক রোগ নির্ণয় (যেমন টাইপ ২ ডায়াবেটিস বা স্ট্রোক) থেকে পুষ্টিবিদের সমাধানযোগ্য পুষ্টি রোগনির্ণয়ের (যেমন অনিয়মিত কার্বোহাইড্রেট গ্রহণ বা গিলতে সমস্যা) পার্থক্য বুঝতে পারা।'
    ),
    l(
      'Construct crystal-clear, standardized PES statements linking the Problem (P), root Etiology (E), and measurable Signs/Symptoms (S) in everyday language.',
      'সমস্যা (P), পেছনের মূল কারণ (E) এবং পরিমাপযোগ্য লক্ষণসমূহকে (S) যুক্ত করে সহজ কথায় নির্ভুল ও মানসম্মত PES বাক্য তৈরি করা।'
    ),
    l(
      'Learn why resolving the Intake domain (NI) takes top clinical priority over general physical conditions and behavioral habits.',
      'রোগীর একাধিক শারীরিক ও আচরণগত সমস্যা থাকলেও কেন খাবার ও ক্যালোরি গ্রহণের সমস্যাকে (Intake domain) সবার আগে অগ্রাধিকার দিতে হয় তা জানা।'
    ),
    l(
      'Direct every dietary intervention to fix the root biological cause (Etiology) and prove success by tracking the exact recorded symptoms (Signs/Symptoms).',
      'পুষ্টি চিকিৎসার প্রতিটি পদক্ষেপকে সরাসরি মূল শারীরবৃত্তীয় কারণের (Etiology) ওপর প্রয়োগ করা এবং উল্লেখিত লক্ষণগুলোর (Signs/Symptoms) পরিবর্তন মেপে অগ্রগতি নিশ্চিত করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A continuous circular clinical flowchart showing how Assessment leads to Diagnosis via a PES statement; Diagnosis dictates the Intervention targeting the root cause; and Monitoring tracks the original signs and symptoms before circling back to reassessment.',
      'একটি অবিচ্ছিন্ন চক্রাকার স্বাস্থ্যসেবা চিত্র যা দেখায় কীভাবে মূল্যায়ন থেকে PES বাক্যের মাধ্যমে পুষ্টি রোগনির্ণয় তৈরি হয়; এই রোগনির্ণয় মূল কারণকে লক্ষ্য করে পুষ্টি চিকিৎসা নির্ধারণ করে; এবং পর্যবেক্ষণ পর্ব পূর্বের লক্ষণগুলো পরীক্ষা করে পুনরায় মূল্যায়নে ফিরে আসে।'
    ),
    steps: [
      l(
        'Step 1: Nutrition Assessment (A). Gathering the body clues using the ABCD tools (anthropometrics, lab blood tests, clinical body exams, and food intake records).',
        'ধাপ ১: পুষ্টি মূল্যায়ন বা অ্যাসেসমেন্ট (A): পূর্বের অধ্যায়ে শেখা ABCD হাতিয়ার ব্যবহার করে শরীরের তথ্য, রক্তপরীক্ষা, শারীরিক লক্ষণ ও খাদ্যাভ্যাসের খুঁটিনাটি সংগ্রহ করা।'
      ),
      l(
        'Step 2: Nutrition Diagnosis (D). Finding and naming the specific nutrition problem that a dietitian can independently solve, written in the clear format: Problem related to Etiology as evidenced by Signs/Symptoms (PES).',
        'ধাপ ২: পুষ্টি রোগনির্ণয় বা ডায়াগনোসিস (D): পুষ্টিবিদ নিজের দক্ষতায় সমাধান করতে পারেন এমন সুনির্দিষ্ট পুষ্টি সমস্যা শনাক্ত করা এবং তা প্রমিত PES বাক্যে প্রকাশ করা।'
      ),
      l(
        'Step 3: Nutrition Intervention (I). Prescribing custom meals, special nutrients, feeding tubes, or counseling specifically designed to fix or bypass the root cause.',
        'ধাপ ৩: পুষ্টি চিকিৎসা বা ইন্টারভেনশন (I): চিহ্নিত মূল কারণকে দূর করতে বা পাশ কাটিয়ে চলতে বিশেষ খাদ্য পরিকল্পনা, পুষ্টিকর পানীয়, ফিডিং টিউব বা পরামর্শ প্রদান করা।'
      ),
      l(
        'Step 4: Nutrition Monitoring & Evaluation (ME). Checking back at planned intervals to measure the exact blood numbers and body metrics from the PES statement to prove real healing.',
        'ধাপ ৪: পর্যবেক্ষণ ও মূল্যায়ন (ME): নির্দিষ্ট সময় পর পর PES বাক্যে উল্লেখিত রক্তপরীক্ষার মান ও শারীরিক পরিমাপগুলো পুনরায় মেপে রোগীর প্রকৃত উন্নতি নিশ্চিত করা।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 62-year-old male with newly diagnosed non-metastatic head and neck cancer undergoing chemoradiotherapy has developed grade 3 oral mucositis and severe odynophagia. His oral intake has declined to 40% of estimated needs for 3 weeks, and he has experienced a 7% involuntary weight loss in 1 month. Which of the following represents the most professionally rigorous, prioritized eNCPT PES statement?',
      'মাথা ও গলার ক্যান্সারে আক্রান্ত ৬২ বছর বয়সী এক পুরুষ কেমোরেডিওথেরাপির কারণে তীব্র মুখের ভেতরের ঘা (গ্রেড ৩ ওরাল মিউকোসাইটিস) এবং গিলতে মারাত্মক ব্যথায় ভুগছেন। গত ৩ সপ্তাহ ধরে তিনি দৈনন্দিন চাহিদার মাত্র ৪০% খাবার খেতে পেরেছেন এবং ১ মাসে তার ৭% অনিচ্ছাকৃত ওজন হ্রাস পেয়েছে। নিচের কোনটি সবচেয়ে নির্ভুল এবং অগ্রাধিকারপ্রাপ্ত প্রমিত PES বাক্য?'
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
      'Option 2 correctly prioritizes the Intake domain (NI-2.1: Inadequate oral intake) as the primary problem that a clinical dietitian can resolve (for example, by initiating soothing high-calorie liquid supplements or temporary enteral tube feeding). The etiology identifies the real physical barrier (radiation-induced painful mouth sores and severe pain on swallowing), and the signs/symptoms provide clear, objective, measurable numbers (40% intake for 3 weeks and 7% weight loss in 1 month). Option 1 incorrectly names a medical disease as a nutrition problem, Option 3 uses an inflammatory marker rather than a functional test, and Option 4 blames the patient rather than identifying the biological cause.',
      '২ নম্বর বিকল্পটি অত্যন্ত চমৎকারভাবে ইনটেক ডোমেইনকে (NI-2.1: অপর্যাপ্ত খাদ্য গ্রহণ) সর্বোচ্চ অগ্রাধিকার দেয়, যা একজন ক্লিনিক্যাল পুষ্টিবিদ সরাসরি সমাধান করতে পারেন (যেমন আরামদায়ক উচ্চ-ক্যালোরি তরল খাবার বা টিউব ফিডিংয়ের মাধ্যমে)। কারণটি (Etiology) সরাসরি শারীরিক প্রতিবন্ধকতা (রেডিয়েশনের ঘা ও গিলতে ব্যথা) নির্দেশ করে এবং লক্ষণগুলো সুনির্দিষ্ট পরিমাপযোগ্য সংখ্যা তুলে ধরে। ১ নম্বর বিকল্পে চিকিৎসকের মেডিকেল রোগের নাম লেখা হয়েছে, ৩ নম্বরে ভুল নির্দেশক ব্যবহার করা হয়েছে এবং ৪ নম্বরে শারীরিক কারণ অগ্রাহ্য করে রোগীর ওপর দোষ চাপানো হয়েছে।'
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
          heading: l('1. What Is the Nutrition Care Process (NCP)? A Detective Story', '১. নিউট্রিশন কেয়ার প্রসেস (NCP) কী? একটি বৈজ্ঞানিক গোয়েন্দা গল্প'),
          paragraphs: [
            l(
              'Imagine driving your car along a highway when suddenly the engine begins to sputter, a red warning light flashes on your dashboard, and dark smoke billows from beneath the hood. You pull into the nearest mechanic workshop. What would you do if the mechanic simply offered to repaint your car a pleasant shade of blue, or handed you a generic driver\'s handbook telling you to drive more slowly? You would be stunned! You expect the mechanic to open the hood, trace the fuel lines, test the electrical spark, find the exact broken valve, and replace it so the car runs safely again.',
              'ধরুন, আপনি হাইওয়ে দিয়ে গাড়ি চালিয়ে যাচ্ছেন। হঠাৎ গাড়ির ইঞ্জিন কেঁপে উঠল, ড্যাশবোর্ডে লাল সতর্কবার্তা জ্বলে উঠল এবং হুডের নিচ থেকে কালো ধোঁয়া বের হতে শুরু করল। আপনি দ্রুত গাড়িটি কাছের একটি ওয়ার্কশপে নিয়ে গেলেন। এখন মেকানিক যদি ইঞ্জিনের ঢাকনা না খুলেই আপনাকে বলে—"গাড়িটিতে সুন্দর একটা নতুন রং করিয়ে নিন, সব ঠিক হয়ে যাবে", কিংবা ড্রাইভিং করার সাধারণ একটি নিয়মবই আপনার হাতে ধরিয়ে দেয়, তবে আপনি কেমন প্রতিক্রিয়া দেখাবেন? নিশ্চয়ই হতবাক হবেন! আপনি চাইবেন মেকানিক হুড খুলে তেলের পাইপ পরীক্ষা করুক, ভেতরের স্পার্ক প্লাগ দেখুক, ঠিক কোন যন্ত্রাংশটি অকেজো হয়েছে তা খুঁজে বের করুক এবং সেটি মেরামত করে গাড়িটি চলাচলের উপযোগী করে তুলুক।'
            ),
            l(
              'For many decades, people mistakenly thought clinical nutrition was just handing out a photocopied "diet chart" listing forbidden foods like rice, sugar, or oil. But human biology is infinitely more complex than a list of rules [1]. To transform dietetics into a true, life-saving clinical science, the Academy of Nutrition and Dietetics established the Nutrition Care Process (NCP) [1, 3]. Instead of guessing, the clinical nutrition team follows a systematic four-step problem-solving cycle known as ADIME:',
              'বহু বছর ধরে সাধারণ মানুষের মধ্যে একটি ভুল ধারণা ছিল যে পুষ্টিবিদ বা ডায়েটিশিয়ানের কাজ হলো কেবল কিছু খাবারের তালিকা বা বাঁধাধরা "ডায়েট চার্ট" ধরিয়ে দেওয়া—যেখানে চিনি, ভাত বা তেল খেতে নিষেধ করা থাকে। কিন্তু মানবদেহের জৈবিক গঠন কোনো নিষিদ্ধ খাবারের তালিকার চেয়ে অনেক বেশি সূক্ষ্ম ও গভীর [1]। পুষ্টি চিকিৎসাকে একটি সত্যিকারের জীবনরক্ষাকারী চিকিৎসাবিজ্ঞানে রূপ দিতে আন্তর্জাতিক নিউট্রিশন একাডেমি তৈরি করেছে নিউট্রিশন কেয়ার প্রসেস (NCP) [1, 3]। অনুমানের ওপর নির্ভর না করে এখানে একজন পুষ্টিবিদ চারটি ধারাবাহিক ধাপে বৈজ্ঞানিক গোয়েন্দার মতো কাজ করেন, যাকে সংক্ষেপে ADIME বলা হয়:'
            ),
            l(
              'One of the most important lessons in modern healthcare is that a Medical Diagnosis and a Nutrition Diagnosis are not the same thing; they are two complementary partners working together [1, 2]. A physician diagnoses an overarching medical illness or organ disease—such as Type 2 Diabetes Mellitus, Kidney Failure, or Stroke. A dietitian does not diagnose or cure the diabetes or stroke itself. Instead, the dietitian diagnoses the specific nutritional and metabolic roadblocks caused by or accompanying that disease—such as Inconsistent carbohydrate intake causing dangerous blood sugar spikes, or Swallowing difficulty (Dysphagia) after a stroke preventing the patient from receiving enough water and protein [2]. Medicine repairs the diseased organ; nutrition therapy rebuilds the cellular fuel lines that keep the patient alive.',
              'আধুনিক স্বাস্থ্যসেবার সবচেয়ে গুরুত্বপূর্ণ শিক্ষা হলো—চিকিৎসকের শারীরিক রোগ নির্ণয় (Medical Diagnosis) এবং পুষ্টিবিদের পুষ্টি রোগনির্ণয় (Nutrition Diagnosis) এক জিনিস নয়; এরা পরস্পরের পরিপূরক দুই সহযাত্রী [1, 2]। একজন চিকিৎসক রোগীর মূল রোগ বা অঙ্গের ক্ষতি শনাক্ত করেন—যেমন টাইপ ২ ডায়াবেটিস, কিডনি বিকল হওয়া কিংবা মস্তিষ্কে স্ট্রোক। পুষ্টিবিদ ডায়াবেটিস বা স্ট্রোকের মূল প্যাথলজি পরিবর্তন করতে পারেন না; তিনি শনাক্ত করেন এই রোগের কারণে শরীরে খাদ্য ও পুষ্টির কোন পথটি বাধাগ্রস্ত হচ্ছে—যেমন ডায়াবেটিসে অনিয়মিত কার্বোহাইড্রেট গ্রহণের ফলে রক্তের সুগার ওঠানামা করা, কিংবা স্ট্রোকের পর খাবার গিলতে না পারার (Dysphagia) কারণে শরীর পানিশূন্য ও পুষ্টিহীন হয়ে পড়া [2]। চিকিৎসক যখন মূল রোগের চিকিৎসা করেন, পুষ্টিবিদ তখন রোগীর প্রতিটি কোষে শক্তি পৌঁছানোর পথ তৈরি করে জীবন রক্ষা করেন।'
            ),
          ],
          bullets: [
            l('1. Assessment (A): Gathering all clues from the body, blood tests, physical exam, and food intake records.', '১. অ্যাসেসমেন্ট (A): শরীর, রক্তপরীক্ষা, শারীরিক লক্ষণ ও খাদ্যাভ্যাস থেকে যাবতীয় তথ্য সংগ্রহ।'),
            l('2. Diagnosis (D): Identifying and naming the specific nutrition problem that dietitians can independently solve.', '২. ডায়াগনোসিস (D): পুষ্টিবিদ নিজের দক্ষতায় সমাধান করতে পারেন এমন সুনির্দিষ্ট পুষ্টি সমস্যা চিহ্নিত করা।'),
            l('3. Intervention (I): Prescribing tailored meal plans, specialized nutrients, or counseling to resolve the root cause.', '৩. ইন্টারভেনশন (I): চিহ্নিত মূল কারণ সারিয়ে তুলতে সুনির্দিষ্ট পুষ্টিকর খাবার, তরল পুষ্টি বা পরামর্শ প্রদান।'),
            l('4. Monitoring & Evaluation (ME): Re-measuring body numbers at defined intervals to verify that the patient is truly recovering.', '৪. মনিটরিং ও ইভ্যালুয়েশন (ME): নির্দিষ্ট দিন পর পুনরায় পরীক্ষা করে দেখা যে রোগী সত্যিই সুস্থ হচ্ছেন কি না।'),
          ],
        },
        {
          id: 'sec-pes-basics',
          heading: l('2. The Anatomy of a PES Statement: The Golden Sentence of Dietetics', '২. পিইএস (PES) বাক্যের গঠন: পুষ্টিবিজ্ঞানের সোনালী সূত্র'),
          paragraphs: [
            l(
              'How do you communicate a patient’s complex nutritional struggles so clearly that any doctor, nurse, or clinical specialist anywhere in the world immediately understands what is wrong, why it happened, and how to track it? In modern clinical dietetics, we write a standardized, three-part clinical formula called a PES Statement [3, 5]. It connects three vital puzzle pieces into a single, crystal-clear sentence:',
              'একজন অসুস্থ রোগীর জটিল পুষ্টি সমস্যা কীভাবে তুলে ধরা যায় যাতে বিশ্বের যেকোনো ডাক্তার, নার্স বা বিশেষজ্ঞ এক নিমেষেই বুঝতে পারেন রোগীর আসল সমস্যা কোথায়, কেন এটি ঘটেছে এবং কীভাবে তার উন্নতি বোঝা যাবে? আধুনিক ক্লিনিক্যাল ডায়েটেটিক্সে এজন্য একটি প্রমিত তিন অংশের গাণিতিক বাক্য ব্যবহার করা হয়, যাকে বলা হয় পিইএস (PES) স্টেটমেন্ট [3, 5]। এটি তিনটি মূল সত্যকে একটি সুন্দর অর্থপূর্ণ বাক্যে বেঁধে দেয়:'
            ),
            l(
              'Formula: Problem (P) — related to — Etiology (E) — as evidenced by — Signs and Symptoms (S)',
              'সূত্র: সুনির্দিষ্ট সমস্যা (P) — যার মূল কারণ (related to) — শারীরবৃত্তীয় কারণ (E) — যার সুস্পষ্ট প্রমাণ (as evidenced by) — পরিমাপযোগ্য লক্ষণ (S)'
            ),
            l(
              'Let us break down each of these three elements using simple, everyday language [3].',
              'আসুন এই তিনটি অংশকে দৈনন্দিন সহজ ভাষায় বুঝে নেওয়া যাক [3]।',
            ),
          ],
          bullets: [
            l('Problem (P): What is currently broken in the patient’s nutrition? An official diagnostic term from the eNCPT dictionary, such as Inadequate oral intake or Swallowing difficulty [2].', 'Problem (P) বা সমস্যা: রোগীর পুষ্টিগ্রহণে এই মুহূর্তে ঠিক কী সমস্যা হচ্ছে? আন্তর্জাতিক পরিভাষা অভিধান (eNCPT) থেকে নেওয়া সুনির্দিষ্ট নাম, যেমন অপর্যাপ্ত খাদ্য গ্রহণ বা খাবার গিলতে কষ্ট [2]।'),
            l('Etiology (E): Why did this problem happen? The underlying root cause or physical barrier, linked by "related to" (r/t). It must be something nutrition therapy can directly help or bypass [3].', 'Etiology (E) বা মূল শারীরবৃত্তীয় কারণ: এই সমস্যাটি কেন ঘটল? এর পেছনের আসল জৈবিক বা শারীরিক কারণ, যা "related to" দিয়ে যুক্ত হয় এবং পুষ্টি চিকিৎসার মাধ্যমে সমাধানযোগ্য [3]।'),
            l('Signs and Symptoms (S): How do we prove this problem really exists? Objective clues like a 5 kg weight drop, 600 kcal daily intake, or low serum potassium, linked by "as evidenced by" (AEB) [3, 5].', 'Signs and Symptoms (S) বা প্রমাণ ও লক্ষণ: সমস্যাটির অকাট্য প্রমাণ কী? সংখ্যায় মাপা প্রমাণ যেমন এক মাসে ৫ কেজি ওজন কমে যাওয়া বা খাবারে ক্যালোরি ঘাটতি, যা "as evidenced by" দিয়ে যুক্ত থাকে [3, 5]।'),
          ],
        },
        {
          id: 'sec-actionable-care',
          heading: l('3. Why the Etiology Drives the Nutrition Treatment', '৩. কারণ কেন চিকিৎসার দিক নির্ধারণ করে? একটি বাস্তব উদাহরণ'),
          paragraphs: [
            l(
              'Here is the golden rule of clinical nutrition that every student and practitioner must remember: The nutrition treatment (Intervention) must directly fix, resolve, or bypass the Etiology (E) [1, 5]. If your dietary plan does not target the root cause, the patient will not get better, no matter how elegant your diet chart looks on paper.',
              'ক্লিনিক্যাল পুষ্টিবিজ্ঞানের একটি পরম সোনালী নিয়ম যা প্রতিটি শিক্ষার্থী ও চিকিৎসকের মনে রাখা জরুরি: আমাদের পুষ্টি ব্যবস্থাপত্রকে (Intervention) সরাসরি পেছনের মূল কারণের (Etiology) ওপর কাজ করতে হবে [1, 5]। যদি পুষ্টি পরিকল্পনা মূল কারণকে লক্ষ্য না করে, তবে ডায়েট চার্ট কাগজে যতই সুন্দর দেখাক না কেন, রোগী কখনো সুস্থ হবেন না।'
            ),
            l(
              'Consider a real-world example: Suppose an elderly grandmother named Mrs. Begum is admitted to the hospital, having lost 5 kilograms in two months because she has barely eaten her meals. A careless observer might quickly say: "Give her high-calorie shakes and tell her to eat more!" But when a trained clinical dietitian examines Mrs. Begum\'s mouth, they discover that her dentures are broken and fitting loosely, digging painfully into her gums every time she tries to chew solid rice or meat [5].\n\nIf the dietitian simply writes "Patient not eating related to old age", giving her solid food brochures is completely useless! But if the dietitian writes: Inadequate oral intake (P) related to painful ill-fitting dentures and oral mucosal irritation (E) as evidenced by daily meal consumption below 50% and 5 kg involuntary weight loss (S), the solution becomes crystal clear! The intervention is immediate: prescribe soft, nourishing, calorie-dense puddings and soups that require no chewing, while coordinating with a dentist to repair her dentures. The problem is resolved because the etiology was directly addressed [1].',
              'একটি বাস্তব উদাহরণ লক্ষ্য করুন: ধরুন, সালেহা বেগম নামের সত্তর বছর বয়সী এক বৃদ্ধা হাসপাতালে ভর্তি হয়েছেন। গত দুই মাসে তার পাঁচ কেজি ওজন কমে গেছে কারণ তিনি খাবার খেতে পারছেন না। কোনো অনভিজ্ঞ ব্যক্তি হয়তো বলবেন: "উনাকে বেশি করে পুষ্টিকর খাবার খেতে বলুন আর ক্যালোরির শরবত দিন!" কিন্তু একজন দক্ষ পুষ্টিবিদ যখন সালেহা বেগমের মুখ পরীক্ষা করলেন, তখন দেখলেন তার বাঁধানো দাঁত (ডেনচার) ভেঙে গিয়ে মাড়িতে দেবে গেছে; শক্ত ভাত বা রুটি চিবোতে গেলেই মাড়ি কেটে গিয়ে রক্ত বের হয় এবং প্রচণ্ড ব্যথা করে [5]।\n\nএখন পুষ্টিবিদ যদি দায়সারাভাবে লেখেন "রোগী বয়সজনিত কারণে খাচ্ছেন না", তবে তাকে খাবারের নিয়মবই দেওয়া সম্পূর্ণ অর্থহীন! কিন্তু পুষ্টিবিদ যদি সঠিক PES লেখেন: অপর্যাপ্ত খাদ্য গ্রহণ (P) related to ভাঙা বাঁধানো দাঁতের কারণে মুখে তীব্র ব্যথা ও মাড়ির ক্ষত (E) as evidenced by চাহিদার ৫০% এর কম খাবার খাওয়া এবং ৫ কেজি ওজন হ্রাস (S)—তাহলে চিকিৎসার রাস্তা সাথে সাথে পরিষ্কার হয়ে যায়! তাৎক্ষণিক পদক্ষেপ: রোগীকে শক্ত খাবার না দিয়ে নরম, সুস্বাদু ও পুষ্টিকর খিচুড়ি, স্যুপ ও স্মুদি দেওয়া যা চিবোতে হয় না, এবং ডেন্টিস্ট ডেকে দাঁত মেরামত করানো। মূল কারণ দূর হলো, রোগীও সুস্থ হয়ে উঠলেন [1]।'
            ),
            l(
              'Furthermore, when Mrs. Begum returns for her follow-up visit during Monitoring & Evaluation (ME), the dietitian does not ask vague, subjective questions like "Do you feel slightly better?" Instead, they re-evaluate the exact Signs and Symptoms written in the original PES statement: Has her daily calorie intake returned to 100% of her metabolic needs? Has her body weight stabilized or begun to climb back toward normal? By linking the diagnosis directly to objective follow-up metrics, nutrition therapy becomes an exact, auditable science [1, 3].',
              'পরবর্তীতে যখন সালেহা বেগম ফলো-আপে আসেন, তখন পুষ্টিবিদ "এখন কেমন লাগছে?" জাতীয় অস্পষ্ট প্রশ্ন করেন না। বরং তিনি মূল PES বাক্যে লিখে রাখা নির্দিষ্ট লক্ষণ ও প্রমাণগুলো (Signs and Symptoms) পুনরায় পরিমাপ করেন: তার দৈনিক ক্যালোরি গ্রহণ কি চাহিদার শতভাগে পৌঁছেছে? তার ওজন কমে যাওয়া কি বন্ধ হয়ে আবার স্বাভাবিকের দিকে এগোচ্ছে? রোগনির্ণয়ের লক্ষণকে সরাসরি পরবর্তী পরীক্ষার মাপকাঠি হিসেবে ব্যবহার করার কারণেই আধুনিক পুষ্টিসেবা এত নির্ভুল ও বিজ্ঞানসম্মত [1, 3]।'
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
              'The Nutrition Care Process (NCP) is structured as a non-linear, dynamic feedback loop organized into four discrete operational stages, universally documented in medical records under the acronym ADIME: Assessment (A), Diagnosis (D), Intervention (I), and Monitoring & Evaluation (ME) [1, 3]. Far from being a rigid bureaucratic checklist, this architecture creates a continuous quality-improvement cycle that bridges laboratory biochemistry, physiological stress kinetics, and personalized meal planning.',
              'নিউট্রিশন কেয়ার প্রসেস (NCP) কোনো একমুখী রৈখিক তালিকা নয়, বরং এটি একটি গতিশীল প্রতিক্রিয়া চক্র (Feedback loop), যা হাসপাতালের নথিপত্রে ADIME নামে পরিচিত চারটি সুনির্দিষ্ট ধাপে পরিচালিত হয়: মূল্যায়ন বা অ্যাসেসমেন্ট (A), রোগনির্ণয় বা ডায়াগনোসিস (D), চিকিৎসা বা ইন্টারভেনশন (I), এবং পর্যবেক্ষণ ও মূল্যায়ন বা মনিটরিং ও ইভ্যালুয়েশন (ME) [1, 3]। এটি কেবল বাঁধাধরা নিয়ম নয়, বরং এমন এক বৈজ্ঞানিক কর্মপদ্ধতি যা ল্যাবরেটরির জৈব-রসায়ন, শারীরিক প্রদাহের তীব্রতা এবং ব্যক্তিগত খাদ্য ব্যবস্থাপত্রকে একটি সুশৃঙ্খল সুতোয় বেঁধে দেয়।'
            ),
            l(
              'In Stage 1 (Assessment), the clinician systematically aggregates and synthesizes the four ABCD dimensions detailed in Chapter 01: Anthropometrics, Biochemical markers, Clinical physical examination (NFPE), and Dietary intake histories [1]. Rather than viewing these as isolated numbers, the practitioner benchmarks raw patient data against validated physiological standards—such as the Mifflin-St Jeor predictive equations, Hamwi ideal body weight references, World Health Organization growth curves, and clinical inflammatory biomarkers like C-reactive protein (CRP) [1, 4].',
              '১ম ধাপ (Assessment বা মূল্যায়ন): এই ধাপে চিকিৎসক পূর্ববর্তী ১ম অধ্যায়ে বিস্তারিতভাবে আলোচিত ABCD-র চারটি দিক পদ্ধতিগতভাবে সংগ্রহ ও বিশ্লেষণ করেন: শারীরিক পরিমাপ (A), রক্তের বায়োকেমিক্যাল মার্কার (B), শারীরিক লক্ষণভিত্তিক পরীক্ষা (C), এবং বিশদ খাদ্য গ্রহণের ইতিহাস (D) [1]। এগুলোকে বিচ্ছিন্ন সংখ্যা হিসেবে না দেখে বৈজ্ঞানিক রেফারেন্স মানদণ্ডের সাথে তুলনা করা হয়—যেমন মিফলিন-সেন্ট জিওর ক্যালোরি সমীকরণ, হ্যামউই আদর্শ ওজন, বিশ্ব স্বাস্থ্য সংস্থার গ্রোথ চার্ট এবং সি-রিঅ্যাকটিভ প্রোটিনের (CRP) মতো শারীরিক প্রদাহের সূচক [1, 4]।',
            ),
            l(
              'In Stage 2 (Diagnosis), clinical judgment synthesizes these assessment findings into a single, formal nutrition diagnosis using the standardized vocabulary of the electronic Nutrition Care Process Terminology (eNCPT) [2]. In Stage 3 (Intervention), the clinician formulates targeted strategies categorized across four standardized domains: Food and Nutrient Delivery (ND), Nutrition Education (E), Nutrition Counseling (C), and Coordination of Nutrition Care (RC). Finally, in Stage 4 (Monitoring and Evaluation), progress is measured directly against the initial diagnostic indicators to determine clinical efficacy or trigger diagnostic revision [1].',
              '২য় ধাপ (Diagnosis বা রোগনির্ণয়): সংগৃহীত তথ্যাবলি বিশ্লেষণ করে আন্তর্জাতিক eNCPT পরিভাষা অনুযায়ী একটি আনুষ্ঠানিক পুষ্টি রোগনির্ণয় নির্ধারণ করা হয় [2]। ৩য় ধাপ (Intervention বা চিকিৎসা পদক্ষেপ): মূল কারণ দূর করতে চারটি আন্তর্জাতিক ধারায় চিকিৎসা সাজানো হয়: খাবার ও পুষ্টি সরবরাহ (ND), পুষ্টি শিক্ষা (E), কাউন্সেলিং বা পরামর্শ (C), এবং অন্যান্য বিশেষজ্ঞ চিকিৎসকদের সাথে সমন্বয় (RC)। সবশেষে, ৪র্থ ধাপ (Monitoring & Evaluation বা মূল্যায়ন): প্রাথমিক লক্ষণের সাথে তুলনা করে রোগীর শারীরিক উন্নতি পরিমাপ করা হয় এবং প্রয়োজনবোধে চিকিৎসার দিক সংশোধন করা হয় [1]।',
            ),
          ],
        },
        {
          id: 'sec-pes-architecture',
          heading: l('2. eNCPT Diagnostic Taxonomy: Problem, Etiology & Signs/Symptoms', '২. ই-এনসিপিটি ডায়াগনস্টিক পরিভাষা: সমস্যা, কারণ ও লক্ষণের বিজ্ঞান'),
          paragraphs: [
            l(
              'To ensure that clinical communication remains unambiguous across multidisciplinary medical teams worldwide, the electronic Nutrition Care Process Terminology (eNCPT) organizes all recognized nutrition diagnoses into three distinct primary domains [2, 3]:',
              'বিশ্বজুড়ে হাসপাতালগুলোতে বিভিন্ন বিশেষজ্ঞ দলের মধ্যে তথ্যের বিভ্রান্তি দূর করতে ইলেকট্রনিক নিউট্রিশন কেয়ার প্রসেস টার্মিনোলজি (eNCPT) সমস্ত পুষ্টি রোগনির্ণয়কে তিনটি প্রধান বিভাগে বিন্যস্ত করেছে [2, 3]:',
            ),
            l(
              'Syntactic Architecture: [Standardized eNCPT Problem] related to [Root Pathophysiological Etiology] as evidenced by [Objective Signs and Subjective Symptoms]',
              'বাক্য গঠন কাঠামো: [eNCPT প্রমিত সমস্যা] related to [মূল শারীরবৃত্তীয় কারণ] as evidenced by [সুনির্দিষ্ট পরিমাপযোগ্য লক্ষণ]',
            ),
            l(
              'The Etiology must isolate the specific functional defect or metabolic challenge that a clinical nutrition practitioner can directly resolve or mitigate, rather than lazily repeating a medical disease label. Writing "related to cirrhosis" is unhelpful; writing "related to portal hypertension, gastric varices, and early satiety from massive ascites" immediately dictates a frequent, low-volume, sodium-restricted, high-protein nutrition prescription [1, 2].',
              'এখানে কারণ হিসেবে অলসভাবে কোনো মেডিকেল রোগের নাম লিখে দেওয়া যাবে না; বরং সেই রোগের ভেতরের কোন সমস্যাটি পুষ্টিকে বাধাগ্রস্ত করছে তা নিখুঁতভাবে চিহ্নিত করতে হবে। যেমন "related to লিভার সিরোসিস" লেখা কোনো কাজের কথা নয়; কিন্তু যখন লেখা হয় "related to সিরোসিসের কারণে পেটে অতিরিক্ত পানি জমা (অ্যাসাইটিস) এবং পাকস্থলীতে চাপের ফলে অল্পতেই পেট ভরে যাওয়া"—তখন পুষ্টিবিদ অবিলম্বে রোগীকে অল্প অল্প করে দিনে বার বার উচ্চ-প্রোটিনযুক্ত খাবার এবং নিয়ন্ত্রিত লবণের খাদ্যতালিকা দিতে পারেন [1, 2]।',
            ),
          ],
          bullets: [
            l('1. Intake Domain (NI): Problems related to actual intake of energy, nutrients, fluids, or bioactive substances via oral, enteral, or parenteral routes (e.g., Inadequate energy intake [NI-1.2], Excessive carbohydrate intake [NI-5.8.2], Less than optimal fluid intake [NI-3.1]).', '১. ইনটেক ডোমেইন (NI): মুখ, ফিডিং টিউব বা শিরার মাধ্যমে ক্যালোরি, পুষ্টি উপাদান বা তরল গ্রহণের সমস্যা নির্দেশ করে (যেমন: অপর্যাপ্ত ক্যালোরি গ্রহণ [NI-1.2], অতিরিক্ত কার্বোহাইড্রেট গ্রহণ [NI-5.8.2], অপর্যাপ্ত তরল গ্রহণ [NI-3.1])।'),
            l('2. Clinical Domain (NC): Nutritional problems secondary to medical, physical, or mechanical conditions (e.g., Swallowing difficulty [NC-1.1], Altered GI function [NC-1.4], Unintended weight loss [NC-3.2]).', '২. ক্লিনিক্যাল ডোমেইন (NC): শরীরের অঙ্গের রোগ বা যান্ত্রিক জটিলতাজনিত পুষ্টি সমস্যা (যেমন: খাবার গিলতে সমস্যা [NC-1.1], পরিপাকতন্ত্রের শোষণ ত্রুটি [NC-1.4], অনাকাঙ্ক্ষিত দ্রুত ওজন হ্রাস [NC-3.2])।'),
            l('3. Behavioral-Environmental Domain (NB): Problems related to knowledge, attitudes, physical environment, food access, or food safety (e.g., Food- and nutrition-related knowledge deficit [NB-1.1], Limited access to food [NB-3.1]).', '৩. আচরণগত ও পরিবেশগত ডোমেইন (NB): পুষ্টিজ্ঞান, মানসিক দৃষ্টিভঙ্গি, পরিবেশ বা নিরাপদ খাদ্যের প্রাপ্যতা সম্পর্কিত সমস্যা (যেমন: পুষ্টিজ্ঞানের অভাব [NB-1.1], খাদ্যের অপ্রতুলতা [NB-3.1])।'),
          ],
        },
        {
          id: 'sec-domain-priorities',
          heading: l('3. Domain Prioritization: Why Intake Trumps Clinical and Behavioral', '৩. ডোমেইন অগ্রাধিকার: কেন ইনটেক ডোমেইন সবার আগে বিবেচিত হয়?'),
          paragraphs: [
            l(
              'In real-world clinical wards, complex multimorbid patients frequently satisfy diagnostic criteria for multiple concurrent problems spanning all three eNCPT domains simultaneously [1, 2]. For example, a critically ill patient recovering from a massive ischemic stroke might qualify for Inadequate energy intake (NI-1.2), Swallowing difficulty (NC-1.1), Severe malnutrition (NC-4.1.1), and Impaired ability to prepare meals (NB-2.4). Which of these should the clinical team select as the primary focus of care?',
              'হাসপাতালের বাস্তব পরিবেশে জটিল রোগীদের ক্ষেত্রে প্রায়ই একই সাথে তিনটি ডোমেইনের একাধিক পুষ্টি সমস্যা দেখা দেয় [1, 2]। উদাহরণস্বরূপ, মস্তিষ্কে মারাত্মক স্ট্রোক হওয়া একজন রোগীর ক্ষেত্রে একই সাথে অপর্যাপ্ত শক্তি গ্রহণ (NI-1.2), খাবার গিলতে না পারা (NC-1.1), তীব্র অপুষ্টি (NC-4.1.1) এবং খাবার প্রস্তুত করার অক্ষমতা (NB-2.4) বিদ্যমান থাকতে পারে। এই অবস্থায় পুষ্টি বিশেষজ্ঞ দল কোন সমস্যাটিকে সবার আগে চিকিৎসার কেন্দ্রবিন্দু হিসেবে বেছে নেবেন?',
            ),
            l(
              'The universally established principle of clinical dietetics dictates that the Intake Domain (NI) is the preferred and prioritized diagnostic label whenever clinical circumstances permit [2, 4]. There is a profound biological and professional justification for this hierarchy:',
              'ক্লিনিক্যাল ডায়েটেটিক্সের আন্তর্জাতিক স্বীকৃত নীতি হলো: সম্ভবপর ক্ষেত্রে সর্বদা ইনটেক ডোমেইনকে (NI) সর্বোচ্চ অগ্রাধিকার দিতে হবে [2, 4]। এই অগ্রাধিকারের পেছনে গভীর বৈজ্ঞানিক ও পেশাগত যুক্তি রয়েছে:',
            ),
          ],
          bullets: [
            l('1. Professional Scope of Mastery: While physicians and surgeons treat underlying organ pathologies and nurses assist with functional mobility, registered dietitians are uniquely licensed and trained to calculate and deliver exact substrate kinetics, amino acid profiles, and fluid balance.', '১. পেশাগত দক্ষতার ক্ষেত্র: চিকিৎসক যখন অঙ্গের রোগ সারাচ্ছেন বা নার্স যখন সেবা দিচ্ছেন, তখন একজন পুষ্টিবিদই একমাত্র বিশেষজ্ঞ যিনি রোগীর কোষের সঠিক শক্তি, অ্যামিনো অ্যাসিডের চাহিদা ও তরলের ভারসাম্য নিখুঁতভাবে পরিচালনা করতে পারেন।'),
            l('2. Direct Mechanistic Resolution: Delivering adequate calories and essential amino acids (e.g., via a nasogastric feeding tube) directly halts muscle wasting, supports immune cell proliferation, and prevents metabolic decline. Resolving the Intake problem enables downstream clinical problems (like weight loss and wound breakdown) to heal naturally [1, 2].', '২. সরাসরি শারীরিক আরোগ্য: রোগীর শরীরে পর্যাপ্ত ক্যালোরি ও প্রোটিন পৌঁছে দিতে পারলে (যেমন প্রয়োজনে রাইলস টিউবের মাধ্যমে) শরীরের পেশি ক্ষয় বন্ধ হয়, রোগ প্রতিরোধ ক্ষমতা বাড়ে এবং ঘা দ্রুত শুকায়। অর্থাৎ ইনটেক সমস্যা সমাধান করলে অন্যান্য ক্লিনিক্যাল জটিলতাগুলোও আপনাআপনি দূর হতে শুরু করে [1, 2]।'),
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
              'To prevent diagnostic errors, guarantee academic reproducibility, and ensure strict health informatics compliance, every drafted PES statement must undergo a rigorous five-step critical thinking audit filter before it is entered into the permanent medical record [1, 3, 5]:',
              'রোগনির্ণয়ে ভুলভ্রান্তি প্রতিরোধ, গবেষণামূলক ধারাবাহিকতা এবং হাসপাতালের রেকর্ড নিখুঁত রাখতে প্রতিটি PES বাক্য চূড়ান্ত করার পূর্বে একটি কঠোর পাঁচ-ধাপের ক্লিনিক্যাল যাঁচাইকরণ ফিল্টারের মধ্য দিয়ে যেতে হয় [1, 3, 5]:',
            ),
            l(
              'A pervasive error in junior clinical practice is treating laboratory proxies as etiologies—for example, writing "Inadequate oral intake related to low serum albumin". As established in Chapter 01, serum albumin is a negative acute-phase hepatic reactant driven by systemic cytokines (IL-6, TNF-α), not a measure of dietary intake [4]. A scientifically valid audit instantly rejects this formulation, guiding the clinician to identify the actual biological hindrance: Inadequate oral intake (NI-2.1) related to severe nausea and delayed gastric emptying secondary to high-dose interleukin chemotherapy as evidenced by 24-hour food intake below 35% of energy needs for 14 days [1, 3].',
              'নবীন চিকিৎসকদের ক্ষেত্রে একটি সাধারণ ভুল হলো রক্তপরীক্ষার বিভ্রান্তিকর মানকে কারণ হিসেবে লিখে ফেলা—যেমন "Inadequate oral intake related to কম সিরাম অ্যালবুমিন"। আমরা ১ম অধ্যায়ে জেনেছি অ্যালবুমিন কোনো পুষ্টির মাপকাঠি নয়, বরং প্রদাহ সৃষ্টিকারী সাইটোকাইনের (IL-6, TNF-α) প্রভাবে লিভারে এর উৎপাদন কমে যায় [4]। একটি বিজ্ঞানসম্মত অডিট ফিল্টার তাৎক্ষণিকভাবে এই ভুল বাক্য বাতিল করে এবং সঠিক শারীরবৃত্তীয় কারণ খুঁজে বের করতে পথ দেখায়: অপর্যাপ্ত খাদ্য গ্রহণ (NI-2.1) related to কেমোথেরাপিজেনিত তীব্র বমি বমি ভাব এবং পাকস্থলী খালি হতে বিলম্ব as evidenced by ১৪ দিন ধরে চাহিদার মাত্র ৩৫% খাবার গ্রহণ [1, 3]।',
            ),
          ],
          bullets: [
            l('Filter 1 (Scope of Practice): Can the clinical nutrition team independently resolve or significantly improve the Problem?', 'ফিল্টার ১ (পেশাগত আওতা): পুষ্টি দল কি স্বাধীনভাবে এই সমস্যার সমাধান বা উল্লেখযোগ্য উন্নতি করতে সক্ষম?'),
            l('Filter 2 (Root Mechanistic Cause): Is the Etiology the true underlying driver, or merely another downstream symptom?', 'ফিল্টার ২ (মূল শারীরবৃত্তীয় কারণ): চিহ্নিত কারণটি কি আসলেও মূল উৎস, নাকি কেবল বাহ্যিক কোনো উপসর্গ?'),
            l('Filter 3 (Intervention Efficacy): Will the prescribed dietary therapy directly eliminate or bypass this specific Etiology?', 'ফিল্টার ৩ (চিকিৎসার কার্যকারিতা): প্রস্তাবিত খাদ্যব্যবস্থা কি সরাসরি এই মূল কারণকে দূর বা উপশম করতে পারবে?'),
            l('Filter 4 (Measurable Metrics): Are the Signs and Symptoms objective, numerical, and trackable over discrete time intervals?', 'ফিল্টার ৪ (পরিমাপযোগ্য মানদণ্ড): লক্ষণগুলো কি সুনির্দিষ্ট, সংখ্যায় পরিমাপযোগ্য এবং সময়ের সাথে ট্র্যাক করা সম্ভব?'),
            l('Filter 5 (Assessment Substantiation): Does the raw ABCD assessment data unequivocally confirm the diagnostic terminology?', 'ফিল্টার ৫ (তথ্যের সত্যতা): রোগীর ABCD উপাত্ত কি এই রোগনির্ণয়ের সপক্ষে সন্দেহাতীত প্রমাণ প্রদান করে?'),
          ],
        },
        {
          id: 'sec-clinical-alignment',
          heading: l('2. Linking PES to Outcomes Management & Health Informatics', '২. স্বাস্থ্য তথ্যপ্রযুক্তি ও ফলাফল ব্যবস্থাপনায় PES বাক্যের ভূমিকা'),
          paragraphs: [
            l(
              'In 21st-century hospital systems, standardized eNCPT diagnostic statements do far more than facilitate communication between bedside caregivers; they serve as foundational data nodes in global healthcare informatics and clinical outcomes management [1, 2]. By cross-mapping standardized eNCPT concepts to universal biomedical ontology systems—such as SNOMED-CT (Systematized Nomenclature of Medicine -- Clinical Terms) and LOINC (Logical Observation Identifiers Names and Codes)—electronic health record (EHR) platforms can automatically track population-wide malnutrition rates, benchmark the cost-effectiveness of medical nutrition therapy, and calculate hospital readmission reductions [1].',
              'একবিংশ শতাব্দীর আধুনিক হাসপাতাল ব্যবস্থায় প্রমিত eNCPT ডায়াগনস্টিক বাক্য কেবল বেডসাইড চিকিৎসকদের পারস্পরিক ভাব বিনিময়েই সীমাবদ্ধ নয়; এটি আন্তর্জাতিক স্বাস্থ্য তথ্যপ্রযুক্তি (Health Informatics) এবং রোগী আরোগ্য ব্যবস্থাপনায় অত্যন্ত মূল্যবান ডেটা নোড হিসেবে কাজ করে [1, 2]। এই প্রমিত পরিভাষাকে আন্তর্জাতিক মেডিকেল অনটোলজি—যেমন SNOMED-CT এবং LOINC কোডের সাথে সংযুক্ত করার ফলে যেকোনো ইলেকট্রনিক স্বাস্থ্য রেকর্ড (EHR) সফটওয়্যার স্বয়ংক্রিয়ভাবে হাসপাতালে অপুষ্টির হার ট্র্যাক করতে পারে, পুষ্টি চিকিৎসার ব্যয়-সাশ্রয়ী কার্যকারিতা প্রমাণ করতে পারে এবং রোগীর পুনরায় হাসপাতালে ভর্তি হওয়ার হার কমাতে সাহায্য করে [1]।',
            ),
            l(
              'When the fourth stage of the NCP—Monitoring & Evaluation (M&E)—tracks quantifiable indicators over time (such as nitrogen retention velocity, body composition phase angle measured via bioelectrical impedance analysis, or glycemic variability indexes), it closes the diagnostic feedback loop [1, 4]. If an intervention fails to produce measurable improvement within the projected therapeutic window, the scientific practitioner does not simply pile on more calories blindly; they revisit the diagnostic algorithm to evaluate whether the primary PES statement was predicated on an incomplete assessment or an erroneously classified etiology [1, 3].',
              'নিউট্রিশন কেয়ার প্রসেসের ৪র্থ ধাপ (Monitoring & Evaluation) যখন সময়ের সাথে সাথে সুনির্দিষ্ট সংখ্যাগত সূচকগুলো পরিমাপ করে (যেমন নাইট্রোজেন ব্যালেন্সের উন্নতি, বায়োইলেকট্রিক্যাল ইম্পিডেন্স অ্যানালাইসিসে সেলুলার ফেজ অ্যাঙ্গেলের বৃদ্ধি বা রক্তের গ্লুকোজের স্থায়িত্ব), তখন তা পুরো রোগনির্ণয় প্রক্রিয়ার ফিডব্যাক লুপ সম্পূর্ণ করে [1, 4]। নির্দিষ্ট সময়ের মধ্যে আশানুরূপ অগ্রগতি না হলে অন্ধের মতো কেবল খাবার না বাড়িয়ে একজন দক্ষ বিজ্ঞানী-চিকিৎসক পুনরায় গোয়েন্দার মতো মূল্যায়নে ফিরে যান এবং খতিয়ে দেখেন প্রাথমিক রোগনির্ণয় বা চিহ্নিত কারণে কোনো সূক্ষ্ম ঘাটতি ছিল কি না [1, 3]।',
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
        term: l('ADIME Framework', 'এডিমে (ADIME) কাঠামো'),
        definition: l(
          'The four sequential stages of modern clinical nutrition documentation: Assessment (A), Diagnosis (D), Intervention (I), and Monitoring & Evaluation (ME).',
          'আধুনিক ক্লিনিক্যাল পুষ্টিসেবার চার ধাপের ধারাবাহিক কর্মপদ্ধতি: মূল্যায়ন বা অ্যাসেসমেন্ট (A), রোগনির্ণয় বা ডায়াগনোসিস (D), চিকিৎসা বা ইন্টারভেনশন (I), এবং পর্যবেক্ষণ বা মনিটরিং ও ইভ্যালুয়েশন (ME)।'
        ),
      },
      {
        term: l('PES Statement', 'পিইএস (PES) বাক্য'),
        definition: l(
          'A three-part standardized diagnostic sentence connecting the Problem (P) related to the root Etiology (E) as evidenced by objective Signs and Symptoms (S).',
          'সুনির্দিষ্ট পুষ্টি সমস্যা (P), তার পেছনের আসল শারীরবৃত্তীয় কারণ (E) এবং পরিমাপযোগ্য লক্ষণসমূহকে (S) যুক্ত করে রচিত প্রমিত আন্তর্জাতিক বাক্য।'
        ),
      },
      {
        term: l('eNCPT Dictionary', 'ই-এনসিপিটি (eNCPT) অভিধান'),
        definition: l(
          'The electronic Nutrition Care Process Terminology: a universally standardized, peer-reviewed clinical vocabulary of nutrition diagnoses and interventions.',
          'আন্তর্জাতিকভাবে স্বীকৃত পুষ্টিবিজ্ঞানের প্রমিত অভিধান, যা বিশ্বজুড়ে হাসপাতাল ও গবেষণায় একই অর্থবোধক পরিভাষা ব্যবহার নিশ্চিত করে।'
        ),
      },
      {
        term: l('Intake Domain (NI)', 'ইনটেক ডোমেইন (NI)'),
        definition: l(
          'The prioritized diagnostic category describing actual deficits or excesses in calories, fluids, or nutrients entering the body.',
          'ক্লিনিক্যাল পুষ্টিসেবায় সর্বোচ্চ অগ্রাধিকারপ্রাপ্ত রোগনির্ণয় বিভাগ, যা শরীরে ক্যালোরি, পুষ্টি উপাদান বা তরল প্রবেশের ঘাটতি বা অতিরিক্ততা নির্দেশ করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Practical Worked Case Study: Formulating a Validated PES Statement for Post-Surgical Complications with Chylothorax',
          'বাস্তব ক্লিনিক্যাল কেস স্টাডি: খাদ্যনালীর অস্ত্রোপচার-পরবর্তী কাইলথোরাক্স ও অপুষ্টিতে নির্ভুল PES বাক্য প্রণয়ন'
        ),
        steps: [
          l(
            'Step 1: Patient Profile & Assessment Data. A 58-year-old gentleman named Mr. Karim undergoes complex thoracic surgery (esophagectomy for esophageal cancer). On post-operative day 5, a milky fluid begins pooling rapidly in his chest drainage tube (1,200 mL/day). Laboratory testing of the chest fluid reveals a triglyceride concentration of 240 mg/dL, confirming a thoracic duct lymphatic tear (Chylothorax). His pre-surgery weight of 74 kg has dropped to 67 kg in just 3 weeks (a 9.5% severe weight loss). He is currently forbidden from eating by mouth (NPO). His blood albumin is 2.4 g/dL and his C-reactive protein (CRP) is 78 mg/L, reflecting intense surgical inflammation.',
            'ধাপ ১: রোগীর তথ্য ও প্রাথমিক মূল্যায়ন: জনাব করিম নামের ৫৮ বছর বয়সী এক ভদ্রলোকের খাদ্যনালীর ক্যান্সারের জন্য বুক চিরে একটি বড় অস্ত্রোপচার (ইসোফ্যাজেক্টমি) করা হয়। অস্ত্রোপচারের ৫ দিন পর তার বুকের ড্রেনেজ পাইপে হঠাৎ সাদা দুধের মতো তরল (প্রতিদিন ১২০০ মিলি) জমতে শুরু করে। ল্যাবরেটরিতে এই তরল পরীক্ষা করে দেখা যায় ট্রাইগ্লিসারাইড চর্বির মাত্রা ২৪০ mg/dL, যা প্রমাণ করে অস্ত্রোপচারের সময় লিম্ফ নালী ক্ষতিগ্রস্ত হয়ে চর্বি ফুসফুসের পর্দায় চুইয়ে পড়ছে (কাইলথোরাক্স)। ৩ সপ্তাহের ব্যবধানে তার ওজন ৭৪ কেজি থেকে কমে ৬৭ কেজি হয়েছে (৯.৫% তীব্র অনিচ্ছাকৃত ওজন হ্রাস)। বর্তমানে মুখে খাবার গ্রহণ সম্পূর্ণ বন্ধ (NPO)। রক্তে অ্যালবুমিন ২.৪ g/dL এবং প্রদাহের নির্দেশক সিআরপি ৭৮ mg/L।'
          ),
          l(
            'Step 2: Differential Diagnosis & Competing Options. The clinical dietitian evaluates three competing diagnostic possibilities: (a) Malnutrition in acute illness (NC-4.1.1); (b) Inadequate oral intake (NI-2.1); or (c) Altered GI function / impaired nutrient transport (NC-1.4).',
            'ধাপ ২: সম্ভাব্য রোগনির্ণয়সমূহের বিশ্লেষণ: পুষ্টি বিশেষজ্ঞ দল তিনটি সম্ভাব্য সমস্যার কথা বিবেচনা করেন: (ক) তীব্র অসুস্থতাজনিত মারাত্মক অপুষ্টি (NC-4.1.1); (খ) অপর্যাপ্ত খাদ্য গ্রহণ (NI-2.1); অথবা (গ) পরিপাকতন্ত্রের শোষণ ও চর্বি পরিবহন ত্রুটি (NC-1.4)।'
          ),
          l(
            'Step 3: Selecting and Prioritizing the Mechanistic Problem. Although severe undernutrition is undeniably present, the immediate life-threatening physiological driver that nutrition therapy must control is the continuous lymphatic leakage of dietary fat. Normal dietary fats (long-chain triglycerides) are absorbed into the gut\'s lymphatic vessels (lacteals) and travel up the thoracic duct, which would worsen the lung leakage. Therefore, the team selects Altered GI function (NC-1.4) because it directly dictates the specialized physiological mechanism of feeding.',
            'ধাপ ৩: মূল শারীরবৃত্তীয় কারণভিত্তিক সমস্যা অগ্রাধিকার: তীব্র অপুষ্টি থাকা সত্ত্বেও এই মুহূর্তে রোগীর জীবনের প্রধান ঝুঁকি হলো লিম্ফ নালী দিয়ে চর্বি ক্ষরণ। সাধারণ খাবারের চর্বি (লং-চেইন ট্রাইগ্লিসারাইড) অন্ত্র থেকে শোষিত হয়ে সরাসরি এই লিম্ফ নালীতে প্রবেশ করে, ফলে সাধারণ খাবার দিলে ফুসফুসে চর্বি ক্ষরণ মারাত্মক রূপ নেবে। তাই পুষ্টি দল পরিপাকতন্ত্র ও পুষ্টি পরিবহন ত্রুটি (NC-1.4) নির্বাচন করেন, কারণ এটি সরাসরি বিশেষ খাদ্য নির্বাচনের দিকনির্দেশনা দেয়।'
          ),
          l(
            'Step 4: Writing the Rigorous, Validated PES Statement. Problem: Altered GI function (NC-1.4) related to surgical trauma of the thoracic duct with chylous lymphatic extravasation as evidenced by pleural drainage of 1,200 mL/day with pleural triglycerides 240 mg/dL, NPO status, and a 9.5% involuntary weight loss in 3 weeks.',
            'ধাপ ৪: চূড়ান্ত নির্ভুল PES বাক্য গঠন: Altered GI function (NC-1.4) related to অস্ত্রোপচারে থোরাসিক ডাক্ট ক্ষতিগ্রস্ত হওয়ায় ফুসফুসের পর্দায় চর্বিমিশ্রিত লিম্ফ ক্ষরণ as evidenced by প্রতিদিন ১২০০ মিলি লিম্ফ নিঃসরন যাতে ট্রাইগ্লিসারাইড ২৪০ mg/dL, মুখে খাবার বন্ধ থাকা এবং ৩ সপ্তাহে ৯.৫% তীব্র ওজন হ্রাস।'
          ),
          l(
            'Step 5: Directing the Intervention and Objective Follow-up. Intervention: Prescribe an extremely low long-chain fat diet (< 10 g/day) fortified with Medium-Chain Triglycerides (MCT oils), or initiate Total Parenteral Nutrition (TPN) through a central vein. Why? Because medium-chain fats bypass the lymphatic ducts and enter the liver directly via the portal vein, allowing the damaged thoracic duct to seal and heal! Monitoring & Evaluation: Measure daily chest tube drainage volume (targeting < 100 mL/day), observe the fluid clearing from milky to transparent, and weigh Mr. Karim twice weekly to ensure weight stabilization.',
            'ধাপ ৫: চিকিৎসা ও ধারাবাহিক পর্যবেক্ষণ: চিকিৎসা হিসেবে সাধারণ চর্বি প্রায় সম্পূর্ণ বন্ধ করে (< ১০ গ্রাম/দিন) বিশেষ মিডিয়াম চেইন ট্রাইগ্লিসারাইড (MCT) তেলযুক্ত খাবার দেওয়া অথবা শিরার মাধ্যমে বিশেষ পুষ্টি (TPN) চালু করা। কেন? কারণ মিডিয়াম চেইন চর্বি লিম্ফ নালী দিয়ে যায় না, সরাসরি রক্তের পোর্টাল ভেইন দিয়ে লিভারে পৌঁছে যায়; ফলে ক্ষতিগ্রস্ত লিম্ফ নালীটি বিশ্রাম পায় ও দ্রুত জোড়া লাগে! পর্যবেক্ষণ: প্রতিদিন বুকের পাইপের তরলের পরিমাণ মাপা (লক্ষ্য: দিনে ১০০ মিলির নিচে নামিয়ে আনা), তরল পরিষ্কার হচ্ছে কি না দেখা এবং প্রতি সপ্তাহে দুই দিন ওজন মেপে শরীরের ক্ষয় রোধ নিশ্চিত করা।'
          ),
        ],
        conclusion: l(
          'By methodically structuring the PES statement around the exact anatomical defect (lymphatic leakage), the clinical team designed an ingenious nutrition plan using MCT fats that allowed the torn thoracic duct to heal completely, halting the leak within 8 days while rebuilding the patient\'s metabolic strength without emergency re-operation.',
          'শারীরবৃত্তীয় কারণকে লক্ষ্য করে নিখুঁত PES বাক্য রচনার মাধ্যমে পুষ্টি দল একটি বিশেষ এমসিটি (MCT) ফ্যাট নির্ভর ডায়েট প্রণয়ন করতে সক্ষম হয়। এর ফলে কোনো জরুরি অস্ত্রোপচার ছাড়াই মাত্র ৮ দিনে রোগীর লিম্ফ নালীর ক্ষত সম্পূর্ণ নিরাময় হয় এবং তিনি পুনরায় সুস্থ জীবনে ফিরে আসেন।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why is "Type 2 Diabetes Mellitus" considered an invalid Nutrition Problem in a professional PES statement?',
          'পেশাদার PES বাক্যে কেন "টাইপ ২ ডায়াবেটিস" কে একটি ভুল বা অগ্রহণযোগ্য পুষ্টি সমস্যা ধরা হয়?'
        ),
        answer: l(
          'Type 2 Diabetes Mellitus is a medical pathology diagnosed and managed by a physician. A dietitian cannot independently cure or resolve the underlying chronic disease itself. Instead, the dietitian identifies the specific nutritional and behavioral problems that nutrition therapy can directly repair—such as "Inconsistent carbohydrate intake (NI-5.8.4)" or "Excessive energy intake (NI-1.3)". When these nutritional problems are resolved, the patient\'s blood glucose stabilizes.',
          'টাইপ ২ ডায়াবেটিস হলো চিকিৎসকের নির্ণয়কৃত একটি শারীরিক রোগ বা প্যাথলজি। একজন পুষ্টিবিদ একা এই দীর্ঘমেয়াদী রোগ শরীর থেকে চিরতরে নির্মূল করতে পারেন না। কিন্তু তিনি এর সাথে জড়িত সুনির্দিষ্ট পুষ্টি ও খাদ্য সমস্যা নির্ণয় করেন—যেমন "অনিয়মিত কার্বোহাইড্রেট গ্রহণ (NI-5.8.4)" বা "অতিরিক্ত ক্যালোরি গ্রহণ (NI-1.3)"। পুষ্টি চিকিৎসার মাধ্যমে এই পুষ্টি সমস্যাগুলো পুরোপুরি সমাধান করলে ডায়াবেটিস সহজে নিয়ন্ত্রণে চলে আসে।'
        ),
      },
      {
        question: l(
          'What is the single most important rule regarding the Etiology in a clinically effective PES statement?',
          'একটি কার্যকর ও বিজ্ঞানসম্মত PES বাক্যে কারণের (Etiology) সবচেয়ে গুরুত্বপূর্ণ নিয়মটি কী?'
        ),
        answer: l(
          'The Etiology must identify the root biological, physical, or behavioral cause that the planned nutrition intervention can directly eliminate, resolve, or bypass. If the intervention does not target the etiology, the treatment will fail. Furthermore, the etiology should never merely restate the medical diagnosis without explaining the nutritional mechanism.',
          'কারণটিকে (Etiology) এমন একটি মূল শারীরবৃত্তীয়, শারীরিক বা আচরণগত কারণ হতে হবে যা প্রস্তাবিত পুষ্টি চিকিৎসার মাধ্যমে সরাসরি দূর করা, নিয়ন্ত্রণ করা বা বিকল্প উপায়ে সমাধান করা সম্ভব। যদি চিকিৎসা কারণকে লক্ষ্য না করে, তবে রোগী সুস্থ হবেন না। তাছাড়া কারণ হিসেবে কেবল কোনো সাধারণ রোগের নাম না লিখে পুষ্টি বাধাগ্রস্ত হওয়ার ভেতরের আসল কারণটি স্পষ্ট করতে হবে।'
        ),
      },
    ],
  },
}
