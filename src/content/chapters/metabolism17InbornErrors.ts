import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const inbornErrorsRefs = [
  {
    id: 'scriver-iem-online-ch01',
    authors: 'Charles R. Scriver, Arthur L. Beaudet, William S. Sly, David Valle',
    title: 'The Metabolic and Molecular Bases of Inherited Disease (OMMBID), Chapter 1: Garrod and the Biochemical Genetics of Inborn Errors',
    organization: 'McGraw-Hill Education',
    year: 2020,
    url: 'https://ommbid.mhmedical.com/book.aspx?bookid=2702',
  },
  {
    id: 'nelson-pediatrics-21e-ch101',
    authors: 'Robert M. Kliegman, Joseph W. St. Geme III, Nathan J. Blum, Samir S. Shah, Robert C. Tasker, Karen M. Wilson',
    title: 'Nelson Textbook of Pediatrics, 21st edition, Chapter 101: An Approach to Inborn Errors of Metabolism and Newborn Screening',
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/nelson-textbook-of-pediatrics/kliegman/978-0-323-52950-1',
  },
  {
    id: 'harpers-biochem-32e-ch29',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 29: Biomedical Importance of Inherited Metabolic Disorders",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'marks-medbiochem-6e-ch26',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 26: Inborn Errors of Metabolism and Clinical Genetics",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

const inbornErrors3DData: Organ3DExplorerContent = {
  title: l('3D Multi-Organ Pathology of Monogenic Metabolic Blocks', '৩ডি বহু-অঙ্গীয় জন্মগত বিপাকীয় ব্লকের প্যাথলজি'),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and explore coordinate space to trace how single-gene enzyme deficiencies trigger substrate intoxication, energy starvation, and structural deposition across human organ systems.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে একক জিনের এনজাইম ঘাটতি বিষাক্ত উপাদান জমা করে, কোষীয় শক্তি নিঃশেষ করে এবং বিভিন্ন অঙ্গে মারাত্মক প্যাথলজি সৃষ্টি করে।'
  ),
  description: l(
    'Inborn errors of metabolism exhibit distinctive organ vulnerability patterns: the liver undergoes hepatomegaly and steatosis in von Gierke and galactosemia, the brain experiences neurotoxic swelling from hyperammonemia and leucine in MSUD, skeletal muscle undergoes rhabdomyolysis in McArdle disease, and the reticuloendothelial system enlarges in lysosomal storage diseases.',
    'জন্মগত বিপাকীয় রোগগুলোর অঙ্গভিত্তিক ক্ষয়ক্ষতির সুনির্দিষ্ট প্যাটার্ন রয়েছে: ভন গিয়ের্কে ও গ্যালাক্টোসেমিয়ায় যকৃৎ ফুলে ওঠে এবং ফ্যাটি লিভার হয়, এমএসইউডি ও ইউরিয়া চক্রের ত্রুটিতে অতিরিক্ত অ্যামোনিয়ায় মস্তিষ্ক ফুলে যায়, ম্যাকআর্ডল রোগে কঙ্কালপেশি ভেঙে যায় এবং লাইসোসোমাল রোগে যকৃৎ ও প্লীহা মারাত্মকভাবে বৃদ্ধি পায়।'
  ),
  organs: [
    {
      id: 'organ-liver-iem',
      name: l('Liver (Central Metabolic Gateway & Glycogen Hub)', 'যকৃৎ (কেন্দ্রীয় বিপাকীয় প্রবেশদ্বার ও গ্লাইকোজেন কেন্দ্র)'),
      latinName: 'Hepar',
      system: l('Hepatobiliary & Metabolic System', 'যকৃৎ-পিত্ত ও বিপাকীয় তন্ত্র'),
      cavity: l('Right Hypochondrium and Epigastrium', 'ডান হাইপোকন্ড্রিয়াম ও এপিগ্যাস্ট্রিয়াম'),
      position3D: { x: 12, y: 200, z: 0 },
      color: '#10b981',
      highlightColor: '#6ee7b7',
      shapeType: 'liver',
      description: l(
        'The primary site of fuel processing; suffers acute hepatomegaly, steatosis, and hepatic failure in von Gierke disease (G6Pase deficiency), hereditary fructose intolerance (aldolase B deficiency), and classical galactosemia (GALT deficiency).',
        'জ্বালানি প্রক্রিয়াকরণের প্রধান কেন্দ্র; ভন গিয়ের্কে রোগ (G6Pase ঘাটতি), বংশগত ফ্রুক্টোজ অসহিষ্ণুতা (অ্যালডোলেজ বি ঘাটতি) এবং গ্যালাক্টোসেমিয়ায় (GALT ঘাটতি) যকৃৎ মারাত্মকভাবে ফুলে যায় এবং লিভার ফেইলিউর ঘটে।'
      ),
      spatialRelations: l(
        'Occupies the right upper quadrant under the right hemidiaphragm; drains portal blood carrying dietary monosaccharides directly from the intestinal capillary beds.',
        'ডান ডায়াফ্রামের নিচে অবস্থিত; অন্ত্র থেকে শোষিত মনোস্যাকারাইড সরাসরি পোর্টাল শিরার মাধ্যমে প্রথমে যকৃতেই প্রবেশ করে।'
      ),
      physiology: l(
        'Expresses glucose-6-phosphatase to dephosphorylate glycogen- and gluconeogenesis-derived G6P into free blood glucose; expresses the full 5-enzyme urea cycle to convert neurotoxic ammonia into urea.',
        'গ্লাইকোজেন ও গ্লুকোনিওজেনেসিস থেকে মুক্ত গ্লুকোজ রক্তে ছাড়তে গ্লুকোজ-৬-ফসফেটেজ ব্যবহার করে; এবং বিষাক্ত অ্যামোনিয়া দূর করতে সম্পূর্ণ ইউরিয়া চক্র পরিচালনা করে।'
      ),
      nutritionConnection: l(
        'Treatment of hepatic inborn errors requires strict dietary substrate exclusion: lifelong galactose-free soy formula in galactosemia, sucrose/fructose restriction in HFI, and uncooked cornstarch in GSD I.',
        'যকৃতের জন্মগত রোগের প্রধান চিকিৎসা হলো নির্দিষ্ট খাদ্য উপাদান বাদ দেওয়া: গ্যালাক্টোসেমিয়ায় ল্যাকটোজমুক্ত খাবার, এইচএফআই-তে চিনি/ফ্রুক্টোজ বর্জন এবং জিএসডি ১-এ কাঁচা ভুট্টার স্টার্চ গ্রহণ।'
      ),
      clinicalSignificance: l(
        'Trapping of phosphorylated hexoses (galactose-1-phosphate or fructose-1-phosphate) sequesters intracellular inorganic phosphate (Pi), halting mitochondrial ATP synthesis and precipitating acute hepatic necrosis.',
        'ফসফরাইলেটেড শর্করা আটকা পড়লে কোষে মুক্ত ফসফেট নিঃশেষ হয়ে যায়, ফলে মাইটোকন্ড্রিয়াল এটিপি তৈরি বন্ধ হয়ে দ্রুত যকৃতের কোষের মৃত্যু (হেপাটিক নেক্রোসিস) ঘটে।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-brain-iem',
      name: l('Brain (Extreme Vulnerability to Neurotoxins & Hypoglycemia)', 'মস্তিষ্ক (স্নায়ুবিষ ও হাইপোগ্লাইসেমিয়ায় চরম সংবেদনশীল)'),
      latinName: 'Cerebrum',
      system: l('Central Nervous System', 'কেন্দ্রীয় স্নায়ুতন্ত্র'),
      cavity: l('Cranial Cavity', 'করোটিকা গহ্বর'),
      position3D: { x: 0, y: 48, z: 0 },
      color: '#9333ea',
      highlightColor: '#c084fc',
      shapeType: 'brain',
      description: l(
        'Extremely vulnerable to small-molecule intoxication: hyperammonemia in urea cycle disorders causes astrocytic swelling and cerebral edema; leucine accumulation in MSUD causes dysmyelination; phenylalanine causes severe microcephaly in PKU.',
        'বিষাক্ত অণুর প্রতি অত্যন্ত সংবেদনশীল: ইউরিয়া চক্রের ত্রুটিতে অতিরিক্ত অ্যামোনিয়ায় মস্তিষ্কের অ্যাস্ট্রোসাইট ফুলে ব্রেন এডিমা হয়; এমএসইউডিতে লিউসিন মায়েলিন নষ্ট করে; এবং পিকেইউ-তে ফিনাইলঅ্যালানিন মস্তিষ্কের মারাত্মক বৃদ্ধি রোধ করে।'
      ),
      spatialRelations: l(
        'Enclosed within the rigid skull; any cerebral edema generated by osmotic swelling rapidly raises intracranial pressure, risking transtentorial brainstem herniation and coma.',
        'করোটিকার অনমনীয় অস্থির ভেতরে অবস্থিত; ফলে অসমোটিক কারণে মস্তিষ্ক সামান্য ফুলে উঠলেই ইন্ট্রাক্রেনিয়াল প্রেশার বেড়ে ব্রেনস্টেম হার্নিয়েশন ও কোমা দেখা দেয়।'
      ),
      physiology: l(
        'Relies on continuous circulating glucose and ketone delivery; expresses high levels of the L-type amino acid transporter 1 (LAT1) at the blood-brain barrier, which saturates with excess phenylalanine or leucine.',
        'অবিরাম রক্তের গ্লুকোজ ও কিটোনের ওপর নির্ভরশীল; এর রক্ত-মস্তিষ্ক বাধায় LAT1 ট্রান্সপোর্টার থাকে যা রক্তে ফিনাইলঅ্যালানিন বা লিউসিন বেড়ে গেলে অন্য অপরিহার্য অ্যামিনো অ্যাসিড ঢুকতে দেয় না।'
      ),
      nutritionConnection: l(
        'Strict dietary phenylalanine restriction supplemented with synthetic amino acid mixtures free of phenylalanine prevents intellectual disability in PKU if initiated before 3 weeks of age.',
        'জন্মের ৩ সপ্তাহের মধ্যে ফিনাইলঅ্যালানিনমুক্ত বিশেষ ফর্মুলা খাদ্য শুরু করলে পিকেইউ রোগে আক্রান্ত শিশু সম্পূর্ণ স্বাভাবিক বুদ্ধিমত্তা নিয়ে বেড়ে ওঠে।'
      ),
      clinicalSignificance: l(
        'Neonates presenting with lethargy, poor feeding, vomiting, and cycling between hypertonia and hypotonia in the first week of life must be screened emergently for inborn errors before irreversible brain injury occurs.',
        'জন্মের প্রথম সপ্তাহে শিশুর দুধ না খাওয়া, বমি, অতিরিক্ত ঘুম ও খিঁচুনি দেখা দিলে মস্তিষ্কের স্থায়ী ক্ষতি রোধে অবিলম্বে জরুরি বিপাকীয় স্ক্রিনিং করা অত্যাবশ্যক।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-muscle-iem',
      name: l('Skeletal Muscle (Myopathic Intolerance & Rhabdomyolysis)', 'কঙ্কালপেশি (পেশির দুর্বলতা ও মায়োগ্লোবিনুরিয়া)'),
      latinName: 'Musculus skeletalis',
      system: l('Musculoskeletal System', 'পেশিতন্ত্র'),
      cavity: l('Somatic Compartment', 'দেহকাঠামো'),
      position3D: { x: 0, y: 130, z: -8 },
      color: '#dc2626',
      highlightColor: '#f87171',
      shapeType: 'skeleton',
      description: l(
        'Suffers painful contractures, cramping, and rhabdomyolysis during exertion in McArdle disease (muscle glycogen phosphorylase deficiency) and carnitine palmitoyltransferase II (CPT-II) deficiency.',
        'ম্যাকআর্ডল রোগে (পেশির গ্লাইকোজেন ফসফোরাইলেজ ঘাটতি) এবং CPT-II ঘাটতিতে শারীরিক পরিশ্রমের সময় তীব্র পেশি ব্যথা, ক্র্যাম্প এবং পেশির কোষ ফেটে মায়োগ্লোবিন নির্গমন ঘটে।'
      ),
      spatialRelations: l(
        'Anchored to the bony skeleton; upon muscle fiber lysis (rhabdomyolysis), massive quantities of intracellular myoglobin are liberated into venous circulation, risking acute tubular necrosis in the kidneys.',
        'কঙ্কালের সাথে যুক্ত থাকে; অতিরিক্ত পরিশ্রমে পেশির কোষ ফেটে গেলে রক্তে মায়োগ্লোবিন মুক্ত হয়, যা বৃক্কে গিয়ে কিডনি ফেইলিউর ঘটাতে পারে।'
      ),
      physiology: l(
        'Relies on intracellular glycogen breakdown for immediate anaerobic sprint work, and mitochondrial fatty acid beta-oxidation for sustained endurance work.',
        'তাৎক্ষণিক দৌড়ের শক্তির জন্য নিজস্ব গ্লাইকোজেন এবং দীর্ঘস্থায়ী সহনশীল কাজের জন্য মাইটোকন্ড্রিয়াল ফ্যাটি অ্যাসিড জারণের ওপর নির্ভর করে।'
      ),
      nutritionConnection: l(
        'Patients with McArdle disease demonstrate the "second wind" phenomenon: consuming simple oral carbohydrates 10 minutes prior to planned exercise provides blood glucose to bypass muscle glycogen blocks.',
        'ম্যাকআর্ডল রোগের রোগীরা "সেকেন্ড উইন্ড" প্রদর্শন করে: ব্যায়াম শুরুর ১০ মিনিট আগে সামান্য মিষ্টি বা গ্লুকোজ খেলে রক্ত থেকে সরাসরি শক্তি পেয়ে পেশির বাধা অতিক্রম করা যায়।'
      ),
      clinicalSignificance: l(
        'Failure of blood lactate to rise following ischemic forearm exercise test classically confirms myopathic glycogenolysis failure (McArdle disease / GSD V).',
        'হাতে রক্ত চলাচল সাময়িক বন্ধ করে ব্যায়ামের পর রক্তে ল্যাকটেট না বাড়লে তা নিশ্চিতভাবে পেশির গ্লাইকোজেন ভাঙন ব্যর্থতা (ম্যাকআর্ডল ডিজিজ) প্রমাণ করে।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-kidneys-iem',
      name: l('Kidneys (Fanconi Tubulopathy & Dicarboxylic Aciduria)', 'বৃক্ক (ফ্যানকোনি টিউবুলোপ্যাথি ও ডাইকার্বক্সিলিক অ্যাসিডুরিয়া)'),
      latinName: 'Renes',
      system: l('Renal & Excretory System', 'রেচন ও মূত্রতন্ত্র'),
      cavity: l('Retroperitoneal Space', 'রেট্রোপেরিটোনিয়াল স্থান'),
      position3D: { x: 0, y: 260, z: -10 },
      color: '#0284c7',
      highlightColor: '#38bdf8',
      shapeType: 'kidneys',
      description: l(
        'Excretes accumulated toxic metabolic intermediates: urinary methylmalonic acid in MMA, succinylacetone in tyrosinemia type I, and medium-chain dicarboxylic acids (adipic, suberic, sebacic) in MCAD deficiency.',
        'বিপাকীয় ব্লকের বিষাক্ত উপাদান প্রস্রাবের মাধ্যমে বের করে দেয়: যেমন টাইরোসিনেমিয়ায় সাকসিনাইলঅ্যাসিটোন, MMA-তে মিথাইলম্যালোনিক অ্যাসিড এবং MCAD ঘাটতিতে ডাইকার্বক্সিলিক অ্যাসিড।'
      ),
      spatialRelations: l(
        'Filters 180 liters of glomerular filtrate daily; renal proximal tubules absorb glucose, amino acids, phosphate, and bicarbonate via ATP-dependent transporters.',
        'প্রতিদিন ১৮০ লিটার রক্ত ফিল্টার করে; এর প্রক্সিমাল টিউবিউল এটিপি খরচ করে ফিল্ট্রেট থেকে প্রয়োজনীয় গ্লুকোজ, অ্যামিনো অ্যাসিড ও ফসফেট পুনরায় শোষণ করে।'
      ),
      physiology: l(
        'In cystinosis, cystine crystals accumulate within renal tubular lysosomes; in galactosemia and tyrosinemia, toxic metabolites damage proximal tubule lining, producing generalized renal Fanconi syndrome.',
        'সিস্টিনোসিস রোগে টিউবিউলের লাইসোসোমে সিস্টিন জমা হয়; এবং গ্যালাক্টোসেমিয়া ও টাইরোসিনেমিয়ায় বিষাক্ত উপাদান টিউবিউল নষ্ট করে রেনাল ফ্যানকোনি সিন্ড্রোম ঘটায়।'
      ),
      nutritionConnection: l(
        'Aggressive sodium bicarbonate administration and generous intravenous fluids are required during acute metabolic decompensation to prevent intratubular precipitation of organic acids and myoglobin.',
        'তীব্র বিপাকীয় সংকটের সময় প্রচুর স্যালাইন ও সোডিয়াম বাইকার্বোনেট দিতে হয় যাতে কিডনির নালিতে জৈব অ্যাসিড বা মায়োগ্লোবিন জমে কিডনি নষ্ট না হয়।'
      ),
      clinicalSignificance: l(
        'Urine organic acid analysis by gas chromatography-mass spectrometry (GC-MS) provides the definitive biochemical fingerprint for organic acidemias and fatty acid oxidation disorders.',
        'প্রস্রাবের জৈব অ্যাসিড পরীক্ষা (GC-MS) অর্গানিক অ্যাসিডেমিয়া এবং ফ্যাটি অ্যাসিড জারণের ত্রুটি নিশ্চিত করার গোল্ড স্ট্যান্ডার্ড টেস্ট।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism17InbornErrorsLesson: LessonTopic = {
  id: 'topic.metabolism.inborn-errors-metabolism',
  slug: 'inborn-errors-metabolism',
  version: 1,
  updatedAt: '2026-10-13',
  title: l('17 · Inborn Errors of Metabolism', '১৭ · জন্মগত বিপাকীয় ত্রুটি'),
  summary: l(
    'Monogenic metabolic disease architecture and pathophysiological mechanisms: Archibald Garrod principles of inborn errors, carbohydrate trapping disorders (galactosemia, hereditary fructose intolerance, glycogen storage diseases I, II, and V), amino acidopathies (phenylketonuria PKU, maple syrup urine disease MSUD, alkaptonuria, homocystinuria), mitochondrial fatty acid oxidation blocks (medium-chain acyl-CoA dehydrogenase MCAD deficiency), lysosomal storage diseases (Gaucher, Tay-Sachs, Niemann-Pick), acute neonatal hyperammonemia algorithms, and newborn screening via tandem mass spectrometry (MS/MS).',
    'একক জিনীয় বিপাকীয় রোগের গঠন ও প্যাথোফিজিওলজিক্যাল প্রক্রিয়া: আর্চিবল্ড গ্যারডের জন্মগত ত্রুটির মূলনীতি, শর্করা ট্র্যাপিং রোগ (গ্যালাক্টোসেমিয়া, বংশগত ফ্রুক্টোজ অসহিষ্ণুতা, গ্লাইকোজেন সঞ্চয় রোগ ১, ২ ও ৫), অ্যামিনো অ্যাসিড ভাঙনের ত্রুটি (ফিনাইলকিটোনুরিয়া পিকেইউ, ম্যাপল সিরাপ ইউরিন ডিজিজ এমএসইউডি, অ্যালক্যাপটোনুরিয়া, হোমোসিস্টিনুরিয়া), ফ্যাটি অ্যাসিড জারণের ত্রুটি (MCAD ঘাটতি), লাইসোসোমাল সঞ্চয় রোগ (গশার, টে-স্যাক্স, নিম্যান-পিক), নবজাতকের জরুরি হাইপারঅ্যামোনিয়া অ্যালগরিদম এবং ট্যান্ডেম মাস স্পেকট্রোমেট্রি নবজাতক স্ক্রিনিং।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Formulate the pathogenic dual-axis framework of inborn errors of metabolism: differentiate upstream toxic substrate accumulation from downstream essential product starvation.',
      'জন্মগত বিপাকীয় রোগের দ্বৈত অক্ষীয় প্যাথোজেনেসিস ফ্রেমওয়ার্ক প্রণয়ন করা: এনজাইম ব্লকের পূর্বে বিষাক্ত উপাদান জমা হওয়া এবং ব্লকের পরে প্রয়োজনীয় উপাদানের অভাবের মাঝে পার্থক্য নিরূপণ করা।',
    ),
    l(
      'Differentiate the enzymatic lesions, cellular energy depletion mechanisms, and clinical phenotypes across carbohydrate disorders (GALT, Aldolase B, G6Pase), amino acidopathies (PAH, BCKDH, CBS), and fatty acid oxidation defects (MCAD).',
      'শর্করা রোগ (GALT, অ্যালডোলেজ বি, G6Pase), অ্যামিনো অ্যাসিড রোগ (PAH, BCKDH, CBS) এবং ফ্যাটি অ্যাসিড জারণ ত্রুটির (MCAD) এনজাইম ঘাটতি, কোষীয় এটিপি ধ্বংস এবং ক্লিনিক্যাল লক্ষণের সুনির্দিষ্ট পার্থক্য নির্ণয় করা।',
    ),
    l(
      'Execute emergency diagnostic workups for acute neonatal metabolic decompensation: integrate blood glucose, anion gap acidosis, plasma ammonia, ketones, and tandem mass spectrometry acylcarnitine profiling.',
      'নবজাতকের তীব্র বিপাকীয় সংকটের জরুরি ডায়াগনস্টিক অ্যালগরিদম পরিচালনা করা: রক্তে গ্লুকোজ, অ্যানিয়ন গ্যাপ অ্যাসিডোসিস, প্লাজমা অ্যামোনিয়া, কিটোন এবং ট্যান্ডেম মাস স্পেকট্রোমেট্রি অ্যাসাইলকার্নিটিন প্রোফাইল বিশ্লেষণ করা।',
    ),
  ],
  prerequisiteIds: ['topic.metabolism.glycogen-gluconeogenesis', 'topic.metabolism.amino-acid-catabolism-urea', 'topic.metabolism.fatty-acid-oxidation-ketones'],
  relatedTopicIds: ['topic.metabolism.glycolysis-pyruvate', 'topic.metabolism.carbon-skeletons-specialized-products', 'topic.metabolism.micronutrients-cofactors'],
  references: inbornErrorsRefs,
  evidenceBySection: {
    introduction: ['scriver-iem-online-ch01', 'harpers-biochem-32e-ch29'],
    structure: ['harpers-biochem-32e-ch29', 'marks-medbiochem-6e-ch26'],
    mechanism: ['marks-medbiochem-6e-ch26', 'nelson-pediatrics-21e-ch101'],
    integration: ['scriver-iem-online-ch01', 'nelson-pediatrics-21e-ch101'],
    practice: ['nelson-pediatrics-21e-ch101', 'marks-medbiochem-6e-ch26'],
    takeaways: ['scriver-iem-online-ch01', 'harpers-biochem-32e-ch29'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Chemical Individuality & The Monogenic Block Concept', '১. রাসায়নিক স্বকীয়তা ও একক জিনীয় ব্লকের ধারণা'), sectionId: 'introduction' },
      { id: 'sec-carbohydrate', label: l('2. Carbohydrate Trapping & Glycogen Storage Pathophysiology', '২. শর্করা ট্র্যাপিং ও গ্লাইকোজেন সঞ্চয় রোগের প্রক্রিয়া'), sectionId: 'structure' },
      { id: 'sec-amino-acids', label: l('3. Amino Acidopathies, Organic Acidemias & Neurotoxicity', '৩. অ্যামিনো অ্যাসিড ভাঙনের ত্রুটি ও স্নায়ুবিষাক্ততা'), sectionId: 'mechanism' },
      { id: 'sec-fao-lysosomes', label: l('4. Fatty Acid Oxidation Blocks & Lysosomal Storage Pathology', '৪. ফ্যাটি অ্যাসিড জারণের বাধা ও লাইসোসোমাল সঞ্চয় রোগ'), sectionId: 'integration' },
      { id: 'sec-emergency-nbs', label: l('5. Neonatal Decompensation Algorithms & Tandem Mass Spectrometry', '৫. নবজাতকের জরুরি ডায়াগনস্টিকস ও ট্যান্ডেম মাস স্পেকট্রোমেট্রি'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Synthesis & Clinical Summary', '৬. উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা ও ক্লিনিক্যাল সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Phosphate Trapping (Pi Sequestration)', 'ফসফেট ট্র্যাপিং (মুক্ত ফসফেট আবদ্ধকরণ)'),
        definition: l(
          'Pathological biochemical phenomenon occurring in hereditary fructose intolerance (aldolase B deficiency) or classical galactosemia (GALT deficiency), wherein hexoses are phosphorylated by ketohexokinases/galactokinase but cannot be processed further; traps intracellular inorganic phosphate as hexose-monophosphates, depleting ATP, halting mitochondrial oxidative phosphorylation, and precipitating acute hepatic necrosis.',
          'বংশগত ফ্রুক্টোজ অসহিষ্ণুতা বা গ্যালাক্টোসেমিয়ায় ঘটে থাকা মারাত্মক প্রক্রিয়া, যেখানে শর্করা ফসফরাইলেট হলেও পরবর্তী এনজাইমের অভাবে আর ভাঙতে পারে না; ফলে সমস্ত কোষীয় ফসফেট আটকে গিয়ে এটিপি তৈরি বন্ধ হয়ে যায় এবং যকৃতের কোষের তাৎক্ষণিক মৃত্যু ঘটে।'
        ),
      },
      {
        term: l('Phenylketonuria (PKU)', 'ফিনাইলকিটোনুরিয়া (পিকেইউ)'),
        definition: l(
          'Autosomal recessive deficiency of hepatic phenylalanine hydroxylase (PAH) or its cofactor tetrahydrobiopterin (BH4); blocks the conversion of phenylalanine to tyrosine, producing massive hyperphenylalaninemia, urinary phenylketones (phenylpyruvate, phenyllactate), intellectual disability, microcephaly, and a characteristic musty or mousy body odor.',
          'অটোজোমাল রিসেসিভ রোগ যাতে যকৃতের ফিনাইলঅ্যালানিন হাইড্রোক্সিলেজ এনজাইমের অভাবে ফিনাইলঅ্যালানিন টাইরোসিনে পরিণত হতে পারে না; ফলে রক্তে ফিনাইলঅ্যালানিন মারাত্মক বৃদ্ধি পেয়ে মস্তিষ্কের বিকাশ ধ্বংস করে এবং শরীরে বিশেষ ইঁদুরের মতো গন্ধ তৈরি হয়।'
        ),
      },
      {
        term: l('Medium-Chain Acyl-CoA Dehydrogenase (MCAD) Deficiency', 'মিডিয়াম-চেইন অ্যাসাইল-কোএ ডিহাইড্রোজিনেজ (MCAD) ঘাটতি'),
        definition: l(
          'Most common inborn error of fatty acid oxidation (autosomal recessive ACADM mutations); prevents beta-oxidation of 6- to 12-carbon fatty acids, precipitating severe hypoketotic hypoglycemia, lethargy, hyperammonemia, hepatic steatosis, and urinary dicarboxylic aciduria during fasting or catabolic illness, frequently causing sudden infant death.',
          'ফ্যাটি অ্যাসিড জারণের সবচেয়ে সাধারণ বংশগত রোগ; ৬ থেকে ১২ কার্বনযুক্ত ফ্যাটি অ্যাসিড ভাঙতে না পারায় উপবাসকালে রক্তে মারাত্মক গ্লুকোজ কমে যায় কিন্তু কোনো কিটোন বডি তৈরি হয় না (হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া), যা নবজাতকের আকস্মিক মৃত্যুর কারণ হতে পারে।'
        ),
      },
      {
        term: l('Tandem Mass Spectrometry (MS/MS) Newborn Screening', 'ট্যান্ডেম মাস স্পেকট্রোমেট্রি (MS/MS) নবজাতক স্ক্রিনিং'),
        definition: l(
          'High-throughput analytical platform used on newborn dried blood spots (Guthrie cards) that quantifies amino acids and acylcarnitines simultaneously in seconds; identifies dozens of inborn errors (amino acidopathies, organic acidemias, fatty acid oxidation defects) presymptomatically.',
          'নবজাতকের শুকনো রক্তের ফোঁটা থেকে কয়েক সেকেন্ডের মধ্যে যুগপৎ অ্যামিনো অ্যাসিড ও অ্যাসাইলকার্নিটিন নির্ণয়ের সর্বাধুনিক প্রযুক্তি; যা কোনো উপসর্গ দেখা দেওয়ার আগেই বহু মারাত্মক জন্মগত রোগ শনাক্ত করে জীবন বাঁচায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Tandem Mass Spectrometry Diagnostic Profile: Octanoylcarnitine (C8) in MCAD Deficiency', 'ট্যান্ডেম মাস স্পেকট্রোমেট্রিতে MCAD ঘাটতি নির্ণয়ে অকটানয়েলকার্নিটিনের (C8) হিসাব'),
        steps: [
          l(
            'Step 1: Obtain a dried blood spot from a 2-day-old infant during routine newborn screening. Extract acylcarnitines and perform liquid chromatography-tandem mass spectrometry (LC-MS/MS). Measure the concentration of free carnitine (C0) and medium-chain octanoylcarnitine (C8): Patient C8 = 2.45 micromol/L (Normal reference range < 0.20 micromol/L).',
            'ধাপ ১: নবজাতক স্ক্রিনিংয়ে ২ দিন বয়সী শিশুর শুকনো রক্তের নমুনা থেকে ট্যান্ডেম মাস স্পেকট্রোমেট্রি করা হলো। এতে অকটানয়েলকার্নিটিন (C8) পাওয়া গেল ২.৪৫ মাইক্রোমোল/লিটার (স্বাভাবিক মাত্রা < ০.২০ মাইক্রোমোল/লিটার)।'
          ),
          l(
            'Step 2: Measure short- and long-chain reference acylcarnitines: Decanoylcarnitine (C10) = 0.85 micromol/L (elevated, ref < 0.25); Acetylcarnitine (C2) = 14.2 micromol/L (low-normal); Free carnitine (C0) = 18.0 micromol/L.',
            'ধাপ ২: অন্যান্য অ্যাসাইলকার্নিটিন পরিমাপ: ডেকানয়েলকার্নিটিন (C10) = ০.৮৫ মাইক্রোমোল/লিটার (বেশি); মুক্ত কার্নিটিন স্বাভাবিক।'
          ),
          l(
            'Step 3: Calculate the diagnostic acylcarnitine ratio C8/C10 and C8/C2: Patient C8/C10 ratio = 2.45 / 0.85 = 2.88 (Diagnostic threshold for MCAD > 1.5). Patient C8/C2 ratio = 2.45 / 14.2 = 0.17 (Diagnostic threshold > 0.05).',
            'ধাপ ৩: ডায়াগনস্টিক অনুপাত হিসাব: C8/C10 অনুপাত = ২.৮৮ (ডায়াগনস্টিক মান > ১.৫); এবং C8/C2 অনুপাত = ০.১৭ (ডায়াগনস্টিক মান > ০.০৫)।'
          ),
          l(
            'Step 4: Clinical interpretation: Isolated elevation of octanoylcarnitine (C8) with an elevated C8/C10 ratio establishes the definitive presumptive diagnosis of medium-chain acyl-CoA dehydrogenase (MCAD) deficiency. The family must be counseled immediately to avoid fasting greater than 4 hours and provided with emergency carbohydrate management protocols.',
            'ধাপ ৪: ক্লিনিক্যাল সিদ্ধান্ত: C8 এবং C8/C10 অনুপাতের মারাত্মক বৃদ্ধি নিশ্চিতভাবে MCAD ঘাটতি প্রমাণ করে। শিশুকে কখনোই ৪ ঘণ্টার বেশি অভুক্ত রাখা যাবে না এবং জরুরি গ্লুকোজ ব্যবস্থা প্রস্তুত রাখতে হবে।'
          ),
        ],
        conclusion: l(
          'Marked elevation of octanoylcarnitine (C8) and elevated C8/C10 acylcarnitine ratios on tandem mass spectrometry presymptomatically establish MCAD deficiency, preventing fatal fasting hypoglycemia.',
          'ট্যান্ডেম মাস স্পেকট্রোমেট্রিতে C8 এবং C8/C10 অনুপাতের বৃদ্ধি লক্ষণ প্রকাশের আগেই MCAD রোগ নিশ্চিত করে আকস্মিক মৃত্যু প্রতিরোধ করে।'
        ),
      },
      {
        title: l('Emergency Diagnostic Partitioning: Acute Neonatal Encephalopathy Workup', 'নবজাতকের তীব্র এনসেফালোপ্যাথিতে ল্যাবরেটরি উপাদান পৃথকীকরণ ও রোগ নির্ণয়ের হিসাব'),
        steps: [
          l(
            'Step 1: A 4-day-old full-term infant presents with lethargy, poor feeding, hypothermia, tachypnea, and vomiting. Obtain emergency laboratory panel: Blood glucose = 68 mg/dL (normal); Blood pH = 7.52 (alkalemia); Serum Na+ = 138 mEq/L, K+ = 4.2 mEq/L, Cl- = 104 mEq/L, HCO3- = 28 mEq/L; Arterial pCO2 = 32 mmHg; Blood Ammonia = 820 micromol/L (severely elevated, ref < 80 micromol/L).',
            'ধাপ ১: ৪ দিন বয়সী অসুস্থ নবজাতকের জরুরি রক্ত পরীক্ষা: রক্তের গ্লুকোজ স্বাভাবিক; পিএইচ ৭.৫২ (অ্যালকালেমিয়া); এবং রক্তে বিষাক্ত অ্যামোনিয়ার মাত্রা ৮২০ মাইক্রোমোল/লিটার (মারাত্মক বেশি, স্বাভাবিক < ৮০)।'
          ),
          l(
            'Step 2: Calculate the serum anion gap (AG): AG = Na+ - (Cl- + HCO3-) = 138 - (104 + 28) = 138 - 132 = 6 mEq/L (Normal anion gap = 8–12 mEq/L, no metabolic acidosis present; in fact, respiratory alkalosis is present due to ammonia-stimulated central hyperventilation).',
            'ধাপ ২: সিরাম অ্যানিয়ন গ্যাপ নির্ণয়: অ্যানিয়ন গ্যাপ = ১৩৮ - (১০৪ + ২৮) = ৬ mEq/L (কোনো অ্যাসিডোসিস নেই; বরং মস্তিষ্কে অ্যামোনিয়া বেশি থাকায় দ্রুত শ্বাস নেওয়ায় রেসপিরেটরি অ্যালকালেমিয়া হয়েছে)।'
          ),
          l(
            'Step 3: Check urinary ketones: Urine ketones = NEGATIVE (No ketosis). Evaluate diagnostic matrix: Severe hyperammonemia (> 500 micromol/L) WITHOUT metabolic acidosis and WITHOUT ketosis -> Excludes organic acidemias; firmly establishes a primary Urea Cycle Disorder (UCD).',
            'ধাপ ৩: প্রস্রাবের কিটোন পরীক্ষা: কিটোন সম্পূর্ণ অনুপস্থিত। অ্যাসিডোসিস ছাড়া কেবল মারাত্মক অ্যামোনিয়ার বৃদ্ধি অর্গানিক অ্যাসিডেমিয়াকে বাতিল করে সরাসরি ইউরিয়া চক্রের রোগ (UCD) নিশ্চিত করে।'
          ),
          l(
            'Step 4: Check urinary orotic acid to localize the urea cycle defect: Urinary orotic acid is markedly elevated -> Points definitively to Ornithine Transcarbamylase (OTC) deficiency (X-linked), distinguishing it from Carbamoyl Phosphate Synthetase I (CPS-I) deficiency which has zero orotic acid.',
            'ধাপ ৪: প্রস্রাবে অরোতিক অ্যাসিড পরিমাপ: অরোতিক অ্যাসিড মারাত্মক বৃদ্ধি পাওয়া নিশ্চিত করে এটি অর্নিথিন ট্রান্সকার্বামাইলেজ (OTC) ঘাটতি।'
          ),
        ],
        conclusion: l(
          'Severe neonatal hyperammonemia in the absence of metabolic acidosis points definitively to a urea cycle enzymopathy, with elevated urinary orotic acid confirming X-linked OTC deficiency.',
          'অ্যাসিডোসিসবিহীন চরম হাইপারঅ্যামোনিয়া ইউরিয়া চক্রের ত্রুটি নির্দেশ করে এবং প্রস্রাবে অরোতিক অ্যাসিডের উপস্থিতি OTC ঘাটতি নিশ্চিত করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does the introduction of fruits or sucrose into an infant\'s diet trigger catastrophic hypoglycemia and liver failure in hereditary fructose intolerance (aldolase B deficiency)?',
          'বংশগত ফ্রুক্টোজ অসহিষ্ণুতার (অ্যালডোলেজ বি ঘাটতি) শিশুর খাবারে ফলমূল বা চিনি যোগ করলে কেন মারাত্মক হাইপোগ্লাইসেমিয়া ও লিভার ফেইলিউর ঘটে?',
        ),
        answer: l(
          'Dietary sucrose is cleaved by intestinal sucrase into glucose and fructose. In hepatocytes, ketohexokinase (fructokinase) rapidly phosphorylates fructose using ATP to produce fructose-1-phosphate (F1P). In hereditary fructose intolerance, deficiency of aldolase B blocks the cleavage of F1P into DHAP and glyceraldehyde. Consequently, F1P accumulates massively, sequestering intracellular inorganic phosphate (Pi). The depletion of free Pi halts mitochondrial ATP synthesis and, critically, deprives glycogen phosphorylase of the inorganic phosphate substrate required for glycogenolysis. Simultaneously, the lack of ATP and allosteric inhibition by F1P completely paralyzes gluconeogenesis. Starved of both glycogenolysis and gluconeogenesis, circulating glucose plummets to zero, while liver cells undergo acute necrosis from ATP exhaustion.',
          'চিনির ফ্রুক্টোজ যকৃতে ঢুকে ফ্রুক্টোকাইনেজ এনজাইমের সাহায্যে ফ্রুক্টোজ-১-ফসফেটে (F1P) রূপান্তরিত হয়। কিন্তু অ্যালডোলেজ বি এনজাইম না থাকায় এই F1P আর ভাঙতে পারে না এবং কোষে জমতে থাকে। ফলে সমস্ত মুক্ত ফসফেট আটকা পড়ে যায়। মুক্ত ফসফেট না থাকায় গ্লাইকোজেন ভাঙন (গ্লাইকোজেনোলাইসিস) বন্ধ হয়ে যায় এবং এটিপি না থাকায় নতুন গ্লুকোজ তৈরিও (গ্লুকোনিওজেনেসিস) স্তব্ধ হয়ে পড়ে। উভয় পথ বন্ধ হয়ে যাওয়ায় রক্তে গ্লুকোজ শূন্যে নেমে যায় এবং এটিপির অভাবে যকৃতের কোষ ধ্বংস হয়ে লিভার ফেইলিউর ঘটে।'
        ),
      },
      {
        question: l(
          'Why do infants with medium-chain acyl-CoA dehydrogenase (MCAD) deficiency develop non-ketotic (hypoketotic) hypoglycemia during fasting, and what makes this presentation life-threatening?',
          'MCAD ঘাটতির শিশুরা উপবাসকালে কেন কিটোনবিহীন মারাত্মক হাইপোগ্লাইসেমিয়ায় (হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া) আক্রান্ত হয় এবং কেন এটি প্রাণঘাতী?',
        ),
        answer: l(
          'Normally during fasting, hepatic beta-oxidation of fatty acids produces acetyl-CoA, which has two essential fates: it allosterically activates pyruvate carboxylase to drive gluconeogenesis, and it serves as the chemical substrate for ketogenesis to produce ketone bodies for the brain. In MCAD deficiency, the oxidation of medium-chain fatty acids (C6–C12) is blocked. Consequently, hepatocytes cannot generate acetyl-CoA: pyruvate carboxylase remains unactivated (crippling gluconeogenesis and causing hypoglycemia), and ketone bodies CANNOT be synthesized (causing hypoketosis). The brain, deprived of both blood glucose AND its alternative ketone fuel, suffers catastrophic neuroglycopenia, precipitating sudden seizures, coma, and cardiorespiratory arrest, which frequently mimics sudden infant death syndrome (SIDS).',
          'উপবাসের সময় যকৃতে ফ্যাটি অ্যাসিড জারিত হয়ে যে অ্যাসিটাইল-কোএ তৈরি হয় তা নতুন গ্লুকোজ তৈরির পথ সচল রাখে এবং মস্তিষ্কের বিকল্প জ্বালানি হিসেবে কিটোন বডি বানায়। MCAD ঘাটতিতে ফ্যাটি অ্যাসিড ভাঙতে না পারায় অ্যাসিটাইল-কোএ তৈরি হয় না। ফলে নতুন গ্লুকোজও তৈরি হতে পারে না (হাইপোগ্লাইসেমিয়া) এবং কোনো কিটোন বডিও তৈরি হয় না (হাইপোকিটোনুরিয়া)। মস্তিষ্ক একই সাথে গ্লুকোজ এবং কিটোন উভয়ের অভাবের মুখে পড়ে সম্পূর্ণ শক্তিহীন হয়ে নিস্তেজ হয়ে যায়, যার ফলে হঠাৎ খিঁচুনি, কোমা এবং আকস্মিক মৃত্যু ঘটে।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: inbornErrors3DData,
  interactiveDiagram: {
    id: 'inborn-errors-diagnostic-gateway',
    title: l('Monogenic Metabolic Blocks & Newborn Screening Gateway', 'একক জিনীয় বিপাকীয় ব্লক ও নবজাতক স্ক্রিনিং গেটওয়ে'),
    description: l(
      'Interactive pathway map of high-yield inborn errors of metabolism: explore how monogenic blocks in carbohydrates, amino acids, fatty acids, and lysosomes trigger substrate intoxication and downstream energy starvation.',
      'উচ্চ-গুরুত্বপূর্ণ জন্মগত বিপাকীয় রোগের মিথস্ক্রিয় মানচিত্র: পর্যবেক্ষণ করুন কীভাবে শর্করা, অ্যামিনো অ্যাসিড, ফ্যাটি অ্যাসিড এবং লাইসোসোমের জিনগত ত্রুটি বিষাক্ত পদার্থ জমা করে এবং শক্তিহীনতা সৃষ্টি করে।'
    ),
    disclaimer: l(
      'Metabolic block locations, enzyme classifications, and mass spectrometry biomarker ratios verified against Scriver The Metabolic and Molecular Bases of Inherited Disease and Nelson Textbook of Pediatrics (21st ed).',
      'বিপাকীয় ব্লকের অবস্থান, এনজাইম শ্রেণিবিভাগ এবং মাস স্পেকট্রোমেট্রি বায়োমার্কার অনুপাত স্ক্রিভার এবং নেলসন টেক্সটবুক অব পেডিয়াট্রিক্স দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'node-galactosemia-galt',
        label: l('1. Classical Galactosemia: GALT Block & Galactitol Cataracts', '১. ধ্রুপদী গ্যালাক্টোসেমিয়া: GALT ব্লক ও চোখে ছানি'),
        description: l(
          'Autosomal recessive deficiency of galactose-1-phosphate uridylyltransferase (GALT); blocks galactose conversion to glucose-1-P. Galactose-1-phosphate accumulates in liver causing cirrhosis, and aldose reductase converts excess galactose into galactitol in the lens, forming bilateral cataracts.',
          'গ্যালাক্টোজ-১-ফসফেট ইউরিডিলিলট্রান্সফারেজ (GALT) ঘাটতি; গ্যালাক্টোজ-১-ফসফেট যকৃতে জমে লিভার নষ্ট করে এবং চোখে অতিরিক্ত গ্যালাকটিটল জমে উভয় চোখে ছানি সৃষ্টি করে।'
        ),
        details: l(
          'Presents within days of milk feeding with failure to thrive, jaundice, hepatosplenomegaly, and high risk of Escherichia coli neonatal sepsis; treated with strict lactose-free diet.',
          'দুধ খাওয়ানোর কয়েক দিনের মধ্যেই শিশুর বৃদ্ধি ব্যাহত হয়, জন্ডিস ও ই. কোলাই সেপসিসের ঝুঁকি বাড়ে; চিকিৎসা হলো ল্যাকটোজমুক্ত ফর্মুলা দুধ।'
        ),
        sectionId: 'structure',
        color: '#f59e0b',
        svgCoords: { cx: 70, cy: 75, r: 24 },
      },
      {
        id: 'node-hfi-aldolase-b',
        label: l('2. Hereditary Fructose Intolerance: Aldolase B & Pi Trapping', '২. বংশগত ফ্রুক্টোজ অসহিষ্ণুতা: অ্যালডোলেজ বি ও ফসফেট ট্র্যাপিং'),
        description: l(
          'Deficiency of aldolase B blocks fructose-1-phosphate cleavage; sequesters intracellular inorganic phosphate (Pi), crippling mitochondrial ATP synthesis and inhibiting both glycogenolysis and gluconeogenesis, producing catastrophic hypoglycemia upon sucrose ingestion.',
          'অ্যালডোলেজ বি এনজাইমের ঘাটতি; কোষে মুক্ত ফসফেট আটকে ফেলে এটিপি তৈরি বন্ধ করে দেয়, ফলে চিনি খাওয়ার সাথে সাথে মারাত্মক হাইপোগ্লাইসেমিয়া ও লিভার ফেইলিউর দেখা দেয়।'
        ),
        details: l(
          'Infants thrive on breast milk (contains only lactose) but decompensate violently when fruits or table sugar (sucrose) are introduced at weaning; managed by lifelong fructose/sucrose exclusion.',
          'মায়ের দুধে কোনো সমস্যা হয় না, কিন্তু ফল বা চিনি খাওয়ালেই শিশু মারাত্মক অসুস্থ হয়ে পড়ে; চিকিৎসা হলো চিনি ও ফ্রুক্টোজ সম্পূর্ণ বর্জন।'
        ),
        sectionId: 'structure',
        color: '#ef4444',
        svgCoords: { cx: 160, cy: 75, r: 24 },
      },
      {
        id: 'node-gsd-glycogen-storage',
        label: l('3. Glycogen Storage Diseases: G6Pase (von Gierke) vs Muscle GSD', '৩. গ্লাইকোজেন সঞ্চয় রোগ: ভন গিয়ের্কে বনাম পেশির রোগ'),
        description: l(
          'Type I (von Gierke / G6Pase deficiency) produces severe fasting hypoglycemia, massive hepatomegaly, lactic acidosis, and hyperuricemia; Type II (Pompe / lysosomal acid maltase) causes hypertrophic cardiomyopathy; Type V (McArdle) causes exercise-induced cramps.',
          'টাইপ ১ (ভন গিয়ের্কে) রোগে উপবাসে মারাত্মক হাইপোগ্লাইসেমিয়া ও বড় যকৃৎ হয়; টাইপ ২ (পম্পে) রোগে হৃৎপিণ্ড বড় হয়; এবং টাইপ ৫ (ম্যাকআর্ডল) রোগে ব্যায়ামে পেশির তীব্র টান ধরে।'
        ),
        details: l(
          'In von Gierke disease, G6P shunts into glycolysis generating lactate and into the HMP shunt generating PRPP and uric acid (gout); treated with frequent raw cornstarch feeds.',
          'ভন গিয়ের্কে রোগে অতিরিক্ত গ্লুকোজ-৬-ফসফেট ল্যাকটেট ও ইউরিক অ্যাসিডে রূপান্তর হয়; কাঁচা ভুট্টার স্টার্চ খাইয়ে এর চিকিৎসা করা হয়।'
        ),
        sectionId: 'structure',
        color: '#10b981',
        svgCoords: { cx: 250, cy: 75, r: 24 },
      },
      {
        id: 'node-pku-phenylalanine',
        label: l('4. Phenylketonuria (PKU): PAH Lesion & Neurotoxic Metabolites', '৪. ফিনাইলকিটোনুরিয়া (পিকেইউ): ফিনাইলঅ্যালানিন জমা ও স্নায়ুর ক্ষতি'),
        description: l(
          'Deficiency of phenylalanine hydroxylase (PAH) or BH4 cofactor blocks conversion of Phe to Tyr; excess phenylalanine saturates LAT1 at the blood-brain barrier, starving brain of other large neutral amino acids and impairing myelin and neurotransmitter synthesis.',
          'PAH বা BH4 ঘাটতিতে ফিনাইলঅ্যালানিন জমতে থাকে যা রক্ত-মস্তিষ্ক বাধায় অন্য অ্যামিনো অ্যাসিড ঢুকতে দেয় না এবং মস্তিষ্কের মায়েলিন ও স্নায়ু উপাদান নষ্ট করে।'
        ),
        details: l(
          'Untreated patients develop profound intellectual disability, microcephaly, fair skin/hair (lack of tyrosine for melanin), and musty odor; controlled by strict low-phenylalanine medical formula.',
          'চিকিৎসা না পেলে শিশু মারাত্মক মানসিক প্রতিবন্ধী হয়, ত্বক ফ্যাকাশে হয় এবং শরীরে গন্ধ বের হয়; ফিনাইলঅ্যালানিনমুক্ত বিশেষ খাবার দিয়ে এটি সম্পূর্ণ প্রতিরোধযোগ্য।'
        ),
        sectionId: 'mechanism',
        color: '#8b5cf6',
        svgCoords: { cx: 340, cy: 75, r: 24 },
      },
      {
        id: 'node-msud-bckdh',
        label: l('5. Maple Syrup Urine Disease: BCKDH Block & Leucine Neurotoxicity', '৫. ম্যাপল সিরাপ ইউরিন ডিজিজ: লিউসিনের বিষক্রিয়া ও মিষ্টি গন্ধ'),
        description: l(
          'Deficiency of the mitochondrial branched-chain alpha-ketoacid dehydrogenase (BCKDH) complex blocks catabolism of leucine, isoleucine, and valine; toxic alpha-ketoacids and leucine accumulate in blood and urine with sweet burnt sugar odor.',
          'মাইটোকন্ড্রিয়াল BCKDH কমপ্লেক্সের অভাবে লিউসিন, আইসোলিউসিন ও ভ্যালিন ভাঙতে পারে না; রক্তে বিষাক্ত কিটোঅ্যাসিড জমে প্রস্রাবে পোড়া মিষ্টি গুড়ের গন্ধ বের হয়।'
        ),
        details: l(
          'Accumulation of leucine causes acute cerebral edema, encephalopathy, and death in the first two weeks of life unless placed on specialized BCAA-restricted medical formulas.',
          'অতিরিক্ত লিউসিন মস্তিষ্কে মারাত্মক পানি জমিয়ে ব্রেন এডিমা ঘটায়; লিউসিনমুক্ত বিশেষ ফর্মুলা খাদ্য খাইয়ে এর চিকিৎসা করা হয়।'
        ),
        sectionId: 'mechanism',
        color: '#ec4899',
        svgCoords: { cx: 70, cy: 165, r: 24 },
      },
      {
        id: 'node-alkaptonuria-homocystinuria',
        label: l('6. Alkaptonuria & Homocystinuria: Ochronosis & Vascular Thrombosis', '৬. অ্যালক্যাপটোনুরিয়া ও হোমোসিস্টিনুরিয়া: কালো প্রস্রাব ও রক্তনালির ব্লক'),
        description: l(
          'Alkaptonuria (homogentisate 1,2-dioxygenase deficiency) accumulates homogentisic acid, binding collagen to produce ochronotic black pigmentation and arthritis; Homocystinuria (CBS deficiency) produces tall Marfanoid habitus, lens ectopia, and fatal thromboembolism.',
          'অ্যালক্যাপটোনুরিয়ায় হোমোজেন্টিসিক অ্যাসিড জমে কালো প্রস্রাব ও বাত হয়; আর হোমোসিস্টিনুরিয়ায় রোগী লম্বা হয়, চোখের লেন্স স্থানচ্যুত হয় এবং রক্তনালিতে মারাত্মক ক্লট বাঁধে।'
        ),
        details: l(
          'Homocystinuria is responsive in ~50% of cases to high-dose pyridoxine (vitamin B6, the CBS cofactor); alkaptonuria is treated with dietary restriction and nitisinone.',
          'হোমোসিস্টিনুরিয়ার প্রায় অর্ধেক রোগী উচ্চমাত্রার ভিটামিন বি৬ প্রয়োগে সুস্থ থাকে; আর অ্যালক্যাপটোনুরিয়ায় বিশেষ ওষুধ প্রয়োগ করা হয়।'
        ),
        sectionId: 'mechanism',
        color: '#3b82f6',
        svgCoords: { cx: 160, cy: 165, r: 24 },
      },
      {
        id: 'node-mcad-hypoketotic',
        label: l('7. MCAD Deficiency: Fatty Acid Block & Hypoketotic Hypoglycemia', '৭. MCAD ঘাটতি: হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া ও ফ্যাটি লিভার'),
        description: l(
          'Mutation in ACADM impairs medium-chain acyl-CoA dehydrogenase, blocking oxidation of 6- to 12-carbon fatty acids; halts hepatic acetyl-CoA generation, paralyzing gluconeogenesis and ketogenesis simultaneously during fasting.',
          'ACADM জিনের ত্রুটিতে মধ্যম-চেইনের ফ্যাটি অ্যাসিড জারিত হয় না; ফলে উপবাসকালে গ্লুকোজ ও কিটোন কোনোটিই তৈরি হতে পারে না।'
        ),
        details: l(
          'Presents during fasting with non-ketotic hypoglycemia, elevated blood octanoylcarnitine (C8), urinary dicarboxylic acids, and hepatic steatosis; fatal if not recognized, treated with frequent meals.',
          'উপবাসে রক্তে গ্লুকোজ কমে গেলেও কোনো কিটোন থাকে না এবং রক্তে C8 অ্যাসাইলকার্নিটিন বাড়ে; বারবার কার্বোহাইড্রেট খাইয়ে রোগটি নিয়ন্ত্রণ করা হয়।'
        ),
        sectionId: 'integration',
        color: '#06b6d4',
        svgCoords: { cx: 250, cy: 165, r: 24 },
      },
      {
        id: 'node-lysosomal-storage',
        label: l('8. Lysosomal Storage Diseases: Gaucher, Tay-Sachs & Niemann-Pick', '৮. লাইসোসোমাল সঞ্চয় রোগ: গশার, টে-স্যাক্স ও নিম্যান-পিক'),
        description: l(
          'Monogenic defects in lysosomal acid hydrolases accumulate undigested macromolecules: Gaucher (glucocerebrosidase / beta-glucosidase deficiency, crumpled tissue-paper macrophages, bone crises), Tay-Sachs (hexosaminidase A, GM2 gangliosides, macular cherry-red spot, neurodegeneration).',
          'লাইসোসোমের এনজাইম ঘাটতিতে জটিল চর্বি জমা হয়: গশার রোগে ম্যাক্রোফেজ ফুলে হাড়ে ব্যথা হয় এবং টে-স্যাক্স রোগে চোখের রেটিনায় চেরি-লাল দাগ পড়ে ও স্নায়ু ধ্বংস হয়।'
        ),
        details: l(
          'Tay-Sachs disease lacks hepatosplenomegaly (distinguishing it from Niemann-Pick disease); Gaucher type 1 is effectively managed with enzyme replacement therapy (imiglucerase).',
          'টে-স্যাক্স রোগে যকৃৎ বা প্লীহা বাড়ে না (যা একে নিম্যান-পিক থেকে আলাদা করে); গশার রোগের আধুনিক চিকিৎসায় সরাসরি এনজাইম ইনজেকশন দেওয়া হয়।'
        ),
        sectionId: 'integration',
        color: '#eab308',
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
          heading: l('What Are Inborn Errors of Metabolism and How Do Genetic Blocks Operate?', 'জন্মগত বিপাকীয় রোগ কী এবং জিনগত ব্লকের মাধ্যমে কীভাবে ক্ষতি হয়?'),
          paragraphs: [
            l(
              'In 1908, British physician Sir Archibald Garrod introduced the revolutionary concept of "inborn errors of metabolism" while studying alkaptonuria, recognizing that inherited diseases can result from a specific genetic defect in a single intracellular chemical reaction. In a healthy human cell, thousands of metabolic pathways operate as seamless assembly lines where substrate A is converted into intermediate B, then intermediate C, and finally essential product D by dedicated enzyme catalysts. When an inherited loss-of-function mutation inactivates one specific enzyme in the chain, a metabolic road block is created.',
              '১৯০৮ সালে ব্রিটিশ চিকিৎসক স্যার আর্চিবল্ড গ্যারড অ্যালক্যাপটোনুরিয়া রোগ গবেষণার সময় "জন্মগত বিপাকীয় রোগ"-এর যুগান্তকারী ধারণা প্রবর্তন করেন এবং ব্যাখ্যা করেন যে একক রাসায়নিক বিক্রিয়ার এনজাইম তৈরিকারী জিনের ত্রুটি থেকে এসব রোগের জন্ম। স্বাভাবিক কোষে বিপাকীয় বিক্রিয়াগুলো একটি কারখানার অ্যাসেম্বলি লাইনের মতো ধারাবাহিকভাবে চলে। কিন্তু জিনের মিউটেশনের কারণে নির্দিষ্ট এনজাইমটি তৈরি না হলে সেই বিপাকীয় পথে একটি স্থায়ী বাধা বা ব্লক সৃষ্টি হয়।'
            ),
            l(
              'A monogenic metabolic block damages human health through two fundamental mechanisms that operate simultaneously: upstream toxic substrate accumulation and downstream product starvation. Before the enzymatic block, the starting substrate and its upstream precursors pile up in cellular compartments, spilling into blood and urine where they are shunted into toxic alternative bypass metabolites. Meanwhile, beyond the enzymatic block, the cell is starved of the essential downstream end-product and reducing equivalents needed for energy synthesis or structural maintenance.',
              'একক জিনীয় বিপাকীয় ব্লক মূলত দুটি বিপরীতমুখী উপায়ে মানবদেহের মারাত্মক ক্ষতি করে: ব্লকের পূর্বে বিষাক্ত উপাদান জমে যাওয়া এবং ব্লকের পরে প্রয়োজনীয় উপাদানের অভাব। এনজাইমের আগের উপাদানগুলো কোষে অস্বাভাবিকভাবে জমে রক্ত ও প্রস্রাবে বিষাক্ত বর্জ্য হিসেবে ছড়িয়ে পড়ে। একই সাথে ব্লকের পরবর্তী প্রয়োজনীয় যৌগ বা শক্তি তৈরি হতে না পেরে কোষ চরম পুষ্টি ও শক্তিহীনতায় ভোগে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Carbohydrate Storage and Trapping Diseases', 'শর্করা সঞ্চয় ও ট্র্যাপিংজনিত জন্মগত রোগসমূহ'),
          paragraphs: [
            l(
              'Inherited disorders of carbohydrate metabolism demonstrate how simple dietary sugars can become lethal cellular poisons when processing enzymes are absent. Classical galactosemia is an autosomal recessive deficiency of galactose-1-phosphate uridylyltransferase (GALT), preventing infants from utilizing galactose derived from breast milk or bovine milk lactose. When milk is ingested, galactose-1-phosphate accumulates in hepatocytes and renal tubule cells, causing acute liver failure and jaundice, while excess free galactose is converted in the ocular lens into galactitol, precipitating bilateral cataracts.',
              'শর্করা বিপাকের বংশগত রোগগুলো দেখায় কীভাবে খাদ্য থেকে আসা সাধারণ শর্করাও এনজাইম না থাকলে কোষে মারাত্মক বিষে পরিণত হতে পারে। ধ্রুপদী গ্যালাক্টোসেমিয়া হলো GALT এনজাইমের ঘাটতি, যার ফলে দুধের ল্যাকটোজ থেকে আসা গ্যালাক্টোজ কোষে ভাঙতে পারে না। এর ফলে যকৃতে গ্যালাক্টোজ-১-ফসফেট জমে জন্ডিস ও লিভার নষ্ট হয় এবং চোখের লেন্সে অতিরিক্ত গ্যালাকটিটল জমে উভয় চোখে ছানি পড়ে যায়।'
            ),
            l(
              'Similarly, hereditary fructose intolerance results from a deficiency of aldolase B, which cleaves fructose-1-phosphate in the liver. When affected infants are weaned from milk and ingest table sugar (sucrose) or fruit juices, fructose-1-phosphate accumulates and traps all free inorganic phosphate inside hepatocytes. Deprived of phosphate, liver cells cannot generate ATP, and the enzymes of glycogen breakdown and gluconeogenesis are completely paralyzed, triggering profound life-threatening hypoglycemia and acute hepatic necrosis.',
              'একইভাবে বংশগত ফ্রুক্টোজ অসহিষ্ণুতা ঘটে যকৃতের অ্যালডোলেজ বি এনজাইমের অভাবে। শিশু বুকের দুধ ছেড়ে সাধারণ চিনি বা ফলের রস খেলেই যকৃতে ফ্রুক্টোজ-১-ফসফেট জমে মুক্ত ফসফেট নিঃশেষ করে দেয়। ফসফেট না থাকায় এটিপি তৈরি বন্ধ হয়ে যায় এবং গ্লাইকোজেন ভাঙন ও নতুন গ্লুকোজ তৈরি স্তব্ধ হয়ে শিশুর রক্তে গ্লুকোজ শূন্যে নেমে মারাত্মক লিভার ফেইলিউর দেখা দেয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Amino Acidopathies and Toxic Neurotransmitters', 'অ্যামিনো অ্যাসিড ভাঙনের ত্রুটি ও স্নায়ুবিষাক্ততা'),
          paragraphs: [
            l(
              'Amino acid disorders occur when cellular pathways responsible for degrading dietary proteins are genetically disrupted. The most celebrated example is phenylketonuria (PKU), caused by an autosomal recessive deficiency in hepatic phenylalanine hydroxylase (PAH). Phenylalanine from dietary protein cannot be converted into tyrosine, accumulating to massive levels in blood and crossing the blood-brain barrier via the LAT1 transporter. In the brain, excessive phenylalanine blocks the transport of other essential neutral amino acids and halts neurotransmitter synthesis, resulting in irreversible microcephaly and severe intellectual disability unless managed with a strict low-phenylalanine diet.',
              'খাদ্যের প্রোটিন থেকে আসা অ্যামিনো অ্যাসিড ভাঙার এনজাইম নষ্ট হলে অ্যামিনো অ্যাসিডের বংশগত রোগ দেখা দেয়। এর প্রধান উদাহরণ ফিনাইলকিটোনুরিয়া (পিকেইউ), যা যকৃতের PAH এনজাইমের অভাবে ঘটে। ফিনাইলঅ্যালানিন ভেঙে টাইরোসিন হতে না পেরে রক্তে অস্বাভাবিক বেড়ে যায় এবং মস্তিষ্কে ঢুকে অন্যান্য প্রয়োজনীয় অ্যামিনো অ্যাসিড ঢুকতে বাধা দেয়। এর ফলে মস্তিষ্কের স্বাভাবিক বৃদ্ধি থেমে যায় এবং শিশু মারাত্মক মানসিক প্রতিবন্ধী হয়ে পড়ে; তবে জন্মের পরপরই বিশেষ খাদ্য দিলে শিশু সম্পূর্ণ সুস্থ থাকে।'
            ),
            l(
              'In maple syrup urine disease (MSUD), a genetic defect in the branched-chain alpha-ketoacid dehydrogenase complex prevents the degradation of leucine, isoleucine, and valine. Within days of birth, toxic branched-chain ketoacids accumulate in the central nervous system, producing acute brain edema, lethargy, alternating muscle tone, and a distinctive sweet burnt sugar odor in the infant\'s urine, requiring emergent dietary protein restriction to prevent neonatal death.',
              'ম্যাপল সিরাপ ইউরিন ডিজিজে (MSUD) একটি বিশেষ এনজাইমের অভাবে লিউসিন, আইসোলিউসিন ও ভ্যালিন ভাঙতে পারে না। জন্মের কয়েক দিনের মধ্যেই মস্তিষ্কে বিষাক্ত কিটোঅ্যাসিড জমে মস্তিষ্ক ফুলে যায়, শিশু নিস্তেজ হয়ে পড়ে এবং প্রস্রাবে পোড়া মিষ্টি গুড়ের গন্ধ বের হয়; সময়মতো বিশেষ খাবার না দিলে নবজাতকের মৃত্যু ঘটে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Fasting Catabolism and Sudden Infant Death: Fatty Acid Oxidation Defects', 'উপবাসকালীন সংকট ও আকস্মিক শিশু মৃত্যু: ফ্যাটি অ্যাসিড জারণের বাধা'),
          paragraphs: [
            l(
              'Fatty acid oxidation defects highlight the catastrophic vulnerability of infants during periods of fasting or intercurrent viral illness. Under normal circumstances, when glycogen stores are depleted after an overnight fast, the liver switches to mitochondrial beta-oxidation of fatty acids to generate acetyl-CoA, driving gluconeogenesis and ketogenesis to feed the brain. Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency is the most prevalent inborn error of fatty acid oxidation, blocking the oxidation of medium-chain fats.',
              'ফ্যাটি অ্যাসিড জারণের ত্রুটিগুলো দেখায় কীভাবে উপবাস বা সামান্য জ্বরের সময় শিশুরা হঠাৎ মারাত্মক ঝুঁকির মুখে পড়ে। স্বাভাবিক অবস্থায় উপবাসকালে যকৃৎ চর্বি পুড়িয়ে নতুন গ্লুকোজ বানায় এবং মস্তিষ্কের বিকল্প খাবার হিসেবে কিটোন বডি তৈরি করে। কিন্তু MCAD ঘাটতি থাকলে যকৃৎ মাঝারি চেইনের ফ্যাটি অ্যাসিড পোড়াতে পারে না।'
            ),
            l(
              'When an infant with unrecognized MCAD deficiency experiences prolonged fasting or gastroenteritis, hepatic glycogen is exhausted, but the liver cannot oxidize fatty acids to replace it. As a result, blood glucose plummets, but critically, the liver is completely unable to synthesize protective ketone bodies. Deprived of both glucose and ketones, the infant\'s brain suffers sudden neuroglycopenic collapse, presenting with hypoketotic hypoglycemia, seizures, and sudden infant death syndrome (SIDS).',
              'MCAD ঘাটতির শিশু অভুক্ত থাকলে বা ডায়রিয়া হলে গ্লাইকোজেন শেষ হয়ে যাওয়ার পর শরীর চর্বিও পোড়াতে পারে না। ফলে রক্তে গ্লুকোজ মারাত্মক কমে যায় এবং সবচেয়ে বিপদের বিষয় হলো কোনো কিটোন বডিও তৈরি হয় না। মস্তিষ্ক একই সাথে গ্লুকোজ ও কিটোন দুটো থেকেই বঞ্চিত হয়ে হঠাৎ নিস্তেজ হয়ে পড়ে এবং আকস্মিক শিশু মৃত্যু (SIDS) ঘটে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Newborn Screening and Early Recognition of Metabolic Crises', 'নবজাতক স্ক্রিনিং ও বিপাকীয় সংকটের প্রাথমিক শনাক্তকরণ'),
          paragraphs: [
            l(
              'Because many inborn errors of metabolism present acutely with rapid clinical deterioration in the first week of life, universal newborn screening (NBS) represents one of the greatest triumphs of modern preventive medicine. Originally developed by Robert Guthrie in the 1960s using bacterial inhibition assays for PKU on dried blood spots, newborn screening has evolved into multiplexed tandem mass spectrometry (LC-MS/MS). From a single heel prick of blood collected on filter paper at 24 to 48 hours of life, mass spectrometry quantifies dozens of amino acids and acylcarnitines simultaneously in seconds.',
              'যেহেতু বেশিরভাগ জন্মগত বিপাকীয় রোগ জন্মের প্রথম সপ্তাহেই তীব্র আকার ধারণ করে, তাই সর্বজনীন নবজাতক স্ক্রিনিং আধুনিক প্রতিরোধমূলক চিকিৎসার অন্যতম সেরা আবিষ্কার। ফিল্টার পেপারে নবজাতকের গোড়ালি থেকে নেওয়া এক ফোঁটা শুকনো রক্তের ওপর ট্যান্ডেম মাস স্পেকট্রোমেট্রি প্রযুক্তি ব্যবহার করে মাত্র কয়েক সেকেন্ডে数十টি অ্যামিনো অ্যাসিড ও অ্যাসাইলকার্নিটিন নিখুঁতভাবে মেপে ফেলা হয়।'
            ),
            l(
              'This technology enables the presymptomatic identification of dozens of treatable metabolic conditions before brain damage occurs: infants with PKU receive phenylalanine-free formula, those with MCAD deficiency receive counseling to avoid fasting, and those with galactosemia are immediately switched to soy formula. When an unscreened infant presents with acute lethargy, vomiting, and tachypnea, clinicians must immediately obtain blood glucose, blood gas, ammonia, and urinary ketones to stabilize the patient before irreversible damage ensues.',
              'এই আধুনিক পরীক্ষার ফলে কোনো উপসর্গ বা মস্তিষ্কের ক্ষতি হওয়ার আগেই শিশুকে শনাক্ত করে চিকিৎসা শুরু করা যায়: যেমন পিকেইউ-তে ফিনাইলঅ্যালানিনমুক্ত দুধ, MCAD-তে অভুক্ত না থাকার পরামর্শ এবং গ্যালাক্টোসেমিয়ায় সয়া ফর্মুলা দেওয়া হয়। কোনো নবজাতক অসুস্থ হলে অবিলম্বে রক্তে গ্লুকোজ, গ্যাস, অ্যামোনিয়া ও কিটোন মেপে সঠিক ডায়াগনোসিস নিশ্চিত করতে হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Foundation Takeaways: The Lifesaving Logic of Inborn Errors', 'প্রাথমিক সারসংক্ষেপ: জন্মগত বিপাকীয় রোগের জীবনরক্ষাকারী মূলনীতি'),
          paragraphs: [
            l(
              'Inborn errors of metabolism are monogenic disruptions of cellular enzymes that cause disease through the dual mechanisms of upstream toxic substrate accumulation and downstream product starvation. Carbohydrate disorders trap phosphate and destroy liver ATP, amino acidopathies flood the brain with neurotoxic metabolites, and fatty acid oxidation defects cause fatal hypoketotic hypoglycemia during fasting.',
              'জন্মগত বিপাকীয় রোগগুলো একক জিনের এনজাইম নষ্ট হওয়ার কারণে ঘটে, যা এনজাইমের আগের উপাদানকে বিষে পরিণত করে এবং পরের শক্তি উৎপাদন বন্ধ করে ক্ষতি করে। শর্করা রোগ কোষে ফসফেট আটকে যকৃৎ ধ্বংস করে, অ্যামিনো অ্যাসিডের রোগ মস্তিষ্কে বিষক্রিয়া ঘটায় এবং ফ্যাটি অ্যাসিডের রোগ উপবাসে চরম বিপদ ডেকে আনে।'
            ),
            l(
              'Modern tandem mass spectrometry newborn screening identifies metabolic defects presymptomatically from a single dried blood spot, permitting targeted dietary substrate exclusion and cofactor replacement that allows affected children to live full, healthy, intellectually normal lives.',
              'নবজাতক স্ক্রিনিং মাত্র এক ফোঁটা রক্ত পরীক্ষা করে লক্ষণ প্রকাশের আগেই এসব রোগ শনাক্ত করে, যার ফলে সময়মতো সঠিক পথ্য ও চিকিৎসা দিয়ে আক্রান্ত শিশুদের সম্পূর্ণ স্বাভাবিক ও বুদ্ধিমান মানুষ হিসেবে গড়ে তোলা সম্ভব হয়।'
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
          heading: l('Biochemical Taxonomy of Inborn Errors: Small Molecules vs Complex Macromolecules', 'জন্মগত ত্রুটির শ্রেণিবিভাগ: ক্ষুদ্র অণুর রোগ বনাম জটিল ম্যাক্রোমলিকিউলের রোগ'),
          paragraphs: [
            l(
              'Inborn errors of metabolism are classified into three major pathophysiological categories based on the chemical nature of the affected metabolites: disorders of intoxication, disorders of energy metabolism, and disorders of complex molecules. Disorders of intoxication involve catabolic blocks in small-molecule intermediary metabolism (amino acidopathies, organic acidemias, urea cycle defects, galactosemia), resulting in acute or intermittent clinical intoxication from circulating substrates and toxic byproducts after a symptom-free interval following birth. Disorders of energy metabolism comprise cytoplasmic and mitochondrial blocks (glycogen storage diseases, gluconeogenic defects, fatty acid beta-oxidation disorders, mitochondrial respiratory chain lesions) presenting with systemic hypoglycemia, lactic acidosis, and myopathy.',
              'জন্মগত বিপাকীয় রোগগুলোকে তাদের রাসায়নিক বৈশিষ্ট্যের ওপর ভিত্তি করে তিনটি প্রধান ভাগে ভাগ করা হয়: ইনটক্সিকেশন বা বিষক্রিয়ার রোগ, শক্তি বিপাকের রোগ এবং জটিল অণুর সঞ্চয় রোগ। ইনটক্সিকেশন রোগগুলোতে ক্ষুদ্র অণু ভাঙার এনজাইম নষ্ট থাকে (যেমন অ্যামিনো অ্যাসিডের রোগ, অর্গানিক অ্যাসিডেমিয়া ও ইউরিয়া চক্রের ত্রুটি), যা জন্মের কয়েক দিন পর বিষাক্ত উপাদান রক্তে জমিয়ে তীব্র সংকট সৃষ্টি করে। শক্তি বিপাকের রোগগুলোতে গ্লাইকোজেন, ফ্যাটি অ্যাসিড বা মাইটোকন্ড্রিয়াল শ্বসন নষ্ট থাকে, যার ফলে চরম হাইপোগ্লাইসেমিয়া ও ল্যাকটিক অ্যাসিডোসিস হয়।'
            ),
            l(
              'The third major category comprises disorders of complex molecules, which involve organelle-specific defects in the synthesis or lysosomal/peroxisomal degradation of macromolecules (lysosomal storage diseases, peroxisomal biogenesis disorders, congenital disorders of glycosylation). These disorders do not depend on acute food intake, produce chronic progressive multi-organ infiltration, dysmorphic features, skeletal dysplasia (dysostosis multiplex), and organomegaly, and are diagnosed by tissue histology, specific enzyme assays, and molecular gene sequencing.',
              'তৃতীয় ভাগটি হলো জটিল অণুর রোগ, যা লাইসোসোম বা পারঅক্সিজোম অঙ্গাণুর জটিল ম্যাক্রোমলিকিউল তৈরির বা ধ্বংসের ত্রুটির কারণে ঘটে (যেমন লাইসোসোমাল সঞ্চয় রোগ ও গ্লাইকোসিলেশনের ত্রুটি)। এগুলো খাবারের ওপর নির্ভরশীল নয়, বরং ধীরে ধীরে বিভিন্ন অঙ্গে অপ্রয়োজনীয় উপাদান জমিয়ে যকৃৎ ও প্লীহা বড় করে, হাড়ের গঠন বিকৃত করে এবং স্নায়ু ধ্বংস করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Carbohydrate Enzymopathies: GALT, Aldolase B, and Glycogen Storage Subtypes', 'শর্করা বিপাকের এনজাইম রোগ: GALT, অ্যালডোলেজ বি এবং গ্লাইকোজেন সঞ্চয় রোগের প্রকারভেদ'),
          paragraphs: [
            l(
              'Classical galactosemia results from biallelic pathogenic mutations in the GALT gene encoding galactose-1-phosphate uridylyltransferase (EC 2.7.7.12), the second step of the Leloir pathway. GALT catalyzes the reversible transfer of a UMP moiety: Galactose-1-phosphate + UDP-glucose <-> UDP-galactose + Glucose-1-phosphate. In GALT deficiency, galactose-1-phosphate accumulates to millimolar concentrations, allosterically inhibiting phosphoglucomutase and glycogen phosphorylase while depleting intracellular inorganic phosphate. Free galactose enters alternative pathways, being reduced by aldose reductase to galactitol (an impermeant polyol that causes osmotic lens swelling and cataracts) and oxidized to galactonate.',
              'ধ্রুপদী গ্যালাক্টোসেমিয়া ঘটে GALT জিনের মিউটেশনের কারণে যা লেলোয়ার পথের দ্বিতীয় এনজাইম। এই এনজাইম গ্যালাক্টোজ-১-ফসফেটকে গ্লুকোজ-১-ফসফেটে রূপান্তর করে। GALT নষ্ট হলে কোষে প্রচুর গ্যালাক্টোজ-১-ফসফেট জমে মুক্ত ফসফেট নিঃশেষ করে এবং গ্লাইকোজেন ফসফোরাইলেজ বন্ধ করে দেয়। অতিরিক্ত গ্যালাক্টোজ অলডোজ রিডাক্টেজ দিয়ে গ্যালাকটিটলে পরিণত হয় যা চোখের লেন্সের অসমোটিক চাপ বাড়িয়ে ছানি সৃষ্টি করে।'
            ),
            l(
              'Glycogen storage diseases (GSDs) illustrate tissue-specific compartmentalization. GSD Type Ia (von Gierke disease) is caused by mutations in G6PC encoding glucose-6-phosphatase-alpha in the ER membrane of hepatocytes and renal cortex, preventing the export of free glucose from both glycogenolysis and gluconeogenesis. Trapped G6P stimulates glycogen synthase and enters glycolysis, massively generating pyruvate, which is reduced to lactate (severe lactic acidosis) and converted to acetyl-CoA, driving de novo lipogenesis (hypertriglyceridemia, "doll-like" facies). Excess G6P also enters the pentose phosphate pathway, accelerating purine synthesis and degradation to precipitate early-onset hyperuricemic gout.',
              'গ্লাইকোজেন সঞ্চয় রোগ (GSD) টিস্যুভিত্তিক কাজের বিভাজন স্পষ্ট করে। টাইপ ১এ (ভন গিয়ের্কে রোগ) ঘটে যকৃৎ ও বৃক্কের এন্ডোপ্লাজমিক রেটিকুলামের গ্লুকোজ-৬-ফসফেটেজ এনজাইমের ত্রুটির কারণে, ফলে গ্লাইকোজেন বা নতুন তৈরি গ্লুকোজ কোনোভাবেই রক্তে বের হতে পারে না। কোষে জমে থাকা G6P অতিরিক্ত গ্লাইকোলাইসিস চালিয়ে প্রচুর ল্যাকটেট (মারাত্মক অ্যাসিডোসিস) এবং চর্বি (হাইপারট্রাইগ্লিসারিডেমিয়া) তৈরি করে। পাশাপাশি পেন্টোজ ফসফেট পথ দিয়ে প্রচুর ইউরিক অ্যাসিড বানিয়ে গেঁটেবাত সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Amino Acidopathies: Enzymatic Blocks in PAH, BCKDH, and CBS', 'অ্যামিনো অ্যাসিড ভাঙনের ত্রুটি: PAH, BCKDH এবং CBS এনজাইম ব্লক'),
          paragraphs: [
            l(
              'Phenylketonuria (PKU) is caused in >98% of cases by mutations in the PAH gene encoding phenylalanine-4-hydroxylase, an iron-dependent mixed-function oxidase that converts L-phenylalanine to L-tyrosine using molecular oxygen and tetrahydrobiopterin (BH4). When PAH is inactive, phenylalanine accumulates in blood (>1,200 micromol/L vs normal < 120 micromol/L) and undergoes transamination by aminotransferases into phenylpyruvate, which is reduced to phenyllactate and decarboxylated to phenylacetate (excreted in urine as phenylacetylglutamine, producing the mousy odor). High blood phenylalanine competitively saturates the large neutral amino acid transporter (LAT1 / SLC7A5) at the blood-brain barrier, depriving the brain of tyrosine, tryptophan, and leucine, and inhibiting neuronal pyruvate kinase and 3-hydroxy-3-methylglutaryl-CoA reductase.',
              'ফিনাইলকিটোনুরিয়া (পিকেইউ) ঘটে PAH জিনের মিউটেশনের কারণে যা অক্সিজেন ও BH4 কোফ্যাক্টরের সাহায্যে ফিনাইলঅ্যালানিনকে টাইরোসিনে পরিণত করে। PAH নষ্ট হলে রক্তে ফিনাইলঅ্যালানিন ১২০০ মাইক্রোমোল/লিটারের বেশি হয়ে যায় এবং ট্রান্সঅ্যামিনেশনের মাধ্যমে ফিনাইলপাইরুভেট ও ফিনাইলঅ্যাসিটেটে পরিণত হয় যা প্রস্রাবে নির্গত হয়ে ইঁদুরের মতো গন্ধ তৈরি করে। অতিরিক্ত ফিনাইলঅ্যালানিন রক্ত-মস্তিষ্ক বাধার LAT1 পরিবাহককে এককভাবে দখল করে অন্যান্য নিরপেক্ষ অ্যামিনো অ্যাসিডের মস্তিষ্কে ঢোকা বন্ধ করে দেয়, ফলে মস্তিষ্কের বৃদ্ধি চিরতরে থমকে যায়।'
            ),
            l(
              'Maple syrup urine disease (MSUD) results from biallelic mutations in the BCKDHA, BCKDHB, or DBT genes encoding the E1-alpha, E1-beta, and E2 subunits of the mitochondrial branched-chain alpha-ketoacid dehydrogenase complex. This multienzyme complex catalyzes the oxidative decarboxylation of the transamination products of leucine (alpha-ketoisocaproate, KIC), isoleucine (alpha-keto-beta-methylvalerate, KMV), and valine (alpha-ketoisovalerate, KIV). Elevated KIC directly inhibits the neuronal respiratory chain and pyruvate dehydrogenase, while excess leucine competes with brain amino acid transport and stimulates brain glutamine synthesis, driving lethal cerebral edema.',
              'ম্যাপল সিরাপ ইউরিন ডিজিজ (MSUD) ঘটে মাইটোকন্ড্রিয়াল BCKDH কমপ্লেক্সের জিনগত ত্রুটির কারণে। এই এনজাইম লিউসিন, আইসোলিউসিন ও ভ্যালিনের কিটোঅ্যাসিডের অক্সিডেটিভ ডিকার্বক্সিলেশন সম্পন্ন করে। এনজাইম নষ্ট হলে রক্তে লিউসিনের কিটোঅ্যাসিড (KIC) জমে যা সরাসরি মস্তিষ্কের শ্বসন শৃঙ্খল ধ্বংস করে এবং গ্লুটামিন বাড়িয়ে মারাত্মক ব্রেন এডিমা ও খিঁচুনি তৈরি করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Fatty Acid Oxidation Blocks and Lysosomal Hydrolase Defects', 'ফ্যাটি অ্যাসিড জারণের বাধা ও লাইসোসোমাল হাইড্রোলেজ এনজাইমের ত্রুটি'),
          paragraphs: [
            l(
              'Mitochondrial fatty acid beta-oxidation involves a series of four recurring chain-shortening enzymatic steps. Medium-chain acyl-CoA dehydrogenase (MCAD, encoded by ACADM, with the common c.985A>G p.Lys329Glu missense mutation in 80% of European alleles) executes the first dehydrogenation of C6–C12 acyl-CoA esters, transferring electrons to electron transfer flavoprotein (ETF). In MCAD deficiency, fasting stimulates adipose lipolysis, flooding the liver with fatty acids. Because medium-chain acyl-CoAs cannot be oxidized, hepatic acetyl-CoA levels collapse, depriving pyruvate carboxylase of its obligate allosteric activator and paralyzing gluconeogenesis.',
              'মাইটোকন্ড্রিয়াল ফ্যাটি অ্যাসিড বিটা-জারণ চারটি ধারাবাহিক রাসায়নিক ধাপে ঘটে। MCAD এনজাইম ৬ থেকে ১২ কার্বনবিশিষ্ট অ্যাসাইল-কোএ এস্টার থেকে ইলেকট্রন অপসারণ করে। MCAD নষ্ট হলে উপবাসের সময় চর্বি ভেঙে প্রচুর ফ্যাটি অ্যাসিড যকৃতে আসে কিন্তু মাঝারি চেইনগুলো আর ভাঙতে পারে না। ফলে যকৃতে অ্যাসিটাইল-কোএ তৈরি সম্পূর্ণ বন্ধ হয়ে যায়, যার অভাবে পাইরুভেট কার্বক্সিলেজ সক্রিয় হতে পারে না এবং গ্লুকোনিওজেনেসিস থমকে গিয়ে চরম হাইপোগ্লাইসেমিয়া দেখা দেয়।'
            ),
            l(
              'Accumulated medium-chain acyl-CoAs are shunted into alternative pathways: mitochondrial acyl-carnitine transferase generates octanoylcarnitine (C8-carnitine), which spills into plasma, while microsomes execute omega-oxidation via CYP4A enzymes to produce dicarboxylic acids (adipic C6, suberic C8, sebacic C10 acids) excreted in urine. In lysosomal storage diseases, by contrast, genetic lesions impair acidic hydrolases inside lysosomes: Gaucher disease (GBA1 mutations, beta-glucocerebrosidase deficiency) accumulates glucosylceramide within macrophages ("Gaucher cells" with wrinkled tissue-paper cytoplasm), causing hepatosplenomegaly, thrombocytopenia, and painful avascular bone osteonecrosis.',
              'জমে থাকা মাঝারি চেইনের ফ্যাটি অ্যাসিড বিকল্প পথে গিয়ে রক্তে অকটানয়েলকার্নিটিন (C8) তৈরি করে এবং মাইক্রোজোমে ওমেগা-জারণের মাধ্যমে প্রস্রাবে ডাইকার্বক্সিলিক অ্যাসিড হিসেবে নির্গত হয়। অন্যদিকে লাইসোসোমাল রোগে অম্লীয় এনজাইমের অভাবে জটিল উপাদান জমতে থাকে: যেমন গশার রোগে গ্লুকোসেরিব্রোসাইডেজ ঘাটতির কারণে ম্যাক্রোফেজ কোষে চর্বি জমে "গশার কোষ" তৈরি হয়, যা প্লীহা ও যকৃৎ মারাত্মক বড় করে এবং হাড়ের তীব্র ব্যথা ও ক্ষয় ঘটায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Emergency Diagnostic Workups: Laboratory Branching Logic in Acute Metabolic Crises', 'জরুরি ডায়াগনস্টিক অনুসন্ধান: বিপাকীয় সংকটে ল্যাবরেটরি সিদ্ধান্তের অ্যালগরিদম'),
          paragraphs: [
            l(
              'When a newborn or infant presents with acute neurological depression, vomiting, and dehydration, an immediate four-parameter metabolic panel is required: blood glucose, arterial blood gas (with anion gap), plasma ammonia, and urinary ketones. If severe hypoglycemia is present: assess ketones. Hypoglycemia WITH ketones points to Glycogen Storage Disease Type I, gluconeogenic enzyme defects, or cortisol/GH deficiency. Hypoglycemia WITHOUT ketones (hypoketotic hypoglycemia) firmly identifies a Fatty Acid Oxidation Defect (such as MCAD deficiency) or hyperinsulinism.',
              'কোনো নবজাতক হঠাৎ নিস্তেজ হয়ে বমি করতে শুরু করলে অবিলম্বে চারটি জরুরি ল্যাবরেটরি পরীক্ষা করতে হবে: রক্তে গ্লুকোজ, ব্লাড গ্যাস (অ্যানিয়ন গ্যাপসহ), প্লাজমা অ্যামোনিয়া এবং প্রস্রাবের কিটোন। হাইপোগ্লাইসেমিয়ার সাথে কিটোন পজিটিভ থাকলে তা গ্লাইকোজেন সঞ্চয় রোগ নির্দেশ করে। কিন্তু হাইপোগ্লাইসেমিয়া আছে কিন্তু কিটোন সম্পূর্ণ নেগেটিভ (হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া) হলে তা নিশ্চিতভাবে ফ্যাটি অ্যাসিড জারণের ত্রুটি (যেমন MCAD ঘাটতি) বা অতিরিক্ত ইনসুলিনের উপস্থিতি প্রমাণ করে।'
            ),
            l(
              'If severe hyperammonemia (> 200–500 micromol/L) is detected: assess the anion gap and blood pH. Hyperammonemia WITH severe metabolic acidosis and elevated anion gap indicates an Organic Acidemia (methylmalonic acidemia, propionic acidemia, isovaleric acidemia) where organic acid metabolites inhibit carbamoyl phosphate synthetase I (CPS-I). Hyperammonemia WITHOUT metabolic acidosis (normal anion gap, respiratory alkalosis from hyperventilation) confirms a primary Urea Cycle Disorder, where urinary orotic acid distinguishes OTC deficiency (elevated orotate) from CPS-I or NAGS deficiency (zero orotate).',
              'যদি রক্তে মারাত্মক অ্যামোনিয়া (> ২০০-৫০০ মাইক্রোমোল/লিটার) পাওয়া যায়: তখন অ্যানিয়ন গ্যাপ দেখতে হবে। হাইপারঅ্যামোনিয়ার সাথে অ্যাসিডোসিস থাকলে তা অর্গানিক অ্যাসিডেমিয়া প্রমাণ করে; কারণ জমে থাকা জৈব অ্যাসিড ইউরিয়া চক্রকে বন্ধ করে দেয়। আর অ্যাসিডোসিস ছাড়া কেবল অ্যামোনিয়া বেশি থাকলে তা সরাসরি ইউরিয়া চক্রের রোগ প্রমাণ করে, যেখানে প্রস্রাবের অরোতিক অ্যাসিড OTC ঘাটতি নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Takeaways: High-Yield Principles of Inborn Errors of Metabolism', 'শিক্ষায়তনিক সারসংক্ষেপ: জন্মগত বিপাকীয় রোগের উচ্চ-গুরুত্বপূর্ণ মূলনীতি'),
          paragraphs: [
            l(
              'Inborn errors of metabolism operate via monogenic lesions that trap upstream toxic substrates and starve downstream energetic pathways. Phosphate trapping in GALT and Aldolase B deprives cells of ATP and causes acute liver necrosis, glycogen storage diseases produce organomegaly and profound hypoglycemia, and amino acid blocks in PAH and BCKDH flood the brain with neurotoxic metabolites.',
              'জন্মগত বিপাকীয় রোগগুলো একক জিনের মিউটেশনে ঘটে যা ব্লকের পূর্বে বিষাক্ত উপাদান জমায় এবং পরে শক্তিহীনতা তৈরি করে। গ্যালাক্টোসেমিয়া ও এইচএফআই-তে ফসফেট আটকে এটিপি ধ্বংস করে যকৃৎ নষ্ট হয়, গ্লাইকোজেন রোগে অঙ্গ বড় হয়ে হাইপোগ্লাইসেমিয়া হয় এবং পিকেইউ ও এমএসইউডিতে মস্তিষ্কে বিষক্রিয়া ঘটে।'
            ),
            l(
              'Emergency management of metabolic crises relies on rapid biochemical branching logic using glucose, anion gap acidosis, ammonia, and ketones. Tandem mass spectrometry newborn screening identifies acylcarnitine and amino acid profiles presymptomatically, allowing life-saving dietary substrate exclusion and cofactor replenishment.',
              'জরুরি সংকট ব্যবস্থাপনায় গ্লুকোজ, অ্যানিয়ন গ্যাপ, অ্যামোনিয়া ও কিটোনের সঠিক অ্যালগরিদম অপরিহার্য। ট্যান্ডেম মাস স্পেকট্রোমেট্রি নবজাতক স্ক্রিনিং কোনো উপসর্গ প্রকাশের আগেই নিখুঁত প্রোফাইল দিয়ে সময়মতো চিকিৎসা শুরু করতে সাহায্য করে।'
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
          heading: l('Molecular Genetics, Tandem Mass Spectrometry Collision Physics, and Biomarker Ratios', 'আণবিক জেনেটিক্স, ট্যান্ডেম মাস স্পেকট্রোমেট্রি ফ্র্যাগমেন্টেশন ও বায়োমার্কার অনুপাত'),
          paragraphs: [
            l(
              'Tandem mass spectrometry (MS/MS) on dried blood spots utilizes electrospray ionization (ESI) coupled to a triple-quadrupole mass spectrometer (Q1-q2-Q3) to quantify intact molecules without prior chromatographic separation. Under positive-ion ESI, butyl-esterified acylcarnitines undergo collision-induced dissociation (CID) in the collision cell (q2) with argon gas, fragmenting into a common characteristic diagnostic product ion at m/z 85 (representing the unesterified carnitine backbone [C4H7O2]+). Q3 is set to selectively filter precursor ions that yield this m/z 85 fragment, allowing simultaneous multiplexed quantification of dozens of distinct acylcarnitine species (C2 through C18) based on their unique parent ion mass-to-charge ratios.',
              'ট্যান্ডেম মাস স্পেকট্রোমেট্রিতে (MS/MS) ইলেকট্রোস্প্রে আয়োনাইজেশন (ESI) এবং ট্রিপল-কোয়াড্রুপোল প্রযুক্তি ব্যবহার করে রক্তের উপাদান সরাসরি পরিমাপ করা হয়। পজিটিভ আয়োনাইজেশনে অ্যাসাইলকার্নিটিন অণুগুলো সংঘর্ষ সেলে (q2) আর্গন গ্যাসের সাথে ধাক্কা খেয়ে একটি নির্দিষ্ট ডায়াগনস্টিক ফ্র্যাগমেন্ট তৈরি করে যার m/z মান ৮৫ (যা কার্নিটিন কাঠামোর প্রতিনিধিত্ব করে)। Q3 ডিটেক্টর কেবল এই ৮৫ মানের আয়ন সৃষ্টিকারী মূল অণুগুলোকে ফিল্টার করে, যার ফলে কয়েক সেকেন্ডে C2 থেকে C18 পর্যন্ত সমস্ত অ্যাসাইলকার্নিটিন নিখুঁতভাবে মাপা সম্ভব হয়।'
            ),
            l(
              'Diagnostic accuracy in MS/MS newborn screening relies not on absolute metabolite concentrations alone, but on mathematical ratios that eliminate pre-analytical confounders such as hematocrit variations, gestational age, and spot volume. In MCAD deficiency, the octanoylcarnitine to decanoylcarnitine ratio (C8/C10) provides exceptional diagnostic specificity (>1.5, often exceeding 5.0 in homozygous c.985A>G patients), completely distinguishing true MCAD mutations from non-specific elevations seen in medium-chain triglyceride supplementation or carnitine transporter defects. Similarly, in propionic and methylmalonic acidemias, the propionylcarnitine to acetylcarnitine ratio (C3/C2) flags isolated mitochondrial propionyl-CoA accumulation before clinical decompensation.',
              'নবজাতক স্ক্রিনিংয়ের নিখুঁত নির্ভুলতা নিশ্চিত করতে একক পরিমাণের চেয়ে দুটি রাসায়নিকের অনুপাত ব্যবহার করা হয়, যা রক্তের ঘনত্ব বা নমুনার পরিমাণের তারতম্য দূর করে। MCAD ঘাটতিতে C8/C10 অনুপাত ১.৫ এর বেশি হওয়া নিশ্চিতভাবে রোগটির জেনেটিক মিউটেশন প্রমাণ করে। একইভাবে প্রোপিওনিক ও মিথাইলম্যালোনিক অ্যাসিডেমিয়ায় C3/C2 অনুপাত দিয়ে লক্ষণ প্রকাশের আগেই মাইটোকন্ড্রিয়াল সংকট শনাক্ত করা যায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Targeted Therapeutics: Pharmacological Chaperones, Substrate Reduction, and mRNA/AAV Gene Replacement', 'লক্ষ্যভিত্তিক আধুনিক চিকিৎসা: ফার্মাকোলজিক্যাল চ্যাপেরন, সাবস্ট্রেট কমানো এবং এমআরএনএ/জিন থেরাপি'),
          paragraphs: [
            l(
              'The therapeutic armamentarium for inborn errors of metabolism has advanced far beyond simple dietary restriction into molecular and gene-targeted modalities. Pharmacological chaperones are small, orally bioavailable molecules that bind specifically to misfolded, unstable mutant enzymes, stabilizing their tertiary conformation and facilitating export from the endoplasmic reticulum to their target organelles. In Fabry disease (alpha-galactosidase A deficiency), the active-site chaperone migalastat restores lysosomal trafficking for amenable missense mutations. Similarly, sapropterin dihydrochloride (synthetic BH4) acts as a pharmacological chaperone and cofactor for responsive PAH variants in PKU, allowing patients to relax dietary restrictions.',
              'জন্মগত বিপাকীয় রোগের চিকিৎসায় সাধারণ পথ্য পরিবর্তনের বাইরে গিয়ে অত্যাধুনিক জিন ও মলিকিউলার থেরাপি আবিষ্কৃত হয়েছে। ফার্মাকোলজিক্যাল চ্যাপেরন হলো বিশেষ ক্ষুদ্র অণু যা ত্রুটিপূর্ণ এনজাইমের সাথে যুক্ত হয়ে তাকে স্বাভাবিক ত্রিমাত্রিক গঠনে স্থিতিশীল করে এবং কোষে তার সঠিক স্থানে পৌঁছাতে সাহায্য করে। ফ্যাব্রি রোগে মাইগালাস্ট্যাট এবং পিকেইউ-তে স্যাপ্রোপটেরিন (কৃত্রিম BH4) চ্যাপেরন হিসেবে কাজ করে এনজাইমের সক্রিয়তা বৃদ্ধি করে।'
            ),
            l(
              'Substrate reduction therapy (SRT) utilizes small-molecule inhibitors to decrease the endogenous synthesis of toxic substrates upstream of an enzymatic block: in Gaucher and Niemann-Pick type C diseases, miglustat and eliglustat inhibit UDP-glucose ceramide glucosyltransferase, reducing glycosphingolipid synthesis to match residual lysosomal clearance capacity. Frontier therapies employ adeno-associated virus (AAV) vectors or lipid nanoparticle-encapsulated mRNA (LNP-mRNA) to achieve hepatic gene delivery. Clinical trials utilizing AAV vectors for OTC deficiency and LNP-mRNA encoding propionyl-CoA carboxylase demonstrate sustained restoration of endogenous enzyme activity, representing the definitive curative frontier of biochemical genetics.',
              'সাবস্ট্রেট রিডাকশন থেরাপিতে (SRT) বিশেষ ওষুধ দিয়ে ব্লকের আগের বিষাক্ত উপাদান তৈরির গতি কমিয়ে দেওয়া হয়: যেমন গশার রোগে এলিগ্লুস্ট্যাট ওষুধ দিয়ে গ্লাইকোস্পিংগোলিপিড তৈরির হার কমিয়ে দেওয়া হয় যাতে তা কোষে না জমে। সর্বাধুনিক জিন থেরাপিতে অ্যাডেনো-অ্যাসোসিয়েটেড ভাইরাস (AAV) বা লিপিড ন্যানোপার্টিকেল এমআরএনএ (LNP-mRNA) দিয়ে সরাসরি কোষে সুস্থ জিন প্রবেশ করিয়ে এনজাইম তৈরি স্বাভাবিক করা হচ্ছে, যা জন্মগত বিপাকীয় রোগের স্থায়ী নিরাময় নিশ্চিত করে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A comprehensive diagram illustrating human inborn errors of metabolism: mapping classical galactosemia (GALT deficiency) with galactitol cataracts, hereditary fructose intolerance (aldolase B deficiency) with inorganic phosphate sequestration, glycogen storage disease type I (G6Pase deficiency) with massive hepatomegaly and lactic acidosis, phenylketonuria (PAH deficiency) with hyperphenylalaninemia, maple syrup urine disease (BCKDH deficiency) with branched-chain ketoacid toxicity, medium-chain acyl-CoA dehydrogenase (MCAD) deficiency with hypoketotic hypoglycemia, and lysosomal storage disorders with macromolecular accumulation.',
      'মানবদেহের জন্মগত বিপাকীয় রোগের পূর্ণাঙ্গ মানচিত্র: গ্যালাক্টোসেমিয়া (GALT ঘাটতি) ও চোখের ছানি, বংশগত ফ্রুক্টোজ অসহিষ্ণুতা (অ্যালডোলেজ বি ঘাটতি) ও ফসফেট ট্র্যাপিং, ভন গিয়ের্কে রোগ (G6Pase ঘাটতি) ও লিভার বৃদ্ধি, পিকেইউ (PAH ঘাটতি) ও স্নায়ুর ক্ষতি, এমএসইউডি (BCKDH ঘাটতি) ও লিউসিন বিষক্রিয়া, MCAD ঘাটতি ও হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া এবং লাইসোসোমাল সঞ্চয় রোগের আণবিক প্রক্রিয়া।'
    ),
    steps: [
      l('GALT and Aldolase B lesions cause hexose trapping, phosphate sequestration, and hepatic necrosis.', 'GALT ও অ্যালডোলেজ বি ঘাটতি শর্করা আটকে ফসফেট নিঃশেষ করে যকৃৎ ধ্বংস করে।'),
      l('G6Pase deficiency (von Gierke) impairs glucose release, driving lactic acidosis and hepatomegaly.', 'G6Pase ঘাটতি গ্লুকোজ বের হওয়া আটকে ল্যাকটিক অ্যাসিডোসিস ও লিভার বৃদ্ধি ঘটায়।'),
      l('PAH (PKU) and BCKDH (MSUD) blocks flood the central nervous system with neurotoxic amino acids.', 'PAH ও BCKDH এনজাইম নষ্ট হলে মস্তিষ্কে বিষাক্ত অ্যামিনো অ্যাসিড জমে মারাত্মক ক্ষতি হয়।'),
      l('MCAD defects halt fasting beta-oxidation, precipitating sudden hypoketotic hypoglycemia and SIDS.', 'MCAD ঘাটতি উপবাসকালে চর্বি ভাঙন বন্ধ করে আকস্মিক হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া সৃষ্টি করে।'),
    ],
  },
  assessment: {
    question: l(
      'A 10-day-old infant is brought to the pediatric emergency department with vomiting, poor feeding, progressive lethargy, and jaundice that began 4 days after birth following initiation of breast milk. Physical examination reveals an enlarged, firm liver (hepatomegaly), scleral icterus, and bilateral subtle clouding of the ocular lenses ("oil-drop cataracts"). Urinalysis is positive for reducing substances via Benedict reagent, but completely negative on a glucose oxidase dipstick. Which enzyme deficiency and accumulated toxic intermediate are primarily responsible for this clinical presentation?',
      'একটি ১০ দিন বয়সী নবজাতককে বমি, দুধ না খাওয়া, অস্বাভাবিক ঘুম ও জন্ডিস নিয়ে হাসপাতালে আনা হলো; যা জন্মের ৪ দিন পর মায়ের দুধ খাওয়ার পর শুরু হয়েছে। পরীক্ষায় বড় শক্ত যকৃৎ, চোখে জন্ডিস এবং উভয় চোখের লেন্সে সূক্ষ্ম ঘোলা ভাব বা ছানি ("অয়েল-ড্রপ ক্যাটারাক্ট") পাওয়া গেল। প্রস্রাব পরীক্ষায় বেনেডিক্ট টেস্টে রিডিউসিং সুগার পজিটিভ হলেও গ্লুকোজ অক্সিডেজ টেস্ট সম্পূর্ণ নেগেটিভ এল। কোন এনজাইমের ঘাটতি এবং কোন বিষাক্ত উপাদান জমা হওয়া এই মারাত্মক রোগের জন্য দায়ী?'
    ),
    options: [
      l(
        'Galactose-1-phosphate uridylyltransferase (GALT) deficiency; accumulated toxic intermediates are Galactose-1-phosphate (in hepatocytes) and Galactitol (in the ocular lens).',
        'গ্যালাক্টোজ-১-ফসফেট ইউরিডিলিলট্রান্সফারেজ (GALT) ঘাটতি; সঞ্চিত বিষাক্ত উপাদান হলো যকৃতে গ্যালাক্টোজ-১-ফসফেট এবং চোখের লেন্সে গ্যালাকটিটল।'
      ),
      l(
        'Aldolase B deficiency; accumulated toxic intermediate is Fructose-1-phosphate in hepatocytes and kidneys.',
        'অ্যালডোলেজ বি ঘাটতি; সঞ্চিত বিষাক্ত উপাদান হলো যকৃৎ ও কিডনিতে ফ্রুক্টোজ-১-ফসফেট।'
      ),
      l(
        'Glucose-6-phosphatase deficiency; accumulated intermediate is Glucose-6-phosphate with severe secondary lactic acidemia.',
        'গ্লুকোজ-৬-ফসফেটেজ ঘাটতি; সঞ্চিত উপাদান হলো গ্লুকোজ-৬-ফসফেট এবং সাথে মারাত্মক ল্যাকটিক অ্যাসিডোসিস।'
      ),
      l(
        'Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency; accumulated toxic intermediates are medium-chain dicarboxylic acids.',
        'MCAD ঘাটতি; সঞ্চিত বিষাক্ত উপাদান হলো মিডিয়াম-চেইন ডাইকার্বক্সিলিক অ্যাসিড।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'This clinical presentation is classic for classical galactosemia, caused by an autosomal recessive deficiency of galactose-1-phosphate uridylyltransferase (GALT). Breast milk contains lactose, which is digested into glucose and galactose. Galactokinase phosphorylates galactose to galactose-1-phosphate. In the absence of GALT, galactose-1-phosphate accumulates within cells, particularly hepatocytes, renal proximal tubules, and neurons, depleting intracellular inorganic phosphate (Pi) and causing acute liver dysfunction, jaundice, hepatomegaly, and bleeding diathesis. Meanwhile, free galactose spills into the bloodstream and enters the ocular lens, where aldose reductase reduces it to galactitol. Galactitol is an impermeable polyol that cannot cross cell membranes; it exerts a potent osmotic effect, drawing water into the lens fibers and causing denaturation of crystallin proteins to produce bilateral cataracts. The urinalysis finding of positive reducing substances (Benedict test positive for non-glucose sugars like galactose) combined with a negative glucose-specific dipstick confirms the presence of urinary galactose, cementing the diagnosis.',
      'এটি ধ্রুপদী গ্যালাক্টোসেমিয়ার সুস্পষ্ট লক্ষণ, যা GALT এনজাইমের জন্মগত অভাবে ঘটে। মায়ের দুধে প্রচুর ল্যাকটোজ থাকে যা ভেঙে গ্যালাক্টোজ তৈরি হয়। গ্যালাক্টোকাইনেজ একে গ্যালাক্টোজ-১-ফসফেটে রূপান্তরিত করে। কিন্তু GALT না থাকায় এই গ্যালাক্টোজ-১-ফসফেট আর ভাঙতে না পেরে যকৃতে জমা হয়ে লিভার নষ্ট ও জন্ডিস করে। একই সাথে রক্তে গ্যালাক্টোজ বেড়ে চোখের লেন্সে ঢোকে এবং অলডোজ রিডাক্টেজ এনজাইম একে গ্যালাকটিটলে পরিণত করে। গ্যালাকটিটল লেন্স থেকে বের হতে পারে না বলে প্রচুর পানি টেনে নিয়ে লেন্সের প্রোটিন নষ্ট করে উভয় চোখে ছানি তৈরি করে। প্রস্রাবে রিডিউসিং সুগার পজিটিভ কিন্তু সাধারণ গ্লুকোজ নেগেটিভ হওয়া প্রমাণ করে যে প্রস্রাবে গ্যালাক্টোজ বের হচ্ছে, যা রোগটি নিশ্চিত করে।'
    ),
  },
}
