import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const lipidEicosanoidRefs = [
  {
    id: 'vance-biochem-lipids-6e-ch8',
    authors: 'Dennis E. Vance, Jean E. Vance',
    title: 'Biochemistry of Lipids, Lipoproteins and Membranes, 6th edition, Chapter 8: Phospholipid and Sphingolipid Metabolism',
    organization: 'Elsevier Science',
    year: 2016,
    url: 'https://www.sciencedirect.com/book/9780444634382/biochemistry-of-lipids-lipoproteins-and-membranes',
  },
  {
    id: 'lehninger-biochem-8e-ch21',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 21: Lipid Biosynthesis',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'serhan-resolvins-nature-2014',
    authors: 'Charles N. Serhan',
    title: 'Pro-resolving lipid mediators are leads for resolution physiology. Nature, 510(7503):92-101',
    organization: 'Nature Publishing Group',
    year: 2014,
    url: 'https://pubmed.ncbi.nlm.nih.gov/24899309/',
  },
  {
    id: 'smith-cox-jbc-2011',
    authors: 'William L. Smith, Robert M. Urade, David L. DeWitt',
    title: 'Prostaglandin endoperoxide H synthases-1 and -2. Journal of Biological Chemistry, 286(24):21813-21819',
    organization: 'American Society for Biochemistry and Molecular Biology',
    year: 2011,
    url: 'https://pubmed.ncbi.nlm.nih.gov/21454580/',
  },
  {
    id: 'hannun-sphingolipids-nrm-2018',
    authors: 'Yusuf A. Hannun, Lina M. Obeid',
    title: 'Sphingolipids and their metabolism in physiological and pathological processes. Nature Reviews Molecular Cell Biology, 19(3):175-191',
    organization: 'Nature Publishing Group',
    year: 2018,
    url: 'https://pubmed.ncbi.nlm.nih.gov/29165427/',
  },
]

const lipidEicosanoid3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Phospholipid, Sphingolipid & Eicosanoid Flux',
    '৩ডি বহু-অঙ্গীয় ফসফোলিপিড, স্ফিংগোলিপিড ও আইকোসানয়েড প্রবাহের মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and inspect coordinate space to explore how structural phospholipids, signaling sphingolipids, and inflammatory eicosanoids are synthesized, trafficked, and pharmacologically modulated across key human organs.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে গাঠনিক ফসফোলিপিড, সংকেতবাহী স্ফিংগোলিপিড এবং প্রদাহজনিত আইকোসানয়েড মানবদেহের প্রধান অঙ্গসমূহে সংশ্লেষিত ও নিয়ন্ত্রিত হয়।'
  ),
  description: l(
    'Complex lipids bridge cellular structure and intercellular signaling. The liver and endoplasmic reticulum assemble glycerophospholipids via the Kennedy pathway; neural oligodendrocytes synthesize myelin-forming galactosylceramides; vascular endothelial cells and platelets modulate hemostatic balance through opposing prostacyclin and thromboxane production; and pulmonary leukocytes synthesize bronchoconstrictive leukotrienes.',
    'জটিল লিপিড কোষের গঠন এবং কোষ-কোষীয় সংকেতের মধ্যে সেতু বন্ধন তৈরি করে। যকৃৎ ও এন্ডোপ্লাজমিক রেটিকুলাম কেনেডি পথের মাধ্যমে গ্লিসারোফসফোলিপিড তৈরি করে; স্নায়ুতন্ত্রের অলিগোডেনড্রোসাইট মায়েলিন আবরণী গঠনকারী গ্যালাক্টোসিলসেরামাইড সংশ্লেষ করে; রক্তনালীর এন্ডোথেলিয়াম ও অণুচক্রিকা প্রোস্টাসাইক্লিন ও থ্রম্বোক্সেনের মাধ্যমে রক্ত জমাট বাঁধার ভারসাম্য রক্ষা করে; এবং ফুসফুসের শ্বেতকণিকা শ্বাসনালী সংকোচনকারী লিউকোট্রিন উৎপন্ন করে।'
  ),
  organs: [
    {
      id: 'organ-liver-er-phospholipid',
      name: l('Liver & Endoplasmic Reticulum (Kennedy Pathway & PEMT)', 'যকৃৎ ও এন্ডোপ্লাজমিক রেটিকুলাম (কেনেডি পথ ও পিইএমটি)'),
      latinName: 'Hepar et Reticulum Endoplasmicum',
      system: l('Digestive & Hepato-Metabolic System', 'পরিপাক ও যকৃৎ-বিপাকীয় তন্ত্র'),
      cavity: l('Peritoneal Cavity (Right Hypochondrium)', 'পেরিটোনিয়াল গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 5, y: 185, z: 2 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'The primary metabolic hub for de novo glycerophospholipid synthesis. Utilizes the Kennedy CDP-choline and CDP-ethanolamine pathways to generate phosphatidylcholine (PC) and phosphatidylethanolamine (PE). In addition, hepatic PEMT (phosphatidylethanolamine N-methyltransferase) utilizes three SAM molecules to convert PE into PC, an essential pathway for VLDL lipoprotein secretion.',
        'ডি নোভো গ্লিসারোফসফোলিপিড সংশ্লেষণের প্রধান বিপাকীয় কেন্দ্র। কেনেডি সিডিপি-কোলিন এবং সিডিপি-ইথানলঅ্যামাইন পথ ব্যবহার করে ফসফাটিডাইলকোলিন (PC) ও ফসফাটিডাইলইথানলঅ্যামাইন (PE) তৈরি করে। এছাড়াও যকৃতের PEMT এনজাইম তিনটি SAM অণু ব্যবহার করে PE-কে PC-তে রূপান্তরিত করে, যা VLDL ক্ষরণের জন্য অপরিহার্য।'
      ),
      spatialRelations: l(
        'Spans the right upper abdominal quadrant, interfacing with the hepatic portal vein and inferior vena cava for systemic lipid output.',
        'ডান ঊর্ধ্ব উদরে অবস্থিত, যা পোর্টাল শিরা এবং ইনফিরিয়র ভেনা কাভার সাথে যুক্ত হয়ে সামগ্রিক লিপিড নিঃসরণ পরিচালনা করে।'
      ),
      physiology: l(
        'Maintains the dynamic PC:PE membrane ratio (normally ~2.5:1), which regulates membrane fluidity, endoplasmic reticulum calcium homeostasis, and sensitivity to ER stress-induced apoptosis.',
        'কোষঝিল্লির স্বাভাবিক PC:PE অনুপাত (প্রায় ২.৫:১) বজায় রাখে, যা ঝিল্লির তারল্য, ক্যালসিয়াম ভারসাম্য এবং এন্ডোপ্লাজমিক রেটিকুলামের চাপ প্রতিরোধ ক্ষমতা নিয়ন্ত্রণ করে।'
      ),
      nutritionConnection: l(
        'Dietary choline intake (found in eggs, soy lecithin, and fish) directly fuels the cytidine diphosphate-choline pathway, preventing non-alcoholic fatty liver disease and neural tube defects.',
        'খাদ্যের কোলিন সরাসরি সিডিপি-কোলিন পথের মাধ্যমে মেটাবোলাইজড হয়ে ফ্যাটি লিভার এবং ভ্রূণের নিউরাল টিউব ত্রুটি প্রতিরোধ করে।'
      ),
      clinicalSignificance: l(
        'Defects in hepatic PEMT or choline deficiency disrupt PC synthesis, causing impaired VLDL packaging, severe hepatic steatosis (fatty liver), and progressive non-alcoholic steatohepatitis (MASH).',
        'যকৃতের PEMT ত্রুটি বা কোলিনের ঘাটতি PC তৈরিতে বাধা দেয়, যার ফলে VLDL ক্ষরণ বন্ধ হয়ে মারাত্মক ফ্যাটি লিভার ও স্টেক্টোহেপাটাইটিস দেখা দেয়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-cns-myelin-sphingolipid',
      name: l('Brain & Myelin Sheaths (Sphingomyelin & Glycosphingolipids)', 'মস্তিষ্ক ও মায়েলিন আবরণী (স্ফিংগোমায়েলিন ও গ্লাইকোস্ফিংগোলিপিড)'),
      latinName: 'Cerebrum et Vagina Myelinica',
      system: l('Central Nervous System', 'কেন্দ্রীয় স্নায়ুতন্ত্র'),
      cavity: l('Cranial Cavity', 'করোটিকা গহ্বর'),
      position3D: { x: 0, y: 275, z: 0 },
      color: '#3b82f6',
      highlightColor: '#60a5fa',
      shapeType: 'brain',
      description: l(
        'High-density repository of sphingolipids. Oligodendrocytes synthesize galactosylceramide and sulfatides, while neuronal plasma membranes are enriched with complex gangliosides (GM1, GD1a) that organize lipid rafts and mediate neurotrophic signal transduction.',
        'স্ফিংগোলিপিডের উচ্চ ঘনত্বের আধার। অলিগোডেনড্রোসাইট কোষ গ্যালাক্টোসিলসেরামাইড ও সালফাটাইড তৈরি করে, আর নিউরনের প্লাজমা ঝিল্লি জটিল গ্যাংগ্লিওসাইড দ্বারা সমৃদ্ধ থাকে যা লিপিড র‍্যাফ্ট ও নিউরোট্রফিক সংকেত নিয়ন্ত্রণ করে।'
      ),
      spatialRelations: l(
        'Encased within the neurocranium, insulated by the blood-brain barrier which strictly limits peripheral complex lipid entry.',
        'করোটিকার অভ্যন্তরে সুরক্ষিত, রক্ত-মস্তিষ্ক প্রাচীর দ্বারা পরিবেষ্টিত যা বাইরের লিপিডের অনিয়ন্ত্রিত প্রবেশ রোধ করে।'
      ),
      physiology: l(
        'The ceramide-to-sphingosine-1-phosphate (S1P) rheostat dictates cell fate: ceramide accumulation promotes neuronal apoptosis, whereas phosphorylated S1P stimulates survival, myelination, and astrocytic barrier integrity.',
        'সেরামাইড এবং স্ফিংগোসিন-১-ফসফেটের (S1P) আপেক্ষিক ভারসাম্য কোষের ভবিষ্যৎ নির্ধারণ করে: অতিরিক্ত সেরামাইড অ্যাপোপটোসিস ঘটায়, পক্ষান্তরে S1P স্নায়ুর সুরক্ষা ও মায়েলিনেশন বৃদ্ধি করে।'
      ),
      nutritionConnection: l(
        'Sphingomyelin from maternal milk provides essential long-chain bases and choline critical for neonatal white matter myelination and cognitive brain maturation.',
        'মাতৃদুগ্ধের স্ফিংগোমায়েলিন নবজাতকের মস্তিষ্কের সাদা পদার্থের মায়েলিন আবরণী তৈরি এবং মানসিক বিকাশে অপরিহার্য পুষ্টি সরবরাহ করে।'
      ),
      clinicalSignificance: l(
        'Lysosomal storage diseases (sphingolipidoses): Tay-Sachs disease (hexosaminidase A deficiency causing GM2 ganglioside accumulation), Niemann-Pick disease (sphingomyelinase deficiency), and Gaucher disease (glucocerebrosidase deficiency) lead to devastating neurodegeneration.',
        'লাইসোসোমাল সঞ্চয় ব্যাধি (স্ফিংগোলিপিডোসিস): টে-স্যাক্স রোগ (হেক্সোসামিনিডেস এ ত্রুটিতে GM2 জমা হওয়া), নিম্যান-পিক রোগ (স্ফিংগোমায়েলিনেজ ত্রুটি) এবং গশার রোগ মারাত্মক স্নায়বিক অবক্ষয় ঘটায়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-endothelium-platelet-eicosanoid',
      name: l('Vascular Endothelium & Platelets (PGI2 vs TXA2 Hemostasis)', 'রক্তনালীর এন্ডোথেলিয়াম ও অণুচক্রিকা (PGI2 বনাম TXA2 রক্তক্ষরণরক্ষা)'),
      latinName: 'Endothelium Vasculare et Thrombocyti',
      system: l('Circulatory & Cardiovascular System', 'রক্ত সংবহনতন্ত্র'),
      cavity: l('Thoracic Cavity (Cardiovascular Loop)', 'বক্ষ গহ্বর (কার্ডিওভাসকুলার লুপ)'),
      position3D: { x: -4, y: 220, z: 3 },
      color: '#ef4444',
      highlightColor: '#f87171',
      shapeType: 'heart',
      description: l(
        'The site of the classic eicosanoid hemostatic balance. Platelet COX-1 generates Thromboxane A2 (TXA2), a potent vasoconstrictor and platelet aggregator. Vascular endothelial COX-1 and COX-2 generate Prostacyclin (PGI2), a potent vasodilator and inhibitor of platelet aggregation.',
        'আইকোসানয়েডের চিরাচরিত রক্তক্ষরণরক্ষা ভারসাম্যের স্থান। অণুচক্রিকার COX-1 থ্রম্বোক্সেন A2 (TXA2) তৈরি করে যা রক্তনালী সংকুচিত করে এবং রক্ত জমাট বাঁধায়। বিপরীতভাবে রক্তনালীর এন্ডোথেলিয়াম প্রোস্টাসাইক্লিন (PGI2) তৈরি করে যা রক্তনালী প্রসারিত করে এবং জমাট বাঁধতে বাধা দেয়।'
      ),
      spatialRelations: l(
        'Constitutes the continuous inner lining of the cardiovascular lumen in immediate, uninterrupted contact with flowing thrombocytes.',
        'রক্ত সংবহনতন্ত্রের অভ্যন্তরীণ অবিচ্ছিন্ন স্তর যা চলমান অণুচক্রিকার সাথে সার্বক্ষণিক প্রত্যক্ষ সংযোগে থাকে।'
      ),
      physiology: l(
        'Unbalanced inhibition of endothelial COX-2 by selective coxibs (e.g., rofecoxib) without concomitant platelet COX-1 inhibition suppresses protective PGI2 while sparing thrombogenic TXA2, significantly elevating thrombotic cardiovascular risk.',
        'সিলেক্টিভ কক্স-২ ইনহিবিটর ওষুধগুলো এন্ডোথেলিয়ামের সুরক্ষাকারী PGI2 বন্ধ করে কিন্তু ক্ষতিকর TXA2 চালু রাখে, যার ফলে রক্তে জমাট বাঁধার ও কার্ডিওভাসকুলার দুর্ঘটনার ঝুঁকি বহুগুণ বেড়ে যায়।'
      ),
      nutritionConnection: l(
        'Dietary eicosapentaenoic acid (EPA, omega-3) competes with arachidonic acid, shifting production to 3-series prostaglandins (PGI3) and 5-series thromboxanes (TXA3), which possess substantially weaker pro-thrombotic activity.',
        'খাদ্যের ওমেগা-৩ ফ্যাটি অ্যাসিড (EPA) অ্যারাকিডোনিক অ্যাসিডের সাথে প্রতিযোগিতা করে অপেক্ষাকৃত কম জমাট-বাঁধাইকারী ৩-সিরিজের প্রোস্টাগ্ল্যান্ডিন ও ৫-সিরিজের থ্রম্বোক্সেন উৎপন্ন করে হৃদরোগের ঝুঁকি হ্রাস করে।'
      ),
      clinicalSignificance: l(
        'Low-dose aspirin (75–100 mg daily) irreversibly acetylates platelet COX-1 Ser529. Because platelets lack nuclei and cannot synthesize new protein, TXA2 is suppressed for their 8–10 day lifespan, providing cardioprotection against myocardial infarction and ischemic stroke.',
        'স্বল্প মাত্রার অ্যাসপিরিন (৭৫-১০০ মিগ্রা দৈনিক) অণুচক্রিকার COX-1 এনজাইমকে স্থায়ীভাবে নিষ্ক্রিয় করে। অণুচক্রিকায় নিউক্লিয়াস না থাকায় নতুন এনজাইম তৈরি হতে পারে না, ফলে ৮-১০ দিন TXA2 তৈরি বন্ধ থাকে যা হার্ট অ্যাটাক ও স্ট্রোক প্রতিরোধ করে।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-lungs-leukotrienes',
      name: l('Lungs & Bronchial Tree (Leukotriene CysLT1 Pathway)', 'ফুসফুস ও ব্রঙ্কিয়াল বৃক্ষ (লিউকোট্রিন CysLT1 পথ)'),
      latinName: 'Pulmones et Arbor Bronchialis',
      system: l('Respiratory System', 'শ্বসনতন্ত্র'),
      cavity: l('Pleural Cavity', 'প্লুরাল গহ্বর'),
      position3D: { x: 5, y: 228, z: 2 },
      color: '#06b6d4',
      highlightColor: '#22d3ee',
      shapeType: 'lungs',
      description: l(
        'Target tissue for the 5-lipoxygenase (5-LOX) pathway. In mast cells, eosinophils, and alveolar macrophages, arachidonic acid is converted via 5-LOX and FLAP into leukotriene A4 (LTA4), which is metabolized to LTC4, LTD4, and LTE4 (cysteinyl leukotrienes).',
        '৫-লাইপোক্সিজিনেজ (5-LOX) পথের প্রধান লক্ষ্য অঙ্গ। অ্যালভিওলার ম্যাক্রোফেজ ও ইওসিনোফিলে অ্যারাকিডোনিক অ্যাসিড 5-LOX এনজাইমের মাধ্যমে লিউকোট্রিন A4 (LTA4) এবং পরবর্তীতে সিস্টিনাইল লিউকোট্রিন (LTC4, LTD4, LTE4)-এ রূপান্তরিত হয়।'
      ),
      spatialRelations: l(
        'Occupies bilateral pleural spaces flanking the mediastinum, intimately ventilated via branching bronchial airways.',
        'মিডিয়াস্টিনামের দুই পাশে অবস্থিত যা শ্বাসনালীর শাখা-প্রশাখার মাধ্যমে বাতাস গ্রহণ করে।'
      ),
      physiology: l(
        'CysLT1 receptor antagonists (montelukast, zafirlukast) and 5-LOX inhibitors (zileuton) effectively reverse bronchospasm and allergic rhinitis by blocking leukotriene-mediated smooth muscle hyperreactivity.',
        'মন্টেলুকাস্ট ও জাফিরলুকাস্ট CysLT1 রিসেপ্টর ব্লক করে এবং জিলিউটন 5-LOX প্রতিরোধ করে শ্বাসনালীর আক্ষেপ দূর করে হাঁপানি ও অ্যালার্জিক রাইনাইটিস কার্যকরভাবে নিয়ন্ত্রণ করে।'
      ),
      nutritionConnection: l(
        'Omega-3 fatty acids yield LTB5 and LTC5 which have up to 90% lower inflammatory and chemotactic potency compared to arachidonic acid-derived LTB4 and LTC4, ameliorating chronic inflammatory airway pathology.',
        'ওমেগা-৩ ফ্যাটি অ্যাসিড থেকে উৎপন্ন LTB5 এবং LTC5 সাধারণ লিউকোট্রিনের তুলনায় ৯০% কম প্রদাহজনক হওয়ায় তা হাঁপানি ও দীর্ঘস্থায়ী ব্রঙ্কাইটিসের তীব্রতা প্রশমিত করতে সাহায্য করে।'
      ),
      clinicalSignificance: l(
        'Cysteinyl leukotrienes bind the CysLT1 receptor on airway smooth muscle cells, causing bronchoconstriction that is 1,000 times more potent than histamine, excessive mucous secretion, and airway edema in asthma.',
        'সিস্টিনাইল লিউকোট্রিন শ্বাসনালীর CysLT1 রিসেপ্টরে যুক্ত হয়ে হিস্টামিনের চেয়ে ১,০০০ গুণ বেশি তীব্র শ্বাসনালী সংকোচন, অতিরিক্ত শ্লেষ্মা ক্ষরণ এবং হাঁপানির মারাত্মক শ্বাসকষ্ট সৃষ্টি করে।'
      ),
      sectionId: 'integration',
    },
  ],
}

export const metabolism25ComplexLipidsEicosanoidsLesson: LessonTopic = {
  id: 'topic.metabolism.phospholipids-sphingolipids-eicosanoids',
  slug: 'phospholipids-sphingolipids-eicosanoids',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '25 · Phospholipid, Sphingolipid & Eicosanoid Metabolism',
    '২৫ · ফসফোলিপিড, স্ফিংগোলিপিড ও আইকোসানয়েড বিপাক'
  ),
  summary: l(
    'Biochemical pathways of membrane structural and signaling lipids: Kennedy CDP-choline/ethanolamine pathway, hepatic PEMT, mitochondrial cardiolipin and Barth syndrome, de novo ceramide synthesis, sphingomyelin and the ceramide-S1P survival rheostat, and cPLA2-driven cyclooxygenase (COX-1/2) and lipoxygenase (5-LOX) eicosanoid cascades.',
    'কোষঝিল্লির গঠন ও সংকেতবাহী লিপিডের জৈবরাসাযনিক পথসমূহ: কেনেডি সিডিপি-কোলিন/ইথানলঅ্যামাইন পথ, যকৃতের পিইএমটি, মাইটোকন্ড্রিয়াল কার্ডিওলিপিন ও বার্থ সিন্ড্রোম, ডি নোভো সেরামাইড সংশ্লেষ, স্ফিংগোমায়েলিন ও সেরামাইড-S1P জীবনরক্ষা ভারসাম্য এবং cPLA2 চালিত সাইক্লোঅক্সিজিনেজ (COX-1/2) ও লাইপোক্সিজিনেজ (5-LOX) আইকোসানয়েড ক্যাসকেড।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Detail the Kennedy CDP-choline and CDP-ethanolamine pathways for glycerophospholipid synthesis and the hepatic PEMT methylation bypass.',
      'গ্লিসারোফসফোলিপিড তৈরির কেনেডি সিডিপি-কোলিন ও সিডিপি-ইথানলঅ্যামাইন পথ এবং যকৃতের PEMT মিথাইলেশন প্রক্রিয়া বিস্তারিত ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Contrast de novo sphingolipid biosynthesis with the pro-apoptotic ceramide versus pro-survival sphingosine-1-phosphate (S1P) rheostat.',
      'ডি নোভো স্ফিংগোলিপিড সংশ্লেষণের সাথে অ্যাপোপটোটিক সেরামাইড এবং কোষ-সুরক্ষাকারী স্ফিংগোসিন-১-ফসফেটের (S1P) ভারসাম্যের তুলনা করতে পারা।'
    ),
    l(
      'Analyze the eicosanoid cascade from cPLA2 arachidonate release to COX prostanoids and 5-LOX leukotrienes, detailing aspirin, coxib, and montelukast pharmacology.',
      'cPLA2 দ্বারা অ্যারাকিডোনিক অ্যাসিড নিঃসরণ থেকে শুরু করে COX প্রোস্টানয়েড এবং 5-LOX লিউকোট্রিন পথ বিশ্লেষণ করা এবং অ্যাসপিরিন ও অন্যান্য ওষুধের কার্যপদ্ধতি ব্যাখ্যা করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.fatty-acid-oxidation-ketones', 'topic.metabolism.lipogenesis-triglycerides'],
  relatedTopicIds: ['topic.metabolism.cholesterol-steroids', 'topic.metabolism.lipoproteins-lipid-flux'],
  references: lipidEicosanoidRefs,
  evidenceBySection: {
    introduction: ['vance-biochem-lipids-6e-ch8', 'lehninger-biochem-8e-ch21'],
    structure: ['vance-biochem-lipids-6e-ch8', 'hannun-sphingolipids-nrm-2018'],
    mechanism: ['lehninger-biochem-8e-ch21', 'smith-cox-jbc-2011', 'serhan-resolvins-nature-2014'],
    integration: ['smith-cox-jbc-2011', 'serhan-resolvins-nature-2014'],
    practice: ['smith-cox-jbc-2011', 'hannun-sphingolipids-nrm-2018'],
    takeaways: ['vance-biochem-lipids-6e-ch8', 'serhan-resolvins-nature-2014'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Membrane Architecture & Amphipathic Lipids', '১. ঝিল্লি সংগঠন ও উভধর্মী লিপিড'), sectionId: 'introduction' },
      { id: 'sec-kennedy', label: l('2. Kennedy Pathway & Cardiolipin Remodeling', '২. কেনেডি পথ ও কার্ডিওলিপিন পুনর্গঠন'), sectionId: 'structure' },
      { id: 'sec-sphingo', label: l('3. Sphingolipid Biosynthesis & The S1P Rheostat', '৩. স্ফিংগোলিপিড সংশ্লেষ ও S1P ভারসাম্য'), sectionId: 'mechanism' },
      { id: 'sec-eicosanoid', label: l('4. Eicosanoid Cascades: COX & 5-LOX Pathways', '৪. আইকোসানয়েড ক্যাসকেড: COX ও 5-LOX পথ'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Quantitative Lipidomics & Aspirin Pharmacology', '৫. পরিমাণগত লিপিডোমিক্স ও অ্যাসপিরিন ফার্মাকোলজি'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Sphingolipidoses & High-Yield Summary', '৬. স্ফিংগোলিপিডোসিস ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Kennedy CDP-Choline Pathway', 'কেনেডি সিডিপি-কোলিন পথ'),
        definition: l(
          'The predominant eukaryotic pathway for phosphatidylcholine (lecithin) synthesis, wherein free choline is phosphorylated and activated with CTP to form CDP-choline before transfer onto diacylglycerol.',
          'ইউক্যারিওটিক কোষে ফসফাটিডাইলকোলিন (লেসিথিন) তৈরির প্রধান পথ, যেখানে মুক্ত কোলিন ফসফরাইলেটেড হয়ে CTP সহযোগে সিডিপি-কোলিনে রূপান্তরিত হয় এবং ডাইঅ্যাসাইলগ্লিসারলে স্থানান্তরিত হয়।'
        ),
      },
      {
        term: l('Tafazzin (TAZ)', 'ট্যাফাজিন (TAZ)'),
        definition: l(
          'A mitochondrial phospholipid transacylase that transfers linoleic acid chains onto immature cardiolipin, creating mature tetralinoleoyl-cardiolipin essential for respiratory chain supercomplex stability.',
          'মাইটোকন্ড্রিয়ার একটি এনজাইম যা অপূর্ণাঙ্গ কার্ডিওলিপিনে লিনোলিক অ্যাসিড যুক্ত করে পরিণত কার্ডিওলিপিন তৈরি করে, যা ইলেকট্রন শ্বসন চেইনের স্থায়িত্বের জন্য অপরিহার্য।'
        ),
      },
      {
        term: l('Ceramide-S1P Rheostat', 'সেরামাইড-S1P ভারসাম্য'),
        definition: l(
          'The intracellular dynamic equilibrium between pro-apoptotic ceramide and pro-survival sphingosine-1-phosphate (S1P) that dictates cellular fate in response to oxidative and inflammatory stress.',
          'কোষের ভেতরে অ্যাপোপটোটিক সেরামাইড এবং জীবনরক্ষাকারী স্ফিংগোসিন-১-ফসফেটের (S1P) মধ্যে গতিশীল ভারসাম্য যা বিভিন্ন চাপের মুখে কোষের বেঁচে থাকা বা মৃত্যু নির্ধারণ করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Biochemical Mechanism of Low-Dose Aspirin Cardioprotection', 'স্বল্পমাত্রার অ্যাসপিরিনের কার্ডিওপ্রোটেকশনের জৈবরাসাযনিক মেকানিজম'),
        steps: [
          l(
            'Platelets express only COX-1, which synthesizes Thromboxane A2 (TXA2), a potent platelet aggregator and vasoconstrictor.',
            'অণুচক্রিকা কেবল COX-1 এনজাইম ধারণ করে, যা রক্ত জমাট বাঁধাইকারী এবং রক্তনালী সংকুচিতকারী থ্রম্বোক্সেন A2 (TXA2) তৈরি করে।'
          ),
          l(
            'Aspirin (acetylsalicylic acid) irreversibly transfers its acetyl group to Ser529 in COX-1, completely blocking the channel.',
            'অ্যাসপিরিন COX-1-এর Ser529 অ্যামিনো অ্যাসিডে তার অ্যাসিটাইল গ্রুপ স্থায়ীভাবে যুক্ত করে চ্যানেলটি বন্ধ করে দেয়।'
          ),
          l(
            'Because circulating platelets lack nuclei and ribosomes, they cannot synthesize new COX-1 protein during their 8–10 day lifespan.',
            'যেহেতু ভাসমান অণুচক্রিকায় নিউক্লিয়াস বা রাইবোজোম থাকে না, তাই তাদের ৮-১০ দিনের আয়ুষ্কালে তারা আর নতুন এনজাইম তৈরি করতে পারে না।'
          ),
          l(
            'Vascular endothelial cells, by contrast, possess active nuclei and can rapidly synthesize replacement COX-1 and COX-2 within hours, preserving Prostacyclin (PGI2) production.',
            'বিপরীতভাবে রক্তনালীর এন্ডোথেলিয়াল কোষে নিউক্লিয়াস থাকায় তারা কয়েক ঘণ্টার মধ্যে নতুন এনজাইম তৈরি করে রক্ত জমাট-প্রতিরোধী প্রোস্টাসাইক্লিন (PGI2) উৎপাদন সচল রাখে।'
          ),
        ],
        conclusion: l(
          'Low-dose aspirin irreversibly suppresses platelet TXA2 while sparing endothelial PGI2 renewal, shifting vascular balance toward antithrombotic protection.',
          'স্বল্পমাত্রার অ্যাসপিরিন অণুচক্রিকার TXA2 স্থায়ীভাবে বন্ধ করে অথচ এন্ডোথেলিয়ামের PGI2 সচল রাখে, যা রক্ত জমাট বাঁধা প্রতিরোধ করে হার্ট অ্যাটাক রোধ করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does selective COX-2 inhibition without COX-1 blockade elevate thrombotic risk?',
          'COX-1 অক্ষত রেখে কেবল সিলেক্টিভ COX-2 বন্ধ করলে কেন রক্ত জমাট বাঁধার ঝুঁকি বেড়ে যায়?'
        ),
        answer: l(
          'Selective COX-2 inhibitors suppress endothelial Prostacyclin (PGI2, an antithrombotic vasodilator) while leaving platelet COX-1-derived Thromboxane A2 (TXA2, a prothrombotic vasoconstrictor) completely uninhibited, causing an unopposed prothrombotic state.',
          'সিলেক্টিভ COX-2 ইনহিবিটরগুলো রক্তনালীর সুরক্ষাকারী প্রোস্টাসাইক্লিন (PGI2) বন্ধ করে দেয় কিন্তু অণুচক্রিকার রক্ত জমাটকারী থ্রম্বোক্সেন A2 (TXA2) সচল রাখে, ফলে রক্ত জমাট বাঁধার ঝুঁকি মারাত্মক বেড়ে যায়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: lipidEicosanoid3DData,
  interactiveDiagram: {
    id: 'complex-lipids-eicosanoids-hub',
    title: l('Interactive Phospholipid, Sphingolipid & Eicosanoid Network', 'ইন্টারেক্টিভ ফসফোলিপিড, স্ফিংগোলিপিড ও আইকোসানয়েড নেটওয়ার্ক'),
    disclaimer: l(
      'Membrane and signaling lipid simulation: select nodes to trace glycerophospholipid synthesis, cardiolipin remodeling, ceramide rheostat, and COX/5-LOX eicosanoid branches.',
      'ঝিল্লি ও সংকেত লিপিড সিমুলেশন: নোড নির্বাচন করে গ্লিসারোফসফোলিপিড সংশ্লেষ, কার্ডিওলিপিন পুনর্গঠন, সেরামাইড ভারসাম্য এবং COX/5-LOX আইকোসানয়েড শাখা পর্যবেক্ষণ করুন।'
    ),
    description: l(
      'Metabolic map detailing the Kennedy CDP-choline pathway, cardiolipin synthesis, ceramide-S1P rheostat, and cPLA2-driven cyclooxygenase and lipoxygenase branches.',
      'বিপাকীয় মানচিত্র যা কেনেডি সিডিপি-কোলিন পথ, কার্ডিওলিপিন সংশ্লেষ, সেরামাইড-S1P ভারসাম্য এবং cPLA2 চালিত সাইক্লোঅক্সিজিনেজ ও লাইপোক্সিজিনেজ শাখা প্রদর্শন করে।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-glycerol3p-pa',
        label: l('1. Glycerol-3-P to Phosphatidate (PA)', '১. গ্লিসারল-৩-ফসফেট থেকে ফসফাটিডেট (PA)'),
        description: l(
          'Glycerol-3-phosphate is sequentially acylated by GPAT and AGPAT at sn-1 and sn-2 using fatty acyl-CoA donors to form phosphatidate.',
          'গ্লিসারল-৩-ফসফেট GPAT ও AGPAT দ্বারা sn-1 এবং sn-2 অবস্থানে ফ্যাটি অ্যাসিড যুক্ত হয়ে ফসফাটিডেট গঠন করে।'
        ),
        details: l(
          'Phosphatidate is the central branching precursor for both triacylglycerols and all glycerophospholipids.',
          'ফসফাটিডেট হলো ট্রাইগ্লিসারাইড এবং সমস্ত গ্লিসারোফসফোলিপিডের কেন্দ্রীয় পূর্বসূরি যৌগ।'
        ),
        sectionId: 'structure',
        color: '#f97316',
      },
      {
        id: 'node-cdp-choline-pc',
        label: l('2. Kennedy CDP-Choline Pathway (PC & PE)', '২. কেনেডি সিডিপি-কোলিন পথ (PC ও PE)'),
        description: l(
          'Choline is phosphorylated and activated with CTP by CCT to CDP-choline, which couples with DAG to yield phosphatidylcholine (lecithin).',
          'কোলিন ফসফরাইলেটেড হয়ে CCT দ্বারা সিডিপি-কোলিনে সক্রিয় হয় এবং DAG-এর সাথে যুক্ত হয়ে ফসফাটিডাইলকোলিন তৈরি করে।'
        ),
        details: l(
          'Rate-limiting step is catalyzed by CTP:phosphocholine cytidylyltransferase (CCT), sensitive to membrane PC:PE ratio.',
          'হার-নিয়ন্ত্রক ধাপটি CCT এনজাইম দ্বারা সম্পন্ন হয় যা ঝিল্লির লিপিড অনুপাত দ্বারা নিয়ন্ত্রিত।'
        ),
        sectionId: 'structure',
        color: '#eab308',
      },
      {
        id: 'node-cardiolipin-taz',
        label: l('3. Mitochondrial Cardiolipin & Tafazzin', '৩. মাইটোকন্ড্রিয়াল কার্ডিওলিপিন ও ট্যাফাজিন'),
        description: l(
          'CDP-DAG condenses with phosphatidylglycerol to form cardiolipin, remodeled by tafazzin (TAZ) with tetralinoleoyl chains.',
          'সিডিপি-ডাইঅ্যাসাইলগ্লিসারল ফসফাটিডাইলগ্লিসারলের সাথে যুক্ত হয়ে কার্ডিওলিপিন তৈরি করে যা ট্যাফাজিন দ্বারা টেট্রালিনোলিয়ল সমৃদ্ধ হয়।'
        ),
        details: l(
          'Defects in tafazzin cause Barth syndrome with dilated cardiomyopathy and destabilized respiratory supercomplexes.',
          'ট্যাফাজিনের ত্রুটি বার্থ সিন্ড্রোম ঘটায় যেখানে শ্বসন চেইন ভেঙে মারাত্মক কার্ডিওমায়োপ্যাথি দেখা দেয়।'
        ),
        sectionId: 'structure',
        color: '#22c55e',
      },
      {
        id: 'node-serine-palmitoyl-ceramide',
        label: l('4. De Novo Ceramide Synthesis (SPT Complex)', '৪. ডি নোভো সেরামাইড সংশ্লেষ (SPT কমপ্লেক্স)'),
        description: l(
          'Serine palmitoyltransferase (SPT) condenses L-serine and palmitoyl-CoA to initiate de novo sphingolipid synthesis.',
          'সেরিন প্যালমিটয়াইলট্রান্সফারেজ (SPT) এল-সেরিন এবং প্যালমিটয়াইল-কোএ যুক্ত করে স্ফিংগোলিপিড সংশ্লেষণ শুরু করে।'
        ),
        details: l(
          'Subsequent reduction and N-acylation yield dihydroceramide, desaturated by DEGS1 into bioactive ceramide.',
          'পরবর্তী বিজারণ ও অ্যাসাইলেশনের মাধ্যমে ডাইহাইড্রোসেরামাইড তৈরি হয় যা জারিত হয়ে সক্রিয় সেরামাইড গঠন করে।'
        ),
        sectionId: 'mechanism',
        color: '#3b82f6',
      },
      {
        id: 'node-sphingomyelin-s1p',
        label: l('5. Sphingomyelin & S1P Signaling Rheostat', '৫. স্ফিংগোমায়েলিন ও S1P সংকেত ভারসাম্য'),
        description: l(
          'Ceramide converts to sphingomyelin or is cleaved into sphingosine, phosphorylated by SphK into sphingosine-1-phosphate (S1P).',
          'সেরামাইড গলজি বডিতে স্ফিংগোমায়েলিন তৈরি করে অথবা ভেঙে স্ফিংগোসিন-১-ফসফেটে (S1P) রূপান্তরিত হয়।'
        ),
        details: l(
          'Ceramide triggers apoptosis whereas S1P promotes cellular survival and endothelial vascular barrier integrity.',
          'সেরামাইড কোষের মৃত্যু ঘটায় আর S1P কোষের বৃদ্ধি ও রক্তনালীর প্রাচীরের অখণ্ডতা নিশ্চিত করে।'
        ),
        sectionId: 'mechanism',
        color: '#8b5cf6',
      },
      {
        id: 'node-cpla2-arachidonate',
        label: l('6. Membrane Cleavage by Cytosolic PLA2', '৬. সাইটোসোলিক PLA2 দ্বারা ঝিল্লি বিভাজন'),
        description: l(
          'Intracellular calcium activates cPLA2alpha, cleaving arachidonic acid (20:4) from the sn-2 position of membrane phospholipids.',
          'কোষে ক্যালসিয়ামের প্রবেশ cPLA2-কে সক্রিয় করে যা ঝিল্লির sn-2 অবস্থান থেকে অ্যারাকিডোনিক অ্যাসিড মুক্ত করে।'
        ),
        details: l(
          'Liberated arachidonic acid feeds directly into both cyclooxygenase (COX) and lipoxygenase (5-LOX) cascades.',
          'মুক্ত অ্যারাকিডোনিক অ্যাসিড সরাসরি সাইক্লোঅক্সিজিনেজ এবং লাইপোক্সিজিনেজ উভয় ক্যাসকেডে প্রবেশ করে।'
        ),
        sectionId: 'integration',
        color: '#ec4899',
      },
      {
        id: 'node-cox12-prostanoids',
        label: l('7. COX-1/COX-2 Prostanoid Cascade', '৭. COX-1/COX-2 প্রোস্টানয়েড ক্যাসকেড'),
        description: l(
          'COX enzymes convert arachidonate to PGG2 and PGH2, isomerized to platelet TXA2 or endothelial PGI2.',
          'COX এনজাইম অ্যারাকিডোনিক অ্যাসিডকে PGH2-তে পরিণত করে যা অণুচক্রিকায় TXA2 এবং এন্ডোথেলিয়ামে PGI2 উৎপন্ন করে।'
        ),
        details: l(
          'Aspirin irreversibly acetylates COX-1 Ser529, providing selective long-lasting antiplatelet cardioprotection.',
          'অ্যাসপিরিন COX-1-কে স্থায়ীভাবে অ্যাসিটাইলেটেড করে রক্ত জমাট বাঁধা প্রতিরোধ করে হৃদযন্ত্র সুরক্ষিত রাখে।'
        ),
        sectionId: 'integration',
        color: '#ef4444',
      },
      {
        id: 'node-5lox-leukotrienes',
        label: l('8. 5-Lipoxygenase & Leukotriene Biosynthesis', '৮. ৫-লাইপোক্সিজিনেজ ও লিউকোট্রিন সংশ্লেষ'),
        description: l(
          '5-LOX and FLAP convert arachidonate into LTA4, processed into chemoattractant LTB4 or cysteinyl leukotrienes (LTC4/D4/E4).',
          '5-LOX ও FLAP অ্যারাকিডোনিক অ্যাসিডকে LTA4-এ পরিণত করে যা পরবর্তীতে ব্রঙ্কোকনস্ট্রিক্টর লিউকোট্রিনে রূপান্তরিত হয়।'
        ),
        details: l(
          'Cysteinyl leukotrienes bind CysLT1 receptors causing asthma bronchospasm; blocked therapeutically by montelukast.',
          'সিস্টিনাইল লিউকোট্রিন শ্বাসনালীর সংকোচন ঘটিয়ে হাঁপানি তৈরি করে, যা মন্টেলুকাস্ট ওষুধ দ্বারা কার্যকরভাবে অবরুদ্ধ হয়।'
        ),
        sectionId: 'integration',
        color: '#06b6d4',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'Biochemical circuit diagram tracing the Kennedy CDP-choline pathway, mitochondrial cardiolipin remodeling by tafazzin, sphingolipid ceramide-S1P rheostat, and cPLA2-driven COX and 5-LOX cascades.',
      'কেনেডি সিডিপি-কোলিন পথ, ট্যাফাজিন দ্বারা মাইটোকন্ড্রিয়াল কার্ডিওলিপিন পুনর্গঠন, স্ফিংগোলিপিড সেরামাইড-S1P ভারসাম্য এবং cPLA2 চালিত COX ও 5-LOX ক্যাসকেড প্রদর্শনকারী সমন্বিত জৈবরাসায়নিক বর্তনী মানচিত্র।'
    ),
    steps: [
      l(
        'Step 1: Kennedy pathway synthesizes phosphatidylcholine via cytidine activation; mitochondrial cardiolipin is remodeled by tafazzin to tetralinoleoyl species.',
        'ধাপ ১: কেনেডি পথ সিডিআইপি সক্রিয়করণের মাধ্যমে ফসফাটিডাইলকোলিন তৈরি করে; ট্যাফাজিন কার্ডিওলিপিনকে টেট্রালিনোলয়িল রূপে পুনর্গঠন করে।'
      ),
      l(
        'Step 2: Ceramide synthesis balances pro-apoptotic ceramide against pro-survival sphingosine-1-phosphate (S1P) in the sphingolipid rheostat.',
        'ধাপ ২: স্ফিংগোলিপিড ভারসাম্যে অ্যাপোপটোটিক সেরামাইড এবং কোষ-রক্ষাকারী স্ফিংগোসিন-১-ফসফেটের (S1P) অনুপাত কোষের বেঁচে থাকা নির্ধারণ করে।'
      ),
      l(
        'Step 3: cPLA2 cleaves arachidonic acid; COX-1/2 generates prostanoids (TXA2 vs PGI2) while 5-LOX generates inflammatory leukotrienes.',
        'ধাপ ৩: cPLA2 অ্যারাকিডোনিক অ্যাসিড মুক্ত করে; COX এনজাইম প্রোস্টানয়েড তৈরি করে এবং 5-LOX শ্বাসনালীর প্রদাহজনক লিউকোট্রিন উৎপন্ন করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 62-year-old male with a history of acute coronary syndrome is prescribed daily low-dose aspirin (81 mg) for secondary prevention. What is the precise molecular mechanism by which aspirin achieves prolonged antithrombotic cardioprotection while largely sparing vascular endothelial prostacyclin synthesis over repeated dosing?',
      'তীব্র করোনারি সিন্ড্রোমে আক্রান্ত ৬২ বছর বয়সী এক রোগীকে হার্ট অ্যাটাক পরবর্তী সুরক্ষার জন্য দৈনিক স্বল্প মাত্রার অ্যাসপিরিন (৮১ মিলিগ্রাম) দেওয়া হলো। কোন সুনির্দিষ্ট আণবিক পদ্ধতিতে অ্যাসপিরিন ভাস্কুলার এন্ডোথেলিয়ামের সুরক্ষাকারী প্রোস্টাসাইক্লিন বজায় রেখেও দীর্ঘস্থায়ী রক্ত জমাট-প্রতিরোধী সুরক্ষা প্রদান করে?'
    ),
    options: [
      l(
        'Reversible competitive antagonism of thromboxane TP receptors on platelet membranes.',
        'অণুচক্রিকার ঝিল্লিতে থ্রম্বোক্সেন টিপি রিসেপ্টরের বিপরীতমুখী প্রতিযোগিতামূলক বিরোধিতা।'
      ),
      l(
        'Irreversible acetylation of platelet COX-1 Ser529 in anucleate cells; platelets cannot resynthesize COX-1 for their remaining lifespan, while nucleated endothelial cells rapidly resynthesize COX enzymes to maintain PGI2 synthesis.',
        'নিউক্লিয়াসবিহীন অণুচক্রিকার COX-1 Ser529 অবশিষ্টাংশের অপরিবর্তনীয় অ্যাসিটাইলেশন; অণুচক্রিকা তাদের বাকি ৮-১০ দিনের আয়ুষ্কালে নতুন COX-1 তৈরি করতে পারে না, অথচ নিউক্লিয়াসযুক্ত এন্ডোথেলিয়াল কোষ দ্রুত নতুন COX এনজাইম তৈরি করে সুরক্ষাকারী PGI2 বজায় রাখে।'
      ),
      l(
        'Selective allosteric activation of endothelial prostacyclin synthase.',
        'এন্ডোথেলিয়াল প্রোস্টাসাইক্লিন সিন্থেসের নির্বাচনী অ্যালবস্টেরিক সক্রিয়করণ।'
      ),
      l(
        'Direct covalent inhibition of cytosolic phospholipase A2 (cPLA2).',
        'সাইটোসোলিক ফসফোলাইপেজ A2 (cPLA2) এনজাইমের সরাসরি কোভ্যালেন্ট বাধা।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'Aspirin covalently acetylates Ser529 in the substrate channel of COX-1, irreversibly blocking arachidonate binding. Because circulating platelets are anucleate fragments, they lack ribosomal protein synthesis machinery and cannot replace inactivated COX-1, resulting in permanent suppression of prothrombotic TXA2 for their 8-10 day lifespan. In contrast, vascular endothelial cells possess intact nuclei and ribosomes, allowing rapid de novo synthesis of fresh COX-1 and COX-2 within hours to preserve antithrombotic and vasodilatory PGI2 synthesis.',
      'অ্যাসপিরিন COX-1 এর সাবস্ট্রেট চ্যানেলের Ser529 অবশিষ্টাংশকে কোভ্যালেন্টভাবে অ্যাসিটাইলেট করে অ্যারাকিডোনিক অ্যাসিড সংযোগ স্থায়ীভাবে বন্ধ করে দেয়। রক্তে ভাসমান অণুচক্রিকায় নিউক্লিয়াস বা রাইবোজোম না থাকায় তারা নতুন এনজাইম তৈরি করতে পারে না, ফলে তাদের সম্পূর্ণ ৮-১০ দিনের আয়ুষ্কালে রক্ত জমাটকারী TXA2 বন্ধ থাকে। বিপরীতে এন্ডোথেলিয়াল কোষে নিউক্লিয়াস থাকায় তারা কয়েক ঘণ্টার মধ্যে নতুন COX এনজাইম তৈরি করে সুরক্ষাকারী PGI2 উৎপাদন সচল রাখে।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Architecture of Cell Membranes & Signaling Lipids', 'কোষঝিল্লির গঠন ও সংকেতবাহী লিপিড'),
          paragraphs: [
            l(
              'Biological membranes are dynamic fluid mosaics built primarily of complex lipids: glycerophospholipids, sphingolipids, and cholesterol. While triacylglycerols serve as inert chemical fuel stores inside adipose droplets, complex lipids possess amphipathic polar head groups that face the aqueous cytosol and extracellular fluid, creating an impermeable hydrophobic core that separates cellular compartments.',
              'জৈব কোষঝিল্লি হলো গতিশীল ফ্লুইড মোজাইক যা মূলত জটিল লিপিড—গ্লিসারোফসফোলিপিড, স্ফিংগোলিপিড এবং কোলেস্টেরল দ্বারা গঠিত। অ্যাডিপোজ কলায় সঞ্চিত ট্রাইগ্লিসারাইড যেখানে নিষ্ক্রিয় জ্বালানি হিসেবে থাকে, সেখানে জটিল লিপিডগুলোর মেরুযুক্ত অংশ পানির দিকে এবং তেলযুক্ত অংশ ভেতরে মুখ করে একটি অভেদ্য ঝিল্লি প্রাচীর গড়ে তোলে যা কোষের ভেতরের পরিবেশকে রক্ষা করে।'
            ),
            l(
              'Beyond their indispensable architectural function, complex lipids act as primary reservoirs for signaling molecules. When cells are stimulated by hormones, growth factors, or tissue trauma, specific phospholipases cleave fatty acids and phosphorylated head groups from the membrane, unleashing cascades of rapid intercellular messengers known as eicosanoids that orchestrate inflammation, blood clotting, and pain sensation.',
              'শুধু কোষের গাঠনিক ভিত্তি নির্মাণই নয়, জটিল লিপিডগুলো বিভিন্ন জৈব সংকেত অণুর বিশাল ভাণ্ডার হিসেবে কাজ করে। হরমোন, গ্রোথ ফ্যাক্টর বা আঘাতের সংকেত পেলে বিশেষ ফসফোলাইপেজ এনজাইম এই ঝিল্লি থেকে ফ্যাটি অ্যাসিড কেটে বের করে আনে, যা মুহূর্তের মধ্যে আইকোসানয়েড নামক দ্রুত সংকেতবাহী বার্তায় রূপান্তরিত হয়ে প্রদাহ, রক্ত জমাট বাঁধা এবং ব্যথার অনুভূতি নিয়ন্ত্রণ করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Families of Complex Lipids: Glycerophospholipids & Sphingolipids', 'জটিল লিপিডের পরিবার: গ্লিসারোফসফোলিপিড ও স্ফিংগোলিপিড'),
          paragraphs: [
            l(
              'Glycerophospholipids consist of a three-carbon glycerol backbone esterified to two fatty acids at the sn-1 and sn-2 positions and a phosphate group esterified to an amino alcohol at the sn-3 position. The most abundant varieties include phosphatidylcholine (lecithin), phosphatidylethanolamine, phosphatidylserine, and phosphatidylinositol, each imparting distinct surface charge and protein-docking characteristics to the membrane bilayer.',
              'গ্লিসারোফসফোলিপিড গঠিত হয় তিন কার্বনের গ্লিসারল কাঠামো দিয়ে, যার sn-1 এবং sn-2 অবস্থানে দুটি ফ্যাটি অ্যাসিড এবং sn-3 অবস্থানে ফসফেটসহ অ্যামিনো অ্যালকোহল যুক্ত থাকে। এর মধ্যে সর্বাধিক প্রাপ্ত রূপগুলো হলো ফসফাটিডাইলকোলিন (লেসিথিন), ফসফাটিডাইলইথানলঅ্যামাইন, ফসফাটিডাইলসেরিন এবং ফসফাটিডাইলইনোসিটল, যা ঝিল্লির তড়িৎ আধান এবং প্রোটিন যুক্ত করার বৈশিষ্ট্য নির্ধারণ করে।'
            ),
            l(
              'Sphingolipids, by contrast, lack a glycerol core. They are constructed upon sphingosine, an eighteen-carbon amino alcohol backbone synthesized from the condensation of palmitoyl-CoA and the amino acid L-serine. When a fatty acid is attached via an amide linkage to the sphingosine amino nitrogen, the fundamental building block ceramide is formed, serving as the hydrophobic parent molecule for sphingomyelin and glycosphingolipids.',
              'বিপরীতভাবে স্ফিংগোলিপিডে কোনো গ্লিসারল কাঠামো থাকে না। এগুলো নির্মিত হয় স্ফিংগোসিন নামক ১৮-কার্বনের অ্যামিনো অ্যালকোহল দিয়ে, যা প্যালমিটয়াইল-কোএ এবং এল-সেরিন অ্যামিনো অ্যাসিডের মিলনে তৈরি হয়। এই স্ফিংগোসিনের অ্যামিনো গ্রুপের সাথে অ্যামাইড বন্ধন দ্বারা একটি ফ্যাটি অ্যাসিড যুক্ত হলে তৈরি হয় সেরামাইড, যা স্ফিংগোমায়েলিন ও অন্যান্য জটিল লিপিডের মূল ভিত্তি হিসেবে কাজ করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Eicosanoid Cascade: Prostaglandins, Thromboxanes & Leukotrienes', 'আইকোসানয়েড ক্যাসকেড: প্রোস্টাগ্ল্যান্ডিন, থ্রম্বোক্সেন ও লিউকোট্রিন'),
          paragraphs: [
            l(
              'Eicosanoids are twenty-carbon bioactive signaling lipids derived primarily from arachidonic acid (an omega-6 polyunsaturated fatty acid with four double bonds). Upon cellular activation, cytosolic phospholipase A2 (cPLA2) liberates arachidonic acid from membrane phospholipids. The free fatty acid is rapidly oxygenated through either the cyclooxygenase (COX) pathway to produce prostaglandins and thromboxanes, or the lipoxygenase (5-LOX) pathway to produce leukotrienes.',
              'আইকোসানয়েড হলো ২০-কার্বনের অত্যন্ত সক্রিয় সংকেতবাহী লিপিড যা মূলত অ্যারাকিডোনিক অ্যাসিড (চারটি দ্বিবন্ধনযুক্ত ওমেগা-৬ ফ্যাটি অ্যাসিড) থেকে তৈরি হয়। কোষ উদ্দীপিত হলে সাইটোসোলিক ফসফোলাইপেজ A2 (cPLA2) ঝিল্লি থেকে অ্যারাকিডোনিক অ্যাসিড মুক্ত করে। এরপর সাইক্লোঅক্সিজিনেজ (COX) এনজাইম দ্বারা প্রোস্টাগ্ল্যান্ডিন ও থ্রম্বোক্সেন এবং লাইপোক্সিজিনেজ (5-LOX) দ্বারা লিউকোট্রিন তৈরি হয়।'
            ),
            l(
              'These lipid autacoids act locally in an autocrine and paracrine manner with extremely brief half-lives (seconds to minutes). Thromboxane A2 from platelets triggers vasoconstriction and clot formation, while prostacyclin from endothelial cells promotes vasodilation and keeps blood vessels patent. In the lungs, cysteinyl leukotrienes cause profound smooth muscle constriction and inflammatory exudation characteristic of bronchial asthma.',
              'এই লিপিড মেসেঞ্জারগুলো অত্যন্ত স্বল্পস্থায়ী (কয়েক সেকেন্ড থেকে মিনিট) এবং নিকটবর্তী কোষে সংকেত পাঠায়। অণুচক্রিকার থ্রম্বোক্সেন A2 রক্তনালী সংকুচিত করে রক্ত জমাট বাঁধায়, পক্ষান্তরে এন্ডোথেলিয়ামের প্রোস্টাসাইক্লিন রক্তনালী প্রসারিত করে রক্তপ্রবাহ সচল রাখে। ফুসফুসে সিস্টিনাইল লিউকোট্রিন শ্বাসনালীর তীব্র সংকোচন ঘটিয়ে হাঁপানির মারাত্মক শ্বাসকষ্ট সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Aspirin, NSAIDs & the Pharmacological Control of Pain and Inflammation', 'অ্যাসপিরিন, এনএসএআইডি এবং ব্যথা ও প্রদাহের ফার্মাকোলজিক্যাল নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Nonsteroidal anti-inflammatory drugs (NSAIDs) such as ibuprofen, naproxen, and indomethacin function by reversibly occupying the hydrophobic substrate channel of cyclooxygenase enzymes (COX-1 and COX-2), physically preventing arachidonic acid from accessing the catalytic tyrosine and heme pocket. By suppressing prostaglandin E2 (PGE2) synthesis, these medications relieve fever, pain, and inflammatory swelling.',
              'আইবুপ্রোফেন, ন্যাপ্রোক্সেন এবং ইন্ডোমিথাসিনের মতো নন-স্টেরয়েডাল অ্যান্টি-ইনফ্ল্যামেটরি ড্রাগগুলো (NSAID) সাইক্লোঅক্সিজিনেজ (COX-1 ও COX-2) এনজাইমের সক্রিয় পকেটে বাধা সৃষ্টি করে অ্যারাকিডোনিক অ্যাসিড প্রবেশ করতে দেয় না। এর ফলে প্রোস্টাগ্ল্যান্ডিন E2 (PGE2) তৈরি বন্ধ হয়ে যায় এবং রোগীর জ্বর, ব্যথা ও প্রদাহজনিত ফোলাভাব দ্রুত উপশম হয়।'
            ),
            l(
              'Aspirin (acetylsalicylic acid) operates through a distinct irreversible mechanism: it covalently acetylates a specific serine residue (Ser529 in COX-1, Ser516 in COX-2) within the catalytic channel, permanently inactivating the enzyme. Because blood platelets lack nuclei and ribosomes, they cannot synthesize replacement enzymes, rendering daily low-dose aspirin a cornerstone antiplatelet therapy for preventing myocardial infarction and stroke.',
              'অ্যাসপিরিন একটি বিশেষ অপরিবর্তনীয় পদ্ধতিতে কাজ করে: এটি এনজাইমের ক্যাটালাইটিক চ্যানেলের সুনির্দিষ্ট সেরিন অ্যামিনো অ্যাসিডকে স্থায়ীভাবে অ্যাসিটাইলেটেড করে নিষ্ক্রিয় করে দেয়। রক্তে ভাসমান অণুচক্রিকায় নিউক্লিয়াস ও রাইবোজোম না থাকায় তারা নতুন এনজাইম তৈরি করতে পারে না; ফলে দৈনিক স্বল্প মাত্রার অ্যাসপিরিন হার্ট অ্যাটাক ও স্ট্রোক প্রতিরোধে বিশ্বব্যাপী অপরিহার্য ওষুধ হিসেবে ব্যবহৃত হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Dietary Omega-3 Fatty Acids & Resolution of Inflammation', 'খাদ্যের ওমেগা-৩ ফ্যাটি অ্যাসিড ও প্রদাহ প্রশমন'),
          paragraphs: [
            l(
              'Dietary consumption of long-chain omega-3 polyunsaturated fatty acids, particularly eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) found in cold-water fatty fish, directly competes with omega-6 arachidonic acid for incorporation into membrane phospholipids. When cleaved by phospholipases, EPA is converted by COX and LOX enzymes into 3-series prostaglandins and 5-series leukotrienes, which exhibit markedly attenuated inflammatory potency compared to their 2-series and 4-series counterparts.',
              'তৈলাক্ত সামুদ্রিক মাছে প্রাপ্ত ওমেগা-৩ ফ্যাটি অ্যাসিড, বিশেষ করে EPA ও DHA, কোষঝিল্লিতে স্থান পাওয়ার জন্য ক্ষতিকর ওমেগা-৬ অ্যারাকিডোনিক অ্যাসিডের সাথে তীব্র প্রতিযোগিতা করে। ফসফোলাইপেজ দ্বারা মুক্ত হলে EPA থেকে ৩-সিরিজের প্রোস্টাগ্ল্যান্ডিন ও ৫-সিরিজের লিউকোট্রিন তৈরি হয়, যা সাধারণ অ্যারাকিডোনিক অ্যাসিডের তুলনায় বহুগুণ কম প্রদাহজনক ও নিরাপদ।'
            ),
            l(
              'Furthermore, EPA and DHA serve as exclusive biochemical precursors for specialized pro-resolving mediators (SPMs) known as resolvins, protectins, and maresins. These bioactive lipids actively terminate acute inflammatory responses by halting neutrophil recruitment, stimulating non-phlogistic clearance of apoptotic debris by macrophages, and accelerating tissue regeneration without inducing immunosuppression.',
              'তদুপরি EPA এবং DHA বিশেষ প্রদাহ-প্রশমনকারী লিপিড যেমন রিজলভিন, প্রোটেকটিন ও মেরিসিনের একমাত্র উৎস। এই জৈব লিপিডগুলো নিউট্রোফিলের অনুপ্রবেশ থামিয়ে এবং ম্যাক্রোফেজ দ্বারা ক্ষতিকর জীবাণু ও মৃত কোষ পরিষ্কার করিয়ে প্রদাহের কার্যকর সমাপ্তি ঘটায় এবং রোগ প্রতিরোধ ক্ষমতা নষ্ট না করেই দ্রুত টিস্যু নিরাময় নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Principles of Complex Lipid Biology', 'জটিল লিপিড বিজ্ঞানের মূল শিক্ষণীয় বিষয়'),
          paragraphs: [
            l(
              'Complex lipids are dual-function molecules that establish physical cellular boundaries and serve as on-demand precursors for potent endocrine and paracrine mediators. Maintaining the balance between inflammatory omega-6 derivatives and resolving omega-3 mediators, alongside intact lysosomal clearance of sphingolipids, is indispensable for cardiovascular integrity, neuroprotection, and systemic health.',
              'জটিল লিপিড হলো দ্বৈত ভূমিকার অণু যা কোষের ভৌত প্রাচীর রক্ষা করে এবং প্রয়োজনে অতি শক্তিশালী সংকেতবাহী বার্তাবাহক তৈরি করে। প্রদাহজনক ওমেগা-৬ এবং নিরাময়কারী ওমেগা-৩ অণুর ভারসাম্য বজায় রাখা এবং স্ফিংগোলিপিডের সঠিক বিপাক নিশ্চিত করা কার্ডিওভাসকুলার সুস্থতা, স্নায়ু সুরক্ষা এবং সামগ্রিক স্বাস্থ্যের জন্য একান্ত অপরিহার্য।'
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
          heading: l('Thermodynamics & Enzymology of Glycerophospholipid Biosynthesis', 'গ্লিসারোফসফোলিপিড জৈবসংশ্লেষণের তাপগতিবিদ্যা ও এনজাইমবিজ্ঞান'),
          paragraphs: [
            l(
              'The biosynthesis of glycerophospholipids begins at the cytosolic leaflet of the endoplasmic reticulum membrane with the de novo acylation of glycerol-3-phosphate. Glycerol-3-phosphate acyltransferase (GPAT) transfers a saturated fatty acyl moiety (predominantly palmitoyl-CoA or stearoyl-CoA) to the sn-1 position, generating lysophosphatidic acid. Acylglycerol-3-phosphate acyltransferase (AGPAT) subsequently incorporates an unsaturated acyl group (such as oleoyl-CoA or arachidonoyl-CoA) at the sn-2 position to yield phosphatidic acid (PA).',
              'গ্লিসারোফসফোলিপিডের সংশ্লেষণ শুরু হয় এন্ডোপ্লাজমিক রেটিকুলাম ঝিল্লিতে গ্লিসারল-৩-ফসফেটের ডি নোভো অ্যাসাইলেশনের মাধ্যমে। GPAT এনজাইম sn-1 অবস্থানে একটি সম্পৃক্ত ফ্যাটি অ্যাসিড যুক্ত করে লাইসোফসফাটিডিক অ্যাসিড তৈরি করে। এরপর AGPAT এনজাইম sn-2 অবস্থানে অসম্পৃক্ত ফ্যাটি অ্যাসিড যুক্ত করে ফসফাটিডিক অ্যাসিড (PA) গঠন করে যা সকল ফসফোলিপিডের কেন্দ্রীয় ভিত্তি।'
            ),
            l(
              'From phosphatidic acid, the pathway branches depending on cytidine nucleotide activation. To form phosphatidylcholine (PC) and phosphatidylethanolamine (PE), phosphatidate phosphatase (lipin) dephosphorylates PA into sn-1,2-diacylglycerol (DAG). The polar head groups choline and ethanolamine are phosphorylated and coupled to cytidine triphosphate (CTP) via the Kennedy pathway to form CDP-choline and CDP-ethanolamine, which transfer their phosphobase moieties to DAG, releasing cytidine monophosphate (CMP).',
              'ফসফাটিডিক অ্যাসিড থেকে পথটি সাইটিডিন নিউক্লিওটাইডের সক্রিয়তার ওপর ভিত্তি করে বিভিন্ন শাখায় বিভক্ত হয়। PC ও PE তৈরির জন্য লিপিন এনজাইম PA থেকে ফসফেট সরিয়ে ডাইঅ্যাসাইলগ্লিসারল (DAG) তৈরি করে। এরপর কোলিন ও ইথানলঅ্যামাইন CTP দ্বারা সক্রিয় হয়ে সিডিপি-কোলিন ও সিডিপি-ইথানলঅ্যামাইন গঠন করে, যা DAG-এর সাথে যুক্ত হয়ে PC ও PE উৎপন্ন করে এবং CMP মুক্ত করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Cardiolipin Biosynthesis, Tafazzin Transacylation & Mitochondrial Supercomplexes', 'কার্ডিওলিপিন সংশ্লেষ, ট্যাফাজিন ট্রান্সঅ্যাসাইলেশন ও মাইটোকন্ড্রিয়াল সুপারকমপ্লেক্স'),
          paragraphs: [
            l(
              'Cardiolipin (diphosphatidylglycerol) is a unique dimeric glycerophospholipid restricted to the inner mitochondrial membrane, comprising four acyl chains linked to three glycerol molecules and two bridging phosphate groups. Biosynthesis proceeds via the condensation of CDP-diacylglycerol with phosphatidylglycerol catalyzed by cardiolipin synthase (CRLS1) on the matrix-facing side of the inner membrane.',
              'কার্ডিওলিপিন (ডাইফসফাটিডাইলগ্লিসারল) হলো একটি অনন্য দ্বৈত-গঠনের ফসফোলিপিড যা কেবল মাইটোকন্ড্রিয়ার অন্তর্বর্তী ঝিল্লিতে অবস্থান করে। এতে চারটি ফ্যাটি অ্যাসিড শিকল, তিনটি গ্লিসারল অণু এবং দুটি ফসফেট গ্রুপ যুক্ত থাকে। অন্তর্বর্তী ঝিল্লির কার্ডিওলিপিন সিন্থেস (CRLS1) এনজাইম দ্বারা সিডিপি-ডাইঅ্যাসাইলগ্লিসারল এবং ফসফাটিডাইলগ্লিসারলের ঘনীভবনের মাধ্যমে এটি প্রাথমিকভাবে গঠিত হয়।'
            ),
            l(
              'Nascent cardiolipin contains heterogeneous, saturated acyl chains and must undergo enzymatic remodeling to achieve functional maturity. The mitochondrial phospholipid transacylase tafazzin (TAZ) transfers linoleoyl moieties (18:2, omega-6) from phosphatidylcholine to cardiolipin, generating symmetric tetralinoleoyl-cardiolipin. This specific molecular geometry creates negative membrane curvature, binds cytochrome c, and physically stabilizes respiratory chain supercomplexes (respirasomes I-III-IV). In Barth syndrome (TAZ loss-of-function), lack of mature cardiolipin destabilizes respirasomes, triggering fatal dilated cardiomyopathy and cyclic neutropenia.',
              'নবগঠিত কার্ডিওলিপিনে অসম ফ্যাটি অ্যাসিড থাকে যা ট্যাফাজিন (TAZ) এনজাইম দ্বারা পুনর্গঠিত হয়ে টেট্রালিনোলিয়ল-কার্ডিওলিপিনে রূপান্তরিত হয়। এই সুনির্দিষ্ট চতুষ্কোণ গঠন ঝিল্লির বক্রতা তৈরি করে, সাইটোক্রোম সি-কে ধরে রাখে এবং ইলেকট্রন শ্বসন সুপারকমপ্লেক্সকে সুদৃঢ়ভাবে ধরে রাখে। বার্থ সিন্ড্রোমে ট্যাফাজিনের ত্রুটির কারণে কার্ডিওলিপিন গঠিত হতে পারে না, যার ফলে শ্বসন চেইন ভেঙে মারাত্মক কার্ডিওমায়োপ্যাথি ও রক্তের শ্বেতকণিকা হ্রাস পায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Sphingolipid Pathway: Serine Palmitoyltransferase to the Ceramide-S1P Rheostat', 'স্ফিংগোলিপিড পথ: সেরিন প্যালমিটয়াইলট্রান্সফারেজ থেকে সেরামাইড-S1P ভারসাম্য'),
          paragraphs: [
            l(
              'De novo sphingolipid synthesis initiates on the cytosolic face of the ER. Serine palmitoyltransferase (SPT) catalyzes the pyridoxal phosphate (PLP)-dependent condensation of L-serine with palmitoyl-CoA, producing 3-ketodihydrosphingosine with the stoichiometric release of CO2 and CoASH. 3-Ketodihydrosphingosine reductase then utilizes NADPH to form sphinganine (dihydrosphingosine).',
              'ডি নোভো স্ফিংগোলিপিড সংশ্লেষণ এন্ডোপ্লাজমিক রেটিকুলামের সাইটোসোলিক তলে শুরু হয়। সেরিন প্যালমিটয়াইলট্রান্সফারেজ (SPT) পিএলপি কোফ্যাক্টরের উপস্থিতিতে এল-সেরিন ও প্যালমিটয়াইল-কোএ যুক্ত করে ৩-কিটোডাইহাইড্রোস্ফিংগোসিন তৈরি করে এবং কার্বন ডাই-অক্সাইড মুক্ত করে। এরপর NADPH সহযোগে রিডাক্টেজ এনজাইম এটিকে স্ফিংগানিনে রূপান্তরিত করে।'
            ),
            l(
              'Ceramide synthases (CerS1 through CerS6) attach fatty acids of defined chain lengths (C14 to C26) via an amide linkage to generate dihydroceramide, which dihydroceramide desaturase 1 (DEGS1) oxidizes into ceramide by introducing a trans-4,5 double bond. Ceramide is either converted into sphingomyelin by sphingomyelin synthase in the Golgi, glycosylated into cerebrosides and complex gangliosides, or cleaved by ceramidase into sphingosine. Phosphorylation of sphingosine by sphingosine kinase (SphK1/2) yields sphingosine-1-phosphate (S1P), establishing the vital ceramide:S1P rheostat balancing apoptosis against survival.',
              'CerS1 থেকে CerS6 এনজাইম বিভিন্ন দৈর্ঘ্যের ফ্যাটি অ্যাসিড যুক্ত করে ডাইহাইড্রোসেরামাইড বানায়, যা DEGS1 এনজাইম দ্বারা জারিত হয়ে ট্র্যান্স-৪,৫ দ্বিবন্ধনযুক্ত সেরামাইডে পরিণত হয়। সেরামাইড গলজি বডিতে স্ফিংগোমায়েলিন বা গ্যাংগ্লিওসাইডে রূপান্তরিত হতে পারে অথবা স্ফিংগোসিন কাইনেজ দ্বারা S1P-তে পরিণত হয়। সেরামাইড কোষের মৃত্যু ঘটায় আর S1P কোষের বৃদ্ধি ও সুরক্ষা নিশ্চিত করে—এই ভারসাম্যই কোষের জীবন-মৃত্যু নির্ধারণ করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Enzymology of the Cyclooxygenase & 5-Lipoxygenase Pathways', 'সাইক্লোঅক্সিজিনেজ ও ৫-লাইপোক্সিজিনেজ পথের এনজাইমবিজ্ঞান'),
          paragraphs: [
            l(
              'The conversion of arachidonic acid to prostanoids is executed by prostaglandin endoperoxide H synthase (PGHS/COX), a bifunctional homodimeric hemoprotein embedded in the luminal leaflet of the ER and nuclear envelope. The cyclooxygenase active site abstracts the 13-pro-S hydrogen from arachidonate via a tyrosyl radical (Tyr385), incorporating two molecules of molecular oxygen to generate bicyclic prostaglandin G2 (PGG2). The adjacent peroxidase site utilizes two electrons from reducing cofactors to reduce the 15-hydroperoxyl group of PGG2 to the 15-hydroxyl group of prostaglandin H2 (PGH2).',
              'অ্যারাকিডোনিক অ্যাসিডকে প্রোস্টানয়েডে রূপান্তরের কাজটি করে PGHS/COX নামক একটি দ্বি-কার্যকরী হিমোপ্রোটিন। এর সাইক্লোঅক্সিজিনেজ তলে টাইরোসিন র্যাডিক্যাল (Tyr385) দ্বারা অ্যারাকিডোনিক অ্যাসিড থেকে হাইড্রোজেন অপসারিত হয় এবং দুটি অক্সিজেন অণু যুক্ত হয়ে PGG2 তৈরি হয়। এরপর পারঅক্সিজিনেজ তল দুই ইলেকট্রন ব্যবহার করে PGG2-কে PGH2-তে বিজারিত করে যা পরবর্তীতে থ্রম্বোক্সেন ও অন্যান্য প্রোস্টাগ্ল্যান্ডিনে বিভক্ত হয়।'
            ),
            l(
              'Alternatively, 5-lipoxygenase (5-LOX), a non-heme iron dioxygenase, translocates upon calcium binding to the nuclear membrane, interacting with the integral membrane protein FLAP (5-lipoxygenase-activating protein). 5-LOX inserts O2 at carbon 5 to form 5-HPETE, then dehydrates it to leukotriene A4 (LTA4). In neutrophils, LTA4 hydrolase converts LTA4 to the potent chemoattractant LTB4. In mast cells and eosinophils, LTC4 synthase conjugates LTA4 with reduced glutathione, forming cysteinyl leukotriene LTC4, which is sequentially processed by gamma-glutamyltransferase and dipeptidases into LTD4 and LTE4.',
              'বিকল্পভাবে ৫-লাইপোক্সিজিনেজ (5-LOX) ক্যালসিয়ামের উপস্থিতিতে নিউক্লিয়ার ঝিল্লিতে FLAP প্রোটিনের সাথে যুক্ত হয়। 5-LOX অ্যারাকিডোনিক অ্যাসিডে অক্সিজেন যুক্ত করে প্রথমে 5-HPETE এবং পরে LTA4 তৈরি করে। নিউট্রোফিলে এটি LTB4-তে এবং মাস্ত কোষে গ্লুটাথিয়ন যুক্ত হয়ে সিস্টিনাইল লিউকোট্রিন LTC4, LTD4 ও LTE4-তে পরিণত হয় যা হাঁপানি ও অ্যালার্জির তীব্র প্রতিক্রিয়া ঘটায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Lysosomal Sphingolipidoses: Genetic Lesions & Clinical Pathology', 'লাইসোসোমাল স্ফিংগোলিপিডোসিস: জিনগত ত্রুটি ও ক্লিনিক্যাল প্যাথলজি'),
          paragraphs: [
            l(
              'Deficiencies in acid hydrolases within lysosomes cause severe sphingolipidoses characterized by intralysosomal accumulation of non-metabolized sphingolipids. In Gaucher disease, beta-glucocerebrosidase (GBA1) deficiency leads to glucosylceramide accumulation inside tissue macrophages, generating pathognomonic crinkled-paper Gaucher cells that infiltrate the spleen, liver, and bone marrow, resulting in massive hepatosplenomegaly, thrombocytopenia, and osteolytic bone crises.',
              'লাইসোসোমে এসিড হাইড্রোলেজ এনজাইমের ঘাটতি হলে স্ফিংগোলিপিডোসিস রোগ দেখা দেয় যেখানে অপাচ্য লিপিড কোষে জমা হতে থাকে। গশার রোগে বিটা-গ্লুকোসেরিব্রোসাইডেজ (GBA1) এনজাইমের অভাবে ম্যাক্রোফেজে গ্লুকোসিলসেরামাইড জমে কোঁচকানো কাগজের মতো গশার কোষ তৈরি করে। এগুলো যকৃৎ, প্লীহা ও অস্থিমজ্জায় জমা হয়ে প্লীহা বৃদ্ধি, রক্তক্ষরণ এবং হাড়ের তীব্র ব্যথা সৃষ্টি করে।'
            ),
            l(
              'In Tay-Sachs disease, loss of beta-hexosaminidase A (HEXA mutations) prevents degradation of GM2 gangliosides in central neurons. Progressive intralysosomal GM2 engorgement causes profound neurodevelopmental arrest, hypotonia, acoustic hyperacusis, characteristic macular cherry-red spots on fundoscopy, and early childhood mortality. Enzyme replacement therapy (recombinant imiglucerase) successfully reverses visceral disease in Gaucher type 1, but cannot cross the blood-brain barrier in neuropathic Tay-Sachs or Niemann-Pick type A.',
              'টে-স্যাক্স রোগে হেক্সোসামিনিডেস এ (HEXA) এনজাইমের অভাবে মস্তিষ্কের নিউরনে GM2 গ্যাংগ্লিওসাইড জমে ধ্বংসাত্মক স্নায়বিক ক্ষতি ঘটায়। শিশুদের দৃষ্টিশক্তি হ্রাস, চোখে চেরি-লাল দাগ, শব্দে চমকে ওঠা এবং পেশির স্থবিরতা দেখা দেয়। গশার রোগের জন্য কৃত্রিম এনজাইম প্রতিস্থাপন থেরাপি কার্যকর হলেও তা মস্তিষ্কের রক্ত-মস্তিষ্ক প্রাচীর ভেদ করতে পারে না বলে নিউরোপ্যাথিক টে-স্যাক্স রোগে কাজ করে না।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Analytical Summary of Complex Lipid Metabolism', 'জটিল লিপিড বিপাকের বিশ্লেষণাত্মক সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Cellular membranes maintain tight compositional homeostasis through compartmentalized synthesis of glycerophospholipids and sphingolipids. The Kennedy pathway and tafazzin transacylation dictate organelle identity and mitochondrial bioenergetics, while tight hormonal and calcium gating of cPLA2, COX, and 5-LOX channels govern physiological hemostasis and inflammatory pathogenesis.',
              'কোষীয় ঝিল্লিগুলো বিভিন্ন প্রকোষ্ঠে গ্লিসারোফসফোলিপিড ও স্ফিংগোলিপিড সংশ্লেষণের মাধ্যমে অভ্যন্তরীণ স্থিতিশীলতা রক্ষা করে। কেনেডি পথ এবং ট্যাফাজিন পুনর্গঠন মাইটোকন্ড্রিয়ার শক্তি উৎপাদন নিশ্চিত করে, পক্ষান্তরে cPLA2, COX এবং 5-LOX এনজাইমের সূক্ষ্ম নিয়ন্ত্রণ রক্ত জমাট বাঁধা ও প্রদাহের স্বাভাবিক শারীরবৃত্তীয় প্রতিক্রিয়া বজায় রাখে।'
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
          heading: l('Allosteric Heterodimerization of COX-2 & Structural Pharmacology of Coxibs', 'COX-2-এর অ্যালোস্টেরিক হেটেরোডাইমারাইজেশন ও কক্সিবের স্ট্রাকচারাল ফার্মাকোলজি'),
          paragraphs: [
            l(
              'Recent structural crystallography reveals that both COX-1 and COX-2 function as functional heterodimers comprising an allosteric monomer and a catalytic monomer. Binding of fatty acids or selective inhibitors to the allosteric subunit non-covalently modulates the catalytic turnover and inhibitor affinity of the neighboring partner. While the substrate-binding channels of COX-1 and COX-2 share high sequence identity, a single conservative substitution at position 523 (isoleucine in COX-1 replaced by valine in COX-2) introduces a secondary hydrophobic side pocket in COX-2.',
              'আধুনিক এক্স-রে ক্রিস্টালোগ্রাফি প্রমাণ করেছে যে COX-1 ও COX-2 এনজাইমগুলো অ্যালোস্টেরিক ও ক্যাটালাইটিক সাবইউনিটের হেটেরোডাইমার হিসেবে কাজ করে। এই দুই এনজাইমের মধ্যে গঠনগতভাবে কেবল ৫২৩তম অবস্থানে সামান্য পার্থক্য রয়েছে—COX-1-এ যেখানে আইসোলিউসিন থাকে, COX-2-এ সেখানে ছোট ভ্যালিন অ্যামিনো অ্যাসিড থাকে। এই ক্ষুদ্র পরিবর্তনের কারণে COX-2-এ একটি অতিরিক্ত পকেট তৈরি হয়।'
            ),
            l(
              'Selective COX-2 inhibitors (coxibs such as celecoxib and rofecoxib) exploit this valine-523 side pocket using bulky phenylsulfonamide or methylsulfonyl pharmacophores, achieving >300-fold selectivity over COX-1. However, suppressing endothelial COX-2 without impeding platelet COX-1 unmasks unopposed thromboxane A2 action, significantly shifting the vascular rheostat toward thrombosis, coronary vasospasm, and atherothrombotic infarction, which led to the clinical withdrawal of rofecoxib.',
              'সিলেক্টিভ কক্সিব ওষুধগুলো (যেমন সেলেকক্সিব ও রফেকক্সিব) এই ভ্যালিন-৫২৩ পকেটে প্রবেশ করে COX-2 এনজাইমকে ৩০০ গুণেরও বেশি শক্তিতে বাধা দেয়। কিন্তু এন্ডোথেলিয়ামের সুরক্ষাকারী প্রোস্টাসাইক্লিন বন্ধ হয়ে যাওয়ায় রক্তে থ্রম্বোক্সেন A2-এর আধিপত্য প্রতিষ্ঠিত হয়, যার ফলে রক্তনালীতে অস্বাভাবিক জমাট বাঁধা ও হার্ট অ্যাটাকের ঝুঁকি বেড়ে যাওয়ায় রফেকক্সিব বাজার থেকে প্রত্যাহার করা হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Aspirin-Triggered Resolvins, Epilipoxins & S1P Receptor Modulation in Multiple Sclerosis', 'অ্যাসপিরিন-ট্রিগারড রিজলভিন, এপিলিপোক্সিন এবং মাল্টিপল স্ক্লেরোসিসে S1P রিসেপ্টর নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'A remarkable discovery in resolution pharmacology is the generation of aspirin-triggered lipid mediators. When aspirin acetylates Ser516 in COX-2, unlike COX-1 which is completely inactivated, COX-2 retains modified catalytic activity: it accepts arachidonic acid or EPA and stereospecifically inserts oxygen at carbon 15 or 18 in the R configuration instead of the native S configuration, generating 15R-HETE or 18R-HEPE.',
              'ফার্মাকোলজির একটি যুগান্তকারী আবিষ্কার হলো অ্যাসপিরিন-চালিত লিপিড মধ্যস্থতাকারী। অ্যাসপিরিন যখন COX-2-এর Ser516-কে অ্যাসিটাইলেটেড করে, তখন এনজাইমটি ধ্বংস না হয়ে বরং পরিবর্তিত রূপ নেয়: এটি অ্যারাকিডোনিক অ্যাসিড বা EPA-কে গ্রহণ করে বিশেষ 15R বা 18R কনফিগারেশনে জারিত করে।'
            ),
            l(
              'Subsequent processing of these precursors by 5-LOX in transcellular leukocyte-platelet interactions yields aspirin-triggered lipoxins (ATLs, 15-epi-LXA4) and aspirin-triggered resolvins (AT-RvD1 and AT-RvE1). These epimeric mediators possess prolonged half-lives because they resist standard 15-hydroxyprostaglandin dehydrogenase degradation, potently activating formyl peptide receptor 2 (FPR2) and ChemR23 to induce efferocytosis and downregulate NF-kappaB signaling.',
              'পরবর্তীতে শ্বেতকণিকার 5-LOX এনজাইমের সাথে মিথস্ক্রিয়া করে এগুলো অ্যাসপিরিন-ট্রিগারড লিপোক্সিন ও রিজলভিনে পরিণত হয়। এই বিশেষ অণুগুলো সহজে বিনষ্ট হয় না এবং প্রদাহ সৃষ্টিকারী NF-kappaB সংকেতকে অবদমিত করে দ্রুত রোগমুক্তি ত্বরান্বিত করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('S1P Receptor Therapeutics in Neuroimmunology', 'নিউরোইমিউনোলজিতে S1P রিসেপ্টর থেরাপিউটিক্স'),
          paragraphs: [
            l(
              'In clinical neuroimmunology, pharmacological manipulation of sphingolipid biology has revolutionized multiple sclerosis therapy. Fingolimod (FTY720), a synthetic sphingosine analogue, is phosphorylated in vivo by sphingosine kinase 2 into fingolimod-phosphate, an agonist that induces irreversible internalization and ubiquitin-mediated degradation of the S1P1 receptor on lymphocytes. Deprived of S1P-directed chemotactic egress signals, autoreactive T cells remain sequestered inside lymph nodes, preventing central nervous system neuroinflammation and demyelination.',
              'স্নায়ুরোগ বিজ্ঞানে স্ফিংগোলিপিডের ব্যবহার মাল্টিপল স্ক্লেরোসিসের চিকিৎসায় বৈপ্লবিক সাফল্য এনেছে। ফিঙ্গোলিমড নামক ওষুধটি স্ফিংগোসিন কাইনেজ দ্বারা ফসফরাইলেটেড হয়ে লিম্ফোসাইটের S1P1 রিসেপ্টরকে ধ্বংস করে দেয়। সংকেত হারিয়ে ক্ষতিকর টি-কোষগুলো লসিকা গ্রন্থিতে অবরুদ্ধ হয়ে পড়ে এবং মস্তিষ্কে প্রবেশ করে স্নায়ুর ক্ষতি করতে পারে না।'
            ),
          ],
        },
      ],
    },
  },
}
