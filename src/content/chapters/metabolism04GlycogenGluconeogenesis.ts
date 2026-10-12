import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const glycogenGlucoRefs = [
  {
    id: 'lehninger-biochem-8e-ch15',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 15: Principles of Metabolic Regulation: Glucose and Glycogen',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch18',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 18: Metabolism of Glycogen",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'harpers-biochem-32e-ch19',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 19: Gluconeogenesis & the Control of Blood Glucose",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'marks-medbiochem-6e-ch28',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 28: Glycogen Metabolism and Gluconeogenesis",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

export const metabolism04GlycogenGluconeogenesisLesson: LessonTopic = {
  id: 'topic.metabolism.glycogen-gluconeogenesis',
  slug: 'glycogen-gluconeogenesis',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('04 · Glycogen Metabolism & Gluconeogenesis', '০৪ · গ্লাইকোজেন বিপাক ও গ্লুকোনিওজেনেসিস'),
  summary: l(
    'Hepatic vs skeletal muscle glycogen storage and mobilization, reciprocal hormonal phosphorylation cascades, the 4 gluconeogenic bypass enzymes, and the Cori cycle.',
    'যকৃত ও কঙ্কালপেশির গ্লাইকোজেন সঞ্চয় ও ভাঙন, পারস্পরিক হরমোনীয় ফসফরাইলেশন ক্যাসকেড, গ্লুকোনিওজেনেসিসের ৪টি বাইপাস এনজাইম এবং কোরি চক্র।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Contrast the molecular architecture, tissue distribution, and physiological purposes of hepatic glycogen (blood glucose maintenance) versus skeletal muscle glycogen (private fuel for contraction).',
      'যকৃতের গ্লাইকোজেন (রক্তে গ্লুকোজ বজায় রাখা) এবং কঙ্কালপেশির গ্লাইকোজেনের (সংকোচনের ব্যক্তিগত জ্বালানি) আণবিক গঠন, কলাস্থানিক বিস্তার এবং শারীরবৃত্তীয় উদ্দেশ্যের তুলনা করতে পারা।'
    ),
    l(
      'Dissect the reciprocal phosphorylation cascade governing glycogen phosphorylase and glycogen synthase via PKA, phosphorylase kinase, GSK-3, and protein phosphatase-1 (PP1).',
      'পিকেএ, ফসফোরাইলেজ কাইনেজ, জিএসকে-৩ এবং প্রোটিন ফসফাটেজ-১ (পিপিপি১)-এর মাধ্যমে গ্লাইকোজেন ফসফোরাইলেজ ও গ্লাইকোজেন সিন্থেজের পারস্পরিক ফসফরাইলেশন ক্যাসকেড বিশদভাবে বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Map the four thermodynamic bypass enzymes of gluconeogenesis (pyruvate carboxylase, PEPCK, FBPase-1, glucose 6-phosphatase) and differentiate the major inborn glycogen storage diseases (Types I, II, III, V).',
      'গ্লুকোনিওজেনেসিসের ৪টি তাপগতিবিদ্যাগত বাইপাস এনজাইম (পাইরুভেট কার্বক্সিলেজ, পিইপিসিকে, এফবিপিএজ-১, গ্লুকোজ ৬-ফসফাটেজ) চিহ্নিত করতে পারা এবং প্রধান জন্মগত গ্লাইকোজেন সঞ্চয় রোগসমূহের (টাইপ I, II, III, V) পার্থক্য করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.glycolysis-pyruvate'],
  relatedTopicIds: ['topic.glucose.metabolism'],
  references: glycogenGlucoRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch15', 'harpers-biochem-32e-ch18'],
    structure: ['harpers-biochem-32e-ch18', 'marks-medbiochem-6e-ch28'],
    mechanism: ['lehninger-biochem-8e-ch15', 'harpers-biochem-32e-ch19'],
    integration: ['harpers-biochem-32e-ch19', 'marks-medbiochem-6e-ch28'],
    practice: ['lehninger-biochem-8e-ch15', 'marks-medbiochem-6e-ch28'],
    takeaways: ['lehninger-biochem-8e-ch15', 'harpers-biochem-32e-ch18'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Glycogen Architecture & Organ Specialization', '১. গ্লাইকোজেনের গঠন ও অঙ্গভিত্তিক বিশেষায়ন'), sectionId: 'introduction' },
      { id: 'sec-breakdown-synth', label: l('2. Enzymatic Steps of Glycogenolysis & Glycogenesis', '২. গ্লাইকোজেন ভাঙন ও সংশ্লেষণের এনজাইমীয় ধাপ'), sectionId: 'structure' },
      { id: 'sec-reciprocal-reg', label: l('3. Reciprocal Hormonal & Allosteric Phosphorylation', '৩. পারস্পরিক হরমোনীয় ও অ্যালবস্টেরিক নিয়ন্ত্রণ'), sectionId: 'mechanism' },
      { id: 'sec-gluconeogenesis', label: l('4. Gluconeogenesis: The 4 Non-Equilibrium Bypasses', '৪. গ্লুকোনিওজেনেসিস: ৪টি অসম বাইপাস এনজাইম'), sectionId: 'integration' },
      { id: 'sec-gsd-clinical', label: l('5. Glycogen Storage Diseases (GSDs Types I, II, III, V)', '৫. গ্লাইকোজেন সঞ্চয় ব্যাধি (টাইপ I, II, III, V)'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Glycogen Phosphorylase', 'গ্লাইকোজেন ফসফোরাইলেজ'),
        definition: l(
          'The rate-limiting enzyme of glycogenolysis; uses inorganic phosphate (Pi) to cleave alpha(1->4) glycosidic bonds via phosphorolysis, releasing glucose 1-phosphate and requiring a pyridoxal phosphate (PLP) cofactor.',
          'গ্লাইকোজেন ভাঙনের প্রধান হার-নিয়ন্ত্রক এনজাইম; অজৈব ফসফেট ব্যবহার করে ফসফোরোলাইসিস প্রক্রিয়ায় আলফা(১->৪) বন্ধন ভেঙে গ্লুকোজ ১-ফসফেট তৈরি করে এবং এর জন্য পিএলপি কোফ্যাক্টর প্রয়োজন হয়।'
        ),
      },
      {
        term: l('Glucose 6-Phosphatase', 'গ্লুকোজ ৬-ফসফাটেজ'),
        definition: l(
          'An endoplasmic reticulum membrane-bound enzyme expressed in hepatocytes and renal cortex (but absent in skeletal muscle), which removes the phosphate group from G6P to produce free D-glucose for systemic export.',
          'যকৃত এবং বৃক্কের এন্ডোপ্লাজমিক রেটিকুলাম ঝিল্লিতে অবস্থিত এনজাইম (কঙ্কালপেশিতে অনুপস্থিত), যা জি৬পি থেকে ফসফেট অপসারণ করে রক্তে সরবরাহের জন্য মুক্ত ডি-গ্লুকোজ তৈরি করে।'
        ),
      },
      {
        term: l('Pyruvate Carboxylase (PC)', 'পাইরুভেট কার্বক্সিলেজ (পিসি)'),
        definition: l(
          'Mitochondrial matrix biotin-dependent enzyme catalyzing the first bypass step of gluconeogenesis: converts pyruvate, CO2, and ATP into oxaloacetate; obligatorily activated by allosteric acetyl-CoA.',
          'মাইটোকন্ড্রিয়াল ম্যাট্রিক্সের বায়োটিন-নির্ভর এনজাইম যা গ্লুকোনিওজেনেসিসের প্রথম বাইপাস সম্পন্ন করে: এটিপি ও কার্বন ডাই-অক্সাইড ব্যবহার করে পাইরুভেটকে অক্সালোঅ্যাসিটেটে রূপান্তর করে এবং অ্যাসিটাইল-কোএ দ্বারা সক্রিয় হয়।'
        ),
      },
      {
        term: l('Cori Cycle (Glucose-Lactate Inter-Organ Cycle)', 'কোরি চক্র (গ্লুকোজ-ল্যাকটেট আন্তঃ-অঙ্গ চক্র)'),
        definition: l(
          'A metabolic cooperation between peripheral anaerobic tissues (erythrocytes, contracting muscle) producing lactate and the liver, which converts lactate back into glucose via gluconeogenesis at the cost of 6 high-energy phosphates.',
          'প্রান্তীয় অবাত কলা (লোহিত রক্তকণিকা, সক্রিয় পেশি) এবং যকৃতের মধ্যকার বিপাকীয় সহযোগিতা, যেখানে উৎপন্ন ল্যাকটেট যকৃতে গিয়ে ৬টি উচ্চ-শক্তি ফসফেট ব্যয়ে পুনরায় গ্লুকোজে রূপান্তরিত হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating the Energetic Cost of Gluconeogenesis from Lactate', 'ল্যাকটেট থেকে গ্লুকোনিওজেনেসিসের শক্তি ব্যয়ের হিসাব'),
        steps: [
          l(
            'Step 1: Conversion of 2 moles of lactate to 2 moles of pyruvate in the cytosol by lactate dehydrogenase generates 2 moles of cytosolic NADH.',
            'ধাপ ১: সাইটোসোলে ল্যাকটেট ডিহাইড্রোজিনেজ দ্বারা ২ মোল ল্যাকটেট থেকে ২ মোল পাইরুভেট তৈরিতে ২ মোল সাইটোসোলিক এনএডিএইচ উৎপন্ন হয়।'
          ),
          l(
            'Step 2: Pyruvate enters mitochondria where pyruvate carboxylase consumes 2 ATP to synthesize 2 oxaloacetate. In the cytosol, PEPCK consumes 2 GTP to convert oxaloacetate to 2 phosphoenolpyruvate (PEP).',
            'ধাপ ২: পাইরুভেট মাইটোকন্ড্রিয়ায় গিয়ে পাইরুভেট কার্বক্সিলেজ ধাপে ২ এটিপি খরচ করে ২ অক্সালোঅ্যাসিটেট তৈরি করে। সাইটোসোলে পিইপিসিকে ২ জিটিপি খরচ করে ২ ফসফোএনলপাইরুভেট তৈরি করে।'
          ),
          l(
            'Step 3: Conversion of 2 moles of 3-phosphoglycerate to 2 moles of 1,3-bisphosphoglycerate by phosphoglycerate kinase consumes an additional 2 ATP. Net high-energy phosphate investment: 2 ATP (PC) + 2 GTP (PEPCK) + 2 ATP (PGK) = 6 high-energy phosphate equivalents per glucose synthesized.',
            'ধাপ ৩: ফসফোগ্লিসারেট কাইনেজ দ্বারা ৩-ফসফোগ্লিসারেট থেকে ১,৩-বিসফসফোগ্লিসারেট তৈরিতে আরও ২ এটিপি ব্যয় হয়। মোট উচ্চ-শক্তি ফসফেট ব্যয়: ২ এটিপি (পিসি) + ২ জিটিপি (পিইপিসিকে) + ২ এটিপি (পিজিকে) = প্রতি গ্লুকোজে ৬টি উচ্চ-শক্তি ফসফেট।'
          ),
        ],
        conclusion: l(
          'Gluconeogenesis is an energetically expensive biosynthetic investment, consuming 6 high-energy bonds to manufacture one glucose molecule that yields only 2 ATP during anaerobic glycolysis.',
          'গ্লুকোনিওজেনেসিস হলো একটি ব্যয়বহুল সংশ্লেষণ প্রক্রিয়া, যেখানে মাত্র ১টি গ্লুকোজ তৈরিতে ৬টি উচ্চ-শক্তি বন্ধন খরচ হয় যা গ্লাইকোলাইসিসে কেবল ২টি এটিপি প্রদান করে।'
        ),
      },
      {
        title: l('Mechanistic Basis of Severe Lactic Acidosis in Von Gierke Disease (GSD Type I)', 'ভন গিয়ের্কে রোগে (জিএসডি টাইপ I) মারাত্মক ল্যাকটিক অ্যাসিডোসিসের কার্যপদ্ধতি'),
        steps: [
          l(
            'Step 1: Autosomal recessive mutation in the G6PC gene leads to complete deficiency of hepatic glucose 6-phosphatase. Neither glycogenolysis nor gluconeogenesis can dephosphorylate G6P to release free glucose into the systemic bloodstream.',
            'ধাপ ১: জি৬পিসি জিনের মিউটেশনে যকৃতের গ্লুকোজ ৬-ফসফাটেজ এনজাইমের সম্পূর্ণ ঘাটতি ঘটে। ফলে গ্লাইকোজেন ভাঙন বা গ্লুকোনিওজেনেসিস কোনো পথেই জি৬পি থেকে মুক্ত গ্লুকোজ রক্তে আসতে পারে না।'
          ),
          l(
            'Step 2: Severe fasting hypoglycemia triggers massive compensatory secretion of glucagon and epinephrine, stimulating maximal peripheral lipolysis and hepatic glycogen breakdown, which traps massive amounts of G6P inside hepatocytes.',
            'ধাপ ২: মারাত্মক হাইপোগ্লাইসেমিয়ার প্রতিক্রিয়ায় গ্লুকাগন ও এপিনেফ্রিন বৃদ্ধি পেয়ে গ্লাইকোজেন ভাঙন ও ফ্যাট ভাঙন বাড়িয়ে দেয়, যা যকৃতের ভেতরে প্রচুর জি৬পি জমিয়ে তোলে।'
          ),
          l(
            'Step 3: Trapped G6P overflows down the glycolytic cascade into pyruvate. Because mitochondrial oxidation is saturated and gluconeogenic bypass is blocked, excess pyruvate is shunted to lactate, producing severe refractory lactic acidosis, hyperuricemia, and hepatomegaly.',
            'ধাপ ৩: জমে থাকা অতিরিক্ত জি৬পি গ্লাইকোলাইসিসে নেমে পাইরুভেটে পরিণত হয়। মাইটোকন্ড্রিয়াল ধারণক্ষমতা ছাড়িয়ে যাওয়ায় অতিরিক্ত পাইরুভেট ল্যাকটেটে রূপান্তরিত হয়ে মারাত্মক ল্যাকটিক অ্যাসিডোসিস, ইউরিক অ্যাসিড বৃদ্ধি ও লিভার বৃদ্ধির সৃষ্টি করে।'
          ),
        ],
        conclusion: l(
          'The absence of a terminal phosphatase traps phosphorylated metabolites intracellularly, diverting metabolic flux into toxic overflow pathways.',
          'অন্তিম ফসফাটেজের অভাবে ফসফরাইলেটেড মধ্যবর্তী যৌগগুলো কোষের ভেতর আটকা পড়ে বিষাক্ত বিকল্প পথে প্রবাহিত হয়ে বিপাকীয় জটিলতা তৈরি করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why is muscle glycogen entirely incapable of contributing directly to blood glucose maintenance during prolonged fasting?',
          'দীর্ঘস্থায়ী উপবাসের সময় কঙ্কালপেশির গ্লাইকোজেন কেন রক্তে গ্লুকোজ সরবরাহে সরাসরি কোনো ভূমিকা রাখতে পারে না?'
        ),
        answer: l(
          'Skeletal muscle cells lack the enzyme glucose 6-phosphatase. When muscle glycogen phosphorylase breaks down glycogen, the resulting glucose 6-phosphate cannot be dephosphorylated to cross the plasma membrane; it is trapped inside the myocyte and dedicated solely to fueling muscle glycolysis for contractile mechanical work.',
          'কঙ্কালপেশি কোষে গ্লুকোজ ৬-ফসফাটেজ এনজাইমটি থাকে না। ফলে পেশির গ্লাইকোজেন ভেঙে যে গ্লুকোজ ৬-ফসফেট তৈরি হয়, তা থেকে ফসফেট সরিয়ে প্লাজমা ঝিল্লি পার করানো যায় না; এটি পেশিকোষে আবদ্ধ থাকে এবং কেবল পেশি সংকোচনের জন্য গ্লাইকোলাইসিসে ব্যবহৃত হয়।'
        ),
      },
      {
        question: l(
          'How does acetyl-CoA act as a reciprocal master switch between pyruvate oxidation and gluconeogenesis in hepatocytes?',
          'যকৃতে পাইরুভেট জারণ এবং গ্লুকোনিওজেনেসিসের মধ্যে অ্যাসিটাইল-কোএ কীভাবে একটি পারস্পরিক প্রধান নিয়ন্ত্রক সুইচ হিসেবে কাজ করে?'
        ),
        answer: l(
          'Accumulation of acetyl-CoA (derived from fatty acid beta-oxidation during fasting) allosterically inhibits pyruvate dehydrogenase kinase/PDC, preventing pyruvate from being burned in the citric acid cycle. Simultaneously, acetyl-CoA is an obligatory allosteric activator of pyruvate carboxylase, directing pyruvate into oxaloacetate for gluconeogenic glucose production.',
          'উপবাসকালে চর্বি জারণ থেকে প্রচুর অ্যাসিটাইল-কোএ জমলে তা পাইরুভেট ডিহাইড্রোজিনেজকে (পিডিসি) সরাসরি অবদমিত করে পাইরুভেট পুড়ে যাওয়া বন্ধ করে। একই সাথে অ্যাসিটাইল-কোএ পাইরুভেট কার্বক্সিলেজ এনজাইমকে সক্রিয় করে পাইরুভেটকে অক্সালোঅ্যাসিটেট বানিয়ে গ্লুকোনিওজেনেসিসের পথে পাঠিয়ে দেয়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'glycogen-gluconeogenesis-crossroads',
    title: l('Interactive Glycogen Metabolism & Gluconeogenesis Crossroads', 'ইন্টারেক্টিভ গ্লাইকোজেন বিপাক ও গ্লুকোনিওজেনেসিস সন্ধিক্ষণ'),
    description: l(
      'Explore the bidirectional pathways of glycogen synthesis, glycogenolysis, and the four non-equilibrium bypass enzymes connecting lactate and pyruvate to systemic glucose.',
      'গ্লাইকোজেন সংশ্লেষ, ভাঙন এবং ল্যাকটেট ও পাইরুভেট থেকে মুক্ত গ্লুকোজ তৈরির ৪টি বাইপাস এনজাইম প্রদর্শনকারী দ্বিমুখী বিপাকীয় সন্ধিক্ষণ পরীক্ষা করুন।'
    ),
    disclaimer: l(
      'Hepatic regulatory schematic illustrating reciprocal PKA/PP1 cascades and the metabolic bypasses of pyruvate carboxylase, PEPCK, FBPase-1, and G6Pase.',
      'যকৃতের নিয়ন্ত্রণ রূপরেখা যা পারস্পরিক পিকেএ/পিপিপি১ ক্যাসকেড এবং পাইরুভেট কার্বক্সিলেজ, পিইপিসিকে, এফবিপিএজ-১ ও জি৬পিএজ বাইপাস প্রদর্শন করে।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'glycogen-node',
        label: l('Glycogen Polymer Core [alpha-1,4 & alpha-1,6 Branches]', 'গ্লাইকোজেন পলিমার কেন্দ্র [আলফা-১,৪ ও আলফা-১,৬ শাখা]'),
        description: l(
          'Highly branched macromolecule anchored to glycogenin. Phosphorylase cleaves non-reducing ends by phosphorolysis; debranching enzyme resolves branch points.',
          'গ্লাইকোজেনিন প্রোটিনকে ঘিরে গঠিত অত্যন্ত শাখান্বিত পলিমার। ফসফোরাইলেজ প্রান্তীয় আলফা-১,৪ বন্ধন ভাঙে এবং ডিব্রাঞ্চিং এনজাইম আলফা-১,৬ শাখা অপসারিত করে।'
        ),
        details: l(
          'Degradation releases 90% glucose 1-phosphate and 10% free glucose. Glycogen synthase elongates chains using UDP-glucose; branching enzyme introduces alpha(1->6) branches.',
          'ভাঙনে ৯০% গ্লুকোজ ১-ফসফেট এবং ১০% মুক্ত গ্লুকোজ তৈরি হয়। সিন্থেজ এনজাইম ইউডিপি-গ্লুকোজ ব্যবহার করে চেইন বাড়ায় এবং ব্রাঞ্চিং এনজাইম শাখা তৈরি করে।'
        ),
        sectionId: 'structure',
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'bypass1-node',
        label: l('Bypass 1: Pyruvate Carboxylase & PEPCK (Pyruvate -> PEP)', 'বাইপাস ১: পাইরুভেট কার্বক্সিলেজ ও পিইপিসিকে (পাইরুভেট -> পিইপি)'),
        description: l(
          'Circumvents irreversible pyruvate kinase. Pyruvate carboxylase forms oxaloacetate in mitochondria (consumes ATP); PEPCK converts it to PEP in cytosol (consumes GTP).',
          'একমুখী পাইরুভেট কাইনেজকে পাশ কাটায়। মাইটোকন্ড্রিয়ায় পাইরুভেট কার্বক্সিলেজ অক্সালোঅ্যাসিটেট তৈরি করে (এটিপি ব্যয়); সাইটোসোলে পিইপিসিকে তা পিইপি-তে রূপান্তর করে (জিটিপি ব্যয়)।'
        ),
        details: l(
          'Pyruvate carboxylase requires biotin and acetyl-CoA activator. Oxaloacetate is transported via malate or aspartate shuttles across the inner mitochondrial membrane.',
          'পাইরুভেট কার্বক্সিলেজে বায়োটিন এবং অ্যাসিটাইল-কোএ প্রয়োজন হয়। অক্সালোঅ্যাসিটেট ম্যালট শাটলের মাধ্যমে অন্তঃমাইটোকন্ড্রিয়াল ঝিল্লি অতিক্রম করে।'
        ),
        sectionId: 'integration',
        color: '#10b981',
        svgCoords: { x: 25, y: 95, width: 310, height: 48 },
      },
      {
        id: 'bypass2-node',
        label: l('Bypass 2: Fructose 1,6-Bisphosphatase-1 (F1,6BP -> F6P)', 'বাইপাস ২: ফ্রুক্টোজ ১,৬-বিসফসফাটেজ-১ (এফ১,৬বিপি -> এফ৬পি)'),
        description: l(
          'Circumvents irreversible PFK-1. Hydrolytically removes the 1-phosphate group from fructose 1,6-bisphosphate without generating ATP.',
          'একমুখী পিএফকে-১ এনজাইমকে পাশ কাটায়। এটিপি তৈরি ছাড়াই পানির সাহায্যে ফ্রুক্টোজ ১,৬-বিসফসফেট থেকে ১-নম্বর ফসফেট গ্রুপটি অপসারিত করে।'
        ),
        details: l(
          'Key rate-limiting gate of gluconeogenesis. Strongly inhibited by fructose 2,6-bisphosphate and AMP; activated by citrate. Reciprocally coordinated with PFK-1.',
          'গ্লুকোনিওজেনেসিসের প্রধান হার-নিয়ন্ত্রক ফটক। ফ্রুক্টোজ ২,৬-বিসফসফেট এবং এএমপি দ্বারা তীব্রভাবে অবদমিত হয়; সাইট্রেট দ্বারা সক্রিয় হয়।'
        ),
        sectionId: 'integration',
        color: '#06b6d4',
        svgCoords: { x: 25, y: 155, width: 310, height: 48 },
      },
      {
        id: 'bypass3-node',
        label: l('Bypass 3: Glucose 6-Phosphatase (G6P -> Free Glucose)', 'বাইপাস ৩: গ্লুকোজ ৬-ফসফাটেজ (জি৬পি -> মুক্ত গ্লুকোজ)'),
        description: l(
          'Circumvents irreversible hexokinase. ER luminal phosphatase in liver and kidney that cleaves G6P, releasing free glucose into blood via GLUT2.',
          'একমুখী হেক্সোকাইনেজকে পাশ কাটায়। যকৃত ও বৃক্কের ইআর ঝিল্লিতে অবস্থিত এনজাইম যা জি৬পি ভেঙে মুক্ত গ্লুকোজ তৈরি করে রক্তপ্রবাহে ছেড়ে দেয়।'
        ),
        details: l(
          'Absent in skeletal muscle and adipose tissue. Deficiency causes Type I Glycogen Storage Disease (Von Gierke disease) with profound fasting hypoglycemia.',
          'কঙ্কালপেশি ও চর্বিকলায় অনুপস্থিত থাকে। এর ঘাটতিতে টাইপ I গ্লাইকোজেন সঞ্চয় রোগ (ভন গিয়ের্কে) দেখা দেয় যার প্রধান লক্ষণ মারাত্মক হাইপোগ্লাইসেমিয়া।'
        ),
        sectionId: 'integration',
        color: '#6366f1',
        svgCoords: { x: 25, y: 215, width: 310, height: 48 },
      },
      {
        id: 'reciprocal-control-node',
        label: l('Reciprocal Hormonal Switch: Glucagon vs Insulin Cascades', 'পারস্পরিক হরমোনীয় সুইচ: গ্লুকাগন বনাম ইনসুলিন ক্যাসকেড'),
        description: l(
          'Glucagon/Epinephrine phosphorylate enzymes via PKA (activating breakdown, inhibiting synthesis). Insulin dephosphorylates enzymes via PP1 (activating synthesis, turning off breakdown).',
          'গ্লুকাগন ও এপিনেফ্রিন পিকেএ দ্বারা এনজাইমকে ফসফরাইলেটেড করে ভাঙন বাড়ায় ও সংশ্লেষ কমায়। ইনসুলিন পিপিপি১ দ্বারা ডিফসফরাইলেটেড করে সংশ্লেষ বাড়ায় ও ভাঙন বন্ধ করে।'
        ),
        details: l(
          'Phosphorylation activates Glycogen Phosphorylase and inactivate Glycogen Synthase. Dephosphorylation activates Glycogen Synthase and inactivates Phosphorylase.',
          'ফসফরাইলেশনে গ্লাইকোজেন ফসফোরাইলেজ সক্রিয় ও সিন্থেজ নিষ্ক্রিয় হয়। ডিফসফরাইলেশনে গ্লাইকোজেন সিন্থেজ সক্রিয় ও ফসফোরাইলেজ নিষ্ক্রিয় হয়।'
        ),
        sectionId: 'mechanism',
        color: '#ec4899',
        svgCoords: { x: 25, y: 275, width: 310, height: 48 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Introduction: Glucose Buffering and the Need for Storage', 'ভূমিকা: গ্লুকোজ বাফারিং এবং সঞ্চয়ের প্রয়োজনীয়তা'),
          paragraphs: [
            l(
              'The human brain and central nervous system require an unwavering supply of approximately 120 grams of glucose per day to maintain electrical neurotransmission and cognitive consciousness. Because dietary carbohydrate intake occurs intermittently during discrete meals, the body must store surplus glucose during the fed state and mobilize it rapidly during fasting to prevent life-threatening hypoglycemia.',
              'মানব মস্তিষ্ক এবং কেন্দ্রীয় স্নায়ুতন্ত্রের স্বাভাবিক ক্রিয়াকলাপ বজায় রাখতে প্রতিদিন প্রায় ১২০ গ্রাম গ্লুকোজের অবিরাম সরবরাহ প্রয়োজন। যেহেতু আহার একটি নির্দিষ্ট সময়ের ব্যবধানে ঘটে, তাই উপবাসকালীন মারাত্মক হাইপোগ্লাইসেমিয়া প্রতিরোধে দেহকে খাদ্য গ্রহণের সময় অতিরিক্ত গ্লুকোজ সঞ্চয় করে রাখতে হয় এবং প্রয়োজনে তা দ্রুত রক্তে ছেড়ে দিতে হয়।'
            ),
            l(
              'Glucose is stored in the form of glycogen, a massive, branched polymer located in the cytoplasm of liver and muscle cells. Storing glucose as a polymeric macromolecule resolves a severe thermodynamic challenge: 55,000 free glucose molecules would exert catastrophic intracellular osmotic pressure, drawing water into the cell and rupturing the plasma membrane, whereas a single glycogen particle exerts negligible osmotic pull.',
              'গ্লুকোজ যকৃত এবং পেশিকোষের সাইটোপ্লাজমে গ্লাইকোজেন নামক একটি বিশালাকার শাখান্বিত পলিমার হিসেবে সঞ্চিত থাকে। পলিমার হিসেবে গ্লুকোজ সঞ্চয় একটি বড় সমস্যার সমাধান করে: ৫৫,০০০টি মুক্ত গ্লুকোজ অণু কোষে মারাত্মক অসমোটিক চাপ তৈরি করে পানি টেনে এনে কোষ ফাটিয়ে ফেলত, অথচ একটিমাত্র গ্লাইকোজেন কণা প্রায় কোনো অসমোটিক চাপ তৈরি করে না।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Glycogen Architecture and Tissue Specialization', 'গ্লাইকোজেনের গঠন ও অঙ্গভিত্তিক বিশেষায়ন'),
          paragraphs: [
            l(
              'Glycogen consists of glucosyl units linked linearly by alpha(1->4) glycosidic bonds, with alpha(1->6) branch points introduced every 8 to 12 residues. Branching creates a spherical, tree-like structure with hundreds of exposed non-reducing ends. This dense branching architecture dramatically accelerates the rates of synthesis and degradation, allowing enzymes to release or attach multiple glucose units simultaneously.',
              'গ্লাইকোজেন অণুতে গ্লুকোজগুলো রৈখিকভাবে আলফা(১->৪) বন্ধন দ্বারা যুক্ত থাকে এবং প্রতি ৮ থেকে ১২টি অণু পরপর আলফা(১->৬) শাখা তৈরি হয়। এই শাখাবিন্যাস গাছ-সদৃশ গোলকাকার কাঠামো তৈরি করে যার বাইরে শত শত প্রান্ত উন্মুক্ত থাকে। এই ঘন শাখা কাঠামোর কারণে এনজাইমগুলো একসাথে একাধিক প্রান্ত থেকে অতি দ্রুত গ্লুকোজ ভাঙতে বা যুক্ত করতে পারে।'
            ),
            l(
              'Liver glycogen serves as a systemic glucose buffer for the entire body, depleting over 12 to 24 hours of fasting to keep blood glucose above 4.0 mM. In stark contrast, skeletal muscle glycogen serves as a private, selfish energy reservoir. Muscle myocytes lack the enzyme glucose 6-phosphatase; consequently, muscle glycogen cannot enter the bloodstream and is dedicated entirely to generating ATP for muscular contraction.',
              'যকৃতের গ্লাইকোজেন পুরো দেহের জন্য রক্তে গ্লুকোজের বাফার হিসেবে কাজ করে এবং ১২ থেকে ২৪ ঘণ্টার উপবাসে রক্তে গ্লুকোজ স্বাভাবিক রাখে। পক্ষান্তরে কঙ্কালপেশির গ্লাইকোজেন সম্পূর্ণভাবে পেশির নিজস্ব শক্তি ভাণ্ডার হিসেবে ব্যবহৃত হয়। পেশিকোষে গ্লুকোজ ৬-ফসফাটেজ এনজাইম না থাকায় এটি রক্তে যেতে পারে না এবং কেবল পেশি সংকোচনের এটিপি তৈরিতে পুড়ে যায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Reciprocal Regulation: Fasting vs Fed Hormone Cascades', 'পারস্পরিক নিয়ন্ত্রণ: উপবাস বনাম আহারকালীন হরমোন সংকেত'),
          paragraphs: [
            l(
              'Glycogen synthesis and breakdown are reciprocally regulated so that both pathways do not operate at the same time in a wasteful futile cycle. During fasting or stress, the pancreatic hormone glucagon and adrenal epinephrine bind cell-surface G-protein coupled receptors, activating protein kinase A (PKA). PKA triggers a phosphorylation wave that turns ON glycogen phosphorylase (breakdown) and turns OFF glycogen synthase (synthesis).',
              'গ্লাইকোজেন সংশ্লেষণ এবং ভাঙন এমনভাবে পারস্পরিক নিয়ন্ত্রিত থাকে যাতে উভয় পথ একসাথে চলে শক্তির অপচয় না ঘটায়। উপবাসকালে গ্লুকাগন এবং মানসিক চাপে এপিনেফ্রিন হরমোন রিসেপ্টরে যুক্ত হয়ে প্রোটিন কাইনেজ এ (পিকেএ) সক্রিয় করে। পিকেএ ফসফরাইলেশনের মাধ্যমে গ্লাইকোজেন ফসফোরাইলেজকে সক্রিয় (ভাঙন চালু) এবং গ্লাইকোজেন সিন্থেজকে নিষ্ক্রিয় (সংশ্লেষ বন্ধ) করে দেয়।'
            ),
            l(
              'After a carbohydrate meal, elevated blood glucose stimulates the pancreatic beta-cells to secrete insulin. Insulin initiates a signaling cascade through receptor tyrosine kinase and Akt that activates protein phosphatase-1 (PP1). PP1 removes phosphate groups from both enzymes, turning OFF glycogen phosphorylase and turning ON glycogen synthase, rapidly storing incoming dietary glucose as fresh glycogen.',
              'খাবার গ্রহণের পর রক্তে গ্লুকোজ বাড়লে অগ্ন্যাশয় ইনসুলিন হরমোন ক্ষরণ করে। ইনসুলিন সংকেত প্রোটিন ফসফাটেজ-১ (পিপিপি১) এনজাইমকে সক্রিয় করে। পিপিপি১ উভয় এনজাইম থেকে ফসফেট গ্রুপ অপসারণ করে গ্লাইকোজেন ফসফোরাইলেজকে বন্ধ (ভাঙন স্থগিত) এবং গ্লাইকোজেন সিন্থেজকে সক্রিয় (সঞ্চয় চালু) করে দ্রুত রক্ত থেকে গ্লুকোজ সরিয়ে সঞ্চয় নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Gluconeogenesis: Synthesizing Glucose During Prolonged Fasting', 'গ্লুকোনিওজেনেসিস: দীর্ঘস্থায়ী উপবাসকালে নতুন গ্লুকোজ সংশ্লেষণ'),
          paragraphs: [
            l(
              'When fasting extends beyond 18 to 24 hours, liver glycogen reserves become exhausted, and the body must manufacture new glucose from non-carbohydrate carbon precursors through gluconeogenesis. Occurring predominantly in hepatocytes and the renal cortex, gluconeogenesis utilizes lactate produced by red blood cells, glycerol released from adipose tissue lipolysis, and glucogenic amino acids (primarily alanine) derived from muscle proteolysis.',
              'উপবাসকাল ১৮ থেকে ২৪ ঘণ্টা অতিক্রম করলে যকৃতের গ্লাইকোজেন ফুরিয়ে যায় এবং দেহকে গ্লুকোনিওজেনেসিস প্রক্রিয়ায় অশর্করা উৎস থেকে নতুন গ্লুকোজ তৈরি করতে হয়। প্রধানত যকৃত এবং বৃক্কে সংঘটিত এই প্রক্রিয়ায় লোহিত রক্তকণিকার ল্যাকটেট, চর্বি ভাঙন থেকে প্রাপ্ত গ্লিসারল এবং পেশির প্রোটিন ভাঙন থেকে প্রাপ্ত অ্যামিনো অ্যাসিড (প্রধানত অ্যালানিন) ব্যবহৃত হয়।'
            ),
            l(
              'Gluconeogenesis is not simply the reversal of glycolysis, because three glycolytic reactions (hexokinase, PFK-1, and pyruvate kinase) release so much free energy that they are thermodynamically irreversible. Gluconeogenesis utilizes four specialized bypass enzymes—pyruvate carboxylase, PEPCK, fructose 1,6-bisphosphatase-1, and glucose 6-phosphatase—to circumvent these barriers at the cost of six high-energy phosphates per glucose molecule.',
              'গ্লুকোনিওজেনেসিস কেবল গ্লাইকোলাইসিসের বিপরীত পথ নয়, কারণ গ্লাইকোলাইসিসের তিনটি বিক্রিয়া এত বেশি শক্তিমুক্তকারী যে সেগুলো একমুখী। গ্লুকোনিওজেনেসিস চারটি বিশেষ বাইপাস এনজাইম—পাইরুভেট কার্বক্সিলেজ, পিইপিসিকে, ফ্রুক্টোজ ১,৬-বিসফসফাটেজ-১ এবং গ্লুকোজ ৬-ফসফাটেজ—ব্যবহার করে এই বাধাগুলো অতিক্রম করে এবং এতে প্রতি গ্লুকোজে ৬টি উচ্চ-শক্তি ফসফেট খরচ হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Reasoning: McArdle Disease & Exercise Cramps', 'মৌলিক যুক্তি: ম্যাকআর্ডল রোগ ও ব্যায়ামকালীন পেশির টান'),
          paragraphs: [
            l(
              'McArdle disease (Type V Glycogen Storage Disease) results from an inherited deficiency of muscle glycogen phosphorylase (PYGM gene). Patients appear completely healthy at rest, but develop excruciating muscle pain, painful contractures, and dark burgundy urine (myoglobinuria) within minutes of intense strenuous anaerobic exercise because their myocytes cannot mobilize muscle glycogen to generate ATP during sprint workloads.',
              'ম্যাকআর্ডল রোগ (টাইপ V গ্লাইকোজেন সঞ্চয় রোগ) পেশির গ্লাইকোজেন ফসফোরাইলেজ এনজাইমের জন্মগত ঘাটতির কারণে ঘটে। রোগীরা বিশ্রামে পুরোপুরি সুস্থ থাকলেও ভারী অ্যানেরোবিক ব্যায়াম শুরু করার কয়েক মিনিটের মধ্যে তীব্র পেশির টান ও লালচে প্রস্রাব (মায়োগ্লোবিনুরিয়া) দেখা দেয়, কারণ তাদের পেশি গ্লাইকোজেন ভেঙে দ্রুত এটিপি তৈরি করতে পারে না।'
            ),
          ],
          bullets: [
            l('Ischemic forearm test shows no rise in blood lactate following exercise, confirming blocked muscle glycogenolysis.', 'হাতের পেশির ব্যায়াম পরীক্ষায় রক্তের ল্যাকটেট বৃদ্ধি পায় না, যা পেশির গ্লাইকোজেন ভাঙন বন্ধ থাকা নিশ্চিত করে।'),
            l('Gentle aerobic exercise after a brief rest can induce a "second-wind" phenomenon as hepatic glucose and circulating fatty acids reach the muscle.', 'সামান্য বিশ্রামের পর রক্তের গ্লুকোজ ও ফ্যাটি অ্যাসিড পেশিতে পৌঁছালে রোগীরা আবার হাঁটাচলা করতে পারে, যাকে "সেকেন্ড-উইন্ড" বলা হয়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Summary', 'মূল শিক্ষা ও সংক্ষিপ্ত সারাংশ'),
          paragraphs: [
            l(
              'Liver glycogen maintains systemic blood glucose during fasting, while muscle glycogen fuels contraction. Phosphorylase and synthase are reciprocally controlled by hormonal phosphorylation (glucagon/epinephrine activate degradation; insulin activates synthesis). When glycogen is depleted, gluconeogenesis synthesizes new glucose via four thermodynamic bypass enzymes, consuming 6 ATP/GTP equivalents per glucose produced.',
              'যকৃতের গ্লাইকোজেন উপবাসে রক্তে গ্লুকোজ স্বাভাবিক রাখে আর পেশির গ্লাইকোজেন সংকোচনে শক্তি দেয়। ফসফোরাইলেজ ও সিন্থেজ হরমোন দ্বারা পারস্পরিক নিয়ন্ত্রিত হয় (গ্লুকাগন ভাঙন চালু করে, ইনসুলিন সংশ্লেষ ঘটায়)। গ্লাইকোজেন শেষ হলে গ্লুকোনিওজেনেসিস ৪টি বাইপাস এনজাইম এবং ৬টি এটিপি/জিটিপি ব্যয়ে নতুন গ্লুকোজ তৈরি করে মস্তিষ্ককে সচল রাখে।'
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
          heading: l('Enzymatic Mechanisms of Glycogenolysis & Glycogenesis', 'গ্লাইকোজেন ভাঙন ও সংশ্লেষণের এনজাইমীয় কার্যপদ্ধতি'),
          paragraphs: [
            l(
              'Glycogen phosphorylase (EC 2.4.1.1) cleaves alpha(1->4) glycosidic linkages by phosphorolysis rather than hydrolysis: (Glycogen)n + Pi <-> (Glycogen)n-1 + Glucose 1-Phosphate. Phosphorolysis is thermodynamically advantageous because the released product is already phosphorylated, saving one molecule of ATP that would otherwise be required by hexokinase. Phosphorylase requires pyridoxal 5-phosphate (PLP) as an obligatory prosthetic group, where the phosphate group of PLP acts as a general acid-base catalyst.',
              'গ্লাইকোজেন ফসফোরাইলেজ আর্দ্রবিশ্লেষণের বদলে ফসফোরোলাইসিস প্রক্রিয়ায় বন্ধন ভাঙে: গ্লাইকোজেন + পিআই <-> গ্লাইকোজেন(n-১) + গ্লুকোজ ১-ফসফেট। এই প্রক্রিয়াটি অত্যন্ত লাভজনক কারণ উৎপাদটি আগেই ফসফরাইলেটেড থাকে, যা হেক্সোকাইনেজের এক অণু এটিপি খরচ বাঁচিয়ে দেয়। এই এনজাইমের অনুঘটনে পাইরিডক্সাল ফসফেট (পিএলপি) প্রোস্থেটিক গ্রুপ হিসেবে সাধারণ অ্যাসিড-ক্ষারক হিসেবে কাজ করে।'
            ),
            l(
              'Phosphorylase stops cleaving four residues away from an alpha(1->6) branch point, leaving a limit dextrin. The bifunctional debranching enzyme (EC 2.4.1.25 / EC 3.2.1.33) resolves this roadblock: its 4-alpha-glucanotransferase domain shifts a maltotriosyl unit from the branch to a nearby non-reducing end, while its amylo-1,6-glucosidase domain hydrolytically releases the single remaining glucose residue as free unphosphorylated D-glucose.',
              'শাখাবিন্দুর চার অবশিষ্ট আগে ফসফোরাইলেজ থেমে গেলে লিমিট ডেক্সট্রিন তৈরি হয়। দ্বি-কার্যকরী ডিব্রাঞ্চিং এনজাইম এই বাধা দূর করে: এর ৪-আলফা-গ্লুকানোট্রান্সফারেজ অংশ তিনটি গ্লুকোজের অংশকে কেটে অন্য প্রান্তে স্থানান্তর করে, আর অ্যামাইলো-১,৬-গ্লুকোসিডেজ অংশটি অবশিষ্ট একক শাখাযুক্ত গ্লুকোজটিকে মুক্ত ডি-গ্লুকোজ হিসেবে আর্দ্রবিশ্লেষিত করে বের করে আনে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Glycogenesis & The Role of UDP-Glucose and Branching Enzyme', 'গ্লাইকোজেনেসিস এবং ইউডিপি-গ্লুকোজ ও ব্রাঞ্চিং এনজাইমের ভূমিকা'),
          paragraphs: [
            l(
              'De novo glycogenesis begins with the synthesis of uridine diphosphate glucose (UDP-glucose) by UDP-glucose pyrophosphorylase: Glucose 1-phosphate + UTP <-> UDP-glucose + PPi. This reaction is pulled irreversibly forward in vivo by the rapid hydrolysis of inorganic pyrophosphate (PPi + H2O -> 2 Pi, delta-G-prime-zero = -19.2 kJ/mol) by inorganic pyrophosphatase, rendering UDP-glucose an activated glucosyl donor of high thermodynamic potential.',
              'গ্লাইকোজেন সংশ্লেষণ ইউডিপি-গ্লুকোজ পাইরোফসফোরাইলেজ দ্বারা ইউডিপি-গ্লুকোজ তৈরির মাধ্যমে শুরু হয়: গ্লুকোজ ১-ফসফেট + ইউটিপি <-> ইউডিপি-গ্লুকোজ + পিপিআই। অজৈব পাইরোফসফাটেজ দ্বারা পাইরোফসফেট তৎক্ষণাৎ দুই অণু ফসফেটে ভেঙে যাওয়ায় এই বিক্রিয়াটি একমুখীভাবে সামনের দিকে পরিচালিত হয় এবং ইউডিপি-গ্লুকোজকে উচ্চ রাসায়নিক বিভবের সক্রিয় গ্লুকোজ দাতায় পরিণত করে।'
            ),
            l(
              'Glycogenin primes synthesis by autoglucosylating its Tyr194 residue using UDP-glucose and elongating an eight-residue primer chain. Glycogen synthase (EC 2.4.1.11) then takes over, transferring glucosyl units to C4 hydroxyl groups. Branching enzyme (amylo-1,4->1,6-transglycosylase) cleaves a seven-residue terminal segment from an eleven-residue chain and transfers it to a C6 hydroxyl group at least four residues away from an existing branch, creating an alpha(1->6) branch point.',
              'গ্লাইকোজেনিন প্রোটিন তার টাইরোসিন-১৯৪ অ্যামিনো অ্যাসিডে আটটি গ্লুকোজের প্রাইমার তৈরি করে সংশ্লেষণ শুরু করে। এরপর গ্লাইকোজেন সিন্থেজ চেইনের প্রসারণ ঘটায়। ব্রাঞ্চিং এনজাইম অন্তত ১১টি গ্লুকোজ দীর্ঘ চেইনের শেষ ৭টি গ্লুকোজ কেটে নিয়ে ৪ ঘর দূরে ৬-নম্বর কার্বনে যুক্ত করে নতুন আলফা(১->৬) শাখা সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Kinase Cascades & Covalent vs Allosteric Phosphorylase Control', 'কাইনেজ ক্যাসকেড এবং ফসফোরাইলেজের সমযোজী বনাম অ্যালবস্টেরিক নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Glycogen phosphorylase exists in two interconvertible conformational forms: phosphorylase b (normally inactive, dephosphorylated, T-state) and phosphorylase a (active, phosphorylated on Ser14, R-state). Phosphorylase kinase, an enormous heterotetramer ((alpha-beta-gamma-delta)4), is activated through two independent inputs: phosphorylation of its alpha and beta subunits by PKA, and binding of four calcium ions to its delta subunit (which is intrinsic calmodulin).',
              'গ্লাইকোজেন ফসফোরাইলেজ দুটি পরিবর্তনশীল রূপে থাকে: ফসফোরাইলেজ বি (নিষ্ক্রিয়, ডিফসফরাইলেটেড, টি-স্টেট) এবং ফসফোরাইলেজ এ (সেরিন-১৪ ফসফরাইলেটেড, সক্রিয়, আর-স্টেট)। ফসফোরাইলেজ কাইনেজ দুটি স্বতন্ত্র সংকেত দ্বারা সক্রিয় হয়: পিকেএ দ্বারা আলফা ও বিটা সাব-ইউনিটের ফসফরাইলেশন এবং এর ডেল্টা সাব-ইউনিটে (যা ক্যালমোডুলিন) চারটি ক্যালসিয়াম আয়নের সংযোজন।'
            ),
            l(
              'Allosteric effectors override or fine-tune covalent modification. In skeletal muscle, elevated 5-AMP binds allosteric sites on phosphorylase b, stabilizing the active R-state even in the absence of covalent phosphorylation, ensuring instant glycogen mobilization at the onset of anaerobic contraction. In the liver, free glucose binds an allosteric inhibitor site on phosphorylase a, shifting it into the T-state and exposing Ser14 to rapid dephosphorylation by PP1.',
              'অ্যালবস্টেরিক সংকেত এই সমযোজী পরিবর্তনকে আরও সূক্ষ্ম করে তোলে। কঙ্কালপেশিতে অতিরিক্ত এএমপি ফসফোরাইলেজ বি-তে যুক্ত হয়ে ফসফরাইলেশন ছাড়াই একে সক্রিয় আর-স্টেটে রূপান্তর করে, যা পেশি সংকোচনের প্রথম সেকেন্ডেই গ্লাইকোজেন ভাঙন চালু করে। যকৃতে অতিরিক্ত গ্লুকোজ সরাসরি ফসফোরাইলেজ এ-তে যুক্ত হয়ে পিপিপি১ দ্বারা দ্রুত ফসফেট অপসারণ ঘটিয়ে ভাঙন থামিয়ে দেয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Four Thermodynamic Bypasses of Gluconeogenesis', 'গ্লুকোনিওজেনেসিসের চারটি তাপগতিবিদ্যাগত বাইপাস এনজাইম'),
          paragraphs: [
            l(
              'Gluconeogenesis bypasses the three irreversible steps of glycolysis through four dedicated enzymatic reactions. Bypass 1 (Pyruvate -> PEP) requires two steps: mitochondrial pyruvate carboxylase converts pyruvate to oxaloacetate (consuming ATP), followed by cytosolic or mitochondrial phosphoenolpyruvate carboxykinase (PEPCK, consuming GTP). Because oxaloacetate cannot cross the inner mitochondrial membrane, it is temporarily reduced to malate, exported, and re-oxidized in the cytosol.',
              'গ্লুকোনিওজেনেসিস চারটি বিশেষ এনজাইম দিয়ে গ্লাইকোলাইসিসের তিনটি একমুখী ধাপকে পাশ কাটায়। ১ম বাইপাসে মাইটোকন্ড্রিয়াল পাইরুভেট কার্বক্সিলেজ পাইরুভেটকে অক্সালোঅ্যাসিটেটে রূপান্তর করে (এটিপি ব্যয়), এবং সাইটোসোলিক পিইপিসিকে তা পিইপি-তে রূপান্তর করে (জিটিপি ব্যয়)। অক্সালোঅ্যাসিটেট ঝিল্লি পার হতে না পারায় এটি ম্যালট শাটলের মাধ্যমে সাইটোসোলে পরিবাহিত হয়।'
            ),
            l(
              'Bypass 2 is catalyzed by fructose 1,6-bisphosphatase-1 (FBPase-1), which hydrolyzes the C1 phosphate of F1,6BP to yield F6P and Pi (delta-G-prime-zero = -16.3 kJ/mol). FBPase-1 is allosterically inhibited by AMP and fructose 2,6-bisphosphate. Bypass 3 is catalyzed by glucose 6-phosphatase, an integral ER membrane complex with active sites facing the ER lumen, which dephosphorylates G6P to produce free D-glucose for export into blood via GLUT2.',
              '২য় বাইপাস ফ্রুক্টোজ ১,৬-বিসফসফাটেজ-১ দ্বারা অনুঘটিত হয়, যা এফ১,৬বিপি থেকে ১-নম্বর ফসফেট মুক্ত করে ফ্রুক্টোজ ৬-ফসফেট তৈরি করে। এটি এএমপি ও ফ্রুক্টোজ ২,৬-বিসফসফেট দ্বারা বাধাপ্রাপ্ত হয়। ৩য় বাইপাসটি ইআর ঝিল্লির গ্লুকোজ ৬-ফসফাটেজ দ্বারা সম্পন্ন হয়, যা জি৬পি ভেঙে মুক্ত গ্লুকোজ উৎপন্ন করে যা গ্লুট২ দিয়ে রক্তপ্রবাহে পরিবাহিত হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Differential: Glycogen Storage Diseases (Types I, II, III, V)', 'ক্লিনিক্যাল পার্থক্য: প্রধান গ্লাইকোজেন সঞ্চয় ব্যাধিসমূহ (টাইপ I, II, III, V)'),
          paragraphs: [
            l(
              'Inherited enzymatic defects in glycogen metabolism produce distinct clinical phenotypes depending on tissue distribution. Type I (Von Gierke disease; glucose 6-phosphatase deficiency) presents with massive hepatomegaly, severe fasting hypoglycemia, profound lactic acidosis, and doll-like facies. Because G6P accumulates, excess flux is shunted into de novo purine synthesis and the pentose phosphate pathway, causing hyperuricemia and gout.',
              'গ্লাইকোজেন বিপাকের জন্মগত এনজাইম ত্রুটি কলার বিস্তারের ওপর ভিত্তি করে ভিন্ন ভিন্ন ক্লিনিক্যাল রূপ প্রকাশ করে। টাইপ I (ভন গিয়ের্কে রোগ; গ্লুকোজ ৬-ফসফাটেজ ঘাটতি) মারাত্মক হাইপোগ্লাইসেমিয়া, বর্ধিত যকৃত, তীব্র ল্যাকটিক অ্যাসিডোসিস এবং পুতুলের মতো মুখমণ্ডল সৃষ্টি করে। জি৬পি জমে অতিরিক্ত পিউরিন তৈরি হওয়ায় রোগীদের গেঁটেবাত বা গাউট দেখা দেয়।'
            ),
          ],
          bullets: [
            l('Type II (Pompe disease): Lysosomal acid alpha-1,4-glucosidase (acid maltase) deficiency; glycogen accumulates in lysosomes, producing cardiomegaly and fatal infantile heart failure.', 'টাইপ II (পম্পে রোগ): লাইসোজোমাল অ্যাসিড আলফা-১,৪-গ্লুকোসিডেজ ঘাটতি; লাইসোজোমে গ্লাইকোজেন জমে মারাত্মক হার্ট ফেইলিউর ও শৈশবকালীন মৃত্যু ঘটায়।'),
            l('Type III (Cori/Forbes disease): Debranching enzyme deficiency; glycogen with short outer branches (limit dextrin) accumulates; milder hypoglycemia; normal blood lactate.', 'টাইপ III (কোরি রোগ): ডিব্রাঞ্চিং এনজাইম ঘাটতি; ছোট শাখাযুক্ত লিমিট ডেক্সট্রিন জমা হয়; তুলনামূলক মৃদু হাইপোগ্লাইসেমিয়া এবং স্বাভাবিক ল্যাকটেট মাত্রা থাকে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Master Logic of Hepatic Fuel Partitioning', 'একাডেমিক সংশ্লেষ: যকৃতের জ্বালানি বণ্টনের মূল যুক্তি'),
          paragraphs: [
            l(
              'Glycogen metabolism and gluconeogenesis form an integrated biochemical circuit defending systemic blood glucose homeostasis. Glycogen phosphorylase and synthase are governed by reciprocal phosphorylation cascades orchestrated by glucagon, epinephrine, and insulin. When glycogen stores are depleted after an overnight fast, gluconeogenesis sustains life by consuming lactate, alanine, and glycerol across four irreversible thermodynamic bypasses.',
              'গ্লাইকোজেন বিপাক এবং গ্লুকোনিওজেনেসিস যৌথভাবে রক্তের গ্লুকোজের স্বাভাবিক মাত্রা রক্ষার সমন্বিত জৈবরাসায়নিক প্রাচীর তৈরি করে। ফসফোরাইলেজ ও সিন্থেজ গ্লুকাগন এবং ইনসুলিন হরমোনের ফসফরাইলেশন ক্যাসকেড দ্বারা সুষমভাবে পরিচালিত হয়। রাতের উপবাসে গ্লাইকোজেন ফুরিয়ে গেলে গ্লুকোনিওজেনেসিস চারটি একমুখী বাইপাসের মাধ্যমে ল্যাকটেট, অ্যালানিন ও গ্লিসারল ব্যবহার করে জীবন সচল রাখে।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced & Research', 'উন্নত ও গবেষণা'),
      sections: [
        {
          id: 'integration',
          heading: l('Transcriptional Control of Gluconeogenesis: FOXO1, PGC-1alpha & Glucocorticoids', 'গ্লুকোনিওজেনেসিসের ট্রান্সক্রিপশনাল নিয়ন্ত্রণ: ফোক্সো১, পিজেসি-১-আলফা ও কর্টিসল'),
          paragraphs: [
            l(
              'Long-term regulation of hepatic gluconeogenesis is governed at the transcriptional level by a coordinated network comprising the forkhead transcription factor FOXO1, peroxisome proliferator-activated receptor-gamma coactivator 1-alpha (PGC-1a), and the glucocorticoid receptor. During fasting, glucagon-induced cAMP-PKA phosphorylates CREB, which drives the transcription of PGC-1a and PEPCK, while unphosphorylated FOXO1 resides in the nucleus to activate the G6PC and PCK1 promoters.',
              'যকৃতের গ্লুকোনিওজেনেসিসের দীর্ঘমেয়াদী নিয়ন্ত্রণ ফোক্সো১, পিজেসি-১-আলফা এবং গ্লুকোকর্ডিকয়েড রিসেপ্টরের ট্রান্সক্রিপশনাল নেটওয়ার্ক দ্বারা পরিচালিত হয়। উপবাসকালে গ্লুকাগন-পিকেএ ক্যাসকেড সিআরইবি প্রোটিনকে সক্রিয় করে পিজেসি-১-আলফা এবং পিইপিসিকে জিনের প্রতিলিপন বাড়ায়, আর নিউক্লিয়াসে থাকা ফোক্সো১ সরাসরি জি৬পিসি এবং পিসিকে১ জিনের প্রমোটার সক্রিয় করে এনজাইম উৎপাদন বৃদ্ধি করে।'
            ),
            l(
              'In the postprandial state, insulin-activated Akt phosphorylates FOXO1 on three conserved serine/threonine residues (Thr24, Ser256, Ser319). Phosphorylated FOXO1 is bound by 14-3-3 chaperone proteins and exported out of the nucleus into the cytosol, where it undergoes polyubiquitination and proteasomal degradation, abruptly silencing gluconeogenic gene transcription. Failure of this insulin-mediated FOXO1 exclusion is a primary molecular driver of fasting hyperglycemia in type 2 diabetes mellitus.',
              'খাওয়ার পর ইনসুলিন-সক্রিয় অ্যাক্ট প্রোটিন ফোক্সো১-কে তিনটি নির্দিষ্ট অ্যামিনো অ্যাসিডে ফসফরাইলেটেড করে। ফসফরাইলেটেড ফোক্সো১ ১৪-৩-৩ প্রোটিন দ্বারা আবদ্ধ হয়ে নিউক্লিয়াস থেকে সাইটোসোলে অপসারিত ও ধ্বংস হয়, যার ফলে গ্লুকোজ তৈরির জিনগুলো বন্ধ হয়ে যায়। টাইপ ২ ডায়াবেটিসে ইনসুলিন রেজিস্ট্যান্সের কারণে ফোক্সো১ নিউক্লিয়াস থেকে সরতে না পারাই অনিয়ন্ত্রিত উচ্চ রক্ত শর্করার অন্যতম প্রধান আণবিক কারণ।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Metabolic Pharmacology: SGLT2 Inhibitors & FBPase-1 Allosteric Antagonists', 'মেটাবলিক ফার্মাকোলজি: এসজিএলটি২ ইনহিবিটর ও এফবিপিএজ-১ নিয়ন্ত্রক'),
          paragraphs: [
            l(
              'Therapeutic strategies for metabolic disease increasingly target the interfaces of renal and hepatic glucose handling. Sodium-glucose cotransporter 2 (SGLT2) inhibitors (empagliflozin, dapagliflozin) block renal proximal tubule glucose reabsorption, lowering systemic glucose independently of insulin and inducing a state of mild calorie restriction that stimulates fatty acid oxidation and ketogenesis while reducing cardiovascular mortality.',
              'মেটাবলিক রোগের আধুনিক চিকিৎসায় যকৃত ও বৃক্কের গ্লুকোজ ব্যবস্থাপনাকে লক্ষ্য করে ওষুধ তৈরি করা হচ্ছে। এসজিএলটি২ ইনহিবিটরসমূহ (এমপাগ্লিফ্লোজিন, ডাপাগ্লিফ্লোজিন) বৃক্কের প্রক্সিমাল টিউবিউলে গ্লুকোজ পুনর্শোষণ বন্ধ করে প্রস্রাবের মাধ্যমে অতিরিক্ত চিনি বের করে দেয়, যা ইনসুলিন ছাড়াই রক্তে চিনি কমায় এবং কার্ডিওভাসকুলার মৃত্যুঝুঁকি উল্লেখযোগ্যভাবে হ্রাস করে।'
            ),
          ],
          bullets: [
            l('Small-molecule allosteric inhibitors of FBPase-1 (e.g., MB07803) selectively suppress hepatic gluconeogenesis without inducing dangerous hypoglycemia.', 'এফবিপিএজ-১ এর ক্ষুদ্র আণবিক নিয়ন্ত্রকসমূহ (যেমন MB07803) বিপজ্জনক হাইপোগ্লাইসেমিয়া তৈরি না করেই ডায়াবেটিসে যকৃতের অতিরিক্ত গ্লুকোজ উৎপাদন বন্ধ করতে সক্ষম।'),
            l('Liver glycogen content can be accurately and non-invasively quantified in vivo using 13C magnetic resonance spectroscopy (13C-MRS).', 'কার্বন-১৩ ম্যাগনেটিক রেজোন্যান্স স্পেকট্রোস্কোপি (13C-MRS) ব্যবহার করে কোনো কাটাছেঁড়া ছাড়াই মানুষের যকৃতে গ্লাইকোজেনের পরিমাণ সরাসরি নিখুঁতভাবে পরিমাপ করা যায়।'),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An integrated diagram showing the crossroads between glycogen metabolism (glycogenolysis and glycogenesis) and gluconeogenesis, detailing the four bypass steps: pyruvate carboxylase, PEPCK, FBPase-1, and glucose 6-phosphatase.',
      'গ্লাইকোজেন বিপাক (ভাঙন ও সংশ্লেষ) এবং গ্লুকোনিওজেনেসিসের সন্ধিক্ষণ প্রদর্শনকারী একটি সমন্বিত গতিপথের চিত্র, যেখানে চারটি প্রধান বাইপাস এনজাইম (পাইরুভেট কার্বক্সিলেজ, পিইপিসিকে, এফবিপিএজ-১ এবং গ্লুকোজ ৬-ফসফাটেজ) বিস্তারিতভাবে প্রদর্শিত হয়েছে।'
    ),
    steps: [
      l('Glycogen Mobilization: Phosphorylase and debranching enzyme convert glycogen to glucose 1-phosphate and glucose.', 'গ্লাইকোজেন ভাঙন: ফসফোরাইলেজ ও ডিব্রাঞ্চিং এনজাইম গ্লাইকোজেন ভেঙে গ্লুকোজ ১-ফসফেট ও মুক্ত গ্লুকোজ তৈরি করে।'),
      l('Bypass 1: Pyruvate is converted to oxaloacetate by mitochondrial pyruvate carboxylase and to PEP by PEPCK.', 'বাইপাস ১: মাইটোকন্ড্রিয়াল পাইরুভেট কার্বক্সিলেজ দ্বারা পাইরুভেট অক্সালোঅ্যাসিটেটে এবং পিইপিসিকে দ্বারা পিইপি-তে পরিণত হয়।'),
      l('Bypass 2: FBPase-1 hydrolyzes fructose 1,6-bisphosphate to fructose 6-phosphate, bypassing PFK-1.', 'বাইপাস ২: এফবিপিএজ-১ এনজাইম ফ্রুক্টোজ ১,৬-বিসফসফেটকে ভেঙে ফ্রুক্টোজ ৬-ফসফেট তৈরি করে পিএফকে-১ কে পাশ কাটায়।'),
      l('Bypass 3: ER-bound glucose 6-phosphatase hydrolyzes G6P to free D-glucose for export into systemic circulation.', 'বাইপাস ৩: ইআর-ঝিল্লির গ্লুকোজ ৬-ফসফাটেজ জি৬পি থেকে ফসফেট মুক্ত করে রক্তে সরবরাহের জন্য মুক্ত ডি-গ্লুকোজ তৈরি করে।'),
    ],
  },
  assessment: {
    question: l(
      'A 3-month-old infant presents with severe lethargy, doll-like facies, profound fasting hypoglycemia, marked hepatomegaly, and severe lactic acidosis. Serum uric acid and triglycerides are dramatically elevated. Which enzyme is most likely deficient?',
      '৩ মাস বয়সী একটি শিশুর তীব্র নিস্তেজতা, পুতুলের মতো মুখমণ্ডল, মারাত্মক উপবাসকালীন হাইপোগ্লাইসেমিয়া, অতিরিক্ত বর্ধিত যকৃত এবং তীব্র ল্যাকটিক অ্যাসিডোসিস দেখা যায়। রক্তে ইউরিক অ্যাসিড এবং ট্রাইগ্লিসারাইড মাত্রাতিরিক্ত বেশি। শিশুটির কোন এনজাইমের ঘাটতি সবচেয়ে বেশি সম্ভাব্য?'
    ),
    options: [
      l(
        'Glucose 6-phosphatase (Von Gierke disease, GSD Type Ia).',
        'গ্লুকোজ ৬-ফসফাটেজ (ভন গিয়ের্কে রোগ, জিএসডি টাইপ Ia)।'
      ),
      l(
        'Muscle glycogen phosphorylase (McArdle disease, GSD Type V).',
        'কঙ্কালপেশির গ্লাইকোজেন ফসফোরাইলেজ (ম্যাকআর্ডল রোগ, জিএসডি টাইপ V)।'
      ),
      l(
        'Lysosomal acid alpha-glucosidase (Pompe disease, GSD Type II).',
        'লাইসোজোমাল অ্যাসিড আলফা-গ্লুকোসিডেজ (পম্পে রোগ, জিএসডি টাইপ II)।'
      ),
      l(
        'Pyruvate kinase (erythrocyte hemolytic deficiency).',
        'পাইরুভেট কাইনেজ (লোহিত রক্তকণিকার হেমোলাইটিক ঘাটতি)।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Von Gierke disease (Type Ia GSD) is caused by glucose 6-phosphatase deficiency. Because the terminal step of both glycogenolysis and gluconeogenesis is blocked, free glucose cannot be released into the blood, causing profound fasting hypoglycemia. The accumulation of glucose 6-phosphate drives massive glycogen storage in the liver, while excess glycolytic overflow produces severe lactic acidosis, hyperlipidemia, and hyperuricemia.',
      'ভন গিয়ের্কে রোগ (টাইপ Ia জিএসডি) গ্লুকোজ ৬-ফসফাটেজ ঘাটতির কারণে ঘটে। গ্লাইকোজেন ভাঙন এবং গ্লুকোনিওজেনেসিস উভয় পথের শেষ ধাপটি অবরুদ্ধ থাকায় রক্তে মুক্ত গ্লুকোজ আসতে পারে না, ফলে মারাত্মক হাইপোগ্লাইসেমিয়া হয়। জমে থাকা জি৬পি যকৃতে অতিরিক্ত গ্লাইকোজেন জমা করে এবং অতিরিক্ত গ্লাইকোলাইসিসের ফলে তীব্র ল্যাকটিক অ্যাসিডোসিস, উচ্চ চর্বি এবং ইউরিক অ্যাসিড বৃদ্ধি পায়।'
    ),
  },
}
