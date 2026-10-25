import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const maternalRefs = [
  {
    id: 'czeizel-nejm-folic-acid-1992',
    authors: 'Andrew E. Czeizel, Istvan Dudas',
    title: 'Prevention of the first occurrence of neural-tube defects by periconceptional vitamin supplementation',
    organization: 'The New England Journal of Medicine',
    year: 1992,
    url: 'https://doi.org/10.1056/NEJM199212243272602',
    doi: '10.1056/NEJM199212243272602',
  },
  {
    id: 'desoye-physiol-rev-placental-transport-2011',
    authors: 'Gernot Desoye, Fredrick C. Hauguel-de Mouzon',
    title: 'The human placenta in diabetes and obesity: changes in nutrient transport and metabolism',
    organization: 'Physiological Reviews',
    year: 2011,
    url: 'https://doi.org/10.1152/physrev.00043.2010',
    doi: '10.1152/physrev.00043.2010',
  },
  {
    id: 'acog-gestational-diabetes-pb-2018',
    authors: 'American College of Obstetricians and Gynecologists (ACOG)',
    title: 'ACOG Practice Bulletin No. 190: Gestational Diabetes Mellitus',
    organization: 'Obstetrics & Gynecology',
    year: 2018,
    url: 'https://doi.org/10.1097/AOG.0000000000002501',
    doi: '10.1097/AOG.0000000000002501',
  },
  {
    id: 'bode-glycobiol-hmo-function-2012',
    authors: 'Lars Bode',
    title: 'Human milk oligosaccharides: every baby needs a sugar mama',
    organization: 'Glycobiology',
    year: 2012,
    url: 'https://doi.org/10.1093/glycob/cws074',
    doi: '10.1093/glycob/cws074',
  },
  {
    id: 'kovacs-physiol-rev-maternal-calcium-2016',
    authors: 'Christopher S. Kovacs',
    title: 'Maternal Mineral and Bone Metabolism During Pregnancy, Lactation, and Post-Weaning Recovery',
    organization: 'Physiological Reviews',
    year: 2016,
    url: 'https://doi.org/10.1152/physrev.00027.2015',
    doi: '10.1152/physrev.00027.2015',
  },
  {
    id: 'iom-weight-gain-pregnancy-2009',
    authors: 'Institute of Medicine (IOM) and National Research Council',
    title: 'Weight Gain During Pregnancy: Reexamining the Guidelines',
    organization: 'The National Academies Press',
    year: 2009,
    url: 'https://doi.org/10.17226/12584',
    doi: '10.17226/12584',
  },
]

export const nutrition23MaternalFetalNutritionLesson: LessonTopic = {
  id: 'topic.nutrition.maternal-fetal-lactation-nutrition',
  slug: 'maternal-fetal-lactation-nutrition',
  version: 1,
  updatedAt: '2026-10-25',
  title: l(
    '23 · Maternal, Fetal & Lactational Nutrition: Embryogenesis to Breastfeeding',
    '২৩ · মাতৃ, ভ্রূণ ও স্তন্যদানকালীন পুষ্টি: ভ্রূণ বিকাশ থেকে মাতৃদুগ্ধ নিঃসরণ'
  ),
  summary: l(
    'Comprehensive molecular physiology and evidence-based clinical dietetics across the reproductive continuum: periconceptional folate one-carbon kinetics and primary neural tube closure, placental syncytiotrophoblast nutrient transport (GLUT1, SNAT2, FAT/CD36, transferrin endocytosis), gestational diabetes mellitus (GDM) metabolic therapy, maternal bone mineral mobilization (PTHrP vs calcitonin), and human milk oligosaccharides (HMO) with secretory IgA mucosal immunology.',
    'মাতৃ, ভ্রূণ ও স্তন্যদানকালীন পুষ্টির আণবিক শারীরবৃত্ত ও চিকিৎসা পুষ্টিবিজ্ঞান: গর্ভধারণপূর্ব ফোলেটের ওয়ান-কার্বন বিপাক ও নিউরাল টিউব গঠন, গর্ভফুলের সিনসিটিওট্রফোব্লাস্ট দিয়ে পুষ্টি পরিবহন (GLUT1, SNAT2, CD36 ও ট্রান্সফেরিন), গর্ভকালীন ডায়াবেটিস (GDM) ব্যবস্থাপনা, মাতৃদেহের ক্যালসিয়াম রূপান্তর এবং মাতৃদুগ্ধের অলিগোস্যাকারাইড (HMO) ও সিক্রেটরি আইজিএ-এর ইমিউনোলজি।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-25',
  objectives: [
    l(
      'Analyze the biochemical mechanisms of periconceptional folate in one-carbon metabolism: evaluate thymidylate synthase, methionine synthase, DNA methylation, and neural tube closure between embryonic days 21 and 28 post-conception.',
      'গর্ভধারণপূর্ব ফোলেটের ওয়ান-কার্বন বিপাকের আণবিক প্রক্রিয়া বিশ্লেষণ করা: থাইমিডিলেট সিন্থেজ, ডিএনএ মিথাইলেশন এবং গর্ভধারণের ২১ থেকে ২৮তম দিনে ভ্রূণের নিউরাল টিউব বন্ধ হওয়ার শারীরবৃত্ত ব্যাখ্যা করা।'
    ),
    l(
      'Deconstruct the polarized nutrient transport systems of the human placental syncytiotrophoblast: differentiate microvillous vs basal membrane dynamics for glucose (GLUT1/GLUT3), amino acids (SNAT1/2/4, LAT1/2), fatty acids (FATP4, FAT/CD36), and receptor-mediated iron endocytosis.',
      'মানব গর্ভফুলের সিনসিটিওট্রফোব্লাস্টের উভয় পাশের পুষ্টি পরিবহন ব্যবস্থা বিশ্লেষণ করা: গ্লুকোজ (GLUT1/GLUT3), অ্যামিনো অ্যাসিড (SNAT1/2/4, LAT1/2), ফ্যাটি অ্যাসিড (FATP4, CD36) এবং রিসেপ্টর-চালিত আয়রন পরিবহন প্রক্রিয়া ব্যাখ্যা করা।'
    ),
    l(
      'Evaluate the endocrine pathophysiology of Gestational Diabetes Mellitus (GDM): investigate human placental lactogen (hPL), progesterone, and TNF-alpha driving 2nd/3rd trimester insulin resistance, the Pedersen hypothesis of fetal macrosomia, and evidence-based carbohydrate distribution.',
      'গর্ভকালীন ডায়াবেটিসের (GDM) হরমোনজনিত প্যাথোফিজিওলজি মূল্যায়ন করা: হিউম্যান প্লাসেন্টাল ল্যাকটোজেন (hPL) ও প্রজেস্টেরনের প্রভাবে ইনসুলিন রেজিস্ট্যান্স, ভ্রূণের ম্যাক্রোসোমিয়া (পেডারসেন তত্ত্ব) এবং কার্বোহাইড্রেট বিন্যাসের বিজ্ঞান আয়ত্ত করা।'
    ),
    l(
      'Formulate maternal-fetal mineral homeodynamics during pregnancy and lactation: examine placental active calcium pumping (PMCA), mammary gland PTHrP synthesis driving trabecular bone resorption, and complete post-weaning skeletal remineralization.',
      'গর্ভকালীন ও স্তন্যদানকালে মাতৃদেহের খনিজ ভারসাম্য নিরূপণ করা: গর্ভফুলের ক্যালসিয়াম পাম্প (PMCA), স্তনগ্রন্থি থেকে PTHrP হরমোন নিঃসরণের মাধ্যমে অস্থির ক্যালসিয়াম ভাঙন এবং স্তন্যদান শেষের পর অস্থির সম্পূর্ণ পুনর্গঠন প্রক্রিয়া বিশ্লেষণ করা।'
    ),
    l(
      'Examine the glycobiology and mucosal immunology of human breast milk: elucidate the enzymatic synthesis of human milk oligosaccharides (HMOs, 2-FL), their role as prebiotic substrates for Bifidobacterium infantis and pathogen receptor decoys, alongside secretory IgA (sIgA) passive immunity.',
      'মাতৃদুগ্ধের গ্লাইকোবায়োলজি ও রোগপ্রতিরোধ ক্ষমতা বিশ্লেষণ করা: মাতৃদুগ্ধের বিশেষায়িত অলিগোস্যাকারাইড (HMOs, 2-FL) কীভাবে ক্ষতিকর জীবাণুর ফাঁদ হিসেবে কাজ করে এবং সিক্রেটরি আইজিএ (sIgA) নবজাতকের অন্ত্রকে সুরক্ষিত রাখে তা অনুধাবন করা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.energy-balance-tdee', 'topic.nutrition.b-complex-vitamins-bioenergetics'],
  relatedTopicIds: ['topic.metabolism.one-carbon-methylation-transsulfuration', 'topic.metabolism.lipogenesis-triglycerides'],
  references: maternalRefs,
  evidenceBySection: {
    introduction: ['czeizel-nejm-folic-acid-1992', 'iom-weight-gain-pregnancy-2009'],
    structure: ['desoye-physiol-rev-placental-transport-2011', 'czeizel-nejm-folic-acid-1992'],
    mechanism: ['acog-gestational-diabetes-pb-2018', 'desoye-physiol-rev-placental-transport-2011'],
    integration: ['kovacs-physiol-rev-maternal-calcium-2016', 'bode-glycobiol-hmo-function-2012'],
    practice: ['acog-gestational-diabetes-pb-2018', 'iom-weight-gain-pregnancy-2009'],
    takeaways: ['czeizel-nejm-folic-acid-1992', 'bode-glycobiol-hmo-function-2012'],
  },
  chapter: {
    toc: [
      { id: 'sec-folate', label: l('1. Periconceptional Folate, One-Carbon Metabolism & Neural Tube Embryogenesis', '১. গর্ভধারণপূর্ব ফোলেট, ওয়ান-কার্বন বিপাক ও নিউরাল টিউব গঠন'), sectionId: 'introduction' },
      { id: 'sec-placenta', label: l('2. Placental Syncytiotrophoblast Transporters: GLUT1, SNATs, CD36 & Iron Flux', '২. গর্ভফুলের সিনসিটিওট্রফোব্লাস্ট ট্রান্সপোর্টার: GLUT1, SNAT, CD36 ও আয়রন প্রবাহ'), sectionId: 'structure' },
      { id: 'sec-gdm', label: l('3. Gestational Diabetes Pathophysiology: Placental Hormones & Fetal Macrosomia', '৩. গর্ভকালীন ডায়াবেটিসের রোগশারীরবৃত্ত: গর্ভফুলের হরমোন ও ভ্রূণের ম্যাক্রোসোমিয়া'), sectionId: 'mechanism' },
      { id: 'sec-calcium-hmo', label: l('4. Maternal Bone Remodeling, Breastfeeding Endocrinology & HMO Glycobiology', '৪. মাতৃদেহের ক্যালসিয়াম রূপান্তর, স্তন্যদান শারীরবৃত্ত ও মাতৃদুগ্ধের HMO বায়োলজি'), sectionId: 'integration' },
      { id: 'sec-clinical-gdm', label: l('5. Clinical Medical Nutrition Therapy: Gestational Weight Gain, GDM & Micronutrients', '৫. ক্লিনিক্যাল চিকিৎসা পুষ্টি থেরাপি: গর্ভকালীন ওজন বৃদ্ধি, জিডিএম ও মাইক্রোনিউট্রিয়েন্ট'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Periconceptional Folate & Neural Tube Defects (NTDs)', 'গর্ভধারণপূর্ব ফোলেট ও নিউরাল টিউব ত্রুটি (NTDs)'),
        definition: l(
          'The mandatory nutritional provision of synthetic pteroylmonoglutamic acid (folic acid) or active 5-MTHF prior to conception and through embryonic day 28, required for DNA thymidylate synthesis and epigenetic methylation during neural tube closure; deficiency causes anencephaly or spina bifida [1].',
          'গর্ভধারণের পূর্বে এবং ভ্রূণের ২৮তম দিন পর্যন্ত ফোলেটের অপরিহার্য সরবরাহ, যা ডিএনএ সংশ্লেষণ ও মিথাইলেশনের মাধ্যমে ভ্রূণের স্নায়ুনালি বন্ধ হতে সাহায্য করে; এর ঘাটতিতে অ্যানেনসেফালি বা স্পাইনা বিফিডার মতো মারাত্মক জন্মগত ত্রুটি দেখা দেয় [১]।'
        ),
      },
      {
        term: l('Syncytiotrophoblast Nutrient Transport', 'সিনসিটিওট্রফোব্লাস্ট পুষ্টি পরিবহন ব্যবস্থা'),
        definition: l(
          'The continuous multinucleated epithelial layer of the human chorionic villus separating maternal blood from fetal capillaries, expressing polarized transporters across its maternal-facing microvillous membrane (MVM) and fetal-facing basal membrane (BM) for facilitated and active nutrient transfer [2].',
          'গর্ভফুলের (প্লাসেন্টা) বহুকেন্দ্রিক বিশেষায়িত কোষস্তর যা মাতৃরক্ত ও ভ্রূণের রক্তনালির মাঝে অবস্থান করে; এর উভয় প্রান্তের বিশেষায়িত চ্যানেলগুলোর (GLUT1, SNAT, CD36) মাধ্যমে মা থেকে ভ্রূণে গ্লুকোজ, অ্যামিনো অ্যাসিড ও চর্বি সক্রিয়ভাবে পরিবাহিত হয় [২]।'
        ),
      },
      {
        term: l('Gestational Diabetes Mellitus (GDM) & The Pedersen Hypothesis', 'গর্ভকালীন ডায়াবেটিস ও পেডারসেন হাইপোথিসিস'),
        definition: l(
          'Carbohydrate intolerance first diagnosed during pregnancy, driven by placental anti-insulin hormones; per the Pedersen hypothesis, maternal hyperglycemia leads to excessive glucose flux across the placenta, stimulating fetal hyperinsulinemia and accelerating fetal fat accretion and macrosomia [2, 3].',
          'গর্ভকালে প্রথম ধরা পড়া ডায়াবেটিস যা গর্ভফুলের হরমোনের কারণে তৈরি হয়; পেডারসেন তত্ত্বানুসারে মায়ের রক্তের অতিরিক্ত গ্লুকোজ গর্ভফুল পেরিয়ে ভ্রূণে ঢুকে অতিরিক্ত ইনসুলিন তৈরি করায়, যার ফলে ভ্রূণের অতিরিক্ত ওজন বৃদ্ধি (ম্যাক্রোসোমিয়া) ঘটে [২, ৩]।'
        ),
      },
      {
        term: l('Human Placental Lactogen (hPL / hCS)', 'হিউম্যান প্লাসেন্টাল ল্যাকটোজেন (hPL)'),
        definition: l(
          'A polypeptide hormone synthesized by syncytiotrophoblasts that rises exponentially during the second and third trimesters, downregulating maternal peripheral insulin sensitivity to spare glucose and amino acids for shunting across the placenta to the growing fetus [2, 3].',
          'গর্ভফুল থেকে তৈরি একটি শক্তিশালী হরমোন যা গর্ভের দ্বিতীয় ও তৃতীয় ট্রাইমেস্টারে ব্যাপকভাবে বেড়ে গিয়ে মায়ের শরীরে ইনসুলিনের কার্যক্ষমতা কমিয়ে দেয়; ফলে মায়ের রক্তে গ্লুকোজ ও অ্যামিনো অ্যাসিড বেশি থাকে যেন তা সহজে ভ্রূণে প্রবেশ করতে পারে [২, ৩]।'
        ),
      },
      {
        term: l('Parathyroid Hormone-Related Protein (PTHrP) in Lactation', 'স্তন্যদানকালীন পিটিএইচআরপি (PTHrP) হরমোন'),
        definition: l(
          'A paracrine and endocrine peptide secreted by lactating mammary epithelial cells that enters the maternal circulation, binding bone PTH1 receptors to drive osteoclast-mediated bone resorption, mobilizing maternal skeletal calcium into breast milk independently of parathyroid hormone [5].',
          'স্তন্যদানকালে স্তনগ্রন্থি থেকে নির্গত বিশেষায়িত হরমোন যা মায়ের রক্তে প্রবেশ করে অস্থির কোষে যুক্ত হয় এবং মায়ের হাড় থেকে ক্যালসিয়াম ভেঙে মাতৃদুগ্ধে প্রবেশ করায়; এর ফলে প্যারাথাইরয়েড হরমোন ছাড়াই দুধে পর্যাপ্ত ক্যালসিয়াম নিশ্চিত হয় [৫]।'
        ),
      },
      {
        term: l('Human Milk Oligosaccharides (HMOs) & 2-FL', 'মাতৃদুগ্ধের অলিগোস্যাকারাইড (HMOs) ও ২-এফএল'),
        definition: l(
          'A family of structurally diverse, unconjugated complex glycans synthesized in the mammary gland (predominantly 2-fucosyllactose via the FUT2 enzyme) that resist infant gastric digestion, serving as selective prebiotics for Bifidobacterium infantis and decoy receptors preventing pathogen attachment [4].',
          'মাতৃদুগ্ধের তৃতীয় প্রধান উপাদান যা বিশেষ জটিল শর্করা (প্রধানত ২-ফিউকোসিলল্যাকটোজ); এটি শিশুর পাকস্থলীতে হজম না হয়ে সরাসরি কোলনে গিয়ে উপকারী ব্যাকটেরিয়ার খাদ্য হিসেবে কাজ করে এবং ক্ষতিকর জীবাণুকে কোলনের প্রাচীরে বসতে না দিয়ে মলের সাথে বের করে দেয় [৪]।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Clinical Example 1: Periconceptional Folate Stratification in a High-Risk Epileptic Pregnancy',
          'ক্লিনিক্যাল উদাহরণ ১: মৃগীরোগীর উচ্চ ঝুঁকিপূর্ণ গর্ভধারণে গর্ভধারণপূর্ব ফোলেটের মাত্রা নির্ধারণ'
        ),
        steps: [
          l(
            'Step 1: Clinical Stratification of Neural Tube Defect Risk: Standard low-risk women require 400 mcg (0.4 mg) of supplemental folic acid daily. However, this patient is classified as high risk due to ongoing treatment with carbamazepine, an enzyme-inducing anti-epileptic drug that depletes intracellular folate pools and accelerates one-carbon degradation. International guidelines (CDC, ACOG, SOGC) strictly mandate high-dose supplementation at 4.0 to 5.0 mg (4,000-5,000 mcg) of folic acid daily for women on anti-epileptic medications or with a prior pregnancy affected by a neural tube defect [1].',
            'ধাপ ১: গর্ভকালীন নিউরাল টিউব ত্রুটির (NTD) ঝুঁকি নিরূপণ: সাধারণ কম ঝুঁকিপূর্ণ নারীদের জন্য দৈনিক ৪০০ মাইক্রোগ্রাম (০.৪ মিলিগ্রাম) ফলিক অ্যাসিড যথেষ্ট। কিন্তু এই রোগী কার্বামাজেপিন ওষুধ সেবন করায় উচ্চ ঝুঁকিপূর্ণ শ্রেণিতে অন্তর্ভুক্ত, কারণ এই ওষুধটি রক্তে ফোলেট দ্রুত ভেঙে ফেলে। আন্তর্জাতিক গাইডলাইন অনুযায়ী মৃগীরোগের ওষুধ সেবনকারী অথবা পূর্বে স্নায়ুনালির ত্রুটিযুক্ত সন্তান জন্ম দেওয়া মায়েদের ক্ষেত্রে দৈনিক ৪.০ থেকে ৫.০ মিলিগ্রাম (৪,০০০-৫,০০০ মাইক্রোগ্রাম) উচ্চমাত্রার ফলিক অ্যাসিড সেবন করা বাধ্যতামূলক [১]।'
          ),
          l(
            'Step 2: Establish the Critical Temporal Window of Embryogenesis: The neural tube closes between embryonic days 21 and 28 post-conception (gestational weeks 5 to 6 from the last menstrual period), a timeline that occurs before most women even confirm their pregnancy. Beginning folic acid after a missed period or positive home pregnancy test is often too late to prevent primary dysraphism. Therefore, the 4-5 mg daily dose must be initiated at least 1 to 3 months prior to conception and continued through at least the end of the first trimester (12 weeks of gestation), after which it can be adjusted to standard pregnancy maintenance (0.4-1.0 mg/day) [1].',
            'ধাপ ২: ভ্রূণ বিকাশের সংকটাপন্ন সময়সীমা নির্ধারণ: গর্ভধারণের মাত্র ২১ থেকে ২৮তম দিনের মধ্যে (শেষ মাসিকের পর ৫ম থেকে ৬ষ্ঠ সপ্তাহে) ভ্রূণের স্নায়ুনালি সম্পূর্ণ বন্ধ হয়ে যায়; যা অধিকাংশ নারী গর্ভধারণের খবর জানার আগেই ঘটে থাকে। মাসিক বন্ধ হওয়ার পর বা প্রেগন্যান্সি টেস্ট পজিটিভ হওয়ার পর ফলিক অ্যাসিড শুরু করলে এই ত্রুটি রোধ করা প্রায় অসম্ভব। তাই গর্ভধারণের অন্তত ১ থেকে ৩ মাস পূর্ব থেকেই দৈনিক ৪-৫ মিলিগ্রাম ফলিক অ্যাসিড শুরু করতে হবে এবং গর্ভের প্রথম ৩ মাস (১২ সপ্তাহ) তা চালিয়ে যেতে হবে [১]।'
          ),
          l(
            'Step 3: Analyze Molecular One-Carbon Kinetics of Folic Acid: Synthetic folic acid (pteroylmonoglutamic acid) is reduced in hepatocytes by dihydrofolate reductase (DHFR) to tetrahydrofolate (THF), which is then methylated to 5,10-methylenetetrahydrofolate (5,10-CH2-THF). This molecule serves as the essential methyl donor for thymidylate synthase (TYMS), which methylates dUMP into dTMP for high-fidelity nuclear DNA replication during rapid embryonic neuroepithelial cell division. Concurrently, 5-methyl-THF transfers methyl groups to homocysteine via methionine synthase and vitamin B12 to generate methionine, the precursor of S-adenosylmethionine (SAMe), which drives epigenetic DNA and histone methylation essential for neuroectodermal folding [1].',
            'ধাপ ৩: ফলিক অ্যাসিডের ওয়ান-কার্বন বিপাকের আণবিক গতিবিদ্যা: ফলিক অ্যাসিড লিভারের DHFR এনজাইম দ্বারা টেট্রাহাইড্রোফোলেটে রূপান্তরিত হয়, যা পরে 5,10-CH2-THF এ পরিণত হয়। এই অণুটি ডিএনএ তৈরির কাঁচামাল থাইমিডিন (dTMP) তৈরিতে মিথাইল গ্রুপ দান করে; ফলে দ্রুত বর্ধনশীল ভ্রূণের স্নায়ুকোষের ডিএনএ বিভাজন ত্রুটিহীন থাকে। একই সাথে ভিটামিন বি১২-এর সহায়তায় এটি হোমোকিস্টাইনকে মিথায়োনিনে রূপান্তর করে এস-অ্যাডেনোসিলমিথায়োনিন (SAMe) তৈরি করে, যা ভ্রূণের স্নায়ুর ভাঁজ সম্পূর্ণ হতে ডিএনএ মিথাইলেশন সম্পন্ন করে [১]।'
          ),
          l(
            'Step 4: Formulate the Clinical Prescription & Surveillance Strategy: Prescribe: Folic acid 5.0 mg orally once daily, to be taken alongside carbamazepine, beginning immediately (at least 90 days before attempting conception). Verify baseline maternal serum vitamin B12 concentration to rule out occult B12 deficiency (to prevent masking subacute combined spinal cord degeneration under high-dose folate). Schedule high-resolution targeted fetal neurosonography and maternal serum alpha-fetoprotein (MSAFP) screening at 16 to 18 weeks gestation to evaluate structural neural tube integrity [1].',
            'ধাপ ৪: চূড়ান্ত প্রেসক্রিপশন ও পর্যবেক্ষণ কৌশল নির্ধারণ: ব্যবস্থাপত্র: ফলিক অ্যাসিড ৫.০ মিলিগ্রাম দিনে একবার মুখে সেব্য, গর্ভধারণের চেষ্টার অন্তত ৯০ দিন পূর্ব থেকে শুরু করতে হবে। উচ্চমাত্রার ফোলেট দেওয়ার আগে মায়ের রক্তে ভিটামিন বি১২ পরীক্ষা করে ঘাটতি দূর করতে হবে। পরবর্তীতে গর্ভের ১৬-১৮ সপ্তাহে আল্ট্রাসনোগ্রাফি এবং মায়ের রক্তে এএফপি (MSAFP) পরীক্ষা করে ভ্রূণের স্নায়ুর গঠন সম্পূর্ণ সুস্থ রয়েছে কিনা তা নিশ্চিত করতে হবে [১]।'
          ),
        ],
        conclusion: l(
          'Initiating high-dose folic acid (5 mg/day) at least 3 months prior to conception overcomes carbamazepine-induced folate catabolism, securing high-fidelity DNA replication and epigenetic methylation during embryonic neural tube closure on days 21 to 28 post-conception [1].',
          'গর্ভধারণের ৩ মাস পূর্ব থেকে উচ্চমাত্রার ফলিক অ্যাসিড (৫ মিলিগ্রাম/দিন) সেবনের মাধ্যমে কার্বামাজেপিনের ক্ষতিকর প্রভাব দূর করা সম্ভব হয় এবং ভ্রূণ বিকাশের ২১-২৮তম দিনের অত্যন্ত সংবেদনশীল সময়ে স্পাইনা বিফিডার মতো মারাত্মক ত্রুটি সফলভাবে প্রতিরোধ করা যায় [১]।'
        ),
      },
      {
        title: l(
          'Clinical Example 2: Medical Nutrition Therapy Prescription & Carbohydrate Distribution in GDM',
          'ক্লিনিক্যাল উদাহরণ ২: গর্ভকালীন ডায়াবেটিসে (GDM) চিকিৎসা পুষ্টি থেরাপি ও কার্বোহাইড্রেট বিন্যাস'
        ),
        steps: [
          l(
            'Step 1: Calculate Target Daily Caloric Requirements: Per ACOG and Academy of Nutrition and Dietetics guidelines, women who are overweight pre-pregnancy (BMI 25.0-29.9 kg/m²) should receive a modest caloric restriction of 25 to 30 kcal per kilogram of pregnant actual or ideal body weight per day to prevent excessive gestational weight gain while preventing maternal starvation ketosis [3, 6]. Using 30 kcal/kg on pre-pregnancy weight (70 kg): Target Energy = 30 kcal/kg * 70 kg = 2,100 kcal/day. Total recommended gestational weight gain for overweight BMI is 7.0 to 11.5 kg; having gained 6.0 kg at 26 weeks, her rate of gain should be restricted to approx. 0.25-0.30 kg/week for the remaining 14 weeks [3, 6].',
            'ধাপ ১: দৈনিক লক্ষ্যমাত্রা শক্তি বা ক্যালোরি নিরূপণ: আন্তর্জাতিক গাইডলাইন অনুসারে গর্ভধারণের পূর্বে অতিরিক্ত ওজন থাকা নারীদের ক্ষেত্রে দৈনিক প্রতি কেজিতে ২৫ থেকে ৩০ কিলোক্যালোরি খাবার নির্ধারণ করা হয়, যা অতিরিক্ত ওজন বৃদ্ধি রোধ করে কিন্তু রক্তে কিটোন জমতে দেয় না [৩, ৬]। ৭০ কেজি ওজনের ভিত্তিতে: মোট শক্তি = ৩০ * ৭০ = ২,১০০ কিলোক্যালোরি/দিন। ওভারওয়েট নারীদের পুরো গর্ভাবস্থায় মোট ওজন বৃদ্ধির অনুমোদিত সীমা ৭.০ থেকে ১১.৫ কেজি; যেহেতু ২৬ সপ্তাহে ইতিমধ্যে ৬ কেজি ওজন বেড়েছে, তাই বাকি ১৪ সপ্তাহে প্রতি সপ্তাহে সর্বোচ্চ ০.২৫-০.৩০ কেজি বৃদ্ধির লক্ষ্য নির্ধারণ করতে হবে [৩, ৬]।'
          ),
          l(
            'Step 2: Establish Macronutrient Percentages & Absolute Grams: Macronutrient distribution in GDM is structured to suppress postprandial glucose excursions while supplying ample building blocks for fetoplacental development [3]. Carbohydrates are prescribed at 35% to 40% of total energy (lower than non-pregnant recommendations to prevent postprandial spikes): 2,100 kcal * 0.40 = 840 kcal / 4 kcal/g = 210 g carbohydrate/day (never prescribe < 175 g/day in pregnancy to protect fetal brain glucose requirements and prevent neurotoxic ketonemia) [3]. Protein is set at 20% to 25% (1.1-1.3 g/kg/day = approx. 90-105 g/day). Dietary fat comprises 35% to 40% (approx. 80-90 g/day), emphasizing monounsaturated fatty acids (MUFA) and omega-3 PUFAs to improve insulin sensitivity [3].',
            'ধাপ ২: ম্যাক্রোনিউট্রিয়েন্ট অনুপাত ও সুনির্দিষ্ট গ্রাম নির্ধারণ: জিডিএম খাদ্যাভ্যাসে রক্তের চিনি যেন হঠাৎ বেড়ে না যায় সেজন্য কার্বোহাইড্রেট পরিমিত (৩৫-৪০%) রাখা হয়: ২,১০০ * ০.৪০ = ৮৪০ ক্যালোরি / ৪ = দৈনিক ২১০ গ্রাম কার্বোহাইড্রেট (তবে গর্ভের বাচ্চার মস্তিষ্কের সুরক্ষা ও কিটোন প্রতিরোধে এটি কখনোই ১৭৫ গ্রামের নিচে নামানো যাবে না) [৩]। প্রোটিন থাকবে ২০-২৫% (দিনে ৯০-১০৫ গ্রাম) যা ভ্রূণের বৃদ্ধির জন্য জরুরি। আর বাকি ৩৫-৪০% ক্যালোরি আসবে স্বাস্থ্যকর চর্বি (অলিভ অয়েল, বাদাম, মাছ) থেকে যা ইনসুলিনের কার্যক্ষমতা বাড়াতে সাহায্য করে [৩]।'
          ),
          l(
            'Step 3: Structure the Mealtime Carbohydrate Distribution Protocol: To avoid overwhelming maternal pancreatic beta-cell capacity, total daily carbohydrate (210 g) is divided into 3 small-to-moderate meals and 3-4 snacks, spaced every 2.5 to 3 hours [3]. Morning insulin resistance is physiologically highest due to nocturnal surges in cortisol, human placental lactogen (hPL), and growth hormone; therefore, breakfast is strictly restricted to 15 to 30 grams of low-glycemic carbohydrate [3]. Lunch and dinner provide 45 to 60 grams of complex, high-fiber carbohydrate each. Morning, afternoon, and bedtime snacks provide 15 to 30 grams each; the bedtime snack must combine complex carbohydrate with protein/fat (e.g., whole grain toast with peanut butter or Greek yogurt) to prevent nocturnal hypoglycemia and starvation ketogenesis [3].',
            'ধাপ ৩: খাবারের সময়সূচি ও কার্বোহাইড্রেট ভাগ করার নিয়ম: অগ্ন্যাশয়ের ওপর অতিরিক্ত চাপ এড়াতে দৈনিক ২১০ গ্রাম কার্বোহাইড্রেটকে ৩টি প্রধান খাবার এবং ৩টি নাস্তায় প্রতি আড়াই থেকে তিন ঘণ্টা পর পর ভাগ করে দিতে হবে [৩]। ভোরে কর্টিসল ও প্লাসেন্টাল হরমোনের কারণে ইনসুলিন সবচেয়ে কম কাজ করে; তাই সকালের নাস্তায় কার্বোহাইড্রেট মাত্র ১৫-৩০ গ্রামে সীমাবদ্ধ রাখতে হবে [৩]। দুপুর ও রাতের খাবারে ৪৫-৬০ গ্রাম জটিল শর্করা থাকবে। আর সকাল, বিকেল ও রাতে ঘুমানোর আগে ১৫-৩০ গ্রামের হালকা নাস্তা দিতে হবে; রাতের নাস্তায় শর্করার সাথে প্রোটিন (যেমন পিনাট বাটার বা ডিম) থাকা বাধ্যতামূলক যেন রাতে বাচ্চার ক্ষতি করতে পারে এমন কোনো কিটোন না তৈরি হয় [৩]।'
          ),
          l(
            'Step 4: Establish Glycemic Targets & Self-Monitoring Plan: Instruct the patient to perform four-point daily self-monitoring of blood glucose (SMBG): fasting and 1 hour postprandial after each of the three main meals [3]. Target glycemic values per ACOG: Fasting blood glucose < 5.3 mmol/L (95 mg/dL), 1-hour postprandial < 7.8 mmol/L (140 mg/dL), or 2-hour postprandial < 6.7 mmol/L (120 mg/dL) [3]. If > 20-30% of blood glucose readings exceed these thresholds over a 1- to 2-week period despite strict dietary adherence, exogenous insulin therapy (subcutaneous basal-bolus protocol) is initiated without reducing carbohydrate intake below 175 g/day [3].',
            'ধাপ ৪: রক্তের গ্লুকোজ লক্ষ্যমাত্রা ও পর্যবেক্ষণ শিডিউল: রোগীকে প্রতিদিন চারবার রক্তের গ্লুকোজ মাপার নির্দেশ দিতে হবে: সকালে খালি পেটে এবং ৩টি প্রধান খাবারের ঠিক ১ ঘণ্টা পর [৩]। লক্ষ্যমাত্রা: খালি পেটে রক্তের গ্লুকোজ ৫.৩ মিলিমিটারের (৯৫ মিগ্রা) কম এবং খাবারের ১ ঘণ্টা পর ৭.৮ মিলিমিটারের (১৪০ মিগ্রা) কম থাকতে হবে [৩]। যদি সঠিক ডায়েট মেনে চলার পরও এক বা দুই সপ্তাহের মধ্যে ২০-৩০% রিডিং এই সীমার উপরে থাকে, তবে খাবার না কমিয়ে তাৎক্ষণিকভাবে নিরাপদ ইনসুলিন ইনজেকশন শুরু করতে হবে [৩]।'
          ),
        ],
        conclusion: l(
          'Implementing a 2,100 kcal/day medical nutrition therapy with 210 g carbohydrate distributed across 3 meals and 3 snacks prevents postprandial maternal glucose spikes and nocturnal ketosis, arresting fetal hyperinsulinemia and macrosomia while ensuring optimal maternal-fetal nutrition [3].',
          'দৈনিক ২,১০০ ক্যালোরির সুষম পুষ্টি পরিকল্পনায় ২১০ গ্রাম কার্বোহাইড্রেটকে ৬ বারে ভাগ করে খাওয়ার মাধ্যমে গর্ভকালীন রক্তের চিনি সফলভাবে নিয়ন্ত্রণে রাখা সম্ভব হয়; যা ভ্রূণের অতিরিক্ত বৃদ্ধি (ম্যাক্রোসোমিয়া) এবং গর্ভকালীন জটিলতা থেকে মা ও শিশুকে পূর্ণ সুরক্ষা দেয় [৩]।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why must periconceptional folic acid supplementation begin prior to conception rather than after a positive pregnancy test?',
          'গর্ভধারণপূর্ব ফলিক অ্যাসিড সাপ্লিমেন্টেশন প্রেগন্যান্সি টেস্ট পজিটিভ হওয়ার পর নয়, বরং গর্ভধারণের আগেই কেন শুরু করা বাধ্যতামূলক?'
        ),
        answer: l(
          'The human embryonic neural tube begins folding on day 21 and completes primary closure by day 28 post-conception (gestational age 5 to 6 weeks). By the time a woman experiences a missed menstrual period and obtains a positive home pregnancy test, neural tube closure is either already complete or irreversibly defective. Periconceptional supplementation beginning 1 to 3 months prior to conception ensures optimal intracellular levels of 5-methyl-THF and adequate DNA methylation capacity during this narrow, critical embryological window [1].',
          'মানব ভ্রূণের স্নায়ুনালি গর্ভধারণের ২১তম দিন থেকে ভাঁজ হওয়া শুরু করে এবং ২৮তম দিনের মধ্যে সম্পূর্ণরূপে বন্ধ হয়ে যায় (যা শেষ মাসিকের পর ৫ম-৬ষ্ঠ সপ্তাহ)। সাধারণত একজন নারী যখন মাসিক বন্ধ দেখে প্রেগন্যান্সি টেস্ট করেন, তখন এই স্নায়ুনালি বন্ধের সময়সীমা ইতিমধ্যেই শেষ হয়ে যায়। তাই গর্ভধারণের অন্তত ১-৩ মাস পূর্বে ফলিক অ্যাসিড শুরু করলে কোষে পর্যাপ্ত ফোলেট ও ডিএনএ মিথাইলেশন উপাদান সঞ্চিত থাকে, যা এই সংকটাপন্ন সময়ে স্নায়ুনালির ত্রুটি সফলভাবে প্রতিরোধ করে [১]।'
        ),
      },
      {
        question: l(
          'How does the Pedersen hypothesis explain fetal macrosomia and neonatal hypoglycemia in poorly controlled maternal diabetes?',
          'মায়ের অনিয়ন্ত্রিত ডায়াবেটিসে পেডারসেন হাইপোথিসিস কীভাবে গর্ভস্থ শিশুর অতিরিক্ত ওজন বৃদ্ধি (ম্যাক্রোসোমিয়া) এবং জন্মের পর মারাত্মক হাইপোগ্লাইসেমিয়া ব্যাখ্যা করে?'
        ),
        answer: l(
          'Maternal glucose easily crosses the placenta via facilitated diffusion (GLUT1), but maternal insulin cannot cross. Consequently, maternal hyperglycemia forces excess glucose into the fetal circulation, stimulating the fetal pancreatic beta cells to hypertrophy and secrete massive amounts of endogenous fetal insulin. Fetal insulin acts as a potent anabolic growth factor, accelerating glycogen synthesis, lipogenesis, and skeletal growth, resulting in macrosomia (> 4,000 g). At delivery, the continuous transplacental glucose supply is abruptly severed while fetal hyperinsulinemia persists, rapidly clearing circulating glucose and driving acute neonatal hypoglycemia within hours of birth [2, 3].',
          'মায়ের রক্ত থেকে গ্লুকোজ সহজেই গর্ভফুল (প্লাসেন্টা) পেরিয়ে ভ্রূণে ঢুকতে পারে, কিন্তু মায়ের ইনসুলিন গর্ভফুল পার হতে পারে না। ফলে মায়ের রক্তের অতিরিক্ত গ্লুকোজ ভ্রূণের অগ্ন্যাশয়কে উদ্দীপ্ত করে প্রচুর নিজস্ব ইনসুলিন তৈরি করায়। এই ভ্রূণীয় ইনসুলিন একটি অত্যন্ত শক্তিশালী গ্রোথ হরমোনের মতো কাজ করে ভ্রূণের শরীরে প্রচুর চর্বি ও প্রোটিন জমিয়ে শিশুটিকে অস্বাভাবিক মোটা (ম্যাক্রোসোমিয়া) বানায়। জন্মের পরপরই যখন মায়ের গ্লুকোজের লাইন কেটে যায় কিন্তু শিশুর রক্তে ইনসুলিনের বন্যা চলতে থাকে, তখন শিশুর রক্তে চিনি চোখের পলকে শূন্যে নেমে গিয়ে মারাত্মক হাইপোগ্লাইসেমিয়া তৈরি করে [২, ৩]।'
        ),
      },
      {
        question: l(
          'What biological advantages do Human Milk Oligosaccharides (HMOs) confer on the neonatal gastrointestinal tract?',
          'মাতৃদুগ্ধের বিশেষায়িত অলিগোস্যাকারাইডসমূহ (HMOs) নবজাতকের অন্ত্র ও রোগ প্রতিরোধ ব্যবস্থার জন্য কী কী বৈপ্লবিক সুবিধা প্রদান করে?'
        ),
        answer: l(
          'HMOs are indigestible by human infant digestive enzymes, passing intact into the colon where they serve three major biological roles: First, they function as selective prebiotic substrates for beneficial symbionts, specifically Bifidobacterium longum subsp. infantis, which ferments HMOs into health-promoting short-chain fatty acids (acetate, lactate) that acidify the colonic lumen. Second, HMO structures mimic cell-surface mucosal glycans, acting as soluble decoy receptors that bind pathogenic bacteria, viruses, and toxins (e.g., Campylobacter, rotavirus) in the lumen, preventing epithelial attachment. Third, HMOs directly modulate enterocyte gene expression, accelerating mucosal barrier maturation and downregulating inflammatory signaling [4].',
          'মাতৃদুগ্ধের এইচএমও (HMO) উপাদানগুলো শিশুর পাকস্থলীর এনজাইমে হজম না হয়ে অক্ষত অবস্থায় কোলনে পৌঁছে তিনটি যুগান্তকারী কাজ করে: প্রথমত, এরা উপকারী ব্যাকটেরিয়ার (বিশেষ করে Bifidobacterium infantis) একমাত্র পছন্দের পুষ্টিকর খাবার হিসেবে কাজ করে এবং এসিটেট তৈরি করে কোলনের অম্লত্ব বাড়িয়ে ক্ষতিকর জীবাণু ধ্বংস করে। দ্বিতীয়ত, এদের গঠন অন্ত্রের কোষপর্দার মতো হওয়ায় ক্ষতিকর ভাইরাস ও ব্যাকটেরিয়া ভ্রান্তিবশত এদের সাথে আটকে যায় এবং কোলনের প্রাচীরে কামড় না বসিয়ে মলের সাথে বের হয়ে যায়। তৃতীয়ত, এরা অন্ত্রের নিজস্ব রোগপ্রতিরোধ ক্ষমতা দ্রুত পরিপক্ব করে তোলে [৪]।'
        ),
      },
    ],
    organelles: [],
  },
  diagram: {
    accessibleDescription: l(
      'A multi-stage pathophysiological diagram illustrating Periconceptional Folate One-Carbon Metabolism, Syncytiotrophoblast Placental Transport, Gestational Endocrine Insulin Resistance, and Lactational HMO-Microbiome Dynamics.',
      'গর্ভধারণপূর্ব ফোলেট ওয়ান-কার্বন বিপাক, গর্ভফুলের সিনসিটিওট্রফোব্লাস্ট পরিবহন, গর্ভকালীন হরমোনজনিত ইনসুলিন রেজিস্ট্যান্স এবং মাতৃদুগ্ধের এইচএমও-মাইক্রোবায়োম গতিবিদ্যার সমন্বিত ধারাবাহিক চিত্র।'
    ),
    steps: [
      l(
        'Step 1: Periconceptional Folate 1-Carbon Shuttling: Dihydrofolate reductase and methylenetetrahydrofolate reductase generate 5-methyl-THF, supplying methyl units for thymidylate synthesis (dUMP to dTMP) and DNA/histone methylation essential for neural tube closure on days 21-28 post-conception.',
        'ধাপ ১: গর্ভধারণপূর্ব ফোলেটের ওয়ান-কার্বন মিথাইল চক্র: ফোলেট ভেঙে থাইমিডিন তৈরি ও ডিএনএ মিথাইলেশনে মিথাইল গ্রুপ দান করে; যা গর্ভধারণের ২১-২৮তম দিনে ভ্রূণের স্নায়ুনালির ত্রুটিমুক্ত ভাঁজ নিশ্চিত করে।'
      ),
      l(
        'Step 2: Syncytiotrophoblast Transplacental Shuttling: Polarized microvillous and basal syncytiotrophoblast membranes coordinate facilitated GLUT1 diffusion for glucose, active sodium-coupled SNAT amino acid import, and TfR1 endocytosis for fetal iron accretion.',
        'ধাপ ২: গর্ভফুলের দ্বি-পর্দা পুষ্টি পরিবহন: সিনসিটিওট্রফোব্লাস্ট কোষপর্দা দিয়ে গ্লুকোজ (GLUT1), অ্যামিনো অ্যাসিড (SNAT) এবং আয়রন সক্রিয়ভাবে মা থেকে ভ্রূণের সংবহনে পরিবাহিত হয়।'
      ),
      l(
        'Step 3: Placental Anti-Insulin Surge & Fetal Macrosomia: Placental secretion of hPL, progesterone, and pGH downregulates maternal skeletal muscle IRS-1/GLUT4, shunting glucose across the placenta where fetal hyperinsulinemia drives lipogenesis and macrosomia.',
        'ধাপ ৩: গর্ভফুলের হরমোন ও ইনসুলিন রেজিস্ট্যান্স: গর্ভফুল থেকে নিঃসৃত হরমোন মায়ের রক্তে চিনির মাত্রা বাড়িয়ে দেয়, যা বাচ্চার রক্তে প্রচুর ইনসুলিন তৈরি করিয়ে বাচ্চার ওজন অস্বাভাবিক বাড়িয়ে তোলে (ম্যাক্রোসোমিয়া)।'
      ),
      l(
        'Step 4: Mammary PTHrP Calcium Siphoning & Secretor HMO Defense: Mammary tissue secretes PTHrP to mobilize maternal trabecular calcium into breast milk, while secretor FUT2 enzymes assemble prebiotic HMOs (2-FL) that nourish Bifidobacterium infantis and neutralize enteric pathogens.',
        'ধাপ ৪: স্তনগ্রন্থির ক্যালসিয়াম স্থানান্তর ও এইচএমও প্রতিরক্ষা: স্তনগ্রন্থির PTHrP হরমোন মায়ের হাড় থেকে ক্যালসিয়াম এনে দুধে দেয় এবং FUT2 জিন মাতৃদুগ্ধে বিশেষ জটিল শর্করা (HMO) তৈরি করে বাচ্চার অন্ত্রকে সংক্রমণ থেকে রক্ষা করে।'
      ),
    ],
  },
  interactiveDiagram: {
    id: 'maternal-placental-lactation-axis',
    title: l(
      'The Maternal-Placental-Fetal-Lactational Nutrient & Hormone Axis',
      'মাতৃ-গর্ভফুল-ভ্রূণ ও স্তন্যদান পুষ্টি-হরমোন শারীরবৃত্ত অক্ষ'
    ),
    description: l(
      'Comprehensive physiological schematic illustrating one-carbon neural tube closure, placental transport kinetics, gestational endocrine insulin resistance, and breast milk HMO synthesis.',
      'গর্ভকালীন ও স্তন্যদানকালের সমন্বিত শারীরবৃত্তীয় রূপরেখা যা ফোলেটের মাধ্যমে স্নায়ুনালি গঠন, গর্ভফুলের পুষ্টি পরিবহন, গর্ভকালীন হরমোনজনিত ইনসুলিন রেজিস্ট্যান্স এবং মাতৃদুগ্ধের এইচএমও উৎপাদন প্রদর্শন করে।'
    ),
    disclaimer: l(
      'Educational perinatal and lactation nutrition simulation; periconceptional dosing and gestational diabetes management require qualified obstetric and dietetic supervision.',
      'শিক্ষামূলক পেরিনেটাল ও স্তন্যদান পুষ্টি সিমুলেশন; গর্ভকালীন ডায়াবেটিস ও ফোলেটের মাত্রা নির্ধারণে বিশেষজ্ঞ চিকিৎসকের পরামর্শ আবশ্যক।'
    ),
    svgType: 'maternal-fetal-lactation',
    items: [
      {
        id: 'node-folate',
        label: l('Folate 1-Carbon & Neural Tube', 'ফোলেট ওয়ান-কার্বন ও স্নায়ুনালি গঠন'),
        description: l(
          'Periconceptional tetrahydrofolate delivers methyl units for thymidylate synthesis (dUMP to dTMP) and DNA methylation, securing neural tube closure between embryonic days 21 and 28 [1].',
          'গর্ভধারণপূর্ব ফোলেট ডিএনএ তৈরির কাঁচামাল থাইমিডিন তৈরি ও মিথাইলেশনে মিথাইল গ্রুপ দান করে গর্ভধারণের ২১-২৮তম দিনে ভ্রূণের স্নায়ুনালি সম্পূর্ণ বন্ধ হওয়া নিশ্চিত করে [১]।'
        ),
        details: l(
          'DHFR and MTHFR enzymes coordinate thymidylate synthesis and S-adenosylmethionine (SAMe) production for high-fidelity neuroepithelial division.',
          'ডিএইচএফআর ও এমটিএইচএফআর এনজাইম ভ্রূণের দ্রুত বিভাজনশীল স্নায়ুকোষে ডিএনএ তৈরি ও মিথাইলেশন সচল রাখে।'
        ),
        color: '#10b981',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-placenta',
        label: l('Placental Syncytiotrophoblast', 'গর্ভফুলের সিনসিটিওট্রফোব্লাস্ট পরিবহন'),
        description: l(
          'Polarized syncytiotrophoblast membranes coordinate facilitated GLUT1 glucose diffusion, active SNAT sodium-dependent amino acid transport, and transferrin-receptor mediated iron endocytosis [2].',
          'গর্ভফুলের বিশেষায়িত কোষপর্দা দিয়ে গ্লুকোজ (GLUT1), অ্যামিনো অ্যাসিড (SNAT) এবং আয়রন সক্রিয়ভাবে মা থেকে ভ্রূণের রক্তে পরিবাহিত হয় [২]।'
        ),
        details: l(
          'Microvillous membrane GLUT1 and System A/L amino acid transporters maintain continuous substrate gradients to nourish rapid fetal organogenesis.',
          'গর্ভফুলের মাইক্রোভিলাস পর্দার ট্রান্সপোর্টারগুলো মা থেকে ভ্রূণে অবিরাম পুষ্টি সরবরাহ বজায় রাখে।'
        ),
        color: '#f97316',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-gdm',
        label: l('Gestational Diabetes & Macrosomia', 'গর্ভকালীন ডায়াবেটিস ও ম্যাক্রোসোমিয়া'),
        description: l(
          'Placental lactogen and progesterone induce physiological maternal insulin resistance; excessive glucose flux across the placenta triggers fetal hyperinsulinemia, lipogenesis, and macrosomia [2, 3].',
          'প্লাসেন্টাল ল্যাকটোজেন মায়ের ইনসুলিন রেজিস্ট্যান্স তৈরি করে; মায়ের রক্তে বেশি গ্লুকোজ থাকলে তা বাচ্চার শরীরে প্রচুর ইনসুলিন তৈরি করিয়ে অস্বাভাবিক ওজন বৃদ্ধি (ম্যাক্রোসোমিয়া) ঘটায় [২, ৩]।'
        ),
        details: l(
          'Maternal hyperglycemia oversupplies fetal beta cells, which hypersecrete anabolic fetal insulin, driving excessive adiposity and neonatal hypoglycemia.',
          'মায়ের রক্তে অতিরিক্ত চিনি বাচ্চার অগ্ন্যাশয়কে উত্তেজিত করে প্রচুর ইনসুলিন ক্ষরণ করায় যা বাচ্চার অস্বাভাবিক চর্বি ও জন্মের পর রক্তে চিনি শূন্য করে দেয়।'
        ),
        color: '#ef4444',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-calcium',
        label: l('Maternal Bone & Milk Calcium', 'মাতৃদেহের অস্থি ও মাতৃদুগ্ধের ক্যালসিয়াম'),
        description: l(
          'Lactating breast tissue secretes PTHrP, which mobilizes maternal trabecular bone calcium into breast milk; maternal bone mass is completely restored upon weaning [5].',
          'স্তন্যদানকালে স্তনগ্রন্থি থেকে নির্গত PTHrP হরমোন মায়ের হাড় থেকে ক্যালসিয়াম এনে দুধে প্রবেশ করায়; স্তন্যদান বন্ধের পর মায়ের হাড়ের এই ক্ষয় পুরোপুরি পূরণ হয়ে যায় [৫]।'
        ),
        details: l(
          'Mammary calcium-sensing receptors regulate local PTHrP production to match infant calcium demands, followed by osteoblast-driven post-weaning remineralization.',
          'স্তনগ্রন্থির হরমোন বাচ্চার চাহিদা অনুসারে ক্যালসিয়াম জোগায় এবং স্তন্যদান শেষে হাড়ের ক্ষয় সম্পূর্ণ পূরণ হয়ে যায়।'
        ),
        color: '#6366f1',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-hmo',
        label: l('HMOs & Secretory IgA Immunology', 'এইচএমও ও সিক্রেটরি আইজিএ ইমিউনোলজি'),
        description: l(
          'Synthesized in the mammary gland via FUT2 fucosylation, 2-FL and complex HMOs resist digestion to nourish colonic Bifidobacterium infantis and act as decoy receptors neutralizing pathogens [4].',
          'মাতৃদুগ্ধের এইচএমও (2-FL) শিশুর পাকস্থলীতে হজম না হয়ে কোলনের উপকারী ব্যাকটেরিয়ার খাদ্য হিসেবে কাজ করে এবং ক্ষতিকর জীবাণুর সাথে আটকে তাদের নিষ্ক্রিয় করে বের করে দেয় [৪]।'
        ),
        details: l(
          'FUT2-dependent human milk oligosaccharides act as soluble receptor decoys while fueling Bifidobacterium infantis fermentation into protective luminal acetate and lactate.',
          'মাতৃদুগ্ধের বিশেষ শর্করা শিশুর অন্ত্রে অ্যাসিড তৈরি করে জীবাণু ধ্বংস করে এবং উপকারী ব্যাকটেরিয়ার বংশবৃদ্ধি নিশ্চিত করে।'
        ),
        color: '#0284c7',
        svgCoords: { x: 190, y: 175, width: 310, height: 48 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'মৌলিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('Folate, One-Carbon Metabolism & Neural Tube Embryogenesis', 'ফোলেট, ওয়ান-কার্বন বিপাক ও ভ্রূণের স্নায়ুনালি গঠন'),
          paragraphs: [
          l(
            'The first four weeks of human embryonic life represent the most nutritionally sensitive window in human biology [1]. Long before a woman misses a menstrual period or suspects pregnancy, the fertilized blastocyst implants into the uterine decidua and undergoes rapid gastrulation, forming the three primary germ layers: ectoderm, mesoderm, and endoderm [1]. During this critical phase, the central nervous system begins as a flat neural plate that must fold and fuse into a continuous cylinder known as the neural tube [1].',
            'মানব ভ্রূণের প্রথম চার সপ্তাহ হলো গোটা মানব জীববিজ্ঞানের সবচেয়ে সংবেদনশীল ও গুরুত্বপূর্ণ সময় [১]। একজন নারী তাঁর মাসিক বন্ধ হওয়ার কথা জানার বা গর্ভধারণের লক্ষণ বোঝার বহু আগেই নিষিক্ত ভ্রূণটি জরায়ুর দেয়ালে প্রোথিত হয় এবং দ্রুত কোষ বিভাজনের মাধ্যমে তিনটি প্রাথমিক স্তরে বিভক্ত হয় [১]। এই মাহেন্দ্রক্ষণে ভ্রূণের কেন্দ্রীয় স্নায়ুতন্ত্র একটি সমতল স্নায়ুপাত হিসেবে শুরু হয়, যা ক্রমান্বয়ে দুই পাশ থেকে ভাঁজ হয়ে একটি নলের মতো রূপ নেয় যাকে নিউরাল টিউব বা স্নায়ুনালি বলা হয় [১]। ',
          ),
          l(
            'Primary neural tube closure begins in the cervical region on embryonic day 21 post-conception and proceeds bidirectionally like a zipper, concluding with the sealing of the posterior neuropore by day 28 [1]. If this precise anatomical fusion fails at the cranial end, the brain fails to develop, resulting in fatal anencephaly [1]. If closure fails at the caudal end, the spinal cord and meninges remain exposed through the vertebrae, producing spina bifida (myelomeningocele), which leads to lifelong lower-limb paralysis, neurogenic bowel and bladder dysfunction, and hydrocephalus [1].',
            'গর্ভধারণের ঠিক ২১তম দিনে ভ্রূণের ঘাড়ের অংশ থেকে এই স্নায়ুনালি বন্ধ হওয়ার কাজ শুরু হয় এবং জিপারের মতো দুই দিকে এগোতে এগোতে ২৮তম দিনের মধ্যে সম্পূর্ণভাবে বন্ধ হয়ে যায় [১]। যদি স্নায়ুনালির মাথার দিকের মুখটি বন্ধ হতে ব্যর্থ হয়, তবে শিশুর মস্তিষ্ক গঠিত হয় না এবং মারাত্মক অ্যানেনসেফালি নামের প্রাণঘাতী ত্রুটি নিয়ে শিশু ভূমিষ্ঠ হয় [১]। আর যদি নিচের দিকের মুখটি বন্ধ না হয়, তবে মেরুদণ্ডের হাড় ফাঁকা থেকে স্নায়ু বাইরে বের হয়ে থাকে যাকে স্পাইনা বিফিডা বলা হয়; যার কারণে শিশু আজীবন পক্ষাঘাতগ্রস্ত ও প্রতিবন্ধী হয়ে বেঁচে থাকে [১]। ',
          ),
          l(
            'Decades of landmark clinical trials, most notably the randomized controlled trials led by Czeizel and Dudas, proved unequivocally that periconceptional supplementation with folic acid prevents over 70% of all primary neural tube defects [1]. Folic acid is the synthetic, highly bioavailable form of folate (vitamin B9), an essential water-soluble cofactor required for one-carbon metabolism [1]. Within developing embryonic cells, folate coenzymes donate methyl and formyl carbon units required for de novo purine and pyrimidine nucleotide synthesis, facilitating high-fidelity DNA replication during the frantic cell division of embryonic neuroepithelium [1].',
            'বিগত কয়েক দশকের বৈপ্লবিক ক্লিনিক্যাল ট্রায়াল—বিশেষ করে বিজ্ঞানী সাইজেল ও দুদাস পরিচালিত গবেষণা—সন্দেহাতীতভাবে প্রমাণ করেছে যে গর্ভধারণের পূর্বে ফলিক অ্যাসিড গ্রহণ করলে শতকরা ৭০ ভাগেরও বেশি স্নায়ুনালির জন্মগত ত্রুটি পুরোপুরি প্রতিরোধ করা সম্ভব [১]। ফলিক অ্যাসিড হলো পানিতে দ্রবণীয় ভিটামিন বি৯ এর একটি অত্যন্ত কার্যকরী রূপ যা শরীরের ওয়ান-কার্বন বিপাকের অপরিহার্য উপাদান [১]। ভ্রূণের দ্রুত বর্ধনশীল কোষে ডিএনএ তৈরির জন্য প্রয়োজনীয় কাঁচামাল তৈরিতে ফোলেট প্রধান অনুঘটক হিসেবে কাজ করে কোষ বিভাজনকে নির্ভুল রাখে [১]। ',
          ),
          l(
            'Because neural tube closure occurs between days 21 and 28 post-conception—often before a woman even realizes she is pregnant—initiating folic acid after a missed menstrual period is clinically too late to prevent primary birth defects [1]. Therefore, global health authorities unanimously recommend that all individuals capable of becoming pregnant consume at least 400 micrograms (0.4 mg) of folic acid daily from fortified foods or supplements starting at least 1 to 3 months prior to conception, increasing to 4.0-5.0 mg daily for women with high-risk conditions such as epilepsy or a previous affected pregnancy [1].',
            'যেহেতু গর্ভধারণের ২১ থেকে ২৮তম দিনের মধ্যেই স্নায়ুনালি বন্ধের পুরো কাজটি সম্পন্ন হয়ে যায়, তাই প্রেগন্যান্সি টেস্টের মাধ্যমে গর্ভধারণের খবর পাওয়ার পর ফলিক অ্যাসিড শুরু করলে এই জন্মগত ত্রুটি রোধের সময় আর থাকে না [১]। এই কারণে বিশ্ব স্বাস্থ্য সংস্থা এবং বিশ্বের সকল প্রসূতিবিদ ঐক্যমত পোষণ করেছেন যে গর্ভধারণে সক্ষম প্রত্যেক নারীর গর্ভধারণের অন্তত ১ থেকে ৩ মাস পূর্ব থেকেই প্রতিদিন অন্তত ৪০০ মাইক্রোগ্রাম ফলিক অ্যাসিড সেবন করা উচিত, এবং পূর্বে এমন অসুস্থ সন্তান জন্ম দেওয়া বা মৃগীরোগী মায়েদের ক্ষেত্রে তা বাড়িয়ে ৪-৫ মিলিগ্রাম করা উচিত [১]। ',
          ),
        ],
        },
        {
          id: 'structure',
          heading: l('Placental Architecture & Polarized Nutrient Transport Systems', 'গর্ভফুলের গঠন ও উভয়মুখী পুষ্টি পরিবহন ব্যবস্থা'),
          paragraphs: [
          l(
            'The human placenta is a remarkable, transient organ that functions simultaneously as the fetal lungs, kidneys, gastrointestinal tract, and endocrine regulator throughout intrauterine life [2]. The structural and functional cornerstone of placental exchange is the chorionic villus, which is bathed directly in maternal arterial blood within the intervillous space [2]. The outer epithelial boundary of these villi is formed by the syncytiotrophoblast, a continuous multinucleated cellular sheet that possesses no intercellular tight junction gaps, forcing all nutrients to cross through specialized transport proteins [2].',
            'মানব গর্ভফুল বা প্লাসেন্টা হলো একটি ক্ষণস্থায়ী কিন্তু বিস্ময়কর অঙ্গ যা গর্ভস্থ শিশুর ফুসফুস, কিডনি, পরিপাকতন্ত্র এবং হরমোন উৎপাদনকারী অঙ্গ হিসেবে একাধারে কাজ করে [২]। গর্ভফুলের মূল কার্যকরী একক হলো কোরওনিক ভিলাস, যা মায়ের রক্তে পরিপূর্ণ খাদের ভেতর ভেসে থাকে [২]। এই ভিলাসের বাইরের প্রাচীরটি সিনসিটিওট্রফোব্লাস্ট নামক এক অবিচ্ছিন্ন বহুকেন্দ্রিক কোষের চাদর দিয়ে গঠিত, যেখানে কোষের মাঝে কোনো ফাঁক থাকে না; ফলে মা থেকে বাচ্চার রক্তে প্রতিটি পুষ্টি উপাদানকে বিশেষায়িত প্রোটিন গেট বা চ্যানেলের মাধ্যমে পার হতে হয় [২]। ',
          ),
          l(
            'To transport nutrients efficiently from maternal circulation into fetal blood, the syncytiotrophoblast maintains a highly polarized architectural organization [2]. The maternal-facing surface is covered by a dense brush border of microvilli, termed the Microvillous Membrane (MVM), which dramatically expands the absorptive surface area [2]. The fetal-facing surface consists of the smooth Basal Membrane (BM), which sits adjacent to the fetal capillary endothelium [2]. These two opposing membranes express distinct transporter isoforms, creating a coordinated assembly line that regulates directional nutrient flux [2].',
            'মায়ের রক্ত থেকে বাচ্চার রক্তে পুষ্টি উপাদান সুশৃঙ্খলভাবে পৌঁছে দেওয়ার জন্য সিনসিটিওট্রফোব্লাস্টের দুটি ভিন্নমুখী প্রাচীর রয়েছে [২]। মায়ের রক্তের দিকে মুখ করে থাকা প্রাচীরটিতে অসংখ্য সূক্ষ্ম আঙুলের মতো অভিক্ষেপ থাকে যাকে মাইক্রোভিলাস মেমব্রেন (MVM) বলে, যা শোষণ এলাকা হাজার গুণ বাড়িয়ে দেয় [২]। অন্যদিকে ভ্রূণের কৈশিক নালির দিকে মুখ করে থাকা মসৃণ প্রাচীরটিকে বেসাল মেমব্রেন (BM) বলে [২]। এই দুই প্রাচীরে ভিন্ন ভিন্ন পরিবাহক প্রোটিন সাজানো থাকে যা মায়ের রক্ত থেকে পুষ্টি টেনে ভ্রূণের রক্তে চালান করে দেয় [২]। ',
          ),
          l(
            'Glucose is the primary metabolic fuel driving fetal oxidative metabolism and growth, yet the fetus cannot perform significant gluconeogenesis in utero [2]. Consequently, glucose is transported continuously across the placenta down a maternal-to-fetal concentration gradient via facilitated diffusion [2]. This task is performed by high-affinity glucose transporters, predominantly GLUT1, which is heavily concentrated on both the maternal microvillous membrane and the fetal basal membrane, ensuring that fetal blood glucose tracks maternal concentrations at approximately 70-80% of maternal levels [2].',
            'গর্ভস্থ শিশুর প্রতিটি অঙ্গের বিকাশ ও শক্তির প্রধান জ্বালানি হলো গ্লুকোজ, অথচ ভ্রূণ নিজের শরীরে নিজে গ্লুকোজ তৈরি করতে সম্পূর্ণ অক্ষম [২]। তাই মায়ের রক্ত থেকে সার্বক্ষণিকভাবে গ্লুকোজ উচ্চ ঘনত্ব থেকে নিম্ন ঘনত্বের দিকে গর্ভফুলের মাধ্যমে ভ্রূণের দিকে প্রবাহিত হয় [২]। এই কাজটি করে GLUT1 নামক বিশেষ গ্লুকোজ ট্রান্সপোর্টার চ্যানেল, যা গর্ভফুলের উভয় প্রাচীরে প্রচুর পরিমাণে থাকে; এর ফলে ভ্রূণের রক্তের গ্লুকোজের মাত্রা সবসময় মায়ের রক্তের মাত্রার ৭০ থেকে ৮০ শতাংশের সমান বজায় থাকে [২]। ',
          ),
          l(
            'In contrast to glucose, amino acids must be actively pumped into the fetal circulation against steep concentration gradients, resulting in fetal plasma amino acid concentrations that are significantly higher than maternal levels [2]. This active transport is driven by sodium-coupled neutral amino acid transporters (SNAT1, SNAT2, SNAT4) located on the maternal microvillous membrane, coupled with System L heterodimeric amino acid exchangers (LAT1, LAT2) that export essential branched-chain and aromatic amino acids across the basal membrane to support fetal tissue protein accretion [2].',
            'গ্লুকোজের বিপরীতে, অ্যামিনো অ্যাসিডগুলোকে মায়ের রক্ত থেকে ভ্রূণের রক্তে জোর করে পাম্প করে ঢোকাতে হয়, যার ফলে ভ্রূণের রক্তে অ্যামিনো অ্যাসিডের ঘনত্ব মায়ের রক্তের চেয়ে বহুগুণ বেশি থাকে [২]। এই সক্রিয় পরিবহন পরিচালিত হয় সোডিয়াম-নির্ভর বিশেষ অ্যামিনো অ্যাসিড পাম্পের (SNAT1, SNAT2) মাধ্যমে; যা মায়ের রক্ত থেকে অ্যামিনো অ্যাসিড টেনে নিয়ে অপর প্রান্তের বিশেষ চ্যানেল দিয়ে ভ্রূণে পৌঁছে দেয় যেন শিশুর মাংসপেশি ও অঙ্গপ্রত্যঙ্গ দ্রুত গঠিত হতে পারে [২]। ',
          ),
        ],
        },
        {
          id: 'mechanism',
          heading: l('Endocrinology of Gestational Diabetes: Placental Hormones & Macrosomia', 'গর্ভকালীন ডায়াবেটিসের শারীরবৃত্ত: প্লাসেন্টাল হরমোন ও ভ্রূণের অতিরিক্ত বৃদ্ধি'),
          paragraphs: [
          l(
            'During normal pregnancy, maternal metabolism undergoes a profound and deliberate physiological reprogramming to prioritize nutrient delivery to the rapidly growing fetoplacental unit [2, 3]. In the first trimester, insulin sensitivity is normal or slightly enhanced, promoting maternal fat deposition as an energetic reserve [3]. However, as gestation advances into the second and third trimesters, the expanding syncytiotrophoblast secretes large quantities of "anti-insulin" polypeptide and steroid hormones into the maternal bloodstream [2, 3].',
            'স্বাভাবিক গর্ভাবস্থায় মায়ের শরীর তার পুরো বিপাকীয় ব্যবস্থাকে এমনভাবে বদলে ফেলে যেন গর্ভের সন্তান সর্বোচ্চ পুষ্টি পায় [২, ৩]। প্রথম তিন মাসে মায়ের ইনসুলিন সংবেদনশীলতা স্বাভাবিক বা কিছুটা বেশি থাকে, যা মায়ের শরীরে ভবিষ্যতের শক্তির সঞ্চয় হিসেবে চর্বি জমায় [৩]। কিন্তু গর্ভের বয়স বৃদ্ধির সাথে সাথে দ্বিতীয় ও তৃতীয় ট্রাইমেস্টারে গর্ভফুল থেকে প্রচুর পরিমাণে ইনসুলিন-বিরোধী হরমোন মায়ের রক্তে নিঃসৃত হতে শুরু করে [২, ৩]। ',
          ),
          l(
            'The primary endocrine driver of maternal insulin resistance is human Placental Lactogen (hPL), also known as human chorionic somatomammotropin (hCS), which rises more than thirty-fold over pregnancy [2, 3]. Working synergistically with placental growth hormone (pGH), progesterone, cortisol, and pro-inflammatory cytokines like TNF-alpha, hPL impairs post-receptor insulin signaling in maternal skeletal muscle and adipose tissue by disrupting insulin receptor substrate-1 (IRS-1) phosphorylation [2, 3]. This creates a physiological state of maternal insulin resistance, ensuring that blood glucose and amino acids remain elevated in maternal plasma to drive gradient-dependent transfer across the placenta [2, 3].',
            'মায়ের শরীরে ইনসুলিনের কার্যক্ষমতা কমানোর প্রধান নায়ক হলো হিউম্যান প্লাসেন্টাল ল্যাকটোজেন (hPL) হরমোন, যা গর্ভকালে ৩০ গুণেরও বেশি বৃদ্ধি পায় [২, ৩]। এই হরমোনটি প্রজেস্টেরন, কর্টিসল এবং প্লাসেন্টার গ্রোথ হরমোনের সাথে হাত মিলিয়ে মায়ের মাংসপেশি ও চর্বিকোষে ইনসুলিনের সংকেত ব্যবস্থাকে বাধাগ্রস্ত করে [২, ৩]। এটি মায়ের শরীরে এক পরিকল্পিত ইনসুলিন রেজিস্ট্যান্স তৈরি করে, যেন মায়ের শরীর নিজে গ্লুকোজ খরচ না করে তা বাচ্চার জন্য বাঁচিয়ে রাখে এবং রক্তে গ্লুকোজ বাড়িয়ে সহজে গর্ভফুলে চালান করতে পারে [২, ৩]। ',
          ),
          l(
            'In a healthy pregnancy, maternal pancreatic beta cells compensate by undergoing hyperplasia and hypertrophy, increasing daily insulin secretion by 200% to 250% to maintain normoglycemia [3]. Gestational Diabetes Mellitus (GDM) occurs when maternal beta cells possess insufficient secretory reserve and fail to overcome this pregnancy-induced insulin resistance [3]. Consequently, maternal postprandial glucose levels rise uncontrollably, flooding the intervillous space with excess glucose that surges unimpeded across placental GLUT1 transporters into the fetal circulation [2, 3].',
            'একটি সুস্থ গর্ভাবস্থায় মায়ের অগ্ন্যাশয় নিজের ইনসুলিন উৎপাদন দ্বিগুণ বা আড়াই গুণ বাড়িয়ে দিয়ে এই বাধাকে জয় করে এবং রক্তে চিনির মাত্রা স্বাভাবিক রাখে [৩]। কিন্তু মায়ের অগ্ন্যাশয়ে যদি পর্যাপ্ত ইনসুলিন তৈরির সক্ষমতা না থাকে, তখনই গর্ভকালীন ডায়াবেটিস বা জিডিএম (GDM) দেখা দেয় [৩]। এর ফলে মায়ের রক্তের অতিরিক্ত চিনি অনায়াসে গর্ভফুল পেরিয়ে প্লাসেন্টার GLUT1 চ্যানেল দিয়ে বাঁধভাঙা পানির মতো বাচ্চার রক্তে ঢুকে পড়ে [২, ৩]। ',
          ),
          l(
            'This sequence triggers the classic pathophysiological cascade described by Jørgen Pedersen in the famous Pedersen Hypothesis [2, 3]. Because maternal insulin cannot cross the placenta, the fetal pancreas is exposed directly to maternal hyperglycemia, stimulating fetal beta cells to hyper-secrete fetal insulin [2, 3]. Fetal hyperinsulinemia acts as a relentless anabolic growth factor, stimulating cellular glucose uptake, driving hepatic glycogen storage, and dramatically accelerating fat deposition in fetal subcutaneous tissue, producing fetal macrosomia (birth weight > 4,000 g), shoulder dystocia during delivery, and acute neonatal hypoglycemia at birth [2, 3].',
            'এই ঘটনাটি বিখ্যাত বিজ্ঞানী পেডারসেনের তত্ত্বানুসারে এক বিধ্বংসী প্রক্রিয়া শুরু করে [২, ৩]। যেহেতু মায়ের ইনসুলিন গর্ভফুল পার হতে পারে না, তাই মায়ের রক্ত থেকে আসা চিনির ধাক্কা সামলাতে বাচ্চার নিজের অগ্ন্যাশয় প্রচুর পরিমাণে নিজস্ব ইনসুলিন তৈরি করে ফেলে [২, ৩]। বাচ্চার রক্তে এই অতিরিক্ত ইনসুলিন মারাত্মক অ্যানাবলিক গ্রোথ হরমোনের মতো কাজ করে বাচ্চার শরীরে চর্বি ও মাংসের পাহাড় জমিয়ে ফেলে, যাকে ম্যাক্রোসোমিয়া (ওজন ৪ কেজির বেশি হওয়া) বলে; যার কারণে প্রসবের সময় শিশুর কাঁধ আটকে যাওয়া এবং জন্মের সাথে সাথে বাচ্চার রক্তে চিনি শূন্যে নেমে মারাত্মক খিঁচুনি হতে পারে [২, ৩]। ',
          ),
        ],
        },
        {
          id: 'integration',
          heading: l('Maternal Mineral Homeostasis, Lactation & HMO Glycobiology', 'মাতৃদেহের খনিজ ভারসাম্য, স্তন্যদান শারীরবৃত্ত ও মাতৃদুগ্ধের এইচএমও'),
          paragraphs: [
          l(
            'During human pregnancy and lactation, maternal mineral metabolism undergoes profound adaptations to mineralize the fetal skeleton and supply calcium to breast milk [5]. The developing fetal skeleton requires approximately 30 grams of elemental calcium, 80% of which is transferred during the third trimester [5]. The maternal body meets this enormous demand not by bone resorption, but by doubling intestinal calcium absorption through increased renal synthesis of 1,25-dihydroxyvitamin D (calcitriol), driven by placental lactogen and prolactin [5].',
            'গর্ভকালীন ও স্তন্যদানকালে শিশুর অস্থির গঠন ও মাতৃদুগ্ধে ক্যালসিয়াম সরবরাহের জন্য মায়ের খনিজ বিপাকে অভাবনীয় পরিবর্তন ঘটে [৫]। একটি সুস্থ শিশুর কঙ্কাল তৈরিতে প্রায় ৩০ গ্রাম ক্যালসিয়াম প্রয়োজন হয়, যার ৮০ শতাংশই যায় শেষ তিন মাসে [৫]। এই সময় মা নিজের হাড় না ভেঙে বরং অন্ত্রে খাদ্য থেকে ক্যালসিয়াম শোষণের হার দ্বিগুণ বাড়িয়ে দেয়; যা গর্ভফুলের হরমোনের প্রভাবে মায়ের কিডনিতে প্রচুর সক্রিয় ভিটামিন ডি তৈরির মাধ্যমে সম্পন্ন হয় [৫]। ',
          ),
          l(
            'During lactation, maternal calcium physiology pivots entirely to a distinct endocrine paradigm [5]. A nursing mother loses 200 to 400 mg of calcium daily into breast milk [5]. Rather than increasing intestinal absorption, lactating mammary epithelial cells synthesize and secrete Parathyroid Hormone-Related Protein (PTHrP) into the maternal circulation [5]. PTHrP acts on maternal skeletal PTH1 receptors, stimulating osteoclast-mediated bone resorption of maternal trabecular bone (spine and hips) to supply milk calcium independently of classical parathyroid hormone (PTH), which remains suppressed [5]. Amazingly, after weaning, maternal bone mineral density completely remineralizes without long-term osteoporosis risk [5].',
            'তবে স্তন্যদানকালে মায়ের শরীর সম্পূর্ণ ভিন্ন এক হরমোন ব্যবস্থার মাধ্যমে পরিচালিত হয় [৫]। বুকের দুধের মাধ্যমে মা প্রতিদিন ২০০ থেকে ৪০০ মিলিগ্রাম ক্যালসিয়াম হারান [৫]। এ সময় অন্ত্রের শোষণ না বাড়িয়ে স্তনগ্রন্থি নিজে PTHrP নামের একটি বিশেষ হরমোন তৈরি করে মায়ের রক্তে ছেড়ে দেয় [৫]। এই হরমোনটি মায়ের মেরুদণ্ড ও কোমরের হাড় থেকে ক্যালসিয়াম গলিয়ে বুকের দুধে চালান করে দেয় [৫]। সবচেয়ে চমৎকার বিষয় হলো, স্তন্যদান বন্ধ হওয়ার কয়েক মাসের মধ্যে মায়ের হাড় প্রাকৃতিকভাবে আবার আগের মতো সম্পূর্ণ শক্ত ও পুনর্গঠিত হয়ে যায়, যা ভবিষ্যতে কোনো হাড়ের ক্ষতির ঝুঁকি তৈরি করে না [৫]। ',
          ),
          l(
            'Beyond macronutrients and minerals, human breast milk contains a unique immunological treasure: Human Milk Oligosaccharides (HMOs) [4]. HMOs constitute the third most abundant solid component of human milk (5-15 g/L), exceeding total protein concentration, yet they provide zero direct caloric energy to the infant because the human infant lacks digestive enzymes capable of cleaving their complex glycosidic bonds [4]. Instead, HMOs pass entirely intact through the stomach and small intestine into the infant colon [4].',
            'পুষ্টি ও খনিজের পাশাপাশি মাতৃদুগ্ধে রয়েছে এক অমূল্য রোগপ্রতিরোধী উপাদান: হিউম্যান মিল্ক অলিগোস্যাকারাইড বা এইচএমও (HMO) [৪]। মাতৃদুগ্ধের শুষ্ক উপাদানের মধ্যে ল্যাকটোজ ও চর্বির পরেই এর অবস্থান (প্রতি লিটারে ৫-১৫ গ্রাম), যা এমনকি মোট প্রোটিনের পরিমাণের চেয়েও বেশি; অথচ এটি শিশুকে সরাসরি কোনো ক্যালোরি বা শক্তি দেয় না কারণ শিশুর পেটে এই জটিল শর্করা হজম করার কোনো এনজাইম নেই [৪]। ফলে এই অলিগোস্যাকারাইডগুলো অক্ষত অবস্থায় পাকস্থলী পেরিয়ে সোজা শিশুর কোলনে গিয়ে পৌঁছায় [৪]। ',
          ),
          l(
            'Within the colon, HMOs perform two life-saving immunological functions [4]. First, they serve as dedicated, exclusive prebiotic fuel for beneficial symbiotic microbes, specifically Bifidobacterium longum subsp. infantis, which ferments HMOs into short-chain fatty acids (acetate and lactate) that acidify the lumen and crowd out lethal pathogens like Clostridium and Salmonella [4]. Second, HMO structures closely mimic human mucosal surface glycans; they act as soluble decoy receptors that bind pathogenic bacteria, viruses (rotavirus, norovirus), and bacterial toxins in the gut lumen, preventing pathogens from adhering to enterocyte receptors and flushing them harmlessly into the diaper [4].',
            'শিশুর কোলনে পৌঁছে এইচএমও দুটি জীবনরক্ষাকারী কাজ সম্পন্ন করে [৪]। প্রথমত, এরা উপকারী ব্যাকটেরিয়ার (বিশেষ করে Bifidobacterium infantis) একমাত্র খাবার হিসেবে কাজ করে এবং ক্ষতিকর জীবাণুকে মেরে ফেলার মতো অ্যাসিডিক পরিবেশ তৈরি করে [৪]। দ্বিতীয়ত, এদের চেহারা অন্ত্রের কোষপর্দার মতো হওয়ায় রোটাভাইরাস বা ক্ষতিকর ব্যাকটেরিয়ারা ভুলবশত এদের গায়ে আটকে যায়; ফলে তারা অন্ত্রের দেয়ালে কামড় বসাতে না পেরে মলের সাথে বাইরে বের হয়ে যায় এবং নবজাতক মারাত্মক ডায়রিয়া ও নিউমোনিয়ার হাত থেকে বেঁচে যায় [৪]। ',
          ),
        ],
        },
        {
          id: 'practice',
          heading: l('Clinical Practice: Gestational Weight Gain, GDM Management & Lactation', 'ক্লিনিক্যাল চর্চা: গর্ভকালীন ওজন বৃদ্ধি, জিডিএম পথ্য ও স্তন্যদান নির্দেশিকা'),
          paragraphs: [
          l(
            'Clinical dietary management begins with establishing appropriate gestational weight gain (GWG) targets based on pre-pregnancy Body Mass Index (BMI), according to the Institute of Medicine (IOM) guidelines [6]. Underweight women (BMI < 18.5) should gain 12.5 to 18.0 kg; normal-weight women (BMI 18.5-24.9) should gain 11.5 to 16.0 kg; overweight women (BMI 25.0-29.9) should gain 7.0 to 11.5 kg; and women with obesity (BMI >= 30.0) should gain only 5.0 to 9.0 kg [6]. Restricting excessive weight gain attenuates the risks of pre-eclampsia, emergency cesarean delivery, and long-term postpartum maternal obesity.',
            'গর্ভকালীন চিকিৎসা পুষ্টি থেরাপির প্রথম ধাপ হলো গর্ভধারণের পূর্বে মায়ের বডি ম্যাস ইনডেক্স (BMI) মেপে গর্ভকালে ওজন বৃদ্ধির সঠিক লক্ষ্যমাত্রা নির্ধারণ করা [৬]। কম ওজনের নারীদের (বিএমআই ১৮.৫ এর কম) সাড়ে ১২ থেকে ১৮ কেজি ওজন বাড়ানো উচিত; স্বাভাবিক ওজনের নারীদের সাড়ে ১১ থেকে ১৬ কেজি; অতিরিক্ত ওজনের নারীদের (বিএমআই ২৫-২৯.৯) ৭ থেকে সাড়ে ১১ কেজি; এবং স্থূল নারীদের (বিএমআই ৩০ এর বেশি) ওজন বৃদ্ধি মাত্র ৫ থেকে ৯ কেজির মধ্যে সীমাবদ্ধ রাখতে হবে [৬]। অতিরিক্ত ওজন বৃদ্ধি প্রতিরোধ করলে প্রসবকালীন এক্লাম্পশিয়া, সিজারিয়ান অপারেশন এবং পরবর্তী জীবনের ডায়াবেটিসের ঝুঁকি উল্লেখযোগ্যভাবে কমে যায়।',
          ),
          l(
            'Universal screening for Gestational Diabetes Mellitus (GDM) is performed between 24 and 28 weeks of gestation using the standardized 75-gram, 2-hour Oral Glucose Tolerance Test (OGTT) [3]. Diagnostic thresholds per the International Association of Diabetes and Pregnancy Study Groups (IADPSG) and WHO are: Fasting >= 5.1 mmol/L (92 mg/dL), 1-hour >= 10.0 mmol/L (180 mg/dL), or 2-hour >= 8.5 mmol/L (153 mg/dL); meeting or exceeding even a single value confirms GDM [3]. Early screening at the first prenatal visit is indicated for high-risk women with severe obesity, prior GDM, or a family history of type 2 diabetes.',
            'গর্ভকালীন ডায়াবেটিস (GDM) শনাক্ত করতে গর্ভের ২৪ থেকে ২৮তম সপ্তাহের মধ্যে ৭৫ গ্রাম গ্লুকোজ খাইয়ে ২ ঘণ্টার ওজিটিটি (OGTT) টেস্ট করা আন্তর্জাতিক নিয়ম [৩]। বিশ্ব স্বাস্থ্য সংস্থার মানদণ্ড অনুসারে: খালি পেটে রক্তের গ্লুকোজ ৫.১ মিলিমোল (৯২ মিগ্রা), ১ ঘণ্টা পর ১০.০ (১৮০ মিগ্রা) অথবা ২ ঘণ্টা পর ৮.৫ মিলিমোলের (১৫৩ মিগ্রা) যেকোনো একটি মান সীমার সমান বা বেশি হলেই জিডিএম নিশ্চিত হয় [৩]। তবে যেসব মায়ের আগে থেকেই অতিরিক্ত স্থূলতা বা পরিবারে ডায়াবেটিস আছে, তাদের গর্ভের প্রথম দিকেই এই টেস্টটি করে ফেলা উচিত।',
          ),
          l(
            'Medical Nutrition Therapy (MNT) is the foundational first-line treatment for GDM, achieving normoglycemia in 75% to 80% of affected women without pharmacological therapy [3]. Daily caloric intake is set at 25 to 30 kcal/kg for overweight women and 30 to 35 kcal/kg for normal-weight women [3]. Carbohydrates are moderately restricted to 35-40% of total daily energy, divided into 3 small meals and 3-4 snacks, spaced evenly across the day to prevent postprandial glycemic surges [3]. Carbohydrates must never be restricted below 175 g/day, as severe carbohydrate deprivation triggers maternal starvation ketosis, which can impair fetal cognitive neurodevelopment [3].',
            'মেডিকেল নিউট্রিশন থেরাপী (MNT) হলো গর্ভকালীন ডায়াবেটিসের প্রথম এবং প্রধান চিকিৎসা, যা শতকরা ৭৫ থেকে ৮০ ভাগ ক্ষেত্রে কোনো ওষুধ ছাড়াই রক্তের চিনি নিয়ন্ত্রণে আনে [৩]। প্রতিদিনের খাবারে কার্বোহাইড্রেটের পরিমাণ ৩৫-৪০ শতাংশের মধ্যে পরিমিত রাখতে হয় এবং তা ৩টি প্রধান খাবার ও ৩-৪টি নাস্তায় সারাদিনে ভাগ করে খেতে হয় [৩]। মনে রাখতে হবে, ডায়াবেটিসের ভয়ে গর্ভকালে কার্বোহাইড্রেট কোনোভাবেই দৈনিক ১৭৫ গ্রামের নিচে নামানো যাবে না; কারণ অতিরিক্ত কম শর্করা খেলে রক্তে কিটোন নামক বিষাক্ত উপাদান তৈরি হয় যা গর্ভের শিশুর মস্তিষ্কের গঠন নষ্ট করতে পারে [৩]। ',
          ),
          l(
            'Target glycemic control in GDM requires diligent home blood glucose monitoring: fasting < 5.3 mmol/L (95 mg/dL) and 1-hour postprandial < 7.8 mmol/L (140 mg/dL) or 2-hour postprandial < 6.7 mmol/L (120 mg/dL) [3]. If lifestyle and dietary management fail to maintain targets within 1 to 2 weeks, subcutaneous insulin therapy—which does not cross the placenta—is initiated immediately [3]. Concurrently, routine prenatal supplementation must include 30-60 mg elemental iron, 250 mcg iodine, and 1,000 mg calcium daily to prevent maternal anemia, congenital hypothyroidism, and pre-eclampsia [3, 6].',
            'জিডিএম আক্রান্ত রোগীকে বাড়িতে নিয়মিত গ্লুকোজ মাপতে হবে: খালি পেটে ৫.৩ মিলিমোল (৯৫ মিগ্রা) এবং খাবারের ১ ঘণ্টা পর ৭.৮ মিলিমোলের (১৪০ মিগ্রা) নিচে রাখার লক্ষ্যমাত্রা নির্ধারণ করতে হয় [৩]। ডায়েট মেনে চলার পরও এক বা দুই সপ্তাহের মধ্যে এই লক্ষ্যমাত্রা অর্জিত না হলে চিকিৎসকের পরামর্শে নিরাপদ ইনসুলিন ইনজেকশন শুরু করতে হবে, যা গর্ভফুল পার হয় না [৩]। সাথে সাথে রক্তশূন্যতা ও উচ্চ রক্তচাপ এড়াতে মাকে প্রতিদিন ৩০-৬০ মিলিগ্রাম আয়রন, ২৫০ মাইক্রোগ্রাম আয়োডিন এবং ১,০০০ মিলিগ্রাম ক্যালসিয়াম সেবন করতে হবে [৩, ৬]। ',
          ),
        ],
        },
        {
          id: 'takeaways',
          heading: l('High-Yield Clinical Takeaways & Core Principles', 'উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও মৌলিক নীতিমালা'),
          paragraphs: [
          l(
            'Periconceptional folic acid supplementation (400 mcg daily for standard risk, 4-5 mg daily for high-risk women on anticonvulsants or with prior NTD) must begin 1 to 3 months prior to conception [1]. Primary neural tube closure completes between embryonic days 21 and 28 post-conception; initiating folate after a missed menstrual period is too late to prevent fatal anencephaly or disabling spina bifida [1].',
            'গর্ভধারণের অন্তত ১ থেকে ৩ মাস পূর্ব থেকেই ফলিক অ্যাসিড (সাধারণ নারীদের জন্য ৪০০ মাইক্রোগ্রাম এবং মৃগীরোগী বা পূর্বের ইতিহাস থাকা উচ্চ ঝুঁকিতে ৪-৫ মিলিগ্রাম) শুরু করা বাধ্যতামূলক [১]। কারণ গর্ভধারণের ২১ থেকে ২৮তম দিনের মধ্যেই ভ্রূণের স্নায়ুনালি বন্ধ হয়ে যায়; মাসিক বন্ধ হওয়ার পর ফলিক অ্যাসিড শুরু করলে তা স্পাইনা বিফিডার মতো মারাত্মক ত্রুটি ঠেকাতে পারে না [১]। ',
          ),
          l(
            'The placenta functions via polarized syncytiotrophoblast transport: glucose crosses down concentration gradients via facilitated GLUT1 transporters, while amino acids are pumped against steep gradients via sodium-coupled SNAT transporters [2]. Fetal blood amino acid concentrations normally exceed maternal levels, while fetal glucose mirrors maternal levels at 70-80% [2].',
            'গর্ভফুলের সিনসিটিওট্রফোব্লাস্ট প্রাচীর অত্যন্ত সুশৃঙ্খলভাবে কাজ করে: গ্লুকোজ GLUT1 চ্যানেলের মাধ্যমে স্বাভাবিক প্রবাহে পরিবাহিত হয়, কিন্তু অ্যামিনো অ্যাসিডগুলোকে SNAT পাম্পের সাহায্যে জোর করে বাচ্চার রক্তে চালান করা হয় [২]। ফলে ভ্রূণের রক্তে অ্যামিনো অ্যাসিডের মাত্রা মায়ের চেয়ে বেশি থাকে এবং গ্লুকোজের মাত্রা মায়ের প্রায় ৭০-৮০ ভাগ বজায় থাকে [২]। ',
          ),
          l(
            'Gestational Diabetes Mellitus (GDM) is driven by placental anti-insulin hormones—predominantly human placental lactogen (hPL), progesterone, and cortisol—which induce physiological second/third trimester insulin resistance [2, 3]. Failure of maternal beta-cell compensation leads to maternal hyperglycemia, driving excess glucose into the fetus and triggering fetal hyperinsulinemia, macrosomia, and neonatal hypoglycemia per the Pedersen hypothesis [2, 3].',
            'গর্ভকালীন ডায়াবেটিসের মূল কারণ হলো গর্ভফুলের হরমোন—প্রধানত প্লাসেন্টাল ল্যাকটোজেন (hPL) ও প্রজেস্টেরন—যা মায়ের শরীরে ইনসুলিন রেজিস্ট্যান্স তৈরি করে [২, ৩]। মায়ের অগ্ন্যাশয় অতিরিক্ত ইনসুলিন তৈরি করতে না পারলে অতিরিক্ত গ্লুকোজ বাচ্চার রক্তে ঢুকে বাচ্চার নিজস্ব ইনসুলিন বাড়িয়ে দেয়, যার ফলে শিশু অস্বাভাবিক মোটা (ম্যাক্রোসোমিয়া) হয় এবং জন্মের পর মারাত্মক হাইপোগ্লাইসেমিয়ায় ভোগে [২, ৩]। ',
          ),
          l(
            'Human milk oligosaccharides (HMOs) are complex, indigestible glycans (predominantly 2-fucosyllactose) that act as dedicated prebiotics for beneficial Bifidobacterium infantis and serve as soluble decoy receptors preventing viral and bacterial mucosal attachment [4]. Maternal lactation calcium demands are met through mammary gland secretion of PTHrP, mobilizing trabecular bone calcium, which completely remineralizes upon infant weaning without long-term maternal skeletal detriment [5].',
            'মাতৃদুগ্ধের বিশেষায়িত শর্করা বা এইচএমও (HMO) শিশুর পরিপাকতন্ত্রে হজম না হয়ে কোলনে গিয়ে উপকারী ব্যাকটেরিয়ার খাদ্য হিসেবে কাজ করে এবং ক্ষতিকর জীবাণুকে অন্ত্রের প্রাচীরে বসতে না দিয়ে বের করে দেয় [৪]। আর স্তনদানকালে মায়ের হাড় থেকে দুধের ক্যালসিয়াম যোগান দেয় স্তনগ্রন্থির PTHrP হরমোন, যা স্তন্যদান শেষের পর প্রাকৃতিকভাবে আবার মায়ের হাড়ে সম্পূর্ণ পুনর্গঠিত হয়ে যায় [৫]। ',
          ),
        ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('Academic Enzymology of Folate One-Carbon Metabolism in Neurogenesis', 'নিউরোবিকাশে ফোলেট ওয়ান-কার্বন বিপাকের একাডেমিক এনজাইমোলজি'),
          paragraphs: [
          l(
            'The prevention of neural tube defects by periconceptional folic acid is governed by the intricate compartmentalized biochemistry of one-carbon metabolism [1]. Synthetic folic acid (pteroylmonoglutamic acid) enters hepatocytes and intestinal enterocytes where it is reduced in a two-step NADPH-dependent reaction catalyzed by dihydrofolate reductase (DHFR) to dihydrofolate (DHF) and subsequently to active tetrahydrofolate (THF) [1]. Tetrahydrofolate then acts as a cellular carbon carrier, accepting a hydroxymethyl group from serine via serine hydroxymethyltransferase (SHMT) to generate 5,10-methylenetetrahydrofolate (5,10-CH2-THF) [1].',
            'গর্ভধারণপূর্ব ফলিক অ্যাসিডের মাধ্যমে স্নায়ুনালির ত্রুটি প্রতিরোধের পেছনে কাজ করে ওয়ান-কার্বন বিপাকের এক জটিল ও সুসংহত এনজাইমোলজি [১]। সিন্থেটিক ফলিক অ্যাসিড শরীরে প্রবেশ করে ডাইহাইড্রোফোলেট রিডাক্টেজ (DHFR) এনজাইম দ্বারা দুই ধাপে বিজারিত হয়ে সক্রিয় টেট্রাহাইড্রোফোলেটে (THF) রূপান্তরিত হয় [১]। এরপর এই টেট্রাহাইড্রোফোলেট সেরিন অ্যামিনো অ্যাসিড থেকে কার্বন গ্রহণ করে 5,10-মিথিলিন-টিএইচএফ (5,10-CH2-THF) তৈরি করে, যা কোষের ভেতরে কার্বন বহনকারী প্রধান আণবিক যান হিসেবে কাজ করে [১]। ',
          ),
          l(
            'This 5,10-CH2-THF sits at a pivotal metabolic junction with two competing fates: de novo pyrimidine synthesis versus homocysteine remethylation [1]. In the de novo nucleotide branch, 5,10-CH2-THF serves as the obligatory methyl donor for thymidylate synthase (TYMS), which transfers a methyl group to deoxyuridine monophosphate (dUMP) to produce deoxythymidine monophosphate (dTMP) [1]. Without adequate thymidylate synthesis, dUTP misincorporates into newly synthesized DNA strands, triggering futile cycles of uracil-DNA glycosylase cleavage, catastrophic double-stranded DNA breaks, and apoptotic neuroepithelial cell death during primary neural tube closure between embryonic days 21 and 28 [1].',
            'এই 5,10-CH2-THF অণুটি বিপাকের এক অত্যন্ত সংবেদনশীল মোড়ে অবস্থান করে: ডিএনএর পাইরিমিডিন তৈরি বনাম মিথাইলেশন প্রক্রিয়া [১]। নিউক্লিওটাইড শাখায় এটি থাইমিডিলেট সিন্থেজ (TYMS) এনজাইমের অপরিহার্য কাঁচামাল হিসেবে dUMP কে dTMP (থাইমিডিন) এ রূপান্তর করে [১]। পর্যাপ্ত ফোলেট না থাকলে ডিএনএ তৈরির সময় ভুল নিউক্লিওটাইড ঢুকে যায় এবং ডিএনএ ছিঁড়ে নষ্ট হয়ে যায়; যার ফলে গর্ভের ২১ থেকে ২৮তম দিনে ভ্রূণের স্নায়ুকোষগুলো মারা গিয়ে স্নায়ুনালির গঠন চিরতরে অসম্পূর্ণ থেকে যায় [১]। ',
          ),
          l(
            'Alternatively, 5,10-CH2-THF is irreversibly reduced by methylenetetrahydrofolate reductase (MTHFR) to 5-methyltetrahydrofolate (5-CH3-THF), the predominant circulating form of folate in human plasma [1]. In the cytosolic methionine cycle, 5-CH3-THF transfers its methyl group to cobalamin (vitamin B12) to generate methylcobalamin, which serves as coenzyme for methionine synthase (MTR) in remethylating homocysteine to methionine [1]. Methionine is subsequently adenylated by methionine adenosyltransferase (MAT) to S-adenosylmethionine (SAMe), the universal methyl donor required for DNA methyltransferases (DNMT1, DNMT3a/b) and histone methyltransferases [1].',
            'বিকল্প পথে MTHFR এনজাইমের মাধ্যমে 5,10-CH2-THF অণুটি রক্তে সঞ্চালিত প্রধান ফোলেট 5-CH3-THF এ রূপান্তরিত হয় [১]। এই অণুটি ভিটামিন বি১২-এর সাহায্যে মেথিওনিন সিন্থেজ এনজাইমকে সক্রিয় করে ক্ষতিকর হোমোকিস্টাইনকে মেথিওনিনে রূপান্তর করে [১]। মেথিওনিন থেকে তৈরি হয় এস-অ্যাডেনোসিলমেথিওনিন (SAMe), যা হলো কোষের সার্বজনীন মিথাইল দাতা; এটি ভ্রূণের ডিএনএ এবং হিস্টোন প্রোটিনে মিথাইল সিলমোহর এঁটে স্নায়ুর জিনগুলোকে সঠিক সময়ে সক্রিয় করে তোলে [১]। ',
          ),
          l(
            'Epigenetic chromatin remodeling driven by SAMe-dependent methylation is indispensable for the coordinated biomechanical movements of neural plate elevation, apicobasal cell elongation, and bilateral neural fold fusion [1]. Polymorphisms in maternal or fetal folate pathway genes—most prominently the common MTHFR 677C>T thermolabile variant—impair enzyme efficiency by 50-70%, disrupting nucleotide pools and epigenetic methylation [1]. High-dose periconceptional folic acid supplementation overcomes these kinetic bottlenecks by mass action, elevating intracellular polyglutamated folate pools to protect embryonic neurulation [1].',
            'এই SAMe-নির্ভর এপিজেনেটিক মিথাইলেশন ছাড়া ভ্রূণের স্নায়ুপাতের বাঁক নেওয়া এবং দুই পাশ থেকে স্নায়ুনালির মিলন হওয়া শারীরিকভাবে অসম্ভব [১]। মায়ের বা ভ্রূণের জিনগত ত্রুটি—যেমন বহুল পরিচিত MTHFR 677C>T মিউটেশন—এই এনজাইমের কার্যক্ষমতা ৫০ থেকে ৭০ শতাংশ পর্যন্ত কমিয়ে দেয় [১]। তাই গর্ভধারণের আগে পর্যাপ্ত ফলিক অ্যাসিড সেবন করলে তা ঘনমাত্রার জোরে এই এনজাইম ঘাটতি কাটিয়ে ওঠে এবং ভ্রূণের স্নায়ুনালি বন্ধ হওয়ার জটিল যান্ত্রিক প্রক্রিয়াকে শতভাগ ত্রুটিমুক্ত রাখে [১]। ',
          ),
        ],
        },
        {
          id: 'structure',
          heading: l('Molecular Transporters of the Syncytiotrophoblast: Polarized Kinetics', 'সিনসিটিওট্রফোব্লাস্টের আণবিক ট্রান্সপোর্টার: উভয় প্রাচীরের গতিবিদ্যা'),
          paragraphs: [
          l(
            'The syncytiotrophoblast functions as a continuous, polarized epithelial barrier presenting two distinct plasma membranes with divergent lipid and protein compositions: the maternal-facing Microvillous Membrane (MVM) and the fetal-facing Basal Membrane (BM) [2]. The MVM contains a high density of lipid rafts enriched in cholesterol and sphingomyelin, hosting primary active pumps and sodium-dependent cotransporters that extract nutrients from the low concentrations of the maternal intervillous space [2]. The BM possesses a more fluid phospholipid bilayer specialized for facilitated diffusion and passive gradient-driven efflux into the fetal capillary circulation [2].',
            'সিনসিটিওট্রফোব্লাস্ট হলো দুটি ভিন্নধর্মী প্রাচীরবিশিষ্ট এক বিশেষায়িত কোষপ্রাচীর: মায়ের দিকে মুখ করা মাইক্রোভিলাস মেমব্রেন (MVM) এবং ভ্রূণের দিকে মুখ করা বেসাল মেমব্রেন (BM) [২]। মায়ের দিকের MVM প্রাচীরটিতে প্রচুর কোলেস্টেরল ও লিপিড ভেলা থাকে, যা সক্রিয় পাম্পের মাধ্যমে মায়ের রক্তের কম ঘনত্ব থেকেও পুষ্টি শুষে নিতে পারে [২]। অন্যদিকে ভ্রূণের দিকের BM প্রাচীরটি অপেক্ষাকৃত তরল এবং সহজে গলে যায় এমন গঠনের, যা শোষিত পুষ্টি উপাদানগুলোকে বিদ্যুৎগতিতে ভ্রূণের রক্তনালিতে পৌঁছে দেয় [২]। ',
          ),
          l(
            'Placental glucose transport is exclusively non-energy-dependent, operating via facilitative glucose transporter proteins down the maternal-fetal concentration gradient [2]. While GLUT1 is the dominant isoform present on both membranes, its expression is asymmetrical: the maternal MVM expresses approximately three to four times more GLUT1 protein per unit surface area than the fetal BM [2]. Consequently, the fetal basal membrane represents the absolute rate-limiting barrier to transplacental glucose transfer, protecting the fetus from transient maternal postprandial glucose surges [2].',
            'গর্ভফুলের গ্লুকোজ পরিবহন কোনো বাড়তি শক্তি ছাড়াই কেবল ঘনত্বের পার্থক্যের ওপর ভিত্তি করে GLUT প্রোটিনের মাধ্যমে ঘটে [২]। যদিও GLUT1 উভয় প্রাচীরেই প্রধান ট্রান্সপোর্টার, এর বিন্যাস সমান নয়: মায়ের দিকের প্রাচীরে ভ্রূণের দিকের প্রাচীরের তুলনায় প্রায় তিন থেকে চার গুণ বেশি GLUT1 থাকে [২]। ফলে ভ্রূণের দিকের বেসাল মেমব্রেনটি গ্লুকোজ পরিবহনের মূল নিয়ন্ত্রক বা ছাঁকনি হিসেবে কাজ করে, যা মায়ের রক্তে হঠাৎ চিনি বেড়ে গেলেও বাচ্চাকে আকস্মিক চিনির ধাক্কা থেকে রক্ষা করে [২]। ',
          ),
          l(
            'Amino acid transport requires coordinated cross-talk between three distinct transport systems [2]. System A transporters (SNAT1, SNAT2, SNAT4) located on the maternal MVM actively pump small non-essential neutral amino acids (alanine, glycine, serine, glutamine) into the syncytiotrophoblast cytoplasm against massive concentration gradients, coupled to the inward sodium gradient maintained by the Na+/K+-ATPase pump [2]. System L transporters (LAT1 and LAT2, heterodimerized with CD98/4F2hc) then exchange these accumulated intracellular amino acids for extracellular essential branched-chain (leucine, isoleucine, valine) and aromatic amino acids, exporting them across the basal membrane into fetal plasma to stimulate fetal mTORC1 protein synthesis [2].',
            'অ্যামিনো অ্যাসিড পরিবহন পরিচালিত হয় তিনটি ভিন্ন সিস্টেমের সমন্বয়ে [২]। মায়ের দিকের প্রাচীরে থাকা System A পাম্পগুলো (SNAT1, SNAT2) সোডিয়াম আয়নের শক্তিতে চালিত হয়ে এলানিন ও গ্লুটামিনের মতো অ্যামিনো অ্যাসিডগুলোকে জোর করে কোষের ভেতর টেনে নেয় [২]। এরপর System L চ্যানেলগুলো (LAT1, LAT2) এই ভেতরে জমে থাকা সাধারণ অ্যামিনো অ্যাসিডগুলোকে বাইরে ফেলে দিয়ে তার বদলে অত্যাবশ্যকীয় ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিড (লিউসিন, আইসোলিউসিন) টেনে নিয়ে বাচ্চার রক্তে পাঠিয়ে দেয়, যা বাচ্চার কোষের mTORC1 সক্রিয় করে মাংসপেশি গড়ে তোলে [২]। ',
          ),
          l(
            'Long-chain polyunsaturated fatty acids (LCPUFAs), particularly arachidonic acid (ARA, 20:4n-6) and docosahexaenoic acid (DHA, 22:6n-3), undergo "biomagnification" across the placenta, achieving higher percentages in fetal than maternal blood [2]. Maternal triacylglycerols in chylomicrons and VLDL are hydrolyzed at the microvillous membrane by placental endothelial lipase (EL) and lipoprotein lipase (LPL) [2]. Released free fatty acids are bound by membrane Fatty Acid Translocase (FAT/CD36) and Fatty Acid Transport Protein 4 (FATP4), then shuttled intracellularly by cytoplasmic Fatty Acid-Binding Proteins (FABPs) toward the basal membrane to support fetal neurogenesis and retinal photoreceptor membrane synthesis [2].',
            'শিশুর মস্তিষ্ক ও চোখের রেটিনা গঠনের জন্য অতিপ্রয়োজনীয় ওমেগা-৩ ফ্যাটি অ্যাসিড (DHA) মা থেকে বাচ্চার রক্তে এক বিশেষ প্রক্রিয়ায় বহুগুণ ঘনমাত্রায় পরিবাহিত হয় যাকে "বায়োম্যাগনিফিকেশন" বলে [২]। মায়ের রক্তের চর্বিকণাগুলোকে গর্ভফুলের বাইরের এনজাইম (LPL ও EL) ভেঙে মুক্ত ফ্যাটি অ্যাসিড তৈরি করে [২]। এরপর CD36 ও FATP4 নামের বিশেষ প্রোটিনগুলো এই ফ্যাটি অ্যাসিডগুলোকে ধরে কোষের ভেতর দিয়ে ভ্রূণের রক্তে চালান করে দেয়, যা শিশুর স্নায়ুকোষের পর্দা গঠনে ব্যবহৃত হয় [২]। ',
          ),
        ],
        },
        {
          id: 'mechanism',
          heading: l('Academic Pathophysiology of GDM: IRS-1 Disruption & Fetal Hyperinsulinism', 'জিডিএম-এর একাডেমিক প্যাথোফিজিওলজি: IRS-1 বিকলতা ও ভ্রূণের হাইপারইনসুলিনিজম'),
          paragraphs: [
          l(
            'The molecular basis of pregnancy-induced insulin resistance resides in the interference with canonical post-receptor insulin signaling cascades within maternal skeletal muscle and adipocytes [2, 3]. Under normal conditions, insulin binding to the extracellular alpha subunits of the insulin receptor (INSR) activates the intrinsic tyrosine kinase of the intracellular beta subunits, autophosphorylating tyrosine residues that recruit and phosphorylate Insulin Receptor Substrate-1 (IRS-1) on specific tyrosine motifs (e.g., Tyr612, Tyr632) [3]. This activates the phosphoinositide 3-kinase (PI3K) and Akt (protein kinase B) cascade, driving GLUT4 translocation to the sarcolemma [3].',
            'গর্ভকালীন ইনসুলিন রেজিস্ট্যান্সের মূল আণবিক কারণ হলো মায়ের মাংসপেশি ও চর্বিকোষের ভেতরের স্বাভাবিক ইনসুলিন সংকেত পথে জটিল বিঘ্ন সৃষ্টি [২, ৩]। স্বাভাবিক অবস্থায় ইনসুলিন রিসেপ্টরে বসলে তা কোষের ভেতরের IRS-1 প্রোটিনে টাইরোসিন ফসফোরাইলেশন ঘটায় [৩]। এর ফলে PI3K এবং Akt প্রোটিন কাইনেজ পথ সক্রিয় হয়, যা কোষের ভেতর থেকে GLUT4 চ্যানেলগুলোকে কোষপর্দায় পাঠিয়ে দিয়ে রক্তের গ্লুকোজ ভেতরে ঢুকিয়ে নেয় [৩]। ',
          ),
          l(
            'During the second half of gestation, high circulating concentrations of human placental lactogen (hPL), placental growth hormone (pGH), progesterone, and placenta-derived tumor necrosis factor-alpha (TNF-alpha) disrupt this signaling architecture [2, 3]. TNF-alpha activates intracellular stress kinases, specifically c-Jun N-terminal kinase (JNK) and inhibitor of kappa B kinase (IKK), while progesterone and pGH upregulate p85-alpha regulatory subunits that uncouple PI3K [3]. These stress kinases phosphorylate IRS-1 on inhibitory serine residues (e.g., Ser307, Ser312), preventing tyrosine phosphorylation and targeting IRS-1 for proteasomal degradation, which blunts insulin-stimulated GLUT4 translocation by 50% to 60% [3].',
            'কিন্তু গর্ভের দ্বিতীয়ার্ধে গর্ভফুল থেকে আসা hPL, প্লাসেন্টাল গ্রোথ হরমোন, প্রজেস্টেরন এবং TNF-alpha এই সুন্দর সংকেত পথটিকে ভেঙে দেয় [২, ৩]। এই হরমোন ও সাইটোকাইনগুলো কোষের ভেতর JNK এবং IKK নামক স্ট্রেস এনজাইম সক্রিয় করে তোলে [৩]। এই এনজাইমগুলো IRS-1 প্রোটিনের টাইরোসিনের বদলে ক্ষতিকর সেরিন স্থানে ফসফেট যুক্ত করে; যার ফলে IRS-1 অকেজো হয়ে যায় এবং কোষের প্রোটিসোমে ধ্বংস হয়ে যায়, যার কারণে কোষপর্দায় GLUT4 চ্যানেলের গমনাগমন ৫০ থেকে ৬০ শতাংশ হ্রাস পায় [৩]। ',
          ),
          l(
            'When maternal beta-cell compensation is inadequate, maternal hyperglycemia ensues, driving massive glucose transfer across placental GLUT1 into fetal circulation [2, 3]. The fetal pancreas responds to this unremitting glucose surge with marked hyperplasia and hypertrophy of islet beta cells [2, 3]. Because glucose phosphorylates rapidly via fetal glucokinase, the resulting high ATP/ADP ratio closes fetal ATP-sensitive potassium channels (KATP), depolarizing the beta-cell plasma membrane, opening L-type voltage-gated calcium channels, and driving continuous exocytosis of fetal insulin [2, 3].',
            'মায়ের অগ্ন্যাশয় এই বাধার বিপরীতে পর্যাপ্ত অতিরিক্ত ইনসুলিন তৈরি করতে না পারলে রক্তে চিনি উপচে পড়ে এবং তা গর্ভফুলের GLUT1 চ্যানেল দিয়ে ভ্রূণের রক্তে বন্যাস্রোতের মতো প্রবেশ করে [২, ৩]। ভ্রূণের অগ্ন্যাশয় এই অতিরিক্ত গ্লুকোজের ধাক্কায় নিজের সাইজ বহুগুণ বড় করে ফেলে এবং প্রচুর বিটা কোষ তৈরি করে [২, ৩]। ভ্রূণের কোষে গ্লুকোজ ভেঙে প্রচুর এটিপি তৈরি হওয়ায় বিটা কোষের বিদ্যুৎ চ্যানেলগুলো খুলে যায় এবং ভ্রূণের রক্তে অবিরাম ধারায় নিজস্ব ইনসুলিনের নিঃসরণ ঘটতে থাকে [২, ৩]। ',
          ),
          l(
            'Fetal hyperinsulinemia triggers profound anabolic acceleration: insulin stimulates fetal skeletal muscle protein accretion, suppresses fetal lipolysis, and activates hepatic sterol regulatory element-binding protein-1c (SREBP-1c) to accelerate de novo lipogenesis, driving severe macrosomia and visceral organomegaly [2, 3]. At parturition, clamping of the umbilical cord severs the exogenous maternal glucose supply abruptly, while the hyperplastic fetal beta cells continue to hypersecrete insulin [3]. This unopposed fetal insulin drives circulating glucose into skeletal muscle and arrests hepatic glycogenolysis, precipitating precipitous and potentially lethal neonatal hypoglycemia within 1 to 2 hours of delivery [3].',
            'ভ্রূণের রক্তে এই অতিরিক্ত ইনসুলিন এক অনিয়ন্ত্রিত বৃদ্ধি শুরু করে: এটি বাচ্চার চর্বি ও মাংস তৈরির গতি বহুগুণ বাড়িয়ে দেয়, যার ফলে শিশু অস্বাভাবিক ওজনের (ম্যাক্রোসোমিয়া) হয়ে জন্মায় এবং তার লিভার ও হার্ট অস্বাভাবিক বড় হয়ে যায় [২, ৩]। কিন্তু প্রসবের ঠিক পরপরই যখন নাড়ির রক্ত চলাচল বন্ধ হয়ে যায়, তখন মায়ের গ্লুকোজ আসা এক নিমেষে শূন্য হয়ে যায় অথচ বাচ্চার বড় হয়ে যাওয়া অগ্ন্যাশয় তখনও প্রচুর ইনসুলিন ঢালতে থাকে [৩]। এই লাগামহীন ইনসুলিন শিশুর রক্তের অবশিষ্ট গ্লুকোজ চোখের পলকে উধাও করে দেয়, যার ফলে জন্মের ১-২ ঘণ্টার মধ্যে শিশু মারাত্মক হাইপোগ্লাইসেমিয়ার শিকার হয়ে নীল হয়ে যেতে পারে [৩]। ',
          ),
        ],
        },
        {
          id: 'integration',
          heading: l('Mineral Biomechanics & HMO Glycomics: Placental Pumps & Secretor Genetics', 'খনিজ বায়োমেকানিক্স ও এইচএমও গ্লাইকোমিক্স: গর্ভফুলের পাম্প ও জিনের ভূমিকা'),
          paragraphs: [
          l(
            'The active transport of calcium across the human placenta maintains a positive fetal-to-maternal concentration gradient (fetal ionized calcium 1.4-1.5 mmol/L vs maternal 1.1-1.2 mmol/L), essential for fetal skeletal mineralization and neuromuscular development [5]. Calcium enters the syncytiotrophoblast microvillous membrane passively down an electrochemical gradient via Transient Receptor Potential Vanilloid channel 6 (TRPV6) [5]. Within the cytosol, calcium is bound and shuttled by calbindin-D9k, preventing cytotoxic intracellular calcium signaling, and is actively extruded across the fetal basal membrane against a steep electrochemical gradient by the Plasma Membrane Calcium ATPase (PMCA1 and PMCA4) driven by ATP hydrolysis [5].',
            'মায়ের চেয়ে বাচ্চার রক্তে ক্যালসিয়ামের ঘনত্ব সবসময় বেশি বজায় রাখা হয় (বাচ্চার ১.৪-১.৫ মিলিমোল বনাম মায়ের ১.১-১.২ মিলিমোল), যা ভ্রূণের হাড় মজবুত করতে অপরিহার্য [৫]। মায়ের রক্ত থেকে ক্যালসিয়াম প্রথমে TRPV6 চ্যানেলের মাধ্যমে গর্ভফুলের কোষে ঢোকে [৫]। কোষের ভেতর ক্যালবাইন্ডিন-ডি৯কে নামের প্রোটিন ক্যালসিয়ামকে ধরে সাবধানে বহন করে নিয়ে যায় যেন কোষের কোনো ক্ষতি না হয়; এরপর অপর প্রান্তে থাকা PMCA1 ও PMCA4 পাম্পগুলো এটিপি শক্তি খরচ করে ক্যালসিয়ামকে জোর করে ভ্রূণের রক্তে ঠেলে দেয় [৫]। ',
          ),
          l(
            'During human lactation, this mineral demand shifts to the mammary epithelium, where calcium sensing receptor (CaSR) signaling tightly regulates mineral secretion [5]. Circulating prolactin, oxytocin, and suckling mechanical stimuli activate the synthesis of Parathyroid Hormone-Related Protein (PTHrP) by lactating mammary epithelial cells [5]. Secreted PTHrP enters the maternal systemic circulation and binds to PTH/PTHrP type 1 receptors (PTH1R) on osteocytes and osteoblasts, upregulating receptor activator of nuclear factor-kB ligand (RANKL) and downregulating osteoprotegerin (OPG), unleashing osteoclastic resorption of maternal trabecular bone to mobilize calcium into milk [5].',
            'স্তন্যদানকালে এই খনিজের পুরো চাপ এসে পড়ে স্তনগ্রন্থির কোষগুলোর ওপর, যেখানে ক্যালসিয়াম সেন্সিং রিসেপ্টর (CaSR) এই প্রবাহ নিয়ন্ত্রণ করে [৫]। শিশুর দুধ পানের উদ্দীপনা এবং প্রোল্যাক্টিন হরমোনের প্রভাবে স্তনকোষগুলো প্রচুর PTHrP হরমোন তৈরি করে মায়ের রক্তে ছড়িয়ে দেয় [৫]। এই হরমোনটি মায়ের অস্থির কোষে যুক্ত হয়ে RANKL সংকেত বাড়িয়ে দেয়; ফলে মায়ের হাড় ভাঙার অস্টিওক্লাস্ট কোষগুলো সক্রিয় হয়ে হাড়ের ক্যালসিয়াম গলিয়ে বুকের দুধে পৌঁছে দেয় [৫]। ',
          ),
          l(
            'The biochemical synthesis of Human Milk Oligosaccharides (HMOs) in the mammary gland is governed by maternal genetics, specifically the Secretor (FUT2) and Lewis (FUT3) fucosyltransferase loci [4]. The structural foundation of all HMOs is a lactose core (galactose-beta-1,4-glucose) synthesized by lactose synthase [4]. The Secretor gene encodes alpha-1,2-fucosyltransferase (FUT2), which transfers an L-fucose residue to the terminal galactose of the lactose core, synthesizing 2-fucosyllactose (2-FL), the single most abundant HMO in human milk [4].',
            'মাতৃদুগ্ধের অলৌকিক উপাদান হিউম্যান মিল্ক অলিগোস্যাকারাইড (HMO) তৈরির বিষয়টি মায়ের জিনগত বৈশিষ্ট্যের ওপর নির্ভর করে—বিশেষ করে সিক্রেটর (FUT2) এবং লুইস (FUT3) জিনের ওপর [৪]। সব এইচএমও-এর মূল ভিত্তি হলো একটি ল্যাকটোজ অণু [৪]। মায়ের শরীরে FUT2 জিন সক্রিয় থাকলে তা বিশেষ এনজাইমের মাধ্যমে ল্যাকটোজের মাথায় একটি ফিউকোজ অণু জুড়ে দিয়ে ২-ফিউকোসিলল্যাকটোজ (2-FL) তৈরি করে, যা মাতৃদুগ্ধের সবচেয়ে প্রধান ও শক্তিশালী এইচএমও উপাদান [৪]। ',
          ),
          l(
            'Approximately 20% of the human population are "non-secretors" homozygous for loss-of-function null mutations in FUT2 (e.g., G428A nonsense mutation), producing breast milk virtually devoid of 2-FL and other alpha-1,2-fucosylated HMOs [4]. Infants breastfed by non-secretor mothers display distinct gut microbiome assembly, exhibiting delayed colonization by Bifidobacterium infantis and reduced protection against specific mucosal pathogens like norovirus and Campylobacter jejuni [4]. This genetic variation underscores the clinical rationale for modern infant formula supplementation with synthetic, bio-identical 2-FL and lacto-N-neotetraose (LNnT) [4].',
            'বিশ্বের প্রায় ২০ শতাংশ নারী জিনগতভাবে "নন-সিক্রেটর", যাদের FUT2 জিন নিষ্ক্রিয় থাকে; ফলে তাদের বুকের দুধে এই 2-FL উপাদানটি থাকে না [৪]। যেসব শিশু এমন মায়ের দুধ পান করে, তাদের অন্ত্রে উপকারী ব্যাকটেরিয়া বিস্তার লাভ করতে কিছুটা বেশি সময় নেয় এবং তারা রোটাভাইরাস বা পেটের ইনফেকশনে বেশি আক্রান্ত হতে পারে [৪]। বিজ্ঞানের এই আবিষ্কারের ওপর ভিত্তি করেই আধুনিক ফর্মুলা দুধে কৃত্রিমভাবে 2-FL যুক্ত করার প্রযুক্তি আবিষ্কৃত হয়েছে [৪]। ',
          ),
        ],
        },
        {
          id: 'practice',
          heading: l('Translational Clinical Protocols: Advanced GDM Titration & Lactational Dietetics', 'অনুবাদী ক্লিনিক্যাল প্রোটোকল: উন্নত জিডিএম টাইট্রেশন ও স্তন্যদান ডায়েটেটিক্স'),
          paragraphs: [
          l(
            'When Medical Nutrition Therapy (MNT) fails to maintain target glycemic thresholds in GDM (fasting < 5.3 mmol/L, 1-hour postprandial < 7.8 mmol/L), pharmacotherapy must be initiated promptly [3]. Exogenous human insulin is the gold standard because it does not cross the placental syncytiotrophoblast barrier in meaningful amounts [3]. A multiple-dose basal-bolus regimen is preferred: intermediate-acting NPH insulin or long-acting detemir at bedtime to control fasting hepatic gluconeogenesis, paired with rapid-acting insulin analogues (aspart or lispro) administered immediately before meals to blunt postprandial glucose excursions [3].',
            'জিডিএম আক্রান্ত রোগীকে সঠিক ডায়েট দেওয়ার পরও যদি রক্তের চিনি নিয়ন্ত্রণে না আসে (খালি পেটে ৫.৩ এবং খাবারের ১ ঘণ্টা পর ৭.৮ মিলিমোলের বেশি থাকে), তবে কালক্ষেপণ না করে দ্রুত ওষুধ শুরু করতে হবে [৩]। মানুষের তৈরি ইনসুলিন হলো এই চিকিৎসার স্বর্ণমান, কারণ এটি কোনোভাবেই গর্ভফুল পার হয়ে বাচ্চার শরীরে ঢুকতে পারে না [৩]। রাতে দীর্ঘস্থায়ী ইনসুলিন এবং প্রতিবার প্রধান খাবারের আগে দ্রুত কার্যকরী ইনসুলিন প্রয়োগ করাই সবচেয়ে নিরাপদ ও বিজ্ঞানসম্মত চিকিৎসা [৩]। ',
          ),
          l(
            'Oral hypoglycemic agents like metformin and glibenclamide (glyburide) require strict cautionary evaluation during pregnancy [3]. Metformin crosses the placenta freely via organic cation transporters (OCT1, OCT2, OCT3), achieving fetal cord blood concentrations that equal or exceed maternal levels, while glibenclamide crosses at lower but measurable concentrations [3]. Long-term follow-up trials (e.g., MiG trial) demonstrate that while metformin is effective, it carries higher rates of late childhood adiposity, and glibenclamide carries higher rates of neonatal hypoglycemia and macrosomia than insulin, making insulin the definitive first-line therapeutic agent across international societies [3].',
            'মুখে খাওয়ার ডায়াবেটিসের ওষুধ—যেমন মেটফরমিন বা গ্লিবেনক্লামাইড—গর্ভকালে অত্যন্ত সতর্কতার সাথে বিবেচনা করতে হয় [৩]। মেটফরমিন অনায়াসে গর্ভফুল পার হয়ে বাচ্চার রক্তে ঠিক মায়ের সমান ঘনত্বে পৌঁছে যায় [৩]। দীর্ঘমেয়াদী গবেষণায় দেখা গেছে যে মেটফরমিন কার্যকরী হলেও ভবিষ্যতে শিশুর অতিরিক্ত স্থূলতার ঝুঁকি বাড়ায় এবং গ্লিবেনক্লামাইড বাচ্চার হাইপোগ্লাইসেমিয়ার ঝুঁকি তৈরি করে; তাই বিশ্বব্যাপী চিকিৎসাবিজ্ঞান ইনসুলিনকেই সবচেয়ে নিরাপদ প্রথম সারির চিকিৎসা হিসেবে গণ্য করে [৩]। ',
          ),
          l(
            'The deployment of Continuous Glucose Monitoring (CGM) in high-risk pregnancies has revolutionized precision glycemic optimization [3]. Interstitial glucose sensors provide real-time metrics, including Time in Range (TIR, defined specifically for pregnancy as 3.5 to 7.8 mmol/L [63-140 mg/dL]), Time Below Range (TBR, < 3.5 mmol/L), and glycemic variability [3]. Clinical trials (e.g., CONCEPTT) demonstrate that achieving a TIR > 70% in pregnant women with diabetes dramatically reduces the risks of macrosomia, neonatal intensive care unit (NICU) admissions, and neonatal hypoglycemia, empowering personalized carbohydrate titration at each meal [3].',
            'উচ্চ ঝুঁকিপূর্ণ গর্ভধারণে সার্বক্ষণিক গ্লুকোজ মনিটরিং (CGM) সেন্সর ব্যবহারের ফলে চিকিৎসার নির্ভুলতা বহুগুণ বেড়ে গেছে [৩]। চামড়ার নিচে সেন্সর লাগিয়ে প্রতি মুহূর্তের গ্লুকোজ পর্যবেক্ষণ করা যায়; গর্ভকালীন লক্ষ্যমাত্রা হলো সারাদিনের অন্তত ৭০% সময় গ্লুকোজ ৩.৫ থেকে ৭.৮ মিলিমোলের মধ্যে ধরে রাখা [৩]। গবেষণায় প্রমাণিত হয়েছে যে এই লক্ষ্যমাত্রা অর্জন করতে পারলে বাচ্চার অতিরিক্ত ওজন বৃদ্ধি, আইসিইউতে ভর্তি এবং জন্মের পর বাচ্চার খিঁচুনির ঝুঁকি প্রায় শূন্যের কোঠায় নামিয়ে আনা সম্ভব হয় [৩]। ',
          ),
          l(
            'During lactation, maternal nutritional counseling must support milk synthesis while safeguarding maternal nutritional reserves [5]. Exclusive breastfeeding expends an additional 500 kcal per day; maternal intake should provide a modest 300 to 400 kcal surplus above baseline, utilizing the remaining energy deficit to facilitate gradual postpartum weight loss (approx. 0.5 kg/week) without impairing milk volume [5]. Daily fluid intake must satisfy physiological thirst (approx. 2.5-3.0 L/day), and supplementation with 200 mg of docosahexaenoic acid (DHA) daily ensures high breast milk DHA content, optimizing neonatal visual acuity and neurocognitive development [4, 5].',
            'স্তন্যদানকালে মায়ের পুষ্টি পরামর্শ এমনভাবে সাজাতে হয় যা বুকের দুধের উৎপাদন নিশ্চিত করার পাশাপাশি মায়ের স্বাস্থ্যও অটুট রাখে [৫]। শিশুকে শুধু বুকের দুধ খাওয়ালে মায়ের শরীর থেকে দৈনিক প্রায় ৫০০ ক্যালোরি অতিরিক্ত খরচ হয়; তাই মাকে স্বাভাবিকের চেয়ে ৩০০-৪০০ ক্যালোরি বেশি খেতে দেওয়া হয়, যা মায়ের দুধ ঠিক রেখে প্রসব-পরবর্তী জমে থাকা অতিরিক্ত চর্বি ধীরে ধীরে ঝরাতে সাহায্য করে [৫]। মাকে পর্যাপ্ত পানি (দিনে আড়াই থেকে তিন লিটার) এবং প্রতিদিন ২০০ মিলিগ্রাম ওমেগা-৩ (DHA) খেতে হবে যা মাতৃদুগ্ধের মাধ্যমে শিশুর চোখের দৃষ্টি ও মস্তিষ্কের বুদ্ধিমত্তা বিকাশে সহায়তা করে [৪, ৫]। ',
          ),
        ],
        },
        {
          id: 'takeaways',
          heading: l('Translational Takeaways: Precision Maternal-Infant Biology', 'অনুবাদী সারসংক্ষেপ: প্রিসিশন মাতৃ-শিশু জীববিজ্ঞান'),
          paragraphs: [
          l(
            'Periconceptional folic acid functions as an indispensable coenzyme for thymidylate synthase (dUMP to dTMP) and methionine synthase (SAMe generation), securing high-fidelity DNA replication and epigenetic methylation during neural tube closure on embryonic days 21 to 28 [1]. Initiating folate prior to conception is mandatory to eliminate the kinetic vulnerability that causes anencephaly and spina bifida [1].',
            'গর্ভধারণপূর্ব ফলিক অ্যাসিড থাইমিডিলেট সিন্থেজ এবং মেথিওনিন সিন্থেজ এনজাইমের অপরিহার্য চালিকাশক্তি হিসেবে কাজ করে গর্ভধারণের ২১ থেকে ২৮তম দিনে ভ্রূণের স্নায়ুনালির ত্রুটিমুক্ত গঠন সম্পন্ন করে [১]। গর্ভধারণের পূর্বেই ফলিক অ্যাসিড শুরু করা বিজ্ঞানসম্মতভাবে বাধ্যতামূলক, অন্যথায় অ্যানেনসেফালি বা স্পাইনা বিফিডার মতো মারাত্মক জন্মগত ত্রুটি রোধ করা সম্ভব হয় না [১]। ',
          ),
          l(
            'The syncytiotrophoblast maintains polarized transport architecture: GLUT1 facilitates maternal-to-fetal glucose flux with the basal membrane acting as the rate-limiting gatekeeper, while System A (SNAT1/2) and System L (LAT1/2) active amino acid pumps sustain higher amino acid concentrations in fetal plasma to drive mTORC1-mediated tissue growth [2]. LCPUFAs (DHA, ARA) undergo selective biomagnification via FAT/CD36 and FATP4 [2].',
            'গর্ভফুলের সিনসিটিওট্রফোব্লাস্ট প্রাচীর অত্যন্ত নিখুঁতভাবে পুষ্টির প্রবাহ নিয়ন্ত্রণ করে: GLUT1 গ্লুকোজের সুষম সরবরাহ নিশ্চিত করে, আর SNAT ও LAT পাম্পগুলো মায়ের চেয়ে বাচ্চার রক্তে বেশি মাত্রায় অ্যামিনো অ্যাসিড পৌঁছে দিয়ে ভ্রূণের প্রোটিন ও মাংসপেশি গঠন করায় [২]। সাথে সাথে বিশেষ প্রোটিন চ্যানেলের (CD36) মাধ্যমে ওমেগা-৩ (DHA) বাচ্চার মস্তিষ্কে পৌঁছে যায় [২]। ',
          ),
          l(
            'Gestational Diabetes Mellitus represents an endocrine-mediated mismatch between placental anti-insulin hormone secretion (hPL, progesterone, pGH, TNF-alpha) and maternal pancreatic beta-cell secretory reserve [2, 3]. Stress-kinase-mediated serine phosphorylation of maternal IRS-1 blunts GLUT4 translocation, driving maternal hyperglycemia and triggering fetal hyperinsulinemia, macrosomia, and neonatal hypoglycemia per the Pedersen hypothesis [2, 3].',
            'গর্ভকালীন ডায়াবেটিস হলো গর্ভফুলের হরমোনজনিত ইনসুলিন রেজিস্ট্যান্স এবং মায়ের অগ্ন্যাশয়ের ইনসুলিন উৎপাদন সক্ষমতার মধ্যকার এক বিপাকীয় অমিল [২, ৩]। মায়ের কোষে IRS-1 নষ্ট হয়ে যাওয়ায় রক্তে চিনি বেড়ে যায়, যা গর্ভফুল পেরিয়ে বাচ্চার নিজস্ব অগ্ন্যাশয়কে উত্তেজিত করে অতিরিক্ত ইনসুলিন তৈরি করায় এবং শিশুকে অস্বাভাবিক ভারী (ম্যাক্রোসোমিয়া) বানিয়ে জন্মের পর মারাত্মক হাইপোগ্লাইসেমিয়ার মুখে ঠেলে দেয় [২, ৩]। ',
          ),
          l(
            'Lactational bone mineral requirements are met via mammary gland secretion of PTHrP, which mobilizes maternal trabecular calcium into breast milk independently of PTH, completely reversing upon infant weaning [5]. Concurrently, complex Human Milk Oligosaccharides (HMOs), synthesized via maternal FUT2 secretor genetics, serve as selective prebiotics for Bifidobacterium infantis and function as soluble decoy receptors preventing enteric and respiratory pathogen adherence [4].',
            'স্তন্যদানকালে দুধের ক্যালসিয়াম নিশ্চিত করতে স্তনগ্রন্থির PTHrP হরমোন মায়ের হাড় থেকে ক্যালসিয়াম নিয়ে আসে, যা স্তন্যদান শেষে সম্পূর্ণ প্রাকৃতিকভাবে আবার ঠিক হয়ে যায় [৫]। একই সাথে মায়ের FUT2 জিনের মাধ্যমে মাতৃদুগ্ধে তৈরি হওয়া বিশেষ শর্করা (HMOs, 2-FL) শিশুর অন্ত্রে উপকারী ব্যাকটেরিয়া ছড়িয়ে দেয় এবং ক্ষতিকর জীবাণুকে অন্ত্রের দেয়ালে বসতে না দিয়ে নিমিষেই বের করে দিয়ে শিশুকে আজীবন সুস্থ রাখে [৪]। ',
          ),
        ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উচ্চতর স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l(
            '1. Advanced Molecular Epigenetics of Periconceptional One-Carbon Metabolism',
            '১. গর্ভধারণপূর্ব ওয়ান-কার্বন বিপাকের উচ্চতর আণবিক এপিজেনেটিক্স'
          ),
          paragraphs: [
            l(
              'The precise biochemical partitioning between the transmethylation and transsulfuration pathways during early gastrulation and neural plate morphogenesis dictates embryonic viability [1]. Methionine adenosyltransferase-2A (MAT2A) utilizes ATP and dietary methionine to synthesize S-adenosylmethionine (SAMe), the principal biological methyl donor for nuclear chromatin organization [1]. Within the developing neuroepithelium, the cellular ratio of SAMe to its hydrolyzed product, S-adenosylhomocysteine (SAH), establishes the transmethylation potential that directly governs the enzymatic velocity of DNA methyltransferases (DNMT1, DNMT3a, DNMT3b) and histone methyltransferases (such as EZH2 and MLL complexes) [1].',
              'প্রারম্ভিক গ্যাস্ট্রুলেশন ও স্নায়ুপাতের রূপান্তরের সময় ট্রান্সমিথাইলেশন ও ট্রান্সসালফারেশন পথের সুনির্দিষ্ট জৈব-রাসায়নিক বিভাজন ভ্রূণের বেঁচে থাকা নির্ধারণ করে [১]। মেথিওনিন এডিনোসিলট্রান্সফারেজ-২এ (MAT2A) এনজাইম এটিপি এবং খাদ্য থেকে আসা মেথিওনিন ব্যবহার করে এস-এডিনোসিলমেথিওনিন (SAMe) তৈরি করে, যা ক্রোম্যাটিন গঠনের প্রধান মিথাইল দাতা [১]। বর্ধনশীল স্নায়ুকোষে SAMe এবং এর উপজাত SAH-এর অনুপাত ডিএনএ মিথাইলট্রান্সফারেজ এনজাইমের গতি কঠোরভাবে নিয়ন্ত্রণ করে সঠিক স্থানে জিন বন্ধ বা চালু রাখা নিশ্চিত করে [১]।'
            ),
            l(
              'During rapid embryonic neuroectodermal cell division, high-fidelity DNA replication is governed by thymidylate synthase (TYMS) and dihydrofolate reductase (DHFR) [1]. Thymidylate synthase catalyzes the reductive methylation of deoxyuridine monophosphate (dUMP) to deoxythymidine monophosphate (dTMP), using 5,10-methylenetetrahydrofolate as an obligatory one-carbon cofactor [1]. When intracellular folate is depleted, the dUMP/dTMP ratio rises catastrophically, forcing DNA polymerases to misincorporate dUTP into replicating genomic DNA [1]. Subsequent excision repair by uracil DNA glycosylase (UDG) produces extensive abasic sites and double-strand DNA breaks, triggering p53-dependent neuroepithelial apoptosis and fatal neural tube dysraphism [1].',
              'ভ্রূণের স্নায়ুকোষের দ্রুত বিভাজনের সময় ডিএনএ অনুলিপির নির্ভুলতা বজায় রাখে থাইমিডিলেট সিন্থেজ (TYMS) এবং ডাইহাইড্রোফোলেট রিডাক্টেজ (DHFR) এনজাইম [১]। থাইমিডিলেট সিন্থেজ ৫,১০-মিথিলিন-টিএইচএফ থেকে একটি কার্বন নিয়ে dUMP-কে ডিএনএ তৈরির কাঁচামাল dTMP-তে রূপান্তরিত করে [১]। কোষে ফোলেটের ঘাটতি হলে ডিএনএ পলিমারেজ ভুলবশত থাইমিনের বদলে ইউরাসিলকে ডিএনএর ভেতর যুক্ত করে ফেলে [১]। পরবর্তীতে কোষের মেরামতকারী এনজাইম এই ভুল শোধরাতে গেলে ভ্রূণের ডিএনএ ভেঙে টুকরো হয়ে যায়, যার ফলে স্নায়ুকোষ ধ্বংস হয়ে স্পাইনা বিফিডার মতো মারাত্মক ত্রুটি ঘটে [১]।'
            ),
            l(
              'Maternal genetic variations in methylenetetrahydrofolate reductase (MTHFR) profoundly alter embryonic one-carbon flux [1]. The common MTHFR 677C>T missense polymorphism (encoding an alanine-to-valine substitution at codon 222) creates a thermolabile enzyme variant that accelerates flavin adenine dinucleotide (FAD) cofactor dissociation [1]. At physiological core body temperature (37°C), the homozygous 677TT genotype exhibits a 50% to 70% reduction in catalytic activity, leading to lower circulating 5-methyl-THF, elevated homocysteine, and a threefold increase in neural tube defect risk in the absence of optimal periconceptional supplementation [1].',
              'মায়ের MTHFR জিনের বংশগত পরিবর্তন ভ্রূণের ওয়ান-কার্বন বিপাককে মারাত্মকভাবে প্রভাবিত করে [১]। MTHFR 677C>T মিউটেশনের ফলে তৈরি হওয়া পরিবর্তিত এনজাইমটি স্বাভাবিক শারীরিক তাপমাত্রায় (৩৭° সেলসিয়াস) তার অপরিহার্য এফএডি (FAD) কোফ্যাক্টর দ্রুত হারিয়ে ফেলে [১]। ফলে 677TT জিনোমধারী মায়েদের ক্ষেত্রে এনজাইমের কার্যক্ষমতা ৫০ থেকে ৭০ শতাংশ পর্যন্ত কমে যায়, যার ফলে রক্তে বিষাক্ত হোমোকিস্টাইন বাড়ে এবং ফোলেটের অভাবে ভ্রূণের স্নায়ুনালির জন্মগত ত্রুটির ঝুঁকি তিনগুণ বেড়ে যায় [১]।'
            ),
            l(
              'From a clinical pharmacological perspective, the metabolic fate of synthetic folic acid (pteroylmonoglutamic acid) diverges from biologically active (6S)-5-methyltetrahydrofolate (L-methylfolate) [1]. High-dose synthetic folic acid must undergo two successive reduction steps catalyzed by hepatic DHFR, an enzyme with notoriously slow and variable expression in humans [1]. Intakes exceeding 1.0 mg/day frequently saturate hepatic DHFR, resulting in circulating unmetabolized folic acid (UMFA) in maternal plasma; in contrast, direct L-methylfolate supplementation completely circumvents DHFR and MTHFR enzymatic bottlenecks, ensuring immediate bioavailability for embryonic DNA methylation [1].',
              'ক্লিনিক্যাল ফার্মাকোলজির দৃষ্টিতে সিন্থেটিক ফলিক অ্যাসিড এবং সরাসরি সক্রিয় এল-মিথাইলফোলেটের (5-MTHF) বিপাকীয় রূপ সম্পূর্ণ আলাদা [১]। সিন্থেটিক ফলিক অ্যাসিডকে লিভারের ধীরগতির DHFR এনজাইম দিয়ে দুবার ভেঙে সক্রিয় হতে হয় [১]। দৈনিক ১ মিলিগ্রামের বেশি ফলিক অ্যাসিড খেলে এই এনজাইমটির ক্ষমতা ফুরিয়ে যায় এবং রক্তে অজীর্ণ ফলিক অ্যাসিড ভেসে থাকে; কিন্তু সরাসরি এল-মিথাইলফোলেট প্রয়োগ করলে কোনো বাধা ছাড়াই ভ্রূণের ডিএনএ মিথাইলেশনের কাঁচামাল তাৎক্ষণিকভাবে পৌঁছে যায় [১]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l(
            '2. Advanced Syncytiotrophoblast Transporter Biology & Nanoscale Nutrient Transfer',
            '২. গর্ভফুলের সিনসিটিওট্রফোব্লাস্ট পরিবহন জীববিজ্ঞান ও ন্যানোস্কেল পুষ্টি আদান-প্রদান'
          ),
          paragraphs: [
            l(
              'The human syncytiotrophoblast is a true multinucleated syncytium forming the continuous continuous epithelial barrier of placental chorionic villi [2]. It possesses two biochemically distinct, polarized plasma membranes separated by a dense cytoplasm: the apical microvillous membrane (MVM), directly bathed in maternal intervillous blood, and the basal membrane (BM), separated from the fetal capillary endothelium by a basement membrane and stroma [2]. This polarized dual-membrane architecture creates an asymmetrical enzymatic and transport polarity that coordinates vectorial nutrient transport against steep concentration gradients [2].',
              'মানব গর্ভফুলের সিনসিটিওট্রফোব্লাস্ট হলো একাধিক নিউক্লিয়াসযুক্ত একটি নিরবচ্ছিন্ন বিশেষায়িত পর্দা যা মায়ের রক্ত ও ভ্রূণের রক্তনালীর মাঝে প্রধান প্রাচীর তৈরি করে [২]। এর দুটি সম্পূর্ণ ভিন্নধর্মী মেরুকৃত পর্দা রয়েছে: বাইরের মাইক্রোভিলাস পর্দা (MVM) সরাসরি মায়ের রক্তে ডুবে থাকে, এবং ভেতরের বেসাল পর্দা (BM) ভ্রূণের রক্তনালীর কাছাকাছি অবস্থান করে [২]। এই দ্বিমুখী গঠন মায়ের রক্ত থেকে পুষ্টি উপাদানগুলোকে একমুখী গতিতে ভ্রূণের দিকে টেনে নেওয়ার জন্য এক অভূতপূর্ব প্রাকৃতিক পাম্প তৈরি করে [২]।'
            ),
            l(
              'Transplacental glucose transfer operates via facilitated diffusion uniporters, principally GLUT1 (SLC2A1) and GLUT3 (SLC2A3) [2]. The microvillous membrane exhibits a 3- to 5-fold higher density of GLUT1 transporters compared to the basal membrane, making the basal membrane the rate-limiting barrier for fetal glucose delivery [2]. Because GLUT1 operates passively down a chemical gradient, fetal glucose levels consistently mirror maternal glycemia at approximately 70% to 80% of maternal concentrations, ensuring rapid substrate availability for embryonic cerebral and somatic metabolism [2].',
              'গর্ভফুলের মাধ্যমে গ্লুকোজ চলাচল প্রধানত GLUT1 এবং GLUT3 চ্যানেলের নিয়ন্ত্রিত ব্যাপন প্রক্রিয়ায় সম্পন্ন হয় [২]। বাইরের মাইক্রোভিলাস পর্দায় ভেতরের বেসাল পর্দার তুলনায় ৩ থেকে ৫ গুণ বেশি GLUT1 চ্যানেল থাকে, যার ফলে বেসাল পর্দাই হলো ভ্রূণের দিকে গ্লুকোজ যাওয়ার প্রধান নিয়ন্ত্রক ফটক [২]। এই চ্যানেলগুলো কোনো শক্তি খরচ না করে ঘনত্বের পার্থক্যের ওপর ভিত্তি করে চলে; ফলে বাচ্চার রক্তের চিনি সর্বদা মায়ের রক্তের চিনির প্রায় ৭০-৮০ শতাংশ মাত্রায় সংরক্ষিত থাকে [২]।'
            ),
            l(
              'Active transplacental amino acid transport relies on the functional coupling of System A accumulators and System L exchangers [2]. Sodium-coupled neutral amino acid transporters (SNAT1, SNAT2, SNAT4; System A) utilize the secondary active energy of the Na+/K+-ATPase pump to transport non-essential neutral amino acids (alanine, serine, glutamine) into the syncytiotrophoblast against steep concentration gradients [2]. The high intracellular pool of neutral amino acids then drives System L heterodimeric antiporters (LAT1, LAT2 linked via disulfide bonds to the 4F2hc chaperone), which exchange intracellular amino acids to pump essential branched-chain amino acids (leucine, isoleucine, valine) directly into fetal blood [2].',
              'গর্ভফুলে অ্যামিনো অ্যাসিড শোষণ নির্ভর করে সিস্টেম-এ এবং সিস্টেম-এল ট্রান্সপোর্টারের চমৎকার যৌথ সমন্বয়ের ওপর [২]। সোডিয়াম-নির্ভর সিস্টেম-এ (SNAT1/2) পাম্পের শক্তি খরচ করে মায়ের রক্ত থেকে অপ্রয়োজনীয় অ্যামিনো অ্যাসিডগুলোকে কোষে টেনে আনে [২]। এরপর কোষে জমা হওয়া এই অ্যামিনো অ্যাসিডগুলোর বিনিময়ে সিস্টেম-এল (LAT1/2) পাম্পটি ভ্রূণের জন্য অতিপ্রয়োজনীয় ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিডগুলোকে (যেমন লিউসিন ও ভ্যালিন) ভ্রূণের রক্তে ঠেলে দেয় [২]।'
            ),
            l(
              'Placental long-chain polyunsaturated fatty acid (LCPUFA) transport is selectively biomagnified to support rapid fetal neurodevelopment [2]. Fatty acid translocase (FAT/CD36) and fatty acid transport proteins (FATP1, FATP4) on the microvillous membrane bind maternal albumin-bound non-esterified fatty acids, while endothelial lipase (EL) cleaves maternal triglycerides [2]. Inside the syncytiotrophoblast, cytoplasmic fatty acid-binding proteins (FABPpm, L-FABP) preferentially shuttle docosahexaenoic acid (DHA, 22:6n-3) and arachidonic acid (ARA, 20:4n-6) toward the basal membrane, ensuring that fetal circulations achieve substantially higher DHA concentrations than maternal blood [2].',
              'গর্ভের বাচ্চার মস্তিষ্ক ও চোখের রেটিনা গঠনের জন্য প্রয়োজনীয় ওমেগা-৩ ফ্যাটি অ্যাসিড (ডিএইচএ) গর্ভফুলের মাধ্যমে বিশেষ প্রাধান্য দিয়ে পরিবাহিত হয় [২]। মাইক্রোভিলাস পর্দার FAT/CD36 এবং FATP4 প্রোটিন মায়ের রক্তের চর্বি গ্রহণ করে এবং বিশেষ এনজাইম তা ভেঙে মুক্ত ফ্যাটি অ্যাসিডে পরিণত করে [২]। গর্ভফুলের ভেতরের বিশেষ পরিবাহক প্রোটিনগুলো বেছে বেছে ডিএইচএ (DHA) এবং অ্যারাকিডোনিক অ্যাসিডকে ভ্রূণের দিকে পাঠিয়ে দেয়, যার ফলে বাচ্চার রক্তে মায়ের চেয়েও বেশি ঘনত্বের উন্নত ওমেগা-৩ নিশ্চিত হয় [২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l(
            '3. Molecular Endocrinology of Gestational Insulin Resistance & Beta-Cell Plasticity',
            '৩. গর্ভকালীন ইনসুলিন রেজিস্ট্যান্স ও বিটা-কোষের পরিবর্তনের আণবিক হরমোনবিজ্ঞান'
          ),
          paragraphs: [
            l(
              'Gestational insulin resistance is an evolutionary neuroendocrine adaptation orchestrated by the endocrine output of the syncytiotrophoblast [2, 3]. Beginning in the second trimester and accelerating through the third trimester, the placenta secretes vast quantities of human placental lactogen (hPL), placental growth hormone (pGH), progesterone, estrogen, and placental tumor necrosis factor-alpha (TNF-alpha) into maternal blood [2, 3]. These hormones collectively reduce maternal skeletal muscle and adipose tissue insulin sensitivity by up to 50% to 70%, shunting ingested glucose and amino acids away from maternal oxidation and directly toward the fetoplacental unit [2, 3].',
              'গর্ভকালীন ইনসুলিন রেজিস্ট্যান্স হলো একটি অসাধারণ প্রাকৃতিক হরমোনীয় অভিযোজন যা গর্ভফুলের মাধ্যমে পরিচালিত হয় [২, ৩]। দ্বিতীয় ট্রাইমেস্টার থেকে গর্ভফুল বিপুল পরিমাণে হিউম্যান প্লাসেন্টাল ল্যাকটোজেন (hPL), গ্রোথ হরমোন (pGH), প্রোজেস্টেরন ও প্রদাহজনক টিএনএফ-আলফা মায়ের রক্তে ক্ষরণ করে [২, ৩]। এই হরমোনগুলো সম্মিলিতভাবে মায়ের কঙ্কালপেশি ও চর্বিকোষের ইনসুলিন সংবেদনশীলতা ৫০ থেকে ৭০ শতাংশ কমিয়ে দেয়, যাতে খাবার থেকে আসা পুষ্টি মায়ের শরীরে খরচ না হয়ে সোজা বাচ্চার বৃদ্ধির জন্য গর্ভফুলে যেতে পারে [২, ৩]।'
            ),
            l(
              'At the intracellular level in maternal skeletal muscle, placental cytokines and elevated free fatty acids induce a severe post-receptor defect in insulin signaling [3]. Hyperactivated stress kinases—specifically c-Jun N-terminal kinase (JNK), inhibitor of kappa B kinase (IKK-beta), and novel protein kinase C isoforms (PKC-theta)—phosphorylate Insulin Receptor Substrate-1 (IRS-1) at multiple inhibitory serine residues (Ser307, Ser312, Ser616) [3]. This pathological serine phosphorylation prevents the tyrosine phosphorylation of IRS-1 by the activated insulin receptor kinase, dismantling the p85-PI3K-Akt cascade and blocking the exocytosis of GLUT4 glucose storage vesicles to the plasma membrane [3].',
              'মায়ের কঙ্কালপেশির কোষের ভেতরে ইনসুলিনের সংকেত নষ্ট হয় IRS-1 প্রোটিনের সেরিন ফসফরাইলেশনের কারণে [৩]। প্লাসেন্টার প্রদাহজনক সাইটোকাইন ও মুক্ত ফ্যাটি অ্যাসিড কোষের ভেতরের স্ট্রেস কাইনেজ এনজাইমগুলোকে (JNK ও IKK-beta) অতিমাত্রায় সক্রিয় করে তোলে [৩]। এই এনজাইমগুলো ইনসুলিন গ্রাহকের মূল সংকেত বাহক IRS-1-এর গায়ে ফসফেট যুক্ত করে একে অকেজো করে দেয়; ফলে ইনসুলিন যুক্ত হলেও পেশির GLUT4 চ্যানেলগুলো কোষপর্দায় উঠে আসতে পারে না এবং রক্তে চিনি বাড়তে থাকে [৩]।'
            ),
            l(
              'In healthy pregnancy, normoglycemia is preserved because maternal pancreatic beta cells undergo remarkable compensatory plasticity [3]. Lactogenic signaling through the prolactin receptor (PRLR) activates the Janus kinase 2 (JAK2) and Signal Transducer and Activator of Transcription 5 (STAT5) pathway [3]. Phosphorylated STAT5 translocates to the nucleus to induce transcription of tryptophan hydroxylase-1 (Tph1), driving local serotonin synthesis within beta cells [3]. Serotonin acts autocrinely via 5-HT2B receptors to transactivate cyclin D2, expanding maternal beta-cell mass 2- to 3-fold and doubling basal and glucose-stimulated insulin secretion to match peripheral resistance [3].',
              'সুস্থ গর্ভাবস্থায় মায়ের রক্তে চিনি স্বাভাবিক থাকে কারণ অগ্ন্যাশয়ের বিটা-কোষগুলো অসাধারণভাবে নিজেদের আকার ও সংখ্যা বাড়িয়ে নেয় [৩]। প্লাসেন্টাল ল্যাকটোজেন হরমোন বিটা-কোষের JAK2-STAT5 সংকেত সক্রিয় করে কোষের ভেতরে স্থানীয় সেরোটোনিন হরমোন তৈরি করায় [৩]। এই সেরোটোনিন বিটা-কোষের সাইক্লিন ডি২ জিনকে সক্রিয় করে বিটা-কোষের মোট সংখ্যা ২ থেকে ৩ গুণ বাড়িয়ে দেয়; যার ফলে অগ্ন্যাশয় স্বাভাবিকের চেয়ে দ্বিগুণ ইনসুলিন তৈরি করে ইনসুলিন রেজিস্ট্যান্সকে সম্পূর্ণ নিয়ন্ত্রণে রাখতে সক্ষম হয় [৩]।'
            ),
            l(
              'Gestational Diabetes Mellitus (GDM) develops when this beta-cell compensatory reserve fails to match the severity of pregnancy-induced insulin resistance [3]. Polymorphisms in beta-cell survival genes (such as *TCF7L2*, *KCNJ11*, and *GCK*) or preexisting obesity-associated lipotoxicity impair STAT5 signaling and accelerate beta-cell apoptosis [3]. As maternal hyperglycemia escapes control, excess glucose freely crosses the placenta via GLUT1, triggering fetal beta-cell hyperplasia and profound fetal hyperinsulinemia [2, 3]. Because insulin is a potent anabolic hormone in the fetus, it stimulates massive somatic growth and adipose deposition (macrosomia), while leaving the neonate at catastrophic risk of rebound hypoglycemia upon cord severance [3].',
              'গর্ভকালীন ডায়াবেটিস (GDM) তখন প্রকাশ পায় যখন মায়ের অগ্ন্যাশয় বর্ধিত চাহিদার সাথে পাল্লা দিয়ে অতিরিক্ত ইনসুলিন তৈরি করতে ব্যর্থ হয় [৩]। বংশগত ত্রুটি বা গর্ভধারণের পূর্বে থাকা অতিরিক্ত চর্বির কারণে বিটা-কোষগুলো পর্যাপ্ত বাড়তে পারে না [৩]। ফলে মায়ের রক্তের অনিয়ন্ত্রিত গ্লুকোজ গর্ভফুল পেরিয়ে বাচ্চার শরীরে ঢুকে বাচ্চার অগ্ন্যাশয়কে অতিমাত্রায় উত্তেজিত করে প্রচুর ভ্রূণীয় ইনসুলিন ক্ষরণ করায় [২, ৩]। এই অতিরিক্ত ইনসুলিন বাচ্চার শরীরে অস্বাভাবিক চর্বি ও মাংস তৈরি করে বাচ্চার ওজন মারাত্মক বাড়িয়ে তোলে (ম্যাক্রোসোমিয়া), যা প্রসবকালীন জটিলতা এবং জন্মের পর বাচ্চার হঠাৎ রক্তের চিনি বিপজ্জনকভাবে কমে যাওয়ার ঝুঁকি তৈরি করে [৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l(
            '4. Bone Mineral Uncoupling & The Mammary-PTHrP-Calcium Siphon',
            '৪. অস্থির খনিজ রূপান্তর ও স্তনগ্রন্থির PTHrP-ক্যালসিয়াম শারীরবৃত্ত'
          ),
          paragraphs: [
            l(
              'During the third trimester of pregnancy, the developing fetal skeleton accretes approximately 250 to 300 mg of elemental calcium daily, accumulating a total of 30 grams of calcium by term [5]. Remarkably, maternal skeletal mineral reserves are largely spared during pregnancy because maternal active intestinal calcium absorption doubles from approximately 20% to over 40% [5]. This hyperabsorption is driven by a massive, pregnancy-specific surge in maternal circulating 1,25-dihydroxyvitamin D3 (calcitriol), synthesized by maternal kidneys and the placenta under the combined endocrine stimulation of prolactin, hPL, and PTHrP, independent of systemic parathyroid hormone (PTH) [5].',
              'গর্ভাবস্থার শেষ তিন মাসে ভ্রূণের কঙ্কাল গঠনের জন্য প্রতিদিন প্রায় ২৫০ থেকে ৩০০ মিলিগ্রাম ক্যালসিয়াম প্রয়োজন হয়, যা নবজাতকের শরীরে মোট ৩০ গ্রাম ক্যালসিয়াম হিসেবে জমা হয় [৫]। তবে বিস্ময়করভাবে এই ক্যালসিয়াম জোগাতে মায়ের হাড়ের ক্ষতি হয় না, কারণ মায়ের ক্ষুদ্রান্ত্রে ক্যালসিয়াম শোষণের হার ২০% থেকে বেড়ে ৪০% ছাড়িয়ে যায় [৫]। প্লাসেন্টার হরমোনগুলোর প্রভাবে মায়ের কিডনি ও গর্ভফুলে সক্রিয় ভিটামিন ডি (ক্যালসিট্রিওল) তৈরি দ্বিগুণ বেড়ে যায়, যা খাদ্যের সমস্ত ক্যালসিয়াম শুষে নিয়ে ভ্রূণের হাড়ের কাঁচামাল নিশ্চিত করে [৫]।'
            ),
            l(
              'At parturition and the onset of lactation, maternal calcium homeostasis undergoes a radical endocrine rewiring [5]. With the delivery of the placenta, circulating calcitriol drops precipitously, and maternal intestinal calcium absorption returns to normal non-pregnant levels [5]. Concurrently, the lactating breast produces 750 to 1,000 mL of milk daily, siphoning 250 to 350 mg of elemental calcium into milk to support rapid neonatal skeletal ossification [5]. Because dietary absorption cannot meet this daily loss, the lactating mammary gland assumes autonomous endocrine control over whole-body bone mineral metabolism [5].',
              'সন্তান প্রসব এবং স্তন্যদান শুরু হওয়ার সাথে সাথে মায়ের ক্যালসিয়াম নিয়ন্ত্রণ ব্যবস্থার সম্পূর্ণ পরিবর্তন ঘটে [৫]। প্লাসেন্টা বের হয়ে যাওয়ার সাথে সাথে রক্তে ভিটামিন ডির মাত্রা স্বাভাবিক অবস্থায় নেমে আসে এবং অন্ত্র থেকে বাড়তি ক্যালসিয়াম শোষণ বন্ধ হয়ে যায় [৫]। কিন্তু স্তনগ্রন্থি থেকে প্রতিদিন ৭৫০ থেকে ১,০০০ মিলি দুধে ২৫০ থেকে ৩৫০ মিলিগ্রাম খাঁটি ক্যালসিয়াম বের হয়ে শিশুর শরীরে যেতে থাকে [৫]। কেবল খাবারের ক্যালসিয়াম দিয়ে এই বিশাল ঘাটতি পূরণ করা সম্ভব হয় না বলে স্তনগ্রন্থি নিজেই একটি হরমোন গ্রন্থি হিসেবে আবির্ভূত হয় [৫]।'
            ),
            l(
              'The molecular driver of lactational bone mobilization is Parathyroid Hormone-Related Protein (PTHrP), synthesized by mammary alveolar epithelial cells [5]. Mammary calcium-sensing receptors (CaSR) monitor systemic and alveolar calcium; when milk calcium extraction is active, mammary cells secrete large quantities of PTHrP directly into the maternal circulation [5]. Systemic PTHrP binds to parathyroid hormone receptor-1 (PTH1R) on maternal osteoblasts, upregulating RANKL and suppressing osteoprotegerin (OPG) [5]. This stimulates intense osteoclastogenesis and osteocytic osteolysis, selectively excavating trabecular bone in the maternal vertebrae and femoral neck, temporarily reducing maternal bone mineral density by 5% to 10% over six months of exclusive breastfeeding [5].',
              'স্তন্যদানকালে মায়ের হাড়ের খনিজ স্থানান্তরের মূল চালিকাশক্তি হলো প্যারাথাইরয়েড হরমোন-রিলেটেড প্রোটিন (PTHrP), যা স্তনগ্রন্থির কোষ থেকে নিঃসৃত হয় [৫]। স্তনগ্রন্থির ক্যালসিয়াম সেন্সর রক্তের ক্যালসিয়াম পর্যবেক্ষণ করে বিপুল পরিমাণ PTHrP মায়ের রক্তে ছেড়ে দেয় [৫]। এই হরমোন মায়ের হাড়ের কোষের ওপর কাজ করে RANKL সংকেত চালু করে এবং অস্থিক্ষয়কারী অস্টিওক্লাস্ট কোষগুলোকে সক্রিয় করে তোলে [৫]। এর ফলে মায়ের মেরুদণ্ড ও উরুর হাড়ের ভেতর থেকে ক্যালসিয়াম গলে গিয়ে দুধে চলে আসে, যার ফলে ৬ মাসের বুকের দুধ খাওয়ানোর সময় সাময়িকভাবে মায়ের হাড়ের ঘনত্ব ৫ থেকে ১০ শতাংশ কমে যায় [৫]।'
            ),
            l(
              'This lactational skeletal resorption is entirely physiological and biologically distinct from pathological osteoporosis [5]. Upon infant weaning, suckling ceases, prolactin and mammary PTHrP production terminate within hours, and maternal ovarian estrogen synthesis resumes [5]. The withdrawal of PTHrP halts osteoclastic bone resorption, while the combination of mechanical skeletal loading and estrogen-driven osteoblast Wnt/beta-catenin signaling triggers rapid, intense bone remineralization [5]. Within 6 to 12 months post-weaning, maternal trabecular architecture is completely restored to pre-pregnancy baseline, and epidemiological studies confirm that parity and prolonged lactation do not increase postmenopausal fracture risk [5].',
              'স্তন্যদানকালীন এই হাড়ের ক্ষয় সম্পূর্ণ শারীরবৃত্তীয় এবং বার্ধক্যজনিত অস্টিওপোরোসিস থেকে সম্পূর্ণ আলাদা [৫]। শিশুকে বুকের দুধ খাওয়ানো বন্ধ করার কয়েক ঘণ্টার মধ্যেই স্তনগ্রন্থির PTHrP নিঃসরণ বন্ধ হয়ে যায় এবং মায়ের শরীরে ইস্ট্রোজেন হরমোন ফিরে আসে [৫]। এর ফলে হাড় ক্ষয় হওয়া তাৎক্ষণিকভাবে থেমে যায় এবং অস্টিওব্লাস্ট কোষগুলো তীব্র গতিতে নতুন হাড় তৈরি শুরু করে [৫]। দুধ ছাড়ানোর ৬ থেকে ১২ মাসের মধ্যে মায়ের হাড়ের পুরো ক্ষয় পুরোপুরি পূরণ হয়ে আগের চেয়েও শক্তিশালী হয়; এবং গবেষণায় প্রমাণিত যে একাধিক সন্তানকে দুধ খাওয়ালে ভবিষ্যতে হাড় ভাঙার কোনো ঝুঁকি বাড়ে না [৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l(
            '5. Advanced Glycobiology & Enzymology of Human Milk Oligosaccharides',
            '৫. মাতৃদুগ্ধের অলিমার শর্করার (HMO) উন্নত গ্লাইকোবায়োলজি ও এনজাইমবিজ্ঞান'
          ),
          paragraphs: [
            l(
              'Human milk contains a remarkable family of unconjugated complex glycans known as Human Milk Oligosaccharides (HMOs), present at concentrations of 10 to 20 g/L in colostrum and 5 to 12 g/L in mature milk [4]. Structural diversity is constructed by the sequential action of five core glycosyltransferases operating on a lactose (Gal-beta-1,4-Glc) backbone in the Golgi apparatus of lactating mammary epithelial cells [4]. These enzymes add N-acetylglucosamine in beta-1,3 or beta-1,6 linkages to form elongated core chains, followed by terminal decorations with L-fucose in alpha-1,2, alpha-1,3, or alpha-1,4 linkages, and sialic acid in alpha-2,3 or alpha-2,6 linkages, generating over 150 structurally distinct oligosaccharides [4].',
              'মাতৃদুগ্ধে এক অনন্য জটিল শর্করার পরিবার থাকে যাকে হিউম্যান মিল্ক অলিগোস্যাকারাইড (HMO) বলা হয়, যা শালদুধে প্রতি লিটারে ১০-২০ গ্রাম এবং পরিপক্ক দুধে ৫-১২ গ্রাম মাত্রায় বিদ্যমান [৪]। স্তনগ্রন্থির গলগি যন্ত্রের ভেতর ল্যাকটোজ অণুর সাথে বিশেষ পাঁচটি এনজাইম ধারাবাহিকভাবে কাজ করে এই জটিল শর্করাগুলো তৈরি করে [৪]। এই এনজাইমগুলো ল্যাকটোজের সাথে গ্লুকোসামিন, ফিউকোজ এবং সিয়ালিক অ্যাসিড অণু যুক্ত করে দেড় শতাধিক ভিন্ন ভিন্ন বৈচিত্র্যময় অলিমার শর্করা তৈরি করে যা পৃথিবীর অন্য কোনো প্রাণীর দুধে এত বৈচিত্র্যে পাওয়া যায় না [৪]।'
            ),
            l(
              'Maternal polymorphism at the Secretor (*FUT2*) and Lewis (*FUT3*) genetic loci establishes distinct HMO milk profile phenotypes [4]. The *FUT2* gene encodes alpha-1,2-fucosyltransferase, which catalyzes the synthesis of 2\'-fucosyllactose (2\'-FL) and lacto-N-fucopentaose I (LNFP-I) [4]. Women with at least one functional *FUT2* allele (SeSe or Sese; ~80% of human populations) are classified as "Secretors" and produce milk rich in 2\'-FL, which constitutes up to 30% of total HMO content [4]. Conversely, homozygous *FUT2* null women (se/se; non-secretors) lack alpha-1,2-fucosylated HMOs, producing milk dominated by 3-fucosyllactose (3-FL) and lacto-N-tetraose (LNT), conferring altered antimicrobial properties [4].',
              'মায়ের Secretor (FUT2) এবং Lewis (FUT3) জিনগত বিন্যাস মাতৃদুগ্ধের HMO-এর ধরণ ও কার্যক্ষমতা নিয়ন্ত্রণ করে [৪]। FUT2 জিনটি আলফা-১,২-ফিউকোসিলট্রান্সফারেজ এনজাইম তৈরি করে যা মাতৃদুগ্ধের সবচেয়ে শক্তিশালী উপাদান ২-ফিউকোসিলল্যাকটোজ (2\'-FL) তৈরি করে [৪]। প্রায় ৮০ শতাংশ নারীর এই জিন সক্রিয় থাকে এবং তাঁদের দুধে প্রচুর 2\'-FL থাকে যা শিশুর সুরক্ষায় প্রধান ভূমিকা পালন করে [৪]। আর বাকি ২০ শতাংশ নারীর এই জিন নিষ্ক্রিয় থাকায় তাঁদের দুধে অন্য ধরণের জটিল শর্করা প্রাধান্য পায়, যা শিশুর রোগপ্রতিরোধ ক্ষমতায় ভিন্ন ধরণের সুরক্ষা প্রদান করে [৪]।'
            ),
            l(
              'The evolutionary rationale of HMOs lies in the co-evolved metabolic symbiosis with *Bifidobacterium longum* subsp. *infantis* in the infant colonic lumen [4]. Unlike the immature human infant digestive tract—which lacks the brush-border glycosidases required to cleave HMO glycosidic bonds—*B. infantis* possesses a specialized 40-kilobase genomic island encoding ABC transporter cassettes (FL-ABC), intracellular beta-galactosidases, and fucosidases [4]. Intact HMOs are actively transported inside the bacterial cytoplasm and fermented into short-chain fatty acids (acetate and lactate) at an optimal 3:2 ratio [4]. This massive production of acetate acidifies the luminal pH to <5.0, inhibiting the growth of pathogenic Enterobacteriaceae and Clostridioides species [4].',
              'মাতৃদুগ্ধের এই জটিল শর্করার মূল উদ্দেশ্য হলো শিশুর অন্ত্রের বন্ধু ব্যাকটেরিয়া *Bifidobacterium infantis*-এর সাথে এক বিস্ময়কর সহ-বিবর্তনীয় বন্ধুত্ব রক্ষা করা [৪]। শিশুর পরিপাকতন্ত্রে এই শর্করা হজম করার কোনো এনজাইম নেই; ফলে এগুলো অক্ষত অবস্থায় কোলনে পৌঁছে যায় [৪]। সেখানে কেবল *B. infantis* ব্যাকটেরিয়াই তার বিশেষ জিনগত পাম্প দিয়ে এই পুরো শর্করাটিকে কোষের ভেতর টেনে নেয় এবং গেঁজিয়ে প্রচুর এসিটেট ও ল্যাকটিক অ্যাসিড তৈরি করে [৪]। এই অ্যাসিড কোলনের পিএইচ ৫-এর নিচে নামিয়ে দেয়, যার ফলে ক্ষতিকর ই-কোলাই ও অন্যান্য জীবাণু অম্লীয় পরিবেশে নিমিষেই ধ্বংস হয়ে যায় [৪]।'
            ),
            l(
              'Beyond their prebiotic actions, HMOs function as soluble receptor decoys that intercept pathogenic microorganisms [4]. Many virulent mucosal pathogens, including rotavirus, norovirus, *Campylobacter jejuni*, enterotoxigenic *Escherichia coli* (ETEC), and respiratory syncytial virus (RSV), initiate infection by binding to mucosal glycans displayed on host epithelial cell surfaces [4]. Structurally identical to cell-surface antigens, free luminal HMOs competitively bind to pathogen lectins and viral capsids, neutralizing their attachment sites and sweeping them out in feces [4]. In premature infants, this anti-adhesive action reduces the incidence of necrotizing enterocolitis (NEC) by over 50%, cementing HMOs as vital biological defense molecules [4].',
              'উপকারী ব্যাকটেরিয়ার খাদ্য হওয়ার পাশাপাশি HMO অণুগুলো শিশুর অন্ত্রের নিরাপত্তা প্রহরী হিসেবে কাজ করে [৪]। রোটাভাইরাস, নোরোভাইরাস বা ক্ষতিকর ই-কোলাই জীবাণুগুলো অন্ত্রের কোষপর্দায় কামড় বসিয়ে ডায়রিয়া তৈরি করার চেষ্টা করে [৪]। মাতৃদুগ্ধের মুক্ত HMO অণুগুলোর গঠন অন্ত্রের কোষের মতো হওয়ায় ক্ষতিকর জীবাণুগুলো বিভ্রান্ত হয়ে কোষের বদলে HMO অণুর সাথে আটকে যায় [৪]। ফলে জীবাণু অন্ত্রের ক্ষতি না করে মলের সাথে বের হয়ে যায়; যা অপরিণত নবজাতকদের ক্ষেত্রে মারাত্মক অন্ত্রের পচন বা নেক্রোটাইজিং এন্টারোকোলাইটিস (NEC) হওয়ার ঝুঁকি শতকরা ৫০ ভাগের বেশি কমিয়ে দেয় [৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l(
            '6. Translational Precision Medicine in Perinatal Nutrition',
            '৬. পেরিনেটাল পুষ্টিবিজ্ঞানের অনুবাদী প্রিসিশন মেডিসিন ও সারসংক্ষেপ'
          ),
          paragraphs: [
            l(
              'The Developmental Origins of Health and Disease (DOHaD) paradigm establishes that maternal periconceptional and gestational nutrition programs the long-term metabolic trajectory of the offspring [1, 6]. Fetal adaptation to maternal nutrient restriction or gestational hyperglycemia induces permanent epigenetic remodeling via DNA and histone methylation of metabolic master regulators (including *PPARG*, *PDX1*, and *IGF2*) [1, 6]. These in utero adaptations program permanent structural deficits, including reduced nephron endowment and diminished pancreatic beta-cell mass, predisposing the adult offspring to hypertension, insulin resistance, and cardiovascular multimorbidity [1, 6].',
              'ডেভিড বার্কারের ডিওএইচএডি (DOHaD) তত্ত্ব প্রমাণ করে যে গর্ভকালীন পুষ্টি শিশুর ভবিষ্যৎ জীবনের সমস্ত দীর্ঘমেয়াদি রোগব্যাধির ভিত্তি তৈরি করে [১, ৬]। গর্ভাবস্থায় মায়ের পুষ্টিহীনতা বা ডায়াবেটিসের কারণে ভ্রূণের গুরুত্বপূর্ণ জিনের ডিএনএ মিথাইলেশনে স্থায়ী ক্ষতিকর রূপান্তর ঘটে [১, ৬]। ফলে গর্ভের ভেতরেই শিশুর কিডনির ছাঁকনির সংখ্যা কমে যায় এবং অগ্ন্যাশয়ের বিটা-কোষের সংখ্যা চিরতরে সীমিত হয়ে যায়; যা পরবর্তীতে প্রাপ্তবয়স্ক বয়সে ডায়াবেটিস, উচ্চ রক্তচাপ ও হৃদরোগের প্রধান কারণ হিসেবে আবির্ভূত হয় [১, ৬]।'
            ),
            l(
              'Periconceptional folic acid supplementation is a non-negotiable biological mandate that must precede clinical conception [1]. Because primary neural tube closure concludes between embryonic days 21 and 28—a developmental window preceding missed menses in many women—initiating folic acid after pregnancy recognition fails to prevent primary dysraphic malformations [1]. Universal fortification and targeted preconceptional supplementation (400 mcg daily for low risk; 4.0 to 5.0 mg daily for high risk, such as anti-epileptic drug therapy or prior affected pregnancy) represent the premier paradigm of evidence-based primary preventive medicine [1].',
              'গর্ভধারণপূর্ব ফলিক অ্যাসিড গ্রহণ কোনো ঐচ্ছিক বিষয় নয়, এটি একটি অলঙ্ঘনীয় জৈবিক বাধ্যবাধকতা যা গর্ভধারণের আগেই শুরু করতে হয় [১]। গর্ভধারণের ২১ থেকে ২৮তম দিনের মধ্যে ভ্রূণের স্নায়ুনালি বন্ধের কাজ শেষ হয়ে যায়, যা অধিকাংশ নারী গর্ভের খবর জানার আগেই ঘটে থাকে; ফলে দেরিতে ফলিক অ্যাসিড খেলে জন্মগত ত্রুটি রোধ করা সম্ভব হয় না [১]। তাই গর্ভধারণের অন্তত ১-৩ মাস আগে থেকে সাধারণ নারীদের দৈনিক ৪০০ মাইক্রোগ্রাম এবং মৃগীরোগী বা পূর্বের ত্রুটির ইতিহাস থাকা মায়েদের দৈনিক ৪-৫ মিলিগ্রাম উচ্চমাত্রার ফলিক অ্যাসিড নিশ্চিত করা আধুনিক চিকিৎসার অন্যতম প্রধান লক্ষ্য [১]।'
            ),
            l(
              'Precision Medical Nutrition Therapy (MNT) in Gestational Diabetes Mellitus decouples maternal glycemic excursions from fetal hyperinsulinism [3, 6]. Structuring dietary carbohydrates to 35% to 40% of daily caloric intake, distributed across 3 small meals and 3 snacks with breakfast restricted to 15 to 30 grams, prevents maternal postprandial glucose excursions while maintaining the mandatory 175 g/day carbohydrate threshold required to prevent maternal ketonemia and fetal neurotoxicity [3, 6]. Adhering to Institute of Medicine (IOM) gestational weight gain targets further attenuates placental cytokine secretion and optimizes neonatal birth weight [3, 6].',
              'গর্ভকালীন ডায়াবেটিসে প্রিসিশন মেডিকেল নিউট্রিশন থেরাপির মাধ্যমে মায়ের রক্তের চিনি স্বাভাবিক রেখে ভ্রূণের অতিরিক্ত বৃদ্ধি সফলভাবে প্রতিরোধ করা যায় [৩, ৬]। মোট শক্তির ৩৫-৪০% কার্বোহাইড্রেটে সীমাবদ্ধ রেখে তা দিনে ৬ বারে ভাগ করে খাওয়া (সকালের নাস্তায় ১৫-৩০ গ্রাম শর্করা রেখে এবং রাতে ঘুমানোর আগে শর্করার সাথে প্রোটিন গ্রহণ) মায়ের রক্তে চিনির ঢেউ থামিয়ে দেয়; তবে বাচ্চার মস্তিষ্কের সুরক্ষা ও কিটোন বিষক্রিয়া প্রতিরোধে এটি কখনই দৈনিক ১৭৫ গ্রামের নিচে নামানো যাবে না [৩, ৬]।'
            ),
            l(
              'Exclusive breastfeeding for the first six months of life provides an unmatched biological blueprint for infant immune and metabolic maturation [4, 5]. Human milk oligosaccharides (HMOs) engineer an acidic, bifidobacteria-dominated colonic ecosystem that suppresses pathogen colonization and matures gut mucosal tight junctions, while secretory IgA establishes a non-inflammatory immune barrier [4]. Simultaneously, lactational mammary PTHrP calcium kinetics protect maternal skeletal integrity through post-weaning remineralization, establishing breastfeeding as an irreplaceable bidirectional health investment for both mother and child [4, 5].',
              'জীবনের প্রথম ছয় মাসে শুধুমাত্র মায়ের বুকের দুধ খাওয়ানো মা ও শিশু উভয়ের দীর্ঘমেয়াদি স্বাস্থ্যের জন্য এক অতুলনীয় বিনিয়োগ [৪, ৫]। মাতৃদুগ্ধের জটিল শর্করা (HMO) শিশুর অন্ত্রে উপকারী ব্যাকটেরিয়ার পরিবেশ তৈরি করে বিষাক্ত জীবাণু দূর করে এবং অন্ত্রের রোগপ্রতিরোধ ক্ষমতা পরিপক্ক করে [৪]। একই সাথে স্তনগ্রন্থির হরমোনীয় রূপান্তর মায়ের হাড়ের স্বাস্থ্য রক্ষা করে এবং দুধ ছাড়ানোর পর মায়ের হাড়ের সম্পূর্ণ প্রাকৃতিক পুনর্গঠন নিশ্চিত করে মা ও শিশু উভয়ের আজীবন সুস্থতা সুরক্ষিত রাখে [৪, ৫]।'
            ),
          ],
        },

      ],
    },
  },
  assessment: {
    question: l(
      'A 32-year-old pregnant female at 28 weeks gestation is diagnosed with Gestational Diabetes Mellitus (GDM). Why does maternal hyperglycemia cause fetal macrosomia (birth weight > 4,000 g) and immediate neonatal hypoglycemia at delivery, and what is the underlying molecular endocrinology governing this phenomenon?',
      'গর্ভের ২৮তম সপ্তাহে ৩২ বছর বয়সী একজন নারীর গর্ভকালীন ডায়াবেটিস (GDM) ধরা পড়েছে। মায়ের রক্তের অতিরিক্ত চিনি কেন ভ্রূণের অতিরিক্ত ওজন বৃদ্ধি (ম্যাক্রোসোমিয়া, ৪ কেজির বেশি) ঘটায় এবং জন্মের পরপরই নবজাতকের রক্তে চিনির মারাত্মক পতন (হাইপোগ্লাইসেমিয়া) তৈরি করে, এবং এর পেছনের হরমোনজনিত আণবিক কারণ কী?'
    ),
    options: [
      l(
        'Maternal glucose crosses the placenta via facilitated GLUT1 transporters but maternal insulin cannot cross; the resulting fetal hyperglycemia stimulates fetal pancreatic beta cells to hypersecrete insulin, which acts as a potent anabolic hormone driving fetal fat accretion and macrosomia, followed by acute rebound hypoglycemia when the maternal glucose supply is severed at birth while fetal hyperinsulinism persists.',
        'মায়ের গ্লুকোজ GLUT1 চ্যানেলের মাধ্যমে গর্ভফুল পার হতে পারে কিন্তু মায়ের ইনসুলিন পারে না; ফলে ভ্রূণের রক্তে চিনি বেড়ে গিয়ে ভ্রূণের নিজস্ব অগ্ন্যাশয় থেকে প্রচুর ইনসুলিন তৈরি করায়, যা শক্তিশালী অ্যানাবলিক হরমোন হিসেবে বাচ্চার চর্বি ও ওজন অস্বাভাবিক বাড়িয়ে দেয় (ম্যাক্রোসোমিয়া); জন্মের পর নাড়ি কাটার সাথে সাথে মায়ের গ্লুকোজ বন্ধ হলেও বাচ্চার রক্তের অতিরিক্ত ইনসুলিন চোখের পলকে বাচ্চার রক্তে চিনি শূন্য করে রিবাউন্ড হাইপোগ্লাইসেমিয়া ঘটায়।'
      ),
      l(
        'Maternal insulin crosses the placenta and directly injects fat cells into the fetal brain, causing swelling.',
        'মায়ের ইনসুলিন গর্ভফুল পার হয়ে সরাসরি ভ্রূণের মস্তিষ্কে চর্বি ঢুকিয়ে দিয়ে মস্তিষ্ক ফুলিয়ে দেয়।'
      ),
      l(
        'Fetal kidneys turn glucose into pure bone marrow, causing the skeleton to weigh over 10 kilograms.',
        'ভ্রূণের কিডনি গ্লুকোজকে সরাসরি হাড়ের মজ্জায় রূপান্তর করে যার ফলে কঙ্কালের ওজন ১০ কেজির বেশি হয়ে যায়।'
      ),
      l(
        'The placenta destroys 100% of fetal blood cells, causing severe swelling that appears as macrosomia.',
        'গর্ভফুল ভ্রূণের সমস্ত রক্তকণিকা ধ্বংস করে ফেলে যার ফলে শরীর ফুলে গিয়ে ম্যাক্রোসোমিয়ার মতো দেখায়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'This sequence embodies the Pedersen Hypothesis of diabetic pregnancy. Maternal glucose freely crosses the placenta down a concentration gradient via facilitated GLUT1 transporters, while maternal insulin is completely blocked by the syncytiotrophoblast barrier. The influx of maternal glucose into the fetal circulation triggers hyperplasia of fetal pancreatic beta cells, driving profound fetal hyperinsulinism. Because insulin acts as a powerful anabolic growth factor in utero, it stimulates fetal cellular glucose uptake, glycogen storage, and lipogenesis, producing macrosomia. At delivery, the continuous transplacental glucose infusion is abruptly halted upon umbilical cord clamping, whereas the hyperplastic fetal beta cells continue to hypersecrete insulin into the infant circulation, rapidly clearing circulating glucose and driving precipitous neonatal hypoglycemia.',
      'এটি হলো গর্ভকালীন ডায়াবেটিসের বিখ্যাত পেডারসেন তত্ত্ব। মায়ের গ্লুকোজ গর্ভফুলের GLUT1 চ্যানেল দিয়ে অনায়াসে বাচ্চার রক্তে ঢুকতে পারে, কিন্তু মায়ের ইনসুলিন গর্ভফুল পার হতে পারে না। এই অতিরিক্ত চিনির ধাক্কায় বাচ্চার নিজের অগ্ন্যাশয় প্রচুর নিজস্ব ইনসুলিন তৈরি করে। এই ভ্রূণীয় ইনসুলিন মারাত্মক অ্যানাবলিক হরমোন হিসেবে বাচ্চার শরীরে চর্বি ও মাংস জমিয়ে অস্বাভাবিক ভারী (ম্যাক্রোসোমিয়া) করে তোলে। জন্মের সাথে সাথে যখন নাড়ি কেটে মায়ের গ্লুকোজের লাইন বন্ধ করে দেওয়া হয় কিন্তু বাচ্চার রক্তে তখনও প্রচুর ইনসুলিন বইতে থাকে, তখন সেই ইনসুলিন বাচ্চার রক্তের অবশিষ্ট চিনি কোষের ভেতর ঢুকিয়ে রক্তকে সম্পূর্ণ চিনিশূন্য করে প্রাণঘাতী রিবাউন্ড হাইপোগ্লাইসেমিয়া তৈরি করে।'
    ),
  },
}
