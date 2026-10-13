import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const proteostasisRefs = [
  {
    id: 'ciechanover-ups-cell-2005',
    authors: 'Aaron Ciechanover',
    title: 'Intracellular protein degradation: from a vague idea through the lysosome and the ubiquitin-proteasome system and onto human diseases and drug targeting. Cell Death & Differentiation, 12:1178-1190',
    organization: 'Nature Publishing Group',
    year: 2005,
    url: 'https://pubmed.ncbi.nlm.nih.gov/16110271/',
  },
  {
    id: 'mizushima-autophagy-nature-2008',
    authors: 'Noboru Mizushima, Beth Levine, Ana Maria Cuervo, Daniel J. Klionsky',
    title: 'Autophagy fights disease through cellular self-digestion. Nature, 451(7182):1069-1075',
    organization: 'Nature Publishing Group',
    year: 2008,
    url: 'https://pubmed.ncbi.nlm.nih.gov/18305538/',
  },
  {
    id: 'saxton-sabatini-mtorc1-cell-2017',
    authors: 'Robert A. Saxton, David M. Sabatini',
    title: 'mTOR signaling in growth, metabolism, and disease. Cell, 168(6):960-976',
    organization: 'Cell Press / Elsevier',
    year: 2017,
    url: 'https://pubmed.ncbi.nlm.nih.gov/28283069/',
  },
  {
    id: 'cuervo-cma-trends-2014',
    authors: 'Ana Maria Cuervo, Esther Wong',
    title: 'Chaperone-mediated autophagy: roles in disease and aging. Cell Research, 24(1):92-104',
    organization: 'Nature Publishing Group',
    year: 2014,
    url: 'https://pubmed.ncbi.nlm.nih.gov/24281265/',
  },
  {
    id: 'lehninger-biochem-8e-ch27',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 27: Protein Metabolism and Degradation',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
]

const proteostasis3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Proteostasis, Autophagy & Amino Acid Flux',
    '৩ডি বহু-অঙ্গীয় প্রোটিন রূপান্তর, অটোফ্যাজি ও অ্যামিনো অ্যাসিড প্রবাহের মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and inspect coordinate space to examine skeletal muscle proteolysis, hepatic lysosomal autophagic degradation, plasma amino acid buffering, and plasma cell proteasome vulnerability.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে কঙ্কাল পেশির প্রোটিন ভাঙন, যকৃতের লাইসোসোমাল অটোফ্যাজি, রক্তের অ্যামিনো অ্যাসিড পুল এবং প্লাজমা কোষের প্রোটিওসোম সংবেদনশীলতা নিয়ন্ত্রিত হয়।'
  ),
  description: l(
    'Protein turnover balances cellular renewal with energetic survival. Skeletal muscle stores 75% of whole-body protein, undergoing ubiquitin-mediated breakdown during starvation; the liver utilizes macroautophagy to clear damaged organelles and recycle amino acids for vital gluconeogenesis and albumin synthesis; plasma cells rely on 26S proteasome activity to survive heavy immunoglobulin folding loads; and the kidney utilizes glutamine for ammoniagenesis.',
    'প্রোটিন রূপান্তর কোষের নবায়ন এবং বেঁচে থাকার শক্তির মধ্যে ভারসাম্য বিধান করে। কঙ্কাল পেশি দেহের মোট প্রোটিনের ৭৫% ধারণ করে, যা অনাহারে ভেঙে অ্যামিনো অ্যাসিড মুক্ত করে; যকৃৎ অটোফ্যাজির মাধ্যমে ক্ষতিগ্রস্ত কোষাঙ্গাণু পরিষ্কার করে গ্লুকোনওজেনেসিসের কাঁচামাল যোগায়; প্লাজমা কোষ প্রচুর অ্যান্টিবডি তৈরির চাপ সহ্য করতে প্রোটিওসোমের ওপর নির্ভর করে; এবং বৃক্ক অ্যামোনিয়া তৈরির জন্য গ্লুটামিন ব্যবহার করে।'
  ),
  organs: [
    {
      id: 'organ-skeletal-muscle-proteolysis',
      name: l('Skeletal Muscle (Myofibrillar Proteolysis & Amino Acid Reserve)', 'কঙ্কাল পেশি (মায়োফাইব্রিলার প্রোটিন ভাঙন ও অ্যামিনো অ্যাসিড ভাণ্ডার)'),
      latinName: 'Musculus Skeletalis',
      system: l('Musculoskeletal System', 'পেশিতন্ত্র'),
      cavity: l('Somatic Musculature (Limbs & Torso)', 'সোমাটিক পেশিকলা (অঙ্গপ্রত্যঙ্গ ও ধড়)'),
      position3D: { x: -8, y: 140, z: 2 },
      color: '#dc2626',
      highlightColor: '#ef4444',
      shapeType: 'skeleton',
      description: l(
        'The body’s primary amino acid reservoir containing ~10 kg of protein in an adult. Under insulin deprivation, glucocorticoid elevation, or inflammatory cytokines (TNF-alpha), the muscle-specific E3 ubiquitin ligases MuRF1 (TRIM63) and MAFbx (atrogin-1) are transcriptionally upregulated via FoxO1/3, targeting myofibrillar actin and myosin heavy chains for 26S proteasomal degradation.',
        'প্রাপ্তবয়স্ক মানবদেহের প্রধান অ্যামিনো অ্যাসিড ভাণ্ডার যেখানে প্রায় ১০ কেজি প্রোটিন সঞ্চিত থাকে। ইনসুলিনের অভাব, কর্টিসল বৃদ্ধি বা প্রদাহজনক সাইটোকাইনের প্রভাবে পেশি-নির্দিষ্ট E3 লিগেজ MuRF1 ও atrogin-1 সক্রিয় হয়ে অ্যাক্টিন ও মায়োসিন প্রোটিনকে প্রোটিওসোমের মাধ্যমে ভেঙে অ্যামিনো অ্যাসিডে পরিণত করে।'
      ),
      spatialRelations: l(
        'Forms the major contractile mass of the appendicular and axial skeleton, directly vascularized for rapid systemic amino acid exchange.',
        'কঙ্কালের প্রধান সংকোচনশীল অংশ গঠন করে যা রক্তে সরাসরি অ্যামিনো অ্যাসিড আদান-প্রদান করে।'
      ),
      physiology: l(
        'Branch-chain amino acids (leucine, isoleucine, valine) are transaminated directly in muscle by BCAT2, transferring nitrogen to pyruvate and alpha-ketoglutarate to form alanine and glutamine for export.',
        'শাখাযুক্ত অ্যামিনো অ্যাসিডগুলো (লিওসিইন, আইসোলিউসিন, ভ্যালিন) সরাসরি পেশিতে ট্রান্সঅ্যামিনেশনের মাধ্যমে অ্যালানিন ও গ্লুটামিন তৈরি করে যা রক্তে মুক্ত হয়ে যকৃতে পৌঁছায়।'
      ),
      nutritionConnection: l(
        'Essential amino acid pulsing, especially 3 grams of L-leucine per meal, directly activates Sestrin2 and Rag GTPases to trigger mTORC1-mediated muscle protein synthesis, blunting sarcopenic decline.',
        'প্রতি বেলার খাবারে পর্যাপ্ত অপরিহার্য অ্যামিনো অ্যাসিড, বিশেষ করে ৩ গ্রাম এল-লিউসিন, সেস্ট্রিন২ ও র্যাগ প্রোটিনকে সক্রিয় করে প্রোটিন সংশ্লেষণ বৃদ্ধি করে পেশি ক্ষয় রোধ করে।'
      ),
      clinicalSignificance: l(
        'Uncontrolled myofibrillar hypercatabolism causes severe sarcopenia, cancer cachexia, and critical illness myopathy, with skeletal muscle loss exceeding 1 kg per week in severe septic shock.',
        'অনিয়ন্ত্রিত পেশি ভাঙন মারাত্মক সারকোপেনিয়া, ক্যান্সারের ক্যাচেক্সিয়া এবং আইসিইউ রোগীদের চরম দুর্বলতা সৃষ্টি করে, যেখানে সেপটিক শকে প্রতি সপ্তাহে ১ কেজির বেশি পেশি ক্ষয় হতে পারে।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-liver-autophagy-hub',
      name: l('Liver (Macroautophagy & Acute Phase Protein Synthesis)', 'যকৃৎ (ম্যাক্রোঅটোফ্যাজি ও অ্যাকিউট ফেজ প্রোটিন সংশ্লেষ)'),
      latinName: 'Hepar',
      system: l('Hepato-Metabolic & Digestive System', 'পরিপাক ও যকৃৎ-বিপাকীয় তন্ত্র'),
      cavity: l('Peritoneal Cavity (Right Hypochondrium)', 'পেরিটোনিয়াল গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 5, y: 185, z: 2 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'The metabolic crossroads for nitrogen recycling and autophagic flux. During overnight fasting, glucagon and elevated AMP stimulate hepatic macroautophagy via ULK1 and AMPK, recycling cytosolic proteins and damaged mitochondria into free amino acids to sustain gluconeogenesis and synthesize essential plasma proteins (albumin, clotting factors).',
        'নাইট্রোজেন পুনর্ব্যবহার এবং অটোফ্যাজির প্রধান কেন্দ্র। রাতের অনাহারে গ্লুকাগন ও এএমপি যকৃতের ম্যাক্রোঅটোফ্যাজি পথকে উদ্দীপ্ত করে ক্ষতিগ্রস্ত অঙ্গাণু ও প্রোটিন ভেঙে বিনামূল্যে অ্যামিনো অ্যাসিড যোগায় যা রক্তে গ্লুকোজ, অ্যালবুমিন ও রক্ত জমাট বাঁধার উপাদান তৈরিতে ব্যবহৃত হয়।'
      ),
      spatialRelations: l(
        'Positioned beneath the right hemidiaphragm, receiving all splanchnic venous drainage carrying recycled portal amino acids.',
        'ডান মধ্যচ্ছদার নিচে অবস্থিত যা পরিপাকনালী থেকে শোষিত ও মুক্ত হওয়া সমস্ত অ্যামিনো অ্যাসিড গ্রহণ করে।'
      ),
      physiology: l(
        'Lysosomal acid hydrolases (cathepsins B, D, L) operate at pH 4.5 maintained by the v-ATPase proton pump, degrading internalized autophagosomal cargo into free amino acids transported via SLC38/SLC36 carriers.',
        'লাইসোসোমের এসিড হাইড্রোলেজ এনজাইমগুলো পিএইচ ৪.৫ মাত্রায় অটোফ্যাগোসোমের প্রোটিন ভেঙে অ্যামিনো অ্যাসিডে পরিণত করে যা বিশেষ বাহকের মাধ্যমে পুনরায় সাইটোপ্লাজমে ফিরে আসে।'
      ),
      nutritionConnection: l(
        'Short-term caloric restriction and intermittent fasting stimulate periodic hepatic autophagic cleansing, reducing hepatic steatosis and enhancing mitochondrial bioenergetic efficiency.',
        'স্বল্পমেয়াদী রোজা বা ক্যালোরি সীমাবদ্ধতা যকৃতের অটোফ্যাজি প্রক্রিয়াকে উদ্দীপ্ত করে ফ্যাটি লিভার কমায় এবং মাইটোকন্ড্রিয়ার শক্তি উৎপাদন ক্ষমতা বহুগুণ বাড়িয়ে দেয়।'
      ),
      clinicalSignificance: l(
        'Impaired autophagic clearance in hepatocytes allows accumulation of misfolded alpha-1-antitrypsin polymer aggregates, triggering chronic ER stress, cirrhosis, and hepatocellular carcinoma.',
        'যকৃতে অটোফ্যাজি ব্যাহত হলে ত্রুটিপূর্ণ আলফা-১-অ্যান্টিট্রিপসিন প্রোটিন জমে দীর্ঘস্থায়ী লিভার সিরোসিস ও ক্যান্সারের ঝুঁকি বৃদ্ধি পায়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-plasma-cells-proteasome',
      name: l('Bone Marrow Plasma Cells (26S Proteasome Hyper-Dependence)', 'অস্থিমজ্জার প্লাজমা কোষ (২৬এস প্রোটিওসোমের ওপর চরম নির্ভরতা)'),
      latinName: 'Medulla Ossium et Plasmocyti',
      system: l('Hematopoietic & Immune System', 'রক্তোৎপাদী ও রোগপ্রতিরোধ ব্যবস্থা'),
      cavity: l('Skeletal Trabecular Medullary Space', 'অস্থিমজ্জার অভ্যন্তরীণ গহ্বর'),
      position3D: { x: 0, y: 165, z: 0 },
      color: '#7c3aed',
      highlightColor: '#8b5cf6',
      shapeType: 'skeleton',
      description: l(
        'Long-lived plasma cells and malignant multiple myeloma cells secrete thousands of immunoglobulin molecules per second, operating at the physical threshold of endoplasmic reticulum folding capacity. They rely exhaustively on endoplasmic reticulum-associated degradation (ERAD) and the 26S ubiquitin-proteasome system to eliminate misfolded light and heavy chains.',
        'দীর্ঘজীবী প্লাজমা কোষ এবং মাল্টিপল মায়েলোমা কোষ প্রতি সেকেন্ডে হাজার হাজার অ্যান্টিবডি তৈরি করে। তারা ত্রুটিপূর্ণ প্রোটিন ধ্বংস করার জন্য এন্ডোপ্লাজমিক রেটিকুলাম সংশ্লিষ্ট ক্ষয় (ERAD) এবং ২৬এস প্রোটিওসোম ব্যবস্থার ওপর পূর্ণমাত্রায় নির্ভর করে বেঁচে থাকে।'
      ),
      spatialRelations: l(
        'Resides within the protected trabecular bone marrow niches of the axial skeleton, ribs, and pelvis.',
        'অক্ষীয় কঙ্কাল, পাঁজর এবং শ্রোণীচক্রের অস্থির ট্র্যাবেকুলার গহ্বরের ভেতর সুরক্ষিত থাকে।'
      ),
      physiology: l(
        'The 19S regulatory particle recognizes Lys48-linked polyubiquitin chains, deubiquitinates target proteins via Rpn11 metalloprotease, and unfolds substrates via six AAA+ ATPases (Rpt1-6) for translocation into the 20S proteolytic chamber.',
        '১৯এস রেগুলেটরি কণা পলিইউবিকুইটিনযুক্ত প্রোটিন শনাক্ত করে, এটিপি শক্তি ব্যবহার করে তাদের উন্মোচিত করে এবং ২০এস ধ্বংসকক্ষে প্রবেশ করিয়ে টুকরো টুকরো করে কাটে।'
      ),
      nutritionConnection: l(
        'High turnover of short-lived regulatory proteins requires constant supply of intracellular amino acids, making malignant cells exquisitely sensitive to amino acid depletion therapies (e.g., asparaginase).',
        'স্বল্পস্থায়ী নিয়ন্ত্রক প্রোটিনের অতি দ্রুত রূপান্তরের জন্য কোষের অবিরাম অ্যামিনো অ্যাসিড প্রয়োজন হয়, যা তাদের অ্যামিনো অ্যাসিড হ্রাসকরণ চিকিৎসার প্রতি অত্যন্ত সংবেদনশীল করে তোলে।'
      ),
      clinicalSignificance: l(
        'Proteasome inhibitors (bortezomib, carfilzomib, ixazomib) selectively block the chymotrypsin-like beta-5 catalytic subunit of the 20S proteasome, causing catastrophic accumulation of toxic polyubiquitinated misfolded proteins, overwhelming terminal unfolded protein response (UPR), and triggering apoptosis in multiple myeloma cells.',
        'প্রোটিওসোম ইনহিবিটর ওষুধগুলো (যেমন বরটেজোমিব) প্রোটিওসোমের বিটা-৫ সাবইউনিটকে ব্লক করে দিলে কোষে বিষাক্ত প্রোটিন জমে যায় এবং অনিয়ন্ত্রিত মানসিক চাপের মুখে মায়েলোমা ক্যান্সার কোষগুলো দ্রুত ধ্বংস হয়ে যায়।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-kidney-amino-acid-pool',
      name: l('Kidneys (Amino Acid Reabsorption & Glutaminolysis)', 'বৃক্ক (অ্যামিনো অ্যাসিড পুনঃশোষণ ও গ্লুটামিনোলাইসিস)'),
      latinName: 'Renes',
      system: l('Urinary & Renal System', 'রেচনতন্ত্র'),
      cavity: l('Retroperitoneal Space', 'রেট্রোপেরিটোনিয়াল অঞ্চল'),
      position3D: { x: 4, y: 175, z: -3 },
      color: '#0284c7',
      highlightColor: '#38bdf8',
      shapeType: 'kidneys',
      description: l(
        'Filters ~50 grams of free amino acids daily through the glomeruli and reabsorbs >99% via specialized apical sodium-dependent transporters (such as SLC6A19 / B0AT1 in Hartnup disorder, SLC3A1/SLC7A9 in cystinuria). During metabolic acidosis, renal glutaminase (GLS1) extracts nitrogen from circulating glutamine to generate ammonium ions (NH4+) for urinary acid excretion while generating bicarbonate for systemic pH buffering.',
        'প্রতিদিন প্রায় ৫০ গ্রাম মুক্ত অ্যামিনো অ্যাসিড ফিল্টার করে এবং বিশেষ সোডিয়াম-নির্ভর বাহকের মাধ্যমে ৯৯%-এর বেশি পুনঃশোষণ করে। মেটাবলিক এসিডোসিসের সময় বৃক্কের গ্লুটামিনেজ এনজাইম রক্ত থেকে গ্লুটামিন ভেঙে অ্যামোনিয়াম নির্গত করে প্রস্রাবের অম্লত্ব কমায় এবং বাইকার্বনেট ফিরিয়ে দিয়ে রক্তের পিএইচ রক্ষা করে।'
      ),
      spatialRelations: l(
        'Retroperitoneal organs flanking the vertebral column at T12–L3, filtering arterial blood directly from the renal arteries.',
        'T12-L3 কশেরুকার দুই পাশে রেট্রোপেরিটোনিয়াল অবস্থানে অবস্থিত যা সরাসরি রেনাল ধমনী থেকে রক্ত ফিল্টার করে।'
      ),
      physiology: l(
        'Glutamine deamidation by phosphate-dependent glutaminase yields glutamate and NH4+; glutamate dehydrogenase then oxidizes glutamate to alpha-ketoglutarate, releasing a second NH4+ and feeding anaplerotic carbon into renal gluconeogenesis.',
        'গ্লুটামিন ভেঙে গ্লুটামেট ও অ্যামোনিয়াম উৎপন্ন হয়; এরপর গ্লুটামেট ডিহাইড্রোজিনেজ আলফা-কিটোগ্লুটারেট তৈরি করে যা বৃক্কের নিজস্ব গ্লুকোনওজেনেসিসে শক্তি সরবরাহ করে।'
      ),
      nutritionConnection: l(
        'Dietary protein balance prevents chronic metabolic acidosis; excessive acid load from pure animal protein requires compensatory skeletal bone buffer resorption if not balanced by alkaline plant-derived potassium salts.',
        'খাদ্যে প্রোটিনের সুষম ভারসাম্য রক্তের অম্লতা প্রতিরোধ করে; অতিরিক্ত প্রাণিজ প্রোটিনের অম্লীয় চাপ কমাতে শাকসবজির ক্ষারীয় পটাশিয়াম লবণের ভারসাম্য অপরিহার্য।'
      ),
      clinicalSignificance: l(
        'Genetic mutations in renal amino acid transporters cause cystinuria (cystine kidney stone nephrolithiasis) and Hartnup disease (tryptophan malabsorption mimicking pellagra with photosensitive rash and ataxia).',
        'বৃক্কের অ্যামিনো অ্যাসিড বাহকের জিনগত ত্রুটির কারণে সিস্টিনুরিয়া (মারাত্মক কিডনি পাথর) এবং হার্টনাপ রোগ (ট্রিপটোফ্যান শোষণের অভাবে পেলাগ্রার মতো ত্বকের ঘা ও স্নায়ুরোগ) দেখা দেয়।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism26ProteostasisAutophagyLesson: LessonTopic = {
  id: 'topic.metabolism.protein-turnover-proteasome-autophagy',
  slug: 'protein-turnover-proteasome-autophagy',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '26 · Protein Turnover, Proteasomes, Autophagy & Amino Acid Pools',
    '২৬ · প্রোটিন রূপান্তর, প্রোটিওসোম, অটোফ্যাজি ও অ্যামিনো অ্যাসিড পুল'
  ),
  summary: l(
    'Molecular physiology of intracellular protein turnover and proteostasis: the E1-E2-E3 ubiquitin conjugation cascade, 26S proteasome structural biology and bortezomib pharmacology, macroautophagy phagophore dynamics and LC3 lipidation, chaperone-mediated autophagy (CMA), lysosomal nutrient sensing via Sestrin2, Rag GTPases, and mTORC1, and whole-body nitrogen buffering across skeletal muscle, liver, and kidney.',
    'কোষীয় প্রোটিন রূপান্তর ও প্রোটিন সুরক্ষার আণবিক শারীরবৃত্ত: E1-E2-E3 ইউবিকুইটিন ক্যাসকেড, ২৬এস প্রোটিওসোম গঠন ও বরটেজোমিব ফার্মাকোলজি, ম্যাক্রোঅটোফ্যাজি ফ্যাগোফোর গতিশীলতা ও LC3 লিপিডেশন, চ্যাপেরন-চালিত অটোফ্যাজি (CMA), সেস্ট্রিন২ ও র্যাগ GTPase চালিত লাইসোসোমাল mTORC1 পুষ্টি সংবেদন এবং কঙ্কালপেশি, যকৃৎ ও বৃক্কে সামগ্রিক নাইট্রোজেন ভারসাম্য।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Detail the enzymatic mechanics of the E1-E2-E3 ubiquitin cascade and 26S proteasomal core cleavage, explaining the pharmacology of proteasome inhibitors in multiple myeloma.',
      'E1-E2-E3 ইউবিকুইটিন ক্যাসকেড এবং ২৬এস প্রোটিওসোম কোরের অনুঘটনীয় কার্যপদ্ধতি ব্যাখ্যা করা এবং মাল্টিপল মায়েলোমায় প্রোটিওসোম ইনহিবিটরের ফার্মাকোলজি মূল্যায়ন করতে পারা।'
    ),
    l(
      'Contrast macroautophagy with chaperone-mediated autophagy (CMA), detailing ULK1 activation, LC3 lipidation, and LAMP-2A translocation.',
      'চ্যাপেরন-চালিত অটোফ্যাজির (CMA) সাথে ম্যাক্রোঅটোফ্যাজির তুলনা করা এবং ULK1 সক্রিয়করণ, LC3 লিপিডেশন ও LAMP-2A পরিবহন প্রক্রিয়া বিস্তারিত বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Analyze lysosomal amino acid sensing via Sestrin2, CASTOR1, Rag GTPases, and mTORC1 recruitment, evaluating muscle proteolysis in starvation and cachexia.',
      'সেস্ট্রিন২, ক্যাস্টর১ ও র্যাগ GTPase দ্বারা লাইসোসোমাল অ্যামিনো অ্যাসিড সংবেদন এবং mTORC1 নিয়ন্ত্রণ বিশ্লেষণ করা এবং অনাহার ও ক্যাচেক্সিয়ায় পেশি ভাঙন মূল্যায়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.amino-acid-catabolism-urea', 'topic.metabolism.carbon-skeletons-specialized-products'],
  relatedTopicIds: ['topic.metabolism.fed-fasted-starvation-states', 'topic.metabolism.organ-metabolic-specialization'],
  references: proteostasisRefs,
  evidenceBySection: {
    introduction: ['ciechanover-ups-cell-2005', 'lehninger-biochem-8e-ch27'],
    structure: ['ciechanover-ups-cell-2005', 'mizushima-autophagy-nature-2008'],
    mechanism: ['mizushima-autophagy-nature-2008', 'saxton-sabatini-mtorc1-cell-2017', 'cuervo-cma-trends-2014'],
    integration: ['saxton-sabatini-mtorc1-cell-2017', 'lehninger-biochem-8e-ch27'],
    practice: ['ciechanover-ups-cell-2005', 'mizushima-autophagy-nature-2008'],
    takeaways: ['ciechanover-ups-cell-2005', 'saxton-sabatini-mtorc1-cell-2017'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Proteostasis & Intracellular Renewal', '১. প্রোটিন ভারসাম্য ও অন্তঃকোষীয় নবায়ন'), sectionId: 'introduction' },
      { id: 'sec-ups', label: l('2. Ubiquitin Cascade & 26S Proteasome Architecture', '২. ইউবিকুইটিন ক্যাসকেড ও ২৬এস প্রোটিওসোম গঠন'), sectionId: 'structure' },
      { id: 'sec-autophagy', label: l('3. Macroautophagy, CMA & Phagophore Dynamics', '৩. ম্যাক্রোঅটোফ্যাজি, সিএমএ ও ফ্যাগোফোর গতিশীলতা'), sectionId: 'mechanism' },
      { id: 'sec-mtorc1', label: l('4. Lysosomal Nutrient Sensing: Rag GTPases & mTORC1', '৪. লাইসোসোমাল পুষ্টি সংবেদন: র্যাগ জিটিপিএজ ও এমটিওআরসি১'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Quantitative Nitrogen Pools & Muscle Proteolysis', '৫. পরিমাণগত নাইট্রোজেন পুল ও পেশি ভাঙন'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Clinical Inborn Errors: Proteasome Therapeutics & Summary', '৬. প্রোটিওসোম থেরাপিউটিক্স ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('26S Proteasome Complex', '২৬এস প্রোটিওসোম কমপ্লেক্স'),
        definition: l(
          'A 2.5-MDa barrel-shaped protease composed of a 20S catalytic core and 19S regulatory caps that selectively degrades polyubiquitinated proteins into small peptides in an ATP-dependent manner.',
          'একটি ২.৫ মেগাডাল্টনের বিশালাকার প্রোটিয়েজ এনজাইম কমপ্লেক্স যা ২০এস কোর ও ১৯এস ঢাকনা নিয়ে গঠিত এবং এটিপি শক্তি ব্যবহার করে বেছে বেছে ক্ষতিকর প্রোটিন ভেঙে পেপটাইডে পরিণত করে।'
        ),
      },
      {
        term: l('LC3 Lipidation (LC3-I to LC3-II)', 'LC3 লিপিডেশন (LC3-I থেকে LC3-II)'),
        definition: l(
          'The covalent conjugation of cytosolic LC3-I to membrane phosphatidylethanolamine (PE) catalyzed by the ATG12-ATG5-ATG16L1 complex, committing the protein to autophagosomal membrane expansion.',
          'সাইটোসোলিক LC3-I প্রোটিনের সাথে ঝিল্লির ফসফাটিডাইলইথানলঅ্যামাইন (PE) যুক্ত হয়ে লিপিডেটেড LC3-II গঠনের প্রক্রিয়া যা অটোফ্যাগোসোম ঝিল্লি প্রসারণের প্রতিশ্রুত চিহ্ন।'
        ),
      },
      {
        term: l('Sestrin2 Leucine Sensor', 'সেস্ট্রিন২ লিউসিন সেন্সর'),
        definition: l(
          'A direct cytosolic sensor for L-leucine that represses GATOR2 in the absence of leucine, maintaining Rag GTPases in an inactive state to silence mTORC1 until amino acids are replenished.',
          'সাইটোসোলে অবস্থিত এল-লিউসিন সেন্সর যা লিউসিনের অভাবে GATOR2-কে আটকে রেখে mTORC1 নিষ্ক্রিয় রাখে এবং অ্যামিনো অ্যাসিডের উপস্থিতি ঘটলে সংকেত মুক্ত করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Molecular Action of Bortezomib in Multiple Myeloma', 'মাল্টিপল মায়েলোমায় বরটেজোমিবের আণবিক কার্যপদ্ধতি'),
        steps: [
          l(
            'Malignant plasma cells produce vast quantities of monoclonal immunoglobulins, placing extreme biosynthetic demand on endoplasmic reticulum protein folding.',
            'মাল্টিপল মায়েলোমা ক্যান্সার কোষগুলো বিপুল পরিমাণ অ্যান্টিবডি তৈরি করে যা তাদের এন্ডোপ্লাজমিক রেটিকুলামে চরম চাপের সৃষ্টি করে।'
          ),
          l(
            'Misfolded immunoglobulin heavy and light chains are retrotranslocated to the cytosol via ER-associated degradation (ERAD) and targeted to the 26S proteasome.',
            'ত্রুটিপূর্ণ অ্যান্টিবডি প্রোটিনগুলো ERAD ব্যবস্থার মাধ্যমে সাইটোসোলে এসে ২৬এস প্রোটিওসোম দ্বারা ধ্বংসপ্রাপ্ত হয়।'
          ),
          l(
            'Bortezomib selectively binds and inhibits the chymotrypsin-like beta-5 subunit (PSMB5) of the 20S proteasome core.',
            'বরটেজোমিব ওষুধটি ২০এস প্রোটিওসোম কোরের বিটা-৫ সাবইউনিটকে সরাসরি ব্লক করে দেয়।'
          ),
          l(
            'Polyubiquitinated misfolded proteins rapidly accumulate, triggering terminal unfolded protein response (UPR), CHOP activation, and selective apoptosis of myeloma cells.',
            'এর ফলে বিষাক্ত প্রোটিন জমে কোষের ভেতরে তীব্র চাপ তৈরি হয় এবং ক্যান্সার কোষগুলো দ্রুত ধ্বংস হয়ে যায়।'
          ),
        ],
        conclusion: l(
          'Targeting the 20S proteasome exploits the heightened protein-folding dependency of secretory cancer cells to trigger selective apoptotic cell death.',
          'প্রোটিওসোম বন্ধ করে ক্যান্সার কোষের এই প্রোটিন চাপের দুর্বলতাকে কাজে লাগিয়ে তাদের বেছে বেছে ধ্বংস করা সম্ভব হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does muscle wasting accelerate dramatically in severe sepsis and cancer cachexia?',
          'মারাত্মক সেপসিস এবং ক্যান্সারের ক্যাচেক্সিয়ায় কেন দ্রুত কঙ্কালপেশি ক্ষয়প্রাপ্ত হয়?'
        ),
        answer: l(
          'Pro-inflammatory cytokines (TNF-alpha, IL-6) and elevated glucocorticoids stimulate FoxO transcription factors to massively upregulate muscle-specific E3 ligases MuRF1 and MAFbx (atrogin-1), driving hypercatabolic 26S proteasomal breakdown of myofibrillar proteins.',
          'প্রদাহজনক সাইটোকাইন ও কর্টিসল হরমোন পেশির বিশেষ E3 লিগেজ MuRF1 ও atrogin-1 এনজাইমকে অতিরিক্ত সক্রিয় করে তোলে, যার ফলে কঙ্কালপেশির অ্যাক্টিন ও মায়োসিন প্রোটিনগুলো প্রোটিওসোম দ্বারা দ্রুত ধ্বংস হয়ে যায়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: proteostasis3DData,
  interactiveDiagram: {
    id: 'proteostasis-autophagy-interactive-hub',
    title: l('Interactive Protein Turnover, Autophagy & Nutrient Sensing Engine', 'ইন্টারেক্টিভ প্রোটিন রূপান্তর, অটোফ্যাজি ও পুষ্টি সংবেদন ইঞ্জিন'),
    disclaimer: l(
      'Cellular proteostasis simulation: select nodes to trace the E1-E2-E3 ubiquitin cascade, 26S proteasome core, macroautophagy phagophore, and lysosomal Rag-mTORC1 signaling.',
      'কোষীয় প্রোটিন ভারসাম্য সিমুলেশন: নোড নির্বাচন করে E1-E2-E3 ইউবিকুইটিন ক্যাসকেড, ২৬এস প্রোটিওসোম কোর, অটোফ্যাগোসোম গঠন এবং লাইসোসোমাল র্যাগ-এমটিওআরসি১ সংকেত পর্যবেক্ষণ করুন।'
    ),
    description: l(
      'Detailed biochemical schematic detailing the E1-E2-E3 ubiquitin cascade, 26S proteasomal core, macroautophagy phagophore maturation, and lysosomal Rag-mTORC1 nutrient signaling.',
      'জৈবরাসাযনিক চিত্র যা E1-E2-E3 ইউবিকুইটিন ক্যাসকেড, ২৬এস প্রোটিওসোম কোর, ম্যাক্রোঅটোফ্যাগোসোম পরিপক্বতা এবং লাইসোসোমাল র্যাগ-এমটিওআরসি১ পুষ্টি সংকেত প্রদর্শন করে।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-ubiquitin-activation-e1',
        label: l('1. E1 Ubiquitin-Activating Enzyme (UBA1)', '১. E1 ইউবিকুইটিন-সক্রিয়কারী এনজাইম (UBA1)'),
        description: l(
          'UBA1 utilizes MgATP to adenylate Gly76 of ubiquitin, forming a high-energy E1-S~ubiquitin thioester bond.',
          'UBA1 এনজাইম এটিপি সহযোগে ইউবিকুইটিনের গ্লাইসিন-৭৬ প্রান্তে উচ্চ-শক্তির থায়োএস্টার বন্ধন তৈরি করে।'
        ),
        details: l(
          'The first committed step of all ubiquitination cascades, releasing PPi and AMP.',
          'ইউবিকুইটিনেশনের প্রাথমিক ও প্রধান সূচনাকারী ধাপ যা পাইরোফসফেট ও এএমপি মুক্ত করে।'
        ),
        sectionId: 'structure',
        color: '#f97316',
      },
      {
        id: 'node-ubiquitin-conjugation-e2',
        label: l('2. E2 Ubiquitin-Conjugating Enzymes (UBCs)', '২. E2 ইউবিকুইটিন-সংযোজক এনজাইম (UBC)'),
        description: l(
          'Activated ubiquitin is trans-thiolated to the active-site cysteine of one of ~40 distinct E2 enzymes.',
          'সক্রিয় ইউবিকুইটিন E1 থেকে E2 এনজাইমের সিস্টিন তলে স্থানান্তরিত হয়।'
        ),
        details: l(
          'Preserves the reactive high-energy thioester bond for targeted downstream transfer.',
          'সাবস্ট্রেট প্রোটিনে স্থানান্তরের জন্য উচ্চ-শক্তির থায়োএস্টার বন্ধনটি সুরক্ষিত রাখে।'
        ),
        sectionId: 'structure',
        color: '#eab308',
      },
      {
        id: 'node-ubiquitin-ligase-e3',
        label: l('3. E3 Ubiquitin Ligases (Substrate Specificity)', '৩. E3 ইউবিকুইটিন লিগেজ (সাবস্ট্রেট নির্দিষ্টতা)'),
        description: l(
          'Over 600 human E3 ligases bind specific degron motifs and catalyze isopeptide bond formation on target lysine residues.',
          'দেহে ৬০০টিরও বেশি E3 লিগেজ এনজাইম নির্দিষ্ট সাবস্ট্রেট প্রোটিনকে চিনে নিয়ে লাইসিনের সাথে ইউবিকুইটিন যুক্ত করে।'
        ),
        details: l(
          'Muscle-specific E3 ligases MuRF1 and atrogin-1 drive myofibrillar proteolysis during muscle wasting.',
          'পেশি-নির্দিষ্ট E3 লিগেজ MuRF1 ও atrogin-1 অনাহারে পেশি ভাঙন পরিচালনা করে।'
        ),
        sectionId: 'structure',
        color: '#22c55e',
      },
      {
        id: 'node-k48-polyubiquitin-chain',
        label: l('4. Lys48-Linked Polyubiquitin Signal', '৪. লাইসিন-৪৮ পলিইউবিকুইটিন সংকেত'),
        description: l(
          'A chain of at least four Lys48-linked ubiquitins constitutes the canonical degron recognized by the 19S cap.',
          'কমপক্ষে চারটি লাইসিন-৪৮ ইউবিকুইটিনের শিকল গঠিত হলেই ১৯এস ক্যাপ প্রোটিনটিকে ধ্বংসের জন্য গ্রহণ করে।'
        ),
        details: l(
          'Distinct from Lys63-linked chains, which mediate DNA repair and NF-kappaB signaling rather than proteasomal destruction.',
          'লাইসিন-৬৩ শিকল থেকে ভিন্ন, যা প্রোটিন ধ্বংসের বদলে ডিএনএ মেরামত ও সংকেত পরিবহনে কাজ করে।'
        ),
        sectionId: 'mechanism',
        color: '#3b82f6',
      },
      {
        id: 'node-26s-proteasome-destruction',
        label: l('5. 26S Proteasome (19S Cap & 20S Core)', '৫. ২৬এস প্রোটিওসোম (১৯এস ক্যাপ ও ২০এস কোর)'),
        description: l(
          'The 19S cap unfolds the substrate using AAA+ ATPases and threads it into the 20S core for proteolytic cleavage.',
          '১৯এস ঢাকনা এটিপি শক্তি দিয়ে পেঁচানো প্রোটিন সোজা করে ২০এস কোরে ঢুকিয়ে দেয় যেখানে এনজাইম তা টুকরো করে কাটে।'
        ),
        details: l(
          'Beta-5 chymotrypsin-like subunit is selectively targeted by bortezomib in multiple myeloma therapy.',
          'বিটা-৫ সাবইউনিট মাল্টিপল মায়েলোমা চিকিৎসায় বরটেজোমিব ওষুধের প্রধান লক্ষ্যবস্তু।'
        ),
        sectionId: 'mechanism',
        color: '#8b5cf6',
      },
      {
        id: 'node-autophagy-phagophore-lc3',
        label: l('6. Macroautophagy & LC3 Lipidation', '৬. ম্যাক্রোঅটোফ্যাজি ও LC3 লিপিডেশন'),
        description: l(
          'Starvation activates ULK1 and VPS34 PI3K, driving LC3-I conjugation to phosphatidylethanolamine (forming LC3-II).',
          'অনাহারে ULK1 কাইনেজ ও VPS34 সক্রিয় হয়ে LC3-I প্রোটিনকে ঝিল্লির সাথে যুক্ত করে LC3-II তৈরি করে।'
        ),
        details: l(
          'LC3-II mediates phagophore membrane elongation, engulfing cytoplasmic aggregates and damaged mitochondria.',
          'LC3-II ঝিল্লি বাড়িয়ে ক্ষতিকর বর্জ্য ও পুরনো মাইটোকন্ড্রিয়া আবৃত করে অটোফ্যাগোসোম গঠন করে।'
        ),
        sectionId: 'integration',
        color: '#ec4899',
      },
      {
        id: 'node-lysosomal-cathepsin-degradation',
        label: l('7. Autolysosome Fusion & Cathepsin Lysis', '৭. অটোলাইসোসোম ফিউশন ও ক্যাথেপসিন ভাঙন'),
        description: l(
          'Autophagosomes fuse with lysosomes via STX17 SNAREs; cathepsins digest cargo into free amino acids.',
          'অটোফ্যাগোসোম লাইসোসোমের সাথে একীভূত হয়ে অ্যাসিডিক পরিবেশে ক্যাথেপসিন দ্বারা প্রোটিন হজম করে।'
        ),
        details: l(
          'Released amino acids are exported via lysosomal SLC38 transporters to sustain cellular bioenergetics.',
          'মুক্ত অ্যামিনো অ্যাসিডগুলো পুনরায় সাইটোপ্লাজমে ফিরে গিয়ে কোষের শক্তির জোগান দেয়।'
        ),
        sectionId: 'integration',
        color: '#06b6d4',
      },
      {
        id: 'node-mtorc1-amino-acid-sensing',
        label: l('8. Lysosomal Amino Acid Sensing & mTORC1', '৮. লাইসোসোমাল অ্যামিনো অ্যাসিড সংবেদন ও mTORC1'),
        description: l(
          'Leucine (via Sestrin2) and arginine activate Rag GTPases, recruiting mTORC1 to lysosomal Rheb-GTP to activate protein synthesis.',
          'লিউসিন ও আরজিনিন র্যাগ প্রোটিন সক্রিয় করে mTORC1-কে লাইসোসোমে এনে প্রোটিন তৈরি চালু করে ও অটোফ্যাজি বন্ধ করে।'
        ),
        details: l(
          'Nutrient abundance silences autophagy while nutrient deprivation triggers immediate autophagic induction.',
          'পুষ্টি প্রাচুর্যে অটোফ্যাজি বন্ধ থাকে এবং পুষ্টিহীনতায় তাৎক্ষণিকভাবে অটোফ্যাজি চালু হয়।'
        ),
        sectionId: 'integration',
        color: '#10b981',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'Cellular proteostasis diagram illustrating the E1-E2-E3 ubiquitin cascade, 26S proteasome proteolytic digestion, macroautophagy phagophore formation, LC3 lipidation, and lysosomal degradation.',
      'ই১-ই২-ই৩ ইউবিকুইটিন ক্যাসকেড, ২৬এস প্রোটিওসোম ধ্বংসকরণ, ম্যাক্রোঅটোফ্যাগোসোম গঠন, LC3 লিপিডেশন এবং লাইসোসোমাল ক্ষয় প্রদর্শনকারী প্রোটিন ভারসাম্য রেখাচিত্র।'
    ),
    steps: [
      l(
        'Step 1: E1 activates ubiquitin, E2 conjugates it, and E3 ligase covalently tags misfolded proteins with Lys48-polyubiquitin chains.',
        'ধাপ ১: E1 ইউবিকুইটিনকে সক্রিয় করে, E2 তা গ্রহণ করে এবং E3 লাইগেজ ভুল প্রোটিনকে Lys48-পলিইউবিকুইটিন শিকল দ্বারা চিহ্নিত করে।'
      ),
      l(
        'Step 2: 19S cap unfolds the polyubiquitinated protein into the 20S proteolytic chamber (beta-1, beta-2, beta-5 subunits) for cleavage into small peptides.',
        'ধাপ ২: ১৯এস রেগুলেটরি কণা প্রোটিনের ভাঁজ খুলে ২০এস চেম্বারে (বিটা-১, বিটা-২, বিটা-৫ সাবইউনিট) পাঠায় যেখানে এটি ক্ষুদ্র পেপটাইডে পরিণত হয়।'
      ),
      l(
        'Step 3: Starvation triggers ULK1/Beclin-1 to form autophagosomes; LC3-II seals the vesicle, fusing with acidic lysosomes to recycle bulk nutrients.',
        'ধাপ ৩: পুষ্টিহীনতায় অটোফ্যাগোসোম গঠিত হয়; LC3-II ভেসিকল বন্ধ করে এবং তা লাইসোসোমের সাথে মিশে প্রোটিন ভেঙে নতুন শক্তি যোগায়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 64-year-old male with relapsed IgG kappa multiple myeloma is treated with the boronic acid dipeptide proteasome inhibitor bortezomib. Which specific catalytic subunit of the 20S core proteasome is primarily targeted and inhibited by bortezomib, and what is its specific enzymatic cleavage activity?',
      'মাল্টিপল মায়েলোমায় আক্রান্ত ৬৪ বছর বয়সী এক রোগীকে প্রোটিওসোম ইনহিবিটর বরটেজোমিব দ্বারা চিকিৎসা দেওয়া হলো। ২০এস কোর প্রোটিওসোমের কোন নির্দিষ্ট অনুঘটনীয় সাবইউনিট বরটেজোমিব দ্বারা সরাসরি অবরুদ্ধ হয় এবং এর এনজাইম কার্যকারিতা কী?'
    ),
    options: [
      l(
        'Beta-1 subunit (PSMB6) responsible for caspase-like (peptidyl-glutamyl peptide hydrolyzing) cleavage.',
        'বিটা-১ সাবইউনিট (PSMB6) যা ক্যাসপেসের মতো ক্লিভেজ সম্পন্ন করে।'
      ),
      l(
        'Beta-2 subunit (PSMB7) responsible for trypsin-like basic residue cleavage.',
        'বিটা-২ সাবইউনিট (PSMB7) যা ট্রিপসিনের মতো ক্ষারীয় অ্যামিনো অ্যাসিডের পরে কাটে।'
      ),
      l(
        'Beta-5 subunit (PSMB5) responsible for chymotrypsin-like proteolytic cleavage after hydrophobic amino acid residues.',
        'বিটা-৫ সাবইউনিট (PSMB5) যা হাইড্রোফোবিক অ্যামিনো অ্যাসিডের পরে কাইমোট্রিপসিনের মতো প্রোটিওলাইটিক ক্লিভেজ সম্পন্ন করে।'
      ),
      l(
        'Alpha-7 subunit responsible for gated entry of unfolded polypeptide substrates.',
        'আলফা-৭ সাবইউনিট যা সাবস্ট্রেটের প্রবেশপথ নিয়ন্ত্রণ করে।'
      ),
    ],
    correctIndex: 2,
    explanation: l(
      'Bortezomib specifically and reversibly inhibits the Beta-5 catalytic subunit (PSMB5) of the 20S core proteasome, which possesses chymotrypsin-like proteolytic activity targeting peptide bonds after hydrophobic residues. In multiple myeloma cells producing vast quantities of misfolded paraproteins, PSMB5 inhibition triggers massive accumulation of polyubiquitinated proteins, precipitating fatal endoplasmic reticulum stress, the terminal unfolded protein response (UPR), and caspase-mediated apoptosis.',
      'বরটেজোমিব বিশেষভাবে ২০এস কোর প্রোটিওসোমের বিটা-৫ সাবইউনিটকে (PSMB5) বন্ধ করে, যার কাইমোট্রিপসিনের মতো হাইড্রোফোবিক অ্যামিনো অ্যাসিড কাটার ক্ষমতা থাকে। মায়েলোমা কোষে অতিরিক্ত প্রোটিন তৈরির কারণে বিটা-৫ বন্ধ হলে কোষের মধ্যে বিষাক্ত প্রোটিন জমে মারাত্মক এন্ডোপ্লাজমিক রেটিকুলাম চাপ সৃষ্টি হয় এবং ক্যান্সার কোষগুলো ধ্বংস হয়ে যায়।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Constant Dynamic Renewal of Body Proteins', 'দেহের প্রোটিনের অবিরাম গতিশীল রূপান্তর'),
          paragraphs: [
            l(
              'Unlike glycogen or adipose triacylglycerols, which exist primarily as specialized, inert energy reserves, body protein serves vital active roles as structural scaffolds, catalytic enzymes, membrane transporters, and contractile motors. Nevertheless, proteins are not static structures; they undergo continuous synthesis and degradation—a physiological process termed dynamic protein turnover—totaling 300 to 400 grams per day in an adult human.',
              'গ্লাইকোজেন বা ফ্যাটের মতো প্রোটিন কেবল নিষ্ক্রিয় জ্বালানি হিসেবে জমা থাকে না; এটি কোষের গঠন, এনজাইম অনুঘটন, ঝিল্লি পরিবহন এবং পেশির সংকোচনে সার্বক্ষণিক সক্রিয় ভূমিকা পালন করে। তা সত্ত্বেও দেহের প্রোটিন কোনো স্থির উপাদান নয়; এটি প্রতিনিয়ত তৈরি ও ধ্বংস হয়—একটি প্রাপ্তবয়স্ক মানুষের দেহে প্রতিদিন ৩০০ থেকে ৪০০ গ্রাম প্রোটিনের এই নিরবচ্ছিন্ন রূপান্তর ঘটে।'
            ),
            l(
              'Continuous turnover ensures cellular health by rapidly destroying misfolded, oxidatively damaged, or abnormal proteins before they aggregate into toxic inclusions. Furthermore, protein degradation provides an immediate, indispensable supply of free amino acids during periods of fasting or nutrient deprivation, allowing vital organs such as the heart and brain to maintain essential protein synthesis and gluconeogenesis.',
              'এই অবিরাম রূপান্তর ক্ষতিগ্রস্ত বা ভুলভাবে ভাঁজ হওয়া প্রোটিনগুলো দ্রুত ধ্বংস করে কোষের স্বাস্থ্য সুরক্ষা করে যাতে তারা ক্ষতিকর ক্লাম্প তৈরি করতে না পারে। তাছাড়া অনাহারের সময় এই প্রোটিন ভাঙন থেকেই মুক্ত অ্যামিনো অ্যাসিড পাওয়া যায় যা দিয়ে হৃৎপিণ্ড ও মস্তিষ্কের মতো অপরিহার্য অঙ্গে নতুন প্রোটিন এবং রক্তের গ্লুকোজ তৈরি সচল রাখা হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Two Waste Disposal Systems: Proteasomes & Lysosomes', 'দুটি প্রধান বর্জ্য ধ্বংস ব্যবস্থা: প্রোটিওসোম ও লাইসোসোম'),
          paragraphs: [
            l(
              'To eliminate unneeded or damaged proteins, cells utilize two complementary, exquisitely regulated degradation systems: the ubiquitin-proteasome system (UPS) and the lysosomal autophagy system. The ubiquitin-proteasome system operates within the cytosol and nucleus, acting as a high-precision molecular shredder that degrades individual, short-lived, or misfolded proteins that have been tagged with a small molecular marker named ubiquitin.',
              'অপ্রয়োজনীয় বা নষ্ট প্রোটিন ধ্বংস করতে কোষ দুটি চমৎকার নিয়ন্ত্রিত ব্যবস্থা ব্যবহার করে: ইউবিকুইটিন-প্রোটিওসোম ব্যবস্থা এবং লাইসোসোমাল অটোফ্যাজি ব্যবস্থা। প্রোটিওসোম ব্যবস্থা সাইটোপ্লাজম ও নিউক্লিয়াসে একটি উচ্চ-ক্ষমতার আণবিক কাঁচির মতো কাজ করে, যা ইউবিকুইটিন নামক বিশেষ সংকেতযুক্ত একক বা ক্ষণস্থায়ী প্রোটিনগুলোকে বেছে বেছে ধ্বংস করে।'
            ),
            l(
              'In contrast, the autophagy-lysosome pathway is a bulk recycling system capable of engulfing whole protein aggregates, worn-out organelles (such as aging mitochondria and endoplasmic reticulum fragments), and invading intracellular microbes. Enclosed inside double-membraned vesicles called autophagosomes, this cargo is delivered to lysosomes, where potent acid digestive enzymes break it down into basic building blocks for reuse.',
              'পক্ষান্তরে অটোফ্যাজি-লাইসোসোম ব্যবস্থা হলো একটি বৃহৎ পুনর্ব্যবহার কেন্দ্র যা বড় প্রোটিন পিণ্ড, পুরনো মাইটোকন্ড্রিয়া বা অন্যান্য কোষাঙ্গাণু এবং জীবাণুকে সম্পূর্ণ গিলে ফেলতে পারে। দ্বি-স্তরবিশিষ্ট অটোফ্যাগোসোম নামক থলিতে ভরে এগুলোকে লাইসোসোমে পাঠানো হয়, যেখানে শক্তিশালী অ্যাসিডিক পাচক রস তাদের ভেঙে মূল অ্যামিনো অ্যাসিডে পরিণত করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('How Cells Tag Proteins for Destruction: Ubiquitin & the 26S Barrel', 'কোষ কীভাবে প্রোটিন চিহ্নিত করে: ইউবিকুইটিন ও ২৬এস ড্রাম'),
          paragraphs: [
            l(
              'Targeting a protein for proteasomal destruction requires the coordinated action of a three-enzyme cascade. First, enzyme E1 activates the 76-amino-acid peptide ubiquitin using energy from ATP. Next, ubiquitin is transferred to enzyme E2, which teams up with enzyme E3 (ubiquitin ligase). The E3 ligase acts as the master matchmaker, recognizing specific structural defects on the doomed protein and attaching ubiquitin onto its lysine residues.',
              'প্রোটিওসোম দ্বারা একটি প্রোটিনকে ধ্বংস করতে তিনটি এনজাইমের একটি সুসংগঠিত দল কাজ করে। প্রথমে E1 এনজাইম এটিপি শক্তি ব্যবহার করে ইউবিকুইটিনকে সক্রিয় করে। এরপর এটি E2 এনজাইমে যায় এবং E3 এনজাইমের সাথে যুক্ত হয়। E3 এনজাইম নষ্ট প্রোটিনের ত্রুটি শনাক্ত করে তার গায়ে ইউবিকুইটিনের লেবেল সেঁটে দেয়।'
            ),
            l(
              'When a chain of four or more ubiquitins is assembled, the marked protein is recognized by the 19S cap of the giant 26S proteasome complex. The 19S cap strips off the ubiquitin tags for recycling, unfolds the tangled protein using ATP motors, and feeds the linear polypeptide into the hollow 20S core barrel, where active proteolytic enzymes chop the substrate into short, harmless peptide fragments.',
              'যখন পরপর চারটি বা ততোধিক ইউবিকুইটিনের একটি শিকল তৈরি হয়, তখন ২৬এস প্রোটিওসোমের ১৯এস ঢাকনা সেই প্রোটিনটিকে ধরে ফেলে। ঢাকনাটি ইউবিকুইটিনগুলোকে খুলে সংরক্ষণ করে, এটিপি শক্তি দিয়ে পেঁচানো প্রোটিনটিকে সোজা করে এবং ২০এস পিপার ভেতরে ঢুকিয়ে দেয়, যেখানে এনজাইমগুলো প্রোটিনটিকে ক্ষুদ্র পেপটাইড খণ্ডে কেটে ফেলে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Autophagy in Health & Disease: From Starvation Defense to Cancer', 'স্বাস্থ্য ও রোগে অটোফ্যাজি: অনাহার প্রতিরোধ থেকে ক্যান্সার'),
          paragraphs: [
            l(
              'Autophagy (literally "self-eating") is essential for surviving nutritional deprivation. When food is scarce, cells upregulate autophagy to digest non-essential cytoplasmic components, generating a steady internal stream of amino acids and fatty acids that keep the cell energized. Nobel laureate Yoshinori Ohsumi demonstrated that basal autophagy is also vital under well-nourished conditions, continuously removing damaged mitochondria to prevent toxic oxidative stress.',
              'অটোফ্যাজি (যার আক্ষরিক অর্থ "আত্ম-ভক্ষণ") পুষ্টিহীনতায় টিকে থাকার জন্য অপরিহার্য। খাবারের অভাব দেখা দিলে কোষ এই ব্যবস্থা চালু করে কম গুরুত্বপূর্ণ অংশগুলো ভেঙে ফেলে মুক্ত শক্তি ও অ্যামিনো অ্যাসিড তৈরি করে। নোবেল বিজয়ী বিজ্ঞানী ইয়োশিনোরি ওহসুমি প্রমাণ করেছেন যে সুষম পুষ্টির মধ্যেও অটোফ্যাজি কোষের বিষাক্ত অংশগুলো দূর করে দীর্ঘায়ু নিশ্চিত করে।'
            ),
            l(
              'Defects in autophagy are linked to neurodegenerative disorders such as Parkinson and Alzheimer diseases, where toxic protein aggregates accumulate and kill neurons. Conversely, advanced cancer cells frequently hijack autophagy to survive oxygen and nutrient starvation inside growing tumors, making autophagy inhibitors an exciting area of ongoing oncology research.',
              'অটোফ্যাজি ঠিকমতো কাজ না করলে পার্কিনসন ও আলঝেইমারের মতো মারাত্মক স্নায়ুরোগ দেখা দেয়, যেখানে বিষাক্ত প্রোটিন জমে মস্তিষ্কের নিউরন ধ্বংস করে। অন্যদিকে ক্যান্সার কোষ এই প্রক্রিয়াকে কাজে লাগিয়ে টিউমারের বৈরী পরিবেশে টিকে থাকে, তাই ক্যান্সার ধ্বংসে অটোফ্যাজি বন্ধ করার ওষুধ নিয়ে ব্যাপক গবেষণা চলছে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('The Free Amino Acid Pool & Daily Protein Balance', 'মুক্ত অ্যামিনো অ্যাসিড পুল ও দৈনিক প্রোটিনের ভারসাম্য'),
          paragraphs: [
            l(
              'The body maintains a dynamic free amino acid pool of approximately 100 grams distributed throughout blood plasma and intracellular water. This pool is constantly supplied by three sources: dietary protein absorption (~70–100 g/day), endogenous tissue protein breakdown (~300–400 g/day), and de novo synthesis of non-essential amino acids. Simultaneously, amino acids exit the pool via protein synthesis, specialized molecule production, and irreversible catabolic oxidation.',
              'মানবদেহে রক্তরস ও কোষের পানির মধ্যে প্রায় ১০০ গ্রাম মুক্ত অ্যামিনো অ্যাসিডের একটি গতিশীল ভাণ্ডার থাকে। খাদ্যের প্রোটিন শোষণ, শরীরের পুরনো প্রোটিনের ভাঙন এবং দেহে নতুন অ্যামিনো অ্যাসিড তৈরির মাধ্যমে এই ভাণ্ডার পূর্ণ হয়; একই সাথে নতুন প্রোটিন তৈরি এবং জ্বালানি হিসেবে পোড়ানোর মাধ্যমে এই ভাণ্ডার থেকে অ্যামিনো অ্যাসিড খরচ হয়।'
            ),
            l(
              'To preserve muscle mass and organ function, adults require a minimum daily protein intake of 0.8 g/kg body weight, with higher requirements (1.2–2.0 g/kg) recommended during illness, athletic recovery, and healthy aging to counteract progressive sarcopenia and stimulate tissue repair.',
              'পেশি ও গুরুত্বপূর্ণ অঙ্গের সুস্থতা বজায় রাখতে প্রাপ্তবয়স্কদের দৈনিক প্রতি কেজি ওজনের জন্য কমপক্ষে ০.৮ গ্রাম প্রোটিন খাওয়া প্রয়োজন; আর অসুস্থতা, ক্রীড়া পুনরুদ্ধার এবং বার্ধক্যে পেশিক্ষয় রোধে এই চাহিদা বেড়ে ১.২ থেকে ২.০ গ্রাম পর্যন্ত হতে পারে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Principles of Cellular Proteostasis', 'কোষীয় প্রোটিন ভারসাম্যের মূল শিক্ষণীয় বিষয়'),
          paragraphs: [
            l(
              'Proteostasis is an active, continuous equilibrium governed by the precision tagging of the ubiquitin-proteasome system and the macroscopic cleaning power of autophagy. Together, these degradation machineries safeguard cell viability, replenish the metabolic amino acid pool, and prevent fatal protein misfolding pathologies.',
              'প্রোটিন ভারসাম্য হলো একটি সক্রিয় অবিরাম প্রক্রিয়া যা ইউবিকুইটিন-প্রোটিওসোমের নিখুঁত ধ্বংস ক্ষমতা এবং অটোফ্যাজির বৃহৎ পরিচ্ছন্নতার ওপর প্রতিষ্ঠিত। একসাথে এই ব্যবস্থাগুলো কোষকে সুস্থ রাখে, বিপাকীয় অ্যামিনো অ্যাসিডের জোগান সচল রাখে এবং ক্ষতিকর প্রোটিন জমা হওয়া জনিত মারাত্মক রোগব্যাধি প্রতিরোধ করে।'
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
          heading: l('The Enzymatic Hierarchy of Ubiquitination: E1, E2 & E3 Mechanics', 'ইউবিকুইটিনেশনের এনজাইমেটিক অনুক্রম: E1, E2 ও E3 কার্যপদ্ধতি'),
          paragraphs: [
            l(
              'Ubiquitination is an ATP-dependent covalent modification carried out by a pyramidal enzymatic cascade. Ubiquitin-activating enzyme (E1, encoded by UBA1 or UBA6) initiates the pathway by binding ubiquitin and MgATP, adenylating ubiquitin’s C-terminal carboxylate (Gly76) with release of pyrophosphate. The catalytic cysteine of E1 attacks the mixed anhydride intermediate, generating a high-energy E1-S~ubiquitin thioester bond while releasing AMP.',
              'ইউবিকুইটিনেশন হলো একটি এটিপি-নির্ভর কোভ্যালেন্ট পরিবর্তন যা একটি পিরামিডীয় এনজাইম দল দ্বারা সম্পন্ন হয়। E1 এনজাইম এটিপি সহযোগে ইউবিকুইটিনের গ্লাইসিন-৭৬ প্রান্তে অ্যাডিনাইল যুক্ত করে পাইরোফসফেট মুক্ত করে। এরপর E1-এর ক্যাটালাইটিক সিস্টিন গ্রুপ উচ্চ-শক্তিসম্পন্ন থায়োএস্টার বন্ধন তৈরি করে এএমপি মুক্ত করে।'
            ),
            l(
              'A trans-thiolation reaction transfers the activated ubiquitin to the active-site cysteine of one of ~40 ubiquitin-conjugating enzymes (E2s). Finally, one of more than 600 substrate-specific ubiquitin ligases (E3s) recruits both the ubiquitin-charged E2 and the target protein. In RING-type E3s, the ligase acts as an allosteric scaffold facilitating direct transfer of ubiquitin from E2 to a lysine epsilon-amino group on the substrate; in HECT- and RBR-type E3s, ubiquitin is first transferred to a catalytic cysteine on the E3 before final conjugation to the substrate.',
              'এরপর একটি বিশেষ বিক্রিয়ায় সক্রিয় ইউবিকুইটিন E2 এনজাইমের সিস্টিনে স্থানান্তরিত হয়। অবশেষে ৬০০টিরও বেশি নির্দিষ্ট E3 লিগেজের মধ্যে একটি উপযুক্ত এনজাইম সাবস্ট্রেট প্রোটিনকে ধরে এনে তার গায়ে ইউবিকুইটিন যুক্ত করে দেয়। RING লিগেজ সরাসরি সংযোগ ঘটায়, আর HECT লিগেজ প্রথমে নিজের গায়ে ইউবিকুইটিন ধারণ করে তারপর সাবস্ট্রেটে স্থানান্তর করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Architecture of the 26S Proteasome: The 19S Regulatory Particle & 20S Core', '২৬এস প্রোটিওসোমের গঠন: ১৯এস নিয়ন্ত্রক কণা ও ২০এস কোর'),
          paragraphs: [
            l(
              'The 26S proteasome (molecular mass ~2.5 MDa) is an ATP-dependent cylindrical holoenzyme composed of a central 20S core particle capped at one or both ends by a 19S regulatory particle. The 20S core comprises four stacked heptameric rings in an alpha-7, beta-7, beta-7, alpha-7 configuration. The outer alpha-rings form a narrow axial gate that prevents entry of folded proteins, while the inner beta-rings house the proteolytic active sites facing the internal catalytic chamber.',
              '২৬এস প্রোটিওসোম (ভর প্রায় ২.৫ মেগাডাল্টন) হলো একটি বিশালাকার সিলিন্ডার আকৃতির হোলোএনজাইম, যার মাঝে থাকে ২০এস কোর কণা এবং দুই প্রান্তে থাকে ১৯এস রেগুলেটরি ঢাকনা। ২০এস কোরটি চারটি সাত-সদস্যের বলয় (আলফা-৭, বিটা-৭, বিটা-৭, আলফা-৭) দিয়ে স্তূপাকারে গঠিত। বাইরের আলফা বলয় সরু গেট তৈরি করে পেঁচানো প্রোটিন ঢুকতে বাধা দেয়, আর ভেতরের বিটা বলয়ে প্রোটিন ধ্বংসকারী এনজাইমগুলো অবস্থান করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Proteolytic Active Sites of the 20S Core & 19S Unfolding Machinery', '২০এস কোরের প্রোটিওলাইটিক সক্রিয় তল ও ১৯এস উন্মোচন ব্যবস্থা'),
          paragraphs: [
            l(
              'Three beta-subunits in each inner ring display distinct threonine protease activities using the N-terminal threonine (Thr1) hydroxyl group as a nucleophile: beta-1 (PSMB6, caspase-like, cleaves after acidic residues), beta-2 (PSMB7, trypsin-like, cleaves after basic residues), and beta-5 (PSMB5, chymotrypsin-like, cleaves after hydrophobic residues). Together, these sites hydrolyze polypeptide backbones processively into oligopeptides 3 to 15 amino acids long.',
              'ভেতরের বলয়ের তিনটি বিটা সাবইউনিট থ্রিওনিন-১ অ্যামিনো অ্যাসিড ব্যবহার করে প্রোটিন কাটার কাজ করে: বিটা-১ অ্যাসিডিক অংশের পর কাটে, বিটা-২ ক্ষারীয় অংশের পর কাটে, এবং বিটা-৫ হাইড্রোফোবিক অংশের পর কাটে। একসাথে এই তিনটি তল যেকোনো প্রোটিনকে ৩ থেকে ১৫ অ্যামিনো অ্যাসিডের ক্ষুদ্র ক্ষুদ্র পেপটাইড খণ্ডে রূপান্তরিত করে ফেলে।'
            ),
            l(
              'The 19S regulatory particle coordinates substrate entry through two subcomplexes: the lid and the base. The lid houses deubiquitinating enzymes, primarily the zinc metalloprotease Rpn11, which cleaves the isopeptide bond at the base of the Lys48 ubiquitin chain before substrate entry. The base contains a hexameric ring of AAA+ ATPases (Rpt1 through Rpt6) that dock into the alpha-ring crevices, open the 20S gate, and utilize ATP hydrolysis to mechanically unfold the substrate and thread it into the proteolytic chamber.',
              '১৯এস রেগুলেটরি ঢাকনা সাবস্ট্রেট প্রবেশ নিয়ন্ত্রণ করে। এর মধ্যে থাকা Rpn11 এনজাইম প্রোটিন ঢোকার আগে ইউবিকুইটিনের শিকলটি অক্ষত অবস্থায় কেটে সরিয়ে নেয়। ঢাকনার তলায় থাকা ছয়টি শক্তিশালী AAA+ এটিপি-মোটর প্রোটিনকে সোজা করে ২০এস চেম্বারের ভেতর জোরপূর্বক ঢুকিয়ে দেয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Macroautophagy Pathway: From ULK1 Activation to Phagophore Closure', 'ম্যাক্রোঅটোফ্যাজি পথ: ULK1 সক্রিয়করণ থেকে ফ্যাগোফোর সমাপ্তি'),
          paragraphs: [
            l(
              'Macroautophagy initiation is governed by the ULK1 complex (ULK1, ATG13, FIP200, ATG101). Under nutrient sufficiency, mTORC1 phosphorylates ULK1 at Ser757 to inhibit its activity; upon starvation or AMPK activation (via phosphorylation at Ser317/Ser777), ULK1 is activated and phosphorylates Beclin-1 in the class III PI3K complex (VPS34, VPS15, Beclin-1, ATG14L). Active VPS34 generates phosphatidylinositol 3-phosphate (PI3P) at specialized ER subdomains known as omegasomes.',
              'ম্যাক্রোঅটোফ্যাজি শুরু হয় ULK1 কমপ্লেক্স দ্বারা। পুষ্টি প্রাচুর্যে mTORC1 এই পথকে অবদমিত রাখে; তবে অনাহারে AMPK সক্রিয় হয়ে ULK1-কে উদ্দীপ্ত করে যা বেকলিন-১ ও VPS34 এনজাইমকে চালু করে। সক্রিয় VPS34 এন্ডোপ্লাজমিক রেটিকুলামের বিশেষ অংশে PI3P লিপিড তৈরি করে যা ফ্যাগোফোর তৈরির সূচনা করে।'
            ),
            l(
              'PI3P recruits effector proteins WIPI1/2, which recruit the ATG12-ATG5-ATG16L1 complex. This complex functions as an E3-like ligase that couples phosphatidylethanolamine (PE) to cytosolic LC3-I (generated by ATG4 cleavage of pro-LC3), converting it into lipidated, membrane-bound LC3-II. LC3-II drives membrane elongation and curvature of the phagophore around cytoplasmic cargo, guided by selective autophagy receptors such as p62/SQSTM1. Upon closure, the double-membraned autophagosome fuses with a lysosome via STX17 SNARE machinery, forming an autolysosome where acid hydrolases digest the entrapped contents.',
              'PI3P লিপিড বিশেষ ATG কমপ্লেক্সকে টেনে আনে যা সাইটোসোলিক LC3-I প্রোটিনের সাথে ঝিল্লির ফসফাটিডাইলইথানলঅ্যামাইন যুক্ত করে লিপিডেটেড LC3-II তৈরি করে। এই LC3-II ঝিল্লিকে বাঁকিয়ে ক্ষতিকর বর্জ্য ঘিরে ফেলে এবং অটোফ্যাগোসোম তৈরি করে, যা পরে লাইসোসোমের সাথে মিশে বর্জ্য সম্পূর্ণ হজম করে ফেলে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Lysosomal Nutrient Sensing: The Sestrin–Rag–mTORC1 Signaling Axis', 'লাইসোসোমাল পুষ্টি সংবেদন: সেস্ট্রিন-র্যাগ-mTORC1 সংকেত অক্ষ'),
          paragraphs: [
            l(
              'Mechanistic Target of Rapamycin Complex 1 (mTORC1) coordinates cell growth and autophagy by sensing amino acid levels directly at the lysosomal surface. The Rag GTPases form obligate heterodimers (RagA or RagB bound to RagC or RagD) tethered to the lysosomal membrane by the pentameric Ragulator complex. Activation requires RagA/B to be GTP-loaded and RagC/D to be GDP-loaded.',
              'কোষের বৃদ্ধি ও অটোফ্যাজির প্রধান নিয়ন্ত্রক mTORC1 সরাসরি লাইসোসোমের তলে অ্যামিনো অ্যাসিডের মাত্রা পরিমাপ করে। র্যাগ GTPase প্রোটিনগুলো লাইসোসোমের ঝিল্লিতে র্যাগুলেটর কমপ্লেক্সের সাথে যুক্ত থাকে। পুষ্টির সংকেত পেতে হলে RagA/B-কে GTP এবং RagC/D-কে GDP দ্বারা সজ্জিত হতে হয়।'
            ),
            l(
              'Cytosolic amino acid sensors regulate Rag nucleotide status via the GATOR complexes. In leucine deficiency, Sestrin2 binds and inhibits GATOR2, permitting the GAP complex GATOR1 to keep RagA/B in the inactive GDP state. When leucine binds Sestrin2, it releases GATOR2, which represses GATOR1. Concurrently, intralysosomal arginine stimulates the SLC38A9 transporter, promoting Rag nucleotide exchange. The activated Rag heterodimer physically binds raptor, recruiting mTORC1 to the lysosomal membrane where it is maximally activated by GTP-bound Rheb, suppressing autophagy and driving protein translation.',
              'সাইটোসোলিক সেন্সরগুলো র্যাগ প্রোটিনের অবস্থা নিয়ন্ত্রণ করে। লিউসিনের অভাবে সেস্ট্রিন২ GATOR কমপ্লেক্সের মাধ্যমে র্যাগ প্রোটিনকে নিষ্ক্রিয় রাখে। লিউসিন ও আরজিনিনের উপস্থিতি ঘটলে এই বাধা সরে যায় এবং সক্রিয় র্যাগ প্রোটিন mTORC1-কে লাইসোসোমের তলে নিয়ে আসে যেখানে Rheb-GTP-এর সাহায্যে এটি পূর্ণ সক্রিয় হয়ে প্রোটিন উৎপাদন বাড়িয়ে দেয় ও অটোফ্যাজি বন্ধ করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Analytical Summary of Protein Degradation & Nitrogen Sensing', 'প্রোটিন অবক্ষয় ও নাইট্রোজেন সংবেদনের বিশ্লেষণাত্মক সারসংক্ষেপ'),
          paragraphs: [
            l(
              'The ubiquitin-proteasome system and autophagy represent two intricately interconnected arms of eukaryotic proteostasis. While the UPS provides immediate, single-substrate clearance and cell cycle regulation, autophagy maintains organelle quality and whole-body nitrogen buffering during starvation, with both pathways tightly tuned by lysosomal amino acid-sensing machineries.',
              'ইউবিকুইটিন-প্রোটিওসোম ব্যবস্থা এবং অটোফ্যাজি হলো কোষের সুরক্ষার দুটি পরস্পর সংযুক্ত প্রধান বাহু। প্রোটিওসোম যেখানে সুনির্দিষ্ট একক প্রোটিন ধ্বংস ও কোষচক্র নিয়ন্ত্রণ করে, অটোফ্যাজি সেখানে অনাহারে পুরো কোষের অঙ্গাণু নবায়ন ও নাইট্রোজেন জোগান নিশ্চিত করে, যা লাইসোসোমের অ্যামিনো অ্যাসিড সেন্সর দ্বারা নিখুঁতভাবে পরিচালিত হয়।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'mechanism',
          heading: l('Targeted Protein Degradation: PROTACs & Molecular Glues in Chemical Biology', 'লক্ষ্যভিত্তিক প্রোটিন অবক্ষয়: কেমিক্যাল বায়োলজিতে প্রোস্যাক ও মলিকুলার গ্লু'),
          paragraphs: [
            l(
              'A paradigm shift in drug discovery is Targeted Protein Degradation (TPD) utilizing Proteolysis Targeting Chimeras (PROTACs). A PROTAC is a bifunctional molecule comprising a ligand binding a protein of interest (POI), a flexible chemical linker, and a ligand binding a specific E3 ubiquitin ligase (most commonly cereblon [CRBN] or von Hippel-Lindau [VHL]). By physically inducing proximity between the target protein and the E3 ligase, the PROTAC catalyzes rapid, iterative polyubiquitination and 26S proteasomal destruction of the POI.',
              'ওষুধ আবিষ্কারে একটি বৈপ্লবিক অগ্রগতি হলো প্রোস্যাক (PROTAC) প্রযুক্তি ব্যবহার করে লক্ষ্যভিত্তিক প্রোটিন ধ্বংসকরণ। একটি প্রোস্যাক হলো দ্বি-মুখী অণু যার এক প্রান্তে থাকে কাঙ্ক্ষিত রোগ সৃষ্টিকারী প্রোটিনের সাথে যুক্ত হওয়ার অংশ এবং অন্য প্রান্তে থাকে E3 ইউবিকুইটিন লিগেজের (যেমন CRBN বা VHL) সাথে যুক্ত হওয়ার অংশ। এই অণুটি দুটি প্রোটিনকে পরস্পরের কাছে এনে ক্ষতিকর প্রোটিনটিকে দ্রুত ইউবিকুইটিনযুক্ত করে প্রোটিওসোম দ্বারা ধ্বংস করে ফেলে।'
            ),
            l(
              'Unlike conventional small-molecule inhibitors that require sustained stoichiometric binding to an active enzymatic cleft (occupancy-driven pharmacology), PROTACs operate via an event-driven mechanism: once a target molecule is ubiquitinated and degraded, the PROTAC dissociates and recruits additional target molecules. This allows targeted destruction of historically undruggable oncoproteins lacking enzymatic pockets, such as transcription factors, scaffold proteins, and mutant KRAS variants.',
              'প্রচলিত ওষুধের মতো কেবল এনজাইমের সক্রিয় তল আটকে রাখার বদলে প্রোস্যাক ক্যাটালিটিক উপায়ে কাজ করে: একটি প্রোটিন ধ্বংস হওয়ার পর এটি বিচ্ছিন্ন হয়ে নতুন প্রোটিনকে ধ্বংস করতে এগিয়ে যায়। ফলে অতীতে ওষুধ দিয়ে নিরাময় অসম্ভব বলে বিবেচিত বিভিন্ন অনকোজেনিক ট্রান্সক্রিপশন ফ্যাক্টর ও মিউট্যান্ট প্রোটিন ধ্বংস করা এখন সম্ভব হচ্ছে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Chaperone-Mediated Autophagy (CMA) in Neurodegeneration & Mechanisms of Proteasome Resistance', 'স্নায়ুক্ষয়ে চ্যাপেরন-চালিত অটোফ্যাজি (CMA) ও প্রোটিওসোম বাধার প্রতিরোধ মেকানিজম'),
          paragraphs: [
            l(
              'Chaperone-Mediated Autophagy (CMA) provides selective degradation of soluble cytosolic proteins without requiring vesicle formation. Target proteins containing a pentapeptide motif biochemically related to KFERQ are recognized by the cytosolic chaperone Hsc70 (heat shock cognate 71 kDa protein). Hsc70 delivers the substrate to the lysosomal limiting membrane, where it binds the cytosolic tail of LAMP-2A (lysosome-associated membrane protein 2A). Substrate binding stimulates LAMP-2A multimerization into a high-molecular-weight 12-subunit translocation channel through which the unfolded substrate is threaded into the lumen.',
              'চ্যাপেরন-চালিত অটোফ্যাজি (CMA) কোনো ভেসিকল তৈরি ছাড়াই সাইটোসোলিক প্রোটিনের নির্বাচনমূলক ধ্বংস নিশ্চিত করে। KFERQ সংকেতযুক্ত প্রোটিনকে Hsc70 চ্যাপেরন চিনে নিয়ে লাইসোসোমের ঝিল্লিতে LAMP-2A রিসেপ্টরে পৌঁছে দেয়। এরপর LAMP-2A একটি ১২-সদস্যের নালী তৈরি করে প্রোটিনটিকে সোজা করে লাইসোসোমের ভেতরে ঢুকিয়ে দেয় যেখানে এনজাইমগুলো তাকে নষ্ট করে।'
            ),
            l(
              'With aging, membrane LAMP-2A dynamics decline significantly, predisposing dopaminergic neurons to toxic accumulation of wild-type alpha-synuclein and triggering Parkinson disease. Concurrently, in multiple myeloma, prolonged treatment with the proteasome inhibitor bortezomib frequently provokes acquired resistance. Genomic and biochemical analyses show that resistant clones acquire point mutations in the PSMB5 gene (such as Ala49Thr or Met45Ile) altering the bortezomib-binding pocket, or upregulate the 19S cap deubiquitinase USP14, enabling rapid rescue of polyubiquitinated substrates and bypassing apoptotic thresholds.',
              'বয়স বাড়ার সাথে সাথে LAMP-2A কমে যাওয়ায় মস্তিষ্কের ডোপামিন কোষে আলফা-সিনুক্লিন প্রোটিন জমে পার্কিনসন রোগ সৃষ্টি করে। পাশাপাশি মাল্টিপল মায়েলোমা রোগীদের ক্ষেত্রে দীর্ঘদিন বরটেজোমিব প্রয়োগ করলে ক্যান্সার কোষের PSMB5 জিনে মিউটেশন ঘটে ওষুধের প্রবেশ পথ বদলে যায় অথবা USP14 এনজাইম অতিরিক্ত সক্রিয় হয়ে প্রোটিনগুলোকে ধ্বংসের হাত থেকে বাঁচিয়ে ওষুধ প্রতিরোধী ক্ষমতা অর্জন করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Frontiers in Proteostasis Therapeutics', 'প্রোটিন ভারসাম্য চিকিৎসার ভবিষ্যৎ দিগন্ত'),
          paragraphs: [
            l(
              'Harnessing cellular degradation machineries continues to revolutionize molecular medicine. From selective autophagy inducers clearing neurotoxic aggregates to molecular glue degraders targeting oncogenic transcription factors, manipulating proteostasis offers unprecedented therapeutic opportunities for previously incurable human diseases.',
              'কোষের প্রোটিন ধ্বংস করার ক্ষমতাকে কাজে লাগানো আধুনিক চিকিৎসায় যুগান্তকারী সম্ভাবনা তৈরি করেছে। ক্ষতিকর প্রোটিন দূরকারী অটোফ্যাজি উদ্দীপক থেকে শুরু করে ক্যান্সার প্রতিরোধী মলিকুলার গ্লু পর্যন্ত, প্রোটিন ভারসাম্যের নিয়ন্ত্রণ মানবদেহের জটিল ও দুরারোগ্য ব্যাধির চিকিৎসায় নতুন আশা জাগাচ্ছে।'
            ),
          ],
        },
      ],
    },
  },
}
