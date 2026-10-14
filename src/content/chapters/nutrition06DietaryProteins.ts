import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const dietaryProteinsRefs = [
  {
    id: 'fao-paper92-diaas-protein',
    authors: 'Food and Agriculture Organization of the United Nations',
    title: 'Dietary Protein Quality Evaluation in Human Nutrition: Report of an FAO Expert Consultation',
    organization: 'FAO Food and Nutrition Paper 92',
    year: 2013,
    url: 'https://www.fao.org/ag/humannutrition/35978-02317b9dcd10f3f4870e08e2aa345b23f.pdf',
  },
  {
    id: 'wolfe-ajcn-muscle-protein',
    authors: 'Robert R. Wolfe',
    title: 'The underappreciated role of muscle in health and disease',
    organization: 'The American Journal of Clinical Nutrition',
    year: 2006,
    url: 'https://doi.org/10.1093/ajcn/84.3.475',
    doi: '10.1093/ajcn/84.3.475',
  },
  {
    id: 'phillips-apnm-protein-intake',
    authors: 'Stuart M. Phillips, Douglas Paddon-Jones, Donald K. Layman',
    title: 'Optimizing Adult Protein Intake During Catabolic Conditions of Sarcopenia and Weight Loss',
    organization: 'Applied Physiology, Nutrition, and Metabolism',
    year: 2016,
    url: 'https://doi.org/10.1139/apnm-2015-0550',
    doi: '10.1139/apnm-2015-0550',
  },
  {
    id: 'krause-nutrition-care-proteins',
    authors: 'Janice L. Raymond, Kelly Morrow',
    title: "Krause and Mahan's Food & the Nutrition Care Process, 15th edition, Chapter 1: Nutrients and Nutritional Assessment",
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/krause-and-mahans-food-and-the-nutrition-care-process/raymond/978-0-323-63655-1',
  },
  {
    id: 'saxton-cell-mtor-review',
    authors: 'Robert A. Saxton, David M. Sabatini',
    title: 'mTOR Signaling in Growth, Metabolism, and Disease',
    organization: 'Cell',
    year: 2017,
    url: 'https://doi.org/10.1016/j.cell.2017.02.004',
    doi: '10.1016/j.cell.2017.02.004',
  },
  {
    id: 'morton-bjsm-protein-meta',
    authors: 'Robert W. Morton, Kevin T. Murphy, Sean R. McKellar, et al.',
    title: 'A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults',
    organization: 'British Journal of Sports Medicine',
    year: 2018,
    url: 'https://doi.org/10.1136/bjsports-2017-097608',
    doi: '10.1136/bjsports-2017-097608',
  },
]

export const nutrition06DietaryProteinsLesson: LessonTopic = {
  id: 'topic.nutrition.protein-quality-diaas-nitrogen-balance',
  slug: 'protein-quality-diaas-nitrogen-balance',
  version: 2,
  updatedAt: '2026-10-14',
  title: l(
    '06 · Dietary Proteins, Amino Acid Quality, DIAAS/PDCAAS & Nitrogen Balance',
    '০৬ · খাদ্য প্রোটিন, অ্যামিনো অ্যাসিডের মান, DIAAS/PDCAAS ও নাইট্রোজেন ভারসাম্য'
  ),
  summary: l(
    'Comprehensive academic textbook analysis of protein nutrition: amino acid stereochemistry, true ileal DIAAS vs fecal PDCAAS scoring, the Sestrin2-GATOR2-mTORC1 leucine trigger for myofibrillar protein synthesis, quantitative nitrogen balance, anabolic resistance in sarcopenia, and stable isotope tracer kinetics.',
    'প্রোটিন পুষ্টির প্রামাণ্য বিশ্ববিদ্যালয় পাঠ্যপুস্তকীয় বিশ্লেষণ: অ্যামিনো অ্যাসিডের স্টেরিওরসায়ন, ক্ষুদ্রান্ত্রের সত্য ইলিয়াল DIAAS বনাম ফিকাল PDCAAS মূল্যায়ন, পেশির প্রোটিন সংশ্লেষণে সেসট্রিন২-GATOR2-mTORC1 লিউসিন সুইচ, গাণিতিক নাইট্রোজেন ভারসাম্য, বার্ধক্যজনিত পেশিক্ষয়ে অ্যানাবলিক রেজিস্ট্যান্স এবং স্টেবল আইসোটোপ ট্রেসার গতিবিদ্যা।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-14',
  objectives: [
    l(
      'Contrast the nine indispensable amino acids, six conditionally essential amino acids, and the biochemical concept of limiting amino acids in dietary proteins.',
      'নয়টি অত্যাবশ্যক অ্যামিনো অ্যাসিড, ছয়টি শর্তসাপেক্ষে অত্যাবশ্যক অ্যামিনো অ্যাসিড এবং খাদ্য প্রোটিনের সীমিতকরণ অ্যামিনো অ্যাসিডের ধারণা বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Differentiate fecal PDCAAS and the FAO-recommended Digestible Indispensable Amino Acid Score (DIAAS), accounting for true ileal digestibility, colonic microbial confounding, and lack of truncation.',
      'মলভিত্তিক PDCAAS এবং FAO-অনুমোদিত সত্য ইলিয়াল হজমভিত্তিক DIAAS প্রোটিন মূল্যায়ন পদ্ধতির সূক্ষ্ম পার্থক্য, বৃহদন্ত্রের ব্যাকটেরিয়ার প্রভাব এবং স্কোর কর্তন না করার সুবিধা নির্ণয় করতে পারা।'
    ),
    l(
      'Trace the intracellular molecular mechanism of the leucine trigger: Sestrin2 sensing, GATOR2 disinhibition, Rag GTPase recruitment of mTORC1 to the lysosomal membrane, Rheb activation, and fractional synthetic rate elevation.',
      'লিউসিন সুইচের কোষীয় প্রক্রিয়া: সেসট্রিন২ সংবেদন, GATOR2 অবমুক্তকরণ, লাইসোজোমে Rag GTPase দ্বারা mTORC1 নোঙর, Rheb সক্রিয়করণ এবং পেশির প্রোটিন সংশ্লেষণ হার বৃদ্ধির পথ ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Calculate whole-body nitrogen balance and contrast the endocrine and pathophysiological hallmarks of Kwashiorkor (hypoalbuminemic edema) against Marasmus (somatic wasting).',
      'দেহের সামগ্রিক নাইট্রোজেন ভারসাম্য হিসাব করতে পারা এবং কোয়াশিওরকর (শোথজনিত অপুষ্টি) ও ম্যারাসমাসের (অস্থিচর্মসার শুষ্কতা) হরমোনজনিত ও রোগতাত্ত্বিক পার্থক্য নিরূপণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.nutrition.dietary-lipids-fatty-acids-pufa'],
  references: dietaryProteinsRefs,
  evidenceBySection: {
    introduction: ['fao-paper92-diaas-protein', 'krause-nutrition-care-proteins'],
    structure: ['fao-paper92-diaas-protein', 'morton-bjsm-protein-meta'],
    mechanism: ['saxton-cell-mtor-review', 'phillips-apnm-protein-intake'],
    integration: ['wolfe-ajcn-muscle-protein', 'krause-nutrition-care-proteins'],
    practice: ['morton-bjsm-protein-meta', 'phillips-apnm-protein-intake'],
    takeaways: ['fao-paper92-diaas-protein', 'wolfe-ajcn-muscle-protein'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Amino Acid Taxonomy & Essentiality', '১. অ্যামিনো অ্যাসিডের শ্রেণিবিন্যাস ও অপরিহার্যতা'), sectionId: 'introduction' },
      { id: 'sec-diaas', label: l('2. Protein Quality Metrics: PDCAAS vs DIAAS', '২. প্রোটিনের গুণমান পরিমাপ: PDCAAS বনাম DIAAS'), sectionId: 'structure' },
      { id: 'sec-mtor', label: l('3. The Leucine Threshold & mTORC1 Muscle Synthesis', '৩. লিউসিন থ্রেশহোল্ড ও পেশির mTORC1 প্রোটিন সংশ্লেষণ'), sectionId: 'mechanism' },
      { id: 'sec-nitrogen', label: l('4. Nitrogen Balance Dynamics & Severe Malnutrition', '৪. নাইট্রোজেন ভারসাম্য ও মারাত্মক অপুষ্টির রোগতত্ত্ব'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Clinical Nitrogen Balance & DIAAS Calculations', '৫. ক্লিনিক্যাল নাইট্রোজেন ভারসাম্য ও DIAAS হিসাব'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Digestible Indispensable Amino Acid Score (DIAAS)', 'ডাইজেস্টিভ ইনডিসপেন্সেবল অ্যামিনো অ্যাসিড স্কোর (DIAAS)'),
        definition: l(
          'The modern FAO-recommended protein quality metric determined from the true ileal digestibility of each individual essential amino acid relative to a reference scoring pattern, without artificial truncation at 1.00.',
          'FAO-অনুমোদিত আধুনিক প্রোটিন মূল্যায়ন পদ্ধতি, যা মলাশয়ের ব্যাকটেরিয়ার প্রভাব এড়িয়ে ক্ষুদ্রান্ত্রের শেষ প্রান্ত (ইলিয়াম) পর্যন্ত প্রতিটি অত্যাবশ্যক অ্যামিনো অ্যাসিডের প্রকৃত শোষণ হারের ভিত্তিতে নির্ধারিত হয়।'
        ),
      },
      {
        term: l('Protein Digestibility-Corrected Amino Acid Score (PDCAAS)', 'প্রোটিন ডাইজেস্টিবিলিটি-কারেক্টেড অ্যামিনো অ্যাসিড স্কোর (PDCAAS)'),
        definition: l(
          'An older protein quality standard based on total tract fecal crude protein digestibility and the first limiting amino acid, truncated at 1.00 (100%), which underestimates the supplementary value of high-quality animal proteins.',
          'একটি পুরোনো প্রোটিন পরিমাপক যা মলের মোট প্রোটিন হজম ক্ষমতার ভিত্তিতে হিসাব করা হতো এবং সর্বোচ্চ স্কোর ১.০০ এ সীমাবদ্ধ রাখত, ফলে উৎকৃষ্ট প্রোটিনের সম্পূরক মান সঠিকভাবে বোঝা যেত না।'
        ),
      },
      {
        term: l('Limiting Amino Acid', 'সীমিতকরণ অ্যামিনো অ্যাসিড'),
        definition: l(
          'The essential amino acid present in the lowest concentration relative to the human reference requirement pattern in a given dietary protein source, setting an upper ceiling on whole-body protein synthesis.',
          'একটি নির্দিষ্ট খাদ্য প্রোটিনে মানবদেহের চাহিদার তুলনায় যে অত্যাবশ্যক অ্যামিনো অ্যাসিডটি সবচেয়ে কম অনুপাতে থাকে, যা দেহের সামগ্রিক প্রোটিন তৈরির সর্বোচ্চ সীমা নির্ধারণ করে।'
        ),
      },
      {
        term: l('Leucine Trigger / Leucine Threshold', 'লিউসিন থ্রেশহোল্ড / লিউসিন সুইচ'),
        definition: l(
          'The critical intracellular concentration of the branched-chain amino acid leucine (~2.5–3.0 g per meal) required to saturate the Sestrin2 sensor and trigger maximal mTORC1 translocation to the lysosome for muscle protein synthesis.',
          'প্রতি বেলায় প্রায় ২.৫ থেকে ৩.০ গ্রাম লিউসিনের উপস্থিতি, যা কোষে সেসট্রিন২ সেন্সরকে সক্রিয় করে লাইসোজোমে mTORC1 স্থানান্তর ঘটায় এবং পেশির প্রোটিন তৈরি শুরু করে।'
        ),
      },
      {
        term: l('Nitrogen Balance', 'নাইট্রোজেন ভারসাম্য'),
        definition: l(
          'The quantitative mathematical difference between dietary nitrogen intake and total excreted nitrogen (urinary urea, fecal losses, and dermal/sweat sloughing), reflecting net somatic protein accrual or depletion.',
          'খাদ্যের মাধ্যমে গৃহীত মোট নাইট্রোজেন এবং মূত্র, মল ও ত্বকের মাধ্যমে নির্গত নাইট্রোজেনের গাণিতিক পার্থক্য, যা দেহে প্রোটিনের ক্ষয় বা বৃদ্ধির প্রকৃত অবস্থা নির্দেশ করে।'
        ),
      },
      {
        term: l('Sarcopenia and Anabolic Resistance', 'সারকোপেনিয়া ও অ্যানাবলিক রেজিস্ট্যান্স'),
        definition: l(
          'Age-related progressive loss of skeletal muscle mass and strength, exacerbated by a blunted myofibrillar fractional synthetic rate response to amino acid intake, requiring higher per-meal leucine doses to overcome.',
          'বার্ধক্যজনিত কারণে কঙ্কাল পেশির ধারাবাহিক ক্ষয় ও দুর্বলতা, যা খাদ্যের প্রোটিনের প্রতি পেশির সংবেদনশীলতা কমে যাওয়ার কারণে ঘটে এবং প্রতি বেলায় বেশি লিউসিন গ্রহণের মাধ্যমে কাটিয়ে ওঠা সম্ভব।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Whole-Body Nitrogen Balance in a Catabolic Patient', 'ক্লিনিক্যাল রোগীর দেহের নাইট্রোজেন ভারসাম্য হিসাব'),
        steps: [
          l(
            'Step 1: Calculate daily Nitrogen Intake (N_in). Patient consumes 75 g of dietary protein. Since protein contains ~16% nitrogen by weight: N_in = 75 g / 6.25 = 12.0 g N/day.',
            'ধাপ ১: খাদ্য থেকে গৃহীত নাইট্রোজেন (N_in) নির্ণয় করুন। রোগী দৈনিক ৭৫ গ্রাম প্রোটিন গ্রহণ করেন। প্রোটিনে গড়ে ১৬% নাইট্রোজেন থাকে: N_in = ৭৫ গ্রাম / ৬.২৫ = ১২.০ গ্রাম নাইট্রোজেন/দিন।'
          ),
          l(
            'Step 2: Measure 24-hour Urinary Urea Nitrogen (UUN). Laboratory urinalysis reveals UUN = 13.5 g/day.',
            'ধাপ ২: ২৪ ঘণ্টার মূত্রে ইউরিয়া নাইট্রোজেন (UUN) পরিমাপ করুন। ল্যাবরেটরি রিপোর্ট অনুযায়ী UUN = ১৩.৫ গ্রাম/দিন।'
          ),
          l(
            'Step 3: Account for unmeasured non-urea urinary nitrogen, fecal losses, and dermal sloughing using the standard clinical correction factor (+4.0 g N/day). Total N_out = 13.5 g + 4.0 g = 17.5 g N/day.',
            'ধাপ ৩: মল, ত্বক ও অন্যান্য পথে অপচিত নাইট্রোজেনের জন্য আদর্শ ৪.০ গ্রাম যোগ করুন। মোট নির্গমন N_out = ১৩.৫ গ্রাম + ৪.০ গ্রাম = ১৭.৫ গ্রাম/দিন।'
          ),
          l(
            'Step 4: Compute Nitrogen Balance: Balance = N_in - N_out = 12.0 g - 17.5 g = -5.5 g N/day.',
            'ধাপ ৪: নাইট্রোজেন ভারসাম্য হিসাব করুন: ব্যালেন্স = ১২.০ গ্রাম - ১৭.৫ গ্রাম = -৫.৫ গ্রাম নাইট্রোজেন/দিন।'
          ),
        ],
        conclusion: l(
          'A net negative nitrogen balance of -5.5 g/day corresponds to an ongoing loss of ~34.4 g of somatic protein daily (-5.5 x 6.25), indicating severe catabolic wasting requiring escalation of enteral/parenteral protein provision.',
          'দৈনিক -৫.৫ গ্রামের ঋণাত্মক নাইট্রোজেন ভারসাম্য প্রমাণ করে যে রোগীর দেহ থেকে প্রতিদিন প্রায় ৩৪.৪ গ্রাম কার্যকরী পেশি প্রোটিন ক্ষয় হচ্ছে (-৫.৫ x ৬.২৫); এটি রোধে অবিলম্বে প্রোটিন গ্রহণের মাত্রা বৃদ্ধি করা আবশ্যক।'
        ),
      },
      {
        title: l('Computing DIAAS and Amino Acid Complementarity in a Grain-Legume Blend', 'শস্য-ডাল মিশ্রণে DIAAS এবং অ্যামিনো অ্যাসিডের পরিপূরকতা নিরূপণ'),
        steps: [
          l(
            'Step 1: Identify limiting amino acids: Polished white rice is limiting in lysine (digestible ileal lysine = 24 mg/g protein vs FAO reference = 48 mg/g, individual DIAAS = 50%). Chickpeas/lentils are limiting in sulfur amino acids (methionine + cysteine = 22 mg/g vs reference = 25 mg/g, individual DIAAS = 88%), but abundant in lysine (68 mg/g).',
            'ধাপ ১: সীমিতকরণ অ্যামিনো অ্যাসিড শনাক্ত করুন: চালে লাইসিনের ঘাটতি থাকে (ইলিয়াল লাইসিন = ২৪ মিগ্রা/গ্রাম প্রোটিন বনাম FAO মান = ৪৮ মিগ্রা/গ্রাম, ব্যক্তিগত DIAAS = ৫০%)। ডালে সালফারযুক্ত মিথায়োনিন কম থাকে (২২ মিগ্রা/গ্রাম বনাম মান = ২৫ মিগ্রা/গ্রাম, DIAAS = ৮৮%), কিন্তু লাইসিন থাকে প্রচুর (৬৮ মিগ্রা/গ্রাম)।'
          ),
          l(
            'Step 2: Create a 50:50 protein blend (100 g total protein: 50 g from rice, 50 g from lentils). Calculate blended digestible lysine: (0.5 x 24 mg) + (0.5 x 68 mg) = 12 + 34 = 46 mg/g protein.',
            'ধাপ ২: ৫০:৫০ অনুপাতে প্রোটিন মিশ্রণ তৈরি করুন (মোট ১০০ গ্রাম প্রোটিন: ৫০ গ্রাম চাল থেকে, ৫০ গ্রাম ডাল থেকে)। মিশ্রণে লাইসিনের পরিমাণ: (০.৫ x ২৪ মিগ্রা) + (০.৫ x ৬৮ মিগ্রা) = ১২ + ৩৪ = ৪৬ মিগ্রা/গ্রাম প্রোটিন।'
          ),
          l(
            'Step 3: Calculate blended digestible sulfur amino acids: (0.5 x 30 mg from rice) + (0.5 x 22 mg from lentils) = 15 + 11 = 26 mg/g protein.',
            'ধাপ ৩: মিশ্রণে সালফারযুক্ত অ্যামিনো অ্যাসিড হিসাব করুন: (০.৫ x ৩০ মিগ্রা চাল) + (০.৫ x ২২ মিগ্রা ডাল) = ১৫ + ১১ = ২৬ মিগ্রা/গ্রাম প্রোটিন।'
          ),
          l(
            'Step 4: Compute final DIAAS: Lysine score = (46 / 48) x 100 = 95.8%. Sulfur amino acid score = (26 / 25) x 100 = 104%. The lowest score dictates the overall blend DIAAS: 95.8%.',
            'ধাপ ৪: চূড়ান্ত DIAAS নির্ধারণ করুন: লাইসিন স্কোর = (৪৬ / ৪৮) x ১০০ = ৯৫.৮%। সালফার স্কোর = (২৬ / ২৫) x ১০০ = ১০৪%। সর্বনিম্ন স্কোরটিই মিশ্রণের DIAAS নির্ধারণ করে: ৯৫.৮%।'
          ),
        ],
        conclusion: l(
          'By combining cereal grains and legumes, the individual DIAAS of 50% for rice is elevated to 95.8% in the blended meal without any animal protein, demonstrating mathematically the biological power of mutual dietary amino acid complementation.',
          'চাল ও ডালের সুষম মিশ্রণের ফলে চালের ৫০% এর নিম্ন DIAAS বেড়ে ৯৫.৮% এ উন্নীত হয়, যা কোনো প্রাণীজ প্রোটিন ছাড়াই উদ্ভিজ্জ খাদ্যের পারস্পরিক পরিপূরকতার বৈজ্ঞানিক শক্তি প্রমাণ করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does the FAO recommend DIAAS over the older PDCAAS metric for assessing high-quality and mixed-diet proteins?',
          'খাদ্যের প্রোটিনের সঠিক মান নির্ণয়ে FAO কেন পুরোনো PDCAAS পদ্ধতির বদলে আধুনিক DIAAS পদ্ধতি ব্যবহারের সুপারিশ করে?'
        ),
        answer: l(
          'PDCAAS measures fecal digestibility, where large-bowel bacterial fermentation artificially degrades unabsorbed amino acids into ammonia, overestimating digestibility. Furthermore, PDCAAS truncates scores at 1.00, obscuring the superior ability of dairy and meat proteins to complement lower-quality plant proteins.',
          'PDCAAS মলের ওপর ভিত্তি করে হিসাব করে, যেখানে বৃহদন্ত্রের ব্যাকটেরিয়া অপাচ্য প্রোটিন ভেঙে ফেলে শোষণ হারকে কৃত্রিমভাবে বেশি দেখায়। এছাড়া এটি ১.০০ এ স্কোর আটকে দেয়, ফলে উচ্চমানের প্রাণীজ প্রোটিনের সম্পূরক ক্ষমতা সঠিকভাবে প্রতিফলিত হয় না।'
        ),
      },
      {
        question: l(
          'What molecular difference explains why Kwashiorkor produces marked peripheral pitting edema, whereas Marasmus does not?',
          'কোয়াশিওরকরে কেন মারাত্মক পানি জমা বা শোথ (ইডিমা) দেখা দেয় কিন্তু ম্যারাসমাসে তা দেখা যায় না?'
        ),
        answer: l(
          'Kwashiorkor features profound dietary protein deprivation in the presence of marginal carbohydrates, suppressing hepatic synthesis of albumin. The resulting collapse in plasma intravascular oncotic pressure shifts fluid into interstitial spaces (edema). In Marasmus, balanced energy-protein starvation preserves hepatic protein synthesis, resulting in somatic tissue wasting without oncotic collapse.',
          'কোয়াশিওরকরে খাদ্যে শর্করা থাকলেও মারাত্মক প্রোটিনের অভাব থাকে, ফলে যকৃতে অ্যালবুমিন সংশ্লেষণ বন্ধ হয়ে রক্তের অনকোটিক চাপ ধসে পড়ে এবং কোষে পানি জমে শোথ হয়। ম্যারাসমাসে সামগ্রিক অনাহারের কারণে পেশি ক্ষয় হলেও অ্যালবুমিন কিছুটা সংরক্ষিত থাকে।'
        ),
      },
      {
        question: l(
          'What cellular alterations drive anabolic resistance in aging skeletal muscle, and how is it overcome through nutrition?',
          'বার্ধক্যে কঙ্কাল পেশির "অ্যানাবলিক রেজিস্ট্যান্স" সৃষ্টির পেছনে কোন কোষীয় পরিবর্তন দায়ী এবং খাদ্যের মাধ্যমে কীভাবে এটি কাটিয়ে ওঠা যায়?'
        ),
        answer: l(
          'Anabolic resistance is driven by blunted Sestrin2-leucine binding sensitivity, impaired microvascular recruitment to muscle capillary beds, and elevated baseline systemic inflammatory cytokines (TNF-alpha, IL-6). It is overcome by increasing the per-meal protein bolus to 35–45 g, delivering 3.0–4.0 g of free leucine to force lysosomal mTORC1 recruitment.',
          'অ্যানাবলিক রেজিস্ট্যান্সের কারণ হলো সেসট্রিন২ সেন্সরের সংবেদনশীলতা হ্রাস, পেশির ক্ষুদ্র রক্তনালীতে রক্তপ্রবাহ কমে যাওয়া এবং দীর্ঘস্থায়ী প্রদাহজনিত সাইটোকাইন বৃদ্ধি। প্রতি বেলায় ৩৫-৪৫ গ্রাম উচ্চমানের প্রোটিন (৩.০-৪.০ গ্রাম লিউসিন) গ্রহণের মাধ্যমে লাইসোজোমে mTORC1 কে সক্রিয় করে এটি দূর করা যায়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'protein-quality-mps-cascade',
    title: l('Protein Quality, Digestion & mTORC1 Muscle Synthesis', 'প্রোটিনের গুণমান, পরিপাক ও পেশির mTORC1 সংশ্লেষণ'),
    description: l(
      'Track dietary protein from essential amino acid profile through ileal DIAAS absorption to the Sestrin2/mTORC1 leucine threshold for muscle protein synthesis.',
      'অত্যাবশ্যক অ্যামিনো অ্যাসিডের গঠন থেকে ক্ষুদ্রান্ত্রের DIAAS শোষণ এবং পেশিতে সেসট্রিন২/mTORC1 লিউসিন সুইচ পর্যন্ত প্রোটিনের রূপান্তর পথ পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Educational biochemical pathway simulation; clinical nitrogen balance requires 24-hour urine collection.',
      'পুষ্টি শারীরবৃত্তের শিক্ষামূলক সিমুলেশন; ক্লিনিক্যাল নাইট্রোজেন ভারসাম্য নির্ণয়ে ২৪ ঘণ্টার মূত্র পরীক্ষা অপরিহার্য।'
    ),
    svgType: 'protein-cascade',
    items: [
      {
        id: 'node-eaa',
        label: l('Essential Amino Acids (9 EAAs: BCAA Leucine/Ile/Val, Lys, Met)', '৯টি অত্যাবশ্যক অ্যামিনো অ্যাসিড (BCAA লিউসিন, লাইসিন, মিথায়োনিন)'),
        description: l(
          'Cannot be de novo synthesized by human tissues due to absence of corresponding transaminases and keto-acid carbon precursors; required for proteostasis.',
          'মানবদেহে এই অ্যামিনো অ্যাসিডগুলোর কার্বন কাঠামো তৈরির ব্যবস্থা না থাকায় খাদ্য থেকে এদের গ্রহণ অপরিহার্য।'
        ),
        details: l(
          'The 9 EAAs are Histidine, Isoleucine, Leucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, and Valine. All 9 must be present simultaneously in the intracellular amino acid pool to support ribosomal translation.',
          '৯টি অত্যাবশ্যক অ্যামিনো অ্যাসিড হলো হিস্টিডিন, আইসোলিউসিন, লিউসিন, লাইসিন, মিথায়োনিন, ফিনাইলঅ্যালানিন, থ্রিওনিন, ট্রিপটোফ্যান ও ভ্যালিন। এদের যেকোনো একটির ঘাটতি থাকলে কোষের প্রোটিন সংশ্লেষণ বন্ধ হয়ে যায়।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-diaas',
        label: l('True Ileal Digestibility (DIAAS Reference Standard)', 'সত্য ইলিয়াল হজম ক্ষমতা (DIAAS মানদণ্ড)'),
        description: l(
          'Samples amino acid absorption at the terminal ileum before colonic microbial metabolism, preventing false overestimation of protein bioavailability.',
          'বৃহদন্ত্রের ব্যাকটেরিয়ার বিপাকের পূর্বেই ক্ষুদ্রান্ত্রের শেষে প্রতিটি অ্যামিনো অ্যাসিডের শোষণ মেপে সঠিক শোষণযোগ্যতা নির্ণয় করে।'
        ),
        details: l(
          'DIAAS (%) = 100 x [(mg of digestible dietary indispensable amino acid in 1 g of dietary protein) / (mg of the same dietary indispensable amino acid in 1 g of the reference protein)]. Scores >100% reflect excellent protein quality.',
          'DIAAS ইলিয়ামে প্রতিটি অ্যামিনো অ্যাসিডের সত্য শোষণ হার হিসাব করে। ১০০% এর বেশি স্কোরসম্পন্ন প্রোটিন মানবদেহের বৃদ্ধি ও পেশি সুরক্ষার জন্য উৎকৃষ্ট।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-leucine',
        label: l('The Leucine Threshold (Sestrin2 / GATOR2 Sensor)', 'লিউসিন থ্রেশহোল্ড (সেসট্রিন২ / GATOR2 সেন্সর)'),
        description: l(
          'Cytosolic Sestrin2 binds free leucine with micromolar affinity. Once saturated (~2.5–3.0 g dietary leucine), it disinhibits GATOR2, activating Rag GTPases.',
          'কোষের সেসট্রিন২ প্রোটিন মুক্ত লিউসিনের সাথে যুক্ত হয়। পর্যাপ্ত লিউসিন পেলে এটি GATOR2 কে মুক্ত করে সংকেত পাঠায়।'
        ),
        details: l(
          'At low intracellular leucine, Sestrin2 binds and inhibits GATOR2. Binding of leucine causes Sestrin2 dissociation from GATOR2, relieving GATOR1 inhibition and allowing RagA/B-GTP to load.',
          'লিউসিনের মাত্রা কম থাকলে পেশি প্রোটিন তৈরি হয় না। প্রতি বেলায় পর্যাপ্ত লিউসিন পেলে সেসট্রিন২ সেন্সর খুলে গিয়ে লাইসোজোমে প্রোটিন তৈরির সংকেত পাঠায়।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-mtorc1',
        label: l('mTORC1 Lysosomal Translocation & MPS Activation', 'mTORC1 লাইসোজোমাল রূপান্তর ও পেশি প্রোটিন সংশ্লেষণ'),
        description: l(
          'Active Rag GTPases dock mTORC1 to the lysosomal membrane, where GTP-bound Rheb stimulates kinase activity, phosphorylating p70S6K and 4E-BP1.',
          'Rag GTPase এনজাইম mTORC1 কে লাইসোজোমে নিয়ে যায় যেখানে Rheb একে পূর্ণ সক্রিয় করে রাইবোজোমে পেশির প্রোটিন তৈরি শুরু করে।'
        ),
        details: l(
          'mTORC1 phosphorylates 4E-BP1 (releasing eukaryotic initiation factor 4E to initiate cap-dependent translation) and p70S6K (stimulating ribosomal protein S6 and eEF2K), elevating the Fractional Synthetic Rate (FSR) of myofibrillar proteins.',
          'mTORC1 সক্রিয় হয়ে পেশির ফিলামেন্ট (অ্যাক্টিন ও মায়োসিন) তৈরির হার বহুগুণ বাড়িয়ে দেয়, যা পেশির শক্তি ও আয়তন বৃদ্ধি করে।'
        ),
        color: '#ec4899',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-nitrogen',
        label: l('Whole-Body Nitrogen Balance & Proteostasis Pool', 'নাইট্রোজেন ভারসাম্য ও সামগ্রিক প্রোটিন ভাণ্ডার'),
        description: l(
          'Equilibrium between Muscle Protein Synthesis (MPS) and Breakdown (MPB); net positive balance supports tissue repair and sarcopenia prevention.',
          'পেশি প্রোটিন তৈরি ও ক্ষয়ের মধ্যবর্তী ভারসাম্য; ধনাত্মক ব্যালেন্স বার্ধক্যজনিত পেশিক্ষয় রোধ করে এবং টিস্যু নিরাময় করে।'
        ),
        details: l(
          'Nitrogen Balance = [Protein intake (g) / 6.25] - [24h UUN (g) + 4 g miscellaneous losses]. In healthy adults, maintenance requires 0.8 g/kg/day, but older adults require 1.2–1.6 g/kg/day to overcome age-related anabolic resistance.',
          'সুস্থ প্রাপ্তবয়স্কদের দৈনিক ০.৮ গ্রাম/কেজি প্রোটিন প্রয়োজন হলেও বয়স্কদের পেশিক্ষয় (সারকোপেনিয়া) রোধে দৈনিক ১.২ থেকে ১.৬ গ্রাম/কেজি প্রোটিন আবশ্যক।'
        ),
        color: '#f59e0b',
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
          heading: l('What Are Proteins & Why Are They Essential?', 'প্রোটিন কী এবং কেন তা জীবনধারণে অপরিহার্য?'),
          paragraphs: [
            l(
              'Dietary proteins are fundamental macronutrients composed of twenty distinct amino acid building blocks joined together by covalent peptide bonds [4]. Unlike carbohydrates and fats, which consist solely of carbon, hydrogen, and oxygen atoms, proteins uniquely contain approximately sixteen percent nitrogen by molecular weight [1, 4]. Every single living cell in the human body requires a continuous supply of amino acids to repair structural tissues, manufacture catalytic enzymes, construct immune defense antibodies, and synthesize skeletal muscle contractile filaments [2, 4].',
              'খাদ্য প্রোটিন হলো সমযোজী পেপটাইড বন্ধন দ্বারা পরস্পরের সাথে যুক্ত বিশটি স্বতন্ত্র অ্যামিনো অ্যাসিডের সমন্বয়ে গঠিত একটি মৌলিক ম্যাক্রোনিউট্রিয়েন্ট বা প্রধান খাদ্য উপাদান [৪]। শর্করা ও চর্বির মতো কেবল কার্বন, হাইড্রোজেন ও অক্সিজেন দিয়ে গঠিত না হয়ে প্রোটিনে আণবিক ওজনের প্রায় ১৬ শতাংশ নাইট্রোজেন বিদ্যমান থাকে [১, ৪]। মানবদেহের প্রতিটি জীবন্ত কোষের ক্ষয়পূরণ, জৈব-রাসায়নিক বিক্রিয়া পরিচালনাকারী এনজাইম তৈরি, রোগপ্রতিরোধক অ্যান্টিবডি গঠন এবং পেশির সংকোচনশীল কাঠামো বজায় রাখতে নিরবচ্ছিন্ন প্রোটিনের জোগান অপরিহার্য [২, ৪]।'
            ),
            l(
              'To intuitively understand whole-body protein metabolism, imagine a large brick house that is undergoing continuous, non-stop architectural remodeling. Every single day, older and damaged bricks are pulled out of the walls to be crushed, recycled, or discarded, while fresh new bricks from your daily diet are cemented into their place. This continuous bodily turnover—totaling 300 to 400 grams of endogenous protein broken down and rebuilt every twenty-four hours—means your body cannot simply store excess protein for future years in the way it stores fat in adipose tissue; you must consume high-quality protein consistently every day [2, 4].',
              'মানবদেহের প্রোটিন বিপাককে সহজে বোঝার জন্য একটি সুবিশাল ইটের বাড়ির কথা কল্পনা করুন যেখানে দিনরাত অবিরাম সংস্কার কাজ চলছে। প্রতিদিন দেয়াল থেকে পুরোনো ও ক্ষতিগ্রস্ত ইটগুলো খুলে ফেলা হচ্ছে এবং আপনার দৈনন্দিন খাদ্য থেকে আসা নতুন ইট দিয়ে সেই ফাঁকা জায়গা সিমেন্ট দিয়ে ভরাট করা হচ্ছে। দেহে প্রতিদিন প্রায় ৩০০ থেকে ৪০০ গ্রাম অভ্যন্তরীণ প্রোটিনের এই চলমান ভাঙা-গড়ার কারণে শরীর অতিরিক্ত প্রোটিন চর্বির মতো জমিয়ে রাখতে পারে না; তাই জীবনধারণের জন্য প্রতিদিন নিয়মিত প্রোটিন গ্রহণ করা অপরিহার্য [২, ৪]।'
            ),
            l(
              'Of the twenty genetically encoded amino acids, nine are designated as Essential (or Indispensable) Amino Acids because human metabolic machinery completely lacks the ability to synthesize their carbon skeletons from other nutrients [4]. These nine indispensable amino acids—Histidine, Isoleucine, Leucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, and Valine—must be supplied directly and adequately by our daily food [1, 4]. If even one single essential amino acid is chronically deficient in the diet, whole-body ribosomal protein translation grinds to a complete halt, just as an assembly line stops when a single critical bolt is missing [1, 4].',
              'বিশটি জিনগত অ্যামিনো অ্যাসিডের মধ্যে নয়টিকে অত্যাবশ্যকীয় বা অপরিহার্য অ্যামিনো অ্যাসিড বলা হয় কারণ মানবদেহ নিজে এদের কার্বন কাঠামো সংশ্লেষণ করতে সম্পূর্ণ অক্ষম [৪]। এই নয়টি অত্যাবশ্যক অ্যামিনো অ্যাসিড হলো হিস্টিডিন, আইসোলিউসিন, লিউসিন, লাইসিন, মিথায়োনিন, ফিনাইলঅ্যালানিন, থ্রিওনিন, ট্রিপটোফ্যান ও ভ্যালিন—যা প্রতিদিন খাবারের মাধ্যমে গ্রহণ করা বাধ্যতামূলক [১, ৪]। এদের যেকোনো একটির দীর্ঘমেয়াদী ঘাটতি থাকলে দেহের প্রোটিন তৈরির পুরো কারখানাটি স্থবির হয়ে পড়ে, ঠিক যেমন কোনো যন্ত্রাংশ তৈরির কারখানায় একটি মাত্র নাট-বল্টুর অভাবে পুরো অ্যাসেম্বলি লাইন বন্ধ হয়ে যায় [১, ৪]।'
            ),
            l(
              'When dietary protein intake falls below physiological requirements, the body has no choice but to break down its own functional tissues to liberate indispensable amino acids for vital visceral organs [2, 4]. The early warning signs of inadequate protein consumption include persistent physical fatigue, delayed wound healing, brittle hair and ridged fingernails, loss of skeletal muscle tone, and a weakened immune system that succumbs easily to recurring infections [2, 4]. Recognizing these foundational principles helps individuals select appropriate daily protein sources to sustain vitality across every stage of human life [1, 4].',
              'খাদ্যে প্রোটিনের অভাব দেখা দিলে জীবন বাঁচানোর তাগিদে দেহ নিজের পেশি ও অভ্যন্তরীণ টিস্যু ভেঙে অত্যাবশ্যক অ্যামিনো অ্যাসিড সংগ্রহ করতে বাধ্য হয় [২, ৪]। প্রোটিনের দীর্ঘমেয়াদী ঘাটতির প্রাথমিক লক্ষণগুলোর মধ্যে রয়েছে সার্বক্ষণিক ক্লান্তি, ক্ষত দেরিতে শুকানো, চুল পড়ে যাওয়া ও নখ ভঙ্গুর হওয়া, পেশির ক্ষয় এবং ঘনঘন সংক্রমণে আক্রান্ত হওয়া [২, ৪]। এই মৌলিক নিয়মগুলো অনুধাবন করা জীবনের প্রতিটি ধাপে সুস্বাস্থ্য ও শারীরিক সক্ষমতা বজায় রাখার প্রথম শর্ত [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Understanding Protein Quality, Limiting Amino Acids & DIAAS', 'প্রোটিনের গুণমান, সীমিতকরণ অ্যামিনো অ্যাসিড ও DIAAS'),
          paragraphs: [
            l(
              'Not all dietary protein sources provide the same biological value to the human body. Protein nutritional quality is determined by two independent scientific criteria: first, whether its essential amino acid proportions match the reference requirements of human tissues, and second, how completely and efficiently those amino acids are digested and absorbed into the bloodstream [1]. Animal proteins such as eggs, dairy milk, fish, poultry, and meat are termed complete proteins because they contain all nine indispensable amino acids in generous, easily bioavailable proportions [1, 2].',
              'দৈনন্দিন খাদ্যের সব প্রোটিন মানবদেহে সমান পুষ্টিমান সরবরাহ করে না। প্রোটিনের পুষ্টিমান মূলত দুটি বৈজ্ঞানিক বিষয়ের ওপর নির্ভর করে: প্রথমত, খাদ্যে উপস্থিত অত্যাবশ্যক অ্যামিনো অ্যাসিডের অনুপাত মানবদেহের চাহিদার সাথে কতটা সামঞ্জস্যপূর্ণ, এবং দ্বিতীয়ত, পরিপাকতন্ত্রে সেগুলো কতটা কার্যকরভাবে হজম ও রক্তে শোষিত হতে পারে [১]। ডিম, দুধ, মাছ, মুরগি ও মাংসের মতো প্রাণীজ প্রোটিনকে সম্পূর্ণ প্রোটিন বলা হয়, কারণ এগুলোতে নয়টি অত্যাবশ্যক অ্যামিনো অ্যাসিডই চমৎকার অনুপাতে এবং সহজে শোষণযোগ্য অবস্থায় বিদ্যমান থাকে [১, ২]।'
            ),
            l(
              'To master the concept of "limiting amino acids," nutritionists rely on Justus von Liebig\'s historical Law of the Minimum, visualized as a wooden water barrel constructed from staves of uneven heights. The water barrel can only hold water up to the exact height of its shortest wooden stave; adding more tall staves will not prevent the water from pouring out of the gap [1, 4]. Similarly, the human body can only construct new proteins up to the limit dictated by whichever essential amino acid is present in the lowest concentration relative to human need. In cereal grains like rice and wheat, the shortest wooden stave is lysine; in legumes like lentils and soybeans, the shortest stave is the sulfur-containing amino acid methionine [1, 4].',
              'সীমিতকরণ অ্যামিনো অ্যাসিডের ধারণাটি বোঝার জন্য বিজ্ঞানী জাস্টাস ভন লিবিগের ঐতিহাসিক "ল অব দ্য মিনিমাম" বা অসম উচ্চতার তক্তা দিয়ে তৈরি একটি কাঠের পানির পিপার কথা ভাবুন। পিপাটিতে কেবল তার সবচেয়ে খাটো তক্তাটির উচ্চতা পর্যন্তই পানি ধরে রাখা সম্ভব; বাকি তক্তাগুলো যতই লম্বা হোক না কেন, খাটো তক্তার ওপর দিয়ে পানি উপচে পড়ে যাবে [১, ৪]। একইভাবে খাদ্যতালিকায় মানবদেহের চাহিদার তুলনায় যে অত্যাবশ্যক অ্যামিনো অ্যাসিডটি সবচেয়ে কম থাকে, দেহ কেবল সেই পরিমাণের ভিত্তিতেই নতুন প্রোটিন তৈরি করতে পারে। চাল বা গমের মতো শস্যজাতীয় খাদ্যে সবচেয়ে খাটো তক্তাটি হলো লাইসিন; আর ডাল ও শিমের ক্ষেত্রে তা হলো সালফারযুক্ত অ্যামিনো অ্যাসিড মিথায়োনিন [১, ৪]।'
            ),
            l(
              'Historically, food packages evaluated protein quality using the Protein Digestibility-Corrected Amino Acid Score (PDCAAS), but the United Nations Food and Agriculture Organization (FAO) replaced it with the Digestible Indispensable Amino Acid Score (DIAAS) [1]. PDCAAS suffered from a fundamental flaw: it measured digestion by collecting feces, where colonic bacteria ferment and consume unabsorbed amino acids into ammonia gas, falsely tricking the test into overestimating protein absorption [1]. DIAAS overcomes this by sampling digestion at the end of the small intestine (the ileum) before bacterial fermentation occurs, while removing artificial score truncation so that exceptionally dense animal proteins can accurately demonstrate their nutritional superiority [1].',
              'ঐতিহাসিকভাবে প্রোটিনের মান PDCAAS পদ্ধতিতে নির্ধারণ করা হতো, তবে জাতিসংঘের খাদ্য ও কৃষি সংস্থা (FAO) ২০১৩ সালে এটিকে ত্রুটিপূর্ণ ঘোষণা করে আধুনিক DIAAS পদ্ধতি প্রবর্তন করে [১]। PDCAAS-এর মূল ত্রুটি ছিল এটি মলের ওপর ভিত্তি করে হিসাব করত; অথচ মলাশয়ের কোটি কোটি ব্যাকটেরিয়া অপাচ্য প্রোটিন খেয়ে ফেলে গ্যাস ও অ্যামোনিয়ায় পরিণত করে, যার ফলে প্রোটিন শোষণ হারকে কৃত্রিমভাবে অনেক বেশি মনে হতো [১]। DIAAS ক্ষুদ্রান্ত্রের শেষ প্রান্তে (ইলিয়ামে) ব্যাকটেরিয়ার ক্রিয়ার পূর্বেই প্রতিটি অ্যামিনো অ্যাসিডের সত্য শোষণ পরিমাপ করে এবং কোনো স্কোর কর্তন না করে দুধ ও ডিমের মতো উৎকৃষ্ট প্রোটিনের সঠিক ক্ষমতা তুলে ধরে [১]।'
            ),
            l(
              'The practical beauty of limiting amino acids is that plant foods can be thoughtfully paired together through mutual dietary complementation [1, 4]. When you consume a traditional meal that combines grains and legumes—such as rice with lentils (khichuri), whole wheat pita with hummus, or corn tortillas with black beans—the abundant lysine from the beans covers the deficit in the grains, while the methionine from the grains covers the deficit in the beans [1, 4]. As a result, the combined meal provides a complete, high-quality amino acid profile comparable to animal meat, empowering vegetarians and vegans to achieve robust protein nutrition effortlessly [1, 4].',
              'সীমিতকরণ অ্যামিনো অ্যাসিডের সবচেয়ে চমৎকার ব্যবহারিক দিক হলো উদ্ভিজ্জ খাদ্যের পারস্পরিক পরিপূরকতা [১, ৪]। যখন ঐতিহ্যবাহী খাদ্যাভ্যাস অনুযায়ী শস্য ও ডাল একসাথে খাওয়া হয়—যেমন চালের সাথে ডাল (খিচুড়ি), গমের রুটির সাথে ছোলার তৈরি হামাস, কিংবা ভুট্টার সাথে শিম—তখন ডালের অতিরিক্ত লাইসিন চালের ঘাটতি পূরণ করে এবং চালের মিথায়োনিন ডালের ঘাটতি দূর করে [১, ৪]। এর ফলে দুটি খাদ্য মিলে কোনো মাংস ছাড়াই একটি সম্পূর্ণ ও উন্নতমানের প্রোটিন খাদ্যে রূপান্তরিত হয়, যা উদ্ভিজ্জভোজীদের নিখুঁত স্বাস্থ্য নিশ্চিতে অত্যন্ত সহায়ক [১, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Leucine Trigger & Muscle Protein Synthesis', 'লিউসিন সুইচ ও পেশির প্রোটিন সংশ্লেষণ'),
          paragraphs: [
            l(
              'Skeletal muscle is not a static organ; it exists in a perpetual tug-of-war between Muscle Protein Synthesis (MPS, the creation of fresh contractile proteins) and Muscle Protein Breakdown (MPB, the degradation of damaged proteins) [2, 3]. In an unfed fasting state, breakdown slightly exceeds synthesis, resulting in a net negative protein balance [2]. To flip this balance into a net positive state where new muscle can be repaired and maintained, the body relies on a specialized biochemical nutrient sensor known as the "leucine trigger" or leucine threshold [3].',
              'মানবদেহের কঙ্কাল পেশি কোনো স্থির কাঠামো নয়; এটি প্রতিনিয়ত পেশি প্রোটিন সংশ্লেষণ (MPS, নতুন পেশি গঠন) এবং পেশি প্রোটিন ভাঙনের (MPB, পুরোনো পেশি ক্ষয়) এক নিরবচ্ছিন্ন টানাটানিতে লিপ্ত থাকে [২, ৩]। উপবাসের সময় পেশি ভাঙনের হার কিছুটা বেশি থাকে, যার ফলে দেহ সামান্য ঋণাত্মক অবস্থায় থাকে [২]। এই অবস্থাকে ইতিবাচক বা গঠনমূলক অবস্থায় রূপান্তর করতে হলে কোষের ভেতরে "লিউসিন সুইচ" বা লিউসিন থ্রেশহোল্ড নামের একটি বিশেষ সংবেদনশীল প্রক্রিয়া চালু করতে হয় [৩]।'
            ),
            l(
              'To understand how the leucine trigger operates, think of the branched-chain amino acid leucine as the ignition key of an automobile engine, while the remaining essential amino acids represent the liquid fuel in the gas tank [3]. Even if your gas tank is overflowing with fuel, the vehicle will sit completely motionless until you insert the ignition key and turn the ignition switch. In human muscle cells, the master molecular growth engine is an enzyme complex called mTORC1 [5]. Once intracellular leucine concentrations reach a critical threshold of approximately 2.5 to 3.0 grams in a single meal, mTORC1 turns on, signaling ribosomes to begin assembling amino acids into muscle fibers [2, 3, 5].',
              'লিউসিন সুইচের কার্যপদ্ধতি বোঝার জন্য লিউসিনকে একটি মোটরগাড়ির চাবির সাথে তুলনা করুন, আর বাকি আটটি অত্যাবশ্যক অ্যামিনো অ্যাসিডকে গাড়ির জ্বালানি তেলের সাথে তুলনা করুন [৩]। আপনার গাড়ির ফুয়েল ট্যাংকে যতই তেল থাকুক না কেন, চাবি ঘুরিয়ে ইঞ্জিন চালু না করা পর্যন্ত গাড়ি এক ইঞ্চিও নড়বে না। পেশিকোষে এই ইঞ্জিনটির নাম হলো mTORC1 নামক বৃদ্ধির সংকেত ব্যবস্থা [৫]। খাবারে প্রায় ২.৫ থেকে ৩.০ গ্রাম লিউসিন রক্তে পৌঁছালে কোষের এই সুইচটি অন হয় এবং রাইবোজোমগুলো দ্রুত অ্যামিনো অ্যাসিড জোড়া লাগিয়ে নতুন পেশিতন্তু তৈরি শুরু করে [২, ৩, ৫]।'
            ),
            l(
              'This ignition-key mechanism explains why the distribution of daily protein across meals is just as important as the total grams consumed [3]. Consuming 20 to 30 grams of high-quality protein at breakfast, 30 grams at lunch, and 30 grams at dinner repeatedly crosses the leucine threshold, triggering three distinct waves of muscle protein synthesis throughout the day [2, 3]. In contrast, eating a near-zero protein breakfast (such as white toast with jam), a low-protein lunch, and backloading 80 grams of protein into a heavy dinner only triggers muscle protein synthesis once, leaving muscle tissue in a catabolic breakdown state for the majority of the day [2, 3].',
              'এই চাবি ঘোরানোর নিয়মের কারণেই সারাদিনে প্রোটিন কীভাবে বণ্টন করে খাওয়া হচ্ছে তা মোট পরিমাণের মতোই গুরুত্বপূর্ণ [৩]। সকালে ২০–৩০ গ্রাম, দুপুরে ৩০ গ্রাম এবং রাতে ৩০ গ্রাম উচ্চমানের প্রোটিন খেলে প্রতি বেলায় লিউসিন সুইচ অন হয় এবং দিনে তিনবার পেশি তৈরির চমৎকার উদ্দীপনা সৃষ্টি হয় [২, ৩]। কিন্তু সকালে কেবল পাউরুটি-চা খেয়ে রাতে একবারে ৮০ গ্রাম প্রোটিন খেলে দিনে মাত্র একবারই সুইচ অন হয়, ফলে সারাদিনের বাকি সময়টা পেশি ক্ষয়ের ঝুঁকির মধ্যে পড়ে থাকে [২, ৩]।'
            ),
            l(
              'In practical dietary terms, reaching this 2.5 to 3.0 gram leucine threshold requires approximately 25 to 35 grams of an intact animal protein source—such as 100 grams of grilled chicken breast, 120 grams of salmon fillet, three to four whole eggs, or one scoop of dairy whey protein isolate [2, 3]. For those consuming purely plant-based foods, achieving the leucine threshold typically requires slightly larger portions—around 35 to 45 grams of total plant protein, such as a hearty bowl of tofu, edamame, and lentils—because plant proteins contain roughly six to eight percent leucine by weight compared to nine to eleven percent in dairy and poultry [1, 3].',
              'বাস্তব খাদ্যতালিকায় ২.৫ থেকে ৩.০ গ্রাম লিউসিন নিশ্চিত করতে প্রতি বেলায় প্রায় ২৫ থেকে ৩৫ গ্রাম উৎকৃষ্ট প্রাণীজ প্রোটিন প্রয়োজন—যেমন ১০০ গ্রাম মুরগির বুকের মাংস, ১২০ গ্রাম স্যামন বা রুই মাছ, ৩-৪টি গোটা ডিম অথবা এক স্কুপ হোয়ে প্রোটিন [২, ৩]। আর উদ্ভিজ্জ খাদ্য গ্রহণকারীদের ক্ষেত্রে প্রতি বেলায় প্রায় ৩৫ থেকে ৪৫ গ্রাম উদ্ভিজ্জ প্রোটিন (যেমন তোফু, সয়াবিন ও ডালের মিশ্রণ) প্রয়োজন হয়, কারণ উদ্ভিজ্জ প্রোটিনে গড়ে ৬-৮% লিউসিন থাকে যেখানে দুগ্ধ ও মাংসে লিউসিনের পরিমাণ ৯-১১% পর্যন্ত হয়ে থাকে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Nitrogen Balance & Severe Protein Malnutrition', 'নাইট্রোজেন ভারসাম্য ও মারাত্মক প্রোটিন অপুষ্টি'),
          paragraphs: [
            l(
              'Because proteins are the only macronutrient that contains dietary nitrogen, clinical nutritionists use "nitrogen balance" as an objective scoreboard to assess whether a patient\'s body is building muscle, maintaining stability, or actively wasting away [4]. Nitrogen balance is calculated by subtracting total nitrogen excreted from the body (via urinary urea, feces, and shed skin cells) from total dietary nitrogen consumed [4]. A positive nitrogen balance indicates net protein deposition, which is physiologically normal during childhood growth, pregnancy, and recovery from athletic training [2, 4].',
              'যেহেতু প্রোটিনই খাদ্যের একমাত্র নাইট্রোজেনবাহী ম্যাক্রোনিউট্রিয়েন্ট, তাই ক্লিনিক্যাল পুষ্টিবিজ্ঞানীরা "নাইট্রোজেন ভারসাম্য" বা ব্যালেন্সকে দেহের পেশি বৃদ্ধি বা অপচয়ের প্রধান মাপকাঠি হিসেবে ব্যবহার করেন [৪]। খাদ্য থেকে গৃহীত মোট নাইট্রোজেন থেকে প্রস্রাব, মল ও ত্বকের মাধ্যমে নির্গত নাইট্রোজেন বিয়োগ করে এই ভারসাম্য নির্ণয় করা হয় [৪]। একটি ধনাত্মক নাইট্রোজেন ভারসাম্য প্রমাণ করে যে দেহে নতুন প্রোটিন সঞ্চিত হচ্ছে, যা শিশুর শারীরিক বৃদ্ধি, গর্ভাবস্থা এবং ব্যায়ামের পর পেশি মেরামতের সময় স্বাভাবিক শারীরবৃত্তীয় ঘটনা [২, ৪]।'
            ),
            l(
              'Conversely, a negative nitrogen balance signals that the body is breaking down more somatic tissue than it is synthesizing, which occurs during acute burn injury, severe infections, cancer cachexia, or starvation [2, 4]. When protein deprivation is prolonged and severe in young children, it manifests in two classic forms of protein-energy malnutrition: Kwashiorkor and Marasmus [4]. Kwashiorkor occurs when a child\'s diet contains marginal carbohydrate calories (such as starchy cassava or diluted maize porridge) but virtually zero protein, often triggered when a child is abruptly displaced from breast milk by the birth of a younger sibling [4].',
              'পক্ষান্তরে একটি ঋণাত্মক নাইট্রোজেন ভারসাম্য নির্দেশ করে যে দেহ তৈরির চেয়ে ভাঙছে বেশি, যা পোড়া ক্ষত, তীব্র সংক্রমণ, ক্যান্সারের ক্ষয়রোগ কিংবা দীর্ঘমেয়াদী অনাহারে দেখা যায় [২, ৪]। শিশুদের ক্ষেত্রে এই প্রোটিনের চরম ঘাটতি দুটি ঐতিহাসিক ভয়াবহ রূপ ধারণ করে: কোয়াশিওরকর ও ম্যারাসমাস [৪]। কোয়াশিওরকর সাধারণত তখন ঘটে যখন মায়ের দুধ বন্ধ হওয়ার পর শিশুকে কেবল ভাতের মাড় বা শর্করার জাউ খাওয়ানো হয় যাতে ক্যালোরি কিছুটা থাকলেও কোনো প্রোটিন থাকে না [৪]।'
            ),
            l(
              'The clinical presentation of Kwashiorkor is characterized by bilateral pitting edema (swelling of the feet and legs), a swollen protruding abdomen, a rounded "moon face," peeling skin lesions resembling flaky paint, and reddish-orange pigmentation changes in the hair [4]. Because carbohydrate calories keep circulating insulin elevated, peripheral muscle tissue is prevented from releasing its amino acids to the liver [4]. The liver becomes completely depleted of amino acid substrates, halting its ability to synthesize albumin (causing intravascular fluid to leak into body tissues as edema) and apolipoproteins (trapping fat inside the liver and causing massive fatty hepatomegaly) [4].',
              'কোয়াশিওরকরের প্রধান লক্ষণ হলো পায়ে ও পেটে মারাত্মক পানি জমা (শোথ বা ইডিমা), ফোলা চাঁদের মতো মুখ, চামড়া খসে পড়ার মতো ঘা এবং চুল লালচে-তামাটে হয়ে যাওয়া [৪]। খাদ্যে শর্করা থাকার কারণে রক্তে ইনসুলিন চালু থাকে, যা পেশি থেকে অ্যামিনো অ্যাসিড ভাঙতে বাধা দেয় [৪]। ফলে যকৃতে কাঁচামালের অভাবে রক্তনালীর তরল ধরে রাখার প্রোটিন অ্যালবুমিন তৈরি বন্ধ হয়ে যায় এবং পেটে ও পায়ে পানি জমে; একই সাথে চর্বি পরিবহনকারী এপো-লাইপোপ্রোটিন না থাকায় লিভারে চর্বি জমে পেট অস্বাভাবিক ফুলে ওঠে [৪]।'
            ),
            l(
              'In stark contrast, Marasmus represents severe, generalized starvation of both protein and total caloric energy [4]. Children with Marasmus exhibit profound, generalized wasting of all subcutaneous adipose tissue and skeletal muscle, giving them an emaciated, shriveled appearance often described as an "old person\'s face" [4]. Because there is no dietary carbohydrate to stimulate insulin, the body\'s stress hormones (cortisol and epinephrine) break down fat and muscle systematically, preserving hepatic albumin production and preventing edema [4]. Treating these conditions requires extreme medical caution: providing high protein too rapidly triggers fatal refeeding syndrome; clinicians must first stabilize the child with specialized, low-protein therapeutic milk (F-75) before transitioning to catch-up growth formulas (F-100) [4].',
              'এর সম্পূর্ণ বিপরীতে ম্যারাসমাস হলো প্রোটিন ও ক্যালোরি উভয়েরই চরম সামগ্রিক অনাহার [৪]। ম্যারাসমাসে আক্রান্ত শিশুদের শরীরের সমস্ত চর্বি ও পেশি সম্পূর্ণ শুকিয়ে গিয়ে কঙ্কালসার অস্থিচর্মসার রূপ ধারণ করে, যাকে দেখতে ছোট বৃদ্ধ মানুষের মুখের মতো মনে হয় [৪]। এতে খাদ্যে শর্করা না থাকায় কর্টিসল হরমোন ধীরে ধীরে দেহের চর্বি ও পেশি পুড়িয়ে যকৃতে অ্যালবুমিন উৎপাদন কোনোমতে সচল রাখে, যার কারণে এতে কোনো ফোলা বা ইডিমা থাকে না [৪]। এই অপুষ্টির চিকিৎসায় চরম সতর্কতা অবলম্বন করতে হয়: হঠাৎ অতিরিক্ত প্রোটিনযুক্ত খাবার দিলে রিফিডিং সিন্ড্রোমে শিশুর মৃত্যু হতে পারে; তাই বিশ্ব স্বাস্থ্য সংস্থার নিয়ম মেনে প্রথমে নিয়ন্ত্রিত F-75 থেরাপিউটিক দুধ দিয়ে শরীর স্থিতিশীল করে পরে F-100 দুধের মাধ্যমে পূর্ণ পুষ্টি নিশ্চিত করতে হয় [৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Practical Dietary Guidelines for Protein Intake', 'প্রোটিন গ্রহণের ব্যবহারিক পুষ্টি নির্দেশিকা'),
          paragraphs: [
            l(
              'The standard Recommended Dietary Allowance (RDA) for healthy adults is set at 0.8 grams of protein per kilogram of body weight per day [4]. However, a critical concept often misunderstood by the public is that the RDA represents a statistical minimum designed to prevent clinical deficiency and negative nitrogen balance in 97.5% of the sedentary population, not an optimal target for thriving vitality, muscle strength, athletic performance, or healthy aging [2, 3]. For a 70-kilogram sedentary adult, the RDA equates to 56 grams of protein daily, which barely covers basal turnover [2, 4].',
              'সুস্থ প্রাপ্তবয়স্কদের জন্য প্রোটিনের মানসম্মত খাদ্য সুপারিশ (RDA) হলো দৈনিক প্রতি কেজি শারীরিক ওজনের জন্য ০.৮ গ্রাম [৪]। তবে সাধারণ মানুষের একটি বড় ভুল ধারণা হলো তারা এই RDA-কে সর্বোত্তম লক্ষ্য মনে করেন; প্রকৃতপক্ষে এই ০.৮ গ্রাম হলো অলস বসে থাকা মানুষের অপুষ্টি প্রতিরোধের ন্যূনতম সীমা, এটি পূর্ণ শারীরিক উদ্যম, পেশির শক্তি কিংবা দীর্ঘায়ুর জন্য কোনো সর্বোত্তম মাত্রা নয় [২, ৩]। ৭০ কেজি ওজনের একজন মানুষের জন্য এই হিসাব দাঁড়ায় দৈনিক মাত্র ৫৬ গ্রাম প্রোটিন, যা কেবল মৌলিক ক্ষয়পূরণের পক্ষে যথেষ্ট [২, ৪]।'
            ),
            l(
              'Modern clinical dietetics and sports nutrition science recommend a higher protein intake across different life stages and activity levels [2, 3]. For recreationally active adults and older individuals seeking to maintain lean muscle mass, an intake of 1.2 to 1.6 grams per kilogram per day is strongly supported by clinical trials [3]. For athletes engaged in intense resistance training, endurance events, or those on calorie-restricted diets seeking to preserve muscle while losing fat, protein targets rise to 1.6 to 2.2 grams per kilogram daily [2, 6].',
              'আধুনিক ক্লিনিক্যাল ডায়েটেটিক্স এবং স্পোর্টস মেডিসিন বিভিন্ন বয়সের মানুষের জন্য অনেক বেশি প্রোটিন গ্রহণের পরামর্শ দেয় [২, ৩]। সক্রিয় প্রাপ্তবয়স্ক এবং প্রবীণদের ক্ষেত্রে পেশিক্ষয় রোধে দৈনিক প্রতি কেজি ওজনের জন্য ১.২ থেকে ১.৬ গ্রাম প্রোটিন গ্রহণ অত্যন্ত কার্যকর প্রমাণিত হয়েছে [৩]। আর ভারী ব্যায়ামকারী অ্যাথলেট কিংবা যারা চর্বি কমিয়ে পেশি ধরে রাখতে চান তাদের ক্ষেত্রে এই মাত্রা দৈনিক ১.৬ থেকে ২.২ গ্রাম/কেজি পর্যন্ত হওয়া উচিত [২, ৬]।'
            ),
            l(
              'To optimize the biological efficiency of protein consumption, meals should be spaced three to five hours apart, delivering approximately 0.4 grams of high-quality protein per kilogram of body weight at each sitting [3]. Distributing 30 to 40 grams of protein across three solid meals ensures that muscle protein synthesis is repeatedly reignited, maximizing lean tissue recovery while minimizing unnecessary amino acid oxidation in the liver [2, 3]. For older adults, ensuring at least 35 to 40 grams of protein at breakfast is especially impactful, overcoming age-related morning anabolic resistance [3].',
              'খাদ্য প্রোটিনের সর্বোচ্চ সদ্ব্যবহার করতে প্রতি তিন থেকে পাঁচ ঘণ্টা পর পর প্রতি বেলায় শারীরিক ওজনের প্রতি কেজিতে প্রায় ০.৪ গ্রাম উচ্চমানের প্রোটিন গ্রহণ করা উচিত [৩]। সকাল, দুপুর ও রাতের প্রধান খাবারে ৩০ থেকে ৪০ গ্রাম করে প্রোটিন ভাগ করে নিলে পেশি পুনর্গঠনের প্রক্রিয়া সারাদিন সচল থাকে এবং অপচয় কমে যায় [২, ৩]। বিশেষ করে প্রবীণদের ক্ষেত্রে সকালের নাশতায় অন্তত ৩৫ থেকে ৪০ গ্রাম প্রোটিন নিশ্চিত করা বার্ধক্যজনিত পেশি দুর্বলতা কাটাতে অত্যন্ত চমৎকার ফলাফল দেয় [৩]।'
            ),
            l(
              'For individuals following a vegetarian or vegan lifestyle, meeting daily protein targets requires intentional dietary planning [1, 4]. Because plant proteins have lower concentrations of branched-chain amino acids and lower ileal digestibility, plant-based eaters benefit from increasing their total daily protein target by approximately ten to twenty percent [1, 3]. Prioritizing protein-dense plant staples—such as lentils, chickpeas, black beans, edamame, tofu, tempeh, hemp seeds, and high-protein grains like quinoa—ensures generous supplies of all essential amino acids to fuel an active, vibrant life [1, 4].',
              'যারা নিরামিষ বা উদ্ভিজ্জ খাদ্য গ্রহণ করেন তাদের ক্ষেত্রে খাদ্যের ব্যাপারে কিছুটা সচেতন পরিকল্পনা প্রয়োজন [১, ৪]। যেহেতু উদ্ভিজ্জ প্রোটিনের ইলিয়াল শোষণ হার এবং লিউসিনের ঘনত্ব কিছুটা কম থাকে, তাই নিরামিষাশীদের ক্ষেত্রে মোট প্রোটিনের দৈনিক লক্ষ্যমাত্রা সাধারণের চেয়ে ১০ থেকে ২০ শতাংশ বেশি রাখা বুদ্ধিমানের কাজ [১, ৩]। খাদ্যতালিকায় বিভিন্ন রকমের ডাল, ছোলা, তোফু, সয়াবিন, তিসির বীজ এবং কিনোয়ার মতো প্রোটিনসমৃদ্ধ উপাদান প্রাধান্য দিলে কোনো প্রাণিজ উৎস ছাড়াই সুষম ও নিখুঁত পুষ্টি নিশ্চিত করা সম্ভব [১, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Educational Takeaways', 'মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Dietary protein is a non-negotiable structural and metabolic requirement containing approximately 16% nitrogen by weight [1, 4]. Because the human body cannot store excess amino acids, consistent daily intake of the nine essential amino acids is mandatory to prevent functional tissue catabolism [2, 4]. Evaluating protein quality requires modern ileal DIAAS scoring rather than outdated fecal PDCAAS, taking full advantage of mutual amino acid complementation in plant-based eating [1].',
              'খাদ্য প্রোটিন হলো দেহের অন্যতম প্রধান কাঠামোগত উপাদান যাতে আণবিক ওজনের প্রায় ১৬% নাইট্রোজেন থাকে [১, ৪]। মানবদেহে অতিরিক্ত অ্যামিনো অ্যাসিড জমা রাখার কোনো ব্যবস্থা না থাকায় ক্ষয়পূরণ নিশ্চিত করতে প্রতিদিন নয়টি অত্যাবশ্যক অ্যামিনো অ্যাসিড গ্রহণ করা বাধ্যতামূলক [২, ৪]। প্রোটিনের মান বিচারে পুরোনো মলভিত্তিক পদ্ধতির বদলে আধুনিক ইলিয়াল DIAAS মানদণ্ড ব্যবহার করা এবং উদ্ভিজ্জ খাদ্যের পারস্পরিক পরিপূরকতা কাজে লাগানো অত্যন্ত জরুরি [১]।'
            ),
            l(
              'Muscle protein synthesis is governed by the intracellular leucine threshold (~2.5–3.0 g per meal), which turns the molecular ignition key of mTORC1 [3, 5]. Spreading protein evenly across meals throughout the day maximizes myofibrillar protein synthesis far more effectively than backloading all protein into a single large evening dinner [2, 3].',
              'পেশির প্রোটিন তৈরি মূলত প্রতি বেলার খাবারের "লিউসিন সুইচ" (~২.৫–৩.০ গ্রাম লিউসিন) স্পর্শ করার ওপর নির্ভরশীল, যা কোষে বৃদ্ধির চাবি ঘুরিয়ে দেয় [৩, ৫]। সারাদিনের খাবারগুলোতে সমানভাবে প্রোটিন বণ্টন করে খাওয়া কেবল রাতের খাবারে একবারে বেশি প্রোটিন খাওয়ার চেয়ে পেশির স্বাস্থ্য সুরক্ষায় বহুগুণ বেশি কার্যকর [২, ৩]।'
            ),
            l(
              'Nitrogen balance serves as an essential clinical indicator of somatic proteostasis, distinguishing the hypermetabolic muscle wasting of critical illness from healthy tissue accrual [4]. Severe protein-energy malnutrition produces distinct clinical pathologies—Kwashiorkor with hypoalbuminemic edema and fatty liver versus Marasmus with generalized somatic wasting—requiring phased therapeutic refeeding to avert fatal refeeding syndrome [4].',
              'নাইট্রোজেন ভারসাম্য হলো রোগের সময় দেহের পেশি ক্ষয় পর্যবেক্ষণ করার প্রধান ক্লিনিক্যাল পরিমাপক [৪]। মারাত্মক প্রোটিন অপুষ্টির দুটি রূপ—পানি জমা শোথ ও ফ্যাটি লিভারযুক্ত কোয়াশিওরকর বনাম অস্থিচর্মসার শুষ্কতার ম্যারাসমাস—চিহ্নিত করে সতর্কতার সাথে ধাপে ধাপে চিকিৎসা প্রদান রোগীর জীবন বাঁচাতে অত্যন্ত গুরুত্বপূর্ণ [৪]।'
            ),
            l(
              'While the standard baseline RDA of 0.8 g/kg/day prevents deficiency in sedentary adults, preserving lean muscle mass, optimizing bone density, and combating age-related sarcopenia demands 1.2 to 2.0 g/kg/day [2, 3]. By combining optimal protein intake with progressive resistance exercise, individuals can safeguard physical vitality and longevity throughout their lifespan [2, 6].',
              'অলস মানুষের জন্য দৈনিক ০.৮ গ্রাম/কেজি ন্যূনতম সীমা হলেও পেশির শক্তি রক্ষা, হাড়ের ঘনত্ব বৃদ্ধি এবং বার্ধক্যের পেশিক্ষয় রোধে দৈনিক ১.২ থেকে ২.০ গ্রাম/কেজি প্রোটিন গ্রহণ সর্বোত্তম [২, ৩]। পর্যাপ্ত প্রোটিনের সাথে নিয়মিত রেজিস্ট্যান্স ব্যায়ামের সমন্বয় জীবনের শেষ দিন পর্যন্ত সুস্থ, কর্মক্ষম ও দীর্ঘায়ু থাকার সবচেয়ে নির্ভরযোগ্য চাবিকাঠি [২, ৬]।'
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
          heading: l('Biochemical Architecture of Essential & Conditionally Essential Amino Acids', 'অত্যাবশ্যক ও শর্তসাপেক্ষে অত্যাবশ্যক অ্যামিনো অ্যাসিডের প্রাণরসায়ন'),
          paragraphs: [
            l(
              'Dietary proteins supply the metabolic nitrogen and carbon skeletons required for the synthesis of cellular enzymes, structural polymers, and diverse nitrogenous biomolecules—including purine and pyrimidine nucleotides, creatine, heme, biogenic amines, and glutathione [4]. The human genetic code specifies twenty L-alpha-amino acids, each consisting of a central tetrahedral alpha-carbon bonded to a basic amino group (-NH2), an acidic carboxylic acid group (-COOH), a hydrogen atom, and a distinctive chemical side chain (R-group) [4]. In all ribosomally synthesized proteins, amino acids exist exclusively in the L-enantiomer stereochemical configuration, whereas D-amino acids are restricted to bacterial peptidoglycan cell walls and specialized mammalian neuroendocrine transmission [4].',
              'খাদ্য প্রোটিন মানবদেহে কোষীয় এনজাইম, কাঠামোগত পলিমার এবং বিভিন্ন অত্যাবশ্যকীয় নাইট্রোজেনযুক্ত জৈব অণু—যেমন পিউরিন ও পিরিমিডিন নিউক্লিওটাইড, ক্রিয়েটিন, হিম, বায়োজেনিক অ্যামিন এবং গ্লুটাথায়ন তৈরির কাঁচামাল ও কার্বন কাঠামো সরবরাহ করে [৪]। মানুষের জিনগত কোডে বিশটি L-আলফা-অ্যামিনো অ্যাসিড নির্দেশিত রয়েছে, যার প্রতিটিতে একটি কেন্দ্রীয় আলফা-কার্বনের সাথে একটি ক্ষারীয় অ্যামিনো মূলক (-NH2), একটি অম্লীয় কার্বক্সিলিক মূলক (-COOH), একটি হাইড্রোজেন এবং একটি স্বতন্ত্র পার্শ্ব-শিকল (R-গ্রুপ) যুক্ত থাকে [৪]। মানবদেহের সমস্ত প্রোটিনে অ্যামিনো অ্যাসিড কেবল L-স্টেরিওআইসোমার হিসেবে অবস্থান করে, যেখানে D-অ্যামিনো অ্যাসিড মূলত ব্যাকটেরিয়ার কোষপ্রাচীর ও মানব মস্তিষ্কের বিশেষ সংকেত পরিবহনে দেখা যায় [৪]।'
            ),
            l(
              'The distinct physicochemical behaviors of the twenty amino acid side chains govern polypeptide folding, tertiary conformation, and enzymatic active sites [1, 4]. These side chains are categorized into five distinct functional classes: nonpolar aliphatic (glycine, alanine, valine, leucine, isoleucine), which drive hydrophobic collapse in protein cores; aromatic (phenylalanine, tyrosine, tryptophan), which absorb ultraviolet light and participate in pi-stacking interactions; polar uncharged (serine, threonine, cysteine, proline, asparagine, glutamine), which form essential hydrogen bonds and disulfide bridges; positively charged basic (lysine, arginine, histidine), which mediate electrostatic interactions with nucleic acids and lipid headgroups; and negatively charged acidic (aspartate, glutamate), which participate in salt bridges and divalent cation coordination [1, 4].',
              'বিশটি অ্যামিনো অ্যাসিডের পার্শ্ব-শিকলের রাসায়নিক বৈশিষ্ট্য পলিপেপটাইডের ত্রিমাত্রিক ভাঁজ, স্থায়িত্ব এবং এনজাইমের সক্রিয় স্থান গঠন নিয়ন্ত্রণ করে [১, ৪]। এই পার্শ্ব-শিকলগুলোকে পাঁচটি শ্রেণিতে ভাগ করা যায়: অপোলার অ্যালিফ্যাটিক (গ্লাইসিন, অ্যালানিন, ভ্যালিন, লিউসিন, আইসোলিউসিন), যা প্রোটিনের ভেতরের হাইড্রোফোবিক কেন্দ্র তৈরি করে; অ্যারোমেটিক (ফিনাইলঅ্যালানিন, টাইরোসিন, ট্রিপটোফ্যান), যা অতিবেগুনী আলো শোষণ করে; পোলার চার্জহীন (সেরিন, থ্রিওনিন, সিস্টিন, প্রোলিন, অ্যাসপারাজিন, গ্লুটামিন), যা হাইড্রোজেন বন্ধন ও ডাইসালফাইড সেতু গঠন করে; ধনাত্মক চার্জযুক্ত ক্ষারীয় (লাইসিন, আর্জিনিন, হিস্টিডিন), যা নিউক্লিক অ্যাসিডের সাথে যুক্ত হয়; এবং ঋণাত্মক অম্লীয় (অ্যাসপার্টেট, গ্লুটামেট), যা মেটাল আয়ন ধারণে অংশ নেয় [১, ৪]।'
            ),
            l(
              'Human metabolism cannot synthesize nine of these twenty amino acids due to the evolutionary absence of specific biosynthetic pathways—most notably the enzymes needed to synthesize branched carbon chains, aromatic rings, and sulfur-incorporating bonds [1, 4]. These nine are strictly classified as Indispensable or Essential Amino Acids: Histidine, Isoleucine, Leucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, and Valine [1, 4]. Additionally, six amino acids are designated as Conditionally Indispensable: Arginine, Cysteine, Glutamine, Glycine, Proline, and Tyrosine [1, 4]. Under physiological basal homeostasis, endogenous de novo synthesis meets baseline cellular demands; however, during severe hypermetabolic stress, thermal burn injury, major surgical sepsis, or extreme prematurity, the organ-specific synthetic capacity (such as renal arginine synthesis via the intestinal citrulline pathway) is overwhelmed, rendering exogenous dietary provision mandatory to sustain survival [1, 4].',
              'নির্দিষ্ট কিছু জটিল বায়োসিন্থেটিক এনজাইম মানব কোষে না থাকার কারণে মানবদেহ নয়টি অ্যামিনো অ্যাসিড তৈরি করতে পারে না—বিশেষ করে শাখাযুক্ত কার্বন, অ্যারোমেটিক রিং এবং সালফারযুক্ত বন্ধন তৈরির ব্যবস্থা মানবদেহে অনুপস্থিত [১, ৪]। এই নয়টি উপাদানকে কঠোরভাবে অপরিহার্য বা অত্যাবশ্যক অ্যামিনো অ্যাসিড হিসেবে গণ্য করা হয় [১, ৪]। এছাড়া ছয়টি অ্যামিনো অ্যাসিডকে শর্তসাপেক্ষে অপরিহার্য বলা হয়: আর্জিনিন, সিস্টিন, গ্লুটামিন, গ্লাইসিন, প্রোলিন ও টাইরোসিন [১, ৪]। সুস্থ স্বাভাবিক অবস্থায় দেহ এগুলো নিজের মতো তৈরি করতে পারলেও তীব্র সংক্রমণ, আগুনে পোড়া ক্ষত, ট্রমা কিংবা অপরিপক্ব নবজাতকের ক্ষেত্রে দেহের নিজস্ব উৎপাদন ক্ষমতা চরমভাবে ব্যর্থ হয়, ফলে খাদ্যের মাধ্যমে সরাসরি সরবরাহ নিশ্চিত করা বাধ্যতামূলক হয়ে ওঠে [১, ৪]।'
            ),
            l(
              'Amino acids polymerize through the formation of covalent peptide bonds—condensation reactions between the alpha-carboxyl carbon of one residue and the alpha-amino nitrogen of the adjacent residue, releasing a molecule of water [4]. The resulting amide linkage exhibits an approximately 40% double-bond character due to resonance delocalization of the pi-electron cloud between the carbonyl oxygen and the nitrogen atom [4]. This resonance restricts rotational freedom, locking the six participating atoms into a rigid, planar trans conformation (omega dihedral angle = 180 degrees) that minimizes steric hindrance between adjacent R-groups and dictates allowable protein secondary structures within the classical Ramachandran plot [4].',
              'অ্যামিনো অ্যাসিডগুলো একটির আলফা-কার্বক্সিল মূলকের সাথে অপরটির আলফা-অ্যামিনো মূলকের ঘনীভবন বিক্রিয়ার মাধ্যমে সমযোজী পেপটাইড বন্ধনে আবদ্ধ হয়ে প্রোটিন তৈরি করে [৪]। কার্বনিল অক্সিজেন এবং নাইট্রোজেন পরমাণুর মধ্যে পাই-ইলেকট্রনের রেজোন্যান্সের কারণে এই পেপটাইড বন্ধনটিতে প্রায় ৪০ শতাংশ দ্বিবন্ধন চরিত্র পরিলক্ষিত হয় [৪]। এই রেজোন্যান্স আণবিক ঘূর্ণনকে সীমাবদ্ধ করে সংশ্লিষ্ট ছয়টি পরমাণুকে একটি শক্ত, সমতল ট্রান্স কনফরমেশনে (ওমেগা ডাইহেড্রাল কোণ = ১৮০ ডিগ্রি) আটকে রাখে, যা রামচন্দ্রন প্লটের নিয়ম অনুযায়ী প্রোটিনের আলফা-হ্যালিক্স ও বিটা-শিটের নিখুঁত ত্রিমাত্রিক রূপরেখা নির্ধারণ করে [৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The DIAAS Methodology vs PDCAAS Limitations', 'DIAAS পদ্ধতির শ্রেষ্ঠত্ব বনাম PDCAAS-এর সীমাবদ্ধতা'),
          paragraphs: [
            l(
              'In 1991, an expert consultation convened by the FAO and WHO established the Protein Digestibility-Corrected Amino Acid Score (PDCAAS) as the international standard for evaluating protein quality [1]. PDCAAS was calculated by determining the amino acid score of the first limiting essential amino acid relative to a reference requirement pattern, multiplied by total tract fecal crude protein digestibility [1]. While PDCAAS represented a historical advance over primitive rodent protein efficiency ratios (PER), two decades of nutritional research revealed deep, irremediable methodological flaws that systematically distorted dietary protein planning [1].',
              '১৯৯১ সালে FAO এবং WHO একটি বিশেষজ্ঞ কমিটির মাধ্যমে প্রোটিনের মান নির্ণয়ে Protein Digestibility-Corrected Amino Acid Score (PDCAAS) পদ্ধতি আন্তর্জাতিকভাবে চালু করে [১]। এই পদ্ধতিতে খাদ্যে সবচেয়ে কম থাকা সীমিতকরণ অ্যামিনো অ্যাসিডের অনুপাতকে মলের মোট প্রোটিন হজম ক্ষমতার শতকরা হার দিয়ে গুণ করে মান হিসাব করা হতো [১]। এটি পুরোনো ইঁদুরের ওপর করা পরীক্ষার চেয়ে কিছুটা উন্নত হলেও পরবর্তী দুই দশকের গবেষণায় এর বেশ কিছু গুরুতর বৈজ্ঞানিক ত্রুটি ধরা পড়ে যা পুষ্টিবিজ্ঞানীদের বিভ্রান্ত করছিল [১]।'
            ),
            l(
              'The primary fatal flaw of PDCAAS lies in its reliance on fecal collection to determine protein digestibility [1]. In humans and monogastric animals, enzymatic digestion and physiological amino acid absorption occur exclusively within the small intestine [1, 4]. When unabsorbed dietary amino acids transit past the ileocecal valve into the cecum and colon, the trillions of resident anaerobic colonic bacteria actively deaminate and ferment those nitrogenous substrates into ammonia, indole, and microbial biomass [1]. Because these bacterially degraded amino acids are largely eliminated as excreted gaseous ammonia rather than fecal protein, fecal nitrogen analysis severely overestimates the amount of protein actually absorbed into the systemic circulation [1].',
              'PDCAAS-এর সবচেয়ে মারাত্মক ত্রুটি ছিল পরিপাক ক্ষমতা নির্ণয়ে মলের বিশ্লেষণের ওপর নির্ভরতা [১]। মানবদেহে প্রোটিনের এনজাইমেটিক পরিপাক এবং পুষ্টিকর অ্যামিনো অ্যাসিডের শোষণ কেবল ক্ষুদ্রান্ত্রের মধ্যেই সম্পন্ন হয় [১, ৪]। অপাচ্য অ্যামিনো অ্যাসিডগুলো যখন ক্ষুদ্রান্ত্র পেরিয়ে বৃহদন্ত্রে প্রবেশ করে, তখন সেখানকার কোটি কোটি ব্যাকটেরিয়া সেই প্রোটিনকে ভেঙে অ্যামোনিয়া ও গ্যাসে পরিণত করে ফেলে [১]। ফলে মলে প্রোটিন নাইট্রোজেন কম পাওয়া যায় এবং গবেষকরা ভুলবশত মনে করেন যে দেহের ভেতরে বুঝি সব প্রোটিন শোষিত হয়ে গেছে, যা প্রোটিন শোষণের হারকে কৃত্রিমভাবে অনেক বেশি দেখায় [১]।'
            ),
            l(
              'The second major defect of PDCAAS was the arbitrary administrative rule that truncated all scores exceeding 1.00 (100%) down to exactly 1.00 [1]. This statistical truncation completely obliterated the true biological superiority of ultra-high-quality proteins [1]. For instance, dairy whey protein (true DIAAS ~1.30) and whole egg protein (DIAAS ~1.20) were scored as an identical 1.00 alongside soy protein isolate (DIAAS ~0.90) [1]. Consequently, clinicians and agricultural policymakers were blind to the immense surplus of indispensable amino acids (especially lysine and leucine) provided by dairy and meat, obscuring their vital capacity to complement and rescue low-quality cereal-based diets in developing nations [1].',
              'PDCAAS-এর দ্বিতীয় প্রধান ত্রুটি ছিল একটি কৃত্রিম প্রশাসনিক নিয়ম, যার মাধ্যমে ১.০০ (বা ১০০%) এর বেশি পাওয়া সমস্ত স্কোরকে কেটে জোরপূর্বক ঠিক ১.০০ এ নামিয়ে আনা হতো [১]। এই স্কোর কর্তনের কারণে সত্যিকারের উৎকৃষ্ট প্রোটিনের পুষ্টিমান ঢাকা পড়ে যায় [১]। উদাহরণস্বরূপ, দুগ্ধজাত হোয়ে প্রোটিন (প্রকৃত DIAAS প্রায় ১.৩০) এবং ডিমের প্রোটিনকে (DIAAS ১.২০) সয়া প্রোটিনের (DIAAS ০.৯০) সমান ১.০০ হিসেবে দেখানো হতো [১]। ফলে উন্নয়নশীল দেশগুলোতে শিশুদের শস্যপ্রধান খাদ্যতালিকায় দুধ বা ডিম যোগ করলে কীভাবে পুষ্টির মান নাটকীয়ভাবে বৃদ্ধি পায়, তা পুরোনো পদ্ধতিতে গাণিতিকভাবে প্রমাণ করা সম্ভব হচ্ছিল না [১]।'
            ),
            l(
              'To eliminate these inaccuracies, the FAO officially recommended the Digestible Indispensable Amino Acid Score (DIAAS) in 2013 [1]. DIAAS is calculated using the formula: DIAAS (%) = 100 x min[(mg of digestible dietary indispensable amino acid in 1 g of dietary protein) / (mg of the same dietary indispensable amino acid in 1 g of the reference protein)] [1]. Crucially, DIAAS measures digestibility directly at the terminal ileum before colonic microbial confounding can occur, applies individual digestibility coefficients to each specific amino acid rather than assuming uniform crude protein behavior, and maintains scores above 100% without truncation [1]. DIAAS establishes three definitive clinical quality tiers: Excellent (DIAAS >= 100%), Good (DIAAS 75–99%), and Low Quality (DIAAS < 75%), revolutionizing global protein evaluation [1].',
              'এই বিভ্রান্তি দূর করতে ২০১৩ সালে FAO আনুষ্ঠানিকভাবে Digestible Indispensable Amino Acid Score (DIAAS) প্রবর্তন করে [১]। এর গাণিতিক সূত্র হলো: DIAAS (%) = ১০০ x min[(খাদ্য প্রোটিনের প্রতি গ্রামে পাচ্য অত্যাবশ্যক অ্যামিনো অ্যাসিডের মিগ্রা) / (রেফারেন্স প্রোটিনের প্রতি গ্রামে সমজাতীয় অ্যামিনো অ্যাসিডের মিগ্রা)] [১]। DIAAS বৃহদন্ত্রের ব্যাকটেরিয়ার প্রভাব এড়িয়ে ক্ষুদ্রান্ত্রের শেষ প্রান্ত (ইলিয়াম) থেকে প্রতিটি অ্যামিনো অ্যাসিডের সত্য শোষণ আলাদাভাবে পরিমাপ করে এবং কোনো কৃত্রিম স্কোর কর্তন করে না [১]। এটি প্রোটিনকে তিনটি স্তরে বিভক্ত করে: উৎকৃষ্ট (≥১০০%), ভালো (৭৫–৯৯%) এবং নিম্নমান (<৭৫%), যা বিশ্বজুড়ে প্রোটিন মূল্যায়নে এক বৈপ্লবিক পরিবর্তন এনেছে [১]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Sestrin2-Rag-mTORC1 Leucine Signaling Axis', 'সেসট্রিন২-র‍্যাগ-mTORC1 লিউসিন সংকেত প্রবাহ'),
          paragraphs: [
            l(
              'Mechanistic Target of Rapamycin Complex 1 (mTORC1) functions as the central nutrient-sensing serine/threonine protein kinase governing cellular translation initiation, ribosome biogenesis, and anabolic growth throughout eukaryotic biology [3, 5]. Activation of mTORC1 requires two independent input streams: an growth factor signal (insulin/IGF-1 acting via PI3K-Akt to relieve TSC1/TSC2 GTPase-activating protein inhibition on the small GTPase Rheb) and an indispensable amino acid signal that physically recruits mTORC1 to the lysosomal outer membrane [2, 3, 5]. Without adequate amino acids, insulin signaling alone is completely unable to stimulate mTORC1 kinase activity [5].',
              'মেকানিস্টিক টার্গেট অব র‍্যাপামাইসিন কমপ্লেক্স ১ (mTORC1) হলো কোষের বৃদ্ধি, মেসেঞ্জার আরএনএ অনুবাদ এবং রাইবোজোম তৈরির প্রধান পুষ্টি-সংবেদনশীল সেরিন/থ্রিওনিন প্রোটিন কাইনেজ এনজাইম [৩, ৫]। mTORC1 পূর্ণ সক্রিয় হতে দুটি স্বাধীন সংকেতের প্রয়োজন হয়: একটি হলো ইনসুলিন/IGF-1 সংকেত যা PI3K-Akt পথের মাধ্যমে Rheb প্রোটিনকে অবমুক্ত করে, এবং অপরটি হলো খাদ্য থেকে আসা অ্যামিনো অ্যাসিডের সরাসরি সংকেত যা সাইটোপ্লাজম থেকে mTORC1 কে লাইসোজোমের পর্দায় নোঙর করে [২, ৩, ৫]। কোষে অ্যামিনো অ্যাসিড না থাকলে কেবল ইনসুলিন দিয়ে প্রোটিন সংশ্লেষণ চালু করা কখনোই সম্ভব নয় [৫]।'
            ),
            l(
              'In skeletal muscle sarcoplasm, the principal nutrient sensor for the essential branched-chain amino acid leucine is the cytosolic sensor protein Sestrin2 [3, 5]. Sestrin2 exhibits high-affinity stereospecific binding for free L-leucine with a dissociation constant (Kd) of approximately 20 micromolar, precisely within the physiological range of fasting to postprandial intracellular leucine concentrations [5]. Under conditions of cellular leucine depletion, Sestrin2 forms a tight inhibitory physical association with GATOR2, an upstream multimeric protein complex [5]. This allows the associated GATOR1 complex to act as a GTPase-Activating Protein (GAP) toward RagA and RagB, maintaining the heterodimeric Rag GTPases in an inactive conformation (RagA/B-GDP bound to RagC/D-GTP) [5].',
              'কঙ্কাল পেশির সাইটোপ্লাজমে অত্যাবশ্যকীয় লিউসিনের উপস্থিতি পরিমাপ করার মূল সেন্সর হলো সেসট্রিন২ নামক প্রোটিন [৩, ৫]। সেসট্রিন২ মুক্ত L-লিউসিনের সাথে অত্যন্ত সংবেদনশীলভাবে যুক্ত হয় যার ডিসোসিয়েশন ধ্রুবক (Kd) প্রায় ২০ মাইক্রোমোলার, যা মানুষের উপবাস থেকে খাবার গ্রহণের পর কোষে লিউসিনের স্বাভাবিক পরিবর্তনের সাথে নিখুঁতভাবে মেলে [৫]। কোষে লিউসিন কম থাকলে সেসট্রিন২ শক্তভাবে GATOR2 কমপ্লেক্সকে চেপে ধরে রাখে [৫]। এর ফলে GATOR1 এনজাইম RagA ও RagB কে নিষ্ক্রিয় GDP অবস্থায় আটকে রাখে, ফলে প্রোটিন তৈরির কোনো সংকেত অগ্রসর হতে পারে না [৫]।'
            ),
            l(
              'Upon dietary protein digestion and amino acid influx, free intracellular leucine directly binds the internal pocket of Sestrin2 [5]. Leucine binding induces an immediate conformational rearrangement that triggers Sestrin2 dissociation from GATOR2 [5]. Once liberated from Sestrin2 inhibition, active GATOR2 inhibits GATOR1, allowing the RagA/B heterodimer to rapidly exchange GDP for GTP, while the Folliculin-FNIP complex promotes GTP hydrolysis on RagC/D to load GDP [5]. This active RagA/B-GTP / RagC/D-GDP heterodimer engages the Raptor subunit of mTORC1, rapidly translocating the entire mTORC1 multiprotein complex from the cytoplasm to the outer lysosomal limiting membrane [3, 5].',
              'খাবার হজম হয়ে রক্ত থেকে কোষে পর্যাপ্ত লিউসিন প্রবেশ করা মাত্রই তা সেসট্রিন২-এর নির্দিষ্ট পকেটে যুক্ত হয় [৫]। এর ফলে সেসট্রিন২-এর গঠন পরিবর্তিত হয়ে এটি GATOR2 থেকে বিচ্ছিন্ন হয়ে যায় [৫]। মুক্ত GATOR2 অবদমিত করে GATOR1 কে, যার ফলে RagA/B এনজাইম সক্রিয় GTP ধারণ করে এবং RagC/D নিষ্ক্রিয় GDP ধারণ করে [৫]। এই সক্রিয় Rag heterodimer তখন mTORC1-এর র‍্যাপ্টর সাব-ইউনিটকে আঁকড়ে ধরে সাইটোপ্লাজম থেকে সরাসরি লাইসোজোমের বহিঃপর্দায় টেনে নিয়ে আসে [৩, ৫]।'
            ),
            l(
              'At the lysosomal membrane surface, docked mTORC1 encounters its obligatory co-activator, GTP-loaded Rheb (Ras homolog enriched in brain) [3, 5]. Rheb-GTP binds the catalytic domain of mTOR, inducing an allosteric conformational shift that activates kinase function [5]. Fully active mTORC1 immediately phosphorylates two primary downstream translation targets: eukaryotic translation initiation factor 4E-binding protein 1 (4E-BP1) and p70 ribosomal S6 kinase 1 (p70S6K1) [2, 3, 5]. Hyperphosphorylation of 4E-BP1 triggers its detachment from eIF4E, permitting eIF4E to bind the m7G cap of mRNA and recruit the eIF4F initiation complex; concurrently, p70S6K1 phosphorylates ribosomal protein S6 and inhibits eukaryotic elongation factor 2 kinase (eEF2K), accelerating peptide chain elongation and elevating the myofibrillar fractional synthetic rate (FSR) from basal levels of 0.04%/h up to postprandial peaks of 0.08 to 0.10%/h [2, 3].',
              'লাইসোজোমের ওপর পৌঁছানোর পর mTORC1 তার চূড়ান্ত সক্রিয়কারী প্রোটিন Rheb-GTP-এর মুখোমুখি হয় [৩, ৫]। Rheb প্রোটিন mTORC1-এর কাইনেজ স্থানটিকে পূর্ণ সক্রিয় করে তোলে [৫]। সক্রিয় mTORC1 সাথে সাথে দুটি প্রধান প্রোটিনকে ফসফোরাইলেট করে: 4E-BP1 এবং p70S6K1 [২, ৩, ৫]। 4E-BP1 ফসফোরাইলেশনের ফলে এটি eIF4E থেকে বিচ্ছিন্ন হয়ে যায়, যার ফলে মেসেঞ্জার আরএনএর ৫-ক্যাপ ধরে রাইবোজোম প্রোটিন অনুবাদ শুরু করতে পারে; একই সাথে p70S6K1 রাইবোজোমের S6 প্রোটিন সক্রিয় করে এবং পেপটাইড শিকল বৃদ্ধির গতি বহুগুণ বাড়িয়ে দেয়, যা পেশির প্রোটিন তৈরির হার (FSR) উপবাসের ০.০৪%/ঘণ্টা থেকে খাবারের পর ০.০৮–০.১০%/ঘণ্টায় উন্নীত করে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Whole-Body Nitrogen Flux & Pathophysiology of Kwashiorkor vs Marasmus', 'দেহের নাইট্রোজেন প্রবাহ এবং কোয়াশিওরকর বনাম ম্যারাসমাসের রোগতত্ত্ব'),
          paragraphs: [
            l(
              'Whole-body nitrogen balance represents the net algebraic sum of protein synthesis versus degradation across all bodily compartments [4]. It is quantitatively determined by the classical nitrogen balance equation: Nitrogen Balance (g N/day) = [Dietary Protein Intake (g) / 6.25] - [24-hour Urinary Urea Nitrogen (UUN, g) + 0.2 x UUN + 2.0 g fecal nitrogen + 0.5 g dermal/sweat losses] [4]. In hypermetabolic clinical states—such as extensive thermal burns, multi-trauma, septic shock, or uncontrolled diabetic ketoacidosis—pro-inflammatory cytokines (TNF-alpha, IL-1beta, IL-6) and elevated cortisol stimulate the ubiquitin-proteasome pathway in skeletal muscle, flooding the circulation with amino acids for hepatic gluconeogenesis and acute-phase reactant synthesis, plunging the patient into profound negative nitrogen balance exceeding -10 to -20 grams of nitrogen daily (representing 60 to 125 grams of somatic muscle tissue loss every day) [2, 4].',
              'দেহের সামগ্রিক নাইট্রোজেন ভারসাম্য হলো সমস্ত অঙ্গের প্রোটিন সংশ্লেষণ ও ক্ষয়ের গাণিতিক পার্থক্য [৪]। এটি পরিমাপের প্রামাণ্য সমীকরণটি হলো: নাইট্রোজেন ব্যালেন্স (গ্রাম/দিন) = [খাদ্য প্রোটিন / ৬.২৫] - [২৪ ঘণ্টার ইউরিয়া নাইট্রোজেন (UUN) + ০.২ x UUN + ২.০ গ্রাম মল নাইট্রোজেন + ০.৫ গ্রাম ত্বকীয় অপচয়] [৪]। তীব্র সংক্রমণ, সেপসিস, পোড়া রোগী কিংবা অনিয়ন্ত্রিত ডায়াবেটিসের ক্ষেত্রে প্রদাহজনিত সাইটোকাইন ও কর্টিসল পেশির ইউবিকুইটিন-প্রোটিসোম পথকে অতিমাত্রায় সক্রিয় করে পেশি ভেঙে লিভারে গ্লুকোজ তৈরির কাঁচামাল পাঠায়, যার ফলে প্রতিদিন -১০ থেকে -২০ গ্রাম পর্যন্ত ভয়াবহ ঋণাত্মক নাইট্রোজেন ব্যালেন্স সৃষ্টি হয় (যা দৈনিক ৬০ থেকে ১২৫ গ্রাম পেশি প্রোটিনের চিরস্থায়ী অপচয়ের সমান) [২, ৪]।'
            ),
            l(
              'In severe pediatric protein-energy malnutrition (PEM), distinct neuroendocrine adaptations dictate the profound pathophysiological divergence between Kwashiorkor and Marasmus [4]. In Kwashiorkor, dietary carbohydrates provide sufficient glucose to stimulate basal pancreatic insulin secretion, but dietary protein is virtually absent [4]. Elevated circulating insulin acts as a powerful anabolic signal on peripheral tissues, shutting off lipolysis in adipose tissue and suppressing amino acid mobilization from skeletal muscle [4]. Consequently, the liver is completely starved of circulating amino acid building blocks, leading to the collapse of hepatic constitutive protein synthesis [4].',
              'শিশুদের মারাত্মক অপুষ্টিতে হরমোনজনিত ভিন্নতার কারণে কোয়াশিওরকর ও ম্যারাসমাসের রোগতাত্ত্বিক গতিপথ সম্পূর্ণ আলাদা হয়ে যায় [৪]। কোয়াশিওরকরে খাদ্যে শর্করা থাকার ফলে অগ্ন্যাশয় থেকে ইনসুলিন ক্ষরণ অব্যাহত থাকে, কিন্তু খাদ্যে প্রোটিনের মাত্রা থাকে শূন্যের কাছাকাছি [৪]। রক্তে ইনসুলিনের উপস্থিতির কারণে চর্বি ভাঙন বন্ধ থাকে এবং কঙ্কাল পেশি থেকে অ্যামিনো অ্যাসিড মুক্ত হওয়া সম্পূর্ণরূপে অবদমিত হয় [৪]। এর ফলে যকৃত রক্ত থেকে প্রোটিন তৈরির কোনো কাঁচামাল পায় না এবং যকৃতে অপরিহার্য প্রোটিন সংশ্লেষণ পুরোপুরি ধসে পড়ে [৪]।'
            ),
            l(
              'The hallmark consequences of this hepatic synthetic shutdown in Kwashiorkor are hypoalbuminemic edema and severe fatty liver (steatosis) [4]. Albumin is responsible for maintaining 75% to 80% of plasma intravascular colloid oncotic pressure; when serum albumin plummets below 20 g/L, oncotic pressure drops below capillary hydrostatic pressure, forcing fluid across capillary fenestrations into interstitial spaces to generate massive bilateral pitting edema and ascites [4]. Simultaneously, the liver fails to synthesize Apolipoprotein B-100, the essential lipid-binding scaffold required for assembling and secreting Very Low-Density Lipoproteins (VLDL) [4]. Because synthesized triglycerides cannot be packaged and exported as VLDL, neutral lipids accumulate inside hepatocytes, producing massive, hepatomegaly with severe steatosis [4].',
              'কোয়াশিওরকরে যকৃতের এই ব্যর্থতার প্রধান দুটি ফল হলো শোথ (ইডিমা) এবং ফ্যাটি লিভার [৪]। রক্তের প্লাজমায় অ্যালবুমিন ৭৫-৮০% অনকোটিক চাপ নিয়ন্ত্রণ করে; অ্যালবুমিন ২০ গ্রাম/লিটারের নিচে নেমে গেলে রক্তের তরল রক্তনালী ভেদ করে টিস্যুতে জমে মারাত্মক শোথ ও পেটে পানি (অ্যাসাইটিস) সৃষ্টি করে [৪]। একই সাথে যকৃতে এপো-লাইপোপ্রোটিন বি-১০০ (ApoB-100) তৈরি না হওয়ায় ট্রাইগ্লিসারাইডগুলো VLDL হিসেবে রক্তে বের হতে পারে না; ফলে লিভারে চর্বি জমে লিভার অস্বাভাবিক বড় ও স্ফীত হয়ে যায় [৪]।'
            ),
            l(
              'In Marasmus, by contrast, the balanced starvation of both calories and protein suppresses insulin secretion, removing the brake on peripheral tissue mobilization [4]. Unopposed cortisol, epinephrine, and glucagon drive extensive lipolysis and myofibrillar proteolysis, providing a steady flux of amino acids to hepatocytes [4]. This permits the liver to sustain baseline synthesis of albumin and apolipoproteins; intravascular oncotic pressure is maintained, preventing edema, while lipids are successfully cleared from the liver without steatosis [4]. The child wastes away symmetrically, trading somatic tissue mass for visceral metabolic survival [4]. In clinical rehabilitation of both conditions, refeeding must proceed in controlled stages to avoid fatal hypophosphatemia, hypokalemia, and cardiac failure characteristic of refeeding syndrome [4].',
              'বিপরীতে ম্যারাসমাসে শর্করা ও প্রোটিন উভয়েরই চরম ঘাটতি থাকায় ইনসুলিন সম্পূর্ণ বন্ধ থাকে [৪]। ফলে কর্টিসল ও গ্লুকাগন হরমোন অবাধে চর্বি ও পেশি ভেঙে যকৃতে অ্যামিনো অ্যাসিডের জোগান সচল রাখে [৪]। এর কল্যাণে যকৃতে অ্যালবুমিন ও এপো-বি সংশ্লেষণ কোনোমতে চলতে থাকে; ফলে রক্তনালীর অনকোটিক চাপ ঠিক থাকে, কোনো ইডিমা বা ফ্যাটি লিভার হয় না [৪]। শিশুটি কঙ্কালসার হয়ে নিজের পেশি পুড়িয়ে বেঁচে থাকে [৪]। উভয় জটিলতার পুনর্বাসনে বিশ্ব স্বাস্থ্য সংস্থার নির্দেশিকা অনুযায়ী নিয়ন্ত্রিত ধাপে খাবার না দিলে আকস্মিক ফসফেট ও পটাশিয়াম ধসে হৃদযন্ত্র বিকল হয়ে রিফিডিং সিন্ড্রোমে শিশুর মৃত্যু হতে পারে [৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Management of Sarcopenia & Anabolic Resistance', 'বার্ধক্যজনিত পেশিক্ষয় ও অ্যানাবলিক রেজিস্ট্যান্সের চিকিৎসা'),
          paragraphs: [
            l(
              'Sarcopenia is defined clinically as the progressive, age-associated decline in skeletal muscle mass, contractile strength, and functional physical performance, predisposing older adults to frailty, physical disability, loss of independence, and increased mortality [2, 3]. At the cellular level, the foundational hallmark of sarcopenia is "anabolic resistance"—a blunted fractional synthetic rate (FSR) response of aging muscle tissue to physiological hyperaminoacidemia, hyperinsulinemia, and mechanical loading [2, 3]. While a 25-year-old adult achieves maximal myofibrillar protein synthesis with as little as 15 to 20 grams of high-quality protein (providing ~1.5 to 2.0 grams of leucine), an individual over 65 years requires 35 to 45 grams of protein (delivering 3.0 to 4.0 grams of leucine) to achieve an equivalent anabolic response [2, 3].',
              'সারকোপেনিয়া হলো বার্ধক্যজনিত কারণে কঙ্কাল পেশির ধারাবাহিক অপচয়, পেশির শক্তি হ্রাস এবং শারীরিক কার্যক্ষমতার মারাত্মক পতন, যা প্রবীণদের ভঙ্গুরতা, পঙ্গুত্ব এবং মৃত্যুর ঝুঁকি বহু গুণ বাড়িয়ে দেয় [২, ৩]। কোষীয় স্তরে সারকোপেনিয়ার মূল চালিকাশক্তি হলো "অ্যানাবলিক রেজিস্ট্যান্স"—অর্থাৎ রক্তে অ্যামিনো অ্যাসিড ও ইনসুলিন থাকা সত্ত্বেও বয়স্কদের পেশিতে প্রোটিন সংশ্লেষণের হার স্বাভাবিকের চেয়ে অনেক ভোঁতা বা অকার্যকর হয়ে পড়ে [২, ৩]। যেখানে একজন ২৫ বছর বয়সী তরুণ মাত্র ১৫-২০ গ্রাম প্রোটিন (১.৫–২.০ গ্রাম লিউসিন) খেয়েই পেশির সর্বোচ্চ বৃদ্ধি নিশ্চিত করতে পারে, সেখানে ৬৫ বছরের বেশি বয়সী প্রবীণদের একই উদ্দীপনা পেতে প্রতি বেলায় অন্তত ৩৫ থেকে ৪৫ গ্রাম প্রোটিন (৩.০–৪.০ গ্রাম লিউসিন) প্রয়োজন হয় [২, ৩]।'
            ),
            l(
              'The pathophysiological mechanisms driving anabolic resistance are multifactorial, involving microvascular, intracellular, and systemic derangements [2, 3]. Aging is characterized by impaired microvascular endothelial recruitment; postprandial insulin fails to dilate muscle capillary beds effectively, diminishing the delivery of circulating amino acids to muscle interstitium [3]. Intracellularly, aging myocytes demonstrate decreased Sestrin2 expression, reduced Sestrin2-leucine binding affinity, and impaired lysosomal translocation of mTORC1 [3, 5]. Furthermore, chronic low-grade systemic inflammation (the phenomenon of "inflammaging," characterized by elevated baseline circulating TNF-alpha, IL-6, and C-reactive protein) directly antagonizes anabolic signaling and promotes basal proteolysis [2, 3].',
              'অ্যানাবলিক রেজিস্ট্যান্সের পেছনে রক্তনালী, কোষের অভ্যন্তরীণ সংকেত এবং দীর্ঘস্থায়ী প্রদাহের জটিল ভূমিকা রয়েছে [২, ৩]। বয়স বাড়ার সাথে সাথে রক্তনালীর এন্ডোথেলিয়াল প্রসারণ ক্ষমতা কমে যায়; ফলে খাবারের পর ইনসুলিন পেশির ক্ষুদ্র রক্তনালীগুলোকে যথাযথভাবে প্রসারিত করতে পারে না, যার কারণে পেশিকোষে অ্যামিনো অ্যাসিডের সরবরাহ কমে যায় [৩]। কোষের ভেতরে সেসট্রিন২ সেন্সরের সংবেদনশীলতা হ্রাস পায় এবং লাইসোজোমে mTORC1 স্থানান্তর বাধাগ্রস্ত হয় [৩, ৫]। তদুপরি বার্ধক্যের দীর্ঘস্থায়ী নিম্নমাত্রার প্রদাহ (ইনফ্লেমেজিং—যেখানে TNF-alpha ও IL-6 সাইটোকাইন বৃদ্ধি পায়) পেশির বৃদ্ধি সংকেতকে অবদমিত করে প্রোটিন ভাঙন ত্বরান্বিত করে [২, ৩]।'
            ),
            l(
              'To overcome age-related anabolic resistance, clinical dietitians employ targeted nutritional strategies centered on per-meal protein bolus sizing and even temporal distribution [2, 3]. Rather than consuming a low-protein breakfast and skewing 75% of protein into the evening meal, geriatric nutritional protocols mandate delivering 30 to 40 grams of high-quality, leucine-dense protein across all three primary meals [3]. Emphasizing intact dairy proteins (such as whey, which contains ~11% leucine by weight) or leucine-fortified plant blends guarantees that the elevated postprandial leucine threshold is reliably crossed at every meal, preserving fractional synthetic rates throughout the entire day [1, 3].',
              'বার্ধক্যের এই অ্যানাবলিক রেজিস্ট্যান্স কাটিয়ে ওঠার জন্য আধুনিক ক্লিনিক্যাল ডায়েটিশিয়ানরা প্রতি বেলার খাবারের প্রোটিন বৃদ্ধি এবং সারাদিনে সমান বণ্টনের সুনির্দিষ্ট কৌশল প্রয়োগ করেন [২, ৩]। সকালে সামান্য প্রোটিন খেয়ে রাতের খাবারে সব প্রোটিন একবারে না খেয়ে প্রবীণদের খাদ্যতালিকায় সকাল, দুপুর ও রাতের প্রতিটি প্রধান খাবারে ৩০ থেকে ৪০ গ্রাম করে উচ্চমানের প্রোটিন নিশ্চিত করা বাধ্যতামূলক [৩]। খাদ্যতালিকায় উচ্চ লিউসিনযুক্ত দুগ্ধ প্রোটিন (যেমন হোয়ে প্রোটিন, যাতে ১১% লিউসিন থাকে) অথবা লিউসিন সমৃদ্ধ উদ্ভিজ্জ মিশ্রণ অন্তর্ভুক্ত করলে প্রতি বেলায় প্রবীণদের উচ্চতর লিউসিন সুইচ নিশ্চিতভাবে অন হয় [১, ৩]।'
            ),
            l(
              'Finally, dietary protein must be coupled with progressive resistance training (PRT) to achieve maximal therapeutic synergy [2, 6]. Muscle mechanical contraction stimulates mechanosensitive diacylglycerol kinase (DGKzeta) and phosphatidic acid generation, independently activating mTORC1 and sensitizing aging myocytes to subsequent amino acid exposure for up to 24 to 48 hours [2, 5]. Co-supplementation with 3 to 5 grams per day of creatine monohydrate enhances intramuscular phosphocreatine resynthesis and promotes type-II fast-twitch muscle fiber hypertrophy, while maintaining serum 25-hydroxyvitamin D concentrations above 75 nmol/L supports nuclear vitamin D receptor (VDR) expression in skeletal muscle, dramatically reducing fall incidence in frail elderly populations [2, 6].',
              'চূড়ান্তভাবে প্রোটিনের সর্বোচ্চ ফল পেতে এর সাথে নিয়মিত প্রগ্রেসিভ রেজিস্ট্যান্স ব্যায়ামের সমন্বয় করা আবশ্যক [২, ৬]। পেশির সংকোচন মেকানোসেনসিটিভ সংকেতের মাধ্যমে সরাসরি mTORC1 কে সক্রিয় করে এবং পরবর্তী ২৪ থেকে ৪৮ ঘণ্টার জন্য প্রোটিনের প্রতি পেশিকোষের সংবেদনশীলতা বাড়িয়ে দেয় [২, ৫]। এর সাথে দৈনিক ৩ থেকে ৫ গ্রাম ক্রিয়েটিন মনোহাইড্রেট গ্রহণ পেশির টাইপ-২ ফাইবার বৃদ্ধি করে এবং রক্তে ভিটামিন D-এর মাত্রা ৭৫ nmol/L-এর ওপরে বজায় রাখলে তা বয়স্কদের পড়ে গিয়ে আঘাত পাওয়ার ঝুঁকি নাটকীয়ভাবে কমিয়ে দেয় [২, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Summary & Clinical Pearls', 'একাডেমিক সারাংশ ও ক্লিনিক্যাল মুক্তা'),
          paragraphs: [
            l(
              'Protein nutritional value is dictated by true ileal indispensable amino acid bioavailability and limiting amino acid stoichiometry relative to human requirement patterns, most rigorously quantified by the non-truncated DIAAS methodology [1]. Fecal PDCAAS is fundamentally flawed by colonic bacterial fermentation and arbitrary score capping at 1.00, which obscures the superior supplemental potential of high-quality animal proteins in mixed dietary matrices [1].',
              'প্রোটিনের পুষ্টিমান নির্ধারিত হয় ক্ষুদ্রান্ত্রের সত্য ইলিয়াল শোষণ এবং মানবদেহের চাহিদার সাথে সীমিতকরণ অ্যামিনো অ্যাসিডের সুনির্দিষ্ট অনুপাতের ওপর, যা আধুনিক DIAAS পদ্ধতির মাধ্যমে সবচেয়ে নিখুঁতভাবে নিরূপণ করা যায় [১]। পুরোনো মলভিত্তিক PDCAAS পদ্ধতি বৃহদন্ত্রের ব্যাকটেরিয়ার কারণে বিভ্রান্তিকর এবং ১.০০ এ স্কোর আটকে দেওয়ায় তা উৎকৃষ্ট প্রোটিনের সম্পূরক শক্তি প্রকাশে সম্পূর্ণ ব্যর্থ [১]।'
            ),
            l(
              'Intracellular muscle protein synthesis is mechanically controlled by the Sestrin2-GATOR-Rag-mTORC1 signaling axis [3, 5]. Sestrin2 acts as a direct cytosolic leucine sensor, relieving GATOR2 inhibition and permitting RagA/B-GTP heterodimers to dock mTORC1 to the outer lysosomal membrane where Rheb triggers catalytic kinase activation, phosphorylating 4E-BP1 and p70S6K to initiate ribosomal peptide translation [3, 5]. Crossing the ~2.5–3.0 g per-meal leucine threshold is necessary to stimulate muscle protein synthesis across a 2- to 3-hour postprandial window [2, 3].',
              'পেশির অভ্যন্তরীণ প্রোটিন সংশ্লেষণ মূলত সেসট্রিন২-র‍্যাগ-mTORC1 সংকেত অক্ষ দ্বারা নিয়ন্ত্রিত হয় [৩, ৫]। সাইটোপ্লাজমে সেসট্রিন২ মুক্ত লিউসিনের উপস্থিতি পরিমাপ করে Rag GTPase-কে সক্রিয় করে লাইসোজোমে mTORC1 নোঙর করে, যেখানে Rheb প্রোটিনের সহায়তায় এটি 4E-BP1 ও p70S6K সক্রিয় করে নতুন পেশি তৈরির প্রক্রিয়া শুরু করে [৩, ৫]। খাবারের পর দুই থেকে তিন ঘণ্টার জন্য পেশি তৈরি সচল রাখতে প্রতি বেলায় অন্তত ২.৫ থেকে ৩.০ গ্রাম লিউসিন নিশ্চিত করা আবশ্যক [২, ৩]।'
            ),
            l(
              'Quantitative nitrogen balance calculations provide indispensable objective feedback on somatic proteostasis in catabolic trauma and critical care [4]. Severe protein-energy malnutrition produces distinct pathophysiological syndromes: Kwashiorkor (carbohydrates present, insulin maintained, peripheral amino acid mobilization blocked, hepatic albumin and ApoB-100 synthesis halted, producing hypoalbuminemic pitting edema and fatty liver) versus Marasmus (balanced caloric-protein starvation, low insulin, unopposed cortisol, symmetric somatic fat and muscle wasting, preserved albumin) [4]. Refeeding protocols must proceed with phased F-75 to F-100 formulas to avert fatal refeeding syndrome [4].',
              'ক্লিনিক্যাল চিকিৎসায় নাইট্রোজেন ভারসাম্য পর্যবেক্ষণ রোগীর পেশি ক্ষয় রোধে এক অপরিহার্য দিকনির্দেশক হিসেবে কাজ করে [৪]। মারাত্মক প্রোটিন অপুষ্টির দুটি স্বতন্ত্র রূপ—ইনসুলিন ও শর্করার প্রভাবে যকৃতে প্রোটিন তৈরি বন্ধ হয়ে শোথ ও ফ্যাটি লিভারযুক্ত কোয়াশিওরকর বনাম সার্বিক অনাহারে ইনসুলিনহীন অস্থিচর্মসার ম্যারাসমাস—চিহ্নিত করে সতর্কতার সাথে ধাপে ধাপে চিকিৎসা দেওয়া জীবনরক্ষাকারী [৪]।'
            ),
            l(
              'Evidence-based protein prescribing must match metabolic demands: 0.8 g/kg/day represents a statistical minimum for healthy sedentary adults, whereas 1.2 to 1.6 g/kg/day is required to overcome anabolic resistance in healthy aging and sarcopenia [2, 3]. Athletes undergoing intensive resistance training benefit from 1.6 to 2.2 g/kg/day, with hypermetabolic burn and trauma patients requiring up to 2.5 g/kg/day [2, 6]. Coupling strategic per-meal protein distribution with progressive resistance exercise provides the gold-standard therapy for lifelong functional autonomy [2, 6].',
              'প্রমাণভিত্তিক প্রোটিনের প্রেসক্রিপশনে ব্যক্তির শারীরিক চাহিদা মেলানো অপরিহার্য: অলস মানুষের জন্য দৈনিক ০.৮ গ্রাম/কেজি ন্যূনতম সীমা হলেও বার্ধক্যের অ্যানাবলিক রেজিস্ট্যান্স কাটিয়ে উঠতে ১.২ থেকে ১.৬ গ্রাম/কেজি প্রয়োজন [২, ৩]। ব্যায়ামকারী অ্যাথলেটদের জন্য ১.৬ থেকে ২.২ গ্রাম/কেজি এবং মারাত্মক পোড়া বা ট্রমার রোগীদের জন্য ২.৫ গ্রাম/কেজি পর্যন্ত প্রোটিন নিশ্চিত করা জরুরি [২, ৬]। প্রতি বেলায় সুষম প্রোটিন এবং নিয়মিত রেজিস্ট্যান্স ব্যায়ামের সমন্বয়ই আজীবন শারীরিক সক্ষমতা রক্ষার শ্রেষ্ঠ পথ [২, ৬]।'
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
          heading: l('Quantitative Proteostasis & The Ubiquitin-Proteasome System', 'পরিমাণগত প্রোটিওস্ট্যাসিস ও ইউবিকুইটিন-প্রোটিসোম সিস্টেম'),
          paragraphs: [
            l(
              'Somatic proteostasis represents an energetically demanding, highly regulated equilibrium between ribosomal protein translation, molecular chaperone-assisted folding, and targeted proteolytic degradation [2, 4]. In adult skeletal muscle, continuous protein breakdown (MPB) is mediated predominantly by two distinct catabolic systems: the Ubiquitin-Proteasome System (UPS), which selectively degrades non-membrane and sarcomeric proteins, and macroautophagy, which clears bulk cytoplasm, protein aggregates, and damaged mitochondria [2]. Maintaining muscle mass requires that fractional synthesis rates (FSR) equal or exceed fractional breakdown rates (FBR); when breakdown rates exceed synthesis, relentless somatic wasting ensues [2, 3].',
              'মানবদেহের প্রোটিন ভারসাম্য রক্ষা বা প্রোটিওস্ট্যাসিস হলো রাইবোজোমাল অনুবাদ, মলিকুলার চ্যাপেরন দ্বারা প্রোটিনের ভাঁজ তৈরি এবং সুনির্দিষ্ট প্রোটিন ভাঙনের এক অত্যন্ত সুশৃঙ্খল ও বিপুল শক্তি-গ্রাহী জৈব-রাসায়নিক সমন্বয় [২, ৪]। কঙ্কাল পেশিতে প্রোটিন ভাঙন মূলত দুটি প্রধান পথ দ্বারা পরিচালিত হয়: ইউবিকুইটিন-প্রোটিসোম সিস্টেম (UPS), যা নির্দিষ্ট পেশি ফিলামেন্টগুলোকে ধ্বংস করে, এবং ম্যাক্রো-অটোফ্যাজি, যা ক্ষতিগ্রস্ত মাইটোকন্ড্রিয়া ও প্রোটিন বর্জ্য পরিষ্কার করে [২]। পেশির ভর ধরে রাখতে হলে প্রোটিন তৈরির হারকে ভাঙনের হারের সমান বা বেশি হতে হয়; ভাঙনের হার বেড়ে গেলেই পেশিক্ষয় শুরু হয় [২, ৩]।'
            ),
            l(
              'Under catabolic conditions—including prolonged fasting, systemic inflammation, metabolic acidosis, denervation, and elevated circulating glucocorticoids—intracellular signaling triggers the activation of Forkhead box O transcription factors (specifically FoxO1 and FoxO3a) [2]. In the unphosphorylated state, FoxO translocates from the cytoplasm into the cell nucleus, where it binds promoter regions and dramatically upregulates the transcription of two muscle-specific E3 ubiquitin ligases: Muscle RING Finger 1 (MuRF1, encoded by TRIM63) and Muscle Atrophy F-box (MAFbx / Atrogin-1, encoded by FBXO32) [2].',
              'অনাহার, দীর্ঘস্থায়ী প্রদাহ, মেটাবলিক অ্যাসিডোসিস কিংবা কর্টিসলের মাত্রা বৃদ্ধির মতো সংকটাপন্ন অবস্থায় কোষের ভেতরের FoxO (FoxO1 ও FoxO3a) ট্রান্সক্রিপশন ফ্যাক্টর সক্রিয় হয়ে ওঠে [২]। ডিফসফোরাইলেটেড অবস্থায় FoxO সাইটোপ্লাজম থেকে নিউক্লিয়াসে প্রবেশ করে এবং পেশি-নির্দিষ্ট দুটি প্রধান E3 ইউবিকুইটিন লাইগেজ জিনের প্রকাশ শতগুণ বাড়িয়ে দেয়: একটি হলো MuRF1 (TRIM63) এবং অপরটি হলো MAFbx বা অ্যাট্রোজিন-১ (FBXO32) [২]।'
            ),
            l(
              'MuRF1 operates with surgical specificity, targeting key sarcomeric structural proteins—including beta/slow and alpha/fast myosin heavy chains (MyHC), myosin-binding protein C, and actin—for polyubiquitin chain tagging at specific lysine residues [2]. Concurrently, MAFbx targets translation initiation factor eIF3f and myogenic differentiation factor MyoD, halting de novo protein synthesis and blunting satellite cell regenerative commitment [2]. The resulting polyubiquitinated myofibrillar substrates are recognized by the 19S regulatory particle of the 26S proteasome, unthreaded using ATP hydrolysis, and passed into the 20S proteolytic core, where chymotrypsin-like, trypsin-like, and caspase-like active sites degrade the contractile machinery into small peptides [2].',
              'MuRF1 এনজাইমটি অত্যন্ত নিখুঁতভাবে পেশির প্রধান সংকোচনশীল প্রোটিনগুলোকে—মায়োসিন হেভি চেইন, মায়োসিন-বাইন্ডিং প্রোটিন সি এবং অ্যাক্টিন—ইউবিকুইটিন শিকল দ্বারা চিহ্নিত করে দেয় [২]। একই সময়ে MAFbx প্রোটিন তৈরির প্রধান উপাদান eIF3f এবং পেশি তৈরির ফ্যাক্টর MyoD-কে ধ্বংসের জন্য চিহ্নিত করে, ফলে নতুন পেশি তৈরির প্রক্রিয়া পুরোপুরি বন্ধ হয়ে যায় [২]। ইউবিকুইটিন দ্বারা চিহ্নিত এই প্রোটিনগুলো ২৬S প্রোটিসোমে প্রবেশ করে এবং ATP শক্তি ব্যবহার করে এর ভেতরে থাকা এনজাইমগুলো সম্পূর্ণ পেশি কাঠামোকে ভেঙে চুরমার করে দেয় [২]।'
            ),
            l(
              'The paramount physiological counter-regulatory mechanism halting this catabolic destruction is amino acid- and insulin-mediated Akt activation [2, 5]. Active Akt kinase directly phosphorylates FoxO transcription factors on three conserved regulatory residues (Thr24, Ser256, Ser319 in FoxO1) [2]. This phosphorylation generates high-affinity docking sites for 14-3-3 chaperone proteins, which physically escort FoxO out of the nucleus and sequester it in the cytoplasm, terminating E3 ligase transcription [2]. Thus, adequate dietary essential amino acid intake not only drives ribosomal translation through mTORC1, but simultaneously shuts off the enzymatic machinery of muscle degradation at the transcriptional root [2, 5].',
              'এই ভয়াবহ পেশিক্ষয় থামানোর একমাত্র প্রাকৃতিক উপায় হলো খাদ্যের অ্যামিনো অ্যাসিড ও ইনসুলিন সংকেতের মাধ্যমে Akt কাইনেজ এনজাইম সক্রিয় করা [২, ৫]। সক্রিয় Akt এনজাইম সাথে সাথে FoxO ট্রান্সক্রিপশন ফ্যাক্টরের নির্দিষ্ট স্থানে ফসফেট যুক্ত করে দেয় [২]। এর ফলে ১৪-৩-৩ চ্যাপেরন প্রোটিন FoxO-কে নিউক্লিয়াস থেকে বের করে সাইটোপ্লাজমে বন্দি করে ফেলে, যার ফলে ধ্বংসাত্মক লাইগেজ এনজাইমের জিনগত উৎপাদন সাথে সাথে বন্ধ হয়ে যায় [২]। অর্থাৎ খাদ্যে পর্যাপ্ত প্রোটিন গ্রহণ একদিকে যেমন mTORC1 দিয়ে নতুন পেশি তৈরি করে, তেমনি অন্যদিকে পেশি ধ্বংসের আণবিক কলকব্জাও গোড়া থেকে বন্ধ করে দেয় [২, ৫]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Structural Proteomics of the Lysosomal Nutrient Sensing Machinery', 'লাইসোজোমাল পুষ্টি সংবেদন প্রক্রিয়ার স্ট্রাকচারাল প্রোটিওমিক্স'),
          paragraphs: [
            l(
              'Recent advances in cryogenic electron microscopy (cryo-EM) have resolved the atomic architecture of the massive, multi-protein lysosomal nutrient-sensing supercomplex that anchors and activates mTORC1 [3, 5]. This structural machinery comprises the vacuolar H+-ATPase (v-ATPase) proton pump, the pentameric Ragulator scaffolding complex (LAMTOR1–5), the heterodimeric Rag GTPases (RagA/B bound to RagC/D), and the multi-protein regulatory complexes GATOR1 (DEPDC5, NPRL2, NPRL3) and GATOR2 (WDR24, WDR59, MIOS, SEH1L, SEC13) [5]. Together, they form an extraordinary, membrane-anchored computational checkpoint determining whether cellular energy and nutrient stores permit anabolic protein translation [5].',
              'ক্রায়ো-ইলেকট্রন মাইক্রোস্কোপির (cryo-EM) সর্বাধুনিক অগ্রগতি লাইসোজোমের ওপর mTORC1 নোঙরকারী সুবিশাল সুপারকমপ্লেক্সের পরমাণু পর্যায়ের ত্রিমাত্রিক কাঠামো উন্মোচন করেছে [৩, ৫]। এই বিশাল আণবিক যন্ত্রটি গঠিত হয়েছে ভ্যাকুওলার প্রোটন পাম্প (v-ATPase), পেন্টামেরিক র্যাগ্যুলেটর কমপ্লেক্স (LAMTOR1–5), হেটারোডাইমেরিক Rag GTPase (RagA/B ও RagC/D), এবং দুটি নিয়ন্ত্রক প্রোটিন বলয় GATOR1 ও GATOR2 সমন্বয়ে [৫]। একসাথে এরা লাইসোজোমের বহিঃপর্দায় একটি অসাধারণ বায়ো-কম্পিউটার হিসেবে কাজ করে যা পুষ্টির প্রাপ্যতা যাচাই করে প্রোটিন তৈরির চূড়ান্ত অনুমতি প্রদান করে [৫]।'
            ),
            l(
              'High-resolution crystal and cryo-EM structures demonstrate that cytosolic Sestrin2 adopts an unusual two-domain pseudo-dimeric fold containing a deep, hydrophobic internal binding pocket flanked by Thr374, Tyr375, and Phe347 [5]. Free L-leucine buries itself completely within this hydrophobic cavern, forming hydrogen bonds with the backbone carbonyl and amide groups while its aliphatic isobutyl side chain engages in tight van der Waals contacts [5]. This deep binding induces an immediate, allosteric hinge bending that destabilizes and collapses a critical salt bridge between Asp406 of Sestrin2 and Arg203 of the WDR24 subunit of GATOR2, precipitating the physical dissociation of Sestrin2 from GATOR2 [5].',
              'পরমাণু কাঠামোর বিশ্লেষণে দেখা গেছে যে সাইটোপ্লাজমীয় সেসট্রিন২ প্রোটিন একটি দ্বি-ডোমেন ভাঁজ ধারণ করে যার ভেতরে Thr374, Tyr375 এবং Phe347 অ্যামিনো অ্যাসিড দ্বারা ঘেরা একটি অত্যন্ত গভীর হাইড্রোফোবিক পকেট থাকে [৫]। খাদ্য থেকে আসা মুক্ত L-লিউসিন এই গভীর গহ্বরে নিখুঁতভাবে ঢুকে গিয়ে হাইড্রোজেন ও ভ্যান ডার ওয়ালস বন্ধনে আবদ্ধ হয় [৫]। এর ফলে সেসট্রিন২-এর গঠনে এমন এক নাটকীয় মোচড় সৃষ্টি হয় যা GATOR2-এর WDR24 সাব-ইউনিটের সাথে থাকা সল্ট-ব্রিজকে ভেঙে ফেলে এবং সেসট্রিন২ সাথে সাথে GATOR2 থেকে ছিটকে মুক্ত হয়ে যায় [৫]।'
            ),
            l(
              'Concurrently, amino acid availability inside the lysosomal organellar lumen is interrogated by an inside-out sensing pathway mediated by SLC38A9, an 11-transmembrane domain sodium-coupled neutral amino acid transporter [5]. SLC38A9 functions as a specialized "transceptor" that directly senses luminal arginine [5]. Binding of intra-lysosomal arginine to the luminal vestibule of SLC38A9 triggers a conformational transition in its cytosolic N-terminal domain, which directly contacts the Ragulator-Rag complex [5]. This luminal arginine signal acts cooperatively with the cytosolic leucine signal, disengaging the inhibitory N-terminal plug of SLC38A9 and promoting GTP-loading on RagA [5].',
              'একই সময়ে লাইসোজোমের ভেতরের পুষ্টির মাত্রা পরিমাপ করার জন্য একটি ভেতর-থেকে-বাইরে সংকেত ব্যবস্থা কাজ করে যার নেতৃত্বে থাকে SLC38A9 নামক ১১-ট্রান্সমেমব্রেন অ্যামিনো অ্যাসিড ট্রান্সপোর্টার [৫]। SLC38A9 একটি বিশেষ "ট্রান্সসেপ্টর" হিসেবে কাজ করে যা লাইসোজোমের ভেতরের আর্জিনিনের মাত্রা পরিমাপ করে [৫]। লাইসোজোমের অভ্যন্তরীণ আর্জিনিন এর সাথে যুক্ত হলে এর সাইটোপ্লাজমীয় অংশটি র্যাগ্যুলেটরের সাথে লেগে থাকা বাধাটি সরিয়ে দেয় এবং RagA এনজাইমে GTP লোড হতে সাহায্য করে [৫]। অর্থাৎ এটি সাইটোপ্লাজমের লিউসিনের সাথে সমন্বয় করে দ্বিমুখী সবুজ সংকেত প্রদান করে [৫]।'
            ),
            l(
              'This dual inside-out (SLC38A9 sensing luminal arginine) and outside-in (Sestrin2 sensing cytosolic leucine and CASTOR1 sensing cytosolic arginine) architecture functions biologically as an absolute coincidence detection circuit [5]. Evolution has engineered this exquisite multi-layered fail-safe mechanism to guarantee that mTORC1 is never accidentally activated when amino acids are present only transiently or within a single compartment [5]. Only when amino acid pools are fully replete throughout both the cytoplasm and the lysosomal reservoir does the supercomplex permit mTORC1 docking and subsequent commitment to the massive energetic investment of ribosomal translation [2, 5].',
              'সাইটোপ্লাজমের লিউসিন (সেসট্রিন২ দ্বারা) ও আর্জিনিন (CASTOR1 দ্বারা) এবং লাইসোজোমের ভেতরের আর্জিনিন (SLC38A9 দ্বারা)—এই সমন্বিত দ্বিমুখী সংবেদন ব্যবস্থা জীববিজ্ঞানের একটি নিখুঁত "কয়েনসিডেন্স ডিটেকশন সার্কিট" বা দ্বি-চাবি নিরাপত্তা ব্যবস্থা [৫]। বিবর্তনের ধারায় এটি নিশ্চিত করা হয়েছে যাতে কোনো একটি স্থানে সাময়িক পুষ্টির উপস্থিতিতে কোষ ভুল করে বিপুল শক্তি খরচ করে প্রোটিন তৈরি শুরু না করে ফেলে [৫]। কেবল যখন কোষের সাইটোপ্লাজম এবং লাইসোজোমের অভ্যন্তর—উভয় স্থানেই পর্যাপ্ত পুষ্টি নিশ্চিত থাকে, কেবল তখনই এই সুপারকমপ্লেক্স mTORC1-কে প্রোটিন তৈরির কাজ শুরু করার অনুমতি দেয় [২, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Muscle-Full Effect & Amino Acid Oxidation Kinetics', 'পেশি-পূর্ণ প্রভাব ও অ্যামিনো অ্যাসিড জারণের গতিবিদ্যা'),
          paragraphs: [
            l(
              'Stable isotope tracer kinetic investigations in human volunteers—utilizing continuous intravenous infusions of L-[1-13C]leucine or L-[ring-13C6]phenylalanine coupled with serial percutaneous muscle biopsies—have definitively demonstrated that the stimulation of Muscle Protein Synthesis (MPS) in response to dietary protein is inherently transient [2, 3]. Following the consumption of a 20 to 40 gram bolus of intact high-quality protein, myofibrillar fractional synthetic rate (FSR) increases steeply within 45 to 60 minutes, peaks between 60 and 90 minutes post-prandially at approximately twice baseline levels, and returns completely to basal fasting rates by 120 to 180 minutes [2, 3].',
              'মানবদেহে স্টেবল আইসোটোপ ট্রেসার গবেষণায় (যেমন L-[1-13C]লিউসিন বা ফিনাইলঅ্যালানিন ইনফিউশন এবং সরাসরি পেশির বায়োপসি পরীক্ষার মাধ্যমে) সন্দেহাতীতভাবে প্রমাণিত হয়েছে যে খাদ্য প্রোটিন গ্রহণের পর পেশির প্রোটিন সংশ্লেষণ (MPS) একটি সুনির্দিষ্ট সময় পর্যন্তই বৃদ্ধি পায় [২, ৩]। ২০ থেকে ৪০ গ্রাম উচ্চমানের প্রোটিন খাওয়ার ৪৫ থেকে ৬০ মিনিটের মধ্যে পেশি তৈরির গতি (FSR) বাড়তে শুরু করে, ৬০ থেকে ৯০ মিনিটের মাথায় তা সর্বোচ্চ চূড়ায় পৌঁছায় (উপবাসের চেয়ে প্রায় দ্বিগুণ), এবং ১২০ থেকে ১৮০ মিনিটের মধ্যে তা পুনরায় স্বাভাবিক উপবাসের মাত্রায় ফিরে আসে [২, ৩]।'
            ),
            l(
              'Remarkably, this complete return of muscle protein synthesis to baseline occurs despite the fact that plasma essential amino acids, intramuscular free leucine concentrations, and intracellular phosphorylation of mTORC1 downstream targets (such as p70S6K) remain markedly elevated for several additional hours [2, 3]. This biological ceiling is termed the "Muscle-Full Effect" [3]. Once ribosomes assemble a defined quantity of new myofibrillar structural proteins, the translation elongation machinery undergoes an intrinsic refractory pause, preventing further amino acid incorporation regardless of circulating substrate availability [2, 3].',
              'সবচেয়ে আশ্চর্যজনক বিষয় হলো রক্তে যখন প্রচুর অ্যামিনো অ্যাসিড বিদ্যমান থাকে, পেশিকোষের ভেতরে লিউসিনের মাত্রা তুঙ্গে থাকে, এমনকি mTORC1-এর সংকেত তখনও চালু থাকে—ঠিক সেই মুহূর্তেও পেশি তৈরির গতি বন্ধ হয়ে যায় [২, ৩]। বিজ্ঞানের ভাষায় এই সীমাবদ্ধতাকে "পেশি-পূর্ণ প্রভাব" (Muscle-Full Effect) বলা হয় [৩]। রাইবোজোমগুলো একটি নির্দিষ্ট পরিমাণ নতুন প্রোটিন তৈরি করার পর কোষের ভেতরের পেপটাইড বৃদ্ধির যন্ত্রাংশগুলো সাময়িকভাবে সংবেদনহীন বা ক্লান্ত হয়ে পড়ে, যার ফলে রক্তে যতই কাঁচামাল থাকুক না কেন, পেশি আর অতিরিক্ত প্রোটিন গ্রহণ করতে পারে না [২, ৩]।'
            ),
            l(
              'Because skeletal muscle cannot accumulate unesterified amino acids beyond the saturation point of the intracellular free pool, excess absorbed amino acids are shunted irreversibly into catabolic oxidation and ureagenesis [2, 4]. In skeletal muscle and hepatocytes, the branched-chain amino acids (leucine, isoleucine, valine) undergo transamination via Branched-Chain Aminotransferase (BCAT2 in muscle, BCAT1 in brain) to generate branched-chain alpha-keto acids (alpha-ketoisocaproate from leucine) [4]. These keto acids are subsequently decarboxylated by the mitochondrial Branched-Chain Alpha-Keto Acid Dehydrogenase (BCKDH) multi-enzyme complex, the committed rate-limiting step in BCAA oxidation [4].',
              'যেহেতু কঙ্কাল পেশি মুক্ত অ্যামিনো অ্যাসিড ধরে রাখার কোনো গুদাম নয়, তাই পেশির ধারণক্ষমতার অতিরিক্ত অ্যামিনো অ্যাসিডগুলো যকৃতে গিয়ে জারিত হতে এবং ইউরিয়ায় রূপান্তরিত হতে বাধ্য হয় [২, ৪]। কঙ্কাল পেশি ও যকৃতে লিউসিন, আইসোলিউসিন ও ভ্যালিন ব্রাঞ্চড-চেইন অ্যামিনোট্রান্সফারেজ (BCAT) এনজাইম দ্বারা কিটো-অ্যাসিডে রূপান্তরিত হয় [৪]। এরপর মাইটোকন্ড্রিয়ার Branched-Chain Alpha-Keto Acid Dehydrogenase (BCKDH) এনজাইম কমপ্লেক্সের মাধ্যমে এদের কার্বন শিকল চিরতরে ভেঙে ফেলা হয়, যা BCAA জারণের অপরিবর্তনীয় রেট-লিমিটিং ধাপ [৪]।'
            ),
            l(
              'The decarboxylation of alpha-ketoisocaproate leads irreversibly to the synthesis of acetyl-CoA and acetoacetate, funneling the carbon skeletons into the mitochondrial tricarboxylic acid (TCA) cycle for ATP production or de novo lipogenesis [4]. Concurrently, the liberated amino groups are funneled through glutamate dehydrogenase and the urea cycle in hepatocytes, converting excess nitrogen into non-toxic urinary urea [4]. This kinetic reality reinforces the physiological necessity of distributing protein boluses across multiple distinct meals separated by 3 to 5 hours, allowing the muscle-full refractory period to reset and ensuring maximal protein retention over each 24-hour cycle [2, 3].',
              'লিউসিনের এই ভাঙনের ফলে চূড়ান্তভাবে অ্যাসিটাইল-CoA ও অ্যাসিটোঅ্যাসিটেট তৈরি হয়, যা মাইটোকন্ড্রিয়ার ক্রেবস চক্রে গিয়ে ATP শক্তি তৈরি করে কিংবা অতিরিক্ত চর্বিতে রূপান্তরিত হয় [৪]। একই সাথে নির্গত বিষাক্ত অ্যামিনো মূলকগুলো যকৃতের ইউরিয়া চক্রের মাধ্যমে নিরাপদ ইউরিয়ায় পরিণত হয়ে মূত্রের মাধ্যমে শরীর থেকে বের হয়ে যায় [৪]। এই গতিবিদ্যা প্রমাণ করে যে কেন ৩ থেকে ৫ ঘণ্টা পরপর প্রোটিন খাওয়া উচিত—যাতে পেশির সংবেদনহীন সময়টি পার হয়ে পেশি পুনরায় নতুন প্রোটিন সংশ্লেষণের ক্ষমতা ফিরে পায় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Renal Hemodynamics & The Glomerular Hyperfiltration Debate', 'বৃক্কের রক্তসঞ্চালন ও গ্লোমেরুলার হাইপারফিল্ট্রেশন বিতর্ক'),
          paragraphs: [
            l(
              'A historical and enduring controversy in clinical nutrition centers on the potential adverse effects of high-protein diets on renal physiology, traditionally anchored in the "Brenner Hypothesis" proposed by Barry M. Brenner in 1982 [4]. Brenner\'s seminal work demonstrated that following surgical reduction of renal mass in rodent models, protein feeding induced sustained increases in single-nephron glomerular filtration rate, elevated intraglomerular capillary hydrostatic pressure, and progressive glomerulosclerosis, leading to the clinical extrapolation that habitual high protein intake accelerates renal decline in humans [4].',
              'ক্লিনিক্যাল পুষ্টিবিজ্ঞানের অন্যতম ঐতিহাসিক ও দীর্ঘস্থায়ী বিতর্ক হলো উচ্চ প্রোটিনযুক্ত খাবার কিডনির ক্ষতি করে কি না, যার মূলে ছিল ১৯৮২ সালে বিজ্ঞানী ব্যারি এম. ব্রেনারের বিখ্যাত "ব্রেনার হাইপোথিসিস" [৪]। ইঁদুরের ওপর গবেষণায় ব্রেনার দেখিয়েছিলেন যে কিডনির একটি অংশ কেটে ফেলার পর বেশি প্রোটিন খাওয়ালে প্রতিটি নেফ্রনের ভেতরের রক্তচাপ বেড়ে যায় এবং ফিল্ট্রেশন রেট অত্যধিক বৃদ্ধি পায়, যা কিডনি ক্ষয় ত্বরান্বিত করে; সেখান থেকেই সাধারণ মানুষের মধ্যেও এই ধারণা ছড়িয়ে পড়ে যে বেশি প্রোটিন বুঝি কিডনি নষ্ট করে [৪]।'
            ),
            l(
              'The acute hemodynamic response of the human kidney to a dietary protein load is a well-characterized physiological adaptation [4]. Ingestion of protein stimulates pancreatic glucagon secretion and alters tubuloglomerular feedback [4]. In the proximal convoluted tubule, enhanced co-transport of filtered amino acids with sodium diminishes sodium delivery to the macula densa in the juxtaglomerular apparatus [4]. Interpreting this as reduced systemic perfusion, the macula densa releases vasodilatory prostaglandins and nitric oxide that selectively relax the afferent renal arteriole, acutely increasing glomerular plasma flow and raising whole-kidney Glomerular Filtration Rate (GFR) by 15% to 25% for several hours postprandially [4].',
              'প্রোটিন খাওয়ার পর কিডনির রক্তসঞ্চালনে সাময়িক যে পরিবর্তন ঘটে তা মূলত একটি স্বাভাবিক শারীরবৃত্তীয় অভিযোজন [৪]। প্রোটিন খেলে রক্তে গ্লুকাগন বাড়ে এবং প্রক্সিমাল টিউবিউলে সোডিয়াম ও অ্যামিনো অ্যাসিডের পুনঃশোষণ বৃদ্ধি পায় [৪]। এর ফলে ম্যাকুলা ডেনসায় সোডিয়াম কম পৌঁছায়, যা ম্যাকুলা ডেনসাকে প্ররোচিত করে প্রোস্টাগ্ল্যান্ডিন ও নাইট্রিক অক্সাইড ক্ষরণ করতে; এই সংকেতে কিডনির অন্তর্বাহী ধমনী প্রসারিত হয় এবং রক্তপ্রবাহ বৃদ্ধি পেয়ে সাময়িকভাবে গ্লোমেরুলার ফিল্ট্রেশন রেট (GFR) ১৫% থেকে ২৫% বেড়ে যায় [৪]।'
            ),
            l(
              'However, modern longitudinal human clinical trials and comprehensive meta-analyses have decisively disproven the extrapolation of the Brenner hypothesis to healthy adults [4, 6]. In individuals with intact baseline renal function, dietary protein intakes ranging from 2.0 to 3.3 grams per kilogram per day over months and years do not cause pathological declines in glomerular filtration, do not induce microalbuminuria, and produce no structural renal damage [4, 6]. The acute rise in GFR represents the deployment of normal "renal functional reserve"—identical to the physiological cardiac output elevation observed during aerobic exercise—rather than a pathological injury pattern [4].',
              'তবে আধুনিক দীর্ঘমেয়াদী ক্লিনিক্যাল ট্রায়াল এবং মেটা-অ্যানালাইসিসগুলো সুস্থ মানুষের ক্ষেত্রে ব্রেনারের এই হাইপোথিসিসকে সম্পূর্ণ ভুল প্রমাণ করেছে [৪, ৬]। যাদের কিডনি আগে থেকেই সুস্থ, তাদের ক্ষেত্রে বছরের পর বছর দৈনিক ২.০ থেকে ৩.৩ গ্রাম/কেজি পর্যন্ত উচ্চ প্রোটিন খাওয়া সত্ত্বেও কিডনির ফিল্ট্রেশন ক্ষমতার কোনো পতন হয় না, প্রস্রাবে কোনো প্রোটিন লিক হয় না এবং কিডনির কোনো কাঠামোগত ক্ষতি হয় না [৪, ৬]। প্রোটিন খেলে কিডনির সাময়িক ফিল্ট্রেশন বৃদ্ধি মূলত তার স্বাভাবিক "রেনাল রিজার্ভ"-এর বহিঃপ্রকাশ—ঠিক যেমন ব্যায়াম করলে হৃদপিণ্ডের রক্ত পাম্প করার ক্ষমতা সাময়িক বাড়ে, এটি কোনো রোগ নয় [৪]।'
            ),
            l(
              'In stark clinical contrast, in patients with established Stage 3 to 5 Chronic Kidney Disease (CKD, eGFR < 60 mL/min/1.73m2), surviving nephrons are already functioning under maximal compensatory single-nephron hyperfiltration [4]. In this compromised state, high dietary protein accelerates glomerular basement membrane detaching, podocyte loss, and progressive interstitial fibrosis [4]. For these patients, evidence-based nephrology guidelines mandate careful protein restriction (0.55 to 0.60 g/kg/day, or 0.28 to 0.43 g/kg/day supplemented with keto-acid analogues) to lower intraglomerular pressure, reduce uremic toxin generation, and preserve residual nephron mass, illustrating the fundamental clinical distinction between healthy physiology and established renal disease [4].',
              'এর সম্পূর্ণ বিপরীতে যাদের ইতোমধ্যেই ক্রনিক কিডনি ডিজিজ (CKD পর্যায় ৩-৫, eGFR < ৬০) রয়েছে, তাদের অবশিষ্ট নেফ্রনগুলো আগে থেকেই চরম চাপে কাজ করতে থাকে [৪]। এই অসুস্থ কিডনিতে বেশি প্রোটিন খেলে নেফ্রনের ওপর মারাত্মক চাপ পড়ে পোডোসাইট কোষ ধ্বংস হয় এবং দ্রুত কিডনি নষ্ট হয়ে যায় [৪]। তাই কিডনি রোগীদের জন্য আন্তর্জাতিক নির্দেশিকা অনুযায়ী দৈনিক প্রোটিন কমিয়ে ০.৫৫–০.৬০ গ্রাম/কেজি (কিংবা কিটো-অ্যানালগ ওষুধের সাথে ০.২৮–০.৪৩ গ্রাম/কেজি) সীমাবদ্ধ রাখা হয় যাতে কিডনির ওপর চাপ কমে এবং ডায়ালাইসিস পিছিয়ে দেওয়া সম্ভব হয় [৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Meta-Analytical Evidence & Muscle Hypertrophy Breakpoints', 'মেটা-অ্যানালাইসিসের প্রমাণ ও পেশি বৃদ্ধির সর্বোচ্চ সীমা'),
          paragraphs: [
            l(
              'The landmark British Journal of Sports Medicine systematic review and meta-regression by Morton et al. (2018)—encompassing 49 randomized controlled trials and 1,863 male and female participants undergoing supervised resistance exercise training—definitively resolved the longstanding scientific controversy regarding the quantitative relationship between protein intake and muscle hypertrophy [6]. The meta-analysis established that dietary protein supplementation significantly augmented resistance training-induced gains in one-repetition maximum (1RM) muscle strength and fat-free mass (FFM) accretion [6].',
              'ব্রিটিশ জার্নাল অব স্পোর্টস মেডিসিনে প্রকাশিত মর্টন ও সহকর্মীদের (২০১৮) বিখ্যাত সিস্টেমেটিক রিভিউ ও মেটা-অ্যানালাইসিসটি—যা ৪৯টি র্যান্ডমাইজড কন্ট্রোল্ড ট্রায়াল এবং ১,৮৬৩ জন নারী-পুরুষ ক্রীড়াবিদের তথ্য বিশ্লেষণ করেছে—ব্যায়ামের সাথে প্রোটিন গ্রহণের সুনির্দিষ্ট সম্পর্ক নিয়ে দশকের পর দশক ধরে চলা বৈজ্ঞানিক বিতর্কের চূড়ান্ত সমাধান দিয়েছে [৬]। মেটা-অ্যানালাইসিসটি দ্ব্যর্থহীনভাবে প্রমাণ করেছে যে ব্যায়ামের সাথে প্রোটিন গ্রহণ পেশির সর্বোচ্চ শক্তি (1RM) এবং চর্বিহীন পেশির ভর নাটকীয়ভাবে বৃদ্ধি করে [৬]।'
            ),
            l(
              'Most crucially, segmented spline regression modeling identified an explicit statistical plateau breakpoint at 1.62 grams of protein per kilogram of body weight per day (95% Confidence Interval: 1.03 to 2.20 g/kg/day) [6]. Below 1.62 g/kg/day, each incremental increase in dietary protein intake yielded a statistically significant, dose-dependent augmentation of fat-free mass accretion during resistance training [6]. However, beyond the 1.62 g/kg/day threshold, the dose-response curve flattened into a complete horizontal plateau; consuming 2.5 or 3.0 g/kg/day produced no additional statistically significant gains in muscle hypertrophy or strength in healthy adults residing in energy balance [6].',
              'সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো, গাণিতিক সেগমেন্টেড স্প্লাইন মডেলে দেখা গেছে যে প্রতিদিন প্রতি কেজি শারীরিক ওজনের জন্য ১.৬২ গ্রাম প্রোটিন গ্রহণের পর পেশি বৃদ্ধির গ্রাফটি একটি সমতলে (প্ল্যাটো) পৌঁছে যায় (৯৫% কনফিডেন্স ইন্টারভাল: ১.০৩ থেকে ২.২০ গ্রাম/কেজি) [৬]। ১.৬২ গ্রাম/কেজির নিচে প্রতি গ্রাম অতিরিক্ত প্রোটিন পেশি বৃদ্ধিতে সরাসরি অবদান রাখে; কিন্তু ১.৬২ গ্রাম অতিক্রম করার পর প্রোটিনের পরিমাণ ২.৫ বা ৩.০ গ্রামে বাড়ালেও সুস্থ স্বাভাবিক মানুষের পেশি তৈরিতে আর কোনো অতিরিক্ত সুবিধা পাওয়া যায় না [৬]।'
            ),
            l(
              'To account for the upper boundary of the 95% confidence interval and inter-individual biological variability (differences in baseline training status, digestive efficiency, and genetic desaturase/mTOR expression), clinical sports dietitians widely recommend an evidence-based daily target of 1.6 to 2.2 grams per kilogram for athletes seeking maximal muscular development [2, 6]. Furthermore, during hypocaloric dieting phases—such as competitive bodybuilding contest preparation or athletic weight-class reduction—protein requirements rise even higher, to 2.3 to 3.1 grams per kilogram of fat-free mass daily, to prevent lean tissue catabolism under conditions of aggressive energy deficit [3, 6].',
              'পরিসংখ্যানগত ৯৫% আত্মবিশ্বাস সীমার সর্বোচ্চ প্রান্ত এবং ব্যক্তিকেন্দ্রিক জেনেটিক ভিন্নতা (যেমন পরিপাক ক্ষমতা ও প্রশিক্ষণ অবস্থা) বিবেচনায় নিয়ে আধুনিক স্পোর্টস ডায়েটিশিয়ানরা ক্রীড়াবিদদের জন্য দৈনিক ১.৬ থেকে ২.২ গ্রাম/কেজি প্রোটিন গ্রহণের সুপারিশ করেন [২, ৬]। তদুপরি যখন কেউ ওজন কমানোর জন্য ক্যালোরি ঘাটতিতে (ডায়েটিং) থাকেন, তখন পেশিক্ষয় রোধ করতে এই মাত্রা আরও বাড়িয়ে চর্বিহীন পেশি ওজনের প্রতি কেজিতে ২.৩ থেকে ৩.১ গ্রাম পর্যন্ত উন্নীত করার প্রয়োজন হয় [৩, ৬]।'
            ),
            l(
              'Regarding nutrient timing, while historical bodybuilding culture promoted a rigid 30-minute "anabolic window," modern isotopic investigations reveal that the window of enhanced muscular sensitivity to amino acids remains wide open for at least 24 hours following strenuous resistance exercise [2, 6]. Total daily protein intake and consistent per-meal distribution (0.4 g/kg per meal across three to four meals) remain the primary biological drivers of long-term lean mass accrual, with immediate post-workout supplementation providing modest additional benefit primarily for those training in a fasted state [2, 3, 6].',
              'খাবার খাওয়ার সময় নির্ধারণ প্রসঙ্গে অতীতে প্রচলিত ৩০ মিনিটের তথাকথিত "অ্যানাবলিক উইন্ডো"-র ধারণাটি আধুনিক গবেষণায় পরিবর্তিত হয়েছে; প্রকৃতপক্ষে ব্যায়াম করার পর অন্তত ২৪ থেকে ৪৮ ঘণ্টা পর্যন্ত পেশিকোষে অ্যামিনো অ্যাসিডের প্রতি সংবেদনশীলতা বজায় থাকে [২, ৬]। সারাদিনের মোট প্রোটিনের পরিমাণ এবং প্রতি বেলায় সমান বণ্টন নিশ্চিত করাই দীর্ঘমেয়াদী পেশি গঠনের মূল চাবিকাঠি; ব্যায়াম শেষ হওয়ার সাথে সাথে প্রোটিন শেক খাওয়া কেবল তখনই বেশি গুরুত্বপূর্ণ যখন কেউ উপবাসের অবস্থায় ব্যায়াম করেন [২, ৩, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Advanced Research Synthesis & Emerging Methodologies', 'উন্নত গবেষণার সংশ্লেষণ ও উদীয়মান পদ্ধতিসমূহ'),
          paragraphs: [
            l(
              'Contemporary molecular nutrition has fundamentally shifted the conceptualization of dietary protein from an inert structural substrate to a dynamic, real-time signaling input governing cellular bioenergetics and proteostasis [3, 5]. The lysosomal Sestrin2-Rag-mTORC1 axis serves as an exquisite molecular rheostat, continuously balancing translation initiation against autophagic self-clearance based on intracellular indispensable amino acid availability [3, 5].',
              'আধুনিক আণবিক পুষ্টিবিজ্ঞান খাদ্য প্রোটিনকে কেবল ইট-সুরকির জড় কাঁচামাল নয়, বরং কোষের শক্তিবিজ্ঞান ও ভারসাম্য পরিচালনাকারী একটি সার্বক্ষণিক গতিশীল সংকেত অণু হিসেবে বিবেচনা করে [৩, ৫]। লাইসোজোমের সেসট্রিন২-র‍্যাগ-mTORC1 সংকেত অক্ষ একটি সূক্ষ্ম আণবিক নিয়ন্ত্রক হিসেবে কাজ করে, যা কোষের ভেতরে অত্যাবশ্যক অ্যামিনো অ্যাসিডের উপস্থিতির ভিত্তিতে প্রোটিন সংশ্লেষণ এবং অটোফ্যাজির মধ্যে নিখুঁত ভারসাম্য বজায় রাখে [৩, ৫]।'
            ),
            l(
              'In global nutritional policy and clinical dietetics, the worldwide transition from fecal PDCAAS to ileal DIAAS scoring is proving transformative [1]. By capturing true terminal ileal amino acid absorption without artificial truncation, DIAAS provides the quantitative precision required to design cost-effective, bioequivalent plant-legume rations that successfully treat severe acute malnutrition in low-income populations without relying exclusively on expensive animal dairy commodities [1, 4].',
              'বিশ্ব খাদ্য নীতি ও ডায়েটেটিক্সে পুরোনো PDCAAS ছেড়ে আধুনিক ইলিয়াল DIAAS গ্রহণ এক বিশাল অগ্রগতি এনেছে [১]। ক্ষুদ্রান্ত্রের সত্য শোষণ নিখুঁতভাবে পরিমাপের মাধ্যমে উন্নয়নশীল দেশগুলোতে ব্যয়বহুল দুধ বা মাংসের ওপর নির্ভরশীল না হয়ে কেবল স্থানীয় শস্য ও ডালের সঠিক অনুপাত মিলিয়ে অতি সুলভ মূল্যে মারাত্মক শিশুপুষ্টি নিরাময়কারী থেরাপিউটিক খাবার তৈরি করা সম্ভব হচ্ছে [১, ৪]।'
            ),
            l(
              'At the cutting edge of metabolic research, traditional acute biopsy tracer protocols are being augmented by oral Deuterium Oxide (D2O / heavy water) metabolic labeling [2, 6]. Ingested D2O equilibrates with bodily water, stably labeling the carbon-bound hydrogens of newly synthesized alanine in free-living human subjects over weeks and months [2, 6]. Analyzing muscle biopsies via gas chromatography-pyrolysis-isotope ratio mass spectrometry provides the first long-term, cumulative fractional synthetic rate measurements in naturalistic environments, bridging the longstanding divide between acute 3-hour metabolic biopsies and chronic phenotypic hypertrophy [2, 6].',
              'মেটাবলিক গবেষণার সর্বাধুনিক দিগন্তে স্বল্পকালীন বায়োপসি পরীক্ষার পাশাপাশি ভারী পানি বা ডিউটেরিয়াম অক্সাইড (D2O) ট্রেসার ব্যবহার শুরু হয়েছে [২, ৬]। রোগীকে D2O পান করালে তা দেহের পানিতে মিশে গিয়ে নতুন তৈরি হওয়া অ্যামিনো অ্যাসিডের সাথে যুক্ত হয়ে থাকে, যা সপ্তাহ ও মাসব্যাপী স্বাভাবিক চলাফেরার মধ্যে পেশি তৈরির দীর্ঘমেয়াদী হার নিখুঁতভাবে মাপতে পারে [২, ৬]। এটি তিন ঘণ্টার পরীক্ষাগারের গবেষণার সাথে মানুষের বাস্তব জীবনের দীর্ঘমেয়াদী পেশি বৃদ্ধির পার্থক্যের বৈজ্ঞানিক সেতুবন্ধন রচনা করেছে [২, ৬]।'
            ),
            l(
              'Future therapeutic horizons focus on pharmacological and nutraceutical strategies to reverse anabolic resistance in sarcopenic and cancer cachexia populations [2, 3]. Combining targeted leucine-enriched amino acid matrices, bioactive leucine metabolites (such as beta-hydroxy-beta-methylbutyrate, HMB), microvascular vasodilators (citrulline, dietary nitrates), and mechanosensitive exercise mimetics represents the multi-target frontier of precision geriatric nutrition, dedicated to extending physical independence and healthspan across the human lifespan [2, 3, 6].',
              'ভবিষ্যতের চিকিৎসা গবেষণার মূল লক্ষ্য হলো বার্ধক্যের সারকোপেনিয়া এবং ক্যান্সারের রোগীদের অ্যানাবলিক রেজিস্ট্যান্স দূর করার পুষ্টি কৌশল আবিষ্কার করা [২, ৩]। উচ্চ লিউসিনযুক্ত প্রোটিনের সাথে লিউসিনের মেটাবোলাইট HMB, রক্তনালী প্রসারক সিট্রুলিন এবং বিশেষ ব্যায়ামের সমন্বয় ঘটিয়ে বার্ধক্য চিকিৎসায় এক যুগান্তকারী দিগন্ত তৈরি হচ্ছে, যা মানুষের জীবনকালের শেষ দিন পর্যন্ত কর্মক্ষমতা ও আত্মমর্যাদা অটুট রাখতে প্রতিশ্রুতিবদ্ধ [২, ৩, ৬]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential mechanistic pathway of dietary protein digestion, DIAAS absorption, and cellular proteostasis: gastric pepsin and pancreatic protease cleavage into free amino acids and oligopeptides, true ileal absorption via apical peptide and amino acid transporters, transport via the portal vein to peripheral skeletal muscle, intracellular Sestrin2 leucine sensing, Rag GTPase-mediated translocation of mTORC1 to the outer lysosomal membrane, Rheb-GTP activation of mTORC1 kinase, downstream phosphorylation of 4E-BP1 and p70S6K, and stimulation of myofibrillar fractional synthetic rate (MPS) balanced against ubiquitin-proteasome protein degradation.',
      'খাদ্য প্রোটিন পরিপাক, DIAAS শোষণ এবং কোষীয় প্রোটিওস্ট্যাসিসের ধারাবাহিক জৈব রাসায়নিক গতিপথ: পাকস্থলীর পেপসিন ও অগ্ন্যাশয়ের প্রোটিয়েজ দ্বারা মুক্ত অ্যামিনো অ্যাসিড ও পেপটাইডে রূপান্তর, ক্ষুদ্রান্ত্রের ইলিয়ামে সত্য শোষণ, পোর্টাল শিরার মাধ্যমে পেশিতে পরিবহন, সাইটোপ্লাজমে সেসট্রিন২ দ্বারা লিউসিন সংবেদন, Rag GTPase দ্বারা লাইসোজোমে mTORC1 স্থানান্তর, Rheb-GTP দ্বারা কাইনেজ সক্রিয়করণ, 4E-BP1 ও p70S6K ফসফোরাইলেশনের মাধ্যমে পেশি প্রোটিন সংশ্লেষণ (MPS) এবং ইউবিকুইটিন-প্রোটিসোম ভাঙনের সাথে ভারসাম্য রক্ষা।'
    ),
    steps: [
      l(
        'Step 1: Dietary proteins are denatured by gastric hydrochloric acid, cleaved by pepsin, and extensively hydrolyzed in the duodenum and jejunum by pancreatic endopeptidases (trypsin, chymotrypsin, elastase) and exopeptidases (carboxypeptidases A and B) into free amino acids and di/tripeptides.',
        'ধাপ ১: খাদ্য প্রোটিন পাকস্থলীর হাইড্রোক্লোরিক অ্যাসিড দ্বারা ডিনেচার্ড হয়, পেপসিন দ্বারা আংশিক ভাঙে এবং ডুওডেনাম ও জেজুনামে অগ্ন্যাশয়ের ট্রিপসিন ও কাইমোট্রিপসিন এনজাইম দ্বারা মুক্ত অ্যামিনো অ্যাসিড ও ডাই/ট্রাই-পেপটাইডে পরিণত হয়।'
      ),
      l(
        'Step 2: Free amino acids are absorbed across enterocyte brush border membranes via sodium-dependent and independent solute carriers (such as SLC6A19 / B0AT1), while di- and tripeptides enter via the proton-coupled oligopeptide transporter PEPT1 (SLC15A1). Digestibility is sampled at the terminal ileum to establish true ileal DIAAS scores before colonic bacterial fermentation.',
        'ধাপ ২: মুক্ত অ্যামিনো অ্যাসিড সোডিয়াম-নির্ভর SLC ট্রান্সপোর্টার দ্বারা এবং ক্ষুদ্র পেপটাইডগুলো PEPT1 ট্রান্সপোর্টারের মাধ্যমে অন্ত্রের কোষে শোষিত হয়। বৃহদন্ত্রের ব্যাকটেরিয়ার প্রভাব এড়িয়ে ক্ষুদ্রান্ত্রের ইলিয়ামে সত্য শোষণ মেপে DIAAS মান নির্ধারিত হয়।'
      ),
      l(
        'Step 3: Absorbed branched-chain amino acids bypass first-pass hepatic extraction and enter peripheral skeletal myocytes via L-type amino acid transporters (LAT1 / SLC7A5). Intracellular free leucine binds the cytosolic sensor protein Sestrin2, triggering its conformational dissociation from the GATOR2 complex.',
        'ধাপ ৩: শোষিত ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিডগুলো যকৃতের মেটাবলিজম এড়িয়ে LAT1 ট্রান্সপোর্টারের মাধ্যমে কঙ্কাল পেশিকোষে প্রবেশ করে। কোষের ভেতরে মুক্ত লিউসিন সেসট্রিন২ সেন্সরে যুক্ত হয়ে একে GATOR2 কমপ্লেক্স থেকে অবমুক্ত করে।'
      ),
      l(
        'Step 4: Relieved GATOR2 inhibits GATOR1, converting the Rag GTPase heterodimer to its active RagA/B-GTP / RagC/D-GDP conformation. Active Rag GTPases bind the Raptor subunit of mTORC1, recruiting the kinase complex from the cytoplasm to the outer lysosomal limiting membrane.',
        'ধাপ ৪: মুক্ত GATOR2 অবদমিত করে GATOR1 কে, যার ফলে Rag GTPase সক্রিয় RagA/B-GTP অবস্থায় রূপান্তরিত হয়। সক্রিয় Rag heterodimer তখন mTORC1-কে সাইটোপ্লাজম থেকে সরাসরি লাইসোজোমের বহিঃপর্দায় নোঙর করে।'
      ),
      l(
        'Step 5: At the lysosomal membrane, mTORC1 encounters GTP-bound Rheb, which allosterically activates mTOR kinase activity. mTORC1 phosphorylates 4E-BP1 (releasing eIF4E for 5-prime cap mRNA translation initiation) and p70S6K (stimulating ribosomal protein S6 and eEF2 to accelerate translation elongation), driving the myofibrillar fractional synthetic rate (FSR) up to postprandial peaks of 0.08–0.10%/h.',
        'ধাপ ৫: লাইসোজোমে পৌঁছে mTORC1 Rheb-GTP প্রোটিনের সংস্পর্শে এসে পূর্ণ সক্রিয় হয়। এটি 4E-BP1 ও p70S6K এনজাইমকে ফসফোরাইলেট করে রাইবোজোমে প্রোটিন অনুবাদ ও পেপটাইড বৃদ্ধির হার বাড়িয়ে পেশি প্রোটিন সংশ্লেষণ (MPS) সর্বোচ্চ পর্যায়ে নিয়ে যায়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'Why is reaching the "leucine trigger" (~2.5–3.0 g leucine per meal) physiologically critical for stimulating muscle protein synthesis, especially in aging adults?',
      'পেশির প্রোটিন সংশ্লেষণ সক্রিয় করতে প্রতি বেলার খাবারে "লিউসিন থ্রেশহোল্ড" (~২.৫–৩.০ গ্রাম লিউসিন) স্পর্শ করা কেন শারীরবৃত্তীয়ভাবে অত্যন্ত গুরুত্বপূর্ণ, বিশেষ করে বয়স্ক ব্যক্তিদের ক্ষেত্রে?'
    ),
    options: [
      l(
        'Leucine binds intracellular Sestrin2, relieving inhibition on GATOR2 and allowing Rag GTPases to recruit mTORC1 to the lysosomal membrane for Rheb-mediated activation.',
        'লিউসিন কোষের সেসট্রিন২ সেন্সরে যুক্ত হয়ে GATOR2 কে মুক্ত করে, ফলে Rag GTPase লাইসোজোমের পর্দায় mTORC1 কে নিয়ে গিয়ে Rheb দ্বারা পূর্ণ সক্রিয় করে।'
      ),
      l(
        'Leucine acts as an irreversible allosteric inhibitor of pancreatic trypsin, preventing protein degradation in the lumen.',
        'লিউসিন অগ্ন্যাশয়ের ট্রিপসিন এনজাইমকে স্থায়ীভাবে অবদমিত করে অন্ত্রের লুমেনে প্রোটিনের অপচয় রোধ করে।'
      ),
      l(
        'Leucine directly replaces nitrogen in the urea cycle, reducing urinary nitrogen excretion to zero.',
        'লিউসিন সরাসরি ইউরিয়া চক্রে নাইট্রোজেনের স্থান দখল করে মূত্রে নাইট্রোজেনের অপচয় শূন্যে নামিয়ে আনে।'
      ),
      l(
        'Leucine is the only amino acid that can be converted into glucose via mitochondrial beta-oxidation.',
        'লিউসিন একমাত্র অ্যামিনো অ্যাসিড যা মাইটোকন্ড্রিয়াল বিটা-জারণের মাধ্যমে সরাসরি গ্লুকোজে রূপান্তরিত হতে পারে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Intracellular leucine binds Sestrin2, disrupting its inhibitory complex with GATOR2. Free GATOR2 silences GATOR1, promoting the active RagA/B-GTP state that anchors mTORC1 to the lysosomal membrane where Rheb triggers kinase activity and initiates translation.',
      'কোষের অভ্যন্তরে লিউসিন সেসট্রিন২ সেন্সরে যুক্ত হয়ে GATOR2 কে অবমুক্ত করে। মুক্ত GATOR2 র‍্যাগ GTPase কে সক্রিয় করে mTORC1 কে লাইসোজোমের পর্দায় নিয়ে যায়, যেখানে Rheb প্রোটিন দ্বারা সক্রিয় হয়ে এটি পেশির প্রোটিন তৈরি শুরু করে।'
    ),
  },
}
