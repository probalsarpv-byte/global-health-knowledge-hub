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
  {
    id: 'serhan-nri-resolvins',
    authors: 'Charles N. Serhan, Nan Chiang, Thomas E. Van Dyke',
    title: 'Resolving Inflammation: Dual Anti-inflammatory and Pro-resolution Lipid Mediators',
    organization: 'Nature Reviews Immunology',
    year: 2008,
    url: 'https://doi.org/10.1038/nri2294',
    doi: '10.1038/nri2294',
  },
  {
    id: 'bhatt-nejm-reduce-it',
    authors: 'Deepak L. Bhatt, P. Gabriel Steg, Michael Miller, et al.',
    title: 'Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia',
    organization: 'The New England Journal of Medicine',
    year: 2019,
    url: 'https://doi.org/10.1056/NEJMoa1812792',
    doi: '10.1056/NEJMoa1812792',
  },
]

export const nutrition05DietaryLipidsLesson: LessonTopic = {
  id: 'topic.nutrition.dietary-lipids-fatty-acids-pufa',
  slug: 'dietary-lipids-fatty-acids-pufa',
  version: 2,
  updatedAt: '2026-10-14',
  title: l(
    '05 · Dietary Lipids: Fatty Acid Saturation, Trans-Fats & Essential PUFA Ratios',
    '০৫ · খাদ্যতালিকার চর্বি: ফ্যাটি অ্যাসিডের সম্পৃক্ততা, ট্রান্স-ফ্যাট ও অত্যাবশ্যক PUFA অনুপাত'
  ),
  summary: l(
    'Comprehensive university textbook analysis of dietary lipids: fatty acid stereochemistry, melting thermodynamics, industrial trans-fat atherogenicity, competitive desaturation and elongation cascades (FADS1/2), eicosanoids versus specialized pro-resolving mediators (SPMs), lipid raft biophysics, and precision nutrigenomics.',
    'খাদ্য চর্বির প্রামাণ্য বিশ্ববিদ্যালয় পাঠ্যপুস্তকীয় বিশ্লেষণ: ফ্যাটি অ্যাসিডের স্টেরিওরসায়ন, গলনাঙ্কের তাপগতিবিজ্ঞান, শিল্পজাত ট্রান্স-ফ্যাটের ক্ষতিকর কার্যপদ্ধতি, FADS1/2 এনজাইমের প্রতিযোগিতামূলক রূপান্তর প্রবাহ, আইকোসানয়েড বনাম প্রদাহ প্রশমনকারী বিশেষ মধ্যস্থতাকারী (SPM), লিপিড রাফট বায়োফিজিক্স এবং নির্ভুল নিউট্রিজেনোমিক্স।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-14',
  objectives: [
    l(
      'Distinguish the chemical conformations, melting thermodynamics, and membrane packing characteristics of saturated (SFA), cis-monounsaturated (MUFA), cis-polyunsaturated (PUFA), and industrial trans fatty acids [1, 4].',
      'সম্পৃক্ত (SFA), সিস-মনো-অসম্পৃক্ত (MUFA), সিস-পলি-অসম্পৃক্ত (PUFA) এবং শিল্পজাত ট্রান্স ফ্যাটি অ্যাসিডের রাসায়নিক গঠন, গলনাঙ্কের তাপগতিবিজ্ঞান এবং কোষপর্দার বিন্যাস পার্থক্য করতে পারা [1, 4]।'
    ),
    l(
      'Map the competitive enzymatic elongation and desaturation pathways (FADS1, FADS2, ELOVL5) converting linoleic acid (LA) to arachidonic acid (ARA) versus alpha-linolenic acid (ALA) to EPA and DHA [1, 4].',
      'লিনোলিক অ্যাসিড (LA) থেকে অ্যারাকিডোনিক অ্যাসিড (ARA) এবং আলফা-লিনোলেনিক অ্যাসিড (ALA) থেকে EPA ও DHA তৈরিতে FADS1, FADS2 ও ELOVL5 এনজাইমের প্রতিযোগিতামূলক রূপান্তর পথ বিশ্লেষণ করতে পারা [1, 4]।'
    ),
    l(
      'Evaluate the cardiovascular mechanisms of industrial trans fatty acids, including CETP stimulation, LDL receptor suppression, endothelial nitric oxide synthase uncoupling, and vascular inflammation [2, 4].',
      'শিল্পজাত ট্রান্স ফ্যাটের কার্ডিওভাসকুলার ক্ষতিসাধন প্রক্রিয়া (CETP সক্রিয়করণ, LDL রিসেপ্টর দমন, এন্ডোথেলিয়াল নাইট্রিক অক্সাইড সিন্থেজ নিষ্ক্রিয়করণ ও ধমনীর প্রদাহ) মূল্যায়ন করতে পারা [2, 4]।'
    ),
    l(
      'Contrast the physiological actions of pro-inflammatory 2-series prostanoids and 4-series leukotrienes against specialized pro-resolving mediators (resolvins, protectins, maresins) derived from EPA and DHA [1, 5].',
      'EPA ও DHA থেকে উৎপন্ন প্রদাহ প্রশমনকারী বিশেষ মধ্যস্থতাকারী (রিজলভিন, প্রোটেকটিন, মারিসিন) বনাম অ্যারাকিডোনিক অ্যাসিড থেকে সৃষ্ট প্রদাহবর্ধক আইকোসানয়েডের কার্যপদ্ধতি তুলনা করতে পারা [1, 5]।'
    ),
    l(
      'Formulate evidence-based clinical dietary recommendations for lipid quality, calculating the Omega-3 Index and optimizing dietary fatty acid ratios to prevent cardiovascular mortality [1, 6].',
      'লিপিডের গুণমানের জন্য আন্তর্জাতিক প্রমাণভিত্তিক পুষ্টি নির্দেশিকা প্রণয়ন, ওমেগা-৩ ইনডেক্স গণনা এবং হৃদরোগ প্রতিরোধে খাদ্যতালিকার ফ্যাটি অ্যাসিড অনুপাত নিখুঁতভাবে সমন্বয় করতে পারা [1, 6]।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.fatty-acid-oxidation-ketones'],
  references: dietaryLipidsRefs,
  evidenceBySection: {
    introduction: ['calder-annals-fatty-acids', 'gropper-advanced-nutrition-lipids'],
    structure: ['mozaffarian-nejm-trans-fats', 'gropper-advanced-nutrition-lipids'],
    mechanism: ['calder-annals-fatty-acids', 'simopoulos-biomed-omega-ratio'],
    integration: ['serhan-nri-resolvins', 'simopoulos-biomed-omega-ratio'],
    practice: ['bhatt-nejm-reduce-it', 'mozaffarian-nejm-trans-fats'],
    takeaways: ['calder-annals-fatty-acids', 'gropper-advanced-nutrition-lipids'],
  },
  chapter: {
    toc: [
      { id: 'introduction', label: l('1. Chemical Architecture & Thermodynamics of Dietary Lipids', '১. খাদ্য লিপিডের রাসায়নিক গঠন ও তাপগতিবিজ্ঞান'), sectionId: 'introduction' },
      { id: 'structure', label: l('2. Cis vs Trans Isomerism & Industrial Hydrogenation', '২. সিস বনাম ট্রান্স আইসোমারিজম ও শিল্পজাত হাইড্রোজিনেশন'), sectionId: 'structure' },
      { id: 'mechanism', label: l('3. Essential Fatty Acids & Eicosanoid Biosynthesis', '৩. অত্যাবশ্যক ফ্যাটি অ্যাসিড ও আইকোসানয়েড জৈব-সংশ্লেষণ'), sectionId: 'mechanism' },
      { id: 'integration', label: l('4. Omega-6/3 Ratios, Resolvins & Membrane Biophysics', '৪. ওমেগা-৬/৩ অনুপাত, রিজলভিন ও মেমব্রেন বায়োফিজিক্স'), sectionId: 'integration' },
      { id: 'practice', label: l('5. Clinical Lipid Assessment & Quantitative Calculations', '৫. ক্লিনিক্যাল লিপিড মূল্যায়ন ও গাণিতিক হিসাব'), sectionId: 'practice' },
      { id: 'takeaways', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Saturated Fatty Acid (SFA)', 'সম্পৃক্ত ফ্যাটি অ্যাসিড (SFA)'),
        definition: l(
          'An aliphatic carboxylic acid whose hydrocarbon chain contains no carbon-carbon double bonds, adopting a fully extended linear zigzag conformation that packs densely into biological membranes and raises melting temperatures [1, 4].',
          'একটি অ্যালিফ্যাটিক কার্বক্সিলিক অ্যাসিড যার কার্বন শিকলে কোনো দ্বি-বন্ধন থাকে না; এর সোজা ও সমান্তরাল জ্যামিতিক গঠন কোষপর্দায় খুব ঘন সন্নিবেশ তৈরি করে এবং গলনাঙ্ক বাড়িয়ে দেয় [1, 4]।'
        ),
      },
      {
        term: l('Industrial Trans Fatty Acid (iTFA)', 'শিল্পজাত ট্রান্স ফ্যাটি অ্যাসিড (iTFA)'),
        definition: l(
          'An unsaturated fatty acid containing at least one non-conjugated carbon-carbon double bond in the trans geometric configuration, created during industrial partial catalytic hydrogenation of liquid vegetable oils [2, 4].',
          'একটি অসম্পৃক্ত ফ্যাটি অ্যাসিড যার অন্তত একটি দ্বি-বন্ধন ট্রান্স কনফিগারেশনে থাকে; তরল উদ্ভিজ্জ তেলকে শিল্প কারখানায় কৃত্রিমভাবে আংশিক হাইড্রোজিনেশন করার সময় এটি তৈরি হয় [2, 4]।'
        ),
      },
      {
        term: l('Essential Fatty Acids (LA & ALA)', 'অত্যাবশ্যক ফ্যাটি অ্যাসিড (LA ও ALA)'),
        definition: l(
          'Polyunsaturated fatty acids that humans cannot synthesize de novo due to the absence of delta-12 and delta-15 desaturase enzymes: Linoleic Acid (18:2 n-6) and Alpha-Linolenic Acid (18:3 n-3) [1, 3].',
          'পলি-অসম্পৃক্ত ফ্যাটি অ্যাসিড যা মানবদেহ নিজে তৈরি করতে পারে না কারণ মানুষের কোষে ডেল্টা-১২ ও ডেল্টা-১৫ ডিস্যাচুরেজ এনজাইম থাকে না: লিনোলিক অ্যাসিড (১৮:২ n-৬) এবং আলফা-লিনোলেনিক অ্যাসিড (১৮:৩ n-৩) [1, 3]।'
        ),
      },
      {
        term: l('Specialized Pro-resolving Mediators (SPMs)', 'প্রদাহ প্রশমনকারী বিশেষ মধ্যস্থতাকারী (SPM)'),
        definition: l(
          'Bioactive enzymatic metabolites of EPA and DHA—comprising resolvins, protectins, and maresins—that actively terminate inflammatory cascades, block neutrophil extravasation, and stimulate non-phlogistic macrophage efferocytosis [1, 5].',
          'EPA ও DHA থেকে উৎপন্ন অত্যন্ত সক্রিয় মধ্যস্থতাকারী (রিজলভিন, প্রোটেকটিন ও মারিসিন) যা প্রদাহকে সক্রিয়ভাবে বন্ধ করে, নিউট্রোফিলের আক্রমণ থামায় এবং ম্যাক্রোফেজের মাধ্যমে মৃত কোষ অপসারণ ত্বরান্বিত করে [1, 5]।'
        ),
      },
      {
        term: l('Lipid Rafts & Membrane Order', 'লিপিড রাফট ও মেমব্রেন বিন্যাস'),
        definition: l(
          'Submicroscopic, liquid-ordered (Lo) plasma membrane microdomains enriched in cholesterol, sphingolipids, and saturated acyl chains, which coordinate signal transduction platforms that are disrupted by DHA incorporation [1, 4].',
          'কোষপর্দার অতি-ক্ষুদ্র তরল-সুশৃঙ্খল (Lo) অংশ যা কোলেস্টেরল, স্ফিঙ্গোলিপিড ও সম্পৃক্ত ফ্যাটে সমৃদ্ধ; এটি কোষের সংকেত আদান-প্রদান নিয়ন্ত্রণ করে এবং DHA যুক্ত হলে নমনীয় হয়ে যায় [1, 4]।'
        ),
      },
      {
        term: l('Omega-3 Index', 'ওমেগা-৩ ইনডেক্স (Omega-3 Index)'),
        definition: l(
          'The clinical biometric biomarker defined as the percentage of eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) relative to total fatty acids in red blood cell membranes, where an index ≥8% represents cardioprotection and <4% indicates elevated cardiovascular risk [1, 6].',
          'লোহিত রক্তকণিকার কোষপর্দার মোট ফ্যাটি অ্যাসিডের মধ্যে EPA ও DHA-র শতকরা হার; ৮% বা তার বেশি মাত্রা কার্ডিওভাসকুলার সুরক্ষা দেয় এবং ৪% এর নিচে থাকলে হৃদরোগে মৃত্যুর ঝুঁকি বেড়ে যায় [1, 6]।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Quantitative Calculation of the Omega-3 Index & Therapeutic Repletion', 'ওমেগা-৩ ইনডেক্স গণনা ও চিকিৎসাগত ঘাটতি পূরণ নির্ণয়'),
        steps: [
          l(
            'Step 1: Clinical baseline profiling via red blood cell gas chromatography. Total erythrocyte membrane fatty acids measure 100%. Measured EPA represents 0.8% and DHA represents 2.6%. The patient baseline Omega-3 Index is calculated as: $\\text{Omega-3 Index} = \\text{EPA}\\% + \\text{DHA}\\% = 0.8\\% + 2.6\\% = 3.4\\%$ [1, 6].',
            'ধাপ ১: গ্যাস ক্রোমাটোগ্রাফি পরীক্ষার মাধ্যমে লোহিত রক্তকণিকার পর্দার ফ্যাটি অ্যাসিড পরিমাপ করা হলো। প্রাপ্ত EPA = ০.৮% এবং DHA = ২.৬%। রোগীর প্রাথমিক ওমেগা-৩ ইনডেক্স = ০.৮% + ২.৬% = ৩.৪% [1, 6]।'
          ),
          l(
            'Step 2: Risk Stratification. According to clinical trial benchmarks (Harris and Von Schacky), an Omega-3 Index of <4.0% falls into the high-risk category for sudden cardiac death and myocardial infarction, representing a 90% higher risk compared to individuals with an index >8.0% [1, 6].',
            'ধাপ ২: ঝুঁকি নির্ণয়। আন্তর্জাতিক ক্লিনিক্যাল মানদণ্ড অনুসারে ৪.০% এর কম ওমেগা-৩ ইনডেক্স হৃদরোগ ও আকস্মিক মৃত্যুর উচ্চ ঝুঁকিপূর্ণ পর্যায় নির্দেশ করে, যা ৮.০% এর বেশি সূচকের ব্যক্তিদের তুলনায় ৯০% বেশি ঝুঁকিপূর্ণ [1, 6]।'
          ),
          l(
            'Step 3: Calculating Therapeutic Repletion Dose. Empirical pharmacokinetic kinetics demonstrate that to elevate the Omega-3 Index by 1 percentage point requires approximately 250–300 mg/day of bioavailable EPA+DHA over a minimum 16-week period (erythrocyte lifespan = 120 days). Target increment: $8.0\\% - 3.4\\% = 4.6\\%$. Required daily dose: $4.6 \\times 275 \\text{ mg} \\approx 1,265 \\text{ mg/day}$ of elemental EPA+DHA [1, 6].',
            'ধাপ ৩: প্রয়োজনীয় ওমেগা-৩ এর মাত্রা গণনা। লোহিত রক্তকণিকার ১২০ দিনের জীবনকালে ওমেগা-৩ ইনডেক্স ১% বাড়াতে দৈনিক প্রায় ২৫০-৩০০ মিলিগ্রাম বিশুদ্ধ EPA+DHA প্রয়োজন। লক্ষ্য বৃদ্ধি: ৮.০% - ৩.৪% = ৪.৬%। প্রয়োজনীয় দৈনিক মাত্রা: ৪.৬ × ২৭৫ মিলিগ্রাম = প্রায় ১,২৬৫ মিলিগ্রাম বিশুদ্ধ EPA+DHA [1, 6]।'
          ),
          l(
            'Step 4: Prescription Formulations. Prescribing 2 grams/day of concentrated pharmaceutical-grade ethyl-ester omega-3 (providing 1,680 mg total EPA+DHA) taken with a fat-containing meal to ensure pancreatic colipase activation guarantees target repletion within 16 to 20 weeks [1, 6].',
            'ধাপ ৪: পথ্য বা প্রেসক্রিপশন নির্ধারণ। চর্বিযুক্ত প্রধান খাবারের সাথে দৈনিক ২ গ্রাম বিশুদ্ধ ফার্মাসিউটিক্যাল ওমেগা-৩ ক্যাপসুল (যা ১,৬৮০ মিগ্রা সক্রিয় EPA+DHA দেয়) খেলে ১৬ থেকে ২০ সপ্তাহের মধ্যে লক্ষ্যমাত্রা অর্জিত হবে [1, 6]।'
          ),
        ],
        conclusion: l(
          'Targeting an Omega-3 Index of ≥8.0% significantly reduces risk of fatal ventricular arrhythmias and cardiovascular mortality through membrane stabilization and anti-inflammatory lipid mediators [1, 6].',
          'ওমেগা-৩ ইনডেক্স ৮.০% বা তার উপরে উন্নীত করা কোষপর্দা স্থিতিশীল করে এবং প্রদাহ কমিয়ে হৃদরোগ ও আকস্মিক কার্ডিয়াক অ্যারিথমিয়ার ঝুঁকি নাটকীয়ভাবে কমায় [1, 6]।'
        ),
      },
      {
        title: l('Dietary Omega-6 to Omega-3 Ratio Optimization in Clinical Dyslipidemia', 'ডিসলিপিডেমিয়ায় খাদ্যতালিকার ওমেগা-৬ ও ওমেগা-৩ অনুপাত সমন্বয়'),
        steps: [
          l(
            'Step 1: Dietary Assessment. A 48-year-old patient with dyslipidemia and elevated hs-CRP (3.8 mg/L) consumes a typical modern diet: 28 grams of linoleic acid (LA, omega-6) primarily from sunflower and corn oil dressings, and only 1.4 grams of alpha-linolenic acid (ALA, omega-3) from occasional canola oil. Baseline ratio: $28 : 1.4 = 20 : 1$ [1, 3].',
            'ধাপ ১: খাদ্যাভ্যাস মূল্যায়ন। ডিসলিপিডেমিয়া এবং উচ্চ প্রদাহজনিত hs-CRP (৩.৮ মিগ্রা/লিটার) বিশিষ্ট একজন রোগী সূর্যমুখী ও কর্ন তেলের মাধ্যমে দৈনিক ২৮ গ্রাম লিনোলিক অ্যাসিড (ওমেগা-৬) এবং মাত্র ১.৪ গ্রাম আলফা-লিনোলেনিক অ্যাসিড (ওমেগা-৩) গ্রহণ করেন। বর্তমান অনুপাত: ২৮ : ১.৪ = ২০ : ১ [1, 3]।'
          ),
          l(
            'Step 2: Pathophysiological Consequence. A 20:1 ratio oversaturates Delta-6 desaturase (FADS2), completely choking out the conversion of plant ALA to EPA. This floods cellular membrane phospholipids with arachidonic acid (ARA), escalating pro-inflammatory 2-series prostaglandins and 4-series leukotrienes [1, 3].',
            'ধাপ ২: রোগতাত্ত্বিক মূল্যায়ন। ২০:১ অনুপাত ডেল্টা-৬ ডিস্যাচুরেজ এনজাইমকে ওমেগা-৬ দিয়ে সম্পূর্ণ ব্যস্ত রাখে, ফলে উদ্ভিজ্জ ওমেগা-৩ রূপান্তর বন্ধ হয়ে যায়। কোষে অতিরিক্ত অ্যারাকিডোনিক অ্যাসিড জমে রক্তনালীর প্রদাহ ও রক্ত জমাট বাঁধার প্রবণতা বাড়িয়ে তোলে [1, 3]।'
          ),
          l(
            'Step 3: Dietary Redesign Protocol. Substitute refined high-LA seed oils with high-polyphenol extra virgin olive oil (rich in oleic acid 18:1c9, which does not compete for FADS desaturases), lowering daily LA to 10 g. Introduce 2 tablespoons of ground flaxseed (4.5 g ALA), 30 g walnuts (2.5 g ALA), and 150 g grilled wild salmon (providing 1.8 g preformed EPA+DHA). New daily intake: 10 g omega-6 and 8.8 g total omega-3 [1, 3].',
            'ধাপ ৩: খাদ্য পুনর্গঠন পরিকল্পনা। প্রক্রিয়াজাত তেলের বদলে এক্সট্রা ভার্জিন অলিভ অয়েল (ওলিক অ্যাসিড FADS এনজাইমে প্রতিযোগিতা করে না) ব্যবহার করে ওমেগা-৬ কমিয়ে ১০ গ্রামে নামানো হলো। সাথে যুক্ত করা হলো ২ চামচ তিসির গুঁড়া (৪.৫ গ্রাম ALA), ৩০ গ্রাম আখরোট (২.৫ গ্রাম ALA) এবং সপ্তাহে ৩ দিন সামুদ্রিক মাছ (দৈনিক গড়ে ১.৮ গ্রাম EPA+DHA)। নতুন খাদ্যমান: ১০ গ্রাম ওমেগা-৬ এবং ৮.৮ গ্রাম ওমেগা-৩ [1, 3]।'
          ),
          l(
            'Step 4: Reassessing Outcome Ratio. New dietary ratio: $10 : 8.8 \\approx 1.14 : 1$. At this physiologic ratio, competitive inhibition of FADS2 is eliminated, substrate flux shifts to 3-series prostanoids and specialized pro-resolving mediators (RvE1, RvD1), and systemic hs-CRP predictably drops by >40–50% over 8 weeks [1, 3, 5].',
            'ধাপ ৪: ফলাফল অনুপাত মূল্যায়ন। নতুন খাদ্য অনুপাত: ১০ : ৮.৮ = প্রায় ১.১৪ : ১। এই সুষম মাত্রায় FADS এনজাইমের প্রতিযোগিতা দূর হয়, প্রদাহ প্রশমনকারী রিজলভিন তৈরি বাড়ে এবং ৮ সপ্তাহের মধ্যে রক্তের প্রদাহ বায়োমার্কার hs-CRP ৪০-৫০% হ্রাস পায় [1, 3, 5]।'
          ),
        ],
        conclusion: l(
          'Rebalancing the dietary n-6:n-3 ratio below 4:1 eliminates enzymatic substrate bottlenecking, suppressing chronic vascular inflammation and restoring endogenous lipid mediator homeostasis [1, 3].',
          'খাদ্যে ওমেগা-৬ ও ওমেগা-৩ অনুপাত ৪:১ এর নিচে নামিয়ে আনলে এনজাইমের বাধা দূর হয়, রক্তনালীর দীর্ঘস্থায়ী প্রদাহ নিরাময় হয় এবং স্বাভাবিক লিপিড ভারসাম্য ফিরে আসে [1, 3]।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does stearic acid (18:0) remain solid at room temperature (Tm = 70°C) while oleic acid (18:1c9) is liquid (Tm = 13°C) and linoleic acid (18:2c9,12) is deeply liquid (Tm = -5°C)?',
          'স্টিয়ারিক অ্যাসিড (১৮:০) সাধারণ তাপমাত্রায় কঠিন (গলনাঙ্ক ৭০°C) থাকে অথচ ওলিক অ্যাসিড (১৮:১c৯) তরল (গলনাঙ্ক ১৩°C) এবং লিনোলিক অ্যাসিড (১৮:২) অত্যন্ত তরল (গলনাঙ্ক -৫°C) কেন?'
        ),
        answer: l(
          'Stearic acid possesses a fully saturated, linear carbon chain that stacks tightly with adjacent molecules, maximizing van der Waals London dispersion forces and requiring high thermal kinetic energy (70°C) to break the lattice. Each cis double bond in oleic and linoleic acid introduces a rigid 30-degree bend into the acyl chain, preventing close intermolecular packing, increasing free volume within the bilayer, and drastically lowering the phase transition temperature [1, 4].',
          'স্টিয়ারিক অ্যাসিডে কোনো দ্বি-বন্ধন না থাকায় এর সোজা কার্বন শিকলগুলো খুব ঘন সন্নিবেশ তৈরি করে এবং শক্তিশালী ভ্যান ডার ওয়ালস বন্ধনে আবদ্ধ থাকে, যা ভাঙতে উচ্চ তাপমাত্রার প্রয়োজন হয়। অপরদিকে ওলিক ও লিনোলিক অ্যাসিডের সিস দ্বি-বন্ধনগুলো শিকলে ৩০ ডিগ্রির বাঁক তৈরি করে অণুগুলোকে ঘন সন্নিবেশে বসতে দেয় না, যার ফলে সামান্য তাপেই এরা তরল অবস্থায় রূপান্তরিত হয় [1, 4]।'
        ),
      },
      {
        question: l(
          'What are the distinct molecular mechanisms by which industrial trans fatty acids accelerate coronary atherogenesis compared to natural saturated fats?',
          'প্রাকৃতিক সম্পৃক্ত চর্বির তুলনায় শিল্পজাত ট্রান্স ফ্যাট কোন কোন স্বতন্ত্র আণবিক প্রক্রিয়ার মাধ্যমে ধমনীতে চর্বি জমার গতি ত্বরান্বিত করে?'
        ),
        answer: l(
          'Industrial trans fats (elaidic acid) uniquely stimulate Cholesteryl Ester Transfer Protein (CETP), driving the transfer of cholesteryl esters from protective HDL to atherogenic VLDL and LDL, simultaneously lowering HDL-C and creating dense, oxidation-prone LDL. Furthermore, trans fats uncouple endothelial nitric oxide synthase (eNOS) via BH4 oxidation, elevate vascular cell adhesion molecules (VCAM-1/ICAM-1) via NF-kappa-B activation, and suppress hepatic SREBP-2-mediated LDL receptor clearance [2, 4].',
          'শিল্পজাত ট্রান্স ফ্যাট যকৃতের CETP এনজাইমকে অতিরিক্ত সক্রিয় করে ভালো HDL কমিয়ে দেয় এবং বিপজ্জনক ছোট-ঘন LDL বাড়িয়ে দেয়। এছাড়াও এটি রক্তনালীর এন্ডোথেলিয়ামে নাইট্রিক অক্সাইড সিন্থেজ (eNOS) অকেজো করে রক্তনালী শক্ত করে, NF-kappa-B সক্রিয় করে ধমনীতে প্রদাহ বাড়ায় এবং যকৃতের LDL রিসেপ্টর কমিয়ে রক্ত থেকে কোলেস্টেরল অপসারণ বাধাগ্রস্ত করে [2, 4]।'
        ),
      },
      {
        question: l(
          'Contrast the physiological receptor actions of arachidonate-derived Thromboxane A2 (TXA2) against EPA-derived Resolvin E1 (RvE1) during acute tissue injury.',
          'তীব্র টিস্যু আঘাতের সময় অ্যারাকিডোনিক অ্যাসিডের থ্রম্বোক্সেন A2 (TXA2) এবং EPA-র রিজলভিন E1 (RvE1)-এর রিসেপ্টর কাজের শারীরবৃত্তীয় পার্থক্য কী?'
        ),
        answer: l(
          'Thromboxane A2 binds platelet and vascular Gq-coupled TP receptors, triggering inositol trisphosphate (IP3) generation, intracellular Ca2+ elevation, rapid platelet shape change, aggregation, and potent arterial vasoconstriction. In stark contrast, Resolvin E1 acts as a stereospecific agonist at ChemR23 (ERV1) and an antagonist at BLT1 on neutrophils, suppressing further trans-endothelial migration, blocking NF-kappa-B activation, and stimulating non-phlogistic macrophage clearance of apoptotic debris [1, 5].',
          'থ্রম্বোক্সেন A2 অণুচক্রিকার TP রিসেপ্টরে যুক্ত হয়ে ক্যালসিয়াম বাড়িয়ে দ্রুত রক্ত জমাট বাঁধায় এবং তীব্র রক্তনালী সংকোচন ঘটায়। বিপরীতে রিজলভিন E1 নিউট্রোফিলের ChemR23 রিসেপ্টরে যুক্ত হয়ে নতুন শ্বেতকণিকার আক্রমণ ঠেকায়, প্রদাহজনক সাইটোকাইন নিঃসরণ বন্ধ করে এবং ম্যাক্রোফেজকে দিয়ে দ্রুত মৃত কোষ পরিষ্কার করে টিস্যুকে সুস্থ করে তোলে [1, 5]।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'dietary-lipids-landscape',
    title: l(
      'Interactive Fatty Acid Architecture & Eicosanoid / Resolvin Pathway Map',
      'ইন্টারেক্টিভ ফ্যাটি অ্যাসিড গঠন ও আইকোসানয়েড / রিজলভিন রূপান্তর রূপরেখা'
    ),
    description: l(
      'Explore how dietary lipid saturation, double bond stereochemistry, and competitive enzymatic desaturation dictate downstream lipid mediator synthesis and vascular inflammation.',
      'খাদ্য চর্বির সম্পৃক্ততা, দ্বি-বন্ধনের স্টেরিওরসায়ন এবং প্রতিযোগিতামূলক এনজাইম রূপান্তর কীভাবে রক্তনালীর প্রদাহ ও নিরাময় নিয়ন্ত্রণ করে তা পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Enzymatic conversion rates reflect in vivo human tracer studies; high linoleic acid intake competitively suppresses alpha-linolenic desaturation [1, 3].',
      'মানবদেহের আইসোটোপ ট্রেসার গবেষণালব্ধ রূপান্তর গতিবিদ্যা; খাদ্যে অতিরিক্ত লিনোলিক অ্যাসিড থাকলে আলফা-লিনোলেনিক অ্যাসিডের রূপান্তর উল্লেখযোগ্যভাবে বাধাগ্রস্ত হয় [1, 3]।'
    ),
    imageUrl: '/assets/dietary_lipids_pufa_overview.jpg',
    imageCaption: l(
      'Medical Reference Figure 5.1: Dietary Fatty Acid Saturation, Cis/Trans Double Bond Stereochemistry & Eicosanoid / Resolvin Pathway Map.',
      'মেডিকেল রেফারেন্স চিত্র ৫.১: খাদ্য ফ্যাটি অ্যাসিডের সম্পৃক্ততা, সিস/ট্রান্স দ্বি-বন্ধনের স্টেরিওরসায়ন এবং আইকোসানয়েড/রিজলভিন রূপান্তর রূপরেখা।'
    ),
    has3D: true,
    threeDType: 'dietary-lipids-3d',
    svgType: 'pathway-map',
    items: [
      {
        id: 'node-sfa',
        label: l('Saturated Fatty Acids (SFA: Lauric, Myristic, Palmitic)', 'সম্পৃক্ত ফ্যাটি অ্যাসিড (লরিক, মিরিস্টিক, পামিটিক)'),
        description: l(
          'No double bonds; linear carbon skeleton packs densely into bilayers, elevating membrane rigidity and regulating hepatic LDL receptor clearance [1, 4].',
          'দ্বি-বন্ধনবিহীন সোজা কার্বন শিকল কোষপর্দাকে ঘন ও শক্ত করে এবং যকৃতের LDL রিসেপ্টরের কার্যকারিতা নিয়ন্ত্রণ করে [1, 4]।'
        ),
        details: l(
          'Palmitic acid (C16:0) is the most abundant dietary SFA. High intakes of myristic (C14:0) and palmitic acids downregulate hepatic LDL receptor expression via SREBP-2 modulation, increasing circulating ApoB-100 particles [1, 4].',
          'পামিটিক অ্যাসিড (C16:0) খাদ্যের প্রধান SFA। অতিরিক্ত মিরিস্টিক ও পামিটিক অ্যাসিড যকৃতের LDL রিসেপ্টর কমিয়ে রক্তে ক্ষতিকর এপো-বি কণা বৃদ্ধি করে [1, 4]।'
        ),
        sectionId: 'introduction',
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
        position3D: { x: -60, y: -40, z: 25 },
      },
      {
        id: 'node-trans',
        label: l('Industrial Trans Fats (Elaidic Acid 18:1t)', 'শিল্পজাত ট্রান্স ফ্যাট (ইলাইডিক অ্যাসিড ১৮:১t)'),
        description: l(
          'Trans double bonds create a linear geometry that mimics saturated fats while dysregulating CETP and promoting systemic endothelial dysfunction [2, 4].',
          'ট্রান্স কনফিগারেশন অসম্পৃক্ত চর্বিকে সম্পৃক্ত চর্বির মতো সোজা করে ফেলে, যা রক্তনালীর মারাত্মক প্রদাহ ঘটায় [2, 4]।'
        ),
        details: l(
          'Partially hydrogenated oils introduce trans double bonds where hydrogen atoms sit on opposite sides. Elaidic acid activates CETP, shunting cholesterol from protective HDL into dense LDL particles [2, 4].',
          'আংশিক হাইড্রোজিনেশনে হাইড্রোজেনের বিপরীত অবস্থানের কারণে ট্রান্স ফ্যাট তৈরি হয়। এটি CETP বাড়িয়ে ভালো HDL কমায় এবং বিপজ্জনক ছোট LDL বৃদ্ধি করে [2, 4]।'
        ),
        sectionId: 'structure',
        color: '#ef4444',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
        position3D: { x: 55, y: -35, z: -25 },
      },
      {
        id: 'node-mufa',
        label: l('Cis-MUFA (Oleic Acid 18:1c9)', 'সিস-মনো-অসম্পৃক্ত ফ্যাট (ওলিক অ্যাসিড ১৮:১c৯)'),
        description: l(
          'Single cis double bond creates a rigid 30-degree kink, optimizing membrane fluidity without susceptibility to rapid lipid peroxidation [1, 4].',
          'একটিমাত্র সিস দ্বি-বন্ধনের ৩০ ডিগ্রি বাঁকের কারণে কোষপর্দা নমনীয় থাকে এবং পারঅক্সিডেশনের ঝুঁকি কম থাকে [1, 4]।'
        ),
        details: l(
          'Oleic acid (dominant in extra virgin olive oil) replaces saturated fats without lowering HDL, protecting LDL from oxidative modification and maintaining endothelial nitric oxide bioactivity [1, 4].',
          'অলিভ অয়েলের প্রধান উপাদান ওলিক অ্যাসিড ভালো HDL না কমিয়েই রক্তের কোলেস্টেরল নিয়ন্ত্রণে রাখে এবং রক্তনালীকে সুস্থ রাখে [1, 4]।'
        ),
        sectionId: 'mechanism',
        color: '#10b981',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
        position3D: { x: -45, y: 35, z: -20 },
      },
      {
        id: 'node-omega6',
        label: l('Omega-6 Cascade (LA → ARA → Pro-inflammatory Eicosanoids)', 'ওমেগা-৬ পথ (LA → ARA → প্রদাহবর্ধক আইকোসানয়েড)'),
        description: l(
          'Linoleic acid undergoes FADS2 desaturation to Arachidonic Acid (ARA), substrate for 2-series prostaglandins and 4-series leukotrienes [1, 3].',
          'লিনোলিক অ্যাসিড FADS2 দ্বারা অ্যারাকিডোনিক অ্যাসিডে (ARA) রূপান্তরিত হয়, যা রক্ত জমাট বাঁধা ও প্রদাহসৃষ্টিকারী উপাদান তৈরি করে [1, 3]।'
        ),
        details: l(
          'Excessive arachidonic acid conversion via cyclooxygenase (COX-1/2) and lipoxygenase (5-LOX) produces thromboxane A2 (platelet aggregator) and leukotriene B4 (potent neutrophil chemoattractant) [1, 3].',
          'অতিরিক্ত অ্যারাকিডোনিক অ্যাসিড COX ও LOX এনজাইমের মাধ্যমে রক্ত জমাট বাঁধায় এবং ধমনীতে শ্বেতকণিকা টেনে এনে দীর্ঘস্থায়ী প্রদাহ তৈরি করে [1, 3]।'
        ),
        sectionId: 'integration',
        color: '#f97316',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
        position3D: { x: 50, y: 40, z: 20 },
      },
      {
        id: 'node-omega3',
        label: l('Omega-3 Cascade (ALA → EPA / DHA → Resolvins & Protectins)', 'ওমেগা-৩ পথ (ALA → EPA / DHA → রিজলভিন ও প্রোটেকটিন)'),
        description: l(
          'Alpha-linolenic acid competes for FADS enzymes to yield EPA and DHA, precursors to specialized pro-resolving mediators that terminate inflammation [1, 5].',
          'আলফা-লিনোলেনিক অ্যাসিড FADS এনজাইমের মাধ্যমে EPA ও DHA তৈরি করে, যা প্রদাহ প্রশমনকারী শক্তিশালী রিজলভিন উপাদান উৎপন্ন করে [1, 5]।'
        ),
        details: l(
          'Eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) produce 3-series prostaglandins (PGE3, non-aggregatory), resolvin E1/D1, and protectin D1, which actively quiet inflammation [1, 5].',
          'EPA এবং DHA রক্তনালীর প্রদাহ শান্ত করে, ট্রাইগ্লিসারাইড কমায় এবং মস্তিষ্কের সিন্যাপ্সের স্থায়িত্ব বজায় রাখে [1, 5]।'
        ),
        sectionId: 'practice',
        color: '#06b6d4',
        svgCoords: { x: 190, y: 175, width: 310, height: 48 },
        position3D: { x: 0, y: 0, z: 35 },
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
              'Dietary lipids represent the most energy-dense macronutrient in human nutrition, providing approximately 9 kilocalories per gram compared to 4 kilocalories per gram from carbohydrates and proteins [1]. Beyond serving as an efficient chemical fuel reserve stored in adipose tissue, dietary fats are indispensable structural components of all cellular membranes and are required for the intestinal absorption of fat-soluble vitamins (A, D, E, and K) [1, 4]. Without dietary fats, human cells cannot construct flexible membranes, synthesize steroid hormones, or protect internal organs from mechanical trauma [1, 4].',
              'খাদ্যতালিকার চর্বি বা লিপিড হলো মানবদেহের সবচেয়ে ঘন শক্তির উৎস, যা প্রতি গ্রামে প্রায় ৯ কিলোক্যালরি শক্তি সরবরাহ করে (শর্করা ও প্রোটিনে যেখানে মাত্র ৪ কিলোক্যালরি) [১]। অ্যাডিপোজ টিস্যুতে শক্তির ভবিষ্যৎ সঞ্চয় হিসেবে কাজ করার পাশাপাশি খাদ্য চর্বি প্রতিটি মানব কোষের ঝিল্লি বা পর্দার অবিচ্ছেদ্য কাঠামোগত ভিত্তি এবং চর্বিতে দ্রবণীয় ভিটামিন (A, D, E এবং K) শোষণে অপরিহার্য [১, ৪]। খাদ্য চর্বি ছাড়া মানুষ কোষের সুরক্ষাকারী দেয়াল তৈরি করতে পারে না, স্টেরয়েড হরমোন বানাতে পারে না এবং অভ্যন্তরীণ অঙ্গপ্রত্যঙ্গ সুরক্ষিত রাখতে পারে না [১, ৪]।'
            ),
            l(
              'To understand how fats function, visualize a brick wall versus a flexible beaded curtain. Saturated fatty acids have straight, uniform carbon chains that stack tightly together like solid bricks, which is why butter, ghee, and coconut oil remain solid or firm at room temperature [4]. In contrast, unsaturated fats have bends or kinks in their chains, keeping them fluid and moving like liquid olive oil or mustard oil in a bottle [1, 4]. This fundamental physical difference determines how fats behave in foods, in cooking, and inside human blood vessels [1, 4].',
              'চর্বির কাজ বোঝার জন্য একটি শক্ত ইটের দেয়াল বনাম একটি নমনীয় পুঁতির পর্দার কথা কল্পনা করুন। সম্পৃক্ত ফ্যাটি অ্যাসিডের কার্বন শিকলগুলো একেবারে সোজা হওয়ায় ইটের মতো খুব ঘন সন্নিবেশ তৈরি করে; এই কারণে মাখন, ঘি বা নারকেল তেল সাধারণ তাপমাত্রায় জমে শক্ত থাকে [৪]। অন্যদিকে অসম্পৃক্ত চর্বির শিকল বাঁকানো হওয়ায় অণুগুলো সহজে নড়াচড়া করতে পারে, ঠিক যেমন বোতলের তরল অলিভ অয়েল বা খাঁটি সরিষার তেল [১, ৪]। এই মৌলিক ভৌত পার্থক্যই নির্ধারণ করে খাদ্য চর্বি রান্নায় কেমন আচরণ করবে এবং রক্তনালীতে কীভাবে প্রবাহিত হবে [১, ৪]।'
            ),
            l(
              'A standard dietary fatty acid consists of a hydrocarbon chain of carbon and hydrogen atoms terminating in an acidic carboxyl group (-COOH). One end is completely hydrophobic (water-repelling), while the carboxyl end can interact with aqueous environments [4]. In nature, dietary fats almost always exist as triglycerides (three fatty acids attached to a glycerol backbone) [4]. When you eat dietary fat, the liver secretes bile salts into the small intestine to emulsify large fat globules into microscopic droplets, allowing digestive lipases to break them down into absorbable fatty acids and monoglycerides [1, 4].',
              'একটি আদর্শ খাদ্য ফ্যাটি অ্যাসিডের একদিকে থাকে হাইড্রোকার্বনের শিকল এবং অন্য প্রান্তে থাকে একটি অম্লীয় কার্বক্সিল গ্রুপ (-COOH)। এর একটি প্রান্ত থাকে পুরোপুরি হাইড্রোফোবিক (পানি-বিদ্বেষী), আর কার্বক্সিল প্রান্তটি পানির সাথে ক্রিয়া করতে পারে [৪]। প্রাকৃতিক খাদ্যে চর্বি মূলত ট্রাইগ্লিসারাইড হিসেবে থাকে (গ্লিসারলের সাথে তিনটি ফ্যাটি অ্যাসিড যুক্ত থাকে) [৪]। আপনি যখন চর্বি খান, যকৃত থেকে পিত্তরস নিঃসৃত হয়ে বড় চর্বির ফোঁটাকে ভেঙে ক্ষুদ্র ফোঁটায় পরিণত করে, যা এনজাইমকে সহজে হজম করতে সাহায্য করে [১, ৪]।'
            ),
            l(
              'Dietary fats also provide essential thermal insulation and protect vital organs from external injury. The fat pad cushioning the kidneys and the subcutaneous fat layer underneath our skin keep our bodies warm and cushion against impacts [1, 4]. Furthermore, the human brain is nearly 60% fat by dry weight; specialized fatty acids are vital building blocks for myelin sheaths that insulate nerve fibers and enable electrical impulses to travel at over 100 meters per second [1, 4].',
              'খাদ্য চর্বি আমাদের দেহের চমৎকার তাপ নিরোধক এবং গুরুত্বপূর্ণ অঙ্গগুলোর রক্ষাকবচ হিসেবে কাজ করে। কিডনির চারপাশের চর্বির গদি এবং ত্বকের নিচের চর্বির স্তর আমাদের শরীরকে উষ্ণ রাখে এবং আঘাত থেকে বাঁচায় [১, ৪]। তাছাড়া মানুষের মস্তিষ্কের শুষ্ক ওজনের প্রায় ৬০% চর্বি; বিশেষায়িত ফ্যাটি অ্যাসিডগুলো স্নায়ুতন্তুর চারপাশের মায়েলিন আবরণ তৈরি করে যা সেকেন্ডে ১০০ মিটারের বেশি গতিতে স্নায়ু সংকেত পাঠাতে সাহায্য করে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Saturation States & The Trans-Fat Hazard', 'ফ্যাটি অ্যাসিডের সম্পৃক্ততা ও ট্রান্স-ফ্যাটের বিপদ'),
          paragraphs: [
            l(
              'Fatty acids are categorized into saturated fatty acids (SFAs), monounsaturated fatty acids (MUFAs), and polyunsaturated fatty acids (PUFAs) based on how many hydrogen atoms their carbon backbone carries [4]. Saturated fats (found in whole milk, butter, cheese, beef tallow, and tropical oils) are completely saturated with hydrogen atoms, containing zero double bonds [1, 4]. Because their chains are straight, they pack tightly, have higher melting points, and resist oxidative breakdown during high-heat cooking [1, 4].',
              'হাইড্রোজেন পরমাণুর উপস্থিতির ভিত্তিতে ফ্যাটি অ্যাসিড তিন প্রকার: সম্পৃক্ত (SFA), মনো-অসম্পৃক্ত (MUFA) এবং পলি-অসম্পৃক্ত (PUFA) [৪]। সম্পৃক্ত চর্বিতে (দুধ, মাখন, পনির, লাল মাংস ও পাম তেলে বিদ্যমান) কোনো দ্বি-বন্ধন থাকে না; সম্পূর্ণ হাইড্রোজেন সমৃদ্ধ সোজা শিকলগুলো খুব ঘন সন্নিবেশ তৈরি করে যা স্বাভাবিক তাপমাত্রায় কঠিন থাকে এবং রান্নার তাপে সহজে জারিত হয় না [১, ৪]।'
            ),
            l(
              'Monounsaturated fats (abundant in extra-virgin olive oil, avocados, mustard oil, and almonds) possess a single double bond in a natural "cis" shape, introducing a gentle 30-degree bend [1, 4]. Polyunsaturated fats (found in walnuts, flaxseeds, sunflower seeds, and oily fish) contain two or more double bonds, introducing multiple kinks that make them extremely flexible and fluid at freezing temperatures [1, 4]. Arctic fish thrive in sub-zero polar waters precisely because their cell membranes are rich in polyunsaturated fats that remain liquid when other fats freeze solid [1, 4].',
              'মনো-অসম্পৃক্ত চর্বিতে (অলিভ অয়েল, অ্যাভোকাডো, সরিষার তেল ও বাদামে বিদ্যমান) একটিমাত্র প্রাকৃতিক "সিস" দ্বি-বন্ধন থাকে যা শিকলটিতে প্রায় ৩০ ডিগ্রির মৃদু বাঁক তৈরি করে [১, ৪]। পলি-অসম্পৃক্ত চর্বিতে (আখরোট, তিসি, সূর্যমুখী বীজ ও সামুদ্রিক মাছে বিদ্যমান) একাধিক দ্বি-বন্ধন থাকে, যা এদের শূন্যের নিচের তাপমাত্রাতেও অত্যন্ত নমনীয় ও তরল রাখে [১, ৪]। মেরু অঞ্চলের বরফশীতল পানিতে মাছ সাঁতরে বেড়াতে পারে কারণ তাদের কোষপর্দা পলি-অসম্পৃক্ত চর্বিতে পূর্ণ থাকে যা জমে বরফ হয় না [১, ৪]।'
            ),
            l(
              'Industrial trans fats were created through partial catalytic hydrogenation, an industrial chemical process invented in the early 20th century to turn cheap liquid vegetable oils into shelf-stable, semi-solid margarine, shortening, and vanaspati [2]. By bubbling hydrogen gas through vegetable oil in the presence of a nickel catalyst at high temperatures, manufacturers forced hydrogen into double bonds [2]. However, some double bonds twisted into a "trans" configuration, where hydrogen atoms sit on opposite sides of the carbon chain [2, 4].',
              'তরল উদ্ভিজ্জ তেলকে সস্তা ও দীর্ঘস্থায়ী কঠিন মার্জারিন, শর্টনিং বা বনস্পতি ডালডায় রূপান্তর করতে বিংশ শতাব্দীর শুরুতে শিল্প কারখানায় আংশিক হাইড্রোজিনেশন আবিষ্কার করা হয়েছিল [২]। নিকেল প্রভাবকের উপস্থিতিতে উচ্চ তাপে উদ্ভিজ্জ তেলের ভেতর দিয়ে হাইড্রোজেন গ্যাস চালনা করে দ্বি-বন্ধন ভাঙা হতো [২]। কিন্তু এই কৃত্রিম প্রক্রিয়ায় কিছু দ্বি-বন্ধন বিপরীত অবস্থানে মোচড় খেয়ে "ট্রান্স" কনফিগারেশন ধারণ করে, যেখানে হাইড্রোজেন পরমাণুগুলো বিপরীত পাশে বসে যায় [২, ৪]।'
            ),
            l(
              'This trans configuration artificially unbends the molecule, making an unsaturated fat behave like a rigid, unnatural saturated fat [2]. When ingested, trans fats lodge into cell membranes, damage delicate vascular linings, stimulate the liver to pump out atherogenic LDL particles, deplete protective HDL particles, and trigger systemic arterial inflammation [2, 4]. Trans fats provide zero nutritional benefit and represent the most hazardous dietary lipid in the human food chain, which is why the World Health Organization has mandated their global elimination [2].',
              'এই ট্রান্স রূপটি অণুর স্বাভাবিক বাঁক সোজা করে ফেলে, যার ফলে একটি অসম্পৃক্ত চর্বি কৃত্রিম সম্পৃক্ত চর্বির মতো অনমনীয় আচরণ করে [২]। মানবদেহে প্রবেশের পর এই ট্রান্স ফ্যাট কোষপর্দায় গেঁথে যায়, রক্তনালীর প্রাচীর ধ্বংস করে, ক্ষতিকর LDL বাড়ায়, সুরক্ষাকারী HDL কমিয়ে দেয় এবং সারা দেহে দীর্ঘস্থায়ী প্রদাহ তৈরি করে [২, ৪]। ট্রান্স ফ্যাটের কোনো পুষ্টিগুণ নেই এবং এটি মানব ইতিহাসের সবচেয়ে মারাত্মক বিষাক্ত খাদ্য উপাদান; এই কারণেই বিশ্ব স্বাস্থ্য সংস্থা পৃথিবী থেকে ট্রান্স ফ্যাট সম্পূর্ণ নির্মূলের নির্দেশ দিয়েছে [২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Essential Fatty Acids: Omega-6 vs Omega-3', 'অত্যাবশ্যক ফ্যাটি অ্যাসিড: ওমেগা-৬ বনাম ওমেগা-৩'),
          paragraphs: [
            l(
              'Human metabolism can synthesize saturated and monounsaturated fatty acids from carbohydrates and excess calories. However, human cells lack the specific desaturase enzymes (delta-12 and delta-15 desaturases) needed to insert double bonds close to the methyl end of a fatty acid chain [1, 4]. Consequently, two fatty acids are strictly essential: Linoleic Acid (LA, an omega-6 fat) and Alpha-Linolenic Acid (ALA, an omega-3 fat) [3, 4]. If they are missing from your diet, deficiency symptoms—including scaly dermatitis, poor wound healing, and impaired immune responses—inevitably develop [1, 4].',
              'মানবদেহ অতিরিক্ত শর্করা বা ক্যালোরি থেকে সম্পৃক্ত ও মনো-অসম্পৃক্ত চর্বি নিজে নিজেই তৈরি করতে পারে। কিন্তু মানুষের কোষে ডেল্টা-১২ ও ডেল্টা-১৫ ডিস্যাচুরেজ নামক এনজাইম না থাকায় আমরা মিথাইল প্রান্তের কাছে নতুন দ্বি-বন্ধন তৈরি করতে পারি না [১, ৪]। ফলে লিনোলিক অ্যাসিড (ওমেগা-৬) এবং আলফা-লিনোলেনিক অ্যাসিড (ওমেগা-৩) আমাদের জন্য অত্যাবশ্যক পুষ্টি উপাদান, যা খাদ্যের মাধ্যমে সরাসরি গ্রহণ করা আবশ্যক [৩, ৪]। এদের অভাবে ত্বকে খোসা ওঠা, ক্ষত না শুকানো এবং দুর্বল রোগপ্রতিরোধের মতো মারাত্মক লক্ষণ দেখা দেয় [১, ৪]।'
            ),
            l(
              'Once consumed, linoleic acid and alpha-linolenic acid enter a shared cellular assembly line inside the endoplasmic reticulum [1]. They compete for the exact same enzyme systems (FADS2 desaturase and ELOVL5 elongase) to lengthen their carbon chains and insert new double bonds [1, 4]. If your diet floods this assembly line with massive amounts of omega-6 seed oils, the enzymes become entirely occupied, shutting down the conversion of plant omega-3 into active, health-protecting forms [3].',
              'খাদ্যের মাধ্যমে গৃহীত হওয়ার পর লিনোলিক অ্যাসিড ও আলফা-লিনোলেনিক অ্যাসিড এন্ডোপ্লাজমিক রেটিকুলামের একই জৈব রাসায়নিক কারখানায় প্রবেশ করে [১]। শিকল লম্বা করা এবং নতুন দ্বি-বন্ধন যোগ করার জন্য তারা একই এনজাইম (FADS2 ও ELOVL5) নিয়ে কাড়াকাড়ি করে [১, ৪]। খাদ্যে যদি প্রক্রিয়াজাত তেলের ওমেগা-৬ এর বন্যা বয়ে যায়, তবে এনজাইমগুলো ব্যস্ত হয়ে পড়ে এবং উদ্ভিজ্জ ওমেগা-৩ রূপান্তরের পথ বন্ধ হয়ে যায় [৩]।'
            ),
            l(
              'Omega-6 fatty acids convert downstream into Arachidonic Acid (ARA), which generates potent chemical messengers that trigger blood clotting, blood vessel constriction, and acute inflammation when the body fights an infection or heals a wound [1, 3]. In contrast, omega-3 fatty acids convert into Eicosapentaenoic Acid (EPA) and Docosahexaenoic Acid (DHA), generating molecules that soothe inflammation, relax blood vessels, prevent abnormal clots, and rebuild healthy brain and retinal tissue [1, 3].',
              'ওমেগা-৬ থেকে শেষ পর্যন্ত অ্যারাকিডোনিক অ্যাসিড তৈরি হয়, যা ক্ষত সারাতে বা জীবাণু মারতে রক্ত জমাট বাঁধা ও তীব্র প্রদাহ সৃষ্টি করে [১, ৩]। অপরপক্ষে ওমেগা-৩ থেকে EPA এবং DHA তৈরি হয়, যা প্রদাহ প্রশমিত করে, রক্তনালী শিথিল রাখে, রক্ত জমাট বাঁধা রোধ করে এবং মস্তিষ্ক ও চোখের রেটিনা গঠনে প্রধান ভূমিকা পালন করে [১, ৩]।'
            ),
            l(
              'Both families are necessary for survival: without omega-6-derived clotting and inflammation, you would bleed to death from a paper cut or die of bacterial sepsis [1, 3]. However, when inflammation never turns off because omega-6 fats overwhelm omega-3 fats, the result is chronic silent tissue damage that smolders inside arterial walls for decades [1, 3].',
              'বেঁচে থাকার জন্য উভয় ধরনের চর্বিই অপরিহার্য: ওমেগা-৬ এর প্রদাহ ও রক্ত জমাট বাঁধার ক্ষমতা না থাকলে মানুষ সামান্য আঘাতেই রক্তক্ষরণে মারা যেত [১, ৩]। কিন্তু সমস্যা হয় তখন, যখন ওমেগা-৬ এর বন্যায় ওমেগা-৩ চাপা পড়ে যায় এবং প্রদাহ বন্ধ হওয়ার কোনো সুযোগ পায় না; এর ফলেই রক্তনালীতে দীর্ঘমেয়াদী নীরব ক্ষয়ক্ষতি ও হৃদরোগের সৃষ্টি হয় [১, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Dietary Ratios, Membrane Fluidity & Health', 'খাদ্যের অনুপাত, কোষপর্দার নমনীয়তা ও স্বাস্থ্য'),
          paragraphs: [
            l(
              'Throughout human evolutionary history, ancestral diets provided a balanced omega-6 to omega-3 ratio near 1:1 to 2:1, obtained from wild game, coastal seafood, wild greens, tubers, and seeds [3]. Modern industrial food processing, dominated by refined soybean, corn, cottonseed, and sunflower oils, has distorted this ratio to approximately 15:1 or even 20:1 in modern industrialized diets [1, 3]. Humans are eating a lipid profile completely foreign to our evolutionary genetics [3].',
              'মানবজাতির বিবর্তনীয় ইতিহাসে আদিম মানুষের খাদ্যাভ্যাসে ওমেগা-৬ ও ওমেগা-৩ অনুপাত ছিল প্রায় ১:১ থেকে ২:১, যা শিকারকৃত বন্য প্রাণী, সামুদ্রিক মাছ, সবুজ শাকসবজি ও বীজ থেকে আসত [৩]। কিন্তু আধুনিক প্রক্রিয়াজাত খাদ্যে সয়াবিন, ভুট্টা ও সূর্যমুখী তেলের ব্যাপক ব্যবহারের কারণে এই অনুপাত ১৫:১ এমনকি ২০:১ পর্যন্ত বিপজ্জনক উচ্চতায় পৌঁছেছে [১, ৩]। মানুষের বর্তমান খাদ্যাভ্যাস আমাদের জিনগত বিবর্তনের সম্পূর্ণ বিপরীত [৩]।'
            ),
            l(
              'Every single cell in your body is enclosed by a phospholipid bilayer whose physical flexibility depends directly on the fats you eat [4]. If you consume predominantly saturated and trans fats, your cell membranes become rigid and sluggish, impairing hormone receptors like insulin receptors from functioning smoothly [1, 4]. When you consume rich amounts of omega-3 DHA and cis-monounsaturated oleic acid, cell membranes become supple and fluid, facilitating rapid nutrient transport and cellular signaling [1, 4].',
              'দেহের প্রতিটি কোষ একটি দ্বি-স্তরীয় ফসফোলিপিড ঝিল্লি দ্বারা আবৃত, যার নমনীয়তা আপনি কী খাচ্ছেন তার ওপর সরাসরি নির্ভর করে [৪]। আপনি যদি কেবল সম্পৃক্ত ফ্যাট ও ক্ষতিকর ট্রান্স ফ্যাট খান, কোষপর্দা শক্ত ও অনমনীয় হয়ে পড়ে, যার ফলে ইনসুলিন রিসেপ্টরের মতো সংবেদনশীল অংশগুলো সঠিকভাবে কাজ করতে পারে না [১, ৪]। বিপরীতে ওমেগা-৩ ও অলিভ অয়েলের মতো স্বাস্থ্যকর চর্বি গ্রহণ করলে কোষপর্দা প্রাণবন্ত ও সচল থাকে [১, ৪]।'
            ),
            l(
              'An overwhelming excess of omega-6 over omega-3 locks the immune system into a persistent state of low-grade chronic inflammation [1, 3]. Inside coronary arteries, endothelial cells exposed to chronic inflammatory signals express sticky adhesion proteins that capture passing monocytes, accelerating the formation of cholesterol-laden plaques that can eventually rupture and trigger heart attacks or ischemic strokes [1, 3].',
              'ওমেগা-৩ এর তুলনায় অতিরিক্ত ওমেগা-৬ গ্রহণ রোগপ্রতিরোধ ব্যবস্থাকে দীর্ঘস্থায়ী মৃদু প্রদাহের ফাঁদে ফেলে দেয় [১, ৩]। রক্তনালীর প্রাচীরে এই দীর্ঘস্থায়ী প্রদাহ ধমনীর গায়ে চটচটে প্রোটিন তৈরি করে যা রক্তে ভাসমান ক্ষতিকর চর্বিকে আটকে ফেলে এবং এথেরোস্ক্লেরোটিক প্লাক তৈরি করে, যা ফেটে গিয়ে হার্ট অ্যাটাক বা স্ট্রোক ঘটায় [১, ৩]।'
            ),
            l(
              'In the central nervous system, DHA makes up over 30% of total structural lipids in the cerebral cortex and retina [1, 4]. Adequate membrane DHA is required for rhodopsin function in vision and for rapid neurotransmitter vesicle docking at synapses [1, 4]. Children deprived of maternal omega-3 fats display impaired visual acuity and cognitive milestones, while elderly individuals with low brain DHA exhibit accelerated synaptic loss and cognitive decline [1, 4].',
              'মস্তিষ্কের সেরিব্রাল কর্টেক্স এবং চোখের রেটিনার কাঠামোগত লিপিডের ৩০% এরও বেশি হলো ওমেগা-৩ DHA [১, ৪]। চোখের দৃষ্টির রডপসিন প্রোটিন কাজ করা এবং স্নায়ুর সিন্যাপ্সে দ্রুত সংকেত আদান-প্রদানের জন্য এই DHA অপরিহার্য [১, ৪]। গর্ভাবস্থায় ওমেগা-৩ এর ঘাটতি হলে শিশুর দৃষ্টিশক্তি ও মস্তিষ্কের বিকাশ বাধাগ্রস্ত হয়, এবং বৃদ্ধ বয়সে মস্তিষ্কে DHA কমে গেলে স্মৃতিভ্রংশ ও স্নায়বিক অবক্ষয় ঘটে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Practical Dietary Strategies for Healthy Fats', 'স্বাস্থ্যকর চর্বি গ্রহণের ব্যবহারিক কৌশল'),
          paragraphs: [
            l(
              'Evaluating a healthy dietary lipid intake requires shifting focus entirely away from outdated "low-fat" dogma toward fat quality, chemical stability, and whole-food sources [1, 4]. Deriving 25% to 35% of total daily energy from fats is optimal for human physiology, provided the predominant sources are whole foods such as extra-virgin olive oil, avocados, tree nuts (almonds, walnuts), seeds (flax, chia), and wild-caught oily cold-water fish [1, 4].',
              'স্বাস্থ্যকর চর্বি মূল্যায়নে সেকেলে "লো-ফ্যাট" ভ্রান্তি পরিহার করে চর্বির গুণমান, রাসায়নিক স্থায়িত্ব এবং প্রাকৃতিক উৎসের ওপর জোর দিতে হবে [১, ৪]। দৈনন্দিন মোট ক্যালোরির ২৫% থেকে ৩৫% স্বাস্থ্যকর চর্বি থেকে আসা সম্পূর্ণ স্বাভাবিক ও বিজ্ঞানসম্মত, যদি তার সিংহভাগ আসে এক্সট্রা ভার্জিন অলিভ অয়েল, অ্যাভোকাডো, কাঠবাদাম, আখরোট, তিসি, চিয়া বীজ এবং তৈলাক্ত সামুদ্রিক মাছের মতো প্রাকৃতিক খাদ্য থেকে [১, ৪]।'
            ),
            l(
              'To eliminate trans fats, scrutinize packaged food labels for terms like "partially hydrogenated vegetable oil" or "vegetable shortening"—even if the nutrition label claims "0g trans fat" due to regulatory rounding loopholes. Choose cooking oils with high oxidative stability for hot cooking (such as traditional cold-pressed mustard oil or ghee in moderation), and reserve delicate cold-pressed unrefined oils like extra virgin olive oil for dressings and low-temperature finishing [2, 4].',
              'ট্রান্স ফ্যাট পুরোপুরি বর্জন করতে প্যাকেটের গায়ে "আংশিক হাইড্রোজিনেটেড তেল" বা "ভেজিটেবল শর্টনিং" লেখা আছে কিনা তা সতর্কতার সাথে পরীক্ষা করুন। রান্নার ক্ষেত্রে উচ্চ তাপে স্থিতিশীল তেল ব্যবহার করুন (যেমন খাঁটি ঘানিভাঙা সরিষার তেল বা পরিমিত খাঁটি ঘি) এবং কাঁচা সালাদে এক্সট্রা ভার্জিন অলিভ অয়েলের মতো অপরিশোধিত তেল গ্রহণ করুন [২, ৪]।'
            ),
            l(
              'To ensure adequate omega-3 status without relying on weak plant conversions, consume at least two servings of low-mercury cold-water fatty fish (such as wild salmon, sardines, mackerel, or anchovies, or regional options like hilsa) weekly, delivering roughly 250 to 500 mg per day of preformed EPA and DHA [1, 3]. Vegetarians and vegans should consider algal oil supplements, which provide preformed, bioavailable DHA and EPA directly extracted from marine microalgae [1, 3].',
              'উদ্ভিজ্জ উপাদানের দুর্বল রূপান্তরের ওপর পুরোপুরি নির্ভর না করে পর্যাপ্ত ওমেগা-৩ নিশ্চিত করতে সপ্তাহে অন্তত দুই দিন পারদ-মুক্ত তৈলাক্ত মাছ (যেমন ইলিশ, টুনা, সার্ডিন, স্যামন বা রূপচাঁদা) খাওয়া উচিত, যা দৈনিক প্রায় ২৫০ থেকে ৫০০ মিলিগ্রাম সরাসরি কার্যকর EPA ও DHA সরবরাহ করে [১, ৩]। নিরামিষাশী ব্যক্তিদের জন্য শৈবাল তেল (Algal oil) একটি চমৎকার বিকল্প, যা সরাসরি সামুদ্রিক শৈবাল থেকে প্রস্তুত হয় [১, ৩]।'
            ),
            l(
              'Avoid reusing cooking oil repeatedly for deep frying. Reheating vegetable oils multiple times exposes unsaturated fatty acids to oxygen and high temperatures, creating toxic lipid hydroperoxides, aldehydes, and acrolein that irritate the gastrointestinal lining and accelerate endothelial oxidation inside blood vessels [1, 4].',
              'একই তেল বারবার ফুটিয়ে ভাজাভুজি করার অভ্যাস কঠোরভাবে পরিহার করুন। রান্নার তেল বারবার গরম করলে অসম্পৃক্ত চর্বি অক্সিজেনের সাথে বিক্রিয়া করে অত্যন্ত বিষাক্ত লিপিড পারঅক্সাইড এবং অ্যালডিহাইড তৈরি করে, যা পরিপাকতন্ত্রে প্রদাহ সৃষ্টি করে এবং রক্তনালীতে চর্বি জমার প্রক্রিয়াকে শতগুণ বাড়িয়ে দেয় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Educational Takeaways', 'মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Dietary fats are complex, bioactive regulators of human health that determine cellular signaling, membrane fluidity, gene expression, and immune responses [1, 4]. Saturated fats provide heat stability and structure but should be consumed in moderation, while cis-monounsaturated fats like extra virgin olive oil actively protect vascular and metabolic health [1, 4].',
              'খাদ্যতালিকার চর্বি কেবল ক্যালোরির আঁধার নয়, বরং কোষীয় সংকেত, কোষপর্দার নমনীয়তা, জিন প্রকাশ এবং রোগপ্রতিরোধ ব্যবস্থার এক প্রধান জৈব নিয়ন্ত্রক [১, ৪]। সম্পৃক্ত চর্বি তাপে স্থায়ী হলেও পরিমিত গ্রহণীয়, আর অলিভ অয়েলের মতো মনো-অসম্পৃক্ত চর্বি হৃদযন্ত্র ও রক্তনালীকে সুরক্ষা দেয় [১, ৪]।'
            ),
            l(
              'Industrial trans fatty acids are metabolic toxins that damage blood vessels, disrupt lipid balance, and elevate heart disease risk; they should be strictly avoided with zero intake in all life stages [2]. Replacing industrial shortenings with unrefined plant and marine fats protects against sudden cardiac mortality [2].',
              'শিল্পজাত ট্রান্স ফ্যাটি অ্যাসিড হলো ধমনীর মারাত্মক বিষ যা হৃদরোগের ঝুঁকি নাটকীয়ভাবে বৃদ্ধি করে; এটি খাদ্যতালিকা থেকে সম্পূর্ণ বর্জন করা উচিত [২]। প্রক্রিয়াজাত ডালডা ও ফাস্টফুড বর্জন করে প্রাকৃতিক তেল গ্রহণ হার্ট অ্যাটাকের ঝুঁকি থেকে রক্ষা করে [২]।'
            ),
            l(
              'Achieving a balanced omega-6 to omega-3 ratio by lowering refined seed oils and increasing marine EPA and DHA resolves systemic inflammation and fosters long-term cardiometabolic vitality [1, 3]. Omega-3 fatty acids actively terminate inflammatory cascades and protect brain synapses across the human lifespan [1, 5].',
              'প্রক্রিয়াজাত তেলের ওমেগা-৬ কমিয়ে এবং সামুদ্রিক EPA ও DHA বৃদ্ধির মাধ্যমে ওমেগা-৬ ও ওমেগা-৩ এর সঠিক ভারসাম্য অর্জন দীর্ঘস্থায়ী প্রদাহ নিরাময়ে অপরিহার্য [১, ৩]। ওমেগা-৩ ফ্যাটি অ্যাসিড সক্রিয়ভাবে প্রদাহ শান্ত করে এবং আজীবন মস্তিষ্কের কোষগুলোকে সুস্থ ও সতেজ রাখে [১, ৫]।'
            ),
            l(
              'Fats are neither pure heroes nor pure villains; their physiological value is governed entirely by molecular structure, processing methods, and dietary context. Embracing whole, minimally processed lipid sources unlocks sustained metabolic energy and vitality [1, 4].',
              'চর্বি অন্ধভাবে ভালো বা খারাপ নয়; এর আসল প্রভাব নির্ভর করে তার আণবিক গঠন, প্রক্রিয়াজাতকরণ পদ্ধতি এবং খাদ্যের পরিমাণের ওপর। প্রাকৃতিক ও অপ্রক্রিয়াজাত স্বাস্থ্যকর চর্বি গ্রহণই দীর্ঘায়ু ও প্রাণবন্ত জীবনের মূল রহস্য [১, ৪]।'
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
          heading: l('Biochemical Classification & Physical Thermodynamics of Fatty Acids', 'ফ্যাটি অ্যাসিডের প্রাণরাসায়নিক শ্রেণিবিন্যাস ও ভৌত তাপগতিবিজ্ঞান'),
          paragraphs: [
            l(
              'Fatty acids are aliphatic monocarboxylic acids categorized by carbon chain length (short-chain: <6C, medium-chain: 6–12C, long-chain: 14–20C, very-long-chain: ≥22C) and the presence of unsaturated double bonds [4]. Systematic Delta nomenclature (e.g., 18:2Δ9,12) enumerates carbon atoms from the terminal carboxyl carbon (C1), whereas Omega (or n) nomenclature (e.g., 18:2 n-6) counts from the terminal methyl carbon (omega carbon), reflecting their metabolic conservation during elongation and desaturation [1, 4].',
              'ফ্যাটি অ্যাসিড হলো অ্যালিফ্যাটিক মনোকার্বক্সিলিক অ্যাসিড, যা কার্বন শিকলের দৈর্ঘ্যের ওপর ভিত্তি করে চার ভাগে বিভক্ত (ক্ষুদ্র শিকল: <৬ কার্বন, মাঝারি: ৬–১২ কার্বন, দীর্ঘ: ১৪–২০ কার্বন, অতি-দীর্ঘ: ≥২২ কার্বন) [৪]। ডেল্টা পদ্ধতিতে কার্বক্সিল প্রান্ত (C1) থেকে দ্বিবন্ধনের অবস্থান গোনা হয় (যেমন ১৮:২Δ৯,১২), আর ওমেগা (বা n) পদ্ধতিতে মিথাইল প্রান্ত থেকে গোনা হয় (যেমন ১৮:২ n-৬), যা রূপান্তর প্রক্রিয়ায় অপরিবর্তিত থাকে [১, ৪]।'
            ),
            l(
              'The thermodynamic melting temperature (Tm) of fatty acids is dictated by chain length and double bond geometry. Each additional methylene group (-CH2-) increases van der Waals London dispersion forces, raising the melting point (e.g., palmitic acid 16:0 melts at 63°C, whereas stearic acid 18:0 melts at 70°C). In contrast, introducing a cis double bond introduces an inflexible 30-degree bend into the hydrocarbon backbone, disrupting acyl chain packing in biological bilayers and dramatically lowering the phase transition temperature (oleic acid 18:1c9 melts at 13°C, and linoleic acid 18:2 n-6 melts at -5°C) [4].',
              'ফ্যাটি অ্যাসিডের গলনাঙ্ক (Tm) শিকলের দৈর্ঘ্য ও দ্বি-বন্ধনের কাঠামোর ওপর নির্ভর করে। প্রতিটি অতিরিক্ত মিথিলিন গ্রুপ ভ্যান ডার ওয়ালস আকর্ষণ বাড়িয়ে গলনাঙ্ক বৃদ্ধি করে (যেমন পামিটিক অ্যাসিড ১৬:০ এর গলনাঙ্ক ৬৩° সেলসিয়াস, আর স্টিয়ারিক অ্যাসিড ১৮:০ এর গলনাঙ্ক ৭০° সেলসিয়াস)। অন্যদিকে প্রতিটি সিস দ্বি-বন্ধন শিকলে ৩০ ডিগ্রির বাঁক তৈরি করে কোষপর্দার ফসফোলিপিডের ঘন বিন্যাস ভেঙে দেয় এবং গলনাঙ্ক নাটকীয়ভাবে কমিয়ে দেয় (ওলিক অ্যাসিড ১৮:১c৯ এর গলনাঙ্ক ১৩° সেলসিয়াস, আর লিনোলিক অ্যাসিড ১৮:২ n-৬ এর গলনাঙ্ক -৫° সেলসিয়াস) [৪]।'
            ),
            l(
              'Biological membranes undergo phase transitions between a rigid, gel-like state (L-beta) and a fluid, liquid-crystalline state (L-alpha). The presence of unsaturated fatty acyl chains lowers the transition temperature, ensuring that human cellular membranes maintain optimal physiological fluidity and enzymatic mobility at 37°C [1, 4]. Without this fluid state, integral membrane proteins, ion channels, and transmembrane receptors cannot undergo necessary conformational changes [1, 4].',
              'জৈব ঝিল্লিগুলো অনমনীয় জেল অবস্থা (L-beta) এবং তরল স্ফটিকাকার অবস্থা (L-alpha)-র মধ্যে পর্যায়ক্রমিক পরিবর্তন অনুভব করে। অসম্পৃক্ত ফ্যাটি অ্যাসিডের উপস্থিতি এই রূপান্তরের তাপমাত্রা কমিয়ে দেয়, যা নিশ্চিত করে যে ৩৭° সেলসিয়াস শারীরিক তাপমাত্রায় মানুষের প্রতিটি কোষপর্দা সর্বোত্তম নমনীয়তা এবং এনজাইম কার্যকারিতা বজায় রাখবে [১, ৪]। এই নমনীয়তা ছাড়া কোষঝিল্লির আয়ন চ্যানেল ও হরমোন রিসেপ্টর কাজ করতে পারে না [১, ৪]।'
            ),
            l(
              'Positional isomerism and stereospecificity in natural fats also dictate enzymatic hydrolysis rates. In human breast milk and lard, palmitic acid is esterified preferentially at the sn-2 position of the glycerol backbone, whereas in vegetable oils, palmitic acid is esterified at sn-1 and sn-3 positions [4]. Pancreatic lipase hydrolyzes sn-1 and sn-3 ester bonds, generating free fatty acids and 2-monoacylglycerol (2-MAG) [4]. Sn-2 palmitate is absorbed efficiently as a 2-MAG micelle, whereas free palmitic acid binds luminal calcium to form insoluble, unabsorbable calcium soaps that are lost in feces [1, 4].',
              'প্রাকৃতিক চর্বিতে ফ্যাটি অ্যাসিডের অবস্থানগত বিন্যাস (Stereospecific numbering sn-1, sn-2, sn-3) পরিপাকের গতি নির্ধারণ করে। মাতৃদুগ্ধ ও প্রাণিজ চর্বিতে পামিটিক অ্যাসিড সাধারণত গ্লিসারলের মাঝের sn-2 অবস্থানে থাকে, অথচ উদ্ভিজ্জ তেলে তা প্রান্তে (sn-1 ও sn-3) থাকে [৪]। অগ্ন্যাশয়ের লাইপেজ প্রান্তের বন্ধন ভেঙে ২-মোনোগ্লিসারাইড তৈরি করে [৪]। sn-2 পামিটেট সহজে শোষিত হলেও মুক্ত পামিটিক অ্যাসিড অন্ত্রের ক্যালসিয়ামের সাথে বিক্রিয়া করে অদ্রবণীয় ক্যালসিয়াম সাবান তৈরি করে যা মলের সাথে বের হয়ে যায় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Industrial Hydrogenation Kinetics & Trans-Fat Pathophysiology', 'শিল্পজাত হাইড্রোজিনেশন গতিবিদ্যা ও ট্রান্স-ফ্যাটের রোগতত্ত্ব'),
          paragraphs: [
            l(
              'Industrial trans fatty acids (such as elaidic acid, 18:1t9) are produced through partial catalytic hydrogenation of vegetable oils containing polyunsaturated linoleic and oleic acids in the presence of a transition metal catalyst (typically finely divided nickel) at 140–200°C under 1–4 atmospheres of hydrogen gas [2, 4]. Under these high-energy reducing conditions, hydrogen atoms are reversibly added and removed across carbon double bonds, allowing the double bond to reform in the thermodynamically more stable trans configuration [2, 4].',
              'শিল্পজাত ট্রান্স ফ্যাটি অ্যাসিড (যেমন ইলাইডিক অ্যাসিড ১৮:১t৯) নিকেল প্রভাবকের উপস্থিতিতে ১৪০–২০০°C তাপমাত্রায় উদ্ভিজ্জ তেলের আংশিক হাইড্রোজিনেশনের সময় তৈরি হয় [২, ৪]। এই উচ্চ-শক্তির বিজারণ বিক্রিয়ায় দ্বি-বন্ধনে হাইড্রোজেন যুক্ত ও বিচ্ছিন্ন হওয়ার মাধ্যমে অণুটি তাপগতিবিদ্যাগতভাবে আরও স্থিতিশীল ট্রান্স কনফিগারেশনে পরিবর্তিত হয় [২, ৪]।'
            ),
            l(
              'Because hydrogen atoms in a trans double bond reside on opposite sides of the carbon chain, the hydrocarbon backbone does not bend; instead, it retains a linear, fully extended geometry that closely mimics saturated stearic acid (18:0) [2, 4]. However, unlike stearic acid, which is rapidly desaturated by stearoyl-CoA desaturase-1 (SCD1) to oleic acid in human hepatocytes, elaidic acid is a poor substrate for SCD1 and is avidly incorporated into membrane phospholipids and circulating lipoproteins [2].',
              'ট্রান্স দ্বি-বন্ধনের উভয় পাশে হাইড্রোজেনের বিপরীত অবস্থানের কারণে শিকলে কোনো বাঁক থাকে না; ফলে এটি সম্পৃক্ত স্টিয়ারিক অ্যাসিডের (১৮:০) মতো সোজা ও অনমনীয় রৈখিক রূপ ধারণ করে [২, ৪]। কিন্তু স্টিয়ারিক অ্যাসিড যেখানে যকৃতে SCD1 এনজাইম দ্বারা সহজে ওলিক অ্যাসিডে রূপান্তরিত হতে পারে, ট্রান্স ফ্যাট SCD1-এর সাবস্ট্রেট হতে পারে না এবং সরাসরি কোষপর্দা ও রক্তে প্রবেশ করে মারাত্মক ক্ষতিসাধন করে [২]।'
            ),
            l(
              'Unlike natural cis fatty acids, elaidic acid dramatically alters hepatic lipoprotein metabolism by upregulating the transcription and plasma activity of Cholesteryl Ester Transfer Protein (CETP) [2]. Enhanced CETP accelerates the net transfer of cholesteryl esters from anti-atherogenic HDL particles to pro-atherogenic VLDL and LDL particles, exchanging them for triglycerides [2]. This depletes circulating HDL-C while enriching LDL with triglycerides, which hepatic lipase subsequently hydrolyzes to generate small, dense, highly oxidation-prone LDL particles [2].',
              'প্রাকৃতিক সিস ফ্যাটের বিপরীতে ইলাইডিক অ্যাসিড যকৃতের কোলেস্টেরিল এস্টার ট্রান্সফার প্রোটিনের (CETP) প্রকাশ ও কার্যকারিতা অতিমাত্রায় বাড়িয়ে দেয় [২]। বর্ধিত CETP ভালো HDL থেকে কোলেস্টেরিল এস্টার বের করে ক্ষতিকর VLDL ও LDL-এ স্থানান্তর করে ট্রাইগ্লিসারাইডের বিনিময়ে [২]। ফলে রক্তে সুরক্ষাকারী HDL কমে যায় এবং ক্ষতিকর ছোট-ঘন LDL তৈরি হয় যা ধমনীর প্রাচীরে সহজে জারিত হয়ে প্লাক গঠন করে [২]।'
            ),
            l(
              'Concurrently, trans fatty acids downregulate hepatic LDL receptor expression by interfering with sterol regulatory element-binding protein 2 (SREBP-2) activation, impairing clearance of circulating ApoB-100 particles [2]. At the vascular endothelium, trans fats uncouple endothelial nitric oxide synthase (eNOS), reducing vasodilatory nitric oxide (NO) generation and generating cytotoxic peroxynitrite ($ONOO^-$) [2, 4]. NF-kappa-B activation follows, upregulating VCAM-1 and ICAM-1 adhesion molecules that attract monocytes into the subendothelial space, accelerating coronary foam cell creation [2, 4].',
              'একইসাথে ট্রান্স ফ্যাট SREBP-2 নিয়ন্ত্রণের মাধ্যমে যকৃতের LDL রিসেপ্টর কমিয়ে রক্ত থেকে এপো-বি কণা অপসারণ বাধাগ্রস্ত করে [২]। রক্তনালীর এন্ডোথেলিয়ামে এটি eNOS এনজাইমকে বিচ্ছিন্ন করে নাইট্রিক অক্সাইডের সরবরাহ বন্ধ করে এবং পারঅক্সিনাইট্রাইট তৈরি করে [২, ৪]। ফলে NF-kappa-B সক্রিয় হয়ে VCAM-1 ও ICAM-1 আঠালো অণু তৈরি করে যা ধমনীর প্রাচীরে মনোসাইট টেনে এনে ফোম সেল তৈরি করে এবং হার্ট অ্যাটাকের ঝুঁকি বহু গুণ বাড়িয়ে দেয় [২, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Competitive FADS Desaturase Cascade & Eicosanoid Biology', 'প্রতিযোগিতামূলক FADS ডিস্যাচুরেজ প্রবাহ ও আইকোসানয়েড জীববিজ্ঞান'),
          paragraphs: [
            l(
              'Essential polyunsaturated fatty acid metabolism is governed by a shared, alternating sequence of desaturation and elongation reactions occurring on the cytosolic face of the endoplasmic reticulum [1, 4]. The pathway commences with Delta-6 desaturase (encoded by FADS2), which adds a double bond to linoleic acid (18:2 n-6) to form gamma-linolenic acid (GLA, 18:3 n-6), or to alpha-linolenic acid (18:3 n-3) to yield stearidonic acid (SDA, 18:4 n-3) [1, 4]. Because FADS2 is the rate-limiting enzyme for both cascades, excess substrate of one pathway competitively inhibits the desaturation of the other [1, 3].',
              'অত্যাবশ্যক পলি-অসম্পৃক্ত ফ্যাটি অ্যাসিডের বিপাক এন্ডোপ্লাজমিক রেটিকুলামের পর্দায় এক সেট সাধারণ এনজাইম দ্বারা নিয়ন্ত্রিত হয় [১, ৪]। ডেল্টা-৬ ডিস্যাচুরেজ (FADS2) এনজাইম লিনোলিক অ্যাসিডকে (১৮:২ n-৬) গামা-লিনোলেনিক অ্যাসিডে (১৮:৩ n-৬) এবং আলফা-লিনোলেনিক অ্যাসিডকে (১৮:৩ n-৩) স্টিয়ারিডোনিক অ্যাসিডে (১৮:৪ n-৩) রূপান্তরিত করে [১, ৪]। যেহেতু FADS2 উভয় পথের জন্য রেট-লিমিটিং এনজাইম, যেকোনো একটি পথের আধিক্য অন্যটির রূপান্তরকে সম্পূর্ণ বন্ধ করে দেয় [১, ৩]।'
            ),
            l(
              'Following two-carbon elongation via ELOVL5 elongase, Delta-5 desaturase (encoded by FADS1) executes the next critical desaturation step, synthesizing Arachidonic Acid (ARA, 20:4 n-6) from dihomo-gamma-linolenic acid (DGLA, 20:3 n-6), and Eicosapentaenoic Acid (EPA, 20:5 n-3) from eicosatetraenoic acid (ETA, 20:4 n-3) [1, 4]. ARA is stored esterified at the sn-2 position of membrane phospholipids [1, 4]. Upon physiological or pathological inflammatory stimulation, cytosolic Phospholipase A2 (cPLA2) hydrolyzes the sn-2 ester bond, liberating free unesterified ARA into the cytoplasm [1, 4].',
              'ELOVL5 এনজাইম দ্বারা শিকলে দুটি কার্বন যুক্ত হওয়ার পর ডেল্টা-৫ ডিস্যাচুরেজ (FADS1) DGLA থেকে অ্যারাকিডোনিক অ্যাসিড (ARA, ২০:৪ n-৬) এবং ETA থেকে আইকোসাপেন্টাইনোয়িক অ্যাসিড (EPA, ২০:৫ n-৩) তৈরি করে [১, ৪]। এই অ্যারাকিডোনিক অ্যাসিড কোষপর্দার ফসফোলিপিডের sn-2 অবস্থানে জমা থাকে এবং আঘাতের সময় cPLA2 এনজাইম দ্বারা মুক্ত হয় [১, ৪]।'
            ),
            l(
              'Free intracellular ARA serves as the primary substrate for two major enzymatic cascades: Cyclooxygenase (COX-1 and COX-2) and 5-Lipoxygenase (5-LOX) [1, 3]. COX enzymes convert ARA into prostaglandin H2 (PGH2), which cell-specific synthases convert into 2-series prostanoids: Thromboxane A2 (TXA2) in platelets (a potent vasoconstrictor and platelet aggregator via TP receptors) and Prostaglandin E2 (PGE2) in immune cells (driving fever, vasodilation, and pain sensitization) [1, 3]. Concurrently, 5-LOX, working with 5-lipoxygenase-activating protein (FLAP), converts ARA into leukotriene A4 (LTA4), which leukotriene A4 hydrolase converts into leukotriene B4 (LTB4)—one of the most powerful known chemoattractants for human neutrophils [1, 3].',
              'মুক্ত অ্যারাকিডোনিক অ্যাসিড সাইক্লোঅক্সিজিনেজ (COX-1/2) ও ৫-লাইপক্সিজিনেজ (5-LOX) এনজাইমের সাবস্ট্রেট হিসেবে কাজ করে [১, ৩]। COX এনজাইম ARA-কে ২-সিরিজের প্রোস্টানয়েডে রূপান্তরিত করে: অণুচক্রিকায় থ্রম্বোক্সেন A2 (TXA2, যা রক্ত জমাট বাঁধায় ও রক্তনালী সংকুচিত করে) এবং রোগপ্রতিরোধ কোষে প্রোস্টাগ্ল্যান্ডিন E2 (PGE2, যা জ্বর ও ব্যথা সৃষ্টি করে) [১, ৩]। অন্যদিকে 5-LOX এনজাইম ক্ষতিকর লিউকোট্রিন B4 (LTB4) তৈরি করে যা শ্বেতকণিকাকে ধমনীর প্রাচীরে টেনে এনে ভয়াবহ প্রদাহের সূচনা করে [১, ৩]।'
            ),
            l(
              'Conversely, when membrane EPA is liberated by cPLA2, it enters the identical COX and 5-LOX pathways, generating 3-series prostanoids (PGE3, TXA3) and 5-series leukotrienes (LTB5) [1, 3]. Crucially, TXA3 is virtually devoid of platelet aggregatory activity, while LTB5 possesses less than 10% of the inflammatory chemotactic potency of LTB4 [1, 3]. Endothelial Prostacyclin Synthase (PGIS) converts EPA into PGI3, an anti-aggregatory vasodilator whose potency matches or exceeds ARA-derived PGI2 [1, 3]. Enriching membranes with EPA therefore tilts the entire biochemical vascular balance away from thrombosis toward vasodilation and anti-thrombotic defense [1, 3].',
              'পক্ষান্তরে কোষপর্দায় পর্যাপ্ত EPA থাকলে তা একই এনজাইম দ্বারা ৩-সিরিজের প্রোস্টানয়েড (PGE3, TXA3) এবং ৫-সিরিজের লিউকোট্রিন (LTB5) তৈরি করে [১, ৩]। সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো TXA3 রক্ত জমাট বাঁধায় না এবং LTB5 প্রদাহ সৃষ্টি করে না বললেই চলে [১, ৩]। একইসাথে রক্তনালীর প্রাচীরে EPA থেকে তৈরি PGI3 ধমনীকে প্রসারিত ও সুস্থ রাখে [১, ৩]। তাই কোষপর্দায় EPA এর উপস্থিতি পুরো রক্ত সংবহনতন্ত্রকে রক্ত জমাট বাঁধা ও হার্ট অ্যাটাকের হাত থেকে প্রাকৃতিকভাবে রক্ষা করে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Resolvin Pathways & Substrate Competition Dynamics', 'রিজলভিন পথ ও সাবস্ট্রেট প্রতিযোগিতার গতিবিদ্যা'),
          paragraphs: [
            l(
              'In stark physiological contrast to passive cessation of inflammation, eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) serve as obligatory precursors for the enzymatic generation of Specialized Pro-resolving Mediators (SPMs) [1, 5]. Pioneering discoveries by Charles N. Serhan demonstrated that resolving acute inflammation is not merely the dilution of chemoattractants, but an active, stereospecific biochemical process orchestrated by resolvins, protectins, and maresins [5].',
              'প্রদাহ কেবল নিজে নিজে কমে যায় না, বরং EPA এবং DHA থেকে তৈরি হওয়া "প্রদাহ প্রশমনকারী বিশেষ মধ্যস্থতাকারী" (SPM) সক্রিয়ভাবে এই নিরাময় প্রক্রিয়া সম্পন্ন করে [১, ৫]। চার্লস এন. সারহানের গবেষণায় প্রমাণিত হয়েছে যে প্রদাহ নিরাময় কোনো নিষ্ক্রিয় ঘটনা নয়, বরং এটি রিজলভিন, প্রোটেকটিন ও মারিসিনের নেতৃত্বে এক অত্যন্ত সুশৃঙ্খল ও সক্রিয় জৈব রাসায়নিক অভিযান [৫]।'
            ),
            l(
              'EPA is converted via acetylated COX-2 (e.g., during low-dose aspirin therapy) or endothelial cytochrome P450 into 18R-HEPE, which leukocyte 5-LOX rapidly transforms into Resolvin E1 (RvE1) and Resolvin E2 (RvE2) [1, 5]. DHA is metabolized by 15-LOX into 17S-hydroxy-DHA, yielding D-series resolvins (RvD1 through RvD6) and Protectin D1 (PD1 / Neuroprotectin D1 in neural tissue), while macrophage 12-LOX metabolizes DHA into Maresin 1 (MaR1) [5].',
              'অ্যাসপিরিনের উপস্থিতিতে COX-2 বা সাইটোক্রোম P450 এনজাইম EPA-কে রূপান্তর করে E-সিরিজ রিজলভিন (RvE1, RvE2) তৈরি করে [১, ৫]। অপরদিকে DHA থেকে ১৫-LOX এনজাইমের মাধ্যমে D-সিরিজ রিজলভিন (RvD1-RvD6) ও প্রোটেকটিন D1 তৈরি হয়, এবং ম্যাক্রোফেজের ১২-LOX এনজাইম তৈরি করে মারিসিন ১ (MaR1) [৫]।'
            ),
            l(
              'SPMs exert their protective effects through distinct, high-affinity G-protein coupled receptors [5]. Resolvin E1 acts as an agonist at the ChemR23 (ERV1) receptor on monocytes and dendritic cells, while functioning as a competitive antagonist at the BLT1 receptor on neutrophils, terminating neutrophil extravasation and blocking pro-inflammatory cytokine secretion [5]. Simultaneously, RvD1 binds ALX/FPR2 and GPR32 (DRV1), stimulating non-phlogistic macrophage efferocytosis—the clean phagocytic engulfment of apoptotic neutrophils without the release of inflammatory lysosomal enzymes or tissue-damaging ROS [1, 5].',
              'এই SPM অণুগুলো নির্দিষ্ট জি-প্রোটিন রিসেপ্টরে অত্যন্ত কার্যকরভাবে যুক্ত হয় [৫]। যেমন Resolvin E1 ম্যাক্রোফেজের ChemR23 রিসেপ্টরকে সক্রিয় করে এবং নিউট্রোফিলের BLT1 রিসেপ্টরকে ব্লক করে নতুন শ্বেতকণিকার আক্রমণ তাত্ক্ষণিকভাবে থামিয়ে দেয় [৫]। একইসাথে RvD1 ম্যাক্রোফেজকে উদ্দীপিত করে যাতে তা কোনো বিষাক্ত এনজাইম বা র্যাডিকেল না ছড়িয়ে মৃত নিউট্রোফিলগুলোকে সুন্দরভাবে পরিষ্কার করে টিস্যুকে পুনরুজ্জীবিত করতে পারে [১, ৫]।'
            ),
            l(
              'Because FADS1 and FADS2 operate near kinetic saturation, excessive dietary linoleic acid (>7% of energy) competitively suppresses the conversion of plant ALA to bioactive EPA and DHA [1, 3]. In humans, endogenous conversion efficiencies drop below 5% for EPA and <0.5% for DHA due to enzymatic bottlenecks and competitive inhibition, necessitating direct dietary intake of marine long-chain omega-3s for tissue enrichment [1, 3]. The presence of adequate DHA also downregulates COX-2 and 5-LOX expression through PPAR-gamma activation, directly repressing inflammatory gene transcription at the promoter level [1, 4].',
              'যেহেতু FADS1 ও FADS2 এনজাইমগুলো সাবস্ট্রেট সম্পৃক্ততার কাছাকাছি কাজ করে, খাদ্যে অতিরিক্ত লিনোলিক অ্যাসিড উদ্ভিজ্জ ALA থেকে EPA ও DHA রূপান্তরের গতিকে মারাত্মকভাবে বাধাগ্রস্ত করে [১, ৩]। মানুষের দেহে ALA থেকে রূপান্তর হার EPA-র জন্য ৫% এর কম এবং DHA-র জন্য ০.৫% এর নিচে নেমে যায়, যার কারণে রক্ত ও টিস্যুর সুরক্ষার জন্য সামুদ্রিক উৎস থেকে সরাসরি EPA ও DHA গ্রহণ অপরিহার্য [১, ৩]। তদুপরি পর্যাপ্ত DHA কোষের PPAR-gamma রিসেপ্টরকে সক্রিয় করে প্রদাহ সৃষ্টিকারী জিনের প্রকাশ বন্ধ করে দেয় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Interpretation of Fatty Acid Profiles & Dietary Guidance', 'রক্তের ফ্যাটি অ্যাসিড প্রোফাইল মূল্যায়ন ও ক্লিনিক্যাল নির্দেশনা'),
          paragraphs: [
            l(
              'Clinical assessment of systemic omega-3 status is objectively quantified using the Omega-3 Index, defined as the percentage of EPA and DHA in total red blood cell membrane fatty acids [1]. Red blood cell membranes reflect tissue incorporation over an erythrocyte lifespan of 120 days, avoiding acute postprandial fluctuations. An Omega-3 Index of <4% correlates with high risk of cardiovascular mortality, 4% to 8% represents intermediate risk, and ≥8% confers maximal cardioprotection against sudden cardiac death [1].',
              'ক্লিনিক্যাল ক্ষেত্রে ওমেগা-৩ এর মাত্রা পরিমাপ করা হয় "ওমেগা-৩ ইনডেক্স" দ্বারা, যা লোহিত রক্তকণিকার পর্দার মোট ফ্যাটি অ্যাসিডে EPA ও DHA-র শতকরা হার প্রকাশ করে [১]। লোহিত রক্তকণিকার ১২০ দিনের জীবনকালের কারণে এটি খাদ্যের তাত্ক্ষণিক ওঠানামা দ্বারা বিভ্রান্ত হয় না। ৪% এর কম ওমেগা-৩ ইনডেক্স আকস্মিক হৃদরোগে মৃত্যুর উচ্চ ঝুঁকির নির্দেশক, ৪-৮% মধ্যম এবং ৮% বা তার বেশি মাত্রা সর্বোত্তম হৃদসুরক্ষা নিশ্চিত করে [১]।'
            ),
            l(
              'Evidence-based nutritional guidelines (AHA, ESC, WHO) recommend restricting industrial trans fat intake to <1% of energy (or zero intake according to WHO REPLACE guidelines), moderating saturated fat to <10% (substituting with cis-monounsaturated extra-virgin olive oil), and prescribing 250–500 mg/day of combined EPA + DHA for healthy adults [1, 2].',
              'আন্তর্জাতিক প্রমাণভিত্তিক পুষ্টি নির্দেশিকা (AHA, ESC, WHO) অনুযায়ী শিল্পজাত ট্রান্স ফ্যাট সম্পূর্ণ বর্জন (WHO REPLACE), সম্পৃক্ত চর্বি মোট ক্যালোরির ১০% এর নিচে রেখে অলিভ অয়েলের মতো মনো-অসম্পৃক্ত ফ্যাট দ্বারা প্রতিস্থাপন এবং সুস্থ প্রাপ্তবয়স্কদের জন্য দৈনিক ২৫০–৫০০ মিলিগ্রাম EPA+DHA গ্রহণের পরামর্শ দেওয়া হয় [১, ২]।'
            ),
            l(
              'In clinical hypertriglyceridemia (fasting triglycerides ≥500 mg/dL), pharmaceutical-grade prescription omega-3s (such as 4 g/day icosapent ethyl or omega-3 acid ethyl esters) lower hepatic VLDL synthesis and accelerate triglyceride clearance, significantly reducing pancreatitis and ischemic cardiovascular event risks [1, 6]. Over-the-counter fish oil supplements must be evaluated for purity, oxidation markers (peroxide value <5 mEq/kg, Totox <26), and active EPA/DHA concentration per softgel rather than gross oil mass [1, 6].',
              'মারাত্মক হাইপারট্রাইগ্লিসারিডেমিয়ায় (ফাস্টিং ট্রাইগ্লিসারাইড ≥৫০০ মিগ্রা/ডেসিলি) চিকিৎসকের প্রেসক্রিপশন অনুযায়ী দৈনিক ৪ গ্রাম ফার্মাসিউটিক্যাল ওমেগা-৩ (যেমন আইকোসাপেন্ট ইথাইল) যকৃতের VLDL উৎপাদন কমিয়ে ট্রাইগ্লিসারাইড দূর করে এবং প্যানক্রিয়াটাইটিস ও হার্ট অ্যাটাকের ঝুঁকি হ্রাস করে [১, ৬]। বাণিজ্যিক সাধারণ মাছের তেল কেনার সময় তার বিশুদ্ধতা, জারণ মান (পারঅক্সাইড মান <৫) এবং ক্যাপসুলে প্রকৃত সক্রিয় EPA/DHA-র পরিমাণ যাচাই করা জরুরি [১, ৬]।'
            ),
            l(
              'When replacing saturated fats in the diet, the substitution nutrient critically dictates the clinical outcome. Replacing saturated fats with refined carbohydrates or sugars provides zero cardiovascular benefit and may actually worsen atherogenic dyslipidemia by increasing hepatic de novo lipogenesis, raising small dense LDL, and depressing HDL-C [1, 4]. In stark contrast, isocalorically substituting saturated fats with polyunsaturated and cis-monounsaturated fats consistently achieves profound reductions in coronary heart disease events and all-cause mortality [1, 4].',
              'খাদ্য থেকে সম্পৃক্ত চর্বি বাদ দিলে তার জায়গায় কী খাওয়া হচ্ছে তা ক্লিনিক্যাল ফলের জন্য অত্যন্ত গুরুত্বপূর্ণ। সম্পৃক্ত চর্বি বাদ দিয়ে যদি কেউ পরিশোধিত চিনি বা সাদা ময়দার শর্করা খায়, তবে হৃদরোগের ঝুঁকি একটুও কমে না, বরং যকৃতে চর্বি জমে এবং ভালো HDL কমে গিয়ে পরিস্থিতি আরও খারাপ হয় [১, ৪]। কিন্তু সম্পৃক্ত চর্বির জায়গায় যদি সিস-মনো-অসম্পৃক্ত অলিভ অয়েল বা ওমেগা-৩ পলি-অসম্পৃক্ত চর্বি গ্রহণ করা হয়, তবে হৃদরোগে আক্রান্ত হওয়া ও মৃত্যুর ঝুঁকি নাটকীয়ভাবে হ্রাস পায় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Summary & Clinical Pearls', 'একাডেমিক সারাংশ ও ক্লিনিক্যাল মুক্তা'),
          paragraphs: [
            l(
              'Fatty acid saturation, bond isomerism, and carbon position exert profound control over human bioenergetics, membrane architecture, and immune cell polarization [1, 4]. Saturated fats elevate hepatic LDL receptors downregulation when consumed in excess of 10% of calories, while industrial trans fats uniquely drive CETP activation, depleting HDL and generating atherogenic dense LDL particles [2].',
              'ফ্যাটি অ্যাসিডের সম্পৃক্ততা, আইসোমারিজম এবং কার্বনের বিন্যাস মানবদেহের শক্তিবিজ্ঞান, কোষপর্দার গঠন এবং রোগপ্রতিরোধ ব্যবস্থার ওপর গভীর প্রভাব ফেলে [১, ৪]। সম্পৃক্ত চর্বি অতিরিক্ত খেলে তা LDL রিসেপ্টর কমায়, আর শিল্পজাত ট্রান্স ফ্যাট CETP সক্রিয় করে সুরক্ষাকারী HDL নিঃশেষ করে এবং ক্ষতিকর ছোট LDL কণা তৈরি করে [২]।'
            ),
            l(
              'Restoring the physiological equilibrium between n-6 and n-3 polyunsaturates shifts downstream lipid mediator synthesis from tissue-destructive 2-series prostanoids and 4-series leukotrienes toward specialized pro-resolving mediators (resolvins, protectins, maresins) that actively terminate inflammation and maintain vascular integrity [1, 5].',
              'ওমেগা-৬ ও ওমেগা-৩ ফ্যাটি অ্যাসিডের সঠিক ভারসাম্য বজায় রাখলে তা প্রদাহ সৃষ্টিকারী উপাদানের বদলে সক্রিয় নিরাময়কারী রিজলভিন ও প্রোটেকটিন তৈরিকে ত্বরান্বিত করে, যা দীর্ঘস্থায়ী প্রদাহ নিরাময় এবং রক্তনালীর স্বাস্থ্য রক্ষায় মূল চাবিকাঠি [১, ৫]।'
            ),
            l(
              'The Omega-3 Index provides a stable, reproducible clinical biomarker of tissue fatty acid status that directly reflects myocardial membrane incorporation [1, 6]. Maintaining an Omega-3 Index above 8% confers robust protection against sudden cardiac death and ischemic coronary syndromes [1, 6].',
              'ওমেগা-৩ ইনডেক্স হলো মানবদেহের টিস্যুতে ওমেগা-৩ এর প্রকৃত সঞ্চয় পরিমাপের সবচেয়ে নির্ভরযোগ্য ক্লিনিক্যাল বায়োমার্কার [১, ৬]। লোহিত রক্তকণিকায় ৮% এর বেশি ওমেগা-৩ ইনডেক্স নিশ্চিত করা হৃদযন্ত্রের প্রাণঘাতী অ্যারিথমিয়া ও আকস্মিক কার্ডিয়াক ডেথ থেকে শক্তিশালী প্রতিরোধ গড়ে তোলে [১, ৬]।'
            ),
            l(
              'Cardiovascular dietary strategies must emphasize dietary fat quality over obsolete low-fat paradigms. Maximizing extra virgin olive oil, cold-water oily fish, tree nuts, and seeds while completely eliminating industrial trans fats and minimizing refined carbohydrates represents the most evidence-supported lipid architecture for human longevity [1, 2, 4].',
              'আধুনিক চিকিৎসাবিজ্ঞানে সেকেলে চর্বিমুক্ত খাবারের বদলে স্বাস্থ্যকর চর্বির গুণগত মানের ওপর জোর দেওয়া হয়। এক্সট্রা ভার্জিন অলিভ অয়েল, সামুদ্রিক তৈলাক্ত মাছ, বাদাম ও বীজ গ্রহণ এবং ক্ষতিকর ট্রান্স ফ্যাট ও চিনিযুক্ত খাবার সম্পূর্ণ পরিহার করাই দীর্ঘায়ুর বিজ্ঞানসম্মত পথ [১, ২, ৪]।'
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
          heading: l('Evolutionary Lipidomics & The Paleolithic Nutritional Transition', 'বিবর্তনীয় লিপিডোমিক্স ও প্যালিওলিথিক পুষ্টি রূপান্তর'),
          paragraphs: [
            l(
              'Evolutionary lipidomics reveals that the hominid encephalization quotient expanded dramatically during the late Pleistocene, a metabolic milestone tightly coupled to the dietary procurement of shoreline aquatic resources providing preformed docosahexaenoic acid (22:6 n-3) and arachidonic acid (20:4 n-6) [1, 3]. Paleolithic human diets exhibited an estimated omega-6 to omega-3 essential fatty acid ratio ranging between 1:1 and 2:1, reflecting uncultivated botanical intakes and wild game lacking industrial grain feeds [3].',
              'বিবর্তনীয় লিপিডোমিক্স প্রমাণ করে যে প্লেইস্টোসিন যুগে মানব মস্তিষ্কের নাটকীয় বিকাশ বা এনসেফালাইজেশনের পেছনে উপকূলীয় সামুদ্রিক খাদ্যের অবদান ছিল অসামান্য, যা সরাসরি সক্রিয় DHA (২২:৬ n-৩) এবং অ্যারাকিডোনিক অ্যাসিড (২০:৪ n-৬) সরবরাহ করত [১, ৩]। প্যালিওলিথিক যুগের আদিম মানুষের খাদ্যাভ্যাসে ওমেগা-৬ ও ওমেগা-৩ এর অনুপাত ছিল প্রায় ১:১ থেকে ২:১, যা বন্য উদ্ভিজ্জ খাদ্য এবং শস্যমুক্ত প্রাকৃতিক শিকারের ওপর নির্ভরশীল ছিল [৩]।'
            ),
            l(
              'Over the past 150 years, the advent of industrial expeller pressing, solvent extraction, and catalytic hydrogenation introduced massive volumes of high-linoleic seed oils into the human food chain. Today, linoleic acid intake represents over 7% to 10% of total energy in modernized populations—an unprecedented evolutionary perturbation that saturated desaturase enzymes and fundamentally reconfigured human membrane lipidomes [1, 3].',
              'গত ১৫০ বছরে শিল্প বিপ্লব, আধুনিক তেল নিষ্কাশন পদ্ধতি এবং আংশিক হাইড্রোজিনেশনের আবিষ্কার মানব খাদ্যশৃঙ্খলে অস্বাভাবিক মাত্রায় উচ্চ-লিনোলিক বীজের তেলের অনুপ্রবেশ ঘটিয়েছে। আধুনিক সমাজে লিনোলিক অ্যাসিড গ্রহণ মোট ক্যালোরির ৭% থেকে ১০% ছাড়িয়ে গেছে—যা মানব কোষপর্দার লিপিডবিন্যাসকে সম্পূর্ণ বদলে দিয়েছে এবং এনজাইমগুলোকে ওমেগা-৬ দ্বারা ভারাক্রান্ত করেছে [১, ৩]।'
            ),
            l(
              'This dietary shift has skewed the tissue fatty acid balance in modernized humans, driving an absolute depletion of tissue EPA and DHA while driving tissue arachidonic acid to supra-physiological levels [1, 3]. The resulting shift in basal eicosanoid and docosanoid tone creates a pro-thrombotic, pro-inflammatory vascular milieu that underlies the modern epidemic of atherosclerosis, metabolic syndrome, and autoimmune inflammatory disorders [1, 3].',
              'এই খাদ্যাভ্যাসগত পরিবর্তনের কারণে আধুনিক মানুষের টিস্যুতে EPA ও DHA নাটকীয়ভাবে কমে গেছে এবং অ্যারাকিডোনিক অ্যাসিডের মাত্রা বিপজ্জনকভাবে বৃদ্ধি পেয়েছে [১, ৩]। এর ফলে সৃষ্ট দীর্ঘস্থায়ী প্রদাহ ও রক্ত জমাট বাঁধার প্রবণতাই আজকের বিশ্বে এথেরোস্ক্লেরোসিস, মেটাবলিক সিন্ড্রোম এবং অটোইমিউন রোগের মহামারির অন্যতম মূল চালিকাশক্তি [১, ৩]।'
            ),
            l(
              'Comparative anthropological studies of non-industrialized hunter-gatherer populations (such as the Tsimané of Bolivia or coastal Inuits) reveal near-absence of coronary calcification and clinical atherosclerosis despite diverse total fat intakes [3]. Their vascular protection consistently correlates with an ancestral fatty acid balance characterized by low omega-6 to omega-3 ratios, absent industrial trans fats, and abundant natural polyphenols [1, 3].',
              'বলিভিয়ার সিমানি আদিবাসী কিংবা ঐতিহ্যবাহী ইনুইট জনগোষ্ঠীর ওপর পরিচালিত গবেষণায় দেখা গেছে যে চর্বির মোট পরিমাণ যা-ই হোক না কেন, তাদের রক্তনালীতে চর্বি জমে ক্যালসিফিকেশন বা হার্ট অ্যাটাকের ঘটনা প্রায় শূন্যের কোঠায় [৩]। এই সুরক্ষার পেছনে প্রধান কারণ হলো তাদের প্রাকৃতিক খাদ্যে ওমেগা-৬ ও ওমেগা-৩ এর আদর্শ অনুপাত, ক্ষতিকর ট্রান্স ফ্যাটের সম্পূর্ণ অনুপস্থিতি এবং প্রচুর প্রাকৃতিক অ্যান্টিঅক্সিডেন্ট [১, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Membrane Biophysics: FRAP Dynamics & Order Parameters', 'মেমব্রেন বায়োফিজিক্স: FRAP গতিবিদ্যা ও বিন্যাস প্যারামিটার'),
          paragraphs: [
            l(
              'The biophysical properties of biological membranes are characterized quantitatively by their lateral diffusion coefficients (D) and lipid order parameters (S), measured via Fluorescence Recovery After Photobleaching (FRAP) and Electron Spin Resonance (ESR) spectroscopy [4]. Acyl chains rich in saturated palmitic and stearic acids adopt an all-trans extended zig-zag conformation that packs densely, establishing a liquid-ordered ($L_o$) phase with an order parameter approaching $S = 0.8$ [4].',
              'কোষপর্দার ভৌত বৈশিষ্ট্যগুলো ফ্লুরোসেন্স রিকভারি আফটার ফটোব্লিচিং (FRAP) এবং ইলেকট্রন স্পিন রেজোন্যান্স (ESR) বর্ণালীবীক্ষণের মাধ্যমে তাদের পার্শ্বীয় প্রসারণ সহগ (D) এবং লিপিড বিন্যাস প্যারামিটার (S) দ্বারা নিখুঁতভাবে পরিমাপ করা যায় [৪]। সম্পৃক্ত পামিটিক ও স্টিয়ারিক অ্যাসিড সম্পূর্ণ সোজা বিন্যাসে ঘন হয়ে বসে একটি তরল-সুশৃঙ্খল ($L_o$) দশা তৈরি করে যেখানে বিন্যাস সূচক $S = ০.৮$ পর্যন্ত পৌঁছায় [৪]।'
            ),
            l(
              'When docosahexaenoic acid (22:6 n-3)—containing six methylene-interrupted cis double bonds—is incorporated into phosphatidylcholine and phosphatidylethanolamine, the acyl chain experiences rapid, sub-nanosecond conformational isomerization between helical and extended states [4]. This steric flexibility increases free volume within the bilayer interior, driving the order parameter down to $S < 0.2$ and establishing a liquid-disordered ($L_d$) bulk phase [1, 4].',
              'অপরদিকে docosahexaenoic acid (DHA, ২২:৬ n-৩)-এ ছয়টি সিস দ্বি-বন্ধন থাকায় এর শিকলটি ন্যানোসেকেন্ডেরও কম সময়ে কুণ্ডলী ও প্রসারিত অবস্থার মধ্যে তীব্রভাবে দোদুল্যমান থাকে [৪]। এই গতিশীলতা কোষপর্দার ভেতরের ফাঁকা জায়গা বৃদ্ধি করে বিন্যাস সূচক $S < ০.২$-এ নামিয়ে আনে এবং একটি অত্যন্ত নমনীয় তরল-বিশৃঙ্খলাপূর্ণ ($L_d$) দশা প্রতিষ্ঠা করে [১, ৪]।'
            ),
            l(
              'This biophysical elasticity is essential for high-frequency integral membrane proteins [4]. In rod photoreceptor disc membranes, where rhodopsin represents >80% of protein content, high DHA enrichment (>50% of phospholipid acyl chains) lowers the activation energy for metarhodopsin II formation, accelerating visual phototransduction kinetics by over 100-fold compared to saturated bilayers [4]. In neuronal synapses, DHA-rich membranes facilitate rapid SNARE complex assembly and neurotransmitter exocytosis [1, 4].',
              'এই ভৌত স্থিতিস্থাপকতা দ্রুতগতির মেমব্রেন প্রোটিনগুলোর কাজের জন্য অপরিহার্য [৪]। চোখের রেটিনার রড কোষের পর্দায় যেখানে রডপসিন প্রোটিন প্রধান, সেখানে ৫০% এর বেশি DHA থাকলে তা মেটারডপসিন II গঠনের সক্রিয়করণ শক্তি কমিয়ে আলোর সংবেদনশীলতাকে ১০০ গুণেরও বেশি দ্রুত করে তোলে [৪]। মস্তিষ্কের স্নায়ুকোষে DHA-সমৃদ্ধ পর্দা নিউরোট্রান্সমিটার নিঃসরণকে চোখের পলকে সম্পন্ন করতে সাহায্য করে [১, ৪]।'
            ),
            l(
              'Conversely, the presence of industrial trans fatty acids (elaidic acid) inserts rigid, unnatural acyl chains into the membrane that artificially elevate order parameters while failing to participate in normal lipid raft partitioning [2, 4]. This membrane disruption mislocalizes caveolae and disrupts the assembly of endothelial nitric oxide synthase signalosomes, promoting chronic vascular dysfunction [2, 4].',
              'বিপরীতে শিল্পজাত ট্রান্স ফ্যাট (ইলাইডিক অ্যাসিড) কোষপর্দায় অস্বাভাবিক অনমনীয় শিকল প্রবেশ করিয়ে কৃত্রিমভাবে পর্দার অনমনীয়তা বাড়িয়ে দেয় এবং স্বাভাবিক লিপিড রাফটের কার্যকারিতা বিনষ্ট করে [২, ৪]। এর ফলে এন্ডোথেলিয়াল নাইট্রিক অক্সাইড সিন্থেজ সংকেত চক্র ভেঙে পড়ে এবং দীর্ঘমেয়াদী রক্তনালী সংকোচন ও উচ্চ রক্তচাপ সৃষ্টি হয় [২, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Lipid Raft Nanodomains & Signal Transduction Platforms', 'লিপিড রাফট ন্যানোডোমেন ও সংকেত প্রবাহ প্ল্যাটফর্ম'),
          paragraphs: [
            l(
              'Lipid rafts are dynamic, submicroscopic (10–200 nm) plasma membrane microdomains enriched in cholesterol, sphingolipids (sphingomyelin and glycosphingolipids), and saturated fatty acyl chains [4]. Saturated chains pack tightly with the rigid planar sterol ring of cholesterol, forming a liquid-ordered ($L_o$) microenvironment that phase-separates from the surrounding unsaturated liquid-disordered ($L_d$) glycerophospholipid matrix [1, 4].',
              'লিপিড রাফট হলো কোষপর্দার অত্যন্ত গতিশীল, অতি-ক্ষুদ্র (১০–২০০ ন্যানোমিটার) বিশেষায়িত এলাকা যা কোলেস্টেরল, স্ফিঙ্গোলিপিড এবং সম্পৃক্ত ফ্যাটি অ্যাসিডে সমৃদ্ধ [৪]। সম্পৃক্ত শিকলগুলো কোলেস্টেরলের সমতল রিংয়ের সাথে খুব শক্তভাবে সন্নিবেশিত হয়ে তরল-সুশৃঙ্খল ($L_o$) পরিবেশ তৈরি করে যা চারপাশের তরল পর্দা থেকে নিজেকে আলাদা রাখে [১, ৪]।'
            ),
            l(
              'Lipid rafts function as specialized biological scaffolding platforms that selectively concentrate acylated signaling proteins, including palmitoylated Src-family tyrosine kinases (Lck, Fyn), glycosylphosphatidylinositol (GPI)-anchored receptors, and the immunological T-cell receptor (TCR) complex [1, 4]. When antigens cross-link TCRs, rafts coalesce into larger signaling platforms that coordinate downstream cascades, promoting T-cell proliferation and cytokine synthesis [1, 4].',
              'এই লিপিড রাফটগুলো কোষের সংকেত আদান-প্রদানের প্রধান মঞ্চ হিসেবে কাজ করে, যেখানে পামিটোইলেটেড টাইরোসিন কাইনেজ (Src, Lck), GPI-যুক্ত রিসেপ্টর এবং টি-সেল রিসেপ্টর (TCR) কমপ্লেক্স দলবদ্ধভাবে অবস্থান করে [১, ৪]। যখন কোনো অ্যান্টিজেন কোষে আক্রমণ করে, এই রাফটগুলো একত্রিত হয়ে বৃহৎ সংকেত প্ল্যাটফর্ম গঠন করে যা শ্বেতকণিকার বংশবৃদ্ধি ও সাইটোকাইন নিঃসরণ ঘটায় [১, ৪]।'
            ),
            l(
              'Dietary supplementation with high-dose eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) profoundly alters lipid raft architecture [1, 4]. Because the sterically bulky, rapidly undulating cis double bonds of DHA are thermodynamically incompatible with the rigid cholesterol ring, DHA is actively excluded from lipid rafts [1, 4]. Accumulation of DHA in the non-raft matrix forces cholesterol out of rafts, disrupting raft integrity and displacing acylated kinases from the membrane [1, 4].',
              'উচ্চমাত্রার EPA ও DHA খাদ্যতালিকায় যুক্ত করলে তা লিপিড রাফটের গঠনকে বৈপ্লবিক উপায়ে পরিবর্তন করে দেয় [১, ৪]। DHA-র বৃহৎ বাঁকানো সিস দ্বি-বন্ধনগুলো কোলেস্টেরলের শক্ত কাঠামোর সাথে খাপ খেতে পারে না, যার ফলে DHA লিপিড রাফট থেকে কোলেস্টেরলকে বাইরে ঠেলে বের করে দেয় [১, ৪]। এর ফলে অতি-সক্রিয় লিপিড রাফটগুলো ভেঙে যায় এবং প্রদাহজনক কাইনেজ এনজাইমগুলো মেমব্রেন থেকে বিচ্ছিন্ন হয়ে পড়ে [১, ৪]।'
            ),
            l(
              'In chronic inflammatory and autoimmune conditions (such as rheumatoid arthritis or systemic lupus erythematosus), this DHA-induced raft disruption suppresses hyperactive T-cell signaling, downregulates NF-kappa-B activation, and curtails the transcription of pro-inflammatory cytokines (TNF-alpha, IL-1beta, IL-6) [1, 5]. In oncology research, lipid raft disruption by marine omega-3s sensitizes breast and prostate cancer cells to apoptosis by dismantling survival signaling platforms like Akt/mTOR [1, 4].',
              'রিউমাটয়েড আর্থ্রাইটিস বা লুপাসের মতো দীর্ঘস্থায়ী অটোইমিউন রোগে DHA-দ্বারা লিপিড রাফটের এই নিয়ন্ত্রণ অতি-সক্রিয় শ্বেতকণিকার সংকেত থামিয়ে দেয়, NF-kappa-B দমন করে এবং প্রদাহজনক সাইটোকাইন (TNF-alpha, IL-6) উৎপাদন বন্ধ করে [১, ৫]। ক্যান্সার গবেষণায় দেখা গেছে যে ওমেগা-৩ লিপিড রাফট ভেঙে ক্যান্সার কোষের Akt/mTOR জীবনরক্ষা সংকেত বন্ধ করে তাকে ধ্বংসের মুখে ঠেলে দেয় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The REDUCE-IT Paradigm & Omega-3 Cardiovascular Pharmacokinetics', 'REDUCE-IT দৃষ্টান্ত ও ওমেগা-৩ কার্ডিওভাসকুলার ফার্মাকোকাইনেটিক্স'),
          paragraphs: [
            l(
              'A critical clinical debate in preventive cardiology emerged following conflicting results between large-scale omega-3 cardiovascular outcome trials [1, 6]. The REDUCE-IT trial (Reduction of Cardiovascular Events with Icosapent Ethyl–Intervention Trial) randomized 8,179 statin-treated patients with elevated triglycerides (135–499 mg/dL) and established cardiovascular disease or diabetes to 4 grams/day of icosapent ethyl (a highly purified, pharmaceutical ethyl ester of EPA) versus a mineral oil placebo [6].',
              'প্রতিরোধমূলক হৃদরোগ চিকিৎসায় সাম্প্রতিক দশকগুলোর সবচেয়ে আলোচিত বিতর্ক ছিল বৃহৎ ওমেগা-৩ ক্লিনিক্যাল ট্রায়ালগুলোর ফলাফল [১, ৬]। REDUCE-IT ট্রায়ালে ৮,১৭৯ জন উচ্চ ট্রাইগ্লিসারাইডযুক্ত হৃদরোগীকে দৈনিক ৪ গ্রাম অত্যন্ত বিশুদ্ধ ফার্মাসিউটিক্যাল আইকোসাপেন্ট ইথাইল (EPA ইথাইল এস্টার) বনাম মিনারেল অয়েল প্লাসিবো প্রয়োগ করে দীর্ঘকাল পরীক্ষা করা হয় [৬]।'
            ),
            l(
              'REDUCE-IT demonstrated an extraordinary 25% relative risk reduction in the primary composite endpoint (cardiovascular death, nonfatal myocardial infarction, nonfatal stroke, coronary revascularization, or unstable angina) and a 20% reduction in cardiovascular death alone [6]. Conversely, the subsequently published STRENGTH trial, which evaluated 4 grams/day of a carboxylic acid formulation containing both EPA and DHA in a corn oil placebo, was terminated early for clinical futility, showing no significant cardiovascular benefit [1, 6].',
              'REDUCE-IT ট্রায়ালে হৃদরোগে আক্রান্ত হওয়া, স্ট্রোক বা হার্ট অ্যাটাকের ঝুঁকি নাটকীয়ভাবে ২৫% হ্রাস পায় এবং হৃদরোগে মৃত্যুর ঝুঁকি ২০% কমে যায় [৬]! অপরদিকে পরবর্তী STRENGTH ট্রায়ালে যেখানে ভুট্টার তেলের বিপরীতে EPA ও DHA-র মিশ্রণ ব্যবহার করা হয়েছিল, সেখানে কোনো উল্লেখযোগ্য সুরক্ষা না পাওয়ায় ট্রায়ালটি সময়ের আগেই বন্ধ করে দেওয়া হয় [১, ৬]।'
            ),
            l(
              'Mechanistic biophysical investigations provide compelling explanations for these discordant findings [1, 6]. While DHA raises LDL-C slightly (by 5–10%) through enhanced conversion of VLDL to LDL, pure EPA lowers triglycerides without elevating LDL-C [1, 6]. At the membrane level, EPA incorporates into endothelial cell membranes, where it prevents cholesterol crystalline domain formation and protects the membrane from free-radical lipid peroxidation far more effectively than DHA [1, 6].',
              'আণবিক ও মেমব্রেন গবেষণায় এই ভিন্ন ফলের নিখুঁত ব্যাখ্যা পাওয়া গেছে [১, ৬]। DHA যেখানে VLDL থেকে রূপান্তরের কারণে রক্তের ক্ষতিকর LDL সামান্য বৃদ্ধি করতে পারে, সেখানে বিশুদ্ধ EPA কোলেস্টেরল না বাড়িয়েই ট্রাইগ্লিসারাইড কমায় [১, ৬]। তাছাড়া কোষপর্দায় EPA যুক্ত হলে তা কোলেস্টেরলের মারাত্মক ক্রিস্টাল জমাট বাঁধতে দেয় না এবং মেমব্রেনের লিপিড পারঅক্সিডেশন বন্ধ করতে DHA-র চেয়ে অনেক বেশি কার্যকর ভূমিকা পালন করে [১, ৬]।'
            ),
            l(
              'Furthermore, circulating unesterified EPA stabilizes fibrous caps on vulnerable atherosclerotic plaques, suppresses matrix metalloproteinase (MMP-9) expression, and inhibits monocyte chemoattractant protein-1 (MCP-1) [1, 6]. These pleiotropic vascular benefits occur independently of baseline triglyceride levels, confirming that pharmaceutical EPA acts primarily as a direct anti-atherosclerotic, plaque-stabilizing biologic rather than a simple triglyceride-lowering agent [1, 6].',
              'তদুপরি রক্তে মুক্ত EPA ধমনীর ভঙ্গুর প্লাকের ওপর আঁশযুক্ত সুরক্ষাকারী ক্যাপকে মজবুত করে, টিস্যু ধ্বংসকারী MMP-9 এনজাইম দমন করে এবং প্লাক ফেটে গিয়ে হঠাৎ রক্ত জমাট বাঁধা রোধ করে [১, ৬]। এই বহুমুখী কার্ডিওভাসকুলার সুরক্ষা ট্রাইগ্লিসারাইড কমার বাইরেও সরাসরি কাজ করে, যা প্রমাণ করে যে বিশুদ্ধ EPA কেবল চর্বি কমানোর ওষুধ নয়, বরং এটি রক্তনালীর প্রাচীর সুরক্ষাকারী এক অনন্য জৈব ওষুধ [১, ৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Nutrigenomics of the FADS Gene Cluster & Ancestral Adaptation', 'FADS জিন ক্লাস্টারের নিউট্রিজেনোমিক্স ও পূর্বপুরুষের অভিযোজন'),
          paragraphs: [
            l(
              'The capacity of humans to synthesize long-chain polyunsaturated fatty acids from plant precursors is governed genetically by polymorphisms within the Fatty Acid Desaturase (FADS) gene cluster on chromosome 11 (11q12.2), encompassing FADS1, FADS2, and FADS3 [1, 3]. Haplotype tagging reveals two major ancient haplotype blocks: the "derived" haplotype (associated with high desaturase activity) and the "ancestral" haplotype (associated with low desaturase activity) [1, 3].',
              'উদ্ভিজ্জ উৎস থেকে দীর্ঘ-শিকল ফ্যাটি অ্যাসিড তৈরির মানুষের নিজস্ব ক্ষমতা ক্রোমোজোম ১১-এ অবস্থিত ফ্যাটি অ্যাসিড ডিস্যাচুরেজ (FADS) জিন ক্লাস্টার (FADS1, FADS2 ও FADS3) দ্বারা নিয়ন্ত্রিত হয় [১, ৩]। জেনেটিক গবেষণায় দুটি প্রধান প্রাচীন হ্যাপ্লোটাইপ পাওয়া গেছে: একটি হলো উচ্চ এনজাইম সক্রিয়তার "ডিরাইভড" হ্যাপ্লোটাইপ এবং অপরটি হলো নিম্ন এনজাইম সক্রিয়তার "অ্যানসেস্ট্রাল" হ্যাপ্লোটাইপ [১, ৩]।'
            ),
            l(
              'The derived haplotype contains specific single nucleotide polymorphisms (such as FADS1 rs174537 and rs174546) that upregulate FADS1/2 transcription, accelerating the conversion of linoleic acid to arachidonic acid [1, 3]. Evolutionary geneticists discovered that positive selection drove the derived haplotype to near-fixation (>95%) in African populations, likely an evolutionary adaptation to facilitate endogenous synthesis of neural ARA and DHA in inland plant-based agricultural ecosystems [1, 3].',
              'ডিরাইভড হ্যাপ্লোটাইপে নির্দিষ্ট পলিমরফিজম (FADS1 rs174537) থাকে যা এনজাইম উৎপাদন বাড়িয়ে দেয় এবং দ্রুত লিনোলিক অ্যাসিডকে অ্যারাকিডোনিক অ্যাসিডে রূপান্তর করে [১, ৩]। আফ্রিকান জনগোষ্ঠীর ৯৫% এর বেশি মানুষের মধ্যে এই ভ্যারিয়েন্ট ইতিবাচক প্রাকৃতিক নির্বাচনের মাধ্যমে টিকে ছিল, যা স্থলভাগে উদ্ভিজ্জ খাদ্য থেকে মস্তিষ্কের জন্য প্রয়োজনীয় চর্বি তৈরিতে সাহায্য করত [১, ৩]।'
            ),
            l(
              'In stark contrast, indigenous Greenland Inuit populations, who subsisted for millennia on a marine diet rich in preformed seal and whale EPA and DHA, exhibit strong positive selection for genetic variants that suppress FADS1/2 desaturase activity [1, 3]. In Inuits, high-activity desaturase alleles would have resulted in excessive, fatal eicosanoid and docosanoid synthesis, demonstrating intense gene-diet co-evolution [1, 3].',
              'বিপরীতে গ্রিনল্যান্ডের আদিবাসী ইনুইট জনগোষ্ঠীর মানুষ যারা হাজার বছর ধরে সিল ও তিমির চর্বি খেয়ে প্রচুর সরাসরি EPA ও DHA পেয়ে এসেছে, তাদের জিনে FADS এনজাইমের কার্যকারিতা কমিয়ে রাখার বিশেষ ভ্যারিয়েন্ট নির্বাচিত হয়েছে [১, ৩]। ইনুইটদের দেহে উচ্চ সক্রিয়তার জিন থাকলে অতিরিক্ত চর্বি রূপান্তরের বিষক্রিয়ায় মানুষ মারা যেত, যা খাদ্য ও জিনের এক অনন্য অভিযোজন [১, ৩]।'
            ),
            l(
              'In contemporary precision nutrition, individuals carrying the derived FADS haplotype who consume modernized high-linoleic diets convert vast amounts of dietary LA into pro-inflammatory arachidonic acid, experiencing significantly higher baseline inflammatory biomarkers and elevated cardiovascular risks [1, 3]. Genotyping the FADS locus permits personalized dietary lipid prescriptions: individuals with high-activity FADS alleles urgently require strict limitation of refined omega-6 seed oils, while carriers of ancestral low-activity alleles require direct supplemental intake of preformed marine EPA/DHA [1, 3].',
              'আধুনিক চিকিৎসায় যাদের দেহে উচ্চ-সক্রিয়তার FADS জিন রয়েছে তারা যখন আধুনিক প্রক্রিয়াজাত ওমেগা-৬ তেল খায়, তখন তাদের দেহে প্রচুর প্রদাহসৃষ্টিকারী অ্যারাকিডোনিক অ্যাসিড জমে হৃদরোগের ঝুঁকি বহু গুণ বেড়ে যায় [১, ৩]। জেনেটিক পরীক্ষার মাধ্যমে এখন ব্যক্তিভেদে নির্ভুল খাদ্য পরামর্শ দেওয়া সম্ভব: উচ্চ সক্রিয়তার অধিকারীদের জন্য ওমেগা-৬ তেলের কঠোর সীমাবদ্ধতা জরুরি, আর নিম্ন সক্রিয়তার ব্যক্তিদের সরাসরি সামুদ্রিক মাছের তেল গ্রহণ বাধ্যতামূলক [১, ৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Frontier Research Horizons: Oxylipins & The Resolution Pharmacopeia', 'অগ্রবর্তী গবেষণা দিগন্ত: অক্সিলিপিন ও নিরাময় ফার্মাকোলজি'),
          paragraphs: [
            l(
              'The frontier of lipid biochemistry is expanding beyond classical prostanoids into the complex metabolome of oxylipins—oxygenated polyunsaturated fatty acid metabolites generated via non-enzymatic free-radical autoxidation and enzymatic pathways involving cytochrome P450 epoxygenases (CYP2J2, CYP2C8) [1, 5]. Epoxyeicosatrienoic acids (EETs), synthesized from arachidonic acid via CYP epoxygenases, function as endothelium-derived hyperpolarizing factors (EDHFs) that dilate coronary resistance vessels, suppress vascular inflammation, and inhibit platelet aggregation [1, 4].',
              'লিপিড প্রাণরসায়নের সর্বাধুনিক দিগন্ত এখন ক্লাসিক্যাল প্রোস্টাগ্ল্যান্ডিন পেরিয়ে বিস্তৃত হয়েছে "অক্সিলিপিন" নামক বিশাল বিপাকীয় জগতে, যা সাইটোক্রোম P450 এনজাইম এবং ফ্রি-র্যাডিকেল জারণের মাধ্যমে তৈরি হয় [১, ৫]। সাইটোক্রোম দ্বারা উৎপন্ন Epoxyeicosatrienoic acids (EETs) রক্তনালী প্রসারিত করে, ধমনীর পেশি শিথিল রাখে এবং রক্ত জমাট বাঁধা প্রতিহত করে [১, ৪]।'
            ),
            l(
              'However, soluble Epoxide Hydrolase (sEH) rapidly hydrolyzes cardioprotective EETs into biologically inactive dihydroxyeicosatrienoic acids (DHETs) [1, 4]. Pharmaceutical and nutritional pipelines are aggressively developing dual strategies: combining dietary omega-3 enrichment with small-molecule sEH inhibitors to sustain endogenous EET and SPM half-lives, creating powerful synergistic protection against diabetic nephropathy and hypertensive cardiac remodeling [1, 4, 5].',
              'কিন্তু মানবদেহের সলিউবল এপক্সাইড হাইড্রোলেজ (sEH) এনজাইম দ্রুত এই সুরক্ষাকারী EET-কে নিষ্ক্রিয় করে ফেলে [১, ৪]। আধুনিক চিকিৎসা বিজ্ঞানে ওমেগা-৩ খাদ্য গ্রহণের পাশাপাশি এই sEH এনজাইমকে ওষুধ দ্বারা ব্লক করার গবেষণা চলছে, যা ডায়াবেটিসের কিডনি রোগ ও উচ্চ রক্তচাপের চিকিৎসায় এক বৈপ্লবিক দিগন্ত উন্মোচন করতে পারে [১, ৪, ৫]।'
            ),
            l(
              'Simultaneously, the emerging concept of "Resolution Pharmacology" seeks to synthesize metabolically stabilized SPM mimetics (such as 15-epi-lipoxin A4 analogs and benzo-resolvins) resistant to rapid enzymatic dehydrogenation [5]. Unlike classical non-steroidal anti-inflammatory drugs (NSAIDs) or corticosteroids that compromise host antimicrobial defenses by shutting off all eicosanoid cascades, SPM agonists actively accelerate tissue regeneration and clear infections without causing immunosuppression [1, 5].',
              'একইসাথে আধুনিক ওষুধ বিজ্ঞানে কৃত্রিমভাবে স্থিতিশীল "SPM অ্যানালগ" তৈরির কাজ চলছে যা সহজে এনজাইম দ্বারা নষ্ট হবে না [৫]। সাধারণ ব্যথানাশক ওষুধ (যেমন আইবুপ্রোফেন বা স্টেরয়েড) যেখানে দেহের স্বাভাবিক রোগপ্রতিরোধ ক্ষমতাকে জোরপূর্বক স্তব্ধ করে দেয়, সেখানে SPM ভিত্তিক ওষুধ ক্ষতিকর জীবাণু ধ্বংসের ক্ষমতা অটুট রেখেই দ্রুত টিস্যুর ক্ষত নিরাময় করে [১, ৫]।'
            ),
            l(
              'Integrating precision lipidomics, FADS genomic profiling, and targeted resolution therapeutics represents the future of cardiovascular and metabolic dietetics [1, 3, 5]. By understanding dietary lipids at quantum stereochemical and biophysical resolution, clinicians can harness the healing potential of fatty acids to prevent and reverse chronic degenerative disease [1, 4, 5].',
              'লিপিডোমিক্স রক্ত পরীক্ষা, FADS জিন পরীক্ষা এবং নির্দিষ্ট নিরাময়কারী পুষ্টি সমন্বয়ের মাধ্যমেই গড়ে উঠছে আধুনিক পার্সোনালাইজড ডায়েটেটিক্স [১, ৩, ৫]। কোয়ান্টাম স্টেরিওরসায়ন ও মেমব্রেন বায়োফিজিক্সের আলোকে চর্বির রহস্য উন্মোচনের মাধ্যমেই আধুনিক চিকিৎসকরা দীর্ঘস্থায়ী জটিল রোগ প্রতিরোধ ও নিরাময়ে সফল হচ্ছেন [১, ৪, ৫]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential mechanistic pathway of dietary lipid metabolism: gastric and pancreatic lipase emulsification into mixed micelles, enterocyte uptake and chylomicron packaging, systemic delivery, and desaturase-mediated conversion into pro-inflammatory 2-series eicosanoids versus anti-inflammatory 3-series prostanoids and specialized pro-resolving mediators (resolvins).',
      'খাদ্য লিপিড বিপাকের ধারাবাহিক জৈব রাসায়নিক গতিপথ: পাকস্থলী ও অগ্ন্যাশয় লাইপেজ দ্বারা ইমালসিফিকেশন ও মাইসেলি গঠন, এন্টারোসাইটে শোষণ ও কাইলোমাইক্রন প্যাকেজিং, সংবহনতন্ত্রে পরিবহন এবং ডেল্টা-ডিস্যাচুরেজ এনজাইমের মাধ্যমে প্রদাহসৃষ্টিকারী ২-সিরিজ আইকোসানয়েড বনাম প্রদাহ প্রশমনকারী ৩-সিরিজ ও রিজলভিন রূপান্তর।'
    ),
    steps: [
      l(
        'Step 1: Dietary triacylglycerols and phospholipids are hydrolyzed by pancreatic lipase and colipase into 2-monoacylglycerols and free fatty acids, forming bile salt mixed micelles.',
        'ধাপ ১: খাদ্যের ট্রাইগ্লিসারাইড ও ফসফোলিপিড পিত্তলবণ ও লাইপেজের সহায়তায় ২-মনোগ্লিসারাইড এবং মুক্ত ফ্যাটি অ্যাসিডের মাইসেলিতে পরিণত হয়।'
      ),
      l(
        'Step 2: Enterocytes re-esterify fatty acids into triacylglycerols, assembling ApoB-48 chylomicrons for lymphatic secretion and peripheral capillary lipolysis by Lipoprotein Lipase (LPL).',
        'ধাপ ২: অন্ত্রের এন্টারোসাইট ফ্যাটি অ্যাসিডকে পুনরায় ট্রাইগ্লিসারাইডে রূপান্তর করে এপো-বি-৪৮ কাইলোমাইক্রনে আবদ্ধ করে লসিকা নালীতে নিঃসরণ করে।'
      ),
      l(
        'Step 3: Endothelial and hepatic uptake delivers fatty acids to cell membranes, where they incorporate into the sn-2 position of phospholipid bilayers, dictating membrane fluidity.',
        'ধাপ ৩: রক্তনালী ও যকৃতের মাধ্যমে ফ্যাটি অ্যাসিড কোষপর্দার ফসফোলিপিডের sn-2 অবস্থানে প্রবেশ করে মেমব্রেনের তারল্য ও স্থিতিস্থাপকতা নির্ধারণ করে।'
      ),
      l(
        'Step 4: Upon inflammatory stimuli, phospholipase A2 liberates membrane PUFAs, feeding competitive COX and LOX cascades that produce pro-thrombotic TXA2 from arachidonic acid or cardioprotective TXA3 and Resolvin E1/D1 from EPA/DHA.',
        'ধাপ ৪: প্রদাহের সময় ফসফোলাইপেজ A2 মেমব্রেন থেকে PUFA মুক্ত করে; অ্যারাকিডোনিক অ্যাসিড থেকে রক্ত জমাটকারী TXA2 তৈরি হয়, আর EPA/DHA থেকে সুরক্ষাকারী TXA3 এবং নিরাময়কারী রিজলভিন E1/D1 তৈরি হয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 52-year-old patient with established coronary artery disease and elevated triglycerides (320 mg/dL) receives high-dose prescription icosapent ethyl (4 g/day). Which molecular mechanism best explains how eicosapentaenoic acid (EPA) provides cardiovascular risk reduction independently of its triglyceride-lowering effects?',
      'হৃদরোগ ও উচ্চ ট্রাইগ্লিসারাইড (৩২০ মিগ্রা/ডেসিলিটার) বিশিষ্ট একজন ৫২ বছর বয়সী রোগীকে দৈনিক ৪ গ্রাম বিশুদ্ধ আইকোসাপেন্ট ইথাইল (EPA) দেওয়া হলো। ট্রাইগ্লিসারাইড কমানোর বাইরে কোন আণবিক প্রক্রিয়ার মাধ্যমে EPA সরাসরি অতিরিক্ত কার্ডিওভাসকুলার সুরক্ষা নিশ্চিত করে?'
    ),
    options: [
      l(
        'EPA completely inhibits HMG-CoA reductase in hepatocytes, shutting down de novo cholesterol synthesis identically to high-intensity statin therapy.',
        'EPA যকৃতের HMG-CoA রিডাক্টেজ এনজাইমকে স্ট্যাটিনের মতো পুরোপুরি বন্ধ করে কোলেস্টেরল তৈরি থামিয়ে দেয়।'
      ),
      l(
        'EPA competitively displaces arachidonic acid in membrane phospholipids, shifting lipid mediator synthesis toward 3-series prostanoids and specialized pro-resolving mediators (RvE1) while preventing cholesterol crystalline domain formation.',
        'EPA কোষপর্দায় অ্যারাকিডোনিক অ্যাসিডকে প্রতিস্থাপন করে ৩-সিরিজের প্রোস্টানয়েড ও নিরাময়কারী রিজলভিন (RvE1) তৈরি বাড়ায় এবং মেমব্রেনে কোলেস্টেরলের বিপজ্জনক ক্রিস্টাল জমতে বাধা দেয়।'
      ),
      l(
        'EPA upregulates endothelial CETP activity, accelerating the transfer of cholesteryl esters from LDL into large HDL particles.',
        'EPA রক্তনালীতে CETP এনজাইম বাড়িয়ে LDL থেকে কোলেস্টেরিল এস্টার ভালো HDL-এ সরিয়ে দেয়।'
      ),
      l(
        'EPA irreversibly acylates the beta-subunit of Pancreatic Lipase, halting all intestinal lipid emulsification and micelle formation.',
        'EPA অগ্ন্যাশয়ের লাইপেজ এনজাইমকে স্থায়ীভাবে নিষ্ক্রিয় করে চর্বি হজম ও শোষণ সম্পূর্ণ বন্ধ করে দেয়।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'EPA integrates into cellular membrane phospholipids, competitively displacing arachidonic acid (ARA) at the sn-2 position. Upon liberation, EPA yields non-aggregatory 3-series prostanoids (TXA3, PGI3) and substrate for 18R-HEPE and Resolvin E1 (RvE1), which actively terminates vascular inflammation and leukocyte infiltration. In biophysical studies, EPA intercalates between phospholipid acyl chains to prevent the precipitation of toxic cholesterol crystalline domains within vulnerable atherosclerotic plaques, stabilizing the fibrous cap against rupture [1, 5, 6].',
      'EPA কোষপর্দার ফসফোলিপিডে ঢুকে অ্যারাকিডোনিক অ্যাসিডের জায়গা দখল করে। এর ফলে রক্ত জমাট বাঁধানোর বদলে ৩-সিরিজের সুরক্ষামূলক প্রোস্টানয়েড এবং প্রদাহ নিরাময়কারী Resolvin E1 তৈরি হয় যা ধমনীর প্রদাহ বন্ধ করে। তাছাড়া বায়োফিজিক্যাল গবেষণায় প্রমাণিত যে EPA মেমব্রেনে কোলেস্টেরলের সূক্ষ্ম ক্রিস্টাল জমাট বাঁধতে বাধা দিয়ে প্লাক ফেটে যাওয়া প্রতিহত করে [১, ৫, ৬]।'
    ),
  },
}
