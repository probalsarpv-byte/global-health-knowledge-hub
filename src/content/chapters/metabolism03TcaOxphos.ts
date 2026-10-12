import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const tcaOxphosRefs = [
  {
    id: 'lehninger-biochem-8e-ch16',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 16: The Citric Acid Cycle',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'lehninger-biochem-8e-ch19',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 19: Oxidative Phosphorylation',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch13',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 13: The Respiratory Chain & Oxidative Phosphorylation",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch18',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 18: Oxidative Phosphorylation',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
]

export const metabolism03TcaOxphosLesson: LessonTopic = {
  id: 'topic.metabolism.tca-oxphos',
  slug: 'tca-oxphos',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('03 · Citric Acid Cycle & Oxidative Phosphorylation', '০৩ · সাইট্রিক অ্যাসিড চক্র ও অক্সিডেটিভ ফসফরাইলেশন'),
  summary: l(
    'Mitochondrial matrix Krebs cycle reactions, anaplerotic refilling, electron transport chain complexes I–IV, proton-motive force generation, F1Fo-ATP synthase rotational catalysis, and respiratory uncoupling.',
    'মাইটোকন্ড্রিয়াল ম্যাট্রিক্স ক্রিয়েবস চক্র, অ্যানাপ্লেরোটিক পুনর্ভরণ, ইলেকট্রন পরিবহন শৃঙ্খল কমপ্লেক্স I–IV, প্রোটন-মোটিভ বল সৃষ্টি, এফ১এফ০-এটিপি সিন্থেজ ঘূর্ণন অনুঘটন এবং শ্বসন আনকপলিং।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Trace the 8 enzymatic reactions of the citric acid cycle in the mitochondrial matrix, accounting for net carbon balance, NADH/FADH2 reducing equivalents, and GTP generation.',
      'মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে সাইট্রিক অ্যাসিড চক্রের ৮টি এনজাইমীয় ধাপ অনুসরণ করতে পারা এবং মোট কার্বন ভারসাম্য, এনএডিএইচ/এফএডিএইচ২ বিজারক এবং জিটিপি উৎপাদন হিসাব করতে পারা।'
    ),
    l(
      'Contrast the flow of electrons through ETC Complexes I, II, III, and IV, explaining how vectorially pumped protons generate the electrochemical proton-motive force across the inner mitochondrial membrane.',
      'ইটিসি কমপ্লেক্স I, II, III এবং IV-এর মধ্য দিয়ে ইলেকট্রন প্রবাহের তুলনামূলক বিশ্লেষণ করতে পারা এবং ভেক্টরিয়ালভাবে পাম্পকৃত প্রোটন কীভাবে অন্তঃমাইটোকন্ড্রিয়াল ঝিল্লির আড়ালে তড়িৎ-রাসায়নিক প্রোটন-মোটিভ বল তৈরি করে তা ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Evaluate the rotational catalytic mechanism of F1Fo-ATP synthase according to the binding change model, and differentiate the physiological mechanisms of respiratory chain inhibitors versus uncouplers.',
      'বাইন্ডিং চেঞ্জ মডেল অনুসারে এফ১এফ০-এটিপি সিন্থেজের ঘূর্ণন অনুঘটন প্রক্রিয়া মূল্যায়ন করতে পারা এবং শ্বসন শৃঙ্খল প্রতিরোধক ও আনকপলারের শারীরবৃত্তীয় প্রভাবের পার্থক্য করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.glycolysis-pyruvate'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics'],
  references: tcaOxphosRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch16', 'harpers-biochem-32e-ch13'],
    structure: ['lehninger-biochem-8e-ch16', 'berg-biochem-9e-ch18'],
    mechanism: ['lehninger-biochem-8e-ch19', 'berg-biochem-9e-ch18'],
    integration: ['harpers-biochem-32e-ch13', 'lehninger-biochem-8e-ch19'],
    practice: ['lehninger-biochem-8e-ch16', 'lehninger-biochem-8e-ch19'],
    takeaways: ['lehninger-biochem-8e-ch16', 'harpers-biochem-32e-ch13'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Citric Acid Cycle as the Metabolic Hub', '১. বিপাকের কেন্দ্রীয় কেন্দ্র হিসেবে সাইট্রিক অ্যাসিড চক্র'), sectionId: 'introduction' },
      { id: 'sec-tca-steps', label: l('2. The Eight Enzymatic Reactions & Anaplerosis', '২. আটটি এনজাইমীয় বিক্রিয়া ও অ্যানাপ্লেরোটিক পুনর্ভরণ'), sectionId: 'structure' },
      { id: 'sec-etc-complexes', label: l('3. Electron Transport Chain Complexes I–IV', '৩. ইলেকট্রন পরিবহন শৃঙ্খল কমপ্লেক্স I–IV'), sectionId: 'mechanism' },
      { id: 'sec-atp-synthase', label: l('4. Chemiosmosis & F1Fo-ATP Synthase Mechanics', '৪. কেমিওসমোসিস ও এফ১এফ০-এটিপি সিন্থেজ মেকানিক্স'), sectionId: 'integration' },
      { id: 'sec-toxicology', label: l('5. Respiratory Toxicology: Inhibitors vs Uncouplers', '৫. শ্বসন বিষতত্ত্ব: প্রতিরোধক বনাম আনকপলার'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Energetic Balance', '৬. শব্দকোষ ও সার্বিক শক্তি ভারসাম্যের সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Isocitrate Dehydrogenase (IDH)', 'আইসোসাইট্রেট ডিহাইড্রোজিনেজ (আইডিএইচ)'),
        definition: l(
          'The primary rate-limiting and committed enzyme of the citric acid cycle, converting isocitrate to alpha-ketoglutarate with generation of the first NADH and release of CO2.',
          'সাইট্রিক অ্যাসিড চক্রের প্রধান হার-নিয়ন্ত্রক ও প্রতিশ্রুতিবদ্ধ এনজাইম, যা আইসোসাইট্রেটকে আলফা-কিটোগ্লুটারেটে রূপান্তরিত করে প্রথম এনএডিএইচ এবং কার্বন ডাই-অক্সাইড তৈরি করে।'
        ),
      },
      {
        term: l('Anaplerotic Reaction', 'অ্যানাপ্লেরোটিক বিক্রিয়া'),
        definition: l(
          'A replenishing chemical reaction that synthesizes and refills citric acid cycle intermediates that have been siphoned off for biosynthetic anabolic pathways, exemplified by pyruvate carboxylase.',
          'একটি পুনর্ভরনকারী রাসায়নিক বিক্রিয়া যা জৈবসংশ্লেষণের জন্য অপসারিত হওয়া সাইট্রিক অ্যাসিড চক্রের মধ্যবর্তী যৌগসমূহকে পুনরায় তৈরি করে ঘাটতি পূরণ করে, যেমন পাইরুভেট কার্বক্সিলেজ।'
        ),
      },
      {
        term: l('Proton-Motive Force (delta-p)', 'প্রোটন-মোটিভ বল (ডেল্টা-পি)'),
        definition: l(
          'The electrochemical potential gradient across the inner mitochondrial membrane generated by proton pumping, comprising a transmembrane electrical potential (delta-Psi) and chemical proton gradient (delta-pH).',
          'প্রোটন পাম্পিং দ্বারা অন্তঃমাইটোকন্ড্রিয়াল ঝিল্লির আড়ালে সৃষ্ট তড়িৎ-রাসায়নিক বিভব, যা ঝিল্লি বৈদ্যুতিক বিভব (ডেল্টা-সাই) এবং রাসায়নিক প্রোটন ঘনত্বের পার্থক্যের (ডেল্টা-পিএইচ) সমন্বয়ে গঠিত।'
        ),
      },
      {
        term: l('Binding Change Mechanism', 'বাইন্ডিং চেঞ্জ মেকানিজম'),
        definition: l(
          'Paul Boyer rotational catalytic model of ATP synthase, wherein rotation of the central gamma stalk forces the three beta catalytic subunits through Open (O), Loose (L), and Tight (T) conformational states.',
          'পল বোয়ার কর্তৃক প্রস্তাবিত এটিপি সিন্থেজের ঘূর্ণন অনুঘটন মডেল, যেখানে কেন্দ্রীয় গামা দণ্ডের ঘূর্ণন তিনটি বিটা অনুঘটক সাব-ইউনিটকে ওপেন (O), লুজ (L) এবং টাইট (T) বিন্যাসের মধ্য দিয়ে পরিচালিত করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Total ATP Yield per Fully Oxidized Molecule of D-Glucose', 'এক অণু ডি-গ্লুকোজের সম্পূর্ণ জারণে মোট এটিপি ফলন হিসাব'),
        steps: [
          l(
            'Step 1: Glycolysis generates 2 net ATP via substrate-level phosphorylation and 2 cytosolic NADH. Using the malate-aspartate shuttle, these 2 NADH enter the mitochondrial matrix to yield approximately 5 ATP (2.5 ATP/NADH).',
            'ধাপ ১: গ্লাইকোলাইসিসে সাবস্ট্রেট-স্তরে নিট ২ এটিপি এবং ২ সাইটোসোলিক এনএডিএইচ উৎপন্ন হয়। ম্যালট-অ্যাসপার্টেট শাটল ব্যবহার করে এই ২ এনএডিএইচ ম্যাট্রিক্সে পৌঁছে প্রায় ৫ এটিপি দেয় (প্রতি এনএডিএইচ-এ ২.৫ এটিপি)।'
          ),
          l(
            'Step 2: Pyruvate dehydrogenase complex converts 2 pyruvates into 2 acetyl-CoA, yielding 2 mitochondrial NADH, which provide 5 ATP via Complex I through IV.',
            'ধাপ ২: পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স ২টি পাইরুভেট থেকে ২টি অ্যাসিটাইল-কোএ তৈরি করে ২টি ম্যাট্রিক্স এনএডিএইচ দেয়, যা ইটিসি-র মাধ্যমে ৫ এটিপি সরবরাহ করে।'
          ),
          l(
            'Step 3: Two turns of the citric acid cycle consume 2 acetyl-CoA to generate 6 NADH (15 ATP), 2 FADH2 via Complex II (3 ATP), and 2 GTP/ATP (2 ATP). Total yield: 2 + 5 + 5 + 15 + 3 + 2 = 32 ATP per glucose molecule.',
            'ধাপ ৩: সাইট্রিক অ্যাসিড চক্রের দুই ঘূর্ণনে ২টি অ্যাসিটাইল-কোএ থেকে ৬টি এনএডিএইচ (১৫ এটিপি), ২টি এফএডিএইচ২ (৩ এটিপি) এবং ২টি জিটিপি (২ এটিপি) উৎপন্ন হয়। সর্বমোট ফলন: প্রতি গ্লুকোজে প্রায় ৩২টি এটিপি।'
          ),
        ],
        conclusion: l(
          'Mitochondrial respiration amplifies cellular ATP yield sixteenfold compared to simple anaerobic glycolysis, demonstrating the evolutionary power of chemiosmosis.',
          'সাধারণ অবাত গ্লাইকোলাইসিসের তুলনায় মাইটোকন্ড্রিয়াল শ্বসন শক্তি উৎপাদন ১৬ গুণ বৃদ্ধি করে, যা কেমিওসমোটিক প্রক্রিয়ার অসাধারণ বিবর্তনীয় শ্রেষ্ঠত্ব প্রমাণ করে।'
        ),
      },
      {
        title: l('Evaluating Cyanide Ingestion and Electron Transport Blockade', 'সায়ানাইড বিষক্রিয়ায় ইলেকট্রন পরিবহন শৃঙ্খল অবরুদ্ধ হওয়া মূল্যায়ন'),
        steps: [
          l(
            'Step 1: Cyanide anions (CN-) diffuse across cellular and mitochondrial membranes and bind with picomolar affinity to the oxidized ferric iron (Fe3+) in the heme a3-CuB binuclear center of Complex IV (cytochrome c oxidase).',
            'ধাপ ১: সায়ানাইড অ্যানায়ন (CN-) ঝিল্লি অতিক্রম করে কমপ্লেক্স IV (সাইটোক্রোম সি অক্সিডেজ)-এর হিম এ৩-সিইউবি দ্বি-নিউক্লিয়ার কেন্দ্রের ফেরিক আয়রনে (Fe3+) অত্যন্ত দৃঢ়ভাবে আবদ্ধ হয়।'
          ),
          l(
            'Step 2: Coordination of cyanide halts electron transfer to molecular oxygen. Cytochrome c, Complex III, Coenzyme Q, and Complex I rapidly become fully reduced because they cannot dump their electrons downstream.',
            'ধাপ ২: সায়ানাইডের এই বাধার কারণে অক্সিজেনে ইলেকট্রন স্থানান্তর সম্পূর্ণ বন্ধ হয়ে যায়। ফলে পূর্ববর্তী সাইটোক্রোম সি, কমপ্লেক্স III, কো-এনজাইম কিউ এবং কমপ্লেক্স I সম্পূর্ণরূপে বিজারিত অবস্থায় স্থবির হয়ে পড়ে।'
          ),
          l(
            'Step 3: Proton pumping ceases immediately, collapsing the proton-motive force. FoF1-ATP synthase halts, precipitating catastrophic cellular ATP depletion, refractory lactic acidosis, and tissue death despite 100 percent arterial oxygen saturation.',
            'ধাপ ৩: প্রোটন পাম্পিং বন্ধ হয়ে তাৎক্ষণিকভাবে প্রোটন-মোটিভ বল বিলুপ্ত হয়। ফলে এটিপি তৈরি বন্ধ হয়ে কোষে মারাত্মক শক্তি সংকট এবং রক্তের অক্সিজেন শতভাগ থাকা সত্ত্বেও তীব্র ল্যাকটিক অ্যাসিডোসিস সৃষ্টি হয়।'
          ),
        ],
        conclusion: l(
          'Complex IV inhibition causes histotoxic hypoxia: tissues suffocate in the presence of abundant physical oxygen because the electron sink is chemically occluded.',
          'কমপ্লেক্স IV অবরুদ্ধ হলে হিস্টোটক্সিক হাইপোক্সিয়া ঘটে: রক্তে প্রচুর অক্সিজেন থাকা সত্ত্বেও কোষ শ্বাসরোধে মারা যায় কারণ ইলেকট্রন গ্রহণের রাসায়নিক কেন্দ্রটি বন্ধ হয়ে যায়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does oxidation of one FADH2 yield only ~1.5 ATP while oxidation of one NADH yields ~2.5 ATP in human mitochondria?',
          'মানব মাইটোকন্ড্রিয়ায় এক অণু এফএডিএইচ২ জারণে কেন মাত্র ~১.৫ এটিপি উৎপন্ন হয় অথচ এক অণু এনএডিএইচ জারণে ~২.৫ এটিপি পাওয়া যায়?'
        ),
        answer: l(
          'NADH enters the respiratory chain at Complex I, contributing to proton pumping at Complexes I (4 H+), III (4 H+), and IV (2 H+) for a total of 10 protons pumped per electron pair. FADH2 donates its electrons directly to Complex II, which does not pump protons; its electrons traverse only Complexes III and IV, pumping only 6 protons total. Because ~4 protons are required to synthesize and export 1 ATP, 10 H+ yields 2.5 ATP and 6 H+ yields 1.5 ATP.',
          'এনএডিএইচ কমপ্লেক্স I-এ ইলেকট্রন দান করে, ফলে কমপ্লেক্স I (৪ প্রোটন), III (৪ প্রোটন) এবং IV (২ প্রোটন) মিলে মোট ১০টি প্রোটন পাম্প হয়। অন্যদিকে এফএডিএইচ২ সরাসরি কমপ্লেক্স II-তে ইলেকট্রন দেয়, যা কোনো প্রোটন পাম্প করে না; এর ইলেকট্রন কেবল কমপ্লেক্স III ও IV অতিক্রম করে মোট ৬টি প্রোটন পাম্প করে। প্রতি এটিপি সংশ্লেষে প্রায় ৪টি প্রোটন খরচ হওয়ায় ১০টি প্রোটন থেকে ২.৫ এটিপি এবং ৬টি প্রোটন থেকে ১.৫ এটিপি পাওয়া যায়।'
        ),
      },
      {
        question: l(
          'How does brown adipose tissue (BAT) protein UCP1 (thermogenin) generate heat instead of ATP during cold exposure?',
          'শীতল পরিবেশে বাদামি চর্বি কলার (বিএটি) ইউসিপি১ (থার্মোজেনিন) প্রোটিন কীভাবে এটিপির বদলে সরাসরি দৈহিক তাপ উৎপন্ন করে?'
        ),
        answer: l(
          'Thermogenin is a regulated transmembrane proton channel in the inner mitochondrial membrane that allows pumped protons to re-enter the mitochondrial matrix without passing through the Fo rotor of ATP synthase. This uncouples electron transport from ATP synthesis, dissipating the stored electrochemical free energy of the proton gradient directly as non-shivering heat.',
          'থার্মোজেনিন হলো অন্তঃমাইটোকন্ড্রিয়াল ঝিল্লির একটি নিয়ন্ত্রিত প্রোটন চ্যানেল, যা পাম্পকৃত প্রোটনগুলোকে এটিপি সিন্থেজের এফ০ রোটার অতিক্রম না করেই সরাসরি ম্যাট্রিক্সে ফিরে আসার সুযোগ দেয়। এর ফলে এটিপি উৎপাদন ছাড়াই প্রোটন গ্রেডিয়েন্টের সমস্ত শক্তি সরাসরি তাপ হিসেবে নির্গত হয়ে দেহকে উষ্ণ রাখে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'tca-oxphos-electron-highway',
    title: l('Interactive Citric Acid Cycle & Respiratory Chain Architect', 'ইন্টারেক্টিভ সাইট্রিক অ্যাসিড চক্র ও শ্বসন শৃঙ্খল রূপরেখা'),
    description: l(
      'Follow the cycle of matrix oxidation from oxaloacetate to citrate and explore the electron transport chain complexes generating the proton-motive force.',
      'অক্সালোঅ্যাসিটেট থেকে সাইট্রেট পর্যন্ত ম্যাট্রিক্স জারণ চক্র পর্যবেক্ষণ করুন এবং প্রোটন-মোটিভ বল সৃষ্টিকারী ইলেকট্রন পরিবহন কমপ্লেক্সসমূহ পরীক্ষা করুন।'
    ),
    disclaimer: l(
      'Mitochondrial bioenergetics schematic showing respiratory Complexes I through IV, CoQ, cytochrome c, and the rotational F1Fo-ATP synthase.',
      'মাইটোকন্ড্রিয়াল শ্বসন কমপ্লেক্স I থেকে IV, কো-এনজাইম কিউ, সাইটোক্রোম সি এবং ঘূর্ণনশীল এফ১এফ০-এটিপি সিন্থেজ প্রদর্শনকারী পরিকল্পিত রূপরেখা।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'complex1-node',
        label: l('Complex I: NADH:Ubiquinone Oxidoreductase [4 H+ pumped]', 'কমপ্লেক্স I: এনএডিএইচ:ইউবিকুইনোন অক্সিডোরিডাক্টেজ [৪ প্রোটন পাম্প]'),
        description: l(
          'Massive L-shaped 44-subunit respiratory entry point. Accepts 2 electrons from matrix NADH via FMN and iron-sulfur clusters to reduce ubiquinone (CoQ) to ubiquinol (QH2), pumping 4 H+ across the membrane.',
          'বিশালাকার এল-আকৃতির ৪৪-সাব-ইউনিট বিশিষ্ট প্রবেশদ্বার। ম্যাট্রিক্সের এনএডিএইচ থেকে এফএমএন ও আয়রন-সালফার ক্লাস্টারের মাধ্যমে ইলেকট্রন গ্রহণ করে কো-এনজাইম কিউ-কে বিজারিত করে এবং ৪টি প্রোটন পাম্প করে।'
        ),
        details: l(
          'Pumps 4 protons per electron pair. Inhibited potently by rotenone, piericidin A, and MPP+ neurotoxin. Major site of reactive oxygen species (ROS / superoxide) leakage.',
          'প্রতি জোড়া ইলেকট্রনে ৪টি প্রোটন পাম্প করে। রোটেনোন এবং এমপিপি+ দ্বারা বাধাপ্রাপ্ত হয়। কোষে ক্ষতিকর ফ্রি র্যাডিক্যাল বা সুপারঅক্সাইড নির্গমনের অন্যতম প্রধান উৎস।'
        ),
        sectionId: 'mechanism',
        color: '#3b82f6',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'complex2-node',
        label: l('Complex II: Succinate Dehydrogenase [0 H+ pumped]', 'কমপ্লেক্স II: সাকসিনেট ডিহাইড্রোজিনেজ [০ প্রোটন পাম্প]'),
        description: l(
          'Dual participant in both the Krebs cycle and the respiratory chain. Oxidizes succinate to fumarate via bound FAD and delivers electrons directly to CoQ without pumping protons.',
          'একই সাথে ক্রিয়েবস চক্র এবং শ্বসন শৃঙ্খলের অংশীদার। যুক্ত এফএডি-র মাধ্যমে সাকসিনেটকে ফিউমারেটে জারিত করে কোনো প্রোটন পাম্প না করেই ইলেকট্রন সরাসরি কো-এনজাইম কিউ-তে পাঠায়।'
        ),
        details: l(
          'Contains FAD and three iron-sulfur centers (2Fe-2S, 4Fe-4S, 3Fe-4S). Inhibited competitively by malonate. Mutations cause hereditary paraganglioma and pheochromocytoma.',
          'এফএডি এবং তিনটি আয়রন-সালফার ক্লাস্টারযুক্ত। ম্যালোনেট দ্বারা প্রতিযোগিতামূলকভাবে বাধাপ্রাপ্ত হয়। এর মিউটেশনে বংশগত প্যারাগ্যাংলিওমা টিউমার হতে পারে।'
        ),
        sectionId: 'structure',
        color: '#06b6d4',
        svgCoords: { x: 25, y: 95, width: 310, height: 48 },
      },
      {
        id: 'complex3-node',
        label: l('Complex III: Cytochrome bc1 Complex [4 H+ pumped via Q Cycle]', 'কমপ্লেক্স III: সাইটোক্রোম বিসি১ কমপ্লেক্স [কিউ চক্রে ৪ প্রোটন পাম্প]'),
        description: l(
          'Dimeric complex that oxidizes ubiquinol (QH2) and reduces two molecules of peripheral cytochrome c. The Q cycle doubles the efficiency of proton translocations, pumping 4 H+ per QH2.',
          'ডাইমারিক কমপ্লেক্স যা বিজারিত ইউবিকুইনলকে জারিত করে এবং দুটি সাইটোক্রোম সি-কে বিজারিত করে। এর কিউ চক্র প্রতি ইউবিকুইনলে ৪টি প্রোটন পাম্পিং নিশ্চিত করে।'
        ),
        details: l(
          'Contains cytochrome b (bL and bH hemes), Rieske 2Fe-2S center, and cytochrome c1. Inhibited by antimycin A and myxothiazol.',
          'সাইটোক্রোম বি, রিসকে আয়রন-সালফার কেন্দ্র এবং সাইটোক্রোম সি১ ধারণ করে। অ্যান্টিমাইসিন এ এবং মিক্সোথায়াজল দ্বারা অবদমিত হয়।'
        ),
        sectionId: 'mechanism',
        color: '#8b5cf6',
        svgCoords: { x: 25, y: 155, width: 310, height: 48 },
      },
      {
        id: 'complex4-node',
        label: l('Complex IV: Cytochrome c Oxidase [2 H+ pumped, O2 consumed]', 'কমপ্লেক্স IV: সাইটোক্রোম সি অক্সিডেজ [২ প্রোটন পাম্প, অক্সিজেন গ্রহণ]'),
        description: l(
          'Terminal respiratory enzyme. Collects 4 electrons from four reduced cytochrome c molecules to reduce one O2 molecule into two H2O molecules while pumping 2 H+ into the intermembrane space.',
          'অন্তিম শ্বসন এনজাইম। চারটি বিজারিত সাইটোক্রোম সি থেকে ৪টি ইলেকট্রন সংগ্রহ করে এক অণু অক্সিজেনকে দুই অণু পানিতে বিজারিত করে এবং ঝিল্লির আড়ালে ২টি প্রোটন পাম্প করে।'
        ),
        details: l(
          'Contains CuA copper center, heme a, and binuclear heme a3-CuB catalytic center. Irreversibly poisoned by cyanide (CN-), carbon monoxide (CO), and azide (N3-).',
          'কপার কেন্দ্র CuA, হিম এ এবং দ্বি-নিউক্লিয়ার হিম এ৩-সিইউবি কেন্দ্র নিয়ে গঠিত। সায়ানাইড, কার্বন মনোক্সাইড এবং অ্যাজাইড দ্বারা মারাত্মকভাবে বিষাক্ত হয়।'
        ),
        sectionId: 'mechanism',
        color: '#ec4899',
        svgCoords: { x: 25, y: 215, width: 310, height: 48 },
      },
      {
        id: 'complex5-node',
        label: l('Complex V: F1Fo-ATP Synthase [Molecular Rotary Motor]', 'কমপ্লেক্স V: এফ১এফ০-এটিপি সিন্থেজ [আণবিক ঘূর্ণন মোটর]'),
        description: l(
          'Chemiosmotic converter. Translocates protons down their thermodynamic gradient through the Fo c-ring rotor, rotating the central gamma stalk to catalyze ATP synthesis in the F1 head.',
          'কেমিওসমোটিক শক্তি রূপান্তরকারী। প্রোটনসমূহকে তাদের ঢাল বেয়ে এফ০ রোটারের মধ্য দিয়ে ম্যাট্রিক্সে প্রবেশ করিয়ে কেন্দ্রীয় গামা দণ্ড ঘুরিয়ে এফ১ শীর্ষে এটিপি তৈরি করে।'
        ),
        details: l(
          'Requires ~3 to 4 H+ per ATP synthesized and exported via ANT (adenine nucleotide translocase). Blocked mechanically by oligomycin.',
          'প্রতিটি এটিপি সংশ্লেষ ও বাইরে পাঠাতে প্রায় ৩ থেকে ৪টি প্রোটন লাগে। অলিগোমাইসিন অ্যান্টিবায়োটিক দ্বারা যান্ত্রিকভাবে অবরুদ্ধ হয়।'
        ),
        sectionId: 'integration',
        color: '#10b981',
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
          heading: l('Introduction: The Citric Acid Cycle as the Engine of Aerobic Life', 'ভূমিকা: সবাত জীবনের মূল চালিকাশক্তি হিসেবে সাইট্রিক অ্যাসিড চক্র'),
          paragraphs: [
            l(
              'The citric acid cycle—also known as the Krebs cycle or tricarboxylic acid (TCA) cycle—is the common metabolic hub where the oxidation of carbohydrates, fatty acids, and amino acids converges inside the mitochondrial matrix. Rather than producing large quantities of ATP directly, the primary function of the cycle is to strip electrons from acetyl groups and load them onto universal electron carriers, yielding three molecules of NADH and one molecule of FADH2 per turn.',
              'সাইট্রিক অ্যাসিড চক্র—যা ক্রিয়েবস চক্র বা ট্রাইকার্বক্সিলিক অ্যাসিড (টিসিএ) চক্র নামেও পরিচিত—হলো মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে অবস্থিত এমন এক সাধারণ কেন্দ্র যেখানে শর্করা, ফ্যাটি অ্যাসিড এবং অ্যামিনো অ্যাসিডের জারণ পথ একত্রিত হয়। সরাসরি বিপুল এটিপি তৈরির পরিবর্তে এই চক্রের মূল উদ্দেশ্য হলো অ্যাসিটাইল গ্রুপ থেকে ইলেকট্রন আহরণ করে সার্বজনীন বাহকে জমা করা, যার ফলে প্রতি আবর্তনে ৩টি এনএডিএইচ এবং ১টি এফএডিএইচ২ তৈরি হয়।'
            ),
            l(
              'This oxidative process operates in a closed catalytic loop: a four-carbon acceptor molecule, oxaloacetate, condenses with the two-carbon acetyl-CoA to form a six-carbon citrate. Over a sequence of eight enzyme-catalyzed steps, two carbons are fully oxidized and released as carbon dioxide (CO2), regenerating oxaloacetate to accept another acetyl-CoA unit and sustain continuous energy production.',
              'এই জারণ প্রক্রিয়াটি একটি আবদ্ধ চক্রাকার ধারায় পরিচালিত হয়: চার-কার্বন বিশিষ্ট অক্সালোঅ্যাসিটেট দুই-কার্বনের অ্যাসিটাইল-কোএ-র সাথে যুক্ত হয়ে ছয়-কার্বনের সাইট্রেট তৈরি করে। আটটি ধারাবাহিক এনজাইমীয় ধাপে দুটি কার্বন সম্পূর্ণ জারিত হয়ে কার্বন ডাই-অক্সাইড হিসেবে নির্গত হয় এবং পুনরায় অক্সালোঅ্যাসিটেট পুনর্গঠিত হয়ে নতুন অ্যাসিটাইল-কোএ গ্রহণের জন্য প্রস্তুত থাকে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Eight Reactions of the Matrix Cycle', 'ম্যাট্রিক্স চক্রের আটটি ধারাবাহিক এনজাইমীয় বিক্রিয়া'),
          paragraphs: [
            l(
              'Step 1 initiates with citrate synthase condensing oxaloacetate and acetyl-CoA into citrate. Aconitase then rearranges citrate into isocitrate in Step 2. In Step 3, isocitrate dehydrogenase performs the first oxidative decarboxylation, generating NADH and CO2 to produce alpha-ketoglutarate. In Step 4, alpha-ketoglutarate dehydrogenase conducts the second oxidative decarboxylation, releasing a second CO2 and forming succinyl-CoA and another NADH.',
              '১ম ধাপে সাইট্রেট সিন্থেজ অক্সালোঅ্যাসিটেট ও অ্যাসিটাইল-কোএ যুক্ত করে সাইট্রেট তৈরি করে। ২য় ধাপে অ্যাকোনিটেজ সাইট্রেটকে আইসোসাইট্রেটে পুনর্সজ্জিত করে। ৩য় ধাপে আইসোসাইট্রেট ডিহাইড্রোজিনেজ প্রথম জারণ ও ডিকার্বক্সিলেশন ঘটিয়ে এনএডিএইচ, কার্বন ডাই-অক্সাইড এবং আলফা-কিটোগ্লুটারেট উৎপন্ন করে। ৪র্থ ধাপে আলফা-কিটোগ্লুটারেট ডিহাইড্রোজিনেজ দ্বিতীয় ডিকার্বক্সিলেশন ঘটিয়ে সাকসিনাইল-কোএ ও আরেকটি এনএডিএইচ তৈরি করে।'
            ),
            l(
              'Step 5 (succinyl-CoA synthetase) cleaves the high-energy thioester bond of succinyl-CoA to drive the substrate-level phosphorylation of GDP to GTP (or ADP to ATP), releasing succinate. In Step 6, succinate dehydrogenase oxidizes succinate to fumarate, reducing enzyme-bound FAD to FADH2. Fumarase hydrates fumarate to L-malate in Step 7, and malate dehydrogenase oxidizes malate back to oxaloacetate in Step 8, generating the final NADH.',
              '৫ম ধাপে সাকসিনাইল-কোএ সিন্থেজ থায়োএস্টার বন্ধন ভেঙে সাবস্ট্রেট-স্তরে জিডিপি থেকে জিটিপি (বা এটিপি) তৈরি করে সাকসিনেট নির্গমন করে। ৬ষ্ঠ ধাপে সাকসিনেট ডিহাইড্রোজিনেজ সাকসিনেটকে ফিউমারেটে জারিত করে এফএডিএইচ২ উৎপন্ন করে। ৭ম ধাপে ফিউমারেজ পানি যুক্ত করে এল-ম্যালট তৈরি করে এবং ৮ম ধাপে ম্যালট ডিহাইড্রোজিনেজ শেষ এনএডিএইচ তৈরি করে পুনরায় অক্সালোঅ্যাসিটেট পুনরুৎপাদন করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Electron Transport Chain: Transforming Chemical Potential into a Proton Gradient', 'ইলেকট্রন পরিবহন শৃঙ্খল: রাসায়নিক শক্তিকে প্রোটন গ্রেডিয়েন্টে রূপান্তর'),
          paragraphs: [
            l(
              'The electron transport chain (ETC) consists of four multi-protein complexes (Complexes I, II, III, and IV) embedded securely within the cristae folds of the inner mitochondrial membrane. NADH transfers its high-energy electrons into Complex I, while FADH2 passes electrons into Complex II. Both complexes transfer their reducing equivalents to a mobile, lipid-soluble electron shuttle called coenzyme Q (ubiquinone).',
              'ইলেকট্রন পরিবহন শৃঙ্খল (ইটিসি) হলো অন্তঃমাইটোকন্ড্রিয়াল ঝিল্লির ক্রিস্টি ভাঁজে দৃঢ়ভাবে অবস্থিত চারটি বহু-প্রোটিন জটিল কাঠামো (কমপ্লেক্স I, II, III এবং IV)। এনএডিএইচ তার উচ্চ-শক্তি ইলেকট্রন কমপ্লেক্স I-এ এবং এফএডিএইচ২ তার ইলেকট্রন কমপ্লেক্স II-তে প্রদান করে। উভয় কমপ্লেক্সই তাদের বিজারক ইলেকট্রনগুলোকে কো-এনজাইম কিউ নামক একটি চলনশীল লিপিড-দ্রবণীয় বাহকে স্থানান্তর করে।'
            ),
            l(
              'Coenzyme Q delivers electrons to Complex III, which transfers them one at a time to cytochrome c, a small water-soluble protein in the intermembrane space. Cytochrome c ferries electrons to Complex IV (cytochrome c oxidase), which transfers four electrons to molecular oxygen (O2) and four matrix protons to form two molecules of water (H2O), the final waste product of cellular respiration.',
              'কো-এনজাইম কিউ ইলেকট্রনগুলোকে কমপ্লেক্স III-তে পৌঁছে দেয়, যা সেগুলোকে একটি একটি করে আন্তঃঝিল্লি ফাঁকা স্থানে থাকা ক্ষুদ্র প্রোটিন সাইটোক্রোম সি-তে পাঠায়। সাইটোক্রোম সি ইলেকট্রন বহন করে অন্তিম কমপ্লেক্স IV-এ নিয়ে যায়, যা চারটি ইলেকট্রনকে আণবিক অক্সিজেনের সাথে যুক্ত করে দুই অণু পানি তৈরি করে, যা সবাত শ্বসনের শেষ বর্জ্য উপাদান।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Chemiosmosis and the Molecular Dynamo: F1Fo-ATP Synthase', 'কেমিওসমোসিস ও আণবিক ডায়নামো: এফ১এফ০-এটিপি সিন্থেজ'),
          paragraphs: [
            l(
              'As electrons cascade down the redox energy staircase through Complexes I, III, and IV, these complexes act as proton pumps, translocating hydrogen ions (H+) from the mitochondrial matrix outward into the intermembrane space. Because the inner membrane is completely impermeable to ions, this creates an enormous electrochemical gradient known as the proton-motive force, acting like a charged cellular battery.',
              'কমপ্লেক্স I, III এবং IV-এর মধ্য দিয়ে ইলেকট্রন প্রবাহিত হওয়ার সময় তারা প্রোটন পাম্প হিসেবে কাজ করে হাইড্রোজেন আয়নকে (এইচ+) ম্যাট্রিক্স থেকে বাইরে আন্তঃঝিল্লি স্থানে ঠেলে দেয়। যেহেতু অন্তঃঝিল্লি কোনো আয়নের জন্য ভেদ্য নয়, তাই এটি একটি বিশাল তড়িৎ-রাসায়নিক গ্রেডিয়েন্ট বা প্রোটন-মোটিভ বল তৈরি করে, যা একটি চার্জযুক্ত আণবিক ব্যাটারির মতো কাজ করে।'
            ),
            l(
              'The only route for protons to flow back down this thermodynamic gradient is through Complex V (F1Fo-ATP synthase). Protons entering the membrane-embedded Fo rotor force its central axle to spin at over 6,000 revolutions per minute. This physical rotation alters the shape of catalytic beta subunits in the F1 headpiece, driving the condensation of ADP and inorganic phosphate into ATP through mechanical force.',
              'এই প্রোটনগুলোর ম্যাট্রিক্সে ফিরে আসার একমাত্র অনুমোদিত পথ হলো কমপ্লেক্স V (এফ১এফ০-এটিপি সিন্থেজ)। ঝিল্লিতে থাকা এফ০ রোটারের মধ্য দিয়ে প্রোটন প্রবাহিত হলে এর কেন্দ্রীয় শ্যাফ্টটি প্রতি মিনিটে ছয় হাজারেরও বেশি বার ঘোরে। এই ঘূর্ণন যান্ত্রিক বলের মাধ্যমে এফ১ মাথার অনুঘটক সাব-ইউনিটের রূপ বদলে এডিপি ও অজৈব ফসফেট জোড়া লাগিয়ে এটিপি তৈরি করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Reasoning: Carbon Monoxide Poisoning', 'মৌলিক যুক্তি: কার্বন মনোক্সাইড বিষক্রিয়া ও সেলুলার শ্বাসরোধ'),
          paragraphs: [
            l(
              'Carbon monoxide (CO) is an insidious, odorless gas that exerts lethal effects through two synergistic mechanisms: it binds hemoglobin with an affinity 200 times greater than oxygen, causing tissue hypoxia, and it directly diffuses into mitochondria to coordinate with the heme a3 center of Complex IV, halting cellular respiration even when partial pressures of oxygen are therapeutically elevated.',
              'কার্বন মনোক্সাইড (CO) হলো একটি মারাত্মক বর্ণহীন ও গন্ধহীন গ্যাস যা দুটি সমন্বিত উপায়ে প্রাণহানি ঘটায়: এটি হিমোগ্লোবিনের সাথে অক্সিজেনের চেয়ে ২০০ গুণ বেশি দৃঢ়ভাবে আবদ্ধ হয়ে রক্তে অক্সিজেন পরিবহন বন্ধ করে, এবং সরাসরি মাইটোকন্ড্রিয়ায় প্রবেশ করে কমপ্লেক্স IV-এর হিম এ৩-কে অবরুদ্ধ করে কোষীয় শক্তি উৎপাদন সম্পূর্ণ স্তব্ধ করে দেয়।'
            ),
          ],
          bullets: [
            l('Tissue lactic acidosis develops rapidly because cells must shift entirely to anaerobic glycolysis.', 'কোষগুলো সম্পূর্ণভাবে অবাত গ্লাইকোলাইসিসে নির্ভর করতে বাধ্য হওয়ায় রক্তে মারাত্মক ল্যাকটিক অ্যাসিডোসিস দেখা দেয়।'),
            l('Hyperbaric oxygen therapy displaces CO from both hemoglobin and mitochondrial Complex IV.', 'হাইপারবারিক অক্সিজেন থেরাপি হিমোগ্লোবিন এবং মাইটোকন্ড্রিয়াল কমপ্লেক্স IV উভয় স্থান থেকেই কার্বন মনোক্সাইডকে অপসারণ করতে সাহায্য করে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & High-Yield Summary', 'মূল শিক্ষা ও গুরুত্বপূর্ণ সারাংশ'),
          paragraphs: [
            l(
              'The citric acid cycle oxidizes acetyl groups to CO2, storing energy as 3 NADH, 1 FADH2, and 1 GTP per turn. Complexes I, III, and IV of the electron transport chain pump protons to generate the electrochemical proton-motive force, which drives rotational ATP synthesis by Complex V. Oxygen serves as the essential terminal electron acceptor, forming water and sustaining aerobic human life.',
              'সাইট্রিক অ্যাসিড চক্র অ্যাসিটাইল গ্রুপকে জারিত করে প্রতি আবর্তনে ৩টি এনএডিএইচ, ১টি এফএডিএইচ২ এবং ১টি জিটিপি তৈরি করে। ইলেকট্রন পরিবহন শৃঙ্খলের কমপ্লেক্স I, III এবং IV প্রোটন পাম্প করে প্রোটন-মোটিভ বল তৈরি করে, যা কমপ্লেক্স V-এর ঘূর্ণন দ্বারা এটিপি সংশ্লেষ সম্পন্ন করে। অক্সিজেন অন্তিম ইলেকট্রন গ্রাহক হিসেবে পানি গঠন করে মানবদেহের সবাত জীবন সচল রাখে।'
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
          heading: l('Thermodynamic Regulation of the Citric Acid Cycle', 'সাইট্রিক অ্যাসিড চক্রের তাপগতিবিদ্যাগত নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Flux through the citric acid cycle is controlled by substrate availability, product inhibition, and allosteric feedback targeting three non-equilibrium enzymes characterized by large negative standard free energy changes: citrate synthase (delta-G-prime-zero = -31.5 kJ/mol), isocitrate dehydrogenase (delta-G-prime-zero = -21 kJ/mol), and alpha-ketoglutarate dehydrogenase (delta-G-prime-zero = -30 kJ/mol).',
              'সাইট্রিক অ্যাসিড চক্রের সামগ্রিক গতি মূলত সাবস্ট্রেটের প্রাপ্যতা, উৎপাদ দ্বারা বাধা এবং অ্যালবস্টেরিক সংকেত দ্বারা নিয়ন্ত্রিত হয়, যা তিনটি বিশাল ঋণাত্মক মুক্ত শক্তিবিশিষ্ট অসম বিক্রিয়াকে লক্ষ্য করে পরিচালিত হয়: সাইট্রেট সিন্থেজ (ডেল্টা-জি-প্রাইম-জিরো = -৩১.৫ কিলোজুল/মোল), আইসোসাইট্রেট ডিহাইড্রোজিনেজ (-২১ কিলোজুল/মোল) এবং আলফা-কিটোগ্লুটারেট ডিহাইড্রোজিনেজ (-৩০ কিলোজুল/মোল)।'
            ),
            l(
              'Isocitrate dehydrogenase (IDH) is the rate-limiting pacemaker of the cycle. It is allosterically stimulated by ADP, which lowers the Km for isocitrate, and inhibited by ATP and NADH. When the cellular ATP/ADP and NADH/NAD+ ratios are elevated, IDH activity decreases, causing mitochondrial citrate to accumulate. Citrate is then transported via the tricarboxylate carrier into the cytosol, where it allosterically inhibits PFK-1 and activates acetyl-CoA carboxylase for fatty acid synthesis.',
              'আইসোসাইট্রেট ডিহাইড্রোজিনেজ (আইডিএইচ) হলো চক্রের প্রধান হার-নিয়ন্ত্রক। এটি এডিপি দ্বারা উদ্দীপিত হয় এবং এটিপি ও এনএডিএইচ দ্বারা অবদমিত হয়। কোষে এটিপি ও এনএডিএইচ বেড়ে গেলে আইডিএইচ ধীর হয়ে ম্যাট্রিক্সে সাইট্রেট জমা হয়। অতিরিক্ত সাইট্রেট তখন সাইটোসোলে গিয়ে গ্লাইকোলাইসিসের পিএফকে-১ এনজাইমকে বাধা দেয় এবং ফ্যাটি অ্যাসিড তৈরির জন্য অ্যাসিটাইল-কোএ কার্বক্সিলেজকে সক্রিয় করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Anaplerotic Pathways & Amphibolic Carbon Flux', 'অ্যানাপ্লেরোটিক গতিপথ ও উভমুখী কার্বন প্রবাহ'),
          paragraphs: [
            l(
              'The citric acid cycle is amphibolic: it functions in both catabolism and anabolism. Intermediates are continuously siphoned off for biosynthesis: alpha-ketoglutarate and oxaloacetate for amino acid synthesis, succinyl-CoA for porphyrin and heme synthesis, and citrate for fatty acid and sterol biogenesis. If intermediates were removed without replenishment, the concentration of oxaloacetate would drop, halting acetyl-CoA oxidation.',
              'সাইট্রিক অ্যাসিড চক্র একটি উভমুখী বা অ্যাম্ফিবলিক পথ: এটি জারণ ও সংশ্লেষণ উভয় কাজেই অংশ নেয়। এর মধ্যবর্তী যৌগগুলো বিভিন্ন জৈবসংশ্লেষে অপসারিত হয়: আলফা-কিটোগ্লুটারেট ও অক্সালোঅ্যাসিটেট অ্যামিনো অ্যাসিড তৈরিতে, সাকসিনাইল-কোএ হিম তৈরিতে এবং সাইট্রেট চর্বি তৈরিতে খরচ হয়। পুনরায় পূরণ না করে এই যৌগগুলো সরিয়ে নিলে অক্সালোঅ্যাসিটেটের অভাবে অ্যাসিটাইল-কোএ জারণ সম্পূর্ণ বন্ধ হয়ে যেত।'
            ),
            l(
              'Anaplerotic reactions replenish depleted cycle intermediates. The most important mammalian anaplerotic enzyme is pyruvate carboxylase (PC, EC 6.4.1.1), a biotin-dependent mitochondrial enzyme that converts pyruvate, CO2, and ATP into oxaloacetate. Pyruvate carboxylase is allosterically dependent on acetyl-CoA: when acetyl-CoA accumulates in excess of available oxaloacetate, it obligatorily activates PC to restore cycle balance.',
              'অ্যানাপ্লেরোটিক বিক্রিয়াসমূহ এই অপসারিত মধ্যবর্তী যৌগগুলোকে পুনরায় তৈরি করে। স্তন্যপায়ীদের প্রধান অ্যানাপ্লেরোটিক এনজাইম হলো পাইরুভেট কার্বক্সিলেজ, যা বায়োটিন ও এটিপি ব্যবহার করে পাইরুভেট ও কার্বন ডাই-অক্সাইড থেকে অক্সালোঅ্যাসিটেট তৈরি করে। পাইরুভেট কার্বক্সিলেজ অ্যাসিটাইল-কোএ দ্বারা সক্রিয় হয়: অক্সালোঅ্যাসিটেটের ঘাটতি থাকলে অতিরিক্ত অ্যাসিটাইল-কোএ এই এনজাইমকে সচল করে সমতা ফিরিয়ে আনে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Q Cycle & Vectorial Proton Translocation Mechanisms', 'কিউ চক্র ও ভেক্টরিয়াল প্রোটন স্থানান্তর প্রক্রিয়া'),
          paragraphs: [
            l(
              'At Complex III (cytochrome bc1), electron transfer from a two-electron carrier (ubiquinol, QH2) to a one-electron carrier (cytochrome c) requires Peter Mitchell Q cycle. In the first half of the cycle, QH2 binds the Qo site near the intermembrane space, releasing 2 H+ into the intermembrane space. One electron reduces the Rieske Fe-S protein and cytochrome c1 to reduce cytochrome c; the second electron travels down cytochromes bL and bH to reduce a bound ubiquinone at the Qi site into a semiquinone radical (Q-dot).',
              'কমপ্লেক্স III-তে দুই-ইলেকট্রন বাহক ইউবিকুইনল (QH2) থেকে এক-ইলেকট্রন বাহক সাইটোক্রোম সি-তে ইলেকট্রন পাঠাতে পিটার মিচেলের কিউ চক্র কাজ করে। চক্রের প্রথমার্ধে একটি QH2 জারিত হয়ে দুটি প্রোটন আন্তঃঝিল্লি স্থানে পাঠায়। একটি ইলেকট্রন সাইটোক্রোম সি-কে বিজারিত করে এবং অন্য ইলেকট্রনটি সাইটোক্রোম বি-র মাধ্যমে ভেতরে থাকা কিউ-কে সেমিকুইনোন র্যাডিক্যালে পরিণত করে।'
            ),
            l(
              'In the second half of the Q cycle, a second QH2 oxidizes at the Qo site, releasing 2 more H+ into the intermembrane space. Its first electron reduces a second cytochrome c, while its second electron reduces the semiquinone radical at Qi, which takes up 2 protons from the matrix to regenerate QH2. Thus, for every 2 electrons traversing to cytochrome c, a total of 4 protons are vectorially pumped into the intermembrane space.',
              'কিউ চক্রের দ্বিতীয়ার্ধে আরেকটি QH2 জারিত হয়ে আরও দুটি প্রোটন বাইরে পাঠায়। এর প্রথম ইলেকট্রনটি দ্বিতীয় সাইটোক্রোম সি-কে বিজারিত করে এবং দ্বিতীয় ইলেকট্রনটি অভ্যন্তরীণ সেমিকুইনোনকে ম্যাট্রিক্স থেকে ২টি প্রোটন গ্রহণ করিয়ে পুনরায় ইউবিকুইনলে রূপান্তর করে। ফলে সাইটোক্রোম সি-তে যাওয়া প্রতি জোড়া ইলেকট্রনের জন্য মোট ৪টি প্রোটন কার্যকরভাবে বাইরে পাম্প হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Peter Mitchell Chemiosmotic Hypothesis & Boyer Binding Change Model', 'পিটার মিচেলের কেমিওসমোটিক তত্ত্ব ও বোয়ার বাইন্ডিং চেঞ্জ মডেল'),
          paragraphs: [
            l(
              'Peter Mitchell revolutionized bioenergetics in 1961 by demonstrating that ATP synthesis is driven by an electrochemical proton gradient across an intact, ion-impermeable membrane rather than high-energy chemical intermediates. The proton-motive force (delta-p) is formulated as delta-p = delta-Psi - (2.303*R*T/F)*delta-pH, where transmembrane electrical potential (delta-Psi ~ 160-180 mV, matrix negative) contributes the major portion of the drive.',
              'পিটার মিচেল ১৯৬১ সালে প্রমাণ করেন যে এটিপি সংশ্লেষণ কোনো রাসায়নিক অন্তর্বর্তী যৌগের দ্বারা নয়, বরং অক্ষত ঝিল্লির আড়ালে থাকা তড়িৎ-রাসায়নিক প্রোটন গ্রেডিয়েন্ট দ্বারা চালিত হয়। প্রোটন-মোটিভ বল (ডেল্টা-পি) সমীকরণ হলো ডেল্টা-পি = ডেল্টা-সাই - (২.৩০৩*R*T/F)*ডেল্টা-পিএইচ, যেখানে ঝিল্লির বৈদ্যুতিক বিভব (প্রায় ১৬০ থেকে ১৮০ মিলিভোল্ট, ভেতরে ঋণাত্মক) এই চালিকাশক্তির সিংহভাগ যোগান দেয়।'
            ),
            l(
              'Paul Boyer binding change mechanism proved that the catalytic sites of the F1 hexamer (three alpha-beta dimers) alternate sequentially through three distinct conformations: Open (O, very low affinity for nucleotides; newly synthesized ATP leaves), Loose (L, binds ADP and Pi reversibly), and Tight (T, tightly compresses ADP and Pi to form ATP without requiring energy). Energy from proton flow is required not to form the phosphoanhydride bond, but to drive the rotation of the gamma stalk to forcibly release ATP from the Tight site.',
              'পল বোয়ারের বাইন্ডিং চেঞ্জ মডেল দেখিয়েছে যে এফ১ মাথার তিনটি অনুঘটক সাইট পর্যায়ক্রমে তিনটি ভিন্ন রূপ ধারণ করে: ওপেন (O, নিউক্লিওটাইডের প্রতি নিম্ন আসক্তি, এটিপি মুক্ত হয়), লুজ (L, এডিপি ও ফসফেট আলতোভাবে ধারণ করে) এবং টাইট (T, এডিপি ও ফসফেটকে সংকুচিত করে এটিপি তৈরি করে)। প্রোটন প্রবাহের শক্তি আসলে ফসফেট বন্ধন তৈরিতে লাগে না, বরং টাইট সাইট থেকে এটিপিকে বলপূর্বক মুক্ত করার জন্য গামা দণ্ড ঘোরাতে ব্যবহৃত হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Pharmacology & Toxicology: Distinguishing Site-Specific Poisoning', 'ফার্মাকোলজি ও টক্সিকোলজি: নির্দিষ্ট ব্লকার ও আনকপলারের পার্থক্য'),
          paragraphs: [
            l(
              'Understanding mitochondrial poisons requires distinguishing inhibitors of electron transport (which arrest oxygen consumption and abolish the proton gradient) from inhibitors of ATP synthase and chemical uncouplers. Oligomycin selectively blocks the Fo proton channel, preserving a high proton gradient that halts electron transport via respiratory backpressure until an uncoupler is introduced.',
              'মাইটোকন্ড্রিয়াল বিষের কার্যপদ্ধতি বুঝতে ইলেকট্রন পরিবহন প্রতিরোধক (যা অক্সিজেন গ্রহণ বন্ধ করে প্রোটন গ্রেডিয়েন্ট ধ্বংস করে), এটিপি সিন্থেজ প্রতিরোধক এবং রাসায়নিক আনকপলারের পার্থক্য জানা অত্যন্ত জরুরি। অলিগোমাইসিন এফ০ প্রোটন চ্যানেল বন্ধ করে উচ্চ প্রোটন গ্রেডিয়েন্ট ধরে রাখে, যা তীব্র পশ্চাৎচাপ সৃষ্টি করে ইলেকট্রন পরিবহন থামিয়ে দেয়।'
            ),
          ],
          bullets: [
            l('Rotenone (Complex I) and Antimycin A (Complex III) arrest oxygen consumption; succinate restores respiration after rotenone but not after antimycin A.', 'রোটেনোন (কমপ্লেক্স I) এবং অ্যান্টিমাইসিন এ (কমপ্লেক্স III) অক্সিজেন গ্রহণ বন্ধ করে; রোটেনোনের পর সাকসিনেট দিলে শ্বসন পুনরুদ্ধার হয় কিন্তু অ্যান্টিমাইসিনে হয় না।'),
            l('2,4-DNP shuttles protons across the inner membrane, dissipating delta-p, accelerating oxygen consumption to maximum, and causing lethal hyperthermia.', '২,৪-ডিএনপি প্রোটন বহন করে গ্রেডিয়েন্ট ধ্বংস করে দেয়, যার ফলে অক্সিজেন গ্রহণ সর্বোচ্চ হারে বৃদ্ধি পায় এবং মারাত্মক জ্বর ও মৃত্যু ডেকে আনে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Chemiosmotic Coupling & Metabolic Integration', 'একাডেমিক সংশ্লেষ: কেমিওসমোটিক সংযোজন ও বিপাকীয় সমন্বয়'),
          paragraphs: [
            l(
              'Mitochondrial bioenergetics represents the ultimate convergence of nutrient metabolism. The citric acid cycle strips electrons into NADH and FADH2, which feed the electron transport chain to generate a proton-motive force of approximately 200 mV. F1Fo-ATP synthase harnesses this proton flux via rotational catalysis to synthesize the bulk of cellular ATP, tightly regulated by ADP availability (respiratory control) to match cellular workload.',
              'মাইটোকন্ড্রিয়াল জৈবশক্তিবিজ্ঞান হলো সমস্ত পুষ্টি বিপাকের চূড়ান্ত মিলনস্থল। সাইট্রিক অ্যাসিড চক্র ইলেকট্রন সংগ্রহ করে এনএডিএইচ ও এফএডিএইচ২ তৈরি করে, যা ইলেকট্রন শৃঙ্খলে গিয়ে প্রায় ২০০ মিলিভোল্ট প্রোটন-মোটিভ বল সৃষ্টি করে। এফ১এফ০-এটিপি সিন্থেজ ঘূর্ণন অনুঘটনের মাধ্যমে এই প্রবাহকে কাজে লাগিয়ে কোষের অধিকাংশ এটিপি তৈরি করে, যা এডিপির প্রাপ্যতা (শ্বসন নিয়ন্ত্রণ) দ্বারা কঠোরভাবে পরিচালিত হয়।'
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
          heading: l('Mitochondrial Genetics & Respiratory Chain Deficiencies', 'মাইটোকন্ড্রিয়াল জেনেটিক্স ও শ্বসন শৃঙ্খলের জন্মগত ত্রুটি'),
          paragraphs: [
            l(
              'Human mitochondrial DNA (mtDNA) is a 16,569 base pair circular double-stranded genome encoding 13 essential polypeptide subunits of Complexes I, III, IV, and V, along with 22 tRNAs and 2 rRNAs. The remaining ~1,500 mitochondrial proteins, including all Complex II subunits, are nuclear-encoded and imported via the TOM/TIM translocase machinery. MtDNA possesses maternal inheritance and a mutation rate ten times higher than nuclear DNA due to proximity to ROS and lack of protective histones.',
              'মানবদেহের মাইটোকন্ড্রিয়াল ডিএনএ (mtDNA) হলো ১৬,৫৬৯ ক্ষারজোড় বিশিষ্ট বৃত্তাকার দ্বি-সূত্রক জিনোম যা কমপ্লেক্স I, III, IV এবং V-এর ১৩টি প্রয়োজনীয় প্রোটিন সাব-ইউনিট, ২২টি টি-আরএনএ এবং ২টি আর-আরএনএ কোড করে। কমপ্লেক্স II সহ বাকি প্রায় ১৫০০ প্রোটিন নিউক্লিয়াস দ্বারা তৈরি হয়ে টম/টিম ট্রান্সলোকেজ দিয়ে মাইটোকন্ড্রিয়ায় প্রবেশ করে। হিস্টোন না থাকায় এবং ফ্রি র্যাডিক্যালের কাছে থাকায় এতে মিউটেশনের হার দশগুণ বেশি।'
            ),
            l(
              'Leber hereditary optic neuropathy (LHON) is caused by homoplasmic point mutations in mtDNA Complex I genes (m.11778G>A in ND4, m.3460G>A in ND1), producing bilateral painless subacute central vision loss in young adults due to retinal ganglion cell degeneration. In Kearns-Sayre syndrome and Pearson syndrome, large heteroplasmic mtDNA deletions disrupt multiple respiratory complexes, causing progressive external ophthalmoplegia, cardiac conduction defects, and refractory marrow failure.',
              'লেবার হেরিডিটারি অপটিক নিউরোপ্যাথি (এলএইচওএন) কমপ্লেক্স I জিনের পয়েন্ট মিউটেশনের কারণে ঘটে, যা রেটিনার গ্যাংলিওন কোষ ধ্বংস করে তরুণদের উভয় চোখের দৃষ্টিশক্তি কেড়ে নেয়। কার্নস-সায়ার সিন্ড্রোম এবং পিয়ারসন সিন্ড্রোমে মাইটোকন্ড্রিয়াল ডিএনএর বৃহৎ অংশ হারিয়ে গিয়ে একাধিক শ্বসন কমপ্লেক্স বিকল হয়, যার ফলে প্রগ্রেসিভ এক্সটার্নাল অপথ্যালমোপ্লেজিয়া এবং হৃৎপিণ্ডের বিদ্যুৎ পরিবাহী বিকলতা দেখা দেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Frontier Research: Mitochondrial Permeability Transition & Aging', 'গবেষণার দিগন্ত: মাইটোকন্ড্রিয়াল পারমিয়াবিলিটি ট্রানজিশন ও বার্ধক্য'),
          paragraphs: [
            l(
              'Under severe oxidative stress and matrix calcium overload (as encountered in ischemia-reperfusion injury), cyclophilin D associates with the adenine nucleotide translocase and ATP synthase dimers to assemble the mitochondrial permeability transition pore (mPTP). Opening of this non-selective mega-channel causes immediate dissipation of membrane potential, swelling of the matrix, rupture of the outer membrane, and release of cytochrome c and SMAC/DIABLO into the cytosol, executing intrinsic apoptosis.',
              'তীব্র অক্সিডেটিভ চাপ এবং ম্যাট্রিক্সে অতিরিক্ত ক্যালসিয়াম জমলে (যেমন ইস্কেমিয়া-রিপারফিউশন ইনজুরিতে) সাইক্লোফিলিন ডি প্রোটিন এটিপি সিন্থেজের সাথে যুক্ত হয়ে মাইটোকন্ড্রিয়াল পারমিয়াবিলিটি ট্রানজিশন পোর (এমপিটিপি) গঠন করে। এই মেগা-চ্যানেল উন্মুক্ত হলে মেমব্রেন পোটেনশিয়াল তৎক্ষণাৎ বিলুপ্ত হয়, ম্যাট্রিক্স ফুলে গিয়ে বহিঃঝিল্লি ফেটে যায় এবং সাইটোক্রোম সি সাইটোসোলে ছড়িয়ে পড়ে কোষের অ্যাপোপটোসিস ঘটায়।'
            ),
          ],
          bullets: [
            l('Cyclosporin A binds cyclophilin D, pharmacologically inhibiting mPTP opening to protect ischemic myocardium.', 'সাইক্লোস্পোরিন এ সাইক্লোফিলিন ডি-তে যুক্ত হয়ে এমপিটিপি উন্মুক্ত হওয়া ঠেকায় এবং ইস্কেমিক হৃদপেশিকে রক্ষা করে।'),
            l('Mitohormesis: Mild transient bursts of mitochondrial ROS act as vital physiological second messengers inducing nuclear cytoprotective gene expression via Nrf2 and PGC-1alpha.', 'মাইটোহরমিসিস: মাইটোকন্ড্রিয়া থেকে মৃদু ক্ষণস্থায়ী ফ্রি র্যাডিক্যাল নির্গমন কোষের জন্য উপকারী সংকেত হিসেবে কাজ করে Nrf2 ও PGC-1alpha সক্রিয় করে প্রতিরক্ষামূলক এনজাইম বৃদ্ধি করে।'),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An integrated diagram showing the mitochondrial matrix citric acid cycle coupled to respiratory Complexes I, II, III, IV, ubiquinone, cytochrome c, and the rotating Complex V ATP synthase pumping protons across the inner mitochondrial membrane.',
      'মাইটোকন্ড্রিয়াল ম্যাট্রিক্সের সাইট্রিক অ্যাসিড চক্র এবং অন্তঃঝিল্লিতে অবস্থিত শ্বসন কমপ্লেক্স I, II, III, IV, কো-এনজাইম কিউ, সাইটোক্রোম সি এবং প্রোটন প্রবাহ দ্বারা চালিত ঘূর্ণনশীল কমপ্লেক্স V এটিপি সিন্থেজ প্রদর্শনকারী একটি সমন্বিত গতিপথের চিত্র।'
    ),
    steps: [
      l('Matrix Oxidation: Citric acid cycle oxidizes acetyl-CoA to CO2, generating 3 NADH, 1 FADH2, and 1 GTP.', 'ম্যাট্রিক্স জারণ: সাইট্রিক অ্যাসিড চক্র অ্যাসিটাইল-কোএ-কে জারিত করে ৩টি এনএডিএইচ, ১টি এফএডিএইচ২ এবং ১টি জিটিপি তৈরি করে।'),
      l('Electron Cascading: Complexes I, III, and IV pump protons outward as electrons flow to terminal molecular oxygen.', 'ইলেকট্রন প্রবাহ: অন্তিম আণবিক অক্সিজেনে ইলেকট্রন স্থানান্তরের সাথে সাথে কমপ্লেক্স I, III এবং IV বাইরে প্রোটন পাম্প করে।'),
      l('Electrochemical Gradient: The proton-motive force builds up across the impermeable inner mitochondrial membrane.', 'তড়িৎ-রাসায়নিক গ্রেডিয়েন্ট: অভেদ্য অন্তঃমাইটোকন্ড্রিয়াল ঝিল্লির আড়ালে প্রোটন-মোটিভ বল পুঞ্জীভূত হয়।'),
      l('Rotational Synthesis: Complex V rotates as protons re-enter the matrix, catalyzing the condensation of ADP and Pi into ATP.', 'ঘূর্ণন সংশ্লেষণ: প্রোটন ম্যাট্রিক্সে ফিরে আসার সময় কমপ্লেক্স V ঘূর্ণনের মাধ্যমে এডিপি ও অজৈব ফসফেট যুক্ত করে এটিপি তৈরি করে।'),
    ],
  },
  assessment: {
    question: l(
      'An experimental research compound completely collapses the mitochondrial inner membrane electrical potential (delta-Psi) and halts ATP synthesis, but dramatically stimulates oxygen consumption to maximum rates. What type of agent is this compound?',
      'একটি পরীক্ষাগার গবেষণামূলক যৌগ অন্তঃমাইটোকন্ড্রিয়াল ঝিল্লির বৈদ্যুতিক বিভব (ডেল্টা-সাই) সম্পূর্ণ বিলুপ্ত করে এবং এটিপি সংশ্লেষ বন্ধ করে দেয়, কিন্তু একই সাথে অক্সিজেনের ব্যবহার সর্বোচ্চ হারে বৃদ্ধি করে। এই যৌগটি কোন ধরনের রাসায়নিক উপাদান?'
    ),
    options: [
      l(
        'An uncoupler of oxidative phosphorylation (such as 2,4-dinitrophenol), which dissipates the proton gradient without blocking electron transport.',
        'অক্সিডেটিভ ফসফরাইলেশনের একটি আনকপলার (যেমন ২,৪-ডাইনাইট্রোফেনল), যা ইলেকট্রন পরিবহন না থামিয়েই প্রোটন গ্রেডিয়েন্ট নষ্ট করে দেয়।'
      ),
      l(
        'An inhibitor of Complex IV (such as potassium cyanide), which occludes the heme a3-CuB catalytic reduction center.',
        'কমপ্লেক্স IV-এর একটি প্রতিরোধক (যেমন পটাশিয়াম সায়ানাইড), যা হিম এ৩-সিইউবি অনুঘটক কেন্দ্রটি অবরুদ্ধ করে।'
      ),
      l(
        'A competitive inhibitor of succinate dehydrogenase (such as sodium malonate).',
        'সাকসিনেট ডিহাইড্রোজিনেজের একটি প্রতিযোগিতামূলক প্রতিরোধক (যেমন সোডিয়াম ম্যালোনেট)।'
      ),
      l(
        'An allosteric activator of the pyruvate dehydrogenase phosphatase enzyme complex.',
        'পাইরুভেট ডিহাইড্রোজিনেজ ফসফাটেজ এনজাইম কমপ্লেক্সের একটি অ্যালবস্টেরিক উদ্দীপক।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Uncouplers are lipid-soluble weak acids that shuttle protons across the inner mitochondrial membrane, bypassing ATP synthase. By dissipating the proton-motive force, they eliminate respiratory control backpressure, allowing the electron transport chain to run uncontrolled at maximum speed and consume oxygen rapidly while releasing energy purely as heat.',
      'আনকপলারসমূহ হলো লিপিড-দ্রবণীয় দুর্বল অ্যাসিড যা এটিপি সিন্থেজকে পাশ কাটিয়ে সরাসরি ঝিল্লি দিয়ে প্রোটন পরিবহন করে গ্রেডিয়েন্ট ধ্বংস করে দেয়। প্রোটন-মোটিভ বলের পশ্চাৎচাপ দূর হওয়ায় ইলেকট্রন শৃঙ্খল সর্বোচ্চ গতিতে চলে প্রচুর অক্সিজেন গ্রহণ করে এবং সমস্ত শক্তি এটিপির বদলে তাপ হিসেবে বের করে দেয়।'
    ),
  },
}
