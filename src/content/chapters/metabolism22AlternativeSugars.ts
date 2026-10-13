import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const sugarsRefs = [
  {
    id: 'lehninger-biochem-8e-ch14',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 14: Glycolysis, Gluconeogenesis, and the Pentose Phosphate Pathway',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch20',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 20: The Pentose Phosphate Pathway & Other Pathways of Hexose Metabolism",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'tappy-fructose-2010',
    authors: 'Luc Tappy, Kim-Anne Le',
    title: 'Metabolic effects of fructose and the worldwide increase in obesity. Physiological Reviews, 90(1):23-46',
    organization: 'American Physiological Society',
    year: 2010,
    url: 'https://pubmed.ncbi.nlm.nih.gov/20086073/',
  },
  {
    id: 'holden-leloir-2003',
    authors: 'Hazel M. Holden, Ivan Rayment, James B. Thoden',
    title: 'Structure and function of enzymes of the Leloir pathway for galactose metabolism. Journal of Biological Chemistry, 278(45):43885-43888',
    organization: 'American Society for Biochemistry and Molecular Biology',
    year: 2003,
    url: 'https://pubmed.ncbi.nlm.nih.gov/12923184/',
  },
  {
    id: 'hart-oglcna-2019',
    authors: 'Gerald W. Hart',
    title: 'Nutrient regulation of signaling and transcription by O-GlcNAcylation. Cell, 177(1):119-129',
    organization: 'Elsevier / Cell Press',
    year: 2019,
    url: 'https://pubmed.ncbi.nlm.nih.gov/30901533/',
  },
]

const alternativeSugars3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Non-Glucose Sugar Metabolism & Pathology',
    '৩ডি বহু-অঙ্গীয় বিকল্প শর্করা বিপাক ও প্যাথলজির মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and explore coordinate space to trace how human organ systems process fructose, galactose, polyol sorbitol, and hexosamine nutrient flux.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে মানবদেহের অঙ্গগুলো ফ্রুক্টোজ, গ্যালাক্টোজ, সর্বিটল এবং হেক্সোসামিন শর্করা প্রক্রিয়া করে।'
  ),
  description: l(
    'Dietary monosaccharides diverge sharply in tissue clearance: the liver extracts >70% of ingested fructose via high-affinity Ketohexokinase (KHK-C), bypassing the PFK-1 control valve to drive rapid lipogenesis and uric acid production; the lens and peripheral nerves lack sorbitol dehydrogenase, predisposing them to diabetic cataract and neuropathy via osmotic polyol accumulation; while the mammary gland harnesses galactose for lactose biogenesis.',
    'বিভিন্ন শর্করা অঙ্গভেদে ভিন্ন ভিন্ন উপায়ে পরিপাক হয়: যকৃৎ ৭০%-এরও বেশি ফ্রুক্টোজ গ্রহণ করে এবং পিএফকে-১ কপাটিকা এড়িয়ে সরাসরি চর্বি ও ইউরিক অ্যাসিড তৈরি করে; চোখের লেন্স ও প্রান্তীয় স্নায়ুতে সর্বিটল ডিহাইড্রোজিনেজ না থাকায় ডায়াবেটিসে পানি জমে ছানি ও স্নায়ুক্ষয় ঘটে; আর স্তনগ্রন্থিতে গ্যালাক্টোজ দুধের ল্যাকটোজ তৈরিতে ব্যবহৃত হয়।'
  ),
  organs: [
    {
      id: 'organ-liver-fructose',
      name: l('Liver (Unregulated Fructolysis, Lipogenesis & Hyperuricemia)', 'যকৃৎ (অনিয়ন্ত্রিত ফ্রুক্টোজ ভাঙন, চর্বি তৈরি ও ইউরিক অ্যাসিড বৃদ্ধি)'),
      latinName: 'Hepar',
      system: l('Hepatobiliary & Metabolic Hub', 'যকৃৎ-পিত্ত ও বিপাকীয় কেন্দ্র'),
      cavity: l('Right Upper Abdominal Quadrant', 'ডান ঊর্ধ্ব উদর গহ্বর'),
      position3D: { x: 12, y: 200, z: 0 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'Expresses Ketohexokinase C (KHK-C / Fructokinase) and Aldolase B. Fructokinase phosphorylates fructose to fructose-1-P with zero allosteric feedback, consuming hepatic ATP at astronomical rates.',
        'ফ্রুক্টোকাইনেজ (KHK-C) এবং অ্যালডোলেজ বি ধারণ করে। ফ্রুক্টোকাইনেজ কোনো বাধা ছাড়াই ফ্রুক্টোজকে ফসফরাইলেট করে অতি দ্রুত যকৃতের এটিপি ক্ষয় করে।'
      ),
      spatialRelations: l(
        'Receives ingested dietary fructose directly via the portal vein from the small intestine, absorbing almost the entirety of dietary fructose on first pass.',
        'পোর্টাল শিরার মাধ্যমে অন্ত্র থেকে সরাসরি ফ্রুক্টোজ গ্রহণ করে এবং প্রথম সংবহনেই সিংহভাগ ফ্রুক্টোজ শরীর থেকে সরিয়ে ফেলে।'
      ),
      physiology: l(
        'Fructose bypasses the master glycolytic checkpoint PFK-1; trioses flow unrestrained into de novo lipogenesis (producing fatty liver / MASLD) while ATP depletion stimulates AMP deaminase, generating excess uric acid and clinical gout.',
        'ফ্রুক্টোজ গ্লাইকোলাইসিসের প্রধান নিয়ন্ত্রক পিএফকে-১-কে বাইপাস করে সরাসরি চর্বি তৈরি করে ফ্যাটি লিভার সৃষ্টি করে; এবং এটিপি ক্ষয়ের কারণে ইউরিক অ্যাসিড বাড়িয়ে গেঁটেবাত বা গাউট তৈরি করে।'
      ),
      nutritionConnection: l(
        'High-fructose corn syrup (HFCS) and sucrose overconsumption induce rapid hepatic steatosis and visceral adiposity without triggering insulin or leptin satiety cascades.',
        'মিষ্টি খাবার ও কোমল পানীয়ের অতিরিক্ত ফ্রুক্টোজ তৃপ্তির হরমোন ক্ষরণ না করেই দ্রুত ফ্যাটি লিভার ও পেটের চর্বি বৃদ্ধি করে।'
      ),
      clinicalSignificance: l(
        'Hereditary Fructose Intolerance (Aldolase B deficiency) causes trapping of inorganic phosphate as toxic F-1-P, inducing profound hypoglycemia and liver failure upon fruit ingestion.',
        'বংশগত ফ্রুক্টোজ ইনটলারেন্সে অ্যালডোলেজ বি নষ্ট থাকায় বিষাক্ত ফ্রুক্টোজ-১-P জমে গিয়ে মারাত্মক হাইপোগ্লাইসেমিয়া ও লিভার ফেইলিউর ঘটায়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-lens-polyol',
      name: l('Eye Lens & Peripheral Nerves (Polyol Sorbitol Osmotic Damage)', 'চোখের লেন্স ও প্রান্তীয় স্নায়ু (সর্বিটলজনিত অভিস্রবণিক ক্ষতি)'),
      latinName: 'Lens Crystalline et Nervi',
      system: l('Sensory & Peripheral Nervous System', 'সংবেদী ও প্রান্তীয় স্নায়ুতন্ত্র'),
      cavity: l('Orbital Cavity & Peripheral Pathways', 'অক্ষিকোটর ও প্রান্তীয় পথ'),
      position3D: { x: 0, y: 300, z: 12 },
      color: '#0284c7',
      highlightColor: '#38bdf8',
      shapeType: 'brain',
      description: l(
        'Contains Aldose Reductase (converting glucose to sorbitol, consuming NADPH) but has virtually ZERO Sorbitol Dehydrogenase activity. Trapped impermeable sorbitol draws water osmotically.',
        'অ্যালডোজ রিডাক্টেজ ধারণ করে যা গ্লুকোজকে সর্বিটলে পরিণত করে; কিন্তু এতে সর্বিটল ডিহাইড্রোজিনেজ না থাকায় বিষাক্ত সর্বিটল বের হতে না পেরে পানি টেনে কোষ ফুলিয়ে দেয়।'
      ),
      spatialRelations: l(
        'The avascular crystalline lens relies on aqueous humor nutrient diffusion; Schwann cells insulate long peripheral motor and sensory nerve axons in extremities.',
        'রক্তনালীহীন লেন্স অ্যাকুয়াস হিউমারের মাধ্যমে পুষ্টি পায়; অন্যদিকে সোয়ান কোষগুলো হাত ও পায়ের স্নায়ুগুলোকে রক্ষা করে।'
      ),
      physiology: l(
        'Under chronic hyperglycemia, hexokinase saturates and excess glucose enters the polyol pathway. Sorbitol accumulates, depleting intracellular myo-inositol and compromising Na+/K+-ATPase.',
        'রক্তে দীর্ঘস্থায়ী অতিরিক্ত গ্লুকোজ থাকলে সর্বিটল জমে কোষীয় মায়ো-ইনোসিটল হ্রাস করে এবং সোডিয়াম-পটাশিয়াম পাম্পের কার্যক্ষমতা নষ্ট করে দেয়।'
      ),
      nutritionConnection: l(
        'Consumption of NADPH by aldose reductase deprives glutathione reductase of reducing equivalents, causing secondary oxidative lens crystallin aggregation.',
        'অ্যালডোজ রিডাক্টেজ সব NADPH খরচ করে ফেললে লেন্সের প্রোটিনগুলো জারণ চাপে নষ্ট হয়ে অস্বচ্ছ হয়ে পড়ে।'
      ),
      clinicalSignificance: l(
        'Primary cause of diabetic cataracts and diabetic peripheral neuropathy ("stocking-glove" sensory loss); aldose reductase inhibitors aim to prevent this tissue injury.',
        'ডায়াবেটিসের রোগীদের চোখের ছানি এবং হাত-পায়ের স্নায়ু অবশ হয়ে যাওয়ার (ডায়াবেটিক নিউরোপ্যাথি) অন্যতম প্রধান আণবিক কারণ।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-mammary-galactose',
      name: l('Lactating Mammary Glands (Lactose Biosynthesis Engine)', 'দুগ্ধদানকারী স্তনগ্রন্থি (ল্যাকটোজ সংশ্লেষণ ইঞ্জিন)'),
      latinName: 'Glandula Mammaria',
      system: l('Reproductive & Exocrine System', 'প্রজনন ও বহিঃক্ষরা গ্রন্থিতন্ত্র'),
      cavity: l('Anterior Thoracic Wall', 'সম্মুখ বক্ষ প্রাচীর'),
      position3D: { x: -16, y: 250, z: 12 },
      color: '#ec4899',
      highlightColor: '#f472b6',
      shapeType: 'lungs',
      description: l(
        'Expresses high levels of UDP-Galactose 4-Epimerase (GALE) and the unique enzyme complex Lactose Synthase (beta-1,4-galactosyltransferase complexed with hormonally induced alpha-lactalbumin).',
        'উচ্চ মাত্রায় GALE এনজাইম এবং ল্যাকটোজ সিন্থেজ কমপ্লেক্স ধারণ করে যা প্রোলেকটিনের প্রভাবে সক্রিয় হয়ে দুগ্ধ শর্করা ল্যাকটোজ তৈরি করে।'
      ),
      spatialRelations: l(
        'Lobuloalveolar tubuloacinar architecture situated within the superficial fascia of the anterior chest wall over pectoralis major.',
        'বক্ষ প্রাচীরের পেশীর ওপর অবস্থিত গ্রন্থিময় কাঠামো যা দুগ্ধ উৎপাদন ও নিঃসরণের জন্য বিশেষায়িত।'
      ),
      physiology: l(
        'Condenses UDP-galactose with free D-glucose in the Golgi lumen to synthesize lactose: UDP-galactose + Glucose -> Lactose + UDP. Alpha-lactalbumin lowers the Km for glucose 1,000-fold.',
        'গলজি বডির ভেতরে UDP-গ্যালাক্টোজের সাথে গ্লুকোজ যুক্ত করে ল্যাকটোজ তৈরি করে। আলফা-ল্যাকটঅ্যালবুমিন গ্লুকোজের প্রতি এনজাইমের আসক্তি ১,০০০ গুণ বাড়িয়ে দেয়।'
      ),
      nutritionConnection: l(
        'Mothers do not require dietary galactose to synthesize milk: the epimerase (GALE) synthesizes all required UDP-galactose endogenously from UDP-glucose.',
        'মায়েদের দুধ তৈরির জন্য খাদ্য থেকে গ্যালাক্টোজ খাওয়ার প্রয়োজন নেই; শরীর নিজেই গ্লুকোজ থেকে প্রয়োজনীয় গ্যালাক্টোজ তৈরি করে নিতে পারে।'
      ),
      clinicalSignificance: l(
        'In Classical Galactosemia (GALT deficiency), dietary galactose causes accumulation of galactose-1-P and galactitol, causing neonatal cataracts, jaundice, and E. coli sepsis.',
        'ক্লাসিক্যাল গ্যালাক্টোসেমিয়ায় দুধে থাকা গ্যালাক্টোজ ভাঙতে না পেরে বিষাক্ত হয়ে শিশুর চোখে ছানি, লিভার নষ্ট এবং মারাত্মক সেপসিস ঘটায়।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-kidneys-glucuronate',
      name: l('Kidneys & Cellular Nucleus (Hexosamine Sensing & Glucuronate Detoxification)', 'বৃক্ক ও কোষকেন্দ্র (হেক্সোসামিন সেন্সর ও গ্লুকিউরোনেট বিষমুক্তি)'),
      latinName: 'Renes et Nuclei',
      system: l('Metabolic Sensing & Excretory System', 'বিপাকীয় সংবেদী ও রেচন তন্ত্র'),
      cavity: l('Retroperitoneum & Intracellular Matrix', 'রেট্রোপেরিটোনিয়াম ও আন্তঃকোষীয় ম্যাট্রিক্স'),
      position3D: { x: -16, y: 175, z: -8 },
      color: '#8b5cf6',
      highlightColor: '#a78bfa',
      shapeType: 'kidneys',
      description: l(
        'Runs the Hexosamine Biosynthetic Pathway (HBP) generating UDP-GlcNAc for O-GlcNAcylation, the universal nutrient sensor. Also produces UDP-glucuronate for detoxification and glycosaminoglycan synthesis.',
        'হেক্সোসামিন পথের মাধ্যমে UDP-GlcNAc তৈরি করে যা কোষের সামগ্রিক পুষ্টির মাত্রা শনাক্ত করে। পাশাপাশি বিষমুক্তকরণ ও তরুণাস্থি তৈরির জন্য UDP-গ্লুকিউরোনেট উৎপন্ন করে।'
      ),
      spatialRelations: l(
        'Filters blood and clears water-soluble glucuronide conjugates into the urine; nuclear OGT modifies transcription factors throughout all tissues.',
        'রক্ত ফিল্টার করে বিভিন্ন বিষাক্ত পদার্থের গ্লুকিউরোনাইড যৌগ প্রস্রাবের মাধ্যমে বের করে দেয় এবং জিন প্রকাশ নিয়ন্ত্রণ করে।'
      ),
      physiology: l(
        'Glutamine:fructose-6-phosphate amidotransferase (GFAT) shunts 2–5% of glucose into UDP-GlcNAc. O-GlcNAc Transferase (OGT) attaches single GlcNAc sugars to serine/threonine residues.',
        'কোষের ২-৫% গ্লুকোজ GFAT এনজাইমের মাধ্যমে হেক্সোসামিন পথে যায়; যা পুষ্টি প্রাচুর্যের সংকেত হিসেবে প্রোটিনে যুক্ত হয়ে ইনসুলিন সংবেদনশীলতা নিয়ন্ত্রণ করে।'
      ),
      nutritionConnection: l(
        'Integrates all four macronutrients: glucose (F-6-P), amino acid (glutamine), lipid (acetyl-CoA), and nucleotide (UTP) are all required to build UDP-GlcNAc.',
        'চারটি প্রধান পুষ্টি উপাদানের মিলনমেলা: গ্লুকোজ, অ্যামিনো অ্যাসিড, চর্বি এবং নিউক্লিওটাইড—সবগুলো মিলে একটি UDP-GlcNAc অণু তৈরি হয়।'
      ),
      clinicalSignificance: l(
        'Chronic hyper-O-GlcNAcylation under nutrient excess impairs insulin signaling in kidney podocytes and vascular endothelium, driving diabetic nephropathy.',
        'পুষ্টির আধিক্যে অতিরিক্ত ও-গ্লুকন্যাকাইলেশন কিডনির ছাঁকন কোষগুলোকে ক্ষতিগ্রস্ত করে ডায়াবেটিক নেফ্রোপ্যাথি ও কিডনি ফেইলিউরের দিকে ঠেলে দেয়।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism22AlternativeSugarsLesson: LessonTopic = {
  id: 'topic.metabolism.fructose-galactose-alternative-sugars',
  slug: 'fructose-galactose-alternative-sugars',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '22 · Fructose, Galactose & Alternative Sugar Metabolism',
    '২২ · ফ্রুক্টোজ, গ্যালাক্টোজ ও বিকল্প শর্করা বিপাক'
  ),
  summary: l(
    'Biochemical routing of non-glucose monosaccharides: hepatic fructolysis bypassing phosphofructokinase-1 (KHK-C, Aldolase B, Triokinase), energetic consequences of hepatic ATP depletion and hyperuricemic gout, the polyol sorbitol pathway in diabetic cataractogenesis, galactose Leloir pathway, lactose biosynthesis in mammary glands, and the Hexosamine Biosynthetic Pathway (HBP) as a master cellular nutrient sensor.',
    'অ-গ্লুকোজ মনোস্যাকারাইডের জৈবরাসায়নিক রূপান্তর: পিএফকে-১ বাইপাসকারী যকৃতের ফ্রুক্টোজ ভাঙন (KHK-C, অ্যালডোলেজ বি, ট্রায়োকাইনেজ), এটিপি হ্রাস ও ইউরিক অ্যাসিড বৃদ্ধির প্যাথলজি, ডায়াবেটিক ছানি তৈরিতে সর্বিটল পলিওল পথ, গ্যালাক্টোজ লেলোয়ার পথ, স্তনগ্রন্থিতে ল্যাকটোজ সংশ্লেষণ এবং কোষের পুষ্টি সংবেদক হিসেবে হেক্সোসামিন বায়োসিন্থেটিক পথ (HBP)।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Contrast hepatic fructolysis with classical glycolysis, explaining why ketohexokinase (KHK-C) phosphorylation bypasses phosphofructokinase-1 (PFK-1) regulation and leads directly to accelerated de novo lipogenesis, rapid ATP depletion, and hyperuricemia.',
      'চিরায়ত গ্লাইকোলাইসিসের সাথে যকৃতের ফ্রুক্টোজ ভাঙনের পার্থক্য ব্যাখ্যা করা এবং বিশ্লেষণ করা কেন কিটোহেক্সোকাইনেজ (KHK-C) ফসফরাইলেশন পিএফকে-১ নিয়ন্ত্রণকে এড়িয়ে গিয়ে সরাসরি অতিরিক্ত চর্বি তৈরি, দ্রুত এটিপি ক্ষয় এবং রক্তে ইউরিক অ্যাসিড বৃদ্ধি ঘটায়।'
    ),
    l(
      'Detail the enzymatic reactions of the polyol pathway (aldose reductase and sorbitol dehydrogenase), evaluating the molecular mechanism of osmotic cellular damage and cataract formation in lens and Schwann cells during chronic diabetic hyperglycemia.',
      'পলিওল পথের এনজাইম বিক্রিয়াসমূহ (অ্যালডোজ রিডাক্টেজ ও সর্বিটল ডিহাইড্রোজিনেজ) বিস্তারিতভাবে বিশ্লেষণ করা এবং ডায়াবেটিসে চোখের লেন্স ও সোয়ান কোষে সর্বিটল জমে অভিস্রবণিক স্ফীতি ও ছানি সৃষ্টির আণবিক কারণ মূল্যায়ন করা।'
    ),
    l(
      'Delineate the galactose Leloir pathway (GALK, GALT, GALE), lactose synthesis in the lactating mammary gland, and the Hexosamine Biosynthetic Pathway (HBP) coordinating O-GlcNAcylation as a multi-nutrient cellular sensor.',
      'গ্যালাক্টোজের লেলোয়ার পথ (GALK, GALT, GALE), স্তনগ্রন্থিতে ল্যাকটোজ তৈরি এবং কোষীয় পুষ্টি সংবেদক হিসেবে হেক্সোসামিন বায়োসিন্থেটিক পথ (HBP) ও ও-গ্লুকন্যাকাইলেশন নিয়ন্ত্রণ পুঙ্খানুপুঙ্খভাবে অনুধাবন করা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  references: sugarsRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch14', 'harpers-biochem-32e-ch20'],
    structure: ['tappy-fructose-2010', 'harpers-biochem-32e-ch20'],
    mechanism: ['tappy-fructose-2010', 'lehninger-biochem-8e-ch14'],
    integration: ['holden-leloir-2003', 'hart-oglcna-2019'],
    practice: ['tappy-fructose-2010', 'holden-leloir-2003'],
    takeaways: ['lehninger-biochem-8e-ch14', 'hart-oglcna-2019'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Divergent Fates of Dietary Monosaccharides', '১. খাদ্যস্থ মনোস্যাকারাইডসমূহের ভিন্ন পরিণতি'), sectionId: 'introduction' },
      { id: 'sec-fructose', label: l('2. Hepatic Fructose Metabolism & The PFK-1 Bypass Valve', '২. যকৃতের ফ্রুক্টোজ বিপাক ও পিএফকে-১ বাইপাস কপাটিকা'), sectionId: 'structure' },
      { id: 'sec-polyol', label: l('3. The Polyol Sorbitol Pathway & Diabetic Complications', '৩. পলিওল সর্বিটল পথ ও ডায়াবেটিসের জটিলতাসমূহ'), sectionId: 'mechanism' },
      { id: 'sec-galactose', label: l('4. Galactose Leloir Pathway & Mammary Lactose Synthesis', '৪. গ্যালাক্টোজ লেলোয়ার পথ ও দুগ্ধ ল্যাকটোজ সংশ্লেষ'), sectionId: 'integration' },
      { id: 'sec-hbp', label: l('5. The Hexosamine Biosynthetic Pathway (HBP) Nutrient Sensor', '৫. হেক্সোসামিন পথ ও সামগ্রিক পুষ্টি সংবেদন'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Clinical Inborn Errors of Sugar Metabolism & High-Yield Summary', '৬. শর্করার জন্মগত রোগ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Ketohexokinase C (KHK-C / Fructokinase)', 'কিটোহেক্সোকাইনেজ সি (KHK-C / ফ্রুক্টোকাইনেজ)'),
        definition: l(
          'A high-affinity, high-capacity hepatic enzyme that phosphorylates D-fructose to fructose-1-phosphate using ATP; lacks feedback inhibition by its product, causing massive hepatic phosphate trapping and ATP depletion during high fructose intake.',
          'যকৃতের একটি শক্তিশালী এনজাইম যা এটিপি ব্যবহার করে ফ্রুক্টোজকে ফ্রুক্টোজ-১-ফসফেটে পরিণত করে; উৎপাদ দ্বারা বাধাপ্রাপ্ত না হওয়ায় অতিরিক্ত ফ্রুক্টোজে এটি দ্রুত যকৃতের এটিপি ক্ষয় করে।'
        ),
      },
      {
        term: l('Aldolase B (Fructose-1-Phosphate Aldolase)', 'অ্যালডোলেজ বি (ফ্রুক্টোজ-১-ফসফেট অ্যালডোলেজ)'),
        definition: l(
          'A liver and kidney enzyme that cleaves fructose-1-phosphate into dihydroxyacetone phosphate (DHAP) and D-glyceraldehyde; defective in Hereditary Fructose Intolerance (HFI), leading to toxic F-1-P accumulation.',
          'যকৃৎ ও বৃক্কের এনজাইম যা ফ্রুক্টোজ-১-ফসফেটকে ভেঙে DHAP এবং গ্লিসার্যালডিহাইড তৈরি করে; বংশগত ফ্রুক্টোজ ইনটলারেন্সে এই এনজাইম নষ্ট থাকে।'
        ),
      },
      {
        term: l('Aldose Reductase', 'অ্যালডোজ রিডাক্টেজ'),
        definition: l(
          'The first enzyme of the polyol pathway, reducing glucose to sorbitol using NADPH; in tissues lacking sorbitol dehydrogenase (lens, Schwann cells, pericytes), sorbitol accumulation causes osmotic cell swelling and diabetic microvascular damage.',
          'পলিওল পথের প্রথম এনজাইম যা NADPH খরচ করে গ্লুকোজকে সর্বিটলে বিজারিত করে; চোখের লেন্স ও স্নায়ুতে সর্বিটল জমে ডায়াবেটিক ছানি ও স্নায়ুক্ষয় ঘটায়।'
        ),
      },
      {
        term: l('O-GlcNAcylation', 'ও-গ্লুকন্যাকাইলেশন (O-GlcNAcylation)'),
        definition: l(
          'A dynamic post-translational modification where O-GlcNAc Transferase (OGT) transfers a single N-acetylglucosamine moiety from UDP-GlcNAc onto serine/threonine residues of nuclear and cytosolic proteins, acting as a master cellular nutrient sensor.',
          'একটি গুরুত্বপূর্ণ প্রোটিন রূপান্তর যেখানে OGT এনজাইম UDP-GlcNAc থেকে একটি গ্লুকোসামিন অণু প্রোটিনের সেরিন বা থ্রিওনিনে যুক্ত করে সামগ্রিক পুষ্টির মাত্রা শনাক্ত করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Biochemical Mechanism of Fructose-Induced Hyperuricemia and Gout', 'ফ্রুক্টোজ-উদ্দীপ্ত ইউরিক অ্যাসিড বৃদ্ধি ও গেঁটেবাতের আণবিক কারণ'),
        steps: [
          l(
            'Hepatic ketohexokinase (KHK-C) has an ultra-low Km for fructose (0.5 mM) and very high Vmax, phosphorylating fructose to fructose-1-phosphate (F-1-P) far faster than Aldolase B can cleave it.',
            'যকৃতের কিটোহেক্সোকাইনেজ (KHK-C) অত্যন্ত দ্রুতগতিতে ফ্রুক্টোজকে ফ্রুক্টোজ-১-ফসফেটে রূপান্তরিত করে, যা পরবর্তী এনজাইম অ্যালডোলেজ বি ভাঙার গতির চেয়ে অনেক বেশি।'
          ),
          l(
            'Each mole of fructose phosphorylated consumes 1 mole of ATP: Fructose + ATP -> Fructose-1-P + ADP. Because F-1-P accumulates, inorganic phosphate (Pi) becomes trapped in organic ester form, dropping intrahepatic free Pi levels.',
            'প্রতি অণু ফ্রুক্টোজ ফসফরাইলেশনে ১টি এটিপি খরচ হয়। F-1-P জমে যাওয়ায় অজৈব ফসফেট (Pi) আটকে যায় এবং যকৃতে মুক্ত ফসফেটের মাত্রা হঠাৎ শূন্যের কোঠায় নেমে আসে।'
          ),
          l(
            'The sudden drop in Pi and ATP prevents ADP re-phosphorylation by ATP synthase. Adenylate kinase (myokinase) converts the surging ADP into AMP: 2 ADP <-> ATP + AMP.',
            'ফসফেট ও এটিপির অভাবে এডিপি আর এটিপিতে ফিরতে পারে না। অ্যাডেনাইলেট কাইনেজ অতিরিক্ত এডিপি-কে এএমপিতে (AMP) রূপান্তর করে: ২ ADP <-> ATP + AMP।'
          ),
          l(
            'Free inorganic phosphate is the physiological allosteric inhibitor of AMP Deaminase. Depletion of Pi releases this inhibition, triggering rapid deamination of AMP to IMP, which cascades through the purine degradation pathway directly into uric acid.',
            'স্বাভাবিক অবস্থায় অজৈব ফসফেট এএমপি ডিমাইনেজ এনজাইমকে শান্ত রাখে। ফসফেট কমে গেলে এনজাইমটি অনিয়ন্ত্রিত হয়ে পড়ে এবং সমস্ত এএমপি-কে ভেঙে বিপুল পরিমাণ ইউরিক অ্যাসিড তৈরি করে।'
          ),
        ],
        conclusion: l(
          'Acute fructose consumption rapidly depletes hepatic ATP and drives an explosive surge in systemic uric acid, providing the mechanistic link between high-fructose diets, metabolic syndrome, and acute gouty arthritis.',
          'অতিরিক্ত ফ্রুক্টোজ গ্রহণ মুহূর্তের মধ্যে যকৃতের এটিপি ক্ষয় করে রক্তে ইউরিক অ্যাসিডের বন্যা বইয়ে দেয়, যা আধুনিক খাদ্যাভ্যাস, মেটাবলিক সিন্ড্রোম এবং তীব্র গেঁটেবাতের সরাসরি সংযোগ ব্যাখ্যা করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does dietary fructose stimulate hepatic de novo lipogenesis far more aggressively than an equimolar quantity of glucose?',
          'সমপরিমাণ গ্লুকোজের তুলনায় খাদ্যস্থ ফ্রুক্টোজ কেন যকৃতে অনেক বেশি তীব্র গতিতে চর্বি তৈরি বা লিপোজেনেসিস ঘটায়?'
        ),
        answer: l(
          'Glucose enters glycolysis upstream of phosphofructokinase-1 (PFK-1), which is tightly inhibited by cellular ATP and citrate; when liver energy charge is high, glucose flux into pyruvate and fatty acids is halted. In contrast, fructose is cleaved by Aldolase B into trioses (DHAP and glyceraldehyde) that enter glycolysis downstream of PFK-1. Fructose carbon bypasses this allosteric checkpoint entirely, flooding unregulated triose phosphates directly into acetyl-CoA and fatty acid synthesis regardless of energy charge.',
          'গ্লুকোজ গ্লাইকোলাইসিসে ঢোকার পর প্রধান নিয়ন্ত্রণকারী এনজাইম পিএফকে-১ দ্বারা নিয়ন্ত্রিত হয়; কোষে শক্তি বেশি থাকলে পিএফকে-১ গ্লুকোজ থেকে চর্বি তৈরি বন্ধ করে দেয়। পক্ষান্তরে ফ্রুক্টোজ ভেঙে সরাসরি তিন-কার্বনের ট্রায়োজ হয়ে পিএফকে-১-এর অনেক নিচে গ্লাইকোলাইসিসে প্রবেশ করে। ফলে কোষের শক্তি বেশি থাকলেও কোনো বাধা না পেয়ে সমস্ত ফ্রুক্টোজ সরাসরি অতিরিক্ত ফ্যাটি অ্যাসিড ও ফ্যাটি লিভার তৈরিতে ব্যবহৃত হয়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: alternativeSugars3DData,
  interactiveDiagram: {
    id: 'alternative-sugars-interactive-hub',
    title: l('Interactive Hexose Diversity & Non-Glucose Sugar Engine', 'ইন্টারেক্টিভ হেক্সোজ বৈচিত্র্য ও অ-গ্লুকোজ শর্করা ইঞ্জিন'),
    disclaimer: l(
      'Carbohydrate divergence simulation: select sugar nodes to trace hepatic fructolysis bypass mechanisms, polyol sorbitol accumulation, galactose Leloir cycling, and hexosamine nutrient sensing.',
      'শর্করা রূপান্তর সিমুলেশন: বিভিন্ন নোড নির্বাচন করে যকৃতে ফ্রুক্টোজ বাইপাস, সর্বিটল সঞ্চয়, গ্যালাক্টোজ চক্র এবং হেক্সোসামিন পুষ্টি সংবেদনের গতিবিদ্যা পর্যবেক্ষণ করুন।'
    ),
    description: l(
      'Human metabolism incorporates a diverse menu of hexoses beyond D-glucose. This interactive engine maps the biochemical pathways of fructose, galactose, sorbitol, and amino sugars, detailing the clinical consequences of metabolic bypass and enzyme blocks.',
      'মানবদেহের বিপাক গ্লুকোজের বাইরেও বিভিন্ন হেক্সোজ ব্যবহার করে। এই ইন্টারঅ্যাকটিভ ইঞ্জিন ফ্রুক্টোজ, গ্যালাক্টোজ, সর্বিটল এবং অ্যামিনো শর্করার সম্পূর্ণ গতিপথ ও তাদের সংশ্লিষ্ট রোগসমূহ প্রদর্শন করে।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-fructokinase-step',
        label: l('1. Ketohexokinase (KHK-C) & The Unregulated Fructose Gateway', '১. কিটোহেক্সোকাইনেজ (KHK-C) ও অনিয়ন্ত্রিত ফ্রুক্টোজ গেটওয়ে'),
        description: l(
          'Fructose + ATP -> Fructose-1-Phosphate + ADP. Operates with ultra-high affinity and velocity in the liver, with zero allosteric product inhibition.',
          'ফ্রুক্টোজ + ATP -> ফ্রুক্টোজ-১-ফসফেট + ADP। যকৃতে কোনো বাধা ছাড়াই চরম গতিতে কাজ করে প্রচুর এটিপি খরচ করে।'
        ),
        details: l(
          'Rapidly traps hepatic phosphate, depleting ATP and driving purine degradation into uric acid. Splicing variant KHK-A has low affinity; KHK-C is the pathogenic hepatic driver.',
          'যকৃতে অজৈব ফসফেট আটকে ফেলে এটিপি ধ্বংস করে এবং ইউরিক অ্যাসিড তৈরি করে। এর অতিরিক্ত কাজই ফ্যাটি লিভারের মূল সূচনা।'
        ),
        sectionId: 'structure',
        color: '#d97706',
      },
      {
        id: 'node-aldolase-b-split',
        label: l('2. Aldolase B Cleavage & Triokinase Conversion', '২. অ্যালডোলেজ বি বিভাজন ও ট্রায়োকাইনেজ রূপান্তর'),
        description: l(
          'Fructose-1-P -> DHAP (3C) + D-Glyceraldehyde (3C). Glyceraldehyde is phosphorylated by Triokinase to GA-3-P entering glycolysis.',
          'ফ্রুক্টোজ-১-P ভেঙে DHAP (৩C) ও গ্লিসার্যালডিহাইড (৩C) হয়। ট্রায়োকাইনেজ একে GA-৩-P তে পরিণত করে সরাসরি গ্লাইকোলাইসিসে পাঠায়।'
        ),
        details: l(
          'Enters glycolysis distal to PFK-1, completely escaping energy-charge feedback inhibition. Defective in Hereditary Fructose Intolerance (HFI), causing toxic F-1-P accumulation.',
          'পিএফকে-১ এর নিচে যুক্ত হওয়ায় কোনো বাধার মুখে পড়ে না। বংশগত ফ্রুক্টোজ ইনটলারেন্সে অ্যালডোলেজ বি নষ্ট থাকায় বিষাক্ত F-1-P জমে লিভার নষ্ট হয়।'
        ),
        sectionId: 'structure',
        color: '#ea580c',
      },
      {
        id: 'node-polyol-sorbitol',
        label: l('3. Polyol Pathway: Aldose Reductase & Sorbitol Accumulation', '৩. পলিওল পথ: অ্যালডোজ রিডাক্টেজ ও সর্বিটল সঞ্চয়'),
        description: l(
          'Glucose + NADPH -> Sorbitol + NADP+ (via Aldose Reductase); Sorbitol + NAD+ -> Fructose + NADH (via Sorbitol Dehydrogenase).',
          'গ্লুকোজ + NADPH -> সর্বিটল + NADP+; পরবর্তীতে সর্বিটল + NAD+ -> ফ্রুক্টোজ + NADH। চোখের লেন্স ও স্নায়ুতে দ্বিতীয় এনজাইমটি থাকে না।'
        ),
        details: l(
          'In lens, Schwann cells, and kidneys, sorbitol dehydrogenase activity is nearly zero. Trapped impermeable sorbitol exerts osmotic stress, precipitating diabetic cataracts and neuropathy.',
          'চোখের লেন্সে সর্বিটল ভাঙতে না পেরে পানি টেনে কোষ ফুলিয়ে দেয়, যা ডায়াবেটিসের রোগীদের চোখের ছানি ও স্নায়ু অবশ হওয়ার মূল কারণ।'
        ),
        sectionId: 'mechanism',
        color: '#2563eb',
      },
      {
        id: 'node-leloir-galactose',
        label: l('4. Galactose Leloir Pathway: GALK, GALT & GALE Shunt', '৪. গ্যালাক্টোজ লেলোয়ার পথ: GALK, GALT ও GALE শান্ট'),
        description: l(
          'Galactose phosphorylated by GALK to Gal-1-P; GALT exchanges it with UDP-Glucose to yield UDP-Galactose and Glucose-1-P; GALE epimerizes UDP-hexoses.',
          'GALK গ্যালাক্টোজকে Gal-১-P বানায়; GALT একে UDP-গ্লুকোজের সাথে পরিবর্তন করে UDP-গ্যালাক্টোজ ও G-১-P বানায়; GALE এদের পারস্পরিক পরিবর্তন ঘটায়।'
        ),
        details: l(
          'Classical Galactosemia (GALT deficiency) causes accumulation of Gal-1-P and toxic galactitol (via aldose reductase), inducing neonatal cataracts, liver failure, and cognitive delays.',
          'ক্লাসিক্যাল গ্যালাক্টোসেমিয়ায় GALT নষ্ট থাকায় বিষাক্ত গ্যালাকটিটল জমে নবজাতকের চোখে ছানি, জন্ডিস এবং মারাত্মক লিভারের ক্ষতি ঘটায়।'
        ),
        sectionId: 'integration',
        color: '#059669',
      },
      {
        id: 'node-lactose-synthase',
        label: l('5. Lactose Synthase Complex & Mammary Secretion', '৫. ল্যাকটোজ সিন্থেজ কমপ্লেক্স ও দুগ্ধ নিঃসরণ'),
        description: l(
          'UDP-Galactose + D-Glucose -> Lactose + UDP in Golgi lumen. Catalyzed by beta-1,4-galactosyltransferase complexed with alpha-lactalbumin.',
          'গলজি বডিতে UDP-গ্যালাক্টোজ ও গ্লুকোজ মিলে দুধের শর্করা ল্যাকটোজ তৈরি করে। এটি আলফা-ল্যাকটঅ্যালবুমিন প্রোটিনের উপস্থিতিতে কাজ করে।'
        ),
        details: l(
          'Hormonally induced by prolactin during lactation. Alpha-lactalbumin lowers the Km of galactosyltransferase for glucose by 1,000-fold, allowing lactose synthesis at physiological glucose levels.',
          'প্রোলেকটিন হরমোনের প্রভাবে স্তনগ্রন্থিতে তৈরি হয়। আলফা-ল্যাকটঅ্যালবুমিন গ্লুকোজের প্রতি এনজাইমের আসক্তি ১,০০০ গুণ বাড়িয়ে দেয়।'
        ),
        sectionId: 'integration',
        color: '#ec4899',
      },
      {
        id: 'node-hexosamine-hbp',
        label: l('6. Hexosamine Biosynthetic Pathway (HBP) & O-GlcNAc Sensing', '৬. হেক্সোসামিন পথ ও ও-গ্লুকন্যাক পুষ্টি সংবেদন'),
        description: l(
          'Fructose-6-P + Glutamine -> Glucosamine-6-P + Glutamate (via GFAT, rate-limiting). Synthesizes UDP-GlcNAc to modify proteins via O-GlcNAcylation.',
          'GFAT এনজাইমের মাধ্যমে ফ্রুক্টোজ-৬-P ও গ্লুটামিন মিলে UDP-GlcNAc তৈরি করে; যা ও-গ্লুকন্যাকাইলেশনের মাধ্যমে প্রোটিন সংবেদন নিয়ন্ত্রণ করে।'
        ),
        details: l(
          'Integrates carbohydrate, amino acid, lipid, and nucleotide status. Chronic hyper-O-GlcNAcylation during overnutrition causes insulin resistance and diabetic complications.',
          'চারটি প্রধান পুষ্টি উপাদানের মিলনমেলা। অতিরিক্ত পুষ্টির উপস্থিতিতে এটি অতিরিক্ত সক্রিয় হয়ে ইনসুলিন রেজিস্ট্যান্স ও কিডনি রোগ ত্বরান্বিত করে।'
        ),
        sectionId: 'practice',
        color: '#8b5cf6',
      },
      {
        id: 'node-glucuronate-pathway',
        label: l('7. Uronic Acid Pathway & Detoxification Conjugation', '৭. ইউরোনিক অ্যাসিড পথ ও বিষমুক্তকরণ কনজুগেশন'),
        description: l(
          'Converts glucose-6-P to UDP-glucuronate, the essential donor for bilirubin glucuronidation, xenobiotic drug clearance, and glycosaminoglycan synthesis.',
          'গ্লুকোজ-৬-P কে UDP-গ্লুকিউরোনেটে পরিণত করে যা বিলিরুবিন নির্গমন, ওষুধের বিষমুক্তি এবং তরুণাস্থির উপাদান তৈরিতে অত্যাবশ্যক।'
        ),
        details: l(
          'Humans carry an evolutionary pseudogene for L-gulonolactone oxidase (GULO), rendering us incapable of synthesizing ascorbic acid (vitamin C) from glucuronate.',
          'মানুষের জিনোমে GULO এনজাইমের জিন অকার্যকর থাকায় মানুষ এই পথ থেকে নিজে ভিটামিন সি তৈরি করতে পারে না এবং খাদ্যের ওপর নির্ভরশীল।'
        ),
        sectionId: 'practice',
        color: '#0891b2',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'Metabolic map showing non-glucose monosaccharide flux: hepatic fructolysis bypassing PFK-1 into de novo lipogenesis, the polyol sorbitol pathway, galactose Leloir conversion, and the hexosamine nutrient sensing shunt.',
      'অ-গ্লুকোজ শর্করার বিপাকীয় মানচিত্র যা পিএফকে-১ বাইপাসকারী ফ্রুক্টোজ ভাঙন ও চর্বি তৈরি, পলিওল সর্বিটল সঞ্চয়, গ্যালাক্টোজ লেলোয়ার চক্র এবং হেক্সোসামিন পুষ্টি সংবেদক পথ প্রদর্শন করে।'
    ),
    steps: [
      l(
        'Step 1: Fructose is phosphorylated by ketohexokinase (KHK-C) to F-1-P, cleaved by Aldolase B into trioses, bypassing the PFK-1 control checkpoint to drive rapid de novo lipogenesis.',
        'ধাপ ১: ফ্রুক্টোজ কিটোহেক্সোকাইনেজ দ্বারা ফসফরাইলেটেড হয়ে অ্যালডোলেজ বি দ্বারা ট্রায়োজে ভাঙে এবং পিএফকে-১ কপাটিকা এড়িয়ে সরাসরি দ্রুত চর্বি তৈরি করে।'
      ),
      l(
        'Step 2: Chronic hyperglycemia forces glucose into the polyol pathway; sorbitol accumulates in lens and Schwann cells lacking sorbitol dehydrogenase, causing osmotic swelling and cataracts.',
        'ধাপ ২: ডায়াবেটিসে অতিরিক্ত গ্লুকোজ পলিওল পথে ঢুকে সর্বিটল তৈরি করে; লেন্সে সর্বিটল ভাঙতে না পেরে পানি টেনে কোষ ফুলিয়ে ছানি ও স্নায়ুক্ষয় সৃষ্টি করে।'
      ),
      l(
        'Step 3: Galactose is converted to glucose-1-P via the Leloir pathway; the hexosamine pathway synthesizes UDP-GlcNAc to coordinate cellular nutrient sensing via O-GlcNAcylation.',
        'ধাপ ৩: গ্যালাক্টোজ লেলোয়ার পথের মাধ্যমে গ্লুকোজ-১-P তে রূপান্তরিত হয়; আর হেক্সোসামিন পথ UDP-GlcNAc তৈরি করে সামগ্রিক পুষ্টির মাত্রা শনাক্ত করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 5-month-old infant is weaned from exclusive breastfeeding and introduced to pureed fruit and table foods containing sucrose. Within 30 minutes of fruit consumption, the infant becomes pale, diaphoretic, lethargic, and experiences a generalized tonic-clonic seizure. Serum glucose is 28 mg/dL. Further testing shows marked hypophosphatemia, elevated liver transaminases, and urinary reducing substances. A diagnosis of Hereditary Fructose Intolerance is confirmed. What is the fundamental enzymatic deficiency, and what biochemical mechanism drives the profound hypoglycemia?',
      'একটি ৫ মাস বয়সী শিশুকে বুকের দুধের পাশাপাশি ফলের পিউরি ও চিনিযুক্ত খাবার দেওয়া শুরু হলো। ফল খাওয়ার ৩০ মিনিটের মধ্যে শিশুটি ফ্যাকাশে হয়ে ঘেমে গেল, নিস্তেজ হয়ে খিঁচুনি শুরু হলো। রক্তে গ্লুকোজ নেমে হলো ২৮ mg/dL। রক্তে ফসফেটের তীব্র পতন এবং প্রস্রাবে রিডিউসিং সুগার পাওয়া গেল। বংশগত ফ্রুক্টোজ ইনটলারেন্স (HFI) নিশ্চিত হলো। এই রোগের মূল এনজাইম ঘাটতি কী এবং তীব্র হাইপোগ্লাইসেমিয়ার কারণ কী?'
    ),
    options: [
      l(
        'Fructokinase deficiency; free fructose accumulates in blood and acts as an allosteric inhibitor of glycogen synthase in muscle.',
        'ফ্রুক্টোকাইনেজের ঘাটতি; রক্তে মুক্ত ফ্রুক্টোজ জমে পেশির গ্লাইকোজেন তৈরি বন্ধ করে দেয়।'
      ),
      l(
        'Aldolase B deficiency; intracellular accumulation of fructose-1-phosphate traps inorganic phosphate, depleting hepatic ATP and allosterically inhibiting both glycogen phosphorylase and fructose-1,6-bisphosphatase.',
        'অ্যালডোলেজ বি-এর ঘাটতি; কোষে ফ্রুক্টোজ-১-ফসফেট জমে অজৈব ফসফেট আটকে ফেলে, যার ফলে যকৃতের এটিপি শেষ হয়ে যায় এবং গ্লাইকোজেন ভাঙন ও গ্লুকোনিওজেনেসিসের প্রধান এনজাইমগুলো সম্পূর্ণ অবরুদ্ধ হয়ে পড়ে।'
      ),
      l(
        'Galactose-1-phosphate uridylyltransferase (GALT) deficiency; UDP-glucose depletion blocks glycogen mobilization in liver.',
        'GALT এনজাইমের ঘাটতি; UDP-গ্লুকোজের অভাবে যকৃতের গ্লাইকোজেন ভাঙতে পারে না।'
      ),
      l(
        'Aldose reductase hyperactivity; rapid sorbitol synthesis starves glycolysis of glucose intermediates.',
        'অ্যালডোজ রিডাক্টেজের অতি-কার্যকারিতা; অতিরিক্ত সর্বিটল তৈরির কারণে গ্লাইকোলাইসিস বন্ধ হয়ে যায়।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'The patient presents with classical Hereditary Fructose Intolerance (HFI), caused by autosomal recessive mutations in Aldolase B. Fructose is normally phosphorylated by fructokinase to fructose-1-phosphate (F-1-P). When Aldolase B is deficient, F-1-P cannot be cleaved and accumulates to toxic levels in hepatocytes. This traps inorganic phosphate (Pi), causing severe intrahepatic phosphate depletion. Depletion of Pi and ATP prevents glycogen phosphorylase from breaking down glycogen and halts fructose-1,6-bisphosphatase in gluconeogenesis, producing catastrophic hypoglycemia.',
      'রোগী বংশগত ফ্রুক্টোজ ইনটলারেন্সে (HFI) আক্রান্ত যা অ্যালডোলেজ বি-এর ঘাটতির কারণে ঘটে। ফলের ফ্রুক্টোজ ফসফরাইলেটেড হয়ে ফ্রুক্টোজ-১-ফসফেট (F-1-P) হয়, কিন্তু অ্যালডোলেজ বি না থাকায় তা ভাঙতে পারে না। এর ফলে যকৃতের সমস্ত অজৈব ফসফেট আটকে যায় এবং এটিপি ফুরিয়ে যায়। ফসফেটের অভাবে গ্লাইকোজেন ভাঙার এনজাইম এবং গ্লুকোজ তৈরির মূল এনজাইমগুলো অবরুদ্ধ হয়ে পড়ে, যার ফলে মারাত্মক হাইপোগ্লাইসেমিয়া ও খিঁচুনি দেখা দেয়।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation Level', 'ভিত্তি স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Diverse Landscape of Dietary Sugars', 'খাদ্যস্থ শর্করার বৈচিত্র্যময় রূপ'),
          paragraphs: [
            l(
              'While glucose is the primary fuel circulating in human blood, human diets introduce a colorful variety of alternative monosaccharides. The modern global food supply is flooded with fructose, found naturally in fruits and honey and added in massive industrial quantities to sweetened beverages and processed foods as high-fructose corn syrup (HFCS). Infants consume immense quantities of galactose derived from lactose in maternal breast milk. In addition, cells generate specialized sugar alcohols such as sorbitol and amino sugars such as glucosamine.',
              'যদিও মানুষের রক্তে সঞ্চালিত প্রধান জ্বালানি হলো গ্লুকোজ, আমাদের দৈনন্দিন খাদ্যাভ্যাস বিভিন্ন বিকল্প মনোস্যাকারাইডের সমাহার নিয়ে আসে। আধুনিক বৈশ্বিক খাদ্যব্যবস্থায় ফ্রুক্টোজের প্রাধান্য ব্যাপক, যা প্রাকৃতিকভাবে ফলমূল ও মধুতে থাকে এবং শিল্পকারখানায় প্রচুর পরিমাণে কোমল পানীয় ও প্রক্রিয়াজাত খাবারে যোগ করা হয়। অন্যদিকে নবজাতক শিশুরা মায়ের বুকের দুধের ল্যাকটোজ থেকে প্রচুর গ্যালাক্টোজ গ্রহণ করে। এর পাশাপাশি জীবকোষ সর্বিটলের মতো সুগার অ্যালকোহল এবং গ্লুকোসামিনের মতো অ্যামিনো শর্করা তৈরি করে।'
            ),
            l(
              'Crucially, human tissues do not treat these sugars identically. Glucose is managed by an elaborate endocrine feedback system governed by insulin and glucagon. In contrast, fructose and galactose follow distinct, tissue-specific metabolic highways that bypass normal glycemic checkpoints, producing unique physiological benefits as well as dangerous clinical pitfalls.',
              'সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো মানবদেহ এই শর্করাগুলোকে একভাবে বিচার করে না। গ্লুকোজ যেখানে ইনসুলিন ও গ্লুকাগন হরমোনের কঠোর নিয়ন্ত্রণে থাকে, ফ্রুক্টোজ ও গ্যালাক্টোজ সেখানে ভিন্ন ভিন্ন টিস্যু-নির্দিষ্ট পথে পরিচালিত হয় যা স্বাভাবিক চেকপয়েন্টগুলোকে এড়িয়ে যায়; ফলে এদের যেমন সুনির্দিষ্ট শারীরবৃত্তীয় গুরুত্ব রয়েছে, তেমনি অসতর্কতায় মারাত্মক ক্লিনিক্যাল জটিলতাও সৃষ্টি হতে পারে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Fructose: The Stealth Fuel of the Liver', 'ফ্রুক্টোজ: যকৃতের গুপ্ত জ্বালানি'),
          paragraphs: [
            l(
              'When you consume fructose, virtually the entire dose is absorbed from the intestines and delivered straight to the liver via the portal vein. The liver contains a specialized enzyme called fructokinase (ketohexokinase) that immediately traps fructose by adding a phosphate group to form fructose-1-phosphate. This reaction is extremely fast and completely unregulated: it does not care how much energy the cell already has.',
              'আমরা যখন ফ্রুক্টোজ খাই, তার প্রায় সম্পূর্ণ অংশই অন্ত্র থেকে শোষিত হয়ে পোর্টাল শিরার মাধ্যমে সরাসরি যকৃতে পৌঁছায়। যকৃতে ফ্রুক্টোকাইনেজ নামক একটি বিশেষ এনজাইম থাকে যা ফ্রুক্টোজকে ধরে দ্রুত ফ্রুক্টোজ-১-ফসফেটে রূপান্তরিত করে। এই বিক্রিয়াটি অত্যন্ত দ্রুত এবং কোনো নিয়ন্ত্রণের তোয়াক্কা করে না: কোষে ইতোমধ্যে কত শক্তি জমা আছে তা না দেখেই এটি অনবরত কাজ করতে থাকে।'
            ),
            l(
              'Most importantly, fructose enters the energy-producing machinery below the master control valve of glycolysis, an enzyme called phosphofructokinase-1 (PFK-1). Because it bypasses this regulatory traffic cop, excess fructose flows unchecked into the synthesis of fat, explaining why diets high in liquid fructose rapidly lead to fatty liver disease (MASLD) and high blood triglycerides.',
              'সবচেয়ে লক্ষণীয় বিষয় হলো ফ্রুক্টোজ গ্লাইকোলাইসিসের প্রধান ট্রাফিক পুলিশ পিএফকে-১ (PFK-1) কপাটিকাকে সম্পূর্ণ এড়িয়ে তার নিচে প্রবেশ করে। কোনো বাধা না পেয়ে এই অতিরিক্ত ফ্রুক্টোজ সরাসরি চর্বি তৈরির কাঁচামালে পরিণত হয়; যার কারণে মিষ্টি পানীয়ের অতিরিক্ত ফ্রুক্টোজ অতি দ্রুত ফ্যাটি লিভার (MASLD) এবং রক্তে ক্ষতিকর ট্রাইগ্লিসারাইড বাড়িয়ে দেয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Sorbitol and Diabetic Complications', 'সর্বিটল ও ডায়াবেটিসের দীর্ঘমেয়াদী ক্ষতি'),
          paragraphs: [
            l(
              'Inside certain delicate human tissues—specifically the lens of the eye, peripheral nerves, and kidneys—an alternative pathway called the polyol pathway can turn glucose into a sugar alcohol called sorbitol. In healthy individuals with normal blood sugar, this pathway is barely active. However, in patients with uncontrolled diabetes and chronic hyperglycemia, glucose floods into these cells and is rapidly converted into sorbitol by an enzyme called aldose reductase.',
              'মানবদেহের কিছু সংবেদনশীল অঙ্গে—বিশেষ করে চোখের লেন্সে, হাত-পায়ের স্নায়ুতে এবং বৃক্কে—পলিওল পথ নামক একটি বিকল্প ব্যবস্থার মাধ্যমে গ্লুকোজ সর্বিটল নামক সুগার অ্যালকোহলে রূপান্তরিত হতে পারে। সুস্থ মানুষের রক্তে গ্লুকোজ স্বাভাবিক থাকায় এই পথটি প্রায় নিষ্ক্রিয় থাকে। কিন্তু অনিয়ন্ত্রিত ডায়াবেটিসের রোগীদের অতিরিক্ত গ্লুকোজ কোষে ঢুকে অ্যালডোজ রিডাক্টেজ এনজাইম দ্বারা দ্রুত সর্বিটলে পরিণত হয়।'
            ),
            l(
              'Because the lens and peripheral nerves lack the next enzyme needed to break down sorbitol, this sticky sugar alcohol becomes trapped inside the cells. Sorbitol acts like a molecular sponge, drawing water into the cells through osmosis. The resulting swelling and oxidative stress cause the crystalline proteins of the lens to turn cloudy—forming diabetic cataracts—and damage the delicate myelin sheaths of peripheral nerves, causing numbness and pain.',
              'যেহেতু চোখের লেন্স ও স্নায়ুতে সর্বিটল ভাঙার পরবর্তী এনজাইমটি থাকে না, তাই এই অবরুদ্ধ সর্বিটল কোষের ভেতর আটকা পড়ে যায়। এটি আণবিক স্পঞ্জের মতো কোষের ভেতর পানি টেনে নেয়। ফলে কোষগুলো ফুলে ওঠে এবং জারণ চাপে লেন্সের প্রোটিন জমাট বেঁধে চোখের ছানি তৈরি করে এবং স্নায়ুর আবরণ নষ্ট করে হাত-পায়ে অবশ অনুভূতি ও তীব্র ব্যথা সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Galactose: Milk Sugar and Maternal Biology', 'গ্যালাক্টোজ: দুধের শর্করা ও মাতৃদুগ্ধের বিজ্ঞান'),
          paragraphs: [
            l(
              'Galactose is the vital sugar provided to newborn infants in breast milk. In the infant liver, galactose is processed through an ancient biochemical circuit called the Leloir pathway, which transforms galactose step-by-step into glucose-1-phosphate so it can be burned for fuel or stored as glycogen.',
              'গ্যালাক্টোজ হলো নবজাতক শিশুর জীবনের প্রথম প্রধান শর্করা যা মাতৃদুগ্ধ থেকে আসে। শিশুর যকৃতে লেলোয়ার পথ নামক একটি সুপ্রাচীন জৈবরাসায়নিক চক্রের মাধ্যমে গ্যালাক্টোজ ধাপে ধাপে গ্লুকোজে রূপান্তরিত হয় যাতে তা শক্তি হিসেবে ব্যবহৃত হতে পারে বা গ্লাইকোজেন হিসেবে জমা থাকতে পারে।'
            ),
            l(
              'Conversely, in lactating mothers, the mammary gland runs this pathway in reverse to synthesize lactose. The mammary gland takes glucose from the mother bloodstream, converts half of it into UDP-galactose, and fuses the two sugars together using a specialized enzyme complex called lactose synthase to nourish the nursing infant.',
              'বিপরীতভাবে, স্তন্যদানকারী মায়েদের স্তনগ্রন্থিতে এই পথটি উল্টো দিকে কাজ করে দুগ্ধ শর্করা ল্যাকটোজ তৈরি করে। স্তনগ্রন্থি মায়ের রক্তের গ্লুকোজ গ্রহণ করে তার অর্ধেককে গ্যালাক্টোজ বানায় এবং ল্যাকটোজ সিন্থেজ এনজাইম দ্বারা দুটিকে যুক্ত করে শিশুর জন্য পুষ্টিকর দুধ তৈরি করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Inborn Sugar Errors: When Fruit or Milk Becomes Toxic', 'জন্মগত শর্করার রোগ: যখন ফল বা দুধ বিষ হয়ে ওঠে'),
          paragraphs: [
            l(
              'Nature provides dramatic illustrations of these pathways in rare genetic conditions. In Hereditary Fructose Intolerance, infants become severely ill with vomiting, liver damage, and seizures as soon as they taste their first fruit or sugar. In Classical Galactosemia, infants develop cataracts, liver failure, and severe bacterial infections within days of drinking milk. Early newborn screening and strict dietary elimination of the offending sugar are lifesaving.',
              'বিরল কিছু জেনেটিক রোগে প্রকৃতি এই পথগুলোর গুরুত্ব নির্মমভাবে প্রমাণ করে। বংশগত ফ্রুক্টোজ ইনটলারেন্সে শিশুরা প্রথম ফল খাওয়ার সাথে সাথেই বমি, জন্ডিস ও খিঁচুরিতে আক্রান্ত হয়। আবার গ্যালাক্টোসেমিয়ায় দুধ খাওয়ার কয়েকদিনের মধ্যেই শিশুর চোখ নষ্ট ও লিভার ফেইলিউর দেখা দেয়। সময়মতো সঠিক পরীক্ষা ও খাদ্য থেকে সংশ্লিষ্ট শর্করা পুরোপুরি বর্জন করাই এদের জীবন বাঁচানোর একমাত্র উপায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary of Alternative Sugar Biology', 'বিকল্প শর্করার মূল সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Non-glucose monosaccharides follow dedicated metabolic routes distinct from standard glucose homeostasis. Hepatic fructolysis bypasses PFK-1 regulation, driving lipogenesis and uric acid production. The polyol pathway traps sorbitol in diabetic tissues causing osmotic cataract and neuropathy, while galactose Leloir flux orchestrates milk sugar economics.',
              'অ-গ্লুকোজ শর্করাগুলো সাধারণ গ্লুকোজের চেয়ে সম্পূর্ণ ভিন্ন বিপাকীয় পথ অনুসরণ করে। যকৃতে ফ্রুক্টোজ পিএফকে-১ কপাটিকা এড়িয়ে সরাসরি চর্বি ও ইউরিক অ্যাসিড তৈরি করে। পলিওল পথ ডায়াবেটিসে সর্বিটল জমিয়ে চোখের ছানি ও স্নায়ুর ক্ষতি করে এবং গ্যালাক্টোজ লেলোয়ার চক্র দুগ্ধ শর্করা বিপাক পরিচালনা করে।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic Level', 'একাডেমিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('Enzymology of Hepatic Fructolysis & The PFK-1 Bypass', 'যকৃতের ফ্রুক্টোজ ভাঙন ও পিএফকে-১ বাইপাস এনজাইমোলজি'),
          paragraphs: [
            l(
              'Dietary fructose is transported across the intestinal apical brush border by facilitated diffusion via the specific hexose transporter GLUT5 (SLC2A5) and exits the basolateral membrane via GLUT2 (SLC2A2) into the portal venous circulation. Upon first-pass hepatic transit, hepatocytes clear over 70% of the fructose load. In human liver, fructose phosphorylation is catalyzed not by hexokinase, but by Ketohexokinase (KHK, also termed Fructokinase). Human KHK exists as two alternative splice variants derived from the KHK gene: KHK-A and KHK-C.',
              'খাদ্যের ফ্রুক্টোজ অন্ত্রের ব্রাশ বর্ডারে GLUT5 বাহক দ্বারা শোষিত হয় এবং বেসোলেটারাল ঝিল্লিতে GLUT2 বাহক দিয়ে পোর্টাল রক্তে প্রবেশ করে। যকৃৎ প্রথম সংবহনেই ৭০%-এর বেশি ফ্রুক্টোজ সরিয়ে ফেলে। যকৃতে ফ্রুক্টোজ ফসফরাইলেশন হেক্সোকাইনেজ দ্বারা নয়, বরং কিটোহেক্সোকাইনেজ (KHK) দ্বারা ঘটে। এর দুটি প্রধান রূপ রয়েছে: KHK-A এবং KHK-C।'
            ),
            l(
              'KHK-C is expressed predominantly in the liver, kidneys, and small intestine. It possesses an extraordinarily high affinity for fructose (Km ~ 0.5 mM) and a very high catalytic velocity, phosphorylating D-fructose to D-fructose-1-phosphate using ATP: Fructose + ATP -> Fructose-1-Phosphate + ADP. Crucially, KHK-C possesses no allosteric feedback inhibition by its product F-1-P or by cellular energy charge, allowing hepatic fructose phosphorylation to proceed unchecked.',
              'KHK-C প্রধানত যকৃৎ, বৃক্ক ও ক্ষুদ্রান্ত্রে থাকে। ফ্রুক্টোজের প্রতি এর আসক্তি অত্যন্ত বেশি (Km ~ ০.৫ mM) এবং গতিবেগ প্রচণ্ড; এটি এটিপি ব্যবহার করে ফ্রুক্টোজকে ফ্রুক্টোজ-১-ফসফেটে পরিণত করে। সবচেয়ে উল্লেখযোগ্য হলো, এর কোনো উৎপাদ-বাধা বা অ্যালবস্টেরিক নিয়ন্ত্রণ নেই; ফলে যকৃতে এটি কোনো নিয়ন্ত্রণ ছাড়াই অনবরত এটিপি খরচ করে কাজ চালিয়ে যেতে পারে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Aldolase B Cleavage, Triokinase & The Lipogenic Cascade', 'অ্যালডোলেজ বি বিভাজন, ট্রায়োকাইনেজ ও চর্বি তৈরির ক্যাসকেড'),
          paragraphs: [
            l(
              'In classical glycolysis, Aldolase A cleaves fructose-1,6-bisphosphate into two trioses. In hepatic fructolysis, the single phosphate ester fructose-1-phosphate is cleaved by Aldolase B (fructose-1-phosphate aldolase): Fructose-1-Phosphate <-> Dihydroxyacetone Phosphate (DHAP) + D-Glyceraldehyde. Aldolase B is expressed in liver, kidney cortex, and small intestine, displaying roughly equal affinity for F-1-P and F-1,6-BP.',
              'চিরায়ত গ্লাইকোলাইসিসে অ্যালডোলেজ এ ফ্রুক্টোজ-১,৬-বিসফসফেটকে ভাঙে। কিন্তু যকৃতের ফ্রুক্টোজ পথে ফ্রুক্টোজ-১-ফসফেটকে ভাঙে অ্যালডোলেজ বি: ফ্রুক্টোজ-১-P <-> DHAP + D-গ্লিসার্যালডিহাইড। অ্যালডোলেজ বি যকৃৎ, বৃক্ক এবং অন্ত্রে প্রকাশিত হয়।'
            ),
            l(
              'The cleavage product DHAP directly enters glycolysis, interconverting with glyceraldehyde-3-phosphate via triose phosphate isomerase (TPI). The unphosphorylated D-glyceraldehyde is converted to glyceraldehyde-3-phosphate by Triokinase (TK) consuming an additional mole of ATP: D-Glyceraldehyde + ATP -> D-Glyceraldehyde-3-Phosphate + ADP. Because both triose cleavage products enter glycolysis distal to the master control checkpoint Phosphofructokinase-1 (PFK-1), fructose bypasses allosteric inhibition by ATP and citrate, funneling unrestrained triose carbons directly into pyruvate, acetyl-CoA, and de novo fatty acid synthesis.',
              'উৎপন্ন DHAP সরাসরি গ্লাইকোলাইসিসে ঢুকে পড়ে। অন্যদিকে মুক্ত গ্লিসার্যালডিহাইডকে ট্রায়োকাইনেজ এনজাইম আরও একটি এটিপি খরচ করে গ্লিসার্যালডিহাইড-৩-ফসফেটে রূপান্তরিত করে। যেহেতু উভয় ট্রায়োজই গ্লাইকোলাইসিসের প্রধান নিয়ন্ত্রক পিএফকে-১ এর নিচে এসে যুক্ত হয়, তাই ফ্রুক্টোজ কোনো এটিপি বা সাইট্রেটের বাধা মানে না; ফলে সমস্ত কার্বন অনিয়ন্ত্রিতভাবে অ্যাসিটাইল-কোএ এবং অতিরিক্ত ফ্যাটি অ্যাসিড তৈরিতে ব্যবহৃত হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Polyol Pathway: Aldose Reductase & Sorbitol Dehydrogenase', 'পলিওল পথ: অ্যালডোজ রিডাক্টেজ ও সর্বিটল ডিহাইড্রোজিনেজ'),
          paragraphs: [
            l(
              'The polyol pathway consists of two sequential oxidoreductase reactions. In the first step, Aldose Reductase (AKR1B1), a cytosolic monomeric NADPH-dependent aldo-keto reductase with a high Km for glucose (~100 mM), reduces D-glucose to D-sorbitol: D-Glucose + NADPH + H+ -> D-Sorbitol + NADP+. Under euglycemic conditions (blood glucose 5 mM), aldose reductase activity is negligible because hexokinase (Km ~ 0.1 mM) metabolizes virtually all intracellular glucose.',
              'পলিওল পথ দুটি ধারাবাহিক জারণ-বিজারণ বিক্রিয়া নিয়ে গঠিত। প্রথম ধাপে অ্যালডোজ রিডাক্টেজ এনজাইম NADPH খরচ করে গ্লুকোজকে সর্বিটলে বিজারিত করে: D-গ্লুকোজ + NADPH + H+ -> D-সর্বিটল + NADP+। স্বাভাবিক রক্তে গ্লুকোজ কম থাকায় এই এনজাইম খুব কম কাজ করে কারণ হেক্সোকাইনেজ আগেই গ্লুকোজকে খরচ করে ফেলে।'
            ),
            l(
              'In the second step, Sorbitol Dehydrogenase (SORD), a zinc-dependent tetrameric enzyme, oxidizes sorbitol to D-fructose using NAD+: D-Sorbitol + NAD+ -> D-Fructose + NADH + H+. However, tissues prone to diabetic microvascular complications—specifically the lens epithelium, retinal pericytes, renal mesangial cells, and Schwann cells of peripheral nerves—express high levels of aldose reductase but virtually undetectable levels of sorbitol dehydrogenase. Consequently, sorbitol cannot be oxidized and becomes trapped intracellularly.',
              'দ্বিতীয় ধাপে সর্বিটল ডিহাইড্রোজিনেজ এনজাইম NAD+ ব্যবহার করে সর্বিটলকে ফ্রুক্টোজে জারিত করে। কিন্তু চোখের লেন্স, রেটিনা ও প্রান্তীয় স্নায়ুর সোয়ান কোষে দ্বিতীয় এনজাইমটি প্রায় থাকেই না। ফলে উৎপন্ন সর্বিটল বাইরে বের হতে না পেরে কোষের ভেতর বিপজ্জনক মাত্রায় জমতে থাকে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Leloir Pathway of Galactose Metabolism', 'গ্যালাক্টোজ বিপাকের লেলোয়ার পথ'),
          paragraphs: [
            l(
              'Dietary lactose from milk is hydrolyzed by brush border lactase into D-glucose and D-galactose. Galactose is absorbed via SGLT1 and GLUT2 and cleared by the liver. In the hepatocyte, galactose is metabolized through the four-step Leloir pathway. First, beta-D-galactose is converted to alpha-D-galactose by Galactose Mutarotase. Second, Galactokinase (GALK1) phosphorylates the C1 position: alpha-D-Galactose + ATP -> alpha-D-Galactose-1-Phosphate + ADP.',
              'দুধের ল্যাকটোজ অন্ত্রের ল্যাকটেজ এনজাইম দ্বারা ভেঙে গ্লুকোজ ও গ্যালাক্টোজ হয়। যকৃতে গ্যালাক্টোজ চার-ধাপের লেলোয়ার পথে প্রবেশ করে। প্রথমে গ্যালাক্টোজ মিউটারোটেজ একে আলফা-রূপে রূপান্তর করে। এরপর গ্যালাক্টোকাইনেজ (GALK1) এটিপি খরচ করে গ্যালাক্টোজ-১-ফসফেট তৈরি করে।'
            ),
            l(
              'Third, Galactose-1-Phosphate Uridylyltransferase (GALT) catalyzes an obligatory ping-pong bi-bi reaction, transferring a UMP moiety from UDP-glucose onto galactose-1-P: Galactose-1-P + UDP-Glucose <-> UDP-Galactose + Glucose-1-P. The resulting glucose-1-P is converted to glucose-6-P by phosphoglucomutase for glycolysis or gluconeogenesis. Fourth, UDP-Galactose 4-Epimerase (GALE), an enzyme harboring an tightly bound active-site NAD+ cofactor, reversibly inverts the stereochemistry at the C4 position: UDP-Galactose <-> UDP-Glucose.',
              'তৃতীয় ধাপে GALT এনজাইম একটি পিং-পং বিক্রিয়ার মাধ্যমে UDP-গ্লুকোজ থেকে UMP গ্রুপ সরিয়ে গ্যালাক্টোজ-১-P-তে যুক্ত করে UDP-গ্যালাক্টোজ ও গ্লুকোজ-১-P তৈরি করে। গ্লুকোজ-১-P সহজে গ্লাইকোলাইসিসে যায়। চতুর্থ ধাপে GALE এনজাইম C4 কার্বনের রূপান্তর ঘটিয়ে UDP-গ্যালাক্টোজকে পুনরায় UDP-গ্লুকোজে পরিণত করে চক্র সম্পন্ন করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('The Hexosamine Biosynthetic Pathway (HBP) & O-GlcNAcylation', 'হেক্সোসামিন পথ ও ও-গ্লুকন্যাকাইলেশন পুষ্টি সংবেদন'),
          paragraphs: [
            l(
              'The Hexosamine Biosynthetic Pathway (HBP) functions as a cellular nutrient sensor integrating glucose, amino acid, fatty acid, and nucleotide metabolism. Approximately 2 to 5% of intracellular glucose entering glycolysis is diverted from fructose-6-phosphate by Glutamine:Fructose-6-Phosphate Amidotransferase (GFAT), the rate-limiting committed enzyme: Fructose-6-P + L-Glutamine -> D-Glucosamine-6-P + L-Glutamate. Glucosamine-6-P is acetylated using acetyl-CoA and reacted with UTP to yield Uridine Diphosphate N-Acetylglucosamine (UDP-GlcNAc).',
              'হেক্সোসামিন বায়োসিন্থেটিক পথ (HBP) একটি গুরুত্বপূর্ণ কোষীয় পুষ্টি সংবেদক যা গ্লুকোজ, অ্যামিনো অ্যাসিড, চর্বি এবং নিউক্লিওটাইডের ভারসাম্য রক্ষা করে। গ্লাইকোলাইসিসে ঢোকা প্রায় ২-৫% গ্লুকোজ GFAT এনজাইমের মাধ্যমে হেক্সোসামিন পথে চলে যায় এবং গ্লুকোসামিন-৬-P তৈরি করে। এটি অ্যাসিটাইল-কোএ এবং UTP এর সাথে যুক্ত হয়ে UDP-GlcNAc উৎপন্ন করে।'
            ),
            l(
              'UDP-GlcNAc serves as the obligate donor substrate for O-GlcNAc Transferase (OGT), an essential enzyme that attaches single O-GlcNAc monosaccharides to serine and threonine hydroxyl residues of nuclear and cytosolic proteins. Unlike classical N-linked extracellular glycosylation, O-GlcNAcylation is a dynamic intracellular signaling modification analogous to protein phosphorylation, regulating transcription factors (such as Sp1, FOXO1, and p53) and insulin receptor substrate 1 (IRS-1).',
              'UDP-GlcNAc হলো OGT এনজাইমের মূল সাবস্ট্রেট, যা বিভিন্ন সাইটোসোলিক ও নিউক্লিয়ার প্রোটিনের সেরিন বা থ্রিওনিনে ও-গ্লুকন্যাক সুগার যুক্ত করে। এটি প্রোটিন ফসফরাইলেশনের মতোই একটি দ্রুত পরিবর্তনশীল সংকেত ব্যবস্থা যা ইনসুলিন রিসেপ্টর ও ট্রান্সক্রিপশন ফ্যাক্টরের কাজ নিয়ন্ত্রণ করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Review of Non-Glucose Sugar Pathways', 'অ-গ্লুকোজ শর্করা পথের একাডেমিক সারাংশ'),
          paragraphs: [
            l(
              'Non-glucose monosaccharides display unique biochemical kinetics. Fructose bypasses PFK-1 regulation via KHK-C and Aldolase B, directly stimulating lipogenesis and depleting ATP into uric acid. The polyol pathway traps sorbitol in tissues lacking sorbitol dehydrogenase, producing diabetic osmotic damage. Galactose metabolism via the Leloir pathway enables milk sugar processing, while the hexosamine pathway coordinates cellular nutrient sensing.',
              'অ-গ্লুকোজ শর্করাগুলো বিশেষ জৈবরাসায়নিক গতিবিদ্যা প্রদর্শন করে। ফ্রুক্টোজ পিএফকে-১ কপাটিকা এড়িয়ে চর্বি তৈরি ও ইউরিক অ্যাসিড বৃদ্ধি করে। পলিওল পথ ডায়াবেটিসে সর্বিটল জমিয়ে ছানি ও স্নায়ুর ক্ষতি করে। লেলোয়ার পথ গ্যালাক্টোজ বিপাক চালায় এবং হেক্সোসামিন পথ সামগ্রিক পুষ্টির মাত্রা শনাক্ত করে।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced & Research Level', 'উচ্চতর ও গবেষণা স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('Fructose-Induced Metabolic Syndrome, Endoplasmic Reticulum Stress & MASLD', 'ফ্রুক্টোজ-উদ্দীপ্ত মেটাবলিক সিন্ড্রোম, ইআর চাপ ও ফ্যাটি লিভার'),
          paragraphs: [
            l(
              'Modern epidemiological and molecular investigation has demonstrated that high-fructose corn syrup and sucrose are potent drivers of Metabolic Dysfunction-Associated Steatohepatitis (MASH / MASLD). Because ketohexokinase C (KHK-C) phosphorylates fructose with near-diffusion kinetics and zero product inhibition, intrahepatic phosphate becomes trapped as fructose-1-phosphate, dropping cytosolic Pi and ATP by over 50% within minutes of a fructose bolus.',
              'আধুনিক মহামারীবিদ্যা ও আণবিক গবেষণা প্রমাণ করেছে যে প্রক্রিয়াজাত খাবারের ফ্রুক্টোজ বিপাকীয় ফ্যাটি লিভার (MASLD) রোগের প্রধান কারণ। যেহেতু KHK-C কোনো বাধা ছাড়াই প্রচণ্ড গতিতে ফ্রুক্টোজ ফসফরাইলেশন চালায়, তাই যকৃতের ভেতরে অজৈব ফসফেট F-1-P হিসেবে আটকে যায় এবং ফ্রুক্টোজ গ্রহণের কয়েক মিনিটের মধ্যে যকৃতের এটিপি ও ফসফেট ৫০%-এরও বেশি কমে যায়।'
            ),
            l(
              'This rapid ATP drop stimulates AMP Deaminase 2 (AMPD2), generating inosine monophosphate (IMP) and driving purine degradation into uric acid. Intracellular uric acid acts as a pro-oxidant inside hepatocytes, stimulating NADPH oxidase (NOX4) and inducing mitochondrial oxidative stress. The resultant ROS directly activates SREBP-1c and ChREBP, upregulating Fatty Acid Synthase (FASN) and Stearoyl-CoA Desaturase-1 (SCD1), creating a relentless engine of de novo lipogenesis and hepatic steatosis.',
              'এই আকস্মিক এটিপি পতন এএমপি ডিমাইনেজ-২ (AMPD2) এনজাইমকে উদ্দীপিত করে প্রচুর ইউরিক অ্যাসিড তৈরি করে। যকৃতের ভেতর এই ইউরিক অ্যাসিড ক্ষতিকর ফ্রি র্যাডিক্যাল তৈরি করে মাইটোকন্ড্রিয়াকে ক্ষতিগ্রস্ত করে। এই জারণ চাপ সরাসরি চর্বি তৈরির প্রধান জিনগুলোকে সক্রিয় করে তোলে, যার ফলে যকৃতে ক্ষতিকর ট্রাইগ্লিসারাইড জমে মারাত্মক ফ্যাটি লিভার সৃষ্টি হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Molecular Genetics of Classical Galactosemia & Neonatal Pathophysiology', 'ক্লাসিক্যাল গ্যালাক্টোসেমিয়ার আণবিক বংশগতি ও নবজাতকের প্যাথলজি'),
          paragraphs: [
            l(
              'Classical Galactosemia is an autosomal recessive inborn error of metabolism caused by mutations in the GALT gene on chromosome 9p13. Over 300 pathogenic GALT mutations have been identified, with the p.Gln188Arg missense mutation accounting for over 60% of alleles in European populations. In homozygous infants, GALT activity is completely undetectable (<1% of wild-type), predisposing to catastrophic multi-organ toxicity upon milk feeding.',
              'ক্লাসিক্যাল গ্যালাক্টোসেমিয়া হলো ক্রোমোজোম ৯-এ অবস্থিত GALT জিনের মিউটেশনজনিত একটি মারাত্মক জন্মগত রোগ। ইউরোপীয় জনগোষ্ঠীর মধ্যে p.Gln188Arg মিউটেশনটি সর্বাধিক পরিচিত। আক্রান্ত নবজাতকদের শরীরে এই এনজাইমটি প্রায় পুরোপুরি অনুপস্থিত থাকে (<১%), যার ফলে দুধ খাওয়ার সাথে সাথেই বিষাক্ত উপাদান জমে অঙ্গগুলো বিকল হতে শুরু করে।'
            ),
            l(
              'Toxicity is mediated by two distinct mechanisms: intrahepatic accumulation of galactose-1-phosphate traps inorganic phosphate, crippling glycogenolysis and gluconeogenesis (analogous to HFI) and precipitating acute hepatic necrosis and coagulopathy; while free galactose in the ocular lens is reduced by aldose reductase to galactitol. Unlike sorbitol, galactitol cannot be metabolized by any known human enzyme; it accumulates irreversibly, drawing water osmotically and producing dense nuclear "oil-droplet" cataracts within the first weeks of life.',
              'এই বিষক্রিয়া দুটি উপায়ে ঘটে: প্রথমত, যকৃতে গ্যালাক্টোজ-১-ফসফেট জমে অজৈব ফসফেট আটকে ফেলে যার ফলে গ্লুকোজ তৈরি বন্ধ হয়ে যকৃত ধ্বংস হয় এবং রক্ত জমাট বাঁধার ক্ষমতা নষ্ট হয়ে যায়; দ্বিতীয়ত, চোখের লেন্সে অ্যালডোজ রিডাক্টেজ গ্যালাক্টোজকে গ্যালাকটিটলে পরিণত করে। মানবদেহে গ্যালাকটিটল ভাঙার কোনো এনজাইম না থাকায় এটি লেন্সে স্থায়ীভাবে আটকে পানি টেনে জীবনের প্রথম কয়েক সপ্তাহের মধ্যেই মারাত্মক ছানি সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Nutrient Sensing via O-GlcNAcylation in Diabetes & Cancer', 'ডায়াবেটিস ও ক্যান্সারে ও-গ্লুকন্যাকাইলেশন পুষ্টি সংবেদন'),
          paragraphs: [
            l(
              'The Hexosamine Biosynthetic Pathway (HBP) and its terminal modification, O-GlcNAcylation, represent a central nexus in diabetic complications and oncogenesis. Under conditions of chronic hypernutrition (hyperglycemia, hyperlipidemia, and amino acid excess), flux through GFAT surges, dramatically expanding the intracellular UDP-GlcNAc pool. O-GlcNAc Transferase (OGT) transfers these GlcNAc sugars onto key signaling proteins, frequently competing directly with protein kinases for identical serine/threonine phosphorylation sites.',
              'হেক্সোসামিন পথ এবং এর উৎপাদ ও-গ্লুকন্যাকাইলেশন ডায়াবেটিস ও ক্যান্সারের জটিলতায় কেন্দ্রীয় ভূমিকা পালন করে। দীর্ঘস্থায়ী অতিরিক্ত পুষ্টির উপস্থিতিতে কোষে প্রচুর UDP-GlcNAc তৈরি হয়। OGT এনজাইম এই শর্করাগুলোকে বিভিন্ন সিগন্যালিং প্রোটিনে যুক্ত করে, যা প্রায়শই প্রোটিন কাইনেজের ফসফরাইলেশন স্থানের সাথে সরাসরি প্রতিযোগিতা করে।'
            ),
            l(
              'In skeletal muscle and liver, hyper-O-GlcNAcylation of IRS-1 and Akt impairs insulin-stimulated GLUT4 translocation and glycogen synthesis, establishing a molecular mechanism for nutrient-induced insulin resistance. In oncology, malignant cells consistently display elevated OGT and high global O-GlcNAcylation, which stabilizes oncogenic transcription factors like c-Myc and beta-catenin against proteasomal degradation, driving tumor proliferation.',
              'কঙ্কালপেশি ও যকৃতে IRS-1 এবং Akt প্রোটিনে অতিরিক্ত ও-গ্লুকন্যাক যুক্ত হলে ইনসুলিন আর ঠিকমতো কাজ করতে পারে না, যা পুষ্টি-উদ্দীপ্ত ইনসুলিন রেজিস্ট্যান্সের মূল আণবিক কারণ। অন্যদিকে ক্যান্সার কোষগুলোতে OGT অতিরিক্ত সক্রিয় থাকে যা c-Myc এর মতো টিউমার প্রোটিনগুলোকে ধ্বংসের হাত থেকে বাঁচিয়ে রেখে ক্যান্সার কোষের দ্রুত বংশবৃদ্ধি নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Management: Newborn Screening & Dietary Elimination', 'ক্লিনিক্যাল ব্যবস্থাপনা: নবজাতক স্ক্রিনিং ও খাদ্য বর্জন'),
          paragraphs: [
            l(
              'Newborn screening programs screen universally for Classical Galactosemia using dried blood spots, measuring total galactose (galactose plus Gal-1-P) via fluorometric assays coupled with the Beutler test for GALT enzyme activity. Prompt diagnosis is critical to switch the neonate immediately to a soy-based, lactose-free formula before E. coli sepsis (a classic lethal complication driven by galactose-mediated impairment of neutrophil bactericidal function) develops.',
              'নবজাতক স্ক্রিনিং প্রোগ্রামে জন্মের পরপরই রক্তের ফোঁটা পরীক্ষা করে গ্যালাক্টোসেমিয়া নির্ণয় করা হয়। দ্রুত রোগ ধরা পড়লে শিশুকে তৎক্ষণাৎ বুকের দুধ বা সাধারণ দুধের বদলে সয়াবিন-ভিত্তিক ল্যাকটোজমুক্ত ফর্মুলা দিতে হয় যাতে মারাত্মক ই. কোলাই সেপসিস ও মৃত্যু রোধ করা যায়।'
            ),
            l(
              'In Hereditary Fructose Intolerance, management relies on lifelong strict avoidance of dietary fructose, sucrose, and sorbitol. Patients who adhere strictly to the diet enjoy normal lifespans and normal hepatic histology, though they must carefully inspect medications, which frequently contain sorbitol or sucrose as flavoring excipients.',
              'বংশগত ফ্রুক্টোজ ইনটলারেন্সে রোগীকে আজীবন ফ্রুক্টোজ, চিনি ও সর্বিটলমুক্ত খাবার খেতে হয়। নিয়ম মেনে চললে রোগীরা সম্পূর্ণ স্বাভাবিক জীবনযাপন করতে পারেন; তবে বিভিন্ন কাশির সিরাপ বা ওষুধের ফ্লেভারে ফ্রুক্টোজ বা সর্বিটল থাকে কিনা সে বিষয়ে সর্বদা সতর্ক থাকতে হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Research Frontiers in Sugar Biochemistry', 'শর্করা প্রাণরসায়নের ভবিষ্যৎ গবেষণা'),
          paragraphs: [
            l(
              'Non-glucose hexose metabolism unites fundamental enzymology with global public health challenges. From understanding how industrial high-fructose syrups drive metabolic syndrome and non-alcoholic fatty liver disease to developing selective OGT inhibitors for cancer and aldose reductase inhibitors for diabetic microvascular protection, the biochemistry of alternative sugars remains a dynamic therapeutic frontier.',
              'অ-গ্লুকোজ শর্করার বিপাক মৌলিক এনজাইমোলজির সাথে আধুনিক জনস্বাস্থ্যের চ্যালেঞ্জগুলোকে একীভূত করে। প্রক্রিয়াজাত ফ্রুক্টোজের ফ্যাটি লিভার সৃষ্টি থেকে শুরু করে ডায়াবেটিসের ছানি প্রতিরোধে অ্যালডোজ রিডাক্টেজ ইনহিবিটর এবং ক্যান্সারে OGT নিয়ন্ত্রণ পর্যন্ত—বিকল্প শর্করার বিজ্ঞান আধুনিক চিকিৎসাবিজ্ঞানের অত্যন্ত গুরুত্বপূর্ণ এক গবেষণাক্ষেত্র।'
            ),
          ],
        },
      ],
    },
  },
}
