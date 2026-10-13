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
]

export const nutrition06DietaryProteinsLesson: LessonTopic = {
  id: 'topic.nutrition.protein-quality-diaas-nitrogen-balance',
  slug: 'protein-quality-diaas-nitrogen-balance',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '06 · Dietary Proteins, Amino Acid Quality, DIAAS/PDCAAS & Nitrogen Balance',
    '০৬ · খাদ্য প্রোটিন, অ্যামিনো অ্যাসিডের মান, DIAAS/PDCAAS ও নাইট্রোজেন ভারসাম্য'
  ),
  summary: l(
    'The molecular physiology of dietary proteins: essential amino acid kinetics, true ileal DIAAS vs fecal PDCAAS scoring, the mTORC1 leucine trigger for muscle protein synthesis, nitrogen balance assessment, and clinical protein malnutrition.',
    'খাদ্য প্রোটিনের আণবিক শারীরবৃত্ত: অত্যাবশ্যক অ্যামিনো অ্যাসিডের গতিবিদ্যা, সত্য ইলিয়াল DIAAS বনাম ফিকাল PDCAAS মূল্যায়ন, পেশির প্রোটিন তৈরিতে mTORC1 লিউসিন সুইচ, নাইট্রোজেন ভারসাম্য নিরূপণ এবং ক্লিনিক্যাল প্রোটিন অপুষ্টি।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Contrast the nine indispensable amino acids, conditionally essential amino acids, and the biochemical concept of limiting amino acids in dietary proteins.',
      'নয়টি অত্যাবশ্যক অ্যামিনো অ্যাসিড, শর্তসাপেক্ষে অত্যাবশ্যক অ্যামিনো অ্যাসিড এবং খাদ্য প্রোটিনের সীমিতকরণ অ্যামিনো অ্যাসিডের ধারণা বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Differentiate PDCAAS and the FAO-recommended Digestible Indispensable Amino Acid Score (DIAAS), accounting for true ileal versus fecal digestibility and lack of truncation.',
      'মলভিত্তিক PDCAAS এবং FAO-অনুমোদিত সত্য ইলিয়াল হজমভিত্তিক DIAAS প্রোটিন মূল্যায়ন পদ্ধতির সূক্ষ্ম পার্থক্য ও সুবিধা নির্ণয় করতে পারা।'
    ),
    l(
      'Trace the intracellular molecular mechanism of the leucine trigger: Sestrin2 sensing, Rag GTPase recruitment of mTORC1 to the lysosome, and fractional synthetic rate activation.',
      'লিউসিন সুইচের কোষীয় প্রক্রিয়া: সেসট্রিন২ সংবেদন, লাইসোজোমে Rag GTPase দ্বারা mTORC1 সক্রিয়করণ এবং পেশির প্রোটিন সংশ্লেষণ হার বৃদ্ধির পথ ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Calculate whole-body nitrogen balance and contrast the pathophysiological hallmarks of Kwashiorkor (hypoalbuminemic edema) and Marasmus (somatic wasting).',
      'দেহের সামগ্রিক নাইট্রোজেন ভারসাম্য হিসাব করতে পারা এবং কোয়াশিওরকর (শোথজনিত অপুষ্টি) ও ম্যারাসমাসের (অস্থিচর্মসার শুষ্কতা) রোগতাত্ত্বিক পার্থক্য নিরূপণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.nutrition.dietary-lipids-fatty-acids-pufa'],
  references: dietaryProteinsRefs,
  evidenceBySection: {
    introduction: ['fao-paper92-diaas-protein', 'krause-nutrition-care-proteins'],
    structure: ['fao-paper92-diaas-protein', 'phillips-apnm-protein-intake'],
    mechanism: ['wolfe-ajcn-muscle-protein', 'phillips-apnm-protein-intake'],
    integration: ['wolfe-ajcn-muscle-protein', 'krause-nutrition-care-proteins'],
    practice: ['fao-paper92-diaas-protein', 'krause-nutrition-care-proteins'],
    takeaways: ['fao-paper92-diaas-protein', 'wolfe-ajcn-muscle-protein'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Amino Acid Taxonomy & Essentiality', '১. অ্যামিনো অ্যাসিডের শ্রেণিবিন্যাস ও অপরিহার্যতা'), sectionId: 'introduction' },
      { id: 'sec-diaas', label: l('2. Protein Quality Metrics: PDCAAS vs DIAAS', '২. প্রোটিনের গুণমান পরিমাপ: PDCAAS বনাম DIAAS'), sectionId: 'structure' },
      { id: 'sec-mtor', label: l('3. The Leucine Threshold & mTORC1 Muscle Synthesis', '৩. লিউসিন থ্রেশহোল্ড ও পেশির mTORC1 প্রোটিন সংশ্লেষণ'), sectionId: 'mechanism' },
      { id: 'sec-nitrogen', label: l('4. Nitrogen Balance Dynamics & Protein Malnutrition', '৪. নাইট্রোজেন ভারসাম্য ও ক্লিনিক্যাল প্রোটিন অপুষ্টি'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Practical Nitrogen Balance & DIAAS Calculations', '৫. ব্যবহারিক নাইট্রোজেন ভারসাম্য ও DIAAS হিসাব'), sectionId: 'practice' },
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
    ],
    workedExamples: [
      {
        title: l('Calculating Whole-Body Nitrogen Balance in a Clinical Patient', 'ক্লিনিক্যাল রোগীর দেহের নাইট্রোজেন ভারসাম্য হিসাব'),
        steps: [
          l(
            'Step 1: Calculate daily Nitrogen Intake (N_in). Patient consumes 75 g of dietary protein. Since protein is ~16% nitrogen by weight: N_in = 75 g / 6.25 = 12.0 g N/day.',
            'ধাপ ১: খাদ্য থেকে গৃহীত নাইট্রোজেন (N_in) নির্ণয় করুন। রোগী দৈনিক ৭৫ গ্রাম প্রোটিন গ্রহণ করেন। প্রোটিনে গড়ে ১৬% নাইট্রোজেন থাকে: N_in = ৭৫ গ্রাম / ৬.২৫ = ১২.০ গ্রাম নাইট্রোজেন/দিন।'
          ),
          l(
            'Step 2: Measure 24-hour Urinary Urea Nitrogen (UUN). Laboratory reveals UUN = 13.5 g/day.',
            'ধাপ ২: ২৪ ঘণ্টার মূত্রে ইউরিয়া নাইট্রোজেন (UUN) পরিমাপ করুন। ল্যাবরেটরি রিপোর্ট অনুযায়ী UUN = ১৩.৫ গ্রাম/দিন।'
          ),
          l(
            'Step 3: Account for unmeasured non-urea nitrogen and obligatory fecal/dermal losses (standard factor = +4 g/day). Total N_out = 13.5 g + 4.0 g = 17.5 g N/day.',
            'ধাপ ৩: মল, ত্বক ও অন্যান্য পথে অপচিত নাইট্রোজেনের জন্য আদর্শ ৪ গ্রাম যোগ করুন। মোট নির্গমন N_out = ১৩.৫ গ্রাম + ৪.০ গ্রাম = ১৭.৫ গ্রাম/দিন।'
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
              'Of the twenty amino acids, nine are designated as Essential (or Indispensable) Amino Acids because the human body cannot synthesize them from other precursors [4]. These nine amino acids must be obtained directly from our daily diet; if even one essential amino acid is chronically absent, whole-body protein synthesis halts [1, 4].',
              'বিশটি অ্যামিনো অ্যাসিডের মধ্যে নয়টিকে অত্যাবশ্যকীয় অ্যামিনো অ্যাসিড বলা হয় কারণ মানবদেহ নিজে এগুলো তৈরি করতে পারে না [৪]। এই নয়টি উপাদান প্রতিদিনের খাদ্যের মাধ্যমে সরাসরি গ্রহণ করা আবশ্যক; এদের যেকোনো একটির দীর্ঘমেয়াদী ঘাটতি থাকলে দেহের সামগ্রিক প্রোটিন সংশ্লেষণ প্রক্রিয়া স্থবির হয়ে পড়ে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Understanding Protein Quality & DIAAS', 'প্রোটিনের গুণমান ও DIAAS পদ্ধতি'),
          paragraphs: [
            l(
              'Not all dietary protein sources provide the same nutritional value. Protein quality is determined by two factors: the proportion of essential amino acids matching human requirements, and how efficiently those amino acids are digested and absorbed into the bloodstream [1]. Animal proteins (eggs, dairy, poultry, fish, meat) are considered complete proteins because they contain all nine essential amino acids in optimal ratios [1, 2].',
              'খাদ্যতালিকায় সব প্রোটিনের পুষ্টিমান সমান নয়। প্রোটিনের মান দুটি বিষয়ের ওপর নির্ভর করে: মানবদেহের চাহিদার সাথে অত্যাবশ্যক অ্যামিনো অ্যাসিডের অনুপাতের সামঞ্জস্য এবং অন্ত্রে তাদের পাচন ও শোষণ ক্ষমতা [১]। প্রাণীজ প্রোটিনে (ডিম, দুধ, মাছ, মাংস) সবকটি অত্যাবশ্যক অ্যামিনো অ্যাসিড আদর্শ অনুপাতে বিদ্যমান থাকায় এদেরকে সম্পূর্ণ প্রোটিন বলা হয় [১, ২]।'
            ),
            l(
              'Historically, protein quality was graded using the Protein Digestibility-Corrected Amino Acid Score (PDCAAS), but the United Nations Food and Agriculture Organization (FAO) now recommends the Digestible Indispensable Amino Acid Score (DIAAS) [1]. DIAAS measures amino acid digestion specifically at the end of the small intestine (the ileum), providing a much more accurate assessment that prevents plant and animal protein scores from being artificially inflated [1].',
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
              'Consuming approximately 2.5 to 3.0 grams of leucine in a single meal (typically provided by 25 to 35 grams of high-quality protein) saturates intracellular nutrient sensors, activating the master cellular growth switch called mTORC1 [3]. Without reaching this leucine threshold, protein synthesis remains at baseline, even if total daily calories are adequate [2, 3].',
              'প্রতি বেলায় প্রায় ২.৫ থেকে ৩.০ গ্রাম লিউসিন গ্রহণ করলে (যা প্রায় ২৫–৩৫ গ্রাম উচ্চমানের প্রোটিনে থাকে) কোষের ভেতরের সেন্সর সক্রিয় হয়ে mTORC1 সুইচ চালু করে এবং পেশির বৃদ্ধি ত্বরান্বিত হয় [৩]। এই নির্দিষ্ট মাত্রায় না পৌঁছালে দৈনন্দিন ক্যালোরি পর্যাপ্ত হলেও পেশি তৈরির প্রক্রিয়া কার্যকরভাবে শুরু হতে পারে না [২, ৩]।'
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
          ],
        },
        {
          id: 'practice',
          heading: l('Practical Dietary Guidelines for Protein Intake', 'প্রোটিন গ্রহণের ব্যবহারিক পুষ্টি নির্দেশিকা'),
          paragraphs: [
            l(
              'The standard Recommended Dietary Allowance (RDA) for healthy sedentary adults is 0.8 grams of protein per kilogram of body weight per day [4]. However, modern sports nutrition and gerontological science demonstrate that older adults (to combat age-related sarcopenia) and active individuals require 1.2 to 2.0 grams per kilogram daily to preserve lean physical mass and bone density [2, 3].',
              'একজন সুস্থ স্বাভাবিক প্রাপ্তবয়স্কের জন্য দৈনিক ন্যূনতম প্রোটিন সুপারিশ হলো প্রতি কেজি ওজনের জন্য ০.৮ গ্রাম [৪]। কিন্তু আধুনিক বার্ধক্যবিজ্ঞান ও স্পোর্টস নিউট্রিশন প্রমাণ করেছে যে বয়স্কদের পেশিক্ষয় রোধে এবং সক্রিয় ব্যক্তিদের পেশি সুরক্ষায় দৈনিক ১.২ থেকে ২.০ গ্রাম/কেজি প্রোটিন গ্রহণ করা অনেক বেশি স্বাস্থ্যসম্মত [২, ৩]।'
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
              'In summary, protein quantity and amino acid quality both dictate human health and functional longevity [1, 2]. DIAAS provides the gold standard for measuring protein bioavailability [1]. Achieving the leucine threshold across evenly distributed meals stimulates muscle protein synthesis and protects against physical disability and sarcopenia [2, 3].',
              'সংক্ষেপে, প্রোটিনের পরিমাণ এবং অ্যামিনো অ্যাসিডের গুণমান মানবদেহের কার্যক্ষমতা ও দীর্ঘায়ুর মূল নিয়ামক [১, ২]। DIAAS হলো প্রোটিনের শোষণযোগ্যতা মূল্যায়নের আধুনিকতম মাপকাঠি [১]। প্রতিটি প্রধান খাবারে পর্যাপ্ত লিউসিন নিশ্চিত করে পেশির প্রোটিন সংশ্লেষণ সক্রিয় রাখা এবং বার্ধক্যজনিত পেশিক্ষয় রোধ করা সম্ভব [২, ৩]।'
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
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Sestrin2-Rag-mTORC1 Leucine Signaling Axis', 'সেসট্রিন২-র‍্যাগ-mTORC1 লিউসিন সংকেত প্রবাহ'),
          paragraphs: [
            l(
              'Mechanistic Target of Rapamycin Complex 1 (mTORC1) acts as the master nutrient-sensing Ser/Thr kinase regulating eukaryotic protein translation and cell growth [3]. The activation of mTORC1 by amino acids requires a specialized lysosomal translocation cascade independent of insulin-PI3K-Akt signaling [2, 3]. In skeletal muscle sarcoplasm, the cytosolic sensor protein Sestrin2 directly binds free leucine with a dissociation constant (Kd) of ~20 μM [3].',
              'কোষের বৃদ্ধি এবং মেসেঞ্জার আরএনএ থেকে প্রোটিন তৈরির প্রধান নিয়ন্ত্রক হলো মেকানিস্টিক টার্গেট অব র‍্যাপামাইসিন কমপ্লেক্স ১ (mTORC1) [৩]। ইনসুলিন সংকেতের বাইরে গিয়ে সরাসরি অ্যামিনো অ্যাসিড দ্বারা mTORC1 সক্রিয় হতে হলে একে কোষের লাইসোজোমে পৌঁছাতে হয় [২, ৩]। কঙ্কাল পেশির সাইটোপ্লাজমে অবস্থিত সেসট্রিন২ প্রোটিন মুক্ত লিউসিনের ঘনত্ব সরাসরি পরিমাপ করে [৩]।'
            ),
            l(
              'Under low intracellular leucine concentrations, Sestrin2 physically associates with GATOR2, allowing GATOR1 to act as a GTPase-Activating Protein (GAP) for RagA/B, keeping RagA in an inactive GDP-bound state [3]. Upon leucine binding, Sestrin2 undergoes a conformational dissociation from GATOR2. Relieved GATOR2 inhibits GATOR1, promoting the active RagA/B-GTP / RagC/D-GDP heterodimer conformation [3]. Active Rag GTPases recruit mTORC1 from the cytoplasm to the lysosomal outer membrane, where it encounters its essential activator, GTP-loaded Rheb (Ras homolog enriched in brain), triggering maximal kinase activity to phosphorylate 4E-BP1 and p70S6K [2, 3].',
              'লিউসিন কম থাকলে সেসট্রিন২ সংকেত বন্ধ রাখে। কিন্তু খাদ্যের মাধ্যমে রক্তে লিউসিন বৃদ্ধি পেলে সেসট্রিন২ মুক্ত হয়ে Rag GTPase এনজাইমকে সক্রিয় করে [৩]। সক্রিয় Rag GTPase সাইটোপ্লাজম থেকে mTORC1 কে লাইসোজোমের ওপর টেনে নিয়ে আসে, যেখানে Rheb প্রোটিনের সংস্পর্শে এসে এটি পূর্ণ শক্তি অর্জন করে এবং 4E-BP1 ও p70S6K ফসফোরাইলেশনের মাধ্যমে পেশির প্রোটিন সংশ্লেষণ (MPS) শুরু করে [২, ৩]।'
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
              'In pediatric severe acute malnutrition, distinct hormonal adaptations separate Kwashiorkor from Marasmus [4]. In Kwashiorkor, persistent carbohydrate intake maintains basal insulin secretion while dietary protein is near zero. Insulin suppresses peripheral lipolysis and muscle amino acid mobilization; consequently, hepatocytes lack amino acid substrates to synthesize albumin and Apolipoprotein B-100, resulting in intravascular oncotic collapse (pitting edema), immune failure, and massive hepatic steatosis [4]. In Marasmus, balanced starvation suppresses insulin, permitting sustained cortisol- and epinephrine-driven mobilization of fat and muscle, preserving hepatic albumin synthesis without edema [4].',
              'মারাত্মক শিশুপুষ্টিতে হরমোনের ভিন্নতার কারণে কোয়াশিওরকর ও ম্যারাসমাসের উপসর্গ আলাদা হয় [৪]। কোয়াশিওরকরে খাদ্যে শর্করা থাকায় ইনসুলিন চালু থাকে কিন্তু প্রোটিন থাকে না; ইনসুলিনের কারণে পেশি থেকে অ্যামিনো অ্যাসিড মুক্ত হতে পারে না, ফলে যকৃতে অ্যালবুমিন ও এপো-বি তৈরি বন্ধ হয়ে মারাত্মক শোথ এবং ফ্যাটি লিভার দেখা দেয় [৪]। ম্যারাসমাসে শর্করা ও প্রোটিন উভয়ই অনুপস্থিত থাকায় কর্টিসল হরমোন ধীরে ধীরে চর্বি ও পেশি ভেঙে অ্যালবুমিন কিছুটা সচল রাখে, ফলে শোথ হয় না [৪]।'
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
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Summary & Clinical Pearls', 'একাডেমিক সারাংশ ও ক্লিনিক্যাল মুক্তা'),
          paragraphs: [
            l(
              'Protein bioavailability is dictated by true ileal amino acid digestibility and limiting amino acid ratios, best captured by DIAAS [1]. Intracellular leucine availability sensed by Sestrin2 governs mTORC1-dependent muscle protein synthesis [3]. Monitoring nitrogen balance provides vital quantitative feedback in catabolic illness, while combating anabolic resistance requires higher per-meal leucine thresholds in aging populations [2, 4].',
              'প্রোটিনের কার্যকারিতা নির্ধারিত হয় ক্ষুদ্রান্ত্রের সত্য ইলিয়াল শোষণ এবং অপরিহার্য অ্যামিনো অ্যাসিডের অনুপাতের ওপর, যা DIAAS দ্বারা সবচেয়ে নিখুঁতভাবে পরিমাপ করা যায় [১]। কোষে সেসট্রিন২ দ্বারা লিউসিন সংবেদন পেশির প্রোটিন সংশ্লেষণের প্রধান নিয়ন্ত্রক [৩]। সংকটকালীন সময়ে নাইট্রোজেন ভারসাম্য পর্যবেক্ষণ এবং বয়স্কদের ক্ষেত্রে উচ্চ লিউসিনযুক্ত সুষম প্রোটিন নিশ্চিত করা সুস্থতার মূল স্তম্ভ [২, ৪]।'
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
          heading: l('Structural Proteomics of the Lysosomal Nutrient Sensing Machinery', 'লাইসোজোমাল পুষ্টি সংবেদন প্রক্রিয়ার স্ট্রাকচারাল প্রোটিওমিক্স'),
          paragraphs: [
            l(
              'Cryogenic electron microscopy (cryo-EM) has unveiled the atomic architecture of the lysosomal nutrient-sensing supercomplex anchoring mTORC1 [3]. Sestrin2 forms a two-domain structure where leucine binds in an internal pocket flanked by Thr374 and Tyr375, inducing a localized conformational collapse that disrupts its salt bridge with GATOR2 subunit WDR24 [3]. Concurrently, intraluminal amino acids (arginine) are sensed within the lysosomal lumen by SLC38A9, an essential transmembrane transceptor that engages the v-ATPase-Ragulator scaffold [3].',
              'ক্রায়ো-ইলেকট্রন মাইক্রোস্কোপির মাধ্যমে লাইসোজোমে mTORC1 নোঙর করার আণবিক কাঠামো বিস্তারিত জানা গেছে [৩]। সেসট্রিন২ এর অভ্যন্তরীণ পকেটে লিউসিন যুক্ত হলে Thr374 ও Tyr375 এর অবস্থানে পরিবর্তন ঘটে এবং এটি GATOR2 থেকে বিচ্ছিন্ন হয় [৩]। একই সময়ে লাইসোজোমের ভেতরের আর্জিনিনের মাত্রা পরিমাপ করে SLC38A9 নামক ট্রান্সমেমব্রেন সেন্সর, যা v-ATPase এর সাথে যুক্ত হয়ে প্রোটিন সংশ্লেষণের চূড়ান্ত অনুমতি দেয় [৩]।'
            ),
            l(
              'This dual inside-out (SLC38A9 arginine) and outside-in (Sestrin2 leucine, CASTOR1 arginine) coincidence detection circuit ensures that mTORC1 is never activated unless amino acids are concurrently replete in both the cytosolic and intra-organellar compartments, safeguarding the cell against catastrophic energetic collapse from premature anabolic commitment [2, 3].',
              'সাইটোপ্লাজমীয় লিউসিন এবং লাইসোজোমের অভ্যন্তরীণ আর্জিনিন—এই দ্বিমুখী পুষ্টি সংকেত নিশ্চিত করে যে কোষের ভেতরে ও অঙ্গাণুর অভ্যন্তরে সর্বত্র পর্যাপ্ত পুষ্টি না থাকা পর্যন্ত mTORC1 কোনোভাবেই সক্রিয় হবে না, যা কোষকে শক্তিহীন হয়ে ধ্বংস হওয়া থেকে রক্ষা করে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Stable Isotope Tracer Kinetics & Fractional Synthetic Rate Modeling', 'স্টেবল আইসোটোপ ট্রেসার ও ফ্র্যাকশনাল সিন্থেটিক রেট মডেলিং'),
          paragraphs: [
            l(
              'In vivo human muscle protein synthesis is quantified with extreme precision using continuous intravenous infusions of stable isotope amino acid tracers, such as L-[ring-13C6]phenylalanine or L-[1-13C]leucine [2]. By performing serial muscle biopsies of the vastus lateralis, researchers measure tracer incorporation into the bound myofibrillar protein pool relative to the intracellular precursor pool (myocellular aminoacyl-tRNA or intracellular free amino acid enrichment) over time [2].',
              'মানবদেহে পেশির প্রোটিন তৈরির হার নিখুঁতভাবে মাপতে L-[ring-13C6]ফিনাইলঅ্যালানিনের মতো স্থিতিশীল আইসোটোপ ট্রেসার রক্তে প্রবেশ করিয়ে পরীক্ষা করা হয় [২]। কঙ্কাল পেশির বায়োপসি নিয়ে আইসোটোপের অন্তর্ভুক্তির হার পরিমাপের মাধ্যমে প্রতি ঘণ্টায় কত শতাংশ নতুন পেশি তৈরি হচ্ছে (ফ্র্যাকশনাল সিন্থেটিক রেট বা FSR) তা বের করা হয় [২]।'
            ),
            l(
              'The Fractional Synthetic Rate (FSR, %/h) is calculated using the precursor-product equation: FSR = (ΔEb / [Ep x t]) x 100, where ΔEb is the change in protein-bound tracer enrichment, Ep is the precursor pool enrichment, and t is incorporation time [2]. These kinetic models have definitively confirmed the "muscle-full effect," where muscle protein synthesis saturates after approximately two hours following an optimal protein meal, with excess circulating amino acids being diverted irreversibly into hepatic ureagenesis and oxidation [2, 3].',
              'এই গতিশীল গাণিতিক মডেলের মাধ্যমেই প্রমাণিত হয়েছে যে পর্যাপ্ত প্রোটিন খাওয়ার প্রায় দুই ঘণ্টা পর পেশির গ্রহণক্ষমতা পূর্ণ হয়ে যায় ("পেশি-পূর্ণ প্রভাব"); এর অতিরিক্ত অ্যামিনো অ্যাসিড পেশিতে যুক্ত না হয়ে যকৃতে ইউরিয়া তৈরি করে মূত্রের মাধ্যমে নির্গত হয়ে যায় [২, ৩]।'
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
