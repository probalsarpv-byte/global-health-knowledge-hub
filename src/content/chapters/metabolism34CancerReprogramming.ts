import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const cancerRefs = [
  {
    id: 'vander-heiden-warburg-science-2009',
    authors: 'Matthew G. Vander Heiden, Lewis C. Cantley, Craig B. Thompson',
    title: 'Understanding the Warburg Effect: The Metabolic Requirements of Cell Proliferation. Science, 324(5930):1029-1033',
    organization: 'AAAS',
    year: 2009,
    url: 'https://pubmed.ncbi.nlm.nih.gov/19460998/',
  },
  {
    id: 'deberardinis-cancer-metabolism-cell-2016',
    authors: 'Ralph J. DeBerardinis, Navdeep S. Chandel',
    title: 'Fundamentals of cancer metabolism. Science Advances, 2(5):e1600200',
    organization: 'AAAS',
    year: 2016,
    url: 'https://pubmed.ncbi.nlm.nih.gov/27386546/',
  },
  {
    id: 'dang-myc-glutaminolysis-cell-metab-2009',
    authors: 'Chi V. Dang, Anh Le, Ping Gao',
    title: 'MYC-Induced Cancer Cell Energy Metabolism and Therapeutic Opportunities. Clinical Cancer Research, 15(21):6479-6483',
    organization: 'AACR',
    year: 2009,
    url: 'https://pubmed.ncbi.nlm.nih.gov/19861459/',
  },
  {
    id: 'ward-idh-oncometabolite-cancer-cell-2010',
    authors: 'Patrick S. Ward, Jay Patel, Kevin P. Wise, et al.',
    title: 'The Common Feature of Leukemia-Associated IDH1 and IDH2 Mutations Is a Neomorphic Enzyme Activity Producing 2-Hydroxyglutarate. Cancer Cell, 17(3):225-234',
    organization: 'Elsevier / Cell Press',
    year: 2010,
    url: 'https://pubmed.ncbi.nlm.nih.gov/20171147/',
  },
  {
    id: 'pavlova-hallmarks-cancer-metab-cell-metab-2016',
    authors: 'Natalya N. Pavlova, Craig B. Thompson',
    title: 'The Emerging Hallmarks of Cancer Metabolism. Cell Metabolism, 23(1):27-47',
    organization: 'Elsevier / Cell Press',
    year: 2016,
    url: 'https://pubmed.ncbi.nlm.nih.gov/26771115/',
  },
]

const cancer3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Cancer Metabolic Reprogramming & Cachexia',
    '৩ডি বহু-অঙ্গীয় ক্যান্সার বিপাকীয় পুনর্বিন্যাস ও ক্যাক্সিয়ার শারীরস্থানিক রূপরেখা'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: explore how oncogenic driver mutations rewire primary tumor bioenergetics across hepatic, pulmonary, and pancreatic niches while triggering systemic metabolic wasting across muscle and adipose depots.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: পর্যবেক্ষণ করুন কীভাবে টিউমার কোষ যকৃত, ফুসফুস ও অগ্ন্যাশয়ে নিজস্ব বিপাকীয় পুনর্গঠন ঘটায় এবং সারাদেহে পেশি ও চর্বি ক্ষয় করে ক্যাক্সিয়া তৈরি করে।'
  ),
  description: l(
    'Cancer metabolic reprogramming is a recognized hallmark of malignancy: oncogenic signaling (MYC, KRAS, PI3K-Akt-mTOR, mutant IDH1/2) drives aerobic glycolysis (the Warburg effect), massive glutamine addiction, de novo lipogenesis, and oncometabolite accumulation. In parallel, tumor-secreted factors hijack distant host organs, inducing profound hepatic gluconeogenic burden and systemic skeletal muscle proteolysis.',
    'ক্যান্সার কোষে বিপাকীয় পরিবর্তন ম্যালিগন্যান্সির প্রধান বৈশিষ্ট্য: অনকোজিন (MYC, KRAS, PI3K-Akt-mTOR, মিউট্যান্ট IDH) অবাধ গ্লাইকোলাইসিস (ওয়ারবার্গ প্রভাব), তীব্র গ্লুটামিন নির্ভরতা, নতুন চর্বি সংশ্লেষণ এবং অনকোমেটাবোলাইট তৈরি করে। একই সাথে টিউমার থেকে ক্ষরিত রাসায়নিক সংকেত যকৃত ও পেশি ক্ষয় করে গুরুতর মেটাবলিক ক্যাক্সিয়া ঘটায়।'
  ),
  organs: [
    {
      id: 'organ-liver-hcc-cori-cycle-hub',
      name: l('Liver: Hepatocellular Carcinoma & Cori Burden', 'যকৃত: হেপাটোসেলুলার কার্সিনোমা ও কোরি চক্রের চাপ'),
      latinName: 'Hepar (Carcinoma Hepatocellulare)',
      system: l('Digestive, Hepato-Biliary & Oncology System', 'পরিপাক, যকৃৎ-পিত্ত ও ক্যান্সারবিদ্যা ব্যবস্থা'),
      cavity: l('Abdominal Cavity (Right Hypochondrium)', 'উদর গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 5, y: 195, z: 2 },
      color: '#dc2626',
      highlightColor: '#ef4444',
      shapeType: 'liver',
      description: l(
        'The liver is both a frequent site of primary hepatocellular carcinoma (HCC) and the metabolic sink for tumor-generated lactate. Malignant hepatocytes downregulate gluconeogenic glucose-6-phosphatase while upregulating hexokinase-2 (HK2), pyruvate kinase M2 (PKM2), and fatty acid synthase (FASN). The massive overflow of tumor lactate into the circulation forces surrounding healthy parenchyma to run the Cori cycle at maximum ATP expenditure, driving cancer cachexia.',
        'যকৃৎ প্রাথমিক ক্যান্সার (HCC) এর প্রধান স্থান এবং টিউমার থেকে নিঃসৃত ল্যাকটেট শোষণের মূল কেন্দ্র। ক্যান্সার আক্রান্ত হেপাটোসাইটগুলো HK2 ও PKM2 এনজাইম বহুগুণ বাড়িয়ে দ্রুত গ্লাইকোলাইসিস চালায়। বিপুল পরিমাণ ল্যাকটেট সুস্থ যকৃত কোষে কোরি চক্র চালাতে বাধ্য করে বিপুল শক্তি অপচয় ঘটায় এবং ক্যানসার ক্যাক্সিয়া তৈরি করে।'
      ),
      spatialRelations: l(
        'Occupies the right upper quadrant under the diaphragm, draining splanchnic venous blood loaded with dietary nutrients and gut-derived endotoxins.',
        'ডান পাঁজরের নিচে অবস্থিত যা পরিপাকতন্ত্র থেকে সংগৃহীত পুষ্টি ও পোর্টাল রক্ত সরাসরি গ্রহণ করে টিউমার বৃদ্ধিকে ত্বরান্বিত করে।'
      ),
      physiology: l(
        'Oncogenic beta-catenin activation stimulates glutamine synthetase overexpression, creating local metabolic cooperativity and hyperammonemia resistance.',
        'অনকোজেনিক বিটা-ক্যাটেনিন সক্রিয়করণ গ্লুটামিন সিন্থেটেজ বাড়িয়ে টিউমার কোষের বেঁচে থাকা এবং অ্যামোনিয়া সহনশীলতা বৃদ্ধি করে।'
      ),
      nutritionConnection: l(
        'Severe depletion of branched-chain amino acids (BCAAs) and essential fatty acids occurs as the liver attempts to compensate for systemic catabolic wasting.',
        'টিউমার ও সুস্থ কোষের বিপাকীয় যুদ্ধে শাখা-শিকল অ্যামিনো অ্যাসিড ও অপরিহার্য ফ্যাটি অ্যাসিডের মারাত্মক ঘাটতি তৈরি হয়।'
      ),
      clinicalSignificance: l(
        'HCC displays marked FDG-PET avidity in poorly differentiated tumors; sorafenib and modern multikinase inhibitors target vascular endothelial growth factor receptor and downstream metabolic signaling.',
        'হেপাটোসেলুলার কার্সিনোমা শনাক্তে FDG-PET স্ক্যান অত্যন্ত কার্যকর; মাল্টিকাইনেজ ইনহিবিটর ওষুধ টিউমারের রক্তনালী বৃদ্ধি ও বিপাকীয় সঙ্কেত বাধা দেয়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-lungs-kras-lkb1-adenocarcinoma',
      name: l('Lungs: KRAS-Mutant Non-Small Cell Adenocarcinoma', 'ফুসফুস: KRAS-মিউট্যান্ট নন-স্মল সেল অ্যাডেনোকার্সিনোমা'),
      latinName: 'Pulmones (Adenocarcinoma Pulmonale)',
      system: l('Respiratory & Thoracic Oncology System', 'শ্বাসতন্ত্র ও বক্ষীয় ক্যান্সার ব্যবস্থা'),
      cavity: l('Thoracic Cavity (Pleural Spaces)', 'বক্ষ গহ্বর (প্লুরাল স্থান)'),
      position3D: { x: -4, y: 220, z: 2 },
      color: '#0284c7',
      highlightColor: '#38bdf8',
      shapeType: 'lungs',
      description: l(
        'Non-small cell lung cancer (NSCLC) harboring co-occurring KRAS and LKB1 (STK11) mutations represents a hyper-aggressive metabolic subtype. Loss of LKB1 disables the energy-sensing AMPK kinase, unleashing unconstrained mTORC1 activity, explosive glycolysis, and profound addiction to the ASCT2 glutamine transporter. These tumors rely heavily on the mitochondrial enzyme glutaminase-1 (GLS1) to replenish the TCA cycle through anaplerosis.',
        'ফুসফুসের নন-স্মল সেল ক্যান্সারে KRAS ও LKB1 জিন মিউটেশন ঘটলে কোষের শক্তি-নিয়ামক AMPK অচল হয়ে যায়। ফলে mTORC1 অনিয়ন্ত্রিতভাবে সক্রিয় হয়ে প্রচণ্ড গ্লাইকোলাইসিস এবং ASCT2 গ্রাহকের মাধ্যমে বিপুল গ্লুটামিন শোষণ শুরু করে। এই টিউমারগুলো ক্রেবস চক্র চালাতে GLS1 এনজাইমের ওপর সম্পূর্ণ নির্ভরশীল হয়ে পড়ে।'
      ),
      spatialRelations: l(
        'Flank the mediastinum and heart, receiving the entirety of right ventricular cardiac output for immediate oxygenation and nutrient extraction.',
        'হৃদপিণ্ডের উভয় পাশে বক্ষগহ্বরে অবস্থিত যা কার্ডিয়াক আউটপুটের সম্পূর্ণ রক্তপ্রবাহ থেকে অক্সিজেন ও পুষ্টি উপাদান গ্রহণ করে।'
      ),
      physiology: l(
        'Glutamine is converted to glutamate by GLS1, which enters the mitochondria and undergoes oxidative deamination to alpha-ketoglutarate, maintaining membrane potential and NADPH-dependent redox defense.',
        'GLS1 এনজাইম গ্লুটামিনকে গ্লুটামেট এবং পরবর্তীতে আলফা-কিটোগ্লুটারেটে রূপান্তরিত করে মাইটোকন্ড্রিয়ার রেডক্স ভারসাম্য ও NADPH উৎপাদন বজায় রাখে।'
      ),
      nutritionConnection: l(
        'Glutamine deprivation selectively triggers apoptotic cell death in KRAS/LKB1 co-mutant tumors while sparing untransformed bronchial epithelium.',
        'খাবারে বা কোষে গ্লুটামিনের সংকট তৈরি হলে স্বাভাবিক ফুসফুস কোষ বেঁচে গেলেও মিউট্যান্ট ক্যান্সার কোষগুলো দ্রুত ধ্বংস হয়ে যায়।'
      ),
      clinicalSignificance: l(
        'Targeting metabolic vulnerability with the GLS1 small-molecule allosteric inhibitor CB-839 (telaglenastat) is an active therapeutic strategy in clinical oncology trials.',
        'GLS1 এনজাইমকে লক্ষ্য করে তৈরি CB-839 (টেলাগ্লেনাস্ট্যাট) ওষুধটি ফুসফুসের ক্যান্সারের লক্ষ্যভিত্তিক চিকিৎসায় কার্যকর ভূমিকা রাখছে।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-pancreas-pda-macropinocytosis',
      name: l('Pancreas: Pancreatic Ductal Adenocarcinoma (PDAC)', 'অগ্ন্যাশয়: ডাক্টাল অ্যাডেনোকার্সিনোমা ও ম্যাক্রোপিনোসাইটোসিস'),
      latinName: 'Pancreas (Adenocarcinoma Pancreaticum)',
      system: l('Endocrine, Exocrine & Digestive System', 'অন্তঃক্ষরা, বহিঃক্ষরা ও পরিপাকতন্ত্র'),
      cavity: l('Retroperitoneum (Epigastrium)', 'রেট্রোপেরিটোনিয়াম (এপিগ্যাস্ট্রিয়াম)'),
      position3D: { x: -2, y: 200, z: 2 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'pancreas',
      description: l(
        'Pancreatic ductal adenocarcinoma (PDAC) is characterized by a dense, desmoplastic, hypovascular stroma that compresses microvessels, creating extreme regional hypoxia and nutrient deprivation. Over 95% of PDAC tumors harbor activating KRAS mutations that drive non-canonical glutamine metabolism (GOT1-mediated transamination to generate cytosolic NADPH) and extensive macropinocytosis of extracellular albumin to scavenge amino acids.',
        'অগ্ন্যাশয়ের ডাক্টাল ক্যান্সারে রক্তনালী সংকুচিত হয়ে প্রচণ্ড অক্সিজেন ও গ্লুকোজের ঘাটতি তৈরি হয়। ৯৫% ক্ষেত্রে KRAS মিউটেশনের কারণে কোষগুলো অস্বাভাবিক গ্লুটামিন বিপাক (GOT1 এনজাইম দ্বারা NADPH তৈরি) এবং ম্যাক্রোপিনোসাইটোসিসের মাধ্যমে রক্তরসের অ্যালবুমিন প্রোটিন গিলে খেয়ে পুষ্টি সংগ্রহ করে।'
      ),
      spatialRelations: l(
        'Lies transversely across the posterior abdominal wall behind the stomach, tightly abutting the celiac axis and superior mesenteric vessels.',
        'পাকস্থলীর পেছনে রেট্রোপেরিটোনিয়াল স্থানে অবস্থিত যা প্রধান প্রধান রক্তনালীর সন্নিকটে তীব্র চাপ সৃষ্টি করে ছড়িয়ে পড়ে।'
      ),
      physiology: l(
        'Malignant pancreatic cells upregulate receptor-mediated nutrient scavenging and basal autophagy, recycling damaged organelles to sustain mitochondrial bioenergetics.',
        'ক্যান্সার কোষগুলো অটোফ্যাজি বহুগুণ বাড়িয়ে নিজস্ব জীর্ণ অঙ্গাণু হজম করে ফেলে এবং টিকে থাকার প্রয়োজনীয় রাসায়নিক শক্তি উৎপাদন অব্যাহত রাখে।'
      ),
      nutritionConnection: l(
        'Pancreatic exocrine insufficiency secondary to tumor ductal obstruction leads to severe fat malabsorption, fat-soluble vitamin deficiency, and rapid sarcopenia.',
        'টিউমারের কারণে অগ্ন্যাশয়ের পরিপাক রস নিঃসরণ বন্ধ হয়ে চর্বি হজমে বাধা তৈরি হয় এবং রোগী দ্রুত পুষ্টিহীনতায় ওজন হারাতে থাকে।'
      ),
      clinicalSignificance: l(
        'Extreme metabolic plasticity makes PDAC resistant to standard cytotoxic chemotherapy; inhibiting autophagy with chloroquine combined with KRAS-pathway inhibitors is under evaluation.',
        'অগ্ন্যাশয় ক্যান্সারের তীব্র বিপাকীয় অভিযোজন ক্ষমতা প্রচলিত কেমোথেরাপিকে অকার্যকর করে দেয়, যা কাটিয়ে উঠতে যৌথ থেরাপির গবেষণা চলছে।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-brain-glioma-idh-mutation',
      name: l('Brain: IDH1/2-Mutant Diffuse Astrocytoma & Glioma', 'মস্তিষ্ক: IDH1/2-মিউট্যান্ট ডিফিউজ অ্যাস্ট্রোসাইটোমা ও গ্লিওমা'),
      latinName: 'Cerebrum (Glioma IDH-Mutatum)',
      system: l('Central Nervous System & Neuro-Oncology', 'কেন্দ্রীয় স্নায়ুতন্ত্র ও স্নায়ু-ক্যান্সারবিদ্যা'),
      cavity: l('Cranial Cavity', 'করোটি গহ্বর'),
      position3D: { x: 0, y: 260, z: 2 },
      color: '#7c3aed',
      highlightColor: '#a78bfa',
      shapeType: 'brain',
      description: l(
        'Lower-grade gliomas and secondary glioblastomas frequently carry heterozygous missense mutations at the active site arginine of isocitrate dehydrogenase 1 (IDH1 R132H) or IDH2 (R172K). These neomorphic mutations confer a gain-of-function enzymatic activity that reduces alpha-ketoglutarate to the oncometabolite (R)-2-hydroxyglutarate (2-HG). Massive accumulation of 2-HG competitively blocks alpha-KG-dependent dioxygenases, locking glial cells in an undifferentiated proliferative state.',
        'মস্তিষ্কের গ্লিওমা ক্যান্সারে প্রায়শই IDH1 (R132H) অথবা IDH2 (R172K) জিনে মিউটেশন দেখা যায়। এই পরিবর্তনের ফলে এনজাইমটি স্বাভাবিক কাজের বদলে আলফা-কিটোগ্লুটারেটকে (R)-2-হাইড্রোক্সিগ্লুটারেট (2-HG) নামক অনকোমেটাবোলাইটে রূপান্তরিত করে, যা হিস্টোন ডিমিথিলেশন আটকে দিয়ে টিউমার বৃদ্ধি ঘটায়।'
      ),
      spatialRelations: l(
        'Enclosed within the rigid calvarium and protected by the blood-brain barrier, which restricts systemic delivery of large polar antineoplastic agents.',
        'দৃঢ় করোটির ভেতরে রক্ত-মস্তিষ্ক প্রাচীর দ্বারা সুরক্ষিত যা প্রচলিত ভারী কেমোথেরাপির প্রবেশে বাধা সৃষ্টি করে।'
      ),
      physiology: l(
        '2-HG competitively inhibits TET2 DNA demethylases and Jumonji-C histone demethylases, causing genome-wide CpG island hypermethylation (the glioma CpG island methylator phenotype, G-CIMP).',
        '2-HG অনকোমেটাবোলাইট TET2 এবং হিস্টোন ডিমিথিলেজ এনজাইমকে অচল করে পুরো জিনোমে হাইপারমিথিলেশন ঘটিয়ে কোষীয় বিকাশকে স্তব্ধ করে দেয়।'
      ),
      nutritionConnection: l(
        'IDH-mutant glioma cells exhibit altered lipid composition, depleting membrane phosphocholine and becoming hypersensitive to exogenous lipid and glutamate deprivation.',
        'মিউট্যান্ট গ্লিওমা কোষে ফসফোকোলিন ও গ্লুটামেটের অভাব তৈরি হওয়ায় তারা খাদ্যতালিকাগত নির্দিষ্ট পুষ্টি নিয়ন্ত্রণের প্রতি সংবেদনশীল হয়।'
      ),
      clinicalSignificance: l(
        'Ivosidenib (AG-120) and vorasidenib are FDA-approved oral brain-penetrant inhibitors of mutant IDH1/2 that suppress 2-HG production and significantly prolong progression-free survival.',
        'আইভোসিডেনিব ও ভোরাসিডেনিব হলো মুখে খাওয়ার আধুনিক ওষুধ যা রক্ত-মস্তিষ্ক প্রাচীর ভেদ করে 2-HG উৎপাদন বন্ধ করে এবং রোগীর আয়ু উল্লেখযোগ্যভাবে বৃদ্ধি করে।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism34CancerReprogrammingLesson: LessonTopic = {
  id: 'topic.metabolism.cancer-metabolic-reprogramming',
  slug: 'cancer-metabolic-reprogramming',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '34 · Cancer Metabolic Reprogramming & Oncometabolite Dynamics',
    '৩৪ · ক্যান্সারের বিপাকীয় পুনর্বিন্যাস ও অনকোমেটাবোলাইট গতিবিদ্যা'
  ),
  summary: l(
    'Oncogenic metabolic rewiring: the Warburg effect and aerobic glycolysis, dimeric vs tetrameric PKM2 regulation, glutamine addiction via ASCT2 and GLS1, IDH1/2 neomorphic mutations producing (R)-2-hydroxyglutarate (2-HG), epigenetic hypermethylation via competitive inhibition of alpha-KG dioxygenases, de novo lipogenesis via ACLY and FASN, and targeted metabolic therapeutics including CB-839 and ivosidenib.',
    'ক্যান্সার কোষের বিপাকীয় রূপান্তর: ওয়ারবার্গ প্রভাব ও অবাধ গ্লাইকোলাইসিস, ডাইমেরিক PKM2 নিয়ন্ত্রণ, ASCT2 ও GLS1 দ্বারা গ্লুটামিন নির্ভরতা, IDH1/2 মিউটেশনের মাধ্যমে (R)-2-হাইড্রোক্সিগ্লুটারেট (2-HG) অনকোমেটাবোলাইট তৈরি, আলফা-কিটোগ্লুটারেট এনজাইম বাধা ও এপিজেনেটিক মিথিলেশন, ACLY ও FASN দ্বারা চর্বি সংশ্লেষণ এবং আধুনিক লক্ষ্যভিত্তিক ওষুধ CB-839 ও আইভোসিডেনিব।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Explain the bioenergetic and biosynthetic rationale of the Warburg effect, detailing why proliferating cancer cells prioritize aerobic glycolysis over oxidative phosphorylation.',
      'ওয়ারবার্গ প্রভাবের জৈব-রাসায়নিক ভিত্তি ব্যাখ্যা করা এবং টিউমার কোষ কেন মাইটোকন্ড্রিয়াল জারণের চেয়ে অবাধ গ্লাইকোলাইসিসকে বেশি প্রাধান্য দেয় তা নিরূপণ করা।'
    ),
    l(
      'Analyze the neomorphic enzymatic activity of mutant IDH1/2, explaining how (R)-2-hydroxyglutarate (2-HG) inhibits TET2 and Jumonji demethylases to drive the G-CIMP phenotype.',
      'মিউট্যান্ট IDH1/2 এর অস্বাভাবিক বিক্রিয়া এবং (R)-2-হাইড্রোক্সিগ্লুটারেট কীভাবে TET2 ও জুমনজি এনজাইম আটকে দিয়ে এপিজেনেটিক রূপান্তর ঘটায় তা বিশদভাবে তুলে ধরা।'
    ),
    l(
      'Evaluate therapeutic strategies targeting tumor metabolism, including glutaminase-1 inhibition (CB-839), mutant IDH inhibitors (ivosidenib), and de novo lipogenesis suppression.',
      'ক্যান্সার বিপাককে লক্ষ্য করে তৈরি আধুনিক ওষুধসমূহ যেমন গ্লুটামিনেজ ইনহিবিটর (CB-839), মিউট্যান্ট IDH ইনহিবিটর (আইভোসিডেনিব) এবং ফ্যাটি অ্যাসিড সিন্থেজ বাধার কার্যকারিতা মূল্যায়ন করা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.tca-oxphos'],
  relatedTopicIds: ['topic.metabolism.glycolysis-pyruvate', 'topic.metabolism.immunometabolism-inflammation'],
  references: cancerRefs,
  evidenceBySection: {
    introduction: ['vander-heiden-warburg-science-2009', 'deberardinis-cancer-metabolism-cell-2016'],
    structure: ['vander-heiden-warburg-science-2009', 'dang-myc-glutaminolysis-cell-metab-2009'],
    mechanism: ['ward-idh-oncometabolite-cancer-cell-2010', 'deberardinis-cancer-metabolism-cell-2016'],
    integration: ['pavlova-hallmarks-cancer-metab-cell-metab-2016', 'dang-myc-glutaminolysis-cell-metab-2009'],
    practice: ['ward-idh-oncometabolite-cancer-cell-2010', 'pavlova-hallmarks-cancer-metab-cell-metab-2016'],
    takeaways: ['deberardinis-cancer-metabolism-cell-2016', 'pavlova-hallmarks-cancer-metab-cell-metab-2016'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Warburg Effect & Aerobic Glycolysis', '১. ওয়ারবার্গ প্রভাব ও অবাধ গ্লাইকোলাইসিস'), sectionId: 'introduction' },
      { id: 'sec-pkm2-glutamine', label: l('2. PKM2 Bottleneck & Glutamine Addiction', '২. PKM2 প্রতিবন্ধকতা ও গ্লুটামিন নির্ভরতা'), sectionId: 'structure' },
      { id: 'sec-oncometabolites', label: l('3. IDH Mutations & 2-HG Oncometabolite Biology', '৩. IDH মিউটেশন ও 2-HG অনকোমেটাবোলাইট জীববিজ্ঞান'), sectionId: 'mechanism' },
      { id: 'sec-lipogenesis', label: l('4. De Novo Lipogenesis & Membrane Synthesis', '৪. নতুন চর্বি সংশ্লেষণ ও কোষঝিল্লি গঠন'), sectionId: 'integration' },
      { id: 'sec-therapeutics', label: l('5. Targeted Metabolic Oncology & Clinical Frontiers', '৫. ক্যান্সার বিপাকের লক্ষ্যভিত্তিক ওষুধ ও ভবিষ্যৎ দিগন্ত'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Core Principles & Grand Takeaways', '৬. মৌলিক সূত্র ও সামগ্রিক শিক্ষা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Warburg Effect (Aerobic Glycolysis)', 'ওয়ারবার্গ প্রভাব (অবাধ গ্লাইকোলাইসিস)'),
        definition: l(
          'The observation by Otto Warburg in 1924 that malignant tumors ferment glucose into lactate even in the presence of ample oxygen, prioritizing rapid carbon flux and biosynthetic precursor generation over maximal ATP yield per mole of glucose.',
          '১৯২৪ সালে অটো ওয়ারবার্গ কর্তৃক আবিষ্কৃত একটি অনন্য ঘটনা যেখানে পর্যাপ্ত অক্সিজেন থাকা সত্ত্বেও ক্যান্সার কোষ গ্লুকোজকে ল্যাকটেটে পরিণত করে, যা দ্রুত নতুন কোষ তৈরির কাঁচামাল সরবরাহ করে।'
        ),
      },
      {
        term: l('Pyruvate Kinase M2 (PKM2)', 'পাইরুভেট কাইনেজ M2 (PKM2)'),
        definition: l(
          'A specialized, allosterically regulated isoform of pyruvate kinase predominant in cancer cells; exists as an active tetramer or a low-activity dimer that pools upstream glycolytic intermediates into nucleotide and serine biosynthesis.',
          'ক্যান্সার কোষে উপস্থিত পাইরুভেট কাইনেজের একটি বিশেষ রূপ যা কম সক্রিয় ডাইমার অবস্থায় থেকে গ্লাইকোলাইসিসের মধ্যবর্তী উপাদানগুলোকে নিউক্লিওটাইড তৈরিতে সরিয়ে দেয়।'
        ),
      },
      {
        term: l('(R)-2-Hydroxyglutarate (2-HG)', '(R)-২-হাইড্রোক্সিগ্লুটারেট (2-HG)'),
        definition: l(
          'A chiral oncometabolite produced by neomorphic active-site mutants of IDH1 and IDH2; structurally mimics alpha-ketoglutarate and competitively inhibits alpha-KG-dependent dioxygenases, driving epigenetic hypermethylation.',
          'মিউট্যান্ট IDH এনজাইম দ্বারা উৎপাদিত একটি ক্ষতিকর অনকোমেটাবোলাইট যা আলফা-কিটোগ্লুটারেটের গঠন অনুকরণ করে DNA ও হিস্টোন ডিমিথিলেজ এনজাইমকে অচল করে দেয়।'
        ),
      },
      {
        term: l('Glutaminolysis', 'গ্লুটামিনোলাইসিস'),
        definition: l(
          'The mitochondrial pathway where glutamine is deamidated to glutamate by GLS1 and converted to alpha-ketoglutarate to replenish TCA cycle intermediates depleted by macromolecular biosynthesis (anaplerosis).',
          'মাইটোকন্ড্রিয়াল বিক্রিয়া পথ যেখানে GLS1 এনজাইম গ্লুটামিনকে ভেঙে আলফা-কিটোগ্লুটারেটে রূপান্তরিত করে সাইট্রিক এসিড চক্রে প্রয়োজনীয় কার্বন কঙ্কাল সরবরাহ করে।'
        ),
      },
      {
        term: l('Cancer Cachexia', 'ক্যান্সার ক্যাক্সিয়া'),
        definition: l(
          'A severe systemic metabolic wasting syndrome driven by pro-inflammatory tumor cytokines (IL-6, TNF-alpha) causing unrelenting skeletal muscle proteolysis, adipose lipolysis, and massive hepatic futile energy cycling.',
          'টিউমার থেকে ক্ষরিত প্রদাহজনক সাইটোকাইনের প্রভাবে সৃষ্ট মারাত্মক অপুষ্টি ও ক্ষয় রোগ, যার ফলে মাংসপেশি ও চর্বি গলে যায় এবং রোগী মারাত্মক দুর্বল হয়ে পড়ে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Aerobic Glycolysis Glucose Carbon Diversion', 'ওয়ারবার্গ অবাধ গ্লাইকোলাইসিসে গ্লুকোজ কার্বন ডাইভারশন হিসাব'),
        steps: [
          l(
            'Step 1: Calculate glucose flux converted to lactate: 12.0 mmol/h * 0.85 = 10.2 mmol of glucose converted to lactate per hour.',
            'ধাপ ১: ল্যাকটেটে রূপান্তরিত গ্লুকোজের পরিমাণ: ১২.০ * ০.৮৫ = ১০.২ মিলিমোল প্রতি ঘণ্টায়।'
          ),
          l(
            'Step 2: Since each 6-carbon glucose yields 2 molecules of 3-carbon lactate, lactate production rate is 10.2 * 2 = 20.4 mmol lactate/h per 10^8 cells.',
            'ধাপ ২: প্রতিটি ৬ কার্বনের গ্লুকোজ থেকে ২টি ৩ কার্বনের ল্যাকটেট উৎপন্ন হয়, তাই মোট ল্যাকটেট = ১০.২ * ২ = ২০.৪ মিলিমোল প্রতি ঘণ্টায়।'
          ),
          l(
            'Step 3: Calculate glucose committed to the pentose phosphate pathway (ribose-5-phosphate synthesis): 12.0 mmol/h * 0.10 = 1.2 mmol glucose/h, corresponding to 7.2 mmol of glucose carbon per hour dedicated to nucleotide and NADPH generation.',
            'ধাপ ৩: পেন্টোজ ফসফেট পথে নিবেদিত গ্লুকোজ = ১২.০ * ০.১০ = ১.২ মিলিমোল প্রতি ঘণ্টায় (যা ৭.২ মিলিমোল কার্বনের সমান)।'
          ),
        ],
        conclusion: l(
          'Lactate production rate is 20.4 mmol/h per 10^8 cells, and 1.2 mmol of glucose (7.2 mmol carbon) is dedicated hourly to pentose phosphate pathway nucleotide biosynthesis, demonstrating the massive glycolytic flux characteristic of the Warburg phenotype.',
          'প্রতি ঘণ্টায় ২০.৪ মিলিমোল ল্যাকটেট তৈরি হয় এবং ১.২ মিলিমোল গ্লুকোজ নিউক্লিওটাইড ও NADPH তৈরিতে ব্যবহৃত হয়, যা ওয়ারবার্গ প্রভাবের ক্লাসিক্যাল নিদর্শন।'
        ),
      },
      {
        title: l('IDH1 Neomorphic Mutation: 2-HG Kinetic Generation & TET2 Inhibition', 'IDH1 মিউটেশন: 2-HG উৎপাদন ও TET2 এনজাইম বাধার গতিবিদ্যা'),
        steps: [
          l(
            'Step 1: Express competitive inhibition fractional occupancy: Fraction Inhibited = [I] / ([I] + Ki), assuming physiological substrate [alpha-KG] is outcompeted at standard baseline levels.',
            'ধাপ ১: প্রতিযোগিতামূলক বাধার সমীকরণ: বাধার হার = [I] / ([I] + Ki)।'
          ),
          l(
            'Step 2: Substitute inhibitor concentration [I] = 10 mM and Ki = 0.8 mM: Fraction Inhibited = 10 / (10 + 0.8) = 10 / 10.8 = 0.926 (92.6%).',
            'ধাপ ২: মান বসিয়ে পাই: বাধার হার = ১০ / (১০ + ০.৮) = ১০ / ১০.৮ = ০.৯২৬ (৯২.৬%)।'
          ),
          l(
            'Step 3: Analyze biological consequence: 92.6% inhibition of TET2 DNA demethylases triggers catastrophic accumulation of 5-methylcytosine across CpG islands, locking gene promoters in a hypermethylated, transcriptionally silent state.',
            'ধাপ ৩: জৈবিক প্রভাব: TET2 এনজাইম ৯২.৬% বাধাগ্রস্ত হওয়ায় ডিএনএ-তে মিথাইলেশন জমে গিয়ে টিউমার প্রতিরোধক জিনগুলো চিরতরে স্তব্ধ হয়ে যায়।'
          ),
        ],
        conclusion: l(
          'TET2 catalytic activity is inhibited by approximately 92.6%, explaining why IDH1/2 mutations induce profound genome-wide hypermethylation (G-CIMP phenotype) and block cellular differentiation.',
          'TET2 এনজাইমের প্রায় ৯২.৬% কার্যকারিতা নষ্ট হয়ে যায়, যা গ্লিওমা কোষে জিনোম-ব্যাপী হাইপারমিথিলেশন ও ক্যান্সার সৃষ্টির মূল চালিকাশক্তি।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why do proliferating malignant cells prioritize the lower-yield Warburg effect (2 ATP per glucose) over oxidative phosphorylation (up to 32 ATP per glucose)?',
          'দ্রুত বর্ধনশীল ক্যান্সার কোষ কেন উচ্চ শক্তির মাইটোকন্ড্রিয়াল শ্বসন বাদ দিয়ে কম শক্তির ওয়ারবার্গ অবাধ গ্লাইকোলাইসিস বেছে নেয়?'
        ),
        answer: l(
          'Cell proliferation requires enormous macromolecular biomass (DNA, RNA, proteins, and phospholipids) far more than maximal ATP efficiency. Fast glycolytic flux simultaneously satisfies ATP demand and funnels intermediate carbons through branch pathways (PPP, serine biosynthesis, de novo lipogenesis) to duplicate daughter cell contents.',
          'বিভাজনরত কোষের প্রধান প্রয়োজন প্রচুর পরিমাণে জৈব উপাদান (ডিএনএ, আরএনএ, লিপিড)। অবাধ গ্লাইকোলাইসিসের দ্রুত গতি একাধারে এটিপি মেটায় এবং মধ্যবর্তী উপাদানগুলোকে কোষের নতুন অঙ্গাণু তৈরিতে সরবরাহ করে।'
        ),
      },
      {
        question: l(
          'What is the precise biochemical mechanism by which mutant IDH1 (R132H) drives tumorigenesis?',
          'মিউট্যান্ট IDH1 (R132H) এনজাইম ঠিক কোন রাসায়নিক ক্রিয়ার মাধ্যমে টিউমার তৈরিতে সহায়তা করে?'
        ),
        answer: l(
          'Mutant IDH1 gains the neomorphic ability to reduce alpha-ketoglutarate into (R)-2-hydroxyglutarate (2-HG) while consuming NADPH. Millimolar 2-HG acts as a competitive antagonist of alpha-KG-dependent dioxygenases (TET2 DNA demethylases and Jumonji histone demethylases), causing genome-wide CpG hypermethylation (G-CIMP) and differentiation arrest.',
          'মিউট্যান্ট IDH1 এনজাইম আলফা-কিটোগ্লুটারেটকে 2-HG অনকোমেটাবোলাইটে পরিণত করে, যা TET2 এবং হিস্টোন ডিমিথিলেজ এনজাইমকে অচল করে পুরো জিনোমে মিথাইলেশন বৃদ্ধি করে কোষের স্বাভাবিক বিকাশ আটকে দেয়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: cancer3DData,
  interactiveDiagram: {
    id: 'diag-metabolism34-cancer-reprogramming',
    title: l('Interactive Oncogenic Circuit: Warburg Glycolysis, Glutaminolysis & 2-HG Axis', 'ক্যান্সার বিপাকীয় নকশা: ওয়ারবার্গ গ্লাইকোলাইসিস, গ্লুটামিনোলাইসিস ও ২-এইচজি অক্ষ'),
    disclaimer: l('Interactive educational diagram tracing oncogenic metabolic rewiring.', 'ক্যান্সার বিপাকীয় পুনর্বিন্যাস প্রদর্শনকারী শিক্ষামূলক ডায়াগ্রাম।'),
    description: l(
      'Explore how high-affinity glucose uptake, PKM2 dimer diversion, mitochondrial glutamine anaplerosis via GLS1, and mutant IDH1/2 oncometabolite generation fuel malignant growth and epigenetic silence.',
      'ইন্টারেক্টিভ মানচিত্র: গ্লুকোজ শোষণ, PKM2 ডাইমার কর্তৃক পথ পরিবর্তন, GLS1 দ্বারা গ্লুটামিন চক্রপূরণ এবং মিউট্যান্ট IDH দ্বারা 2-HG তৈরির মাধ্যমে টিউমার বৃদ্ধির আণবিক মানচিত্র।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-glucose-glut1',
        label: l('1. GLUT1 / HK2 Accelerated Influx', '১. GLUT1 / HK2 ত্বরান্বিত গ্লুকোজ শোষণ'),
        description: l('Upregulated glucose transporters and hexokinase-2 pump glucose-6-phosphate into glycolysis at an accelerated rate.', 'বর্ধিত GLUT1 বাহক এবং হেক্সোকাইনেজ-২ বিপুল পরিমাণ গ্লুকোজ কোষে প্রবেশ করিয়ে গ্লাইকোলাইসিস চালু রাখে।'),
        details: l('Provides high-rate carbon flux fueling both rapid ATP production and branching biosynthetic pathways.', 'উচ্চ হারের কার্বন প্রবাহ দ্রুত এটিপি শক্তি ও শাখা জৈব-সংশ্লেষণ পথ উভয়কেই সচল রাখে।'),
        sectionId: 'introduction',
        color: '#3b82f6',
      },
      {
        id: 'node-pkm2-dimer',
        label: l('2. PKM2 Dimer Carbon Bottleneck', '২. PKM2 ডাইমার কার্বন নিয়ন্ত্রণ কেন্দ্র'),
        description: l('Low-activity PKM2 dimer pools upstream intermediates, diverting carbons into the pentose phosphate pathway and serine synthesis.', 'কম সক্রিয় PKM2 ডাইমার গ্লুকোজের কার্বনকে পেন্টোজ ফসফেট ও সেরিন তৈরিতে পাঠিয়ে কোষের বৃদ্ধি ত্বরান্বিত করে।'),
        details: l('Phosphotyrosine binding prevents tetramerization, prioritizing biomass duplication over oxidative phosphorylation.', 'অনকোজিনের সংকেতে ডাইমার তৈরি হয়ে শক্তি তৈরির চেয়ে নতুন কোষের কাঁচামাল উৎপাদনে অগ্রাধিকার দেয়।'),
        sectionId: 'structure',
        color: '#f59e0b',
      },
      {
        id: 'node-lactate-efflux',
        label: l('3. LDHA / MCT4 Lactate Secretion', '৩. LDHA / MCT4 ল্যাকটেট নিষ্কাশন'),
        description: l('Lactate dehydrogenase A regenerates cytosolic NAD+, while MCT4 expels lactate and protons to acidify the microenvironment.', 'LDHA এনজাইম NAD+ পুনরুৎপাদন করে এবং MCT4 বাহক ল্যাকটেট বের করে টিউমারের পরিবেশকে অ্যাসিডিক বানায়।'),
        details: l('Suppresses tumor-infiltrating effector T cells while fueling neighboring oxidative cancer cells.', 'টিউমার ধ্বংসকারী টি-কোষকে নিস্তেজ করে দেয় এবং পার্শ্ববর্তী কোষগুলোর জ্বালানি হিসেবে ব্যবহৃত হয়।'),
        sectionId: 'mechanism',
        color: '#ef4444',
      },
      {
        id: 'node-glutamine-asct2',
        label: l('4. ASCT2 / GLS1 Glutaminolysis', '৪. ASCT2 / GLS1 গ্লুটামিনোলাইসিস'),
        description: l('ASCT2 imports glutamine; mitochondrial GLS1 deamidates it to glutamate, fueling TCA cycle anaplerosis and redox defense.', 'ASCT2 গ্লুটামিন পরিবহন করে এবং GLS1 এটিকে ভেঙে আলফা-কিটোগ্লুটারেট তৈরি করে মাইটোকন্ড্রিয়ার ঘাটতি পূরণ করে।'),
        details: l('Maintains mitochondrial membrane potential and feeds citrate export for de novo membrane lipogenesis.', 'মাইটোকন্ড্রিয়াল ঝিল্লির বিভব অক্ষুণ্ণ রাখে এবং নতুন কোষঝিল্লির জন্য চর্বি তৈরিতে সাইট্রেট পাঠায়।'),
        sectionId: 'mechanism',
        color: '#10b981',
      },
      {
        id: 'node-mutant-idh',
        label: l('5. Mutant IDH1/2 (2-HG Oncometabolite)', '৫. মিউট্যান্ট IDH1/2 (2-HG অনকোমেটাবোলাইট)'),
        description: l('Neomorphic reduction of alpha-ketoglutarate consumes NADPH, accumulating 2-HG to mM concentrations and blocking TET2/KDMs.', 'অস্বাভাবিক বিক্রিয়ায় 2-HG জমে গিয়ে TET2 ও হিস্টোন ডিমিথিলেজ এনজাইমকে অচল করে এপিজেনেটিক তালা ঝুলিয়ে দেয়।'),
        details: l('Drives genome-wide hypermethylation (G-CIMP phenotype), preventing cellular differentiation and locking malignancy.', 'পুরো জিনোমে মিথাইলেশন ঘটিয়ে কোষের স্বাভাবিক রূপান্তর চিরতরে বন্ধ করে দেয়।'),
        sectionId: 'integration',
        color: '#8b5cf6',
      },
      {
        id: 'node-targeted-inhibitors',
        label: l('6. Targeted Therapeutics (Ivosidenib & CB-839)', '৬. লক্ষ্যভিত্তিক ওষুধ (আইভোসিডেনিব ও CB-839)'),
        description: l('Small molecules allosterically inhibit mutant IDH1 and GLS1, reversing hypermethylation and inducing synthetic lethality.', 'ছোট অণুর ওষুধগুলো মিউট্যান্ট IDH1 এবং GLS1 এনজাইম আটকে দিয়ে টিউমার বৃদ্ধি দমন করে।'),
        details: l('Restores normal epigenetic landscape and selectively starves oncogene-addicted cancer cells.', 'স্বাভাবিক এপিজেনেটিক অবস্থা ফিরিয়ে আনে এবং টিউমার কোষকে অনাহারে ধ্বংস করে।'),
        sectionId: 'practice',
        color: '#06b6d4',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'An integrated oncogenic biochemical map connecting the Warburg glycolytic switch, PKM2 dimer bottleneck, mitochondrial glutaminolysis via GLS1, IDH neomorphic oncometabolite synthesis, and targeted metabolic therapies.',
      'একটি সমন্বিত ক্যান্সার বিপাকীয় মানচিত্র যা ওয়ারবার্গ গ্লাইকোলাইসিস, PKM2 ডাইমার প্রতিবন্ধকতা, GLS1 গ্লুটামিনোলাইসিস, মিউট্যান্ট IDH অনকোমেটাবোলাইট এবং লক্ষ্যভিত্তিক আধুনিক ওষুধসমূহকে সংযুক্ত করে।'
    ),
    steps: [
      l('High-affinity GLUT1 and HK2 drive accelerated glucose influx and phosphorylation into glucose-6-phosphate.', 'উচ্চ ক্ষমতার GLUT1 ও HK2 দ্রুত গ্লুকোজ কোষে প্রবেশ করিয়ে গ্লুকোজ-৬-ফসফেটে রূপান্তরিত করে।'),
      l('Dimeric PKM2 creates a glycolytic bottleneck, pooling upstream intermediates into the PPP and serine synthesis.', 'ডাইমেরিক PKM2 বিক্রিয়ার গতি কমিয়ে কার্বন কঙ্কালগুলোকে রাইবোজ ও সেরিন তৈরিতে পরিচালিত করে।'),
      l('Mitochondrial GLS1 deamidates glutamine to alpha-ketoglutarate, replenishing the TCA cycle and generating NADPH.', 'মাইটোকন্ড্রিয়াল GLS1 গ্লুটামিন ভেঙে আলফা-কিটোগ্লুটারেট তৈরি করে ক্রেবস চক্র সচল রাখে এবং NADPH যোগায়।'),
      l('Neomorphic IDH1 mutants reduce alpha-ketoglutarate to 2-HG, competitively inhibiting TET2 and driving oncogenesis.', 'মিউট্যান্ট IDH1 আলফা-কিটোগ্লুটারেটকে 2-HG তে পরিণত করে যা TET2 এনজাইম আটকে দিয়ে ক্যান্সার সৃষ্টি করে।'),
    ],
  },
  assessment: {
    question: l(
      'Which of the following alterations in pyruvate kinase M2 (PKM2) directly promotes the diversion of glycolytic intermediates into biosynthetic pathways in cancer cells?',
      'ক্যান্সার কোষে কোন পরিবর্তনের ফলে পাইরুভেট কাইনেজ M2 (PKM2) গ্লুকোজের উপাদানগুলোকে নতুন কোষ তৈরির পথে পরিচালিত করে?'
    ),
    options: [
      l(
        'Dissociation of the highly active tetramer into the low-activity dimer, caused by binding of phosphotyrosine-containing oncogenic peptides.',
        'অনকোজেনিক পেপটাইড যুক্ত হওয়ার ফলে অতি-সক্রিয় টেট্রামার ভেঙে কম-সক্রিয় ডাইমারে রূপান্তরিত হওয়া।'
      ),
      l(
        'Complete allosteric irreversible binding of fructose 1,6-bisphosphate locking the enzyme in an ultra-high affinity state.',
        'ফ্রুক্টোজ ১,৬-বিসফসফেট স্থায়ীভাবে যুক্ত হয়ে এনজাইমের কার্যকারিতা চরম মাত্রায় বাড়িয়ে দেওয়া।'
      ),
      l(
        'Translocation of PKM2 directly into the mitochondrial matrix to replace ATP synthase.',
        'PKM2 মাইটোকন্ড্রিয়ার ভেতরে ঢুকে এটিপি সিন্থেজ এনজাইমের স্থান দখল করা।'
      ),
      l(
        'Spontaneous degradation of all intracellular ADP into cyclic AMP.',
        'কোষের সমস্ত এডিপি ভেঙে গিয়ে স্বতঃস্ফূর্তভাবে সাইক্লিক এএমপিতে পরিণত হওয়া।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Receptor tyrosine kinase signaling causes tyrosine phosphorylation that promotes dissociation of PKM2 into the low-activity dimer. This creates an enzymatic bottleneck, backing up upstream intermediates into the PPP and nucleotide synthesis.',
      'অনকোজিন সক্রিয়তার ফলে PKM2 টেট্রামার থেকে ডাইমারে পরিণত হয়। এর ফলে বিক্রিয়ার গতি কমে গিয়ে পেছনের উপাদানগুলো জমে যায় এবং নিউক্লিওটাইড তৈরিতে ব্যবহৃত হয়।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Warburg Effect: Aerobic Fermentation in Rapidly Dividing Tumors', 'ওয়ারবার্গ প্রভাব: দ্রুত বর্ধনশীল টিউমারে অবাধ গাঁজন'),
          paragraphs: [
            l(
              'In 1924, Nobel laureate Otto Warburg made the surprising discovery that cancer tissue slices vigorously consume glucose and ferment it into lactate even when abundant oxygen is present. In normal resting mammalian tissues, oxygen suppresses fermentation—a phenomenon known as the Pasteur effect—channeling pyruvate into mitochondria for high-yield oxidative phosphorylation producing up to thirty-two ATP per glucose.',
              '১৯২৪ সালে নোবেল বিজয়ী অটো ওয়ারবার্গ লক্ষ্য করেন যে পর্যাপ্ত অক্সিজেন থাকা সত্ত্বেও ক্যান্সার কোষগুলো দ্রুত গ্লুকোজ ভেঙে ল্যাকটেট তৈরি করে। সুস্থ কোষে অক্সিজেন থাকলে সন্ধান প্রক্রিয়া বন্ধ হয়ে মাইটোকন্ড্রিয়ায় পূর্ণ জারণ ঘটে (পাস্তুর প্রভাব), যার ফলে প্রতি অণু গ্লুকোজ থেকে প্রায় ৩২টি এটিপি শক্তি উৎপন্ন হয়।'
            ),
            l(
              'Malignant tumors upend this bioenergetic convention. Rather than maximizing ATP production per mole of glucose, tumor cells consume glucose at a rate up to one hundred times greater than untransformed cells. This voracious glucose consumption forms the clinical foundation of diagnostic 18F-fluorodeoxyglucose positron emission tomography (FDG-PET) imaging in modern oncology staging.',
              'ক্যান্সার কোষ এই প্রচলিত নিয়ম পুরোপুরি পাল্টে দেয়। সর্বোচ্চ এটিপি তৈরি করার বদলে এরা স্বাভাবিক কোষের চেয়ে প্রায় ১০০ গুণ বেশি দ্রুত গ্লুকোজ গ্রহণ করে। আধুনিক ক্যান্সার চিকিৎসায় বহুল ব্যবহৃত FDG-PET স্ক্যান এই অস্বাভাবিক গ্লুকোজ শোষণের ওপর ভিত্তি করেই টিউমার শনাক্ত করে থাকে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Biosynthetic Imperative: Why Proliferating Cells Favor Fermentation', 'জৈব-সংশ্লেষণের তাগিদ: বর্ধনশীল কোষ কেন গাঁজন পছন্দ করে'),
          paragraphs: [
            l(
              'A fundamental paradox of cancer biology is why rapidly dividing cells would rely on a pathway that yields only two net ATP molecules per glucose instead of the thirty-two produced by mitochondrial respiration. The resolution lies in the realization that a proliferating cell requires vast quantities of biosynthetic building blocks far more urgently than it requires pure ATP energy.',
              'ক্যান্সারের একটি প্রধান রহস্য হলো কেন দ্রুত বিভাজনরত কোষগুলো মাত্র ২টি এটিপি দেওয়া এই স্বল্প শক্তির পথ বেছে নেয়। এর উত্তর লুকিয়ে আছে কোষের গঠনে: একটি নতুন কোষ তৈরি করতে কেবল শক্তির চেয়ে প্রচুর পরিমাণে নতুন অঙ্গাণু, ডিএনএ, প্রোটিন ও চর্বির কাঁচামাল অনেক বেশি প্রয়োজন হয়।'
            ),
            l(
              'To duplicate its cellular contents every cell cycle, a tumor cell must assemble billions of nucleotides for DNA and RNA, amino acids for enzymes and structural scaffolds, and fatty acids for phospholipid bilayer membranes. Burning glucose completely into carbon dioxide in the mitochondria wastes these precious carbon skeletons. Aerobic glycolysis maintains high flux through branching anabolic pathways.',
              'প্রতিটি কোষ বিভাজনে শত কোটি নিউক্লিওটাইড, প্রোটিন এবং কোষঝিল্লির জন্য প্রচুর ফ্যাটি অ্যাসিড তৈরি করতে হয়। গ্লুকোজকে মাইটোকন্ড্রিয়ায় পুড়িয়ে কার্বন ডাই-অক্সাইড বানিয়ে ফেললে এই মূল্যবান কার্বন কঙ্কালগুলো নষ্ট হয়ে যেত। অবাধ গ্লাইকোলাইসিস চালু রেখে কোষগুলো এই কার্বনগুলোকে নতুন উপাদান তৈরিতে ব্যবহার করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Enzymatic Rerouting: PKM2 Bottlenecks and Glutamine Anaplerosis', 'এনজাইম নিয়ন্ত্রণ: PKM2 প্রতিবন্ধকতা ও গ্লুটামিন চক্রপূরণ'),
          paragraphs: [
            l(
              'To coordinate the dual demands of energy and macromolecular synthesis, proliferating cancer cells selectively express pyruvate kinase isoform M2 (PKM2) rather than adult PKM1. PKM2 toggles between a highly active tetramer that drives glycolysis forward to pyruvate, and a low-activity dimer that creates an upstream metabolite bottleneck. This pause forces glycolytic intermediates into the pentose phosphate pathway for nucleotide synthesis and the serine biosynthesis pathway for lipid headgroups.',
              'শক্তি ও নতুন কোষের উপাদানের ভারসাম্য বজায় রাখতে ক্যান্সার কোষগুলো স্বাভাবিক PKM1 এর বদলে PKM2 এনজাইম তৈরি করে। কম সক্রিয় PKM2 ডাইমার গ্লাইকোলাইসিসের গতি কমিয়ে পেছনের রাসায়নিক উপাদানগুলোকে জমিয়ে রাখে। এই জমে থাকা কার্বনগুলো পেন্টোজ ফসফেট পথে ঢুকে ডিএনএ ও আরএনএ তৈরির জন্য প্রয়োজনীয় নিউক্লিওটাইড এবং কোষঝিল্লির জন্য সেরিন অ্যামিনো অ্যাসিড তৈরি করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Systemic Metabolic Hijacking: The Cori Cycle and Tumor-Host Crosstalk', 'সারাদেহে বিপাকীয় দখলদারিত্ব: কোরি চক্র ও টিউমার-হোস্ট মিথস্ক্রিয়া'),
          paragraphs: [
            l(
              'Malignant tumors do not exist in isolation; they actively reshape whole-body metabolic homeostasis. Enormous amounts of lactate secreted by hypoxic and aerobic tumor cells enter the hepatic circulation, forcing hepatocytes to run energy-intensive gluconeogenesis via the Cori cycle. Because synthesizing one glucose molecule from two lactates consumes six ATP equivalents while yielding only two ATP in the tumor, this futile cycle burns host caloric reserves, driving cancer cachexia.',
              'ক্যান্সার টিউমার একা বাঁচে না; এটি সারাদেহের বিপাকীয় ভারসাম্যকে জিম্মি করে ফেলে। টিউমার থেকে ক্ষরিত বিপুল ল্যাকটেট যকৃতে পৌঁছে কোরি চক্রের মাধ্যমে নতুন গ্লুকোজ তৈরিতে বাধ্য করে। দুটি ল্যাকটেট থেকে একটি গ্লুকোজ বানাতে যকৃতের ৬টি এটিপি খরচ হয়, অথচ টিউমার পায় মাত্র ২টি এটিপি। এই ক্ষতিকর অপচয় রোগীর শক্তি ভাণ্ডার শূন্য করে মারাত্মক ক্যানসার ক্যাক্সিয়া ডেকে আনে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical PET Imaging: Diagnostic Exploitation of Accelerated Glycolytic Flux', 'ক্লিনিক্যাল পিইটি ইমেজিং: দ্রুত গ্লাইকোলাইসিসকে কাজে লাগিয়ে ক্যান্সার শনাক্তকরণ'),
          paragraphs: [
            l(
              'The voracious glucose consumption of tumors forms the direct biochemical foundation of modern oncologic staging with 18F-fluorodeoxyglucose positron emission tomography (FDG-PET). Transformed cells upregulate high-affinity GLUT1 transporters and hexokinase-2, trapping the radiolabeled glucose analog inside malignant tissue. Clinicians exploit this differential uptake to pinpoint primary malignancies, assess lymph node metastasis, and gauge metabolic response to chemotherapy.',
              'ক্যান্সার কোষের অতিমাত্রায় গ্লুকোজ খাওয়ার বৈশিষ্ট্যটিকে সরাসরি কাজে লাগিয়ে আধুনিক চিকিৎসায় FDG-PET স্ক্যান করা হয়। টিউমার কোষে প্রচুর GLUT1 বাহক ও হেক্সোকাইনেজ-২ থাকায় তেজস্ক্রিয় গ্লুকোজ দ্রুত কোষে ঢুকে আটকা পড়ে যায়। চিকিৎসকরা এই অতিরিক্ত শোষণ দেখে শরীরের কোথায় টিউমার আছে তা নিখুঁতভাবে শনাক্ত করেন এবং কেমোথেরাপির কার্যকারিতা যাচাই করেন।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Foundational Summary of Oncogenic Metabolic Reprogramming', 'ক্যান্সারের বিপাকীয় রূপান্তরের প্রাথমিক সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Cancer metabolic reprogramming is a recognized hallmark of malignancy, prioritizing biomass production, redox balance, and rapid adaptation over maximal energy efficiency. The Warburg effect and glutaminolysis supply the continuous stream of nucleotides, lipids, and amino acids required for clonal tumor expansion. Recognizing these altered pathways transforms our understanding of tumor biology and provides actionable targets for therapy.',
              'ক্যান্সারের বিপাকীয় পরিবর্তন কোনো সাধারণ দুর্ঘটনা নয়, বরং এটি নতুন কোষ তৈরি ও বেঁচে থাকার জন্য একটি সুপরিকল্পিত কৌশল। ওয়ারবার্গ প্রভাব এবং গ্লুটামিনোলাইসিস প্রতিনিয়ত টিউমার বৃদ্ধির কাঁচামাল যোগায়। এই বিপাকীয় পরিবর্তনগুলো বোঝা কেবল ক্যান্সারের জীববিজ্ঞান জানতেই সাহায্য করে না, বরং রোগ নিরাময়ের জন্য সম্পূর্ণ নতুন ওষুধের পথ তৈরি করে দেয়।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'শিক্ষায়তনিক'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Energetic Paradox and Evolutionary Logic of the Warburg Effect', 'ওয়ারবার্গ প্রভাবের শক্তিতাত্ত্বিক বৈপরীত্য ও বিবর্তনীয় যুক্তি'),
          paragraphs: [
            l(
              'The observation that cancer cells preferentially ferment glucose into lactate in the presence of oxygen presents an apparent bioenergetic paradox, as oxidative phosphorylation yields fifteen times more ATP per glucose. However, evolutionary analysis indicates that in nutrient-replete environments, ATP is rarely the limiting factor for cellular duplication. Rather, the limiting constraint is the rate of carbon incorporation into proteins, nucleic acids, and membrane lipids.',
              'পর্যাপ্ত অক্সিজেন থাকা সত্ত্বেও ক্যান্সার কোষের গ্লুকোজ ভেঙে ল্যাকটেট তৈরি করা একটি আপাত বৈপরীত্য, কারণ স্বাভাবিক শ্বসনে ১৫ গুণ বেশি এটিপি শক্তি উৎপন্ন হয়। তবে জীববিজ্ঞানের দৃষ্টিতে পর্যাপ্ত পুষ্টির পরিবেশে কোষ বিভাজনের প্রধান বাধা শক্তি নয়, বরং নতুন প্রোটিন, ডিএনএ এবং কোষঝিল্লি তৈরির কাঁচামালের যোগান। দ্রুত গ্লাইকোলাইসিস চালিয়ে কোষগুলো এই কাঁচামালের নিরবচ্ছিন্ন সরবরাহ নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Isoform Switching: Alternative Splicing of Pyruvate Kinase and Glutaminase', 'আইসোফর্ম রূপান্তর: পাইরুভেট কাইনেজ ও গ্লুটামিনেজের অল্টারনেটিভ স্প্লাইসিং'),
          paragraphs: [
            l(
              'Malignant transformation drives coordinated alternative splicing of key metabolic enzymes to optimize anabolic carbon diversion. Heterogeneous nuclear ribonucleoproteins (hnRNPA1, hnRNPA2, PTBP1) promote the inclusion of exon 10 over exon 9 in the PKM pre-mRNA, generating PKM2 instead of PKM1. Concurrently, the MYC oncogene upregulates kidney-type glutaminase (GLS1) over liver-type GLS2, providing high-affinity mitochondrial deamidation of glutamine to support anaplerosis.',
              'ক্যান্সার কোষে নির্দিষ্ট আরএনএ স্প্লাইসিং প্রোটিনের মাধ্যমে এনজাইমের গঠনে কৌশলগত পরিবর্তন আনা হয়। PKM জিনের নবম এক্সনের বদলে দশম এক্সন যুক্ত হয়ে প্রাপ্তবয়স্ক PKM1 এর পরিবর্তে ভ্রূণাবস্থার PKM2 তৈরি হয়। একই সাথে MYC অনকোজিন GLS1 এনজাইমের মাত্রা বাড়িয়ে দেয়, যা মাইটোকন্ড্রিয়ায় গ্লুটামিন ভেঙে সাইট্রিক এসিড চক্রের ঘাটতি পূরণ করতে চমৎকার সহায়তা করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The PKM2 Bottleneck & Glutamine Addiction Mechanisms', 'PKM2 প্রতিবন্ধকতা ও গ্লুটামিন নির্ভরতার আণবিক কৌশল'),
          paragraphs: [
            l(
              'The metabolic diversion of glycolytic carbons is precisely controlled by alternative splicing of pyruvate kinase. Proliferating and cancer cells predominantly express the embryonic PKM2 isoform rather than adult PKM1. PKM2 exists in dynamic equilibrium between a highly active homotetramer and a low-activity homodimer, regulated by binding of phosphotyrosine signaling peptides.',
              'গ্লাইকোলাইসিসের উপাদানগুলোকে নতুন উপাদান তৈরির দিকে ঘুরিয়ে দেওয়ার কাজটি করে পাইরুভেট কাইনেজ M2 (PKM2) এনজাইম। স্বাভাবিক কোষের PKM1 এর বদলে ক্যান্সার কোষে PKM2 বেশি থাকে, যা অনকোজিনের সংকেত পেলে অতি-সক্রিয় টেট্রামার থেকে কম-সক্রিয় ডাইমারে রূপান্তরিত হয়।'
            ),
            l(
              'When receptor tyrosine kinases activate oncogenic drivers such as FGFR or EGFR, tyrosine phosphorylation drives PKM2 into the dimeric state. The low catalytic turnover of the dimer creates an enzymatic bottleneck, causing upstream phosphorylated glycolytic intermediates to back up. These pooled carbons spill over into the pentose phosphate pathway for nucleotide synthesis and the serine biosynthesis pathway.',
              'গ্রোথ ফ্যাক্টর রিসেপ্টর সক্রিয় হলে PKM2 ডাইমার অবস্থায় চলে যায়। এর ফলে গ্লাইকোলাইসিসের গতি কমে গিয়ে পেছনের রাসায়নিক উপাদানগুলো জমতে থাকে। এই জমে থাকা কার্বনগুলো পেন্টোজ ফসফেট পথে ঢুকে নিউক্লিওটাইড এবং সেরিন অ্যামিনো অ্যাসিড তৈরির পথকে সমৃদ্ধ করে।'
            ),
            l(
              'Simultaneously, cancer cells display severe glutamine addiction. Driven by the MYC proto-oncogene, cells upregulate the ASCT2 (SLC1A5) transporter and mitochondrial glutaminase-1 (GLS1). Glutamine is deamidated to glutamate, which enters the TCA cycle as alpha-ketoglutarate, replenishing oxaloacetate (anaplerosis) and enabling citrate export for lipid synthesis while providing NADPH for antioxidant defense.',
              'একই সাথে ক্যান্সার কোষে গ্লুটামিনের তীব্র ক্ষুধা তৈরি হয়। MYC জিনের প্রভাবে কোষে ASCT2 বাহক ও GLS1 এনজাইম বহুগুণ বেড়ে যায়। গ্লুটামিন ভেঙে আলফা-কিটোগ্লুটারেটে পরিণত হয়ে সাইট্রিক এসিড চক্র সচল রাখে এবং নতুন চর্বি ও অ্যান্টিঅক্সিডেন্ট তৈরির জন্য অপরিহার্য NADPH সরবরাহ করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('IDH1/2 Neomorphic Mutations & (R)-2-HG Oncometabolite Biology', 'IDH1/2 মিউটেশন ও (R)-২-এইচজি অনকোমেটাবোলাইট জীববিজ্ঞান'),
          paragraphs: [
            l(
              'In 2008, genomic sequencing of human glioblastomas and acute myeloid leukemias revealed recurring heterozygous missense mutations at active site arginine residues in isocitrate dehydrogenase 1 (IDH1 R132) and IDH2 (R172). Rather than a simple loss of function, these cancer-associated mutations confer an extraordinary neomorphic enzymatic activity that transforms cellular biochemistry.',
              '২০০৮ সালে গ্লিওমা ও লিউকেমিয়া ক্যান্সারের জিনোম সিকোয়েন্সিং করে দেখা যায় যে IDH1 ও IDH2 এনজাইমে বিশেষ মিউটেশন ঘটেছে। এটি কোনো নিষ্ক্রিয় মিউটেশন নয়, বরং এনজাইমটি সম্পূর্ণ নতুন এক ক্ষতিকর ক্ষমতা অর্জন করে যা কোষীয় রসায়নকে আমূল বদলে দেয়।'
            ),
            l(
              'The mutant IDH dimer heterodimerizes with the wild-type monomer and consumes NADPH to catalyze the stereospecific reduction of alpha-ketoglutarate into the oncometabolite (R)-2-hydroxyglutarate (2-HG). In tumor tissue, 2-HG accumulates to enormous millimolar concentrations, outcompeting physiological alpha-ketoglutarate at the catalytic pocket of more than sixty alpha-KG-dependent dioxygenases.',
              'মিউট্যান্ট IDH এনজাইম NADPH খরচ করে আলফা-কিটোগ্লুটারেটকে (R)-2-হাইড্রোক্সিগ্লুটারেট (2-HG) নামক অনকোমেটাবোলাইটে রূপান্তরিত করে। কোষে বিপুল পরিমাণ 2-HG জমে গিয়ে আলফা-কিটোগ্লুটারেটের ওপর নির্ভরশীল ৬০টিরও বেশি গুরুত্বপূর্ণ ডাইঅক্সিজিনেজ এনজাইমের কাজ পুরোপুরি বন্ধ করে দেয়।'
            ),
            l(
              'Crucially, 2-HG competitively inhibits the ten-eleven translocation 2 (TET2) family of 5-methylcytosine hydroxylases and Jumonji-C domain-containing histone lysine demethylases (KDMs). This double blockade prevents both DNA and histone demethylation, locking the chromatin structure in a state of genome-wide CpG island hypermethylation (G-CIMP) that permanently suppresses lineage differentiation.',
              'বিশেষ করে 2-HG এনজাইমটি TET2 ডিএনএ ডিমিথিলেজ এবং জুমনজি হিস্টোন ডিমিথিলেজ এনজাইমকে আটকে দেয়। এর ফলে পুরো ডিএনএ এবং ক্রোমাটিনে অতিরিক্ত মিথাইলেশন জমে যায়, যা কোষের স্বাভাবিক বিকাশ আটকে দিয়ে অনন্তকাল বিভাজনের মুখে ঠেলে দেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Therapeutic Targeting of Tumor Glutamine Metabolism and Synthetic Lethality', 'টিউমার গ্লুটামিন বিপাককে লক্ষ্য করে চিকিৎসা ও সিন্থেটিক লেথালিটি'),
          paragraphs: [
            l(
              'Pharmacological inhibition of glutamine anaplerosis has emerged as a promising strategy to starve oncogene-driven malignancies. The small molecule CB-839 (telaglenastat) allosterically blocks mitochondrial glutaminase-1 (GLS1), disrupting the supply of alpha-ketoglutarate to the TCA cycle and depleting intracellular glutathione reserves. In preclinical models of triple-negative breast cancer and renal cell carcinoma, GLS1 blockade triggers synthetic lethality when combined with PARP inhibitors.',
              'অনকোজিন-নির্ভর টিউমার কোষকে ধ্বংস করতে গ্লুটামিন বিপাক বন্ধ করার আধুনিক ওষুধ তৈরি করা হয়েছে। CB-839 (টেলাগ্লেনাস্ট্যাট) ওষুধটি মাইটোকন্ড্রিয়াল GLS1 এনজাইমকে আটকে দিয়ে ক্রেবস চক্রে আলফা-কিটোগ্লুটারেটের যোগান বন্ধ করে এবং কোষে অ্যান্টিঅক্সিডেন্ট গ্লুটাথিয়নের মাত্রা কমিয়ে দেয়। স্তন ও কিডনির ক্যান্সারে এই ওষুধটি প্রচলিত চিকিৎসার সাথে যুক্ত করে চমৎকার সাফল্য পাওয়া যাচ্ছে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis of Oncometabolism and Epigenetic Crosstalk', 'অনকোমেটাবলিজম ও এপিজেনেটিক মিথস্ক্রিয়ার সামগ্রিক রূপরেখা'),
          paragraphs: [
            l(
              'Metabolic reprogramming and epigenetic regulation exist in a state of reciprocal bidirectional causality within malignant cells. While oncogenes re-orchestrate metabolic enzyme expression to fuel proliferation, accumulated oncometabolites such as (R)-2-hydroxyglutarate, succinate, and fumarate directly modulate chromatin-modifying enzymes. Breaking this oncogenic feedback loop remains one of the central objectives of modern precision oncology.',
              'ক্যান্সার কোষে বিপাকীয় পুনর্বিন্যাস এবং এপিজেনেটিক পরিবর্তন পরস্পর গভীরভাবে সংযুক্ত। একদিকে অনকোজিনগুলো এনজাইমের গঠন বদলে বিপাকীয় গতি বাড়িয়ে দেয়, অন্যদিকে জমে থাকা অনকোমেটাবোলাইট (যেমন 2-HG, সাকসিনেট) ডিএনএ ও হিস্টোন এনজাইমকে আটকে দিয়ে জিন প্রকাশ নিয়ন্ত্রণ করে। এই ক্ষতিকর চক্র ভেঙে ফেলাই আধুনিক লক্ষ্যভিত্তিক ক্যান্সার চিকিৎসার মূল লক্ষ্য।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উচ্চতর'),
      sections: [
        {
          id: 'integration',
          heading: l('Metabolic Heterogeneity and Symbiosis in the Tumor Microenvironment', 'টিউমার ক্ষুদ্র-পরিবেশে বিপাকীয় বৈচিত্র্য ও পারস্পরিক সহাবস্থান'),
          paragraphs: [
            l(
              'Solid tumors exhibit profound intra-tumoral metabolic compartmentalization driven by steep oxygen and nutrient gradients. Hypoxic cancer cells distant from capillaries undergo rapid glycolysis and secrete massive quantities of lactate through MCT4 transporters. Well-oxygenated tumor cells adjacent to blood vessels express MCT1 to import this extracellular lactate, converting it back to pyruvate via LDHB for mitochondrial respiration, thereby sparing glucose for their hypoxic neighbors.',
              'কঠিন টিউমারের ভেতরে অক্সিজেন ও রক্তনালীর দূরত্বের ওপর ভিত্তি করে বিভিন্ন অংশের মধ্যে এক চমৎকার বিপাকীয় সহযোগিতা গড়ে ওঠে। রক্তনালী থেকে দূরে থাকা অক্সিজেনহীন কোষগুলো দ্রুত গ্লাইকোলাইসিস চালিয়ে MCT4 দিয়ে ল্যাকটেট বের করে দেয়। রক্তনালীর কাছে থাকা সতেজ কোষগুলো MCT1 দিয়ে সেই ল্যাকটেট টেনে নিয়ে মাইটোকন্ড্রিয়ায় পুড়িয়ে শক্তি তৈরি করে এবং অক্সিজেনহীন কোষগুলোর জন্য গ্লুকোজ ছেড়ে দেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Targeted Metabolic Oncology: Small Molecules & Clinical Trials', 'ক্যান্সার বিপাকের লক্ষ্যভিত্তিক ওষুধ ও ক্লিনিক্যাল ট্রায়াল'),
          paragraphs: [
            l(
              'Unveiling cancer metabolic vulnerabilities has paved the way for breakthrough targeted therapeutics. The small molecule ivosidenib (AG-120) binds allosterically to the dimer interface of mutant IDH1, halting 2-HG production, reversing DNA hypermethylation, and inducing myeloid differentiation in patients with relapsed AML and IDH1-mutant cholangiocarcinoma.',
              'ক্যান্সারের বিপাকীয় দুর্বলতাগুলো আবিষ্কারের ফলে আধুনিক চিকিৎসার নতুন দিগন্ত উন্মোচিত হয়েছে। আইভোসিডেনিব (AG-120) ওষুধটি সরাসরি মিউট্যান্ট IDH1 এনজাইমের সাথে যুক্ত হয়ে 2-HG উৎপাদন বন্ধ করে দেয়, যার ফলে লিউকেমিয়া ও পিত্তনালীর ক্যান্সারে রোগীরা সুস্থতার দিকে এগিয়ে যায়।'
            ),
            l(
              'In KRAS-driven lung and pancreatic carcinomas, targeting glutamine dependency with CB-839 (telaglenastat), a potent allosteric inhibitor of GLS1, suppresses anaplerosis and triggers synthetic lethality when paired with cytotoxic chemotherapy. Similarly, targeting de novo lipogenesis with fatty acid synthase (FASN) inhibitors (such as TVB-2640 / denifanstat) starves rapidly dividing cancer cells of membrane lipids.',
              'ফুসফুস ও অগ্ন্যাশয়ের ক্যান্সারে গ্লুটামিনের ক্ষুধা বন্ধ করতে CB-839 (টেলাগ্লেনাস্ট্যাট) ওষুধ প্রয়োগ করা হয়, যা GLS1 এনজাইম আটকে দিয়ে টিউমার ধ্বংস করে। একইভাবে ফ্যাটি অ্যাসিড সিন্থেজ (FASN) বাধার মাধ্যমে ক্যান্সার কোষের নতুন কোষঝিল্লি তৈরির কাঁচামাল বন্ধ করে দেওয়া সম্ভব হচ্ছে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Grand Synthesis: Metabolic Reprogramming as an Actionable Hallmark', 'সারসংক্ষেপ: ক্যান্সার নিরাময়ে বিপাকীয় পুনর্বিন্যাসের ব্যবহারিক প্রয়োগ'),
          paragraphs: [
            l(
              'Cancer metabolism is not merely a passive consequence of malignant transformation, but an active, oncogene-driven reprogramming designed to support biomass expansion, survive nutrient-poor microenvironments, and evade epigenetic differentiation. Integrating genomic profiling with metabolomics and targeted metabolic therapeutics represents the cutting edge of precision medical oncology.',
              'ক্যান্সারের বিপাকীয় পরিবর্তন কোনো সাধারণ পার্শ্বপ্রতিক্রিয়া নয়, বরং এটি অনকোজিন দ্বারা নিয়ন্ত্রিত একটি সুপরিকল্পিত প্রক্রিয়া যা টিউমারকে দ্রুত বড় হতে সাহায্য করে। জিনোমিক্স ও মেটাবোলোমিক্স তথ্যের সমন্বয়ে তৈরি লক্ষ্যভিত্তিক ওষুধগুলো আধুনিক ক্যান্সার চিকিৎসার সবচেয়ে শক্তিশালী হাতিয়ার।'
            ),
          ],
        },
      ],
    },
  },
}
