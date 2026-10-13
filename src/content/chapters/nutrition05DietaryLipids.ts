import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const dietaryLipidsRefs = [
  {
    id: 'calder-annals-fatty-acids',
    authors: 'Philip C. Calder',
    title: 'Functional Roles of Fatty Acids and Their Effects on Human Health',
    organization: 'Annals of Nutrition & Metabolism',
    year: 2015,
    url: 'https://doi.org/10.1159/000433299',
    doi: '10.1159/000433299',
  },
  {
    id: 'mozaffarian-nejm-trans-fats',
    authors: 'Dariush Mozaffarian, Martijn B. Katan, Alberto Ascherio, Meir J. Stampfer, Walter C. Willett',
    title: 'Trans Fatty Acids and Cardiovascular Disease',
    organization: 'The New England Journal of Medicine',
    year: 2006,
    url: 'https://doi.org/10.1056/NEJMra054035',
    doi: '10.1056/NEJMra054035',
  },
  {
    id: 'simopoulos-biomed-omega-ratio',
    authors: 'Artemis P. Simopoulos',
    title: 'The Importance of the Ratio of Omega-6/Omega-3 Essential Fatty Acids',
    organization: 'Biomedicine & Pharmacotherapy',
    year: 2002,
    url: 'https://doi.org/10.1016/S0753-3322(02)00253-6',
    doi: '10.1016/S0753-3322(02)00253-6',
  },
  {
    id: 'gropper-advanced-nutrition-lipids',
    authors: 'Sareen S. Gropper, Jack L. Smith, Timothy P. Carr',
    title: 'Advanced Nutrition and Human Metabolism, 8th edition, Chapter 5: Lipids',
    organization: 'Cengage Learning',
    year: 2021,
    url: 'https://www.cengage.com/c/advanced-nutrition-and-human-metabolism-8e-gropper/9780357449813/',
  },
]

export const nutrition05DietaryLipidsLesson: LessonTopic = {
  id: 'topic.nutrition.dietary-lipids-fatty-acids-pufa',
  slug: 'dietary-lipids-fatty-acids-pufa',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '05 · Dietary Lipids: Fatty Acid Saturation, Trans-Fats & Essential PUFA Ratios',
    '০৫ · খাদ্যতালিকার চর্বি: ফ্যাটি অ্যাসিডের সম্পৃক্ততা, ট্রান্স-ফ্যাট ও অত্যাবশ্যক PUFA অনুপাত'
  ),
  summary: l(
    'Chemical structure and physiological impacts of dietary lipids: saturated, monounsaturated, and polyunsaturated fatty acids, industrial trans-fat atherogenicity, competitive desaturation of omega-6 and omega-3 cascades, and lipid mediators.',
    'খাদ্য চর্বির রাসায়নিক গঠন ও শারীরবৃত্তীয় প্রভাব: সম্পৃক্ত, মনো-অসম্পৃক্ত এবং পলি-অসম্পৃক্ত ফ্যাটি অ্যাসিড, ট্রান্স-ফ্যাটের ক্ষতিকর কার্যপদ্ধতি, ওমেগা-৬ ও ওমেগা-৩ পথের প্রতিযোগিতামূলক রূপান্তর এবং প্রদাহ নিয়ন্ত্রক লিপিড মধ্যস্থতাকারী।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Distinguish the chemical conformations and biophysical properties of saturated (SFA), cis-monounsaturated (MUFA), cis-polyunsaturated (PUFA), and industrial trans fatty acids.',
      'সম্পৃক্ত (SFA), সিস-মনো-অসম্পৃক্ত (MUFA), সিস-পলি-অসম্পৃক্ত (PUFA) এবং শিল্পজাত ট্রান্স ফ্যাটি অ্যাসিডের রাসায়নিক গঠন ও জৈব-ভৌত বৈশিষ্ট্য পার্থক্য করতে পারা।'
    ),
    l(
      'Map the competitive enzymatic elongation and desaturation pathways (FADS1, FADS2, ELOVL5) converting linoleic acid (LA) to arachidonic acid (ARA) versus alpha-linolenic acid (ALA) to EPA and DHA.',
      'লিনোলিক অ্যাসিড (LA) থেকে অ্যারাকিডোনিক অ্যাসিড (ARA) এবং আলফা-লিনোলেনিক অ্যাসিড (ALA) থেকে EPA ও DHA তৈরিতে FADS1, FADS2 ও ELOVL5 এনজাইমের প্রতিযোগিতামূলক রূপান্তর পথ বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Evaluate the cardiovascular mechanisms of industrial trans fatty acids, including CETP activation, LDL receptor downregulation, and endothelial inflammatory signaling.',
      'শিল্পজাত ট্রান্স ফ্যাটের কার্ডিওভাসকুলার ক্ষতিসাধন প্রক্রিয়া (CETP সক্রিয়করণ, LDL রিসেপ্টর দমন ও রক্তনালীর প্রদাহ) মূল্যায়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.fatty-acid-oxidation-ketones'],
  references: dietaryLipidsRefs,
  evidenceBySection: {
    introduction: ['calder-annals-fatty-acids', 'gropper-advanced-nutrition-lipids'],
    structure: ['gropper-advanced-nutrition-lipids', 'mozaffarian-nejm-trans-fats'],
    mechanism: ['calder-annals-fatty-acids', 'simopoulos-biomed-omega-ratio'],
    integration: ['mozaffarian-nejm-trans-fats', 'simopoulos-biomed-omega-ratio'],
    practice: ['gropper-advanced-nutrition-lipids', 'calder-annals-fatty-acids'],
    takeaways: ['calder-annals-fatty-acids', 'mozaffarian-nejm-trans-fats'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Chemical Architecture of Dietary Fatty Acids', '১. খাদ্য ফ্যাটি অ্যাসিডের রাসায়নিক গঠন'), sectionId: 'introduction' },
      { id: 'sec-trans-fats', label: l('2. Cis vs Trans Isomerism & Industrial Hydrogenation', '২. সিস বনাম ট্রান্স আইসোমারিজম ও শিল্পজাত হাইড্রোজিনেশন'), sectionId: 'structure' },
      { id: 'sec-pufa-pathway', label: l('3. Essential Fatty Acids & Eicosanoid Biosynthesis', '৩. অত্যাবশ্যক ফ্যাটি অ্যাসিড ও আইকোসানয়েড জৈব-সংশ্লেষণ'), sectionId: 'mechanism' },
      { id: 'sec-omega-ratio', label: l('4. Omega-6 to Omega-3 Balance & Membrane Physiology', '৪. ওমেগা-৬ ও ওমেগা-৩ অনুপাত এবং কোষপর্দার শারীরবৃত্ত'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Clinical Lipid Assessment & Dietary Calculations', '৫. ক্লিনিক্যাল লিপিড মূল্যায়ন ও খাদ্যতালিকা হিসাব'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Saturated Fatty Acid (SFA)', 'সম্পৃক্ত ফ্যাটি অ্যাসিড (SFA)'),
        definition: l(
          'A fatty acid hydrocarbon chain containing no carbon-carbon double bonds, adopting a fully extended linear zigzag conformation that packs tightly into biological membranes and raises melting temperatures.',
          'কার্বন শিকলে কোনো দ্বি-বন্ধনবিহীন ফ্যাটি অ্যাসিড, যা সোজা রৈখিক বিন্যাসের কারণে কোষপর্দায় অত্যন্ত ঘন সন্নিবেশ তৈরি করে এবং গলনাঙ্ক বৃদ্ধি করে।'
        ),
      },
      {
        term: l('Industrial Trans Fatty Acid (iTFA)', 'শিল্পজাত ট্রান্স ফ্যাটি অ্যাসিড (iTFA)'),
        definition: l(
          'An unsaturated fatty acid containing one or more double bonds in the trans configuration produced by partial catalytic hydrogenation of vegetable oils, imparting rigid rod-like geometry, elevating CETP activity, and driving atherogenesis.',
          'উদ্ভিজ্জ তেলের আংশিক হাইড্রোজিনেশনে উৎপাদিত ট্রান্স-কনফিগারেশনের দ্বি-বন্ধনযুক্ত ফ্যাটি অ্যাসিড, যা কোষপর্দাকে অনমনীয় করে, CETP বৃদ্ধি করে এবং ধমনীর প্লাক তৈরিকে ত্বরান্বিত করে।'
        ),
      },
      {
        term: l('Specialized Pro-resolving Mediators (SPMs)', 'প্রদাহ প্রশমনকারী বিশেষ মধ্যস্থতাকারী (SPM)'),
        definition: l(
          'Enzymatic oxygenated metabolites of EPA and DHA (resolvins, protectins, maresins) that actively terminate acute inflammation, clear apoptotic leukocytes, and promote tissue regeneration without immunosuppression.',
          'EPA ও DHA থেকে উৎপাদিত অক্সিজেনযুক্ত জৈব উপাদান (রিজলভিন, প্রোটেকটিন, মারিসিন), যা তীব্র প্রদাহ থামায়, মৃত শ্বেতকণিকা অপসারণ করে এবং টিস্যু নিরাময়কে ত্বরান্বিত করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating the Dietary Omega-6 to Omega-3 Ratio', 'খাদ্যতালিকায় ওমেগা-৬ ও ওমেগা-৩ অনুপাত নির্ণয়'),
        steps: [
          l(
            'Step 1: Quantify daily intake of linoleic acid (LA) and arachidonic acid (ARA) in grams. For a standard Western diet, measured n-6 intake is 16.0 g/day.',
            'ধাপ ১: দৈনন্দিন লিনোলিক অ্যাসিড (LA) ও অ্যারাকিডোনিক অ্যাসিডের (ARA) পরিমাণ নির্ধারণ করুন। একটি সাধারণ খাদ্যাভ্যাসে n-6 গ্রহণ প্রায় ১৬.০ গ্রাম/দিন।'
          ),
          l(
            'Step 2: Quantify total n-3 intake, combining plant alpha-linolenic acid (ALA: 1.1 g) and marine EPA + DHA (0.1 g), totaling 1.2 g/day.',
            'ধাপ ২: মোট n-3 ফ্যাটি অ্যাসিড গ্রহণ পরিমাপ করুন: উদ্ভিজ্জ ALA (১.১ গ্রাম) এবং সামুদ্রিক EPA + DHA (০.১ গ্রাম), মোট ১.২ গ্রাম/দিন।'
          ),
          l(
            'Step 3: Calculate the ratio: 16.0 g / 1.2 g = 13.3 : 1. Compare against the evolutionary target ratio of 1:1 to 4:1.',
            'ধাপ ৩: অনুপাত হিসাব করুন: ১৬.০ গ্রাম / ১.২ গ্রাম = ১৩.৩ : ১। বিবর্তনীয়ভাবে অনুকূল ১:১ থেকে ৪:১ লক্ষ্যমাত্রার সাথে তুলনা করুন।'
          ),
        ],
        conclusion: l(
          'An elevated ratio of 13.3:1 creates heavy enzymatic substrate competition favoring pro-inflammatory 2-series prostaglandins (PGE2) and 4-series leukotrienes (LTB4) over anti-inflammatory resolvins, warranting dietary rebalancing via reduced seed oils and increased cold-water fish.',
          '১৩.৩:১ এর মতো উচ্চ অনুপাত এনজাইমের রূপান্তর পথে ওমেগা-৬ কে প্রাধান্য দেয়, যা প্রদাহসৃষ্টিকারী PGE2 ও LTB4 বৃদ্ধি করে এবং অ্যান্টি-ইনফ্ল্যামেটরি রিজলভিন কমিয়ে দেয়; তাই প্রক্রিয়াজাত তেলের বদলে সামুদ্রিক মাছ বৃদ্ধির সুপারিশ করা হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does industrial partial hydrogenation of vegetable oils markedly increase cardiovascular disease risk compared to unrefined saturated fats?',
          'অশোধিত সম্পৃক্ত চর্বির তুলনায় উদ্ভিজ্জ তেলের শিল্পজাত আংশিক হাইড্রোজিনেশন কেন কার্ডিওভাসকুলার রোগের ঝুঁকি নাটকীয়ভাবে বৃদ্ধি করে?'
        ),
        answer: l(
          'Industrial trans fats simultaneously raise atherogenic LDL cholesterol and lower protective HDL cholesterol by stimulating cholesteryl ester transfer protein (CETP), while directly impairing endothelial nitric oxide synthase (eNOS) and triggering NF-kB-mediated vascular inflammation.',
          'শিল্পজাত ট্রান্স ফ্যাট কোলেস্টেরিল এস্টার ট্রান্সফার প্রোটিনকে (CETP) অতি-সক্রিয় করে রক্তে ক্ষতিকর LDL বাড়ায় এবং সুরক্ষাকারী HDL কমায়, একই সাথে রক্তনালীর নাইট্রিক অক্সাইড তৈরিতে বাধা দিয়ে প্রদাহ সৃষ্টি করে।'
        ),
      },
      {
        question: l(
          'What is the rate-limiting enzyme shared between the omega-6 and omega-3 elongation/desaturation pathways, and what governs substrate competition?',
          'ওমেগা-৬ এবং ওমেগা-৩ ফ্যাটি অ্যাসিডের দীর্ঘীকরণ ও অসম্পৃক্তকরণ পথের সাধারণ সীমিতকরণ এনজাইম কোনটি এবং এর সাবস্ট্রেট প্রতিযোগিতা কী দ্বারা নিয়ন্ত্রিত হয়?'
        ),
        answer: l(
          'Delta-6 desaturase (encoded by FADS2) is the shared, rate-limiting gatekeeper. Although FADS2 has higher binding affinity for alpha-linolenic acid (n-3), excessive dietary intake of linoleic acid (n-6) outcompetes n-3 by mass action, suppressing EPA and DHA conversion.',
          'ডেল্টা-৬ ডিস্যাচুরেজ (FADS2) হলো সাধারণ সীমিতকরণ এনজাইম। যদিও n-3 এর প্রতি এর আকর্ষণ বেশি, খাদ্যে n-6 এর অতি-মাত্রার উপস্থিতি ভর-ক্রিয়ার প্রভাবে n-3 কে কোণঠাসা করে EPA ও DHA উৎপাদন কমিয়ে দেয়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'lipid-saturation-pufa-cascade',
    title: l('Dietary Lipid Architecture & PUFA Cascade', 'খাদ্য লিপিড গঠন ও PUFA রূপান্তর প্রবাহ'),
    description: l(
      'Explore the molecular geometry of saturated vs trans vs cis bonds, and track the competitive FADS enzymatic cascade branching into eicosanoids and resolvins.',
      'সম্পৃক্ত, ট্রান্স ও সিস দ্বি-বন্ধনের আণবিক বিন্যাস পরীক্ষা করুন এবং FADS এনজাইম দ্বারা আইকোসানয়েড ও রিজলভিন তৈরির প্রতিযোগিতামূলক পথ পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Biochemical pathway simulation for nutritional education; lipid profiles require standardized laboratory serum testing.',
      'পুষ্টি শিক্ষার জন্য জৈবরসায়ন সিমুলেশন; লিপিড প্রোফাইল মূল্যায়নে স্বীকৃত ক্লিনিক্যাল রক্ত পরীক্ষা আবশ্যক।'
    ),
    svgType: 'lipid-cascade',
    items: [
      {
        id: 'node-sfa',
        label: l('Saturated Fatty Acids (SFA: Lauric, Myristic, Palmitic)', 'সম্পৃক্ত ফ্যাটি অ্যাসিড (লরিক, মিরিস্টিক, পামিটিক)'),
        description: l(
          'No double bonds; linear carbon skeleton packs densely into bilayers, elevating membrane rigidity and regulating hepatic LDL receptor clearance.',
          'দ্বি-বন্ধনবিহীন সোজা কার্বন শিকল কোষপর্দাকে ঘন ও শক্ত করে এবং যকৃতের LDL রিসেপ্টরের কার্যকারিতা নিয়ন্ত্রণ করে।'
        ),
        details: l(
          'Palmitic acid (C16:0) is the most abundant dietary SFA. High intakes of myristic (C14:0) and palmitic acids downregulate hepatic LDL receptor expression via SREBP-1c modulation, increasing circulating ApoB-100 particles.',
          'পামিটিক অ্যাসিড (C16:0) খাদ্যের প্রধান SFA। অতিরিক্ত মিরিস্টিক ও পামিটিক অ্যাসিড যকৃতের LDL রিসেপ্টর কমিয়ে রক্তে ক্ষতিকর এপো-বি কণা বৃদ্ধি করে।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-trans',
        label: l('Industrial Trans Fats (Elaidic Acid 18:1t)', 'শিল্পজাত ট্রান্স ফ্যাট (ইলাইডিক অ্যাসিড ১৮:১t)'),
        description: l(
          'Trans double bonds create a linear geometry that mimics saturated fats while dysregulating CETP and promoting systemic endothelial dysfunction.',
          'ট্রান্স কনফিগারেশন অসম্পৃক্ত চর্বিকে সম্পৃক্ত চর্বির মতো সোজা করে ফেলে, যা রক্তনালীর মারাত্মক প্রদাহ ঘটায়।'
        ),
        details: l(
          'Partially hydrogenated oils introduce trans double bonds where hydrogen atoms sit on opposite sides. Elaidic acid activates CETP, shunting cholesterol from protective HDL into dense LDL particles.',
          'আংশিক হাইড্রোজিনেশনে হাইড্রোজেনের বিপরীত অবস্থানের কারণে ট্রান্স ফ্যাট তৈরি হয়। এটি CETP বাড়িয়ে ভালো HDL কমায় এবং বিপজ্জনক ছোট LDL বৃদ্ধি করে।'
        ),
        color: '#ef4444',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-mufa',
        label: l('Cis-MUFA (Oleic Acid 18:1c9)', 'সিস-মনো-অসম্পৃক্ত ফ্যাট (ওলিক অ্যাসিড ১৮:১c৯)'),
        description: l(
          'Single cis double bond creates a rigid 30-degree kink, optimizing membrane fluidity without susceptibility to rapid lipid peroxidation.',
          'একটিমাত্র সিস দ্বি-বন্ধনের ৩০ ডিগ্রি বাঁকের কারণে কোষপর্দা নমনীয় থাকে এবং পারঅক্সিডেশনের ঝুঁকি কম থাকে।'
        ),
        details: l(
          'Oleic acid (dominant in extra virgin olive oil) replaces saturated fats without lowering HDL, protecting LDL from oxidative modification and maintaining endothelial nitric oxide bioactivity.',
          'অলিভ অয়েলের প্রধান উপাদান ওলিক অ্যাসিড ভালো HDL না কমিয়েই রক্তের কোলেস্টেরল নিয়ন্ত্রণে রাখে এবং রক্তনালীকে সুস্থ রাখে।'
        ),
        color: '#10b981',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-omega6',
        label: l('Omega-6 Cascade (LA → ARA → Pro-inflammatory Eicosanoids)', 'ওমেগা-৬ পথ (LA → ARA → প্রদাহবর্ধক আইকোসানয়েড)'),
        description: l(
          'Linoleic acid undergoes FADS2 desaturation to Arachidonic Acid (ARA), substrate for 2-series prostaglandins and 4-series leukotrienes.',
          'লিনোলিক অ্যাসিড FADS2 দ্বারা অ্যারাকিডোনিক অ্যাসিডে (ARA) রূপান্তরিত হয়, যা রক্ত জমাট বাঁধা ও প্রদাহসৃষ্টিকারী উপাদান তৈরি করে।'
        ),
        details: l(
          'Excessive arachidonic acid conversion via cyclooxygenase (COX-1/2) and lipoxygenase (5-LOX) produces thromboxane A2 (platelet aggregator) and leukotriene B4 (potent neutrophil chemoattractant).',
          'অতিরিক্ত অ্যারাকিডোনিক অ্যাসিড COX ও LOX এনজাইমের মাধ্যমে রক্ত জমাট বাঁধায় এবং ধমনীতে শ্বেতকণিকা টেনে এনে দীর্ঘস্থায়ী প্রদাহ তৈরি করে।'
        ),
        color: '#f97316',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-omega3',
        label: l('Omega-3 Cascade (ALA → EPA / DHA → Resolvins & Protectins)', 'ওমেগা-৩ পথ (ALA → EPA / DHA → রিজলভিন ও প্রোটেকটিন)'),
        description: l(
          'Alpha-linolenic acid competes for FADS enzymes to yield EPA and DHA, precursors to specialized pro-resolving mediators that terminate inflammation.',
          'আলফা-লিনোলেনিক অ্যাসিড FADS এনজাইমের মাধ্যমে EPA ও DHA তৈরি করে, যা প্রদাহ প্রশমনকারী শক্তিশালী রিজলভিন উপাদান উৎপন্ন করে।'
        ),
        details: l(
          'Eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) produce 3-series prostaglandins (PGE3, non-aggregatory), resolvin E1/D1, and protectin D1, which actively quiet inflammation.',
          'EPA এবং DHA রক্তনালীর প্রদাহ শান্ত করে, ট্রাইগ্লিসারাইড কমায় এবং মস্তিষ্কের সিন্যাপ্সের স্থায়িত্ব বজায় রাখে।'
        ),
        color: '#06b6d4',
        svgCoords: { x: 190, y: 175, width: 310, height: 48 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('What Are Dietary Fats & Why Do They Matter?', 'খাদ্যতালিকার চর্বি কী এবং কেন তা গুরুত্বপূর্ণ?'),
          paragraphs: [
            l(
              'Dietary lipids represent the most energy-dense macronutrient in human nutrition, providing approximately 9 kilocalories per gram compared to 4 kilocalories per gram from carbohydrates and proteins [1]. Beyond serving as an efficient chemical fuel reserve stored in adipose tissue, dietary fats are indispensable structural components of all cellular membranes and are required for the intestinal absorption of fat-soluble vitamins (A, D, E, and K) [1, 4].',
              'খাদ্যতালিকার চর্বি বা লিপিড হলো মানবদেহের সবচেয়ে ঘন শক্তির উৎস, যা প্রতি গ্রামে প্রায় ৯ কিলোক্যালরি শক্তি সরবরাহ করে (শর্করা ও প্রোটিনে যেখানে মাত্র ৪ কিলোক্যালরি) [১]। অ্যাডিপোজ টিস্যুতে শক্তির ভবিষ্যৎ সঞ্চয় হিসেবে কাজ করার পাশাপাশি খাদ্য চর্বি প্রতিটি মানব কোষের ঝিল্লি বা পর্দার অবিচ্ছেদ্য কাঠামোগত ভিত্তি এবং চর্বিতে দ্রবণীয় ভিটামিন (A, D, E এবং K) শোষণে অপরিহার্য [১, ৪]।'
            ),
            l(
              'A standard fatty acid consists of an aliphatic hydrocarbon chain terminating in a polar carboxyl group. The presence, number, and geometric orientation of carbon-carbon double bonds determine whether a fat is solid or liquid at room temperature and dictate its precise metabolic behavior in the human body [4].',
              'একটি আদর্শ ফ্যাটি অ্যাসিডের একদিকে থাকে হাইড্রোকার্বনের শিকল এবং অন্য প্রান্তে থাকে একটি কার্বক্সিল গ্রুপ। এই কার্বন শিকলে দ্বি-বন্ধনের উপস্থিতি, সংখ্যা এবং জ্যামিতিক অবস্থানের ওপর ভিত্তি করেই চর্বি তরল হবে নাকি কঠিন হবে তা নির্ধারিত হয় এবং দেহে তার বিপাকীয় গতিপথ নিয়ন্ত্রিত হয় [৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Saturation States & The Trans-Fat Hazard', 'ফ্যাটি অ্যাসিডের সম্পৃক্ততা ও ট্রান্স-ফ্যাটের বিপদ'),
          paragraphs: [
            l(
              'Fatty acids are categorized into saturated fatty acids (SFAs), monounsaturated fatty acids (MUFAs), and polyunsaturated fatty acids (PUFAs) based on hydrogen saturation [4]. Saturated fats (found in dairy, meat, and tropical oils) possess no double bonds; their straight hydrocarbon chains pack tightly together, forming solid fats that resist heat-induced oxidation [1, 4].',
              'হাইড্রোজেন পরমাণুর উপস্থিতির ভিত্তিতে ফ্যাটি অ্যাসিড তিন প্রকার: সম্পৃক্ত (SFA), মনো-অসম্পৃক্ত (MUFA) এবং পলি-অসম্পৃক্ত (PUFA) [৪]। সম্পৃক্ত চর্বিতে (দুধ, লাল মাংস ও পাম তেলে বিদ্যমান) কোনো দ্বি-বন্ধন থাকে না; এদের সোজা শিকলগুলো খুব ঘন সন্নিবেশ তৈরি করে যা স্বাভাবিক তাপমাত্রায় কঠিন থাকে এবং তাপে সহজে জারিত হয় না [১, ৪]।'
            ),
            l(
              'Industrial trans fats were created through partial catalytic hydrogenation to turn liquid vegetable oils into semi-solid baking fats [2]. In nature, nearly all unsaturated fats have a cis configuration, introducing a kink. In trans fats, hydrogen atoms sit on opposite sides of the double bond, creating an unnatural straight shape that damages blood vessel walls and increases heart disease risk [2, 4].',
              'উদ্ভিজ্জ তেলকে দীর্ঘস্থায়ী ও কঠিন করার জন্য কারখানায় কৃত্রিম হাইড্রোজিনেশনের মাধ্যমে ক্ষতিকর ট্রান্স ফ্যাট তৈরি করা হয় [২]। প্রকৃতির প্রায় সব অসম্পৃক্ত চর্বি সিস-বিন্যাসে বাঁকানো থাকে। কিন্তু ট্রান্স ফ্যাটে হাইড্রোজেনের অবস্থানের কারণে শিকলটি কৃত্রিমভাবে সোজা হয়ে যায়, যা রক্তনালীর মারাত্মক ক্ষতি করে হৃদরোগের ঝুঁকি বহুগুণ বাড়িয়ে দেয় [২, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Essential Fatty Acids: Omega-6 vs Omega-3', 'অত্যাবশ্যক ফ্যাটি অ্যাসিড: ওমেগা-৬ বনাম ওমেগা-৩'),
          paragraphs: [
            l(
              'Human cells lack delta-12 and delta-15 desaturase enzymes, meaning we cannot insert double bonds close to the methyl end of a fatty acid [1, 4]. Consequently, linoleic acid (an omega-6 fatty acid) and alpha-linolenic acid (an omega-3 fatty acid) are strictly essential nutrients that must be obtained directly from our diet [3, 4].',
              'মানবদেহের কোষে ডেল্টা-১২ ও ডেল্টা-১৫ ডিস্যাচুরেজ এনজাইম না থাকায় আমরা ফ্যাটি অ্যাসিডের মিথাইল প্রান্তের কাছে নতুন দ্বি-বন্ধন তৈরি করতে পারি না [১, ৪]। ফলে লিনোলিক অ্যাসিড (ওমেগা-৬) এবং আলফা-লিনোলেনিক অ্যাসিড (ওমেগা-৩) আমাদের জন্য অত্যাবশ্যকীয় পুষ্টি উপাদান, যা খাদ্যের মাধ্যমে সরাসরি গ্রহণ করা আবশ্যক [৩, ৪]।'
            ),
            l(
              'Inside cells, both essential fatty acids compete for the exact same enzyme systems to lengthen their chains [3]. Omega-6 fatty acids convert into arachidonic acid, producing molecules that promote acute inflammation and blood clotting. Conversely, omega-3 fatty acids convert into EPA and DHA, producing molecules that actively resolve inflammation and promote vascular relaxation [1, 3].',
              'কোষের ভেতরে এই দুটি অত্যাবশ্যক ফ্যাটি অ্যাসিড শিকল দীর্ঘ করার জন্য একই এনজাইমের সাথে প্রতিদ্বন্দ্বিতা করে [৩]। ওমেগা-৬ থেকে অ্যারাকিডোনিক অ্যাসিড তৈরি হয় যা প্রয়োজনে প্রদাহ ও রক্ত জমাট বাঁধায়। অন্যদিকে ওমেগা-৩ থেকে EPA ও DHA তৈরি হয় যা প্রদাহ প্রশমন করে এবং রক্তনালীকে শিথিল রাখতে সাহায্য করে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Dietary Ratios, Membrane Fluidity & Health', 'খাদ্যের অনুপাত, কোষপর্দার নমনীয়তা ও স্বাস্থ্য'),
          paragraphs: [
            l(
              'Historically, human ancestors consumed an omega-6 to omega-3 ratio near 1:1 to 2:1 [3]. Modern industrial food systems dominated by refined soybean, corn, and sunflower oils have skewed this ratio toward 15:1 or higher, overwhelming human cellular membranes with excess omega-6 arachidonic acid and promoting systemic low-grade inflammation [1, 3].',
              'ঐতিহাসিকভাবে মানুষের আদি খাদ্যাভ্যাসে ওমেগা-৬ ও ওমেগা-৩ অনুপাত ছিল প্রায় ১:১ থেকে ২:১ [৩]। কিন্তু আধুনিক প্রক্রিয়াজাত খাদ্যে অতিরিক্ত সয়াবিন ও ভুট্টার তেলের ব্যবহারের ফলে এই অনুপাত বেড়ে ১৫:১ বা তার বেশি হয়ে গেছে; এর ফলে কোষপর্দায় অতিরিক্ত ওমেগা-৬ জমে দীর্ঘস্থায়ী সুপ্ত প্রদাহের ঝুঁকি তৈরি হয় [১, ৩]।'
            ),
            l(
              'Replacing saturated fats and trans fats with olive oil (cis-monounsaturated oleic acid) and fatty fish (long-chain EPA and DHA) optimizes cell membrane fluidity, preserves insulin sensitivity, and lowers cardiovascular morbidity without compromising health [1, 2].',
              'সম্পৃক্ত চর্বি ও ট্রান্স ফ্যাটের বদলে অলিভ অয়েল (সিস-মনো-অসম্পৃক্ত ওলিক অ্যাসিড) এবং সামুদ্রিক মাছের চর্বি (EPA ও DHA) গ্রহণ করলে কোষপর্দার নমনীয়তা বাড়ে, ইনসুলিন সংবেদনশীলতা বজায় থাকে এবং হৃদরোগের ঝুঁকি হ্রাস পায় [১, ২]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Practical Dietary Strategies for Healthy Fats', 'স্বাস্থ্যকর চর্বি গ্রহণের ব্যবহারিক কৌশল'),
          paragraphs: [
            l(
              'Evaluating a healthy dietary lipid intake requires shifting focus away from total fat quantity toward fat quality and source integrity [1, 4]. Diets deriving 25% to 35% of total daily energy from fats are physiologically sound, provided the majority originates from whole-food sources such as avocados, extra-virgin olive oil, tree nuts, seeds, and wild-caught oily fish [1, 4].',
              'স্বাস্থ্যকর চর্বি মূল্যায়নে মোট চর্বির পরিমাণের চেয়ে চর্বির গুণমান ও প্রাকৃতিক উৎসের ওপর জোর দেওয়া উচিত [১, ৪]। দৈনন্দিন মোট ক্যালোরির ২৫% থেকে ৩৫% স্বাস্থ্যকর চর্বি থেকে আসা সম্পূর্ণ স্বাভাবিক, যদি তার সিংহভাগ আসে বাদাম, বীজ, এক্সট্রা ভার্জিন অলিভ অয়েল, অ্যাভোকাডো এবং সামুদ্রিক মাছের মতো প্রাকৃতিক উৎস থেকে [১, ৪]।'
            ),
            l(
              'Consumers should actively eliminate industrial partially hydrogenated oils by checking ingredient labels for hidden trans fats, minimize highly refined high-linoleic seed oils heated to extreme smoking points, and include at least two servings of fatty cold-water fish weekly to ensure adequate EPA and DHA status [2, 3].',
              'গ্রাহকদের উচিত প্যাকেটের গায়ে আংশিক হাইড্রোজিনেটেড তেল দেখে ট্রান্স ফ্যাট পুরোপুরি বর্জন করা, অতিরিক্ত তাপে উত্তপ্ত প্রক্রিয়াজাত তেলের ব্যবহার কমানো এবং সপ্তাহে অন্তত দুই দিন ওমেগা-৩ সমৃদ্ধ তৈলাক্ত মাছ খাওয়া [২, ৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Educational Takeaways', 'মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'In summary, dietary fats are complex biological regulators that dictate cellular signaling, membrane fluidity, and systemic inflammation [1]. Industrial trans fats are strictly harmful to cardiovascular health and have no safe intake threshold [2]. A balanced omega-6 to omega-3 intake combined with unrefined monounsaturated fats supports long-term cardiometabolic wellness [1, 3].',
              'সংক্ষেপে, খাদ্যতালিকার চর্বি কেবল ক্যালোরির উৎস নয়, বরং কোষীয় সংকেত এবং রক্তনালীর স্বাস্থ্য নিয়ন্ত্রক [১]। শিল্পজাত ট্রান্স ফ্যাটের কোনো নিরাপদ মাত্রা নেই এবং এটি হৃদস্বাস্থ্যের জন্য মারাত্মক ক্ষতিকর [২]। ওমেগা-৬ ও ওমেগা-৩ এর সঠিক ভারসাম্য এবং প্রাকৃতিক মনো-অসম্পৃক্ত চর্বি দীর্ঘমেয়াদী সুস্বাস্থ্যের মূল চাবিকাঠি [১, ৩]।'
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
          heading: l('Biochemical Classification & Physical Properties of Fatty Acids', 'ফ্যাটি অ্যাসিডের প্রাণরাসায়নিক শ্রেণিবিন্যাস ও ভৌত বৈশিষ্ট্য'),
          paragraphs: [
            l(
              'Fatty acids are aliphatic monocarboxylic acids categorized by carbon chain length (short-chain: <6C, medium-chain: 6–12C, long-chain: 14–20C, very-long-chain: ≥22C) and the presence of unsaturated double bonds [4]. Systematic Delta nomenclature (e.g., 18:2Δ9,12) enumerates carbon atoms from the terminal carboxyl carbon (C1), whereas Omega (or n) nomenclature (e.g., 18:2 n-6) counts from the terminal methyl carbon (omega carbon), reflecting their metabolic conservation during elongation and desaturation [1, 4].',
              'ফ্যাটি অ্যাসিড হলো অ্যালিফ্যাটিক মনোকার্বক্সিলিক অ্যাসিড, যা কার্বন শিকলের দৈর্ঘ্যের ওপর ভিত্তি করে চার ভাগে বিভক্ত (ক্ষুদ্র শিকল: <৬ কার্বন, মাঝারি: ৬–১২ কার্বন, দীর্ঘ: ১৪–২০ কার্বন, অতি-দীর্ঘ: ≥২২ কার্বন) [৪]। ডেল্টা পদ্ধতিতে কার্বক্সিল প্রান্ত (C1) থেকে দ্বিবন্ধনের অবস্থান গোনা হয় (যেমন ১৮:২Δ৯,১২), আর ওমেগা (বা n) পদ্ধতিতে মিথাইল প্রান্ত থেকে গোনা হয় (যেমন ১৮:২ n-৬), যা রূপান্তর প্রক্রিয়ায় অপরিবর্তিত থাকে [১, ৪]।'
            ),
            l(
              'The thermodynamic melting temperature (Tm) of fatty acids is dictated by chain length and double bond geometry. Each additional methylene group (-CH2-) increases van der Waals London dispersion forces, raising the melting point. Conversely, the introduction of a cis double bond introduces a rigid 30-degree bend into the hydrocarbon backbone, disrupting acyl chain packing in biological bilayers and dramatically lowering the phase transition temperature [4].',
              'ফ্যাটি অ্যাসিডের গলনাঙ্ক (Tm) শিকলের দৈর্ঘ্য ও দ্বি-বন্ধনের কাঠামোর ওপর নির্ভর করে। প্রতিটি অতিরিক্ত মিথিলিন গ্রুপ ভ্যান ডার ওয়ালস আকর্ষণ বাড়িয়ে গলনাঙ্ক বৃদ্ধি করে। অন্যদিকে প্রতিটি সিস দ্বি-বন্ধন শিকলে ৩০ ডিগ্রির বাঁক তৈরি করে কোষপর্দার ফসফোলিপিডের ঘন বিন্যাস ভেঙে দেয় এবং তরলীকরণের তাপমাত্রা নাটকীয়ভাবে কমিয়ে দেয় [৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Molecular Pharmacology of Industrial Trans Fatty Acids', 'শিল্পজাত ট্রান্স ফ্যাটি অ্যাসিডের আণবিক ফার্মাকোলজি'),
          paragraphs: [
            l(
              'Industrial trans fatty acids (iTFAs), predominantly elaidic acid (18:1t9) and trans-vaccenic acid isomers, are formed when nickel-catalyzed hydrogenation is interrupted to yield semi-solid shortenings [2]. The trans configuration places hydrogen atoms on opposite sides of the carbon-carbon double bond, yielding a thermodynamically stable linear conformation virtually identical in spatial volume to a saturated stearic acid molecule (18:0) [2, 4].',
              'শিল্পজাত ট্রান্স ফ্যাটি অ্যাসিড (যেমন ইলাইডিক অ্যাসিড ১৮:১t৯) নিকেল প্রভাবকের উপস্থিতিতে উদ্ভিজ্জ তেলের আংশিক হাইড্রোজিনেশনের সময় তৈরি হয় [২]। ট্রান্স দ্বি-বন্ধনের উভয় পাশে হাইড্রোজেনের বিপরীত অবস্থানের কারণে এটি সম্পৃক্ত স্টিয়ারিক অ্যাসিডের (১৮:০) মতো সোজা ও অনমনীয় রৈখিক রূপ ধারণ করে [২, ৪]।'
            ),
            l(
              'Unlike natural cis fatty acids, elaidic acid alters hepatic lipoprotein metabolism by upregulating the transcription and activity of Cholesteryl Ester Transfer Protein (CETP) [2]. Enhanced CETP accelerates the bidirectional exchange of cholesteryl esters from anti-atherogenic HDL to pro-atherogenic VLDL and LDL particles, decreasing circulating HDL-C while generating small, dense, oxidation-prone LDL particles [2]. Furthermore, iTFAs suppress endothelial nitric oxide synthase (eNOS) phosphorylation, provoking vascular endothelial apoptosis and monocyte adhesion [2].',
              'প্রাকৃতিক সিস ফ্যাটের বিপরীতে ইলাইডিক অ্যাসিড যকৃতের কোলেস্টেরিল এস্টার ট্রান্সফার প্রোটিনের (CETP) প্রকাশ ও কার্যকারিতা অতিমাত্রায় বাড়িয়ে দেয় [২]। বর্ধিত CETP ভালো HDL থেকে কোলেস্টেরিল এস্টার বের করে ক্ষতিকর VLDL ও LDL-এ স্থানান্তর করে; ফলে রক্তে HDL কমে যায় এবং ক্ষতিকর ছোট-ঘন LDL বৃদ্ধি পায় [২]। অধিকন্তু এটি রক্তনালীর নাইট্রিক অক্সাইড তৈরিতে বাধা দিয়ে প্রদাহ সৃষ্টি করে [২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Competitive FADS Desaturase Cascade & Eicosanoid Biology', 'প্রতিযোগিতামূলক FADS ডিস্যাচুরেজ প্রবাহ ও আইকোসানয়েড জীববিজ্ঞান'),
          paragraphs: [
            l(
              'Essential polyunsaturated fatty acid metabolism is governed by an shared, alternating sequence of desaturation and elongation reactions occurring on the cytosolic face of the endoplasmic reticulum [1, 4]. The pathway commences with Delta-6 desaturase (encoded by FADS2), adding a double bond to linoleic acid (18:2 n-6) to form gamma-linolenic acid (18:3 n-6), or to alpha-linolenic acid (18:3 n-3) to yield stearidonic acid (18:4 n-3) [1, 4].',
              'অত্যাবশ্যক পলি-অসম্পৃক্ত ফ্যাটি অ্যাসিডের বিপাক এন্ডোপ্লাজমিক রেটিকুলামের পর্দায় এক সেট সাধারণ এনজাইম দ্বারা নিয়ন্ত্রিত হয় [১, ৪]। ডেল্টা-৬ ডিস্যাচুরেজ (FADS2) এনজাইম লিনোলিক অ্যাসিডকে (১৮:২ n-৬) গামা-লিনোলেনিক অ্যাসিডে (১৮:৩ n-৬) এবং আলফা-লিনোলেনিক অ্যাসিডকে (১৮:৩ n-৩) স্টিয়ারিডোনিক অ্যাসিডে (১৮:৪ n-৩) রূপান্তরিত করে [১, ৪]।'
            ),
            l(
              'Following carbon chain elongation via ELOVL5, Delta-5 desaturase (encoded by FADS1) executes the next critical desaturation step, synthesizing arachidonic acid (ARA, 20:4 n-6) and eicosapentaenoic acid (EPA, 20:5 n-3) [1]. ARA is metabolized via Cyclooxygenase-1 and -2 (COX-1/2) into 2-series prostanoids (prostaglandin E2, thromboxane A2) and via 5-Lipoxygenase (5-LOX) into 4-series leukotrienes (LTB4), driving vasoconstriction, bronchoconstriction, platelet aggregation, and leukocyte extravasation [1, 3].',
              'ELOVL5 দ্বারা শিকল দুই কার্বন বৃদ্ধি পাওয়ার পর ডেল্টা-৫ ডিস্যাচুরেজ (FADS1) অ্যারাকিডোনিক অ্যাসিড (ARA, ২০:৪ n-৬) এবং আইকোসাপেন্টাইনোয়িক অ্যাসিড (EPA, ২০:৫ n-৩) তৈরি করে [১]। অ্যারাকিডোনিক অ্যাসিড COX এনজাইমের মাধ্যমে ২-সিরিজের প্রোস্টাগ্ল্যান্ডিন (PGE2) ও থ্রম্বোক্সেন (TXA2) এবং ৫-LOX এর মাধ্যমে ৪-সিরিজের লিউকোট্রিন (LTB4) তৈরি করে যা তীব্র প্রদাহ ও রক্ত জমাট বাঁধায় [১, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Resolvin Pathways & Substrate Competition Dynamics', 'রিজলভিন পথ ও সাবস্ট্রেট প্রতিযোগিতার গতিবিদ্যা'),
          paragraphs: [
            l(
              'In stark physiological contrast to arachidonate-derived mediators, EPA and docosahexaenoic acid (DHA, 22:6 n-3) serve as obligatory substrates for the synthesis of Specialized Pro-resolving Mediators (SPMs), including E-series resolvins (RvE1, RvE2), D-series resolvins (RvD1–RvD6), protectins (PD1), and maresins (MaR1) [1]. These bioactive lipid mediators actively switch off neutrophil infiltration, promote macrophage non-phlogistic efferocytosis of apoptotic granulocytes, and stimulate vascular mucosal re-epithelialization [1].',
              'অ্যারাকিডোনেটের বিপরীত দিকে EPA এবং DHA প্রদাহ প্রশমনকারী বিশেষ মধ্যস্থতাকারী (SPM) তৈরির প্রধান উৎস, যার মধ্যে রিজলভিন (RvE, RvD), প্রোটেকটিন (PD1) এবং মারিসিন (MaR1) অন্তর্ভুক্ত [১]। এই অণুগুলো শ্বেতকণিকার আক্রমণ থামায়, ম্যাক্রোফেজের মাধ্যমে মৃত কোষের পরিচ্ছন্নতা নিশ্চিত করে এবং টিস্যু নিরাময়কে দ্রুততর করে [১]।'
            ),
            l(
              'Because FADS1 and FADS2 operate near kinetic saturation, excessive dietary linoleic acid (>7% of energy) competitively suppresses the conversion of plant ALA to bioactive EPA and DHA, with conversion efficiencies in humans dropping below 5% for EPA and <0.5% for DHA [1, 3]. Thus, direct dietary consumption of preformed marine long-chain omega-3s is necessary to achieve anti-inflammatory tissue enrichment [1, 3].',
              'যেহেতু FADS1 ও FADS2 এনজাইমগুলো সাবস্ট্রেট সম্পৃক্ততার কাছাকাছি কাজ করে, খাদ্যে অতিরিক্ত লিনোলিক অ্যাসিড উদ্ভিজ্জ ALA থেকে EPA ও DHA রূপান্তরের গতিকে মারাত্মকভাবে বাধাগ্রস্ত করে (রূপান্তর হার EPA-র জন্য ৫% এর কম এবং DHA-র জন্য ০.৫% এর নিচে নেমে যায়) [১, ৩]। ফলে প্রদাহ নিয়ন্ত্রণের জন্য সামুদ্রিক উৎস থেকে সরাসরি EPA ও DHA গ্রহণ অত্যন্ত জরুরি [১, ৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Interpretation of Fatty Acid Profiles & Dietary Guidance', 'রক্তের ফ্যাটি অ্যাসিড প্রোফাইল মূল্যায়ন ও ক্লিনিক্যাল নির্দেশনা'),
          paragraphs: [
            l(
              'Clinical assessment of systemic omega-3 status is objectively quantified using the Omega-3 Index, defined as the percentage of EPA and DHA in total red blood cell membrane fatty acids [1]. An Omega-3 Index of <4% correlates with high cardiovascular mortality, whereas an index of ≥8% provides maximal cardioprotection against sudden cardiac death and fatal myocardial infarction [1].',
              'ক্লিনিক্যাল ক্ষেত্রে ওমেগা-৩ এর মাত্রা পরিমাপ করা হয় "ওমেগা-৩ ইনডেক্স" দ্বারা, যা লোহিত রক্তকণিকার পর্দার মোট ফ্যাটি অ্যাসিডে EPA ও DHA-র শতকরা হার প্রকাশ করে [১]। ৪% এর কম ওমেগা-৩ ইনডেক্স আকস্মিক হৃদরোগে মৃত্যুর উচ্চ ঝুঁকির নির্দেশক, যেখানে ৮% বা তার বেশি মাত্রা সর্বোত্তম হৃদসুরক্ষা নিশ্চিত করে [১]।'
            ),
            l(
              'Evidence-based nutritional intervention recommends restricting industrial trans fat intake to <1% of energy (or zero intake according to WHO REPLACE guidelines), moderating saturated fat to <10% while substituting with cis-monounsaturated extra-virgin olive oil, and prescribing 250–500 mg/day of combined EPA + DHA for healthy adults (or 2–4 g/day for clinical hypertriglyceridemia under medical guidance) [1, 2].',
              'প্রমাণভিত্তিক পুষ্টি নির্দেশিকা অনুযায়ী শিল্পজাত ট্রান্স ফ্যাট সম্পূর্ণ বর্জন (WHO REPLACE গাইডলাইন), সম্পৃক্ত চর্বি মোট ক্যালোরির ১০% এর নিচে রাখা এবং সুস্থ প্রাপ্তবয়স্কদের জন্য দৈনিক ২৫০–৫০০ মিলিগ্রাম EPA+DHA গ্রহণের পরামর্শ দেওয়া হয় (উচ্চ ট্রাইগ্লিসারিডেমিয়ায় চিকিৎসকের তত্ত্বাবধানে ২–৪ গ্রাম) [১, ২]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Summary & Clinical Pearls', 'একাডেমিক সারাংশ ও ক্লিনিক্যাল মুক্তা'),
          paragraphs: [
            l(
              'Fatty acid saturation, bond isomerism, and carbon position exert profound control over human bioenergetics, membrane architecture, and immune cell polarization [1, 4]. Industrial trans fats represent a potent, non-essential cardiovascular toxin [2]. Restoring the evolutionary equilibrium between n-6 and n-3 polyunsaturates modulates eicosanoid and resolvin networks to mitigate chronic inflammatory pathologies [1, 3].',
              'ফ্যাটি অ্যাসিডের সম্পৃক্ততা, আইসোমারিজম এবং কার্বনের বিন্যাস মানবদেহের শক্তিবিজ্ঞান, কোষপর্দার গঠন এবং রোগপ্রতিরোধ ব্যবস্থার ওপর গভীর প্রভাব ফেলে [১, ৪]। শিল্পজাত ট্রান্স ফ্যাট হলো মারাত্মক রক্তনালী বিষ [২]। ওমেগা-৬ ও ওমেগা-৩ ফ্যাটি অ্যাসিডের সঠিক অনুপাত বজায় রেখে দীর্ঘস্থায়ী প্রদাহজনিত রোগ প্রতিরোধ করা সম্ভব [১, ৩]।'
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
          heading: l('Lipid Raft Biophysics, Toll-Like Receptor-4 & Epigenetic Regulation', 'লিপিড রাফটের বায়োফিজিক্স, TLR-4 ও এপিজেনেটিক নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Cellular plasma membranes exhibit lateral nanoscale heterogeneity, organizing into liquid-ordered (Lo) microdomains termed lipid rafts enriched in cholesterol, sphingolipids, and saturated acyl-chain phospholipids [1, 4]. Long-chain saturated fatty acids such as palmitic acid (16:0) stabilize lipid raft coalescence, recruiting Toll-Like Receptor-4 (TLR4) into the raft complex. SFA-induced TLR4 dimerization initiates myeloid differentiation factor 88 (MyD88) signaling, triggering IκB kinase (IKK) phosphorylation and nuclear translocation of NF-κB p50/p65 heterodimers to drive the transcription of pro-inflammatory cytokines (IL-1β, IL-6, TNF-α) [1, 4].',
              'কোষীয় প্লাজমা মেমব্রেনে কোলেস্টেরল, স্ফিঙ্গোলিপিড এবং সম্পৃক্ত ফ্যাটি অ্যাসিড সমৃদ্ধ তরল-সংগঠিত ক্ষুদ্র অঞ্চল থাকে যাকে "লিপিড রাফট" বলা হয় [১, ৪]। পামিটিক অ্যাসিডের মতো দীর্ঘ সম্পৃক্ত চর্বি এই লিপিড রাফটের স্থায়িত্ব বাড়িয়ে টোল-লাইক রিসেপ্টর-৪ (TLR4) কে এতে আকৃষ্ট করে। এর ফলে MyD88 সংকেত প্রবাহের মাধ্যমে NF-κB সক্রিয় হয়ে নিউক্লিয়াসে প্রবেশ করে এবং প্রদাহবর্ধক সাইটোকাইন (IL-1β, IL-6, TNF-α) তৈরি বাড়িয়ে দেয় [১, ৪]।'
            ),
            l(
              'In stark contrast, incorporation of docosahexaenoic acid (22:6 n-3) containing six cis double bonds disrupts lipid raft sterol-phospholipid packaging due to its conformational steric flexibility [1]. DHA displaces TLR4 from the raft domain, blunting lipopolysaccharide- and SFA-induced pro-inflammatory signaling. Concurrently, oxidized EPA/DHA derivatives serve as high-affinity ligands for Peroxisome Proliferator-Activated Receptor Alpha (PPARα) and G-protein coupled receptor 120 (GPR120/FFA4), transrepressing inflammatory gene expression while inducing hepatic mitochondrial fatty acid beta-oxidation enzymes (CPT-1, ACOX1) [1, 4].',
              'বিপরীতভাবে, ছয়টি সিস দ্বি-বন্ধনযুক্ত DHA কোষপর্দায় প্রবেশ করলে তার অতিরিক্ত নমনীয়তার কারণে লিপিড রাফটের ঘন সন্নিবেশ ভেঙে যায় [১]। এটি TLR4 কে রাফট থেকে বিচ্ছিন্ন করে প্রদাহ সংকেত বন্ধ করে দেয়। একই সাথে জারিত EPA ও DHA উপাদান PPARα এবং GPR120 রিসেপ্টরকে সক্রিয় করে প্রদাহ দমন করে এবং যকৃতে ফ্যাটি অ্যাসিড জারণের এনজাইম বৃদ্ধি করে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('FADS Genetic Polymorphisms & Precision Lipid Nutrition', 'FADS জেনেটিক পলিমরফিজম ও নির্ভুল লিপিড পুষ্টি'),
          paragraphs: [
            l(
              'Single nucleotide polymorphisms (SNPs) within the human fatty acid desaturase cluster (FADS1/FADS2 on chromosome 11q12.2) profoundly modulate endogenous PUFA biosynthesis and clinical cardiometabolic outcomes [1, 3]. Haplotypes displaying the derived FADS allele (frequent in European and South Asian populations) exhibit hyper-elevated FADS1 enzymatic activity, driving accelerated conversion of dietary linoleic acid into arachidonic acid, predisposing carriers to high baseline inflammatory tone and coronary artery calcification under high-linoleic diets [1, 3].',
              'ক্রোমোজোম ১১q১২.২ এ অবস্থিত FADS1/FADS2 জিন গুচ্ছের একক নিউক্লিওটাইড পলিমরফিজম (SNP) মানুষের PUFA রূপান্তর ও হৃদরোগের ঝুঁকিকে গভীরভাবে প্রভাবিত করে [১, ৩]। দক্ষিণ এশীয় জনগোষ্ঠীর মধ্যে FADS1 এর উচ্চ-সক্রিয় রূপভেদ বেশি দেখা যায়, যার ফলে খাদ্যতালিকায় লিনোলিক অ্যাসিড বেশি থাকলে তা দ্রুত অ্যারাকিডোনিক অ্যাসিডে রূপান্তরিত হয়ে ধমনীতে প্রদাহ ও প্লাক তৈরি বৃদ্ধি করে [১, ৩]।'
            ),
            l(
              'Conversely, ancestral FADS haplotypes (conserved in indigenous Arctic and Amerindian populations) demonstrate low desaturase activity, rendering carriers almost completely incapable of converting plant ALA to EPA/DHA [1, 3]. For these genotypes, the dietary requirement for preformed marine EPA and DHA is absolute. This genomic heterogeneity underscores the emergence of nutrigenomic precision dietetics, where dietary omega-3 recommendations are personalized based on individual FADS genotypes and baseline erythrocyte membrane lipidomic profiling [1, 3].',
              'অন্যপক্ষে যাদের FADS এনজাইমের গতি জিনগতভাবে কম, তারা উদ্ভিজ্জ উৎস থেকে কোনোভাবেই প্রয়োজনীয় EPA বা DHA তৈরি করতে পারে না [১, ৩]। তাদের জন্য সামুদ্রিক উৎস থেকে সরাসরি EPA ও DHA গ্রহণ বাধ্যতামূলক। এই জিনগত বৈচিত্র্য প্রমাণ করে যে আধুনিক নিউট্রিজেনোমিক্সে লিপিড খাদ্যতালিকাকে ব্যক্তির জিনের বৈশিষ্ট্যের ভিত্তিতে ব্যক্তিগতকরণ করা কতটা জরুরি [১, ৩]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Flowchart tracing the chemical architecture of dietary fats: saturated fats, cis-unsaturated fats, and industrial trans fats, followed by the enzymatic conversion of linoleic and alpha-linolenic acids via FADS1 and FADS2 into eicosanoids and specialized pro-resolving mediators.',
      'খাদ্য চর্বির রাসায়নিক কাঠামোর প্রবাহচিত্র: সম্পৃক্ত, সিস-অসম্পৃক্ত এবং শিল্পজাত ট্রান্স ফ্যাট, এবং পরবর্তীতে FADS1 ও FADS2 দ্বারা ওমেগা-৬ ও ওমেগা-৩ অ্যাসিডের আইকোসানয়েড ও রিজলভিনে রূপান্তরের জৈব রাসায়নিক পথ।'
    ),
    steps: [
      l(
        'Step 1: Dietary intake provides saturated fats, monounsaturated oleic acid, and polyunsaturated essential linoleic (n-6) and alpha-linolenic (n-3) fatty acids.',
        'ধাপ ১: খাদ্যতালিকা থেকে সম্পৃক্ত ফ্যাট, মনো-অসম্পৃক্ত ওলিক অ্যাসিড এবং অত্যাবশ্যক পলি-অসম্পৃক্ত লিনোলিক (n-৬) ও আলফা-লিনোলেনিক (n-৩) ফ্যাটি অ্যাসিড গৃহীত হয়।'
      ),
      l(
        'Step 2: Shared microsomal enzymes (FADS2, ELOVL5, FADS1) competitively desaturate and elongate n-6 into arachidonic acid and n-3 into EPA and DHA.',
        'ধাপ ২: একই মাইক্রোজোমাল এনজাইম (FADS2, ELOVL5, FADS1) ওমেগা-৬ কে অ্যারাকিডোনিক অ্যাসিডে এবং ওমেগা-৩ কে EPA ও DHA-তে রূপান্তর করে।'
      ),
      l(
        'Step 3: Downstream oxygenation yields opposing mediators: pro-inflammatory 2-series prostanoids and 4-series leukotrienes vs anti-inflammatory resolvins, protectins, and maresins.',
        'ধাপ ৩: জারণ প্রক্রিয়ায় পরস্পর বিপরীত উপাদান তৈরি হয়: প্রদাহসৃষ্টিকারী ২-সিরিজ প্রোস্টানয়েড ও ৪-সিরিজ লিউকোট্রিন বনাম প্রদাহ প্রশমনকারী রিজলভিন, প্রোটেকটিন ও মারিসিন।'
      ),
    ],
  },
  assessment: {
    question: l(
      'Which biochemical mechanism explains why industrial trans fatty acids markedly worsen the serum total-to-HDL cholesterol ratio compared to saturated fatty acids?',
      'সম্পৃক্ত ফ্যাটি অ্যাসিডের তুলনায় শিল্পজাত ট্রান্স ফ্যাটি অ্যাসিড কেন সিরাম মোট কোলেস্টেরল ও HDL-এর অনুপাতকে অনেক বেশি বিপজ্জনক করে তোলে?'
    ),
    options: [
      l(
        'Trans fats activate cholesteryl ester transfer protein (CETP), transferring cholesteryl esters from protective HDL to atherogenic LDL particles while downregulating LDL receptors.',
        'ট্রান্স ফ্যাট কোলেস্টেরিল এস্টার ট্রান্সফার প্রোটিনকে (CETP) সক্রিয় করে সুরক্ষাকারী HDL থেকে কোলেস্টেরিল এস্টার সরিয়ে ক্ষতিকর LDL-এ যুক্ত করে এবং LDL রিসেপ্টর দমন করে।'
      ),
      l(
        'Trans fats bind directly to hepatic HMG-CoA reductase and inhibit all endogenous cholesterol synthesis.',
        'ট্রান্স ফ্যাট সরাসরি যকৃতের HMG-CoA রিডাক্টেজ এনজাইমে যুক্ত হয়ে দেহের নিজস্ব কোলেস্টেরল সংশ্লেষণ বন্ধ করে দেয়।'
      ),
      l(
        'Trans fats are completely resistant to pancreatic lipase and prevent any absorption of fat-soluble vitamins.',
        'ট্রান্স ফ্যাট অগ্ন্যাশয়ের লাইপেজ এনজাইমের প্রতি সম্পূর্ণ প্রতিরোধী এবং কোনো চর্বিতে দ্রবণীয় ভিটামিন শোষিত হতে দেয় না।'
      ),
      l(
        'Trans fats exclusively convert into anti-inflammatory resolvins via 15-lipoxygenase pathway activation.',
        'ট্রান্স ফ্যাট ১৫-লাইপক্সিজিনেজ পথ সক্রিয় করে একচেটিয়াভাবে প্রদাহ প্রশমনকারী রিজলভিনে রূপান্তরিত হয়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Industrial trans fatty acids stimulate CETP activity, which depletes anti-atherogenic HDL of cholesteryl esters while enriching LDL and VLDL particles, simultaneously raising LDL-C and lowering HDL-C. Saturated fats, by contrast, raise both LDL and HDL cholesterol without lowering HDL.',
      'শিল্পজাত ট্রান্স ফ্যাটি অ্যাসিড CETP সক্রিয় করে, যা ভালো HDL থেকে কোলেস্টেরিল এস্টার সরিয়ে ক্ষতিকর LDL ও VLDL বাড়িয়ে দেয়; ফলে একই সাথে LDL বাড়ে এবং HDL কমে যায়। অপরপক্ষে সম্পৃক্ত চর্বি রক্তে LDL বাড়ালেও HDL কমায় না।'
    ),
  },
}
