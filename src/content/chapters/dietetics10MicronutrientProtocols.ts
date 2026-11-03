import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics10References: LessonReference[] = [
  {
    id: 'ref-holick-vitd-guidelines-2011',
    authors: 'Holick MF, Binkley NC, Bischoff-Ferrari HA, et al.',
    title: 'Evaluation, Treatment, and Prevention of Vitamin D Deficiency: An Endocrine Society Clinical Practice Guideline',
    organization: 'The Journal of Clinical Endocrinology & Metabolism',
    year: 2011,
    url: 'https://academic.oup.com/jcem/article/96/7/1911/2833656',
    doi: '10.1210/jc.2011-0385',
  },
  {
    id: 'ref-camaschella-iron-2015',
    authors: 'Camaschella C',
    title: 'Iron-Deficiency Anemia',
    organization: 'New England Journal of Medicine',
    year: 2015,
    url: 'https://www.nejm.org/doi/full/10.1056/NEJMra1401038',
    doi: '10.1056/NEJMra1401038',
  },
  {
    id: 'ref-ganzoni-formula-1970',
    authors: 'Ganzoni AM',
    title: 'Intravenous Iron-Dextran: Therapeutic and Experimental Possibilities',
    organization: 'Schweizerische Medizinische Wochenschrift',
    year: 1970,
    url: 'https://pubmed.ncbi.nlm.nih.gov/5436138/',
  },
  {
    id: 'ref-sechi-wernicke-2007',
    authors: 'Sechi G, Serra A',
    title: 'Wernicke’s Encephalopathy: New Clinical Settings and Recent Advances in Diagnosis and Management',
    organization: 'The Lancet Neurology',
    year: 2007,
    url: 'https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(07)70104-7/fulltext',
    doi: '10.1016/S1474-4422(07)70104-7',
  },
  {
    id: 'ref-stabler-b12-nejm-2013',
    authors: 'Stabler SP',
    title: 'Vitamin B12 Deficiency',
    organization: 'New England Journal of Medicine',
    year: 2013,
    url: 'https://www.nejm.org/doi/full/10.1056/NEJMcp1113996',
    doi: '10.1056/NEJMcp1113996',
  },
]

export const dietetics10MicronutrientLesson: LessonTopic = {
  id: 'topic.dietetics.micronutrient-protocols',
  slug: 'micronutrient-therapeutic-supplementation-protocols',
  title: l(
    '10 · Therapeutic Micronutrient Prescriptions: Deficiency Repletion Protocols',
    '১০ · থেরাপিউটিক অনুপুষ্টি প্রেসক্রিপশন: ঘাটতি পূরণ ও চিকিৎসা প্রোটোকল'
  ),
  summary: l(
    'Evidence-based high-potency micronutrient therapy: executing the 50,000 IU Vitamin D3 repletion regimen, calculating intravenous iron deficits via the Ganzoni equation, managing the B12/folate trap, administering mandatory thiamine loading before dextrose to prevent Wernicke encephalopathy, and preventing zinc-induced copper deficiency.',
    'প্রমাণভিত্তিক উচ্চমাত্রার অনুপুষ্টি চিকিৎসা প্রোটোকল: ভিটামিন ডি৩ এর ৫০,০০০ IU চিকিৎসা রেজিমেন, গানজোনি সূত্রের মাধ্যমে শিরায় আয়রনের ঘাটতি নির্ণয়, বি১২ ও ফোলেটের জটিল ফাঁদ নিরাময়, ভার্নিকে এনসেফালোপ্যাথি রোধে গ্লুকোজের আগে থায়ামিন লোডিং এবং অতিরিক্ত জিংক সেবনে কপারের ঘাটতি প্রতিরোধের বৈজ্ঞানিক কৌশল।'
  ),
  subject: 'dietetics',
  version: 1,
  updatedAt: '2026-11-03',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-03',
  prerequisiteIds: ['topic.dietetics.laboratory-biomarkers'],
  relatedTopicIds: ['topic.dietetics.laboratory-biomarkers', 'topic.nutrition.fat-soluble-vitamins-a-d-e-k'],
  objectives: [
    l(
      'Distinguish general dietary prevention allowances (RDA/AI) from high-dose pharmacological repletion protocols in clinical deficiency.',
      'সাধারণ সুস্বাস্থ্যের খাদ্য নির্দেশিকা (RDA) বনাম গুরুতর ক্লিনিক্যাল ঘাটতি পূরণের উচ্চমাত্রার থেরাপিউটিক প্রোটোকলের পার্থক্য নিরূপণ করা।'
    ),
    l(
      'Deploy the Endocrine Society 50,000 IU/week Vitamin D3 protocol for documented deficiency (25(OH)D < 20 ng/mL) and titrate maintenance therapy.',
      'রক্তে ভিটামিন ডি এর ঘাটতিতে (25(OH)D < ২০ ng/mL) আন্তর্জাতিক এন্ডোক্রাইন সোসাইটির ৫০,০০০ IU সাপ্তাহিক প্রোটোকল সফলভাবে প্রয়োগ করা।'
    ),
    l(
      'Calculate total elemental iron deficits using the Ganzoni equation and select between alternate-day oral iron and intravenous formulations.',
      'গানজোনি সমীকরণ ব্যবহার করে শরীরে মোট আয়রনের ঘাটতি হিসাব করা এবং একদিন পর পর মুখে আয়রন বা শিরায় ইনজেকশনের উপযুক্ততা নির্ধারণ করা।'
    ),
    l(
      'Explain the "Folate Trap" and why serum B12 must always be verified and repleted before initiating high-dose folic acid therapy.',
      '"ফোলেট ট্র্যাপ" এর বিপদ ব্যাখ্যা করা এবং উচ্চমাত্রার ফলিক অ্যাসিড দেওয়ার আগে কেন সর্বদা ভিটামিন বি১২ নিশ্চিত করতে হয় তা বিশ্লেষণ করা।'
    ),
    l(
      'Administer high-dose intravenous thiamine (200–500 mg) prior to any carbohydrate infusion in malnourished patients to prevent fatal Wernicke encephalopathy.',
      'মারাত্মক অপুষ্টির রোগীদের জীবনঘাতী ভার্নিকে এনসেফালোপ্যাথি প্রতিরোধে যেকোনো গ্লুকোজ স্যালাইন দেওয়ার আগে উচ্চমাত্রার থায়ামিন ইনজেকশন নিশ্চিত করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A clinical emergency triage pathway for high-risk repletion protocols: Malnourished or alcohol-dependent patient enters triage; Branch 1 mandates high-dose IV Thiamine (500 mg) BEFORE any IV Dextrose to prevent Wernicke brain necrosis; Branch 2 evaluates macrocytic anemia, testing B12 before folate; Branch 3 evaluates microcytic anemia, using the Ganzoni equation to calculate total IV iron deficit.',
      'জরুরি অনুপুষ্টি চিকিৎসার ক্লিনিক্যাল ট্রায়াজ নকশা: মারাত্মক অপুষ্টির রোগী হাসপাতালে এলে; শাখা ১ যে কোনো গ্লুকোজ দেওয়ার আগে মস্তিষ্কের ক্ষতি রোধে শিরায় ৫০০ মিলিগ্রাম থায়ামিন নিশ্চিত করে; শাখা ২ রক্তাল্পতায় ফোলেটের আগে বি১২ পরীক্ষা করে; শাখা ৩ গানজোনি সূত্রের মাধ্যমে শিরায় আয়রনের মোট ঘাটতি হিসাব করে।'
    ),
    steps: [
      l(
        'Step 1: Emergency Thiamine Rule. In malnourished or catabolic patients, immediately infuse intravenous thiamine (200–500 mg) BEFORE starting any dextrose fluids or nutrition.',
        'ধাপ ১: জরুরি থায়ামিনের নিয়ম: অপুষ্টিতে ভোগা রোগীর ক্ষেত্রে কোনো গ্লুকোজ বা খাবার শুরু করার আগেই অবিলম্বে শিরায় ২০০-৫০০ মিলিগ্রাম থায়ামিন ইনজেকশন দিন।'
      ),
      l(
        'Step 2: Vitamin D3 High-Dose Repletion. For 25(OH)D < 20 ng/mL, prescribe 50,000 IU cholecalciferol orally once weekly for 8 weeks, followed by 2,000 IU daily.',
        'ধাপ ২: ভিটামিন ডি৩ উচ্চমাত্রার চিকিৎসা: রক্তে ২০ ng/mL-এর কম থাকলে টানা ৮ সপ্তাহ প্রতি সপ্তাহে ৫০,০০০ IU ভিটামিন ডি৩ ক্যাপসুল দিন, এরপর দিনে ২০০০ IU চালু রাখুন।'
      ),
      l(
        'Step 3: Ganzoni IV Iron Deficit Calculation. For oral iron intolerance or severe malabsorption: $\\text{Deficit (mg)} = \\text{Weight} \\times (\\text{Target Hb} - \\text{Actual Hb}) \\times 2.4 + 500\\text{ mg stores}$.',
        'ধাপ ৩: গানজোনি সূত্রে আয়রনের ঘাটতি: মুখে আয়রন সহ্য না হলে বা অন্ত্রের সমস্যায় গানজোনি সূত্রে মোট ঘাটতি হিসাব করে শিরায় ইনজেকশন দিন।'
      ),
      l(
        'Step 4: Protect Against the Folate Trap. In macrocytic megaloblastic anemia, always measure and replete Vitamin B12; never give solitary high-dose folate without B12.',
        'ধাপ ৪: ফোলেট ফাঁদের সুরক্ষা: বড় লোহিত কণিকার রক্তাল্পতায় আগে ভিটামিন বি১২ নিশ্চিত করুন; বি১২ ছাড়া একা উচ্চমাত্রার ফলিক অ্যাসিড দিলে স্নায়ু ধ্বংস হয়ে প্যারালাইসিস হতে পারে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 48-year-old female with chronic alcohol use disorder and severe undernutrition is brought to the emergency department confused, with bilateral horizontal nystagmus and severe ataxia. The intern orders an immediate infusion of 10% Dextrose in water (D10W) at 150 mL/hr to treat her hypoglycemia (blood glucose = 52 mg/dL). Why must the senior clinical nutrition specialist immediately intervene before the dextrose is connected?',
      'অ্যালকোহল আসক্তি ও তীব্র অপুষ্টিতে আক্রান্ত ৪৮ বছর বয়সী এক নারী চরম বিভ্রান্তি, চোখের অস্বাভাবিক কাঁপুনি (Nystagmus) এবং হাঁটার ভারসাম্যহীনতা নিয়ে জরুরি বিভাগে আসেন। রক্তের চিনি ৫২ mg/dL দেখে শিক্ষানবিস ডাক্তার অবিলম্বে ঘণ্টায় ১৫০ মিলি হারে ১০% গ্লুকোজ স্যালাইন দেওয়ার নির্দেশ দেন। গ্লুকোজ স্যালাইন চালুর ঠিক আগেই সিনিয়র পুষ্টি বিশেষজ্ঞ কেন তাৎক্ষণিকভাবে হস্তক্ষেপ করবেন?'
    ),
    options: [
      l(
        'Dextrose is ineffective for treating hypoglycemia in alcoholic patients and must be replaced with pure fat emulsions.',
        'অ্যালকোহলিক রোগীর ক্ষেত্রে গ্লুকোজ কাজ করে না এবং তাকে স্যালাইনের বদলে চর্বির ইনজেকশন দিতে হবে।'
      ),
      l(
        'Administering a carbohydrate load before replenishing thiamine will rapidly consume remaining intracellular Thiamine Pyrophosphate (TPP) coenzymes, precipitating acute, irreversible brainstem necrosis and fatal Wernicke-Korsakoff Encephalopathy; high-dose IV thiamine (500 mg) must be infused prior to or concurrently with dextrose.',
        'থায়ামিন ঘাটতি পূরণ না করে গ্লুকোজ স্যালাইন দিলে কোষের ভেতরে অবশিষ্ট সামান্য থায়ামিন (TPP) হঠাৎ নিঃশেষ হয়ে যাবে, যার ফলে মস্তিষ্কের ব্রেনস্টেমের কোষ দ্রুত মারা গিয়ে জীবনঘাতী এবং অপরিবর্তনীয় ভার্নিকে-করসাকফ এনসেফালোপ্যাথি ঘটবে; তাই গ্লুকোজের আগেই বা সাথে সাথে শিরায় ৫০০ মিলিগ্রাম থায়ামিন ইনজেকশন দেওয়া বাধ্যতামূলক।'
      ),
      l(
        'Thiamine interferes with peripheral insulin receptors, causing permanent refractory hyperglycemia if given with dextrose.',
        'থায়ামিন দিলে ইনসুলিন কাজ করে না এবং রক্তে চিনি স্থায়ীভাবে অনেক বেড়ে যায়।'
      ),
      l(
        'Intravenous thiamine can only be administered orally after the patient is discharged from the hospital.',
        'থায়ামিন কেবল রোগীকে হাসপাতাল থেকে ছাড়ার পর মুখে খাওয়ার ট্যাবলেট হিসেবে দেওয়া যায়।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'This represents one of the most critical emergency medicine and clinical nutrition imperatives. Thiamine (Vitamin B1), in its active coenzyme form Thiamine Pyrophosphate (TPP), is the obligatory cofactor for pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase in the TCA cycle. In severe thiamine depletion, infusing a massive glucose load accelerates glycolysis, but pyruvate cannot enter the Krebs cycle. Pyruvate is shunted to lactate, triggering severe metabolic lactic acidosis while starving the mammillary bodies and brainstem of ATP, causing acute necrosis (Wernicke Encephalopathy). Guidelines mandate administering 500 mg IV thiamine immediately before or alongside dextrose.',
      'এটি জরুরি চিকিৎসা ও ক্লিনিক্যাল পুষ্টির অন্যতম মৌলিক জীবনরক্ষাকারী নীতি। থায়ামিন (TPP) হলো কোষের গ্লুকোজ পুড়িয়ে শক্তি তৈরির মূল এনজাইমের (Pyruvate Dehydrogenase) অপরিহার্য কো-ফ্যাক্টর। শরীরে থায়ামিন না থাকা অবস্থায় প্রচুর গ্লুকোজ স্যালাইন দিলে গ্লুকোজ শক্তি তৈরি করতে না পেরে বিষাক্ত ল্যাকটিক অ্যাসিডে রূপান্তরিত হয়। এতে মস্তিষ্কের মেমিলারি বডি ও ব্রেনস্টেমের কোষগুলো অক্সিজেনের অভাবে সাথে সাথে মারা যায় (ভার্নিকে এনসেফালোপ্যাথি)। তাই গ্লুকোজ স্যালাইনের আগে বা সাথে সাথে শিরায় ৫০০ মিলিগ্রাম থায়ামিন দেওয়া বাধ্যতামূলক।'
    ),
  },
  evidenceBySection: {
    'sec-supplements-vs-medicine': ['ref-holick-vitd-guidelines-2011', 'ref-camaschella-iron-2015'],
    'sec-vitd-and-iron-simple': ['ref-holick-vitd-guidelines-2011', 'ref-camaschella-iron-2015'],
    'sec-thiamine-golden-rule': ['ref-sechi-wernicke-2007'],
    'sec-vitd-endocrine-protocol': ['ref-holick-vitd-guidelines-2011'],
    'sec-ganzoni-iv-iron': ['ref-ganzoni-formula-1970', 'ref-camaschella-iron-2015'],
    'sec-thiamine-wernicke-rule': ['ref-sechi-wernicke-2007'],
    'sec-b12-folate-zinc-copper': ['ref-stabler-b12-nejm-2013', 'ref-camaschella-iron-2015'],
  },
  references: dietetics10References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-supplements-vs-medicine',
          heading: l('1. Daily Vitamins vs High-Dose Medical Repletion', '১. সাধারণ ভিটামিন বনাম উচ্চমাত্রার থেরাপিউটিক চিকিৎসা'),
          paragraphs: [
            l(
              'There is a world of difference between taking a standard daily multivitamin and receiving a clinical **micronutrient repletion protocol** [1, 2]. A regular multivitamin contains tiny maintenance doses (the Recommended Dietary Allowance / RDA) designed to keep a healthy person from developing a deficiency.',
              'দোকান থেকে কেনা সাধারণ মাল্টিভিটামিন খাওয়া এবং হাসপাতালে চিকিৎসকের দেওয়া **উচ্চমাত্রার অনুপুষ্টি চিকিৎসা প্রোটোকলের** মধ্যে আকাশ-পাতাল তফাত রয়েছে [1, 2]। সাধারণ মাল্টিভিটামিনে খুব সামান্য পরিমাণে ভিটামিন থাকে (RDA মাত্রা), যা কেবল সুস্থ মানুষের ঘাটতি প্রতিরোধ করার জন্য যথেষ্ট।'
            ),
            l(
              'However, when a patient has a medically diagnosed severe deficiency (for example, dangerously empty bone stores of Vitamin D, or total exhaustion of iron after severe hemorrhage), ordinary dietary supplements are completely useless. Clinicians must prescribe pharmacological high-dose therapies—such as 50,000 IU Vitamin D pills or intravenous iron infusions—to aggressively refill tissue stores [1, 3].',
              'কিন্তু যখন কোনো রোগীর শরীরে মারাত্মক ঘাটতি ধরা পড়ে (যেমন রক্তে ভিটামিন ডি প্রায় শূন্যে নেমে যাওয়া, বা রক্তক্ষরণের পর আয়রনের ভাণ্ডার সম্পূর্ণ খালি হয়ে যাওয়া), তখন সাধারণ ট্যাবলেট দিয়ে কোনো কাজ হয় না। তখন চিকিৎসকদের অত্যন্ত উচ্চমাত্রার ওষুধ—যেমন ৫০,০০০ IU ভিটামিন ডি ক্যাপসুল বা সরাসরি শিরায় আয়রন ইনজেকশন—প্রেসক্রাইব করে শরীরের খালি ভাণ্ডার দ্রুত পূরণ করতে হয় [1, 3]।'
            ),
          ],
        },
        {
          id: 'sec-vitd-and-iron-simple',
          heading: l('2. Fixing Vitamin D and Iron Deficiencies', '২. ভিটামিন ডি এবং আয়রনের ঘাটতি দূরীকরণ'),
          paragraphs: [
            l(
              '• **Vitamin D3 (The 8-Week Regimen):** If a blood test shows your 25(OH)D is below 20 ng/mL, taking 400 IU daily will take years to fix it. Medical guidelines recommend taking a prescription dose of **50,000 IU once every week for 8 weeks**, followed by a daily maintenance dose of 2,000 IU to protect your bones and muscles [1].\n• **Iron (Every-Other-Day Dosing):** Taking iron tablets three times every single day often causes stomach cramps, severe constipation, and poor absorption. Modern medical science proves that taking oral iron **every other day on an empty stomach with Vitamin C** is actually absorbed much better with far fewer side effects [2].',
              '• **ভিটামিন ডি৩ (৮ সপ্তাহের কোর্স):** রক্তে ভিটামিন ডি ২০ ng/mL-এর নিচে থাকলে সাধারণ ট্যাবলেট খেলে ঘাটতি পূরণে বহু বছর লেগে যাবে। আন্তর্জাতিক নির্দেশিকা অনুযায়ী **প্রতি সপ্তাহে ৫০,০০০ IU এর একটি ক্যাপসুল টানা ৮ সপ্তাহ** খেতে হয়, এরপর প্রতিদিন ২০০০ IU চালিয়ে হাড় ও পেশি সুরক্ষিত রাখতে হয় [1]।\n• **আয়রন (একদিন পর পর খাওয়ার নিয়ম):** দিনে তিনবার আয়রন ট্যাবলেট খেলে পেটে তীব্র ব্যথা, বমি ও কোষ্ঠকাঠিন্য হয় এবং শরীর তা গ্রহণ করতে পারে না। আধুনিক চিকিৎসাবিজ্ঞান প্রমাণ করেছে যে **একদিন পর পর খালি পেটে ভিটামিন সি (লেবুর রস) সহ আয়রন খেলে** তা পেটে সবচেয়ে বেশি শোষিত হয় এবং কোনো পার্শ্বপ্রতিক্রিয়া হয় না [2]।'
            ),
          ],
        },
        {
          id: 'sec-thiamine-golden-rule',
          heading: l('3. The Golden Rule of Thiamine (Vitamin B1)', '৩. থায়ামিন (ভিটামিন বি১) এর সোনালী নিয়ম'),
          paragraphs: [
            l(
              'The most critical emergency rule in clinical nutrition is: **Never give sugar water (IV dextrose) to a starving or alcoholic patient without giving Thiamine first** [4]. Thiamine is the spark plug needed to burn sugar safely. If you flood a thiamine-deficient brain with glucose, the brain cells cannot burn it and die within hours, causing irreversible brain damage and coma.',
              'হাসপাতালের জরুরি পুষ্টি চিকিৎসার সবচেয়ে গুরুত্বপূর্ণ সোনালী নিয়ম হলো: **অপুষ্টিতে ভোগা বা অ্যালকোহলিক রোগীকে থায়ামিন ইনজেকশন না দিয়ে কখনোই গ্লুকোজ স্যালাইন দেওয়া যাবে না** [4]। চিনি পুড়িয়ে শক্তি তৈরি করতে থায়ামিন স্পার্ক প্লাগের মতো কাজ করে। থায়ামিন না থাকা অবস্থায় শরীরে গ্লুকোজ দিলে মস্তিষ্কের কোষগুলো শক্তিহীন হয়ে কয়েক ঘণ্টার মধ্যে মারা যায়, যার ফলে রোগী চিরতরে অন্ধ, পক্ষাঘাতগ্রস্ত বা মৃত্যুবরণ করতে পারে।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-vitd-endocrine-protocol',
          heading: l('1. The Endocrine Society 50,000 IU Vitamin D3 Protocol', '১. এন্ডোক্রাইন সোসাইটির ৫০,০০০ IU ভিটামিন ডি৩ প্রোটোকল'),
          paragraphs: [
            l(
              'Serum **25-hydroxyvitamin D [25(OH)D]** is the universally recognized biological biomarker for vitamin D status [1]. Clinical guidelines from the Endocrine Society categorize concentrations into three diagnostic tiers:',
              'রক্তের **২৫-হাইড্রোক্সিভিটামিন ডি [25(OH)D]** হলো শরীরের ভিটামিন ডি এর অবস্থা জানার আন্তর্জাতিক মানদণ্ড [1]। এন্ডোক্রাইন সোসাইটির নির্দেশিকা এটিকে তিনটি স্তরে ভাগ করে:'
            ),
            l(
              '$$\\begin{aligned} &\\textbf{Deficiency:} \\quad < 20\\text{ ng/mL } (< 50\\text{ nmol/L}) \\\\ &\\textbf{Insufficiency:} \\quad 21\\text{--}29\\text{ ng/mL } (52.5\\text{--}72.5\\text{ nmol/L}) \\\\ &\\textbf{Sufficiency:} \\quad 30\\text{--}100\\text{ ng/mL } (75\\text{--}250\\text{ nmol/L}) \\end{aligned}$$',
              '$$\\begin{aligned} &\\textbf{ঘাটতি (Deficiency):} \\quad < ২০\\text{ ng/mL } (< ৫০\\text{ nmol/L}) \\\\ &\\textbf{অপর্যাপ্ততা (Insufficiency):} \\quad ২১\\text{--}২৯\\text{ ng/mL } (৫২.৫\\text{--}৭২.৫\\text{ nmol/L}) \\\\ &\\textbf{পর্যাপ্ত স্বাভাবিক মাত্রা:} \\quad ৩০\\text{--}১০০\\text{ ng/mL } (৭৫\\text{--}২৫০\\text{ nmol/L}) \\end{aligned}$$'
            ),
            l(
              'When 25(OH)D is $< 20\\text{ ng/mL}$, intestinal calcium absorption efficiency collapses from 30–40% down to 10–15%, triggering secondary hyperparathyroidism that leaches calcium from cortical bone [1]. The evidence-based therapeutic repletion regimen prescribes **50,000 IU of Vitamin D3 (cholecalciferol) orally once weekly for 8 weeks** (or 6,000 IU daily). After 8 weeks, serum 25(OH)D is remeasured; once $\\ge 30\\text{ ng/mL}$ is achieved, lifelong maintenance therapy of $1,500\\text{--}2,000\\text{ IU/day}$ is maintained.',
              'রক্তে ভিটামিন ডি ২০ ng/mL-এর নিচে নামলে অন্ত্র থেকে ক্যালসিয়াম শোষণের হার ৩০-৪০% থেকে ধসে মাত্র ১০-১৫%-এ নেমে আসে, যার ফলে প্যারাথাইরয়েড হরমোন বেড়ে গিয়ে হাড় থেকে ক্যালসিয়াম ক্ষয় করতে থাকে [1]। এর প্রমাণভিত্তিক চিকিৎসা হলো: **প্রতি সপ্তাহে ৫০,০০০ IU ভিটামিন ডি৩ (cholecalciferol) মুখে টানা ৮ সপ্তাহ সেবন** (বা দিনে ৬০০০ IU)। ৮ সপ্তাহ পর রক্ত পরীক্ষা করে মাত্রা $\\ge ৩০\\text{ ng/mL}$ নিশ্চিত হলে সারাজীবন দৈনিক ১৫০০-২০০০ IU মেইনটেন্যান্স ডোজ চালিয়ে যেতে হয়।'
            ),
          ],
        },
        {
          id: 'sec-ganzoni-iv-iron',
          heading: l('2. Intravenous Iron Kinetics and the Ganzoni Equation', '২. শিরায় আয়রনের গতিবিদ্যা ও গানজোনি সমীকরণ'),
          paragraphs: [
            l(
              'In severe iron deficiency anemia where oral iron fails due to gastrointestinal intolerance, malabsorption (Celiac disease, Crohn’s, bariatric Roux-en-Y gastric bypass), or ongoing heavy blood loss, intravenous iron formulation is mandatory [2, 3].',
              'তীব্র আয়রন ঘাটতিজনিত রক্তাল্পতায় যখন মুখের ওষুধ পেটে সহ্য হয় না, বা অন্ত্রের শোষণ ত্রুটির কারণে (সিলিয়াক ডিজিজ, ক্রোনস বা গ্যাস্ট্রিক বাইপাস) রক্তে পৌঁছায় না, তখন সরাসরি শিরায় আয়রন ইনজেকশন দেওয়া বাধ্যতামূলক [2, 3]।'
            ),
            l(
              'The total dose of elemental iron required to restore hemoglobin and replenish exhausted reticuloendothelial iron stores is calculated using the landmark **Ganzoni Formula** [3]:',
              'হিমোগ্লোবিন স্বাভাবিক করতে এবং অস্থিমজ্জার আয়রনের খালি ভাণ্ডার পূরণ করতে মোট কত মিলিগ্রাম আয়রন ইনজেকশন দিতে হবে তা বিখ্যাত **গানজোনি সমীকরণ (Ganzoni Formula)** দিয়ে বের করা হয় [3]:'
            ),
            l(
              '$$\\text{Total Iron Deficit (mg)} = \\text{Weight (kg)} \\times (\\text{Target Hb} - \\text{Actual Hb [g/dL]}) \\times 2.4 + \\text{Iron Depot Stores (500 mg)}$$',
              '$$\\text{মোট আয়রনের ঘাটতি (mg)} = \\text{ওজন (কেজি)} \\times (\\text{কাঙ্ক্ষিত Hb} - \\text{বর্তমান Hb [g/dL]}) \\times ২.৪ + \\text{জমানো ভাণ্ডার (৫০০ mg)}$$'
            ),
            l(
              'The multiplier $2.4$ incorporates blood volume ($7\\%\\text{ of body weight}$), iron content in hemoglobin ($0.34\\%$), and a conversion factor ($10000$). Modern carbohydrate-complexed IV formulations—such as **Ferric Carboxymaltose (FCM)** and **Ferumoxytol**—allow rapid infusion of $1,000\\text{ mg of iron}$ over 15 minutes without the anaphylaxis risks of historical high-molecular-weight iron dextran [2].',
              'এখানে গুণক ২.৪ হলো রক্তের মোট আয়তন (ওজনের ৭%), হিমোগ্লোবিনে আয়রনের শতকরা হার (০.৩৪%) এবং একক রূপান্তরের গাণিতিক সমন্বয়। আধুনিক কার্বোহাইড্রেটযুক্ত আয়রন ইনজেকশন (যেমন ফেরিক কার্বক্সিম্যালটোজ) মাত্র ১৫ মিনিটে ১০০০ মিলিগ্রাম পর্যন্ত আয়রন অত্যন্ত নিরাপদে রোগীর শরীরে পৌঁছে দিতে পারে [2]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-thiamine-wernicke-rule',
          heading: l('1. The Thiamine Imperative: Glycolytic Shunts and Wernicke Encephalopathy', '১. থায়ামিনের জরুরি ভূমিকা: গ্লাইকোলাইসিস ও ভার্নিকে এনসেফালোপ্যাথি'),
          paragraphs: [
            l(
              'Thiamine (Vitamin B1) serves as the indispensable precursor for **Thiamine Pyrophosphate (TPP)**, the coenzyme required by two critical rate-limiting enzymes in mitochondrial carbohydrate metabolism [4]:',
              'থায়ামিন (ভিটামিন বি১) মানবদেহের কোষে **থায়ামিন পাইরোফসফেট (TPP)** নামের অপরিহার্য কো-এনজাইম তৈরি করে, যা মাইটোকন্ড্রিয়ায় গ্লুকোজ পুড়িয়ে শক্তি তৈরির দুটি প্রধান এনজাইম পরিচালনা করে [4]:'
            ),
            l(
              '1. **Pyruvate Dehydrogenase Complex (PDC):** Converts pyruvate into acetyl-CoA, linking glycolysis to the Krebs cycle.\n2. **Alpha-Ketoglutarate Dehydrogenase:** Drives the oxidative TCA cycle generating NADH for oxidative phosphorylation.',
              '১. **পাইরুভেট ডিহাইড্রোজিনেজ (PDC):** গ্লাইকোলাইসিসে তৈরি পাইরুভেটকে অ্যাসিটাইল-কোএ-তে রূপান্তর করে সাইট্রিক অ্যাসিড চক্রে প্রবেশ করায়।\n২. **আলফা-কিটোগ্লুটারেট ডিহাইড্রোজিনেজ:** ক্রেবস চক্রকে সচল রেখে এটিপি তৈরির জন্য প্রয়োজনীয় ইলেকট্রন সরবরাহ করে।'
            ),
            l(
              'In severe thiamine depletion (starvation, chronic alcoholism, hyperemesis gravidarum), infusing an intravenous glucose load accelerates glycolysis, producing vast amounts of pyruvate [4]. However, because TPP is absent, pyruvate cannot enter the Krebs cycle. Pyruvate is overwhelmingly shunted by lactate dehydrogenase into lactic acid, triggering profound **metabolic lactic acidosis**.',
              'তীব্র থায়ামিন ঘাটতি থাকা অবস্থায় রোগীকে গ্লুকোজ স্যালাইন দিলে কোষে প্রচুর পাইরুভেট তৈরি হয় [4]। কিন্তু থায়ামিনের অভাবে সেই পাইরুভেট ক্রেবস চক্রে যেতে পারে না। ফলে পাইরুভেট বিষাক্ত ল্যাকটিক অ্যাসিডে রূপান্তরিত হয়ে রক্তে মারাত্মক অ্যাসিডোসিস সৃষ্টি করে।'
            ),
            l(
              'Simultaneously, high metabolic-demand neural tissues—specifically the **mammillary bodies, medial thalamus, and periaqueductal gray matter**—suffer catastrophic intracellular ATP starvation and NMDA-mediated excitotoxicity. This precipitates **Wernicke Encephalopathy**: the classic triad of encephalopathy (confusion), oculomotor dysfunction (nystagmus, ophthalmoplegia), and gait ataxia. Left untreated, it progresses within hours to irreversible Korsakoff psychosis or death. Guidelines mandate: **Administer 500 mg IV thiamine immediately before or concurrently with any dextrose infusion** [4].',
              'একই সময়ে মস্তিষ্কের সবচেয়ে বেশি শক্তি খরচকারী অংশগুলো (মেমিলারি বডি ও থ্যালামাস) এটিপির অভাবে ধ্বংস হয়ে যায়। এর ফলে **ভার্নিকে এনসেফালোপ্যাথি** দেখা দেয়: তীব্র মানসিক বিভ্রান্তি, চোখের অনিয়মিত কাঁপুনি ও প্যারালাইসিস এবং হাঁটার ভারসাম্যহীনতা। চিকিৎসা না দিলে কয়েক ঘণ্টার মধ্যে স্মৃতিশক্তি চিরতরে নষ্ট হয়ে রোগী মারা যায়। নির্দেশিকা অনুযায়ী: **যেকোনো গ্লুকোজ দেওয়ার আগে বা সাথে সাথে অবিলম্বে শিরায় ৫০০ মিলিগ্রাম থায়ামিন ইনজেকশন দিতে হবে** [4]।'
            ),
          ],
        },
        {
          id: 'sec-b12-folate-zinc-copper',
          heading: l('2. The "Folate Trap" and Zinc-Induced Copper Anemia', '২. "ফোলেট ফাঁদ" (Folate Trap) ও অতিরিক্ত জিংকে কপারের ঘাটতি'),
          paragraphs: [
            l(
              'In megaloblastic macrocytic anemia, distinguishing Vitamin B12 (cobalamin) from folate deficiency is critical to avoid irreversible neurological disaster [5]. Folate requires Vitamin B12 as a methyl-group acceptor to regenerate tetrahydrofolate (THF) via the enzyme methionine synthase. In B12 deficiency, folate becomes chemically locked as 5-methyl-THF, an inactive form unable to support purine and thymidylate synthesis—a biochemical dead-end known as the **Folate Trap**.',
              'মেগালোব্লাস্টিক রক্তাল্পতায় ভিটামিন বি১২ ও ফলিক অ্যাসিডের ঘাটতি সঠিকভাবে চেনা অত্যন্ত জীবনরক্ষাকারী [5]। কোষে মিথিওনিন সিন্থেজ এনজাইম সক্রিয় করতে বি১২ অপরিহার্য। শরীরে বি১২ না থাকলে সব ফলিক অ্যাসিড "৫-মিথাইল-টিএইচএফ" নামের নিষ্ক্রিয় রূপে আটকে যায়, যাকে **ফোলেট ফাঁদ (Folate Trap)** বলা হয়।'
            ),
            l(
              'If a clinician mistakenly treats an undiagnosed B12 deficiency with high doses of folic acid ($1\\text{--}5\\text{ mg}$), the folate bypasses the trap and cures the hematological anemia (reticulocytes rise, MCV normalizes). However, because the underlying B12 deficiency remains uncorrected, the generation of S-adenosylmethionine (SAM) fails, and toxic methylmalonic acid accumulates. This unleashes rapid, irreversible demyelination of the posterior and lateral columns of the spinal cord: **Subacute Combined Degeneration of the Cord (SCD)** [5]. Always verify serum B12 and methylmalonic acid (MMA) before initiating folate therapy.',
              'কোনো চিকিৎসায় ভুলবশত বি১২ পরীক্ষা না করে রোগীকে কেবল উচ্চমাত্রার ফলিক অ্যাসিড দিলে রক্তাল্পতা সেরে যায় ঠিকই, কিন্তু বি১২-এর আসল ঘাটতি রয়ে যায়। এর ফলে মেরুদণ্ডের স্নায়ুর মায়েলিন পর্দা মারাত্মকভাবে ছিঁড়ে নষ্ট হয়ে যায়, যাকে **Subacute Combined Degeneration** বলা হয় এবং রোগী চিরতরে অবশ বা প্যারালাইজড হয়ে যায় [5]। তাই ফলিক অ্যাসিড দেওয়ার আগে অবশ্যই রক্তে বি১২ ও মিথাইলম্যালোনিক অ্যাসিড (MMA) পরীক্ষা করতে হবে।'
            ),
            l(
              'A parallel micronutrient antagonism occurs with zinc and copper [2]. In enterocytes, high-dose zinc supplementation ($> 50\\text{ mg elemental zinc/day}$) strongly induces transcription of the intracellular metal-binding protein **metallothionein**. Because metallothionein has a far higher binding affinity for copper than zinc, it irreversibly traps dietary copper inside enterocytes. When the enterocytes shed into the intestinal lumen, copper is excreted, plunging serum copper levels. Within 4–8 weeks, patients develop severe copper-deficiency microcytic sideroblastic anemia and sensory ataxia that precisely mimics B12 subacute combined degeneration.',
              'অনুরূপভাবে জিংক ও কপারের মধ্যেও মারাত্মক প্রতিযোগিতা থাকে [2]। অতিরিক্ত জিংক খেলে (দিনে ৫০ মিলিগ্রামের বেশি) অন্ত্রের কোষে মেটালোথাইয়োনিন নামের প্রোটিন তৈরি হয়, যা সব কপারকে আটকে ফেলে এবং শরীর থেকে বের করে দেয়। কয়েক সপ্তাহের মধ্যে শরীরে কপারের শূন্যতা তৈরি হয়ে মারাত্মক রক্তাল্পতা এবং স্নায়ুর পক্ষাঘাত সৃষ্টি হয় যা দেখতে হুবহু বি১২ ঘাটতির মতো।'
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Endocrine Society Vitamin D3 Repletion', '১. এন্ডোক্রাইন সোসাইটি ভিটামিন ডি৩ প্রোটোকল'), sectionId: 'sec-vitd-endocrine-protocol' },
      { id: 'toc-2', label: l('2. Ganzoni Intravenous Iron Deficit Formula', '২. গানজোনি সূত্রে শিরায় আয়রনের ঘাটতি'), sectionId: 'sec-ganzoni-iv-iron' },
      { id: 'toc-3', label: l('3. Thiamine Glycolytic Shunts & Wernicke Rule', '৩. থায়ামিন ও ভার্নিকে এনসেফালোপ্যাথি নিয়ম'), sectionId: 'sec-thiamine-wernicke-rule' },
      { id: 'toc-4', label: l('4. Folate Trap & Zinc-Induced Copper Deficits', '৪. ফোলেট ফাঁদ ও জিংকজনিত কপার ঘাটতি'), sectionId: 'sec-b12-folate-zinc-copper' },
    ],
    terms: [
      {
        term: l('Ganzoni Formula', 'গানজোনি সমীকরণ (Ganzoni Formula)'),
        definition: l(
          'The clinical equation calculating total elemental iron deficit: Weight (kg) x (Target Hb - Actual Hb) x 2.4 + 500 mg storage iron.',
          'শরীরে আয়রনের মোট ঘাটতি হিসাবের আন্তর্জাতিক সূত্র: ওজন (কেজি) x (কাঙ্ক্ষিত Hb - বর্তমান Hb) x ২.৪ + ৫০০ mg সঞ্চিত ভাণ্ডার।'
        ),
      },
      {
        term: l('Wernicke Encephalopathy', 'ভার্নিকে এনসেফালোপ্যাথি (Wernicke)'),
        definition: l(
          'An acute, life-threatening neuropsychiatric syndrome caused by severe thiamine (B1) deficiency, characterized by confusion, nystagmus, and ataxia.',
          'তীব্র থায়ামিন ঘাটতির কারণে মস্তিষ্কের মেমিলারি বডি নষ্ট হয়ে সৃষ্ট জীবনঘাতী জরুরি অবস্থা; বিভ্রান্তি, চোখের কাঁপুনি ও ভারসাম্যহীনতা এর লক্ষণ।'
        ),
      },
      {
        term: l('Folate Trap', 'ফোলেট ফাঁদ (Folate Trap)'),
        definition: l(
          'The biochemical sequestration of folate as inactive 5-methyl-THF caused by Vitamin B12 deficiency, preventing normal DNA synthesis.',
          'ভিটামিন বি১২ এর অভাবে কোষে ফলিক অ্যাসিড নিষ্ক্রিয় রূপে আটকে যাওয়ার আণবিক ফাঁদ, যা রক্ত তৈরি বন্ধ করে দেয়।'
        ),
      },
      {
        term: l('Metallothionein', 'মেটালোথাইয়োনিন (Metallothionein)'),
        definition: l(
          'An intracellular heavy-metal binding protein induced by high zinc that binds copper with high affinity, causing secondary copper deficiency.',
          'অন্ত্রের কোষে অতিরিক্ত জিংকের কারণে উৎপন্ন প্রোটিন যা কপারকে আটকে শরীর থেকে বের করে দিয়ে কপার ঘাটতির সৃষ্টি করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Formulating Ganzoni IV Iron Deficit & Vitamin D3 Therapy in Post-Bariatric Malabsorption',
          'বাস্তব কেস স্টাডি: গ্যাস্ট্রিক বাইপাসের রোগীর গানজোনি সূত্রে আয়রন ইনজেকশন ও ভিটামিন ডি৩ নির্ধারণ'
        ),
        steps: [
          l(
            'Step 1: Patient Presentation. A 42-year-old female post-Roux-en-Y gastric bypass presents with severe fatigue, pallor, and bone pain. Weight = 70 kg, Height = 165 cm. Labs: $\\text{Hemoglobin} = 7.2\\text{ g/dL}$ (target = $14.0\\text{ g/dL}$), $\\text{Ferritin} = 3\\text{ ng/mL}$ (exhausted), $25(\\text{OH})\\text{D} = 11\\text{ ng/mL}$ (severe deficiency). Oral iron pills cause severe vomiting.',
            'ধাপ ১: রোগীর বিবরণ: গ্যাস্ট্রিক বাইপাস অস্ত্রোপচার করা ৪২ বছর বয়সী নারী (ওজন ৭০ কেজি)। ল্যাব রিপোর্ট: হিমোগ্লোবিন ৭.২ g/dL (কাঙ্ক্ষিত ১৪.০ g/dL), ফেরিটিন মাত্র ৩ ng/mL (আয়রনের ভাণ্ডার শূন্য), ভিটামিন ডি মাত্র ১১ ng/mL (চরম ঘাটতি)। মুখে আয়রন ট্যাবলেট খেলে বমি হয়ে যায়।'
          ),
          l(
            'Step 2: Calculate Total Iron Deficit via Ganzoni Equation. $\\text{Deficit (mg)} = \\text{Weight (kg)} \\times (\\text{Target Hb} - \\text{Actual Hb}) \\times 2.4 + 500\\text{ mg stores} = 70 \\times (14.0 - 7.2) \\times 2.4 + 500 = 70 \\times (6.8) \\times 2.4 + 500 = 1,142.4 + 500 = 1,642.4\\text{ mg elemental iron}$.',
            'ধাপ ২: গানজোনি সমীকরণে আয়রনের মোট ঘাটতি হিসাব: $\text{ঘাটতি} = ৭০ \times (১৪.০ - ৭.২) \times ২.৪ + ৫০০ = ৭০ \times ৬.৮ \times ২.৪ + ৫০০ = ১১৪২.৪ + ৫০০ = ১৬৪২.৪\text{ মিলিগ্রাম}$ বিশুদ্ধ আয়রন।'
          ),
          l(
            'Step 3: Prescribe Intravenous Iron Regimen. Prescribe Ferric Carboxymaltose (FCM): Infuse $1,000\\text{ mg IV}$ in 250 mL normal saline over 15 minutes on Day 1, followed by a second infusion of $750\\text{ mg IV}$ on Day 8, delivering a total of $1,750\\text{ mg}$ to completely eradicate the deficit and replenish bone marrow stores.',
            'ধাপ ৩: শিরায় আয়রন প্রেসক্রিপশন: ফেরিক কার্বক্সিম্যালটোজ ইনজেকশন: ১ম দিনে ১০০০ মিলিগ্রাম শিরায় স্যালাইনের সাথে ১৫ মিনিটে প্রদান; এবং ৮তম দিনে বাকি ৭৫০ মিলিগ্রাম প্রদান। মোট ১৭৫০ মিলিগ্রাম আয়রন রোগীর সম্পূর্ণ ঘাটতি ও মজ্জার ভাণ্ডার পূরণ করবে।'
          ),
          l(
            'Step 4: Formulate Vitamin D3 High-Potency Repletion. Serum $25(\\text{OH})\\text{D} = 11\\text{ ng/mL}$ confirms severe deficiency. Prescribe **Cholecalciferol (Vitamin D3) 50,000 IU orally once weekly for 8 weeks**. Pair with calcium citrate (which does not require gastric acid) $1,000\\text{ mg/day}$ in divided doses.',
            'ধাপ ৪: ভিটামিন ডি৩ উচ্চমাত্রার চিকিৎসা: চরম ঘাটতি পূরণে এন্ডোক্রাইন প্রোটোকল অনুযায়ী **প্রতি সপ্তাহে ৫০,০০০ IU ভিটামিন ডি৩ ক্যাপসুল টানা ৮ সপ্তাহ সেবন**। সাথে পাকস্থলীর অ্যাসিড ছাড়া শোষিত হতে পারে এমন ক্যালসিয়াম সাইট্রেট দিনে ১০০০ মিলিগ্রাম দেওয়া।'
          ),
          l(
            'Step 5: Follow-Up Monitoring. Remeasure CBC and Ferritin at 6 weeks post-IV iron; recheck serum 25(OH)D at 8 weeks. Once 25(OH)D reaches $>30\\text{ ng/mL}$, transition to lifelong maintenance at $2,000\\text{ IU/day}$.',
            'ধাপ ৫: ফলো-আপ পর্যবেক্ষণ: ইনজেকশনের ৬ সপ্তাহ পর হিমোগ্লোবিন ও ফেরিটিন পরীক্ষা এবং ৮ সপ্তাহ পর ভিটামিন ডি পরীক্ষা। মান ৩০ ng/mL ছাড়ালে আজীবন দিনে ২০০০ IU মেইনটেন্যান্স ডোজ চালিয়ে যাওয়া।'
          ),
        ],
        conclusion: l(
          'Calculating exact iron deficits via the Ganzoni formula and implementing the Endocrine Society 50,000 IU Vitamin D3 protocol bypassed gastrointestinal bypass malabsorption, fully restoring hemoglobin to 13.8 g/dL and eliminating bone pain.',
          'গানজোনি সূত্রের সাহায্যে নিখুঁত আয়রন ইনজেকশন এবং ৫০,০০০ IU ভিটামিন ডি৩ প্রোটোকল প্রয়োগের মাধ্যমে অন্ত্রের শোষণ ত্রুটি দূর করে রোগীর হিমোগ্লোবিন ১৩.৮ g/dL এ ফিরিয়ে আনা হয় এবং হাড়ের ব্যথা স্থায়ীভাবে নিরাময় হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why is alternate-day oral iron supplementation scientifically superior to multiple daily doses in iron deficiency anemia?',
          'আয়রন ঘাটতিজনিত রক্তাল্পতায় দিনে তিনবার খাওয়ার চেয়ে একদিন পর পর মুখে আয়রন ট্যাবলেট খাওয়া কেন বৈজ্ঞানিকভাবে অনেক বেশি কার্যকর?'
        ),
        answer: l(
          'Ingesting a dose of iron triggers a sharp, transient surge in the hepatic hormone hepcidin that lasts for 24 to 48 hours. Elevated hepcidin internalizes and degrades ferroportin channels on enterocytes, blocking further intestinal iron absorption. If iron is taken multiple times every day, hepcidin remains chronically elevated, severely reducing fractional absorption while unabsorbed iron irritates the intestinal mucosa. Taking iron every other day allows hepcidin to return to baseline, doubling fractional absorption with fewer side effects.',
          'একবার আয়রন ট্যাবলেট খেলে যকৃতে হেপসিডিন (Hepcidin) নামের হরমোন হঠাৎ অনেক বেড়ে যায় এবং তা ২৪ থেকে ৪৮ ঘণ্টা পর্যন্ত রক্তে বেশি থাকে। হেপসিডিন অন্ত্রের প্রোটিন চ্যানেল বন্ধ করে পরবর্তী আয়রন শোষণকে আটকে দেয়। তাই প্রতিদিন বা দিনে তিনবার আয়রন খেলে কোনো আয়রনই শোষিত হয় না, বরং পেটে জমে গ্যাস ও কোষ্ঠকাঠিন্য বাড়ায়। কিন্তু একদিন পর পর খেলে হেপসিডিন স্বাভাবিক হয়ে যায়, যার ফলে শরীর দ্বিগুণ আয়রন গ্রহণ করতে পারে এবং পেটের কোনো কষ্ট হয় না।'
        ),
      },
      {
        question: l(
          'Why does administering high-dose folic acid without Vitamin B12 carry catastrophic neurological risks in macrocytic anemia?',
          'ম্যাক্রোসাইটিক রক্তাল্পতায় ভিটামিন বি১২ না দিয়ে একা উচ্চমাত্রার ফলিক অ্যাসিড দিলে কেন মারাত্মক স্নায়বিক ক্ষতির ঝুঁকি থাকে?'
        ),
        answer: l(
          'High doses of folic acid can bypass the "Folate Trap" and correct the hematological anemia (normalizing red blood cell size and count). However, folic acid does not treat the underlying B12 deficiency. Without B12, myelin sheaths in the central and peripheral nervous system continue to degenerate unhindered. By falsely normalizing the blood count, folic acid masks the diagnosis while the patient progresses silently to irreversible Subacute Combined Degeneration of the spinal cord and permanent paraplegia.',
          'উচ্চমাত্রার ফলিক অ্যাসিড রক্তাল্পতাকে সাময়িকভাবে সারিয়ে দিতে পারে এবং রক্তে লোহিত কণিকার আকার স্বাভাবিক করে ফেলে। কিন্তু এটি ভেতরে থাকা আসল বি১২ ঘাটতি দূর করতে পারে না। বি১২ না থাকার কারণে মেরুদণ্ডের স্নায়ুর মায়েলিন পর্দা অলক্ষ্যে ছিঁড়ে ধ্বংস হতে থাকে। রক্তের রিপোর্ট স্বাভাবিক দেখিয়ে ফলিক অ্যাসিড রোগীকে বিভ্রান্ত করে, অথচ ভেতরের স্নায়ু ধ্বংস হয়ে রোগী সম্পূর্ণ পক্ষাঘাতগ্রস্ত (Paraplegic) হয়ে চিরতরে পঙ্গু হয়ে যেতে পারে।'
        ),
      },
    ],
  },
}

