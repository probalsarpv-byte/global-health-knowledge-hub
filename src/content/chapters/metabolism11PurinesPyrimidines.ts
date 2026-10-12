import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const nucleotideRefs = [
  {
    id: 'lehninger-biochem-8e-ch22',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 22: Biosynthesis of Amino Acids, Nucleotides, and Related Molecules',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch33',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 33: Metabolism of Purine & Pyrimidine Nucleotides",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch25',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 25: The Biosynthesis of Nucleotides',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'marks-medbiochem-6e-ch41',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 41: Synthesis and Degradation of Nucleotides",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

const nucleotideOrgan3DData: Organ3DExplorerContent = {
  title: l('3D Inter-Organ Nucleotide Economy, Gout & Chemotherapy Targets', '৩ডি আন্তঃ-অঙ্গ নিউক্লিওটাইড অর্থনীতি, গেঁটেবাত ও কেমোথেরাপির লক্ষ্যবস্তু'),
  disclaimer: l(
    'Interactive 3D anatomical teaching visualization: touch or drag to rotate in 3D coordinate space; explore how the liver, bone marrow skeleton, and kidneys coordinate nucleotide synthesis, salvage, urate clearance, and pharmacological vulnerability.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘোরাতে স্পর্শ বা ড্র্যাগ করুন; যকৃৎ, অস্থিমজ্জা ও বৃক্ক কীভাবে নিউক্লিওটাইড সংশ্লেষ, সালভেজ, ইউরেট নিষ্কাশন ও কেমোথেরাপি সংবেদনশীলতা নিয়ন্ত্রণ করে তা প্রত্যক্ষ করুন।'
  ),
  description: l(
    'Nucleotide economy spans the liver (primary de novo purine/pyrimidine factory and xanthine oxidase site), the skeleton and bone marrow (rapidly proliferating hematopoietic stem cells dependent on thymidylate synthesis), and the kidneys (filtration and excretion of poorly soluble uric acid).',
    'নিউক্লিওটাইড অর্থনীতি সমগ্র মানবদেহে বিস্তৃত: যকৃৎ (ডি নোভো সংশ্লেষের প্রধান কারখানা ও জ্যান্থিন অক্সিডেজ কেন্দ্র), কঙ্কাল ও অস্থিমজ্জা (দ্রুত বিভাজনশীল রক্তকোষ যা থাইমিডিলেট সংশ্লেষের ওপর নির্ভরশীল) এবং বৃক্ক (স্বল্প দ্রবণীয় ইউরিক অ্যাসিড ফিল্ট্রেশন ও নির্গমন)।'
  ),
  organs: [
    {
      id: 'organ-liver-nucleotide',
      name: l('Liver (De Novo Nucleotide Synthesis & Xanthine Oxidase)', 'যকৃৎ (ডি নোভো নিউক্লিওটাইড সংশ্লেষ ও জ্যান্থিন অক্সিডেজ)'),
      latinName: 'Hepar',
      system: l('Digestive / Metabolic System', 'পরিপাক ও বিপাকীয় তন্ত্র'),
      cavity: l('Abdominal Cavity (Right Hypochondrium)', 'উদর গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 28, y: 218, z: 12 },
      color: '#b45309',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'The liver is the principal human factory for de novo purine and pyrimidine biosynthesis, exporting nucleosides and bases to peripheral tissues that lack robust de novo synthetic machinery.',
        'যকৃৎ হলো মানবদেহের ডি নোভো পিউরিন ও পিরিমিডিন সংশ্লেষের প্রধান কারখানা; এটি প্রান্তীয় কোষে নিউক্লিওসাইড ও ক্ষারক রপ্তানি করে যা ওই কোষগুলোর জন্য অপরিহার্য।'
      ),
      spatialRelations: l(
        'Located in the right upper abdominal quadrant; hepatocytes express high levels of PRPP amidotransferase, CAD complex, and xanthine oxidase adjacent to sinusoidal microcirculation.',
        'উদর গহ্বরের ডান ঊর্ধ্বাংশে অবস্থিত; হেপাটোসাইট কোষে প্রচুর PRPP অ্যামিডোট্রান্সফারেজ, CAD কমপ্লেক্স এবং জ্যান্থিন অক্সিডেজ বিদ্যমান যা সাইনুসয়েড রক্তপ্রবাহের কাছে সক্রিয় থাকে।'
      ),
      physiology: l(
        'Executes multi-step de novo purine assembly onto PRPP and degrades surplus purines into uric acid via hepatic xanthine oxidase; allopurinol and febuxostat act primarily in hepatic tissue.',
        'PRPP-এর ওপর ডি নোভো পিউরিন বলয় তৈরি করে এবং উদ্বৃত্ত পিউরিনকে হেপাটিক জ্যান্থিন অক্সিডেজের মাধ্যমে ইউরিক অ্যাসিডে পরিণত করে; অ্যালোপিউরিনল মূলত এখানেই কাজ করে।'
      ),
      nutritionConnection: l(
        'High dietary purine intake (organ meats, anchovies, beer) overwhelms hepatic salvage capacity, accelerating xanthine oxidase flux and precipitating acute gouty attacks.',
        'খাদ্যে অতিরিক্ত পিউরিন (কলিজা, সামুদ্রিক মাছ, অ্যালকোহল) যকৃতের সালভেজ ধারণক্ষমতাকে ছাড়িয়ে যায়, ফলে জ্যান্থিন অক্সিডেজের মাধ্যমে দ্রুত ইউরিক অ্যাসিড বেড়ে গেঁটেবাত দেখা দেয়।'
      ),
      clinicalSignificance: l(
        'Hepatic xanthine oxidase overactivity causes hyperuricemia; conversely, severe hepatocellular injury impairs de novo nucleotide export to rapidly proliferating peripheral tissues.',
        'যকৃতের জ্যান্থিন অক্সিডেজের অতিসক্রিয়তায় হাইপারইউরিসিমিয়া হয়; পক্ষান্তরে তীব্র যকৃত ক্ষতি প্রান্তীয় দ্রুত বিভাজনশীল কোষে নিউক্লিওটাইড সরবরাহ মারাত্মকভাবে বাধাগ্রস্ত করে।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-skeleton-nucleotide',
      name: l('Skeleton & Bone Marrow (Replication & Podagra Joint Sites)', 'কঙ্কাল ও অস্থিমজ্জা (কোষ বিভাজন ও পডাগ্ৰা অস্থিসন্ধি)'),
      latinName: 'Systema skeletale et Medulla ossium',
      system: l('Skeletal & Hematopoietic System', 'কঙ্কাল ও রক্তোৎপাদী তন্ত্র'),
      cavity: l('Axial and Appendicular Skeleton', 'অক্ষীয় ও উপাঙ্গীয় কঙ্কাল'),
      position3D: { x: 0, y: 130, z: -8 },
      color: '#e2e8f0',
      highlightColor: '#38bdf8',
      shapeType: 'skeleton',
      description: l(
        'Bone marrow contains rapidly dividing hematopoietic progenitors with immense thymidylate demands, while peripheral synovial joints (first metatarsophalangeal) serve as nucleation sites for monosodium urate crystal deposition.',
        'অস্থিমজ্জার দ্রুত বিভাজনশীল স্টেম কোষগুলোর প্রচুর থাইমিডিলেট (dTMP) প্রয়োজন হয়, অপরদিকে প্রান্তীয় অস্থিসন্ধিগুলোতে (যেমন বুড়ো আঙুলের জয়েন্ট) অতিরিক্ত ইউরিক অ্যাসিড স্ফটিক হিসেবে জমা হয়।'
      ),
      spatialRelations: l(
        'Spans spongy bone cavities housing erythroid and myeloid precursors, down to distal lower limb joints where cooler synovial temperatures lower monosodium urate solubility below 6.8 mg/dL.',
        'স্পঞ্জি অস্থির ভেতরের মজ্জা গহ্বর থেকে শুরু করে পায়ের প্রান্তীয় সন্ধি পর্যন্ত বিস্তৃত, যেখানে কম তাপমাত্রার কারণে মনোসোডিয়াম ইউরেট স্ফটিকের দ্রাব্যতা হ্রাস পেয়ে দ্রুত তলানি পড়ে।'
      ),
      physiology: l(
        'Thymidylate synthase converts dUMP to dTMP to fuel continuous DNA synthesis for millions of daily blood cells; monosodium urate microcrystals activate the synovial NLRP3 inflammasome.',
        'থাইমিডিলেট সিন্থেজ dUMP থেকে dTMP তৈরি করে রক্তের কোষগুলোর অব্যাহত ডিএনএ রেপ্লিকেশন নিশ্চিত করে; অন্যদিকে ইউরেট স্ফটিক সাইনোভিয়াল NLRP3 ইনফ্লামাসোমকে তীব্রভাবে উত্তেজিত করে।'
      ),
      nutritionConnection: l(
        'Dietary folate and vitamin B12 deficiencies impair thymidylate synthase coupling, halting DNA replication and causing bone marrow megaloblastic arrest (macrocytic anemia).',
        'খাদ্যে ফোলেট ও ভিটামিন বি১২-এর ঘাটতি থাইমিডিলেট সিন্থেজ চক্রকে স্তব্ধ করে দেয়, যার ফলে অস্থিমজ্জায় ডিএনএ সংশ্লেষ বন্ধ হয়ে মেগালোব্লাস্টিক রক্তস্বল্পতা তৈরি হয়।'
      ),
      clinicalSignificance: l(
        'Targeted by antineoplastic antifolates (methotrexate) and fluoropyrimidines (5-FU); urate supersaturation causes excruciating first metatarsophalangeal arthritis (podagra) and tophi.',
        'ক্যান্সার চিকিৎসায় মেথোট্রেক্সেট ও ৫-এফইউ দ্বারা অস্থিমজ্জা প্রভাবিত হয়; অন্যদিকে রক্তে অতিরিক্ত ইউরিক অ্যাসিড বুড়ো আঙুলের তীব্র প্রদাহ (পডাগ্ৰা) ও টোফাই সৃষ্টি করে।'
      ),
      sectionId: 'practice',
    },
    {
      id: 'organ-kidneys-nucleotide',
      name: l('Kidneys (Uric Acid Filtration, URAT1 Reabsorption & Nephropathy)', 'বৃক্ক (ইউরিক অ্যাসিড ফিল্ট্রেশন, URAT1 পুনঃশোষণ ও নেফ্রোপ্যাথি)'),
      latinName: 'Renes',
      system: l('Urinary / Excretory System', 'রেচন তন্ত্র'),
      cavity: l('Retroperitoneal Space (T12-L3)', 'রেট্রোপেরিটোনিয়াল স্থান (T12-L3)'),
      position3D: { x: -32, y: 172, z: 22 },
      color: '#dc2626',
      highlightColor: '#f87171',
      shapeType: 'kidneys',
      description: l(
        'The kidneys filter uric acid at the glomerulus, reabsorb ~90% via proximal tubular URAT1 and GLUT9 transporters, and secrete a regulated fraction into urine for permanent nitrogen excretion.',
        'বৃক্ক গ্লোমেরুলাসে ইউরিক অ্যাসিড ফিল্টার করে, প্রক্সিমাল টিউবিউলের URAT1 ও GLUT9 দিয়ে প্রায় ৯০% পুনঃশোষণ করে এবং অবশিষ্ট অংশ মূত্রের মাধ্যমে বের করে দেয়।'
      ),
      spatialRelations: l(
        'Paired retroperitoneal organs behind the abdominal cavity; acidic urine in the collecting ducts and renal calyces lowers urate ionization (pKa 5.4), favoring precipitation.',
        'উদর গহ্বরের পেছনে অবস্থিত একজোড়া অঙ্গ; রেনাল কালেক্টিং ডাক্টের অম্লীয় মূত্রে ইউরেটের দ্রাব্যতা কমে যায়, যার ফলে পাথর তৈরি হওয়ার তীব্র ঝুঁকি সৃষ্টি হয়।'
      ),
      physiology: l(
        'Filters 70% of total daily uric acid burden; proximal URAT1 exchanges luminal urate for intracellular anions. Uricosuric drugs (probenecid) inhibit URAT1 to promote renal urate clearance.',
        'দৈনিক মোট ইউরিক অ্যাসিডের ৭০% বৃক্ক দিয়ে বের হয়; প্রক্সিমাল URAT1 লুমেন থেকে ইউরেট রক্তে ফিরিয়ে আনে। প্রোবেনেসিড ওষুধটি এই URAT1 বন্ধ করে প্রস্রাবে ইউরিক অ্যাসিড বের করে দেয়।'
      ),
      nutritionConnection: l(
        'Adequate hydration and urine alkalinization (potassium citrate, citrus fruits) raise luminal pH above 6.0, dramatically increasing urate solubility and preventing crystal precipitation.',
        'পর্যাপ্ত পানি পান ও মূত্র ক্ষারীয়করণ (পটাশিয়াম সাইট্রেট, লেবুজাতীয় ফল) লুমেন পিএইচ ৬.০ এর ওপরে তুলে দেয়, যা ইউরেটের দ্রাব্যতা বহুগুণ বাড়িয়ে পাথর তৈরি প্রতিরোধ করে।'
      ),
      clinicalSignificance: l(
        'Hyperuricemia causes radiolucent uric acid nephrolithiasis and acute urate nephropathy; massive tumor lysis syndrome floods renal tubules with crystals, causing acute renal failure.',
        'রক্তে অতিরিক্ত ইউরিক অ্যাসিড এক্স-রেতে না দেখা যাওয়া পাথর এবং টিউমার লাইসিস সিন্ড্রোমে নালিকা আটকে দিয়ে আকস্মিক কিডনি ফেইলিউর বা একিউট রেনাল ফেইলিউর ঘটাতে পারে।'
      ),
      sectionId: 'integration',
    },
  ],
}

export const metabolism11PurinesPyrimidinesLesson: LessonTopic = {
  id: 'topic.metabolism.purine-pyrimidine-metabolism',
  slug: 'purine-pyrimidine-metabolism',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('11 · Purine & Pyrimidine Metabolism', '১১ · পিউরিন ও পিরিমিডিন বিপাক'),
  summary: l(
    'De novo purine synthesis on PRPP, reciprocal AMP/GMP branchpoint bioenergetics, HGPRT salvage in Lesch-Nyhan syndrome, xanthine oxidase and gout pharmacotherapy, cytosolic CAD multienzyme pyrimidine construction, UMP synthase and hereditary orotic aciduria, ribonucleotide reductase (RNR) regulation, and thymidylate synthase antineoplastic chemotherapy.',
    'PRPP-এর ওপর ডি নোভো পিউরিন সংশ্লেষ, বিপরীতমুখী AMP/GMP শাখা বায়োএনার্জেটিক্স, লেশ-নাইহান সিন্ড্রোমে HGPRT সালভেজ, জ্যান্থিন অক্সিডেজ ও গেঁটেবাত চিকিৎসাবিজ্ঞান, সাইটোসলিক CAD মাল্টি-এনজাইম পিরিমিডিন গঠন, UMP সিন্থেজ ও বংশগত ওরোটিক অ্যাসিডুরিয়া, রিবোনিউক্লিওটাইড রিডাক্টেজ এবং থাইমিডিলেট সিন্থেজ বিরোধী ক্যান্সার কেমোথেরাপি।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Contrast the molecular architecture of de novo purine assembly (built directly onto PRPP) with pyrimidine assembly (6-membered base synthesized first by CAD before PRPP attachment).',
      'ডি নোভো পিউরিন সংশ্লেষ (সরাসরি PRPP-এর ওপর বলয় তৈরি) এবং পিরিমিডিন সংশ্লেষের (CAD দ্বারা প্রথমে বলয় তৈরি করে পরে PRPP যুক্ত করা) আণবিক পার্থক্যের নিখুঁত তুলনা করা।',
    ),
    l(
      'Trace purine salvage reactions catalyzed by HGPRT and APRT, and explain the neurological and biochemical pathophysiology of Lesch-Nyhan syndrome and severe combined immunodeficiency (SCID).',
      'HGPRT ও APRT দ্বারা পরিচালিত পিউরিন সালভেজ বিক্রিয়া ব্যাখ্যা করা এবং লেশ-নাইহান সিন্ড্রোম ও সিভিয়ার কম্বাইন্ড ইমিউনোডেফিসিয়েন্সি (SCID)-র স্নায়বিক ও রাসায়নিক ক্রিয়াকৌশল নিরূপণ করা।',
    ),
    l(
      'Analyze the pharmacological mechanisms of xanthine oxidase inhibitors (allopurinol, febuxostat), ribonucleotide reductase inhibitors (hydroxyurea), and thymidylate cycle antineoplastics (5-FU, methotrexate).',
      'জ্যান্থিন অক্সিডেজ ইনহিবিটর (অ্যালোপিউরিনল, ফেবুক্সোস্ট্যাট), রিবোনিউক্লিওটাইড রিডাক্টেজ ইনহিবিটর (হাইড্রোক্সিইউরিয়া) এবং থাইমিডিলেট চক্র বিরোধী অ্যান্টিনিওপ্লাস্টিক ড্রাগস (৫-এফইউ, মেথোট্রেক্সেট)-এর কার্যপদ্ধতি বিশ্লেষণ করা।',
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.carbon-skeletons-specialized-products'],
  relatedTopicIds: ['topic.metabolism.heme-bilirubin-metabolism', 'topic.metabolism.amino-acid-catabolism-urea'],
  references: nucleotideRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch22', 'harpers-biochem-32e-ch33'],
    structure: ['harpers-biochem-32e-ch33', 'marks-medbiochem-6e-ch41'],
    mechanism: ['lehninger-biochem-8e-ch22', 'berg-biochem-9e-ch25'],
    integration: ['berg-biochem-9e-ch25', 'marks-medbiochem-6e-ch41'],
    practice: ['lehninger-biochem-8e-ch22', 'harpers-biochem-32e-ch33'],
    takeaways: ['lehninger-biochem-8e-ch22', 'marks-medbiochem-6e-ch41'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Cellular Logic: De Novo vs Salvage Economy', '১. কোষীয় যুক্তি: ডি নোভো বনাম সালভেজ অর্থনীতি'), sectionId: 'introduction' },
      { id: 'sec-purines', label: l('2. De Novo Purine Assembly & Reciprocal Branching', '২. ডি নোভো পিউরিন গঠন ও পারস্পরিক শাখা নিয়ন্ত্রণ'), sectionId: 'structure' },
      { id: 'sec-pyrimidines', label: l('3. Pyrimidine Biosynthesis & CAD Architecture', '৩. পিরিমিডিন জৈবসংশ্লেষ ও CAD কমপ্লেক্সের গঠন'), sectionId: 'mechanism' },
      { id: 'sec-deoxy', label: l('4. Ribonucleotide Reductase & Thymidylate Cycle', '৪. রিবোনিউক্লিওটাইড রিডাক্টেজ ও থাইমিডিলেট চক্র'), sectionId: 'integration' },
      { id: 'sec-gout-onco', label: l('5. Hyperuricemia, Gout & Chemotherapeutic Targets', '৫. হাইপারইউরিসিমিয়া, গেঁটেবাত ও কেমোথেরাপির লক্ষ্যবস্তু'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Review & Synthesis Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা ও মূল শিক্ষা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('PRPP (5-Phosphoribosyl-1-Pyrophosphate)', 'PRPP (৫-ফসফোরাইবোসিল-১-পাইরোফসফেট)'),
        definition: l(
          'Activated pentose sugar synthesized from ribose-5-phosphate and ATP by PRPP synthetase; serves as the mandatory high-energy ribose donor for both purine/pyrimidine de novo synthesis and purine salvage pathways.',
          'রাইবোস-৫-ফসফেট এবং এটিপি থেকে তৈরি সক্রিয় পেন্টোজ শর্করা; এটি ডি নোভো পিউরিন ও পিরিমিডিন সংশ্লেষ এবং সালভেজ গতিপথ উভয়ের জন্যই অপরিহার্য রাইবোস সরবরাহকারী।'
        ),
      },
      {
        term: l('Hypoxanthine-Guanine Phosphoribosyltransferase (HGPRT)', 'হাইপোক্সানথিন-গুয়ানিন ফসফোরাইবোসিলট্রান্সফারেজ (HGPRT)'),
        definition: l(
          'Key purine salvage enzyme that transfers PRPP onto free hypoxanthine or guanine to reform IMP or GMP respectively; complete hereditary X-linked deficiency causes Lesch-Nyhan syndrome.',
          'প্রধান পিউরিন সালভেজ এনজাইম যা মুক্ত হাইপোক্সানথিন ও গুয়ানিনে PRPP যুক্ত করে যথাক্রমে IMP ও GMP পুনর্গঠন করে; এর সম্পূর্ণ অভাবে বংশগত লেশ-নাইহান সিন্ড্রোম দেখা দেয়।'
        ),
      },
      {
        term: l('CAD Multienzyme Complex', 'CAD মাল্টি-এনজাইম কমপ্লেক্স'),
        definition: l(
          'Single cytosolic polypeptide containing carbamoyl phosphate synthetase-II (CPS-II), aspartate transcarbamoylase (ATCase), and dihydroorotase; executes the first three committed steps of pyrimidine biosynthesis.',
          'সাইটোসলের একটি বৃহৎ ট্রাইফাংশনাল প্রোটিন যাতে কার্বামোয়েল ফসফেট সিন্থেজ-২, অ্যাসপার্টেট ট্রান্সকার্বামোইলেজ এবং ডাইহাইড্রোওরোটেজ বিদ্যমান; এটি পিরিমিডিন বলয় তৈরির প্রথম ৩টি ধাপ পরিচালনা করে।'
        ),
      },
      {
        term: l('Ribonucleotide Reductase (RNR)', 'রিবোনিউক্লিওটাইড রিডাক্টেজ (RNR)'),
        definition: l(
          'Dimeric iron-dependent enzyme using a stable tyrosyl free radical to reduce the 2-hydroxyl group of ribonucleoside diphosphates (NDPs) to deoxyribonucleoside diphosphates (dNDPs), strictly regulated by allosteric dATP feedback.',
          'আয়রন-নির্ভর এনজাইম যা টাইরোসিল মুক্ত র্যাডিক্যাল ব্যবহার করে রাইবোনিউক্লিওটাইডের ২-হাইড্রক্সিল কমিয়ে ডিঅক্সিরাইবোনিউক্লিওটাইড তৈরি করে; এটি dATP দ্বারা তীব্রভাবে নিয়ন্ত্রিত হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Reciprocal Energetic Cost of Adenylate & Guanylate Synthesis', 'অ্যাডিনাইলেট ও গুয়ানাইলেট সংশ্লেষের পারস্পরিক শক্তির হিসাব'),
        steps: [
          l(
            'Step 1: Inosinate (IMP) conversion to AMP requires aspartate nitrogen condensation catalyzed by adenylosuccinate synthetase, consuming 1 high-energy GTP bond.',
            'ধাপ ১: IMP থেকে AMP তৈরিতে অ্যাডিনাইলোসাকসিনেট সিন্থেটেজ ১টি উচ্চ-শক্তি GTP অণু খরচ করে অ্যাসপার্টেটের নাইট্রোজেন যুক্ত করে।'
          ),
          l(
            'Step 2: Inosinate (IMP) conversion to GMP requires NAD+-dependent oxidation to XMP, followed by GMP synthetase glutamine amidation consuming 1 high-energy ATP bond (cleaved to AMP + PPi, equivalent to 2 ATP).',
            'ধাপ ২: IMP থেকে GMP তৈরিতে XMP উৎপাদনের পর GMP সিন্থেটেজ গ্লুটামিন থেকে অ্যামাইড নাইট্রোজেন যুক্ত করতে ১টি এটিপি ভেঙে AMP ও PPi বানায় (যা ২টি এটিপির সমতুল্য)।'
          ),
          l(
            'Step 3: Cross-regulation logic: Abundant GTP drives AMP synthesis, while abundant ATP drives GMP synthesis, preventing imbalanced purine nucleotide pools during DNA and RNA polymerization.',
            'ধাপ ৩: পারস্পরিক নিয়ন্ত্রণের যুক্তি: অতিরিক্ত GTP থাকলে AMP তৈরি বাড়ে, আর অতিরিক্ত ATP থাকলে GMP তৈরি বাড়ে; ফলে ডিএনএ ও আরএনএ তৈরির জন্য পিউরিনের সমতা নিশ্চিত হয়।'
          ),
        ],
        conclusion: l(
          'This elegant reciprocal cross-regulation couples adenylate and guanylate production, ensuring stoichiometric parity between A and G nucleotides.',
          'এই নিখুঁত পারস্পরিক নিয়ন্ত্রণ ব্যবস্থা কোষের ভেতরে অ্যাডিনিন ও গুয়ানিন নিউক্লিওটাইডের সঠিক ভারসাম্য বজায় রাখে এবং পরিব্যক্তি প্রতিরোধ করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does carbamoyl phosphate synthetase-II (CPS-II) deficiency not cause hyperammonemia, unlike carbamoyl phosphate synthetase-I (CPS-I) deficiency?',
          'কার্বামোয়েল ফসফেট সিন্থেজ-২ (CPS-II) ঘাটতিতে কেন হাইপারঅ্যামোনেমিয়া হয় না, যেখানে CPS-I ঘাটতিতে মারাত্মক হাইপারঅ্যামোনেমিয়া দেখা দেয়?',
        ),
        answer: l(
          'CPS-I is located in the mitochondrial matrix of periportal hepatocytes, utilizes free NH4+ as substrate, and functions as the committed step of the high-capacity urea cycle responsible for whole-body ammonia detoxification. CPS-II is a cytosolic enzyme present in all dividing cells that utilizes glutamine (not free ammonia) as its nitrogen source for pyrimidine synthesis; its capacity is low and unrelated to systemic ammonia disposal.',
          'CPS-I মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে থাকে এবং সরাসরি বিষাক্ত মুক্ত অ্যামোনিয়াম ব্যবহার করে ইউরিয়া চক্র চালায় যা সারা শরীরের অ্যামোনিয়া দূর করে। পক্ষান্তরে CPS-II সাইটোসলে থাকে এবং পিরিমিডিন তৈরির জন্য গ্লুটামিন থেকে নাইট্রোজেন নেয়; এটি সাধারণ অ্যামোনিয়া বিষমুক্তিকরণের সাথে যুক্ত নয়।'
        ),
      },
      {
        question: l(
          'How does 5-fluorouracil (5-FU) selectively kill rapidly proliferating malignant tumor cells while sparing non-dividing neurons?',
          '৫-ফ্লুরোইউরাসিল (5-FU) কীভাবে বিভাজনহীন নিউরনকে অক্ষত রেখে দ্রুত বিভাজনশীল ক্যান্সার কোষকে ধ্বংস করে?',
        ),
        answer: l(
          '5-FU is enzymatically converted into 5-FdUMP, which acts as a mechanism-based suicide inhibitor of thymidylate synthase. It forms an irreversible covalent ternary complex with thymidylate synthase and N5,N10-methylene-THF, permanently arresting dTMP synthesis. Rapidly dividing tumor cells undergo "thymineless death" due to catastrophic DNA replication arrest and strand breakage, whereas mature quiescent neurons have minimal ongoing DNA synthesis.',
          '5-FU কোষে গিয়ে 5-FdUMP-এ পরিণত হয়, যা থাইমিডিলেট সিন্থেজ এনজাইম এবং N5,N10-মিথিলিন-THF-এর সাথে একটি অপরিবর্তনীয় সমযোজী বন্ধন তৈরি করে dTMP সংশ্লেষ চিরতরে বন্ধ করে দেয়। দ্রুত বিভাজনশীল ক্যান্সার কোষে থাইমিনের অভাবে ডিএনএ রেপ্লিকেশন আটকে ধ্বংস হয়ে যায়, কিন্তু শান্ত নিউরনে ডিএনএ রেপ্লিকেশনের প্রয়োজন হয় না।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: nucleotideOrgan3DData,
  interactiveDiagram: {
    id: 'purine-pyrimidine-chemotherapy-hub',
    title: l('Interactive Nucleotide Flux: Synthesis, Salvage, Gout & Chemotherapy Targets', 'ইন্টারেক্টিভ নিউক্লিওটাইড গতিপথ: সংশ্লেষ, সালভেজ, গেঁটেবাত ও কেমোথেরাপির লক্ষ্যবস্তু'),
    description: l(
      'Trace PRPP activation, de novo purine and pyrimidine ring construction, HGPRT salvage, uric acid production by xanthine oxidase, and targeted antineoplastic blockade by 5-FU and methotrexate.',
      'PRPP সক্রিয়করণ, ডি নোভো পিউরিন ও পিরিমিডিন বলয় গঠন, HGPRT সালভেজ, জ্যান্থিন অক্সিডেজ দ্বারা ইউরিক অ্যাসিড উৎপাদন এবং ৫-এফইউ ও মেথোট্রেক্সেট দ্বারা ক্যান্সার কোষের গতিপথ অবরোধ প্রত্যক্ষ করুন।'
    ),
    disclaimer: l(
      'Stoichiometry and enzyme kinetics verified against Lehninger Principles of Biochemistry (8th ed) and Harper Illustrated Biochemistry (32nd ed).',
      'রাসায়নিক সমীকরণ ও এনজাইম গতিবিদ্যা লেহনিঞ্জার বায়োকেমিস্ট্রি এবং হার্পারস ইলাস্ট্রেটেড বায়োকেমিস্ট্রি দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'node-prpp-gateway',
        label: l('1. PRPP Gateway & Purine Commitment', '১. PRPP গেটওয়ে ও পিউরিন কমিটমেন্ট'),
        description: l(
          'PRPP synthetase activates ribose-5-phosphate using ATP. PRPP amidotransferase transfers glutamine amide nitrogen to form 5-phosphoribosylamine, the committed rate-limiting step of purine de novo synthesis, strongly feedback-inhibited by AMP, GMP, and IMP.',
          'PRPP সিন্থেটেজ এটিপি ব্যবহার করে রাইবোস-৫-ফসফেটকে সক্রিয় করে। এরপর PRPP অ্যামিডোট্রান্সফারেজ গ্লুটামিন থেকে অ্যামাইড নাইট্রোজেন এনে ৫-ফসফোরাইবোসিলামাইন তৈরি করে, যা AMP, GMP এবং IMP দ্বারা তীব্রভাবে বাধাপ্রাপ্ত হয়।'
        ),
        details: l(
          'Committed enzyme: Glutamine-PRPP amidotransferase. Allosteric inhibitors: AMP, GMP, IMP. Allosteric activator: PRPP substrate feed-forward.',
          'প্রধান নিয়ন্ত্রক এনজাইম: গ্লুটামিন-PRPP অ্যামিডোট্রান্সফারেজ। ঋণাত্মক নিয়ন্ত্রক: AMP, GMP, IMP। ধনাত্মক নিয়ন্ত্রক: সাবস্ট্রেট PRPP।'
        ),
        sectionId: 'structure',
        color: '#f59e0b',
        svgCoords: { cx: 70, cy: 75, r: 24 },
      },
      {
        id: 'node-imp-branchpoint',
        label: l('2. IMP Branchpoint to AMP & GMP', '২. IMP শাখা ও AMP-GMP সংশ্লেষ'),
        description: l(
          'Inosine monophosphate (IMP) represents the parent purine nucleotide. Divergence to AMP requires adenylosuccinate synthetase consuming GTP; divergence to GMP requires IMP dehydrogenase followed by GMP synthetase consuming ATP.',
          'আইনোসিন মনোফসফেট (IMP) হলো সকল পিউরিন নিউক্লিওটাইডের মূল ভিত্তি। AMP তৈরিতে GTP প্রয়োজন হয় এবং GMP তৈরিতে ATP খরচ হয়, যা দুটি ক্ষারকের মধ্যে চমৎকার সমন্বয় তৈরি করে।'
        ),
        details: l(
          'Reciprocal energy logic prevents pool imbalance. Mycophenolate inhibits IMP dehydrogenase, suppressing T and B lymphocyte proliferation in organ transplants.',
          'পারস্পরিক শক্তি খরচ পরিমাণের ভারসাম্য রাখে। মাইকোফেনোলেট ড্রাগটি IMP ডিহাইড্রোজিনেজ বন্ধ করে অঙ্গ প্রতিস্থাপনে ইমিউন দমন করে।'
        ),
        sectionId: 'structure',
        color: '#10b981',
        svgCoords: { cx: 160, cy: 75, r: 24 },
      },
      {
        id: 'node-hgprt-salvage',
        label: l('3. HGPRT Purine Salvage Hub', '৩. HGPRT পিউরিন সালভেজ হাব'),
        description: l(
          'HGPRT salvages free hypoxanthine and guanine back into IMP and GMP using PRPP, recycling 90% of cellular purines. Complete X-linked deficiency causes Lesch-Nyhan syndrome with severe hyperuricemia, choreoathetosis, and compulsive self-mutilation.',
          'HGPRT এনজাইম PRPP ব্যবহার করে মুক্ত হাইপোক্সানথিন ও গুয়ানিনকে পুনরায় IMP এবং GMP-তে বদলে দেয়, যা কোষের ৯০% পিউরিন অপচয় রোধ করে। এর জন্মগত ঘাটতিতে মারাত্মক লেশ-নাইহান সিন্ড্রোম দেখা দেয়।'
        ),
        details: l(
          'Reaction: Hypoxanthine + PRPP -> IMP + PPi; Guanine + PRPP -> GMP + PPi. APRT similarly salvages adenine into AMP.',
          'বিক্রিয়া: হাইপোক্সানথিন + PRPP -> IMP + PPi; গুয়ানিন + PRPP -> GMP + PPi। APRT অ্যাডিনিনকে AMP-তে উদ্ধার করে।'
        ),
        sectionId: 'structure',
        color: '#6366f1',
        svgCoords: { cx: 250, cy: 75, r: 24 },
      },
      {
        id: 'node-xanthine-oxidase',
        label: l('4. Xanthine Oxidase & Urate Clearance', '৪. জ্যান্থিন অক্সিডেজ ও ইউরিক অ্যাসিড'),
        description: l(
          'Surplus purine bases are degraded to xanthine and subsequently oxidized to poorly soluble uric acid by molybdenum-dependent xanthine oxidase. Hyperuricemia beyond 6.8 mg/dL causes monosodium urate crystal precipitation and acute gouty arthritis.',
          'অতিরিক্ত পিউরিন ক্ষারকগুলো জ্যান্থিন অক্সিডেজ এনজাইমের মাধ্যমে স্বল্প দ্রবণীয় ইউরিক অ্যাসিডে জারিত হয়। রক্তে এর মাত্রা ৬.৮ মিগ্রা/ডেসিলিটার ছাড়ালে অস্থিসন্ধিতে স্ফটিক জমা হয়ে তীব্র গেঁটেবাত সৃষ্টি করে।'
        ),
        details: l(
          'Allopurinol (metabolized to oxypurinol) acts as a suicide inhibitor; febuxostat is a non-purine selective inhibitor. Rasburicase degrades uric acid to soluble allantoin.',
          'অ্যালোপিউরিনল একটি সুইসাইড ইনহিবিটর এবং ফেবুক্সোস্ট্যাট একটি সুনির্দিষ্ট ব্লকার। রাসবুরিকোজ ড্রাগটি ইউরিক অ্যাসিডকে অ্যালানটয়েনে রূপান্তরিত করে।'
        ),
        sectionId: 'practice',
        color: '#ef4444',
        svgCoords: { cx: 340, cy: 75, r: 24 },
      },
      {
        id: 'node-cad-complex',
        label: l('5. Cytosolic CAD Complex Pyrimidine Gateway', '৫. সাইটোসলিক CAD কমপ্লেক্স ও পিরিমিডিন গেটওয়ে'),
        description: l(
          'CAD multienzyme (CPS-II, ATCase, dihydroorotase) assembles carbamoyl aspartate and closes the 6-membered dihydroorotate ring in the cytosol using glutamine, HCO3-, and aspartate; CPS-II is activated by PRPP and inhibited by UTP.',
          'CAD মাল্টি-এনজাইম (CPS-II, ATCase, ডাইহাইড্রোওরোটেজ) গ্লুটামিন ও অ্যাসপার্টেট ব্যবহার করে সাইটোসলে ৬-সদস্য বিশিষ্ট ডাইহাইড্রোওরোটেট বলয় বানায়; CPS-II এনজাইমটি PRPP দ্বারা চালু এবং UTP দ্বারা বন্ধ হয়।'
        ),
        details: l(
          'Unlike purines, the pyrimidine base ring is fully synthesized before attachment to the ribose phosphate backbone.',
          'পিউরিনের বিপরীতভাবে, পিরিমিডিনে রাইবোস শর্করার সাথে যুক্ত করার আগেই সম্পূর্ণ ক্ষারক বলয়টি তৈরি হয়ে যায়।'
        ),
        sectionId: 'mechanism',
        color: '#06b6d4',
        svgCoords: { cx: 70, cy: 155, r: 24 },
      },
      {
        id: 'node-ump-synthase',
        label: l('6. UMP Synthase & Orotic Aciduria', '৬. UMP সিন্থেজ ও ওরোটিক অ্যাসিডুরিয়া'),
        description: l(
          'Bifunctional UMP synthase (orotate phosphoribosyltransferase and OMP decarboxylase) attaches PRPP to orotate and decarboxylates it to UMP. Autosomal recessive deficiency causes hereditary orotic aciduria with megaloblastic anemia, cured by oral uridine.',
          'বাইফাংশনাল UMP সিন্থেজ ওরোটেটের সাথে PRPP যুক্ত করে এবং কার্বন ডাইঅক্সাইড সরিয়ে UMP তৈরি করে। এর জন্মগত ঘাটতিতে ওরোটিক অ্যাসিডুরিয়া ও মেগালোব্লাস্টিক রক্তস্বল্পতা হয় যা ইউরিডিন খাইয়ে দূর করা যায়।'
        ),
        details: l(
          'Distinction: OTC deficiency causes hyperammonemia + orotic aciduria; UMP synthase deficiency causes normal ammonia + orotic aciduria + megaloblastic anemia.',
          'পার্থক্য: OTC ঘাটতিতে হাইপারঅ্যামোনেমিয়া থাকে; কিন্তু UMP সিন্থেজ ঘাটতিতে রক্তে অ্যামোনিয়া স্বাভাবিক থাকে এবং মেগালোব্লাস্টিক রক্তস্বল্পতা হয়।'
        ),
        sectionId: 'mechanism',
        color: '#8b5cf6',
        svgCoords: { cx: 160, cy: 155, r: 24 },
      },
      {
        id: 'node-rnr-deoxy',
        label: l('7. Ribonucleotide Reductase (RNR) Deoxy Engine', '৭. রিবোনিউক্লিওটাইড রিডাক্টেজ ও ডিঅক্সিরাইবোস ইঞ্জিন'),
        description: l(
          'Ribonucleotide reductase uses a tyrosyl free radical to reduce ribonucleoside diphosphates (NDPs) into deoxy counterparts (dNDPs) for DNA replication. Strictly feedback-inhibited at its activity site by dATP, and pharmacologically inhibited by hydroxyurea.',
          'রিবোনিউক্লিওটাইড রিডাক্টেজ টাইরোসিল মুক্ত র্যাডিক্যাল ব্যবহার করে রাইবোনিউক্লিওটাইড ডাইফসফেটকে ডিঅক্সিরাইবোনিউক্লিওটাইডে (dNDP) কমিয়ে দেয়। অতিরিক্ত dATP দ্বারা এটি বন্ধ হয় এবং হাইড্রোক্সিইউরিয়া দ্বারা চিকিৎসায় নিবৃত্ত হয়।'
        ),
        details: l(
          'SCID link: Adenosine deaminase (ADA) deficiency causes toxic dATP accumulation, permanently turning off RNR and starving lymphocytes of DNA precursors.',
          'SCID রোগ: অ্যাডিনোসিন ডিমাইনেজের অভাবে অতিরিক্ত dATP জমে RNR চিরতরে বন্ধ করে দেয়, ফলে শ্বেতকণিকা ডিএনএ তৈরি করতে না পেরে মারা যায়।'
        ),
        sectionId: 'integration',
        color: '#14b8a6',
        svgCoords: { cx: 250, cy: 155, r: 24 },
      },
      {
        id: 'node-thymidylate-chemo',
        label: l('8. Thymidylate Synthase & Antineoplastic Suicide', '৮. থাইমিডিলেট সিন্থেজ ও ক্যান্সার বিরোধী সুইসাইড ব্লকেড'),
        description: l(
          'Thymidylate synthase methylates dUMP to dTMP using N5,N10-methylene-THF, which is oxidized to DHF. 5-Fluorouracil (via 5-FdUMP) suicide-inhibits thymidylate synthase, while methotrexate inhibits dihydrofolate reductase (DHFR), starving cancer cells of thymine.',
          'থাইমিডিলেট সিন্থেজ N5,N10-মিথিলিন-THF ব্যবহার করে dUMP-কে dTMP-তে রূপান্তর করে। ক্যান্সার চিকিৎসায় ৫-ফ্লুরোইউরাসিল থাইমিডিলেট সিন্থেজকে ধ্বংস করে এবং মেথোট্রেক্সেট DHFR এনজাইম বন্ধ করে টিউমার কোষের মৃত্যু ঘটায়।'
        ),
        details: l(
          '5-FU blocks TS directly via covalent ternary complex; Methotrexate blocks DHFR regeneration of THF. Leucovorin rescues healthy cells from methotrexate toxicity.',
          '৫-এফইউ সরাসরি থাইমিডিলেট সিন্থেজ নষ্ট করে; মেথোট্রেক্সেট DHFR বন্ধ করে THF তৈরি থামায়। লিউকোভোরিন স্বাভাবিক কোষকে মেথোট্রেক্সেটের বিষাক্ততা থেকে রক্ষা করে।'
        ),
        sectionId: 'practice',
        color: '#ec4899',
        svgCoords: { cx: 340, cy: 155, r: 24 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Introduction: The Twin Strategies of Cellular Nucleotide Economy', 'ভূমিকা: কোষীয় নিউক্লিওটাইড অর্থনীতির দ্বৈত কৌশল'),
          paragraphs: [
            l(
              'Nucleotides are the universal chemical currency and information code of cellular life, serving as the monomeric building blocks of DNA and RNA, components of coenzymes (NAD+, FAD, CoA), and universal energetic currencies (ATP, GTP). Because de novo nucleotide synthesis requires enormous metabolic energy, human cells utilize two complementary strategies: synthesizing nucleotides from simple precursors (amino acids, CO2, and ribose-5-phosphate) or recycling pre-existing purine and pyrimidine bases via efficient salvage pathways.',
              'নিউক্লিওটাইড হলো কোষীয় জীবনের সার্বজনীন রাসায়নিক মুদ্রা এবং বংশগতির তথ্য সংকেত; এটি ডিএনএ ও আরএনএ-এর গাঠনিক একক, বিভিন্ন কোএনজাইমের (NAD+, FAD, CoA) অপরিহার্য অংশ এবং শক্তির প্রধান বাহক (ATP, GTP)। গোড়া থেকে নিউক্লিওটাইড তৈরিতে প্রচুর শক্তি খরচ হয় বলে মানবদেহ দুটি সমন্বিত কৌশল গ্রহণ করে: সরল যৌগ (অ্যামিনো অ্যাসিড, CO2, রাইবোস) থেকে ডি নোভো সংশ্লেষ অথবা ভাঙন থেকে আসা ক্ষারকগুলোকে সালভেজ গতিপথের মাধ্যমে পুনর্ব্যবহার করা।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Anatomy of Nucleotides: Double-Ring Purines vs Single-Ring Pyrimidines', 'নিউক্লিওটাইডের গঠন: দ্বি-বলয় পিউরিন বনাম একক-বলয় পিরিমিডিন'),
          paragraphs: [
            l(
              'A nucleotide consists of three modular parts: a nitrogenous base (purine or pyrimidine), a five-carbon pentose sugar (ribose in RNA, 2-deoxyribose in DNA), and one or more negatively charged phosphate groups. Purines (adenine and guanine) possess a double-ring structure formed by a six-membered pyrimidine ring fused to a five-membered imidazole ring. In contrast, pyrimidines (cytosine, uracil, and thymine) consist of a single six-membered heterocyclic aromatic ring containing two nitrogen atoms.',
              'একটি নিউক্লিওটাইড তিনটি প্রধান অংশ নিয়ে গঠিত: একটি নাইট্রোজেন ক্ষারক (পিউরিন বা পিরিমিডিন), একটি পাঁচ-কার্বন বিশিষ্ট পেন্টোজ শর্করা (আরএনএ-তে রাইবোস এবং ডিএনএ-তে ২-ডিঅক্সিরাইবোস) এবং এক বা একাধিক ফসফেট মূলক। পিউরিন ক্ষারকগুলো (অ্যাডিনিন ও গুয়ানিন) দ্বি-বলয়বিশিষ্ট কাঠামো যাতে একটি ছয়-সদস্যের বলয়ের সাথে পাঁচ-সদস্যের ইমিডাজল বলয় জোড়া লাগানো থাকে। অপরদিকে পিরিমিডিন ক্ষারকগুলো (সাইটোসিন, ইউরাসিল ও থাইমিন) একক ছয়-সদস্য বিশিষ্ট বলয় নিয়ে গঠিত।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('De Novo Architecture: Built on PRPP vs Built Before Ribose Attachment', 'ডি নোভো সংশ্লেষের কৌশল: PRPP-এর ওপর তৈরি বনাম রাইবোস যুক্ত করার আগে তৈরি'),
          paragraphs: [
            l(
              'In purine de novo synthesis, the double-ring purine skeleton is constructed atom by atom directly on top of an activated ribose sugar called 5-phosphoribosyl-1-pyrophosphate (PRPP). In sharp contrast, pyrimidine de novo synthesis constructs the six-membered aromatic ring first as free orotic acid before attaching it to PRPP. Cells convert ribonucleotides into deoxyribonucleotides using the enzyme ribonucleotide reductase (RNR), which removes the 2-hydroxyl group to furnish substrates for DNA replication.',
              'ডি নোভো পিউরিন সংশ্লেষে দ্বি-বলয় কাঠামোটি সরাসরি PRPP নামক সক্রিয় রাইবোস শর্করার ওপর পরমাণু পরমাণু করে ক্রমান্বয়ে তৈরি হয়। এর ঠিক বিপরীতে, পিরিমিডিন সংশ্লেষে প্রথমে মুক্ত ওরোটিক অ্যাসিড হিসেবে ছয়-সদস্য বিশিষ্ট বলয়টি তৈরি করা হয় এবং পরবর্তীতে এটিকে PRPP-এর সাথে যুক্ত করা হয়। এরপর রিবোনিউক্লিওটাইড রিডাক্টেজ (RNR) এনজাইমটি রাইবোসের ২-নম্বর কার্বনের হাইড্রোক্সিল গ্রুপটি সরিয়ে ডিএনএ তৈরির উপযোগী ডিঅক্সিরাইবোনিউক্লিওটাইড তৈরি করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Reciprocal Pool Balancing and Degradation into Uric Acid', 'পারস্পরিক ভারসাম্য ও ইউরিক অ্যাসিডে রূপান্তরের পরিণতি'),
          paragraphs: [
            l(
              'Purine and pyrimidine pools must remain precisely balanced to prevent mutations during chromosome replication. Adenylate (AMP) and guanylate (GMP) synthesis exhibit reciprocal energetic regulation: GTP fuels AMP production, whereas ATP fuels GMP production. Surplus purines cannot be cleaved into simple respiratory fuels; instead, they are oxidized to poorly soluble uric acid by xanthine oxidase for urinary excretion, while pyrimidine rings are readily degraded into soluble beta-alanine and succinyl-CoA.',
              'কোষ বিভাজনে পরিব্যক্তি রোধ করতে পিউরিন ও পিরিমিডিনের পরিমাণ নিখুঁত ভারসাম্যে থাকা আবশ্যক। অ্যাডিনাইলেট ও গুয়ানাইলেট সংশ্লেষের মধ্যে রয়েছে চমৎকার পারস্পরিক শক্তির সমন্বয়: GTP খরচ করে AMP তৈরি হয় এবং ATP খরচ করে GMP তৈরি হয়। অতিরিক্ত পিউরিন ভেঙে সাধারণ জ্বালানি হতে পারে না; এগুলো জ্যান্থিন অক্সিডেজ দ্বারা কম দ্রবণীয় ইউরিক অ্যাসিডে পরিণত হয়ে মূত্রের মাধ্যমে নিষ্কাশিত হয়, কিন্তু পিরিমিডিন বলয় সহজে ভেঙে দ্রবণীয় বিটা-অ্যালানিন হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Disorders: Gouty Arthritis and Antineoplastic Chemotherapy', 'ক্লিনিক্যাল গুরুত্ব: গেঁটেবাত ও ক্যান্সার কেমোথেরাপি'),
          paragraphs: [
            l(
              'Clinical disorders of nucleotide metabolism frequently produce dramatic pathologies. Excess uric acid crystallizes in synovial fluid causing acute gouty arthritis, classically in the first toe joint (podagra). Pharmacological inhibitors of nucleotide pathways are frontline medicines: allopurinol treats gout by blocking xanthine oxidase, while chemotherapy agents like 5-fluorouracil (5-FU) and methotrexate starve rapidly dividing cancer cells of thymine, halting tumor proliferation.',
              'নিউক্লিওটাইড বিপাকের ত্রুটিতে মারাত্মক রোগব্যাধি দেখা দেয়। অতিরিক্ত ইউরিক অ্যাসিড সন্ধির ভেতরে স্ফটিক আকারে জমা হয়ে তীব্র গেঁটেবাত সৃষ্টি করে, যা সাধারণত পায়ের বুড়ো আঙুলে তীব্র প্রদাহ তৈরি করে (পডাগ্ৰা)। এই গতিপথের ওষুধগুলো চিকিৎসাবিজ্ঞানে অত্যন্ত গুরুত্বপূর্ণ: অ্যালোপিউরিনল জ্যান্থিন অক্সিডেজ বন্ধ করে গেঁটেবাতের চিকিৎসা করে, আবার মেথোট্রেক্সেট ও ৫-ফ্লুরোইউরাসিল ক্যান্সার কোষের থাইমিন তৈরি বন্ধ করে টিউমারের বৃদ্ধি থামায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('High-Yield Synthesis Takeaways', 'মূল সারসংক্ষেপ ও শিক্ষণীয় বিষয়'),
          paragraphs: [
            l(
              'Purines are assembled directly onto PRPP, whereas pyrimidine rings are built first and then attached to PRPP. Nucleotide salvage by HGPRT prevents wasteful base degradation. Uric acid is the end product of purine catabolism, causing gout when elevated. Rapidly dividing cells require ribonucleotide reductase and thymidylate synthase, making both enzymes critical targets for antineoplastic chemotherapy.',
              'পিউরিন বলয় সরাসরি PRPP-এর ওপর তৈরি হয়, কিন্তু পিরিমিডিন বলয় আগে তৈরি হয়ে পরে PRPP-তে বসে। HGPRT এনজাইম দ্বারা পিউরিন পুনরুদ্ধার অপচয় রোধ করে। ইউরিক অ্যাসিড পিউরিন ভাঙনের শেষ যৌগ যা অতিরিক্ত হলে গেঁটেবাত ঘটায়। দ্রুত বর্ধনশীল কোষের জন্য রিবোনিউক্লিওটাইড রিডাক্টেজ ও থাইমিডিলেট সিন্থেজ অপরিহার্য হওয়ায় এগুলো অত্যন্ত সফল কেমোথেরাপির লক্ষ্যবস্তু।'
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
          heading: l('Introduction: Intermediate Metabolism of Purine and Pyrimidine Nucleotides', 'ভূমিকা: পিউরিন ও পিরিমিডিন নিউক্লিওটাইডের মধ্যবর্তী বিপাক'),
          paragraphs: [
            l(
              'Nucleotide metabolism orchestrates the biosynthesis, interconversion, salvage, and catabolism of purine and pyrimidine nucleotides. Purine nucleotides (AMP, GMP) and pyrimidine nucleotides (CMP, UMP, dTMP) provide precursors for nucleic acid synthesis, chemical energy storage, intracellular secondary messengers (cAMP, cGMP), and metabolic activated carriers (UDP-glucose, CDP-diacylglycerol, S-adenosylmethionine). Understanding the enzymatic steps, allosteric regulation, and metabolic compartmentation of these pathways is essential for comprehending human cellular proliferation, immune competence, and pharmacology.',
              'নিউক্লিওটাইড বিপাক পিউরিন ও পিরিমিডিন নিউক্লিওটাইডের জৈবসংশ্লেষ, পারস্পরিক রূপান্তর, সালভেজ এবং ভাঙন নিয়ন্ত্রণ করে। পিউরিন (AMP, GMP) ও পিরিমিডিন (CMP, UMP, dTMP) নিউক্লিক অ্যাসিড তৈরির কাঁচামাল, রাসায়নিক শক্তির আধার, দ্বিতীয় বার্তাবাহক (cAMP, cGMP) এবং সক্রিয় বিপাকীয় বাহক (UDP-গ্লুকোজ, CDP-ডাইঅ্যাসাইলগ্লিসারল) হিসেবে কাজ করে। এই গতিপথগুলোর ধারাবাহিক এনজাইম, অ্যালবস্টেরিক নিয়ন্ত্রণ এবং কোষীয় অবস্থান বোঝা মানবদেহের কোষ বিভাজন, রোগপ্রতিরোধ ক্ষমতা এবং ফার্মাকোলজি অধ্যয়নের ভিত্তি।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('De Novo Purine Pathway: PRPP Commitment and IMP Construction', 'ডি নোভো পিউরিন গতিপথ: PRPP সক্রিয়করণ ও IMP গঠন'),
          paragraphs: [
            l(
              'De novo purine biosynthesis begins with ribose-5-phosphate from the pentose phosphate pathway. PRPP synthetase activates it to 5-phosphoribosyl-1-pyrophosphate (PRPP) using ATP. Glutamine-PRPP amidotransferase then catalyzes the committed rate-limiting step, transferring the amide nitrogen of glutamine to form 5-phosphoribosylamine with inversion of configuration at C-1. Over nine subsequent enzymatic steps, atoms from glycine (C4, C5, N7), N10-formyl-THF (C2, C8), glutamine (N3, N9), aspartate (N1), and respiratory bicarbonate/CO2 (C6) assemble to form inosine monophosphate (IMP).',
              'ডি নোভো পিউরিন সংশ্লেষ পেন্টোজ ফসফেট গতিপথের রাইবোস-৫-ফসফেট থেকে শুরু হয়। PRPP সিন্থেটেজ এটিপি ব্যবহার করে এটিকে ৫-ফসফোরাইবোসিল-১-পাইরোফসফেটে (PRPP) পরিণত করে। এরপর গ্লুটামিন-PRPP অ্যামিডোট্রান্সফারেজ প্রধান হার-নিয়ন্ত্রক ধাপে গ্লুটামিনের অ্যামাইড নাইট্রোজেন যুক্ত করে ৫-ফসফোরাইবোসিলামাইন তৈরি করে। পরবর্তী নয়টি এনজাইমীয় ধাপে গ্লাইসিন, N10-ফর্মাইল-THF, গ্লুটামিন, অ্যাসপার্টেট এবং CO2 থেকে পরমাণু যুক্ত হয়ে আইনোসিন মনোফসফেট (IMP) উৎপন্ন হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('IMP Branchpoint Divergence: Reciprocal Energetics and Allosteric Feedback', 'IMP শাখা: পারস্পরিক শক্তি ও অ্যালবস্টেরিক প্রতিক্রিয়া'),
          paragraphs: [
            l(
              'IMP diverges into AMP and GMP via strictly coordinated branches. IMP dehydrogenase oxidizes IMP to xanthosine monophosphate (XMP), followed by GMP synthetase amidation using glutamine and ATP to yield GMP. Conversely, adenylosuccinate synthetase condenses IMP with aspartate using GTP, followed by adenylosuccinase cleavage releasing fumarate and AMP. Reciprocal cross-regulation prevents nucleotide pool imbalance: high ATP stimulates GMP synthesis, while high GTP fuels AMP synthesis. Both branches feed back to allosterically inhibit PRPP amidotransferase and their respective branchpoint enzymes.',
              'IMP দুটি সুনির্দিষ্ট শাখায় ভাগ হয়ে AMP ও GMP তৈরি করে। IMP ডিহাইড্রোজিনেজ IMP-কে XMP-তে জারিত করে এবং GMP সিন্থেটেজ ATP ও গ্লুটামিন ব্যবহার করে GMP তৈরি করে। অন্যদিকে অ্যাডিনাইলোসাকসিনেট সিন্থেটেজ GTP ব্যবহার করে IMP-এর সাথে অ্যাসপার্টেট যুক্ত করে এবং অ্যাডিনাইলোসাকসিনেজ ফিউমারেট মুক্ত করে AMP তৈরি করে। পারস্পরিক নিয়ন্ত্রণ ভারসাম্য বজায় রাখে: উচ্চ ATP গুয়ানাইলেট তৈরিতে এবং উচ্চ GTP অ্যাডিনাইলেট তৈরিতে উদ্দীপনা দেয়। উভয় উৎপাদ PRPP অ্যামিডোট্রান্সফারেজকে ঋণাত্মকভাবে নিয়ন্ত্রণ করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('De Novo Pyrimidine Pathway: Cytosolic CAD and Mitochondrial DHODH', 'ডি নোভো পিরিমিডিন গতিপথ: সাইটোসলিক CAD ও মাইটোকন্ড্রিয়াল DHODH'),
          paragraphs: [
            l(
              'De novo pyrimidine synthesis occurs via the cytosolic CAD multienzyme complex (carbamoyl phosphate synthetase-II, aspartate transcarbamoylase, and dihydroorotase). CPS-II uses glutamine, bicarbonate, and 2 ATP to form carbamoyl phosphate in the cytoplasm, regulated positively by PRPP and negatively by UTP. Dihydroorotate enters mitochondria, where dihydroorotate dehydrogenase transfers electrons to ubiquinone in the electron transport chain, forming orotate. Bifunctional cytosolic UMP synthase (OPRTase and OMP decarboxylase) then attaches PRPP and releases CO2 to generate UMP.',
              'ডি নোভো পিরিমিডিন সংশ্লেষ সাইটোসলের CAD কমপ্লেক্স (CPS-II, ATCase, ডাইহাইড্রোওরোটেজ) দ্বারা পরিচালিত হয়। CPS-II সাইটোসলে গ্লুটামিন, বাইকার্বনেট ও ২টি এটিপি দিয়ে কার্বামোয়েল ফসফেট তৈরি করে, যা PRPP দ্বারা সক্রিয় এবং UTP দ্বারা নিবৃত্ত হয়। উৎপন্ন ডাইহাইড্রোওরোটেট মাইটোকন্ড্রিয়ায় গিয়ে ইলেকট্রন পরিবহন চেইনের মাধ্যমে জারিত হয়ে ওরোটেট হয়। এরপর সাইটোসলের বাইফাংশনাল UMP সিন্থেজ ওরোটেটের সাথে PRPP যুক্ত করে এবং কার্বন ডাইঅক্সাইড মুক্ত করে UMP তৈরি করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Purine Salvage Economy and Lesch-Nyhan Pathophysiology', 'পিউরিন সালভেজ অর্থনীতি ও লেশ-নাইহান প্যাথোফিজিওলজি'),
          paragraphs: [
            l(
              'Nucleotide salvage saves up to 90% of cellular purine synthesis energy. Hypoxanthine-guanine phosphoribosyltransferase (HGPRT) condenses hypoxanthine with PRPP to reform IMP, and guanine with PRPP to reform GMP. Adenine phosphoribosyltransferase (APRT) salvages adenine to AMP. Inborn deficiency of HGPRT causes Lesch-Nyhan syndrome, an X-linked recessive disorder characterized by massive uric acid overproduction, choreoathetosis, spasticity, cognitive impairment, and compulsive self-injurious behavior (lip and finger biting).',
              'নিউক্লিওটাইড সালভেজ কোষের ৯০% পিউরিন সংশ্লেষ শক্তি সাশ্রয় করে। HGPRT এনজাইম PRPP ব্যবহার করে হাইপোক্সানথিনকে IMP-তে এবং গুয়ানিনকে GMP-তে উদ্ধার করে। APRT একইভাবে অ্যাডিনিনকে AMP-তে উদ্ধার করে। HGPRT এনজাইমের জন্মগত অভাবে এক্স-লিংকড লেশ-নাইহান সিন্ড্রোম দেখা দেয়, যার লক্ষণ হলো রক্তে অত্যধিক ইউরিক অ্যাসিড, অনৈচ্ছিক নড়াচড়া, মানসিক প্রতিবন্ধকতা এবং আত্মঘাতী অঙ্গহানি (নিজের ঠোঁট ও আঙুল কামড়ে ফেলা)।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis & High-Yield Key Points', 'একাডেমিক পর্যালোচনা ও মূল শিক্ষণীয় বিষয়'),
          paragraphs: [
            l(
              'Purine de novo synthesis builds IMP onto PRPP with reciprocal ATP/GTP energetics for AMP/GMP. Pyrimidines build orotate first via cytosolic CAD and mitochondrial DHODH before UMP synthase creates UMP. HGPRT salvage deficiency produces Lesch-Nyhan syndrome. Ribonucleotide reductase requires fine-tuned allosteric control, and thymidylate synthase represents a cornerstone target in antineoplastic medicine.',
              'ডি নোভো পিউরিন সংশ্লেষে PRPP-এর ওপর IMP তৈরি হয় এবং পারস্পরিক ATP/GTP শক্তিতে AMP ও GMP গঠিত হয়। পিরিমিডিনে CAD ও DHODH প্রথমে ওরোটেট বানায় যা UMP সিন্থেজ দিয়ে UMP হয়। HGPRT ঘাটতিতে লেশ-নাইহান সিন্ড্রোম হয়। রিবোনিউক্লিওটাইড রিডাক্টেজ নিখুঁত নিয়ন্ত্রণে কাজ করে এবং থাইমিডিলেট সিন্থেজ ক্যান্সার চিকিৎসার প্রধানতম লক্ষ্যবস্তু।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced & Research', 'উন্নত ও গবেষণা'),
      sections: [
        {
          id: 'integration',
          heading: l('Ribonucleotide Reductase Allosteric Logic and SCID Pathophysiology', 'রিবোনিউক্লিওটাইড রিডাক্টেজ অ্যালবস্টেরিক নিয়ন্ত্রণ ও SCID রোগতত্ত্ব'),
          paragraphs: [
            l(
              'Deoxyribonucleotide synthesis is driven by ribonucleotide reductase (RNR), a tetrameric alpha2-beta2 enzyme whose catalytic cycle involves a stable tyrosyl free radical generated by a diferric center. RNR is governed by two independent allosteric sites: an overall activity site (where ATP binding activates and dATP binding inactivates the enzyme) and a substrate specificity site (where binding of ATP, dATP, dGTP, or dTTP alters the enzyme preference for CDP, UDP, GDP, or ADP, balancing all four dNTP pools). Adenosine deaminase (ADA) deficiency causes severe combined immunodeficiency (SCID) because accumulated deoxyadenosine is phosphorylated to dATP, which locks RNR in a permanently inactive state, starving rapidly dividing T and B lymphocytes of all four dNTP precursors and precipitating profound lymphopenia.',
              'ডিঅক্সিরাইবোনিউক্লিওটাইড সংশ্লেষ রিবোনিউক্লিওটাইড রিডাক্টেজ (RNR) দ্বারা পরিচালিত হয়, যা টাইরোসিল মুক্ত র্যাডিক্যাল ব্যবহার করে কাজ করে। RNR দুটি পৃথক অ্যালবস্টেরিক স্থান দ্বারা নিয়ন্ত্রিত হয়: একটি সার্বিক সক্রিয়তা স্থান (যেখানে ATP যুক্ত হলে সক্রিয় এবং dATP যুক্ত হলে এনজাইমটি নিষ্ক্রিয় হয়) এবং একটি সাবস্ট্রেট নির্দিষ্টতা স্থান (যা চারটি dNTP-এর সমান অনুপাত নিশ্চিত করে)। অ্যাডিনোসিন ডিমাইনেজ (ADA) ঘাটতিতে মারাত্মক সম্মিলিত রোগপ্রতিরোধহীনতা (SCID) দেখা দেয়, কারণ জমা হওয়া ডিঅক্সিঅ্যাডিনোসিন অতিরিক্ত dATP তৈরি করে RNR-কে স্থায়ীভাবে বন্ধ করে দেয়, ফলে টি ও বি লিম্ফোসাইট ডিএনএ বানাতে না পেরে ধ্বংস হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Molecular Oncology Targets and Pharmacotherapy of Hyperuricemia', 'মলিকুলার অনকোলজি লক্ষ্যবস্তু ও হাইপারইউরিসিমিয়ার ফার্মাকোথেরাপি'),
          paragraphs: [
            l(
              'The thymidylate synthase cycle represents one of modern oncologys most successful therapeutic targets. Thymidylate synthase methylates dUMP to dTMP using N5,N10-methylene-tetrahydrofolate as both a one-carbon donor and a reducing agent, producing dihydrofolate (DHF). 5-Fluorouracil (5-FU) is metabolized into 5-fluorodeoxyuridine monophosphate (5-FdUMP), which forms an irreversible covalent ternary complex with thymidylate synthase and methylene-THF, permanently inactivating the enzyme via suicide inhibition. Methotrexate competitively inhibits dihydrofolate reductase (DHFR), preventing the NADPH-dependent regeneration of THF from DHF and depleting the intracellular pool of folate coenzymes required for purine and thymidylate synthesis. In purine catabolism, xanthine oxidase oxidizes hypoxanthine to xanthine, and xanthine to uric acid; allopurinol is oxidized by the enzyme into oxypurinol (alloxanthine), which remains tightly bound to the molybdenum active site as a suicide inhibitor, while febuxostat achieves non-purine competitive inhibition.',
              'আধুনিক অনকোলজিতে থাইমিডিলেট সিন্থেজ চক্র অন্যতম প্রধান চিকিৎসার লক্ষ্যবস্তু। থাইমিডিলেট সিন্থেজ N5,N10-মিথিলিন-THF ব্যবহার করে dUMP থেকে dTMP তৈরি করে এবং DHF উৎপন্ন করে। ৫-ফ্লুরোইউরাসিল (5-FU) শরীরে ৫-FdUMP-এ রূপান্তরিত হয়ে থাইমিডিলেট সিন্থেজ ও ফোলেটের সাথে অপরিবর্তনীয় সমযোজী ত্রয়ী কমপ্লেক্স তৈরি করে এনজাইমটিকে চিরতরে অকেজো করে দেয় (সুইসাইড ইনহিবিশন)। মেথোট্রেক্সেট ডাইহাইড্রোফোলেট রিডাক্টেজ (DHFR) এনজাইমকে আটকে দিয়ে THF তৈরি বন্ধ করে পিউরিন ও থাইমিডিলেট সংশ্লেষ স্তব্ধ করে। অন্যদিকে পিউরিন ভাঙনে জ্যান্থিন অক্সিডেজ ইউরিক অ্যাসিড তৈরি করে; অ্যালোপিউরিনল অক্সিপিউরিনলে পরিণত হয়ে জ্যান্থিন অক্সিডেজের মলিবডেনাম কেন্দ্রে আটকে গিয়ে এনজাইমটিকে স্থায়ীভাবে নিবৃত্ত করে, আর ফেবুক্সোস্ট্যাট নন-পিউরিন ব্লকার হিসেবে কাজ করে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A metabolic map detailing de novo purine synthesis on PRPP to IMP, reciprocal branching to AMP and GMP, HGPRT salvage recycling, purine degradation via xanthine oxidase to uric acid, cytosolic CAD pyrimidine assembly, and thymidylate synthase antineoplastic blockade.',
      'PRPP-এর ওপর ডি নোভো পিউরিন থেকে IMP তৈরি, AMP ও GMP-তে রূপান্তর, HGPRT সালভেজ, জ্যান্থিন অক্সিডেজ দিয়ে ইউরিক অ্যাসিড তৈরি, সাইটোসলিক CAD পিরিমিডিন গঠন এবং থাইমিডিলেট সিন্থেজ বিরোধী অ্যান্টিনিওপ্লাস্টিক ব্লকেডের সম্পূর্ণ নকশা।'
    ),
    steps: [
      l('PRPP amidotransferase commits ribose-5-P to purine synthesis using glutamine.', 'PRPP অ্যামিডোট্রান্সফারেজ গ্লুটামিন ব্যবহার করে পিউরিন সংশ্লেষ শুরু করে।'),
      l('IMP diverges to AMP (using GTP) and GMP (using ATP) in reciprocal balance.', 'IMP থেকে পারস্পরিক ভারসাম্যে AMP (GTP দ্বারা) ও GMP (ATP দ্বারা) তৈরি হয়।'),
      l('HGPRT salvages hypoxanthine and guanine back to IMP and GMP using PRPP.', 'HGPRT এনজাইম PRPP দিয়ে হাইপোক্সানথিন ও গুয়ানিন উদ্ধার করে।'),
      l('Xanthine oxidase oxidizes surplus purines into poorly soluble uric acid.', 'জ্যান্থিন অক্সিডেজ অতিরিক্ত পিউরিন জারিত করে ইউরিক অ্যাসিড বানায়।'),
      l('Thymidylate synthase converts dUMP to dTMP, suicide-inhibited by 5-FU.', 'থাইমিডিলেট সিন্থেজ dUMP থেকে dTMP বানায় যা ৫-এফইউ দ্বারা ধ্বংস হয়।'),
    ],
  },
  assessment: {
    question: l(
      'A 14-month-old male infant is brought to the clinic because of spasticity, involuntary choreoathetoid movements, delayed motor milestones, and self-injurious biting of his lips and fingers. Laboratory analysis reveals a serum uric acid concentration of 11.8 mg/dL (reference range: 2.0–5.5 mg/dL) and orange crystals in his diapers. Which biochemical defect is the underlying cause of this condition?',
      '১৪ মাস বয়সী এক ছেলে শিশুকে হাত-পায়ে অস্বাভাবিক খিঁচুনি, অনৈচ্ছিক অঙ্গভঙ্গি এবং নিজের ঠোঁট ও আঙুল কামড়ে ক্ষতের কারণে হাসপাতালে আনা হলো। রক্ত পরীক্ষায় সিরাম ইউরিক অ্যাসিড ১১.৮ মিগ্রা/ডেসিলিটার (স্বাভাবিক: ২.০-৫.৫) এবং ডায়াপারে কমলা রঙের ক্রিস্টাল পাওয়া গেল। কোন জৈবরাসায়নিক ত্রুটি এই রোগের মূল কারণ?'
    ),
    options: [
      l(
        'Hypoxanthine-guanine phosphoribosyltransferase (HGPRT) complete deficiency (Lesch-Nyhan syndrome).',
        'হাইপোক্সানথিন-গুয়ানিন ফসফোরাইবোসিলট্রান্সফারেজ (HGPRT) এর সম্পূর্ণ ঘাটতি (লেশ-নাইহান সিন্ড্রোম)।'
      ),
      l(
        'Adenosine deaminase (ADA) deficiency causing severe combined immunodeficiency (SCID).',
        'অ্যাডিনোসিন ডিমাইনেজ (ADA) ঘাটতিজনিত সিভিয়ার কম্বাইন্ড ইমিউনোডেফিসিয়েন্সি (SCID)।'
      ),
      l(
        'Cytosolic CAD multienzyme deficiency causing hereditary orotic aciduria.',
        'সাইটোসলিক CAD মাল্টি-এনজাইম ঘাটতিজনিত বংশগত ওরোটিক অ্যাসিডুরিয়া।'
      ),
      l(
        'Xanthine oxidase deficiency leading to xanthinuria and hypouricemia.',
        'জ্যান্থিন অক্সিডেজ ঘাটতিজনিত জ্যান্থিনুরিয়া এবং রক্তে কম ইউরিক অ্যাসিড।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'The presentation of neurological impairment (choreoathetosis, spasticity), compulsive self-mutilation (lip and finger biting), hyperuricemia, and orange "sand" (sodium urate crystals) in diapers is pathognomonic for Lesch-Nyhan syndrome. This X-linked recessive disorder results from a complete deficiency of HGPRT, the key enzyme that salvages hypoxanthine to IMP and guanine to GMP. Without HGPRT, PRPP accumulates, driving massive de novo purine synthesis while non-salvaged purines are catabolized to uric acid.',
      'স্নায়বিক অসঙ্গতি, নিজের অঙ্গহানি (ঠোঁট ও আঙুল কামড়ানো), তীব্র হাইপারইউরিসিমিয়া এবং ডায়াপারে কমলার রঙের ইউরেট স্ফটিক নিশ্চিতভাবে লেশ-নাইহান সিন্ড্রোম নির্দেশ করে। এটি HGPRT এনজাইমের সম্পূর্ণ ঘাটতির কারণে ঘটে, যা পিউরিন সালভেজের প্রধান চাবিকাঠি। এই এনজাইম না থাকলে কোষে PRPP জমে ডি নোভো সংশ্লেষ বহুগুণ বাড়িয়ে দেয় এবং সমস্ত পিউরিন জারিত হয়ে প্রচুর ইউরিক অ্যাসিডে পরিণত হয়।'
    ),
  },
}
