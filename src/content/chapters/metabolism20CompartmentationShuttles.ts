import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const shuttlesRefs = [
  {
    id: 'lehninger-biochem-8e-ch19',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 19: Oxidative Phosphorylation and Photophosphorylation',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'palmier-slc25-2013',
    authors: 'Ferdinando Palmieri',
    title: 'The mitochondrial transporter family SLC25: identification, properties and physiopathology. Molecular Aspects of Medicine, 34(2-3):465-484',
    organization: 'Elsevier / Molecular Aspects of Medicine',
    year: 2013,
    url: 'https://pubmed.ncbi.nlm.nih.gov/23266187/',
  },
  {
    id: 'berg-biochem-9e-ch18',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 18: Oxidative Phosphorylation',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'wanders-peroxisome-2016',
    authors: 'Ronald J. A. Wanders, Hans R. Waterham',
    title: 'Biochemistry of mammalian peroxisomes revisited. Annual Review of Biochemistry, 85:459-489',
    organization: 'Annual Reviews',
    year: 2016,
    url: 'https://pubmed.ncbi.nlm.nih.gov/27023846/',
  },
  {
    id: 'marks-medbiochem-6e-ch24',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 24: Oxidative Phosphorylation and Mitochondrial Transport",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

const compartment3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Metabolite Shuttles & Membrane Transporters',
    '৩ডি বহু-অঙ্গীয় মেটাবোলাইট শাটল ও ঝিল্লি বাহকের মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and explore coordinate space to trace how tissue-specific shuttles (Malate-Aspartate vs Glycerol-3-Phosphate) and organellar transporter networks (SLC25, ABCD1, SLC37A4) coordinate cellular bioenergetics.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে বিভিন্ন অঙ্গে ম্যালট-অ্যাসপার্টেট ও গ্লিসারল-৩-ফসফেট শাটল এবং অর্গানেল ঝিল্লি বাহক নেটওয়ার্ক কাজ করে।'
  ),
  description: l(
    'Mitochondrial inner membrane impermeability requires dedicated carrier proteins: the high-efficiency Malate-Aspartate Shuttle dominates in cardiac myocardium and liver yielding ~2.5 ATP per cytosolic NADH, whereas skeletal muscle and brain utilize the rapid Glycerol-3-Phosphate Shuttle transferring electrons directly to ubiquinone yielding ~1.5 ATP.',
    'মাইটোকন্ড্রিয়ার অভ্যন্তরীণ ঝিল্লি অপ্রবেশ্য হওয়ায় বিশেষ বাহক প্রোটিন অপরিহার্য: হৃৎপিণ্ড ও যকৃতে উচ্চ-দক্ষতার ম্যালট-অ্যাসপার্টেট শাটল কাজ করে যা প্রতি এনএডিএইচ থেকে ~২.৫ এটিপি দেয়; পক্ষান্তরে কঙ্কালপেশি ও মস্তিষ্কে দ্রুতগতির গ্লিসারল-৩-ফসফেট শাটল ইলেকট্রন সরাসরি ইউবিকুইনোনে দিয়ে ~১.৫ এটিপি উৎপন্ন করে।'
  ),
  organs: [
    {
      id: 'organ-heart-shuttles',
      name: l('Heart (High-Efficiency Malate-Aspartate Redox Engine)', 'হৃৎপিণ্ড (উচ্চ-দক্ষতাসম্পন্ন ম্যালট-অ্যাসপার্টেট রেডক্স ইঞ্জিন)'),
      latinName: 'Cor',
      system: l('Cardiovascular & Aerobic System', 'সংবহন ও বায়বীয় শক্তি তন্ত্র'),
      cavity: l('Middle Mediastinum (Pericardial Cavity)', 'মধ্য মিডিয়াস্টিনাম (পেরিকার্ডিয়াল গহ্বর)'),
      position3D: { x: -4, y: 228, z: 8 },
      color: '#e11d48',
      highlightColor: '#fb7185',
      shapeType: 'heart',
      description: l(
        'Cardiomyocytes express extremely high concentrations of the Malate-Aspartate Shuttle (Aralar/AGC1 and OGC transporters), transferring cytosolic glycolytic reducing equivalents into the mitochondrial matrix with zero thermodynamic energetic penalty.',
        'হৃদপেশিকোষে উচ্চ ঘনমাত্রায় ম্যালট-অ্যাসপার্টেট শাটল বিদ্যমান, যা সাইটোসলের গ্লাইকোলাইটিক ইলেকট্রনকে কোনো শক্তি ক্ষয় ছাড়াই সরাসরি মাইটোকন্ড্রিয়াল ম্যাট্রিক্স এনএডি-তে পৌঁছে দেয়।'
      ),
      spatialRelations: l(
        'Surrounded by a high-density mitochondrial network comprising 40% of cardiomyocyte volume, nestled behind the sternum and between the pleural cavities.',
        'বক্ষপিঞ্জরের ভেতরে অবস্থিত এবং এর কোষগুলোর আয়তনের প্রায় ৪০% জুড়ে মাইটোকন্ড্রিয়া বিদ্যমান যা অনবরত পাম্প করার শক্তি যোগায়।'
      ),
      physiology: l(
        'Cytosolic NADH reduces oxaloacetate to malate via cMDH; malate enters matrix via SLC25A11 (OGC) in exchange for alpha-ketoglutarate, regenerating matrix NADH at Complex I producing ~2.5 ATP per NADH.',
        'সাইটোসোলে এনএডিএইচ অক্সালোঅ্যাসিটেটকে ম্যালেটে রূপান্তরিত করে; ম্যালেট ম্যাট্রিক্সে প্রবেশ করে কমপ্লেক্স I-এ ইলেকট্রন দিয়ে পুনরায় এনএডিএইচ তৈরি করে এবং প্রতি অণুতে ~২.৫ এটিপি উৎপন্ন করে।'
      ),
      nutritionConnection: l(
        'Dependent on thiamine (pyruvate/TCA flux) and adequate nicotinamide (NAD+ pool) to prevent acute high-output cardiac heart failure.',
        'থায়ামিন ও নিয়াসিনের ওপর গভীরভাবে নির্ভরশীল; এদের অভাব হলে কার্ডিয়াক এনার্জি ফেইলিউর ও বেরিবেরি দেখা দেয়।'
      ),
      clinicalSignificance: l(
        'Under acute myocardial ischemia, the malate-aspartate shuttle reverses due to matrix NADH accumulation, generating cytosolic reductive stress that exacerbates reperfusion injury.',
        'মায়োকার্ডিয়াল ইস্কেমিয়ার সময় মাইটোকন্ড্রিয়ায় এনএডিএইচ জমে শাটলটি উল্টো দিকে কাজ করতে শুরু করে এবং টিস্যুতে অতিরিক্ত ফ্রি র্যাডিক্যাল তৈরি করে ক্ষতি বাড়ায়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-muscle-shuttles',
      name: l('Skeletal Muscle (Glycerol-3-Phosphate Rapid Burst Shuttle)', 'কঙ্কালপেশি (গ্লিসারল-৩-ফসফেট দ্রুতগতি শাটল)'),
      latinName: 'Musculus Sceleti',
      system: l('Locomotor & Glycolytic System', 'পেশিকঙ্কাল ও গ্লাইকোলাইটিক তন্ত্র'),
      cavity: l('Peripheral Somatic Mass', 'প্রান্তীয় দৈহিক কাঠামো'),
      position3D: { x: 26, y: 152, z: 0 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'skeleton',
      description: l(
        'Expresses massive levels of cytosolic glycerol-3-phosphate dehydrogenase (cGPD) and mitochondrial outer-surface FAD-linked GPD2, enabling instantaneous re-oxidation of cytosolic NADH during rapid sprint contraction.',
        'সাইটোসোলিক এবং মাইটোকন্ড্রিয়াল গ্লিসারল-৩-ফসফেট ডিহাইড্রোজিনেজ ধারণ করে, যা তীব্র দৌড় বা ভারী কাজের সময় সাইটোসলের এনএডিএইচ-কে অত্যন্ত দ্রুত জারিত করে গ্লাইকোলাইসিস চালু রাখে।'
      ),
      spatialRelations: l(
        'Surrounds bony framework, forming extensive myofibrillar arrays with subsarcolemmal and intermyofibrillar mitochondrial sub-populations.',
        'হাড়ের চারপাশে অবস্থিত মায়োফাইব্রিলগুলোর ফাঁকে ফাঁকে মাইটোকন্ড্রিয়া সজ্জিত থাকে যা দ্রুত এটিপি সরবরাহ করে।'
      ),
      physiology: l(
        'Electrons from cytosolic NADH bypass Complex I entirely, flowing from FADH2 directly into Coenzyme Q (ubiquinone pool); this sacrifices ~1.0 ATP per NADH (yielding ~1.5 ATP total) in exchange for near-instantaneous kinetic speed.',
        'সাইটোসলের এনএডিএইচ থেকে ইলেকট্রন কমপ্লেক্স I-কে এড়িয়ে সরাসরি কোএনজাইম Q-তে প্রবেশ করে; ফলে এটিপি ফলন ~২.৫ থেকে কমে ~১.৫ হলেও বিক্রিয়ার গতি প্রচণ্ড দ্রুত হয়।'
      ),
      nutritionConnection: l(
        'Connects glycolytic triose phosphate pool directly with lipid glycerol backbone synthesis via dihydroxyacetone phosphate (DHAP).',
        'ডাইহাইড্রোক্সিঅ্যাসিটোন ফসফেটের (DHAP) মাধ্যমে গ্লাইকোলাইসিসের সাথে ট্রাইগ্লিসারাইড তৈরির চর্বি শাটলকে সরাসরি সংযুক্ত করে।'
      ),
      clinicalSignificance: l(
        'Mitochondrial GPD2 is allosterically activated by Ca2+ released from sarcoplasmic reticulum during muscle contraction, automatically coupling mechanical excitation to shuttle flux.',
        'পেশি সংকোচনের সময় নির্গত ক্যালসিয়াম আয়ন মাইটোকন্ড্রিয়াল জিপিডি২ এনজাইমকে তাৎক্ষণিকভাবে সক্রিয় করে মেকানিক্যাল কাজের সাথে শক্তি উৎপাদনকে একীভূত করে।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-liver-shuttles',
      name: l('Liver (Tricarboxylate Citrate & Carnitine Carrier Hub)', 'যকৃৎ (ট্রাইকার্বক্সাইলেট সাইট্রেট ও কার্নিটিন বাহক কেন্দ্র)'),
      latinName: 'Hepar',
      system: l('Hepatobiliary & Intermediary Hub', 'যকৃৎ-পিত্ত ও অন্তর্বর্তী বিপাকীয় কেন্দ্র'),
      cavity: l('Right Upper Abdominal Quadrant', 'ডান ঊর্ধ্ব উদর গহ্বর'),
      position3D: { x: 12, y: 200, z: 0 },
      color: '#10b981',
      highlightColor: '#34d399',
      shapeType: 'liver',
      description: l(
        'Houses the complete repertoire of SLC25 carriers: Citrate-Malate Carrier (SLC25A1) exporting acetyl units for lipogenesis, Carnitine-Acylcarnitine Translocase (SLC25A20), and Endoplasmic Reticulum G6P Translocase (SLC37A4).',
        'মাইটোকন্ড্রিয়ার সকল SLC25 বাহক ধারণ করে: চর্বি তৈরির জন্য সাইট্রেট বাহক (SLC25A1), ফ্যাটি অ্যাসিড জারণের কার্নিটিন বাহক (SLC25A20) এবং এন্ডোপ্লাজমিক রেটিকুলামের গ্লুকোজ-৬-ফসফেট বাহক (SLC37A4)।'
      ),
      spatialRelations: l(
        'Strategically interposed between mesenteric venous drainage and systemic circulation, orchestrating cellular compartmentation across both hepatocytes and peroxisomes.',
        'পরিপাকতন্ত্র ও সাধারণ রক্ত সংবহনের মাঝে অবস্থিত; হেপাটোসাইটের মাইটোকন্ড্রিয়া ও পারঅক্সিজোম অঙ্গাণুর মধ্যে বিপাকীয় সমন্বয় রক্ষা করে।'
      ),
      physiology: l(
        'During energy excess, matrix citrate exits via SLC25A1 to fuel cytosolic fatty acid synthase; in fasting, carnitine shuttle drives acyl-CoA into the matrix for beta-oxidation and ketogenesis.',
        'শক্তি উদ্বৃত্ত থাকলে সাইট্রেট বাইরে এসে চর্বি তৈরি করে; আর উপবাসকালে কার্নিটিন শাটলের মাধ্যমে ফ্যাটি অ্যাসিড ভেতরে ঢুকে কিটোন বডি ও এটিপি তৈরি করে।'
      ),
      nutritionConnection: l(
        'Carnitine biosynthesis requires lysine, methionine (SAM), vitamin C, iron, and pyridoxine (B6); deficiency impairs mitochondrial fatty acid import.',
        'কার্নিটিন তৈরিতে লাইসিন, মেথিওনিন, ভিটামিন সি এবং আয়রন প্রয়োজন; এদের ঘাটতি মাইটোকন্ড্রিয়ায় চর্বি প্রবেশে বাধা সৃষ্টি করে।'
      ),
      clinicalSignificance: l(
        'Mutations in SLC37A4 (G6PT) cause Glycogen Storage Disease Type Ib (hepatomegaly, hypoglycemia, neutropenia), demonstrating the critical role of ER membrane transport.',
        'SLC37A4 জিনের মিউটেশন গ্লাইকোজেন স্টোরেজ ডিজিজ টাইপ Ib ঘটায় যা প্রমাণ করে যে এন্ডোপ্লাজমিক রেটিকুলামের ঝিল্লি বাহক কতটা অত্যাবশ্যক।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-brain-shuttles',
      name: l('Brain (Aralar/AGC1 Aspartate-Glutamate Transporter & X-ALD Peroxisomes)', 'মস্তিষ্ক (অ্যারালার/AGC1 বাহক ও পারঅক্সিজোমাল লিপিড পরিবহন)'),
      latinName: 'Cerebrum',
      system: l('Central Nervous System & Myelin', 'কেন্দ্রীয় স্নায়ুতন্ত্র ও মায়েলিন'),
      cavity: l('Cranial Vault', 'করোটি গহ্বর'),
      position3D: { x: 0, y: 312, z: 0 },
      color: '#6366f1',
      highlightColor: '#818cf8',
      shapeType: 'brain',
      description: l(
        'Neurons rely on Aralar (SLC25A12, the brain isoform of AGC1) for the malate-aspartate shuttle. Peroxisomal ABCD1 transporters import very-long-chain fatty acids (VLCFAs) for degradation to preserve myelin integrity.',
        'নিউরনগুলো ম্যালট-অ্যাসপার্টেট শাটলের জন্য অ্যারালার (SLC25A12) বাহকের ওপর নির্ভরশীল। পাশাপাশি মস্তিষ্কের পারঅক্সিজোম ABCD1 বাহকের মাধ্যমে অতি-দীর্ঘ ফ্যাটি অ্যাসিড (VLCFA) ভেঙে মায়েলিন আবরণ সুরক্ষিত রাখে।'
      ),
      spatialRelations: l(
        'Enclosed within cerebral meninges; extensive oligodendrocyte lipid myelin sheaths insulate axonal projections across gray and white matter tracts.',
        'মস্তিষ্কের কোটি কোটি নিউরন ও অলিগোডেনড্রোসাইটের মায়েলিন আবরণের ভেতরে এই অঙ্গাণু বাহকগুলো নিরবচ্ছিন্নভাবে কাজ করে।'
      ),
      physiology: l(
        'Aralar is Ca2+-activated from the intermembrane space, allowing neurotransmitter-induced cytosolic Ca2+ spikes to accelerate mitochondrial NADH uptake instantaneously.',
        'অ্যারালার ক্যালসিয়াম আয়ন দ্বারা সক্রিয় হয়; ফলে স্নায়বিক সংকেত এলেই এটি তাৎক্ষণিকভাবে মাইটোকন্ড্রিয়ায় এনএডিএইচ পরিবহন বাড়িয়ে দেয়।'
      ),
      nutritionConnection: l(
        'Peroxisomal ether-lipid synthesis is critical for plasmalogen production, which comprises over 30% of brain phospholipid content.',
        'পারঅক্সিজোমে প্লাজমালেজেন তৈরি হয়, যা মস্তিষ্কের ফসফোলিপিডের ৩০%-এরও বেশি অংশ গঠন করে এবং স্নায়ু সুরক্ষায় অপরিহার্য।'
      ),
      clinicalSignificance: l(
        'Mutations in ABCD1 cause X-linked Adrenoleukodystrophy (X-ALD), leading to toxic accumulation of VLCFAs (C24:0, C26:0) and catastrophic cerebral demyelination.',
        'ABCD1 জিনের ত্রুটির কারণে এক্স-লিংকড অ্যাড্রেনোলিউকোডিস্ট্রফি (X-ALD) হয়, যেখানে বিষাক্ত দীর্ঘ চর্বি জমে স্নায়ুর মায়েলিন ধ্বংস করে দেয়।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism20CompartmentationShuttlesLesson: LessonTopic = {
  id: 'topic.metabolism.cellular-compartmentation-shuttles',
  slug: 'cellular-compartmentation-shuttles',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '20 · Cellular Compartmentation, Metabolite Transport & Shuttle Systems',
    '২০ · কোষীয় প্রকোষ্ঠায়ন, মেটাবোলাইট পরিবহন ও শাটল ব্যবস্থা'
  ),
  summary: l(
    'The physical geography of cellular metabolism: inner mitochondrial membrane impermeability, the SLC25 mitochondrial carrier protein superfamily (ANT, PiC, CAC, DIC, AGC1/Aralar), reducing equivalent shuttles thermodynamics (Malate-Aspartate yielding ~2.5 ATP vs Glycerol-3-Phosphate yielding ~1.5 ATP), peroxisomal ABC transporters (ABCD1-3) in very-long-chain fatty acid flux, and endoplasmic reticulum translocases (SLC37A4).',
    'কোষীয় বিপাকের ভৌগোলিক প্রকোষ্ঠায়ন: মাইটোকন্ড্রিয়াল অভ্যন্তরীণ ঝিল্লির অপ্রবেশ্যতা, SLC25 মাইটোকন্ড্রিয়াল বাহক প্রোটিন সুপারফ্যামিলি (ANT, PiC, CAC, DIC, AGC1/Aralar), রিডিউসিং ইকুইভ্যালেন্ট শাটলের তাপগতিবিদ্যা (ম্যালট-অ্যাসপার্টেট ~২.৫ এটিপি বনাম গ্লিসারল-৩-ফসফেট ~১.৫ এটিপি), অতি-দীর্ঘ ফ্যাটি অ্যাসিড পরিবহনে পারঅক্সিজোমাল ABC বাহক (ABCD1-3) এবং এন্ডোপ্লাজমিক রেটিকুলাম ট্রান্সলোকেজ (SLC37A4)।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Contrast the molecular architecture, stoichiometry, and energetic ATP yields of the Malate-Aspartate Shuttle versus the Glycerol-3-Phosphate Shuttle, explaining why cytosolic NADH yields ~2.5 ATP in heart and liver but only ~1.5 ATP in skeletal muscle and brain.',
      'ম্যালট-অ্যাসপার্টেট শাটল এবং গ্লিসারল-৩-ফসফেট শাটলের আণবিক গঠন, স্টোইকিওমেট্রি এবং এটিপি ফলন তুলনা করা এবং ব্যাখ্যা করা কেন সাইটোসলের এনএডিএইচ হৃৎপিণ্ডে ~২.৫ এটিপি দেয় কিন্তু কঙ্কালপেশিতে কেবল ~১.৫ এটিপি উৎপন্ন করে।'
    ),
    l(
      'Delineate the transport mechanisms and physiological functions of the SLC25 mitochondrial carrier family, focusing on Adenine Nucleotide Translocase (ANT/SLC25A4), Phosphate Carrier (PiC/SLC25A3), Citrate-Malate Carrier (SLC25A1), and Carnitine-Acylcarnitine Translocase (SLC25A20).',
      'SLC25 মাইটোকন্ড্রিয়াল বাহক পরিবারের পরিবহন প্রক্রিয়া বিশ্লেষণ করা, বিশেষ করে অ্যাডেনাইন নিউক্লিওটাইড ট্রান্সলোকেজ (ANT), ফসফেট ক্যারিয়ার (PiC), সাইট্রেট ক্যারিয়ার এবং কার্নিটিন ট্রান্সলোকেজের ভূমিকা মূল্যায়ন করা।'
    ),
    l(
      'Evaluate human diseases caused by defective intracellular transport systems, including X-linked Adrenoleukodystrophy (ABCD1 mutations), Glycogen Storage Disease Type Ib (SLC37A4 mutations), and Citrullinemia Type II (Citrin / SLC25A13 deficiency).',
      'আন্তঃকোষীয় পরিবহন ত্রুটিজনিত মানব রোগসমূহ মূল্যায়ন করা, যার মধ্যে রয়েছে এক্স-লিংকড অ্যাড্রেনোলিউকোডিস্ট্রফি (ABCD1), গ্লাইকোজেন স্টোরেজ ডিজিজ টাইপ Ib (SLC37A4) এবং সিট্রুলিনেমিয়া টাইপ II (সিট্রিন/SLC25A13 ঘাটতি)।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate', 'topic.metabolism.tca-oxphos'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate', 'topic.metabolism.tca-oxphos'],
  references: shuttlesRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch19', 'palmier-slc25-2013'],
    structure: ['palmier-slc25-2013', 'berg-biochem-9e-ch18'],
    mechanism: ['lehninger-biochem-8e-ch19', 'berg-biochem-9e-ch18'],
    integration: ['marks-medbiochem-6e-ch24', 'wanders-peroxisome-2016'],
    practice: ['palmier-slc25-2013', 'wanders-peroxisome-2016'],
    takeaways: ['lehninger-biochem-8e-ch19', 'marks-medbiochem-6e-ch24'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Biophysical Logic of Cellular Compartmentation', '১. কোষীয় প্রকোষ্ঠায়নের জৈবভৌত যুক্তি'), sectionId: 'introduction' },
      { id: 'sec-slc25', label: l('2. The Mitochondrial SLC25 Solute Carrier Superfamily', '২. মাইটোকন্ড্রিয়াল SLC25 বাহক সুপারফ্যামিলি'), sectionId: 'structure' },
      { id: 'sec-shuttles', label: l('3. Reducing Equivalent Shuttles: Malate-Aspartate vs G3P', '৩. রিডিউসিং ইকুইভ্যালেন্ট শাটল: ম্যালট-অ্যাসপার্টেট বনাম G3P'), sectionId: 'mechanism' },
      { id: 'sec-peroxisome-er', label: l('4. Peroxisomal ABC Transporters & Endoplasmic Reticulum Gates', '৪. পারঅক্সিজোমাল ABC বাহক ও এন্ডোপ্লাজমিক রেটিকুলাম গেট'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Quantitative Proton Motive Force & Transporter Energetics', '৫. পরিমাণগত প্রোটন মোটিভ বল ও বাহক শক্তিবিজ্ঞান'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Clinical Inborn Errors of Transport & High-Yield Summary', '৬. জন্মগত পরিবহন রোগ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Adenine Nucleotide Translocase (ANT / SLC25A4)', 'অ্যাডেনাইন নিউক্লিওটাইড ট্রান্সলোকেজ (ANT)'),
        definition: l(
          'An electrogenic antiporter in the inner mitochondrial membrane that exports ATP4- into the intermembrane space in exchange for ADP3- influx into the matrix, driven by the membrane potential (Delta-Psi) of the proton motive force.',
          'মাইটোকন্ড্রিয়ার অভ্যন্তরীণ ঝিল্লির একটি ইলেকট্রোজেনিক বাহক যা প্রোটন মোটিভ বলের বিভব পার্থক্যের (Delta-Psi) শক্তিতে ম্যাট্রিক্স থেকে এটিপি৪- বের করে এবং এডিপি৩- ভেতরে প্রবেশ করায়।'
        ),
      },
      {
        term: l('Malate-Aspartate Shuttle', 'ম্যালট-অ্যাসপার্টেট শাটল'),
        definition: l(
          'A multi-enzyme, multi-transporter cycle (cMDH, mMDH, cGOT, mGOT, OGC, AGC) that transfers cytosolic glycolytic reducing equivalents to mitochondrial matrix NAD+, preserving the full ~2.5 ATP/NADH yield in heart and liver.',
          'একটি বহু-এনজাইম ও বহু-বাহক চক্র যা সাইটোসলের গ্লাইকোলাইটিক ইলেকট্রনকে মাইটোকন্ড্রিয়াল ম্যাট্রিক্সের এনএডি-তে পৌঁছে দেয় এবং হৃৎপিণ্ড ও যকৃতে পূর্ণ ~২.৫ এটিপি ফলন অক্ষুণ্ণ রাখে।'
        ),
      },
      {
        term: l('Glycerol-3-Phosphate Shuttle', 'গ্লিসারল-৩-ফসফেট শাটল'),
        definition: l(
          'A rapid two-step redox shuttle operating via cytosolic cGPD and inner membrane outer-surface FAD-linked GPD2, delivering electrons directly to the Coenzyme Q pool, yielding ~1.5 ATP per NADH in skeletal muscle and brain.',
          'একটি অত্যন্ত দ্রুতগতির দুই-ধাপের রেডক্স শাটল যা সাইটোসলের ইলেকট্রন সরাসরি কোএনজাইম Q-তে পৌঁছে দেয়; এটি কঙ্কালপেশি ও মস্তিষ্কে প্রতি এনএডিএইচে ~১.৫ এটিপি উৎপন্ন করে।'
        ),
      },
      {
        term: l('ABCD1 Transporter (ALDP)', 'ABCD1 বাহক (ALDP)'),
        definition: l(
          'An ATP-binding cassette transporter located in the peroxisomal membrane responsible for importing very-long-chain acyl-CoA esters (>=C22) into the peroxisomal matrix for initial beta-oxidation shortening.',
          'পারঅক্সিজোম ঝিল্লির একটি এটিপি-নির্ভর বাহক যা অতি-দীর্ঘ ফ্যাটি অ্যাসিডকে (>=C22) পারঅক্সিজোমাল ম্যাট্রিক্সে প্রাথমিক বিটা-জারণের জন্য ভেতরে প্রবেশ করায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Energetic Cost of ATP Export by Adenine Nucleotide Translocase (ANT)', 'অ্যাডেনাইন নিউক্লিওটাইড ট্রান্সলোকেজ (ANT) দ্বারা এটিপি নির্গমনের শক্তি খরচ'),
        steps: [
          l(
            'ANT exchanges ATP4- (matrix) for ADP3- (intermembrane space). Because ATP4- has one extra negative charge compared to ADP3-, the export process moves one net negative charge out across the inner mitochondrial membrane.',
            'ANT ম্যাট্রিক্স থেকে ATP4- বের করে এবং ADP3- ভেতরে নেয়। যেহেতু ATP4- এর একটি অতিরিক্ত ঋণাত্মক আধান রয়েছে, তাই প্রতিটি স্থানান্তরে একটি নিট ঋণাত্মক আধান বাইরে চলে যায়।'
          ),
          l(
            'The inner mitochondrial membrane possesses a positive-outside membrane potential (Delta-Psi ~ +160 to +180 mV). The exit of net negative charge is thermodynamically favored by Delta-Psi, effectively "spending" approximately 25% of the proton motive force generated by one H+ translocation.',
            'মাইটোকন্ড্রিয়াল ঝিল্লির বাইরে ধনাত্মক বিভব (Delta-Psi ~ +১৬০ থেকে +১৮০ mV) থাকে। ফলে এই ঋণাত্মক আধানের নির্গমন বিভব পার্থক্য দ্বারা চালিত হয়, যা কার্যত ১টি প্রোটন পাম্পিং শক্তির প্রায় ২৫% খরচ করে।'
          ),
          l(
            'Together with the electroneutral symport of H2PO4- with 1 H+ via the Phosphate Carrier (PiC), synthesis and export of 1 cytosolic ATP consumes the proton motive force of approximately 4.0 total protons (3.0 for ATP synthase rotation + 1.0 for ANT/PiC transport).',
            'ফসফেট ক্যারিয়ার (PiC) দ্বারা ১টি প্রোটনের সাথে ফসফেট প্রবেশের শক্তি মিলিয়ে, সাইটোসোলে ১টি এটিপি সরবরাহ করতে মোট প্রায় ৪.০টি প্রোটন খরচ হয় (৩টি এটিপি সিন্থেজের ঘূর্ণনে + ১টি পরিবহনে)।'
          ),
        ],
        conclusion: l(
          'Transport of ADP, ATP, and inorganic phosphate consumes exactly 1 H+ per ATP synthesized, establishing the canonical stoichiometry of ~2.5 ATP per matrix NADH and ~1.5 ATP per matrix FADH2.',
          'এডিপি, এটিপি এবং অজৈব ফসফেট পরিবহনে উৎপাদিত প্রতি এটিপিতে ঠিক ১টি প্রোটন ব্যয় হয়, যা ম্যাট্রিক্স এনএডিএইচ থেকে ~২.৫ এটিপি এবং এফএডিএইচ২ থেকে ~১.৫ এটিপির স্টোইকিওমেট্রি নির্ধারণ করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why cannot cytosolic NADH cross the inner mitochondrial membrane directly to donate electrons to Complex I?',
          'সাইটোসলের এনএডিএইচ কেন সরাসরি মাইটোকন্ড্রিয়াল অভ্যন্তরীণ ঝিল্লি অতিক্রম করে কমপ্লেক্স I-এ ইলেকট্রন দিতে পারে না?'
        ),
        answer: l(
          'The inner mitochondrial membrane is strictly impermeable to charged pyridine nucleotides (NAD+ and NADH) due to its high cardiolipin content and absence of an NAD+ carrier protein in human somatic cells. Reducing equivalents must instead be transferred onto permeable intermediate substrates (malate or glycerol-3-phosphate) via specialized shuttle systems.',
          'মাইটোকন্ড্রিয়ার অভ্যন্তরীণ ঝিল্লিতে প্রচুর কার্ডিওলিপিন থাকায় এবং কোনো এনএডি বাহক প্রোটিন না থাকায় এটি চার্জযুক্ত এনএডি+ ও এনএডিএইচ-এর জন্য সম্পূর্ণ অপ্রবেশ্য। তাই বিশেষ শাটল ব্যবস্থার মাধ্যমে ইলেকট্রনকে ম্যালেট বা গ্লিসারল-৩-ফসফেটে স্থানান্তরিত করে ভেতরে পাঠাতে হয়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: compartment3DData,
  interactiveDiagram: {
    id: 'compartment-shuttle-interactive-hub',
    title: l('Interactive Organellar Shuttles & Transporter Circuit', 'ইন্টারেক্টিভ অর্গানেল শাটল ও বাহক বর্তনী'),
    disclaimer: l(
      'Organellar biophysics simulation: select carrier nodes and shuttle loops to observe the compartmental distribution of reducing equivalents, high-energy phosphates, and lipid metabolites across cellular membranes.',
      'অর্গানেল জৈবপদার্থবিজ্ঞান সিমুলেশন: বিভিন্ন বাহক নোড ও শাটল নির্বাচন করে কোষীয় ঝিল্লি জুড়ে ইলেকট্রন, এটিপি এবং লিপিডের পরিবহন গতিবিদ্যা পর্যবেক্ষণ করুন।'
    ),
    description: l(
      'Cellular membranes partition conflicting metabolic pathways into specialized compartments. This interactive engine traces the molecular shuttles linking glycolysis to oxidative phosphorylation, peroxisomal beta-oxidation, and endoplasmic reticulum glucose export.',
      'কোষীয় ঝিল্লিগুলো পরস্পরবিরোধী বিপাকীয় পথগুলোকে পৃথক প্রকোষ্ঠে বিভক্ত করে। এই ইন্টারঅ্যাকটিভ ইঞ্জিন গ্লাইকোলাইসিস, অক্সিডেটিভ ফসফরাইলেশন এবং পারঅক্সিজোমাল লিপিড পরিবহনের আণবিক বাহক নেটওয়ার্ক প্রদর্শন করে।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-malate-aspartate',
        label: l('1. Malate-Aspartate Shuttle (Heart & Liver Hub)', '১. ম্যালট-অ্যাসপার্টেট শাটল (হৃৎপিণ্ড ও যকৃৎ)'),
        description: l(
          'Reversible shuttle transferring cytosolic NADH electrons to matrix NAD+ via malate dehydrogenase (cMDH/mMDH) and transaminases (cGOT/mGOT). Yields ~2.5 ATP/NADH.',
          'রিভার্সিবল শাটল যা ম্যালেট ডিহাইড্রোজিনেজ ও ট্রান্সঅ্যামিনেজের মাধ্যমে সাইটোসলের ইলেকট্রন মাইটোকন্ড্রিয়াল এনএডি-তে পাঠায়। ফলন ~২.৫ এটিপি।'
        ),
        details: l(
          'Utilizes two inner membrane antiporters: Malate/alpha-Ketoglutarate carrier (OGC / SLC25A11) and Aspartate/Glutamate antiporter (AGC1/Citrin / SLC25A13). Driven by proton gradient.',
          'দুটি ঝিল্লি বাহক ব্যবহার করে: ওজিসি এবং এজিসি১ (সিট্রিন)। এটি প্রোটন গ্রেডিয়েন্ট দ্বারা চালিত হয় এবং হৃদপেশিতে সর্বোচ্চ শক্তি নিশ্চিত করে।'
        ),
        sectionId: 'mechanism',
        color: '#e11d48',
      },
      {
        id: 'node-glycerol-phosphate',
        label: l('2. Glycerol-3-Phosphate Shuttle (Muscle Burst Engine)', '২. গ্লিসারল-৩-ফসফেট শাটল (পেশির দ্রুত ইঞ্জিন)'),
        description: l(
          'Rapid irreversible shuttle using cytosolic cGPD and mitochondrial outer-surface GPD2. Delivers electrons directly to ubiquinone, bypassing Complex I. Yields ~1.5 ATP/NADH.',
          'দ্রুতগতির অপ্রত্যাবর্তনীয় শাটল যা সাইটোসলের ইলেকট্রন সরাসরি ইউবিকুইনোন পুলে জমা দেয়। ফলন ~১.৫ এটিপি।'
        ),
        details: l(
          'Extremely active in white skeletal muscle and brain. Activated allosterically by micromolar Ca2+ spikes during muscle contraction, instantly matching energy supply to mechanical power.',
          'কঙ্কালপেশি ও মস্তিষ্কে অত্যন্ত সক্রিয়। পেশি সংকোচনের সময় নির্গত ক্যালসিয়াম আয়ন দ্বারা সরাসরি উদ্দীপিত হয়ে মুহূর্তের মধ্যে বিদ্যুৎ গতিতে কাজ করে।'
        ),
        sectionId: 'mechanism',
        color: '#d97706',
      },
      {
        id: 'node-ant-carrier',
        label: l('3. Adenine Nucleotide Translocase (ANT / SLC25A4)', '৩. অ্যাডেনাইন নিউক্লিওটাইড ট্রান্সলোকেজ (ANT)'),
        description: l(
          'Electrogenic antiporter exporting ATP4- to cytosol in exchange for ADP3- influx into matrix. Consumes ~25% of the proton motive force Delta-Psi.',
          'ইলেকট্রোজেনিক বাহক যা সাইটোসোলে এটিপি৪- বের করে এবং ম্যাট্রিক্সে এডিপি৩- প্রবেশ করায়। এটি ঝিল্লি বিভবের ২৫% শক্তি খরচ করে।'
        ),
        details: l(
          'Target of deadly natural plant toxin atractyloside (locks ANT in cytoplasmic-facing conformation) and bongkrekic acid (locks ANT in matrix-facing conformation), halting cellular respiration.',
          'অ্যাট্রাক্টাইলোসাইড এবং বংকরেকিক অ্যাসিড নামক বিষাক্ত উদ্ভিজ্জ বিষ এই বাহককে পুরোপুরি অবরুদ্ধ করে কোষের শ্বসন বন্ধ করে দেয়।'
        ),
        sectionId: 'structure',
        color: '#2563eb',
      },
      {
        id: 'node-pic-carrier',
        label: l('4. Phosphate Carrier (PiC / SLC25A3)', '৪. ফসফেট ক্যারিয়ার (PiC / SLC25A3)'),
        description: l(
          'Electroneutral symporter importing inorganic phosphate (H2PO4-) together with one proton (H+) into the mitochondrial matrix down the chemical pH gradient (Delta-pH).',
          'ইলেকট্রোনিউট্রাল বাহক যা রাসায়নিক পিএইচ গ্রেডিয়েন্টের সাহায্যে ১টি প্রোটনের সাথে ১টি অজৈব ফসফেট (H2PO4-) মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে প্রবেশ করায়।'
        ),
        details: l(
          'Provides essential substrate Pi for ATP synthase. Inhibited by sulfhydryl-reactive mercurials such as mersalyl and N-ethylmaleimide (NEM).',
          'এটিপি সিন্থেজের জন্য প্রয়োজনীয় অজৈব ফসফেট সরবরাহ করে। মার্সালিল জাতীয় পারদ যৌগ দ্বারা এটি বাধাপ্রাপ্ত হয়।'
        ),
        sectionId: 'structure',
        color: '#059669',
      },
      {
        id: 'node-citrate-carrier',
        label: l('5. Citrate-Malate Carrier (CIC / SLC25A1)', '৫. সাইট্রেট-ম্যালেট ক্যারিয়ার (CIC / SLC25A1)'),
        description: l(
          'Antiport exporting mitochondrial matrix citrate in exchange for cytosolic malate. Vital for exporting mitochondrial acetyl-CoA units for de novo lipogenesis.',
          'অ্যান্টিপোর্টার যা সাইটোসলের ম্যালেটের বিনিময়ে মাইটোকন্ড্রিয়ার সাইট্রেট বাইরে পাঠায়। চর্বি তৈরির জন্য এটিপি-সাইট্রেট লাইয়েজ এনজাইমের সাবস্ট্রেট সরবরাহ করে।'
        ),
        details: l(
          'In cytosol, ATP-citrate lyase (ACLY) cleaves citrate into acetyl-CoA and oxaloacetate. Acetyl-CoA is converted to malonyl-CoA by ACC for fatty acid synthesis.',
          'সাইটোসোলে পৌঁছে সাইট্রেট ভেঙে অ্যাসিটাইল-কোএ তৈরি করে, যা পরবর্তীতে ফ্যাটি অ্যাসিড ও কোলেস্টেরল তৈরিতে ব্যবহৃত হয়।'
        ),
        sectionId: 'integration',
        color: '#7c3aed',
      },
      {
        id: 'node-carnitine-carrier',
        label: l('6. Carnitine-Acylcarnitine Translocase (CACT / SLC25A20)', '৬. কার্নিটিন-অ্যাসাইলকার্নিটিন ট্রান্সলোকেজ (CACT)'),
        description: l(
          'Transports long-chain acylcarnitine esters across the inner mitochondrial membrane in exchange for free carnitine, completing the CPT-I / CPT-II fatty acid shuttle.',
          'অভ্যন্তরীণ ঝিল্লি দিয়ে দীর্ঘ চর্বিযুক্ত অ্যাসাইলকার্নিটিন ভেতরে নেয় এবং মুক্ত কার্নিটিন বাইরে পাঠায়; যা বিটা-জারণের মূল সেতু।'
        ),
        details: l(
          'CACT deficiency causes severe neonatal hypoketotic hypoglycemia, cardiomyopathy, and ventricular arrhythmias upon brief fasting.',
          'CACT ঘাটতিতে মারাত্মক নবজাতকীয় হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া, কার্ডিওমায়োপ্যাথি ও প্রাণঘাতী এরিদমিয়া দেখা দেয়।'
        ),
        sectionId: 'integration',
        color: '#0891b2',
      },
      {
        id: 'node-abcd1-peroxisome',
        label: l('7. Peroxisomal ABCD1 Transporter (X-ALD Gateway)', '৭. পারঅক্সিজোমাল ABCD1 বাহক (X-ALD গেটওয়ে)'),
        description: l(
          'ATP-binding cassette transporter importing very-long-chain fatty acids (VLCFAs, C24:0, C26:0) into peroxisomes for initial alpha/beta-oxidation shortening.',
          'এটিপি-নির্ভর বাহক যা অতি-দীর্ঘ ফ্যাটি অ্যাসিডকে পারঅক্সিজোমে প্রাথমিক ভাঙনের জন্য প্রবেশ করায়।'
        ),
        details: l(
          'Defective in X-linked Adrenoleukodystrophy (X-ALD). VLCFAs accumulate in plasma and tissues, destroying central nervous system myelin and adrenal cortex.',
          'এই বাহকের জিনের মিউটেশনে এক্স-লিংকড অ্যাড্রেনোলিউকোডিস্ট্রফি হয়, যার ফলে বিষাক্ত চর্বি জমে স্নায়ুর মায়েলিন ও অ্যাড্রিনাল গ্রন্থি ধ্বংস হয়।'
        ),
        sectionId: 'practice',
        color: '#dc2626',
      },
      {
        id: 'node-g6pt-er',
        label: l('8. ER Glucose-6-Phosphate Translocase (SLC37A4)', '৮. ইআর গ্লুকোজ-৬-ফসফেট ট্রান্সলোকেজ (SLC37A4)'),
        description: l(
          'Transports cytosolic glucose-6-phosphate into the endoplasmic reticulum lumen, exposing it to glucose-6-phosphatase catalytic subunit for free glucose release.',
          'সাইটোসলের গ্লুকোজ-৬-ফসফেটকে এন্ডোপ্লাজমিক রেটিকুলামের ভেতরে পাঠায় যাতে এনজাইমটি মুক্ত গ্লুকোজ তৈরি করে রক্তে পাঠাতে পারে।'
        ),
        details: l(
          'Mutations cause Glycogen Storage Disease Type Ib (GSD Ib), characterized by severe fasting hypoglycemia, hepatomegaly, neutropenia, and recurrent bacterial infections.',
          'এর ত্রুটিতে গ্লাইকোজেন স্টোরেজ ডিজিজ টাইপ Ib হয়; যাতে মারাত্মক হাইপোগ্লাইসেমিয়া এবং রক্তের শ্বেতকণিকা কমে গিয়ে ঘন ঘন ইনফেকশন দেখা দেয়।'
        ),
        sectionId: 'practice',
        color: '#db2777',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'Organellar membrane map showing mitochondrial SLC25 transport family (ANT, PiC, OGC, AGC1, CIC, CACT), cytosolic-to-matrix electron shuttles, peroxisomal ABCD1, and endoplasmic reticulum SLC37A4.',
      'মাইটোকন্ড্রিয়াল SLC25 বাহক পরিবার (ANT, PiC, OGC, AGC1, CIC, CACT), ইলেকট্রন শাটল ব্যবস্থা, পারঅক্সিজোমাল ABCD1 এবং এন্ডোপ্লাজমিক রেটিকুলামের SLC37A4 প্রদর্শক অর্গানেল ঝিল্লি মানচিত্র।'
    ),
    steps: [
      l(
        'Step 1: Inner mitochondrial membrane cardiolipin barrier blocks direct movement of NADH, ATP, and CoA esters; specialized carrier proteins mediate solute transit.',
        'ধাপ ১: মাইটোকন্ড্রিয়ার অভ্যন্তরীণ ঝিল্লি এনএডিএইচ, এটিপি ও কোএ যৌগের জন্য অপ্রবেশ্য; বিশেষায়িত বাহক প্রোটিন এদের চলাচল নিয়ন্ত্রণ করে।'
      ),
      l(
        'Step 2: Malate-Aspartate shuttle transfers electrons to matrix NAD+ yielding ~2.5 ATP/NADH; Glycerol-3-Phosphate shuttle transfers electrons to ubiquinone yielding ~1.5 ATP/NADH.',
        'ধাপ ২: ম্যালট-অ্যাসপার্টেট শাটল ইলেকট্রন ম্যাট্রিক্স এনএডি-তে দিয়ে ~২.৫ এটিপি দেয়; গ্লিসারল-৩-ফসফেট শাটল ইলেকট্রন কোএনজাইম Q-তে দিয়ে ~১.৫ এটিপি দেয়।'
      ),
      l(
        'Step 3: ANT exports ATP4- consuming membrane potential; peroxisomes use ABCD1 for VLCFA entry; ER uses SLC37A4 to dephosphorylate glucose for release.',
        'ধাপ ৩: ANT ঝিল্লি বিভবের শক্তিতে এটিপি বের করে; পারঅক্সিজোম ABCD1 দিয়ে অতি-দীর্ঘ চর্বি নেয় এবং ইআর SLC37A4 দিয়ে রক্তে গ্লুকোজ ছাড়ে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 6-year-old boy presents with progressive behavioral changes, vision loss, gait ataxia, and hyperpigmentation. Laboratory analysis reveals markedly elevated plasma hexacosanoic acid (C26:0) and tetracosanoic acid (C24:0). Brain MRI confirms extensive bilateral parieto-occipital demyelination. Genetic sequencing identifies a pathogenic mutation in an ATP-binding cassette transporter. Which transporter and cellular compartment are primarily defective?',
      'একটি ৬ বছরের শিশুর আচরণগত পরিবর্তন, দৃষ্টিশক্তি হ্রাস, হাঁটতে সমস্যা এবং ত্বকের কালো দাগ দেখা দিল। রক্ত পরীক্ষায় অত্যন্ত বেশি মাত্রায় হেক্সাকোসানয়িক অ্যাসিড (C26:0) পাওয়া গেল। মস্তিষ্কের এমআরআই-তে মায়েলিন ক্ষয় নিশ্চিত হলো। জেনেটিক পরীক্ষায় একটি এটিপি-বাইন্ডিং ক্যাসেট বাহকের মিউটেশন ধরা পড়ল। এই ত্রুটিটি কোন বাহক এবং কোন অঙ্গাণুতে বিদ্যমান?'
    ),
    options: [
      l(
        'Adenine Nucleotide Translocase (ANT / SLC25A4) in the inner mitochondrial membrane.',
        'মাইটোকন্ড্রিয়ার অভ্যন্তরীণ ঝিল্লির অ্যাডেনাইন নিউক্লিওটাইড ট্রান্সলোকেজ (ANT)।'
      ),
      l(
        'ABCD1 (Adrenoleukodystrophy protein) in the peroxisomal membrane.',
        'পারঅক্সিজোম ঝিল্লির ABCD1 বাহক (অ্যাড্রেনোলিউকোডিস্ট্রফি প্রোটিন)।'
      ),
      l(
        'Glucose-6-Phosphate Translocase (SLC37A4) in the endoplasmic reticulum membrane.',
        'এন্ডোপ্লাজমিক রেটিকুলাম ঝিল্লির গ্লুকোজ-৬-ফসফেট ট্রান্সলোকেজ (SLC37A4)।'
      ),
      l(
        'Aralar / AGC1 (SLC25A12) in the mitochondrial inner membrane.',
        'মাইটোকন্ড্রিয়ার অভ্যন্তরীণ ঝিল্লির অ্যারালার / AGC1 বাহক।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'The patient presents with classical childhood cerebral X-linked Adrenoleukodystrophy (X-ALD), caused by mutations in ABCD1 on the X chromosome. ABCD1 encodes an ATP-dependent transporter in the peroxisomal membrane that imports very-long-chain fatty acids (VLCFAs, C24:0, C26:0). Loss of ABCD1 prevents peroxisomal beta-oxidation, causing toxic VLCFA accumulation in myelin and the adrenal cortex.',
      'রোগীর লক্ষণগুলো এক্স-লিংকড অ্যাড্রেনোলিউকোডিস্ট্রফি (X-ALD) নির্দেশ করে, যা পারঅক্সিজোম ঝিল্লির ABCD1 জিনের মিউটেশনের কারণে ঘটে। এই বাহকটি নষ্ট হলে অতি-দীর্ঘ ফ্যাটি অ্যাসিড (VLCFA, C24:0, C26:0) পারঅক্সিজোমে ঢুকতে পারে না এবং রক্ত ও মস্তিষ্কের মায়েলিনে জমে ধ্বংসাত্মক স্নায়বিক ক্ষতি সৃষ্টি করে।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation Level', 'ভিত্তি স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('Why Cells Build Walls: The Logic of Compartmentation', 'কোষ কেন প্রাচীর গড়ে তোলে: প্রকোষ্ঠায়নের যুক্তি'),
          paragraphs: [
            l(
              'A living human cell is not an amorphous bag of well-mixed enzymes; it is a highly compartmentalized microscopic city divided by specialized lipid bilayer membranes. Within this architectural layout, competing metabolic processes are physically separated: fatty acid synthesis occurs in the cytosol while fatty acid destruction occurs inside mitochondria; protein synthesis happens in the cytoplasm while DNA replication is sequestered within the nucleus. Compartmentation prevents futile cycles and protects delicate cellular structures from toxic byproducts.',
              'মানব জীবকোষ কোনো এনজাইমের বিশৃঙ্খল দ্রবণ নয়; বরং এটি লিপিড ঝিল্লি দ্বারা সুরক্ষিত এক অত্যন্ত সুশৃঙ্খল আণুবীক্ষণিক শহর। এই সুনির্দিষ্ট কাঠামোর কারণে পরস্পরবিরোধী প্রক্রিয়াগুলো আলাদা থাকে: যেমন ফ্যাটি অ্যাসিড তৈরি হয় সাইটোসোলে, কিন্তু তা ভাঙা হয় মাইটোকন্ড্রিয়ায়; আবার প্রোটিন তৈরি হয় সাইটোপ্লাজমে, কিন্তু ডিএনএ সংরক্ষিত থাকে নিউক্লিয়াসে। এই প্রকোষ্ঠায়ন ক্ষতিকর বিক্রিয়ার অপচয় রোধ করে এবং কোষকে বিভিন্ন বিষাক্ত উপাদান থেকে সুরক্ষিত রাখে।'
            ),
            l(
              'However, physical separation creates a massive logistics challenge: metabolites synthesized in one room are urgently needed as fuel in another. Because biological membranes—especially the inner mitochondrial membrane—are completely impermeable to charged molecules, cells must construct specialized microscopic revolving doors called membrane transporters and shuttle systems.',
              'তবে এই বিভাজন কোষের ভেতরে একটি বড় পরিবহন চ্যালেঞ্জ তৈরি করে: এক স্থানে তৈরি পুষ্টি উপাদান অন্য স্থানে জ্বালানি হিসেবে প্রয়োজন হয়। কিন্তু মাইটোকন্ড্রিয়ার ভেতরের প্রাচীর চার্জযুক্ত অণুর জন্য সম্পূর্ণ অপ্রবেশ্য হওয়ায় কোষকে বিশেষায়িত প্রোটিন দরজা তৈরি করতে হয়, যাদের মেটাবোলাইট শাটল ও ঝিল্লি বাহক বলা হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Two Great Energy Shuttles of the Cell', 'কোষের প্রধান দুটি শক্তি শাটল ব্যবস্থা'),
          paragraphs: [
            l(
              'During glycolysis in the cytoplasm, glucose is split and electrons are captured onto the universal electron carrier NADH. These electrons contain immense high-energy potential, but the ATP-generating machinery of oxidative phosphorylation is locked deep inside the mitochondrial matrix. Because NADH cannot cross the mitochondrial inner membrane, the cell deploys two distinct shuttle systems depending on the specialized needs of the tissue.',
              'সাইটোপ্লাজমে গ্লাইকোলাইসিস চলাকালীন গ্লুকোজ ভেঙে উচ্চ-শক্তির ইলেকট্রন এনএডিএইচ (NADH) অণুতে জমা হয়। এই ইলেকট্রন থেকে বিপুল পরিমাণ এটিপি তৈরির মূল কারখানাটি মাইটোকন্ড্রিয়ার ভেতরে বন্দি থাকে। যেহেতু এনএডিএইচ নিজে এই প্রাচীর পার হতে পারে না, তাই বিভিন্ন অঙ্গের প্রয়োজন অনুসারে কোষ দুটি ভিন্ন শাটল ব্যবস্থা ব্যবহার করে।'
            ),
            l(
              'The Malate-Aspartate Shuttle acts like an ultra-efficient freight ferry in the heart and liver, transferring electrons onto internal NAD+ without losing any energy, yielding about 2.5 ATP per NADH. In contrast, skeletal muscle and the brain utilize the Glycerol-3-Phosphate Shuttle, which trades away a small amount of energy (yielding only 1.5 ATP) in exchange for blinding speed during intense muscular exercise.',
              'হৃৎপিণ্ড ও যকৃতে ম্যালট-অ্যাসপার্টেট শাটল কাজ করে যা কোনো শক্তি ক্ষয় না করে পূর্ণ ২.৫টি এটিপি উদ্ধার করে। পক্ষান্তরে কঙ্কালপেশি ও মস্তিষ্কে কাজ করে গ্লিসারল-৩-ফসফেট শাটল; এটি সামান্য শক্তি ত্যাগ করে (দেয় মাত্র ১.৫টি এটিপি) কিন্তু তীব্র শারীরিক কাজের সময় বিদ্যুতের গতিতে শক্তি সরবরাহ নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Mitochondria, Peroxisomes, and the Endoplasmic Reticulum', 'মাইটোকন্ড্রিয়া, পারঅক্সিজোম ও এন্ডোপ্লাজমিক রেটিকুলাম'),
          paragraphs: [
            l(
              'Beyond energy shuttles, every organelle possesses dedicated membrane gateways. Mitochondria rely on the SLC25 transporter family to import ADP and inorganic phosphate while exporting newly synthesized ATP into the cell. Peroxisomes use ABC transporters to import very-long-chain fatty acids that are too large for mitochondria to handle directly. The endoplasmic reticulum uses glucose-6-phosphate translocase to dephosphorylate stored glycogen and release free glucose into the bloodstream.',
              'শক্তি শাটল ছাড়াও প্রতিটি অঙ্গাণুর নিজস্ব প্রোটিন গেট থাকে। মাইটোকন্ড্রিয়া SLC25 বাহকের মাধ্যমে এডিপি ও ফসফেট ভেতরে নেয় এবং নতুন তৈরি এটিপি বাইরে পাঠায়। পারঅক্সিজোম অতি-দীর্ঘ চর্বি ভাঙার জন্য বিশেষ ABC বাহক ব্যবহার করে। অন্যদিকে এন্ডোপ্লাজমিক রেটিকুলাম গ্লুকোজ-৬-ফসফেট ট্রান্সলোকেজের মাধ্যমে লিভারের গ্লাইকোজেন থেকে রক্তে মুক্ত গ্লুকোজ ছড়িয়ে দেয়।'
            ),
            l(
              'When any of these microscopic gates suffer a genetic mutation, the consequence is catastrophic: toxic substrates accumulate outside the organelle, while essential metabolic fuels become depleted inside, leading to severe inborn metabolic diseases.',
              'এই আণুবীক্ষণিক গেটগুলোর কোনো একটিতে জিনগত ত্রুটি দেখা দিলে সংশ্লিষ্ট অঙ্গাণুর বাইরে বিষাক্ত উপাদান জমতে থাকে এবং ভেতরে শক্তির তীব্র সংকট দেখা দেয়, যা মারাত্মক জন্মগত বিপাকীয় রোগের জন্ম দেয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Metabolic Coordination Across Cellular Rooms', 'কোষের বিভিন্ন প্রকোষ্ঠের মধ্যে বিপাকীয় সমন্বয়'),
          paragraphs: [
            l(
              'Cellular metabolism functions like an industrial assembly line running through multiple interconnected rooms. For example, the synthesis of urea requires the first two reactions to occur in the mitochondrial matrix, while the remaining three reactions take place in the cytosol, requiring ornithine and citrulline to cross the mitochondrial membrane continuously via the ORNT1 transporter.',
              'কোষীয় বিপাক একটি কারখানার মতো কাজ করে যেখানে একটি পণ্যের বিভিন্ন অংশ আলাদা আলাদা ঘরে তৈরি হয়। উদাহরণস্বরূপ, ইউরিয়া তৈরির প্রথম দুটি ধাপ ঘটে মাইটোকন্ড্রিয়ার ভেতরে, কিন্তু পরের তিনটি ধাপ সম্পন্ন হয় সাইটোসোলে; যার জন্য অরনিথিন ও সিট্রুলিনকে অনবরত ঝিল্লি পারাপার করতে হয়।'
            ),
            l(
              'Similarly, de novo fatty acid synthesis in the liver requires acetyl-CoA, which is trapped inside mitochondria. The cell converts acetyl-CoA into citrate, exports it across the mitochondrial membrane via the citrate carrier, and then cleaves it back into acetyl-CoA in the cytoplasm where fatty acid synthase is located.',
              'একইভাবে যকৃতে চর্বি তৈরির প্রধান কাঁচামাল অ্যাসিটাইল-কোএ মাইটোকন্ড্রিয়ার ভেতরে আটকে থাকে। কোষ এটিকে প্রথমে সাইট্রেটে রূপান্তরিত করে বাইরে পাঠায় এবং সাইটোপ্লাজমে পুনরায় ভেঙে চর্বি তৈরির কাজে লাগায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Everyday Clinical Significance of Membrane Transport', 'ঝিল্লি পরিবহনের দৈনন্দিন ক্লিনিক্যাল গুরুত্ব'),
          paragraphs: [
            l(
              'Transport defects underlie several famous genetic diseases. In X-linked Adrenoleukodystrophy (the disease depicted in the movie Lorenzo Oil), mutations in the peroxisomal ABCD1 transporter prevent the import and breakdown of very-long-chain fatty acids, leading to toxic accumulation that destroys brain myelin and adrenal function.',
              'ঝিল্লি পরিবহনের ত্রুটি বহু জটিল জেনেটিক রোগের মূল কারণ। যেমন এক্স-লিংকড অ্যাড্রেনোলিউকোডিস্ট্রফিতে পারঅক্সিজোমের ABCD1 বাহক নষ্ট হয়ে যাওয়ায় অতি-দীর্ঘ ফ্যাটি অ্যাসিড ভাঙা যায় না; ফলে বিষাক্ত চর্বি জমে স্নায়ুতন্ত্রের মায়েলিন আবরণ ও অ্যাড্রিনাল গ্রন্থি ধ্বংস হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Core Principles of Cellular Geography', 'কোষীয় ভূগোলের মূল নীতিসমূহ'),
          paragraphs: [
            l(
              'Cellular membranes establish vital compartmentation that organizes metabolic pathways and prevents chaos. Because polar metabolites cannot penetrate lipid bilayers, dedicated SLC25 carriers and redox shuttles govern the movement of electrons, phosphates, and carbon backbones, directly determining the cellular ATP harvest.',
              'কোষীয় ঝিল্লি বিপাকীয় পথগুলোকে সুশৃঙ্খল রাখতে অপরিহার্য প্রকোষ্ঠায়ন সৃষ্টি করে। যেহেতু চার্জযুক্ত অণু লিপিড প্রাচীর ভেদ করতে পারে না, তাই বিশেষায়িত বাহক ও রেডক্স শাটলগুলো ইলেকট্রন ও শক্তির প্রবাহ নিয়ন্ত্রণ করে কোষের সামগ্রিক এটিপি উৎপাদন নির্ধারণ করে।'
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
          heading: l('Biophysical Architecture of the Inner Mitochondrial Membrane Barrier', 'মাইটোকন্ড্রিয়াল অভ্যন্তরীণ ঝিল্লির জৈবভৌত প্রাচীর কাঠামো'),
          paragraphs: [
            l(
              'The inner mitochondrial membrane (IMM) represents one of the most impermeable biological barriers in nature. Containing an unusually high protein-to-lipid ratio (~75% protein by mass) and packed with the unique diphosphatidylglycerol lipid cardiolipin (~20% of total phospholipid), the IMM lacks nonspecific porin channels and is completely impermeable to small ions, protons, and polar metabolites. This impermeability is essential to sustain the steep electrochemical proton gradient (proton motive force, Delta-p) generated by the respiratory electron transport chain.',
              'মাইটোকন্ড্রিয়ার অভ্যন্তরীণ ঝিল্লি (IMM) প্রকৃতির অন্যতম দুর্ভেদ্য জৈবিক প্রাচীর। এতে প্রোটিনের অনুপাত অত্যন্ত বেশি (ভরের প্রায় ৭৫%) এবং বিশেষ লিপিড কার্ডিওলিপিন (মোট ফসফোলিপিডের প্রায় ২০%) দ্বারা ঘনভাবে সন্নিবিষ্ট থাকে। এতে কোনো ছিদ্র বা পোরিন চ্যানেল না থাকায় এটি আয়ন, প্রোটন ও পোলার মেটাবোলাইটের জন্য সম্পূর্ণ অপ্রবেশ্য। শ্বাসপ্রশ্বাসের ইলেকট্রন ট্রান্সপোর্ট চেইনের মাধ্যমে উৎপন্ন খাড়া প্রোটন মোটিভ বল (Delta-p) ধরে রাখার জন্য এই দুর্ভেদ্যতা একান্ত অপরিহার্য।'
            ),
            l(
              'Because intermediate metabolites such as pyruvate, citrate, alpha-ketoglutarate, malate, ATP, ADP, and inorganic phosphate must continuously cross this membrane to coordinate energy homeostasis, the nuclear genome encodes an evolutionarily conserved family of carrier proteins known as the Solute Carrier Family 25 (SLC25), comprising 53 distinct transport proteins in humans.',
              'যেহেতু পাইরুভেট, সাইট্রেট, আলফা-কিটোগ্লুটারেট, ম্যালেট, এটিপি, এডিপি এবং অজৈব ফসফেটের মতো মেটাবোলাইটগুলোকে অনবরত এই প্রাচীর পার হতে হয়, তাই মানুষের জিনোমে সলিউট ক্যারিয়ার ফ্যামিলি ২৫ (SLC25) নামক একটি বিবর্তনীয় সংরক্ষিত বাহক পরিবার সংরক্ষিত রয়েছে যার মধ্যে ৫৩টি পৃথক প্রোটিন অন্তর্ভুক্ত।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Molecular Mechanics of the SLC25 Carrier Superfamily', 'SLC25 বাহক সুপারফ্যামিলির আণবিক গঠন ও কার্যপদ্ধতি'),
          paragraphs: [
            l(
              'All SLC25 mitochondrial carriers share a tripartite pseudotrimeric architecture consisting of approximately 300 amino acids. Structurally, each carrier comprises three tandem homologous sequence repeats of ~100 residues; each repeat folds into two transmembrane alpha-helices connected by a short loop and a signature sequence motif (PX[D/E]XX[K/R]). These six transmembrane helices assemble into a central water-filled translocation funnel that alternates between a cytoplasmic-facing (c-state) and a matrix-facing (m-state) conformation through an induced-fit rocker-switch mechanism.',
              'সমস্ত SLC25 মাইটোকন্ড্রিয়াল বাহকের একটি সাধারণ তিন-অংশের কাঠামো রয়েছে যা প্রায় ৩০০ অ্যামিনো অ্যাসিড দ্বারা গঠিত। এদের প্রতিটি পুনরাবৃত্তি দুটি ট্রান্সমেমব্রেন আলফা-হিলিক্স এবং একটি সিগনেচার মোটিফ দিয়ে তৈরি। এই ছয়টি হিলিক্স মিলে কেন্দ্রে একটি জলপূর্ণ পথ তৈরি করে যা রকার-সুইচ প্রক্রিয়ার মাধ্যমে পর্যায়ক্রমে সাইটোপ্লাজমমুখী (c-state) এবং ম্যাট্রিক্সমুখী (m-state) রূপ ধারণ করে মেটাবোলাইট পরিবহন করে।'
            ),
            l(
              'The Adenine Nucleotide Translocase (ANT, SLC25A4-A6) is the most abundant carrier in the IMM, accounting for over 10% of total mitochondrial protein in cardiac muscle. ANT operates electrogenically: it binds ATP4- in the matrix and exports it in 1:1 stoichiometry for cytosolic ADP3-. Because of the net charge displacement, ANT is directly driven by the positive-outside membrane potential (Delta-Psi), which actively pulls ATP4- outward while repelling ADP3- inward.',
              'অ্যাডেনাইন নিউক্লিওটাইড ট্রান্সলোকেজ (ANT) হলো সবচেয়ে বেশি পরিমাণে থাকা বাহক, যা হৃদপেশির মাইটোকন্ড্রিয়াল প্রোটিনের ১০%-এরও বেশি অংশ গঠন করে। ANT ইলেকট্রোজেনিক পদ্ধতিতে কাজ করে: এটি ম্যাট্রিক্স থেকে ATP4- বের করে এবং ১:১ অনুপাতে সাইটোসলের ADP3- ভেতরে নেয়। এই আধান পার্থক্যের কারণে ঝিল্লির ধনাত্মক বিভব সরাসরি এই পরিবহনকে গতিশীল করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Quantitative Mechanics: Malate-Aspartate versus Glycerol-3-Phosphate Shuttles', 'পরিমাণগত গতিবিদ্যা: ম্যালট-অ্যাসপার্টেট বনাম গ্লিসারল-৩-ফসফেট শাটল'),
          paragraphs: [
            l(
              'The Malate-Aspartate Shuttle operates via a coordinated four-enzyme, two-transporter cycle. In the cytosol, cytosolic malate dehydrogenase (cMDH) reduces oxaloacetate to malate using cytosolic NADH: Oxaloacetate + NADH + H+ <-> Malate + NAD+. Malate enters the matrix through the alpha-ketoglutarate/malate carrier (OGC / SLC25A11) in exchange for alpha-ketoglutarate. Inside the matrix, mitochondrial MDH (mMDH) re-oxidizes malate to oxaloacetate, producing matrix NADH that enters Complex I of the respiratory chain.',
              'ম্যালট-অ্যাসপার্টেট শাটল চারটি এনজাইম ও দুটি বাহকের সমন্বিত চক্রের মাধ্যমে পরিচালিত হয়। সাইটোসোলে ম্যালট ডিহাইড্রোজিনেজ (cMDH) এনএডিএইচ ব্যবহার করে অক্সালোঅ্যাসিটেটকে ম্যালেটে পরিণত করে: Oxaloacetate + NADH + H+ <-> Malate + NAD+। ম্যালেট ওজিসি (SLC25A11) বাহকের মাধ্যমে আলফা-কিটোগ্লুটারেটের বিনিময়ে ম্যাট্রিক্সে ঢোকে। ম্যাট্রিক্সে গিয়ে mMDH ম্যালেটকে জারিত করে পুনরায় ম্যাট্রিক্স এনএডিএইচ তৈরি করে যা কমপ্লেক্স I-এ ইলেকট্রন দেয়।'
            ),
            l(
              'To return carbon to the cytosol, matrix oxaloacetate cannot cross the IMM directly; it is transaminated with glutamate by mitochondrial aspartate aminotransferase (mGOT2) to form aspartate and alpha-ketoglutarate. Aspartate is exported to the cytosol by the glutamate-aspartate carrier (AGC1/Citrin / SLC25A13) in exchange for cytosolic glutamate and a proton. In the cytosol, cGOT1 regenerates oxaloacetate. Because electrons reach Complex I, the ATP yield is ~2.5 per cytosolic NADH. The net shuttle is driven unidirectionally by the proton motive force through the electrogenic AGC transporter.',
              'কার্বনকে সাইটোসোলে ফিরিয়ে নিতে ম্যাট্রিক্সের অক্সালোঅ্যাসিটেটকে ট্রান্সঅ্যামিনেশনের মাধ্যমে অ্যাসপার্টেট ও আলফা-কিটোগ্লুটারেটে রূপান্তরিত করা হয়। এজিসি১ (সিট্রিন) বাহক অ্যাসপার্টেট বাইরে পাঠায় এবং গ্লুটামেট ভেতরে নেয়। সাইটোসোলে cGOT1 পুনরায় অক্সালোঅ্যাসিটেট তৈরি করে। যেহেতু ইলেকট্রন কমপ্লেক্স I-এ প্রবেশ করে, তাই প্রতি এনএডিএইচে পূর্ণ ~২.৫ এটিপি ফলন পাওয়া যায়।'
            ),
            l(
              'The Glycerol-3-Phosphate Shuttle operates as an irreversible electron bypass. In the cytosol, glycerol-3-phosphate dehydrogenase 1 (cGPD1) reduces dihydroxyacetone phosphate (DHAP) to glycerol-3-phosphate, consuming cytosolic NADH. Glycerol-3-phosphate diffuses across the porous outer mitochondrial membrane to reach GPD2, an enzyme embedded on the outer surface of the inner membrane facing the intermembrane space. GPD2 uses an enzyme-bound FAD cofactor to re-oxidize glycerol-3-phosphate back to DHAP, funneling electrons directly into the ubiquinone pool (Q -> QH2).',
              'গ্লিসারল-৩-ফসফেট শাটল একটি ভিন্ন ইলেকট্রন বাইপাস হিসেবে কাজ করে। সাইটোসোলে cGPD1 এনজাইম DHAP-কে গ্লিসারল-৩-ফসফেটে বিজারিত করে এনএডিএইচ খরচ করে। এই যৌগটি মাইটোকন্ড্রিয়ার বহিঃঝিল্লি পেরিয়ে ভেতরের ঝিল্লির বাইরের তলে থাকা GPD2 এনজাইমে পৌঁছায়। GPD2 এর FAD কোফ্যাক্টরের মাধ্যমে ইলেকট্রন সরাসরি কোএনজাইম Q-তে পৌঁছে দেয় এবং DHAP পুনরায় সাইটোসোলে ফিরে আসে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Peroxisomal ABC Transporters & Endoplasmic Reticulum Gateways', 'পারঅক্সিজোমাল ABC বাহক ও এন্ডোপ্লাজমিক রেটিকুলাম গেটওয়ে'),
          paragraphs: [
            l(
              'Compartmentation extends across non-mitochondrial organelles. Peroxisomes lack respiratory chains and ATP synthases; their membranes contain half-ABC transporters (ABCD1, ABCD2, ABCD3) that form functional homodimers and heterodimers. ABCD1 (ALDP) selectively binds and hydrolyzes ATP to translocate very-long-chain acyl-CoA esters (>=C22:0, such as lignocerate C24:0 and hexacosanoate C26:0) into the peroxisomal matrix, where acyl-CoA oxidase initiates beta-oxidation to shorten chains to octanoyl-CoA (C8) for mitochondrial transfer.',
              'প্রকোষ্ঠায়নের এই নিয়ম মাইটোকন্ড্রিয়ার বাইরেও বিস্তৃত। পারঅক্সিজোমে কোনো এটিপি সিন্থেজ থাকে না; এদের ঝিল্লিতে ABCD1, ABCD2 এবং ABCD3 নামক বিশেষ এটিপি-নির্ভর বাহক থাকে। ABCD1 বাহক অতি-দীর্ঘ ফ্যাটি অ্যাসিডকে (>=C22:0) পারঅক্সিজোমে প্রবেশ করায় যেখানে বিশেষ অক্সিডেজের মাধ্যমে চর্বির শিকল ছোট করে C8-এ রূপান্তর করা হয় যাতে মাইটোকন্ড্রিয়া তা সহজে গ্রহণ করতে পারে।'
            ),
            l(
              'In the endoplasmic reticulum, the terminal reaction of glycogenolysis and gluconeogenesis is compartmentalized within the lumen. The catalytic subunit of glucose-6-phosphatase (G6PC) faces the ER lumen to prevent futile recycling of cytosolic glucose. Cytosolic glucose-6-phosphate must enter via the G6P translocase (SLC37A4). Following luminal hydrolysis, free glucose and inorganic phosphate are exported back to the cytosol via GLUT7 and Pi translocase before exiting into the blood via GLUT2.',
              'এন্ডোপ্লাজমিক রেটিকুলামের ভেতরে গ্লুকোজ-৬-ফসফাটেজ (G6PC) এনজাইম অবস্থান করে যাতে সাইটোসলের গ্লুকোজ অকারণে পুনরায় ফসফরাইলেটেড না হয়। সাইটোসলের গ্লুকোজ-৬-ফসফেট SLC37A4 বাহকের মাধ্যমে ভেতরে ঢুকে আর্দ্রবিশ্লেষিত হয় এবং উৎপন্ন মুক্ত গ্লুকোজ GLUT2 বাহকের মাধ্যমে রক্তে প্রবেশ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Quantitative Bioenergetic Calculations: The Proton Tax of Transport', 'পরিমাণগত জৈবশক্তিবিজ্ঞান হিসাব: পরিবহনের প্রোটন কর'),
          paragraphs: [
            l(
              'Synthesizing ATP and delivering it to the cytosol imposes an obligatory thermodynamic "proton tax." The F1Fo-ATP synthase utilizes 8 c-subunits in human mitochondria, requiring 8 protons translocated per complete 360-degree rotation producing 3 ATP (8/3 = 2.67 H+ per ATP). However, ANT export of ATP4- in exchange for ADP3- coupled to PiC import of H2PO4- with 1 H+ consumes exactly 1 additional proton equivalent from the proton motive force. Thus, 2.67 + 1.0 = 3.67 H+ (conventionally rounded to 4.0 H+) are expended per cytosolic ATP generated.',
              'এটিপি তৈরি এবং তা সাইটোসোলে পাঠাতে একটি নির্দিষ্ট পরিমাণ প্রোটন শক্তি খরচ হয় যাকে বায়োএনার্জেটিক্সে "প্রোটন ট্যাক্স" বলা হয়। মানুষের মাইটোকন্ড্রিয়াল এটিপি সিন্থেজে ৩টি এটিপি তৈরি করতে ৮টি প্রোটন লাগে (প্রতি এটিপিতে ২.৬৭ H+)। কিন্তু ANT ও PiC বাহক দ্বারা এই এটিপি বাইরে পাঠাতে ও কাঁচামাল আনতে আরও ১টি প্রোটন সমতুল্য শক্তি খরচ হয়। ফলে সাইটোসোলে প্রতি এটিপি পৌঁছাতে মোট প্রায় ৪.০টি প্রোটন ব্যয় হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Summary of Intracellular Transport', 'আন্তঃকোষীয় পরিবহনের একাডেমিক সারাংশ'),
          paragraphs: [
            l(
              'The inner mitochondrial membrane impermeability necessitates the SLC25 transport family. The Malate-Aspartate shuttle preserves a maximal ~2.5 ATP/NADH yield through Complex I, whereas the Glycerol-3-Phosphate shuttle bypasses to ubiquinone yielding ~1.5 ATP for rapid burst kinetics. Peroxisomal ABCD1 and ER SLC37A4 demonstrate how intracellular trafficking mutations produce systemic metabolic disease.',
              'মাইটোকন্ড্রিয়াল অভ্যন্তরীণ ঝিল্লির অপ্রবেশ্যতার কারণে SLC25 বাহক পরিবার অপরিহার্য। ম্যালট-অ্যাসপার্টেট শাটল কমপ্লেক্স I-এর মাধ্যমে পূর্ণ ~২.৫ এটিপি উদ্ধার করে, আর গ্লিসারল-৩-ফসফেট শাটল দ্রুতগতির জন্য ~১.৫ এটিপি দেয়। পারঅক্সিজোম ও এন্ডোপ্লাজমিক রেটিকুলামের বাহকগুলোর ত্রুটি মানবদেহে মারাত্মক বিপাকীয় ব্যাধি সৃষ্টি করে।'
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
          heading: l('Molecular Pathophysiology of Mitochondrial Carrier Deficiencies', 'মাইটোকন্ড্রিয়াল বাহক ত্রুটির আণবিক প্যাথোফিজিওলজি'),
          paragraphs: [
            l(
              'Monogenic defects in the SLC25 carrier family produce severe, organ-specific human metabolic diseases. Mutations in SLC25A13 encode Citrin, the liver-specific aspartate-glutamate antiporter (AGC2). Citrin deficiency produces Citrullinemia Type II (CTLN2), characterized by hyperammonemia, citrullinemia, and episodic hyperammonemic encephalopathy triggered by high carbohydrate intake. Without functional Citrin, the malate-aspartate shuttle stalls in hepatocytes, causing massive cytosolic NADH accumulation (elevated lactate/pyruvate ratio) and starving the cytosolic urea cycle enzyme argininosuccinate synthetase (ASS1) of aspartate.',
              'SLC25 বাহক পরিবারের জিনগত ত্রুটি জটিল ও অঙ্গ-নির্দিষ্ট মানব রোগের সৃষ্টি করে। SLC25A13 জিনের মিউটেশনে লিভারের অ্যাসপার্টেট-গ্লুটামেট বাহক সিট্রিন নষ্ট হয়ে যায়। এর ফলে সিট্রুলিনেমিয়া টাইপ II (CTLN2) রোগ হয় যাতে রক্তে অ্যামোনিয়া ও সিট্রুলিন বিপজ্জনক মাত্রায় বেড়ে যায়। সিট্রিনের অভাবে যকৃতে ম্যালট-অ্যাসপার্টেট শাটল স্থবির হয়ে পড়ে, যার ফলে সাইটোসোলে প্রচুর এনএডিএইচ জমে এবং ইউরিয়া চক্রে অ্যাসপার্টেটের তীব্র ঘাটতি তৈরি হয়।'
            ),
            l(
              'Mutations in SLC25A20 cause Carnitine-Acylcarnitine Translocase (CACT) deficiency, one of the most lethal inborn errors of fatty acid oxidation. Affected neonates present within 48 hours of birth with hypoketotic hypoglycemia, profound hyperammonemia, severe skeletal myopathy, and life-threatening cardiac conduction blocks due to the accumulation of toxic long-chain acylcarnitines that disrupt myocardial ion channels.',
              'SLC25A20 জিনের মিউটেশন কার্নিটিন-অ্যাসাইলকার্নিটিন ট্রান্সলোকেজ (CACT) ঘাটতি তৈরি করে, যা ফ্যাটি অ্যাসিড জারণের অন্যতম মারাত্মক জন্মগত ত্রুটি। আক্রান্ত নবজাতকদের জন্মের ৪৮ ঘণ্টার মধ্যে মারাত্মক হাইপোগ্লাইসেমিয়া, পেশির দুর্বলতা এবং হৃদযন্ত্রের মারাত্মক অ্যারিথমিয়া দেখা দেয় কারণ বিষাক্ত চর্বি জমে হৃৎপিণ্ডের আয়ন চ্যানেলগুলোকে অচল করে দেয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Calcium-Mediated Crosstalk & Metabolic Signal Transduction', 'ক্যালসিয়াম সংকেত ও বিপাকীয় বাহকের সমন্বয়'),
          paragraphs: [
            l(
              'Mitochondrial shuttles are not passive pipes; they function as active calcium sensors that couple cellular excitation to metabolic acceleration. Both neuronal Aralar (SLC25A12) and hepatic Citrin (SLC25A13) contain four regulatory EF-hand calcium-binding domains positioned within their extended N-terminal extensions that project into the intermembrane space. When cytosolic Ca2+ rises during synaptic depolarization or hormone stimulation (from resting ~100 nM to >1 uM), Ca2+ binds these EF-hands, allosterically accelerating AGC transport velocity tenfold.',
              'মাইটোকন্ড্রিয়াল শাটলগুলো কেবল নিষ্ক্রিয় পাইপ নয়; এগুলো সক্রিয় ক্যালসিয়াম সেন্সর হিসেবে কাজ করে যা কোষীয় উদ্দীপনার সাথে শক্তির উৎপাদনকে সংযুক্ত করে। স্নায়ুর অ্যারালার (SLC25A12) এবং যকৃতের সিট্রিন (SLC25A13) বাহকের বাইরের অংশে চারটি ক্যালসিয়াম-সংবেদনশীল ইএফ-হ্যান্ড ডোমেন থাকে। স্নায়বিক সংকেত বা হরমোনের প্রভাবে ক্যালসিয়াম বৃদ্ধি পেলেই এই ডোমেনগুলো সক্রিয় হয়ে শাটলের পরিবহন গতি মুহূর্তের মধ্যে দশ গুণ বাড়িয়ে দেয়।'
            ),
            l(
              'Similarly, mitochondrial GPD2 possesses an EF-hand domain exposed on the outer surface of the inner membrane that binds Ca2+ with an affinity of Kd ~ 0.1–0.3 uM. During muscle contraction, Ca2+ efflux from the sarcoplasmic reticulum activates GPD2 simultaneously with troponin C, ensuring that glycolytic NADH re-oxidation accelerates in lockstep with actin-myosin cross-bridge cycling.',
              'একইভাবে কঙ্কালপেশির মাইটোকন্ড্রিয়াল GPD2 এনজাইমেও ক্যালসিয়াম সেন্সর থাকে। পেশি সংকোচনের সময় নির্গত ক্যালসিয়াম পেশি নাড়ানোর পাশাপাশি এই এনজাইমকেও তাৎক্ষণিকভাবে সক্রিয় করে, যার ফলে পেশি নড়াচড়ার সাথে সাথে এটিপি উৎপাদন সমান তালে তাল মিলিয়ে চলতে পারে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Targeting Metabolic Shuttles in Cancer & Neurodegeneration', 'ক্যান্সার ও স্নায়ুক্ষয় রোগে মেটাবলিক শাটল টার্গেটিং'),
          paragraphs: [
            l(
              'In oncology, rapidly proliferating cancer cells undergoing the Warburg effect rely heavily on mitochondrial metabolite carriers to support anabolic synthesis. The Citrate-Malate Carrier (SLC25A1) is markedly upregulated across non-small cell lung carcinomas, breast cancers, and glioblastomas, exporting matrix citrate to fuel cytosolic de novo lipogenesis and histone acetylation. Small-molecule pharmacological inhibitors of SLC25A1 (such as CTPI-2) starve cancer cells of cytoplasmic acetyl-CoA, inducing tumor growth arrest and restoring sensitivity to chemotherapy.',
              'ক্যান্সার চিকিৎসায় মেটাবলিক শাটল অত্যন্ত গুরুত্বপূর্ণ লক্ষ্যবস্তু। দ্রুত বিভাজিত ক্যান্সার কোষগুলো চর্বি তৈরির জন্য মাইটোকন্ড্রিয়ার সাইট্রেট বাহক (SLC25A1) অতিরিক্ত পরিমাণে প্রকাশ করে। আধুনিক গবেষণায় CTPI-2 নামক বিশেষ ওষুধ দিয়ে এই সাইট্রেট বাহককে অবরুদ্ধ করে ক্যান্সার কোষের চর্বি তৈরি বন্ধ করা হচ্ছে, যার ফলে টিউমার কোষের বৃদ্ধি থমকে যায় এবং কেমোথেরাপির কার্যকারিতা বৃদ্ধি পায়।'
            ),
            l(
              'In neurodegenerative diseases such as Parkinson disease, mitochondrial quality control failure leads to selective impairment of the malate-aspartate shuttle. Loss of Aralar/AGC1 function starves neuronal mitochondria of respiratory substrates, triggering secondary excitotoxicity and bioenergetic collapse that accelerates dopaminergic neuron degeneration.',
              'পারকিনসন রোগের মতো স্নায়ুক্ষয়কারী রোগে মাইটোকন্ড্রিয়ার ম্যালট-অ্যাসপার্টেট শাটল নষ্ট হয়ে যায়। এর ফলে মস্তিষ্কের ডোপামিনার্জিক নিউরনগুলো প্রয়োজনীয় শক্তি থেকে বঞ্চিত হয় এবং দ্রুত অকাল মৃত্যুর শিকার হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Metabolomic Fingerprinting of Transport Disorders', 'পরিবহন ব্যাধির মেটাবোলোমিক নির্ণয় পদ্ধতি'),
          paragraphs: [
            l(
              'Clinical biochemical genetics utilizes tandem mass spectrometry (MS/MS) to diagnose transport defects through specific acylcarnitine and amino acid signatures. In CACT deficiency, plasma acylcarnitines demonstrate massive elevations of C16:0, C18:1, and C18:2 acylcarnitines with severe reductions in free carnitine (C0). In X-ALD, gas chromatography-mass spectrometry (GC-MS) quantifies the ratio of C26:0 / C22:0 and C24:0 / C22:0 in plasma, providing diagnostic precision before the onset of irreversible neurologic symptoms.',
              'আধুনিক ক্লিনিক্যাল জেনেটিক্সে ট্যান্ডেম ভর বর্ণালীবীক্ষণ (MS/MS) ব্যবহার করে প্লাজমা অ্যাসাইলকার্নিটিন প্রোফাইল বিশ্লেষণের মাধ্যমে এই বাহক ত্রুটিগুলো দ্রুত শনাক্ত করা যায়। CACT ঘাটতিতে রক্তে C16 এবং C18 চর্বির মারাত্মক বৃদ্ধি দেখা যায়। অন্যদিকে X-ALD রোগে গ্যাস ক্রোমাটোগ্রাফি দিয়ে রক্তে C26:0 এবং C24:0 অতি-দীর্ঘ চর্বির অনুপাত মেপে শৈশবেই রোগটি নিখুঁতভাবে নির্ণয় করা সম্ভব।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Frontiers in Intracellular Transport Biology', 'আন্তঃকোষীয় পরিবহন বিজ্ঞানের ভবিষ্যৎ'),
          paragraphs: [
            l(
              'Intracellular compartmentation and shuttle networks represent the regulatory infrastructure that enables eukaryotic complexity. From the tight allosteric calcium coupling of mitochondrial carriers to the targeted gene therapy approaches restoring peroxisomal ABCD1 transporters in cerebral adrenoleukodystrophy, understanding organellar transport mechanics is reshaping contemporary molecular therapeutics.',
              'কোষীয় প্রকোষ্ঠায়ন ও শাটল নেটওয়ার্ক মানবদেহের জটিল শারীরবৃত্তীয় সমন্বয় রক্ষা করে। মাইটোকন্ড্রিয়াল বাহকের ক্যালসিয়াম নিয়ন্ত্রণ থেকে শুরু করে অ্যাড্রেনোলিউকোডিস্ট্রফিতে পারঅক্সিজোমাল জিন থেরাপি পর্যন্ত—অঙ্গাণুর ঝিল্লি পরিবহন বিজ্ঞান আধুনিক চিকিৎসা গবেষণায় নতুন দিগন্ত উন্মোচন করছে।'
            ),
          ],
        },
      ],
    },
  },
}
