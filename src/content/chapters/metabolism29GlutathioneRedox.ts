import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const redoxRefs = [
  {
    id: 'halliwell-gutteridge-free-radicals-5e',
    authors: 'Barry Halliwell, John M. C. Gutteridge',
    title: 'Free Radicals in Biology and Medicine, 5th edition',
    organization: 'Oxford University Press',
    year: 2015,
    url: 'https://global.oup.com/academic/product/free-radicals-in-biology-and-medicine-9780198717478',
  },
  {
    id: 'lehninger-biochem-8e-ch19',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 19: Oxidative Phosphorylation and Photophosphorylation',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'stockwell-ferroptosis-cell-2017',
    authors: 'Brent R. Stockwell, Jose Pedro Friedmann Angeli, Hulya Bayir, et al.',
    title: 'Ferroptosis: A Regulated Cell Death Nexus Linking Metabolism, Redox Biology, and Disease. Cell, 171(2):273-285',
    organization: 'Elsevier / Cell Press',
    year: 2017,
    url: 'https://pubmed.ncbi.nlm.nih.gov/28985560/',
  },
  {
    id: 'meister-glutathione-annurev-1983',
    authors: 'Alton Meister, Mary E. Anderson',
    title: 'Glutathione. Annual Review of Biochemistry, 52:711-760',
    organization: 'Annual Reviews',
    year: 1983,
    url: 'https://pubmed.ncbi.nlm.nih.gov/6137189/',
  },
  {
    id: 'murphy-mitochondrial-ros-biochemj-2009',
    authors: 'Michael P. Murphy',
    title: 'How mitochondria produce reactive oxygen species. Biochemical Journal, 417(1):1-13',
    organization: 'Portland Press / Biochemical Society',
    year: 2009,
    url: 'https://pubmed.ncbi.nlm.nih.gov/19061483/',
  },
]

const redox3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Glutathione Synthesis, Redox Homeostasis & Ferroptosis',
    '৩ডি বহু-অঙ্গীয় গ্লুটাথিয়ন সংশ্লেষ, রেডক্স ভারসাম্য ও ফেরোপ্টোসিসের শারীরস্থানিক মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: inspect spatial coordinates to trace how glutathione (GSH) is synthesized, circulated, and metabolized across the liver, erythrocytes, renal tubules, and pulmonary alveoli to protect against oxidative injury and ferroptosis.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে গ্লুটাথিয়ন (GSH) যকৃতে তৈরি হয়ে রক্তকণিকা, বৃক্কীয় নালী এবং ফুসফুসে প্রবাহিত হয় এবং ক্ষতিকর জারণ ও ফেরোপ্টোসিস থেকে কোষকে রক্ষা করে।'
  ),
  description: l(
    'Cellular redox homeostasis balances the inevitable production of reactive oxygen species (ROS) from mitochondrial electron transport with antioxidant defense networks. Glutathione (GSH)—the master intracellular antioxidant tripeptide—acts as an essential electron donor for glutathione peroxidases (GPX1–4), reduces hydrogen peroxide and lipid hydroperoxides, neutralizes electrophilic xenobiotics, and defends biological membranes from iron-dependent ferroptotic death.',
    'কোষীয় রেডক্স ভারসাম্য মাইটোকন্ড্রিয়া থেকে তৈরি হওয়া ক্ষতিকর মুক্ত র্যাডিক্যালের সাথে দেহের সুরক্ষা ব্যবস্থার নিখুঁত ভারসাম্য বজায় রাখে। গ্লুটাথিয়ন (GSH) হলো প্রধান অভ্যন্তরীণ অ্যান্টিঅক্সিডেন্ট ট্রাইপেপটাইড, যা গ্লুটাথিয়ন পারঅক্সিডেজের (GPX1–4) জন্য ইলেকট্রন যোগায়, পারঅক্সাইড ধ্বংস করে, বিষাক্ত ওষুধ নিষ্ক্রিয় করে এবং কোষঝিল্লিকে ফেরোপ্টোসিস নামক অপমৃত্যু থেকে রক্ষা করে।'
  ),
  organs: [
    {
      id: 'organ-liver-gsh-export-hub',
      name: l('Liver (Hepatic GSH Synthesis & Systemic Plasma Export)', 'যকৃৎ (হেপাটিক GSH সংশ্লেষ ও রক্তরসে সামগ্রিক নিঃসরণ)'),
      latinName: 'Hepar (Centrum Syntheseos Glutathioni)',
      system: l('Hepato-Biliary & Antioxidant Defense System', 'যকৃৎ-পিত্ত ও অ্যান্টিঅক্সিডেন্ট সুরক্ষা ব্যবস্থা'),
      cavity: l('Peritoneal Cavity (Right Hypochondrium)', 'পেরিটোনিয়াল গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 5, y: 185, z: 2 },
      color: '#059669',
      highlightColor: '#10b981',
      shapeType: 'liver',
      description: l(
        'The master glutathione factory of the human body. Hepatocytes maintain the highest intracellular GSH concentration of any organ (5–10 mM) and continuously export both reduced GSH and oxidized GSSG into hepatic sinusoids and bile. Sinusoidal efflux maintains the whole-body plasma glutathione pool (~2–5 microM), supplying cysteine precursors to extrahepatic tissues via the interorgan gamma-glutamyl cycle.',
        'মানবদেহের প্রধান গ্লুটাথিয়ন উৎপাদন কারখানা। যকৃতের কোষে দেহের সর্বোচ্চ ঘনমাত্রায় (৫–১০ মিলিমোলার) গ্লুটাথিয়ন থাকে যা অনবরত রক্তরস ও পিত্তে নিঃসৃত হয়। রক্তে নিঃসৃত এই গ্লুটাথিয়ন সারাদেহের অন্যান্য অঙ্গে প্রবাহিত হয়ে কোষে সিস্টিনের জোগান নিশ্চিত করে এবং সামগ্রিক রোগ প্রতিরোধ ক্ষমতাকে সচল রাখে।'
      ),
      spatialRelations: l(
        'Occupies the right hypochondrium under the diaphragm, perfused by both portal venous blood carrying gut-derived toxins and oxygenated hepatic arterial blood.',
        'ডান পাঁজরের নিচে অবস্থিত যা অন্ত্র থেকে আসা বিষাক্ত পদার্থ মিশ্রিত পোর্টাল রক্ত এবং ধমনীর অক্সিজেনযুক্ত রক্ত সরাসরি গ্রহণ করে জারণ প্রক্রিয়া মোকাবেলা করে।'
      ),
      physiology: l(
        'Synthesizes GSH via consecutive ATP-dependent reactions: glutamate-cysteine ligase (GCL, rate-limiting) followed by glutathione synthetase (GS). Feedback inhibited by GSH.',
        'দুটি ধারাবাহিক এটিপি-নির্ভর ধাপে গ্লুটাথিয়ন তৈরি করে: প্রথমে গতি-নিয়ন্ত্রক GCL এনজাইম এবং পরে GS এনজাইম। কোষে অতিরিক্ত GSH তৈরি হলে তা স্বয়ংক্রিয়ভাবে বিক্রিয়ার গতি কমিয়ে দেয়।'
      ),
      nutritionConnection: l(
        'Directly dependent on hepatic cysteine availability derived from dietary protein or de novo synthesis via the CBS/CSE transsulfuration pathway from methionine.',
        'খাদ্যের প্রোটিন থেকে প্রাপ্ত সিস্টিন এবং মেথিওনিন থেকে ট্রান্সসালফারেশন পথের মাধ্যমে তৈরি সিস্টিনের পর্যাপ্ত জোগানের ওপর সম্পূর্ণ নির্ভরশীল।'
      ),
      clinicalSignificance: l(
        'Acetaminophen (paracetamol) overdose saturates phase II sulfation/glucuronidation, shunting drug to CYP2E1 which generates the electrophile NAPQI; hepatic GSH depletion >70% precipitates fatal centrilobular necrosis, prevented by N-acetylcysteine (NAC).',
        'অতিরিক্ত মাত্রার প্যারাসিটামল সেবন বিষাক্ত NAPQI তৈরি করে যা যকৃতের ৭০%-এর বেশি গ্লুটাথিয়ন শেষ করে লিভার ধ্বংস করে ফেলে; সময়মতো এন-অ্যাসিটাইলসিস্টিন (NAC) দিলে যকৃৎ পুনরায় সুস্থ হয়ে ওঠে।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-red-blood-cells-g6pd-redox',
      name: l('Erythrocytes (G6PD, NADPH & Hemolytic Protection)', 'লোহিত রক্তকণিকা (G6PD, NADPH ও রক্তক্ষরণ সুরক্ষা)'),
      latinName: 'Erythrocyti (Defensio Antioxidans)',
      system: l('Hematologic & Circulatory System', 'রক্ত সংবহন ও হেমাটোলজিক ব্যবস্থা'),
      cavity: l('Systemic Circulatory Network', 'সার্বিক রক্ত সংবহন জালক'),
      position3D: { x: 0, y: 165, z: 0 },
      color: '#dc2626',
      highlightColor: '#ef4444',
      shapeType: 'heart',
      description: l(
        'Circulating red blood cells exist in an environment of extreme continuous oxidative stress, carrying high concentrations of oxygen and iron-containing hemoglobin. Anucleate erythrocytes lack mitochondria, ribosomes, and the capacity for de novo protein synthesis. They depend entirely on the hexose monophosphate shunt enzyme glucose-6-phosphate dehydrogenase (G6PD) to generate the NADPH needed to reduce GSSG back to GSH via glutathione reductase (GSR).',
        'রক্তে ভাসমান লোহিত রক্তকণিকাগুলো নিরবচ্ছিন্ন তীব্র জারণ চাপের মধ্যে বেঁচে থাকে, কারণ এতে প্রচুর অক্সিজেন এবং লোহা সমৃদ্ধ হিমোগ্লোবিন থাকে। নিউক্লিয়াস বা মাইটোকন্ড্রিয়া না থাকায় এরা সম্পূর্ণভাবে পেন্টোজ ফসফেট পথের G6PD এনজাইমের তৈরি NADPH-এর ওপর নির্ভর করে জারিত গ্লুটাথিয়নকে পুনরায় সক্রিয় রাখে।'
      ),
      spatialRelations: l(
        'Traverse the entire vascular bed every 60 seconds, squeezing through narrow splenic sinusoids that test cellular deformability and membrane integrity.',
        'প্রতি ৬০ সেকেন্ডে সারাদেহের রক্তনালী প্রদক্ষিণ করে এবং প্লীহার সূক্ষ্ম রক্তনালী দিয়ে অতিক্রম করার সময় ঝিল্লির নমনীয়তা ও ক্ষয়হীনতার কঠিন পরীক্ষা দেয়।'
      ),
      physiology: l(
        'Erythrocyte GSH and catalase eliminate hydrogen peroxide generated by spontaneous hemoglobin auto-oxidation to methemoglobin (Fe3+), preventing Heinz body precipitation.',
        'লোহিত রক্তকণিকার GSH ও ক্যাটালেজ হিমোগ্লোবিন থেকে তৈরি হওয়া হাইড্রোজেন পারঅক্সাইড নিষ্ক্রিয় করে মেথিমোগ্লোবিন ও হাইঞ্জ বডি তৈরি হওয়া আটকে দেয়।'
      ),
      nutritionConnection: l(
        'Riboflavin (vitamin B2) is the obligate precursor of flavin adenine dinucleotide (FAD), the prosthetic group of erythrocyte glutathione reductase; B2 status is clinically assessed by the erythrocyte glutathione reductase activation coefficient (EGRAC).',
        'ভিটামিন বি২ (রিবোফ্লাভিন) হলো গ্লুটাথিয়ন রিডাক্টেজ এনজাইমের FAD অংশের মূল কাঁচামাল; রক্তে বি২-এর সঠিক মাত্রা পরীক্ষা করতে এই এনজাইমের সক্রিয়তা মাপা হয়।'
      ),
      clinicalSignificance: l(
        'G6PD deficiency (affecting >400 million people worldwide) impairs NADPH regeneration; oxidative challenge from fava beans (divicine) or antimalarials (primaquine) triggers acute intravascular hemolysis.',
        'বিশ্বব্যাপী ৪০ কোটিরও বেশি মানুষ G6PD ঘাটতিতে ভোগে; ফলে ম্যালেরিয়ার ওষুধ বা নির্দিষ্ট খাবার খেলে এদের লোহিত রক্তকণিকা ভেঙে মারাত্মক রক্তশূন্যতা ও জন্ডিস দেখা দেয়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-kidneys-gamma-glutamyl-cycle',
      name: l('Kidneys (The Meister Gamma-Glutamyl Cycle & Cysteine Recovery)', 'বৃক্ক (মাস্টার গামা-গ্লুটামিল চক্র ও সিস্টিন উদ্ধার)'),
      latinName: 'Renes (Cyclus Gamma-Glutamylicus)',
      system: l('Urinary & Renal Epithelial Transport System', 'রেচনতন্ত্র ও বৃক্কীয় পরিবহন ব্যবস্থা'),
      cavity: l('Retroperitoneum (Paravertebral Gutters)', 'রেট্রোপেরিটোনিয়াম (মেরুদণ্ডের উভয় পাশে)'),
      position3D: { x: 0, y: 180, z: 2 },
      color: '#7c3aed',
      highlightColor: '#a78bfa',
      shapeType: 'kidneys',
      description: l(
        'Renal proximal tubule brush border membranes possess the highest concentration of gamma-glutamyltransferase (GGT / gamma-GT) in the body. The kidneys filter enormous quantities of circulating plasma glutathione. GGT cleaves the unique gamma-glutamyl bond of filtered GSH, transferring the glutamyl group to amino acids, while dipeptidases cleave the remaining cysteinylglycine into free cysteine and glycine for apical reabsorption.',
        'বৃক্কের প্রক্সিমাল নালীর ঝিল্লিতে দেহের সর্বোচ্চ ঘনমাত্রায় GGT এনজাইম থাকে। বৃক্ক রক্ত থেকে প্রচুর গ্লুটাথিয়ন ছেঁকে বের করে। GGT এনজাইম গ্লুটাথিয়নের বিশেষ বন্ধনটি ভেঙে মূল্যবান সিস্টিন ও গ্লাইসিনকে প্রস্রাবের সাথে অপচয় হতে না দিয়ে পুনরায় রক্তে ফিরিয়ে আনে।'
      ),
      spatialRelations: l(
        'Positioned retroperitoneally between T12 and L3, filtering 180 liters of plasma ultrafiltrate daily through glomerular capillaries.',
        'মেরুদণ্ডের উভয় পাশে অবস্থিত যা প্রতিদিন ১৮০ লিটার রক্ত ছেঁকে বিষাক্ত বর্জ্য বের করার পাশাপাশি রক্তরস থেকে প্রয়োজনীয় অ্যামিনো অ্যাসিড পুনরুদ্ধার করে।'
      ),
      physiology: l(
        'The recovered cysteine is taken up by proximal tubule sodium-dependent amino acid transporters, driving intense intrarenal GSH resynthesis to protect tubular cells from ischemic and nephrotoxic oxidative injury.',
        'উদ্ধারকৃত সিস্টিন বৃক্কের কোষগুলো পুনরায় শোষণ করে তীব্র গতিতে নতুন গ্লুটাথিয়ন তৈরি করে এবং যেকোনো বিষক্রিয়া বা অক্সিজেনের অভাবে কিডনি বিকল হওয়া থেকে রক্ষা করে।'
      ),
      nutritionConnection: l(
        'Dietary glycine and glutamate are readily available, whereas cysteine availability remains the absolute rate-limiting bottleneck for sustained renal and whole-body GSH regeneration.',
        'খাবারে গ্লাইসিন ও গ্লুটামেট সহজে পাওয়া গেলেও সিস্টিনের জোগানই হলো সার্বিক দেহে গ্লুটাথিয়ন পুনর্গঠনের প্রধান সীমাবদ্ধকারী উপাদান।'
      ),
      clinicalSignificance: l(
        'Serum GGT elevation is a sensitive biomarker of hepatobiliary dysfunction, alcohol toxicity, and systemic oxidative stress; in the kidney, GGT is critical for clearing glutathione-conjugated xenobiotic mercapturic acids.',
        'রক্তে GGT বৃদ্ধি পাওয়া যকৃৎ ও পিত্তনালীর রোগ, অতিরিক্ত মদ্যপান এবং সার্বিক জারণ চাপের একটি অত্যন্ত সংবেদনশীল ক্লিনিক্যাল মার্কার।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-lungs-alveolar-epithelial-gsh',
      name: l('Lungs (Alveolar Epithelial Lining Fluid & Environmental Defense)', 'ফুসফুস (অ্যালভিওলার এপিথেলিয়াল তরল ও পরিবেশগত প্রতিরক্ষা)'),
      latinName: 'Pulmones (Fluidum Epitheliale Alveolare)',
      system: l('Respiratory & Pulmonary Epithelial System', 'শ্বাসতন্ত্র ও ফুসফুসীয় সুরক্ষা ব্যবস্থা'),
      cavity: l('Thoracic Cavity (Pleural Spaces)', 'বক্ষ গহ্বর (প্লুরাল স্থান)'),
      position3D: { x: -4, y: 220, z: 2 },
      color: '#0284c7',
      highlightColor: '#38bdf8',
      shapeType: 'lungs',
      description: l(
        'The alveolar epithelial lining fluid (ELF) covering the respiratory surface of the lungs contains a remarkably high concentration of reduced glutathione (400–500 microM)—more than 100-fold higher than in systemic plasma. Synthesized and secreted by alveolar type II pneumocytes via the CFTR and ABC transporters, this massive extracellular GSH shield forms the first line of defense against atmospheric oxidants, ozone, and cigarette smoke.',
        'ফুসফুসের শ্বাসযন্ত্রের অভ্যন্তরীণ অ্যালভিওলার তরলে রক্তরসের তুলনায় প্রায় ১০০ গুণ বেশি ঘনমাত্রায় (৪০০–৫০০ মাইক্রোমোলার) গ্লুটাথিয়ন থাকে। টাইপ-২ কোষগুলো এই গ্লুটাথিয়ন তৈরি ও নিঃসরণ করে যা বাতাসের ধোঁয়াশা, ওজোন এবং সিগারেটের ক্ষতিকর মুক্ত র্যাডিক্যালের বিরুদ্ধে প্রথম প্রতিরোধ প্রাচীর হিসেবে কাজ করে।'
      ),
      spatialRelations: l(
        'Flank the mediastinum and heart, exposing an expansive 100-square-meter alveolar-capillary gas exchange surface directly to environmental oxygen and airborne pollutants.',
        'বক্ষগহ্বরে হৃদপিণ্ডের উভয় পাশে অবস্থিত যা প্রায় ১০০ বর্গমিটার সুবিশাল অ্যালভিওলার পৃষ্ঠের মাধ্যমে বায়বীয় পরিবেশের অক্সিজেনের সংস্পর্শে থাকে।'
      ),
      physiology: l(
        'Alveolar GSH directly reacts with inhaled nitrogen dioxide (NO2) and ozone, reduces lipid peroxides, and prevents oxidative denaturation of pulmonary surfactant phospholipids and proteins (SP-A, SP-D).',
        'ফুসফুসের GSH সরাসরি ক্ষতিকর গ্যাস ও পারঅক্সাইড নিষ্ক্রিয় করে অ্যালভিওলির সারফ্যাক্ট্যান্ট প্রোটিনগুলোকে নষ্ট হওয়া থেকে বাঁচিয়ে ফুসফুসকে স্থিতিস্থাপক রাখে।'
      ),
      nutritionConnection: l(
        'Selenium is the essential trace mineral cofactor for glutathione peroxidases (GPX1–4); dietary selenium deficiency blunts alveolar epithelial GPX activity, worsening respiratory viral pneumonia.',
        'সেলেনিয়াম হলো গ্লুটাথিয়ন পারঅক্সিডেজের অপরিহার্য খনিজ কোফ্যাক্টর; খাদ্যে সেলেনিয়ামের অভাব ফুসফুসের সুরক্ষা কমিয়ে ভাইরাল নিউমোনিয়ার তীব্রতা বৃদ্ধি করে।'
      ),
      clinicalSignificance: l(
        'Alveolar GSH is severely depleted in acute respiratory distress syndrome (ARDS), idiopathic pulmonary fibrosis, and chronic cigarette smokers; nebulized or intravenous N-acetylcysteine restores pulmonary glutathione.',
        'তীব্র শ্বাসকষ্টের সিন্ড্রোম (ARDS) এবং ধূমপায়ীদের ফুসফুসে গ্লুটাথিয়ন আশঙ্কাজনকভাবে কমে যায়; নেবুলাইজার বা ইনজেকশনের মাধ্যমে NAC প্রয়োগ করে ফুসফুসের সুরক্ষা পুনরুদ্ধার করা হয়।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism29GlutathioneRedoxLesson: LessonTopic = {
  id: 'topic.metabolism.glutathione-ros-redox-homeostasis',
  slug: 'glutathione-ros-redox-homeostasis',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '29 · Glutathione, Reactive Oxygen Species & Cellular Redox Homeostasis',
    '২৯ · গ্লুটাথিয়ন, প্রতিক্রিয়াশীল অক্সিজেন প্রজাতি ও কোষীয় রেডক্স ভারসাম্য'
  ),
  summary: l(
    'Cellular redox biochemistry: superoxide generation from mitochondrial electron leak, SOD isoforms, 2-step GCL-GSS glutathione biosynthesis with unique gamma-glutamyl bond, glutathione peroxidase/reductase cycle powered by NADPH, Fenton chemistry, lipid peroxidation, System xc- and GPX4 protection against ferroptosis, and acetaminophen toxicity antidote N-acetylcysteine.',
    'কোষীয় রেডক্স জৈবরসায়ন: মাইটোকন্ড্রিয়াল ইলেকট্রন লিক থেকে সুপারঅক্সাইড উৎপাদন, SOD আইসোফর্ম, অনন্য গামা-গ্লুটামিল বন্ধনসহ GCL-GSS দ্বারা গ্লুটাথিয়ন তৈরি, NADPH চালিত গ্লুটাথিয়ন পারঅক্সিডেজ/রিডাক্টেজ চক্র, ফেন্টন বিক্রিয়া, লিপিড পারঅক্সিডেশন, সিস্টেম xc- ও GPX4 দ্বারা ফেরোপ্টোসিস প্রতিরোধ এবং প্যারাসিটামলের বিষক্রিয়ায় NAC এর ভূমিকা।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Detail the 2-step ATP-dependent biosynthesis of glutathione, explaining why the gamma-glutamyl linkage confers complete resistance to intracellular proteases.',
      'এটিপি-নির্ভর দুই ধাপের গ্লুটাথিয়ন সংশ্লেষণ বিস্তারিত ব্যাখ্যা করা এবং গামা-গ্লুটামিল বন্ধন কেন প্রোটিয়েজ এনজাইম প্রতিরোধী তা নিরূপণ করতে পারা।'
    ),
    l(
      'Analyze the glutathione peroxidase and glutathione reductase redox cycle, detailing the role of selenocysteine and the absolute requirement for NADPH.',
      'গ্লুটাথিয়ন পারঅক্সিডেজ ও রিডাক্টেজ চক্র বিশ্লেষণ করা এবং এতে সেলেনিয়াম ও NADPH-এর অপরিহার্য ভূমিকা নিরূপণ করতে পারা।'
    ),
    l(
      'Evaluate the molecular mechanism of ferroptosis, explaining how System xc- inhibition or GPX4 inactivation triggers lethal lipid peroxidation.',
      'ফেরোপ্টোসিসের আণবিক ক্রিয়াকৌশল মূল্যায়ন করা এবং সিস্টেম xc- বাধা বা GPX4 নিষ্ক্রিয়করণ কীভাবে মারাত্মক লিপিড পারঅক্সিডেশন ঘটায় তা ব্যাখ্যা করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.tca-oxphos'],
  relatedTopicIds: ['topic.metabolism.pentose-phosphate-pathway', 'topic.metabolism.one-carbon-methylation-transsulfuration'],
  references: redoxRefs,
  evidenceBySection: {
    introduction: ['halliwell-gutteridge-free-radicals-5e', 'murphy-mitochondrial-ros-biochemj-2009'],
    structure: ['meister-glutathione-annurev-1983', 'lehninger-biochem-8e-ch19'],
    mechanism: ['halliwell-gutteridge-free-radicals-5e', 'murphy-mitochondrial-ros-biochemj-2009'],
    integration: ['stockwell-ferroptosis-cell-2017', 'meister-glutathione-annurev-1983'],
    practice: ['stockwell-ferroptosis-cell-2017', 'halliwell-gutteridge-free-radicals-5e'],
    takeaways: ['halliwell-gutteridge-free-radicals-5e', 'meister-glutathione-annurev-1983'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Oxygen Radicals & Cellular Redox Buffering', '১. অক্সিজেন র্যাডিক্যাল ও কোষীয় রেডক্স বাফারিং'), sectionId: 'introduction' },
      { id: 'sec-gsh-structure', label: l('2. Glutathione Structure & Gamma-Glutamyl Chemistry', '২. গ্লুটাথিয়নের গঠন ও গামা-গ্লুটামিল রসায়ন'), sectionId: 'structure' },
      { id: 'sec-redox-cascade', label: l('3. The Enzymatic Cascade: SOD, Catalase & GPX', '৩. এনজাইমেটিক ক্যাসকেড: SOD, ক্যাটালেজ ও GPX'), sectionId: 'mechanism' },
      { id: 'sec-ferroptosis', label: l('4. Ferroptosis: Lipid Peroxidation & GPX4 Checkpoint', '৪. ফেরোপ্টোসিস: লিপিড পারঅক্সিডেশন ও GPX4 নিয়ন্ত্রণ'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Clinical Case: Acetaminophen Toxicity & NAC', '৫. ক্লিনিক্যাল কেস: প্যারাসিটামলের বিষক্রিয়া ও NAC'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Core Takeaways & High-Yield Summary', '৬. মূল শিক্ষা ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Glutamate-Cysteine Ligase (GCL)', 'গ্লুটামেট-সিস্টিন লাইগেজ (GCL)'),
        definition: l(
          'Rate-limiting, ATP-dependent enzyme of glutathione synthesis; condenses L-glutamate and L-cysteine via a non-ribosomal gamma-glutamyl peptide bond; allosterically feedback-inhibited by GSH.',
          'গ্লুটাথিয়ন সংশ্লেষণের গতি-নিয়ন্ত্রক এনজাইম; এটিপি ব্যবহার করে গ্লুটামেট ও সিস্টিনের মধ্যে বিশেষ গামা-গ্লুটামিল বন্ধন তৈরি করে; GSH দ্বারা ঋণাত্মকভাবে নিয়ন্ত্রিত হয়।'
        ),
      },
      {
        term: l('Glutathione Peroxidase-4 (GPX4)', 'গ্লুটাথিয়ন পারঅক্সিডেজ-৪ (GPX4)'),
        definition: l(
          'Selenocysteine-containing enzyme uniquely capable of directly reducing toxic phospholipid hydroperoxides (PL-OOH) into non-toxic lipid alcohols within biological membranes; master gatekeeper against ferroptosis.',
          'সেলেনিয়ামযুক্ত বিশেষ এনজাইম যা কোষঝিল্লির বিষাক্ত লিপিড পারঅক্সাইডকে নিরাপদ অ্যালকোহলে রূপান্তরিত করে ফেরোপ্টোসিস নামক কোষীয় মৃত্যু প্রতিরোধ করে।'
        ),
      },
      {
        term: l('Fenton Chemistry', 'ফেন্টন বিক্রিয়া (Fenton Chemistry)'),
        definition: l(
          'Reaction between ferrous iron (Fe2+) and hydrogen peroxide (H2O2) yielding ferric iron (Fe3+), hydroxide ion, and the non-enzymatically unregulatable, ultra-reactive hydroxyl radical (•OH).',
          'ফেরাস আয়রন (Fe2+) এবং হাইড্রোজেন পারঅক্সাইডের (H2O2) মধ্যকার বিক্রিয়া যার মাধ্যমে মানবদেহের সবচেয়ে মারাত্মক ও আক্রমণাত্মক হাইড্রোক্সিল মুক্ত র্যাডিক্যাল (•OH) উৎপন্ন হয়।'
        ),
      },
      {
        term: l('System xc- (SLC7A11 / SLC3A2)', 'সিস্টেম xc- (System xc-)'),
        definition: l(
          'Plasma membrane cystine/glutamate antiporter importing oxidized extracellular L-cystine in exchange for intracellular L-glutamate; supplies essential cysteine for intracellular GSH synthesis and ferroptosis defense.',
          'কোষঝিল্লির বিশেষ বাহক যা কোষের বাইরে থেকে সিস্টিন ভেতরে নেয় এবং গ্লুটামেট বের করে দেয়; যা কোষে গ্লুটাথিয়ন তৈরি এবং ফেরোপ্টোসিস প্রতিরোধের কাঁচামাল যোগায়।'
        ),
      },
      {
        term: l('Meister Gamma-Glutamyl Cycle', 'মাস্টার গামা-গ্লুটামিল চক্র'),
        definition: l(
          'Metabolic pathway driven by membrane-bound gamma-glutamyltransferase (GGT) and 5-oxoprolinase that degrades extracellular GSH, salvages cysteine, and transports amino acids across epithelial membranes.',
          'কোষঝিল্লির GGT এনজাইম চালিত বিপাকীয় চক্র যা পরিশ্রুত গ্লুটাথিয়নকে ভেঙে সিস্টিন উদ্ধার করে এবং কোষে পুনরায় শোষণে সাহায্য করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Biochemical Rationale of N-Acetylcysteine (NAC) in Acetaminophen Poisoning', 'প্যারাসিটামল বিষক্রিয়ায় এন-অ্যাসিটাইলসিস্টিনের জৈবরাসাযনিক কার্যপদ্ধতি'),
        steps: [
          l(
            'Step 1: Therapeutic doses of acetaminophen are 90% cleared by hepatic glucuronidation (UGT1A6) and sulfation (SULT1A1). In massive overdose, these phase II pathways become completely saturated.',
            'ধাপ ১: সাধারণ মাত্রার প্যারাসিটামলের ৯০% যকৃতে গ্লুকিউরোনাইড ও সালফেট হিসেবে নিষ্ক্রিয় হয়। অতিরিক্ত মাত্রায় এই দুটি পথই সম্পূর্ণ অচল হয়ে পড়ে।'
          ),
          l(
            'Step 2: Excess drug is shunted to cytochrome P450 enzymes (predominantly CYP2E1), which oxidize acetaminophen to the electrophilic cytotoxic intermediate N-acetyl-p-benzoquinone imine (NAPQI).',
            'ধাপ ২: ফলে অতিরিক্ত ওষুধ সাইটোক্রোম P450 (CYP2E1) দ্বারা জারিত হয়ে মারাত্মক বিষাক্ত NAPQI-তে পরিণত হয়।'
          ),
          l(
            'Step 3: Under normal conditions, hepatic glutathione immediately conjugates NAPQI. When hepatic GSH stores are depleted by >70%, free NAPQI covalently binds cysteinyl groups on mitochondrial proteins, causing necrosis.',
            'ধাপ ৩: স্বাভাবিক অবস্থায় গ্লুটাথিয়ন NAPQI-কে নিষ্ক্রিয় করে মূত্রের মাধ্যমে বের করে দেয়। কিন্তু যকৃতের ৭০%-এর বেশি GSH শেষ হয়ে গেলে মুক্ত NAPQI মাইটোকন্ড্রিয়ার প্রোটিনে আঘাত হানে।'
          ),
          l(
            'Step 4: N-Acetylcysteine (NAC) enters hepatocytes and is deacetylated to free L-cysteine, restoring the rate-limiting substrate for de novo GSH synthesis while directly neutralizing free NAPQI via its sulfhydryl group.',
            'ধাপ ৪: এন-অ্যাসিটাইলসিস্টিন (NAC) কোষে ঢুকে মুক্ত এল-সিস্টিনে পরিণত হয়ে দ্রুত নতুন গ্লুটাথিয়ন তৈরি করে এবং নিজের থায়ল গ্রুপ দিয়ে সরাসরি NAPQI নিষ্ক্রিয় করে যকৃৎ রক্ষা করে।'
          ),
        ],
        conclusion: l(
          'Timely administration of N-acetylcysteine replenishes intracellular glutathione and directly neutralizes electrophilic NAPQI, successfully preventing fulminant hepatic necrosis.',
          'সময়মতো এন-অ্যাসিটাইলসিস্টিন প্রয়োগ যকৃতের গ্লুটাথিয়ন পুনঃপ্রতিষ্ঠা করে এবং বিষাক্ত NAPQI সরাসরি ধ্বংস করে নিশ্চিত লিভার ধ্বংসের হাত থেকে রোগীকে বাঁচায়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why is the peptide bond between glutamate and cysteine in glutathione chemically unique, and what evolutionary advantage does it confer?',
          'গ্লুটাথিয়নে গ্লুটামেট ও সিস্টিনের মধ্যকার পেপটাইড বন্ধনটি কেন অনন্য এবং এটি জীবকোষকে কী বাড়তি সুবিধা প্রদান করে?'
        ),
        answer: l(
          'It is a gamma-glutamyl bond formed using the side-chain gamma-carboxyl group of glutamate rather than the standard alpha-carboxyl group. Intracellular proteases only recognize alpha-peptide bonds; therefore, this gamma-linkage renders glutathione completely resistant to intracellular proteolytic degradation, ensuring stable high intracellular concentrations (1–10 mM).',
          'এটি একটি গামা-গ্লুটামিল বন্ধন যা সাধারণ আলফা-কার্বক্সিলের বদলে গ্লুটামেটের পার্শ্বশিকলের গামা-কার্বক্সিল ব্যবহার করে তৈরি হয়। কোষের প্রোটিয়েজ এনজাইমগুলো কেবল আলফা বন্ধন কাটতে পারে; ফলে এই বিশেষ বন্ধনের কারণে গ্লুটাথিয়ন কোষের ভেতর কোনো ক্ষতি ছাড়াই দীর্ঘস্থায়ী ও উচ্চ ঘনমাত্রায় টিকে থাকতে পারে।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: redox3DData,
  interactiveDiagram: {
    id: 'diag-metabolism29-glutathione-redox',
    title: l('Interactive Molecular Cascade of Cellular Redox Defense, Glutathione Cycle & Ferroptosis', 'কোষীয় রেডক্স প্রতিরক্ষা, গ্লুটাথিয়ন চক্র ও ফেরোপ্টোসিসের ইন্টারেক্টিভ আণবিক গতিপথ'),
    disclaimer: l('Interactive educational diagram illustrating cellular redox cycles and ferroptosis checkpoints.', 'কোষীয় রেডক্স চক্র ও ফেরোপ্টোসিস নিয়ন্ত্রণ কেন্দ্রসমূহ প্রদর্শনকারী শিক্ষামূলক ডায়াগ্রাম।'),
    description: l(
      'Follow the flow of electrons from cellular metabolism: superoxide generation by mitochondria, dismutation by SOD, peroxide clearance by the glutathione/GPX cycle powered by NADPH, and the suppression of lipid peroxidation.',
      'কোষীয় বিপাক থেকে ইলেকট্রনের প্রবাহ পর্যবেক্ষণ করুন: মাইটোকন্ড্রিয়ায় সুপারঅক্সাইড তৈরি, SOD দ্বারা রূপান্তর, NADPH চালিত গ্লুটাথিয়ন চক্র দ্বারা পারঅক্সাইড নিষ্ক্রিয়করণ এবং ফেরোপ্টোসিস প্রতিরোধ।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-mitochondrial-ros',
        label: l('1. Mitochondrial Electron Leak & Superoxide (O2•-)', '১. মাইটোকন্ড্রিয়াল ইলেকট্রন লিক ও সুপারঅক্সাইড (O2•-)'),
        description: l('1–2% of electrons leak from ETC Complexes I and III directly onto O2 to form superoxide.', 'মাইটোকন্ড্রিয়ার কমপ্লেক্স ১ ও ৩ থেকে ইলেকট্রন লিক হয়ে সরাসরি অক্সিজেনে যুক্ত হয়ে সুপারঅক্সাইড তৈরি করে।'),
        details: l('Generated primarily at the FMN site of Complex I and the Q-outer site of Complex III.', 'কমপ্লেক্স ১ এবং কমপ্লেক্স ৩-এর বহিঃস্থ অংশে প্রধানত উৎপন্ন হয়।'),
        sectionId: 'introduction',
        color: '#ef4444',
      },
      {
        id: 'node-sod-dismutation',
        label: l('2. Superoxide Dismutase (SOD1/2/3)', '২. সুপারঅক্সাইড ডিসমিউটেজ (SOD1/2/3)'),
        description: l('Dismutates 2 O2•- + 2 H+ into H2O2 and O2 at near-diffusion-limited catalytic rates.', 'সুপারঅক্সাইডকে দ্রুত হাইড্রোজেন পারঅক্সাইড (H2O2) এবং অক্সিজেনে রূপান্তরিত করে।'),
        details: l('SOD1 is cytosolic (Cu/Zn); SOD2 is mitochondrial matrix (Mn); SOD3 is extracellular (Cu/Zn).', 'SOD1 সাইটোসোলে, SOD2 মাইটোকন্ড্রিয়ায় এবং SOD3 বহিঃকোষীয় স্থানে কাজ করে।'),
        sectionId: 'mechanism',
        color: '#f97316',
      },
      {
        id: 'node-gcl-gsh-synthesis',
        label: l('3. Glutamate-Cysteine Ligase (GCL & Cysteine)', '৩. গ্লুটামেট-সিস্টিন লাইগেজ (GCL ও সিস্টিন)'),
        description: l('Rate-limiting ATP-dependent synthesis of gamma-glutamylcysteine from L-glutamate and L-cysteine.', 'এটিপি ব্যবহার করে গ্লুটামেট ও সিস্টিন যুক্ত করে গামা-গ্লুটামিলসিস্টিন তৈরি করে।'),
        details: l('Heterodimer of catalytic (GCLC) and modifier (GCLM) subunits; feedback inhibited by GSH.', 'ক্যাটালাইটিক ও মডিফায়ার সাবইউনিট দ্বারা গঠিত; GSH দ্বারা নিয়ন্ত্রিত হয়।'),
        sectionId: 'structure',
        color: '#eab308',
      },
      {
        id: 'node-gpx1-peroxide-clearance',
        label: l('4. Glutathione Peroxidase-1 (GPX1 & Selenium)', '৪. গ্লুটাথিয়ন পারঅক্সিডেজ-১ (GPX1 ও সেলেনিয়াম)'),
        description: l('Reduces H2O2 to 2 H2O using 2 GSH, forming oxidized glutathione disulfide (GSSG).', 'সেলেনিয়াম সহযোগে H2O2-কে পানিতে পরিণত করে এবং GSH-কে GSSG-তে রূপান্তর করে।'),
        details: l('Utilizes a catalytic selenocysteine (Sec) residue coded by the UGA stop codon.', 'UGA কোডন দ্বারা নির্দিষ্ট সেলেনোসিস্টিন অ্যামিনো অ্যাসিড ব্যবহার করে।'),
        sectionId: 'mechanism',
        color: '#22c55e',
      },
      {
        id: 'node-gsr-nadph-recycling',
        label: l('5. Glutathione Reductase & NADPH (GSR)', '৫. গ্লুটাথিয়ন রিডাক্টেজ ও NADPH (GSR)'),
        description: l('Reduces GSSG back to 2 GSH utilizing electrons from NADPH generated by the PPP.', 'পেন্টোজ ফসফেট পথের NADPH ব্যবহার করে GSSG-কে পুনরায় সক্রিয় GSH-এ ফিরিয়ে আনে।'),
        details: l('FAD-containing homodimer; absolutely dependent on G6PD-derived NADPH flux.', 'FAD যুক্ত এনজাইম; এর কাজের জন্য G6PD থেকে তৈরি NADPH অপরিহার্য।'),
        sectionId: 'mechanism',
        color: '#3b82f6',
      },
      {
        id: 'node-system-xc-cystine',
        label: l('6. System xc- Cystine Antiporter (SLC7A11)', '৬. সিস্টেম xc- সিস্টিন অ্যান্টিপোর্টার (SLC7A11)'),
        description: l('Imports extracellular oxidized cystine in exchange for intracellular glutamate.', 'কোষের ভেতরে গ্লুটামেট বের করে দিয়ে বাইরে থেকে সিস্টিন আমদানি করে।'),
        details: l('Supplies the rate-limiting cysteine precursor for continuous GSH synthesis.', 'গ্লুটাথিয়ন তৈরির প্রধান কাঁচামাল সিস্টিনের নিরবচ্ছিন্ন জোগান নিশ্চিত করে।'),
        sectionId: 'integration',
        color: '#8b5cf6',
      },
      {
        id: 'node-gpx4-ferroptosis-shield',
        label: l('7. GPX4 & Ferroptosis Checkpoint', '৭. GPX4 ও ফেরোপ্টোসিস নিয়ন্ত্রণ কেন্দ্র'),
        description: l('Reduces phospholipid hydroperoxides (PL-OOH) into harmless lipid alcohols (PL-OH).', 'ঝিল্লির বিষাক্ত লিপিড পারঅক্সাইডকে নিরাপদ অ্যালকোহলে পরিণত করে ঝিল্লি রক্ষা করে।'),
        details: l('Direct inhibition of GPX4 by RSL3 triggers lethal membrane lipid peroxidation and ferroptosis.', 'GPX4 অচল হলে ঝিল্লি ফেটে আয়রন-নির্ভর ফেরোপ্টোসিস কোষমৃত্যু ঘটে।'),
        sectionId: 'integration',
        color: '#06b6d4',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'An integrated biochemical map connecting the superoxide dismutase pathway, catalase reaction, glutathione peroxidase and reductase cycle, PPP-derived NADPH regeneration, and the GPX4 ferroptosis gatekeeper.',
      'একটি সমন্বিত জৈবরাসাযনিক মানচিত্র যা সুপারঅক্সাইড ডিসমিউটেজ পথ, ক্যাটালেজ বিক্রিয়া, গ্লুটাথিয়ন পারঅক্সিডেজ ও রিডাক্টেজ চক্র, NADPH পুনরুৎপাদন এবং GPX4 ফেরোপ্টোসিস নিয়ন্ত্রণকারীকে সংযুক্ত করে।'
    ),
    steps: [
      l('Mitochondrial electron transport leaks superoxide, dismutated by SOD to hydrogen peroxide and oxygen.', 'মাইটোকন্ড্রিয়ার লিক হওয়া সুপারঅক্সাইডকে SOD এনজাইম হাইড্রোজেন পারঅক্সাইডে পরিণত করে।'),
      l('Glutathione peroxidase (GPX1) reduces H2O2 to water, converting 2 GSH into oxidized GSSG disulfide.', 'গ্লুটাথিয়ন পারঅক্সিডেজ H2O2-কে পানিতে পরিণত করে এবং GSH-কে GSSG-তে রূপান্তরিত করে।'),
      l('Glutathione reductase (GSR) consumes PPP-derived NADPH to reduce GSSG back to two active GSH molecules.', 'গ্লুটাথিয়ন রিডাক্টেজ NADPH ব্যবহার করে GSSG-কে পুনরায় দুটি সক্রিয় GSH-এ ফিরিয়ে আনে।'),
      l('GPX4 uses GSH to reduce toxic membrane lipid hydroperoxides to lipid alcohols, preventing ferroptosis.', 'GPX4 এনজাইম GSH ব্যবহার করে ঝিল্লির লিপিড পারঅক্সাইড দূর করে ফেরোপ্টোসিস কোষমৃত্যু ঠেকায়।'),
    ],
  },
  assessment: {
    question: l(
      'A 24-year-old female presents to the emergency department 5 hours after ingesting 25 grams of acetaminophen (paracetamol). What is the exact biochemical mechanism by which administration of intravenous N-acetylcysteine (NAC) prevents fatal hepatic necrosis?',
      '২৪ বছর বয়সী এক নারী ২৫ গ্রাম প্যারাসিটামল খাওয়ার ৫ ঘণ্টা পর হাসপাতালে এলো। শিরায় এন-অ্যাসিটাইলসিস্টিন (NAC) প্রয়োগ করলে তা কোন সুনির্দিষ্ট জৈবরাসাযনিক কৌশলে প্রাণঘাতী লিভার ধ্বংস হওয়া থেকে রক্ষা করে?'
    ),
    options: [
      l(
        'NAC provides an exogenous source of L-cysteine, replenishing the rate-limiting substrate for de novo glutathione synthesis, while its free sulfhydryl group directly conjugates and neutralizes electrophilic NAPQI.',
        'NAC কোষে এল-সিস্টিনের জোগান দিয়ে নতুন গ্লুটাথিয়ন তৈরির কাঁচামাল পুনরুদ্ধার করে এবং এর নিজস্ব থায়ল গ্রুপ সরাসরি বিষাক্ত NAPQI-কে নিষ্ক্রিয় করে ফেলে।'
      ),
      l(
        'NAC directly binds to and competitively inhibits cytochrome P450 CYP2E1 with sub-nanomolar affinity.',
        'NAC সরাসরি সাইটোক্রোম P450 CYP2E1 এনজাইমকে স্থায়ীভাবে বন্ধ করে দেয়।'
      ),
      l(
        'NAC accelerates renal glomerular filtration of acetaminophen tenfold, clearing it before hepatic uptake.',
        'NAC কিডনি দিয়ে প্যারাসিটামল বের করে দেওয়ার গতি দশ গুণ বৃদ্ধি করে।'
      ),
      l(
        'NAC acts as an irreversible suicide inhibitor of hepatic glycogen phosphorylase.',
        'NAC যকৃতের গ্লাইকোজেন ভাঙার এনজাইমকে চিরতরে ধ্বংস করে দেয়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'In severe acetaminophen overdose, normal glucuronidation and sulfation pathways are saturated. CYP2E1 metabolizes excess acetaminophen into toxic NAPQI. Once hepatic glutathione is depleted by >70%, NAPQI binds mitochondrial proteins causing cell death. NAC serves as a cysteine precursor to restore hepatic glutathione synthesis, while also directly neutralizing NAPQI via its sulfhydryl group.',
      'অতিরিক্ত প্যারাসিটামল সেবনে স্বাভাবিক বিপাক পথ বন্ধ হয়ে CYP2E1 দ্বারা বিষাক্ত NAPQI তৈরি হয়। যকৃতের ৭০% গ্লুটাথিয়ন শেষ হয়ে গেলে NAPQI মাইটোকন্ড্রিয়া ধ্বংস করে যকৃৎ নষ্ট করে দেয়। NAC সরাসরি সিস্টিন যোগান দিয়ে নতুন গ্লুটাথিয়ন তৈরি করে এবং নিজের থায়ল গ্রুপ দিয়ে বিষাক্ত NAPQI-কে নিষ্ক্রিয় করে দেয়।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Oxygen Paradox: Aerobic Life & Free Radical Generation', 'অক্সিজেন প্যারাডক্স: বায়বীয় জীবন ও মুক্ত র্যাডিক্যালের উৎপত্তি'),
          paragraphs: [
            l(
              'Molecular oxygen (O2) enabled complex multicellular life by allowing cells to extract nearly twenty times more ATP from glucose than anaerobic glycolysis. However, oxygen is an unsparing thermodynamic oxidizer with two unpaired electrons in its outer orbitals having parallel spins. This biradical electronic configuration restricts oxygen to accepting electrons one at a time, generating reactive oxygen species (ROS) during normal mitochondrial respiration.',
              'আণবিক অক্সিজেন (O2) কোষকে অবাধ গ্লাইকোলাইসিসের তুলনায় প্রায় বিশ গুণ বেশি এটিপি শক্তি উৎপাদনের সুযোগ দিয়ে জটিল বহুকোষী জীবনের সূচনা করেছে। তবে অক্সিজেন একই সাথে একটি মারাত্মক জারণকারী উপাদান যার বহিঃস্থ কক্ষপথে দুটি অযুগ্ম ইলেকট্রন সমান্তরাল ঘূর্ণনে থাকে। এই বিশেষ ইলেকট্রন বিন্যাসের কারণে অক্সিজেন একবারে একটি করে ইলেকট্রন গ্রহণ করে, ফলে স্বাভাবিক মাইটোকন্ড্রিয়াল শ্বসনের সময় অনিবার্যভাবে ক্ষতিকর সক্রিয় অক্সিজেন প্রজাতি (ROS) তৈরি হয়।'
            ),
            l(
              'To survive in this oxidizing atmosphere, human cells evolved a multilayered antioxidant defense network. At its heart lies glutathione (GSH), an intracellular tripeptide present in millimolar concentrations. GSH acts as a cellular redox buffer, sacrificing itself to reduce peroxides, neutralize free radicals, and protect proteins, membranes, and DNA from oxidative injury.',
              'এই তীব্র জারণকারী পরিবেশে বেঁচে থাকার জন্য মানবদেহে গড়ে উঠেছে একটি বহুমুখী অ্যান্টিঅক্সিডেন্ট সুরক্ষা বলয়। এর কেন্দ্রবিন্দুতে রয়েছে গ্লুটাথিয়ন (GSH), যা কোষে মিলিমোলার ঘনমাত্রায় উপস্থিত একটি ট্রাইপেপটাইড। গ্লুটাথিয়ন কোষীয় রেডক্স বাফার হিসেবে কাজ করে, নিজে জারিত হয়ে পারঅক্সাইড ধ্বংস করে এবং প্রোটিন, লিপিড ও ডিএনএকে মারাত্মক ক্ষয়ক্ষতি থেকে রক্ষা করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Glutathione Architecture: The Gamma-Glutamyl Linkage', 'গ্লুটাথিয়নের গঠন: অনন্য গামা-গ্লুটামিল বন্ধন'),
          paragraphs: [
            l(
              'Glutathione is a tripeptide composed of L-glutamate, L-cysteine, and glycine (gamma-L-glutamyl-L-cysteinylglycine). Its chemical uniqueness lies in the non-ribosomal peptide bond linking glutamate and cysteine: the bond is forged using the side-chain gamma-carboxyl group of glutamate rather than its alpha-carboxyl group. Synthesized by glutamate-cysteine ligase (GCL) in an ATP-dependent reaction, this gamma-linkage makes glutathione completely resistant to intracellular proteases, which only cleave alpha-peptide bonds.',
              'গ্লুটাথিয়ন হলো এল-গ্লুটামেট, এল-সিস্টিন এবং গ্লাইসিন দ্বারা গঠিত একটি ট্রাইপেপটাইড। এর রাসায়নিক বিশেষত্ব হলো গ্লুটামেট ও সিস্টিনের মধ্যকার পেপটাইড বন্ধনটি আলফা-কার্বক্সিলের বদলে গ্লুটামেটের পার্শ্বশিকলের গামা-কার্বক্সিল ব্যবহার করে তৈরি হয়। GCL এনজাইম দ্বারা এটিপি সহযোগে তৈরি এই অনন্য গামা-বন্ধনটি গ্লুটাথিয়নকে কোষের সাধারণ প্রোটিয়েজ এনজাইমের আক্রমণ থেকে সম্পূর্ণ সুরক্ষিত রাখে।'
            ),
            l(
              'The second step, catalyzed by glutathione synthetase (GS), couples glycine to the cysteinyl alpha-carboxyl group, completing the tripeptide. The functional business end of glutathione is the cysteinyl sulfhydryl (-SH) group. Two molecules of GSH can donate two electrons to reduce a peroxide, forming an oxidized glutathione disulfide dimer (GSSG) joined by a covalent disulfide cross-link.',
              'দ্বিতীয় ধাপে গ্লুটাথিয়ন সিন্থেটেস (GS) এনজাইম সিস্টিনের সাথে গ্লাইসিন যুক্ত করে সম্পূর্ণ ট্রাইপেপটাইড গঠন করে। গ্লুটাথিয়নের মূল কার্যকরী অংশ হলো সিস্টিনের থায়ল (-SH) গ্রুপ। দুটি GSH অণু পারঅক্সাইডকে নিষ্ক্রিয় করতে দুটি ইলেকট্রন দান করে নিজেরা ডাইসালফাইড বন্ধনে যুক্ত হয়ে জারিত গ্লুটাথিয়ন ডাইমারে (GSSG) পরিণত হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Antioxidant Defense Cascade: SOD, Catalase & The GSH Cycle', 'অ্যান্টিঅক্সিডেন্ট সুরক্ষা ধাপসমূহ: SOD, ক্যাটালেজ ও GSH চক্র'),
          paragraphs: [
            l(
              'Mitochondrial electron transport leaks approximately 1–2% of consumed oxygen as superoxide anions (O2•-), predominantly at Complex I and Complex III. Superoxide is rapidly dismutated into molecular oxygen and hydrogen peroxide (H2O2) by superoxide dismutases: SOD1 (Cu/Zn) in the cytoplasm and intermembrane space, SOD2 (Mn) in the mitochondrial matrix, and SOD3 (Cu/Zn) in the extracellular matrix.',
              'মাইটোকন্ড্রিয়ার ইলেকট্রন পরিবহন শৃঙ্খলের কমপ্লেক্স ১ ও ৩ থেকে প্রায় ১–২% অক্সিজেন আংশিক জারিত হয়ে সুপারঅক্সাইড র্যাডিক্যালে (O2•-) পরিণত হয়। সুপারঅক্সাইড ডিসমিউটেজ এনজাইম একে দ্রুত হাইড্রোজেন পারঅক্সাইডে (H2O2) রূপান্তরিত করে: সাইটোসোলে কাজ করে SOD1 (তামা/দস্তা), মাইটোকন্ড্রিয়ায় SOD2 (ম্যাঙ্গানিজ) এবং কোষের বাইরে SOD3।'
            ),
            l(
              'Hydrogen peroxide is subsequently neutralized by two primary systems. Catalase in peroxisomes disproportionates high concentrations of H2O2 into H2O and O2 without consuming reducing equivalents. For low physiological concentrations throughout the cytosol and mitochondria, glutathione peroxidase (GPX1, utilizing a catalytic selenocysteine) reduces H2O2 to water, converting 2 GSH into GSSG. Glutathione reductase (GSR), an FAD-containing homodimer, then consumes NADPH to reduce GSSG back to two active GSH molecules.',
              'হাইড্রোজেন পারঅক্সাইড দুটি প্রধান ব্যবস্থায় নিষ্ক্রিয় হয়। পারঅক্সিজোমে ক্যাটালেজ অতিরিক্ত H2O2-কে সরাসরি পানি ও অক্সিজেনে ভেঙে ফেলে। সাইটোপ্লাজম ও মাইটোকন্ড্রিয়ায় গ্লুটাথিয়ন পারঅক্সিডেজ (GPX1) সেলেনিয়াম ব্যবহার করে H2O2-কে পানিতে পরিণত করে এবং GSH-কে জারিত করে GSSG বানায়। এরপর গ্লুটাথিয়ন রিডাক্টেজ (GSR) এনজাইম NADPH ব্যবহার করে GSSG-কে পুনরায় সক্রিয় GSH-এ ফিরিয়ে আনে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('System xc- & Cellular Cysteine Import for Redox Balance', 'সিস্টেম xc- ও রেডক্স ভারসাম্যে কোষীয় সিস্টিন আমদানি'),
          paragraphs: [
            l(
              'Intracellular glutathione synthesis is strictly limited by the availability of L-cysteine. In the extracellular space, cysteine exists predominantly in its oxidized disulfide dimer form, L-cystine. Cells take up cystine through System xc-, a heterodimeric plasma membrane antiporter composed of SLC7A11 (xCT) and SLC3A2 (4F2hc), which imports one cystine molecule in exchange for one intracellular glutamate molecule.',
              'কোষের ভেতর গ্লুটাথিয়ন তৈরি মূলত এল-সিস্টিনের প্রাপ্যতার ওপর নির্ভর করে। কোষের বাইরের রক্তরসে সিস্টিন জারিত অবস্থায় সিস্টিন ডাইমার হিসেবে থাকে। কোষের ঝিল্লিতে অবস্থিত সিস্টেম xc- বাহক ভেতরের একটি গ্লুটামেট বের করে দিয়ে বাইরে থেকে একটি সিস্টিন ভেতরে টেনে নেয়।'
            ),
            l(
              'Once imported, cystine is rapidly reduced to two cysteine molecules by thioredoxin-1 or GSH. This salvaged cysteine feeds directly into the GCL reaction to sustain intracellular GSH pools. Genetic deletion or pharmacological inhibition of SLC7A11 rapidly starves cells of cysteine, depleting glutathione within hours and triggering cell death.',
              'কোষের ভেতর ঢোকার পর সিস্টিন ভেঙে দুটি মুক্ত সিস্টিন অণুতে পরিণত হয় যা তৎক্ষণাৎ নতুন গ্লুটাথিয়ন তৈরিতে যুক্ত হয়। এই বাহকটি কোনো কারণে বন্ধ হয়ে গেলে কয়েক ঘণ্টার মধ্যে কোষের গ্লুটাথিয়ন শূন্য হয়ে মারাত্মক কোষীয় বিপর্যয় নেমে আসে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Ferroptosis: The Iron-Dependent Lipid Peroxidation Checkpoint', 'ফেরোপ্টোসিস: আয়রন-নির্ভর লিপিড পারঅক্সিডেশন কোষ মৃত্যু'),
          paragraphs: [
            l(
              'Ferroptosis is a regulated, non-apoptotic cell death mechanism driven by unchecked iron-dependent lipid peroxidation in cell membranes. Polyunsaturated fatty acids (PUFAs), especially arachidonic acid in phosphatidylethanolamines, are vulnerable to free radical attack, forming toxic phospholipid hydroperoxides that destroy membrane integrity.',
              'ফেরোপ্টোসিস হলো আয়রন-নির্ভর একটি বিশেষ কোষীয় মৃত্যু যা কোষঝিল্লিতে অতিরিক্ত চর্বি জারণের ফলে ঘটে। কোষঝিল্লির পলিআনস্যাচুরেটেড ফ্যাটি অ্যাসিডগুলো মুক্ত র্যাডিক্যালের আক্রমণে বিষাক্ত পারঅক্সাইডে পরিণত হয় এবং ঝিল্লি ফুটো করে কোষ ধ্বংস করে।'
            ),
            l(
              'Glutathione peroxidase 4 (GPX4) is the master gatekeeper that prevents ferroptosis by reducing lipid hydroperoxides to harmless lipid alcohols using GSH. When glutathione is depleted or GPX4 is inhibited, lipid peroxides accumulate exponentially, rupturing plasma membranes and triggering cell lysis.',
              'গ্লুটাথিয়ন পারঅক্সিডেজ-৪ (GPX4) হলো একমাত্র এনজাইম যা GSH ব্যবহার করে ঝিল্লির লিপিড পারঅক্সাইডগুলোকে নিরাপদ অ্যালকোহলে রূপান্তরিত করে ফেরোপ্টোসিস ঠেকায়। GSH কমে গেলে বা GPX4 বন্ধ হলে কোষঝিল্লি ধ্বংস হয়ে অপমৃত্যু ঘটে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Foundations of Cellular Redox Homeostasis', 'কোষীয় রেডক্স ভারসাম্যের প্রধান মূলনীতি'),
          paragraphs: [
            l(
              'Glutathione and the redox enzymatic cascade demonstrate how cells survive in an oxygen-rich environment. By coordinating mitochondrial SOD dismutation, GCL-GS synthesis of protected gamma-glutamyl GSH, NADPH-driven GSR recycling, and GPX4 ferroptosis surveillance, cells maintain structural integrity and genomic survival.',
              'গ্লুটাথিয়ন এবং রেডক্স এনজাইমগুলো প্রমাণ করে কীভাবে মানবকোষ অক্সিজেনের বিধ্বংসী শক্তির সাথে ভারসাম্য রক্ষা করে বেঁচে থাকে। SOD এনজাইমের কাজ, সুরক্ষিত গ্লুটাথিয়ন সংশ্লেষ, NADPH চালিত পুনর্ব্যবহার এবং GPX4-এর নজরদারি মিলে কোষের সুস্থতা ও দীর্ঘায়ু নিশ্চিত করে।'
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
          heading: l('Thermodynamic & Radical Chemistry of Reactive Oxygen Species', 'সক্রিয় অক্সিজেন প্রজাতির তাপগতিবিদ্যা ও র্যাডিক্যাল রসায়ন'),
          paragraphs: [
            l(
              'The standard reduction potential of the O2/O2•- redox couple is -0.16 V, making univalent oxygen reduction thermodynamically unfavorable under resting cellular conditions. However, when mitochondrial respiratory complexes are highly reduced or inner mitochondrial membrane potential (Delta-Psi-m) is hyperpolarized, electrons leak directly onto ground-state oxygen from flavin mononucleotide (Complex I) or ubisemiquinone intermediates (Complex III).',
              'অক্সিজেনের একক ইলেকট্রন গ্রহণ স্বাভাবিক অবস্থায় শারীরবৃত্তীয়ভাবে ধীরগতির হলেও মাইটোকন্ড্রিয়ার ঝিল্লির বিভব অতিরিক্ত বেড়ে গেলে ইলেকট্রন লিক হয়ে কমপ্লেক্স ১ ও ৩ থেকে সরাসরি অক্সিজেনে স্থানান্তরিত হয়। এর ফলে সুপারঅক্সাইড উৎপন্ন হয় যা কোষের সমস্ত জারণীয় বিপর্যয়ের মূল সূচনা বিন্দু হিসেবে কাজ করে।'
            ),
            l(
              'Superoxide is not strongly reactive toward most biological macromolecules directly, but it rapidly reduces transition metals and dismutates into hydrogen peroxide (H2O2). In the presence of unchelated ferrous iron (Fe2+), H2O2 enters the Fenton cycle, generating the non-enzymatically unregulatable, ultra-reactive hydroxyl radical (•OH).',
              'সুপারঅক্সাইড নিজে সরাসরি কোষের ক্ষতি না করলেও তা দ্রুত হাইড্রোজেন পারঅক্সাইডে রূপান্তরিত হয়। এরপর কোষের মুক্ত আয়রনের সাথে বিক্রিয়া করে ফেন্টন বিক্রিয়ার মাধ্যমে মানবদেহের সবচেয়ে মারাত্মক ও বিধ্বংসী হাইড্রোক্সিল র্যাডিক্যাল তৈরি করে যা কোষের ডিএনএ ও প্রোটিন নষ্ট করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('GCL Catalytic Mechanics & Feedback Inhibition Kinetics', 'GCL অনুঘটন মেকানিজম ও ফিডব্যাক ইনহিবিশন গতিবিদ্যা'),
          paragraphs: [
            l(
              'Glutamate-cysteine ligase (GCL) is a heterodimer composed of a catalytic subunit (GCLC, 73 kDa) and a regulatory modifier subunit (GCLM, 31 kDa). GCLC possesses all catalytic activity, phosphorylating the gamma-carboxyl group of glutamate with ATP to form an enzyme-bound gamma-glutamyl phosphate acyl-phosphate intermediate, which undergoes nucleophilic attack by the amino group of L-cysteine.',
              'গ্লুটাথিয়ন সংশ্লেষণের প্রথম এনজাইম GCL দুটি ভিন্ন সাবইউনিট দিয়ে গঠিত। এর মূল অংশটি এটিপি ব্যবহার করে গ্লুটামেটের গামা-কার্বক্সিলে ফসফেট যুক্ত করে এবং এরপর সিস্টিনের অ্যামিনো গ্রুপের সাথে যুক্ত করে অনন্য গামা-গ্লুটামিল বন্ধনটি তৈরি করে।'
            ),
            l(
              'GCLM association dramatically alters GCLC kinetics, lowering the Km for glutamate from ~18 mM down to ~1.4 mM while increasing the Ki for GSH feedback inhibition from ~2 mM to ~8 mM. This allosteric optimization guarantees that under cellular stress conditions, GCL continues synthesising GSH even against rising intracellular glutathione concentrations.',
              'মডিফায়ার সাবইউনিট যুক্ত হলে এনজাইমটির কার্যকারিতা বহুগুণ বৃদ্ধি পায় এবং এটিপি ও গ্লুটামেটের প্রতি আকর্ষণ অনেক বেড়ে যায়। ফলে তীব্র অক্সিডেটিভ চাপের সময় কোষে প্রচুর গ্লুটাথিয়ন জমে থাকলেও এনজাইমটি নতুন গ্লুটাথিয়ন তৈরি চালিয়ে যেতে পারে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Enzymatic Antioxidant Cascade: SOD, Catalase & The GSH Cycle', 'এনজাইমেটিক অ্যান্টিঅক্সিডেন্ট ক্যাসকেড: SOD, ক্যাটালেজ ও GSH চক্র'),
          paragraphs: [
            l(
              'Mitochondrial electron transport leaks approximately 1–2% of consumed oxygen as superoxide anions (O2•-), predominantly at Complex I and Complex III. Superoxide is rapidly dismutated into molecular oxygen and hydrogen peroxide (H2O2) by superoxide dismutases: SOD1 (Cu/Zn) in the cytoplasm and intermembrane space, SOD2 (Mn) in the mitochondrial matrix, and SOD3 (Cu/Zn) in the extracellular matrix.',
              'মাইটোকন্ড্রিয়ার ইলেকট্রন পরিবহন শৃঙ্খলের কমপ্লেক্স ১ ও ৩ থেকে প্রায় ১–২% অক্সিজেন আংশিক জারিত হয়ে সুপারঅক্সাইড র্যাডিক্যালে (O2•-) পরিণত হয়। সুপারঅক্সাইড ডিসমিউটেজ এনজাইম একে দ্রুত হাইড্রোজেন পারঅক্সাইডে (H2O2) রূপান্তরিত করে: সাইটোসোলে কাজ করে SOD1 (তামা/দস্তা), মাইটোকন্ড্রিয়ায় SOD2 (ম্যাঙ্গানিজ) এবং কোষের বাইরে SOD3।'
            ),
            l(
              'Hydrogen peroxide is subsequently neutralized by two primary systems. Catalase in peroxisomes disproportionates high concentrations of H2O2 into H2O and O2 without consuming reducing equivalents. For low physiological concentrations throughout the cytosol and mitochondria, glutathione peroxidase (GPX1, utilizing a catalytic selenocysteine) reduces H2O2 to water, converting 2 GSH into GSSG. Glutathione reductase (GSR), an FAD-containing homodimer, then consumes NADPH to reduce GSSG back to two active GSH molecules.',
              'হাইড্রোজেন পারঅক্সাইড দুটি প্রধান ব্যবস্থায় নিষ্ক্রিয় হয়। পারঅক্সিজোমে ক্যাটালেজ অতিরিক্ত H2O2-কে সরাসরি পানি ও অক্সিজেনে ভেঙে ফেলে। সাইটোপ্লাজম ও মাইটোকন্ড্রিয়ায় গ্লুটাথিয়ন পারঅক্সিডেজ (GPX1) সেলেনিয়াম ব্যবহার করে H2O2-কে পানিতে পরিণত করে এবং GSH-কে জারিত করে GSSG বানায়। এরপর গ্লুটাথিয়ন রিডাক্টেজ (GSR) এনজাইম NADPH ব্যবহার করে GSSG-কে পুনরায় সক্রিয় GSH-এ ফিরিয়ে আনে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Ferroptosis: The Lipid Peroxidation Death Checkpoint', 'ফেরোপ্টোসিস: লিপিড পারঅক্সিডেশন কোষ মৃত্যু নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Ferroptosis is an iron-dependent form of regulated, non-apoptotic cell death characterized by the lethal accumulation of lipid hydroperoxides within cellular membranes. Polyunsaturated fatty acids (PUFAs), particularly arachidonic and adrenic acids esterified into phosphatidylethanolamines (PE-PUFA), are highly vulnerable to bis-allylic hydrogen abstraction by lipoxygenases (ALOX15) or iron-driven radical chain reactions, forming cytotoxic lipid hydroperoxides (PE-PUFA-OOH).',
              'ফেরোপ্টোসিস হলো একটি আয়রন-নির্ভর অনিয়ন্ত্রিত কোষীয় মৃত্যু যা কোষঝিল্লিতে অতিরিক্ত লিপিড পারঅক্সাইড জমার কারণে ঘটে। বিশেষ করে ফসফাটিডাইলইথানলঅ্যামিনের সাথে যুক্ত পলিআনস্যাচুরেটেড ফ্যাটি অ্যাসিডগুলো (অ্যারাকিডোনিক এসিড) আয়রনের উপস্থিতিতে সহজে জারিত হয়ে মারাত্মক বিষাক্ত লিপিড পারঅক্সাইডে পরিণত হয়।'
            ),
            l(
              'Glutathione peroxidase-4 (GPX4) is the solitary cellular enzyme capable of reducing phospholipid hydroperoxides directly inside biological membranes into harmless phospholipid alcohols (PE-PUFA-OH). GPX4 strictly requires GSH as an electron donor. Pharmacological inhibition of system xc- by erastin starves cells of cystine, collapsing GSH pools and inactivating GPX4. Unchecked lipid peroxidation destabilizes plasma membranes, forming physical pores that trigger catastrophic lytic necrosis.',
              'গ্লুটাথিয়ন পারঅক্সিডেজ-৪ (GPX4) হলো একমাত্র এনজাইম যা সরাসরি কোষঝিল্লির ভেতর এই লিপিড পারঅক্সাইডগুলোকে ক্ষতিকর অ্যালকোহলে রূপান্তরিত করে কোষের অখণ্ডতা রক্ষা করে। GPX4-এর কার্যকারিতার জন্য GSH একান্ত আবশ্যক। সিস্টেম xc- বন্ধ হয়ে গেলে কোষে সিস্টিন ও GSH কমে যায়, যার ফলে GPX4 অকেজো হয়ে পড়ে এবং লিপিড পারঅক্সিডেশনে ঝিল্লি ফেটে কোষের অপমৃত্যু ঘটে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Fenton Chemistry & The Gamma-Glutamyl Cycle Pharmacology', 'ফেন্টন বিক্রিয়া ও গামা-গ্লুটামিল চক্র ফার্মাকোলজি'),
          paragraphs: [
            l(
              'If hydrogen peroxide is not rapidly cleared by GPX or catalase, it reacts with trace labile ferrous iron (Fe2+) via the Fenton reaction (Fe2+ + H2O2 -> Fe3+ + •OH + OH-). The resulting hydroxyl radical (•OH) has a diffusion radius of less than a few nanometers and reacts instantaneously at diffusion-controlled rates with whichever biological macromolecule it encounters, initiating lipid autoxidation, protein carbonylation, and DNA strand breaks.',
              'হাইড্রোজেন পারঅক্সাইড সময়মতো নিষ্ক্রিয় না হলে তা কোষের মুক্ত ফেরাস আয়রনের (Fe2+) সাথে বিক্রিয়া করে ফেন্টন বিক্রিয়া ঘটায়। এর ফলে উৎপন্ন হাইড্রোক্সিল র্যাডিক্যাল (•OH) কয়েক ন্যানোমিটারের মধ্যে উপস্থিত যেকোনো ডিএনএ, লিপিড বা প্রোটিন অণুর সাথে তাৎক্ষণিকভাবে বিক্রিয়া করে অপূরণীয় ক্ষতিসাধন করে।'
            ),
            l(
              'The Meister gamma-glutamyl cycle, mediated by cell-surface gamma-glutamyltransferase (GGT), breaks down extracellular glutathione by transferring the gamma-glutamyl moiety to amino acids or water. In the kidney, this system recovers costly filtered cysteine, preventing massive urinary amino acid wasting. Serum GGT elevation serves as a highly sensitive clinical biomarker of biliary tract pathology, alcohol abuse, and systemic oxidative stress.',
              'মাস্টার গামা-গ্লুটামিল চক্রের মাধ্যমে কোষের উপরিভাগের GGT এনজাইম বহিঃকোষীয় গ্লুটাথিয়নকে ভেঙে মূল্যবান সিস্টিনকে উদ্ধার করে রক্তে ফিরিয়ে আনে। বৃক্কে এই ব্যবস্থা প্রস্রাবের মাধ্যমে সিস্টিনের অপচয় রোধ করে। রক্তে GGT-এর মাত্রা বেড়ে যাওয়া পিত্তনালীর রোগ, অতিরিক্ত মদ্যপান এবং সার্বিক অক্সিডেটিভ স্ট্রেসের একটি নির্ভরযোগ্য ক্লিনিক্যাল ল্যাবরেটরি মার্কার।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Therapeutic Targeting of Redox Homeostasis & Clinical Takeaways', 'রেডক্স ভারসাম্য নিয়ন্ত্রণের চিকিৎসা কৌশল ও মূল শিক্ষা'),
          paragraphs: [
            l(
              'Targeting the glutathione and redox machinery provides powerful therapeutic opportunities across oncology and toxicology. In cancer cells that upregulate system xc- to evade ferroptosis, pharmacological inhibitors (such as sulfasalazine or sorafenib) trigger tumor cell death. Conversely, replenishing glutathione via N-acetylcysteine remains the gold-standard intervention against acetaminophen-induced liver failure, highlighting the clinical centrality of cellular redox balance.',
              'গ্লুটাথিয়ন ও রেডক্স ব্যবস্থা নিয়ন্ত্রণ ক্যান্সার চিকিৎসা ও টক্সিকোলজিতে অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে। ক্যান্সার কোষগুলো ফেরোপ্টোসিস এড়াতে সিস্টেম xc- বাড়িয়ে বেঁচে থাকে, যা বিশেষ ওষুধ দিয়ে বন্ধ করে ক্যান্সার ধ্বংস করা সম্ভব। বিপরীতভাবে, প্যারাসিটামলের বিষক্রিয়ায় এন-অ্যাসিটাইলসিস্টিন দিয়ে গ্লুটাথিয়ন পুনঃপ্রতিষ্ঠা করে জীবন রক্ষা করা যায়, যা মানবদেহে রেডক্স ভারসাম্যের অপরিহার্য গুরুত্ব তুলে ধরে।'
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
          heading: l('Structural Enzymology of GPX4 & Mechanisms of Small-Molecule Inhibitors', 'GPX4 এর গাঠনিক এনজাইমবিজ্ঞান ও আধুনিক ওষুধের ক্রিয়াকৌশল'),
          paragraphs: [
            l(
              'Glutathione peroxidase 4 (GPX4) possesses a catalytic selenocysteine (Sec46) located at the center of an exposed flat surface rather than within a deep catalytic cleft. This unique surface architecture allows GPX4 to accept bulky lipid hydroperoxide substrates directly from lipid bilayers, distinguishing it from all other water-soluble GPX isoforms.',
              'GPX4 এনজাইমের সক্রিয় কেন্দ্রে একটি সেলেনোসিস্টিন অ্যামিনো অ্যাসিড থাকে যা কোনো গভীর পকেটে না থেকে সমতল উপরিভাগে উন্মুক্ত থাকে। এই অনন্য গঠনের কারণে GPX4 সরাসরি কোষঝিল্লির চর্বির ভেতর ঢুকে বড় আকারের লিপিড পারঅক্সাইড সাবস্ট্রেটকে ভেঙে নিষ্ক্রিয় করতে পারে।'
            ),
            l(
              'Covalent GPX4 inhibitors (such as RSL3 and ML162) contain electrophilic chloroacetamide moieties that selectively alkylate the nucleophilic selenol group of Sec46, permanently inactivating the enzyme. In therapy-resistant, dedifferentiated mesenchymal cancer cells that rely obligately on GPX4 to suppress ferroptosis, RSL3 exposure induces catastrophic, synchronized cell death within hours.',
              'আধুনিক ক্যান্সার প্রতিরোধী ওষুধ RSL3 সরাসরি GPX4 এর সেলেনিয়াম গ্রুপের সাথে স্থায়ীভাবে যুক্ত হয়ে এনজাইমটিকে অকেজো করে দেয়। যে সব ক্যান্সার কোষ কেমোথেরাপি প্রতিরোধী হয়ে ওঠে, সেগুলোতে এই ওষুধ দিলে কয়েক ঘণ্টার মধ্যে মারাত্মক লিপিড পারঅক্সিডেশন ঘটে ক্যান্সার কোষগুলো সম্পূর্ণ ধ্বংস হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Redox Therapeutics in Clinical Toxicology & Oncology', 'ক্লিনিক্যাল টক্সিকোলজি ও ক্যান্সারে রেডক্স থেরাপির প্রয়োগ'),
          paragraphs: [
            l(
              'In clinical acetaminophen poisoning, administration of intravenous N-acetylcysteine within 8 hours of ingestion reduces mortality from fulminant hepatic necrosis to nearly zero. Beyond restoring cysteine pools for GCL, NAC acts as a direct scavenger of reactive oxygen species and improves microvascular perfusion by restoring nitric oxide availability in hepatic sinusoids.',
              'প্যারাসিটামল বিষক্রিয়ার ৮ ঘণ্টার মধ্যে শিরায় এন-অ্যাসিটাইলসিস্টিন (NAC) প্রয়োগ করলে যকৃৎ নষ্ট হয়ে মৃত্যুহার শূন্যের কোঠায় নামিয়ে আনা যায়। গ্লুটাথিয়ন তৈরির পাশাপাশি NAC সরাসরি ক্ষতিকর মুক্ত র্যাডিক্যাল ধ্বংস করে এবং যকৃতের সূক্ষ্ম রক্তনালীতে রক্ত চলাচল বৃদ্ধি করে কোষকে পুনরুজ্জীবিত করে।'
            ),
          ],
        },
      ],
    },
  },
}
