import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics16References: LessonReference[] = [
  {
    id: 'ref-ada-soc-2024',
    authors: 'American Diabetes Association Professional Practice Committee',
    title: 'Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes—2024',
    organization: 'Diabetes Care',
    year: 2024,
    url: 'https://diabetesjournals.org/care/article/47/Supplement_1/S77/153954/5-Facilitating-Positive-Health-Behaviors-and-Well',
    doi: '10.2337/dc24-S005',
  },
  {
    id: 'ref-lean-direct-2018',
    authors: 'Lean ME, Leslie WS, Barnes AC, Brosnahan N, Thom G, et al.',
    title: 'Primary Care-Led Weight Management for Remission of Type 2 Diabetes (DiRECT): An Open-Label, Cluster-Randomised Trial',
    organization: 'The Lancet',
    year: 2018,
    url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)33102-1/fulltext',
    doi: '10.1016/S0140-6736(17)33102-1',
  },
  {
    id: 'ref-taylor-twincycle-2018',
    authors: 'Taylor R, Al-Mrabeh A, Zhyzhneuskaya S, Peters C, Barnes AC, et al.',
    title: 'Remission of Human Type 2 Diabetes Requires Decrease in Liver and Pancreas Fat Content but Is Dependent upon Capacity for beta-Cell Recovery',
    organization: 'Cell Metabolism',
    year: 2018,
    url: 'https://www.cell.com/cell-metabolism/fulltext/S1550-4131(18)30446-7',
    doi: '10.1016/j.cmet.2018.07.003',
  },
  {
    id: 'ref-acog-gdm-2018',
    authors: 'American College of Obstetricians and Gynecologists',
    title: 'ACOG Practice Bulletin No. 190: Gestational Diabetes Mellitus',
    organization: 'Obstetrics & Gynecology',
    year: 2018,
    url: 'https://journals.lww.com/greenjournal/fulltext/2018/02000/acog_practice_bulletin_no__190__gestational.44.aspx',
    doi: '10.1097/AOG.0000000000002501',
  },
  {
    id: 'ref-poitout-glucolipo-2010',
    authors: 'Poitout V, Amyot J, Semache M, Zarrouki B, Hagman D, Fontes G',
    title: 'Glucolipotoxicity of the Pancreatic beta-Cell',
    organization: 'Biochimica et Biophysica Acta',
    year: 2010,
    url: 'https://www.sciencedirect.com/science/article/pii/S138819810900139X',
    doi: '10.1016/j.bbalip.2009.08.006',
  },
  {
    id: 'ref-cryer-hypo-2003',
    authors: 'Cryer PE, Davis SN, Shamoon H',
    title: 'Hypoglycemia in Diabetes',
    organization: 'Diabetes Care',
    year: 2003,
    url: 'https://diabetesjournals.org/care/article/26/6/1902/21799/Hypoglycemia-in-Diabetes',
    doi: '10.2337/diacare.26.6.1902',
  },
]

export const dietetics16Lesson: LessonTopic = {
  id: 'topic.dietetics.diabetes-mnt',
  slug: 'diabetes-mellitus-t1d-t2d-gestational-mnt',
  version: 1,
  updatedAt: '2026-03-31',
  title: l(
    '16 · Medical Nutrition Therapy for Diabetes Mellitus: T1D, T2D & Gestational Hyperglycemia',
    '১৬ · ডায়াবেটিসের মেডিকেল নিউট্রিশন থেরাপি: টাইপ ১, টাইপ ২ এবং গর্ভকালীন ডায়াবেটিস'
  ),
  summary: l(
    'Master evidence-based medical nutrition therapy across Type 1, Type 2, and Gestational Diabetes Mellitus. Discover the pathophysiological mechanisms of glucolipotoxicity, Roy Taylor’s Twin Cycle Hypothesis, dietary remission protocols from the DiRECT trial, pregnancy-specific carbohydrate thresholds, and life-saving hypoglycemia resuscitation without fat interference.',
    'টাইপ ১, টাইপ ২ এবং গর্ভকালীন ডায়াবেটিসের প্রমাণভিত্তিক মেডিকেল নিউট্রিশন থেরাপির গভীর পাঠ। গ্লুকোলিপোটক্সিসিটি, রয় টেলরের টুইন সাইকেল থিওরি, DiRECT ট্রায়ালের মাধ্যমে ডায়াবেটিস রিমিশন বা নিরাময়ের কৌশল, গর্ভাবস্থায় শর্করার নিরাপদ সীমা এবং হাইপোগ্লাইসেমিয়ার জরুরি ব্যবস্থাপনা জানুন সহজ প্রাঞ্জল বাংলায়।'
  ),
  subject: 'dietetics',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-03-31',
  objectives: [
    l(
      'Distinguish the fundamental pathophysiological differences and nutritional priorities between T1D (absolute insulin deficiency), T2D (insulin resistance and beta-cell dedifferentiation), and GDM (placental hormone antagonism).',
      'টাইপ ১ (ইনসুলিনের পূর্ণ অভাব), টাইপ ২ (ইনসুলিন রেজিস্ট্যান্স ও কোষীয় ক্লান্তি) এবং গর্ভকালীন ডায়াবেটিসের (প্ল্যাসেন্টার হরমোনজনিত বাধা) রোগতাত্ত্বিক পার্থক্য ও খাদ্য ব্যবস্থাপনার মূলনীতি ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Execute the clinical Rule of 15 for acute hypoglycemia resuscitation, and articulate why dietary fat (such as chocolate) is strictly contraindicated during a glycemic crash.',
      'হঠাৎ ব্লাড সুগার আশঙ্কাজনকভাবে কমে গেলে (হাইপোগ্লাইসেমিয়া) ১৫-র জীবনরক্ষাকারী নিয়ম প্রয়োগ করা এবং চকলেট বা ফ্যাটযুক্ত মিষ্টি কেন খাওয়া নিষিদ্ধ তা বৈজ্ঞানিকভাবে প্রমাণ করা।'
    ),
    l(
      'Apply ADA evidence-based macronutrient distributions and calculate the therapeutic energy deficit required for hepatic/pancreatic steatosis clearance and T2D remission based on the DiRECT trial.',
      'আমেরিকান ডায়াবেটিস অ্যাসোসিয়েশনের পুষ্টির অনুপাত প্রয়োগ করা এবং DiRECT ট্রায়ালের ভিত্তিতে লিভার ও অগ্ন্যাশয়ের চর্বি দূর করে টাইপ ২ ডায়াবেটিস রিমিশনের ক্যালোরি হিসাব করা।'
    ),
    l(
      'Formulate a pregnancy-specific meal architecture for Gestational Diabetes meeting tight glycemic targets (fasting <= 95 mg/dL, 1-hour <= 140 mg/dL) while protecting the 175 g/day carbohydrate safety floor to prevent ketonemia.',
      'গর্ভকালীন ডায়াবেটিসে নিরাপদ ব্লাড সুগার (খালি পেটে <= ৯৫, খাওয়ার ১ ঘণ্টা পর <= ১৪০ মিগ্রা/ডেসিলিটার) নিশ্চিত করতে এবং কিটোসিস এড়াতে ন্যূনতম ১৭৫ গ্রাম শর্করা সমন্বিত সঠিক খাদ্যতালিকা তৈরি করা।'
    ),
  ],
  prerequisiteIds: ['topic.dietetics.carb-counting', 'topic.dietetics.glycemic-index-load'],
  relatedTopicIds: ['topic.dietetics.meal-frequency-circadian', 'topic.dietetics.bengali-exchanges'],
  references: dietetics16References,
  evidenceBySection: {
    'foundation-t1d-t2d-gdm-roots': ['ref-ada-soc-2024'],
    'foundation-factory-locks-analogy': ['ref-ada-soc-2024', 'ref-poitout-glucolipo-2010'],
    'foundation-plate-method-practical': ['ref-ada-soc-2024'],
    'foundation-hypoglycemia-rule15': ['ref-cryer-hypo-2003'],
    'academic-ada-macronutrient-architecture': ['ref-ada-soc-2024'],
    'academic-direct-trial-remission': ['ref-lean-direct-2018', 'ref-taylor-twincycle-2018'],
    'academic-gdm-targets-ketonemia': ['ref-acog-gdm-2018', 'ref-ada-soc-2024'],
    'academic-exercise-hypoglycemia-mechanics': ['ref-ada-soc-2024', 'ref-cryer-hypo-2003'],
    'advanced-glucolipotoxicity-er-stress': ['ref-poitout-glucolipo-2010'],
    'advanced-twin-cycle-hypothesis': ['ref-taylor-twincycle-2018'],
    'advanced-betacell-dedifferentiation': ['ref-taylor-twincycle-2018', 'ref-poitout-glucolipo-2010'],
    'advanced-gdm-dawn-case-study': ['ref-acog-gdm-2018', 'ref-ada-soc-2024'],
  },
  diagram: {
    accessibleDescription: l(
      'Flowchart contrasting the pathophysiological pathways of Type 1 Diabetes (autoimmune destruction), Type 2 Diabetes (twin cycle of hepatic/pancreatic fat accumulation leading to dedifferentiation), and Gestational Diabetes (placental lactogen antagonism), culminating in tailored Medical Nutrition Therapy interventions.',
      'টাইপ ১ ডায়াবেটিস (অটোরোগ প্রতিরোধমূলক ধ্বংস), টাইপ ২ ডায়াবেটিস (লিভার ও অগ্ন্যাশয়ে চর্বি জমার দ্বৈত চক্র) এবং গর্ভকালীন ডায়াবেটিসের (প্ল্যাসেন্টার হরমোনজনিত বাধা) রোগতাত্ত্বিক প্রবাহচিত্র।'
    ),
    steps: [
      l(
        'Step 1: Type 1 Diabetes Mellitus. Autoimmune T-cell destruction of beta cells leads to zero endogenous insulin, requiring exogenous insulin boluses precisely matched to carbohydrate grams and Warsaw fat-protein units.',
        'ধাপ ১: টাইপ ১ ডায়াবেটিস মেলিটাস। অটোরোগ প্রতিরোধ ব্যবস্থার দ্বারা বিটা কোষ ধ্বংস হওয়ায় দেহে ইনসুলিন তৈরি সম্পূর্ণ বন্ধ হয়ে যায়; খাবারের শর্করা ও প্রোটিন-ফ্যাটের পরিমাণের সাথে মেপে মেপে ইনসুলিন ইনজেকশন নেওয়া বাধ্যতামূলক।'
      ),
      l(
        'Step 2: Type 2 Diabetes & The Twin Cycles. Chronic caloric surplus drives hepatic de novo lipogenesis, liver steatosis, and VLDL spillover into the pancreas, causing beta-cell dedifferentiation and insulin resistance, remediable via 10-15% rapid weight loss.',
        'ধাপ ২: টাইপ ২ ডায়াবেটিস ও লিভার-অগ্ন্যাশয়ের দ্বৈত চক্র। অতিরিক্ত ক্যালোরি গ্রহণ লিভারে চর্বি জমায় এবং অগ্ন্যাশয়ে বিষাক্ত চর্বি ছড়িয়ে বিটা কোষকে নিষ্ক্রিয় করে দেয়, যা ১০-১৫% ওজন কমিয়ে পুনরায় নিরাময় করা যায়।'
      ),
      l(
        'Step 3: Gestational Diabetes Mellitus (GDM). Placental hormones induce insulin resistance to route glucose to the fetus; when maternal beta cells fail to compensate, hyperglycemia occurs, requiring carbohydrate redistribution with a minimum 175 g/day floor.',
        'ধাপ ৩: গর্ভকালীন ডায়াবেটিস (GDM)। প্লাসেন্টার হরমোনের কারণে মায়ের শরীরে ইনসুলিনের কার্যকারিতা কমে যায়; অগ্ন্যাশয় বাড়তি ইনসুলিন দিতে না পারলে রক্তে সুগার বাড়ে, যা এড়াতে ন্যূনতম ১৭৫ গ্রাম শর্করা বজায় রেখে খাবার ভাগ করে খাওয়া জরুরি।'
      ),
      l(
        'Step 4: Tailored MNT Interventions. T1D focuses on precise carbohydrate counting and ICR titration; T2D prioritizes hypocaloric organ fat clearance and high-viscosity fiber; GDM enforces tight targets with morning carb restriction and bedtime complex snacks.',
        'ধাপ ৪: চিকিৎসাভিত্তিক পুষ্টি পরিকল্পনা। টাইপ ১-এ সুনির্দিষ্ট শর্করা গণনা; টাইপ ২-এ অঙ্গপ্রত্যঙ্গের চর্বি গলানোর নিয়ন্ত্রিত ক্যালোরি ও উচ্চ আঁশ; এবং গর্ভকালীন সময়ে সকালের শর্করা নিয়ন্ত্রণ ও রাতে জটিল শর্করার হালকা নাশতা।'
      ),
    ],
  },
  assessment: {
    question: l(
      'During an acute hypoglycemic episode (blood glucose 54 mg/dL), a patient attempts to treat their symptoms by eating two chocolate candy bars. Why is this action clinically hazardous and strictly contraindicated?',
      'হঠাৎ ব্লাড সুগার ৫৪ মিগ্রা/ডেসিলিটারে নেমে গেলে (তীব্র হাইপোগ্লাইসেমিয়া) এক রোগী দ্রুত দুটি চকলেট বার খেয়ে ফেললেন। চিকিৎসাবিজ্ঞানের দৃষ্টিতে এই কাজটি কেন মারাত্মক ভুল এবং নিষিদ্ধ?'
    ),
    options: [
      l(
        'Chocolate has zero sugar and only contains cocoa butter.',
        'চকলেটে কোনো চিনি থাকে না, কেবল কোকো মাখন থাকে।'
      ),
      l(
        'The high fat content of chocolate stimulates cholecystokinin (CCK), which dramatically slows gastric emptying and delays glucose absorption, prolonging dangerous neuroglycopenia.',
        'চকলেটে প্রচুর ফ্যাট (চর্বি) থাকে যা পিত্তথলির হরমোন (CCK) ক্ষরণ করে পাকস্থলী খালি হওয়ার গতি শ্লথ করে দেয়; ফলে চিনি রক্তে মিশতে দীর্ঘ সময় লাগে এবং রোগী অজ্ঞান হওয়ার ঝুঁকিতে পড়েন।'
      ),
      l(
        'Chocolate immediately triggers severe ketoacidosis within 5 minutes.',
        'চকলেট খাওয়ার ৫ মিনিটের মধ্যে রক্তে মারাত্মক কিটোঅ্যাসিডোসিস তৈরি হয়।'
      ),
      l(
        'The caffeine in chocolate inhibits peripheral insulin receptors permanently.',
        'চকলেটের ক্যাফেইন শরীরের ইনসুলিন রিসেপ্টরগুলোকে স্থায়ীভাবে অকেজো করে দেয়।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'Under the clinical Rule of 15 [6], acute hypoglycemia must be resuscitated exclusively with 15 grams of rapid-acting, pure simple carbohydrates devoid of fat or protein (e.g., 4 glucose tablets or 1/2 cup fruit juice). High-fat treats like chocolate, pastries, or ice cream delay gastric emptying via CCK-mediated feedback, keeping the patient in dangerous neuroglycopenia for an extended duration.',
      'হাইপোগ্লাইসেমিয়ার চিকিৎসায় আন্তর্জাতিকভাবে স্বীকৃত ১৫-র নিয়ম [6] অনুযায়ী, কেবল ফ্যাটমুক্ত দ্রুত শোষণযোগ্য ১৫ গ্রাম সরল চিনি (যেমন ৪টি গ্লুকোজ ট্যাবলেট বা আধা কাপ ফলের রস) খেতে হয়। চকলেটে থাকা প্রচুর ফ্যাট পাকস্থলীর খাদ্য নিষ্কাশন আটকে রাখে, ফলে মস্তিষ্ক দ্রুত গ্লুকোজ পায় না এবং রোগী সংজ্ঞাহীন বা কোমায় চলে যেতে পারেন।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'মৌলিক ভিত্তি'),
      sections: [
        {
          id: 'foundation-t1d-t2d-gdm-roots',
          heading: l(
            'The Three Faces of Diabetes: Understanding the Basics Without Fear',
            'ডায়াবেটিসের তিনটি রূপ: ভয় কাটিয়ে সহজ করে বোঝা'
          ),
          paragraphs: [
            l(
              'Diabetes is not a single disease; it is a spectrum of metabolic conditions where the body either cannot manufacture insulin, cannot effectively use the insulin it makes, or faces temporary hormonal resistance during pregnancy [1]. Glucose is the primary fuel for our cells, but it cannot enter muscle or adipose cells on its own—it requires insulin to open the biological cellular gateways.',
              'ডায়াবেটিস কোনো একক রোগ নয়; এটি শরীরের বিপাকক্রিয়ার এমন একটি অবস্থা যেখানে হয় অগ্ন্যাশয় ইনসুলিন তৈরি করতে পারে না, নয়তো তৈরি হওয়া ইনসুলিন কোষে কাজ করতে পারে না, অথবা গর্ভাবস্থায় হরমোনের কারণে সাময়িক বিঘ্ন ঘটে [1]। চিনি বা গ্লুকোজ হলো আমাদের শরীরের কোষের প্রধান জ্বালানি। কিন্তু ইনসুলিনের সাহায্য ছাড়া রক্ত থেকে এই গ্লুকোজ মাংসপেশি বা চর্বি কোষে প্রবেশ করতে পারে না।'
            ),
            l(
              'Understanding which type of diabetes a person lives with is the absolute prerequisite for safe medical nutrition therapy (MNT). A diet plan designed for Type 2 diabetes could prove disastrous if applied without precise insulin matching in Type 1 diabetes, while an aggressive low-carbohydrate regimen in gestational diabetes can harm the developing fetus [1, 4].',
              'একজন মানুষের ঠিক কোন ধরণের ডায়াবেটিস আছে তা না জেনে কোনো ডায়েট চার্ট তৈরি করা অসম্ভব ও বিপজ্জনক। টাইপ ২ ডায়াবেটিসের রোগীদের জন্য ক্যালোরি কমানোর ডায়েট যদি টাইপ ১ ডায়াবেটিসের রোগীর ওপর ইনসুলিন হিসাব না করে চাপিয়ে দেওয়া হয়, তবে তা প্রাণঘাতী হতে পারে। একইভাবে গর্ভকালীন ডায়াবেটিসে হুট করে শর্করা একদম বন্ধ করে দিলে গর্ভস্থ সন্তানের মস্তিষ্কের বিকাশ বাধাগ্রস্ত হয় [1, 4]।'
            ),
          ],
          bullets: [
            l(
              'Type 1 Diabetes Mellitus (T1D): An autoimmune condition where the body’s own immune defense mistakenly destroys the insulin-producing beta cells in the pancreas. Insulin production drops to absolute zero. The nutritional cornerstone is matching injected insulin precisely to the food eaten [1].',
              'টাইপ ১ ডায়াবেটিস (T1D): একটি স্বতঃঅনাক্রম্য (autoimmune) রোগ, যেখানে শরীরের রোগ প্রতিরোধ ব্যবস্থা ভুলবশত অগ্ন্যাশয়ের ইনসুলিন তৈরিকারী বিটা কোষগুলোকে পুরোপুরি ধ্বংস করে ফেলে। শরীরে ইনসুলিন তৈরি শূন্য হয়ে যায়। এখানে খাদ্যের প্রধান কাজ হলো খাবারের শর্করার সাথে ইনসুলিন ইনজেকশনের সঠিক সমন্বয় করা [1]।'
            ),
            l(
              'Type 2 Diabetes Mellitus (T2D): Characterized by insulin resistance combined with progressive exhaustion of beta cells. The pancreas produces insulin, but the liver and muscle cells are resistant to its message due to excess organ fat. The nutritional focus is moderate weight reduction, improving insulin sensitivity, and choosing low-glycemic foods [1, 2].',
              'টাইপ ২ ডায়াবেটিস (T2D): এখানে অগ্ন্যাশয় ইনসুলিন তৈরি করে ঠিকই, কিন্তু অতিরিক্ত চর্বির কারণে লিভার ও পেশির কোষগুলো ইনসুলিনের সংকেত গ্রহণ করতে পারে না (ইনসুলিন রেজিস্ট্যান্স)। খাদ্যের প্রধান লক্ষ্য হলো অতিরিক্ত চর্বি কমিয়ে কোষের সংবেদনশীলতা ফিরিয়ে আনা [1, 2]।'
            ),
            l(
              'Gestational Diabetes Mellitus (GDM): High blood glucose that is first diagnosed during pregnancy, triggered by placental hormones that block maternal insulin action. The dietary priority is providing enough energy and nutrients for fetal growth while strictly preventing maternal blood sugar spikes [4].',
              'গর্ভকালীন ডায়াবেটিস (GDM): গর্ভাবস্থায় প্লাসেন্টা বা গর্ভফুল থেকে নিঃসৃত হরমোনের কারণে মায়ের শরীরে ইনসুলিনের কাজে সাময়িক বাধা তৈরি হয়। খাদ্যের উদ্দেশ্য হলো গর্ভের শিশুর সুষম বৃদ্ধি নিশ্চিত করার পাশাপাশি মায়ের রক্তে সুগার কঠোর নিয়ন্ত্রণে রাখা [4]।'
            ),
          ],
        },
        {
          id: 'foundation-factory-locks-analogy',
          heading: l(
            'The Key Factory and Jammed Locks: An Everyday Analogy',
            'সহজ উপমা: চাবির কারখানা এবং তেল চিটচিটে তালা'
          ),
          paragraphs: [
            l(
              'To picture what happens inside the body, imagine that every cell in your muscles and tissues is a well-secured building. Blood sugar (glucose) is the fuel truck waiting outside on the street. The cell door has a specialized lock, and insulin is the precise brass key manufactured by the pancreas [1].',
              'বিষয়টি সহজে বুঝতে একটি দৃশ্য কল্পনা করুন। আমাদের শরীরের প্রতিটি পেশিকোষ যেন একটি সুরম্য ভবন, আর রক্তে ভাসমান গ্লুকোজ হলো ভবনের বাইরে দাঁড়িয়ে থাকা জ্বালানি বোঝাই ট্রাক। ভবনের দরজায় একটি বিশেষ তালা লাগানো আছে, আর অগ্ন্যাশয় তৈরি করে সেই তালা খোলার বিশেষ পিতলের চাবি—যার নাম ইনসুলিন [1]।'
            ),
            l(
              'In Type 1 Diabetes, the key factory has been completely demolished. The doors remain locked, the fuel trucks pile up in hazardous traffic jams on the highway (severe hyperglycemia), and the cells inside starve. The only remedy is importing external keys (injected insulin) in exact proportion to the fuel arriving [1].',
              'টাইপ ১ ডায়াবেটিসে চাবির কারখানাই ধ্বংস হয়ে গেছে। ফলে সব দরজা বন্ধ থাকে, জ্বালানি বোঝাই ট্রাকগুলো রাস্তায় আটকে ভয়াবহ ট্রাফিক জ্যাম তৈরি করে (রক্তে অস্বাভাবিক সুগার), অথচ ভবনের ভেতরের কর্মীরা না খেয়ে থাকে। এখানে বাইরে থেকে মেপে মেপে চাবি (ইনসুলিন ইনজেকশন) পাঠানোই একমাত্র সমাধান [1]।'
            ),
            l(
              'In Type 2 Diabetes, the factory is working overtime and making dozens of keys, but the locks on the cell doors are clogged with thick grease and sludge (ectopic cellular fat). The key goes into the hole, but it cannot turn [5]. The solution is not merely demanding more keys—it is scrubbing away the grease through healthy diet and weight loss so the existing keys turn smoothly again [2, 3].',
              'টাইপ ২ ডায়াবেটিসে কারখানাটি দিনরাত পরিশ্রম করে প্রচুর চাবি তৈরি করছে, কিন্তু দরজার তালার ফুটো পুরোনো তেল ও ময়লায় (কোষে অতিরিক্ত চর্বি) জ্যাম হয়ে গেছে। ফলে চাবি ঢুকলেও তালা ঘোরে না [5]। সমাধান কেবল আরও চাবি গুঁজে দেওয়া নয়—বরং সঠিক খাবার ও মেদ ঝরিয়ে তালার ভেতর থেকে চর্বির জঞ্জাল পরিষ্কার করা, যাতে পুরোনো চাবিতেই আবার তালা খোলে [2, 3]।'
            ),
            l(
              'In Gestational Diabetes, the placenta acts like a temporary tenant that installs child-safety shields over some locks to divert more fuel toward the nursery (the baby). If the mother’s pancreas cannot easily double its key production, glucose spills into the blood [4].',
              'আর গর্ভকালীন ডায়াবেটিসে গর্ভফুলটি যেন সাময়িকভাবে তালার ওপর একটি সুরক্ষা ঢাকনা বসিয়ে দেয়, যাতে কিছু জ্বালানি সরাসরি অনাগত শিশুর কাছে চলে যায়। এ সময় মায়ের অগ্ন্যাশয় যদি দ্বিগুণ চাবি তৈরি করতে না পারে, তবেই রক্তে অতিরিক্ত সুগার জমতে থাকে [4]।'
            ),
          ],
        },
        {
          id: 'foundation-plate-method-practical',
          heading: l(
            'The Diabetes Plate Method: Visual Portioning Without Math',
            'ডায়াবেটিস প্লেট পদ্ধতি: কোনো হিসাব ছাড়াই সহজ খাবারের থালা'
          ),
          paragraphs: [
            l(
              'For many individuals newly diagnosed with diabetes, measuring every gram of carbohydrate on a digital kitchen scale feels overwhelming. The Diabetes Plate Method, championed by the American Diabetes Association, provides a simple, visual, and highly effective framework for daily meals using a standard 9-inch dinner plate [1].',
              'ডায়াবেটিস ধরা পড়ার পর প্রতি বেলা খাবারের শর্করা গ্রাম মেপে খাওয়া অনেকের কাছেই কঠিন মনে হতে পারে। আমেরিকান ডায়াবেটিস অ্যাসোসিয়েশন (ADA) এজন্য একটি চমৎকার ও সহজ নিয়ম চালু করেছে, যার নাম ‘ডায়াবেটিস প্লেট মেথড’। একটি আদর্শ ৯ ইঞ্চি গোল প্লেটকে চোখের দেখায় ভাগ করেই পুরো খাবারের ভারসাম্য রক্ষা করা যায় [1]।'
            ),
            l(
              'This simple visual discipline automatically caps high-glycemic carbohydrates to approximately 30 to 45 grams per meal, dampens postprandial glycemic spikes with viscous plant fiber, and supplies adequate protein to promote satiety without raising blood glucose [1].',
              'এই সহজ নিয়মে খাবার সাজালে প্রতি বেলা খাবারে শর্করার পরিমাণ নিজে থেকেই ৩০ থেকে ৪৫ গ্রামের মধ্যে সীমিত থাকে। শাকসবজির প্রচুর আঁশ রক্তে চিনির দ্রুত প্রবেশ আটকে দেয় এবং পর্যাপ্ত প্রোটিন দীর্ঘক্ষণ পেট ভরা রাখে [1]।'
            ),
          ],
          bullets: [
            l(
              'Fill One-Half (50%) with Non-Starchy Vegetables: Spinach, cauliflower, cabbage, cucumbers, okra (ladyfingers), broccoli, bottle gourd, and tomatoes. These foods are packed with fiber, vitamins, and minerals with virtually negligible impact on blood sugar.',
              'থালাটির অর্ধেক (৫০%) অংশ নন-স্টার্চি শাকসবজি দিয়ে ভরুন: পালং শাক, লাল শাক, ফুলকপি, বাঁধাকপি, শসা, ঢ্যাঁড়শ, লাউ, টমেটো বা ব্রকলি। এগুলোতে প্রচুর আঁশ ও ভিটামিন থাকে, যা রক্তে সুগার একেবারেই বাড়ায় না।'
            ),
            l(
              'Fill One-Quarter (25%) with Lean Protein: Skinless chicken breast, fish (rohu, katla, hilsa, salmon), eggs, boiled lentils, or tofu. Protein stimulates satiety hormones and does not convert directly into immediate post-meal blood glucose.',
              'থালাটির এক-চতুর্থাংশ (২৫%) লিন প্রোটিন রাখুন: চামড়া ছাড়া মুরগির মাংস, রুই-কাতলা-ইলিশ মাছ, ডিমের সাদা বা গোটা ডিম, ঘন ডাল বা টোফু। প্রোটিন পেট ভরিয়ে রাখে এবং খাবারের পর হঠাৎ সুগার বাড়ায় না।'
            ),
            l(
              'Fill One-Quarter (25%) with Carbohydrate Foods: Brown rice, unpolished parboiled rice, whole wheat roti, oats, sweet potato, or legumes. Keeping carbohydrates confined to one-quarter prevents glycemic overload.',
              'থালাটির বাকি এক-চতুর্থাংশ (২৫%) জটিল শর্করা রাখুন: লাল চালের ভাত, লাল আটার রুটি, ওটস, মিষ্টি আলু বা খোসাসহ ছোলা-বুট। শর্করাকে থালার চার ভাগের এক ভাগে সীমাবদ্ধ রাখলে রক্তে চিনির ঢেউ ওঠে না।'
            ),
            l(
              'Hydrate with Calorie-Free Beverages: Choose pure water, sparkling water, or unsweetened green tea. Eliminate sugar-sweetened soft drinks, malted beverages, and packaged fruit juices entirely.',
              'পানীয় হিসেবে পানি বেছে নিন: সাধারণ বিশুদ্ধ পানি বা চিনি ছাড়া লেবু পানি বা গ্রিন টি পান করুন। বোতলজাত কোল্ড ড্রিঙ্কস, প্যাকেটজাত ফলের জুস বা চিনিযুক্ত কোমল পানীয় সম্পূর্ণ পরিহার করুন।'
            ),
          ],
        },
        {
          id: 'foundation-hypoglycemia-rule15',
          heading: l(
            'The Life-Saving Rule of 15: How to Treat a Low and Why Chocolate is Forbidden',
            '১৫-র জীবনরক্ষাকারী নিয়ম: লো সুগারের জরুরি চিকিৎসা এবং চকলেটের মারাত্মক ভুল'
          ),
          paragraphs: [
            l(
              'Hypoglycemia (blood glucose below 70 mg/dL or 3.9 mmol/L) is a medical emergency. When glucose drops below this threshold, brain cells (which depend entirely on circulating glucose) become starved of fuel, producing shakiness, sweating, palpitations, confusion, and if untreated, seizures or loss of consciousness [6].',
              'হাইপোগ্লাইসেমিয়া (রক্তে সুগার ৭০ মিগ্রা/ডেসিলিটার বা ৩.৯ মিলিমোল/লিটারের নিচে নেমে যাওয়া) একটি অত্যন্ত জরুরি স্বাস্থ্যগত ঝুঁকি। মস্তিষ্ক চলতে কেবল গ্লুকোজের ওপর নির্ভর করে। সুগার খুব কমে গেলে মস্তিষ্কের কার্যক্ষমতা বন্ধ হতে থাকে—হাত-পা কাঁপা, বুক ধড়ফড় করা, প্রচণ্ড ঘাম হওয়া, মাথা ঘোরা এবং সময়মতো চিকিৎসা না পেলে মানুষ অজ্ঞান পর্যন্ত হয়ে যেতে পারে [6]।'
            ),
            l(
              'The internationally validated clinical protocol for treating conscious hypoglycemia is the Rule of 15 [6]. It is simple, rapid, and eliminates both persistent hypoglycemia and severe rebound hyperglycemia.',
              'জ্ঞান থাকা অবস্থায় হঠাৎ ব্লাড সুগার কমে গেলে তা দ্রুত স্বাভাবিক করার আন্তর্জাতিকভাবে স্বীকৃত চিকিৎসাবিজ্ঞানের নিয়ম হলো ‘রুল অব ১৫’ বা ১৫-র নিয়ম [6]। এটি মেনে চললে রোগী দ্রুত সুস্থ হন এবং অতিরিক্ত চিনি খেয়ে সুগার আবার আকাশচুম্বী হওয়ার ঝুঁকি থাকে না।'
            ),
            l(
              'A tragic and widespread mistake is giving a hypoglycemic patient chocolate bars, whole milk, cream pastries, or ice cream. Although these foods are rich in sugar, they are loaded with dietary fat. Fat slows gastric emptying by triggering the release of cholecystokinin (CCK) in the duodenum. As a result, the sugar is trapped in the stomach for 30 to 45 minutes, while the brain remains starved of glucose. In acute hypoglycemia, pure fat-free fast-acting sugar is required [6]!',
              'একটি সাধারণ অথচ বিপজ্জনক ভুল হলো—কারো সুগার কমে গেলে তাকে চকলেট, আইসক্রিম বা মিষ্টি পেস্ট্রি খেতে দেওয়া। চকলেট ও দুগ্ধজাত মিষ্টিতে চিনির পাশাপাশি প্রচুর চর্বি (ফ্যাট) থাকে। চর্বি পাকস্থলীর নড়াচড়া আটকে দেয় এবং খাবার অন্ত্রে পৌঁছাতে ৩০ থেকে ৪৫ মিনিট দেরি করিয়ে দেয়। ফলে পেটে মিষ্টি থাকা সত্ত্বেও তা রক্তে ও মস্তিষ্কে পৌঁছায় না এবং রোগী কোমায় চলে যেতে পারেন। মনে রাখবেন, লো সুগারে কেবল ফ্যাটবিহীন বিশুদ্ধ চিনিই জীবন বাঁচায় [6]!'
            ),
          ],
          bullets: [
            l(
              'Step 1 — Consume Exactly 15 Grams of Fast-Acting Carbohydrate: 4 commercial glucose tablets, or 1/2 cup (120 mL) of fruit juice, or 1/2 cup of regular non-diet soda, or 3 teaspoons (1 tablespoon) of plain table sugar dissolved in water.',
              'ধাপ ১ — ঠিক ১৫ গ্রাম দ্রুত শোষণযোগ্য চিনি খান: ৪টি গ্লুকোজ ট্যাবলেট, অথবা আধা কাপ (১২০ মিলি) ফলের জুস, অথবা আধা কাপ সাধারণ সোডা/কোক, অথবা ১ টেবিল চামচ সাধারণ চিনি পানিতে গুলে খেয়ে নিন।'
            ),
            l(
              'Step 2 — Wait Exactly 15 Minutes: Rest quietly. Do not raid the refrigerator or continue eating out of panic, as overeating will cause severe rebound hyperglycemia.',
              'ধাপ ২ — ঠিক ১৫ মিনিট অপেক্ষা করুন: শান্ত হয়ে বসে থাকুন। ভয়ের চোটে একগাদা ভাত, বিস্কুট বা মিষ্টি খেয়ে ফেলবেন না, কারণ তাতে সুগার হুট করে অস্বাভাবিক বেড়ে যাবে।'
            ),
            l(
              'Step 3 — Recheck Blood Glucose with a Glucometer: If blood sugar is still below 70 mg/dL, repeat the 15 grams of fast carbs and wait another 15 minutes.',
              'ধাপ ৩ — গ্লুকোমিটার দিয়ে পুনরায় সুগার মাপুন: যদি ১৫ মিনিট পরও সুগার ৭০ এর নিচে থাকে, তবে আবার ১৫ গ্রাম চিনি খেয়ে আরও ১৫ মিনিট অপেক্ষা করুন।'
            ),
            l(
              'Step 4 — Follow with a Complex Snack: Once blood glucose returns above 70 mg/dL, eat a small snack containing protein and complex carbs (e.g., 2 whole-grain crackers with peanut butter or half a chapati with dal) if the next scheduled meal is more than an hour away.',
              'ধাপ ৪ — সুগার স্বাভাবিক হলে পরবর্তী হালকা খাবার: সুগার ৭০ পেরিয়ে স্বাভাবিক হলে, যদি মূল খাবারের এখনো ১ ঘণ্টার বেশি দেরি থাকে, তবে এক টুকরো রুটি বা বিস্কুট খেয়ে নিন যাতে সুগার আবার না পড়ে যায়।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'শিক্ষায়তনিক গভীরতা'),
      sections: [
        {
          id: 'academic-ada-macronutrient-architecture',
          heading: l(
            'Macronutrient Architecture: Evidence-Based Targets Across Diabetes Phenotypes',
            'ম্যাক্রোনিউট্রিয়েন্টের বিজ্ঞানসম্মত অনুপাত ও ক্লিনিক্যাল লক্ষ্যমাত্রা'
          ),
          paragraphs: [
            l(
              'The American Diabetes Association (ADA) Standards of Care explicitly affirm that there is no universal, one-size-fits-all ideal percentage of calories from carbohydrates, protein, and fat for people with diabetes [1]. Instead, macronutrient distribution must be individualized based on the metabolic profile, medication regimen, renal function, and cultural dietary patterns of the individual.',
              'আমেরিকান ডায়াবেটিস অ্যাসোসিয়েশন (ADA) তাদের আধুনিক চিকিৎসা নির্দেশিকায় স্পষ্ট জানিয়েছে যে, ডায়াবেটিসের রোগীদের জন্য শর্করা, প্রোটিন বা ফ্যাটের কোনো নির্দিষ্ট বাঁধাধরা সার্বজনীন শতকরা হার নেই [1]। রোগীর বয়স, কিডনির কার্যক্ষমতা, ওষুধের ধরন ও খাদ্যাভ্যাস বিবেচনা করে ব্যক্তিগতভাবে এই অনুপাত নির্ধারণ করতে হয়।'
            ),
            l(
              'Despite individualization, rigorous clinical trials have established safe boundaries and targeted priorities for macronutrient quality rather than mere quantity [1]. Replacing refined starches with unrefined, high-fiber carbohydrates, optimizing dietary protein to protect lean body mass, and emphasizing monounsaturated fatty acids (MUFA) consistently yield superior glycemic control and cardiovascular risk reduction.',
              'তবে বাঁধাধরা হার না থাকলেও বিভিন্ন গবেষণায় প্রমাণিত কিছু নিরাপদ সীমারেখা রয়েছে [1]। পরিশোধিত ময়দা ও চিনির বদলে আঁশযুক্ত জটিল শর্করা গ্রহণ, পেশি অক্ষুণ্ণ রাখতে সঠিক প্রোটিন নিশ্চিত করা এবং ক্ষতিকর চর্বির বদলে মনো-আনস্যাচুরেটেড ফ্যাট (যেমন অলিভ অয়েল, বাদাম বা সরিষার তেল) ব্যবহারে রক্তে সুগার ও হৃদরোগের ঝুঁকি নাটকীয়ভাবে হ্রাস পায়।'
            ),
          ],
          bullets: [
            l(
              'Carbohydrate Quality & Thresholds: Emphasize intact whole grains, legumes, and non-starchy vegetables. Target at least 14 g of dietary fiber per 1,000 kcal consumed (minimum 28–35 g/day for women, 38–45 g/day for men). Soluble viscous fibers (beta-glucan from oats, psyllium) delay glucose absorption and lower LDL cholesterol [1].',
              'শর্করার গুণমান ও লক্ষ্যমাত্রা: দানাদার শস্য, ডাল ও শাকসবজিকে প্রাধান্য দিন। প্রতি ১০০০ ক্যালোরির জন্য কমপক্ষে ১৪ গ্রাম আঁশ নিশ্চিত করুন (দৈনিক প্রায় ৩০-৪৫ গ্রাম)। ওটস ও ইসবগুলের দ্রবণীয় আঁশ অন্ত্রে জেল তৈরি করে রক্তে সুগার ও খারাপ কোলেস্টেরল কমায় [1]।',
            ),
            l(
              'Protein Prescription: For patients with normal kidney function (eGFR > 60 mL/min/1.73m²), prescribe 1.0 to 1.5 g/kg/day to support muscle mass and satiety. In the presence of Diabetic Kidney Disease (DKD) with macroalbuminuria, protein intake should be maintained at 0.8 g/kg/day (RDA level); severe protein restriction (< 0.6 g/kg) is not recommended as it promotes malnutrition without slowing renal decline [1].',
              'প্রোটিনের পরিমাণ: স্বাভাবিক কিডনি থাকলে (eGFR > ৬০) পেশি ধরে রাখতে দৈনিক ১.০ থেকে ১.৫ গ্রাম/কেজি প্রোটিন দিন। তবে ডায়াবেটিসজনিত কিডনি জটিলতা (প্রস্রাবে অতিরিক্ত অ্যালবুমিন) দেখা দিলে প্রোটিন কমিয়ে ০.৮ গ্রাম/কেজি করুন; কিন্তু ০.৬ গ্রামের নিচে নামানো নিষেধ, কারণ তাতে অপুষ্টি তৈরি হয় [1]।',
            ),
            l(
              'Lipid Profiling: Saturated fatty acids should be restricted to < 7% of total daily energy, and trans fats eliminated entirely. Replace saturated fats with MUFA (olive oil, mustard oil, nuts, avocados) and polyunsaturated fatty acids (PUFA), which improve insulin sensitivity and lipid ratios [1].',
              'ফ্যাট বা তেলের পরিমিতি: সম্পৃক্ত চর্বি (ঘি, ডালডা, চর্বিযুক্ত লাল মাংস) দৈনিক মোট ক্যালোরির ৭%-এর নিচে রাখুন এবং ট্রান্স ফ্যাট সম্পূর্ণ বর্জন করুন। রান্নার জন্য সরিষার তেল, অলিভ অয়েল বা বাদামের মতো স্বাস্থ্যকর তেল ব্যবহার করুন যা ইনসুলিনের কার্যক্ষমতা বাড়ায় [1]।',
            ),
          ],
        },
        {
          id: 'academic-direct-trial-remission',
          heading: l(
            'The DiRECT Trial Protocol: Achieving Remission Through Hepatic and Pancreatic Fat Drainage',
            'ডায়াবেটিস নিরাময়ে DiRECT ট্রায়াল: লিভার ও অগ্ন্যাশয়ের চর্বি দূর করার বৈজ্ঞানিক প্রমাণ'
          ),
          paragraphs: [
            l(
              'For decades, Type 2 diabetes was universally taught as an incurable, inevitably progressive lifelong illness. However, the landmark Diabetes Remission Clinical Trial (DiRECT), led by Professor Roy Taylor and Professor Mike Lean, proved conclusively that early Type 2 diabetes (duration under 6 years) can be put into durable remission without medication [2, 3].',
              'বহু বছর ধরে চিকিৎসাবিজ্ঞানে শেখানো হতো টাইপ ২ ডায়াবেটিস একটি আজীবন রোগ যা ধীরে ধীরে কেবল খারাপের দিকে যায়। কিন্তু প্রখ্যাত বিজ্ঞানী প্রফেসর রয় টেলর ও প্রফেসর মাইক লিন পরিচালিত যুগান্তকারী ‘DiRECT ট্রায়াল’ প্রমাণ করেছে যে—ডায়াবেটিস ধরা পড়ার প্রথম ৬ বছরের মধ্যে কোনো ওষুধ ছাড়াই সম্পূর্ণ নিরাময় বা ‘রিমিশন’ (Remission) সম্ভব [2, 3]।'
            ),
            l(
              'The biological mechanism of remission relies on clearing ectopic fat accumulated within the liver and pancreas. When a patient achieves an intentional, sustained weight loss of 10 to 15 kg (or approximately 10% to 15% of body weight), hepatic fat drops from an elevated ~16% to a normal ~2%, restoring hepatic insulin sensitivity. Pancreatic fat similarly falls, allowing exhausted beta cells to recover and resume first-phase insulin secretion [2, 3].',
              'এই নিরাময়ের মূল ভিত্তি হলো লিভার এবং অগ্ন্যাশয়ে জমে থাকা বিষাক্ত বাড়তি চর্বি গলিয়ে বের করে দেওয়া। একজন রোগী যখন সঠিক পরিকল্পনায় ১০ থেকে ১৫ কেজি (বা মোট ওজনের প্রায় ১০-১৫%) ওজন কমাতে পারেন, তখন লিভারের চর্বি ১৬% থেকে স্বাভাবিক ২%-এ নেমে আসে। ফলে লিভার রক্তে অতিরিক্ত চিনি পাঠানো বন্ধ করে এবং অগ্ন্যাশয়ের ক্লান্ত বিটা কোষগুলো পুনরায় জীবন্ত হয়ে ইনসুলিন তৈরি শুরু করে [2, 3]।'
            ),
          ],
          bullets: [
            l(
              'Phase 1 — Total Diet Replacement (TDR): An 800 to 853 kcal/day nutritionally complete formula (or strictly supervised food-based deficit) for 12 to 20 weeks. This triggers rapid negative energy balance, mobilizing visceral and ectopic organ lipid stores [2].',
              'প্রথম ধাপ — নিয়ন্ত্রিত লো-ক্যালোরি ডায়েট: ১২ থেকে ২০ সপ্তাহের জন্য দৈনিক ৮০০-৮৫০ ক্যালোরির সুষম পুষ্টিকর তরল বা নিয়ন্ত্রিত খাবার। এটি শরীরে তীব্র ক্যালোরি ঘাটতি তৈরি করে অঙ্গপ্রত্যঙ্গে জমে থাকা অভ্যন্তরীণ চর্বি দ্রুত পুড়িয়ে ফেলে [2]।'
            ),
            l(
              'Phase 2 — Stepped Food Reintroduction: Over 4 to 8 weeks, conventional whole foods are systematically reintroduced (~50% carbohydrate, 35% fat, 15% protein), teaching portion control and establishing low-glycemic eating patterns [2].',
              'দ্বিতীয় ধাপ — ধাপে ধাপে সাধারণ খাবারে ফেরা: ৪ থেকে ৮ সপ্তাহ ধরে রোগীকে ধীরে ধীরে সাধারণ খাবারে ফিরিয়ে আনা হয় (৫০% শর্করা, ৩৫% ফ্যাট, ১৫% প্রোটিন), যেখানে পরিমিত খাওয়া ও স্বাস্থ্যকর শর্করার অভ্যাস তৈরি হয় [2]।'
            ),
            l(
              'Phase 3 — Long-Term Weight Loss Maintenance: Incorporating behavioral therapy, daily step targets (10,000 to 15,000 steps/day), and routine monitoring to ensure weight regain does not re-accumulate ectopic organ fat [2, 3].',
              'তৃতীয় ধাপ — ওজন ধরে রাখা: দীর্ঘমেয়াদে ওজন যাতে আবার বেড়ে না যায় সেজন্য নিয়মিত শারীরিক পরিশ্রম (দৈনিক ১০,০০০ কদম হাঁটা) এবং খাদ্যাভ্যাস ধরে রাখা হয় [2, 3]।'
            ),
            l(
              'Remission Outcomes: In the DiRECT trial, 46% of participants achieved complete remission (HbA1c < 6.5% off all diabetes medications) at 12 months, and 36% sustained remission at 24 months. Remission rate was 86% in those who maintained >= 15 kg weight loss [2].',
              'অর্জিত ফলাফল: ট্রায়ালে দেখা গেছে, যারা ওজন ধরে রাখতে পেরেছেন তাদের মধ্যে প্রথম বছরে ৪৬% রোগী সব ওষুধ ছাড়া সম্পূর্ণ সুস্থ (HbA1c < ৬.৫%) হয়েছেন। আর যারা ১৫ কেজি বা তার বেশি ওজন কমাতে পেরেছিলেন, তাদের ক্ষেত্রে এই সাফল্যের হার ছিল বিস্ময়কর ৮৬% [2]!'
            ),
          ],
        },
        {
          id: 'academic-gdm-targets-ketonemia',
          heading: l(
            'Gestational Diabetes MNT: Strict Glycemic Targets and the 175g Carb Safety Floor',
            'গর্ভকালীন ডায়াবেটিস: কঠোর রক্তের সুগার লক্ষ্যমাত্রা এবং ১৭৫ গ্রাম শর্করার সুরক্ষা সীমানা'
          ),
          paragraphs: [
            l(
              'Gestational Diabetes Mellitus (GDM) poses immediate risks to both mother and fetus. Fetal hyperglycemia stimulates the fetal pancreas to oversecrete insulin, a potent growth factor that causes fetal macrosomia (birth weight > 4,000 g), shoulder dystocia during delivery, and neonatal hypoglycemia immediately after birth [4].',
              'গর্ভকালীন ডায়াবেটিস (GDM) মা এবং গর্ভস্থ শিশু দুজনের জন্যই ঝুঁকিপূর্ণ। মায়ের রক্তের অতিরিক্ত চিনি প্লাসেন্টা ভেদ করে শিশুর শরীরে পৌঁছে যায়। ফলে শিশুর অগ্ন্যাশয় অতিরিক্ত ইনসুলিন তৈরি করে। ইনসুলিন একটি গ্রোথ ফ্যাক্টর হওয়ায় গর্ভের শিশু অস্বাভাবিক মোটা হয়ে যায় (ম্যাক্রোসোমিয়া বা ওজন ৪ কেজির বেশি), যা স্বাভাবিক প্রসব কঠিন করে তোলে এবং জন্মের পর শিশু মারাত্মক লো সুগারে ভোগে [4]।'
            ),
            l(
              'To prevent these complications, the American College of Obstetricians and Gynecologists (ACOG) and the ADA mandate the strictest glycemic targets in clinical medicine [1, 4]: Fasting blood glucose <= 95 mg/dL (5.3 mmol/L), 1-hour postprandial <= 140 mg/dL (7.8 mmol/L), and 2-hour postprandial <= 120 mg/dL (6.7 mmol/L).',
              'এই জটিলতা এড়াতে চিকিৎসাবিজ্ঞানের সবচেয়ে কঠোর সুগার মাপকাঠি নির্ধারণ করা হয়েছে [1, 4]: সকালে খালি পেটে সুগার হতে হবে ৯৫ মিগ্রা/ডেসিলিটার বা তার কম, খাওয়ার ১ ঘণ্টা পর ১৪০ বা তার কম, এবং খাওয়ার ২ ঘণ্টা পর ১২০ বা তার কম।'
            ),
            l(
              'Crucially, pregnant women must NEVER be placed on severe ketogenic or very low-carbohydrate diets. The Institute of Medicine (IOM) and ADA establish a non-negotiable minimum of 175 grams of carbohydrate per day during pregnancy [1, 4]. Maternal ketonemia (elevated acetoacetate and beta-hydroxybutyrate) readily crosses the placenta and has been correlated with impaired fetal neurodevelopment and lower intellectual quotient (IQ) in offspring. The solution is carbohydrate redistribution, not carbohydrate starvation [4].',
              'তবে সবচেয়ে সতর্কতার বিষয় হলো—গর্ভবতী মাকে কখনোই কিটোজেনিক বা অতি-কম শর্করার (Very Low Carb) ডায়েট দেওয়া যাবে না। আন্তর্জাতিক মানদণ্ড অনুযায়ী গর্ভাবস্থায় প্রতিদিন কমপক্ষে ১৭৫ গ্রাম শর্করা নিশ্চিত করা বাধ্যতামূলক [1, 4]। শর্করা খুব কমে গেলে মায়ের শরীরে কিটোন বডি তৈরি হয়, যা গর্ভফুল ভেদ করে শিশুর মস্তিষ্কে প্রবেশ করে মানসিক বিকাশে অপূরণীয় ক্ষতি করতে পারে। তাই সমাধান শর্করা বন্ধ করা নয়, বরং শর্করাকে সারাদিনে সঠিকভাবে ভাগ করে খাওয়া [4]।'
            ),
          ],
          bullets: [
            l(
              'Frequent Small Meals: Distribute the 175+ grams of carbohydrate across 3 small-to-moderate meals and 2 to 4 snacks daily to flatten glycemic peaks [4].',
              'ঘন ঘন অল্প আহার: ১৭৫ গ্রাম বা তার বেশি শর্করাকে সারাদিনে ৩টি মূল খাবার এবং ২ থেকে ৪টি হালকা নাশতার মধ্যে ভাগ করে দিন যাতে একবারে বেশি সুগার না ওঠে [4]।'
            ),
            l(
              'Morning Carbohydrate Restriction: Due to the high circadian surge of cortisol, growth hormone, and placental lactogen at dawn, insulin resistance is most severe at breakfast. Limit breakfast carbohydrate to only 15 to 30 grams, avoiding milk, fruit juices, and refined cereals in the morning [4].',
              'সকালের খাবারে বিশেষ সতর্কতা: ভোরের দিকে কর্টিসল ও গ্রোথ হরমোনের কারণে সকালে ইনসুলিন রেজিস্ট্যান্স সবচেয়ে বেশি থাকে। তাই সকালের নাশতায় শর্করা মাত্র ১৫-৩০ গ্রামের মধ্যে সীমাবদ্ধ রাখুন; এ সময় দুধ, ফল বা মিষ্টি খাবার এড়িয়ে চলাই উত্তম [4]।'
            ),
            l(
              'Bedtime Complex Snack: Prescribe a 15 to 30g complex carbohydrate snack paired with protein or fat (e.g., Greek yogurt or whole-wheat toast with peanut butter) at bedtime. This prevents overnight maternal hypoglycemia and suppresses nocturnal hepatic gluconeogenesis, ensuring morning fasting glucose remains <= 95 mg/dL [4].',
              'ঘুমোনোর আগের হালকা নাশতা: রাতে ঘুমানোর আগে ১৫-৩০ গ্রাম শর্করা ও প্রোটিনের সমন্বয় (যেমন এক কাপ টক দই বা পিনাট বাটারসহ লাল আটার টোস্ট) খান। এটি রাতে সুগার পড়ে যাওয়া ঠেকায় এবং লিভারকে অতিরিক্ত চিনি তৈরিতে বাধা দিয়ে সকালে সুগার ৯৫-এর নিচে রাখতে সাহায্য করে [4]।'
            ),
          ],
        },
        {
          id: 'academic-exercise-hypoglycemia-mechanics',
          heading: l(
            'Exercise Physiology and Late-Onset Hypoglycemia: Managing the Active Diabetic',
            'ব্যায়াম ও ডায়াবেটিস: ইনসুলিন ছাড়া গ্লুকোজ শোষণ এবং দেরিতে লো সুগারের ঝুঁকি'
          ),
          paragraphs: [
            l(
              'Physical activity is a cornerstone of diabetes management, but it presents unique physiological dynamics. During muscle contraction, calcium release from the sarcoplasmic reticulum and the elevation of AMP activate 5’-AMP-activated protein kinase (AMPK). This triggers the translocation of glucose transporter 4 (GLUT4) vesicles to the cell membrane completely independent of insulin [1].',
              'শারীরিক পরিশ্রম ডায়াবেটিসের অন্যতম মহৌষধ। ব্যায়াম করার সময় পেশিকোষের ভেতরে ক্যালসিয়াম ও এএমপি (AMP) বৃদ্ধি পেয়ে একটি বিশেষ এনজাইম (AMPK) সক্রিয় করে। এর ফলে ইনসুলিনের কোনো সাহায্য ছাড়াই পেশির গ্লুকোজ ট্রান্সপোর্টার (GLUT4) সরাসরি রক্ত থেকে চিনি টেনে নিয়ে পেশির ভেতরে ঢুকিয়ে দেয় [1]।'
            ),
            l(
              'Because exercise-induced glucose uptake bypasses the insulin receptor, patients on exogenous insulin or insulin secretagogues (sulfonylureas) face a dual risk: acute exercise-induced hypoglycemia and late-onset nocturnal hypoglycemia occurring 12 to 24 hours post-exercise as muscles restock depleted glycogen stores [1, 6].',
              'যেহেতু ব্যায়ামের সময় ইনসুলিন ছাড়াই সুগার নামতে থাকে, তাই যেসব রোগী ইনসুলিন বা সালফোনাইলইউরিয়া জাতীয় ওষুধ খান, তাদের রক্তে সুগার আকস্মিক কমে যাওয়ার ঝুঁকি থাকে। এমনকি ব্যায়াম শেষ হওয়ার ১২ থেকে ২৪ ঘণ্টা পরও রাতে ঘুমানোর সময় সুগার মারাত্মক কমে যেতে পারে, কারণ তখন পেশি নিজের খালি হয়ে যাওয়া গ্লাইকোজেন ভাণ্ডার পূরণ করতে রক্ত থেকে ক্রমাগত গ্লুকোজ টানতে থাকে [1, 6]।'
            ),
          ],
          bullets: [
            l(
              'Pre-Exercise Blood Glucose Check: Safe starting range is 126 to 180 mg/dL (7.0 to 10.0 mmol/L). If blood glucose is < 90 mg/dL, consume 15 to 30g of complex carbohydrate before initiating moderate-to-vigorous activity [1].',
              'ব্যায়ামের আগে সুগার পরীক্ষা: ব্যায়াম শুরুর সবচেয়ে নিরাপদ সীমা হলো ১২৬ থেকে ১৮০ মিগ্রা/ডেসিলিটার। সুগার যদি ৯০-এর নিচে থাকে, তবে ব্যায়াম শুরুর আগে ১৫-৩০ গ্রাম শর্করা খেয়ে নিতে হবে [1]।'
            ),
            l(
              'Insulin Dose Reduction: For planned moderate aerobic exercise lasting > 45 minutes, reduce the preceding prandial bolus insulin dose by 25% to 50% to prevent hyperinsulinemic hypoglycemia [1].',
              'ইনসুলিনের মাত্রা সমন্বয়: ৪৫ মিনিটের বেশি অ্যারোবিক ব্যায়াম করার পরিকল্পনা থাকলে ব্যায়ামের আগের বেলার ইনসুলিনের মাত্রা ২৫% থেকে ৫০% কমিয়ে নিতে হয় [1]।'
            ),
            l(
              'Post-Exercise Glycogen Restocking: Consume a post-workout recovery meal providing 1.0 to 1.2 g/kg carbohydrate combined with 0.3 g/kg protein within 2 hours, and include an extra complex carbohydrate snack before bedtime to avert late-onset nocturnal hypoglycemia [1, 6].',
              'ব্যায়াম পরবর্তী পুষ্টি: ব্যায়াম শেষ হওয়ার ২ ঘণ্টার মধ্যে কিছুটা জটিল শর্করা ও প্রোটিন সমৃদ্ধ খাবার খান। রাতে ঘুমানোর আগে সামান্য হালকা নাশতা খেলে রাতের বেলার মারাত্মক লো সুগার এড়ানো যায় [1, 6]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced & Research', 'উচ্চতর গবেষণা ও ক্লিনিক্যাল প্র্যাকটিস'),
      sections: [
        {
          id: 'advanced-glucolipotoxicity-er-stress',
          heading: l(
            'Molecular Glucolipotoxicity: Diacylglycerol, Ceramides, and Beta-Cell ER Stress',
            'গ্লুকোলিপোটক্সিসিটি: ডায়াসাইলগ্লিসারল, সিরামাইড এবং বিটা কোষের এন্ডোপ্লাজমিক রেটিকুলামের ওপর চাপ'
          ),
          paragraphs: [
            l(
              'The traditional concept that Type 2 diabetes is merely caused by excessive sugar intake fails to capture the true molecular pathology. The catastrophic loss of insulin secretory capacity is driven by glucolipotoxicity—the synergistic toxic effect of chronic hyperglycemia occurring in the presence of elevated circulating free fatty acids (FFAs) [5].',
              'কেবল বেশি চিনি খাওয়ার কারণেই ডায়াবেটিস হয়—এই ধারণা চিকিৎসাবিজ্ঞানের আণবিক স্তরে সম্পূর্ণ সত্য নয়। মূলত রক্তে অতিরিক্ত চিনির সাথে যখন অতিরিক্ত মুক্ত চর্বি বা ফ্যাটি অ্যাসিড যুক্ত হয়, তখনই অগ্ন্যাশয়ের বিটা কোষগুলোর অপূরণীয় ক্ষতি ঘটে। এই দ্বৈত বিষাক্ত অবস্থাকে চিকিৎসাবিজ্ঞানের ভাষায় ‘গ্লুকোলিপোটক্সিসিটি’ (Glucolipotoxicity) বলা হয় [5]।'
            ),
            l(
              'When beta cells are exposed to prolonged fatty acid excess, unesterified long-chain fatty acids enter the esterification pathway, forming intracellular lipotoxic intermediates including diacylglycerol (DAG) and ceramides. In skeletal muscle and hepatocytes, DAG activates protein kinase C isoforms (PKC-theta in muscle, PKC-epsilon in liver), which phosphorylate Insulin Receptor Substrate-1 (IRS-1) on inhibitory serine residues (Ser307), completely decoupling insulin signaling from downstream PI3K/Akt activation [5].',
              'শরীরে চর্বির মাত্রা বেড়ে গেলে বিটা কোষ ও লিভারের ভেতরে ‘ডায়াসাইলগ্লিসারল’ (DAG) এবং ‘সিরামাইড’ নামক ক্ষতিকর চর্বিজাত উপাদান জমতে থাকে। এগুলো কোষের ভেতরে ‘প্রোটিন কাইনেজ সি’ (PKC) সক্রিয় করে তোলে, যা ইনসুলিন রিসেপ্টরের প্রধান সংযোগকারী সেতুকে (IRS-1) বিকল করে দেয়। ফলে রক্তে প্রচুর ইনসুলিন ভেসে থাকা সত্ত্বেও কোষগুলো কোনো সংকেত গ্রহণ করতে পারে না [5]।'
            ),
            l(
              'Simultaneously, within the pancreatic beta cell, excessive glucose flux generates reactive oxygen species (ROS) via mitochondrial oxidative phosphorylation. Under oxidative assault, proinsulin folding inside the endoplasmic reticulum (ER) fails, triggering the Unfolded Protein Response (UPR) and persistent ER stress. Transcription of CCAAT/enhancer-binding protein homologous protein (CHOP) and activation of caspase-3 initiate programmed cell demise [5].',
              'একই সাথে বিটা কোষের ভেতরে অতিরিক্ত গ্লুকোজের বিপাক হতে গিয়ে ক্ষতিকর ফ্রি র‍্যাডিকেল (ROS) তৈরি হয়। এতে কোষের ভেতরের প্রোটিন তৈরির কারখানা (এন্ডোপ্লাজমিক রেটিকুলাম) ভেঙে পড়ে। কোষটি ক্রমাগত মানসিক চাপে পড়ে অবশেষে নিজের ভেতর আত্মঘাতী প্রক্রিয়া (অ্যাপোপটোসিস বা মৃত্যু) চালু করে দেয় [5]।'
            ),
          ],
        },
        {
          id: 'advanced-twin-cycle-hypothesis',
          heading: l(
            'Roy Taylor’s Twin Cycle Hypothesis: The Anatomical Drivers of Diabetes Remission',
            'রয় টেলরের টুইন সাইকেল হাইপোথিসিস: লিভার ও অগ্ন্যাশয়ের বিষাক্ত বন্ধন ও মুক্তি'
          ),
          paragraphs: [
            l(
              'Professor Roy Taylor formulated the unifying Twin Cycle Hypothesis to explain the onset and reversibility of Type 2 diabetes [3]. The hypothesis posits that chronic positive energy balance initiates two vicious interlocking cycles involving the liver and the pancreas.',
              'নিউক্যাসল বিশ্ববিদ্যালয়ের প্রফেসর রয় টেলর টাইপ ২ ডায়াবেটিস কীভাবে শুরু হয় এবং কীভাবে একে উল্টো পথে হাঁটিয়ে দূর করা যায়, তা ব্যাখ্যা করতে ‘টুইন সাইকেল হাইপোথিসিস’ বা দ্বৈত চক্র তত্ত্ব প্রদান করেন [3]। তাঁর মতে শরীরে ক্রমাগত অতিরিক্ত ক্যালোরি প্রবেশের ফলে লিভার ও অগ্ন্যাশয়ের মাঝে দুটি আত্মঘাতী চক্র শুরু হয়।'
            ),
            l(
              'Cycle 1 (The Liver Cycle): Excess caloric intake forces the liver to synthesize fatty acids through de novo lipogenesis (DNL), producing non-alcoholic fatty liver disease (NAFLD/MASLD). Hepatic steatosis blunts insulin-mediated suppression of gluconeogenesis, causing elevated fasting plasma glucose. Furthermore, the steatotic liver attempts to export its excess fat by oversecreting Very Low-Density Lipoproteins (VLDL) into the circulation [2, 3].',
              'প্রথম চক্র (লিভার সাইকেল): প্রয়োজনের অতিরিক্ত খাবার খেলে লিভার সেই বাড়তি পুষ্টিকে নতুন চর্বিতে রূপান্তরিত করে (De Novo Lipogenesis), যার ফলে ফ্যাটি লিভার তৈরি হয়। চর্বিযুক্ত লিভার ইনসুলিনের কথা শোনে না এবং রাতভর রক্তে বাড়তি গ্লুকোজ ঢালতে থাকে। একই সাথে লিভার নিজের অতিরিক্ত চর্বিকে VLDL কণার মাধ্যমে রক্তে ছড়িয়ে দিতে শুরু করে [2, 3]।'
            ),
            l(
              'Cycle 2 (The Pancreatic Cycle): The flood of circulating VLDL delivers excess triglycerides directly into the pancreatic parenchyma and islets. Ectopic intra-islet lipid accumulation induces beta-cell dysfunction, blunting the crucial acute first-phase insulin response [3]. The lack of first-phase insulin causes severe postprandial hyperglycemia, which stimulates even more hepatic DNL, accelerating the vicious loop.',
              'দ্বিতীয় চক্র (অগ্ন্যাশয় সাইকেল): লিভার থেকে বের হওয়া সেই VLDL কণাগুলো অগ্ন্যাশয়ের ভেতরে জমা হতে থাকে। বিটা কোষগুলোর চারপাশ যখন চর্বির পুরু স্তরে ঢেকে যায়, তখন খাবার গ্রহণের সাথে সাথে দ্রুত ইনসুলিন ক্ষরণের স্বাভাবিক ক্ষমতা বন্ধ হয়ে যায় [3]। এর ফলে খাবারের পর সুগার মারাত্মক বেড়ে যায়, যা লিভারকে আরও বেশি চর্বি তৈরি করতে বাধ্য করে এবং পুরো চক্রটি আরও ভয়াবহ রূপ নেয়।'
            ),
            l(
              'Breaking the Cycle: When a patient enters rapid negative energy balance (via hypocaloric MNT), intrahepatic triglycerides drop by 30% within 7 days, immediately restoring hepatic insulin sensitivity and normalizing fasting glucose. Continued caloric deficit drains intra-pancreatic fat over several weeks, allowing beta cells to emerge from their lipid-induced stupor [2, 3].',
              'চক্র ভাঙার বৈজ্ঞানিক সূত্র: রোগী যখন স্বল্প ক্যালোরির সুষম ডায়েট শুরু করেন, মাত্র ৭ দিনের মধ্যে লিভারের চর্বি ৩০% কমে যায় এবং খালি পেটের সুগার নিজে থেকেই স্বাভাবিক হয়ে আসে! কয়েক সপ্তাহ এই ডায়েট চালিয়ে গেলে অগ্ন্যাশয়ের জমা চর্বিও পরিষ্কার হয়ে যায় এবং নিষ্ক্রিয় হয়ে থাকা বিটা কোষগুলো পুনরায় সতেজ হয়ে ওঠে [2, 3]।'
            ),
          ],
        },
        {
          id: 'advanced-betacell-dedifferentiation',
          heading: l(
            'Beta-Cell Dedifferentiation vs. Apoptosis: The Reversibility Paradigm',
            'বিটা কোষের রূপান্তর বনাম মৃত্যু: ডায়াবেটিস কেন আবার ভালো হতে পারে?'
          ),
          paragraphs: [
            l(
              'For decades, standard pathology texts asserted that the declining insulin secretion in Type 2 diabetes was caused by irreversible beta-cell apoptosis (cell death). Modern lineage-tracing experiments have overturned this fatalistic dogma [3, 5].',
              'পুরোনো চিকিৎসাবিজ্ঞানের বইয়ে লেখা ছিল টাইপ ২ ডায়াবেটিসে অগ্ন্যাশয়ের বিটা কোষগুলো মরে নিঃশেষ হয়ে যায়, তাই এই রোগ কখনো সারে না। কিন্তু আধুনিক জেনেটিক গবেষণা প্রমাণ করেছে যে—বিটা কোষগুলো আসলে মরে যায় না, বরং অতিরিক্ত চর্বি ও চিনির চাপে নিজেদের মূল পরিচয় হারিয়ে ফেলে ঘুমিয়ে থাকে [3, 5]!'
            ),
            l(
              'Under severe chronic glucolipotoxicity, beta cells undergo dedifferentiation: they downregulate mature lineage markers, including key transcription factors Pancreatic and Duodenal Homeobox 1 (PDX1), V-maf musculoaponeurotic fibrosarcoma oncogene homolog A (MafA), and NeuroD1. Stripped of these master regulators, the cell halts insulin gene transcription and re-expresses primitive neuroendocrine progenitor markers like Aldehyde Dehydrogenase 1 Family Member A3 (ALDH1A3) [5].',
              'অতিরিক্ত চর্বি ও চিনির বিষাক্ত পরিবেশে বিটা কোষগুলোর ভেতরে থাকা প্রধান নিয়ন্ত্রণকারী প্রোটিনগুলো (যেমন PDX1 ও MafA) নিষ্ক্রিয় হয়ে যায়। ফলে কোষটি ইনসুলিন তৈরি করা বন্ধ করে দেয় এবং আদিম অপরিণত কোষে রূপান্তরিত হয়। চিকিৎসাবিজ্ঞানে একে ‘ডি-ডিফারেনসিয়েশন’ (Dedifferentiation) বলে [5]।'
            ),
            l(
              'Because the dedifferentiated beta cells are structurally alive rather than dead, removing the glucolipotoxic microenvironment through profound negative energy balance triggers redifferentiation. PDX1 and MafA are re-expressed, glucose-stimulated insulin secretion returns, and clinical remission is established [2, 3].',
              'যেহেতু বিটা কোষগুলো মারা যায়নি বরং সাময়িক অচলাবস্থায় ছিল, তাই সঠিক খাদ্য ও ওজন হ্রাসের মাধ্যমে তাদের চারপাশের বিষাক্ত চর্বির আবরণ সরিয়ে দিলে তারা পুনরায় নিজেদের পরিণত পরিচয় ফিরে পায়। PDX1 ও MafA আবার সক্রিয় হয়, স্বাভাবিক ইনসুলিন নিঃসরণ শুরু হয় এবং রোগী কোনো ওষুধ ছাড়াই সুস্থ জীবনে ফিরে আসেন [2, 3]।'
            ),
          ],
        },
        {
          id: 'advanced-gdm-dawn-case-study',
          heading: l(
            'Clinical Case Study: Managing Refractory Breakfast Spikes in Gestational Diabetes',
            'ক্লিনিক্যাল কেস স্টাডি: গর্ভকালীন ডায়াবেটিসে সকালের অনিয়ন্ত্রিত সুগার নিয়ন্ত্রণ'
          ),
          paragraphs: [
            l(
              'Patient Presentation: A 29-year-old primigravida at 26 weeks gestation is diagnosed with Gestational Diabetes via a 75g oral glucose tolerance test (OGTT): Fasting 98 mg/dL (target <= 95), 1-hour 188 mg/dL (target <= 180), and 2-hour 158 mg/dL (target <= 153). Her obstetrician refers her for immediate medical nutrition therapy [4].',
              'রোগীর ইতিহাস: ২৯ বছর বয়সী একজন প্রথমবার গর্ভধারণকারী নারী ২৬তম সপ্তাহে ওজিটিটি (OGTT) পরীক্ষার মাধ্যমে গর্ভকালীন ডায়াবেটিসে আক্রান্ত বলে শনাক্ত হন। তাঁর খালি পেটের সুগার ছিল ৯৮ মিগ্রা/ডেসিলিটার (নিরাপদ সীমা <= ৯৫), ১ ঘণ্টার সুগার ১৮৮ (সীমা <= ১৮০) এবং ২ ঘণ্টার সুগার ১৫৮ (সীমা <= ১৫৩)। তাঁকে দ্রুত সঠিক খাদ্য পরিকল্পনার জন্য ক্লিনিক্যাল ডায়েটিশিয়ানের কাছে পাঠানো হয় [4]।'
            ),
            l(
              'Self-Monitoring Logs: After one week on a generic healthy diet, her post-lunch (118 mg/dL) and post-dinner (122 mg/dL) readings are well within target. However, her fasting blood glucose averages 99 mg/dL and her 1-hour post-breakfast glucose spikes to 162 mg/dL (target <= 140 mg/dL). Her current breakfast consists of 2 slices of white bread, 1 cup of cow’s milk, and an apple [4].',
              'সুগার মাপার রেকর্ড: এক সপ্তাহ সাধারণ স্বাস্থ্যকর খাবার খাওয়ার পর দেখা গেল দুপুর (১১৮) ও রাতের (১২২) খাবারের পর সুগার চমৎকার নিয়ন্ত্রণে আছে। কিন্তু সকালের খালি পেটের সুগার গড়ে ৯৯ এবং সকালের নাশতার ১ ঘণ্টা পর সুগার স্পাইক করে ১৬২ মিগ্রা/ডেসিলিটারে উঠছে (লক্ষ্যমাত্রা <= ১৪০)। রোগীর বর্তমান সকালের নাশতায় ছিল ২ স্লাইস সাদা পাউরুটি, ১ কাপ গরুর দুধ এবং একটি আপেল [4]।'
            ),
            l(
              'Pathophysiological Analysis: The high fasting glucose reflects unsuppressed nocturnal hepatic gluconeogenesis exacerbated by prolonged overnight fasting. The severe post-breakfast spike is driven by the coincidence of high morning cortisol/hPL with a high-glycemic, lactose-rich breakfast (bread + milk + apple = ~55g fast carbs) [4].',
              'রোগতাত্ত্বিক বিশ্লেষণ: সারারাত দীর্ঘক্ষণ পেট খালি থাকার কারণে ভোরের হরমোনগুলোর প্রভাবে লিভার নিজে থেকে অতিরিক্ত চিনি তৈরি করে খালি পেটের সুগার বাড়িয়ে দিচ্ছে। আর সকালের নাশতায় সাদা পাউরুটি, দুধের ল্যাকটোজ এবং আপেলের ফ্রুক্টোজ মিলে প্রায় ৫৫ গ্রাম দ্রুত শোষণযোগ্য চিনি শরীরে ঢুকছে, যা সকালের প্রাকৃতিক ইনসুলিন রেজিস্ট্যান্সের সাথে মিলে সুগার স্পাইক ঘটাচ্ছে [4]।'
            ),
          ],
          bullets: [
            l(
              'Intervention 1 — Breakfast Restructuring (Target 20g Carbs): Eliminate white bread and liquid milk at breakfast. Prescribe 1 whole-wheat flatbread (chapati, ~15g carb) with 2 scrambled whole eggs cooked in olive oil, 1 cup sautéed spinach, and green tea. This slashes glycemic load while providing high protein and fat to blunt glucose entry [4].',
              'ব্যবস্থা ১ — সকালের নাশতার সংস্কার (সর্বোচ্চ ২০ গ্রাম শর্করা): সকালের নাশতা থেকে সাদা পাউরুটি ও তরল দুধ বাদ দেওয়া হলো। তার বদলে ১টি লাল আটার হাতে গড়া পাতলা রুটি (১৫ গ্রাম শর্করা), অলিভ অয়েলে ভাজা ২টি ডিম, ১ বাটি ভাজা পালং শাক এবং চিনি ছাড়া গ্রিন টি দেওয়া হলো। ডিম ও শাকের প্রোটিন এবং আঁশ রক্তে চিনির ঢেউ সম্পূর্ণ আটকে দেয় [4]।',
            ),
            l(
              'Intervention 2 — Mid-Morning Snack Shift: The apple and dairy milk were shifted to 10:30 AM (mid-morning snack), spaced 2.5 hours after breakfast when insulin sensitivity improves [4].',
              'ব্যবস্থা ২ — সকালের মাঝের নাশতা: দুধ ও আপেল সকালের নাশতা থেকে সরিয়ে সকাল ১০:৩০ মিনিটে (মিড-মর্নিং স্ন্যাক) দেওয়া হলো, যখন শরীরের ইনসুলিন হরমোন কাজ করার উপযুক্ত পরিবেশ পায় [4]।',
            ),
            l(
              'Intervention 3 — Bedtime Complex Protein-Carb Snack: Prescribe 1 slice of whole-grain toast with 1 tablespoon of natural unsweetened peanut butter plus 1 boiled egg at 10:00 PM. This provides slow, sustained amino acid and complex starch flux that suppresses nocturnal hepatic gluconeogenesis, bringing morning fasting glucose to 88 mg/dL [4].',
              'ব্যবস্থা ৩ — রাতে ঘুমানোর আগের বিশেষ নাশতা: রাত ১০টায় ১ টুকরো লাল আটার টোস্টের ওপর ১ চামচ পিনাট বাটার এবং ১টি সিদ্ধ ডিম দেওয়া হলো। এই ধীরগতির জটিল পুষ্টি সারারাত লিভারের সুগার তৈরি আটকে রাখে, যার ফলে সকালে খালি পেটের সুগার নেমে চমৎকার ৮৮ মিগ্রা/ডেসিলিটারে চলে আসে [4]।',
            ),
            l(
              'Intervention 4 — 15-Minute Postprandial Walk: A brisk 15-minute walk immediately following breakfast activates GLUT4 transporters via skeletal muscle contraction, bringing 1-hour post-breakfast glucose down to 124 mg/dL [1, 4].',
              'ব্যবস্থা ৪ — নাশতার পর ১৫ মিনিট হাঁটা: সকালের নাশতার পরপরই ধীরেসুস্থে ১৫ মিনিট হাঁটার নির্দেশ দেওয়া হলো, যা পেশিকোষের GLUT4 চ্যানেল সরাসরি খুলে দিয়ে ১ ঘণ্টা পরের সুগার কমিয়ে ১২৪ মিগ্রা/ডেসিলিটারে নামিয়ে আনে [1, 4]।',
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      {
        id: 'toc-foundation-t1d-t2d-gdm',
        label: l('1. The Three Faces of Diabetes', '১. ডায়াবেটিসের তিনটি রূপ ও শ্রেণিবিভাগ'),
        sectionId: 'foundation-t1d-t2d-gdm-roots',
      },
      {
        id: 'toc-foundation-factory-analogy',
        label: l('2. Factory and Jammed Locks Analogy', '২. চাবির কারখানা ও তেল চিটচিটে তালার উপমা'),
        sectionId: 'foundation-factory-locks-analogy',
      },
      {
        id: 'toc-foundation-plate-method',
        label: l('3. The Diabetes Plate Method', '৩. ডায়াবেটিস প্লেট পদ্ধতি'),
        sectionId: 'foundation-plate-method-practical',
      },
      {
        id: 'toc-foundation-rule-of-15',
        label: l('4. Rule of 15 & Hypoglycemia', '৪. ১৫-র নিয়ম ও লো সুগারের জরুরি চিকিৎসা'),
        sectionId: 'foundation-hypoglycemia-rule15',
      },
      {
        id: 'toc-academic-macronutrients',
        label: l('5. ADA Macronutrient Targets', '৫. ম্যাক্রোনিউট্রিয়েন্টের বিজ্ঞানসম্মত অনুপাত'),
        sectionId: 'academic-ada-macronutrient-architecture',
      },
      {
        id: 'toc-academic-direct-remission',
        label: l('6. DiRECT Trial & Remission', '৬. ডায়াবেটিস নিরাময়ে DiRECT ট্রায়াল'),
        sectionId: 'academic-direct-trial-remission',
      },
      {
        id: 'toc-academic-gdm-carbs',
        label: l('7. Gestational Diabetes & 175g Carbs', '৭. গর্ভকালীন ডায়াবেটিস ও ১৭৫ গ্রাম শর্করা'),
        sectionId: 'academic-gdm-targets-ketonemia',
      },
      {
        id: 'toc-academic-exercise-hypo',
        label: l('8. Exercise & Late Hypoglycemia', '৮. ব্যায়াম ও দেরিতে লো সুগারের ঝুঁকি'),
        sectionId: 'academic-exercise-hypoglycemia-mechanics',
      },
      {
        id: 'toc-advanced-glucolipotoxicity',
        label: l('9. Glucolipotoxicity & ER Stress', '৯. গ্লুকোলিপোটক্সিসিটি ও আণবিক চাপ'),
        sectionId: 'advanced-glucolipotoxicity-er-stress',
      },
      {
        id: 'toc-advanced-twin-cycle',
        label: l('10. Roy Taylor’s Twin Cycle', '১০. রয় টেলরের টুইন সাইকেল তত্ত্ব'),
        sectionId: 'advanced-twin-cycle-hypothesis',
      },
      {
        id: 'toc-advanced-dedifferentiation',
        label: l('11. Beta-Cell Dedifferentiation', '১১. বিটা কোষের রূপান্তর বনাম মৃত্যু'),
        sectionId: 'advanced-betacell-dedifferentiation',
      },
      {
        id: 'toc-advanced-case-study',
        label: l('12. GDM Clinical Case Study', '১২. গর্ভকালীন ডায়াবেটিসের ক্লিনিক্যাল সমাধান'),
        sectionId: 'advanced-gdm-dawn-case-study',
      },
    ],
    terms: [
      {
        term: l('Glucolipotoxicity', 'গ্লুকোলিপোটক্সিসিটি'),
        definition: l(
          'The combined toxic effect of chronic hyperglycemia and elevated circulating free fatty acids, inducing endoplasmic reticulum stress, oxidative injury, and dysfunction in pancreatic beta cells.',
          'রক্তে দীর্ঘকাল অতিরিক্ত চিনি ও অতিরিক্ত চর্বির সহাবস্থানের ফলে অগ্ন্যাশয়ের বিটা কোষের ওপর তৈরি হওয়া মারাত্মক বিষাক্ত ও ধ্বংসাত্মক চাপ।'
        ),
      },
      {
        term: l('Twin Cycle Hypothesis', 'টুইন সাইকেল হাইপোথিসিস'),
        definition: l(
          'Professor Roy Taylor’s mechanistic framework demonstrating that chronic calorie surplus drives hepatic steatosis (liver cycle), which floods the pancreas with fat (pancreatic cycle), triggering beta-cell dedifferentiation and Type 2 diabetes.',
          'প্রফেসর রয় টেলরের উদ্ভাবিত বৈজ্ঞানিক তত্ত্ব, যা দেখায় কীভাবে লিভারের অতিরিক্ত চর্বি অগ্ন্যাশয়কে গ্রাস করে টাইপ ২ ডায়াবেটিস সৃষ্টি করে এবং কীভাবে ওজন কমিয়ে একে নিরাময় করা যায়।'
        ),
      },
      {
        term: l('Beta-Cell Dedifferentiation', 'বিটা কোষের ডি-ডিফারেনসিয়েশন'),
        definition: l(
          'The regression of mature insulin-secreting beta cells into non-functional, progenitor-like states through loss of master transcription factors (PDX1, MafA), a reversible condition distinct from cell death.',
          'বিষাক্ত চর্বির প্রভাবে পরিণত বিটা কোষের ঘুমন্ত বা অপরিণত কোষে রূপান্তর; এরা মারা যায় না, বরং ওজন কমে চর্বি দূর হলে পুনরায় ইনসুলিন তৈরি করতে পারে।'
        ),
      },
      {
        term: l('Rule of 15', '১৫-র নিয়ম (Rule of 15)'),
        definition: l(
          'The clinical resuscitation protocol for conscious hypoglycemia: administer 15 grams of pure fast-acting carbohydrate, wait 15 minutes, recheck blood glucose, and repeat if reading remains below 70 mg/dL.',
          'হঠাৎ রক্তে সুগার কমে গেলে জীবনরক্ষার আন্তর্জাতিক নিয়ম: ১৫ গ্রাম চর্বিমুক্ত দ্রুত শোষণযোগ্য চিনি খাওয়া, ১৫ মিনিট অপেক্ষা করা এবং সুগার স্বাভাবিক না হওয়া পর্যন্ত পর্যবেক্ষণ করা।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Worked Case: Formulating a 1,800 kcal Gestational Diabetes Meal Architecture (175g Carbs)',
          'হাতে-কলমে হিসাব: গর্ভকালীন ডায়াবেটিসে ১,৮০০ ক্যালোরির সুষম খাদ্যতালিকা (১৭৫ গ্রাম শর্করা)'
        ),
        steps: [
          l(
            'Step 1: Clinical Prescription Targets: Total daily energy = 1,800 kcal. Minimum carbohydrate safety floor = 175g (39% of total calories). Protein target = 90g (20% of total calories = 1.3 g/kg for a 70 kg pregnant woman). Remainder as healthy fat = 80g (40% of calories).',
            'ধাপ ১: লক্ষ্যমাত্রা নির্ধারণ: দৈনিক মোট শক্তি = ১,৮০০ ক্যালোরি। গর্ভের শিশুর সুরক্ষায় ন্যূনতম শর্করা = ১৭৫ গ্রাম (মোট শক্তির ৩৯%)। প্রোটিন = ৯০ গ্রাম (২০% বা গর্ভবতী নারীর জন্য ১.৩ গ্রাম/কেজি)। অবশিষ্ট স্বাস্থ্যকর ফ্যাট = ৮০ গ্রাম (৪০%)।'
          ),
          l(
            'Step 2: Meal Distribution of 175g Carbohydrate: Distribute across 6 eating episodes: Breakfast (20g), Mid-morning snack (25g), Lunch (45g), Afternoon snack (25g), Dinner (40g), Bedtime snack (20g). Total = 175g.',
            'ধাপ ২: ১৭৫ গ্রাম শর্করার ভাগ: সারাদিনে ৬টি ভাগে ভাগ করা: সকালের নাশতা (২০ গ্রাম), সকালের মাঝের নাশতা (২৫ গ্রাম), দুপুরের খাবার (৪৫ গ্রাম), বিকেলের নাশতা (২৫ গ্রাম), রাতের খাবার (৪০ গ্রাম) এবং ঘুমানোর আগে (২০ গ্রাম)। মোট = ১৭৫ গ্রাম।'
          ),
          l(
            'Step 3: Breakfast Formulation (Restricted to 20g Carbs): 1 medium whole-wheat chapati (15g carbs) + 2 whole eggs scrambled in olive oil (1g carb, 13g protein) + 1 cup steamed green spinach (4g carbs, 2g fiber) + unsweetened tea. Result: Extremely low glycemic load, zero morning glucose spike.',
            'ধাপ ৩: সকালের নাশতা তৈরি (২০ গ্রাম শর্করায় সীমিত): ১টি মাঝারি লাল আটার রুটি (১৫ গ্রাম শর্করা) + অলিভ অয়েলে তৈরি ২টি ডিমের স্ক্র্যাম্বল (১ গ্রাম শর্করা, ১৩ গ্রাম প্রোটিন) + ১ বাটি ভাপানো পালং শাক (৪ গ্রাম শর্করা, ২ গ্রাম আঁশ) + চিনি ছাড়া লাল চা। এর ফলে সকালে ব্লাড সুগার স্পাইকের কোনো ঝুঁকি থাকে না।'
          ),
          l(
            'Step 4: Bedtime Snack Formulation: 1 slice 100% whole-grain bread (12g carbs) with 1 tablespoon natural peanut butter (4g carbs, 4g protein, 8g fat) + 1/2 cup unsweetened soy milk (4g carbs, 4g protein). Total carbs = 20g. Suppresses nocturnal hepatic gluconeogenesis and guarantees waking fasting glucose <= 95 mg/dL.',
            'ধাপ ৪: রাতের শেষ নাশতা: ১ টুকরো লাল আটার ব্রেড (১২ গ্রাম শর্করা) + ১ টেবিল চামচ খাঁটি পিনাট বাটার (৪ গ্রাম শর্করা, ৪ গ্রাম প্রোটিন, ৮ গ্রাম ফ্যাট) + আধা কাপ সুগার ছাড়া সয়া দুধ (৪ গ্রাম শর্করা)। মোট শর্করা = ২০ গ্রাম। এটি সারারাত লিভারের সুগার তৈরি আটকে রেখে সকালে খালি পেটের সুগার ৯৫-এর নিচে রাখা নিশ্চিত করে।'
          ),
        ],
        conclusion: l(
          'This meal plan satisfies the 175g non-negotiable fetal carbohydrate floor to prevent neurotoxic ketonemia while maintaining all maternal postprandial glucose levels safely within ACOG targets.',
          'এই খাদ্যতালিকাটি গর্ভের সন্তানের মস্তিষ্কের সুরক্ষায় ১৭৫ গ্রাম শর্করা নিশ্চিত করার পাশাপাশি মায়ের ব্লাড সুগার কঠোর লক্ষ্যমাত্রার ভেতরে স্বাভাবিক রাখে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why are pregnant women with Gestational Diabetes strictly prohibited from adopting a ketogenic (very low carbohydrate) diet?',
          'গর্ভকালীন ডায়াবেটিসে আক্রান্ত মায়েদের কিটোজেনিক বা অতি-কম শর্করার ডায়েট মেনে চলা কেন সম্পূর্ণ নিষিদ্ধ?'
        ),
        answer: l(
          'Severe carbohydrate restriction forces the maternal body into ketosis, producing high levels of acetoacetate and beta-hydroxybutyrate. These ketone bodies freely cross the placenta into fetal circulation, where maternal ketonemia has been shown to cause fetal central nervous system toxicity, impaired neurodevelopment, and lower child IQ. A minimum of 175 grams of carbohydrate per day is medically mandated to protect fetal cerebral growth.',
          'অতিরিক্ত শর্করা কমিয়ে দিলে মায়ের শরীরে কিটোন বডি তৈরি হয় যা প্লাসেন্টা ভেদ করে সরাসরি অনাগত শিশুর কাছে চলে যায়। গর্ভস্থ শিশুর অপরিপক্ক মস্তিষ্কের জন্য কিটোন ক্ষতিকর এবং এটি সন্তানের বুদ্ধিমত্তা ও মানসিক বিকাশে দীর্ঘমেয়াদী ব্যাঘাত ঘটায়। এজন্যই গর্ভকালীন সময়ে প্রতিদিন কমপক্ষে ১৭৫ গ্রাম স্বাস্থ্যকর শর্করা খাওয়া চিকিৎসাবিজ্ঞানে বাধ্যতামূলক করা হয়েছে।'
        ),
      },
      {
        question: l(
          'According to Roy Taylor’s Twin Cycle Hypothesis, what is the exact molecular sequence that restores fasting blood glucose within 7 days of starting hypocaloric MNT?',
          'রয় টেলরের টুইন সাইকেল তত্ত্ব অনুসারে, কম ক্যালোরির সঠিক খাবার শুরু করার মাত্র ৭ দিনের মধ্যে খালি পেটের সুগার কীভাবে স্বাভাবিক হয়ে যায়?'
        ),
        answer: l(
          'Severe negative energy balance immediately forces the liver to mobilize stored triglycerides for fuel. Intrahepatic fat drops by approximately 30% within 7 days. This sudden loss of liver fat eliminates hepatic insulin resistance, restoring the liver’s ability to respond to basal insulin and shutting off excessive overnight gluconeogenesis, which normalizes fasting plasma glucose even before significant total body weight loss occurs.',
          'কম ক্যালোরির খাবার শুরু করলেই লিভার নিজের ভেতর জমে থাকা অতিরিক্ত চর্বি জ্বালানি হিসেবে পোড়াতে শুরু করে। ফলে মাত্র ৭ দিনের মধ্যে লিভারের চর্বি প্রায় ৩০% কমে যায়। এতে লিভারের ইনসুলিন রেজিস্ট্যান্স দূর হয় এবং লিভার রাতে ঘুমানোর সময় রক্তে বাড়তি চিনি পাঠানো বন্ধ করে দেয়; ফলে শরীরের বাহ্যিক ওজন বেশি কমার আগেই খালি পেটের সুগার স্বাভাবিক হয়ে আসে।'
        ),
      },
    ],
  },
}

export const dietetics16DiabetesMntLesson = dietetics16Lesson

