import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const fatSolubleVitaminsRefs = [
  {
    id: 'gropper-advanced-nutrition-vitamins',
    authors: 'Sareen S. Gropper, Jack L. Smith, Timothy P. Carr',
    title: 'Advanced Nutrition and Human Metabolism, 8th Edition, Chapter 10: Fat-Soluble Vitamins',
    organization: 'Cengage Learning',
    year: 2021,
    url: 'https://www.cengage.com/c/advanced-nutrition-and-human-metabolism-8e-gropper/9780357449813/',
  },
  {
    id: 'holick-nejm-vitamin-d',
    authors: 'Michael F. Holick',
    title: 'Vitamin D Deficiency',
    organization: 'The New England Journal of Medicine',
    year: 2007,
    url: 'https://doi.org/10.1056/NEJMra070553',
    doi: '10.1056/NEJMra070553',
  },
  {
    id: 'dowd-chem-rev-vitamin-k',
    authors: 'Paul Dowd, Seung-Wook Ham, Sankar Naganathan, et al.',
    title: 'The Mechanism of Action of Vitamin K',
    organization: 'Chemical Reviews',
    year: 1995,
    url: 'https://doi.org/10.1021/cr00033a004',
    doi: '10.1021/cr00033a004',
  },
  {
    id: 'traber-free-rad-biol-vit-e',
    authors: 'Maret G. Traber, Jeffrey Atkinson',
    title: 'Vitamin E, antioxidant and nothing more',
    organization: 'Free Radical Biology and Medicine',
    year: 2007,
    url: 'https://doi.org/10.1016/j.freeradbiomed.2007.03.024',
    doi: '10.1016/j.freeradbiomed.2007.03.024',
  },
  {
    id: 'wald-science-visual-cycle',
    authors: 'George Wald',
    title: 'Molecular Basis of Visual Excitation',
    organization: 'Science (Nobel Lecture)',
    year: 1968,
    url: 'https://doi.org/10.1126/science.162.3850.230',
    doi: '10.1126/science.162.3850.230',
  },
  {
    id: 'shearer-thromb-haemost-vit-k',
    authors: 'Martin J. Shearer, Paul Newman',
    title: 'Metabolism and cell biology of vitamin K',
    organization: 'Thrombosis and Haemostasis',
    year: 2008,
    url: 'https://doi.org/10.1160/TH08-03-0147',
    doi: '10.1160/TH08-03-0147',
  },
]

export const nutrition09FatSolubleVitaminsLesson: LessonTopic = {
  id: 'topic.nutrition.fat-soluble-vitamins',
  slug: 'fat-soluble-vitamins',
  version: 2,
  updatedAt: '2026-10-14',
  title: l(
    '09 · Fat-Soluble Vitamins (A, D, E, K): Genomic Signaling, Phototransduction & Antioxidation',
    '০৯ · চর্বি-দ্রবণীয় ভিটামিন (A, D, E, K): জিনগত সংকেত, আলোক-সংবেদন ও অ্যান্টিঅক্সিডেশন'
  ),
  summary: l(
    'Comprehensive university textbook analysis of fat-soluble vitamin physiology: retinoid nuclear receptors (RAR/RXR) and the rhodopsin visual cycle, cutaneous photolysis and renal CYP27B1 activation of calcitriol for enterocyte TRPV6 calcium transport, alpha-tocopherol chain-breaking antioxidation in lipid bilayers, and the VKORC1 gamma-glutamyl carboxylation cycle governing hemostasis and vascular calcification.',
    'চর্বি-দ্রবণীয় ভিটামিনের পূর্ণাঙ্গ পাঠ্যপুস্তক শারীরবৃত্ত: রেটিনয়েড নিউক্লিয়ার রিসেপ্টর (RAR/RXR) ও রডোপসিন দৃষ্টি চক্র, ত্বকে অতিবেগুনি রশ্মির প্রভাবে সংশ্লেষণ ও বৃক্কে CYP27B1 দ্বারা সক্রিয় ক্যালসিট্রিওল গঠন, লিপিড মেমব্রেনে আলফা-টোকোফেরলের পারঅক্সিডেশন প্রতিরোধ এবং VKORC1 গামা-গ্লুটামিল কার্বক্সিলেশন চক্র ও রক্ত তঞ্চন নিয়ন্ত্রণ।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-14',
  objectives: [
    l(
      'Differentiate the absorption, micellar transport, and chylomicron packaging of the four fat-soluble vitamins (A, D, E, K) from water-soluble nutrients [1].',
      'চর্বি-দ্রবণীয় চারটি ভিটামিনের (A, D, E, K) মাইসেলি গঠন ও কাইলোমাইক্রনে প্যাকেজিং প্রক্রিয়াকে পানিতে দ্রবণীয় ভিটামিন থেকে আলাদা করা [১]।'
    ),
    l(
      'Detail the molecular steps of the rhodopsin visual cycle and retinoic acid nuclear receptor (RAR/RXR) signaling in cellular differentiation [1, 5].',
      'রডোপসিন দৃষ্টি চক্র এবং কোষীয় বিভেদনে রেটিনোয়িক অ্যাসিড নিউক্লিয়ার রিসেপ্টর (RAR/RXR) সংকেত প্রবাহের প্রতিটি আণবিক ধাপ ব্যাখ্যা করা [১, ৫]।'
    ),
    l(
      'Trace the dual-organ enzymatic activation of vitamin D to calcitriol and its transepithelial calcium transport cascade via TRPV6 and calbindin [1, 2].',
      'ভিটামিন ডি-এর যকৃৎ ও বৃক্কে সক্রিয়করণ এবং TRPV6 ও ক্যালবাইন্ডিনের মাধ্যমে অন্ত্রে ক্যালসিয়াম শোষণের আণবিক প্রক্রিয়া বর্ণনা করা [১, ২]।'
    ),
    l(
      'Contrast the membrane antioxidant radical-trapping kinetics of alpha-tocopherol with the post-translational gamma-carboxylation cycle of vitamin K and its inhibition by coumarin anticoagulants [3, 4, 6].',
      'কোষঝিল্লিতে আলফা-টোকোফেরলের অ্যান্টিঅক্সিডেন্ট ক্রিয়া এবং ভিটামিন কে নির্ভর গামা-কার্বক্সিলেশন চক্র ও ওয়ারফারিনের কার্যপদ্ধতির তুলনা করা [৩, ৪, ৬]।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.macronutrient-digestion', 'topic.nutrition.dietary-lipids-fatty-acids-pufa'],
  relatedTopicIds: ['topic.metabolism.lipid-digestion-chylomicrons', 'topic.nutrition.b-complex-vitamins-bioenergetics'],
  references: fatSolubleVitaminsRefs,
  evidenceBySection: {
    introduction: ['gropper-advanced-nutrition-vitamins', 'holick-nejm-vitamin-d'],
    structure: ['gropper-advanced-nutrition-vitamins', 'traber-free-rad-biol-vit-e'],
    mechanism: ['wald-science-visual-cycle', 'holick-nejm-vitamin-d'],
    integration: ['traber-free-rad-biol-vit-e', 'dowd-chem-rev-vitamin-k', 'shearer-thromb-haemost-vit-k'],
    practice: ['gropper-advanced-nutrition-vitamins', 'shearer-thromb-haemost-vit-k'],
    takeaways: ['gropper-advanced-nutrition-vitamins', 'holick-nejm-vitamin-d'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Four Fat-Soluble Vitamins: Nature, Storage & Physics', '১. চারটি চর্বি-দ্রবণীয় ভিটামিন: প্রকৃতি, সঞ্চয় ও স্বতন্ত্র ভৌত বৈশিষ্ট্য'), sectionId: 'introduction' },
      { id: 'sec-absorption', label: l('2. How the Body Absorbs Fat-Soluble Vitamins: The Micelle Shuttle', '২. চর্বি-দ্রবণীয় ভিটামিনের শোষণ রহস্য: মাইসেলি পরিবহন ব্যবস্থা'), sectionId: 'structure' },
      { id: 'sec-ad', label: l('3. Vitamin A for Vision & Vitamin D for Bone Hormones', '৩. দৃষ্টির জন্য ভিটামিন এ ও হাড়ের হরমোন ভিটামিন ডি'), sectionId: 'mechanism' },
      { id: 'sec-ek', label: l('4. Vitamin E Membrane Protection & Vitamin K Coagulation Cycle', '৪. ভিটামিন ই মেমব্রেন সুরক্ষা ও ভিটামিন কে রক্ত তঞ্চন চক্র'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('5. Food Sources, Bioavailability & Clinical Malabsorption', '৫. খাদ্য উৎস, জৈবপ্রাপ্যতা ও ক্লিনিক্যাল ম্যালঅ্যাবজর্বশন'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Core Takeaways & High-Yield Summary', '৬. মূল শিক্ষণীয় সারসংক্ষেপ ও নির্দেশিকা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('11-cis-Retinal', '১১-সিস-রেটিনাল'),
        definition: l(
          'The photosensitive aldehyde chromophore of Vitamin A that binds to the apoprotein opsin via a protonated Schiff base to form rhodopsin in rod photoreceptors, undergoing sub-picosecond photoisomerization to all-trans-retinal upon photon absorption.',
          'ভিটামিন এ-এর আলোক-সংবেদনশীল অ্যালডিহাইড রূপ যা অপসিন প্রোটিনের সাথে শিফ-বেস বন্ধনে যুক্ত হয়ে রডোপসিন গঠন করে এবং আলো পড়ামাত্রই চোখের মধ্যে অল-ট্রান্স-রেটিনালে রূপান্তরিত হয়ে দৃষ্টির অনুভূতি জাগায়।'
        ),
      },
      {
        term: l('Calcitriol [1,25(OH)2D3]', 'ক্যালসিট্রিওল [১,২৫(OH)2D3]'),
        definition: l(
          'The biologically active, hormonal secosteroid metabolite of Vitamin D produced via sequential hepatic 25-hydroxylation (CYP2R1) and renal proximal tubular 1-alpha-hydroxylation (CYP27B1); functions as a high-affinity ligand for the nuclear Vitamin D Receptor (VDR).',
          'ভিটামিন ডি-এর সবচেয়ে সক্রিয় হরমোনীয় রূপ যা যকৃতে ২৫-হাইড্রক্সিলেশন এবং পরবর্তীতে বৃক্কে ১-আলফা-হাইড্রক্সিলেশনের মাধ্যমে তৈরি হয়ে কোষে ক্যালসিয়াম ও ফসফেট শোষণ নিয়ন্ত্রণ করে।'
        ),
      },
      {
        term: l('alpha-Tocopherol Transfer Protein (alpha-TTP)', 'আলফা-টোকোফেরল ট্রান্সফার প্রোটিন (alpha-TTP)'),
        definition: l(
          'A specialized hepatic cytosolic transport protein that selectively binds RRR-alpha-tocopherol with high affinity, facilitating its incorporation into nascent VLDL particles for systemic circulation while permitting other dietary vitamers to be excreted in bile.',
          'যকৃতের একটি বিশেষ পরিবহন প্রোটিন যা খাদ্য থেকে প্রাপ্ত ভিটামিন ই-এর রূপগুলোর মধ্যে সুনির্দিষ্টভাবে আরআরআর-আলফা-টোকোফেরলকে বেছে নিয়ে রক্তে পাঠায় এবং বাকি রূপগুলোকে পিত্তরসের মাধ্যমে বের করে দেয়।'
        ),
      },
      {
        term: l('Vitamin K Epoxide Reductase (VKORC1)', 'ভিটামিন কে ইপক্সাইড রিডাক্টেজ (VKORC1)'),
        definition: l(
          'The rate-limiting microsomal enzyme in the Vitamin K cycle that reduces vitamin K 2,3-epoxide back to vitamin K quinone and subsequently to active vitamin K hydroquinone (KH2); the molecular therapeutic target inhibited by 4-hydroxycoumarin anticoagulants such as warfarin.',
          'ভিটামিন কে চক্রের একটি প্রধান এনজাইম যা জারিত ভিটামিন কে ইপক্সাইডকে পুনরায় কার্যকরী ভিটামিন কে হাইড্রোকুইনোনে রূপান্তর করে; রক্ত পাতলা করার ওষুধ ওয়ারফারিন এই এনজাইমটিকে নিষ্ক্রিয় করে কাজ করে।'
        ),
      },
      {
        term: l('gamma-Carboxyglutamic Acid (Gla)', 'গামা-কার্বক্সিগ্লুটামিক অ্যাসিড (Gla)'),
        definition: l(
          'An atypical, dicarboxylic amino acid generated via post-translational carboxylation of specific glutamate residues by vitamin K-dependent gamma-glutamyl carboxylase; its dual negative carboxylate charges coordinate divalent calcium ions to anchor clotting factors to phospholipid membranes.',
          'একটি বিশেষ দ্বৈত-ঋণাত্মক অ্যামিনো অ্যাসিড যা ভিটামিন কে নির্ভর এনজাইম দ্বারা প্রোটিনের গ্লুটামেটে কার্বক্সিল গ্রুপ যুক্ত করে তৈরি হয়; এটি ক্যালসিয়াম আয়নের সাথে যুক্ত হয়ে রক্তের অনুচক্রিকার গায়ে রক্ত জমাট বাঁধতে সাহায্য করে।'
        ),
      },
      {
        term: l('Nuclear Retinoic Acid Receptor (RAR/RXR)', 'নিউক্লিয়ার রেটিনোয়িক অ্যাসিড রিসেপ্টর (RAR/RXR)'),
        definition: l(
          'A ligand-activated nuclear transcription factor heterodimer that binds all-trans-retinoic acid (at RAR) and 9-cis-retinoic acid (at RXR), engaging Retinoic Acid Response Elements (RARE) in target gene promoters to govern epithelial differentiation, mucosal immunity, and embryogenesis.',
          'কোষের নিউক্লিয়াসে অবস্থিত একটি রিসেপ্টর কমপ্লেক্স যা ভিটামিন এ-এর সক্রিয় রূপ রেটিনোয়িক অ্যাসিডের সাথে যুক্ত হয়ে ডিএনএ-তে বসে শ্লেষ্মা আবরণী, চোখের কর্নিয়া ও রোগপ্রতিরোধ ব্যবস্থার শত শত জিন নিয়ন্ত্রণ করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Therapeutic High-Dose Vitamin D Repletion in Severe Deficiency', 'তীব্র ভিটামিন ডি ঘাটতিতে উচ্চমাত্রার চিকিৎসাগত ডোজ নির্ধারণ'),
        steps: [
          l(
            'Step 1: Evaluate baseline laboratory values: Patient presents with profound fatigue, proximal muscle weakness, and diffuse bone tenderness. Laboratory testing reveals: Serum 25(OH)D = 8.0 ng/mL (profound deficiency, target reference range: 30–50 ng/mL), Serum Ionized Calcium = 4.4 mg/dL (low-normal), Serum Intact PTH = 112 pg/mL (compensatory secondary hyperparathyroidism). Weight = 70 kg.',
            'ধাপ ১: রোগীর ল্যাবরেটরি রিপোর্ট মূল্যায়ন করুন: রোগীর সিরাম ২৫(OH)D = ৮.০ ng/mL (মারাত্মক ঘাটতি, স্বাভাবিক লক্ষ্যমাত্রা: ৩০–৫০ ng/mL), ক্যালসিয়াম = ৪.৪ mg/dL, এবং প্যারাথাইরয়েড হরমোন PTH = ১১২ pg/mL (ঘাটতি পূরণে অতিরিক্ত বৃদ্ধি)। রোগীর ওজন = ৭০ কেজি।'
          ),
          l(
            'Step 2: Calculate target cumulative repletion dose using the clinical Van Groningen loading rule: Cumulative Dose (IU) = 40 x [Target 25(OH)D (nmol/L) - Current 25(OH)D (nmol/L)] x Body Weight (kg). Convert 8 ng/mL to nmol/L: 8 x 2.496 = 20 nmol/L. Target = 75 nmol/L (30 ng/mL). Deficit = 75 - 20 = 55 nmol/L. Cumulative Dose = 40 x 55 x 70 = 154,000 IU.',
            'ধাপ ২: চিকিৎসাগত লোডিং সূত্র অনুযায়ী মোট প্রয়োজনীয় ডোজ হিসাব করুন: মোট ডোজ (IU) = ৪০ x [কাঙ্ক্ষিত মাত্রা (nmol/L) - বর্তমান মাত্রা (nmol/L)] x ওজন (কেজি)। ৮ ng/mL কে রূপান্তর করুন: ৮ x ২.৪৯৬ = ২০ nmol/L। কাঙ্ক্ষিত মাত্রা = ৭৫ nmol/L (৩০ ng/mL)। ঘাটতি = ৭৫ - ২০ = ৫৫ nmol/L। মোট ডোজ = ৪০ x ৫৫ x ৭০ = ১,৫৪,০০০ IU।'
          ),
          l(
            'Step 3: Structure clinical prescription schedule: Administer Ergocalciferol or Cholecalciferol 50,000 IU orally once weekly for 8 weeks (Total = 400,000 IU), accounting for adipose tissue sequestration and hepatic 25-hydroxylase saturation kinetics. Transition to a daily maintenance dose of 2,000 IU/day.',
            'ধাপ ৩: ওষুধ সেবনের রুটিন নির্ধারণ করুন: প্রতি সপ্তাহে ৫০,০০০ IU ভিটামিন ডি৩ ক্যাপসুল মোট ৮ সপ্তাহ সেবন করান (মোট ৪,০০,০০০ IU), যা চর্বিতে জমে থাকা এবং যকৃতে প্রক্রিয়াকরণের সীমাবদ্ধতা পূরণ করবে। ৮ সপ্তাহ পর দৈনিক ২,০০০ IU রক্ষণাবেক্ষণ ডোজে পরিবর্তন করুন।'
          ),
          l(
            'Step 4: Monitor clinical safety and secondary hyperparathyroidism resolution: Recheck serum 25(OH)D, serum calcium, creatinine, and intact PTH at 12 weeks. Verify that serum 25(OH)D rises above 30 ng/mL, PTH normalizes below 65 pg/mL, and serum calcium remains <10.2 mg/dL to rule out hypervitaminosis D.',
            'ধাপ ৪: ১২ সপ্তাহ পর নিরাপত্তা ও নিরাময় পরীক্ষা করুন: ১২ সপ্তাহ পর পুনরায় সিরাম ২৫(OH)D, ক্যালসিয়াম, ক্রিয়েটিনিন এবং PTH পরীক্ষা করুন। নিশ্চিত করুন যে ২৫(OH)D ৩০ ng/mL এর ওপরে উঠেছে এবং ক্যালসিয়াম স্বাভাবিক রয়েছে যাতে বিষক্রিয়া এড়ানো যায়।'
          ),
        ],
        conclusion: l(
          'A structured 8-week course of 50,000 IU weekly successfully saturated hepatic CYP2R1 enzymes and repleted total body secosteroid stores, normalizing serum 25(OH)D to 38 ng/mL, suppressing compensatory secondary hyperparathyroidism, and restoring optimal osteoid mineralization without hypercalcemia.',
          '৮ সপ্তাহের ৫০,০০০ IU সাপ্তাহিক চিকিৎসায় রোগীর যকৃৎ ও মেদকলার ভিটামিন ডি ভাণ্ডার পূর্ণ হয়েছে, রক্তের মাত্রা ৩৮ ng/mL এ উন্নীত হয়েছে এবং অতিরিক্ত প্যারাথাইরয়েড হরমোন স্বাভাবিক হয়ে কোনো বিষক্রিয়া ছাড়াই হাড়ের খনিজায়ন পুনঃপ্রতিষ্ঠিত হয়েছে।'
        ),
      },
      {
        title: l('Managing Dietary Vitamin K Intake and Warfarin Anticoagulation Stability', 'খাদ্যে ভিটামিন কে গ্রহণ এবং ওয়ারফারিন অ্যান্টিকোয়াগুল্যান্টের ভারসাম্য নিয়ন্ত্রণ'),
        steps: [
          l(
            'Step 1: Clinical Case Presentation: A 64-year-old patient with mechanical mitral valve replacement is maintained on warfarin 5 mg/day with a target International Normalized Ratio (INR) of 2.5 to 3.5. Baseline stable INR is 2.9 on a consistent diet.',
            'ধাপ ১: রোগীর বিবরণ: যান্ত্রিক ভালভ প্রতিস্থাপিত ৬৪ বছর বয়সী রোগী দৈনিক ৫ মিলিগ্রাম ওয়ারফারিন সেবন করছেন এবং তার রক্তের কাঙ্ক্ষিত INR মাত্রা ২.৫ থেকে ৩.৫। একটি সুষম খাদ্যাভ্যাসে তার INR ২.৯ এ স্থিতিশীল ছিল।'
          ),
          l(
            'Step 2: Identify dietary disruption: Over two weeks, the patient initiates an intensive green smoothie diet rich in raw kale (817 mcg phylloquinone/100g) and spinach (483 mcg/100g), ingesting ~1,200 mcg/day of vitamin K1 (normal baseline intake: 90–120 mcg/day). Follow-up testing reveals INR has plunged to 1.4 (subtherapeutic, marked thromboembolic stroke risk).',
            'ধাপ ২: খাদ্যের পরিবর্তন শনাক্তকরণ: গত দুই সপ্তাহে রোগী প্রতিদিন প্রচুর পালং শাক ও কেল সমৃদ্ধ জুস খাওয়া শুরু করেন, ফলে দৈনিক ভিটামিন কে গ্রহণ প্রায় ১২০০ মাইক্রোগ্রামে পৌঁছায় (স্বাভাবিক গ্রহণ: ৯০-১২০ mcg)। ফলে রক্তের INR বিপজ্জনকভাবে কমে ১.৪ এ নেমে আসে, যা রক্ত জমাট বেঁধে স্ট্রোকের মারাত্মক ঝুঁকি তৈরি করে।'
          ),
          l(
            'Step 3: Explain the molecular pharmacological antagonism: Warfarin competitively inhibits VKORC1. Massive dietary influx of phylloquinone bypasses VKORC1 via alternative hepatic quinone reductases (NQO1 / DT-diaphorase), generating sufficient KH2 to restore gamma-glutamyl carboxylation of factors II, VII, IX, and X, thereby neutralizing warfarin-mediated anticoagulation.',
            'ধাপ ৩: আণবিক মেকানিজম ব্যাখ্যা: ওয়ারফারিন VKORC1 এনজাইমকে আটকে রাখে। কিন্তু খাবারে অতিরিক্ত ভিটামিন কে এলে যকৃতের বিকল্প এনজাইম (NQO1) সক্রিয় হয়ে ভিটামিন কে-কে বিজারিত করে ফেলে; ফলে রক্ত জমাট বাঁধার ফ্যাক্টরগুলো পুনরায় তৈরি হয়ে ওয়ারফারিনের কার্যকারিতা নষ্ট করে দেয়।'
          ),
          l(
            'Step 4: Clinical Dietary Intervention: Educate the patient that the goal is not strict avoidance of green vegetables, but strict day-to-day consistency of vitamin K intake (~90–120 mcg/day). Titrate warfarin dose temporarily under close daily INR monitoring until stable therapeutic range (2.5–3.5) is re-established.',
            'ধাপ ৪: খাদ্যাভ্যাস পুনর্বিন্যাস: রোগীকে বোঝাতে হবে যে সবুজ শাকসবজি পুরোপুরি বাদ দেওয়া লক্ষ্য নয়, বরং প্রতিদিন সমপরিমাণ ভিটামিন কে (প্রায় ৯০-১২০ mcg) গ্রহণ নিশ্চিত করাই আসল কৌশল। খাদ্য স্থিতিশীল রেখে রক্তের INR পুনরায় ২.৫ থেকে ৩.৫ এর মধ্যে না আসা পর্যন্ত ওয়ারফারিনের ডোজ সাময়িকভাবে সমন্বয় করুন।'
          ),
        ],
        conclusion: l(
          'Re-establishing a consistent daily intake of dietary phylloquinone alongside temporary warfarin titration restored the patient’s INR to therapeutic target (2.8). Dietary education must emphasize consistency rather than elimination of healthy vitamin K-rich foods.',
          'খাবারে প্রতিদিন সমপরিমাণ ভিটামিন কে বজায় রাখা এবং সতর্কভাবে ওয়ারফারিনের ডোজ সমন্বয়ের মাধ্যমে রোগীর INR পুনরায় ২.৮ এ স্থিতিশীল করা সম্ভব হয়েছে। চিকিৎসার মূল চাবিকাঠি হলো শাকসবজি বর্জন নয়, বরং প্রতিদিনের খাদ্যতালিকায় এর স্থিতিশীলতা রক্ষা করা।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does total surgical resection of the terminal ileum or chronic biliary obstruction cause severe malabsorption of vitamins A, D, E, and K while leaving vitamin C absorption unaffected?',
          'অন্ত্রের প্রান্তীয় ইলিয়াম কেটে ফেললে বা পিত্তনালী বন্ধ হয়ে গেলে ভিটামিন এ, ডি, ই এবং কে শোষণে মারাত্মক বিপর্যয় ঘটে, অথচ ভিটামিন সি-এর শোষণে কোনো সমস্যা হয় না কেন?'
        ),
        answer: l(
          'Vitamins A, D, E, and K are highly hydrophobic molecules requiring incorporation into mixed bile salt micelles to traverse the unstirred water layer and enter enterocytes via lipophilic transporters (CD36, NPC1L1, SR-BI). Loss of bile salts or ileal enterocytes abolishes micelle formation and chylomicron packaging. In contrast, vitamin C is hydrophilic and absorbed via specialized apical Sodium-Dependent Vitamin C Transporters (SVCT1/2) in the proximal jejunum, entirely independent of lipid emulsification.',
          'ভিটামিন এ, ডি, ই এবং কে সম্পূর্ণ চর্বি-দ্রবণীয় হওয়ায় এদের শোষণের জন্য পিত্তলবণের মিক্সড মাইসেলি এবং কাইলোমাইক্রনে প্রবেশ অপরিহার্য। পিত্তরস না থাকলে এই মাইসেলি তৈরি হতে পারে না। অন্যদিকে ভিটামিন সি পানিতে দ্রবণীয় হওয়ায় এটি কোনো চর্বি ছাড়াই ক্ষুদ্রান্ত্রের উপরের অংশে সরাসরি সোডিয়াম-নির্ভর SVCT1 চ্যানেলের মাধ্যমে অনায়াসে রক্তে শোষিত হয়।'
        ),
      },
      {
        question: l(
          'What is the precise biochemical mechanism by which 4-hydroxycoumarin anticoagulants (e.g., warfarin) inhibit the synthesis of functional blood clotting factors without directly destroying the factor proteins themselves?',
          'ওয়ারফারিন জাতীয় ওষুধ রক্ত জমাট বাঁধার ফ্যাক্টরগুলোকে সরাসরি ধ্বংস না করেও কীভাবে এদের কার্যক্ষমতা সম্পূর্ণ নষ্ট করে দেয়?'
        ),
        answer: l(
          'Warfarin acts as a competitive inhibitor of Vitamin K Epoxide Reductase (VKORC1). By blocking the reduction of vitamin K 2,3-epoxide back to vitamin K hydroquinone (KH2), it starves gamma-glutamyl carboxylase (GGCX) of its required electron donor. Consequently, clotting factors II, VII, IX, and X are synthesized as non-functional, undercarboxylated proteins (PIVKA) that lack the dicarboxylic Gla domains required to coordinate calcium and bind negatively charged platelet phospholipid surfaces.',
          'ওয়ারফারিন ভিটামিন কে চক্রের VKORC1 এনজাইমকে আটকে রাখে, ফলে এনজাইমটি নিষ্ক্রিয় ভিটামিন কে-কে সক্রিয় ভিটামিন কে হাইড্রোকুইনোনে (KH2) রূপান্তর করতে পারে না। ফলে যকৃতে তৈরি হওয়া ক্লটিং ফ্যাক্টরগুলোতে ক্যালসিয়াম ধরার বিশেষ খাঁজ (Gla ডোমেন) তৈরি হতে পারে না; এই অকেজো প্রোটিনগুলো ক্ষতস্থানে অনুচক্রিকার গায়ে রক্ত জমাট বাঁধাতে সম্পূর্ণ ব্যর্থ হয়।'
        ),
      },
      {
        question: l(
          'Why is measuring serum calcitriol [1,25(OH)2D] considered clinically misleading when evaluating nutritional vitamin D status, and why is serum 25-hydroxyvitamin D [25(OH)D] the gold standard biomarker?',
          'শরীরে ভিটামিন ডি-এর ঘাটতি নির্ণয়ে সক্রিয় ক্যালসিট্রিওল [১,২৫(OH)2D] মাপা কেন চিকিৎসাগতভাবে মারাত্মক ভুল, এবং কেন ২৫-হাইড্রক্সিভিটামিন ডি [২৫(OH)D] হলো আন্তর্জাতিক মানদণ্ড?'
        ),
        answer: l(
          'Serum 25(OH)D has a long circulating half-life of 2 to 3 weeks, reflecting total cutaneous synthesis and dietary intake with minimal acute fluctuations. In contrast, calcitriol has a circulating half-life of only 4 to 15 hours and is tightly regulated by PTH. In early or moderate vitamin D deficiency, falling calcium triggers a compensatory surge in PTH, which hyper-stimulates renal CYP27B1. As a result, calcitriol levels remain paradoxically normal or elevated even while total body secosteroid stores are virtually depleted.',
          'সিরাম ২৫(OH)D-এর অর্ধায়ু ২ থেকে ৩ সপ্তাহ এবং এটি রক্তে অত্যন্ত স্থিতিশীলভাবে ভিটামিন ডি-এর প্রকৃত ভাণ্ডার প্রকাশ করে। অন্যদিকে সক্রিয় ক্যালসিট্রিওলের অর্ধায়ু মাত্র কয়েক ঘণ্টা। শরীরে ভিটামিন ডি কমতে শুরু করলে রক্তের ক্যালসিয়াম বাঁচাতে প্যারাথাইরয়েড হরমোন (PTH) অতিরিক্ত বেড়ে যায়, যা কিডনিকে বাধ্য করে শেষ অবশিষ্ট ভিটামিনটুকু ভেঙে অতিরিক্ত ক্যালসিট্রিওল তৈরি করতে। ফলে শরীরে চরম ভিটামিন ডি ঘাটতি থাকা সত্ত্বেও রক্তে ক্যালসিট্রিওল স্বাভাবিক বা উল্টো বেশি দেখা যায়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'fat-soluble-vitamins-pathway',
    title: l(
      'Interactive Fat-Soluble Vitamin Biological Pathways',
      'চর্বি-দ্রবণীয় ভিটামিনের শারীরবৃত্তীয় গতিপথ রূপরেখা'
    ),
    description: l(
      'Explore the molecular routes of vitamins A, D, E, and K from enterocyte micellar uptake to nuclear gene transcription, bone mineral regulation, antioxidant defense, and the coagulation cascade.',
      'অন্ত্রের কোষে মাইসেলি গঠন থেকে শুরু করে জিন নিয়ন্ত্রণ, হাড়ের খনিজ ভারসাম্য, কোষঝিল্লির অ্যান্টিঅক্সিডেশন এবং রক্ত জমাট বাঁধার আণবিক প্রক্রিয়া পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Schematic representation of normal adult steady-state physiological transport and intracellular receptor signaling.',
      'সুস্থ প্রাপ্তবয়স্কদের স্বাভাবিক শারীরবৃত্তীয় পরিবহন ও ইন্ট্রাসেলুলার রিসেপ্টর সংকেতের চিত্রভিত্তিক রূপরেখা।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'micellar-absorption-node',
        label: l('Biliary Micelle & Chylomicron Transport Hub', 'পিত্তরসের মাইসেলি ও কাইলোমাইক্রন পরিবহন কেন্দ্র'),
        description: l(
          'Bile salts and pancreatic enzymes solubilize hydrophobic vitamins into mixed micelles for uptake via CD36 and NPC1L1, followed by incorporation into lymphatic chylomicrons [1].',
          'পিত্তলবণ ও লাইপেজ চর্বি-দ্রবণীয় ভিটামিনগুলোকে মিক্সড মাইসেলিতে আবদ্ধ করে এন্টারোসাইটের ভেতর পৌঁছে দেয় এবং সেখান থেকে কাইলোমাইক্রনের মাধ্যমে লসিকায় প্রবেশ করে [১]।'
        ),
        details: l(
          'Impaired bile acid secretion (cholestasis) or pancreatic lipase insufficiency collapses absorption from >80% down to <15%, precipitating rapid systemic deficiencies [1].',
          'পিত্তনালীর রোগ বা অগ্ন্যাশয়ের এনজাইমের ঘাটতি হলে ভিটামিনের শোষণ ৮০% থেকে কমে ১৫%-এর নিচে নেমে আসে [১]।'
        ),
        color: '#059669',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'vit-a-rhodopsin-node',
        label: l('Vitamin A: 11-cis-Retinal & Nuclear RAR/RXR Heterodimers', 'ভিটামিন এ: ১১-সিস-রেটিনাল ও নিউক্লিয়ার RAR/RXR রিসেপ্টর'),
        description: l(
          '11-cis-retinal couples with opsin in rod outer segments to mediate night vision, while all-trans-retinoic acid governs epithelial mucosal gene transcription [1, 5].',
          '১১-সিস-রেটিনাল চোখের রড কোষে দৃষ্টি সংবেদ তৈরি করে এবং রেটিনোয়িক অ্যাসিড নিউক্লিয়াসে গিয়ে শ্লেষ্মা আবরণী ও রোগপ্রতিরোধের জিন চালু রাখে [১, ৫]।'
        ),
        details: l(
          'BCO1 cleaves dietary beta-carotene into retinal. Retinol bound to RBP4 and transthyretin circulates to peripheral tissues to sustain immune and corneal barrier integrity [1, 5].',
          'BCO1 এনজাইম বিটা-ক্যারোটিনকে ভেঙে রেটিনল তৈরি করে যা RBP4 প্রোটিনের মাধ্যমে রক্তে ছড়িয়ে চোখের কর্নিয়া ও অন্ত্রের দেয়াল সুস্থ রাখে [১, ৫]।'
        ),
        color: '#10b981',
        svgCoords: { x: 25, y: 95, width: 310, height: 48 },
      },
      {
        id: 'vit-d-endocrine-node',
        label: l('Vitamin D: Renal CYP27B1 Calcitriol & TRPV6 Calcium Flux', 'ভিটামিন ডি: বৃক্কের CYP27B1 ক্যালসিট্রিওল ও ক্যালসিয়াম শোষণ'),
        description: l(
          'Cutaneous UVB synthesis of D3 is converted by hepatic CYP2R1 to 25(OH)D, then activated in renal tubules by CYP27B1 to calcitriol to drive intestinal calcium entry [1, 2].',
          'ত্বকে অতিবেগুনি রশ্মির প্রভাবে তৈরি ভিটামিন ডি যকৃতে ২৫(OH)D এবং বৃক্কে ১,২৫(OH)2D ক্যালসিট্রিওলে পরিণত হয়ে অন্ত্র থেকে ক্যালসিয়াম শোষণ নিয়ন্ত্রণ করে [১, ২]।'
        ),
        details: l(
          'Calcitriol binds the nuclear VDR, upregulating apical TRPV6 and cytosolic calbindin-D9k, elevating active duodenal calcium absorption from 10% to over 30% [1, 2].',
          'ক্যালসিট্রিওল কোষে ঢুকে বিশেষ ক্যালসিয়াম গেট (TRPV6) এবং ক্যালবাইন্ডিন ট্রাক তৈরির নির্দেশ দেয়, ফলে খাদ্য থেকে ক্যালসিয়াম শোষণ ১০% থেকে বেড়ে ৩০% ছাড়িয়ে যায় [১, ২]।'
        ),
        color: '#2563eb',
        svgCoords: { x: 25, y: 155, width: 310, height: 48 },
      },
      {
        id: 'vit-e-membrane-node',
        label: l('Vitamin E: Alpha-Tocopherol Peroxyl Radical Scavenger', 'ভিটামিন ই: আলফা-টোকোফেরল পারঅক্সিল র্যাডিকেল প্রতিরোধক'),
        description: l(
          'Alpha-tocopherol terminates PUFA lipid peroxidation chains in biological membranes, maintained by ascorbic acid single-electron reduction at the membrane interface [1, 4].',
          'কোষঝিল্লির লিপিড স্তরে আলফা-টোকোফেরল ফ্রি র্যাডিকেল ধ্বংস করে দেয় এবং ভিটামিন সি দ্বারা ক্রমাগত নিজে সচল হয়ে কোষকে ধ্বংসের হাত থেকে বাঁচায় [১, ৪]।'
        ),
        details: l(
          'Hepatic alpha-TTP selectively secretes RRR-alpha-tocopherol into VLDL, while gamma-tocopherol is degraded via omega-oxidation into water-soluble carboxyethyl hydroxychromans [1, 4].',
          'যকৃতের আলফা-টিটিপি প্রোটিন কেবল আলফা-টোকোফেরলকে বেছে নিয়ে রক্তে পাঠায় এবং বাকি রূপগুলোকে জারিত করে প্রস্রাবের মাধ্যমে বের করে দেয় [১, ৪]।'
        ),
        color: '#d97706',
        svgCoords: { x: 355, y: 95, width: 310, height: 48 },
      },
      {
        id: 'vit-k-coagulation-node',
        label: l('Vitamin K Cycle: GGCX & VKORC1 Gla Synthesis', 'ভিটামিন কে চক্র: যকৃতের VKORC1 ও গামা-গ্লুটামিল কার্বক্সিলেশন'),
        description: l(
          'Reduced vitamin K hydroquinone fuels GGCX to carboxylate glutamate residues on clotting factors II, VII, IX, and X, generating Gla domains that coordinate calcium to trigger hemostasis [1, 3].',
          'ভিটামিন কে হাইড্রোকুইনোন গ্লুটামেটে অতিরিক্ত কার্বক্সিল গ্রুপ যুক্ত করে Gla ডোমেন তৈরি করে যা ক্যালসিয়াম ধরে রেখে রক্ত জমাট বাঁধায় [১, ৩]।'
        ),
        details: l(
          'Warfarin inhibits VKORC1 recycling, depleting active hydroquinone and generating undercarboxylated PIVKA proteins, serving as an effective oral anticoagulant [1, 3, 6].',
          'ওয়ারফারিন VKORC1 এনজাইম বন্ধ করে দিলে ভিটামিন কে চক্র থমকে যায় এবং অকেজো প্রোটিন তৈরি হয়ে রক্ত জমাট বাঁধা প্রতিহত হয় [১, ৩, ৬]।'
        ),
        color: '#dc2626',
        svgCoords: { x: 355, y: 155, width: 310, height: 48 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Four Fat-Soluble Vitamins: Nature, Storage & Physics', 'চারটি চর্বি-দ্রবণীয় ভিটামিন: প্রকৃতি, সঞ্চয় ও স্বতন্ত্র ভৌত বৈশিষ্ট্য'),
          paragraphs: [
            l(
              'Unlike water-soluble vitamins (such as Vitamin C and the B-complex family) that dissolve easily in biological fluids and are excreted rapidly in urine when consumed in excess, the fat-soluble vitamins—Vitamins A, D, E, and K—are completely hydrophobic oily molecules [1]. Because they cannot mix with water, their journey through the human digestive system, bloodstream, and cells requires specialized biochemical vehicles, including bile acid micelles, lymphatic chylomicrons, and carrier transport proteins [1].',
              'ভিটামিন সি এবং বি-কমপ্লেক্সের মতো পানিতে দ্রবণীয় ভিটামিনগুলো সহজেই রক্তে ও জলীয় অংশে গলে যায় এবং অতিরিক্ত গ্রহণ করলে প্রস্রাবের সাথে বের হয়ে যায়; কিন্তু চর্বি-দ্রবণীয় চার ভিটামিন—ভিটামিন এ, ডি, ই এবং কে—সম্পূর্ণ বিপরীত বৈশিষ্ট্যের হাইড্রোফোবিক বা তেলজাতীয় অণু [১]। এরা পানিতে দ্রবীভূত হতে পারে না বলে পরিপাকনালি থেকে শোষণ, রক্তে পরিবহন এবং কোষে পৌঁছানোর জন্য পিত্তরসের মাইসেলি, কাইলোমাইক্রন লিপিড কণা এবং বিশেষ বাহক প্রোটিনের ওপর নির্ভর করতে হয় [১]।'
            ),
            l(
              'This lipid-solubility grants these vitamins a profound physiological capability: our bodies can store them in massive quantities for months or even years [1]. The liver serves as the master warehouse for Vitamin A (stored inside specialized hepatic stellate cells as retinyl esters) and Vitamin D (stored in circulation and liver as calcidiol) [1, 2]. Body fat (adipose tissue) serves as the expansive reservoir for Vitamin E (alpha-tocopherol) [1, 4]. Because these vitamins are avidly stored rather than immediately excreted, human beings can survive prolonged periods of seasonal dietary scarcity without developing immediate clinical deficiencies [1].',
              'চর্বিতে দ্রবীভূত হওয়ার এই বৈশিষ্ট্যের কারণে মানবদেহ এই ভিটামিনগুলোকে মাসের পর মাস এমনকি বছরজুড়ে সঞ্চয় করে রাখতে পারে [১]। আমাদের যকৃত হলো ভিটামিন এ (যকৃতের বিশেষ স্ট্যালেট কোষে রেটিনাইল এস্টার হিসেবে) এবং ভিটামিন ডি-এর প্রধান কেন্দ্রীয় ভাণ্ডার [১, ২]। আর শরীরের মেদ বা চর্বি কলা হলো ভিটামিন ই-এর প্রধান সঞ্চয়স্থান [১, ৪]। প্রস্রাবের সাথে অপচয় না হয়ে দেহে সঞ্চিত থাকার ফলেই মানুষ দীর্ঘদিন খাদ্য সংকটে থাকলেও তৎক্ষণাৎ ভিটামিনের প্রাণঘাতী ঘাটতিতে পড়ে না [১]।'
            ),
            l(
              'However, this enormous storage capacity is a double-edged sword [1]. While water-soluble vitamins rarely accumulate to dangerous levels, fat-soluble vitamins—particularly Vitamin A and Vitamin D—can slowly accumulate to severe toxic thresholds if consumed in excessive supplemental doses [1, 2]. Hypervitaminosis A can cause birth defects, liver damage, and increased intracranial pressure, while hypervitaminosis D triggers metastatic calcium deposition in blood vessels and kidneys [1, 2]. Therefore, understanding how our bodies absorb, store, and utilize these four powerful molecules is critical for lifelong health [1].',
              'তবে এই দীর্ঘমেয়াদী সঞ্চয় ক্ষমতা মানবদেহের জন্য একটি দ্বিধারী তলোয়ার [১]। পানিতে দ্রবণীয় ভিটামিন শরীরে অতিরিক্ত জমে সহজে বিষক্রিয়া তৈরি করতে না পারলেও, চর্বি-দ্রবণীয় ভিটামিন—বিশেষ করে ভিটামিন এ এবং ভিটামিন ডি—অতিরিক্ত সাপ্লিমেন্ট হিসেবে খেলে শরীরে বিপজ্জনক মাত্রায় জমা হয়ে মারাত্মক বিষক্রিয়ার সৃষ্টি করে [১, ২]। অতিরিক্ত ভিটামিন এ গ্রহণ যকৃতের স্থায়ী ক্ষতি ও গর্ভস্থ শিশুর বিকলাঙ্গতা ডেকে আনে; আর অতিরিক্ত ভিটামিন ডি রক্তনালী ও কিডনিতে পাথর বা ক্যালসিয়াম জমিয়ে অঙ্গ অকেজো করে দেয় [১, ২]। তাই এই চার ভিটামিনের নিরাপদ ব্যবহার জানা অত্যন্ত জরুরি [১]।'
            ),
            l(
              'To optimize the absorption of these vitamins from natural foods, human evolution developed a simple nutritional rule: always consume fat-soluble nutrients with a source of healthy dietary fat [1]. Whether drizzling extra virgin olive oil over fresh leafy greens or consuming egg yolks, dietary triglycerides trigger gallbladder contraction, releasing bile salts into the duodenum to dissolve and capture these oily vitamer molecules for optimal intestinal absorption [1, 4].',
              'প্রাকৃতিক খাদ্য থেকে এই ভিটামিনগুলোর সর্বোচ্চ শোষণ নিশ্চিত করার জন্য একটি সাধারণ কিন্তু গুরুত্বপূর্ণ খাদ্যাভ্যাস গড়ে উঠেছে: চর্বি-দ্রবণীয় পুষ্টি উপাদানগুলো সর্বদা স্বাস্থ্যকর তেলের সাথে গ্রহণ করা উচিত [১]। সালাদের শাকসবজির সাথে সামান্য অলিভ অয়েল মেশালে কিংবা ডিমের কুসুমের চর্বি পিত্তথলিকে সংকুচিত করে পিত্তরস নিঃসরণ করায়, যা এই তৈলাক্ত ভিটামিনগুলোকে গলিয়ে অন্ত্রে শোষণযোগ্য করে তোলে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('How the Body Absorbs Fat-Soluble Vitamins: The Micelle Shuttle', 'চর্বি-দ্রবণীয় ভিটামিনের শোষণ রহস্য: মাইসেলি পরিবহন ব্যবস্থা'),
          paragraphs: [
            l(
              'To understand how fat-soluble vitamins enter our bodies, picture trying to wash motor oil off your hands with pure water: without soap, the oil stubbornly refuses to budge. Inside the watery lumen of the small intestine, fat-soluble vitamins face the exact same physical obstacle [1]. Because vitamins A, D, E, and K are oily lipids, they cannot approach the water-rich brush border surface of intestinal absorptive cells (enterocytes) on their own [1].',
              'চর্বি-দ্রবণীয় ভিটামিন কীভাবে দেহে শোষিত হয় তা বুঝতে হলে পানির নিচে তেলের আচরণের কথা ভাবুন: সাবান ছাড়া যেমন তেল কখনো পানির সাথে মেশে না, অন্ত্রের জলীয় পরিবেশেও এই ভিটামিনগুলো ঠিক একইভাবে বিচ্ছিন্ন হয়ে থাকে [১]। তেলজাতীয় হওয়ার কারণে ভিটামিন এ, ডি, ই এবং কে একা একা কখনো ক্ষুদ্রান্ত্রের শোষণকারী এন্টারোসাইট কোষের ভেজা দেয়ালের কাছে পৌঁছাতে পারে না [১]।'
            ),
            l(
              'To overcome this barrier, the liver synthesizes bile acids from cholesterol, storing them in the gallbladder [1]. When dietary fat enters the duodenum, the hormone cholecystokinin (CCK) stimulates the gallbladder to squirt bile into the gut lumen. Bile acids act exactly like biological dish soap: their amphipathic structure binds fat on one side and water on the other, assembling tiny spherical transport capsules called mixed micelles [1]. The hydrophobic fat-soluble vitamins dissolve snugly into the oily centers of these micelles, which effortlessly ferry them across the watery unstirred layer to the intestinal surface [1, 4].',
              'এই বাধা অতিক্রমের জন্য যকৃত কোলেস্টেরল থেকে পিত্তলবণ তৈরি করে পিত্তথলিতে জমা রাখে [১]। চর্বিজাতীয় খাবার ক্ষুদ্রান্ত্রে আসতেই সিসিকে (CCK) হরমোনের উদ্দীপনায় পিত্তথলি থেকে পিত্তরস নিঃসৃত হয়। পিত্তলবণের অণুগুলো সাবানের মতো কাজ করে: এরা একদিকে তেল এবং অন্যদিকে পানিকে আকর্ষণ করে "মিক্সড মাইসেলি" নামক ক্ষুদ্রাতিক্ষুদ্র জলীয় ক্যাপসুল তৈরি করে [১]। চর্বি-দ্রবণীয় ভিটামিনগুলো এই ক্যাপসুলের নিরাপদ তৈলাক্ত কেন্দ্রে অবস্থান নিয়ে অন্ত্রের ভেজা দেয়াল অতিক্রম করে কোষের মুখের কাছে পৌঁছে যায় [১, ৪]।'
            ),
            l(
              'Once at the enterocyte membrane, fat-soluble vitamins disembark from the micelles and are transported into the cell through specialized transport proteins (such as CD36, NPC1L1, and SR-BI) [1]. Inside the cell, they are packaged alongside dietary cholesterol and triglycerides into large, lipoprotein transport spheres called chylomicrons. Because chylomicrons are too large to fit through the narrow pores of blood capillaries, they exit into lymphatic vessels called lacteals, traveling through the thoracic duct to enter the bloodstream near the heart [1].',
              'এন্টারোসাইট কোষের দরজায় পৌঁছানোর পর ভিটামিনগুলো বিশেষ প্রোটিনের (যেমন CD36 ও NPC1L1) সাহায্যে কোষের ভেতরে প্রবেশ করে [১]। কোষের ভেতর এদের ট্রাইগ্লিসারাইড ও কোলেস্টেরলের সাথে মিশিয়ে "কাইলোমাইক্রন" নামক বড় গোলাকার লিপিড কণার মধ্যে প্যাকেজিং করা হয়। কাইলোমাইক্রনগুলো আকারে এত বড় হয় যে এরা সাধারণ রক্তজালিকার ছিদ্র দিয়ে ঢুকতে পারে না; ফলে এরা বিশেষ লসিকা নালীর (ল্যাকটিয়েল) মাধ্যমে ঘুরে বুকের প্রধান নালী দিয়ে হৃদপিণ্ডের কাছে এসে মূল রক্তে প্রবেশ করে [১]।'
            ),
            l(
              'This complex digestive pathway explains why people suffering from chronic gastrointestinal disorders—such as celiac disease, cystic fibrosis, Crohn’s disease, or liver cirrhosis—frequently suffer from severe fat-soluble vitamin deficiencies [1]. Without adequate bile, pancreatic enzymes, or healthy absorptive surface area, up to 80% of dietary vitamins A, D, E, and K are lost unabsorbed in the stool, a condition clinically recognized as steatorrhea [1, 2].',
              'এই জটিল শোষণ প্রক্রিয়ার কারণেই সিলিয়াক ডিজিজ, সিস্টিক ফাইব্রোসিস বা যকৃতের সিরোসিসে আক্রান্ত রোগীরা মারাত্মক চর্বি-দ্রবণীয় ভিটামিনের ঘাটতিতে ভোগেন [১]। পর্যাপ্ত পিত্তরস বা অগ্ন্যাশয়ের লাইপেজ না থাকলে খাদ্য থেকে প্রাপ্ত প্রায় ৮০% ভিটামিন এ, ডি, ই এবং কে অপাচ্য চর্বির সাথে মলের মাধ্যমে বেরিয়ে যায়, যা চিকিৎসাবিজ্ঞানে স্টিয়েটোরিয়া নামে পরিচিত [১, ২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Vitamin A for Vision & Vitamin D for Bone Hormones', 'দৃষ্টির জন্য ভিটামিন এ ও হাড়ের হরমোন ভিটামিন ডি'),
          paragraphs: [
            l(
              'Vitamin A exists in two primary dietary forms: preformed Vitamin A (retinol and retinyl esters found in animal products like liver, eggs, and dairy) and provitamin A carotenoids (such as beta-carotene found in orange and dark green plants like carrots, sweet potatoes, and spinach) [1, 5]. In the human body, Vitamin A performs two legendary biological duties: powering night vision and commanding cellular growth [1, 5].',
              'খাদ্যে ভিটামিন এ মূলত দুটি রূপে থাকে: সরাসরি ভিটামিন এ বা রেটিনল (যা কলিজা, ডিম ও দুগ্ধজাত খাবারে পাওয়া যায়) এবং উদ্ভিজ্জ প্রো-ভিটামিন এ বা বিটা-ক্যারোটিন (যা গাজর, মিষ্টি আলু ও গাঢ় সবুজ শাকসবজিতে থাকে) [১, ৫]। মানবদেহে ভিটামিন এ দুটি প্রধান দায়িত্ব পালন করে: প্রথমত রাতের দৃষ্টিশক্তি সচল রাখা এবং দ্বিতীয়ত কোষের সঠিক বৃদ্ধি ও বিভেদন নিশ্চিত করা [১, ৫]।'
            ),
            l(
              'In the retina of the eye, an aldehyde form of Vitamin A called 11-cis-retinal joins with the protein opsin to form rhodopsin, the visual pigment inside rod photoreceptors responsible for black-and-white vision in dim light [5]. When a single photon of light strikes rhodopsin, 11-cis-retinal instantly straightens into all-trans-retinal. This microscopic shape change triggers an electrical nerve impulse to the brain, producing the sensation of vision [5]. Without adequate Vitamin A, rhodopsin cannot regenerate, causing "night blindness" (nyctalopia)—the inability to see in low-light environments [1, 5].',
              'চোখের রেটিনায় ভিটামিন এ-এর বিশেষ রূপ ১১-সিস-রেটিনাল অপসিন প্রোটিনের সাথে যুক্ত হয়ে রডোপসিন গঠন করে, যা মৃদু আলোতে আমাদের দেখতে সাহায্য করে [৫]। আলোর একটি ক্ষুদ্র ফোটন কণা রডোপসিনে আঘাত করা মাত্রই ১১-সিস-রেটিনাল সোজা হয়ে অল-ট্রান্স-রেটিনালে রূপান্তরিত হয়। এই আণবিক রূপান্তর একটি বৈদ্যুতিক সংকেত তৈরি করে মস্তিষ্কে দৃষ্টির অনুভূতি পাঠায় [৫]। ভিটামিন এ-এর ঘাটতি হলে রডোপসিন পুনরায় গঠিত হতে পারে না, ফলে মৃদু আলোতে দেখার ক্ষমতা হারিয়ে যায় যাকে "রাতকানা রোগ" বলা হয় [১, ৫]।'
            ),
            l(
              'Beyond vision, Vitamin A oxidizes into retinoic acid, which acts inside cell nuclei like a master genetic switchboard [1]. Retinoic acid binds to specialized nuclear receptors (RAR and RXR), instructing stem cells to mature into protective epithelial barriers that line the cornea, respiratory tract, and gut [1]. In children suffering from severe Vitamin A deficiency, epithelial cells stop producing protective mucus and dry out into hard keratin, leading to corneal ulceration, irreversible blindness (xerophthalmia), and high mortality from common infections [1].',
              'দৃষ্টিশক্তির পাশাপাশি ভিটামিন এ রেটিনোয়িক অ্যাসিডে রূপান্তরিত হয়ে কোষের নিউক্লিয়াসে গিয়ে জিনের মাস্টার নিয়ন্ত্রক হিসেবে কাজ করে [১]। এটি নিউক্লিয়ার রিসেপ্টরে (RAR ও RXR) যুক্ত হয়ে স্টেম কোষগুলোকে চোখের কর্নিয়া, ফুসফুস এবং অন্ত্রের আর্দ্র প্রতিরক্ষামূলক আবরণীতে রূপান্তরিত করার নির্দেশ দেয় [১]। ভিটামিন এ-এর তীব্র ঘাটতি হলে অন্ত্র ও চোখের শ্লেষ্মা আবরণী শুকিয়ে শক্ত কেরাটিনে রূপ নেয়; ফলে কর্নিয়ায় ঘা হয়ে স্থায়ী অন্ধত্ব (জেরপথ্যালমিয়া) এবং সাধারণ ইনফেকশনেও শিশুর অকালমৃত্যু ঘটে [১]।'
            ),
            l(
              'Vitamin D is unique among all vitamins because it is not fundamentally a vitamin at all, but rather a steroid pre-hormone that our skin synthesizes when exposed to sunlight [2]. When solar Ultraviolet B (UVB) light penetrates the epidermis, it photolyses 7-dehydrocholesterol into Vitamin D3 (cholecalciferol) [2]. Cholecalciferol travels through the blood to the liver, where it is converted into 25-hydroxyvitamin D3 [25(OH)D], and then to the kidneys, where an enzyme converts it into the fully active master hormone: calcitriol [1,25(OH)2D3] [1, 2]. Calcitriol stimulates the intestine to absorb dietary calcium, ensuring strong, dense bones and preventing rickets in children and osteomalacia in adults [2].',
              'ভিটামিন ডি অন্য সব ভিটামিনের চেয়ে সম্পূর্ণ আলাদা, কারণ এটি মূলত সাধারণ ভিটামিন নয়, বরং একটি শক্তিশালী স্টেরয়েড প্রি-হরমোন যা সূর্যালোকের স্পর্শে আমাদের ত্বকেই তৈরি হয় [২]। সূর্যের অতিবেগুনি বি (UVB) রশ্মি ত্বকে আঘাত করলে ৭-ডিহাইড্রো-কোলেস্টেরল ভেঙে ভিটামিন ডি৩ তৈরি হয় [২]। এটি রক্ত দিয়ে প্রথমে যকৃতে গিয়ে ২৫(OH)D এবং পরবর্তীতে বৃক্কে গিয়ে চূড়ান্ত সক্রিয় হরমোন ক্যালসিট্রিওলে রূপান্তরিত হয় [১, ২]। ক্যালসিট্রিওল অন্ত্র থেকে খাদ্যের ক্যালসিয়াম রক্তে শুষে নিয়ে হাড়কে মজবুত ও নিরেট রাখে এবং রিকেটস রোগ প্রতিরোধ করে [২]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Vitamin E Membrane Protection & Vitamin K Coagulation Cycle', 'ভিটামিন ই মেমব্রেন সুরক্ষা ও ভিটামিন কে রক্ত তঞ্চন চক্র'),
          paragraphs: [
            l(
              'Every living cell in your body is encased in a delicate plasma membrane made of polyunsaturated fatty acids (PUFAs) [4]. These fatty acids are exceptionally vulnerable to attack by reactive oxygen species—unstable free radicals generated continuously during mitochondrial energy production, inflammation, and toxin exposure [4]. If left unchecked, free radicals spark a devastating chain reaction known as lipid peroxidation, punching holes in cell membranes like microscopic rust eating through sheet metal [4].',
              'আমাদের দেহের প্রতিটি জীবন্ত কোষ পলি-আনস্যাচুরেটেড ফ্যাটি অ্যাসিডের (PUFA) এক সংবেদনশীল পর্দা দিয়ে ঘেরা থাকে [৪]। মাইটোকন্ড্রিয়ায় শক্তি উৎপাদনের সময় তৈরি হওয়া মুক্ত ক্ষতিকর র্যাডিকেলগুলো অনবরত এই পর্দার ওপর আঘাত হানে [৪]। কোনো বাধা না পেলে এই ফ্রি র্যাডিকেলগুলো "লিপিড পারঅক্সিডেশন" নামক এক বিধ্বংসী চেইন বিক্রিয়া শুরু করে, যা কোষপর্দাকে মরিচা পড়ার মতো ফুটো করে কোষকে চিরতরে ধ্বংস করে দেয় [৪]।'
            ),
            l(
              'This is where Vitamin E (specifically alpha-tocopherol) steps in as nature’s premier cellular bodyguard [4]. Alpha-tocopherol lodges itself directly inside the fatty lipid bilayer of the cell membrane. The instant a dangerous free radical attacks a membrane fatty acid, alpha-tocopherol selflessly donates a hydrogen atom from its phenolic head, neutralizing the free radical before it can damage neighboring lipids [4]. Vitamin C dissolved in the surrounding fluid then restores Vitamin E back to its active form, creating a perpetual antioxidant defense team [1, 4].',
              'এখানেই ভিটামিন ই (বিশেষ করে আলফা-টোকোফেরল) কোষের অতন্দ্র প্রহরী হিসেবে অবতীর্ণ হয় [৪]। আলফা-টোকোফেরল কোষপর্দার তৈলাক্ত স্তরের ভেতরে সরাসরি অবস্থান নেয়। ক্ষতিকর ফ্রি র্যাডিকেল মেমব্রেনের ফ্যাট আক্রমণ করার মুহূর্তেই ভিটামিন ই নিজের একটি হাইড্রোজেন দান করে র্যাডিকেলটিকে শান্ত ও নিষ্ক্রিয় করে দেয় [৪]। এরপর আশেপাশের জলীয় অংশে থাকা ভিটামিন সি নিজে জারিত হয়ে ভিটামিন ই-কে পুনরায় সক্রিয় করে তোলে, ফলে কোষপর্দা সম্পূর্ণ অক্ষত থাকে [১, ৪]।'
            ),
            l(
              'Vitamin K, on the other hand, is the master conductor of blood clotting and bone mineralization [3]. When you cut your finger, your body must rapidly assemble a blood clot to stop bleeding without causing dangerous clots inside healthy blood vessels [3]. Vitamin K acts as an essential coenzyme for an enzyme in the liver called gamma-glutamyl carboxylase [3]. This enzyme adds a second chemical carboxyl group onto glutamate amino acids in four critical clotting factors (Factors II, VII, IX, and X) [3].',
              'অন্যদিকে ভিটামিন কে হলো রক্ত জমাট বাঁধা এবং হাড়ের সুরক্ষার এক অপরিহার্য চাবিকাঠি [৩]। কোনো স্থান কেটে গেলে শরীরকে তৎক্ষণাৎ রক্তক্ষরণ বন্ধ করতে হয় যাতে প্রাণহানি না ঘটে [৩]। ভিটামিন কে যকৃতের গামা-গ্লুটামিল কার্বক্সিলেজ এনজাইমের সহকারী হিসেবে কাজ করে [৩]। এই এনজাইমটি রক্ত তঞ্চনকারী চারটি মূল প্রোটিনের (ফ্যাক্টর II, VII, IX এবং X) গায়ে ক্যালসিয়াম বাঁধার বিশেষ আণবিক আংটা (Gla ডোমেন) তৈরি করে দেয় [৩]।'
            ),
            l(
              'These newly created dicarboxylic "molecular claws" (called Gla domains) grab onto positively charged calcium ions in the blood, allowing clotting proteins to anchor onto the surface of activated platelets at the site of injury, snapping the clot into place [3]. In bone tissue, Vitamin K similarly carboxylates osteocalcin, enabling it to bind calcium and lock it into the bone mineral matrix, simultaneously protecting blood vessel walls from abnormal calcium hardening [1, 3, 6].',
              'এই নতুন তৈরি হওয়া আণবিক আংটাগুলো রক্তের ধনাত্মক ক্যালসিয়ামকে আঁকড়ে ধরে ক্ষতস্থানের অনুচক্রিকার গায়ে রক্ত জমাট বাঁধার জাল বিস্তার করে এবং রক্তপাত বন্ধ করে [৩]। একইভাবে হাড়ের ভেতর ভিটামিন কে অস্টিওক্যালসিন প্রোটিনকে সক্রিয় করে ক্যালসিয়ামকে হাড়ের কাঠামোর মধ্যে শক্তভাবে গেঁথে দেয়, এবং রক্তনালীর প্রাচীরে ক্যালসিয়াম জমে পাথর হওয়া রোধ করে [১, ৩, ৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Food Sources, Bioavailability & Clinical Malabsorption', 'খাদ্য উৎস, জৈবপ্রাপ্যতা ও ক্লিনিক্যাল ম্যালঅ্যাবজর্বশন'),
          paragraphs: [
            l(
              'Achieving optimal fat-soluble vitamin status requires diverse whole-food dietary patterns combined with mindful preparation techniques [1]. Preformed Vitamin A is concentrated in beef liver, oily cold-water fish, and pasteurized dairy, while vibrant provitamin A carotenoids abound in carrots, pumpkin, sweet potatoes, and mangoes [1]. Lightly cooking or puréeing plant foods softens cellulose cell walls, markedly increasing carotenoid bioavailability [1].',
              'চর্বি-দ্রবণীয় ভিটামিনের আদর্শ মাত্রা বজায় রাখতে বৈচিত্র্যময় পুষ্টিকর খাদ্যাভ্যাস এবং সঠিক রন্ধনপ্রণালী উভয়ই জরুরি [১]। সরাসরি ভিটামিন এ পাওয়া যায় গরুর কলিজা, সামুদ্রিক তৈলাক্ত মাছ এবং দুধে; আর প্রো-ভিটামিন এ ক্যারোটিনয়েড প্রচুর পরিমাণে থাকে গাজর, মিষ্টি কুমড়া, মিষ্টি আলু ও পাকা আমে [১]। শাকসবজি হালকা রান্না বা পিউরি করলে এদের শক্ত কোষপ্রাচীর ভেঙে ক্যারোটিনয়েডের শোষণ ক্ষমতা বহুগুণ বৃদ্ধি পায় [১]।'
            ),
            l(
              'Sunlight exposure on bare skin remains the most natural driver of Vitamin D synthesis, though egg yolks, sun-exposed mushrooms, and fortified milks contribute valuable dietary cholecalciferol [2]. Vitamin E flourishes in cold-pressed plant oils, sunflower seeds, almonds, and avocados [4]. Vitamin K exists in two primary forms: Vitamin K1 (phylloquinone), abundantly synthesized by plant chloroplasts in dark leafy greens like kale and spinach; and Vitamin K2 (menaquinones), produced by beneficial gut bacteria and fermented foods like aged cheeses and Japanese natto [3, 6].',
              'ত্বকে সূর্যালোকের সংস্পর্শ ভিটামিন ডি তৈরির সবচেয়ে প্রাকৃতিক উপায় হলেও ডিমের কুসুম ও ভিটামিনযুক্ত দুধ গুরুত্বপূর্ণ অবদান রাখে [২]। ভিটামিন ই সবচেয়ে বেশি পাওয়া যায় উদ্ভিজ্জ তেল, সূর্যমুখীর বীজ, কাঠবাদাম ও অ্যাভোকাডোতে [৪]। ভিটামিন কে-এর দুটি প্রধান রূপ রয়েছে: ভিটামিন কে১ (ফাইলোকুইনোন), যা সবুজ শাকসবজির ক্লোরোপ্লাস্টে তৈরি হয়; এবং ভিটামিন কে২ (মেনাকুইনোন), যা অন্ত্রের উপকারী ব্যাকটেরিয়া এবং গাঁজনকৃত খাবার যেমন পনিরে প্রচুর থাকে [৩, ৬]।'
            ),
            l(
              'In clinical medicine, recognizing fat malabsorption syndromes is paramount [1]. Patients with cystic fibrosis (thickened pancreatic secretions blocking lipase), celiac disease (flattened intestinal villi), biliary atresia, or surgical gastric bypass require water-miscible dry-powder formulations or parenteral supplementation of vitamins A, D, E, and K [1, 2]. Without intervention, these patients rapidly progress to night blindness, osteomalacia, hemolytic neuromuscular ataxia, and life-threatening coagulopathies [1, 3, 4].',
              'চিকিৎসাবিজ্ঞানে চর্বি শোষণের সমস্যা দ্রুত শনাক্ত করা অত্যন্ত জরুরি [১]। সিস্টিক ফাইব্রোসিস (অগ্ন্যাশয়ের নালী বন্ধ হওয়া), সিলিয়াক ডিজিজ (অন্ত্রের দেয়াল ক্ষয় হওয়া) বা গ্যাস্ট্রিক বাইপাস সার্জারির রোগীদের সাধারণ তেলযুক্ত ভিটামিনের বদলে বিশেষ জলীয়-দ্রবণীয় পাউডার বা ইনজেকশনের মাধ্যমে ভিটামিন দিতে হয় [১, ২]। অন্যথায় এরা দ্রুত রাতকানা রোগ, হাড় নরম হয়ে যাওয়া, স্নায়ুর অবক্ষয় এবং মারাত্মক রক্তক্ষরণজনিত জটিলতায় পতিত হন [১, ৩, ৪]।'
            ),
            l(
              'A universally recognized public health triumph is the routine intramuscular administration of Vitamin K1 to all newborns at birth [3, 6]. Because infants are born with a sterile gut lacking menaquinone-producing microflora, combined with minimal placental transfer and low vitamin K concentrations in human breast milk, unsupplemented newborns are at extreme risk for Vitamin K Deficiency Bleeding (VKDB)—a fatal spontaneous intracranial hemorrhage [3, 6]. A single prophylactic injection has virtually eradicated this tragedy in modern obstetrics [3, 6].',
              'জনস্বাস্থ্যের ইতিহাসে সবচেয়ে বড় সাফল্যগুলোর একটি হলো জন্মের পরপরই প্রতিটি নবজাতককে ভিটামিন কে১ ইনজেকশন দেওয়া [৩, ৬]। শিশুরা অন্ত্রে কোনো ব্যাকটেরিয়া ছাড়াই জীবাণুমুক্ত অবস্থায় জন্মায় এবং মায়ের বুকের দুধে খুব সামান্য ভিটামিন কে থাকে; ফলে জন্মের পর ইনজেকশন না দিলে শিশুদের মস্তিষ্কে মারাত্মক রক্তক্ষরণ (VKDB) হয়ে মৃত্যু হতে পারে [৩, ৬]। এই একটিমাত্র নিরাপদ ইনজেকশন বিশ্বজুড়ে লক্ষ লক্ষ নবজাতকের প্রাণ রক্ষা করেছে [৩, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Core Takeaways & High-Yield Summary', 'মূল শিক্ষণীয় সারসংক্ষেপ ও নির্দেশিকা'),
          paragraphs: [
            l(
              'In summary, the four fat-soluble vitamins—A, D, E, and K—are lipophilic nutrients requiring dietary fat, biliary emulsification, and lymphatic chylomicron transit for absorption, establishing long-term bodily tissue storage [1].',
              'সংক্ষেপে, চর্বি-দ্রবণীয় চারটি ভিটামিন (A, D, E, K) তেলজাতীয় হওয়ায় এদের শোষণের জন্য খাদ্যের ফ্যাট, পিত্তরস এবং কাইলোমাইক্রনের প্রয়োজন হয় এবং এরা শরীরে দীর্ঘকাল জমা থাকে [১]।'
            ),
            l(
              'Vitamins A and D function primarily as genomic nuclear transcription regulators governing cellular differentiation, vision, immunity, and endocrine mineral homeostasis [1, 2, 5].',
              'ভিটামিন এ এবং ডি মূলত নিউক্লিয়ার রিসেপ্টরের মাধ্যমে জিন সক্রিয় করে দৃষ্টিশক্তি, রোগপ্রতিরোধ এবং ক্যালসিয়াম ও হাড়ের খনিজায়ন নিয়ন্ত্রণ করে [১, ২, ৫]।'
            ),
            l(
              'Vitamins E and K operate at membrane and post-translational enzymatic interfaces, protecting delicate polyunsaturated fatty acids from oxidative degradation and enabling blood coagulation factor calcium coordination [3, 4].',
              'ভিটামিন ই এবং কে মেমব্রেন ও এনজাইমের স্তরে কাজ করে: ভিটামিন ই কোষপর্দাকে জারণ থেকে রক্ষা করে এবং ভিটামিন কে রক্ত তঞ্চনকারী প্রোটিনকে সচল রাখে [৩, ৪]।'
            ),
            l(
              'Clinicians must always remain vigilant for malabsorption in gastrointestinal pathology, ensure routine newborn Vitamin K prophylaxis, and respect the potential toxicity thresholds of high-dose supplemental intake [1, 2, 3, 6].',
              'চিকিৎসকদের সর্বদা অন্ত্রের রোগে ভিটামিনের শোষণ ঘাটতি পর্যবেক্ষণ করা, নবজাতকের ভিটামিন কে নিশ্চিত করা এবং অতিরিক্ত সাপ্লিমেন্ট গ্রহণের বিষক্রিয়া সম্পর্কে সতর্ক থাকা উচিত [১, ২, ৩, ৬]।'
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
          heading: l('Biophysical Transport Kinetics and Tissue Sequestration', 'বায়োফিজিক্যাল পরিবহন গতিবিদ্যা ও কলা সঞ্চয়'),
          paragraphs: [
            l(
              'The intestinal uptake of fat-soluble vitamins mirrors the thermodynamic phases of neutral dietary lipid assimilation [1]. In the stomach, mechanical churning generates a crude lipid emulsion with an average droplet diameter of 1 to 100 micrometers. Gastric lipase hydrolyzes approximately 10% to 30% of triacylglycerols, releasing sn-1,2-diacylglycerols and free fatty acids that promote subsequent pancreatic lipase-colipase binding in the duodenum [1].',
              'চর্বি-দ্রবণীয় ভিটামিনের অন্ত্রে শোষণ প্রক্রিয়া খাদ্যের ফ্যাটের থার্মোডাইনামিক রূপান্তরের হুবহু অনুরূপ [১]। পাকস্থলীতে যান্ত্রিক আলোড়নে চর্বির কণাগুলো ১ থেকে ১০০ মাইক্রোমিটার ব্যাসের ইমালশনে রূপ নেয়। গ্যাস্ট্রিক লাইপেজ প্রায় ১০% থেকে ৩০% ট্রাইগ্লিসারাইড ভেঙে মুক্ত ফ্যাটি অ্যাসিড তৈরি করে, যা ডিওডেনামে অগ্ন্যাশয়ের লাইপেজ ও কোলিপেজ এনজাইম যুক্ত হওয়ার পথ সুগম করে [১]।'
            ),
            l(
              'Upon entering the small intestine, conjugated bile salts (predominantly cholate and chenodeoxycholate) coalesce with the lipolysis products to assemble thermodynamically stable mixed micelles with an outer amphipathic shell and an inner hydrophobic core [1]. Non-polar vitamins—retinyl esters, provitamin A carotenoids, cholecalciferol, tocopherols, and phylloquinone—partition into this hydrophobic core, traversing the unstirred water layer to reach the enterocyte microvillar brush border [1, 2].',
              'ক্ষুদ্রান্ত্রে পিত্তলবণগুলোর (প্রধানত কোলেট ও চেনোডিওক্সিকোলেট) সাথে যুক্ত হয়ে থার্মোডাইনামিক্যালি স্থিতিশীল মিক্সড মাইসেলি গঠিত হয় [১]। অপোলার ভিটামিনগুলো—রেটিনাইল এস্টার, ক্যারোটিনয়েড, কোলেক্যালসিফেরল, টোকোফেরল ও ফাইলোকুইনোন—মাইসেলির তৈলাক্ত কেন্দ্রে অবস্থান নিয়ে অন্ত্রের ব্রাশ-বর্ডারের এন্টারোসাইট কোষে পৌঁছায় এবং ব্যাপন প্রক্রিয়ায় শোষিত হয় [১, ২]।'
            ),
            l(
              'Cellular entry across the apical enterocyte membrane is mediated by specialized lipophilic transport proteins, including Scavenger Receptor Class B Type 1 (SR-BI) and Cluster of Differentiation 36 (CD36) for tocopherols and carotenoids, and Niemann-Pick C1-Like 1 (NPC1L1) for tocopherols and phylloquinone [1, 4]. Once inside, dietary retinyl esters are re-esterified by Lecithin:Retinol Acyltransferase (LRAT) and incorporated alongside triacylglycerols and cholesterol esters into nascent chylomicrons by Microsomal Triglyceride Transfer Protein (MTP) [1].',
              'কোষের উপরিভাগের পর্দায় SR-BI, CD36 এবং NPC1L1 প্রোটিনের মাধ্যমে ভিটামিনগুলো ভেতরে প্রবেশ করে [১]। এন্টারোসাইটের ভেতরে LRAT এনজাইম রেটিনলকে পুনরায় এস্টারে রূপান্তরিত করে এবং MTP প্রোটিনের মাধ্যমে কাইলোমাইক্রনে আবদ্ধ করে লসিকা নালীতে পাঠায় [১]।'
            ),
            l(
              'Chylomicrons bypass the hepatic portal circulation via the mesenteric lacteals and thoracic duct, entering the systemic venous circulation at the left subclavian vein [1]. Peripheral tissues expressing Endothelial Lipoprotein Lipase (LPL) hydrolyze core triglycerides, delivering a fraction of tocopherols and phylloquinone to muscle and adipose tissue, while the remaining chylomicron remnants carry the bulk of retinyl esters and secosteroids to the liver for receptor-mediated endocytosis via LDL Receptor-Related Protein-1 (LRP-1) [1, 2].',
              'কাইলোমাইক্রন সরাসরি পোর্টাল শিরায় না গিয়ে লসিকা নালী দিয়ে ঘুরে রক্তের মূল প্রবাহে প্রবেশ করে [১]। রক্তনালীর লাইপোপ্রোটিন লাইপেজ (LPL) কাইলোমাইক্রনের চর্বি ভেঙে পেশি ও চর্বি কলায় কিছু ভিটামিন দেয়, আর অবশিষ্ট কাইলোমাইক্রন রেমন্যান্ট অংশটি যকৃতে পৌঁছে LRP-1 রিসেপ্টরের মাধ্যমে সম্পূর্ণ শোষিত হয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Rhodopsin Visual Cycle and RAR/RXR Genomic Signaling', 'রডোপসিন দৃষ্টি চক্র ও RAR/RXR জিন নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'The phototransduction visual cycle involves tightly orchestrated enzymatic recycling between rod photoreceptor outer segments and the adjacent retinal pigment epithelium (RPE) [5]. Within rod discs, 11-cis-retinal is covalently attached via a protonated Schiff base to the epsilon-amino group of lysine residue Lys296 on opsin, stabilizing rhodopsin in its inactive ground state [5]. Upon photon capture, sub-picosecond photoisomerization to all-trans-retinal forces an outward tilt of transmembrane helix 6, generating the active G-protein-activating intermediate metarhodopsin II [5].',
              'দৃষ্টির আলোক-সংবেদন চক্রটি রড কোষ এবং রেটিনাল পিগমেন্ট এপিথেলিয়ামের (RPE) মধ্যে চমৎকার রাসায়নিক সমন্বয়ের মাধ্যমে ঘটে [৫]। রড কোষে ১১-সিস-রেটিনাল অপসিন প্রোটিনের Lys296 লাইসিন অ্যামিনো অ্যাসিডের সাথে শিফ-বেস বন্ধনে আবদ্ধ থাকে [৫]। আলো পড়ামাত্রই এটি অল-ট্রান্স-রেটিনালে রূপান্তরিত হয়ে মেটারডোপসিন II তৈরি করে এবং সংকেত পাঠিয়ে চোখের রড কোষকে উত্তেজিত করে [৫]।'
            ),
            l(
              'Metarhodopsin II activates the heterotrimeric G-protein transducin (Gt), releasing G-alpha-GTP to stimulate cGMP phosphodiesterase (PDE6) [5]. Rapid enzymatic hydrolysis of cGMP lowers its cytoplasmic concentration, causing the detachment of cGMP from cyclic nucleotide-gated (CNG) channels and precipitating channel closure [5]. The resulting cessation of inward sodium and calcium currents hyperpolarizes the plasma membrane from -40 mV to -70 mV, shutting off tonic glutamate exocytosis at the photoreceptor synapse and generating the visual neural signal [5].',
              'মেটারডোপসিন II ট্রান্সডিউসিন (Gt) প্রোটিনকে সক্রিয় করে cGMP ফসফোডাইএস্টারেজ (PDE6) এনজাইম চালু করে [৫]। এর ফলে কোষে cGMP কমে যায় এবং সোডিয়াম ও ক্যালসিয়াম চ্যানেলগুলো হঠাৎ বন্ধ হয়ে যায় [৫]। চ্যানেলে বিদ্যুৎ প্রবাহ থেমে যাওয়ায় কোষের পর্দা -৪০ মিলিভোল্ট থেকে -৭০ মিলিভোল্টে হাইপারপোলারাইজড হয়ে যায়, যা স্নায়ুর সিন্যাপসে গ্লুটামেট নিঃসরণ বন্ধ করে আলোর তথ্য মস্তিষ্কে পাঠায় [৫]।'
            ),
            l(
              'All-trans-retinal is then reduced to all-trans-retinol by all-trans-retinol dehydrogenase and shuttled to the adjacent RPE bound to Interphotoreceptor Retinoid-Binding Protein (IRBP) [5]. In the RPE, Lecithin:Retinol Acyltransferase (LRAT) esterifies it, and the isomerohydrolase RPE65 cleaves and isomerizes the retinyl ester back into 11-cis-retinol, which is finally oxidized to 11-cis-retinal and returned to photoreceptors to regenerate functional rhodopsin, completing Wald’s classical visual cycle [5].',
              'অল-ট্রান্স-রেটিনাল পরবর্তীতে অপসিন থেকে খুলে RPE কোষে যায় যেখানে RPE65 এনজাইম একে পুনরায় ১১-সিস-রেটিনালে রূপান্তরিত করে অপসিনে ফিরিয়ে দেয়, যা দৃষ্টি চক্রকে পুনরায় দেখার জন্য প্রস্তুত করে [৫]।'
            ),
            l(
              'Systemically, all-trans-retinoic acid (atRA) governs cellular differentiation and organogenesis by translocating into the nucleus via Cellular Retinoic Acid-Binding Protein-2 (CRABP2) [1]. Nuclear atRA binds the Retinoic Acid Receptor (RAR), which forms a heterodimer with the Retinoid X Receptor (RXR). This complex binds to Retinoic Acid Response Elements (RARE, consensus sequence PuGGTCA separated by 1 to 5 base pairs), triggering corepressor dissociation and recruiting histone acetyltransferases to induce transcription of target genes governing epithelial mucin production and CD4+ T-cell homing to the gut lamina propria [1].',
              'কোষীয় বিভেদনে অল-ট্রান্স-রেটিনোয়িক অ্যাসিড নিউক্লিয়াসে গিয়ে RAR/RXR রিসেপ্টরে যুক্ত হয় এবং ডিএনএ-র RARE অঞ্চলে বসে হিস্টোন অ্যাসিটাইলেশনের মাধ্যমে অন্ত্রের মিউসিন ও রোগপ্রতিরোধক টি-কোষের শত শত প্রতিরক্ষামূলক জিন চালু করে [১]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Endocrine Calcitriol Dynamics and Transepithelial Calcium Flux', 'ক্যালসিট্রিওলের হরমোনীয় গতিবিদ্যা ও ক্যালসিয়াম পরিবহন'),
          paragraphs: [
            l(
              'Endocrine regulation of systemic calcium homeostasis relies on the tightly counterbalanced feedback axes of Parathyroid Hormone (PTH), Fibroblast Growth Factor 23 (FGF23), and 1,25(OH)2D (calcitriol) [2]. The calcium-sensing receptor (CaSR), a G-protein-coupled receptor on parathyroid chief cells, constantly samples extracellular ionized calcium (Ca2+) [2]. When Ca2+ falls, CaSR G-alpha-q signaling attenuates, relieving tonic inhibition and unleashing preformed PTH exocytosis into the circulation within seconds [2].',
              'দেহে ক্যালসিয়াম নিয়ন্ত্রণ প্যারাথাইরয়েড হরমোন (PTH), ফাইব্রোব্লাস্ট গ্রোথ ফ্যাক্টর ২৩ (FGF23) এবং ক্যালসিট্রিওলের পারস্পরিক ভারসাম্যের ওপর চলে [২]। প্যারাথাইরয়েড গ্রন্থির CaSR রিসেপ্টর প্রতি মুহূর্তে রক্তের ক্যালসিয়াম পর্যবেক্ষণ করে [২]। রক্তে ক্যালসিয়াম হ্রাস পাওয়া মাত্রই CaSR সংকেত কমে যায় এবং প্যারাথাইরয়েড গ্রন্থি মুহূর্তের মধ্যে রক্তে বিপুল পরিমাণ PTH হরমোন নিঃসরণ করে [২]।'
            ),
            l(
              'PTH binds PTH1R receptors on proximal tubule basolateral membranes, stimulating adenylate cyclase to elevate intracellular cAMP and upregulate transcription of CYP27B1 (25-hydroxyvitamin D 1-alpha-hydroxylase) [2]. Calcitriol circulates bound to Vitamin D-Binding Protein (DBP), enters target enterocytes, and binds the cytosolic/nuclear Vitamin D Receptor (VDR) [2]. VDR heterodimerizes with RXR, binding vitamin D response elements (VDRE) in gene promoters to induce TRPV6 (apical Ca2+ channel), calbindin-D9k (intracellular Ca2+ chaperone), and PMCA1b (basolateral Ca2+-ATPase pump), driving active saturable transepithelial calcium absorption [1, 2].',
              'PTH বৃক্কে গিয়ে CYP27B1 এনজাইম সক্রিয় করে সক্রিয় ক্যালসিট্রিওল হরমোন তৈরি করে [২]। ক্যালসিট্রিওল অন্ত্রের এন্টারোসাইটে প্রবেশ করে VDR-RXR রিসেপ্টরের মাধ্যমে ডিএনএ-তে বসে TRPV6 ক্যালসিয়াম চ্যানেল, ক্যালবাইন্ডিন-D9k বাহক প্রোটিন এবং PMCA1b পাম্প তৈরি বাড়িয়ে দেয় [১, ২]। ফলে খাদ্য থেকে ক্যালসিয়াম দ্রুত শোষিত হয়ে রক্তে প্রবেশ করে ক্যালসিয়ামের মাত্রা স্বাভাবিক অবস্থায় ফিরে আসে [২]।'
            ),
            l(
              'Concurrently in distal renal convoluted tubules, calcitriol upregulates apical TRPV5 calcium channels and calbindin-D28k, suppressing urinary calcium excretion to preserve the extracellular mineral pool [2]. In skeletal tissue, calcitriol acts cooperatively with PTH on osteoblasts to induce Receptor Activator of Nuclear Factor-kB Ligand (RANKL), stimulating osteoclastogenesis and mobilizing skeletal calcium when dietary intake is deficient [1, 2].',
              'একই সাথে কিডনির দূরবর্তী নালিকায় ক্যালসিট্রিওল TRPV5 চ্যানেল বাড়িয়ে প্রস্রাবে ক্যালসিয়ামের অপচয় বন্ধ করে এবং হাড়ে RANKL সংকেতের মাধ্যমে প্রয়োজনবোধে ক্যালসিয়াম রক্তে নিয়ে আসে [১, ২]।'
            ),
            l(
              'To prevent toxic runaway hypercalcemia, an intricate negative feedback loop operates: elevated calcitriol and ionized calcium directly suppress parathyroid PTH synthesis and induce renal CYP24A1 (24-hydroxylase), which catabolizes both 25(OH)D and calcitriol into biologically inactive calcitroic acid for biliary excretion [2]. Furthermore, calcitriol stimulates osteocytes to secrete FGF23, which binds FGFR1c-Klotho complexes in the kidney to potently downregulate CYP27B1 and stimulate CYP24A1, terminating the endocrine surge [2].',
              'অতিরিক্ত ক্যালসিয়ামের বিষক্রিয়া রোধে ক্যালসিট্রিওল নিজে প্যারাথাইরয়েড গ্রন্থিকে শান্ত করে এবং CYP24A1 এনজাইম সক্রিয় করে অতিরিক্ত ভিটামিন ডি ধ্বংস করে বের করে দেয়; এছাড়া হাড়ের FGF23 হরমোন কিডনিতে গিয়ে ক্যালসিট্রিওল তৈরি বন্ধ করে দেয় [২]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Molecular Antioxidation Cascades and the Vitamin K Reductase Cycle', 'আণবিক অ্যান্টিঅক্সিডেশন প্রবাহ ও ভিটামিন কে রিডাক্টেজ চক্র'),
          paragraphs: [
            l(
              'The mechanism of alpha-tocopherol antioxidation operates through stoichiometric radical trapping rather than enzymatic catalytic turnover [4]. When hydroxyl radicals (•OH) or reactive nitrogen species abstract a bis-allylic hydrogen atom from a membrane polyunsaturated fatty acid (LH), an alkyl carbon radical (L•) is generated, which rapidly binds molecular oxygen to produce a peroxyl radical (LOO•) [4]. Alpha-tocopherol intercepts this propagating chain by donating its phenolic hydroxyl hydrogen (rate constant k ~ 3 x 10^6 M^-1 s^-1), converting LOO• to a lipid hydroperoxide (LOOH) and forming a resonance-stabilized tocopheroxyl radical [4].',
              'আলফা-টোকোফেরলের অ্যান্টিঅক্সিডেন্ট ক্রিয়া কোনো এনজাইমের মতো কাজ না করে সরাসরি র্যাডিকেলকে আটকে দিয়ে সম্পন্ন হয় [৪]। ক্ষতিকর অক্সিজেন র্যাডিকেল যখন মেমব্রেনের ফ্যাটি অ্যাসিডের হাইড্রোজেন কেড়ে নিয়ে পারঅক্সিল র্যাডিকেল (LOO•) তৈরি করে, তখন আলফা-টোকোফেরল নিজেই নিজের হাইড্রোজেন দান করে ক্ষতিকর চেইন বিক্রিয়াটি চিরতরে থামিয়ে দেয় [৪]। এর ফলে তৈরি হওয়া টোকোফেরক্সিল র্যাডিকেলটি অত্যন্ত শান্ত ও অহিংস থাকে [৪]।'
            ),
            l(
              'Because the tocopheroxyl radical is relatively unreactive, it cannot propagate damage; however, it must be recycled to prevent accumulation [4]. At the membrane-cytosol interface, ascorbic acid (Vitamin C) donates an electron to the tocopheroxyl radical, regenerating active alpha-tocopherol while forming a dehydroascorbate intermediate, which is subsequently reduced by glutathione (GSH) and NADPH-dependent thioredoxin reductases [1, 4]. This cross-compartmental redox network bridges lipophilic membranes with cytosolic bioenergetics.',
              'মেমব্রেনের জলীয় প্রান্তে থাকা ভিটামিন সি এই টোকোফেরক্সিল র্যাডিকেলকে ইলেকট্রন ফিরিয়ে দিয়ে ভিটামিন ই-কে পুনরায় সচল করে তোলে, আর ভিটামিন সি নিজে পরবর্তীতে গ্লুটাথিয়ন দ্বারা বিজারিত হয় [১, ৪]।'
            ),
            l(
              'The vitamin K cycle represents a textbook example of an oxidation-reduction metabolic loop dedicated to a single post-translational modification [3]. Reduced vitamin K hydroquinone (KH2) acts as an electron donor for gamma-glutamyl carboxylase (GGCX), which abstracts a proton from the gamma-carbon of peptide-bound glutamate, generating a strong carbanion intermediate that captures ambient CO2 to yield gamma-carboxyglutamic acid (Gla) [3]. Concurrently, KH2 is oxidized to vitamin K 2,3-epoxide (KO) [3].',
              'ভিটামিন কে চক্র হলো একটি অসাধারণ জারণ-বিজারণ চক্র যা প্রোটিনের বিশেষ পরিবর্তনের জন্য নিবেদিত [৩]। বিজারিত ভিটামিন কে হাইড্রোকুইনোন (KH2) গামা-গ্লুটামিল কার্বক্সিলেজ (GGCX) এনজাইমকে শক্তি জুগিয়ে প্রোটিনের গ্লুটামেট অংশে CO2 যুক্ত করে গামা-কার্বক্সিগ্লুটামিক অ্যাসিড (Gla) তৈরি করে [৩]। এই সময় ভিটামিন কে জারিত হয়ে ভিটামিন কে ২,৩-ইপক্সাইডে পরিণত হয় [৩]।'
            ),
            l(
              'To sustain ongoing carboxylation, Vitamin K Epoxide Reductase (VKORC1) reduces KO back to vitamin K quinone, which is then reduced by VKORC1 or paralogous quinone reductases back to KH2 [3]. 4-hydroxycoumarin anticoagulants (warfarin) competitively inhibit VKORC1, depleting intracellular KH2 and blocking carboxylation of factors II, VII, IX, and X, leaving them as inactive des-gamma-carboxy prothrombin (PIVKA-II) molecules incapable of binding platelet membrane calcium [3, 6].',
              'ভিটামিন কে ইপক্সাইড রিডাক্টেজ (VKORC1) এনজাইম একে পুনরায় বিজারিত করে সচল রাখে; ওয়ারফারিন এই এনজাইমকে অচল করে দিয়ে ক্লটিং ফ্যাক্টরগুলোকে অকেজো করে রক্ত পাতলা রাখে [৩, ৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Laboratory Biomarkers, Pharmacokinetics and Drug Interactions', 'ল্যাবরেটরি বায়োমার্কার, ফার্মাকোকাইনেটিক্স ও ড্রাগ ইন্টারঅ্যাকশন'),
          paragraphs: [
            l(
              'Accurate clinical assessment of fat-soluble vitamin status requires selecting appropriate biochemical indicators and accounting for carrier protein kinetics [1, 2]. Serum retinol is homeostatically buffered by hepatic retinol-binding protein (RBP4) reserves, remaining normal until liver retinyl ester stores are virtually exhausted (< 20 mcg/g liver tissue); therefore, relative dose-response (RDR) testing or serum RBP4-to-transthyretin ratios provide superior sensitivity in borderline depletion [1].',
              'চর্বি-দ্রবণীয় ভিটামিনের সঠিক মূল্যায়নে কেবল রক্তের সাধারণ মাত্রা দেখলে চলে না, কারণ যকৃতে রেটিনল-বাইন্ডিং প্রোটিন (RBP4) থাকায় ভিটামিন এ-এর মারাত্মক ঘাটতি না হওয়া পর্যন্ত রক্তের রেটিনল আপাতদৃষ্টিতে স্বাভাবিক দেখাতে পারে [১]। তাই মৃদু ঘাটতি শনাক্ত করতে রিলেটিভ ডোজ-রেসপন্স (RDR) পরীক্ষা বা RBP4-ট্রান্সথাইরেটিন অনুপাত নির্ণয় করা অনেক বেশি নির্ভরযোগ্য [১]।'
            ),
            l(
              'For vitamin D, total serum 25(OH)D is the definitive clinical biomarker because it reflects combined cutaneous photoproduction and dietary intake with minimal diurnal variation [2]. Circulating calcitriol [1,25(OH)2D] has an ultra-short half-life of 4 to 15 hours and fluctuates wildly in response to minute shifts in serum calcium and PTH, making it completely unsuitable for screening nutritional vitamin D sufficiency [2]. Target clinical concentrations for bone and metabolic health range between 30 and 50 ng/mL (75–125 nmol/L) [2].',
              'ভিটামিন ডি-এর ক্ষেত্রে রক্তের মোট ২৫(OH)D হলো আন্তর্জাতিকভাবে স্বীকৃত মানদণ্ড, কারণ এর মাত্রা স্থিতিশীল থাকে এবং এটি ত্বকের তৈরি ও খাদ্য থেকে পাওয়া মোট সঞ্চয় প্রকাশ করে [২]। সক্রিয় ক্যালসিট্রিওলের [১,২৫(OH)2D] অর্ধায়ু মাত্র ৪ থেকে ১৫ ঘণ্টা এবং প্যারাথাইরয়েড হরমোনের পরিবর্তনের সাথে এটি দ্রুত ওঠানামা করে বলে সাধারণ ভিটামিন ডি ঘাটতি নির্ণয়ে এটি ব্যবহার করা মারাত্মক ভুল [২]।'
            ),
            l(
              'Evaluating vitamin E requires indexing plasma alpha-tocopherol against total circulating blood lipids (plasma alpha-tocopherol / [cholesterol + triglycerides] in mmol/L), where a ratio <2.2 umol/mmol indicates true tissue deficiency [4]. In dyslipidemia, elevated circulating VLDL and LDL particles artificially elevate total serum tocopherol concentrations despite intracellular deficiency [4].',
              'ভিটামিন ই মূল্যায়নে রক্তের মোট লিপিডের সাথে অনুপাত (আলফা-টোকোফেরল / [কোলেস্টেরল + ট্রাইগ্লিসারাইড]) দেখা আবশ্যক, কারণ রক্তে চর্বি বেশি থাকলে কোষে ঘাটতি থাকা সত্ত্বেও রক্তে ভিটামিন ই আপাতদৃষ্টিতে বেশি দেখাতে পারে [৪]।'
            ),
            l(
              'Pharmacological interactions frequently compromise fat-soluble vitamer bioavailability [1, 3]. Bile acid sequestrants (cholestyramine), lipase inhibitors (orlistat), and mineral oil lubricants impair micellar entrapment, while chronic anticonvulsants (phenytoin, carbamazepine) induce hepatic CYP3A4 enzymes that accelerate the oxidative catabolism of 25(OH)D and calcitriol into inactive biliary metabolites, precipitating clinical osteomalacia [1, 2].',
              'ওষুধের সাথে ইন্টারঅ্যাকশনের ক্ষেত্রে কোলেস্টাইরামিন বা অরলিস্ট্যাট মাইসেলি গঠন আটকে ভিটামিন শোষণ কমিয়ে দেয়, আর মৃগী রোগের ওষুধ (ফেনাইটোইন) যকৃতের এনজাইম বাড়িয়ে দ্রুত ভিটামিন ডি ধ্বংস করে হাড় নরম করে দেয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Genomic vs Non-Genomic Vitamer Actions', 'প্রাতিষ্ঠানিক সমন্বয়: জিনগত বনাম নন-জিনগত ভূমিকা'),
          paragraphs: [
            l(
              'In summary, fat-soluble vitamins operate across two distinct mechanistic archetypes: genomic steroid-type transcriptional regulators (vitamins A and D) and non-genomic redox/coenzyme catalytic participants (vitamins E and K) [1, 2, 3, 4].',
              'সংক্ষেপে, চর্বি-দ্রবণীয় ভিটামিন দুটি মূলধারায় কাজ করে: প্রথমত, জিনগত নিয়ন্ত্রণকারী স্টেরয়েড সদৃশ ভিটামিন (ভিটামিন এ এবং ডি) এবং দ্বিতীয়ত, নন-জিনগত জারণ-বিজারণ ও কো-এনজাইম ভিটামিন (ভিটামিন ই এবং কে) [১, ২, ৩, ৪]।'
            ),
            l(
              'Nuclear receptor complexes (RAR/RXR and VDR/RXR) coordinate mucosal epithelial protection, immune maturation, and bone mineralization, while membrane-intercalated tocopherols and microsomal carboxylase cycles safeguard cellular polyunsaturated fatty acids and hemostatic stability [1, 3, 4].',
              'নিউক্লিয়ার রিসেপ্টরগুলো (RAR/RXR এবং VDR/RXR) রোগপ্রতিরোধ ও অস্থি গঠন নিয়ন্ত্রণ করে, আর ভিটামিন ই ও কে মেমব্রেনের লিপিড সুরক্ষা এবং রক্ত তঞ্চন স্থিতিশীল রাখে [১, ৩, ৪]।'
            ),
            l(
              'Vitamin K-dependent Matrix Gla Protein (MGP) serves as a potent endogenous inhibitor of arterial medial calcification, demonstrating that phylloquinone and menaquinones protect vascular compliance while guiding calcium into bone [3, 6].',
              'ভিটামিন কে নির্ভর Matrix Gla Protein (MGP) রক্তনালীর প্রাচীরে ক্যালসিয়াম জমতে বাধা দিয়ে রক্তনালীকে নমনীয় রাখে এবং ক্যালসিয়ামকে হাড়ের ভেতর প্রবেশ করায় [৩, ৬]।'
            ),
            l(
              'Nutritional, clinical, and pharmacological practices must reconcile these diverse mechanisms when interpreting serum biomarkers, prescribing fat-soluble supplementation during malabsorptive states (e.g., celiac disease, cystic fibrosis, bariatric bypass), and monitoring anticoagulant therapy [1, 2, 3, 6].',
              'পুষ্টি ও ক্লিনিক্যাল অনুশীলনে এই বৈচিত্র্যময় মেকানিজম মাথায় রেখে রক্ত পরীক্ষা বিশ্লেষণ করা, পরিপাক ও শোষণজনিত রোগে সঠিক ডোজে ভিটামিন দেওয়া এবং রক্ত পাতলা করার ওষুধ সতর্কতার সাথে পরিচালনা করা জরুরি [১, ২, ৩, ৬]।'
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
          heading: l('Non-Genomic Secosteroid Signaling & Cav1.2 Intestinal Transcaltachia', 'নন-জিনগত সেকোস্টেরয়েড সংকেত ও ক্যাভ১.২ অন্ত্রীয় ট্রান্সক্যালট্যাকিয়া'),
          paragraphs: [
            l(
              'While the classical model of calcitriol action requires slow, genomic transcription via nuclear VDR-RXR heterodimers, calcitriol also elicits ultra-rapid, non-genomic cellular responses within seconds to minutes [2]. In intestinal enterocytes, calcitriol stimulates immediate calcium transport—a biophysical phenomenon termed transcaltachia [2].',
              'ভিটামিন ডি-এর ধীরগতির জিনগত কাজের বাইরে এটি কোষে প্রবেশ করে চোখের পলকে সেকেন্ডের মধ্যে অতি-দ্রুত সংকেত তৈরি করতে পারে [২]। অন্ত্রের এন্টারোসাইট কোষে ক্যালসিট্রিওল মুহূর্তের মধ্যে ক্যালসিয়াম পরিবহন ঘটিয়ে দেয় যাকে "ট্রান্সক্যালট্যাকিয়া" বলা হয় [২]।'
            ),
            l(
              'Transcaltachia is initiated when calcitriol binds to an alternative cell-surface membrane receptor identified as 1,25D3-Membrane-Associated Rapid Response Steroid-Binding Protein (1,25D3-MARRS / PDIA3) [2]. Ligand binding activates a membrane-bound phospholipase A2 (PLA2) and phospholipase C (PLC) cascade, rapidly elevating inositol trisphosphate (IP3) and activating Protein Kinase C (PKC) [2].',
              'এই দ্রুত সংকেতটি শুরু হয় যখন ক্যালসিট্রিওল কোষের উপরিভাগের বিশেষ PDIA3 রিসেপ্টরে যুক্ত হয়; ফলে মুহূর্তের মধ্যে প্রোটিন কাইনেজ সি (PKC) সক্রিয় হয়ে ওঠে [২]।'
            ),
            l(
              'Activated PKC phosphorylates and gates L-type voltage-dependent calcium channels (Cav1.2) on the basolateral and apical membranes, stimulating rapid calcium influx and triggering exocytosis of calcium-containing endocytic vesicles [2]. This non-genomic pathway operates in parallel with slow genomic TRPV6/calbindin transcription to optimize acute calcium extraction from transient digestive boluses.',
              'সক্রিয় PKC ক্যালসিয়াম চ্যানেলগুলো খুলে দেয় এবং কোষে ক্যালসিয়ামভর্তি ভেসিকলগুলোকে রক্তে পাঠিয়ে দেয়, যা জিনগত পথের পাশাপাশি দ্রুত খাবার থেকে ক্যালসিয়াম শোষণে সহায়তা করে [২]।'
            ),
            l(
              'Disruption of PDIA3 impairs acute calcium mobilization without altering long-term skeletal density, highlighting the therapeutic potential of developing selective non-genomic secosteroid modulators that accelerate calcium uptake without inducing toxic hypercalcemic gene expression [2].',
              'PDIA3 রিসেপ্টরের ত্রুটি হলে এই তাৎক্ষণিক ক্যালসিয়াম শোষণ ব্যাহত হয়; তাই এমন ওষুধ আবিষ্কারের গবেষণা চলছে যা জিনগত বিষক্রিয়া ছাড়াই দ্রুত ক্যালসিয়াম বাড়াতে পারবে [২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Nuclear Coregulator Dynamics & Retinoid Resistance in Leukemia', 'নিউক্লিয়ার কো-রেগুলেটর গতিবিদ্যা ও লিউকেমিয়ায় রেটিনয়েড প্রতিরোধ'),
          paragraphs: [
            l(
              'At the chromatin level, the Retinoic Acid Receptor (RAR) functions as a molecular scaffold whose transcriptional activity is dictated by ligand-dependent structural allostery [1]. In the unliganded basal state, RAR/RXR heterodimers recruit corepressor complexes, including Nuclear Receptor Corepressor (NCoR) and Silencing Mediator for Retinoid and Thyroid Receptors (SMRT) [1].',
              'ক্রোমাটিনের স্তরে রেটিনোয়িক অ্যাসিড রিসেপ্টর (RAR) একটি সংবেদনশীল কাঠামো হিসেবে কাজ করে যা কোনো লিগ্যান্ড না থাকলে NCoR এবং SMRT নামক অবদমক প্রোটিনকে ধরে রাখে [১]।'
            ),
            l(
              'These corepressors assemble Histone Deacetylases (HDAC3), condensing chromatin around Retinoic Acid Response Elements (RARE) and maintaining gene silencing [1]. Binding of all-trans-retinoic acid (atRA) into the hydrophobic ligand-binding pocket induces a dramatic conformational swing of activation function helix-12 (AF-2), physically ejecting corepressors and creating a high-affinity binding cleft for p160 coactivators (SRC-1, SRC-2) and histone acetyltransferases (p300/CBP) [1].',
              'এই অবদমকগুলো হিস্টোন ডিঅ্যাসিটাইলেজের মাধ্যমে জিনকে ঘুম পাড়িয়ে রাখে। কিন্তু রেটিনোয়িক অ্যাসিড যুক্ত হওয়া মাত্রই রিসেপ্টরের হিলিক্স-১২ ঘুরে গিয়ে অবদমকগুলোকে দূরে ঠেলে দেয় এবং হিস্টোন অ্যাসিটাইলেজকে ডেকে এনে জিন চালু করে দেয় [১]।'
            ),
            l(
              'In Acute Promyelocytic Leukemia (APL), chromosomal translocation t(15;17)(q22;q21) fuses the Promyelocytic Leukemia (PML) gene to the RARA gene, generating the oncogenic fusion oncoprotein PML-RARA [1]. PML-RARA binds RAREs with aberrant high affinity, but its altered conformation binds NCoR/HDAC complexes so tightly that physiological concentrations of retinoic acid fail to release them, locking promyelocytes in an undifferentiated, proliferative leukemic blast state [1].',
              'তীব্র প্রমাইলোসাইটিক লিউকেমিয়া (APL) ব্লাড ক্যান্সারে ক্রোমোজোমের স্থানান্তরে PML-RARA নামক একটি ক্যান্সার প্রোটিন তৈরি হয় যা অবদমকদের এত শক্তভাবে আঁকড়ে ধরে যে রক্তের সাধারণ ভিটামিন এ এদের মুক্ত করতে পারে না এবং রক্তকণিকাগুলো ক্যান্সার কোষে পরিণত হয় [১]।'
            ),
            l(
              'Administering supraphysiological pharmacological doses of all-trans-retinoic acid (ATRA, 45 mg/m2/day) overcomes this steric hindrance, forcing corepressor dissociation, targeting the PML-RARA oncoprotein for proteasomal degradation, and restoring terminal granulocytic differentiation—transforming a historically fatal leukemia into a highly curable malignancy [1].',
              'রোগীকে উচ্চমাত্রার ফার্মাকোলজিক্যাল রেটিনোয়িক অ্যাসিড (ATRA) ওষুধ দিলে তা এই ক্যান্সার প্রোটিনকে ধ্বংস করে দেয় এবং শ্বেতকণিকাকে স্বাভাবিক সুস্থ কণিকায় রূপান্তরিত করে রোগীকে সম্পূর্ণ নিরাময় করে [১]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('FGF23-Klotho Axis & Renal Mineral Wasting in Chronic Kidney Disease', 'FGF23-ক্লোথো অক্ষ ও ক্রনিক কিডনি ডিজিজে খনিজের অপচয়'),
          paragraphs: [
            l(
              'In health, renal proximal tubular calcitriol synthesis is tightly governed by the bone-derived phosphaturic hormone Fibroblast Growth Factor 23 (FGF23) [2]. Synthesized by osteocytes in response to hyperphosphatemia and elevated calcitriol, circulating FGF23 binds to a binary receptor complex in renal distal tubules composed of FGF Receptor-1c (FGFR1c) and the obligate transmembrane coreceptor alpha-Klotho [2].',
              'সুস্থ দেহে ভিটামিন ডি নিয়ন্ত্রণকারী অন্যতম প্রধান হরমোন হলো হাড়ের অস্টিওসাইট কোষে তৈরি হওয়া FGF23 [২]। রক্তে ফসফেট ও ক্যালসিট্রিওল বাড়লে FGF23 নিঃসৃত হয়ে কিডনির বিশেষ রিসেপ্টর এবং আলফা-ক্লোথো (alpha-Klotho) প্রোটিনের সাথে যুক্ত হয় [২]।'
            ),
            l(
              'Activation of FGFR1c-Klotho signaling stimulates extracellular signal-regulated kinase (ERK1/2) phosphorylation, triggering two profound renal actions: it downregulates apical sodium-phosphate cotransporters (NaPi-2a and NaPi-2c) to induce phosphaturia, while concurrently downregulating CYP27B1 and upregulating CYP24A1 transcription [2]. This coordinated response reduces calcitriol synthesis and accelerates its catabolic degradation to calcitroic acid [2].',
              'এই সংকেতের ফলে কিডনি প্রস্রাবের মাধ্যমে অতিরিক্ত ফসফেট বের করে দেয় এবং একই সাথে CYP27B1 এনজাইম নিস্তেজ করে ও CYP24A1 বাড়িয়ে ক্যালসিট্রিওল উৎপাদন তাৎক্ষণিকভাবে থামিয়ে দেয় [২]।'
            ),
            l(
              'In Chronic Kidney Disease (CKD Stage 3–5), progressive nephron loss impairs renal phosphate filtration, triggering compensatory massive surges in FGF23 (often >100-fold normal) [2]. Concurrently, damaged tubules lose alpha-Klotho expression, inducing state-dependent renal Klotho resistance. The extreme circulating FGF23 drives profound suppression of residual proximal tubular CYP27B1, causing early, severe calcitriol deficiency while serum 25(OH)D is still normal [2].',
              'দীর্ঘস্থায়ী কিডনি রোগে (CKD) কিডনি ফসফেট বের করতে ব্যর্থ হলে দেহ ক্ষতিপূরণ হিসেবে ১০০ গুণেরও বেশি FGF23 নিঃসরণ করে [২]। কিন্তু কিডনির ক্ষতি হওয়ায় ক্লোথো প্রোটিন ধ্বংস হয়ে যায়; ফলে অতিরিক্ত FGF23 কিডনির ভিটামিন ডি তৈরির ক্ষমতাকে পুরোপুরি বন্ধ করে দিয়ে মারাত্মক ক্যালসিট্রিওল ঘাটতি তৈরি করে [২]।'
            ),
            l(
              'The collapse of calcitriol production removes tonic feedback inhibition on the parathyroid glands, precipitating severe secondary hyperparathyroidism, osteitis fibrosa cystica, and widespread medial vascular calcification (Monckeberg arteriosclerosis), culminating in marked cardiovascular mortality [2]. Managing this axis requires low-calcemic active vitamin D analogues (paricalcitol) combined with non-calcium phosphate binders to suppress PTH without exacerbating vascular calcification [2].',
              'ক্যালসিট্রিওলের এই পতনে প্যারাথাইরয়েড গ্রন্থি অনিয়ন্ত্রিত হয়ে পড়ে, যার ফলে হাড়ের ক্যালসিয়াম গলে রক্তনালীতে জমে রক্তনালী পাথরের মতো শক্ত হয়ে যায় এবং হৃদরোগে আক্রান্ত হয়ে রোগীর মৃত্যু হতে পারে [২]। আধুনিক চিকিৎসায় প্যারিক্যালসিটলের মতো বিশেষ ভিটামিন ডি অ্যানালগ দিয়ে এই জটিলতা নিয়ন্ত্রণ করা হয় [২]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Tocopherol Isomer Affinity & The Selective alpha-TTP Hepatic Gatekeeper', 'টোকোফেরল আইসোমার ও যকৃতের আলফা-টিটিপি গেটকিপার প্রোটিন'),
          paragraphs: [
            l(
              'Dietary Vitamin E encompasses eight distinct chemical vitamers: four tocopherols (alpha, beta, gamma, delta) and four tocotrienols, each synthesized exclusively by photosynthetic plants [4]. Western diets typically contain 2- to 4-fold more gamma-tocopherol (derived from soy, corn, and canola oils) than alpha-tocopherol [4]. Despite this dietary abundance of gamma-tocopherol, human plasma and tissues contain almost exclusively RRR-alpha-tocopherol (>90% of total circulating vitamer mass) [4].',
              'খাদ্যতালিকায় ভিটামিন ই-এর আটটি রাসায়নিক রূপ থাকে: চারটি টোকোফেরল এবং চারটি টোকোট্রাইয়েনল [৪]। সাধারণ খাদ্যতালিকায় আলফা-টোকোফেরলের চেয়ে গামা-টোকোফেরল (সয়াবিন বা ভুট্টার তেলে পাওয়া) দুই থেকে চার গুণ বেশি থাকে [৪]। কিন্তু মানুষের রক্ত ও কোষের ভেতরে পরীক্ষা করলে দেখা যায় শতকরা ৯০ ভাগের বেশি থাকে শুধুই আলফা-টোকোফেরল [৪]।'
            ),
            l(
              'This profound physiological selection is enforced by a single cytosolic gatekeeper protein in the liver: alpha-Tocopherol Transfer Protein (alpha-TTP) [4]. Structural crystallography reveals that alpha-TTP possesses a deep, hydrophobic ligand-binding pocket sealed by a mobile alpha-helical lid [4]. The pocket contains three invariant hydrophobic residues that establish steric selectivity: RRR-alpha-tocopherol binds with 100% relative affinity, whereas beta-tocopherol binds at 38%, gamma-tocopherol at 9%, and delta-tocopherol at under 2% [4].',
              'এই অদ্ভুত বাছাই প্রক্রিয়ার মূল কারণ হলো যকৃতের একটি বিশেষ প্রোটিন: আলফা-টোকোফেরল ট্রান্সফার প্রোটিন (alpha-TTP) [৪]। এই প্রোটিনের ভেতরে একটি বিশেষ আণবিক খাঁজ থাকে যা কেবল আলফা-টোকোফেরলকে ১০০% নিখুঁতভাবে আঁকড়ে ধরতে পারে, যেখানে গামা-টোকোফেরল মাত্র ৯% এবং অন্যান্য রূপগুলো ২% এরও কম যুক্ত হতে পারে [৪]।'
            ),
            l(
              'Upon binding RRR-alpha-tocopherol, alpha-TTP translocates to the inner leaflet of endosomal membranes, facilitating the incorporation of alpha-tocopherol into nascent Very Low-Density Lipoproteins (VLDL) for export into the systemic bloodstream [4]. Vitamers that cannot bind alpha-TTP remain behind in hepatocytes, where microsomal cytochrome P450 enzymes (specifically CYP4F2) initiate sequential omega-hydroxylation and beta-oxidation, catabolizing gamma-tocopherol into water-soluble carboxyethyl hydroxychroman (CEHC) metabolites for rapid excretion in bile and urine [4].',
              'আলফা-টিটিপি কেবল আলফা-টোকোফেরলকে ভিএলডিএল (VLDL) কণিকায় বসিয়ে রক্তে পাঠিয়ে দেয়, আর বাকি রূপগুলোকে যকৃতের CYP4F2 এনজাইম ভেঙে প্রস্রাব ও পিত্তরসের মাধ্যমে শরীর থেকে বের করে দেয় [৪]।'
            ),
            l(
              'Inactivating autosomal recessive mutations in the TTPA gene on chromosome 8q13 cause Ataxia with Vitamin E Deficiency (AVED) [4]. AVED patients absorb dietary vitamin E normally into chylomicrons, but cannot re-secrete alpha-tocopherol from the liver, causing plasma concentrations to plummet to near zero [4]. Without membrane protection, spinocerebellar tracts and dorsal root ganglion large-caliber sensory axons undergo chronic lipid peroxidative demyelination, presenting as progressive Friedreich-like sensory ataxia, dysarthria, and loss of proprioception, preventable only by lifelong massive oral doses of RRR-alpha-tocopherol (800–1200 mg/day) driving passive hepatic spillover [4].',
              'TTPA জিনের ত্রুটিতে আক্রান্ত রোগীরা এই প্রোটিন তৈরি করতে পারে না; ফলে রক্তে ভিটামিন ই শূন্যের কোঠায় নেমে আসে এবং স্নায়ুর আবরণী জারিত হয়ে নষ্ট হয়ে গিয়ে মারাত্মক হাঁটাচলার ভারসাম্যহীনতা ও পঙ্গুত্ব দেখা দেয়, যা কেবল প্রতিদিন উচ্চমাত্রার আলফা-টোকোফেরল সেবনের মাধ্যমেই প্রতিরোধ সম্ভব [৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Gla Domain Structural Biochemistry & Vascular Calcification Inhibition', 'Gla ডোমেন বায়োকেমিস্ট্রি ও রক্তনালীর ক্যালসিফিকেশন প্রতিরোধ'),
          paragraphs: [
            l(
              'The dicarboxylic amino acid gamma-carboxyglutamic acid (Gla) serves as a unique biological chelation ligand for divalent metal ions [3]. Within the endoplasmic reticulum, the enzyme gamma-glutamyl carboxylase (GGCX) recognizes an amphipathic propeptide tether on substrate proteins, processively modifying 10 to 12 glutamate residues clustered in the N-terminal Gla domain [3].',
              'গামা-কার্বক্সিগ্লুটামিক অ্যাসিড (Gla) হলো এমন একটি বিশেষ অ্যামিনো অ্যাসিড যা ক্যালসিয়াম আয়নকে চুম্বকের মতো টেনে ধরে রাখতে পারে [৩]। কোষের এন্ডোপ্লাজমিক রেটিকুলামে GGCX এনজাইম প্রোটিনের গায়ে পরপর ১০ থেকে ১২টি গ্লুটামেট অংশে এই রূপান্তর ঘটায় [৩]।'
            ),
            l(
              'X-ray crystallographic and NMR studies demonstrate that in the absence of calcium, the Gla domain is intrinsically disordered and flexible [3]. When calcium ions bind to the dicarboxylic Gla carboxylates, the domain undergoes a dramatic conformational collapse, folding into a compact, ordered alpha-helix that coordinates 7 to 9 Ca2+ ions [3]. This structural transition projects three conserved hydrophobic residues (Phe-4, Leu-5, Val-8) outward into a lipophilic patch that directly inserts into the phosphatidylserine-rich outer leaflet of activated platelet membranes [3].',
              'ক্যালসিয়ামের অনুপস্থিতিতে এই ডোমেনটি অগোছালো থাকে; কিন্তু ক্যালসিয়াম যুক্ত হওয়া মাত্রই এটি সংকুচিত হয়ে একটি শক্ত কাঠামোর রূপ নেয় যা রক্তের অনুচক্রিকার মেমব্রেনের ভেতরে গেঁথে গিয়ে রক্ত তঞ্চন প্রক্রিয়া চালু করে [৩]।'
            ),
            l(
              'Beyond hemostasis, Matrix Gla Protein (MGP) is synthesized by vascular smooth muscle cells and chondrocytes, acting as the primary physiological defense against arterial calcification [3, 6]. MGP uses its 5 Gla residues to bind nascent calcium phosphate nanocrystals in arterial walls, physically preventing crystal growth and clearing mineral debris via macrophage endocytosis [3, 6].',
              'রক্ত জমাট বাঁধার বাইরে রক্তনালীর পেশিকোষে তৈরি হওয়া Matrix Gla Protein (MGP) রক্তনালীর ভেতরে ক্যালসিয়াম জমতে বাধা দেওয়ার প্রধান প্রাকৃতিক ঢাল হিসেবে কাজ করে [৩, ৬]। MGP রক্তনালীর দেয়ালে ক্যালসিয়ামের ক্ষুদ্র কণাগুলোকে আটকে ফেলে ম্যাক্রোফেজ দ্বারা পরিষ্কার করায় [৩, ৬]।'
            ),
            l(
              'Patients on long-term warfarin therapy for atrial fibrillation or prosthetic heart valves continuously inhibit VKORC1, leaving vascular MGP uncarboxylated and inactive [3, 6]. Over years, uncarboxylated MGP permits progressive calcium crystal deposition in the tunica media of medium and large arteries, accelerating arterial stiffness, isolated systolic hypertension, coronary artery calcification, and predisposing patients to the catastrophic microvascular necrosis known as calciphylaxis [3, 6]. Clinical trials actively explore whether supplemental vitamin K2 (menaquinone-7) can retard vascular calcification in high-risk populations [3, 6].',
              'যেসব রোগী বছরের পর বছর রক্ত পাতলা করার ওষুধ ওয়ারফারিন সেবন করেন, তাদের রক্তনালীর এই MGP প্রোটিন অকেজো হয়ে পড়ে [৩, ৬]। ফলে ধীরে ধীরে রক্তনালীর দেয়ালে ক্যালসিয়াম জমে রক্তনালী পাথরের মতো শক্ত হয়ে যায় এবং ক্যালসিফাইল্যাক্সিসের মতো মারাত্মক জটিলতা তৈরি হতে পারে; তাই আধুনিক গবেষণায় ভিটামিন কে২ দিয়ে রক্তনালীর এই ক্ষতি ঠেকানোর চেষ্টা চলছে [৩, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Translational Pharmacology & Synthetic Vitamer Analogues', 'অনুবাদিত ফার্মাকোলজি ও কৃত্রিম ভিটামিন অ্যানালগ'),
          paragraphs: [
            l(
              'Translational pharmacology has extensively harnessed the molecular targets of fat-soluble vitamins to engineer high-potency synthetic vitamer analogues with optimized therapeutic windows [1, 2]. In dermatology and oncology, first-, second-, and third-generation synthetic retinoids (tretinoin, isotretinoin, acitretin, and bexarotene) exhibit tailored receptor selectivity for RAR-alpha, RAR-gamma, or RXRs, treating severe recalcitrant nodular acne, psoriasis, and cutaneous T-cell lymphoma [1].',
              'আধুনিক ফার্মাকোলজি চর্বি-দ্রবণীয় ভিটামিনের মেকানিজম ব্যবহার করে অত্যন্ত কার্যকরী ওষুধ তৈরি করেছে [১, ২]। চর্মরোগ ও ক্যান্সারের চিকিৎসায় আইসোট্রেটিনয়িন, অ্যাসিট্রেটিন ও বেক্সারোটিনের মতো কৃত্রিম রেটিনয়েড ওষুধ ব্রণের তীব্র রূপ, সোরিয়াসিস এবং ত্বকের লিম্ফোমা চিকিৎসায় যুগান্তকারী সাফল্য অর্জন করেছে [১]।'
            ),
            l(
              'In nephrology, synthetic low-calcemic vitamin D analogues—such as paricalcitol (19-nor-1,25-dihydroxyvitamin D2) and maxacalcitol (22-oxacalcitriol)—bind to the VDR with modified allosteric geometry [2]. They selectively recruit transcriptional coregulators to parathyroid cells to potently suppress PTH gene transcription while exhibiting minimal transactivation at intestinal TRPV6 promoters, effectively suppressing secondary hyperparathyroidism in dialysis patients without precipitating severe hypercalcemia or hyperphosphatemia [2].',
              'কিডনি বিজ্ঞানে প্যারিক্যালসিটলের মতো বিশেষ ভিটামিন ডি অ্যানালগ রক্তে ক্যালসিয়াম ও ফসফেট না বাড়িয়েই প্যারাথাইরয়েড হরমোন দমন করতে পারে, যা ডায়ালাইসিসের রোগীদের জীবন বাঁচাতে অত্যন্ত কার্যকর [২]।'
            ),
            l(
              'Conversely, the "antioxidant paradox" revealed in massive randomized clinical trials (such as the Alpha-Tocopherol, Beta-Carotene Cancer Prevention [ATBC] Study and the SELECT trial) showed that high-dose supplemental alpha-tocopherol (400 IU/day) or beta-carotene in smokers failed to prevent cardiovascular disease or cancer, and paradoxically increased prostate cancer incidence and total mortality [1, 4]. Supraphysiological vitamer concentrations disrupt endogenous redox signaling, displace other dietary vitamers, and can transition into pro-oxidant radicals in oxidatively stressed tissues [1, 4].',
              'অন্যদিকে বৃহৎ ক্লিনিক্যাল গবেষণায় "অ্যান্টিঅক্সিডেন্ট প্যারাডক্স" প্রমাণিত হয়েছে: ধূমপায়ীদের অতিরিক্ত মাত্রায় কৃত্রিম ভিটামিন ই বা বিটা-ক্যারোটিন বড়ি খাওয়ালে তা রোগ কমানোর বদলে উল্টো প্রোস্টেট ক্যান্সার ও মৃত্যুর হার বাড়িয়ে দেয় [১, ৪]। কারণ অতিরিক্ত মাত্রার ভিটামিন দেহের স্বাভাবিক সংকেত নষ্ট করে এবং ক্ষতিকর প্রডাক্ট তৈরি করে [১, ৪]।'
            ),
            l(
              'These discoveries reinforce the fundamental tenet of precision nutrition: fat-soluble vitamins are potent, bioactive hormonal ligands and reactive agents whose physiological benefits derive from calibrated whole-food matrix delivery rather than indiscriminate, supraphysiological megadosing [1, 2, 4].',
              'এই গবেষণাগুলো স্পষ্ট করে দেয় যে চর্বি-দ্রবণীয় ভিটামিনগুলো মূলত শক্তিশালী হরমোনীয় অণু, যাদের প্রকৃত সুফল প্রাকৃতিক খাদ্যের সুষম ভারসাম্যের মাধ্যমেই পাওয়া যায়, কোনো অনিয়ন্ত্রিত কৃত্রিম সাপ্লিমেন্টের অন্ধ ব্যবহারের মাধ্যমে নয় [১, ২, ৪]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Flowchart tracing fat-soluble vitamin uptake, activation, and clinical roles: micellar incorporation in the gut lumen, enterocyte absorption, chylomicron transport, hepatic storage and receptor processing, and tissue-specific actions including rhodopsin vision (A), calcitriol calcium homeostasis (D), membrane antioxidation (E), and gamma-glutamyl carboxylation for coagulation (K).',
      'চর্বি-দ্রবণীয় ভিটামিনের শোষণ, রূপান্তর ও শারীরবৃত্তীয় ভূমিকার প্রবাহচিত্র: অন্ত্রে মাইসেলি গঠন ও কাইলোমাইক্রনে পরিবহন, যকৃতে সঞ্চয়, এবং বিভিন্ন কলায় সুনির্দিষ্ট কাজ যেমন দৃষ্টিশক্তি (A), ক্যালসিয়াম নিয়ন্ত্রণ (D), কোষঝিল্লি সুরক্ষা (E), এবং রক্ত তঞ্চন (K)।'
    ),
    steps: [
      l(
        'Step 1: Dietary fat and bile salts form mixed micelles in the duodenal lumen, solubilizing hydrophobic vitamins A, D, E, and K for apical enterocyte uptake via CD36 and NPC1L1.',
        'ধাপ ১: খাদ্যের ফ্যাট ও পিত্তলবণ ক্ষুদ্রান্ত্রে মিক্সড মাইসেলি তৈরি করে ভিটামিন এ, ডি, ই এবং কে-কে এন্টারোসাইট কোষে শোষণের উপযোগী করে তোলে।'
      ),
      l(
        'Step 2: Enterocytes package vitamins into nascent chylomicrons, which traverse lacteals and the thoracic duct into venous circulation, delivering vitamer remnants to hepatic stellate cells and parenchymal targets.',
        'ধাপ ২: এন্টারোসাইট ভিটামিনগুলোকে কাইলোমাইক্রনে আবদ্ধ করে লসিকা নালী ও রক্তের মাধ্যমে যকৃৎ এবং লক্ষ্য কলায় পৌঁছে দেয়।'
      ),
      l(
        'Step 3: Hepatic and renal enzymes activate regulatory secosteroids (CYP2R1, CYP27B1 forming calcitriol) and retinoids, while alpha-TTP selectively incorporates alpha-tocopherol into VLDL.',
        'ধাপ ৩: যকৃৎ ও কিডনির এনজাইম সক্রিয় ভিটামিন ডি (ক্যালসিট্রিওল) তৈরি করে এবং যকৃতের আলফা-টিটিপি আলফা-টোকোফেরলকে রক্তে ছড়িয়ে দেয়।'
      ),
      l(
        'Step 4: Target tissues execute vitamer-dependent functions: rhodopsin phototransduction in retina, TRPV6 calcium absorption in gut, peroxyl radical neutralization in membranes, and VKORC1-dependent clotting factor carboxylation in hemostasis.',
        'ধাপ ৪: লক্ষ্য কোষে ভিটামিনগুলো কাজ সম্পাদন করে: চোখের রেটিনায় দৃষ্টি সংবেদ, অন্ত্রে ক্যালসিয়াম শোষণ, কোষপর্দায় অ্যান্টিঅক্সিডেশন এবং যকৃতে রক্ত জমাট বাঁধার ফ্যাক্টর সক্রিয়করণ।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 62-year-old patient with mechanical aortic valve replacement on stable chronic warfarin therapy undergoes antibiotic treatment with broad-spectrum cephalosporins for pneumonia. Over the subsequent 5 days, their INR jumps from 2.8 to 6.2, and they present with hematuria. What is the precise pharmacological mechanism underlying this acute vitamer interaction?',
      'যান্ত্রিক হার্ট ভালভ প্রতিস্থাপিত এক রোগী ওয়ারফারিন সেবনকালে নিউমোনিয়ার জন্য ব্রড-স্পেকট্রাম অ্যান্টিবায়োটিক গ্রহণ করেন। ৫ দিনের মধ্যে রক্তের INR ২.৮ থেকে বেড়ে ৬.২ এ পৌঁছায় এবং প্রস্রাবে রক্ত দেখা দেয়। এই তীব্র প্রতিক্রিয়ার সঠিক ফার্মাকোলজিক্যাল কারণ কী?'
    ),
    options: [
      l(
        'Broad-spectrum antibiotics eradicate menaquinone-producing gut bacteria (reducing endogenous vitamin K2 supply), while certain cephalosporins directly inhibit hepatic VKORC1, synergistically crippling the vitamin K carboxylation cycle.',
        'ব্রড-স্পেকট্রাম অ্যান্টিবায়োটিক অন্ত্রের ভিটামিন কে২ তৈরি করা উপকারী ব্যাকটেরিয়া ধ্বংস করে এবং সেফালোস্পোরিন সরাসরি যকৃতের VKORC1 এনজাইমকে আরও বেশি অকেজো করে ফেলে, যার ফলে ভিটামিন কে চক্র সম্পূর্ণ ভেঙে পড়ে অতিরিক্ত রক্তক্ষরণ ঘটায়।'
      ),
      l(
        'Cephalosporins directly bind to serum albumin, displacing all circulating calcium and preventing bone mineral turnover.',
        'অ্যান্টিবায়োটিক রক্তের অ্যালবুমিনে যুক্ত হয়ে ক্যালসিয়াম অপসারণ করে দেয় এবং হাড়ের খনিজায়ন নষ্ট করে।'
      ),
      l(
        'Antibiotics stimulate renal CYP27B1, causing hypercalcemic nephropathy and rapid destruction of platelet membranes.',
        'অ্যান্টিবায়োটিক কিডনির CYP27B1 বাড়িয়ে রক্তে অতিরিক্ত ক্যালসিয়াম তৈরি করে অনুচক্রিকা ধ্বংস করে দেয়।'
      ),
      l(
        'Antibiotics degrade enterocyte SGLT1 transporters, preventing passive diffusion of all clotting factors.',
        'অ্যান্টিবায়োটিক অন্ত্রের SGLT1 চ্যানেল নষ্ট করে ক্লটিং ফ্যাক্টরের শোষণ বন্ধ করে দেয়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Intestinal microflora synthesize menaquinones (Vitamin K2) that provide a continuous basal reservoir of vitamin K. Broad-spectrum antibiotics decimate this gut microbiota. Furthermore, cephalosporins containing an N-methylthiotetrazole (NMTT) side chain directly inhibit Vitamin K Epoxide Reductase (VKORC1), compounding warfarin’s pharmacological effect, precipitating profound undercarboxylation of clotting factors II, VII, IX, and X, and causing dangerous bleeding diatheses.',
      'অন্ত্রের ব্যাকটেরিয়া ভিটামিন কে২ তৈরি করে রক্তে ভিটামিনের জোগান দেয়। ব্রড-স্পেকট্রাম অ্যান্টিবায়োটিক এই ব্যাকটেরিয়াগুলোকে মেরে ফেলে। এছাড়া সেফালোস্পোরিন ওষুধ সরাসরি VKORC1 এনজাইমকে আটকে দেয়; ফলে ওয়ারফারিনের রক্ত পাতলা করার ক্ষমতা বহুগুণ বেড়ে গিয়ে রক্ত জমাট বাঁধার ক্ষমতা হারিয়ে রোগী মারাত্মক রক্তক্ষরণে আক্রান্ত হন।'
    ),
  },
}
