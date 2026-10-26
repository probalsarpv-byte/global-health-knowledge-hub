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
  {
    id: 'cummings-scfa-distribution',
    authors: 'John H. Cummings, E. W. Pomare, W. J. Branch, C. P. Naylor, George T. Macfarlane',
    title: 'Short chain fatty acids in human large intestine, portal, hepatic and venous blood',
    organization: 'Gut',
    year: 1987,
    url: 'https://doi.org/10.1136/gut.28.10.1221',
  },
  {
    id: 'hamer-butyrate-colonic-function',
    authors: 'Henrike M. Hamer, Daisy Jonkers, Koen Venema, Serge Vanhoutvin, Freddy J. Troost, Robert-Jan Brummer',
    title: 'Review article: the role of butyrate on colonic function',
    organization: 'Alimentary Pharmacology & Therapeutics',
    year: 2008,
    url: 'https://doi.org/10.1111/j.1365-2036.2007.03562.x',
  },
]

export const nutrition04DietaryFiberScfaLesson: LessonTopic = {
  id: 'topic.nutrition.dietary-fiber-scfa',
  slug: 'dietary-fiber-scfa',
  version: 2,
  updatedAt: '2026-10-14',
  title: l(
    '04 · Dietary Fiber, Short-Chain Fatty Acids & Colonic Epithelial Integrity',
    '০৪ · খাদ্য আঁশ, শর্ট-চেইন ফ্যাটি অ্যাসিড ও কোলন আবরণীর অখণ্ডতা'
  ),
  summary: l(
    'Comprehensive university textbook analysis of dietary fiber physics, anaerobic microbial fermentation kinetics, short-chain fatty acid (acetate, propionate, butyrate) cellular transport, colonocyte mitochondrial bioenergetics, epigenetic HDAC inhibition, and systemic metabolic signaling.',
    'খাদ্য আঁশের ভৌত-রাসায়নিক বৈশিষ্ট্য, বৃহদান্ত্রে অবাত অণুজীব গাঁজন গতিবিদ্যা, শর্ট-চেইন ফ্যাটি অ্যাসিডের (অ্যাসিটেট, প্রোপিওনেট, বিউটাইরেট) কোষীয় পরিবহন, কোলন কোষের মাইটোকন্ড্রিয়াল শক্তি উৎপাদন, এপিজেনেটিক HDAC দমন এবং সার্বিক বিপাকীয় সংকেত ব্যবস্থার পূর্ণাঙ্গ পাঠ্যপুস্তক বিশ্লেষণ।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-14',
  objectives: [
    l(
      'Classify dietary fiber polymers by solubility, viscosity, and microbial fermentability, correlating chemical structure with intestinal physiology [1, 3].',
      'দ্রবণীয়তা, সান্দ্রতা এবং মাইক্রোবায়াল গাঁজনযোগ্যতার ভিত্তিতে খাদ্য আঁশের পলিমারসমূহ শ্রেণিবদ্ধ করা এবং অন্ত্রের শারীরবৃত্তীয় কাজের সম্পর্ক নির্ণয় করা [1, 3]।'
    ),
    l(
      'Trace the anaerobic microbial pathways converting complex polysaccharides into acetate, propionate, and butyrate within the caecum and proximal colon [2, 4].',
      'সিকাম ও প্রক্সিমাল কোলনে জটিল পলিস্যাকারাইডগুলো কীভাবে অবাত অণুজীব গাঁজনের মাধ্যমে অ্যাসিটেট, প্রোপিওনেট ও বিউটাইরেটে রূপান্তরিত হয় তা বিশ্লেষণ করা [2, 4]।'
    ),
    l(
      'Detail the apical transport (MCT1, SMCT1) and mitochondrial beta-oxidation of butyrate fueling mucosal ATP generation and driving physiologic epithelial hypoxia [4, 6].',
      'কোলন কোষে বিউটাইরেটের পরিবহন (MCT1, SMCT1) এবং মাইটোকন্ড্রিয়াল বিটা-জারণের মাধ্যমে এটিপি তৈরি ও কোষীয় হাইপোক্সিয়া রক্ষার আণবিক প্রক্রিয়া ব্যাখ্যা করা [4, 6]।'
    ),
    l(
      'Contrast the biological targets of propionate in hepatic gluconeogenesis with systemic acetate utilization in peripheral tissues and brain neurochemistry [2, 5].',
      'যকৃতের গ্লুকোজ উৎপাদনে প্রোপিওনেটের ভূমিকা এবং প্রান্তীয় কলা ও মস্তিষ্কে অ্যাসিটেটের সংকেত প্রেরণের মধ্যে তুলনামূলক পার্থক্য নির্ণয় করা [2, 5]।'
    ),
    l(
      'Analyze the epigenetic actions of butyrate as an endogenous histone deacetylase (HDAC) inhibitor regulating Foxp3+ regulatory T-cell differentiation and mucosal barrier integrity [4, 6].',
      'হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) দমনকারী হিসেবে বিউটাইরেটের এপিজেনেটিক ক্রিয়া এবং টি-রেগুলেটরি কোষ ও অন্ত্রের প্রাচীর সুরক্ষার মেকানিজম মূল্যায়ন করা [4, 6]।'
    ),
    l(
      'Formulate evidence-based clinical dietary recommendations for fiber intake, calculating therapeutic targets for cardiometabolic disease, dysbiosis, and functional bowel disorders [1, 3].',
      'হৃদরোগ, মেটাবলিক সিন্ড্রোম এবং অন্ত্রের কার্যকরী জটিলতা দূরীকরণে আন্তর্জাতিক নির্দেশিকা অনুসারে খাদ্য আঁশের সঠিক ক্লিনিক্যাল মাত্রা গণনা ও প্রয়োগ করা [1, 3]।'
    ),
  ],
  references: fiberScfaRefs,
  prerequisiteIds: ['topic.nutrition.carbohydrate-quality-gi-gl'],
  relatedTopicIds: ['topic.nutrition.gut-microbiome-metagenomics', 'topic.nutrition.prebiotics-probiotics-dysbiosis'],
  evidenceBySection: {
    introduction: ['slavin-modern-nutrition-fiber', 'gropper-advanced-nutrition-fiber'],
    structure: ['gropper-advanced-nutrition-fiber', 'cummings-scfa-distribution'],
    mechanism: ['koh-cell-microbe-scfa-homeostasis', 'cummings-scfa-distribution'],
    integration: ['koh-cell-microbe-scfa-homeostasis', 'hamer-butyrate-colonic-function'],
    practice: ['canfora-nrgastro-scfa', 'hamer-butyrate-colonic-function'],
    takeaways: ['slavin-modern-nutrition-fiber', 'canfora-nrgastro-scfa'],
  },
  chapter: {
    toc: [
      { id: 'introduction', label: l('1. Physicochemical Taxonomy of Plant Fibers', '১. উদ্ভিজ্জ আঁশের ভৌত-রাসায়নিক শ্রেণিবিন্যাস'), sectionId: 'introduction' },
      { id: 'structure', label: l('2. Anaerobic Microbial Fermentation in the Colon', '২. বৃহদান্ত্রে অণুজীবের অবাত গাঁজন প্রক্রিয়া'), sectionId: 'structure' },
      { id: 'mechanism', label: l('3. The SCFA Triad: Acetate, Propionate, Butyrate', '৩. এসসিএফএ ত্রয়ী: অ্যাসিটেট, প্রোপিওনেট, বিউটাইরেট'), sectionId: 'mechanism' },
      { id: 'integration', label: l('4. Colonocyte Energetics & Barrier Tight Junctions', '৪. কোলনোসাইটের শক্তি উৎপাদন ও টাইট-জাংশন অখণ্ডতা'), sectionId: 'integration' },
      { id: 'practice', label: l('5. Receptor Signaling & Systemic Metabolism', '৫. রিসেপ্টর সংকেত ও সামগ্রিক বিপাকীয় নিয়ন্ত্রণ'), sectionId: 'practice' },
      { id: 'takeaways', label: l('6. Clinical Intake Standards & Therapeutic Applications', '৬. ক্লিনিক্যাল খাদ্য মানদণ্ড ও চিকিৎসাগত প্রয়োগ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Dietary vs Functional Fiber', 'খাদ্য আঁশ বনাম কার্যকরী আঁশ (Dietary vs Functional Fiber)'),
        definition: l(
          'Dietary fiber consists of non-digestible carbohydrates and lignin intrinsic and intact in plants. Functional fiber consists of isolated or synthesized non-digestible carbohydrates shown to have beneficial physiological effects in humans [1, 3].',
          'খাদ্য আঁশ হলো উদ্ভিদে প্রাকৃতিকভাবে অক্ষত থাকা অপাচ্য শর্করা ও লিগনিন। অন্যদিকে কার্যকরী আঁশ হলো প্রক্রিয়াজাত বা কৃত্রিমভাবে তৈরি অপাচ্য শর্করা যার প্রমাণিত মানব স্বাস্থ্যোপকারিতা রয়েছে [1, 3]।'
        ),
      },
      {
        term: l('Short-Chain Fatty Acids (SCFAs)', 'শর্ট-চেইন ফ্যাটি অ্যাসিড (SCFA)'),
        definition: l(
          'Volatile organic fatty acids with fewer than 6 carbons, principally acetate (C2), propionate (C3), and butyrate (C4), generated by anaerobic microbial fermentation of fermentable carbohydrates in the cecum and colon [2, 4].',
          'ছয় কার্বনের কম দৈর্ঘ্যের উদ্বায়ী জৈব ফ্যাটি অ্যাসিড, প্রধানত অ্যাসিটেট (C2), প্রোপিওনেট (C3) এবং বিউটাইরেট (C4), যা কোলনে ব্যাকটেরিয়ার অবাত গাঁজনে উৎপন্ন হয় [2, 4]।'
        ),
      },
      {
        term: l('Colonocyte Hypoxia', 'কোলনোসাইট হাইপোক্সিয়া (Physiologic Epithelial Hypoxia)'),
        definition: l(
          'The physiological state of low epithelial oxygen tension (<1% O2) sustained by high-rate mitochondrial beta-oxidation of butyrate in differentiated colonocytes, which limits oxygen leakage into the lumen and preserves obligate anaerobic microbiota [4, 6].',
          'কোলন আবরণী কোষে অত্যন্ত কম অক্সিজেন টান (<১% O2) বজায় থাকার স্বাভাবিক অবস্থা, যা বিউটাইরেটের তীব্র মাইটোকন্ড্রিয়াল জারণের কারণে ঘটে এবং অন্ত্রের উপকারী অবাত ব্যাকটেরিয়ার পরিবেশ রক্ষা করে [4, 6]।'
        ),
      },
      {
        term: l('Free Fatty Acid Receptor 2 & 3 (FFAR2 / FFAR3)', 'ফ্রি ফ্যাটি অ্যাসিড রিসেপ্টর ২ ও ৩ (FFAR2 / FFAR3)'),
        definition: l(
          'G-protein coupled receptors (formerly GPR43 and GPR41) responsive to luminal and circulating SCFAs, orchestrating intestinal L-cell GLP-1/PYY release, immune tolerance, and sympathetic metabolic rate [2, 4].',
          'জি-প্রোটিন যুক্ত কোষঝিল্লি রিসেপ্টর (GPR43 ও GPR41), যা এসসিএফএ দ্বারা উদ্দীপিত হয়ে অন্ত্রের এল-কোষ থেকে ইনক্রেটিন (GLP-1 ও PYY) নিঃসরণ এবং রোগপ্রতিরোধ সহনশীলতা নিয়ন্ত্রণ করে [2, 4]।'
        ),
      },
      {
        term: l('Histone Deacetylase (HDAC) Inhibition', 'হিস্টোন ডিঅ্যাসিটাইলেজ দমন (HDAC Inhibition)'),
        definition: l(
          'An epigenetic mechanism whereby butyrate (and to a lesser degree propionate) blocks zinc-dependent class I and II HDAC enzymes, hyperacetylating chromatin and opening promoters of tumor suppressor genes and Foxp3 in regulatory T cells [4, 6].',
          'একটি এপিজেনেটিক নিয়ন্ত্রণ প্রক্রিয়া যাতে বিউটাইরেট HDAC এনজাইমকে অবরুদ্ধ করে ক্রোমাটিনে অ্যাসিটাইল গ্রুপ বৃদ্ধি করে, ফলে টিউমার দমনকারী জিন এবং টি-রেগুলেটরি কোষের Foxp3 জিন সক্রিয় হয় [4, 6]।'
        ),
      },
      {
        term: l('Resistant Starch (RS1–RS4)', 'প্রতিরোধী শ্বেতসার (Resistant Starch RS1–RS4)'),
        definition: l(
          'Fractions of starch that escape alpha-amylase digestion in the upper gastrointestinal tract due to physical trapping (RS1), crystal packing (RS2), retrogradation (RS3), or chemical ether/ester modification (RS4) [1, 3].',
          'শ্বেতসারের বিশেষ অংশ যা শারীরিক বাধা (RS1), ক্রিস্টালাইন গঠন (RS2), রান্না শেষে ঠান্ডা করার ফলে গঠিত জট (RS3), বা রাসায়নিক পরিবর্তনের (RS4) কারণে ক্ষুদ্রান্ত্রে না ভেঙে সরাসরি কোলনে পৌঁছায় [1, 3]।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Quantitative Stoichiometry of Colonic SCFA Generation & Colonocyte ATP Yield', 'কোলনে এসসিএফএ উৎপাদনের পরিমাণগত স্টয়কিওমেট্রি ও কোলনোসাইটের এটিপি গণনা'),
        steps: [
          l(
            'Step 1: Ingestion of 30 g of fermentable prebiotic fiber (inulin and resistant starch). Approximately 85% reaches the cecum and proximal colon, delivering ~25.5 g of fermentable substrate to the anaerobic microbiota [1, 3].',
            'ধাপ ১: একজন প্রাপ্তবয়স্ক ব্যক্তি ৩০ গ্রাম গাঁজনযোগ্য প্রিবায়োটিক ফাইবার গ্রহণ করলেন। এর প্রায় ৮৫% ক্ষুদ্রান্ত্র পেরিয়ে সিকামে পৌঁছায়, ফলে প্রায় ২৫.৫ গ্রাম গাঁজনযোগ্য শর্করা ব্যাকটেরিয়ার জন্য লভ্য হয় [1, 3]।'
          ),
          l(
            'Step 2: Microbial anaerobic glycolysis and fermentation yield ~7 to 8 mmol of total SCFAs per gram of carbohydrate fermented, producing ~180 to 205 mmol of mixed SCFAs in the classic molar ratio of 60% acetate (110–123 mmol), 20% propionate (36–41 mmol), and 20% butyrate (36–41 mmol) [2, 5].',
            'ধাপ ২: ব্যাকটেরিয়ার অবাত গাঁজনে প্রতি গ্রাম ফাইবার থেকে প্রায় ৭-৮ মিলিমোল এসসিএফএ উৎপন্ন হয়। ফলে মোট ১৮০-২০৫ মিলিমোল এসসিএফএ তৈরি হয়, যার চিরাচরিত মোলার অনুপাত ৬০% অ্যাসিটেট (১১০-১২৩ মিলিমোল), ২০% প্রোপিওনেট (৩৬-৪১ মিলিমোল) এবং ২০% বিউটাইরেট (৩৬-৪১ মিলিমোল) [2, 5]।'
          ),
          l(
            'Step 3: Butyrate (C4H8O2) is transported into apical colonocytes via MCT1 and SMCT1. Complete mitochondrial beta-oxidation of 1 mol of butyrate yields 2 mol of acetyl-CoA, feeding the tricarboxylic acid (TCA) cycle to generate 27 mol of ATP per mol of butyrate oxidized [4, 6].',
            'ধাপ ৩: উৎপন্ন বিউটাইরেট কোলন কোষে শোষিত হয়ে মাইটোকন্ড্রিয়ায় বিটা-জারণে প্রবেশ করে। প্রতি মোল বিউটাইরেট থেকে ২ মোল অ্যাসিটাইল-কোএ তৈরি হয়, যা সাইট্রিক অ্যাসিড চক্রে প্রবেশ করে মোট ২৭ মোল এটিপি উৎপন্ন করে কোলন কোষকে সতেজ রাখে [4, 6]।'
          ),
          l(
            'Step 4: Colonocytes consume ~70% of luminal butyrate, deriving >60–70% of their baseline energy requirement from this microbial metabolite rather than circulating arterial glucose [4, 6].',
            'ধাপ ৪: কোলন আবরণী কোষগুলো তাদের বেঁচে থাকার জন্য প্রয়োজনীয় মোট শক্তির ৬০-৭০% পায় এই ব্যাকটেরিয়াল বিউটাইরেট থেকে, রক্তের গ্লুকোজ থেকে নয় [4, 6]।'
          ),
        ],
        conclusion: l(
          'Targeting prebiotic fiber intake to achieve >200 mmol of daily luminal SCFA production sustains epithelial hypoxia and mucosal barrier defense [4, 6].',
          'দৈনিক পর্যাপ্ত প্রিবায়োটিক ফাইবার গ্রহণ কোলন কোষের সুস্থতা ও অন্ত্রের প্রতিরক্ষা প্রাচীর অটুট রাখার প্রধান চাবিকাঠি [4, 6]।'
        ),
      },
      {
        title: l('Dietary Fiber Titration & Gas Dynamics in Irritable Bowel Syndrome', 'ইরিটেবল বাওয়েল সিন্ড্রোমে খাদ্য আঁশের মাত্রা বৃদ্ধি ও গ্যাস গতিবিদ্যা ব্যবস্থাপনা'),
        steps: [
          l(
            'Step 1: Baseline assessment of a patient consuming 11 g/day total fiber with chronic constipation and visceral hypersensitivity. Direct sudden escalation to 30 g/day with rapidly fermentable inulin or beans triggers severe bloating due to rapid hydrogen (H2) and carbon dioxide (CO2) evolution [1, 3].',
            'ধাপ ১: একজন রোগী দৈনিক মাত্র ১১ গ্রাম আঁশ খাচ্ছিলেন এবং কোষ্ঠকাঠিন্য ও পেটের অস্বস্তিতে ভুগছিলেন। হঠাৎ করে তাকে ৩০ গ্রাম দ্রুত গাঁজনযোগ্য ইনুলিন বা ডাল দিলে প্রচুর গ্যাস তৈরি হয়ে তীব্র পেটব্যথা শুরু হয় [1, 3]।'
          ),
          l(
            'Step 2: Clinical strategy: Initiate with non-fermentable or slowly fermentable, high-viscosity soluble fibers such as coarse psyllium (ispaghula husk) at 5 g/day, accompanied by 250 mL of additional water per dose [1, 3].',
            'ধাপ ২: ক্লিনিক্যাল সমাধান: ধীরে ধীরে গাঁজন হয় এমন উচ্চ-সান্দ্রতার দ্রবণীয় আঁশ (যেমন ইসবগুলের ভুষি) দৈনিক ৫ গ্রাম দিয়ে শুরু করতে হবে এবং সাথে পর্যাপ্ত পানি (২৫০ মিলি) নিশ্চিত করতে হবে [1, 3]।'
          ),
          l(
            'Step 3: Titrate by 3 to 5 g every 5 to 7 days, allowing the colonic microbiome to adapt its CAZyme enzyme repertoire and shifting methanogenic and sulfate-reducing populations to minimize gas distress [3, 4].',
            'ধাপ ৩: প্রতি ৫ থেকে ৭ দিন পরপর ৩-৫ গ্রাম করে আঁশ বাড়াতে হবে, যাতে অন্ত্রের ব্যাকটেরিয়া ধীরে ধীরে এনজাইম তৈরি করে মানিয়ে নিতে পারে এবং অতিরিক্ত গ্যাস না জমে [3, 4]।'
          ),
          l(
            'Step 4: Target achievement: 28 to 35 g/day distributed across soluble viscous (oat beta-glucan, psyllium) and insoluble bulking forms (flaxseed, cooked cooled resistant starches) achieving a Bristol Stool Scale Type 4 consistency [1, 3].',
            'ধাপ ৪: চূড়ান্ত লক্ষ্য: দৈনিক ২৮-৩৫ গ্রাম আঁশ নিশ্চিত করা যার মধ্যে দ্রবণীয় সান্দ্র আঁশ এবং প্রতিরোধী শ্বেতসার থাকবে, যা মলের আর্দ্রতা ও স্বাভাবিক আকার ফিরিয়ে আনবে [1, 3]।'
          ),
        ],
        conclusion: l(
          'Slow fiber titration over 4–6 weeks avoids luminal gas distension while providing optimal bulking and SCFA benefits in sensitive patients [1, 3].',
          'ধীরে ধীরে আঁশের মাত্রা বৃদ্ধি করলে পেটে অতিরিক্ত গ্যাস না জমিয়েও কোষ্ঠকাঠিন্য ও অন্ত্রের দীর্ঘমেয়াদী সুফল পাওয়া যায় [1, 3]।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does the consumption of soluble viscous fibers reduce serum LDL cholesterol without altering hepatic cholesterol synthesis enzymes directly?',
          'দ্রবণীয় সান্দ্র আঁশ যকৃতের কোনো এনজাইমে সরাসরি বাধা না দিয়েও কীভাবে রক্তে এলডিএল কোলেস্টেরলের মাত্রা কমিয়ে দেয়?'
        ),
        answer: l(
          'Viscous fibers (e.g., beta-glucan, pectin, psyllium) form an intraluminal hydrated gel that sequesters biliary micelles in the distal ileum, interrupting enterohepatic bile acid circulation. To replenish the lost bile acid pool, the liver upregulates CYP7A1 (7-alpha-hydroxylase), consuming hepatic cholesterol and upregulating cell-surface LDL receptors to clear circulating LDL-C from plasma [1, 3].',
          'সান্দ্র আঁশ অন্ত্রে ঘন জেল তৈরি করে পিত্তরসের মাইসেলি আটকে ফেলে এবং ইলিয়ামে পিত্তলবণের পুনঃশোষণ বন্ধ করে দেয়। ঘাটতি মেটাতে যকৃত রক্তের অতিরিক্ত এলডিএল কোলেস্টেরল শুষে নিয়ে নতুন পিত্তরস তৈরি করতে বাধ্য হয়, ফলে রক্তের এলডিএল কমে যায় [1, 3]।'
        ),
      },
      {
        question: l(
          'How does epithelial butyrate oxidation directly protect against the expansion of enteric facultative pathogens such as Salmonella and E. coli?',
          'কোলন কোষে বিউটাইরেটের জারণ প্রক্রিয়া কীভাবে সালমোনেলা ও ই. কোলাই-এর মতো ক্ষতিকর ব্যাকটেরিয়ার বংশবৃদ্ধি প্রতিহত করে?'
        ),
        answer: l(
          'Mitochondrial beta-oxidation of butyrate consumes huge amounts of molecular oxygen, maintaining epithelial hypoxia (<1% O2). This stabilizes hypoxia-inducible factor 1-alpha (HIF-1alpha), drives tight-junction synthesis, and suppresses inducible nitric oxide synthase (iNOS). Without oxygen or host-derived nitrate/tetrathionate electron acceptors, facultative anaerobic Enterobacteriaceae cannot outcompete obligate anaerobic Firmicutes and Bacteroidetes [4, 6].',
          'বিউটাইরেট পোড়াতে গিয়ে কোলন কোষ প্রায় সব অক্সিজেন ব্যবহার করে ফেলে, ফলে অন্ত্রের প্রাচীরে গভীর অক্সিজেনহীনতা (হাইপোক্সিয়া) বজায় থাকে। অক্সিজেন বা নাইট্রেট না থাকায় সালমোনেলা বা রোগ সৃষ্টিকারী ক্ষতিকর ব্যাকটেরিয়া বংশবৃদ্ধি করতে পারে না এবং উপকারী অবাত ব্যাকটেরিয়া অন্ত্রের কর্তৃত্ব বজায় রাখে [4, 6]।'
        ),
      },
      {
        question: l(
          'What distinguishes the clinical metabolic fates of propionate from acetate in human physiology?',
          'মানবদেহে প্রোপিওনেট এবং অ্যাসিটেটের বিপাকীয় ও শারীরবৃত্তীয় কাজের প্রধান পার্থক্য কী?'
        ),
        answer: l(
          'Propionate (C3) is cleared by hepatic first-pass uptake (>90%), where it serves as an anaplerotic substrate entering the citric acid cycle via succinyl-CoA and suppresses hepatic de novo lipogenesis. Conversely, acetate (C2) escapes the liver, reaches systemic arterial blood (50–100 μM), serves as an oxidative fuel for muscle and brain, crosses the blood-brain barrier to promote central hypothalamic satiety, and acts as a ligand for adipocyte FFAR2 to limit lipolysis [2, 5].',
          'প্রোপিওনেটের ৯০% যকৃত গ্রহণ করে সাইট্রিক অ্যাসিড চক্রে শক্তি তৈরিতে ব্যবহার করে এবং যকৃতে চর্বি জমা বন্ধ করে। অপরপক্ষে অ্যাসিটেট যকৃত পেরিয়ে সারা শরীরের রক্তে ছড়িয়ে পড়ে কঙ্কালপেশি ও মস্তিষ্কের জ্বালানি হয় এবং মস্তিষ্কে গিয়ে অতিরিক্ত খাওয়ার ইচ্ছা দমন করে [2, 5]।'
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
      'Molar ratios reflect steady-state human proximal colonic aspirates; distal colonic ratios shift as fermentable substrates become depleted [2, 5].',
      'প্রক্সিমাল কোলনের আদর্শ সুস্থ মানুষের নমুনাভিত্তিক মোলার অনুপাত; দূরবর্তী কোলনে খাদ্য উপাদানের ঘাটতি দেখা দিলে এই অনুপাত কিছুটা পরিবর্তিত হতে পারে [2, 5]।'
    ),
    imageUrl: '/assets/dietary_fiber_scfa_overview.jpg',
    imageCaption: l(
      'Medical Reference Figure 4.1: Colonic Crypt Architecture, Anaerobic Microbial Fermentation & Short-Chain Fatty Acid (SCFA) Signaling Cascades.',
      'মেডিকেল রেফারেন্স চিত্র ৪.১: কোলনিক ক্রিপ্ট গঠন, অবাত অণুজীবীয় গাঁজন এবং শর্ট-চেইন ফ্যাটি অ্যাসিড (SCFA) সংকেত প্রণালী।'
    ),
    has3D: true,
    threeDType: 'dietary-fiber-scfa-3d',
    svgType: 'pathway-map',
    items: [
      {
        id: 'fiber-classes-node',
        label: l('Fiber Classes: Viscous vs Insoluble Polysaccharides', 'আঁশের ধরন: সান্দ্র দ্রবণীয় বনাম অদ্রবণীয় পলিস্যাকারাইড'),
        description: l(
          'Soluble viscous fibers (beta-glucan, psyllium, pectin) form hydrating gels that delay gastric emptying and trap bile acids; insoluble fibers (cellulose, lignin) provide mechanical bulking [1, 3].',
          'দ্রবণীয় সান্দ্র আঁশ (বিটা-গ্লুকান, ইসবগুল, পেকটিন) পানি শোষণ করে জেল গঠন করে পাকস্থলী খালি হওয়া বিলম্বিত করে; আর অদ্রবণীয় আঁশ মলের আয়তন বৃদ্ধি করে [1, 3]।'
        ),
        details: l(
          'Viscous fibers lower circulating LDL cholesterol by interfering with micellar reabsorption of bile acids in the ileum, forcing the liver to clear LDL to synthesize replacement bile [1, 3].',
          'সান্দ্র আঁশ পিত্তলবণ শোষণ কমিয়ে যকৃতকে রক্ত থেকে এলডিএল কোলেস্টেরল গ্রহণ করে নতুন পিত্ত তৈরি করতে বাধ্য করে, ফলে রক্তের কোলেস্টেরল কমে [1, 3]।'
        ),
        sectionId: 'introduction',
        color: '#059669',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
        position3D: { x: -65, y: -50, z: 20 },
      },
      {
        id: 'anaerobic-fermentation-node',
        label: l('Colonic Anaerobic Microbial Fermentation Hub', 'বৃহদান্ত্রের অবাত অণুজীব গাঁজন কেন্দ্র'),
        description: l(
          'Dense commensal consortium (over 10^12 bacteria/g feces) expresses carbohydrate-active enzymes (CAZymes) that cleave beta-1,3, beta-1,4, and beta-1,6 linkages resistant to human amylases [2, 4].',
          'অন্ত্রের কোটি কোটি উপকারী ব্যাকটেরিয়া বিশেষায়িত ক্যাজাইমস (CAZymes) এনজাইম তৈরি করে যা মানুষের অবাধ্য জটিল বিটা-রাসায়নিক বন্ধনগুলোকে নিপুণভাবে ভেঙে ফেলে [2, 4]।'
        ),
        details: l(
          'Bacteroidetes (Bacteroides, Prevotella) specialize in complex xylan and pectin deconstruction; Firmicutes (Roseburia, Faecalibacterium) are primary butyrate producers [4].',
          'ব্যাকটেরয়েডিস গোত্র জটিল জাইলান ও পেকটিন ভাঙায় দক্ষ; আর ফার্মিকিউটিস গোত্র হলো দেহের প্রধান বিউটাইরেট উৎপাদনকারী কারখানা [4]।'
        ),
        sectionId: 'structure',
        color: '#10b981',
        svgCoords: { x: 25, y: 95, width: 310, height: 48 },
        position3D: { x: 50, y: -45, z: -20 },
      },
      {
        id: 'butyrate-node',
        label: l('Butyrate (C4): Colonocyte Energy & Barrier Security', 'বিউটাইরেট (C4): কোলন কোষের জ্বালানি ও দেয়াল সুরক্ষা'),
        description: l(
          'Captured via MCT1 and SMCT1, providing over 70% of epithelial ATP via mitochondrial beta-oxidation while inhibiting HDAC to promote regulatory T-cells [4, 6].',
          'MCT1 ও SMCT1 দিয়ে কোষে ঢুকে ৭০% শক্তি যোগায় এবং HDAC এনজাইমকে দমন করে রোগপ্রতিরোধী টি-রেগুলেটরি কোষ তৈরি করে প্রদাহ থামায় [4, 6]।'
        ),
        details: l(
          'Colonocyte beta-oxidation consumes oxygen, keeping mucosal oxygen tension under 1%, which preserves the strictly anaerobic microbiota and suppresses Enterobacteriaceae expansion [4, 6].',
          'বিউটাইরেট জারণে প্রচুর অক্সিজেন ব্যবহৃত হওয়ায় অন্ত্রের দেয়াল অক্সিজেনমুক্ত থাকে, যা উপকারী অবাত ব্যাকটেরিয়াকে বাঁচিয়ে রাখে এবং ক্ষতিকর ব্যাকটেরিয়ার আক্রমণ ঠেকায় [4, 6]।'
        ),
        sectionId: 'mechanism',
        color: '#2563eb',
        svgCoords: { x: 25, y: 155, width: 310, height: 48 },
        position3D: { x: -55, y: 0, z: 30 },
      },
      {
        id: 'propionate-node',
        label: l('Propionate (C3): Hepatic Metabolic Gatekeeper', 'প্রোপিওনেট (C3): যকৃতের বিপাকীয় নিয়ন্ত্রক'),
        description: l(
          'Absorbed through portal blood into hepatocytes, entering the TCA cycle via succinyl-CoA and downregulating de novo lipogenesis and gluconeogenesis enzymes [2, 5].',
          'পোর্টাল শিরা দিয়ে যকৃতে পৌঁছে সাকসিনাইল-কোএ মাধ্যমে শক্তি চক্রে অংশ নেয় এবং অতিরিক্ত গ্লুকোজ ও চর্বি তৈরি বন্ধ করে [2, 5]।'
        ),
        details: l(
          'Activates intestinal gluconeogenesis (IGN) through neural afferent arcs, signaling the brain portal sensors to suppress central hunger and improve insulin sensitivity [2, 4].',
          'অন্ত্রের স্নায়ু সংকেতের মাধ্যমে মস্তিষ্কে বার্তা পাঠিয়ে অতিরিক্ত ক্ষুধা দমন করে এবং দেহের ইনসুলিনের কার্যকারিতা বৃদ্ধি করে [2, 4]।'
        ),
        sectionId: 'integration',
        color: '#7c3aed',
        svgCoords: { x: 25, y: 215, width: 310, height: 48 },
        position3D: { x: 55, y: 0, z: -15 },
      },
      {
        id: 'acetate-node',
        label: l('Acetate (C2): Systemic Fuel & Adipocyte Signaling', 'অ্যাসিটেট (C2): সিস্টেমিক জ্বালানি ও চর্বি কোষ সংকেত'),
        description: l(
          'The highest-concentration circulating SCFA (50–100 μM); fuels heart, skeletal muscle, and brain while activating FFAR2 on adipocytes to suppress lipolysis [2, 5].',
          'রক্তে সবচেয়ে বেশি থাকা এসসিএফএ; হৃদযন্ত্র, কঙ্কালপেশি ও মস্তিষ্কের জ্বালানি হিসেবে ব্যবহৃত হয় এবং চর্বি কোষে ফ্রি ফ্যাটি অ্যাসিড মুক্ত হওয়া কমায় [2, 5]।'
        ),
        details: l(
          'Crosses the blood-brain barrier to directly activate hypothalamic pro-opiomelanocortin (POMC) anorexigenic neurons, inducing meal cessation and systemic energy expenditure [2, 4].',
          'রক্ত-মস্তিষ্ক প্রাচীর পেরিয়ে মস্তিষ্কের হাইপোথ্যালামাসে খাবার খাওয়ার তৃপ্তি তৈরি করে এবং বাড়তি ক্যালরি পোড়াতে সাহায্য করে [2, 4]।'
        ),
        sectionId: 'practice',
        color: '#db2777',
        svgCoords: { x: 25, y: 275, width: 310, height: 48 },
        position3D: { x: -45, y: 50, z: -25 },
      },
      {
        id: 'clinical-outcomes-node',
        label: l('Systemic Clinical Endpoints & Mucosal Defense', 'ক্লিনিক্যাল সুফল ও মিউকোসাল প্রতিরক্ষা'),
        description: l(
          'Synchronized SCFA action elevates GLP-1 and PYY, maintains tight junction proteins (claudin-1, occludin), reduces systemic inflammation, and lowers cardiovascular risk [1, 2, 4].',
          'এসসিএফএ-এর সম্মিলিত প্রভাবে ইনক্রেটিন হরমোন বাড়ে, অন্ত্রের টাইট-জাংশন দেয়াল শক্ত হয় এবং পুরো দেহের দীর্ঘমেয়াদী প্রদাহ ও হৃদরোগের ঝুঁকি কমে [1, 2, 4]।'
        ),
        details: l(
          'Evidence-based guidelines mandate 25 to 38 g/day of diverse dietary fiber to protect against type 2 diabetes, colorectal neoplasia, and cardiovascular disease [1, 3].',
          'ডায়াবেটিস, কোলন ক্যান্সার এবং হৃদরোগ প্রতিরোধে দৈনিক ২৫ থেকে ৩৮ গ্রাম বৈচিত্র্যময় উদ্ভিজ্জ খাদ্য আঁশ গ্রহণ করা বাধ্যতামূলক [1, 3]।'
        ),
        sectionId: 'takeaways',
        color: '#0d9488',
        svgCoords: { x: 25, y: 335, width: 310, height: 48 },
        position3D: { x: 45, y: 50, z: 25 },
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'Flowchart tracing dietary fiber deconstruction by colonic microbiota into acetate, propionate, and butyrate, their epithelial absorption, and multi-organ metabolic actions.',
      'খাদ্য আঁশের অণুজীব দ্বারা ভাঙন, অ্যাসিটেট, প্রোপিওনেট ও বিউটাইরেট উৎপাদন, এদের শোষণ এবং বিভিন্ন অঙ্গে সুনির্দিষ্ট কাজের পর্যায়ক্রমিক চিত্র।'
    ),
    steps: [
      l(
        'Step 1: Complex dietary polysaccharides escape upper GI digestion and enter the anaerobic colonic bioreactor.',
        'ধাপ ১: উদ্ভিজ্জ জটিল শর্করা ক্ষুদ্রান্ত্রের পরিপাক এড়িয়ে বৃহৎ অন্ত্রের অবাত বায়োরিয়েক্টরে পৌঁছায়।'
      ),
      l(
        'Step 2: Commensal bacterial CAZymes hydrolyze glycosidic bonds, fermenting monosaccharides into SCFAs.',
        'ধাপ ২: ব্যাকটেরিয়াল এনজাইমগুলো জটিল বন্ধন ভেঙে অ্যাসিটেট, প্রোপিওনেট ও বিউটাইরেট তৈরি করে।'
      ),
      l(
        'Step 3: Colonocytes consume butyrate via beta-oxidation, maintaining mucosal ATP and cellular hypoxia.',
        'ধাপ ৩: কোলনের কোষগুলো বিউটাইরেট পুড়িয়ে প্রচুর এটিপি তৈরি করে এবং অন্ত্রের স্বাভাবিক অক্সিজেনহীন পরিবেশ রক্ষা করে।'
      ),
      l(
        'Step 4: Propionate and acetate enter the portal and systemic blood, regulating liver metabolism and suppressing central appetite.',
        'ধাপ ৪: প্রোপিওনেট ও অ্যাসিটেট রক্তে ছড়িয়ে যকৃতের বিপাক নিয়ন্ত্রণ করে এবং মস্তিষ্কে ক্ষুধার অনুভূতি কমায়।'
      ),
      l(
        'Step 5: Epigenetic HDAC inhibition and FFAR2/FFAR3 activation drive mucosal immunity and systemic glycemic control.',
        'ধাপ ৫: HDAC দমন ও রিসেপ্টর উদ্দীপনার মাধ্যমে অন্ত্রের রোগপ্রতিরোধ ক্ষমতা বৃদ্ধি পায় এবং রক্তে গ্লুকোজের ভারসাম্য বজায় থাকে।'
      ),
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. What is Dietary Fiber and Why Does It Matter?', '১. খাদ্য আঁশ কী এবং কেন এটি মানবদেহের জন্য অপরিহার্য?'),
          paragraphs: [
            l(
              'Dietary fiber represents the complex carbohydrate polymers and lignin naturally present in plant foods that completely resist enzymatic breakdown in the human stomach and small intestine [1, 3]. While simple starches, proteins, and fats are digested by salivary, gastric, and pancreatic enzymes and absorbed early in the gastrointestinal tract, dietary fiber passes through unaffected [1]. It arrives in the large intestine (cecum and colon) virtually intact, serving as the primary nutritional substrate for trillions of symbiotic microorganisms that reside within our digestive system [1, 4].',
              'খাদ্য আঁশ বা ডায়েটারি ফাইবার হলো উদ্ভিজ্জ খাদ্যে প্রাকৃতিকভাবে উপস্থিত এমন কিছু জটিল কার্বোহাইড্রেট পলিমার ও লিগনিন, যা মানুষের পাকস্থলী বা ক্ষুদ্রান্ত্রের নিজস্ব পাচক এনজাইম দিয়ে একেবারেই হজম করা যায় না [1, 3]। সাধারণ চিনি, শ্বেতসার, আমিষ কিংবা চর্বি পরিপাকনালির শুরুতেই বিভিন্ন এনজাইমের সাহায্যে ভেঙে রক্তে শোষিত হলেও আঁশ অবিকৃত অবস্থায় দীর্ঘ পথ পাড়ি দিয়ে কোলন বা বৃহদান্ত্রে পৌঁছায় [1]। সেখানে বসবাসকারী শত কোটি উপকারী অণুজীবের জন্য এটিই হলো বেঁচে থাকার প্রধান খাদ্য ও পুষ্টির আধার [1, 4]।'
            ),
            l(
              'For decades, dietary fiber was erroneously dismissed as inert "roughage"—an indigestible material whose only purpose was to provide mechanical bulk to stool and prevent constipation [1]. Modern clinical nutrition has revolutionized this simplistic view: dietary fiber is now recognized as a vital macronutrient that governs intestinal barrier defense, systemic immune tolerance, lipid metabolism, and blood glucose stability [1, 2]. Without adequate dietary fiber, the microbial ecosystem in the colon starves, forcing bacteria to consume the protective mucus lining of the gut wall, leading to inflammation and increased susceptibility to chronic metabolic diseases [3, 4].',
              'বহু দশক ধরে খাদ্য আঁশকে কেবল পেটের বর্জ্য পরিষ্কারের একটি জড় মাধ্যম বা "রাফেজ" মনে করা হতো, যার একমাত্র কাজ ছিল মলের পরিমাণ বৃদ্ধি করে কোষ্ঠকাঠিন্য দূর করা [1]। কিন্তু আধুনিক পুষ্টিবিজ্ঞান প্রমাণ করেছে যে খাদ্য আঁশ কোনো নিষ্ক্রিয় বর্জ্য নয়; এটি একটি জীবনরক্ষাকারী পুষ্টি উপাদান যা আমাদের অন্ত্রের রোগপ্রতিরোধ ব্যবস্থা, কোলেস্টেরল নিয়ন্ত্রণ, রক্তের গ্লুকোজের ভারসাম্য এবং দীর্ঘমেয়াদী সুস্থতা রক্ষা করে [1, 2]। খাদ্যে পর্যাপ্ত আঁশ না থাকলে অন্ত্রের উপকারী ব্যাকটেরিয়াগুলো ক্ষুধার্ত হয়ে পড়ে এবং আমাদের কোলনের সুরক্ষাকারী শ্লেষ্মা আবরণী খেয়ে ফেলতে শুরু করে, যা থেকে শরীরে গভীর প্রদাহের জন্ম হয় [3, 4]।'
            ),
            l(
              'Fiber is found exclusively in whole plant foods: legumes (lentils, chickpeas, beans), whole cereal grains (oats, barley, brown rice), root vegetables, cruciferous greens, fruits with skins, nuts, and seeds [1, 3]. Animal products (meat, poultry, fish, eggs, dairy) and ultra-processed refined grains contain zero dietary fiber [1]. Understanding the physical properties and microbial fates of these diverse plant structures is foundational to clinical dietetics and lifestyle medicine [1, 3].',
              'খাদ্য আঁশ কেবল উদ্ভিজ্জ খাবারের মধ্যেই প্রাকৃতিকভাবে বিদ্যমান থাকে: ডাল, ছোলা, শিমজাতীয় বীজ, ওটস, লাল চাল, বার্লি, মিষ্টি আলু, খোসাসহ ফলমূল, শাকসবজি এবং বাদামে প্রচুর পরিমাণে আঁশ থাকে [1, 3]। কোনো প্রাণিজ খাদ্য (মাংস, মাছ, ডিম, দুধ) কিংবা অত্যন্ত প্রক্রিয়াজাত পরিশোধিত ময়দায় কোনো আঁশ থাকে না [1]। সুস্থ থাকতে হলে খাদ্যের এই ভৌত বৈশিষ্ট্য এবং অন্ত্রে এদের আচরণ সম্পর্কে স্পষ্ট ধারণা থাকা অত্যন্ত জরুরি [1, 3]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. The Physical Spectrum: Soluble, Viscous & Insoluble Fibers', '২. আঁশের ভৌত রূপরেখা: দ্রবণীয়, সান্দ্র ও অদ্রবণীয় আঁশ'),
          paragraphs: [
            l(
              'Dietary fibers are broadly classified according to their physical behavior in water: solubility, viscosity, and fermentability [1, 3]. Soluble fibers dissolve or swell in water to form thick, gelatinous mixtures. Key examples include beta-glucans from oats and barley, pectins from apples and citrus fruits, and mucilages from psyllium husk and chia seeds [1]. When you mix psyllium husk or ground flaxseed in a glass of water, notice how it transforms into a viscous gel within minutes; exactly this gel-forming phenomenon occurs inside the stomach and upper small intestine [1, 3].',
              'পানিতে এদের আচরণের ওপর ভিত্তি করে খাদ্য আঁশকে প্রধানত দুটি ভাগে ভাগ করা হয়: দ্রবণীয় আঁশ এবং অদ্রবণীয় আঁশ [1, 3]। দ্রবণীয় আঁশ পানিতে মিশে গিয়ে জেলির মতো ঘন আঠালো পদার্থ তৈরি করে। ওটসের বিটা-গ্লুকান, আপেলের পেকটিন এবং ইসবগুলের ভুষির মিউসিলেজ হলো এর চমৎকার উদাহরণ [1]। পানিতে ইসবগুলের ভুষি ভিজিয়ে রাখলে যেমন কয়েক মিনিটের মধ্যে পুরো পানি থকথকে জেলে রূপ নেয়, ঠিক একইভাবে পাকস্থলী ও অন্ত্রের ভেতরেও এই দ্রবণীয় আঁশ একটি সুরক্ষাকারী জেল প্রাচীর তৈরি করে [1, 3]।'
            ),
            l(
              'This viscous gel exerts profound metabolic benefits: it forms an unstirred physical barrier that slows gastric emptying, slows the diffusion of digestive enzymes toward food particles, and blunts the rapid absorption of glucose [1, 2]. As a result, post-meal blood sugar and insulin spikes are smoothed out. Furthermore, viscous soluble fiber traps cholesterol-rich bile acid micelles in the intestine, carrying them out in the feces [1]. Depleted of recirculating bile, the liver must harvest cholesterol from the blood to synthesize fresh bile, effectively lowering circulating LDL cholesterol levels [1, 3].',
              'এই সান্দ্র জেল মানবদেহের জন্য এক জাদুকরী আশীর্বাদ: এটি পাকস্থলী থেকে খাদ্য খালি হওয়ার গতি ধীর করে দেয় এবং হজমের এনজাইমগুলোকে খাদ্যের সাথে ধীরে ধীরে মিশতে বাধ্য করে [1, 2]। ফলে খাবার খাওয়ার পর রক্তে হঠাৎ করে গ্লুকোজ ও ইনসুলিনের মাত্রা বিপজ্জনকভাবে বাড়ে না। এছাড়া এই জেল অন্ত্র থেকে ক্ষতিকর পিত্তরস ও কোলেস্টেরল আটকে ফেলে মলের সাথে বের করে দেয় [1]। হারানো পিত্তরস পূরণ করতে যকৃত তখন রক্ত থেকে অতিরিক্ত কোলেস্টেরল টেনে নেয়, যার ফলে রক্তের ক্ষতিকর এলডিএল কোলেস্টেরল কমে আসে [1, 3]।'
            ),
            l(
              'Insoluble fibers, in contrast, do not dissolve in water and do not form gels [1]. Prominent examples include cellulose, hemicellulose, and lignin found in wheat bran, brown rice bran, vegetable stems, and seed coats [1, 3]. Imagine insoluble fiber as tiny physical plant scaffolding or a botanical broom. It absorbs water like a sponge, adding weight and volume to fecal matter, which stretches the colonic muscular walls and stimulates rhythmic peristaltic contractions, promoting regular and comfortable bowel movements [1, 3].',
              'অপরদিকে অদ্রবণীয় আঁশ পানিতে গলে না এবং কোনো জেলও তৈরি করে না [1]। গমের ভুসি, লাল চালের কুঁড়া, শাকসবজির শক্ত শিরা ও ফলের খোসায় থাকা সেলুলোজ এবং লিগনিন হলো অদ্রবণীয় আঁশের উদাহরণ [1, 3]। একে কল্পনা করা যায় গাছের প্রাকৃতিক ঝাঁটা বা স্পঞ্জ হিসেবে। এটি পানিতে না গলে স্পঞ্জের মতো পানি শোষণ করে মলের আয়তন ও ওজন বাড়িয়ে দেয়, যা কোলনের পেশিকে উদ্দীপিত করে নিয়মিত কোষ্ঠ পরিষ্কার করতে সাহায্য করে [1, 3]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Anaerobic Fermentation: How Gut Microbes Transform Fiber', '৩. অবাত গাঁজন: অন্ত্রের অণুজীব কীভাবে আঁশকে শক্তিতে রূপান্তর করে'),
          paragraphs: [
            l(
              'Because human digestive enzymes are strictly limited to cleaving alpha-glycosidic bonds (such as the alpha-1,4 and alpha-1,6 linkages found in starch and glycogen), our gastrointestinal tract is completely powerless against the beta-glycosidic linkages that hold fiber polymers together [1, 3]. However, as undigested fiber enters the cecum and ascending colon, it meets an astonishing dense bioreactor: an anaerobic ecosystem containing tens of trillions of symbiotic bacteria [2, 4]. These bacterial species express thousands of specialized carbohydrate-active enzymes (CAZymes) capable of unlocking virtually any plant polysaccharide bond [4].',
              'আমাদের পরিপাকতন্ত্র কেবল শ্বেতসার বা গ্লাইকোজেনে থাকা সাধারণ আলফা-রাসায়নিক বন্ধন ভাঙতে পারে; ফাইবার তৈরিকারী জটিল বিটা-রাসায়নিক বন্ধন ভাঙার কোনো এনজাইম আমাদের দেহে নেই [1, 3]। কিন্তু অপাচ্য আঁশ যখন কোলনে গিয়ে পৌঁছায়, তখন সেখানে উপস্থিত ট্রিলিয়ন ট্রিলিয়ন অবাত ব্যাকটেরিয়ার বিশাল কারখানা কাজে নেমে পড়ে [2, 4]। এই উপকারী ব্যাকটেরিয়াগুলোর জিনোমে এমন হাজারো বিশেষ এনজাইম (CAZymes) থাকে যা মানুষের অগম্য সমস্ত জটিল উদ্ভিজ্জ বন্ধন নিমিষেই কেটে ফেলতে পারে [4]।'
            ),
            l(
              'In the oxygen-deprived environment of the large intestine, these microbes ferment fiber through anaerobic metabolic pathways [2, 4]. Fermentation yields gaseous byproducts (hydrogen, carbon dioxide, and in some individuals, methane) alongside organic molecules known as Short-Chain Fatty Acids (SCFAs) [2, 5]. The three primary SCFAs produced are Acetate (2 carbons), Propionate (3 carbons), and Butyrate (4 carbons), typically generated in a stable molar ratio of approximately 60% acetate, 20% propionate, and 20% butyrate [2, 5].',
              'অক্সিজেনবিহীন এই পরিবেশে ব্যাকটেরিয়াগুলো অবাত গাঁজন প্রক্রিয়ার মাধ্যমে আঁশ ভেঙে শক্তি সংগ্রহ করে [2, 4]। এই প্রক্রিয়ায় কিছু গ্যাস (হাইড্রোজেন, কার্বন ডাই অক্সাইড ও মিথেন) এবং অমূল্য কিছু উদ্বায়ী জৈব অ্যাসিড তৈরি হয় যাদের বলা হয় শর্ট-চেইন ফ্যাটি অ্যাসিড (SCFA) [2, 5]। এদের মধ্যে প্রধান তিনটি হলো: অ্যাসিটেট (২ কার্বন), প্রোপিওনেট (৩ কার্বন) এবং বিউটাইরেট (৪ কার্বন)। সুস্থ মানুষের কোলনে এদের স্বাভাবিক অনুপাত থাকে প্রায় ৬০% অ্যাসিটেট, ২০% প্রোপিওনেট এবং ২০% বিউটাইরেট [2, 5]।'
            ),
            l(
              'These short-chain fatty acids are rapidly absorbed by the cells lining the colon [4]. Far from being mere metabolic waste, SCFAs are potent signaling molecules and vital cellular fuels that orchestrate human metabolism, suppress systemic inflammation, and protect our vital organs [2, 4, 6]. In essence, when you consume dietary fiber, you are feeding your gut microbiota, and in exchange, your microbiota manufactures essential medicinal compounds that your own genome cannot produce [1, 4].',
              'উৎপন্ন হওয়া এই ফ্যাটি অ্যাসিডগুলো অন্ত্রের কোষ নিমেষেই শুষে নেয় [4]। এরা কোনো বর্জ্য নয়, বরং অমূল্য জৈব রাসায়নিক বার্তাবাহক ও জীবনরক্ষাকারী জ্বালানি যা পুরো দেহের বিপাক নিয়ন্ত্রণ করে, রোগপ্রতিরোধ ব্যবস্থা শান্ত রাখে এবং অভ্যন্তরীণ অঙ্গসমূহ রক্ষা করে [2, 4, 6]। সহজ কথায়: যখন আপনি শাকসবজি বা আঁশযুক্ত খাবার খান, আপনি মূলত আপনার অন্ত্রের বন্ধু ব্যাকটেরিয়াকে খাবার দিচ্ছেন; আর বিনিময়ে তারা আপনার জন্য এমন সব ওষুধ তৈরি করে দিচ্ছে যা মানুষের জিনোম নিজে কখনো তৈরি করতে পারত না [1, 4]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Butyrate, Colonocyte Energy & The Gut Barrier Shield', '৪. বিউটাইরেট, কোলন কোষের জ্বালানি ও প্রতিরক্ষামূলক দেয়াল'),
          paragraphs: [
            l(
              'Among the three principal SCFAs, Butyrate (C4) plays the most direct and crucial role in intestinal defense [4, 6]. The single-layer sheet of epithelial cells that lines your large intestine—called colonocytes—has an extraordinary metabolic preference: unlike most other human cells that rely primarily on circulating blood glucose for energy, colonocytes derive more than 60% to 70% of their total energy from burning luminal butyrate [4, 6]. Colonocytes actively pull butyrate from the intestinal fluid through specialized surface transporter channels (MCT1 and SMCT1) and shuttle it straight into their mitochondria, where it undergoes beta-oxidation to generate vast amounts of ATP [4, 6].',
              'তিনটি প্রধান ফ্যাটি অ্যাসিডের মধ্যে বিউটাইরেট (C4) অন্ত্রের সুরক্ষার ক্ষেত্রে সবচেয়ে গুরুত্বপূর্ণ ভূমিকা পালন করে [4, 6]। বৃহদান্ত্রের ভেতরের দেয়ালটি মাত্র এক স্তরের পাতলা কোষ বা কোলনোসাইট দিয়ে গঠিত। এই কোষগুলোর একটি আশ্চর্য বৈশিষ্ট্য রয়েছে: দেহের অন্যান্য কোষ রক্তে ভাসমান গ্লুকোজ থেকে শক্তি নিলেও, কোলন কোষ তার বেঁচে থাকার ৬০% থেকে ৭০% শক্তি সংগ্রহ করে সরাসরি এই বিউটাইরেট পুড়িয়ে [4, 6]! কোলনোসাইট তার বিশেষ পরিবাহক (MCT1 ও SMCT1) দিয়ে অন্ত্রের ভেতর থেকে বিউটাইরেট শুষে নিয়ে সরাসরি মাইটোকন্ড্রিয়ায় পাঠায়, যেখানে বিউটাইরেট জারিত হয়ে প্রচুর এটিপি শক্তি উৎপাদন করে [4, 6]।'
            ),
            l(
              'This continuous supply of butyrate-fueled energy empowers colonocytes to manufacture and seal tight-junction protein complexes (such as claudin-1, occludin, and ZO-1) [4, 6]. These tight junctions act like molecular rivets between adjacent cells, forming an impermeable physical barrier that prevents toxic bacterial fragments, undigested proteins, and inflammatory endotoxins (such as lipopolysaccharide or LPS) from leaking through the gut wall into the bloodstream [4]. When butyrate levels plummet due to a low-fiber diet, colonocytes suffer an energetic crisis, tight junctions degrade, and intestinal permeability rises—a condition commonly termed "leaky gut" that triggers chronic, low-grade systemic inflammation [1, 4].',
              'বিউটাইরেটের এই অবিরাম শক্তির ওপর নির্ভর করে কোলন কোষগুলো তাদের নিজেদের মাঝে টাইট-জাংশন নামক শক্তিশালী আণবিক পেরেক (যেমন ক্লডিন-১, অক্লুডিন ও ZO-1) তৈরি করে রাখে [4, 6]। এই পেরেকগুলো পাশাপাশি থাকা দুটি কোষের মাঝের ছিদ্র এমনভাবে সিল করে দেয় যাতে অন্ত্রের বিষাক্ত পদার্থ, ব্যাকটেরিয়ার বর্জ্য বা লিপোপলিস্যাকারাইড কোনোভাবেই রক্তে চুইয়ে পড়তে না পারে [4]। খাদ্যে আঁশের অভাব হলে কোলন কোষ শক্তির অভাবে ভুগে মারা যেতে থাকে, কোষের জোড় আলগা হয়ে যায় এবং ক্ষতিকর বিষাক্ত পদার্থ রক্তে ঢুকে সারা শরীরে দীর্ঘস্থায়ী প্রদাহ সৃষ্টি করে [1, 4]।'
            ),
            l(
              'Furthermore, burning butyrate requires substantial amounts of oxygen. By consuming nearly all available oxygen diffusing from local capillary beds, colonocytes maintain a microenvironment of extreme hypoxia (<1% oxygen) at the mucosal surface [4, 6]. This physiological hypoxia is essential: it creates the precise hospitable environment required by obligate anaerobic beneficial bacteria (such as Faecalibacterium prausnitzii and Bifidobacterium species) while depriving pathogenic, oxygen-tolerant bacteria (such as Salmonella and pathogenic E. coli) of the electron acceptors they need to proliferate [4, 6].',
              'তাছাড়া বিউটাইরেট পোড়াতে গিয়ে কোলন কোষ প্রচুর পরিমাণ অক্সিজেন খরচ করে ফেলে। ফলে অন্ত্রের ভেতরের দেয়ালে এক তীব্র অক্সিজেনহীন পরিবেশ (১% এরও কম অক্সিজেন) তৈরি হয় [4, 6]। এই অক্সিজেনহীন অবস্থা অত্যন্ত জরুরি: কারণ আমাদের সবচেয়ে উপকারী ব্যাকটেরিয়াগুলো কেবল অক্সিজেনহীন পরিবেশেই বেঁচে থাকতে পারে; অন্যদিকে রোগ সৃষ্টিকারী ক্ষতিকর ব্যাকটেরিয়াগুলো (যেমন সালমোনেলা বা ক্ষতিকর ই. কোলাই) অক্সিজেন ছাড়া বংশবৃদ্ধি করতে পারে না [4, 6]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Propionate & Acetate: The Liver, Brain & Metabolic Network', '৫. প্রোপিওনেট ও অ্যাসিটেট: যকৃত, মস্তিষ্ক ও বিপাকীয় নেটওয়ার্ক'),
          paragraphs: [
            l(
              'While butyrate remains largely confined to the colon wall, Propionate (C3) and Acetate (C2) enter the portal bloodstream to coordinate systemic whole-body metabolism [2, 5]. When propionate reaches the liver via the portal vein, hepatocytes clear over 90% of it in a single pass [2, 5]. Within hepatocytes, propionate enters the citric acid cycle as succinyl-CoA, providing an anaplerotic backbone that suppresses hepatic de novo lipogenesis (fat production) and helps regulate hepatic glucose output [2, 4]. Propionate also binds to sensory neural receptors in the portal vein wall, triggering neural signals to the brain that promote feelings of fullness and curb appetite [2, 4].',
              'বিউটাইরেট যেখানে অন্ত্রের প্রাচীরেই প্রায় পুরোটাই ব্যবহৃত হয়, সেখানে প্রোপিওনেট (C3) এবং অ্যাসিটেট (C2) রক্তে প্রবেশ করে সারা দেহের সামগ্রিক বিপাক নিয়ন্ত্রণ করে [2, 5]। প্রোপিওনেট পোর্টাল শিরার মাধ্যমে যকৃতে পৌঁছালে যকৃতের কোষগুলো এর ৯০% এরও বেশি নিজের ভেতর টেনে নেয় [2, 5]। সেখানে এটি শক্তি চক্রে প্রবেশ করে যকৃতে নতুন চর্বি তৈরি হওয়া বন্ধ করে এবং রক্তে বাড়তি গ্লুকোজ ছাড়া নিয়ন্ত্রণ করে [2, 4]। এছাড়াও প্রোপিওনেট পোর্টাল শিরার স্নায়ুকে উদ্দীপিত করে মস্তিষ্কে বার্তা পাঠায়, যা খাওয়ার পর দ্রুত পরিতৃপ্তি এনে অতিরিক্ত খাওয়ার লোভ কমিয়ে দেয় [2, 4]।'
            ),
            l(
              'Acetate, being the smallest SCFA, easily passes through the liver and enters the general arterial circulation, where it circulates at robust levels of 50 to 100 micromolar [2, 5]. Peripheral tissues—including the heart, skeletal muscles, and kidneys—take up acetate and convert it into acetyl-CoA to burn as clean energy [2, 5]. In adipose tissue, acetate binds to Free Fatty Acid Receptor 2 (FFAR2), acting as a metabolic brake that slows down the uncontrolled release of free fatty acids into the blood, protecting against ectopic fat accumulation in the liver and pancreas [2, 4].',
              'অ্যাসিটেট সবচেয়ে ক্ষুদ্র হওয়ায় এটি যকৃতের ফিল্টারিং পেরিয়ে সারা শরীরের রক্তে ছড়িয়ে পড়ে এবং রক্তের স্বাভাবিক মাত্রা থাকে ৫০ থেকে ১০০ মাইক্রোমোলার [2, 5]। আমাদের হৃৎপিণ্ড, কঙ্কালপেশি এবং কিডনি এই অ্যাসিটেটকে সরাসরি জ্বালানি হিসেবে ব্যবহার করে শক্তি তৈরি করে [2, 5]। চর্বি কোষে গিয়ে অ্যাসিটেট বিশেষ রিসেপ্টরের (FFAR2) মাধ্যমে অতিরিক্ত চর্বি ভেঙে রক্তে ট্রাইগ্লিসারাইড ছড়িয়ে পড়া নিয়ন্ত্রণ করে, যা ফ্যাটি লিভার ও অগ্ন্যাশয়ের ক্ষতি রোধ করে [2, 4]।'
            ),
            l(
              'Astonishingly, acetate even crosses the selective blood-brain barrier to directly reach the hypothalamus, the master appetite control center of the brain [2, 4]. In the hypothalamus, acetate activates pro-opiomelanocortin (POMC) neurons that signal satiety, naturally turning off hunger sensations hours after a fiber-rich meal [2, 4]. Thus, dietary fiber establishes a magnificent communication bridge across the entire human body: microbes in the lower gut speak directly to the liver, fat tissue, and the brain, naturally orchestrating energy balance and metabolic health [1, 2, 4].',
              'এমনকি অ্যাসিটেট মস্তিষ্কের রক্ত-মস্তিষ্ক প্রাচীর ভেদ করে সোজা হাইপোথ্যালামাসে পৌঁছে যায়, যা আমাদের ক্ষুধার প্রধান নিয়ন্ত্রণ কেন্দ্র [2, 4]। মস্তিষ্কে গিয়ে এটি ক্ষুধা নিবারণকারী স্নায়ুকোষকে সক্রিয় করে তোলে, যার ফলে আঁশযুক্ত খাবার খাওয়ার বহু ঘণ্টা পরেও স্বাভাবিক তৃপ্তি বজায় থাকে এবং ঘনঘন মিষ্টি বা খাবার খাওয়ার ইচ্ছা হয় না [2, 4]। এভাবেই খাদ্য আঁশ আমাদের পেটের অণুজীবের সাথে যকৃত, চর্বি কোষ এবং মস্তিষ্কের এক নিবিড় মেলবন্ধন গড়ে তোলে যা সুস্থ ও স্বাভাবিক জীবনধারণের মূল চাবিকাঠি [1, 2, 4]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Clinical Intake Targets & High-Yield Food Sources', '৬. দৈনিক গ্রহণের লক্ষ্যমাত্রা ও উচ্চ-আঁশযুক্ত খাদ্যতালিকা'),
          paragraphs: [
            l(
              'Major global health authorities—including the Institute of Medicine (IOM), the World Health Organization (WHO), and the European Food Safety Authority (EFSA)—unanimously recommend a daily dietary fiber intake of 25 to 38 grams per day for healthy adults, or approximately 14 grams for every 1,000 kilocalories consumed [1, 3]. Tragically, the average modern human consuming an industrialized diet consumes barely 12 to 15 grams per day—representing a chronic "fiber gap" of more than 50% [1]. This widespread fiber deficiency directly correlates with rising global rates of obesity, type 2 diabetes, colorectal cancer, diverticular disease, and cardiovascular morbidity [1, 3].',
              'বিশ্ব স্বাস্থ্য সংস্থা (WHO) এবং আন্তর্জাতিক পুষ্টি নির্দেশিকা অনুসারে সুস্থ প্রাপ্তবয়স্ক মানুষের জন্য দৈনিক খাদ্য আঁশের সুপারিশকৃত পরিমাণ হলো ২৫ থেকে ৩৮ গ্রাম (অথবা প্রতি ১,০০০ কিলোক্যালরি খাবারের জন্য প্রায় ১৪ গ্রাম) [1, 3]। অথচ অত্যন্ত দুঃখজনক বিষয় হলো আধুনিক প্রক্রিয়াজাত খাদ্যাভ্যাসের কারণে সাধারণ মানুষ দৈনিক মাত্র ১২ থেকে ১৫ গ্রাম আঁশ গ্রহণ করতে পারে—যা প্রয়োজনের তুলনায় ৫০% এরও কম [1]! খাদ্যে আঁশের এই তীব্র ঘাটতিই বিশ্বজুড়ে স্থূলতা, টাইপ-২ ডায়াবেটিস, কোলন ক্যান্সার, রক্তনালীর রোগ এবং হৃদরোগের মহামারির অন্যতম প্রধান কারণ [1, 3]।'
            ),
            l(
              'Bridging this gap requires intentionally designing meals around fiber-dense, unrefined whole foods [1, 3]. Excellent rich sources include: cooked lentils and beans (15–16 g per cup), rolled oats (4 g per cup cooked), chia seeds (10 g per 2 tablespoons), avocados (10 g per fruit), raspberries and blackberries (8 g per cup), pears and apples with skin (4–5 g each), and cooked artichokes (7 g each) [1, 3]. Resistant starch can also be easily incorporated into daily life simply by cooking starchy foods (such as potatoes, rice, and legumes) and allowing them to cool before eating; cooling causes starch polymers to crystallize into digestion-resistant forms that nourish colonic bacteria [1, 3].',
              'এই ঘাটতি পূরণ করতে হলে প্রতিটি প্রধান খাবারে সচেতনভাবে আঁশযুক্ত প্রাকৃতিক খাবার রাখতে হবে [1, 3]। উৎকৃষ্ট উৎসের মধ্যে রয়েছে: এক বাটি রান্না করা ডাল বা ছোলা (১৫-১৬ গ্রাম), ওটস (৪ গ্রাম), চিয়া সিড (২ চামচে ১০ গ্রাম), মিষ্টি আলু, খোসাসহ আপেল ও পেয়ারা (৪-৫ গ্রাম), এবং বিভিন্ন শাকসবজি [1, 3]। তাছাড়া ভাত বা আলু রান্না করার পর কিছুটা ঠান্ডা করে খেলে এদের ভেতরের শ্বেতসার ক্রিস্টাল তৈরি করে প্রতিরোধী শ্বেতসারে (Resistant Starch) পরিণত হয়, যা ক্ষুদ্রান্ত্রে না ভেঙে সরাসরি কোলনে গিয়ে উপকারী ব্যাকটেরিয়ার মহাভোজে পরিণত হয় [1, 3]।'
            ),
            l(
              'When increasing dietary fiber, clinical practice demands a gradual titration over two to four weeks alongside generous water intake [1, 3]. Sudden massive spikes in fiber intake can overwhelm an unadapted microbiome, generating transient gas, bloating, and abdominal cramping [1, 3]. By scaling up gradually, colonic bacteria expand their enzymatic capacity smoothly, delivering maximum systemic metabolic protection without gastrointestinal distress [1, 3].',
              'চিকিৎসা বিজ্ঞানের একটি জরুরি সতর্কতা হলো: খাবারে আঁশের পরিমাণ হঠাৎ করে না বাড়িয়ে ২ থেকে ৪ সপ্তাহ ধরে ধীরে ধীরে বাড়াতে হবে এবং সাথে পর্যাপ্ত পানি পান করতে হবে [1, 3]। কারণ অন্ত্রের ব্যাকটেরিয়া হঠাৎ প্রচুর আঁশ পেলে প্রচুর গ্যাস তৈরি করে পেট ফাঁপা বা অস্বস্তি তৈরি করতে পারে। ধীরে ধীরে মাত্রা বাড়ালে ব্যাকটেরিয়াগুলো সহজে নিজেদের মানিয়ে নিতে পারে এবং কোনো ঝামেলা ছাড়াই পুরো সুফল পাওয়া যায় [1, 3]।'
            ),
          ],
          bullets: [
            l('Aim for 25–38 g/day (14 g / 1,000 kcal) from diverse whole plant foods [1, 3].', 'প্রতিদিন ২৫ থেকে ৩৮ গ্রাম আঁশ বিভিন্ন উদ্ভিজ্জ উৎস থেকে নিশ্চিত করুন [1, 3]।'),
            l('Combine soluble viscous fibers (oats, psyllium) with insoluble bulking fibers (wheat bran, seeds) [1, 3].', 'দ্রবণীয় সান্দ্র আঁশ এবং অদ্রবণীয় আঁশ উভয়ই খাদ্যে রাখুন [1, 3]।'),
            l('Butyrate directly fuels colonocytes, maintains epithelial hypoxia, and seals tight junctions [4, 6].', 'বিউটাইরেট কোলন কোষে শক্তি যোগায়, দেয়াল মজবুত রাখে এবং প্রদাহ প্রতিরোধ করে [4, 6]।'),
            l('Propionate regulates hepatic gluconeogenesis; acetate signals satiety in the hypothalamus [2, 4].', 'প্রোপিওনেট যকৃতের মেদ নিয়ন্ত্রণ করে এবং অ্যাসিটেট মস্তিষ্কে অতিরিক্ত ক্ষুধা কমায় [2, 4]।'),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'introduction',
          heading: l('Polysaccharide Biochemistry & Physicochemical Rheology', 'পলিস্যাকারাইড প্রাণরসায়ন ও ভৌত-রাসায়নিক রিওলজি'),
          paragraphs: [
            l(
              'Dietary fibers are non-starch polysaccharides and non-carbohydrate polymers defined structurally by resistance to human upper GI endo- and exo-glycosidases [1, 3]. Cellulose consists of unbranched linear chains of beta-(1,4)-D-glucopyranose units stabilized by intra- and inter-chain hydrogen bonds, creating crystalline microfibrils impermeable to water and resistant to physical deformation [1, 3]. Hemicelluloses comprise heterogeneous branched polymers featuring beta-(1,4) backbones of xylose, mannose, or galactose, decorated with arabinose, glucuronic acid, and acetyl side chains that dictate structural flexibility and water-holding capacity [1, 3].',
              'খাদ্য আঁশ হলো অপাচ্য নন-স্টার্চ পলিস্যাকারাইড ও লিগনিন যা মানুষের মুখের লালা ও অগ্ন্যাশয়ের কোনো এনজাইম দ্বারা ভাঙা সম্ভব নয় [1, 3]। সেলুলোজে হাজারো ডি-গ্লুকোজ অণু বিটা-(১,৪) বন্ধন দ্বারা যুক্ত হয়ে সোজা ও শক্ত শিকল তৈরি করে, যা শক্তিশালী হাইড্রোজেন বন্ধন দ্বারা একে অপরের সাথে যুক্ত হয়ে পানির জন্য দুর্ভেদ্য ক্রিস্টাল মাইক্রোফাইব্রিল গঠন করে [1, 3]। অপরদিকে হেমিসেলুলোজ হলো জাইলিন, ম্যানোজ বা গ্যালাকটোজের বিটা-(১,৪) কাঠামোর সাথে অ্যারাবিনোজ ও গ্লুকুরোনিক অ্যাসিডের শাখা-প্রশাখা বিশিষ্ট বিষম পলিমার, যা পানির ধারণক্ষমতা নির্ধারণ করে [1, 3]।'
            ),
            l(
              'Viscous, gel-forming fibers feature specific chemical linkages that interact intensely with aqueous solvent molecules [1, 3]. Pectins consist of alpha-(1,4)-linked D-galacturonic acid backbones interspersed with rhamnose residues, whose degree of methyl-esterification determines gelation kinetics in the presence of calcium ions or low pH [1, 3]. Beta-(1,3)(1,4)-D-glucans from cereals present mixed linkages that break up crystalline symmetry, producing high-viscosity solutions at low shear rates [1, 3]. This shear-thinning pseudoplastic rheology retards convection in the intestinal lumen, thickening the unstirred water layer and creating a physical diffusion barrier that impedes substrate-enzyme interactions for alpha-amylase, pancreatic lipase, and brush-border disaccharidases [1, 3].',
              'সান্দ্র জেল-গঠনকারী আঁশগুলো পানিতে অত্যন্ত শক্তিশালী মিথস্ক্রিয়া ঘটায় [1, 3]। পেকটিনে গ্যালাকটিউরোনিক অ্যাসিডের শিকলে মিথাইল-এস্টারের মাত্রা ক্যালসিয়াম আয়নের উপস্থিতিতে জেল তৈরির গতি নির্ধারণ করে [1, 3]। ওটস ও বার্লির বিটা-(১,৩)(১,৪)-ডি-গ্লুকানে মিশ্র বন্ধন থাকায় তা স্ফটিক তৈরি না করে পানিতে উচ্চ সান্দ্রতার জেল দ্রবণ তৈরি করে [1, 3]। এই সান্দ্র জেল অন্ত্রের অভ্যন্তরীণ তরলের চলাচল মন্থর করে দেয় এবং অগ্ন্যাশয়ের লাইপেজ, অ্যামাইলেজ ও ব্রাশ-বর্ডার এনজাইমের সাথে খাদ্যের সংস্পর্শ বিলম্বিত করে [1, 3]।'
            ),
            l(
              'In the distal ileum, this physical entrapment blocks micellar contact with enterocyte apical membranes, significantly inhibiting active bile acid transport via the apical sodium-dependent bile acid transporter (ASBT / SLC10A2) [1, 3]. Interrupted enterohepatic recirculation forces hepatic 7-alpha-hydroxylase (CYP7A1) upregulation to convert intracellular cholesterol into primary bile acids (cholic and chenodeoxycholic acids), which consequently triggers sterol regulatory element-binding protein 2 (SREBP-2) activation and cell-surface LDL receptor clearance of plasma LDL-C [1, 3].',
              'ক্ষুদ্রান্ত্রের শেষ প্রান্তে এই জেল পিত্তরসের মাইসেলিকে এন্টারোসাইটের ASBT পরিবাহকের সংস্পর্শে আসতে বাধা দেয়, ফলে পিত্তলবণের পুনঃশোষণ বন্ধ হয়ে যায় [1, 3]। দেহ থেকে পিত্তরস মলের সাথে অপসারিত হওয়ায় যকৃতের CYP7A1 এনজাইম সক্রিয় হয়ে রক্ত থেকে কোলেস্টেরল টেনে নিয়ে নতুন পিত্তরস তৈরি করতে বাধ্য হয়, যার ফলে রক্তে এথেরোজেনিক এলডিএল কোলেস্টেরলের মাত্রা উল্লেখযোগ্যভাবে হ্রাস পায় [1, 3]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Anaerobic Microbial CAZyme Architecture & Fermentation Kinetics', 'অবাত অণুজীব ক্যাজাইম ও গাঁজন রাসায়নিক গতিবিদ্যা'),
          paragraphs: [
            l(
              'The human distal gut harbors up to 1,000 bacterial species, predominantly from the phyla Bacteroidetes, Firmicutes, Actinobacteria, and Verrucomicrobia [4]. Unlike the human genome, which encodes fewer than twenty carbohydrate-cleaving enzymes, the collective colonic microbiome encodes thousands of Carbohydrate-Active Enzymes (CAZymes), cataloged into glycoside hydrolases (GHs), polysaccharide lyases (PLs), and carbohydrate esterases (CEs) organized in Polysaccharide Utilization Loci (PULs) [4]. Bacteroides thetaiotaomicron, for example, dedicates nearly 20% of its genome to sensing and degrading diverse complex glycans [4].',
              'মানবদেহের কোলনে প্রায় ১,০০০ প্রজাতির ব্যাকটেরিয়া বসবাস করে যাদের সিংহভাগ ব্যাকটেরয়েডিস, ফার্মিকিউটিস এবং অ্যাক্টিনোব্যাকটেরিয়া গোত্রের অন্তর্ভুক্ত [4]। মানুষের নিজস্ব ডিএনএ-তে যেখানে শর্করা ভাঙার মাত্র ২০টির মতো এনজাইম রয়েছে, সেখানে অন্ত্রের ব্যাকটেরিয়ার জিনোমে হাজার হাজার ক্যাজাইম (CAZymes) থাকে যা গ্লাইকোসাইড হাইড্রোলেজ এবং পলিস্যাকারাইড ইউটিলাইজেশন লোকাই (PUL) হিসেবে সাজানো থাকে [4]। ব্যাকটেরয়েডেস থিটাইওটাওমাইক্রন নামক একক ব্যাকটেরিয়াই তার জিনোমের প্রায় ২০% অংশ জটিল আঁশ ভাঙার কাজে নিয়োজিত রাখে [4]।'
            ),
            l(
              'Polymeric fiber deconstruction proceeds through sequential cooperative actions: primary degraders (e.g., Ruminococcus bromii for resistant starch; Bacteroides species for xylans) cleave complex polymers into shorter oligosaccharides and monosaccharides via surface-anchored endoglucanases [4]. Secondary fermenters then import these fragments through TonB-dependent outer membrane receptors, funneling hexoses and pentoses through the Embden-Meyerhof-Parnas pathway or the pentose phosphate pathway into pyruvate [2, 4].',
              'জটিল আঁশ ভাঙার কাজটি ব্যাকটেরিয়ারা অত্যন্ত সুশৃঙ্খল দলগতভাবে সম্পন্ন করে: প্রাইমারি ডিগ্রেডার ব্যাকটেরিয়াগুলো (যেমন প্রতিরোধী শ্বেতসারের জন্য রূমিনোকক্কাস ব্রোমাই) জটিল পলিমারগুলোকে ছোট অলিগোস্যাকারাইডে পরিণত করে [4]। এরপর অন্যান্য সেকেন্ডারি ব্যাকটেরিয়া এই টুকরোগুলো ভেতরে টেনে নিয়ে অবাত গ্লাইকোলাইসিস ও পেন্টোজ ফসফেট পথের মাধ্যমে পাইরুভেটে রূপান্তর করে [2, 4]।'
            ),
            l(
              'Under strictly anaerobic conditions, pyruvate serves as the branch-point substrate for three distinct bacterial metabolic pathways [2, 4]: the Wood-Ljungdahl and acetyl-CoA pathways for Acetate generation; the succinate and acrylate pathways for Propionate synthesis (prominent in Bacteroidetes and Negativicutes); and the butyryl-CoA:acetate CoA-transferase pathway for Butyrate formation (dominant in Firmicutes, notably Faecalibacterium prausnitzii, Roseburia intestinalis, and Eubacterium rectale) [2, 4]. Cross-feeding kinetics are rampant: acetate produced by Bacteroidetes is actively imported and consumed by Firmicutes to synthesize butyrate, highlighting intense metabolic syntrophy [4].',
              'এই অবাত পরিবেশে পাইরুভেট থেকে তিনটি ভিন্ন জৈব রাসায়নিক পথে এসসিএফএ উৎপন্ন হয় [2, 4]: উড-লুংডাল ও অ্যাসিটাইল-কোএ পথে অ্যাসিটেট; সাকসিনেট ও অ্যাক্রিলেট পথে প্রোপিওনেট; এবং বিউটাইরাইল-কোএ:অ্যাসিটেট কোএ-ট্রান্সফারেজ পথে বিউটাইরেট তৈরি হয় (প্রধানত ফিকালিব্যাকটেরিয়াম প্রাউসনিটজি ও রোজবুরিয়া দ্বারা) [2, 4]। এখানে এক ব্যাকটেরিয়ার বর্জ্য অন্য ব্যাকটেরিয়ার খাদ্য হয়: যেমন ব্যাকটেরয়েডের তৈরি অ্যাসিটেটকে খাদ্য হিসেবে গ্রহণ করে ফার্মিকিউটিস ব্যাকটেরিয়া অমূল্য বিউটাইরেট তৈরি করে [4]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Apical Monocarboxylate Transport & Substrate Flux', 'এপিকাল মনোকার্বক্সাইলেট পরিবহন ও সাবস্ট্রেট প্রবাহ'),
          paragraphs: [
            l(
              'Colonic luminal concentrations of total SCFAs range from 70 to 140 mM in the proximal colon, declining to 20 to 70 mM in the distal colon as fermentable substrate is progressively exhausted [2, 5]. Because the luminal pH of the caecum is acidic (5.5–6.5) due to organic acid accumulation, a fraction of SCFAs exists in non-ionized, lipid-soluble form (pKa ~ 4.8), permitting passive non-ionic diffusion across apical lipid bilayers [2, 4]. However, the predominant ionized carboxylate anions require carrier-mediated secondary active transport [4, 6].',
              'প্রক্সিমাল কোলনে এসসিএফএ-এর মোট ঘনত্ব থাকে ৭০ থেকে ১৪০ মিলি-মোলার, যা দূরবর্তী কোলনে সাবস্ট্রেট ফুরিয়ে আসার সাথে সাথে কমে ২০-৭০ মিলি-মোলারে নেমে আসে [2, 5]। অম্লীয় পিএইচ (৫.৫-৬.৫)-এর কারণে কিছু এসসিএফএ চার্জবিহীন অবস্থায় কোষঝিল্লি ভেদ করে সরাসরি ঢুকতে পারে, তবে অধিকাংশ চার্জযুক্ত অ্যানায়ন প্রবেশের জন্য বিশেষ পরিবহন প্রোটিনের প্রয়োজন হয় [2, 4]।'
            ),
            l(
              'Apical entry into colonocytes is driven by two primary transport systems: Monocarboxylate Transporter 1 (MCT1 / SLC16A1), an electroneutral proton-coupled cotransporter ($1 \text{ SCFA}^- : 1 \text{ H}^+$), and Sodium-Coupled Monocarboxylate Transporter 1 (SMCT1 / SLC5A8), an electrogenic sodium-dependent symporter ($2 \text{ Na}^+ : 1 \text{ SCFA}^-$) powered by the basolateral Na+/K+ ATPase gradient [4, 6]. SMCT1 acts as a high-affinity scavenger capable of transporting butyrate and propionate even at low micromolar distal luminal concentrations, simultaneously stimulating electroneutral fluid and NaCl absorption across the colonic mucosa [4, 6].',
              'কোলন কোষে এসসিএফএ প্রবেশের জন্য দুটি প্রধান ট্রান্সপোর্টার কাজ করে: প্রথমটি হলো MCT1 (SLC16A1), যা একটি প্রোটনের সাথে একটি এসসিএফএ অ্যানায়নকে কোষে প্রবেশ করায়; দ্বিতীয়টি হলো SMCT1 (SLC5A8), যা সোডিয়াম গ্রেডিয়েন্ট ব্যবহার করে দুটি সোডিয়াম আয়নের সাথে একটি এসসিএফএ টেনে নেয় [4, 6]। SMCT1 অত্যন্ত শক্তিশালী হওয়ায় দূরবর্তী কোলনে বিউটাইরেটের ঘনত্ব কমে গেলেও তা নিপুণভাবে কোষের ভেতরে টেনে নিয়ে কোলনে পানি ও লবণের নিখুঁত শোষণ বজায় রাখে [4, 6]।'
            ),
            l(
              'Once inside the colonocyte, the fates of the three SCFAs diverge drastically [2, 4, 6]. Butyrate is rapidly activated to butyryl-CoA by mitochondrial butyryl-CoA synthetase and channeled straight into the mitochondrial matrix for fatty acid beta-oxidation [4, 6]. Unmetabolized acetate and propionate exit the basolateral membrane via basolateral MCT4 (SLC16A3) and enter mesenteric venous drainage, flowing directly into the hepatic portal vein [2, 5].',
              'কোষে প্রবেশের পর তিনটি ফ্যাটি অ্যাসিডের পরিণতি সম্পূর্ণ ভিন্ন হয় [2, 4, 6]। বিউটাইরেট তাত্ক্ষণিকভাবে কোষে বিউটাইরাইল-কোএ সিন্থেটেজ দিয়ে সক্রিয় হয়ে মাইটোকন্ড্রিয়াল বিটা-জারণে প্রবেশ করে এটিপি তৈরি করে [4, 6]। অপরপক্ষে অবশিষ্ট অ্যাসিটেট ও প্রোপিওনেট বেসোলেটারাল MCT4 ট্রান্সপোর্টার দিয়ে বের হয়ে মেসেন্টেরিক শিরার মাধ্যমে সোজা পোর্টাল রক্তে প্রবেশ করে যকৃতে পৌঁছে যায় [2, 5]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Colonocyte Mitochondrial Beta-Oxidation & Hypoxia Dynamics', 'কোলনোসাইটের মাইটোকন্ড্রিয়াল বিটা-জারণ ও হাইপোক্সিয়া গতিবিদ্যা'),
          paragraphs: [
            l(
              'Differentiated luminal colonocytes display a unique metabolic phenotype: they rely on short-chain fatty acid beta-oxidation rather than glucose for >70% of their baseline respiration [4, 6]. Inside the mitochondrial matrix, butyryl-CoA is dehydrogenated by short-chain acyl-CoA dehydrogenase (SCAD / ACADS), yielding crotonyl-CoA while reducing FAD to FADH2 [4, 6]. Hydration by enoyl-CoA hydratase yields 3-hydroxybutyryl-CoA, followed by NAD+-dependent oxidation to acetoacetyl-CoA, which thiolase cleaves into two molecules of acetyl-CoA: $\text{Butyrate} + 2 \text{ CoA} + \text{FAD} + \text{NAD}^+ + \text{ATP} \rightarrow 2 \text{ Acetyl-CoA} + \text{FADH}_2 + \text{NADH} + \text{AMP} + \text{PP}_i$ [4, 6].',
              'পরিপক্ব কোলন কোষগুলোর শক্তি উৎপাদন ব্যবস্থা মানবদেহের অন্যান্য কোষের চেয়ে সম্পূর্ণ স্বতন্ত্র: এরা গ্লুকোজের বদলে বিউটাইরেটের বিটা-জারণের ওপর ৭০% নির্ভরশীল [4, 6]। মাইটোকন্ড্রিয়ার ভেতরে শর্ট-চেইন অ্যাসাইল-কোএ ডিহাইড্রোজিনেজ (SCAD) এনজাইম বিউটাইরেটকে ক্রোটোনাইল-কোএ এবং পরবর্তীতে অ্যাসিটোঅ্যাসিটাইল-কোএ-তে রূপান্তরিত করে। থায়োলেজ এনজাইমের ক্রিয়ায় প্রতি অণু বিউটাইরেট থেকে দুটি অ্যাসিটাইল-কোএ অণু তৈরি হয় যা সাইট্রিক অ্যাসিড চক্রে প্রবেশ করে [4, 6]।'
            ),
            l(
              'Each turn of this pathway generates abundant reducing equivalents (NADH and FADH2) that drive Complex I, II, and IV of the mitochondrial electron transport chain, reducing molecular oxygen ($O_2$) to $H_2O$ and synthesizing 27 net ATP molecules per mole of butyrate consumed [4, 6]. This ferocious consumption of oxygen by high-flux beta-oxidation drives mucosal oxygen tension down to <1% O2 (physiologic hypoxia), which stabilizes the transcription factor Hypoxia-Inducible Factor 1-alpha (HIF-1alpha) [4, 6].',
              'এই চক্রে প্রচুর পরিমাণ NADH ও FADH2 উৎপন্ন হয় যা ইলেকট্রন ট্রান্সপোর্ট চেইনের মধ্য দিয়ে প্রবাহিত হয়ে প্রতি অণু বিউটাইরেট থেকে মোট ২৭ অণু এটিপি তৈরি করে [4, 6]। এই বিপুল জারণ প্রক্রিয়ায় মাইটোকন্ড্রিয়া স্থানীয় কৈশিক জালিকা থেকে আসা অক্সিজেন দ্রুত খরচ করে ফেলে, যার ফলে কোলন প্রাচীরে চরম শারীরবৃত্তীয় হাইপোক্সিয়া (<১% O2) তৈরি হয়। এই অক্সিজেনহীনতা কোষের হাইপোক্সিয়া-ইন্ডিউসিবল ফ্যাক্টর ১-আলফা (HIF-1alpha) প্রোটিনকে অক্ষত ও সক্রিয় রাখে [4, 6]।'
            ),
            l(
              'Active HIF-1alpha upregulates barrier protective target genes, including claudin-1, intestinal trefoil factor (TFF3), and multidrug resistance protein 1 (MDR1), while suppressing inducible nitric oxide synthase (iNOS) [4, 6]. In the absence of luminal butyrate (e.g., during low-fiber intake or antibiotic dysbiosis), colonocytes switch metabolically to anaerobic glycolysis, reducing oxygen consumption [4]. Oxygen diffuses back into the lumen, breaking hypoxia, activating iNOS, and generating nitrate and oxygen electron acceptors that fuel the explosive overgrowth of facultative dysbiotic pathogens such as Salmonella enterica and adherent-invasive Escherichia coli [4, 6].',
              'সক্রিয় HIF-1alpha টাইট-জাংশন প্রোটিন (ক্লডিন-১), মিউকাস সুরক্ষাকারী ট্রেফয়েল ফ্যাক্টর (TFF3) এবং প্রতিরক্ষামূলক জিন চালু রাখে এবং প্রদাহ সৃষ্টিকারী iNOS এনজাইমকে দমন করে [4, 6]। কিন্তু খাবারে ফাইবার না থাকলে কোলন কোষে বিউটাইরেট ফুরিয়ে যায়; কোষ তখন গ্লুকোজ পোড়াতে বাধ্য হয় এবং অক্সিজেন খরচ বন্ধ করে দেয় [4]। ফলে অন্ত্রের ভেতর অক্সিজেন চুইয়ে পড়ে, হাইপোক্সিয়া ভেঙে যায় এবং ক্ষতিকর প্যাথোজেনিক ব্যাকটেরিয়া (যেমন সালমোনেলা ও ক্ষতিকর ই. কোলাই) অক্সিজেনের সাহায্য নিয়ে দ্রুত বংশবৃদ্ধি করে অন্ত্রে প্রদাহ তৈরি করে [4, 6]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('G-Protein Coupled Receptor Signaling: FFAR2, FFAR3 & Incretin Dynamics', 'জি-প্রোটিন যুক্ত রিসেপ্টর সংকেত: FFAR2, FFAR3 ও ইনক্রেটিন গতিবিদ্যা'),
          paragraphs: [
            l(
              'Beyond their role as oxidative substrates, SCFAs serve as high-affinity ligands for specialized G-protein coupled cell-surface receptors: Free Fatty Acid Receptor 2 (FFAR2 / GPR43) and Free Fatty Acid Receptor 3 (FFAR3 / GPR41) [2, 4]. FFAR2 displays the potency order acetate = propionate > butyrate and couples dualistically to both Gα(i/o) (inhibiting adenylyl cyclase) and Gα(q/11) (activating phospholipase C and intracellular Ca²⁺ flux) [2, 4]. In contrast, FFAR3 displays the potency order propionate ≥ butyrate > acetate and couples exclusively through Gα(i/o) [2, 4].',
              'শক্তি উৎপাদনের পাশাপাশি এসসিএফএ-সমূহ কোষঝিল্লির বিশেষ জি-প্রোটিন রিসেপ্টরের উচ্চ-ক্ষমতাসম্পন্ন লিগ্যান্ড হিসেবে কাজ করে: ফ্রি ফ্যাটি অ্যাসিড রিসেপ্টর ২ (FFAR2 / GPR43) এবং ফ্রি ফ্যাটি অ্যাসিড রিসেপ্টর ৩ (FFAR3 / GPR41) [2, 4]। FFAR2 অ্যাসিটেট ও প্রোপিওনেট দ্বারা সবচেয়ে বেশি উদ্দীপিত হয় এবং কোষের ভেতরে ক্যালসিয়াম আয়ন সংকেত পাঠায় [2, 4]। অন্যদিকে FFAR3 প্রোপিওনেট ও বিউটাইরেট দ্বারা সক্রিয় হয়ে কোষের অ্যাডিনাইল সাইক্লেজ এনজাইমকে নিয়ন্ত্রিত রাখে [2, 4]।'
            ),
            l(
              'In the distal ileum and colonic mucosa, FFAR2 and FFAR3 are abundantly expressed on enteroendocrine L-cells [2, 4]. SCFA binding triggers intracellular Ca²⁺ mobilization and protein kinase C activation, stimulating exocytosis of the potent anorexigenic and insulinotropic incretin hormones Glucagon-Like Peptide-1 (GLP-1) and Peptide YY (PYY) [2, 4]. Circulating GLP-1 augments glucose-dependent insulin secretion from pancreatic beta-cells while suppressing glucagon from alpha-cells; PYY acts on hypothalamic Y2 receptors and the enteric "ileal brake" to delay gastric motility and induce satiety [2, 4].',
              'কোলনের এন্টারোএন্ডোক্রাইন এল-কোষের গায়ে এই FFAR2 ও FFAR3 রিসেপ্টর প্রচুর পরিমাণে থাকে [2, 4]। এসসিএফএ যখন এদের সাথে যুক্ত হয়, তখন এল-কোষ থেকে জীবনরক্ষাকারী দুটি ইনক্রেটিন হরমোন রক্তে নির্গত হয়: গ্লুকাগন-লাইক পেপটাইড-১ (GLP-1) এবং পেপটাইড ওয়াই-ওয়াই (PYY) [2, 4]। GLP-1 অগ্ন্যাশয় থেকে ইনসুলিন নিঃসরণ বাড়িয়ে রক্তের চিনি দ্রুত কমায়; আর PYY খাদ্যনালীর গতি মন্থর করে মস্তিষ্কে দীর্ঘস্থায়ী তৃপ্তি তৈরি করে [2, 4]।'
            ),
            l(
              'In white adipose tissue, FFAR2 activation by systemic acetate suppresses hormone-sensitive lipase (HSL) through Gα(i)-mediated cAMP inhibition, attenuating baseline adipocyte lipolysis and circulating free fatty acid (FFA) flux [2, 4]. This anti-lipolytic action prevents lipotoxic fat accumulation in liver and skeletal muscle, mitigating peripheral insulin resistance [2, 4]. Simultaneously, propionate promotes uncoupling protein 1 (UCP1) expression in brown and beige adipose depots, stimulating non-shivering thermogenesis and systemic energy expenditure [2, 4].',
              'শ্বেত চর্বি কোষে অ্যাসিটেট যখন FFAR2-এর সাথে যুক্ত হয়, তখন তা হরমোন-সংবেদনশীল লাইপেজ (HSL) এনজাইমকে শান্ত করে দেয়, ফলে রক্তে ক্ষতিকর ফ্রি ফ্যাটি অ্যাসিডের নিঃসরণ বন্ধ হয় [2, 4]। এর ফলে লিভার ও কঙ্কালপেশিতে অতিরিক্ত চর্বি জমতে পারে না এবং ইনসুলিন রেজিস্ট্যান্স দূর হয় [2, 4]। একইসাথে প্রোপিওনেট ব্রাউন ফ্যাটে UCP1 সক্রিয় করে অপ্রয়োজনীয় ক্যালরি তাপে পরিণত করে দেহের বিপাকীয় হার বৃদ্ধি করে [2, 4]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Clinical Carbohydrate Metrology & Therapeutic Dietetics', 'ক্লিনিক্যাল কার্বোহাইড্রেট পরিমাপ ও পথ্যবিজ্ঞান'),
          paragraphs: [
            l(
              'In clinical practice, total dietary fiber is determined using standard AOAC enzymatic-gravimetric methods (e.g., AOAC 985.29 / 991.43), which quantify soluble and insoluble non-starch polysaccharides alongside resistant starch and non-digestible oligosaccharides [1, 3]. Daily dietary fiber recommendations by the National Academy of Medicine specify an Adequate Intake (AI) of 38 g/day for men aged 19–50 and 25 g/day for women aged 19–50, scaling down to 30 g/day and 21 g/day respectively after age 50 [1, 3].',
              'ক্লিনিক্যাল ল্যাবরেটরিতে খাদ্যের মোট ফাইবার নির্ধারণের জন্য আন্তর্জাতিক AOAC এনজাইমেটিক পদ্ধতি ব্যবহৃত হয়, যা দ্রবণীয় ও অদ্রবণীয় পলিস্যাকারাইড, প্রতিরোধী শ্বেতসার এবং অপাচ্য অলিগোস্যাকারাইড নিখুঁতভাবে পরিমাপ করে [1, 3]। জাতীয় স্বাস্থ্য নির্দেশিকা অনুসারে ১৯ থেকে ৫০ বছর বয়সী পুরুষদের জন্য দৈনিক ৩৮ গ্রাম এবং নারীদের জন্য দৈনিক ২৫ গ্রাম খাদ্য আঁশ গ্রহণ করা বাধ্যতামূলক [1, 3]।'
            ),
            l(
              'Therapeutic fiber intervention requires tailored prescription based on target pathology [1, 3]. In type 2 diabetes and dyslipidemia, prioritized prescription of high-viscosity soluble fibers (such as oat beta-glucan at ≥3 g/day or coarse psyllium husk at 7–10 g/day taken before meals) effectively reduces HbA1c by 0.3–0.6% and LDL-C by 5–10% [1, 3]. In contrast, in chronic idiopathic constipation, insoluble and poorly fermentable fibers (wheat bran, coarse cellulose, methylcellulose) optimize stool water retention and accelerate whole-gut transit time from >72 hours down to normal physiological ranges (24–48 hours) [1, 3].',
              'রোগের প্রকৃতির ওপর ভিত্তি করে আঁশের সুনির্দিষ্ট প্রয়োগ নিশ্চিত করতে হয় [1, 3]। টাইপ-২ ডায়াবেটিস এবং অতিরিক্ত কোলেস্টেরলের রোগীদের ক্ষেত্রে খাবারের আগে দৈনিক ৩ গ্রাম ওটস বিটা-গ্লুকান অথবা ৭-১০ গ্রাম ইসবগুলের ভুষি প্রেসক্রাইব করলে তা HbA1c প্রায় ০.৩-০.৬% এবং ক্ষতিকর এলডিএল কোলেস্টেরল ৫-১০% কমিয়ে দেয় [1, 3]। অপরদিকে দীর্ঘস্থায়ী কোষ্ঠকাঠিন্যের ক্ষেত্রে গমের ভুসি বা অপাচ্য আঁশ মলে পানি ধরে রেখে অন্ত্রের পরিবহন সময় ৭২ ঘণ্টা থেকে কমিয়ে স্বাভাবিক ২৪-৪৮ ঘণ্টায় নিয়ে আসে [1, 3]।'
            ),
            l(
              'In functional gut disorders such as Irritable Bowel Syndrome (IBS), high-fiber recommendations must be managed with extreme care [1, 3]. Rapidly fermentable short-chain carbohydrates (FODMAPs: fructo-oligosaccharides, galacto-oligosaccharides, inulin) undergo explosive gas-producing fermentation in the proximal colon, inducing visceral pain in hypersensitive patients [1, 3]. The clinical protocol mandates temporary restriction of rapidly fermentable fibers followed by stepwise reintroduction of non-gas-producing soluble fibers (psyllium, partially hydrolyzed guar gum) to nurture SCFA production without precipitating mechanical distension [1, 3].',
              'ইরিটেবল বাওয়েল সিন্ড্রোম (IBS) আক্রান্ত রোগীদের ক্ষেত্রে ফাইবার দেওয়ার সময় চরম সতর্কতা অবলম্বন করতে হয় [1, 3]। দ্রুত গাঁজনযোগ্য ফাইবার (যেমন ইনুলিন বা কিছু ডাল) প্রক্সিমাল কোলনে দ্রুত প্রচুর গ্যাস তৈরি করে অন্ত্রের স্নায়ুতে তীব্র ব্যথার সৃষ্টি করে [1, 3]। তাই এই রোগীদের ক্ষেত্রে শুরুতে দ্রুত গ্যাস সৃষ্টিকারী খাবার কমিয়ে ধীরে ধীরে হালকা ও সহনশীল দ্রবণীয় আঁশ (যেমন ইসবগুলের ভুষি বা পিএইচজিজি) দিয়ে চিকিৎসা শুরু করতে হয় [1, 3]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উন্নত/গবেষণা'),
      sections: [
        {
          id: 'introduction',
          heading: l('Epigenetic Chromatin Remodeling & Histone Deacetylase Inhibition', 'এপিজেনেটিক ক্রোমাটিন পরিবর্তন ও হিস্টোন ডিঅ্যাসিটাইলেজ দমন'),
          paragraphs: [
            l(
              'Beyond metabolic fuel partitioning, Butyrate functions as a potent, cell-permeable endogenous inhibitor of zinc-dependent Class I (HDAC1, 2, 3, 8) and Class IIa (HDAC4, 5, 7, 9) Histone Deacetylases [4, 6]. At physiological millimolar concentrations, butyrate enters the catalytic pocket of HDAC enzymes, chelating the active-site $Zn^{2+}$ ion and preventing deacetylation of lysine residues on histone tails (H3K9, H3K27, H4K16) [4, 6]. Hyperacetylated histones neutralize the positive charge of lysine, relaxing electrostatic interactions with the negatively charged DNA phosphate backbone [4, 6].',
              'বিপাকীয় জ্বালানির বাইরে বিউটাইরেটের সবচেয়ে বিস্ময়কর ক্ষমতা হলো এটি মানুষের জিনোমের অন্যতম প্রধান এপিজেনেটিক নিয়ন্ত্রক হিসেবে কাজ করে [4, 6]। বিউটাইরেট ক্লাস ১ ও ক্লাস ২এ হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) এনজাইমের সক্রিয় পকেটে প্রবেশ করে তার জিংক আয়নকে অবরুদ্ধ করে ফেলে [4, 6]। ফলে হিস্টোন প্রোটিনে অ্যাসিটাইল গ্রুপ জমে থাকে এবং ডিএনএ-এর সাথে হিস্টোনের বাঁধন আলগা হয়ে ক্রোমাটিনের মুখ উন্মুক্ত হয়ে যায় [4, 6]।'
            ),
            l(
              'This open chromatin architecture permits RNA Polymerase II and lineage-specific transcription factors to access previously silenced promoters [4, 6]. In naïve CD4+ T helper cells residing in the lamina propria, butyrate-mediated HDAC inhibition at the Foxp3 promoter (specifically at the CNS1 and CNS2 intronic enhancer loci) drives stable epigenetic expression of the master regulatory transcription factor Forkhead Box P3 (Foxp3) [4, 6]. This promotes the differentiation of functional immunosuppressive Regulatory T cells ($T_{reg}$ cells) that produce anti-inflammatory Interleukin-10 (IL-10) and Transforming Growth Factor-beta (TGF-beta), suppressing aberrant autoimmune Th1/Th17 colitis [4, 6].',
              'ক্রোমাটিন উন্মুক্ত হওয়ার ফলে গুরুত্বপূর্ণ জিনগুলো সক্রিয় হয়ে ওঠে [4, 6]। অন্ত্রের রোগপ্রতিরোধ কোষে বিউটাইরেট Foxp3 জিনের প্রমোটারে HDAC দমন করে মাস্টার রেগুলেটরি ট্রান্সক্রিপশন ফ্যাক্টর Foxp3 চালু করে দেয় [4, 6]। এর ফলে প্রচুর পরিমাণে রোগপ্রতিরোধক টি-রেগুলেটরি কোষ তৈরি হয় যা অ্যান্টি-ইনফ্ল্যামেটরি সাইটোকাইন (IL-10 ও TGF-beta) নিঃসরণ করে অন্ত্রের অটোইমিউন রোগ ও প্রদাহজনিত ক্ষয়ক্ষতি থামিয়ে দেয় [4, 6]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Butyrate Paradox & Colorectal Neoplasia Epigenetics', 'বিউটাইরেট প্যারাডক্স ও কোলন ক্যান্সারের এপিজেনেটিক্স'),
          paragraphs: [
            l(
              'A profound molecular mystery in epithelial biology is the "Butyrate Paradox": butyrate fuels proliferation and survival in healthy non-malignant colonocytes, yet selectively triggers cell-cycle arrest and apoptosis in transformed colorectal adenocarcinoma cells [4, 6]. This differential response stems directly from the Warburg effect in cancer cells [4, 6]. Normal colonocytes, driven by abundant mitochondrial machinery, rapidly beta-oxidize butyrate to acetyl-CoA, preventing butyrate from accumulating in the nucleus to inhibit HDACs, thus providing ATP to sustain physiological epithelial turnover [4, 6].',
              'কোষীয় জীববিজ্ঞানের এক অনন্য রহস্য হলো "বিউটাইরেট প্যারাডক্স": বিউটাইরেট সুস্থ কোলন কোষকে শক্তি দিয়ে বাঁচিয়ে রাখে এবং বিভাজনে সাহায্য করে, অথচ কোলন ক্যান্সার কোষের মুখোমুখি হলে এটি ক্যান্সার কোষের বংশবৃদ্ধি বন্ধ করে তাকে আত্মহত্যার (অ্যাপোপ্টোসিস) দিকে ঠেলে দেয় [4, 6]! এই বিপরীতমুখী আচরণের মূল কারণ হলো ক্যান্সার কোষের ওয়ারবার্গ ইফেক্ট। সুস্থ কোলন কোষ বিউটাইরেটকে মাইটোকন্ড্রিয়ায় দ্রুত পুড়িয়ে এটিপি তৈরি করে ফেলে, ফলে বিউটাইরেট নিউক্লিয়াসে গিয়ে জমতে পারে না [4, 6]।'
            ),
            l(
              'Conversely, transformed colorectal carcinoma cells suppress mitochondrial beta-oxidation and rely on aerobic glycolysis [4, 6]. Unable to burn butyrate, the malignant colonocyte accumulates massive intracellular pools of free butyrate (1–5 mM), which freely diffuse into the nucleus [4, 6]. There, unchecked HDAC inhibition hyperacetylates the promoter regions of CDKN1A (encoding the p21/WAF1 cyclin-dependent kinase inhibitor) and pro-apoptotic BAX, arresting the cell cycle at the G1/S transition and activating mitochondrial cytochrome c release to execute apoptosis [4, 6]. High dietary fiber intake thus forms an active epigenetic chemopreventive shield against colorectal neoplasia [1, 4, 6].',
              'অপরদিকে ক্যান্সার কোষ মাইটোকন্ড্রিয়ায় চর্বি পোড়াতে পারে না এবং কেবল গ্লুকোজের ওপর নির্ভর করে [4, 6]। ফলে ক্যান্সার কোষে ঢোকা বিউটাইরেট পুড়ে নষ্ট না হয়ে সরাসরি নিউক্লিয়াসে গিয়ে জমা হয় এবং সেখানকার HDAC এনজাইমকে স্থায়ীভাবে ব্লক করে দেয় [4, 6]। এর ফলে ক্যান্সার দমনকারী CDKN1A (p21) জিন এবং কোষ ধ্বংসকারী BAX জিন সক্রিয় হয়ে ওঠে, যা ক্যান্সার কোষের ডিএনএ বিভাজন আটকে দিয়ে তাকে ধ্বংস করে ফেলে [4, 6]। পর্যাপ্ত খাদ্য আঁশ গ্রহণ তাই কোলন ক্যান্সার প্রতিরোধের অন্যতম প্রধান এপিজেনেটিক ঢাল [1, 4, 6]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Intestinal Gluconeogenesis & Portal-Brain Neural Circuitry', 'অন্ত্রের গ্লুকোনিওজেনেসিস ও পোর্টাল-মস্তিষ্ক স্নায়ু যোগাযোগ'),
          paragraphs: [
            l(
              'Seminal investigations by De Vadder and colleagues demonstrated that SCFAs orchestrate systemic energy balance through an unexpected metabolic organ: Intestinal Gluconeogenesis (IGN) [2, 4]. While the liver and kidney have long been recognized as primary gluconeogenic tissues, enterocytes of the small intestine express key gluconeogenic enzymes, specifically glucose-6-phosphatase (G6PC) and phosphoenolpyruvate carboxykinase 1 (PCK1) [2, 4]. Propionate acts as an obligate direct substrate for IGN, being incorporated via succinyl-CoA into oxaloacetate and channeled into de novo glucose release into the portal vein [2, 4].',
              'আধুনিক গবেষণায় প্রমাণিত হয়েছে যে এসসিএফএ কেবল রক্তে সংকেত পাঠায় না, বরং অন্ত্রের গ্লুকোনিওজেনেসিস (IGN) নামক এক অভিনব পথের মাধ্যমে সারা দেহের শক্তির ভারসাম্য রক্ষা করে [2, 4]। ক্ষুদ্রান্ত্রের কোষগুলো নিজস্ব এনজাইম (G6PC ও PCK1) ব্যবহার করে সরাসরি রক্তে সামান্য পরিমাণ গ্লুকোজ তৈরি করতে পারে। প্রোপিওনেট সাকসিনাইল-কোএ পথে গিয়ে এই অন্ত্রের গ্লুকোজ তৈরির প্রধান কাঁচামাল হিসেবে ব্যবহৃত হয় [2, 4]।'
            ),
            l(
              'Crucially, butyrate acts as an epigenetic activator: by signaling through enteric FFAR3 and elevating intracellular cAMP, butyrate upregulates the transcription of the G6PC promoter [2, 4]. The newly synthesized glucose is released into the portal vein in tiny physiological amounts (micromolar spikes), which are detected by high-affinity glucose sensors in the portal venous wall (sodium-glucose cotransporter 3 / SGLT3) [2, 4]. This triggers a vagal afferent reflex to the solitary tract and hypothalamus, which centrally suppresses hepatic glucose production, curtails appetite, and enhances peripheral insulin sensitivity in skeletal muscle [2, 4].',
              'একইসাথে বিউটাইরেট cAMP সংকেতের মাধ্যমে অন্ত্রের এই গ্লুকোজ তৈরির জিনগুলোকে সক্রিয় রাখে [2, 4]। অন্ত্র থেকে পোর্টাল শিরার রক্তে সামান্য পরিমাণ গ্লুকোজ মুক্ত হওয়ার সাথে সাথে পোর্টাল শিরার গায়ে থাকা বিশেষ গ্লুকোজ সেন্সর (SGLT3) তা টের পেয়ে যায় [2, 4]। মুহূর্তের মধ্যে ভেগাস স্নায়ুর মাধ্যমে সংকেত মস্তিষ্কের হাইপোথ্যালামাসে পৌঁছে যায়, যা যকৃতকে রক্তে বাড়তি গ্লুকোজ ছাড়া বন্ধ করার নির্দেশ দেয় এবং পেশিতে ইনসুলিনের কার্যকারিতা নাটকীয়ভাবে বাড়িয়ে তোলে [2, 4]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Gut-Vascular Barrier & Endotoxin Translocation Kinetics', 'অন্ত্র-রক্তনালী প্রাচীর ও এন্ডোটক্সিন ট্রান্সলোকেশন'),
          paragraphs: [
            l(
              'The mucosal interface comprises two distinct structural defense layers: the epithelial barrier and the deeper Gut-Vascular Barrier (GVB) [4]. The GVB, structurally analogous to the blood-brain barrier, consists of intestinal endothelial cells joined by tight junctions, surrounded by pericytes and enteric glial cells, which prevents systemic dissemination of bacteria and macromolecules while permitting nutrient absorption [4]. Chronic dietary fiber deficiency disrupts both barriers sequentially [1, 4].',
              'আমাদের পরিপাকতন্ত্রে দুটি পৃথক সুরক্ষাকারী দেয়াল রয়েছে: প্রথমটি হলো কোলন এপিথেলিয়াল কোষের স্তর এবং এর ঠিক পেছনে অবস্থিত দ্বিতীয় দেয়ালটি হলো "অন্ত্র-রক্তনালী প্রাচীর" বা গাট-ভাস্কুলার ব্যারিয়ার (GVB) [4]। মস্তিষ্কের রক্ত-মস্তিষ্ক প্রাচীরের মতোই এই GVB অন্ত্রের রক্তনালীর কোষে টাইট-জাংশন দিয়ে শক্তভাবে সিল করা থাকে, যা পুষ্টি শোষণ করতে দিলেও রক্তে ব্যাকটেরিয়া বা ক্ষতিকর বিষাক্ত পদার্থ প্রবেশ করতে দেয় না [4]। খাদ্যে আঁশের দীর্ঘস্থায়ী অভাব এই উভয় দেয়ালকেই ভেঙে চুরমার করে দেয় [1, 4]।'
            ),
            l(
              'Under conditions of fiber starvation, the microbiota switches its metabolic substrate foraging from non-digestible plant polysaccharides to host-secreted mucin O-glycans [4]. Degradation of the protective inner mucus layer by mucinolytic bacteria (such as excessive Akkermansia muciniphila or Bacteroides caccae) thins the protective barrier, bringing luminal bacteria into direct contact with the epithelial apical surface [4]. Lacking butyrate for ATP synthesis and tight-junction renewal, colonocytes undergo apoptosis, permitting the passive paracellular translocation of lipopolysaccharide (LPS, endotoxin) from Gram-negative bacterial outer membranes into mesenteric blood [4]. Binding of circulating LPS to Toll-Like Receptor 4 (TLR4) on macrophages and endothelial cells triggers metabolic endotoxemia, driving systemic vascular inflammation, atherogenesis, and insulin resistance [1, 4].',
              'খাদ্যে ফাইবার না থাকলে অভুক্ত অণুজীবগুলো বাঁচার তাগিদে আমাদের অন্ত্রের দেয়ালের সুরক্ষাকারী শ্লেষ্মা বা মিউসিন স্তরকে হজম করতে শুরু করে [4]। মিউসিন স্তর পাতলা হয়ে গেলে কোলন কোষগুলোর সাথে সরাসরি ব্যাকটেরিয়ার বিষাক্ত লিপোপলিস্যাকারাইড (LPS) লেগে যায় [4]। বিউটাইরেটের অভাবে কোষের টাইট-জাংশন আলগা থাকায় এই ব্যাকটেরিয়াল এন্ডোটক্সিন অনায়াসে রক্তে ঢুকে পড়ে, যাকে চিকিৎসাবিজ্ঞানে "মেটাবলিক এন্ডোটক্সেমিয়া" বলা হয় [4]। এই বিষাক্ত পদার্থ রক্তে ছড়িয়ে পড়লেই রক্তনালীতে চর্বি জমা, প্রদাহ এবং টাইপ-২ ডায়াবেটিসের সূত্রপাত ঘটে [1, 4]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Resistant Starch Structural Kinetics & Microstructural Polymorphism', 'প্রতিরোধী শ্বেতসারের গাঠনিক গতিবিদ্যা ও মাইক্রোস্ট্রাকচারাল পলিমরফিজম'),
          paragraphs: [
            l(
              'Resistant starch (RS) comprises starch and starch degradation products that escape enzymatic cleavage by salivary and pancreatic alpha-amylases in the upper digestive tract [1, 3]. Food chemistry recognizes four primary categories: RS1, physically inaccessible starch entrapped within intact plant cell walls (whole grains, seeds, intact legumes); RS2, ungelatinized native starch granules characterized by tight crystalline B- or C-type X-ray diffraction patterns (green bananas, raw potatoes, high-amylose maize); RS3, retrograded amylose formed when gelatinized starch is cooled, allowing linear alpha-(1,4)-glucan chains to recrystallize into double helices resistant to amylolytic cleavage (chilled cooked rice, potatoes, legumes); and RS4, chemically modified starches containing ether, ester, or cross-linked bonds engineered for food processing [1, 3].',
              'প্রতিরোধী শ্বেতসার বা রেজিস্ট্যান্ট স্টার্চ হলো শ্বেতসারের এমন বিশেষ রূপ যা ক্ষুদ্রান্ত্রে না ভেঙে সরাসরি কোলনে পৌঁছায় [1, 3]। খাদ্য রসায়নে একে চারটি প্রধান ভাগে ভাগ করা হয়: RS1, যা শস্যবীজের শক্ত খোসার ভেতরে প্রাকৃতিকভাবে আবদ্ধ থাকে; RS2, যার ক্রিস্টালাইন গঠন এত আঁটসাঁট যে এনজাইম প্রবেশ করতে পারে না (কাঁচকলা, কাঁচা আলু); RS3, যা রান্না করা ভাত বা আলু ঠান্ডা করলে রিক্রিস্টালাইজেশনের মাধ্যমে তৈরি হয়; এবং RS4, যা প্রক্রিয়াজাতকরণে ব্যবহৃত রাসায়নিকভাবে পরিবর্তিত শ্বেতসার [1, 3]।'
            ),
            l(
              'The fermentation profile of RS3 is characterized by exceptionally high butyrate selectivity [1, 3]. Because retrograded amylose presents slow, sustained degradation kinetics throughout the entire length of the large intestine, it delivers substrate to distal colonic regions where dietary fiber is normally depleted and where >70% of human colorectal malignancies originate [1, 3, 6]. Clinical consumption of 20 to 30 g/day of RS significantly increases fecal wet weight, reduces fecal pH from alkaline (7.5–8.0) to protective acidic ranges (6.0–6.5), and suppresses the formation of genotoxic secondary bile acids (deoxycholic acid and lithocholic acid) and ammonia, establishing a resilient biochemical environment [1, 3, 6].',
              'RS3-এর গাঁজন প্রক্রিয়া অত্যন্ত ধীর ও দীর্ঘস্থায়ী হওয়ায় এটি কোলনের শেষ প্রান্ত পর্যন্ত অক্ষত পৌঁছে প্রচুর পরিমাণে বিউটাইরেট তৈরি করতে পারে—যেখানে সাধারণত সাধারণ ফাইবার আগেই ফুরিয়ে যায় এবং যেখানে মানবদেহের ৭০% এর বেশি কোলন ক্যান্সার দেখা দেয় [1, 3, 6]! দৈনিক ২০-৩০ গ্রাম প্রতিরোধী শ্বেতসার গ্রহণ কোলনের অম্লত্ব রক্ষা করে এবং ক্যান্সার সৃষ্টিকারী ক্ষতিকর সেকেন্ডারি পিত্তলবণ ও অ্যামোনিয়া তৈরি হতে দেয় না [1, 3, 6]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Microbiome Dysbiosis in Inflammatory Bowel Disease & Fiber Therapeutics', 'আইবিডি-তে মাইক্রোবায়োম ডিসবায়োসিস ও ফাইবার থেরাপির বৈজ্ঞানিক বিতর্ক'),
          paragraphs: [
            l(
              'A major clinical paradox in gastroenterology is the management of dietary fiber in active Inflammatory Bowel Disease (IBD: Crohn\'s disease and Ulcerative Colitis) [1, 4]. Metagenomic sequencing in active IBD reveals marked loss of obligate anaerobic butyrate-producing Firmicutes (notably Faecalibacterium prausnitzii and Roseburia hominis) coupled with an aggressive bloom of proinflammatory Enterobacteriaceae (adherent-invasive E. coli) [4]. Mucosal biopsies demonstrate severe downregulation of apical butyrate transporters MCT1 and SMCT1, accompanied by impaired mitochondrial beta-oxidation enzyme expression [4, 6].',
              'গ্যাস্ট্রোএন্টারোলজিতে একটি বড় ক্লিনিক্যাল বিতর্ক হলো আলসারেটিভ কোলাইটিস ও ক্রোনস ডিজিজের (IBD) তীব্র প্রদাহের সময় ফাইবার ব্যবস্থাপনা [1, 4]। জিনোম সিকোয়েন্সিংয়ে দেখা গেছে যে IBD রোগীদের কোলনে বিউটাইরেট তৈরি করার প্রধান উপকারী ব্যাকটেরিয়াগুলো (যেমন ফিকালিব্যাকটেরিয়াম প্রাউসনিটজি) প্রায় নিশ্চিহ্ন হয়ে যায় এবং ক্ষতিকর ব্যাকটেরিয়া দখল নেয় [4]। একইসাথে কোলন কোষে বিউটাইরেট ভেতরে নেওয়ার ট্রান্সপোর্টারগুলোও অকেজো হয়ে পড়ে [4, 6]।'
            ),
            l(
              'Consequently, administering unfermented coarse insoluble fibers during active mucosal ulceration can exacerbate mechanical friction and promote visceral distress, leading many physicians to inappropriately maintain patients on chronic low-fiber diets [1, 4]. Contemporary clinical consensus recommends a precision functional approach: during active flare-ups, prioritize easily fermentable, soluble, non-irritating prebiotic fibers (such as partially hydrolyzed guar gum or low-dose oligofructose) or targeted topical butyrate enemas to restore colonocyte mitochondrial energetics and promote mucosal healing without mechanical abrasion [1, 4, 6]. As remission is attained, systematic fiber diversity should be restored to expand commensal alpha-diversity and establish durable clinical remission [1, 3, 4].',
              'তাই তীব্র ক্ষতের সময় শক্ত অদ্রবণীয় আঁশ দিলে অন্ত্রে ঘষা লেগে ক্ষত আরও বাড়তে পারে, যার কারণে অনেক সময় রোগীকে ভুলবশত দীর্ঘকাল আঁশবিহীন খাবার দেওয়া হয় [1, 4]। কিন্তু আধুনিক চিকিৎসা বিজ্ঞান পরামর্শ দেয় যে এই অবস্থায় আলতো ও মসৃণ প্রিবায়োটিক ফাইবার (যেমন আংশিক হাইড্রোলাইজড গুয়ার গাম) অথবা সরাসরি বিউটাইরেট এনিমা প্রয়োগ করে কোষের শক্তি ফিরিয়ে আনতে হবে এবং ক্ষত সারার সাথে সাথে খাদ্যে ধীরে ধীরে বিভিন্ন প্রাকৃতিক ফাইবার ফিরিয়ে এনে সুস্থতা নিশ্চিত করতে হবে [1, 3, 4, 6]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'A patient with ulcerative colitis in clinical remission consumes a low-fiber, ultra-processed diet. Stool testing reveals severely reduced butyrate concentrations (<5 mmol/kg). Which molecular consequence directly results from this luminal butyrate deficiency in colonic epithelial cells?',
      'আলসারেটিভ কোলাইটিস থেকে আরোগ্য লাভকারী এক রোগী দীর্ঘদিন ধরে প্রক্রিয়াজাত ও আঁশহীন খাবার খাচ্ছেন। মল পরীক্ষায় বিউটাইরেটের মাত্রা মারাত্মক কম পাওয়া গেছে। কোলন কোষে এর প্রত্যক্ষ আণবিক পরিণতি কোনটি?'
    ),
    options: [
      l(
        'Impaired colonocyte mitochondrial beta-oxidation leading to reduced mucosal ATP, loss of physiologic epithelial hypoxia, and degradation of tight junctions.',
        'কোলন কোষে মাইটোকন্ড্রিয়াল বিটা-জারণ ব্যাহত হয়ে এটিপি হ্রাস, অক্সিজেনহীন পরিবেশের বিলুপ্তি এবং টাইট-জাংশন দেয়াল দুর্বল হয়ে যাওয়া।'
      ),
      l(
        'Upregulation of hepatic HMG-CoA reductase and immediate overproduction of systemic LDL cholesterol.',
        'যকৃতে HMG-CoA রিডাক্টেজ এনজাইম বৃদ্ধি পেয়ে সরাসরি অতিরিক্ত কোলেস্টেরল তৈরি হওয়া।'
      ),
      l(
        'Increased secretion of pancreatic lipase and accelerated micellar digestion of triglycerides.',
        'অগ্ন্যাশয় থেকে অতিরিক্ত লাইপেজ এনজাইম নিঃসৃত হয়ে ট্রাইগ্লিসারাইড হজম দ্রুত হওয়া।'
      ),
      l(
        'Permanent suppression of gastric hydrochloric acid secretion via parietal cell histamine receptor blockade.',
        'পাকস্থলীর প্যারাইটাল কোষে হিস্টামিন রিসেপ্টর বন্ধ হয়ে হাইড্রোক্লোরিক অ্যাসিড নিঃসরণ স্থায়ীভাবে বন্ধ হওয়া।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Luminal butyrate is the primary oxidative fuel for colonocytes, accounting for over 70% of their ATP generation. Its mitochondrial oxidation consumes molecular oxygen, maintaining physiologic epithelial hypoxia (<1% O2) that stabilizes HIF-1alpha and preserves tight-junction integrity. Butyrate depletion induces an epithelial energetic crisis, degrades claudin-1/occludin junctions, and permits oxygen leakage into the lumen, promoting dysbiosis and mucosal inflammation [4, 6].',
      'বিউটাইরেট হলো কোলন কোষের প্রধান শক্তি উৎস (৭০% এর বেশি এটিপি)। এটি পোড়াতে গিয়ে প্রচুর অক্সিজেন খরচ হয়, যার ফলে অন্ত্রের দেয়ালে জরুরি হাইপোক্সিয়া (<১% O2) বজায় থাকে যা টাইট-জাংশন অটুট রাখে। বিউটাইরেটের ঘাটতি হলে কোষ শক্তিশূন্য হয়ে পড়ে, দেয়াল ভেঙে যায় এবং অন্ত্রে অক্সিজেন ঢুকে ক্ষতিকর ব্যাকটেরিয়ার বিস্তার ঘটায় [4, 6]।'
    ),
  },
}
