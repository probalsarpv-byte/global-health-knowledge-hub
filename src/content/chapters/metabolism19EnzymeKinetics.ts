import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const kineticsRefs = [
  {
    id: 'lehninger-biochem-8e-ch06',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 6: Enzymes and Enzyme Kinetics',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch08',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 8: Enzymes: Kinetics",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch08',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 8: Enzymes: Basic Concepts and Kinetics',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'kacser-burns-mca-1973',
    authors: 'Henrik Kacser, James A. Burns',
    title: 'The Control of Flux. Symposia of the Society for Experimental Biology, 27:65-104',
    organization: 'Society for Experimental Biology / Cambridge University Press',
    year: 1973,
    url: 'https://pubmed.ncbi.nlm.nih.gov/4148886/',
  },
  {
    id: 'fell-metab-control-1997',
    authors: 'David A. Fell',
    title: 'Understanding the Control of Metabolism (Frontiers in Metabolism series)',
    organization: 'Portland Press / Biochemical Society',
    year: 1997,
    url: 'https://portlandpress.com/books/monograph/52/Understanding-the-Control-of-Metabolism',
  },
]

const enzymeKinetics3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Catalytic Enzyme Distribution & Control',
    '৩ডি বহু-অঙ্গীয় অনুঘটনীয় এনজাইম বণ্টন ও নিয়ন্ত্রণের মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and explore coordinate space to trace how enzyme kinetic parameters (Km, Vmax, kcat) and allosteric control coefficients vary across human metabolic organs.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে বিভিন্ন মানব অঙ্গে এনজাইম গতিবিদ্যার মান (Km, Vmax, kcat) এবং অ্যালবস্টেরিক নিয়ন্ত্রণ সহগ পরিবর্তিত হয়।'
  ),
  description: l(
    'Enzymatic velocity and flux control coefficients are distributed across specialized organ systems: hepatic glucokinase possesses a high Km (10 mM) and sigmoidal cooperativity for postprandial glucose disposal, while brain hexokinase I exhibits an ultra-low Km (0.05 mM) guaranteeing saturated basal flux even during severe hypoglycemia.',
    'এনজাইমের বিক্রিয়া গতি ও প্রবাহ নিয়ন্ত্রণ সহগ বিভিন্ন অঙ্গে বিশেষভাবে বণ্টিত: যকৃতের গ্লুকোকাইনেজের উচ্চ Km (১০ মিলি-মোলার) খাবার পরবর্তী গ্লুকোজ প্রবেশে সহায়তা করে, পক্ষান্তরে মস্তিষ্কের হেক্সোকাইনেজ-১-এর অতি-নিম্ন Km (০.০৫ মিলি-মোলার) চরম হাইপোগ্লাইসেমিয়াতেও মস্তিষ্কের জ্বালানি সরবরাহ নিশ্চিত করে।'
  ),
  organs: [
    {
      id: 'organ-liver-kinetics',
      name: l('Liver (High-Capacity Hexose & Urea Kinetic Machinery)', 'যকৃৎ (উচ্চ-ক্ষমতাসম্পন্ন হেক্সোজ ও ইউরিয়া গতিবিদ্যা ইঞ্জিন)'),
      latinName: 'Hepar',
      system: l('Metabolic & Digestive System', 'বিপাকীয় ও পরিপাক তন্ত্র'),
      cavity: l('Right Hypochondrium & Epigastrium', 'ডান হাইপোকন্ড্রিয়াম ও এপিগ্যাস্ট্রিয়াম'),
      position3D: { x: 14, y: 202, z: 2 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'Expresses Glucokinase (Hexokinase IV, Km ~10 mM) which is not feedback-inhibited by glucose-6-phosphate, functioning as a nonsaturable glucose sensor. Also houses Carbamoyl Phosphate Synthetase I (CPS-I) regulated by N-acetylglutamate.',
        'গ্লুকোকাইনেজ (হেক্সোকাইনেজ IV, Km ~১০ মিলি-মোলার) ধারণ করে যা গ্লুকোজ-৬-ফসফেট দ্বারা বাধাপ্রাপ্ত হয় না এবং রক্তে গ্লুকোজের সেন্সর হিসেবে কাজ করে। পাশাপাশি এন-অ্যাসিটাইলগ্লুটামেট দ্বারা নিয়ন্ত্রিত সিকেপিএস-১ এনজাইম ধারণ করে।'
      ),
      spatialRelations: l(
        'Receives nutrient-dense portal blood directly from the mesenteric veins, exposing hepatic enzymes to fluctuating substrate concentrations far exceeding systemic arterial blood.',
        'মেসেন্টেরিক শিরা থেকে সরাসরি পোর্টাল রক্ত গ্রহণ করে, যার ফলে যকৃতের এনজাইমগুলো রক্ত সংবহনের চেয়ে অনেক বেশি ঘনমাত্রার পুষ্টি উপাদানের সংস্পর্শে আসে।'
      ),
      physiology: l(
        'Sigmoidal kinetics of glucokinase (Hill coefficient ~1.7) enable steep accelerations in glycolytic and glycogen-synthetic flux as portal glucose increases from 5 to 12 mM.',
        'গ্লুকোকাইনেজের সিগময়েড গতিবিদ্যা (হিল সহগ ~১.৭) পোর্টাল রক্তে গ্লুকোজ ৫ থেকে ১২ মিলি-মোলারে বৃদ্ধি পেলে গ্লাইকোলাইসিস ও গ্লাইকোজেন সংশ্লেষণ দ্রুত বাড়িয়ে দেয়।'
      ),
      nutritionConnection: l(
        'Fructose influx via fructokinase (KHK-C) has an ultra-high affinity and velocity, rapidly depleting hepatic ATP due to absence of allosteric feedback inhibition.',
        'ফ্রুক্টোকাইনেজ এনজাইমের উচ্চ কার্যক্ষমতার কারণে ফ্রুক্টোজ দ্রুত যকৃতে প্রবেশ করে এবং নিয়ন্ত্রণহীন ফসফরাইলেশনের কারণে দ্রুত যকৃতের এটিপি ক্ষয় করে।'
      ),
      clinicalSignificance: l(
        'Heterozygous inactivating mutations in GCK cause MODY2 (Maturity-Onset Diabetes of the Young type 2) with a shifted glycemic set-point; activating mutations cause persistent hyperinsulinemic hypoglycemia.',
        'GCK জিনের মিউটেশন MODY2 ডায়াবেটিস তৈরি করে যা রক্তের গ্লুকোজ সেটিং বাড়িয়ে দেয়; অন্যদিকে সক্রিয়কারী মিউটেশন হাইপারইনসুলিনেমিক হাইপোগ্লাইসেমিয়া ঘটায়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-brain-kinetics',
      name: l('Brain (Ultra-Low Km Hexokinase I & Zero-Order Glycolytic Flux)', 'মস্তিষ্ক (অতি-নিম্ন Km হেক্সোকাইনেজ-১ ও ধ্রুব গ্লাইকোলাইটিক প্রবাহ)'),
      latinName: 'Encephalon',
      system: l('Central Nervous System', 'কেন্দ্রীয় স্নায়ুতন্ত্র'),
      cavity: l('Cranial Vault', 'করোটি গহ্বর'),
      position3D: { x: 0, y: 310, z: 0 },
      color: '#0284c7',
      highlightColor: '#38bdf8',
      shapeType: 'brain',
      description: l(
        'Features Hexokinase I with an affinity of Km = 0.05 mM, ensuring the enzyme operates near its theoretical maximal velocity (Vmax) across all physiological arterial glucose concentrations (3.5–8.0 mM).',
        'হেক্সোকাইনেজ-১ এনজাইম ধারণ করে যার Km মাত্র ০.০৫ মিলি-মোলার; ফলে স্বাভাবিক রক্তের গ্লুকোজের সব মাত্রাতেই এটি সর্বোচ্চ গতিতে (Vmax) সম্পূর্ণ সম্পৃক্ত হয়ে কাজ করে।'
      ),
      spatialRelations: l(
        'Protected by the Blood-Brain Barrier (BBB); dependent on GLUT1 glucose transporter kinetics and GLUT3 neuronal transporter high-capacity kinetics.',
        'রক্ত-মস্তিষ্ক প্রাচীর (BBB) দ্বারা সুরক্ষিত; এটি গ্লুট১ এবং স্নায়ুকোষের গ্লুট৩ বাহক এনজাইমের গতিবিদ্যার ওপর সম্পূর্ণ নির্ভরশীল।'
      ),
      physiology: l(
        'Zero-order kinetics with respect to substrate: brain glycolysis rate is governed by ATP consumption and phosphofructokinase-1 (PFK-1) allosteric regulation, rather than blood glucose availability.',
        'সাবস্ট্রেটের সাপেক্ষে শূন্য-ক্রম গতিবিদ্যা: মস্তিষ্কের গ্লাইকোলাইসিসের গতি রক্তের গ্লুকোজের পরিমাণের চেয়ে এটিপি খরচ এবং পিএফকে-১ নিয়ন্ত্রণের ওপর বেশি নির্ভর করে।'
      ),
      nutritionConnection: l(
        'During prolonged starvation, brain shifts 60% of bioenergetic flux to beta-hydroxybutyrate via monocarboxylate transporter MCT1 and beta-hydroxybutyrate dehydrogenase (BDH1).',
        'দীর্ঘস্থায়ী উপবাসে মস্তিষ্ক এমসিটি১ বাহক এবং বিটা-হাইড্রোক্সিবিউটাইরেট ডিহাইড্রোজিনেজের মাধ্যমে ৬০% শক্তি কিটোন বডি থেকে সংগ্রহ করে।'
      ),
      clinicalSignificance: l(
        'When blood glucose drops below 2.5 mM, GLUT1 transport becomes rate-limiting, neuroglycopenia ensues, and ATP depletion triggers neuronal depolarization and seizure.',
        'রক্তে গ্লুকোজ ২.৫ মিলি-মোলারের নিচে নামলে গ্লুট১ পরিবহন গতি-নিয়ন্ত্রক হয়ে পড়ে এবং মস্তিষ্কে শক্তির অভাবে খিঁচুনি ও অচেতনতা সৃষ্টি হয়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-muscle-kinetics',
      name: l('Skeletal Muscle (Allosteric Phosphorylase & PFK-1 Gateways)', 'কঙ্কালপেশি (অ্যালবস্টেরিক ফসফোরাইলেজ ও পিএফকে-১ নিয়ন্ত্রক গেটওয়ে)'),
      latinName: 'Musculus Sceleti',
      system: l('Musculoskeletal & Energetic System', 'পেশিকঙ্কাল ও শক্তি তন্ত্র'),
      cavity: l('Peripheral Compartments', 'প্রান্তীয় প্রকোষ্ঠ'),
      position3D: { x: -24, y: 150, z: 0 },
      color: '#e11d48',
      highlightColor: '#fb7185',
      shapeType: 'skeleton',
      description: l(
        'Houses Glycogen Phosphorylase b (allosterically activated by 5-AMP without phosphorylation) and Phosphofructokinase-1 (PFK-1), subject to potent allosteric inhibition by ATP and activation by AMP.',
        'গ্লাইকোজেন ফসফোরাইলেজ বি (যা ফসফরাইলেশন ছাড়াই এএমপি দ্বারা সক্রিয় হয়) এবং পিএফকে-১ ধারণ করে, যা এটিপি দ্বারা বাধাপ্রাপ্ত এবং এএমপি দ্বারা তীব্রভাবে উদ্দীপিত হয়।'
      ),
      spatialRelations: l(
        'Intercalated throughout the appendicular and axial body mass, forming the largest single repository of metabolic enzymes and contractile ATP-consuming motors in the human body.',
        'মানবদেহের বৃহত্তম একক বিপাকীয় এনজাইম আধার যা কঙ্কালপেশির সংকোচনের সময় বিপুল পরিমাণ এটিপি খরচ করে এনজাইমের গতি নিয়ন্ত্রণ করে।'
      ),
      physiology: l(
        'Under heavy contraction, adenylate kinase produces 5-AMP, causing an instantaneous 100-fold jump in PFK-1 velocity through allosteric derepression.',
        'তীব্র ব্যায়ামের সময় অ্যাডেনাইলেট কাইনেজ এএমপি তৈরি করে, যা অ্যালবস্টেরিক প্রভাবের মাধ্যমে পিএফকে-১ এনজাইমের গতি মুহূর্তের মধ্যে ১০০ গুণ বাড়িয়ে দেয়।'
      ),
      nutritionConnection: l(
        'Creatine kinase equilibrium ([PCr] + [ADP] <-> [Cr] + [ATP]) buffers cellular ATP charge with a near-diffusion-limited bimolecular rate constant.',
        'ক্রিয়েটিন কাইনেজ এনজাইমের ভারসাম্য পেশিকোষে এটিপির মাত্রা নিখুঁতভাবে স্থিতিশীল রাখে এবং শক্তির হঠাৎ পতন রোধ করে।'
      ),
      clinicalSignificance: l(
        'McArdle disease (Glycogen Storage Disease Type V) results from skeletal muscle glycogen phosphorylase deficiency, causing severe exercise intolerance and rhabdomyolysis.',
        'ম্যাকআর্ডল রোগে কঙ্কালপেশির গ্লাইকোজেন ফসফোরাইলেজের ঘাটতির কারণে ব্যায়ামে তীব্র ব্যথা ও মায়োগ্লোবিনুরিয়া দেখা দেয়।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-kidneys-kinetics',
      name: l('Kidneys (Renal Brush Border Hydrolases & Carbonic Anhydrase)', 'বৃক্ক (রেনাল ব্রাশ বর্ডার হাইড্রোলেজ ও কার্বনিক অ্যানহাইড্রেজ)'),
      latinName: 'Renes',
      system: l('Urinary & Homeostatic System', 'রেচন ও সমস্থিতি তন্ত্র'),
      cavity: l('Retroperitoneum (T12–L3)', 'রেট্রোপেরিটোনিয়াম (টি১২–এল৩)'),
      position3D: { x: -16, y: 175, z: -8 },
      color: '#3b82f6',
      highlightColor: '#60a5fa',
      shapeType: 'kidneys',
      description: l(
        'Contains ultra-high concentrations of Carbonic Anhydrase II and IV (kcat = 1,000,000 s^-1, operating at the theoretical limit of diffusion) and Glutaminase (GLS) for acid-base proton excretion.',
        'কার্বনিক অ্যানহাইড্রেজ II ও IV (kcat = ১০,০০,০০০ প্রতি সেকেন্ডে, যা ব্যাপন গতির চরম সীমায় কাজ করে) এবং গ্লুটামিনেজ এনজাইম ধারণ করে যা রক্তের অম্ল-ক্ষার ভারসাম্য রক্ষা করে।'
      ),
      spatialRelations: l(
        'Paired retroperitoneal organs receiving 20% of resting cardiac output to filter 180 liters of plasma daily through proximal tubular enzyme-lined microvilli.',
        'প্রতিদিন ১৮০ লিটার প্লাজমা ফিল্টার করার জন্য হৃৎপিণ্ডের ২০% রক্ত গ্রহণ করে এবং এর নালিকাগুলোতে উচ্চ ঘনমাত্রার এনজাইম অবস্থান করে।'
      ),
      physiology: l(
        'Carbonic anhydrase operates near diffusion control (kcat/Km ~ 10^8 M^-1 s^-1), ensuring instantaneous hydration of filtered CO2 for bicarbonate reabsorption.',
        'কার্বনিক অ্যানহাইড্রেজ ব্যাপন-সীমিত সর্বোচ্চ গতিতে কাজ করে, যা ফিল্টার হওয়া বাইকার্বোনেট দ্রুত শোষণ করতে তাৎক্ষণিকভাবে সাহায্য করে।'
      ),
      nutritionConnection: l(
        'Renal 1-alpha-hydroxylase (CYP27B1) in proximal tubules catalyzes the rate-limiting, tightly regulated conversion of 25(OH)D to active calcitriol (1,25(OH)2D).',
        'বৃক্কের ১-আলফা-হাইড্রোক্সিলেজ এনজাইম ভিটামিন ডি-কে সক্রিয় ক্যালসিট্রিওলে রূপান্তরিত করার মূল নিয়ন্ত্রণকারী এনজাইম।'
      ),
      clinicalSignificance: l(
        'Acetazolamide is a potent reversible sulfonamide inhibitor of carbonic anhydrase used clinically for glaucoma, altitude sickness, and metabolic alkalosis.',
        'অ্যাসিটাজোলামাইড হলো কার্বনিক অ্যানহাইড্রেজের শক্তিশালী রিভার্সিবল ইনহিবিটর যা গ্লুকোমা ও উচ্চতাজনিত অসুস্থতায় ব্যবহৃত হয়।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism19EnzymeKineticsLesson: LessonTopic = {
  id: 'topic.metabolism.enzyme-kinetics-control',
  slug: 'enzyme-kinetics-control',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '19 · Enzyme Kinetics, Inhibition & Metabolic Control Analysis',
    '১৯ · এনজাইম গতিবিদ্যা, প্রতিরোধ ও বিপাকীয় নিয়ন্ত্রণ বিশ্লেষণ'
  ),
  summary: l(
    'Quantitative biophysics of enzymatic catalysis: Briggs-Haldane steady-state derivation, Michaelis constant (Km), turnover number (kcat), catalytic perfection, reversible inhibition models (competitive, uncompetitive, noncompetitive, mixed), allosteric Hill cooperativity, and Kacser-Burns Metabolic Control Analysis (MCA) flux coefficients.',
    'এনজাইম অনুঘটনের পরিমাণগত জৈবপদার্থবিজ্ঞান: ব্রিগস-হ্যালডেন স্থিতাবস্থা প্রতিপাদন, মাইকেলিস ধ্রুবক (Km), টার্নওভার সংখ্যা (kcat), অনুঘটনীয় পূর্ণতা, বিপরীতমুখী প্রতিরোধ মডেল (প্রতিযোগিতামূলক, অপ্রতিযোগিতামূলক, মিশ্র), অ্যালবস্টেরিক হিল সহযোগিতা এবং ক্যাকসার-বার্নস মেটাবলিক কন্ট্রোল অ্যানালাইসিস (MCA) প্রবাহ সহগ।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Derive the Michaelis-Menten rate equation under Briggs-Haldane quasi-steady-state assumptions, distinguishing between substrate affinity (Km), maximal velocity (Vmax), turnover frequency (kcat), and catalytic efficiency (kcat/Km).',
      'ব্রিগস-হ্যালডেন স্থিতাবস্থার অনুমানের ভিত্তিতে মাইকেলিস-মেনটেন সমীকরণ প্রতিপাদন করতে পারা এবং সাবস্ট্রেট আসক্তি (Km), সর্বোচ্চ বেগ (Vmax), টার্নওভার সংখ্যা (kcat) ও অনুঘটনীয় দক্ষতার (kcat/Km) পার্থক্য ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Differentiate mathematically and graphically between competitive, uncompetitive, noncompetitive, and mixed reversible enzyme inhibition using Lineweaver-Burk, Eadie-Hofstee, and Dixon coordinate plots.',
      'লাইনউইভার-বার্ক, এডি-হফস্টি এবং ডিকসন প্লটের মাধ্যমে প্রতিযোগিতামূলক, অপ্রতিযোগিতামূলক ও মিশ্র এনজাইম বাধার গাণিতিক ও গ্রাফিক্যাল পার্থক্য নির্ণয় করতে পারা।'
    ),
    l(
      'Apply Kacser-Burns Metabolic Control Analysis (MCA) theorems, defining Flux Control Coefficients (C_i^J) and Elasticity Coefficients (epsilon_S^i) to disprove the single rate-limiting enzyme dogma in biochemical pathways.',
      'ক্যাকসার-বার্নস মেটাবলিক কন্ট্রোল অ্যানালাইসিস (MCA) প্রয়োগ করে ফ্লাক্স কন্ট্রোল কোএফিশিয়েন্ট (C_i^J) ও ইলাস্টিসিটি (epsilon_S^i) সংজ্ঞায়িত করা এবং একক গতি-নিয়ন্ত্রক এনজাইমের ধারণার সীমাবদ্ধতা বৈজ্ঞানিকভাবে মূল্যায়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  references: kineticsRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch06', 'harpers-biochem-32e-ch08'],
    structure: ['lehninger-biochem-8e-ch06', 'berg-biochem-9e-ch08'],
    mechanism: ['harpers-biochem-32e-ch08', 'berg-biochem-9e-ch08'],
    integration: ['kacser-burns-mca-1973', 'fell-metab-control-1997'],
    practice: ['lehninger-biochem-8e-ch06', 'kacser-burns-mca-1973'],
    takeaways: ['lehninger-biochem-8e-ch06', 'fell-metab-control-1997'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Steady-State Catalysis & Briggs-Haldane Derivation', '১. স্থিতাবস্থা অনুঘটন ও ব্রিগস-হ্যালডেন প্রতিপাদন'), sectionId: 'introduction' },
      { id: 'sec-constants', label: l('2. Kinetic Constants: Km, Vmax, kcat & Catalytic Perfection', '২. গতিবিদ্যা ধ্রুবক: Km, Vmax, kcat ও অনুঘটনীয় পূর্ণতা'), sectionId: 'structure' },
      { id: 'sec-inhibition', label: l('3. Reversible & Irreversible Enzyme Inhibition Mechanisms', '৩. বিপরীতমুখী ও অপ্রত্যাবর্তনীয় এনজাইম বাধা প্রক্রিয়া'), sectionId: 'mechanism' },
      { id: 'sec-mca', label: l('4. Metabolic Control Analysis (MCA) & Distributed Flux', '৪. মেটাবলিক কন্ট্রোল অ্যানালাইসিস (MCA) ও বণ্টিত প্রবাহ'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Quantitative Enzyme Kinetics & Linear Transformations', '৫. পরিমাণগত এনজাইম গতিবিদ্যা ও রৈখিক রূপান্তর'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Clinical Enzymology & High-Yield Summary', '৬. ক্লিনিক্যাল এনজাইমোলজি ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Michaelis Constant (Km)', 'মাইকেলিস ধ্রুবক (Km)'),
        definition: l(
          'The substrate concentration at which the initial reaction velocity equals half of the maximal velocity (V = Vmax / 2); under Briggs-Haldane kinetics, Km = (k_-1 + k_2) / k_1, reflecting apparent substrate affinity when k_-1 >> k_2.',
          'যে সাবস্ট্রেট ঘনমাত্রায় বিক্রিয়ার প্রাথমিক বেগ সর্বোচ্চ বেগের অর্ধেক (V = Vmax / 2) হয়; ব্রিগস-হ্যালডেন সমীকরণে Km = (k_-1 + k_2) / k_1, যা সাবস্ট্রেটের প্রতি এনজাইমের আপাত আসক্তি নির্দেশ করে।'
        ),
      },
      {
        term: l('Turnover Number (kcat)', 'টার্নওভার সংখ্যা (kcat)'),
        definition: l(
          'The catalytic constant representing the maximum number of substrate molecules converted to product per enzyme active site per unit time when the enzyme is fully saturated with substrate; kcat = Vmax / [E]_total (units: s^-1).',
          'এনজাইমের অনুঘটন ধ্রুবক যা নির্দেশ করে প্রতি একক সময়ে সম্পূর্ণ সম্পৃক্ত অবস্থায় প্রতিটি এনজাইম সক্রিয় স্থান কতটি সাবস্ট্রেট অণুকে উৎপাদে রূপান্তর করতে পারে; kcat = Vmax / [E]_total (একক: প্রতি সেকেন্ড)।'
        ),
      },
      {
        term: l('Catalytic Efficiency (kcat / Km)', 'অনুঘটনীয় দক্ষতা (kcat / Km)'),
        definition: l(
          'The apparent second-order rate constant measuring enzyme performance at low substrate concentrations ([S] << Km); physically constrained by the aqueous diffusion limit of encounter between enzyme and substrate (~10^8 to 10^9 M^-1 s^-1).',
          'নিম্ন সাবস্ট্রেট ঘনমাত্রায় ([S] << Km) এনজাইমের কার্যক্ষমতা পরিমাপক দ্বিতীয়-ক্রমের বেগ ধ্রুবক; যা এনজাইম ও সাবস্ট্রেটের জলীয় ব্যাপন সংঘর্ষের চরম সীমা (~১০^৮ থেকে ১০^৯ M^-1 s^-1) দ্বারা সীমাবদ্ধ।'
        ),
      },
      {
        term: l('Flux Control Coefficient (C_i^J)', 'ফ্লাক্স কন্ট্রোল কোএফিশিয়েন্ট (C_i^J)'),
        definition: l(
          'In Metabolic Control Analysis, the fractional change in steady-state metabolic flux (d ln J) produced by an infinitesimal fractional change in enzyme activity (d ln v_i); under the Summation Theorem, the sum of all C_i^J in a linear pathway equals 1.',
          'মেটাবলিক কন্ট্রোল অ্যানালাইসিসে এনজাইমের কার্যকারিতার অতি-ক্ষুদ্র পরিবর্তনের (d ln v_i) ফলে সমগ্র বিপাকীয় প্রবাহে যে আপেক্ষিক পরিবর্তন (d ln J) ঘটে তার অনুপাত; সামেশন থিওরেম অনুসারে একটি পথের সকল C_i^J এর সমষ্টি ঠিক ১।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Competitive Inhibitor Ki from Lineweaver-Burk Apparent Km', 'লাইনউইভার-বার্ক আপাত Km থেকে প্রতিযোগিতামূলক বাধার Ki হিসাব'),
        steps: [
          l(
            'Given an uninhibited enzyme with Km = 2.0 mM and Vmax = 100 umol/min. In the presence of [I] = 5.0 mM inhibitor, Vmax remains unchanged at 100 umol/min while apparent Km increases to 8.0 mM.',
            'ধরা যাক বাধাছাড়া এনজাইমের Km = ২.০ মিলি-মোলার এবং Vmax = ১০০ মাইক্রোমোল/মিনিট। [I] = ৫.০ মিলি-মোলার ইনহিবিটরের উপস্থিতিতে Vmax অপরিবর্তিত থাকে কিন্তু আপাত Km বেড়ে ৮.০ মিলি-মোলার হয়।'
          ),
          l(
            'Calculate alpha = Km,app / Km = 8.0 mM / 2.0 mM = 4.0.',
            'আলফা সহগ হিসাব করুন: আলফা = Km,app / Km = ৮.০ / ২.০ = ৪.০।'
          ),
          l(
            'Using the competitive inhibition relation alpha = 1 + ([I] / Ki), solve for Ki: 4.0 = 1 + (5.0 mM / Ki) => 3.0 = 5.0 mM / Ki => Ki = 5.0 / 3.0 = 1.67 mM.',
            'প্রতিযোগিতামূলক বাধার সূত্র আলফা = ১ + ([I] / Ki) থেকে Ki বের করুন: ৪.০ = ১ + (৫.০ / Ki) => Ki = ৫.০ / ৩.০ = ১.৬৭ মিলি-মোলার।'
          ),
        ],
        conclusion: l(
          'The inhibitor dissociation constant Ki is 1.67 mM. A lower Ki reflects tighter binding of the inhibitor to the free enzyme active site.',
          'ইনহিবিটরের ডিসোসিয়েশন ধ্রুবক Ki হলো ১.৬৭ মিলি-মোলার। কম Ki মান মুক্ত এনজাইমের সক্রিয় স্থানে বাধার তীব্র সংযুক্তি নির্দেশ করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does a pure noncompetitive inhibitor decrease Vmax without altering Km on a Lineweaver-Burk plot?',
          'লাইনউইভার-বার্ক প্লটে বিশুদ্ধ নন-কম্পিটিটিভ ইনহিবিটর কেন Km পরিবর্তন না করে কেবল Vmax কমিয়ে দেয়?'
        ),
        answer: l(
          'A pure noncompetitive inhibitor binds with identical affinity to both free enzyme (E) and enzyme-substrate complex (ES) at an allosteric site (Ki = Ki-prime). Because it does not compete for the active site, substrate affinity (Km) is unchanged, but the catalytically active pool of ESI cannot turnover product, reducing Vmax.',
          'বিশুদ্ধ নন-কম্পিটিটিভ ইনহিবিটর মুক্ত এনজাইম (E) এবং এনজাইম-সাবস্ট্রেট কমপ্লেক্স (ES) উভয়ের সাথেই সমপরিমাণ আসক্তিতে (Ki = Ki-prime) অন্য একটি স্থানে যুক্ত হয়। ফলে সাবস্ট্রেট সংযোগ বাধা পায় না (Km স্থির থাকে), কিন্তু উৎপাদ তৈরির ক্ষমতা কমে যায় (Vmax কমে)।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: enzymeKinetics3DData,
  interactiveDiagram: {
    id: 'enzyme-kinetics-interactive-hub',
    title: l('Interactive Enzyme Kinetics & Metabolic Control Engine', 'ইন্টারেক্টিভ এনজাইম গতিবিদ্যা ও বিপাকীয় নিয়ন্ত্রণ ইঞ্জিন'),
    disclaimer: l(
      'Biochemical kinetics simulation: select inhibitor modes and control nodes to observe real-time alterations in hyperbolic saturation, double-reciprocal coordinates, and pathway flux sensitivity.',
      'জৈবরাসায়নিক গতিবিদ্যা সিমুলেশন: বিভিন্ন বাধা মডেল ও নিয়ন্ত্রণ নোড নির্বাচন করে স্যাচুরেশন কার্ভ, দ্বৈত-ব্যস্তানুপাতিক প্লট এবং বিপাকীয় প্রবাহের পরিবর্তন পর্যবেক্ষণ করুন।'
    ),
    description: l(
      'Enzymes catalyze cellular transformations through transition state stabilization. This interactive engine models the quantitative mechanics of substrate saturation, reversible competitive/uncompetitive/mixed inhibition, Hill cooperativity, and Kacser-Burns flux control coefficients.',
      'এনজাইম ট্রানজিশন স্টেট স্থিতিশীল করার মাধ্যমে কোষে বিক্রিয়ার গতি বাড়ায়। এই ইন্টারঅ্যাকটিভ ইঞ্জিন সাবস্ট্রেট সম্পৃক্তি, রিভার্সিবল বাধা, হিল সহযোগিতা এবং ফ্লাক্স কন্ট্রোল কোএফিশিয়েন্টের পরিমাণগত গতিবিদ্যা প্রদর্শন করে।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-mm-hyperbola',
        label: l('1. Michaelis-Menten Hyperbolic Steady State', '১. মাইকেলিস-মেনটেন হাইপারবোলিক স্থিতাবস্থা'),
        description: l(
          'V = (Vmax * [S]) / (Km + [S]). Demonstrates rectangular hyperbola transitioning from first-order kinetics at low [S] to zero-order saturation at high [S].',
          'V = (Vmax * [S]) / (Km + [S])। নিম্ন সাবস্ট্রেটে প্রথম-ক্রম গতিবিদ্যা থেকে উচ্চ সাবস্ট্রেটে শূন্য-ক্রম গতিবিদ্যায় উত্তরণ প্রদর্শন করে।'
        ),
        details: l(
          'At [S] << Km, rate is proportional to [S] (first order, governed by kcat/Km). At [S] >> Km, all enzyme active sites are occupied as [ES], and velocity reaches asymptotic Vmax.',
          'যখন [S] << Km, গতিবেগ সাবস্ট্রেটের সমানুপাতিক। যখন [S] >> Km, সমস্ত সক্রিয় স্থান সম্পৃক্ত থাকে এবং গতিবেগ Vmax-এ পৌঁছায়।'
        ),
        sectionId: 'introduction',
        color: '#d97706',
      },
      {
        id: 'node-comp-inhibit',
        label: l('2. Competitive Inhibition: Km Increase, Vmax Constant', '২. প্রতিযোগিতামূলক বাধা: Km বৃদ্ধি, Vmax অপরিবর্তিত'),
        description: l(
          'Inhibitor mimics substrate, binding reversibly to free enzyme active site. Apparent Km increases to alpha*Km; Vmax can be fully restored by saturating [S].',
          'ইনহিবিটর সাবস্ট্রেটের রূপ ধারণ করে মুক্ত সক্রিয় স্থানে যুক্ত হয়। আপাত Km বেড়ে alpha*Km হয়; কিন্তু প্রচুর সাবস্ট্রেট যোগ করলে Vmax পুনরুদ্ধার হয়।'
        ),
        details: l(
          'Lineweaver-Burk intersection: common y-intercept (1/Vmax), slope increases by factor alpha = 1 + [I]/Ki. Classic clinical examples: statins inhibiting HMG-CoA reductase, methotrexate inhibiting DHFR.',
          'লাইনউইভার-বার্ক প্লটে y-অক্ষে একই বিন্দুতে ছেদ করে, ঢাল বাড়ে। উদাহরণ: স্ট্যাটিন ড্রাগ কর্তৃক HMG-CoA রিডাক্টেজ বাধা এবং মেথোট্রেক্সেট কর্তৃক DHFR বাধা।'
        ),
        sectionId: 'mechanism',
        color: '#2563eb',
      },
      {
        id: 'node-uncomp-inhibit',
        label: l('3. Uncompetitive Inhibition: Parallel Double-Reciprocal Shift', '৩. আনকম্পিটিটিভ বাধা: সমান্তরাল রেখা রূপান্তর'),
        description: l(
          'Inhibitor binds selectively to the enzyme-substrate complex (ES), locking substrate. Both apparent Km and Vmax decrease by factor alpha-prime.',
          'ইনহিবিটর কেবলমাত্র এনজাইম-সাবস্ট্রেট কমপ্লেক্সে (ES) যুক্ত হয়। ফলে আপাত Km এবং Vmax উভয়ই alpha-prime অনুপাতে কমে যায়।'
        ),
        details: l(
          'Lineweaver-Burk lines are strictly parallel (constant slope Km/Vmax). Increasing substrate CANNOT overcome inhibition. Rare in single-substrate enzymes, common in multi-substrate bisubstrate reactions (e.g., lithium inhibiting IMPase).',
          'লাইনউইভার-বার্ক প্লটে রেখাগুলো সম্পূর্ণ সমান্তরাল হয়। সাবস্ট্রেট বাড়িয়ে এই বাধা দূর করা যায় না। উদাহরণ: লিথিয়াম কর্তৃক ইনোসিটল মনোফসফাটেজ বাধা।'
        ),
        sectionId: 'mechanism',
        color: '#059669',
      },
      {
        id: 'node-mixed-inhibit',
        label: l('4. Mixed / Noncompetitive: Vmax Suppression', '৪. মিশ্র ও নন-কম্পিটিটিভ বাধা: Vmax হ্রাস'),
        description: l(
          'Inhibitor binds allosteric site on both E and ES with different affinities (Ki != Ki-prime). Decreases Vmax and alters Km depending on binding ratio.',
          'ইনহিবিটর মুক্ত এনজাইম এবং ES কমপ্লেক্সের অ্যালবস্টেরিক স্থানে ভিন্ন আসক্তিতে যুক্ত হয়। ফলে Vmax কমে যায় এবং Km পরিবর্তিত হতে পারে।'
        ),
        details: l(
          'If Ki = Ki-prime, pure noncompetitive inhibition occurs: Km is unchanged, lines intersect on negative x-axis (-1/Km). Mixed lines intersect in quadrant II or III.',
          'যদি Ki = Ki-prime হয় তবে বিশুদ্ধ নন-কম্পিটিটিভ বাধা ঘটে: Km স্থির থাকে এবং রেখাগুলো x-অক্ষে মিলিত হয়।'
        ),
        sectionId: 'mechanism',
        color: '#7c3aed',
      },
      {
        id: 'node-allosteric-hill',
        label: l('5. Allosteric Cooperativity & Hill Sigmoidal Transition', '৫. অ্যালবস্টেরিক সহযোগিতা ও হিল সিগময়েড ট্রানজিশন'),
        description: l(
          'Multisubunit enzymes undergo T-state (tense, low affinity) to R-state (relaxed, high affinity) transitions, modeled by the Hill equation: theta = [S]^n / (K0.5^n + [S]^n).',
          'মাল্টিসাবইউনিট এনজাইম T-স্টেট (কম আসক্তি) থেকে R-স্টেটে (বেশি আসক্তি) রূপান্তরিত হয়, যা হিল সমীকরণ দ্বারা সিগময়েড কার্ভ প্রদর্শন করে।'
        ),
        details: l(
          'Hill coefficient n > 1 indicates positive cooperativity (e.g., PFK-1, hemoglobin). Enables hypersensitive switch-like metabolic responses across narrow physiological substrate ranges.',
          'হিল সহগ n > ১ ইতিবাচক সহযোগিতা নির্দেশ করে (যেমন PFK-1)। এটি অল্প সাবস্ট্রেট পরিবর্তনের সাথে সাথে অত্যন্ত দ্রুত বিক্রিয়া বাড়াতে সক্ষম।'
        ),
        sectionId: 'structure',
        color: '#db2777',
      },
      {
        id: 'node-suicide-inactivation',
        label: l('6. Irreversible Suicide Inactivation: Covalent Active Site Destruction', '৬. অপ্রত্যাবর্তনীয় সুইসাইড ইনহিবিশন: কোভ্যালেন্ট ধ্বংস'),
        description: l(
          'Mechanism-based inactivator is processed as a pseudo-substrate, generating a highly reactive intermediate that covalently bonds active site residues.',
          'এনজাইম ইনহিবিটরকে সাবস্ট্রেট মনে করে বিক্রিয়া শুরু করে, কিন্তু বিক্রিয়াকালে তৈরি সক্রিয় যৌগ এনজাইমের সক্রিয় স্থানকে স্থায়ীভাবে ধ্বংস করে দেয়।'
        ),
        details: l(
          'Kinetically time-dependent destruction of functional active sites. Clinical benchmarks: Aspirin acetylating Ser529 of COX-1, Penicillin acylating transpeptidase, Allopurinol suicide-inactivating xanthine oxidase as alloxanthine.',
          'সময়-নির্ভর স্থায়ী ধ্বংস। উদাহরণ: অ্যাসপিরিন কর্তৃক COX-1 এর Ser529 অ্যাসিটাইলেশন, পেনিসিলিন এবং জ্যান্থিন অক্সিডেজ ধ্বংসে অ্যালোপিউরিনল।'
        ),
        sectionId: 'practice',
        color: '#dc2626',
      },
      {
        id: 'node-mca-flux',
        label: l('7. Kacser-Burns MCA: Distributed Flux Control Coefficients', '৭. ক্যাকসার-বার্নস MCA: বণ্টিত ফ্লাক্স কন্ট্রোল কোএফিশিয়েন্ট'),
        description: l(
          'Metabolic flux is not dictated by a single rate-limiting enzyme, but shared across pathway steps: sum(C_i^J) = 1 (Summation Theorem).',
          'বিপাকীয় পথের মোট প্রবাহ কোনো একক গতি-নিয়ন্ত্রক এনজাইমের ওপর নির্ভর করে না, বরং একাধিক এনজাইমের মধ্যে বণ্টিত থাকে: sum(C_i^J) = ১।'
        ),
        details: l(
          'In glycolysis, C_hexokinase^J ~ 0.2, C_PFK^J ~ 0.4, C_PK^J ~ 0.2, C_transporters^J ~ 0.2. Overexpressing a single enzyme rarely boosts pathway flux proportionally due to elasticity feedback (Connectivity Theorem).',
          'গ্লাইকোলাইসিসে হেক্সোকাইনেজ, পিএফকে এবং পাইরুভেট কাইনেজের মধ্যে ফ্লাক্স নিয়ন্ত্রণের ক্ষমতা বণ্টিত থাকে; তাই একক এনজাইম বাড়িয়ে সামগ্রিক গতি বাড়ানো যায় না।'
        ),
        sectionId: 'integration',
        color: '#0891b2',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'Linear transformation and kinetic coordinate schematics showing Michaelis-Menten hyperbola, Lineweaver-Burk reciprocal plots for competitive and noncompetitive inhibition, and Metabolic Control Analysis flux summation.',
      'মাইকেলিস-মেনটেন হাইপারবোলা, প্রতিযোগিতামূলক ও অপ্রতিযোগিতামূলক বাধার জন্য লাইনউইভার-বার্ক প্লট এবং মেটাবলিক কন্ট্রোল অ্যানালাইসিসের ফ্লাক্স সামেশন সমীকরণ প্রদর্শক রেখাচিত্র।'
    ),
    steps: [
      l(
        'Step 1: Substrate binds enzyme active site forming transient ES complex; reaction velocity increases hyperbolically until active site saturation at Vmax.',
        'ধাপ ১: সাবস্ট্রেট এনজাইমের সক্রিয় স্থানে যুক্ত হয়ে অস্থায়ী ES কমপ্লেক্স গঠন করে; সক্রিয় স্থান সম্পৃক্ত না হওয়া পর্যন্ত গতিবেগ বৃদ্ধি পায়।'
      ),
      l(
        'Step 2: Competitive inhibitors raise apparent Km without altering Vmax; noncompetitive inhibitors depress Vmax with constant Km; uncompetitive inhibitors reduce both.',
        'ধাপ ২: প্রতিযোগিতামূলক বাধা Vmax পরিবর্তন না করে Km বাড়ায়; নন-কম্পিটিটিভ বাধা Km স্থির রেখে Vmax কমায়; আনকম্পিটিটিভ বাধা উভয়কেই কমিয়ে দেয়।'
      ),
      l(
        'Step 3: Allosteric cooperativity generates sigmoidal responsiveness; Metabolic Control Analysis demonstrates that flux control coefficients sum to 1.0 across the pathway.',
        'ধাপ ৩: অ্যালবস্টেরিক সহযোগিতা সিগময়েড বক্ররেখা তৈরি করে; মেটাবলিক কন্ট্রোল অ্যানালাইসিস প্রমাণ করে যে পুরো পথের ফ্লাক্স কন্ট্রোল সহগের সমষ্টি ঠিক ১.০।'
      ),
    ],
  },
  assessment: {
    question: l(
      'An investigator measures the kinetic parameters of a newly synthesized drug on a purified target enzyme. The double-reciprocal (Lineweaver-Burk) plot reveals that the inhibitor increases the y-intercept (1/Vmax) while leaving the x-intercept (-1/Km) completely identical to the uninhibited enzyme. What is the mechanism of inhibition, and what is its molecular consequence?',
      'একজন গবেষক একটি নতুন ওষুধের কার্যকারিতা পরীক্ষা করে দেখলেন যে লাইনউইভার-বার্ক প্লটে ওষুধটি y-ইন্টারসেপ্ট (1/Vmax) বাড়িয়ে দেয় কিন্তু x-ইন্টারসেপ্ট (-1/Km) সম্পূর্ণ অপরিবর্তিত থাকে। এই বাধার ধরন কী এবং এর আণবিক ব্যাখ্যা কী?'
    ),
    options: [
      l(
        'Competitive inhibition; the drug binds reversibly to the active site and can be completely displaced by adding high concentrations of substrate.',
        'প্রতিযোগিতামূলক বাধা; ওষুধটি সক্রিয় স্থানে যুক্ত হয় এবং অতিরিক্ত সাবস্ট্রেট দিলে বাধা দূর হয়।'
      ),
      l(
        'Pure noncompetitive inhibition; the drug binds with identical affinity to both free enzyme and enzyme-substrate complex at an allosteric site, decreasing catalytic turnover without altering substrate affinity.',
        'বিশুদ্ধ নন-কম্পিটিটিভ বাধা; ওষুধটি মুক্ত এনজাইম এবং ES কমপ্লেক্সের সাথে সমান আসক্তিতে অ্যালবস্টেরিক স্থানে যুক্ত হয়ে সাবস্ট্রেট আসক্তি পরিবর্তন না করেই বিক্রিয়ার সর্বোচ্চ বেগ কমিয়ে দেয়।'
      ),
      l(
        'Uncompetitive inhibition; the drug binds exclusively to the enzyme-substrate complex, shifting both 1/Vmax and 1/Km along strictly parallel lines.',
        'আনকম্পিটিটিভ বাধা; ওষুধটি শুধুমাত্র ES কমপ্লেক্সে যুক্ত হয় এবং সমান্তরাল রেখা তৈরি করে।'
      ),
      l(
        'Suicide irreversible inactivation; the drug forms a covalent bond that irreversibly destroys the enzyme active site over time.',
        'সুইসাইড ইনঅ্যাক্টিভেশন; ওষুধটি সক্রিয় স্থানে কোভ্যালেন্ট বন্ধন তৈরি করে এনজাইমটি স্থায়ীভাবে নষ্ট করে দেয়।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'In pure noncompetitive inhibition, the inhibitor binds an allosteric site with identical affinity whether substrate is present or not (Ki = Ki-prime). Because substrate binding is not impaired, Km (and thus the x-intercept -1/Km) remains unchanged. However, the inactive ESI complex cannot turnover product, reducing Vmax and raising the y-intercept (1/Vmax).',
      'বিশুদ্ধ নন-কম্পিটিটিভ বাধায় ইনহিবিটর মুক্ত এনজাইম ও ES কমপ্লেক্স উভয়ের সাথেই সমান আসক্তিতে যুক্ত হয় (Ki = Ki-prime)। ফলে সাবস্ট্রেট সংযুক্তি ব্যাহত হয় না (Km ও x-ইন্টারসেপ্ট অপরিবর্তিত থাকে), কিন্তু গঠিত ESI কমপ্লেক্স উৎপাদ তৈরি করতে পারে না বলে Vmax কমে যায় এবং y-ইন্টারসেপ্ট বেড়ে যায়।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation Level', 'ভিত্তি স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Logic of Catalysis & The Enzyme-Substrate Dance', 'অনুঘটনের যুক্তি ও এনজাইম-সাবস্ট্রেট মিথস্ক্রিয়া'),
          paragraphs: [
            l(
              'Enzymes are the macromolecular catalysts of living human cells, accelerating biochemical transformations by factors of 10^6 to 10^17 without being consumed in the process. Without enzymes, spontaneous biochemical reactions such as the hydrolysis of peptide bonds or the hydration of carbon dioxide would require decades to centuries, rendering biological life impossible. Enzymes achieve this extraordinary acceleration not by altering reaction equilibrium, but by lowering the free energy of activation (Delta-G-dagger) required to reach the transition state.',
              'এনজাইম হলো জীবকোষের প্রোটিন অনুঘটক যা বিক্রিয়ার গতি ১০^৬ থেকে ১০^১৭ গুণ পর্যন্ত বাড়িয়ে দেয় অথচ নিজেরা বিক্রিয়ায় ধ্বংস বা পরিবর্তিত হয় না। এনজাইম ছাড়া প্রোটিনের আর্দ্রবিশ্লেষণ বা কার্বন ডাই-অক্সাইডের হাইড্রেশনের মতো বিক্রিয়া সম্পন্ন হতে কয়েক দশক থেকে শতাব্দী লেগে যেত, ফলে জীবনের অস্তিত্ব অসম্ভব হতো। এনজাইম বিক্রিয়ার ভারসাম্যে কোনো পরিবর্তন না ঘটিয়ে ট্রানজিশন স্টেটে পৌঁছানোর সক্রিয়করণ শক্তি (Delta-G-dagger) কমিয়ে বিক্রিয়াকে প্রচণ্ড গতিশীল করে।'
            ),
            l(
              'When an enzyme binds its specific substrate, it forms an enzyme-substrate complex (ES) inside a specialized hydrophobic pocket called the active site. The catalytic power of the active site relies on weak noncovalent interactions—hydrogen bonds, ionic pairs, and hydrophobic contacts—that are maximized specifically in the transition state rather than with the ground-state substrate.',
              'এনজাইমের সক্রিয় স্থানে সাবস্ট্রেট যুক্ত হয়ে অস্থায়ী এনজাইম-সাবস্ট্রেট কমপ্লেক্স (ES) গঠন করে। এই সক্রিয় স্থানের অনুঘটন ক্ষমতা হাইড্রোজেন বন্ধন ও আয়নিক মিথস্ক্রিয়ার ওপর নির্ভর করে যা ট্রানজিশন স্টেটকে বিশেষভাবে স্থিতিশীল করে তোলে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Substrate Saturation & The Michaelis-Menten Curve', 'সাবস্ট্রেট সম্পৃক্তি ও মাইকেলিস-মেনটেন বক্ররেখা'),
          paragraphs: [
            l(
              'If you measure the initial reaction velocity (V) of an enzyme at increasing substrate concentrations ([S]), you observe a characteristic rectangular hyperbolic curve. At low substrate concentrations, the velocity increases linearly with [S] because plenty of active sites are vacant. As [S] rises, the active sites become increasingly occupied, until the enzyme reaches saturation and velocity approaches a ceiling termed maximal velocity (Vmax).',
              'সাবস্ট্রেটের ঘনমাত্রা ([S]) ক্রমান্বয়ে বৃদ্ধি করে এনজাইমের গতিবেগ (V) পর্যবেক্ষণ করলে একটি আয়তাকার হাইপারবোলিক বক্ররেখা দেখা যায়। নিম্ন সাবস্ট্রেটে অধিকাংশ সক্রিয় স্থান খালি থাকায় গতিবেগ সরলরৈখিকভাবে বাড়ে। তবে সাবস্ট্রেট অনেক বৃদ্ধি পেলে সক্রিয় স্থানগুলো সম্পূর্ণ সম্পৃক্ত হয়ে পড়ে এবং গতিবেগ একটি সর্বোচ্চ সীমায় পৌঁছায় যাকে Vmax বলা হয়।'
            ),
            l(
              'The substrate concentration required to reach exactly half of this maximal velocity (Vmax / 2) is a fundamental biochemical parameter known as the Michaelis constant (Km). An enzyme with a low Km requires very little substrate to achieve half-maximal speed, reflecting a high affinity for its substrate, whereas an enzyme with a high Km requires abundant substrate.',
              'সর্বোচ্চ বেগের ঠিক অর্ধেক (Vmax / 2) অর্জনের জন্য প্রয়োজনীয় সাবস্ট্রেট ঘনমাত্রাকে মাইকেলিস ধ্রুবক (Km) বলা হয়। যে এনজাইমের Km কম তার সাবস্ট্রেটের প্রতি আসক্তি বেশি, আর যার Km বেশি তার কার্যকারিতা পেতে প্রচুর সাবস্ট্রেটের প্রয়োজন হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('How Inhibitors Interfere with Enzyme Catalysis', 'ইনহিবিটর কীভাবে এনজাইমের কাজে বাধা দেয়'),
          paragraphs: [
            l(
              'Enzyme inhibitors are chemical agents that decrease the rate of catalytic transformation. Inhibitors are categorized into reversible inhibitors (which bind through noncovalent interactions and can dissociate) and irreversible inhibitors (which form permanent covalent bonds that destroy the enzyme active site). In competitive inhibition, the inhibitor mimics the molecular structure of the substrate and competes directly for the active site, increasing apparent Km while leaving Vmax attainable if substrate is flooded.',
              'এনজাইম ইনহিবিটর হলো এমন অণু যা অনুঘটনের গতি হ্রাস করে। এদের রিভার্সিবল (যা দুর্বল বন্ধনে যুক্ত হয় ও আলাদা হতে পারে) এবং ইররিভার্সিবল বা স্থায়ী (যা কোভ্যালেন্ট বন্ধনে এনজাইম নষ্ট করে) এই দুই ভাগে ভাগ করা হয়। প্রতিযোগিতামূলক বাধায় ইনহিবিটর সাবস্ট্রেটের আকৃতি অনুকরণ করে সক্রিয় স্থানে যুক্ত হয়; ফলে Km বেড়ে যায় কিন্তু অতিরিক্ত সাবস্ট্রেট দিলে পূর্বের সর্বোচ্চ বেগ (Vmax) ফিরে পাওয়া সম্ভব।'
            ),
            l(
              'In noncompetitive and uncompetitive inhibition, the inhibitor binds to secondary allosteric sites or only to the already-formed enzyme-substrate complex. In these cases, flooding the solution with extra substrate cannot dislodge the inhibitor, so the maximal speed (Vmax) of the reaction remains permanently suppressed as long as the drug is present.',
              'অপ্রতিযোগিতামূলক বাধায় ইনহিবিটর ভিন্ন একটি অ্যালবস্টেরিক স্থানে যুক্ত হয়। ফলে সাবস্ট্রেট যতই বাড়ানো হোক না কেন, ইনহিবিটরকে সরানো যায় না এবং এনজাইমের সর্বোচ্চ গতিবেগ (Vmax) স্থায়ীভাবে কমে যায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Tissue Specialization: Hexokinase versus Glucokinase', 'টিস্যুর বিশেষায়ন: হেক্সোকাইনেজ বনাম গ্লুকোকাইনেজ'),
          paragraphs: [
            l(
              'The physiological necessity of enzyme kinetics is exemplified by glucose phosphorylation in human tissues. In the human brain and erythrocytes, Hexokinase I possesses an ultra-low Km of 0.05 mM for glucose. Because normal fasting blood glucose is 4.5 to 5.5 mM, brain hexokinase operates continuously at its maximum capacity, guaranteeing uninterrupted energy production even during severe systemic hypoglycemia.',
              'মানবদেহে গ্লুকোজ ফসফরাইলেশনের মাধ্যমে এনজাইম গতিবিদ্যার শারীরবৃত্তীয় গুরুত্ব স্পষ্টভাবে বোঝা যায়। মানব মস্তিষ্ক ও লোহিত রক্তকণিকায় হেক্সোকাইনেজ-১-এর Km মাত্র ০.০৫ মিলি-মোলার। স্বাভাবিক রক্তের গ্লুকোজ ৪.৫-৫.৫ মিলি-মোলার হওয়ায় মস্তিষ্কের এনজাইমটি সবসময় পূর্ণ গতিতে কাজ করে চরম হাইপোগ্লাইসেমিয়াতেও শক্তি উৎপাদন চালু রাখে।'
            ),
            l(
              'In contrast, the liver expresses Glucokinase (Hexokinase IV), which has a high Km of 10 mM and sigmoidal cooperativity. In the fasting state, liver glucokinase remains largely inactive, allowing hepatic glucose to be released into the bloodstream. Only after a carbohydrate-rich meal, when portal glucose surges past 10 mM, does glucokinase rapidly accelerate to clear excess glucose and synthesize glycogen.',
              'বিপরীতভাবে, যকৃতে গ্লুকোকাইনেজের Km অনেক বেশি (১০ মিলি-মোলার)। উপবাসের সময় এটি প্রায় নিষ্ক্রিয় থাকে যাতে যকৃত রক্তে গ্লুকোজ ছেড়ে দিতে পারে। কেবল খাবার গ্রহণের পর পোর্টাল রক্তে গ্লুকোজ ১০ মিলি-মোলার ছাড়ালে এটি দ্রুত সক্রিয় হয়ে অতিরিক্ত গ্লুকোজ পরিষ্কার করে গ্লাইকোজেন তৈরি করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Everyday Pharmacology & Enzyme Targets', 'দৈনন্দিন ফার্মাকোলজি ও এনজাইম টার্গেট'),
          paragraphs: [
            l(
              'Over half of all prescription pharmaceuticals function as enzyme inhibitors. For example, statins (such as atorvastatin and rosuvastatin) are competitive inhibitors of HMG-CoA reductase that lower blood cholesterol by binding the active site in place of HMG-CoA. Nonsteroidal anti-inflammatory drugs (NSAIDs) such as ibuprofen inhibit cyclooxygenase (COX), blocking the synthesis of pain-causing prostaglandins.',
              'আধুনিক চিকিৎসাবিজ্ঞানের অর্ধেকেরও বেশি প্রেসক্রিপশন ড্রাগ এনজাইম ইনহিবিটর হিসেবে কাজ করে। উদাহরণস্বরূপ, কোলেস্টেরল কমানোর স্ট্যাটিন ওষুধগুলো HMG-CoA রিডাক্টেজের প্রতিযোগিতামূলক ইনহিবিটর হিসেবে কাজ করে। আবার আইবুপ্রোফেনের মতো ব্যথানাশক ওষুধ সাইক্লোঅক্সিজিনেজ (COX) এনজাইমকে বাধা দিয়ে প্রদাহ ও ব্যথা কমায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Principles of Catalysis', 'অনুঘটনের মূল নীতিসমূহ'),
          paragraphs: [
            l(
              'Enzymes lower the activation energy of biological reactions without changing equilibrium constants. Michaelis-Menten kinetics mathematically describe the saturation of active sites, yielding the fundamental constants Km (affinity) and Vmax (capacity). Reversible inhibitors modify these parameters in predictable patterns, forming the foundation of modern molecular medicine.',
              'এনজাইম রাসায়নিক ভারসাম্যে কোনো পরিবর্তন না এনে বিক্রিয়ার সক্রিয়করণ শক্তি কমিয়ে দেয়। মাইকেলিস-মেনটেন গতিবিদ্যা সক্রিয় স্থানের সম্পৃক্তিকে Km (আসক্তি) ও Vmax (ধারণক্ষমতা) ধ্রুবকের মাধ্যমে ব্যাখ্যা করে। এই পরামিতিগুলোর পরিবর্তন চিকিৎসাবিজ্ঞানে ওষুধ তৈরির ভিত্তি হিসেবে কাজ করে।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic Level', 'একাডেমিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('Briggs-Haldane Steady-State Derivation of Michaelis-Menten Equation', 'ব্রিগস-হ্যালডেন স্থিতাবস্থার মাইকেলিস-মেনটেন সমীকরণ প্রতিপাদন'),
          paragraphs: [
            l(
              'The classic single-substrate enzymatic reaction mechanism involves three elementary steps: E + S <-> ES (with forward rate constant k_1 and reverse rate constant k_-1), followed by catalytic conversion ES -> E + P (with rate constant k_2, also designated kcat). In 1925, G. E. Briggs and J. B. S. Haldane introduced the quasi-steady-state assumption: shortly after mixing enzyme and substrate, the concentration of the intermediate complex [ES] reaches a steady state where its rate of formation equals its rate of breakdown: d[ES]/dt = k_1 [E][S] - (k_-1 + k_2)[ES] = 0.',
              'একটি সাবস্ট্রেটযুক্ত এনজাইম বিক্রিয়া মূলত তিনটি ধাপে ঘটে: E + S <-> ES (সম্মুখ বেগ ধ্রুবক k_1 ও বিপরীত বেগ ধ্রুবক k_-1) এবং পরবর্তীতে অনুঘটন রূপান্তর ES -> E + P (বেগ ধ্রুবক k_2 বা kcat)। ১৯২৫ সালে জি. ই. ব্রিগস এবং জে. বি. এস. হ্যালডেন স্থিতাবস্থা অনুমান প্রস্তাব করেন: বিক্রিয়া শুরুর পর মধ্যবর্তী কমপ্লেক্স [ES] একটি স্থির অবস্থায় পৌঁছায় যেখানে এর তৈরি হওয়ার হার এবং ভাঙনের হার সমান হয়: d[ES]/dt = k_1 [E][S] - (k_-1 + k_2)[ES] = ০।'
            ),
            l(
              'Applying conservation of enzyme mass [E]_total = [E] + [ES], we express free enzyme as [E] = [E]_total - [ES]. Substituting this into the steady-state equation yields k_1 ([E]_total - [ES])[S] = (k_-1 + k_2)[ES]. Rearranging terms reveals [ES] = ([E]_total [S]) / (Km + [S]), where the Michaelis constant Km is strictly defined as (k_-1 + k_2) / k_1. Because initial product formation velocity is V = k_2 [ES], and maximal velocity occurs when all enzyme is saturated (Vmax = k_2 [E]_total), we derive V = (Vmax [S]) / (Km + [S]).',
              'এনজাইমের সংরক্ষণ সূত্র [E]_total = [E] + [ES] প্রয়োগ করে মুক্ত এনজাইম [E] = [E]_total - [ES] পাওয়া যায়। স্থিতাবস্থা সমীকরণে এটি বসিয়ে পাই: k_1 ([E]_total - [ES])[S] = (k_-1 + k_2)[ES]। সমাধান করলে দেখা যায় [ES] = ([E]_total [S]) / (Km + [S]), যেখানে মাইকেলিস ধ্রুবক Km = (k_-1 + k_2) / k_1। বিক্রিয়ার গতিবেগ V = k_2 [ES] এবং Vmax = k_2 [E]_total হওয়ায় চূড়ান্ত সমীকরণ দাঁড়ায় V = (Vmax [S]) / (Km + [S])।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Turnover Number (kcat) & Catalytic Perfection (kcat/Km)', 'টার্নওভার সংখ্যা (kcat) ও অনুঘটনীয় চরম উৎকর্ষ (kcat/Km)'),
          paragraphs: [
            l(
              'The turnover number kcat (first-order rate constant in units of s^-1) defines the maximal catalytic turnover per active site per second when substrate is saturating. Values of kcat range widely across biological enzymes: lysozyme exhibits a modest kcat of ~0.5 s^-1, whereas carbonic anhydrase catalyzes an astonishing 1,000,000 reactions per second per active site. To evaluate catalytic performance at physiological substrate levels ([S] << Km), biochemists calculate the specificity constant kcat / Km, which functions as an apparent second-order rate constant.',
              'টার্নওভার সংখ্যা kcat (প্রতি সেকেন্ডে একক) নির্দেশ করে সাবস্ট্রেট সম্পৃক্ত থাকা অবস্থায় প্রতিটি সক্রিয় স্থান প্রতি সেকেন্ডে কতটি বিক্রিয়া সম্পন্ন করতে পারে। জীবজগতে kcat-এর মান বিভিন্ন এনজাইমে বিভিন্ন হয়: লাইসোজাইমে এটি প্রায় ০.৫ s^-1, অথচ কার্বনিক অ্যানহাইড্রেজে এটি প্রতি সেকেন্ডে ১০,০০,০০০ বিক্রিয়া। নিম্ন সাবস্ট্রেট ঘনমাত্রায় এনজাইমের প্রকৃত দক্ষতা মূল্যায়নে kcat / Km অনুপাত হিসাব করা হয় যা দ্বিতীয়-ক্রমের বেগ ধ্রুবক হিসেবে কাজ করে।'
            ),
            l(
              'The upper physical limit of kcat / Km is governed by the rate of aqueous diffusion encounter between enzyme and substrate molecules, typically 10^8 to 10^9 M^-1 s^-1. Enzymes that achieve values within this ceiling—such as carbonic anhydrase, superoxide dismutase, acetylcholinesterase, and triose phosphate isomerase—are termed kinetically perfect. For these enzymes, catalysis occurs instantaneously upon substrate collision, meaning evolutionary improvements in catalytic chemistry can yield no further velocity increase.',
              'kcat / Km এর সর্বোচ্চ শারীরিক সীমা জলীয় দ্রবণে এনজাইম ও সাবস্ট্রেটের ব্যাপন সংঘর্ষের গতি (১০^৮ থেকে ১০^৯ M^-1 s^-1) দ্বারা নির্ধারিত হয়। যেসব এনজাইম এই সর্বোচ্চ সীমায় পৌঁছায়—যেমন কার্বনিক অ্যানহাইড্রেজ, সুপারঅক্সাইড ডিসমিউটেজ ও ট্রায়োজ ফসফেট আইসোমারেজ—তাদের কাইনেটিক্যালি পারফেক্ট বা নিখুঁত অনুঘটক বলা হয়। এদের ক্ষেত্রে সাবস্ট্রেট সক্রিয় স্থানে ছোঁয়া মাত্রই বিক্রিয়া ঘটে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Mathematical Taxonomy of Reversible Inhibition Models', 'বিপরীতমুখী এনজাইম বাধার গাণিতিক শ্রেণিবিন্যাস'),
          paragraphs: [
            l(
              'Reversible enzyme inhibition is classified into four fundamental models based on whether the inhibitor binds free enzyme (E), the enzyme-substrate complex (ES), or both. In competitive inhibition, the inhibitor binds exclusively to E with dissociation constant Ki = [E][I]/[EI], increasing apparent Km by the modifier alpha = 1 + [I]/Ki, giving V = (Vmax [S]) / (alpha Km + [S]). In uncompetitive inhibition, the inhibitor binds exclusively to ES with dissociation constant Ki-prime = [ES][I]/[ESI], modifying the equation to V = (Vmax [S]) / (Km + alpha-prime [S]), scaling both apparent Km and Vmax down by alpha-prime.',
              'রিভার্সিবল এনজাইম বাধা মূলত চারটি গাণিতিক মডেলে বিভক্ত, যা নির্ভর করে ইনহিবিটর মুক্ত এনজাইম (E), এনজাইম-সাবস্ট্রেট কমপ্লেক্স (ES) নাকি উভয়ের সাথে যুক্ত হয়। প্রতিযোগিতামূলক বাধায় ইনহিবিটর কেবল E-এর সাথে যুক্ত হয় (Ki = [E][I]/[EI]), যার ফলে আপাত Km বৃদ্ধি পায় alpha = ১ + [I]/Ki অনুপাতে। আনকম্পিটিটিভ বাধায় ইনহিবিটর কেবল ES-এর সাথে যুক্ত হয় (Ki-prime = [ES][I]/[ESI]), যার ফলে Vmax এবং Km উভয়ই alpha-prime অনুপাতে হ্রাস পায়।'
            ),
            l(
              'In noncompetitive and mixed inhibition, the inhibitor binds both E (with Ki) and ES (with Ki-prime). If Ki = Ki-prime, pure noncompetitive inhibition occurs: V = ((Vmax / alpha) [S]) / (Km + [S]), reducing Vmax without altering Km. If Ki != Ki-prime, mixed inhibition occurs: both Km and Vmax change. Double-reciprocal Lineweaver-Burk plots (1/V versus 1/[S]) reveal these differences through diagnostic intercept trajectories: competitive lines intersect on the y-axis, uncompetitive lines are strictly parallel, and noncompetitive lines intersect on the negative x-axis.',
              'মিশ্র ও অপ্রতিযোগিতামূলক বাধায় ইনহিবিটর E এবং ES উভয়ের সাথেই যুক্ত হয়। যদি Ki = Ki-prime হয় তবে বিশুদ্ধ নন-কম্পিটিটিভ বাধা ঘটে যেখানে Km স্থির থাকে কিন্তু Vmax কমে যায়। আর Ki != Ki-prime হলে মিশ্র বাধা ঘটে যেখানে উভয় মানই পরিবর্তিত হয়। লাইনউইভার-বার্ক প্লটে (১/V বনাম ১/[S]) প্রতিযোগিতামূলক রেখাগুলো y-অক্ষে এবং অপ্রতিযোগিতামূলক রেখাগুলো x-অক্ষে মিলিত হয়, আর আনকম্পিটিটিভ রেখাগুলো সমান্তরাল থাকে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Allosteric Transitions & The Hill Cooperative Model', 'অ্যালবস্টেরিক রূপান্তর ও হিল কো-অপারেটিভ মডেল'),
          paragraphs: [
            l(
              'Many regulatory metabolic enzymes are multisubunit oligomers displaying sigmoidal rather than hyperbolic saturation kinetics. In the Monod-Wyman-Changeux (MWC) concerted model, the enzyme exists in two conformational states in equilibrium: a low-affinity tense (T) state and a high-affinity relaxed (R) state. Substrate binding stabilizes the R state, pulling the equilibrium forward across adjacent subunits. Mathematically, cooperativity is approximated by the Hill equation: theta = [S]^n_H / (K_0.5^n_H + [S]^n_H), where n_H is the Hill coefficient.',
              'নিয়ন্ত্রণকারী বিপাকীয় এনজাইমগুলোর অধিকাংশই একাধিক সাবইউনিট নিয়ে গঠিত এবং হাইপারবোলার বদলে সিগময়েড কার্ভ প্রদর্শন করে। মনোড-ওয়াইম্যান-চেঞ্জাক্স (MWC) মডেলে এনজাইম দুটি অবস্থায় থাকে: কম আসক্তির T-স্টেট এবং বেশি আসক্তির R-স্টেট। সাবস্ট্রেট যুক্ত হলে এনজাইম R-স্টেটে রূপান্তরিত হয়। হিল সমীকরণে (theta = [S]^n_H / (K_0.5^n_H + [S]^n_H)) n_H হলো হিল সহগ যা সাবইউনিটগুলোর পারস্পরিক সহযোগিতার মাত্রা পরিমাপ করে।'
            ),
            l(
              'Phosphofructokinase-1 (PFK-1) in glycolysis serves as the textbook model of allosteric regulation. High physiological concentrations of ATP bind to an allosteric regulatory site distinct from the catalytic site, shifting PFK-1 toward the inactive T state and increasing K_0.5 for fructose-6-phosphate. Conversely, AMP and fructose-2,6-bisphosphate bind allosteric activator pockets, locking PFK-1 in the R state and shifting the sigmoidal saturation curve into an efficient hyperbola.',
              'গ্লাইকোলাইসিসের পিএফকে-১ এনজাইম অ্যালবস্টেরিক নিয়ন্ত্রণের প্রধান উদাহরণ। অতিরিক্ত এটিপি সক্রিয় স্থানের বাইরে ভিন্ন একটি অ্যালবস্টেরিক স্থানে যুক্ত হয়ে এনজাইমটিকে নিষ্ক্রিয় T-স্টেটে ঠেলে দেয়। অন্যদিকে এএমপি এবং ফ্রুক্টোজ-২,৬-বিসফসফেট সক্রিয়কারী স্থানে যুক্ত হয়ে পিএফকে-১-কে R-স্টেটে ধরে রাখে এবং সিগময়েড কার্ভকে দ্রুত কার্যকর হাইপারবোলায় রূপান্তরিত করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Linear Diagnostic Plots: Lineweaver-Burk, Eadie-Hofstee & Hanes-Woolf', 'রৈখিক রূপান্তর প্লট: লাইনউইভার-বার্ক ও এডি-হফস্টি বিশ্লেষণ'),
          paragraphs: [
            l(
              'While non-linear regression fitting of raw data is the modern standard, linear transformations remain indispensable for diagnosing inhibition mechanisms and checking experimental distortions. The Lineweaver-Burk double reciprocal transformation 1/V = (Km / Vmax)(1/[S]) + (1/Vmax) plots 1/V versus 1/[S], where the slope is Km/Vmax, y-intercept is 1/Vmax, and x-intercept is -1/Km. However, Lineweaver-Burk severely compresses data points at high substrate concentrations and over-weights experimental errors at low [S].',
              'যদিও আধুনিক গবেষণায় নন-লিনিয়ার কম্পিউটার রিগ্রেশন ব্যবহৃত হয়, ইনহিবিশন মডেল শনাক্তকরণে রৈখিক রূপান্তর অপরিহার্য। লাইনউইভার-বার্ক সমীকরণ ১/V = (Km / Vmax)(১/[S]) + (১/Vmax) অনুযায়ী ঢাল হলো Km/Vmax, y-ইন্টারসেপ্ট ১/Vmax এবং x-ইন্টারসেপ্ট -১/Km। তবে নিম্ন সাবস্ট্রেটে সামান্য পরিমাপের ভুল এই প্লটে অনেক বড় ত্রুটি সৃষ্টি করতে পারে।'
            ),
            l(
              'The Eadie-Hofstee transformation V = -Km(V/[S]) + Vmax plots V versus V/[S], distributing errors more evenly across the experimental range. A non-linear concave-down curve on an Eadie-Hofstee plot immediately diagnoses positive cooperativity or multiple active sites with different affinities, alerting the researcher that standard Michaelis-Menten assumptions are violated.',
              'এডি-হফস্টি প্লটে V বনাম V/[S] গ্রাফ আঁকা হয়, যা পরীক্ষামূলক ত্রুটিকে তুলনামূলকভাবে সুষমভাবে বণ্টন করে। এই প্লটে কোনো বক্ররেখা দেখা দিলে বোঝা যায় যে এনজাইমে একাধিক সক্রিয় স্থান বা অ্যালবস্টেরিক কো-অপারেটিভিটি বিদ্যমান রয়েছে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Summary of Kinetic Formalisms', 'গতিবিদ্যা কাঠামোর একাডেমিক সারাংশ'),
          paragraphs: [
            l(
              'Briggs-Haldane steady-state derivation establishes the theoretical relationship between elementary rate constants and macroscopic parameters Km and Vmax. Catalytic efficiency is upper-bounded by aqueous diffusion limits. Lineweaver-Burk and Eadie-Hofstee coordinate systems provide rigorous diagnostic differentiation among competitive, uncompetitive, and mixed allosteric inhibition modes.',
              'ব্রিগস-হ্যালডেন স্থিতাবস্থা প্রতিপাদন প্রাথমিক বেগ ধ্রুবকের সাথে ম্যাক্রোস্কোপিক Km ও Vmax-এর গাণিতিক সম্পর্ক স্থাপন করে। অনুঘটনীয় কার্যক্ষমতা জলীয় ব্যাপন গতির চরম সীমা দ্বারা সীমাবদ্ধ। লাইনউইভার-বার্ক ও এডি-হফস্টি প্লট এনজাইমের বাধা ও নিয়ন্ত্রণের সুনির্দিষ্ট গাণিতিক রূপরেখা প্রদান করে।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced & Research Level', 'উচ্চতর ও গবেষণা স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('Kacser-Burns Metabolic Control Analysis (MCA) & The Distributed Control Paradigm', 'ক্যাকসার-বার্নস মেটাবলিক কন্ট্রোল অ্যানালাইসিস ও বণ্টিত নিয়ন্ত্রণ ব্যবস্থা'),
          paragraphs: [
            l(
              'For decades, classical biochemistry taught the simplified dogma of the single "rate-limiting enzyme"—the concept that a metabolic pathway has one slow, bottleneck master enzyme whose activity entirely dictates pathway throughput. In the 1970s, Henrik Kacser, James Burns, and Heinrich and Rapoport independently dismantled this reductionist dogma through the mathematical formulation of Metabolic Control Analysis (MCA). MCA establishes that control of steady-state flux J is a systemic, distributed property shared across all pathway enzymes, transporters, and leaks.',
              'বহু দশক ধরে চিরায়ত প্রাণরসায়নে একক "গতি-নিয়ন্ত্রক এনজাইম" বা রেট-লিমিটিং এনজাইমের ধারণা শেখানো হতো—যেখানে মনে করা হতো একটি বিপাকীয় পথের সব গতি কেবল একটিমাত্র ধীরগতির এনজাইম নির্ধারণ করে। ১৯৭০-এর দশকে হেনরিক ক্যাকসার, জেমস বার্নস এবং হাইনরিখ ও রাপোপোর্ট মেটাবলিক কন্ট্রোল অ্যানালাইসিস (MCA) গাণিতিক তত্ত্বের মাধ্যমে এই সীমাবদ্ধ ধারণাকে ভেঙে দেন। MCA প্রমাণ করে যে কোনো বিপাকীয় পথের মোট প্রবাহ (J) কোনো একক এনজাইমের ওপর নয়, বরং পথের সকল এনজাইম ও বাহকের মধ্যে বণ্টিত থাকে।'
            ),
            l(
              'MCA formalizes two fundamental quantitative coefficients: the Flux Control Coefficient C_i^J, defined as the fractional change in pathway steady-state flux relative to a fractional change in enzyme activity: C_i^J = (d ln J / d ln v_i) = (dJ / dvi) * (v_i / J); and the Elasticity Coefficient epsilon_S^i, which measures the local, isolated sensitivity of an enzyme to changes in metabolite concentration: epsilon_S^i = (d ln v_i / d ln [S]).',
              'MCA দুটি গুরুত্বপূর্ণ পরিমাণগত সহগ সংজ্ঞায়িত করে: ফ্লাক্স কন্ট্রোল কোএফিশিয়েন্ট (C_i^J), যা এনজাইমের কার্যকারিতা পরিবর্তনের সাপেক্ষে পথের সামগ্রিক প্রবাহের পরিবর্তন পরিমাপ করে: C_i^J = (d ln J / d ln v_i); এবং ইলাস্টিসিটি কোএফিশিয়েন্ট (epsilon_S^i), যা নির্দিষ্ট কোনো সাবস্ট্রেট ঘনমাত্রার পরিবর্তনের প্রতি এনজাইমের নিজস্ব সংবেদনশীলতা পরিমাপ করে: epsilon_S^i = (d ln v_i / d ln [S])।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Summation & Connectivity Theorems', 'সামেশন ও কানেক্টিভিটি থিওরেম'),
          paragraphs: [
            l(
              'The core power of Metabolic Control Analysis resides in two foundational mathematical theorems. The Summation Theorem states that for any unbranched metabolic pathway, the sum of the flux control coefficients of all participating enzymes must equal exactly one: sum_{i=1}^n C_i^J = 1. Consequently, if one enzyme has a control coefficient C_1^J = 0.6, all remaining enzymes must share the residual 0.4. If an enzyme has C_i^J = 0, changing its expression or activity produces zero change in pathway flux.',
              'মেটাবলিক কন্ট্রোল অ্যানালাইসিসের ভিত্তি হলো দুটি মৌলিক গাণিতিক উপপাদ্য। সামেশন থিওরেম অনুসারে যেকোনো সরল বিপাকীয় পথে সকল অংশগ্রহণকারী এনজাইমের ফ্লাক্স কন্ট্রোল সহগের সমষ্টি ঠিক ১ হতে হবে: sum_{i=1}^n C_i^J = ১। সুতরাং একটি এনজাইমের C_1^J যদি ০.৬ হয়, তবে পথের বাকি সব এনজাইমের সহগের যোগফল অবশ্যই ০.৪ হবে। আর কোনো এনজাইমের C_i^J যদি শূন্য হয়, তবে তার পরিমাণ দ্বিগুণ করলেও মোট প্রবাহে কোনো পরিবর্তন আসবে না।'
            ),
            l(
              'The Connectivity Theorem links local enzyme elasticities to global pathway flux coefficients: for any shared intermediate metabolite S, sum_{i=1}^n (C_i^J * epsilon_S^i) = 0. This reveals why overexpressing a supposedly "rate-limiting" enzyme rarely doubles pathway flux in vivo: as the first enzyme accelerates, its product S accumulates, allosterically inhibiting the enzyme or encountering downstream elasticity resistance that dampens systemic throughput.',
              'কানেক্টিভিটি থিওরেম এনজাইমের নিজস্ব ইলাস্টিসিটিকে সামগ্রিক প্রবাহের সাথে যুক্ত করে: পথের যেকোনো মধ্যবর্তী যৌগ S-এর জন্য, sum_{i=1}^n (C_i^J * epsilon_S^i) = ০। এটি ব্যাখ্যা করে কেন কোনো "রেট-লিমিটিং" এনজাইম পরীক্ষাগারে বাড়িয়ে দিলেও কোষে সামগ্রিক গতি দ্বিগুণ হয় না: কারণ প্রথম এনজাইম দ্রুত কাজ করলে মধ্যবর্তী যৌগ জমে যায় এবং ডাউনস্ট্রিম এনজাইমের ওপর বিপরীত চাপ সৃষ্টি করে প্রবাহকে নিয়ন্ত্রণ করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Metabolic Engineering & Synthetic Biology Flux Optimization', 'মেটাবলিক ইঞ্জিনিয়ারিং ও সিন্থেটিক বায়োলজিতে প্রবাহ অপ্টিমাইজেশন'),
          paragraphs: [
            l(
              'In biotechnology and metabolic medicine, understanding MCA prevents costly mistakes. Historically, metabolic engineers attempting to overproduce ethanol in yeast or penicillin in fungi cloned promoters to overexpress single "pacemaker" enzymes by 500%, only to observe trivial 2–5% increases in final product flux because C_i^J of the target enzyme was below 0.1. Modern synthetic biology instead measures MCA control coefficients across the whole network and tunes multi-enzyme expression stoichiometrically.',
              'জৈবপ্রযুক্তি ও চিকিৎসাবিজ্ঞানে MCA বোঝা অত্যন্ত জরুরি। ঐতিহাসিকভাবে ইস্টে ইথানল বা পেনিসিলিন উৎপাদন বাড়াতে বিজ্ঞানীরা একক এনজাইমের প্রকাশ ৫০০% বাড়িয়েও মাত্র ২-৫% উৎপাদন বৃদ্ধি দেখতে পেয়েছিলেন, কারণ সেই এনজাইমের C_i^J মান ছিল ০.১-এর নিচে। আধুনিক সিন্থেটিক বায়োলজি এখন সম্পূর্ণ নেটওয়ার্কের সকল সহগ হিসাব করে মাল্টি-এনজাইম সমন্বয়ের মাধ্যমে প্রবাহ বৃদ্ধি করে।'
            ),
            l(
              'In clinical medicine, MCA explains the phenomenon of genetic dominance and haploinsufficiency in inborn errors of metabolism. Because most enzymes operate with small control coefficients (C_i^J < 0.2), losing 50% of enzyme activity in heterozygous carriers typically produces zero reduction in pathway flux, explaining why the vast majority of inborn enzyme deficiencies (such as PKU, galactosemia, and MSUD) are completely recessive.',
              'ক্লিনিক্যাল চিকিৎসায় MCA জন্মগত বিপাকীয় রোগে জেনেটিক ডমিন্যান্স ও ক্যারিয়ার অবস্থার লক্ষণহীনতা ব্যাখ্যা করে। যেহেতু অধিকাংশ এনজাইমের C_i^J মান ০.২-এর নিচে থাকে, তাই হেটারোজাইগাস ক্যারিয়ারদের ৫০% এনজাইম নষ্ট হলেও সামগ্রিক প্রবাহ প্রায় অপরিবর্তিত থাকে; ফলে PKU, গ্যালাক্টোসেমিয়া ইত্যাদি রোগ সম্পূর্ণ রিসেসিভ বা প্রচ্ছন্ন বৈশিষ্ট্য প্রকাশ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Thermodynamic Reversibility & Near-Equilibrium Reactions', 'তাপগতিবিদ্যাগত প্রত্যাবর্তিতা ও ভারসাম্যের কাছাকাছি বিক্রিয়া'),
          paragraphs: [
            l(
              'Enzymes catalyzing near-equilibrium reactions (where Delta-G is close to zero, such as phosphoglucose isomerase or lactate dehydrogenase) possess infinite substrate elasticities (epsilon_S -> infinity) and virtually zero flux control coefficients (C_i^J ~ 0). Inhibiting these enzymes by 80% produces zero change in pathway flux until inhibition approaches >95%, at which point the enzyme abruptly transitions into a non-equilibrium bottleneck.',
              'যেসব এনজাইম প্রায় ভারসাম্যাবস্থার বিক্রিয়া অনুঘটন করে (Delta-G প্রায় শূন্য, যেমন ফসফোগ্লুকোজ আইসোমারেজ বা ল্যাকটেট ডিহাইড্রোজিনেজ), তাদের ইলাস্টিসিটি অত্যন্ত বেশি থাকে এবং ফ্লাক্স কন্ট্রোল সহগ প্রায় শূন্য (C_i^J ~ ০) হয়। এদের ৮০% কার্যকারিতা নষ্ট করলেও বিপাকীয় প্রবাহে কোনো প্রভাব পড়ে না, যতক্ষণ না বাধা ৯৫% অতিক্রম করে হঠাৎ গতি-রোধক বোতলনেক তৈরি করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Research Frontiers in Metabolic Control', 'মেটাবলিক নিয়ন্ত্রণের গবেষণা ফ্রন্টিয়ার্স'),
          paragraphs: [
            l(
              'Metabolic Control Analysis provides the foundational mathematical calculus uniting enzyme molecular kinetics with systemic physiology. By quantifying control as a distributed network phenomenon rather than an isolated single-enzyme property, MCA governs rational metabolic drug design, synthetic pathway engineering, and the clinical genetics of monogenic metabolic disease.',
              'মেটাবলিক কন্ট্রোল অ্যানালাইসিস আণবিক এনজাইম গতিবিদ্যাকে সামগ্রিক শারীরবৃত্তীয় নেটওয়ার্কের সাথে গাণিতিকভাবে সংযুক্ত করে। নিয়ন্ত্রণকে একক এনজাইমের বদলে সমগ্র নেটওয়ার্কের যৌথ ধর্ম হিসেবে দেখার এই আধুনিক দৃষ্টিভঙ্গি ড্রাগ ডিজাইন এবং জেনেটিক রোগের সঠিক চিকিৎসায় যুগান্তকারী ভূমিকা পালন করছে।'
            ),
          ],
        },
      ],
    },
  },
}
