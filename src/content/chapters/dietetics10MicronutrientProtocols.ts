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
  {
    id: 'ref-stoffel-hepcidin-2017',
    authors: 'Stoffel NU, Cercamondi CI, Brittenham G, et al.',
    title: 'Iron Absorption from Oral Iron Supplements Given on Consecutive Versus Alternate Days and as Single Versus Twice-Daily Doses in Iron-Depleted Women',
    organization: 'The Lancet Haematology',
    year: 2017,
    url: 'https://www.thelancet.com/journals/lanhae/article/PIIS2352-3026(17)30182-5/fulltext',
    doi: '10.1016/S2352-3026(17)30182-5',
  },
  {
    id: 'ref-kumar-nutritional-neuro-2010',
    authors: 'Kumar N',
    title: 'Neurologic Presentations of Nutritional Deficiencies',
    organization: 'Neurologic Clinics',
    year: 2010,
    url: 'https://www.neurologic.theclinics.com/article/S0733-8619(09)00085-7/fulltext',
    doi: '10.1016/j.ncl.2009.09.006',
  },
  {
    id: 'ref-efns-wernicke-2010',
    authors: 'Galvin R, Bråthen G, Ivashynka A, et al.',
    title: 'EFNS Guidelines for Diagnosis, Therapy and Prevention of Wernicke Encephalopathy',
    organization: 'European Journal of Neurology',
    year: 2010,
    url: 'https://onlinelibrary.wiley.com/doi/10.1111/j.1468-1331.2010.03153.x',
    doi: '10.1111/j.1468-1331.2010.03153.x',
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
    'Evidence-based clinical micronutrient therapy: executing the Endocrine Society 50,000 IU Vitamin D3 regimen, calculating total intravenous iron deficits via the mathematical Ganzoni equation, managing hepcidin circadian kinetics with alternate-day oral iron, solving the Folate Trap in megaloblastic anemia, enforcing mandatory thiamine loading before dextrose to prevent Wernicke encephalopathy, and preventing zinc-induced enterocyte copper sequestration.',
    'প্রমাণভিত্তিক ক্লিনিক্যাল অনুপুষ্টি চিকিৎসা প্রোটোকল: আন্তর্জাতিক এন্ডোক্রাইন সোসাইটির ৫০,০০০ IU ভিটামিন ডি৩ রেজিমেন, গাণিতিক গানজোনি সূত্রের সাহায্যে শিরায় আয়রনের মোট ঘাটতি হিসাব, হেপসিডিন হরমোন সমন্বয়ে একদিন পর পর মুখে আয়রন খাওয়ার কৌশল, মেগালোব্লাস্টিক রক্তাল্পতায় ফোলেট ফাঁদের বিপজ্জনক স্নায়ুক্ষয় প্রতিরোধ, ভার্নিকে এনসেফালোপ্যাথি রোধে গ্লুকোজ স্যালাইনের আগে থায়ামিন লোডিং এবং অতিরিক্ত জিংক সেবনে কপারের ঘাটতি প্রতিরোধের বৈজ্ঞানিক প্রোটোকল।'
  ),
  subject: 'dietetics',
  version: 2,
  updatedAt: '2026-11-04',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-04',
  prerequisiteIds: ['topic.dietetics.laboratory-biomarkers'],
  relatedTopicIds: ['topic.dietetics.laboratory-biomarkers', 'topic.nutrition.fat-soluble-vitamins-a-d-e-k'],
  objectives: [
    l(
      'Differentiate general dietary prevention allowances (RDA/AI) from high-potency pharmacological repletion protocols required in clinical deficiency states.',
      'সুস্থ মানুষের সাধারণ খাদ্য নির্দেশিকা (RDA) বনাম মারাত্মক ক্লিনিক্যাল ঘাটতি পূরণের উচ্চমাত্রার থেরাপিউটিক ড্রাগ প্রোটোকলের পার্থক্য চিহ্নিত করা।'
    ),
    l(
      'Deploy the Endocrine Society 50,000 IU/week Vitamin D3 protocol for documented deficiency (25(OH)D < 20 ng/mL), adjusting for adipocyte sequestration in obesity.',
      'রক্তে ভিটামিন ডি এর ঘাটতিতে (25(OH)D < ২০ ng/mL) আন্তর্জাতিক এন্ডোক্রাইন সোসাইটির ৫০,০০০ IU সাপ্তাহিক প্রোটোকল প্রয়োগ করা এবং স্থূলতার ক্ষেত্রে চর্বির খাঁচা হিসাব করা।'
    ),
    l(
      'Calculate total elemental iron deficits using the mathematical Ganzoni equation and prescribe modern carbohydrate-complexed IV formulations.',
      'গানজোনি সমীকরণ ব্যবহার করে শরীরে মোট আয়রনের ঘাটতি নিখুঁতভাবে হিসাব করা এবং আধুনিক কার্বোহাইড্রেটযুক্ত শিরায় ইনজেকশন ব্যবস্থাপত্রে নির্ধারণ করা।'
    ),
    l(
      'Explain hepcidin kinetics and why alternate-day oral iron dosing doubles fractional absorption while dramatically reducing gastrointestinal adverse events.',
      'হেপসিডিনের কার্যপদ্ধতি ব্যাখ্যা করা এবং একদিন পর পর মুখে আয়রন খেলে কেন অন্ত্রের শোষণ দ্বিগুণ হয় ও পেটের কষ্ট দূর হয় তা বিশ্লেষণ করা।'
    ),
    l(
      'Resolve the "Folate Trap" biochemically by differentiating B12 from folate deficiency via methylmalonic acid (MMA) to prevent irreversible spinal cord demyelination.',
      'মিথাইলম্যালোনিক অ্যাসিডের (MMA) মাধ্যমে ফোলেট ফাঁদ শনাক্ত করে মেরুদণ্ডের মারাত্মক সাবএকিউট কম্বাইন্ড ডিজেনারেশন ও প্যারালাইসিস সফলভাবে প্রতিরোধ করা।'
    ),
    l(
      'Administer high-dose intravenous thiamine (200–500 mg IV) prior to any carbohydrate infusion in malnourished patients to prevent fatal Wernicke brainstem necrosis.',
      'অপুষ্টিতে ভোগা রোগীর জীবনঘাতী ভার্নিকে এনসেফালোপ্যাথি রোধে যেকোনো গ্লুকোজ স্যালাইন দেওয়ার আগে শিরায় ২০০–৫০০ মিলিগ্রাম থায়ামিন নিশ্চিত করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A clinical emergency triage pathway for high-risk repletion protocols: Malnourished or alcohol-dependent patient enters triage; Branch 1 mandates high-dose IV Thiamine (500 mg) BEFORE any IV Dextrose to prevent Wernicke brain necrosis; Branch 2 evaluates macrocytic anemia, testing B12 before folate to avert the Folate Trap; Branch 3 evaluates microcytic anemia, using the Ganzoni equation to calculate total IV iron deficit.',
      'জরুরি অনুপুষ্টি চিকিৎসার ক্লিনিক্যাল ট্রায়াজ নকশা: মারাত্মক অপুষ্টির রোগী হাসপাতালে এলে; শাখা ১ যে কোনো গ্লুকোজ দেওয়ার আগে মস্তিষ্কের ক্ষতি রোধে শিরায় ৫০০ মিলিগ্রাম থায়ামিন নিশ্চিত করে; শাখা ২ রক্তাল্পতায় ফোলেটের আগে বি১২ পরীক্ষা করে; শাখা ৩ গানজোনি সূত্রের মাধ্যমে শিরায় আয়রনের মোট ঘাটতি হিসাব করে।'
    ),
    steps: [
      l(
        'Step 1: Emergency Thiamine Rule. In malnourished, catabolic, or alcohol-dependent patients, immediately infuse intravenous thiamine (200–500 mg) BEFORE starting any dextrose fluids or nutritional support.',
        'ধাপ ১: জরুরি থায়ামিনের সোনালী নিয়ম: অপুষ্টি বা অ্যালকোহলাসক্ত রোগীর ক্ষেত্রে কোনো গ্লুকোজ স্যালাইন বা খাবার শুরু করার আগেই অবিলম্বে শিরায় ২০০–৫০০ মিলিগ্রাম থায়ামিন ইনজেকশন দিন।'
      ),
      l(
        'Step 2: Vitamin D3 High-Dose Repletion. For documented deficiency (25(OH)D < 20 ng/mL), prescribe 50,000 IU cholecalciferol orally once weekly for 8 weeks, transitioning to 1,500–2,000 IU/day maintenance once levels exceed 30 ng/mL.',
        'ধাপ ২: ভিটামিন ডি৩ উচ্চমাত্রার চিকিৎসা: রক্তে ২০ ng/mL-এর কম থাকলে টানা ৮ সপ্তাহ প্রতি সপ্তাহে ৫০,০০০ IU ভিটামিন ডি৩ ক্যাপসুল দিন, এরপর মাত্রা ৩০ ng/mL ছাড়ালে দিনে ১৫০০–২০০০ IU চালু রাখুন।'
      ),
      l(
        'Step 3: Ganzoni IV Iron Deficit Calculation. In severe malabsorption or oral intolerance, compute: Deficit (mg) = Weight × (Target Hb – Actual Hb) × 2.4 + 500 mg storage depot, and infuse single-dose ferric carboxymaltose.',
        'ধাপ ৩: গানজোনি সূত্রে আয়রনের ঘাটতি: অন্ত্রের শোষণ ত্রুটি বা মুখের ওষুধ সহ্য না হলে গানজোনি সূত্রে মোট ঘাটতি হিসাব করে ফেরিক কার্বক্সিম্যালটোজ ইনজেকশন দিন।'
      ),
      l(
        'Step 4: Protect Against the Folate Trap. In macrocytic anemia (MCV > 100 fL), always measure B12 and Methylmalonic Acid (MMA); never administer high-dose folate without B12 to prevent subacute combined spinal demyelination.',
        'ধাপ ৪: ফোলেট ফাঁদের সুরক্ষা: বড় লোহিত কণিকার রক্তাল্পতায় আগে ভিটামিন বি১২ ও MMA নিশ্চিত করুন; বি১২ ছাড়া একা উচ্চমাত্রার ফলিক অ্যাসিড দিলে স্নায়ু ধ্বংস হয়ে চিরতরে প্যারালাইসিস হতে পারে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 48-year-old female with chronic alcohol use disorder and severe undernutrition is brought to the emergency department confused, with bilateral horizontal nystagmus and severe gait ataxia. The intern orders an immediate infusion of 10% Dextrose in water (D10W) at 150 mL/hr to treat her hypoglycemia (blood glucose = 52 mg/dL). Why must the senior clinical nutrition specialist immediately intervene before the dextrose is connected?',
      'অ্যালকোহল আসক্তি ও তীব্র অপুষ্টিতে আক্রান্ত ৪৮ বছর বয়সী এক নারী চরম বিভ্রান্তি, চোখের অস্বাভাবিক কাঁপুনি (Nystagmus) এবং হাঁটার ভারসাম্যহীনতা নিয়ে জরুরি বিভাগে আসেন। রক্তের চিনি ৫২ mg/dL দেখে শিক্ষানবিস ডাক্তার অবিলম্বে ঘণ্টায় ১৫০ মিলি হারে ১০% গ্লুকোজ স্যালাইন দেওয়ার নির্দেশ দেন। গ্লুকোজ স্যালাইন চালুর ঠিক আগেই সিনিয়র পুষ্টি বিশেষজ্ঞ কেন তাৎক্ষণিকভাবে হস্তক্ষেপ করবেন?'
    ),
    options: [
      l(
        'Dextrose is completely ineffective for treating hypoglycemia in alcoholic patients and must be replaced with pure intravenous lipid emulsions.',
        'অ্যালকোহলিক রোগীর ক্ষেত্রে গ্লুকোজ কাজ করে না এবং তাকে স্যালাইনের বদলে চর্বির ইনজেকশন দিতে হবে।'
      ),
      l(
        'Administering a carbohydrate load before replenishing thiamine will rapidly consume remaining intracellular Thiamine Pyrophosphate (TPP) coenzymes, precipitating acute, irreversible brainstem necrosis and fatal Wernicke-Korsakoff Encephalopathy; high-dose IV thiamine (500 mg) must be infused prior to or concurrently with dextrose.',
        'থায়ামিন ঘাটতি পূরণ না করে গ্লুকোজ স্যালাইন দিলে কোষের ভেতরে অবশিষ্ট সামান্য থায়ামিন (TPP) হঠাৎ নিঃশেষ হয়ে যাবে, যার ফলে মস্তিষ্কের ব্রেনস্টেমের কোষ দ্রুত মারা গিয়ে জীবনঘাতী এবং অপরিবর্তনীয় ভার্নিকে-করসাকফ এনসেফালোপ্যাথি ঘটবে; তাই গ্লুকোজের আগেই বা সাথে সাথে শিরায় ৫০০ মিলিগ্রাম থায়ামিন ইনজেকশন দেওয়া বাধ্যতামূলক।'
      ),
      l(
        'Thiamine interferes with peripheral insulin receptors, causing permanent refractory hyperglycemia if administered concurrently with dextrose.',
        'থায়ামিন দিলে ইনসুলিন কাজ করে না এবং রক্তে চিনি স্থায়ীভাবে অনেক বেড়ে যায়।'
      ),
      l(
        'Intravenous thiamine can only be administered orally after the patient is discharged from the hospital.',
        'থায়ামিন কেবল রোগীকে হাসপাতাল থেকে ছাড়ার পর মুখে খাওয়ার ট্যাবলেট হিসেবে দেওয়া যায়।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'This represents one of the most critical emergency medicine and clinical nutrition imperatives. Thiamine (Vitamin B1), in its active coenzyme form Thiamine Pyrophosphate (TPP), is the obligatory cofactor for pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase in the mitochondrial Krebs cycle. In severe thiamine depletion, infusing a massive glucose load accelerates glycolysis, but pyruvate cannot enter the Krebs cycle. Pyruvate is overwhelmingly shunted by lactate dehydrogenase into lactic acid, triggering profound metabolic lactic acidosis while starving the metabolically vulnerable mammillary bodies and medial thalamus of ATP, causing acute hemorrhagic necrosis (Wernicke Encephalopathy). Guidelines mandate administering 500 mg IV thiamine immediately before or concurrently with dextrose.',
      'এটি জরুরি চিকিৎসা ও ক্লিনিক্যাল পুষ্টির অন্যতম মৌলিক জীবনরক্ষাকারী নীতি। থায়ামিন (TPP) হলো কোষের গ্লুকোজ পুড়িয়ে শক্তি তৈরির মূল এনজাইমের (Pyruvate Dehydrogenase) অপরিহার্য কো-ফ্যাক্টর। শরীরে থায়ামিন না থাকা অবস্থায় প্রচুর গ্লুকোজ স্যালাইন দিলে গ্লুকোজ শক্তি তৈরি করতে না পেরে বিষাক্ত ল্যাকটিক অ্যাসিডে রূপান্তরিত হয়। এতে মস্তিষ্কের মেমিলারি বডি ও ব্রেনস্টেমের কোষগুলো অক্সিজেনের অভাবে সাথে সাথে মারা যায় (ভার্নিকে এনসেফালোপ্যাথি)। তাই গ্লুকোজ স্যালাইনের আগে বা সাথে সাথে শিরায় ৫০০ মিলিগ্রাম থায়ামিন দেওয়া বাধ্যতামূলক।'
    ),
  },
  evidenceBySection: {
    'sec-supplements-vs-medicine': ['ref-holick-vitd-guidelines-2011', 'ref-camaschella-iron-2015'],
    'sec-vitd-and-iron-simple': ['ref-holick-vitd-guidelines-2011', 'ref-stoffel-hepcidin-2017'],
    'sec-thiamine-golden-rule': ['ref-sechi-wernicke-2007', 'ref-efns-wernicke-2010'],
    'sec-vitd-endocrine-protocol': ['ref-holick-vitd-guidelines-2011'],
    'sec-ganzoni-iv-iron': ['ref-ganzoni-formula-1970', 'ref-camaschella-iron-2015'],
    'sec-oral-iron-hepcidin': ['ref-stoffel-hepcidin-2017', 'ref-camaschella-iron-2015'],
    'sec-thiamine-wernicke-rule': ['ref-sechi-wernicke-2007', 'ref-efns-wernicke-2010'],
    'sec-b12-folate-trap': ['ref-stabler-b12-nejm-2013', 'ref-kumar-nutritional-neuro-2010'],
    'sec-zinc-copper-antagonism': ['ref-kumar-nutritional-neuro-2010', 'ref-camaschella-iron-2015'],
    'sec-repletion-matrix': ['ref-holick-vitd-guidelines-2011', 'ref-stabler-b12-nejm-2013', 'ref-camaschella-iron-2015'],
  },
  references: dietetics10References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-supplements-vs-medicine',
          heading: l(
            '1. Daily Vitamins vs. High-Dose Medical Repletion: Why Maintenance Fails in True Deficiency',
            '১. সাধারণ ভিটামিন বনাম উচ্চমাত্রার থেরাপিউটিক চিকিৎসা: মারাত্মক ঘাটতিতে কেন সাধারণ ট্যাবলেট ব্যর্থ হয়?'
          ),
          paragraphs: [
            l(
              'There is an enormous medical difference between taking a standard daily over-the-counter multivitamin and receiving a targeted clinical **micronutrient repletion protocol** [1, 2]. A regular wellness multivitamin contains tiny maintenance dosages—the Recommended Dietary Allowance (RDA) or Adequate Intake (AI). These microscopic amounts are designed solely to keep a healthy person from falling into deficiency when consuming an ordinary diet.',
              'দোকান থেকে কেনা সাধারণ মাল্টিভিটামিন খাওয়া এবং হাসপাতালে চিকিৎসকের দেওয়া **উচ্চমাত্রার অনুপুষ্টি চিকিৎসা প্রোটোকলের (Micronutrient Repletion Protocol)** মধ্যে আকাশ-পাতাল তফাত রয়েছে [1, 2]। সাধারণ মাল্টিভিটামিনে খুব সামান্য পরিমাণে ভিটামিন থাকে (দৈনিক RDA মাত্রা), যা কেবল সুস্থ মানুষের দৈনন্দিন ক্ষয় পূরণ করে রোগ প্রতিরোধ করার জন্য যথেষ্ট।'
            ),
            l(
              'However, when a patient has a medically confirmed, severe clinical deficiency—such as bone-depleting Vitamin D deficiency, profound iron depletion after chronic blood loss, or severe malabsorption following gastrointestinal surgery—daily maintenance supplements are completely useless. The physiological storage vaults (such as bone mineral matrix, hepatic ferritin depots, or central nervous system coenzyme pools) are entirely exhausted [1, 3].',
              'কিন্তু যখন কোনো রোগীর শরীরে সত্যিকার অর্থেই মারাত্মক ঘাটতি ধরা পড়ে—যেমন রক্তে ভিটামিন ডি শূন্যের কোঠায় নেমে হাড় ক্ষয় হওয়া, দীর্ঘমেয়াদী রক্তক্ষরণে আয়রনের ভাণ্ডার সম্পূর্ণ খালি হয়ে যাওয়া, বা গ্যাস্ট্রিক বাইপাস অস্ত্রোপচারের পর অন্ত্রের শোষণ বন্ধ হয়ে যাওয়া—তখন সাধারণ মাল্টিভিটামিন দিয়ে কোনো কাজ হয় না। শরীরের আসল সঞ্চয় ভাণ্ডার (যেমন হাড়ের খনিজ, যকৃতের ফেরিটিন বা মস্তিষ্কের কো-এনজাইম) পুরোপুরি খালি হয়ে যায় [1, 3]।'
            ),
            l(
              'Intuitive Analogy: Imagine an enormous 50,000-liter municipal water reservoir that has run completely dry, with cracked mud at the bottom. Drizzling water into it from a household garden hose (an ordinary multivitamin) will evaporate before the water level even registers. To refill the reservoir and restore water pressure to the city, you must connect a high-capacity industrial fire hydrant pump (a pharmacological repletion dose). Clinicians must prescribe pharmacological megadoses—such as 50,000 IU Vitamin D3 capsules or intravenous iron infusions—to aggressively refill tissue stores before safely stepping down to maintenance [1, 2].',
              'সহজ উপমা: কল্পনা করুন একটি বিশাল ৫০,০০০ লিটারের জলাধার তীব্র খরায় সম্পূর্ণ শুকিয়ে তলার মাটি ফেটে চৌচির হয়ে গেছে। এখন আপনি যদি বাগানের চিকন পাইপ দিয়ে ফোঁটা ফোঁটা পানি দেন (সাধারণ ভিটামিন ট্যাবলেট), তবে সেই পানি জলাধারের তলদেশে পৌঁছানোর আগেই বাষ্প হয়ে উড়ে যাবে। শহরবাসীর পানির চাপ ফেরাতে হলে যেমন ফায়ার সার্ভিসের উচ্চ ক্ষমতাসম্পন্ন পাম্প দিয়ে লাখ লাখ লিটার পানি ঢালতে হয়, ঠিক তেমনি মানবদেহের খালি ভাণ্ডার দ্রুত পূরণ করতে চিকিৎসকদের অত্যন্ত উচ্চমাত্রার ওষুধ—যেমন ৫০,০০০ IU ভিটামিন ডি৩ ক্যাপসুল বা শিরায় আয়রন ইনজেকশন—দিয়ে চিকিৎসা শুরু করতে হয় [1, 2]।'
            ),
          ],
        },
        {
          id: 'sec-vitd-and-iron-simple',
          heading: l(
            '2. The 8-Week Vitamin D3 Protocol & Modern Iron Science',
            '২. ভিটামিন ডি৩ এর ৮ সপ্তাহের প্রোটোকল এবং আয়রন সেবনের আধুনিক বিজ্ঞান'
          ),
          paragraphs: [
            l(
              'Two of the most prevalent clinical deficiencies worldwide are Vitamin D deficiency and Iron deficiency anemia. Modern clinical dietetics treats them with evidence-based pharmacological schedules rather than outdated guesswork [1, 6].',
              'বিশ্বজুড়ে সবচেয়ে পরিচিত দুটি অনুপুষ্টি ঘাটতি হলো ভিটামিন ডি এর ঘাটতি এবং আয়রন ঘাটতিজনিত রক্তাল্পতা। আধুনিক পুষ্টিবিজ্ঞান অনুমানের বদলে প্রমাণভিত্তিক সুনির্দিষ্ট সময়সূচির মাধ্যমে এদের চিকিৎসা করে [1, 6]।'
            ),
          ],
          bullets: [
            l(
              'Vitamin D3 (The 8-Week High-Potency Protocol): If a blood test reveals that your serum 25-hydroxyvitamin D [25(OH)D] is below 20 ng/mL, taking an ordinary 400 IU or 800 IU daily tablet will take years to normalize your skeleton. Medical guidelines from the Endocrine Society mandate prescribing a high-potency dose of 50,000 IU of Vitamin D3 (cholecalciferol) orally once every week for 8 consecutive weeks. This massive pulse safely floods the liver and adipose tissue, rapidly replenishing storage vaults before transitioning to a daily maintenance dose of 1,500 to 2,000 IU/day [1].',
              'ভিটামিন ডি৩ (৮ সপ্তাহের হাই-পোটেন্সি প্রোটোকল): রক্ত পরীক্ষায় ভিটামিন ডি এর মাত্রা ২০ ng/mL-এর নিচে থাকলে সাধারণ ৪০০ বা ৮০০ IU ট্যাবলেট খেলে ঘাটতি পূরণে কয়েক বছর কেটে যাবে। আন্তর্জাতিক নির্দেশিকা অনুযায়ী প্রতি সপ্তাহে ৫০,০০০ IU ভিটামিন ডি৩ (cholecalciferol) ক্যাপসুল টানা ৮ সপ্তাহ খেতে হয়। এই উচ্চমাত্রা শরীরের যকৃত ও চর্বির ভাণ্ডার দ্রুত পূরণ করে, যার পর প্রতিদিন ১৫০০ থেকে ২০০০ IU মেইনটেন্যান্স ডোজ চালিয়ে যেতে হয় [1]।'
            ),
            l(
              'Iron (The Alternate-Day Breakthrough): For decades, patients were told to swallow iron pills three times every day. This caused severe stomach cramping, nausea, metallic taste, and excruciating constipation, causing more than 50% of patients to abandon their medication. Modern research reveals that taking oral iron every other day (on alternate days) in the morning with Vitamin C (such as fresh lemon juice) triggers less gut inflammation, doubles fractional intestinal absorption, and cures anemia far faster with virtually zero stomach pain [6].',
              'আয়রন (একদিন পর পর খাওয়ার আধুনিক সাফল্য): বহু দশক ধরে রোগীদের দিনে তিনবার আয়রন ট্যাবলেট খাওয়ার পরামর্শ দেওয়া হতো। এর ফলে পেটে তীব্র মোচড়, বমি ভাব এবং মারাত্মক কোষ্ঠকাঠিন্য হতো, যার ফলে অর্ধেকেরও বেশি রোগী ওষুধ খাওয়া ছেড়ে দিতেন। আধুনিক চিকিৎসা গবেষণা প্রমাণ করেছে যে একদিন পর পর সকালে খালি পেটে লেবুর রসের (ভিটামিন সি) সাথে আয়রন খেলে অন্ত্র দ্বিগুণ পরিমাণ আয়রন গ্রহণ করে এবং পেটের সব কষ্ট দূর হয়ে রক্তাল্পতা দ্রুত সেরে যায় [6]।'
            ),
          ],
        },
        {
          id: 'sec-thiamine-golden-rule',
          heading: l(
            '3. The Emergency Thiamine Imperative: Protecting the Starving Brain',
            '৩. থায়ামিন (ভিটামিন বি১) এর জরুরি সোনালী নিয়ম: অনাহারক্লিষ্ট মস্তিষ্কের সুরক্ষা'
          ),
          paragraphs: [
            l(
              'The single most critical emergency rule in clinical dietetics and acute hospital medicine is: **Never administer intravenous glucose (dextrose) to a severely malnourished or alcoholic patient without administering high-dose Thiamine first** [4, 8].',
              'হাসপাতালের জরুরি চিকিৎসা ও ক্লিনিক্যাল পুষ্টির সবচেয়ে গুরুত্বপূর্ণ এবং অপরিবর্তনীয় সোনালী নিয়ম হলো: **মারাত্মক অপুষ্টিতে ভোগা বা অ্যালকোহলাসক্ত রোগীকে থায়ামিন (ভিটামিন বি১) ইনজেকশন না দিয়ে কখনোই কোনো গ্লুকোজ স্যালাইন (Dextrose) দেওয়া যাবে না** [4, 8]।'
            ),
            l(
              'Thiamine (Vitamin B1) serves as the biological spark plug that allows cellular mitochondria to burn carbohydrates into energy. When a person is chronically malnourished, their intracellular thiamine vaults are completely empty. If an emergency clinician rushes to infuse a bag of sugar water (5% or 10% dextrose) to treat low blood sugar, the flood of glucose accelerates cellular glycolysis, instantly burning up the last surviving molecules of thiamine [4].',
              'থায়ামিন হলো কোষের ইঞ্জিন সচল রাখার স্পার্ক প্লাগ, যা মাইটোকন্ড্রিয়াকে গ্লুকোজ পুড়িয়ে শক্তি তৈরি করতে সাহায্য করে। দীর্ঘদিন না খেয়ে থাকা মানুষের কোষে থায়ামিন শূন্য হয়ে যায়। এ অবস্থায় ডাক্তার যদি রক্তের চিনি কম দেখে তাড়াহুড়ো করে রোগীকে গ্লুকোজ স্যালাইন দেন, তবে সেই বাড়তি চিনি কোষে ঢুকে অবশিষ্ট সামান্য থায়ামিনকে চোখের পলকে পুড়িয়ে নিঃশেষ করে ফেলে [4]।'
            ),
            l(
              'Unable to enter the Krebs cycle, the glucose is shunted into toxic lactic acid. Deprived of ATP, the delicate cells of the brainstem and mammillary bodies die within hours. The patient develops acute, irreversible brain damage: **Wernicke Encephalopathy**, progressing to permanent amnesia, coma, and death. Giving high-dose IV thiamine (200 to 500 mg) before or alongside dextrose is an inviolable rule of clinical practice [4, 8].',
              'ক্রেবস চক্রে ঢুকতে না পেরে গ্লুকোজ বিষাক্ত ল্যাকটিক অ্যাসিডে রূপান্তরিত হয়। শক্তির অভাবে মস্তিষ্কের মেমিলারি বডি ও ব্রেনস্টেমের সংবেদনশীল কোষগুলো কয়েক ঘণ্টার মধ্যে মারা যায়। রোগী চিরতরে অন্ধ, স্মৃতিশক্তিহীন বা পক্ষাঘাতগ্রস্ত হয়ে পড়েন, যাকে **ভার্নিকে এনসেফালোপ্যাথি (Wernicke Encephalopathy)** বলা হয়। তাই গ্লুকোজ স্যালাইনের আগে বা সাথে সাথে শিরায় ২০০ থেকে ৫০০ মিলিগ্রাম থায়ামিন ইনজেকশন নিশ্চিত করা বাধ্যতামূলক [4, 8]।'
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
          heading: l(
            '1. The Endocrine Society Vitamin D Diagnostic Taxonomy & Adipose Sequestration',
            '১. এন্ডোক্রাইন সোসাইটির ভিটামিন ডি রোগনির্ণয় মানদণ্ড এবং অ্যাডিপোজ টিস্যুর ফাঁদ'
          ),
          paragraphs: [
            l(
              'Serum **25-hydroxyvitamin D [25(OH)D]** is the universally recognized biological biomarker reflecting total cutaneous synthesis and dietary absorption of vitamin D [1]. Circulating 1,25-dihydroxyvitamin D (calcitriol) should never be used to diagnose deficiency because secondary hyperparathyroidism artificially stimulates renal 1-alpha-hydroxylase, maintaining normal calcitriol levels even in near-fatal bone depletion.',
              'রক্তের **২৫-হাইড্রোক্সিভিটামিন ডি [25(OH)D]** হলো শরীরে ভিটামিন ডি এর আসল অবস্থা পরিমাপের আন্তর্জাতিক নির্দেশক [1]। সক্রিয় ১,২৫-ডাইহাইড্রোক্সিভিটামিন ডি (ক্যালসিট্রিওল) দিয়ে কখনোই ঘাটতি মাপা যায় না, কারণ প্যারাথাইরয়েড হরমোন বেড়ে গিয়ে কিডনিকে বাধ্য করে রক্তে ক্যালসিট্রিওল স্বাভাবিক দেখাতে, এমনকি যখন হাড়ের ভেতরের সব ক্যালসিয়াম ক্ষয় হয়ে শূন্য হয়ে গেছে।'
            ),
            l(
              'The Endocrine Society Clinical Practice Guidelines establish three strict diagnostic thresholds [1]:',
              'আন্তর্জাতিক এন্ডোক্রাইন সোসাইটির নির্দেশিকা রক্তে ভিটামিন ডি এর মাত্রাকে তিনটি ভাগে বিভক্ত করেছে [1]:'
            ),
          ],
          bullets: [
            l(
              'Deficiency: Serum 25(OH)D < 20 ng/mL (< 50 nmol/L). At this concentration, intestinal calcium absorption efficiency collapses from 30–40% down to 10–15%, unleashing secondary hyperparathyroidism that resorbs calcium from skeletal bone.',
              'ঘাটতি (Deficiency): রক্তে 25(OH)D ২০ ng/mL (< ৫০ nmol/L) এর কম। এ অবস্থায় অন্ত্র থেকে ক্যালসিয়াম শোষণের হার ধসে মাত্র ১০–১৫%-এ নেমে আসে এবং হাড় থেকে ক্যালসিয়াম বের হয়ে অস্টিওম্যালেশিয়া ও হাড়ের ব্যথা শুরু হয়।'
            ),
            l(
              'Insufficiency: Serum 25(OH)D 21 to 29 ng/mL (52.5 to 72.5 nmol/L). Associated with suboptimal bone mineral density and elevated fracture risks.',
              'অপর্যাপ্ততা (Insufficiency): রক্তে 25(OH)D ২১ থেকে ২৯ ng/mL। এতে হাড়ের ঘনত্ব দুর্বল থাকে এবং সহজে হাড় ভেঙে যাওয়ার ঝুঁকি তৈরি হয়।'
            ),
            l(
              'Sufficiency: Serum 25(OH)D 30 to 100 ng/mL (75 to 250 nmol/L). Maximally suppresses parathyroid hormone (PTH) and optimizes bone mineral density and muscle strength.',
              'পর্যাপ্ত স্বাভাবিক মাত্রা (Sufficiency): রক্তে 25(OH)D ৩০ থেকে ১০০ ng/mL। এটি প্যারাথাইরয়েড হরমোনকে নিয়ন্ত্রণে রাখে এবং হাড় ও পেশির শক্তি সর্বোচ্চে ধরে রাখে।'
            ),
            l(
              'Adipose Sequestration in Obesity: Vitamin D is an extraordinarily lipophilic molecule. In patients with obesity (BMI ≥ 30 kg/m²), vast subcutaneous and visceral adipose depots act as a physiological "sink," irreversibly trapping administered cholecalciferol. Obese patients require 2 to 3 times higher doses (e.g., 50,000 IU twice or three times weekly, or 100,000 IU weekly for 8 to 12 weeks) to achieve target serum concentrations ≥ 30 ng/mL [1].',
              'স্থূলতার চর্বির ফাঁদ: ভিটামিন ডি চর্বিতে অত্যন্ত দ্রবণীয়। অতিরিক্ত ওজনের ব্যক্তিদের (BMI ≥ ৩০) শরীরের বিশাল চর্বির স্তর ভিটামিন ডি-কে খাঁচার মতো আটকে ফেলে রক্তে ঢুকতে দেয় না। তাই স্থূল রোগীদের ঘাটতি পূরণ করতে সাধারণের চেয়ে ২ থেকে ৩ গুণ বেশি মাত্রা (সপ্তাহে ৫০,০০০ IU এর দুটি বা তিনটি ক্যাপসুল) দিতে হয় [1]।'
            ),
          ],
        },
        {
          id: 'sec-ganzoni-iv-iron',
          heading: l(
            '2. Intravenous Iron Kinetics and The Mathematical Ganzoni Formula',
            '২. শিরায় আয়রনের গতিবিদ্যা এবং গাণিতিক গানজোনি সমীকরণ'
          ),
          paragraphs: [
            l(
              'In severe iron deficiency anemia where oral iron fails due to gastrointestinal intolerance, intestinal malabsorption (Celiac disease, active Crohn’s, bariatric Roux-en-Y gastric bypass), or ongoing heavy blood loss exceeding oral absorption capacity, intravenous iron is mandatory [2, 3].',
              'তীব্র রক্তাল্পতায় যখন মুখের ওষুধ পেটে সহ্য হয় না, বা অন্ত্রের শোষণ ত্রুটির কারণে (সিলিয়াক ডিজিজ, ক্রোনস ডিজিজ বা গ্যাস্ট্রিক বাইপাস) রক্তে পৌঁছায় না, তখন সরাসরি শিরায় আয়রন ইনজেকশন দেওয়া বাধ্যতামূলক [2, 3]।'
            ),
            l(
              'To avoid both underdosing (persistent anemia) and overdosing (toxic iron overload and hemosiderosis), the total dose of elemental iron required to restore hemoglobin and replenish reticuloendothelial storage depots is calculated using the landmark **Ganzoni Formula** [3]:',
              'কম মাত্রা দিলে রক্তাল্পতা সারবে না এবং বেশি মাত্রা দিলে তা যকৃতে জমে বিষক্রিয়া সৃষ্টি করবে; তাই অস্থিমজ্জা ও যকৃতের খালি ভাণ্ডার পূরণ করতে মোট কত মিলিগ্রাম আয়রন প্রয়োজন তা বিখ্যাত **গানজোনি সমীকরণ (Ganzoni Formula)** দিয়ে বের করা হয় [3]:'
            ),
            l(
              'Total Iron Deficit (mg) = Body Weight (kg) × [Target Hb – Actual Hb (g/dL)] × 2.4 + Iron Depot Stores (500 mg)',
              'মোট আয়রনের ঘাটতি (mg) = রোগীর ওজন (কেজি) × [কাঙ্ক্ষিত Hb – বর্তমান Hb (g/dL)] × ২.৪ + সঞ্চিত ভাণ্ডার (৫০০ mg)'
            ),
          ],
          bullets: [
            l(
              'Derivation of the 2.4 Multiplier: Incorporates average blood volume (~7% of body weight = 0.07 L/kg), the precise iron content of hemoglobin (0.34% by weight = 3.4 mg iron per gram of Hb), and a unit conversion factor of 10: 0.07 × 3.4 × 10 = 2.38 ≈ 2.4.',
              'গুণক ২.৪ এর বৈজ্ঞানিক ভিত্তি: রক্তের মোট আয়তন (শরীরের ওজনের ৭% বা ০.০৭ L/কেজি), হিমোগ্লোবিনে আয়রনের শতকরা হার (০.৩৪% বা প্রতি গ্রামে ৩.৪ mg), এবং একক রূপান্তর গুণক ১০: ০.০৭ × ৩.৪ × ১০ = ২.৩৮ ≈ ২.৪।',
            ),
            l(
              'Iron Depot Stores (500 mg): In adults weighing > 35 kg, 500 mg of elemental iron is added to replenish bone marrow and hepatic reticuloendothelial ferritin stores. In pediatric patients or adults weighing < 35 kg, storage iron is calculated as 10 to 15 mg/kg body weight.',
              'সঞ্চিত ভাণ্ডার (৫০০ mg): প্রাপ্তবয়স্কদের ক্ষেত্রে অস্থিমজ্জা ও যকৃতের খালি ফেরিটিন ভাণ্ডার পূর্ণ করতে অতিরিক্ত ৫০০ মিলিগ্রাম আয়রন যোগ করা হয়। ৩৫ কেজির কম ওজনের শিশুদের ক্ষেত্রে এটি প্রতি কেজিতে ১০ থেকে ১৫ মিলিগ্রাম হারে ধরা হয়।',
            ),
            l(
              'Modern IV Formulations: Historical high-molecular-weight iron dextran caused fatal anaphylactic reactions due to dextran antibodies. Modern carbohydrate-matrix complexes—such as Ferric Carboxymaltose (FCM) and Iron Derisomaltose—allow single-dose infusions of up to 1,000 mg of elemental iron over 15 to 30 minutes with exceptional hemodynamic safety [2].',
              'আধুনিক ইনজেকশনের সুবিধা: পুরোনো আয়রন ডেক্সট্রানে মারাত্মক অ্যালার্জি ও মৃত্যুর ঝুঁকি ছিল। আধুনিক কার্বোহাইড্রেটযুক্ত ইনজেকশন (ফেরিক কার্বক্সিম্যালটোজ) মাত্র ১৫ থেকে ৩০ মিনিটে ১,০০০ মিলিগ্রাম পর্যন্ত আয়রন অত্যন্ত নিরাপদে শরীরে পৌঁছে দেয় [2]।',
            ),
          ],
        },
        {
          id: 'sec-oral-iron-hepcidin',
          heading: l(
            '3. Hepcidin Circadian Kinetics and Alternate-Day Oral Iron Dosing',
            '৩. হেপসিডিন হরমোনের গতিবিদ্যা এবং একদিন পর পর আয়রন সেবনের কৌশল'
          ),
          paragraphs: [
            l(
              'Why did traditional medical practice fail for generations by prescribing oral ferrous sulfate 325 mg three times daily? The answer was uncovered through the discovery of **Hepcidin**, the master regulatory hormone of systemic iron homeostasis synthesized by the liver [2, 6].',
              'বহু দশক ধরে দিনে তিনবার আয়রন ট্যাবলেট খাওয়ার পরামর্শ কেন ব্যর্থ হয়েছিল? যকৃতে উৎপন্ন **হেপসিডিন (Hepcidin)** হরমোনের ক্রিয়া আবিষ্কারের পর এই রহস্য উন্মোচিত হয় [2, 6]।'
            ),
          ],
          bullets: [
            l(
              'The Hepcidin Blockade: When an enterocyte absorbs an oral dose of iron (60 to 100 mg elemental iron), circulating plasma iron spikes within 2 to 4 hours. Sensing this influx, hepatic hepatocytes rapidly transcribe and secrete hepcidin. Circulating hepcidin binds directly to **Ferroportin-1** (the sole cellular iron exporter on the basolateral membrane of duodenal enterocytes and reticuloendothelial macrophages), inducing its internalization, ubiquitination, and lysosomal degradation [6].',
              'হেপসিডিনের বাধা: সকালে একটি আয়রন ট্যাবলেট খেলে রক্তে আয়রন বেড়ে যায়। যকৃত এটি টের পেয়ে রক্তে প্রচুর হেপসিডিন হরমোন ছেড়ে দেয়। হেপসিডিন অন্ত্রের কোষের ফেরোপোরটিন-১ (Ferroportin-1) নামের একমাত্র এক্সপোর্ট চ্যানেলটিকে ভেঙে ধ্বংস করে দেয় [6]।',
            ),
            l(
              'The 24- to 48-Hour Lockout: Following an oral iron dose, serum hepcidin remains significantly elevated for 24 to 48 hours. If the patient swallows another iron pill that afternoon, evening, or the next morning, the enterocyte exit gates are sealed shut. Fractional iron absorption plummets from 20% down to under 5%. The unabsorbed heavy metal iron remains trapped in the intestinal lumen, oxidizing intestinal lipids, eroding the mucosal brush border, and feeding pathogenic colonic microbes, triggering agonizing cramps and severe constipation [6].',
              '২৪ থেকে ৪৮ ঘণ্টার লকডাউন: হেপসিডিনের মাত্রা ২৪ থেকে ৪৮ ঘণ্টা পর্যন্ত অনেক বেশি থাকে। ফলে একই দিনে দ্বিতীয়বার বা পরদিন সকালে ট্যাবলেট খেলে অন্ত্র আর কোনো আয়রন গ্রহণ করতে পারে না (শোষণ ২০% থেকে নেমে ৫%-এর নিচে চলে যায়)। অপ্রয়োজনীয় সেই ভারী ধাতু পেটে জমে অন্ত্রের মিউকোসাকে পুড়িয়ে দেয় এবং পেটে তীব্র গ্যাস, মোচড় ও কোষ্ঠকাঠিন্য তৈরি করে [6]।',
            ),
            l(
              'The Alternate-Day Solution: Dosing 60 to 100 mg of elemental iron on alternate days (every 48 hours) allows hepcidin to decline back to basal levels between doses. This doubles fractional absorption, maximizes total cumulative hemoglobin restoration, and reduces gastrointestinal adverse events by more than 70% [6].',
              'সমাধান: একদিন পর পর (প্রতি ৪৮ ঘণ্টায় একবার) আয়রন খেলে হেপসিডিন স্বাভাবিক হয়ে আসে। ফলে শরীর দ্বিগুণ আয়রন গ্রহণ করতে পারে এবং পেটের সব কষ্ট দূর হয়ে হিমোগ্লোবিন দ্রুত স্বাভাবিক হয় [6]।',
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
          heading: l(
            '1. The Thiamine Molecular Cascade: PDC Blockade, Lactic Acidosis & Wernicke Brainstem Necrosis',
            '১. থায়ামিনের আণবিক গতিবিদ্যা: পিডিসি ব্লকেড, ল্যাকটিক অ্যাসিডোসিস এবং ভার্নিকে ব্রেনস্টেম ধ্বংস'
          ),
          paragraphs: [
            l(
              'Thiamine (Vitamin B1) is enzymatically phosphorylated by thiamine pyrophosphokinase into **Thiamine Pyrophosphate (TPP)**, the obligatory prosthetic cofactor for three vital multi-enzyme complexes in intermediary metabolism [4, 8]:',
              'থায়ামিন কোষে গিয়ে **থায়ামিন পাইরোফসফেট (TPP)** নামের সক্রিয় কো-ফ্যাক্টরে রূপান্তরিত হয়, যা কোষের তিনটি প্রধান এনজাইম কমপ্লেক্স পরিচালনা করে [4, 8]:'
            ),
          ],
          bullets: [
            l(
              'Pyruvate Dehydrogenase Complex (PDC): The irreversible mitochondrial gatekeeper converting cytosolic pyruvate into acetyl-CoA, bridging glycolysis with the citric acid (TCA) cycle.',
              'পাইরুভেট ডিহাইড্রোজিনেজ (PDC): গ্লাইকোলাইসিসে তৈরি পাইরুভেটকে অ্যাসিটাইল-কোএ-তে রূপান্তর করে ক্রেবস চক্রে প্রবেশের একমাত্র প্রধান ফটক।',
            ),
            l(
              'Alpha-Ketoglutarate Dehydrogenase: Converts alpha-ketoglutarate to succinyl-CoA in the TCA cycle, generating NADH to drive mitochondrial electron transport chain ATP synthesis.',
              'আলফা-কিটোগ্লুটারেট ডিহাইড্রোজিনেজ: সাইট্রিক অ্যাসিড চক্রকে সচল রেখে মাইটোকন্ড্রিয়ায় এটিপি তৈরির জন্য প্রয়োজনীয় ইলেকট্রন সরবরাহ করে।',
            ),
            l(
              'Transketolase: The non-oxidative branch enzyme of the Pentose Phosphate Pathway, generating NADPH for glutathione reduction and ribose-5-phosphate for nucleotide nucleic acid synthesis.',
              'ট্রান্সকিটোলেজ: পেন্টোজ ফসফেট চক্রে অ্যান্টিঅক্সিডেন্ট গ্লুটাথায়ন পুনরুৎপাদন এবং ডিএনএ তৈরির শর্করা প্রস্তুত করে।',
            ),
            l(
              'The Lethal Glycolytic Surge: In severe thiamine depletion (chronic alcoholism, refeeding syndrome, hyperemesis gravidarum), infusing an intravenous glucose load accelerates glycolysis, producing vast quantities of pyruvate. With PDC completely paralyzed by TPP absence, pyruvate cannot enter the TCA cycle. Lactate dehydrogenase is forced to convert all pyruvate into lactic acid, triggering fulminant metabolic lactic acidosis.',
              'প্রাণঘাতী গ্লাইকোলাইটিক ফাঁদ: থায়ামিন না থাকা অবস্থায় গ্লুকোজ দিলে কোষে প্রচুর পাইরুভেট তৈরি হয় কিন্তু PDC বন্ধ থাকায় তা ক্রেবস চক্রে যেতে পারে না। ফলে সব পাইরুভেট বিষাক্ত ল্যাকটিক অ্যাসিডে রূপান্তরিত হয়ে মারাত্মক মেটাবলিক ল্যাকটিক অ্যাসিডোসিস সৃষ্টি করে।',
            ),
            l(
              'Focal Brainstem Necrosis (Wernicke Encephalopathy): Cerebral structures with the highest baseline metabolic turnover rates—specifically the mammillary bodies, medial thalamic nuclei, periaqueductal gray, and floor of the fourth ventricle—suffer catastrophic intracellular ATP collapse. Astrocytic Na⁺/K⁺-ATPase pumps fail, triggering massive NMDA-receptor glutamate excitotoxicity, blood-brain barrier breakdown, petechial microvascular hemorrhages, and focal neuronal necrosis [4, 8].',
              'মস্তিষ্কের ব্রেনস্টেম ধ্বংস (ভার্নিকে এনসেফালোপ্যাথি): মস্তিষ্কের সবচেয়ে বেশি শক্তি খরচকারী অংশগুলো (মেমিলারি বডি, মিডিয়াল থ্যালামাস) এটিপির অভাবে সম্পূর্ণ অকেজো হয়ে পড়ে। কোষের ভেতর সোডিয়াম-পটাশিয়াম পাম্প বন্ধ হয়ে যায়, বিষাক্ত গ্লুটামেট নির্গত হয় এবং রক্তনালী ফেটে গিয়ে মস্তিষ্কের কোষ মারা যায় [4, 8]।',
            ),
            l(
              'Clinical Triad & EFNS Emergency Protocol: Wernicke encephalopathy presents with the classic triad of encephalopathy (acute confusion/delirium), oculomotor dysfunction (horizontal/vertical nystagmus, bilateral sixth nerve lateral rectus palsy), and cerebellar gait ataxia. Less than 20% of patients display all three signs simultaneously. European Federation of Neurological Societies (EFNS) guidelines mandate: Immediately infuse Thiamine 500 mg IV diluted in 100 mL normal saline over 30 minutes, three times daily for 3 to 5 consecutive days, prior to any carbohydrate infusion [8].',
              'ক্লিনিক্যাল লক্ষণ ও জরুরি চিকিৎসা: ভার্নিকে এনসেফালোপ্যাথির তিনটি প্রধান লক্ষণ: তীব্র মানসিক বিভ্রান্তি, চোখের অনিয়মিত কাঁপুনি ও প্যারালাইসিস, এবং ভারসাম্যহীন হাঁটা। নির্দেশিকা অনুযায়ী: গ্লুকোজ দেওয়ার আগেই বা সাথে সাথে অবিলম্বে শিরাপথে ৫০০ মিলিগ্রাম থায়ামিন দিনে তিনবার টানা ৩ থেকে ৫ দিন প্রদান করতে হবে [8]।',
            ),
          ],
        },
        {
          id: 'sec-b12-folate-trap',
          heading: l(
            '2. The "Folate Trap" and Subacute Combined Degeneration of the Spinal Cord',
            '২. "ফোলেট ফাঁদ" (Folate Trap) এবং মেরুদণ্ডের মারাত্মক সাবএকিউট কম্বাইন্ড ডিজেনারেশন'
          ),
          paragraphs: [
            l(
              'In megaloblastic macrocytic anemia (MCV > 100 fL with hypersegmented neutrophils), distinguishing Vitamin B12 (cobalamin) deficiency from folate (Vitamin B9) deficiency is of paramount neurological importance [5, 7]. Misdiagnosing the two leads to preventable, permanent paralysis.',
              'মেগালোব্লাস্টিক রক্তাল্পতায় (রক্তের লোহিত কণিকা অস্বাভাবিক বড় হওয়া) ভিটামিন বি১২ এবং ফলিক অ্যাসিডের ঘাটতি সঠিকভাবে চেনা অত্যন্ত জীবনরক্ষাকারী [5, 7]। ভুল রোগনির্ণয় করলে রোগী চিরতরে প্যারালাইজড হয়ে যেতে পারে।'
            ),
          ],
          bullets: [
            l(
              'Biochemistry of the Folate Trap: The cytoplasmic enzyme Methionine Synthase requires both methylcobalamin (active Vitamin B12) and 5-methyl-tetrahydrofolate (5-methyl-THF). In this reaction, 5-methyl-THF donates its methyl group to cobalamin to form methylcobalamin, which then transfers the methyl group to homocysteine, generating methionine. This simultaneously demethylates 5-methyl-THF back into free Tetrahydrofolate (THF). In Vitamin B12 deficiency, methionine synthase is paralyzed. Cellular folate becomes irreversibly trapped as 5-methyl-THF—a dead-end biochemical trap known as the Folate Trap. Cells run out of free THF and 5,10-methylene-THF, arresting thymidylate and purine synthesis and halting bone marrow DNA replication [5].',
              'ফোলেট ফাঁদের আণবিক রসায়ন: কোষে মিথিওনিন সিন্থেজ এনজাইম সক্রিয় থাকতে ভিটামিন বি১২ এবং ৫-মিথাইল-টিএইচএফ উভয়ই প্রয়োজন হয়। বি১২ না থাকলে এনজাইম বন্ধ হয়ে যায় এবং শরীরের সব ফলিক অ্যাসিড "৫-মিথাইল-টিএইচএফ" নামের এক নিষ্ক্রিয় রূপে চিরতরে বন্দি হয়ে যায়, যাকে **ফোলেট ফাঁদ (Folate Trap)** বলা হয়। ফলে অস্থিমজ্জা ডিএনএ তৈরি করতে পারে না এবং রক্তাল্পতা দেখা দেয় [5]। ',
            ),
            l(
              'The Tragic Clinical Catastrophe: If an unwary clinician sees megaloblastic anemia and prescribes solitary high-dose folic acid (1 to 5 mg/day) without verifying B12, the massive influx of exogenous folate enters cells via non-enzymatic diffusion. It bypasses the trap, restoring thymidylate synthesis. The bone marrow begins churning out normal red blood cells, curing the hematological anemia and falsely reassuring the clinician! [5, 7]',
              'চিকিৎসার ভয়াবহ ট্র্যাজেডি: ডাক্তার যদি ভুলবশত বি১২ পরীক্ষা না করে কেবল উচ্চমাত্রার ফলিক অ্যাসিড (দিনে ১–৫ মিলিগ্রাম) দেন, তবে সেই বাড়তি ফোলেট ফাঁদকে পাশ কাটিয়ে লোহিত কণিকা তৈরি শুরু করে। রক্তের হিমোগ্লোবিন রিপোর্ট পুরোপুরি স্বাভাবিক হয়ে যায় এবং ডাক্তার ভাবেন রোগী সুস্থ হয়ে গেছেন! [5, 7]',
            ),
            l(
              'Irreversible Spinal Cord Destruction: However, because the underlying B12 deficiency was never corrected, the generation of S-adenosylmethionine (SAM) remains halted, leaving myelin basic protein unmethylated. Simultaneously, toxic methylmalonyl-CoA mutase failure causes massive accumulation of **Methylmalonic Acid (MMA)**, which incorporates abnormal branched-chain fatty acids into neural membranes. The myelin sheaths of the posterior (dorsal) columns and lateral corticospinal tracts of the spinal cord rapidly disintegrate: Subacute Combined Degeneration of the Cord (SCD). The patient develops symmetrical loss of vibration and proprioception, spastic paraparesis, extensor plantar responses, sensory ataxia, and permanent wheelchair confinement [5, 7].',
              'মেরুদণ্ডের স্নায়ুর ধ্বংসযজ্ঞ: রক্ত ভালো হলেও বি১২ না থাকার কারণে স্নায়ুর মায়েলিন পর্দা তৈরির প্রক্রিয়া বন্ধ থাকে এবং রক্তে বিষাক্ত মিথাইলম্যালোনিক অ্যাসিড (MMA) জমে। এর ফলে মেরুদণ্ডের পেছনের ও পাশের স্নায়ুগুলো পুড়ে ধ্বংস হয়ে যায়, যাকে **Subacute Combined Degeneration** বলা হয়। রোগী শরীরের অনুভূতি হারিয়ে ফেলে, পা অবশ হয়ে যায় এবং চিরতরে হুইলচেয়ারে পঙ্গু হয়ে বেঁচে থাকতে হয় [5, 7]।',
            ),
            l(
              'The Mandatory Clinical Rule: Never initiate pharmacological folic acid therapy without documenting serum Vitamin B12 and Methylmalonic Acid (MMA). Elevated MMA is 98% sensitive and specific for B12 deficiency (MMA is normal in isolated folate deficiency) [5].',
              'বাধ্যতামূলক ক্লিনিক্যাল নিয়ম: রক্তে বি১২ এবং মিথাইলম্যালোনিক অ্যাসিড (MMA) নিশ্চিত না করে কখনোই উচ্চমাত্রার ফলিক অ্যাসিড দেওয়া যাবে না। বি১২ ঘাটতিতে MMA অনেক বেড়ে যায়, কিন্তু ফোলেটের ঘাটতিতে MMA সম্পূর্ণ স্বাভাবিক থাকে [5]। ',
            ),
          ],
        },
        {
          id: 'sec-zinc-copper-antagonism',
          heading: l(
            '3. Zinc-Induced Copper Deficiency: The Enterocyte Metallothionein Trap',
            '৩. অতিরিক্ত জিংকজনিত কপার ঘাটতি: অন্ত্রের মেটালোথাইয়োনিন ফাঁদ'
          ),
          paragraphs: [
            l(
              'In clinical practice, micronutrients cannot be viewed in isolation; competitive absorptive antagonisms between heavy divalent metals can trigger life-threatening secondary deficiencies [2, 7]. The classic paradigm is zinc-induced copper deficiency.',
              'ক্লিনিক্যাল পুষ্টিতে কোনো খনিজকে একা বিবেচনা করা যায় না; অন্ত্রে খনিজের মধ্যে শোষণ নিয়ে তীব্র প্রতিযোগিতা চলে। এর সবচেয়ে মারাত্মক উদাহরণ হলো অতিরিক্ত জিংক খাওয়ার কারণে কপারের শূন্যতা তৈরি হওয়া [2, 7]।'
            ),
          ],
          bullets: [
            l(
              'The Enterocyte Metallothionein Trap: Chronic consumption of high-dose elemental zinc (> 40 to 50 mg/day from over-the-counter cold remedies, immune boosters, or zinc-rich dental adhesives) powerfully induces gene transcription of **Metallothionein**, a low-molecular-weight intracellular metal-binding protein inside duodenal enterocytes [7].',
              'মেটালোথাইয়োনিন প্রোটিনের ফাঁদ: প্রতিদিন অতিরিক্ত জিংক খেলে (দিনে ৪০ থেকে ৫০ মিলিগ্রামের বেশি জিংক ট্যাবলেট বা ডেন্টাল পেস্ট) অন্ত্রের কোষে **মেটালোথাইয়োনিন (Metallothionein)** নামের এক বিশেষ প্রোটিন তৈরি হয় [7]। ',
            ),
            l(
              'Binding Affinity Dynamics: Metallothionein has a chemical binding affinity for Copper (Cu²⁺) that is nearly 1,000 times higher than its affinity for Zinc (Zn²⁺). Consequently, all ingested dietary copper entering the enterocyte is immediately and irreversibly chelated by metallothionein, sequestering it inside the mucosal cell and blocking its transfer into portal blood via ATP7A [7].',
              'কপারের অপমৃত্যু: এই মেটালোথাইয়োনিন প্রোটিন জিংকের চেয়ে কপারকে ১,০০০ গুণ বেশি শক্তিতে আঁকড়ে ধরে। ফলে খাবারের সব কপার অন্ত্রের কোষের ভেতরে আটকা পড়ে যায় এবং রক্তে ঢুকতে পারে না [7]। ',
            ),
            l(
              'Fecal Excretion & Systemic Exhaustion: Because mature duodenal enterocytes have a short lifespan of 3 to 5 days, the sequestered copper is discarded into the intestinal lumen and excreted in feces when the enterocytes slough off. Within 4 to 8 weeks, circulating serum copper and ceruloplasmin collapse to near zero.',
              'কপারের অপচয়: অন্ত্রের কোষগুলো ৩ থেকে ৫ দিন পর পর মলের সাথে ঝরে পড়ে। ফলে আটকা পড়া সব কপার মলের সাথে বের হয়ে যায় এবং কয়েক সপ্তাহের মধ্যে শরীরে কপারের মাত্রা শূন্য হয়ে যায়।',
            ),
            l(
              'Clinical Presentation: Copper is the essential cofactor for **Hephaestin** and **Ceruloplasmin** (multicopper ferroxidases required to oxidize Fe²⁺ to Fe³⁺ so iron can bind transferrin) and **Cytochrome c Oxidase**. Copper depletion produces severe microcytic hypochromic or ringed sideroblastic anemia, profound refractory neutropenia, and an ascending sensory ataxia with spasticity that identically mimics Vitamin B12 subacute combined degeneration [7]. Treatment mandates immediately stopping zinc and infusing intravenous copper chloride or copper gluconate.',
              'ক্লিনিক্যাল পরিণতি: কপার না থাকলে আয়রন রক্তে ঢুকতে পারে না। ফলে শরীরে মারাত্মক রক্তাল্পতা, শ্বেতকণিকার শূন্যতা (Neutropenia), এবং অবিকল বি১২ ঘাটতির মতো তীব্র স্নায়ুর পক্ষাঘাত দেখা দেয়। এর চিকিৎসা হলো অবিলম্বে জিংক বন্ধ করা এবং শিরায় কপার ইনজেকশন দেওয়া [7]। ',
            ),
          ],
        },
        {
          id: 'sec-repletion-matrix',
          heading: l(
            '4. Comprehensive Clinical Repletion Matrix & Pharmacological Thresholds',
            '৪. ক্লিনিক্যাল অনুপুষ্টি ঘাটতি পূরণ প্রোটোকল ও মাত্রা নির্ধারণের পূর্ণাঙ্গ ছক'
          ),
          paragraphs: [
            l(
              'The following comprehensive clinical matrix summarizes the standardized therapeutic dosages, administration routes, biochemical monitoring intervals, and safety thresholds across high-risk micronutrients [1, 2, 5, 8]:',
              'নিচের ক্লিনিক্যাল ছকে উচ্চ ঝুঁকিপূর্ণ অনুপুষ্টির ঘাটতি পূরণের প্রমিত থেরাপিউটিক মাত্রা, প্রয়োগের পথ, ল্যাবরেটরি ফলো-আপ সময়সূচি এবং বিষক্রিয়া প্রতিরোধের সীমা সংক্ষেপে দেওয়া হলো [1, 2, 5, 8]:'
            ),
          ],
          bullets: [
            l(
              'Vitamin D3 (Cholecalciferol): Therapeutic Dose = 50,000 IU orally once weekly for 8 weeks (or 6,000 IU daily). In obesity (BMI ≥ 30), dose is 50,000 IU 2–3 times weekly. Monitoring: Remeasure serum 25(OH)D at 8–12 weeks. Transition to 1,500–2,000 IU/day maintenance once ≥ 30 ng/mL is achieved.',
              'ভিটামিন ডি৩ (Cholecalciferol): থেরাপিউটিক মাত্রা = প্রতি সপ্তাহে ৫০,০০০ IU মুখে টানা ৮ সপ্তাহ (বা দিনে ৬,০০০ IU)। স্থূলতায় সপ্তাহে ৫০,০০০ IU ২–৩ বার। ৮–১২ সপ্তাহ পর রক্ত পরীক্ষা করে মাত্রা ৩০ ng/mL ছাড়ালে দিনে ১৫০০–২০০০ IU মেইনটেন্যান্সে নামিয়ে আনা।',
            ),
            l(
              'Iron (Intravenous Ferric Carboxymaltose): Dose calculated via Ganzoni formula: Weight × (Target Hb – Actual Hb) × 2.4 + 500 mg stores. Infusion: Maximum 1,000 mg in 250 mL 0.9% NaCl over 15 minutes. Monitoring: Check CBC, reticulocyte count, and ferritin at 6 weeks post-infusion.',
              'আয়রন (শিরায় ফেরিক কার্বক্সিম্যালটোজ): গানজোনি সূত্রে হিসাবকৃত মাত্রা: ওজন × (কাঙ্ক্ষিত Hb – বর্তমান Hb) × ২.৪ + ৫০০ mg। একবারে সর্বোচ্চ ১,০০০ মিলিগ্রাম স্যালাইনের সাথে ১৫ মিনিটে প্রদান। ৬ সপ্তাহ পর হিমোগ্লোবিন ও ফেরিটিন পরীক্ষা।',
            ),
            l(
              'Iron (Oral Ferrous Sulfate): Therapeutic Dose = 60 to 100 mg elemental iron orally on ALTERNATE DAYS (every 48 hours) taken in the morning on an empty stomach with 500 mg Vitamin C. Avoid daily or multiple daily dosing.',
              'আয়রন (মুখে খাওয়ার ট্যাবলেট): থেরাপিউটিক মাত্রা = ৬০ থেকে ১০০ মিলিগ্রাম বিশুদ্ধ আয়রন একদিন পর পর সকালে খালি পেটে ৫০০ মিলিগ্রাম ভিটামিন সি সহ সেবন। দিনে একাধিকবার খাওয়া সম্পূর্ণ নিষিদ্ধ।',
            ),
            l(
              'Thiamine (Vitamin B1): Suspected/Established Wernicke Encephalopathy = 500 mg IV in 100 mL normal saline infused over 30 minutes, 3 times daily for 3 to 5 days, followed by 250 mg IV daily for 3 to 5 days, then oral maintenance 100 mg daily. Mandatory: Infuse BEFORE any dextrose.',
              'থায়ামিন (ভিটামিন বি১): ভার্নিকে এনসেফালোপ্যাথিতে = ৫০০ মিলিগ্রাম শিরায় দিনে ৩ বার টানা ৩–৫ দিন, এরপর ২৫০ মিলিগ্রাম দিনে ১ বার ৩–৫ দিন, এরপর মুখে দিনে ১০০ মিলিগ্রাম। যে কোনো গ্লুকোজ স্যালাইনের আগে প্রয়োগ বাধ্যতামূলক।',
            ),
            l(
              'Vitamin B12 (Cyanocobalamin / Hydroxocobalamin): Pernicious Anemia or Severe Neuropathy = 1,000 mcg intramuscularly (IM) daily for 7 days, then 1,000 mcg IM weekly for 4 weeks, followed by 1,000 mcg IM monthly for life (or high-dose oral 1,000–2,000 mcg daily). Mandatory: Verify B12 before giving folic acid.',
              'ভিটামিন বি১২: রক্তাল্পতা বা স্নায়ুর সমস্যায় = ১,০০০ মাইক্রোগ্রাম মাংসপেশিতে প্রতিদিন টানা ৭ দিন, এরপর প্রতি সপ্তাহে ১ বার ৪ সপ্তাহ, এরপর আজীবন মাসে ১ বার ইনজেকশন (বা মুখে দিনে ১০০০–২০০০ মাইক্রোগ্রাম)। ফলিক অ্যাসিডের আগে বি১২ নিশ্চিত করা বাধ্যতামূলক।',
            ),
            l(
              'Folic Acid (Vitamin B9): Therapeutic Dose = 1 to 5 mg orally daily for 1 to 4 months until complete hematological recovery occurs. Ensure dietary folate fortification.',
              'ফলিক অ্যাসিড (ভিটামিন বি৯): থেরাপিউটিক মাত্রা = দিনে ১ থেকে ৫ মিলিগ্রাম মুখে ১ থেকে ৪ মাস পর্যন্ত যতক্ষণ না রক্ত সম্পূর্ণ স্বাভাবিক হয়।',
            ),
            l(
              'Copper (Intravenous Copper Gluconate): In zinc-induced copper deficiency = 2 to 4 mg elemental copper IV daily for 5 to 7 days, transitioning to oral copper gluconate 2 mg daily. Immediately discontinue all exogenous zinc supplements.',
              'কপার: জিংকজনিত কপার ঘাটতিতে = দিনে ২ থেকে ৪ মিলিগ্রাম কপার শিরায় ৫–৭ দিন, এরপর মুখে দিনে ২ মিলিগ্রাম। অবিলম্বে সব জিংক সেবন চিরতরে বন্ধ করতে হবে।',
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Endocrine Society Vitamin D3 Protocol', '১. এন্ডোক্রাইন সোসাইটি ভিটামিন ডি৩ প্রোটোকল'), sectionId: 'sec-vitd-endocrine-protocol' },
      { id: 'toc-2', label: l('2. Ganzoni Intravenous Iron Deficit Formula', '২. গানজোনি সূত্রে শিরায় আয়রনের ঘাটতি'), sectionId: 'sec-ganzoni-iv-iron' },
      { id: 'toc-3', label: l('3. Hepcidin Kinetics & Alternate-Day Iron', '৩. হেপসিডিন গতিবিদ্যা ও একদিন পর পর আয়রন'), sectionId: 'sec-oral-iron-hepcidin' },
      { id: 'toc-4', label: l('4. Thiamine Molecular Cascade & Wernicke Rule', '৪. থায়ামিনের আণবিক গতি ও ভার্নিকে নিয়ম'), sectionId: 'sec-thiamine-wernicke-rule' },
      { id: 'toc-5', label: l('5. Folate Trap & Spinal Demyelination', '৫. ফোলেট ফাঁদ ও মেরুদণ্ডের ডিমায়েলিনেশন'), sectionId: 'sec-b12-folate-trap' },
      { id: 'toc-6', label: l('6. Zinc-Induced Copper Deficiency Trap', '৬. অতিরিক্ত জিংকজনিত কপার ঘাটতি ফাঁদ'), sectionId: 'sec-zinc-copper-antagonism' },
      { id: 'toc-7', label: l('7. Clinical Micronutrient Repletion Matrix', '৭. ক্লিনিক্যাল অনুপুষ্টি ঘাটতি পূরণ ছক'), sectionId: 'sec-repletion-matrix' },
    ],
    terms: [
      {
        term: l('Ganzoni Formula', 'গানজোনি সমীকরণ (Ganzoni Formula)'),
        definition: l(
          'The clinical equation calculating total elemental iron deficit: Body Weight (kg) × [Target Hb – Actual Hb (g/dL)] × 2.4 + 500 mg storage depot.',
          'শরীরে আয়রনের মোট ঘাটতি হিসাবের আন্তর্জাতিক সূত্র: ওজন (কেজি) × [কাঙ্ক্ষিত Hb – বর্তমান Hb] × ২.৪ + ৫০০ mg সঞ্চিত ভাণ্ডার।'
        ),
      },
      {
        term: l('Hepcidin', 'হেপসিডিন হরমোন (Hepcidin)'),
        definition: l(
          'The master iron regulatory hormone synthesized by the liver that binds to ferroportin, causing its internalization and blocking intestinal iron absorption for 24–48 hours.',
          'যকৃতে উৎপন্ন প্রধান হরমোন যা অন্ত্রের কোষে আয়রন পরিবহনকারী চ্যানেল বন্ধ করে ২৪ থেকে ৪৮ ঘণ্টা পর্যন্ত পরবর্তী আয়রন শোষণ আটকে দেয়।'
        ),
      },
      {
        term: l('Wernicke Encephalopathy', 'ভার্নিকে এনসেফালোপ্যাথি (Wernicke Encephalopathy)'),
        definition: l(
          'An acute, life-threatening neuropsychiatric syndrome caused by severe thiamine (B1) deficiency, characterized by confusion, nystagmus, and ataxia, triggered by carbohydrate loading without thiamine.',
          'তীব্র থায়ামিন ঘাটতির কারণে মস্তিষ্কের মেমিলারি বডি নষ্ট হয়ে সৃষ্ট জীবনঘাতী জরুরি অবস্থা; বিভ্রান্তি, চোখের কাঁপুনি ও ভারসাম্যহীনতা এর লক্ষণ।'
        ),
      },
      {
        term: l('Folate Trap', 'ফোলেট ফাঁদ (Folate Trap)'),
        definition: l(
          'The biochemical sequestration of folate as inactive 5-methyl-THF caused by Vitamin B12 deficiency; giving solitary folic acid cures the anemia while allowing irreversible spinal cord demyelination to proceed.',
          'ভিটামিন বি১২ এর অভাবে কোষে ফলিক অ্যাসিড নিষ্ক্রিয় রূপে আটকে যাওয়ার আণবিক ফাঁদ; একা ফলিক অ্যাসিড দিলে রক্ত ভালো হলেও মেরুদণ্ডের স্নায়ু চিরতরে ধ্বংস হয়ে যায়।'
        ),
      },
      {
        term: l('Metallothionein', 'মেটালোথাইয়োনিন (Metallothionein)'),
        definition: l(
          'An intracellular heavy-metal binding protein induced in enterocytes by excessive zinc that binds copper with 1,000-fold higher affinity, causing severe secondary copper deficiency and myeloneuropathy.',
          'অন্ত্রের কোষে অতিরিক্ত জিংকের কারণে উৎপন্ন প্রোটিন যা কপারকে শক্ত করে আটকে শরীর থেকে বের করে দিয়ে চরম কপার ঘাটতি ও পক্ষাঘাত সৃষ্টি করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Formulating Ganzoni IV Iron Deficit & High-Potency Vitamin D3 Therapy in Post-Bariatric Malabsorption',
          'বাস্তব কেস স্টাডি: গ্যাস্ট্রিক বাইপাসের রোগীর গানজোনি সূত্রে আয়রন ইনজেকশন ও ভিটামিন ডি৩ নির্ধারণ'
        ),
        steps: [
          l(
            'Step 1: Patient Presentation & Laboratory Profiling. A 42-year-old female who underwent Roux-en-Y gastric bypass 3 years ago presents with profound fatigue, severe exertional dyspnea, restless leg syndrome, and severe diffuse bone pain. Current weight = 70 kg, height = 165 cm. Laboratory results: Hemoglobin = 7.2 g/dL (Target Hb = 14.0 g/dL), MCV = 68 fL (microcytic), Serum Ferritin = 3 ng/mL (exhausted iron stores), Serum 25(OH)D = 11 ng/mL (severe vitamin D deficiency), Serum Calcium = 8.4 mg/dL. Oral ferrous sulfate caused severe nausea and intractable vomiting.',
            'ধাপ ১: রোগীর বিবরণ: ৩ বছর আগে গ্যাস্ট্রিক বাইপাস অস্ত্রোপচার করা ৪২ বছর বয়সী নারী (ওজন ৭০ কেজি, উচ্চতা ১৬৫ সেমি)। চরম দুর্বলতা, বুক ধড়ফড় এবং হাড়ের তীব্র ব্যথা। ল্যাব রিপোর্ট: হিমোগ্লোবিন ৭.২ g/dL (কাঙ্ক্ষিত ১৪.০ g/dL), MCV ৬৮ fL (ছোট লোহিত কণিকা), ফেরিটিন মাত্র ৩ ng/mL (আয়রনের ভাণ্ডার শূন্য), ভিটামিন ডি মাত্র ১১ ng/mL (চরম ঘাটতি)। মুখে আয়রন ট্যাবলেট খেলে তীব্র বমি হয়।'
          ),
          l(
            'Step 2: Calculate Total Elemental Iron Deficit via the Ganzoni Equation. Target Hemoglobin = 14.0 g/dL. Actual Hemoglobin = 7.2 g/dL. Hemoglobin Deficit = 14.0 – 7.2 = 6.8 g/dL. Total Iron Deficit (mg) = Body Weight (70 kg) × Hb Deficit (6.8 g/dL) × 2.4 + 500 mg storage depot = (70 × 6.8 × 2.4) + 500 = (476 × 2.4) + 500 = 1,142.4 + 500 = 1,642.4 mg elemental iron.',
            'ধাপ ২: গানজোনি সমীকরণে আয়রনের মোট ঘাটতি হিসাব: কাঙ্ক্ষিত হিমোগ্লোবিন = ১৪.০ g/dL। বর্তমান হিমোগ্লোবিন = ৭.২ g/dL। ঘাটতি = ১৪.০ – ৭.২ = ৬.৮ g/dL। মোট ঘাটতি = ৭০ কেজি × ৬.৮ × ২.৪ + ৫০০ mg সঞ্চিত ভাণ্ডার = ১,১৪২.৪ + ৫০০ = ১,৬৪২.৪ মিলিগ্রাম বিশুদ্ধ আয়রন।'
          ),
          l(
            'Step 3: Prescribe Modern Intravenous Iron Infusion Regimen. Because oral iron is impossible due to bypass anatomy and vomiting, prescribe Intravenous Ferric Carboxymaltose (FCM): Infusion 1 = 1,000 mg IV in 250 mL 0.9% NaCl over 15 minutes on Day 1. Infusion 2 = 750 mg IV on Day 8. Total administered iron = 1,750 mg, completely eradicating the 1,642 mg deficit and fully replenishing reticuloendothelial bone marrow stores.',
            'ধাপ ৩: শিরায় আয়রন প্রেসক্রিপশন: ফেরিক কার্বক্সিম্যালটোজ ইনজেকশন: ১ম দিনে ১,০০০ মিলিগ্রাম শিরায় স্যালাইনের সাথে ১৫ মিনিটে প্রদান; এবং ৮তম দিনে বাকি ৭৫০ মিলিগ্রাম প্রদান। মোট ১,৭৫০ মিলিগ্রাম আয়রন রোগীর সম্পূর্ণ ঘাটতি ও মজ্জার ভাণ্ডার পূরণ করবে।'
          ),
          l(
            'Step 4: Formulate the Endocrine Society Vitamin D3 Repletion Protocol. Serum 25(OH)D is 11 ng/mL (< 20 ng/mL = severe deficiency). Prescribe Cholecalciferol (Vitamin D3) 50,000 IU orally once weekly for 8 consecutive weeks. Pair with Calcium Citrate 1,000 mg daily in divided doses (calcium citrate does not require gastric acid for absorption, unlike calcium carbonate which fails in bariatric patients).',
            'ধাপ ৪: ভিটামিন ডি৩ উচ্চমাত্রার চিকিৎসা: চরম ঘাটতি পূরণে এন্ডোক্রাইন প্রোটোকল অনুযায়ী প্রতি সপ্তাহে ৫০,০০০ IU ভিটামিন ডি৩ ক্যাপসুল টানা ৮ সপ্তাহ সেবন। সাথে পাকস্থলীর অ্যাসিড ছাড়া শোষিত হতে পারে এমন ক্যালসিয়াম সাইট্রেট দিনে ১,০০০ মিলিগ্রাম দেওয়া।'
          ),
          l(
            'Step 5: Follow-Up Monitoring and Transition to Lifelong Maintenance. Order repeat Complete Blood Count (CBC) and serum ferritin at 6 weeks post-infusion; check serum 25(OH)D and calcium at 8 weeks. Once 25(OH)D reaches ≥ 30 ng/mL, transition to lifelong maintenance therapy of 2,000 IU/day Vitamin D3.',
            'ধাপ ৫: ফলো-আপ ও আজীবন রক্ষণাবেক্ষণ: ইনজেকশনের ৬ সপ্তাহ পর হিমোগ্লোবিন ও ফেরিটিন পরীক্ষা এবং ৮ সপ্তাহ পর ভিটামিন ডি পরীক্ষা। মান ৩০ ng/mL ছাড়ালে আজীবন দিনে ২,০০০ IU মেইনটেন্যান্স ডোজ চালিয়ে যাওয়া।'
          ),
        ],
        conclusion: l(
          'Calculating exact iron deficits via the Ganzoni formula and deploying the Endocrine Society 50,000 IU Vitamin D3 protocol bypassed gastrointestinal anatomical malabsorption, fully restoring hemoglobin to 13.8 g/dL, rebuilding ferritin stores, and eliminating bone pain.',
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
          'Ingesting an oral iron dose triggers a sharp surge in the hepatic hormone hepcidin that persists for 24 to 48 hours. Elevated hepcidin internalizes and degrades ferroportin channels on duodenal enterocytes, locking the cellular exit gates and blocking further iron absorption. If iron is ingested daily or multiple times per day, hepcidin remains chronically elevated, dropping fractional absorption below 5% while unabsorbed iron irritates the mucosal brush border and causes severe constipation. Taking iron on alternate days allows hepcidin to return to baseline, doubling fractional absorption with virtually zero gastrointestinal adverse events.',
          'একবার আয়রন ট্যাবলেট খেলে যকৃতে হেপসিডিন হরমোন হঠাৎ অনেক বেড়ে যায় এবং তা ২৪ থেকে ৪৮ ঘণ্টা পর্যন্ত রক্তে বেশি থাকে। হেপসিডিন অন্ত্রের প্রোটিন চ্যানেল বন্ধ করে পরবর্তী আয়রন শোষণকে আটকে দেয়। তাই প্রতিদিন বা দিনে তিনবার আয়রন খেলে কোনো আয়রনই শোষিত হয় না, বরং পেটে জমে গ্যাস ও কোষ্ঠকাঠিন্য বাড়ায়। কিন্তু একদিন পর পর খেলে হেপসিডিন স্বাভাবিক হয়ে যায়, যার ফলে শরীর দ্বিগুণ আয়রন গ্রহণ করতে পারে এবং পেটের কোনো কষ্ট হয় না।'
        ),
      },
      {
        question: l(
          'Why does administering pharmacological folic acid without Vitamin B12 carry catastrophic neurological risks in macrocytic anemia?',
          'ম্যাক্রোসাইটিক রক্তাল্পতায় ভিটামিন বি১২ না দিয়ে একা উচ্চমাত্রার ফলিক অ্যাসিড দিলে কেন মারাত্মক স্নায়বিক ক্ষতির ঝুঁকি থাকে?'
        ),
        answer: l(
          'High doses of pharmacological folic acid bypass the "Folate Trap" by non-enzymatic diffusion, replenishing tetrahydrofolate and thymidylate synthesis. The bone marrow begins producing normal red blood cells, completely curing the hematological anemia and normalizing the blood count. However, the underlying B12 deficiency remains unaddressed. Without B12, myelin basic protein cannot be methylated, and toxic methylmalonic acid (MMA) accumulates, causing rapid, irreversible demyelination of the posterior and lateral columns of the spinal cord (Subacute Combined Degeneration). The patient progresses silently to permanent spastic paraparesis, sensory ataxia, and permanent wheelchair dependence.',
          'উচ্চমাত্রার ফলিক অ্যাসিড রক্তাল্পতাকে সাময়িকভাবে সারিয়ে দিতে পারে এবং রক্তে লোহিত কণিকার আকার স্বাভাবিক করে ফেলে। কিন্তু এটি ভেতরে থাকা আসল বি১২ ঘাটতি দূর করতে পারে না। বি১২ না থাকার কারণে মেরুদণ্ডের স্নায়ুর মায়েলিন পর্দা অলক্ষ্যে ছিঁড়ে ধ্বংস হতে থাকে। রক্তের রিপোর্ট স্বাভাবিক দেখিয়ে ফলিক অ্যাসিড রোগীকে বিভ্রান্ত করে, অথচ ভেতরের স্নায়ু ধ্বংস হয়ে রোগী সম্পূর্ণ পক্ষাঘাতগ্রস্ত (Paraplegic) হয়ে চিরতরে পঙ্গু হয়ে যেতে পারে।'
        ),
      },
      {
        question: l(
          'Why does chronic high-dose zinc supplementation cause secondary copper deficiency and severe myeloneuropathy?',
          'অতিরিক্ত জিংক খেলে কেন শরীরে কপারের শূন্যতা তৈরি হয় এবং স্নায়ুর পক্ষাঘাত দেখা দেয়?'
        ),
        answer: l(
          'Chronic high-dose zinc (> 40–50 mg/day) strongly induces transcription of metallothionein inside duodenal enterocytes. Metallothionein has a binding affinity for copper that is 1,000 times higher than its affinity for zinc. It irreversibly chelates dietary copper inside the enterocyte, preventing its export into portal blood. When the enterocytes are shed into the stool every 3 to 5 days, the trapped copper is excreted in feces. This causes profound systemic copper depletion, paralyzing copper-dependent ferroxidases (ceruloplasmin and hephaestin) and causing severe microcytic anemia, neutropenia, and an ascending sensory ataxia that precisely mimics B12 deficiency.',
          'অতিরিক্ত জিংক খেলে অন্ত্রের কোষে মেটালোথাইয়োনিন নামের প্রোটিন তৈরি হয়, যা জিংকের চেয়ে কপারকে ১,০০০ গুণ শক্তিতে আটকে ফেলে। অন্ত্রের কোষ ৩–৫ দিন পর ঝরে পড়লে আটকা পড়া সব কপার মলের সাথে বের হয়ে যায়। শরীরে কপার শূন্য হয়ে যাওয়ায় রক্ত তৈরি বন্ধ হয়ে যায় এবং হুবহু বি১২ ঘাটতির মতো মারাত্মক স্নায়ুর পক্ষাঘাত ঘটে।'
        ),
      },
    ],
  },
}
