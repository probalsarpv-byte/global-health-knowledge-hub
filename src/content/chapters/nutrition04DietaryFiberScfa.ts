import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const fiberScfaRefs = [
  {
    id: 'slavin-modern-nutrition-fiber',
    authors: 'Joanne L. Slavin, David J. A. Jenkins',
    title: 'Modern Nutrition in Health and Disease, 11th edition, Chapter 3: Dietary Fiber and Human Health',
    organization: 'Wolters Kluwer Health / Lippincott Williams & Wilkins',
    year: 2014,
    url: 'https://shop.lww.com/Modern-Nutrition-in-Health-and-Disease/p/9781605474618',
  },
  {
    id: 'canfora-nrgastro-scfa',
    authors: 'Emanuel E. Canfora, Johan W. Jocken, Ellen E. Blaak',
    title: 'Short-chain fatty acids in control of body weight and insulin sensitivity',
    organization: 'Nature Reviews Endocrinology',
    year: 2015,
    url: 'https://doi.org/10.1038/nrendo.2015.128',
  },
  {
    id: 'gropper-advanced-nutrition-fiber',
    authors: 'Sareen S. Gropper, Jack L. Smith, Timothy P. Carr',
    title: 'Advanced Nutrition and Human Metabolism, 8th edition, Chapter 4: Dietary Fiber',
    organization: 'Cengage Learning',
    year: 2021,
    url: 'https://www.cengage.com/c/advanced-nutrition-and-human-metabolism-8e-gropper/9780357449813/',
  },
  {
    id: 'koh-cell-microbe-scfa-homeostasis',
    authors: 'Ara Koh, Filippo De Vadder, Petia Kovatcheva-Dabanlouz, Fredrik Backhed',
    title: 'From dietary fiber to host physiology: short-chain fatty acids as key bacterial metabolites',
    organization: 'Cell',
    year: 2016,
    url: 'https://doi.org/10.1016/j.cell.2016.05.041',
  },
]

export const nutrition04DietaryFiberScfaLesson: LessonTopic = {
  id: 'topic.nutrition.dietary-fiber-scfa',
  slug: 'dietary-fiber-scfa',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '04 · Dietary Fiber, Short-Chain Fatty Acids & Colonic Epithelial Integrity',
    '০৪ · খাদ্য আঁশ, শর্ট-চেইন ফ্যাটি অ্যাসিড ও কোলন আবরণীর অখণ্ডতা'
  ),
  summary: l(
    'Physicochemical classification of dietary fiber (solubility, viscosity, fermentability), colonic anaerobic microbiota metabolism, generation of acetate, propionate, and butyrate, and colonocyte epithelial bioenergetics.',
    'খাদ্য আঁশের ভৌত-রাসায়নিক শ্রেণিবিভাগ (দ্রবণীয়তা, সান্দ্রতা, গাঁজনযোগ্যতা), বৃহদান্ত্রের অবাত অণুজীবের মেটাবলিজম, অ্যাসিটেট, প্রোপিওনেট ও বিউটাইরেট উৎপাদন এবং কোলনোসাইটের শক্তি উৎপাদন।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Classify dietary fiber polymers by solubility, viscosity, and microbial fermentability, correlating chemical structure with physiological actions.',
      'দ্রবণীয়তা, সান্দ্রতা এবং মাইক্রোবায়াল গাঁজনযোগ্যতার ভিত্তিতে খাদ্য আঁশের পলিমারসমূহ শ্রেণিবদ্ধ করা এবং রাসায়নিক কাঠামোর সাথে শারীরবৃত্তীয় কাজের সম্পর্ক নির্ণয় করতে পারা।'
    ),
    l(
      'Trace the anaerobic fermentation of non-digestible carbohydrates, calculating the typical stoichiometric proportions and distinct organ fates of acetate, propionate, and butyrate.',
      'অপাচ্য শর্করার অবাত গাঁজন প্রক্রিয়া চিহ্নিত করা এবং অ্যাসিটেট, প্রোপিওনেট ও বিউটাইরেটের স্বাভাবিক অনুপাত ও তাদের অঙ্গভিত্তিক বিপাকীয় পরিণতি ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Explain how butyrate serves as the primary energetic fuel for mature colonocytes via mitochondrial beta-oxidation while regulating barrier integrity and mucosal immunity through FFAR receptors and HDAC inhibition.',
      'মাইটোকন্ড্রিয়াল বিটা-জারণের মাধ্যমে বিউটাইরেট কীভাবে পরিপক্ক কোলনোসাইটের প্রধান জ্বালানি হিসেবে কাজ করে এবং FFAR রিসেপ্টর ও HDAC দমনের মাধ্যমে অন্ত্রের প্রাচীর রক্ষা করে তা বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.carbohydrate-quality-gi-gl'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.fatty-acid-oxidation-ketones'],
  references: fiberScfaRefs,
  evidenceBySection: {
    introduction: ['slavin-modern-nutrition-fiber', 'gropper-advanced-nutrition-fiber'],
    structure: ['gropper-advanced-nutrition-fiber', 'canfora-nrgastro-scfa'],
    mechanism: ['canfora-nrgastro-scfa', 'koh-cell-microbe-scfa-homeostasis'],
    integration: ['slavin-modern-nutrition-fiber', 'koh-cell-microbe-scfa-homeostasis'],
    practice: ['canfora-nrgastro-scfa', 'gropper-advanced-nutrition-fiber'],
    takeaways: ['slavin-modern-nutrition-fiber', 'canfora-nrgastro-scfa'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Definition & Physicochemical Classes of Dietary Fiber', '১. খাদ্য আঁশের সংজ্ঞা ও ভৌত-রাসায়নিক শ্রেণিবিভাগ'), sectionId: 'introduction' },
      { id: 'sec-fermentation', label: l('2. Anaerobic Microbial Fermentation in the Colon', '২. বৃহদান্ত্রে অণুজীবের অবাত গাঁজন প্রক্রিয়া'), sectionId: 'structure' },
      { id: 'sec-scfa-triad', label: l('3. The SCFA Triad: Acetate, Propionate, Butyrate', '৩. এসসিএফএ ত্রয়ী: অ্যাসিটেট, প্রোপিওনেট, বিউটাইরেট'), sectionId: 'mechanism' },
      { id: 'sec-colonocyte', label: l('4. Colonocyte Energetics & Barrier Tight Junctions', '৪. কোলনোসাইটের শক্তি উৎপাদন ও টাইট-জাংশন অখণ্ডতা'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Quantitative SCFA Flux & Receptor Signaling', '৫. পরিমাণগত এসসিএফএ প্রবাহ ও রিসেপ্টর সংকেত'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Dietary Fiber', 'খাদ্য আঁশ (Dietary Fiber)'),
        definition: l(
          'Non-digestible carbohydrates and lignin that are intrinsic and intact in plants, resisting chemical cleavage by endogenous human digestive enzymes and reaching the large intestine intact.',
          'উদ্ভিদে প্রাকৃতিকভাবে উপস্থিত অপাচ্য শর্করা ও লিগনিন, যা মানুষের ক্ষুদ্রান্ত্রের নিজস্ব পাচক এনজাইমের রাসায়নিক ভাঙন প্রতিরোধ করে অবিকৃত অবস্থায় বৃহদান্ত্রে পৌঁছায়।'
        ),
      },
      {
        term: l('Short-Chain Fatty Acids (SCFAs)', 'শর্ট-চেইন ফ্যাটি অ্যাসিড (SCFA)'),
        definition: l(
          'Saturated aliphatic organic acids containing one to six carbon atoms, predominantly acetate (C2), propionate (C3), and butyrate (C4), produced by bacterial fermentation of dietary fibers in the caecum and colon.',
          'এক থেকে ছয় কার্বনবিশিষ্ট সম্পৃক্ত জৈব ফ্যাটি অ্যাসিড, প্রধানত অ্যাসিটেট (C2), প্রোপিওনেট (C3) এবং বিউটাইরেট (C4), যা বৃহদান্ত্রে ব্যাকটেরিয়ার গাঁজনের ফলে উৎপন্ন হয়।'
        ),
      },
      {
        term: l('Free Fatty Acid Receptor 2 & 3 (FFAR2 / FFAR3)', 'ফ্রি ফ্যাটি অ্যাসিড রিসেপ্টর ২ ও ৩ (FFAR2 / FFAR3)'),
        definition: l(
          'G-protein coupled cell-surface receptors (also known as GPR43 and GPR41) activated by luminal and circulating SCFAs, regulating immune cell trafficking, GLP-1/PYY secretion, and autonomic sympathetic tone.',
          'জি-প্রোটিন যুক্ত কোষঝিল্লির গ্রাহক (GPR43 ও GPR41), যা শর্ট-চেইন ফ্যাটি অ্যাসিড দ্বারা উদ্দীপিত হয়ে ইমিউন কোষের গতিবিধি, ইনক্রেটিন নিঃসরণ এবং স্নায়বিক ভারসাম্য নিয়ন্ত্রণ করে।'
        ),
      },
      {
        term: l('Histone Deacetylase (HDAC) Inhibition', 'হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) দমন'),
        definition: l(
          'Epigenetic mechanism whereby butyrate inhibits zinc-dependent HDAC enzymes, preserving histone acetylation, maintaining chromatin relaxation, and activating anti-inflammatory genes and Foxp3 in regulatory T cells.',
          'এপিজেনেটিক প্রক্রিয়া যেখানে বিউটাইরেট HDAC এনজাইমকে নিষ্ক্রিয় করে হিস্টোনে অ্যাসিটাইল গ্রুপ ধরে রাখে, ফলে ক্রোমাটিন শিথিল থেকে প্রদাহরোধী জিন ও টি-রেগুলেটরি কোষ সক্রিয় হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Tracing the Organ Fates of the Three Principal SCFAs', 'তিনটি প্রধান শর্ট-চেইন ফ্যাটি অ্যাসিডের অঙ্গভিত্তিক পরিণতি'),
        steps: [
          l(
            'Step 1: In the proximal colon, anaerobic fermentation of 30 grams of soluble fiber yields approximately 300 to 400 mmol of mixed SCFAs in a typical molar ratio of 60% acetate, 20% propionate, and 20% butyrate.',
            'ধাপ ১: প্রক্সিমাল কোলনে ৩০ গ্রাম দ্রবণীয় ফাইবারের গাঁজনে প্রায় ৩০০ থেকে ৪০০ মিলিমোল এসসিএফএ উৎপন্ন হয়, যার স্বাভাবিক মোলার অনুপাত ৬০% অ্যাসিটেট, ২০% প্রোপিওনেট এবং ২০% বিউটাইরেট।'
          ),
          l(
            'Step 2: Butyrate (C4) is avidly captured by apical monocarboxylate transporters (MCT1 and SMCT1) on colonocytes; over 70% to 90% is oxidized to acetyl-CoA directly within the colonic epithelium to fuel ATP synthesis.',
            'ধাপ ২: উৎপন্ন বিউটাইরেটের ৭০% থেকে ৯০% কোলনোসাইটের নিজস্ব পরিবাহক দিয়ে শোষিত হয়ে সরাসরি মাইটোকন্ড্রিয়ায় বিটা-জারণের মাধ্যমে এটিপি তৈরিতে জ্বালানি হিসেবে ব্যবহৃত হয়।'
          ),
          l(
            'Step 3: Propionate (C3) enters the portal circulation and is cleared by the liver (>90%), where it enters the citric acid cycle via succinyl-CoA and acts as an allosteric inhibitor of hepatic de novo lipogenesis and gluconeogenesis.',
            'ধাপ ৩: প্রোপিওনেট পোর্টাল রক্ত দিয়ে যকৃতে যায় এবং সেখানে ৯০% শোষিত হয়ে সাকসিনাইল-কোএ পথে সাইট্রিক অ্যাসিড চক্রে ঢোকে এবং যকৃতে বাড়তি চর্বি তৈরি বন্ধ করে।'
          ),
          l(
            'Step 4: Acetate (C2) escapes hepatic extraction and reaches systemic peripheral blood (50–100 micromolar), where it is utilized as fuel by skeletal muscle, myocardium, and the brain, and binds adipocyte FFAR2.',
            'ধাপ ৪: অ্যাসিটেট যকৃতের ফিল্টারিং পেরিয়ে সিস্টেমিক রক্তে পৌঁছায় এবং কঙ্কালপেশি, হৃদপেশি ও মস্তিষ্কের জ্বালানি হিসেবে ব্যবহৃত হয় এবং চর্বি কোষে সংকেত পাঠায়।'
          ),
        ],
        conclusion: l(
          'Each SCFA plays a compartmentalized role: butyrate guards the gut, propionate regulates the liver, and acetate communicates with peripheral tissues.',
          'প্রতিটি এসসিএফএ সুনির্দিষ্ট দায়িত্ব পালন করে: বিউটাইরেট অন্ত্রের প্রাচীর রক্ষা করে, প্রোপিওনেট যকৃতের বিপাক চালায় এবং অ্যাসিটেট দূরবর্তী অঙ্গগুলোর সাথে যোগাযোগ রক্ষা করে।'
        ),
      },
      {
        title: l('How Butyrate Oxidation Maintains Physiological Hypoxia in the Colonic Lumen', 'বিউটাইরেট জারণ কীভাবে অন্ত্রের লুমেনে প্রয়োজনীয় অক্সিজেনহীনতা বজায় রাখে'),
        steps: [
          l(
            'Step 1: Differentiated colonocytes consume massive quantities of molecular oxygen during mitochondrial beta-oxidation of butyrate.',
            'ধাপ ১: পরিপক্ক কোলনোসাইট কোষগুলো বিউটাইরেটের মাইটোকন্ড্রিয়াল বিটা-জারণের সময় প্রচুর আণবিক অক্সিজেন খরচ করে।'
          ),
          l(
            'Step 2: This continuous high oxygen consumption depletes tissue oxygen levels, stabilizing the transcription factor Hypoxia-Inducible Factor 1-alpha (HIF-1alpha).',
            'ধাপ ২: এই বিপুল অক্সিজেন ব্যয়ের ফলে অন্ত্রপ্রাচীরে অক্সিজেনের চাপ কমে যায়, যা হাইপোক্সিয়া-ইনডিউসিবল ফ্যাক্টর ১-আলফা (HIF-1alpha) প্রোটিনকে স্থিতিশীল রাখে।'
          ),
          l(
            'Step 3: HIF-1alpha upregulates claudin-1 tight junction genes and antimicrobial defensins while keeping the luminal surface virtually anoxic (<1% O2).',
            'ধাপ ৩: এইচআইএফ-১-আলফা টাইট-জাংশন জিন ও ডিফেন্সিন সক্রিয় করে এবং লুমেনকে প্রায় অক্সিজেনশূন্য (<১% O2) রাখে।'
          ),
        ],
        conclusion: l(
          'Colonic hypoxia shields beneficial obligate anaerobes (Bifidobacteria, Clostridia) from dying and prevents the bloom of facultative pathogens (Salmonella, pathogenic E. coli).',
          'অন্ত্রের এই অক্সিজেনহীন পরিবেশ উপকারী অবাত অণুজীবদের বাঁচিয়ে রাখে এবং ক্ষতিকর প্যাথোজেনিক ব্যাকটেরিয়ার বংশবৃদ্ধি প্রতিরোধ করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why are insoluble fibers like wheat bran effective laxatives even though they produce relatively few short-chain fatty acids?',
          'হুইট ব্রানের মতো অদ্রবণীয় আঁশ কম এসসিএফএ তৈরি করা সত্ত্বেও কেন অত্যন্ত কার্যকর রেচক হিসেবে কাজ করে?'
        ),
        answer: l(
          'Insoluble fibers (principally cellulose and lignin) are poorly fermented by microbiota; they retain water mechanically, expand stool volume, physically stimulate mechanoreceptors in the enteric nervous system, and trigger propulsive peristaltic contractions.',
          'অদ্রবণীয় আঁশ (প্রধানত সেলুলোজ ও লিগনিন) ব্যাকটেরিয়ায় সহজে গাঁজন হয় না; এরা ভৌতভাবে পানি আটকে রাখে, মলের আয়তন বাড়ায় এবং অন্ত্রের স্নায়ুতন্ত্রকে উদ্দীপিত করে শক্তিশালী পেরিস্টালসিস সৃষ্টি করে।'
        ),
      },
      {
        question: l(
          'What is the daily recommended dietary fiber intake for healthy adults established by international health guidelines?',
          'আন্তর্জাতিক স্বাস্থ্য সংস্থাগুলোর নির্দেশিকা অনুসারে সুস্থ প্রাপ্তবয়স্কদের জন্য দৈনিক খাদ্য আঁশের সুপারিশকৃত পরিমাণ কত?'
        ),
        answer: l(
          'Authoritative guidelines recommend 25 to 38 grams per day (or approximately 14 grams per 1,000 kcal ingested), though typical Western diets provide less than 15 grams per day.',
          'স্বীকৃত নির্দেশিকা অনুসারে দৈনিক ২৫ থেকে ৩৮ গ্রাম (অথবা প্রতি ১,০০০ কিলোক্যালরি খাদ্যে প্রায় ১৪ গ্রাম) খাদ্য আঁশ গ্রহণ সুপারিশ করা হয়, যদিও সাধারণ আধুনিক খাদ্যাভ্যাসে মানুষ ১৫ গ্রামেরও কম পায়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'dietary-fiber-scfa-landscape',
    title: l(
      'Interactive Dietary Fiber Fermentation & SCFA Signaling Cascade',
      'ইন্টারেক্টিভ খাদ্য আঁশের গাঁজন ও এসসিএফএ সংকেত প্রবাহ রূপরেখা'
    ),
    description: l(
      'Inspect how diverse plant fiber polysaccharides undergo anaerobic microbial fermentation, yielding the three principal short-chain fatty acids that govern colonocyte energetics and host metabolic health.',
      'উদ্ভিজ্জ আঁশের জটিল পলিমারগুলো কীভাবে অবাত গাঁজনের মাধ্যমে তিনটি প্রধান শর্ট-চেইন ফ্যাটি অ্যাসিড তৈরি করে এবং কোলন কোষের শক্তি ও দেহের সার্বিক বিপাকীয় স্বাস্থ্য নিয়ন্ত্রণ করে তা পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Molar ratios reflect steady-state human proximal colonic aspirates; distal colonic ratios shift as fermentable substrates become depleted.',
      'প্রক্সিমাল কোলনের আদর্শ সুস্থ মানুষের নমুনাভিত্তিক মোলার অনুপাত; দূরবর্তী কোলনে খাদ্য উপাদানের ঘাটতি দেখা দিলে এই অনুপাত কিছুটা পরিবর্তিত হতে পারে।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'fiber-classes-node',
        label: l('Fiber Classes: Viscous vs Insoluble Polysaccharides', 'আঁশের ধরন: সান্দ্র দ্রবণীয় বনাম অদ্রবণীয় পলিস্যাকারাইড'),
        description: l(
          'Soluble viscous fibers (beta-glucan, psyllium, pectin) form hydrating gels that delay gastric emptying and trap bile acids; insoluble fibers (cellulose, lignin) provide mechanical bulking.',
          'দ্রবণীয় সান্দ্র আঁশ (বিটা-গ্লুকান, ইসবগুল, পেকটিন) পানি শোষণ করে জেল গঠন করে পাকস্থলী খালি হওয়া বিলম্বিত করে; আর অদ্রবণীয় আঁশ মলের আয়তন বৃদ্ধি করে।'
        ),
        details: l(
          'Viscous fibers lower circulating LDL cholesterol by interfering with micellar reabsorption of bile acids in the ileum, forcing the liver to clear LDL to synthesize replacement bile.',
          'সান্দ্র আঁশ পিত্তলবণ শোষণ কমিয়ে যকৃতকে রক্ত থেকে এলডিএল কোলেস্টেরল গ্রহণ করে নতুন পিত্ত তৈরি করতে বাধ্য করে, ফলে রক্তের কোলেস্টেরল কমে।'
        ),
        sectionId: 'introduction',
        color: '#059669',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'anaerobic-fermentation-node',
        label: l('Colonic Anaerobic Microbial Fermentation Hub', 'বৃহদান্ত্রের অবাত অণুজীব গাঁজন কেন্দ্র'),
        description: l(
          'Dense commensal consortium (over 10^12 bacteria/g feces) expresses carbohydrate-active enzymes (CAZymes) that cleave beta-1,3, beta-1,4, and beta-1,6 linkages resistant to human amylases.',
          'অন্ত্রের কোটি কোটি উপকারী ব্যাকটেরিয়া বিশেষায়িত ক্যাজাইমস (CAZymes) এনজাইম তৈরি করে যা মানুষের অবাধ্য জটিল বিটা-রাসায়নিক বন্ধনগুলোকে নিপুণভাবে ভেঙে ফেলে।'
        ),
        details: l(
          'Bacteroidetes (Bacteroides, Prevotella) specialize in complex xylan and pectin deconstruction; Firmicutes (Roseburia, Faecalibacterium) are primary butyrate producers.',
          'ব্যাকটেরয়েডিস গোত্র জটিল জাইলান ও পেকটিন ভাঙায় দক্ষ; আর ফার্মিকিউটিস গোত্র হলো দেহের প্রধান বিউটাইরেট উৎপাদনকারী কারখানা।'
        ),
        sectionId: 'structure',
        color: '#10b981',
        svgCoords: { x: 25, y: 95, width: 310, height: 48 },
      },
      {
        id: 'butyrate-node',
        label: l('Butyrate (C4): Colonocyte Fuel & HDAC Inhibitor', 'বিউটাইরেট (C4): কোলন কোষের জ্বালানি ও HDAC দমনকারী'),
        description: l(
          'Supplies 70% of energy to mature colonic epithelial cells via mitochondrial beta-oxidation; acts as a potent endogenous histone deacetylase inhibitor, repressing mucosal inflammation.',
          'মাইটোকন্ড্রিয়াল বিটা-জারণের মাধ্যমে কোলনের আবরণী কোষের ৭০% শক্তির জোগান দেয়; একই সাথে শক্তিশালী এইচডিএসি দমনকারী হিসেবে অন্ত্রের প্রদাহ রোধ করে।'
        ),
        details: l(
          'Deficient butyrate oxidation causes colonocyte energetic starvation, tight junction disassembly, and mucosal ulceration characteristic of active ulcerative colitis.',
          'বিউটাইরেট জারণে ব্যর্থতা দেখা দিলে কোলন কোষের অনাহার, টাইট-জাংশন আলগা হয়ে যাওয়া এবং আলসারেটিভ কোলাইটিসের মতো ক্ষত তৈরি হয়।'
        ),
        sectionId: 'mechanism',
        color: '#34d399',
        svgCoords: { x: 25, y: 155, width: 310, height: 48 },
      },
      {
        id: 'propionate-node',
        label: l('Propionate (C3): Hepatic Gluconeogenesis Regulator', 'প্রোপিওনেট (C3): যকৃতের গ্লুকোজ ও চর্বি নিয়ন্ত্রক'),
        description: l(
          'Cleared by the liver via portal blood; enters the citric acid cycle at succinyl-CoA; inhibits fatty acid synthase and downregulates hepatic gluconeogenesis.',
          'পোর্টাল রক্ত দিয়ে যকৃতে শোষিত হয়; সাকসিনাইল-কোএ হিসেবে ক্রেবস চক্রে প্রবেশ করে ফ্যাটি অ্যাসিড সিন্থেজ এনজাইম বন্ধ করে চর্বি জমা প্রতিরোধ করে।'
        ),
        details: l(
          'Also stimulates enteroendocrine L-cell FFAR3 receptors to trigger intestinal gluconeogenesis, which sends vagal portal signals to the brain that promote systemic satiety.',
          'অন্ত্রের রিসেপ্টর সক্রিয় করে মস্তিষ্কে সংকেত পাঠায় যা দীর্ঘ সময় ধরে ক্ষুধা দমন ও তৃপ্তি বজায় রাখতে সাহায্য করে।'
        ),
        sectionId: 'mechanism',
        color: '#6ee7b7',
        svgCoords: { x: 25, y: 215, width: 310, height: 48 },
      },
      {
        id: 'acetate-barrier-node',
        label: l('Acetate (C2) & Tight Junction Barrier Integrity', 'অ্যাসিটেট (C2) ও প্রাচীর অখণ্ডতার টাইট-জাংশন'),
        description: l(
          'Most abundant SCFA (60%); fuels peripheral tissues; stimulates claudin-1, occludin, and ZO-1 expression, preventing endotoxemic leakage of bacterial lipopolysaccharides.',
          'সর্বাধিক উৎপাদিত এসসিএফএ (৬০%); দূরবর্তী অঙ্গের জ্বালানি যোগায় এবং টাইট-জাংশন প্রোটিনগুলোকে শক্ত করে ব্যাকটেরিয়ার বিষ রক্তে ঢোকা ঠেকায়।'
        ),
        details: l(
          'Circulating acetate crosses the blood-brain barrier to bind hypothalamic receptors and promote central anorexigenic signaling, directly lowering appetite.',
          'অ্যাসিটেট রক্তের মাধ্যমে মস্তিষ্কে পৌঁছে হাইপোথ্যালামাসের নিউরনে যুক্ত হয়ে সরাসরি অতিরিক্ত খাওয়ার প্রবণতা কমায়।'
        ),
        sectionId: 'integration',
        color: '#047857',
        svgCoords: { x: 25, y: 275, width: 310, height: 48 },
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'A pathway tracing dietary fiber through the gastrointestinal tract, from mouth transit to colonic fermentation, colonocyte butyrate consumption, and systemic SCFA distribution.',
      'পরিপাকনালির মধ্য দিয়ে খাদ্য আঁশের যাত্রা, কোলনে ব্যাকটেরিয়া দ্বারা গাঁজন, কোলন কোষে বিউটাইরেট ব্যবহার এবং রক্তে এসসিএফএ সঞ্চালনের মানচিত্র।'
    ),
    steps: [
      l(
        'Step 1: Soluble and insoluble fibers transit the upper digestive tract completely undigested by human enzymes.',
        'ধাপ ১: দ্রবণীয় ও অদ্রবণীয় আঁশ মানুষের পাচক রসে একেবারেই না ভেঙে পাকস্থলী ও ক্ষুদ্রান্ত্র পেরিয়ে যায়।'
      ),
      l(
        'Step 2: Commensal anaerobes in the caecum and colon ferment fiber into acetate, propionate, and butyrate.',
        'ধাপ ২: সিকাম ও কোলনের অবাত ব্যাকটেরিয়া আঁশকে গাঁজন করে অ্যাসিটেট, প্রোপিওনেট ও বিউটাইরেটে রূপান্তর করে।'
      ),
      l(
        'Step 3: Colonocytes consume butyrate via beta-oxidation, maintaining mucosal ATP and cellular hypoxia.',
        'ধাপ ৩: কোলনের কোষগুলো বিউটাইরেট পুড়িয়ে প্রচুর এটিপি তৈরি করে এবং অন্ত্রের স্বাভাবিক অক্সিজেনহীন পরিবেশ রক্ষা করে।'
      ),
      l(
        'Step 4: Propionate and acetate enter the portal and systemic blood, regulating liver metabolism and suppressing central appetite.',
        'ধাপ ৪: প্রোপিওনেট ও অ্যাসিটেট রক্তে ছড়িয়ে যকৃতের বিপাক নিয়ন্ত্রণ করে এবং মস্তিষ্কে ক্ষুধার অনুভূতি কমায়।'
      ),
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('What is Dietary Fiber and Why Does It Matter?', 'খাদ্য আঁশ কী এবং কেন এটি দেহের জন্য এত জরুরি?'),
          paragraphs: [
            l(
              'Dietary fiber is the part of plant foods that your stomach and small intestine cannot digest. While proteins, fats, and starches are broken down and absorbed into the bloodstream early in the digestive tract, fiber travels all the way to the large intestine virtually intact.',
              'খাদ্য আঁশ বা ফাইবার হলো উদ্ভিজ্জ খাবারের সেই অংশ যা পাকস্থলী ও ক্ষুদ্রান্ত্র হজম করতে পারে না। প্রোটিন, চর্বি ও সাধারণ শ্বেতসার পরিপাকনালির শুরুতেই ভেঙে রক্তে শোষিত হলেও আঁশ প্রায় অক্ষত অবস্থায় সোজা বৃহদান্ত্রে পৌঁছে যায়।',
            ),
            l(
              'Even though humans lack the enzymes to digest fiber, it is essential for human health. Fiber is generally divided into two main categories: soluble fiber, which dissolves in water to form a soothing gel, and insoluble fiber, which acts like a broom to sweep waste through the bowels.',
              'যদিও মানুষের নিজস্ব কোনো এনজাইম নেই ফাইবার ভাঙার জন্য, তবুও সুস্বাস্থ্যের জন্য এটি অপরিহার্য। খাদ্য আঁশকে সাধারণত দুটি প্রধান ভাগে ভাগ করা হয়: দ্রবণীয় আঁশ, যা পানিতে গলে মসৃণ জেল তৈরি করে, এবং অদ্রবণীয় আঁশ, যা ঝাঁটার মতো অন্ত্রের বর্জ্য পরিষ্কার করতে সাহায্য করে।',
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Two Main Types of Fiber', 'আঁশের দুটি প্রধান শ্রেণি'),
          paragraphs: [
            l(
              'Soluble fibers, found in oats, beans, barley, apples, and psyllium husk, swell up in liquid and slow down the rate at which food leaves the stomach. This gel traps cholesterol and sugars, preventing rapid sugar spikes after eating and helping lower blood cholesterol levels.',
              'দ্রবণীয় আঁশ—যা ওটস, ডাল, বার্লি, আপেল এবং ইসবগুলের ভুষিতে প্রচুর থাকে—তরল শোষণ করে ফুলে ওঠে এবং খাবার পাকস্থলী থেকে বের হওয়ার গতি ধীর করে। এই জেল কোলেস্টেরল ও অতিরিক্ত চিনি আটকে রেখে রক্তে এদের দ্রুত প্রবেশ ঠেকায়।',
            ),
            l(
              'Insoluble fibers, found in wheat bran, whole grain cereals, nuts, seeds, and vegetable stalks, do not dissolve in water. Instead, they absorb fluid to add soft bulk to stool, stimulating intestinal muscles to contract and preventing constipation.',
              'অদ্রবণীয় আঁশ—যা গমের ভুসি, লাল চাল, বাদাম ও শাকসবজির খোসায় থাকে—পানিতে গলে না। বরং এরা স্পঞ্জের মতো পানি ধরে রেখে মলের আয়তন বাড়ায় এবং অন্ত্রের পেশিকে সচল রেখে কোষ্ঠকাঠিন্য দূর করে।',
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('How Gut Bacteria Turn Fiber into Fuel', 'অন্ত্রের ব্যাকটেরিয়া কীভাবে আঁশকে শক্তিতে রূপান্তর করে'),
          paragraphs: [
            l(
              'When soluble fiber reaches the large intestine, trillions of beneficial microbes go to work fermenting it. This microbial fermentation produces three special small fats called short-chain fatty acids (SCFAs): acetate, propionate, and butyrate.',
              'দ্রবণীয় আঁশ যখন বৃহদান্ত্রে পৌঁছায়, তখন অন্ত্রের কোটি কোটি উপকারী ব্যাকটেরিয়া এটিকে গাঁজন করে। এই গাঁজন প্রক্রিয়ায় তিনটি বিশেষ ক্ষুদ্র চর্বি তৈরি হয় যাদের শর্ট-চেইন ফ্যাটি অ্যাসিড (SCFA) বলা হয়: অ্যাসিটেট, প্রোপিওনেট এবং বিউটাইরেট।',
            ),
            l(
              'These short-chain fatty acids are not waste products; they are powerful healing molecules. Butyrate feeds the cells lining your colon, propionate travels to the liver to help regulate blood sugar and cholesterol, and acetate travels through the bloodstream to support energy throughout the body.',
              'এই শর্ট-চেইন ফ্যাটি অ্যাসিডগুলো কোনো বর্জ্য নয়; এরা হলো অত্যন্ত উপকারী জৈব অণু। বিউটাইরেট কোলন কোষের প্রধান খাদ্য হিসেবে শক্তি যোগায়, প্রোপিওনেট যকৃতে গিয়ে চিনি ও চর্বি নিয়ন্ত্রণ করে এবং অ্যাসিটেট রক্তে ছড়িয়ে সারা শরীরে শক্তি সরবরাহ করে।',
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Protecting the Gut Barrier', 'অন্ত্রের প্রতিরক্ষামূলক প্রাচীর সুরক্ষা'),
          paragraphs: [
            l(
              'The lining of your large intestine is only a single layer of cells thick, separating your internal bloodstream from trillions of bacteria and waste materials. Butyrate strengthens the microscopic glue (tight junctions) between these cells, preventing harmful bacterial toxins from leaking into your blood.',
              'বৃহদান্ত্রের অভ্যন্তরীণ দেয়াল মাত্র একটিমাত্র কোষের পাতলা স্তরে গঠিত, যা রক্তপ্রবাহকে ক্ষতিকর জীবাণু ও বর্জ্য থেকে আলাদা রাখে। বিউটাইরেট এই কোষগুলোর মধ্যকার সংযোগকে (টাইট-জাংশন) এত মজবুত করে যাতে কোনো ব্যাকটেরিয়ার বিষ রক্তে চুইয়ে ঢুকতে না পারে।',
            ),
            l(
              'When people eat a diet very low in fiber, the friendly bacteria starve. In desperation, some bacteria begin eating away the protective mucus layer lining the gut, making the intestinal wall fragile and prone to inflammation.',
              'যখন মানুষ আঁশহীন খাবার খায়, তখন উপকারী ব্যাকটেরিয়া অনাহারে থাকে। খাদ্যের অভাবে কিছু ব্যাকটেরিয়া তখন অন্ত্রের নিজস্ব সুরক্ষাকারী মিউকাস স্তর খেতে শুরু করে, ফলে অন্ত্রের দেয়াল দুর্বল হয়ে প্রদাহ ও বিভিন্ন রোগের সৃষ্টি হয়।',
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Everyday Fiber Recommendations', 'দৈনন্দিন খাদ্যতালিকায় আঁশ যুক্ত করার উপায়'),
          paragraphs: [
            l(
              'Most adults should aim for 25 to 35 grams of fiber per day by eating a colorful variety of whole plant foods: vegetables, fruits with skins, legumes, nuts, seeds, and intact whole grains. Drinking plenty of water is essential when increasing fiber to allow the fibers to properly swell and function.',
              'অধিকাংশ প্রাপ্তবয়স্ক ব্যক্তির প্রতিদিন ২৫ থেকে ৩৫ গ্রাম ফাইবার খাওয়া উচিত রঙিন শাকসবজি, খোসাসহ ফল, ডাল, বাদাম ও লাল চালের মাধ্যমে। ফাইবার বাড়ানোর সময় প্রচুর পানি পান করা আবশ্যক যাতে আঁশগুলো সহজে ফুলে উঠে স্বাভাবিক কাজ করতে পারে।',
            ),
          ],
          bullets: [
            l('Eat whole fruits rather than drinking filtered juices.', 'ছেঁকে নেওয়া ফলের রসের বদলে খোসাসহ গোটা ফল খান।'),
            l('Include a serving of beans, lentils, or chickpeas daily.', 'প্রতিদিন অন্তত এক বেলা ডাল, ছোলা বা শিমের বিচি খান।'),
            l('Increase fiber gradually over several weeks to avoid gas.', 'হঠাৎ অতিরিক্ত আঁশ না খেয়ে ধীরে ধীরে কয়েক সপ্তাহ ধরে ফাইবার বাড়ান।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Educational Summary', 'মূল শিক্ষা ও শিক্ষামূলক সারাংশ'),
          paragraphs: [
            l(
              'Dietary fiber provides structure to plant foods and acts as the essential fuel for your gut microbiome. Microbial fermentation produces short-chain fatty acids that nourish colon cells, fortify the gut barrier, and send healthy metabolic signals throughout the body.',
              'খাদ্য আঁশ কেবল হজম পরিষ্কারের মাধ্যম নয়, এটি আপনার অন্ত্রের মাইক্রোবায়োমের প্রধান পুষ্টি। ব্যাকটেরিয়ার গাঁজনে উৎপন্ন শর্ট-চেইন ফ্যাটি অ্যাসিড কোলন কোষকে জীবিত রাখে, অন্ত্রের প্রাচীর সুরক্ষিত করে এবং সারা শরীরে সুস্থতার সংকেত পাঠায়।',
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
          heading: l('Physicochemical Architecture of Dietary Fiber', 'খাদ্য আঁশের ভৌত-রাসায়নিক গঠন ও শ্রেণিবিভাগ'),
          paragraphs: [
            l(
              'Dietary fiber encompasses plant polysaccharides and lignin that resist chemical cleavage by endogenous human digestive enzymes in the small intestine [1, 3]. Chemically, fibers consist of non-starch polysaccharides featuring beta-1,4-glucosidic bonds (cellulose), beta-1,3 and beta-1,4 mixed linkages (cereal beta-glucans), polygalacturonic acids (pectins), beta-fructofuranosyl chains (inulin), and complex non-carbohydrate phenylpropane polymers (lignin) [1, 3].',
              'খাদ্য আঁশ হলো উদ্ভিজ্জ পলিস্যাকারাইড ও লিগনিনের এমন একটি সমষ্টি যা মানুষের ক্ষুদ্রান্ত্রের এনজাইমে ভাঙা সম্ভব নয় [1, 3]। রাসায়নিকভাবে এদের মধ্যে রয়েছে বিটা-১,৪ বন্ধনযুক্ত সেলুলোজ, বিটা-১,৩ ও ১,৪ মিশ্র বন্ধনের বিটা-গ্লুকান, পলিগ্যালাক্টুরোনিক অ্যাসিডযুক্ত পেকটিন, ফ্রুক্টোজ শিকলের ইনুলিন এবং ফেনাইলপ্রোপেন পলিমার লিগনিন [1, 3]।'
            ),
            l(
              'Fibers are categorized along three physiological axes: solubility in water, viscosity in aqueous solution, and colonic microbial fermentability [1, 2]. Soluble viscous fibers (pectins, beta-glucans, psyllium) form high-molecular-weight hydrating pseudoplastic gels that increase intestinal unstirred water layer thickness, delay gastric emptying, and sequester bile acid micelles in the ileum [1, 3]. Insoluble non-viscous fibers (cellulose, lignin, wheat bran) resist hydration and act as physical bulking agents that stimulate mechanoreceptors to promote colonic peristalsis [1, 3].',
              'ফাইবারকে তিনটি শারীরবৃত্তীয় বৈশিষ্ট্যের ভিত্তিতে ভাগ করা হয়: পানিতে দ্রবণীয়তা, দ্রবণে সান্দ্রতা এবং অণুজীবের গাঁজনযোগ্যতা [1, 2]। দ্রবণীয় সান্দ্র আঁশ (পেকটিন, বিটা-গ্লুকান) ঘন হাইড্রেটেড জেল তৈরি করে পাকস্থলী খালি হওয়া বিলম্বিত করে এবং ইলিয়ামে পিত্তলবণের পুনঃশোষণ কমিয়ে দেয় [1, 3]। অদ্রবণীয় আঁশ (সেলুলোজ, লিগনিন) পানি ধরে রেখে মলের আয়তন বাড়ায় এবং অন্ত্রের স্নায়ুকে উদ্দীপিত করে দ্রুত বর্জ্য নিষ্কাশনে সাহায্য করে [1, 3]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Anaerobic Microbial Fermentation in the Caecum and Colon', 'সিকাম ও কোলনে অবাত অণুজীবীয় গাঁজন প্রক্রিয়া'),
          paragraphs: [
            l(
              'When non-digestible carbohydrates reach the caecum, they enter a dense anaerobic ecosystem harboring over 10^12 microorganisms per gram of luminal content [2, 4]. The human genome encodes fewer than twenty carbohydrate-active enzymes capable of hydrolyzing dietary starches and disaccharides, whereas the gut microbiome expresses thousands of complementary CAZymes (glycoside hydrolases and polysaccharide lyases) capable of deconstructing complex beta-glycosidic architectures [2, 4].',
              'অপাচ্য শর্করা যখন সিকামে পৌঁছায়, তখন তা প্রতি গ্রাম বর্জ্যে ১০^১২ সংখ্যক ঘন অবাত অণুজীবের সংস্পর্শে আসে [2, 4]। মানুষের জিনোম কেবল কয়েকটি এনজাইম তৈরি করতে পারে যা সাধারণ শ্বেতসার ভাঙে, কিন্তু অন্ত্রের মাইক্রোবায়োম হাজার হাজার বিশেষায়িত ক্যাজাইমস (CAZymes) প্রকাশ করে যা জটিল উদ্ভিজ্জ বিটা-বন্ধনগুলোকে ভেঙে মুক্ত মনোস্যাকারাইড বের করে আনে [2, 4]।'
            ),
            l(
              'Anaerobic bacterial glycolysis degrades released pentoses and hexoses into pyruvate, which is sequentially transformed via branching metabolic pathways: the Wood-Ljungdahl and acetyl-CoA pathways yield acetate, the succinate and acrylate pathways generate propionate, and the condensation of two acetyl-CoA molecules via butyryl-CoA:acetate CoA-transferase produces butyrate [2, 4]. Under steady-state conditions, luminal SCFA concentrations in the human proximal colon range from 70 to 140 mmol/L [2, 3].',
              'অবাত ব্যাকটেরিয়া গ্লাইকোলাইসিসের মাধ্যমে মুক্ত শর্করাকে পাইরুভেটে রূপান্তর করে, যা পরবর্তীকালে বিভিন্ন উপায়ে জারিত হয়: উড-লুংডাল পথে অ্যাসিটেট তৈরি হয়, সাকসিনেট পথে প্রোপিওনেট উৎপন্ন হয় এবং দুটি অ্যাসিটাইল-কোএ অণু জোড়া লেগে বিউটাইরেট তৈরি হয় [2, 4]। স্বাভাবিক অবস্থায় মানুষের প্রক্সিমাল কোলনে লুমেনের মোট এসসিএফএ ঘনত্ব ৭০ থেকে ১৪০ মিলিমোল/লিটার পর্যন্ত পৌঁছায় [2, 3]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The SCFA Triad: Absorption Kinetics and Organ Handling', 'এসসিএফএ ত্রয়ী: শোষণ গতিবিদ্যা ও অঙ্গভিত্তিক বিপাক'),
          paragraphs: [
            l(
              'Luminal SCFAs exist in equilibrium between ionized carboxylate anions (R-COO-) and un-ionized lipid-permeable protonated acids (R-COOH) governed by colonic luminal pH (5.5–6.5) [2, 3]. Approximately 95% of generated SCFAs are rapidly absorbed across the apical colonocyte membrane via non-ionic passive diffusion and carrier-mediated transport: monocarboxylate transporter 1 (MCT1 / SLC16A1) performs H+-coupled electroneutral symport, while sodium-coupled monocarboxylate transporter 1 (SMCT1 / SLC5A8) executes electrogenic Na+-dependent uptake [2, 4].',
              'লুমেনের এসসিএফএ-সমূহ আয়নিত অ্যানায়ন এবং ঝিল্লি-ভেদ্য প্রোটোনেটেড অ্যাসিডের ভারসাম্য অবস্থায় অবস্থান করে যা অন্ত্রের পিএইচ (৫.৫–৬.৫) দ্বারা নির্ধারিত হয় [2, 3]। উৎপন্ন এসসিএফএ-র প্রায় ৯৫% এন্টারোসাইট দ্বারা দ্রুত শোষিত হয়: MCT1 প্রোটনের সাথে এবং SMCT1 সোডিয়ামের সাথে সক্রিয়ভাবে এদের কোষে প্রবেশ করায় [2, 4]।'
            ),
            l(
              'The three principal SCFAs follow divergent metabolic trajectories [2, 4]. Butyrate (C4) serves as the primary energetic substrate for colonocytes; over 70% to 90% is converted into butyryl-CoA and oxidized to acetoacetate and acetyl-CoA directly within colonic mitochondria [2]. Propionate (C3) enters portal blood, where the liver extracts over 90% for incorporation into gluconeogenesis via succinyl-CoA and allosteric inhibition of fatty acid synthesis [2, 4]. Acetate (C2) escapes hepatic clearance, circulating in systemic blood (50–100 micromol/L) to serve as oxidative fuel for myocardium and skeletal muscle, and signaling to adipose tissue via FFAR2 [2, 4].',
              'তিনটি প্রধান এসসিএফএ পৃথক বিপাকীয় পথ অনুসরণ করে [2, 4]। বিউটাইরেট (C4) কোলন কোষের প্রধান শক্তি হিসেবে কাজ করে; এর ৭০-৯০% সরাসরি কোলনের মাইটোকন্ড্রিয়াতেই বিটা-জারণের মাধ্যমে শক্তি জোগায় [2]। প্রোপিওনেট (C3) পোর্টাল রক্ত দিয়ে যকৃতে গিয়ে ৯০% অপসারিত হয় এবং গ্লুকোজ ও চর্বির সংশ্লেষ নিয়ন্ত্রণ করে [2, 4]। অ্যাসিটেট (C2) যকৃত পেরিয়ে সিস্টেমিক রক্তে ছড়িয়ে পড়ে হৃদপেশি ও কঙ্কালপেশির জ্বালানি হিসেবে ব্যবহৃত হয় এবং চর্বি কোষে সংকেত পাঠায় [2, 4]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Colonocyte Energetics, Epithelial Hypoxia & Barrier Integrity', 'কোলনোসাইটের শক্তি ব্যবস্থা, কোষীয় হাইপোক্সিয়া ও প্রাচীর সুরক্ষা'),
          paragraphs: [
            l(
              'Differentiated colonocytes exhibit unique bioenergetic specialization: unlike most somatic cells that burn glucose, mature colonic epithelial cells derive over 70% of their baseline ATP from mitochondrial beta-oxidation of luminal butyrate [2, 4]. This intense beta-oxidation consumes substantial molecular oxygen, driving mucosal tissue oxygen tension down to physiological hypoxia (<1% O2 or <10 mmHg) [4]. Mucosal hypoxia stabilizes the transcription factor Hypoxia-Inducible Factor 1-alpha (HIF-1alpha), which transcriptionally upregulates claudin-1, occludin, and zonula occludens-1 (ZO-1) to seal tight junctions against bacterial translocation [2, 4].',
              'পরিপক্ক কোলন কোষগুলো এক অনন্য জৈবশক্তিবিজ্ঞান প্রদর্শন করে: সাধারণ কোষ যেখানে গ্লুকোজ ব্যবহার করে, কোলনোসাইট সেখানে তাদের মোট এটিপির ৭০% এর বেশি পায় লুমেনের বিউটাইরেটের বিটা-জারণ থেকে [2, 4]। এই বিপুল অক্সিজেন খরচের কারণে অন্ত্রের প্রাচীরে একটি সুস্থ ফিজিওলজিক্যাল হাইপোক্সিয়া (<১% O2) বজায় থাকে যা HIF-1alpha প্রোটিনকে সক্রিয় রাখে; এই প্রোটিন ক্লডিন-১, অক্লুডিন ও ZO-1 জিন চালু করে কোষের টাইট-জাংশনকে নিশ্ছিদ্র রাখে [2, 4]।'
            ),
            l(
              'Butyrate also acts as an endogenous epigenetic regulator by functioning as a competitive inhibitor of Class I and Class II zinc-dependent Histone Deacetylases (HDACs) [2, 4]. In immune cells within the lamina propria, HDAC inhibition prevents the removal of acetyl groups from histone tails surrounding the Foxp3 promoter, inducing the differentiation of naive CD4+ T cells into immunosuppressive regulatory T cells (Tregs) that release interleukin-10 (IL-10) to suppress intestinal inflammation [2, 4].',
              'বিউটাইরেট একটি শক্তিশালী এপিজেনেটিক নিয়ন্ত্রক যা জিংক-নির্ভর হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) এনজাইমকে অবদমিত করে [2, 4]। অন্ত্রের রোগপ্রতিরোধ কোষে HDAC বন্ধ থাকার ফলে Foxp3 জিন সক্রিয় হয়, যা সাধারণ টি-কোষকে রূপান্তর করে প্রদাহরোধী রেগুলেটরি টি-কোষে (Tregs) পরিণত করে; এরা ইন্টারলিউকিন-১০ ক্ষরণ করে অন্ত্রের অপ্রয়োজনীয় প্রদাহ সম্পূর্ণ প্রতিরোধ করে [2, 4]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Applications: Dietary Fiber in Inflammatory Bowel Disease and Dyslipidemia', 'ক্লিনিক্যাল প্রয়োগ: প্রদাহজনিত অন্ত্রের রোগ ও ডিসলিপিডেমিয়ায় ফাইবার'),
          paragraphs: [
            l(
              'Clinical guidelines from the European Society for Clinical Nutrition and Metabolism (ESPEN) emphasize adequate soluble fiber intake for cardiovascular and metabolic risk reduction [1, 3]. In patients with mild-to-moderate ulcerative colitis in remission, dietary supplementation with fermentable fibers (such as psyllium or germinated barley foodstuff) elevates fecal butyrate concentrations and significantly reduces relapse rates [1, 2].',
              'ইউরোপীয় ক্লিনিক্যাল পুষ্টি সোসাইটি (ESPEN) হৃদরোগ ও মেটাবলিক ঝুঁকি কমাতে উচ্চমাত্রায় দ্রবণীয় ফাইবার গ্রহণের ওপর জোর দেয় [1, 3]। শান্ত অবস্থায় থাকা আলসারেটিভ কোলাইটিসের রোগীদের ক্ষেত্রে গাঁজনযোগ্য ফাইবার (যেমন ইসবগুল) প্রদান করলে মলে বিউটাইরেটের মাত্রা বৃদ্ধি পায় এবং রোগের পুনরাবৃত্তি নাটকীয়ভাবে কমে আসে [1, 2]।'
            ),
          ],
          bullets: [
            l('Molar ratio of colonic SCFAs: ~60% acetate, ~20% propionate, ~20% butyrate.', 'কোলন এসসিএফএ স্বাভাবিক অনুপাত: ~৬০% অ্যাসিটেট, ~২০% প্রোপিওনেট, ~২০% বিউটাইরেট।'),
            l('Butyrate supplies ~70% of baseline ATP for mature colonocytes.', 'বিউটাইরেট কোলন কোষের প্রায় ৭০% স্বাভাবিক শক্তি সরবরাহ করে।'),
            l('Butyrate-mediated HDAC inhibition promotes Foxp3+ Treg induction and gut tolerance.', 'বিউটাইরেট দ্বারা HDAC দমন রেগুলেটরি টি-কোষের বিকাশ ও অন্ত্রীয় সহনশীলতা বাড়ায়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Academic Review', 'মূল শিক্ষা ও একাডেমিক সারাংশ'),
          paragraphs: [
            l(
              'Dietary fibers are non-digestible plant polysaccharides whose physiological effects depend on solubility, viscosity, and microbial fermentability. Colonic anaerobic fermentation produces acetate, propionate, and butyrate, which fuel colonocytes, maintain epithelial barrier tight junctions, and govern whole-body metabolic and immune homeostasis.',
              'খাদ্য আঁশ হলো অপাচ্য উদ্ভিজ্জ পলিস্যাকারাইড যার কার্যকারিতা দ্রবণীয়তা, সান্দ্রতা ও গাঁজনযোগ্যতার ওপর নির্ভরশীল। বৃহদান্ত্রে এদের গাঁজনে উৎপন্ন অ্যাসিটেট, প্রোপিওনেট ও বিউটাইরেট কোলন কোষকে পুষ্ট করে, অন্ত্রের প্রাচীর সুরক্ষিত রাখে এবং সামগ্রিক বিপাকীয় ও রোগপ্রতিরোধ ভারসাম্য নিশ্চিত করে।',
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'integration',
          heading: l('Advanced Molecular G-Protein Signaling: FFAR2, FFAR3 & Metabolic Crosstalk', 'উচ্চতর আণবিক জি-প্রোটিন সংকেত: FFAR2, FFAR3 ও বিপাকীয় অক্ষ'),
          paragraphs: [
            l(
              'Short-chain fatty acids exert receptor-mediated signaling through Free Fatty Acid Receptors 2 and 3 [2, 4]. FFAR2 (GPR43) couples dualistically to Gi/o and Gq/11 pathways: in enteroendocrine L-cells, Gq-coupled intracellular calcium mobilization triggers exocytosis of GLP-1 and PYY, enhancing insulin secretion and promoting central satiety [2, 4]. In white adipocytes, Gi-coupled FFAR2 activation inhibits hormone-sensitive lipase (HSL) via intracellular cyclic AMP suppression, attenuating systemic free fatty acid flux and preventing lipotoxicity [2, 4].',
              'শর্ট-চেইন ফ্যাটি অ্যাসিডসমূহ ফ্রি ফ্যাটি অ্যাসিড রিসেপ্টর ২ ও ৩ এর মাধ্যমে সংকেত আদান-প্রদান করে [2, 4]। FFAR2 (GPR43) দুটি ভিন্ন জি-প্রোটিন পথের সাথে যুক্ত: অন্ত্রের এল-কোষে ক্যালসিয়াম বৃদ্ধি করে GLP-1 ও PYY নিঃসরণ ঘটায়, যা ইনসুলিন ও ক্ষুধা নিয়ন্ত্রণ করে [2, 4]। অন্যদিকে সাদা চর্বি কোষে FFAR2 সক্রিয় হলে হরমোন-সংবেদনশীল লাইপেজ বন্ধ হয়ে যায়, ফলে রক্তে অতিরিক্ত ক্ষতিকর মুক্ত চর্বি নির্গত হতে পারে না [2, 4]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Frontier Research: The Butyrate Paradox & Colonic Mucosal Warburg Reversal', 'অত্যাধুনিক গবেষণা: বিউটাইরেট প্যারাডক্স ও ওয়ারবার্গ ইফেক্টের রূপান্তর'),
          paragraphs: [
            l(
              'The "butyrate paradox" refers to the observation that butyrate promotes cellular proliferation and survival in healthy differentiated non-cancerous colonocytes, yet potently induces growth arrest, apoptosis, and differentiation in colorectal adenocarcinoma cells [2, 4]. In healthy colonocytes, efficient mitochondrial beta-oxidation rapidly catabolizes butyrate to acetyl-CoA, preventing nuclear accumulation. In neoplastic colonocytes that exhibit the Warburg effect (relying predominantly on aerobic glycolysis), butyrate is excluded from mitochondrial oxidation and accumulates in the nucleus, where it functions as an uninhibited HDAC inhibitor to upregulate pro-apoptotic Fas, Bax, and p21waf1 [2, 4].',
              '"বিউটাইরেট প্যারাডক্স" পুষ্টিবিজ্ঞানের একটি গভীর বিস্ময়: বিউটাইরেট সুস্থ কোলন কোষে বৃদ্ধি ও বেঁচে থাকাকে উৎসাহিত করে, কিন্তু কোলন ক্যান্সারের কোষে প্রবেশ করা মাত্রই বৃদ্ধি বন্ধ করে অ্যাপোপটোসিস বা পরিকল্পিত কোষমৃত্যু ঘটায় [2, 4]। সুস্থ কোষে বিউটাইরেট সাথে সাথে মাইটোকন্ড্রিয়ায় পুড়ে শক্তি তৈরি করে, ফলে নিউক্লিয়াসে জমতে পারে না। কিন্তু ক্যান্সার কোষে ওয়ারবার্গ ইফেক্টের কারণে এটি মাইটোকন্ড্রিয়ায় না গিয়ে নিউক্লিয়াসে জমা হয় এবং সেখানে সরাসরি HDAC বন্ধ করে ক্যান্সার কোষের মৃত্যু সংকেত (Fas, Bax, p21) সক্রিয় করে [2, 4]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'Which short-chain fatty acid serves as the primary energetic substrate for mature human colonic epithelial cells (colonocytes)?',
      'কোন শর্ট-চেইন ফ্যাটি অ্যাসিডটি প্রাপ্তবয়স্ক মানুষের কোলন আবরণী কোষের (কোলনোসাইট) প্রধান শক্তির উৎস হিসেবে কাজ করে?'
    ),
    options: [
      l('Butyrate (C4)', 'বিউটাইরেট (C4)'),
      l('Acetate (C2)', 'অ্যাসিটেট (C2)'),
      l('Propionate (C3)', 'প্রোপিওনেট (C3)'),
      l('Valerate (C5)', 'ভ্যালেরেট (C5)'),
    ],
    correctIndex: 0,
    explanation: l(
      'Over 70% to 90% of absorbed butyrate is oxidized via mitochondrial beta-oxidation directly within colonocytes, supplying approximately 70% of baseline epithelial ATP requirements.',
      'শোষিত বিউটাইরেটের ৭০% থেকে ৯০% সরাসরি কোলনোসাইটের মাইটোকন্ড্রিয়ায় বিটা-জারণের মাধ্যমে শক্তি জোগায়, যা আবরণী কোষের মোট প্রয়োজনীয় এটিপির প্রায় ৭০ শতাংশ।'
    ),
  },
}
