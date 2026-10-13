import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const oneCarbonRefs = [
  {
    id: 'ducker-rabinowitz-cell-metab-2017',
    authors: 'Gregory S. Ducker, Joshua D. Rabinowitz',
    title: 'One-carbon metabolism in health and disease. Cell Metabolism, 25(1):27-42',
    organization: 'Cell Press / Elsevier',
    year: 2017,
    url: 'https://pubmed.ncbi.nlm.nih.gov/28076779/',
  },
  {
    id: 'lehninger-biochem-8e-ch18',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 18: Amino Acid Oxidation and the Production of Urea',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'stipanuk-sulfur-annurev-2004',
    authors: 'Martha H. Stipanuk',
    title: 'Sulfur amino acid metabolism: pathways for production and removal of homocysteine and cysteine. Annual Review of Nutrition, 24:539-577',
    organization: 'Annual Reviews',
    year: 2004,
    url: 'https://pubmed.ncbi.nlm.nih.gov/15189131/',
  },
  {
    id: 'finkelstein-homocysteine-jnutr-2000',
    authors: 'James D. Finkelstein',
    title: 'Pathways and regulation of homocysteine metabolism in mammals. Journal of Nutritional Biochemistry, 11(10):482-493',
    organization: 'Elsevier Science',
    year: 2000,
    url: 'https://pubmed.ncbi.nlm.nih.gov/11044648/',
  },
  {
    id: 'mudd-homocystinuria-amjhumgenet-1985',
    authors: 'S. Harvey Mudd, Flemming Skovby, Harvey L. Levy',
    title: 'The natural history of homocystinuria due to cystathionine beta-synthase deficiency. American Journal of Human Genetics, 37(1):1-31',
    organization: 'Cell Press / ASHG',
    year: 1985,
    url: 'https://pubmed.ncbi.nlm.nih.gov/3976657/',
  },
]

const oneCarbon3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of One-Carbon Metabolism, Methylation & Transsulfuration',
    '৩ডি বহু-অঙ্গীয় এক-কার্বন বিপাক, মিথাইলেশন ও ট্রান্সসালফারেশনের মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and inspect coordinate space to trace how dietary folate, vitamin B12, and methionine are channeled through mitochondrial and cytosolic cycles across the liver, brain, bone marrow, and vascular endothelium.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে খাদ্যস্থ ফোলেট, ভিটামিন বি১২ এবং মেথিওনিন যকৃৎ, মস্তিষ্ক, অস্থিমজ্জা এবং রক্তনালীতে মাইটোকন্ড্রিয়াল ও সাইটোসোলিক চক্রের মাধ্যমে প্রবাহিত হয়।'
  ),
  description: l(
    'One-carbon metabolism integrates two reciprocal cyclical pathways with a terminal transsulfuration drain: the Folate Cycle transfers carbon units for nucleotide synthesis; the Methionine Cycle generates S-adenosylmethionine (SAM) for hundreds of cellular methyltransferases; and the Transsulfuration Pathway irreversibly shunts homocysteine to cysteine, glutathione, and hydrogen sulfide.',
    'এক-কার্বন বিপাক দুটি পারস্পরিক চক্রাকার পথ এবং একটি অপরিবর্তনীয় ট্রান্সসালফারেশন নালীর সমন্বয়ে গঠিত: ফোলেট চক্র নিউক্লিওটাইড সংশ্লেষণের জন্য কার্বন সরবরাহ করে; মেথিওনিন চক্র কোষের শত শত মিথাইলট্রান্সফারেজের জন্য এস-অ্যাডেনোসিলমেথিওনিন (SAM) তৈরি করে; এবং ট্রান্সসালফারেশন পথ হোমোকসিস্টিনকে সিস্টিন, গ্লুটাথিয়ন ও হাইড্রোজেন সালফাইডে রূপান্তরিত করে।'
  ),
  organs: [
    {
      id: 'organ-liver-methylation-hub',
      name: l('Liver (Hepatic Methylation Hub & Transsulfuration Drain)', 'যকৃৎ (হেপাটিক মিথাইলেশন কেন্দ্র ও ট্রান্সসালফারেশন নালী)'),
      latinName: 'Hepar',
      system: l('Hepato-Metabolic System', 'যকৃৎ-বিপাকীয় তন্ত্র'),
      cavity: l('Peritoneal Cavity (Right Hypochondrium)', 'পেরিটোনিয়াল গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 5, y: 185, z: 2 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'The master regulator of whole-body methyl balance. Expresses the liver-specific MAT1A isoenzyme that rapidly produces SAM, and uniquely expresses betaine-homocysteine S-methyltransferase (BHMT) which provides an alternative choline-derived remethylation bypass. When SAM levels rise, SAM allosterically inhibits MTHFR while potently activating cystathionine beta-synthase (CBS), shunting excess homocysteine irreversibly into transsulfuration.',
        'দেহের সামগ্রিক মিথাইল ভারসাম্যের প্রধান নিয়ন্ত্রক। যকৃতে থাকা MAT1A এনজাইম দ্রুত SAM তৈরি করে এবং এতে অনন্য BHMT এনজাইম থাকে যা কোলিন থেকে মেথিওনিন পুনঃসংশ্লেষ করে। কোষে SAM-এর মাত্রা বৃদ্ধি পেলে তা স্বয়ংক্রিয়ভাবে MTHFR-কে বাধা দেয় এবং CBS এনজাইমকে তীব্রভাবে সক্রিয় করে অতিরিক্ত হোমোকসিস্টিনকে সিস্টিনে রূপান্তরের দিকে পরিচালিত করে।'
      ),
      spatialRelations: l(
        'Nestled in the right hypochondrium, receiving splanchnic portal blood delivering dietary choline and amino acids directly to hepatocytes.',
        'ডান হাইপোকন্ড্রিয়ামে অবস্থিত যা মেসেন্টেরিক রক্ত থেকে খাদ্যের কোলিন ও অ্যামিনো অ্যাসিড সরাসরি গ্রহণ করে।'
      ),
      physiology: l(
        'Synthesizes >85% of body phosphatidylcholine via the PEMT pathway consuming three SAM molecules per PC synthesized, constituting the single largest consumer of metabolic methyl groups in mammals.',
        'PEMT পথের মাধ্যমে দেহের ৮৫%-এর বেশি ফসফাটিডাইলকোলিন তৈরি করে যা প্রতি অণুতে তিনটি SAM ব্যবহার করে, ফলে যকৃৎ হলো স্তন্যপায়ী প্রাণীর দেহে মিথাইল গ্রুপের একক বৃহত্তম গ্রাহক।'
      ),
      nutritionConnection: l(
        'Dietary choline and betaine directly spare methionine and folate requirements by providing methyl groups via hepatic BHMT for homocysteine remethylation.',
        'খাদ্যের কোলিন ও বিটেইন যকৃতের BHMT এনজাইমকে মিথাইল সরবরাহ করে মেথিওনিন ও ফোলেটের প্রয়োজনীয়তা হ্রাস করতে গুরুত্বপূর্ণ ভূমিকা পালন করে।'
      ),
      clinicalSignificance: l(
        'Chronic liver cirrhosis impairs CBS and MAT1A expression, precipitating severe hyperhomocysteinemia, hepatic glutathione depletion, and vulnerability to oxidative hepatocellular injury.',
        'দীর্ঘস্থায়ী লিভার সিরোসিস CBS ও MAT1A এনজাইমের কার্যকারিতা কমিয়ে মারাত্মক হাইপারহোমোকসিস্টিনেমিয়া ও গ্লুটাথিয়নের ঘাটতি তৈরি করে যকৃতের কোষ ধ্বংসের গতি ত্বরান্বিত করে।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-brain-epigenetics-neuro',
      name: l('Brain & Nervous System (Epigenetic Methylation & Neurotransmitter Synthesis)', 'মস্তিষ্ক ও স্নায়ুতন্ত্র (এপিজেনেটিক মিথাইলেশন ও নিউরোট্রান্সমিটার সংশ্লেষ)'),
      latinName: 'Cerebrum',
      system: l('Central Nervous System', 'কেন্দ্রীয় স্নায়ুতন্ত্র'),
      cavity: l('Cranial Cavity', 'করোটিকা গহ্বর'),
      position3D: { x: 0, y: 275, z: 0 },
      color: '#3b82f6',
      highlightColor: '#60a5fa',
      shapeType: 'brain',
      description: l(
        'Consumes massive quantities of SAM for DNA methylation (DNMT1/3), histone methylation, myelin basic protein methylation, and catecholamine neurotransmitter synthesis (PNMT converting norepinephrine to epinephrine). The brain lacks BHMT and CBS, rendering neural tissue entirely dependent on methionine synthase (MTR) and vitamin B12 for homocysteine clearance.',
        'মস্তিষ্কের নিউরন ডিএনএ মিথাইলেশন, হিস্টোন প্রোটিন পরিবর্তন, মায়েলিন আবরণী তৈরি এবং নরএপিনেফ্রিন থেকে এপিনেফ্রিন রূপান্তরের জন্য প্রচুর SAM ব্যবহার করে। মস্তিষ্কে BHMT বা CBS এনজাইম না থাকায় স্নায়ুকলা হোমোকসিস্টিন দূর করার জন্য সম্পূর্ণভাবে ভিটামিন বি১২ ও মেথিওনিন সিন্থেসের ওপর নির্ভরশীল।'
      ),
      spatialRelations: l(
        'Protected within the cranium, relying on the choroid plexus and cerebral endothelial carriers to transport methyl donors across the blood-brain barrier.',
        'করোটিকায় সংরক্ষিত যা বিশেষ বাহকের মাধ্যমে রক্ত-মস্তিষ্ক প্রাচীর অতিক্রম করে মিথাইল গ্রাহক উপাদান গ্রহণ করে।'
      ),
      physiology: l(
        'The blood-brain barrier utilizes specialized folate receptor alpha (FR-alpha) and the reduced folate carrier (RFC) to transport 5-methyl-THF into the cerebrospinal fluid against steep concentration gradients.',
        'রক্ত-মস্তিষ্ক প্রাচীর বিশেষ ফোলেট রিসেপ্টর আলফা ব্যবহার করে রক্ত থেকে ৫-মিথাইল-THF-কে সেরিব্রোস্পাইনাল ফ্লুইডে পরিবহন করে স্নায়ুর স্বাভাবিক কার্যকারিতা রক্ষা করে।'
      ),
      nutritionConnection: l(
        'Periconceptional folic acid supplementation (400 mcg daily) prevents >70% of neural tube defects (anencephaly and spina bifida) by sustaining early embryonic neuroepithelial DNA methylation.',
        'গর্ভধারণের পূর্বে ও শুরুতে দৈনিক ৪০০ মাইক্রোগ্রাম ফলিক এসিড গ্রহণ ভ্রূণের স্নায়ুনালীর ডিএনএ মিথাইলেশন সচল রেখে ৭০%-এর বেশি মারাত্মক নিউরাল টিউব ত্রুটি প্রতিরোধ করে।'
      ),
      clinicalSignificance: l(
        'Vitamin B12 or folate deficiency causes Subacute Combined Degeneration of the spinal cord (SCD) due to failure to methylate myelin basic protein, alongside severe depression and cognitive decline.',
        'ভিটামিন বি১২ বা ফোলেটের অভাব ঘটলে মায়েলিনের মিথাইলেশন বন্ধ হয়ে সুষুম্নাকাণ্ডের সাবঅ্যাকিউট কম্বাইন্ড ডিজেনারেশন (SCD) রোগ দেখা দেয়, যার ফলে হাত-পায়ের অবশতা, বিষণ্নতা ও স্মৃতিভ্রংশ ঘটে।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-bone-marrow-hematopoiesis',
      name: l('Bone Marrow & Erythroblasts (DNA Replication & Megaloblastosis)', 'অস্থিমজ্জা ও এরিথ্রোব্লাস্ট (ডিএনএ প্রতিলিপন ও মেগালোব্লাস্টোসিস)'),
      latinName: 'Medulla Ossium',
      system: l('Hematopoietic System', 'রক্তোৎপাদী ব্যবস্থা'),
      cavity: l('Medullary Canal', 'মেডুলারি গহ্বর'),
      position3D: { x: 0, y: 165, z: 0 },
      color: '#dc2626',
      highlightColor: '#ef4444',
      shapeType: 'skeleton',
      description: l(
        'The primary site of rapid cellular proliferation producing >2 million erythrocytes per second. Requires massive fluxes of 5,10-methylene-THF for thymidylate synthase (TYMS converting dUMP to dTMP) and 10-formyl-THF for de novo purine ring synthesis (glycinamide ribonucleotide formyltransferase).',
        'দেহের অতি দ্রুত বর্ধনশীল কোষের প্রধান কেন্দ্র যা প্রতি সেকেন্ডে ২০ লক্ষেও বেশি লোহিত রক্তকণিকা তৈরি করে। ডিএনএ তৈরির জন্য থাইমিডিন (dTMP) এবং পিউরিন রিং সংশ্লেষণে প্রচুর পরিমাণে সক্রিয় ফোলেটের অবিরাম জোগান প্রয়োজন হয়।'
      ),
      spatialRelations: l(
        'Distributed throughout axial and proximal appendicular bones, actively perfusing newly formed reticulocytes into systemic circulation.',
        'অক্ষীয় ও উপাঙ্গীয় অস্থির অভ্যন্তরে অবস্থিত যা নতুন তৈরি রক্তকণিকা সরাসরি রক্তপ্রবাহে পাঠায়।'
      ),
      physiology: l(
        'Antifolate antineoplastic drugs (methotrexate, pemetrexed) competitively inhibit dihydrofolate reductase (DHFR), starving cancer cells of THF and triggering cell cycle arrest and apoptosis.',
        'ক্যান্সার-বিরোধী ওষুধ মেথোট্রেক্সেট DHFR এনজাইমকে প্রতিহত করে দ্রুত বর্ধনশীল ক্যান্সার কোষে সক্রিয় ফোলেটের জোগান বন্ধ করে দেয় এবং ক্যান্সার কোষ ধ্বংস করে।'
      ),
      nutritionConnection: l(
        'Administering folic acid alone in vitamin B12 deficiency resolves the megaloblastic anemia by bypassing the methyl trap, but masks ongoing and irreversible neurologic degeneration ("folate trap hazard").',
        'ভিটামিন বি১২-এর ঘাটতিতে কেবল ফলিক এসিড দিলে রক্তস্বল্পতা দূর হলেও স্নায়ুর মারাত্মক অপূরণীয় ক্ষয় আড়ালে চলতে থাকে, তাই উভয় ভিটামিনের সঠিক নির্ণয় একান্ত জরুরি।'
      ),
      clinicalSignificance: l(
        'In folate or B12 deficiency (the "methyl trap"), lack of tetrahydrofolate halts dTMP synthesis, arresting DNA replication during S phase while RNA and cytoplasmic protein synthesis continue unimpeded, producing classic Megaloblastic Anemia with giant erythroblasts and hypersegmented neutrophils.',
        'ফোলেট বা ভিটামিন বি১২-এর ঘাটতিতে ডিএনএ তৈরি থমকে যায় কিন্তু কোষের বৃদ্ধি চলতে থাকে, ফলে অস্থিমজ্জায় দানবীয় লোহিত রক্তকণিকা ও রক্তে হাইপারসেগমেন্টেড নিউট্রোফিলযুক্ত মারাত্মক মেগালোব্লাস্টিক অ্যানিমিয়া দেখা দেয়।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-vascular-endothelium-homocysteine',
      name: l('Vascular Endothelium (Homocysteine Toxicity & Atherothrombosis)', 'রক্তনালীর এন্ডোথেলিয়াম (হোমোকসিস্টিনের বিষাক্ততা ও রক্ত জমাট বাঁধা)'),
      latinName: 'Endothelium Vasculare',
      system: l('Cardiovascular Circulatory System', 'রক্ত সংবহনতন্ত্র'),
      cavity: l('Vascular Tree', 'রক্তনালী বৃক্ষ'),
      position3D: { x: -4, y: 220, z: 3 },
      color: '#06b6d4',
      highlightColor: '#22d3ee',
      shapeType: 'heart',
      description: l(
        'Endothelial lining of the arterial and venous vascular tree. Lacks both CBS and BHMT, leaving it susceptible to circulating homocysteine accumulation. Elevated homocysteine auto-oxidizes, generating hydrogen peroxide, superoxide radicals, and reactive homocysteine thiolactone which covalently acylates protein lysine residues (homocysteinylation), damaging structural elastin and collagen.',
        'ধমনী ও শিরার অন্তর্বর্তী এন্ডোথেলিয়াল স্তর। এতে CBS বা BHMT এনজাইম না থাকায় এটি রক্তের অতিরিক্ত হোমোকসিস্টিনের প্রতি অত্যন্ত সংবেদনশীল। অতিরিক্ত হোমোকসিস্টিন জারিত হয়ে ক্ষতিকর মুক্ত র্যাডিক্যাল তৈরি করে এবং রক্তনালীর কোলাজেন ও ইলাস্টিন প্রোটিনকে বিকৃত করে ফেলে।'
      ),
      spatialRelations: l(
        'Forms the universal single-cell layer lining arteries, arterioles, capillaries, and veins throughout the body.',
        'সারাদেহের ধমনী, কৈশিকনালী ও শিরার অভ্যন্তরীণ একমাত্রিক কোষীয় স্তর গঠন করে।'
      ),
      physiology: l(
        'Transsulfuration-derived hydrogen sulfide (H2S), generated by cystathionine gamma-lyase (CSE) in vascular smooth muscle, acts as an essential gasotransmitter promoting vasodilation via ATP-sensitive K+ channels.',
        'ট্রান্সসালফারেশন পথ থেকে উৎপন্ন হাইড্রোজেন সালফাইড (H2S) রক্তনালীর মসৃণ পেশির পটাশিয়াম চ্যানেল খুলে দিয়ে রক্তনালী প্রসারিত করে রক্তচাপ স্বাভাবিক রাখতে সাহায্য করে।'
      ),
      nutritionConnection: l(
        'Synergistic B-vitamin intake (B6 for CBS, B12 for MTR, and folate for MTHFR) accelerates homocysteine catabolism, helping maintain plasma total homocysteine below the atherogenic threshold of 10–12 micromol/L.',
        'তিনটি বি-ভিটামিনের (ভিটামিন বি৬, বি১২ এবং ফোলেট) সুষম উপস্থিতি রক্তে হোমোকসিস্টিনের ক্ষতিকর মাত্রা কমিয়ে রক্তনালীকে দীর্ঘস্থায়ী সুস্থ রাখে।'
      ),
      clinicalSignificance: l(
        'Severe hyperhomocysteinemia causes accelerated atherosclerosis, loss of endothelial nitric oxide (NO) bioavailability, platelet hyperaggregability, and life-threatening premature venous and arterial thromboembolism.',
        'রক্তে অতিরিক্ত হোমোকসিস্টিন জমা হলে অকালে রক্তনালী সরু হয়ে যায়, রক্তনালী প্রসারক নাইট্রিক অক্সাইড কমে যায় এবং অণুচক্রিকা জমাট বেঁধে মারাত্মক হার্ট অ্যাটাক, স্ট্রোক ও পালমোনারি এমবোলিজম ঘটে।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism27OneCarbonMethylationLesson: LessonTopic = {
  id: 'topic.metabolism.one-carbon-methylation-transsulfuration',
  slug: 'one-carbon-methylation-transsulfuration',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '27 · One-Carbon Metabolism, Methylation & Transsulfuration',
    '২৭ · এক-কার্বন বিপাক, মিথাইলেশন ও ট্রান্সসালফারেশন'
  ),
  summary: l(
    'Molecular biochemistry of one-carbon units and sulfur amino acids: mitochondrial formate shuttle and cytosolic folate cycle, MTHFR kinetics and the methyl trap, methionine synthase (vitamin B12), SAM-driven cellular methylation potential, betaine-homocysteine bypass (BHMT), transsulfuration via cystathionine beta-synthase (CBS) and gamma-lyase (CSE) to glutathione, MTHFR C677T polymorphism, and classical homocystinuria.',
    'এক-কার্বন একক ও সালফার অ্যামিনো অ্যাসিডের আণবিক জৈবরসায়ন: মাইটোকন্ড্রিয়াল ফরমেট শাটল ও সাইটোসোলিক ফোলেট চক্র, MTHFR গতিবিদ্যা ও মিথাইল ট্র্যাপ, মেথিওনিন সিন্থেস (ভিটামিন বি১২), SAM-চালিত মিথাইলেশন পটেনশিয়াল, বিটেইন-হোমোকসিস্টিন বাইপাস (BHMT), সিস্টাথায়োনিন বিটা-সিন্থেস (CBS) দ্বারা গ্লুটাথিয়ন উৎপাদন, MTHFR C677T পলিমরফিজম এবং ক্লাসিক্যাল হোমোকসিস্টিনুরিয়া।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Detail the compartmentalized mitochondrial and cytosolic folate cycles, explaining the biochemical basis of the vitamin B12-dependent folate trap.',
      'মাইটোকন্ড্রিয়াল ও সাইটোসোলিক ফোলেট চক্রের প্রকোষ্ঠায়ন বিস্তারিত ব্যাখ্যা করা এবং ভিটামিন বি১২-নির্ভর ফোলেট ট্র্যাপের জৈবরাসাযনিক ভিত্তি মূল্যায়ন করতে পারা।'
    ),
    l(
      'Analyze the methionine cycle and the SAM:SAH methylation potential ratio in DNA and histone epigenetics, alongside the hepatic BHMT remethylation bypass.',
      'ডিএনএ ও হিস্টোন এপিজেনেটিক্সে মেথিওনিন চক্র ও SAM:SAH অনুপাতের প্রভাব বিশ্লেষণ করা এবং যকৃতের BHMT বাইপাস পথ মূল্যায়ন করতে পারা।'
    ),
    l(
      'Trace the transsulfuration pathway from homocysteine to glutathione and taurine, detailing CBS allosteric activation by SAM and the pathology of classical homocystinuria.',
      'হোমোকসিস্টিন থেকে গ্লুটাথিয়ন ও টরিন পর্যন্ত ট্রান্সসালফারেশন পথ ব্যাখ্যা করা এবং SAM দ্বারা CBS সক্রিয়করণ ও ক্লাসিক্যাল হোমোকসিস্টিনুরিয়ার প্যাথলজি বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.amino-acid-catabolism-urea', 'topic.metabolism.purine-pyrimidine-metabolism'],
  relatedTopicIds: ['topic.metabolism.micronutrients-cofactors', 'topic.metabolism.inborn-errors-metabolism'],
  references: oneCarbonRefs,
  evidenceBySection: {
    introduction: ['ducker-rabinowitz-cell-metab-2017', 'lehninger-biochem-8e-ch18'],
    structure: ['ducker-rabinowitz-cell-metab-2017', 'stipanuk-sulfur-annurev-2004'],
    mechanism: ['stipanuk-sulfur-annurev-2004', 'finkelstein-homocysteine-jnutr-2000'],
    integration: ['finkelstein-homocysteine-jnutr-2000', 'mudd-homocystinuria-amjhumgenet-1985'],
    practice: ['mudd-homocystinuria-amjhumgenet-1985', 'ducker-rabinowitz-cell-metab-2017'],
    takeaways: ['ducker-rabinowitz-cell-metab-2017', 'stipanuk-sulfur-annurev-2004'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. One-Carbon Currency & Tetrahydrofolate', '১. এক-কার্বন মুদ্রা ও টেট্রাহাইড্রোফোলেট'), sectionId: 'introduction' },
      { id: 'sec-cycles', label: l('2. The Interlocking Folate & Methionine Cycles', '২. পরস্পর সংযুক্ত ফোলেট ও মেথিওনিন চক্র'), sectionId: 'structure' },
      { id: 'sec-transsulfur', label: l('3. Transsulfuration Pathway to Glutathione', '৩. গ্লুটাথিয়ন উৎপাদনকারী ট্রান্সসালফারেশন পথ'), sectionId: 'mechanism' },
      { id: 'sec-epigenetics', label: l('4. SAM Epigenetics, Neural Tube Defects & Vascular Risk', '৪. SAM এপিজেনেটিক্স, নিউরাল টিউব ত্রুটি ও রক্তনালীর ঝুঁকি'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Quantitative One-Carbon Flux & Antifolate Therapeutics', '৫. পরিমাণগত এক-কার্বন প্রবাহ ও অ্যান্টিফোলেট চিকিৎসা'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Clinical Inborn Errors: Homocystinuria & Summary', '৬. জন্মগত রোগ: হোমোকসিস্টিনুরিয়া ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('S-Adenosylmethionine (SAM)', 'এস-অ্যাডেনোসিলমেথিওনিন (SAM)'),
        definition: l(
          'The primary biological methyl donor in all eukaryotic cells, synthesized from L-methionine and ATP by methionine adenosyltransferase; donates its methyl group to yield S-adenosylhomocysteine (SAH).',
          'সমস্ত ইউক্যারিওটিক কোষের প্রধান জৈব মিথাইল দাতা, যা মেথিওনিন ও এটিপি থেকে সংশ্লেষিত হয় এবং মিথাইল গ্রুপ দান করে SAH-এ পরিণত হয়।'
        ),
      },
      {
        term: l('Methylenetetrahydrofolate Reductase (MTHFR)', 'মিথিলিনটেট্রাহাইড্রোফোলেট রিডাক্টেজ (MTHFR)'),
        definition: l(
          'A key regulatory flavoprotein that irreversibly reduces 5,10-methylene-THF to 5-methyl-THF using NADPH, committing one-carbon units toward homocysteine remethylation.',
          'একটি প্রধান নিয়ন্ত্রক এনজাইম যা অপরিবর্তনীয়ভাবে ৫,১০-মিথিলিন-THF-কে ৫-মিথাইল-THF-এ বিজারিত করে মেথিওনিন তৈরির পথে পরিচালিত করে।'
        ),
      },
      {
        term: l('Cystathionine Beta-Synthase (CBS)', 'সিস্টাথায়োনিন বিটা-সিন্থেস (CBS)'),
        definition: l(
          'A pyridoxal phosphate- and heme-dependent enzyme that condenses homocysteine with L-serine to form cystathionine; allosterically stimulated by SAM to clear excess homocysteine.',
          'ভিটামিন বি৬-নির্ভর একটি প্রধান এনজাইম যা হোমোকসিস্টিন ও সেরিন যুক্ত করে সিস্টাথায়োনিন তৈরি করে; উচ্চমাত্রার SAM দ্বারা এটি প্রবলভাবে সক্রিয় হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Biochemical Mechanism of the Folate Trap in B12 Deficiency', 'ভিটামিন বি১২ ঘাটতিতে ফোলেট ট্র্যাপের জৈবরাসাযনিক মেকানিজম'),
        steps: [
          l(
            'The reduction of 5,10-methylene-THF to 5-methyl-THF catalyzed by MTHFR is physiologically irreversible in human tissues.',
            'MTHFR এনজাইম দ্বারা ৫,১০-মিথিলিন-THF থেকে ৫-মিথাইল-THF তৈরি মানবদেহে শারীরবৃত্তীয়ভাবে সম্পূর্ণ একমুখী ও অপরিবর্তনীয়।'
          ),
          l(
            'The only enzyme in mammals that can convert 5-methyl-THF back to tetrahydrofolate (THF) is methionine synthase (MTR).',
            'মানবদেহে একমাত্র মেথিওনিন সিন্থেস (MTR) এনজাইমই ৫-মিথাইল-THF-কে পুনরায় ব্যবহারযোগ্য THF-এ রূপান্তর করতে পারে।'
          ),
          l(
            'Methionine synthase strictly requires methylcobalamin (vitamin B12) as an intermediate prosthetic group.',
            'মেথিওনিন সিন্থেস এনজাইমের কাজ পরিচালনার জন্য ভিটামিন বি১২ একান্ত অপরিহার্য।'
          ),
          l(
            'In vitamin B12 deficiency, MTR becomes inactive, trapping intracellular folates irreversibly as 5-methyl-THF. Cells are starved of THF, halting thymidylate synthase (dTMP) and de novo purine synthesis.',
            'বি১২-এর অভাবে MTR অকেজো হয়ে যায়, ফলে সমস্ত ফোলেট ৫-মিথাইল রূপে আটকা পড়ে যায় এবং ডিএনএ তৈরির কাঁচামাল শেষ হয়ে মেগালোব্লাস্টিক রক্তস্বল্পতা দেখা দেয়।'
          ),
        ],
        conclusion: l(
          'The "folate trap" explains why vitamin B12 deficiency manifests morphologically as identical megaloblastic anemia to folate deficiency, but cannot be treated safely with folic acid alone without risking neurologic damage.',
          'এই ফোলেট ট্র্যাপের কারণেই ভিটামিন বি১২-এর ঘাটতিতে ফলিক এসিডের ঘাটতির মতোই রক্তস্বল্পতা দেখা দেয়; তবে একা ফলিক এসিড দিলে স্নায়ুক্ষয় আড়ালে চলতে থাকে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'How does S-adenosylmethionine (SAM) coordinate the reciprocal balance between transmethylation and transsulfuration?',
          'SAM কীভাবে ট্রান্সমিথাইলেশন এবং ট্রান্সসালফারেশনের মধ্যে পারস্পরিক বিপরীতমুখী ভারসাম্য রক্ষা করে?'
        ),
        answer: l(
          'When SAM is abundant, it allosterically inhibits MTHFR (shutting down unnecessary 5-methyl-THF formation) while allosterically activating cystathionine beta-synthase (CBS) up to 5-fold, shunting surplus homocysteine into transsulfuration to yield cysteine and glutathione.',
          'কোষে SAM বেড়ে গেলে তা MTHFR এনজাইমকে বন্ধ করে দেয় যাতে অহেতুক ফোলেট অপচয় না হয়; এবং একই সাথে CBS এনজাইমকে ৫ গুণ পর্যন্ত সক্রিয় করে অতিরিক্ত হোমোকসিস্টিনকে গ্লুটাথিয়ন তৈরির পথে পাঠিয়ে দেয়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: oneCarbon3DData,
  interactiveDiagram: {
    id: 'one-carbon-methylation-transsulfuration-hub',
    title: l('Interactive One-Carbon, Methionine & Transsulfuration Network', 'ইন্টারেক্টিভ এক-কার্বন, মেথিওনিন ও ট্রান্সসালফারেশন নেটওয়ার্ক'),
    disclaimer: l(
      'One-carbon metabolic engine simulation: select nodes to trace serine hydroxymethyltransferase, MTHFR reduction, methionine synthase cobalamin cycle, SAM epigenetics, and CBS transsulfuration.',
      'এক-কার্বন বিপাক সিমুলেশন: নোড নির্বাচন করে সেরিন রূপান্তর, MTHFR বিজারণ, মেথিওনিন সিন্থেস কোবালামিন চক্র, SAM এপিজেনেটিক্স এবং CBS ট্রান্সসালফারেশন পথ পর্যবেক্ষণ করুন।'
    ),
    description: l(
      'Metabolic map detailing the interconnected Folate Cycle, Methionine Transmethylation Cycle, SAM-driven methyltransferases, and the CBS-CSE Transsulfuration cascade to glutathione.',
      'বিপাকীয় চিত্র যা পরস্পর সংযুক্ত ফোলেট চক্র, মেথিওনিন ট্রান্সমিথাইলেশন চক্র, SAM-চালিত মিথাইলট্রান্সফারেজ এবং গ্লুটাথিয়ন উৎপাদনকারী CBS-CSE ট্রান্সসালফারেশন ক্যাসকেড প্রদর্শন করে।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-shmt-serine-glycine',
        label: l('1. Serine Hydroxymethyltransferase (SHMT1/2)', '১. সেরিন হাইড্রোক্সিমিথাইলট্রান্সফারেজ (SHMT1/2)'),
        description: l(
          'Mitochondrial SHMT2 and cytosolic SHMT1 transfer C3 of L-serine onto THF, forming 5,10-methylene-THF and glycine.',
          'SHMT এনজাইম সেরিনের তিন নম্বর কার্বনকে THF-এ স্থানান্তর করে ৫,১০-মিথিলিন-THF এবং গ্লাইসিন তৈরি করে।'
        ),
        details: l(
          'Constitutes the primary quantitative entry point for one-carbon units in human metabolism.',
          'মানবদেহে এক-কার্বন এককের প্রাথমিক ও প্রধান পরিমাণগত প্রবেশদ্বার হিসেবে কাজ করে।'
        ),
        sectionId: 'structure',
        color: '#f97316',
      },
      {
        id: 'node-mthfr-irreversible-step',
        label: l('2. MTHFR Reduction to 5-Methyl-THF', '২. ৫-মিথাইল-THF-এ MTHFR অপরিবর্তনীয় বিজারণ'),
        description: l(
          'MTHFR catalyzes the irreversible reduction of 5,10-methylene-THF to 5-methyl-THF using NADPH.',
          'MTHFR এনজাইম NADPH সহযোগে ৫,১০-মিথিলিন-THF-কে অপরিবর্তনীয়ভাবে ৫-মিথাইল-THF-এ বিজারিত করে।'
        ),
        details: l(
          'Allosterically inhibited by SAM. The common C677T polymorphism reduces thermostability and causes hyperhomocysteinemia.',
          'SAM দ্বারা বাধাপ্রাপ্ত হয়। প্রচলিত C677T মিউটেশন এনজাইমকে দুর্বল করে রক্তে হোমোকসিস্টিন বৃদ্ধি করে।'
        ),
        sectionId: 'structure',
        color: '#eab308',
      },
      {
        id: 'node-methionine-synthase-b12',
        label: l('3. Methionine Synthase (MTR & Vitamin B12)', '৩. মেথিওনিন সিন্থেস (MTR ও ভিটামিন বি১২)'),
        description: l(
          'MTR transfers the methyl group from 5-methyl-THF to homocysteine, generating methionine and regenerating THF.',
          'মেথিওনিন সিন্থেস ৫-মিথাইল-THF থেকে মিথাইল নিয়ে হোমোকসিস্টিনে যুক্ত করে মেথিওনিন ও মুক্ত THF তৈরি করে।'
        ),
        details: l(
          'Requires methylcobalamin (B12). Defect in B12 causes irreversible methyl trap and megaloblastic anemia.',
          'ভিটামিন বি১২ অপরিহার্য। বি১২-এর ঘাটতিতে মিথাইল ট্র্যাপ ঘটে মারাত্মক রক্তস্বল্পতা দেখা দেয়।'
        ),
        sectionId: 'structure',
        color: '#22c55e',
      },
      {
        id: 'node-mat-sam-synthesis',
        label: l('4. Methionine Adenosyltransferase & SAM', '৪. মেথিওনিন অ্যাডেনোসিলট্রান্সফারেজ ও SAM'),
        description: l(
          'MAT condenses methionine with ATP, displacing triphosphate to form S-adenosylmethionine (SAM).',
          'MAT এনজাইম মেথিওনিনের সাথে এটিপি যুক্ত করে সার্বজনীন মিথাইল দাতা SAM তৈরি করে।'
        ),
        details: l(
          'SAM is the universal biological methyl donor for DNA, histones, phospholipids, and neurotransmitters.',
          'SAM হলো ডিএনএ, হিস্টোন ও নিউরোট্রান্সমিটার তৈরির সার্বজনীন জৈব মিথাইল দাতা।'
        ),
        sectionId: 'mechanism',
        color: '#3b82f6',
      },
      {
        id: 'node-methyltransferases-sah',
        label: l('5. SAM Methyltransferases & SAH Hydrolase', '৫. SAM মিথাইলট্রান্সফারেজ ও SAH হাইড্রোলেজ'),
        description: l(
          'Methyltransferases transfer methyl groups from SAM onto targets, generating SAH, cleaved by AHCY into homocysteine.',
          'মিথাইলট্রান্সফারেজ SAM থেকে মিথাইল নিয়ে SAH তৈরি করে যা ভেঙে পরবর্তীতে হোমোকসিস্টিন উৎপন্ন হয়।'
        ),
        details: l(
          'The SAM:SAH ratio defines cellular methylation potential; elevated SAH potently inhibits methyltransferases.',
          'SAM:SAH অনুপাত কোষের মিথাইলেশন ক্ষমতা নির্দেশ করে; অতিরিক্ত SAH মিথাইলেশন বিক্রিয়াকে অবদমিত করে।'
        ),
        sectionId: 'mechanism',
        color: '#8b5cf6',
      },
      {
        id: 'node-cbs-transsulfuration',
        label: l('6. Cystathionine Beta-Synthase (CBS & PLP)', '৬. সিস্টাথায়োনিন বিটা-সিন্থেস (CBS ও পিএলপি)'),
        description: l(
          'CBS condenses homocysteine with L-serine using PLP to form cystathionine; allosterically stimulated by SAM.',
          'CBS এনজাইম ভিটামিন বি৬ সহকারে হোমোকসিস্টিন ও সেরিন যুক্ত করে সিস্টাথায়োনিন তৈরি করে।'
        ),
        details: l(
          'Deficiency causes classical homocystinuria with ectopia lentis, marfanoid habitus, and thromboembolism.',
          'ঘাটতি হলে ক্লাসিক্যাল হোমোকসিস্টিনুরিয়া হয় যেখানে চোখের লেন্স স্থানচ্যুত হয় এবং রক্ত জমাট বাঁধে।'
        ),
        sectionId: 'integration',
        color: '#ec4899',
      },
      {
        id: 'node-cse-cysteine-glutathione',
        label: l('7. Cystathionine Gamma-Lyase (CSE) to Cysteine', '৭. সিস্টাথায়োনিন গামা-লাইয়েজ (CSE) থেকে সিস্টিন'),
        description: l(
          'CSE cleaves cystathionine into L-cysteine, alpha-ketobutyrate, and ammonia.',
          'CSE এনজাইম সিস্টাথায়োনিনকে ভেঙে সিস্টিন, আলফা-কিটোবিউটাইরেট এবং অ্যামোনিয়া তৈরি করে।'
        ),
        details: l(
          'Synthesized cysteine feeds directly into glutathione (master antioxidant) and taurine.',
          'উৎপন্ন সিস্টিন সরাসরি দেহের প্রধান অ্যান্টিঅক্সিডেন্ট গ্লুটাথিয়ন ও পিত্তের টরিন তৈরিতে জোগান দেয়।'
        ),
        sectionId: 'integration',
        color: '#06b6d4',
      },
      {
        id: 'node-bhmt-betaine-bypass',
        label: l('8. Betaine-Homocysteine Methyltransferase (BHMT)', '৮. বিটেইন-হোমোকসিস্টিন মিথাইলট্রান্সফারেজ (BHMT)'),
        description: l(
          'In liver and kidney, BHMT transfers a methyl group from choline-derived betaine to homocysteine to form methionine.',
          'যকৃতে BHMT এনজাইম কোলিন থেকে প্রাপ্ত বিটেইনের মিথাইল হোমোকসিস্টিনে দিয়ে মেথিওনিন তৈরি করে।'
        ),
        details: l(
          'Operates completely independently of vitamin B12 and folate, providing a crucial remethylation salvage bypass.',
          'ফোলেট ও ভিটামিন বি১২ ছাড়াই কাজ করে একটি অত্যন্ত গুরুত্বপূর্ণ বিকল্প উদ্ধার পথ হিসেবে ভূমিকা রাখে।'
        ),
        sectionId: 'integration',
        color: '#10b981',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'Comprehensive one-carbon circuit diagram tracing the folate cycle, methionine-SAM-SAH cycle, B12-dependent methionine synthase, and CBS-driven transsulfuration pathway.',
      'ফোলেট চক্র, মেথিওনিন-SAM চক্র, ভিটামিন বি১২-নির্ভর মেথিওনিন সিন্থেস এবং সিবিএস চালিত ট্রান্সসালফারেশন পথ প্রদর্শনকারী এক-কার্বন বিপাক বর্তনী মানচিত্র।'
    ),
    steps: [
      l(
        'Step 1: Serine hydroxymethyltransferase transfers a one-carbon unit from serine to THF; MTHFR reduces 5,10-methylene-THF to 5-methyl-THF.',
        'ধাপ ১: সেরিন থেকে টেট্রাহাইড্রোফোলেটে এক-কার্বন স্থানান্তরিত হয়; MTHFR তা কমিয়ে ৫-মিথাইল-THF তৈরি করে।'
      ),
      l(
        'Step 2: Methionine synthase uses vitamin B12 to transfer the methyl group from 5-methyl-THF to homocysteine, regenerating methionine and freeing THF.',
        'ধাপ ২: মেথিওনিন সিন্থেস ভিটামিন বি১২ ব্যবহার করে হোমোকসিস্টিন থেকে মেথিওনিন পুনর্গঠন করে এবং মুক্ত THF পুনরুদ্ধার করে।'
      ),
      l(
        'Step 3: SAM drives cellular methylations; excess homocysteine is irreversibly shunted by CBS into cystathionine and cysteine for glutathione synthesis.',
        'ধাপ ৩: SAM ডিএনএ ও প্রোটিন মিথাইলেশন চালায়; অতিরিক্ত হোমোকসিস্টিন সিবিএস দ্বারা সিস্টিন ও গ্লুটাথিয়নে রূপান্তরিত হয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'In patients with severe vitamin B12 (cobalamin) deficiency, cellular folate becomes trapped in a metabolically unusable form, precipitating a functional folate deficiency and megaloblastic anemia despite adequate or even elevated serum folate levels. What is the precise biochemical mechanism underlying this "methyl trap hypothesis"?',
      'তীব্র ভিটামিন বি১২-এর ঘাটতিতে আক্রান্ত রোগীদের রক্তে স্বাভাবিক বা বেশি ফোলেট থাকা সত্ত্বেও তা নিষ্ক্রিয় অবস্থায় আটকা পড়ে এবং মারাত্মক মেগালোব্লাস্টিক অ্যানিমিয়া তৈরি করে। এই "মিথাইল ট্র্যাপ হাইপোথিসিস"-এর মূল জৈবরাসায়নিক কারণ কী?'
    ),
    options: [
      l(
        'Because the MTHFR reaction reducing 5,10-methylene-THF to 5-methyl-THF is irreversible under physiological conditions, lack of B12-dependent methionine synthase prevents demethylation of 5-methyl-THF back to free THF, irreversibly trapping cellular folate.',
        'যেহেতু শারীরবৃত্তীয় অবস্থায় MTHFR বিক্রিয়াটি অপরিবর্তনীয়ভাবে ৫,১০-মিথিলিন-THF-কে ৫-মিথাইল-THF-এ রূপান্তরিত করে, তাই বি১২-নির্ভর মেথিওনিন সিন্থেসের অভাবে ৫-মিথাইল-THF আর মুক্ত THF-এ ফিরতে পারে না এবং সমস্ত কোষীয় ফোলেট চিরতরে আটকা পড়ে।'
      ),
      l(
        'Vitamin B12 deficiency directly inhibits dihydrofolate reductase (DHFR) in the cytosol.',
        'ভিটামিন বি১২-এর ঘাটতি সরাসরি সাইটোসোলে ডাইহাইড্রোফোলেট রিডাক্টেজ (DHFR) বন্ধ করে দেয়।'
      ),
      l(
        'Lack of cobalamin blocks cellular folate uptake by destroying folate receptor alpha on the plasma membrane.',
        'কোবালামিনের অভাব কোষঝিল্লির ফোলেট রিসেপ্টর ধ্বংস করে ফোলেট গ্রহণ বন্ধ করে দেয়।'
      ),
      l(
        'Elevated homocysteine directly alkylates and destroys the tetrahydrofolate pteridine ring.',
        'রক্তের অতিরিক্ত হোমোকসিস্টিন টেট্রাহাইড্রোফোলেটকে ভেঙে ধ্বংস করে দেয়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'The methyl trap occurs because the reduction of 5,10-methylene-THF to 5-methyl-THF by MTHFR is physiologically irreversible. The ONLY metabolic pathway that can remove the methyl group from 5-methyl-THF to regenerate tetrahydrofolate (THF) is the vitamin B12-dependent methionine synthase (MTR) reaction. In B12 deficiency, methionine synthase activity stalls completely. Cellular folates steadily accumulate as 5-methyl-THF and cannot return to the pool of 5,10-methylene-THF or 10-formyl-THF required for thymidylate and purine synthesis, arresting DNA replication and triggering megaloblastosis.',
      'শারীরবৃত্তীয় অবস্থায় MTHFR বিক্রিয়াটি অপরিবর্তনীয় হওয়ায় ৫-মিথাইল-THF কেবল একটিমাত্র উপায়ে পুনরায় মুক্ত THF-এ ফিরতে পারে—তা হলো ভিটামিন বি১২-নির্ভর মেথিওনিন সিন্থেস এনজাইমের মাধ্যমে। বি১২ না থাকলে এই বিক্রিয়া বন্ধ হয়ে যায়, ফলে সমস্ত ফোলেট ৫-মিথাইল-THF আকারে আটকা পড়ে। এর ফলে ডিএনএ তৈরির অপরিহার্য উপাদান থাইমিডিন ও পিউরিন তৈরি হতে পারে না এবং মারাত্মক মেগালোব্লাস্টিক রক্তস্বল্পতা দেখা দেয়।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Universal Currency of Cellular Carbon: One-Carbon Units', 'কোষীয় কার্বনের সর্বজনীন মুদ্রা: এক-কার্বন একক'),
          paragraphs: [
            l(
              'One-carbon metabolism is a sophisticated network of biochemical pathways that captures, activates, and transfers single carbon units—such as methyl groups (-CH3), methylene bridges (-CH2-), and formyl groups (-CHO)—to drive critical cellular operations. Derived primarily from the amino acid L-serine, these activated carbon fragments are loaded onto the vitamin cofactor tetrahydrofolate (the active form of dietary folic acid) and moved across intracellular compartments.',
              'এক-কার্বন বিপাক হলো জৈবরাসাযনিক পথের একটি অত্যন্ত নিখুঁত নেটওয়ার্ক যা একক কার্বন একক—যেমন মিথাইল গ্রুপ (-CH3), মিথিলিন ব্রিজ (-CH2-) এবং ফরমাইল গ্রুপ (-CHO)—সংগ্রহ, সক্রিয় এবং স্থানান্তর করে কোষের অপরিহার্য কাজ সম্পন্ন করে। মূলত এল-সেরিন অ্যামিনো অ্যাসিড থেকে প্রাপ্ত এই সক্রিয় কার্বন খণ্ডগুলো টেট্রাহাইড্রোফোলেট (ফলিক এসিডের সক্রিয় রূপ) নামক ভিটামিন কোফ্যাক্টরে যুক্ত হয়ে বিভিন্ন কোষীয় প্রকোষ্ঠে প্রবাহিত হয়।'
            ),
            l(
              'Without a continuous supply of one-carbon units, human cells cannot synthesize the purine and thymidylate building blocks required for DNA replication and cell division, nor can they produce S-adenosylmethionine (SAM), the indispensable methyl donor required for epigenetic gene regulation, protein modification, and neurotransmitter synthesis.',
              'এক-কার্বন এককের নিরবচ্ছিন্ন জোগান ছাড়া মানবকোষ ডিএনএ প্রতিলিপন ও কোষ বিভাজনের জন্য প্রয়োজনীয় পিউরিন ও থাইমিডিন তৈরি করতে পারে না; তেমনি জিন নিয়ন্ত্রণ, প্রোটিনের রূপান্তর এবং নিউরোট্রান্সমিটার তৈরির জন্য অপরিহার্য মিথাইল দাতা এস-অ্যাডেনোসিলমেথিওনিন (SAM) তৈরি করতেও সম্পূর্ণ ব্যর্থ হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Two Interconnected Wheels: The Folate & Methionine Cycles', 'দুটি পরস্পর সংযুক্ত চাকা: ফোলেট ও মেথিওনিন চক্র'),
          paragraphs: [
            l(
              'One-carbon metabolism functions like two interlocking gears. The first gear is the Folate Cycle, which carries carbon units through various oxidation states to feed purine synthesis (for ATP and RNA) and thymidylate synthesis (for DNA). At the critical branch point, enzyme MTHFR reduces 5,10-methylene-THF into 5-methyl-THF, dedicating that carbon unit to the second gear.',
              'এক-কার্বন বিপাক দুটি পরস্পর সংযুক্ত চাকার মতো কাজ করে। প্রথম চাকাটি হলো ফোলেট চক্র, যা কার্বন একক বহন করে পিউরিন সংশ্লেষণ (এটিপি ও আরএনএ-এর জন্য) এবং থাইমিডিন সংশ্লেষণে (ডিএনএ-এর জন্য) জোগান দেয়। এর একটি গুরুত্বপূর্ণ বাঁকে MTHFR এনজাইম ফোলেটকে ৫-মিথাইল-THF-এ রূপান্তরিত করে দ্বিতীয় চাকার দিকে পরিচালিত করে।'
            ),
            l(
              'The second gear is the Methionine Cycle. Here, enzyme methionine synthase couples with vitamin B12 to strip the methyl group from 5-methyl-THF and transfer it onto homocysteine, forming the essential amino acid methionine while freeing tetrahydrofolate to pick up another carbon. Methionine is then energized with ATP to create S-adenosylmethionine (SAM), the cell’s primary methylating agent.',
              'দ্বিতীয় চাকাটি হলো মেথিওনিন চক্র। এখানে মেথিওনিন সিন্থেস এনজাইম ভিটামিন বি১২-এর সাহায্যে ৫-মিথাইল-THF থেকে মিথাইল গ্রুপটি ছিনিয়ে নিয়ে হোমোকসিস্টিনে যুক্ত করে মেথিওনিন তৈরি করে এবং পুনরায় ফোলেটকে মুক্ত করে। এরপর মেথিওনিনের সাথে এটিপি যুক্ত হয়ে SAM তৈরি হয়, যা কোষের প্রধান মিথাইলেশন এজেন্ট হিসেবে কাজ করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Transsulfuration Exit Route: From Homocysteine to Glutathione', 'ট্রান্সসালফারেশন নির্গমন পথ: হোমোকসিস্টিন থেকে গ্লুটাথিয়ন'),
          paragraphs: [
            l(
              'Once SAM gives away its methyl group, it becomes S-adenosylhomocysteine (SAH), which is broken down into homocysteine. Homocysteine is a potentially toxic metabolic intermediate that cannot be allowed to accumulate in the bloodstream. While cells can recycle homocysteine back into methionine, excess homocysteine is directed into an irreversible exit pathway called Transsulfuration.',
              'SAM তার মিথাইল গ্রুপ দান করার পর SAH-এ পরিণত হয়, যা ভেঙে তৈরি হয় হোমোকসিস্টিন। হোমোকসিস্টিন হলো একটি সম্ভাব্য বিষাক্ত বিপাকীয় উপাদান যা রক্তে জমে থাকতে দেওয়া যায় না। কোষ চাইলে এটিকে পুনরায় মেথিওনিনে রূপান্তর করতে পারে, তবে অতিরিক্ত হোমোকসিস্টিনকে একটি একমুখী নির্গমন পথ ট্রান্সসালফারেশনের দিকে পাঠিয়ে দেওয়া হয়।'
            ),
            l(
              'In the transsulfuration pathway, enzyme cystathionine beta-synthase (CBS) combines homocysteine with serine using vitamin B6 to produce cystathionine. A second vitamin B6-dependent enzyme then cleaves cystathionine into cysteine. This newly synthesized cysteine is rapidly incorporated into glutathione—the master antioxidant protecting cells from reactive oxygen species—or converted into taurine for bile acid synthesis.',
              'ট্রান্সসালফারেশন পথে ভিটামিন বি৬ সহযোগে CBS এনজাইম হোমোকসিস্টিনের সাথে সেরিন যুক্ত করে সিস্টাথায়োনিন তৈরি করে। এরপর আরেকটি এনজাইম এটিকে ভেঙে সিস্টিনে পরিণত করে। এই সিস্টিন সরাসরি দেহের প্রধান অ্যান্টিঅক্সিডেন্ট গ্লুটাথিয়ন তৈরিতে অথবা পিত্তলবণ তৈরিকারী টরিন তৈরিতে ব্যবহৃত হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Folate, Vitamin B12 & the Prevention of Neural Tube Defects', 'ফোলেট, ভিটামিন বি১২ এবং স্নায়ুনালীর জন্মগত ত্রুটি প্রতিরোধ'),
          paragraphs: [
            l(
              'During early embryonic development, rapid cell proliferation and closure of the neural tube (the embryonic precursor to the brain and spinal cord) occur within the first 28 days following conception—often before a woman even realizes she is pregnant. Adequate maternal levels of active folate and vitamin B12 are critical during this narrow window to support DNA methylation and cell division.',
              'ভ্রূণের প্রাথমিক বিকাশের সময়, গর্ভধারণের প্রথম ২৮ দিনের মধ্যেই অত্যন্ত দ্রুত কোষ বিভাজন এবং নিউরাল টিউব (মস্তিষ্ক ও সুষুম্নাকাণ্ডের উৎস) বন্ধ হওয়ার প্রক্রিয়া সম্পন্ন হয়—অনেক সময় নারী গর্ভবতী হওয়ার বিষয়টি জানার আগেই। এই সংক্ষিপ্ত সময়ে পর্যাপ্ত ফলিক এসিড ও ভিটামিন বি১২ না থাকলে ভ্রূণের ডিএনএ তৈরি ও মিথাইলেশন থমকে যায়।'
            ),
            l(
              'Maternal folate deficiency or genetic mutations in the MTHFR gene disrupt this process, resulting in catastrophic neural tube defects such as spina bifida (failure of spinal cord closure) or anencephaly (absence of major brain regions). Mandatory public health folic acid food fortification and periconceptional supplementation have dramatically reduced the global incidence of these devastating congenital conditions.',
              'মায়ের দেহে ফোলেটের ঘাটতি বা MTHFR জিনের ত্রুটির কারণে স্পাইনা বিফিডা (মেরুদণ্ড উন্মুক্ত থাকা) বা অ্যানেনসেফালি (মস্তিষ্ক না থাকা)-র মতো মারাত্মক জন্মগত ত্রুটি দেখা দেয়। খাদ্যে ফলিক এসিড সমৃদ্ধকরণ এবং গর্ভধারণের শুরুতে ফলিক এসিড গ্রহণের বৈশ্বিক নীতি এই বিধ্বংসী রোগের হার নাটকীয়ভাবে কমিয়ে এনেছে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Hyperhomocysteinemia & Cardiovascular Risk', 'হাইপারহোমোকসিস্টিনেমিয়া ও হৃদরোগের ঝুঁকি'),
          paragraphs: [
            l(
              'Elevated concentrations of homocysteine in the blood (hyperhomocysteinemia, >15 micromol/L) represent an established biomarker of impaired one-carbon metabolism and a strong independent risk factor for premature cardiovascular disease, ischemic stroke, and deep vein thrombosis. Homocysteine exerts direct toxic effects on vascular endothelial cells, promoting oxidative stress, damaging elastin fibers, and inducing platelet hyperaggregability.',
              'রক্তে হোমোকসিস্টিনের উচ্চ মাত্রা (১৫ মাইক্রোমোল/লিটারের বেশি) এক-কার্বন বিপাকের দুর্বলতার নির্দেশক এবং অকাল হৃদরোগ, স্ট্রোক ও রক্তনালীতে রক্ত জমাট বাঁধার একটি শক্তিশালী স্বাধীন ঝুঁকিপূর্ণ উপাদান। অতিরিক্ত হোমোকসিস্টিন সরাসরি রক্তনালীর এন্ডোথেলিয়াম ক্ষতিগ্রস্ত করে, ইলাস্টিন নষ্ট করে এবং রক্ত জমাট বাঁধাকে অস্বাভাবিক ত্বরান্বিত করে।'
            ),
            l(
              'Screening for hyperhomocysteinemia is clinically valuable in young patients presenting with unprovoked venous thromboembolism, recurrent pregnancy loss, or unexplained early-onset atherosclerosis. Nutritional therapy utilizing a synergistic triad of vitamins B6, B9 (folate), and B12 effectively normalizes homocysteine levels by restoring both remethylation and transsulfuration fluxes.',
              'অল্প বয়সে রক্তনালীতে জমাট বাঁধা, ঘন ঘন গর্ভপাত বা অকালে হৃদরোগে আক্রান্ত রোগীদের ক্ষেত্রে হোমোকসিস্টিন পরীক্ষা অত্যন্ত গুরুত্বপূর্ণ। ভিটামিন বি৬, ফলিক এসিড এবং ভিটামিন বি১২-এর যৌথ প্রয়োগের মাধ্যমে হোমোকসিস্টিনের মাত্রা দ্রুত স্বাভাবিক করা সম্ভব।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Principles of One-Carbon Chemistry', 'এক-কার্বন রসায়নের মূল শিক্ষণীয় বিষয়'),
          paragraphs: [
            l(
              'One-carbon metabolism bridges nutrition, epigenetics, and antioxidant defense. By balancing the Folate Cycle for nucleotide biogenesis, the Methionine Cycle for cellular methylation potential, and the Transsulfuration Pathway for glutathione production, cells orchestrate genetic stability and systemic redox protection.',
              'এক-কার্বন বিপাক পুষ্টি, এপিজেনেটিক্স এবং অ্যান্টিঅক্সিডেন্ট সুরক্ষার মধ্যে সেতুবন্ধন রচনা করে। নিউক্লিওটাইড তৈরির জন্য ফোলেট চক্র, জিন মিথাইলেশনের জন্য মেথিওনিন চক্র এবং গ্লুটাথিয়ন উৎপাদনের জন্য ট্রান্সসালফারেশন পথের সুষম ভারসাম্য রক্ষা করে কোষ তার বংশগত স্থায়িত্ব এবং রেডক্স প্রতিরক্ষা নিশ্চিত করে।'
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
          heading: l('Compartmentalized Folate Metabolism: The Mitochondrial Formate Shuttle', 'প্রকোষ্ঠায়িত ফোলেট বিপাক: মাইটোকন্ড্রিয়াল ফরমেট শাটল'),
          paragraphs: [
            l(
              'Quantitative isotopic tracing reveals that mammalian one-carbon metabolism is strictly compartmentalized between the mitochondria and cytosol. Mitochondria serve as the primary generator of one-carbon units: serine hydroxymethyltransferase 2 (SHMT2) transfers C3 of serine to THF, forming 5,10-methylene-THF. The bifunctional enzyme MTHFD2 oxidizes 5,10-methylene-THF to 5,10-methenyl-THF and then hydrolyzes it to 10-formyl-THF with concomitant reduction of NAD+ and generation of mitochondrial NADH.',
              'আধুনিক আইসোটোপিক ট্রেসিং প্রমাণ করেছে যে স্তন্যপায়ী প্রাণীর এক-কার্বন বিপাক মাইটোকন্ড্রিয়া ও সাইটোসোলের মধ্যে কঠোরভাবে বিভক্ত। মাইটোকন্ড্রিয়া হলো এক-কার্বন এককের প্রধান উৎপাদক: SHMT2 এনজাইম সেরিনের তিন নম্বর কার্বনকে THF-এ স্থানান্তর করে ৫,১০-মিথিলিন-THF তৈরি করে। এরপর MTHFD2 এনজাইম এটিকে জারিত করে ১০-ফরমাইল-THF এবং মাইটোকন্ড্রিয়াল NADH উৎপন্ন করে।'
            ),
            l(
              'Mitochondrial MTHFD1L subsequently cleaves 10-formyl-THF into tetrahydrofolate and free formate, coupling the reaction to substrate-level phosphorylation of ADP to ATP. Free formate diffuses across the inner mitochondrial membrane into the cytosol, where the trifunctional enzyme MTHFD1 condenses formate with cytosolic THF using ATP to regenerate 10-formyl-THF, which is reduced by MTHFD1 to 5,10-methylene-THF, supplying both de novo purine synthesis and the MTHFR pathway.',
              'এরপর মাইটোকন্ড্রিয়ার MTHFD1L এনজাইম এটিপি তৈরির মাধ্যমে ফরমেট মুক্ত করে। এই মুক্ত ফরমেট সাইটোসোলে চলে আসে, যেখানে MTHFD1 এনজাইম এটিপি ব্যবহার করে পুনরায় ১০-ফরমাইল-THF এবং ৫,১০-মিথিলিন-THF তৈরি করে যা পিউরিন এবং ডিএনএ তৈরিতে সরবরাহ করা হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The MTHFR Regulatory Switch & S-Adenosylmethionine Allostery', 'MTHFR নিয়ন্ত্রক সুইচ ও এস-অ্যাডেনোসিলমেথিওনিন অ্যালোস্টেরি'),
          paragraphs: [
            l(
              'Methylenetetrahydrofolate reductase (MTHFR) is a homodimeric flavoprotein containing an N-terminal catalytic domain that binds FAD and NADPH, and a C-terminal regulatory domain that binds S-adenosylmethionine (SAM). MTHFR catalyzes the irreversible reduction of 5,10-methylene-THF to 5-methyl-THF: 5,10-CH2-THF + NADPH + H+ -> 5-CH3-THF + NADP+. Because this step commits one-carbon units irrevocably away from nucleotide synthesis and toward methionine, its activity is strictly gated.',
              'MTHFR হলো একটি ফ্ল্যাভোপ্রোটিন ডাইমার যার ক্যাটালাইটিক ডোমেইনে FAD ও NADPH যুক্ত হয় এবং রেগুলেটরি ডোমেইনে SAM যুক্ত হয়। এটি ৫,১০-মিথিলিন-THF-কে অপরিবর্তনীয়ভাবে ৫-মিথাইল-THF-এ বিজারিত করে: 5,10-CH2-THF + NADPH + H+ -> 5-CH3-THF + NADP+। যেহেতু এই ধাপটি সম্পন্ন হলে কার্বনটি ডিএনএ তৈরির পথ থেকে স্থায়ীভাবে মেথিওনিন তৈরির পথে চলে যায়, তাই এর নিয়ন্ত্রণ অত্যন্ত কঠোর।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Methionine Synthase Enzymology & Cobalamin Catalytic Cycle', 'মেথিওনিন সিন্থেস এনজাইমবিজ্ঞান ও কোবালামিন অনুঘটন চক্র'),
          paragraphs: [
            l(
              'Methionine synthase (MTR) utilizes methylcobalamin as an essential prosthetic intermediate in a coordinated ping-pong mechanism. In the first half-reaction, the supernucleophilic cobalt(I) of cob(I)alamin attacks the methyl group of 5-methyl-THF, generating methylcob(III)alamin and releasing tetrahydrofolate. In the second half-reaction, homocysteine attacks the methyl group of methylcob(III)alamin, generating L-methionine and regenerating cob(I)alamin.',
              'মেথিওনিন সিন্থেস (MTR) একটি পিং-পং মেকানিজমে মিথাইলকোবালামিন ব্যবহার করে। প্রথম ধাপে অতি-সক্রিয় কোবাল্ট(১) ৫-মিথাইল-THF থেকে মিথাইল গ্রহণ করে মিথাইলকোব(৩)আলামিন গঠন করে এবং THF মুক্ত করে। দ্বিতীয় ধাপে হোমোকসিস্টিন মিথাইল গ্রহণ করে মেথিওনিনে রূপান্তরিত হয় এবং পুনরায় কোবাল্ট(১) মুক্ত হয়।'
            ),
            l(
              'Approximately once every 2,000 catalytic turnovers, the reactive cob(I)alamin intermediate is accidentally oxidized by molecular oxygen into inactive cob(II)alamin, terminating catalytic activity. To restore function, the accessory flavoprotein methionine synthase reductase (MTRR) performs a reductive methylation using NADPH and SAM to reactivate cob(II)alamin back to methylcob(III)alamin, preventing fatal inactivation of the cellular methionine cycle.',
              'প্রতি ২০০০টি বিক্রিয়ায় একবার এই অতি সংবেদনশীল কোবাল্ট(১) বাতাসের অক্সিজেন দ্বারা জারিত হয়ে অকেজো কোবাল্ট(২)-এ পরিণত হয়। এই এনজাইমটিকে পুনরুজ্জীবিত করার জন্য MTRR নামক সহায়ক প্রোটিন NADPH ও SAM ব্যবহার করে রিডাক্টিভ মিথাইলেশনের মাধ্যমে এটিকে পুনরায় সক্রিয় করে তোলে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Enzymology of the Transsulfuration Pathway: CBS & CSE Mechanics', 'ট্রান্সসালফারেশন পথের এনজাইমবিজ্ঞান: CBS ও CSE মেকানিজম'),
          paragraphs: [
            l(
              'Cystathionine beta-synthase (CBS) is a tetrameric, heme-containing enzyme unique in combining both a catalytic pyridoxal 5-phosphate (PLP) cofactor and a b-type heme. PLP forms an internal aldimine with Lys119. Binding of L-serine forms an external aldimine, which undergoes dehydration to generate an aminoacrylate intermediate. Homocysteine performs nucleophilic attack on this beta-carbon, forming an external aldimine of cystathionine which is hydrolyzed to release cystathionine and regenerate the PLP internal aldimine.',
              'CBS হলো চারটি সাবইউনিটবিশিষ্ট একটি অনন্য এনজাইম যাতে পিএলপি এবং হিম উভয়ই কোফ্যাক্টর হিসেবে থাকে। পিএলপি সেরিনের সাথে যুক্ত হয়ে একটি বিশেষ মধ্যবর্তী যৌগ গঠন করে। এরপর হোমোকসিস্টিন এর সাথে যুক্ত হয়ে সিস্টাথায়োনিন তৈরি করে এবং পুনরায় এনজাইমের স্বাভাবিক রূপ ফিরিয়ে দেয়।'
            ),
            l(
              'Cystathionine is subsequently cleaved by cystathionine gamma-lyase (CSE/CTH), another PLP-dependent enzyme. CSE catalyzes alpha,gamma-elimination of cystathionine, releasing L-cysteine, alpha-ketobutyrate, and ammonia. Alpha-ketobutyrate is oxidatively decarboxylated by the mitochondrial branched-chain alpha-keto acid dehydrogenase complex into propionyl-CoA, which enters the citric acid cycle via succinyl-CoA, linking sulfur catabolism directly to oxidative bioenergetics.',
              'এরপর সিস্টাথায়োনিন গামা-লাইয়েজ (CSE) নামক আরেকটি পিএলপি-নির্ভর এনজাইম সিস্টাথায়োনিনকে ভেঙে সিস্টিন, আলফা-কিটোবিউটাইরেট এবং অ্যামোনিয়া তৈরি করে। আলফা-কিটোবিউটাইরেট প্রোপিওনাইল-কোএ হয়ে সাকসিনাইল-কোএ-তে রূপান্তরিত হয়ে সাইট্রিক অ্যাসিড চক্রে শক্তি উৎপাদনে সরাসরি অংশ নেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('The MTHFR C677T Polymorphism & Clinical Hyperhomocysteinemia', 'MTHFR C677T পলিমরফিজম ও ক্লিনিক্যাল হাইপারহোমোকসিস্টিনেমিয়া'),
          paragraphs: [
            l(
              'The most common genetic cause of mild hyperhomocysteinemia is the MTHFR C677T polymorphism (rs1801133), a cytosine-to-thymine transition at nucleotide 677 that substitutes alanine with valine at codon 222 (Ala222Val) in the catalytic domain. This amino acid substitution increases the dissociation rate of the FAD cofactor, rendering the enzyme thermolabile with a 50% to 70% reduction in residual catalytic activity at 37 degrees Celsius in homozygous (TT) individuals.',
              'হালকা হাইপারহোমোকসিস্টিনেমিয়ার সর্বাধিক প্রচলিত কারণ হলো MTHFR C677T জিনগত মিউটেশন। এর ফলে এনজাইমের ক্যাটালাইটিক অংশে অ্যালানিনের বদলে ভ্যালিন বসে যায়, যা FAD কোফ্যাক্টরকে আলগা করে দেয়। এর ফলে স্বাভাবিক শরীরের তাপমাত্রায় এনজাইমটির কার্যকারিতা ৫০% থেকে ৭০% পর্যন্ত হ্রাস পায়।'
            ),
            l(
              'Individuals homozygous for the 677TT genotype exhibit elevated plasma homocysteine particularly when dietary folate intake is suboptimal. Nutritional management involves optimizing folate status using the bioactive reduced form (L-methylfolate / 5-MTHF) rather than synthetic folic acid, alongside riboflavin (vitamin B2, the precursor of FAD) which stabilizes the thermolabile enzyme and normalizes homocysteine concentrations.',
              'এই মিউটেশনযুক্ত রোগীদের রক্তে ফোলেটের অভাব হলে দ্রুত হোমোকসিস্টিন বিপজ্জনক মাত্রায় বেড়ে যায়। এদের ক্ষেত্রে সাধারণ কৃত্রিম ফলিক এসিডের বদলে সরাসরি সক্রিয় ৫-মিথাইলফোলেট এবং FAD তৈরিকারী রিবোফ্লাভিন (ভিটামিন বি২) প্রয়োগ করলে এনজাইমটি স্থিতিশীল হয় এবং রক্তের হোমোকসিস্টিন স্বাভাবিক হয়ে আসে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Analytical Summary of Methyl Flux & Sulfur Catabolism', 'মিথাইল প্রবাহ ও সালফার রূপান্তরের বিশ্লেষণাত্মক সারসংক্ষেপ'),
          paragraphs: [
            l(
              'One-carbon metabolism demonstrates how compartmentalized mitochondrial and cytosolic enzymes utilize folate, cobalamin, and pyridoxal phosphate to coordinate nucleotide biogenesis with transmethylation. The reciprocal cross-regulation of MTHFR and CBS by S-adenosylmethionine guarantees that cellular methylation potential is maintained while directing surplus sulfur into antioxidant glutathione synthesis.',
              'এক-কার্বন বিপাক প্রমাণ করে কীভাবে মাইটোকন্ড্রিয়া ও সাইটোসোলের এনজাইমগুলো ফোলেট, ভিটামিন বি১২ ও বি৬ ব্যবহার করে নিউক্লিওটাইড তৈরি ও মিথাইলেশন নিয়ন্ত্রণ করে। SAM দ্বারা MTHFR ও CBS-এর পারস্পরিক বিপরীতমুখী নিয়ন্ত্রণ কোষের মিথাইলেশন ক্ষমতা অক্ষুণ্ণ রেখে অতিরিক্ত সালফারকে গ্লুটাথিয়ন তৈরির পথে পরিচালনা করে।'
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
          heading: l('Mitochondrial One-Carbon Addiction in Oncogenesis & Targetable Vulnerabilities', 'ক্যান্সার সৃষ্টিতে মাইটোকন্ড্রিয়াল এক-কার্বন নির্ভরতা ও চিকিৎসার সুযোগ'),
          paragraphs: [
            l(
              'High-resolution 13C- and 2H-serine isotope tracer metabolomics demonstrated that transformed neoplastic cells exhibit massive transcriptional upregulation of the mitochondrial one-carbon pathway, specifically SHMT2, MTHFD2, and MTHFD1L, driven by the c-Myc and ATF4 oncogenic transcription factors. This hyperactivity is not merely driven by demand for nucleotide precursors, but serves as the primary engine for mitochondrial NADPH production via MTHFD2 and MTHFD1L to combat respiratory chain oxidative stress.',
              'আধুনিক আইসোটোপিক ট্রেসিং প্রমাণ করেছে যে ক্যান্সার কোষগুলোতে মাইটোকন্ড্রিয়ার এক-কার্বন পথ—বিশেষ করে SHMT2 ও MTHFD2—অস্বাভাবিকভাবে অতিরিক্ত সক্রিয় হয়ে ওঠে। এটি কেবল দ্রুত ডিএনএ তৈরির জন্যই নয়, বরং মাইটোকন্ড্রিয়ায় প্রচুর NADPH তৈরি করে ক্যান্সার কোষকে মুক্ত র্যাডিক্যালের হাত থেকে বাঁচাতে এই পথটি ক্যান্সার কোষের প্রধান সুরক্ষাকবচ হিসেবে কাজ করে।'
            ),
            l(
              'Dual inhibitors targeting mitochondrial SHMT2 and cytosolic SHMT1 (such as the antifolate DS18561882) or selective small-molecule inhibitors of MTHFD2 deplete both mitochondrial NADPH and cytosolic purine pools, selectively killing rapidly proliferating cancer cells while sparing normal non-transformed tissues that rely predominantly on cytosolic one-carbon flux.',
              'SHMT2 এবং MTHFD2-কে লক্ষ্য করে তৈরি আধুনিক ওষুধগুলো ক্যান্সার কোষে NADPH এবং পিউরিনের জোগান সম্পূর্ণ বন্ধ করে দেয়, যার ফলে সাধারণ সুস্থ কোষের কোনো ক্ষতি না করেই ক্যান্সার কোষগুলো দ্রুত ধ্বংস হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The SAM/SAH Methylation Index & Chromatin Epigenetics in Aging', 'SAM/SAH মিথাইলেশন সূচক ও বার্ধক্যে ক্রোমাটিন এপিজেনেটিক্স'),
          paragraphs: [
            l(
              'The thermodynamic driving force for transmethylation reactions is governed not solely by absolute SAM concentration, but by the SAM:SAH ratio, termed the cellular Methylation Potential. S-adenosylhomocysteine (SAH) is a potent, nanomolar product inhibitor of virtually all methyltransferases, including DNMT1, DNMT3A/B, and histone methyltransferases (e.g., EZH2, MLL). Consequently, even moderate increases in intracellular SAH precipitously lower the SAM:SAH ratio, leading to widespread loss of repressive DNA and histone methylation.',
              'মিথাইলেশন বিক্রিয়ার মূল নিয়ন্ত্রক কেবল SAM-এর পরিমাণ নয়, বরং SAM ও SAH-এর অনুপাত, যাকে মিথাইলেশন পটেনশিয়াল বলা হয়। SAH হলো সমস্ত মিথাইলট্রান্সফারেজ এনজাইমের অত্যন্ত শক্তিশালী প্রাকৃতিক বাধা। ফলে কোষে সামান্য SAH জমে গেলেও ডিএনএ ও হিস্টোনের স্বাভাবিক মিথাইলেশন নষ্ট হয়ে যায়।'
            ),
            l(
              'In mammalian aging and neurodegeneration, progressive elevation of SAH and decline in SAM:SAH ratio trigger global DNA hypomethylation coupled with focal hypermethylation of tumor suppressor promoters—a phenomenon captured by Horvath Epigenetic Aging Clocks. Furthermore, allosteric activators of CBS that bind its C-terminal Bateman domain (such as small-molecule CBS-48) are under active development to enhance transsulfuration flux, lower SAH, and restore juvenile epigenetic methylation landscapes in age-related cardiovascular and neurological disease.',
              'বার্ধক্যে SAH বেড়ে যাওয়ায় এপিজেনেটিক ঘড়ির গতি ত্বরান্বিত হয় এবং জিনের স্বাভাবিক নিয়ন্ত্রণ ভেঙে পড়ে। বর্তমানে CBS এনজাইমকে কৃত্রিমভাবে উদ্দীপিত করার নতুন ওষুধ তৈরি হচ্ছে, যা কোষ থেকে ক্ষতিকর SAH দূর করে এপিজেনেটিক তারুণ্য ফিরিয়ে আনতে সক্ষম।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Frontiers in One-Carbon & Epigenetic Pharmacology', 'এক-কার্বন ও এপিজেনেটিক ফার্মাকোলজির ভবিষ্যৎ দিগন্ত'),
          paragraphs: [
            l(
              'Targeting one-carbon dynamics represents a cornerstone of modern molecular oncology and epigenetic medicine. From classic antifolates to next-generation selective mitochondrial enzyme inhibitors and allosteric CBS modulators, precise control of one-carbon units enables powerful interventions against oncogenesis, cardiovascular inflammation, and age-related epigenetic dysfunction.',
              'এক-কার্বন গতিবিদ্যা নিয়ন্ত্রণ আধুনিক ক্যান্সার ও এপিজেনেটিক চিকিৎসার একটি প্রধান ভিত্তি। ক্লাসিক্যাল অ্যান্টিফোলেট থেকে শুরু করে পরবর্তী প্রজন্মের মাইটোকন্ড্রিয়াল এনজাইম ইনহিবিটর এবং CBS নিয়ন্ত্রক পর্যন্ত, এক-কার্বন এককের সুনির্দিষ্ট নিয়ন্ত্রণ ক্যান্সার, রক্তনালীর প্রদাহ এবং বার্ধক্যজনিত এপিজেনেটিক ত্রুটির বিরুদ্ধে শক্তিশালী চিকিৎসায় নতুন সম্ভাবনা উন্মোচন করছে।'
            ),
          ],
        },
      ],
    },
  },
}
