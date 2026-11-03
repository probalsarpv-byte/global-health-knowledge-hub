import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics05References: LessonReference[] = [
  {
    id: 'ref-fuhrman-albumin-2004',
    authors: 'Fuhrman MP, Charney P, Mueller CM',
    title: 'Hepatic Proteins and Nutrition Assessment',
    organization: 'Journal of the American Dietetic Association',
    year: 2004,
    url: 'https://jandonline.org/article/S0002-8223(04)00823-5/fulltext',
    doi: '10.1016/j.jada.2004.05.213',
  },
  {
    id: 'ref-evans-albumin-myth',
    authors: 'Evans DC, Corkins MR, Malone A, et al.',
    title: 'The Use of Visceral Proteins as Nutrition Markers: An ASPEN Position Paper',
    organization: 'Nutrition in Clinical Practice',
    year: 2021,
    url: 'https://aspenjournals.onlinelibrary.wiley.com/doi/10.1002/ncp.10588',
    doi: '10.1002/ncp.10588',
  },
  {
    id: 'ref-gabay-acute-phase',
    authors: 'Gabay C, Kushner I',
    title: 'Acute-Phase Proteins and Other Systemic Responses to Inflammation',
    organization: 'New England Journal of Medicine',
    year: 1999,
    url: 'https://www.nejm.org/doi/full/10.1056/NEJM199902113400607',
    doi: '10.1056/NEJM199902113400607',
  },
  {
    id: 'ref-jensen-inflammation-malnutrition',
    authors: 'Jensen GL, Hsiao PY, Wheeler D',
    title: 'Adult Systemic Inflammation and Malnutrition: An ASPEN/AND Conceptual Framework',
    organization: 'Journal of Parenteral and Enteral Nutrition',
    year: 2012,
    url: 'https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607112440306',
    doi: '10.1177/0148607112440306',
  },
  {
    id: 'ref-keys-minnesota-starvation',
    authors: 'Keys A, Brožek J, Henschel A, Mickelsen O, Taylor HL',
    title: 'The Biology of Human Starvation (Vols. 1–2)',
    organization: 'University of Minnesota Press',
    year: 1950,
    url: 'https://www.upress.umn.edu/book-division/books/the-biology-of-human-starvation',
  },
]

export const dietetics05LaboratoryBiomarkersLesson: LessonTopic = {
  id: 'topic.dietetics.laboratory-biomarkers',
  slug: 'laboratory-biomarkers-acute-phase-proteins',
  title: l(
    '05 · Laboratory Diagnostics: Acute-Phase Reactants vs True Nutritional Indices',
    '০৫ · গবেষণাগার নির্ণয়: একিউট-ফেজ প্রোটিন বনাম প্রকৃত পুষ্টি সূচক'
  ),
  summary: l(
    'A scientific deconstruction of visceral protein diagnostics: understanding cytokine-mediated hepatic reprioritization, distinguishing acute-phase reactants (CRP, albumin, prealbumin) from somatic protein mass, interpreting comprehensive metabolic panels, and calculating critical electrolyte corrections.',
    'ভিসারাল প্রোটিন রোগনির্ণয়ের আধুনিক বিজ্ঞান: সাইটোকাইনজনিত যকৃতের প্রোটিন সংশ্লেষণ পরিবর্তন, একিউট-ফেজ প্রোটিন (সিআরপি, অ্যালবুমিন, প্রিঅ্যালবুমিন) বনাম প্রকৃত মাংসপেশির পার্থক্যের বিশ্লেষণ এবং রক্তের ইলেক্ট্রোলাইট ও ক্যালসিয়ামের গাণিতিক সংশোধন।'
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
      'Explain the molecular mechanism of hepatic protein reprioritization driven by IL-6 and TNF-alpha during acute and chronic inflammation.',
      'তীব্র ও দীর্ঘমেয়াদী প্রদাহে IL-6 এবং TNF-alpha সাইটোকাইনের প্রভাবে যকৃতে প্রোটিন তৈরির গতিপথ পরিবর্তনের আণবিক প্রক্রিয়া ব্যাখ্যা করা।'
    ),
    l(
      'Demonstrate why serum albumin and prealbumin are markers of inflammatory severity rather than nutritional intake or feeding adequacy.',
      'রক্তের অ্যালবুমিন ও প্রিঅ্যালবুমিন কেন খাদ্য গ্রহণের নির্দেশক নয় বরং প্রদাহের তীব্রতার মার্কার তা বৈজ্ঞানিকভাবে প্রমাণ করা।'
    ),
    l(
      'Differentiate positive acute-phase reactants (CRP, ferritin, fibrinogen) from negative acute-phase reactants (albumin, prealbumin, transferrin).',
      'পজিটিভ একিউট-ফেজ প্রোটিন (সিআরপি, ফেরিটিন, ফাইব্রিনোজেন) এবং নেগেটিভ একিউট-ফেজ প্রোটিনের (অ্যালবুমিন, প্রিঅ্যালবুমিন) পার্থক্য নিরূপণ করা।'
    ),
    l(
      'Calculate Corrected Calcium in the presence of hypoalbuminemia and Corrected Sodium in acute hyperglycemia.',
      'অ্যালবুমিন কমে গেলে প্রকৃত ক্যালসিয়াম এবং রক্তে গ্লুকোজ বাড়লে প্রকৃত সোডিয়ামের পরিমাণ নির্ভুল সমীকরণে নির্ণয় করা।'
    ),
    l(
      'Interpret the BUN-to-creatinine ratio to differentiate pre-renal hypovolemic dehydration from intrinsic acute kidney injury.',
      'রক্তের BUN ও ক্রিয়েটিনিনের অনুপাত বিশ্লেষণ করে পানিশূন্যতাজনিত সমস্যা বনাম কিডনির ভেতরের ক্ষতি সঠিকভাবে পৃথক করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A molecular pathway diagram of hepatic protein synthesis during systemic inflammation: Tissue injury triggers macrophage release of IL-6, TNF-alpha, and IL-1beta; these cytokines bind hepatocyte surface receptors, up-regulating positive acute-phase proteins (C-reactive protein, ferritin) by up to 1000-fold while transcriptionally down-regulating negative acute-phase proteins (albumin, prealbumin, transferrin), simultaneously increasing endothelial capillary permeability.',
      'প্রদাহের সময় যকৃতে প্রোটিন তৈরির আণবিক নকশা: টিস্যু ক্ষতিগ্রস্ত হলে ম্যাক্রোফেজ থেকে IL-6 ও TNF-alpha নিঃসৃত হয়; এই সাইটোকাইনগুলো যকৃতে পজিটিভ প্রোটিন (সিআরপি, ফেরিটিন) তৈরি ১০০০ গুণ বাড়িয়ে দেয় এবং নেগেটিভ প্রোটিন (অ্যালবুমিন, প্রিঅ্যালবুমিন) তৈরি বন্ধ করে দেয়, একই সাথে রক্তনালী থেকে পানি চুইয়ে বের হওয়ার মাত্রা বাড়িয়ে দেয়।'
    ),
    steps: [
      l(
        'Step 1: Inflammatory Trigger. Sepsis, trauma, surgery, or active malignancy stimulates tissue macrophages to release pro-inflammatory cytokines: Interleukin-6 (IL-6), Tumor Necrosis Factor-alpha (TNF-alpha), and Interleukin-1beta (IL-1beta).',
        'ধাপ ১: প্রদাহের সূচনা: সেপসিস, আঘাত, অস্ত্রোপচার বা ক্যান্সারের কারণে ম্যাক্রোফেজ থেকে IL-6, TNF-alpha ও IL-1beta সাইটোকাইন রক্তে ছড়িয়ে পড়ে।'
      ),
      l(
        'Step 2: Hepatic Gene Reprioritization. Cytokines activate STAT3 and NF-kappaB transcription factors in hepatocytes, reprioritizing amino acid resources toward host defense and coagulation proteins.',
        'ধাপ ২: যকৃতের জিনের গতিপথ পরিবর্তন: সাইটোকাইনগুলো যকৃতের কোষে প্রবেশ করে রোগ প্রতিরোধ ও রক্ত জমাট বাঁধার প্রয়োজনীয় প্রোটিন তৈরির জিন সক্রিয় করে।'
      ),
      l(
        'Step 3: Positive Reactants Surge. Synthesis of C-Reactive Protein (CRP) surges by 100- to 1,000-fold; ferritin and fibrinogen concentrations rise dramatically.',
        'ধাপ ৩: পজিটিভ প্রোটিনের বিস্ফোরণ: সি-রিঅ্যাক্টিভ প্রোটিন (CRP) ১০০ থেকে ১০০০ গুণ বৃদ্ধি পায়; ফেরিটিন ও ফাইব্রিনোজেনের মাত্রাও রক্তে দ্রুত বেড়ে যায়।'
      ),
      l(
        'Step 4: Negative Reactants Plummet. Transcription of albumin, prealbumin (transthyretin), and transferrin is profoundly suppressed; concurrent capillary permeability leaks albumin into the interstitium, driving serum levels downward.',
        'ধাপ ৪: নেগেটিভ প্রোটিনের পতন: অ্যালবুমিন ও প্রিঅ্যালবুমিন তৈরি প্রায় বন্ধ হয়ে যায় এবং রক্তনালীর ফুটো বড় হয়ে অ্যালবুমিন মাংসপেশির ফাঁকে চলে যায়, ফলে রক্তে অ্যালবুমিন দ্রুত হ্রাস পায়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 55-year-old male with severe acute pancreatitis is admitted to the ICU. On day 2, his laboratory profile shows: Serum Albumin = 1.8 g/dL (normal 3.5–5.0), Serum Prealbumin = 6 mg/dL (normal 15–36), and Serum C-Reactive Protein (CRP) = 195 mg/L (normal < 5.0). Total serum calcium is reported as 7.4 mg/dL. Which of the following is the scientifically accurate clinical interpretation of these results?',
      'তীব্র প্যানক্রিয়াটাইটিসে আক্রান্ত ৫৫ বছর বয়সী এক পুরুষ আইসিইউতে ভর্তি হন। ২য় দিনে তার রক্ত পরীক্ষায় দেখা গেল: অ্যালবুমিন = ১.৮ g/dL (স্বাভাবিক ৩.৫-৫.০), প্রিঅ্যালবুমিন = ৬ mg/dL (স্বাভাবিক ১৫-৩৬), এবং সিআরপি = ১৯৫ mg/L (স্বাভাবিক < ৫.০)। রক্তের মোট ক্যালসিয়াম ৭.৪ mg/dL। এই ফলাফলের সবচেয়ে বিজ্ঞানসম্মত ব্যাখ্যা কোনটি?'
    ),
    options: [
      l(
        'The patient has severe dietary protein malnutrition caused by fasting over the past 48 hours; intravenous albumin infusions must be started to restore nutritional status.',
        'গত ৪৮ ঘণ্টা না খেয়ে থাকার কারণে রোগীর চরম প্রোটিন অপুষ্টি হয়েছে; পুষ্টি ফিরিয়ে আনতে অবিলম্বে শিরাপথে অ্যালবুমিন ইনজেকশন দিতে হবে।'
      ),
      l(
        'The low albumin and prealbumin reflect cytokine-driven negative acute-phase response and endothelial capillary leakage triggered by severe inflammation (CRP = 195 mg/L); corrected calcium is actually normal at 9.16 mg/dL ($7.4 + 0.8 \\times [4.0 - 1.8]$).',
        'কম অ্যালবুমিন ও প্রিঅ্যালবুমিন তীব্র প্রদাহের (সিআরপি ১৯৫ mg/L) কারণে যকৃতের সংশ্লেষণ হ্রাস ও রক্তনালী থেকে লিক হওয়ার ফল; এবং রোগীর প্রকৃত সমন্বিত ক্যালসিয়াম আসলে ৯.১৬ mg/dL ($৭.৪ + ০.৮ \\times [৪.০ - ১.৮]$) যা সম্পূর্ণ স্বাভাবিক।'
      ),
      l(
        'The low prealbumin proves that nutritional tube feeding has failed and all feedings must be halted immediately.',
        'কম প্রিঅ্যালবুমিন প্রমাণ করে যে টিউব ফিডিং ব্যর্থ হয়েছে এবং অবিলম্বে সব ধরনের খাবার বন্ধ করতে হবে।'
      ),
      l(
        'Serum albumin falls only when liver cirrhosis is present, indicating unrecognized acute hepatic failure.',
        'অ্যালবুমিন কেবল লিভার সিরোসিস হলেই কমে, যা রোগীর অলক্ষ্যে লিভার ফেইলিউর নির্দেশ করে।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'Option 2 represents modern clinical evidence. In the presence of profound systemic inflammation (CRP = 195 mg/L), interleukin-6 down-regulates hepatic synthesis of negative acute-phase proteins (albumin and prealbumin) while capillary permeability accelerates interstitial escape. Albumin cannot diagnose nutritional starvation in this setting. Furthermore, because ~40% of calcium is bound to albumin, hypoalbuminemia falsely lowers total calcium; calculating Corrected Calcium ($7.4 + 0.8 \\times [4.0 - 1.8] = 9.16\\text{ mg/dL}$) confirms that active ionized calcium is entirely physiological.',
      '২ নম্বর বিকল্পটি আধুনিক চিকিৎসার সঠিক নির্দেশক। তীব্র প্রদাহের সময় (সিআরপি ১৯৫ mg/L) IL-6 সাইটোকাইন যকৃতে অ্যালবুমিন ও প্রিঅ্যালবুমিন তৈরি বন্ধ করে দেয় এবং রক্তনালী থেকে তা টিস্যুতে ছড়িয়ে পড়ে। তাই এটি প্রোটিন ঘাটতির প্রমাণ নয়। এছাড়া রক্তের প্রায় ৪০% ক্যালসিয়াম অ্যালবুমিনের সাথে যুক্ত থাকে; তাই অ্যালবুমিন কমলে মোট ক্যালসিয়াম কম দেখায়। সমন্বিত ক্যালসিয়াম হিসাব করলে ($৭.৪ + ০.৮ \\times [৪.০ - ১.৮] = ৯.১৬\text{ mg/dL}$) দেখা যায় রোগীর প্রকৃত ক্যালসিয়াম স্বাভাবিক রয়েছে।'
    ),
  },
  evidenceBySection: {
    'sec-blood-tests-intro': ['ref-fuhrman-albumin-2004', 'ref-evans-albumin-myth'],
    'sec-positive-vs-negative': ['ref-gabay-acute-phase', 'ref-jensen-inflammation-malnutrition'],
    'sec-how-to-diagnose': ['ref-evans-albumin-myth', 'ref-jensen-inflammation-malnutrition'],
    'sec-visceral-protein-paradigm': ['ref-fuhrman-albumin-2004', 'ref-evans-albumin-myth'],
    'sec-acute-phase-biochem': ['ref-gabay-acute-phase', 'ref-jensen-inflammation-malnutrition'],
    'sec-starvation-evidence': ['ref-keys-minnesota-starvation', 'ref-evans-albumin-myth'],
    'sec-electrolyte-corrections': ['ref-fuhrman-albumin-2004', 'ref-jensen-inflammation-malnutrition'],
  },
  references: dietetics05References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-blood-tests-intro',
          heading: l('1. The Myth of the "Nutrition Blood Test"', '১. "পুষ্টির রক্ত পরীক্ষা" সম্পর্কিত ভুল ধারণা'),
          paragraphs: [
            l(
              'For decades, many doctors and nurses believed that measuring **serum albumin** in the blood was a direct test of how well a patient was eating [1, 2]. If a patient’s albumin was low, they assumed the patient was starving for protein. If albumin was normal, they assumed the patient was well-nourished.',
              'কয়েক দশক ধরে অনেক চিকিৎসক ও নার্স বিশ্বাস করতেন যে রক্তে **অ্যালবুমিন** মাপলেই বোঝা যায় রোগী কতটা ভালো খাচ্ছেন [1, 2]। রক্তে অ্যালবুমিন কম থাকলে ধরে নেওয়া হতো রোগী প্রোটিনের অভাবে ভুগছেন। আর অ্যালবুমিন স্বাভাবিক থাকলে ভাবা হতো রোগী পুরোপুরি সুস্থ।'
            ),
            l(
              'Modern biochemical science has completely disproven this myth [2]. Albumin and prealbumin do **not** reflect how much protein you ate yesterday or last week. Instead, they are powerful markers of **systemic inflammation, illness, and physical trauma** [3]. When the human body is fighting an infection, healing from major surgery, or battling cancer, albumin drops like a stone—even if the patient is fed massive amounts of protein.',
              'আধুনিক চিকিৎসাবিজ্ঞান এই ভুল ধারণাকে সম্পূর্ণ ভুল প্রমাণ করেছে [2]। অ্যালবুমিন বা প্রিঅ্যালবুমিন কখনোই আপনি গতকাল বা গত সপ্তাহে কতটা প্রোটিন খেয়েছেন তা নির্দেশ করে না। বরং এগুলো হলো **শরীরের ভেতরের প্রদাহ, সংক্রমণ ও আঘাতের মার্কার** [3]। শরীর যখন কোনো ইনফেকশন বা বড় অস্ত্রোপচারের বিরুদ্ধে লড়াই করে, তখন রোগীকে প্রচুর প্রোটিন খাওয়ালেও রক্তে অ্যালবুমিন দ্রুত কমে যায়।'
            ),
          ],
        },
        {
          id: 'sec-positive-vs-negative',
          heading: l('2. Positive vs Negative Acute-Phase Proteins', '২. পজিটিভ বনাম নেগেটিভ একিউট-ফেজ প্রোটিন'),
          paragraphs: [
            l(
              'When you suffer an injury or severe infection, your immune system releases chemical alarms called **cytokines** [3]. These cytokines travel to your liver and command it to change its factory production:',
              'শরীরে আঘাত লাগলে বা মারাত্মক সংক্রমণ হলে রোগ প্রতিরোধ ব্যবস্থা **সাইটোকাইন** নামের রাসায়নিক সংকেত পাঠায় [3]। এই সাইটোকাইনগুলো যকৃতে গিয়ে প্রোটিন তৈরির কারখানায় জরুরি পরিবর্তন আনে:'
            ),
            l(
              '• **Positive Acute-Phase Proteins (They Shoot Up):** The liver ramps up proteins needed for immediate survival, clotting, and defense. The most famous is **C-Reactive Protein (CRP)**, which can rise 100-fold within 24 hours. Ferritin (iron storage) also surges.\n• **Negative Acute-Phase Proteins (They Plummet Down):** To conserve amino acids for defense, the liver temporarily halts production of maintenance proteins. **Albumin**, **prealbumin**, and **transferrin** plunge downward.',
              '• **পজিটিভ একিউট-ফেজ প্রোটিন (এগুলো দ্রুত বাড়ে):** শরীর বাঁচানোর জন্য যকৃত প্রতিরক্ষা ও রক্ত জমাট বাঁধার প্রোটিন তৈরি বাড়িয়ে দেয়। এর মধ্যে সবচেয়ে পরিচিত হলো **সি-রিঅ্যাক্টিভ প্রোটিন (CRP)**, যা ২৪ ঘণ্টার মধ্যে ১০০ গুণ পর্যন্ত বেড়ে যেতে পারে। ফেরিটিনের মাত্রাও অনেক বাড়ে।\n• **নেগেটিভ একিউট-ফেজ প্রোটিন (এগুলো দ্রুত কমে):** প্রতিরক্ষামূলক প্রোটিন তৈরির জন্য কাঁচামাল বা অ্যামিনো অ্যাসিড বাঁচাতে যকৃত সাধারণ প্রোটিন তৈরি সাময়িকভাবে বন্ধ করে দেয়। ফলে **অ্যালবুমিন**, **প্রিঅ্যালবুমিন** ও **ট্রান্সফারিন** রক্তে দ্রুত নিচে নেমে যায়।'
            ),
          ],
        },
        {
          id: 'sec-how-to-diagnose',
          heading: l('3. How Do We Actually Diagnose Malnutrition?', '৩. তাহলে কীভাবে অপুষ্টি সঠিকভাবে নির্ণয় করা হয়?'),
          paragraphs: [
            l(
              'Because no single blood test can diagnose malnutrition, clinical dietitians never rely on albumin alone [2, 4]. Instead, we look at the whole clinical picture: we perform hands-on physical exams (NFPE) to see if muscle and fat have wasted away, track involuntary weight loss over time, and calculate actual daily calorie and protein intake.',
              'যেহেতু রক্ত পরীক্ষার একটি মাত্র উপাদান দিয়ে অপুষ্টি মাপা সম্ভব নয়, তাই দক্ষ পুষ্টিবিদরা কখনোই শুধু অ্যালবুমিনের ওপর নির্ভর করেন না [2, 4]। বরং তারা রোগীর সামগ্রিক অবস্থা দেখেন: হাত দিয়ে শারীরিক পরীক্ষা (NFPE) করে পেশি ও চর্বি ক্ষয় হয়েছে কি না দেখেন, ওজন হ্রাসের গতি লক্ষ্য করেন এবং প্রতিদিন রোগী কতটা ক্যালোরি ও প্রোটিন খাচ্ছেন তা হিসাব করেন।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-visceral-protein-paradigm',
          heading: l('1. The Scientific Paradigm Shift: Why Albumin Is Not a Nutrition Marker', '১. বৈজ্ঞানিক সত্যের রূপান্তর: অ্যালবুমিন কেন পুষ্টির নির্দেশক নয়?'),
          paragraphs: [
            l(
              'The classification of serum albumin and prealbumin (transthyretin) as markers of nutritional status has been definitively rejected by consensus statements from ASPEN, ESPEN, and the Academy of Nutrition and Dietetics [1, 2]. Serum albumin possesses a lengthy biological half-life ($t_{1/2} \\approx 20\\text{ days}$) and an enormous extravascular distribution volume (60% of total body albumin resides in interstitial spaces), rendering it biologically incapable of reflecting short-term dietary substrate fluctuations.',
              'রক্তের অ্যালবুমিন ও প্রিঅ্যালবুমিনকে পুষ্টির নির্দেশক হিসেবে বিবেচনা করার বহু পুরোনো ধারণা আন্তর্জাতিক অ্যাসপেন (ASPEN), এসপেন (ESPEN) এবং অ্যাকাডেমি অব নিউট্রিশন অ্যান্ড ডায়েটেটিক্স সর্বসম্মতিক্রমে পুরোপুরি প্রত্যাখ্যান করেছে [1, 2]। রক্তে অ্যালবুমিনের অর্ধায়ু অনেক দীর্ঘ ($t_{1/2} \\approx ২০\\text{ দিন}$) এবং এর ৬০% রক্তনালীর বাইরে টিস্যুর ফাঁকে থাকে, ফলে এটি প্রতিদিনের খাদ্যাভ্যাসের কোনো তাৎক্ষণিক তথ্য দিতে শারীরবৃত্তীয়ভাবে সম্পূর্ণ অক্ষম।'
            ),
            l(
              'Prealbumin, despite possessing a shorter half-life ($t_{1/2} \\approx 2\\text{ days}$), is equally confounded by inflammatory kinetics [1]. Both proteins are predominantly regulated by hepatic gene transcription, vascular endothelial permeability, and catabolic degradation rates—all of which are dictated by systemic neuroendocrine and cytokine stress, not nutritional intake.',
              'প্রিঅ্যালবুমিনের অর্ধায়ু কম ($t_{1/2} \\approx ২\\text{ দিন}$) হওয়া সত্ত্বেও এটিও একইভাবে প্রদাহ দ্বারা নিয়ন্ত্রিত হয় [1]। এই দুটি প্রোটিনের মাত্রা যকৃতের জিন নিয়ন্ত্রণ, রক্তনালীর ফুটোর ব্যাস এবং ভেঙে ফেলার গতির ওপর নির্ভর করে—যা মূলত প্রদাহজনিত হরমোন ও সাইটোকাইন দ্বারা পরিচালিত হয়, খাবারের মাধ্যমে নয়।'
            ),
          ],
        },
        {
          id: 'sec-acute-phase-biochem',
          heading: l('2. Cytokine-Mediated Hepatic Reprioritization and Capillary Leak', '২. সাইটোকাইনজনিত যকৃতের রূপান্তর ও কৈশিক নালীর ফুটো (Capillary Leak)'),
          paragraphs: [
            l(
              'During systemic inflammation, activated macrophages and endothelial cells release Interleukin-6 (IL-6), Interleukin-1 (IL-1), and Tumor Necrosis Factor-alpha (TNF-alpha) [3, 4]. Within hepatocytes, IL-6 binds its gp130 receptor complex, activating the JAK-STAT3 signaling pathway. STAT3 directly binds promoter response elements, accelerating transcription of C-Reactive Protein (CRP), serum amyloid A, fibrinogen, and ferritin by up to 1,000-fold.',
              'প্রদাহের সময় ম্যাক্রোফেজ থেকে IL-6, IL-1 এবং TNF-alpha নিঃসৃত হয় [3, 4]। যকৃতে IL-6 তার রিসেপ্টরে যুক্ত হয়ে JAK-STAT3 সংকেত পথকে উদ্দীপ্ত করে। এই সংকেত সরাসরি জিনের ওপর কাজ করে সি-রিঅ্যাক্টিভ প্রোটিন (CRP), সিরাম অ্যামাইলয়েড এবং ফেরিটিন তৈরির হার ১০০০ গুণ বাড়িয়ে দেয়।'
            ),
            l(
              'Simultaneously, transcription of albumin and prealbumin mRNA is down-regulated to divert cellular ribosomes and amino acid building blocks toward acute-phase defensive proteins [3]. Compounding this hepatic suppression, cytokines cause endothelial cell retraction, increasing the transcapillary escape rate of albumin by 300%. Albumin leaks into the extravascular interstitium, expanding interstitial third-spacing (edema) while collapsing intravascular concentrations.',
              'একই সময়ে যকৃত অ্যালবুমিন ও প্রিঅ্যালবুমিন তৈরির mRNA দমন করে যাতে মূল্যবান অ্যামিনো অ্যাসিডগুলো প্রতিরক্ষা প্রোটিন তৈরিতে কাজে লাগানো যায় [3]। এর সাথে সাইটোকাইনগুলো রক্তনালীর এন্ডোথেলিয়াল কোষগুলোকে সংকুচিত করে দেয়, যার ফলে রক্তনালী থেকে টিস্যুর ফাঁকে অ্যালবুমিন চুইয়ে পড়ার হার ৩০০% বৃদ্ধি পায়। এতে রক্তে অ্যালবুমিনের মাত্রা ধসে পড়ে এবং টিস্যুতে পানি জমে এডিমা তৈরি হয়।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-starvation-evidence',
          heading: l('1. The Historical Evidence: Ancel Keys and the Minnesota Starvation Experiment', '১. ঐতিহাসিক প্রমাণ: আনসেল কিস ও মিনেসোটা অনাহার গবেষণা'),
          paragraphs: [
            l(
              'The definitive historical proof that starvation does not cause acute hypoalbuminemia was documented in Ancel Keys’ landmark 1950 **Minnesota Starvation Experiment** [5]. Thirty-six healthy men were subjected to semi-starvation for 24 weeks, losing an average of 24% of their total body weight, with massive somatic muscle wasting and visible emaciation.',
              'খাদ্য অনাহার যে রক্তের অ্যালবুমিন কমায় না তার সবচেয়ে অকাট্য ঐতিহাসিক প্রমাণ হলো ১৯৫০ সালে ড. আনসেল কিসের পরিচালিত বিখ্যাত **মিনেসোটা অনাহার গবেষণা (Minnesota Starvation Experiment)** [5]। ৩৬ জন সুস্থ ব্যক্তিকে টানা ২৪ সপ্তাহ তীব্র অনাহারে রাখা হয়েছিল, যার ফলে তাদের শরীরের ওজনের গড়ে ২৪% ক্ষয় হয় এবং মারাত্মক কঙ্কালসার অবস্থা তৈরি হয়।'
            ),
            l(
              'Remarkably, throughout 6 months of severe calorie and protein starvation in the absence of infection, their serum albumin levels remained almost entirely within normal physiological limits (dropping trivially from $4.28\\text{ g/dL}$ to $3.86\\text{ g/dL}$) [5]. Conversely, well-nourished elective surgical patients drop their serum albumin from $4.5\\text{ g/dL}$ to $2.8\\text{ g/dL}$ within 6 hours of an abdominal incision due to surgical cytokine release. This contrast irrefutably confirms that inflammation, not starvation, dictates serum albumin concentrations.',
              'বিস্ময়করভাবে, ইনফেকশনবিহীন এই ৬ মাসের চরম অনাহারে তাদের রক্তে অ্যালবুমিন স্বাভাবিক মাত্রার ভেতরেই ছিল (মাত্র ৪.২৮ g/dL থেকে সামান্য কমে ৩.৮৬ g/dL হয়েছিল) [5]। অথচ একজন সম্পূর্ণ সুস্থ মানুষ পেটের কোনো অস্ত্রোপচার করালে অপারেশনের মাত্র ৬ ঘণ্টার মধ্যে সাইটোকাইনের কারণে তার অ্যালবুমিন ৪.৫ g/dL থেকে কমে ২.৮ g/dL-এ নেমে যায়। এই যুগান্তকারী সত্য সন্দেহাতীতভাবে প্রমাণ করে যে অনাহার নয়, বরং প্রদাহই রক্তে অ্যালবুমিন পতনের মূল কারণ।'
            ),
          ],
        },
        {
          id: 'sec-electrolyte-corrections',
          heading: l('2. Clinical Chemistry Corrections: Corrected Calcium, Sodium & BUN/Cr Ratio', '২. বায়োকেমিক্যাল সংশোধন: সমন্বিত ক্যালসিয়াম, সোডিয়াম ও BUN/Cr অনুপাত'),
          paragraphs: [
            l(
              'Because hypoalbuminemia and hyperglycemia alter laboratory measurements through physical and osmotic shifts, clinical dietitians must apply mathematical correction formulas before interpreting diagnostic panels [1, 4]:',
              'যেহেতু কম অ্যালবুমিন ও রক্তে অতিরিক্ত গ্লুকোজ ল্যাবরেটরির তথ্যে কৃত্রিম পরিবর্তন আনে, তাই পুষ্টিবিদদের বিশেষ গাণিতিক সূত্রের সাহায্যে তা সংশোধন করে নিতে হয় [1, 4]:'
            ),
            l(
              '1. **Corrected Calcium (Payne Formula):** Approximately 40–50% of circulating calcium is bound to albumin. Hypoalbuminemia reduces total measured calcium while ionized (active) calcium remains normal:\n$$\\text{Corrected Calcium (mg/dL)} = \\text{Measured Total Calcium (mg/dL)} + 0.8 \\times (4.0 - \\text{Serum Albumin [g/dL]})$$',
              '১. **সমন্বিত ক্যালসিয়াম (Payne Formula):** রক্তের প্রায় ৪০-৫০% ক্যালসিয়াম অ্যালবুমিনের সাথে যুক্ত থাকে। অ্যালবুমিন কমলে মোট ক্যালসিয়াম কম দেখালেও সক্রিয় আয়নিত ক্যালসিয়াম স্বাভাবিক থাকতে পারে:\n$$\\text{সমন্বিত ক্যালসিয়াম (mg/dL)} = \\text{পরিমাপকৃত মোট ক্যালসিয়াম (mg/dL)} + ০.৮ \\times (৪.০ - \\text{রক্তের অ্যালবুমিন [g/dL]})$$'
            ),
            l(
              '2. **Katz Corrected Sodium for Hyperglycemia:** Marked hyperglycemia draws intracellular water into the vascular space by osmosis, diluting measured serum sodium:\n$$\\text{Corrected Sodium (mEq/L)} = \\text{Measured Sodium} + 0.016 \\times (\\text{Serum Glucose [mg/dL]} - 100)$$',
              '২. **হাইপারগ্লাইসেমিয়ায় সমন্বিত সোডিয়াম:** রক্তে গ্লুকোজ অনেক বেড়ে গেলে তা কোষের ভেতর থেকে পানি রক্তনালীতে টেনে আনে, ফলে সোডিয়াম পাতলা হয়ে কম দেখায়:\n$$\\text{সমন্বিত সোডিয়াম (mEq/L)} = \\text{পরিমাপকৃত সোডিয়াম} + ০.০১৬ \\times (\\text{রক্তের গ্লুকোজ [mg/dL]} - ১০০)$$'
            ),
            l(
              '3. **BUN-to-Creatinine Ratio Interpretation:** A ratio $>20:1$ with normal creatinine signals pre-renal azotemia, dehydration, or gastrointestinal bleeding. A ratio $<15:1$ indicates intrinsic renal parenchymal injury or low protein intake in liver disease.',
              '৩. **BUN ও ক্রিয়েটিনিনের অনুপাত:** অনুপাতটি $>২০:১$ হলে পানিশূন্যতা বা ডিহাইড্রেশন নির্দেশ করে। পক্ষান্তরে অনুপাত $<১৫:১$ হলে কিডনির নিজস্ব ভেতরের ক্ষতি অথবা লিভার রোগে প্রোটিন কম খাওয়া নির্দেশ করে।'
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. The Scientific Paradigm Shift (Albumin Myth)', '১. বৈজ্ঞানিক সত্যের রূপান্তর (অ্যালবুমিন মিথ)'), sectionId: 'sec-visceral-protein-paradigm' },
      { id: 'toc-2', label: l('2. Cytokine Reprioritization & Capillary Leak', '২. সাইটোকাইনজনিত যকৃতের রূপান্তর ও কৈশিক নালীর ফুটো'), sectionId: 'sec-acute-phase-biochem' },
      { id: 'toc-3', label: l('3. Historical Evidence: Minnesota Starvation Study', '৩. ঐতিহাসিক প্রমাণ: মিনেসোটা অনাহার গবেষণা'), sectionId: 'sec-starvation-evidence' },
      { id: 'toc-4', label: l('4. Clinical Chemistry Corrections (Ca, Na, BUN/Cr)', '৪. ল্যাবরেটরি সংশোধন (ক্যালসিয়াম, সোডিয়াম, BUN/Cr)'), sectionId: 'sec-electrolyte-corrections' },
    ],
    terms: [
      {
        term: l('Negative Acute-Phase Reactant', 'নেগেটিভ একিউট-ফেজ প্রোটিন'),
        definition: l(
          'A plasma protein (e.g., albumin, prealbumin, transferrin) whose hepatic synthesis decreases during systemic inflammation and cytokine release.',
          'যকৃতে তৈরি রক্তরসের এমন প্রোটিন (অ্যালবুমিন, প্রিঅ্যালবুমিন), যা প্রদাহ ও সাইটোকাইনের প্রভাবে সংশ্লেষণ কমে রক্তে দ্রুত হ্রাস পায়।'
        ),
      },
      {
        term: l('Positive Acute-Phase Reactant', 'পজিটিভ একিউট-ফেজ প্রোটিন'),
        definition: l(
          'A plasma protein (e.g., C-Reactive Protein, ferritin, fibrinogen) whose hepatic synthesis increases dramatically in response to inflammatory cytokines.',
          'যকৃতে তৈরি প্রতিরক্ষামূলক প্রোটিন (যেমন সিআরপি, ফেরিটিন), যা প্রদাহের সময় রক্তে শত থেকে হাজার গুণ পর্যন্ত বৃদ্ধি পায়।'
        ),
      },
      {
        term: l('Corrected Calcium', 'সমন্বিত ক্যালসিয়াম (Corrected Calcium)'),
        definition: l(
          'A calculated calcium concentration adjusted for hypoalbuminemia: Measured Calcium + 0.8 x (4.0 - Albumin).',
          'অ্যালবুমিন কমে গেলে ক্যালসিয়ামের প্রকৃত শারীরবৃত্তীয় মান নির্ণয়ের সূত্র: পরিমাপকৃত ক্যালসিয়াম + ০.৮ x (৪.০ - অ্যালবুমিন)।'
        ),
      },
      {
        term: l('Transcapillary Escape Rate', 'কৈশিক নালী চুইয়ে পড়ার হার (TER)'),
        definition: l(
          'The velocity at which intravascular albumin leaks across damaged endothelial barriers into the interstitial third-space during sepsis and inflammation.',
          'সেপসিস বা প্রদাহের সময় রক্তনালী থেকে টিস্যুর ফাঁকে অ্যালবুমিন লিক হয়ে যাওয়ার গতিবেগ।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Disentangling Inflammatory Hypoalbuminemia from True Somatic Protein Depletion in Sepsis',
          'বাস্তব কেস স্টাডি: সেপসিসের রোগীর প্রদাহজনিত কম অ্যালবুমিন বনাম প্রকৃত প্রোটিন ক্ষয় বিশ্লেষণ'
        ),
        steps: [
          l(
            'Step 1: Patient Profile & Initial Labs. A 60-year-old male is admitted with septic shock secondary to acute diverticular perforation. Height = 175 cm, Weight = 75 kg. Day 1 Labs: Albumin = 1.7 g/dL, Prealbumin = 5 mg/dL, CRP = 220 mg/L, Total Calcium = 7.1 mg/dL, Blood Glucose = 280 mg/dL, Serum Sodium = 129 mEq/L.',
            'ধাপ ১: রোগীর বিবরণ ও প্রাথমিক ল্যাব: অন্ত্রের ফুটো ও সেপটিক শকে আক্রান্ত ৬০ বছর বয়সী পুরুষ (উচ্চতা ১৭৫ সেমি, ওজন ৭৫ কেজি)। রক্ত পরীক্ষা: অ্যালবুমিন ১.৭ g/dL, প্রিঅ্যালবুমিন ৫ mg/dL, সিআরপি ২২০ mg/L, মোট ক্যালসিয়াম ৭.১ mg/dL, রক্তের গ্লুকোজ ২৮০ mg/dL, সোডিয়াম ১২৯ mEq/L।'
          ),
          l(
            'Step 2: Calculate Corrected Calcium. Using the Payne formula: Corrected Calcium = $7.1 + 0.8 \\times (4.0 - 1.7) = 7.1 + 0.8 \\times (2.3) = 7.1 + 1.84 = 8.94\\text{ mg/dL}$. Conclusion: The patient does NOT have hypocalcemia; ionized calcium is normal.',
            'ধাপ ২: সমন্বিত ক্যালসিয়াম হিসাব: সমীকরণে হিসাব: $৭.১ + ০.৮ \times (৪.০ - ১.৭) = ৭.১ + ১.৮৪ = ৮.৯৪\text{ mg/dL}$। সিদ্ধান্ত: রোগীর ক্যালসিয়াম ঘাটতি নেই; সক্রিয় আয়নিত ক্যালসিয়াম সম্পূর্ণ স্বাভাবিক।'
          ),
          l(
            'Step 3: Calculate Corrected Sodium. Using the Katz formula for hyperglycemia: Corrected Sodium = $129 + 0.016 \\times (280 - 100) = 129 + 0.016 \\times (180) = 129 + 2.88 = 131.9\\text{ mEq/L}$. Conclusion: Mild pseudohyponatremia due to hyperosmolar fluid shift.',
            'ধাপ ৩: সমন্বিত সোডিয়াম হিসাব: সমীকরণে হিসাব: ১২৯ + ০.০১৬ x (২৮০ - ১০০) = ১৩১.৯ mEq/L। সিদ্ধান্ত: উচ্চ গ্লুকোজের কারণে সৃষ্ট কৃত্রিম সামান্য কম সোডিয়াম।'
          ),
          l(
            'Step 4: Interpret the Visceral Proteins. Albumin (1.7 g/dL) and prealbumin (5 mg/dL) are suppressed by the massive systemic cytokine storm (CRP = 220 mg/L). Intravenous albumin infusions will simply leak into the lungs and abdomen without raising serum levels or healing tissue.',
            'ধাপ ৪: প্রোটিনের আসল কারণ ব্যাখ্যা: তীব্র প্রদাহের (সিআরপি ২২০ mg/L) কারণে যকৃতে অ্যালবুমিন ও প্রিঅ্যালবুমিন কমেছে। এ অবস্থায় বাইরে থেকে অ্যালবুমিন ইনজেকশন দিলে তা ফুটো রক্তনালী দিয়ে ফুসফুস ও পেটে পানি জমাবে, কোনো উপকার হবে না।'
          ),
          l(
            'Step 5: Nutrition Care Plan. Start early trophic enteral feeding via nasojejunal tube delivering 1.5 g protein/kg IBW (108 g/day) to support wound healing and preserve enterocyte integrity. Do not use albumin to gauge feeding success; monitor CRP decline to evaluate infection resolution.',
            'ধাপ ৫: সঠিক পুষ্টি পরিকল্পনা: ক্ষত সারাতে এবং অন্ত্রের কোষের সুরক্ষায় টিউবের মাধ্যমে দিনে ১০৮ গ্রাম প্রোটিন সরবরাহ শুরু করা। খাওয়ানোর সাফল্য বুঝতে অ্যালবুমিন না দেখে সিআরপি কত দ্রুত কমছে তা পর্যবেক্ষণ করা।'
          ),
        ],
        conclusion: l(
          'Mathematical corrections prevented unnecessary calcium and hypertonic saline infusions, while understanding acute-phase kinetics ensured the team provided appropriate enteral protein without misinterpreting the low albumin as simple starvation.',
          'গাণিতিক সংশোধনের ফলে রোগীকে অপ্রয়োজনীয় ক্যালসিয়াম দেওয়া থেকে বিরত থাকা সম্ভব হয় এবং প্রদাহের বিজ্ঞান বোঝার কারণে পুষ্টি দল অ্যালবুমিনের বিভ্রান্তিতে না পড়ে সঠিক টিউব ফিডিং পরিচালনা করতে পারে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does infusing intravenous albumin fail to cure clinical malnutrition in an ICU patient with septic shock?',
          'সেপটিক শকের আইসিইউ রোগীর ক্ষেত্রে শিরাপথে অ্যালবুমিন ইনজেকশন দিলেও কেন তার অপুষ্টি সারে না?'
        ),
        answer: l(
          'In septic shock, systemic cytokines induce massive endothelial dysfunction and capillary leak. Infused albumin rapidly leaks out of the bloodstream into the interstitial spaces, exacerbating tissue edema and pulmonary effusion. Furthermore, albumin is not a nutritional source of balanced amino acids for muscle protein synthesis.',
          'সেপটিক শকে সাইটোকাইনের কারণে রক্তনালীর প্রাচীর ফুটো হয়ে যায়। বাইরে থেকে দেওয়া অ্যালবুমিন সাথে সাথে রক্তনালী থেকে টিস্যুর ফাঁকে বের হয়ে ফুসফুস ও পেটে পানি জমিয়ে মারাত্মক জটিলতা তৈরি করে। এছাড়া অ্যালবুমিন সরাসরি পেশি তৈরির পুষ্টিকর অ্যামিনো অ্যাসিড সরবরাহ করতে পারে না।'
        ),
      },
      {
        question: l(
          'Why must total serum calcium always be corrected for serum albumin concentration?',
          'রক্তের মোট ক্যালসিয়াম পরীক্ষা করার সময় কেন সর্বদা অ্যালবুমিনের পরিমাণের সাথে সমন্বয় করা বাধ্যতামূলক?'
        ),
        answer: l(
          'Approximately 40% to 50% of serum calcium is bound to albumin. In patients with hypoalbuminemia, the measured total calcium concentration falls simply because there is less carrier protein, even though the metabolically active free ionized calcium ($Ca^{2+}$) is completely normal. Treating uncorrected "low calcium" can lead to dangerous iatrogenic hypercalcemia.',
          'রক্তের প্রায় অর্ধেক ক্যালসিয়াম অ্যালবুমিনের সাথে যুক্ত থাকে। অ্যালবুমিন কমে গেলে বাহক প্রোটিন না থাকার কারণে মোট ক্যালসিয়াম কম দেখায়, অথচ শরীরের আসল মুক্ত ক্যালসিয়াম ($Ca^{2+}$) স্বাভাবিক থাকে। সমন্বয় না করে কেবল ল্যাবের রিপোর্ট দেখে ক্যালসিয়াম ইনজেকশন দিলে শরীরে ক্যালসিয়াম বিপজ্জনক মাত্রায় বেড়ে মারাত্মক ক্ষতি হতে পারে।'
        ),
      },
    ],
  },
}

