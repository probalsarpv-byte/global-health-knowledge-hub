import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const exerciseRefs = [
  {
    id: 'hargreaves-spriet-exercise-metab-2020',
    authors: 'Mark Hargreaves, Lawrence L. Spriet',
    title: 'Skeletal muscle energy metabolism during exercise. Nature Metabolism, 2(9):817-828',
    organization: 'Nature Publishing Group',
    year: 2020,
    url: 'https://pubmed.ncbi.nlm.nih.gov/32747792/',
  },
  {
    id: 'lehninger-biochem-8e-ch23',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 23: Hormonal Regulation and Integration of Mammalian Metabolism',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'hardie-ampk-cell-metab-2012',
    authors: 'D. Grahame Hardie',
    title: 'AMPK and energy sensing. Cell Metabolism, 15(6):838-847',
    organization: 'Elsevier / Cell Press',
    year: 2012,
    url: 'https://pubmed.ncbi.nlm.nih.gov/22682226/',
  },
  {
    id: 'brooks-lactate-cellmetab-2018',
    authors: 'George A. Brooks',
    title: 'The Science and Translation of Lactate Shuttle Theory. Cell Metabolism, 27(4):757-785',
    organization: 'Elsevier / Cell Press',
    year: 2018,
    url: 'https://pubmed.ncbi.nlm.nih.gov/29617642/',
  },
  {
    id: 'egan-zierath-exercise-cellmetab-2013',
    authors: 'Brendan Egan, Juleen R. Zierath',
    title: 'Exercise metabolism and the molecular regulation of skeletal muscle adaptation. Cell Metabolism, 17(2):162-184',
    organization: 'Elsevier / Cell Press',
    year: 2013,
    url: 'https://pubmed.ncbi.nlm.nih.gov/23395166/',
  },
]

const exercise3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Exercise Bioenergetics & Training Adaptation',
    '৩ডি বহু-অঙ্গীয় ব্যায়াম জৈবশক্তিবিজ্ঞান ও প্রশিক্ষণ অভিযোজনের মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: explore how contracting skeletal myofibers, cardiac output adaptations, adipose tissue lipolysis, and hepatic gluconeogenesis integrate across the exercise intensity spectrum from sprint phosphagens to marathon lipid oxidation.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: পর্যবেক্ষণ করুন কীভাবে তীব্র স্প্রিন্ট থেকে শুরু করে দূরপাল্লার ম্যারাথনে কঙ্কালপেশি, হৃদযন্ত্র, চর্বিকলা এবং যকৃৎ সমন্বিতভাবে শক্তি যোগায়।'
  ),
  description: l(
    'Human exercise elicits the most extreme bioenergetic demands in mammalian physiology, elevating skeletal muscle ATP turnover more than 100-fold within milliseconds of contraction. Energy delivery is sustained through a tightly orchestrated temporal continuum: phosphagens (ATP, phosphocreatine), anaerobic glycolysis, aerobic carbohydrate oxidation, and adipose-derived fatty acid beta-oxidation.',
    'ব্যায়ামের সময় কঙ্কালপেশির এটিপি ব্যবহারের গতি চোখের পলকে ১০০ গুণেরও বেশি বৃদ্ধি পায়। ফসফাজেন ব্যবস্থা (এটিপি, ফসফোকেন), অবাধ গ্লাইকোলাইসিস, বায়বীয় শর্করা জারণ এবং চর্বির বিটা-জারণের একটি নিখুঁত সমন্বিত ধারাবাহিকতার মাধ্যমে এই বিপুল শক্তির জোগান অব্যাহত থাকে।'
  ),
  organs: [
    {
      id: 'organ-type1-slow-oxidative',
      name: l('Skeletal Muscle: Type I Oxidative Fibers', 'কঙ্কালপেশি: টাইপ ১ ধীরগতির জারণক্ষম তন্তু'),
      latinName: 'Myofibra Typus I (Slow Oxidative)',
      system: l('Musculoskeletal Locomotor System', 'কঙ্কাল-পেশি চলনতন্ত্র'),
      cavity: l('Deep Postural & Appendicular Musculature', 'গভীর ভঙ্গিমা ও অঙ্গপ্রত্যঙ্গের পেশিকলা'),
      position3D: { x: -8, y: 140, z: 2 },
      color: '#dc2626',
      highlightColor: '#ef4444',
      shapeType: 'skeleton',
      description: l(
        'Slow-twitch oxidative myofibers are packed with dense capillary networks, high myoglobin content, and abundant subsarcolemmal and intermyofibrillar mitochondria. They specialize in high-efficiency, fatigue-resistant ATP production via beta-oxidation and pyruvate oxidation, expressing high levels of lipoprotein lipase (LPL) and fatty acid translocase (FAT/CD36).',
        'ধীরগতির জারণক্ষম পেশিতন্তুগুলো প্রচুর রক্তনালী, মায়োগ্লোবিন এবং অসংখ্য মাইটোকন্ড্রিয়া ধারণ করে। এরা ক্লান্তিহীনভাবে দীর্ঘ সময় ধরে চর্বি ও পাইরুভেট পুড়িয়ে এটিপি তৈরি করতে পারে এবং প্রচুর লাইপোপ্রোটিন লাইপেজ ও ফ্যাটি অ্যাসিড বাহক ধারণ করে।'
      ),
      spatialRelations: l(
        'Abundant in postural muscles (soleus, erector spinae), perfused by tortuous microvascular capillaries optimizing oxygen diffusion.',
        'শরীরের ভঙ্গিমা রক্ষাকারী পেশিতে (যেমন পায়ের সোলিয়াস) প্রচুর পরিমাণে থাকে যা অক্সিজেন শোষণ সর্বাধিক করে।'
      ),
      physiology: l(
        'Recruited first during low-to-moderate intensity aerobic exercise (walking, cycling, marathon running), maintaining near-constant ATP levels without significant lactate accumulation.',
        'হাঁটা বা দৌড়ানোর মতো মাঝারি পরিশ্রমে প্রথম সক্রিয় হয় এবং রক্তে কোনো অতিরিক্ত ল্যাকটেট না জমিয়েই অবিরত শক্তি যোগায়।'
      ),
      nutritionConnection: l(
        'Thrives on circulating non-esterified fatty acids (NEFA) and intramuscular triglycerides (IMTG); enhanced by high-fat adaptation or fasted endurance training.',
        'রক্তের মুক্ত ফ্যাটি অ্যাসিড এবং পেশির নিজস্ব চর্বি পুড়িয়ে বেঁচে থাকে; সুষম খাদ্য ও প্রশিক্ষণে এর কর্মক্ষমতা বহুগুণ বাড়ে।'
      ),
      clinicalSignificance: l(
        'High percentage of Type I muscle fibers protects against metabolic syndrome, insulin resistance, and type 2 diabetes by maintaining elite rates of whole-body lipid and glucose clearance.',
        'টাইপ ১ তন্তুর প্রাচুর্য শরীর থেকে দ্রুত গ্লুকোজ ও চর্বি সরিয়ে ফেলে মেটাবলিক সিন্ড্রোম ও ডায়াবেটিস প্রতিরোধে সুরক্ষা দেয়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-type2x-fast-glycolytic',
      name: l('Skeletal Muscle: Type IIx Fast Glycolytic Fibers', 'কঙ্কালপেশি: টাইপ ২এক্স দ্রুতগতির গ্লাইকোলাইটিক তন্তু'),
      latinName: 'Myofibra Typus IIx (Fast Glycolytic)',
      system: l('Musculoskeletal High-Power System', 'কঙ্কাল-পেশি উচ্চক্ষমতা ব্যবস্থা'),
      cavity: l('Superficial Appendicular Musculature', 'উপরিভাগের উপাঙ্গীয় পেশিকলা'),
      position3D: { x: 8, y: 140, z: 2 },
      color: '#3b82f6',
      highlightColor: '#60a5fa',
      shapeType: 'skeleton',
      description: l(
        'Fast-twitch glycolytic fibers produce explosive power and velocity. They possess high myosin ATPase activity (fast cross-bridge cycling), massive glycogen stores, high creatine kinase and myokinase activity, and elite glycolytic enzyme density (PFK-1, GAPDH, LDHA), but low mitochondrial volume, fatiguing rapidly due to H+ and inorganic phosphate accumulation.',
        'দ্রুতগতির গ্লাইকোলাইটিক তন্তুগুলো প্রচণ্ড শক্তি ও গতি তৈরি করে। এদের প্রচুর গ্লাইকোজেন, ক্রিয়েটিন কাইনেজ এবং গ্লাইকোলাইটিক এনজাইম থাকে কিন্তু মাইটোকন্ড্রিয়া কম থাকে, ফলে দ্রুত অ্যাসিড ও ফসফেট জমে এরা অল্পতেই ক্লান্ত হয়ে পড়ে।'
      ),
      spatialRelations: l(
        'Predominates in explosive power muscle beds (gastrocnemius, triceps brachii, quadriceps rectus femoris).',
        'তীব্র গতির পেশিগুলোতে (যেমন হাতের ট্রাইসেপ্স বা পায়ের কোয়াড্রিসেপ্স) এদের আধিক্য দেখা যায়।'
      ),
      physiology: l(
        'Recruited according to Henneman’s size principle during all-out maximal exertion (100m sprint, heavy Olympic weightlifting, jumping), generating ATP predominantly from phosphocreatine and anaerobic glycolysis.',
        'সর্বোচ্চ শক্তির প্রয়োজনে (যেমন ১০০ মিটার দৌড় বা ভারী ওজন তোলা) এগুলো সক্রিয় হয়ে ফসফোকেন ও অবাধ গ্লাইকোলাইসিস থেকে বিদ্যুৎ গতিতে শক্তি যোগায়।'
      ),
      nutritionConnection: l(
        'Dietary creatine monohydrate supplementation (5 g daily) expands intracellular phosphocreatine stores by 20–30%, improving high-intensity sprint repetition performance.',
        'খাবারের সাথে ক্রিয়েটিন গ্রহণ করলে পেশির ফসফোকেন ভাণ্ডার ২০–৩০% বৃদ্ধি পায়, যা চরম পরিশ্রমে তাৎক্ষণিক শক্তি ধরে রাখতে সাহায্য করে।'
      ),
      clinicalSignificance: l(
        'Rapid muscle glycogen depletion and accumulation of H+ and H2PO4- during Type IIx recruitment inhibit actomyosin cross-bridge force generation, defining acute high-intensity muscular fatigue.',
        'গ্লাইকোজেন ফুরিয়ে যাওয়া এবং অ্যাসিড জমে যাওয়া পেশির প্রোটিন সংকোচন ক্ষমতাকে অবদমিত করে তীব্র ক্লান্তি তৈরি করে।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-adipose-exercise-lipolysis',
      name: l('White Adipose Tissue (Adipose Triglyceride Lipase Flux)', 'শ্বেত চর্বিকলা (অ্যাডিপোজ ট্রাইগ্লিসারাইড লাইপেজ প্রবাহ)'),
      latinName: 'Textus Adiposus Albus',
      system: l('Endocrine & Energy Storage System', 'অন্তঃক্ষরা ও শক্তি সঞ্চয় ব্যবস্থা'),
      cavity: l('Subcutaneous & Visceral Depots', 'ত্বকের নিচে ও ভিসেরাল চর্বিস্তর'),
      position3D: { x: 0, y: 160, z: 2 },
      color: '#eab308',
      highlightColor: '#facc15',
      shapeType: 'stomach',
      description: l(
        'During sustained submaximal exercise, the sympathoadrenal surge of epinephrine, alongside falling insulin, stimulates the cyclic AMP / PKA cascade in adipocytes. PKA phosphorylates perilipin-1 and hormone-sensitive lipase (HSL), while adipose triglyceride lipase (ATGL) initiates triacylglycerol hydrolysis, releasing non-esterified fatty acids (NEFA) bound to albumin into the bloodstream.',
        'দীর্ঘ ব্যায়ামের সময় এপিনেফ্রিন বৃদ্ধি এবং ইনসুলিন হ্রাসের ফলে চর্বি কোষে PKA ক্যাসকেড সক্রিয় হয়। ATGL এবং হরমোন-সংবেদনশীল লাইপেজ (HSL) চর্বি ভেঙে মুক্ত ফ্যাটি অ্যাসিড হিসেবে রক্তে ছেড়ে দেয়, যা অ্যালবুমিনের সাথে যুক্ত হয়ে পেশিতে পৌঁছায়।'
      ),
      spatialRelations: l(
        'Distributed subcutaneously across the abdominal wall, gluteofemoral beds, and visceral compartments.',
        'পেটের প্রাচীর, নিতম্ব এবং অভ্যন্তরীণ অঙ্গের চারপাশে বিস্তৃত থাকে।'
      ),
      physiology: l(
        'Subcutaneous abdominal adipose blood flow increases four-fold during aerobic exercise to transport liberated fatty acids to working skeletal muscle for beta-oxidation.',
        'বায়বীয় ব্যায়ামের সময় চর্বিকলায় রক্তপ্রবাহ চার গুণ বৃদ্ধি পায় যাতে মুক্ত চর্বি দ্রুত কাজ করা পেশিতে পৌঁছে পুড়তে পারে।'
      ),
      nutritionConnection: l(
        'Ingesting high-glycemic carbohydrates immediately before exercise spikes insulin, potently suppressing ATGL and HSL lipolysis, shifting fuel selection toward carbohydrate reliance.',
        'ব্যায়ামের ঠিক আগে মিষ্টি খাবার খেলে ইনসুলিন বেড়ে চর্বি ভাঙন বন্ধ করে দেয় এবং দেহকে শর্করার ওপর নির্ভরশীল করে তোলে।'
      ),
      clinicalSignificance: l(
        'Consistent aerobic training enhances adipose capillary density, catecholamine sensitivity, and mitochondrial capacity, facilitating efficient fat oxidation and weight management.',
        'নিয়মিত বায়বীয় ব্যায়াম চর্বিকলার রক্তপ্রবাহ ও চর্বি ভাঙার গতি বাড়িয়ে দীর্ঘস্থায়ী ওজন নিয়ন্ত্রণ ও ফিটনেস নিশ্চিত করে।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-liver-exercise-cori-cycle',
      name: l('Liver (Cori Cycle Gluconeogenesis & Glycogenolysis)', 'যকৃৎ (কোরি চক্র গ্লুকোনিওজেনেসিস ও গ্লাইকোজেন ভাঙন)'),
      latinName: 'Hepar (Glycogenolysis & Gluconeogenesis)',
      system: l('Hepatic Metabolic Hub', 'যকৃৎ বিপাকীয় নিয়ন্ত্রণ কেন্দ্র'),
      cavity: l('Peritoneal Cavity (Right Hypochondrium)', 'পেরিটোনিয়াল গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 5, y: 175, z: 2 },
      color: '#059669',
      highlightColor: '#10b981',
      shapeType: 'liver',
      description: l(
        'Maintains euglycemia during exercise through rapid glucagon- and epinephrine-stimulated hepatic glycogenolysis (yielding up to 1.5–2.0 g glucose per minute), transitioning to gluconeogenesis via the Cori cycle (lactate to glucose) and Cahill cycle (alanine to glucose) during prolonged exertion.',
        'ব্যায়ামের সময় গ্লুকাগন ও এপিনেফ্রিনের প্রভাবে যকৃতের গ্লাইকোজেন ভেঙে রক্তে চিনি যোগায়, এবং দীর্ঘ পরিশ্রমে কোরি চক্রের মাধ্যমে পেশি থেকে আসা ল্যাকটেটকে পুনরায় নতুন গ্লুকোজে রূপান্তরিত করে রক্তের শর্করা স্বাভাবিক রাখে।'
      ),
      spatialRelations: l(
        'Located in the right upper quadrant, receiving splenic and mesenteric venous blood alongside oxygenated hepatic arterial blood.',
        'উদর গহ্বরের ডান পাশে অবস্থিত এবং পোর্টাল শিরার মাধ্যমে পরিপাকতন্ত্র ও পেশির বিপাকীয় উপাদান গ্রহণ করে সরাসরি প্রক্রিয়া করে।'
      ),
      physiology: l(
        'Hepatic glucose production matches working muscle glucose uptake during moderate exercise; in exhaustive marathons, liver glycogen depletion precipitates profound hypoglycemia (the "bonk" or "hitting the wall").',
        'মাঝারি পরিশ্রমে যকৃতের গ্লুকোজ তৈরির হার পেশির গ্লুকোজ ব্যবহারের সাথে নিখুঁতভাবে মিলে যায়; কিন্তু দীর্ঘ ম্যারাথনে যকৃতের গ্লাইকোজেন ফুরিয়ে গেলে তীব্র হাইপোগ্লাইসেমিয়া বা জ্ঞান হারানোর অবস্থা তৈরি হয়।'
      ),
      nutritionConnection: l(
        'Exogenous carbohydrate ingestion (30–90 g/hour of glucose and fructose mixtures) during exercise spares liver glycogen, blunts cortisol surges, and prevents central fatigue.',
        'ব্যায়ামের সময় গ্লুকোজ ও ফ্রুক্টোজ মিশ্রিত পানীয় গ্রহণ করলে যকৃতের গ্লাইকোজেন ক্ষয় রোধ হয় এবং চরম অবসাদ এড়ানো যায়।'
      ),
      clinicalSignificance: l(
        'In endurance athletes, hepatic adaptation increases basal glycogen storage capacity by 30–50%, providing substantial protection against competitive hypoglycemic collapse.',
        'প্রশিক্ষণপ্রাপ্ত অ্যাথলেটদের যকৃতে গ্লাইকোজেন সঞ্চয় ক্ষমতা ৩০–৫০% বৃদ্ধি পায়, যা চরম পরিশ্রমে রক্তে সুগার কমে যাওয়া থেকে সুরক্ষা দেয়।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism31ExerciseBioenergeticsLesson: LessonTopic = {
  id: 'topic.metabolism.exercise-bioenergetics-adaptation',
  slug: 'exercise-bioenergetics-adaptation',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '31 · Exercise Bioenergetics, Muscle Contraction & Metabolic Adaptation',
    '৩১ · ব্যায়াম জৈবশক্তিবিজ্ঞান, পেশি সংকোচন ও বিপাকীয় অভিযোজন'
  ),
  summary: l(
    'Skeletal muscle energy metabolism during exercise: temporal continuum of phosphagens (creatine kinase), anaerobic glycolysis, aerobic carbohydrate and lipid oxidation, AMPK-driven insulin-independent GLUT4 translocation, the Crossover Concept and Lactate Threshold, and molecular divergence between endurance (PGC-1alpha) and resistance hypertrophy (mTORC1).',
    'ব্যায়ামের সময় কঙ্কালপেশির শক্তি বিপাক: ফসফাজেন (ক্রিয়েটিন কাইনেজ), অবাধ গ্লাইকোলাইসিস, বায়বীয় শর্করা ও চর্বি জারণ, AMPK পরিচালিত ইনসুলিনহীন GLUT4 স্থানান্তর, ক্রসওভার ধারণা ও ল্যাকটেট থ্রেশহোল্ড, এবং সহনশীলতা (PGC-1alpha) ও পেশি বৃদ্ধির (mTORC1) মধ্যকার আণবিক রূপান্তর।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Map the temporal and power contributions of the four muscle energy systems across exercise durations from sprint bursts to multi-hour endurance events.',
      'কয়েক সেকেন্ডের স্প্রিন্ট থেকে শুরু করে কয়েক ঘণ্টার দূরপাল্লার ব্যায়ামে পেশির চারটি প্রধান শক্তি ব্যবস্থার অবদান ও সময়কাল নিরূপণ করা।'
    ),
    l(
      'Detail the molecular mechanism of contraction-stimulated GLUT4 translocation via AMPK and AS160, explaining its insulin-independent clinical therapeutic value in diabetes.',
      'AMPK ও AS160 দ্বারা পেশি সংকোচনে ইনসুলিন ছাড়াই GLUT4 স্থানান্তর পদ্ধতি এবং ডায়াবেটিস নিয়ন্ত্রণে এর অপরিসীম চিকিৎসা গুরুত্ব ব্যাখ্যা করা।'
    ),
    l(
      'Contrast the divergent molecular signaling networks governing endurance adaptation (AMPK-PGC-1alpha) versus resistance hypertrophy (mechanotransduction-mTORC1).',
      'সহনশীলতা অভিযোজন (AMPK-PGC-1alpha) এবং ভারী ব্যায়ামে পেশি বৃদ্ধির (mTORC1) মধ্যকার ভিন্নমুখী আণবিক সংকেত পথগুলো বিশ্লেষণ করা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  relatedTopicIds: ['topic.metabolism.tca-oxphos', 'topic.metabolism.fatty-acid-oxidation-ketones', 'topic.metabolism.mitochondrial-dynamics-flexibility'],
  references: exerciseRefs,
  evidenceBySection: {
    introduction: ['hargreaves-spriet-exercise-metab-2020', 'lehninger-biochem-8e-ch23'],
    structure: ['hargreaves-spriet-exercise-metab-2020', 'hardie-ampk-cell-metab-2012'],
    mechanism: ['hardie-ampk-cell-metab-2012', 'brooks-lactate-cellmetab-2018'],
    integration: ['egan-zierath-exercise-cellmetab-2013', 'brooks-lactate-cellmetab-2018'],
    practice: ['egan-zierath-exercise-cellmetab-2013', 'hargreaves-spriet-exercise-metab-2020'],
    takeaways: ['hargreaves-spriet-exercise-metab-2020', 'lehninger-biochem-8e-ch23'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Bioenergetic Challenge of Muscular Contraction', '১. পেশি সংকোচনের জৈবশক্তিগত চ্যালেঞ্জ'), sectionId: 'introduction' },
      { id: 'sec-phosphagen', label: l('2. The Phosphagen & Anaerobic Glycolytic Systems', '২. ফসফাজেন ও অবাধ গ্লাইকোলাইটিক ব্যবস্থা'), sectionId: 'structure' },
      { id: 'sec-ampk', label: l('3. AMPK Signaling: Insulin-Independent GLUT4 & Fat Oxidation', '৩. AMPK সংকেত: ইনসুলিনহীন GLUT4 ও চর্বি জারণ'), sectionId: 'mechanism' },
      { id: 'sec-intensity', label: l('4. Fuel Selection, Lactate Threshold & Crossover Concept', '৪. জ্বালানি নির্বাচন, ল্যাকটেট থ্রেশহোল্ড ও ক্রসওভার ধারণা'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Molecular Divergence: Endurance vs Resistance Hypertrophy', '৫. আণবিক পার্থক্য: সহনশীলতা বনাম পেশি বৃদ্ধি'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Core Takeaways & High-Yield Summary', '৬. মূল শিক্ষা ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Creatine Kinase (CK)', 'ক্রিয়েটিন কাইনেজ (CK)'),
        definition: l(
          'Enzyme catalyzing the reversible transphosphorylation between phosphocreatine (PCr) and ADP to form creatine and ATP; acts as a temporal and spatial bioenergetic buffer sustaining maximal muscle contraction for 8–10 seconds.',
          'ফসফোকেন ও এডিপি-র মধ্যে ফসফেট আদান-প্রদানকারী এনজাইম; যা তাৎক্ষণিকভাবে এটিপি তৈরি করে চরম পরিশ্রমে ৮-১০ সেকেন্ড তীব্র শক্তি বজায় রাখে।'
        ),
      },
      {
        term: l('AMP-Activated Protein Kinase (AMPK)', 'এএমপি-অ্যাক্টিভেটেড প্রোটিন কাইনেজ (AMPK)'),
        definition: l(
          'Master metabolic energy sensor; activated by elevated AMP:ATP and ADP:ATP ratios via allosteric binding and LKB1 phosphorylation on Thr172; promotes catabolic ATP-generating pathways (GLUT4 translocation, fatty acid oxidation) while shutting down anabolic ATP-consuming processes.',
          'কোষের প্রধান শক্তি সংবেদক এনজাইম; এটিপি কমে গেলে সক্রিয় হয়ে ইনসুলিন ছাড়াই কোষে গ্লুকোজ ও চর্বি পোড়ানোর গতি বহুগুণ বাড়িয়ে দেয়।'
        ),
      },
      {
        term: l('Lactate Threshold (LT)', 'ল্যাকটেট থ্রেশহোল্ড (LT)'),
        definition: l(
          'The exercise workload or oxygen consumption rate at which systemic blood lactate concentration begins to rise exponentially above resting baseline (~2.0 mmol/L), reflecting the transition where glycolytic flux outpaces oxidative mitochondrial clearance.',
          'ব্যায়ামের সেই তীব্রতা যেখানে রক্তে ল্যাকটেটের মাত্রা স্বাভাবিকের চেয়ে দ্রুত বাড়তে শুরু করে, যা নির্দেশ করে যে পেশিতে ল্যাকটেট তৈরির গতি তা পোড়ানোর চেয়ে বেশি।'
        ),
      },
      {
        term: l('The Crossover Concept', 'ক্রসওভার ধারণা (The Crossover Concept)'),
        definition: l(
          'Biochemical model describing how increasing exercise intensity shifts reliance from predominantly lipid oxidation (at <50% VO2 max) to predominantly carbohydrate oxidation (>70% VO2 max), driven by glycolytic recruitment and malonyl-CoA/carnitine dynamics.',
          'ব্যায়ামের তীব্রতা বাড়ার সাথে সাথে জ্বালানির পরিবর্তন: হালকা পরিশ্রমে চর্বি বেশি পুড়লেও কঠিন পরিশ্রমে শরীর দ্রুত শর্করা পোড়ানোর দিকে ঝুঁকে পড়ে।'
        ),
      },
      {
        term: l('mTORC1 (Mechanistic Target of Rapamycin Complex 1)', 'mTORC1 কমপ্লেক্স'),
        definition: l(
          'Master anabolic nutrient and mechanical tension sensor; activated by resistance exercise and essential amino acids (leucine) to phosphorylate p70S6K and 4E-BP1, driving myofibrillar protein synthesis and muscle hypertrophy.',
          'পেশি বৃদ্ধির প্রধান আণবিক চালিকাশক্তি; ভারী ব্যায়াম ও খাদ্যের লিউসিনের প্রভাবে সক্রিয় হয়ে নতুন প্রোটিন তৈরি করে পেশিকে শক্তিশালী ও স্ফীত করে তোলে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Biochemical Mechanism of Exercise-Induced GLUT4 Translocation', 'ব্যায়ামে ইনসুলিনহীন GLUT4 পরিবাহক স্থানান্তরের আণবিক কৌশল'),
        steps: [
          l(
            'Step 1: At rest in skeletal muscle, insulin-stimulated glucose uptake requires IRS-1 tyrosine phosphorylation and Akt/PKB activation. In insulin-resistant type 2 diabetes, lipotoxic intermediates (diacylglycerols, ceramides) activate protein kinase C isoforms that serine-phosphorylate IRS-1, blocking this canonical pathway.',
            'ধাপ ১: বিশ্রামের সময় পেশিতে গ্লুকোজ গ্রহণে ইনসুলিন রিসেপ্টর ও Akt এনজাইমের সক্রিয়তা প্রয়োজন। কিন্তু ডায়াবেটিসে পেশিকোষে জমে থাকা চর্বি এই পথটিকে সম্পূর্ণ বন্ধ করে দেয়।'
          ),
          l(
            'Step 2: Muscle contraction bypasses the defective insulin signaling pathway. Sarcoplasmic reticulum Ca2+ release activates CaMKII, while rapid ATP hydrolysis by myosin ATPases sharply increases intracellular AMP and ADP.',
            'ধাপ ২: পেশির সংকোচন ক্ষতিগ্রস্ত ইনসুলিন পথটিকে পুরোপুরি পাশ কাটিয়ে যায়। নির্গত ক্যালসিয়াম CaMKII সক্রিয় করে এবং এটিপি খরচের ফলে কোষে এএমপি ও এডিপির পরিমাণ দ্রুত বেড়ে যায়।'
          ),
          l(
            'Step 3: Free AMP allosterically binds the gamma-subunit of AMPK, promoting phosphorylation of Thr172 by upstream LKB1 to achieve maximal catalytic activity.',
            'ধাপ ৩: মুক্ত এএমপি সরাসরি AMPK এনজাইমের সাথে যুক্ত হয়ে LKB1 দ্বারা এর থ্রিওনিন-১৭২ অবশিষ্টাংশে ফসফরাইলেশন ঘটায় এবং এনজাইমটিকে পূর্ণ সক্রিয় করে তোলে।'
          ),
          l(
            'Step 4: Active AMPK directly phosphorylates TBC1D1 and AS160 (Rab-GAPs), inhibiting their GTPase-activating activity and locking downstream Rab proteins in their active GTP-bound state.',
            'ধাপ ৪: সক্রিয় AMPK এনজাইম TBC1D1 ও AS160 প্রোটিনকে ফসফরাইলেশন করে র্যাব (Rab) প্রোটিনকে সক্রিয় GTP-যুক্ত অবস্থায় আটকে রাখে।'
          ),
          l(
            'Step 5: Active Rab-GTP coordinates the exocytic docking and fusion of intracellular storage vesicles containing GLUT4 into the transverse tubules and sarcolemma.',
            'ধাপ ৫: সক্রিয় র্যাব প্রোটিন কোষের ভেতরে থাকা GLUT4 বাহকের থলেগুলোকে ঠেলে কোষঝিল্লির সাথে যুক্ত করে দেয়, ফলে রক্ত থেকে গ্লুকোজ সরাসরি কোষে প্রবেশ করে।'
          ),
        ],
        conclusion: l(
          'Contraction-mediated GLUT4 translocation increases glucose uptake up to 50-fold completely independent of insulin, providing an immediate, highly effective therapeutic intervention for glycemic control in type 2 diabetes.',
          'ব্যায়াম-চালিত GLUT4 স্থানান্তর কোনো ইনসুলিন ছাড়াই গ্লুকোজ গ্রহণের গতি ৫০ গুণ বাড়িয়ে দেয়, যা ডায়াবেটিস নিয়ন্ত্রণে সবচেয়ে শক্তিশালী ও নিরাপদ চিকিৎসা হিসেবে কাজ করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does ingestion of carbohydrate during high-intensity exercise not inhibit muscle fatty acid oxidation in the same way as carbohydrate ingestion at rest?',
          'বিশ্রামের তুলনায় তীব্র ব্যায়ামের সময় শর্করা পান করলে তা চর্বি জারণকে কেন পুরোপুরি বন্ধ করতে পারে না?'
        ),
        answer: l(
          'At rest, carbohydrate ingestion spikes insulin, which stimulates acetyl-CoA carboxylase (ACC) to produce malonyl-CoA, potently inhibiting carnitine palmitoyltransferase-I (CPT-I) and blocking fatty acid entry into mitochondria. During vigorous exercise, the intense activation of AMPK phosphorylates and potently inhibits ACC2 while simultaneously activating malonyl-CoA decarboxylase (MCD), keeping malonyl-CoA levels very low despite glucose ingestion.',
          'বিশ্রামের সময় শর্করা খেলে ইনসুলিন বেড়ে ম্যালোনিল-কোএ তৈরি করে যা CPT-I এনজাইম বন্ধ করে চর্বি প্রবেশ আটকে দেয়। কিন্তু ব্যায়ামের সময় সক্রিয় AMPK এনজাইম ম্যালোনিল-কোএ তৈরি সম্পূর্ণ বন্ধ রাখে, ফলে কোষে গ্লুকোজ থাকলেও চর্বি জারণ সচল থাকে।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: exercise3DData,
  interactiveDiagram: {
    id: 'diag-metabolism31-exercise-bioenergetics',
    title: l('Interactive Temporal Continuum of Muscle Bioenergetics Across Exercise Duration & Intensity', 'ব্যায়ামের তীব্রতা ও স্থায়িত্ব অনুসারে পেশির জৈবশক্তিবিজ্ঞানের ইন্টারেক্টিভ সময়রেখা'),
    disclaimer: l('Interactive educational diagram illustrating exercise energy systems and temporal transitions.', 'ব্যায়ামের বিভিন্ন শক্তি ব্যবস্থা ও সময়ানুক্রমিক রূপান্তর প্রদর্শনকারী শিক্ষামূলক ডায়াগ্রাম।'),
    description: l(
      'Trace the activation and handoff of the four human energy systems: immediate phosphagens, rapid anaerobic glycolysis, oxidative carbohydrate combustion, and long-duration fatty acid oxidation.',
      'মানবদেহের চারটি প্রধান শক্তি ব্যবস্থার কার্যপদ্ধতি ও রূপান্তর পর্যবেক্ষণ করুন: তাৎক্ষণিক ফসফাজেন, দ্রুত অবাধ গ্লাইকোলাইসিস, বায়বীয় শর্করা জারণ এবং দীর্ঘস্থায়ী চর্বি পোড়ানো।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-atp-pcr-phosphagen',
        label: l('1. Phosphagen System: ATP & Phosphocreatine', '১. ফসফাজেন ব্যবস্থা: এটিপি ও ফসফোকেন'),
        description: l('CK transfers phosphate from PCr to ADP in milliseconds; fuels maximal bursts for 8–10 seconds.', 'ক্রিয়েটিন কাইনেজ চোখের পলকে এটিপি তৈরি করে তীব্র স্প্রিন্টে ৮-১০ সেকেন্ড সর্বোচ্চ শক্তি যোগায়।'),
        details: l('Highest power output (maximal rate of ATP synthesis), but highly limited intramuscular capacity.', 'সর্বোচ্চ দ্রুততম শক্তি উৎপাদন ক্ষমতা কিন্তু পেশিতে এর সঞ্চয় অত্যন্ত সীমিত।'),
        sectionId: 'structure',
        color: '#ef4444',
      },
      {
        id: 'node-anaerobic-glycolysis',
        label: l('2. Anaerobic Glycogenolysis & Glycolysis', '২. অবাধ গ্লাইকোজেন ভাঙন ও গ্লাইকোলাইসিস'),
        description: l('Ca2+/calmodulin and AMP activate glycogen phosphorylase; yields 2–3 ATP and lactate.', 'ক্যালসিয়াম ও এএমপি গ্লাইকোজেন ভেঙে দ্রুত এটিপি ও ল্যাকটেট তৈরি করে।'),
        details: l('Dominates high-intensity efforts lasting 15 to 90 seconds (e.g., 400m sprint).', '১৫ থেকে ৯০ সেকেন্ড স্থায়ী তীব্র পরিশ্রমে (যেমন ৪০০ মিটার দৌড়) এটি প্রধান শক্তি যোগায়।'),
        sectionId: 'structure',
        color: '#f59e0b',
      },
      {
        id: 'node-ampk-glut4-activation',
        label: l('3. AMPK Signaling & Insulin-Independent GLUT4', '৩. AMPK সংকেত ও ইনসুলিনহীন GLUT4'),
        description: l('High AMP activates AMPK, phosphorylating AS160/TBC1D1 to translocate GLUT4 to the membrane.', 'উচ্চ এএমপি AMPK-কে সক্রিয় করে যা সরাসরি কোষঝিল্লিতে GLUT4 এনে গ্লুকোজ শোষণ বাড়ায়।'),
        details: l('Operates completely independent of the canonical insulin-IRS-Akt pathway.', 'ইনসুলিন ছাড়াই কাজ করে ডায়াবেটিস নিয়ন্ত্রণে যুগান্তকারী ভূমিকা রাখে।'),
        sectionId: 'mechanism',
        color: '#10b981',
      },
      {
        id: 'node-aerobic-glucose-oxidation',
        label: l('4. Aerobic Carbohydrate Oxidation', '৪. বায়বীয় শর্করা জারণ'),
        description: l('Pyruvate enters mitochondria via MPC; fully oxidized by PDH and TCA cycle yielding ~30–32 ATP.', 'পাইরুভেট মাইটোকন্ড্রিয়ায় ঢুকে ক্রেবস চক্র ও শ্বসনের মাধ্যমে ৩০-৩২টি এটিপি তৈরি করে।'),
        details: l('Dominates submaximal exercise from 2 minutes up to ~90 minutes of continuous exertion.', '২ মিনিট থেকে দেড় ঘণ্টা পর্যন্ত অবিরাম শারীরিক পরিশ্রমে সবচেয়ে কার্যকর শক্তি যোগায়।'),
        sectionId: 'integration',
        color: '#3b82f6',
      },
      {
        id: 'node-fatty-acid-oxidation',
        label: l('5. Adipose Lipolysis & Fatty Acid Beta-Oxidation', '৫. চর্বি ভাঙন ও ফ্যাটি অ্যাসিড বিটা-জারণ'),
        description: l('Epinephrine stimulates HSL/ATGL; CPT-I imports palmitoyl-CoA into mitochondria for ~106 ATP.', 'এপিনেফ্রিন চর্বি ভেঙে মুক্ত করে যা মাইটোকন্ড্রিয়ায় ঢুকে প্রতিটি অণু থেকে ১০৬টি এটিপি দেয়।'),
        details: l('Highest energetic capacity of any human system, sustaining ultra-endurance efforts for hours.', 'মানবদেহের সর্বোচ্চ দীর্ঘস্থায়ী শক্তির আধার যা ঘণ্টার পর ঘণ্টা চলার রসদ যোগায়।'),
        sectionId: 'integration',
        color: '#8b5cf6',
      },
      {
        id: 'node-training-divergence',
        label: l('6. Molecular Adaptation: PGC-1alpha vs mTORC1', '৬. আণবিক অভিযোজন: PGC-1alpha বনাম mTORC1'),
        description: l('Endurance induces PGC-1alpha (mitochondria), while resistance training activates mTORC1 (hypertrophy).', 'সহনশীলতায় মাইটোকন্ড্রিয়া বাড়ে আর ওজন তোলায় পেশির আকার ও শক্তি স্ফীত হয়।'),
        details: l('Represents the classic molecular interference effect between concurrent training modes.', 'ব্যায়ামের ধরন অনুসারে জিন নিয়ন্ত্রণের এক অনন্য বৈচিত্র্যপূর্ণ দৃষ্টান্ত।'),
        sectionId: 'practice',
        color: '#ec4899',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'An integrated biochemical map connecting the phosphagen system, anaerobic glycogenolysis, AMPK-mediated GLUT4 translocation, fatty acid beta-oxidation, lactate clearance, and the divergent transcriptional cascades of PGC-1alpha and mTORC1.',
      'একটি সমন্বিত জৈবরাসাযনিক মানচিত্র যা ফসফাজেন ব্যবস্থা, অবাধ গ্লাইকোলাইসিস, AMPK চালিত GLUT4 স্থানান্তর, চর্বি জারণ, ল্যাকটেট অপসারণ এবং PGC-1alpha ও mTORC1 অভিযোজনকে সংযুক্ত করে।'
    ),
    steps: [
      l('Creatine kinase rephosphorylates ADP from PCr in milliseconds to fuel initial contraction bursts.', 'ক্রিয়েটিন কাইনেজ চোখের পলকে ফসফোকেন থেকে এডিপি-তে ফসফেট দিয়ে প্রাথমিক শক্তি যোগায়।'),
      l('Calcium and AMP allosterically activate glycogen phosphorylase for rapid anaerobic glycolytic ATP.', 'ক্যালসিয়াম ও এএমপি গ্লাইকোজেন ভেঙে অবাধ গ্লাইকোলাইসিসের মাধ্যমে দ্রুত এটিপি উৎপন্ন করে।'),
      l('AMPK phosphorylates AS160 to translocate GLUT4 and phosphorylates ACC to relieve CPT-I inhibition.', 'AMPK এনজাইম GLUT4-কে ঝিল্লিতে আনে এবং CPT-I খুলে দিয়ে চর্বি জারণ সচল করে।'),
      l('Endurance exercise induces PGC-1alpha for mitochondrial biogenesis; resistance exercise stimulates mTORC1 for myofibrillar hypertrophy.', 'সহনশীলতার ব্যায়াম মাইটোকন্ড্রিয়া বাড়ায় এবং ভারী ব্যায়াম mTORC1 সক্রিয় করে পেশি বৃদ্ধি ঘটায়।'),
    ],
  },
  assessment: {
    question: l(
      'During intense, high-load resistance training, what is the primary molecular signaling mechanism that directly stimulates myofibrillar protein synthesis to drive muscle hypertrophy?',
      'ভারী ওজন তোলার ব্যায়ামের সময় কোন সুনির্দিষ্ট আণবিক সংকেত পথটি সরাসরি নতুন প্রোটিন সংশ্লেষণ উদ্দীপ্ত করে পেশির আকার বৃদ্ধি (হাইপারট্রফি) ঘটায়?'
    ),
    options: [
      l(
        'Mechanical tension stimulates focal adhesion mechanosensors to activate Mechanistic Target of Rapamycin Complex 1 (mTORC1), phosphorylating p70S6K and 4E-BP1 to promote mRNA translation and myofibrillar protein synthesis.',
        'পেশির যান্ত্রিক টান কোষীয় সংবেদককে উদ্দীপ্ত করে mTORC1 কমপ্লেক্সকে সক্রিয় করে, যা p70S6K ও 4E-BP1 ফসফরাইলেশনের মাধ্যমে প্রোটিন তৈরি ও পেশি বৃদ্ধি ঘটায়।'
      ),
      l(
        'Direct deacetylation of PGC-1alpha by SIRT1 in the mitochondrial matrix.',
        'মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে SIRT1 দ্বারা PGC-1alpha-এর সরাসরি ডিঅ্যাসিটাইলেশন।'
      ),
      l(
        'Allosteric activation of glycogen synthase kinase-3 beta (GSK3beta) by cytosolic calcium.',
        'সাইটোসোলিক ক্যালসিয়াম দ্বারা গ্লাইকোজেন সিন্থেস কাইনেজ-৩ বিটা-এর সক্রিয়করণ।'
      ),
      l(
        'Irreversible ubiquitin-mediated degradation of the androgen receptor in sarcolemmal nuclei.',
        'সারকোলেমার নিউক্লিয়াসে অ্যান্ড্রোজেন রিসেপ্টরের অপরিবর্তনীয় প্রোটিওসোমাল ধ্বংস।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Resistance exercise imposes high mechanical tension across sarcomeres. Costamere and focal adhesion mechanosensors recruit phosphatidic acid and amino acids to activate mTORC1. Active mTORC1 phosphorylates p70 ribosomal S6 kinase (p70S6K) and eukaryotic initiation factor 4E-binding protein 1 (4E-BP1), unlocking protein translation initiation to drive muscle hypertrophy. In contrast, endurance exercise predominantly activates the AMPK-PGC-1alpha mitochondrial axis.',
      'ওজন তোলার সময় পেশির যান্ত্রিক টান কোষের সেন্সরকে উদ্দীপিত করে mTORC1 কমপ্লেক্স চালু করে। এই mTORC1 এনজাইম p70S6K এবং 4E-BP1-কে ফসফরাইলেশন করে নতুন প্রোটিন তৈরির গতি নাটকীয়ভাবে বাড়িয়ে দেয়, ফলে পেশির তন্তুগুলো মোটা ও শক্তিশালী হয়। পক্ষান্তরে সহনশীলতার ব্যায়ামে প্রধানত AMPK ও PGC-1alpha সক্রিয় হয়ে মাইটোকন্ড্রিয়া বাড়ায়।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Energetics of Motion: A Hundred-Fold Metabolic Surge', 'গতির শক্তিবিজ্ঞান: বিপাকের শতগুণ উল্লম্ফন'),
          paragraphs: [
            l(
              'Skeletal muscle contraction represents one of the most energetically demanding physiological processes in the human body. At rest, an average human muscle consumes modest amounts of ATP to maintain ionic gradients across the sarcolemma and baseline protein turnover. Within milliseconds of initiating an all-out sprint, the rate of ATP hydrolysis by actomyosin cross-bridge ATPases surges by more than one hundred times resting values.',
              'কঙ্কালপেশির সংকোচন মানবদেহের সবচেয়ে বেশি শক্তি-চাহিদাসম্পন্ন শারীরবৃত্তীয় প্রক্রিয়াগুলোর একটি। বিশ্রামের সময় পেশিকোষগুলো ঝিল্লির ভারসাম্য রক্ষা ও প্রোটিন মেরামতের জন্য সামান্য এটিপি ব্যয় করে। কিন্তু একজন মানুষ যখন হঠাৎ তীব্র গতিতে দৌড়াতে শুরু করে, চোখের পলকে পেশির এটিপি ভাঙার গতি স্বাভাবিকের চেয়ে একশত গুণেরও বেশি বৃদ্ধি পায়।'
            ),
            l(
              'Yet despite this staggering surge in consumption, intracellular ATP concentration in healthy muscle never drops by more than twenty to thirty percent, even at point of voluntary exhaustion. This remarkable bioenergetic stability is achieved through a seamlessly integrated network of energy-producing systems that transfer high-energy phosphate bonds to ADP with exquisite temporal and spatial precision.',
              'তবে শক্তি খরচের এই অভাবনীয় উল্লম্ফন সত্ত্বেও সুস্থ পেশিকোষে এটিপির মাত্রা কখনোই বিশ থেকে ত্রিশ শতাংশের বেশি কমে না, এমনকি চরম ক্লান্তির মুহূর্তেও নয়। এই চমৎকার স্থিতিশীলতা অর্জিত হয় একাধিক শক্তি উৎপাদন ব্যবস্থার একটি নিখুঁত সমন্বিত রূপান্তরের মাধ্যমে, যা সময় ও তীব্রতা অনুসারে এডিপি-তে উচ্চ-শক্তিসম্পন্ন ফসফেট যোগান দেয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The First Wave: Phosphagens & Explosive Anaerobic Power', 'প্রথম তরঙ্গ: ফসফাজেন ও তীব্র অবাধ শক্তি'),
          paragraphs: [
            l(
              'The immediate energy buffer of skeletal muscle is the phosphagen system, comprising pre-existing intramuscular ATP and phosphocreatine (PCr). Resting muscle contains approximately 5 mmol of ATP per kilogram of wet tissue, enough to fuel maximal cross-bridge cycling for less than two seconds. Phosphocreatine is stored at roughly four times this concentration (20–25 mmol/kg).',
              'পেশির প্রথম জরুরি শক্তি ভাণ্ডার হলো ফসফাজেন ব্যবস্থা, যা পেশিতে পূর্ব-সঞ্চিত এটিপি এবং ফসফোকেন (PCr) নিয়ে গঠিত। প্রতি কেজি পেশিকলায় প্রায় ৫ মিলিমোল এটিপি জমা থাকে, যা সর্বোচ্চ গতিতে দৌড়ালে দুই সেকেন্ডেও কম সময়ে শেষ হয়ে যায়। তবে ফসফোকেন এর প্রায় চার গুণ বেশি ঘনমাত্রায় (২০–২৫ মিলিমোল/কেজি) সঞ্চিত থাকে।'
            ),
            l(
              'Creatine kinase (CK) catalyzes the reversible transfer of a high-energy phosphate from phosphocreatine to ADP, regenerating ATP at astronomical rates. As PCr stores deplete over eight to ten seconds of maximal exertion, anaerobic muscle glycogenolysis accelerates rapidly, driven by allosteric activation of glycogen phosphorylase by intracellular calcium (released from the sarcoplasmic reticulum) and AMP, producing ATP alongside lactic acid.',
              'ক্রিয়েটিন কাইনেজ (CK) এনজাইম চোখের পলকে ফসফোকেন থেকে এডিপি-তে ফসফেট দিয়ে নতুন এটিপি তৈরি করে। আট থেকে দশ সেকেন্ডের মধ্যে ফসফোকেন কমে গেলে অবাধ গ্লাইকোলাইসিস চালু হয়, যা ক্যালসিয়াম ও এএমপি দ্বারা উদ্দীপ্ত হয়ে গ্লাইকোজেন ভেঙে দ্রুত এটিপি ও ল্যাকটেট উৎপন্ন করে শক্তি সচল রাখে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Aerobic Shift & Glycogen Sparing: Mitochondria Take the Helm', 'বায়বীয় রূপান্তর ও গ্লাইকোজেন সাশ্রয়: মাইটোকন্ড্রিয়ার নেতৃত্ব'),
          paragraphs: [
            l(
              'As exercise continues beyond one to two minutes, the cardiovascular and pulmonary systems dilate capillary beds to ramp up muscular oxygen delivery. Muscle mitochondria accelerate the oxidation of pyruvate and free fatty acids, transitioning the primary ATP-generating machinery from rapid anaerobic glycolysis to high-yield oxidative phosphorylation.',
              'ব্যায়াম এক থেকে দুই মিনিটের বেশি স্থায়ী হলে রক্তনালী প্রসারিত হয়ে পেশিতে অক্সিজেনের সরবরাহ বহুগুণ বাড়িয়ে দেয়। মাইটোকন্ড্রিয়া দ্রুত পাইরুভেট ও ফ্যাটি অ্যাসিড জারণ শুরু করে, যার ফলে প্রাথমিক অবাধ গ্লাইকোলাইসিস থেকে উচ্চ-দক্ষতাসম্পন্ন বায়বীয় অক্সিডেটিভ ফসফোরাইলেশনে শক্তি রূপান্তর ঘটে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Interorgan Integration: Hepatic Cori Cycle and Adipose Lipolysis', 'অঙ্গ-প্রত্যঙ্গের সমন্বয়: যকৃতের কোরি চক্র ও চর্বি ভাঙন'),
          paragraphs: [
            l(
              'Contracting muscle does not operate in isolation; it communicates continuously with adipose tissue and the liver. Lactic acid extruded by fast glycolytic fibers travels via the bloodstream to the liver, where the Cori cycle consumes ATP to convert lactate back into glucose. Simultaneously, catecholamines stimulate adipose lipolysis, flooding the circulation with fatty acids.',
              'সংকোচনশীল পেশি একা কাজ করে না; এটি যকৃৎ ও চর্বিকলার সাথে অবিরাম যোগাযোগ রক্ষা করে। পেশি থেকে নিঃসৃত ল্যাকটেট রক্ত দিয়ে যকৃতে পৌঁছে কোরি চক্রের মাধ্যমে পুনরায় গ্লুকোজে রূপান্তরিত হয়। একই সাথে হরমোনের প্রভাবে চর্বিকলা থেকে ফ্যাটি অ্যাসিড মুক্ত হয়ে রক্তে ছড়িয়ে পড়ে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Fuel Depletion, Central Fatigue, and Carbohydrate Refueling', 'জ্বালানি সংকট, কেন্দ্রীয় অবসাদ ও শর্করা পরিপূরণ'),
          paragraphs: [
            l(
              'During prolonged endurance exertion exceeding ninety minutes, intramuscular glycogen stores become severely depleted. When liver glycogen is exhausted, blood glucose plunges, precipitating profound peripheral muscle weakness and central neurological fatigue. Ingesting exogenous carbohydrates during exercise prevents this hypoglycemic collapse and sustains high workload.',
              'দেড় ঘণ্টার বেশি সময় ধরে একটানা ব্যায়াম করলে পেশির গ্লাইকোজেন সম্পূর্ণ ফুরিয়ে যায়। যকৃতের গ্লাইকোজেন শেষ হয়ে রক্তে চিনি কমে গেলে মারাত্মক অবসাদ ও দুর্বলতা দেখা দেয় যাকে "হিটিং দ্য ওয়াল" বলা হয়। ব্যায়ামের সময় মিষ্টি তরল পান করলে রক্তে গ্লুকোজ বজায় থাকে এবং ক্লান্তি বিলম্বিত হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Foundational Principles of Human Exercise Bioenergetics', 'মানবদেহের ব্যায়াম জৈবশক্তিবিজ্ঞানের মৌলিক সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Muscular bioenergetics functions as a continuous and coordinated continuum rather than isolated steps: phosphagens provide instant maximal power, anaerobic glycolysis bridges high-intensity transitions, and mitochondrial oxidation sustains endurance performance. Regular physical training expands all these metabolic capacities, optimizing human physical resilience.',
              'পেশির শক্তি উৎপাদন ব্যবস্থা কোনো বিচ্ছিন্ন ধাপ নয়, বরং একটি অবিচ্ছিন্ন সমন্বিত প্রক্রিয়া: ফসফাজেন তাৎক্ষণিক তীব্র শক্তি দেয়, অবাধ গ্লাইকোলাইসিস স্বল্পস্থায়ী পরিশ্রমে সহায়তা করে এবং মাইটোকন্ড্রিয়াল শ্বসন দীর্ঘস্থায়ী ক্লান্তিহীন শক্তি যোগায়। নিয়মিত ব্যায়াম এই প্রতিটি ব্যবস্থার কর্মক্ষমতা বহুগুণ বৃদ্ধি করে।'
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
          heading: l('Contractile Kinetics and Cross-Bridge Energetics', 'পেশি সংকোচনের গতিবিদ্যা ও ক্রস-ব্রিজ শক্তিবিজ্ঞান'),
          paragraphs: [
            l(
              'Myosin heavy chain ATPase activity defines the intrinsic shortening velocity and maximal energetic consumption rate of muscle fibers. During cross-bridge cycling, the hydrolysis of one ATP molecule per power stroke allows myosin head detachment from actin filaments, cocking the head domain into high-energy conformation ready for force generation upon calcium-troponin engagement.',
              'মায়োসিন ভারী শিকলের এটিপিয়েজ এনজাইমের কার্যকারিতা পেশিতন্তুর সংকোচনের গতি ও সর্বোচ্চ শক্তি খরচ নির্ধারণ করে। প্রতিটি ক্রস-ব্রিজ চক্রে একটি এটিপি অণু ভেঙে মায়োসিন মাথাকে অ্যাক্টিন থেকে মুক্ত করে পুনরায় নতুন টান তৈরির জন্য প্রস্তুত করে, যা ক্যালসিয়াম-ট্রোপোনিন সংযোগের মাধ্যমে তীব্র বল প্রয়োগ করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Phosphagen Kinase Network and Spatial Energy Buffering', 'ফসফাজেন কাইনেজ নেটওয়ার্ক ও স্থানিক শক্তি বাফারিং'),
          paragraphs: [
            l(
              'Creatine kinase does not function merely as a simple temporal energy reserve; it operates as an organized spatial energy shuttle connecting mitochondrial ATP production sites with myofibrillar consumption sinks. Mitochondrial sarcomeric creatine kinase (sMtCK) synthesizes PCr using newly generated matrix ATP, and PCr diffuses rapidly across cytosolic microdomains to cytosolic CK adjacent to myosin heads.',
              'ক্রিয়েটিন কাইনেজ কেবল একটি সাধারণ শক্তি সঞ্চয়কারী নয়; এটি মাইটোকন্ড্রিয়া থেকে পেশিতন্তুর কার্যকরী স্থানে শক্তি পৌঁছে দেওয়ার এক চমৎকার বাহক হিসেবে কাজ করে। মাইটোকন্ড্রিয়াল ক্রিয়েটিন কাইনেজ নতুন এটিপি ব্যবহার করে ফসফোকেন তৈরি করে, যা দ্রুত সাইটোপ্লাজমে ছড়িয়ে পড়ে মায়োসিনের মাথার কাছে সরাসরি এটিপি পুনরুজ্জীবিত করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('AMPK Activation & Insulin-Independent Glucose Transport', 'AMPK সক্রিয়করণ ও ইনসুলিনহীন গ্লুকোজ পরিবহন'),
          paragraphs: [
            l(
              'When ATP is rapidly consumed, adenylate kinase (myokinase) equilibrates high-energy adenylates (2 ADP <-> ATP + AMP). Because basal intracellular AMP is extremely low (~1 microM), even a minuscule two percent drop in ATP produces a dramatic ten-fold surge in free AMP. This surging AMP binds the CBS domains on the gamma-subunit of AMP-activated protein kinase (AMPK), inducing a conformational shift that enables liver kinase B1 (LKB1) to phosphorylate Thr172 on the catalytic alpha-subunit.',
              'তীব্র পরিশ্রমে এটিপি দ্রুত খরচ হলে মায়োকাইনেজ এনজাইম দুটি এডিপি থেকে একটি এটিপি ও একটি এএমপি তৈরি করে। বিশ্রামে এএমপি-র মাত্রা অত্যন্ত কম থাকায় এটিপি সামান্য কমলেই কোষে এএমপি দশ গুণ বেড়ে যায়। এই অতিরিক্ত এএমপি সরাসরি AMPK এনজাইমের সাথে যুক্ত হয়ে LKB1 দ্বারা এর থ্রিওনিন-১৭২ অবশিষ্টাংশে ফসফরাইলেশন ঘটিয়ে একে পূর্ণ সক্রিয় করে তোলে।'
            ),
            l(
              'Activated AMPK directly phosphorylates TBC1D1 and AS160, Rab-GTPase-activating proteins that hold glucose transporter 4 (GLUT4) sequestered in intracellular vesicles. Phosphorylation relieves this inhibition, allowing Rab GTPases to trigger exocytic trafficking and fusion of GLUT4 vesicles into the transverse tubules and sarcolemma. This exercise-mediated glucose uptake is entirely independent of insulin receptor signaling, explaining why exercise is a formidable therapy for type 2 diabetes.',
              'সক্রিয় AMPK এনজাইম TBC1D1 ও AS160 প্রোটিনকে ফসফরাইলেশন করে GLUT4 বাহকের ওপর থেকে বাধা সরিয়ে দেয়। ফলে GLUT4 বাহকগুলো থলে থেকে বেরিয়ে কোষঝিল্লিতে গিয়ে বসে এবং রক্ত থেকে বিপুল পরিমাণ গ্লুকোজ কোষে টেনে নেয়। এই পুরো প্রক্রিয়াটি ইনসুলিন ছাড়াই ঘটে, যার কারণে শারীরিক ব্যায়াম টাইপ ২ ডায়াবেটিসের সবচেয়ে কার্যকর প্রাকৃতিক প্রতিষেধক।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Fuel Selection: The Crossover Concept & The Lactate Threshold', 'জ্বালানি নির্বাচন: ক্রসওভার ধারণা ও ল্যাকটেট থ্রেশহোল্ড'),
          paragraphs: [
            l(
              'During sustained exercise, the relative contribution of fat versus carbohydrate oxidation is dictated by exercise intensity and duration, conceptualized by George Brooks in the Crossover Concept. At low intensities (<50% of maximal oxygen consumption, VO2 max), fatty acid beta-oxidation provides the vast majority of ATP, fueled by subcutaneous adipose lipolysis and intramuscular triglycerides.',
              'দীর্ঘস্থায়ী পরিশ্রমে শরীর চর্বি নাকি শর্করা পোড়াবে তা ব্যায়ামের তীব্রতার ওপর নির্ভর করে, যা ক্রসওভার ধারণা নামে পরিচিত। হালকা পরিশ্রমে (৫০% VO2 max-এর নিচে) চর্বির বিটা-জারণ বেশিরভাগ শক্তি যোগায়, যা ত্বকের নিচের চর্বিকলা এবং পেশির সঞ্চিত ট্রাইগ্লিসারাইড থেকে আসে।'
            ),
            l(
              'As exercise intensity escalates beyond 65–70% VO2 max, the rate of energy demand outstrips the maximum catalytic capacity of mitochondrial fatty acid transport and beta-oxidation. Glycolytic flux accelerates exponentially, producing pyruvate faster than mitochondria can consume it. This point coincides with the Lactate Threshold (LT), where systemic blood lactate climbs above baseline, signaling predominant reliance on muscle glycogen and blood glucose.',
              'ব্যায়ামের তীব্রতা ৭০% VO2 max অতিক্রম করলে চর্বি পোড়ানোর গতি আর চাহিদার সাথে তাল মেলাতে পারে না। তখন গ্লাইকোলাইসিসের গতি অস্বাভাবিক বেড়ে গিয়ে প্রচুর পাইরুভেট ও ল্যাকটেট তৈরি করে। এই অবস্থাকে ল্যাকটেট থ্রেশহোল্ড বলা হয়, যেখানে শরীর পুরোপুরি পেশির গ্লাইকোজেন ও রক্তের গ্লুকোজ পোড়ানোর দিকে মোড় নেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('The Lactate Shuttle Hypothesis: Oxidation and Gluconeogenesis', 'ল্যাকটেট শাটল তত্ত্ব: জারণ ও নতুন গ্লুকোজ সংশ্লেষণ'),
          paragraphs: [
            l(
              'Historically misunderstood as a dead-end waste product of hypoxia, lactate is now recognized as a premier bioenergetic fuel and signaling molecule (the Lactate Shuttle hypothesis). Lactate exported by Type IIx glycolytic fibers is absorbed via monocarboxylate transporters (MCT1) into adjacent Type I oxidative myofibers and cardiac myocytes, where mitochondrial lactate dehydrogenase (mLDH) oxidizes it back to pyruvate for aerobic ATP synthesis.',
              'একসময় ল্যাকটেটকে অক্সিজেনের অভাবে তৈরি হওয়া বর্জ্য পদার্থ মনে করা হলেও আধুনিক বিজ্ঞানে একে একটি অত্যন্ত মূল্যবান জ্বালানি ও সংকেত অণু হিসেবে গণ্য করা হয় (ল্যাকটেট শাটল তত্ত্ব)। দ্রুতগতির পেশি থেকে বের হওয়া ল্যাকটেট ধীরগতির জারণক্ষম পেশি ও হৃদযন্ত্রের কোষে প্রবেশ করে MCT1 বাহকের মাধ্যমে সরাসরি মাইটোকন্ড্রিয়ায় ঢুকে পুনরায় শক্তি উৎপাদন করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Systems Metabolic Integration Across Exercise Intensities', 'ব্যায়ামের তীব্রতা অনুসারে সামগ্রিক বিপাকীয় সংহতি'),
          paragraphs: [
            l(
              'The metabolic response to exercise integrates the whole body: hormonal regulation by catecholamines and insulin suppression synchronizes muscle glycogenolysis, adipose lipolysis, and hepatic gluconeogenesis. Understanding these pathway switches allows precise optimization of athletic performance, nutritional timing, and exercise prescriptions for chronic metabolic disorders.',
              'ব্যায়ামে পুরো শরীর একটি ঐক্যবদ্ধ ব্যবস্থার মতো কাজ করে: এপিনেফ্রিন বৃদ্ধি এবং ইনসুলিন হ্রাসের মাধ্যমে পেশির গ্লাইকোজেন ভাঙন, চর্বিকলার চর্বি মুক্তি এবং যকৃতের শর্করা উৎপাদন নিখুঁতভাবে সমন্বিত হয়। এই বৈজ্ঞানিক জ্ঞান ক্রীড়াবিদদের সাফল্য বৃদ্ধি এবং ডায়াবেটিস ও হৃদরোগীদের সঠিক ব্যায়ামের ব্যবস্থাপত্র তৈরিতে অপরিহার্য ভূমিকা রাখে।'
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
          heading: l('Interference Effect: AMPK vs mTORC1 Molecular Antagonism', 'ইন্টারফেয়ারেন্স প্রভাব: AMPK ও mTORC1 আণবিক বিরোধিতা'),
          paragraphs: [
            l(
              'Concurrent training—performing high-volume endurance exercise alongside heavy resistance training—often attenuates maximal hypertrophy, a phenomenon known as the molecular interference effect. Mechanistically, intense AMPK activation by endurance bouts phosphorylates tuberous sclerosis complex 2 (TSC2) on Ser1345 and Raptor on Ser792, directly repressing mTORC1 activity and attenuating muscle protein synthesis.',
              'একই সাথে অতিরিক্ত দৌড়াদৌড়ি ও ভারী ওজন তোলার ব্যায়াম করলে পেশি বৃদ্ধি ব্যাহত হতে পারে, যা মলিকুলার ইন্টারফেয়ারেন্স প্রভাব নামে পরিচিত। আণবিকভাবে, সহনশীলতার ব্যায়ামে অতিরিক্ত সক্রিয় হওয়া AMPK এনজাইম সরাসরি TSC2 এবং র্যাপ্টর প্রোটিনকে ফসফরাইলেশন করে mTORC1 কমপ্লেক্সকে বন্ধ করে দেয়, ফলে নতুন প্রোটিন তৈরি ও পেশি স্ফীতি সাময়িকভাবে থমকে যায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Molecular Divergence: Endurance vs Resistance Hypertrophy', 'আণবিক পার্থক্য: সহনশীলতা বনাম পেশি বৃদ্ধি'),
          paragraphs: [
            l(
              'Chronic physical training induces exquisitely divergent phenotypic adaptations governed by distinct molecular signaling cascades. Endurance training (running, cycling) generates repeated cyclic calcium transients and high AMP fluxes, activating CaMK, p38 MAPK, and AMPK. These kinases converge to phosphorylate and induce PGC-1alpha, driving mitochondrial biogenesis, cristae expansion, microvascular capillarization, and oxidative enzyme upregulation.',
              'নিয়মিত প্রশিক্ষণে ব্যায়ামের ধরনের ওপর ভিত্তি করে সম্পূর্ণ ভিন্নধর্মী শারীরিক রূপান্তর ঘটে। সহনশীলতার ব্যায়ামে (যেমন দৌড় বা সাঁতার) ক্যালসিয়াম ও এএমপি বেড়ে CaMK ও AMPK সক্রিয় হয়, যা PGC-1alpha বাড়িয়ে মাইটোকন্ড্রিয়ার সংখ্যা বৃদ্ধি করে এবং পেশিতে নতুন রক্তনালী তৈরি করে ক্লান্তিহীন সহনশীলতা গড়ে তোলে।'
            ),
            l(
              'In stark contrast, high-load resistance exercise (weightlifting) produces intense mechanical strain across the sarcolemma and costameres. Focal adhesion kinase and mechanosensitive phospholipase D generate phosphatidic acid, which synergizes with intracellular leucine sensing (via Sestrin2 and Rag GTPases) to recruit and activate mTORC1. mTORC1 phosphorylates p70S6K and 4E-BP1, accelerating mRNA translation initiation and driving myofibrillar protein synthesis (actin and myosin accretion) to produce muscle hypertrophy.',
              'বিপরীতভাবে, ভারী ওজন তোলার ব্যায়ামে পেশির প্রোটিন তন্তুর ওপর প্রচণ্ড টান পড়ে। এই যান্ত্রিক টান কোষীয় সেন্সরের মাধ্যমে mTORC1 কমপ্লেক্সকে সক্রিয় করে তোলে। সক্রিয় mTORC1 প্রোটিন সংশ্লেষণ বহুগুণ বাড়িয়ে দিয়ে অ্যাক্টিন ও মায়োসিনের নতুন স্তর তৈরি করে, যার ফলে পেশির আকার স্ফীত হয় এবং প্রচণ্ড শারীরিক শক্তি বৃদ্ধি পায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Metabolic Crosstalk & High-Yield Clinical Takeaways', 'বিপাকীয় পারস্পরিক ক্রিয়া ও উচ্চ-গুরুত্বপূর্ণ ক্লিনিক্যাল শিক্ষা'),
          paragraphs: [
            l(
              'Exercise is the single most powerful pleiotropic polypill known to clinical medicine. By mobilizing glucose independent of insulin, elevating mitochondrial density, stimulating lipolysis, and triggering anti-inflammatory cytokine release (myokines like IL-6 and irisin), structured physical training reverses metabolic syndrome, enhances cardiovascular resilience, and blunts age-related sarcopenia.',
              'শারীরিক ব্যায়াম হলো চিকিৎসা বিজ্ঞানের সবচেয়ে শক্তিশালী প্রাকৃতিক ওষুধ। ইনসুলিন ছাড়াই রক্ত থেকে গ্লুকোজ দূর করা, মাইটোকন্ড্রিয়া বৃদ্ধি করা, চর্বি পোড়ানো এবং মায়োকাইন নিঃসরণের মাধ্যমে প্রদাহ কমানো—নিয়মিত ব্যায়াম মেটাবলিক সিন্ড্রোম দূর করে, হৃদযন্ত্রকে সুরক্ষা দেয় এবং বার্ধক্যজনিত পেশি ক্ষয় রোধ করে।'
            ),
          ],
        },
      ],
    },
  },
}
