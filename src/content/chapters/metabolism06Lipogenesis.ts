import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const lipogenesisRefs = [
  {
    id: 'lehninger-biochem-8e-ch21',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 21: Lipid Biosynthesis',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch23',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 23: Biosynthesis of Fatty Acids & Eicosanoids",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch22',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 22: Fatty Acid Metabolism: Biosynthesis of Fatty Acids',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'marks-medbiochem-6e-ch25',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 25: Synthesis of Fatty Acids, Triacylglycerols, and the Major Membrane Lipids",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

export const metabolism06LipogenesisLesson: LessonTopic = {
  id: 'topic.metabolism.lipogenesis-triglycerides',
  slug: 'lipogenesis-triglycerides',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('06 · Fatty Acid & Triglyceride Synthesis', '০৬ · ফ্যাটি অ্যাসিড ও ট্রাইগ্লিসারাইড সংশ্লেষ'),
  summary: l(
    'Cytosolic de novo lipogenesis, the citrate-malate shuttle, acetyl-CoA carboxylase regulation, the multifunctional fatty acid synthase complex, microsomal elongation/desaturation, and triacylglycerol synthesis.',
    'সাইটোসলিক ডি নোভো লিপোজেনেসিস, সাইট্রেট-ম্যালেট শাটল, অ্যাসিটাইল-কোএ কার্বক্সিলেজ নিয়ন্ত্রণ, বহু-কার্যকরী ফ্যাটি অ্যাসিড সিন্থেজ কমপ্লেক্স, মাইক্রোসোমাল বৃদ্ধি/অসম্পৃক্তকরণ এবং ট্রাইগ্লিসারাইড সংশ্লেষ।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Map the transfer of two-carbon acetyl units from mitochondrial matrix to cytosol via the citrate-malate shuttle, explaining the sources of NADPH required for reductive biosynthesis.',
      'সাইট্রেট-ম্যালেট শাটলের মাধ্যমে মাইটোকন্ড্রিয়া থেকে সাইটোসলে দুই কার্বনের অ্যাসিটাইল এককের স্থানান্তর বিশ্লেষণ করতে পারা এবং বিজারণমূলক সংশ্লেষের প্রয়োজনীয় NADPH-এর উৎস ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Detail the molecular mechanism, allosteric effectors, and hormonal phosphorylation cascades regulating the rate-limiting enzyme acetyl-CoA carboxylase (ACC).',
      'হার-নিয়ন্ত্রক এনজাইম অ্যাসিটাইল-কোএ কার্বক্সিলেজ (ACC)-এর আণবিক প্রক্রিয়া, অ্যালবস্টেরিক প্রভাবক এবং হরমোনজনিত ফসফরাইলেশন সংকেত বিশদভাবে বর্ণনা করতে পারা।'
    ),
    l(
      'Trace the cyclic condensation, reduction, dehydration, and reduction reactions of human fatty acid synthase (FAS), detailing palmitate release and triacylglycerol packaging.',
      'মানবদেহের ফ্যাটি অ্যাসিড সিন্থেজ (FAS) কমপ্লেক্সের ঘনীভবন, বিজারণ, পানিশূন্যকরণ ও পুনরায় বিজারণের চক্রাকার বিক্রিয়াসমূহ এবং পালমিটেট মুক্তি ও ট্রাইগ্লিসারাইড গঠন ব্যাখ্যা করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  relatedTopicIds: ['topic.metabolism.fatty-acid-oxidation-ketones', 'topic.metabolism.cholesterol-steroids'],
  references: lipogenesisRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch21', 'harpers-biochem-32e-ch23'],
    structure: ['harpers-biochem-32e-ch23', 'marks-medbiochem-6e-ch25'],
    mechanism: ['lehninger-biochem-8e-ch21', 'berg-biochem-9e-ch22'],
    integration: ['berg-biochem-9e-ch22', 'marks-medbiochem-6e-ch25'],
    practice: ['lehninger-biochem-8e-ch21', 'harpers-biochem-32e-ch23'],
    takeaways: ['lehninger-biochem-8e-ch21', 'marks-medbiochem-6e-ch25'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Citrate Shuttle & Cytosolic Substrate Supply', '১. সাইট্রেট শাটল ও সাইটোসলিক সাবস্ট্রেট সরবরাহ'), sectionId: 'introduction' },
      { id: 'sec-acc', label: l('2. Acetyl-CoA Carboxylase: The Master Regulator', '২. অ্যাসিটাইল-কোএ কার্বক্সিলেজ: প্রধান নিয়ন্ত্রক এনজাইম'), sectionId: 'structure' },
      { id: 'sec-fas', label: l('3. The Fatty Acid Synthase Multienzyme Complex', '৩. ফ্যাটি অ্যাসিড সিন্থেজ বহু-এনজাইম কমপ্লেক্স'), sectionId: 'mechanism' },
      { id: 'sec-tag', label: l('4. Elongation, Desaturation & Triacylglycerol Synthesis', '৪. চেইন বৃদ্ধি, অসম্পৃক্তকরণ ও ট্রাইগ্লিসারাইড সংশ্লেষ'), sectionId: 'integration' },
      { id: 'sec-calc', label: l('5. Stoichiometric Calculations & Fatty Liver Disease', '৫. রাসায়নিক হিসাব ও ফ্যাটি লিভার প্যাথলজি'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Review & Synthesis Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা ও মূল শিক্ষা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('ATP-Citrate Lyase (ACLY)', 'এটিপি-সাইট্রেট লাইয়েজ (ACLY)'),
        definition: l(
          'Cytosolic enzyme that cleaves mitochondrial-derived citrate in an ATP-dependent reaction to generate acetyl-CoA and oxaloacetate, initiating de novo lipogenesis.',
          'সাইটোসলের এনজাইম যা এটিপি ব্যবহার করে মাইটোকন্ড্রিয়া থেকে আসা সাইট্রেটকে ভেঙে অ্যাসিটাইল-কোএ এবং অক্সালোঅ্যাসিটেট তৈরি করে ডি নোভো লিপোজেনেসিসের সূচনা ঘটায়।'
        ),
      },
      {
        term: l('Acetyl-CoA Carboxylase (ACC1 / ACC2)', 'অ্যাসিটাইল-কোএ কার্বক্সিলেজ (ACC1 / ACC2)'),
        definition: l(
          'Biotin-dependent enzyme that carboxylates acetyl-CoA to malonyl-CoA using ATP and bicarbonate; serves as the committed, rate-limiting step of fatty acid synthesis.',
          'বায়োটিন-নির্ভর এনজাইম যা এটিপি ও বাইকার্বনেট ব্যবহার করে অ্যাসিটাইল-কোএ-কে ম্যালোনিল-কোএ-তে কার্বক্সিলেশন করে; এটি ফ্যাটি অ্যাসিড সংশ্লেষের প্রধান হার-নিয়ন্ত্রক ধাপ।'
        ),
      },
      {
        term: l('Acyl Carrier Protein (ACP)', 'অ্যাসাইল ক্যারিয়ার প্রোটিন (ACP)'),
        definition: l(
          'Polypeptide domain of fatty acid synthase carrying a 4-prime-phosphopantetheine prosthetic arm that shuttles growing acyl chains between adjacent catalytic active sites.',
          'ফ্যাটি অ্যাসিড সিন্থেজের একটি পলিপেপটাইড ডোমেন যার ৪-ফসফোপ্যান্টোথিন বাহুটি বর্ধনশীল ফ্যাটি অ্যাসিড শিকলকে এনজাইমের বিভিন্ন সক্রিয় কেন্দ্রের মাঝে স্থানান্তর করে।'
        ),
      },
      {
        term: l('Diacylglycerol Acyltransferase (DGAT)', 'ডাইঅ্যাসাইলগ্লিসারল অ্যাসাইলট্রান্সফারেজ (DGAT)'),
        definition: l(
          'Endoplasmic reticulum transmembrane enzyme catalyzing the final committed step of triacylglycerol synthesis by transferring a fatty acyl group to sn-1,2-diacylglycerol.',
          'এন্ডোপ্লাজমিক রেটিকুলামের মেমব্রেন এনজাইম যা এসএন-১,২-ডাইঅ্যাসাইলগ্লিসারলে তৃতীয় ফ্যাটি অ্যাসিড যুক্ত করে ট্রাইগ্লিসারাইড সংশ্লেষের চূড়ান্ত ধাপ সম্পন্ন করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Complete Thermodynamic Stoichiometry of Palmitate (16:0) Synthesis', 'পালমিটেট (১৬:০) সংশ্লেষের পূর্ণাঙ্গ তাপগতিবিদ্যা ও উপাদান হিসাব'),
        steps: [
          l(
            'Step 1: Synthesis of the 16-carbon saturated fatty acid palmitate begins with one primer acetyl-CoA and requires seven rounds of elongation. Each elongation round incorporates one two-carbon unit supplied by malonyl-CoA. Generating the seven malonyl-CoA molecules requires: 7 Acetyl-CoA + 7 CO2 + 7 ATP -> 7 Malonyl-CoA + 7 ADP + 7 Pi.',
            'ধাপ ১: ১৬ কার্বনের পালমিটেট তৈরিতে একটি প্রারম্ভিক অ্যাসিটাইল-কোএ এবং সাতটি ম্যালোনিল-কোএ প্রয়োজন হয়। সাতটি ম্যালোনিল-কোএ তৈরিতে ব্যয় হয়: ৭ অ্যাসিটাইল-কোএ + ৭ CO2 + ৭ এটিপি -> ৭ ম্যালোনিল-কোএ + ৭ এডিপি + ৭ পিআই।'
          ),
          l(
            'Step 2: The fatty acid synthase complex condenses the primer acetyl-CoA with seven successive malonyl-CoA donors. Each two-carbon addition requires two molecules of NADPH for the beta-ketoacyl reduction and enoyl reduction steps (7 x 2 = 14 NADPH). During condensation, the seven CO2 molecules fixed by ACC are released.',
            'ধাপ ২: ফ্যাটি অ্যাসিড সিন্থেজ কমপ্লেক্স প্রারম্ভিক অ্যাসিটাইল-কোএ-এর সাথে সাতটি ম্যালোনিল-কোএ পর্যায়ক্রমে যুক্ত করে। প্রতি দুই কার্বন যুক্ত হতে ২টি করে মোট ১৪টি NADPH খরচ হয় (৭ x ২ = ১৪ NADPH)। ঘনীভবনের সময় ACC দ্বারা যুক্ত হওয়া ৭টি CO2 পুনরায় মুক্ত হয়।'
          ),
          l(
            'Step 3: The thioesterase domain releases free palmitate via hydrolysis: Acetyl-CoA + 7 Malonyl-CoA + 14 NADPH + 14 H+ -> Palmitate + 7 CO2 + 8 CoA + 14 NADP+ + 6 H2O. Combining both equations yields the net equation: 8 Acetyl-CoA + 7 ATP + 14 NADPH + 14 H+ -> Palmitate + 8 CoA + 7 ADP + 7 Pi + 14 NADP+ + 6 H2O.',
            'ধাপ ৩: থায়োএস্টারেজ এনজাইম আর্দ্রবিশ্লেষণের মাধ্যমে মুক্ত পালমিটেট অবমুক্ত করে। দুটি সমীকরণ একীভূত করলে সামগ্রিক সমীকরণ দাঁড়ায়: ৮ অ্যাসিটাইল-কোএ + ৭ এটিপি + ১৪ NADPH + ১৪ H+ -> পালমিটেট + ৮ কোএ + ৭ এডিপি + ৭ পিআই + ১৪ NADP+ + ৬ H2O।'
          ),
        ],
        conclusion: l(
          'De novo lipogenesis is an energetically demanding, highly endergonic anabolic process requiring substantial ATP investment and immense reducing power derived from the pentose phosphate pathway and malic enzyme.',
          'ডি নোভো লিপোজেনেসিস হলো একটি শক্তিশোষণকারী উপচিতিমূলক প্রক্রিয়া যার জন্য প্রচুর এটিপি এবং পেন্টোজ ফসফেট পথ ও ম্যালিক এনজাইম থেকে প্রাপ্ত বিপুল পরিমাণ NADPH প্রয়োজন হয়।'
        ),
      },
      {
        title: l('Glycerol-3-Phosphate Origin: Liver Versus Adipose Tissue', 'গ্লিসারল-৩-ফসফেটের উৎস: যকৃত বনাম অ্যাডিপোজ টিস্যু'),
        steps: [
          l(
            'Step 1: Triacylglycerol synthesis requires glycerol-3-phosphate (G3P) as the primary three-carbon backbone onto which fatty acyl chains are sequentially esterified.',
            'ধাপ ১: ট্রাইগ্লিসারাইড সংশ্লেষের জন্য গ্লিসারল-৩-ফসফেট (G3P) মেরুদণ্ড হিসেবে কাজ করে, যার ওপর তিনটি ফ্যাটি অ্যাসিড একে একে এস্টারিফাইড হয়।'
          ),
          l(
            'Step 2: Hepatocytes express glycerol kinase (GK), allowing the liver to directly phosphorylate free glycerol absorbed from the bloodstream (Glycerol + ATP -> G3P + ADP). Liver can also reduce glycolytic dihydroxyacetone phosphate (DHAP) via glycerol-3-phosphate dehydrogenase (GPDH).',
            'ধাপ ২: যকৃতে গ্লিসারল কাইনেজ (GK) এনজাইম থাকায় যকৃত সরাসরি রক্ত থেকে সংগৃহীত মুক্ত গ্লিসারলকে ফসফরাইলেশন করে G3P বানাতে পারে, অথবা গ্লাইকোলাইসিসের DHAP থেকেও এটি তৈরি করতে পারে।'
          ),
          l(
            'Step 3: Adipocytes lack glycerol kinase entirely. Adipose tissue cannot recycle the free glycerol liberated during lipolysis and is entirely dependent on active glucose uptake via insulin-dependent GLUT4 to generate DHAP through glycolysis.',
            'ধাপ ৩: চর্বি কোষে কোনো গ্লিসারল কাইনেজ থাকে না। ফলে অ্যাডিপোজ টিস্যু নিজের ভাঙা গ্লিসারল পুনরায় ব্যবহার করতে পারে না; চর্বি তৈরির জন্য এটি সম্পূর্ণভাবে ইনসুলিন-নির্ভর GLUT4 দিয়ে আসা গ্লুকোজ ও গ্লাইকোলাইসিসের DHAP-এর ওপর নির্ভরশীল।'
          ),
        ],
        conclusion: l(
          'Adipose triacylglycerol storage is intrinsically coupled to dietary carbohydrate availability and insulin action, preventing fatty acid re-esterification during fasting.',
          'অ্যাডিপোজ টিস্যুতে চর্বি সঞ্চয় মূলত খাদ্যের কার্বোহাইড্রেট ও ইনসুলিনের ওপর নির্ভরশীল, যা উপবাসকালে ফ্যাটি অ্যাসিডের পুনর্সঞ্চয় বন্ধ রেখে রক্তে জ্বালানি নির্গমন নিশ্চিত করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does mammalian fatty acid synthase stop elongation specifically at sixteen carbons (palmitate), rather than continuing to eighteen or twenty carbons?',
          'স্তন্যপায়ী প্রাণীর ফ্যাটি অ্যাসিড সিন্থেজ কমপ্লেক্স কেন ১৬ কার্বনে (পালমিটেট) এসে চেইন বৃদ্ধি থামিয়ে দেয় এবং ১৮ বা ২০ কার্বনে অগ্রসর হয় না?'
        ),
        answer: l(
          'The terminal thioesterase domain (TE) of fatty acid synthase possesses a rigid substrate-binding pocket specifically tailored to accommodate a 16-carbon saturated acyl chain; when palmitoyl-ACP fits into this pocket, water hydrolyzes the thioester bond, liberating free palmitate.',
          'ফ্যাটি অ্যাসিড সিন্থেজের অন্তিম থায়োএস্টারেজ (TE) ডোমেনের বাইন্ডিং পকেটটি সুনির্দিষ্টভাবে ১৬-কার্বনের সম্পৃক্ত চেইনের জন্য গঠিত; যখন পালমিটয়েল-ACP এই পকেটে প্রবেশ করে, তখনই পানি এসে থায়োএস্টার বন্ধন আর্দ্রবিশ্লেষিত করে মুক্ত পালমিটেট অবমুক্ত করে।'
        ),
      },
      {
        question: l(
          'Why are linoleic acid (18:2 omega-6) and alpha-linolenic acid (18:3 omega-3) nutritionally essential in humans?',
          'মানবদেহে লিনোলিক অ্যাসিড (১৮:২ ওমেগা-৬) এবং আলফা-লিনোলেনিক অ্যাসিড (১৮:৩ ওমেগা-৩) কেন খাদ্যের অপরিহার্য ফ্যাটি অ্যাসিড?'
        ),
        answer: l(
          'Human desaturases (such as stearoyl-CoA desaturase / SCD1) can only introduce double bonds between carbon-9 and the carboxyl terminus (delta-9); humans lack delta-12 and delta-15 desaturases capable of inserting double bonds beyond carbon-9 toward the methyl end.',
          'মানবদেহের ডেস্যাচুরেজ এনজাইম কেবল কার্বন-৯ এবং কার্বক্সিল প্রান্তের মাঝে দ্বিবন্ধন তৈরি করতে পারে (ডেল্টা-৯); কার্বন-৯ অতিক্রম করে মিথাইল প্রান্তের দিকে দ্বিবন্ধন তৈরি করার মতো ডেল্টা-১২ ও ডেল্টা-১৫ এনজাইম মানবদেহে নেই।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'lipogenesis-pathway-explorer',
    title: l('Interactive De Novo Lipogenesis & Triglyceride Assembly Hub', 'ইন্টারেক্টিভ ডি নোভো লিপোজেনেসিস ও ট্রাইগ্লিসারাইড গঠন কেন্দ্র'),
    description: l(
      'Follow the flow of surplus carbohydrate carbons from mitochondrial citrate export, ACC carboxylation, and FAS cycle iterations into triacylglycerol storage droplets.',
      'অতিরিক্ত কার্বোহাইড্রেটের মাইটোকন্ড্রিয়া থেকে সাইট্রেট নির্গমন, ACC কার্বক্সিলেশন এবং FAS চক্রাকার আবর্তন পেরিয়ে চর্বি বিন্দুতে ট্রাইগ্লিসারাইড সঞ্চয়ের গতিপথ প্রত্যক্ষ করুন।'
    ),
    disclaimer: l(
      'Enzymatic domains, cofactor requirements, and hormonal regulation verified against Lehninger (8th ed) and Harper Illustrated Biochemistry (32nd ed).',
      'এনজাইম ডোমেন, কোফ্যাক্টর প্রয়োজনীয়তা এবং হরমোনীয় নিয়ন্ত্রণ লেহনিঞ্জার এবং হার্পারস বায়োকেমিস্ট্রি দ্বারা যাচাইকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'citrate-shuttle-node',
        label: l('1. Citrate Shuttle & ACLY [Mitochondrial Carbon Export]', '১. সাইট্রেট শাটল ও ACLY [মাইটোকন্ড্রিয়াল কার্বন নির্গমন]'),
        description: l(
          'When energy charge and ATP are elevated, mitochondrial isocitrate dehydrogenase is inhibited, causing citrate accumulation. Citrate exports to cytosol via the tricarboxylate carrier.',
          'কোষে শক্তি ও এটিপি বেশি থাকলে মাইটোকন্ড্রিয়াল আইসোসাইট্রেট ডিহাইড্রোজিনেজ অবদমিত হয়ে সাইট্রেট জমা হয়, যা ট্রাইকার্বক্সাইলেট ক্যারিয়ার দিয়ে সাইটোসলে বের হয়।'
        ),
        details: l(
          'Cytosolic ATP-citrate lyase (ACLY) cleaves citrate into acetyl-CoA and oxaloacetate, providing cytosolic two-carbon building blocks for lipid synthesis.',
          'সাইটোসলের এটিপি-সাইট্রেট লাইয়েজ (ACLY) সাইট্রেটকে ভেঙে অ্যাসিটাইল-কোএ এবং অক্সালোঅ্যাসিটেট তৈরি করে চর্বি তৈরির কাঁচামাল জোগায়।'
        ),
        sectionId: 'introduction',
      },
      {
        id: 'acc-regulation-node',
        label: l('2. Acetyl-CoA Carboxylase (ACC) [Rate-Limiting Valve]', '২. অ্যাসিটাইল-কোএ কার্বক্সিলেজ (ACC) [হার-নিয়ন্ত্রক ভালভ]'),
        description: l(
          'Carboxylates acetyl-CoA into malonyl-CoA using ATP, bicarbonate, and a biotin prosthetic group. Citrate allosterically polymerizes and activates ACC.',
          'এটিপি, বাইকার্বনেট ও বায়োটিন ব্যবহার করে অ্যাসিটাইল-কোএ-কে ম্যালোনিল-কোএ-তে রূপান্তর করে। সাইট্রেট এটিকে পলিমারাইজ করে সক্রিয় করে তোলে।'
        ),
        details: l(
          'Insulin dephosphorylates and activates ACC via PP2A; glucagon, epinephrine, and AMPK phosphorylate and inactivate ACC to preserve cellular ATP.',
          'ইনসুলিন PP2A এনজাইম দিয়ে একে ডিফসফরাইলেশন করে সক্রিয় করে; গ্লুকাগন ও এএমপিকে ফসফরাইলেশন ঘটিয়ে এটিকে নিষ্ক্রিয় করে শক্তি বাঁচায়।'
        ),
        sectionId: 'structure',
      },
      {
        id: 'fas-priming-node',
        label: l('3. FAS Priming & Malonyl-ACP Loading', '৩. FAS প্রাইমিং ও ম্যালোনিল-ACP লোডিং'),
        description: l(
          'Malonyl/acetyl-CoA-ACP transacylase (MAT) loads an acetyl primer onto the ACP phosphopantetheine arm, transferring it to the ketoacyl synthase (KS) cysteine.',
          'MAT এনজাইম প্রারম্ভিক অ্যাসিটাইল গ্রুপকে ACP-এর ফসফোপ্যান্টোথিনে যুক্ত করে এবং পরবর্তীতে কিটোঅ্যাসাইল সিন্থেজের (KS) সিস্টিনে স্থানান্তর করে।'
        ),
        details: l(
          'MAT then loads a 3-carbon malonyl group from malonyl-CoA onto the newly vacated ACP arm, readying the complex for decarboxylative condensation.',
          'এরপর MAT ম্যালোনিল-কোএ থেকে একটি ৩-কার্বনের ম্যালোনিল গ্রুপ খালি ACP বাহুতে যুক্ত করে ঘনীভবন বিক্রিয়ার জন্য প্রস্তুত করে।'
        ),
        sectionId: 'mechanism',
      },
      {
        id: 'fas-reduction-cycle',
        label: l('4. FAS 4-Step Elongation Spiral (Condensation, Reduction, Dehydration, Reduction)', '৪. FAS ৪-ধাপের বৃদ্ধি চক্র (ঘনীভবন, বিজারণ, পানিশূন্যকরণ, বিজারণ)'),
        description: l(
          'KS condenses malonyl-ACP with growing acyl chain with loss of CO2. KR reduces beta-keto group with NADPH, DH dehydrates to trans-double bond, and ER reduces with NADPH.',
          'KS এনজাইম CO2 নির্গমনের মাধ্যমে চেইন দীর্ঘায়িত করে। KR এনজাইম NADPH দিয়ে কিটো গ্রুপ কমায়, DH পানি সরায় এবং ER দ্বিতীয় NADPH দিয়ে সম্পৃক্ত করে।'
        ),
        details: l(
          'Each cycle extends the acyl chain by two carbons at the cost of 2 NADPH molecules, cycling 7 times to reach palmitate (16 carbons).',
          'প্রতিটি চক্রে ২টি NADPH খরচে চেইনটি দুই কার্বন বৃদ্ধি পায় এবং মোট ৭ বার আবর্তিত হয়ে ১৬ কার্বনের পালমিটেটে পৌঁছায়।'
        ),
        sectionId: 'mechanism',
      },
      {
        id: 'thioesterase-release',
        label: l('5. Thioesterase (TE) Palmitate Cleavage', '৫. থায়োএস্টারেজ (TE) পালমিটেট বিদারণ'),
        description: l(
          'When the growing chain reaches sixteen carbons (palmitoyl-ACP), it fits into the thioesterase active site pocket, which hydrolyzes the thioester linkage.',
          'বর্ধনশীল চেইনটি ১৬ কার্বনে পৌঁছালে এটি থায়োএস্টারেজ পকেটে প্রবেশ করে এবং পানি এসে থায়োএস্টার বন্ধন ভেঙে মুক্ত পালমিটেট অবমুক্ত করে।'
        ),
        details: l(
          'Releases free palmitic acid, which is activated to palmitoyl-CoA in the endoplasmic reticulum for elongation, desaturation, or triacylglycerol packaging.',
          'মুক্ত পালমিটিক অ্যাসিড নির্গত হয়, যা এন্ডোপ্লাজমিক রেটিকুলামে গিয়ে পুনরায় সক্রিয় হয়ে ট্রাইগ্লিসারাইড তৈরিতে অংশ নেয়।'
        ),
        sectionId: 'integration',
      },
      {
        id: 'er-desaturation',
        label: l('6. Microsomal Elongation & Desaturation (SCD1 / Delta-9)', '৬. মাইক্রোসোমাল বৃদ্ধি ও অসম্পৃক্তকরণ (SCD1 / ডেল্টা-৯)'),
        description: l(
          'Endoplasmic reticulum elongases extend palmitoyl-CoA to stearoyl-CoA (18:0). Stearoyl-CoA desaturase-1 (SCD1) introduces a cis-double bond at carbon-9 to form oleoyl-CoA (18:1).',
          'এন্ডোপ্লাজমিক রেটিকুলামে চেইন বৃদ্ধি পেয়ে ১৮ কার্বনের স্টিয়ারয়েল-কোএ হয়। SCD1 এনজাইম কার্বন-৯ এ সিস-দ্বিবন্ধন তৈরি করে ওলিয়েল-কোএ (১৮:১) গঠন করে।'
        ),
        details: l(
          'Essential for membrane fluidity. Diets lacking essential omega-6 and omega-3 fatty acids cause skin scaling and impaired cell signaling.',
          'কোষপর্দার তারল্য রক্ষায় অপরিহার্য। খাদ্যে ওমেগা-৬ ও ওমেগা-৩ ফ্যাটি অ্যাসিড না থাকলে ত্বকের শুষ্কতা ও স্নায়বিক সমস্যা দেখা দেয়।'
        ),
        sectionId: 'integration',
      },
      {
        id: 'dgat-assembly',
        label: l('7. Diacylglycerol Acyltransferase (DGAT) & TAG Packaging', '৭. ডাইঅ্যাসাইলগ্লিসারল অ্যাসাইলট্রান্সফারেজ (DGAT) ও ট্রাইগ্লিসারাইড প্যাকিং'),
        description: l(
          'Phosphatidic acid is dephosphorylated by Lipin-1 to 1,2-diacylglycerol (DAG). DGAT transfers a third fatty acyl group to DAG, forming triacylglycerol.',
          'ফসফেটিডিক অ্যাসিড লিপিন-১ দ্বারা ডিফসফরাইলেটেড হয়ে DAG হয়। DGAT এনজাইম তৃতীয় ফ্যাটি অ্যাসিড যুক্ত করে ট্রাইগ্লিসারাইড গঠন সম্পন্ন করে।'
        ),
        details: l(
          'Triacylglycerols are deposited into cytosolic lipid droplets for energy storage in adipose tissue, or packaged into VLDL particles in the liver.',
          'ট্রাইগ্লিসারাইড চর্বি কোষে লিপিড ড্রপলেট হিসেবে জমা হয় এবং যকৃতে VLDL কণার ভেতর আবদ্ধ হয়ে রক্তে পরিবাহিত হয়।'
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
          heading: l('Introduction: How the Body Converts Excess Carbohydrates into Fat', 'ভূমিকা: উদ্বৃত্ত শর্করাকে চর্বিতে রূপান্তর করার কোষীয় কৌশল'),
          paragraphs: [
            l(
              'When a person consumes more carbohydrates and energy than the body can immediately burn or store as liver and muscle glycogen, cellular metabolism does not waste these valuable caloric resources. Instead, human hepatocytes and fat cells activate de novo lipogenesis, an anabolic biosynthetic pathway that transforms dietary carbohydrates into high-density triacylglycerols for long-term energy storage.',
              'যখন একজন ব্যক্তি তার তাৎক্ষণিক চাহিদা বা গ্লাইকোজেন হিসেবে জমা রাখার ক্ষমতার চেয়ে বেশি কার্বোহাইড্রেট ও শক্তি গ্রহণ করে, তখন কোষীয় বিপাক এই বহুমূল্য ক্যালরি অপচয় করে না। বরং মানবদেহের যকৃৎ ও চর্বি কোষগুলো ডি নোভো লিপোজেনেসিস নামক একটি উপচিতিমূলক সংশ্লেষ পথ সক্রিয় করে, যা অতিরিক্ত শর্করাকে দীর্ঘমেয়াদী শক্তি সঞ্চয়ের জন্য ট্রাইগ্লিসারাইডে রূপান্তর করে।'
            ),
            l(
              'This vital construction process takes place entirely inside the fluid cytoplasm of the cell. However, the primary two-carbon building block, acetyl-CoA, is generated inside the mitochondrial powerhouse. Because the inner mitochondrial membrane is strictly impermeable to acetyl-CoA, the cell uses a specialized carrier shuttle known as the citrate-malate shuttle to export carbon building blocks into the cytosol.',
              'এই গুরুত্বপূর্ণ নির্মাণ প্রক্রিয়াটি সম্পূর্ণভাবে কোষের জলীয় সাইটোপ্লাজমে সম্পন্ন হয়। তবে এর মূল দুই-কার্বনের কাঁচামাল অ্যাসিটাইল-কোএ তৈরি হয় মাইটোকন্ড্রিয়ার ভেতরে। যেহেতু মাইটোকন্ড্রিয়ার ভেতরের পর্দা অ্যাসিটাইল-কোএ চলাচলের জন্য সম্পূর্ণ অভেদ্য, তাই কোষ সাইট্রেট-ম্যালেট শাটল নামক একটি বিশেষ বাহক ব্যবস্থার মাধ্যমে এই কার্বন কাঁচামালকে সাইটোসলে বের করে আনে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Citrate Shuttle & The Acetyl-CoA Carboxylase Gatekeeper', 'সাইট্রেট শাটল ও অ্যাসিটাইল-কোএ কার্বক্সিলেজ নিয়ন্ত্রক দ্বার'),
          paragraphs: [
            l(
              'When fuel is plentiful, mitochondrial citrate accumulates and crosses into the cytosol through the tricarboxylate carrier. Once in the cytoplasm, the enzyme ATP-citrate lyase cleaves citrate into acetyl-CoA and oxaloacetate, consuming one molecule of ATP. A subsequent enzymatic reaction driven by malic enzyme converts cytosolic malate to pyruvate while generating NADPH, the vital reducing fuel needed for fat synthesis.',
              'কোষে যখন শক্তির প্রাচুর্য থাকে, তখন মাইটোকন্ড্রিয়ায় সাইট্রেট জমা হয় এবং ট্রাইকার্বক্সাইলেট ক্যারিয়ারের মাধ্যমে সাইটোসলে বেরিয়ে আসে। সাইটোসলে পৌঁছানোর পর এটিপি-সাইট্রেট লাইয়েজ নামক এনজাইম এটিপি ব্যবহার করে সাইট্রেটকে ভেঙে অ্যাসিটাইল-কোএ এবং অক্সালোঅ্যাসিটেটে পরিণত করে। পরবর্তীতে ম্যালিক এনজাইম ম্যালেটকে পাইরুভেটে রূপান্তরের সময় NADPH তৈরি করে, যা চর্বি তৈরির অপরিহার্য বিজারণ শক্তি হিসেবে কাজ করে।'
            ),
            l(
              'The true rate-limiting master valve of fatty acid synthesis is acetyl-CoA carboxylase (ACC). Using biotin and ATP, ACC attaches bicarbonate to acetyl-CoA to create the three-carbon molecule malonyl-CoA. When insulin is high after a carbohydrate-rich meal, it turns ACC on, simultaneously stimulating fatty acid assembly and blocking fatty acid breakdown at the mitochondria by inhibiting CPT-I.',
              'ফ্যাটি অ্যাসিড সংশ্লেষের আসল হার-নিয়ন্ত্রক প্রধান ভালভ হলো অ্যাসিটাইল-কোএ কার্বক্সিলেজ (ACC)। বায়োটিন ও এটিপি ব্যবহার করে এটি অ্যাসিটাইল-কোএ-এর সাথে বাইকার্বনেট যুক্ত করে তিন কার্বনের ম্যালোনিল-কোএ তৈরি করে। খাবার গ্রহণের পর রক্তে ইনসুলিন বাড়লে তা ACC-কে চালু করে; ফলে একদিকে নতুন চর্বি তৈরি শুরু হয় এবং অন্যদিকে CPT-I বন্ধ হয়ে মাইটোকন্ড্রিয়ায় চর্বি পোড়ানো স্থগিত থাকে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Fatty Acid Synthase Factory: Building Palmitate in Repeating Cycles', 'ফ্যাটি অ্যাসিড সিন্থেজ কারখানা: চক্রাকার আবর্তনে পালমিটেট গঠন'),
          paragraphs: [
            l(
              'Human Fatty Acid Synthase (FAS) is a massive multienzyme machine that functions like a robotic assembly line. It holds the growing fat chain on a flexible prosthetic arm called phosphopantetheine, which swings like a mechanical crane to deliver the intermediate to different catalytic workstations. In each round of synthesis, two carbons from malonyl-CoA are fused to the growing hydrocarbon tail.',
              'মানবদেহের ফ্যাটি অ্যাসিড সিন্থেজ (FAS) হলো একটি সুবিশাল বহু-এনজাইম যন্ত্র যা একটি স্বয়ংক্রিয় অ্যাসেম্বলি লাইনের মতো কাজ করে। এটি তার ফসফোপ্যান্টোথিন নামক নমনীয় বাহুতে বর্ধনশীল ফ্যাটি অ্যাসিডকে ধরে রাখে, যা একটি যান্ত্রিক ক্রেনের মতো দোলে এবং বিভিন্ন বিক্রিয়া কেন্দ্রে সাবস্ট্রেট পৌঁছে দেয়। সংশ্লেষের প্রতিটি আবর্তনে ম্যালোনিল-কোএ থেকে দুটি করে কার্বন যুক্ত হয়ে হাইড্রোকার্বন শিকলটি বৃদ্ধি পেতে থাকে।'
            ),
            l(
              'Each synthetic turn follows a four-step chemical cycle: condensation, reduction, dehydration, and a final reduction. This sequence consumes two molecules of NADPH per cycle to turn a reactive ketone into a fully saturated carbon-carbon bond. After seven successive turns, the chain reaches sixteen carbons in length as palmitate, which is snipped off by the thioesterase domain and released into the cytoplasm.',
              'প্রতিটি বৃদ্ধির চক্র চারটি ধারাবাহিক রাসায়নিক পদক্ষেপে সম্পন্ন হয়: ঘনীভবন, বিজারণ, পানিশূন্যকরণ এবং পুনরায় বিজারণ। কিটোন গ্রুপকে সম্পূর্ণ সম্পৃক্ত কার্বন-কার্বন বন্ধনে রূপান্তর করতে প্রতি চক্রে দুটি করে NADPH ব্যয় হয়। এভাবে সাতটি সফল আবর্তনের পর শিকলটি ১৬ কার্বনের পালমিটেটে পরিণত হলে থায়োএস্টারেজ এনজাইম একে কেটে আলাদা করে সাইটোপ্লাজমে অবমুক্ত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Packaging Triglycerides: Storing Fat in Adipose Tissue and Liver', 'ট্রাইগ্লিসারাইড প্যাকিং: চর্বি কলা ও যকৃতে লিপিড সঞ্চয় কৌশল'),
          paragraphs: [
            l(
              'Free palmitate is not left floating freely in the cell because soap-like free fatty acids can disrupt delicate cell membranes. Instead, enzymes immediately attach palmitate to a three-carbon glycerol backbone via the glycerol-3-phosphate pathway, sequentially adding three fatty acyl chains to construct neutral triacylglycerol molecules for safe, compact energy storage.',
              'মুক্ত পালমিটেট কোষে স্বাধীনভাবে ভেসে বেড়াতে পারে না, কারণ সাবানের মতো মুক্ত ফ্যাটি অ্যাসিডগুলো কোষের সংবেদনশীল প্লাজমা পর্দাকে ক্ষতিগ্রস্ত করতে পারে। তাই এনজাইমগুলো অবিলম্বে গ্লিসারল-৩-ফসফেট পথের মাধ্যমে গ্লিসারল কঙ্কালের সাথে তিনটি ফ্যাটি অ্যাসিড যুক্ত করে নিরপেক্ষ ট্রাইগ্লিসারাইড অণু গঠন করে, যা সম্পূর্ণ নিরাপদ ও ঘন আকারে শক্তি সঞ্চয় করে।'
            ),
            l(
              'In adipose tissue, these neutral fats coalesce into massive lipid droplets that fill the adipocyte cytoplasm. In hepatocytes, excess triglycerides are packaged into very-low-density lipoprotein (VLDL) spherical particles and secreted into the bloodstream. Because fat cells lack glycerol kinase, they must use glucose to make glycerol-3-phosphate, linking fat storage strictly to insulin-mediated glucose availability.',
              'অ্যাডিপোজ টিস্যুতে এই নিরপেক্ষ চর্বিগুলো একত্রিত হয়ে বিশাল লিপিড ড্রপলেট তৈরি করে যা চর্বি কোষের অধিকাংশ স্থান দখল করে রাখে। যকৃতে অতিরিক্ত ট্রাইগ্লিসারাইড VLDL কণার ভেতর আবদ্ধ হয়ে রক্তপ্রবাহে পরিবাহিত হয়। যেহেতু চর্বি কোষে গ্লিসারল কাইনেজ থাকে না, তাই চর্বি জমা করার জন্য গ্লুকোজের উপস্থিতি অপরিহার্য, যা সরাসরি রক্তে ইনসুলিনের মাত্রার সাথে যুক্ত।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Reasoning: Nutritional Regulation of Lipogenesis', 'মৌলিক যুক্তি: খাদ্যাভ্যাস ও চর্বি সংশ্লেষের পুষ্টি শারীরবৃত্ত'),
          paragraphs: [
            l(
              'When an individual consumes meals rich in refined sugars or high-fructose syrups, glucose and fructose pour into hepatocytes. Insulin surges, dephosphorylating ACC to stimulate fat creation, while fructose bypasses normal metabolic checkpoints to continuously produce triacylglycerols, leading over time to hepatic fat accumulation if caloric intake exceeds metabolic expenditure.',
              'যখন একজন ব্যক্তি অতিরিক্ত মিষ্টি বা রিফাইন্ড চিনিযুক্ত খাবার গ্রহণ করে, তখন প্রচুর গ্লুকোজ ও ফ্রুক্টোজ যকৃতে প্রবেশ করে। রক্তে ইনসুলিনের তীব্র বৃদ্ধি ACC এনজাইমকে সক্রিয় করে চর্বি তৈরি বাড়িয়ে দেয়, আর ফ্রুক্টোজ স্বাভাবিক নিয়ন্ত্রণকে পাশ কাটিয়ে সরাসরি ট্রাইগ্লিসারাইড বানায়; ফলে অতিরিক্ত ক্যালরি শরীরে প্রবেশ করলে যকৃতে ক্ষতিকর চর্বি জমা হতে থাকে।'
            ),
          ],
          bullets: [
            l('Insulin stimulates de novo lipogenesis by activating both ACLY and ACC while suppressing lipolysis.', 'ইনসুলিন ACLY ও ACC সক্রিয় করে চর্বি তৈরি বাড়ায় এবং একই সাথে চর্বি ভাঙন বন্ধ করে দেয়।'),
            l('Excess dietary carbohydrate is converted into palmitate and exported as VLDL into the circulation.', 'খাদ্যের উদ্বৃত্ত শর্করা পালমিটেটে রূপান্তরিত হয়ে VLDL কণা হিসেবে রক্তপ্রবাহে নির্গত হয়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Foundational Takeaways & Synthesis Summary', 'মূল শিক্ষণীয় বিষয় ও সংশ্লেষের সারসংক্ষেপ'),
          paragraphs: [
            l(
              'De novo lipogenesis converts excess dietary carbohydrates into storable fat reserves, utilizing mitochondrial citrate export to supply cytosolic acetyl-CoA. Acetyl-CoA carboxylase serves as the insulin-activated rate-limiting switch, producing malonyl-CoA. Fatty acid synthase uses 14 NADPH to assemble 16-carbon palmitate, which is esterified into triglycerides for safe storage in adipose tissue or hepatic VLDL export.',
              'ডি নোভো লিপোজেনেসিস খাদ্যের অতিরিক্ত শর্করাকে সঞ্চিত চর্বিতে রূপান্তর করে, যেখানে সাইট্রেট শাটল সাইটোসলে অ্যাসিটাইল-কোএ সরবরাহ করে। অ্যাসিটাইল-কোএ কার্বক্সিলেজ ইনসুলিন দ্বারা সক্রিয় হয়ে প্রধান হার-নিয়ন্ত্রক হিসেবে ম্যালোনিল-কোএ তৈরি করে। ফ্যাটি অ্যাসিড সিন্থেজ ১৪টি NADPH ব্যবহার করে ১৬ কার্বনের পালমিটেট গঠন করে, যা ট্রাইগ্লিসারাইড হিসেবে চর্বি কোষে জমা হয় বা যকৃৎ থেকে VLDL হিসেবে রক্তে নির্গত হয়।'
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
          heading: l('1. Intracellular Substrate Logistics: The Citrate-Malate-Pyruvate Shuttle', '১. কোষীয় সাবস্ট্রেট সরবরাহ: সাইট্রেট-ম্যালেট-পাইরুভেট শাটল'),
          paragraphs: [
            l(
              'De novo lipogenesis is the biochemical pathway by which excess dietary carbohydrates are transformed into long-chain fatty acids for long-term thermodynamic energy conservation. The synthesis of fatty acids takes place entirely within the aqueous cytosol, yet the primary two-carbon building block, acetyl-CoA, is generated inside the mitochondrial matrix by pyruvate dehydrogenase and amino acid catabolism. Because the inner mitochondrial membrane lacks a transport system for acetyl-CoA, the cell employs the citrate-malate-pyruvate shuttle to bypass this physical barrier.',
              'ডি নোভো লিপোজেনেসিস হলো এমন একটি জৈবরাসায়নিক গতিপথ যার মাধ্যমে খাদ্যের অতিরিক্ত কার্বোহাইড্রেট দীর্ঘমেয়াদী শক্তি সঞ্চয়ের জন্য ফ্যাটি অ্যাসিডে রূপান্তরিত হয়। ফ্যাটি অ্যাসিড সংশ্লেষ সম্পূর্ণভাবে সাইটোসলে ঘটে, কিন্তু এর মূল কাঁচামাল অ্যাসিটাইল-কোএ তৈরি হয় মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে। যেহেতু মাইটোকন্ড্রিয়ার ভেতরের পর্দা অ্যাসিটাইল-কোএ চলাচলের জন্য সম্পূর্ণ অভেদ্য, তাই কোষ এই বাধা অতিক্রম করতে সাইট্রেট-ম্যালেট-পাইরুভেট শাটল পদ্ধতি ব্যবহার করে।'
            ),
            l(
              'Under conditions of carbohydrate surplus, mitochondrial ATP and NADH levels rise, allosterically inhibiting isocitrate dehydrogenase. Citrate accumulates and is transported across the inner mitochondrial membrane into the cytosol via the tricarboxylate carrier. In the cytosol, ATP-citrate lyase (ACLY) hydrolyzes ATP to cleave citrate into acetyl-CoA and oxaloacetate. Oxaloacetate is reduced to malate by cytosolic malate dehydrogenase, and malic enzyme subsequently decarboxylates malate to pyruvate while reducing NADP+ to NADPH, providing a significant fraction of the reducing equivalents required for fatty acid assembly.',
              'কার্বোহাইড্রেট প্রাচুর্যের সময় মাইটোকন্ড্রিয়ায় এটিপি ও NADH বৃদ্ধি পেয়ে আইসোসাইট্রেট ডিহাইড্রোজিনেজ এনজাইমকে অবদমিত করে। ফলে সাইট্রেট জমা হয় এবং ট্রাইকার্বক্সাইলেট ক্যারিয়ারের মাধ্যমে সাইটোসলে বেরিয়ে আসে। সাইটোসলে এটিপি-সাইট্রেট লাইয়েজ (ACLY) এটিপি ব্যবহার করে সাইট্রেটকে ভেঙে অ্যাসিটাইল-কোএ এবং অক্সালোঅ্যাসিটেট তৈরি করে। পরবর্তীতে ম্যালিক এনজাইম ম্যালেট থেকে পাইরুভেট তৈরির সময় NADP+ কে NADPH-এ বিজারিত করে চর্বি সংশ্লেষের অপরিহার্য বিজারণ শক্তি জোগায়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Acetyl-CoA Carboxylase (ACC): The Master Committed Step', '২. অ্যাসিটাইল-কোএ কার্বক্সিলেজ (ACC): প্রধান হার-নিয়ন্ত্রক ধাপ'),
          paragraphs: [
            l(
              'The committed, rate-limiting step of fatty acid synthesis is catalyzed by acetyl-CoA carboxylase (ACC). ACC is a biotin-dependent multienzyme complex comprising three functional domains: biotin carboxylase, biotin carboxyl carrier protein (BCCP), and carboxyltransferase. The reaction proceeds in two discrete stages: biotin carboxylase first fixes bicarbonate onto the biotin ring using the free energy of ATP hydrolysis, and carboxyltransferase then transfers this activated carboxyl group from carboxybiotin to acetyl-CoA, generating the three-carbon intermediate malonyl-CoA.',
              'ফ্যাটি অ্যাসিড সংশ্লেষের প্রধান হার-নিয়ন্ত্রক ধাপটি সম্পন্ন করে অ্যাসিটাইল-কোএ কার্বক্সিলেজ (ACC)। এটি বায়োটিন-নির্ভর একটি জটিল এনজাইম যার তিনটি সক্রিয় ডোমেন রয়েছে: বায়োটিন কার্বক্সিলেজ, বায়োটিন ক্যারিয়ার প্রোটিন এবং কার্বক্সিলট্রান্সফারেজ। বিক্রিয়ার প্রথম ধাপে এটিপি ভেঙে বায়োটিনের সাথে বাইকার্বনেট যুক্ত হয় এবং দ্বিতীয় ধাপে এই সক্রিয় কার্বক্সিল গ্রুপটি অ্যাসিটাইল-কোএ-তে স্থানান্তরিত হয়ে তিন কার্বনের ম্যালোনিল-কোএ তৈরি করে।'
            ),
            l(
              'ACC is regulated by an intricate hierarchy of allosteric and hormonal mechanisms. Citrate acts as a potent allosteric feedforward activator, causing inactive ACC dimers to polymerize into active filamentous macromolecular ribbons. Conversely, long-chain fatty acyl-CoAs (such as palmitoyl-CoA) act as end-product feedback inhibitors, depolymerizing the enzyme filaments into inactive dimers. Covalently, elevated glucagon, epinephrine, and intracellular AMP activate AMP-activated protein kinase (AMPK), which phosphorylates ACC on Ser79, completely inactivating it to prevent ATP consumption. Insulin counteracts this by activating protein phosphatase 2A (PP2A), which dephosphorylates and activates ACC.',
              'ACC অত্যন্ত সূক্ষ্ম অ্যালবস্টেরিক ও হরমোনজনিত সংকেত দ্বারা নিয়ন্ত্রিত হয়। সাইট্রেট একটি শক্তিশালী অ্যালবস্টেরিক উদ্দীপক হিসেবে কাজ করে এনজাইমের নিষ্ক্রিয় ডাইমারগুলোকে যুক্ত করে সক্রিয় ফিলামেন্টে পরিণত করে। অন্যদিকে ফ্যাটি অ্যাসাইল-কোএ (পালমিটয়েল-কোএ) ফিডব্যাক অবদমন ঘটিয়ে ফিলামেন্ট ভেঙে নিষ্ক্রিয় করে দেয়। হরমোনগতভাবে, গ্লুকাগন এবং এএমপিকে Ser79 অ্যামিনো অ্যাসিডে ফসফরাইলেশন ঘটিয়ে ACC-কে নিষ্ক্রিয় করে এটিপি অপচয় বন্ধ করে, আর ইনসুলিন ফসফেটেজ সক্রিয় করে একে কার্যকর রাখে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Architecture & Catalytic Cycle of Fatty Acid Synthase (FAS)', '৩. ফ্যাটি অ্যাসিড সিন্থেজ (FAS) কমপ্লেক্সের গঠন ও বিক্রিয়া চক্র'),
          paragraphs: [
            l(
              'In humans and other mammals, fatty acid synthesis is carried out by Fatty Acid Synthase (FAS / FASN), a massive homodimeric multienzyme complex (260 kDa per polypeptide monomer) organized in an antiparallel head-to-tail orientation. Each monomer contains seven catalytic domains and an acyl carrier protein (ACP) harboring a 4-prime-phosphopantetheine arm derived from coenzyme A. The phosphopantetheine flexible prosthetic arm acts as a swinging tether that transports the growing acyl intermediate between the adjacent active sites of the complex.',
              'মানুষ ও অন্যান্য স্তন্যপায়ী প্রাণীতে ফ্যাটি অ্যাসিড সংশ্লেষ ফ্যাটি অ্যাসিড সিন্থেজ (FAS) নামক একটি বিশাল হোমোর্ডাইমার এনজাইম কমপ্লেক্স দ্বারা সম্পন্ন হয় যার প্রতিটি মনোমারের ভর ২৬০ কিলোডালটন। প্রতিটি মনোমারে সাতটি অনুঘটন ডোমেন এবং একটি অ্যাসাইল ক্যারিয়ার প্রোটিন (ACP) থাকে যার সাথে কোএনজাইম এ থেকে আসা ৪-ফসফোপ্যান্টোথিন বাহু যুক্ত থাকে। এই নমনীয় বাহুটি একটি দোলকের মতো কাজ করে বর্ধনশীল ফ্যাটি অ্যাসিড শিকলকে এনজাইমের বিভিন্ন সক্রিয় কেন্দ্রের মাঝে দ্রুত স্থানান্তর করে।'
            ),
            l(
              'The cyclic elongation sequence comprises four sequential reactions. First, beta-ketoacyl-ACP synthase (KS) executes a decarboxylative condensation between malonyl-ACP and the growing acyl chain attached to KS, releasing CO2 and driving the endergonic condensation forward. Second, beta-ketoacyl-ACP reductase (KR) reduces the beta-keto group to an alcohol using NADPH. Third, beta-hydroxyacyl-ACP dehydratase (DH) removes water to create a trans-delta2-enoyl group. Fourth, enoyl-ACP reductase (ER) reduces the double bond using a second NADPH molecule, generating a fully saturated, lengthened acyl-ACP. After seven rounds, thioesterase (TE) cleaves palmitate.',
              'চক্রাকার বৃদ্ধির ধারাটি চারটি ধারাবাহিক বিক্রিয়ায় সম্পন্ন হয়। প্রথমে কিটোঅ্যাসাইল সিন্থেজ (KS) CO2 অপসারণের মাধ্যমে ম্যালোনিল ও বর্ধনশীল চেইনের ঘনীভবন ঘটায়। দ্বিতীয় ধাপে কিটোঅ্যাসাইল রিডাক্টেজ (KR) NADPH ব্যবহার করে কিটো গ্রুপকে অ্যালকোহলে বিজারিত করে। তৃতীয় ধাপে ডিহাইড্রেটেজ (DH) পানি সরিয়ে ট্রান্স দ্বিবন্ধন তৈরি করে। চতুর্থ ধাপে ইনয়েল রিডাক্টেজ (ER) দ্বিতীয় NADPH ব্যবহার করে দ্বিবন্ধনটি সম্পৃক্ত করে। এভাবে সাত চক্র শেষে থায়োএস্টারেজ (TE) এনজাইম পানি দিয়ে আর্দ্রবিশ্লেষণ করে মুক্ত পালমিটেট অবমুক্ত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Microsomal Modifications & Triacylglycerol Assembly', '৪. মাইক্রোসোমাল পরিবর্তন ও ট্রাইগ্লিসারাইড গঠন প্রক্রিয়া'),
          paragraphs: [
            l(
              'Free palmitate released by fatty acid synthase is immediately reactivated to palmitoyl-CoA by fatty acyl-CoA synthetase on the cytosolic face of the endoplasmic reticulum. Within the ER membrane, elongase enzymes extend the carbon chain two carbons at a time using malonyl-CoA as the carbon donor. Stearoyl-CoA desaturase-1 (SCD1), an ER membrane-bound iron-dependent enzyme, introduces a cis-double bond specifically between carbons 9 and 10 to form oleoyl-CoA (18:1 cis-delta9), which is critical for maintaining biological membrane fluidity.',
              'ফ্যাটি অ্যাসিড সিন্থেজ থেকে মুক্ত হওয়া পালমিটেট এন্ডোপ্লাজমিক রেটিকুলামের পর্দায় গিয়ে পুনরায় পালমিটয়েল-কোএ-তে সক্রিয় হয়। সেখানে ইলোংগেজ এনজাইম ম্যালোনিল-কোএ ব্যবহার করে চেইনটি আরও দীর্ঘ করে। স্টিয়ারয়েল-কোএ ডেস্যাচুরেজ-১ (SCD1) নামক আয়রন-নির্ভর এনজাইম কার্বন ৯ ও ১০ এর মাঝে একটি সিস-দ্বিবন্ধন তৈরি করে ওলিয়েল-কোএ গঠন করে, যা আমাদের কোষপর্দার স্বাভাবিক তারল্য ও নমনীয়তা রক্ষার জন্য অপরিহার্য।'
            ),
            l(
              'Triacylglycerols are assembled on the endoplasmic reticulum membrane via the glycerol-3-phosphate pathway. Glycerol-3-phosphate acyltransferase (GPAT) adds the first fatty acyl chain to the sn-1 position to form lysophosphatidic acid. Acylglycerolphosphate acyltransferase (AGPAT) esterifies a second fatty acid to the sn-2 position, generating phosphatidic acid. Phosphatidic acid phosphatase (Lipin-1) removes the phosphate group to yield 1,2-diacylglycerol (DAG). Finally, diacylglycerol acyltransferase (DGAT) adds a third fatty acid to sn-3, producing triacylglycerol, which is stored in adipocyte lipid droplets or secreted by the liver in VLDL.',
              'ট্রাইগ্লিসারাইড এন্ডোপ্লাজমিক রেটিকুলামে গ্লিসারল-৩-ফসফেট পথের মাধ্যমে সংশ্লেষিত হয়। GPAT এনজাইম গ্লিসারলের ১ম কার্বনে প্রথম ফ্যাটি অ্যাসিড যুক্ত করে লাইসোফসফেটিডিক অ্যাসিড তৈরি করে। AGPAT ২য় কার্বনে আরেকটি ফ্যাটি অ্যাসিড যুক্ত করে ফসফেটিডিক অ্যাসিড তৈরি করে। এরপর লিপিন-১ ফসফেট গ্রুপটি অপসারণ করে ১,২-ডাইঅ্যাসাইলগ্লিসারল (DAG) উৎপন্ন করে। সর্বশেষ ধাপে DGAT এনজাইম ৩য় ফ্যাটি অ্যাসিড যুক্ত করে পূর্ণাঙ্গ ট্রাইগ্লিসারাইড তৈরি করে, যা চর্বি কোষে জমা হয় অথবা VLDL কণা হিসেবে রক্তে প্রেরিত হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Pathophysiology: Metabolic Dysfunction-Associated Steatohepatitis (MASH)', '৫. প্যাথোফিজিওলজি: ফ্যাটি লিভার ও বিপাকীয় বিকলতাজনিত স্টিয়াটোহেপাটাইটিস'),
          paragraphs: [
            l(
              'In metabolic dysfunction-associated steatotic liver disease (MASLD / NAFLD), chronic hyperinsulinemia and elevated dietary fructose drive hyperactive de novo lipogenesis. Insulin continuously stimulates sterol regulatory element-binding protein-1c (SREBP-1c), while fructose bypasses the phosphofructokinase-1 checkpoint to flood the liver with triose phosphates, activating carbohydrate response element-binding protein (ChREBP). Together, SREBP-1c and ChREBP upregulate the transcription of ACLY, ACC, and FASN, causing hepatic triglyceride accumulation that exceeds VLDL export capacity.',
              'বিপাকীয় বিকলতাজনিত ফ্যাটি লিভার রোগে (ম্যাশ / এনএএফএলডি) দীর্ঘস্থায়ী হাইপারইনসুলিনেমিয়া এবং অতিরিক্ত ফ্রুক্টোজ গ্রহণ যকৃতে প্রচণ্ডভাবে ডি নোভো লিপোজেনেসিস বৃদ্ধি করে। ইনসুলিন অনবরত SREBP-1c জিনকে সক্রিয় রাখে এবং ফ্রুক্টোজ ফসফোফ্রুক্টোকাইনেজ নিয়ন্ত্রণকে পাশ কাটিয়ে ট্রায়োজ ফসফেট তৈরি করে ChREBP কে উদ্দীপ্ত করে। এই দুটি ট্রান্সক্রিপশন ফ্যাক্টর একযোগে ACLY, ACC এবং FASN এনজাইমগুলোর মাত্রা বহুগুণ বাড়িয়ে দেয়, যার ফলে যকৃতে চর্বি জমা VLDL নির্গমনের ক্ষমতাকে ছাড়িয়ে যায়।'
            ),
            l(
              'In chronic alcohol abuse, alcohol dehydrogenase and aldehyde dehydrogenase oxidize ethanol to acetate, generating massive quantities of cytosolic and mitochondrial NADH. The resulting sky-high NADH/NAD+ ratio inhibits isocitrate dehydrogenase and beta-oxidation, while forcing dihydroxyacetone phosphate toward glycerol-3-phosphate. The combination of stalled fatty acid burning and abundant glycerol-3-phosphate drives rapid triacylglycerol synthesis, resulting in severe alcohol-related hepatic steatosis.',
              'দীর্ঘস্থায়ী অতিরিক্ত মদ্যপানে অ্যালকোহল জারিত হয়ে অ্যাসিটেটে রূপান্তরের সময় সাইটোসল ও মাইটোকন্ড্রিয়ায় বিপুল পরিমাণ NADH উৎপন্ন করে। এই অস্বাভাবিক উচ্চ NADH/NAD+ অনুপাত ফ্যাটি অ্যাসিডের বিটা-জারণ বন্ধ করে দেয় এবং গ্লাইকোলাইসিসের DHAP-কে জোরপূর্বক গ্লিসারল-৩-ফসফেটে রূপান্তরিত করে। চর্বি পোড়ানো বন্ধ হওয়া এবং গ্লিসারল মেরুদণ্ডের প্রাচুর্য যকৃতে ব্যাপক ট্রাইগ্লিসারাইড সংশ্লেষ ঘটায়, যা মারাত্মক অ্যালকোহলিক ফ্যাটি লিভারের মূল কারণ।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Core Synthetic Takeaways: Lipid Storage Architecture', '৬. মূল শিক্ষা: চর্বি সঞ্চয় ও জৈবসংশ্লেষের কাঠামো'),
          paragraphs: [
            l(
              'Fatty acid synthesis is the quintessential anabolic pathway converting dietary caloric excess into high-density energy reserves. Catalyzed by the homodimeric FAS complex using malonyl-CoA building blocks, lipogenesis requires 14 NADPH reducing equivalents per palmitate synthesized. Insulin promotes storage via dephosphorylation of ACC and transcriptional induction of lipogenic enzymes, while adipose tissue absence of glycerol kinase couples triglyceride accumulation tightly to glucose availability.',
              'ফ্যাটি অ্যাসিড সংশ্লেষ হলো অতিরিক্ত ক্যালরিকে উচ্চ-ঘনত্বের শক্তিভাণ্ডারে রূপান্তর করার প্রধান উপচিতিমূলক গতিপথ। ম্যালোনিল-কোএ কাঁচামাল এবং বহু-এনজাইম FAS কমপ্লেক্স ব্যবহার করে এই গতিপথে প্রতি অণু পালমিটেট তৈরিতে ১৪টি NADPH ব্যয় হয়। ইনসুলিন ACC এনজাইম সক্রিয় করে সঞ্চয় ত্বরান্বিত করে, আর চর্বি কোষে গ্লিসারল কাইনেজের অনুপস্থিতি ফ্যাটি অ্যাসিড জমা করার প্রক্রিয়াকে সরাসরি রক্তের গ্লুকোজ সরবরাহের সাথে যুক্ত রাখে।'
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
          heading: l('Lipin-1 Dual Function & Fatty Acid Synthase Oncology Targets', 'লিপিন-১ এর দ্বৈত ভূমিকা ও ক্যান্সার চিকিৎসায় FAS টার্গেট'),
          paragraphs: [
            l(
              'Lipin-1 functions as both a magnesium-dependent phosphatidic acid phosphatase (PAP) and a nuclear transcriptional coactivator. In the nucleus, Lipin-1 interacts with peroxisome proliferator-activated receptor alpha (PPAR-alpha) and PGC-1-alpha to induce mitochondrial fatty acid oxidation genes, revealing that a single enzyme coordinates both lipid synthesis and catabolic gene expression depending on phosphorylation-dependent nuclear-cytoplasmic shuttling.',
              'লিপিন-১ কেবল ফসফেটিডিক অ্যাসিড ফসফেটেজ (PAP) হিসেবে ট্রাইগ্লিসারাইড তৈরি করে না, বরং কোষের নিউক্লিয়াসে এটি PPAR-আলফা ও PGC-1-আলফার সাথে যুক্ত হয়ে ফ্যাটি অ্যাসিড জারণের জিন সক্রিয় করে। অর্থাৎ একটি একক এনজাইম ফসফরাইলেশন সংকেতের ওপর ভিত্তি করে সাইটোসল ও নিউক্লিয়াসের মাঝে স্থান পরিবর্তনের মাধ্যমে চর্বি সংশ্লেষ ও চর্বি ভাঙার উভয় প্রক্রিয়া নিয়ন্ত্রণ করতে পারে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Therapeutic Innovations: ACLY & ACC Inhibitors in Cardiometabolic Medicine', 'চিকিৎসা বিজ্ঞানের উদ্ভাবন: ACLY ও ACC ইনহিবিটর ওষুধ'),
          paragraphs: [
            l(
              'Targeting de novo lipogenesis has yielded FDA-approved therapies for hypercholesterolemia and metabolic steatohepatitis. Bempedoic acid is a prodrug activated selectively in hepatocytes by ACSVL1 that competitively inhibits ATP-citrate lyase (ACLY), suppressing both cytosolic acetyl-CoA generation and downstream cholesterol synthesis without the muscle toxicity common with statins. Simultaneously, allosteric ACC1/ACC2 inhibitors (such as firsocostat) markedly reduce hepatic fat content in clinical trials for steatohepatitis.',
              'ডি নোভো লিপোজেনেসিসকে বাধা দিয়ে উচ্চ কোলেস্টেরল ও ফ্যাটি লিভারের আধুনিক চিকিৎসা উদ্ভাবিত হয়েছে। বেম্পেডোয়িক অ্যাসিড হলো একটি প্রোড্রাগ যা কেবল যকৃতে সক্রিয় হয়ে এটিপি-সাইট্রেট লাইয়েজ (ACLY) এনজাইমকে বাধা দেয়, যা পেশিতে কোনো ব্যথা সৃষ্টি না করেই কোলেস্টেরল কমায়। একইসাথে ফিরসোকোস্ট্যাট-এর মতো আধুনিক ACC ইনহিবিটর যকৃতের চর্বির পরিমাণ উল্লেখযোগ্যভাবে হ্রাস করতে ক্লিনিক্যাল ট্রায়ালে সফল হয়েছে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A biochemical map showing mitochondrial citrate export through the tricarboxylate carrier, cleavage by ACLY to acetyl-CoA, carboxylation by ACC to malonyl-CoA, seven cycles of elongation by fatty acid synthase releasing palmitate, and incorporation into triacylglycerols via DGAT.',
      'মাইটোকন্ড্রিয়া থেকে ট্রাইকার্বক্সাইলেট ক্যারিয়ার দিয়ে সাইট্রেট নির্গমন, ACLY দ্বারা অ্যাসিটাইল-কোএ তৈরি, ACC দ্বারা ম্যালোনিল-কোএ গঠন, ফ্যাটি অ্যাসিড সিন্থেজ দ্বারা পালমিটেট সংশ্লেষ এবং DGAT দ্বারা ট্রাইগ্লিসারাইড গঠনের সম্পূর্ণ জৈবরাসায়নিক নকশা।'
    ),
    steps: [
      l('Citrate exports from mitochondria and is cleaved by ACLY into cytosolic acetyl-CoA.', 'সাইট্রেট মাইটোকন্ড্রিয়া থেকে নির্গত হয়ে ACLY দ্বারা সাইটোসলিক অ্যাসিটাইল-কোএ-তে রূপান্তরিত হয়।'),
      l('Acetyl-CoA carboxylase (ACC) fixes CO2 to produce malonyl-CoA in the rate-limiting step.', 'অ্যাসিটাইল-কোএ কার্বক্সিলেজ (ACC) হার-নিয়ন্ত্রক ধাপে CO2 যুক্ত করে ম্যালোনিল-কোএ তৈরি করে।'),
      l('Fatty acid synthase utilizes 14 NADPH to synthesize 16-carbon palmitate.', 'ফ্যাটি অ্যাসিড সিন্থেজ ১৪টি NADPH ব্যবহার করে ১৬ কার্বনের পালমিটেট সংশ্লেষ করে।'),
      l('Fatty acids are esterified with glycerol-3-phosphate by DGAT to form triacylglycerol.', 'DGAT এনজাইম ফ্যাটি অ্যাসিডকে গ্লিসারল-৩-ফসফেটের সাথে যুক্ত করে ট্রাইগ্লিসারাইড তৈরি করে।'),
    ],
  },
  assessment: {
    question: l(
      'Why is human adipose tissue unable to directly phosphorylate the free glycerol liberated during intracellular lipolysis to re-esterify fatty acids into triacylglycerols?',
      'চর্বি ভাঙনের সময় মুক্ত হওয়া গ্লিসারলকে মানবদেহের অ্যাডিপোজ টিস্যু কেন সরাসরি ফসফরাইলেশন করে পুনরায় ট্রাইগ্লিসারাইড তৈরিতে ব্যবহার করতে পারে না?'
    ),
    options: [
      l(
        'Adipocytes completely lack the enzyme glycerol kinase and must rely on glycolysis of glucose to supply dihydroxyacetone phosphate (DHAP) for glycerol-3-phosphate synthesis.',
        'চর্বি কোষে গ্লিসারল কাইনেজ এনজাইম সম্পূর্ণ অনুপস্থিত থাকে; তাই গ্লিসারল-৩-ফসফেট তৈরির জন্য চর্বি কোষকে গ্লুকোজের গ্লাইকোলাইসিস ও DHAP-এর ওপর নির্ভর করতে হয়।'
      ),
      l(
        'Adipocytes lack fatty acyl-CoA synthetase and cannot activate free fatty acids in the cytoplasm.',
        'চর্বি কোষে ফ্যাটি অ্যাসাইল-কোএ সিন্থেটেজ না থাকায় এটি সাইটোপ্লাজমে ফ্যাটি অ্যাসিড সক্রিয় করতে পারে না।'
      ),
      l(
        'Free glycerol acts as an irreversible suicide inhibitor of diacylglycerol acyltransferase (DGAT).',
        'মুক্ত গ্লিসারল ডাইঅ্যাসাইলগ্লিসারল অ্যাসাইলট্রান্সফারেজ (DGAT) এনজাইমকে স্থায়ীভাবে ধ্বংস করে দেয়।'
      ),
      l(
        'Glycerol phosphorylation requires GTP, which is present only within the mitochondrial matrix.',
        'গ্লিসারল ফসফরাইলেশনে জিটিপি প্রয়োজন হয়, যা কেবল মাইটোকন্ড্রিয়াল ম্যাট্রিক্সেই বিদ্যমান থাকে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Adipocytes lack glycerol kinase, which is expressed abundantly in hepatocytes. Consequently, adipocytes cannot re-esterify free glycerol released by hormone-sensitive lipase; they depend strictly on glucose uptake via insulin-regulated GLUT4 transporters to produce dihydroxyacetone phosphate (DHAP), which glycerol-3-phosphate dehydrogenase reduces to glycerol-3-phosphate.',
      'অ্যাডিপোজ টিস্যুতে গ্লিসারল কাইনেজ এনজাইম থাকে না, যা কেবল যকৃতে থাকে। ফলে চর্বি কোষ লাইপোলাইসিসে মুক্ত গ্লিসারলকে কাজে লাগাতে পারে না; নতুন চর্বি তৈরির জন্য এটি সম্পূর্ণভাবে ইনসুলিন-নিয়ন্ত্রিত GLUT4 দিয়ে প্রবেশ করা গ্লুকোজ এবং গ্লাইকোলাইসিসের DHAP-এর ওপর নির্ভরশীল।'
    ),
  },
}
