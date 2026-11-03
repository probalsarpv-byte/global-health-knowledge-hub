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
    'A deep scientific exploration of clinical laboratory biomarkers: dispelling the historic myth of serum albumin and prealbumin as nutritional markers, deciphering cytokine-driven hepatic reprioritization during inflammation, mastering metabolic chemistry corrections including corrected calcium and sodium, and identifying objective nutritional indicators.',
    'ক্লিনিক্যাল ল্যাবরেটরি বায়োমার্কারের গভীর বিজ্ঞানভিত্তিক বিশ্লেষণ: পুষ্টির সূচক হিসেবে অ্যালবুমিন ও প্রিঅ্যালবুমিনের ঐতিহাসিক ভুল ধারণা দূরীকরণ, প্রদাহকালীন সাইটোকাইনজনিত যকৃতের রূপান্তর ও কৈশিক নালীর ফুটো হওয়ার প্রক্রিয়া, হাইপোঅ্যালবুমিনেমিয়ায় সমন্বিত ক্যালসিয়াম ও সোডিয়াম নির্ণয় এবং প্রকৃত পুষ্টি সূচক শনাক্তকরণ।'
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
      'Explain why serum albumin and prealbumin (transthyretin) reflect systemic inflammatory severity, capillary leak, and fluid balance rather than nutritional adequacy or protein intake.',
      'রক্তের অ্যালবুমিন ও প্রিঅ্যালবুমিন (ট্রান্সথাইরেটিন) কেন রোগীর পুষ্টি বা প্রোটিন গ্রহণের সূচক নয় বরং প্রদাহের তীব্রতা, রক্তনালী চুইয়ে তরল বের হওয়া এবং ফ্লুইড ভারসাম্যের নির্দেশক তা ব্যাখ্যা করা।'
    ),
    l(
      'Describe the cytokine-driven molecular switch (IL-6, TNF-alpha, IL-1beta) that triggers hepatic reprioritization of protein synthesis toward positive acute-phase reactants (CRP, ferritin) at the expense of negative acute-phase reactants.',
      'প্রদাহের সময় সাইটোকাইন (IL-6, TNF-alpha) কীভাবে যকৃতে সিআরপি ও ফেরিটিনের মতো পজিটিভ প্রোটিন তৈরি বাড়িয়ে অ্যালবুমিনের মতো নেগেটিভ প্রোটিন তৈরি বন্ধ করে দেয় তার আণবিক সুইচ ব্যাখ্যা করা।'
    ),
    l(
      'Analyze the historic findings of Ancel Keys’ Minnesota Starvation Experiment, proving that 24 weeks of severe starvation preserves normal serum albumin in the absence of infection.',
      'আনসেল কিসের ঐতিহাসিক মিনেসোটা অনাহার গবেষণার ফলাফল বিশ্লেষণ করে দেখানো যে সংক্রমণহীন দীর্ঘ ২৪ সপ্তাহের চরম অনাহারেও রক্তে অ্যালবুমিনের মাত্রা স্বাভাবিক থাকে।'
    ),
    l(
      'Calculate Corrected Calcium using the Payne formula in hypoalbuminemia and Corrected Sodium using the Katz formula in marked hyperglycemia.',
      'অ্যালবুমিন কমে গেলে পেইন সূত্রে প্রকৃত সমন্বিত ক্যালসিয়াম এবং রক্তে গ্লুকোজ বেড়ে গেলে কাটজ সূত্রে সমন্বিত সোডিয়াম নিখুঁতভাবে হিসাব করা।'
    ),
    l(
      'Interpret the Blood Urea Nitrogen to Creatinine (BUN/Cr) ratio to clinically distinguish prerenal hypovolemic dehydration from intrinsic acute tubular necrosis.',
      'রক্তের BUN ও ক্রিয়েটিনিনের অনুপাত (BUN/Cr) দেখে পানিশূন্যতাজনিত সমস্যা বনাম কিডনির ভেতরের আঘাত নিখুঁতভাবে পৃথক করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A molecular pathway diagram of hepatic protein synthesis during systemic inflammation: Tissue injury stimulates macrophage secretion of IL-6 and TNF-alpha; these cytokines bind hepatocyte surface receptors to up-regulate transcription of positive acute-phase proteins (CRP, ferritin) by up to 1,000-fold, while simultaneously suppressing negative acute-phase proteins (albumin, prealbumin); concurrent capillary endothelial leakage accelerates albumin escape into the interstitial third-space.',
      'প্রদাহের সময় যকৃতে প্রোটিন তৈরির আণবিক প্রবাহচিত্র: টিস্যু ক্ষতিগ্রস্ত হলে ম্যাক্রোফেজ থেকে IL-6 ও TNF-alpha নিঃসৃত হয়; এই সাইটোকাইনগুলো যকৃতে পজিটিভ প্রোটিন (সিআরপি, ফেরিটিন) তৈরি ১০০০ গুণ বাড়িয়ে দেয় এবং নেগেটিভ প্রোটিন (অ্যালবুমিন, প্রিঅ্যালবুমিন) তৈরি বন্ধ করে দেয়, একই সাথে রক্তনালী থেকে পানি চুইয়ে বের হওয়ার মাত্রা বাড়িয়ে দেয়।'
    ),
    steps: [
      l(
        'Step 1: Inflammatory Cytokine Surge. Trauma, sepsis, pancreatitis, or major surgery activates tissue macrophages, triggering a massive release of pro-inflammatory cytokines: Interleukin-6 (IL-6), Tumor Necrosis Factor-alpha (TNF-alpha), and Interleukin-1beta (IL-1beta).',
        'ধাপ ১: প্রদাহজনিত সাইটোকাইনের নিঃসরণ: আঘাত, সেপসিস, প্যানক্রিয়াটাইটিস বা বড় অস্ত্রোপচারে ম্যাক্রোফেজ উদ্দীপিত হয়ে IL-6, TNF-alpha ও IL-1beta নামক সাইটোকাইন রক্তে ছড়িয়ে দেয়।'
      ),
      l(
        'Step 2: Hepatic Gene Transcription Reprioritization. Circulating IL-6 binds hepatocyte gp130 receptors, activating the intracellular JAK-STAT3 signaling pathway. STAT3 translocates to the nucleus, reprioritizing limited amino acids toward survival and coagulation proteins.',
        'ধাপ ২: যকৃতের জিনের গতিপথ পরিবর্তন: রক্তে বাহিত IL-6 যকৃতের কোষের রিসেপ্টরে যুক্ত হয়ে JAK-STAT3 সংকেত চালু করে। এটি জিনের ওপর কাজ করে শরীরের সীমিত অ্যামিনো অ্যাসিডগুলোকে প্রতিরক্ষা ও রক্ত জমাট বাঁধার প্রোটিন তৈরিতে পুনঃনিয়োজিত করে।'
      ),
      l(
        'Step 3: Positive Acute-Phase Reactants Skyrocket. Hepatic synthesis of C-Reactive Protein (CRP) accelerates by 100-fold to 1,000-fold within 24 to 48 hours; ferritin and fibrinogen synthesis rises dramatically to support host defense and pathogen containment.',
        'ধাপ ৩: পজিটিভ প্রোটিনের বিস্ফোরণ: ২৪ থেকে ৪৮ ঘণ্টার মধ্যে সি-রিঅ্যাক্টিভ প্রোটিন (CRP) তৈরি ১০০ থেকে ১০০০ গুণ বেড়ে যায়; রক্ত জমাট বাঁধতে এবং ব্যাকটেরিয়াকে কাবু করতে ফেরিটিন ও ফাইব্রিনোজেনের মাত্রাও রক্তে দ্রুত বাড়ে।'
      ),
      l(
        'Step 4: Negative Acute-Phase Reactants Plummet. Transcription of albumin, prealbumin (transthyretin), and transferrin mRNA is profoundly down-regulated; ribosomal capacity is diverted entirely to acute survival proteins.',
        'ধাপ ৪: নেগেটিভ প্রোটিনের পতন: অ্যালবুমিন, প্রিঅ্যালবুমিন ও ট্রান্সফারিন তৈরির বার্তা বহনকারী mRNA সংকুচিত হয়ে যায়; প্রোটিন তৈরির কারখানার সমস্ত কাঁচামাল কেবল জীবন বাঁচানোর জরুরি কাজে নিবেদিত হয়।'
      ),
      l(
        'Step 5: Endothelial Capillary Leak. Cytokines cause endothelial cell junction retraction. The transcapillary escape rate of albumin increases by 300%, causing intravascular albumin to pour into interstitial third-spaces, driving serum levels downward and precipitating tissue edema.',
        'ধাপ ৫: রক্তনালীর প্রাচীর লিক হওয়া: সাইটোকাইনের কারণে রক্তনালীর প্রাচীরের কোষগুলো সংকুচিত হয়ে ফাঁক তৈরি করে। রক্তনালী থেকে টিস্যুর ফাঁকে অ্যালবুমিন লিক হওয়ার গতি ৩০০% বৃদ্ধি পায়, ফলে রক্তে অ্যালবুমিনের ঘনত্ব ধসে পড়ে এবং কোষে কোষে পানি জমে ফুলে ওঠে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 55-year-old male with severe acute necrotizing pancreatitis is admitted to the intensive care unit. On hospital day 2, his laboratory profile reveals: Serum Albumin = 1.8 g/dL (reference: 3.5–5.0), Serum Prealbumin = 6 mg/dL (reference: 15–36), Serum C-Reactive Protein (CRP) = 195 mg/L (reference: < 5.0), and Total Serum Calcium = 7.4 mg/dL (reference: 8.5–10.5). What is the correct clinical interpretation and nutritional management plan for this patient?',
      'তীব্র নেক্রোটাইজিং প্যানক্রিয়াটাইটিসে আক্রান্ত ৫৫ বছর বয়সী এক পুরুষ আইসিইউতে ভর্তি হন। ভর্তির ২য় দিনে তার রক্ত পরীক্ষায় পাওয়া গেল: অ্যালবুমিন = ১.৮ g/dL (স্বাভাবিক ৩.৫-৫.০), প্রিঅ্যালবুমিন = ৬ mg/dL (স্বাভাবিক ১৫-৩৬), সিআরপি = ১৯৫ mg/L (স্বাভাবিক < ৫.০), এবং মোট রক্ত ক্যালসিয়াম = ৭.৪ mg/dL (স্বাভাবিক ৮.৫-১০.৫)। এই রোগীর ল্যাব রিপোর্টের সঠিক বিজ্ঞানসম্মত ব্যাখ্যা ও পুষ্টি পরিকল্পনা কোনটি?'
    ),
    options: [
      l(
        'The patient has severe dietary protein malnutrition caused by 48 hours of fasting; intravenous albumin infusions must be initiated immediately to restore visceral protein mass and raise calcium.',
        'গত ৪৮ ঘণ্টা না খেয়ে থাকার কারণে রোগীর চরম প্রোটিন অপুষ্টি হয়েছে; পুষ্টি ফিরিয়ে আনতে এবং ক্যালসিয়াম বাড়াতে অবিলম্বে শিরাপথে অ্যালবুমিন ইনজেকশন দিতে হবে।'
      ),
      l(
        'The low albumin and prealbumin are consequences of cytokine-driven hepatic reprioritization and severe capillary leak triggered by systemic inflammation (CRP = 195 mg/L); calculating Corrected Calcium reveals active calcium is normal at 9.16 mg/dL (7.4 + 0.8 × [4.0 - 1.8]), requiring no calcium infusions.',
        'কম অ্যালবুমিন ও প্রিঅ্যালবুমিন তীব্র প্রদাহের (সিআরপি ১৯৫ mg/L) কারণে যকৃতের সংশ্লেষণ হ্রাস ও রক্তনালী থেকে লিক হওয়ার ফল; সমন্বিত ক্যালসিয়াম হিসাব করলে দেখা যায় রোগীর প্রকৃত ক্যালসিয়াম ৯.১৬ mg/dL (৭.৪ + ০.৮ × [৪.০ - ১.৮]) যা সম্পূর্ণ স্বাভাবিক, তাই ক্যালসিয়াম ইনজেকশন অপ্রয়োজনীয়।'
      ),
      l(
        'The low prealbumin proves that early enteral feeding has failed, indicating that all tube feeding must be halted and replaced with exclusive parenteral nutrition.',
        'কম প্রিঅ্যালবুমিন প্রমাণ করে যে টিউব ফিডিং ব্যর্থ হয়েছে, যার ফলে টিউব ফিডিং সম্পূর্ণ বন্ধ করে শিরাপথে পুষ্টি দিতে হবে।'
      ),
      l(
        'Serum albumin drops only in advanced end-stage liver cirrhosis, confirming the patient has developed acute fulminant hepatic failure.',
        'অ্যালবুমিন কেবল লিভার সিরোসিস হলেই কমে, যা নিশ্চিত করে যে রোগীর হঠাৎ লিভার ফেইলিউর হয়েছে।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'The modern consensus across ASPEN, ESPEN, and the Academy of Nutrition and Dietetics explicitly establishes that visceral proteins (albumin and prealbumin) are negative acute-phase reactants driven by systemic inflammation and capillary permeability, NOT markers of dietary protein status or feeding adequacy. In this patient, a markedly elevated CRP of 195 mg/L proves intense cytokine activity. Intravenous albumin infusions will merely leak into interstitial tissues, worsening edema and pulmonary effusion. Furthermore, because approximately 40% of calcium is bound to albumin, hypoalbuminemia artificially lowers measured total calcium while physiologically active ionized calcium remains normal: Corrected Calcium = 7.4 + 0.8 × (4.0 - 1.8) = 7.4 + 1.76 = 9.16 mg/dL.',
      'অ্যাসপেন (ASPEN), এসপেন (ESPEN) এবং ডায়েটেটিক্স অ্যাকাডেমির আন্তর্জাতিক ঐকমত্য স্পষ্টভাবে প্রমাণ করেছে যে অ্যালবুমিন ও প্রিঅ্যালবুমিন হলো নেগেটিভ একিউট-ফেজ প্রোটিন যা প্রদাহ এবং রক্তনালীর ছিদ্র বৃদ্ধির কারণে কমে যায়; এগুলো খাদ্যের প্রোটিন বা পুষ্টির সূচক নয়। এই রোগীর ১৯৫ mg/L সিআরপি প্রমাণ করে তীব্র প্রদাহ চলছে। বাইরে থেকে অ্যালবুমিন দিলে তা ফুটো রক্তনালী দিয়ে টিস্যুতে গিয়ে ফুসফুস ও পেটে পানি জমিয়ে মারাত্মক ক্ষতি করবে। এছাড়া রক্তের ৪০% ক্যালসিয়াম অ্যালবুমিনের সাথে যুক্ত থাকে; তাই অ্যালবুমিন কমলে মোট ক্যালসিয়াম কম দেখায়। সমন্বিত ক্যালসিয়াম হিসাব করলে (৭.৪ + ০.৮ × [৪.০ - ১.৮] = ৯.১৬ mg/dL) দেখা যায় রোগীর সক্রিয় মুক্ত ক্যালসিয়াম সম্পূর্ণ স্বাভাবিক।'
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
          heading: l(
            '1. The Seductive Myth of the "Nutrition Blood Test"',
            '১. "পুষ্টির রক্ত পরীক্ষা" সম্পর্কিত ঐতিহাসিক ভ্রান্ত ধারণা'
          ),
          paragraphs: [
            l(
              'For more than five decades, an intuitive yet deeply flawed assumption permeated hospital wards around the world: the belief that measuring **serum albumin** in a patient’s blood was equivalent to checking the fuel gauge of their protein nutrition [1, 2]. If a patient’s laboratory report showed a low albumin level, clinicians reflexively concluded that the patient was starving for protein. If albumin was high or normal, the patient was assumed to be well-nourished. It seemed so logical, neat, and simple.',
              'পাঁচ দশকেরও বেশি সময় ধরে বিশ্বের প্রায় প্রতিটি হাসপাতালে একটি আপাতদৃষ্টিতে আকর্ষণীয় অথচ মারাত্মক ভুল ধারণা প্রচলিত ছিল: বিশ্বাস করা হতো যে রক্তে **অ্যালবুমিন** পরীক্ষা করা মানে যেন গাড়ির জ্বালানি মিটারে তেলের পরিমাণ মাপা [1, 2]। ল্যাব রিপোর্টে রোগীর অ্যালবুমিন কম এলেই চিকিৎসকরা ভাবতেন রোগী প্রোটিনের চরম অভাবে অনাহারে ভুগছেন। আর অ্যালবুমিন স্বাভাবিক বা বেশি থাকলে ধরে নেওয়া হতো রোগী সম্পূর্ণ পুষ্ট ও সুস্থ। এটি দেখতে অত্যন্ত সহজ, যুক্তিসঙ্গত ও পরিষ্কার মনে হতো।'
            ),
            l(
              'Modern biochemical and clinical science has completely dismantled this myth [2]. Serum albumin and its cousin, prealbumin (transthyretin), do **not** reflect how much protein you ate yesterday, last week, or even last month. Instead, they are powerful markers of **systemic inflammation, tissue trauma, and fluid expansion** [3]. When the human body is wounded, infected, or battling severe illness, the liver deliberately halts albumin production and blood vessels become leaky, causing albumin levels to plunge—even in patients receiving abundant, high-protein nutrition.',
              'আধুনিক বায়োকেমিস্ট্রি ও ক্লিনিক্যাল বিজ্ঞান এই পুরোনো ধারণাকে সমূলে ভেঙে দিয়েছে [2]। রক্তে অ্যালবুমিন বা তার সহযোগী প্রিঅ্যালবুমিন (ট্রান্সথাইরেটিন) কখনোই আপনি গতকাল, গত সপ্তাহে বা গত মাসে কতটা প্রোটিন খেয়েছেন তা নির্দেশ করে না। বরং এগুলো হলো **শরীরের ভেতরের প্রদাহ, টিস্যুর আঘাত এবং তরল ভারসাম্যের তীব্রতার নির্দেশক** [3]। শরীর যখন কোনো ইনফেকশন, বড় আঘাত বা জটিল অস্ত্রোপচারের সাথে লড়াই করে, তখন যকৃত নিজের ইচ্ছাতেই অ্যালবুমিন তৈরি কমিয়ে দেয় এবং রক্তনালীর দেয়াল ফুটো হয়ে অ্যালবুমিন মাংসপেশির ফাঁকে চলে যায়—এমনকি রোগীকে প্রচুর পরিমাণে পুষ্টিকর প্রোটিন খাওয়ালেও রক্তে এর মাত্রা দ্রুত কমে যায়।'
            ),
          ],
          bullets: [
            l(
              'What Albumin Actually Is: A massive transport protein manufactured exclusively by hepatocytes that maintains intravascular oncotic pressure and shuttles hormones, fatty acids, drugs, and electrolytes throughout the circulation.',
              'অ্যালবুমিন আসলে কী: যকৃতের কোষে তৈরি একটি বৃহৎ বাহক প্রোটিন যা রক্তনালীর ভেতরের পানির চাপ (অনকোটিক চাপ) ধরে রাখে এবং রক্তে হরমোন, ফ্যাটি অ্যাসিড, ওষুধ ও খনিজ আয়ন পরিবহন করে।'
            ),
            l(
              'The Fuel Gauge Fallacy: Treating albumin as a nutritional marker is like treating smoke as proof of cold weather; low albumin signals the fire of inflammation, not the absence of food.',
              'জ্বালানি মিটারের বিভ্রান্তি: অ্যালবুমিনকে পুষ্টির মাপকাঠি ভাবা আর ঘরের ধোঁয়া দেখে শীতকাল অনুমান করা একই ভুল; রক্তে অ্যালবুমিন কমে যাওয়া মানে পুষ্টির অভাব নয়, বরং শরীরে প্রদাহের আগুন জ্বলছে।'
            ),
            l(
              'The Dangers of Misinterpretation: Clinicians who assume low albumin means protein deficiency often inject intravenous albumin or overfeed calories, drowning the patient in fluid without curing their malnutrition.',
              'ভুল ব্যাখ্যার বিপদ: কম অ্যালবুমিন দেখে প্রোটিনের ঘাটতি ভেবে বাইরে থেকে অ্যালবুমিন ইনজেকশন দিলে বা অতিরিক্ত খাবার খাওয়ালে রোগীর টিস্যুতে পানি জমে ফুসফুসে জল জমে যায়, কিন্তু অপুষ্টি একবিন্দুও সারে না।'
            ),
            l(
              'Long Biological Half-Life: Serum albumin has a half-life of approximately 20 days and 60% of it lives outside blood vessels, making it biologically impossible to reflect acute nutritional changes.',
              'দীর্ঘ জীবদ্দশা: রক্তে অ্যালবুমিনের অর্ধায়ু প্রায় ২০ দিন এবং এর ৬০% রক্তনালীর বাইরে টিস্যুর ফাঁকে থাকে, যার ফলে খাদ্যাভ্যাসের তাৎক্ষণিক পরিবর্তন প্রতিফলিত করতে এটি শারীরবৃত্তীয়ভাবে সম্পূর্ণ অক্ষম।'
            ),
          ],
        },
        {
          id: 'sec-positive-vs-negative',
          heading: l(
            '2. The Liver Under Siege: Positive vs Negative Acute-Phase Proteins',
            '২. আক্রান্ত যকৃত: পজিটিভ বনাম নেগেটিভ একিউট-ফেজ প্রোটিনের রূপান্তর'
          ),
          paragraphs: [
            l(
              'To understand why albumin falls during illness, we must look at how the body responds to danger [3]. When you suffer a bone fracture, undergo major abdominal surgery, contract a severe bacterial pneumonia, or battle cancer, your immune cells act like emergency dispatchers. Macrophages and monocytes detect tissue injury and instantly flood the bloodstream with chemical alarm sirens called **pro-inflammatory cytokines**—primarily Interleukin-6 (IL-6), Tumor Necrosis Factor-alpha (TNF-alpha), and Interleukin-1beta (IL-1beta).',
              'অসুস্থতায় কেন অ্যালবুমিন কমে যায় তা বুঝতে হলে বিপদের মুখে শরীরের প্রতিরক্ষামূলক প্রতিক্রিয়া বুঝতে হবে [3]। মানুষের হাড় ভাঙলে, পেটে বড় অপারেশন হলে, নিউমোনিয়ায় তীব্র সংক্রমণ হলে বা ক্যান্সারের আক্রমণ ঘটলে শরীরের রোগ প্রতিরোধক কোষগুলো জরুরি সতর্কবার্তা পাঠায়। ম্যাক্রোফেজ কোষগুলো টিস্যুর ক্ষতি চিনে ফেলে রক্তে **প্রো-ইনফ্ল্যামেটরি সাইটোকাইন** নামের রাসায়নিক বিপৎসংকেত ছড়িয়ে দেয়—যার মধ্যে প্রধান হলো ইন্টারলিউকিন-৬ (IL-6), টিউমার নেক্রোসিস ফ্যাক্টর-আলফা (TNF-alpha) এবং ইন্টারলিউকিন-১বিটা (IL-1beta)।'
            ),
            l(
              'These cytokines travel through the portal circulation and bind to liver hepatocytes, issuing an urgent command: "Stop routine maintenance and switch to wartime emergency production!" [3, 4]. The liver immediately reprioritizes its protein synthesis factory into two distinct categories:',
              'এই সাইটোকাইনগুলো রক্তের মাধ্যমে যকৃতে পৌঁছে লিভারের কোষগুলোকে জরুরি নির্দেশ দেয়: "দৈনন্দিন সাধারণ কাজ বন্ধ করো এবং যুদ্ধকালীন জরুরি উৎপাদন শুরু করো!" [3, 4]। যকৃতের প্রোটিন কারখানা তৎক্ষণাৎ তার কাজকে দুটি সম্পূর্ণ বিপরীত ভাগে বিভক্ত করে ফেলে:'
            ),
          ],
          bullets: [
            l(
              'Positive Acute-Phase Reactants (The Wartime Army — Synthesis Surges): The liver rapidly turns on genes to produce proteins essential for immune defense, pathogen destruction, and clot formation. C-Reactive Protein (CRP) shoots upward by 100-fold to 1,000-fold within 24 to 48 hours. Ferritin rises to sequester iron from invading bacteria. Fibrinogen surges to plug bleeding wounds.',
              'পজিটিভ একিউট-ফেজ প্রোটিন (যুদ্ধকালীন সেনাবাহিনী — উৎপাদন বহুগুণ বাড়ে): শরীর রক্ষা, জীবাণু ধ্বংস এবং রক্ত জমাট বাঁধার জন্য প্রয়োজনীয় প্রোটিনের উৎপাদন যকৃত দ্রুত বাড়িয়ে দেয়। সি-রিঅ্যাক্টিভ প্রোটিন (CRP) ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ১০০ থেকে ১০০০ গুণ পর্যন্ত বেড়ে যায়। ব্যাকটেরিয়ার হাত থেকে লোহা লুকিয়ে রাখতে ফেরিটিন বাড়ে এবং রক্তপাত ঠেকাতে ফাইব্রিনোজেন দ্রুত বৃদ্ধি পায়।'
            ),
            l(
              'Negative Acute-Phase Reactants (The Civilian Services — Synthesis Plummets): To conserve precious cellular amino acids and energy for survival, the liver deliberately halts the manufacture of peacetime maintenance proteins. Albumin, prealbumin (transthyretin), and transferrin plummet downward.',
              'নেগেটিভ একিউট-ফেজ প্রোটিন (শান্তিকালীন কাজ — উৎপাদন বন্ধ হয়): যুদ্ধকালীন প্রোটিন তৈরির জন্য মূল্যবান কাঁচামাল বা অ্যামিনো অ্যাসিড বাঁচাতে যকৃত সাধারণ প্রোটিন তৈরি সাময়িকভাবে প্রায় বন্ধ করে দেয়। ফলে অ্যালবুমিন, প্রিঅ্যালবুমিন এবং আয়রন বাহক ট্রান্সফারিন রক্তে দ্রুত নিচে নেমে যায়।'
            ),
            l(
              'Capillary Pore Expansion: Cytokines cause the endothelial cells lining your blood vessels to pull apart like opening windows, allowing fluid and albumin to leak out into tissues (capillary leak), cutting blood albumin levels in half within hours.',
              'রক্তনালীর জানালা খুলে যাওয়া: সাইটোকাইনগুলো রক্তনালীর দেয়ালের কোষগুলোকে শিথিল করে দেয়, যেন জানালার কপাট খুলে গেল। ফলে রক্তনালী থেকে পানি ও অ্যালবুমিন দ্রুত টিস্যুর ফাঁকে লিক হয়ে যায় এবং কয়েক ঘণ্টার মধ্যে রক্তে অ্যালবুমিনের ঘনত্ব অর্ধেক হয়ে যায়।'
            ),
            l(
              'The Diagnostic Rule: Whenever CRP or ferritin is elevated, albumin and prealbumin are clinically useless as nutritional markers; they simply reflect the severity of systemic inflammation.',
              'চিকিৎসা বিজ্ঞানের অকাট্য নিয়ম: রক্তে যখনই সিআরপি বা ফেরিটিন বেশি থাকবে, তখন অ্যালবুমিন বা প্রিঅ্যালবুমিন দেখে পুষ্টির বিচার করা চরম ভুল; এগুলো কেবল প্রদাহ কতটা তীব্র তা প্রমাণ করে।'
            ),
          ],
        },
        {
          id: 'sec-how-to-diagnose',
          heading: l(
            '3. How Do We Actually Diagnose Malnutrition in Real Life?',
            '৩. তাহলে বাস্তব জীবনে অপুষ্টি কীভাবে সঠিকভাবে নির্ণয় করা হয়?'
          ),
          paragraphs: [
            l(
              'If blood tests like albumin and prealbumin cannot diagnose protein starvation, what tools should clinical dietitians and physicians actually use? [2, 4]. The medical community has undergone a profound revolution. We have abandoned the search for a single magical "malnutrition blood test" and returned to rigorous clinical fundamentals.',
              'রক্তের অ্যালবুমিন বা প্রিঅ্যালবুমিন যদি অনাহার বা পুষ্টিহীনতা নির্ণয় করতে না পারে, তবে চিকিৎসক ও পুষ্টিবিদরা আসলে কোন হাতিয়ার ব্যবহার করবেন? [2, 4]। চিকিৎসাবিজ্ঞানে এ বিষয়ে এক যুগান্তকারী বিপ্লব ঘটে গেছে। কোনো কাল্পনিক "অপুষ্টির রক্ত পরীক্ষা"-র পেছনে ছোটা বাদ দিয়ে আমরা আবার আসল ক্লিনিক্যাল মূলনীতির কাছে ফিরে এসেছি।'
            ),
            l(
              'Today, adult malnutrition is diagnosed using the comprehensive **ASPEN/AND Consensus Criteria**, which requires the presence of at least two out of six clinical characteristics [4]. Rather than relying on a distorted laboratory printout, clinicians perform hands-on physical exams (NFPE), calculate percentage of involuntary weight loss, quantify actual food intake, and evaluate functional grip strength.',
              'আজকের দিনে প্রাপ্তবয়স্কদের অপুষ্টি নির্ণয় করা হয় আন্তর্জাতিক **ASPEN/AND ঐকমত্য মানদণ্ড** দিয়ে, যেখানে ল্যাবের ভুলের ওপর নির্ভর না করে ছয়টি বাস্তব ক্লিনিক্যাল লক্ষণের মধ্যে অন্তত দুটি শনাক্ত করতে হয় [4]। একজন দক্ষ পুষ্টিবিদ হাত দিয়ে শারীরিক পরীক্ষা (NFPE) করেন, অনাকাঙ্ক্ষিত ওজন কমে যাওয়ার শতকরা হার হিসাব করেন, রোগী বাস্তবে কতটুকু খাবার খেয়েছেন তা পরিমাপ করেন এবং হাতের মুঠো করার পেশির শক্তি (Grip strength) পরীক্ষা করেন।'
            ),
          ],
          bullets: [
            l(
              'Hands-On Physical Examination: Directly touching and palpating living muscles (temples, clavicles, shoulders, hands, thighs, calves) and subcutaneous fat cushions (under eyes, triceps).',
              'শারীরিক স্পর্শের পরীক্ষা (NFPE): রোগীর কপাল, কলারবোন, কাঁধের সংযোগস্থল, আঙুলের মধ্যবর্তী ফাঁক, ঊরু ও কাফের মাংসপেশি এবং চোখের নিচে ও হাতের ট্রাইসেপসের চর্বি হাত দিয়ে পরীক্ষা করা।'
            ),
            l(
              'Unintentional Weight Loss: Documenting true tissue loss over time (e.g., losing > 5% weight in 1 month or > 10% in 6 months) while correcting for confusing fluid accumulation and edema.',
              'অনাকাঙ্ক্ষিত ওজন হ্রাস: সময়ের ব্যবধানে প্রকৃত শারীরিক ওজন কমে যাওয়ার হার নথিভুক্ত করা (যেমন ১ মাসে ৫%-এর বেশি বা ৬ মাসে ১০%-এর বেশি ওজন হ্রাস), তবে পানি জমার বিভ্রান্তি এড়িয়ে শুকনো ওজন বিবেচনা করা।'
            ),
            l(
              'Quantified Energy Intake: Tracking real food intake against calculated requirements (e.g., eating < 50% or < 75% of estimated energy needs for more than a week).',
              'খাদ্য গ্রহণের শতকরা হার: রোগীর প্রয়োজনীয় ক্যালোরির তুলনায় তিনি প্রকৃতপক্ষে কতটা খেয়েছেন তা হিসাব করা (যেমন এক সপ্তাহের বেশি সময় ধরে চাহিদার ৫০% বা ৭৫%-এর কম খাওয়া)।'
            ),
            l(
              'Functional Muscle Strength: Using a calibrated handgrip dynamometer to verify that skeletal muscle wasting has translated into measurable, objective loss of physical strength.',
              'পেশির কার্যক্ষমতা যাচাই: হ্যান্ডগ্রিপ ডায়নামোমিটার যন্ত্র দিয়ে রোগীর হাতের মুঠো করার শক্তি মেপে নিশ্চিত করা যে মাংসপেশি ক্ষয়ের ফলে তার শারীরিক শক্তি বাস্তবিক অর্থেই কমে গেছে কি না।'
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
          heading: l(
            '1. The Scientific Paradigm Shift: Why Visceral Proteins Fail as Nutrition Markers',
            '১. বৈজ্ঞানিক সত্যের রূপান্তর: ভিসারাল প্রোটিন কেন পুষ্টির নির্দেশক হিসেবে ব্যর্থ'
          ),
          paragraphs: [
            l(
              'The historical designation of serum albumin and prealbumin (transthyretin) as markers of nutritional status has been formally and universally rejected by consensus statements from the American Society for Parenteral and Enteral Nutrition (ASPEN), the European Society for Clinical Nutrition and Metabolism (ESPEN), and the Academy of Nutrition and Dietetics [1, 2]. To understand the biochemical basis of this rejection, one must examine the physiological distribution and pharmacokinetics of serum albumin.',
              'রক্তের অ্যালবুমিন ও প্রিঅ্যালবুমিনকে (ট্রান্সথাইরেটিন) পুষ্টির অবস্থা মূল্যায়নের মার্কার হিসেবে গণ্য করার পুরোনো ধারণা আন্তর্জাতিক অ্যাসপেন (ASPEN), ইউরোপীয় এসপেন (ESPEN) এবং ডায়েটেটিক্স অ্যাকাডেমি সর্বসম্মতিক্রমে পুরোপুরি বাতিল ঘোষণা করেছে [1, 2]। এই ঐতিহাসিক পরিবর্তনের জৈবরাসায়নিক ভিত্তি বুঝতে হলে মানুষের শরীরে অ্যালবুমিনের বিস্তৃতি ও ফার্মাকোকাইনেটিক্স গভীরভাবে অনুধাবন করা প্রয়োজন।'
            ),
            l(
              'Serum albumin possesses a lengthy biological elimination half-life of approximately 20 days (t½ ≈ 20 days) and an immense extravascular distribution pool [1]. Approximately 60% of total exchangeable body albumin resides not in the vascular lumen, but in the interstitial third-spaces of the skin, muscle, and viscera. Because of this massive buffering reservoir and sluggish turnover rate, circulating intravascular concentrations are biologically incapable of reflecting acute day-to-day fluctuations in dietary protein consumption.',
              'রক্তরসের অ্যালবুমিনের অর্ধায়ু অত্যন্ত দীর্ঘ—প্রায় ২০ দিন (t½ ≈ ২০ দিন)—এবং এর বিশাল অংশ রক্তনালীর বাইরে থাকে [1]। শরীরের মোট বিনিময়যোগ্য অ্যালবুমিনের প্রায় ৬০% রক্তনালীর ভেতর নয়, বরং ত্বক, মাংসপেশি ও অঙ্গপ্রত্যঙ্গের মধ্যবর্তী ফাঁকা স্থানে (ইন্টারস্টিশিয়াল স্পেস) অবস্থান করে। এই বিশাল সঞ্চয় ভাণ্ডার এবং ধীরগতির রূপান্তরের কারণে প্রতিদিনের খাদ্যে প্রোটিন খাওয়া বা না খাওয়ার তাৎক্ষণিক প্রতিফলন রক্তরসের অ্যালবুমিনে ঘটা শারীরবৃত্তীয়ভাবে সম্পূর্ণ অসম্ভব।'
            ),
          ],
          bullets: [
            l(
              'The Prealbumin Illusion: Although prealbumin (transthyretin) has a shorter half-life (t½ ≈ 2 days), its synthesis is similarly suppressed by inflammatory cytokines and falsely elevated in chronic renal failure due to impaired renal degradation, rendering it equally unsuited as an isolated nutritional index.',
              'প্রিঅ্যালবুমিনের মায়াজাল: যদিও প্রিঅ্যালবুমিনের অর্ধায়ু মাত্র ২ দিন (t½ ≈ ২ দিন), তবুও এটি সাইটোকাইনের কারণে দ্রুত কমে যায় এবং কিডনি ফেইলিউরে শরীর থেকে নির্গমন না হতে পেরে কৃত্রিমভাবে বেড়ে যায়; ফলে এটিও কোনো নির্ভরযোগ্য পুষ্টি নির্দেশক নয়।'
            ),
            l(
              'Hydration Artifacts: Intravascular concentrations are violently distorted by fluid balance: volume expansion via intravenous crystalloids causes dilutional pseudo-hypoalbuminemia, whereas acute dehydration produces hemoconcentrated falsely elevated readings.',
              'তরলের পরিমাণের বিভ্রান্তি: রক্তনালীতে পানির পরিমাণ কম-বেশি হলে অ্যালবুমিন মারাত্মকভাবে পরিবর্তিত হয়: বেশি স্যালাইন দিলে রক্ত পাতলা হয়ে ভুয়া কম অ্যালবুমিন দেখায়, আবার পানিশূন্যতায় রক্ত ঘন হয়ে ভুয়া স্বাভাবিক বা বেশি অ্যালবুমিন দেখায়।'
            ),
            l(
              'Failure to Correlate with Protein Feeding: Prospective randomized trials demonstrate that aggressively infusing intravenous amino acids or enteral feeding does not restore serum albumin during the acute phase of critical illness until systemic inflammation completely resolves.',
              'খাওয়ানোর সাথে সম্পর্কের অভাব: আধুনিক গবেষণায় দেখা গেছে আইসিইউতে থাকা রোগীকে অতিরিক্ত প্রোটিন বা টিউব ফিডিং খাওয়ালেও রক্তে অ্যালবুমিন বাড়ে না যতক্ষণ না শরীরের মূল সংক্রমণ ও প্রদাহ পুরোপুরি সেরে ওঠে।'
            ),
            l(
              'Prognostic vs Nutritional Utility: Serum albumin remains an outstanding epidemiological biomarker of disease severity, surgical morbidity, and mortality risk; however, a marker of mortality is not a marker of nutrition.',
              'ভবিষ্যদ্বাণী বনাম পুষ্টির পার্থক্য: রক্তে কম অ্যালবুমিন থাকা রোগের ভয়াবহতা, অপারেশনের জটিলতা এবং মৃত্যুর ঝুঁকির চমৎকার পূর্বাভাস দেয় ঠিকই; কিন্তু মৃত্যুর ঝুঁকি নির্দেশক কোনো রক্ত পরীক্ষা কখনোই পুষ্টির পরিমাপক হতে পারে না।'
            ),
          ],
        },
        {
          id: 'sec-acute-phase-biochem',
          heading: l(
            '2. Cytokine-Mediated Hepatic Reprioritization and Capillary Leak Kinetics',
            '২. সাইটোকাইনজনিত যকৃতের রূপান্তর ও কৈশিক নালীর ফুটো হওয়ার গতিবিদ্যা'
          ),
          paragraphs: [
            l(
              'The biological mechanism underpinning hypoalbuminemia in critical illness is an orchestrated, cytokine-mediated neuroendocrine reflex [3, 4]. When macrophages encounter bacterial lipopolysaccharides, damage-associated molecular patterns (DAMPs), or surgical tissue disruption, they rapidly release Interleukin-6 (IL-6), Interleukin-1 (IL-1), and Tumor Necrosis Factor-alpha (TNF-alpha).',
              'সংকটজনক অসুস্থতায় রক্তে অ্যালবুমিন ধসে পড়ার মূল জৈবিক কারণ হলো সাইটোকাইন ও হরমোন দ্বারা পরিচালিত একটি অত্যন্ত সুশৃঙ্খল শারীরিক প্রতিক্রিয়া [3, 4]। ম্যাক্রোফেজ কোষ যখন ব্যাকটেরিয়ার বিষ, ক্ষতিগ্রস্ত টিস্যুর সংকেত বা অপারেশনের আঘাতের মুখোমুখি হয়, তখন তারা সাথে সাথে IL-6, IL-1 এবং TNF-alpha সাইটোকাইন নিঃসরণ করে।'
            ),
            l(
              'Circulating IL-6 binds to the transmembrane gp130 signal-transducing receptor complex on the surface of hepatocytes, triggering the Janus kinase (JAK) pathway and inducing phosphorylation of Signal Transducer and Activator of Transcription 3 (STAT3) [3]. Phosphorylated STAT3 homodimerizes and translocates directly into the cell nucleus, where it binds to specific acute-phase response elements in promoter regions of target genes.',
              'রক্তে ভাসমান IL-6 যকৃতের কোষের প্রাচীরে থাকা gp130 রিসেপ্টরে যুক্ত হয়ে জেনাস কাইনেজ (JAK) সংকেত চালু করে এবং STAT3 প্রোটিনকে সক্রিয় করে [3]। সক্রিয় STAT3 সরাসরি কোষের নিউক্লিয়াসে প্রবেশ করে জিনের বিশেষ প্রমোটারে যুক্ত হয়, যা যকৃতের জেনেটিক কারখানাকে যুদ্ধকালীন জরুরি অবস্থায় রূপান্তর করে।'
            ),
          ],
          bullets: [
            l(
              'Transcriptional Induction of Positive Acute-Phase Reactants: STAT3 accelerates transcription of C-Reactive Protein (CRP), serum amyloid A, alpha-1-antitrypsin, and fibrinogen, diverting ribosomes and amino acid substrates toward immediate immune defense.',
              'পজিটিভ প্রোটিনের জিনগত সক্রিয়করণ: STAT3 জিনকে নির্দেশ দিয়ে সি-রিঅ্যাক্টিভ প্রোটিন (CRP), সিরাম অ্যামাইলয়েড এবং ফাইব্রিনোজেন তৈরির প্রক্রিয়া শতগুণ বাড়িয়ে দেয়, যাতে সমস্ত কাঁচামাল রোগ প্রতিরোধে ব্যয় হয়।'
            ),
            l(
              'Transcriptional Repression of Negative Acute-Phase Reactants: In parallel, nuclear transcription factors down-regulate messenger RNA (mRNA) synthesis for albumin, prealbumin (transthyretin), and transferrin, reducing hepatic output by up to 80%.',
              'নেগেটিভ প্রোটিনের জিনগত দমন: একই সাথে যকৃতের নিউক্লিয়াস অ্যালবুমিন ও প্রিঅ্যালবুমিনের mRNA তৈরি বন্ধ করে দেয়, যার ফলে যকৃতে এই প্রোটিনগুলোর নতুন উৎপাদন প্রায় ৮০% পর্যন্ত হ্রাস পায়।'
            ),
            l(
              'The Transcapillary Escape Rate (TER) Explosion: Cytokines and vasoactive eicosanoids trigger endothelial cell contraction and degradation of the glycocalyx lining blood vessels. The transcapillary escape rate of albumin increases from a baseline of 5% per hour to over 15% to 20% per hour, causing albumin to gush into the extravascular third-space.',
              'কৈশিক নালী লিক হওয়ার বিস্ফোরণ: সাইটোকাইনের কারণে রক্তনালীর ভেতরের সুরক্ষামূলক গ্লাইকোক্যালিক্স স্তর ক্ষতিগ্রস্ত হয় এবং কোষগুলোর মাঝে ফাঁকা তৈরি হয়। রক্তনালী থেকে টিস্যুর ফাঁকে অ্যালবুমিন বের হয়ে যাওয়ার গতি প্রতি ঘণ্টায় স্বাভাবিক ৫% থেকে বেড়ে ১৫% থেকে ২০%-এ ওঠে, যার ফলে রক্তনালী থেকে বিপুল পরিমাণ অ্যালবুমিন টিস্যুতে উপচে পড়ে।'
            ),
            l(
              'Accelerated Catabolic Degradation: Pro-inflammatory cytokines up-regulate systemic lysosomal and ubiquitin-proteasome degradation pathways, speeding up the destruction of remaining circulating albumin.',
              'প্রোটিন ধ্বংসের গতি বৃদ্ধি: প্রদাহজনিত সাইটোকাইনগুলো শরীরের ইউবিকুইটিন-প্রোটিওসোম পথকে উদ্দীপ্ত করে রক্তে অবশিষ্ট থাকা অ্যালবুমিন দ্রুত ভেঙে ফেলার গতি দ্বিগুণ করে দেয়।'
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
          heading: l(
            '1. Incontrovertible Historical Proof: Ancel Keys and the Minnesota Starvation Study',
            '১. ঐতিহাসিক অকাট্য প্রমাণ: আনসেল কিস ও মিনেসোটা অনাহার গবেষণা'
          ),
          paragraphs: [
            l(
              'The single most powerful, irrefutable scientific proof that dietary starvation does not cause acute hypoalbuminemia was documented in Dr. Ancel Keys’ landmark 1950 monograph, **The Biology of Human Starvation** [5]. Conducted at the University of Minnesota during World War II, this rigorous laboratory trial subjected 36 healthy, young male conscientious objectors to 24 consecutive weeks of severe, controlled semi-starvation.',
              'খাদ্য অনাহার যে রক্তের অ্যালবুমিন কমায় না তার সবচেয়ে শক্তিশালী ও অকাট্য ঐতিহাসিক বৈজ্ঞানিক প্রমাণ লিপিবদ্ধ রয়েছে ড. আনসেল কিসের ঐতিহাসিক গবেষণাপত্র **দ্য বায়োলজি অব হিউম্যান স্টারভেশন (১৯৫০)**-এ [5]। দ্বিতীয় বিশ্বযুদ্ধের সময় মিনেসোটা বিশ্ববিদ্যালয়ে ৩৬ জন সুস্থ যুবকের ওপর টানা ২৪ সপ্তাহ ধরে নিয়ন্ত্রিত কঠোর অনাহার গবেষণা পরিচালিত হয়েছিল।'
            ),
            l(
              'The subjects received a Spartan European famine diet (primarily potatoes, turnips, rutabagas, dark bread, and macaroni) delivering only 1,560 kcal and a meager 49 grams of protein per day while walking 22 miles per week. By the end of 24 weeks, the men had lost an average of 24% of their total body weight, exhibiting extreme somatic muscle wasting, skeletal protrusion, loss of subcutaneous adipose cushions, and severe clinical famine edema.',
              'এই অংশগ্রহণকারীদের দিনে মাত্র ১৫৬০ ক্যালোরি এবং সামান্য ৪৯ গ্রাম প্রোটিনের অত্যন্ত নিম্নমানের অনাহার খাদ্য (প্রধানত আলু, শালগম, বাঁধাকপি ও রুটি) দেওয়া হতো এবং সপ্তাহে ২২ মাইল হাঁটানো হতো। ২৪ সপ্তাহ শেষে তাদের শরীরের ওজনের গড়ে ২৪% ক্ষয় হয়; তাদের সমস্ত মাংসপেশি শুকিয়ে যায়, হাড় বেরিয়ে পড়ে, সমস্ত চর্বি নিশ্চিহ্ন হয়ে যায় এবং অনাহারজনিত পায়ে পানি (এডিমা) দেখা দেয়।'
            ),
            l(
              'Yet, despite six months of relentless calorie and protein deprivation, what happened to their blood albumin levels? Because these men were completely free of infection and systemic inflammation, their serum albumin levels remained almost entirely within normal physiological limits—dropping trivially from a baseline mean of 4.28 g/dL down to 3.86 g/dL [5]. Contrast this with an elective surgery patient whose baseline albumin of 4.5 g/dL drops to 2.8 g/dL within six hours of an uncomplicated abdominal incision due purely to cytokine-mediated transcapillary leakage. This stark contrast definitively proves that inflammation and vascular kinetics—not protein starvation—govern serum albumin.',
              'অথচ দীর্ঘ ৬ মাসের নির্মম ক্যালোরি ও প্রোটিন বঞ্চনা সত্ত্বেও তাদের রক্তের অ্যালবুমিনের কী অবস্থা হয়েছিল? যেহেতু এই যুবকদের শরীরে কোনো ইনফেকশন বা প্রদাহ ছিল না, তাই তাদের রক্তে অ্যালবুমিনের মাত্রা স্বাভাবিক সীমার ভেতরেই ছিল—মাত্র ৪.২৮ g/dL থেকে সামান্য কমে ৩.৮৬ g/dL-এ নেমেছিল [5]। এর বিপরীতে, একজন সম্পূর্ণ সুস্থ মানুষ কোনো জটিলতাহীন সাধারণ পেটের অপারেশন করালে অপারেশনের মাত্র ৬ ঘণ্টার মধ্যে সাইটোকাইনের কারণে তার অ্যালবুমিন ৪.৫ g/dL থেকে কমে ২.৮ g/dL-এ নেমে যায়। এই যুগান্তকারী ঐতিহাসিক প্রমাণ সন্দেহাতীতভাবে প্রমাণ করে যে অনাহার নয়, বরং প্রদাহ এবং রক্তনালীর চুইয়ে পড়াই রক্তে অ্যালবুমিন পতনের মূল নিয়ামক।'
            ),
          ],
          bullets: [
            l(
              'Minnesota Study Baseline: 36 healthy men with mean albumin 4.28 g/dL; after 24 weeks of severe starvation and 24% weight loss, mean albumin remained normal at 3.86 g/dL.',
              'মিনেসোটা গবেষণার উপাত্ত: ৩৬ জন সুস্থ যুবকের প্রাথমিক অ্যালবুমিন ছিল ৪.২৮ g/dL; টানা ২৪ সপ্তাহের তীব্র অনাহার ও ২৪% ওজন ক্ষয়ের পরও তাদের অ্যালবুমিন ৩.৮৬ g/dL-এ স্বাভাবিক ছিল।'
            ),
            l(
              'The Mechanism of Famine Edema: Keys discovered that clinical edema in pure non-inflammatory starvation was caused by loss of interstitial tissue pressure (fat and muscle wasting around capillaries) and dependent gravity, NOT oncotic hypoalbuminemia.',
              'অনাহারজনিত এডিমার আসল কারণ: কিস আবিষ্কার করেন যে সংক্রমণহীন অনাহারে পা ফোলা অ্যালবুমিন কমার কারণে নয়, বরং রক্তনালীর চারপাশের চর্বি ও পেশি শুকিয়ে যাওয়ার ফলে রক্তনালী সংকুচিত রাখতে না পারা এবং মহাকর্ষের নিয়মে পানি নিচে জমার কারণে ঘটে।'
            ),
            l(
              'The Surgical Paradox: Elective surgical incisions trigger cytokine release that drops serum albumin by > 1.5 g/dL in hours despite full nutritional reserves, proving albumin is an acute inflammatory biomarker.',
              'অপারেশনের বিপরীত দৃশ্য: অপারেশনের ক্ষত তৈরি হওয়ার সাথে সাথে সাইটোকাইন বের হয়ে কয়েক ঘণ্টার মধ্যে অ্যালবুমিন ১.৫ g/dL-এর বেশি নামিয়ে দেয়, যা প্রমাণ করে অ্যালবুমিন শুধুই প্রদাহের নির্দেশক।'
            ),
            l(
              'Clinical Mandate: Discontinue checking albumin or prealbumin to monitor enteral or parenteral feeding tolerance, as trends in these proteins merely mirror CRP and infection control.',
              'ক্লিনিক্যাল নির্দেশনা: টিউব ফিডিং বা শিরাপথে পুষ্টি ঠিকমতো কাজ করছে কি না তা বুঝতে অ্যালবুমিন বা প্রিঅ্যালবুমিন মাপা অবিলম্বে বন্ধ করা উচিত, কারণ এদের ওঠানামা কেবল ইনফেকশন ও সিআরপির ওঠানামাকেই প্রতিফলিত করে।'
            ),
          ],
        },
        {
          id: 'sec-electrolyte-corrections',
          heading: l(
            '2. Clinical Chemistry Corrections: Corrected Calcium, Sodium & BUN/Cr Ratio',
            '২. বায়োকেমিক্যাল সংশোধন: সমন্বিত ক্যালসিয়াম, সোডিয়াম ও BUN/Cr অনুপাত'
          ),
          paragraphs: [
            l(
              'Because hypoalbuminemia, hyperglycemia, and intravascular volume contraction profoundly alter laboratory measurement techniques and physical fluid distributions, clinical dietitians and medical professionals must apply validated mathematical correction equations before interpreting diagnostic laboratory panels [1, 4]. Failing to correct for these biochemical confounders leads to dangerous diagnostic and therapeutic errors.',
              'যেহেতু কম অ্যালবুমিন, অতিরিক্ত রক্তের গ্লুকোজ এবং পানিশূন্যতা ল্যাবরেটরি পরীক্ষার ফলাফল ও তরলের বিন্যাসকে মারাত্মকভাবে বিকৃত করে, তাই পুষ্টিবিদ ও চিকিৎসকদের ল্যাব রিপোর্ট বিশ্লেষণের আগে সুনির্দিষ্ট গাণিতিক সূত্রের সাহায্যে মানগুলো সংশোধন করে নিতে হয় [1, 4]। এই জৈবরাসায়নিক বিভ্রান্তিগুলো সংশোধন না করলে ভুল চিকিৎসা ও প্রাণঘাতী জটিলতা তৈরি হতে পারে।'
            ),
            l(
              'The primary mathematical correction protocols deployed in daily clinical practice include [1, 4]:',
              'দৈনন্দিন চিকিৎসা ও পুষ্টি সেবায় প্রয়োগ করা প্রধান গাণিতিক সংশোধন পদ্ধতিগুলো হলো [1, 4]:'
            ),
          ],
          bullets: [
            l(
              'Corrected Calcium (Payne Formula): Approximately 40% to 50% of circulating calcium is bound to negatively charged surface sites on serum albumin. In hypoalbuminemia, total measured calcium drops simply because there is less carrier protein, even though biologically active ionized calcium (Ca²⁺) remains normal. Formula: Corrected Calcium (mg/dL) = Measured Total Calcium (mg/dL) + 0.8 × (4.0 - Serum Albumin [g/dL]). Treating uncorrected pseudo-hypocalcemia with calcium infusions risks fatal cardiac arrhythmias and soft-tissue calcification.',
              'সমন্বিত ক্যালসিয়াম (Payne Formula): রক্তের প্রায় ৪০% থেকে ৫০% ক্যালসিয়াম অ্যালবুমিনের সাথে যুক্ত থাকে। অ্যালবুমিন কমে গেলে বাহক প্রোটিন কম থাকার কারণে মোট ক্যালসিয়াম কম দেখায়, যদিও শারীরবৃত্তীয়ভাবে সক্রিয় মুক্ত আয়নিত ক্যালসিয়াম (Ca²⁺) সম্পূর্ণ স্বাভাবিক থাকে। সূত্র: সমন্বিত ক্যালসিয়াম (mg/dL) = পরিমাপকৃত মোট ক্যালসিয়াম + ০.৮ × (৪.০ - রক্তের অ্যালবুমিন [g/dL])। সংশোধন না করে ক্যালসিয়াম ইনজেকশন দিলে তা হৃদযন্ত্রের গতি বন্ধ এবং রক্তনালীতে পাথর জমার মতো প্রাণঘাতী বিপদ ডেকে আনতে পারে।'
            ),
            l(
              'Katz Corrected Sodium for Hyperglycemia: Marked hyperglycemia elevates extracellular osmolality, osmotically drawing free water out of intracellular compartments into the vascular space, diluting measured sodium. Formula: Corrected Sodium (mEq/L) = Measured Sodium (mEq/L) + 0.016 × (Serum Glucose [mg/dL] - 100). Or for marked hyperglycemia > 400 mg/dL: use 0.024 multiplier (Hillier formula). Failing to correct causes misdiagnosis of true hyponatremia and dangerous hypertonic saline administration.',
              'হাইপারগ্লাইসেমিয়ায় সমন্বিত সোডিয়াম (Katz Formula): রক্তে গ্লুকোজ অনেক বেড়ে গেলে তা অসমোটিক চাপে কোষের ভেতর থেকে পানি রক্তনালীতে টেনে আনে, ফলে রক্তের সোডিয়াম পাতলা হয়ে ভুয়া কম দেখায়। সূত্র: সমন্বিত সোডিয়াম (mEq/L) = পরিমাপকৃত সোডিয়াম + ০.০১৬ × (রক্তের গ্লুকোজ [mg/dL] - ১০০)। গ্লুকোজ ৪০০-এর বেশি হলে ০.০২৪ গুণক ব্যবহৃত হয়। এই সংশোধন না করলে কৃত্রিম সোডিয়াম ঘাটতি মনে করে স্যালাইন দিলে রোগীর ব্রেন ড্যামেজ হতে পারে।'
            ),
            l(
              'Blood Urea Nitrogen to Creatinine (BUN/Cr) Ratio: Differentiating prerenal hypovolemia from intrinsic parenchymal kidney injury. A ratio > 20:1 with elevated BUN and normal or mildly elevated creatinine signals prerenal azotemia, dehydration, high-protein catabolism, or upper GI bleeding. A ratio < 15:1 indicates intrinsic acute tubular necrosis, severe liver disease (poor urea synthesis), or low protein intake.',
              'BUN ও ক্রিয়েটিনিনের অনুপাত (BUN/Cr): পানিশূন্যতা বনাম কিডনির ভেতরের আঘাত পৃথকীকরণ। অনুপাতটি ২০:১-এর বেশি হলে তা পানিশূন্যতা, ডিহাইড্রেশন, অন্ত্রে রক্তপাত বা অতিরিক্ত প্রোটিন ভাঙন নির্দেশ করে। পক্ষান্তরে অনুপাত ১৫:১-এর নিচে থাকলে তা কিডনির নিজস্ব ভেতরের নেফ্রনের আঘাত অথবা লিভার রোগে ইউরিয়া তৈরি না হওয়া নির্দেশ করে।'
            ),
            l(
              'Serum Osmolality Estimation: Calculating effective solute concentration across cellular membranes: Calculated Osmolality (mOsm/kg) = 2 × Measured Sodium (mEq/L) + (Blood Glucose [mg/dL] / 18) + (BUN [mg/dL] / 2.8). Normal reference range is 275 to 295 mOsm/kg.',
              'রক্তের অসমোলালিটি হিসাব: কোষের পর্দার দুই পাশের প্রকৃত পানির টান পরিমাপের সূত্র: অসমোলালিটি (mOsm/kg) = ২ × সোডিয়াম + (গ্লুকোজ / ১৮) + (BUN / ২.৮)। এর স্বাভাবিক মাত্রা হলো ২৭৫ থেকে ২৯৫ mOsm/kg।'
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. The Seductive Myth of the Albumin Test', '১. অ্যালবুমিন পরীক্ষার ভ্রান্ত ধারণা'), sectionId: 'sec-blood-tests-intro' },
      { id: 'toc-2', label: l('2. Positive vs Negative Acute-Phase Proteins', '২. পজিটিভ বনাম নেগেটিভ একিউট-ফেজ প্রোটিন'), sectionId: 'sec-positive-vs-negative' },
      { id: 'toc-3', label: l('3. Modern Malnutrition Diagnostic Criteria', '৩. আধুনিক অপুষ্টি রোগনির্ণয়ের মানদণ্ড'), sectionId: 'sec-how-to-diagnose' },
      { id: 'toc-4', label: l('4. Why Visceral Proteins Fail (Pharmacokinetics)', '৪. ভিসারাল প্রোটিনের ব্যর্থতা ও ফার্মাকোকাইনেটিক্স'), sectionId: 'sec-visceral-protein-paradigm' },
      { id: 'toc-5', label: l('5. Cytokine Reprioritization & Capillary Leak', '৫. সাইটোকাইনজনিত যকৃতের রূপান্তর ও কৈশিক নালীর ফুটো'), sectionId: 'sec-acute-phase-biochem' },
      { id: 'toc-6', label: l('6. Historical Proof: Minnesota Starvation Study', '৬. ঐতিহাসিক প্রমাণ: মিনেসোটা অনাহার গবেষণা'), sectionId: 'sec-starvation-evidence' },
      { id: 'toc-7', label: l('7. Clinical Chemistry Corrections (Ca, Na, BUN/Cr)', '৭. বায়োকেমিক্যাল সংশোধন (ক্যালসিয়াম, সোডিয়াম, BUN/Cr)'), sectionId: 'sec-electrolyte-corrections' },
    ],
    terms: [
      {
        term: l('Negative Acute-Phase Reactant', 'নেগেটিভ একিউট-ফেজ প্রোটিন'),
        definition: l(
          'A plasma protein (e.g., albumin, prealbumin, transferrin) whose hepatic synthesis decreases and whose capillary escape increases during systemic inflammation.',
          'যকৃতে তৈরি রক্তরসের এমন প্রোটিন (অ্যালবুমিন, প্রিঅ্যালবুমিন), যা প্রদাহের সময় উৎপাদন কমে এবং রক্তনালী লিক হয়ে রক্তে দ্রুত হ্রাস পায়।'
        ),
      },
      {
        term: l('Positive Acute-Phase Reactant', 'পজিটিভ একিউট-ফেজ প্রোটিন'),
        definition: l(
          'A plasma protein (e.g., C-Reactive Protein, ferritin, fibrinogen) whose hepatic synthesis increases up to 1,000-fold in response to inflammatory cytokines.',
          'যকৃতে তৈরি প্রতিরক্ষামূলক প্রোটিন (যেমন সিআরপি, ফেরিটিন), যা প্রদাহের সময় রক্তে শত থেকে হাজার গুণ পর্যন্ত বৃদ্ধি পায়।'
        ),
      },
      {
        term: l('Corrected Calcium', 'সমন্বিত ক্যালসিয়াম (Corrected Calcium)'),
        definition: l(
          'A calculated calcium concentration adjusting for hypoalbuminemia: Measured Total Calcium (mg/dL) + 0.8 × (4.0 - Serum Albumin [g/dL]).',
          'অ্যালবুমিন কমে গেলে ক্যালসিয়ামের প্রকৃত শারীরবৃত্তীয় মান নির্ণয়ের সূত্র: পরিমাপকৃত মোট ক্যালসিয়াম + ০.৮ × (৪.০ - রক্তের অ্যালবুমিন)।'
        ),
      },
      {
        term: l('Transcapillary Escape Rate (TER)', 'কৈশিক নালী চুইয়ে পড়ার হার (TER)'),
        definition: l(
          'The velocity at which intravascular albumin leaks across damaged endothelial barriers into the interstitial space, surging from 5%/hr to > 15%/hr in sepsis.',
          'রক্তনালীর প্রাচীর ভেদ করে টিস্যুর ফাঁকে অ্যালবুমিন লিক হয়ে যাওয়ার গতিবেগ, যা সেপসিসে স্বাভাবিক ৫%/ঘণ্টা থেকে বেড়ে ১৫-২০%/ঘণ্টায় পৌঁছায়।'
        ),
      },
      {
        term: l('BUN/Creatinine Ratio', 'BUN ও ক্রিয়েটিনিনের অনুপাত (BUN/Cr)'),
        definition: l(
          'A biochemical diagnostic ratio used to clinically distinguish prerenal hypovolemia (> 20:1) from intrinsic acute renal parenchymal injury (< 15:1).',
          'রক্ত পরীক্ষার একটি নির্দেশক যা পানিশূন্যতাজনিত সমস্যা (> ২০:১) বনাম কিডনির অভ্যন্তরীণ নেফ্রনের আঘাত (< ১৫:১) পৃথক করতে ব্যবহৃত হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Disentangling Inflammatory Hypoalbuminemia from True Somatic Protein Depletion in Sepsis',
          'বাস্তব কেস স্টাডি: সেপটিক শকের রোগীর প্রদাহজনিত কম অ্যালবুমিন বনাম প্রকৃত প্রোটিন ক্ষয় বিশ্লেষণ'
        ),
        steps: [
          l(
            'Step 1: Patient Profile & Initial Labs. A 60-year-old male is admitted to the ICU with septic shock secondary to acute perforated diverticulitis with diffuse peritonitis. Height = 175 cm, Weight = 75 kg. Day 1 Labs: Serum Albumin = 1.7 g/dL, Serum Prealbumin = 5 mg/dL, C-Reactive Protein (CRP) = 220 mg/L, Total Serum Calcium = 7.1 mg/dL, Blood Glucose = 280 mg/dL, Serum Sodium = 129 mEq/L, BUN = 48 mg/dL, Creatinine = 1.6 mg/dL.',
            'ধাপ ১: রোগীর বিবরণ ও প্রাথমিক ল্যাব: অন্ত্রের ফুটো ও পেরিটোনাইটিসজনিত সেপটিক শকে আক্রান্ত ৬০ বছর বয়সী পুরুষ (উচ্চতা ১৭৫ সেমি, ওজন ৭৫ কেজি)। রক্ত পরীক্ষা: অ্যালবুমিন ১.৭ g/dL, প্রিঅ্যালবুমিন ৫ mg/dL, সিআরপি ২২০ mg/L, মোট ক্যালসিয়াম ৭.১ mg/dL, রক্তের গ্লুকোজ ২৮০ mg/dL, সোডিয়াম ১২৯ mEq/L, BUN ৪৮ mg/dL, ক্রিয়েটিনিন ১.৬ mg/dL।'
          ),
          l(
            'Step 2: Calculate Corrected Calcium. Using the Payne equation: Corrected Calcium = Measured Calcium + 0.8 × (4.0 - Albumin) = 7.1 + 0.8 × (4.0 - 1.7) = 7.1 + 0.8 × (2.3) = 7.1 + 1.84 = 8.94 mg/dL. Conclusion: The patient does NOT have hypocalcemia; free ionized calcium is completely normal, preventing inappropriate intravenous calcium gluconate administration.',
            'ধাপ ২: সমন্বিত ক্যালসিয়াম হিসাব: পেইন সূত্রে হিসাব: ৭.১ + ০.৮ × (৪.০ - ১.৭) = ৭.১ + ০.৮ × (২.৩) = ৭.১ + ১.৮৪ = ৮.৯৪ mg/dL। সিদ্ধান্ত: রোগীর ক্যালসিয়াম ঘাটতি নেই; সক্রিয় মুক্ত ক্যালসিয়াম সম্পূর্ণ স্বাভাবিক, যার ফলে অপ্রয়োজনীয় ক্যালসিয়াম ইনজেকশন দেওয়ার বিপদ এড়ানো গেল।'
          ),
          l(
            'Step 3: Calculate Corrected Sodium. Using the Katz formula for acute hyperglycemia: Corrected Sodium = Measured Sodium + 0.016 × (Glucose - 100) = 129 + 0.016 × (280 - 100) = 129 + 0.016 × (180) = 129 + 2.88 = 131.9 mEq/L. Conclusion: The mild hyponatremia is largely an osmotic artifact (pseudohyponatremia) caused by glucose drawing intracellular water into the vascular space.',
            'ধাপ ৩: সমন্বিত সোডিয়াম হিসাব: কাটজ সমীকরণে হিসাব: ১২৯ + ০.০১৬ × (২৮০ - ১০০) = ১২৯ + ০.০১৬ × (১৮০) = ১২৯ + ২.৮৮ = ১৩১.৯ mEq/L। সিদ্ধান্ত: উচ্চ গ্লুকোজের কারণে কোষ থেকে পানি রক্তে এসে সোডিয়াম পাতলা দেখিয়েছে; এটি মূলত কৃত্রিম কম সোডিয়াম (সিউডোহাইপোনাট্রিমিয়া)।'
          ),
          l(
            'Step 4: Evaluate BUN-to-Creatinine Ratio. BUN / Cr = 48 / 1.6 = 30:1. Because the ratio is significantly > 20:1, this confirms prerenal azotemia driven by hypovolemia and distributive shock, calling for volume resuscitation rather than primary dialysis.',
            'ধাপ ৪: BUN ও ক্রিয়েটিনিনের অনুপাত মূল্যায়ন: BUN / Cr = ৪৮ / ১.৬ = ৩০:১। যেহেতু অনুপাতটি ২০:১-এর বেশি, এটি প্রমাণ করে কিডনির নিজস্ব স্থায়ী ক্ষতি হয়নি, বরং শকের কারণে রক্ত চলাচল কমে পানিশূন্যতা হয়েছে, যা স্যালাইন দিয়ে ঠিক করা সম্ভব।'
          ),
          l(
            'Step 5: Synthesize Visceral Proteins and Prescribe Nutrition Therapy. Albumin (1.7 g/dL) and prealbumin (5 mg/dL) are suppressed by massive systemic cytokine storm (CRP = 220 mg/L) and transcapillary escape. Infusing IV albumin will simply leak into lungs and peritoneal fluid, worsening ascites and pulmonary edema. The dietitian initiates early enteral nutrition via nasojejunal tube delivering 1.5 g protein/kg Ideal Body Weight (105 g protein/day) to maintain gut mucosal immunity, monitoring CRP decline rather than albumin to assess clinical recovery.',
            'ধাপ ৫: সামগ্রিক পুষ্টি পরিকল্পনা প্রণয়ন: তীব্র প্রদাহের (সিআরপি ২২০ mg/L) কারণে যকৃতে অ্যালবুমিন কমেছে এবং রক্তনালী দিয়ে লিক হচ্ছে। এ অবস্থায় বাইরে থেকে অ্যালবুমিন দিলে তা ফুসফুস ও পেটে পানি জমিয়ে শ্বাসকষ্ট তৈরি করবে। পুষ্টিবিদ রোগীর অন্ত্রের সুরক্ষা ও ক্ষত সারাতে টিউবের মাধ্যমে দিনে ১০৫ গ্রাম প্রোটিন (১.৫ গ্রাম/কেজি) সরবরাহ শুরু করেন এবং আরোগ্য পর্যবেক্ষণের জন্য অ্যালবুমিন না দেখে সিআরপির নিম্নগতি পর্যবেক্ষণ করেন।'
          ),
        ],
        conclusion: l(
          'Mathematical laboratory corrections prevented inappropriate calcium and hypertonic saline infusions, while understanding acute-phase kinetics protected the patient from futile albumin infusions and guided evidence-based enteral protein delivery.',
          'গাণিতিক সংশোধনের ফলে রোগীকে অপ্রয়োজনীয় ক্যালসিয়াম ও স্যালাইন দেওয়া থেকে বিরত থাকা সম্ভব হয় এবং প্রদাহের বিজ্ঞান বোঝার কারণে পুষ্টি দল অ্যালবুমিনের মোহে না পড়ে সঠিক টিউব ফিডিং পরিচালনা করে রোগীর জীবন বাঁচায়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does infusing intravenous human albumin fail to reverse malnutrition in an intensive care patient with septic shock?',
          'সেপটিক শকের আইসিইউ রোগীর ক্ষেত্রে শিরাপথে অ্যালবুমিন ইনজেকশন দিলেও কেন তার অপুষ্টি সারে না?'
        ),
        answer: l(
          'In septic shock, systemic cytokines (IL-6, TNF-alpha) cause massive endothelial glycocalyx degradation and capillary leak. Infused albumin rapidly leaks out of the intravascular space into the interstitial tissues, worsening third-space edema, ascites, and pulmonary effusion. Furthermore, albumin is an intact globular protein with a 20-day half-life that does not provide immediate free amino acids for skeletal muscle protein synthesis.',
          'সেপটিক শকে সাইটোকাইনের কারণে রক্তনালীর প্রাচীর ফুটো হয়ে যায়। বাইরে থেকে দেওয়া অ্যালবুমিন সাথে সাথে রক্তনালী থেকে টিস্যুর ফাঁকে বের হয়ে ফুসফুস ও পেটে পানি জমিয়ে মারাত্মক শ্বাসকষ্ট তৈরি করে। এছাড়া অ্যালবুমিন কোনো সুষম অ্যামিনো অ্যাসিডের খাদ্য উৎস নয়; এটি মাংসপেশি তৈরির কাঁচামাল তাৎক্ষণিকভাবে সরবরাহ করতে পারে না।'
        ),
      },
      {
        question: l(
          'Why must total serum calcium always be mathematically corrected for serum albumin concentration?',
          'রক্তের মোট ক্যালসিয়াম পরীক্ষা করার সময় কেন সর্বদা অ্যালবুমিনের পরিমাণের সাথে গাণিতিক সমন্বয় করা বাধ্যতামূলক?'
        ),
        answer: l(
          'Approximately 40% to 50% of circulating total serum calcium is bound to negatively charged sites on albumin. When serum albumin falls, total measured calcium drops simply because there is less carrier protein, even though biologically active free ionized calcium (Ca²⁺) remains normal. Treating uncorrected "hypocalcemia" with intravenous calcium gluconate risks dangerous iatrogenic hypercalcemia and fatal cardiac arrhythmias.',
          'রক্তের প্রায় অর্ধেক ক্যালসিয়াম অ্যালবুমিনের সাথে যুক্ত থাকে। অ্যালবুমিন কমে গেলে বাহক প্রোটিন না থাকার কারণে ল্যাব টেস্টে মোট ক্যালসিয়াম কম দেখায়, অথচ শরীরের আসল মুক্ত আয়নিত ক্যালসিয়াম (Ca²⁺) সম্পূর্ণ স্বাভাবিক থাকে। সমন্বয় না করে কেবল ল্যাবের রিপোর্ট দেখে ক্যালসিয়াম ইনজেকশন দিলে শরীরে ক্যালসিয়াম বিপজ্জনক মাত্রায় বেড়ে গিয়ে হৃদস্পন্দন বন্ধ হওয়ার মতো মারাত্মক বিপদ ঘটতে পারে।'
        ),
      },
    ],
  },
}
