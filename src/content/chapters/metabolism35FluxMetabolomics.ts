import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const fluxRefs = [
  {
    id: 'wiechert-13c-mfa-metab-eng-2001',
    authors: 'Wolfgang Wiechert',
    title: '13C Metabolic Flux Analysis. Metabolic Engineering, 3(3):195-206',
    organization: 'Elsevier / Academic Press',
    year: 2001,
    url: 'https://pubmed.ncbi.nlm.nih.gov/11461141/',
  },
  {
    id: 'zamboni-13c-mfa-nature-protoc-2009',
    authors: 'Nicola Zamboni, Sarah-Maria Fendt, Martin Rühl, Uwe Sauer',
    title: '13C-based metabolic flux analysis. Nature Protocols, 4(6):878-892',
    organization: 'Nature Publishing Group',
    year: 2009,
    url: 'https://pubmed.ncbi.nlm.nih.gov/19448647/',
  },
  {
    id: 'hensley-in-vivo-human-lung-cancer-cell-2016',
    authors: 'Christopher T. Hensley, Brandon Faubert, Qing Yuan, et al.',
    title: 'Metabolic Heterogeneity in Human Lung Tumors. Cell, 164(4):681-694',
    organization: 'Elsevier / Cell Press',
    year: 2016,
    url: 'https://pubmed.ncbi.nlm.nih.gov/26853473/',
  },
  {
    id: 'faubert-lactate-tca-nature-2017',
    authors: 'Brandon Faubert, Kevin Y. Li, Ling Cai, et al.',
    title: 'Lactate Metabolism in Human Lung Tumors. Cell, 171(2):358-371',
    organization: 'Elsevier / Cell Press',
    year: 2017,
    url: 'https://pubmed.ncbi.nlm.nih.gov/28985563/',
  },
  {
    id: 'ortmayr-mass-spectrometry-metabolomics-nat-rev-2021',
    authors: 'Karin Ortmayr, Stanislav G. Causon, Gunda Koellensperger',
    title: 'Quantitative LC-MS metabolomics and fluxomics. Nature Reviews Methods Primers, 1:71',
    organization: 'Nature Publishing Group',
    year: 2021,
    url: 'https://www.nature.com/articles/s43586-021-00069-4',
  },
]

const flux3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Mapping of Whole-Body Isotope Tracing & Metabolic Flux',
    '৩ডি বহু-অঙ্গীয় আইসোটোপ ট্রেসিং ও সামগ্রিক বিপাকীয় প্রবাহের শারীরস্থানিক মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: examine how systemic infusions of stable isotope tracers ([U-13C]glucose, [13C]lactate, [15N]glutamine) distribute across liver, heart, skeletal muscle, and brain to reveal organ-specific pathway fluxes in vivo.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: পর্যবেক্ষণ করুন কীভাবে রক্তে স্টেবল আইসোটোপ প্রবেশ করিয়ে যকৃত, হৃদপিণ্ড, কঙ্কাল পেশি এবং মস্তিষ্কের জীবন্ত জৈব-রাসায়নিক গতিপথ ও বিপাকীয় প্রবাহ পরিমাপ করা হয়।'
  ),
  description: l(
    'Metabolic flux analysis (MFA) and stable-isotope tracing transform snapshot metabolite concentration measurements into dynamic reaction velocity rates (fluxes, J = dC/dt). By tracking the propagation of 13C and 15N isotopic labels through metabolic intermediates using high-resolution LC-MS and NMR, researchers uncover how whole-organ networks partition nutrients between energy generation, storage, and biosynthesis in health and disease.',
    'বিপাকীয় প্রবাহ বিশ্লেষণ (MFA) এবং স্টেবল-আইসোটোপ ট্রেসিং রাসায়নিক পদার্থের স্থির ঘনমাত্রার বদলে বিক্রিয়ার প্রকৃত গতিবেগ (J = dC/dt) নির্ণয় করে। অত্যাধুনিক এলসি-এমএস ও এনএমআর প্রযুক্তির সাহায্যে ১৩সি এবং ১৫এন আইসোটোপের গতিবিধি ট্র্যাক করে জীবন্ত দেহে অঙ্গসমূহের খাদ্য উপাদান ব্যবহারের বাস্তব চিত্র উদঘাটিত হয়।'
  ),
  organs: [
    {
      id: 'organ-liver-hepatic-flux-clearinghouse',
      name: l('Liver: Hepatic Metabolic Flux Clearinghouse', 'যকৃত: সামগ্রিক বিপাকীয় প্রবাহের কেন্দ্রীয় ক্লিয়ারিংহাউস'),
      latinName: 'Hepar (Centrum Fluxus Metabolici)',
      system: l('Digestive & Whole-Body Metabolic Integration System', 'পরিপাক ও সার্বিক বিপাকীয় সমন্বয় ব্যবস্থা'),
      cavity: l('Peritoneal Cavity (Right Hypochondrium)', 'পেরিটোনিয়াল গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 5, y: 195, z: 2 },
      color: '#059669',
      highlightColor: '#10b981',
      shapeType: 'liver',
      description: l(
        'The liver is the primary metabolic clearinghouse where whole-body isotopic tracers are partitioned. During a [U-13C6]glucose clamp, hepatic glucokinase phosphorylates tracer glucose, and fractional labeling of glucose-6-phosphate, UDP-glucose, and hepatic glycogen measures glycogen synthesis flux. Concurrently, venous [13C3]lactate infusion reveals that the liver clears over 60% of circulating lactate to fuel gluconeogenesis and TCA cycle anaplerosis.',
        'যকৃৎ দেহের প্রধান বিপাক কেন্দ্র যেখানে রক্তে প্রবেশ করানো আইসোটোপগুলো নানা রাসায়নিক পথে বিভক্ত হয়। [U-13C]গ্লুকোজ ব্যবহারের মাধ্যমে গ্লাইকোজেন তৈরির প্রকৃত গতিবেগ পরিমাপ করা যায়। একইভাবে [13C]ল্যাকটেট ট্র্যাকিং প্রমাণ করে যে যকৃৎ রক্তে থাকা ৬০% এরও বেশি ল্যাকটেট গ্রহণ করে নতুন গ্লুকোজ তৈরি এবং ক্রেবস চক্রের ঘাটতি পূরণ করে।'
      ),
      spatialRelations: l(
        'Interposed between the portal splanchnic circulation and systemic inferior vena cava, receiving first-pass nutrient delivery.',
        'পোর্টাল রক্ত সংবহন ও নিম্ন মহাশিরার মধ্যবর্তী স্থানে অবস্থিত যা পরিপাকতন্ত্র থেকে আসা পুষ্টি উপাদান সরাসরি প্রথম ধাপে গ্রহণ করে।'
      ),
      physiology: l(
        'Calculates real-time net hepatic glucose output (HGO) and the absolute rate of gluconeogenesis from lactate, glycerol, and alanine using mass isotopomer distributions (M+3 phosphoenolpyruvate).',
        'ম্যাস আইসোটোপোমার বণ্টন বিশ্লেষণের মাধ্যমে যকৃৎ থেকে নতুন গ্লুকোজ তৈরি এবং রক্তে ছাড়ার প্রকৃত গতিবেগ নিখুঁতভাবে গণনা করা হয়।'
      ),
      nutritionConnection: l(
        'Dietary carbohydrate-to-fat ratios directly shift hepatic flux between de novo lipogenesis (M+2 acetyl-CoA labeling from 13C-glucose) and ketone body export.',
        'খাবারে শর্করা ও চর্বির অনুপাত যকৃতে নতুন চর্বি তৈরি বনাম কিটোন বডি উৎপাদনের গতিপথের মধ্যে সরাসরি ভারসাম্য পরিবর্তন করে।'
      ),
      clinicalSignificance: l(
        'In type 2 diabetes and MASLD, hepatic gluconeogenic flux remains inappropriately elevated despite hyperinsulinemia, driving fasting hyperglycemia and steatohepatitis.',
        'টাইপ-২ ডায়াবেটিস ও ফ্যাটি লিভার রোগে ইনসুলিন থাকা সত্ত্বেও যকৃতে অনিয়ন্ত্রিত গ্লুকোজ তৈরির প্রবাহ রক্তে চিনির মাত্রা মারাত্মক বাড়িয়ে দেয়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-heart-cardiac-myocardial-fuel-flux',
      name: l('Heart: Myocardial Dynamic Substrate Utilization', 'হৃদপিণ্ড: মায়োকার্ডিয়াল গতিশীল জ্বালানি প্রবাহ'),
      latinName: 'Cor (Fluxus Substrati Myocardii)',
      system: l('Cardiovascular & Hemodynamic System', 'সংবহনতন্ত্র ও রক্তগতিবিদ্যা ব্যবস্থা'),
      cavity: l('Thoracic Cavity (Middle Mediastinum)', 'বক্ষ গহ্বর (মধ্য মিডিয়াস্টিনাম)'),
      position3D: { x: -2, y: 215, z: 2 },
      color: '#e11d48',
      highlightColor: '#f43f5e',
      shapeType: 'heart',
      description: l(
        'The heart is a metabolic omnivore that exhibits the highest continuous energy turnover of any human organ, hydrolyzing its entire cellular ATP pool every few seconds. In vivo arterial-coronary sinus catheterization with 13C tracers demonstrates that under resting conditions, fatty acid beta-oxidation contributes 60-70% of acetyl-CoA flux into the myocardial TCA cycle, with lactate providing 15-20% and glucose only 10-15%.',
        'হৃদপিণ্ড হলো একটি অতুলনীয় অঙ্গ যা প্রতি কয়েক সেকেন্ডে তার সমস্ত এটিপি খরচ করে ফেলে। রক্তনালীতে আইসোটোপ প্রবেশ করিয়ে দেখা গেছে যে স্বাভাবিক অবস্থায় মায়োকার্ডিয়াল ক্রেবস চক্রের ৬০-৭০% শক্তি আসে ফ্যাটি অ্যাসিড জারণ থেকে, ১৫-২০% ল্যাকটেট থেকে এবং মাত্র ১০-১৫% গ্লুকোজ থেকে।'
      ),
      spatialRelations: l(
        'Suspended in the pericardial sac within the middle mediastinum, surrounded by the lungs and sitting atop the central tendon of the diaphragm.',
        'বক্ষগহ্বরে ফুসফুসের মাঝে পেরিকার্ডিয়াল থলিতে অবস্থিত যা মধ্যচ্ছদার কেন্দ্রীয় টেন্ডনের ওপর ভর করে বিরতিহীন পাম্পিং চালায়।'
      ),
      physiology: l(
        'During high-intensity exercise or ischemic stress, myocardial fuel flux switches dramatically toward circulating lactate, which directly outcompetes both glucose and fatty acids for entry into cardiac PDH.',
        'তীব্র ব্যায়াম বা অক্সিজেনের ঘাটতি দেখা দিলে হৃদপিণ্ডের জ্বালানি প্রবাহ দ্রুত ল্যাকটেটের দিকে ধাবিত হয় যা গ্লুকোজ ও চর্বিকে টেক্কা দিয়ে প্রধান জ্বালানিতে পরিণত হয়।'
      ),
      nutritionConnection: l(
        'Ketone ester supplementation introduces beta-hydroxybutyrate, which heart mitochondria oxidize with greater mechanical hydraulic efficiency per mole of oxygen consumed.',
        'কিটোন এস্টার গ্রহণ করলে হৃদযন্ত্রের মাইটোকন্ড্রিয়া কম অক্সিজেনে বেশি সংকোচন ক্ষমতা তৈরি করে উন্নত জ্বালানি দক্ষতা প্রদর্শন করে।'
      ),
      clinicalSignificance: l(
        'In failing human hearts, metabolic inflexibility and progressive reliance on glycolysis with diminished overall oxidative flux is an early diagnostic hallmark revealed by 13C fluxomics.',
        'হার্ট ফেইলিউরে হৃদপেশির জ্বালানি পরিবর্তনের নমনীয়তা নষ্ট হয়ে যায়, যা আইসোটোপ পরীক্ষার মাধ্যমে অত্যন্ত প্রাথমিক পর্যায়ে শনাক্ত করা সম্ভব।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-skeleton-muscle-glycogen-turnover',
      name: l('Skeletal Muscle: Contractile Amino Acid & Lactate Shunting', 'কঙ্কাল পেশি: সংকোচনশীল অ্যামিনো অ্যাসিড ও ল্যাকটেট সঞ্চালন'),
      latinName: 'Musculi Sceleti (Metabolismus Muscularis)',
      system: l('Musculoskeletal & Locomotor System', 'পেশিকঙ্কাল ও চলন ব্যবস্থা'),
      cavity: l('Somatic Body Wall & Extremities', 'দৈহিক প্রাচীর ও হাত-পা'),
      position3D: { x: 0, y: 140, z: 2 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'skeleton',
      description: l(
        'Comprising approximately 40% of adult body mass, skeletal muscle is the predominant site of insulin-stimulated glucose disposal and whole-body branched-chain amino acid (BCAA) catabolism. Infusion of [15N]leucine demonstrates rapid transamination in muscle to alpha-ketoisocaproate, transferring nitrogen to pyruvate to form alanine, which is exported into the glucose-alanine cycle to sustain hepatic gluconeogenesis.',
        'প্রাপ্তবয়স্ক দেহের প্রায় ৪০% ওজন কঙ্কাল পেশি দ্বারা গঠিত, যা ইনসুলিনের প্রভাবে রক্ত থেকে অধিকাংশ গ্লুকোজ গ্রহণ এবং শাখা-শিকল অ্যামিনো অ্যাসিড (BCAA) ভাঙার প্রধান কেন্দ্র। আইসোটোপ পরীক্ষায় দেখা যায় পেশি লিউসিন ভেঙে পাইরুভেটের সাহায্যে অ্যালানিন তৈরি করে যকৃতে পাঠায়।'
      ),
      spatialRelations: l(
        'Surrounds and anchors to the bony skeleton, supplied by widespread muscular branches of systemic arteries.',
        'অস্থিকঙ্কালকে ঘিরে অবস্থিত যা দেহ নড়াচড়া করার পাশাপাশি পুষ্টি উপাদানের প্রধান গতিশীল ভাণ্ডার হিসেবে কাজ করে।'
      ),
      physiology: l(
        '13C-glucose-6-phosphate labeling reveals that glycogen turnover is a continuous, non-zero futile cycle even in resting muscle, priming fibers for instantaneous contraction.',
        'আইসোটোপ বিশ্লেষণে দেখা গেছে বিশ্রামরত পেশিতেও গ্লাইকোজেন অনবরত সামান্য ভাঙা ও গড়ার ভেতর দিয়ে যায় যাতে যেকোনো মুহূর্তে তীব্র সংকোচনের প্রস্তুতি থাকে।'
      ),
      nutritionConnection: l(
        'Post-exercise ingestion of essential amino acids enriched with leucine rapidly accelerates myofibrillar protein fractional synthesis rate (FSR, measured in %/h) via mTORC1 phosphorylation.',
        'ব্যায়ামের পর লিউসিন সমৃদ্ধ প্রোটিন গ্রহণ করলে পেশির প্রোটিন তৈরির গতিবেগ (%/ঘণ্টা) তাৎক্ষণিকভাবে বহুগুণ বৃদ্ধি পায়।'
      ),
      clinicalSignificance: l(
        'Metabolic flux studies in intensive care unit patients demonstrate that severe sepsis accelerates muscle protein fractional breakdown rate (FBR) three-fold over synthesis, causing lethal ICU-acquired weakness.',
        'আইসিইউতে সেপসিসের রোগীদের আইসোটোপ পরীক্ষায় দেখা যায় পেশি ভাঙার গতি তৈরির চেয়ে তিন গুণ বেড়ে যায়, যার ফলে রোগী মারাত্মক পেশিক্ষয়ে ভোগে।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-brain-cerebral-astrocyte-neuron-flux',
      name: l('Brain: Astrocyte-Neuron Lactate Shuttle In Vivo Flux', 'মস্তিষ্ক: জীবন্ত কোষে অ্যাস্ট্রোসাইট-নিউরন ল্যাকটেট শাটল প্রবাহ'),
      latinName: 'Cerebrum (Fluxus Energeticus Encephali)',
      system: l('Central Nervous System & Neurochemistry', 'কেন্দ্রীয় স্নায়ুতন্ত্র ও স্নায়ুরসায়ন'),
      cavity: l('Cranial Cavity', 'করোটি গহ্বর'),
      position3D: { x: 0, y: 260, z: 2 },
      color: '#7c3aed',
      highlightColor: '#a78bfa',
      shapeType: 'brain',
      description: l(
        'The human brain consumes 20% of resting basal metabolic oxygen while representing only 2% of total body weight. High-field 13C and 1H-[13C] heteronuclear NMR spectroscopy during intravenous [1-13C]glucose infusion reveals compartmentalized cerebral flux: astrocytes take up glucose to generate lactate via glycolysis, transferring it to synaptic neurons to fuel neuronal mitochondrial oxidative phosphorylation and the glutamate-glutamine neurotransmitter cycle.',
        'মানব মস্তিষ্ক দেহের মাত্র ২% ওজন ধারণ করলেও মোট শক্তির ২০% খরচ করে। উন্নত এনএমআর স্পেকট্রোস্কোপির সাহায্যে জীবন্ত মস্তিষ্কে আইসোটোপ পর্যবেক্ষণ করে দেখা গেছে যে অ্যাস্ট্রোসাইট কোষ গ্লুকোজ ভেঙে ল্যাকটেট তৈরি করে নিউরনে পাঠায়, যা নিউরনের মাইটোকন্ড্রিয়ায় পুড়ে স্নায়ু সংকেত আদান-প্রদান সচল রাখে।'
      ),
      spatialRelations: l(
        'Contained within the skull, shielded by continuous vascular endothelial tight junctions of the blood-brain barrier.',
        'করোটির মাঝে রক্ত-মস্তিষ্ক প্রাচীর দ্বারা আবৃত যা কেবল নির্দিষ্ট গ্লুকোজ ও কিটোন বাহকের মাধ্যমে পুষ্টি প্রবেশের অনুমতি দেয়।'
      ),
      physiology: l(
        'The flux through the neuronal tricarboxylic acid cycle (V_tca,n) and the glutamate-glutamine neurotransmitter cycling flux (V_nt) operate in a stoichiometric 1:1 relationship with neuronal firing rates.',
        'নিউরনের ক্রেবস চক্রের গতিবেগ এবং গ্লুটামেট-গ্লুটামিন স্নায়ু সংকেত প্রবাহের গতিবেগ সরাসরি মস্তিষ্কের বৈদ্যুতিক সংকেত আদান-প্রদানের সাথে সম্পর্কিত।'
      ),
      nutritionConnection: l(
        'During prolonged fasting or therapeutic ketogenic diets, cerebral flux of beta-hydroxybutyrate replaces up to 60% of cerebral glucose requirement via monocarboxylate transporters (MCT1).',
        'দীর্ঘ অনাহারে বা কিটোজেনিক খাদ্যাভ্যাসে রক্তের কিটোন বডি মস্তিষ্কের প্রয়োজনীয় গ্লুকোজের প্রায় ৬০% প্রতিস্থাপন করে স্নায়ুকে সুরক্ষা দেয়।'
      ),
      clinicalSignificance: l(
        'In vivo 13C-MFA in patients with glioblastoma undergoing surgical tumor resection reveals avid oxidation of both glucose and circulating lactate, disproving the historical belief that brain tumors rely solely on glucose.',
        'মস্তিষ্কের ক্যান্সার অপারেশনের সময় আইসোটোপ পরীক্ষায় প্রমাণিত হয়েছে যে টিউমার কেবল গ্লুকোজ নয়, বরং প্রচুর ল্যাকটেট পুড়িয়েও বেঁচে থাকে।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism35FluxMetabolomicsLesson: LessonTopic = {
  id: 'topic.metabolism.flux-analysis-metabolomics',
  slug: 'flux-analysis-metabolomics',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '35 · Metabolic Flux Analysis, Stable Isotope Tracing & Metabolomics',
    '৩৫ · বিপাকীয় প্রবাহ বিশ্লেষণ, স্টেবল আইসোটোপ ট্রেসিং ও মেটাবোলোমিক্স'
  ),
  summary: l(
    'Dynamic biochemistry in vivo: mathematical foundations of metabolic flux analysis (J = dC/dt, stoichiometric matrix S*v = 0), stable isotope tracing using [U-13C]glucose, [13C]glutamine and [13C]lactate, mass isotopomer distribution analysis (MIDA, M+0 to M+n), correction for natural 13C abundance, LC-MS/MS and Orbitrap analytical instrumentation, 13C-MFA computational modeling, and intraoperative human surgical isotope infusions.',
    'জীবন্ত কোষে গতিশীল রসায়ন: বিপাকীয় প্রবাহের গাণিতিক ভিত্তি (J = dC/dt, স্টয়কিওমেট্রিক ম্যাট্রিক্স S*v = 0), [U-13C]গ্লুকোজ ও ল্যাকটেট দ্বারা স্টেবল আইসোটোপ ট্রেসিং, ম্যাস আইসোটোপোমার বণ্টন বিশ্লেষণ (MIDA, M+0 থেকে M+n), প্রাকৃতিক ১৩সি সংশোধনের নিয়ম, এলসি-এমএস ও অরবিট্রেপ প্রযুক্তি এবং মানুষের জটিল অপারেশনের সময় জীবন্ত আইসোটোপ পরীক্ষা।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Contrast static metabolite concentration profiling with dynamic metabolic flux analysis, mathematically defining reaction velocity J = dC/dt and steady-state mass balances.',
      'রাসায়নিক পদার্থের স্থির ঘনমাত্রা বনাম গতিশীল প্রবাহের পার্থক্য নিরূপণ করা এবং বিক্রিয়ার গতিবেগ J = dC/dt ও ভারসাম্য ম্যাট্রিক্সের গাণিতিক ব্যাখ্যা প্রদান করা।'
    ),
    l(
      'Perform mass isotopomer distribution analysis (MIDA), calculating fractional abundances (M+0, M+1, M+2, etc.) and correcting for natural 1.1% carbon-13 background abundance.',
      'ম্যাস আইসোটোপোমার বণ্টন বিশ্লেষণ (MIDA) সম্পাদন করা, ভগ্নাংশ প্রাচুর্য নিরূপণ করা এবং প্রাকৃতিক ১.১% কার্বন-১৩ পটভূমি সংশোধনের নিয়ম প্রয়োগ করা।'
    ),
    l(
      'Analyze clinical data from human intraoperative stable isotope infusions, explaining how [13C]glucose and [13C]lactate tracing reveals in vivo metabolic heterogeneity in tumors and healthy tissues.',
      'অপারেশনের সময় রোগীর দেহে স্টেবল আইসোটোপ প্রয়োগের গবেষণালব্ধ তথ্য বিশ্লেষণ করা এবং টিউমার ও সুস্থ কলার জ্বালানি ব্যবহারের বৈচিত্র্য মূল্যায়ন করা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  relatedTopicIds: ['topic.metabolism.cancer-metabolic-reprogramming', 'topic.metabolism.lactate-cori-glucose-alanine'],
  references: fluxRefs,
  evidenceBySection: {
    introduction: ['wiechert-13c-mfa-metab-eng-2001', 'zamboni-13c-mfa-nature-protoc-2009'],
    structure: ['wiechert-13c-mfa-metab-eng-2001', 'ortmayr-mass-spectrometry-metabolomics-nat-rev-2021'],
    mechanism: ['zamboni-13c-mfa-nature-protoc-2009', 'ortmayr-mass-spectrometry-metabolomics-nat-rev-2021'],
    integration: ['hensley-in-vivo-human-lung-cancer-cell-2016', 'faubert-lactate-tca-nature-2017'],
    practice: ['hensley-in-vivo-human-lung-cancer-cell-2016', 'faubert-lactate-tca-nature-2017'],
    takeaways: ['wiechert-13c-mfa-metab-eng-2001', 'ortmayr-mass-spectrometry-metabolomics-nat-rev-2021'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Static Pools vs Dynamic Flux: The Core Concept', '১. স্থির সঞ্চয় বনাম গতিশীল প্রবাহ: মূল ধারণা'), sectionId: 'introduction' },
      { id: 'sec-tracers-mida', label: l('2. Stable Isotope Tracers & Mass Isotopomer Distributions', '২. স্টেবল আইসোটোপ ট্রেসার ও ম্যাস আইসোটোপোমার বণ্টন'), sectionId: 'structure' },
      { id: 'sec-instrumentation', label: l('3. LC-MS, GC-MS & Orbitrap Analytical Instrumentation', '৩. এলসি-এমএস, জিসি-এমএস ও অরবিট্রেপ যন্ত্রপাতি'), sectionId: 'mechanism' },
      { id: 'sec-human-infusions', label: l('4. In Vivo Human Surgical Stable Isotope Infusions', '৪. মানবদেহে অপারেশনের সময় জীবন্ত আইসোটোপ প্রয়োগ'), sectionId: 'integration' },
      { id: 'sec-computational-mfa', label: l('5. 13C-MFA Modeling & Metabolic Network Reconstruction', '৫. ১৩সি-এমএফএ মডেলিং ও নেটওয়ার্ক পুনর্গঠন'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Paradigm Shifts & Grand Takeaways', '৬. দৃষ্টিভঙ্গির পরিবর্তন ও সামগ্রিক শিক্ষা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Metabolic Flux (J)', 'বিপাকীয় প্রবাহ (J)'),
        definition: l(
          'The actual dynamic rate of turnover of molecules moving through a chemical reaction or pathway per unit time and volume (micromol / g tissue / minute), fundamentally distinct from static pool concentration.',
          'প্রতি একক সময়ে ও আয়তনে একটি নির্দিষ্ট বিক্রিয়া পথের মধ্য দিয়ে প্রবাহিত অণুগুলোর প্রকৃত রূপান্তরের গতিবেগ, যা রাসায়নিক উপাদানের পরিমাণের চেয়ে আলাদা।'
        ),
      },
      {
        term: l('Mass Isotopomer Distribution (MID)', 'ম্যাস আইসোটোপোমার বণ্টন (MID)'),
        definition: l(
          'The fractional abundance vector of molecules within a chemical species that differ only in molecular weight due to incorporation of varying numbers of heavy stable isotope atoms (M+0, M+1, M+2, ..., M+n).',
          'একটি রাসায়নিক যৌগে ভারী স্টেবল আইসোটোপ যুক্ত হওয়ার কারণে তৈরি বিভিন্ন ভরের অণুগুলোর আপেক্ষিক অনুপাতের তালিকা (M+0, M+1, M+2, ইত্যাদি)।'
        ),
      },
      {
        term: l('[U-13C6]Glucose', '[U-13C6]গ্লুকোজ'),
        definition: l(
          'Uniformly labeled glucose in which all six 12C carbon atoms have been replaced with non-radioactive stable carbon-13, serving as the gold-standard tracer to quantify glycolysis and TCA cycle flux.',
          'সম্পূর্ণরূপে লেবেলযুক্ত গ্লুকোজ যার ছয়টি কার্বন পরমাণুই তেজস্ক্রিয়হীন স্টেবল কার্বন-১৩ দ্বারা প্রতিস্থাপিত, যা গ্লাইকোলাইসিস ও ক্রেবস চক্রের গতি মাপতে ব্যবহৃত হয়।'
        ),
      },
      {
        term: l('Stoichiometric Matrix (S)', 'স্টয়কিওমেট্রিক ম্যাট্রিক্স (S)'),
        definition: l(
          'A mathematical matrix representing the molecular stoichiometry of all metabolites (rows) across all biochemical reactions (columns) in a network, where S * v = 0 defines metabolic steady state.',
          'একটি গাণিতিক ম্যাট্রিক্স যা কোষের সকল বিক্রিয়ার উপাদানগুলোর অনুপাত প্রকাশ করে; যেখানে S * v = 0 সূত্রটি কোষের স্থির অবস্থাকে নির্দেশ করে।'
        ),
      },
      {
        term: l('Anaplerotic Flux', 'অ্যানাপ্লেরোটিক প্রবাহ'),
        definition: l(
          'The replenishment rate of intermediates into a circular pathway (such as pyruvate carboxylase or glutaminase feeding carbons into the TCA cycle) to balance cataplerotic biosynthetic withdrawal.',
          'কোনো চক্রাকার বিক্রিয়া পথ থেকে কাঁচামাল সরিয়ে নেওয়ার ক্ষতিপূরণ হিসেবে বাইরে থেকে নতুন উপাদান যোগ করার গতিবেগ।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Fractional Abundance & Correcting Natural 13C Background', 'ভগ্নাংশ প্রাচুর্য নির্ণয় ও প্রাকৃতিক ১৩সি পটভূমি সংশোধন'),
        steps: [
          l(
            'Step 1: Calculate total ion intensity sum: Total = 120,000 + 4,000 + 1,000 + 75,000 = 200,000 counts.',
            'ধাপ ১: মোট তীব্রতা যোগফল: মোট = ১২০,০০০ + ৪,০০০ + ১,০০০ + ৭৫,০০০ = ২০০,০০০ কাউন্ট।'
          ),
          l(
            'Step 2: Calculate uncorrected fractional abundance of M+3: Fractional Abundance(M+3) = 75,000 / 200,000 = 0.375 (37.5%).',
            'ধাপ ২: M+3 এর কাঁচা ভগ্নাংশ প্রাচুর্য: ৭৫,০০০ / ২০০,০০০ = ০.৩৭৫ (৩৭.৫%)।'
          ),
          l(
            'Step 3: Evaluate natural background for M+3: In a 3-carbon molecule, the probability of having three naturally occurring 13C atoms by random chance is (0.011)^3 = 1.33 * 10^-6, which contributes less than 0.0002% to the M+3 peak. Therefore, essentially 100% of the M+3 alanine signal is authentically derived from the [U-13C3]glucose tracer entering pyruvate via glycolysis.',
            'ধাপ ৩: প্রাকৃতিকভাবে ৩টি ১৩সি থাকার সম্ভাবনা মাত্র (০.০১১)^৩ = ০.০০০২% এরও কম। সুতরাং M+3 চূড়ার সম্পূর্ণটাই গ্লুকোজ থেকে গ্লাইকোলাইসিসের মাধ্যমে এসেছে বলে প্রমাণিত হয়।'
          ),
        ],
        conclusion: l(
          'The fractional abundance of M+3 alanine is 37.5%, indicating that exactly 37.5% of the intracellular alanine pool was synthesized de novo from tracer glucose through glycolytic pyruvate during the labeling window.',
          'M+3 অ্যালানিনের প্রাচুর্য ৩৭.৫%, যা প্রমাণ করে যে পরীক্ষার সময় কোষের মোট অ্যালানিনের ৩৭.৫% সরাসরি পরীক্ষামূলক গ্লুকোজ ভেঙে তৈরি হয়েছে।'
        ),
      },
      {
        title: l('Distinguishing Pyruvate Kinase vs Pyruvate Carboxylase Flux via Malate Labeling', 'ম্যালেট লেবেলিং দ্বারা পাইরুভেট কাইনেজ বনাম কার্বক্সিলেজ প্রবাহ নির্ণয়'),
        steps: [
          l(
            'Step 1: Identify pathway routing: Malate M+2 reflects flux through pyruvate dehydrogenase (v_PDH), while malate M+3 directly reflects anaplerotic flux through pyruvate carboxylase (v_PC).',
            'ধাপ ১: বিক্রিয়ার গতিপথ শনাক্তকরণ: M+2 ম্যালেট আসে PDH এনজাইমের মাধ্যমে এবং M+3 ম্যালেট আসে সরাসরি PC এনজাইম থেকে।'
          ),
          l(
            'Step 2: Express the flux ratio: Ratio = v_PC / v_PDH = [Malate M+3] / [Malate M+2].',
            'ধাপ ২: প্রবাহের অনুপাত সমীকরণ: অনুপাত = [ম্যালেট M+3] / [ম্যালেট M+2]।',
          ),
          l(
            'Step 3: Compute numeric ratio: Ratio = 7.0% / 28.0% = 0.25 (1:4).',
            'ধাপ ৩: মান বসিয়ে পাই: অনুপাত = ৭.০ / ২৮.০ = ০.২৫ (১:৪)।',
          ),
        ],
        conclusion: l(
          'The flux ratio v_PC / v_PDH is 0.25 (25%), proving that for every 4 molecules of pyruvate oxidized via PDH, 1 molecule of pyruvate is anaplerotically carboxylated via PC into the TCA cycle to replenish biosynthetic precursors.',
          'PC ও PDH এর অনুপাত ০.২৫ (বা ২৫%), যা নির্দেশ করে প্রতি ৪টি পাইরুভেট PDH দিয়ে জারিত হওয়ার বিপরীতে ১টি পাইরুভেট PC এনজাইম দ্বারা সরাসরি ক্রেবস চক্রের ঘাটতি মেটাতে ব্যবহৃত হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does measuring static metabolite concentrations alone fail to provide an accurate picture of cellular pathway activity?',
          'কোষে রাসায়নিক উপাদানের কেবল স্থির ঘনমাত্রা মেপে বিপাকীয় পথের বাস্তব গতিবিধি কেন বোঝা সম্ভব নয়?'
        ),
        answer: l(
          'A high metabolite concentration can indicate either extremely rapid synthesis (high flux) or a downstream enzymatic block preventing clearance (zero flux); only dynamic tracer flux measures true pathway velocity.',
          'কোনো উপাদানের উচ্চ ঘনমাত্রা যেমন দ্রুত তৈরির কারণে হতে পারে, তেমনি পরবর্তী এনজাইম বন্ধ থাকার ফলেও জমতে পারে; কেবল আইসোটোপ প্রবাহই বিক্রিয়ার বাস্তব গতি মাপতে পারে।'
        ),
      },
      {
        question: l(
          'What unexpected discovery was revealed when [13C]glucose and [13C]lactate were infused into human lung cancer patients during tumor resection surgeries?',
          'ফুসফুসের ক্যান্সার অপারেশনের সময় রোগীর রক্তে ১৩সি আইসোটোপ প্রয়োগ করে কোন অপ্রত্যাশিত সত্য উন্মোচিত হয়েছে?'
        ),
        answer: l(
          'Intraoperative human tracer infusions disproved the century-old dogma that lactate is merely an excreted waste product: tumors actively oxidize circulating lactate in vivo, often exceeding glucose contribution to the TCA cycle.',
          'অপারেশনের সময় রোগীদের ওপর করা গবেষণায় প্রমাণিত হয়েছে যে ল্যাকটেট কোনো ফেলনা বর্জ্য পদার্থ নয়; বরং ক্যান্সার কোষ রক্ত থেকে ল্যাকটেট শুষে নিয়ে মাইটোকন্ড্রিয়ায় পুড়িয়ে প্রচুর শক্তি ও কাঁচামাল তৈরি করে।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: flux3DData,
  interactiveDiagram: {
    id: 'diag-metabolism35-flux-metabolomics',
    title: l(
      'Interactive Stable Isotope Pathway Tracing & Mass Shift Explorer',
      'ইন্টারেক্টিভ স্টেবল আইসোটোপ পথ ট্রেসিং ও ভর পরিবর্তন অনুসন্ধান'
    ),
    disclaimer: l(
      'Interactive educational diagram tracing mass isotopomer propagation through glycolysis and the TCA cycle.',
      'গ্লাইকোলাইসিস ও সাইট্রিক এসিড চক্রে আইসোটোপ রূপান্তর প্রদর্শনকারী শিক্ষামূলক ডায়াগ্রাম।'
    ),
    description: l(
      'Follow how a uniformly labeled [U-13C6]glucose molecule cascades into glycolytic pyruvate and splits into M+2 acetyl-CoA or M+3 oxaloacetate.',
      'পর্যবেক্ষণ করুন কীভাবে একটি [U-13C]গ্লুকোজ অণু গ্লাইকোলাইসিসে ভেঙে পাইরুভেট তৈরি করে এবং পরবর্তীতে M+2 ও M+3 হিসেবে ক্রেবস চক্রে প্রবেশ করে।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'trace-node-glucose',
        label: l('[U-13C6]Glucose (M+6)', '[U-13C6]গ্লুকোজ (M+6)'),
        description: l(
          'All six carbons are stable 13C, generating a distinct mass shift of +6.02 Da compared to unlabeled glucose.',
          'ছয়টি কার্বনই ১৩সি হওয়ায় স্বাভাবিক গ্লুকোজের চেয়ে এর ভর ঠিক ৬ ডাল্টন বেশি হয়।'
        ),
        details: l(
          'Infused intravenously as a non-radioactive tracer, entering cells via GLUT transporters.',
          'তেজস্ক্রিয়তাহীন ট্রেসার হিসেবে রক্তে প্রবেশ করানো হয় এবং গ্লুট বাহক দিয়ে কোষে ঢোকে।'
        ),
        sectionId: 'introduction',
        color: '#3b82f6',
      },
      {
        id: 'trace-node-pyruvate',
        label: l('[U-13C3]Pyruvate (M+3)', '[U-13C3]পাইরুভেট (M+3)'),
        description: l(
          'Hexose cleavage by aldolase yields two triose phosphate molecules, producing fully labeled M+3 pyruvate.',
          'গ্লাইকোলাইসিসে অ্যালডোলেজ এনজাইম দ্বারা ভেঙে ২টি M+3 পাইরুভেট তৈরি হয়।'
        ),
        details: l(
          'Serves as the key bifurcation branchpoint between lactate export, PDH oxidation, and PC anaplerosis.',
          'ল্যাকটেট তৈরি, মাইটোকন্ড্রিয়াল জারণ এবং অ্যানাপ্লেরোটিক চক্রপূরণের মধ্যকার প্রধান নিয়ন্ত্রণ কেন্দ্র।'
        ),
        sectionId: 'structure',
        color: '#10b981',
      },
      {
        id: 'trace-node-lactate',
        label: l('[U-13C3]Lactate (M+3)', '[U-13C3]ল্যাকটেট (M+3)'),
        description: l(
          'Direct reduction of pyruvate by LDHA preserves all 3 labeled carbons, yielding excreted or oxidized M+3 lactate.',
          'LDHA এনজাইম পাইরুভেটকে বিজারিত করে ৩টি লেবেলযুক্ত কার্বনসহ M+3 ল্যাকটেট তৈরি করে।'
        ),
        details: l(
          'Rapidly exchanges with extracellular pools and serves as an in vivo systemic circulating fuel.',
          'কোষের বাইরে নির্গত হয়ে রক্তপ্রবাহের মাধ্যমে অন্যান্য অঙ্গে অন্যতম প্রধান জ্বালানি হিসেবে কাজ করে।'
        ),
        sectionId: 'mechanism',
        color: '#ef4444',
      },
      {
        id: 'trace-node-acetylcoa',
        label: l('[1,2-13C2]Acetyl-CoA (M+2)', '[1,2-13C2]অ্যাসিটাইল-কোএ (M+2)'),
        description: l(
          'Oxidative decarboxylation by PDH releases labeled 13CO2, leaving an M+2 acetyl group entering citrate synthase.',
          'PDH এনজাইম ১টি কার্বন উড়িয়ে দিয়ে M+2 অ্যাসিটাইল গ্রুপ তৈরি করে যা ক্রেবস চক্রে ঢোকে।'
        ),
        details: l(
          'Condenses with oxaloacetate to generate M+2 citrate, marking canonical forward TCA cycle flux.',
          'অক্সালোঅ্যাসিটেটের সাথে যুক্ত হয়ে M+2 সাইট্রেট তৈরি করে ক্রেবস চক্রের স্বাভাবিক গতিবেগ নির্দেশ করে।'
        ),
        sectionId: 'mechanism',
        color: '#8b5cf6',
      },
      {
        id: 'trace-node-malate-m2',
        label: l('Malate via PDH (M+2)', 'PDH দিয়ে আসা ম্যালেট (M+2)'),
        description: l(
          'Condensation of M+2 acetyl-CoA with unlabeled oxaloacetate flows through the TCA cycle, yielding M+2 malate.',
          'M+2 অ্যাসিটাইল-কোএ সাইট্রিক এসিড চক্র ঘুরে এসে M+2 ম্যালেটে পরিণত হয়।'
        ),
        details: l(
          'Reflects steady-state oxidative turnover through isocitrate dehydrogenase and alpha-ketoglutarate dehydrogenase.',
          'আইসোসাইট্রেট ডিহাইড্রোজিনেজ ও আলফা-কিটোগ্লুটারেট ডিহাইড্রোজিনেজের মধ্য দিয়ে জারণ প্রবাহের প্রমাণ।'
        ),
        sectionId: 'integration',
        color: '#d97706',
      },
      {
        id: 'trace-node-malate-m3',
        label: l('Malate via PC (M+3 Anaplerosis)', 'PC দিয়ে আসা ম্যালেট (M+3 চক্রপূরণ)'),
        description: l(
          'Direct carboxylation of M+3 pyruvate by pyruvate carboxylase creates M+3 oxaloacetate and M+3 malate.',
          'পাইরুভেট কার্বক্সিলেজ এনজাইম সরাসরি M+3 পাইরুভেটের সাথে কার্বন যুক্ত করে M+3 ম্যালেট বানায়।'
        ),
        details: l(
          'Demonstrates non-oxidative replenishment of TCA cycle intermediates to support biosynthetic export.',
          'জৈব-সংশ্লেষণের জন্য ক্রেবস চক্রের উপাদান পুনরায় যোগান দেওয়ার অ্যানাপ্লেরোটিক প্রমাণ।'
        ),
        sectionId: 'practice',
        color: '#ec4899',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'Metabolic Flux Analysis: Tracer Infusion, LC-MS Mass Spectrometry & MFA Modeling pipeline diagram.',
      'বিপাকীয় প্রবাহ বিশ্লেষণ: ট্রেসার প্রয়োগ, এলসি-এমএস স্পেকট্রোমেট্রি ও এমএফএ মডেলিং এর ধারাবাহিক প্রক্রিয়া।'
    ),
    steps: [
      l(
        'Intravenous infusion of non-radioactive [U-13C]glucose or [13C]lactate into living experimental subjects or surgical patients.',
        'পরীক্ষাধীন জীবদেহে বা রোগীর রক্তনালীতে তেজস্ক্রিয়তাহীন ১৩সি স্টেবল আইসোটোপযুক্ত রাসায়নিক প্রবেশ করানো।'
      ),
      l(
        'Immediate freeze-clamping in liquid nitrogen (-196 deg C) to halt enzymatic turnover within milliseconds and preserve true in vivo states.',
        'তরল নাইট্রোজেনে মাইনাস ১৯৬ ডিগ্রি সেলসিয়াসে তৎক্ষণাৎ জমিয়ে ফেলে মিলিসেকেন্ডের মধ্যে এনজাইমের কাজ থামিয়ে দেওয়া।'
      ),
      l(
        'Ultra-high resolution Orbitrap mass spectrometry separates metabolites and measures isotopic mass shifts (M+0, M+1, M+2, etc.).',
        'উচ্চক্ষমতার ম্যাস স্পেকট্রোমিটার বিভিন্ন ওজনের আইসোটোপ অণুগুলোকে নিখুঁতভাবে শনাক্ত ও পরিমাপ করে।'
      ),
      l(
        'Mathematical deconvolution algorithms strip away baseline 1.1% carbon-13 background to reveal authentic tracer incorporation.',
        'গাণিতিক অ্যালগরিদমের মাধ্যমে প্রাকৃতিক ১.১% কার্বন-১৩ এর প্রভাব বাদ দিয়ে আসল অন্তর্ভুক্তির হিসাব বের করা।'
      ),
    ],
  },
  assessment: {
    question: l(
      'What is the fundamental mathematical definition of metabolic flux (J) in a dynamic biochemical system at steady state?',
      'স্থির অবস্থায় একটি গতিশীল রাসায়নিক ব্যবস্থায় বিপাকীয় প্রবাহ (J) এর মৌলিক গাণিতিক সংজ্ঞা কোনটি?'
    ),
    options: [
      l(
        'The net rate of turnover of molecules per unit time and volume through a specific enzymatic step (J = dC/dt = v_forward - v_reverse), where the stoichiometric product S * v equals zero.',
        'প্রতি একক সময় ও আয়তনে একটি নির্দিষ্ট বিক্রিয়া পথের রূপান্তরের নেট হার (J = dC/dt = v_forward - v_reverse), যেখানে স্টয়কিওমেট্রিক গুণফল S * v সমান শূন্য হয়।'
      ),
      l(
        'The static concentration of a metabolite multiplied by the molecular weight of water.',
        'একটি রাসায়নিক উপাদানের স্থির ঘনমাত্রাকে পানির আণবিক ভর দিয়ে গুণ করা।'
      ),
      l(
        'The total number of hydrogen bonds in a protein crystal structure.',
        'একটি প্রোটিনের কেলাস গঠনে বিদ্যমান হাইড্রোজেন বন্ধনের মোট সংখ্যা।'
      ),
      l(
        'The electrical resistance of the cell membrane measured in ohms.',
        'কোষঝিল্লির ওহম এককে পরিমাপ করা বৈদ্যুতিক রোধ।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Metabolic flux represents the dynamic throughput velocity of a reaction network. At metabolic steady state, intermediate pool sizes remain constant (dC/dt = 0), requiring that the sum of producing fluxes equals the sum of consuming fluxes (S * v = 0).',
      'বিপাকীয় প্রবাহ হলো বিক্রিয়ার আসল গতিবেগ। স্থির অবস্থায় ভেতরের উপাদানের মোট ঘনত্ব অপরিবর্তিত থাকে (dC/dt = 0), যার ফলে উৎপাদন ও খরচের হার সমান থাকে (S * v = 0)।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Illusion of Static Metabolite Pools vs Living Chemical Flux', 'স্থির উপাদানের বিভ্রম বনাম জীবন্ত রাসায়নিক প্রবাহ'),
          paragraphs: [
            l(
              'For decades, standard laboratory clinical chemistry relied almost entirely on static concentration measurements: determining the milligrams of glucose, lactate, or cholesterol present in a deciliter of blood. While clinically useful for diagnosing acute extremes, static concentrations suffer from a fundamental biological blindness: they reveal only the inventory in the warehouse, not the speed of the trucks moving goods.',
              'বহু বছর ধরে চিকিৎসাবিজ্ঞান কেবল রক্তে রাসায়নিক পদার্থের স্থির ঘনমাত্রার পরিমাপের ওপর নির্ভর করত: রক্তে কত মিলিগ্রাম গ্লুকোজ বা কোলেস্টেরল আছে তা দেখা। এটি জরুরি হলেও এতে জীবন্ত দেহের আসল সত্য ঢাকা পড়ে থাকে: এটি কেবল গুদামে কত মাল জমা আছে তা বলে, কিন্তু কারখানায় মাল তৈরির আসল গতিবেগ বলতে পারে না।'
            ),
            l(
              'Consider a highway where five hundred automobiles are packed tightly together. A static snapshot cannot tell you whether traffic is flowing smoothly at seventy miles per hour or paralyzed in an absolute traffic jam. Similarly, an elevated pool of intracellular pyruvate could reflect either explosive glycolysis or a catastrophic downstream block in pyruvate dehydrogenase. Metabolic flux analysis provides the speedometer.',
              'রাস্তায় ৫০০টি গাড়ি সারিবদ্ধ দাঁড়িয়ে থাকার একটি স্থির ছবি দেখে বোঝা সম্ভব নয় সেগুলো দ্রুত গতিতে চলছে নাকি জ্যামে স্থবির হয়ে আছে। একইভাবে কোষে পাইরুভেটের স্তূপ জমে থাকা মানে গ্লাইকোলাইসিস খুব দ্রুত চলা যেমন হতে পারে, তেমনি পরবর্তী এনজাইম নষ্ট হয়ে পথ আটকে থাকাও হতে পারে। বিপাকীয় প্রবাহ বিশ্লেষণ হলো এই আসল গতি মাপার স্পিডোমিটার।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Stable Isotopes: Non-Radioactive Molecular Spies in Living Cells', 'স্টেবল আইসোটোপ: জীবিত কোষে তেজস্ক্রিয়তাহীন আণবিক গুপ্তচর'),
          paragraphs: [
            l(
              'To measure reaction velocities in intact living systems without disturbing natural physiology, biochemists utilize stable isotopes. Unlike dangerous radioactive tracers like carbon-14, stable isotopes such as carbon-13 (13C), nitrogen-15 (15N), and deuterium (2H) are completely safe, non-toxic, and naturally present in tiny baseline amounts in all living organisms on Earth.',
              'স্বাভাবিক শারীরবৃত্তীয় ক্রিয়া নষ্ট না করে জীবন্ত কোষে রাসায়নিকের গতিবেগ মাপতে গবেষকরা স্টেবল আইসোটোপ ব্যবহার করেন। বিপজ্জনক তেজস্ক্রিয় কার্বন-১৪ এর মতো না হয়ে কার্বন-১৩ (১৩সি), নাইট্রোজেন-১৫ (১৫এন) এবং ডিউটেরিয়াম সম্পূর্ণ নিরাপদ, বিষাক্ততাহীন এবং প্রাকৃতিকভাবে সামান্য পরিমাণে পৃথিবীর সব জীবের ভেতরেই থাকে।'
            ),
            l(
              'Because a 13C atom has one extra neutron in its nucleus, it has an atomic mass of 13.00335 daltons rather than 12.00000 daltons, while maintaining identical chemical valence and enzymatic reactivity. When cells or human patients are infused with uniformly labeled [U-13C6]glucose, mass spectrometers track how these heavy carbons propagate through every branch of cellular metabolism over time.',
              'যেহেতু ১৩সি পরমাণুর নিউক্লিয়াসে একটি বাড়তি নিউট্রন থাকে, এর ভর ১২ এর বদলে ১৩ ডাল্টন হয়, কিন্তু রাসায়নিক ধর্ম ও বিক্রিয়া করার ক্ষমতা স্বাভাবিক কার্বনের মতোই থাকে। রোগীদের রক্তে এই [U-13C]গ্লুকোজ প্রবেশ করিয়ে ম্যাস স্পেকট্রোমিটার দিয়ে দেখা হয় সময়ের সাথে সাথে ভারী কার্বনগুলো কীভাবে দেহের বিভিন্ন অঙ্গে ছড়িয়ে পড়ছে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Tracing Heavy Carbons: How Isotopic Mass Shifts Illuminate Pathways', 'ভারী কার্বনের গতিবিধি: আইসোটোপ ভর পরিবর্তন কীভাবে বিপাকীয় পথ উন্মোচন করে'),
          paragraphs: [
            l(
              'When a [U-13C6]glucose molecule enters glycolysis, it contains six heavy carbons (+6 mass units). Splitting via aldolase yields two triose phosphates containing three heavy carbons each, subsequently forming M+3 pyruvate. If that pyruvate is converted to lactate by lactate dehydrogenase, it produces M+3 lactate, directly reflecting cytosolic glycolytic throughput velocity.',
              'একটি [U-13C6]গ্লুকোজ অণু গ্লাইকোলাইসিসে ঢুকলে এর ছয়টি কার্বনই ভারী থাকে (+৬ ভর একক)। অ্যালডোলেজ এনজাইম এটিকে ভেঙে দুটি ৩-কার্বন বিশিষ্ট ট্রায়োজ ফসফেট তৈরি করে যা পরবর্তীতে M+3 পাইরুভেটে পরিণত হয়। এই পাইরুভেট থেকে তৈরি ল্যাকটেটও M+3 হয়, যা সরাসরি কোষে গ্লাইকোলাইসিসের গতিবেগ নির্ভুলভাবে প্রমাণ করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Organ-to-Organ Nutrient Shuttling: Whole-Body Inter-Organ Cycles', 'এক অঙ্গ থেকে অন্য অঙ্গে পুষ্টি পরিবহন: সার্বিক দৈহিক বিপাকীয় চক্র'),
          paragraphs: [
            l(
              'Stable isotope infusions reveal that metabolic pathways do not operate within isolated cells, but form massive inter-organ cooperative networks. In the Cori cycle, skeletal muscle exports [13C]lactate into circulation, which hepatocytes clear rapidly to resynthesize glucose via gluconeogenesis. Similarly, muscle exports alanine to the liver in the Cahill cycle, coupling transamination with urea excretion.',
              'স্টেবল আইসোটোপ প্রয়োগ করে দেখা গেছে বিপাক কোনো একক কোষের ভেতরে সীমাবদ্ধ নয়, বরং অঙ্গসমূহের পারস্পরিক সহযোগিতায় চলে। কোরি চক্রে কঙ্কাল পেশি থেকে বের হওয়া ল্যাকটেট রক্ত হয়ে যকৃতে পৌঁছায় এবং নতুন গ্লুকোজে রূপান্তরিত হয়। একইভাবে ক্যাহিল চক্রে পেশি থেকে নির্গত অ্যালানিন যকৃতে পৌঁছে গ্লুকোজ ও ইউরিয়া তৈরিতে সহায়তা করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Applications: Unmasking Disease Signatures with Tracers', 'চিকিৎসাবিজ্ঞানে প্রয়োগ: আইসোটোপের সাহায্যে রোগের গতিপ্রকৃতি শনাক্তকরণ'),
          paragraphs: [
            l(
              'In clinical medicine, isotope tracing revolutionizes our understanding of metabolic disorders. In type 2 diabetes, hyperinsulinemic-euglycemic clamps combined with [6,6-2H2]glucose infusion reveal the precise tissue site of insulin resistance—quantifying whether hyperglycemia stems from unsuppressed hepatic glucose production or impaired peripheral muscle glucose uptake.',
              'আধুনিক চিকিৎসায় আইসোটোপের ব্যবহার বহুমুখী রোগ নির্ণয়ে বিপ্লব এনেছে। টাইপ-২ ডায়াবেটিসে ডিউটেরিয়াম-লেবেলযুক্ত গ্লুকোজ ব্যবহার করে ইনসুলিন রেজিস্ট্যান্সের প্রকৃত উৎস বের করা হয়—রক্তের অতিরিক্ত চিনি যকৃতের অনিয়ন্ত্রিত উৎপাদনের কারণে হচ্ছে নাকি পেশির শোষণ ব্যর্থতার জন্য হচ্ছে তা স্পষ্টভাবে জানা যায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways: Shifting from Static Snapshots to Dynamic Flux', 'মূল শিক্ষণীয়: স্থির পরিমাপ থেকে গতিশীল প্রবাহের রূপান্তর'),
          paragraphs: [
            l(
              'Metabolic flux analysis fundamentally transforms biochemistry from an observational science of static chemical inventories into a dynamic, quantitative study of cellular throughput. Stable isotope tracing with carbon-13 provides the ultimate non-invasive window into how living cells, tissues, and human patients partition nutritional fuels between energy generation, storage, and biosynthesis.',
              'বিপাকীয় প্রবাহ বিশ্লেষণ প্রাণরসায়নকে কেবল রাসায়নিকের মজুত দেখার পদ্ধতি থেকে বের করে বিক্রিয়ার গতিবেগ মাপার একটি বাস্তবমুখী বিজ্ঞানে পরিণত করেছে। কার্বন-১৩ স্টেবল আইসোটোপ ট্রেসিং জীবন্ত কোষ ও মানবদেহে খাদ্য উপাদান ব্যবহারের বাস্তব চিত্র দেখার সবচেয়ে নিখুঁত ও নিরাপদ মাধ্যম।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'শিক্ষায়তনিক'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Kinetic Principles of Metabolic Steady-State and Flux Measurement', 'বিপাকীয় স্থির-অবস্থা ও প্রবাহ পরিমাপের গতিতাত্ত্বিক মূলনীতি'),
          paragraphs: [
            l(
              'At metabolic steady state, intracellular metabolite concentrations remain invariant over time (dC_i / dt = 0), meaning that the sum of all producing reaction rates exactly equals the sum of all consuming reaction rates. Mathematically, this is expressed as the stoichiometric matrix product S * v = 0. However, metabolic steady state does not imply isotopic steady state; measuring the rate of isotope label accumulation (dM_i / dt) before isotopic equilibrium allows the determination of absolute flux vectors.',
              'বিপাকীয় স্থির অবস্থায় কোষের ভেতরের উপাদানের ঘনত্ব সময়ের সাথে অপরিবর্তিত থাকে (dC/dt = 0), যার অর্থ সমস্ত উৎপাদনকারী বিক্রিয়ার গতিবেগ এবং ব্যবহারকারী বিক্রিয়ার গতিবেগ সম্পূর্ণ সমান (S * v = 0)। কিন্তু বিপাকীয় স্থির অবস্থা মানেই আইসোটোপীয় স্থির অবস্থা নয়; আইসোটোপের জমার গতি মেপে বিক্রিয়াগুলোর প্রকৃত গতিবেগ ভেক্টর নিখুঁতভাবে পরিমাপ করা যায়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Mass Spectrometric Resolution: Resolving Isobaric Isotopomers', 'ম্যাস স্পেকট্রোমেট্রির সক্ষমতা: আইসোবারিক আইসোটোপোমার পৃথকীকরণ'),
          paragraphs: [
            l(
              'Accurate fluxomics demands state-of-the-art analytical instrumentation capable of resolving isobaric mass defects. While carbon-13 adds approximately 1.00335 daltons per atom, nitrogen-15 adds 0.99703 daltons, and deuterium adds 1.00628 daltons. Ultra-high-resolution Orbitrap and Fourier-transform ion cyclotron resonance (FT-ICR) mass spectrometers with resolving power exceeding 140,000 distinguish these subtle sub-millidalton shifts in complex cellular matrices without chromatographic co-elution bias.',
              'সঠিক ফ্লাক্সোমিক্সের জন্য এমন যন্ত্র প্রয়োজন যা মিলিডাল্টনেরও কম ভরের পার্থক্য ধরতে পারে। কার্বন-১৩ প্রতি পরমাণুতে ১.০০৩৩৫ ডাল্টন যোগ করে, অথচ নাইট্রোজেন-১৫ যোগ করে ০.৯৯৭০৩ ডাল্টন। অরবিট্রেপ ও এফটি-আইসিআর ম্যাস স্পেকট্রোমিটারের বিপুল ক্ষমতা একই আপাত ওজনের বিভিন্ন আইসোটোপকে জটিল জৈব মিশ্রণের মধ্যেও নিখুঁতভাবে আলাদা করে শনাক্ত করতে পারে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Mass Isotopomer Distribution Analysis (MIDA) & High-Resolution LC-MS', 'ম্যাস আইসোটোপোমার বণ্টন বিশ্লেষণ (MIDA) ও হাই-রেজোলিউশন এলসি-এমএস'),
          paragraphs: [
            l(
              'When a stable isotope tracer enters a metabolic network, molecules incorporate variable numbers of heavy atoms, creating a family of mass isotopomers designated M+0 (unlabeled), M+1 (one heavy atom), M+2 (two heavy atoms), through M+n (fully labeled). The fractional abundance vector of these peaks is termed the mass isotopomer distribution (MID), measured with parts-per-million mass accuracy by Orbitrap mass spectrometers.',
              'স্টেবল আইসোটোপ কোষে ঢুকলে অণুগুলোতে ভিন্ন ভিন্ন সংখ্যায় ভারী পরমাণু যুক্ত হয়, যা M+0 (স্বাভাবিক), M+1 (একটি ভারী পরমাণু), M+2 (দুটি ভারী পরমাণু) ইত্যাদি বিভিন্ন ভরের অণু তৈরি করে। এদের আপেক্ষিক পরিমাণের অনুপাতকে ম্যাস আইসোটোপোমার বণ্টন (MID) বলা হয়, যা অরবিট্রেপ ম্যাস স্পেকট্রোমিটার দ্বারা নিখুঁতভাবে মাপা যায়।'
            ),
            l(
              'Before raw mass spectrometry intensities can be interpreted, they must undergo rigorous computational deconvolution. Approximately 1.1% of terrestrial carbon is naturally carbon-13. In a larger biological molecule such as palmitate (C16H32O2), natural background alone produces an M+1 abundance of over 17%. Mathematical correction matrices strip away this natural isotopic background to reveal the true tracer enrichment.',
              'যন্ত্রের কাঁচা ডেটা বিশ্লেষণের আগে গাণিতিক সংশোধন করতে হয়। যেহেতু প্রকৃতির ১.১% কার্বন স্বাভাবিকভাবেই কার্বন-১৩, তাই ১৬ কার্বনের পামিটিক অ্যাসিডে কোনো পরীক্ষা ছাড়াই প্রাকৃতিকভাবে ১৭% M+1 রূপ থাকে। বিশেষ অ্যালগরিদমের মাধ্যমে এই প্রাকৃতিক পটভূমি বাদ দিয়ে আসল পরীক্ষালব্ধ লেবেলিং বের করা হয়।'
            ),
            l(
              'By tracking positional labeling patterns, fluxomics distinguishes competing enzymatic pathways. For example, [1,2-13C2]glucose yields M+2 lactate when metabolized through glycolysis, but yields M+1 lactate if it passes through the oxidative pentose phosphate pathway where carbon-1 is decarboxylated into 13CO2. Measuring the M+1 to M+2 lactate ratio directly quantifies the partition of glucose between glycolysis and the PPP.',
              'কার্বন কোন নির্দিষ্ট অবস্থানে যুক্ত হয়েছে তা দেখে দুটি সমান্তরাল পথের গতি আলাদা করা যায়। যেমন [1,2-13C]গ্লুকোজ সরাসরি গ্লাইকোলাইসিস দিয়ে গেলে M+2 ল্যাকটেট তৈরি করে, কিন্তু পেন্টোজ ফসফেট পথ দিয়ে গেলে ১টি কার্বন CO2 হয়ে উড়ে গিয়ে M+1 ল্যাকটেট তৈরি করে। M+1 ও M+2 এর অনুপাত মেপে গ্লুকোজের কত অংশ কোন পথে গেছে তা সরাসরি গণনা করা যায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('In Vivo Human Surgical Infusions: Rewriting Human Tumor Biology', 'মানবদেহে অপারেশনের সময় সরাসরি আইসোটোপ প্রয়োগ: ক্যান্সার জীববিজ্ঞানের রূপান্তর'),
          paragraphs: [
            l(
              'The true clinical frontier of metabolic flux analysis is intraoperative in vivo stable isotope tracing. In pioneering translational oncology protocols established by DeBerardinis and colleagues, human patients with operable non-small cell lung cancer or brain glioblastoma receive a continuous peripheral intravenous infusion of [U-13C6]glucose throughout their tumor resection surgical procedure.',
              'বিপাকীয় প্রবাহের সবচেয়ে যুগান্তকারী প্রয়োগ হলো অপারেশনের সময় মানবদেহে স্টেবল আইসোটোপের সরাসরি পরীক্ষা। ফুসফুস ও মস্তিষ্কের ক্যান্সার অপারেশনের সময় রোগীর রক্তে [U-13C]গ্লুকোজ প্রবেশ করিয়ে টিউমার কেটে নেওয়ার পর সাথে সাথে পরীক্ষা করে দেখা হয় জীবন্ত মানবদেহে ক্যান্সার কীভাবে খাদ্য গ্রহণ করে।'
            ),
            l(
              'Within seconds of surgical excision, tumor and adjacent benign tissue specimens are snap-frozen in liquid nitrogen at -196 degrees Celsius to cryo-quench all enzymatic reactions within milliseconds. Ultra-high performance LC-MS analysis of these clinical biopsies revealed profound metabolic heterogeneity, proving that human lung tumors in patients exhibit active, high-flux mitochondrial glucose oxidation in vivo.',
              'অপারেশনের কয়েক সেকেন্ডের মধ্যে টিস্যুকে তরল নাইট্রোজেনে মাইনাস ১৯৬ ডিগ্রি সেলসিয়াসে জমিয়ে ফেলে এনজাইমের কাজ মিলিসেকেন্ডে থামিয়ে দেওয়া হয়। এরপর এলসি-এমএস পরীক্ষায় দেখা গেছে যে টেস্টটিউবের কালচারের ধারণার বিপরীতে মানবদেহের ফুসফুসের টিউমারগুলো জীবন্ত অবস্থায় প্রচুর পরিমাণে মাইটোকন্ড্রিয়াল শ্বসন বজায় রাখে।'
            ),
            l(
              'Subsequent intraoperative human infusions of [13C3]lactate overturned a century of biomedical dogma. Rather than functioning exclusively as an excreted toxic waste product of anaerobic glycolysis, circulating lactate was actively taken up by primary human lung carcinomas and oxidized in the mitochondrial TCA cycle, contributing more carbon to citrate synthesis than circulating glucose itself.',
              'পরবর্তীতে রোগীদের রক্তে [13C]ল্যাকটেট প্রয়োগ করে দেখা গেছে শতবর্ষের প্রচলিত বিশ্বাস ভুল প্রমাণিত হয়েছে। ল্যাকটেট শুধুই কোনো অপ্রয়োজনীয় বর্জ্য নয়; বরং রক্তে ভাসমান ল্যাকটেট টিউমার কোষগুলো পরম আগ্রহে গ্রহণ করে এবং মাইটোকন্ড্রিয়ায় পুড়িয়ে গ্লুকোজের চেয়েও বেশি শক্তি তৈরি করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Positional 13C Isotopomer Labeling: Resolving Parallel Pathways', 'নির্দিষ্ট অবস্থানে ১৩সি আইসোটোপ লেবেলিং: সমান্তরাল রাসায়নিক পথের পার্থক্য'),
          paragraphs: [
            l(
              'Strategically selecting specifically labeled position tracers uncouples parallel metabolic fluxes that generate indistinguishable bulk intermediates. By infusing [3,4-13C2]glucose versus [1,6-13C2]glucose, investigators map pyruvate kinase turnover versus anaplerotic carboxylation through malic enzyme and phosphoenolpyruvate carboxykinase (PEPCK). Tandem mass spectrometry (MS/MS) fragmentation resolves intramolecule label positions, yielding unambiguous flux determinations.',
              'সুনির্দিষ্ট স্থানে কার্বন-১৩ লেবেলযুক্ত গ্লুকোজ ব্যবহার করে একই ধরনের রাসায়নিক তৈরি করা একাধিক সমান্তরাল বিক্রিয়াকে আলাদা করা যায়। ট্যান্ডেম ম্যাস স্পেকট্রোমেট্রি (MS/MS) অণু ভেঙে ভেতরের কোন কার্বনে আইসোটোপ আছে তা নিখুঁতভাবে বের করে দেয়, ফলে জটিল জৈব রাসায়নিক নেটওয়ার্কের প্রতিটি বিক্রিয়ার গতিবেগ প্রশ্নাতীতভাবে প্রমাণিত হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Quantitative Fluxomics in Systems Biology', 'শিক্ষায়তনিক রূপরেখা: সিস্টেমস বায়োলজিতে পরিমাণগত ফ্লাক্সোমিক্স'),
          paragraphs: [
            l(
              'Metabolic flux analysis serves as the rigorous empirical bridge connecting cellular genetics and functional phenotype. While transcriptomics and proteomics quantify enzymatic machinery abundance, fluxomics measures actual in vivo catalytic turnover. Stoichiometric modeling constrained by mass isotopomer distributions represents the gold standard for quantitative metabolic systems biology.',
              'বিপাকীয় প্রবাহ বিশ্লেষণ জিনতত্ত্ব এবং দৃশ্যমান শারীরিক লক্ষণের মধ্যকার সবচেয়ে নির্ভরযোগ্য বৈজ্ঞানিক সেতু। জিনোমিক্স বা প্রোটিওমিক্স কেবল কোষে কতটা এনজাইম আছে তা বলে, কিন্তু ফ্লাক্সোমিক্স সেই এনজাইমের বাস্তব কাজের গতিবেগ পরিমাপ করে। আইসোটোপ-ভিত্তিক গাণিতিক মডেলিং হলো আধুনিক সিস্টেমস বায়োলজির সর্বোচ্চ নির্ভরযোগ্য মানদণ্ড।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উচ্চতর'),
      sections: [
        {
          id: 'integration',
          heading: l('Multi-Compartmental Organ Fluxomics and Subcellular Organelle Exchange', 'বহু-প্রকোষ্ঠীয় অঙ্গীয় ফ্লাক্সোমিক্স ও কোষীয় অঙ্গাণুর উপাদান বিনিময়'),
          paragraphs: [
            l(
              'A primary challenge in mammalian fluxomics is subcellular compartmentalization. Intermediates like malate, citrate, and acetyl-CoA exist in distinct cytosolic and mitochondrial pools with independent turnover rates. Non-aqueous fractionation and rapid mitochondrial immunoisolation combined with ultra-fast isotopic quenching allow direct sampling of organelle-specific mass isotopomer distributions, unmasking compartmental transport fluxes.',
              'স্তন্যপায়ী প্রাণীর কোষে ফ্লাক্সোমিক্সের প্রধান চ্যালেঞ্জ হলো অঙ্গাণুভিত্তিক প্রকোষ্ঠায়ন। সাইট্রেট বা ম্যালটের মতো উপাদানগুলো সাইটোপ্লাজম ও মাইটোকন্ড্রিয়ায় সম্পূর্ণ আলাদা গতিবেগে চলে। অতি-দ্রুত মাইটোকন্ড্রিয়া পৃথকীকরণ এবং তরল নাইট্রোজেনে শীতলীকরণের মাধ্যমে আধুনিক গবেষকরা সরাসরি মাইটোকন্ড্রিয়ার ভেতরের আইসোটোপ মেপে অঙ্গাণুদ্বয়ের মধ্যকার রাসায়নিক আদান-প্রদানের গতি পরিমাপ করেন।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('13C-MFA Computational Modeling: Solving Stoichiometric Matrices', '১৩সি-এমএফএ গাণিতিক মডেলিং: স্টয়কিওমেট্রিক ম্যাট্রিক্স সমাধান'),
          paragraphs: [
            l(
              'Transforming mass isotopomer distributions into absolute reaction velocity vectors requires 13C-metabolic flux analysis (13C-MFA) computational modeling. A comprehensive stoichiometric network model is defined mathematically as S * v = 0, where S is the m x n stoichiometric matrix of m metabolites across n biochemical reactions, and v is the vector of unknown flux velocities.',
              'আইসোটোপের বণ্টন থেকে রাসায়নিক বিক্রিয়ার প্রকৃত গতিবেগ ভেক্টর বের করতে বিশেষ কম্পিউটার মডেল ব্যবহার করা হয়। রাসায়নিক নেটওয়ার্ককে S * v = 0 সূত্রে প্রকাশ করা হয়, যেখানে S হলো সমস্ত রাসায়নিক পদার্থের স্টয়কিওমেট্রিক ম্যাট্রিক্স এবং v হলো বিক্রিয়াগুলোর অজানা গতিবেগ ভেক্টর।'
            ),
            l(
              'Because isotopic tracer distribution introduces hundreds of non-linear isotopomer balance equations, specialized software platforms (such as 13C-FLUX2 or INCA) utilize elementary metabolite units (EMU) algorithms. EMU modeling reduces the computational dimension by up to three orders of magnitude, iteratively minimizing variance-weighted sum of squared residuals between simulated and experimental mass isotopomers.',
              'যেহেতু আইসোটোপ সমীকরণগুলো অত্যন্ত জটিল ও নন-লিনিয়ার, তাই আধুনিক সুপারকম্পিউটারগুলো এলিমেন্টারি মেটাবোলাইট ইউনিট (EMU) অ্যালগরিদম ব্যবহার করে। এই উন্নত পদ্ধতি কয়েক হাজার সমীকরণকে এক নিমিষে সমাধান করে পরীক্ষাগারে পাওয়া ডেটার সাথে শতভাগ মিল রেখে বিক্রিয়ার বাস্তব গতিবেগ হিসাব করে দেয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('The Fluxomics Paradigm Shift: A Living Functional Blueprint', 'ফ্লাক্সোমিক্স দৃষ্টিভঙ্গির বিপ্লব: জীবন্ত দেহের কার্যকর নীলনকশা'),
          paragraphs: [
            l(
              'Metabolic flux analysis represents the ultimate functional readout of cellular physiology, integrating genomic transcription, post-translational modifications, allosteric regulation, and substrate availability into a single quantitative velocity vector. In precision medicine, fluxomics bridges the chasm between static genetic sequencing and living human biochemistry.',
              'বিপাকীয় প্রবাহ বিশ্লেষণ হলো জীববিজ্ঞানের সর্বোচ্চ কার্যকর পরিমাপ, যা জিনোমিক্স, এনজাইম নিয়ন্ত্রণ ও পুষ্টির সমাহারকে একটি একক গতিবেগে রূপান্তর করে। আধুনিক চিকিৎসায় এটি জিনগত পরীক্ষা এবং মানুষের জীবন্ত রসায়নের মধ্যকার দূরত্ব ঘুচিয়ে রোগ নিরাময়ের কার্যকর নীলনকশা তৈরি করে।'
            ),
          ],
        },
      ],
    },
  },
}

