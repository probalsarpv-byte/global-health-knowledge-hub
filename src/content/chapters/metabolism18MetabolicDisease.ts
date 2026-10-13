import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const metabolicDiseaseRefs = [
  {
    id: 'williams-endocrinology-14e-ch31',
    authors: 'Shlomo Melmed, Richard J. Auchus, Allison B. Goldfine, Ronald J. Koenig, Clifford J. Rosen',
    title: 'Williams Textbook of Endocrinology, 14th edition, Chapter 31: Type 2 Diabetes Mellitus and Metabolic Syndrome',
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/williams-textbook-of-endocrinology/melmed/978-0-323-55596-8',
  },
  {
    id: 'harrison-internal-medicine-21e-ch396',
    authors: 'Joseph Loscalzo, Anthony S. Fauci, Dennis L. Kasper, Stephen L. Hauser, Dan L. Longo, J. Larry Jameson',
    title: "Harrison's Principles of Internal Medicine, 21st edition, Chapter 396: The Metabolic Syndrome and Dyslipidemia",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3095',
  },
  {
    id: 'lehninger-biochem-8e-ch23',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 23: Hormonal Regulation and Integration of Mammalian Metabolism',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'marks-medbiochem-6e-ch25',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 25: Diabetes Mellitus, Metabolic Syndrome, and Exercise",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

const metabolicDisease3DData: Organ3DExplorerContent = {
  title: l('3D Multi-Organ Landscape of Systemic Metabolic Disease', '৩ডি বহু-অঙ্গীয় সমন্বিত বিপাকীয় ব্যাধির মানচিত্র'),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and explore coordinate space to trace how insulin resistance, lipotoxicity, and chronic inflammation propagate across the pancreas, liver, skeletal muscle, visceral adipose, and kidneys.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে ইনসুলিন রেজিস্ট্যান্স, লিপিডের বিষক্রিয়া এবং দীর্ঘস্থায়ী প্রদাহ অগ্ন্যাশয়, যকৃৎ, কঙ্কালপেশি, চর্বিকলা এবং বৃক্কে ছড়িয়ে পড়ে।'
  ),
  description: l(
    'Acquired metabolic disease is a multi-organ system failure: visceral adipose tissue unleashes excess free fatty acids and TNF-alpha, skeletal muscle develops insulin-resistant GLUT4 trafficking failure, the liver accelerates uninhibited gluconeogenesis and accumulates steatotic triacylglycerol, pancreatic beta-cells undergo secretory exhaustion, and the kidneys experience diabetic hyperfiltration.',
    'অর্জিত বিপাকীয় ব্যাধি হলো সামগ্রিক বহু-অঙ্গীয় ব্যর্থতা: পেটের চর্বি থেকে ক্ষতিকর ফ্যাটি অ্যাসিড ও প্রদাহজনক সাইটোকাইন বের হয়, কঙ্কালপেশিতে গ্লুকোজ প্রবেশ বন্ধ হয়ে যায়, যকৃতে অতিরিক্ত গ্লুকোজ তৈরি হয় ও চর্বি জমে, অগ্ন্যাশয়ের বিটা-কোষ পরিশ্রান্ত হয়ে ধ্বংস হয় এবং বৃক্কে অতিরিক্ত চাপের কারণে কিডনি নষ্ট হয়।'
  ),
  organs: [
    {
      id: 'organ-pancreas-disease',
      name: l('Pancreas (Beta-Cell Glucolipotoxicity & Amyloid Deposition)', 'অগ্ন্যাশয় (বিটা-কোষের বিষক্রিয়া ও অ্যামাইলয়েড সঞ্চয়)'),
      latinName: 'Pancreas',
      system: l('Endocrine & Metabolic System', 'অন্তঃক্ষরা ও বিপাকীয় তন্ত্র'),
      cavity: l('Retroperitoneum (Epigastrium)', 'রেট্রোপেরিটোনিয়াম (এপিগ্যাস্ট্রিয়াম)'),
      position3D: { x: 0, y: 215, z: -4 },
      color: '#eab308',
      highlightColor: '#fde047',
      shapeType: 'pancreas',
      description: l(
        'Suffers progressive failure: autoimmune T-cell mediated destruction of beta-cells produces absolute insulin deficiency in Type 1 Diabetes; chronic compensatory hyperinsulinemia leading to ER stress, oxidative apoptosis, and islet amyloid polypeptide (IAPP / amylin) deposition in Type 2 Diabetes.',
        'মারাত্মক ক্ষয়ের শিকার হয়: টাইপ ১ ডায়াবেটিসে অটোইমিউন টি-কোষ বিটা-কোষ ধ্বংস করে ইনসুলিন শূন্যতা তৈরি করে; আর টাইপ ২ ডায়াবেটিসে অতিরিক্ত ইনসুলিন তৈরির চাপে কোষ পরিশ্রান্ত হয়ে যায় এবং অ্যামাইলয়েড প্রোটিন জমে কোষ ধ্বংস হয়।'
      ),
      spatialRelations: l(
        'Lies retroperitoneally behind the stomach; the head is embraced by the C-loop of the duodenum while the tail touches the splenic hilum; islets of Langerhans comprise only 1–2% of total pancreatic mass.',
        'পাকস্থলীর পেছনে অবস্থিত; এর মাথা ডুওডেনামের খাঁজে থাকে এবং লেজ প্লীহাকে স্পর্শ করে; ল্যাঙ্গারহ্যান্সের দ্বীপপুঞ্জ মোট অগ্ন্যাশয়ের মাত্র ১-২% অংশ জুড়ে থাকে।'
      ),
      physiology: l(
        'Beta-cells sense glucose via GLUT2/glucokinase; ATP closure of K_ATP channels triggers Ca2+ influx and biphasic insulin exocytosis; in T2D, first-phase insulin secretion is lost early in disease.',
        'বিটা-কোষ গ্লুকোকাইনেজের মাধ্যমে গ্লুকোজ শনাক্ত করে; এটিপি বৃদ্ধির ফলে ক্যালসিয়াম ঢুকে ইনসুলিন নিঃসৃত হয়; কিন্তু টাইপ ২ ডায়াবেটিসে প্রথম পর্যায়ের দ্রুত ইনসুলিন নিঃসরণ নষ্ট হয়ে যায়।'
      ),
      nutritionConnection: l(
        'Chronic saturated fat and refined carbohydrate overconsumption causes endoplasmic reticulum (ER) stress and mitochondrial reactive oxygen species (ROS) in islets, accelerating apoptosis.',
        'অতিরিক্ত চর্বি ও মিষ্টি খাবার বিটা-কোষের এন্ডোপ্লাজমিক রেটিকুলামে চাপ ও ক্ষতিকর ফ্রি র্যাডিক্যাল তৈরি করে কোষের অকাল মৃত্যু ঘটায়।'
      ),
      clinicalSignificance: l(
        'Beta-cell functional mass declines by approximately 50% by the time clinical Type 2 Diabetes is officially diagnosed, progressing continuously without intensive lifestyle intervention.',
        'টাইপ ২ ডায়াবেটিস আনুষ্ঠানিকভাবে ধরা পড়ার সময়ই অগ্ন্যাশয়ের বিটা-কোষের প্রায় ৫০% কার্যক্ষমতা নষ্ট হয়ে যায়, যা খাদ্য নিয়ন্ত্রণ ছাড়া দিন দিন কমতে থাকে।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-liver-disease',
      name: l('Liver (Uninhibited Gluconeogenesis, MASLD & Atherogenic Dyslipidemia)', 'যকৃৎ (অনিয়ন্ত্রিত গ্লুকোজ তৈরি, ফ্যাটি লিভার ও রক্তনালির ব্লক)'),
      latinName: 'Hepar',
      system: l('Hepatobiliary & Metabolic System', 'যকৃৎ-পিত্ত ও বিপাকীয় তন্ত্র'),
      cavity: l('Right Upper Quadrant', 'ডান ঊর্ধ্ব উদর'),
      position3D: { x: 12, y: 200, z: 0 },
      color: '#10b981',
      highlightColor: '#6ee7b7',
      shapeType: 'liver',
      description: l(
        'Selective hepatic insulin resistance: insulin fails to suppress gluconeogenesis (FOXO1 remains nuclear, driving continuous hyperglycemia), yet insulin continues to stimulate de novo lipogenesis via SREBP-1c, causing steatosis (MASLD) and overproduction of triglyceride-rich VLDL particles.',
        'সুনির্দিষ্ট ইনসুলিন রেজিস্ট্যান্স: ইনসুলিন যকৃতের গ্লুকোজ তৈরি থামাতে ব্যর্থ হয় (ফলে রক্তে গ্লুকোজ বেড়েই চলে), কিন্তু ইনসুলিন ঠিকই চর্বি তৈরি বাড়িয়ে দেয়, ফলে ফ্যাটি লিভার (MASLD) এবং রক্তে ট্রাইগ্লিসারাইডসমৃদ্ধ ক্ষতিকর VLDL বৃদ্ধি পায়।'
      ),
      spatialRelations: l(
        'Receives a direct, concentrated flood of free fatty acids (FFAs) and pro-inflammatory adipokines directly from expanding visceral adipose tissue via the portal vein.',
        'পেটের অতিরিক্ত চর্বি থেকে সরাসরি পোর্টাল শিরার মাধ্যমে বিষাক্ত ফ্যাটি অ্যাসিড ও ক্ষতিকর প্রদাহজনক সাইটোকাইনের তীব্র স্রোত গ্রহণ করে।'
      ),
      physiology: l(
        'Accumulation of intrahepatic diacylglycerols (DAG) activates novel protein kinase C epsilon (PKC-epsilon), which phosphorylates insulin receptor Thr1160, directly paralyzing insulin signaling.',
        'যকৃতে ডাইঅ্যাসাইলগ্লিসারল (DAG) চর্বি জমে PKC-এপসাইলন এনজাইমকে সক্রিয় করে, যা ইনসুলিন রিসেপ্টরকে ব্লক করে ইনসুলিনের সংকেত গ্রহণ সম্পূর্ণ বন্ধ করে দেয়।'
      ),
      nutritionConnection: l(
        'High-fructose corn syrup bypasses phosphofructokinase regulation via hepatic fructokinase, delivering unregulated triose phosphates directly into de novo lipogenesis and uric acid production.',
        'অতিরিক্ত ফ্রুক্টোজ মিষ্টি যকৃতে সরাসরি চর্বি ও ইউরিক অ্যাসিডে রূপান্তরিত হয়, যা খুব দ্রুত লিভারে চর্বি জমায় এবং ফ্যাটি লিভার ডিজিজ সৃষ্টি করে।'
      ),
      clinicalSignificance: l(
        'Metabolic dysfunction-associated steatotic liver disease (MASLD) can progress to inflammatory steatohepatitis (MASH), cirrhosis, portal hypertension, and hepatocellular carcinoma.',
        'বিপাকীয় ফ্যাটি লিভার ডিজিজ (MASLD) ধীরে ধীরে প্রদাহজনক হেপাটাইটিস (MASH), সিরোসিস এবং যকৃতের ক্যান্সারে রূপান্তরিত হতে পারে।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-muscle-disease',
      name: l('Skeletal Muscle (The Epicenter of Peripheral Insulin Resistance)', 'কঙ্কালপেশি (পেরিফেরাল ইনসুলিন রেজিস্ট্যান্সের মূল কেন্দ্র)'),
      latinName: 'Musculus skeletalis',
      system: l('Musculoskeletal System', 'পেশিতন্ত্র'),
      cavity: l('Somatic Framework', 'দেহকাঠামো'),
      position3D: { x: 0, y: 130, z: -8 },
      color: '#dc2626',
      highlightColor: '#f87171',
      shapeType: 'skeleton',
      description: l(
        'Responsible for 75–80% of postprandial insulin-mediated glucose disposal; intramyocellular lipid accumulation (diacylglycerol and ceramides) activates PKC-theta, impairing IRS-1 tyrosine phosphorylation and preventing GLUT4 vesicle exocytosis.',
        'খাবারের পর রক্তের ৭৫-৮০% গ্লুকোজ পেশিতে প্রবেশ করে; কিন্তু পেশির ভেতর চর্বি (DAG ও সেরামাইড) জমলে তা ইনসুলিন রিসেপ্টরকে অবশ করে দেয় এবং গ্লুকোজ বাহক GLUT4 ঝিল্লিতে আসতে পারে না।'
      ),
      spatialRelations: l(
        'Largest tissue mass in non-obese individuals (~40% of body mass); expresses insulin-dependent GLUT4 transporters and energy-sensing AMP-activated protein kinase (AMPK).',
        'দেহের সবচেয়ে বড় টিস্যু (মোট ওজনের প্রায় ৪০%); এতে ইনসুলিন-নির্ভর GLUT4 এবং শারীরিক ব্যায়াম-নির্ভর AMPK সেন্সর থাকে।'
      ),
      physiology: l(
        'Muscle contraction stimulates GLUT4 translocation independently of insulin through AMPK and CaMKK-beta activation, explaining why exercise immediately lowers blood glucose even in severe insulin resistance.',
        'ব্যায়ামের সময় পেশি সংকোচন ইনসুলিনের সাহায্য ছাড়াই AMPK এনজাইম সক্রিয় করে সরাসরি GLUT4 দিয়ে রক্ত থেকে গ্লুকোজ টেনে নেয়, ফলে তীব্র ডায়াবেটিসেও ব্যায়াম রক্তে গ্লুকোজ কমায়।'
      ),
      nutritionConnection: l(
        'Sedentary lifestyle combined with positive caloric balance causes intramyocellular lipid droplet expansion, mitochondrial uncoupling, and progressive loss of metabolic flexibility.',
        'শারীরিক পরিশ্রমহীনতা এবং অতিরিক্ত খাবার গ্রহণ পেশির ভেতর চর্বির দলা জমায় এবং পেশির মাইটোকন্ড্রিয়ার শক্তি উৎপাদনের ক্ষমতা কমিয়ে দেয়।'
      ),
      clinicalSignificance: l(
        'Skeletal muscle insulin resistance is the primary, earliest initiating lesion in the pathogenesis of Type 2 Diabetes, preceding clinical beta-cell failure and hyperglycemia by decades.',
        'কঙ্কালপেশির ইনসুলিন রেজিস্ট্যান্স হলো টাইপ ২ ডায়াবেটিসের প্রথম এবং প্রধান কারণ, যা ডায়াবেটিস ধরা পড়ার ১০-২০ বছর আগে থেকেই নীরবে শুরু হয়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-adipose-disease',
      name: l('Visceral Adipose Tissue (Adipokine Dysregulation & Macrophage Crown Clusters)', 'পেটের চর্বিকলা (সাইটোকাইন প্রদাহ ও ম্যাক্রোফেজ ক্রাউন ক্লাস্টার)'),
      latinName: 'Textus adiposus visceralis',
      system: l('Adipose & Endocrine System', 'চর্বি ও অন্তঃক্ষরা তন্ত্র'),
      cavity: l('Intra-abdominal Omentum & Mesentery', 'উদরীয় ওমেন্টাম ও মেসেন্টারি'),
      position3D: { x: 0, y: 240, z: 8 },
      color: '#f97316',
      highlightColor: '#fdba74',
      shapeType: 'stomach',
      description: l(
        'Visceral adipocyte hypertrophy outstrips capillary oxygen supply, causing adipocyte hypoxia, necrosis, and infiltration by pro-inflammatory M1 macrophages forming "crown-like structures"; downregulates protective adiponectin and pours TNF-alpha, IL-6, and free fatty acids into portal blood.',
        'পেটের চর্বির কোষগুলো অতিরিক্ত ফুলে গিয়ে অক্সিজেনহীন হয়ে মারা যেতে থাকে, ফলে প্রদাহজনক এম১ ম্যাক্রোফেজ এসে ক্রাউন ক্লাস্টার তৈরি করে; উপকারী অ্যাডিপোনেক্টিন কমে যায় এবং বিষাক্ত টিএনএফ-আলফা, আইএল-৬ ও ফ্যাটি অ্যাসিড রক্তে ছড়িয়ে পড়ে।'
      ),
      spatialRelations: l(
        'Envelopes abdominal viscera and the greater omentum; possesses high beta-3 adrenergic receptor density, conferring intense responsiveness to lipolytic hormones compared to subcutaneous fat.',
        'উদরীয় অঙ্গসমূহ ও ওমেন্টামের চারপাশে থাকে; সাধারণ ত্বকের চর্বির চেয়ে এটি হরমোনের প্রভাবে অনেক দ্রুত ভেঙে রক্তে ক্ষতিকর চর্বি মুক্ত করে।'
      ),
      physiology: l(
        'Resistance to insulin-mediated lipolysis suppression allows adipose triglyceride lipase (ATGL) and hormone-sensitive lipase (HSL) to run continuously, driving chronic systemic hyperfattyacidemia.',
        'ইনসুলিনের বাধা অকেজো হওয়ায় লাইপোলাইসিস এনজাইমগুলো অবিরাম চলতে থাকে এবং রক্তে ক্ষতিকর মুক্ত ফ্যাটি অ্যাসিডের মাত্রা অনবরত বাড়িয়ে রাখে।'
      ),
      nutritionConnection: l(
        'Weight loss of just 5–10% of total body mass selectively reduces visceral adipose stores, resolves adipose macrophage inflammation, and substantially restores systemic insulin sensitivity.',
        'শরীরের ওজনের মাত্র ৫-১০% কমালেই পেটের ক্ষতিকর চর্বি ও প্রদাহ দ্রুত দূর হয় এবং শরীরের ইনসুলিন সংবেদনশীলতা নাটকীয়ভাবে ফিরে আসে।'
      ),
      clinicalSignificance: l(
        'Waist circumference is the single best clinical surrogate for visceral adiposity and is a mandatory core component in defining the Metabolic Syndrome (NCEP ATP III criteria).',
        'কোমরের পরিধি পেটের ক্ষতিকর চর্বির সবচেয়ে নির্ভরযোগ্য মাপকাঠি এবং এটি মেটাবলিক সিন্ড্রোম নির্ণয়ের সবচেয়ে প্রধান ক্লিনিক্যাল মানদণ্ড।'
      ),
      sectionId: 'integration',
    },
  ],
}

export const metabolism18MetabolicDiseaseLesson: LessonTopic = {
  id: 'topic.metabolism.metabolic-disease-clinical-integration',
  slug: 'metabolic-disease-clinical-integration',
  version: 1,
  updatedAt: '2026-10-13',
  title: l('18 · Metabolic Disease & Clinical Integration', '১৮ · বিপাকীয় ব্যাধি ও ক্লিনিক্যাল সমন্বয়'),
  summary: l(
    'Capstone molecular pathophysiology, multi-organ integration, and diagnostic frameworks of acquired metabolic diseases: Type 1 Diabetes Mellitus (autoimmune beta-cell destruction, absolute insulinopenia, DKA pathogenesis), Type 2 Diabetes Mellitus (lipid-induced IRS-1 serine phosphorylation, glucolipotoxicity, beta-cell secretory exhaustion, HHS differential), the Metabolic Syndrome and atherogenic dyslipidemia (small dense LDL, ApoB, CETP redistribution), Metabolic Dysfunction-Associated Steatohepatitis (MASLD/MASH multiple-hit cascade), cancer bioenergetics (the Warburg effect, PKM2, 2-hydroxyglutarate oncometabolites), critical illness and trauma hypercatabolism, and integrative clinical laboratory biomarker decision matrices.',
    'অর্জিত বিপাকীয় ব্যাধিসমূহের আণবিক প্যাথোফিজিওলজি, বহু-অঙ্গীয় সমন্বয় এবং ক্লিনিক্যাল ডায়াগনস্টিক কাঠামো: টাইপ ১ ডায়াবেটিস (অটোইমিউন বিটা-কোষ ধ্বংস ও ডিকেএ), টাইপ ২ ডায়াবেটিস (লিপিডজনিত IRS-1 ফসফরাইলেশন, বিটা-কোষ ক্লান্তি ও এইচএইচএস), মেটাবলিক সিন্ড্রোম ও রক্তনালির ব্লক সৃষ্টিকারী ডিসলিপিডেমিয়া (ছোট ঘন এলডিএল ও অ্যাপো-বি), বিপাকীয় ফ্যাটি লিভার ডিজিজ (MASLD/MASH), ক্যান্সারের জৈবশক্তিবিজ্ঞান (ওয়ারবার্গ প্রভাব, PKM2 ও অনকোমেটাবোলাইট), ট্রমা ও সেপসিসের তীব্র ক্ষয়িষ্ণুতা এবং ল্যাবরেটরি বায়োমার্কার সিদ্ধান্তের পূর্ণাঙ্গ সমন্বয়।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Contrast the molecular immunopathology, substrate flux, hormone profiles, and acute emergency presentations of Type 1 Diabetes (DKA) versus Type 2 Diabetes (HHS).',
      'টাইপ ১ ডায়াবেটিসের (ডিকেএ) আণবিক ইমিউনোপ্যাথলজি, জ্বালানি প্রবাহ ও হরমোন প্রোফাইলের সাথে টাইপ ২ ডায়াবেটিসের (এইচএইচএস) সুনির্দিষ্ট প্যাথোফিজিওলজিক্যাল পার্থক্য নিরূপণ করা।',
    ),
    l(
      'Map the multi-organ cascade linking visceral adiposity, macrophage crown structures, diacylglycerol-mediated PKC activation, selective hepatic insulin resistance, and atherogenic dyslipidemia in the Metabolic Syndrome.',
      'মেটাবলিক সিন্ড্রোমে পেটের চর্বি, ম্যাক্রোফেজ প্রদাহ, ডাইঅ্যাসাইলগ্লিসারল দ্বারা পিকেসি সক্রিয়করণ, যকৃতের ইনসুলিন রেজিস্ট্যান্স এবং রক্তনালির ব্লক সৃষ্টিকারী চর্বির বহু-অঙ্গীয় যোগসূত্র চিত্রিত করা।',
    ),
    l(
      'Synthesize advanced metabolic frontiers: explain the Warburg effect in oncology (aerobic glycolysis and PKM2), hypercatabolism in trauma/sepsis, and interpret arterial blood gas anion gap profiles in complex metabolic emergencies.',
      'উন্নত বিপাকীয় গবেষণার সমন্বয় সাধন: ক্যান্সারে ওয়ারবার্গ প্রভাব (বায়বীয় গ্লাইকোলাইসিস), ট্রমা ও সেপসিসের তীব্র ক্ষয়িষ্ণু বিপাক ব্যাখ্যা করা এবং জটিল বিপাকীয় জরুরি পরিস্থিতিতে আর্টারিয়াল ব্লাড গ্যাস ও অ্যানিয়ন গ্যাপ নির্ভুলভাবে বিশ্লেষণ করা।',
    ),
  ],
  prerequisiteIds: ['topic.metabolism.fed-fasted-starvation-states', 'topic.metabolism.endocrine-fuel-regulation', 'topic.metabolism.organ-metabolic-specialization'],
  relatedTopicIds: ['topic.metabolism.glycolysis-pyruvate', 'topic.metabolism.fatty-acid-oxidation-ketones', 'topic.metabolism.lipoproteins-lipid-flux'],
  references: metabolicDiseaseRefs,
  evidenceBySection: {
    introduction: ['williams-endocrinology-14e-ch31', 'lehninger-biochem-8e-ch23'],
    structure: ['williams-endocrinology-14e-ch31', 'marks-medbiochem-6e-ch25'],
    mechanism: ['harrison-internal-medicine-21e-ch396', 'marks-medbiochem-6e-ch25'],
    integration: ['lehninger-biochem-8e-ch23', 'harrison-internal-medicine-21e-ch396'],
    practice: ['williams-endocrinology-14e-ch31', 'harrison-internal-medicine-21e-ch396'],
    takeaways: ['lehninger-biochem-8e-ch23', 'williams-endocrinology-14e-ch31'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Collapse of Metabolic Homeostasis: Acquired Disease Architecture', '১. বিপাকীয় ভারসাম্যের পতন: অর্জিত ব্যাধির গঠন'), sectionId: 'introduction' },
      { id: 'sec-diabetes', label: l('2. Diabetes Mellitus: T1D Autoimmunity, T2D Lipotoxicity & DKA vs HHS', '২. ডায়াবেটিস মেলিটাস: টাইপ ১, টাইপ ২ এবং ডিকেএ বনাম এইচএইচএস'), sectionId: 'structure' },
      { id: 'sec-metsyn-masld', label: l('3. The Metabolic Syndrome, Atherogenic Dyslipidemia & MASLD/MASH', '৩. মেটাবলিক সিন্ড্রোম, ডিসলিপিডেমিয়া ও ফ্যাটি লিভার ডিজিজ'), sectionId: 'mechanism' },
      { id: 'sec-warburg-critical', label: l('4. Frontier Metabolism: The Warburg Effect & Critical Illness Hypermetabolism', '৪. সীমান্ত বিপাক: ক্যান্সারে ওয়ারবার্গ প্রভাব ও সেপসিসের তীব্র ক্ষয়'), sectionId: 'integration' },
      { id: 'sec-emergency-matrix', label: l('5. Clinical Decision Matrices, Anion Gap Calculations & HOMA-IR', '৫. ক্লিনিক্যাল সিদ্ধান্তের ম্যাট্রিক্স, অ্যানিয়ন গ্যাপ ও HOMA-IR'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Capstone Master Synthesis: The Unified Architecture of Metabolism', '৬. শীর্ষ সমন্বয় সারসংক্ষেপ: মানব বিপাকের অবিভাজ্য ঐক্য'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Diabetic Ketoacidosis (DKA)', 'ডায়াবেটিক কিটোঅ্যাসিডোসিস (ডিকেএ)'),
        definition: l(
          'Acute, life-threatening metabolic emergency occurring predominantly in Type 1 Diabetes characterized by the triad of hyperglycemia (> 250 mg/dL), high anion gap metabolic acidosis (pH < 7.30, HCO3- < 18 mEq/L), and hyperketonemia (beta-hydroxybutyrate > 3.0 mmol/L); driven by absolute insulin deficiency combined with marked counter-regulatory hormone excess.',
          'টাইপ ১ ডায়াবেটিসের একটি তীব্র ও প্রাণঘাতী সংকট যা তিনটি প্রধান বৈশিষ্ট্যের সমন্বয়ে গঠিত: উচ্চ গ্লুকোজ (> ২৫০ মিগ্রা/ডেসিলিটার), উচ্চ অ্যানিয়ন গ্যাপ মেটাবলিক অ্যাসিডোসিস (পিএইচ < ৭.৩০) এবং রক্তে প্রচুর কিটোন বডি; ইনসুলিনের সম্পূর্ণ শূন্যতা এবং কর্টিসল/গ্লুকাগনের তীব্র বৃদ্ধির ফলে এটি ঘটে।'
        ),
      },
      {
        term: l('Hyperosmolar Hyperglycemic State (HHS)', 'হাইপারঅসমোলার হাইপারগ্লাইসেমিক স্টেট (এইচএইচএস)'),
        definition: l(
          'Acute metabolic emergency occurring in Type 2 Diabetes marked by extreme hyperglycemia (> 600 mg/dL), profound serum hyperosmolality (> 320 mOsm/kg), and massive osmotic dehydration without significant ketoacidosis; residual endogenous beta-cell insulin secretion is sufficient to suppress hepatic ketogenesis but insufficient to stimulate peripheral glucose uptake.',
          'টাইপ ২ ডায়াবেটিসের চরম সংকট যাতে রক্তে গ্লুকোজ অত্যধিক বৃদ্ধি পায় (> ৬০০ মিগ্রা/ডেসিলিটার), রক্তের অসমোলারিটি মারাত্মক বাড়ে (> ৩২০ mOsm/কেজি) এবং তীব্র পানিশূন্যতা দেখা দেয়; অগ্ন্যাশয়ের সামান্য অবশিষ্ট ইনসুলিন কিটোন তৈরি বন্ধ রাখতে পারলেও গ্লুকোজ নিয়ন্ত্রণে ব্যর্থ হয়।'
        ),
      },
      {
        term: l('Metabolic Syndrome (MetSyn)', 'মেটাবলিক সিন্ড্রোম (মেটসিন)'),
        definition: l(
          'Cluster of interconnected metabolic risk factors defined by NCEP ATP III: visceral adiposity (elevated waist circumference), hypertriglyceridemia (>= 150 mg/dL), low HDL cholesterol (< 40 mg/dL in men, < 50 mg/dL in women), systemic hypertension (>= 130/85 mmHg), and impaired fasting glucose (>= 100 mg/dL); multiplies risk of atherosclerotic cardiovascular disease and type 2 diabetes.',
          'পরস্পর সংযুক্ত বিপাকীয় ঝুঁকির সমষ্টি: পেটে অতিরিক্ত চর্বি (কোমরের পরিধি বৃদ্ধি), উচ্চ ট্রাইগ্লিসারাইড (>= ১৫০ মিগ্রা/ডেসিলিটার), কম এইচডিএল চর্বি, উচ্চ রক্তচাপ (>= ১৩০/৮৫) এবং খালি পেটে বেশি গ্লুকোজ; এটি হৃদরোগ ও ডায়াবেটিসের ঝুঁকি বহু গুণ বাড়িয়ে দেয়।'
        ),
      },
      {
        term: l('The Warburg Effect (Aerobic Glycolysis)', 'ওয়ারবার্গ প্রভাব (বায়বীয় গ্লাইকোলাইসিস)'),
        definition: l(
          'The physiological phenomenon first observed by Otto Warburg wherein neoplastic cells and rapidly proliferating lymphocytes ferment glucose to lactate at high rates even in the presence of abundant oxygen; mediated by upregulation of GLUT1, hexokinase-2, HIF-1-alpha, and the low-affinity dimeric pyruvate kinase M2 (PKM2) isoform to divert glycolytic intermediates into anabolic macromolecular biosyntheses.',
          'বিজ্ঞানী অটো ওয়ারবার্গ কর্তৃক আবিষ্কৃত অনন্য শারীরবৃত্তীয় ঘটনা যাতে ক্যান্সার কোষ পর্যাপ্ত অক্সিজেন থাকা সত্ত্বেও দ্রুত শক্তি ও নতুন কোষ তৈরির উপাদান পেতে স্বাভাবিক শ্বসনের বদলে গ্লুকোজকে সরাসরি ল্যাকটেটে রূপান্তর করে; এটি টিউমারের দ্রুত বৃদ্ধির মূল চালিকাশক্তি।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Arterial Blood Gas & Delta Gap Calculation in Diabetic Ketoacidosis (DKA)', 'ডায়াবেটিক কিটোঅ্যাসিডোসিসে আর্টারিয়াল ব্লাড গ্যাস ও ডেল্টা গ্যাপের জটিল হিসাব'),
        steps: [
          l(
            'Step 1: Obtain emergency arterial blood gas and serum electrolytes in an 18-year-old with vomiting and Kussmaul breathing: Blood pH = 7.15 (severe acidemia); pCO2 = 18 mmHg (respiratory compensation); Serum Na+ = 132 mEq/L, K+ = 5.6 mEq/L, Cl- = 92 mEq/L, HCO3- = 6 mEq/L; Blood glucose = 480 mg/dL; Serum beta-hydroxybutyrate = 6.8 mmol/L.',
            'ধাপ ১: তীব্র শ্বাসকষ্ট ও বমি নিয়ে আসা ১৮ বছর বয়সী রোগীর জরুরি ল্যাব টেস্ট: রক্তের পিএইচ ৭.১৫ (মারাত্মক অ্যাসিডোসিস); pCO2 = ১৮ mmHg; সোডিয়াম ১৩২, পটাশিয়াম ৫.৬, ক্লোরাইড ৯২, বাইকার্বোনেট ৬ mEq/L; রক্তে গ্লুকোজ ৪৮০ মিগ্রা/ডেসিলিটার এবং কিটোন ৬.৮ mmol/L।'
          ),
          l(
            'Step 2: Correct measured sodium for hyperglycemia: Corrected Na+ = Measured Na+ + 0.016 * (Glucose - 100) = 132 + 0.016 * (480 - 100) = 132 + 0.016 * 380 = 132 + 6.1 = 138.1 mEq/L.',
            'ধাপ ২: অতিরিক্ত গ্লুকোজের জন্য সোডিয়ামের মান সংশোধন: সংশোধিত সোডিয়াম = ১৩২ + ০.০১৬ * (৪৮০ - ১০০) = ১৩২ + ৬.১ = ১৩৮.১ mEq/L।'
          ),
          l(
            'Step 3: Calculate the serum anion gap (AG): AG = Na+ - (Cl- + HCO3-) = 132 - (92 + 6) = 132 - 98 = 34 mEq/L. Normal reference anion gap is 10–12 mEq/L. Excess anion gap (Delta-AG) = Patient AG - Normal AG = 34 - 12 = +22 mEq/L.',
            'ধাপ ৩: সিরাম অ্যানিয়ন গ্যাপ নির্ণয়: অ্যানিয়ন গ্যাপ = ১৩২ - (৯২ + ৬) = ৩৪ mEq/L (স্বাভাবিক মান ১০-১২)। অতিরিক্ত অ্যানিয়ন গ্যাপ (ডেল্টা-AG) = ৩৪ - ১২ = +২২ mEq/L।'
          ),
          l(
            'Step 4: Calculate the Delta-Ratio (Delta-AG / Delta-HCO3-): Delta-HCO3- = Normal HCO3- (24) - Patient HCO3- (6) = 18 mEq/L. Delta-Ratio = 22 / 18 = 1.22. A Delta-Ratio between 1.0 and 2.0 confirms a pure high anion gap metabolic acidosis (HAGMA) caused solely by ketoacids (beta-hydroxybutyrate and acetoacetate), without a co-existing non-anion gap metabolic acidosis or metabolic alkalosis.',
            'ধাপ ৪: ডেল্টা অনুপাত (Delta-Ratio) নির্ণয়: বাইকার্বোনেট ঘাটতি = ২৪ - ৬ = ১৮ mEq/L। ডেল্টা অনুপাত = ২২ / ১৮ = ১.২২। এই মান ১ থেকে ২-এর মধ্যে থাকা প্রমাণ করে যে রোগীর কোনো মিশ্র জটিলতা নেই, কেবল কিটোঅ্যাসিডের কারণেই এই মারাত্মক হাই অ্যানিয়ন গ্যাপ অ্যাসিডোসিস হয়েছে।'
          ),
        ],
        conclusion: l(
          'An anion gap of 34 mEq/L with a Delta-Ratio of 1.22 confirms uncomplicated high anion gap diabetic ketoacidosis, guiding aggressive isotonic crystalloid rehydration and low-dose continuous intravenous regular insulin therapy.',
          '৩৪ mEq/L অ্যানিয়ন গ্যাপ এবং ১.২২ ডেল্টা অনুপাত নিশ্চিত করে এটি খাঁটি ডায়াবেটিক কিটোঅ্যাসিডোসিস, যা শিরায় স্যালাইন ও ইনসুলিন ইনফিউশনের মাধ্যমে জরুরি চিকিৎসা নিশ্চিত করে।'
        ),
      },
      {
        title: l('Homeostatic Model Assessment of Insulin Resistance (HOMA-IR) Calculation', 'ইনসুলিন রেজিস্ট্যান্সের মাত্রা নিরূপণে HOMA-IR সূচকের হিসাব'),
        steps: [
          l(
            'Step 1: Understand the HOMA-IR formula: HOMA-IR quantifies steady-state basal insulin resistance using fasting blood glucose (in mg/dL or mmol/L) and fasting serum insulin (in microU/mL): HOMA-IR = [Fasting Glucose (mg/dL) * Fasting Insulin (microU/mL)] / 405 (or [Fasting Glucose (mmol/L) * Fasting Insulin (microU/mL)] / 22.5).',
            'ধাপ ১: HOMA-IR সূত্র: খালি পেটে রক্তের গ্লুকোজ এবং ইনসুলিনের মাত্রা দিয়ে ইনসুলিন রেজিস্ট্যান্স পরিমাপের গাণিতিক সূত্র হলো: HOMA-IR = [গ্লুকোজ (মিগ্রা/ডেসিলিটার) * ইনসুলিন (microU/mL)] / ৪০৫।'
          ),
          l(
            'Step 2: Collect fasting laboratory measurements from Patient X, a 46-year-old with abdominal obesity and acanthosis nigricans: Fasting blood glucose = 118 mg/dL (impaired fasting glucose); Fasting serum insulin = 28 microU/mL (hyperinsulinemia, normal fasting reference < 10 microU/mL).',
            'ধাপ ২: ৪৬ বছর বয়সী স্থূল রোগীর খালি পেটে ল্যাব মান: গ্লুকোজ = ১১৮ মিগ্রা/ডেসিলিটার; এবং ইনসুলিন = ২৮ microU/mL (অতিরিক্ত ইনসুলিন, স্বাভাবিক মান < ১০)।'
          ),
          l(
            'Step 3: Calculate the patient\'s HOMA-IR score: HOMA-IR = (118 * 28) / 405 = 3,304 / 405 = 8.16.',
            'ধাপ ৩: রোগীর HOMA-IR হিসাব: (১১৮ * ২৮) / ৪০৫ = ৩৩০৪ / ৪০৫ = ৮.১৬।'
          ),
          l(
            'Step 4: Clinical risk stratification: Normal insulin sensitivity = HOMA-IR < 1.5; borderline/mild insulin resistance = 1.5 to 2.5; severe peripheral and hepatic insulin resistance = HOMA-IR > 2.5 (often > 5.0 in morbid metabolic syndrome). The score of 8.16 reveals profound insulin resistance: the patient\'s beta-cells are secreting nearly 3-fold more insulin than normal simply to maintain prediabetic glycemic control, portending imminent beta-cell decompensation without aggressive lifestyle and insulin-sensitizing intervention.',
            'ধাপ ৪: ক্লিনিক্যাল সিদ্ধান্ত: স্বাভাবিক সংবেদনশীলতা < ১.৫; মৃদু রেজিস্ট্যান্স ১.৫-২.৫; এবং মারাত্মক ইনসুলিন রেজিস্ট্যান্স > ২.৫। রোগীর ৮.১৬ মান প্রমাণ করে যে তার অগ্ন্যাশয় স্বাভাবিকের চেয়ে ৩ গুণ বেশি ইনসুলিন তৈরি করেও রক্তে গ্লুকোজ সামলাতে হিমশিম খাচ্ছে এবং শিগগিরই বিটা-কোষ স্থায়ীভাবে ক্লান্ত হয়ে পূর্ণ ডায়াবেটিস দেখা দেবে।'
          ),
        ],
        conclusion: l(
          'A HOMA-IR score of 8.16 establishes profound peripheral and hepatic insulin resistance, demonstrating that massive compensatory hyperinsulinemia is struggling to stave off overt Type 2 Diabetes.',
          'HOMA-IR মান ৮.১৬ নিশ্চিত করে যে রোগীর শরীরে তীব্র ইনসুলিন রেজিস্ট্যান্স তৈরি হয়েছে এবং অতিরিক্ত ইনসুলিন নিঃসৃত করেও অগ্ন্যাশয় পূর্ণ ডায়াবেটিস ঠেকাতে পারছে না।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why do patients with untreated Type 1 Diabetes rapidly develop profound ketoacidosis, whereas patients with Type 2 Diabetes presenting with extreme glucose levels (>1,000 mg/dL) develop HHS without significant ketoacidosis?',
          'টাইপ ১ ডায়াবেটিসে কেন দ্রুত মারাত্মক কিটোঅ্যাসিডোসিস (ডিকেএ) হয়, কিন্তু টাইপ ২ ডায়াবেটিসে গ্লুকোজ হাজার ছাড়িয়ে গেলেও (এইচএইচএস) কেন কিটোঅ্যাসিডোসিস হয় না?',
        ),
        answer: l(
          'The differential development of ketoacidosis hinges upon the threshold concentrations of insulin required to suppress lipolysis versus those required to stimulate glucose uptake. In skeletal muscle and adipose tissue, GLUT4 translocation requires relatively high circulating insulin concentrations. However, in adipose tissue, the inhibition of hormone-sensitive lipase (HSL) by insulin is exquisitely sensitive, requiring only 10% of the insulin concentration needed for glucose disposal. In Type 1 Diabetes, absolute autoimmune destruction of beta-cells produces zero circulating insulin. Without any insulin, HSL is completely disinhibited, releasing massive floods of free fatty acids to the liver, where lack of insulin activates CPT-I, driving uncontrolled ketogenesis and severe ketoacidosis. In Type 2 Diabetes, patients retain modest endogenous basal insulin secretion: while this low insulin level is inadequate to stimulate glucose uptake into resistant muscle (allowing blood glucose to rise to extreme hyperosmolar levels), it is completely sufficient to restrain adipose HSL, preventing the massive flood of free fatty acids required for ketogenesis.',
          'এর মূল রহস্য হলো চর্বি ভাঙন থামাতে যে পরিমাণ ইনসুলিন লাগে তা গ্লুকোজ কোষে ঢোকাতে লাগা ইনসুলিনের চেয়ে প্রায় ১০ গুণ কম। টাইপ ১ ডায়াবেটিসে অগ্ন্যাশয়ে ইনসুলিন উৎপাদন সম্পূর্ণ শূন্য হয়ে যায়। ইনসুলিন একেবারেই না থাকায় চর্বি ভাঙার এনজাইম (HSL) বাঁধভাঙা গতিতে চালু হয়ে রক্তে ফ্যাটি অ্যাসিডের বন্যা বইয়ে দেয় যা যকৃতে প্রচুর কিটোন বডি বানিয়ে অ্যাসিডোসিস ঘটায়। কিন্তু টাইপ ২ ডায়াবেটিসে অগ্ন্যাশয়ে সামান্য কিছু ইনসুলিন তৈরি চালু থাকে: এই সামান্য ইনসুলিন রক্তে গ্লুকোজ কমাতে পারে না ঠিকই, কিন্তু চর্বি ভাঙন থামিয়ে রাখার জন্য যথেষ্ট হয়। ফলে ফ্যাটি অ্যাসিডের ঢল না নামায় কিটোন তৈরি হয় না এবং অ্যাসিডোসিস না হয়ে কেবল চরম গ্লুকোজ ও পানিশূন্যতা (HHS) দেখা দেয়।'
        ),
      },
      {
        question: l(
          'What is the precise molecular chain of events by which ectopic lipid accumulation in skeletal muscle myocytes causes insulin resistance and impairs glucose uptake?',
          'কঙ্কালপেশির কোষের ভেতরে অতিরিক্ত চর্বি জমলে কোন সুনির্দিষ্ট আণবিক প্রক্রিয়ার মাধ্যমে ইনসুলিন রেজিস্ট্যান্স তৈরি হয় এবং গ্লুকোজ প্রবেশ বন্ধ হয়ে যায়?',
        ),
        answer: l(
          'When caloric intake exceeds adipose storage capacity, excess lipids spill into skeletal muscle as intramyocellular lipid droplets. Incomplete mitochondrial beta-oxidation generates intracellular lipid intermediates, particularly sn-1,2-diacylglycerol (DAG) and ceramides. Accumulation of intracellular DAG recruits and activates novel protein kinase C isoforms (specifically PKC-theta in muscle and PKC-epsilon in liver). Activated PKC-theta directly phosphorylates insulin receptor substrate 1 (IRS-1) on inhibitory serine and threonine residues (such as Ser307 and Ser312), preventing the normal tyrosine phosphorylation of IRS-1 by the insulin receptor beta-subunit kinase. Consequently, IRS-1 cannot bind or activate phosphoinositide 3-kinase (PI3K). Downstream activation of Akt2 (protein kinase B) and phosphorylation of the Rab-GTPase-activating protein AS160 are abolished. Without phosphorylated AS160, Rab proteins remain GDP-bound, completely halting the exocytic trafficking and fusion of GLUT4 storage vesicles with the plasma membrane, leaving myocytes impermeable to blood glucose.',
          'খাবারের অতিরিক্ত চর্বি পেশিকোষের ভেতরে জমা হলে ডাইঅ্যাসাইলগ্লিসারল (DAG) ও সেরামাইড নামক ক্ষতিকর মধ্যবর্তী উপাদান তৈরি হয়। এই DAG কোষের বিশেষ এনজাইম PKC-থিটাকে সক্রিয় করে। সক্রিয় PKC-থিটা ইনসুলিন সিগন্যালিংয়ের প্রধান প্রোটিন IRS-1-এর সেরিন অ্যামিনো অ্যাসিডে ফসফেট যুক্ত করে একে অকেজো করে দেয়। ফলে ইনসুলিন রিসেপ্টর আর PI3K এনজাইমকে চালু করতে পারে না এবং Akt2 প্রোটিন ঘুমন্ত থাকে। Akt2 চালু না হওয়ায় কোষের গ্লুকোজ পরিবাহক GLUT4 থলিগুলো কোষের ঝিল্লিতে গিয়ে যুক্ত হতে পারে না। গ্লুকোজের দরজা বন্ধ থাকায় রক্ত থেকে গ্লুকোজ কোষে ঢুকতে পারে না এবং তীব্র ইনসুলিন রেজিস্ট্যান্স দেখা দেয়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: metabolicDisease3DData,
  interactiveDiagram: {
    id: 'metabolic-disease-capstone-hub',
    title: l('Metabolic Syndrome, Diabetes, MASLD & Oncology Disease Engine', 'মেটাবলিক সিন্ড্রোম, ডায়াবেটিস, ফ্যাটি লিভার ও অনকোলজি রোগ চক্র'),
    description: l(
      'Interactive capstone pathway map of systemic human metabolic diseases: explore how molecular defects in insulin signaling, visceral lipotoxicity, mitochondrial uncoupling, and neoplastic fermentation cause clinical pathology.',
      'মানবদেহের অর্জিত বিপাকীয় ব্যাধিসমূহের শীর্ষ সমন্বিত মানচিত্র: পর্যবেক্ষণ করুন কীভাবে ইনসুলিন সংকেত ব্যর্থতা, পেটের চর্বির বিষক্রিয়া, ডায়াবেটিসের চরম সংকট এবং টিউমারের বিপাক মানবদেহে ব্যাধি সৃষ্টি করে।'
    ),
    disclaimer: l(
      'Signaling cascades, diagnostic thresholds, and clinical criteria verified against Williams Textbook of Endocrinology (14th ed), Harrison Principles of Internal Medicine (21st ed), and Lehninger Principles of Biochemistry (8th ed).',
      'সিগন্যালিং প্রক্রিয়া, ডায়াগনস্টিক মানদণ্ড এবং ক্লিনিক্যাল নির্দেশিকা উইলিয়ামস এন্ডোক্রিনোলজি, হ্যারিসন ইন্টারনাল মেডিসিন এবং লেহনিঞ্জার বায়োকেমিস্ট্রি দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'node-t1d-autoimmunity',
        label: l('1. Type 1 Diabetes: Autoimmune Beta-Cell Destruction & DKA', '১. টাইপ ১ ডায়াবেটিস: বিটা-কোষ ধ্বংস ও ডিকেএ সংকট'),
        description: l(
          'Autoreactive CD8+ T cells destroy pancreatic beta-cells; absolute insulin deficiency unleashes unrestrained adipose lipolysis via HSL, flooding liver with free fatty acids that are shunted into ketogenesis, precipitating high anion gap ketoacidosis.',
          'অটোইমিউন টি-কোষ অগ্ন্যাশয়ের বিটা-কোষ ধ্বংস করে দেয়; ইনসুলিনের পূর্ণ অভাবে চর্বি ভেঙে ফ্যাটি অ্যাসিডের ঢল নামে এবং যকৃতে অতিরিক্ত কিটোন তৈরি হয়ে প্রাণঘাতী কিটোঅ্যাসিডোসিস ঘটায়।'
        ),
        details: l(
          'Hallmark autoantibodies include anti-GAD65, IA-2, and ZnT8; ketoacidosis produces Kussmaul breathing, fruity breath (acetone), vomiting, and severe dehydration.',
          'রক্তে অ্যান্টি-GAD65 অ্যান্টিবডি থাকে; কিটোঅ্যাসিডোসিসে দ্রুত গভীর শ্বাস (কুসমল শ্বাস), বমি ও চরম পানিশূন্যতা দেখা দেয়।'
        ),
        sectionId: 'structure',
        color: '#ef4444',
        svgCoords: { cx: 70, cy: 75, r: 24 },
      },
      {
        id: 'node-t2d-irs-phosphorylation',
        label: l('2. Type 2 Diabetes: Intramyocellular DAG & IRS-1 Serine Blockade', '২. টাইপ ২ ডায়াবেটিস: পেশিতে DAG চর্বি ও ইনসুলিনের পথ রুদ্ধ'),
        description: l(
          'Ectopic lipid accumulation in myocytes generates diacylglycerol (DAG), activating novel PKC-theta to phosphorylate IRS-1 on Ser307/Ser312, crippling PI3K/Akt activation and halting GLUT4 translocation to the sarcolemma.',
          'পেশিতে ডাইঅ্যাসাইলগ্লিসারল (DAG) চর্বি জমে PKC-থিটা এনজাইমের মাধ্যমে ইনসুলিন রিসেপ্টরকে অবশ করে দেয়, ফলে গ্লুকোজের দরজা GLUT4 খুলতে পারে না।'
        ),
        details: l(
          'Compensatory hyperinsulinemia initially maintains euglycemia, but progressive beta-cell glucolipotoxicity and islet amyloid polypeptide (IAPP) deposition lead to overt secretory failure.',
          'শুরুতে অগ্ন্যাশয় অতিরিক্ত ইনসুলিন বানিয়ে রক্তে গ্লুকোজ ঠিক রাখলেও পরে বিটা-কোষ পরিশ্রান্ত হয়ে ধ্বংস হয়ে যায় এবং স্থায়ী ডায়াবেটিস দেখা দেয়।'
        ),
        sectionId: 'structure',
        color: '#f59e0b',
        svgCoords: { cx: 160, cy: 75, r: 24 },
      },
      {
        id: 'node-hhs-hyperosmolar',
        label: l('3. Hyperosmolar Hyperglycemic State (HHS): Extreme Glycemia without DKA', '৩. হাইপারঅসমোলার স্টেট (HHS): কিটোনবিহীন চরম গ্লুকোজ ও পানিশূন্যতা'),
        description: l(
          'Extreme hyperglycemia (> 600 mg/dL) with serum osmolality > 320 mOsm/kg and normal blood pH; residual endogenous insulin restrains adipose HSL (preventing ketogenesis) but fails to stimulate peripheral glucose uptake.',
          'রক্তে গ্লুকোজ মারাত্মক বেড়ে যায় (> ৬০০ মিগ্রা) এবং রক্ত ঘন হয়ে চরম পানিশূন্যতা হয়; অবশিষ্ট ইনসুলিন কিটোন তৈরি আটকে রাখায় কোনো অ্যাসিডোসিস হয় না।'
        ),
        details: l(
          'Massive osmotic diuresis produces 8–12 liter total body water deficits, lethargy, focal neurological deficits, and coma; managed with vigorous fluid replacement.',
          'প্রস্রাবের সাথে প্রচুর পানি বের হয়ে শরীরে ৮-১২ লিটার পানির মারাত্মক শূন্যতা তৈরি হয় এবং রোগী জ্ঞান হারিয়ে কোমায় চলে যায়।'
        ),
        sectionId: 'structure',
        color: '#eab308',
        svgCoords: { cx: 250, cy: 75, r: 24 },
      },
      {
        id: 'node-metsyn-visceral-adiposity',
        label: l('4. Metabolic Syndrome: Visceral Omentum & Adipokine Storm', '৪. মেটাবলিক সিন্ড্রোম: পেটের চর্বি ও প্রদাহজনক সাইটোকাইন'),
        description: l(
          'Hypertrophic visceral adipocytes recruit M1 macrophages into crown-like structures, secreting TNF-alpha and IL-6 while repressing cardioprotective adiponectin; stimulates hepatic VLDL secretion and hypertension.',
          'পেটের অতিরিক্ত চর্বির কোষে ম্যাক্রোফেজ এসে প্রদাহ তৈরি করে এবং ক্ষতিকর TNF-আলফা ও IL-6 ছড়ায়; উপকারী অ্যাডিপোনেক্টিন কমে রক্তচাপ ও ক্ষতিকর চর্বি বাড়ে।'
        ),
        details: l(
          'Diagnosed by NCEP ATP III criteria (waist circumference, triglycerides >= 150, low HDL, BP >= 130/85, fasting glucose >= 100 mg/dL); managed by lifestyle modification.',
          'কোমরের পরিধি, ট্রাইগ্লিসারাইড, কম এইচডিএল, উচ্চ রক্তচাপ এবং গ্লুকোজ দেখে এটি নির্ণয় করা হয়; ওজন কমানো এর প্রধান চিকিৎসা।'
        ),
        sectionId: 'mechanism',
        color: '#f97316',
        svgCoords: { cx: 340, cy: 75, r: 24 },
      },
      {
        id: 'node-atherogenic-dyslipidemia',
        label: l('5. Atherogenic Dyslipidemia: Small Dense LDL & ApoB Elevation', '৫. রক্তনালির ব্লক সৃষ্টিকারী চর্বি: ছোট ঘন এলডিএল ও অ্যাপো-বি'),
        description: l(
          'High circulating VLDL transfers triglycerides to LDL and HDL via cholesteryl ester transfer protein (CETP); hepatic lipase hydrolyzes the triglycerides, generating small dense LDL (Pattern B) that readily penetrate arterial intima.',
          'রক্তে অতিরিক্ত VLDL চর্বি CETP এনজাইমের মাধ্যমে এলডিএলকে ছোট ও ঘন কণিকায় পরিণত করে যা খুব সহজে রক্তনালির দেয়ালে ঢুকে প্লাক বা ব্লক তৈরি করে।'
        ),
        details: l(
          'Small dense LDL particles undergo oxidative modification and scavenger receptor uptake by macrophages, driving foam cell formation and atherosclerotic plaque rupture.',
          'এই ছোট ঘন এলডিএল সহজেই জারিত হয়ে ম্যাক্রোফেজের ভেতর ঢুকে ফোম সেল বানায় এবং করোনারি ধমনিতে ব্লক তৈরি করে হার্ট অ্যাটাকের ঝুঁকি বহুগুণ বাড়ায়।'
        ),
        sectionId: 'mechanism',
        color: '#8b5cf6',
        svgCoords: { cx: 70, cy: 165, r: 24 },
      },
      {
        id: 'node-masld-mash-cascade',
        label: l('6. MASLD & MASH: Hepatic Steatosis, Lipotoxicity & Fibrosis', '৬. ফ্যাটি লিভার ডিজিজ (MASLD/MASH): চর্বি জমা ও লিভার সিরোসিস'),
        description: l(
          'Selective hepatic insulin resistance drives de novo lipogenesis via SREBP-1c while failing to suppress gluconeogenesis; steatotic hepatocytes undergo lipid peroxidation and ER stress, activating Kupffer and stellate cells.',
          'যকৃতে অতিরিক্ত নতুন চর্বি তৈরি হয়; জমে থাকা চর্বি লিভার কোষে প্রদাহ সৃষ্টি করে হেপাটিক স্টেলেট কোষগুলোকে সক্রিয় করে কোলাজেন জমাতে থাকে।'
        ),
        details: l(
          'Progresses from simple steatosis (MASLD) to inflammatory steatohepatitis (MASH), progressive bridging fibrosis, cirrhosis, portal hypertension, and hepatocellular carcinoma.',
          'সাধারণ ফ্যাটি লিভার থেকে প্রদাহযুক্ত MASH, লিভার ফাইব্রোসিস, সিরোসিস এবং যকৃতের ক্যান্সারে রূপ নিতে পারে।'
        ),
        sectionId: 'mechanism',
        color: '#10b981',
        svgCoords: { cx: 160, cy: 165, r: 24 },
      },
      {
        id: 'node-warburg-effect-oncology',
        label: l('7. The Warburg Effect: Aerobic Glycolysis & PKM2 Dimer Switch', '৭. ওয়ারবার্গ প্রভাব: ক্যান্সার কোষে বায়বীয় গ্লাইকোলাইসিস ও PKM2'),
        description: l(
          'Neoplastic cells express the dimeric pyruvate kinase M2 (PKM2) isoform and HIF-1-alpha, fermenting glucose to lactate despite oxygen availability; acts as a bottleneck that backs up upstream glycolytic intermediates into anabolic pathways.',
          'ক্যান্সার কোষে অক্সিজেন থাকা সত্ত্বেও গ্লুকোজকে ল্যাকটেটে রূপান্তর করে; PKM2 এনজাইমের মাধ্যমে মধ্যবর্তী উপাদানগুলোকে নতুন কোষ তৈরির ডিএনএ ও প্রোটিন বানাতে ঘুরিয়ে দেয়।'
        ),
        details: l(
          'Provides ribose-5-phosphate for nucleotides, glycerol-3-phosphate for lipids, and NADPH for redox defense; visualized clinically as intense 18F-FDG uptake on PET scans.',
          'ডিএনএ ও লিপিড তৈরির কাঁচামাল দ্রুত সরবরাহ করে টিউমারের বৃদ্ধি নিশ্চিত করে; পিইটি স্ক্যানে 18F-FDG গ্লুকোজ গ্রহণের মাধ্যমে টিউমারটি উজ্জ্বল দেখায়।'
        ),
        sectionId: 'integration',
        color: '#ec4899',
        svgCoords: { cx: 250, cy: 165, r: 24 },
      },
      {
        id: 'node-critical-illness-hypercatabolism',
        label: l('8. Critical Illness & Sepsis: Neuroendocrine Surge & Proteolysis', '৮. সেপসিস ও ট্রমার তীব্র সংকট: হরমোনের তীব্রতা ও পেশি ক্ষয়'),
        description: l(
          'Severe trauma and sepsis trigger massive surges of epinephrine, cortisol, glucagon, and TNF-alpha, overwhelming insulin action; drives unrestrained muscle proteolysis to feed amino acids into hepatic gluconeogenesis and acute-phase proteins.',
          'তীব্র ট্রমা ও সেপসিসে এপিনেফ্রিন ও কর্টিসলের ঢল নামে; যা পেশির প্রোটিন দ্রুত ভেঙে অ্যামিনো অ্যাসিড হিসেবে যকৃতে পাঠিয়ে নতুন গ্লুকোজ ও প্রতিরোধক প্রোটিন বানায়।'
        ),
        details: l(
          'Produces stress hyperglycemia, profound insulin resistance of critical illness, futile metabolic substrate cycling, and accelerated negative nitrogen balance.',
          'তীব্র অসুস্থতায় রক্তের গ্লুকোজ অনিয়ন্ত্রিত হয়ে পড়ে, শরীর শুকিয়ে মাংস ক্ষয় হতে থাকে এবং নাইট্রোজেন ব্যালান্স নেগেটিভ হয়ে যায়।'
        ),
        sectionId: 'integration',
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
          heading: l('The Breakdown of Metabolic Harmony: From Energy Balance to Chronic Disease', 'বিপাকীয় ভারসাম্যের বিপর্যয়: স্বাভাবিক শক্তি ব্যবস্থা থেকে দীর্ঘস্থায়ী রোগ'),
          paragraphs: [
            l(
              'Throughout human evolutionary history, physiological metabolic machinery was shaped to survive intermittent periods of prolonged famine, harsh physical exertion, and scarce dietary calories. Cellular energy pathways evolved with an exquisite bias toward conserving fuel, storing surplus chemical energy as triacylglycerols in adipose tissue and tightly defending blood glucose during fasting. In the modern urbanized environment, this ancient evolutionary architecture faces an unprecedented challenge: continuous availability of ultra-processed, energy-dense foods combined with profound physical inactivity.',
              'মানব বিবর্তনের ইতিহাসে শারীরিক বিপাকীয় ব্যবস্থা এমনভাবে গড়ে উঠেছিল যাতে দীর্ঘকালীন দুর্ভিক্ষ, তীব্র শারীরিক পরিশ্রম এবং খাদ্যের অভাব মোকাবেলা করে টিকে থাকা যায়। মানবকোষের মূল লক্ষ্য ছিল কোনো খাবার পেলেই তা চর্বি হিসেবে শরীরে জমিয়ে রাখা এবং উপবাসকালে রক্তের গ্লুকোজ রক্ষা করা। কিন্তু আধুনিক যুগে অতি-প্রক্রিয়াজাত খাবারের প্রাচুর্য এবং কায়িক পরিশ্রমহীনতার কারণে এই প্রাচীন জৈবিক সুরক্ষাই আজ ভয়াবহ বিপাকীয় রোগের প্রধান উৎসে পরিণত হয়েছে।'
            ),
            l(
              'When the storage capacity of healthy adipose tissue is overwhelmed by chronic positive energy balance, metabolic harmony collapses. Surplus fatty acids spill into non-adipose organs such as skeletal muscle, liver, and pancreatic islets, initiating a toxic cascade known as lipotoxicity. Cellular signaling pathways that govern normal fuel switching become desensitized to hormones, culminating in acquired metabolic diseases: Type 2 Diabetes, the Metabolic Syndrome, fatty liver disease, and atherogenic cardiovascular disorders.',
              'শরীরের চর্বিকলার ধারণক্ষমতা ছাড়িয়ে গেলে চর্বির অতিরিক্ত অংশ পেশি, যকৃৎ এবং অগ্ন্যাশয়ের মতো ভুল অঙ্গে জমতে শুরু করে, যাকে লিপিডের বিষক্রিয়া (লাইপোটক্সিসিটি) বলা হয়। কোষগুলো ইনসুলিন হরমোনের সংকেত গ্রহণ করতে অস্বীকার করে, যার ফলে একের পর এক আধুনিক রোগ জন্ম নেয়: টাইপ ২ ডায়াবেটিস, মেটাবলিক সিন্ড্রোম, ফ্যাটি লিভার এবং রক্তনালিতে চর্বি জমার কারণে হার্ট অ্যাটাক ও স্ট্রোক।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Understanding Diabetes Mellitus: Type 1 Autoimmunity vs Type 2 Insulin Resistance', 'ডায়াবেটিস মেলিটাস: টাইপ ১ অটোইমিউনিটি বনাম টাইপ ২ ইনসুলিন রেজিস্ট্যান্স'),
          paragraphs: [
            l(
              'Diabetes mellitus is not a single disease, but a family of metabolic disorders unified by the hallmark of chronic hyperglycemia resulting from defects in insulin secretion, insulin action, or both. In Type 1 Diabetes (T1D), the underlying defect is absolute insulin deficiency caused by autoimmune destruction of the insulin-producing beta-cells within the pancreatic islets of Langerhans. Because these patients produce zero endogenous insulin, they cannot utilize glucose and enter a state of unchecked catabolism, rapidly developing life-threatening diabetic ketoacidosis (DKA) unless treated with daily exogenous insulin replacement.',
              'ডায়াবেটিস কোনো একক রোগ নয়, বরং একগুচ্ছ বিপাকীয় জটিলতা যার সাধারণ লক্ষণ হলো রক্তে অনিয়ন্ত্রিত গ্লুকোজ বৃদ্ধি। টাইপ ১ ডায়াবেটিসে শরীরের নিজস্ব রোগ প্রতিরোধ ব্যবস্থা অগ্ন্যাশয়ের ইনসুলিন তৈরিকারী বিটা-কোষগুলোকে সম্পূর্ণরূপে ধ্বংস করে দেয়। ফলে শরীরে কোনো ইনসুলিন তৈরি হয় না এবং গ্লুকোজ কোষে ঢুকতে না পেরে চর্বি ভেঙে মারাত্মক বিষাক্ত অ্যাসিড তৈরি করে যা ডায়াবেটিক কিটোঅ্যাসিডোসিস (DKA) নামে পরিচিত; এই রোগীদের বেঁচে থাকার জন্য নিয়মিত ইনসুলিন ইনজেকশন আবশ্যক।'
            ),
            l(
              'In stark contrast, Type 2 Diabetes (T2D) accounts for over 90% of all diabetic cases and is initiated by peripheral insulin resistance: skeletal muscle and liver cells fail to respond properly to normal circulating insulin levels. For years, the pancreas compensates by pumping out massive quantities of extra insulin (compensatory hyperinsulinemia) to keep blood glucose normal. Eventually, however, the overburdened beta-cells suffer secretory exhaustion and apoptosis, insulin production falls behind demand, and overt hyperglycemia develops.',
              'অন্যদিকে ৯০% এর বেশি ডায়াবেটিস রোগী টাইপ ২ ডায়াবেটিসে ভোগেন, যার সূচনা হয় ইনসুলিন রেজিস্ট্যান্স দিয়ে: অর্থাৎ পেশি ও যকৃতের কোষগুলো ইনসুলিনের উপস্থিতিতেও রক্ত থেকে গ্লুকোজ গ্রহণ করতে চায় না। বহু বছর ধরে অগ্ন্যাশয় অতিরিক্ত ইনসুলিন তৈরি করে রক্তের গ্লুকোজ কোনোমতে স্বাভাবিক রাখে। কিন্তু একসময় অতিরিক্ত চাপে অগ্ন্যাশয়ের বিটা-কোষগুলো ক্লান্ত হয়ে ক্ষতিগ্রস্ত হয় এবং পর্যাপ্ত ইনসুলিন দিতে ব্যর্থ হলে রক্তে গ্লুকোজ বেড়ে পূর্ণ ডায়াবেটিস প্রকাশ পায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Metabolic Syndrome and Fatty Liver Disease (MASLD/MASH)', 'মেটাবলিক সিন্ড্রোম ও ফ্যাটি লিভার ডিজিজ'),
          paragraphs: [
            l(
              'The Metabolic Syndrome is a constellation of interconnected clinical abnormalities driven by central (visceral) obesity and insulin resistance. Unlike subcutaneous fat under the skin, visceral fat wrapped around internal abdominal organs is metabolically hyperactive and resistant to insulin. Visceral adipocytes continuously release an unregulated flood of free fatty acids directly into the portal vein leading to the liver, accompanied by pro-inflammatory signaling molecules called adipokines (such as TNF-alpha and interleukin-6).',
              'মেটাবলিক সিন্ড্রোম হলো কয়েকটি মারাত্মক স্বাস্থ্য ঝুঁকির সমষ্টি যা পেটের অতিরিক্ত চর্বি এবং ইনসুলিন রেজিস্ট্যান্সের কারণে ঘটে। ত্বকের নিচের সাধারণ চর্বির তুলনায় পেটের ভেতরের অঙ্গগুলোকে ঘিরে থাকা চর্বি অনেক বেশি ক্ষতিকর। এই চর্বি অনবরত ভেঙে পোর্টাল শিরার মাধ্যমে বিষাক্ত ফ্যাটি অ্যাসিড ও ক্ষতিকর প্রদাহজনক উপাদান সরাসরি যকৃতে পাঠাতে থাকে।'
            ),
            l(
              'When the liver is inundated with visceral fatty acids, it develops Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD, formerly NAFLD), accumulating vast deposits of triacylglycerol inside hepatocytes. If chronic lipid toxicity triggers inflammation and oxidative cell damage, the condition advances to Metabolic Dysfunction-Associated Steatohepatitis (MASH), which activates hepatic scar tissue production (fibrosis) and can silently advance to irreversible cirrhosis, liver failure, and liver cancer.',
              'যকৃৎ এই অতিরিক্ত চর্বি সামলাতে না পেরে নিজের কোষের ভেতরে চর্বি জমাতে থাকে, যাকে বিপাকীয় ফ্যাটি লিভার ডিজিজ (MASLD) বলে। দীর্ঘদিন ধরে লিভারে চর্বি জমে প্রদাহ ও কোষের ক্ষতি হতে থাকলে এটি MASH-এ রূপ নেয়, যা যকৃতে স্থায়ী ক্ষতচিহ্ন (ফাইব্রোসিস) তৈরি করে এবং ক্রমান্বয়ে লিভার সিরোসিস ও ক্যান্সারে রূপ নিতে পারে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Frontiers of Metabolic Medicine: Cancer Fermentation and Critical Illness', 'বিপাকীয় চিকিৎসার নতুন দিগন্ত: ক্যান্সার ও তীব্র অসুস্থতার বিপাক'),
          paragraphs: [
            l(
              'Metabolic reprogramming is now recognized as one of the fundamental hallmarks of cancer. In the 1920s, German biochemist Otto Warburg discovered that cancer cells exhibit an unusual metabolic addiction: even when surrounded by abundant oxygen, tumor cells ferment glucose to lactate instead of fully oxidizing it in mitochondria. This Warburg effect (aerobic glycolysis) allows rapidly dividing malignant cells to divert glycolytic intermediates into branching pathways that manufacture nucleotides, amino acids, and lipids needed to assemble new daughter cancer cells.',
              'বিপাকীয় পরিবর্তনের এই রূপ ক্যান্সার রোগের অন্যতম প্রধান বৈশিষ্ট্য হিসেবে স্বীকৃত। ১৯২০-এর দশকে বিজ্ঞানী অটো ওয়ারবার্গ আবিষ্কার করেন যে ক্যান্সার কোষ এক অদ্ভুত বিপাকীয় প্রক্রিয়ায় চলে: প্রচুর অক্সিজেন থাকা সত্ত্বেও তারা মাইটোকন্ড্রিয়া দিয়ে পূর্ণ শ্বসন না চালিয়ে গ্লুকোজকে সরাসরি ল্যাকটেটে রূপান্তর করে। এই ওয়ারবার্গ প্রভাবের মাধ্যমে টিউমার কোষ অত্যন্ত দ্রুত নতুন কোষ তৈরির জন্য প্রয়োজনীয় ডিএনএ, প্রোটিন ও চর্বির কাঁচামাল তৈরি করে নেয়।'
            ),
            l(
              'A dramatic metabolic distortion also occurs during critical illness, severe physical trauma, and septic shock. Under massive systemic stress, the body releases a flood of stress hormones (epinephrine, cortisol, and glucagon) that completely overrides normal insulin control. The body enters a state of severe hypercatabolism, aggressively breaking down skeletal muscle protein into amino acids to supply hepatic glucose synthesis. While this reaction evolved to provide immediate fuel for survival, prolonged hypermetabolism leads to rapid muscle wasting and immune suppression.',
              'একই ধরনের তীব্র বিপাকীয় বিপর্যয় ঘটে মারাত্মক দুর্ঘটনা, পোড়া বা সেপসিসে আক্রান্ত রোগীদের ক্ষেত্রে। চরম শারীরিক সংকটে শরীর প্রচুর স্ট্রেস হরমোন (যেমন কর্টিসল ও এপিনেফ্রিন) নিঃসরণ করে ইনসুলিনের সমস্ত নিয়ন্ত্রণ অকেজো করে দেয়। শরীর বাঁচানোর তাগিদে কঙ্কালপেশির প্রোটিন দ্রুত ভেঙে যকৃতে পাঠাতে থাকে নতুন গ্লুকোজ তৈরির জন্য, যার ফলে দীর্ঘস্থায়ী সংকটে পেশি শুকিয়ে রোগী নিস্তেজ হয়ে পড়ে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Preventing and Reversing Metabolic Disease: Lifestyle Medicine Logic', 'বিপাকীয় ব্যাধি প্রতিরোধ ও নিরাময়: জীবনযাত্রা চিকিৎসার মূলনীতি'),
          paragraphs: [
            l(
              'The single most encouraging insight of modern metabolic science is that acquired metabolic disease is not an inevitable, irreversible genetic destiny: early insulin resistance and hepatic steatosis are profoundly reversible through targeted lifestyle interventions. Clinical trials such as the Diabetes Prevention Program (DPP) have demonstrated that a modest weight reduction of just 5% to 7% of body weight, achieved through whole-food nutrition and regular physical activity, reduces the risk of developing Type 2 Diabetes by 58%, significantly outperforming pharmacological metformin.',
              'আধুনিক বিজ্ঞানের সবচেয়ে আশাব্যঞ্জক দিক হলো এই যে অর্জিত বিপাকীয় ব্যাধি কোনো অপরিবর্তনীয় ভাগ্য নয়: সঠিক জীবনযাত্রার মাধ্যমে ইনসুলিন রেজিস্ট্যান্স ও ফ্যাটি লিভার সম্পূর্ণ ভালো করা সম্ভব। গবেষণায় প্রমাণিত হয়েছে যে পুষ্টিকর খাদ্য ও নিয়মিত ব্যায়ামের মাধ্যমে শরীরের মাত্র ৫ থেকে ৭ শতাংশ ওজন কমাতে পারলে ডায়াবেটিস হওয়ার ঝুঁকি ৫৮% কমে যায়, যা ওষুধের চেয়েও বহুগুণ বেশি কার্যকর।'
            ),
            l(
              'Physical exercise exerts immediate, profound biochemical benefits because contracting skeletal muscles stimulate glucose uptake through insulin-independent pathways. Muscle contractions activate the energy sensor AMPK, which directly commands GLUT4 glucose transporters to move to the cell surface without needing insulin. By regularly draining intramuscular glycogen stores, physical exercise restores muscular metabolic flexibility and preserves long-term pancreatic beta-cell health.',
              'শারীরিক ব্যায়াম তাৎক্ষণিকভাবে রক্তের গ্লুকোজ নিয়ন্ত্রণে অনন্য ভূমিকা পালন করে কারণ পেশি সংকোচনের সময় ইনসুলিনের সাহায্য ছাড়াই কোষে গ্লুকোজ ঢুকতে পারে। ব্যায়ামের সময় সক্রিয় হওয়া AMPK সেন্সর সরাসরি গ্লুকোজের দরজা GLUT4 খুলে দেয়। নিয়মিত ব্যায়ামের মাধ্যমে পেশির চর্বি দূর হয়, ইনসুলিন সংবেদনশীলতা ফিরে আসে এবং অগ্ন্যাশয় দীর্ঘকাল সুস্থ থাকে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Foundation Takeaways: The Unified Logic of Human Metabolism', 'প্রাথমিক সারসংক্ষেপ: মানব বিপাকের অবিভাজ্য ঐক্য ও মূল শিক্ষা'),
          paragraphs: [
            l(
              'Acquired metabolic diseases represent the breakdown of evolutionary fuel homeostasis caused by chronic caloric surplus, visceral fat accumulation, and physical inactivity. Type 1 Diabetes is an autoimmune lack of insulin leading to ketoacidosis, while Type 2 Diabetes is progressive insulin resistance leading to beta-cell exhaustion.',
              'অর্জিত বিপাকীয় রোগগুলো মূলত অতিরিক্ত খাদ্য গ্রহণ, পেটের চর্বি বৃদ্ধি এবং অলস জীবনযাত্রার কারণে প্রাকৃতিক শক্তি ব্যবস্থার বিপর্যয়। টাইপ ১ ডায়াবেটিস হলো ইনসুলিনের শূন্যতা যা কিটোঅ্যাসিডোসিস ঘটায়, আর টাইপ ২ হলো ইনসুলিন রেজিস্ট্যান্সের ফলে অগ্ন্যাশয়ের ক্লান্তি।'
            ),
            l(
              'Early recognition of the Metabolic Syndrome, waist circumference management, and regular physical activity that activates insulin-independent GLUT4 uptake provide the foundational pillars for preventing and reversing chronic metabolic disease.',
              'মেটাবলিক সিন্ড্রোম প্রাথমিক পর্যায়ে শনাক্ত করা, কোমরের পরিধি নিয়ন্ত্রণে রাখা এবং নিয়মিত শারীরিক ব্যায়ামের মাধ্যমে ইনসুলিন ছাড়াই কোষে গ্লুকোজ গ্রহণ সচল রাখাই দীর্ঘস্থায়ী বিপাকীয় রোগ প্রতিরোধ ও নিরাময়ের সবচেয়ে শক্তিশালী হাতিয়ার।'
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
          heading: l('Molecular Signal Transduction in Insulin Resistance: The IRS-1 Phosphorylation Switch', 'ইনসুলিন রেজিস্ট্যান্সের আণবিক সংকেত পথ: IRS-1 ফসফরাইলেশন সুইচ'),
          paragraphs: [
            l(
              'Canonical insulin signaling is initiated when insulin binds the extracellular alpha-subunits of the heterotetrameric insulin receptor tyrosine kinase (IR), triggering autophosphorylation of catalytic beta-subunit loop tyrosines (Tyr1158, Tyr1162, Tyr1163). The activated receptor recruits insulin receptor substrate proteins (IRS-1 and IRS-2) via phosphotyrosine-binding (PTB) domains, phosphorylating specific IRS tyrosine residues. These phosphotyrosines create high-affinity docking sites for the SH2 domains of the p85 regulatory subunit of phosphoinositide 3-kinase (PI3K), recruiting PI3K to the plasma membrane where its catalytic p110 subunit phosphorylates PIP2 into PIP3. PIP3 recruits PDK1 and Akt (protein kinase B), which activates downstream anabolic targets: phosphorylating AS160 to trigger GLUT4 vesicle exocytosis, phosphorylating GSK-3 to activate glycogen synthase, and phosphorylating FOXO1 to exclude it from the nucleus, silencing gluconeogenic gene expression.',
              'ইনসুলিন রিসেপ্টরে ইনসুলিন যুক্ত হলে এর ভেতরের বিটা-সাবইউনিটের টাইরোসিন অ্যামিনো অ্যাসিডগুলো ফসফরাইলেটেড হয়ে সক্রিয় হয়। এই সক্রিয় রিসেপ্টর IRS-1 ও IRS-2 প্রোটিনকে টাইরোসিনে ফসফরাইলেট করে যা PI3K এনজাইমকে প্লাজমা ঝিল্লিতে টেনে এনে PIP3 তৈরি করে। PIP3 পরবর্তীতে Akt2 প্রোটিন কাইনেজকে সক্রিয় করে যা গ্লুকোজ বাহক GLUT4-কে ঝিল্লিতে পাঠায়, গ্লাইকোজেন সংশ্লেষ চালু করে এবং FOXO1-কে নিউক্লিয়াস থেকে বের করে দিয়ে গ্লুকোজ তৈরির জিনগুলো বন্ধ করে দেয়।'
            ),
            l(
              'In the pathogenesis of insulin resistance, this linear signaling cascade is actively disrupted by lipid second messengers. Overnutrition and impaired mitochondrial fatty acid beta-oxidation lead to the accumulation of intracellular sn-1,2-diacylglycerol (DAG) in skeletal muscle and liver. Elevated DAG translocates novel calcium-independent protein kinase C isoforms (specifically PKC-theta in skeletal muscle and PKC-epsilon in hepatocytes) from the cytosol to the plasma membrane. Activated novel PKCs directly phosphorylate IRS-1 on inhibitory serine and threonine residues (notably Ser307, Ser312, and Ser1101), sterically hindering the association of IRS-1 with the insulin receptor and abolishing downstream tyrosine phosphorylation, completely paralyzing the PI3K/Akt/GLUT4 cascade.',
              'ইনসুলিন রেজিস্ট্যান্সে এই স্বাভাবিক সংকেত পথটি লিপিডের কারণে বন্ধ হয়ে যায়। অতিরিক্ত খাবারের কারণে পেশি ও যকৃতে ডাইঅ্যাসাইলগ্লিসারল (DAG) চর্বি জমতে থাকে। এই DAG কোষের বিশেষ এনজাইম PKC-থিটা (পেশিতে) এবং PKC-এপসাইলন (যকৃতে) সক্রিয় করে তোলে। এই PKC এনজাইমগুলো IRS-1 প্রোটিনের সেরিন অ্যামিনো অ্যাসিডে ফসফেট যুক্ত করে একে নষ্ট করে দেয়, যার ফলে ইনসুলিন রিসেপ্টর আর Akt2 বা GLUT4 চালু করতে পারে না এবং কোষে গ্লুকোজ ঢোকা সম্পূর্ণ বন্ধ হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Pathophysiological Differential: Diabetic Ketoacidosis (DKA) versus Hyperosmolar Hyperglycemic State (HHS)', 'প্যাথোফিজিওলজিক্যাল তুলনা: ডায়াবেটিক কিটোঅ্যাসিডোসিস (ডিকেএ) বনাম হাইপারঅসমোলার স্টেট (এইচএইচএস)'),
          paragraphs: [
            l(
              'Diabetic Ketoacidosis (DKA) and Hyperosmolar Hyperglycemic State (HHS) represent the two life-threatening acute metabolic decompensations of diabetes, distinguished by the absolute presence versus absence of circulating insulin. In DKA, absolute insulin lack disinhibits adipose hormone-sensitive lipase (HSL), which hydrolyzes triglycerides into free fatty acids (FFAs). In hepatocytes, the complete absence of insulin coupled with glucagon excess lowers malonyl-CoA levels, fully activating carnitine palmitoyltransferase I (CPT-I). FFAs flood the mitochondrial matrix via the carnitine shuttle, undergoing massive beta-oxidation to generate excess acetyl-CoA that overwhelms the TCA cycle and is converted to acetoacetate and beta-hydroxybutyrate. Accumulation of these organic ketoacids consumes serum bicarbonate, producing high anion gap metabolic acidosis (pH < 7.30, HCO3- < 18 mEq/L, anion gap > 12–16 mEq/L).',
              'ডায়াবেটিক কিটোঅ্যাসিডোসিস (ডিকেএ) এবং হাইপারঅসমোলার হাইপারগ্লাইসেমিক স্টেট (এইচএইচএস) হলো দুটি চরম জরুরি অবস্থা যার মূল পার্থক্য হলো ইনসুলিনের পূর্ণ শূন্যতা বনাম সামান্য উপস্থিতি। ডিকেএ-তে ইনসুলিন সম্পূর্ণ না থাকায় চর্বি ভাঙার এনজাইম HSL রক্তে ফ্যাটি অ্যাসিডের বন্যা বইয়ে দেয়। যকৃতে ম্যালোনাইল-কোএ কমে যাওয়ায় CPT-I এনজাইম সম্পূর্ণ উন্মুক্ত হয় এবং ফ্যাটি অ্যাসিড মাইটোকন্ড্রিয়ায় ঢুকে প্রচুর কিটোন বডি বানিয়ে রক্তে মারাত্মক হাই অ্যানিয়ন গ্যাপ মেটাবলিক অ্যাসিডোসিস সৃষ্টি করে।'
            ),
            l(
              'In HHS, by contrast, patients possess sufficient residual endogenous insulin secretion (typically 10–20% of normal) to inhibit adipose HSL, because the lipolysis suppression threshold for insulin is nearly an order of magnitude lower than the glucose disposal threshold. Consequently, massive FFA release does not occur, CPT-I remains partially restrained, and ketogenesis is prevented. However, this low insulin concentration is completely inadequate to stimulate glucose uptake in severely insulin-resistant muscle or suppress hepatic gluconeogenesis. Blood glucose rises relentlessly to extreme levels (> 600–1,200 mg/dL), far exceeding the renal threshold (180 mg/dL). Massive glucosuria drives profound osmotic diuresis, leading to severe hyperosmolality (> 320 mOsm/kg), massive extracellular dehydration (8–12 L fluid deficit), and altered mental status without ketoacidosis.',
              'বিপরীতে এইচএইচএস-এ অগ্ন্যাশয় সামান্য কিছু ইনসুলিন তৈরি চালু রাখে যা চর্বি ভাঙা আটকে রাখার জন্য যথেষ্ট, কারণ চর্বি ভাঙন থামাতে খুব অল্প ইনসুলিন লাগে। ফলে রক্তে ফ্যাটি অ্যাসিডের ঢল নামে না এবং কোনো কিটোন বডিও তৈরি হয় না। কিন্তু এই সামান্য ইনসুলিন রক্তে গ্লুকোজ কমাতে পারে না বলে গ্লুকোজ মারাত্মকভাবে বেড়ে ৬০০ থেকে ১২০০ মিগ্রা ছাড়িয়ে যায়। প্রস্রাবের সাথে প্রচুর পানি ও লবণ বের হয়ে শরীরে ৮-১২ লিটার পানির মারাত্মক শূন্যতা ও রক্ত ঘন হয়ে রোগী কোমায় চলে যায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Metabolic Syndrome Cascade: Selective Hepatic Insulin Resistance and Atherogenic Dyslipidemia', 'মেটাবলিক সিন্ড্রোম: সিলেক্টিভ হেপাটিক ইনসুলিন রেজিস্ট্যান্স ও রক্তনালির ক্ষতিকর চর্বি'),
          paragraphs: [
            l(
              'A central paradox of the Metabolic Syndrome is "selective hepatic insulin resistance." Under physiological conditions, insulin mediates two major hepatic programs: it suppresses gluconeogenesis (via Akt phosphorylation and nuclear exclusion of FOXO1) and it stimulates de novo lipogenesis (via activation of the sterol regulatory element-binding protein 1c, SREBP-1c). In insulin-resistant hepatocytes, the branch regulating gluconeogenesis becomes resistant, allowing FOXO1 to remain constitutively active in the nucleus, transcribing PEPCK and glucose-6-phosphatase to drive uninhibited hepatic glucose output. Paradoxically, the lipogenic branch driven by SREBP-1c remains exquisitely sensitive to high compensatory insulin levels, driving continuous fatty acid synthesis and triacylglycerol packaging into VLDL.',
              'মেটাবলিক সিন্ড্রোমের অন্যতম প্রধান রহস্য হলো "সিলেক্টিভ হেপাটিক ইনসুলিন রেজিস্ট্যান্স"। স্বাভাবিক অবস্থায় ইনসুলিন যকৃতের গ্লুকোজ তৈরি বন্ধ করে এবং চর্বি তৈরি চালু রাখে। কিন্তু ইনসুলিন রেজিস্ট্যান্ট যকৃতে গ্লুকোজ বন্ধের পথটি অকেজো হয়ে যাওয়ায় FOXO1 নিউক্লিয়াসে অনবরত নতুন গ্লুকোজ বানাতে থাকে; অথচ চর্বি তৈরির পথটি অতিরিক্ত ইনসুলিনের প্রভাবে পূর্ণ শক্তিতে চালু থাকে, যার ফলে যকৃতে চর্বি জমে এবং রক্তে প্রচুর VLDL চর্বি বের হয়।'
            ),
            l(
              'Overproduction of large, triglyceride-rich VLDL1 particles alters peripheral lipoprotein architecture via cholesteryl ester transfer protein (CETP). In plasma, CETP exchanges neutral lipids between lipoprotein classes, transferring triglycerides from VLDL into LDL and HDL in exchange for cholesteryl esters. The resulting triglyceride-enriched LDL and HDL particles become excellent substrates for hepatic lipase, which hydrolyzes their triglyceride cores. This enzymatic remodeling shrinks the particles: HDL is destabilized and filtered by renal tubules (lowering cardioprotective HDL-C), while LDL is transformed into small, dense LDL (sdLDL, Pattern B). Small dense LDL particles have reduced affinity for the hepatic LDL receptor, prolonged plasma residence time, enhanced susceptibility to oxidation, and readily penetrate the vascular subendothelial matrix, driving atherogenesis.',
              'রক্তে অতিরিক্ত VLDL থাকলে CETP এনজাইম অন্যান্য চর্বি কণার সাথে উপাদান অদলবদল করে। এর ফলে উপকারী HDL চর্বি নষ্ট হয়ে প্রস্রাবে ফিল্টার হয়ে যায় (রক্তে HDL কমে) এবং সাধারণ LDL পরিবর্তিত হয়ে অত্যন্ত বিপজ্জনক "ছোট ঘন এলডিএল" (sdLDL)-এ রূপ নেয়। এই ছোট ঘন এলডিএল রক্তে দীর্ঘক্ষণ ঘুরে সহজে রক্তনালির ভেতরের দেয়ালে ঢুকে জারিত হয় এবং ম্যাক্রোফেজের মাধ্যমে প্লাক বা ব্লক তৈরি করে হার্ট অ্যাটাকের ঝুঁকি বহু গুণ বাড়িয়ে দেয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Cancer Bioenergetics (The Warburg Effect) and Critical Illness Hypercatabolism', 'ক্যান্সারের জৈবশক্তিবিজ্ঞান (ওয়ারবার্গ প্রভাব) ও সেপসিসের তীব্র ক্ষয়িষ্ণুতা'),
          paragraphs: [
            l(
              'The Warburg effect in oncological bioenergetics represents a deliberate metabolic trade-off optimizing cellular biomass accumulation over maximal ATP yield per mole of glucose. Normal differentiated cells completely oxidize glucose via glycolysis, TCA cycle, and oxidative phosphorylation, generating ~30–32 ATP per glucose. Rapidly proliferating tumor cells express high levels of the dimeric M2 isoform of pyruvate kinase (PKM2), which has low catalytic activity compared to the tetrameric PKM1. This low-affinity PKM2 acts as a biochemical bottleneck at the terminal step of glycolysis, causing upstream glycolytic intermediates to accumulate and spill into anabolic branch pathways: glucose-6-phosphate feeds the pentose phosphate pathway for ribose-5-phosphate and NADPH, dihydroxyacetone phosphate feeds glycerol-3-phosphate for membrane phospholipids, and 3-phosphoglycerate feeds serine and glycine synthesis for one-carbon methylation.',
              'ক্যান্সার কোষে ওয়ারবার্গ প্রভাব হলো এটিপি উৎপাদনের চেয়ে নতুন কোষ তৈরির কাঁচামাল সংগ্রহের বিশেষ কৌশল। সাধারণ কোষ এক অণু গ্লুকোজ পুড়িয়ে ৩২টি এটিপি পায়। কিন্তু ক্যান্সার কোষ বিশেষ PKM2 এনজাইম তৈরি করে যা গ্লাইকোলাইসিসের শেষ ধাপের গতি কমিয়ে দেয়। ফলে পেছনের মধ্যবর্তী উপাদানগুলো জমে গিয়ে ডিএনএ তৈরির রাইবোজ, ঝিল্লি তৈরির ফসফোলিপিড এবং প্রোটিন তৈরির অ্যামিনো অ্যাসিডে রূপান্তরিত হয়ে টিউমারের দ্রুত বৃদ্ধিতে সাহায্য করে।'
            ),
            l(
              'During severe critical illness (systemic inflammatory response syndrome / SIRS, major trauma, sepsis, extensive burns), the neuroendocrine axis mounts a massive counter-regulatory hormone surge (epinephrine, cortisol, glucagon, growth hormone) combined with pro-inflammatory cytokines (TNF-alpha, IL-1-beta, IL-6). This flood of catabolic mediators completely overwhelms insulin signaling, inducing the "insulin resistance of critical illness." To supply the liver with precursors for gluconeogenesis and acute-phase reactant synthesis (CRP, fibrinogen), skeletal muscle ubiquitination and lysosomal proteolysis accelerate dramatically, liberating 200–300 grams of muscle protein daily. This futile metabolic cycling drives stress hyperglycemia, immune paralysis, and profound negative nitrogen balance.',
              'তীব্র সেপসিস বা পুড়ে যাওয়া রোগীদের ক্ষেত্রে শরীর প্রচুর স্ট্রেস হরমোন ও সাইটোকাইন নিঃসরণ করে তীব্র ইনসুলিন রেজিস্ট্যান্স তৈরি করে। শরীর বাঁচানোর জন্য কঙ্কালপেশি অত্যন্ত দ্রুত ভাঙতে থাকে এবং দৈনিক ২০০-৩০০ গ্রাম পেশি প্রোটিন নষ্ট হয়ে যকৃতে গ্লুকোজ ও প্রতিরোধক উপাদান তৈরিতে ব্যবহৃত হয়। এই অবিরত ক্ষয়ের কারণে রক্তে গ্লুকোজ মাত্রাতিরিক্ত বেড়ে যায়, রোগী দ্রুত শুকিয়ে যায় এবং রোগ প্রতিরোধ ক্ষমতা ভেঙে পড়ে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Biomarker Integration: ABG Delta Gap Analysis, HOMA-IR, and Diagnostic Matrix', 'ক্লিনিক্যাল বায়োমার্কার বিশ্লেষণ: এবিজি ডেল্টা গ্যাপ, HOMA-IR ও জরুরি সিদ্ধান্তের ছক'),
          paragraphs: [
            l(
              'In clinical emergencies involving severe metabolic acidosis, systematic arterial blood gas (ABG) interpretation requires calculating both the Serum Anion Gap (AG) and the Delta Gap (Delta-Delta ratio). The anion gap quantifies unmeasured anions: AG = Na+ - (Cl- + HCO3-). When the anion gap is elevated above 12 mEq/L, calculating the Delta Gap (Delta-AG = AG - 12) and comparing it to the bicarbonate deficit (Delta-HCO3- = 24 - measured HCO3-) reveals complex mixed acid-base disorders. A Delta-Delta ratio (Delta-AG / Delta-HCO3-) of 1.0 to 2.0 confirms pure high anion gap metabolic acidosis (as seen in uncomplicated DKA or lactic acidosis); a ratio < 1.0 indicates a concurrent non-anion gap (hyperchloremic) metabolic acidosis; and a ratio > 2.0 indicates a co-existing metabolic alkalosis (such as vomiting-induced gastric acid loss).',
              'জরুরি রক্ত পরীক্ষায় আর্টারিয়াল ব্লাড গ্যাস (ABG) বিশ্লেষণে অ্যানিয়ন গ্যাপ এবং ডেল্টা গ্যাপ অত্যন্ত গুরুত্বপূর্ণ। অ্যানিয়ন গ্যাপ হলো: Na+ - (Cl- + HCO3-)। অ্যানিয়ন গ্যাপ ১২-এর বেশি হলে ডেল্টা অনুপাত (Delta-AG / Delta-HCO3-) বের করতে হয়। এই মান ১ থেকে ২-এর মধ্যে থাকলে তা বিশুদ্ধ কিটোঅ্যাসিডোসিস নির্দেশ করে; ১-এর কম হলে অতিরিক্ত ক্লোরাইডজনিত সাধারণ অ্যাসিডোসিস এবং ২-এর বেশি হলে বমির কারণে মেটাবলিক অ্যালকালেমিয়ার উপস্থিতি প্রমাণ করে।'
            ),
            l(
              'In outpatient metabolic assessment, early insulin resistance is quantified using the Homeostatic Model Assessment for Insulin Resistance (HOMA-IR): HOMA-IR = [Fasting Glucose (mg/dL) * Fasting Insulin (microU/mL)] / 405. While an oral glucose tolerance test (OGTT) evaluates postprandial glucose disposal, HOMA-IR uniquely reflects steady-state basal hepatic insulin sensitivity. A HOMA-IR value > 2.5 identifies significant insulin resistance, signaling that pancreatic beta-cells are working under heavy compensatory stress, providing a critical window for aggressive lifestyle intervention decades before overt diabetes diagnosis.',
              'বহির্বিভাগে ইনসুলিন রেজিস্ট্যান্সের মাত্রা মাপতে HOMA-IR সূচক ব্যবহার করা হয়: HOMA-IR = [খালি পেটে গ্লুকোজ (মিগ্রা) * খালি পেটে ইনসুলিন (microU/mL)] / ৪০৫। এই মান ২.৫-এর বেশি হওয়া প্রমাণ করে যে রোগীর শরীরে মারাত্মক ইনসুলিন রেজিস্ট্যান্স শুরু হয়েছে এবং অগ্ন্যাশয় অতিরিক্ত চাপে কাজ করছে, যা ডায়াবেটিস স্থায়ী হওয়ার আগেই সতর্কবার্তা দেয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Takeaways: High-Yield Principles of Metabolic Pathology', 'শিক্ষায়তনিক সারসংক্ষেপ: বিপাকীয় প্যাথলজির উচ্চ-গুরুত্বপূর্ণ মূলনীতি'),
          paragraphs: [
            l(
              'Acquired metabolic disease is rooted in the lipid-mediated disruption of canonical insulin signaling: intracellular DAG activates novel PKC isoforms (PKC-theta, PKC-epsilon) to phosphorylate IRS-1 on inhibitory serine residues, abolishing PI3K/Akt activation and GLUT4 translocation. Selective hepatic resistance drives uninhibited gluconeogenesis alongside paradoxical SREBP-1c lipogenesis, causing MASLD and atherogenic dyslipidemia.',
              'অর্জিত বিপাকীয় রোগের মূল কারণ হলো চর্বির মাধ্যমে ইনসুলিন সংকেত পথ ধ্বংস হওয়া: কোষে জমে থাকা DAG বিশেষ PKC এনজাইম সক্রিয় করে IRS-1-কে সেরিনে ফসফরাইলেট করে অকেজো করে দেয়। ফলে পেশিতে গ্লুকোজ ঢোকা বন্ধ হয় এবং যকৃতে অতিরিক্ত গ্লুকোজ তৈরি ও ফ্যাটি লিভার সৃষ্টি হয়।'
            ),
            l(
              'DKA results from absolute insulin deficiency driving uncontrolled lipolysis and ketogenesis, while HHS retains sufficient residual insulin to suppress lipolysis while suffering extreme hyperosmolar hyperglycemia. The Warburg effect harnesses aerobic glycolysis to feed anabolic macromolecular biosynthesis, and critical illness unleashes counter-regulatory hormones to induce profound muscle hypercatabolism.',
              'ডিকেএ ঘটে ইনসুলিনের পূর্ণ অভাবে অতিরিক্ত কিটোন তৈরির কারণে, আর এইচএইচএস-এ সামান্য ইনসুলিন কিটোন আটকালেও চরম গ্লুকোজ ও পানিশূন্যতা হয়। ক্যান্সার কোষে ওয়ারবার্গ প্রভাব নতুন কোষ তৈরির কাঁচামাল যোগায় এবং তীব্র সেপসিসে স্ট্রেস হরমোন পেশির তীব্র ক্ষয় ঘটায়।'
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
          heading: l('Oncometabolite Biology, Mutant IDH Epigenetics, and Incretin Multi-Agonist Pharmacology', 'অনকোমেটাবোলাইট বিজ্ঞান, মিউট্যান্ট IDH এপিজেনেটিক্স ও ইনক্রেটিন ফার্মাকোলজি'),
          paragraphs: [
            l(
              'In cancer bioenergetics, somatic heterozygous missense mutations in isocitrate dehydrogenase 1 or 2 (IDH1 R132, IDH2 R140/R172) in glioblastomas and acute myeloid leukemias confer a neomorphic catalytic activity: instead of executing the oxidative decarboxylation of isocitrate to alpha-ketoglutarate, mutant IDH consumes NADPH to reduce alpha-ketoglutarate into (2R)-2-hydroxyglutarate (D-2-HG). D-2-HG acts as a competitive oncometabolite that structurally mimics alpha-ketoglutarate, competitively inhibiting alpha-KG-dependent dioxygenases including the TET family of DNA demethylases and Jumonji C domain-containing histone demethylases (KDMs). This competitive blockade produces genome-wide DNA and histone hypermethylation, blocking normal cellular differentiation and locking cells in a malignant, highly proliferative stem-like state.',
              'ক্যান্সারের আধুনিক গবেষণায় আইসোসাইট্রেট ডিহাইড্রোজিনেজ (IDH1/IDH2) জিনের মিউটেশন এক নতুন অনকোমেটাবোলাইট তৈরি করে: আলফা-কিটোগ্লুটারেট তৈরির বদলে এটি NADPH খরচ করে বিষাক্ত (2R)-২-হাইড্রোক্সিগ্লুটারেট (D-2-HG) তৈরি করে। এই D-2-HG স্বাভাবিক এপিজেনেটিক এনজাইমগুলোকে আটকে দিয়ে ডিএনএ-তে অতিরিক্ত মিথাইলেশন ঘটায়, যার ফলে কোষ স্বাভাবিক রূপ নিতে না পেরে অনিয়ন্ত্রিত ক্যান্সার কোষে পরিণত হয়।'
            ),
            l(
              'Modern pharmacological breakthroughs have revolutionized metabolic therapeutics through unimolecular multi-agonists that simultaneously target GLP-1, GIP, and glucagon receptors. Glucagon-like peptide-1 (GLP-1) enhances glucose-dependent insulin secretion and delays gastric emptying; glucose-dependent insulinotropic polypeptide (GIP) enhances white adipose tissue lipid buffering capacity, minimizing ectopic lipid spillover; and glucagon receptor agonism stimulates hepatic energy expenditure and mitochondrial beta-oxidation. Co-formulated unimolecular dual agonists (such as tirzepatide) and triple agonists (such as retatrutide) achieve profound weight loss (>20–25% of total body weight) and complete resolution of hepatic steatosis in MASH, effectively reversing the multi-organ pathology of the Metabolic Syndrome.',
              'আধুনিক চিকিৎসা বিজ্ঞানের সবচেয়ে বড় সাফল্য হলো ইনক্রেটিন মাল্টি-অ্যাগোনিস্ট ওষুধ (যেমন টির্জেপাটাইড ও রেটাট্রুটাইড) যা একসাথে GLP-1, GIP এবং গ্লুকাগন রিসেপ্টরকে সক্রিয় করে। এগুলো অগ্ন্যাশয় থেকে ইনসুলিন বাড়ায়, পেট খালি হওয়া ধীর করে, চর্বিকলার সুরক্ষা ফিরিয়ে আনে এবং যকৃতে সরাসরি শক্তি খরচ বাড়ায়। এর ফলে রোগীর দেহের ২০-২৫% পর্যন্ত অতিরিক্ত ওজন কমে যায় এবং ফ্যাটি লিভার ও মেটাবলিক সিন্ড্রোম সম্পূর্ণ ভালো হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('SGLT2 Inhibitor Energetics, Euglycemic DKA Risks, and Capstone Synthesis', 'SGLT2 ইনহিবিটরের শক্তি মেকানিক্স, ইউগ্লাইসেমিক ডিকেএ এবং শীর্ষ সমন্বয়'),
          paragraphs: [
            l(
              'Sodium-glucose cotransporter-2 (SGLT2) inhibitors (empagliflozin, dapagliflozin) target the low-affinity, high-capacity SGLT2 transporter in the S1 segment of the renal proximal tubule, inhibiting the reabsorption of filtered glucose and sodium. By promoting urinary glucose excretion (70–100 g glucose/day, representing an obligate loss of 280–400 kcal/day), SGLT2 inhibitors lower blood glucose independently of insulin, restore tubuloglomerular feedback by increasing macula densa sodium delivery, and reduce intraglomerular hypertension to arrest diabetic nephropathy progression. Furthermore, the mild, continuous loss of calories shifts whole-body substrate utilization toward fatty acid beta-oxidation and ketogenesis, elevating circulating beta-hydroxybutyrate, which acts as a thermodynamically "super-fuel" for failing myocardial mitochondria, yielding greater ATP per oxygen atom consumed.',
              'SGLT2 ইনহিবিটর ওষুধগুলো কিডনির প্রক্সিমাল টিউবিউলে গ্লুকোজ পুনর্শোষণ বন্ধ করে দিয়ে দৈনিক ৭০-১০০ গ্রাম গ্লুকোজ প্রস্রাবের সাথে বের করে দেয় (যা ২৮০-৪০০ ক্যালোরি অপচয়ের সমান)। এটি ইনসুলিনের ওপর নির্ভর না করেই গ্লুকোজ কমায়, কিডনির ওপর রক্তের চাপ কমিয়ে ডায়াবেটিক নেফ্রোপ্যাথি প্রতিরোধ করে এবং শরীরকে ফ্যাটি অ্যাসিড ও কিটোন পোড়াতে অভ্যস্ত করে হৃদরোগীদের হার্ট ফেইলিউর থেকে রক্ষা করে।'
            ),
            l(
              'However, clinicians must be acutely vigilant for the rare, life-threatening complication of euglycemic DKA (euDKA) associated with SGLT2 inhibitors during acute illness, surgical stress, or severe carbohydrate restriction. By lowering blood glucose via renal excretion, SGLT2 inhibitors reduce insulin secretion while stimulating glucagon release from alpha-cells. When compounded by surgical starvation, this high glucagon-to-insulin ratio stimulates robust hepatic ketogenesis. Critically, because the kidneys continuously excrete glucose into urine, blood glucose levels remain deceptively near-normal or only mildly elevated (< 200–250 mg/dL), masking the underlying severe high anion gap ketoacidosis and delaying lifesaving diagnosis unless blood beta-hydroxybutyrate is explicitly checked.',
              'তবে SGLT2 ইনহিবিটর সেবনকারী রোগীদের ক্ষেত্রে "ইউগ্লাইসেমিক ডিকেএ" (euDKA) নামক মারাত্মক জটিলতার ঝুঁকি থাকে। এই ওষুধ রক্ত থেকে গ্লুকোজ বের করে দেওয়ায় রক্তের গ্লুকোজ স্বাভাবিকের কাছাকাছি থাকে (২০০ মিগ্রার নিচে), কিন্তু ইনসুলিন কমে গ্লুকাগন বেড়ে যাওয়ায় যকৃৎ ভেতরে ভেতরে প্রচুর কিটোন তৈরি করে চরম অ্যাসিডোসিস ঘটায়। রক্তে গ্লুকোজ বেশি না থাকায় চিকিৎসক বিভ্রান্ত হতে পারেন, তাই এই রোগীদের ক্ষেত্রে সরাসরি রক্তের কিটোন পরীক্ষা করা অত্যন্ত জরুরি।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A capstone metabolic disease diagram mapping the unified pathophysiological landscape of systemic human metabolic diseases: detailing Type 1 Diabetes autoimmune beta-cell loss and DKA ketoacidosis, Type 2 Diabetes lipotoxic IRS-1 serine phosphorylation, hyperosmolar hyperglycemic state (HHS) extreme dehydration, Metabolic Syndrome visceral adiposity and atherogenic small dense LDL, MASLD/MASH hepatic steatosis and fibrosis, cancer Warburg effect aerobic glycolysis with dimeric PKM2, and critical illness trauma/sepsis counter-regulatory hypercatabolism.',
      'মানবদেহের শীর্ষ সমন্বিত বিপাকীয় ব্যাধি মানচিত্র: টাইপ ১ ডায়াবেটিসে অটোইমিউন বিটা-কোষ ধ্বংস ও ডিকেএ, টাইপ ২ ডায়াবেটিসে DAG চর্বি দ্বারা ইনসুলিনের পথ রুদ্ধ ও এইচএইচএস, মেটাবলিক সিন্ড্রোমে পেটের চর্বি ও রক্তনালির ক্ষতিকর ছোট ঘন এলডিএল, ফ্যাটি লিভার ডিজিজ (MASLD/MASH), ক্যান্সার কোষে ওয়ারবার্গ প্রভাব এবং সেপসিসের তীব্র ক্ষয়িষ্ণুতার পূর্ণাঙ্গ আণবিক প্রক্রিয়া।'
    ),
    steps: [
      l('Type 1 Diabetes autoimmunity destroys beta-cells, unleashing HSL and uncontrolled DKA ketogenesis.', 'টাইপ ১ ডায়াবেটিসে বিটা-কোষ ধ্বংস হয়ে চর্বি ভাঙন ও ডিকেএ অ্যাসিডোসিস ঘটে।'),
      l('Type 2 Diabetes intramyocellular DAG activates PKC-theta to block IRS-1 and GLUT4 translocation.', 'টাইপ ২ ডায়াবেটিসে পেশির DAG চর্বি ইনসুলিন রিসেপ্টর ও GLUT4 আটকে দেয়।'),
      l('Metabolic Syndrome visceral lipolysis and selective hepatic resistance drive MASLD and sdLDL.', 'মেটাবলিক সিন্ড্রোমে পেটের চর্বি লিভারে জমে ফ্যাটি লিভার ও ক্ষতিকর এলডিএল তৈরি করে।'),
      l('The Warburg effect fuels tumor growth via PKM2, and critical illness drives muscle proteolysis.', 'ক্যান্সারে ওয়ারবার্গ প্রভাব টিউমার বাড়ায় এবং সেপসিস তীব্র পেশি ক্ষয় ঘটায়।'),
    ],
  },
  assessment: {
    question: l(
      'A 52-year-old sedentary man with central obesity (waist circumference 108 cm) and untreated hypertension presents for an annual health checkup. Laboratory evaluation reveals: Fasting plasma glucose = 138 mg/dL (impaired/diabetic); HbA1c = 7.6%; Fasting serum insulin = 32 microU/mL (marked hyperinsulinemia); Fasting triglycerides = 320 mg/dL; HDL cholesterol = 33 mg/dL. Abdominal ultrasound demonstrates diffuse echogenicity consistent with marked hepatic steatosis (MASLD). Which molecular signaling lesion in skeletal muscle and hepatocytes initiated this integrated multi-organ pathology?',
      'পেটে অতিরিক্ত চর্বি (কোমরের পরিধি ১০৮ সেমি) ও উচ্চ রক্তচাপে ভোগা একজন ৫২ বছর বয়সী ব্যক্তির রক্ত পরীক্ষায় দেখা গেল: খালি পেটে গ্লুকোজ ১৩৮ মিগ্রা, HbA1c ৭.৬%, খালি পেটে ইনসুলিন ৩২ microU/mL (অতিরিক্ত ইনসুলিন), ট্রাইগ্লিসারাইড ৩২০ মিগ্রা এবং ভালো কোলেস্টেরল HDL মাত্র ৩৩ মিগ্রা। আল্ট্রাসনোগ্রামে যকৃতে প্রচুর চর্বি (MASLD) ধরা পড়ল। কঙ্কালপেশি ও যকৃতের কোষে কোন প্রাথমিক আণবিক ত্রুটির কারণে এই জটিল বহু-অঙ্গীয় ব্যাধির সূচনা হয়েছে?'
    ),
    options: [
      l(
        'Accumulation of intracellular sn-1,2-diacylglycerol (DAG) activating novel PKC isoforms (PKC-theta in muscle, PKC-epsilon in liver), which phosphorylate IRS-1 on inhibitory serine residues, abolishing downstream PI3K/Akt activation and GLUT4 translocation.',
        'কোষের ভেতর ডাইঅ্যাসাইলগ্লিসারল (DAG) জমে বিশেষ PKC এনজাইম সক্রিয় করা, যা IRS-1 প্রোটিনের সেরিন অ্যামিনো অ্যাসিডে ফসফেট যুক্ত করে অকেজো করে দেয় এবং GLUT4 দিয়ে গ্লুকোজ প্রবেশ বন্ধ করে দেয়।'
      ),
      l(
        'Autoimmune cytotoxic CD8+ T-cell infiltration of pancreatic islets resulting in complete apoptotic destruction of insulin-producing beta-cells.',
        'অটোইমিউন টি-কোষ অগ্ন্যাশয়ের বিটা-কোষ ধ্বংস করে ইনসুলিন তৈরি সম্পূর্ণ বন্ধ করে দেওয়া।'
      ),
      l(
        'Inborn monogenic mutation in medium-chain acyl-CoA dehydrogenase (ACADM) preventing mitochondrial fatty acid oxidation.',
        'MCAD এনজাইমের জন্মগত বংশগত মিউটেশনের কারণে ফ্যাটি অ্যাসিড পোড়াতে না পারা।'
      ),
      l(
        'Constitutive overactivation of the LDL receptor leading to massive intracellular cholesterol overload and hepatic steatosis.',
        'এলডিএল রিসেপ্টর অতিরিক্ত সক্রিয় হয়ে কোষে মাত্রাতিরিক্ত কোলেস্টেরল জমিয়ে ফ্যাটি লিভার সৃষ্টি করা।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'This patient exhibits the classic clinical and biochemical phenotype of the Metabolic Syndrome and early Type 2 Diabetes, characterized by visceral adiposity, hypertriglyceridemia, low HDL, atherogenic dyslipidemia, hepatic steatosis (MASLD), and severe insulin resistance with compensatory hyperinsulinemia. The unified initiating molecular lesion is ectopic lipid accumulation: when visceral adipose tissue exceeds its healthy storage threshold, excess free fatty acids spill over into skeletal muscle and the liver. Within myocytes and hepatocytes, incomplete beta-oxidation leads to the accumulation of intracellular sn-1,2-diacylglycerol (DAG). DAG activates novel protein kinase C isoforms (PKC-theta in skeletal muscle and PKC-epsilon in hepatocytes). Activated PKC directly phosphorylates insulin receptor substrate 1 (IRS-1) on inhibitory serine and threonine residues (such as Ser307 and Ser312). This serine phosphorylation sterically blocks IRS-1 from interacting with the activated insulin receptor beta-subunit kinase, completely abolishing downstream tyrosine phosphorylation of IRS-1, recruitment of PI3K, activation of Akt2, and the translocation of GLUT4 storage vesicles to the plasma membrane. In the liver, selective insulin resistance allows FOXO1 to remain constitutively active, transcribing gluconeogenic enzymes while hyperinsulinemia simultaneously drives SREBP-1c-mediated de novo lipogenesis, cementing both hyperglycemia and severe hepatic steatosis.',
      'এই রোগী মেটাবলিক সিন্ড্রোম ও টাইপ ২ ডায়াবেটিসের ধ্রুপদী লক্ষণে ভুগছেন। এর মূল আণবিক কারণ হলো কোষে চর্বি জমা: পেটের চর্বি অতিরিক্ত বেড়ে গেলে রক্তে ফ্যাটি অ্যাসিডের ঢল নামে এবং তা কঙ্কালপেশি ও যকৃতের কোষে জমা হয়। কোষের ভেতর ডাইঅ্যাসাইলগ্লিসারল (DAG) চর্বি জমে বিশেষ PKC এনজাইমগুলোকে সক্রিয় করে তোলে। এই PKC এনজাইম ইনসুলিন সংকেত পরিবাহক IRS-1 প্রোটিনকে সেরিন অ্যামিনো অ্যাসিডে ফসফরাইলেট করে অকেজো করে দেয়। ফলে ইনসুলিন রিসেপ্টর আর Akt2 এনজাইম চালু করতে পারে না এবং পেশিকোষে গ্লুকোজের দরজা GLUT4 বন্ধ হয়ে যায়। একই সাথে যকৃতে FOXO1 অনবরত নতুন গ্লুকোজ বানায় এবং অতিরিক্ত ইনসুলিনের কারণে নতুন চর্বিও তৈরি হতে থাকে, যার ফলে রক্তে গ্লুকোজ বৃদ্ধির সাথে সাথে ফ্যাটি লিভার ও রক্তনালির ব্লকের ঝুঁকি তৈরি হয়।'
    ),
  },
}
