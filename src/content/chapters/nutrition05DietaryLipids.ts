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
      'Distinguish the chemical conformations, melting thermodynamics, and membrane packing characteristics of saturated (SFA), cis-monounsaturated (MUFA), cis-polyunsaturated (PUFA), and industrial trans fatty acids.',
      'সম্পৃক্ত (SFA), সিস-মনো-অসম্পৃক্ত (MUFA), সিস-পলি-অসম্পৃক্ত (PUFA) এবং শিল্পজাত ট্রান্স ফ্যাটি অ্যাসিডের রাসায়নিক গঠন, গলনাঙ্কের তাপগতিবিজ্ঞান এবং কোষপর্দার বিন্যাস পার্থক্য করতে পারা।'
    ),
    l(
      'Map the competitive enzymatic elongation and desaturation pathways (FADS1, FADS2, ELOVL5) converting linoleic acid (LA) to arachidonic acid (ARA) versus alpha-linolenic acid (ALA) to EPA and DHA.',
      'লিনোলিক অ্যাসিড (LA) থেকে অ্যারাকিডোনিক অ্যাসিড (ARA) এবং আলফা-লিনোলেনিক অ্যাসিড (ALA) থেকে EPA ও DHA তৈরিতে FADS1, FADS2 ও ELOVL5 এনজাইমের প্রতিযোগিতামূলক রূপান্তর পথ বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Evaluate the cardiovascular mechanisms of industrial trans fatty acids, including CETP stimulation, LDL receptor suppression, endothelial nitric oxide synthase uncoupling, and vascular inflammation.',
      'শিল্পজাত ট্রান্স ফ্যাটের কার্ডিওভাসকুলার ক্ষতিসাধন প্রক্রিয়া (CETP সক্রিয়করণ, LDL রিসেপ্টর দমন, এন্ডোথেলিয়াল নাইট্রিক অক্সাইড সিন্থেজ নিষ্ক্রিয়করণ ও ধমনীর প্রদাহ) মূল্যায়ন করতে পারা।'
    ),
    l(
      'Contrast the physiological actions of pro-inflammatory 2-series prostanoids and 4-series leukotrienes against specialized pro-resolving mediators (resolvins, protectins, maresins) derived from EPA and DHA.',
      'EPA ও DHA থেকে উৎপন্ন প্রদাহ প্রশমনকারী বিশেষ মধ্যস্থতাকারী (রিজলভিন, প্রোটেকটিন, মারিসিন) বনাম অ্যারাকিডোনিক অ্যাসিড থেকে সৃষ্ট প্রদাহবর্ধক আইকোসানয়েডের কার্যপদ্ধতি তুলনা করতে পারা।'
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
      { id: 'sec-intro', label: l('1. Chemical Architecture & Thermodynamics of Dietary Lipids', '১. খাদ্য লিপিডের রাসায়নিক গঠন ও তাপগতিবিজ্ঞান'), sectionId: 'introduction' },
      { id: 'sec-trans-fats', label: l('2. Cis vs Trans Isomerism & Industrial Hydrogenation', '২. সিস বনাম ট্রান্স আইসোমারিজম ও শিল্পজাত হাইড্রোজিনেশন'), sectionId: 'structure' },
      { id: 'sec-pufa-pathway', label: l('3. Essential Fatty Acids & Eicosanoid Biosynthesis', '৩. অত্যাবশ্যক ফ্যাটি অ্যাসিড ও আইকোসানয়েড জৈব-সংশ্লেষণ'), sectionId: 'mechanism' },
      { id: 'sec-omega-ratio', label: l('4. Omega-6/3 Ratios, Resolvins & Membrane Biophysics', '৪. ওমেগা-৬/৩ অনুপাত, রিজলভিন ও মেমব্রেন বায়োফিজিক্স'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Clinical Lipid Assessment & Quantitative Calculations', '৫. ক্লিনিক্যাল লিপিড মূল্যায়ন ও গাণিতিক হিসাব'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Saturated Fatty Acid (SFA)', 'সম্পৃক্ত ফ্যাটি অ্যাসিড (SFA)'),
        definition: l(
          'An aliphatic carboxylic acid whose hydrocarbon chain contains no carbon-carbon double bonds, adopting a fully extended linear zigzag conformation that packs densely into biological membranes and raises melting temperatures.',
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
        term: l('Cis-Monounsaturated Fatty Acid (MUFA)', 'সিস-মনো-অসম্পৃক্ত ফ্যাটি অ্যাসিড (MUFA)'),
        definition: l(
          'A fatty acid containing a single carbon-carbon double bond in the cis geometry (such as oleic acid, 18:1c9), introducing a 30-degree rigid kink that preserves membrane fluidity while resisting oxidative rancidity.',
          'সিস জ্যামিতিতে একটিমাত্র দ্বি-বন্ধনযুক্ত ফ্যাটি অ্যাসিড (যেমন ওলিক অ্যাসিড, ১৮:১c৯), যা ৩০ ডিগ্রির বাঁক তৈরি করে কোষপর্দার নমনীয়তা অক্ষুণ্ণ রাখে এবং দ্রুত জারণ প্রতিরোধ করে।'
        ),
      },
      {
        term: l('Delta-6 Desaturase (FADS2)', 'ডেল্টা-৬ ডিস্যাচুরেজ (FADS2)'),
        definition: l(
          'The shared, rate-limiting microsomal enzyme that introduces a double bond at the sixth carbon from the carboxyl terminus in both omega-6 (linoleic acid) and omega-3 (alpha-linolenic acid) cascades.',
          'মাইক্রোজোমের প্রধান গতি-নিয়ামক এনজাইম যা ওমেগা-৬ (লিনোলিক অ্যাসিড) এবং ওমেগা-৩ (আলফা-লিনোলেনিক অ্যাসিড) উভয়ের কার্বক্সিল প্রান্ত থেকে ষষ্ঠ কার্বনে নতুন দ্বি-বন্ধন যুক্ত করে।'
        ),
      },
      {
        term: l('Specialized Pro-resolving Mediators (SPMs)', 'প্রদাহ প্রশমনকারী বিশেষ মধ্যস্থতাকারী (SPM)'),
        definition: l(
          'Enzymatic oxygenated metabolites of EPA and DHA (resolvins, protectins, maresins) that actively terminate acute inflammation, clear apoptotic leukocytes via non-phlogistic efferocytosis, and promote mucosal repair.',
          'EPA ও DHA থেকে উৎপাদিত অক্সিজেনযুক্ত জৈব উপাদান (রিজলভিন, প্রোটেকটিন, মারিসিন), যা তীব্র প্রদাহ থামায়, ম্যাক্রোফেজের মাধ্যমে মৃত শ্বেতকণিকা অপসারণ করে এবং টিস্যু নিরাময়কে ত্বরান্বিত করে।'
        ),
      },
      {
        term: l('Omega-3 Index', 'ওমেগা-৩ ইনডেক্স'),
        definition: l(
          'The percentage of eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) relative to total fatty acids in red blood cell membranes, serving as an objective biomarker of tissue omega-3 status and cardiovascular risk.',
          'লোহিত রক্তকণিকার ঝিল্লির মোট ফ্যাটি অ্যাসিডে EPA এবং DHA-র শতকরা হার, যা দেহের সামগ্রিক ওমেগা-৩ স্থিতি এবং কার্ডিওভাসকুলার ঝুঁকির নির্ভরযোগ্য পরিমাপক।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating the Dietary Omega-6 to Omega-3 Ratio', 'খাদ্যতালিকায় ওমেগা-৬ ও ওমেগা-৩ অনুপাত নির্ণয়'),
        steps: [
          l(
            'Step 1: Quantify daily intake of linoleic acid (LA) and arachidonic acid (ARA) in grams. For a typical standard Western diet rich in refined soybean and corn oils, measured dietary n-6 intake is 16.0 g/day.',
            'ধাপ ১: দৈনন্দিন লিনোলিক অ্যাসিড (LA) ও অ্যারাকিডোনিক অ্যাসিডের (ARA) পরিমাণ নির্ধারণ করুন। প্রক্রিয়াজাত সয়াবিন ও ভুট্টার তেলে সমৃদ্ধ খাদ্যাভ্যাসে n-6 গ্রহণ প্রায় ১৬.০ গ্রাম/দিন।'
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
          'An elevated ratio of 13.3:1 creates heavy enzymatic substrate competition favoring pro-inflammatory 2-series prostaglandins (PGE2) and 4-series leukotrienes (LTB4) over anti-inflammatory resolvins, warranting dietary rebalancing via reduced refined seed oils and increased cold-water fish intake.',
          '১৩.৩:১ এর মতো উচ্চ অনুপাত এনজাইমের রূপান্তর পথে ওমেগা-৬ কে প্রাধান্য দেয়, যা প্রদাহসৃষ্টিকারী PGE2 ও LTB4 বৃদ্ধি করে এবং অ্যান্টি-ইনফ্ল্যামেটরি রিজলভিন কমিয়ে দেয়; তাই প্রক্রিয়াজাত তেলের বদলে সামুদ্রিক মাছ বৃদ্ধির ক্লিনিক্যাল নির্দেশনা দেওয়া হয়।'
        ),
      },
      {
        title: l('Predicting Serum LDL-C Shifts from SFA to PUFA Substitution (Keys Equation)', 'SFA-এর বদলে PUFA গ্রহণে সিরাম LDL-C পরিবর্তনের পূর্বাভাস (কীজ সমীকরণ)'),
        steps: [
          l(
            'Step 1: Understand the Mensink-Katan / Keys predictive regression equation: ΔLDL-C (mg/dL) = 1.28 × Δ%SFA - 0.55 × Δ%PUFA, where Δ% represents the percentage of total daily energy replaced.',
            'ধাপ ১: মেনসিঙ্ক-কাটান / কীজ পূর্বাভাস সমীকরণটি বুঝুন: ΔLDL-C (মিগ্রা/ডেসিলি) = ১.২৮ × Δ%SFA - ০.৫৫ × Δ%PUFA, যেখানে Δ% হলো মোট দৈনিক ক্যালোরিতে খাদ্য উপাদানের শতকরা পরিবর্তনের হার।'
          ),
          l(
            'Step 2: Define the clinical scenario: A patient consuming 2,000 kcal/day reduces saturated fat from 15% of energy to 7% of energy (Δ%SFA = -8%) and replaces it isocalorically with polyunsaturated fats (Δ%PUFA = +8%).',
            'ধাপ ২: ক্লিনিক্যাল পরিস্থিতি সংজ্ঞায়িত করুন: দৈনিক ২,০০০ কিলোক্যালরি গ্রহণকারী একজন রোগী সম্পৃক্ত চর্বি ১৫% থেকে কমিয়ে ৭% করেন (Δ%SFA = -৮%) এবং সমপরিমাণ ক্যালোরি পলি-অসম্পৃক্ত চর্বি দ্বারা প্রতিস্থাপন করেন (Δ%PUFA = +৮%)।'
          ),
          l(
            'Step 3: Calculate the predicted change: ΔLDL-C = (1.28 × -8) - (0.55 × 8) = -10.24 - 4.40 = -14.64 mg/dL reduction in circulating serum LDL cholesterol.',
            'ধাপ ৩: প্রত্যাশিত পরিবর্তন হিসাব করুন: ΔLDL-C = (১.২৮ × -৮) - (০.৫৫ × ৮) = -১০.২৪ - ৪.৪০ = -১৪.৬৪ মিগ্রা/ডেসিলি সিরাম LDL কোলেস্টেরল হ্রাস।'
          ),
        ],
        conclusion: l(
          'Isocalorically substituting saturated fatty acids with polyunsaturated fatty acids produces a predictable ~15 mg/dL decrease in atherogenic LDL cholesterol by upregulating hepatic LDL receptor clearance and suppressing ApoB synthesis.',
          'সম্পৃক্ত চর্বির বদলে পলি-অসম্পৃক্ত চর্বি গ্রহণ করলে যকৃতের LDL রিসেপ্টর সক্রিয় হয় এবং এপো-বি উৎপাদন হ্রাস পায়, যার ফলে রক্তে ক্ষতিকর LDL কোলেস্টেরল প্রায় ১৫ মিগ্রা/ডেসিলি কমে যায়।'
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
      {
        question: l(
          'How do polyunsaturated fatty acids molecularly downregulate hepatic de novo lipogenesis compared to saturated fats?',
          'সম্পৃক্ত চর্বির তুলনায় পলি-অসম্পৃক্ত ফ্যাটি অ্যাসিড কীভাবে আণবিক স্তরে যকৃতের নতুন চর্বি সংশ্লেষণ (de novo lipogenesis) দমন করে?'
        ),
        answer: l(
          'PUFAs accelerate the proteolytic degradation of mature SREBP-1c transcription factors and suppress SREBP-1c mRNA transcription, repressing fatty acid synthase (FASN) and stearoyl-CoA desaturase-1 (SCD1), whereas SFAs allow unabated SREBP-1c nuclear translocation.',
          'PUFA যকৃতে SREBP-1c ট্রান্সক্রিপশন ফ্যাক্টরের ভাঙন ত্বরান্বিত করে এবং এর জিন প্রকাশ দমন করে ফ্যাটি অ্যাসিড সিন্থেজ (FASN) নিষ্ক্রিয় করে; অপরপক্ষে সম্পৃক্ত ফ্যাট SREBP-1c কে নিউক্লিয়াসে প্রবেশ করিয়ে চর্বি তৈরি বৃদ্ধি করে।'
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
              'To understand how fats function, visualize a brick wall versus a flexible curtain. Saturated fatty acids have straight, uniform carbon chains that stack tightly together like solid bricks, which is why butter and coconut oil remain solid or firm at room temperature. In contrast, unsaturated fats have bends or kinks in their chains, keeping them fluid and moving like olive oil in a bottle [4].',
              'চর্বির কাজ বোঝার জন্য একটি শক্ত ইটের দেয়াল বনাম একটি নমনীয় পর্দার কথা কল্পনা করুন। সম্পৃক্ত ফ্যাটি অ্যাসিডের কার্বন শিকলগুলো একেবারে সোজা হওয়ায় ইটের মতো খুব ঘন সন্নিবেশ তৈরি করে; এই কারণে মাখন বা নারকেল তেল সাধারণ তাপমাত্রায় জমে শক্ত থাকে। অন্যদিকে অসম্পৃক্ত চর্বির শিকল বাঁকানো হওয়ায় অণুগুলো সহজে নড়াচড়া করতে পারে, ঠিক যেমন বোতলের তরল অলিভ অয়েল [৪]।'
            ),
            l(
              'A standard dietary fatty acid consists of a hydrocarbon chain terminating in an acidic carboxyl group. The presence, number, and spatial geometry of carbon-carbon double bonds dictate whether a fat stays liquid or solid, how easily it oxidizes when heated, and how human cells incorporate it into lipid bilayers [1, 4].',
              'একটি আদর্শ খাদ্য ফ্যাটি অ্যাসিডের একদিকে থাকে হাইড্রোকার্বনের শিকল এবং অন্য প্রান্তে থাকে একটি কার্বক্সিল গ্রুপ। এই কার্বন শিকলে দ্বি-বন্ধনের সংখ্যা এবং জ্যামিতিক অবস্থানের ওপর ভিত্তি করেই চর্বি তরল হবে নাকি কঠিন হবে তা নির্ধারিত হয়, তাপে তা কত দ্রুত নষ্ট হবে তা নির্ভর করে এবং মানব কোষপর্দায় কীভাবে কাজ করবে তা নিয়ন্ত্রিত হয় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Saturation States & The Trans-Fat Hazard', 'ফ্যাটি অ্যাসিডের সম্পৃক্ততা ও ট্রান্স-ফ্যাটের বিপদ'),
          paragraphs: [
            l(
              'Fatty acids are categorized into saturated fatty acids (SFAs), monounsaturated fatty acids (MUFAs), and polyunsaturated fatty acids (PUFAs) based on how many hydrogen atoms their carbon backbone carries [4]. Saturated fats (found in whole milk, butter, cheese, beef tallow, and tropical oils) are completely saturated with hydrogen atoms, containing zero double bonds. Because their chains are straight, they pack tightly and resist oxidative breakdown during cooking [1, 4].',
              'হাইড্রোজেন পরমাণুর উপস্থিতির ভিত্তিতে ফ্যাটি অ্যাসিড তিন প্রকার: সম্পৃক্ত (SFA), মনো-অসম্পৃক্ত (MUFA) এবং পলি-অসম্পৃক্ত (PUFA) [৪]। সম্পৃক্ত চর্বিতে (দুধ, মাখন, পনির, লাল মাংস ও পাম তেলে বিদ্যমান) কোনো দ্বি-বন্ধন থাকে না; সম্পূর্ণ হাইড্রোজেন সমৃদ্ধ সোজা শিকলগুলো খুব ঘন সন্নিবেশ তৈরি করে যা স্বাভাবিক তাপমাত্রায় কঠিন থাকে এবং রান্নার তাপে সহজে জারিত হয় না [১, ৪]।'
            ),
            l(
              'Monounsaturated fats (abundant in extra-virgin olive oil, avocados, and almonds) possess a single double bond in a natural "cis" shape, introducing a gentle 30-degree bend. Polyunsaturated fats (found in walnuts, flaxseeds, and fish oils) contain two or more double bonds, introducing multiple kinks that make them extremely flexible and fluid [1, 4].',
              'মনো-অসম্পৃক্ত চর্বিতে (অলিভ অয়েল, অ্যাভোকাডো ও বাদামে বিদ্যমান) একটিমাত্র প্রাকৃতিক "সিস" দ্বি-বন্ধন থাকে যা শিকলটিতে প্রায় ৩০ ডিগ্রির মৃদু বাঁক তৈরি করে। পলি-অসম্পৃক্ত চর্বিতে (আখরোট, তিসি ও মাছের তেলে বিদ্যমান) একাধিক দ্বি-বন্ধন থাকে, যা এদের অত্যন্ত নমনীয় ও তরল রাখে [১, ৪]।'
            ),
            l(
              'Industrial trans fats were created through partial catalytic hydrogenation, an industrial process designed to turn cheap liquid vegetable oils into shelf-stable, semi-solid margarine and shortening [2]. During this chemical processing, hydrogen atoms end up on opposite sides of the double bond (trans configuration). This unbends the molecule, making it artificially rigid and straight. When ingested, trans fats lodge into cell membranes, damage vascular linings, elevate bad LDL cholesterol, and deplete protective HDL cholesterol [2, 4].',
              'তরল উদ্ভিজ্জ তেলকে সস্তা ও দীর্ঘস্থায়ী কঠিন মার্জারিন বা ডালডায় রূপান্তর করতে শিল্প কারখানায় আংশিক হাইড্রোজিনেশন আবিষ্কার করা হয়েছিল [২]। এই কৃত্রিম প্রক্রিয়ায় হাইড্রোজেন পরমাণুগুলো দ্বি-বন্ধনের বিপরীত পাশে বসে যায় (ট্রান্স কনফিগারেশন)। এটি অণুর স্বাভাবিক বাঁক সোজা করে তাকে অস্বাভাবিক রকম অনমনীয় করে তোলে। দেহে প্রবেশের পর এই ট্রান্স ফ্যাট রক্তনালীর প্রাচীর ধ্বংস করে, ক্ষতিকর LDL বাড়ায় এবং সুরক্ষাকারী HDL কমিয়ে দেয় [২, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Essential Fatty Acids: Omega-6 vs Omega-3', 'অত্যাবশ্যক ফ্যাটি অ্যাসিড: ওমেগা-৬ বনাম ওমেগা-৩'),
          paragraphs: [
            l(
              'Human metabolism can synthesize saturated and monounsaturated fatty acids from carbohydrates and excess calories. However, human cells lack the specific desaturase enzymes (delta-12 and delta-15) needed to insert double bonds close to the methyl end of a fatty acid chain [1, 4]. Consequently, two fatty acids are strictly essential: linoleic acid (an omega-6 fat) and alpha-linolenic acid (an omega-3 fat) [3, 4].',
              'মানবদেহ অতিরিক্ত শর্করা বা ক্যালোরি থেকে সম্পৃক্ত ও মনো-অসম্পৃক্ত চর্বি নিজে নিজেই তৈরি করতে পারে। কিন্তু মানুষের কোষে ডেল্টা-১২ ও ডেল্টা-১৫ ডিস্যাচুরেজ নামক এনজাইম না থাকায় আমরা মিথাইল প্রান্তের কাছে নতুন দ্বি-বন্ধন তৈরি করতে পারি না [১, ৪]। ফলে লিনোলিক অ্যাসিড (ওমেগা-৬) এবং আলফা-লিনোলেনিক অ্যাসিড (ওমেগা-৩) আমাদের জন্য অত্যাবশ্যক পুষ্টি উপাদান, যা খাদ্যের মাধ্যমে সরাসরি গ্রহণ করা আবশ্যক [৩, ৪]।'
            ),
            l(
              'Once consumed, linoleic acid and alpha-linolenic acid enter a shared cellular assembly line inside the endoplasmic reticulum [1]. They compete for the exact same enzyme systems to lengthen their carbon chains and insert new double bonds. If your diet floods this assembly line with massive amounts of omega-6 seed oils, the enzymes become entirely occupied, shutting down the conversion of plant omega-3 into active, health-protecting forms [3].',
              'খাদ্যের মাধ্যমে গৃহীত হওয়ার পর লিনোলিক অ্যাসিড ও আলফা-লিনোলেনিক অ্যাসিড এন্ডোপ্লাজমিক রেটিকুলামের একই জৈব রাসায়নিক কারখানায় প্রবেশ করে [১]। শিকল লম্বা করা এবং নতুন দ্বি-বন্ধন যোগ করার জন্য তারা একই এনজাইম নিয়ে কাড়াকাড়ি করে। খাদ্যে যদি প্রক্রিয়াজাত তেলের ওমেগা-৬ এর বন্যা বয়ে যায়, তবে এনজাইমগুলো ব্যস্ত হয়ে পড়ে এবং উদ্ভিজ্জ ওমেগা-৩ রূপান্তরের পথ বন্ধ হয়ে যায় [৩]।'
            ),
            l(
              'Omega-6 fatty acids convert downstream into arachidonic acid, which generates chemical messengers that trigger blood clotting, blood vessel constriction, and acute inflammation when the body fights an infection or heals a wound. In contrast, omega-3 fatty acids convert into EPA and DHA, generating molecules that soothe inflammation, relax blood vessels, and rebuild healthy brain and retinal tissue [1, 3].',
              'ওমেগা-৬ থেকে শেষ পর্যন্ত অ্যারাকিডোনিক অ্যাসিড তৈরি হয়, যা ক্ষত সারাতে বা জীবাণু মারতে রক্ত জমাট বাঁধা ও তীব্র প্রদাহ সৃষ্টি করে। অপরপক্ষে ওমেগা-৩ থেকে EPA এবং DHA তৈরি হয়, যা প্রদাহ প্রশমিত করে, রক্তনালী শিথিল রাখে এবং মস্তিষ্ক ও চোখের রেটিনা গঠনে প্রধান ভূমিকা পালন করে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Dietary Ratios, Membrane Fluidity & Health', 'খাদ্যের অনুপাত, কোষপর্দার নমনীয়তা ও স্বাস্থ্য'),
          paragraphs: [
            l(
              'Throughout human evolutionary history, ancestral diets provided a balanced omega-6 to omega-3 ratio near 1:1 to 2:1, obtained from wild game, coastal seafood, wild greens, and seeds [3]. Modern industrial food processing, dominated by refined soybean, corn, cottonseed, and sunflower oils, has distorted this ratio to approximately 15:1 or even 20:1 in modern Western diets [1, 3].',
              'মানবজাতির বিবর্তনীয় ইতিহাসে আদিম মানুষের খাদ্যাভ্যাসে ওমেগা-৬ ও ওমেগা-৩ অনুপাত ছিল প্রায় ১:১ থেকে ২:১, যা শিকারকৃত বন্য প্রাণী, সামুদ্রিক মাছ, সবুজ শাকসবজি ও বীজ থেকে আসত [৩]। কিন্তু আধুনিক প্রক্রিয়াজাত খাদ্যে সয়াবিন, ভুট্টা ও সূর্যমুখী তেলের ব্যাপক ব্যবহারের কারণে এই অনুপাত ১৫:১ এমনকি ২০:১ পর্যন্ত বিপজ্জনক উচ্চতায় পৌঁছেছে [১, ৩]।'
            ),
            l(
              'Every cell in your body is enclosed by a phospholipid bilayer whose physical flexibility depends directly on the fats you eat. If you consume predominantly saturated and trans fats, your cell membranes become rigid and sluggish, impairing hormone receptors like insulin receptors. When you consume rich amounts of omega-3 DHA and cis-monounsaturated oleic acid, cell membranes become supple and fluid, facilitating rapid nutrient transport and cellular signaling [1, 4].',
              'দেহের প্রতিটি কোষ একটি দ্বি-স্তরীয় ফসফোলিপিড ঝিল্লি দ্বারা আবৃত, যার নমনীয়তা আপনি কী খাচ্ছেন তার ওপর সরাসরি নির্ভর করে। আপনি যদি কেবল সম্পৃক্ত ফ্যাট ও ক্ষতিকর ট্রান্স ফ্যাট খান, কোষপর্দা শক্ত ও অনমনীয় হয়ে পড়ে, যার ফলে ইনসুলিন রিসেপ্টরের মতো সংবেদনশীল অংশগুলো সঠিকভাবে কাজ করতে পারে না। বিপরীতে ওমেগা-৩ ও অলিভ অয়েলের মতো স্বাস্থ্যকর চর্বি গ্রহণ করলে কোষপর্দা প্রাণবন্ত ও সচল থাকে [১, ৪]।'
            ),
            l(
              'An overwhelming excess of omega-6 over omega-3 locks the immune system into a persistent state of low-grade chronic inflammation, which accelerates plaque accumulation inside coronary arteries, aggravates joint stiffness, and impairs metabolic health [1, 3].',
              'ওমেগা-৩ এর তুলনায় অতিরিক্ত ওমেগা-৬ গ্রহণ রোগপ্রতিরোধ ব্যবস্থাকে দীর্ঘস্থায়ী মৃদু প্রদাহের ফাঁদে ফেলে দেয়, যা হৃদরোগের ধমনীতে চর্বি জমার গতি বাড়ায়, বাতের ব্যথা বাড়িয়ে দেয় এবং বিপাকীয় স্বাস্থ্যের ক্ষতি করে [১, ৩]।'
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
              'To eliminate trans fats, scrutinize packaged food labels for terms like "partially hydrogenated vegetable oil" or "vegetable shortening"—even if the nutrition label claims "0g trans fat" due to regulatory rounding loopholes. Choose cooking oils with high oxidative stability for hot cooking, and reserve cold-pressed unrefined oils for dressings [2, 4].',
              'ট্রান্স ফ্যাট পুরোপুরি বর্জন করতে প্যাকেটের গায়ে "আংশিক হাইড্রোজিনেটেড তেল" বা "ভেজিটেবল শর্টনিং" লেখা আছে কিনা তা সতর্কতার সাথে পরীক্ষা করুন। রান্নার ক্ষেত্রে উচ্চ তাপে স্থিতিশীল তেল ব্যবহার করুন এবং কাঁচা সালাদে এক্সট্রা ভার্জিন অলিভ অয়েলের মতো অপরিশোধিত তেল গ্রহণ করুন [২, ৪]।'
            ),
            l(
              'To ensure adequate omega-3 status without relying on weak plant conversions, consume at least two servings of low-mercury cold-water fatty fish (such as wild salmon, sardines, mackerel, or anchovies) weekly, delivering roughly 250 to 500 mg per day of preformed EPA and DHA [1, 3].',
              'উদ্ভিজ্জ উপাদানের দুর্বল রূপান্তরের ওপর পুরোপুরি নির্ভর না করে পর্যাপ্ত ওমেগা-৩ নিশ্চিত করতে সপ্তাহে অন্তত দুই দিন পারদ-মুক্ত তৈলাক্ত সামুদ্রিক মাছ (যেমন ইলিশ, টুনা, সার্ডিন, স্যামন বা ম্যাকেরেল) খাওয়া উচিত, যা দৈনিক প্রায় ২৫০ থেকে ৫০০ মিলিগ্রাম সরাসরি কার্যকর EPA ও DHA সরবরাহ করে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Educational Takeaways', 'মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Dietary fats are complex, bioactive regulators of human health that determine cellular signaling, membrane fluidity, gene expression, and immune responses [1, 4]. Saturated fats provide heat stability but should be consumed in moderation, while cis-monounsaturated fats like olive oil protect vascular health [1, 4].',
              'খাদ্যতালিকার চর্বি কেবল ক্যালোরির আঁধার নয়, বরং কোষীয় সংকেত, কোষপর্দার নমনীয়তা, জিন প্রকাশ এবং রোগপ্রতিরোধ ব্যবস্থার এক প্রধান জৈব নিয়ন্ত্রক [১, ৪]। সম্পৃক্ত চর্বি তাপে স্থায়ী হলেও পরিমিত গ্রহণীয়, আর অলিভ অয়েলের মতো মনো-অসম্পৃক্ত চর্বি হৃদযন্ত্র ও রক্তনালীকে সুরক্ষা দেয় [১, ৪]।'
            ),
            l(
              'Industrial trans fatty acids are metabolic toxins that damage blood vessels and elevate heart disease risk; they should be strictly avoided with zero intake [2]. Achieving a balanced omega-6 to omega-3 ratio by lowering refined seed oils and increasing marine EPA and DHA resolves systemic inflammation and fosters long-term cardiometabolic vitality [1, 3].',
              'শিল্পজাত ট্রান্স ফ্যাটি অ্যাসিড হলো ধমনীর মারাত্মক বিষ যা হৃদরোগের ঝুঁকি নাটকীয়ভাবে বৃদ্ধি করে; এটি খাদ্যতালিকা থেকে সম্পূর্ণ বর্জন করা উচিত [২]। প্রক্রিয়াজাত তেলের ওমেগা-৬ কমিয়ে এবং সামুদ্রিক EPA ও DHA বৃদ্ধির মাধ্যমে ওমেগা-৬ ও ওমেগা-৩ এর সঠিক ভারসাম্য অর্জন দীর্ঘস্থায়ী প্রদাহ নিরাময়ে অপরিহার্য [১, ৩]।'
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
              'Biological membranes undergo phase transitions between a rigid, gel-like state (L-beta) and a fluid, liquid-crystalline state (L-alpha). The presence of unsaturated fatty acyl chains lowers the transition temperature, ensuring that human cellular membranes maintain optimal physiological fluidity and enzymatic mobility at 37°C [1, 4].',
              'জৈব ঝিল্লিগুলো অনমনীয় জেল অবস্থা (L-beta) এবং তরল স্ফটিকাকার অবস্থা (L-alpha)-র মধ্যে পর্যায়ক্রমিক পরিবর্তন অনুভব করে। অসম্পৃক্ত ফ্যাটি অ্যাসিডের উপস্থিতি এই রূপান্তরের তাপমাত্রা কমিয়ে দেয়, যা নিশ্চিত করে যে ৩৭° সেলসিয়াস শারীরিক তাপমাত্রায় মানুষের প্রতিটি কোষপর্দা সর্বোত্তম নমনীয়তা এবং এনজাইম কার্যকারিতা বজায় রাখবে [১, ৪]।'
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
              'Unlike natural cis fatty acids, elaidic acid alters hepatic lipoprotein metabolism by upregulating the transcription and activity of Cholesteryl Ester Transfer Protein (CETP) [2]. Enhanced CETP accelerates the bidirectional exchange of cholesteryl esters from anti-atherogenic HDL to pro-atherogenic VLDL and LDL particles, decreasing circulating HDL-C while generating small, dense, oxidation-prone LDL particles [2]. Concurrently, trans fats downregulate hepatic LDL receptor expression, impairing clearance of ApoB-100 particles from plasma [2].',
              'প্রাকৃতিক সিস ফ্যাটের বিপরীতে ইলাইডিক অ্যাসিড যকৃতের কোলেস্টেরিল এস্টার ট্রান্সফার প্রোটিনের (CETP) প্রকাশ ও কার্যকারিতা অতিমাত্রায় বাড়িয়ে দেয় [২]। বর্ধিত CETP ভালো HDL থেকে কোলেস্টেরিল এস্টার বের করে ক্ষতিকর VLDL ও LDL-এ স্থানান্তর করে; ফলে রক্তে HDL কমে যায় এবং ক্ষতিকর ছোট-ঘন LDL বৃদ্ধি পায় [২]। একই সাথে ট্রান্স ফ্যাট যকৃতের LDL রিসেপ্টর কমিয়ে রক্ত থেকে এপো-বি কণা অপসারণ বাধাগ্রস্ত করে [২]।'
            ),
            l(
              'At the vascular endothelium, iTFAs uncouple endothelial nitric oxide synthase (eNOS), diminish bioavailability of vasodilatory nitric oxide, and upregulate vascular cell adhesion molecule-1 (VCAM-1) and intercellular adhesion molecule-1 (ICAM-1) via NF-kappa-B activation, accelerating monocyte diapesis and subendothelial foam cell creation [2, 4].',
              'রক্তনালীর এন্ডোথেলিয়ামে ট্রান্স ফ্যাট নাইট্রিক অক্সাইড সিন্থেজ (eNOS) নিষ্ক্রিয় করে, নাইট্রিক অক্সাইডের সরবরাহ কমিয়ে রক্তনালীর প্রসারণ বন্ধ করে এবং NF-kappa-B সক্রিয়করণের মাধ্যমে VCAM-1 ও ICAM-1 বৃদ্ধি করে রক্তনালীর প্রাচীরে মনোসাইট টেনে এনে এথেরোস্ক্লেরোসিস সৃষ্টি করে [২, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Competitive FADS Desaturase Cascade & Eicosanoid Biology', 'প্রতিযোগিতামূলক FADS ডিস্যাচুরেজ প্রবাহ ও আইকোসানয়েড জীববিজ্ঞান'),
          paragraphs: [
            l(
              'Essential polyunsaturated fatty acid metabolism is governed by a shared, alternating sequence of desaturation and elongation reactions occurring on the cytosolic face of the endoplasmic reticulum [1, 4]. The pathway commences with Delta-6 desaturase (encoded by FADS2), which adds a double bond to linoleic acid (18:2 n-6) to form gamma-linolenic acid (GLA, 18:3 n-6), or to alpha-linolenic acid (18:3 n-3) to yield stearidonic acid (18:4 n-3) [1, 4].',
              'অত্যাবশ্যক পলি-অসম্পৃক্ত ফ্যাটি অ্যাসিডের বিপাক এন্ডোপ্লাজমিক রেটিকুলামের পর্দায় এক সেট সাধারণ এনজাইম দ্বারা নিয়ন্ত্রিত হয় [১, ৪]। ডেল্টা-৬ ডিস্যাচুরেজ (FADS2) এনজাইম লিনোলিক অ্যাসিডকে (১৮:২ n-৬) গামা-লিনোলেনিক অ্যাসিডে (১৮:৩ n-৬) এবং আলফা-লিনোলেনিক অ্যাসিডকে (১৮:৩ n-৩) স্টিয়ারিডোনিক অ্যাসিডে (১৮:৪ n-৩) রূপান্তরিত করে [১, ৪]।'
            ),
            l(
              'Following two-carbon elongation via ELOVL5, Delta-5 desaturase (encoded by FADS1) executes the next critical desaturation step, synthesizing arachidonic acid (ARA, 20:4 n-6) and eicosapentaenoic acid (EPA, 20:5 n-3) [1]. ARA is stored in membrane phospholipids and liberated upon inflammatory stimuli by cytosolic Phospholipase A2 (cPLA2). Unesterified ARA serves as substrate for Cyclooxygenase-1 and -2 (COX-1/2), synthesizing 2-series prostanoids (prostaglandin E2, thromboxane A2), and for 5-Lipoxygenase (5-LOX), synthesizing 4-series leukotrienes (LTB4) [1, 3].',
              'ELOVL5 দ্বারা শিকল দুই কার্বন বৃদ্ধি পাওয়ার পর ডেল্টা-৫ ডিস্যাচুরেজ (FADS1) অ্যারাকিডোনিক অ্যাসিড (ARA, ২০:৪ n-৬) এবং আইকোসাপেন্টাইনোয়িক অ্যাসিড (EPA, ২০:৫ n-৩) তৈরি করে [১]। মেমব্রেনে সঞ্চিত অ্যারাকিডোনিক অ্যাসিড cPLA2 দ্বারা মুক্ত হয়ে COX-1/2 এনজাইমের মাধ্যমে ২-সিরিজের প্রোস্টাগ্ল্যান্ডিন (PGE2) ও থ্রম্বোক্সেন (TXA2) এবং ৫-LOX এর মাধ্যমে ৪-সিরিজের লিউকোট্রিন (LTB4) তৈরি করে, যা তীব্র প্রদাহ ও রক্ত জমাট বাঁধার সূচনা করে [১, ৩]।'
            ),
            l(
              'These ARA-derived lipid mediators promote intense vasoconstriction, platelet aggregation, vascular permeability, and neutrophil chemotaxis. Conversely, when EPA is metabolized by the same COX and LOX enzymes, it generates 3-series prostanoids (PGE3, TXA3) and 5-series leukotrienes (LTB5), which possess substantially weaker inflammatory potency and anti-aggregatory properties [1, 3].',
              'অ্যারাকিডোনিক অ্যাসিডের এই মধ্যস্থতাকারীগুলো তীব্র রক্তনালী সংকোচন, অণুচক্রিকা জমাট বাঁধা এবং প্রদাহজনক শ্বেতকণিকার স্থানান্তর ঘটায়। পক্ষান্তরে EPA একই এনজাইম দ্বারা জারিত হয়ে ৩-সিরিজের প্রোস্টানয়েড (PGE3, TXA3) এবং ৫-সিরিজের লিউকোট্রিন (LTB5) তৈরি করে, যা রক্ত জমাট বাঁধায় না এবং অত্যন্ত মৃদু ও সুরক্ষামূলক প্রভাব ফেলে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Resolvin Pathways & Substrate Competition Dynamics', 'রিজলভিন পথ ও সাবস্ট্রেট প্রতিযোগিতার গতিবিদ্যা'),
          paragraphs: [
            l(
              'In stark physiological contrast to arachidonate-derived pro-inflammatory signals, EPA and docosahexaenoic acid (DHA, 22:6 n-3) serve as obligatory precursors for the enzymatic generation of Specialized Pro-resolving Mediators (SPMs) [1, 5]. Discovered by Charles Serhan and colleagues, SPMs include E-series resolvins (RvE1, RvE2 derived from EPA), D-series resolvins (RvD1–RvD6 derived from DHA), protectins (PD1/neuroprotectin D1), and maresins (MaR1, MaR2) [5].',
              'অ্যারাকিডোনেট-উদ্ভূত প্রদাহবর্ধক সংকেতের বিপরীতে EPA এবং DHA প্রদাহ প্রশমনকারী বিশেষ মধ্যস্থতাকারী (SPM) তৈরির প্রধান উৎস [১, ৫]। চার্লস সারহান কর্তৃক আবিষ্কৃত এই SPM পরিবারের মধ্যে রয়েছে E-সিরিজ রিজলভিন (RvE1, RvE2), D-সিরিজ রিজলভিন (RvD1–RvD6), প্রোটেকটিন (PD1) এবং মারিসিন (MaR1, MaR2) [৫]।'
            ),
            l(
              'Unlike passive immunosuppression, SPMs orchestrate active resolution of acute inflammation: they bind stereospecific G-protein coupled receptors (such as ChemR23/ERV1 and GPR32/DRV1), shut down further neutrophil infiltration into inflamed tissue, and stimulate macrophage non-phlogistic efferocytosis (phagocytic clearance of apoptotic neutrophils without secondary cytokine release) [1, 5].',
              'রোগপ্রতিরোধ ক্ষমতা জোরপূর্বক দমনের বদলে SPM সক্রিয়ভাবে প্রদাহ নিরাময় সম্পন্ন করে: এরা নির্দিষ্ট GPCR রিসেপ্টরে (যেমন ChemR23 ও GPR32) যুক্ত হয়ে নতুন নিউট্রোফিলের প্রবেশ বন্ধ করে এবং ম্যাক্রোফেজের মাধ্যমে মৃত কোষের পরিচ্ছন্নতা নিশ্চিত করে যাতে নতুন কোনো ক্ষতিকর সাইটোকাইন নিঃসৃত না হয় [১, ৫]।'
            ),
            l(
              'Because FADS1 and FADS2 operate near kinetic saturation, excessive dietary linoleic acid (>7% of energy) competitively suppresses the conversion of plant ALA to bioactive EPA and DHA [1, 3]. In humans, endogenous conversion efficiencies drop below 5% for EPA and <0.5% for DHA due to enzymatic bottlenecks and competitive inhibition, necessitating direct dietary intake of marine long-chain omega-3s for tissue enrichment [1, 3].',
              'যেহেতু FADS1 ও FADS2 এনজাইমগুলো সাবস্ট্রেট সম্পৃক্ততার কাছাকাছি কাজ করে, খাদ্যে অতিরিক্ত লিনোলিক অ্যাসিড উদ্ভিজ্জ ALA থেকে EPA ও DHA রূপান্তরের গতিকে মারাত্মকভাবে বাধাগ্রস্ত করে [১, ৩]। মানুষের দেহে ALA থেকে রূপান্তর হার EPA-র জন্য ৫% এর কম এবং DHA-র জন্য ০.৫% এর নিচে নেমে যায়, যার কারণে রক্ত ও টিস্যুর সুরক্ষার জন্য সামুদ্রিক উৎস থেকে সরাসরি EPA ও DHA গ্রহণ অপরিহার্য [১, ৩]।'
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
              'In clinical hypertriglyceridemia (fasting triglycerides ≥500 mg/dL), pharmaceutical-grade prescription omega-3s (such as 4 g/day icosapent ethyl or omega-3 acid ethyl esters) lower hepatic VLDL synthesis and accelerate triglyceride clearance, significantly reducing pancreatitis and ischemic cardiovascular event risks [1, 6].',
              'মারাত্মক হাইপারট্রাইগ্লিসারিডেমিয়ায় (ফাস্টিং ট্রাইগ্লিসারাইড ≥৫০০ মিগ্রা/ডেসিলি) চিকিৎসকের প্রেসক্রিপশন অনুযায়ী দৈনিক ৪ গ্রাম ফার্মাসিউটিক্যাল ওমেগা-৩ (যেমন আইকোসাপেন্ট ইথাইল) যকৃতের VLDL উৎপাদন কমিয়ে ট্রাইগ্লিসারাইড দূর করে এবং প্যানক্রিয়াটাইটিস ও হার্ট অ্যাটাকের ঝুঁকি হ্রাস করে [১, ৬]।'
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
          ],
        },
        {
          id: 'structure',
          heading: l('Lipid Raft Biophysics, Toll-Like Receptor-4 & Epigenetic Signaling', 'লিপিড রাফটের বায়োফিজিক্স, TLR-4 ও এপিজেনেটিক সংকেত'),
          paragraphs: [
            l(
              'Cellular plasma membranes exhibit lateral nanoscale compartmentalization, organizing into liquid-ordered (Lo) microdomains termed lipid rafts enriched in cholesterol, sphingolipids, and saturated acyl-chain glycerophospholipids [1, 4]. Long-chain saturated fatty acids such as palmitic acid (16:0) partition preferentially into lipid rafts, stabilizing their coalescence and facilitating the recruitment and dimerization of Toll-Like Receptor-4 (TLR4) [1, 4].',
              'কোষীয় প্লাজমা মেমব্রেন সমজাতীয় নয়, বরং এটি কোলেস্টেরল, স্ফিঙ্গোলিপিড এবং সম্পৃক্ত ফ্যাটি অ্যাসিড সমৃদ্ধ তরল-সংগঠিত ক্ষুদ্র ক্ষুদ্র অঞ্চলে বিভক্ত থাকে যাকে "লিপিড রাফট" বলা হয় [১, ৪]। পামিটিক অ্যাসিডের (১৬:০) মতো দীর্ঘ সম্পৃক্ত চর্বি এই লিপিড রাফটের মধ্যে প্রবেশ করে এদের স্থায়িত্ব বাড়িয়ে দেয় এবং টোল-লাইক রিসেপ্টর-৪ (TLR4)-কে এতে একত্রিত ও দ্বিমুখী করতে সাহায্য করে [১, ৪]।'
            ),
            l(
              'SFA-induced TLR4 dimerization initiates myeloid differentiation primary response 88 (MyD88)-dependent signaling, activating I-kappa-B kinase (IKK) and driving nuclear translocation of NF-kappa-B p50/p65 heterodimers. This transcriptional activation promotes the expression of pro-inflammatory cytokines (IL-1beta, IL-6, TNF-alpha) and inducible nitric oxide synthase (iNOS), establishing sterile metabolic endotoxemia in adipose tissue and vascular beds [1, 4].',
              'সম্পৃক্ত চর্বির প্রভাবে TLR4 দ্বিমুখী হলে তা MyD88 সংকেত প্রবাহের মাধ্যমে IKK এনজাইম সক্রিয় করে এবং NF-kappa-B কে কোষের নিউক্লিয়াসে প্রবেশ করায়। ফলে প্রদাহসৃষ্টিকারী সাইটোকাইন (IL-1beta, IL-6, TNF-alpha) এবং ক্ষতিকর iNOS তৈরি হয়, যা অ্যাডিপোজ টিস্যু ও রক্তনালীতে জীবাণুবিহীন দীর্ঘস্থায়ী বিপাকীয় প্রদাহ সৃষ্টি করে [১, ৪]।'
            ),
            l(
              'In stark contrast, docosahexaenoic acid (22:6 n-3), possessing six unconjugated cis double bonds, exhibits extreme steric flexibility and conformational entropy. DHA incorporates into the phospholipid membrane but is sterically incompatible with tightly packed saturated sphingomyelin-cholesterol rafts. Consequently, DHA dissolves and destabilizes lipid rafts, displacing TLR4, inhibiting its dimerization, and neutralizing downstream inflammatory cascades [1, 5].',
              'বিপরীতভাবে, ছয়টি সিস দ্বি-বন্ধনযুক্ত DHA-র আণবিক গঠন অত্যন্ত নমনীয় ও গতিশীল। এটি মেমব্রেনে প্রবেশ করলেও শক্ত লিপিড রাফটের ঘন সন্নিবেশের সাথে মানিয়ে নিতে পারে না। ফলে DHA লিপিড রাফটের সন্নিবেশ ভেঙে দেয়, সেখান থেকে TLR4 কে বিতাড়িত করে এবং এর প্রদাহজনক সংকেত বন্ধ করে দেয় [১, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Nuclear Receptor Transcriptional Networks: SREBP-1c, ChREBP & PPAR-alpha', 'নিউক্লিয়ার রিসেপ্টর ট্রান্সক্রিপশন নেটওয়ার্ক: SREBP-1c, ChREBP ও PPAR-alpha'),
          paragraphs: [
            l(
              'Fatty acids act as direct transcriptional regulators by binding nuclear receptors and transcription factors that orchestrate lipogenesis and fatty acid oxidation [1, 4]. Polyunsaturated fatty acids (both n-3 and n-6) potently suppress hepatic de novo lipogenesis by accelerating the proteolytic degradation of mature Sterol Regulatory Element-Binding Protein-1c (SREBP-1c) and repressing its mRNA transcription [1, 4].',
              'ফ্যাটি অ্যাসিড সরাসরি নিউক্লিয়ার রিসেপ্টরের সাথে যুক্ত হয়ে জিন নিয়ন্ত্রক হিসেবে কাজ করে যা চর্বি তৈরি ও জারণের ভারসাম্য নির্ধারণ করে [১, ৪]। পলি-অসম্পৃক্ত ফ্যাটি অ্যাসিড যকৃতে নতুন চর্বি তৈরি দমন করে; এরা পরিণত SREBP-1c ট্রান্সক্রিপশন ফ্যাক্টরের ভাঙন ত্বরান্বিত করে এবং এর জিন প্রকাশ হ্রাস করে [১, ৪]।'
            ),
            l(
              'Downregulation of SREBP-1c shuts down the transcription of essential lipogenic enzymes, including ATP-citrate lyase (ACLY), acetyl-CoA carboxylase (ACC), fatty acid synthase (FASN), and stearoyl-CoA desaturase-1 (SCD1). Concurrently, PUFAs suppress Carbohydrate Response Element-Binding Protein (ChREBP) nuclear translocation, preventing glucose-driven conversion into triglycerides [1, 4].',
              'SREBP-1c দমন হলে চর্বি তৈরির অপরিহার্য এনজাইমগুলো (ACLY, ACC, FASN, SCD1) নিষ্ক্রিয় হয়ে পড়ে। একই সাথে PUFA গ্লুকোজ থেকে চর্বি তৈরির ট্রান্সক্রিপশন ফ্যাক্টর ChREBP-এর কার্যকারিতাও বন্ধ করে দেয় [১, ৪]।'
            ),
            l(
              'Simultaneously, unesterified long-chain PUFAs and oxidized metabolites serve as high-affinity endogenous ligands for Peroxisome Proliferator-Activated Receptor Alpha (PPAR-alpha). Ligand-activated PPAR-alpha heterodimerizes with Retinoid X Receptor (RXR) and binds Peroxisome Proliferator Response Elements (PPREs), inducing transcription of carnitine palmitoyltransferase-1A (CPT-1A), acyl-CoA oxidase (ACOX1), and mitochondrial HMG-CoA synthase, shunting hepatic fatty acids toward beta-oxidation and ketogenesis [1, 4].',
              'একই সময়ে দীর্ঘ PUFA এবং এর জারিত রূপগুলো PPAR-alpha রিসেপ্টরের প্রাকৃতিক লিগ্যান্ড হিসেবে কাজ করে। লিগ্যান্ডযুক্ত PPAR-alpha রেটিনয়েড X রিসেপ্টরের (RXR) সাথে যুক্ত হয়ে যকৃতে ফ্যাটি অ্যাসিড জারণের প্রধান এনজাইমগুলো (CPT-1A, ACOX1) সক্রিয় করে, যার ফলে যকৃতে চর্বি সঞ্চিত না হয়ে দ্রুত বিটা-জারণের মাধ্যমে শক্তিতে রূপান্তরিত হয় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('FADS Genetic Polymorphisms & Precision Nutrigenomics', 'FADS জিনগত পলিমরফিজম ও নির্ভুল নিউট্রিজেনোমিক্স'),
          paragraphs: [
            l(
              'Single nucleotide polymorphisms (SNPs) within the fatty acid desaturase gene cluster on chromosome 11 (FADS1 and FADS2, spanning rs174537 and rs174546) exert profound evolutionary and clinical control over endogenous PUFA biosynthesis [1, 3]. Genome-wide association studies identify two major haplogroups: an ancestral haplotype and a derived haplotype [1, 3].',
              'ক্রোমোজোম ১১-এ অবস্থিত ফ্যাটি অ্যাসিড ডিস্যাচুরেজ জিন ক্লাস্টারের (FADS1 ও FADS2, বিশেষ করে rs174537 ও rs174546) একক নিউক্লিওটাইড পলিমরফিজম (SNP) মানুষের PUFA রূপান্তর ক্ষমতায় গভীর বৈচিত্র্য তৈরি করেছে [১, ৩]। জিনোমিক গবেষণায় দুটি প্রধান হ্যাপ্লোটাইপ শনাক্ত করা হয়েছে: আদিম হ্যাপ্লোটাইপ এবং পরবর্তীকালে বিবর্তিত ডিরাইভড হ্যাপ্লোটাইপ [১, ৩]।'
            ),
            l(
              'The derived FADS haplotype, which underwent strong positive selection in South Asian and European agricultural populations following the Neolithic revolution, exhibits marked upregulation of FADS1 expression. In individuals carrying the derived allele, dietary linoleic acid is converted with hyper-efficiency into arachidonic acid, predisposing them to elevated circulating pro-inflammatory eicosanoids and coronary artery calcification when exposed to high-linoleic seed oils [1, 3].',
              'কৃষি বিপ্লবের পর দক্ষিণ এশীয় এবং ইউরোপীয় জনগোষ্ঠীর মধ্যে ডিরাইভড FADS হ্যাপ্লোটাইপের ব্যাপক প্রসার ঘটে, যা FADS1 এনজাইমের কার্যক্ষমতা বহুগুণ বাড়িয়ে দেয়। এই জিন বহনকারী ব্যক্তিরা খাদ্যে লিনোলিক অ্যাসিড গ্রহণ করলে তা অতি-দ্রুত অ্যারাকিডোনিক অ্যাসিডে রূপান্তরিত হয়ে রক্তে প্রদাহবর্ধক আইকোসানয়েড বাড়িয়ে দেয় এবং ধমনীতে ক্যালসিফিকেশন ও হৃদরোগের ঝুঁকি বৃদ্ধি করে [১, ৩]।'
            ),
            l(
              'Conversely, ancestral haplotypes—prevalent among indigenous Arctic Inuit and Native American populations—confer low desaturase activity, rendering carriers virtually incapable of converting plant ALA into EPA or DHA. For these populations, the requirement for preformed marine marine fatty acids is biologically absolute. This genetic divergence exemplifies precision lipid dietetics: dietary fatty acid recommendations cannot be universalized without considering individual FADS genotypes [1, 3].',
              'অন্যদিকে আর্কটিকের ইনুইট এবং আদিবাসী আমেরিকানদের মধ্যে সংরক্ষিত আদিম হ্যাপ্লোটাইপে ডিস্যাচুরেজ এনজাইমের গতি খুব কম থাকে, যার ফলে তারা উদ্ভিজ্জ ALA থেকে প্রায় কোনো EPA বা DHA তৈরি করতে পারে না। তাদের জন্য সামুদ্রিক উৎস থেকে সরাসরি ওমেগা-৩ গ্রহণ জীবনধারণের জন্য অপরিহার্য। এই জিনগত বৈচিত্র্য প্রমাণ করে যে জেনেটিক বৈশিষ্ট্যের ওপর ভিত্তি করে লিপিড পথ্য তৈরি করা কতটা জরুরি [১, ৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Cardiovascular Trial Evidence: REDUCE-IT vs STRENGTH Trials', 'কার্ডিওভাসকুলার ট্রায়ালের প্রমাণ: REDUCE-IT বনাম STRENGTH ট্রায়াল'),
          paragraphs: [
            l(
              'The clinical efficacy of pharmacological marine omega-3 supplementation has been illuminated by contrasting large-scale randomized controlled trials: REDUCE-IT (2019) and STRENGTH (2020) [6]. In REDUCE-IT, high-risk statin-treated patients with elevated fasting triglycerides receiving 4 g/day of icosapent ethyl (purified EPA ethyl ester) demonstrated a statistically significant 25% relative risk reduction in major adverse cardiovascular events (MACE) and a 20% reduction in cardiovascular death [6].',
              'ফার্মাকোলজিক্যাল ওমেগা-৩ এর কার্যকারিতা দুটি যুগান্তকারী ক্লিনিক্যাল ট্রায়ালের মাধ্যমে সুস্পষ্ট হয়েছে: REDUCE-IT (২০১৯) এবং STRENGTH (২০২০) [৬]। REDUCE-IT ট্রায়ালে স্ট্যাটিন গ্রহণকারী উচ্চ ট্রাইগ্লিসারাইডযুক্ত রোগীদের দৈনিক ৪ গ্রাম বিশুদ্ধ আইকোসাপেন্ট ইথাইল (বিশুদ্ধ EPA) প্রয়োগে প্রধান কার্ডিওভাসকুলার জটিলতা (MACE) ২৫% হ্রাস পেয়েছে এবং হৃদরোগে মৃত্যু ২০% কমেছে [৬]।'
            ),
            l(
              'In stark contrast, the STRENGTH trial evaluated 4 g/day of a combined EPA and DHA free fatty acid formulation and was terminated prematurely for futility, showing no significant reduction in MACE [6]. Mechanistic analysis revealed that while pure EPA stabilizes endothelial membranes, prevents cholesterol crystal formation, and inhibits LDL oxidation without raising LDL-C, DHA exerts distinct biophysical properties: DHA increases LDL particle size but can elevate circulating LDL-C in severe hypertriglyceridemia [6].',
              'বিপরীতভাবে STRENGTH ট্রায়ালে ৪ গ্রাম যৌথ EPA ও DHA ফর্মুলেশন পরীক্ষা করা হয় এবং কোনো ইতিবাচক সুফল না পাওয়ায় ট্রায়ালটি আগেভাগেই বন্ধ করে দেওয়া হয় [৬]। আণবিক বিশ্লেষণে দেখা গেছে যে বিশুদ্ধ EPA রক্তনালীর মেমব্রেন স্থিতিশীল করে, কোলেস্টেরল ক্রিস্টাল গঠন প্রতিরোধ করে এবং LDL না বাড়িয়েই হৃদসুরক্ষা দেয়; অন্যদিকে DHA ট্রাইগ্লিসারাইড কমালেও কখনো কখনো সিরাম LDL কোলেস্টেরল বাড়িয়ে দিতে পারে [৬]।'
            ),
            l(
              'Furthermore, both trials revealed a small but statistically significant increase in the incidence of new-onset atrial fibrillation among patients receiving 4 g/day of marine omega-3s [6]. Clinical dietitians and cardiologists must carefully weigh this electrophysiological risk against absolute cardiovascular ischemic benefits when prescribing therapeutic high-dose marine polyunsaturates [1, 6].',
              'অধিকন্তু উভয় ট্রায়ালেই দৈনিক ৪ গ্রাম উচ্চমাত্রার ওমেগা-৩ গ্রহণকারী রোগীদের মধ্যে অ্যাট্রিয়াল ফিব্রিলেশন (হৃদস্পন্দনের অস্বাভাবিক দ্রুত গতি) হওয়ার সামান্য ঝুঁকি বৃদ্ধি লক্ষ্য করা গেছে [৬]। ফলে উচ্চমাত্রার ওমেগা-৩ প্রেসক্রিপশনের সময় এই ঝুঁকি এবং হৃদরোগ প্রতিরোধের সামগ্রিক সুফলের মধ্যে সূক্ষ্ম ক্লিনিক্যাল সমন্বয় রক্ষা করা প্রয়োজন [১, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Advanced Synthesis & Research Frontiers', 'উন্নত সংশ্লেষণ ও গবেষণার দিগন্ত'),
          paragraphs: [
            l(
              'Advanced lipidology demonstrates that fatty acids are not inert metabolic fuels, but potent signaling ligands operating across multiple biological tiers: biophysical lipid raft organization, nuclear receptor transcription (SREBP-1c, PPAR-alpha), and enzymatic conversion into specialized pro-resolving mediators [1, 4, 5].',
              'আধুনিক লিপিডবিজ্ঞান প্রমাণ করে যে ফ্যাটি অ্যাসিড নিষ্ক্রিয় জ্বালানি নয়, বরং বহু স্তরে সক্রিয় সংকেত অণু: কোষপর্দার লিপিড রাফটের সংগঠন, নিউক্লিয়ার রিসেপ্টরের জিন প্রকাশ (SREBP-1c, PPAR-alpha) এবং নিরাময়কারী রিজলভিন তৈরির এক শক্তিশালী নিয়ন্ত্রক [১, ৪, ৫]।'
            ),
            l(
              'Emerging research focuses on utilizing plasma lipidomic signatures and FADS1/2 single-nucleotide polymorphisms to design individualized dietary fatty acid prescriptions, optimizing red blood cell Omega-3 Index and resolving vascular inflammation while avoiding electrophysiological side effects [1, 3, 6].',
              'সাম্প্রতিক গবেষণাগুলো প্লাজমা লিপিডোমিক্স এবং FADS1/2 জিনগত বৈশিষ্ট্যের ওপর ভিত্তি করে ব্যক্তিভিত্তিক লিপিড খাদ্যতালিকা প্রণয়ন করছে, যা লোহিত রক্তকণিকার ওমেগা-৩ ইনডেক্স সর্বোত্তম পর্যায়ে উন্নীত করার পাশাপাশি রক্তনালীর প্রদাহ নিরাময়ে যুগান্তকারী পথ দেখাচ্ছে [১, ৩, ৬]।'
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
        'Trans fats activate cholesteryl ester transfer protein (CETP), transferring cholesteryl esters from protective HDL to atherogenic LDL particles while downregulating hepatic LDL receptors.',
        'ট্রান্স ফ্যাট কোলেস্টেরিল এস্টার ট্রান্সফার প্রোটিনকে (CETP) সক্রিয় করে সুরক্ষাকারী HDL থেকে কোলেস্টেরিল এস্টার সরিয়ে ক্ষতিকর LDL-এ যুক্ত করে এবং যকৃতের LDL রিসেপ্টর দমন করে।'
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
