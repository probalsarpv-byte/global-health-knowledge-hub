import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const mitoRefs = [
  {
    id: 'scarpulla-mito-biogenesis-physiolrev-2008',
    authors: 'Richard C. Scarpulla',
    title: 'Transcriptional Paradigms in Mammalian Mitochondrial Biogenesis and Function. Physiological Reviews, 88(2):611-638',
    organization: 'American Physiological Society',
    year: 2008,
    url: 'https://pubmed.ncbi.nlm.nih.gov/18391175/',
  },
  {
    id: 'youle-mito-dynamics-science-2012',
    authors: 'Richard J. Youle, Alexander M. van der Bliek',
    title: 'Mitochondrial Fission, Fusion, and Stress. Science, 337(6098):1062-1065',
    organization: 'AAAS',
    year: 2012,
    url: 'https://pubmed.ncbi.nlm.nih.gov/22936770/',
  },
  {
    id: 'pickrell-pink1-parkin-neuron-2015',
    authors: 'Alicia M. Pickrell, Richard J. Youle',
    title: 'The Roles of PINK1, Parkin, and Mitochondrial Quality Control in Neurodegeneration. Neuron, 85(2):257-273',
    organization: 'Elsevier / Cell Press',
    year: 2015,
    url: 'https://pubmed.ncbi.nlm.nih.gov/25611507/',
  },
  {
    id: 'muoio-metabolic-flexibility-cellmetab-2014',
    authors: 'Deborah M. Muoio',
    title: 'Metabolic Inflexibility: When Mitochondrial Indecision Leads to Metabolic Gridlock. Cell Metabolism, 20(3):399-401',
    organization: 'Elsevier / Cell Press',
    year: 2014,
    url: 'https://pubmed.ncbi.nlm.nih.gov/25176148/',
  },
  {
    id: 'randle-glucose-fatty-acid-cycle-lancet-1963',
    authors: 'Philip J. Randle, P. B. Garland, C. N. Hales, E. A. Newsholme',
    title: 'The Glucose Fatty-Acid Cycle: Its Role in Insulin Sensitivity and the Metabolic Disturbances of Diabetes Mellitus. The Lancet, 281(7285):785-789',
    organization: 'Elsevier',
    year: 1963,
    url: 'https://pubmed.ncbi.nlm.nih.gov/13990765/',
  },
]

const mito3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Mitochondrial Biogenesis, Dynamics & Flexibility',
    '৩ডি বহু-অঙ্গীয় মাইটোকন্ড্রিয়াল জৈবজনন, গতিশীলতা ও নমনীয়তার মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: explore how organ-specific mitochondrial networks coordinate biogenesis (PGC-1alpha), membrane fusion (MFN1/2, OPA1), fission (DRP1), and selective mitophagy (PINK1/Parkin) across the myocardium, skeletal muscle, brown adipose, and dopaminergic neurons.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: পর্যবেক্ষণ করুন কীভাবে হৃদপেশি, কঙ্কালপেশি, বাদামি চর্বিকলা এবং মস্তিষ্কের ডোপামিন নিউরনে PGC-1alpha চালিত জৈবজনন, ঝিল্লি সংযোজন (OPA1), বিভাজন (DRP1) এবং অটোফ্যাজি (PINK1/Parkin) পরিচালিত হয়।'
  ),
  description: l(
    'Mitochondria are not static isolated organelles, but a dynamic reticular network undergoing continuous fusion, fission, cristae remodeling, and selective quality-control degradation (mitophagy). Regulated by PGC-1alpha and fuel availability, this dynamic architecture dictates cellular metabolic flexibility—the capacity to switch rapidly between carbohydrate and lipid oxidation.',
    'মাইটোকন্ড্রিয়া কোনো স্থির অঙ্গাণু নয়, বরং একটি অত্যন্ত গতিশীল জালিকা যা প্রতিনিয়ত সংযোজন, বিভাজন, ক্রিস্টি পুনর্গঠন এবং গুণগত মান নিয়ন্ত্রণমূলক ধ্বংসের (মাইটোকন্ড্রিয়াল অটোফ্যাজি) মধ্য দিয়ে যায়। PGC-1alpha চালিত এই গতিশীলতা কোষের বিপাকীয় নমনীয়তা এবং শক্তি উৎপাদন নির্ধারণ করে।'
  ),
  organs: [
    {
      id: 'organ-myocardium-cristae-flux',
      name: l('Heart: Ventricular Myocardium (Dense Cristae & OPA1 Fusion)', 'হৃৎপিণ্ড: নিলয় হৃদপেশি (ঘন ক্রিস্টি ও OPA1 সংযোজন)'),
      latinName: 'Myocardium Ventriculi',
      system: l('Cardiovascular Muscular System', 'রক্ত সংবহন ও পেশিতন্ত্র'),
      cavity: l('Thoracic Cavity (Middle Mediastinum)', 'বক্ষ গহ্বর (মধ্য মিডিয়াস্টিনাম)'),
      position3D: { x: -4, y: 220, z: 3 },
      color: '#dc2626',
      highlightColor: '#ef4444',
      shapeType: 'heart',
      description: l(
        'Mitochondria occupy >40% of adult cardiomyocyte cell volume, packed with the densest cristae in the human body. Inner membrane GTPase OPA1 maintains cristae junctions tightly closed, concentrating protons across the inner mitochondrial membrane, assembling respiratory supercomplexes (respirasomes), and sequestering pro-apoptotic cytochrome c within the intracristal space.',
        'প্রাপ্তবয়স্ক হৃদপেশি কোষের আয়তনের ৪০%-এর বেশি অংশ মাইটোকন্ড্রিয়া দখল করে থাকে এবং মানবদেহের সবচেয়ে ঘন ক্রিস্টি ধারণ করে। OPA1 এনজাইম ক্রিস্টিকে নিবিড়ভাবে বন্ধ রেখে প্রোটন ঘনত্ব বজায় রাখে, ইলেকট্রন পরিবহন কমপ্লেক্সগুলোকে সুদৃঢ় রাখে এবং অ্যাপোপটোটিক সাইটোক্রোম সি-কে আটকে রাখে।'
      ),
      spatialRelations: l(
        'Interspersed directly between parallel myofibrillar bundles and adjacent to the sarcoplasmic reticulum for instant ATP and calcium flux.',
        'মায়োফাইব্রিল পেশিতন্তুর সমান্তরালে এবং সারকোপ্লাজমিক রেটিকুলামের সংলগ্ন অবস্থান করে যা তাৎক্ষণিক এটিপি ও ক্যালসিয়াম সরবরাহ করে।'
      ),
      physiology: l(
        'The adult myocardium is a metabolic omnivore that derives 60–80% of its ATP from fatty acid beta-oxidation, switching to lactate and glucose during intense workload or ischemia to optimize oxygen bioenergetic efficiency.',
        'প্রাপ্তবয়স্ক হৃদযন্ত্র ৬০–৮০% এটিপি ফ্যাটি অ্যাসিড থেকে পায়, তবে অতিরিক্ত পরিশ্রমে দ্রুত ল্যাকটেট ও গ্লুকোজ ব্যবহারে অভ্যস্ত হয়ে অক্সিজেন সাশ্রয় করে।'
      ),
      nutritionConnection: l(
        'Requires continuous carnitine for CPT-I palmitoyl-CoA import, coenzyme Q10 (ubiquinone) for electron shuttling, and thiamine/riboflavin/niacin for TCA cycle dehydrogenase complexes.',
        'ফ্যাটি অ্যাসিড পরিবহনে কার্নিটিন, ইলেকট্রন পরিবহনে কোএনজাইম কিউ১০ এবং ক্রেবস চক্রের জন্য থায়ামিন ও রিবোফ্লাভিনের অবিরাম উপস্থিতি প্রয়োজন।'
      ),
      clinicalSignificance: l(
        'Loss of OPA1 or MFN2 causes cristae widening, respiratory uncoupling, and mitochondrial fragmentation, precipitating dilated cardiomyopathy and heart failure with reduced ejection fraction (HFrEF).',
        'OPA1 বা MFN2 নষ্ট হলে ক্রিস্টি ঢিলে হয়ে শক্তি উৎপাদন বন্ধ হয়, যার ফলে ডাইলেটেড কার্ডিওমায়োপ্যাথি ও মারাত্মক হার্ট ফেইলিউর দেখা দেয়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-muscle-pgc1-biogenesis',
      name: l('Skeletal Muscle: Type I Fibers (PGC-1alpha Biogenesis)', 'কঙ্কালপেশি: টাইপ ১ তন্তু (PGC-1alpha জৈবজনন)'),
      latinName: 'Musculus Skeletalis Typus I',
      system: l('Musculoskeletal Locomotor System', 'কঙ্কাল-পেশি চলনতন্ত্র'),
      cavity: l('Somatic Musculature (Postural & Locomotor)', 'সোমাটিক পেশিকলা (ভঙ্গিমা ও চলন পেশি)'),
      position3D: { x: -8, y: 140, z: 2 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'skeleton',
      description: l(
        'Slow-twitch oxidative myofibers express high basal levels of peroxisome proliferator-activated receptor gamma coactivator 1-alpha (PGC-1alpha). Sustained physical training activates AMPK, CaMK, and p38 MAPK, transcriptionally inducing PGC-1alpha. PGC-1alpha coactivates NRF-1/2 to transcribe nuclear-encoded mitochondrial genes and mitochondrial transcription factor A (TFAM), doubling mitochondrial mass within weeks.',
        'ধীরগতির জারণক্ষম কঙ্কালপেশিতে উচ্চমাত্রায় PGC-1alpha থাকে। দীর্ঘস্থায়ী শারীরিক প্রশিক্ষণ AMPK ও CaMK প্রোটিনকে উদ্দীপ্ত করে PGC-1alpha বৃদ্ধি করে। এটি NRF-1/2 ও TFAM সক্রিয় করে কয়েক সপ্তাহের মধ্যে কোষের মোট মাইটোকন্ড্রিয়ার সংখ্যা দ্বিগুণ করে ফেলে।'
      ),
      spatialRelations: l(
        'Densely vascularized by extensive capillary networks delivering continuous oxygenated blood to oxidative postural muscle beds.',
        'প্রচুর রক্তনালী দ্বারা পরিবেষ্টিত যা বায়বীয় শ্বসনের জন্য অবিরাম অক্সিজেনযুক্ত রক্ত সরবরাহ নিশ্চিত করে।'
      ),
      physiology: l(
        'Mitochondrial biogenesis enhances maximal oxygen uptake (VO2 max), shifts the lactate threshold to higher workloads, and increases intramuscular lipid oxidation, sparing liver and muscle glycogen.',
        'মাইটোকন্ড্রিয়া বৃদ্ধি পেশির অক্সিজেন ব্যবহারের ক্ষমতা (VO2 max) বাড়ায় এবং পেশির লিপিড জারণ ক্ষমতা বৃদ্ধি করে গ্লাইকোজেন ক্ষয় রোধ করে।'
      ),
      nutritionConnection: l(
        'Endurance training in the fasted state or carbohydrate-restricted "train low" protocols amplifies AMPK and SIRT1 deacetylation of PGC-1alpha, accelerating mitochondrial adaptations.',
        'উপবাস অবস্থায় বা নিয়ন্ত্রিত শর্করায় ব্যায়াম করলে SIRT1 এনজাইম PGC-1alpha-কে সক্রিয় করে মাইটোকন্ড্রিয়া তৈরির গতি আরও বাড়িয়ে দেয়।'
      ),
      clinicalSignificance: l(
        'Physical inactivity, sedentary behavior, and aging cause progressive downregulation of PGC-1alpha, mitochondrial loss, intramuscular lipid accumulation, and peripheral insulin resistance.',
        'ব্যায়ামহীন অলস জীবনযাপন ও বার্ধক্যের কারণে PGC-1alpha কমে গিয়ে মাইটোকন্ড্রিয়া ধ্বংস হয় এবং পেশিতে ক্ষতিকর চর্বি জমে ইনসুলিন রেজিস্ট্যান্স তৈরি হয়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-liver-randle-switch',
      name: l('Liver: Hepatocyte Metabolic Flexibility & Fuel Switching', 'যকৃৎ: হেপাটোসাইট বিপাকীয় নমনীয়তা ও জ্বালানি রূপান্তর'),
      latinName: 'Hepar (Flexibilitas Metabolica)',
      system: l('Gastrointestinal & Metabolic Hub', 'পরিপাক ও প্রধান বিপাকীয় ব্যবস্থা'),
      cavity: l('Abdominal Cavity (Right Hypochondrium)', 'উদর গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 5, y: 175, z: 2 },
      color: '#059669',
      highlightColor: '#10b981',
      shapeType: 'liver',
      description: l(
        'The metabolic crossroads of the human body. Hepatocytes switch dynamically between de novo lipogenesis and glycogen storage in the fed state to robust beta-oxidation, ketogenesis, and gluconeogenesis during fasting. Rhythmic activation of mitochondrial PDK4 by high fatty acid oxidation preserves pyruvate for gluconeogenic glucose production.',
        'মানবদেহের কেন্দ্রীয় বিপাকীয় সংযোগস্থল। যকৃতের কোষগুলো পুষ্টির প্রাচুর্যে চর্বি ও গ্লাইকোজেন জমা করার কাজ থেকে উপবাসের সময় দ্রুত চর্বি পোড়ানো, কিটোন তৈরি এবং গ্লুকোজ সংশ্লেষণের দিকে নিজেদের মানিয়ে নেয়।'
      ),
      spatialRelations: l(
        'Surrounds hepatic sinusoids in close contact with portal blood delivering nutrient flux from the gut and oxygen from hepatic arteries.',
        'হেপাটিক সাইনুসয়েড দ্বারা পরিবেষ্টিত যা অন্ত্র থেকে আসা খাদ্যরস এবং ধমনীর অক্সিজেন সরাসরি গ্রহণ করে তাৎক্ষণিক বিপাক সমন্বয় করে।'
      ),
      physiology: l(
        'High beta-oxidation elevates mitochondrial acetyl-CoA, which allosterically activates pyruvate carboxylase (driving gluconeogenesis) while inactivating pyruvate dehydrogenase, preventing futile carbohydrate burning.',
        'উচ্চমাত্রার চর্বি পোড়ানোর ফলে উৎপন্ন অ্যাসিটাইল-কোএ পাইরুভেট কার্বক্সিলেজকে উদ্দীপ্ত করে নতুন গ্লুকোজ তৈরি সচল রাখে এবং অপ্রয়োজনীয় গ্লুকোজ ক্ষয় বন্ধ করে দেয়।'
      ),
      nutritionConnection: l(
        'Saturated fat and high-fructose corn syrup overload mitochondrial respiratory capacity, producing toxic lipid intermediates (diacylglycerols, ceramides) that impair flexibility.',
        'অতিরিক্ত স্যাচুরেটেড ফ্যাট এবং ফ্রুক্টোজ মাইটোকন্ড্রিয়ার ওপর প্রচণ্ড চাপ ফেলে ক্ষতিকর ডাইঅ্যাসাইলগ্লিসারল তৈরি করে যকৃতের নমনীয়তা নষ্ট করে দেয়।'
      ),
      clinicalSignificance: l(
        'Metabolic dysfunction-associated steatotic liver disease (MASLD) represents the hallmark clinical consequence of hepatic mitochondrial inflexibility, progressing to steatohepatitis and cirrhosis.',
        'মাইটোকন্ড্রিয়াল নমনীয়তা নষ্ট হওয়ার ফলে ফ্যাটি লিভার রোগ (MASLD) দেখা দেয় যা পরবর্তীতে মারাত্মক প্রদাহ ও লিভার সিরোসিসে রূপ নিতে পারে।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-brain-dopamine-mitophagy',
      name: l('Brain: Substantia Nigra (PINK1/Parkin Mitophagy & Parkinsonism)', 'মস্তিষ্ক: সাবস্ট্যানশিয়া নাইগ্রা (PINK1/Parkin অটোফ্যাজি ও পারকিনসন্স)'),
      latinName: 'Substantia Nigra Pars Compacta',
      system: l('Central Nervous System (Basal Ganglia)', 'কেন্দ্রীয় স্নায়ুতন্ত্র (বেসাল গ্যাংলিয়া)'),
      cavity: l('Cranial Cavity (Midbrain)', 'করোটিকা গহ্বর (মধ্যমস্তিষ্ক)'),
      position3D: { x: 0, y: 250, z: 0 },
      color: '#7c3aed',
      highlightColor: '#8b5cf6',
      shapeType: 'brain',
      description: l(
        'Dopaminergic neurons of the substantia nigra pars compacta have massive unmyelinated axonal arborizations with extreme basal bioenergetic demands and continuous dopamine oxidation stress. They depend obligately on active mitochondrial fission and PINK1/Parkin-mediated mitophagy to clear depolarized, ROS-generating organelles.',
        'মধ্যমস্তিষ্কের এই ডোপামিন তৈরি করা স্নায়ুকোষগুলোর হাজার হাজার শাখা-প্রশাখা থাকে এবং এদের শক্তির চাহিদা প্রচণ্ড বেশি। এরা ক্ষতিগ্রস্ত ও অকেজো মাইটোকন্ড্রিয়াগুলোকে দ্রুত পরিষ্কার করতে PINK1/Parkin চালিত অটোফ্যাজির ওপর সম্পূর্ণভাবে নির্ভরশীল।'
      ),
      spatialRelations: l(
        'Located in the ventrolateral mesencephalon, projecting extensive nigrostriatal tracts to the caudate and putamen.',
        'মধ্যমস্তিষ্কে অবস্থিত এবং বেসাল গ্যাংলিয়ার অন্যান্য অংশে স্নায়ুতন্তুর মাধ্যমে ডোপামিন সরবরাহ করে মানবদেহের অঙ্গ সঞ্চালন নিয়ন্ত্রণ করে।'
      ),
      physiology: l(
        'Autonomous pacemaking induces chronic calcium influx, requiring continuous mitochondrial calcium buffering and high OxPhos ATP production.',
        'স্বয়ংক্রিয় ছন্দবদ্ধ সংকেত তৈরির কারণে এদের কোষে অনবরত ক্যালসিয়াম প্রবেশ করে যা নিয়ন্ত্রণ করতে শক্তিশালী মাইটোকন্ড্রিয়াল এটিপি উৎপাদন প্রয়োজন।'
      ),
      nutritionConnection: l(
        'Iron accumulation in the substantia nigra worsens dopamine auto-oxidation and mitochondrial membrane lipid peroxidation, emphasizing dietary and cellular antioxidant defenses.',
        'মস্তিষ্কের এই অংশে অতিরিক্ত আয়রন জমলে ডোপামিনের বিষাক্ত জারণ বাড়ে, তাই কোষীয় অ্যান্টিঅক্সিডেন্ট প্রতিরক্ষা সচল রাখা একান্ত জরুরি।'
      ),
      clinicalSignificance: l(
        'Loss-of-function mutations in PINK1 (PARK6) or Parkin (PRKN / PARK2) cause early-onset autosomal recessive Parkinson’s disease due to the lethal accumulation of fragmented, cytotoxic, ROS-spewing mitochondria.',
        'PINK1 বা Parkin জিনে জন্মগত ত্রুটি থাকলে ক্ষতিকর মাইটোকন্ড্রিয়া ধ্বংস হতে পারে না, ফলে কম বয়সেই তীব্র পারকিনসন্স রোগ দেখা দেয়।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism30MitochondrialDynamicsLesson: LessonTopic = {
  id: 'topic.metabolism.mitochondrial-dynamics-flexibility',
  slug: 'mitochondrial-dynamics-flexibility',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '30 · Mitochondrial Biogenesis, Dynamics & Metabolic Flexibility',
    '৩০ · মাইটোকন্ড্রিয়াল জৈবজনন, গতিশীলতা ও বিপাকীয় নমনীয়তা'
  ),
  summary: l(
    'Molecular biology of mitochondrial networks: PGC-1alpha/NRF/TFAM biogenesis, outer membrane fusion via MFN1/2, inner membrane fusion and cristae organization via OPA1, DRP1-mediated fission at ER contact sites, PINK1/Parkin ubiquitin-directed mitophagy, metabolic flexibility and the Randle glucose-fatty acid cycle, and neurodegenerative mitochondrial pathologies.',
    'মাইটোকন্ড্রিয়াল নেটওয়ার্কের আণবিক জীববিদ্যা: PGC-1alpha/NRF/TFAM দ্বারা নতুন মাইটোকন্ড্রিয়া গঠন, MFN1/2 ও OPA1 দ্বারা ঝিল্লি সংযোজন ও ক্রিস্টি রক্ষা, DRP1 দ্বারা বিভাজন, PINK1/Parkin ইউবিকুইটিন পরিচালিত অটোফ্যাজি, র‍্যান্ডেল চক্র ও বিপাকীয় নমনীয়তা এবং স্নায়ুক্ষয়কারী রোগ।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Detail the transcriptional cascade governing mitochondrial biogenesis via PGC-1alpha, NRF-1/2, and TFAM, contrasting physiological triggers (exercise, cold exposure).',
      'PGC-1alpha, NRF-1/2 এবং TFAM দ্বারা মাইটোকন্ড্রিয়াল জৈবজনন নিয়ন্ত্রণ পদ্ধতি এবং ব্যায়াম ও ঠান্ডার শারীরবৃত্তীয় প্রভাব ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Contrast the molecular machineries of mitochondrial fusion (MFN1/2, OPA1) and fission (DRP1, FIS1, MFF), explaining their role in maintaining respirasome assembly and cristae architecture.',
      'MFN1/2 ও OPA1 দ্বারা মাইটোকন্ড্রিয়াল সংযোজন এবং DRP1 দ্বারা বিভাজন কৌশল এবং ক্রিস্টি গঠনে এদের অপরিহার্য ভূমিকা বিশ্লেষণ করা।'
    ),
    l(
      'Trace the PINK1/Parkin mitophagy pathway on depolarized mitochondria, outlining its failure in familial Parkinson’s disease and the biochemical basis of the Randle cycle in metabolic flexibility.',
      'ক্ষতিগ্রস্ত মাইটোকন্ড্রিয়ায় PINK1/Parkin অটোফ্যাজি পথ, পারকিনসন্স রোগের আণবিক ত্রুটি এবং র‍্যান্ডেল চক্রের বিপাকীয় নমনীয়তা মূল্যায়ন করা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.tca-oxphos'],
  relatedTopicIds: ['topic.metabolism.fatty-acid-oxidation-ketones', 'topic.metabolism.protein-turnover-proteasome-autophagy'],
  references: mitoRefs,
  evidenceBySection: {
    introduction: ['scarpulla-mito-biogenesis-physiolrev-2008', 'youle-mito-dynamics-science-2012'],
    structure: ['youle-mito-dynamics-science-2012', 'scarpulla-mito-biogenesis-physiolrev-2008'],
    mechanism: ['pickrell-pink1-parkin-neuron-2015', 'youle-mito-dynamics-science-2012'],
    integration: ['muoio-metabolic-flexibility-cellmetab-2014', 'randle-glucose-fatty-acid-cycle-lancet-1963'],
    practice: ['pickrell-pink1-parkin-neuron-2015', 'muoio-metabolic-flexibility-cellmetab-2014'],
    takeaways: ['scarpulla-mito-biogenesis-physiolrev-2008', 'randle-glucose-fatty-acid-cycle-lancet-1963'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Dynamic Mitochondrial Network', '১. গতিশীল মাইটোকন্ড্রিয়াল নেটওয়ার্ক'), sectionId: 'introduction' },
      { id: 'sec-biogenesis', label: l('2. Biogenesis Cascade: PGC-1alpha to TFAM', '২. জৈবজনন ক্যাসকেড: PGC-1alpha থেকে TFAM'), sectionId: 'structure' },
      { id: 'sec-dynamics', label: l('3. Fusion, Fission & Cristae Remodeling (MFN, OPA1, DRP1)', '৩. সংযোজন, বিভাজন ও ক্রিস্টি রূপান্তর (MFN, OPA1, DRP1)'), sectionId: 'mechanism' },
      { id: 'sec-mitophagy', label: l('4. Quality Control & Mitophagy: The PINK1/Parkin Axis', '৪. গুণগত মান ও অটোফ্যাজি: PINK1/Parkin অক্ষ'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Metabolic Flexibility & The Randle Glucose-Fatty Acid Cycle', '৫. বিপাকীয় নমনীয়তা ও র‍্যান্ডেল গ্লুকোজ-ফ্যাটি অ্যাসিড চক্র'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Core Takeaways & High-Yield Summary', '৬. মূল শিক্ষা ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('PGC-1alpha', 'PGC-1alpha'),
        definition: l(
          'Peroxisome proliferator-activated receptor gamma coactivator 1-alpha; master transcriptional coactivator that integrates physiological signals (AMPK, CaMK, p38 MAPK, SIRT1) to drive mitochondrial biogenesis.',
          'মাইটোকন্ড্রিয়াল জৈবজননের প্রধান নিয়ন্ত্রক প্রোটিন; যা ব্যায়াম ও ঠান্ডায় AMPK ও SIRT1 দ্বারা সক্রিয় হয়ে নতুন মাইটোকন্ড্রিয়া তৈরি করে।'
        ),
      },
      {
        term: l('Optic Atrophy 1 (OPA1)', 'অপটিক অ্যাট্রোফি ১ (OPA1)'),
        definition: l(
          'Dynamin-related GTPase of the inner mitochondrial membrane; mediates inner membrane fusion, maintains cristae junction tight architecture, and prevents premature release of cytochrome c.',
          'মাইটোকন্ড্রিয়ার ভেতরের ঝিল্লির GTPase এনজাইম; যা ঝিল্লি সংযোজন ঘটায়, ক্রিস্টি বন্ধ রাখে এবং সাইটোক্রোম সি নির্গমন প্রতিহত করে।'
        ),
      },
      {
        term: l('Dynamin-Related Protein 1 (DRP1)', 'ডায়নামিন-রিলেটেড প্রোটিন ১ (DRP1)'),
        definition: l(
          'Cytosolic GTPase recruited to outer mitochondrial membrane receptor complexes (MFF, FIS1, MID49/51) at endoplasmic reticulum contact sites to oligomerize and constrict mitochondria for fission.',
          'সাইটোপ্লাজমের GTPase এনজাইম যা মাইটোকন্ড্রিয়ার বাইরের ঝিল্লিতে রিং গঠন করে চেপে ধরে বিভাজন বা ফিশন সম্পন্ন করে।'
        ),
      },
      {
        term: l('PINK1 (PTEN-Induced Kinase 1)', 'PINK1 (PTEN-ইনডিউসড কাইনেজ ১)'),
        definition: l(
          'Mitochondrial serine/threonine kinase that acts as an electrochemical biosensor of membrane potential; cleaved in healthy mitochondria but accumulates on depolarized mitochondria to recruit and phosphorylate Parkin.',
          'মাইটোকন্ড্রিয়ার ভোল্টেজ সংবেদক কাইনেজ এনজাইম; সুস্থ কোষে ধ্বংস হলেও ক্ষতিগ্রস্ত মাইটোকন্ড্রিয়ায় জমা হয়ে পার্কিন প্রোটিনকে ডেকে আনে।'
        ),
      },
      {
        term: l('The Randle Cycle', 'র‍্যান্ডেল চক্র (The Randle Cycle)'),
        definition: l(
          'Reciprocal biochemical inhibition between glucose and fatty acid oxidation: high beta-oxidation produces acetyl-CoA (inhibiting PDH via PDK4) and citrate (inhibiting PFK-1), suppressing glucose uptake and glycolysis.',
          'গ্লুকোজ ও চর্বি পোড়ানোর মধ্যকার পারস্পরিক প্রতিযোগিতা: চর্বি বেশি পুড়লে উৎপন্ন অ্যাসিটাইল-কোএ ও সাইট্রেট গ্লাইকোলাইসিসকে বন্ধ করে দেয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Molecular Failure of Mitophagy in Familial Parkinsonism', 'বংশগত পারকিনসন্স রোগে মাইটোকন্ড্রিয়াল অটোফ্যাজির ব্যর্থতা'),
        steps: [
          l(
            'Step 1: In healthy, energized mitochondria (Delta-psi_m > -140 mV), newly synthesized PINK1 is imported across the outer and inner membranes via TOM and TIM23 translocases, where it is cleaved in the matrix by MPP and PARL proteases.',
            'ধাপ ১: সুস্থ মাইটোকন্ড্রিয়ায় নবগঠিত PINK1 অঙ্গাণুর ভেতরে প্রবেশ করে MPP ও PARL এনজাইম দ্বারা কাটা পড়ে এবং সাইটোপ্লাজমে প্রোটিয়েজোম দ্বারা দ্রুত ধ্বংস হয়ে যায়, ফলে স্বাভাবিক অবস্থায় এর মাত্রা প্রায় শূন্য থাকে।'
          ),
          l(
            'Step 2: When mitochondrial damage collapses the membrane potential, import stalls. Full-length 64 kDa PINK1 accumulates on the outer mitochondrial membrane (OMM) and autophosphorylates to activate its kinase domain.',
            'ধাপ ২: মাইটোকন্ড্রিয়া ক্ষতিগ্রস্ত হয়ে ভোল্টেজ হারালে PINK1 ভেতরে ঢুকতে না পেরে বাইরের ঝিল্লিতে জমা হয় এবং নিজস্ব কাইনেজ সক্রিয় করে তোলে।'
          ),
          l(
            'Step 3: PINK1 phosphorylates ubiquitin at Ser65 and the ubiquitin-like domain of Parkin (E3 ubiquitin ligase) at Ser65, unlocking Parkin autoinhibition and recruiting it to the outer membrane.',
            'ধাপ ৩: PINK1 ইউবিকুইটিন এবং পার্কিন উভয়কেই Ser65 স্থানে ফসফরাইলেশন করে সক্রিয় করে এবং ক্ষতিগ্রস্ত ঝিল্লিতে নিয়ে আসে।'
          ),
          l(
            'Step 4: Active Parkin polyubiquitinates OMM proteins (MFN1/2, VDAC1), recruiting autophagy receptors (OPTN, NDP52) that bind LC3-II to envelope the organelle into an autophagosome for lysosomal clearance.',
            'ধাপ ৪: সক্রিয় পার্কিন বাইরের প্রোটিনে ইউবিকুইটিন ট্যাগ লাগায়, যা অটোফ্যাজি গ্রাহক প্রোটিনকে টেনে এনে অঙ্গাণুটিকে লাইসোসোমে পাঠিয়ে ধ্বংস করে দেয়।'
          ),
        ],
        conclusion: l(
          'Loss-of-function mutations in PINK1 or Parkin paralyze this clearance cascade. Accumulation of fragmented, ROS-generating mitochondria triggers energetic collapse and neuroinflammation, destroying substantia nigra dopaminergic neurons in early-onset Parkinsonism.',
          'PINK1 বা Parkin জিনের ত্রুটি এই পরিষ্কার ব্যবস্থা অকেজো করে দেয়। ফলে বিষাক্ত মাইটোকন্ড্রিয়া জমে শক্তি উৎপাদন বন্ধ হয় ও তীব্র প্রদাহ সৃষ্টি করে মস্তিষ্কের ডোপামিন নিউরনগুলোকে অকালে ধ্বংস করে ফেলে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'What is the precise biochemical mechanism by which high rates of fatty acid oxidation suppress glucose utilization via the Randle cycle?',
          'র‍্যান্ডেল চক্রের মাধ্যমে উচ্চমাত্রার চর্বি জারণ কোন সুনির্দিষ্ট জৈবরাসাযনিক মেকানিজমে গ্লুকোজ ব্যবহারকে অবদমিত করে?'
        ),
        answer: l(
          'Beta-oxidation yields high mitochondrial acetyl-CoA and NADH, allosterically activating Pyruvate Dehydrogenase Kinase (PDK4), which phosphorylates and inactivates the pyruvate dehydrogenase (PDH) complex. Simultaneously, excess citrate leaves the mitochondria via the tricarboxylate carrier into the cytosol, allosterically inhibiting phosphofructokinase-1 (PFK-1). Accumulated glucose-6-phosphate then inhibits hexokinase, suppressing glucose uptake and glycolysis.',
          'চর্বি পুড়লে প্রচুর অ্যাসিটাইল-কোএ ও NADH তৈরি হয় যা PDK4 এনজাইমকে উদ্দীপ্ত করে পাইরুভেট ডিহাইড্রোজিনেজ (PDH) বন্ধ করে দেয়। একই সাথে সাইট্রেট সাইটোপ্লাজমে এসে PFK-1 এনজাইমকে সরাসরি বন্ধ করে দেয়, যার ফলে গ্লুকোজ গ্রহণ ও গ্লাইকোলাইসিস পুরোপুরি থমকে যায়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: mito3DData,
  interactiveDiagram: {
    id: 'diag-metabolism30-mitochondrial-dynamics',
    title: l('Interactive Molecular Cycle of Mitochondrial Dynamics: Biogenesis, Fusion, Fission & Mitophagy', 'মাইটোকন্ড্রিয়াল গতিশীলতার আণবিক জীবনচক্র: জৈবজনন, সংযোজন, বিভাজন ও অটোফ্যাজি'),
    disclaimer: l('Interactive educational diagram illustrating mitochondrial life cycle and quality control.', 'মাইটোকন্ড্রিয়াল জীবনচক্র ও গুণগত মান নিয়ন্ত্রণ প্রদর্শনকারী শিক্ষামূলক ডায়াগ্রাম।'),
    description: l(
      'Follow the life cycle of the mitochondrial network: transcriptional biogenesis via PGC-1alpha, membrane fusion mediated by MFN and OPA1, cristae remodeling, division by DRP1, and electrochemical quality control by PINK1 and Parkin.',
      'মাইটোকন্ড্রিয়াল নেটওয়ার্কের সম্পূর্ণ জীবনচক্র পর্যবেক্ষণ করুন: PGC-1alpha চালিত জৈবজনন, MFN ও OPA1 দ্বারা ঝিল্লি সংযোজন, ক্রিস্টি গঠন, DRP1 দ্বারা বিভাজন এবং PINK1/Parkin পরিচালিত অটোফ্যাজি।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-pgc1-biogenesis',
        label: l('1. PGC-1alpha & TFAM Biogenesis Cascade', '১. PGC-1alpha ও TFAM জৈবজনন ক্যাসকেড'),
        description: l('Exercise (AMPK) and cold induce PGC-1alpha, coactivating NRF-1/2 and TFAM to replicate mtDNA.', 'ব্যায়াম ও ঠান্ডায় PGC-1alpha সক্রিয় হয়ে NRF ও TFAM-এর মাধ্যমে নতুন মাইটোকন্ড্রিয়া তৈরি করে।'),
        details: l('Drives expression of all 13 mtDNA respiratory subunits and hundreds of nuclear-encoded genes.', 'মাইটোকন্ড্রিয়ার ১৩টি নিজস্ব প্রোটিন এবং শত শত নিউক্লিয়ার প্রোটিন তৈরিতে নেতৃত্ব দেয়।'),
        sectionId: 'structure',
        color: '#10b981',
      },
      {
        id: 'node-mfn-outer-fusion',
        label: l('2. Mitofusins 1 & 2: Outer Membrane Fusion', '২. মাইটোফিউসিন ১ ও ২: বহিঃঝিল্লি সংযোজন'),
        description: l('GTPases MFN1 and MFN2 tether adjacent outer mitochondrial membranes, initiating organelle fusion.', 'MFN1 ও MFN2 এনজাইম পাশাপাশি দুটি মাইটোকন্ড্রিয়াকে বেঁধে ফেলে বাইরের ঝিল্লি একত্রিত করে।'),
        details: l('Mutations in MFN2 cause Charcot-Marie-Tooth hereditary motor and sensory neuropathy type 2A.', 'MFN2 জিনের ত্রুটিতে চারকোট-মেরি-টুথ নামক বংশগত স্নায়ুরোগ দেখা দেয়।'),
        sectionId: 'mechanism',
        color: '#3b82f6',
      },
      {
        id: 'node-opa1-inner-fusion',
        label: l('3. OPA1 & Cristae Junction Architecture', '৩. OPA1 ও ক্রিস্টি জংশন গঠন'),
        description: l('Inner membrane GTPase OPA1 drives IMM fusion and locks cristae junctions tightly closed.', 'OPA1 ভেতরের ঝিল্লি জোড়া লাগায় এবং ক্রিস্টিকে নিবিড়ভাবে বন্ধ রেখে শক্তি ধরে রাখে।'),
        details: l('Maintains respirasome assembly and prevents premature apoptotic release of cytochrome c.', 'ইলেকট্রন পরিবহন চেইনকে মজবুত রাখে এবং অকালে সাইটোক্রোম সি নির্গমন প্রতিহত করে।'),
        sectionId: 'mechanism',
        color: '#8b5cf6',
      },
      {
        id: 'node-drp1-fission',
        label: l('4. DRP1 Constriction & Mitochondrial Fission', '৪. DRP1 সংকোচন ও মাইটোকন্ড্রিয়াল বিভাজন'),
        description: l('DRP1 is recruited to ER-mitochondria contact sites, forming oligomeric constriction rings.', 'DRP1 মাইটোকন্ড্রিয়ার গায়ে বৃত্তাকার বলয় তৈরি করে চেপে ধরে বিভাজন সম্পন্ন করে।'),
        details: l('Isolates damaged, depolarized segments into daughter organelles for targeted degradation.', 'ক্ষতিগ্রস্ত অংশগুলোকে আলাদা করে ধ্বংসের জন্য প্রস্তুত করে।'),
        sectionId: 'mechanism',
        color: '#f59e0b',
      },
      {
        id: 'node-pink1-parkin-mitophagy',
        label: l('5. PINK1/Parkin Depolarization Sensing & Mitophagy', '৫. PINK1/Parkin ভোল্টেজ সংবেদন ও অটোফ্যাজি'),
        description: l('Depolarization stabilizes PINK1 on OMM, recruiting Parkin to ubiquitinate proteins for autophagosomes.', 'ভোল্টেজ হারালে PINK1 জমা হয় যা পার্কিনকে এনে ইউবিকুইটিন দিয়ে লাইসোসোমে পাঠায়।'),
        details: l('Mutations cause early-onset autosomal recessive Parkinsonism due to toxic mitochondrial buildup.', 'ত্রুটি হলে বিষাক্ত মাইটোকন্ড্রিয়া জমে কম বয়সেই পারকিনসন্স রোগ সৃষ্টি হয়।'),
        sectionId: 'integration',
        color: '#ec4899',
      },
      {
        id: 'node-randle-flexibility',
        label: l('6. Randle Cycle & Metabolic Flexibility', '৬. র‍্যান্ডেল চক্র ও বিপাকীয় নমনীয়তা'),
        description: l('Beta-oxidation inhibits PDH (via PDK4) and PFK-1 (via citrate), switching fuels dynamically.', 'চর্বি জারণ গ্লুকোজ ব্যবহার বন্ধ করে দেয়, যা খাবার ও উপবাসের মধ্যে নিখুঁত সমন্বয় ঘটায়।'),
        details: l('Loss of flexibility characterizes insulin resistance, type 2 diabetes, and heart failure.', 'এই নমনীয়তা নষ্ট হলে ইনসুলিন রেজিস্ট্যান্স ও ডায়াবেটিস দেখা দেয়।'),
        sectionId: 'practice',
        color: '#ef4444',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'An integrated biochemical map connecting the PGC-1alpha/TFAM transcriptional biogenesis cascade, MFN1/2 and OPA1 membrane fusion, DRP1 fission, the PINK1/Parkin quality control mitophagy checkpoint, and the Randle metabolic flexibility cycle.',
      'একটি সমন্বিত জৈবরাসাযনিক মানচিত্র যা PGC-1alpha/TFAM জৈবজনন, MFN1/2 ও OPA1 সংযোজন, DRP1 বিভাজন, PINK1/Parkin অটোফ্যাজি এবং র‍্যান্ডেল বিপাকীয় নমনীয়তা চক্রকে সংযুক্ত করে।'
    ),
    steps: [
      l('AMPK and SIRT1 activate PGC-1alpha, inducing NRF-1/2 and TFAM to transcribe nuclear and mtDNA genes.', 'AMPK ও SIRT1 এনজাইম PGC-1alpha-কে সক্রিয় করে নতুন মাইটোকন্ড্রিয়া সংশ্লেষ পরিচালনা করে।'),
      l('MFN1/2 fuses outer membranes while OPA1 fuses inner membranes and tightens cristae junctions.', 'MFN1/2 বাইরের ঝিল্লি এবং OPA1 ভেতরের ঝিল্লি সংযোজন করে ক্রিস্টিকে নিবিড়ভাবে বন্ধ রাখে।'),
      l('DRP1 constricts damaged mitochondrial tubules at ER contact sites to segregate dysfunctional units.', 'DRP1 ক্ষতিগ্রস্ত অংশগুলোকে আলাদা করতে মাইটোকন্ড্রিয়াকে দ্বিখণ্ডিত করে।'),
      l('PINK1 stabilizes on depolarized membranes, activating Parkin to direct selective autophagic destruction.', 'PINK1 ক্ষতিগ্রস্ত ঝিল্লিতে জমা হয়ে পার্কিন প্রোটিনের মাধ্যমে অঙ্গাণুটিকে লাইসোসোমে ধ্বংস করে।'),
    ],
  },
  assessment: {
    question: l(
      'A 32-year-old female presents with progressive resting tremor, bradykinesia, and rigidity. Genetic testing reveals a homozygous loss-of-function mutation in the PRKN gene (encoding Parkin). What is the fundamental molecular mechanism linking this genetic defect to the selective loss of substantia nigra dopaminergic neurons?',
      '৩২ বছর বয়সী এক নারীর হাত-পা কাঁপুনি ও মন্থর গতির লক্ষণ দেখা দিল। জিন পরীক্ষায় তার PRKN (Parkin) জিনে ত্রুটি পাওয়া গেল। এই জন্মগত ত্রুটিটি কীভাবে মস্তিষ্কের ডোপামিন নিউরনগুলোকে ধ্বংস করে পারকিনসন্স রোগ সৃষ্টি করে?'
    ),
    options: [
      l(
        'Failure to ubiquitinate outer mitochondrial membrane proteins on depolarized mitochondria prevents recruitment of autophagy receptors (OPTN/p62), allowing fragmented, ROS-generating, dysfunctional mitochondria to accumulate and trigger neuronal death.',
        'ক্ষতিগ্রস্ত মাইটোকন্ড্রিয়ায় ইউবিকুইটিন যুক্ত না হওয়ায় অটোফ্যাজি বন্ধ হয়ে যায়, ফলে বিষাক্ত মুক্ত র্যাডিক্যাল উৎপাদনকারী অকেজো মাইটোকন্ড্রিয়া জমে গিয়ে স্নায়ুকোষের মৃত্যু ঘটায়।'
      ),
      l(
        'Direct hyperactivation of tyrosine hydroxylase causing cytotoxic dopamine quinone overproduction.',
        'টাইরোসিন হাইড্রোক্সিলেজ অতিরিক্ত সক্রিয় হয়ে বিষাক্ত ডোপামিন কুইনোন তৈরি করে।'
      ),
      l(
        'Permanent allosteric inhibition of optic atrophy 1 (OPA1), destroying cristae junctions.',
        'OPA1 এনজাইম স্থায়ীভাবে বন্ধ হয়ে গিয়ে ক্রিস্টি ধ্বংস করে ফেলে।'
      ),
      l(
        'Failure of mitochondrial transcription factor A (TFAM) to enter the nucleus, halting biogenesis.',
        'TFAM নিউক্লিয়াসে ঢুকতে না পেরে নতুন মাইটোকন্ড্রিয়া তৈরি বন্ধ করে দেয়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Parkin is an E3 ubiquitin ligase recruited by PINK1 to depolarized mitochondria. Parkin polyubiquitinates outer membrane proteins, recruiting autophagy adaptors (OPTN, NDP52) to engulf damaged mitochondria into autophagosomes. In PRKN mutations, mitophagy fails completely; damaged mitochondria accumulate, generating massive ROS and leaking mtDNA, triggering neuroinflammation and apoptosis in high-energy substantia nigra neurons.',
      'পার্কিন হলো একটি E3 ইউবিকুইটিন লাইগেজ যা PINK1 দ্বারা ক্ষতিগ্রস্ত মাইটোকন্ড্রিয়ায় এসে প্রোটিন চিহ্নিত করে। এরপর অটোফ্যাজি ভেসিকল এসে অকেজো অঙ্গাণুটিকে ধ্বংস করে। Parkin জিনে ত্রুটি থাকলে এই পরিচ্ছন্নতা ব্যর্থ হয়; ফলে বিষাক্ত ও অকেজো মাইটোকন্ড্রিয়া জমে প্রচুর ক্ষতিকর র্যাডিক্যাল তৈরি করে মস্তিষ্কের ডোপামিন নিউরনগুলোকে মেরে ফেলে।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Living Network: Mitochondria as Dynamic Reticular Networks', 'জীবন্ত জালিকা: গতিশীল অঙ্গাণু হিসেবে মাইটোকন্ড্রিয়া'),
          paragraphs: [
            l(
              'For decades, standard biology textbooks depicted mitochondria as static, kidney bean-shaped organelles floating passively in the cytosol. Modern super-resolution fluorescence microscopy and 3D electron cryo-tomography have completely overturned this view: mitochondria in living human cells form a vibrant, interconnected tubular network that is constantly elongating, branching, dividing, and moving along microtubule tracks.',
              'বহু দশক ধরে সাধারণ পাঠ্যবইয়ে মাইটোকন্ড্রিয়াকে সাইটোপ্লাজমে ভাসমান একটি স্থির, শিমের বিচির মতো অঙ্গাণু হিসেবে বর্ণনা করা হতো। আধুনিক অতি-উচ্চক্ষমতাসম্পন্ন ফ্লুরোসেন্স মাইক্রোস্কোপি এই ধারণা পুরোপুরি বদলে দিয়েছে: মানবদেহের জীবন্ত কোষে মাইটোকন্ড্রিয়া একটি অত্যন্ত গতিশীল ও পরস্পর সংযুক্ত নলাকার জালিকা গঠন করে যা প্রতিনিয়ত লম্বা হয়, শাখা বিস্তার করে, বিভক্ত হয় এবং স্নায়ুর ট্র্যাকে চলাচল করে।'
            ),
            l(
              'This structural fluidity is vital for human health. Through continuous cycles of fusion (merging) and fission (division), mitochondria mix their soluble contents, share mitochondrial DNA genomes, repair damaged segments, and segregate irreversibly dysfunctional units for disposal. When this dynamic equilibrium breaks down, cellular bioenergetics collapses, causing neurodegeneration, cardiomyopathy, and metabolic disease.',
              'এই রূপান্তর ক্ষমতা মানবদেহের সুস্থতার জন্য অপরিহার্য। সংযোজন (ফিউশন) ও বিভাজনের (ফিশন) মাধ্যমে মাইটোকন্ড্রিয়া তাদের অভ্যন্তরীণ উপাদান ও ডিএনএ বিনিময় করে, ক্ষতিগ্রস্ত অংশ মেরামত করে এবং সম্পূর্ণ নষ্ট অংশগুলোকে আলাদা করে ধ্বংস করে ফেলে। এই সূক্ষ্ম ভারসাম্য বিঘ্নিত হলে শক্তি উৎপাদন বন্ধ হয়ে স্নায়ুক্ষয়, হৃদরোগ এবং জটিল বিপাকীয় ব্যাধি দেখা দেয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Mitochondrial Biogenesis: The PGC-1alpha Transcriptional Engine', 'মাইটোকন্ড্রিয়াল জৈবজনন: PGC-1alpha চালিত আণবিক চালিকাশক্তি'),
          paragraphs: [
            l(
              'Human cells cannot construct mitochondria de novo from scratch; new mitochondria arise exclusively through the growth and division of pre-existing organelles, a legacy of their endosymbiotic bacterial ancestry. The master conductor of this biogenic program is peroxisome proliferator-activated receptor gamma coactivator 1-alpha (PGC-1alpha). Highly expressed in brown adipose tissue, heart, and skeletal muscle, PGC-1alpha is transcriptionally induced by physiological challenges such as cold exposure and endurance exercise.',
              'মানবদেহ কখনোই শূন্য থেকে নতুন মাইটোকন্ড্রিয়া তৈরি করতে পারে না; প্রাক-বিদ্যমান অঙ্গাণুর বৃদ্ধি ও বিভাজনের মাধ্যমেই কেবল নতুন মাইটোকন্ড্রিয়ার জন্ম হয়, যা তাদের আদিম ব্যাকটেরিয়াল বংশগতির প্রমাণ। এই নতুন মাইটোকন্ড্রিয়া তৈরির প্রধান পরিচালক হলো PGC-1alpha প্রোটিন। বাদামি চর্বি, হৃদযন্ত্র ও কঙ্কালপেশিতে উচ্চমাত্রায় থাকা এই প্রোটিনটি ব্যায়াম ও ঠান্ডার মতো শারীরবৃত্তীয় সংকেতের মাধ্যমে সক্রিয় হয়ে ওঠে।'
            ),
            l(
              'Because mitochondria contain dual genomes—their own circular 16.6 kilobase mtDNA encoding 13 respiratory subunits and the nuclear genome encoding >1,000 mitochondrial proteins—biogenesis requires tight nuclear-mitochondrial coordination. PGC-1alpha coactivates nuclear respiratory factors 1 and 2 (NRF-1 and NRF-2), driving transcription of nuclear OxPhos subunits and mitochondrial transcription factor A (TFAM). TFAM then translocates into the mitochondrial matrix to orchestrate mtDNA replication and transcription.',
              'মাইটোকন্ড্রিয়ার নিজস্ব ডিএনএ (যা ১৩টি শ্বসন প্রোটিন তৈরি করে) এবং নিউক্লিয়ার ডিএনএ (যা ১,০০০-এর বেশি প্রোটিন তৈরি করে)—উভয় জিনোমের মধ্যে নিখুঁত সমন্বয় প্রয়োজন। PGC-1alpha নিউক্লিয়ার রেস্পিরেটরি ফ্যাক্টর (NRF-1/2) এবং TFAM-কে সক্রিয় করে। TFAM মাইটোকন্ড্রিয়ার ভেতরে ঢুকে নিজস্ব ডিএনএ প্রতিলিপন ও ট্রান্সক্রিপশন পরিচালনা করে পূর্ণাঙ্গ নতুন মাইটোকন্ড্রিয়া তৈরি করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Membrane Fusion and Fission Dynamics: MFN, OPA1, and DRP1', 'ঝিল্লি সংযোজন ও বিভাজন গতিবিদ্যা: MFN, OPA1 ও DRP1'),
          paragraphs: [
            l(
              'Mitochondrial shape is actively balanced by opposing fusion and fission machineries. Outer membrane fusion is catalyzed by mitofusins (MFN1 and MFN2), whereas inner membrane fusion and cristae maintenance require Optic Atrophy 1 (OPA1). Conversely, mitochondrial fission is driven by dynamin-related protein 1 (DRP1), which oligomerizes into helical rings around organelles to constrict and sever both membranes.',
              'মাইটোকন্ড্রিয়ার বাহ্যিক রূপ সংযোজন এবং বিভাজনের এক সূক্ষ্ম ভারসাম্যের ওপর নির্ভরশীল। বাইরের ঝিল্লি জোড়া লাগায় মাইটোফিউসিন (MFN1/2), এবং ভেতরের ঝিল্লি ও ক্রিস্টি রক্ষা করে OPA1। অপরপক্ষে বিভাজনের কাজটি করে DRP1 নামক প্রোটিন, যা বাইরের ঝিল্লির চারপাশ পেঁচিয়ে বলয় তৈরি করে সংকুচিত করে অঙ্গাণুটিকে দ্বিখণ্ডিত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Quality Control and Mitophagy: The PINK1/Parkin Clearance Circuit', 'গুণগত মান নিয়ন্ত্রণ ও অটোফ্যাজি: PINK1/Parkin পরিচ্ছন্নতা ব্যবস্থা'),
          paragraphs: [
            l(
              'When individual mitochondria suffer severe oxidative injury or electrochemical depolarization, they are segregated from the network by fission and tagged for autophagic destruction. The serine/threonine kinase PINK1 accumulates on depolarized outer membranes, recruiting and activating the E3 ubiquitin ligase Parkin to trigger selective mitophagy, protecting the host cell from cytotoxic reactive oxygen species.',
              'যখন কোনো নির্দিষ্ট মাইটোকন্ড্রিয়া মারাত্মকভাবে ক্ষতিগ্রস্ত হয় বা ভোল্টেজ হারিয়ে ফেলে, তখন বিভাজনের মাধ্যমে তাকে আলাদা করে লাইসোসোমে ধ্বংসের জন্য চিহ্নিত করা হয়। PINK1 কাইনেজ ক্ষতিগ্রস্ত ঝিল্লিতে জমা হয়ে পার্কিন প্রোটিনকে ডেকে এনে ইউবিকুইটিন ট্যাগ লাগায়, যা পুরো অঙ্গাণুটিকে অটোফ্যাজির মাধ্যমে পরিষ্কার করে ফেলে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Scenario: Mitophagy Failure in Familial Parkinsonism', 'ক্লিনিক্যাল দৃশ্যপট: বংশগত পারকিনসন্স রোগে মাইটোকন্ড্রিয়াল অটোফ্যাজির ব্যর্থতা'),
          paragraphs: [
            l(
              'In patients inheriting homozygous loss-of-function mutations in PINK1 or Parkin (PRKN), the quality-control mitophagy machinery fails completely. Dysfunctional, electron-leaking mitochondria accumulate inside long substantia nigra axons, producing massive chronic oxidative stress that leads to early-onset Parkinsonism, emphasizing the essential role of mitochondrial clearance in neuronal survival.',
              'বংশগত কারণে PINK1 বা Parkin জিনে ত্রুটি থাকলে এই পরিচ্ছন্নতা ব্যবস্থা সম্পূর্ণ অকেজো হয়ে পড়ে। ক্ষতিগ্রস্ত ও বিষাক্ত মাইটোকন্ড্রিয়াগুলো মস্তিষ্কের সংবেদনশীল ডোপামিন নিউরনে জমে মারাত্মক মুক্ত র্যাডিক্যাল তৈরি করে, যার ফলে অল্প বয়সেই পারকিনসন্স রোগ দেখা দেয় এবং স্নায়ু ধ্বংস হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Core Principles of Mitochondrial Reticular Homeostasis', 'মাইটোকন্ড্রিয়াল নেটওয়ার্কের মৌলিক নীতিমালা ও মূল শিক্ষা'),
          paragraphs: [
            l(
              'Mitochondrial health requires continuous coordination between biogenesis driven by PGC-1alpha, structural remodeling via MFN/OPA1 fusion and DRP1 fission, and selective degradation of depolarized units via PINK1/Parkin mitophagy. Disruptions in any component of this integrated quality-control triad precipitate energetic crisis and accelerate human degenerative diseases.',
              'মাইটোকন্ড্রিয়ার সুস্থতা PGC-1alpha চালিত জৈবজনন, MFN/OPA1/DRP1 দ্বারা রূপান্তর এবং PINK1/Parkin দ্বারা ক্ষতিগ্রস্ত অংশ অপসারণের ত্রিবিধ সমন্বয়ের ওপর প্রতিষ্ঠিত। এই শৃঙ্খলের যেকোনো একটি অংশ ভেঙে পড়লে কোষের শক্তি উৎপাদন চরমভাবে ব্যাহত হয় এবং মানবদেহে জটিল রোগ ও অকাল বার্ধক্য সৃষ্টি হয়।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Reticular Architecture and Bioenergetic Coupling of Mitochondria', 'মাইটোকন্ড্রিয়ার জালিকা গঠন ও জৈবশক্তিগত কাপলিং'),
          paragraphs: [
            l(
              'Rather than existing as autonomous energetic entities, mitochondria constitute a highly dynamic, interconnected continuum whose morphologic plasticity directly governs bioenergetic capacity. Structural connectivity allows rapid diffusion of matrix metabolites, shared distribution of mitochondrial membrane potentials across extended cellular distances, and rapid equilibration of protective antioxidant machinery throughout the reticular framework.',
              'মাইটোকন্ড্রিয়া কোনো বিচ্ছিন্ন শক্তি উৎপাদনকারী একক নয়, বরং এটি একটি নিবিড়ভাবে সংযুক্ত গতিশীল জালিকা যার গাঠনিক রূপ সরাসরি শক্তি উৎপাদনকে নিয়ন্ত্রণ করে। এই সংযোগের কারণে সাইটোপ্লাজমের এক প্রান্ত থেকে অন্য প্রান্তে বৈদ্যুতিক ভোল্টেজ, মেটাবোলাইট এবং অ্যান্টিঅক্সিডেন্ট এনজাইমগুলো তাৎক্ষণিকভাবে ছড়িয়ে পড়তে পারে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Molecular Enzymology of Mitochondrial Biogenesis: NRF-1/2, TFAM, and mtDNA Transcription', 'জৈবজননের আণবিক এনজাইমবিজ্ঞান: NRF-1/2, TFAM ও mtDNA ট্রান্সক্রিপশন'),
          paragraphs: [
            l(
              'Mitochondrial biogenesis demands stoichiometric coordination between the nuclear and mitochondrial genomes. PGC-1alpha operates as an adaptable docking platform that recruits histone acetyltransferases (p300/CBP) and the TRAP/mediator complex to promoters of nuclear respiratory factors NRF-1 and NRF-2. These factors directly transcribe nuclear OxPhos genes and mitochondrial transcription factor A (TFAM), which packages mtDNA into functional nucleoids.',
              'মাইটোকন্ড্রিয়াল জৈবজননে নিউক্লিয়াস ও মাইটোকন্ড্রিয়াল জিনোমের নিখুঁত সমন্বয় আবশ্যক। PGC-1alpha নিউক্লিয়াসে NRF-1 এবং NRF-2 প্রোটিনগুলোকে উদ্দীপ্ত করে শ্বাসযন্ত্রের মূল উপাদান এবং TFAM তৈরি করে। TFAM মাইটোকন্ড্রিয়ার নিজস্ব ১৬.৬ কেবি বৃত্তাকার ডিএনএ-কে সুরক্ষিত নিউক্লিওয়েড হিসেবে সাজিয়ে প্রতিলিপন ও ট্রান্সক্রিপশন পরিচালনা করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Membrane Dynamics & Architecture: Mitofusins, OPA1 & DRP1', 'ঝিল্লি গতিশীলতা ও গঠন: মাইটোফিউসিন, OPA1 ও DRP1'),
          paragraphs: [
            l(
              'Mitochondrial fusion is a sequential two-step mechanical process driven by large dynamin-family GTPases. Outer mitochondrial membrane (OMM) fusion is executed by mitofusins 1 and 2 (MFN1 and MFN2), integral membrane proteins that form antiparallel homotypic and heterotypic coiled-coil dimers across opposing organelles, consuming GTP to pull the outer lipid bilayers together. Mutations in MFN2 impair axonal mitochondrial transport and cause Charcot-Marie-Tooth disease type 2A.',
              'মাইটোকন্ড্রিয়াল সংযোজন হলো দুটি ধাপে সম্পন্ন একটি যান্ত্রিক প্রক্রিয়া যা বিশেষ GTPase এনজাইম দ্বারা পরিচালিত হয়। বাইরের ঝিল্লি জোড়া লাগানোর কাজটি করে মাইটোফিউসিন ১ ও ২ (MFN1/2)। এই প্রোটিনগুলো পাশাপাশি দুটি অঙ্গাণুর মাঝে সেতু তৈরি করে GTP ভেঙে বাইরের লিপিড স্তরকে একীভূত করে। MFN2 জিনের ত্রুটি স্নায়ুর লম্বা শাখায় মাইটোকন্ড্রিয়া চলাচল বন্ধ করে চারকোট-মেরি-টুথ টাইপ ২এ নামক বংশগত স্নায়ুরোগ সৃষ্টি করে।'
            ),
            l(
              'Inner mitochondrial membrane (IMM) fusion requires Optic Atrophy 1 (OPA1), which exists in both membrane-anchored long (L-OPA1) and soluble short (S-OPA1) proteolytically cleaved forms. Balanced stoichiometric assemblies of L- and S-OPA1 mediate IMM fusion and maintain cristae junctions tightly constricted. Narrow cristae junctions limit proton leak, optimize ATP synthase dimer rows at the cristae tips, and trap cytochrome c inside the intracristal lumen, setting an anti-apoptotic threshold.',
              'ভেতরের ঝিল্লি জোড়া লাগাতে প্রয়োজন অপটিক এট্রোফি ১ (OPA1) এনজাইম। OPA1 ভেতরের ঝিল্লিকে একীভূত করার পাশাপাশি ক্রিস্টির সরু মুখগুলোকে নিবিড়ভাবে বন্ধ রাখে। সরু ক্রিস্টি জংশন প্রোটন অপচয় কমায়, এটিপি সিন্থেসকে সাজিয়ে রাখে এবং সাইটোক্রোম সি-কে ভেতরে আটকে রেখে কোষের অকাল মৃত্যু (অ্যাপোপটোসিস) প্রতিহত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Quality Control & Mitophagy: The PINK1/Parkin Circuit', 'গুণগত মান নিয়ন্ত্রণ ও অটোফ্যাজি: PINK1/Parkin বর্তনী'),
          paragraphs: [
            l(
              'Mitochondrial division (fission) is initiated at contact sites between mitochondria and the endoplasmic reticulum (ER-mitochondria contact sites or MAMs), where inverted formin-2 (INF2) drives actin polymerization to pre-constrict the tubule. Dynamin-related protein 1 (DRP1) is recruited from the cytosol to OMM adaptors (MFF, FIS1, MID49/51), polymerizing into high-order spirals that hydrolyze GTP to sever both outer and inner membranes, isolating damaged poles.',
              'মাইটোকন্ড্রিয়াল বিভাজন শুরু হয় এন্ডোপ্লাজমিক রেটিকুলামের সংস্পর্শে, যেখানে প্রোটিনের চাপে অঙ্গাণুটি প্রথমে সরু হয়। এরপর সাইটোপ্লাজম থেকে DRP1 এনজাইম এসে বাইরে বলয় তৈরি করে GTP ভেঙে মাইটোকন্ড্রিয়াকে দ্বিখণ্ডিত করে ক্ষতিগ্রস্ত অংশটিকে আলাদা করে ফেলে।'
            ),
            l(
              'Isolated daughter mitochondria with collapsed membrane potential (Delta-psi_m) are cleared by selective autophagy (mitophagy) governed by the PINK1/Parkin pathway. In damaged mitochondria, PINK1 import stalls, accumulating on the OMM where it autophosphorylates and phosphorylates ubiquitin and Parkin at Ser65. Activated Parkin decorates OMM proteins with polyubiquitin, recruiting autophagy receptors (optineurin, NDP52) that bind LC3-II to envelope the organelle in an autophagosome.',
              'ভোল্টেজ হারানো ক্ষতিগ্রস্ত মাইটোকন্ড্রিয়াগুলো PINK1/Parkin অটোফ্যাজি ব্যবস্থার মাধ্যমে ধ্বংসপ্রাপ্ত হয়। ক্ষতিগ্রস্ত ঝিল্লিতে PINK1 আটকে গিয়ে ইউবিকুইটিন ও পার্কিন প্রোটিনকে ফসফরাইলেশনের মাধ্যমে সক্রিয় করে তোলে। সক্রিয় পার্কিন বাইরের প্রোটিনে ইউবিকুইটিন ট্যাগ লাগিয়ে দেয়, যা অটোফ্যাজি ভেসিকলকে ডেকে এনে অকেজো মাইটোকন্ড্রিয়াটিকে লাইসোসোমে ধ্বংস করতে সাহায্য করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Metabolic Inflexibility & The Randle Glucose-Fatty Acid Cycle', 'বিপাকীয় অনমনীয়তা ও র‍্যান্ডেল গ্লুকোজ-ফ্যাটি অ্যাসিড চক্র'),
          paragraphs: [
            l(
              'Metabolic flexibility is the capacity of an organism or tissue to adapt fuel oxidation to nutrient availability—oxidizing predominantly carbohydrates in the postprandial state and switching to fatty acids during fasting or prolonged exercise. The biochemical cornerstone of this reciprocal regulation is the Randle cycle (the glucose-fatty acid cycle), described by Philip Randle in 1963.',
              'বিপাকীয় নমনীয়তা হলো পুষ্টির প্রাচুর্য অনুযায়ী কোষের জ্বালানি পরিবর্তনের ক্ষমতা—খাওয়ার পর প্রধানত গ্লুকোজ পোড়ানো এবং উপবাস বা ব্যায়ামের সময় দ্রুত চর্বি পোড়ানোর দিকে ঝুঁকে যাওয়া। এই পারস্পরিক নিয়ন্ত্রণের মূল ভিত্তি হলো ১৯৬৩ সালে ফিলিপ র‍্যান্ডেল বর্ণিত র‍্যান্ডেল চক্র (গ্লুকোজ-ফ্যাটি অ্যাসিড চক্র)।'
            ),
            l(
              'When fatty acid flux is high, rapid mitochondrial beta-oxidation floods the matrix with acetyl-CoA and NADH. High acetyl-CoA activates Pyruvate Dehydrogenase Kinase 4 (PDK4), which phosphorylates and inactivates the pyruvate dehydrogenase (PDH) complex, preventing pyruvate entry into the TCA cycle. Simultaneously, excess mitochondrial citrate exits to the cytosol to allosterically inhibit phosphofructokinase-1 (PFK-1). In obesity and type 2 diabetes, chronic lipid overload causes metabolic inflexibility, where mitochondria fail to switch between fuels efficiently.',
              'রক্তে চর্বির মাত্রা বেশি হলে বিটা-জারণের ফলে প্রচুর অ্যাসিটাইল-কোএ ও NADH তৈরি হয়। অ্যাসিটাইল-কোএ PDK4 এনজাইমকে উদ্দীপ্ত করে পাইরুভেট ডিহাইড্রোজিনেজ (PDH) বন্ধ করে দেয়। একই সাথে সাইট্রেট সাইটোপ্লাজমে এসে PFK-1 বন্ধ করে গ্লাইকোলাইসিস পুরোপুরি থামিয়ে দেয়। স্থূলতা ও ডায়াবেটিসে এই নমনীয়তা নষ্ট হয়ে যায়, ফলে অঙ্গাণুগুলো সঠিকভাবে শক্তি তৈরি করতে ব্যর্থ হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Therapeutic Frontiers in Mitochondrial Dynamics & Clinical Takeaways', 'মাইটোকন্ড্রিয়াল গতিশীলতা নিয়ন্ত্রণের ভবিষ্যৎ চিকিৎসা ও মূল শিক্ষা'),
          paragraphs: [
            l(
              'Manipulating mitochondrial dynamics and mitophagy represents a major frontier in translational medicine. Small-molecule OPA1 stabilizers and DRP1 inhibitors (such as Mdivi-1) are undergoing preclinical evaluation to preserve cristae during cardiac ischemia-reperfusion injury. Meanwhile, exercise remains the most potent physiological medicine known to activate PGC-1alpha and mitophagy, rejuvenating cellular bioenergetics across human organ systems.',
              'মাইটোকন্ড্রিয়াল গতিশীলতা ও অটোফ্যাজি নিয়ন্ত্রণ আধুনিক চিকিৎসা বিজ্ঞানের একটি প্রধান সম্ভাবনাময় গবেষণার ক্ষেত্র। হার্ট অ্যাটাকের সময় OPA1 স্থিতিশীলকারী ও DRP1 ইনহিবিটর ওষুধ হৃদপেশি সুরক্ষায় পরীক্ষা করা হচ্ছে। একই সাথে নিয়মিত শারীরিক ব্যায়াম হলো সবচেয়ে শক্তিশালী প্রাকৃতিক প্রতিষেধক যা PGC-1alpha এবং অটোফ্যাজি বাড়িয়ে সমস্ত অঙ্গের মাইটোকন্ড্রিয়াকে দীর্ঘস্থায়ী তারুণ্য ও কার্যক্ষমতা প্রদান করে।'
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
          heading: l('Supercomplex Respirasome Assembly & Cristae Nanoscale Mechanics', 'সুপারকমপ্লেক্স রেস্পাইরাসোম সংযোজন ও ক্রিস্টি ন্যানোস্কেল বলবিদ্যা'),
          paragraphs: [
            l(
              'The inner mitochondrial membrane is not a random fluid mosaic; instead, individual respiratory complexes assemble into supramolecular quaternary structures known as respirasomes (e.g., Complex I + Complex III2 + Complex IV1). OPA1-dependent cristae tightening physically clusters respirasomes, channeling electrons through bound ubiquinone and cytochrome c with minimal diffusion distance and dramatically reducing superoxide generation.',
              'মাইটোকন্ড্রিয়ার ভেতরের ঝিল্লি কোনো এলোমেলো তরল স্তর নয়; বরং ইলেকট্রন পরিবহন শৃঙ্খলের কমপ্লেক্সগুলো একত্রিত হয়ে সুদৃঢ় রেস্পাইরাসোম গঠন করে (কমপ্লেক্স ১, ৩ ও ৪ এর সমন্বয়)। OPA1 এনজাইম ক্রিস্টিকে চেপে রেখে এদের একত্রিত করে রাখে, ফলে ইলেকট্রন অপচয়হীনভাবে প্রবাহিত হতে পারে এবং ক্ষতিকর মুক্ত র্যাডিক্যাল উৎপাদন ন্যূনতম পর্যায়ে নেমে আসে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Translational Targeting of Mitophagy and Mitochondrial Dynamics in Disease', 'রোগ নিরাময়ে মাইটোকন্ড্রিয়াল গতিশীলতা ও অটোফ্যাজির লক্ষ্যভিত্তিক চিকিৎসা'),
          paragraphs: [
            l(
              'Preclinical drug development has demonstrated that cell-permeable Parkin activators and small-molecule deubiquitinase (USP30) inhibitors dramatically accelerate the clearance of damaged mitochondria, protecting dopaminergic neurons from alpha-synuclein toxicity. Conversely, in oncology, blocking protective mitophagy forces tumor cells into lethal apoptotic collapse when challenged with targeted chemotherapy.',
              'আধুনিক ওষুধ বিজ্ঞানে USP30 ইনহিবিটর এবং পার্কিন সক্রিয়কারী ওষুধ প্রয়োগ করে অকেজো মাইটোকন্ড্রিয়ার পরিষ্কারের গতি বাড়িয়ে আলফা-সিনুক্লিন বিষক্রিয়া থেকে স্নায়ুকোষকে বাঁচানো সম্ভব হচ্ছে। অপরপক্ষে ক্যান্সারের ক্ষেত্রে টিউমার কোষের অটোফ্যাজি বন্ধ করে দিয়ে কেমোথেরাপির মাধ্যমে দ্রুত ক্যান্সার কোষ ধ্বংসের সফল পরীক্ষা চালানো হচ্ছে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Systems Medicine Synthesis: The Mitochondrial Network in Aging and Degeneration', 'সিস্টেমস মেডিসিন সংশ্লেষ: বার্ধক্য ও ক্ষয়রোগে মাইটোকন্ড্রিয়াল নেটওয়ার্ক'),
          paragraphs: [
            l(
              'Progressive deterioration of mitochondrial dynamics—marked by reduced PGC-1alpha biogenesis, loss of OPA1-mediated cristae tightening, and stalled PINK1/Parkin mitophagy—constitutes a primary hallmark of human aging. Therapeutic restoration of this mitochondrial lifecycle holds profound potential to mitigate cardiometabolic and neurodegenerative diseases across the human lifespan.',
              'বার্ধক্যের অন্যতম প্রধান কারণ হলো মাইটোকন্ড্রিয়ার জীবনচক্রের বিপর্যয়—যার মধ্যে রয়েছে PGC-1alpha কমে যাওয়া, OPA1 ক্রিস্টি শিথিল হওয়া এবং অটোফ্যাজি আটকে যাওয়া। সঠিক খাদ্যাভ্যাস, নিয়মিত ব্যায়াম এবং আধুনিক ওষুধের সমন্বয়ে এই মাইটোকন্ড্রিয়াল নেটওয়ার্ককে সুস্থ ও সক্রিয় রাখা দীর্ঘায়ু ও সুস্বাস্থ্যের মূল চাবিকাঠি।'
            ),
          ],
        },
      ],
    },
  },
}
