import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const carbohydrateQualityRefs = [
  {
    id: 'jenkins-modern-nutrition-carbs',
    authors: 'David J. A. Jenkins, Cyril W. C. Kendall, Livia S. A. Augustin',
    title: 'Modern Nutrition in Health and Disease, 11th edition, Chapter 3: Carbohydrates, Dietary Fiber, and Resistant Starch',
    organization: 'Wolters Kluwer Health / Lippincott Williams & Wilkins',
    year: 2014,
    url: 'https://shop.lww.com/Modern-Nutrition-in-Health-and-Disease/p/9781605474618',
  },
  {
    id: 'atkinson-ajcn-gi-tables',
    authors: 'Fiona S. Atkinson, Jennie C. Brand-Miller, Kaye Foster-Powell, Anette E. Buyken, Janina Goletzke',
    title: 'International tables of glycemic index and glycemic load values 2021: a systematic review',
    organization: 'The American Journal of Clinical Nutrition',
    year: 2021,
    url: 'https://doi.org/10.1093/ajcn/nqaa350',
    doi: '10.1093/ajcn/nqaa350',
  },
  {
    id: 'krause-nutrition-care-carbs',
    authors: 'Janice L. Raymond, Kelly Morrow',
    title: "Krause and Mahan's Food & the Nutrition Care Process, 15th edition, Chapter 32: Medical Nutrition Therapy for Diabetes Mellitus",
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/krause-and-mahans-food-and-the-nutrition-care-process/raymond/978-0-323-63655-1',
  },
  {
    id: 'reynolds-lancet-carb-quality',
    authors: 'Andrew Reynolds, Jim Mann, John Cummings, Nicola Winter, Evelyn Mete, Lisa Te Morenga',
    title: 'Carbohydrate quality and human health: a series of systematic reviews and meta-analyses',
    organization: 'The Lancet',
    year: 2019,
    url: 'https://doi.org/10.1016/S0140-6736(18)31809-9',
    doi: '10.1016/S0140-6736(18)31809-9',
  },
  {
    id: 'ludwig-ajcn-carb-insulin-model',
    authors: 'David S. Ludwig, Louis J. Aronne, Arne Astrup, Rafael de Cabo, et al.',
    title: 'The carbohydrate-insulin model: a physiological perspective on the obesity pandemic',
    organization: 'The American Journal of Clinical Nutrition',
    year: 2021,
    url: 'https://doi.org/10.1093/ajcn/nqab270',
    doi: '10.1093/ajcn/nqab270',
  },
  {
    id: 'zeevi-cell-personalized-nutrition',
    authors: 'David Zeevi, Tal Korem, Niv Zmora, David Israeli, Daphna Rothschild, et al.',
    title: 'Personalized Nutrition by Prediction of Glycemic Responses',
    organization: 'Cell',
    year: 2015,
    url: 'https://doi.org/10.1016/j.cell.2015.11.001',
    doi: '10.1016/j.cell.2015.11.001',
  },
]

export const nutrition03CarbohydrateQualityLesson: LessonTopic = {
  id: 'topic.nutrition.carbohydrate-quality-gi-gl',
  slug: 'carbohydrate-quality-gi-gl',
  version: 2,
  updatedAt: '2026-10-14',
  title: l(
    '03 · Carbohydrate Quality: Glycemic Index, Glycemic Load & Resistant Starch',
    '০৩ · কার্বোহাইড্রেটের গুণমান: গ্লাইসেমিক ইনডেক্স, গ্লাইসেমিক লোড ও প্রতিরোধী শ্বেতসার'
  ),
  summary: l(
    'Evaluating dietary carbohydrates beyond simple gram totals: starch amylose/amylopectin geometry, standardized Glycemic Index (GI) and Glycemic Load (GL) testing protocols, resistant starch classes (RS1–RS5), the second-meal effect, and incretin endocrinology.',
    'শুধু মোট গ্রাম পরিমাণের বাইরে খাদ্যের শর্করার মান মূল্যায়ন: শ্বেতসারের অ্যামাইলোজ/অ্যামাইলোপেকটিন আণবিক গঠন, প্রমিত গ্লাইসেমিক ইনডেক্স (GI) ও গ্লাইসেমিক লোড (GL) পরিমাপ, প্রতিরোধী শ্বেতসারের শ্রেণিবিভাগ (RS1–RS5), দ্বিতীয়-খাবারের প্রভাব এবং ইনক্রিটিন হরমোন শারীরবৃত্ত।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-14',
  objectives: [
    l(
      'Contrast the enzymatic hydrolytic kinetics of linear alpha-1,4-linked amylose against highly branched alpha-1,6-linked amylopectin, correlating macromolecular starch architecture with glycemic excursions.',
      'সরল আলফা-১,৪ অ্যামাইলোজ এবং উচ্চ শাখাযুক্ত আলফা-১,৬ অ্যামাইলোপেকটিনের এনজাইমীয় আর্দ্রবিশ্লেষণের গতির তুলনা করা এবং শ্বেতসারের আণবিক গঠনের সাথে রক্তে গ্লুকোজ বৃদ্ধির সম্পর্ক ব্যাখ্যা করা।'
    ),
    l(
      'Calculate and differentiate Glycemic Index (GI) and Glycemic Load (GL) using the incremental area under the curve (iAUC), explaining why high-GI low-carbohydrate foods yield low glycemic loads.',
      'রক্তে গ্লুকোজ বৃদ্ধির ক্ষেত্রফল (iAUC) ব্যবহার করে গ্লাইসেমিক ইনডেক্স (GI) ও গ্লাইসেমিক লোড (GL) গণনা ও পার্থক্য করা এবং উচ্চ-GI বিশিষ্ট কম ঘনত্বের খাবার কেন স্বল্প গ্লাইসেমিক লোড তৈরি করে তা বিশ্লেষণ করা।'
    ),
    l(
      'Categorize resistant starch classes (RS1 through RS5), detailing their small intestinal escape mechanisms, colonic microbial fermentation, and the physiological second-meal effect.',
      'প্রতিরোধী শ্বেতসারের ধরনসমূহ (RS1 থেকে RS5) শ্রেণিবদ্ধ করা এবং ক্ষুদ্রান্ত্র অতিক্রম করে বৃহদান্ত্রে এদের গাঁজন, শর্ট-চেইন ফ্যাটি অ্যাসিড উৎপাদন এবং পরবর্তী খাবারের ইনসুলিন সংবেদনশীলতা বৃদ্ধির প্রক্রিয়া মূল্যায়ন করা।'
    ),
    l(
      'Critically appraise the Carbohydrate-Insulin Model (CIM) versus the Energy Balance Model (EBM), evaluating continuous glucose monitoring and inter-individual postprandial glycemic heterogeneity.',
      'কার্বোহাইড্রেট-ইনসুলিন মডেল বনাম সাধারণ শক্তি ভারসাম্য মডেলের বস্তুনিষ্ঠ পর্যালোচনা করা এবং কন্টিনিউয়াস গ্লুকোজ মনিটরিং ও ব্যক্তিভেদে খাবার-পরবর্তী গ্লুকোজ প্রতিক্রিয়ার ভিন্নতা বিশ্লেষণ করা।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  references: carbohydrateQualityRefs,
  evidenceBySection: {
    introduction: ['jenkins-modern-nutrition-carbs', 'atkinson-ajcn-gi-tables'],
    structure: ['jenkins-modern-nutrition-carbs', 'reynolds-lancet-carb-quality'],
    mechanism: ['atkinson-ajcn-gi-tables', 'krause-nutrition-care-carbs'],
    integration: ['jenkins-modern-nutrition-carbs', 'reynolds-lancet-carb-quality', 'ludwig-ajcn-carb-insulin-model'],
    practice: ['atkinson-ajcn-gi-tables', 'krause-nutrition-care-carbs', 'zeevi-cell-personalized-nutrition'],
    takeaways: ['jenkins-modern-nutrition-carbs', 'atkinson-ajcn-gi-tables', 'reynolds-lancet-carb-quality'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Carbohydrate Quality vs Quantity Paradigms', '১. শর্করার পরিমাণ বনাম গুণমানের বৈজ্ঞানিক ভিত্তি'), sectionId: 'introduction' },
      { id: 'sec-amylose', label: l('2. Starch Architecture: Amylose vs Amylopectin', '২. শ্বেতসারের রাসায়নিক গঠন: অ্যামাইলোজ বনাম অ্যামাইলোপেকটিন'), sectionId: 'structure' },
      { id: 'sec-gi-gl', label: l('3. Glycemic Index & Glycemic Load Metrics', '৩. গ্লাইসেমিক ইনডেক্স ও গ্লাইসেমিক লোডের পরিমাপক'), sectionId: 'mechanism' },
      { id: 'sec-rs', label: l('4. Resistant Starch Classes (RS1–RS5) & Second-Meal Effect', '৪. প্রতিরোধী শ্বেতসারের শ্রেণিবিভাগ (RS1–RS5) ও দ্বিতীয়-খাবারের প্রভাব'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Calculating Glycemic Load for Mixed Meals & iAUC', '৫. মিশ্র খাবারের গ্লাইসেমিক লোড ও iAUC হিসাব'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Glycemic Index (GI)', 'গ্লাইসেমিক ইনডেক্স (GI)'),
        definition: l(
          'A standardized physiological ranking scale (0 to 100) quantifying the incremental area under the 2-hour postprandial capillary blood glucose curve (iAUC) produced by a 50-gram available carbohydrate portion of a test food, expressed as a percentage of the response to an equimolar 50-gram oral reference dose of pure anhydrous D-glucose in healthy human subjects.',
          'একটি প্রমিত শারীরবৃত্তীয় সংখ্যাসূচক মান (০ থেকে ১০০) যা ৫০ গ্রাম হজমযোগ্য শর্করাযুক্ত খাদ্য গ্রহণের পর ২ ঘণ্টার রক্তে গ্লুকোজ বৃদ্ধির ক্ষেত্রফলকে (iAUC) সমপরিমাণ ৫০ গ্রাম বিশুদ্ধ গ্লুকোজের বৃদ্ধির ক্ষেত্রফলের শতকরা হার হিসেবে প্রকাশ করে।'
        ),
      },
      {
        term: l('Glycemic Load (GL)', 'গ্লাইসেমিক লোড (GL)'),
        definition: l(
          'A quantitative metric of glycemic impact that integrates both carbohydrate quality (Glycemic Index) and practical dietary quantity: calculated mathematically as [Glycemic Index x Grams of Available Carbohydrate in a standard serving] divided by 100. A GL of 10 or less is low; 11 to 19 is moderate; 20 or more is high.',
          'একটি পরিমাণগত সূচক যা শর্করার গুণমান (GI) এবং বাস্তব পরিবেশনের পরিমাণকে (গ্রাম) সমন্বিত করে: গাণিতিকভাবে [GI x এক পরিবেশনে থাকা গ্রাম শর্করা] / ১০০ দিয়ে হিসাব করা হয়। ১০ বা তার কম হলে লো, ১১-১৯ মডারেট এবং ২০ বা তার বেশি হলে হাই গ্লাইসেমিক লোড।'
        ),
      },
      {
        term: l('Resistant Starch (RS)', 'প্রতিরোধী শ্বেতসার (Resistant Starch)'),
        definition: l(
          'The sum of starch and starch degradation products that completely resist enzymatic hydrolysis by salivary and pancreatic alpha-amylase and brush-border disaccharidases in the healthy human small intestine, successfully passing into the cecum and colon for anaerobic fermentation by commensal microbiota.',
          'শ্বেতসার ও তার খণ্ডিতাংশের সেই অংশ যা ক্ষুদ্রান্ত্রের লালা ও অগ্ন্যাশয়ের অ্যামাইলেজ এবং ব্রাশ-বর্ডার এনজাইম দ্বারা পরিপাক না হয়ে সম্পূর্ণ অক্ষত অবস্থায় বৃহদান্ত্রে পৌঁছায় এবং অন্ত্রের উপকারী জীবাণুদের দ্বারা গাঁজন প্রক্রিয়ায় শর্ট-চেইন ফ্যাটি অ্যাসিডে রূপান্তরিত হয়।'
        ),
      },
      {
        term: l('Second-Meal Effect', 'দ্বিতীয়-খাবারের প্রভাব (Second-Meal Effect)'),
        definition: l(
          'The physiological phenomenon whereby the consumption of low-GI, high-fiber, or resistant-starch-rich foods at one meal blunts the postprandial glycemic and insulinemic excursion following a subsequent meal eaten hours later (e.g., dinner improving breakfast tolerance), mediated by colonic SCFA-driven suppression of free fatty acid rebound and delayed gastric emptying.',
          'একটি শারীরবৃত্তীয় ঘটনা যেখানে পূর্ববর্তী কোনো খাবারে কম-GI বা প্রতিরোধী শ্বেতসার গ্রহণের ফলে পরবর্তী কয়েক ঘণ্টা বা পরের দিন সকালে খাওয়া সাধারণ খাবারের পরও রক্তে অস্বাভাবিক গ্লুকোজ ও ইনসুলিন বৃদ্ধি বাধাপ্রাপ্ত হয়; যা মূলত অন্ত্রের শর্ট-চেইন ফ্যাটি অ্যাসিডের প্রভাবে ঘটে।'
        ),
      },
      {
        term: l('Incretin Effect', 'ইনক্রিটিন প্রভাব (Incretin Effect)'),
        definition: l(
          'The physiological amplification of glucose-stimulated insulin secretion from pancreatic beta cells occurring when glucose is ingested orally compared to when the identical glucose profile is infused intravenously, accounting for up to 50% to 70% of total postprandial insulin release and mediated by gut hormones GLP-1 and GIP.',
          'মুখে খাবার খাওয়ার পর অগ্ন্যাশয়ের বিটা কোষ থেকে ইনসুলিন নিঃসরণের যে বিপুল বৃদ্ধি ঘটে (যা সরাসরি শিরায় একই পরিমাণ গ্লুকোজ দেওয়ার চেয়ে ৫০% থেকে ৭০% বেশি হয়); যা অন্ত্রের অন্তঃক্ষরা কোষ থেকে ক্ষরিত GLP-1 এবং GIP হরমোনের মাধ্যমে পরিচালিত হয়।'
        ),
      },
      {
        term: l('Starch Retrogradation', 'শ্বেতসারের রেট্রোগ্রেডেশন (Retrogradation)'),
        definition: l(
          'The thermodynamic realignment and recrystallization of gelatinized amylose and amylopectin polymer chains into compact, crystalline double helices upon cooling after cooking, which sterically excludes water and physically prevents alpha-amylase from binding, transforming digestible starch into type-3 resistant starch (RS3).',
          'রান্না করার পর স্টার্চ ঠাণ্ডা হওয়ার সময় অ্যামাইলোজ এবং অ্যামাইলোপেকটিনের পলিমার চেইনগুলো পুনরায় শক্ত স্ফটিক ডাবল-হ্যালিক্সে জমাট বাঁধার প্রক্রিয়া, যা পানি বের করে দেয় এবং অ্যামাইলেজ এনজাইমের প্রবেশপথ রুদ্ধ করে সহজে হজমযোগ্য শ্বেতসারকে টাইপ-৩ প্রতিরোধী শ্বেতসারে (RS3) রূপান্তরিত করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Calculating Glycemic Load for an Authentic Mixed Meal vs Refined Plate',
          'একটি সুষম ঐতিহ্যবাহী মিশ্র খাবার বনাম প্রক্রিয়াজাত খাবারের গ্লাইসেমিক লোড গণনা'
        ),
        steps: [
          l(
            'Step 1: Clinical Scenario. Compare two isocaloric carbohydrate meals eaten by a patient with prediabetes: Meal A (Refined Plate: 150 g cooked white jasmine rice with refined sauce) versus Meal B (Intact Legume Plate: 75 g parboiled basmati rice + 100 g cooked red lentils + 150 g steamed non-starchy vegetables + 100 g grilled chicken breast).',
            'ধাপ ১: ক্লিনিক্যাল দৃশ্যপট: প্রি-ডায়াবেটিসের রোগীর জন্য দুটি সমান ক্যালোরির খাবারের তুলনা: খাবার ক (প্রক্রিয়াজাত সাদা জুঁই চালের ভাত ১৫০ গ্রাম) বনাম খাবার খ (সিদ্ধ বাসমতি চাল ৭৫ গ্রাম + রান্না করা মসুর ডাল ১০০ গ্রাম + বাষ্পে সিদ্ধ শাকসবজি ১৫০ গ্রাম + গ্রিল করা মুরগির মাংস ১০০ গ্রাম)।'
          ),
          l(
            'Step 2: Calculate Glycemic Load for Meal A (White Rice). Published international tables indicate cooked jasmine white rice has a high Glycemic Index of 80. A 150 g serving contains 42 g of available carbohydrate. Glycemic Load = (GI x Available Carbs) / 100 = (80 x 42) / 100 = 33.6. A GL of 33.6 is exceptionally high (threshold for high GL is >= 20), imposing intense acute demand on pancreatic beta cells.',
            'ধাপ ২: খাবার ক এর গ্লাইসেমিক লোড গণনা: টেবিল অনুসারে সাদা চালের ভাত উচ্চ গ্লাইসেমিক ইনডেক্স (GI = ৮০) বিশিষ্ট। ১৫০ গ্রাম ভাতে ৪২ গ্রাম হজমযোগ্য শর্করা থাকে। গ্লাইসেমিক লোড = (৮০ x ৪২) / ১০০ = ৩৩.৬। এটি একটি অত্যন্ত উচ্চ গ্লাইসেমিক লোড (উচ্চ মাত্রার সীমা >= ২০), যা অগ্ন্যাশয়ের বিটা-কোষের ওপর তীব্র চাপ সৃষ্টি করে।'
          ),
          l(
            'Step 3: Calculate Mixed-Meal Glycemic Load for Meal B. Parboiled basmati rice (75 g contains 21 g carbs, GI = 52): GL1 = (52 x 21) / 100 = 10.92. Cooked red lentils (100 g contains 18 g carbs, GI = 26): GL2 = (26 x 18) / 100 = 4.68. Steamed vegetables (150 g contains 6 g carbs, GI = 15): GL3 = (15 x 6) / 100 = 0.90. Grilled chicken: 0 g carbohydrate, GL = 0. Total Meal GL = 10.92 + 4.68 + 0.90 = 16.50 (Moderate GL range: 11 to 19).',
            'ধাপ ৩: খাবার খ এর মিশ্র গ্লাইসেমিক লোড গণনা: বাসমতি চাল (২১ গ্রাম শর্করা, GI = ৫২): GL১ = ১০.৯২। মসুর ডাল (১৮ গ্রাম শর্করা, GI = ২৬): GL২ = ৪.৬৮। শাকসবজি (৬ গ্রাম শর্করা, GI = ১৫): GL৩ = ০.৯০। মুরগির মাংস: ০ গ্রাম শর্করা, GL = ০। মোট খাবারের GL = ১০.৯২ + ৪.৬৮ + ০.৯০ = ১৬.৫ (মধ্যম গ্লাইসেমিক লোড: ১১ থেকে ১৯)।'
          ),
          l(
            'Step 4: Physiological Evaluation. Despite providing similar total energy, Meal B cuts the total glycemic load by more than 50% (16.5 vs 33.6). The protein from lentils and chicken stimulates GLP-1 without excessive insulin spikes, while the soluble viscous fiber in lentils and vegetables slows gastric emptying and competitive intestinal glucose absorption.',
            'ধাপ ৪: শারীরবৃত্তীয় ফলাফল: সমান শক্তির খাবার হওয়া সত্ত্বেও খাবার খ এর গ্লাইসেমিক লোড অর্ধেকেরও বেশি কমে যায় (১৬.৫ বনাম ৩৩.৬)। ডাল ও মাংসের প্রোটিন অতিরিক্ত ইনসুলিন নিঃসরণ ছাড়াই GLP-1 হরমোন নিঃসরণ বাড়ায় এবং শাকসবজির আঁশ পাকস্থলী থেকে খাবার নামার গতি ধীর করে দেয়।'
          ),
        ],
        conclusion: l(
          'Evaluating carbohydrates via Glycemic Load rather than simple total grams demonstrates that strategic meal composition—pairing parboiled starches with legumes, viscous fibers, and lean proteins—substantially attenuates postprandial glycemic excursions and beta-cell workload without requiring radical carbohydrate restriction.',
          'শর্করার পরিমাণ কেবল গ্রামে না মেপে গ্লাইসেমিক লোডের সাহায্যে দেখলে বোঝা যায় যে সঠিক খাদ্যাভ্যাস—যেমন ভাতের সাথে ডাল, সবজি ও চর্বিহীন প্রোটিনের মিশ্রণ—খাবার থেকে শর্করা সম্পূর্ণ বাদ না দিয়েই রক্তের চিনির ক্ষতিকর বৃদ্ধি চমৎকারভাবে রোধ করতে পারে।'
        ),
      },
      {
        title: l(
          'Deriving Incremental Area Under the Curve (iAUC) via Trapezoidal Integration',
          'ট্রাপিজয়ডাল সূত্রের সাহায্যে রক্তে গ্লুকোজ বৃদ্ধির ক্ষেত্রফল (iAUC) পরিমাপ'
        ),
        steps: [
          l(
            'Step 1: Clinical Testing Protocol. A patient undergoes standardized 2-hour capillary blood glucose testing after ingesting 50 g of carbohydrate from boiled whole-grain barley. Capillary blood glucose measurements: Time 0 min (Fasting baseline) = 5.0 mmol/L; Time 15 min = 5.6 mmol/L; Time 30 min = 6.4 mmol/L; Time 45 min = 6.1 mmol/L; Time 60 min = 5.7 mmol/L; Time 90 min = 5.2 mmol/L; Time 120 min = 4.9 mmol/L (sub-baseline ignored in standard iAUC calculation).',
            'ধাপ ১: পরীক্ষার প্রোটোকল: ৫০ গ্রাম কার্বোহাইড্রেটযুক্ত সেদ্ধ বার্লি খাওয়ার পর ২ ঘণ্টায় বিভিন্ন সময়ে রক্তের গ্লুকোজের রিডিং: ০ মিনিট (বেসলাইন) = ৫.০ mmol/L; ১৫ মিনিট = ৫.৬; ৩০ মিনিট = ৬.৪; ৪৫ মিনিট = ৬.১; ৬০ মিনিট = ৫.৭; ৯০ মিনিট = ৫.২; ১২০ মিনিট = ৪.৯ mmol/L (বেসলাইনের নিচের মান বাদ দেওয়া হয়)।'
          ),
          l(
            'Step 2: Calculate Incremental Heights (delta-C above baseline): delta-0 = 0.0; delta-15 = 0.6; delta-30 = 1.4; delta-45 = 1.1; delta-60 = 0.7; delta-90 = 0.2; delta-120 = 0.0 mmol/L.',
            'ধাপ ২: বেসলাইনের ওপর গ্লুকোজের উচ্চতা বৃদ্ধি (delta-C): ০ মিনিটে = ০.০; ১৫ মিনিটে = ০.৬; ৩০ মিনিটে = ১.৪; ৪৫ মিনিটে = ১.১; ৬০ মিনিটে = ০.৭; ৯০ মিনিটে = ০.২; ১২০ মিনিটে = ০.০ mmol/L।'
          ),
          l(
            'Step 3: Apply the Trapezoidal Summation Rule: Area = Sum of [(delta-C_a + delta-C_b) / 2 x delta-t]. Segment 0–15: [(0 + 0.6)/2 x 15] = 4.5. Segment 15–30: [(0.6 + 1.4)/2 x 15] = 15.0. Segment 30–45: [(1.4 + 1.1)/2 x 15] = 18.75. Segment 45–60: [(1.1 + 0.7)/2 x 15] = 13.5. Segment 60–90: [(0.7 + 0.2)/2 x 30] = 13.5. Segment 90–120: [(0.2 + 0)/2 x 30] = 3.0. Total iAUC = 4.5 + 15.0 + 18.75 + 13.5 + 13.5 + 3.0 = 68.25 mmol-min/L.',
            'ধাপ ৩: ট্রাপিজয়ডাল ক্ষেত্রফল গণনা: প্রতিটি সময়খণ্ডের ক্ষেত্রফলের যোগফল: ০-১৫ মিনিট = ৪.৫; ১৫-৩০ মিনিট = ১৫.০; ৩০-৪৫ মিনিট = ১৮.৭৫; ৪৫-৬০ মিনিট = ১৩.৫; ৬০-৯০ মিনিট = ১৩.৫; ৯০-১২০ মিনিট = ৩.০। মোট iAUC = ৬৮.২৫ mmol-min/L।'
          ),
          l(
            'Step 4: Compute Glycemic Index relative to standard glucose reference tested in the same subject (Reference iAUC for 50 g anhydrous glucose = 245.0 mmol-min/L). GI = (iAUC_test / iAUC_ref) x 100 = (68.25 / 245.0) x 100 = 27.85 (rounded to GI = 28).',
            'ধাপ ৪: গ্লাইসেমিক ইনডেক্স নির্ণয়: একই ব্যক্তির ৫০ গ্রাম বিশুদ্ধ গ্লুকোজের রেফারেন্স iAUC ছিল ২৪৫.০ mmol-min/L। ফলে বার্লির GI = (৬৮.২৫ / ২৪৫.০) x ১০০ = ২৭.৮৫ (প্রায় ২৮)।'
          ),
        ],
        conclusion: l(
          'With a verified GI of 28, boiled whole barley qualifies as a very low-GI carbohydrate, driven by high content of beta-glucan soluble fiber and type-1/type-2 resistant starches that physically retard amylolytic enzyme access.',
          '২৮ গ্লাইসেমিক ইনডেক্স নিশ্চিত করে যে সেদ্ধ বার্লি একটি অত্যন্ত চমৎকার লো-GI খাদ্য; যার কারণ এতে থাকা দ্রবণীয় বিটা-গ্লুকান আঁশ এবং প্রতিরোধী শ্বেতসার যা অ্যামাইলেজ এনজাইমকে দ্রুত কাজ করতে বাধা দেয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does amylose digest significantly slower than amylopectin despite both being pure polymers of D-glucose?',
          'অ্যামাইলোজ এবং অ্যামাইলোপেকটিন দুটিই গ্লুকোজের পলিমার হওয়া সত্ত্বেও অ্যামাইলোজ কেন পরিপাক হতে অনেক বেশি সময় নেয়?'
        ),
        answer: l(
          'Amylose is a linear polymer linked exclusively by alpha-1,4 glycosidic bonds that naturally twists into tight, hydrophobic helical coils with extensive internal hydrogen bonding. This linear structure exposes only two terminal ends and excludes water, sterically hindering alpha-amylase binding. In contrast, amylopectin possesses branched alpha-1,6 linkages every 24 to 30 residues, creating an expansive, open, highly hydrated dendritic architecture with thousands of accessible non-reducing ends that alpha-amylase and brush-border enzymes can attack simultaneously.',
          'অ্যামাইলোজ হলো আলফা-১,৪ বন্ধনযুক্ত একটি সরল চেইন যা পেঁচিয়ে অত্যন্ত শক্ত পানিরোধী হেলিক্স কুণ্ডলী তৈরি করে; যার ভেতরে এনজাইম সহজে প্রবেশ করতে পারে না এবং এর মাত্র দুটি প্রান্ত খোলা থাকে। অন্যদিকে অ্যামাইলোপেকটিন প্রতি ২৪-৩০টি গ্লুকোজ পর পর শাখাপ্রশাখা তৈরি করে একটি উন্মুক্ত গাছের মতো গঠন তৈরি করে, যার হাজার হাজার প্রান্ত উন্মুক্ত থাকে এবং অ্যামাইলেজ এনজাইম একসাথে চারপাশ থেকে দ্রুত আক্রমণ করে ভেঙে ফেলতে পারে।'
        ),
      },
      {
        question: l(
          'How can a food with a very high Glycemic Index (such as watermelon, GI ~76) have a very low Glycemic Load (GL ~5)?',
          'তরমুজের মতো একটি খাবার যার গ্লাইসেমিক ইনডেক্স অনেক বেশি (GI ~৭৬), তার গ্লাইসেমিক লোড কীভাবে অনেক কম (GL ~৫) হতে পারে?'
        ),
        answer: l(
          'Glycemic Index measures carbohydrate quality at an arbitrary fixed 50-gram carbohydrate dose, regardless of how much food is required to obtain that dose. Watermelon is over 92% water; a typical 120 g dietary slice contains only 6 grams of available carbohydrate. Therefore, while those 6 grams digest quickly (high GI), the absolute carbohydrate mass delivered to the circulation is so small that the resulting Glycemic Load is only (76 x 6) / 100 = 4.56, producing negligible glycemic stress.',
          'গ্লাইসেমিক ইনডেক্স খাদ্যের প্রতি ৫০ গ্রাম শর্করার শোষণ গতি মাপে, খাবারের পরিমাণের ওপর নয়। তরমুজের ৯২% এর বেশি পানি; এক ফালি তরমুজে (১২০ গ্রাম) মাত্র ৬ গ্রাম শর্করা থাকে। ফলে এই ৬ গ্রাম দ্রুত শোষিত হলেও (উচ্চ GI) শরীরে প্রবেশ করা শর্করার মোট পরিমাণ এত কম যে সামগ্রিক রক্তে প্রভাব বা গ্লাইসেমিক লোড দাঁড়ায় মাত্র (৭৬ x ৬)/১০০ = ৪.৫৬, যা অগ্ন্যাশয়ের ওপর কোনো ক্ষতিকর চাপই সৃষ্টি করে না।'
        ),
      },
      {
        question: l(
          'What is the physiological mechanism underlying the "Second-Meal Effect"?',
          'দ্বিতীয়-খাবারের প্রভাবের (Second-Meal Effect) অন্তর্নিহিত শারীরবৃত্তীয় প্রক্রিয়া কী?'
        ),
        answer: l(
          'When low-GI, resistant-starch, or high-fiber foods (e.g., lentils, beans) are consumed, undigested carbohydrates reach the colon hours later. Anaerobic microbial fermentation produces short-chain fatty acids (primarily propionate and acetate), which enter portal circulation and bind FFAR2/FFAR3 receptors. SCFAs suppress systemic free fatty acid (FFA) release from adipose tissue via hormone-sensitive lipase inhibition. Lower circulating nocturnal FFAs reduce skeletal muscle insulin resistance, allowing the body to clear glucose with significantly lower insulin demand at breakfast the following morning.',
          'যখন রাতের খাবারে ডাল বা প্রতিরোধী শ্বেতসার খাওয়া হয়, তা কয়েক ঘণ্টা পর কোলনে পৌঁছায়। অন্ত্রের জীবাণুরা এদের গাঁজন করে শর্ট-চেইন ফ্যাটি অ্যাসিড (অ্যাসিটেট, প্রোপিওনেট) তৈরি করে যা রক্তে গিয়ে চর্বি কোষ থেকে ক্ষতিকর মুক্ত ফ্যাটি অ্যাসিড নির্গমন বন্ধ করে দেয়। রক্তে মুক্ত ফ্যাটি অ্যাসিড কম থাকলে কঙ্কালপেশির ইনসুলিন সংবেদনশীলতা চমৎকার থাকে, যার ফলে পরদিন সকালে সাধারণ নাস্তা করার পরও রক্তে গ্লুকোজ অতিরিক্ত বাড়ে না।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'carbohydrate-quality-gi-gl-diagram',
    title: l(
      'Interactive Starch Branching Architecture & Glycemic Response Dynamics',
      'ইন্টারেক্টিভ শ্বেতসার গঠন ও গ্লাইসেমিক প্রতিক্রিয়া গতিবিদ্যা'
    ),
    description: l(
      'Inspect the structural stereochemistry of linear amylose versus branched amylopectin, the 5 classes of resistant starch, and their resulting incremental blood glucose curves.',
      'অ্যামাইলোজ বনাম অ্যামাইলোপেকটিনের আণবিক গঠন, ৫ ধরনের প্রতিরোধী শ্বেতসার এবং রক্তে গ্লুকোজ বৃদ্ধির তুলনামূলক বক্ররেখা পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Representative in vivo response curves following standardized 50 g available carbohydrate ingestion in healthy non-diabetic human subjects.',
      'সুস্থ স্বাভাবিক প্রাপ্তবয়স্কদের ক্ষেত্রে ৫০ গ্রাম শর্করা গ্রহণের পর রক্তের গ্লুকোজ পরিবর্তনের প্রমিত রূপরেখা।'
    ),
    imageUrl: '/assets/carbohydrate_quality_overview.jpg',
    imageCaption: l(
      'Medical Reference Figure 3.1: Starch Macromolecular Stereochemistry & Postprandial Glycemic Response Dynamics — Linear Amylose Helix vs Dendritic Amylopectin.',
      'মেডিকেল রেফারেন্স চিত্র ৩.১: শ্বেতসারের ম্যাক্রোমলিকুলার স্টেরিওরসায়ন ও খাবার-পরবর্তী গ্লুকোজ প্রতিক্রিয়া — সরল অ্যামাইলোজ বনাম শাখাযুক্ত অ্যামাইলোপেকটিন।'
    ),
    has3D: true,
    threeDType: 'carbohydrate-quality-3d',
    svgType: 'pathway-map',
    items: [
      {
        id: 'amylose-node',
        label: l('Amylose (Linear alpha-1,4 Helical Polymer)', 'অ্যামাইলোজ (সরল আলফা-১,৪ হেলিকাল পলিমার)'),
        description: l(
          'Linear chains of D-glucose linked by alpha-1,4 bonds that spontaneously form tightly packed, hydrogen-bonded helical double cylinders.',
          'আলফা-১,৪ বন্ধনে যুক্ত গ্লুকোজের সরল চেইন যা শক্ত পানিরোধী হেলিক্স কুণ্ডলী তৈরি করে।'
        ),
        details: l(
          'Low surface area and limited enzyme access yield slow hydrolysis, a lower Glycemic Index, and a high propensity for retrogradation into RS3.',
          'এর পৃষ্ঠতলের ক্ষেত্রফল কম হওয়ায় অ্যামাইলেজ এনজাইম সহজে প্রবেশ করতে পারে না, ফলে এর পরিপাক অত্যন্ত ধীরগতির হয়।'
        ),
        sectionId: 'structure',
        color: '#059669',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
        position3D: { x: -65, y: -45, z: 20 },
      },
      {
        id: 'amylopectin-node',
        label: l('Amylopectin (Branched alpha-1,6 Dendritic Polymer)', 'অ্যামাইলোপেকটিন (শাখাযুক্ত আলফা-১,৬ পলিমার)'),
        description: l(
          'Highly branched macromolecule featuring alpha-1,6 branch points every 24–30 residues, exposing thousands of accessible non-reducing ends.',
          'প্রতি ২৪-৩০টি গ্লুকোজ পর পর আলফা-১,৬ শাখাবিশিষ্ট উন্মুক্ত গাছ সদৃশ জটিল পলিমার।'
        ),
        details: l(
          'Rapidly attacked by salivary and pancreatic alpha-amylase, producing rapid glucose release, high Glycemic Index, and exaggerated postprandial insulin surges.',
          'হাজার হাজার খোলা মুখ থাকায় এনজাইম নিমেষেই একে ভেঙে ফেলে এবং রক্তে দ্রুত গ্লুকোজ ও ইনসুলিন বাড়িয়ে দেয়।'
        ),
        sectionId: 'structure',
        color: '#10b981',
        svgCoords: { x: 25, y: 95, width: 310, height: 48 },
        position3D: { x: 55, y: -40, z: -25 },
      },
      {
        id: 'gi-curve-node',
        label: l('Glycemic Index (iAUC Blood Glucose Excursion)', 'গ্লাইসেমিক ইনডেক্স (iAUC গ্লুকোজ বৃদ্ধির বক্ররেখা)'),
        description: l(
          'Incremental area under the capillary glucose curve over 120 minutes compared to pure glucose standard, ranking digestive absorption speed.',
          'বিশুদ্ধ গ্লুকোজের সাপেক্ষে ১২০ মিনিটে রক্তে গ্লুকোজ বৃদ্ধির ক্ষেত্রফল মেপে খাবারের শোষণের গতি নির্ধারণ করে।'
        ),
        details: l(
          'High GI (>=70) spikes glucose and insulin; Low GI (<=55) provides sustained, prolonged glucose delivery and promotes whole-body fat oxidation.',
          'উচ্চ GI রক্তে ইনসুলিনের অস্বাভাবিক স্পাইক তৈরি করে; আর স্বল্প GI খাবার ধীরে ধীরে শক্তি জুগিয়ে চর্বি পোড়াতে সাহায্য করে।'
        ),
        sectionId: 'mechanism',
        color: '#34d399',
        svgCoords: { x: 25, y: 155, width: 310, height: 48 },
        position3D: { x: 0, y: 0, z: 35 },
      },
      {
        id: 'resistant-starch-node',
        label: l('Resistant Starch Taxonomy (RS1–RS5 Classes)', 'প্রতিরোধী শ্বেতসারের শ্রেণিবিন্যাস (RS1–RS5 শ্রেণি)'),
        description: l(
          'RS1: physically trapped within whole plant cell walls; RS2: ungelatinized B-type starch granules (green banana, raw potato); RS3: retrograded amylose formed upon cooling cooked starch; RS4: chemically modified starches; RS5: amylose-lipid complexes.',
          'RS1: উদ্ভিদ কোষপ্রাচীরে আটকে থাকা স্টার্চ; RS2: কাঁচা অপাচ্য স্টার্চ দানা; RS3: রান্না করে ঠাণ্ডা করা রেট্রোগ্রেডেড স্টার্চ; RS4: রাসায়নিকভাবে পরিবর্তিত স্টার্চ; RS5: লিপিড-অ্যামাইলোজ জটিল যৌগ।'
        ),
        details: l(
          'Enhances colonocyte barrier integrity, upregulates GLP-1/PYY secretion, and drives the therapeutic second-meal effect.',
          'এটি কোলনের কোষ সুস্থ রাখে, ক্ষুধা কমানোর হরমোন বাড়ায় এবং পরবর্তী খাবারের গ্লুকোজ নিয়ন্ত্রণ উন্নত করে।'
        ),
        sectionId: 'integration',
        color: '#047857',
        svgCoords: { x: 25, y: 215, width: 310, height: 48 },
        position3D: { x: -50, y: 45, z: -20 },
      },
      {
        id: 'incretin-axis-node',
        label: l('Incretin Axis Modulation (GLP-1 & GIP Secretion)', 'ইনক্রিটিন অক্ষ নিয়ন্ত্রণ (GLP-1 ও GIP ক্ষরণ)'),
        description: l(
          'Intestinal L-cells and K-cells secrete incretin hormones in response to nutrient transit, augmenting beta-cell glucose-dependent insulin secretion.',
          'অন্ত্রের কোষ থেকে ক্ষরিত হরমোন যা খাবার গ্রহণের পর অগ্ন্যাশয় থেকে রক্তের চিনির ওপর নির্ভর করে ইনসুলিন নিঃসরণ বাড়ায়।'
        ),
        details: l(
          'Low-GI, slowly digestible carbohydrates extend nutrient contact to distal ileal L-cells, amplifying sustained GLP-1 and enhancing satiety.',
          'ধীরে হজম হওয়া শর্করা অন্ত্রের শেষ প্রান্তে পৌঁছে দীর্ঘ সময় ধরে GLP-1 নিঃসরণ করায় পেট ভরা থাকে।'
        ),
        sectionId: 'mechanism',
        color: '#065f46',
        svgCoords: { x: 25, y: 275, width: 310, height: 48 },
        position3D: { x: 50, y: 50, z: 20 },
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'A step-by-step schematic showing how starch macromolecular architecture dictates enzymatic hydrolysis speed, shaping the postprandial blood glucose and insulin trajectory.',
      'শ্বেতসারের রাসায়নিক গঠন কীভাবে এনজাইমীয় পরিপাকের গতি নিয়ন্ত্রণ করে এবং খাবার-পরবর্তী গ্লুকোজ ও ইনসুলিন রেখাকে প্রভাবিত করে তার ক্রমান্বয়িক রূপরেখা।'
    ),
    steps: [
      l(
        'Step 1: Starch intake introduces either linear amylose or branched amylopectin polymers into the digestive lumen.',
        'ধাপ ১: খাদ্য গ্রহণের মাধ্যমে সরল অ্যামাইলোজ অথবা শাখাযুক্ত অ্যামাইলোপেকটিন পরিপাকনালিতে প্রবেশ করে।'
      ),
      l(
        'Step 2: Alpha-amylase hydrolysis proceeds rapidly on branched amylopectin due to abundant non-reducing ends, but slowly on packed amylose.',
        'ধাপ ২: আলফা-অ্যামাইলেজ শাখাযুক্ত অ্যামাইলোপেকটিনে দ্রুত কাজ করে, কিন্তু শক্ত অ্যামাইলোজকে ধীরে ধীরে ভাঙে।'
      ),
      l(
        'Step 3: Rapid glucose release drives steep SGLT1 absorption and pronounced postprandial insulin spikes, whereas slow digestion yields flat curves.',
        'ধাপ ৩: দ্রুত গ্লুকোজ তৈরি হলে SGLT1 দিয়ে দ্রুত শোষিত হয়ে ইনসুলিন স্পাইক ঘটায়, আর ধীর পরিপাকে বক্ররেখা সমতল থাকে।'
      ),
      l(
        'Step 4: Resistant starch fractions (RS1–RS5) bypass small bowel uptake completely, entering the colon for microbial fermentation into SCFAs.',
        'ধাপ ৪: প্রতিরোধী শ্বেতসার ক্ষুদ্রান্ত্র এড়িয়ে বৃহদান্ত্রে পৌঁছে মাইক্রোবায়াল গাঁজনের মাধ্যমে শর্ট-চেইন ফ্যাটি অ্যাসিড তৈরি করে।'
      ),
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Beyond Carbohydrate Grams: Why Quality Determines Health', 'শর্করার পরিমাণের বাইরে: কেন গুণমানই স্বাস্থ্যের মূল চাবিকাঠি'),
          paragraphs: [
            l(
              'For decades, standard nutrition advice treated all carbohydrates as if they were virtually identical. People were taught to read nutrition labels and simply count the total grams of carbohydrates: whether those grams came from an ultra-processed sugary soda, white sandwich bread, whole boiled lentils, or raw apples was often treated as an afterthought [1, 2]. However, modern medical science has proven that treating all carbohydrate grams equally is a dangerous physiological fallacy. Fifty grams of pure glucose dissolved in water produces a drastically different hormonal and metabolic reaction inside your body than fifty grams of carbohydrates locked inside the intact fiber walls of whole chickpeas or intact rolled oats [1, 4].',
              'কয়েক দশক ধরে প্রচলিত পুষ্টি পরামর্শে সব ধরনের শর্করাকে প্রায় একই রকম মনে করা হতো। মানুষকে কেবল প্যাকেটের গায়ে লেখা শর্করার গ্রাম গণনা করতে শেখানো হতো: সেই শর্করা একটি কোমল পানীয় থেকে আসছে, নাকি সাদা পাউরুটি, সেদ্ধ মসুর ডাল কিংবা তাজা আপেল থেকে আসছে—তাকে তেমন গুরুত্ব দেওয়া হতো না [1, 2]। কিন্তু আধুনিক চিকিৎসা বিজ্ঞান প্রমাণ করেছে যে সব কার্বোহাইড্রেটকে এক পাল্লায় মাপা শারীরবৃত্তীয়ভাবে মারাত্মক ভুল। পানিতে গুলিয়ে খাওয়া ৫০ গ্রাম বিশুদ্ধ গ্লুকোজ শরীরে যে হরমোনীয় ঝড় তোলে, আস্ত ছোলা বা ওটসের আঁশের ভেতরে আটকে থাকা ৫০ গ্রাম শর্করা শরীরে সম্পূর্ণ ভিন্ন ও শান্ত প্রভাব ফেলে [1, 4]।'
            ),
            l(
              'To understand carbohydrate quality, we must look at how food interacts with human physiology over time. Carbohydrate "quality" refers to the molecular architecture of the food, how tightly its starch chains are packed, the presence of intact cellular plant walls, the viscosity of soluble dietary fibers, and the speed at which digestive enzymes can dismantle those bonds [2, 3]. Rapidly digested carbohydrates flood the bloodstream with glucose within minutes, triggering massive surges of insulin from the pancreas. In contrast, slowly digested carbohydrates release glucose in a gentle, prolonged trickle, providing sustained energy without stressing your metabolic machinery [1, 3].',
              'শর্করার গুণমান বুঝতে হলে খাবার কীভাবে মানবদেহের সাথে মিথস্ক্রিয়া করে তা লক্ষ্য করতে হবে। শর্করার "গুণমান" বলতে বোঝায় খাদ্যের আণবিক গঠন, শ্বেতসারের কুণ্ডলী কতটা শক্তভাবে সাজানো, উদ্ভিদের কোষপ্রাচীর অক্ষত আছে কিনা, দ্রবণীয় আঁশের আঠালো ভাব এবং আমাদের পাচক এনজাইম কত দ্রুত সেই বন্ধনগুলো ভাঙতে পারে [2, 3]। দ্রুত হজম হওয়া শর্করা কয়েক মিনিটের মধ্যে রক্তে গ্লুকোজের বন্যা বইয়ে দেয় এবং অগ্ন্যাশয়কে বাধ্য করে বিপুল পরিমাণ ইনসুলিন নিঃসরণ করতে। অন্যদিকে ধীরে হজম হওয়া শর্করা শান্ত নদীর মতো ধীরে ধীরে কোষে গ্লুকোজ সরবরাহ করে, যা বিপাকীয় অঙ্গগুলোর ওপর চাপ না ফেলে দীর্ঘস্থায়ী শক্তি জোগায় [1, 3]।'
            ),
            l(
              'This distinction is not merely academic; it is a matter of life and death in global health. Landmark systematic reviews published in *The Lancet* examining hundreds of thousands of individuals across decades have proven that replacing rapidly absorbed refined carbohydrates with high-quality, high-fiber, low-glycemic foods produces significant reductions in type 2 diabetes, coronary heart disease, stroke, colorectal cancer, and all-cause mortality [4]. Learning to distinguish carbohydrate quality allows students and patients to make evidence-based food choices that protect cellular health [1, 4].',
              'এই পার্থক্য কেবল বইয়ের তত্ত্ব নয়; এটি বৈশ্বিক জনস্বাস্থ্যের ক্ষেত্রে জীবন-মৃত্যুর প্রশ্ন। *দ্য ল্যানসেট* সাময়িকীতে প্রকাশিত কয়েক লাখ মানুষের ওপর চালানো দীর্ঘমেয়াদী গবেষণায় সন্দেহাতীতভাবে প্রমাণিত হয়েছে যে দ্রুত শোষিত শর্করা পরিহার করে উচ্চমানের, আঁশযুক্ত ও কম গ্লাইসেমিক খাবার গ্রহণ করলে টাইপ-২ ডায়াবেটিস, হৃদরোগ, স্ট্রোক, কোলন ক্যান্সার এবং অকাল মৃত্যুর ঝুঁকি উল্লেখযোগ্যভাবে হ্রাস পায় [4]। শর্করার গুণমান চিনতে পারলে মুখস্থ ক্যালোরি গণনার জটিলতা ছাড়াই সুস্থ কোষীয় স্বাস্থ্য নিশ্চিত করা সম্ভব [1, 4]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Starch Architecture: The Tale of Amylose and Amylopectin', 'শ্বেতসারের রাসায়নিক গঠন: অ্যামাইলোজ ও অ্যামাইলোপেকটিনের গল্প'),
          paragraphs: [
            l(
              'Nearly all the complex carbohydrates we eat in plant foods—including rice, potatoes, wheat, corn, and legumes—consist of starch [1, 2]. But what exactly is starch? Starch is a giant polymer made exclusively of glucose rings linked together by chemical bonds. However, nature synthesizes plant starch in two completely different physical arrangements: Amylose and Amylopectin [2, 3]. The relative ratio of amylose to amylopectin inside a plant food is the single most important structural determinant of how fast that food turns into sugar in your bloodstream [1, 2].',
              'উদ্ভিজ্জ খাদ্যে আমরা যেসব জটিল শর্করা গ্রহণ করি—যেমন ভাত, আলু, গম, ভুট্টা এবং ডাল—তার প্রায় পুরোটাই শ্বেতসার বা স্টার্চ [1, 2]। কিন্তু এই স্টার্চ আসলে কী? স্টার্চ হলো হাজার হাজার গ্লুকোজ অণুর একটি বিশাল পলিমার শিকল। তবে প্রকৃতি উদ্ভিদের ভেতর স্টার্চকে দুটি সম্পূর্ণ ভিন্ন আণবিক বিন্যাসে তৈরি করে: একটির নাম "অ্যামাইলোজ" এবং অন্যটির নাম "অ্যামাইলোপেকটিন" [2, 3]। কোনো খাবারে অ্যামাইলোজ এবং অ্যামাইলোপেকটিনের অনুপাত কত, সেটাই নির্ধারণ করে সেই খাবারটি আপনার পেটে যাওয়ার পর কত দ্রুত রক্তে চিনিতে রূপান্তরিত হবে [1, 2]।'
            ),
            l(
              'Amylose is a straight, linear chain of glucose molecules linked together by alpha-1,4 bonds [2]. Because it is a straight line, it naturally twists itself into tight, compact, spring-like helical coils, much like a tightly wound telephone cord. These coils are glued together by dense internal hydrogen bonds that squeeze out water molecules. Because the structure is so tightly rolled up, digestive enzymes like salivary and pancreatic alpha-amylase can only attack the chain at its two exposed ends; they cannot penetrate the hydrophobic interior. As a result, foods high in amylose (such as long-grain basmati rice, lentils, and kidney beans) digest very slowly, producing a gentle, gradual rise in blood sugar [1, 3].',
              'অ্যামাইলোজ হলো গ্লুকোজের একটি লম্বা সরল শিকল যা আলফা-১,৪ বন্ধন দিয়ে তৈরি [2]। সরলরেখা হওয়ার কারণে এটি প্রাকৃতিকভাবে পেঁচিয়ে অত্যন্ত শক্ত স্প্রিং বা টেলিফোনের তারের মতো হেলিক্যাল কুণ্ডলী তৈরি করে। এই কুণ্ডলীর ভেতরে হাইড্রোজেন বন্ধন এত শক্ত থাকে যে পানি ও এনজাইম সহজে ঢুকতে পারে না। এর গঠন এত আঁটসাঁট হওয়ায় আমাদের পাচক অ্যামাইলেজ এনজাইম কেবল এর দুই খোলা প্রান্তে কাজ করতে পারে, পেটের ভেতর ঢুকতে পারে না। ফলে যেসব খাবারে অ্যামাইলোজ বেশি থাকে (যেমন বাসমতি চাল, মসুর ডাল, রাজমা), সেগুলো খুব ধীরে ধীরে হজম হয় এবং রক্তে গ্লুকোজের মাত্রা অত্যন্ত শান্তভাবে বাড়ে [1, 3]।'
            ),
            l(
              'Amylopectin, on the other hand, is a colossal branched tree [2, 3]. While it also contains alpha-1,4 chains, every 24 to 30 glucose units it sprouts an alpha-1,6 branch point, branching out into thousands of side limbs. This branched architecture makes amylopectin wide open, porous, and heavily hydrated. Instead of having only two ends, a single molecule of amylopectin presents thousands of open non-reducing ends all at once. When you eat foods dominated by amylopectin (such as sticky sushi rice, baked russet potatoes, or white flour), digestive enzymes can attack thousands of branches simultaneously, instantly liberating a massive flood of glucose into the duodenum that spikes blood sugar almost as rapidly as drinking pure liquid glucose [1, 3].',
              'বিপরীতে অ্যামাইলোপেকটিন হলো হাজার হাজার শাখাপ্রশাখাযুক্ত একটি বিশাল মহীরুহ [2, 3]। এতে আলফা-১,৪ শিকল থাকার পাশাপাশি প্রতি ২৪ থেকে ৩০টি গ্লুকোজ পর পর আলফা-১,৬ শাখার সৃষ্টি হয়, যা হাজার হাজার ডালপালায় ছড়িয়ে পড়ে। এই শাখাযুক্ত গঠনের কারণে অ্যামাইলোপেকটিন উন্মুক্ত, ফাঁপা এবং পানিতে সহজে ভিজে যায়। এর কেবল দুটি প্রান্ত থাকে না, বরং একসাথে হাজার হাজার ডাল উন্মুক্ত থাকে। যখন আপনি অ্যামাইলোপেকটিন সমৃদ্ধ খাবার খান (যেমন সাদা আটার রুটি, পোলাও বা সেদ্ধ মিষ্টি আলু), তখন পাচক এনজাইম একসাথে হাজার হাজার ডালে ঝাঁপিয়ে পড়ে এবং মুহূর্তের মধ্যে বিপুল পরিমাণ গ্লুকোজ মুক্ত করে রক্তে এমন তীব্র স্পাইক ঘটায় যেন আপনি সরাসরি চিনির শরবত পান করেছেন [1, 3]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Demystifying the Glycemic Index & Glycemic Load', 'গ্লাইসেমিক ইনডেক্স ও গ্লাইসেমিক লোডের সহজ ব্যাখ্যা'),
          paragraphs: [
            l(
              'To bring scientific rigor to carbohydrate evaluation, Dr. David Jenkins and colleagues at the University of Toronto developed the Glycemic Index (GI) in 1981 [1, 2]. The Glycemic Index is an internationally standardized numerical ranking system from 0 to 100 that rates how rapidly and how high a carbohydrate food raises blood sugar compared to a gold standard reference—pure anhydrous glucose, which is assigned a GI of 100 [2]. Foods are officially classified into three tiers: Low GI (55 or less), Moderate GI (56 to 69), and High GI (70 or greater) [1, 2].',
              'শর্করার প্রভাব সঠিকভাবে পরিমাপের জন্য ১৯৮১ সালে টরন্টো বিশ্ববিদ্যালয়ের অধ্যাপক ড. ডেভিড জেনকিন্স "গ্লাইসেমিক ইনডেক্স" (GI) উদ্ভাবন করেন [1, 2]। গ্লাইসেমিক ইনডেক্স হলো ০ থেকে ১০০ পর্যন্ত একটি আন্তর্জাতিক স্কেল, যা নির্দেশ করে কোনো খাবার বিশুদ্ধ গ্লুকোজের (যার মান ১০০ ধরা হয়) তুলনায় রক্তে কত দ্রুত এবং কত উঁচুতে চিনির মাত্রা বাড়িয়ে দেয় [2]। বৈজ্ঞানিকভাবে খাবারকে তিনটি স্তরে ভাগ করা হয়: লো-GI (৫৫ বা তার কম), মিডিয়াম-GI (৫৬ থেকে ৬৯), এবং হাই-GI (৭০ বা তার বেশি) [1, 2]।'
            ),
            l(
              'However, relying on the Glycemic Index alone can lead to absurd real-world errors. Why? Because the Glycemic Index is tested in a laboratory using an artificial, fixed portion size of exactly 50 grams of available carbohydrates, regardless of how much food you would actually have to eat to get that amount [1, 2]. For example, watermelon has a very high Glycemic Index of 76 because the small amount of sugar it contains is absorbed very rapidly. But watermelon is over 92% water! To actually consume 50 grams of carbohydrates from watermelon, a person would have to eat nearly an entire kilogram (about 5 huge slices) in one sitting, which almost nobody does [1, 2].',
              'তবে বাস্তব জীবনে কেবল গ্লাইসেমিক ইনডেক্সের ওপর নির্ভর করলে মারাত্মক বিভ্রান্তি তৈরি হতে পারে। কেন? কারণ গবেষণাগারে GI মাপার সময় রোগীকে ঠিক ৫০ গ্রাম শর্করা গ্রহণ করতে হয়, খাবারটি বাস্তবে কত বড় তা বিবেচনা করা হয় না [1, 2]। উদাহরণস্বরূপ, তরমুজের গ্লাইসেমিক ইনডেক্স অনেক বেশি (GI = ৭৬), কারণ এতে থাকা সামান্য চিনি খুব দ্রুত শোষিত হয়। কিন্তু তরমুজের ৯২ শতাংশই পানি! তরমুজ থেকে ৫০ গ্রাম শর্করা পেতে হলে একজন মানুষকে এক বসায় প্রায় এক কেজি তরমুজ (বিশাল ৫ ফালি) খেতে হবে, যা সাধারণ মানুষ কখনোই খায় না [1, 2]।'
            ),
            l(
              'To solve this clinical dilemma, scientists created the Glycemic Load (GL), which combines the food’s Glycemic Index with the actual portion size you eat on a real plate [1, 2]. The mathematical formula is simple: multiply the food’s GI by the grams of available carbohydrates in a normal serving, and divide by 100. A typical 120-gram slice of watermelon contains only 6 grams of carbohydrates; multiplying 76 by 6 and dividing by 100 yields a Glycemic Load of just 4.5! A GL of 10 or less is considered low. Thus, while watermelon has a high GI, its real-world Glycemic Load is extremely low and perfectly safe for metabolic health [1, 2]. Glycemic Load is the single most practical metric for everyday dietary planning [1, 3].',
              'এই ব্যবহারিক সংকট দূর করার জন্য বিজ্ঞানীরা তৈরি করেছেন "গ্লাইসেমিক লোড" (Glycemic Load বা GL), যা খাবারের GI-এর সাথে বাস্তব থালায় পরিবেশিত পরিমাণের সমন্বয় ঘটায় [1, 2]। এর সূত্রটি খুব সহজ: খাবারের GI-কে স্বাভাবিক পরিবেশনে থাকা শর্করার গ্রাম দিয়ে গুণ করে ১০০ দিয়ে ভাগ করতে হয়। তরমুজের একটি স্বাভাবিক ফালিতে (১২০ গ্রাম) মাত্র ৬ গ্রাম শর্করা থাকে; ফলে ৭৬ কে ৬ দিয়ে গুণ করে ১০০ দিয়ে ভাগ করলে তরমুজের গ্লাইসেমিক লোড দাঁড়ায় মাত্র ৪.৫! ১০ বা তার কম GL কে অত্যন্ত নিরাপদ ও স্বল্প ধরা হয়। অর্থাৎ তরমুজের GI বেশি হলেও এর বাস্তব গ্লাইসেমিক লোড অত্যন্ত কম এবং তা স্বাস্থ্যের জন্য পুরোপুরি নিরাপদ [1, 2]। এজন্য বাস্তব পথ্য ব্যবস্থাপনায় গ্লাইসেমিক লোডই সবচেয়ে নির্ভরযোগ্য নির্দেশক [1, 3]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Resistant Starch Classes (RS1–RS5) & The Second-Meal Phenomenon', 'প্রতিরোধী শ্বেতসারের শ্রেণিবিভাগ (RS1–RS5) ও দ্বিতীয়-খাবারের প্রভাব'),
          paragraphs: [
            l(
              'Not all starch is destined to be digested and turned into blood sugar. In fact, some starches possess chemical architectures that completely defy human digestive enzymes. These fascinating carbohydrates are known as Resistant Starch (RS) [1, 2]. Resistant starch travels through the stomach and small intestine completely intact, escaping absorption just like dietary fiber, and arrives in the large intestine (colon) where billions of friendly bacteria ferment it into beneficial metabolic signaling molecules [1, 3].',
              'আমাদের খাওয়া সব শ্বেতসার কিন্তু ভেঙে রক্তে চিনিতে পরিণত হয় না। প্রকৃতপক্ষে কিছু শ্বেতসারের গঠন এত চমৎকার যে তারা আমাদের পাচক এনজাইমগুলোকে সম্পূর্ণ ফাঁকি দিয়ে বেরিয়ে যেতে পারে। এদেরকে বলা হয় "প্রতিরোধী শ্বেতসার" বা রেজিসট্যান্ট স্টার্চ (Resistant Starch বা RS) [1, 2]। এই প্রতিরোধী শ্বেতসার পাকস্থলী ও ক্ষুদ্রান্ত্র পার হয়ে সম্পূর্ণ অক্ষত অবস্থায় খাদ্য আঁশের মতো বৃহদান্ত্রে (কোলন) পৌঁছায়, যেখানে কোটি কোটি বন্ধুভাবাপন্ন ব্যাকটেরিয়া এদেরকে গাঁজন করে অত্যন্ত উপকারী বিপাকীয় যৌগে রূপান্তর করে [1, 3]।'
            ),
            l(
              'Scientists categorize resistant starch into distinct functional types based on their physical structure [1, 2]: Type 1 (RS1) is physically trapped inside intact plant cell walls, such as in whole barley, coarse lentils, and intact seeds that digestive juices cannot physically penetrate. Type 2 (RS2) consists of tightly packed raw ungelatinized starch crystals, found in green unripened bananas and raw potatoes. Type 3 (RS3), known as retrograded starch, is one of the most exciting tools in culinary nutrition: when starchy foods like rice, potatoes, or pasta are cooked in hot water and then cooled in the refrigerator, their amylose chains snap together into crystalline double helices that digestive enzymes can no longer break down. Re-cooling cooked rice or potatoes dramatically reduces their glycemic impact! Type 4 (RS4) consists of chemically modified industrial starches, and Type 5 (RS5) forms when amylose binds with fatty acids during food processing [1, 2].',
              'বিজ্ঞানীরা গঠনভেদে প্রতিরোধী শ্বেতসারকে কয়েকটি ভাগে ভাগ করেছেন [1, 2]: টাইপ-১ (RS1) হলো যা উদ্ভিদের শক্ত কোষপ্রাচীরের ভেতরে প্রাকৃতিকভাবে বন্দি থাকে, যেমন আস্ত গম, যব বা ডাল। টাইপ-২ (RS2) হলো অপাচ্য কাঁচা স্ফটিক, যা কাঁচা কলা ও কাঁচা আলুতে থাকে। টাইপ-৩ (RS3) বা রেট্রোগ্রেডেড স্টার্চ হলো রান্নার এক অপূর্ব বৈজ্ঞানিক কৌশল: ভাত, আলু বা পাস্তা সেদ্ধ করার পর যখন ফ্রিজে ঠাণ্ডা করা হয়, তখন তার গ্লুকোজের শিকলগুলো এমন শক্ত স্ফটিকের মতো জোড়া লেগে যায় যা এনজাইম আর সহজে ভাঙতে পারে না। রান্না করা ভাত ঠাণ্ডা করে খেলে তার গ্লাইসেমিক লোড অনেক কমে যায়! এছাড়া টাইপ-৪ (RS4) হলো রাসায়নিকভাবে পরিবর্তিত স্টার্চ এবং টাইপ-৫ (RS5) হলো চর্বির সাথে যুক্ত হওয়া স্টার্চ [1, 2]।'
            ),
            l(
              'When resistant starch reaches the colon, gut microflora ferment it into Short-Chain Fatty Acids (SCFAs), predominantly butyrate, propionate, and acetate [1, 3]. These SCFAs trigger a remarkable clinical event known as the "Second-Meal Effect" [1, 2]. First discovered by David Jenkins, researchers found that when volunteers ate a dinner rich in lentils or resistant starch, their blood sugar remained remarkably steady not only after dinner, but also after eating breakfast the next morning! The colonic fermentation of resistant starch overnight releases SCFAs into the bloodstream, which turns down the release of free fatty acids from adipose tissue, increases insulin sensitivity, and stimulates satiety hormones, protecting your metabolism across meals [1, 4].',
              'প্রতিরোধী শ্বেতসার যখন কোলনে পৌঁছায়, তখন জীবাণুরা এদের গাঁজন করে শর্ট-চেইন ফ্যাটি অ্যাসিড (বিউটাইরেট, প্রোপিওনেট, অ্যাসিটেট) তৈরি করে [1, 3]। এই অ্যাসিডগুলো মানবদেহে একটি চমৎকার বিস্ময় ঘটায়, যাকে "দ্বিতীয়-খাবারের প্রভাব" (Second-Meal Effect) বলা হয় [1, 2]। বিজ্ঞানী ডেভিড জেনকিন্স লক্ষ্য করেন যে রাতে মসুর ডাল বা প্রতিরোধী শ্বেতসার খেলে কেবল রাতের খাবারের পরই নয়, বরং পরের দিন সকালে সাধারণ নাস্তা খাওয়ার পরও রক্তে চিনির মাত্রা অদ্ভুত সুন্দর নিয়ন্ত্রণে থাকে! কারণ সারারাত ধরে তৈরি হওয়া শর্ট-চেইন ফ্যাটি অ্যাসিড রক্তের চর্বি কমিয়ে পরদিন সকালের জন্য পেশির ইনসুলিন সংবেদনশীলতা বাড়িয়ে রাখে [1, 4]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Practical Carbohydrate Optimization in Clinical Care', 'ক্লিনিক্যাল সেবায় শর্করার ব্যবহারিক অপ্টিমাইজেশন'),
          paragraphs: [
            l(
              'In clinical dietetics, translating carbohydrate science into daily life does not require eliminating carbohydrates entirely. Instead, clinicians teach patients simple, actionable culinary substitutions: replacing sticky refined white grains with parboiled or basmati varieties; adding whole lentils and beans to stews; incorporating intact grains rather than finely milled flours; and cooling starchy leftovers overnight before consumption [1, 2].',
              'ক্লিনিক্যাল ডায়েটেটিক্সে রোগীকে খাবার থেকে শর্করা সম্পূর্ণ বাদ দেওয়ার কোনো প্রয়োজন নেই। বরং রোগীকে দৈনন্দিন রান্নার সহজ কৌশল শেখানো হয়: যেমন আঠালো চালের বদলে সিদ্ধ বাসমতি চাল খাওয়া; তরকারিতে মসুর বা ছোলার ডাল মেশানো; প্যাকেটজাত মিহি ময়দার বদলে আস্ত গমের লাল আটা খাওয়া; এবং রান্না করা আলু বা ভাত একটু ঠাণ্ডা করে খাওয়া [1, 2]।'
            ),
            l(
              'Furthermore, meal sequencing profoundly alters glycemic curves: consuming dietary fiber (salad or vegetables) and protein/fat (fish, chicken, tofu) before eating carbohydrates delays gastric emptying and stimulates early GLP-1 release, flattening postprandial glucose peaks by 30% to 50% compared to eating carbohydrates first [1, 2].',
              'এছাড়া খাবার খাওয়ার ধারাবাহিকতা রক্তে গ্লুকোজ নিয়ন্ত্রণে বিস্ময়কর ভূমিকা রাখে: কার্বোহাইড্রেট খাওয়ার আগে প্রথমে সালাদ বা শাকসবজির আঁশ এবং মাছ-মাংসের প্রোটিন খেলে তা পাকস্থলী খালি হওয়ার গতি কমিয়ে দেয় এবং ইনক্রিটিন নিঃসরণ বাড়ায়; যার ফলে একই পরিমাণ ভাত খাওয়ার পরও রক্তের গ্লুকোজের চূড়া ৩০% থেকে ৫০% পর্যন্ত কমে যায় [1, 2]।'
            ),
          ],
          bullets: [
            l('Carbohydrate quality trumps simple gram totals: intact, fiber-bound starches preserve beta-cell longevity [4].', 'শর্করার কেবল গ্রাম না গুনে গুণমান দেখা জরুরি: আঁশযুক্ত অক্ষত শর্করা অগ্ন্যাশয়ের বিটা-কোষকে দীর্ঘদিন সুস্থ রাখে [4]।'),
            l('Amylose digests slowly due to tight helical packing, while branched amylopectin digests rapidly [2, 3].', 'অ্যামাইলোজ শক্ত কুণ্ডলীর কারণে ধীরে হজম হয়, আর শাখাযুক্ত অ্যামাইলোপেকটিন নিমেষেই ভেঙে রক্তে চিনি বাড়ায় [2, 3]।'),
            l('Glycemic Index measures absorption speed; Glycemic Load factors in real portion sizes (GL = [GI x Carbs] / 100) [1, 2].', 'GI শোষণের গতি মাপে; আর GL বাস্তব পরিবেশনের পরিমাণ হিসাব করে (GL = [GI x শর্করা] / ১০০) [1, 2]।'),
            l('Resistant starches (RS1–RS5) bypass small bowel digestion to fuel colonic SCFAs and induce the second-meal effect [1, 3].', 'প্রতিরোধী শ্বেতসার ক্ষুদ্রান্ত্র এড়িয়ে বৃহদান্ত্রে পৌঁছে দ্বিতীয়-খাবারের চমৎকার রক্তের চিনি নিয়ন্ত্রণ উপহার দেয় [1, 3]।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Educational Summary', 'মূল শিক্ষা ও শিক্ষামূলক সারাংশ'),
          paragraphs: [
            l(
              'Carbohydrate quality is determined by macromolecular starch architecture, botanical food matrix integrity, and the Glycemic Load delivered to the systemic circulation [1, 2]. Linear amylose and intact plant cells slow enzymatic breakdown, while branched amylopectin and ultra-processed flours accelerate glucose influx [2, 3].',
              'কার্বোহাইড্রেটের গুণমান নির্ভর করে শ্বেতসারের রাসায়নিক বিন্যাস, উদ্ভিজ্জ কোষপ্রাচীরের অখণ্ডতা এবং রক্তে পৌঁছানো গ্লাইসেমিক লোডের ওপর [1, 2]। সরল অ্যামাইলোজ পরিপাকের গতি ধীর রাখে, পক্ষান্তরে প্রক্রিয়াজাত আটা-ময়দা ও অ্যামাইলোপেকটিন রক্তে গ্লুকোজের ক্ষতিকর প্লাবন ঘটায় [2, 3]।',
            ),
            l(
              'Resistant starch (RS1–RS5) represents a bridge between carbohydrate chemistry and microbiome therapeutics: escaping small intestinal hydrolysis, resistant starches nourish colonic commensals to generate short-chain fatty acids that improve multi-organ insulin sensitivity and mediate the protective second-meal effect [1, 4].',
              'প্রতিরোধী শ্বেতসার (RS1–RS5) শর্করা রসায়ন এবং অন্ত্রের মাইক্রোবায়োমের মধ্যে এক চমৎকার সেতু: এটি ক্ষুদ্রান্ত্রে না ভেঙে বৃহদান্ত্রে উপকারী শর্ট-চেইন ফ্যাটি অ্যাসিড তৈরি করে যা দেহের ইনসুলিন সংবেদনশীলতা বাড়ায় এবং পরবর্তী খাবারের রক্তের চিনিও নিয়ন্ত্রণে রাখে [1, 4]।'
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
          heading: l('Carbohydrate Chemistry & Structural Classification', 'শর্করার রাসায়নিক শ্রেণিবিন্যাস ও আণবিক বৈশিষ্ট্য'),
          paragraphs: [
            l(
              'Dietary carbohydrates are structurally classified by degree of polymerization (DP): monosaccharides (DP = 1: glucose, fructose, galactose); disaccharides (DP = 2: sucrose, lactose, maltose); oligosaccharides (DP = 3 to 9: maltooligosaccharides, raffinose, stachyose, fructooligosaccharides); and polysaccharides (DP ≥ 10: starches, non-starch polysaccharides, cellulose, hemicelluloses, pectins) [1, 2]. In human nutritional biochemistry, carbohydrates are functionally partitioned into "available" (glycemic) carbohydrates that are enzymatically hydrolyzed and absorbed in the small intestine, and "unavailable" (non-glycemic) carbohydrates that resist small bowel hydrolysis and pass into the large intestine [1, 2].',
              'খাদ্যের কার্বোহাইড্রেট পলিমারাইজেশনের মাত্রার (DP) ভিত্তিতে শ্রেণিবদ্ধ: মনোস্যাকারাইড (DP = ১: গ্লুকোজ, ফ্রুক্টোজ, গ্যালাক্টোজ); ডাইস্যাকারাইড (DP = ২: সুক্রোজ, ল্যাকটোজ, মল্টোজ); অলিগোস্যাকারাইড (DP = ৩–৯: ফ্রুক্টোঅলিগোস্যাকারাইড, র্যাফিনোজ); এবং পলিস্যাকারাইড (DP ≥ ১০: শ্বেতসার, সেলুলোজ, পেকটিন) [1, 2]। মানব পুষ্টি জৈবরসায়নে এদের দুটি প্রধান ভাগে ভাগ করা হয়: "হজমযোগ্য শর্করা" যা ক্ষুদ্রান্ত্রের এনজাইম দিয়ে ভেঙে রক্তে চিনি বাড়ায়, এবং "অপাচ্য শর্করা" যা ক্ষুদ্রান্ত্র পার হয়ে বৃহদান্ত্রে প্রবেশ করে [1, 2]।'
            ),
            l(
              'The metabolic consequence of carbohydrate ingestion depends not merely on total grams of carbon skeletons ingested, but on the rate and spatial site of monosaccharide liberation along the gastrointestinal tract [2, 3]. Rapid proximal absorption in the duodenum drives steep arterial glycemic spikes and compensatory hyperinsulinemia, whereas slow distal absorption extending into the ileum stimulates the release of glucagon-like peptide-1 (GLP-1) and peptide YY (PYY) from enteroendocrine L-cells (the "ileal brake"), promoting satiety, delaying gastric emptying, and optimizing peripheral glucose disposal [1, 2].',
              'শর্করা গ্রহণের বিপাকীয় ফলাফল কেবল মোট কত গ্রাম শর্করা খাওয়া হলো তার ওপর নির্ভর করে না, বরং পরিপাকনালির কোন স্থানে এবং কত দ্রুত গ্লুকোজ মুক্ত হচ্ছে তার ওপর গভীরভাবে নির্ভরশীল [2, 3]। ডিওডেনামের শুরুতে খুব দ্রুত গ্লুকোজ শোষিত হলে রক্তে ক্ষতিকর গ্লুকোজ স্পাইক ও তীব্র ইনসুলিন নিঃসরণ ঘটে; পক্ষান্তরে পরিপাকের বিস্তার ইলিয়াম পর্যন্ত বিস্তৃত হলে অন্ত্রের এল-কোষ থেকে GLP-1 ও PYY হরমোন ক্ষরিত হয় ("ইলিয়াল ব্রেক"), যা পাকস্থলীর গতি কমিয়ে দীর্ঘক্ষণ পেট ভরা রাখে এবং ইনসুলিন সংবেদনশীলতা বাড়ায় [1, 2]।'
            ),
            l(
              'Acellular versus cellular carbohydrate packaging further distinguishes food matrix quality. Cellular carbohydrates (e.g., intact grains, legumes, tubers) retain their native plant cell walls, which restrict water penetration, retard swelling during cooking, and sterically hinder alpha-amylase access [2, 4]. Acellular carbohydrates (e.g., ultra-processed refined flours, isolated starches, table sugars) have had their cell walls completely pulverized, producing infinitely accessible surface area that facilitates instantaneous enzymatic attack and rapid enterocyte absorption [1, 4].',
              'খাবারের কোষে বন্দি থাকা (Cellular) বনাম মুক্ত (Acellular) শর্করার ধারণাও অত্যন্ত গুরুত্বপূর্ণ। সেলুলার শর্করা (যেমন আস্ত শস্য, ডাল, খোসাসহ আলু) উদ্ভিদের নিজস্ব কোষপ্রাচীরের ভেতর সংরক্ষিত থাকে, যা রান্নার সময় অতিরিক্ত ফোলা রোধ করে এবং এনজাইমকে সহজে ঢুকতে দেয় না [2, 4]। অন্যদিকে প্রক্রিয়াজাত আটা-ময়দা ও পরিশোধিত চিনিতে কোষপ্রাচীর সম্পূর্ণ চূর্ণবিচূর্ণ হয়ে মুক্ত থাকে, ফলে এনজাইম মুহূর্তেই এদের ওপর ঝাঁপিয়ে পড়ে রক্তে অস্বাভাবিক গ্লুকোজের প্লাবন সৃষ্টি করে [1, 4]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Starch Stereochemistry: Amylose vs Amylopectin Kinetics', 'শ্বেতসারের স্টেরিওকেমিস্ট্রি: অ্যামাইলোজ বনাম অ্যামাইলোপেকটিনের আণবিক গতিবিদ্যা'),
          paragraphs: [
            l(
              'Plant starch granules are semi-crystalline supramolecular structures composed of two high-molecular-weight D-glucan polymers: amylose and amylopectin [1, 2]. Amylose is an unbranched or sparsely branched polymer of α-(1→4)-linked D-glucopyranosyl units, with a molecular weight of 10^5 to 10^6 Da [2, 3]. Because the α-(1→4) bond imposes a directional bend in the polysaccharide backbone, amylose spontaneously coils into a left-handed six-fold single helix. In the native state or upon cooling, two single helices interweave to form stable, parallel, water-insoluble double helices stabilized by dense inter-chain hydrogen bonds, creating a hydrophobic core that excludes water and pancreatic alpha-amylase [2, 3].',
              'উদ্ভিজ্জ শ্বেতসার দানা হলো দুটি উচ্চ-আণবিক পলিমারের সমন্বয়ে গঠিত আধা-স্ফটিক গঠন: অ্যামাইলোজ এবং অ্যামাইলোপেকটিন [1, 2]। অ্যামাইলোজ হলো আলফা-(১→৪) গ্লাইকোসিডিক বন্ধনে যুক্ত গ্লুকোজের সরল চেইন (১০^৫ থেকে ১০^৬ ডাল্টন) [2, 3]। আলফা-(১→৪) বন্ধনের জ্যামিতিক কৌণিক বাঁকের কারণে এটি প্রাকৃতিকভাবে পেঁচিয়ে বামাবর্তী হেলিক্স কুণ্ডলী তৈরি করে। ঠাণ্ডা অবস্থায় দুটি হেলিক্স পরস্পরের সাথে জড়িয়ে অত্যন্ত স্থিতিশীল পানিরোধী ডাবল-হেলিক্স গঠন করে, যার ভেতরে এনজাইম ঢুকতে পারে না [2, 3]।'
            ),
            l(
              'Conversely, amylopectin is one of the largest synthetic macromolecules found in nature, with a molecular weight of 10^7 to 10^8 Da, comprising millions of glucose units [2, 3]. While its backbone consists of α-(1→4) linkages, branch points occur every 24 to 30 residues via α-(1→6) glucosidic bonds, organized in a cluster model with alternating crystalline lamellae (formed by double helices of short A and B chains) and amorphous lamellae containing the branch points [2, 3].',
              'বিপরীতে অ্যামাইলোপেকটিন প্রকৃতির অন্যতম বৃহত্তম পলিমার অণু (১০^৭ থেকে ১০^৮ ডাল্টন), যা লক্ষ লক্ষ গ্লুকোজ অণু দিয়ে গঠিত [2, 3]। এতে আলফা-(১→৪) বন্ধনের পাশাপাশি প্রতি ২৪ থেকে ৩০টি গ্লুকোজ পর পর আলফা-(১→৬) শাখার সৃষ্টি হয়, যা অ্যামরফাস স্তরে বিন্যস্ত থাকে [2, 3]।'
            ),
            l(
              'During hydrothermal cooking, starch undergoes gelatinization: water penetrates the amorphous regions, hydrogen bonds disrupt, granules swell irreversibly, and amylose leaches out into the solution, rendering both polymers fully accessible to digestive enzymes [2, 3]. However, upon cooling, amylose retrogrades within hours because its linear geometry permits rapid re-alignment into insoluble double helices [2]. Amylopectin retrogradation occurs much more slowly over days to weeks because its bulky steric branch points impede recrystallization [2, 3]. Consequently, foods with a high amylose-to-amylopectin ratio (e.g., legumes with 30–40% amylose, parboiled basmati rice with ~28% amylose) exhibit low gelatinization swelling, high retrogradation potential, slow hydrolytic kinetics, and significantly lower glycemic indices than waxy starches containing nearly 100% amylopectin (e.g., sticky rice, waxy corn) [1, 2].',
              'রান্নার তাপে স্টার্চের জেলাটিনাইজেশন ঘটে: পানি ঢুকে দানাগুলো ফুলে ওঠে এবং এনজাইমের প্রবেশ সহজ হয় [2, 3]। কিন্তু ঠাণ্ডা করার সাথে সাথে অ্যামাইলোজ কয়েক ঘণ্টার মধ্যেই পুনরায় জমাট বেঁধে দুর্ভেদ্য ডাবল-হেলিক্সে রূপান্তরিত হয় (রেট্রোগ্রেডেশন) [2]। অ্যামাইলোপেকটিনের শাখা-প্রশাখা বাধা সৃষ্টি করায় এটি এত দ্রুত জমাট বাঁধতে পারে না [2, 3]। ফলে যেসব খাবারে অ্যামাইলোজের অনুপাত বেশি (যেমন ডালে ৩০-৪০% অ্যামাইলোজ, বাসমতি চালে ~২৮% অ্যামাইলোজ), তাদের পরিপাকের গতি অত্যন্ত ধীর থাকে এবং গ্লাইসেমিক ইনডেক্স অনেক কম হয় [1, 2]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Standardized Testing Protocols & Mathematical Metrics: GI vs GL', 'প্রমিত পরীক্ষার প্রোটোকল ও গাণিতিক পরিমাপক: GI বনাম GL'),
          paragraphs: [
            l(
              'The measurement of Glycemic Index is governed by rigorous international standards (ISO 26642:2010) [2]. The standardized human testing protocol mandates: (1) recruiting 10 or more healthy human volunteers; (2) testing following an overnight 10- to 14-hour fast; (3) administering a test portion of food containing exactly 50 grams (or 25 grams for low-carbohydrate foods) of available carbohydrate (Total Carbohydrate minus Dietary Fiber); and (4) collecting capillary blood samples at 0, 15, 30, 45, 60, 90, and 120 minutes [1, 2]. Capillary blood is preferred over venous blood because capillary sampling reflects arterial glucose entering peripheral tissues, producing lower intra-individual coefficient of variation [2].',
              'গ্লাইসেমিক ইনডেক্স পরিমাপের আন্তর্জাতিক মানদণ্ড (ISO 26642:2010) অত্যন্ত কঠোর [2]। এর প্রমিত প্রোটোকলে রয়েছে: (১) ন্যূনতম ১০ জন সুস্থ স্বাভাবিক ব্যক্তির অংশগ্রহণ; (২) সারারাত ১০-১৪ ঘণ্টার উপবাস; (৩) ঠিক ৫০ গ্রাম হজমযোগ্য শর্করা সম্বলিত পরীক্ষামূলক খাবার প্রদান (মোট শর্করা বিয়োগ খাদ্য আঁশ); এবং (৪) ০, ১৫, ৩০, ৪৫, ৬০, ৯০ এবং ১২০ মিনিটে রক্ত নিয়ে গ্লুকোজ পরিমাপ [1, 2]। শিরার রক্তের চেয়ে আঙুলের সূক্ষ্ম ক্যাপিলারি রক্ত গ্রহণ অধিক গ্রহণযোগ্য কারণ এটি টিস্যুতে প্রবেশ করা গ্লুকোজের সঠিক চিত্র তুলে ধরে [2]।'
            ),
            l(
              'The incremental Area Under the Curve (iAUC) is calculated using the geometrical trapezoidal rule: all areas above the fasting baseline concentration are summed, while any blood glucose concentrations falling below baseline during the 2-hour window are strictly excluded from the sum [1, 2]. Each subject is tested on at least two separate occasions with the reference standard (50 g pure anhydrous D-glucose dissolved in 250 mL water, or white bread calibrated to glucose), and the mean reference iAUC is determined. The Glycemic Index of the test food is mathematically defined as: GI = (iAUC_test_food / iAUC_reference_food) × 100 [1, 2].',
              'রক্তে গ্লুকোজ বৃদ্ধির ক্ষেত্রফল (iAUC) ট্রাপিজয়ডাল সূত্রের সাহায্যে গণনা করা হয়: বেসলাইনের ওপরের সমস্ত ক্ষেত্রফল যোগ করা হয় এবং বেসলাইনের নিচের মান বাদ দেওয়া হয় [1, 2]। প্রতিটি ব্যক্তির ক্ষেত্রে কমপক্ষে দুবার ৫০ গ্রাম বিশুদ্ধ গ্লুকোজ দিয়ে রেফারেন্স মান নির্ণয় করা হয়। গাণিতিকভাবে গ্লাইসেমিক ইনডেক্স হলো: GI = (iAUC_test / iAUC_ref) × ১০০ [1, 2]। আন্তর্জাতিক শ্রেণিবিন্যাস: লো-GI ≤ ৫৫, মিডিয়াম-GI ৫৬–৬৯, এবং হাই-GI ≥ ৭০ [1, 2]।'
            ),
            l(
              'Glycemic Load quantifies the real-world glycemic impact of a typical serving, combining qualitative rate of absorption with quantitative carbohydrate density: GL = [GI × Available Carbohydrate (g per serving)] / 100 [1, 2]. While GI ranks physiological absorption speed, GL predicts overall insulin demand and total glucose area. Standard epidemiological thresholds define: Low GL ≤ 10, Moderate GL 11 to 19, and High GL ≥ 20 [1, 2]. In mixed meals containing proteins and lipids, gastric emptying is delayed via CCK and secretin, which blunts postprandial glucose appearance, mathematically lowering the effective Glycemic Load of the combined meal [1, 3].',
              'গ্লাইসেমিক লোড (GL) বাস্তব পরিবেশনের প্রভাবকে পরিমাপ করে: GL = [GI × হজমযোগ্য শর্করা (গ্রাম/পরিবেশন)] / ১০০ [1, 2]। GI পরিপাকের গতি নির্ধারণ করলেও GL সামগ্রিক ইনসুলিনের চাহিদা এবং গ্লুকোজের পরিমাপ নির্ধারণ করে। প্রমিত মানদণ্ড: লো GL ≤ ১০, মডারেট GL ১১–১৯, এবং হাই GL ≥ ২০ [1, 2]। প্রোটিন ও চর্বিযুক্ত মিশ্র খাবারের ক্ষেত্রে সিসিকে হরমোনের প্রভাবে পাকস্থলী খালি হওয়ার গতি কমে যায়, যা মিশ্র খাবারের কার্যকর গ্লাইসেমিক লোডকে কমিয়ে দেয় [1, 3]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Resistant Starch Classes (RS1–RS5) & Incretin Endocrinology', 'প্রতিরোধী শ্বেতসারের শ্রেণিবিভাগ (RS1–RS5) ও ইনক্রিটিন এন্ডোক্রিনোলজি'),
          paragraphs: [
            l(
              'Resistant starch (RS) is biochemically categorized into five distinct classes based on the structural mechanism preventing enzymatic cleavage by pancreatic alpha-amylase and brush-border hydrolases [1, 2]: (1) RS1: Physically inaccessible starches encased within intact plant cell walls (whole kernels of rye, intact barley, whole chickpeas); (2) RS2: Native ungelatinized crystalline B- and C-type starch granules with dense radial lamellae (green bananas, raw potatoes, high-amylose maize); (3) RS3: Retrograded amylose double helices formed by cooling cooked starches (cooled cooked basmati rice, chilled potato salad); (4) RS4: Chemically cross-linked or substituted starches (distarch phosphate, acetylated distarch adipate); and (5) RS5: Helical amylose-lipid V-complexes, where free fatty acids or monoacylglycerols insert into the hydrophobic cavity of the single amylose helix, sterically blocking amylolytic enzyme binding [1, 2].',
              'প্রতিরোধী শ্বেতসারকে এনজাইম প্রতিরোধ করার আণবিক কৌশলের ভিত্তিতে ৫টি শ্রেণিতে ভাগ করা হয় [1, 2]: (১) RS1: যা উদ্ভিদের অক্ষত কোষপ্রাচীরের ভেতর বন্দি থাকে (আস্ত যব, ছোলা); (২) RS2: অপরিপক্ব কাঁচা স্ফটিক দানা (কাঁচা কলা, কাঁচা আলু); (৩) RS3: রান্না করা স্টার্চ ঠাণ্ডা করলে তৈরি হওয়া রেট্রোগ্রেডেড অ্যামাইলোজ ডাবল-হেলিক্স (ঠাণ্ডা ভাত, সেদ্ধ ঠাণ্ডা আলু); (৪) RS4: রাসায়নিকভাবে পরিবর্তিত স্টার্চ; এবং (৫) RS5: অ্যামাইলোজ-লিপিড জটিল যৌগ, যেখানে ফ্যাটি অ্যাসিড অ্যামাইলোজের পেটের ভেতর ঢুকে এনজাইমের প্রবেশ বন্ধ করে দেয় [1, 2]।'
            ),
            l(
              'Upon entering the cecum and ascending colon, resistant starches undergo anaerobic fermentation by key commensal taxa, particularly *Ruminococcus bromii* (the primary degrader of resistant starch granules) and *Bifidobacterium adolescentis*, which release oligosaccharides that cross-feed *Faecalibacterium prausnitzii* to produce butyrate, propionate, and acetate [1, 3]. Butyrate serves as the primary energetic substrate for colonocytes (β-oxidation supplying >70% of colonic ATP), upregulates claudin-1 tight junction expression, and acts as an epigenetic histone deacetylase (HDAC) inhibitor, suppressing pro-inflammatory NF-κB transcription [1, 3].',
              'বৃহদান্ত্রে পৌঁছালে *Ruminococcus bromii* এবং *Faecalibacterium prausnitzii* এর মতো উপকারী ব্যাকটেরিয়ারা এই প্রতিরোধী শ্বেতসারকে ভেঙে বিউটাইরেট, প্রোপিওনেট ও অ্যাসিটেট তৈরি করে [1, 3]। বিউটাইরেট কোলনের কোষগুলোকে ৭০% শক্তি জোগায়, কোষের টাইট জাংশন মজবুত করে এবং হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) অবদমিত করে প্রদাহের ক্ষতিকর জিন নিষ্ক্রিয় রাখে [1, 3]।'
            ),
            l(
              'Carbohydrate quality directly governs the Incretin Axis: oral glucose triggers release of Glucose-Dependent Insulinotropic Polypeptide (GIP) from proximal duodenal K-cells and Glucagon-Like Peptide-1 (GLP-1) from distal ileal and colonic L-cells [1, 2]. While high-GI foods trigger explosive proximal GIP release (promoting adipocyte lipogenesis), low-GI and resistant-starch-rich foods transit distally, stimulating robust ileal GLP-1 release. GLP-1 potentiates glucose-dependent insulin secretion, inhibits inappropriate postprandial glucagon secretion from pancreatic alpha cells, slows gastric emptying, and centrally promotes hypothalamic satiety, explaining the profound metabolic superiority of low-GI diets [1, 2].',
              'কার্বোহাইড্রেটের গুণমান সরাসরি ইনক্রিটিন অক্ষকে নিয়ন্ত্রণ করে: খাবার অন্ত্রে পৌঁছালে ডিওডেনামের কে-কোষ থেকে GIP এবং ইলিয়ামের এল-কোষ থেকে GLP-1 ক্ষরিত হয় [1, 2]। উচ্চ-GI খাবার কেবল ডিওডেনামে GIP বাড়িয়ে চর্বি জমার প্রবণতা বাড়ায়; কিন্তু লো-GI ও প্রতিরোধী শ্বেতসার অন্ত্রের শেষ প্রান্তে পৌঁছে শক্তিশালী GLP-1 নিঃসরণ ঘটায়। এই GLP-1 অগ্ন্যাশয়ের গ্লুকাগন কমায়, পাকস্থলীর গতি ধীর রাখে এবং মস্তিষ্কে ক্ষুধা নিবারণ করে ডায়াবেটিস নিয়ন্ত্রণে যুগান্তকারী ভূমিকা রাখে [1, 2]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Reasoning: Diabetes MNT, CGM Heterogeneity & Meal Sequencing', 'ক্লিনিক্যাল বিশ্লেষণ: ডায়াবেটিসের পুষ্টি থেরাপি, CGM ও আহারের ক্রম'),
          paragraphs: [
            l(
              'In clinical diabetes management, continuous glucose monitoring (CGM) reveals that relying on total carbohydrate counting without regard to Glycemic Index leads to volatile postprandial glucose excursions, glycemic variability (standard deviation of sensor glucose >36%), and increased hypoglycemic rescue events [1, 3]. Switching patients from high-GI refined grains to low-GI legumes and parboiled grains lowers HbA1c by 0.4% to 0.5%, an effect size comparable to first-line oral antihyperglycemic pharmacotherapy [1, 2].',
              'ডায়াবেটিস চিকিৎসায় কন্টিনিউয়াস গ্লুকোজ মনিটরিং (CGM) দেখায় যে কেবল কার্বোহাইড্রেট গণনা করে খাবার খেলে রক্তে গ্লুকোজের তীব্র ওঠানামা ঘটে [1, 3]। রোগীদের প্রক্রিয়াজাত চাল-আটার বদলে লো-GI ডাল ও বাসমতি চাল দিলে রক্তের গড় চিনি (HbA1c) ০.৪% থেকে ০.৫% পর্যন্ত কমে যায়, যা ডায়াবেটিসের নিয়মিত ওষুধের সমান শক্তিশালী প্রভাব ফেলে [1, 2]।'
            ),
            l(
              'Clinical meal sequencing represents an evidence-based behavioral intervention that drastically alters carbohydrate pharmacokinetics [1, 2]. Randomized controlled trials demonstrate that consuming non-starchy vegetables (viscous fiber) and proteins/fats 10 to 15 minutes before consuming carbohydrate starches flattens the postprandial blood glucose peak by 37% and insulin peak by 48% compared to consuming the identical meal components in reverse order [1, 2]. Viscous fiber increases luminal chyme viscosity, creating a physical diffusion barrier that slows glucose transport to apical SGLT1, while fat and protein stimulate CCK to hold chyme inside the stomach, mimicking the pharmacological effects of alpha-glucosidase inhibitors and amylin analogs [1, 2].',
              'খাবার খাওয়ার ক্রম বা মিল সিকোয়েন্সিং একটি বিজ্ঞানভিত্তিক অত্যন্ত কার্যকর কৌশল [1, 2]। গবেষণায় প্রমাণিত হয়েছে যে ভাত বা রুটি খাওয়ার ১০-১৫ মিনিট আগে শাকসবজির সালাদ এবং মাছ-মাংসের প্রোটিন খেলে রক্তে গ্লুকোজের স্পাইক ৩৭% এবং ইনসুলিনের স্পাইক ৪৮% পর্যন্ত কমে যায় [1, 2]। সালাদের আঠালো আঁশ অন্ত্রের লুমেনে একটি জেল তৈরি করে যা গ্লুকোজ শোষণের গতি কমিয়ে দেয় এবং প্রোটিন ও ফ্যাট পাকস্থলী থেকে খাবার নামার গতি ধীর করে ওষুধ ছাড়াই রক্তে চিনির চমৎকার ভারসাম্য এনে দেয় [1, 2]।'
            ),
          ],
          bullets: [
            l('ISO 26642:2010 defines standard GI testing with >=10 healthy subjects using capillary blood iAUC [2].', 'ISO 26642:2010 মানদণ্ড অনুযায়ী আঙুলের রক্তে iAUC মেপে GI নির্ধারণ করা হয় [2]।'),
            l('Glycemic Load = [GI x Available Carbohydrate (g per serving)] / 100 [1, 2].', 'গ্লাইসেমিক লোড = [GI x পরিবেশনে শর্করা (গ্রাম)] / ১০০ [1, 2]।'),
            l('Amylose forms tightly packed helical cylinders resistant to amylase, while amylopectin branches allow rapid hydrolysis [2, 3].', 'অ্যামাইলোজ শক্ত হেলিক্স গঠনের কারণে ধীরে ভাঙে, আর অ্যামাইলোপেকটিনের শাখা দ্রুত পরিপাক হয় [2, 3]।'),
            l('Resistant starches (RS1–RS5) fuel colonic butyrate generation and drive the second-meal effect [1, 3].', 'প্রতিরোধী শ্বেতসার বৃহদান্ত্রে বিউটাইরেট তৈরি করে দ্বিতীয়-খাবারের সুদূরপ্রসারী সুফল উপহার দেয় [1, 3]।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Academic Review', 'মূল শিক্ষা ও একাডেমিক সারাংশ'),
          paragraphs: [
            l(
              'Carbohydrate nutritional quality is rooted in stereochemical architecture: the linear alpha-1,4 geometry of amylose confers enzymatic resistance and high retrogradation capacity, whereas the dendritic alpha-1,6 branches of amylopectin facilitate rapid luminal amylolysis [2, 3]. Glycemic Index benchmarks physiological absorption rate, while Glycemic Load contextualizes real-world dietary density [1, 2].',
              'কার্বোহাইড্রেটের পুষ্টিমান মূলত তার রাসায়নিক গঠনের ওপর প্রতিষ্ঠিত: অ্যামাইলোজের আলফা-১,৪ গঠন এনজাইম প্রতিরোধ করে পরিপাক ধীর রাখে, পক্ষান্তরে অ্যামাইলোপেকটিনের আলফা-১,৬ শাখা দ্রুত গ্লুকোজ মুক্ত করে [2, 3]। গ্লাইসেমিক ইনডেক্স শোষণের গতি মাপে, আর গ্লাইসেমিক লোড খাবারের বাস্তব পরিমাণের প্রভাব তুলে ধরে [1, 2]।',
            ),
            l(
              'Resistant starch escapes small bowel digestion to undergo microbial fermentation, generating short-chain fatty acids that fortify the gut barrier, suppress systemic free fatty acids, stimulate GLP-1, and mediate the second-meal effect [1, 3]. Integrating carbohydrate quality metrics into medical nutrition therapy significantly improves glycemic stability and cardiometabolic risk profiles [1, 4].',
              'প্রতিরোধী শ্বেতসার ক্ষুদ্রান্ত্র এড়িয়ে বৃহদান্ত্রে উপকারী শর্ট-চেইন ফ্যাটি অ্যাসিড তৈরি করে যা অন্ত্রের প্রাচীর মজবুত করে, রক্তে অতিরিক্ত চর্বি কমায়, GLP-1 ক্ষরণ বাড়ায় এবং দ্বিতীয়-খাবারের চমৎকার সুফল দেয় [1, 3]। চিকিৎসা বিজ্ঞানে এই গুণমানের প্রয়োগ ডায়াবেটিস ও হৃদরোগ প্রতিরোধে অত্যন্ত শক্তিশালী হাতিয়ার [1, 4]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Carbohydrate-Insulin Model vs Energy Balance Model Debate', 'কার্বোহাইড্রেট-ইনসুলিন মডেল বনাম সাধারণ শক্তি ভারসাম্য মডেল বিতর্ক'),
          paragraphs: [
            l(
              'One of the fiercest debates in contemporary nutritional science centers on the Carbohydrate-Insulin Model (CIM) of obesity championed by David Ludwig and colleagues [5]. The CIM posits that high-glycemic-load diets trigger an exaggerated insulin-to-glucagon ratio, which actively drives circulating fuels (glucose, fatty acids) out of the circulation and traps them inside adipocytes [1, 5]. According to the CIM, this intracellular fuel trapping starves metabolically active non-adipose tissues (brain, liver, muscle) of circulating energy, signaling the central nervous system to induce hunger, trigger hyperphagia, and lower resting energy expenditure [5].',
              'আধুনিক পুষ্টিবিজ্ঞানের অন্যতম প্রধান তাত্ত্বিক বিতর্ক হলো স্থূলতার কার্বোহাইড্রেট-ইনসুলিন মডেল (CIM), যা অধ্যাপক ডেভিড লুডউইগ এবং সহকর্মীরা জোরালোভাবে সমর্থন করেছেন [5]। এই মডেলের বক্তব্য হলো উচ্চ গ্লাইসেমিক লোডের খাবার রক্তে অস্বাভাবিক ইনসুলিন স্পাইক তৈরি করে, যা রক্তে থাকা জ্বালানিকে (গ্লুকোজ ও ফ্যাটি অ্যাসিড) জোরপূর্বক চর্বি কোষে আটকে ফেলে [1, 5]। এর ফলে মস্তিষ্ক ও অন্যান্য সক্রিয় অঙ্গ রক্তের জ্বালানির অভাব অনুভব করে তীব্র ক্ষুধার সংকেত পাঠায় এবং শরীর ক্লান্ত হয়ে মেটাবলিজম কমিয়ে ফেলে [5]।',
            ),
            l(
              'Conversely, the Energy Balance Model (EBM), supported by Kevin Hall and others, contends that while postprandial insulin surges transiently suppress circulating free fatty acids, hepatic glycogen and intracellular reserves maintain cellular fuel flux without starving the periphery [1, 5]. Rigorous metabolic ward feeding trials demonstrate that while isocaloric substitution of carbohydrates for fats alters 24-hour respiratory quotients and postprandial insulinemia drastically, total daily energy expenditure and body fat loss differ minimally between diets matched for protein and total calories [1, 5]. The emerging consensus recognizes that while the CIM provides a powerful framework for appetite regulation and postprandial dysglycemia, total thermodynamic energy balance ultimately dictates body mass trajectory [1, 5].',
              'বিপরীতে কেভিন হলের সাধারণ শক্তি ভারসাম্য মডেল (EBM) প্রমাণ করে যে ইনসুলিন ক্ষণস্থায়ীভাবে রক্তের ফ্যাটি অ্যাসিড কমালেও যকৃতের গ্লাইকোজেন সার্বক্ষণিক জ্বালানি সরবরাহ স্বাভাবিক রাখে [1, 5]। মেটাবলিক ওয়ার্ডের গবেষণায় দেখা গেছে যে ক্যালোরি ও প্রোটিন সমান থাকলে উচ্চ-ফ্যাট বা উচ্চ-কার্ব ডায়েটের মধ্যে মোট দৈনিক শক্তি ব্যয়ের পার্থক্য খুব নগণ্য [1, 5]। আধুনিক গবেষণার সারমর্ম হলো: কার্বোহাইড্রেট-ইনসুলিন মডেল ক্ষুধা এবং রক্তে চিনির নিয়ন্ত্রণের জন্য অত্যন্ত চমৎকার একটি কাঠামো, কিন্তু চূড়ান্তভাবে দেহের ওজন তাপগতিবিদ্যার শক্তি ভারসাম্যের সূত্র দ্বারাই নিয়ন্ত্রিত হয় [1, 5]।',
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Personalized Nutrition & Postprandial Glycemic Heterogeneity', 'পার্সোনালাইজড নিউট্রিশন ও ব্যক্তিভেদে গ্লুকোজ প্রতিক্রিয়ার বৈচিত্র্য'),
          paragraphs: [
            l(
              'Landmark research published in *Cell* by Eran Segal, Eran Elinav, and David Zeevi fundamentally challenged the concept that Glycemic Index is an invariant property of a food [6]. In an 800-person cohort monitored with continuous glucose monitors tracking 46,898 meals, the researchers discovered immense inter-individual variability in the postprandial glycemic response to the exact same food [6]. For example, while one participant exhibited a sharp blood glucose spike after eating white bread but had a flat curve after eating tomatoes, another participant exhibited the exact opposite response: tomatoes caused a severe glucose surge while white bread produced minimal disturbance [6].',
              'বিজ্ঞানী এরান সেগাল, এরান এলিনাভ এবং ডেভিড জিভি কর্তৃক *সেল* সাময়িকীতে প্রকাশিত বৈপ্লবিক গবেষণা প্রমাণ করেছে যে গ্লাইসেমিক ইনডেক্স কোনো খাবারের অপরিবর্তনীয় পরম বৈশিষ্ট্য নয় [6]। কন্টিনিউয়াস গ্লুকোজ মনিটর দিয়ে ৮০০ জন ব্যক্তির ৪৬,৮৯৮টি খাবারের প্রতিক্রিয়া পর্যবেক্ষণ করে দেখা যায় যে একই খাবার একেক ব্যক্তির রক্তে সম্পূর্ণ ভিন্ন গ্লুকোজ প্রতিক্রিয়া তৈরি করে [6]। উদাহরণস্বরূপ, সাদা রুটি খেয়ে একজনের রক্তে চিনি অস্বাভাবিক বেড়ে গেলেও অন্যজনের রক্তে টমেটো খেয়ে চিনি বেশি বেড়েছে, অথচ সাদা রুটিতে তার প্রতিক্রিয়া ছিল একেবারেই স্বাভাবিক [6]।',
            ),
            l(
              'Metagenomic sequencing revealed that this glycemic heterogeneity is driven primarily by individual gut microbiome taxonomic composition, habitual physical activity, sleep architecture, and baseline insulin sensitivity [6]. Machine learning algorithms trained on microbiome metagenomic profiles and metabolic clinical data accurately predicted individual postprandial glycemic responses to novel meals, proving that while population-level GI tables provide invaluable generalized guidance, true precision nutrition requires integrating food matrix parameters with host biological and microbial phenotypes [1, 6].',
              'মেটাজেনোমিক বিশ্লেষণে দেখা গেছে যে এই ব্যক্তিগত পার্থক্যের মূল কারণ হলো ব্যক্তির অন্ত্রীয় মাইক্রোবায়োমের গঠন, স্বাভাবিক দৈহিক পরিশ্রম, ঘুমের মান এবং ইনসুলিন সংবেদনশীলতা [6]। কৃত্রিম বুদ্ধিমত্তা ও মেটাজেনোমিক্স দিয়ে এখন কোনো ব্যক্তির শরীরে কোন খাবার কেমন প্রতিক্রিয়া ফেলবে তা নিখুঁতভাবে অনুমান করা সম্ভব; যা প্রমাণ করে যে সামগ্রিক পথ্য ব্যবস্থাপনায় আন্তর্জাতিক GI টেবিল অমূল্য পথনির্দেশক হলেও ভবিষ্যতে ব্যক্তিগত চিকিৎসার জন্য নিজস্ব অন্ত্রের পরিবেশ ও ফিনোটাইপ বিবেচনা করা অপরিহার্য [1, 6]।',
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Incretin Axis Pharmacomimetics & L-Cell Nutrient Sensing', 'ইনক্রিটিন ফার্মাকোমিমেটিক্স ও এল-কোষের পুষ্টি সংকেত'),
          paragraphs: [
            l(
              'Enteroendocrine L-cells in the distal ileum and colon function as sophisticated nutrient sensors that couple luminal digestion products to systemic hormonal output [1, 2]. The apical membrane of L-cells expresses an array of nutrient receptors: SGLT1 and GLUT2 for monosaccharides, calcium-sensing receptors (CaSR) and G-protein coupled receptor 142 (GPR142) for amino acids, and free fatty acid receptors 1 and 4 (FFAR1/GPR40, FFAR4/GPR120) for long-chain fatty acids [2]. Colonic microbial SCFAs bind basolateral FFAR2 (GPR43) and FFAR3 (GPR41), activating Gq and Gi signaling to trigger exocytosis of secretory vesicles containing GLP-1, GLP-2, and PYY [1, 2].',
              'ইলিয়াম ও কোলনের এল-কোষগুলো অত্যন্ত সংবেদনশীল রিসেপ্টরের মাধ্যমে লুমেনের পুষ্টি শনাক্ত করে হরমোন নিঃসরণ ঘটায় [1, 2]। এল-কোষের শীর্ষে গ্লুকোজের জন্য SGLT1, অ্যামিনো অ্যাসিডের জন্য CaSR এবং ফ্যাটি অ্যাসিডের জন্য FFAR1/4 রিসেপ্টর থাকে। অন্যদিকে অন্ত্রের শর্ট-চেইন ফ্যাটি অ্যাসিডগুলো FFAR2/3 রিসেপ্টরে যুক্ত হয়ে GLP-1, GLP-2 এবং PYY সমৃদ্ধ ভেসিকল নিঃসরণকে তীব্রভাবে উদ্দীপিত করে [1, 2]।',
            ),
            l(
              'In contemporary pharmacology, this endogenous nutrient-sensing pathway has been harnessed to develop dual and tri-agonist peptide therapeutics (semaglutide, tirzepatide, retatrutide) [1, 2]. While dietary high-fiber and resistant-starch interventions increase endogenous plasma GLP-1 from basal fasting levels of ~5–10 pmol/L to postprandial peaks of 20–30 pmol/L, pharmacological receptor agonists generate continuous circulating concentrations that exceed physiological levels by 5- to 10-fold, completely arresting gastric motility, suppressing hypothalamic appetite circuits, and achieving body mass reductions of 15% to 25% [1, 2]. Understanding the natural physiology of low-GI and fiber transit illuminates why high-quality diets protect against metabolic syndrome and complement modern incretin therapeutics [1, 4].',
              'আধুনিক ফার্মাকোলজিতে এই প্রাকৃতিক সংকেত ব্যবস্থাকে অনুকরণ করে সেমাগ্লুটাইড এবং টির্জেপাটাইডের মতো যুগান্তকারী ওষুধ তৈরি করা হয়েছে [1, 2]। আঁশযুক্ত ও লো-GI খাবার খেলে রক্তে প্রাকৃতিক GLP-1 এর মাত্রা ২০-৩০ pmol/L পর্যন্ত বাড়ে; কিন্তু আধুনিক ওষুধগুলো রক্তে কৃত্রিমভাবে আরও বহুগুণ উচ্চ হরমোনীয় সংকেত বজায় রেখে পাকস্থলীকে দীর্ঘক্ষণ ভরিয়ে রাখে এবং মস্তিষ্কের ক্ষুধা কেন্দ্র অবদমিত করে ১৫% থেকে ২৫% পর্যন্ত ওজন হ্রাস ঘটায় [1, 2]। এই শারীরবৃত্ত বোঝা স্পষ্ট করে কেন পুষ্টির গুণমান বাড়ানো মেটাবলিক সিন্ড্রোম প্রতিরোধে এত বেশি কার্যকর [1, 4]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Epidemiological Evidence: The Lancet Meta-Analyses on Starch Quality', 'মহামারী সংক্রান্ত প্রমাণ: শর্করার মান নিয়ে ল্যানসেট মেটা-অ্যানালাইসিস'),
          paragraphs: [
            l(
              'The definitive evidence establishing the clinical priority of carbohydrate quality over quantity was published by Andrew Reynolds and colleagues in *The Lancet* (2019) [4]. Commissioned by the World Health Organization, this monumental work evaluated 185 prospective cohort studies and 58 clinical trials spanning 4,635 adult participants and over 135 million person-years of follow-up [4]. The researchers evaluated all-cause mortality, cardiovascular diseases, stroke, type 2 diabetes, and colorectal cancer against dietary fiber intake, Glycemic Index, Glycemic Load, and whole-grain consumption [4].',
              'কার্বোহাইড্রেটের পরিমাণের চেয়ে গুণমানের শ্রেষ্ঠত্ব চূড়ান্তভাবে প্রতিষ্ঠিত হয়েছে ২০১৯ সালে *দ্য ল্যানসেট* সাময়িকীতে প্রকাশিত অ্যান্ড্রু রেনল্ডস এবং সহকর্মীদের যুগান্তকারী মেটা-অ্যানালাইসিসের মাধ্যমে [4]। বিশ্ব স্বাস্থ্য সংস্থার নির্দেশে পরিচালিত এই গবেষণায় ১৮৫টি দীর্ঘমেয়াদী গবেষণা ও ৫৮টি ক্লিনিক্যাল ট্রায়াল অন্তর্ভুক্ত করা হয়েছিল, যা ৪,৬৩৫ জন অংশগ্রহণকারী এবং ১৩ কোটি ৫০ লাখেরও বেশি ফলো-আপ বছরের উপাত্ত বিশ্লেষণ করে [4]। এতে মোট মৃত্যুঝুঁকি, হৃদরোগ, স্ট্রোক, ডায়াবেটিস ও ক্যান্সারের সাথে খাদ্য আঁশ এবং গ্লাইসেমিক ইনডেক্সের সম্পর্ক যাচাই করা হয় [4]।'
            ),
            l(
              'The findings revealed a robust, monotonic dose-response curve: individuals consuming the highest amounts of dietary fiber (25 to 29 g/day or more) and lowest Glycemic Index foods exhibited a 15% to 30% reduction in all-cause mortality and cardiovascular mortality compared to those with the lowest intake [4]. Strikingly, total carbohydrate intake as a percentage of total calories showed no consistent association with health outcomes; rather, the biological outcomes were governed entirely by the physical and molecular quality of the carbohydrates consumed [1, 4].',
              'ফলাফলে একটি স্পষ্ট ও ধারাবাহিক সত্য বেরিয়ে আসে: যারা প্রতিদিন পর্যাপ্ত খাদ্য আঁশ (২৫ থেকে ২৯ গ্রাম বা তার বেশি) এবং লো-GI খাবার গ্রহণ করেছেন, তাদের ক্ষেত্রে সব ধরনের মৃত্যুঝুঁকি ও হৃদরোগে মৃত্যুর হার ১৫% থেকে ৩০% হ্রাস পেয়েছে [4]। সবচেয়ে আশ্চর্যজনক বিষয় হলো, মোট ক্যালোরির কত শতাংশ শর্করা থেকে আসছে তার সাথে রোগের কোনো সুনির্দিষ্ট সম্পর্ক মেলেনি; বরং গৃহীত শর্করার আণবিক গুণমান এবং আঁশের মাত্রাই সম্পূর্ণ ফলাফল নির্ধারণ করেছে [1, 4]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Translational Dietetics: Modulating Industrial Retrogradation & Starch Matrix', 'ব্যবহারিক ডায়েটেটিক্স: শিল্পে রেট্রোগ্রেডেশন ও স্টার্চের ম্যাট্রিক্স নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Modern food science and translational clinical dietetics actively manipulate starch retrogradation to engineer functional low-GI staple foods [1, 2]. When high-amylose grains undergo repeated cycles of hydrothermal gelatinization followed by refrigeration (autoclaving-cooling cycles), amylose chains crystallize into Type 3 Resistant Starch (RS3) with extremely high melting temperatures (>120°C) [2]. Unlike native raw RS2 granules that gelatinize and become fully digestible upon boiling, RS3 remains thermally stable during baking, boiling, and frying, permitting the industrial fortification of breads, pastas, and parboiled rice with functional resistant starch that survives normal kitchen cooking intact [1, 2].',
              'আধুনিক খাদ্যবিজ্ঞান ও ক্লিনিক্যাল ডায়েটেটিক্স রেট্রোগ্রেডেশন প্রক্রিয়াকে ব্যবহার করে লো-GI প্রধান খাদ্য তৈরি করছে [1, 2]। উচ্চ-অ্যামাইলোজ চাল বা শস্যকে তাপে গলিয়ে বারবার ঠাণ্ডা করার মাধ্যমে (অটোক্লেভিং-কুলিং চক্র) এমন টাইপ-৩ প্রতিরোধী শ্বেতসার তৈরি করা হয় যার গলনাঙ্ক ১২০ ডিগ্রি সেলসিয়াসেরও বেশি [2]। কাঁচা কলার RS2 রান্না করলে নষ্ট হয়ে গেলেও এই RS3 সেদ্ধ বা বেক করার পরও সম্পূর্ণ অক্ষত থাকে, ফলে এর সাহায্যে প্রস্তুতকৃত ভাত বা পাস্তা স্বাভাবিক রান্না করার পরও পেটে গিয়ে কম রক্তে চিনি বাড়ায় [1, 2]।'
            ),
            l(
              'Furthermore, industrial food processing often introduces amylase inhibitors extracted from white kidney beans (*Phaseolus vulgaris*, phaseolamin) or green tea polyphenols that inhibit salivary and pancreatic alpha-amylase and intestinal alpha-glucosidase [1, 2]. In patients with type 2 diabetes or metabolic syndrome, combining structural high-amylose RS3 with alpha-glucosidase inhibition blunts postprandial glucose excursions while promoting long-term microbial diversity and metabolic flexibility [1, 4].',
              'এছাড়া খাদ্যবিজ্ঞানে শ্বেত শিমের নির্যাস (ফেসিওলামিন) বা গ্রিন টি পলিফেনল ব্যবহার করে অ্যামাইলেজ এনজাইমের কাজকে মৃদুভাবে অবদমিত করা হয় [1, 2]। টাইপ-২ ডায়াবেটিসের রোগীদের ক্ষেত্রে উচ্চ-অ্যামাইলোজযুক্ত খাবার ও এই প্রাকৃতিক নিরোধকের সমন্বয় খাবার-পরবর্তী গ্লুকোজ স্পাইক দমন করার পাশাপাশি কোলনের মাইক্রোবায়োমের বৈচিত্র্য ও কার্যক্ষমতা বজায় রাখতে চমৎকার ভূমিকা রাখে [1, 4]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Advanced Research Synthesis', 'মূল শিক্ষা ও উচ্চতর গবেষণা সংশ্লেষ'),
          paragraphs: [
            l(
              'The biological impact of dietary carbohydrates is governed by stereochemistry, macromolecular branching, cellular food packaging, and the resulting Glycemic Load delivered to the systemic circulation [1, 2]. Amylose helix stabilization resists enzymatic cleavage, whereas amylopectin dendritic architecture facilitates rapid hydrolysis and exaggerated postprandial insulinemia [2, 3].',
              'খাদ্যের শর্করার জৈবিক প্রভাব মূলত তার স্টেরিওকেমিস্ট্রি, আণবিক শাখার বিস্তার, কোষীয় খোলস এবং রক্তে মুক্ত হওয়া গ্লাইসেমিক লোড দ্বারা নির্ধারিত হয় [1, 2]। অ্যামাইলোজের হেলিক্স গঠন এনজাইম প্রতিরোধ করে, আর অ্যামাইলোপেকটিনের শাখা-প্রশাখা দ্রুত ভেঙে রক্তে ইনসুলিনের অস্বাভাবিক স্পাইক তৈরি করে [2, 3]।',
            ),
            l(
              'Rigorous epidemiological evidence from *The Lancet* meta-analyses demonstrates that carbohydrate quality—defined by fiber density, intact whole grains, and low Glycemic Index—is an independent determinant of cardiometabolic health and long-term survival [4]. Emerging precision nutrition highlights that while generalized GI tables provide an essential clinical baseline, individualized postprandial glycemic responses are modulated by host microbiome metagenomics and incretin biology [1, 6].',
              '*দ্য ল্যানসেট* এর ঐতিহাসিক প্রমাণ নিশ্চিত করেছে যে শর্করার গুণমান—যা আঁশ, আস্ত শস্য ও লো-GI দ্বারা নির্ধারিত—হৃদরোগ ও দীর্ঘায়ুর অন্যতম প্রধান স্বাধীন প্রভাবক [4]। ভবিষ্যতের পার্সোনালাইজড নিউট্রিশন প্রমাণ করে যে প্রমিত GI টেবিল অমূল্য পথনির্দেশক হলেও ব্যক্তির নিজস্ব অন্ত্রীয় মাইক্রোবায়োম ও ইনক্রিটিন অক্ষের সমন্বয়েই চূড়ান্ত পুষ্টি থেরাপির শ্রেষ্ঠত্ব অর্জিত হয় [1, 6]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'Why does an isocaloric portion of watermelon (GI ~76) produce a clinically negligible rise in blood glucose compared to an isocaloric portion of white jasmine rice (GI ~80)?',
      'সমপরিমাণ ক্যালোরিযুক্ত তরমুজ (GI ~৭৬) খাওয়া সত্ত্বেও তা কেন সাদা জুঁই চালের ভাতের (GI ~৮০) মতো রক্তে চিনির ক্ষতিকর স্পাইক তৈরি করে না?'
    ),
    options: [
      l('Watermelon is over 92% water with very low carbohydrate density per standard serving, yielding a very low Glycemic Load (GL ~5) despite its high GI', 'তরমুজের ৯২% এর বেশি পানি এবং প্রতি পরিবেশনে শর্করার পরিমাণ অত্যন্ত কম হওয়ায় উচ্চ GI সত্ত্বেও এর গ্লাইসেমিক লোড অত্যন্ত কম (GL ~৫) থাকে'),
      l('Watermelon fructose completely inhibits enterocyte apical SGLT1 cotransport', 'তরমুজের ফ্রুক্টোজ অন্ত্রের SGLT1 পরিবহনকে সম্পূর্ণ বন্ধ করে দেয়'),
      l('The high potassium in watermelon destroys salivary alpha-amylase in the oral cavity', 'তরমুজের অতিরিক্ত পটাশিয়াম মুখের লালার অ্যামাইলেজ এনজাইমকে ধ্বংস করে ফেলে'),
      l('Watermelon starches consist entirely of Type 4 resistant starch that cannot be absorbed', 'তরমুজের সমস্ত শ্বেতসার টাইপ-৪ প্রতিরোধী শ্বেতসার যা কখনোই শোষিত হতে পারে না'),
    ],
    correctIndex: 0,
    explanation: l(
      'While watermelon contains rapidly absorbed simple sugars giving it a high Glycemic Index (GI ~76), its high water content means that a typical 120 g slice contains only 6 g of available carbohydrate. The resulting Glycemic Load is (76 x 6) / 100 = 4.56 (low GL), producing minimal overall glycemic excursion compared to a dense carbohydrate food like white rice (GL ~34).',
      'তরমুজের শর্করা দ্রুত শোষিত হওয়ায় এর GI বেশি (৭৬) হলেও এতে পানির পরিমাণ অত্যন্ত বেশি থাকায় এক টুকরো তরমুজে মাত্র ৬ গ্রাম শর্করা থাকে। ফলে এর গ্লাইসেমিক লোড দাঁড়ায় মাত্র ৪.৫৬ (লো GL), যা ভাতের মতো ঘন শর্করার (GL ~৩৪) তুলনায় রক্তে চিনির মাত্রায় অত্যন্ত নগণ্য প্রভাব ফেলে।'
    ),
  },
}
