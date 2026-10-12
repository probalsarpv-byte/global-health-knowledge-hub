import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const glycolysisRefs = [
  {
    id: 'lehninger-biochem-8e-ch14',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 14: Glycolysis, Gluconeogenesis, and the Pentose Phosphate Pathway',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch17',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 17: Glycolysis and the Oxidation of Pyruvate",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch16',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 16: Glycolysis and Gluconeogenesis',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'marks-medbiochem-6e-ch22',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 22: Generation of ATP from Glucose: Glycolysis",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

export const metabolism02GlycolysisLesson: LessonTopic = {
  id: 'topic.metabolism.glycolysis-pyruvate',
  slug: 'glycolysis-pyruvate',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('02 · Glycolysis & Pyruvate Oxidation', '০২ · গ্লাইকোলাইসিস ও পাইরুভেট জারণ'),
  summary: l(
    'The 10 enzymatic reactions of the Embden-Meyerhof-Parnas pathway, allosteric regulation of PFK-1 and pyruvate kinase, cytosolic NAD+ regeneration, and the mitochondrial pyruvate dehydrogenase complex.',
    'এমবডেন-মেয়ারহফ-পার্নাস গতিপথের ১০টি এনজাইমীয় বিক্রিয়া, পিএফকে-১ ও পাইরুভেট কাইনেজের অ্যালবস্টেরিক নিয়ন্ত্রণ, সাইটোসোলিক এনএডি+ পুনরুৎপাদন এবং মাইটোকন্ড্রিয়াল পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Detail the 10 sequential enzymatic steps of glycolysis, distinguishing the preparatory ATP-investment phase from the payoff phase yielding ATP and NADH.',
      'গ্লাইকোলাইসিসের ১০টি ধারাবাহিক এনজাইমীয় ধাপ বিস্তারিতভাবে বর্ণনা করতে পারা এবং এটিপি বিনিয়োগকারী প্রাথমিক পর্যায় ও এটিপি-এনএডিএইচ উৎপাদনকারী শেষ পর্যায়ের পার্থক্য করতে পারা।'
    ),
    l(
      'Contrast the kinetic properties and physiological roles of hexokinase versus glucokinase, and explain how fructose 2,6-bisphosphate reciprocally regulates PFK-1.',
      'হেক্সোকাইনেজ ও গ্লুকোকাইনেজের গতিবৈশিষ্ট্য ও শারীরবৃত্তীয় ভূমিকার বৈসাদৃশ্য নিরূপণ করতে পারা এবং ফ্রুক্টোজ ২,৬-বিসফসফেট কীভাবে পিএফকে-১ নিয়ন্ত্রণ করে তা ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Analyze the structural subunit composition (E1, E2, E3) and cofactor requirements (TPP, lipoate, CoA, FAD, NAD+) of the pyruvate dehydrogenase multienzyme complex and its covalent phosphorylation.',
      'পাইরুভেট ডিহাইড্রোজিনেজ মাল্টি-এনজাইম কমপ্লেক্সের সাব-ইউনিট গঠন (ই১, ই২, ই৩), কোফ্যাক্টর প্রয়োজনীয়তা (টিপিপি, লিপোয়েট, কোএ, এফএডি, এনএডি+) এবং এর সমযোজী ফসফরাইলেশন বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics'],
  relatedTopicIds: ['topic.glucose.metabolism'],
  references: glycolysisRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch14', 'harpers-biochem-32e-ch17'],
    structure: ['harpers-biochem-32e-ch17', 'marks-medbiochem-6e-ch22'],
    mechanism: ['lehninger-biochem-8e-ch14', 'berg-biochem-9e-ch16'],
    integration: ['berg-biochem-9e-ch16', 'marks-medbiochem-6e-ch22'],
    practice: ['lehninger-biochem-8e-ch14', 'harpers-biochem-32e-ch17'],
    takeaways: ['lehninger-biochem-8e-ch14', 'marks-medbiochem-6e-ch22'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Glycolysis Overview & The Preparatory Phase', '১. গ্লাইকোলাইসিস পরিচিতি ও প্রাথমিক পর্যায়'), sectionId: 'introduction' },
      { id: 'sec-payoff', label: l('2. The Payoff Phase & Substrate-Level Phosphorylation', '২. শক্তি উৎপাদন পর্যায় ও সাবস্ট্রেট-স্তরের ফসফরাইলেশন'), sectionId: 'structure' },
      { id: 'sec-reg', label: l('3. Three Irreversible Gates: HK, PFK-1 & PK', '৩. তিনটি একমুখী নিয়ন্ত্রণ ফটক: হেক্সোকাইনেজ, পিএফকে-১ ও পিকে'), sectionId: 'mechanism' },
      { id: 'sec-pdc', label: l('4. Pyruvate Fates: Anaerobic Lactate & Mitochondrial PDC', '৪. পাইরুভেটের পরিণতি: অ্যানেরোবিক ল্যাকটেট ও মাইটোকন্ড্রিয়াল পিডিসি'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('5. Clinical Correlates: PK Deficiency & Warburg Effect', '৫. ক্লিনিক্যাল প্রয়োগ: পিকে ঘাটতি ও ওয়ারবার্গ প্রভাব'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & Pathway Stoichiometry Summary', '৬. শব্দকোষ ও গতিপথের স্টয়কিওমেট্রি সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Phosphofructokinase-1 (PFK-1)', 'ফসফোফ্রুক্টোকাইনেজ-১ (পিএফকে-১)'),
        definition: l(
          'The primary committed and rate-limiting allosteric enzyme of glycolysis, converting fructose 6-phosphate to fructose 1,6-bisphosphate with investment of one ATP.',
          'গ্লাইকোলাইসিসের প্রধান হার-নিয়ন্ত্রক ও প্রতিশ্রুতিবদ্ধ অ্যালবস্টেরিক এনজাইম, যা এক অণু এটিপি খরচ করে ফ্রুক্টোজ ৬-ফসফেটকে ফ্রুক্টোজ ১,৬-বিসফসফেটে রূপান্তর করে।'
        ),
      },
      {
        term: l('Fructose 2,6-Bisphosphate (F-2,6-BP)', 'ফ্রুক্টোজ ২,৬-বিসফসফেট (এফ-২,৬-বিপি)'),
        definition: l(
          'The most potent physiological allosteric activator of PFK-1 and inhibitor of fructose 1,6-bisphosphatase-1, synthesized and degraded by the bifunctional tandem enzyme PFK-2/FBPase-2.',
          'পিএফকে-১ এর সবচেয়ে শক্তিশালী প্রাকৃতিক অ্যালবস্টেরিক উদ্দীপক এবং ফ্রুক্টোজ ১,৬-বিসফসফাটেজ-১ এর বাধা প্রদানকারী, যা দ্বি-কার্যকরী এনজাইম পিএফকে-২/এফবিপিএজ-২ দ্বারা নিয়ন্ত্রিত হয়।'
        ),
      },
      {
        term: l('Substrate-Level Phosphorylation', 'সাবস্ট্রেট-স্তরের ফসফরাইলেশন'),
        definition: l(
          'Direct synthesis of ATP (or GTP) by the transfer of a high-energy phosphate group from a phosphorylated metabolic intermediate directly to ADP, independent of oxygen and the electron transport chain.',
          'অক্সিজেন বা শ্বসন শৃঙ্খল ছাড়াই কোনো উচ্চ-শক্তি ফসফরাইলেটেড মধ্যবর্তী যৌগ থেকে সরাসরি এডিপিতে ফসফেট স্থানান্তর করে এটিপি সংশ্লেষণ করার প্রক্রিয়া।'
        ),
      },
      {
        term: l('Pyruvate Dehydrogenase Complex (PDC)', 'পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স (পিডিসি)'),
        definition: l(
          'A massive mitochondrial multienzyme cluster (E1, E2, E3) linking glycolysis to the citric acid cycle by catalyzing the irreversible oxidative decarboxylation of pyruvate to acetyl-CoA, NADH, and CO2.',
          'একটি বিশালাকার মাইটোকন্ড্রিয়াল মাল্টি-এনজাইম ক্লাস্টার (ই১, ই২, ই৩), যা পাইরুভেটকে একমুখীভাবে জারিত ও ডিকার্বক্সিলেটেড করে অ্যাসিটাইল-কোএ, এনএডিএইচ এবং কার্বন ডাই-অক্সাইড তৈরি করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating ATP Yield from Anaerobic vs Aerobic Glycolysis', 'অ্যানেরোবিক বনাম অ্যারোবিক গ্লাইকোলাইসিসের এটিপি ফলন হিসাব'),
        steps: [
          l(
            'Step 1: In the preparatory phase, 2 ATP are consumed: 1 by hexokinase (Glucose -> G6P) and 1 by PFK-1 (F6P -> F1,6BP).',
            'ধাপ ১: প্রাথমিক পর্যায়ে ২ অণু এটিপি ব্যয় হয়: হেক্সোকাইনেজ ধাপে ১ অণু (গ্লুকোজ -> জি৬পি) এবং পিএফকে-১ ধাপে ১ অণু (এফ৬পি -> এফ১,৬বিপি)।'
          ),
          l(
            'Step 2: Aldolase cleaves F1,6BP into DHAP and GAP; triose phosphate isomerase converts DHAP to GAP, yielding 2 trioses. In the payoff phase, GAPDH generates 2 NADH, while phosphoglycerate kinase yields 2 ATP and pyruvate kinase yields 2 ATP (4 ATP total).',
            'ধাপ ২: অ্যালডোলেজ এফ১,৬বিপি-কে ভেঙে দুটি ট্রায়োজ শর্করা তৈরি করে। শক্তি উৎপাদন পর্যায়ে গ্যাপডিএইচ ২ অণু এনএডিএইচ উৎপন্ন করে, এবং ফসফোগ্লিসারেট কাইনেজ ও পাইরুভেট কাইনেজ মিলে মোট ৪ অণু এটিপি তৈরি করে।'
          ),
          l(
            'Step 3: Under anaerobic conditions, net yield is strictly 2 ATP per glucose, as NADH is re-oxidized by lactate dehydrogenase without entering mitochondria. Under aerobic conditions, the 2 cytosolic NADH yield an additional 3-5 ATP via mitochondrial glycerol 3-phosphate or malate-aspartate shuttles.',
            'ধাপ ৩: অবাত বা অ্যানেরোবিক অবস্থায় নিট ফলন হলো প্রতি গ্লুকোজে ঠিক ২ এটিপি, কারণ এনএডিএইচ মাইটোকন্ড্রিয়ায় না গিয়ে ল্যাকটেট তৈরিতে ব্যবহৃত হয়। সবাত অবস্থায় ম্যালট বা গ্লিসারল শাটলের মাধ্যমে এই ২ এনএডিএইচ থেকে অতিরিক্ত ৩ থেকে ৫ এটিপি পাওয়া যায়।'
          ),
        ],
        conclusion: l(
          'Substrate-level phosphorylation ensures rapid, oxygen-independent ATP generation capable of sustaining vigorous human skeletal muscle bursts and mature erythrocytes.',
          'সাবস্ট্রেট-স্তরের ফসফরাইলেশন অক্সিজেন ছাড়াই অতি দ্রুত এটিপি সরবরাহ নিশ্চিত করে, যা তীব্র পেশি সংকোচন এবং লোহিত রক্তকণিকার জীবনধারণে অপরিহার্য।'
        ),
      },
      {
        title: l('Mechanistic Basis of the Pasteur Effect in Hypoxic Muscle Tissue', 'হাইপোক্সিক পেশিকলায় পাস্তুর প্রভাবের কার্যপদ্ধতি বিশ্লেষণ'),
        steps: [
          l(
            'Step 1: When muscle transitions from rest to intense hypoxia, mitochondrial respiration ceases, causing cellular [ATP] to decline while [AMP] and [ADP] elevate dramatically.',
            'ধাপ ১: পেশি যখন তীব্র হাইপোক্সিয়ায় আক্রান্ত হয়, তখন মাইটোকন্ড্রিয়ার শ্বসন থেমে যায় এবং এটিপি কমে এএমপি ও এডিপির পরিমাণ বহুলাংশে বৃদ্ধি পায়।'
          ),
          l(
            'Step 2: Elevated AMP relieves the ATP-mediated allosteric inhibition of PFK-1, shifting its kinetic sigmoidal curve leftward and accelerating glycolytic flux tenfold to compensate for the lower energy yield per glucose molecule.',
            'ধাপ ২: বর্ধিত এএমপি পিএফকে-১ এনজাইমের ওপর এটিপির দমনমূলক প্রভাব সরিয়ে দেয়, যার ফলে এনজাইমটি অতিসক্রিয় হয়ে গ্লাইকোলাইসিসের গতি দশগুণ বাড়িয়ে দেয়।'
          ),
          l(
            'Step 3: To sustain this massive flux, lactate dehydrogenase rapidly converts accumulating pyruvate to lactate, restoring cytosolic NAD+ needed by GAPDH to prevent pathway standstill.',
            'ধাপ ৩: এই প্রচণ্ড গতিপথ অব্যাহত রাখতে ল্যাকটেট ডিহাইড্রোজিনেজ পাইরুভেটকে ল্যাকটেটে রূপান্তর করে এবং সাইটোসোলিক এনএডি+ পুনরুৎপাদন করে গ্যাপডিএইচ ধাপের ধারাবাহিকতা রক্ষা করে।'
          ),
        ],
        conclusion: l(
          'The Pasteur effect demonstrates that cells dramatically increase glucose consumption under anaerobic conditions to maintain vital homeostatic energy charge.',
          'পাস্তুর প্রভাব প্রমাণ করে যে কোষীয় শক্তি আধান বজায় রাখতে জীবকোষ অবাত অবস্থায় গ্লুকোজ খরচের হার বহুগুণ বাড়িয়ে দেয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does liver express glucokinase (hexokinase IV) with a high Km (~10 mM) rather than the low-Km hexokinase I found in brain and skeletal muscle?',
          'মস্তিষ্ক ও পেশিতে থাকা স্বল্প-Km হেক্সোকাইনেজের পরিবর্তে যকৃতে কেন উচ্চ-Km (~১০ মিলি মোলার) বিশিষ্ট গ্লুকোকাইনেজ বিদ্যমান থাকে?'
        ),
        answer: l(
          'Glucokinase is not inhibited by glucose 6-phosphate and has a low affinity (high Km) for glucose, ensuring that peripheral tissues like the brain receive priority glucose uptake during fasting, while the liver only clears and stores glucose following carbohydrate-rich meals when portal vein blood glucose is high.',
          'গ্লুকোকাইনেজ গ্লুকোজ ৬-ফসফেট দ্বারা বাধাপ্রাপ্ত হয় না এবং এর গ্লুকোজের প্রতি আসক্তি কম (উচ্চ Km); ফলে উপবাসকালে মস্তিষ্ক অগ্রাধিকার ভিত্তিতে গ্লুকোজ পায়, আর যকৃত কেবল ভারী আহারের পর রক্তে অতিরিক্ত গ্লুকোজ থাকলে তা গ্রহণ করে গ্লাইকোজেন হিসেবে সঞ্চয় করে।'
        ),
      },
      {
        question: l(
          'What are the five essential coenzymes required by the mitochondrial pyruvate dehydrogenase multienzyme complex (PDC)?',
          'মাইটোকন্ড্রিয়াল পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্সের (পিডিসি) জন্য কোন পাঁচটি অপরিহার্য কো-এনজাইম প্রয়োজন?'
        ),
        answer: l(
          'Thiamine pyrophosphate (TPP from vitamin B1), lipoic acid (lipoamide covalently attached to E2 lysine), coenzyme A (CoA from pantothenic acid B5), flavin adenine dinucleotide (FAD from riboflavin B2), and nicotinamide adenine dinucleotide (NAD+ from niacin B3).',
          'থায়ামিন পাইরোফসফেট (টিপিপি, ভিটামিন বি১), লাইপোয়িক অ্যাসিড (ই২ এর লাইসিন-সংযুক্ত লিপোঅ্যামাইড), কো-এনজাইম এ (কোএ, প্যান্টোথেনিক অ্যাসিড বি৫), ফ্ল্যাভিন অ্যাডেনিন ডাইনিউক্লিওটাইড (এফএডি, রিবোফ্লাভিন বি২) এবং নিকোটিনামাইড অ্যাডেনিন ডাইনিউক্লিওটাইড (এনএডি+, নিয়াসিন বি৩)।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'glycolysis-pathway-explorer',
    title: l('Interactive Glycolysis & Pyruvate Oxidation Navigator', 'ইন্টারেক্টিভ গ্লাইকোলাইসিস ও পাইরুভেট জারণ গতিপথ'),
    description: l(
      'Follow the 10 sequential enzymatic steps of the Embden-Meyerhof-Parnas pathway from D-glucose through pyruvate to mitochondrial acetyl-CoA.',
      'ডি-গ্লুকোজ থেকে শুরু করে পাইরুভেট হয়ে মাইটোকন্ড্রিয়াল অ্যাসিটাইল-কোএ পর্যন্ত এমবডেন-মেয়ারহফ-পার্নাস গতিপথের ১০টি ধারাবাহিক ধাপ পরীক্ষা করুন।'
    ),
    disclaimer: l(
      'Interactive biochemical schematic: select any metabolic node to inspect the catalyzing enzyme, stoichiometric energetics, cofactors, and allosteric regulators.',
      'ইন্টারেক্টিভ জৈবরাসায়নিক রূপরেখা: অনুঘটক এনজাইম, শক্তি ফলন, কোফ্যাক্টর এবং অ্যালবস্টেরিক নিয়ন্ত্রক দেখতে যেকোনো নোড নির্বাচন করুন।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'hexokinase-step',
        label: l('Step 1: Hexokinase / Glucokinase (Glucose -> G6P)', 'ধাপ ১: হেক্সোকাইনেজ / গ্লুকোকাইনেজ (গ্লুকোজ -> জি৬পি)'),
        description: l(
          'First ATP investment step. Phosphorylates glucose at the C6 hydroxyl group to trap the polar hexose inside the cell. Strongly exergonic and irreversible.',
          'প্রথম এটিপি বিনিয়োগকারী ধাপ। গ্লুকোজের ৬-নম্বর কার্বনে ফসফেট যুক্ত করে পোলার অণুটিকে কোষের অভ্যন্তরে চিরতরে আটকে ফেলে। অত্যন্ত শক্তিমুক্তকারী ও একমুখী।'
        ),
        details: l(
          'Hexokinase I-III inhibited allosterically by product G6P. Glucokinase (HK IV) in liver and beta-cells has high Km and is regulated by Glucokinase Regulatory Protein (GKRP).',
          'হেক্সোকাইনেজ I-III উৎপাদ জি৬পি দ্বারা বাধাপ্রাপ্ত হয়। যকৃতের গ্লুকোকাইনেজের উচ্চ Km রয়েছে এবং এটি নিউক্লিয়াসে জিকেআরপি প্রোটিন দ্বারা নিয়ন্ত্রিত থাকে।'
        ),
        sectionId: 'mechanism',
        color: '#f97316',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'pfk1-step',
        label: l('Step 3: Phosphofructokinase-1 (F6P -> F1,6BP)', 'ধাপ ৩: ফসফোফ্রুক্টোকাইনেজ-১ (এফ৬পি -> এফ১,৬বিপি)'),
        description: l(
          'The primary committed step and master valve of glycolysis. Consumes the second ATP to produce a symmetrical bisphosphorylated hexose ready for cleavage.',
          'গ্লাইকোলাইসিসের প্রধান প্রতিশ্রুতিবদ্ধ ধাপ ও নিয়ন্ত্রক ভালভ। দ্বিতীয় এটিপি খরচ করে একটি প্রতিসম বিসফসফরাইলেটেড শর্করা তৈরি করে যা পরবর্তী ভাঙনের জন্য প্রস্তুত।'
        ),
        details: l(
          'Inhibited allosterically by high ATP, citrate, and acidic pH (H+). Potently activated by AMP, ADP, and fructose 2,6-bisphosphate (F-2,6-BP).',
          'উচ্চ এটিপি, সাইট্রেট এবং অম্লীয় pH (এইচ+) দ্বারা বাধাপ্রাপ্ত হয়। এএমপি, এডিপি এবং ফ্রুক্টোজ ২,৬-বিসফসফেট দ্বারা প্রচণ্ডভাবে উদ্দীপিত হয়।'
        ),
        sectionId: 'mechanism',
        color: '#ea580c',
        svgCoords: { x: 25, y: 95, width: 310, height: 48 },
      },
      {
        id: 'gapdh-step',
        label: l('Step 6: GAPDH (GAP -> 1,3-Bisphosphoglycerate)', 'ধাপ ৬: গ্যাপডিএইচ (গ্যাপ -> ১,৩-বিসফসফোগ্লিসারেট)'),
        description: l(
          'The primary oxidative and energy-conserving step. Oxidizes glyceraldehyde 3-phosphate using inorganic phosphate (Pi) to produce high-energy 1,3-BPG and NADH.',
          'প্রধান জারণ ও শক্তি সঞ্চয়কারী ধাপ। অজৈব ফসফেট (পিআই) ব্যবহার করে গ্লিসারালডিহাইড ৩-ফসফেটকে জারিত করে উচ্চ-শক্তি ১,৩-বিপিজি এবং এনএডিএইচ তৈরি করে।'
        ),
        details: l(
          'Requires continuous oxidized NAD+ supply. Inhibited by heavy metals and iodoacetate. NADH produced feeds mitochondrial electron transport.',
          'অবিরাম জারিত এনএডি+ সরবরাহ প্রয়োজন। ভারী ধাতু এবং আয়োডোঅ্যাসিটেট দ্বারা বাধাপ্রাপ্ত হয়। উৎপন্ন এনএডিএইচ মাইটোকন্ড্রিয়াল শ্বসনে শক্তি যোগায়।'
        ),
        sectionId: 'structure',
        color: '#eab308',
        svgCoords: { x: 25, y: 155, width: 310, height: 48 },
      },
      {
        id: 'pyruvate-kinase-step',
        label: l('Step 10: Pyruvate Kinase (PEP -> Pyruvate)', 'ধাপ ১০: পাইরুভেট কাইনেজ (পিইপি -> পাইরুভেট)'),
        description: l(
          'Second substrate-level phosphorylation step. Transfers high-energy phosphate from phosphoenolpyruvate directly to ADP, producing ATP and pyruvate.',
          'দ্বিতীয় সাবস্ট্রেট-স্তরের ফসফরাইলেশন ধাপ। ফসফোএনলপাইরুভেট থেকে সরাসরি এডিপিতে ফসফেট স্থানান্তর করে এটিপি এবং পাইরুভেট তৈরি করে।'
        ),
        details: l(
          'Activated by feedforward regulator Fructose 1,6-bisphosphate. Inhibited by ATP, acetyl-CoA, and alanine. Hepatic isozyme phosphorylated and inactivated by PKA.',
          'ফিডফরোয়ার্ড নিয়ন্ত্রক ফ্রুক্টোজ ১,৬-বিসফসফেট দ্বারা সক্রিয় হয়। এটিপি ও অ্যালানিন দ্বারা অবদমিত হয়। যকৃতের এনজাইমটি গ্লুকাগন-পিকেএ দ্বারা নিষ্ক্রিয় হয়।'
        ),
        sectionId: 'mechanism',
        color: '#16a34a',
        svgCoords: { x: 25, y: 215, width: 310, height: 48 },
      },
      {
        id: 'pdc-step',
        label: l('Pyruvate Dehydrogenase Complex (Pyruvate -> Acetyl-CoA)', 'পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স (পাইরুভেট -> অ্যাসিটাইল-কোএ)'),
        description: l(
          'Mitochondrial gatekeeper. Irreversible oxidative decarboxylation of pyruvate yielding acetyl-CoA, CO2, and NADH. Couples glycolysis directly to the Krebs cycle.',
          'মাইটোকন্ড্রিয়াল প্রবেশদ্বার। পাইরুভেটের একমুখী জারণ ও ডিকার্বক্সিলেশনে অ্যাসিটাইল-কোএ, কার্বন ডাই-অক্সাইড এবং এনএডিএইচ উৎপন্ন করে গ্লাইকোলাইসিসকে ক্রিয়েবস চক্রের সাথে যুক্ত করে।'
        ),
        details: l(
          'Contains 3 enzymes (E1, E2, E3) and 5 cofactors (TPP, lipoate, CoA, FAD, NAD+). Inactivated by PDK phosphorylation; activated by PDP phosphatase and Ca2+.',
          '৩টি এনজাইম এবং ৫টি কোফ্যাক্টর বিশিষ্ট। পিডিকে ফসফরাইলেশনে নিষ্ক্রিয় এবং পিডিপি ফসফাটেজ ও ক্যালসিয়াম আয়ন দ্বারা সক্রিয় হয়।'
        ),
        sectionId: 'integration',
        color: '#0284c7',
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
          heading: l('Introduction: Glycolysis as the Universal Glucose Highway', 'ভূমিকা: সর্বজনীন গ্লুকোজ বিপাকীয় পথ হিসেবে গ্লাইকোলাইসিস'),
          paragraphs: [
            l(
              'Glycolysis is the ancient and universal metabolic pathway found in nearly every living human cell. Occurring exclusively within the aqueous cytosol, it converts one six-carbon molecule of glucose into two three-carbon molecules of pyruvate while conserving chemical energy in the form of adenosine triphosphate (ATP) and reduced nicotinamide adenine dinucleotide (NADH).',
              'গ্লাইকোলাইসিস হলো মানবদেহের প্রায় প্রতিটি জীবকোষে বিদ্যমান সর্বজনীন প্রাচীন বিপাকীয় পথ। জলীয় সাইটোসোলে সংঘটিত এই প্রক্রিয়ায় এক অণু ছয়-কার্বন বিশিষ্ট গ্লুকোজ ভেঙে দুই অণু তিন-কার্বন বিশিষ্ট পাইরুভেটে পরিণত হয়, এবং একই সাথে রাসায়নিক শক্তি হিসেবে অ্যাডেনোসিন ট্রাইফসফেট (এটিপি) ও বিজারিত নিকোটিনামাইড অ্যাডেনিন ডাইনিউক্লিওটাইড (এনএডিএইচ) উৎপন্ন হয়।'
            ),
            l(
              'The pathway is organized into two distinct physiological phases: the preparatory phase, during which two molecules of ATP are invested to activate and cleave the glucose ring, and the payoff phase, during which four molecules of ATP are generated through direct substrate-level phosphorylation, resulting in a net yield of two ATP and two NADH per glucose consumed.',
              'সম্পূর্ণ পথটি দুটি স্পষ্ট শারীরবৃত্তীয় পর্যায়ে বিভক্ত: প্রাথমিক বিনিয়োগ পর্যায়—যেখানে গ্লুকোজ বলয়কে সক্রিয় ও ভাঙার জন্য দুই অণু এটিপি ব্যয় করা হয়, এবং শক্তি উৎপাদন পর্যায়—যেখানে সরাসরি সাবস্ট্রেট-স্তরের ফসফরাইলেশনের মাধ্যমে চার অণু এটিপি উৎপন্ন হয়, যার ফলে প্রতি গ্লুকোজে নিট দুটি এটিপি এবং দুটি এনএডিএইচ অর্জিত হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Ten Enzymatic Steps: From Hexose to Trioses', 'দশটি এনজাইমীয় ধাপ: হেক্সোজ থেকে ট্রায়োজ শর্করার রূপান্তর'),
          paragraphs: [
            l(
              'In the preparatory phase, glucose is phosphorylated by hexokinase to glucose 6-phosphate, isomerized by phosphohexose isomerase to fructose 6-phosphate, and phosphorylated a second time by phosphofructokinase-1 (PFK-1) to produce fructose 1,6-bisphosphate. Aldolase then cleaves this hexose into two interconvertible three-carbon trioses: dihydroxyacetone phosphate (DHAP) and glyceraldehyde 3-phosphate (GAP).',
              'প্রাথমিক পর্যায়ে হেক্সোকাইনেজ দ্বারা গ্লুকোজ ফসফরাইলেটেড হয়ে গ্লুকোজ ৬-ফসফেটে পরিণত হয়, যা আইসোমারেজ দ্বারা ফ্রুক্টোজ ৬-ফসফেটে রূপান্তরিত হয় এবং পিএফকে-১ দ্বারা দ্বিতীয়বার ফসফরাইলেটেড হয়ে ফ্রুক্টোজ ১,৬-বিসফসফেট তৈরি করে। অ্যালডোলেজ এই অণুটিকে ভেঙে দুটি ট্রায়োজ শর্করা তৈরি করে: ডাইহাইড্রক্সিঅ্যাসিটোন ফসফেট এবং গ্লিসারালডিহাইড ৩-ফসফেট।'
            ),
            l(
              'Triose phosphate isomerase converts DHAP to GAP, channeling both halves of glucose down the payoff phase. Glyceraldehyde 3-phosphate dehydrogenase (GAPDH) oxidizes GAP and attaches inorganic phosphate to form 1,3-bisphosphoglycerate and NADH. Subsequent steps catalyzed by phosphoglycerate kinase, phosphoglycerate mutase, enolase, and pyruvate kinase generate two ATP molecules per triose, producing pyruvate.',
              'ট্রায়োজ ফসফেট আইসোমারেজ ডিএইচএপি-কে গ্যাপে রূপান্তরিত করে উভয় অংশকে শক্তি উৎপাদন পর্যায়ে পাঠায়। গ্যাপডিএইচ এনজাইম জারণ ঘটিয়ে উচ্চ-শক্তি ১,৩-বিসফসফোগ্লিসারেট ও এনএডিএইচ তৈরি করে। পরবর্তী ধাপে ফসফোগ্লিসারেট কাইনেজ, মিউটেজ, ইনোলেজ এবং পাইরুভেট কাইনেজ এনজাইমের মাধ্যমে প্রতি ট্রায়োজে দুটি করে এটিপি উৎপন্ন হয়ে পাইরুভেটে রূপান্তরিত হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Key Regulatory Checkpoints: Gatekeepers of Glycolysis', 'প্রধান নিয়ন্ত্রণ ফটক: গ্লাইকোলাইসিসের নিয়ন্ত্রক এনজাইম'),
          paragraphs: [
            l(
              'Glycolysis is governed by three physiologically irreversible enzymatic reactions characterized by large negative free energy drops: hexokinase (Step 1), phosphofructokinase-1 (Step 3), and pyruvate kinase (Step 10). These three non-equilibrium reactions prevent the pathway from running in reverse and serve as the critical allosteric gates that match fuel breakdown to cellular energy demand.',
              'গ্লাইকোলাইসিস মূলত তিনটি একমুখী এনজাইমীয় ধাপ দ্বারা নিয়ন্ত্রিত হয় যেগুলোতে প্রচুর মুক্ত শক্তি নির্গত হয়: হেক্সোকাইনেজ (ধাপ ১), ফসফোফ্রুক্টোকাইনেজ-১ (ধাপ ৩) এবং পাইরুভেট কাইনেজ (ধাপ ১০)। এই তিনটি অসম বিক্রিয়া সম্পূর্ণ গতিপথটিকে উল্টো দিকে চলতে বাধা দেয় এবং কোষের শক্তির চাহিদার সাথে জ্বালানি পোড়ানোর হার সুষমভাবে সামঞ্জস্যপূর্ণ রাখে।'
            ),
            l(
              'Phosphofructokinase-1 (PFK-1) is the master control valve of glycolysis. High concentrations of ATP and citrate bind allosteric sites on PFK-1 to downregulate its activity when cellular energy is abundant. Conversely, when ATP is depleted, accumulating AMP and fructose 2,6-bisphosphate bind the enzyme to overcome ATP inhibition, accelerating glycolytic throughput up to a hundredfold.',
              'ফসফোফ্রুক্টোকাইনেজ-১ (পিএফকে-১) হলো গ্লাইকোলাইসিসের প্রধান নিয়ন্ত্রক ভালভ। কোষে প্রচুর শক্তি থাকলে অতিরিক্ত এটিপি এবং সাইট্রেট এই এনজাইমকে অবদমিত করে অপ্রয়োজনীয় জ্বালানি অপচয় বন্ধ করে। পক্ষান্তরে শক্তির ঘাটতি দেখা দিলে এএমপি এবং ফ্রুক্টোজ ২,৬-বিসফসফেট এনজাইমটিকে দারুণভাবে উদ্দীপিত করে জ্বালানি প্রবাহ শতগুণ পর্যন্ত বাড়িয়ে দেয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Fates of Pyruvate: Anaerobic Lactate vs Mitochondrial Entry', 'পাইরুভেটের পরিণতি: অবাত ল্যাকটেট বনাম মাইটোকন্ড্রিয়াল প্রবেশ'),
          paragraphs: [
            l(
              'The fate of pyruvate depends upon tissue oxygen availability and mitochondrial competence. In tissues lacking mitochondria (such as mature erythrocytes) or in skeletal muscle during intense sprint exercise exceeding cardiovascular oxygen delivery, lactate dehydrogenase reduces pyruvate to L-lactate, consuming NADH to regenerate oxidized NAD+ required to maintain continuous glycolytic flux.',
              'পাইরুভেটের ভবিষ্যৎ নির্ভর করে কোষে অক্সিজেনের উপস্থিতি এবং মাইটোকন্ড্রিয়ার সক্ষমতার ওপর। লোহিত রক্তকণিকার মতো মাইটোকন্ড্রিয়াহীন কোষে অথবা তীব্র ব্যায়ামের সময় পেশিকলায় ল্যাকটেট ডিহাইড্রোজিনেজ পাইরুভেটকে এল-ল্যাকটেটে বিজারিত করে, যা এনএডিএইচ ব্যবহার করে সাইটোসোলিক এনএডি+ পুনরুৎপাদন নিশ্চিত করে গ্লাইকোলাইসিসকে সচল রাখে।'
            ),
            l(
              'Under well-oxygenated conditions, pyruvate is transported across the inner mitochondrial membrane by the mitochondrial pyruvate carrier (MPC). Once inside the mitochondrial matrix, the pyruvate dehydrogenase complex (PDC) catalyzes the irreversible oxidative decarboxylation of pyruvate, producing acetyl-CoA, NADH, and carbon dioxide, directly feeding the citric acid cycle.',
              'পর্যাপ্ত অক্সিজেনযুক্ত স্বাভাবিক অবস্থায় পাইরুভেট মাইটোকন্ড্রিয়াল ক্যারিয়ার (এমপিসি) দ্বারা অন্তঃমাইটোকন্ড্রিয়াল ঝিল্লি অতিক্রম করে ম্যাট্রিক্সে প্রবেশ করে। সেখানে পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স (পিডিসি) একমুখী জারণ ঘটিয়ে অ্যাসিটাইল-কোএ, এনএডিএইচ এবং কার্বন ডাই-অক্সাইড তৈরি করে যা সাইট্রিক অ্যাসিড চক্রে প্রবেশ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Reasoning: Red Blood Cell Energy Survival', 'মৌলিক যুক্তি: লোহিত রক্তকণিকার শক্তি টিকে থাকার কৌশল'),
          paragraphs: [
            l(
              'Mature human erythrocytes possess no nuclei, ribosomes, or mitochondria; consequently, they rely 100 percent upon anaerobic glycolysis for cellular energy. The ATP generated by substrate-level phosphorylation is dedicated to running the Na+/K+-ATPase pump to preserve cell volume, maintain biconcave membrane deformability, and generate 2,3-bisphosphoglycerate (2,3-BPG) to modulate hemoglobin oxygen affinity.',
              'পরিণত লোহিত রক্তকণিকায় কোনো নিউক্লিয়াস বা মাইটোকন্ড্রিয়া না থাকায় তারা সম্পূর্ণভাবে সাইটোসোলিক অ্যানেরোবিক গ্লাইকোলাইসিসের ওপর নির্ভরশীল। সাবস্ট্রেট-স্তরের ফসফরাইলেশন থেকে প্রাপ্ত এটিপি Na+/K+-ATPase পাম্প চালিয়ে কোষের আয়তন রক্ষা করে, ঝিল্লির নমনীয়তা বজায় রাখে এবং হিমোগ্লোবিনের অক্সিজেন ছাড়ার ক্ষমতা নিয়ন্ত্রণকারী ২,৩-বিসফসফোগ্লিসারেট তৈরি করে।'
            ),
          ],
          bullets: [
            l('Erythrocyte energy failure precipitates cell swelling, membrane rigidity, and premature splenic hemolysis.', 'লোহিত রক্তকণিকার শক্তি উৎপাদন ব্যাহত হলে কোষ ফুলে ওঠে, ঝিল্লি শক্ত হয়ে যায় এবং প্লীহায় অকালে ভেঙে রক্তাল্পতা দেখা দেয়।'),
            l('Lactate produced by erythrocytes is carried to the liver for gluconeogenesis via the Cori cycle.', 'লোহিত রক্তকণিকায় উৎপাদিত ল্যাকটেট রক্তপ্রবাহের মাধ্যমে যকৃতে গিয়ে কোরি চক্রের সাহায্যে পুনরায় গ্লুকোজে রূপান্তরিত হয়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Net Reaction Stoichiometry', 'মূল শিক্ষা ও সামগ্রিক বিক্রিয়া সমীকরণ'),
          paragraphs: [
            l(
              'Glycolysis converts 1 glucose into 2 pyruvate, yielding a net 2 ATP and 2 NADH. Its flux is primarily regulated at PFK-1 by energy charge and hormonal signaling via fructose 2,6-bisphosphate. Under anaerobic conditions, lactate dehydrogenase regenerates NAD+; under aerobic conditions, pyruvate enters the mitochondria to be irreversibly converted to acetyl-CoA by the pyruvate dehydrogenase complex.',
              'গ্লাইকোলাইসিস ১টি গ্লুকোজ ভেঙে ২টি পাইরুভেট, ২টি এটিপি এবং ২টি এনএডিএইচ তৈরি করে। এর গতি মূলত পিএফকে-১ এনজাইমে শক্তি আধান এবং ফ্রুক্টোজ ২,৬-বিসফসফেট দ্বারা নিয়ন্ত্রিত হয়। অবাত অবস্থায় ল্যাকটেট ডিহাইড্রোজিনেজ এনএডি+ পুনরুৎপাদন করে, আর সবাত অবস্থায় মাইটোকন্ড্রিয়াল পিডিসি পাইরুভেটকে একমুখীভাবে অ্যাসিটাইল-কোএ-তে রূপান্তর করে।'
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
          heading: l('Enzymatic Mechanisms & Energetics of the Preparatory Phase', 'প্রাথমিক বিনিয়োগ পর্যায়ের এনজাইমীয় কার্যপদ্ধতি ও শক্তিবিজ্ঞান'),
          paragraphs: [
            l(
              'The preparatory phase of glycolysis consumes two high-energy phosphate equivalents to destabilize the hexose ring and commit it to cleavage. Step 1 (Hexokinase, EC 2.7.1.1) utilizes Mg-ATP to phosphorylate D-glucose at C6 (standard delta-G-prime-zero = -16.7 kJ/mol). The magnesium ion chelates the negative charges of ATP, shielding the beta and gamma phosphates and orienting the gamma-phosphate for nucleophilic attack by the glucose C6 hydroxyl oxygen.',
              'গ্লাইকোলাইসিসের প্রাথমিক বিনিয়োগ পর্যায়ে দুটি উচ্চ-শক্তি ফসফেট ব্যয় করে হেক্সোজ বলয়কে অস্থিতিশীল ও ভাঙনের জন্য প্রস্তুত করা হয়। ১ম ধাপে হেক্সোকাইনেজ ম্যাগনেসিয়াম-এটিপি ব্যবহার করে গ্লুকোজের ৬-নম্বর কার্বনে ফসফেট যুক্ত করে (আদর্শ মুক্ত শক্তি = -১৬.৭ কিলোজুল/মোল)। ম্যাগনেসিয়াম আয়ন এটিপির ঋণাত্মক চার্জ ঢেকে রেখে গামা-ফসফেটকে গ্লুকোজের হাইড্রোক্সিল গ্রুপ দ্বারা আক্রমণের জন্য সঠিকভাবে বিন্যস্ত করে।'
            ),
            l(
              'Step 2 (Phosphohexose isomerase, EC 5.3.1.9) isomerizes glucose 6-phosphate (an aldose) into fructose 6-phosphate (a ketose) via an enediol intermediate. This isomerization shifts the carbonyl oxygen to C2, which is essential because it prepares the molecule for phosphorylation at C1 by PFK-1 and positions the bond between C3 and C4 for symmetrical retro-aldol cleavage in Step 4.',
              '২য় ধাপে ফসফোহেক্সোজ আইসোমারেজ একটি ইনডিওল মধ্যবর্তী যৌগের মাধ্যমে গ্লুকোজ ৬-ফসফেটকে ফ্রুক্টোজ ৬-ফসফেটে রূপান্তরিত করে। এই আইসোমারাইজেশন কার্বনিল অক্সিজেনকে ২-নম্বর কার্বনে স্থানান্তরিত করে, যা পিএফকে-১ দ্বারা ১-নম্বর কার্বনে দ্বিতীয় ফসফেট যুক্ত করতে এবং পরবর্তীতে অ্যালডোলেজ দ্বারা ৩ ও ৪-নম্বর কার্বনের মধ্যবর্তী বন্ধনটি সমান দুই ভাগে ভাঙতে অপরিহার্য ভূমিকা পালন করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Payoff Phase & Substrate-Level Phosphorylation Chemistry', 'শক্তি উৎপাদন পর্যায় ও সাবস্ট্রেট-স্তরের ফসফরাইলেশনের রসায়ন'),
          paragraphs: [
            l(
              'Step 6 (GAPDH, EC 1.2.1.12) is the centerpiece of glycolytic energy conservation. The enzyme active site contains an essential cysteine sulfhydryl group that attacks the GAP aldehyde carbon to form a covalent hemithioacetal adduct. Oxidation by active-site bound NAD+ yields a high-energy thioester intermediate and NADH. Inorganic phosphate (Pi) then attacks the thioester to release 1,3-bisphosphoglycerate, conserving the oxidation energy as an acyl phosphate bond.',
              '৬ষ্ঠ ধাপে গ্যাপডিএইচ এনজাইমটি শক্তি সংরক্ষণের মূল কেন্দ্র হিসেবে কাজ করে। এনজাইমের সক্রিয় সাইটে থাকা সিস্টাইন সালফহাইড্রিল গ্রুপ অ্যালডিহাইড কার্বনকে আক্রমণ করে কোভ্যালেন্ট হেমিথায়োঅ্যাসিটাল গঠন করে। আবদ্ধ এনএডি+ দ্বারা জারিত হয়ে একটি উচ্চ-শক্তি থায়োএস্টার এবং এনএডিএইচ তৈরি হয়। এরপর অজৈব ফসফেট থায়োএস্টারকে আক্রমণ করে ১,৩-বিসফসফোগ্লিসারেট তৈরি করে জারণের শক্তি সংরক্ষণ করে।'
            ),
            l(
              'In Step 7, phosphoglycerate kinase transfers the acyl phosphate of 1,3-BPG (transfer potential -49.3 kJ/mol) to ADP, generating 3-phosphoglycerate and the first ATP (delta-G-prime-zero = -18.5 kJ/mol). After mutase and enolase actions form phosphoenolpyruvate (transfer potential -61.9 kJ/mol), pyruvate kinase in Step 10 drives the second substrate-level phosphorylation to synthesize the second ATP and pyruvate.',
              '৭ম ধাপে ফসফোগ্লিসারেট কাইনেজ ১,৩-বিপিজি-এর উচ্চ-শক্তি ফসফেট এডিপিতে স্থানান্তর করে ৩-ফসফোগ্লিসারেট এবং প্রথম এটিপি তৈরি করে। এরপর মিউটেজ ও ইনোলেজের মাধ্যমে ফসফোএনলপাইরুভেট উৎপন্ন হলে ১০ম ধাপে পাইরুভেট কাইনেজ দ্বিতীয় সাবস্ট্রেট-স্তরের ফসফরাইলেশন ঘটিয়ে পাইরুভেট ও দ্বিতীয় এটিপি তৈরি করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Tandem Enzyme PFK-2/FBPase-2 and Hormonal Regulation', 'দ্বি-কার্যকরী এনজাইম পিএফকে-২/এফবিপিএজ-২ এবং হরমোনীয় নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'PFK-1 is allosterically regulated by fructose 2,6-bisphosphate (F-2,6-BP), a signaling metabolite synthesized from fructose 6-phosphate by 6-phosphofructo-2-kinase (PFK-2) and hydrolyzed by fructose 2,6-bisphosphatase (FBPase-2). These two opposing enzymatic activities reside on a single homodimeric bifunctional polypeptide chain whose regulatory domain is governed by phosphorylation.',
              'পিএফকে-১ প্রধানত ফ্রুক্টোজ ২,৬-বিসফসফেট (এফ-২,৬-বিপি) দ্বারা নিয়ন্ত্রিত হয়, যা পিএফকে-২ দ্বারা সংশ্লেষিত এবং এফবিপিএজ-২ দ্বারা আর্দ্রবিশ্লেষিত হয়। এই দুটি বিপরীতমুখী অনুঘটন ক্ষমতা একটি একক পলিপেপটাইড চেইনের ওপর অবস্থিত, যা হরমোনীয় ফসফরাইলেশনের মাধ্যমে দারুণভাবে নিয়ন্ত্রিত হয়।'
            ),
            l(
              'In hepatocytes, glucagon increases cyclic AMP, activating protein kinase A (PKA), which phosphorylates Ser32 on the liver PFK-2/FBPase-2 polypeptide. Phosphorylation inactivates the PFK-2 domain and activates the FBPase-2 domain, causing cellular F-2,6-BP levels to fall. Deprived of its potent activator, PFK-1 shuts down, halting hepatic glycolysis and redirecting carbon flux into gluconeogenesis to maintain systemic blood glucose.',
              'যকৃতে গ্লুকাগন হরমোন সাইক্লিক এএমপি বাড়িয়ে প্রোটিন কাইনেজ এ (পিকেএ) সক্রিয় করে, যা পিএফকে-২/এফবিপিএজ-২ এর সেরিন-৩২ অ্যামিনো অ্যাসিডকে ফসফরাইলেটেড করে। এই ফসফরাইলেশনে পিএফকে-২ অংশটি নিষ্ক্রিয় এবং এফবিপিএজ-২ অংশটি সক্রিয় হয়ে এফ-২,৬-বিপি হ্রাস করে। ফলে পিএফকে-১ বন্ধ হয়ে যকৃতের গ্লাইকোলাইসিস থেমে যায় এবং রক্তে গ্লুকোজ বজায় রাখতে গ্লুকোনিওজেনেসিস শুরু হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Mitochondrial Pyruvate Dehydrogenase: Structure & Phosphorylation', 'মাইটোকন্ড্রিয়াল পাইরুভেট ডিহাইড্রোজিনেজ: গঠন ও ফসফরাইলেশন'),
          paragraphs: [
            l(
              'The mammalian pyruvate dehydrogenase complex (PDC) is an organized multi-megadalton machine located in the mitochondrial matrix. It consists of multiple copies of three distinct core enzymes: pyruvate dehydrogenase (E1, 60 alpha/beta dimers), dihydrolipoyl transacetylase (E2, 60-mer core), and dihydrolipoyl dehydrogenase (E3, 12 homodimers), organized around an E2-binding protein (E3BP) scaffolding core.',
              'স্তন্যপায়ীদের পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স (পিডিসি) হলো মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে অবস্থিত একটি বিশালাকার মাল্টি-এনজাইম কাঠামো। এতে তিনটি মূল এনজাইমের একাধিক অনুলিপি থাকে: পাইরুভেট ডিহাইড্রোজিনেজ (ই১, ৬০টি ডাইমার), ডাইহাইড্রোলিপোয়েল ট্রান্সঅ্যাসিটাইলেজ (ই২, ৬০-মার কেন্দ্র) এবং ডাইহাইড্রোলিপোয়েল ডিহাইড্রোজিনেজ (ই৩, ১২টি ডাইমার), যা ই৩বিপি স্ক্যাফোল্ডিং প্রোটিনের চারপাশে সুসংগঠিত থাকে।'
            ),
            l(
              'Regulation of PDC is mediated by dedicated PDC kinases (PDK1-4) and PDC phosphatases (PDP1-2). PDK phosphorylates specific serine residues on the E1-alpha subunit (primarily Ser264), rendering the complex completely inactive. High ratios of NADH/NAD+, acetyl-CoA/CoA, and ATP/ADP allosterically activate PDK. Conversely, PDP dephosphorylates E1-alpha to reactivate the complex, stimulated by mitochondrial Ca2+ during muscular workload.',
              'পিডিসি মূলত পিডিকে কাইনেজ এবং পিডিপি ফসফাটেজ দ্বারা নিয়ন্ত্রিত হয়। পিডিকে এনজাইমটি ই১-আলফা সাব-ইউনিটের নির্দিষ্ট সেরিনকে ফসফরাইলেটেড করে সম্পূর্ণ নিষ্ক্রিয় করে দেয়। অতিরিক্ত এনএডিএইচ, অ্যাসিটাইল-কোএ এবং এটিপি পিডিকে-কে সক্রিয় করে। অন্যদিকে পেশি সংকোচনের সময় মাইটোকন্ড্রিয়ায় ক্যালসিয়াম আয়ন বৃদ্ধি পেলে পিডিপি এনজাইমটিকে ডিফসফরাইলেটেড করে পুনরায় পূর্ণ সক্রিয় করে তোলে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Biochemical Diagnostics: Pyruvate Kinase Deficiency & Hemolysis', 'জৈবরাসায়নিক ডায়াগনস্টিকস: পাইরুভেট কাইনেজ ঘাটতি ও হিমোলাইসিস'),
          paragraphs: [
            l(
              'Autosomal recessive deficiency of erythrocyte pyruvate kinase (PKLR gene) is the second most common cause of hereditary non-spherocytic hemolytic anemia worldwide. Because red blood cells lack mitochondria, PK deficiency reduces ATP production by 50 percent, crippling the Na+/K+-ATPase cation pump and allowing intracellular potassium loss, cellular dehydration, echinocyte transformation, and splenic destruction.',
              'লোহিত রক্তকণিকার পাইরুভেট কাইনেজের (পিকেএলআর জিন) জন্মগত ঘাটতি হলো বংশগত নন-স্ফেরোসাইটিক হেমোলাইটিক অ্যানিমিয়ার দ্বিতীয় প্রধান কারণ। মাইটোকন্ড্রিয়া না থাকায় পিকে ঘাটতিতে এটিপি উৎপাদন অর্ধেক হ্রাস পায়, যা Na+/K+-ATPase পাম্পকে বিকল করে কোষীয় পানিশূন্যতা ও আকার বিকৃতি ঘটায় এবং প্লীহায় অকালে ধ্বংস হয়ে রক্তাল্পতা তৈরি করে।'
            ),
          ],
          bullets: [
            l('Upstream glycolytic intermediates (2,3-BPG and PEP) accumulate markedly in PK-deficient erythrocytes.', 'পিকে ঘাটতিযুক্ত লোহিত রক্তকণিকায় পূর্ববর্তী মধ্যবর্তী যৌগসমূহ (যেমন ২,৩-বিপিজি এবং পিইপি) অস্বাভাবিক মাত্রায় বৃদ্ধি পায়।'),
            l('High 2,3-BPG shifts the oxygen-hemoglobin dissociation curve to the right, paradoxically improving peripheral oxygen delivery in affected patients.', 'উচ্চ ২,৩-বিপিজি অক্সিজেন-হিমোগ্লোবিন ডিসোসিয়েশন কার্ভকে ডানদিকে সরিয়ে দেয়, যা রোগীদের টিস্যুতে অক্সিজেন সরবরাহে তুলনামূলক কিছুটা স্বস্তি প্রদান করে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Master Regulatory Principles of Glycolysis', 'একাডেমিক সংশ্লেষ: গ্লাইকোলাইসিসের প্রধান নিয়ন্ত্রক নীতি'),
          paragraphs: [
            l(
              'Glycolysis is a tightly coordinated pathway with substrate-level phosphorylation coupling carbon oxidation to ATP generation. Hexokinase, PFK-1, and pyruvate kinase establish irreversible thermodynamic gates, with PFK-1 responsive to energy charge via AMP and hormonal cascades via F-2,6-BP. Pyruvate serves as the vital branch point: reduced to lactate in hypoxia or oxidatively decarboxylated by mitochondrial PDC for citric acid cycle oxidation.',
              'গ্লাইকোলাইসিস হলো একটি চমৎকার সমন্বিত পথ যেখানে সাবস্ট্রেট-স্তরের ফসফরাইলেশনের মাধ্যমে কার্বনের জারণ সরাসরি এটিপি উৎপাদনের সাথে যুক্ত থাকে। হেক্সোকাইনেজ, পিএফকে-১ এবং পাইরুভেট কাইনেজ একমুখী তাপগতিবিদ্যাগত ফটক হিসেবে কাজ করে, যেখানে পিএফকে-১ শক্তি আধান এবং হরমোনীয় সংকেত সমন্বয় করে। হাইপোক্সিয়ায় পাইরুভেট ল্যাকটেটে পরিণত হয় এবং স্বাভাবিক অবস্থায় মাইটোকন্ড্রিয়াল পিডিসি দ্বারা জারিত হয়ে ক্রিয়েবস চক্রে যায়।'
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
          heading: l('Oncometabolism: The Warburg Effect & Pyruvate Kinase M2 Isozyme', 'অনকোমেটাবলিজম: ওয়ারবার্গ প্রভাব ও পাইরুভেট কাইনেজ এম২ আইসোজাইম'),
          paragraphs: [
            l(
              'Otto Warburg observed that malignant cancer cells consume glucose at rates ten- to fifty-fold higher than normal differentiated tissues and ferment it to lactate even in the presence of abundant oxygen, a phenomenon known as aerobic glycolysis. This metabolic reprogramming is driven by oncogenes (MYC, hypoxia-inducible factor 1-alpha / HIF-1a, and Akt) that upregulate GLUT1, hexokinase 2, and lactate dehydrogenase A (LDHA).',
              'অটো ওয়ারবার্গ লক্ষ্য করেছিলেন যে ম্যালিগন্যান্ট ক্যান্সার কোষগুলো স্বাভাবিক কোষের তুলনায় দশ থেকে পঞ্চাশ গুণ বেশি হারে গ্লুকোজ গ্রহণ করে এবং প্রচুর অক্সিজেনের উপস্থিতিতেও তা ল্যাকটেটে পরিণত করে, যা অ্যারোবিক গ্লাইকোলাইসিস বা ওয়ারবার্গ প্রভাব নামে পরিচিত। এই বিপাকীয় পুনর্গঠন এমওয়াইসি, এইচআইএফ-১-আলফা এবং অ্যাক্ট অনকোজিন দ্বারা পরিচালিত হয়, যা গ্লুট১ ও হেক্সোকাইনেজ ২ বাড়িয়ে দেয়।'
            ),
            l(
              'Tumors predominantly express the embryonic M2 splice isoform of pyruvate kinase (PKM2), which oscillates between an active tetramer and an inactive dimer. Phosphorylation by tyrosine kinases maintains PKM2 as a low-activity dimer, creating a metabolic bottleneck that backs up glycolytic intermediates. Diverting these upstream intermediates into the pentose phosphate pathway and serine biosynthesis generates the ribose, amino acids, and NADPH necessary for rapid cell division.',
              'টিউমার কোষে মূলত পাইরুভেট কাইনেজের ভ্রূণীয় এম২ আইসোফর্ম (পিকেএম২) প্রকাশিত হয়, যা সক্রিয় টেট্রামার এবং নিষ্ক্রিয় ডাইমারের মধ্যে পরিবর্তিত হয়। টাইরোসিন কাইনেজ দ্বারা ফসফরাইলেটেড হয়ে পিকেএম২ স্বল্প-সক্রিয় ডাইমার হিসেবে থাকলে গ্লাইকোলাইসিসের পূর্ববর্তী যৌগগুলো জমে যায় এবং পেন্টোজ ফসফেট ও সেরিন সংশ্লেষে ঘুরে গিয়ে টিউমারের দ্রুত বৃদ্ধির জন্য প্রয়োজনীয় রিবোজ ও এনএডিপিএইচ সরবরাহ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Metabolic Pharmacology: Target Identification & Metformin Mechanism', 'মেটাবলিক ফার্মাকোলজি: লক্ষ্যবস্তু শনাক্তকরণ ও মেটফরমিনের কার্যপদ্ধতি'),
          paragraphs: [
            l(
              'Biguanides, notably metformin, inhibit mitochondrial respiratory Complex I at clinically achievable therapeutic concentrations. The mild impairment of electron transport reduces the proton gradient and lowers mitochondrial ATP synthesis, elevating cytosolic AMP. The resulting surge in AMP directly inhibits adenylate cyclase (blunting glucagon signaling) and allosterically inhibits fructose 1,6-bisphosphatase-1, suppressing excessive hepatic glucose production in type 2 diabetes mellitus.',
              'মেটফরমিনের মতো বাইগুয়ানাইড ওষুধগুলো চিকিৎসাগত মাত্রায় মাইটোকন্ড্রিয়াল শ্বসন কমপ্লেক্স I-কে মৃদুভাবে অবদমিত করে। এই মৃদু বাধার কারণে এটিপি উৎপাদন কিছুটা কমে সাইটোসোলিক এএমপি বৃদ্ধি পায়। বর্ধিত এএমপি সরাসরি অ্যাডেনাইলেট সাইক্লেজকে বাধা দিয়ে গ্লুকাগনের সংকেত কমায় এবং ফ্রুক্টোজ ১,৬-বিসফসফাটেজ-১ কে অবদমিত করে টাইপ ২ ডায়াবেটিসে যকৃতের অতিরিক্ত গ্লুকোজ উৎপাদন বন্ধ করে।'
            ),
          ],
          bullets: [
            l('DCA (dichloroacetate) inhibits PDK, maintaining PDC in its active dephosphorylated state to reverse lactic acidosis.', 'ডিসিএ (ডাইক্লোরোঅ্যাসিটেট) পিডিকে-কে বাধা দিয়ে পিডিসি-কে সক্রিয় রাখে এবং ল্যাকটিক অ্যাসিডোসিস নিয়ন্ত্রণে সহায়তা করে।'),
            l('Fluorodeoxyglucose ([18F]FDG) PET-CT exploits high tumor hexokinase activity to detect occult malignant metastases.', 'ফ্লুরোডিঅক্সিগ্লুকোজ ([18F]FDG) পেট-সিটি ক্যান্সার কোষে হেক্সোকাইনেজের অতিসক্রিয়তাকে কাজে লাগিয়ে টিউমার শনাক্ত করে।'),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An interactive 10-step metabolic pathway diagram illustrating the conversion of glucose to glucose 6-phosphate, fructose 6-phosphate, fructose 1,6-bisphosphate, glyceraldehyde 3-phosphate, 1,3-bisphosphoglycerate, phosphoenolpyruvate, pyruvate, and finally mitochondrial acetyl-CoA.',
      'গ্লুকোজ থেকে শুরু করে গ্লুকোজ ৬-ফসফেট, ফ্রুক্টোজ ৬-ফসফেট, ফ্রুক্টোজ ১,৬-বিসফসফেট, গ্লিসারালডিহাইড ৩-ফসফেট, ১,৩-বিসফসফোগ্লিসারেট, ফসফোএনলপাইরুভেট, পাইরুভেট এবং সবশেষে মাইটোকন্ড্রিয়াল অ্যাসিটাইল-কোএ তৈরির রূপরেখা প্রদর্শনকারী ১০-ধাপের ইন্টারেক্টিভ গ্লাইকোলাইসিস গতিপথ চিত্র।'
    ),
    steps: [
      l('Preparatory Phase: Hexokinase and PFK-1 consume 2 ATP to activate hexose into fructose 1,6-bisphosphate.', 'প্রাথমিক পর্যায়: হেক্সোকাইনেজ ও পিএফকে-১ দুটি এটিপি ব্যয় করে হেক্সোজকে ফ্রুক্টোজ ১,৬-বিসফসফেটে সক্রিয় করে।'),
      l('Aldolase Cleavage: The 6-carbon bisphosphate hexose is split into two 3-carbon triose phosphates (DHAP and GAP).', 'অ্যালডোলেজ ভাঙন: ৬-কার্বনের বিসফসফেট শর্করা দুটি ৩-কার্বনের ট্রায়োজ ফসফেটে (ডিএইচএপি ও গ্যাপ) বিভক্ত হয়।'),
      l('Energy Harvest: GAPDH generates 2 NADH and high-energy 1,3-BPG; PGK and PK synthesize 4 ATP via substrate-level phosphorylation.', 'শক্তি আহরণ: গ্যাপডিএইচ দুটি এনএডিএইচ ও ১,৩-বিপিজি তৈরি করে; পিজিকে ও পিকে সাবস্ট্রেট-স্তরে ৪টি এটিপি সংশ্লেষ করে।'),
      l('Mitochondrial Gateway: Pyruvate enters mitochondria and is irreversibly converted to acetyl-CoA by PDC.', 'মাইটোকন্ড্রিয়াল প্রবেশদ্বার: পাইরুভেট মাইটোকন্ড্রিয়ায় প্রবেশ করে পিডিসি দ্বারা একমুখীভাবে অ্যাসিটাইল-কোএ-তে রূপান্তরিত হয়।'),
    ],
  },
  assessment: {
    question: l(
      'A patient with chronic alcohol use disorder develops severe confusion, ataxia, and ophthalmoplegia (Wernicke encephalopathy). Which metabolic enzyme complex is primarily crippled by the underlying nutritional cofactor deficiency?',
      'দীর্ঘদিনের অ্যালকোহল সেবনকারী একজন রোগীর তীব্র বিভ্রান্তি, চলাফেরায় ভারসাম্যহীনতা ও চক্ষুপেশির পক্ষাঘাত (ওয়ারনিক এনসেফালোপ্যাথি) দেখা দেয়। কোন বিপাকীয় এনজাইম কমপ্লেক্সটি পুষ্টি কোফ্যাক্টরের ঘাটতির কারণে মূলত অচল হয়ে পড়ে?'
    ),
    options: [
      l(
        'Pyruvate dehydrogenase complex, due to severe deficiency of thiamine pyrophosphate (TPP / vitamin B1).',
        'পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স, কারণ এতে থায়ামিন পাইরোফসফেটের (টিপিপি / ভিটামিন বি১) মারাত্মক ঘাটতি ঘটে।'
      ),
      l(
        'Phosphofructokinase-1, due to severe depletion of intracellular cyclic AMP levels.',
        'ফসফোফ্রুক্টোকাইনেজ-১, কারণ কোষে সাইক্লিক এএমপির মাত্রা আশঙ্কাজনকভাবে হ্রাস পায়।'
      ),
      l(
        'Lactate dehydrogenase, due to inability to synthesize coenzyme Q10 in the mitochondrial matrix.',
        'ল্যাকটেট ডিহাইড্রোজিনেজ, কারণ মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে কো-এনজাইম কিউ১০ সংশ্লেষ বন্ধ হয়ে যায়।'
      ),
      l(
        'Glucokinase, due to excess transport of vitamin C into hepatic Kupffer cells.',
        'গ্লুকোকাইনেজ, কারণ যকৃতের কুফার কোষে অতিরিক্ত ভিটামিন সি পরিবাহিত হতে থাকে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Wernicke-Korsakoff syndrome is caused by thiamine (vitamin B1) deficiency, which prevents synthesis of thiamine pyrophosphate (TPP). TPP is the essential prosthetic group of the E1 subunit of the pyruvate dehydrogenase complex and alpha-ketoglutarate dehydrogenase. Without TPP, pyruvate cannot enter the citric acid cycle, starving high-energy neural tissue of ATP and causing neuronal degeneration.',
      'ওয়ারনিক-করসাকফ সিন্ড্রোম থায়ামিন (ভিটামিন বি১) ঘাটতির কারণে ঘটে, যা থায়ামিন পাইরোফসফেট (টিপিপি) সংশ্লেষ বন্ধ করে দেয়। টিপিপি হলো পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্সের ই১ সাব-ইউনিট এবং আলফা-কিটোগ্লুটারেট ডিহাইড্রোজিনেজের অপরিহার্য প্রোস্থেটিক গ্রুপ। টিপিপি ছাড়া পাইরুভেট ক্রিয়েবস চক্রে যেতে পারে না, ফলে মস্তিষ্কের স্নায়ুকোষ এটিপির অভাবে ক্ষতিগ্রস্ত হয়।'
    ),
  },
}
