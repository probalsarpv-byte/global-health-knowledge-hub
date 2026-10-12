import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const betaOxidationRefs = [
  {
    id: 'lehninger-biochem-8e-ch17',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 17: Fatty Acid Catabolism',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch22',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 22: Oxidation of Fatty Acids: Ketogenesis",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch22',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 22: Fatty Acid Metabolism',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'marks-medbiochem-6e-ch23',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 23: Oxidation of Fatty Acids and Ketogenesis",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

export const metabolism05BetaOxidationLesson: LessonTopic = {
  id: 'topic.metabolism.fatty-acid-oxidation-ketones',
  slug: 'fatty-acid-oxidation-ketones',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('05 · Fatty Acid Beta-Oxidation & Ketogenesis', '০৫ · ফ্যাটি অ্যাসিড বিটা-জারণ ও কিটোজেনেসিস'),
  summary: l(
    'Mitochondrial entry of fatty acids via the carnitine shuttle, the four-step beta-oxidation spiral, stoichiometric ATP yield, odd-chain and peroxisomal catabolism, hepatic ketogenesis, and diabetic ketoacidosis.',
    'কারনিটিন শাটলের মাধ্যমে মাইটোকন্ড্রিয়ায় ফ্যাটি অ্যাসিডের প্রবেশ, চার-ধাপ বিশিষ্ট বিটা-জারণ সর্পিল গতিপথ, এটিপি ফলন গণনা, বিজোড় কার্বন ও পারক্সিসোমাল জারণ, যকৃতের কিটোজেনেসিস এবং ডায়াবেটিক কিটোঅ্যাসিডোসিস।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Detail the mechanism of the carnitine palmitoyltransferase shuttle (CPT-I, CACT, CPT-II) and explain how malonyl-CoA allosterically coordinates fatty acid oxidation and lipogenesis.',
      'কারনিটিন পালমিটয়েলট্রান্সফারেজ শাটলের (CPT-I, CACT, CPT-II) কার্যপদ্ধতি বিশদভাবে ব্যাখ্যা করতে পারা এবং ম্যালোনিল-কোএ কীভাবে ফ্যাটি অ্যাসিড জারণ ও সংশ্লেষের মধ্যে সমন্বয় করে তা বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Calculate the net ATP yield from complete aerobic oxidation of saturated palmitate (16:0), accounting for ATP investment, FADH2, NADH, and acetyl-CoA TCA entries.',
      'সম্পৃক্ত পালমিটেট (১৬:০)-এর সম্পূর্ণ বায়বীয় জারণে উৎপাদিত নিট এটিপি গণনা করতে পারা, যেখানে এটিপি বিনিয়োগ, এফএডিএইচ২, এনএডিএইচ এবং অ্যাসিটাইল-কোএ টিসিএ চক্রের ফলন অন্তর্ভুক্ত থাকবে।'
    ),
    l(
      'Differentiate mitochondrial beta-oxidation, peroxisomal alpha/beta-oxidation, and explain hepatic ketone body synthesis (HMG-CoA synthase) versus extrahepatic oxidation (thiophorase).',
      'মাইটোকন্ড্রিয়াল বিটা-জারণ ও পারক্সিসোমাল আলফা/বিটা-জারণের পার্থক্য নির্ণয় করতে পারা এবং যকৃতে কিটোন বডি উৎপাদন (HMG-CoA সিন্থেজ) বনাম অতিরিক্ত-হেপাটিক অঙ্গের জারণ (থায়োফোরেজ) ব্যাখ্যা করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.tca-oxphos'],
  relatedTopicIds: ['topic.metabolism.glycogen-gluconeogenesis', 'topic.metabolism.lipogenesis-triglycerides'],
  references: betaOxidationRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch17', 'harpers-biochem-32e-ch22'],
    structure: ['harpers-biochem-32e-ch22', 'marks-medbiochem-6e-ch23'],
    mechanism: ['lehninger-biochem-8e-ch17', 'berg-biochem-9e-ch22'],
    integration: ['berg-biochem-9e-ch22', 'marks-medbiochem-6e-ch23'],
    practice: ['lehninger-biochem-8e-ch17', 'harpers-biochem-32e-ch22'],
    takeaways: ['lehninger-biochem-8e-ch17', 'marks-medbiochem-6e-ch23'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Fatty Acid Activation & Carnitine Shuttle', '১. ফ্যাটি অ্যাসিড সক্রিয়করণ ও কারনিটিন শাটল'), sectionId: 'introduction' },
      { id: 'sec-spiral', label: l('2. The Mitochondrial Beta-Oxidation Spiral', '২. মাইটোকন্ড্রিয়াল বিটা-জারণ সর্পিল প্রক্রিয়া'), sectionId: 'structure' },
      { id: 'sec-stoich', label: l('3. Energetic Stoichiometry & Special Fatty Acids', '৩. শক্তির পরিমাণগত হিসাব ও বিশেষ ফ্যাটি অ্যাসিড'), sectionId: 'mechanism' },
      { id: 'sec-ketones', label: l('4. Hepatic Ketogenesis & Extrahepatic Oxidation', '৪. যকৃতের কিটোজেনেসিস ও অঙ্গসমূহে কিটোন ব্যবহার'), sectionId: 'integration' },
      { id: 'sec-calc', label: l('5. Clinical Calculations & Inborn Oxidation Defects', '৫. ক্লিনিক্যাল গণনা ও জন্মগত জারণ ত্রুটি'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Summary & Review Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ সারাংশ ও পর্যালোচনা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Carnitine Palmitoyltransferase-I (CPT-I)', 'কারনিটিন পালমিটয়েলট্রান্সফারেজ-১ (CPT-I)'),
        definition: l(
          'Outer mitochondrial membrane enzyme that transfers fatty acyl groups from CoA to carnitine, forming acylcarnitine; acts as the rate-limiting, malonyl-CoA-inhibited valve of beta-oxidation.',
          'মাইটোকন্ড্রিয়ার বহিঃপর্দার এনজাইম যা ফ্যাটি অ্যাসাইল গ্রুপকে কোএ থেকে কারনিটিনে স্থানান্তর করে অ্যাসাইলকারনিটিন গঠন করে; এটি বিটা-জারণের প্রধান হার-নিয়ন্ত্রক এবং ম্যালোনিল-কোএ দ্বারা অবদমিত ভালভ হিসেবে কাজ করে।'
        ),
      },
      {
        term: l('Medium-Chain Acyl-CoA Dehydrogenase (MCAD)', 'মিডিয়াম-চেইন অ্যাসাইল-কোএ ডিহাইড্রোজিনেজ (MCAD)'),
        definition: l(
          'Mitochondrial enzyme catalyzing the initial dehydrogenation of 6- to 12-carbon fatty acyl-CoAs; deficiency is the most common inborn error of beta-oxidation, causing severe hypoketotic hypoglycemia.',
          'মাইটোকন্ড্রিয়াল এনজাইম যা ৬ থেকে ১২ কার্বনযুক্ত ফ্যাটি অ্যাসাইল-কোএ-এর প্রাথমিক ডিহাইড্রোজেনেশন ঘটায়; এর জন্মগত ত্রুটি বিটা-জারণের সবচেয়ে সাধারণ ব্যাধি যা মারাত্মক হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া ঘটায়।'
        ),
      },
      {
        term: l('Beta-Ketothiolase (Thiolase / ACAT1)', 'বিটা-কিটোথায়োলেজ (থায়োলেজ / ACAT1)'),
        definition: l(
          'Terminal enzyme of the beta-oxidation spiral that uses free coenzyme A to cleave beta-ketoacyl-CoA into acetyl-CoA and a shortened fatty acyl-CoA (n-2 carbons).',
          'বিটা-জারণ সর্পিল চক্রের অন্তিম এনজাইম যা মুক্ত কোএনজাইম এ ব্যবহার করে বিটা-কিটোঅ্যাসাইল-কোএ-কে ভেঙে একটি অ্যাসিটাইল-কোএ এবং দুই কার্বন হ্রাসপ্রাপ্ত ফ্যাটি অ্যাসাইল-কোএ (n-২ কার্বন) তৈরি করে।'
        ),
      },
      {
        term: l('Succinyl-CoA:3-Ketoacid CoA Transferase (Thiophorase / SCOT)', 'সাকসিনাইল-কোএ:৩-কিটোঅ্যাসিড কোএ ট্রান্সফারেজ (থায়োফোরেজ / SCOT)'),
        definition: l(
          'Extrahepatic enzyme that activates acetoacetate to acetoacetyl-CoA using succinyl-CoA; completely absent in hepatocytes, preventing the liver from futilely consuming the ketones it synthesizes.',
          'অতিরিক্ত-হেপাটিক অঙ্গের এনজাইম যা সাকসিনাইল-কোএ ব্যবহার করে অ্যাসিটোঅ্যাসিটেটকে অ্যাসিটোঅ্যাসিটাইল-কোএ-তে সক্রিয় করে; যকৃত কোষে এটি অনুপস্থিত থাকায় যকৃত নিজের উৎপাদিত কিটোন বডি নিজে ব্যবহার করতে পারে না।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Net ATP Accounting for Complete Oxidation of Palmitate (16:0)', 'পালমিটেটের (১৬:০) সম্পূর্ণ জারণে উৎপাদিত নিট এটিপির নিখুঁত হিসাব'),
        steps: [
          l(
            'Step 1: Initial activation of palmitate to palmitoyl-CoA in the cytosol requires hydrolysis of ATP to AMP and inorganic pyrophosphate (PPi). Subsequent pyrophosphatase cleavage (PPi -> 2 Pi) expends 2 high-energy phosphoanhydride bonds (net -2 ATP equivalents).',
            'ধাপ ১: সাইটোসলে ফ্যাটি অ্যাসিড সক্রিয়করণে এক অণু এটিপি ভেঙে এএমপি ও পাইরোফসফেট (পিপিআই) উৎপন্ন হয়। পরবর্তীতে পাইরোফসফেটেজ দ্বারা পিপিআই আর্দ্রবিশ্লেষিত হওয়ায় প্রকৃতপক্ষে দুটি উচ্চ-শক্তি ফসফোঅ্যানহাইড্রাইড বন্ধন খরচ হয় (নিট -২ এটিপি সমতুল্য)।'
          ),
          l(
            'Step 2: Palmitoyl-CoA undergoes 7 cycles of the mitochondrial beta-oxidation spiral, yielding 7 FADH2 (7 x 1.5 = 10.5 ATP), 7 NADH (7 x 2.5 = 17.5 ATP), and 8 acetyl-CoA molecules.',
            'ধাপ ২: মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে পালমিটয়েল-কোএ মোট ৭ বার বিটা-জারণ সর্পিল চক্র অতিক্রম করে, যার ফলে ৭ অণু এফএডিএইচ২ (৭ x ১.৫ = ১০.৫ এটিপি), ৭ অণু এনএডিএইচ (৭ x ২.৫ = ১৭.৫ এটিপি) এবং ৮ অণু অ্যাসিটাইল-কোএ উৎপন্ন হয়।'
          ),
          l(
            'Step 3: The 8 acetyl-CoA molecules enter the citric acid cycle. Each acetyl-CoA generates 1 GTP, 3 NADH, and 1 FADH2, equating to 10 ATP equivalents per turn (8 x 10 = 80 ATP). Summing yields 10.5 + 17.5 + 80 - 2 = 106 net moles of ATP per mole of palmitate.',
            'ধাপ ৩: উৎপন্ন ৮টি অ্যাসিটাইল-কোএ সাইট্রিক অ্যাসিড চক্রে প্রবেশ করে। প্রতি চক্রে ১ জিটিপি, ৩ এনএডিএইচ এবং ১ এফএডিএইচ২ উৎপন্ন হয়, যা প্রতিটিতে ১০টি এটিপির সমান (৮ x ১০ = ৮০ এটিপি)। সর্বমোট শক্তি: ১০.৫ + ১৭.৫ + ৮০ - ২ = ১০৬ মোল নিট এটিপি প্রতি মোল পালমিটেটে।'
          ),
        ],
        conclusion: l(
          'Fatty acid beta-oxidation yields far greater thermodynamic energy per carbon (6.625 ATP/carbon) than glucose (5.33 ATP/carbon) due to the highly reduced hydrocarbon state of aliphatic acyl chains.',
          'ফ্যাটি অ্যাসিডের হাইড্রোকার্বন শিকল অত্যন্ত বিজারিত অবস্থায় থাকার কারণে গ্লুকোজের তুলনায় (প্রতি কার্বনে ৫.৩৩ এটিপি) কার্বন প্রতি অনেক বেশি শক্তি (প্রতি কার্বনে ৬.৬২৫ এটিপি) উৎপন্ন হয়।'
        ),
      },
      {
        title: l('Catabolism of Odd-Chain Fatty Acids to Succinyl-CoA', 'বিজোড় কার্বনযুক্ত ফ্যাটি অ্যাসিডের সাকসিনাইল-কোএ-তে রূপান্তর'),
        steps: [
          l(
            'Step 1: Beta-oxidation of an odd-chain fatty acid proceeds normally until the final cleavage yields acetyl-CoA (2C) and propionyl-CoA (3C).',
            'ধাপ ১: বিজোড় কার্বন ফ্যাটি অ্যাসিডের বিটা-জারণ স্বাভাবিকভাবে অগ্রসর হয়ে সর্বশেষ ধাপে একটি অ্যাসিটাইল-কোএ (২ কার্বন) এবং একটি প্রোপায়োনাইল-কোএ (৩ কার্বন) উৎপন্ন করে।'
          ),
          l(
            'Step 2: Propionyl-CoA carboxylase fixes bicarbonate in an ATP- and biotin-dependent reaction to produce D-methylmalonyl-CoA, which is racemized to L-methylmalonyl-CoA.',
            'ধাপ ২: প্রোপায়োনাইল-কোএ কার্বক্সিলেজ এনজাইম এটিপি ও বায়োটিন সহযোগে বাইকার্বনেট যুক্ত করে ডি-মিথাইলম্যালোনিল-কোএ তৈরি করে, যা পরে এল-মিথাইলম্যালোনিল-কোএ-তে পরিবর্তিত হয়।'
          ),
          l(
            'Step 3: Methylmalonyl-CoA mutase, requiring coenzyme B12 (adenosylcobalamin), catalyzes a carbon skeleton rearrangement to yield succinyl-CoA, which enters the TCA cycle for gluconeogenesis.',
            'ধাপ ৩: মিথাইলম্যালোনিল-কোএ মিউটেজ এনজাইম কোএনজাইম বি১২ (অ্যাডেনোসিলকোবালামিন) ব্যবহার করে কার্বন কঙ্কাল পুনর্গঠনের মাধ্যমে সাকসিনাইল-কোএ তৈরি করে, যা সরাসরি গ্লুকোনিওজেনেসিসে অংশ নিতে পারে।'
          ),
        ],
        conclusion: l(
          'Odd-chain fatty acids are uniquely glucogenic because propionyl-CoA converts directly into anaplerotic succinyl-CoA rather than burning completely as two-carbon units.',
          'বিজোড় কার্বনযুক্ত ফ্যাটি অ্যাসিড একমাত্র গ্লুকোজ প্রস্তুতকারী লিপিড কারণ এর অবশিষ্টাংশ প্রোপায়োনাইল-কোএ সাকসিনাইল-কোএ হয়ে নেট গ্লুকোজ সংশ্লেষ করতে পারে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does a patient with an inborn deficiency of medium-chain acyl-CoA dehydrogenase (MCAD) develop hypoketotic hypoglycemia during prolonged fasting?',
          'দীর্ঘমেয়াদী উপবাসের সময় মিডিয়াম-চেইন অ্যাসাইল-কোএ ডিহাইড্রোজিনেজ (MCAD) ঘাটতিযুক্ত রোগীর কেন কিটোনহীন হাইপোগ্লাইসেমিয়া (হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া) দেখা দেয়?'
        ),
        answer: l(
          'Without functional MCAD, beta-oxidation stalls at medium-chain lengths, depriving hepatocytes of the acetyl-CoA required both to activate pyruvate carboxylase for gluconeogenesis and to drive ketogenesis, leading to blood glucose collapse without protective ketone bodies.',
          'কার্যক্ষম MCAD না থাকলে বিটা-জারণ মধ্যম দৈর্ঘ্যে আটকে যায়; ফলে যকৃতে গ্লুকোনিওজেনেসিসের পাইরুভেট কার্বক্সিলেজ সক্রিয় করার মতো অ্যাসিটাইল-কোএ থাকে না এবং কিটোন তৈরির কাঁচামালও থাকে না, ফলে মারাত্মক হাইপোগ্লাইসেমিয়া ও কিটোনের ঘাটতি দেখা দেয়।'
        ),
      },
      {
        question: l(
          'How does malonyl-CoA serve as a reciprocal metabolic switch preventing futile cycling between fatty acid synthesis and degradation?',
          'ম্যালোনিল-কোএ কীভাবে ফ্যাটি অ্যাসিড সংশ্লেষ ও ধ্বংসের অপচয়মূলক দ্বিমুখী চক্র রোধে প্রধান পারষ্পরিক সুইচ হিসেবে কাজ করে?'
        ),
        answer: l(
          'Malonyl-CoA, produced in the cytosol by acetyl-CoA carboxylase during energy abundance, potently inhibits CPT-I on the outer mitochondrial membrane, preventing newly formed fatty acids from entering mitochondria for beta-oxidation.',
          'প্রচুর শক্তির উপস্থিতিতে সাইটোসলে অ্যাসিটাইল-কোএ কার্বক্সিলেজ দ্বারা উৎপন্ন ম্যালোনিল-কোএ সরাসরি মাইটোকন্ড্রিয়াল বহিঃপর্দার CPT-I এনজাইমকে অবদমিত করে, ফলে নবগঠিত ফ্যাটি অ্যাসিড মাইটোকন্ড্রিয়ায় প্রবেশ করে জারিত হতে পারে না।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'beta-oxidation-ketogenesis-hub',
    title: l('Interactive Lipid Flux: Carnitine Shuttle, Beta-Oxidation & Ketogenesis', 'ইন্টারেক্টিভ লিপিড প্রবাহ: কারনিটিন শাটল, বিটা-জারণ ও কিটোজেনেসিস'),
    description: l(
      'Explore the spatial journey of fatty acids from cytosolic activation across mitochondrial membranes into the 4-step beta-oxidation spiral and hepatic ketone synthesis.',
      'সাইটোসলিক সক্রিয়করণ থেকে মাইটোকন্ড্রিয়াল পর্দার ভেতর দিয়ে ৪-ধাপের বিটা-জারণ সর্পিল গতিপথ ও যকৃতে কিটোন সংশ্লেষের সম্পূর্ণ আণবিক ভ্রমণ প্রত্যক্ষ করুন।'
    ),
    disclaimer: l(
      'Stoichiometry and enzymatic kinetics verified against Lehninger Principles of Biochemistry (8th ed) and Harper Illustrated Biochemistry (32nd ed).',
      'রাসায়নিক পরিমাণ ও এনজাইম গতিবিদ্যা লেহনিঞ্জার বায়োকেমিস্ট্রি এবং হার্পারস ইলাস্ট্রেটেড বায়োকেমিস্ট্রি দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'carnitine-shuttle',
        label: l('1. CPT-I & Carnitine Shuttle [Mitochondrial Entry Valve]', '১. CPT-I ও কারনিটিন শাটল [মাইটোকন্ড্রিয়াল প্রবেশ ভালভ]'),
        description: l(
          'Rate-limiting gateway of lipid oxidation. Fatty acyl-CoA is conjugated with carnitine by CPT-I, transported by CACT across the inner membrane, and reconverted to acyl-CoA by CPT-II.',
          'লিপিড জারণের প্রধান নিয়ন্ত্রক প্রবেশদ্বার। CPT-I এনজাইম ফ্যাটি অ্যাসাইল-কোএ-কে কারনিটিনের সাথে যুক্ত করে, CACT দিয়ে অন্তঃপর্দায় পাঠায় এবং CPT-II পুনরায় অ্যাসাইল-কোএ তৈরি করে।'
        ),
        details: l(
          'Allosterically inhibited by cytosolic malonyl-CoA (Ki ~ 1-2 uM). Deficiencies cause severe hypoketotic hypoglycemia upon fasting.',
          'সাইটোসলের ম্যালোনিল-কোএ দ্বারা তীব্রভাবে অবদমিত হয়। এর অভাবে উপবাসকালে মারাত্মক হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া সৃষ্টি হয়।'
        ),
        sectionId: 'introduction',
      },
      {
        id: 'acyl-coa-dh',
        label: l('2. Acyl-CoA Dehydrogenase [Step 1: Oxidation with FAD]', '২. অ্যাসাইল-কোএ ডিহাইড্রোজিনেজ [ধাপ ১: FAD সহযোগে জারণ]'),
        description: l(
          'Introduces a trans-alpha,beta double bond between C2 and C3, transferring electrons to enzyme-bound FAD and generating trans-delta2-enoyl-CoA and FADH2.',
          'C2 এবং C3 কার্বনের মধ্যে একটি ট্রান্স-আলফা,বিটা দ্বিবন্ধন তৈরি করে, এনজাইমের সাথে আবদ্ধ FAD-তে ইলেকট্রন স্থানান্তর করে ট্রান্স-ডেল্টা২-ইনয়েল-কোএ ও FADH2 উৎপন্ন করে।'
        ),
        details: l(
          'FADH2 transfers electrons via electron-transferring flavoprotein (ETF) and ETF:Q oxidoreductase into ubiquinone, driving ~1.5 ATP equivalents.',
          'FADH2 পরবর্তীতে ইলেকট্রন-ট্রান্সফারিং ফ্ল্যাভোপ্রোটিন (ETF) এর মাধ্যমে কোএনজাইম কিউ-তে ইলেকট্রন পাঠায়, যা ১.৫ এটিপি সমতুল্য শক্তি উৎপন্ন করে।'
        ),
        sectionId: 'structure',
      },
      {
        id: 'enoyl-coa-hydratase',
        label: l('3. Enoyl-CoA Hydratase [Step 2: Stereospecific Hydration]', '৩. ইনয়েল-কোএ হাইড্রেটেজ [ধাপ ২: স্টেরিওস্পেসিফিক জলযোজন]'),
        description: l(
          'Hydrates the trans double bond stereospecifically, adding a hydroxyl group to C3 to form L-beta-hydroxyacyl-CoA without energy investment.',
          'ট্রান্স দ্বিবন্ধনে সুনির্দিষ্টভাবে পানি যুক্ত করে C3 কার্বনে একটি হাইড্রোক্সিল মূলক প্রবেশ করায় এবং এল-বিটা-হাইড্রক্সিঅ্যাসাইল-কোএ উৎপন্ন করে।'
        ),
        details: l(
          'Strictly stereospecific for L-isomers; acts rapidly to prevent accumulation of potentially toxic unsaturated intermediates.',
          'এল-আইসোমারের প্রতি সম্পূর্ণ সংবেদনশীল; ক্ষতিকর অসম্পৃক্ত অন্তর্বর্তী যৌগের জমা হওয়া ঠেকাতে এটি অতি দ্রুত বিক্রিয়া সম্পাদন করে।'
        ),
        sectionId: 'structure',
      },
      {
        id: 'hydroxyacyl-dh',
        label: l('4. 3-Hydroxyacyl-CoA Dehydrogenase [Step 3: Oxidation with NAD+]', '৪. ৩-হাইড্রক্সিঅ্যাসাইল-কোএ ডিহাইড্রোজিনেজ [ধাপ ৩: NAD+ সহযোগে জারণ]'),
        description: l(
          'Oxidizes the C3 secondary alcohol to a keto group using NAD+, generating beta-ketoacyl-CoA and NADH + H+ for Complex I of the respiratory chain.',
          'C3 সেকেন্ডারি অ্যালকোহলকে NAD+ এর মাধ্যমে কিটো গ্রুপে জারিত করে বিটা-কিটোঅ্যাসাইল-কোএ এবং রেস্পিরেটরি চেইনের কমপ্লেক্স ১-এর জন্য NADH + H+ উৎপন্ন করে।'
        ),
        details: l(
          'High intramitochondrial NADH/NAD+ ratio (as in acute ethanol intoxication) strongly slows this enzyme, inhibiting lipid oxidation.',
          'মাইটোকন্ড্রিয়ায় উচ্চ NADH/NAD+ অনুপাত (যেমন অ্যালকোহল পানের পর) এই এনজাইমকে মারাত্মকভাবে ধীর করে ফ্যাটি অ্যাসিড জারণ স্তব্ধ করে দেয়।'
        ),
        sectionId: 'structure',
      },
      {
        id: 'thiolase-cleavage',
        label: l('5. Beta-Ketothiolase [Step 4: Thiolytic Cleavage]', '৫. বিটা-কিটোথায়োলেজ [ধাপ ৪: থায়োলাইটিক বিদারণ]'),
        description: l(
          'Cleaves the terminal two carbons using coenzyme A, releasing one acetyl-CoA and a shortened fatty acyl-CoA (n-2) ready for the next spiral round.',
          'কোএনজাইম এ ব্যবহার করে শেষ দুটি কার্বনকে বিচ্ছিন্ন করে একটি অ্যাসিটাইল-কোএ এবং পরবর্তী চক্রের উপযোগী দুই কার্বন খাটো ফ্যাটি অ্যাসাইল-কোএ তৈরি করে।'
        ),
        details: l(
          'Thermodynamically favorable reaction that pulls the preceding near-equilibrium steps forward, ensuring irreversible degradation of lipids.',
          'তাপগতিবিদ্যাগতভাবে অনুকূল বিক্রিয়া যা পূর্ববর্তী সাম্যাবস্থার ধাপগুলোকে সামনের দিকে টেনে নিয়ে লিপিডের অবিরাম ক্ষয় নিশ্চিত করে।'
        ),
        sectionId: 'mechanism',
      },
      {
        id: 'hmg-coa-synthase',
        label: l('6. Mitochondrial HMG-CoA Synthase [Ketogenesis Master Hub]', '৬. মাইটোকন্ড্রিয়াল HMG-CoA সিন্থেজ [কিটোজেনেসিস মূল কেন্দ্র]'),
        description: l(
          'Rate-limiting enzyme of hepatic ketogenesis. Condenses acetoacetyl-CoA with acetyl-CoA to form HMG-CoA inside liver mitochondrial matrix.',
          'যকৃতের কিটোন তৈরির প্রধান হার-নিয়ন্ত্রক এনজাইম। এটি যকৃতের মাইটোকন্ড্রিয়ায় অ্যাসিটোঅ্যাসিটাইল-কোএ-এর সাথে অ্যাসিটাইল-কোএ যুক্ত করে HMG-CoA তৈরি করে।'
        ),
        details: l(
          'Exclusively expressed in liver mitochondria. Upregulated during fasting, starvation, and untreated type 1 diabetes mellitus.',
          'কেবল যকৃতের মাইটোকন্ড্রিয়াতেই সক্রিয়। দীর্ঘ উপবাস, অনাহার এবং অনিয়ন্ত্রিত টাইপ ১ ডায়াবেটিসে এর প্রকাশ বহুগুণ বৃদ্ধি পায়।'
        ),
        sectionId: 'integration',
      },
      {
        id: 'ketone-oxidation',
        label: l('7. Extrahepatic Thiophorase (SCOT) [Ketone Fuel Extraction]', '৭. এক্সট্রাহেপাটিক থায়োফোরেজ (SCOT) [কিটোন জ্বালানি আহরণ]'),
        description: l(
          'Activates circulating acetoacetate in brain, myocardium, and skeletal muscle to acetoacetyl-CoA, bypassing glucose during starvation.',
          'মস্তিষ্ক, হৃদপেশি ও কঙ্কালপেশিতে সঞ্চালিত অ্যাসিটোঅ্যাসিটেটকে অ্যাসিটোঅ্যাসিটাইল-কোএ-তে সক্রিয় করে অনাহারে গ্লুকোজের বিকল্প জ্বালানি জোগায়।'
        ),
        details: l(
          'Absent in hepatocytes, preventing an energy-wasting futile cycle in the liver while sparing blood glucose for erythrocytes.',
          'যকৃত কোষে অনুপস্থিত থাকায় যকৃতে কোনো অপচয়মূলক চক্র হয় না এবং লোহিত রক্তকণিকার জন্য রক্তের বহুমূল্য গ্লুকোজ সংরক্ষিত থাকে।'
        ),
        sectionId: 'integration',
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Introduction: Fatty Acids as the Body Dense Fuel Reserve', 'ভূমিকা: দেহের প্রধান ঘন শক্তিভাণ্ডার হিসেবে ফ্যাটি অ্যাসিড'),
          paragraphs: [
            l(
              'Triacylglycerols stored in adipose tissue represent the human body principal reservoir of metabolic energy. While glycogen stores provide fuel for less than 24 hours of fasting, adipose lipid reserves can sustain cellular life for weeks or months. During fasting, exercise, or stress, hormones signal the breakdown of stored triglycerides into free fatty acids that circulate bound to albumin to nourish heart, muscle, and liver.',
              'অ্যাডিপোজ টিস্যুতে সঞ্চিত ট্রাইগ্লিসারাইড মানবদেহের প্রধান বিপাকীয় শক্তিভাণ্ডার। যেখানে গ্লাইকোজেন মাত্র ২৪ ঘণ্টারও কম সময় শক্তি যোগায়, সেখানে চর্বি ভাণ্ডার কয়েক সপ্তাহ থেকে কয়েক মাস পর্যন্ত জীবন টিকিয়ে রাখতে পারে। উপবাস বা পরিশ্রমের সময় হরমোনের নির্দেশে এই চর্বি ভেঙে মুক্ত ফ্যাটি অ্যাসিড হিসেবে রক্তে নির্গত হয় এবং অ্যালবুমিনের সাথে যুক্ত হয়ে বিভিন্ন অঙ্গে পরিবাহিত হয়।'
            ),
            l(
              'To be converted into cellular energy, fatty acids must first be trapped inside the cell by attaching a coenzyme A molecule. Once activated in the cytosol, these long-chain fatty acids face a major barrier: the inner mitochondrial membrane is completely impermeable to them, requiring a specialized carrier system called the carnitine shuttle to enter the mitochondrial engine room.',
              'কোষীয় শক্তিতে রূপান্তরিত হতে ফ্যাটি অ্যাসিডকে প্রথমে কোএনজাইম এ যুক্ত করে সক্রিয় করতে হয়। সাইটোসলে সক্রিয় হওয়ার পর এই দীর্ঘ শিকলের ফ্যাটি অ্যাসিডগুলো একটি বড় বাধার মুখোমুখি হয়: মাইটোকন্ড্রিয়ার ভেতরের পর্দা এদের জন্য সম্পূর্ণ অভেদ্য। ফলে মাইটোকন্ড্রিয়ায় প্রবেশের জন্য এদের একটি বিশেষ কারনিটিন শাটল ব্যবস্থার প্রয়োজন হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Carnitine Shuttle: Gateway to the Mitochondrial Matrix', 'কারনিটিন শাটল: মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে প্রবেশের প্রধান দ্বার'),
          paragraphs: [
            l(
              'The carnitine shuttle acts as a cellular checkpoint controlling which fatty acids are allowed into the mitochondria for destruction. An enzyme on the outer mitochondrial membrane called CPT-I temporarily swaps coenzyme A for carnitine, forming acylcarnitine. A translocase then carries acylcarnitine across the inner membrane, where CPT-II restores the original fatty acyl-CoA inside the matrix.',
              'কারনিটিন শাটল একটি নিয়ন্ত্রক প্রবেশদ্বার হিসেবে কাজ করে যা নির্ধারণ করে কোন ফ্যাটি অ্যাসিড মাইটোকন্ড্রিয়ায় প্রবেশ করে ধ্বংস হবে। বহিঃপর্দার CPT-I এনজাইম সাময়িকভাবে কোএ সরিয়ে কারনিটিন যুক্ত করে অ্যাসাইলকারনিটিন বানায়, যা ট্রান্সলোকেজ দিয়ে ভেতরে ঢুকে CPT-II এনজাইমের মাধ্যমে পুনরায় ফ্যাটি অ্যাসাইল-কোএ-তে রূপান্তরিত হয়।'
            ),
            l(
              'This gateway is tightly regulated by the fuel state of the cell. When the body is well-fed and synthesizing fat, a molecule called malonyl-CoA is produced in the cytosol. Malonyl-CoA directly turns off CPT-I, ensuring that newly synthesized fatty acids are never accidentally burned at the same time they are being constructed.',
              'এই প্রবেশদ্বারটি কোষের জ্বালানি প্রাচুর্য দ্বারা নিয়ন্ত্রিত হয়। শরীর যখন ভুক্তাবস্থায় চর্বি তৈরি করে, তখন সাইটোসলে ম্যালোনিল-কোএ তৈরি হয়। এই ম্যালোনিল-কোএ সরাসরি CPT-I কে বন্ধ করে দেয়, যাতে নবগঠিত ফ্যাটি অ্যাসিড তৈরি হওয়ার সাথে সাথেই অপচয়মূলকভাবে জারিত হতে না পারে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Four-Step Beta-Oxidation Spiral: Chopping Two Carbons at a Time', 'চার-ধাপের বিটা-জারণ সর্পিল গতিপথ: প্রতি চক্রে দুই কার্বন কর্তন'),
          paragraphs: [
            l(
              'Once inside the mitochondrial matrix, fatty acyl-CoA enters a repeating four-step degradation sequence called the beta-oxidation spiral. In each turn of this spiral, chemical reactions oxidize the beta-carbon, hydrate the intermediate, oxidize it a second time, and finally snip off a two-carbon fragment as acetyl-CoA using coenzyme A.',
              'মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে পৌঁছানোর পর ফ্যাটি অ্যাসিড চার-ধাপ বিশিষ্ট একটি পুনরাবৃত্তিমূলক বিটা-জারণ চক্রে প্রবেশ করে। প্রতিটি আবর্তনে রাসায়নিক বিক্রিয়ার মাধ্যমে বিটা-কার্বনটি জারিত হয়, পানি যুক্ত হয়, পুনরায় জারিত হয় এবং অবশেষে কোএনজাইম এ সহযোগে দুই কার্বনের অ্যাসিটাইল-কোএ হিসেবে কেটে আলাদা হয়।'
            ),
            l(
              'Each turn of the spiral generates one molecule of FADH2 and one molecule of NADH, which feed their high-energy electrons directly into the electron transport chain to generate ATP. The shortened fatty acid then repeats the cycle until the entire chain is chopped into two-carbon acetyl-CoA building blocks for the citric acid cycle.',
              'প্রতিটি চক্রে একটি FADH2 এবং একটি NADH তৈরি হয়, যা সরাসরি ইলেকট্রন পরিবহন শৃঙ্খলে ইলেকট্রন সরবরাহ করে প্রচুর এটিপি উৎপন্ন করে। খাটো হওয়া ফ্যাটি অ্যাসিডটি পুনরায় একই চক্রের মধ্য দিয়ে যেতে থাকে যতক্ষণ না সম্পূর্ণ শিকলটি দুই কার্বনের অ্যাসিটাইল-কোএ-তে পরিণত হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Ketone Bodies: The Brain Emergency Fuel in Starvation', 'কিটোন বডি: অনাহারের সময় মস্তিষ্কের জরুরি বিকল্প জ্বালানি'),
          paragraphs: [
            l(
              'While the heart and skeletal muscles can directly burn fatty acids for energy, the brain cannot use large fatty acids because they cannot readily cross the blood-brain barrier. Under prolonged starvation or fasting, the liver solves this crisis by condensing surplus acetyl-CoA into water-soluble ketone bodies: acetoacetate and beta-hydroxybutyrate.',
              'হৃদপিণ্ড ও পেশিকলা সরাসরি ফ্যাটি অ্যাসিড পুড়িয়ে শক্তি পেতে পারলেও মস্তিষ্ক তা পারে না, কারণ বড় ফ্যাটি অ্যাসিড রক্ত-মস্তিষ্ক বাধা অতিক্রম করতে অক্ষম। দীর্ঘ অনাহারে যকৃৎ অতিরিক্ত অ্যাসিটাইল-কোএ থেকে পানিতে দ্রবণীয় কিটোন বডি তৈরি করে এই সংকট সমাধান করে।'
            ),
            l(
              'These ketone bodies enter the blood and easily cross into the brain, where neurons convert them back into acetyl-CoA for aerobic energy. This emergency adaptation reduces the brain dependence on glucose by up to 70 percent during extended fasting, preventing the lethal breakdown of somatic muscle proteins for gluconeogenesis.',
              'এই কিটোন বডি রক্তে মিশে সহজে মস্তিষ্কে পৌঁছে যায় এবং স্নায়ুকোষ এদের পুনরায় অ্যাসিটাইল-কোএ-তে রূপান্তর করে এটিপি তৈরি করে। এই জীবনরক্ষাকারী কৌশল অনাহারের সময় গ্লুকোজের ওপর মস্তিষ্কের নির্ভরতা ৭০ শতাংশ কমিয়ে দিয়ে পেশির প্রোটিন ক্ষয় হওয়া থেকে রক্ষা করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Reasoning: Evaluating Fasting Fuel Shifts', 'মৌলিক যুক্তি: উপবাসকালীন জ্বালানি রূপান্তর মূল্যায়ন'),
          paragraphs: [
            l(
              'When a healthy individual sleeps overnight or fasts for 12 to 18 hours, liver glycogen reserves begin to decline. To preserve blood glucose for red blood cells (which have no mitochondria and cannot burn fats), systemic hormone shifts shut off carbohydrate burning in muscles and unleash fatty acid oxidation as the primary energy provider.',
              'সুস্থ মানুষ যখন রাতে ঘুমায় বা ১২ থেকে ১৮ ঘণ্টা উপবাস থাকে, তখন যকৃতের গ্লাইকোজেন কমতে থাকে। লোহিত রক্তকণিকার জন্য রক্তের বহুমূল্য গ্লুকোজ সংরক্ষণ করতে হরমোন সংকেতের মাধ্যমে পেশিকলায় গ্লুকোজ পোড়ানো বন্ধ হয়ে ফ্যাটি অ্যাসিড জারণ প্রধান শক্তিতে পরিণত হয়।'
            ),
          ],
          bullets: [
            l('Insulin drops and glucagon rises, mobilizing free fatty acids from adipose fat droplets.', 'রক্তে ইনসুলিন কমে এবং গ্লুকাগন বেড়ে চর্বি কোষ থেকে ফ্যাটি অ্যাসিড নির্গমন শুরু করে।'),
            l('Beta-oxidation yields both ATP for liver energy and acetyl-CoA to fuel hepatic ketogenesis.', 'বিটা-জারণ যকৃতের জন্য এটিপি এবং কিটোন তৈরির জন্য অ্যাসিটাইল-কোএ সরবরাহ করে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Foundational Takeaways & Summary', 'মূল শিক্ষণীয় বিষয় ও সংক্ষিপ্ত সারাংশ'),
          paragraphs: [
            l(
              'Fatty acid beta-oxidation is the body primary long-term aerobic energy engine, regulated at the mitochondrial entry gateway by the carnitine shuttle. The liver converts excess lipid fragments into ketone bodies that nourish the brain during starvation, while hepatocytes lack the enzyme thiophorase to avoid consuming their own exported fuel.',
              'ফ্যাটি অ্যাসিড বিটা-জারণ হলো দেহের প্রধান দীর্ঘমেয়াদী শক্তি ইঞ্জিন, যা কারনিটিন শাটল দ্বারা নিয়ন্ত্রিত হয়। যকৃৎ অতিরিক্ত লিপিড থেকে কিটোন বডি তৈরি করে অনাহারে মস্তিষ্ককে বাঁচিয়ে রাখে, তবে যকৃতে থায়োফোরেজ এনজাইম না থাকায় এটি নিজের তৈরি কিটোন নিজে অপচয় করে না।'
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
          heading: l('Fatty Acid Activation & The Carnitine Palmitoyltransferase Shuttle Kinetics', 'ফ্যাটি অ্যাসিড সক্রিয়করণ ও কারনিটিন শাটলের এনজাইম গতিবিদ্যা'),
          paragraphs: [
            l(
              'During prolonged fasting, vigorous exercise, or metabolic stress, low circulating insulin combined with elevated glucagon and epinephrine activates adipose hormone-sensitive lipase (HSL) and adipose triglyceride lipase (ATGL). Triacylglycerols stored in lipid droplets undergo sequential lipolysis, liberating unesterified free fatty acids (FFAs) and glycerol into the circulation. These hydrophobic long-chain fatty acids bind human serum albumin for vascular transit and enter target tissues such as skeletal muscle, myocardium, and hepatocytes via CD36 and fatty acid transport proteins (FATPs).',
              'দীর্ঘমেয়াদী উপবাস, তীব্র শারীরিক পরিশ্রম বা বিপাকীয় চাপের সময় রক্তে ইনসুলিনের পতন এবং গ্লুকাগন ও এপিনেফ্রিনের বৃদ্ধি অ্যাডিপোজ টিস্যুর হরমোন-সংবেদনশীল লাইপেজ (এইচএসএল) এবং ট্রাইগ্লিসারাইড লাইপেজকে (এটিজিএল) সক্রিয় করে। চর্বি কোষে সঞ্চিত ট্রাইগ্লিসারাইড ক্রমান্বয়ে আর্দ্রবিশ্লেষিত হয়ে রক্তপ্রবাহে মুক্ত ফ্যাটি অ্যাসিড এবং গ্লিসারল নির্গত করে। এই হাইড্রোফোবিক দীর্ঘ-শিকল ফ্যাটি অ্যাসিডগুলো সিরাম অ্যালবুমিনের সাথে যুক্ত হয়ে রক্তে পরিবাহিত হয় এবং CD36 ও FATP প্রোটিনের মাধ্যমে কঙ্কালপেশি, হৃদপেশি ও যকৃতে প্রবেশ করে।'
            ),
            l(
              'In the outer mitochondrial membrane and cytosolic face, fatty acyl-CoA synthetases (thiokinases) trap free fatty acids by coupling acyl-adenylate formation with coenzyme A esterification, consuming two high-energy phosphoanhydride bonds via coupled pyrophosphate cleavage. Because the inner mitochondrial membrane is strictly impermeable to coenzyme A esters, long-chain acyl-CoAs require the carnitine palmitoyltransferase shuttle. Carnitine palmitoyltransferase-I (CPT-I) on the outer membrane substitutes carnitine for CoA, generating acylcarnitine. Carnitine-acylcarnitine translocase (CACT) antiports acylcarnitine into the matrix while exporting free carnitine, where matrix CPT-II regenerates fatty acyl-CoA.',
              'মাইটোকন্ড্রিয়ার বহিঃপর্দায় ফ্যাটি অ্যাসাইল-কোএ সিন্থেটেজ এনজাইম এটিপি থেকে পাইরোফসফেট বিচ্ছিন্ন করার মাধ্যমে ফ্যাটি অ্যাসিডকে কোএনজাইম এ-র সাথে যুক্ত করে অ্যাসাইল-কোএ তৈরি করে, যাতে নিট দুটি উচ্চ-শক্তি ফসফেট বন্ধন ব্যয় হয়। যেহেতু মাইটোকন্ড্রিয়ার ভেতরের পর্দা কোএনজাইম এ এস্টারের জন্য সম্পূর্ণ অভেদ্য, তাই দীর্ঘ শিকলের ফ্যাটি অ্যাসিডের জন্য কারনিটিন শাটল অপরিহার্য। বহিঃপর্দার CPT-I কারনিটিন যুক্ত করে অ্যাসাইলকারনিটিন বানায়, যা CACT ট্রান্সলোকেজ দিয়ে ভেতরে প্রবেশ করে এবং ম্যাট্রিক্সের CPT-II পুনরায় ফ্যাটি অ্যাসাইল-কোএ তৈরি করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Four-Step Mitochondrial Beta-Oxidation Spiral Mechanics', 'মাইটোকন্ড্রিয়াল বিটা-জারণ সর্পিল গতিপথের চার-ধাপের কার্যপ্রণালী'),
          paragraphs: [
            l(
              'Once situated within the alkaline mitochondrial matrix, fatty acyl-CoA undergoes sequential rounds of the four-step beta-oxidation spiral. Each turn of the spiral degrades the aliphatic chain by two carbon atoms, releasing one molecule of acetyl-CoA alongside one FADH2 and one NADH reducing equivalent. The pathway is named beta-oxidation because chemical cleavage occurs exclusively at the beta-carbon (carbon-3), oxidizing a stable aliphatic alkane bond into a reactive carbonyl group.',
              'মাইটোকন্ড্রিয়ার ক্ষারীয় ম্যাট্রিক্সে প্রবেশ করার পর ফ্যাটি অ্যাসাইল-কোএ চার-ধাপের বিটা-জারণ সর্পিল প্রক্রিয়ায় প্রবেশ করে। প্রতিটি চক্রে অ্যালিফ্যাটিক শিকল থেকে দুটি করে কার্বন পরমাণু বিচ্ছিন্ন হয়ে একটি অ্যাসিটাইল-কোএ, একটি FADH2 এবং একটি NADH তৈরি হয়। যেহেতু এই রূপান্তরটি সুনির্দিষ্টভাবে কার্বন শৃঙ্খলের বিটা-কার্বনে (কার্বন-৩) সম্পন্ন হয় এবং সম্পৃক্ত হাইড্রোকার্বনকে সক্রিয় কার্বনিল গ্রুপে রূপান্তরিত করে, তাই একে বিটা-জারণ বলা হয়।'
            ),
            l(
              'Step 1 is catalyzed by acyl-CoA dehydrogenase, which introduces a trans-alpha,beta double bond between carbons 2 and 3 using enzyme-bound FAD, generating trans-delta2-enoyl-CoA. Step 2 involves enoyl-CoA hydratase, which stereospecifically adds a water molecule across the double bond to form L-beta-hydroxyacyl-CoA. Step 3 is catalyzed by 3-hydroxyacyl-CoA dehydrogenase using NAD+ as the electron acceptor, generating beta-ketoacyl-CoA. Step 4, catalyzed by beta-ketothiolase, executes thiolytic cleavage with free CoA, liberating acetyl-CoA and an acyl-CoA shortened by two carbons.',
              '১ম ধাপে অ্যাসাইল-কোএ ডিহাইড্রোজিনেজ এনজাইম FAD ব্যবহার করে কার্বন ২ ও ৩ এর মাঝে ট্রান্স দ্বিবন্ধন তৈরি করে ট্রান্স-ডেল্টা২-ইনয়েল-কোএ উৎপন্ন করে। ২য় ধাপে ইনয়েল-কোএ হাইড্রেটেজ পানি যুক্ত করে এল-বিটা-হাইড্রক্সিঅ্যাসাইল-কোএ তৈরি করে। ৩য় ধাপে ৩-হাইড্রক্সিঅ্যাসাইল-কোএ ডিহাইড্রোজিনেজ NAD+ ব্যবহার করে এটিকে বিটা-কিটোঅ্যাসাইল-কোএ-তে জারিত করে। ৪র্থ ধাপে বিটা-কিটোথায়োলেজ কোএনজাইম এ সহযোগে থায়োলাইটিক বিদারণ ঘটিয়ে একটি অ্যাসিটাইল-কোএ এবং দুই কার্বন খাটো নতুন ফ্যাটি অ্যাসাইল-কোএ মুক্ত করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Energetic Stoichiometry, Odd-Chain Oxidation & Peroxisomes', 'রাসায়নিক পরিমাণ, বিজোড় কার্বন জারণ ও পারক্সিসোম সুরক্ষা ব্যবস্থা'),
          paragraphs: [
            l(
              'For a fully saturated sixteen-carbon palmitate molecule (16:0), complete breakdown requires seven successive rounds through the spiral, yielding eight acetyl-CoA, seven FADH2, and seven NADH. Reoxidation of each FADH2 via ubiquinone generates ~1.5 ATP, while each matrix NADH via Complex I yields ~2.5 ATP. When the eight acetyl-CoA molecules combust through the citric acid cycle (generating 10 ATP each), the gross yield reaches 108 ATP. Subtracting the two high-energy bonds invested during initial cytosolic activation yields a net thermodynamic conservation of 106 ATP per mole of palmitate.',
              '১৬-কার্বন বিশিষ্ট সম্পৃক্ত পালমিটেটের (১৬:০) সম্পূর্ণ জারণে সাতটি সর্পিল চক্রের প্রয়োজন হয়, যা থেকে আটটি অ্যাসিটাইল-কোএ, সাতটি FADH2 এবং সাতটি NADH পাওয়া যায়। প্রতিটি FADH2 থেকে ১.৫ এটিপি এবং প্রতিটি NADH থেকে ২.৫ এটিপি উৎপন্ন হয়। আটটি অ্যাসিটাইল-কোএ সাইট্রিক অ্যাসিড চক্রে পুড়ে প্রতিটি ১০টি করে মোট ৮০টি এটিপি তৈরি করে। ফলে মোট উৎপাদন ১০৮ এটিপি হলেও সাইটোসলের প্রাথমিক সক্রিয়করণে ২ এটিপি বাদ দিলে প্রতি মোল পালমিটেট থেকে নিট ১০৬ মোল এটিপি পাওয়া যায়।'
            ),
            l(
              'Fatty acids with odd numbers of carbons (derived from plant diets and ruminant bacterial lipids) proceed identically through beta-oxidation until the final round yields acetyl-CoA (2C) and propionyl-CoA (3C). Propionyl-CoA is converted to succinyl-CoA via a three-enzyme sequence: propionyl-CoA carboxylase (requiring ATP and biotin), methylmalonyl-CoA racemase, and methylmalonyl-CoA mutase (requiring coenzyme B12 / 5-deoxyadenosylcobalamin). Very-long-chain fatty acids (VLCFAs, >= 22 carbons) cannot enter mitochondria directly and are first shortened in peroxisomes via acyl-CoA oxidase, which passes electrons directly to molecular oxygen to form hydrogen peroxide (H2O2).',
              'বিজোড় সংখ্যক কার্বনযুক্ত ফ্যাটি অ্যাসিড শেষ ধাপে একটি অ্যাসিটাইল-কোএ এবং একটি প্রোপায়োনাইল-কোএ উৎপন্ন করে। প্রোপায়োনাইল-কোএ কার্বক্সিলেজ (বায়োটিন ও এটিপি নির্ভর), রেসিমোজ এবং মিথাইলম্যালোনিল-কোএ মিউটেজ (ভিটামিন বি১২ নির্ভর) এনজাইমের মাধ্যমে এটি সাকসিনাইল-কোএ-তে রূপান্তরিত হয়ে টিসিএ চক্রে প্রবেশ করে। অতি দীর্ঘ শিকলের ফ্যাটি অ্যাসিডগুলো (২২ বা ততোধিক কার্বন) সরাসরি মাইটোকন্ড্রিয়ায় ঢুকতে পারে না; তারা পারক্সিসোমে জারিত হয়ে খাটো হয় এবং হাইড্রোজেন পারক্সাইড তৈরি করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Hepatic Ketogenesis Enzymology & Extrahepatic Thiophorase Oxidation', 'যকৃতের কিটোজেনেসিস এনজাইমবিজ্ঞান ও থায়োফোরেজ দ্বারা জারণ'),
          paragraphs: [
            l(
              'Under fasting conditions or in untreated diabetes mellitus, accelerated beta-oxidation floods hepatocytes with acetyl-CoA. Concurrently, gluconeogenesis actively siphons oxaloacetate away from the citric acid cycle to produce glucose. The resulting depletion of oxaloacetate limits the capacity of citrate synthase, preventing acetyl-CoA from entering the TCA cycle. Hepatocytes divert this excess acetyl-CoA into the synthesis of water-soluble ketone bodies: acetoacetate, beta-hydroxybutyrate, and acetone within the mitochondrial matrix.',
              'উপবাসকালে অথবা অনিয়ন্ত্রিত ডায়াবেটিসে তীব্র বিটা-জারণের কারণে যকৃতে বিপুল পরিমাণ অ্যাসিটাইল-কোএ জমা হয়। একই সময়ে তীব্র গ্লুকোনিওজেনেসিসের কারণে সাইট্রিক অ্যাসিড চক্রের অক্সালোঅ্যাসিটেট গ্লুকোজ তৈরিতে অপসৃত হয়ে যায়। অক্সালোঅ্যাসিটেটের এই ঘাটতি সাইট্রেট সিন্থেজ বিক্রিয়াকে ধীর করে দেয়, ফলে অতিরিক্ত অ্যাসিটাইল-কোএ টিসিএ চক্রে ঢুকতে পারে না। যকৃত এই উদ্বৃত্ত অ্যাসিটাইল-কোএ থেকে পানিতে দ্রবণীয় কিটোন বডি—অ্যাসিটোঅ্যাসিটেট, বিটা-হাইড্রক্সিবিউটাইরেট ও অ্যাসিটোন তৈরি করে।'
            ),
            l(
              'Mitochondrial HMG-CoA synthase condenses acetoacetyl-CoA with acetyl-CoA to form beta-hydroxy-beta-methylglutaryl-CoA (HMG-CoA), which is cleaved by HMG-CoA lyase into acetoacetate. Beta-hydroxybutyrate dehydrogenase reversibly interconverts acetoacetate and beta-hydroxybutyrate in an NADH-dependent manner. Released into the blood, ketone bodies cross the blood-brain barrier to fuel neurons during prolonged starvation, as well as heart and skeletal muscle. Extrahepatic tissues express succinyl-CoA:3-ketoacid CoA transferase (thiophorase), which reactivates acetoacetate to acetoacetyl-CoA; the liver lacks thiophorase, preventing futile consumption of its exported fuel.',
              'মাইটোকন্ড্রিয়াল HMG-CoA সিন্থেজ এনজাইম অ্যাসিটোঅ্যাসিটাইল-কোএ ও অ্যাসিটাইল-কোএ যুক্ত করে HMG-CoA গঠন করে, যা HMG-CoA লাইয়েজ দ্বারা ভেঙে অ্যাসিটোঅ্যাসিটেট তৈরি হয়। রক্তের মাধ্যমে পরিবাহিত হয়ে এই কিটোন বডি রক্ত-মস্তিষ্ক বাধা অতিক্রম করে অনাহারে মস্তিষ্কের নিউরন, হৃদপেশি ও কঙ্কালপেশিকে জ্বালানি সরবরাহ করে। অতিরিক্ত-হেপাটিক কলাগুলোতে থায়োফোরেজ এনজাইম অ্যাসিটোঅ্যাসিটেটকে পুনরায় সক্রিয় করে, কিন্তু যকৃতে এই এনজাইম না থাকায় যকৃত নিজের তৈরি কিটোন নিজে পোড়াতে পারে না।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Inborn Oxidation Defects: MCAD Deficiency & Diabetic Ketoacidosis', 'জন্মগত জারণ ত্রুটি: MCAD ঘাটতি ও ডায়াবেটিক কিটোঅ্যাসিডোসিস'),
          paragraphs: [
            l(
              'Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency is an autosomal recessive disorder caused predominantly by a c.985A>G (p.Lys329Glu) missense mutation in the ACADM gene. Affected infants present within the first two years of life after an overnight fast or viral illness with lethargy, vomiting, profound hypoketotic hypoglycemia, and hyperammonemia. Laboratory investigation reveals elevated medium-chain acylcarnitines (octanoylcarnitine, C8) on tandem mass spectrometry and dicarboxylic aciduria due to compensatory omega-oxidation in the endoplasmic reticulum.',
              'মিডিয়াম-চেইন অ্যাসাইল-কোএ ডিহাইড্রোজিনেজ (MCAD) ঘাটতি হলো একটি অটোসোমাল রিসেসিভ ব্যাধি যা প্রধানত ACADM জিনের মিউটেশনের কারণে ঘটে। এই রোগে আক্রান্ত শিশুরা দীর্ঘ উপবাস বা সাধারণ ভাইরাসের আক্রমণের পর বমি, নিস্তেজতা, মারাত্মক হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া এবং রক্তের অ্যামোনিয়া বৃদ্ধিতে ভোগে। ট্যান্ডেম ম্যাস স্পেকট্রোমেট্রিতে রক্তে সি-৮ কারনিটিনের অস্বাভাবিক বৃদ্ধি এবং প্রস্রাবে ডাইকার্বক্সিলিক অ্যাসিডের উপস্থিতি রোগটি নিশ্চিত করে।'
            ),
            l(
              'In diabetic ketoacidosis (DKA), absolute insulin deficiency uninhibits adipose lipolysis, generating a torrential flux of free fatty acids to the liver. As beta-oxidation runs rampant and oxaloacetate is consumed by gluconeogenesis, massive ketogenesis overwhelms peripheral buffering mechanisms. Unbuffered acetoacetate and beta-hydroxybutyrate dissociate completely at physiological pH, flooding plasma with hydrogen ions, producing a high anion gap metabolic acidosis, Kussmaul respirations, fruity acetone breath, and severe hypovolemia.',
              'ডায়াবেটিক কিটোঅ্যাসিডোসিসে (ডিকেএ) চরম ইনসুলিন ঘাটতির ফলে চর্বি কোষ থেকে বাঁধভাঙা ফ্যাটি অ্যাসিড যকৃতে প্রবেশ করে। নিয়ন্ত্রহীন বিটা-জারণের ফলে অতিমাত্রায় উৎপাদিত কিটোন বডি রক্তের বাফারিং ক্ষমতাকে ছাড়িয়ে যায়। শারীরবৃত্তীয় পিএইচ-এ অ্যাসিটোঅ্যাসিটেট ও বিটা-হাইড্রক্সিবিউটাইরেট সম্পূর্ণ আয়নিত হয়ে প্রচুর হাইড্রোজেন আয়ন নির্গত করে, যা হাই অ্যানায়ন গ্যাপ মেটাবলিক অ্যাসিডোসিস, কুসমাল শ্বাসকষ্ট, ফলের গন্ধযুক্ত নিঃশ্বাস এবং মারাত্মক পানিশূন্যতা সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Takeaways & Energetic Principles of Lipid Degradation', 'একাডেমিক সারাংশ ও লিপিড ভাঙনের মূল শক্তিনীতি'),
          paragraphs: [
            l(
              'Fatty acid beta-oxidation serves as the human body principal reservoir of dense aerobic energy, generating 106 net ATP per molecule of palmitate. The carnitine shuttle forms the rate-limiting control point, governed by reciprocal malonyl-CoA inhibition during the fed state. In starvation, hepatic ketogenesis provides an essential water-soluble derivative of fat that prevents catastrophic cerebral glucose deprivation and preserves somatic protein stores.',
              'ফ্যাটি অ্যাসিড বিটা-জারণ মানবদেহের প্রধান শক্তিভাণ্ডার হিসেবে কাজ করে এবং প্রতি অণু পালমিটেট থেকে নিট ১০৬টি এটিপি তৈরি করে। কারনিটিন শাটল হলো এই গতিপথের প্রধান নিয়ন্ত্রক, যা ভুক্তাবস্থায় ম্যালোনিল-কোএ দ্বারা অবদমিত থাকে। অনাহারের সময় যকৃতের কিটোজেনেসিস মস্তিষ্কের জন্য অত্যাবশ্যকীয় বিকল্প জ্বালানি সরবরাহ করে স্নায়ুতন্ত্রকে রক্ষা করে এবং দেহের মূল্যবান প্রোটিন ক্ষয় থেকে বাঁচায়।'
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
          heading: l('Zellweger Spectrum Disorders & Peroxisomal Biogenesis', 'জেলওয়েগার স্পেকট্রাম ব্যাধি ও পারক্সিসোম গঠন বৈকল্য'),
          paragraphs: [
            l(
              'Zellweger syndrome and neonatal adrenoleukodystrophy are severe peroxisome biogenesis disorders caused by homozygous or compound heterozygous mutations in PEX genes (such as PEX1, PEX5, and PEX6). Peroxisomes are obligately required for the initial alpha-oxidation of branched-chain fatty acids (phytanic acid) and beta-oxidation of very-long-chain fatty acids (C24:0, C26:0). Loss of peroxisomal assembly results in neurotoxic accumulation of hexacosanoic acid (C26:0), severe cerebral demyelination, craniofacial dysmorphism, hepatomegaly, and infant mortality.',
              'জেলওয়েগার সিন্ড্রোম হলো পারক্সিসোম গঠন বৈকল্যের একটি মারাত্মক বংশগত রোগ যা PEX জিনের মিউটেশনের কারণে ঘটে। পারক্সিসোম মূলত শাখান্বিত ফাইটেনিক অ্যাসিডের আলফা-জারণ এবং অতি দীর্ঘ শিকলের ফ্যাটি অ্যাসিডের (C26:0) প্রাথমিক বিটা-জারণের জন্য অপরিহার্য। পারক্সিসোম নষ্ট হলে রক্ত ও টিস্যুতে মারাত্মক নিউরোটক্সিক হেক্সাকোসানোয়িক অ্যাসিড জমা হয়, যা স্নায়ুর মায়েলিন ধ্বংস, মুখের বিকৃতি, যকৃৎ বৃদ্ধি এবং শিশুর অকালমৃত্যু ঘটায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Translational Therapeutics: CPT-I Inhibitors & Ketogenic Diets', 'চিকিৎসা গবেষণার দিগন্ত: CPT-I প্রতিরোধক ও কিটোজেনিক থেরাপি'),
          paragraphs: [
            l(
              'In clinical oncology and drug development, targeting lipid oxidation has emerged as a promising strategy against glioblastoma and drug-resistant leukemias. Pharmacological CPT-I inhibitors (such as etomoxir and perhexiline) force tumor cells to abandon lipid metabolism, triggering metabolic collapse. Conversely, clinical ketogenic diets (high fat, very low carbohydrate) elevate circulating beta-hydroxybutyrate, which acts as an endogenous histone deacetylase (HDAC) inhibitor and epigenetic modifier, dampening inflammatory signaling and controlling refractory pediatric epilepsy.',
              'ক্যান্সার চিকিৎসায় লিপিড জারণকে বাধা দেওয়া একটি অত্যন্ত আধুনিক কৌশল হিসেবে বিবেচিত হচ্ছে। CPT-I প্রতিরোধক ওষুধ (যেমন এটোমক্সির) ক্যান্সার কোষের লিপিড নির্ভরতা ধ্বংস করে টিউমার কোষকে ধ্বংস করে। অপরদিকে নিয়ন্ত্রিত কিটোজেনিক ডায়েট রক্তে বিটা-হাইড্রক্সিবিউটাইরেটের মাত্রা বৃদ্ধি করে, যা হিস্টোন ডিসিটাইলেজ (HDAC) এনজাইমকে অবদমিত করে এপিজেনেটিক পরিবর্তনের মাধ্যমে শিশুদের মারাত্মক মৃগীরোগ নিয়ন্ত্রণ করে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A comprehensive schematic illustrating fatty acid activation in the cytosol, transport across the outer and inner mitochondrial membranes via the carnitine shuttle, four cycles of beta-oxidation producing acetyl-CoA, and the divergence toward the TCA cycle or hepatic ketogenesis.',
      'সাইটোসলে ফ্যাটি অ্যাসিড সক্রিয়করণ, কারনিটিন শাটলের মাধ্যমে মাইটোকন্ড্রিয়াল পর্দার ভেতর দিয়ে পরিবহন, বিটা-জারণের চার ধাপের চক্রে অ্যাসিটাইল-কোএ উৎপাদন এবং টিসিএ চক্র বা কিটোজেনেসিসের দিকে প্রবাহ নির্দেশক চিত্র।'
    ),
    steps: [
      l('Fatty acids are activated with CoA and transported by the CPT-I carnitine shuttle into mitochondria.', 'ফ্যাটি অ্যাসিড সক্রিয় হয়ে CPT-I কারনিটিন শাটলের মাধ্যমে মাইটোকন্ড্রিয়ায় প্রবেশ করে।'),
      l('The beta-oxidation spiral cleaves 2-carbon units as acetyl-CoA, yielding FADH2 and NADH.', 'বিটা-জারণ সর্পিল চক্র দুই কার্বনের অ্যাসিটাইল-কোএ বিচ্ছিন্ন করে এবং FADH2 ও NADH উৎপন্ন করে।'),
      l('In fasting liver, excess acetyl-CoA is converted to acetoacetate and beta-hydroxybutyrate.', 'উপবাসকালে যকৃতে অতিরিক্ত অ্যাসিটাইল-কোএ থেকে অ্যাসিটোঅ্যাসিটেট ও বিটা-হাইড্রক্সিবিউটাইরেট তৈরি হয়।'),
      l('Extrahepatic tissues reactivate ketones with thiophorase to generate vital aerobic ATP.', 'অতিরিক্ত-হেপাটিক অঙ্গগুলো থায়োফোরেজের মাধ্যমে কিটোন সক্রিয় করে এটিপি তৈরি করে।'),
    ],
  },
  assessment: {
    question: l(
      'A 14-month-old infant with a known deficiency of medium-chain acyl-CoA dehydrogenase (MCAD) experiences an episode of gastroenteritis with prolonged fasting. Which metabolic profile is most characteristic of this condition?',
      '১৪ মাস বয়সী এক শিশু যার মিডিয়াম-চেইন অ্যাসাইল-কোএ ডিহাইড্রোজিনেজ (MCAD) ঘাটতি রয়েছে, পেটের সংক্রমণের পর দীর্ঘ সময় না খেয়ে ছিল। এই পরিস্থিতিতে শিশুর রক্তে কোন বিপাকীয় বৈশিষ্ট্যটি সবচেয়ে সুনির্দিষ্টভাবে দেখা যাবে?'
    ),
    options: [
      l(
        'Severe hypoglycemia with undetectable or inappropriately low urine and serum ketone bodies (hypoketotic hypoglycemia).',
        'মারাত্মক হাইপোগ্লাইসেমিয়া যার সাথে রক্ত ও প্রস্রাবে কিটোন বডির অনুপস্থিতি বা অস্বাভাবিক কম মাত্রা (হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া)।'
      ),
      l(
        'Severe hyperglycemia accompanied by elevated acetoacetate and marked metabolic alkalosis.',
        'মারাত্মক হাইপারগ্লাইসেমিয়া যার সাথে রক্তে অ্যাসিটোঅ্যাসিটেটের আধিক্য এবং মেটাবলিক অ্যালকালসিস।'
      ),
      l(
        'Isolated respiratory acidosis with completely normal blood glucose and elevated glycogen stores.',
        'রক্তে সম্পূর্ণ স্বাভাবিক গ্লুকোজ ও বর্ধিত গ্লাইকোজেনসহ কেবল রেস্পিরেটরি অ্যাসিডোসিস।'
      ),
      l(
        'Massive urinary excretion of short-chain propionate without any alterations in blood glucose.',
        'রক্তের গ্লুকোজে কোনো পরিবর্তন ছাড়াই প্রস্রাবে প্রচুর শর্ট-চেইন প্রোপায়োনেট নির্গমন।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'MCAD deficiency prevents the oxidation of medium-chain fatty acids (C6 to C12). As hepatic glycogen stores deplete during fasting, gluconeogenesis fails due to lack of acetyl-CoA (which normally allosterically activates pyruvate carboxylase), while hepatic ketogenesis cannot proceed because beta-oxidation is stalled, producing the classic presentation of hypoketotic hypoglycemia.',
      'MCAD ঘাটতির কারণে ৬ থেকে ১২ কার্বনযুক্ত ফ্যাটি অ্যাসিডের জারণ বন্ধ হয়ে যায়। উপবাসকালে যকৃতের গ্লাইকোজেন শেষ হলে অ্যাসিটাইল-কোএ-এর অভাবে গ্লুকোনিওজেনেসিস ব্যাহত হয় (কারণ পাইরুভেট কার্বক্সিলেজ সক্রিয় হতে পারে না) এবং কিটোন তৈরিও বন্ধ থাকে, ফলে ক্লাসিক্যাল হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া দেখা দেয়।'
    ),
  },
}
