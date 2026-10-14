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
              'Dietary proteins are macronutrients composed of twenty distinct amino acid building blocks joined together by covalent peptide bonds [4]. Unlike carbohydrates and fats, which consist solely of carbon, hydrogen, and oxygen, proteins uniquely contain approximately sixteen percent nitrogen by molecular weight [1, 4]. Every single cell in the human body requires a continuous supply of amino acids to repair tissues, manufacture enzymes, construct immune antibodies, and build skeletal muscle [2, 4].',
              'খাদ্য প্রোটিন হলো পেপটাইড বন্ধন দ্বারা যুক্ত বিশটি স্বতন্ত্র অ্যামিনো অ্যাসিডের সমন্বয়ে গঠিত একটি প্রধান খাদ্য উপাদান [৪]। শর্করা ও চর্বির মতো কেবল কার্বন, হাইড্রোজেন ও অক্সিজেন দিয়ে গঠিত না হয়ে প্রোটিনে আণবিক ওজনের প্রায় ১৬ শতাংশ নাইট্রোজেন বিদ্যমান থাকে [১, ৪]। মানবদেহের প্রতিটি কোষের ক্ষয়পূরণ, এনজাইম ও হরমোন তৈরি, রোগপ্রতিরোধক অ্যান্টিবডি গঠন এবং পেশির কাঠামো বজায় রাখতে নিরবচ্ছিন্ন প্রোটিনের জোগান অপরিহার্য [২, ৪]।'
            ),
            l(
              'To visualize protein metabolism, imagine a large brick house that is constantly undergoing remodeling. Every day, older bricks are pulled out of the walls and recycled or discarded, while new bricks from your diet are cemented in their place. This continuous turnover means your body cannot simply store excess protein for future years in the way it stores fat in adipose tissue; you must consume protein consistently [2, 4].',
              'প্রোটিনের কাজ বোঝার জন্য একটি ইটের বাড়ির কথা কল্পনা করুন যেখানে প্রতিনিয়ত সংস্কার কাজ চলছে। প্রতিদিন দেয়াল থেকে পুরোনো ইটগুলো খুলে ফেলা হচ্ছে এবং আপনার খাদ্য থেকে আসা নতুন ইট দিয়ে ফাঁকা জায়গা পূরণ করা হচ্ছে। এই চলমান চক্রের কারণে দেহ অতিরিক্ত প্রোটিন চর্বির মতো বছরের পর বছর জমিয়ে রাখতে পারে না; তাই নিয়মিত প্রোটিন গ্রহণ করা অত্যন্ত জরুরি [২, ৪]।'
            ),
            l(
              'Of the twenty amino acids, nine are designated as Essential (or Indispensable) Amino Acids because the human body cannot synthesize them from other precursors [4]. These nine amino acids must be obtained directly from our daily diet; if even one essential amino acid is chronically absent, whole-body protein synthesis halts [1, 4].',
              'বিশটি অ্যামিনো অ্যাসিডের মধ্যে নয়টিকে অত্যাবশ্যকীয় অ্যামিনো অ্যাসিড বলা হয় কারণ মানবদেহ নিজে এগুলো তৈরি করতে পারে না [৪]। এই নয়টি উপাদান প্রতিদিনের খাদ্যের মাধ্যমে সরাসরি গ্রহণ করা আবশ্যক; এদের যেকোনো একটির দীর্ঘমেয়াদী ঘাটতি থাকলে দেহের সামগ্রিক প্রোটিন সংশ্লেষণ প্রক্রিয়া স্থবির হয়ে পড়ে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Understanding Protein Quality, Limiting Amino Acids & DIAAS', 'প্রোটিনের গুণমান, সীমিতকরণ অ্যামিনো অ্যাসিড ও DIAAS'),
          paragraphs: [
            l(
              'Not all dietary protein sources provide the same nutritional value. Protein quality is determined by two factors: the proportion of essential amino acids matching human requirements, and how efficiently those amino acids are digested and absorbed into the bloodstream [1]. Animal proteins (eggs, dairy, poultry, fish, meat) are considered complete proteins because they contain all nine essential amino acids in optimal ratios [1, 2].',
              'খাদ্যতালিকায় সব প্রোটিনের পুষ্টিমান সমান নয়। প্রোটিনের মান দুটি বিষয়ের ওপর নির্ভর করে: মানবদেহের চাহিদার সাথে অত্যাবশ্যক অ্যামিনো অ্যাসিডের অনুপাতের সামঞ্জস্য এবং অন্ত্রে তাদের পাচন ও শোষণ ক্ষমতা [১]। প্রাণীজ প্রোটিনে (ডিম, দুধ, মাছ, মাংস) সবকটি অত্যাবশ্যক অ্যামিনো অ্যাসিড আদর্শ অনুপাতে বিদ্যমান থাকায় এদেরকে সম্পূর্ণ প্রোটিন বলা হয় [১, ২]।'
            ),
            l(
              'To understand "limiting amino acids," consider a wooden water barrel built from staves of different lengths. The barrel can only hold water up to the height of its shortest wooden stave. Similarly, your body can only build proteins up to the limit set by whichever essential amino acid is present in the lowest relative amount in that meal. In cereal grains like rice and wheat, the shortest stave is lysine; in legumes like lentils and beans, the shortest stave is methionine [1, 4].',
              'সীমিতকরণ অ্যামিনো অ্যাসিড বোঝার জন্য বিভিন্ন উচ্চতার কাঠের তক্তা দিয়ে তৈরি একটি পানির পিপার কথা ভাবুন। পিপাটিতে সবচেয়ে খাটো তক্তাটি পর্যন্তই পানি ধরে রাখা সম্ভব। একইভাবে আপনার দেহ কোনো খাবারে সবচেয়ে কম পরিমাণে থাকা অত্যাবশ্যক অ্যামিনো অ্যাসিডটির সীমা পর্যন্তই নতুন প্রোটিন তৈরি করতে পারে। চাল বা গমে সবচেয়ে কম থাকে লাইসিন, আর ডালে সবচেয়ে কম থাকে মিথায়োনিন [১, ৪]।'
            ),
            l(
              'Historically, protein quality was graded using the Protein Digestibility-Corrected Amino Acid Score (PDCAAS), but the United Nations Food and Agriculture Organization (FAO) now recommends the Digestible Indispensable Amino Acid Score (DIAAS) [1]. DIAAS measures amino acid digestion specifically at the end of the small intestine (the ileum), providing a much more accurate assessment that prevents plant and animal protein scores from being artificially inflated by colonic bacteria [1].',
              'অতীতে প্রোটিনের মান PDCAAS পদ্ধতিতে মাপা হতো, তবে জাতিসংঘের খাদ্য ও কৃষি সংস্থা (FAO) বর্তমানে DIAAS পদ্ধতি ব্যবহারের সুপারিশ করে [১]। DIAAS ক্ষুদ্রান্ত্রের শেষ প্রান্তে গিয়ে প্রতিটি অ্যামিনো অ্যাসিডের প্রকৃত শোষণ পরীক্ষা করে, ফলে বৃহদন্ত্রের ব্যাকটেরিয়ার বিভ্রান্তিকর প্রভাব ছাড়াই প্রোটিনের সঠিক শোষণযোগ্যতা জানা যায় [১]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Leucine Trigger & Muscle Protein Synthesis', 'লিউসিন সুইচ ও পেশির প্রোটিন সংশ্লেষণ'),
          paragraphs: [
            l(
              'Skeletal muscle tissue exists in a dynamic equilibrium between Muscle Protein Synthesis (building new muscle proteins) and Muscle Protein Breakdown (degrading old proteins) [2, 3]. To trigger muscle protein synthesis, the body requires a critical threshold concentration of the branched-chain amino acid leucine, often called the "leucine trigger" [3].',
              'মানবদেহের কঙ্কাল পেশি সর্বদা প্রোটিন সংশ্লেষণ (নতুন পেশি তৈরি) এবং প্রোটিন ভাঙনের (পুরোনো পেশি ক্ষয়) এক চলমান ভারসাম্যে অবস্থান করে [২, ৩]। পেশি তৈরির এই সুইচটি চালু করার জন্য লিউসিন নামক বিশেষ অ্যামিনো অ্যাসিডের একটি নির্দিষ্ট মাত্রা প্রয়োজন, যাকে বিজ্ঞানের ভাষায় "লিউসিন থ্রেশহোল্ড" বা লিউসিন সুইচ বলা হয় [৩]।'
            ),
            l(
              'Think of leucine as the ignition key in a car engine. The rest of the essential amino acids are the gasoline fuel. Even if you have a full tank of fuel, the car engine will not start running until you turn the key. Once intracellular leucine concentrations reach the trigger threshold (~2.5 to 3.0 grams in a meal), the master molecular growth switch known as mTORC1 is turned on, telling ribosomes to assemble amino acids into muscle fibers [2, 3].',
              'লিউসিনকে একটি গাড়ির চাবির সাথে তুলনা করা যেতে পারে। বাকি আটটি অত্যাবশ্যক অ্যামিনো অ্যাসিড হলো গাড়ির জ্বালানি। ট্যাংকে যতই জ্বালানি থাকুক, চাবি না ঘোরালে ইঞ্জিন চালু হবে না। খাবারে পর্যাপ্ত লিউসিন (~২.৫ থেকে ৩.০ গ্রাম) রক্তে প্রবেশ করলেই কোষের ভেতরের mTORC1 নামক বৃদ্ধির সুইচ চালু হয় এবং পেশির অ্যাক্টিন ও মায়োসিন ফিলামেন্ট তৈরি শুরু হয় [২, ৩]।'
            ),
            l(
              'Consuming approximately 25 to 35 grams of high-quality animal protein (or 35 to 45 grams of blended plant protein) provides the required 2.5 to 3.0 grams of leucine to maximize muscle protein synthesis for two to three hours [2, 3].',
              'প্রতি বেলার খাবারে প্রায় ২৫ থেকে ৩৫ গ্রাম উচ্চমানের প্রাণীজ প্রোটিন (কিংবা ৩৫ থেকে ৪৫ গ্রাম উদ্ভিজ্জ প্রোটিনের মিশ্রণ) গ্রহণ করলে তা কাঙ্ক্ষিত ২.৫ থেকে ৩.০ গ্রাম লিউসিন সরবরাহ করে পরবর্তী দুই থেকে তিন ঘণ্টার জন্য পেশির বৃদ্ধিকে সর্বোচ্চ পর্যায়ে নিয়ে যায় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Nitrogen Balance & Severe Protein Malnutrition', 'নাইট্রোজেন ভারসাম্য ও মারাত্মক প্রোটিন অপুষ্টি'),
          paragraphs: [
            l(
              'Because proteins are the sole macronutrient containing nitrogen, measuring nitrogen balance tells clinicians whether a patient is gaining, maintaining, or losing somatic body protein [4]. A positive nitrogen balance occurs during growth, pregnancy, and recovery from training, whereas a negative nitrogen balance signals muscle wasting and illness [2, 4].',
              'যেহেতু প্রোটিনই খাদ্যের একমাত্র নাইট্রোজেনবাহী উপাদান, তাই নাইট্রোজেনের ভারসাম্য হিসাব করে চিকিৎসকরা বুঝতে পারেন রোগীর দেহে পেশি ক্ষয় হচ্ছে নাকি পেশি বৃদ্ধি পাচ্ছে [৪]। বৃদ্ধি, গর্ভাবস্থা এবং ব্যায়ামের পর নিরাময়ে ধনাত্মক ভারসাম্য দেখা যায়, আর অসুস্থতায় ঋণাত্মক ভারসাম্য পেশিক্ষয়ের ইঙ্গিত দেয় [২, ৪]।'
            ),
            l(
              'Severe protein malnutrition manifests in two distinct clinical syndromes: Kwashiorkor and Marasmus [4]. Kwashiorkor occurs when children receive adequate carbohydrate calories but almost no protein; lack of liver albumin causes severe abdominal swelling and pitting edema [4]. Marasmus represents severe, generalized starvation of both calories and protein, causing profound wasting of all body fat and muscle tissues [4].',
              'মারাত্মক প্রোটিন অপুষ্টি দুটি প্রধান ক্লিনিক্যাল রূপে দেখা দেয়: কোয়াশিওরকর ও ম্যারাসমাস [৪]। কোয়াশিওরকরে খাদ্যে শর্করা থাকলেও মারাত্মক প্রোটিনের অভাব থাকে, ফলে যকৃতে অ্যালবুমিন তৈরি না হওয়ায় পেটে ও পায়ে পানি জমে শোথ হয় [৪]। অন্যদিকে ম্যারাসমাস হলো প্রোটিন ও ক্যালোরি উভয়ের চরম ঘাটতি, যার ফলে দেহের সমস্ত চর্বি ও পেশি শুকিয়ে অস্থিচর্মসার অবস্থা তৈরি হয় [৪]।'
            ),
            l(
              'Recognizing these differences is life-saving: children with Kwashiorkor face severe liver failure and fluid overload risks, requiring cautious, phased nutritional rehabilitation with electrolyte-balanced therapeutic milk (F-75 followed by F-100) to prevent fatal refeeding syndrome [4].',
              'এই পার্থক্য বোঝা অত্যন্ত জীবনরক্ষাকারী: কোয়াশিওরকরের শিশুদের যকৃতের জটিলতা ও তরল ভারসাম্যহীনতা থাকায় আকস্মিক অতিরিক্ত খাবার দিলে রিফিডিং সিন্ড্রোমে মৃত্যু হতে পারে; তাই বিশ্ব স্বাস্থ্য সংস্থার নির্দেশিকা অনুযায়ী নিয়ন্ত্রিত F-75 ও F-100 থেরাপিউটিক দুধের মাধ্যমে ধাপে ধাপে চিকিৎসা দিতে হয় [৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Practical Dietary Guidelines for Protein Intake', 'প্রোটিন গ্রহণের ব্যবহারিক পুষ্টি নির্দেশিকা'),
          paragraphs: [
            l(
              'The standard Recommended Dietary Allowance (RDA) for healthy sedentary adults is 0.8 grams of protein per kilogram of body weight per day [4]. However, this RDA represents a statistical minimum designed to prevent clinical deficiency in 97.5% of the population, not an optimal target for vitality, athletic performance, or healthy aging [2, 3].',
              'একজন সুস্থ স্বাভাবিক প্রাপ্তবয়স্কের জন্য দৈনিক ন্যূনতম প্রোটিন সুপারিশ (RDA) হলো প্রতি কেজি ওজনের জন্য ০.৮ গ্রাম [৪]। তবে এই RDA হলো অপুষ্টি প্রতিরোধের ন্যূনতম সীমা, এটি পূর্ণ শারীরিক উদ্যম, ক্রীড়াবিদদের শক্তি কিংবা বার্ধক্যে সুস্থ থাকার সর্বোত্তম মাত্রা নয় [২, ৩]।'
            ),
            l(
              'Modern sports nutrition and gerontological science demonstrate that older adults (to combat age-related sarcopenia) and active individuals require 1.2 to 2.0 grams per kilogram daily to preserve lean physical mass and bone density [2, 3, 6].',
              'আধুনিক বার্ধক্যবিজ্ঞান ও স্পোর্টস নিউট্রিশন প্রমাণ করেছে যে বয়স্কদের পেশিক্ষয় রোধে এবং সক্রিয় ব্যক্তিদের পেশি সুরক্ষায় দৈনিক ১.২ থেকে ২.০ গ্রাম/কেজি প্রোটিন গ্রহণ করা অনেক বেশি স্বাস্থ্যসম্মত [২, ৩, ৬]।'
            ),
            l(
              'For plant-based eaters, combining complementary proteins throughout the day—such as pairing lysine-poor grains (rice, wheat) with methionine-poor legumes (lentils, chickpeas, beans)—ensures that all nine essential amino acids are delivered without nutritional shortfalls [1, 4].',
              'উদ্ভিজ্জভোজীদের জন্য সারা দিনের খাদ্যতালিকায় পরিপূরক প্রোটিনের সমন্বয় করা জরুরি—যেমন শস্যজাতীয় খাদ্যের (চাল, গম) সাথে ডাল বা শিমের সমন্বয়—যাতে নয়টি অত্যাবশ্যকীয় অ্যামিনো অ্যাসিডের সবগুলোই দেহে সমানভাবে নিশ্চিত হয় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Educational Takeaways', 'মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Dietary protein is essential for cellular structure, enzyme synthesis, and lean tissue maintenance [1, 4]. Protein quality is determined by essential amino acid completeness and ileal DIAAS bioavailability [1]. Achieving the leucine threshold (~2.5–3.0 g per meal) stimulates muscle protein synthesis, while plant-based eaters can readily achieve optimal protein nutrition through thoughtful food pairing [1, 3].',
              'খাদ্য প্রোটিন কোষীয় কাঠামো, এনজাইম সংশ্লেষণ এবং পেশির ক্ষয়পূরণে অপরিহার্য [১, ৪]। প্রোটিনের মান নির্ভর করে এর অত্যাবশ্যক অ্যামিনো অ্যাসিডের উপস্থিতি এবং ইলিয়াল DIAAS শোষণযোগ্যতার ওপর [১]। প্রতি বেলায় পর্যাপ্ত লিউসিন পেশির প্রোটিন সংশ্লেষণ সক্রিয় করে, আর উদ্ভিজ্জ খাদ্যের সঠিক সমন্বয় পূর্ণাঙ্গ প্রোটিন পুষ্টি নিশ্চিত করে [১, ৩]।'
            ),
            l(
              'Maintaining whole-body nitrogen equilibrium protects against somatic wasting. Sedentary adults require at least 0.8 g/kg/day, but seniors and active individuals benefit greatly from 1.2 to 2.0 g/kg/day to safeguard against sarcopenia and functional decline [2, 3].',
              'দেহের নাইট্রোজেন ভারসাম্য রক্ষা পেশিক্ষয় প্রতিরোধ করে। সাধারণ মানুষের জন্য ন্যূনতম ০.৮ গ্রাম/কেজি প্রয়োজন হলেও বার্ধক্যজনিত দুর্বলতা কাটিয়ে উঠতে প্রবীণ ও সক্রিয় ব্যক্তিদের ১.২ থেকে ২.০ গ্রাম/কেজি প্রোটিন গ্রহণ করা অত্যন্ত ফলপ্রসূ [২, ৩]।'
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
              'Dietary proteins deliver carbon skeletons and alpha-amino nitrogen for tissue proteostasis and nitrogenous bioactive synthesis (nucleotides, creatine, heme, catecholamines, glutathione) [4]. The human body utilizes twenty genetically encoded L-alpha-amino acids. Nine are strictly essential (Histidine, Isoleucine, Leucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Valine) because animal cells lack the complex enzymatic machinery required for branched-chain, aromatic, or sulfur-containing carbon skeleton assembly [1, 4].',
              'খাদ্য প্রোটিন মানবদেহে প্রোটিন সংশ্লেষণের পাশাপাশি বিভিন্ন নাইট্রোজেনযুক্ত জৈব অণু (নিউক্লিওটাইড, ক্রিয়েটিন, হিম, ক্যাটেকোলামিন, গ্লুটাথায়ন) তৈরির কাঁচামাল সরবরাহ করে [৪]। মানবদেহের জিনগতভাবে কোডেড বিশটি L-আলফা-অ্যামিনো অ্যাসিডের মধ্যে নয়টি সম্পূর্ণ অপরিহার্য, কারণ মানব কোষে এদের শাখাযুক্ত, সুগন্ধযুক্ত বা সালফারযুক্ত কার্বন শিকল সংশ্লেষণের জন্য প্রয়োজনীয় এনজাইম থাকে না [১, ৪]।'
            ),
            l(
              'Six amino acids are classified as conditionally indispensable (Arginine, Cysteine, Glutamine, Glycine, Proline, Tyrosine) [4]. Under physiological homeostasis, endogenous synthetic rates satisfy basal demands; however, during catabolic stress, severe sepsis, thermal burn injury, or premature infancy, organ-specific synthetic capacity (such as renal arginine synthesis via the citrulline pathway) is overwhelmed, rendering exogenous dietary provision mandatory [1, 4].',
              'ছয়টি অ্যামিনো অ্যাসিড শর্তসাপেক্ষে অপরিহার্য হিসেবে চিহ্নিত (আর্জিনিন, সিস্টিন, গ্লুটামিন, গ্লাইসিন, প্রোলিন, টাইরোসিন) [৪]। সুস্থ অবস্থায় দেহ এগুলো তৈরি করতে পারলেও তীব্র সংক্রমণ, পোড়া ক্ষত, ট্রমা বা অপরিপক্ব নবজাতকের ক্ষেত্রে এদের নিজস্ব উৎপাদন ক্ষমতা চাহিদার তুলনায় অপর্যাপ্ত হয়ে পড়ে, ফলে খাদ্যের মাধ্যমে সরাসরি সরবরাহ বাধ্যতামূলক হয় [১, ৪]।'
            ),
            l(
              'The chemical properties of amino acid side chains (R-groups)—including hydrophobic aliphatics (leucine, isoleucine, valine), positively charged basics (lysine, arginine, histidine), polar uncharged (serine, threonine, glutamine, asparagine), and aromatic rings (phenylalanine, tyrosine, tryptophan)—govern protein tertiary folding, enzyme catalytic clefts, and membrane transporter affinity [1, 4].',
              'অ্যামিনো অ্যাসিডের পার্শ্ব-শিকলের (R-গ্রুপ) রাসায়নিক ধর্ম—যেমন হাইড্রোফোবিক অ্যালিফ্যাটিক (লিউসিন, আইসোলিউসিন, ভ্যালিন), ধনাত্মক চার্জযুক্ত ক্ষারীয় (লাইসিন, আর্জিনিন, হিস্টিডিন) এবং অ্যারোমেটিক রিং—প্রোটিনের ত্রিমাত্রিক ভাঁজ, এনজাইমের সক্রিয় স্থান এবং মেমব্রেন ট্রান্সপোর্টারের কার্যক্ষমতা নিয়ন্ত্রণ করে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The DIAAS Methodology vs PDCAAS Limitations', 'DIAAS পদ্ধতির শ্রেষ্ঠত্ব বনাম PDCAAS-এর সীমাবদ্ধতা'),
          paragraphs: [
            l(
              'In 1991, the FAO/WHO introduced the Protein Digestibility-Corrected Amino Acid Score (PDCAAS), defining protein quality by multiplying the amino acid score of the limiting amino acid by total fecal crude protein digestibility [1]. However, PDCAAS suffers from two major scientific defects: first, total tract fecal collection includes bacterial fermentation products from the colon, where unabsorbed ileal amino acids are deaminated by microbes into ammonia and excreted, creating an artificial overestimation of true absorption [1].',
              '১৯৯১ সালে প্রবর্তিত PDCAAS পদ্ধতিতে মলের মোট প্রোটিন হজম ক্ষমতার ভিত্তিতে মান হিসাব করা হতো [১]। এর প্রধান দুটি বৈজ্ঞানিক ত্রুটি ছিল: প্রথমত, মলাশয়ের ক্ষতিকর ব্যাকটেরিয়া অপাচ্য অ্যামিনো অ্যাসিডকে গ্যাসে ও অ্যামোনিয়ায় রূপান্তরিত করায় মলে প্রোটিন কম পাওয়া যেত, ফলে প্রোটিন শোষণ হারকে কৃত্রিমভাবে বেশি মনে হতো [১]।'
            ),
            l(
              'Second, PDCAAS truncates all scores exceeding 1.00 down to 100%, thereby treating proteins with exceptional amino acid density (whey protein at ~1.25 or egg at ~1.20) as identical to proteins that barely meet baseline standards (soy protein isolate at 1.00) [1]. In 2013, the FAO replaced PDCAAS with DIAAS, which measures the true ileal digestibility of each individual amino acid collected at the terminal ileum in humans or growing pigs, without truncation, accurately capturing complementary blending values in mixed diets [1].',
              'দ্বিতীয়ত, PDCAAS ১.০০ এর ওপর সব স্কোর কেটে ১.০০ করে দেয়; ফলে হোয়ে প্রোটিন (স্কোর ১.২৫) বা ডিমের প্রোটিন (১.২০) যে সয়া প্রোটিনের (১.০০) চেয়ে অনেক বেশি শক্তিশালী তা বোঝা যেত না [১]। ২০১৩ সালে FAO অনুমোদিত DIAAS পদ্ধতি কোনো স্কোর কর্তন ছাড়াই ইলিয়ামে প্রতিটি অ্যামিনো অ্যাসিডের সত্য শোষণ মেপে মিশ্র খাদ্যতালিকায় প্রোটিনের শ্রেষ্ঠত্ব নিশ্চিত করে [১]।'
            ),
            l(
              'The DIAAS mathematical formula is defined as: DIAAS (%) = 100 x [(mg of digestible dietary indispensable amino acid in 1 g of dietary protein) / (mg of the same dietary indispensable amino acid in 1 g of the reference protein)]. DIAAS values are categorized into three clinical tiers: Excellent (≥100%), Good (75–99%), and Low (<75%, requiring supplementation or blending) [1].',
              'DIAAS এর গাণিতিক সূত্র: DIAAS (%) = ১০০ x [(খাদ্য প্রোটিনের প্রতি গ্রামে পাচ্য অত্যাবশ্যক অ্যামিনো অ্যাসিডের মিগ্রা) / (রেফারেন্স প্রোটিনের প্রতি গ্রামে সমজাতীয় অ্যামিনো অ্যাসিডের মিগ্রা)]। DIAAS তিনটি স্তরে বিভক্ত: উৎকৃষ্ট (≥১০০%), ভালো (৭৫–৯৯%) এবং নিম্নমান (<৭৫%, যা পরিপূরক প্রোটিন ছাড়া এককভাবে গ্রহণ অনুচিত) [১]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Sestrin2-Rag-mTORC1 Leucine Signaling Axis', 'সেসট্রিন২-র‍্যাগ-mTORC1 লিউসিন সংকেত প্রবাহ'),
          paragraphs: [
            l(
              'Mechanistic Target of Rapamycin Complex 1 (mTORC1) acts as the master nutrient-sensing Ser/Thr kinase regulating eukaryotic protein translation and cell growth [3, 5]. The activation of mTORC1 by amino acids requires a specialized lysosomal translocation cascade independent of insulin-PI3K-Akt signaling [2, 3, 5]. In skeletal muscle sarcoplasm, the cytosolic sensor protein Sestrin2 directly binds free leucine with a dissociation constant (Kd) of ~20 μM [3, 5].',
              'কোষের বৃদ্ধি এবং মেসেঞ্জার আরএনএ থেকে প্রোটিন তৈরির প্রধান নিয়ন্ত্রক হলো মেকানিস্টিক টার্গেট অব র‍্যাপামাইসিন কমপ্লেক্স ১ (mTORC1) [৩, ৫]। ইনসুলিন সংকেতের বাইরে গিয়ে সরাসরি অ্যামিনো অ্যাসিড দ্বারা mTORC1 সক্রিয় হতে হলে একে কোষের লাইসোজোমে পৌঁছাতে হয় [২, ৩, ৫]। কঙ্কাল পেশির সাইটোপ্লাজমে অবস্থিত সেসট্রিন২ প্রোটিন মুক্ত লিউসিনের ঘনত্ব সরাসরি পরিমাপ করে [৩, ৫]।'
            ),
            l(
              'Under low intracellular leucine concentrations, Sestrin2 physically associates with GATOR2, allowing GATOR1 to act as a GTPase-Activating Protein (GAP) for RagA/B, keeping RagA in an inactive GDP-bound state [3, 5]. Upon leucine binding, Sestrin2 undergoes a conformational dissociation from GATOR2. Relieved GATOR2 inhibits GATOR1, promoting the active RagA/B-GTP / RagC/D-GDP heterodimer conformation [3, 5]. Active Rag GTPases recruit mTORC1 from the cytoplasm to the lysosomal outer membrane, where it encounters its essential activator, GTP-loaded Rheb (Ras homolog enriched in brain), triggering maximal kinase activity to phosphorylate 4E-BP1 and p70S6K [2, 3, 5].',
              'লিউসিন কম থাকলে সেসট্রিন২ সংকেত বন্ধ রাখে। কিন্তু খাদ্যের মাধ্যমে রক্তে লিউসিন বৃদ্ধি পেলে সেসট্রিন২ মুক্ত হয়ে Rag GTPase এনজাইমকে সক্রিয় করে [৩, ৫]। সক্রিয় Rag GTPase সাইটোপ্লাজম থেকে mTORC1 কে লাইসোজোমের ওপর টেনে নিয়ে আসে, যেখানে Rheb প্রোটিনের সংস্পর্শে এসে এটি পূর্ণ শক্তি অর্জন করে এবং 4E-BP1 ও p70S6K ফসফোরাইলেশনের মাধ্যমে পেশির প্রোটিন সংশ্লেষণ (MPS) শুরু করে [২, ৩, ৫]।'
            ),
            l(
              'Phosphorylation of 4E-BP1 relieves its inhibition on eukaryotic initiation factor 4E (eIF4E), allowing the formation of the eIF4F cap-binding complex. Concurrently, activated p70S6K phosphorylates ribosomal protein S6 and eukaryotic elongation factor 2 kinase (eEF2K), accelerating peptide chain elongation and driving the myofibrillar fractional synthetic rate (FSR) from basal fasting levels of ~0.04%/h up to postprandial peaks of ~0.08–0.10%/h [2, 3].',
              '4E-BP1 ফসফোরাইলেশনের ফলে eIF4E মুক্ত হয়ে প্রোটিন অনুবাদ শুরু করে। একই সাথে p70S6K রাইবোজোমের S6 প্রোটিন সক্রিয় করে নতুন পেপটাইড শিকল তৈরির গতি ত্বরান্বিত করে, যা পেশির প্রোটিন তৈরির হার (FSR) উপবাসের ০.০৪%/ঘণ্টা থেকে খাবারের পর ০.০৮–০.১০%/ঘণ্টায় উন্নীত করে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Whole-Body Nitrogen Flux & Pathophysiology of Kwashiorkor vs Marasmus', 'দেহের নাইট্রোজেন প্রবাহ এবং কোয়াশিওরকর বনাম ম্যারাসমাসের রোগতত্ত্ব'),
          paragraphs: [
            l(
              'Quantitative nitrogen balance reflects the net outcome of whole-body protein turnover: N_balance = [Dietary Protein (g) / 6.25] - [UUN (g) + 0.2 x UUN + 2 g fecal N + 0.5 g integumentary N] [4]. In hypermetabolic trauma, sepsis, or uncontrolled diabetic ketoacidosis, skeletal muscle proteolysis driven by the ubiquitin-proteasome system floods the circulation with branched-chain amino acid carbon skeletons for hepatic gluconeogenesis, producing profound negative nitrogen balance exceeding -10 to -15 g N/day [2, 4].',
              'নাইট্রোজেন ভারসাম্য হলো মানবদেহের প্রোটিন তৈরি ও ক্ষয়ের গাণিতিক হিসাব: ব্যালেন্স = [খাদ্য প্রোটিন / ৬.২৫] - [ইউরিয়া নাইট্রোজেন + অন্যান্য অপচয়] [৪]। তীব্র সংক্রমণ, আঘাত বা পোড়া রোগীর ক্ষেত্রে ইউবিকুইটিন-প্রোটিসোম পথ পেশি ভেঙে অ্যামিনো অ্যাসিড মুক্ত করে যকৃতে গ্লুকোজ তৈরি করায় প্রতিদিন মারাত্মক ঋণাত্মক নাইট্রোজেন ব্যালেন্স তৈরি হয় [২, ৪]।'
            ),
            l(
              'In pediatric severe acute malnutrition, distinct hormonal adaptations separate Kwashiorkor from Marasmus [4]. In Kwashiorkor, persistent carbohydrate intake maintains basal insulin secretion while dietary protein is near zero. Insulin suppresses peripheral lipolysis and muscle amino acid mobilization; consequently, hepatocytes lack amino acid substrates to synthesize albumin and Apolipoprotein B-100, resulting in intravascular oncotic collapse (pitting edema), immune failure, and massive hepatic steatosis [4].',
              'মারাত্মক শিশুপুষ্টিতে হরমোনের ভিন্নতার কারণে কোয়াশিওরকর ও ম্যারাসমাসের উপসর্গ আলাদা হয় [৪]। কোয়াশিওরকরে খাদ্যে শর্করা থাকায় ইনসুলিন চালু থাকে কিন্তু প্রোটিন থাকে না; ইনসুলিনের কারণে পেশি থেকে অ্যামিনো অ্যাসিড মুক্ত হতে পারে না, ফলে যকৃতে অ্যালবুমিন ও এপো-বি তৈরি বন্ধ হয়ে মারাত্মক শোথ এবং ফ্যাটি লিভার দেখা দেয় [৪]।'
            ),
            l(
              'In Marasmus, balanced starvation suppresses insulin, permitting sustained cortisol- and epinephrine-driven mobilization of fat and muscle, preserving hepatic albumin synthesis without edema [4]. The child wastes away symmetrically, utilizing both somatic muscle and subcutaneous adipose tissue to fuel basal metabolic survival until caloric replenishment is instituted [4].',
              'ম্যারাসমাসে শর্করা ও প্রোটিন উভয়ই অনুপস্থিত থাকায় ইনসুলিন বন্ধ থাকে এবং কর্টিসল হরমোন ধীরে ধীরে চর্বি ও পেশি ভেঙে অ্যালবুমিন সংশ্লেষণ কিছুটা সচল রাখে, ফলে শোথ হয় না [৪]। শিশুটি কঙ্কালসার হয়ে বেঁচে থাকার মৌলিক শক্তি সংগ্রহ করে, যার চিকিৎসা কোয়াশিওরকরের চেয়ে কিছুটা ভিন্ন সতর্কতায় পরিচালনা করতে হয় [৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Management of Sarcopenia & Anabolic Resistance', 'বার্ধক্যজনিত পেশিক্ষয় ও অ্যানাবলিক রেজিস্ট্যান্সের চিকিৎসা'),
          paragraphs: [
            l(
              'Aging skeletal muscle exhibits "anabolic resistance," a blunted myofibrillar fractional synthetic rate response to physiological hyperaminoacidemia and insulin [2, 3]. Whereas a young adult achieves maximal mTORC1 stimulation with ~1.5–2.0 g of leucine (~20 g high-quality protein), an older adult (>65 years) requires 3.0 to 4.0 g of leucine (~35–45 g protein) per meal to achieve an equivalent fractional synthetic rate due to reduced muscle perfusion and Sestrin2 signaling blunting [2, 3].',
              'বয়স বাড়ার সাথে সাথে পেশি "অ্যানাবলিক রেজিস্ট্যান্স" প্রদর্শন করে, অর্থাৎ স্বাভাবিক পরিমাণ প্রোটিন খেলেও পেশি তৈরির হার কমে যায় [২, ৩]। যেখানে একজন তরুণ ২০ গ্রাম প্রোটিন খেয়েই পেশির সর্বোচ্চ বৃদ্ধি নিশ্চিত করতে পারে, সেখানে ৬৫ বছরের বেশি বয়সী প্রবীণদের সমপরিমাণ উদ্দীপনা পেতে প্রতি বেলায় অন্তত ৩৫ থেকে ৪৫ গ্রাম প্রোটিন (৩.০–৪.০ গ্রাম লিউসিন) প্রয়োজন হয় [২, ৩]।'
            ),
            l(
              'Clinical guidelines for counteracting sarcopenia recommend distributing dietary protein evenly across meals (e.g., 30–40 g at breakfast, lunch, and dinner) rather than skewing 70% of intake into an evening meal, combined with progressive resistance training to enhance muscle contraction-mediated, mTORC1-independent glucose and amino acid uptake [2, 3].',
              'সারকোপেনিয়া প্রতিরোধে পুরো দিনের প্রোটিন কেবল রাতের খাবারে না খেয়ে সকাল, দুপুর ও রাতের খাবারে সমানভাবে ভাগ করে গ্রহণ (প্রতি বেলায় ৩০–৪০ গ্রাম) এবং তার সাথে রেজিস্ট্যান্স ব্যায়াম করার জোরালো সুপারিশ করা হয় [২, ৩]।'
            ),
            l(
              'In clinical geriatrics, adding 3–5 g/day of creatine monohydrate and ensuring 25–30 mcg (1,000–2,000 IU) of vitamin D3 further synergizes with dietary protein boluses to enhance type-II fast-twitch muscle fiber hypertrophy and prevent falls in frail populations [2, 6].',
              'বার্ধক্য চিকিৎসায় প্রোটিনের পাশাপাশি দৈনিক ৩–৫ গ্রাম ক্রিয়েটিন মনোহাইড্রেট এবং ১,০০০–২,০০০ আন্তর্জাতিক ইউনিট ভিটামিন D3 গ্রহণ টাইপ-২ পেশিতন্তুর শক্তি বৃদ্ধি করে এবং পড়ে গিয়ে হাড় ভাঙার ঝুঁকি নাটকীয়ভাবে কমিয়ে দেয় [২, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Summary & Clinical Pearls', 'একাডেমিক সারাংশ ও ক্লিনিক্যাল মুক্তা'),
          paragraphs: [
            l(
              'Protein bioavailability is dictated by true ileal amino acid digestibility and limiting amino acid ratios, best captured by DIAAS [1]. Intracellular leucine availability sensed by Sestrin2 governs mTORC1-dependent muscle protein synthesis [3, 5]. Monitoring nitrogen balance provides vital quantitative feedback in catabolic illness, while combating anabolic resistance requires higher per-meal leucine thresholds in aging populations [2, 4].',
              'প্রোটিনের কার্যকারিতা নির্ধারিত হয় ক্ষুদ্রান্ত্রের সত্য ইলিয়াল শোষণ এবং অপরিহার্য অ্যামিনো অ্যাসিডের অনুপাতের ওপর, যা DIAAS দ্বারা সবচেয়ে নিখুঁতভাবে পরিমাপ করা যায় [১]। কোষে সেসট্রিন২ দ্বারা লিউসিন সংবেদন পেশির প্রোটিন সংশ্লেষণের প্রধান নিয়ন্ত্রক [৩, ৫]। সংকটকালীন সময়ে নাইট্রোজেন ভারসাম্য পর্যবেক্ষণ এবং বয়স্কদের ক্ষেত্রে উচ্চ লিউসিনযুক্ত সুষম প্রোটিন নিশ্চিত করা সুস্থতার মূল স্তম্ভ [২, ৪]।'
            ),
            l(
              'Precision protein prescribing requires matching total grams to body weight and clinical status: 0.8 g/kg for sedentary baseline, 1.2–1.6 g/kg for healthy aging, 1.6–2.2 g/kg for athletic hypertrophy, and up to 2.5 g/kg in severe burn or polytrauma rehabilitation [2, 3, 6].',
              'প্রোটিনের সুনির্দিষ্ট প্রেসক্রিপশনে ব্যক্তির ওজন ও স্বাস্থ্যের অবস্থা বিবেচনা করা আবশ্যক: সাধারণের জন্য ০.৮ গ্রাম/কেজি, বয়স্কদের জন্য ১.২–১.৬ গ্রাম/কেজি, ক্রীড়াবিদদের জন্য ১.৬–২.২ গ্রাম/কেজি এবং মারাত্মক পোড়া বা ট্রমার রোগীদের জন্য ২.৫ গ্রাম/কেজি পর্যন্ত প্রোটিন নিশ্চিত করা জরুরি [২, ৩, ৬]।'
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
              'Somatic proteostasis is an energetically demanding balance between translation, chaperone-mediated folding, and proteolytic degradation [2, 4]. Skeletal muscle proteins undergo continuous degradation mediated by two primary pathways: the Ubiquitin-Proteasome System (UPS) and macroautophagy [2]. Under catabolic conditions, glucocorticoids and pro-inflammatory cytokines activate Forkhead box O (FoxO) transcription factors, upregulating muscle-specific E3 ubiquitin ligases: Muscle RING Finger 1 (MuRF1/TRIM63) and Muscle Atrophy F-box (MAFbx/Atrogin-1) [2].',
              'দেহের প্রোটিন ভারসাম্য রক্ষা বা প্রোটিওস্ট্যাসিস হলো অনুবাদ, ফোল্ডিং এবং ভাঙনের এক সার্বক্ষণিক আণবিক সমন্বয় [২, ৪]। কঙ্কাল পেশির প্রোটিন ভাঙন মূলত দুটি প্রধান পথ দ্বারা পরিচালিত হয়: ইউবিকুইটিন-প্রোটিসোম সিস্টেম (UPS) এবং ম্যাক্রো-অটোফ্যাজি [২]। প্রদাহ বা অনাহারে কর্টিসল ও সাইটোকাইন FoxO ট্রান্সক্রিপশন ফ্যাক্টর সক্রিয় করে পেশি-নির্দিষ্ট E3 ইউবিকুইটিন লাইগেজ (MuRF1 ও Atrogin-1) তৈরি বাড়িয়ে দেয় [২]।'
            ),
            l(
              'MuRF1 selectively targets myofibrillar structural proteins—including myosin heavy chains, myosin-binding protein C, and actin—for polyubiquitination, targeting them for degradation by the 26S proteasome core [2]. Adequate amino acid signaling (specifically via mTORC1 and Akt) suppresses FoxO nuclear translocation, directly turning off E3 ligase transcription and arresting catabolic muscle wasting [2, 5].',
              'MuRF1 সরাসরি মায়োসিন ও অ্যাক্টিনের মতো পেশির প্রধান কাঠামোগত প্রোটিনগুলোকে ইউবিকুইটিন দ্বারা চিহ্নিত করে ২৬S প্রোটিসোমে ধ্বংসের জন্য পাঠিয়ে দেয় [২]। খাদ্যের অ্যামিনো অ্যাসিড সংকেত (mTORC1 ও Akt এর মাধ্যমে) FoxO কে নিউক্লিয়াসে ঢুকতে বাধা দিয়ে এই লাইগেজ এনজাইমের তৈরি বন্ধ করে এবং পেশিক্ষয় রোধ করে [২, ৫]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Structural Proteomics of the Lysosomal Nutrient Sensing Machinery', 'লাইসোজোমাল পুষ্টি সংবেদন প্রক্রিয়ার স্ট্রাকচারাল প্রোটিওমিক্স'),
          paragraphs: [
            l(
              'Cryogenic electron microscopy (cryo-EM) has unveiled the atomic architecture of the lysosomal nutrient-sensing supercomplex anchoring mTORC1 [3, 5]. Sestrin2 forms a two-domain structure where leucine binds in an internal pocket flanked by Thr374 and Tyr375, inducing a localized conformational collapse that disrupts its salt bridge with GATOR2 subunit WDR24 [3, 5]. Concurrently, intraluminal amino acids (arginine) are sensed within the lysosomal lumen by SLC38A9, an essential transmembrane transceptor that engages the v-ATPase-Ragulator scaffold [3, 5].',
              'ক্রায়ো-ইলেকট্রন মাইক্রোস্কোপির মাধ্যমে লাইসোজোমে mTORC1 নোঙর করার আণবিক কাঠামো বিস্তারিত জানা গেছে [৩, ৫]। সেসট্রিন২ এর অভ্যন্তরীণ পকেটে লিউসিন যুক্ত হলে Thr374 ও Tyr375 এর অবস্থানে পরিবর্তন ঘটে এবং এটি GATOR2 থেকে বিচ্ছিন্ন হয় [৩, ৫]। একই সময়ে লাইসোজোমের ভেতরের আর্জিনিনের মাত্রা পরিমাপ করে SLC38A9 নামক ট্রান্সমেমব্রেন সেন্সর, যা v-ATPase এর সাথে যুক্ত হয়ে প্রোটিন সংশ্লেষণের চূড়ান্ত অনুমতি দেয় [৩, ৫]।'
            ),
            l(
              'This dual inside-out (SLC38A9 arginine) and outside-in (Sestrin2 leucine, CASTOR1 arginine) coincidence detection circuit ensures that mTORC1 is never activated unless amino acids are concurrently replete in both the cytosolic and intra-organellar compartments, safeguarding the cell against catastrophic energetic collapse from premature anabolic commitment [2, 3, 5].',
              'সাইটোপ্লাজমীয় লিউসিন এবং লাইসোজোমের অভ্যন্তরীণ আর্জিনিন—এই দ্বিমুখী পুষ্টি সংকেত নিশ্চিত করে যে কোষের ভেতরে ও অঙ্গাণুর অভ্যন্তরে সর্বত্র পর্যাপ্ত পুষ্টি না থাকা পর্যন্ত mTORC1 কোনোভাবেই সক্রিয় হবে না, যা কোষকে শক্তিহীন হয়ে ধ্বংস হওয়া থেকে রক্ষা করে [২, ৩, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Muscle-Full Effect & Amino Acid Oxidation Kinetics', 'পেশি-পূর্ণ প্রভাব ও অ্যামিনো অ্যাসিড জারণের গতিবিদ্যা'),
          paragraphs: [
            l(
              'Stable isotope tracer kinetic studies in humans demonstrate that Muscle Protein Synthesis (MPS) in response to a protein bolus is inherently transient, a phenomenon known as the "Muscle-Full Effect" [2, 3]. Following ingestion of 20 to 40 g of high-quality protein, myofibrillar fractional synthetic rate (FSR) rises steeply, peaks between 60 and 90 minutes post-prandially, and returns to basal levels by 120 to 180 minutes—even if plasma and intramuscular essential amino acid concentrations remain elevated [2, 3].',
              'মানবদেহে স্টেবল আইসোটোপ ট্রেসার গবেষণায় দেখা গেছে যে প্রোটিন খাওয়ার পর পেশি প্রোটিন সংশ্লেষণ (MPS) একটি নির্দিষ্ট সময় পর্যন্তই বাড়ে, যাকে "পেশি-পূর্ণ প্রভাব" (Muscle-Full Effect) বলা হয় [২, ৩]। ২০ থেকে ৪০ গ্রাম প্রোটিন গ্রহণের পর FSR ৬০–৯০ মিনিটের মধ্যে শীর্ষে ওঠে এবং ১২০–১৮০ মিনিটের মধ্যে উপবাসের অবস্থায় ফিরে আসে—যদিও রক্তে অ্যামিনো অ্যাসিডের মাত্রা তখনও বেশি থাকে [২, ৩]।'
            ),
            l(
              'Once ribosomal translation initiation complexes reach saturation, intramuscular free amino acids cannot be directed toward further protein synthesis. Instead, excess amino acids are shunted irreversibly toward transamination and hepatic oxidation. Hepatic branched-chain aminotransferase (BCAT) and branched-chain alpha-keto acid dehydrogenase (BCKDH) irreversibly decarboxylate branched-chain keto acids into acetyl-CoA and succinyl-CoA for ATP generation and ureagenesis [2, 4].',
              'রাইবোজোমাল অনুবাদ প্রক্রিয়া একবার সম্পৃক্ত হয়ে গেলে অতিরিক্ত অ্যামিনো অ্যাসিড আর পেশিতে জমা হতে পারে না। এর পরিবর্তে অতিরিক্ত অ্যামিনো অ্যাসিডগুলো যকৃতে চলে যায়, যেখানে BCAT ও BCKDH এনজাইম এদের ভেঙে ইউরিয়া এবং জ্বালানি অণুতে (অ্যাসিটাইল-CoA ও সাকসিনাইল-CoA) রূপান্তরিত করে [২, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Renal Hemodynamics & The Glomerular Hyperfiltration Debate', 'বৃক্কের রক্তসঞ্চালন ও গ্লোমেরুলার হাইপারফিল্ট্রেশন বিতর্ক'),
          paragraphs: [
            l(
              'A historical concern regarding high-protein diets is the "Brenner Hypothesis," which posited that sustained protein intake drives chronic renal glomerular hyperfiltration, intraglomerular capillary hypertension, and accelerated progression of chronic kidney disease (CKD) [4]. Ingesting a protein load induces renal vasodilation mediated by glucagon and tubuloglomerular feedback, acutely increasing Glomerular Filtration Rate (GFR) by 15% to 25% [4].',
              'উচ্চ প্রোটিন গ্রহণ নিয়ে ঐতিহাসিক উদ্বেগের মূল ছিল "ব্রেনারের হাইপোথিসিস", যা দাবি করেছিল যে অতিরিক্ত প্রোটিন খেলে বৃক্কে হাইপারফিল্ট্রেশন ও রক্তের চাপ বেড়ে গিয়ে কিডনি ক্ষয় ত্বরান্বিত হয় [৪]। প্রোটিন খেলে গ্লুকাগন হরমোনের প্রভাবে বৃক্কে রক্তপ্রবাহ বাড়ে এবং গ্লোমেরুলার ফিল্ট্রেশন রেট (GFR) সাময়িকভাবে ১৫% থেকে ২৫% বৃদ্ধি পায় [৪]।'
            ),
            l(
              'However, modern systematic reviews and longitudinal clinical trials confirm that in individuals with healthy baseline renal function, dietary protein intakes up to 2.2 to 3.0 g/kg/day represent a normal physiological adaptive response, with no evidence of pathological decline in kidney function or microalbuminuria [4, 6]. Conversely, in established Stage 3–5 Chronic Kidney Disease, protein restriction (0.55–0.60 g/kg/day, or 0.28–0.43 g/kg/day supplemented with keto-acid analogues) remains a cornerstone of medical nutrition therapy to slow renal deterioration [4].',
              'তবে আধুনিক মেটা-অ্যানালাইসিস ও ক্লিনিক্যাল ট্রায়াল নিশ্চিত করেছে যে সুস্থ কিডনিসম্পন্ন ব্যক্তিদের ক্ষেত্রে দৈনিক ২.২ থেকে ৩.০ গ্রাম/কেজি পর্যন্ত প্রোটিন গ্রহণ কোনো রোগতাত্ত্বিক ক্ষতি করে না, বরং এটি একটি স্বাভাবিক শারীরবৃত্তীয় অভিযোজন [৪, ৬]। অন্যদিকে যাদের ইতোমধ্যেই ক্রনিক কিডনি ডিজিজ (CKD ৩-৫ পর্যায়) রয়েছে, তাদের ক্ষেত্রে কিডনির ওপর চাপ কমাতে দৈনিক ০.৫৫–০.৬০ গ্রাম/কেজি প্রোটিন নিয়ন্ত্রণ অত্যন্ত জরুরি [৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Meta-Analytical Evidence & Muscle Hypertrophy Breakpoints', 'মেটা-অ্যানালাইসিসের প্রমাণ ও পেশি বৃদ্ধির সর্বোচ্চ সীমা'),
          paragraphs: [
            l(
              'The landmark British Journal of Sports Medicine systematic review and meta-regression by Morton et al. (2018), encompassing 49 randomized controlled trials and 1,863 participants, definitively established the quantitative relation between protein intake and resistance exercise-induced gains in fat-free mass [6]. Dietary protein supplementation significantly increased one-repetition maximum (1RM) strength and fat-free mass accretion [6].',
              'ব্রিটিশ জার্নাল অব স্পোর্টস মেডিসিনে প্রকাশিত মর্টন ও সহকর্মীদের (২০১৮) বিখ্যাত মেটা-অ্যানালাইসিসটি (৪৯টি ট্রায়াল ও ১,৮৬৩ জন অংশগ্রহণকারী) রেজিস্ট্যান্স ব্যায়ামের সাথে প্রোটিন গ্রহণের সুনির্দিষ্ট সম্পর্ক প্রমাণ করেছে [৬]। অতিরিক্ত প্রোটিন গ্রহণ পেশির শক্তি (1RM) এবং চর্বিহীন পেশির ভর নাটকীয়ভাবে বৃদ্ধি করেছে [৬]।'
            ),
            l(
              'Critically, segmented spline meta-regression identified a clear plateau breakpoint at 1.62 g of protein per kilogram of body weight per day (95% CI: 1.03 to 2.20 g/kg/day) [6]. Beyond this 1.62 g/kg/day threshold, additional dietary protein did not contribute to further resistance training-induced gains in muscle mass in healthy young adults, establishing an evidence-based clinical target for athletic nutrition programming [6].',
              'সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো, গাণিতিক স্প্লাইন বিশ্লেষণে দেখা গেছে যে প্রতি কেজি ওজনের জন্য দৈনিক ১.৬২ গ্রাম প্রোটিন গ্রহণের পর পেশি বৃদ্ধির হার সমতলে (প্ল্যাটো) পৌঁছে যায় [৬]। সুস্থ তরুণদের ক্ষেত্রে ১.৬২ গ্রাম/কেজির বেশি প্রোটিন খেলে পেশি তৈরিতে অতিরিক্ত কোনো লাভ হয় না, যা ক্রীড়াবিদদের খাদ্য পরিকল্পনায় একটি নিখুঁত প্রমাণভিত্তিক লক্ষ্যমাত্রা স্থাপন করেছে [৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Advanced Research Synthesis & Emerging Methodologies', 'উন্নত গবেষণার সংশ্লেষণ ও উদীয়মান পদ্ধতিসমূহ'),
          paragraphs: [
            l(
              'Modern molecular nutrition conceptualizes dietary protein not merely as structural substrate, but as a dynamic hormonal and signaling input governed by the lysosomal Sestrin2-Rag-mTORC1 axis [3, 5]. Protein quality evaluation must prioritize true ileal DIAAS over crude fecal measures to optimize worldwide agricultural and clinical formulations [1].',
              'আধুনিক আণবিক পুষ্টিবিজ্ঞান খাদ্য প্রোটিনকে কেবল ইট-সুরকির কাঁচামাল নয়, বরং লাইসোজোমাল সেসট্রিন২-র‍্যাগ-mTORC1 নিয়ন্ত্রিত একটি গতিশীল সংকেত অণু হিসেবে বিবেচনা করে [৩, ৫]। বৈশ্বিক খাদ্য নিরাপত্তা ও ক্লিনিক্যাল ফর্মুলেশনের মান উন্নয়নে সেকেলে মলভিত্তিক পদ্ধতির বদলে সত্য ইলিয়াল DIAAS মানদণ্ডকে অগ্রাধিকার দেওয়া অপরিহার্য [১]।',
            ),
            l(
              'Emerging research frontiers utilize deuterium oxide (D2O / heavy water) metabolic labeling to track long-term cumulative muscle protein synthesis in free-living humans over weeks and months, bridging the gap between acute biopsy tracer kinetics and chronic sarcopenic outcomes [2, 6].',
              'সাম্প্রতিক গবেষণায় ডিউটেরিয়াম অক্সাইড (ভারী পানি D2O) ট্রেসার ব্যবহার করে মুক্ত মানবদেহে সপ্তাহ ও মাসব্যাপী পেশির দীর্ঘমেয়াদী সংশ্লেষণ ট্র্যাক করা সম্ভব হচ্ছে, যা বার্ধক্যজনিত পেশিক্ষয় রোধে দীর্ঘমেয়াদী পুষ্টিপথ্য তৈরিতে নতুন দিগন্ত উন্মোচন করেছে [২, ৬]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Flowchart tracing dietary protein quality from amino acid breakdown to ileal DIAAS absorption, followed by Sestrin2 leucine sensing and mTORC1 lysosomal activation for muscle protein synthesis.',
      'খাদ্য প্রোটিনের গুণমান ও পাচন থেকে শুরু করে ইলিয়াল DIAAS শোষণ, সেসট্রিন২ দ্বারা লিউসিন সংবেদন এবং লাইসোজোমে mTORC1 স্থানান্তরের মাধ্যমে পেশি প্রোটিন সংশ্লেষণের সম্পূর্ণ জৈব রাসায়নিক প্রবাহচিত্র।'
    ),
    steps: [
      l(
        'Step 1: Dietary proteins are enzymatically digested into free amino acids and small peptides, absorbed across the brush border, and quantified via true ileal DIAAS scoring.',
        'ধাপ ১: খাদ্য প্রোটিন অগ্ন্যাশয় ও অন্ত্রের এনজাইম দ্বারা অ্যামিনো অ্যাসিডে বিভক্ত হয়ে শোষিত হয় এবং সত্য ইলিয়াল DIAAS পদ্ধতিতে এর মান নিরূপিত হয়।'
      ),
      l(
        'Step 2: Circulating branched-chain amino acids, especially leucine, enter myocytes and bind cytosolic Sestrin2 with micromolar affinity.',
        'ধাপ ২: রক্তে পরিবাহিত লিউসিন পেশিকোষে প্রবেশ করে এবং সাইটোপ্লাজমে অবস্থিত সেসট্রিন২ সেন্সরের সাথে যুক্ত হয়।'
      ),
      l(
        'Step 3: Leucine-bound Sestrin2 disinhibits GATOR2, converting Rag GTPases to their active state and docking mTORC1 to the lysosomal outer membrane.',
        'ধাপ ৩: লিউসিনযুক্ত সেসট্রিন২ Rag GTPase এনজাইমকে সক্রিয় করে mTORC1 কে লাইসোজোমের ওপর নোঙর করে।'
      ),
      l(
        'Step 4: Lysosomal Rheb-GTP activates mTORC1, which phosphorylates p70S6K and 4E-BP1 to initiate ribosomal muscle protein synthesis.',
        'ধাপ ৪: লাইসোজোমের Rheb প্রোটিন mTORC1 কে পূর্ণ সক্রিয় করে রাইবোজোমে পেশির নতুন অ্যাক্টিন ও মায়োসিন প্রোটিন তৈরির কাজ শুরু করে।'
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
