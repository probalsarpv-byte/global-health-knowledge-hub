import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const bioenergeticsRefs = [
  {
    id: 'lehninger-biochem-8e-ch13',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 13: Bioenergetics and Biochemical Reaction Types',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch11',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 11: Bioenergetics: The Role of ATP",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch15',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 15: Metabolism: Basic Concepts and Design',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'marks-medbiochem-6e-ch19',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 19: Cellular Bioenergetics and ATP Generation",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

export const metabolism01BioenergeticsLesson: LessonTopic = {
  id: 'topic.metabolism.intro-bioenergetics',
  slug: 'intro-bioenergetics',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('01 · Introduction to Human Metabolism & Bioenergetics', '০১ · মানব বিপাক ও জৈবশক্তিবিজ্ঞানের পরিচয়'),
  summary: l(
    'The thermodynamic architecture of living human cells: Gibbs free energy, high-energy phosphate transfer potential, adenine nucleotide pool charge, and pyridine/flavin redox coupling.',
    'মানব জীবকোষের তাপগতিবিদ্যাগত কাঠামো: গিবস মুক্ত শক্তি, উচ্চ-শক্তি ফসফেট স্থানান্তর বিভব, অ্যাডেনিন নিউক্লিওটাইড পুল আধান এবং পাইরিডিন/ফ্ল্যাভিন রেডক্স কাপলিং।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Apply the laws of thermodynamics to biochemical reactions, distinguishing actual free energy change (delta-G) from standard biochemical free energy change (delta-G-prime-zero).',
      'জৈবরাসায়নিক বিক্রিয়ায় তাপগতিবিদ্যার সূত্র প্রয়োগ করতে পারা এবং প্রকৃত মুক্ত শক্তি পরিবর্তন (ডেল্টা-জি) ও আদর্শ জৈবরাসায়নিক মুক্ত শক্তি পরিবর্তনের (ডেল্টা-জি-প্রাইম-জিরো) মধ্যে পার্থক্য নির্ণয় করতে পারা।'
    ),
    l(
      'Evaluate the molecular basis of the high phosphate group transfer potential of ATP, phosphocreatine, and phosphoenolpyruvate, explaining resonance stabilization, electrostatic repulsion, and solvation energy.',
      'অনুরণন স্থায়িত্ব, স্থিরবৈদ্যুতিক বিকর্ষণ এবং দ্রাবকায়ন শক্তির প্রেক্ষিতে এটিপি, ফসফোকন ক্রিয়েটিন এবং ফসফোএনলপাইরুভেটের উচ্চ ফসফেট স্থানান্তর বিভবের আণবিক ভিত্তি মূল্যায়ন করতে পারা।'
    ),
    l(
      'Analyze the physiological role of universal electron carriers (NAD+/NADH, NADP+/NADPH, FAD/FADH2) and calculate cellular energy charge to explain how allosteric metabolic flux is governed.',
      'সার্বজনীন ইলেকট্রন বাহকগুলোর (এনএডি+/এনএডিএইচ, এনএডিপি+/এনএডিপিএইচ, এফএডি/এফএডিএইচ২) শারীরবৃত্তীয় ভূমিকা বিশ্লেষণ করতে পারা এবং অ্যালবস্টেরিক বিপাকীয় প্রবাহের নিয়ন্ত্রণ ব্যাখ্যা করতে কোষীয় শক্তি আধান হিসাব করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure'],
  relatedTopicIds: ['topic.glucose.metabolism'],
  references: bioenergeticsRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch13', 'harpers-biochem-32e-ch11'],
    structure: ['harpers-biochem-32e-ch11', 'marks-medbiochem-6e-ch19'],
    mechanism: ['lehninger-biochem-8e-ch13', 'berg-biochem-9e-ch15'],
    integration: ['berg-biochem-9e-ch15', 'marks-medbiochem-6e-ch19'],
    practice: ['lehninger-biochem-8e-ch13', 'harpers-biochem-32e-ch11'],
    takeaways: ['lehninger-biochem-8e-ch13', 'marks-medbiochem-6e-ch19'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Thermodynamic Foundations & Gibbs Free Energy', '১. তাপগতিবিদ্যার ভিত্তি ও গিবস মুক্ত শক্তি'), sectionId: 'introduction' },
      { id: 'sec-atp', label: l('2. ATP & Phosphate Transfer Potential', '২. এটিপি ও ফসফেট গ্রুপ স্থানান্তর বিভব'), sectionId: 'structure' },
      { id: 'sec-redox', label: l('3. Biological Redox Carriers & Electron Flow', '৩. জৈবিক রেডক্স বাহক ও ইলেকট্রন প্রবাহ'), sectionId: 'mechanism' },
      { id: 'sec-charge', label: l('4. Cellular Energy Charge & Metabolic Flux Logic', '৪. কোষীয় শক্তি আধান ও বিপাকীয় প্রবাহের যুক্তি'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Quantitative Bioenergetics Reasoning', '৫. পরিমাণগত জৈবশক্তিবিজ্ঞান যুক্তি ও বিশ্লেষণ'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Gibbs Free Energy Change (delta-G)', 'গিবস মুক্ত শক্তি পরিবর্তন (ডেল্টা-জি)'),
        definition: l(
          'The maximum usable work obtainable from a chemical reaction at constant temperature and pressure; a negative delta-G indicates a thermodynamically spontaneous (exergonic) process.',
          'নির্দিষ্ট তাপমাত্রা ও চাপে কোনো রাসায়নিক বিক্রিয়া থেকে প্রাপ্ত সর্বোচ্চ ব্যবহারযোগ্য কাজ; ঋণাত্মক ডেল্টা-জি স্বতঃস্ফূর্ত বা শক্তিমুক্তকারী বিক্রিয়া নির্দেশ করে।'
        ),
      },
      {
        term: l('Phosphate Group Transfer Potential', 'ফসফেট গ্রুপ স্থানান্তর বিভব'),
        definition: l(
          'The quantitative tendency of a phosphorylated compound to transfer its phosphate group to water or another acceptor, measured by the magnitude of its negative standard free energy of hydrolysis.',
          'কোনো ফসফরাইলেটেড যৌগের পানির অণু বা অন্য কোনো গ্রাহকে ফসফেট গ্রুপ স্থানান্তরের প্রবণতা, যা তার আর্দ্রবিশ্লেষণের ঋণাত্মক আদর্শ মুক্ত শক্তির মান দ্বারা পরিমাপ করা হয়।'
        ),
      },
      {
        term: l('Adenylate Energy Charge', 'অ্যাডেনাইলেট এনার্জি চার্জ'),
        definition: l(
          'The fractional saturation of the total adenine nucleotide pool with phosphoanhydride high-energy bonds, formulated by Daniel Atkinson as ([ATP] + 0.5[ADP]) / ([ATP] + [ADP] + [AMP]).',
          'মোট অ্যাডেনিন নিউক্লিওটাইড পুলের ফসফোঅ্যানহাইড্রাইড উচ্চ-শক্তি বন্ধন দ্বারা পূর্ণতার অনুপাত, যা ড্যানিয়েল অ্যাটকিনসন কর্তৃক ([ATP] + 0.5[ADP]) / ([ATP] + [ADP] + [AMP]) সূত্রে সংজ্ঞায়িত।'
        ),
      },
      {
        term: l('Electromotive Force & Redox Potential (E-prime-zero)', 'তড়িৎ-চালক বল ও রেডক্স বিভব (ই-প্রাইম-জিরো)'),
        definition: l(
          'The standard reduction potential measuring the affinity of a redox couple for electrons at pH 7.0; related to standard free energy by the Nernst-derived relation delta-G-prime-zero = -n*F*delta-E-prime-zero.',
          'pH ৭.০ অবস্থায় কোনো রেডক্স যুগলের ইলেকট্রন গ্রহণের প্রবণতা পরিমাপক বিভব; যা ডেল্টা-জি-প্রাইম-জিরো = -n*F*ডেল্টা-ই-প্রাইম-জিরো সমীকরণের মাধ্যমে মুক্ত শক্তির সাথে সরাসরি সম্পর্কিত।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Thermodynamic Coupling of Glucose Phosphorylation by Hexokinase', 'হেক্সোকাইনেজ দ্বারা গ্লুকোজ ফসফরাইলেশনের তাপগতিবিদ্যাগত কাপলিং'),
        steps: [
          l(
            'Step 1: Consider the direct endergonic phosphorylation of glucose: Glucose + Pi -> Glucose-6-Phosphate + H2O, with standard delta-G-prime-zero = +13.8 kJ/mol (non-spontaneous).',
            'ধাপ ১: গ্লুকোজের প্রত্যক্ষ শোষণমূলক ফসফরাইলেশন বিবেচনা করুন: গ্লুকোজ + পিআই -> গ্লুকোজ-৬-ফসফেট + পানি, যার আদর্শ মুক্ত শক্তি পরিবর্তন ডেল্টা-জি-প্রাইম-জিরো = +১৩.৮ কিলোজুল/মোল (অস্বতঃস্ফূর্ত)।'
          ),
          l(
            'Step 2: Couple this reaction to the exergonic hydrolysis of ATP: ATP + H2O -> ADP + Pi, with standard delta-G-prime-zero = -30.5 kJ/mol.',
            'ধাপ ২: এই বিক্রিয়াটিকে এটিপি আর্দ্রবিশ্লেষণের শক্তিমুক্তকারী বিক্রিয়ার সাথে যুক্ত করুন: এটিপি + পানি -> এডিপি + পিআই, যার ডেল্টা-জি-প্রাইম-জিরো = -৩০.৫ কিলোজুল/মোল।'
          ),
          l(
            'Step 3: Sum the thermodynamic reactions: Glucose + ATP -> Glucose-6-Phosphate + ADP. Net standard delta-G-prime-zero = +13.8 + (-30.5) = -16.7 kJ/mol. The net exergonic release drives the reaction forward irreversibly in living tissues.',
            'ধাপ ৩: সম্মিলিত বিক্রিয়া যোগ করুন: গ্লুকোজ + এটিপি -> গ্লুকোজ-৬-ফসফেট + এডিপি। মোট আদর্শ মুক্ত শক্তি = +১৩.৮ + (-৩০.৫) = -১৬.৭ কিলোজুল/মোল। এই ঋণাত্মক মান বিক্রিয়াটিকে কোষে একমুখীভাবে সামনের দিকে পরিচালিত করে।'
          ),
        ],
        conclusion: l(
          'Endergonic biosynthetic transformations are driven forward in living cells by stoichiometric coupling with ATP phosphoanhydride cleavage.',
          'জীবকোষে শক্তিশোষণকারী জৈবসংশ্লেষণ বিক্রিয়াসমূহ এটিপির ফসফোঅ্যানহাইড্রাইড বন্ধন ভাঙনের সাথে সরাসরি যুক্ত হয়ে স্বতঃস্ফূর্তভাবে সম্পন্ন হয়।'
        ),
      },
      {
        title: l('Assessing Cellular Energy Charge in Myocardial Ischemia', 'হৃদপেশির ইস্কেমিয়ায় কোষীয় শক্তি আধানের পতন মূল্যায়ন'),
        steps: [
          l(
            'Step 1: Under normoxic perfusion, healthy human cardiomyocytes maintain [ATP] around 5.0 mM, [ADP] at 0.5 mM, and [AMP] at 0.05 mM, yielding an Atkinson energy charge of approximately 0.94.',
            'ধাপ ১: স্বাভাবিক অক্সিজেনযুক্ত অবস্থায় সুস্থ হৃদপেশি কোষে [ATP] প্রায় ৫.০ মিলি মোলার, [ADP] ০.৫ মিলি মোলার এবং [AMP] ০.০৫ মিলি মোলার থাকে, যা প্রায় ০.৯৪ শক্তি আধান তৈরি করে।'
          ),
          l(
            'Step 2: Acute cessation of coronary blood flow halts mitochondrial oxidative phosphorylation, causing rapid ATP breakdown. As adenylate kinase equilibrates 2 ADP <-> ATP + AMP, AMP levels rise precipitously tenfold.',
            'ধাপ ২: করোনারি রক্তপ্রবাহ বন্ধ হলে মাইটোকন্ড্রিয়াল অক্সিডেটিভ ফসফরাইলেশন বন্ধ হয় এবং এটিপি দ্রুত হ্রাস পায়। অ্যাডেনাইলেট কাইনেজ বিক্রিয়ায় ২ এডিপি <-> এটিপি + এএমপি সমতা রক্ষায় এএমপি দশগুণ বৃদ্ধি পায়।'
          ),
          l(
            'Step 3: Elevated AMP/ATP ratio directly binds the Bateman domains of AMP-activated protein kinase (AMPK), inducing allosteric activation and phosphorylating downstream targets to shut down anabolic consumption.',
            'ধাপ ৩: বর্ধিত এএমপি/এটিপি অনুপাত সরাসরি এএমপিকে এনজাইমের বেটম্যান ডোমেইনে যুক্ত হয়ে এটিকে সক্রিয় করে, যা শক্তি অপচয়কারী সংশ্লেষণমূলক পথগুলোকে বন্ধ করে দেয়।'
          ),
        ],
        conclusion: l(
          'AMP serves as an ultrasensitive kinetic signal of metabolic stress, amplifying small percentage reductions in ATP into massive regulatory signals.',
          'কোষীয় বিপাকীয় চাপের অতিসংবেদনশীল সংকেত হিসেবে এএমপি কাজ করে, যা এটিপির সামান্য হ্রাসকে বহুলাংশে বিবর্ধিত করে এনজাইম নিয়ন্ত্রণ পরিচালনা করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why is ATP described as an energy shuttle of intermediate phosphate transfer potential rather than the highest energy compound in the human body?',
          'মানবদেহে এটিপিকে সর্বোচ্চ শক্তিসম্পন্ন যৌগ না বলে কেন মধ্যম ফসফেট স্থানান্তর বিভবের শক্তি বাহক হিসেবে অভিহিত করা হয়?'
        ),
        answer: l(
          'Compounds like phosphoenolpyruvate (-61.9 kJ/mol) and 1,3-bisphosphoglycerate (-49.3 kJ/mol) possess far higher transfer potentials, enabling them to transfer phosphate directly to ADP to regenerate ATP via substrate-level phosphorylation, while ATP donates phosphate to lower-energy acceptors like glucose.',
          'ফসফোএনলপাইরুভেট (-৬১.৯ কিলোজুল/মোল) এবং ১,৩-বিসফসফোগ্লিসারেট (-৪৯.৩ কিলোজুল/মোল)-এর মতো যৌগের ফসফেট স্থানান্তর বিভব এটিপির চেয়ে অনেক বেশি; ফলে তারা সাবস্ট্রেট-স্তরের ফসফরাইলেশনে এডিপিকে ফসফেট দিয়ে এটিপি তৈরি করতে পারে, আর এটিপি গ্লুকোজের মতো নিম্ন-শক্তির গ্রাহককে ফসফেট দান করে।'
        ),
      },
      {
        question: l(
          'What molecular features account for the large negative standard free energy change of ATP hydrolysis?',
          'এটিপি আর্দ্রবিশ্লেষণের বিশাল ঋণাত্মক আদর্শ মুক্ত শক্তি পরিবর্তনের জন্য কোন কোন আণবিক বৈশিষ্ট্য দায়ী?'
        ),
        answer: l(
          'Relief of intense electrostatic repulsion among the four negative charges of the triphosphate chain, increased resonance stabilization of the resulting inorganic orthophosphate product, and greater hydration/solvation energy of ADP and Pi compared to intact ATP.',
          'ট্রাইফসফেট শিকলের চারটি ঋণাত্মক চার্জের মধ্যকার তীব্র স্থিরবৈদ্যুতিক বিকর্ষণ হ্রাস, উৎপন্ন অর্থোফসফেটের অধিক অনুরণন স্থায়িত্ব এবং অখণ্ড এটিপির তুলনায় উৎপন্ন এডিপি ও অজৈব ফসফেটের বৃহত্তর জলযোজন বা দ্রাবকায়ন শক্তি।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'bioenergetics-thermodynamic-landscape',
    title: l('Interactive Bioenergetic Landscape: Phosphate Transfer Potential', 'ইন্টারেক্টিভ জৈবশক্তিবিজ্ঞান রূপরেখা: ফসফেট স্থানান্তর বিভব'),
    description: l(
      'Inspect the thermodynamic hierarchy of high-energy phosphorylated biological intermediates and their coupling with the central ATP-ADP energetic hub.',
      'উচ্চ-শক্তি ফসফরাইলেটেড জৈব মধ্যবর্তী যৌগসমূহের তাপগতিবিদ্যাগত শ্রেণিবিন্যাস এবং কেন্দ্রীয় এটিপি-এডিপি শক্তি চক্রের সাথে তাদের সংযোজন পরীক্ষা করুন।'
    ),
    disclaimer: l(
      'Standard biochemical free energy of hydrolysis (delta-G-prime-zero) measured in kJ/mol at 25 degrees Celsius, pH 7.0, and 1 mM Mg2+ concentration.',
      'আদর্শ জৈবরাসায়নিক আর্দ্রবিশ্লেষণ মুক্ত শক্তি (ডেল্টা-জি-প্রাইম-জিরো) ২৫ ডিগ্রি সেলসিয়াস, pH ৭.০ এবং ১ মিলি মোলার ম্যাগনেসিয়াম আয়নের উপস্থিতিতে কিলোজুল/মোলে পরিমাপকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'pep-node',
        label: l('Phosphoenolpyruvate (PEP) [-61.9 kJ/mol]', 'ফসফোএনলপাইরুভেট (পিইপি) [-৬১.৯ কিলোজুল/মোল]'),
        description: l(
          'The highest-energy phosphorylated metabolite in glycolysis. Tautomerization of the unstable enol product to pyruvate traps kinetic energy and drives irreversible ATP synthesis.',
          'গ্লাইকোলাইসিসের সর্বোচ্চ শক্তিসম্পন্ন ফসফরাইলেটেড মধ্যবর্তী যৌগ। উৎপন্ন অস্থিতিশীল ইনল থেকে কিটো পাইরুভেটে টটোমারিজম শক্তি আটকে রাখে এবং এটিপি সংশ্লেষ নিশ্চিত করে।'
        ),
        details: l(
          'Hydrolysis delta-G-prime-zero = -61.9 kJ/mol. Catalyzed by pyruvate kinase in step 10 of glycolysis, synthesizing ATP directly from ADP via substrate-level phosphorylation.',
          'আর্দ্রবিশ্লেষণ মুক্ত শক্তি = -৬১.৯ কিলোজুল/মোল। গ্লাইকোলাইসিসের ১০ম ধাপে পাইরুভেট কাইনেজ দ্বারা অনুঘটিত হয়ে সাবস্ট্রেট-স্তরে সরাসরি এটিপি তৈরি করে।'
        ),
        sectionId: 'structure',
        color: '#f97316',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: '13bpg-node',
        label: l('1,3-Bisphosphoglycerate (1,3-BPG) [-49.3 kJ/mol]', '১,৩-বিসফসফোগ্লিসারেট (১,৩-বিপিজি) [-৪৯.৩ কিলোজুল/মোল]'),
        description: l(
          'Mixed anhydride intermediate generated by glyceraldehyde 3-phosphate dehydrogenase (GAPDH). Its acyl phosphate group possesses an exceptionally high hydrolysis potential.',
          'গ্লিসারালডিহাইড ৩-ফসফেট ডিহাইড্রোজিনেজ দ্বারা গঠিত মিশ্র অ্যানহাইড্রাইড যৌগ। এর অ্যাসাইল ফসফেট বন্ধনে অসাধারণ উচ্চ আর্দ্রবিশ্লেষণ বিভব সংরক্ষিত থাকে।'
        ),
        details: l(
          'Transfers its 1-phosphate to ADP via phosphoglycerate kinase to generate 3-phosphoglycerate and the first ATP of glycolysis without requiring oxygen.',
          'ফসফোগ্লিসারেট কাইনেজের মাধ্যমে ১-নম্বর ফসফেটটি এডিপিতে স্থানান্তর করে ৩-ফসফোগ্লিসারেট এবং অক্সিজেন ছাড়াই প্রথম এটিপি তৈরি করে।'
        ),
        sectionId: 'structure',
        color: '#fb923c',
        svgCoords: { x: 25, y: 95, width: 310, height: 48 },
      },
      {
        id: 'phosphocreatine-node',
        label: l('Phosphocreatine (PCr) [-43.0 kJ/mol]', 'ফসফোকন ক্রিয়েটিন (পিসিআর) [-৪৩.০ কিলোজুল/মোল]'),
        description: l(
          'Temporal and spatial high-energy phosphate buffer in skeletal muscle, myocardium, and brain. Replenishes ATP during sudden bursts of contractile workload.',
          'কঙ্কালপেশি, হৃদপেশি ও মস্তিষ্কের সাময়িক ও স্থানিক উচ্চ-শক্তি ফসফেট সঞ্চয়কারী বাফার। পেশি সংকোচনের আকস্মিক চাহিদায় তাৎক্ষণিকভাবে এটিপি পুনর্গঠন করে।'
        ),
        details: l(
          'Creatine kinase transfers phosphate reversibly: Phosphocreatine + ADP <-> Creatine + ATP. In resting muscle, mitochondrial CK uses ATP to recharge PCr.',
          'ক্রিয়েটিন কাইনেজ উভমুখী বিক্রিয়ায় ফসফেট বদল করে। বিশ্রামকালীন পেশিতে মাইটোকন্ড্রিয়াল সিকে এটিপি ব্যবহার করে পুনরায় ফসফোকন ক্রিয়েটিন তৈরি করে রাখে।'
        ),
        sectionId: 'structure',
        color: '#eab308',
        svgCoords: { x: 25, y: 155, width: 310, height: 48 },
      },
      {
        id: 'atp-central-node',
        label: l('Adenosine Triphosphate (ATP) [-30.5 kJ/mol]', 'অ্যাডেনোসিন ট্রাইফসফেট (এটিপি) [-৩০.৫ কিলোজুল/মোল]'),
        description: l(
          'Universal thermodynamic currency. Positioned ideally at an intermediate transfer potential to act as an obligate phosphate donor and acceptor.',
          'সার্বজনীন জৈবরাসায়নিক শক্তি মুদ্রা। উচ্চ এবং নিম্ন শক্তি যৌগের মধ্যবর্তী স্থানে আদর্শ অবস্থানে থেকে অবিরাম ফসফেট গ্রহণ ও দান পরিচালনা করে।'
        ),
        details: l(
          'Hydrolysis of gamma-phosphate yields ADP + Pi (delta-G-prime-zero = -30.5 kJ/mol; intracellular delta-G approximately -50 kJ/mol due to physiological concentration ratios).',
          'গামা-ফসফেটের আর্দ্রবিশ্লেষণে এডিপি ও পিআই উৎপন্ন হয়; কোষে প্রকৃত শারীরবৃত্তীয় ঘনত্বের কারণে এর কার্যকর মুক্ত শক্তি প্রায় -৫০ কিলোজুল/মোল পর্যন্ত পৌঁছায়।'
        ),
        sectionId: 'structure',
        color: '#22c55e',
        svgCoords: { x: 25, y: 215, width: 310, height: 48 },
      },
      {
        id: 'g6p-node',
        label: l('Glucose 6-Phosphate (G6P) [-13.8 kJ/mol]', 'গ্লুকোজ ৬-ফসফেট (জি৬পি) [-১৩.৮ কিলোজুল/মোল]'),
        description: l(
          'Low-energy phosphate ester. Formed by hexokinase coupling ATP cleavage to trap extracellular glucose inside the cytoplasmic compartment.',
          'নিম্ন-শক্তি ফসফেট এস্টার। এটিপি ভাঙনের শক্তির সাথে হেক্সোকাইনেজ দ্বারা যুক্ত হয়ে বহিঃকোষীয় গ্লুকোজকে সাইটোপ্লাজমে চিরতরে আবদ্ধ করে।'
        ),
        details: l(
          'Because its phosphate transfer potential is far lower than ATP, direct synthesis of ATP from G6P is thermodynamically unfeasible under physiological conditions.',
          'এর ফসফেট স্থানান্তর বিভব এটিপির চেয়ে অনেক কম হওয়ায় স্বাভাবিক অবস্থায় জি৬পি থেকে সরাসরি এটিপি সংশ্লেষণ তাপগতিবিদ্যাগতভাবে অসম্ভব।'
        ),
        sectionId: 'structure',
        color: '#38bdf8',
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
          heading: l('Introduction: Life as an Open Thermodynamic System', 'ভূমিকা: উন্মুক্ত তাপগতিবিদ্যাগত ব্যবস্থা হিসেবে জীবন'),
          paragraphs: [
            l(
              'Human life requires a relentless input of free energy to resist the universal entropic decay demanded by the Second Law of Thermodynamics. Living cells are non-equilibrium open systems that maintain intricate molecular organization, electrical ion gradients, and mechanical motion by extracting chemical bond energy from dietary nutrients and releasing lower-energy oxidized waste products and heat into their surrounding environment.',
              'তাপগতিবিদ্যার দ্বিতীয় সূত্রের দাবি অনুযায়ী মহাবিশ্বের এনট্রপিক ক্ষয় বা বিশৃঙ্খলাকে প্রতিরোধ করতে মানবদেহের প্রতিটি কোষে অবিরাম মুক্ত শক্তির যোগান প্রয়োজন। জীবকোষ হলো সাম্যাবস্থাহীন উন্মুক্ত ব্যবস্থা, যা খাদ্য থেকে রাসায়নিক শক্তি আহরণ করে এবং পরিবেশে তাপ ও কম শক্তির বর্জ্য নির্গমন করে জটিল আণবিক সংগঠন, আয়নিক বৈদ্যুতিক গ্রেডিয়েন্ট এবং চলন বজায় রাখে।'
            ),
            l(
              'Metabolism encompasses the sum total of all coordinated chemical transformations occurring within the organism. It is fundamentally divided into catabolic pathways, which break down complex fuel molecules to release free energy and generate reducing equivalents, and anabolic pathways, which consume chemical energy to synthesize cellular components, membranes, enzymes, and genomic nucleic acids.',
              'বিপাক বা মেটাবলিজম হলো জীবদেহের অভ্যন্তরে সংঘটিত সমস্ত সমন্বিত রাসায়নিক রূপান্তরের সমষ্টি। এটি মূলত অপচিতি বা ক্যাটাবলিক গতিপথ—যা জটিল জ্বালানি অণুকে ভেঙে মুক্ত শক্তি ও ইলেকট্রন বাহক নির্গত করে, এবং উপচিতি বা অ্যানাবলিক গতিপথ—যা রাসায়নিক শক্তি ব্যয় করে কোষীয় উপাদান, ঝিল্লি, এনজাইম এবং নিউক্লিক অ্যাসিড সংশ্লেষ করে—এই দুই ভাগে বিভক্ত।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('ATP: The Universal Molecular Energy Currency', 'এটিপি: সার্বজনীন আণবিক শক্তি মুদ্রা'),
          paragraphs: [
            l(
              'Adenosine triphosphate (ATP) functions as the primary chemical shuttle connecting exergonic energy-yielding catabolic processes with endergonic energy-consuming cellular work. Structurally, ATP consists of an aromatic adenine base, a ribose sugar, and three phosphate groups linked in sequence by one phosphoester and two high-energy phosphoanhydride bonds.',
              'অ্যাডেনোসিন ট্রাইফসফেট (এটিপি) অপচিতিমূলক শক্তিমুক্তকারী প্রক্রিয়ার সাথে উপচিতিমূলক শক্তিগ্রাহী কোষীয় কাজের সংযোগকারী সার্বজনীন মধ্যস্থতাকারী হিসেবে কাজ করে। গঠনগতভাবে এটিপি একটি অ্যাডেনিন ক্ষারক, রিবোজ শর্করা এবং একটি ফসফোএস্টার ও দুটি উচ্চ-শক্তি ফসফোঅ্যানহাইড্রাইড বন্ধন দ্বারা যুক্ত তিনটি ফসফেট গ্রুপ নিয়ে গঠিত।'
            ),
            l(
              'Cleavage of the terminal phosphoanhydride bond yields adenosine diphosphate (ADP) and inorganic orthophosphate (Pi). This reaction releases a large quantity of Gibbs free energy due to the relief of repulsive negative electrical charges on adjacent phosphate oxygens, the superior resonance stabilization of free Pi, and favorable interactions with surrounding water dipole molecules.',
              'প্রান্তীয় ফসফোঅ্যানহাইড্রাইড বন্ধনটি ভেঙে গেলে অ্যাডেনোসিন ডাইফসফেট (এডিপি) এবং অজৈব ফসফেট (পিআই) উৎপন্ন হয়। পাশাপাশি অবস্থিত ফসফেটের ঋণাত্মক অক্সিজেনের তীব্র চার্জ বিকর্ষণ হ্রাস, মুক্ত ফসফেটের উন্নত অনুরণন স্থায়িত্ব এবং পানির অণুর সাথে অনুকূল দ্রাবকায়ন আকর্ষণের ফলে বিপুল পরিমাণ মুক্ত শক্তি নির্গত হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Redox Carriers: Universal Biological Electron Shuttles', 'রেডক্স বাহক: সার্বজনীন জৈবিক ইলেকট্রন বাহক'),
          paragraphs: [
            l(
              'Biological oxidation involves the removal of electrons from substrate molecules, typically accompanied by protons in the form of hydrogen atoms or hydride ions. Because electrons cannot travel freely through the aqueous cytosol, specialized coenzymes act as mobile electron carriers that accept reducing equivalents from fuel oxidation and transfer them to biosynthetic pathways or the mitochondrial respiratory chain.',
              'জৈবিক জারণ বলতে সাবস্ট্রেট অণু থেকে ইলেকট্রন অপসারণকে বোঝায়, যা সাধারণত হাইড্রোজেন পরমাণু বা হাইড্রাইড আয়নের আকারে প্রোটনের সাথে অপসারিত হয়। ইলেকট্রন যেহেতু জলীয় সাইটোসোলে স্বাধীনভাবে ভ্রমণ করতে পারে না, তাই বিশেষায়িত কো-এনজাইমসমূহ জ্বালানি থেকে বিজারক গ্রহণ করে সংশ্লেষণমূলক পথ বা মাইটোকন্ড্রিয়াল শ্বসন শৃঙ্খলে পৌঁছে দেয়।'
            ),
            l(
              'Nicotinamide adenine dinucleotide (NAD+) accepts two electrons and one proton as a hydride ion to form NADH, which is predominantly dedicated to catabolic energy harvesting in mitochondria. In contrast, nicotinamide adenine dinucleotide phosphate (NADP+/NADPH) maintains a high cytosolic reducing pool dedicated almost exclusively to reductive anabolism such as fatty acid and cholesterol synthesis.',
              'নিকোটিনামাইড অ্যাডেনিন ডাইনিউক্লিওটাইড (এনএডি+) একটি হাইড্রাইড আয়ন হিসেবে দুটি ইলেকট্রন ও একটি প্রোটন গ্রহণ করে এনএডিএইচ তৈরি করে, যা প্রধানত মাইটোকন্ড্রিয়ায় ক্যাটাবলিক শক্তি আহরণে নিয়োজিত। অন্যদিকে এনএডিপিএইচ সাইটোসোলে উচ্চ বিজারক পরিবেশ বজায় রাখে এবং ফ্যাটি অ্যাসিড ও কোলেস্টেরল সংশ্লেষণের মতো অ্যানাবলিক প্রক্রিয়ায় ইলেকট্রন যোগান দেয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Cellular Energy Charge and Physiological Homeostasis', 'কোষীয় শক্তি আধান এবং শারীরবৃত্তীয় ভারসাম্য'),
          paragraphs: [
            l(
              'The energy status of a human cell is tightly buffered within narrow margins. Daniel Atkinson formulated the concept of adenylate energy charge, which calculates the proportion of adenine nucleotides possessing high-energy phosphoanhydride bonds on a scale from 0.0 (completely depleted) to 1.0 (fully phosphorylated). In healthy resting tissues, the energy charge is rigidly maintained between 0.85 and 0.95.',
              'মানবদেহের প্রতিটি কোষে শক্তির ভারসাম্য অত্যন্ত সংবেদনশীলভাবে নিয়ন্ত্রিত হয়। ড্যানিয়েল অ্যাটকিনসন অ্যাডেনাইলেট এনার্জি চার্জের ধারণা দেন, যা ০.০ (সম্পূর্ণ শক্তিহীন) থেকে ১.০ (সম্পূর্ণ ফসফরাইলেটেড) স্কেলে উচ্চ-শক্তি বন্ধনযুক্ত অ্যাডেনিন নিউক্লিওটাইডের অনুপাত পরিমাপ করে। সুস্থ কোষে এই শক্তি আধান কঠোরভাবে ০.৮৫ থেকে ০.৯৫ এর মধ্যে সংরক্ষিত থাকে।'
            ),
            l(
              'When ATP is consumed during muscular contraction or active transport, the resulting accumulation of ADP and AMP acts as an immediate allosteric signal. Key regulatory enzymes in catabolism, such as phosphofructokinase-1, are stimulated by AMP and ADP, accelerating fuel oxidation to restore ATP, while ATP-consuming biosynthetic enzymes are simultaneously inhibited to preserve vital cellular functions.',
              'পেশি সংকোচন বা সক্রিয় পরিবহনের সময় এটিপি খরচ হলে উৎপন্ন এডিপি ও এএমপি তাৎক্ষণিক অ্যালবস্টেরিক সংকেত হিসেবে কাজ করে। গ্লাইকোলাইসিসের ফসফোফ্রুক্টোকাইনেজ-১ এর মতো মূল নিয়ন্ত্রক এনজাইমগুলো এএমপি দ্বারা উদ্দীপিত হয়ে জ্বালানি জারণ দ্রুত বৃদ্ধি করে, আর এটিপি খরচকারী সংশ্লেষণমূলক এনজাইমগুলো অবদমিত হয়ে শক্তি অপচয় রোধ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Reasoning: Evaluating Energy Starvation', 'মৌলিক যুক্তি: শক্তি অনাহার ও হাইপোক্সিয়া মূল্যায়ন'),
          paragraphs: [
            l(
              'Clinical scenarios that impair mitochondrial oxygen delivery, such as severe anemia, hypovolemic shock, or myocardial ischemia, prevent the re-oxidation of NADH to NAD+ by Complex I of the respiratory chain. Deprived of electron transport, ATP production plummets rapidly, shifting the cellular energy charge downward and threatening cell viability within minutes unless compensatory anaerobic pathways intervene.',
              'মারাত্মক রক্তাল্পতা, হাইপোভোলেমিয়া বা মায়োকার্ডিয়াল ইস্কেমিয়ার মতো অক্সিজেন ঘাটতিজনিত ক্লিনিক্যাল অবস্থায় মাইটোকন্ড্রিয়ার শ্বসন শৃঙ্খল এনএডিএইচ-কে এনএডি+-এ জারিত করতে পারে না। ফলে অক্সিডেটিভ এটিপি উৎপাদন বন্ধ হয়ে যায় এবং কোষীয় শক্তি আধান দ্রুত নিচে নেমে আসে, যা বিকল্প ব্যবস্থা ছাড়া কয়েক মিনিটের মধ্যে কোষের ক্ষতিসাধন করে।'
            ),
          ],
          bullets: [
            l('Catabolism degrades substrates to yield ATP and NADH.', 'অপচিতি বা ক্যাটাবলিজম সাবস্ট্রেট ভেঙে এটিপি ও এনএডিএইচ উৎপাদন করে।'),
            l('Anabolism consumes ATP and NADPH to construct complex biomolecules.', 'উপচিতি বা অ্যানাবলিজম জটিল জৈব অণু গঠনে এটিপি এবং এনএডিপিএইচ ব্যয় করে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Summary', 'মূল শিক্ষা ও সারাংশ'),
          paragraphs: [
            l(
              'Living cells obey the laws of thermodynamics by coupling endergonic synthesis to exergonic ATP hydrolysis. ATP is an intermediate-potential phosphate donor, making it an ideal dynamic shuttle. Pyridine and flavin nucleotides act as dedicated electron carriers, segregating catabolic oxidation (NADH/FADH2) from anabolic reduction (NADPH) to maintain cellular thermodynamic order.',
              'জীবকোষ তাপগতিবিদ্যার সূত্র মেনে চলে এবং শক্তিশোষণকারী সংশ্লেষণ বিক্রিয়াকে এটিপি আর্দ্রবিশ্লেষণের সাথে যুক্ত করে স্বতঃস্ফূর্ত করে তোলে। এটিপি মধ্যম বিভবের ফসফেট দাতা হওয়ায় এটি একটি আদর্শ পরিবর্তনশীল শক্তি মুদ্রা। পিরিডিন ও ফ্ল্যাভিন নিউক্লিওটাইডসমূহ অপচিতিমূলক জারণ ও উপচিতিমূলক বিজারণকে পৃথক রেখে কোষের শক্তি শৃঙ্খলা নিশ্চিত করে।'
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
          heading: l('Thermodynamics of Biological Systems: delta-G vs delta-G-prime-zero', 'জৈব ব্যবস্থার তাপগতিবিদ্যা: ডেল্টা-জি বনাম ডেল্টা-জি-প্রাইম-জিরো'),
          paragraphs: [
            l(
              'Biochemical thermodynamics applies the Gibbs equation delta-G = delta-H - T*delta-S to aqueous intracellular environments. To account for physiological conditions, biochemists establish the standard transformed free energy change (delta-G-prime-zero), defining a standard state of 298 K (25 degrees Celsius), 101.3 kPa pressure, 1.0 M solute concentrations, and a biological standard pH of 7.0 ([H+] = 10^-7 M) with [H2O] at 55.5 M.',
              'জৈবরাসায়নিক তাপগতিবিদ্যায় জলীয় অন্তঃকোষীয় পরিবেশের জন্য গিবস সমীকরণ ডেল্টা-জি = ডেল্টা-এইচ - টি*ডেল্টা-এস ব্যবহৃত হয়। শারীরবৃত্তীয় পরিবেশের জন্য আদর্শ জৈবরাসায়নিক মুক্ত শক্তি পরিবর্তন (ডেল্টা-জি-প্রাইম-জিরো) সংজ্ঞায়িত করা হয়েছে, যেখানে তাপমাত্রা ২৯৮ কেলভিন, চাপ ১০১.৩ কিলোপ্যাসকেল, দ্রবণের ঘনত্ব ১.০ মোলার, pH ৭.০ ([H+] = ১০^-৭ মোলার) এবং পানির ঘনত্ব ৫৫.৫ মোলার ধরা হয়।'
            ),
            l(
              'Crucially, delta-G-prime-zero is a thermodynamic constant reflecting the intrinsic stability of reactants versus products at equilibrium, governed by delta-G-prime-zero = -R*T*ln(K-prime-eq). However, the actual in vivo free energy change (delta-G) depends on intracellular mass-action ratios: delta-G = delta-G-prime-zero + R*T*ln([Products]/[Reactants]). A reaction with a positive standard delta-G-prime-zero can proceed spontaneously in vivo if product removal maintains the mass-action ratio sufficiently low.',
              'গুরুত্বপূর্ণ বিষয় হলো, ডেল্টা-জি-প্রাইম-জিরো একটি নির্দিষ্ট ধ্রুবক যা ডেল্টা-জি-প্রাইম-জিরো = -R*T*ln(K-prime-eq) সমীকরণ দ্বারা নির্ধারিত হয়। কিন্তু জীবদেহের অভ্যন্তরীণ প্রকৃত মুক্ত শক্তি পরিবর্তন (ডেল্টা-জি) বিক্রিয়ক ও উৎপাদের ঘনত্বের ওপর নির্ভরশীল: ডেল্টা-জি = ডেল্টা-জি-প্রাইম-জিরো + R*T*ln([উৎপাদ]/[বিক্রিয়ক])। তাই ধনাত্মক আদর্শ মান থাকা সত্ত্বেও উৎপাদকে দ্রুত সরিয়ে নিয়ে কোষে বিক্রিয়া স্বতঃস্ফূর্তভাবে চালানো সম্ভব।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Molecular Basis of Phosphate Transfer Potentials', 'ফসফেট স্থানান্তর বিভবের আণবিক ভিত্তি'),
          paragraphs: [
            l(
              'The standard free energy of hydrolysis of ATP to ADP and Pi is -30.5 kJ/mol (-7.3 kcal/mol). Four physical chemical factors explain this high negative value: (1) electrostatic repulsion between adjacent negative charges on oxygen atoms is significantly relieved upon cleavage; (2) inorganic phosphate exhibits four resonance forms with delocalized pi electrons, whereas the terminal phosphate in ATP possesses fewer; (3) ADP immediately ionizes to release a proton at pH 7.0; and (4) ADP and Pi have higher solvation energies.',
              'এটিপি ভেঙে এডিপি ও পিআই তৈরির আদর্শ মুক্ত শক্তি হলো -৩০.৫ কিলোজুল/মোল (-৭.৩ কিলোক্যালরি/মোল)। চারটি ভৌত-রাসায়নিক কারণে এই মান এত উচ্চ ঋণাত্মক: (১) ফসফেটের ঋণাত্মক অক্সিজেনের স্থিরবৈদ্যুতিক বিকর্ষণ হ্রাস; (২) মুক্ত অর্থোফসফেটে ইলেকট্রন চারদিকে ছড়িয়ে চারটি অনুরণন কাঠামো তৈরি করে উচ্চ স্থায়িত্ব লাভ; (৩) উৎপন্ন এডিপি তাৎক্ষণিক আয়নিত হয়ে প্রোটন নির্গমন করে; এবং (৪) উৎপন্ন আয়নগুলির উচ্চ দ্রাবকায়ন শক্তি।'
            ),
            l(
              'Importantly, intracellular concentrations in working human tissues ([ATP] ~ 5 mM, [ADP] ~ 0.5 mM, [Pi] ~ 2-5 mM) elevate the actual free energy of ATP hydrolysis (delta-G-p, or phosphorylation potential) to between -50 and -55 kJ/mol. Compounds with higher transfer potential—such as phosphoenolpyruvate (-61.9 kJ/mol), 1,3-bisphosphoglycerate (-49.3 kJ/mol), and phosphocreatine (-43.0 kJ/mol)—can directly phosphorylate ADP to regenerate ATP via substrate-level phosphorylation.',
              'মানবদেহের সক্রিয় কোষে ([ATP] প্রায় ৫ মিলি মোলার, [ADP] ০.৫ মিলি মোলার, [Pi] ২-৫ মিলি মোলার) ঘনত্বের কারণে এটিপির প্রকৃত আর্দ্রবিশ্লেষণ মুক্ত শক্তি (ডেল্টা-জি-পি বা ফসফরাইলেশন বিভব) -৫০ থেকে -৫৫ কিলোজুল/মোলে পৌঁছায়। যেসব যৌগের ফসফেট বিভব আরও বেশি—যেমন ফসফোএনলপাইরুভেট (-৬১.৯ কিলোজুল/মোল) ও ফসফোকন ক্রিয়েটিন (-৪৩.০ কিলোজুল/মোল)—তারা সাবস্ট্রেট-স্তরে এডিপি থেকে এটিপি তৈরি করতে পারে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Pyridine & Flavin Nucleotide Redox Stoichiometry', 'পাইরিডিন ও ফ্ল্যাভিন নিউক্লিওটাইডের রেডক্স স্টয়কিওমেট্রি'),
          paragraphs: [
            l(
              'Oxidation-reduction reactions involve the transfer of electrons from a reducing agent to an oxidizing agent. The standard reduction potential (E-prime-zero) is measured relative to the standard hydrogen electrode (0.0 V at pH 0; -0.414 V at pH 7.0). The free energy change is directly proportional to the difference in reduction potentials: delta-G-prime-zero = -n*F*delta-E-prime-zero, where n is the number of transferred electrons and F is Faraday constant (96,485 J/(V*mol)).',
              'জারণ-বিজারণ বিক্রিয়ায় বিজারক থেকে জারক পদার্থে ইলেকট্রন স্থানান্তরিত হয়। আদর্শ বিজারণ বিভব (ই-প্রাইম-জিরো) প্রমাণ হাইড্রোজেন ইলেক্ট্রোডের সাপেক্ষে পরিমাপ করা হয় (pH ৭.০-এ এর মান -০.৪১৪ ভোল্ট)। মুক্ত শক্তি পরিবর্তন বিজারণ বিভবের পার্থক্যের সাথে সমানুপাতিক: ডেল্টা-জি-প্রাইম-জিরো = -n*F*ডেল্টা-ই-প্রাইম-জিরো, যেখানে n হলো স্থানান্তরিত ইলেকট্রন সংখ্যা এবং F হলো ফ্যারাডে ধ্রুবক (৯৬,৪৮৫ জুল/(ভোল্ট*মোল))।'
            ),
            l(
              'In the NAD+/NADH couple (E-prime-zero = -0.320 V), the nicotinamide ring undergoes reversible reduction by accepting a hydride ion (:H-, two electrons and one proton), with the second proton entering the aqueous solvent. Flavin adenine dinucleotide (FAD, E-prime-zero ~ -0.22 V to 0.0 V depending on protein environment) is a prosthetic group that can accept either one electron (forming a stable semiquinone radical FADH-dot) or two electrons (forming FADH2), linking two-electron and single-electron pathways.',
              'এনএডি+/এনএডিএইচ যুগলে (ই-প্রাইম-জিরো = -০.৩২০ ভোল্ট) নিকোটিনামাইড রিংটি একটি হাইড্রাইড আয়ন (:H-, দুটি ইলেকট্রন ও একটি প্রোটন) গ্রহণ করে বিজারিত হয়, আর অন্য প্রোটনটি জলীয় দ্রবণে মুক্ত হয়। অন্যদিকে ফ্ল্যাভিন অ্যাডেনিন ডাইনিউক্লিওটাইড (এফএডি) এনজাইমের সাথে আবদ্ধ প্রোস্থেটিক গ্রুপ হিসেবে এক-ইলেকট্রন (সেমিকুইনোন র্যাডিক্যাল) বা দুই-ইলেকট্রন গ্রহণ করে এফএডিএইচ২ গঠন করতে পারে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Metabolic Control Analysis & Allosteric Energy Sensors', 'মেটাবলিক কন্ট্রোল অ্যানালাইসিস ও অ্যালবস্টেরিক শক্তি সংবেদক'),
          paragraphs: [
            l(
              'Metabolic pathways operate far from equilibrium at specific rate-limiting enzymatic steps characterized by large, negative delta-G values. These non-equilibrium steps act as irreversible thermodynamic valves where metabolic flux is regulated. Enzymes catalyzing near-equilibrium reactions (delta-G close to zero) respond passively to substrate concentrations, whereas flux-controlling enzymes are governed by covalent modification and allosteric effectors.',
              'বিপাকীয় গতিপথগুলো মূলত বিশাল ঋণাত্মক ডেল্টা-জি মানবিশিষ্ট নির্দিষ্ট হার-নিয়ন্ত্রক এনজাইমীয় ধাপে সাম্যাবস্থা থেকে বহু দূরে পরিচালিত হয়। এই অসম বিক্রিয়া ধাপগুলো একমুখী নিয়ন্ত্রক ভালভ হিসেবে কাজ করে সামগ্রিক প্রবাহ পরিচালনা করে। যেসব এনজাইম সাম্যাবস্থার কাছাকাছি থাকে (ডেল্টা-জি প্রায় শূন্য), তারা কেবল সাবস্ট্রেটের ঘনত্বে সাড়া দেয়, কিন্তু নিয়ন্ত্রক এনজাইমগুলো অ্যালবস্টেরিক সংকেত দ্বারা নিয়ন্ত্রিত হয়।'
            ),
            l(
              'AMP-activated protein kinase (AMPK) functions as the master metabolic fuel gauge. Because adenylate kinase maintains rapid equilibrium (2 ADP <-> ATP + AMP), a 10 percent drop in ATP produces a dramatic 400 to 500 percent surge in free AMP. AMP binds the gamma-subunit of AMPK, promoting phosphorylation by LKB1 and inhibiting dephosphorylation, which triggers catabolic ATP generation (fatty acid oxidation, GLUT4 translocation) and halts anabolic expenditure.',
              'এএমপি-অ্যাক্টিভেটেড প্রোটিন কাইনেজ (এএমপিকে) হলো কোষের প্রধান বিপাকীয় জ্বালানি পরিমাপক। যেহেতু অ্যাডেনাইলেট কাইনেজ ২ এডিপি <-> এটিপি + এএমপি সমতা বজায় রাখে, তাই এটিপি মাত্র ১০ শতাংশ কমলেই মুক্ত এএমপি ৪০০ থেকে ৫০০ শতাংশ বৃদ্ধি পায়। এই এএমপি সরাসরি এএমপিকে-কে সক্রিয় করে ক্যাটাবলিক এটিপি উৎপাদন (ফ্যাটি অ্যাসিড জারণ, গ্লুকোজ পরিবহন) বাড়িয়ে দেয় এবং উপচিতিমূলক শক্তি ব্যয় বন্ধ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Thermodynamic Calculations: Energy Yield of Complete Glucose Oxidation', 'তাপগতিবিদ্যাগত গণনা: গ্লুকোজের সম্পূর্ণ জারণের শক্তি ফলন'),
          paragraphs: [
            l(
              'Consider the complete combustion of one mole of D-glucose under standard conditions: C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O, with standard delta-G-prime-zero = -2870 kJ/mol. In human tissues, oxidative phosphorylation traps this energy by synthesizing approximately 30 to 32 moles of ATP per mole of glucose oxidized, representing approximately 960 to 1024 kJ/mol under standard conditions.',
              'আদর্শ অবস্থায় এক মোল ডি-গ্লুকোজের সম্পূর্ণ জারণ সমীকরণ বিবেচনা করুন: C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O, যার আদর্শ মুক্ত শক্তি ডেল্টা-জি-প্রাইম-জিরো = -২৮৭০ কিলোজুল/মোল। মানবদেহে অক্সিডেটিভ ফসফরাইলেশন প্রতি মোল গ্লুকোজ জারণে প্রায় ৩০ থেকে ৩২ মোল এটিপি তৈরি করে, যা আদর্শ অবস্থায় প্রায় ৯৬০ থেকে ১০২৪ কিলোজুল শক্তি ধারণ করে।'
            ),
          ],
          bullets: [
            l('Standard thermodynamic efficiency of oxidative phosphorylation is roughly 34 to 36 percent.', 'আদর্শ অবস্থায় অক্সিডেটিভ ফসফরাইলেশনের তাপগতিবিদ্যাগত রূপান্তর দক্ষতা প্রায় ৩৪ থেকে ৩৬ শতাংশ।'),
            l('Under actual intracellular conditions (delta-G-p ~ -50 kJ/mol), efficiency approaches 55 to 65 percent, with remainder released as vital body heat.', 'কোষের প্রকৃত শারীরবৃত্তীয় অবস্থায় (ডেল্টা-জি-পি প্রায় -৫০ কিলোজুল/মোল) কার্যকর রূপান্তর দক্ষতা ৫৫ থেকে ৬৫ শতাংশে পৌঁছায়, এবং বাকি শক্তি জীবনধারণের উপযোগী দৈহিক তাপ হিসেবে নির্গত হয়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Energetic Organization of Metabolism', 'একাডেমিক সংশ্লেষ: বিপাকের শক্তি সংগঠন'),
          paragraphs: [
            l(
              'Biological energy transduction is strictly governed by thermodynamic feasibility (negative actual delta-G) and kinetic barrier control by enzyme catalysts. ATP is maintained at an intracellular concentration far above equilibrium with ADP and Pi, creating a chemical potential gradient that drives cellular life. Energy charge and the AMP/ATP ratio provide the primary feedback signals maintaining homeostasis across organ systems.',
              'জৈবিক শক্তি রূপান্তর সর্বদা তাপগতিবিদ্যাগত সম্ভাব্যতা (প্রকৃত ঋণাত্মক ডেল্টা-জি) এবং এনজাইম দ্বারা নিয়ন্ত্রিত সক্রিয়করণ শক্তির বাধার ওপর নির্ভরশীল। কোষে এটিপিকে এডিপি ও পিআই-এর সাথে সাম্যাবস্থার অনেক উঁচুতে সংরক্ষণ করা হয়, যা জীবন পরিচালনাকারী রাসায়নিক বিভব সৃষ্টি করে। অ্যাডেনাইলেট শক্তি আধান এবং এএমপি/এটিপি অনুপাত মানবদেহের বিভিন্ন অঙ্গে এই ভারসাম্য অক্ষুণ্ণ রাখে।'
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
          heading: l('Pathophysiological Disruptions of Bioenergetics: Ischemia & Mitochondrial Myopathies', 'জৈবশক্তিবিজ্ঞানের প্যাথোফিজিওলজিক্যাল বিপর্যয়: ইস্কেমিয়া ও মাইটোকন্ড্রিয়াল মায়োপ্যাথি'),
          paragraphs: [
            l(
              'In clinical acute coronary syndromes and ischemic stroke, loss of oxygen disrupts mitochondrial oxidative phosphorylation within seconds. As mitochondrial membrane potential collapses, the FoF1-ATP synthase can reverse direction, consuming glycolytic ATP to pump protons into the intermembrane space until intracellular acidosis and opening of the mitochondrial permeability transition pore (mPTP) trigger irreversible oncotic necrosis or apoptosis.',
              'তীব্র করোনারি সিন্ড্রোম এবং ইস্কেমিক স্ট্রোকের মতো ক্লিনিক্যাল জরুরি অবস্থায় অক্সিজেন বন্ধ হলে কয়েক সেকেন্ডের মধ্যে মাইটোকন্ড্রিয়ার শক্তি উৎপাদন ভেঙে পড়ে। মেমব্রেন পোটেনশিয়াল নষ্ট হলে এফ০এফ১-এটিপি সিন্থেজ উল্টো দিকে ঘুরে গ্লাইকোলাইসিসের এটিপি অপচয় করতে শুরু করে, যা শেষ পর্যন্ত মাইটোকন্ড্রিয়াল পারমিয়াবিলিটি ট্রানজিশন পোর (এমপিটিপি) উন্মুক্ত করে কোষীয় মৃত্যু ডেকে আনে।'
            ),
            l(
              'Inherited mitochondrial disorders, such as MELAS (mitochondrial encephalomyopathy, lactic acidosis, and stroke-like episodes) and Leigh syndrome, result from point mutations in mitochondrial tRNA genes (e.g., m.3243A>G) or structural subunits of respiratory Complex I. These defects impair NADH oxidation and elevate the intracellular NADH/NAD+ ratio, forcing massive pyruvate reduction to lactate and producing systemic metabolic acidosis.',
              'মেলাস (মাইটোকন্ড্রিয়াল এনসেফালোমায়োপ্যাথি, ল্যাকটিক অ্যাসিডোসিস এবং স্ট্রোক-সদৃশ পর্ব) এবং লেই সিন্ড্রোমের মতো বংশগত মাইটোকন্ড্রিয়াল ব্যাধিতে মাইটোকন্ড্রিয়ার টি-আরএনএ বা কমপ্লেক্স I-এর জিনে মিউটেশন থাকে। এই ত্রুটিগুলো এনএডিএইচ জারণ ব্যাহত করে এবং কোষের এনএডিএইচ/এনএডি+ অনুপাত অস্বাভাবিক বাড়িয়ে দেয়, যার ফলে অতিরিক্ত পাইরুভেট ল্যাকটেটে পরিণত হয়ে মারাত্মক ল্যাকটিক অ্যাসিডোসিস সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Research Frontiers: Metabolic Flux Analysis & Stable Isotope Tracing', 'গবেষণার দিগন্ত: মেটাবলিক ফ্লাক্স অ্যানালাইসিস ও স্থিতিশীল আইসোটোপ ট্র্যাকিং'),
          paragraphs: [
            l(
              'Modern translational biochemistry measures intracellular bioenergetic pathways using carbon-13 ([U-13C]glucose) and deuterium stable isotope resolved metabolomics (SIRM) paired with liquid chromatography-high resolution mass spectrometry (LC-HRMS). These techniques calculate absolute metabolic flux rates through individual enzymatic reactions rather than static metabolite concentrations, revealing altered bioenergetic rewiring in malignant tumors (Warburg effect) and failing myocardium.',
              'আধুনিক বায়োমেডিকাল গবেষণায় কার্বন-১৩ ([U-13C]গ্লুকোজ) এবং ডিউটেরিয়াম স্থিতিশীল আইসোটোপ ট্র্যাকিংয়ের সাথে হাই-রেজোলিউশন ম্যাস স্পেকট্রোমেট্রি ব্যবহার করে সরাসরি এনজাইমীয় বিক্রিয়ার অভ্যন্তরীণ প্রবাহের গতি পরিমাপ করা হয়। এই মেটাবলিক ফ্লাক্স অ্যানালাইসিস পদ্ধতি স্ট্যাটিক ঘনত্বের বদলে ক্যান্সারের ওয়ারবার্গ প্রভাব বা হৃদরোগে বিপাকীয় পুনর্গঠনের প্রকৃত তথ্য উদঘাটন করে।'
            ),
          ],
          bullets: [
            l('High-throughput respirometry (Seahorse XF Analyzer) quantifies cellular oxygen consumption rate (OCR) and extracellular acidification rate (ECAR).', 'হাই-থ্রুপুট রেস্পাইরোমেট্রি (সিহর্স এক্সএফ অ্যানালাইজার) জীবিত কোষে অক্সিজেন খরচ হার (ওসিআর) এবং বহিঃকোষীয় অম্লীকরণ হার (ইসিএআর) নির্ণয় করে।'),
            l('Metabolic control analysis determines flux control coefficients (FCC) across branching pathways to identify rate-limiting pharmacological drug targets.', 'মেটাবলিক কন্ট্রোল অ্যানালাইসিসের ফ্লাক্স কন্ট্রোল কোফিশিয়েন্ট (এফসিসি) জটিল শাখান্বিত পথে হার-নিয়ন্ত্রক এনজাইমকে ওষুধ তৈরির লক্ষ্যবস্তু হিসেবে চিহ্নিত করে।'),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A multi-tiered thermodynamic chart illustrating phosphate group transfer potentials, showing phosphoenolpyruvate, 1,3-bisphosphoglycerate, and phosphocreatine transferring high-energy phosphate to ADP to synthesize ATP, which in turn donates phosphate to form lower-energy glucose 6-phosphate.',
      'ফসফেট গ্রুপ স্থানান্তর বিভব প্রদর্শনকারী একটি বহু-স্তরীয় তাপগতিবিদ্যাগত চার্ট, যেখানে ফসফোএনলপাইরুভেট, ১,৩-বিসফসফোগ্লিসারেট এবং ফসফোকন ক্রিয়েটিন এডিপিতে ফসফেট দান করে এটিপি সংশ্লেষ করে, এবং এটিপি নিম্ন-শক্তির গ্লুকোজ ৬-ফসফেট গঠনে ফসফেট প্রদান করে।'
    ),
    steps: [
      l('High-potential donors (PEP, 1,3-BPG, PCr) transfer phosphate down the thermodynamic gradient to ADP.', 'উচ্চ-বিভব ফসফেট দাতা (পিইপি, ১,৩-বিপিজি, পিসিআর) তাপগতিবিদ্যাগত ঢাল বেয়ে এডিপিতে ফসফেট স্থানান্তর করে।'),
      l('ATP is synthesized via substrate-level phosphorylation, conserving chemical bond energy.', 'সাবস্ট্রেট-স্তরের ফসফরাইলেশনের মাধ্যমে এটিপি সংশ্লেষিত হয়ে রাসায়নিক বন্ধন শক্তি সঞ্চয় করে।'),
      l('ATP donates phosphate to lower-energy acceptors (glucose, glycerol) driving endergonic cellular processes.', 'এটিপি নিম্ন-শক্তির গ্রাহক অণুতে (গ্লুকোজ, গ্লিসারল) ফসফেট দান করে শক্তিশোষণকারী কোষীয় প্রক্রিয়া পরিচালনা করে।'),
    ],
  },
  assessment: {
    question: l(
      'Which factor primarily explains why the standard free energy of hydrolysis for phosphoenolpyruvate (PEP) (-61.9 kJ/mol) is significantly more negative than that of ATP (-30.5 kJ/mol)?',
      'কোন প্রধান বৈশিষ্ট্যের কারণে ফসফোএনলপাইরুভেটের (পিইপি) আর্দ্রবিশ্লেষণের আদর্শ মুক্ত শক্তি (-৬১.৯ কিলোজুল/মোল) এটিপির (-৩০.৫ কিলোজুল/মোল) তুলনায় উল্লেখযোগ্যভাবে বেশি ঋণাত্মক হয়?'
    ),
    options: [
      l(
        'The removal of the phosphate group traps PEP products because the enol tautomer spontaneously converts to the much more stable keto form of pyruvate.',
        'ফসফেট গ্রুপ অপসারণের পর উৎপন্ন ইনল টটোমারটি স্বতঃস্ফূর্তভাবে অত্যন্ত স্থিতিশীল কিটো পাইরুভেটে রূপান্তরিত হয়ে শক্তি আবদ্ধ করে।'
      ),
      l(
        'PEP contains four high-energy phosphoanhydride bonds linked in a strained cyclic ring structure.',
        'পিইপি-এর মধ্যে একটি টানটান বলয়াকার কাঠামোর ভেতর চারটি উচ্চ-শক্তি ফসফোঅ্যানহাইড্রাইড বন্ধন থাকে।'
      ),
      l(
        'Hydrolysis of PEP is completely endergonic and requires continuous input of cellular heat to proceed forward.',
        'পিইপি-এর আর্দ্রবিশ্লেষণ সম্পূর্ণ শক্তিশোষণকারী এবং এটি সামনের দিকে অগ্রসর হতে অবিরাম দৈহিক তাপ প্রয়োজন হয়।'
      ),
      l(
        'PEP donates its phosphate group exclusively to molecular oxygen rather than adenosine diphosphate.',
        'পিইপি তার ফসফেট গ্রুপটি অ্যাডেনোসিন ডাইফসফেটের পরিবর্তে সরাসরি আণবিক অক্সিজেনে দান করে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'When PEP transfers its phosphate group, the initial product is the enol form of pyruvate. This enol tautomer spontaneously and rapidly tautomerizes to the keto form of pyruvate, a transformation with a large negative delta-G that pulls the reaction far toward completion.',
      'যখন পিইপি তার ফসফেট গ্রুপ দান করে, তখন প্রাথমিক উৎপাদ হিসেবে পাইরুভেটের ইনল রূপ তৈরি হয়। এই ইনল টটোমারটি তাৎক্ষণিকভাবে অতি স্থিতিশীল কিটো পাইরুভেটে রূপান্তরিত হয়, যার বিশাল ঋণাত্মক মুক্ত শক্তি বিক্রিয়াটিকে সম্পূর্ণ একমুখী রূপ দেয়।'
    ),
  },
}
