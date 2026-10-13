import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const micronutrientRefs = [
  {
    id: 'lehninger-biochem-8e-ch14-ch18',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapters 14–18: Glycolysis, the Citric Acid Cycle, and Coenzyme Mechanisms',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch44',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 44: Micronutrients: Vitamins & Minerals",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'marks-medbiochem-6e-ch39',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 39: Micronutrients: Vitamins and Trace Minerals",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
  {
    id: 'lippincott-biochem-8e-ch28',
    authors: 'Denise R. Ferrier',
    title: 'Lippincott Illustrated Reviews: Biochemistry, 8th edition, Chapter 28: Micronutrients: Vitamins',
    organization: 'Wolters Kluwer Health',
    year: 2021,
    url: 'https://shop.lww.com/Lippincott-Illustrated-Reviews--Biochemistry/p/9781975155063',
  },
]

const micronutrient3DData: Organ3DExplorerContent = {
  title: l('3D Multi-Organ Micronutrient Absorption, Activation & Storage Network', '৩ডি বহু-অঙ্গীয় অনুপুষ্টি শোষণ, সক্রিয়করণ ও সঞ্চয় ব্যবস্থা'),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and explore coordinate space to trace how vitamins and essential trace minerals are absorbed, chemically activated into coenzymes, stored, and utilized across human organs.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে ভিটামিন ও ট্রেস খনিজ শোষিত হয়, কো-এনজাইমে রূপান্তরিত হয় এবং অঙ্গসমূহে সঞ্চিত ও ব্যবহৃত হয়।'
  ),
  description: l(
    'Micronutrient economy requires precise inter-organ teamwork: gastric parietal cells secrete intrinsic factor for B12, the jejunum absorbs water-soluble vitamins, the liver stores retinol and activates pyridoxine, the kidneys perform the final 1-alpha-hydroxylation of vitamin D, and bone marrow utilizes folate and iron for erythropoiesis.',
    'অনুপুষ্টির বিপাকীয় অর্থনীতি সুনির্দিষ্ট অঙ্গীয় সমন্বয়ের ওপর নির্ভরশীল: পাকস্থলী B12 শোষণে ইন্ট্রিনসিক ফ্যাক্টর দেয়, জেজুনাম পানিতে দ্রবণীয় ভিটামিন শোষণ করে, যকৃৎ ভিটামিন এ সঞ্চয় করে এবং পাইরিডক্সিন সক্রিয় করে, বৃক্ক ভিটামিন ডি-কে সক্রিয় করে এবং অস্থিমজ্জা রক্ত তৈরিতে ফোলেট ও আয়রন ব্যবহার করে।'
  ),
  organs: [
    {
      id: 'organ-stomach-micronutrient',
      name: l('Stomach (Intrinsic Factor & Acid Dissociation)', 'পাকস্থলী (ইন্ট্রিনসিক ফ্যাক্টর ও অ্যাসিড বিশ্লেষণ)'),
      latinName: 'Gaster',
      system: l('Gastrointestinal & Micronutrient System', 'পরিপাক ও অনুপুষ্টি তন্ত্র'),
      cavity: l('Abdominal Cavity (Epigastrium)', 'উদর গহ্বর (এপিগ্যাস্ট্রিয়াম)'),
      position3D: { x: -6, y: 195, z: 6 },
      color: '#f97316',
      highlightColor: '#fdba74',
      shapeType: 'stomach',
      description: l(
        'Gastric parietal cells secrete hydrochloric acid (HCl) to liberate dietary cobalamin (B12) from dietary protein matrices and synthesize intrinsic factor (IF), an obligate glycoprotein chaperone for terminal ileal B12 uptake.',
        'পাকস্থলীর প্যারাইটাল কোষ হাইড্রোক্লোরিক অ্যাসিড নিঃসরণ করে খাদ্য প্রোটিন থেকে ভিটামিন B12 মুক্ত করে এবং ইন্ট্রিনসিক ফ্যাক্টর (IF) তৈরি করে যা ইলিয়ামে B12 শোষণের জন্য আবশ্যকীয়।'
      ),
      spatialRelations: l(
        'Located in the left upper quadrant beneath the left hemidiaphragm; gastric chief cells also secrete pepsinogen, which is acid-activated into pepsin to digest food proteins bound to vitamins.',
        'বাম ডায়াফ্রামের নিচে অবস্থিত; এর চিফ কোষ পেপসিনোজেন নিঃসরণ করে যা অ্যাসিডের সংস্পর্শে পেপসিনে পরিণত হয়ে ভিটামিনের সাথে যুক্ত প্রোটিন ভেঙে দেয়।'
      ),
      physiology: l(
        'Secreted haptocorrin (R-binder) binds freed B12 in the acidic stomach; pancreatic proteases later cleave haptocorrin in the duodenum, allowing B12 to bind gastric intrinsic factor with high affinity.',
        'অম্লীয় পরিবেশে হ্যাপ্টোকরিন মুক্ত B12 কে রক্ষা করে; ডুওডেনামে অগ্ন্যাশয়ের এনজাইম হ্যাপ্টোকরিন ভেঙে দিলে B12 ইন্ট্রিনসিক ফ্যাক্টরের সাথে শক্ত বন্ধন তৈরি করে।'
      ),
      nutritionConnection: l(
        'Dietary cobalamin is obtained exclusively from animal-derived foods or fortified products; strict vegans require regular oral or sublingual B12 supplementation to prevent deficiency.',
        'ভিটামিন B12 কেবল প্রাণিজ খাদ্য বা সমৃদ্ধ খাবার থেকে পাওয়া যায়; তাই নিরামিষাশীদের স্নায়ু ও রক্ত ঠিক রাখতে নিয়মিত B12 সাপ্লিমেন্ট গ্রহণ করতে হয়।'
      ),
      clinicalSignificance: l(
        'Autoimmune destruction of gastric parietal cells causes pernicious anemia, marked by intrinsic factor deficiency, megaloblastic anemia, and irreversible subacute combined degeneration of the spinal cord.',
        'প্যারাইটাল কোষের অটোইমিউন ধ্বংসের ফলে পারনিশিয়াস অ্যানিমিয়া দেখা দেয়, যা ইন্ট্রিনসিক ফ্যাক্টরের ঘাটতি, মেগালোব্লাস্টিক রক্তস্বল্পতা এবং সুষুম্নাকাণ্ডের মারাত্মক অবক্ষয় ঘটায়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-liver-micronutrient',
      name: l('Liver (Central Micronutrient Storage & Coenzyme Synthesis Hub)', 'যকৃৎ (কেন্দ্রীয় অনুপুষ্টি সঞ্চয় ও কো-এনজাইম সংশ্লেষ কেন্দ্র)'),
      latinName: 'Hepar',
      system: l('Hepatobiliary & Metabolic System', 'যকৃৎ-পিত্ত ও বিপাকীয় তন্ত্র'),
      cavity: l('Right Hypochondrium', 'ডান হাইপোকন্ড্রিয়াম'),
      position3D: { x: 12, y: 200, z: 0 },
      color: '#10b981',
      highlightColor: '#6ee7b7',
      shapeType: 'liver',
      description: l(
        'The primary human storage depot for fat-soluble vitamins (A, D, K) and cobalamin (storing 2–5 years of B12 reserve); executes enzymatic phosphorylation of thiamine to TPP, riboflavin to FAD, and pyridoxine to PLP.',
        'চর্বিতে দ্রবণীয় ভিটামিন (A, D, K) এবং B12-এর প্রধান সঞ্চয় ভাণ্ডার (যা ২-৫ বছরের চাহিদা মেটায়); থায়ামিনকে TPP, রিবোফ্লাভিনকে FAD এবং পাইরিডক্সিনকে PLP-তে ফসফরাইলেট করে সক্রিয় করে।'
      ),
      spatialRelations: l(
        'Receives nutrient-rich portal venous blood directly from the mesenteric circulation, granting first-pass access to all water-soluble vitamins absorbed by the proximal small intestine.',
        'মেসেন্টেরিক সংবহন থেকে পোর্টাল শিরার মাধ্যমে পুষ্টিসমৃদ্ধ রক্ত সরাসরি পায়, ফলে ক্ষুদ্রান্ত্র থেকে শোষিত সমস্ত পানিতে দ্রবণীয় ভিটামিন প্রথমে যকৃতেই প্রবেশ করে।'
      ),
      physiology: l(
        'Hepatosplenic stellate cells (Ito cells) store retinyl esters in lipid droplets; hepatocytes synthesize ceruloplasmin for copper transport, transferrin for iron transport, and albumin for zinc transport.',
        'যকৃতের স্টেলেট কোষ ভিটামিন এ সঞ্চয় করে রাখে; এবং হেপাটোসাইট কপার পরিবহনের জন্য সেরুলোপ্লাজমিন, আয়রনের জন্য ট্রান্সফেরিন এবং জিংকের জন্য অ্যালবুমিন তৈরি করে।'
      ),
      nutritionConnection: l(
        'Dietary beta-carotene from yellow and dark-green vegetables is cleaved by intestinal and hepatic beta-carotene 15,15\'-monooxygenase into two molecules of all-trans-retinal.',
        'শাকসবজি থেকে পাওয়া বিটা-ক্যারোটিন যকৃৎ ও অন্ত্রের এনজাইম দ্বারা ভেঙে দুটি রেটিনল ভিটামিন এ অণুতে পরিণত হয়।'
      ),
      clinicalSignificance: l(
        'Cirrhosis depletes hepatic vitamin reserves and impairs 25-hydroxylation of vitamin D, pyridoxal kinase activity, and bile acid secretion, leading to severe fat-soluble vitamin malabsorption and coagulopathy.',
        'লিভার সিরোসিস ভিটামিন সঞ্চয় নিঃশেষ করে, ভিটামিন ডি সক্রিয়করণ ও পিত্ত লবণ নিঃসরণ ব্যাহত করে, ফলে মারাত্মক রক্তক্ষরণ ও হাড়ের রোগ দেখা দেয়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-kidneys-micronutrient',
      name: l('Kidneys (Calcitriol Endocrine Activation & Trace Metal Conservation)', 'বৃক্ক (ক্যালসিট্রিওল হরমোন সক্রিয়করণ ও খনিজ সংরক্ষণ)'),
      latinName: 'Renes',
      system: l('Renal & Mineral Homeostatic System', 'রেচন ও খনিজ ভারসাম্য তন্ত্র'),
      cavity: l('Retroperitoneal Flanks', 'রেট্রোপেরিটোনিয়াল পার্শ্বদেশ'),
      position3D: { x: 0, y: 260, z: -10 },
      color: '#0284c7',
      highlightColor: '#38bdf8',
      shapeType: 'kidneys',
      description: l(
        'Proximal convoluted tubule cells express mitochondrial 1-alpha-hydroxylase (CYP27B1) stimulated by PTH, converting 25-hydroxyvitamin D into biologically active 1,25-dihydroxyvitamin D3 (calcitriol).',
        'বৃক্কের প্রক্সিমাল টিউবিউলে মাইটোকন্ড্রিয়াল ১-আলফা-হাইড্রোক্সিলেজ (CYP27B1) এনজাইম থাকে যা PTH-এর প্রভাবে ভিটামিন ডি-কে সক্রিয় ক্যালসিট্রিওলে রূপান্তরিত করে।'
      ),
      spatialRelations: l(
        'Paired retroperitoneal organs receiving 20–25% of cardiac output; tightly regulate the tubular reabsorption of phosphate, calcium, magnesium, selenium, and water-soluble vitamin cofactors.',
        'রেট্রোপেরিটোনিয়ামে অবস্থিত এবং হৃদপিণ্ডের ২০-২৫% রক্ত গ্রহণ করে; ফসফেট, ক্যালসিয়াম, ম্যাগনেসিয়াম এবং ভিটামিন কোফ্যাক্টরের পুনর্শোষণ সুনির্দিষ্টভাবে বজায় রাখে।'
      ),
      physiology: l(
        'Calcitriol functions as a nuclear steroid hormone, binding the vitamin D receptor (VDR) to induce intestinal calbindin, increasing dietary calcium and phosphate absorption to mineralize skeleton.',
        'ক্যালসিট্রিওল স্টেরয়েড হরমোনের মতো কাজ করে এবং VDR রিসেপ্টরে যুক্ত হয়ে অন্ত্রে ক্যালবাইন্ডিন তৈরি বাড়ায়, যা খাদ্য থেকে ক্যালসিয়াম ও ফসফেট শোষণ নিশ্চিত করে।'
      ),
      nutritionConnection: l(
        'Cutaneous 7-dehydrocholesterol undergoes UV-B photolysis to cholecalciferol, which requires sequential hepatic 25-hydroxylation and renal 1-alpha-hydroxylation to achieve systemic bioactivity.',
        'সূর্যালোকের UV-B রশ্মিতে ত্বকে ভিটামিন ডি৩ তৈরি হয়, যা প্রথমে যকৃতে এবং পরে বৃক্কে জারিত হয়ে পূর্ণ সক্রিয় রূপ ধারণ করে।'
      ),
      clinicalSignificance: l(
        'Chronic kidney disease (CKD) impairs 1-alpha-hydroxylase, precipitating hypocalcemia, secondary hyperparathyroidism, and renal osteodystrophy (mineral bone disease), requiring exogenous calcitriol therapy.',
        'দীর্ঘস্থায়ী কিডনি রোগে (CKD) ১-আলফা-হাইড্রোক্সিলেজ নষ্ট হয়ে যায়, ফলে ক্যালসিয়াম কমে গিয়ে মারাত্মক হাড়ের ক্ষয়রোগ বা রেনাল অস্টিওডিস্ট্রফি দেখা দেয়।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-marrow-micronutrient',
      name: l('Bone Marrow & Skeletal Hub (Cofactor-Dependent Hematopoiesis)', 'অস্থিমজ্জা ও কঙ্কাল কেন্দ্র (কোফ্যাক্টর-নির্ভর রক্ত উৎপাদন)'),
      latinName: 'Medulla ossium',
      system: l('Hematopoietic & Skeletal System', 'রক্তোৎপাদন ও কঙ্কাল তন্ত্র'),
      cavity: l('Axial and Appendicular Medullary Cavities', 'অক্ষীয় ও উপাঙ্গীয় মজ্জা গহ্বর'),
      position3D: { x: 0, y: 130, z: -8 },
      color: '#dc2626',
      highlightColor: '#f87171',
      shapeType: 'skeleton',
      description: l(
        'The premier site of cellular proliferation in the human body, producing 200 billion red blood cells daily; absolute dependency on folate (THF) and cobalamin (B12) for thymidylate DNA synthesis, and iron/PLP for heme assembly.',
        'দেহের সবচেয়ে দ্রুত বর্ধনশীল কোষের স্থান, যা দৈনিক ২০০ বিলিয়ন লোহিত রক্তকণিকা তৈরি করে; ডিএনএ সংশ্লেষে ফোলেট ও B12 এবং হিম তৈরিতে আয়রন ও ভিটামিন B6 (PLP)-এর ওপর সম্পূর্ণ নির্ভরশীল।'
      ),
      spatialRelations: l(
        'Protected within the cancellous trabeculae of the pelvis, sternum, vertebrae, and proximal long bones; highly vascularized with sinusoidal capillaries allowing mature erythrocytes to enter circulation.',
        'শ্রোণীচক্র, স্টার্নাম ও মেরুদণ্ডের ভেতর অবস্থিত; প্রচুর রক্তনালি সমৃদ্ধ যা নতুন তৈরি লোহিত রক্তকণিকাকে সংবহনে প্রবেশ করিয়ে দেয়।'
      ),
      physiology: l(
        'Thymidylate synthase utilizes N5,N10-methylene-THF to convert dUMP into dTMP for DNA replication; erythroblasts assemble protoporphyrin IX inside mitochondria via PLP-dependent ALA synthase.',
        'থাইমিডিলেট সিন্থেজ এনজাইম ফোলেটের সাহায্যে dUMP কে dTMP-তে রূপান্তর করে ডিএনএ বানায়; আর এরিথ্রোব্লাস্টের মাইটোকন্ড্রিয়ায় ভিটামিন B6 দিয়ে হিম কঙ্কাল তৈরি হয়।'
      ),
      nutritionConnection: l(
        'Dietary iron is incorporated into erythroblast ferritin or ferrochelatase-catalyzed heme insertion; vitamin C (ascorbate) reduces ferric iron (Fe3+) to ferrous iron (Fe2+) in the gut, quadrupling absorption.',
        'খাদ্যের আয়রন লোহিত কোষে হিম তৈরিতে ব্যবহৃত হয়; ভিটামিন সি অন্ত্রে আয়রনকে Fe3+ থেকে Fe2+ এ বিজারিত করে শোষণ বহুগুণ বাড়িয়ে দেয়।'
      ),
      clinicalSignificance: l(
        'Deficiency of folate or cobalamin produces nuclear-cytoplasmic dyssynchrony: megaloblastic erythroblasts fail to divide due to impaired DNA synthesis, undergoing intramedullary apoptosis and macrocytic anemia.',
        'ফোলেট বা B12-এর ঘাটতিতে ডিএনএ তৈরি না হওয়ায় নিউক্লিয়াস বড় হয়ে যায় কিন্তু কোষ বিভক্ত হতে পারে না, ফলে মেগালোব্লাস্টিক রক্তস্বল্পতা তৈরি হয়।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism16MicronutrientsCofactorsLesson: LessonTopic = {
  id: 'topic.metabolism.micronutrients-cofactors',
  slug: 'micronutrients-cofactors',
  version: 1,
  updatedAt: '2026-10-13',
  title: l('16 · Micronutrients & Metabolic Cofactors', '১৬ · অনুপুষ্টি ও বিপাকীয় কোফ্যাক্টর'),
  summary: l(
    'Biochemical taxonomy, enzyme catalytic mechanisms, and pathophysiology of metabolic cofactors: water-soluble B-complex coenzymes (thiamine pyrophosphate TPP, flavin adenine dinucleotide FAD, nicotinamide adenine dinucleotide NAD+, coenzyme A, pyridoxal phosphate PLP, biotin, tetrahydrofolate THF, methylcobalamin/adenosylcobalamin), fat-soluble vitamins (A, D, E, K), essential trace minerals (iron-sulfur clusters, zinc metalloenzymes, copper oxidases, selenium selenoproteins), cofactor interdependency loops (the folate trap and homocysteine crossroads), and diagnostic deficiency syndromes.',
    'বিপাকীয় কোফ্যাক্টরের জৈবরসায়ন, এনজাইমের অনুঘটন প্রক্রিয়া এবং প্যাথোফিজিওলজি: পানিতে দ্রবণীয় ভিটামিন বি-কমপ্লেক্স কো-এনজাইম (থায়ামিন পাইরোফসফেট টিপিপি, এফএডি, এনএডি+, কোএনজাইম এ, পিএলপি, বায়োটিন, টিএইচএফ, কোবালামিন), চর্বিতে দ্রবণীয় ভিটামিন (এ, ডি, ই, কে), ট্রেস খনিজ (আয়রন-সালফার ক্লাস্টার, জিংক, কপার, সেলেনিয়াম), কোফ্যাক্টরের পারস্পরিক আন্তঃনির্ভরতা (ফোলেট ট্র্যাপ ও হোমোসিস্টিন পথ) এবং ক্লিনিক্যাল ঘাটতিজনিত রোগ।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Systematically categorize water-soluble and fat-soluble vitamins by their active coenzyme structures, enzyme reaction classes catalyzed, and metabolic pathways supported.',
      'পানিতে ও চর্বিতে দ্রবণীয় ভিটামিনসমূহকে তাদের সক্রিয় কো-এনজাইমের গঠন, অনুঘটিত রাসায়নিক বিক্রিয়া এবং সংশ্লিষ্ট বিপাকীয় পথের ভিত্তিতে সুনির্দিষ্টভাবে শ্রেণিবিভাগ করা।',
    ),
    l(
      'Delineate the molecular mechanisms of thiamine (TPP in alpha-ketoacid decarboxylation), pyridoxine (PLP in transamination and decarboxylation), biotin (ATP-dependent carboxylation), and cobalamin/folate (one-carbon transfer).',
      'থায়ামিন (টিপিপি দিয়ে আলফা-কিটোঅ্যাসিড কার্বক্সিলেশন), পাইরিডক্সিন (পিএলপি দিয়ে ট্রান্সঅ্যামিনেশন), বায়োটিন (এটিপি-নির্ভর কার্বক্সিলেশন) এবং কোবালামিন/ফোলেটের (এক-কার্বন স্থানান্তর) আণবিক কার্যপদ্ধতি বিশ্লেষণ করা।',
    ),
    l(
      'Formulate clinical differentials for micronutrient deficiency states: distinguish Wernicke-Korsakoff syndrome, pellagra, scurvy, sideroblastic anemia, and megaloblastic anemia with methylmalonic acid profiling.',
      'অনুপুষ্টি ঘাটতিজনিত ক্লিনিক্যাল রোগসমূহের পার্থক্য নিরূপণ করা: ওয়ার্নিক-কোরাসাকফ সিন্ড্রোম, পেলাগ্রা, স্কার্ভি, সিডারোব্লাস্টিক রক্তস্বল্পতা এবং মিথাইলম্যালোনিক অ্যাসিডের মাধ্যমে মেগালোব্লাস্টিক রক্তস্বল্পতার নিখুঁত ডায়াগনোসিস নির্ধারণ করা।',
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate', 'topic.metabolism.tca-oxphos'],
  relatedTopicIds: ['topic.metabolism.amino-acid-catabolism-urea', 'topic.metabolism.purine-pyrimidine-metabolism', 'topic.metabolism.heme-bilirubin-metabolism'],
  references: micronutrientRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch14-ch18', 'harpers-biochem-32e-ch44'],
    structure: ['harpers-biochem-32e-ch44', 'marks-medbiochem-6e-ch39'],
    mechanism: ['marks-medbiochem-6e-ch39', 'lippincott-biochem-8e-ch28'],
    integration: ['lehninger-biochem-8e-ch14-ch18', 'lippincott-biochem-8e-ch28'],
    practice: ['harpers-biochem-32e-ch44', 'marks-medbiochem-6e-ch39'],
    takeaways: ['lehninger-biochem-8e-ch14-ch18', 'harpers-biochem-32e-ch44'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Micronutrients: The Catalytic and Redox Vanguard', '১. অনুপুষ্টি: বিপাকের অনুঘটক ও রেডক্স অগ্রদূত'), sectionId: 'introduction' },
      { id: 'sec-b-vitamins', label: l('2. The Water-Soluble B-Complex Coenzyme Engine', '২. পানিতে দ্রবণীয় বি-কমপ্লেক্স কো-এনজাইম চক্র'), sectionId: 'structure' },
      { id: 'sec-fat-metals', label: l('3. Fat-Soluble Vitamins & Metallocluster Catalysts', '৩. চর্বিতে দ্রবণীয় ভিটামিন ও ধাতব অনুঘটক'), sectionId: 'mechanism' },
      { id: 'sec-integration', label: l('4. Cofactor Interdependence, The Folate Trap & Methylation', '৪. কোফ্যাক্টরের আন্তঃনির্ভরতা, ফোলেট ট্র্যাপ ও মিথাইলেশন'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('5. Deficiency Syndromes & Biomarker Diagnostics', '৫. ঘাটতিজনিত রোগ ও বায়োমার্কার ডায়াগনস্টিকস'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Synthesis & Clinical Summary', '৬. উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা ও ক্লিনিক্যাল সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Thiamine Pyrophosphate (TPP)', 'থায়ামিন পাইরোফসফেট (টিপিপি)'),
        definition: l(
          'Active coenzyme form of vitamin B1 synthesized by thiamine pyrophosphokinase; contains a thiazolium ring whose acidic C2 proton dissociates to form a carbanion, stabilizing hydroxyethyl intermediates during oxidative decarboxylation of alpha-ketoacids.',
          'ভিটামিন বি১-এর সক্রিয় রূপ; এতে একটি থায়াজোলিয়াম রিং থাকে যার C2 প্রোটন অপসারিত হয়ে কার্বঅ্যানিয়ন তৈরি করে আলফা-কিটোঅ্যাসিডের অক্সিডেটিভ ডিকার্বক্সিলেশনে ইন্টারমিডিয়েটকে স্থিতিশীল করে।'
        ),
      },
      {
        term: l('Pyridoxal 5\'-Phosphate (PLP)', 'পাইরিডক্সাল ৫\'-ফসফেট (পিএলপি)'),
        definition: l(
          'Active coenzyme form of vitamin B6 synthesized by pyridoxal kinase; forms a covalent Schiff base intermediate with enzyme lysine residues, acting as an electrophilic electron sink to stabilize carbanions during transamination, decarboxylation, and racemization.',
          'ভিটামিন বি৬-এর সক্রিয় রূপ; এনজাইমের লাইসিন অ্যামিনো অ্যাসিডের সাথে শিফ বেস বন্ধন তৈরি করে এবং ইলেকট্রন সিংক হিসেবে কাজ করে ট্রান্সঅ্যামিনেশন ও ডিকার্বক্সিলেশন সম্পন্ন করে।'
        ),
      },
      {
        term: l('The Methyl-Folate Trap', 'মিথাইল-ফোলেট ট্র্যাপ'),
        definition: l(
          'A functional cellular folate deficiency induced by lack of cobalamin (vitamin B12): without B12, methionine synthase cannot accept the methyl group from N5-methyl-THF, irreversibly trapping cellular folate in the N5-methyl form and starving thymidylate DNA synthesis.',
          'ভিটামিন B12 ঘাটতির কারণে কোষীয় ফোলেট আটকে যাওয়ার অবস্থা: B12 না থাকলে মিথিওনিন সিন্থেজ N5-মিথাইল-THF থেকে মিথাইল নিতে পারে না, ফলে সমস্ত ফোলেট আটকে গিয়ে ডিএনএ সংশ্লেষ বন্ধ হয়ে যায়।'
        ),
      },
      {
        term: l('Iron-Sulfur (Fe-S) Clusters', 'আয়রন-সালফার (Fe-S) ক্লাস্টার'),
        definition: l(
          'Inorganic prosthetic groups assembled in mitochondria (e.g., [2Fe-2S], [4Fe-4S]) that participate in single-electron transfer reactions within respiratory complexes I, II, and III, and non-redox catalytic isomerization in aconitase.',
          'মাইটোকন্ড্রিয়ায় গঠিত অজৈব প্রস্থেটিক গ্রুপ (যেমন [2Fe-2S], [4Fe-4S]) যা শ্বসন শৃঙ্খলে ইলেকট্রন স্থানান্তর করে এবং সাইট্রিক অ্যাসিড চক্রের অ্যাকোনাইটেজ এনজাইমের গঠনে অংশ নেয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Diagnostic Interpretation of Erythrocyte Transketolase Activation Coefficient (ETKAC)', 'লোহিত রক্তকণিকার ট্রান্সকিটোলেজ সক্রিয়করণ সূচকের (ETKAC) ডায়াগনস্টিক হিসাব'),
        steps: [
          l(
            'Step 1: Obtain washed erythrocyte hemolysate from a patient suspected of chronic malnutrition and alcohol-associated neurological deficit. Measure baseline transketolase enzyme activity (Activity_basal) spectrophotometrically by monitoring pentose phosphate flux: baseline activity = 18.0 units/L.',
            'ধাপ ১: পুষ্টিহীনতা ও মদ্যপানজনিত স্নায়ুরোগে আক্রান্ত রোগীর লোহিত রক্তকণিকা থেকে স্বাভাবিক ট্রান্সকিটোলেজ এনজাইম সক্রিয়তা পরিমাপ করা হলো: প্রাথমিক মাত্রা = ১৮.০ ইউনিট/লিটার।'
          ),
          l(
            'Step 2: Add excess exogenous thiamine pyrophosphate (TPP) in vitro to the patient sample and re-measure maximal transketolase activity (Activity_stimulated): stimulated activity = 27.9 units/L.',
            'ধাপ ২: পরীক্ষাগারে রোগীর ওই নমুনায় অতিরিক্ত থায়ামিন পাইরোফসফেট (টিপিপি) যোগ করে পুনরায় সর্বোচ্চ এনজাইম সক্রিয়তা মাপা হলো: সক্রিয়তার নতুন মাত্রা = ২৭.৯ ইউনিট/লিটার।'
          ),
          l(
            'Step 3: Calculate the activation coefficient (AC) percentage stimulation: AC (%) = [(Activity_stimulated - Activity_basal) / Activity_basal] * 100 = [(27.9 - 18.0) / 18.0] * 100 = (9.9 / 18.0) * 100 = 55.0%.',
            'ধাপ ৩: সক্রিয়করণ বৃদ্ধির শতকরা হার নির্ণয়: [(সর্বোচ্চ মাত্রা - প্রাথমিক মাত্রা) / প্রাথমিক মাত্রা] * ১০০ = [(২৭.৯ - ১৮.০) / ১৮.০] * ১০০ = ৫৫.০% বৃদ্ধি।'
          ),
          l(
            'Step 4: Clinical interpretation criteria: Normal thiamine status = AC < 15%; marginal deficiency = 15% to 25%; severe clinical thiamine deficiency = AC > 25%. The patient\'s ETKAC of 55% confirms severe biochemical thiamine depletion (Wernicke encephalopathy risk), mandating immediate intravenous thiamine prior to any carbohydrate administration.',
            'ধাপ ৪: ক্লিনিক্যাল সিদ্ধান্ত: স্বাভাবিক মাত্রা < ১৫%; সামান্য ঘাটতি ১৫-২৫%; এবং মারাত্মক থায়ামিন ঘাটতি > ২৫%। রোগীর ৫৫% মান প্রমাণ করে যে তার চরম থায়ামিন শূন্যতা রয়েছে (ওয়ার্নিক এনসেফালোপ্যাথির ঝুঁকি), যার জন্য গ্লুকোজ দেওয়ার আগেই অবিলম্বে শিরায় থায়ামিন ইনজেকশন দিতে হবে।'
          ),
        ],
        conclusion: l(
          'An erythrocyte transketolase activation coefficient exceeding 25% establishes profound biochemical apoenzyme unsaturation due to thiamine deficiency, necessitating immediate parenteral TPP replacement.',
          'লোহিত রক্তকণিকার ট্রান্সকিটোলেজ সক্রিয়করণ বৃদ্ধি ২৫% এর বেশি হলে তা মারাত্মক থায়ামিন ঘাটতি প্রমাণ করে, যার তাৎক্ষণিক চিকিৎসায় শিরায় থায়ামিন প্রয়োগ আবশ্যক।'
        ),
      },
      {
        title: l('Differential Biomarker Stratification: Methylmalonic Acid vs Homocysteine', 'ভিটামিন B12 বনাম ফোলেট ঘাটতি নিরূপণে মিথাইলম্যালোনিক অ্যাসিড ও হোমোসিস্টিনের তুলনামূলক হিসাব'),
        steps: [
          l(
            'Step 1: Understand the dual enzymatic routes: Methionine synthase requires BOTH N5-methyl-THF (folate) AND methylcobalamin (B12) to convert homocysteine to methionine: Homocysteine + N5-methyl-THF -> Methionine + THF. Therefore, deficiency of EITHER folate OR B12 causes hyperhomocysteinemia.',
            'ধাপ ১: মিথিওনিন সিন্থেজ এনজাইম হোমোসিস্টিনকে মিথিওনিনে রূপান্তর করতে ফোলেট এবং ভিটামিন B12 উভয়ের ওপর নির্ভর করে। তাই ফোলেট বা B12 যেকোনো একটির ঘাটতি হলেই রক্তে হোমোসিস্টিনের মাত্রা বৃদ্ধি পায়।'
          ),
          l(
            'Step 2: Trace the unique B12-dependent branch: Mitochondrial methylmalonyl-CoA mutase converts L-methylmalonyl-CoA to succinyl-CoA using 5\'-deoxyadenosylcobalamin (B12) exclusively. Folate plays zero role in this pathway: Propionyl-CoA -> Methylmalonyl-CoA -> Succinyl-CoA (B12-dependent).',
            'ধাপ ২: মাইটোকন্ড্রিয়াল মিথাইলম্যালোনাইল-কোএ মিউটেজ এনজাইম মিথাইলম্যালোনাইল-কোএ কে সাকসিনাইল-কোএ তে রূপান্তর করতে কেবল B12 ব্যবহার করে; ফোলেটের এতে কোনো ভূমিকা নেই।'
          ),
          l(
            'Step 3: Analyze laboratory data from Patient A: Serum total homocysteine = 38 micromol/L (elevated, ref < 15); Serum methylmalonic acid (MMA) = 1,450 nmol/L (severely elevated, ref 87–318 nmol/L). Both markers elevated -> Definitively diagnostic of Vitamin B12 deficiency.',
            'ধাপ ৩: ল্যাবরেটরি রিপোর্ট মূল্যায়ন: রক্তে হোমোসিস্টিন = ৩৮ মাইক্রোমোল/লি (বেশি); রক্তে মিথাইলম্যালোনিক অ্যাসিড (MMA) = ১৪৫০ ন্যানোমোল/লি (মারাত্মক বেশি)। উভয় উপাদান বৃদ্ধি পাওয়া নিশ্চিতভাবে ভিটামিন B12-এর ঘাটতি নির্দেশ করে।'
          ),
          l(
            'Step 4: Analyze laboratory data from Patient B: Serum total homocysteine = 42 micromol/L (elevated); Serum methylmalonic acid = 180 nmol/L (normal). Elevated homocysteine with normal MMA -> Definitively diagnostic of isolated Folate (B9) deficiency.',
            'ধাপ ৪: রোগী B-এর ক্ষেত্রে হোমোসিস্টিন বেশি কিন্তু MMA স্বাভাবিক; এটি নিশ্চিতভাবে একক ফোলেটের (ভিটামিন B9) ঘাটতি প্রমাণ করে।'
          ),
        ],
        conclusion: l(
          'Elevated methylmalonic acid uniquely identifies cobalamin deficiency, whereas isolated hyperhomocysteinemia with normal methylmalonic acid confirms folate deficiency, preventing dangerous mistreatment of B12 neuropathy with folate alone.',
          'মিথাইলম্যালোনিক অ্যাসিডের বৃদ্ধি নিশ্চিতভাবে ভিটামিন B12 ঘাটতি চিহ্নিত করে, যা স্নায়ুর স্থায়ী ক্ষতি এড়িয়ে সঠিক চিকিৎসা নিশ্চিত করতে অপরিহার্য।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does administering pharmacological doses of folic acid alone to a patient with unrecognized vitamin B12 deficiency resolve their megaloblastic anemia while worsening their neurological degeneration?',
          'অজ্ঞাত ভিটামিন B12 ঘাটতির রোগীকে কেবল উচ্চমাত্রায় ফলিক অ্যাসিড দিলে কেন তার রক্তস্বল্পতা দূর হয় কিন্তু স্নায়বিক পক্ষাঘাত ও অবক্ষয় আরো মারাত্মক আকার ধারণ করে?',
        ),
        answer: l(
          'Pharmacological folic acid bypasses the B12-dependent methionine synthase block by being directly reduced to dihydrofolate and tetrahydrofolate by dihydrofolate reductase. This restores N5,N10-methylene-THF levels, replenishing thymidylate synthesis and normalizing erythroblast DNA replication, which resolves the megaloblastic anemia. However, supplemental folate does nothing to restore 5\'-deoxyadenosylcobalamin for methylmalonyl-CoA mutase, nor does it restore S-adenosylmethionine (SAM) for myelin basic protein methylation. Consequently, toxic methylmalonate and abnormal branched-chain fatty acids continue to incorporate into neural myelin sheaths, allowing irreversible subacute combined degeneration of the dorsal and lateral columns to progress silently.',
          'উচ্চমাত্রার ফলিক অ্যাসিড সরাসরি ডাইহাইড্রোফোলেট রিডাক্টেজ দিয়ে সক্রিয় ফোলেটে পরিণত হয়ে রক্ত তৈরিতে ডিএনএ উৎপাদন স্বাভাবিক করে দেয়, ফলে রক্তস্বল্পতা ভালো হয়ে যায়। কিন্তু এটি ভিটামিন B12-নির্ভর স্নায়ুর মায়েলিন প্রোটিনের মিথাইলেশন বা মিথাইলম্যালোনাইল-কোএ বিপাক কোনোভাবেই ঠিক করতে পারে না। ফলে রক্তস্বল্পতার উপসর্গ চাপা পড়ে গেলেও সুষুম্নাকাণ্ডের মায়েলিন আবরণী ধ্বংস হতে থাকে এবং রোগী দ্রুত পক্ষাঘাতগ্রস্ত হয়ে পড়ে।'
        ),
      },
      {
        question: l(
          'What is the biochemical mechanism by which chronic anti-tuberculosis therapy with isoniazid (INH) precipitates peripheral neuropathy, and what cofactor co-administration prevents it?',
          'যক্ষ্মা প্রতিরোধী ওষুধ আইসোনিয়াজিড (INH) দীর্ঘদিন সেবন করলে কোন জৈবরাসায়নিক ক্রিয়ায় পেরিফেরাল নিউরোপ্যাথি দেখা দেয় এবং কোন কোফ্যাক্টর দিয়ে তা প্রতিরোধ করা হয়?',
        ),
        answer: l(
          'Isoniazid is a hydrazine derivative that reacts chemically with pyridoxal and pyridoxal 5\'-phosphate (PLP, vitamin B6) to form an inactive, water-soluble isonicotinoyl-hydrazone adduct that is excreted rapidly in the urine. Furthermore, isoniazid directly inhibits the enzyme pyridoxal kinase, preventing the phosphorylation of dietary pyridoxine into active PLP. Depletion of PLP cripples glutamate decarboxylase (reducing inhibitory GABA synthesis in neurons) and impairing sphingolipid synthesis for axonal myelin. To prevent this severe sensory and motor peripheral neuropathy, oral pyridoxine (vitamin B6, 25–50 mg daily) is routinely co-prescribed with isoniazid.',
          'আইসোনিয়াজিড ভিটামিন B6 (PLP)-এর সাথে যুক্ত হয়ে একটি নিষ্ক্রিয় হাইড্রাজন যৌগ তৈরি করে যা প্রস্রাবের সাথে শরীর থেকে ভিটামিন B6 বের করে দেয়; পাশাপাশি এটি পাইরিডক্সাল কাইনেজ এনজাইম বন্ধ করে নতুন PLP তৈরিতে বাধা দেয়। ফলে মস্তিষ্কে GABA তৈরি কমে যায় এবং স্নায়ুর মায়েলিন ক্ষতিগ্রস্ত হয়ে তীব্র হাত-পায়ে অবশ ভাব ও জ্বালাপোড়া দেখা দেয়। এই স্নায়ুরোগ প্রতিরোধ করতে যক্ষ্মার ওষুধের সাথে প্রতিদিন ভিটামিন B6 (পাইরিডক্সিন) সেবন করানো হয়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: micronutrient3DData,
  interactiveDiagram: {
    id: 'micronutrient-coenzyme-hub',
    title: l('The Micronutrient & Coenzyme Metabolic Engine', 'অনুপুষ্টি ও কো-এনজাইম বিপাকীয় অনুঘটন চক্র'),
    description: l(
      'Interactive pathway map of active metabolic coenzymes and metalloclusters: explore how B-complex cofactors, fat-soluble vitamins, and essential trace minerals power cellular respiration, amino acid flux, and one-carbon transfers.',
      'সক্রিয় বিপাকীয় কো-এনজাইম ও ধাতব ক্লাস্টারের মিথস্ক্রিয় মানচিত্র: পর্যবেক্ষণ করুন কীভাবে ভিটামিন বি-কমপ্লেক্স, চর্বিতে দ্রবণীয় ভিটামিন এবং ট্রেস খনিজসমূহ কোষীয় শ্বসন ও ডিএনএ সংশ্লেষ সচল রাখে।'
    ),
    disclaimer: l(
      'Coenzyme catalytic mechanisms, reaction classifications, and enzyme associations verified against Lehninger Principles of Biochemistry (8th ed) and Harper Illustrated Biochemistry (32nd ed).',
      'কো-এনজাইমের রাসায়নিক ক্রিয়া, বিক্রিয়ার শ্রেণিবিভাগ এবং এনজাইম সম্পর্ক লেহনিঞ্জার এবং হার্পারস বায়োকেমিস্ট্রি দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'node-tpp-alpha-ketoacids',
        label: l('1. Thiamine Pyrophosphate (TPP): Alpha-Ketoacid Decarboxylation', '১. থায়ামিন পাইরোফসফেট (টিপিপি): আলফা-কিটোঅ্যাসিড ভাঙন'),
        description: l(
          'Forms a reactive thiazolium carbanion that attacks carbonyl carbons, stabilizing acyl intermediates in the pyruvate dehydrogenase complex (PDC), alpha-ketoglutarate dehydrogenase, branched-chain alpha-ketoacid dehydrogenase (BCKDH), and transketolase.',
          'থায়াজোলিয়াম রিং দিয়ে পাইরুভেট ডিহাইড্রোজিনেজ (PDC), আলফা-কিটোগ্লুটারেট ডিহাইড্রোজিনেজ এবং পেন্টোজ ফসফেট পথের ট্রান্সকিটোলেজে কার্বন ডাই-অক্সাইড অপসারণে কাজ করে।'
        ),
        details: l(
          'Deficiency cripples aerobic glucose oxidation, causing severe intracellular ATP depletion, lactic acid accumulation, dilated cardiomyopathy (wet beriberi), and Wernicke-Korsakoff syndrome in chronic alcoholism.',
          'টিপিপির ঘাটতিতে কোষীয় শ্বসন থমকে যায়, কোষে ল্যাকটিক অ্যাসিড জমে এবং মারাত্মক হার্ট ফেইলিউর (ওয়েট বেরিবেরি) ও মস্তিষ্কের স্নায়ুক্ষয় (ওয়ার্নিক সিন্ড্রোম) ঘটে।'
        ),
        sectionId: 'structure',
        color: '#f59e0b',
        svgCoords: { cx: 70, cy: 75, r: 24 },
      },
      {
        id: 'node-fad-fmn-redox',
        label: l('2. Riboflavin (FAD / FMN): Two-Electron & One-Electron Redox Hub', '২. রিবোফ্লাভিন (এফএডি / এফএমএন): রেডক্স ইলেকট্রন বাহক'),
        description: l(
          'Isoalloxazine ring undergoes reversible reduction accepting two electrons and two protons (FAD -> FADH2), operating in mitochondrial Complex I (FMN), Complex II (succinate dehydrogenase), acyl-CoA dehydrogenase, and glutathione reductase.',
          'আইসোঅ্যালোঅক্সাজিন রিং দিয়ে দুটি ইলেকট্রন গ্রহণ করে FADH2 তৈরি করে; শ্বসন শৃঙ্খলের কমপ্লেক্স ১ ও ২, ফ্যাটি অ্যাসিডের বিটা-জারণ এবং গ্লুটাথিয়ন রিডাক্টেজে কাজ করে।'
        ),
        details: l(
          'Crucial for cellular antioxidant defense by recycling oxidized glutathione (GSSG -> 2 GSH); deficiency produces angular cheilitis, glossitis, and corneal neovascularization.',
          'কোষীয় অ্যান্টিঅক্সিডেন্ট গ্লুটাথিয়ন পুনরুজ্জীবনে অপরিহার্য; ঘাটতি হলে মুখের কোণায় ঘা (চিলাইটিস), জিহ্বা প্রদাহ এবং চোখের কর্নিয়ায় রক্তনালি তৈরি হয়।'
        ),
        sectionId: 'structure',
        color: '#eab308',
        svgCoords: { cx: 160, cy: 75, r: 24 },
      },
      {
        id: 'node-nad-nadp-hydride',
        label: l('3. Niacin (NAD+ / NADP+): Pyridine Nucleotide Hydride Transfer', '৩. নিয়াসিন (এনএডি+ / এনএডিপি+): পাইরিডিন নিউক্লিওটাইড রেডক্স'),
        description: l(
          'Nicotinamide ring acts as an obligate hydride (:H-) acceptor/donor in catabolic dehydrogenase reactions (NAD+) and reductive biosyntheses (NADPH); also consumed as a substrate by PARP DNA repair enzymes and sirtuin deacetylases.',
          'ক্যাটাবলিক বিক্রিয়ায় হাইড্রাইড গ্রহণ করে NADH তৈরি করে এবং লিপোজেনেসিসে NADPH যোগায়; পাশাপাশি ডিএনএ মেরামতকারী PARP ও সার্টুইন এনজাইমের সাবস্ট্রেট হিসেবে খরচ হয়।'
        ),
        details: l(
          'Can be synthesized endogenously from dietary tryptophan (60 mg Trp yields 1 mg niacin) requiring vitamins B2 and B6; deficiency results in pellagra (the 4 Ds: diarrhea, dermatitis, dementia, death).',
          'খাদ্যের ট্রিপটোফ্যান অ্যামিনো অ্যাসিড থেকে ভিটামিন B2 ও B6-এর সাহায্যেও তৈরি হতে পারে; এর অভাবে পেলাগ্রা (ডায়রিয়া, চর্মরোগ, ডিমেনশিয়া ও মৃত্যু) ঘটে।'
        ),
        sectionId: 'structure',
        color: '#3b82f6',
        svgCoords: { cx: 250, cy: 75, r: 24 },
      },
      {
        id: 'node-coa-acyl-trafficking',
        label: l('4. Pantothenate (CoA-SH & 4\'-Phosphopantetheine): Acyl Activation', '৪. প্যান্টোথেনেট (কোএ-এসএইচ): ফ্যাটি অ্যাসিড ও অ্যাসিটাইল সক্রিয়করণ'),
        description: l(
          'Possesses a terminal reactive thiol (-SH) group forming high-energy thioester bonds (Delta G0\' = -31.5 kJ/mol) with acyl groups, serving as the essential carrier in the citric acid cycle (acetyl-CoA, succinyl-CoA) and fatty acid synthase (ACP).',
          'প্রান্তীয় থায়ল (-SH) মূলক দিয়ে উচ্চ-শক্তির থায়োএস্টার বন্ধন তৈরি করে; সাইট্রিক অ্যাসিড চক্রে অ্যাসিটাইল-কোএ এবং ফ্যাটি অ্যাসিড সংশ্লেষে ACP ক্যারিয়ার হিসেবে কাজ করে।'
        ),
        details: l(
          'Ubiquitous in human nutrition (from Greek pantos, "everywhere"); forms the energetic driving force for condensation reactions such as citrate synthase and beta-ketothiolase.',
          'খাবারে সর্বত্র বিদ্যমান; সাইট্রেট সিন্থেজ বিক্রিয়ায় অ্যাসিটাইল গ্রুপ সংযুক্ত করতে প্রয়োজনীয় রাসায়নিক মুক্ত শক্তি সরবরাহ করে।'
        ),
        sectionId: 'structure',
        color: '#10b981',
        svgCoords: { cx: 340, cy: 75, r: 24 },
      },
      {
        id: 'node-plp-transamination',
        label: l('5. Pyridoxal Phosphate (PLP): Amino Nitrogen & Heme Catalyst', '৫. পাইরিডক্সাল ফসফেট (পিএলপি): অ্যামিনো অ্যাসিড ও হিম অনুঘটক'),
        description: l(
          'Forms Schiff base intermediates with amino acid alpha-amino groups, catalyzing transamination (AST, ALT), amino acid decarboxylation (GABA, histamine, dopamine), glycogen phosphorylase, and the rate-limiting step of heme synthesis (ALA synthase).',
          'অ্যামিনো অ্যাসিডের সাথে শিফ বেস তৈরি করে ট্রান্সঅ্যামিনেশন (AST, ALT), নিউরোট্রান্সমিটার সংশ্লেষ এবং হিম তৈরির প্রধান এনজাইম ALA সিন্থেজে কাজ করে।'
        ),
        details: l(
          'Depletion causes microcytic sideroblastic anemia (defective heme synthesis traps iron in erythroblast mitochondria), peripheral sensory neuropathy, and generalized seizures responsive only to B6.',
          'ঘাটতি হলে সাইডারোব্লাস্টিক রক্তস্বল্পতা (মাইটোকন্ড্রিয়ায় আয়রন আটকে থাকা), হাত-পায়ে অবশ ভাব ও খিঁচুনি দেখা দেয় যা কেবল B6 প্রয়োগেই সারে।'
        ),
        sectionId: 'mechanism',
        color: '#8b5cf6',
        svgCoords: { cx: 70, cy: 165, r: 24 },
      },
      {
        id: 'node-biotin-carboxylation',
        label: l('6. Biotin (Vitamin B7): ATP-Dependent Carbon Dioxide Fixation', '৬. বায়োটিন (ভিটামিন বি৭): এটিপি-নির্ভর কার্বক্সিলেশন'),
        description: l(
          'Covalently attached to enzyme lysine residues as biocytin; captures activated bicarbonate using ATP to transfer carboxyl (-COO-) groups to pyruvate (pyruvate carboxylase), acetyl-CoA (ACC-1), and propionyl-CoA.',
          'এনজাইমের লাইসিনের সাথে বায়োসাইটিন হিসেবে যুক্ত থাকে; এটিপি খরচ করে বাইকার্বোনেট ধরে এনে পাইরুভেট কার্বক্সিলেজ, ACC এবং প্রোপিওনাইল-কোএ-তে কার্বক্সিল গ্রুপ যোগ করে।'
        ),
        details: l(
          'Inactivated with extreme affinity (Kd ~10^-15 M) by avidin in raw egg whites; deficiency impairs gluconeogenesis, fatty acid synthesis, and odd-chain fatty acid oxidation, causing lactic acidosis and alopecia.',
          'কাঁচা ডিমের সাদার অ্যাভিডিন প্রোটিন বায়োটিনকে নিষ্ক্রিয় করে দেয়; এর অভাবে গ্লুকোনিওজেনেসিস ও চর্বি তৈরি থমকে যায় এবং চুল পড়ে ও চামড়ায় ঘা হয়।'
        ),
        sectionId: 'mechanism',
        color: '#ec4899',
        svgCoords: { cx: 160, cy: 165, r: 24 },
      },
      {
        id: 'node-folate-b12-axis',
        label: l('7. Folate & Cobalamin Axis: One-Carbon Flow & DNA Synthesis', '৭. ফোলেট ও কোবালামিন অক্ষ: এক-কার্বন স্থানান্তর ও ডিএনএ তৈরি'),
        description: l(
          'Tetrahydrofolate (THF) shuttles one-carbon fragments for dTMP and purine synthesis; cobalamin (B12) drives methionine synthase (clearing homocysteine) and methylmalonyl-CoA mutase (succinyl-CoA generation).',
          'টেট্রাহাইড্রোফোলেট (THF) ডিএনএ তৈরিতে এক-কার্বন বহন করে; আর ভিটামিন B12 হোমোসিস্টিন অপসারণ এবং মিথাইলম্যালোনাইল-কোএ বিপাকে প্রধান ভূমিকা রাখে।'
        ),
        details: l(
          'B12 deficiency irreversibly traps folate as N5-methyl-THF ("methyl-folate trap"), starving thymidylate synthesis to cause megaloblastic anemia alongside demyelinating subacute combined degeneration.',
          'B12-এর অভাবে ফোলেট আটকা পড়ে মেগালোব্লাস্টিক রক্তস্বল্পতা এবং সুষুম্নাকাণ্ডের মারাত্মক নার্ভ অবক্ষয় (সাবঅ্যাকিউট কম্বাইন্ড ডিজেনারেশন) সৃষ্টি করে।'
        ),
        sectionId: 'integration',
        color: '#ef4444',
        svgCoords: { cx: 250, cy: 165, r: 24 },
      },
      {
        id: 'node-trace-metalloclusters',
        label: l('8. Trace Minerals: Iron, Zinc, Copper & Selenium Metalloclusters', '৮. ট্রেস খনিজ: আয়রন, জিংক, কপার ও সেলেনিয়াম ধাতব ক্লাস্টার'),
        description: l(
          'Inorganic catalytic cores: Iron drives respiratory Fe-S clusters and heme oxygen transport; Copper powers cytochrome c oxidase; Zinc stabilizes 300+ enzymes and DNA zinc fingers; Selenium forms selenocysteine in glutathione peroxidase.',
          'অজৈব অনুঘটক: আয়রন শ্বসন শৃঙ্খল ও রক্তে অক্সিজেন বহন করে; কপার সাইটোক্রোম অক্সিডেজে কাজ করে; জিংক ৩০০+ এনজাইম সচল রাখে; সেলেনিয়াম অ্যান্টিঅক্সিডেন্ট গ্লুটাথিয়ন পারঅক্সিডেজে থাকে।'
        ),
        details: l(
          'Trace mineral dyshomeostasis produces profound clinical consequences: Menkes disease (copper malabsorption), Wilson disease (copper overload), and Keshan cardiomyopathy (selenium deficiency).',
          'ট্রেস খনিজের অস্বাভাবিকতায় মেনকেস রোগ (কপার শোষণহীনতা), উইলসন রোগ (কপার বিষক্রিয়া) এবং কেশান কার্ডিওমায়োপ্যাথি (সেলেনিয়াম ঘাটতি) দেখা দেয়।'
        ),
        sectionId: 'mechanism',
        color: '#06b6d4',
        svgCoords: { cx: 340, cy: 165, r: 24 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation Tier', 'প্রাথমিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('What Are Micronutrients and Why Can Cells Not Live Without Them?', 'অনুপুষ্টি কী এবং এগুলো ছাড়া জীবকোষ কেন বাঁচতে পারে না?'),
          paragraphs: [
            l(
              'While macronutrients such as carbohydrates, proteins, and triacylglycerols provide the chemical fuel and structural building blocks for human life, they are completely metabolically inert without micronutrients. Micronutrients comprise organic vitamins and inorganic trace minerals that the human body cannot synthesize de novo in sufficient quantities. Rather than being burned directly for ATP, micronutrients function as essential catalytic coenzymes, prosthetic groups, and electron carriers that permit metabolic enzymes to lower activation energies and carry out life-sustaining biochemical transformations.',
              'শর্করা, আমিষ এবং চর্বি মানবদেহে জ্বালানি ও গঠনের উপাদান সরবরাহ করলেও অনুপুষ্টি বা মাইক্রোনিউট্রিয়েন্ট ছাড়া এগুলো সম্পূর্ণ অকেজো। অনুপুষ্টির মধ্যে রয়েছে জৈব ভিটামিন এবং অজৈব ট্রেস খনিজ যা মানবদেহ নিজে নিজে পর্যাপ্ত পরিমাণে তৈরি করতে পারে না। এগুলো সরাসরি শক্তি হিসেবে পুড়ে না, বরং কো-এনজাইম এবং ইলেকট্রন বাহক হিসেবে কাজ করে এনজাইমের অনুঘটন ক্ষমতা সচল রাখে এবং কোষের জীবনধারণ নিশ্চিত করে।'
            ),
            l(
              'A major physiological distinction exists between water-soluble vitamins (the eight B-complex vitamins and vitamin C) and fat-soluble vitamins (vitamins A, D, E, and K). Water-soluble vitamins are readily absorbed in the small intestine, travel freely dissolved in blood plasma, and are generally not stored in large quantities with the notable exception of cobalamin (vitamin B12) in the liver. Because excess water-soluble vitamins are rapidly cleared and excreted by the kidneys into urine, they require frequent dietary replenishment and rarely cause toxic hypervitaminosis states.',
              'পানিতে দ্রবণীয় ভিটামিন (আটটি বি-কমপ্লেক্স ভিটামিন ও ভিটামিন সি) এবং চর্বিতে দ্রবণীয় ভিটামিনের (ভিটামিন এ, ডি, ই, কে) মাঝে গুরুত্বপূর্ণ শারীরবৃত্তীয় পার্থক্য রয়েছে। পানিতে দ্রবণীয় ভিটামিনগুলো সহজে অন্ত্রে শোষিত হয়ে রক্তে ঘোরে এবং যকৃতে ভিটামিন B12 ছাড়া এগুলো দেহে খুব বেশি সঞ্চিত থাকে না। অতিরিক্ত অংশ প্রস্রাবের সাথে বের হয়ে যাওয়ায় এগুলো নিয়মিত খাবারের মাধ্যমে গ্রহণ করতে হয় এবং সাধারণত বিষক্রিয়া তৈরি করে না।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The B-Complex Vitamins as the Cellular Engine Coenzymes', 'কোষীয় শক্তির ইঞ্জিন হিসেবে বি-কমপ্লেক্স ভিটামিনসমূহ'),
          paragraphs: [
            l(
              'The B-complex vitamins function as the indispensable spark plugs of fuel metabolism. Thiamine (vitamin B1) is converted to thiamine pyrophosphate (TPP), which is essential for entry of carbohydrates into the citric acid cycle via the pyruvate dehydrogenase complex. Riboflavin (vitamin B2) forms FAD and FMN, while niacin (vitamin B3) forms NAD+ and NADP+, both acting as primary electron shuttles that capture energy from food and feed reducing equivalents directly into the mitochondrial respiratory chain to produce ATP.',
              'বি-কমপ্লেক্স ভিটামিনসমূহ জ্বালানি বিপাকের স্পার্ক প্লাগ হিসেবে কাজ করে। থায়ামিন (ভিটামিন বি১) থায়ামিন পাইরোফসফেটে (টিপিপি) রূপান্তরিত হয়ে পাইরুভেট ডিহাইড্রোজিনেজের মাধ্যমে শর্করাকে সাইট্রিক অ্যাসিড চক্রে প্রবেশ করায়। রিবোফ্লাভিন (বি২) এফএডি তৈরি করে এবং নিয়াসিন (বি৩) এনএডি তৈরি করে, যা খাদ্য থেকে ইলেকট্রন সংগ্রহ করে মাইটোকন্ড্রিয়াল শ্বসন শৃঙ্খলে পৌঁছে দিয়ে এটিপি তৈরি করে।'
            ),
            l(
              'Pantothenic acid (vitamin B5) forms coenzyme A (CoA), the universal carrier of acetyl and acyl groups that drives the citric acid cycle and fatty acid synthesis. Pyridoxine (vitamin B6) yields pyridoxal phosphate (PLP), which is required for transaminating amino acids and synthesizing neurotransmitters. Biotin (vitamin B7) acts as the cellular carbon dioxide carrier for gluconeogenesis, while folate (vitamin B9) and cobalamin (vitamin B12) team up to provide single-carbon units needed to replicate human DNA during red blood cell production.',
              'প্যান্টোথেনিক অ্যাসিড (বি৫) কো-এনজাইম এ তৈরি করে যা অ্যাসিটাইল গ্রুপ বহন করে সাইট্রিক অ্যাসিড চক্র ও চর্বি তৈরি চালায়। পাইরিডক্সিন (বি৬) পিএলপিতে রূপান্তরিত হয়ে অ্যামিনো অ্যাসিড ভাঙন ও নিউরোট্রান্সমিটার তৈরিতে কাজ করে। বায়োটিন (বি৭) গ্লুকোজ তৈরিতে কার্বন ডাই-অক্সাইড বহন করে, আর ফোলেট (বি৯) ও কোবালামিন (বি১২) রক্তকণিকা তৈরিতে ডিএনএ সংশ্লেষের জন্য প্রয়োজনীয় উপাদান যোগায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Fat-Soluble Vitamins and Essential Trace Minerals', 'চর্বিতে দ্রবণীয় ভিটামিন ও অপরিহার্য খনিজের ভূমিকা'),
          paragraphs: [
            l(
              'In contrast to water-soluble coenzymes, fat-soluble vitamins require dietary lipids and biliary micellar formation for intestinal absorption, travel packaged inside chylomicrons and lipoproteins, and are stored extensively in hepatic tissue and adipose depots. Vitamin A (retinol/retinoic acid) regulates photoreception in the retina and nuclear gene transcription for epithelial differentiation. Vitamin D (calcitriol) functions as a systemic steroid hormone governing intestinal calcium and phosphate absorption to maintain skeletal mineral density. Vitamin E functions as a lipid-soluble antioxidant protecting cell membranes from free radicals, and vitamin K executes gamma-carboxylation of clotting factors.',
              'পানিতে দ্রবণীয় ভিটামিনের বিপরীতে চর্বিতে দ্রবণীয় ভিটামিনগুলো শোষিত হতে খাদ্যের চর্বি ও পিত্ত লবণের প্রয়োজন হয়, কাইলোমাইক্রনের মাধ্যমে রক্তে পরিবাহিত হয় এবং যকৃৎ ও চর্বিকলায় সঞ্চিত থাকে। ভিটামিন এ চোখের দৃষ্টি ও কোষের বৃদ্ধি নিয়ন্ত্রণ করে। ভিটামিন ডি হরমোন হিসেবে কাজ করে হাড়ের খনিজ ধরে রাখতে ক্যালসিয়াম শোষণ বাড়ায়। ভিটামিন ই কোষের ঝিল্লিকে অ্যান্টিঅক্সিডেন্ট হিসেবে রক্ষা করে এবং ভিটামিন কে রক্ত জমাট বাঁধার ফ্যাক্টর তৈরি করে।'
            ),
            l(
              'Trace minerals are inorganic elements required in microgram or milligram quantities that serve as irreplaceable catalytic centers in metalloenzymes. Iron is incorporated into heme for oxygen transport and into iron-sulfur (Fe-S) clusters for electron transport. Zinc coordinates over 300 metabolic enzymes including DNA polymerases and carbonic anhydrase. Copper participates in terminal electron transfer via cytochrome c oxidase, while selenium is incorporated into the catalytic amino acid selenocysteine in antioxidant glutathione peroxidase.',
              'ট্রেস খনিজগুলো অতি সূক্ষ্ম মাত্রায় প্রয়োজনীয় অজৈব উপাদান যা মেটালোএনজাইমের কেন্দ্রবিন্দু হিসেবে কাজ করে। আয়রন হিমোগ্লোবিনে অক্সিজেন পরিবহনে এবং শ্বসন শৃঙ্খলে ইলেকট্রন সরাতে অংশ নেয়। জিংক ৩০০টিরও বেশি এনজাইম ও ডিএনএ প্রতিলিপন নিয়ন্ত্রণ করে। কপার সাইটোক্রোম সি অক্সিডেজে ইলেকট্রন স্থানান্তরে কাজ করে এবং সেলেনিয়াম অ্যান্টিঅক্সিডেন্ট গ্লুটাথিয়ন পারঅক্সিডেজের মূল উপাদান হিসেবে বিষাক্ত ফ্রি র্যাডিক্যাল ধ্বংস করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Interconnected Cofactor Circuits: How Deficiencies Overlap', 'পরস্পর সংযুক্ত কোফ্যাক্টর পথ: যেভাবে এক ঘাটতি অন্যটিকে প্রভাবিত করে'),
          paragraphs: [
            l(
              'Metabolic pathways rarely depend on a single isolated micronutrient; instead, biochemical transformations rely on coordinated cascades of multiple cofactors operating in series. A classic illustration is the conversion of the essential amino acid tryptophan into the neurotransmitter serotonin and the coenzyme nicotinamide (niacin): this pathway requires pyridoxal phosphate (vitamin B6) at the kynureninase step, riboflavin (vitamin B2) at kynurenine monooxygenase, and molecular iron. A deficiency in vitamin B6 can therefore directly induce secondary niacin deficiency, precipitating clinical pellagra.',
              'বিপাকীয় পথগুলো কখনোই একক কোনো অনুপুষ্টির ওপর চলে না; বরং একাধিক কোফ্যাক্টরের ধারাবাহিক সহযোগিতায় কাজ সম্পন্ন হয়। যেমন ট্রিপটোফ্যান অ্যামিনো অ্যাসিড থেকে নিয়াসিন তৈরি হতে ভিটামিন B6, ভিটামিন B2 এবং আয়রনের যুগপৎ প্রয়োজন হয়। তাই ভিটামিন B6-এর ঘাটতি থাকলে শরীরে নিয়াসিন তৈরি ব্যাহত হয়ে গৌণভাবে পেলাগ্রা চর্মরোগ দেখা দিতে পারে।'
            ),
            l(
              'Similarly, the synthesis of DNA during red blood cell development requires an intricate handoff between vitamin B12 and folate. When vitamin B12 is deficient, cellular folate becomes trapped in a chemically dead-end form that cannot be utilized for thymidylate synthesis. Although the primary defect is a lack of vitamin B12, the visible hematological result is identical to folate deficiency: defective DNA synthesis, cellular gigantism, and severe macrocytic megaloblastic anemia in the peripheral blood.',
              'একইভাবে লোহিত রক্তকণিকা তৈরিতে ভিটামিন B12 এবং ফোলেটের নিবিড় সমন্বয় প্রয়োজন। শরীরে B12-এর অভাব হলে ফোলেট একটি অকেজো রূপে আটকা পড়ে ডিএনএ তৈরি করতে পারে না। যদিও মূল সমস্যা থাকে B12-এ, কিন্তু রক্ত পরীক্ষায় ফোলেট ঘাটতির মতোই বৃহদাকার রক্তকণিকা এবং মেগালোব্লাস্টিক রক্তস্বল্পতা প্রকাশ পায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Classic Clinical Manifestations of Micronutrient Deficiencies', 'অনুপুষ্টি ঘাটতির ধ্রুপদী ক্লিনিক্যাল লক্ষণসমূহ'),
          paragraphs: [
            l(
              'Because micronutrients power foundational cellular chemistry, their deficiencies manifest with striking clinical syndromes that clinicians have recognized for centuries. Thiamine deficiency produces beriberi, which appears as heart failure and edema (wet beriberi) or bilateral peripheral neuropathy and muscle wasting (dry beriberi); in chronic alcohol abuse, acute thiamine depletion precipitates Wernicke encephalopathy with confusion, ophthalmoplegia, and ataxia, which is a life-threatening medical emergency.',
              'যেহেতু অনুপুষ্টি কোষের মৌলিক শক্তি ও জীবন ধারণের ভিত্তি, তাই এগুলোর ঘাটতিতে সুনির্দিষ্ট কিছু ঐতিহাসিক রোগ দেখা দেয়। থায়ামিনের অভাবে বেরিবেরি রোগ হয়, যা হার্ট ফেইলিউর ও শরীর ফোলা (ওয়েট বেরিবেরি) কিংবা হাত-পায়ের স্নায়ু অবশ হয়ে মাংস শুকিয়ে যাওয়া (ড্রাই বেরিবেরি) হিসেবে প্রকাশ পায়; মদ্যপায়ীদের ক্ষেত্রে এটি মস্তিষ্কে তীব্র বিভ্রান্তি ও ভারসাম্যহীনতা তৈরি করে যা ওয়ার্নিক এনসেফালোপ্যাথি নামে পরিচিত।'
            ),
            l(
              'Niacin deficiency produces pellagra, traditionally remembered by the four Ds: photosensitive dermatitis with a symmetrical Casal necklace distribution, intractable diarrhea, progressive dementia, and death if untreated. Vitamin C (ascorbate) deficiency causes scurvy, marked by bleeding gums, perifollicular petechiae, coiled corkscrew hairs, and impaired wound healing due to defective collagen prolyl and lysyl hydroxylase cross-linking.',
              'নিয়াসিনের অভাবে পেলাগ্রা দেখা দেয়, যার প্রধান চারটি লক্ষণ হলো: রোদে পোড়া চর্মরোগ (ক্যাসাল নেকলেস), তীব্র ডায়রিয়া, স্মৃতিভ্রম (ডিমেনশিয়া) এবং সময়মতো চিকিৎসা না পেলে মৃত্যু। ভিটামিন সি-এর অভাবে স্কার্ভি হয়, যাতে দাঁতের মাড়ি দিয়ে রক্ত পড়ে, চামড়ায় কালশিটে পড়ে এবং কোলাজেন তৈরি না হওয়ায় ক্ষত শুকাতে দীর্ঘ সময় লাগে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Foundation Takeaways: Micronutrients as the Catalytic Spark of Life', 'প্রাথমিক সারসংক্ষেপ: জীবনের অনুঘটক হিসেবে অনুপুষ্টি'),
          paragraphs: [
            l(
              'Micronutrients do not provide caloric energy directly, but they form the catalytic machinery (coenzymes and prosthetic groups) that enables human cells to extract ATP from macronutrients and synthesize structural macromolecules. Water-soluble vitamins are excreted in urine and require regular dietary intake, whereas fat-soluble vitamins are stored in the liver and adipose tissue with potential for accumulation.',
              'অনুপুষ্টি সরাসরি ক্যালোরি দেয় না, তবে এগুলো কো-এনজাইম হিসেবে কাজ করে কোষকে খাদ্য থেকে এটিপি বের করতে এবং প্রয়োজনীয় জৈব অণু তৈরিতে সাহায্য করে। পানিতে দ্রবণীয় ভিটামিন প্রস্রাবের সাথে বের হয়ে যায় বলে নিয়মিত খেতে হয়, আর চর্বিতে দ্রবণীয় ভিটামিন যকৃতে ও চর্বিতে সঞ্চিত থাকে।'
            ),
            l(
              'Clinical recognition of micronutrient deficiencies requires understanding their shared metabolic intersections: thiamine is required before administering glucose to malnourished patients, B12 and folate cooperate in DNA synthesis, and vitamin C and iron cooperate in hemoglobin synthesis and collagen stability.',
              'অনুপুষ্টি ঘাটতি চিকিৎসার মৌলিক নিয়ম হলো এদের পারস্পরিক যোগসূত্র বোঝা: অপুষ্টিতে ভোগা রোগীকে গ্লুকোজ দেওয়ার আগে অবশ্যই থায়ামিন ইনজেকশন দিতে হয়, B12 ও ফোলেট একসাথে রক্ত তৈরি করে এবং ভিটামিন সি আয়রন শোষণ ও কোলাজেন গঠনে অপরিহার্য।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic Tier', 'শিক্ষায়তনিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('Chemical Anatomy and Coenzyme Classification: Apoenzymes and Holoenzymes', 'রাসায়নিক গঠন ও কো-এনজাইম শ্রেণিবিভাগ: অ্যাপোএনজাইম ও হোলোএনজাইম'),
          paragraphs: [
            l(
              'An enzymatically active macromolecular complex is termed a holoenzyme, consisting of a catalytically inactive protein scaffold (the apoenzyme) combined with a non-protein organic or inorganic cofactor. When the cofactor is an organic molecule derived from a vitamin, it is designated a coenzyme. Coenzymes that associate reversibly with their target apoenzymes and function as cosubstrates (such as NAD+ and coenzyme A) undergo stoichiometric chemical modification during the catalytic cycle and dissociate to be regenerated by secondary metabolic enzymes. In contrast, prosthetic groups (such as FAD, biotin, and heme) remain covalently or tightly non-covalently bound to the enzyme active site throughout the reaction cycle.',
              'একটি সম্পূর্ণ সক্রিয় এনজাইমকে হোলোএনজাইম বলা হয়, যা একটি নিষ্ক্রিয় প্রোটিন অংশ (অ্যাপোএনজাইম) এবং একটি জৈব বা অজৈব কোফ্যাক্টরের সমন্বয়ে গঠিত। কোফ্যাক্টরটি ভিটামিন থেকে তৈরি হলে তাকে কো-এনজাইম বলে। যে কো-এনজাইমগুলো ক্ষণস্থায়ীভাবে যুক্ত হয়ে কো-সাবস্ট্রেট হিসেবে কাজ করে (যেমন এনএডি+ এবং কোএ) সেগুলো বিক্রিয়ায় পরিবর্তিত হয় এবং পরে অন্য এনজাইম দ্বারা পুনরায় সক্রিয় হয়। অন্যদিকে প্রস্থেটিক গ্রুপগুলো (যেমন এফএডি, বায়োটিন ও হিম) এনজাইমের সক্রিয় কেন্দ্রের সাথে স্থায়ীভাবে শক্ত বন্ধনে যুক্ত থাকে।'
            ),
            l(
              'Inorganic cofactors consist primarily of mono- and divalent metal cations (Mg2+, Ca2+, Mn2+, Fe2+/Fe3+, Cu+/Cu2+, Zn2+, Se) that participate in electrophilic catalysis, ground-state polarization, and electron relay networks. Enzymes that strictly require bound metal ions for catalytic activity are classified as metalloenzymes (such as carbonic anhydrase requiring Zn2+ and cytochrome c oxidase requiring CuA/CuB and Fe-heme centers). Metal-activated enzymes (such as hexokinase requiring Mg2+-ATP complexes) utilize metal ions to coordinate substrate geometry and neutralize negative charges on phosphate backbones.',
              'অজৈব কোফ্যাক্টরের মধ্যে প্রধানত ম্যাগনেসিয়াম, ক্যালসিয়াম, ম্যাঙ্গানিজ, আয়রন, কপার, জিংক ও সেলেনিয়াম ধাতব আয়ন থাকে যা রাসায়নিক বিক্রিয়ায় ইলেকট্রন স্থানান্তর ও বন্ধন মেরুকরণে অংশ নেয়। যে এনজাইমগুলোর কাজের জন্য ধাতব আয়ন অত্যাবশ্যকীয় সেগুলোকে মেটালোএনজাইম বলে (যেমন জিংক-নির্ভর কার্বনিক অ্যানহাইড্রেজ এবং কপার-আয়রন সমৃদ্ধ সাইটোক্রোম সি অক্সিডেজ)। অন্যদিকে হেক্সোকাইনেজের মতো এনজাইমগুলো ম্যাগনেসিয়াম ব্যবহার করে এটিপি ফসফেটের ঋণাত্মক আধানকে নিষ্ক্রিয় করে কাজ চালায়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The B-Complex Coenzyme Mechanisms: TPP, FAD, NAD+, and CoA-SH', 'বি-কমপ্লেক্স কো-এনজাইমের বিক্রিয়া কৌশল: টিপিপি, এফএডি, এনএডি+ এবং কোএ'),
          paragraphs: [
            l(
              'Thiamine pyrophosphate (TPP) possesses an electron-deficient thiazolium ring. The C2-H proton between the nitrogen and sulfur atoms exhibits unusual kinetic acidity (pKa ~12–14), ionizing to generate a reactive, resonance-stabilized carbanion (ylide). This carbanion acts as a strong nucleophile, attacking the electrophilic alpha-carbonyl carbon of alpha-ketoacids such as pyruvate and alpha-ketoglutarate. Decarboxylation generates a resonance-stabilized hydroxyethyl-TPP intermediate (active acetaldehyde), transferring the two-carbon acyl unit onto lipoamide in the E1 step of alpha-ketoacid dehydrogenase multienzyme complexes.',
              'থায়ামিন পাইরোফসফেটের (টিপিপি) থায়াজোলিয়াম রিংয়ের C2 কার্বনের প্রোটনটি অপসারিত হয়ে একটি শক্তিশালী নিউক্লিওফিলিক কার্বঅ্যানিয়ন তৈরি করে। এই কার্বঅ্যানিয়ন পাইরুভেট ও আলফা-কিটোগ্লুটারেটের কার্বনিল কার্বনে আক্রমণ করে কার্বন ডাই-অক্সাইড বের করে দেয় এবং একটি হাইড্রক্সিইথাইল-টিপিপি মধ্যবর্তী যৌগ তৈরি করে, যা আলফা-কিটোঅ্যাসিড ডিহাইড্রোজিনেজ কমপ্লেক্সে লিপোয়ামাইডে স্থানান্তরিত হয়।'
            ),
            l(
              'Riboflavin-derived flavin mononucleotide (FMN) and flavin adenine dinucleotide (FAD) feature an isoalloxazine tricyclic ring capable of executing both one-electron and two-electron redox transformations through a stable neutral semiquinone radical intermediate (FADH*). This unique electron-bifurcating chemistry allows flavoproteins to bridge the gap between obligate two-electron hydride donors (NADH) and obligate single-electron acceptors (cytochromes and Fe-S centers) in the mitochondrial electron transport chain.',
              'রিবোফ্লাভিন থেকে তৈরি FMN এবং FAD-এর আইসোঅ্যালোঅক্সাজিন রিং সেমিকুইনোন র্যাডিক্যাল তৈরির মাধ্যমে এক বা দুই ইলেকট্রন স্থানান্তরে সক্ষম। এই বিশেষ বৈশিষ্ট্যের কারণে ফ্ল্যাভোপ্রোটিনগুলো শ্বসন শৃঙ্খলে দুই-ইলেকট্রন বাহক (যেমন NADH) এবং এক-ইলেকট্রন গ্রাহকের (যেমন সাইটোক্রোম ও আয়রন-সালফার ক্লাস্টার) মাঝে সেতুবন্ধন হিসেবে ইলেকট্রন আদান-প্রদান সম্পন্ন করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Pyridoxal Phosphate, Biotin, and Coenzyme A: Nitrogen and Carbon Transfers', 'পিএলপি, বায়োটিন ও কো-এনজাইম এ: নাইট্রোজেন ও কার্বন স্থানান্তর কৌশল'),
          paragraphs: [
            l(
              'Pyridoxal 5\'-phosphate (PLP) is bound to the active-site lysine of aminotransferases via an internal aldimine (Schiff base) linkage. Upon binding an incoming amino acid substrate, the amino group displaces the enzyme lysine, forming an external aldimine. The conjugated pyridine ring of PLP acts as an intensely electrophilic electron sink, stabilizing carbanions generated by cleavage of any of the three bonds at the substrate alpha-carbon: transamination (cleavage of C-alpha–H), decarboxylation (cleavage of C-alpha–COO-), or aldol cleavage (cleavage of C-alpha–R). In aminotransferases, hydrolysis releases the alpha-ketoacid, converting PLP to pyridoxamine phosphate (PMP), which then transfers the amino group to a second alpha-ketoacid.',
              'পাইরিডক্সাল ফসফেট (PLP) অ্যামিনোট্রান্সফারেজের লাইসিন অ্যামিনো অ্যাসিডের সাথে অভ্যন্তরীণ অ্যালডিমাইন শিফ বেস তৈরি করে থাকে। নতুন অ্যামিনো অ্যাসিড এলে তা লাইসিনকে সরিয়ে এক্সটার্নাল অ্যালডিমাইন গঠন করে। পিএলপির পাইরিডিন রিং ইলেকট্রন সিংক হিসেবে কাজ করে আলফা-কার্বনের বন্ধন ভাঙতে সাহায্য করে: যেমন ট্রান্সঅ্যামিনেশন (C-H ভাঙন), ডিকার্বক্সিলেশন (C-COO- ভাঙন), এবং শেষে অ্যামিনো গ্রুপটি নতুন আলফা-কিটোঅ্যাসিডে স্থানান্তর করে PMP-কে পুনরায় PLP-তে রূপান্তর করে।'
            ),
            l(
              'Biotin operates as a mobile 14-Angstrom molecular arm covalently linked via an amide bond to the epsilon-amino group of a specific lysine residue on carboxylase enzymes, forming biocytin. The reaction mechanism of ATP-dependent carboxylases (pyruvate carboxylase, acetyl-CoA carboxylase, propionyl-CoA carboxylase) proceeds in two spatially distinct active sites: in Site 1, biotin carboxylase hydrolyzes ATP to phosphorylate bicarbonate into carboxyphosphate, which carboxylates the N1 atom of biotin to yield carboxybiotin. The flexible biocytin arm then swings into Site 2, where transcarboxylase transfers the activated CO2 onto the acceptor metabolite.',
              'বায়োটিন একটি ১৪-অ্যাংস্ট্রম দীর্ঘ নমনীয় হাতল হিসেবে কার্বক্সিলেজ এনজাইমের লাইসিন অ্যামিনো অ্যাসিডের সাথে বায়োসাইটিন যৌগ রূপে যুক্ত থাকে। এটিপি-নির্ভর বিক্রিয়ায় দুটি আলাদা সক্রিয় কেন্দ্র কাজ করে: প্রথম স্থানে এটিপি খরচ করে বাইকার্বোনেটকে কার্বক্সিবায়োটিনে রূপান্তর করা হয়; এরপর নমনীয় হাতলটি ঘুরে দ্বিতীয় সক্রিয় স্থানে গিয়ে পাইরুভেট বা অ্যাসিটাইল-কোএ-তে সক্রিয় কার্বন ডাই-অক্সাইড যুক্ত করে নতুন যৌগ তৈরি করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Folate and Cobalamin: The One-Carbon Transfer Network and Methylation', 'ফোলেট ও কোবালামিন: এক-কার্বন নেটওয়ার্ক ও মিথাইলেশন চক্র'),
          paragraphs: [
            l(
              'Tetrahydrofolate (THF) is synthesized by enzymatic reduction of dietary folate via NADPH-dependent dihydrofolate reductase (DHFR). THF serves as an essential carrier of one-carbon fragments across three oxidation states: methanol level (N5-methyl-THF), formaldehyde level (N5,N10-methylene-THF), and formic acid level (N5,N10-methenyl-THF, N10-formyl-THF). N10-formyl-THF provides the C2 and C8 carbons of the purine ring, while N5,N10-methylene-THF is utilized by thymidylate synthase to methylate dUMP into dTMP, generating dihydrofolate (DHF) in a coupled redox step that consumes reducing equivalents.',
              'টেট্রাহাইড্রোফোলেট (THF) ডাইহাইড্রোফোলেট রিডাক্টেজ এনজাইম দ্বারা গঠিত হয় এবং এক-কার্বন বহনকারী হিসেবে কাজ করে তিনটি ভিন্ন জারণ স্তরে: মিথানল স্তর (N5-মিথাইল-THF), ফর্মালডিহাইড স্তর (N5,N10-মিথিলিন-THF) এবং ফরমিক অ্যাসিড স্তর (N10-ফর্মাইল-THF)। N10-ফর্মাইল-THF পিউরিন রিংয়ের কার্বন যোগায় এবং N5,N10-মিথিলিন-THF থাইমিডিলেট সিন্থেজ এনজাইমে ব্যবহৃত হয়ে dUMP থেকে dTMP ডিএনএ উপাদান সংশ্লেষ করে।'
            ),
            l(
              'Cobalamin (vitamin B12) possesses a complex corrin ring coordinating a central cobalt ion (Co3+) with a lower dimethylbenzimidazole nucleotide ligand and an upper variable ligand. In methylcobalamin, the upper ligand is a methyl group, acting as coenzyme for cytoplasmic methionine synthase (MTR), which transfers the methyl group from N5-methyl-THF to homocysteine, generating methionine and regenerating THF. In 5\'-deoxyadenosylcobalamin, the upper ligand is a deoxyadenosyl moiety with an exceptionally weak carbon-cobalt organometallic bond; homolytic cleavage generates a 5\'-deoxyadenosyl free radical that drives intramolecular carbon skeleton rearrangements in mitochondrial methylmalonyl-CoA mutase.',
              'কোবালামিনে (B12) একটি জটিল কোরিন রিং থাকে যার কেন্দ্রে কোবাল্ট আয়ন (Co3+) যুক্ত থাকে। মিথাইলকোবালামিনে একটি মিথাইল মূলক থাকে যা সাইটোপ্লাজমের মিথিওনিন সিন্থেজ এনজাইমে N5-মিথাইল-THF থেকে হোমোসিস্টিনে মিথাইল স্থানান্তর করে মিথিওনিন বানায় এবং মুক্ত THF ফেরত দেয়। অন্যদিকে ৫\'-ডিঅক্সিঅ্যাডেনোসিলকোবালামিনে কার্বন-কোবাল্ট বন্ধন ভেঙে একটি মুক্ত র্যাডিক্যাল তৈরি হয় যা মাইটোকন্ড্রিয়াল মিথাইলম্যালোনাইল-কোএ মিউটেজ এনজাইমের রাসায়নিক পুনর্বিন্যাস ঘটায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Metallocluster Assembly, Trace Mineral Function and Pharmacological Antagonisms', 'ধাতব ক্লাস্টার তৈরি, ট্রেস খনিজের কাজ ও ফার্মাকোলজিক্যাল ব্লকেড'),
          paragraphs: [
            l(
              'Mitochondrial iron-sulfur cluster (ISC) assembly machinery coordinates ferrous iron (Fe2+) and inorganic sulfide liberated from cysteine by cysteine desulfurase (NFS1), building [2Fe-2S] and [4Fe-4S] rhomboid cubes supported by frataxin (FXN). Defects in frataxin cause Friedreich ataxia, an autosomal recessive neurodegenerative disorder characterized by mitochondrial iron overload, respiratory chain failure, and progressive spinocerebellar ataxia and cardiomyopathy.',
              'মাইটোকন্ড্রিয়ায় আয়রন-সালফার ক্লাস্টার গঠনের প্রক্রিয়ায় সিস্টিন থেকে সালফাইড এবং আয়রন মিলিয়ে [2Fe-2S] ও [4Fe-4S] ক্লাস্টার তৈরি হয় যা ফ্র্যাটাক্সিন প্রোটিন দ্বারা নিয়ন্ত্রিত। ফ্র্যাটাক্সিনের বংশগত ত্রুটির কারণে ফ্রিডরিখ অ্যাটাক্সিয়া রোগ হয়, যাতে মাইটোকন্ড্রিয়ায় অতিরিক্ত আয়রন জমে কোষের শ্বসন ক্ষমতা ধ্বংস হয় এবং মারাত্মক স্নায়ু ও হৃদরোগ দেখা দেয়।'
            ),
            l(
              'Enzyme cofactor binding pockets serve as prime targets for structural competitive inhibitors and antimetabolites in clinical medicine. Methotrexate is a synthetic analog of folic acid that binds dihydrofolate reductase with nearly 1,000-fold higher affinity than natural DHF, competitively halting THF regeneration and starving rapidly proliferating neoplastic cells of thymidylate and purines. Similarly, 5-fluorouracil (5-FU) is converted intracellularly to 5-FdUMP, which forms an irreversible covalent ternary suicide complex with thymidylate synthase and N5,N10-methylene-THF, arresting the cell cycle in S phase.',
              'এনজাইমের কোফ্যাক্টর বাইন্ডিং পকেটগুলো আধুনিক চিকিৎসাবিজ্ঞানে ক্যান্সার প্রতিরোধী ওষুধের প্রধান লক্ষ্য। মেথোট্রেক্সেট হলো ফলিক অ্যাসিডের কৃত্রিম অ্যানালগ যা ডাইহাইড্রোফোলেট রিডাক্টেজ এনজাইমকে প্রাকৃতিক সাবস্ট্রেটের চেয়ে ১০০০ গুণ শক্তিতে আটকে দিয়ে ক্যান্সার কোষের ডিএনএ তৈরি বন্ধ করে। একইভাবে ৫-ফ্লুরোইউরাসিল (5-FU) থাইমিডিলেট সিন্থেজ ও ফোলেটের সাথে একটি অপরিবর্তনীয় সুইসাইড কমপ্লেক্স তৈরি করে কোষ বিভাজন চিরতরে থামিয়ে দেয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Takeaways: Structural Logic of Enzyme Cofactor Catalysis', 'শিক্ষায়তনিক সারসংক্ষেপ: এনজাইম কোফ্যাক্টর অনুঘটনের রাসায়নিক যুক্তি'),
          paragraphs: [
            l(
              'Human enzymes achieve vast catalytic repertoires beyond the 20 canonical amino acids by recruiting specialized organic coenzymes and inorganic metalloclusters. Thiamine TPP stabilizes alpha-ketoacid carbanions, riboflavin FAD bridges single- and two-electron transfers, niacin NAD+ drives hydride exchange, PLP acts as an electrophilic electron sink for nitrogen chemistry, and biotin executes ATP-dependent carboxylation.',
              'মানুষের এনজাইমগুলো সাধারণ ২০টি অ্যামিনো অ্যাসিডের বাইরে গিয়ে বিশেষায়িত কো-এনজাইম ও ধাতব ক্লাস্টার যুক্ত করে জটিল রাসায়নিক বিক্রিয়া সম্পন্ন করে। থায়ামিন টিপিপি কার্বঅ্যানিয়ন স্থিতিশীল করে, রিবোফ্লাভিন এফএডি ইলেকট্রন স্থানান্তর সেতু গড়ে, নিয়াসিন এনএডি হাইড্রাইড বিনিময় করে, পিএলপি নাইট্রোজেন বিক্রিয়ায় ইলেকট্রন সিংক হিসেবে কাজ করে এবং বায়োটিন কার্বক্সিলেশন সম্পন্ন করে।'
            ),
            l(
              'Trace minerals provide unique redox potentials and geometric coordination centers: iron in Fe-S clusters and heme, copper in terminal cytochrome oxidases, zinc in substrate polarization, and selenium in selenocysteine. Understanding these precise coenzyme structures is directly predictive of clinical pharmacology and antimetabolite chemotherapy.',
              'ট্রেস খনিজগুলো বিশেষ রেডক্স বিভব যোগায়: আয়রন ইলেকট্রন শ্বসনে, কপার সাইটোক্রোম অক্সিডেজে, জিংক বিক্রিয়ার অভিমুখ নির্ধারণে এবং সেলেনিয়াম সেলেনোসিস্টিনে কাজ করে। এই নিখুঁত আণবিক গঠন ও কার্যাবলি জানা আধুনিক ক্যান্সার কেমোথেরাপি ও ফার্মাকোলজির ভিত্তি।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced & Research Tier', 'উচ্চতর ও গবেষণা স্তর'),
      sections: [
        {
          id: 'integration',
          heading: l('Radical Catalysis of Cobalamin, One-Carbon Polymorphisms, and Epigenetic Methylation', 'কোবালামিনের র্যাডিক্যাল রসায়ন, এক-কার্বন পলিমরফিজম ও এপিজেনেটিক মিথাইলেশন'),
          paragraphs: [
            l(
              'Mitochondrial methylmalonyl-CoA mutase (MUT) utilizes 5\'-deoxyadenosylcobalamin (AdoCbl) to catalyze a chemically demanding 1,2-rearrangement converting (2R)-methylmalonyl-CoA to succinyl-CoA. The crystal structure of MUT demonstrates that the enzyme forces a conformational distortion upon the corrin ring, stretching and labilizing the central cobalt-carbon (Co-C) sigma bond by lowering its homolytic dissociation energy from ~130 kJ/mol in solution to ~80 kJ/mol in the active site. Homolytic cleavage of the Co(III)-C bond generates a low-spin cobalt(II) corrinoid species and a 5\'-deoxyadenosyl primary carbon radical (5\'-dAdo*). This transient radical abstracts a hydrogen atom from the methyl group of the substrate, generating a substrate-centered radical that spontaneously isomerizes via a cyclopropyloxy intermediate into a product radical before abstracting the hydrogen atom back to reform the cofactor.',
              'মাইটোকন্ড্রিয়াল মিথাইলম্যালোনাইল-কোএ মিউটেজ এনজাইম ৫\'-ডিঅক্সিঅ্যাডেনোসিলকোবালামিন ব্যবহার করে অত্যন্ত জটিল ১,২-রাসায়নিক পুনর্বিন্যাস ঘটায়। এনজাইমটির ক্রিস্টাল গঠনে দেখা যায় যে এর সক্রিয় কেন্দ্র কোরিন রিংকে এমনভাবে বাঁকিয়ে ধরে যাতে কোবাল্ট-কার্বন সমযোজী বন্ধনটি দুর্বল হয়ে সহজেই ভেঙে যায়। এই বন্ধন ভাঙনের ফলে একটি ক্ষণস্থায়ী ৫\'-ডিঅক্সিঅ্যাডেনোসিল ফ্রি র্যাডিক্যাল তৈরি হয়, যা সাবস্ট্রেট থেকে হাইড্রোজেন পরমাণু টেনে নিয়ে সাবস্ট্রেট র্যাডিক্যাল গঠন করে এবং সাইক্লোপ্রোপিলক্সি মধ্যবর্তী যৌগের মাধ্যমে সাকসিনাইল-কোএ-তে রূপান্তরিত হয়।'
            ),
            l(
              'In the cytoplasm, the folate-methionine circuit provides the primary methyl donor for cellular epigenetics: S-adenosylmethionine (SAM). Common single-nucleotide polymorphisms in methylenetetrahydrofolate reductase (MTHFR), most notably c.677C>T (Ala222Val, rs1801133), encode a thermolabile enzyme variant with reduced affinity for its FAD prosthetic group. Individuals homozygous for the 677TT allele exhibit a 60–70% reduction in MTHFR enzymatic activity under physiological conditions, impairing the irreversible conversion of N5,N10-methylene-THF to N5-methyl-THF. In the presence of inadequate dietary folate, this variant produces elevated plasma total homocysteine, reduced cellular SAM/SAH methylation ratios, impaired DNA cytosine methylation, and an increased risk of fetal neural tube defects and maternal deep vein thrombosis.',
              'সাইটোপ্লাজমে ফোলেট-মিথিওনিন চক্র কোষীয় এপিজেনেটিক মিথাইলেশনের প্রধান যৌগ এস-অ্যাডেনোসিলমিথিওনিন (SAM) তৈরি করে। মিথিলিনটেট্রাহাইড্রোফোলেট রিডাক্টেজ (MTHFR) জিনের সাধারণ মিউটেশন c.677C>T এর কারণে এনজাইমটি FAD কো-এনজাইমের সাথে সহজে যুক্ত হতে পারে না এবং ৬০-৭০% কার্যকারিতা হারায়। খাদ্যতালিকায় পর্যাপ্ত ফলিক অ্যাসিড না থাকলে এই মিউটেশনের কারণে রক্তে মারাত্মক হোমোসিস্টিন বৃদ্ধি পায়, ডিএনএ মিথাইলেশন বাধাগ্রস্ত হয় এবং গর্ভস্থ শিশুর নিউরাল টিউব ত্রুটি ও রক্ত জমাট বাঁধার ঝুঁকি বেড়ে যায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Metabolomic Mass Spectrometry Profiling, Inborn Errors of Cofactor Metabolism, and Vitamin Toxicology', 'মাস স্পেকট্রোমেট্রি মেটাবলোমিক্স, কোফ্যাক্টর বিপাকের বংশগত ত্রুটি ও ভিটামিন বিষক্রিয়া'),
          paragraphs: [
            l(
              'Modern clinical biochemical genetics utilizes liquid chromatography-tandem mass spectrometry (LC-MS/MS) of plasma acylcarnitines and gas chromatography-mass spectrometry (GC-MS) of urinary organic acids to diagnose inborn errors of cofactor metabolism. Mutations in the gene encoding thiamine transporter 1 (SLC19A2) cause thiamine-responsive megaloblastic anemia syndrome (TRMA / Rogers syndrome), presenting with diabetes mellitus, sensorineural deafness, and megaloblastic anemia that corrects fully upon oral administration of pharmacological thiamine. Similarly, biopterin defects (deficiencies of GTP cyclohydrolase I or dihydropteridine reductase) impair the non-vitamin cofactor tetrahydrobiopterin (BH4), producing atypical hyperphenylalaninemia and severe central neurotransmitter depletion refractory to dietary phenylalanine restriction alone.',
              'আধুনিক ক্লিনিক্যাল জেনেটিক্সে ট্যান্ডেম মাস স্পেকট্রোমেট্রি (LC-MS/MS) ব্যবহার করে প্লাজমা অ্যাসাইলকার্নিটিন এবং প্রস্রাবের জৈব অ্যাসিড মেপে কোফ্যাক্টর বিপাকের জন্মগত ত্রুটি শনাক্ত করা হয়। থায়ামিন পরিবাহক জিনের (SLC19A2) মিউটেশনের কারণে রজার্স সিন্ড্রোম দেখা দেয়, যাতে ডায়াবেটিস, বধিরতা এবং রক্তস্বল্পতা হয় যা কেবল উচ্চমাত্রার থায়ামিন দিলেই ভালো হয়। একইভাবে টেট্রাহাইড্রোবায়োপটেরিন (BH4) তৈরির ত্রুটিতে ফিনাইলঅ্যালানিনের পাশাপাশি ডোপামিন ও সেরোটোনিন তৈরি বন্ধ হয়ে চরম স্নায়ুরোগ সৃষ্টি হয়।'
            ),
            l(
              'While water-soluble vitamins are readily cleared, massive megadoses can induce unexpected toxicities: chronic pharmacological nicotinic acid (>2–3 g/day) produces prostaglandin-mediated cutaneous flushing, hepatic transaminitis, and exacerbates hyperuricemic gout by competing with uric acid for renal tubular secretion. Vitamin B6 toxicity (>200–500 mg/day) produces severe sensory ganglionopathy and irreversible ataxia through dorsal root ganglion neuronal apoptosis. Among fat-soluble vitamins, chronic hypervitaminosis A causes cranial hypertension (pseudotumor cerebri), hepatosplenomegaly, and teratogenicity in pregnancy, while hypervitaminosis D produces hypercalcemic metastatic calcification of soft tissues and renal failure.',
              'পানিতে দ্রবণীয় ভিটামিন সাধারণত নিরাপদ হলেও অতিরিক্ত মাত্রায় সেবন করলে বিষক্রিয়া হতে পারে: অতিরিক্ত নিয়াসিন খেলে ত্বক লাল হয়ে জ্বালাপোড়া করে, লিভারের এনজাইম বাড়ে এবং ইউরিক অ্যাসিড বেড়ে গেঁটেবাত দেখা দেয়। দৈনিক ২০০ মিলিগ্রামের বেশি ভিটামিন B6 খেলে স্নায়ু ধ্বংস হয়ে স্থায়ীভাবে হাত-পায়ের ভারসাম্য নষ্ট হয়। অন্যদিকে চর্বিতে দ্রবণীয় ভিটামিন এ বেশি খেলে মস্তিষ্কে চাপ বাড়ে (সিউডোটিউমার সেরিবি) এবং গর্ভের শিশু বিকলাঙ্গ হয়; আর অতিরিক্ত ভিটামিন ডি রক্তে অতিরিক্ত ক্যালসিয়াম বাড়িয়ে কিডনি ফেইলিউর ঘটায়।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A comprehensive diagram illustrating human micronutrient cofactors and metalloclusters: mapping thiamine pyrophosphate in alpha-ketoacid decarboxylation, riboflavin FAD/FMN in electron transport, niacin NAD+/NADP+ in hydride transfer, pantothenate coenzyme A in acyl activation, pyridoxal phosphate in amino acid flux, biotin in ATP-dependent carboxylation, folate and cobalamin in one-carbon DNA synthesis, and trace mineral metalloclusters in cellular antioxidant defenses.',
      'মানবদেহের অনুপুষ্টি কোফ্যাক্টর ও ধাতব ক্লাস্টারের পূর্ণাঙ্গ মানচিত্র: আলফা-কিটোঅ্যাসিড ডিকার্বক্সিলেশনে থায়ামিন টিপিপি, শ্বসন শৃঙ্খলে রিবোফ্লাভিন এফএডি/এফএমএন, হাইড্রাইড স্থানান্তরে নিয়াসিন এনএডি+, অ্যাসিটাইল গ্রুপ বহনে প্যান্টোথেনিক অ্যাসিড কোএ, অ্যামিনো অ্যাসিড ভাঙনে পিএলপি, কার্বক্সিলেশনে বায়োটিন, ডিএনএ তৈরিতে ফোলেট ও B12 এবং অ্যান্টিঅক্সিডেন্ট প্রতিরক্ষায় ট্রেস খনিজের ভূমিকা।'
    ),
    steps: [
      l('Thiamine pyrophosphate (TPP) powers alpha-ketoacid decarboxylation in PDC and alpha-KGDH.', 'থায়ামিন পাইরোফসফেট (টিপিপি) পিডিসি ও আলফা-কেজিডিএইচ-এ আলফা-কিটোঅ্যাসিড ভাঙন সম্পন্ন করে।'),
      l('Riboflavin (FAD/FMN) and Niacin (NAD+/NADP+) execute electron transport and redox hydrides.', 'রিবোফ্লাভিন ও নিয়াসিন কোষীয় শ্বসনে ইলেকট্রন ও হাইড্রাইড আয়ন স্থানান্তর করে শক্তি যোগায়।'),
      l('Pantothenate (CoA-SH) activates acyl groups, and Pyridoxal Phosphate (PLP) drives transamination.', 'কো-এনজাইম এ অ্যাসিটাইল গ্রুপ বহন করে এবং পিএলপি অ্যামিনো অ্যাসিডের ট্রান্সঅ্যামিনেশন চালায়।'),
      l('Biotin captures bicarbonate via ATP, and the Folate-Cobalamin axis fuels thymidylate DNA replication.', 'বায়োটিন এটিপি দিয়ে কার্বন ডাই-অক্সাইড ধরে এবং ফোলেট-B12 অক্ষ ডিএনএ সংশ্লেষে এক-কার্বন যোগায়।'),
    ],
  },
  assessment: {
    question: l(
      'A 52-year-old man with chronic severe alcohol dependence is brought to the emergency department after being found stuporous in an abandoned building. Initial examination reveals bilateral sixth cranial nerve palsies (abducens paralysis), horizontal nystagmus, marked cerebellar ataxia, and global disorientation. Arterial blood gas demonstrates an elevated anion gap metabolic acidosis with high blood lactate. The emergency team prepares to administer high-dose intravenous glucose for hypoglycemia and multivitamin infusions. Which biochemical principle dictates the immediate sequence of therapy for this patient?',
      'দীর্ঘদিন ধরে চরম মদ্যপানে অভ্যস্ত একজন ৫২ বছর বয়সী ব্যক্তিকে অচেতন অবস্থায় হাসপাতালে আনা হলো। পরীক্ষায় দুই চোখের অ্যাবডিউসেন্স নার্ভ পক্ষাঘাত, অনুভূমিক নিস্ট্যাগমাস, মারাত্মক ভারসাম্যহীনতা (অ্যাটাক্সিয়া) এবং স্মৃতিভ্রান্তি পাওয়া গেল। রক্ত পরীক্ষায় উচ্চ অ্যানিয়ন গ্যাপ ল্যাকটিক অ্যাসিডোসিস ধরা পড়ল। মেডিকেল টিম হাইপোগ্লাইসেমিয়ার জন্য গ্লুকোজ ইনফিউশন এবং ভিটামিন দেওয়ার প্রস্তুতি নিচ্ছে। কোন জৈবরাসায়নিক যুক্তিতে এই রোগীর চিকিৎসার অগ্রাধিকার ও ধারাবাহিকতা নির্ধারণ করতে হবে?'
    ),
    options: [
      l(
        'Thiamine (vitamin B1) must be administered intravenously BEFORE or concurrently with glucose; administering glucose alone exacerbates intracellular TPP depletion, precipitating acute Wernicke-Korsakoff encephalopathy and brainstem herniation.',
        'গ্লুকোজ দেওয়ার আগে বা সাথে সাথে অবশ্যই শিরায় থায়ামিন (ভিটামিন B1) দিতে হবে; কারণ কেবল গ্লুকোজ দিলে কোষে টিপিপি নিঃশেষ হয়ে তীব্র ওয়ার্নিক এনসেফালোপ্যাথি ও ব্রেনস্টেম মৃত্যু ঘটতে পারে।'
      ),
      l(
        'Folic acid must be administered prior to thiamine to clear the methyl-folate trap and restore hepatic glycogen storage before carbohydrate refeeding.',
        'থায়ামিন দেওয়ার আগে ফলিক অ্যাসিড দিতে হবে যাতে মিথাইল-ফোলেট ট্র্যাপ দূর হয়ে যকৃতে গ্লাইকোজেন জমা হতে পারে।'
      ),
      l(
        'Pyridoxine (vitamin B6) must be infused first to activate glycogen phosphorylase and prevent acute rebound hypoglycemia.',
        'গ্লাইকোজেন ফসফোরাইলেজ সক্রিয় করতে প্রথমে পাইরিডক্সিন (ভিটামিন B6) দিতে হবে যাতে রক্তে গ্লুকোজ কমে না যায়।'
      ),
      l(
        'Intravenous glucose must be infused as a rapid bolus for 2 hours prior to any vitamin cofactors to restore cerebral ATP and suppress ketogenesis.',
        'মস্তিষ্কে এটিপি ফিরিয়ে আনতে এবং কিটোজেনেসিস থামাতে যেকোনো ভিটামিন দেওয়ার আগে ২ ঘণ্টা দ্রুত গ্লুকোজ স্যালাইন দিতে হবে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'In chronic alcoholism and severe malnutrition, whole-body stores of thiamine (vitamin B1) are profoundly depleted. Thiamine pyrophosphate (TPP) is an indispensable catalytic cofactor for two key mitochondrial enzymes of glucose metabolism: the pyruvate dehydrogenase complex (PDC, converting pyruvate to acetyl-CoA for entry into the citric acid cycle) and alpha-ketoglutarate dehydrogenase. If a large intravenous glucose load is administered without prior or concurrent thiamine replacement, the sudden surge in intracellular glycolytic flux generates abundant pyruvate that CANNOT enter the TCA cycle due to lack of active PDC. Instead, pyruvate is massively shunted into lactate by lactate dehydrogenase, precipitating life-threatening lactic acidosis and exhausting residual neuronal TPP in the mammillary bodies and medial thalamus, resulting in acute, irreversible Wernicke encephalopathy and death.',
      'দীর্ঘস্থায়ী মদ্যপান ও অপুষ্টির রোগীদের শরীরে থায়ামিনের ভাণ্ডার সম্পূর্ণ খালি থাকে। গ্লুকোজ বিপাকের দুটি প্রধান এনজাইম—পাইরুভেট ডিহাইড্রোজিনেজ (পিডিসি) এবং আলফা-কিটোগ্লুটারেট ডিহাইড্রোজিনেজের জন্য থায়ামিন পাইরোফসফেট (টিপিপি) অপরিহার্য। থায়ামিন না দিয়ে রোগীকে সরাসরি গ্লুকোজ স্যালাইন দিলে কোষে গ্লাইকোলাইসিসে প্রচুর পাইরুভেট তৈরি হয় যা টিপিপি না থাকায় সাইট্রিক অ্যাসিড চক্রে ঢুকতে পারে না। ফলে এই সমস্ত পাইরুভেট ল্যাকটেটে পরিণত হয়ে মারাত্মক ল্যাকটিক অ্যাসিডোসিস সৃষ্টি করে এবং মস্তিষ্কের ম্যামিলারি বডি ও থ্যালামাসের স্নায়ুকোষ ধ্বংস করে তাৎক্ষণিক মৃত্যু ঘটায়। তাই গ্লুকোজ দেওয়ার পূর্বেই শিরায় থায়ামিন প্রয়োগ করা বাধ্যতামূলক।'
    ),
  },
}
