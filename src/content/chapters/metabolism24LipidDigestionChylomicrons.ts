import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const chylomicronRefs = [
  {
    id: 'mansbach-chylomicron-2010',
    authors: 'Charles M. Mansbach II, Faheem Siddiqi',
    title: 'The biogenesis of chylomicrons. Annual Review of Physiology, 72:315-333',
    organization: 'Annual Reviews',
    year: 2010,
    url: 'https://pubmed.ncbi.nlm.nih.gov/20148679/',
  },
  {
    id: 'lehninger-biochem-8e-ch17',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 17: Fatty Acid Catabolism',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'hussain-mtp-2012',
    authors: 'M. Mahmood Hussain, Pan X',
    title: 'Microsomal triglyceride transfer protein: a multifunctional protein. Frontiers in Bioscience, 17:1083-1102',
    organization: 'Frontiers in Bioscience',
    year: 2012,
    url: 'https://pubmed.ncbi.nlm.nih.gov/22201792/',
  },
  {
    id: 'harpers-biochem-32e-ch25',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 25: Lipid Transport & Storage",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'marks-medbiochem-6e-ch32',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 32: Digestion and Absorption of Dietary Lipids",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

const chylomicron3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Intestinal Lipid Digestion & Lymphatic Transit',
    '৩ডি বহু-অঙ্গীয় অন্ত্রের লিপিড পরিপাক ও লসিকা পরিবহনের মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and explore coordinate space to trace how dietary fats are emulsified in the duodenum, absorbed by enterocytes, assembled into chylomicrons, and transported via mesenteric lacteals and the thoracic duct.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে খাদ্যস্থ চর্বি ডুওডেনামে দ্রবীভূত হয়, অন্ত্রের কোষে শোষিত হয়ে কাইলোমাইক্রনে রূপ নেয় এবং লসিকা নালীর মাধ্যমে রক্তে প্রবেশ করে।'
  ),
  description: l(
    'Dietary lipids follow a unique gastrointestinal and vascular bypass: bile acids from the liver and gallbladder emulsify triacylglycerols in the duodenum; pancreatic lipase and colipase hydrolyze them to 2-monoacylglycerol and free fatty acids; enterocytes absorb them via CD36 and NPC1L1, resynthesize them via MGAT/DGAT, and assemble ApoB-48 chylomicrons via MTP; chylomicrons enter mesenteric lacteals to bypass the hepatic portal vein, draining into the thoracic duct directly into systemic circulation.',
    'খাদ্যের চর্বি পরিপাকতন্ত্রে একটি বিশেষ পথ অনুসরণ করে: পিত্তরস চর্বিকে দ্রবীভূত করে; অগ্ন্যাশয়ের লাইপেজ এনজাইম তা ভেঙে ক্ষুদ্র অংশে পরিণত করে; অন্ত্রের কোষ তা গ্রহণ করে পুনরায় চর্বি বানিয়ে MTP এনজাইম দ্বারা ApoB-48 কাইলোমাইক্রনে সাজায়; যা পোর্টাল শিরাকে এড়িয়ে লসিকা নালী ও থোরাসিক ডাক্ট দিয়ে সরাসরি রক্ত সংবহনে পৌঁছায়।'
  ),
  organs: [
    {
      id: 'organ-duodenum-micelle',
      name: l('Duodenum & Jejunum (Bile Salt Emulsification & Lipolysis)', 'ডুওডেনাম ও জেজুনাম (পিত্তলবণ দ্বারা ইমালসিফিকেশন ও পরিপাক)'),
      latinName: 'Duodenum et Jejunum',
      system: l('Gastrointestinal Digestive System', 'পরিপাকতন্ত্র'),
      cavity: l('Peritoneal Cavity (Epigastrium & Umbilical Region)', 'পেরিটোনিয়াল গহ্বর (এপিগ্যাস্ট্রিয়াম ও নাভি অঞ্চল)'),
      position3D: { x: 4, y: 190, z: 2 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'intestines',
      description: l(
        'The site of luminal lipid digestion. Bile salts from the gallbladder form mixed micelles (4–8 nm diameter) with phospholipids and cholesterol. Pancreatic lipase and colipase dock at the micelle surface, cleaving dietary triacylglycerol at the sn-1 and sn-3 positions.',
        'লুমেনীয় চর্বি পরিপাকের প্রধান স্থান। পিত্তলবণ ফ্যাটের সাথে মিলে ক্ষুদ্র মাইসেলি তৈরি করে। অগ্ন্যাশয়ের লাইপেজ ও কোলিপাইপেজ এই তলে যুক্ত হয়ে ট্রাইগ্লিসারাইডকে ভেঙে ২-মনোগ্লিসারাইড ও ফ্যাটি অ্যাসিডে পরিণত করে।'
      ),
      spatialRelations: l(
        'The C-loop of the duodenum embraces the head of the pancreas, receiving the common bile duct and main pancreatic duct via the hepatopancreatic ampulla of Vater.',
        'ডুওডেনামের খাঁজে অগ্ন্যাশয় অবস্থান করে এবং অ্যাম্পুলা অফ ভাটারের মাধ্যমে পিত্তনালী ও অগ্ন্যাশয় নালী থেকে পাচক রস গ্রহণ করে।'
      ),
      physiology: l(
        'Colipase binds the C-terminal non-catalytic domain of pancreatic lipase, displacing inhibitory bile salts and anchoring the catalytic triad (Ser152-Asp176-His263) directly against the lipid interface.',
        'কোলিপাইপেজ এনজাইম লাইপেজের সাথে যুক্ত হয়ে পিত্তলবণের বাধা দূর করে এবং সক্রিয় স্থানকে সরাসরি চর্বির ওপর কার্যকর রাখে।'
      ),
      nutritionConnection: l(
        'Fat-soluble vitamins (A, D, E, K) require bile salt mixed micelle incorporation for absorption; biliary obstruction causes severe fat and vitamin malabsorption (steatorrhea).',
        'চর্বিতে দ্রবণীয় ভিটামিন (A, D, E, K) শোষণের জন্য এই মাইসেলি গঠন অপরিহার্য; পিত্তনালী বন্ধ হলে মলের সাথে চর্বি বেরিয়ে যায় (স্টিয়াটোরিয়া)।'
      ),
      clinicalSignificance: l(
        'Orlistat is an irreversible pharmacological inhibitor of gastric and pancreatic lipases that blocks 30% of dietary fat digestion, used clinically for weight management.',
        'অরলিস্ট্যাট হলো লাইপেজ এনজাইমের ইনহিবিটর যা খাদ্যের চর্বি পরিপাক ৩০% কমিয়ে দিয়ে ওজন নিয়ন্ত্রণে ব্যবহৃত হয়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-enterocyte-mtp',
      name: l('Intestinal Enterocytes (ApoB-48 Editing & Chylomicron Assembly)', 'অন্ত্রের এন্টারোসাইট কোষ (ApoB-48 এডিটিং ও কাইলোমাইক্রন সমাবেশ)'),
      latinName: 'Enterocyti Intestinales',
      system: l('Mucosal Epithelial System', 'মিউকোসাল এপিথেলিয়াল তন্ত্র'),
      cavity: l('Intestinal Mucosal Lining', 'অন্ত্রের শ্লেষ্মা স্তর'),
      position3D: { x: -6, y: 180, z: 4 },
      color: '#10b981',
      highlightColor: '#34d399',
      shapeType: 'intestines',
      description: l(
        'Polarized epithelial cells that absorb digested lipids across apical microvilli via CD36, FATP4, and NPC1L1. The enzyme APOBEC-1 edits ApoB mRNA to generate ApoB-48. Microsomal Triglyceride Transfer Protein (MTP) packages lipid cores inside the ER lumen.',
        'অন্ত্রের কোষগুলো ব্রাশ বর্ডারের মাধ্যমে চর্বি শোষণ করে। APOBEC-1 এনজাইম ApoB-48 তৈরি করে এবং MTP এনজাইম এন্ডোপ্লাজমিক রেটিকুলামের ভেতরে কাইলোমাইক্রন দানা তৈরি করে।'
      ),
      spatialRelations: l(
        'Lines the villi of the jejunum; mucosal surface amplified 600-fold by plicae circulares, villi, and microvilli.',
        'জেজুনামের ভিলাইয়ের প্রাচীর গঠন করে এবং অন্ত্রের শোষণ তলকে ৬০০ গুণ বৃদ্ধি করে চর্বি শোষণ নিশ্চিত করে।'
      ),
      physiology: l(
        'Re-esterifies lipids via MGAT2, DGAT1, and ACAT2; packages them with phospholipids and ApoB-48 into pre-chylomicron vesicles that bud via Sar1b/COPII machinery.',
        'শোষিত ফ্যাটি অ্যাসিডকে পুনরায় ট্রাইগ্লিসারাইড বানায় এবং ApoB-48 সহকারে প্রাক-কাইলোমাইক্রন ভেসিকল তৈরি করে গলজি বডিতে পাঠায়।'
      ),
      nutritionConnection: l(
        'Ezetimibe inhibits the apical enterocyte cholesterol transporter NPC1L1, lowering dietary cholesterol absorption by >50%.',
        'ইজেটিমাইব ওষুধটি অন্ত্রের NPC1L1 বাহককে অবরুদ্ধ করে কোলেস্টেরল শোষণ ৫০%-এর বেশি কমিয়ে দেয়।'
      ),
      clinicalSignificance: l(
        'Abetalipoproteinemia (Bassen-Kornzweig syndrome) results from MTP gene mutations; enterocytes become engorged with trapped lipid, causing severe failure to thrive, acanthocytosis, and spinocerebellar ataxia.',
        'অ্যাবেটালাইপোপ্রোটিনেমিয়ায় MTP নষ্ট থাকায় চর্বি অন্ত্রের কোষে আটকে থাকে এবং বের হতে পারে না, যার ফলে মারাত্মক অপুষ্টি ও স্নায়ুক্ষয় ঘটে।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-lacteals-lymph',
      name: l('Mesenteric Lacteals & Cisterna Chyli (The Chyle River)', 'মেসেন্টেরিক ল্যাকটিয়েল ও সিস্টার্না কাইলি (কাইল লসিকা নদী)'),
      latinName: 'Vasa Lactea et Cisterna Chyli',
      system: l('Lymphatic & Vascular Bypass System', 'লসিকা ও ভাস্কুলার বাইপাস তন্ত্র'),
      cavity: l('Mesentery & Retroperitoneum (L1–L2)', 'মেসেন্টারি ও রেট্রোপেরিটোনিয়াম (L1–L2)'),
      position3D: { x: 0, y: 165, z: -4 },
      color: '#06b6d4',
      highlightColor: '#22d3ee',
      shapeType: 'stomach',
      description: l(
        'Blind-ended lymphatic capillaries (lacteals) inside intestinal villi have large button-like interendothelial junctions (up to 600 nm wide) that swallow massive chylomicron particles, forming milky lipid-rich lymph called chyle.',
        'ভিলাইয়ের ভেতরে থাকা বিশেষ লসিকা নালী (ল্যাকটিয়েল) যার প্রাচীরে বড় বড় ফাঁক থাকে; এটি বিশালাকার কাইলোমাইক্রন কণাগুলোকে শুষে নিয়ে দুধের মতো সাদা লসিকা রস (কাইল) তৈরি করে।'
      ),
      spatialRelations: l(
        'Lacteals coalesce into mesenteric lymphatic trunks that drain into the retroperitoneal cisterna chyli anterior to the L1–L2 vertebral bodies.',
        'সমস্ত মেসেন্টেরিক লসিকা নালী একত্রিত হয়ে মেরুদণ্ডের সামনে সিস্টার্না কাইলিতে গিয়ে মিলিত হয়।'
      ),
      physiology: l(
        'Propelled by intestinal smooth muscle contractions and rhythmic respiratory thoracic negative pressure swings, bypassing the portal vein entirely.',
        'অন্ত্রের সংকোচন এবং শ্বাসপ্রশ্বাসের চাপের ওঠানামার মাধ্যমে এই লসিকা রস ওপরের দিকে প্রবাহিত হয় এবং যকৃতের পোর্টাল শিরাকে পুরোপুরি এড়িয়ে চলে।'
      ),
      nutritionConnection: l(
        'Medium-chain triglycerides (MCTs, C6–C10) are sufficiently water-soluble to bypass chylomicron assembly and lacteals entirely, entering portal blood directly.',
        'মাঝারি শিকলের চর্বি (MCT, C6-C10) কাইলোমাইক্রন না হয়ে সরাসরি রক্তে প্রবেশ করতে পারে; তাই পরিপাকের সমস্যায় রোগীদের MCT ডায়েট দেওয়া হয়।'
      ),
      clinicalSignificance: l(
        'Rupture or obstruction of the thoracic duct causes chylothorax, filling the pleural space with milky chyle containing triglycerides >110 mg/dL.',
        'বক্ষ গহ্বরে থোরাসিক ডাক্ট ফেটে গেলে কাইলোথোরাক্স হয়, যার ফলে ফুসফুসের পর্দায় দুধের মতো সাদা চর্বিযুক্ত রস জমা হয়।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-thoracic-duct',
      name: l('Thoracic Duct & Subclavian Vein (Systemic Vascular Entry)', 'থোরাসিক ডাক্ট ও সাবক্ল্যাভিয়ান শিরা (রক্ত সংবহনে প্রবেশদ্বার)'),
      latinName: 'Ductus Thoracicus',
      system: l('Lymphatic & Systemic Venous Confluence', 'লসিকা ও শিরাস্থ সংবহন সঙ্গম'),
      cavity: l('Posterior & Superior Mediastinum', 'পশ্চাৎ ও ঊর্ধ্ব মিডিয়াস্টিনাম'),
      position3D: { x: -6, y: 265, z: -2 },
      color: '#6366f1',
      highlightColor: '#818cf8',
      shapeType: 'heart',
      description: l(
        'The largest lymphatic vessel in the human body (38–45 cm long). Ascends through the aortic hiatus of the diaphragm and drains chylomicron-laden chyle directly into the junction of the left internal jugular and left subclavian veins.',
        'মানবদেহের বৃহত্তম লসিকা নালী (৩৮-৪৫ সেমি দীর্ঘ)। এটি ডায়াফ্রাম ভেদ করে ওপরে উঠে বাম সাবক্ল্যাভিয়ান শিরায় কাইলোমাইক্রনভর্তি লসিকা সরাসরি রক্তে ছেড়ে দেয়।'
      ),
      spatialRelations: l(
        'Ascends in the posterior mediastinum between the thoracic aorta on the left and the azygos vein on the right, posterior to the esophagus.',
        'বক্ষ গহ্বরে খাদ্যনালীর পেছনে এবং মহাধমনীর পাশে অবস্থান করে ঘাড়ের বাম পাশে গিয়ে শিরায় মিলিত হয়।'
      ),
      physiology: l(
        'Dumps nascent chylomicrons into venous blood at a rate of 1.5–2.5 L/day, allowing peripheral tissues (skeletal muscle, adipose, heart) first access to dietary fatty acids via Lipoprotein Lipase (LPL) before reaching the liver.',
        'প্রতিদিন ১.৫ থেকে ২.৫ লিটার চর্বিযুক্ত রস রক্তে দেয়; ফলে যকৃতে যাওয়ার আগেই কঙ্কালপেশি, হৃদপিণ্ড ও চর্বিকলা LPL এনজাইমের মাধ্যমে চর্বি গ্রহণ করতে পারে।'
      ),
      nutritionConnection: l(
        'ApoC-II and ApoE are transferred onto nascent chylomicrons from circulating HDL particles in plasma, activating LPL for fatty acid delivery.',
        'রক্তে থাকা এইচডিএল (HDL) কণা কাইলোমাইক্রনকে ApoC-II প্রোটিন ধার দেয়, যা রক্তনালীর প্রাচীরে চর্বি ভাঙার লাইপেজ এনজাইমকে সক্রিয় করে।'
      ),
      clinicalSignificance: l(
        'Chylomicron Retention Disease (Anderson disease) results from SAR1B mutations, trapping pre-chylomicrons in enterocytes and preventing lymphatic discharge.',
        'কাইলোমাইক্রন রিটেনশন ডিজিজে SAR1B জিনের ত্রুটির কারণে কাইলোমাইক্রন অন্ত্রের কোষ থেকে লসিকা নালীতে বের হতে পারে না।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism24LipidDigestionChylomicronsLesson: LessonTopic = {
  id: 'topic.metabolism.lipid-digestion-chylomicrons',
  slug: 'lipid-digestion-chylomicrons',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '24 · Intestinal Lipid Digestion, Absorption & Chylomicron Assembly',
    '২৪ · অন্ত্রে লিপিড পরিপাক, শোষণ ও কাইলোমাইক্রন সমাবেশ'
  ),
  summary: l(
    'The physiology and molecular architecture of dietary lipid processing: bile salt micellar emulsification, pancreatic lipase-colipase interfacial catalysis, apical enterocyte transporters (CD36, NPC1L1, FATP4), intracellular TAG resynthesis (MGAT2, DGAT1, ACAT2), APOBEC-1 RNA editing of ApoB-48, MTP-mediated lipidation, Sar1b/COPII pre-chylomicron vesicle trafficking, and bypass of portal clearance via mesenteric lacteals and the thoracic duct.',
    'খাদ্যস্থ চর্বি প্রক্রিয়াকরণের শারীরবৃত্ত ও আণবিক বিজ্ঞান: পিত্তলবণের মাইসেলি ইমালসিফিকেশন, অগ্ন্যাশয়ের লাইপেজ-কোলিপাইপেজ অনুঘটন, অন্ত্রের বাহক প্রোটিন (CD36, NPC1L1, FATP4), অন্তঃকোষীয় ট্রাইগ্লিসারাইড পুনর্গঠন (MGAT2, DGAT1), APOBEC-1 দ্বারা ApoB-48 আরএনএ এডিটিং, MTP দ্বারা কাইলোমাইক্রন লিপিডেশন, Sar1b/COPII ভেসিকল পরিবহন এবং মেসেন্টেরিক ল্যাকটিয়েল ও থোরাসিক ডাক্ট দ্বারা পোর্টাল রক্ত সংবহন এড়ানোর সম্পূর্ণ পথ।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Detail the mechanism of luminal lipid emulsification and interfacial enzymatic cleavage by pancreatic triglyceride lipase and colipase, explaining how colipase anchors lipase against the inhibitory barrier of bile salts.',
      'পিত্তলবণ দ্বারা চর্বির ইমালসিফিকেশন এবং অগ্ন্যাশয়ের লাইপেজ ও কোলিপাইপেজ দ্বারা ভাঙনের প্রক্রিয়া ব্যাখ্যা করা এবং বিশ্লেষণ করা কীভাবে কোলিপাইপেজ পিত্তলবণের বাধা দূর করে লাইপেজকে চর্বির তলে কার্যকর রাখে।'
    ),
    l(
      'Trace the intracellular pathway of chylomicron biogenesis in the enterocyte, detailing apical uptake (CD36, NPC1L1), TAG resynthesis (MGAT, DGAT1), APOBEC-1 RNA editing creating ApoB-48, MTP lipidation, and Sar1b-COPII pre-chylomicron vesicle budding.',
      'অন্ত্রের এন্টারোসাইটে কাইলোমাইক্রন তৈরির সম্পূর্ণ পথ অনুসরণ করা, যার মধ্যে রয়েছে শোষণ (CD36, NPC1L1), চর্বি পুনর্গঠন (MGAT, DGAT1), APOBEC-1 দ্বারা ApoB-48 তৈরি, MTP লিপিডেশন এবং Sar1b-COPII ভেসিকল পরিবহন।'
    ),
    l(
      'Contrast the portal venous clearance of water-soluble nutrients with the mesenteric lacteal lymphatic absorption of chylomicrons, evaluating the pathophysiology of Abetalipoproteinemia (MTP mutations) and Chylomicron Retention Disease (SAR1B mutations).',
      'পানিতে দ্রবণীয় পুষ্টির পোর্টাল সংবহনের সাথে কাইলোমাইক্রনের লসিকা নালী ও থোরাসিক ডাক্ট পরিবহনের পার্থক্য নির্ণয় করা এবং অ্যাবেটালাইপোপ্রোটিনেমিয়া (MTP) ও কাইলোমাইক্রন রিটেনশন ডিজিজের (SAR1B) আণবিক প্যাথলজি মূল্যায়ন করা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.fatty-acid-oxidation-ketones'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.lipoproteins-lipid-flux'],
  references: chylomicronRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch17', 'marks-medbiochem-6e-ch32'],
    structure: ['mansbach-chylomicron-2010', 'harpers-biochem-32e-ch25'],
    mechanism: ['mansbach-chylomicron-2010', 'hussain-mtp-2012'],
    integration: ['hussain-mtp-2012', 'marks-medbiochem-6e-ch32'],
    practice: ['mansbach-chylomicron-2010', 'hussain-mtp-2012'],
    takeaways: ['lehninger-biochem-8e-ch17', 'mansbach-chylomicron-2010'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Luminal Emulsification & The Micellar Gateway', '১. লুমেনীয় ইমালসিফিকেশন ও মাইসেলি গেটওয়ে'), sectionId: 'introduction' },
      { id: 'sec-lipases', label: l('2. Interfacial Enzymology: Pancreatic Lipase & Colipase', '২. ইন্টারফেসিয়াল এনজাইমোলজি: অগ্ন্যাশয় লাইপেজ ও কোলিপাইপেজ'), sectionId: 'structure' },
      { id: 'sec-enterocyte', label: l('3. Enterocyte Uptake, Resynthesis & APOBEC-1 Editing', '৩. অন্ত্রের শোষণ, পুনর্গঠন ও APOBEC-1 এডিটিং'), sectionId: 'mechanism' },
      { id: 'sec-mtp-lymph', label: l('4. MTP Lipidation, PCTV Budding & The Lymphatic River', '৪. MTP লিপিডেশন, ভেসিকল পরিবহন ও লসিকা নদী'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Quantitative Lipid Yield & Medium-Chain Triglyceride Bypass', '৫. পরিমাণগত লিপিড ফলন ও মাঝারি চর্বির বাইপাস'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Clinical Inborn Errors: Abetalipoproteinemia & Summary', '৬. জন্মগত রোগ: অ্যাবেটালাইপোপ্রোটিনেমিয়া ও সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Microsomal Triglyceride Transfer Protein (MTP)', 'মাইক্রোসোমাল ট্রাইগ্লিসারাইড ট্রান্সফার প্রোটিন (MTP)'),
        definition: l(
          'An essential heterodimeric chaperone in the endoplasmic reticulum lumen that transfers neutral lipids (triacylglycerols and cholesteryl esters) onto nascent ApoB-48 as it is translated, creating the embryonic chylomicron core.',
          'এন্ডোপ্লাজমিক রেটিকুলামের ভেতরে থাকা একটি অত্যাবশ্যকীয় প্রোটিন যা তৈরি হতে থাকা ApoB-48 এর সাথে ট্রাইগ্লিসারাইড ও কোলেস্টেরল যুক্ত করে কাইলোমাইক্রনের মূল কাঠামো তৈরি করে।'
        ),
      },
      {
        term: l('APOBEC-1 (ApoB mRNA Editing Enzyme)', 'APOBEC-1 (ApoB আরএনএ এডিটিং এনজাইম)'),
        definition: l(
          'A cytidine deaminase expressed in human enterocytes that deaminates cytosine 6666 to uracil in ApoB mRNA, converting codon 2153 from CAA (glutamine) to UAA (stop codon), truncating full-length ApoB-100 into intestinal ApoB-48.',
          'একটি বিশেষ এনজাইম যা অন্ত্রের কোষে ApoB আরএনএ-র সাইটোসিনকে ইউরাসিলে রূপান্তরিত করে একটি স্টপ কোডন তৈরি করে; যার ফলে যকৃতের ApoB-100 এর বদলে অন্ত্রে ছোট আকারের ApoB-48 তৈরি হয়।'
        ),
      },
      {
        term: l('Niemann-Pick C1-Like 1 (NPC1L1)', 'নিম্যান-পিক C1-লাইক ১ (NPC1L1)'),
        definition: l(
          'A 13-transmembrane polytopic transporter located on the apical microvillar membrane of human enterocytes that mediates the active endocytic uptake of unesterified cholesterol; molecular pharmacological target of ezetimibe.',
          'অন্ত্রের ব্রাশ বর্ডারে থাকা একটি প্রধান প্রোটিন বাহক যা খাদ্য থেকে মুক্ত কোলেস্টেরল কোষে প্রবেশ করায়; এটি কোলেস্টেরল কমানোর ওষুধ ইজেটিমাইবের প্রধান লক্ষ্যবস্তু।'
        ),
      },
      {
        term: l('Colipase', 'কোলিপাইপেজ (Colipase)'),
        definition: l(
          'A 10-kDa pancreatic co-protein secreted as procolipase and activated by trypsin; binds the C-terminal domain of pancreatic lipase, displacing inhibitory bile salts and anchoring the active site against the lipid-water emulsion interface.',
          'অগ্ন্যাশয়ের একটি ছোট প্রোটিন যা ট্রিপসিন দ্বারা সক্রিয় হয়; এটি লাইপেজ এনজাইমের সাথে যুক্ত হয়ে পিত্তলবণের বাধা দূর করে এবং লাইপেজকে চর্বির ওপর শক্তভাবে বসিয়ে রাখে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Why Medium-Chain Triglycerides (MCTs) Bypass Chylomicron Assembly', 'মাঝারি শিকলের চর্বি (MCT) কেন কাইলোমাইক্রন সমাবেশ এড়িয়ে যায়'),
        steps: [
          l(
            'Long-chain fatty acids (LCFAs, >=C14, such as palmitate C16:0 and oleate C18:1) are highly hydrophobic and virtually insoluble in water (solubility <10^-6 M). They require bile salt micelles for solubilization and must be re-esterified into TAG inside the enterocyte and packaged into giant chylomicrons.',
            'দীর্ঘ শিকলের চর্বিগুলো (LCFA, >=C14, যেমন পামিটেট) পানিতে সম্পূর্ণ অদ্রবণীয়। এদের শোষণের জন্য পিত্তরস অপরিহার্য এবং কোষে ঢুকে এদের অবশ্যই পুনরায় কাইলোমাইক্রনে সাজাতে হয়।'
          ),
          l(
            'Medium-chain fatty acids (MCFAs, C6 to C10, such as octanoate C8:0 and decanoate C10:0) have much shorter hydrocarbon tails, rendering them significantly more water-soluble (solubility ~10^-3 M).',
            'মাঝারি শিকলের চর্বিগুলোর (MCFA, C6 থেকে C10) কার্বন শিকল ছোট হওয়ায় এরা পানিতে তুলনামূলকভাবে হাজার গুণ বেশি দ্রবণীয়।'
          ),
          l(
            'MCFAs do not require bile acid micellar incorporation and are hydrolyzed rapidly by gastric and pancreatic lipases. In enterocytes, MCFAs are not substrates for MGAT or DGAT1, bypassing TAG resynthesis entirely.',
            'এদের শোষণের জন্য পিত্তরসের প্রয়োজন হয় না এবং কোষের ভেতর এরা পুনরায় ট্রাইগ্লিসারাইড তৈরিতে অংশ নেয় না।'
          ),
          l(
            'Instead, free MCFAs diffuse directly across the enterocyte basolateral membrane, enter the portal capillary bed, bind albumin, and travel directly to the liver via the portal vein for rapid beta-oxidation.',
            'বরং এরা সরাসরি কোষের তল দিয়ে রক্তনালীতে ঢুকে পড়ে এবং অ্যালবুমিন প্রোটিনের সাথে যুক্ত হয়ে পোর্টাল শিরার মাধ্যমে সরাসরি যকৃতে পৌঁছে দ্রুত জারিত হয়।'
          ),
        ],
        conclusion: l(
          'MCTs bypass bile salts, enterocyte TAG resynthesis, MTP lipidation, and the lymphatic system completely. This makes synthetic MCT oil an essential medical nutrition therapy for patients with biliary atresia, pancreatic insufficiency, or abetalipoproteinemia.',
          'মাঝারি চর্বি পিত্তরস, কাইলোমাইক্রন এবং লসিকা নালী—সবকিছুকে এড়িয়ে সরাসরি যকৃতে চলে যায়। তাই পিত্তনালী বন্ধ থাকা রোগী বা অ্যাবেটালাইপোপ্রোটিনেমিয়ার রোগীদের জন্য MCT ডায়েট জীবন রক্ষাকারী পুষ্টি হিসেবে কাজ করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does a patient with Abetalipoproteinemia develop acanthocytes (spiculated "burr" red blood cells) and progressive spinocerebellar ataxia?',
          'অ্যাবেটালাইপোপ্রোটিনেমিয়ার রোগীদের কেন রক্তে বিকৃত কাঁটাযুক্ত লোহিত রক্তকণিকা (অ্যাকান্থোসাইট) এবং স্নায়বিক ভারসাম্যহীনতা দেখা দেয়?'
        ),
        answer: l(
          'In abetalipoproteinemia, loss-of-function mutations in MTP prevent the assembly and secretion of both intestinal chylomicrons (ApoB-48) and hepatic VLDL (ApoB-100). The patient cannot absorb fat-soluble vitamins (A, D, E, K). Severe, chronic vitamin E (alpha-tocopherol) deficiency causes spinocerebellar axonal degeneration, peripheral neuropathy, and ataxia. Concurrently, lack of circulating lipoproteins alters the erythrocyte membrane lipid bilayer composition (excess sphingomyelin relative to phosphatidylcholine), producing characteristic deformed, thorny acanthocytes.',
          'অ্যাবেটালাইপোপ্রোটিনেমিয়ায় MTP এনজাইম নষ্ট থাকায় অন্ত্র থেকে কাইলোমাইক্রন এবং যকৃৎ থেকে VLDL কোনোটিই রক্তে আসতে পারে না। ফলে রোগী চর্বিতে দ্রবণীয় কোনো ভিটামিন শোষণ করতে পারে না। ভিটামিন ই-এর মারাত্মক ঘাটতির কারণে স্নায়ুক্ষয় ও ভারসাম্যহীনতা দেখা দেয়; এবং রক্তে লিপিডের ভারসাম্য নষ্ট হওয়ায় লোহিত রক্তকণিকার ঝিল্লি বিকৃত হয়ে কাঁটার মতো অ্যাকান্থোসাইটে পরিণত হয়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: chylomicron3DData,
  interactiveDiagram: {
    id: 'lipid-digestion-chylomicron-interactive-hub',
    title: l('Interactive Intestinal Lipid Digestion & Chylomicron Engine', 'ইন্টারেক্টিভ অন্ত্রের লিপিড পরিপাক ও কাইলোমাইক্রন ইঞ্জিন'),
    disclaimer: l(
      'Gastrointestinal lipid transit simulation: select pathway nodes to trace duodenal micelle emulsification, enterocyte TAG resynthesis, APOBEC-1 RNA editing, MTP core loading, and lymphatic lacteal drainage.',
      'পরিপাকতন্ত্রের চর্বি পরিবহন সিমুলেশন: বিভিন্ন নোড নির্বাচন করে পিত্তরস দ্বারা মাইসেলি গঠন, অন্ত্রের কোষে চর্বি পুনর্গঠন, ApoB-48 এডিটিং, MTP লিপিডেশন এবং লসিকা নালী দিয়ে রক্তে প্রবেশের সম্পূর্ণ পথ পর্যবেক্ষণ করুন।'
    ),
    description: l(
      'Dietary lipids follow a sophisticated multi-organ route from luminal bile micelle emulsification to enterocyte chylomicron assembly and lymphatic transit bypassing portal clearance. This interactive engine traces the molecular transporters, enzymes, and clinical blocks along this pathway.',
      'খাদ্যের চর্বি পরিপাক ও শোষণ একটি জটিল বহু-অঙ্গীয় পথ অনুসরণ করে যা পোর্টাল শিরাকে এড়িয়ে লসিকা নালী দিয়ে সরাসরি রক্তে পৌঁছায়। এই ইন্টারঅ্যাকটিভ ইঞ্জিন চর্বি পরিপাক ও কাইলোমাইক্রন তৈরির সম্পূর্ণ আণবিক রূপরেখা প্রদর্শন করে।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-luminal-emulsification',
        label: l('1. Duodenal Bile Acid Emulsification & Micelle Formation', '১. ডুওডেনামে পিত্তরস দ্বারা ইমালসিফিকেশন ও মাইসেলি গঠন'),
        description: l(
          'Hepatic bile salts (cholate, chenodeoxycholate conjugated to glycine/taurine) act as biological detergents, dispersing bulk dietary fat into mixed micelles (4–8 nm diameter).',
          'যকৃতের পিত্তলবণ ডিটারজেন্টের মতো কাজ করে চর্বির বড় দলাগুলোকে ভেঙে ক্ষুদ্র ক্ষুদ্র মিশ্র মাইসেলিতে (৪-৮ ন্যানোমিটার) পরিণত করে।'
        ),
        details: l(
          'Micelles contain bile salts, unesterified cholesterol, fat-soluble vitamins, and lysophospholipids, presenting a massive surface area for interfacial enzymatic digestion.',
          'মাইসেলির ভেতরে চর্বি দ্রবীভূত অবস্থায় থাকে, যা এনজাইমগুলোর কাজের জন্য বিপুল পরিমাণ শোষণ তল তৈরি করে দেয়।'
        ),
        sectionId: 'structure',
        color: '#d97706',
      },
      {
        id: 'node-pancreatic-lipase-colipase',
        label: l('2. Pancreatic Lipase-Colipase Interfacial Hydrolysis', '২. অগ্ন্যাশয় লাইপেজ ও কোলিপাইপেজ দ্বারা চর্বি ভাঙন'),
        description: l(
          'Pancreatic triglyceride lipase hydrolyzes triacylglycerol at the sn-1 and sn-3 ester bonds, producing 2-monoacylglycerol (2-MAG) and two free fatty acids (FFAs).',
          'অগ্ন্যাশয়ের লাইপেজ ট্রাইগ্লিসারাইডকে ১ ও ৩ নম্বর অবস্থানে ভেঙে ২-মনোগ্লিসারাইড এবং দুটি মুক্ত ফ্যাটি অ্যাসিড তৈরি করে।'
        ),
        details: l(
          'Colipase anchors lipase against bile salt displacement. Orlistat inhibits pancreatic lipase, preventing ~30% of fat absorption. Phospholipase A2 and cholesterol esterase complete digestion.',
          'কোলিপাইপেজ লাইপেজকে শক্ত করে চর্বির ওপর বসিয়ে রাখে। অরলিস্ট্যাট ওষুধ এই লাইপেজকে অবরুদ্ধ করে চর্বি শোষণ কমিয়ে দেয়।'
        ),
        sectionId: 'structure',
        color: '#ea580c',
      },
      {
        id: 'node-apical-enterocyte-influx',
        label: l('3. Apical Enterocyte Influx: CD36, FATP4 & NPC1L1', '৩. অন্ত্রের কোষে শোষণ: CD36, FATP4 ও NPC1L1'),
        description: l(
          'Fatty acids enter across apical microvilli via CD36 and FATP4. Free cholesterol enters via Niemann-Pick C1-Like 1 (NPC1L1, target of ezetimibe).',
          'ফ্যাটি অ্যাসিডগুলো CD36 ও FATP4 বাহক দ্বারা কোষে ঢোকে। মুক্ত কোলেস্টেরল NPC1L1 বাহক দিয়ে প্রবেশ করে।'
        ),
        details: l(
          'Ezetimibe blocks NPC1L1, lowering LDL cholesterol by 15–20%. ABCG5/ABCG8 pumps plant sterols back into the intestinal lumen; mutations cause sitosterolemia.',
          'ইজেটিমাইব ওষুধ NPC1L1-কে অবরুদ্ধ করে কোলেস্টেরল শোষণ কমায়। ABCG5/G8 পাম্প উদ্ভিজ্জ ক্ষতিকর স্টেরলকে পুনরায় অন্ত্রে ফেলে দেয়।'
        ),
        sectionId: 'mechanism',
        color: '#2563eb',
      },
      {
        id: 'node-enterocyte-tag-resynthesis',
        label: l('4. Intracellular TAG Resynthesis: MGAT2 & DGAT1 Machinery', '৪. অন্তঃকোষীয় চর্বি পুনর্গঠন: MGAT2 ও DGAT1 ইঞ্জিন'),
        description: l(
          'In the ER membrane, Monoacylglycerol Acyltransferase (MGAT2) and Diacylglycerol Acyltransferase 1 (DGAT1) re-esterify fatty acids with 2-MAG to resynthesize TAG.',
          'এন্ডোপ্লাজমিক রেটিকুলামে MGAT2 এবং DGAT1 এনজাইম ফ্যাটি অ্যাসিড ও ২-MAG কে জোড়া লাগিয়ে পুনরায় নতুন ট্রাইগ্লিসারাইড তৈরি করে।'
        ),
        details: l(
          'ACAT2 re-esterifies free cholesterol into cholesteryl esters. This maintains a downhill concentration gradient for continuous apical lipid influx.',
          'ACAT2 কোলেস্টেরলকে কোলেস্টেরাইল এস্টারে পরিণত করে। এই পুনর্গঠন প্রক্রিয়া অন্ত্র থেকে চর্বি শোষণের অবিরাম প্রবাহ সচল রাখে।'
        ),
        sectionId: 'mechanism',
        color: '#059669',
      },
      {
        id: 'node-apobec1-editing',
        label: l('5. APOBEC-1 RNA Editing: ApoB-48 Truncation', '৫. APOBEC-1 আরএনএ এডিটিং: ApoB-48 এর সৃষ্টি'),
        description: l(
          'Intestinal cytidine deaminase APOBEC-1 deaminates C6666 to U in ApoB mRNA, converting CAA to UAA (stop codon) at residue 2153.',
          'অন্ত্রের APOBEC-1 এনজাইম ApoB আরএনএ-র সাইটোসিনকে ইউরাসিলে পরিণত করে একটি স্টপ কোডন তৈরি করে।'
        ),
        details: l(
          'Translates the N-terminal 48% of the protein (ApoB-48), omitting the LDL receptor binding domain found in full-length hepatic ApoB-100.',
          'এর ফলে পুরো প্রোটিনের মাত্র ৪৮% তৈরি হয় (ApoB-48); এতে লিভারের ApoB-100 এর মতো এলডিএল রিসেপ্টরে যুক্ত হওয়ার অংশটি থাকে না।'
        ),
        sectionId: 'integration',
        color: '#7c3aed',
      },
      {
        id: 'node-mtp-lipidation-core',
        label: l('6. Microsomal Triglyceride Transfer Protein (MTP) Core Loading', '৬. MTP দ্বারা কাইলোমাইক্রন লিপিডেশন ও কোর গঠন'),
        description: l(
          'MTP transfers neutral lipids onto translating ApoB-48 in the ER lumen, expanding embryonic particles into giant nascent chylomicrons (75–600 nm diameter).',
          'MTP এনজাইম তৈরি হতে থাকা ApoB-48 এর সাথে চর্বি যুক্ত করে বিশাল কাইলোমাইক্রন কণা (৭৫-৬০০ ন্যানোমিটার) তৈরি করে।'
        ),
        details: l(
          'MTP mutations cause Abetalipoproteinemia: zero chylomicrons or VLDL in blood, severe fat malabsorption, acanthocytosis, and vitamin E deficiency ataxia.',
          'MTP জিনের ত্রুটিতে অ্যাবেটালাইপোপ্রোটিনেমিয়া হয়; কাইলোমাইক্রন তৈরি হতে না পেরে অন্ত্রের কোষে জমে থাকে এবং মারাত্মক অপুষ্টি ঘটে।'
        ),
        sectionId: 'integration',
        color: '#0891b2',
      },
      {
        id: 'node-pctv-sar1b-trafficking',
        label: l('7. Pre-Chylomicron Vesicle (PCTV) Sar1b/COPII Trafficking', '৭. প্রাক-কাইলোমাইক্রন ভেসিকল ও Sar1b/COPII পরিবহন'),
        description: l(
          'Giant pre-chylomicrons exit the ER in specialized transport vesicles (PCTVs) utilizing Sar1b GTPase and COPII coatomers, trafficking to the Golgi for maturation.',
          'বিশালাকার কাইলোমাইক্রনগুলো Sar1b ও COPII প্রোটিনের সাহায্যে বিশেষ ভেসিকলে ভরে গলজি বডিতে পরিপক্ক হওয়ার জন্য যাত্রা করে।'
        ),
        details: l(
          'In the Golgi, particles are glycosylated and ApoA-IV is added. SAR1B mutations cause Chylomicron Retention Disease (Anderson disease), trapping lipids in enterocytes.',
          'গলজি বডিতে এতে ApoA-IV যুক্ত হয়। SAR1B জিনের ত্রুটিতে কাইলোমাইক্রন রিটেনশন ডিজিজ হয় এবং চর্বি অন্ত্রের ভেতর আটকা পড়ে।'
        ),
        sectionId: 'practice',
        color: '#db2777',
      },
      {
        id: 'node-lacteal-thoracic-bypass',
        label: l('8. Mesenteric Lacteals & Thoracic Duct Portal Bypass', '৮. মেসেন্টেরিক ল্যাকটিয়েল ও থোরাসিক ডাক্ট বাইপাস'),
        description: l(
          'Nascent chylomicrons exit enterocytes by exocytosis and enter blind-ended lymphatic lacteals, traveling through the thoracic duct into the subclavian vein.',
          'কাইলোমাইক্রন কোষ থেকে বেরিয়ে অন্ত্রের ল্যাকটিয়েল লসিকা নালীতে ঢোকে এবং থোরাসিক ডাক্ট দিয়ে সরাসরি সাধারণ রক্ত সংবহনে পৌঁছায়।'
        ),
        details: l(
          'Bypasses hepatic portal clearance completely. Enters systemic venous circulation to deliver fatty acids to muscle and adipose via LPL before hepatic remnant uptake.',
          'পোর্টাল শিরাকে এড়িয়ে রক্তে ঢুকে কঙ্কালপেশি ও চর্বিকলাকে আগে চর্বি সরবরাহ করে; পরবর্তীতে অবশিষ্ট অংশ যকৃতে গিয়ে গৃহীত হয়।'
        ),
        sectionId: 'practice',
        color: '#dc2626',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'Anatomical and biochemical sequence showing duodenal lipid emulsification, enterocyte transport via CD36 and NPC1L1, ApoB-48 editing, MTP core loading, and lymphatic lacteal drainage into the thoracic duct.',
      'শারীরস্থানিক ও জৈবরাসায়নিক রেখাচিত্র যা ডুওডেনামে চর্বি ইমালসিফিকেশন, অন্ত্রে শোষণ, ApoB-48 এডিটিং, MTP দ্বারা কাইলোমাইক্রন গঠন এবং ল্যাকটিয়েল ও থোরাসিক ডাক্ট দিয়ে রক্তে প্রবেশের সম্পূর্ণ পথ প্রদর্শন করে।'
    ),
    steps: [
      l(
        'Step 1: Dietary triacylglycerols are emulsified by bile salts into mixed micelles and hydrolyzed by pancreatic lipase and colipase into 2-MAG and free fatty acids.',
        'ধাপ ১: খাদ্যস্থ চর্বি পিত্তলবণ দ্বারা মাইসেলিতে পরিণত হয় এবং অগ্ন্যাশয়ের লাইপেজ ও কোলিপাইপেজ দ্বারা ভেঙে ২-MAG ও ফ্যাটি অ্যাসিডে পরিণত হয়।'
      ),
      l(
        'Step 2: Enterocytes absorb lipids via CD36 and NPC1L1, resynthesize TAG via MGAT/DGAT1, edit ApoB mRNA via APOBEC-1, and lipidate ApoB-48 via MTP in the ER lumen.',
        'ধাপ ২: অন্ত্রের কোষ চর্বি শোষণ করে পুনরায় ট্রাইগ্লিসারাইড বানায়, APOBEC-1 দিয়ে ApoB-48 তৈরি করে এবং MTP এনজাইম দিয়ে কাইলোমাইক্রন দানা তৈরি করে।'
      ),
      l(
        'Step 3: Nascent chylomicrons exit enterocytes and enter blind-ended lymphatic lacteals, traveling through the thoracic duct to enter systemic blood, bypassing the portal vein.',
        'ধাপ ৩: কাইলোমাইক্রন কোষ থেকে বেরিয়ে লসিকা নালীতে ঢোকে এবং থোরাসিক ডাক্ট দিয়ে পোর্টাল শিরাকে এড়িয়ে সরাসরি রক্ত সংবহনে পৌঁছায়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 4-month-old infant presents with severe diarrhea, abdominal distension, failure to thrive, and steatorrhea. Peripheral blood smear reveals numerous deformed erythrocytes with irregular, thorn-like spicules (acanthocytes). Fasting plasma lipid panel demonstrates undetectable apolipoprotein B, extremely low total cholesterol (<30 mg/dL), and undetectable triglycerides. Endoscopic duodenal biopsy reveals enterocytes ballooned with intracellular lipid droplets despite prolonged fasting. What is the fundamental molecular diagnosis, and what specific protein is mutated?',
      'একটি ৪ মাস বয়সী শিশুর তীব্র ডায়রিয়া, পেট ফোলা, মারাত্মক অপুষ্টি এবং চর্বিযুক্ত মল দেখা গেল। রক্ত পরীক্ষায় কাঁটার মতো বিকৃত লোহিত রক্তকণিকা (অ্যাকান্থোসাইট) পাওয়া গেল। রক্তের লিপিড পরীক্ষায় কোনো অ্যাপোলাইপোপ্রোটিন বি পাওয়া গেল না এবং কোলেস্টেরল ও ট্রাইগ্লিসারাইড প্রায় শূন্যের কোঠায় নেমে এলো। ডুওডেনামের বায়োপসিতে দেখা গেল অন্ত্রের কোষগুলো চর্বিতে ফুলে আছে। এই রোগের মূল কারণ কী এবং কোন প্রোটিনটি নষ্ট?'
    ),
    options: [
      l(
        'Familial Hypercholesterolemia; LDL receptor mutations preventing peripheral cholesterol clearance.',
        'ফ্যামিলিয়াল হাইপারকোলেস্টেরলেমিয়া; এলডিএল রিসেপ্টরের ত্রুটি।'
      ),
      l(
        'Abetalipoproteinemia (Bassen-Kornzweig syndrome); autosomal recessive loss-of-function mutation in the MTPS (Microsomal Triglyceride Transfer Protein) gene, preventing lipidation and assembly of ApoB-containing lipoproteins.',
        'অ্যাবেটালাইপোপ্রোটিনেমিয়া (বাসেন-কর্নৎসওয়েগ সিন্ড্রোম); MTP জিনের মিউটেশন যা ApoB কণার সাথে চর্বি যুক্ত করে কাইলোমাইক্রন ও VLDL তৈরি পুরোপুরি বন্ধ করে দেয়।'
      ),
      l(
        'Niemann-Pick Type C; defective NPC1 transporter preventing endosomal cholesterol trafficking.',
        'নিম্যান-পিক টাইপ সি; NPC1 বাহকের ত্রুটি।'
      ),
      l(
        'Celiac Disease; autoimmune anti-transglutaminase destruction of intestinal villous architecture.',
        'সিলিয়াক ডিজিজ; অন্ত্রের ভিলাইয়ের অটোইমিউন ধ্বংস।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'The infant presents with classical Abetalipoproteinemia (Bassen-Kornzweig syndrome), caused by autosomal recessive mutations in the MTPS gene encoding Microsomal Triglyceride Transfer Protein (MTP). MTP is required in the ER lumen to transfer lipids onto nascent ApoB-48 in enterocytes and ApoB-100 in hepatocytes. Without MTP, neither chylomicrons nor VLDL can be assembled or secreted. Dietary lipids are absorbed into enterocytes but remain trapped as cytosolic lipid droplets, causing steatorrhea. Lack of circulating lipoproteins alters erythrocyte membrane lipids (causing acanthocytosis) and prevents absorption of vitamin E, leading to severe neurodegenerative ataxia if untreated.',
      'রোগীর লক্ষণগুলো ধ্রুপদী অ্যাবেটালাইপোপ্রোটিনেমিয়া নির্দেশ করে যা MTP জিনের ত্রুটির কারণে ঘটে। অন্ত্রের কোষে ApoB-48 এবং যকৃতে ApoB-100 এর সাথে চর্বি যুক্ত করতে MTP অপরিহার্য। MTP না থাকলে কাইলোমাইক্রন বা VLDL কোনোটিই তৈরি হতে পারে না। ফলে শোষিত চর্বি অন্ত্রের কোষের ভেতরেই বন্দি হয়ে ফুলে ওঠে এবং রক্তে কোনো লিপিড বের হতে পারে না। এর ফলে অ্যাকান্থোসাইট রক্তকণিকা তৈরি হয় এবং ভিটামিন ই-এর অভাবে মারাত্মক স্নায়বিক ক্ষতি দেখা দেয়।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation Level', 'ভিত্তি স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Unique Challenge of Digesting Dietary Fat', 'খাদ্যের চর্বি পরিপাকের বিশেষ চ্যালেঞ্জ'),
          paragraphs: [
            l(
              'When you eat a meal containing carbohydrates or proteins, the digestive process is straightforward because sugars and amino acids dissolve easily in the watery environment of the digestive tract. Fats, however, present a fundamental biophysical problem: oil and water do not mix. If dietary triacylglycerols remained in large oily droplets, digestive enzymes would be unable to reach them, and valuable calories and essential fat-soluble vitamins would pass through unabsorbed.',
              'আমরা যখন শর্করা বা প্রোটিন খাই, পরিপাক প্রক্রিয়াটি খুব সহজ হয় কারণ চিনি এবং অ্যামিনো অ্যাসিড পরিপাকনালীর পানিতে সহজেই গুলে যায়। কিন্তু চর্বি বা ফ্যাটের ক্ষেত্রে একটি বড় বাধা দেখা দেয়: তেল এবং পানি কখনোই মিশতে চায় না। খাদ্যের চর্বি যদি বড় বড় তেলের ফোঁটা হয়ে ভেসে থাকত, তবে পরিপাককারী এনজাইমগুলো এদের স্পর্শই করতে পারত না এবং মূল্যবান শক্তি ও ভিটামিনগুলো শরীর থেকে না শোষিত হয়েই বেরিয়ে যেত।'
            ),
            l(
              'To overcome this barrier, the human body deploys an ingenious two-part biological solution: bile salts from the liver to act as natural detergents that break fat down into microscopic droplets, and a team of pancreatic lipases to chemically slice the fat molecules into absorbable pieces.',
              'এই বাধা অতিক্রম করার জন্য মানবদেহ এক চমৎকার সমাধান তৈরি করেছে: প্রথমত যকৃৎ ও পিত্তথলি থেকে নিঃসৃত পিত্তরস সাবানের মতো কাজ করে চর্বিকে ভেঙে কোটি কোটি আণুবীক্ষণিক ফোঁটায় পরিণত করে; এবং দ্বিতীয়ত অগ্ন্যাশয় থেকে আসা লাইপেজ এনজাইমগুলো চর্বির অণুগুলোকে কেটে ছোট ছোট শোষণযোগ্য টুকরোয় পরিণত করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Microscopic Detergents: Bile Salts and Pancreatic Enzymes', 'আণুবীক্ষণিক ডিটারজেন্ট: পিত্তরস ও অগ্ন্যাশয়ের এনজাইম'),
          paragraphs: [
            l(
              'In the duodenum, bile salts wrap around dietary fats to create tiny spherical structures called mixed micelles, measuring only 4 to 8 nanometers across. These micelles transport fatty acids directly to the surface of the intestinal lining. Working alongside bile salts is pancreatic lipase, accompanied by its essential partner protein, colipase. Colipase acts like an anchor, holding pancreatic lipase firmly against the slippery surface of the lipid droplet so it can snip two fatty acids off each triglyceride molecule.',
              'ক্ষুদ্রান্ত্রের ডুওডেনামে পিত্তরস চর্বিকে ঘিরে ধরে মাত্র ৪ থেকে ৮ ন্যানোমিটার আকৃতির গোল গোল "মিশ্র মাইসেলি" তৈরি করে। এই মাইসেলিগুলো চর্বিকে অন্ত্রের প্রাচীরের খুব কাছে নিয়ে যায়। এদের সাথে কাজ করে অগ্ন্যাশয়ের লাইপেজ এবং তার সহচর প্রোটিন কোলিপাইপেজ। কোলিপাইপেজ একটি নোঙরের মতো কাজ করে, যা লাইপেজ এনজাইমকে চর্বির পিচ্ছিল তলে শক্ত করে ধরে রাখে যাতে এনজাইমটি ট্রাইগ্লিসারাইড থেকে ফ্যাটি অ্যাসিডগুলোকে কেটে আলাদা করতে পারে।'
            ),
            l(
              'Once sliced into free fatty acids and 2-monoacylglycerol, these small lipid fragments are easily absorbed across the cell membrane of the intestinal cells, called enterocytes.',
              'একবার চর্বি ভেঙে মুক্ত ফ্যাটি অ্যাসিড ও মনোগ্লিসারাইডে পরিণত হলে এরা অনায়াসে অন্ত্রের এন্টারোসাইট কোষের ভেতর শোষিত হয়ে প্রবেশ করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Inside the Enterocyte: Rebuilding and Packaging the Fat', 'অন্ত্রের কোষের ভেতরে: চর্বির পুনর্গঠন ও প্যাকিং'),
          paragraphs: [
            l(
              'Once inside the enterocyte, an unexpected biochemical reversal takes place: instead of burning these fatty acids, the cell immediately glues them back together into brand-new triacylglycerols. Because oil cannot travel freely in the bloodstream, the cell constructs giant transport submarines called chylomicrons. Chylomicrons are packed with thousands of fat molecules in their core and coated with a protective outer shell of water-friendly phospholipids and a specialized protein tag called Apolipoprotein B-48 (ApoB-48).',
              'অন্ত্রের কোষে ঢোকার পর এক অদ্ভুত উল্টো কাণ্ড ঘটে: এই চর্বিগুলোকে পুড়িয়ে ফেলার বদলে কোষ এদেরকে আঠার মতো জোড়া লাগিয়ে পুনরায় নতুন ট্রাইগ্লিসারাইড তৈরি করে। যেহেতু চর্বি রক্তে সরাসরি ভাসতে পারে না, তাই কোষ কাইলোমাইক্রন নামক বিশাল আণুবীক্ষণিক সাবমেরিন তৈরি করে। কাইলোমাইক্রনের পেটের ভেতর হাজার হাজার চর্বি ভরা থাকে এবং বাইরে থাকে ফসফোলিপিড ও ApoB-48 নামক একটি বিশেষ প্রোটিনের সুরক্ষামূলক বর্ম।'
            ),
            l(
              'An essential intracellular machine called Microsomal Triglyceride Transfer Protein (MTP) acts like a cargo crane inside the cell, loading the fat into the chylomicrons before they are shipped out into the body.',
              'কোষের ভেতরে MTP নামক একটি বিশেষ প্রোটিন ক্রেনের মতো কাজ করে, যা চর্বিগুলোকে তুলে তুলে কাইলোমাইক্রনের ভেতর ভরে দেয় যাতে তা নিরাপদে শরীরের অন্যান্য অংশে পাঠানো যায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Great Lymphatic Bypass: Skipping the Liver', 'লসিকা নালীর বাইপাস: যকৃতকে এড়িয়ে সরাসরি রক্তে যাত্রা'),
          paragraphs: [
            l(
              'All other nutrients absorbed by the intestine—such as glucose, amino acids, vitamins, and minerals—enter microscopic capillary blood vessels that drain directly into the portal vein and travel straight to the liver for inspection. Chylomicrons, however, are far too massive to squeeze into ordinary blood capillaries. Instead, they enter specialized, wide-mouthed lymphatic vessels called lacteals.',
              'অন্ত্র থেকে শোষিত অন্যান্য সমস্ত পুষ্টি—যেমন গ্লুকোজ, অ্যামিনো অ্যাসিড ও খনিজ লবণ—সূক্ষ্ম রক্তনালীতে ঢুকে পোর্টাল শিরার মাধ্যমে সরাসরি যকৃতে যায়। কিন্তু কাইলোমাইক্রন কণাগুলো এত বিশালাকার যে এরা সাধারণ রক্তনালীর সরু ছিদ্রে ঢুকতেই পারে না। তাই এরা ল্যাকটিয়েল নামক বিশেষ চওড়া মুখের লসিকা নালীতে প্রবেশ করে।'
            ),
            l(
              'These lacteals carry the milky, fat-rich fluid—called chyle—up through the abdomen and chest inside the thoracic duct, emptying directly into the large veins of the neck. By bypassing the liver on their first pass, chylomicrons deliver fresh dietary fats directly to the muscles and adipose tissue of the body first, before the empty remnant particles finally arrive at the liver for disposal.',
              'এই ল্যাকটিয়েলগুলো দুধের মতো সাদা চর্বিযুক্ত রস (কাইল) বহন করে বক্ষ গহ্বরের থোরাসিক ডাক্ট দিয়ে সোজা ঘাড়ের শিরায় গিয়ে রক্তে ঢেলে দেয়। এর ফলে খাদ্যের চর্বি যকৃতে যাওয়ার আগেই আমাদের কঙ্কালপেশি, হৃদপিণ্ড ও চর্বিকলা তা থেকে প্রয়োজনীয় জ্বালানি গ্রহণ করতে পারে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('When Lipid Packaging Fails: Abetalipoproteinemia', 'চর্বির প্যাকিং নষ্ট হলে: অ্যাবেটালাইপোপ্রোটিনেমিয়া'),
          paragraphs: [
            l(
              'In the rare genetic disorder Abetalipoproteinemia, children inherit mutations in the MTP gene that prevent the assembly of chylomicrons. Although their intestines absorb dietary fat normally, the enterocytes cannot package or export it. The fat remains hopelessly trapped inside the intestinal cells, causing severe diarrhea, malnutrition, and failure to absorb vitamin E, which leads to loss of balance and nerve damage unless treated with specialized medium-chain fats and high-dose vitamins.',
              'অ্যাবেটালাইপোপ্রোটিনেমিয়া নামক বিরল রোগে MTP জিনের ত্রুটির কারণে কাইলোমাইক্রন তৈরি হতে পারে না। ফলে শিশুরা চর্বি খেলেও তা অন্ত্রের কোষের ভেতর আটকা পড়ে থাকে এবং বের হতে পারে না। এর ফলে মারাত্মক ডায়রিয়া ও অপুষ্টি হয় এবং ভিটামিন ই শোষিত না হওয়ায় হাত-পায়ের ভারসাম্য নষ্ট হয়ে স্নায়ুর মারাত্মক ক্ষতি ঘটে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary of Dietary Lipid Digestion', 'খাদ্যস্থ চর্বি পরিপাকের সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Dietary fats are solubilized by bile salt micelles and hydrolyzed by pancreatic lipase and colipase. Enterocytes reassemble triacylglycerols and package them via MTP into ApoB-48 chylomicrons, which enter lymphatic lacteals to bypass the portal vein, delivering lipids directly to peripheral tissues via the thoracic duct.',
              'খাদ্যের চর্বি পিত্তলবণের সাহায্যে ক্ষুদ্র মাইসেলিতে পরিণত হয় এবং অগ্ন্যাশয়ের লাইপেজ দ্বারা পরিপাক হয়। অন্ত্রের কোষ এদের পুনরায় চর্বি বানিয়ে MTP দ্বারা ApoB-48 কাইলোমাইক্রনে সাজায়, যা পোর্টাল শিরাকে এড়িয়ে লসিকা নালী ও থোরাসিক ডাক্ট দিয়ে সরাসরি শরীরের বিভিন্ন অঙ্গে পৌঁছে যায়।'
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
          heading: l('Physical Chemistry of Biliary Micelles & Luminal Emulsification', 'পিত্তরস মাইসেলি ও লুমেনীয় ইমালসিফিকেশনের ভৌত রসায়ন'),
          paragraphs: [
            l(
              'Dietary lipids consist predominantly of triacylglycerols (>90%), with smaller contributions from phospholipids, unesterified cholesterol, cholesteryl esters, and fat-soluble vitamins. In the stomach, mechanical shear forces generate crude coarse lipid emulsion droplets (1 to 100 microns in diameter), stabilized by gastric lipase (which hydrolyzes ~10–15% of dietary TAG at the sn-3 position under acidic pH 4.0–5.5). Upon entry into the duodenum, gastric acid stimulates secretin release, while fatty acids and amino acids trigger cholecystokinin (CCK) release from enteroendocrine I cells.',
              'খাদ্যের চর্বির ৯০%-এরও বেশি হলো ট্রাইগ্লিসারাইড, আর বাকি অংশে থাকে ফসফোলিপিড, কোলেস্টেরল ও ভিটামিন। পাকস্থলীতে গ্যাস্ট্রিক লাইপেজের মাধ্যমে চর্বি প্রাথমিক ফোঁটায় পরিণত হয়। ডুওডেনামে প্রবেশের পর ফ্যাটি অ্যাসিডের উপস্থিতিতে সিসিকে (CCK) হরমোন ক্ষরিত হয় যা পিত্তথলি ও অগ্ন্যাশয়কে পাচক রস নিঃসরণ করতে উদ্দীপিত করে।'
            ),
            l(
              'CCK triggers gallbladder contraction and sphincter of Oddi relaxation, discharging concentrated bile containing amphipathic bile salts (cholate and chenodeoxycholate conjugated to glycine or taurine) and phosphatidylcholine. At concentrations exceeding their critical micellar concentration (CMC, ~2–4 mM), bile salts self-assemble with dietary lipid digestion products into mixed micelles (4 to 8 nm in diameter). These mixed micelles increase the aqueous solubility of hydrophobic lipids by over one million-fold, delivering them across the unstirred water layer to the enterocyte brush border.',
              'পিত্তলবণ পানিতে একটি নির্দিষ্ট ঘনমাত্রা (CMC) ছাড়ালেই ফসফোলিপিডের সাথে মিলে ৪-৮ ন্যানোমিটার ব্যাসের মিশ্র মাইসেলি গঠন করে। এই মাইসেলিগুলো অদ্রবণীয় চর্বির জলীয় দ্রবণীয়তা দশ লক্ষ গুণ বাড়িয়ে দেয় এবং অন্ত্রের শোষণ তলে পৌঁছে দেয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Interfacial Enzymology of Pancreatic Lipase and Colipase', 'অগ্ন্যাশয় লাইপেজ ও কোলিপাইপেজের ইন্টারফেসিয়াল এনজাইমোলজি'),
          paragraphs: [
            l(
              'Pancreatic Triglyceride Lipase (PTL, 50 kDa) is secreted by acinar cells in its active form. PTL displays interfacial activation: against monomeric substrates in dilute solution, catalytic activity is negligible; but in the presence of an organized lipid-water emulsion interface, a hydrophobic surface lid (residues 237–261) undergoes a conformational hinge displacement, exposing the catalytic triad (Ser152, Asp176, His263) and a hydrophobic substrate-binding pocket.',
              'অগ্ন্যাশয়ের লাইপেজ (PTL) একটি বিশেষ ইন্টারফেসিয়াল সক্রিয়তা প্রদর্শন করে: পানিতে দ্রবীভূত অবস্থায় এটি কাজ করে না, কিন্তু তেলের ফোঁটার সংস্পর্শে আসামাত্র এর প্রোটিনের একটি ঢাকনা সরে গিয়ে সক্রিয় স্থান উন্মুক্ত হয়।'
            ),
            l(
              'However, high concentrations of amphipathic bile salts bind strongly to the lipid droplet surface, physically coating the interface and displacing PTL, completely inhibiting lipolysis. To overcome this inhibition, the pancreas co-secretes Procolipase, which is cleaved by luminal trypsin to yield active Colipase (10 kDa). Colipase binds the C-terminal non-catalytic domain of PTL in a 1:1 stoichiometry. Colipase hydrophobic finger-like loops insert directly between bile salt molecules at the interface, anchoring PTL firmly against the lipid surface and restoring maximal hydrolytic velocity at the sn-1 and sn-3 ester bonds, yielding 2-monoacylglycerol (2-MAG) and two free fatty acids.',
              'কিন্তু অতিরিক্ত পিত্তলবণ তেলের ওপর চাদরের মতো জমে লাইপেজকে সরিয়ে দিয়ে কাজ বন্ধ করে দিতে পারে। এই সমস্যা সমাধানে অগ্ন্যাশয় কোলিপাইপেজ ক্ষরণ করে। কোলিপাইপেজ পিত্তলবণের ফাঁকে আঙুলের মতো প্রবেশ করে লাইপেজ এনজাইমকে চর্বির তলে শক্ত করে আটকে রাখে; যার ফলে লাইপেজ ১ ও ৩ নম্বর বন্ধন ভেঙে ২-মনোগ্লিসারাইড ও দুটি মুক্ত ফ্যাটি অ্যাসিড তৈরি করতে পারে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Enterocyte Transporters & The Monoacylglycerol Pathway', 'অন্ত্রের বাহক প্রোটিন ও মনোগ্লিসারাইড সংশ্লেষণ পথ'),
          paragraphs: [
            l(
              'At the enterocyte apical microvillar membrane, lipids dissociate from mixed micelles in the slightly acidic microclimate (pH ~6.0) maintained by Na+/H+ exchangers. Medium- and short-chain fatty acids cross via non-ionic passive diffusion. Long-chain fatty acids (LCFAs) are actively imported by Cluster of Differentiation 36 (CD36 / Fatty Acid Translocase) and Fatty Acid Transport Protein 4 (FATP4 / SLC27A4). Unesterified cholesterol is actively internalized via clathrin-dependent endocytosis mediated by Niemann-Pick C1-Like 1 (NPC1L1).',
              'অন্ত্রের ব্রাশ বর্ডারে অম্লীয় পিএইচ-এর প্রভাবে মাইসেলি থেকে চর্বি মুক্ত হয়। দীর্ঘ চর্বিগুলো CD36 এবং FATP4 বাহক দ্বারা কোষে প্রবেশ করে এবং কোলেস্টেরল NPC1L1 বাহকের মাধ্যমে কোষে গৃহীত হয়।'
            ),
            l(
              'Inside the enterocyte cytosol, fatty acids are bound by intestinal Fatty Acid-Binding Protein (I-FABP) and shuttled to the endoplasmic reticulum, where Acyl-CoA Synthetase 5 (ACSL5) activates them to fatty acyl-CoA esters. Over 80% of dietary TAG is resynthesized via the Monoacylglycerol Pathway: Monoacylglycerol Acyltransferase 2 (MGAT2) condenses 2-MAG with an acyl-CoA to form sn-1,2-diacylglycerol; Diacylglycerol Acyltransferase 1 (DGAT1) adds the final acyl-CoA to yield triacylglycerol. Free cholesterol is esterified by Acyl-CoA:Cholesterol Acyltransferase 2 (ACAT2).',
              'কোষের ভেতর শোষিত ফ্যাটি অ্যাসিডকে এন্ডোপ্লাজমিক রেটিকুলামে নিয়ে গিয়ে MGAT2 এবং DGAT1 এনজাইমের মাধ্যমে পুনরায় ট্রাইগ্লিসারাইড তৈরি করা হয়। মুক্ত কোলেস্টেরলকে ACAT2 এনজাইম কোলেস্টেরাইল এস্টারে পরিণত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('APOBEC-1 RNA Editing & MTP-Mediated Chylomicron Biogenesis', 'APOBEC-1 আরএনএ এডিটিং ও MTP কাইলোমাইক্রন সমাবেশ'),
          paragraphs: [
            l(
              'Apolipoprotein B is encoded by a single gene on chromosome 2p24. In human enterocytes, the enzyme Apolipoprotein B mRNA Editing Enzyme Catalytic Subunit 1 (APOBEC-1) assembles with auxiliary factors (ACF) into an editosome complex. APOBEC-1 catalyzes the zinc-dependent hydrolytic deamination of cytidine 6666 to uridine in the ApoB pre-mRNA. This site-specific C-to-U editing converts codon 2153 from CAA (encoding glutamine in full-length hepatic ApoB-100) to UAA (an in-frame stop codon).',
              'মানবদেহে ApoB জিনের একটিমাত্র জিন থাকে। অন্ত্রের কোষে APOBEC-1 এনজাইম আরএনএ এডিটিং এর মাধ্যমে ৬৬৬৬ নম্বর সাইটোসিনকে ইউরাসিলে রূপান্তরিত করে একটি স্টপ কোডন (UAA) তৈরি করে।'
            ),
            l(
              'Translation terminates at codon 2152, producing Apolipoprotein B-48, comprising the N-terminal 48% (2,152 amino acids) of full-length ApoB. ApoB-48 retains the amphipathic alpha-helical and beta-sheet domains necessary for lipid binding but lacks the C-terminal domain required for LDL receptor recognition. As ApoB-48 is translated across the ER membrane into the lumen, Microsomal Triglyceride Transfer Protein (MTP) transfers neutral lipids onto the nascent peptide to prevent proteasomal degradation, assembling an embryonic chylomicron particle.',
              'ফলে অন্ত্রে মাত্র ৪৮% দৈর্ঘ্যের ApoB-48 প্রোটিন তৈরি হয়; এতে চর্বি ধরে রাখার ক্ষমতা থাকে কিন্তু এলডিএল রিসেপ্টরে যুক্ত হওয়ার অংশটি থাকে না। তৈরি হওয়ার সাথে সাথেই MTP এনজাইম এর সাথে চর্বি যুক্ত করে কাইলোমাইক্রনের প্রাথমিক কাঠামো গঠন করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('PCTV Budding, Sar1b GTPase & Lymphatic Lacteal Translocation', 'PCTV ভেসিকল, Sar1b ও লসিকা ল্যাকটিয়েল পরিবহন'),
          paragraphs: [
            l(
              'Because embryonic chylomicrons (75 to 600 nm) are far larger than standard transport vesicles (60 to 90 nm), they cannot exit the ER in conventional COPII vesicles. Instead, the enterocyte recruits a specialized vesicle machinery termed Pre-Chylomicron Transport Vesicles (PCTVs). The small GTPase Sar1b recruits COPII coatomers (Sec23/Sec24C and Sec13/Sec31) to bud giant transport vesicles that deliver chylomicrons to the cis-Golgi. Mutations in SAR1B cause Chylomicron Retention Disease (Anderson disease).',
              'যেহেতু কাইলোমাইক্রন কণাগুলো (৭৫-৬০০ ন্যানোমিটার) সাধারণ ভেসিকলের চেয়ে অনেক বড়, তাই এদের পরিবহনের জন্য Sar1b প্রোটিনের মাধ্যমে বিশেষায়িত বড় ভেসিকল (PCTV) তৈরি হয় যা এদের গলজি বডিতে নিয়ে যায়। SAR1B জিনের ত্রুটিতে কাইলোমাইক্রন রিটেনশন ডিজিজ হয়।'
            ),
            l(
              'In the Golgi, ApoA-IV is added, and mature chylomicrons are packaged into post-Golgi secretory vesicles that fuse with the enterocyte basolateral membrane, discharging chylomicrons into the lamina propria via exocytosis. The giant particles penetrate the open, button-like endothelial flap junctions of blind-ended lymphatic lacteals, traversing mesenteric lymphatics and the thoracic duct to enter systemic blood at the left subclavian vein, bypassing first-pass hepatic extraction.',
              'গলজি বডিতে পরিপক্ক হওয়ার পর কাইলোমাইক্রন কোষের তল দিয়ে বের হয়ে ল্যাকটিয়েল নামক লসিকা নালীতে ঢোকে এবং থোরাসিক ডাক্ট দিয়ে বাম সাবক্ল্যাভিয়ান শিরায় রক্তে প্রবেশ করে; যার ফলে খাদ্যের চর্বি যকৃতের পোর্টাল রক্ত সংবহনকে সম্পূর্ণ এড়িয়ে চলতে পারে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Summary of Intestinal Lipid Processing', 'অন্ত্রের চর্বি প্রক্রিয়াকরণের একাডেমিক সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Dietary lipid digestion requires bile micelle emulsification and colipase-stabilized pancreatic lipase cleavage. Enterocyte lipid uptake is mediated by CD36 and NPC1L1. Intracellular TAG resynthesis couples with APOBEC-1 RNA-edited ApoB-48 and MTP-mediated lipidation. Sar1b-dependent PCTV budding routes giant chylomicrons into lymphatic lacteals, achieving an obligatory vascular bypass directly into systemic circulation.',
              'খাদ্যের চর্বি পরিপাকে পিত্তলবণ ও কোলিপাইপেজের সহায়তা অপরিহার্য। অন্ত্রের কোষে CD36 ও NPC1L1 দ্বারা শোষিত হয়ে চর্বি পুনর্গঠিত হয় এবং APOBEC-1 ও MTP এনজাইম দ্বারা ApoB-48 কাইলোমাইক্রনে রূপান্তরিত হয়, যা Sar1b ভেসিকল ও লসিকা নালী দিয়ে সরাসরি রক্ত সংবহনে পৌঁছায়।'
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
          heading: l('Molecular Genetics of Monogenic Chylomicron Disorders: MTP and SAR1B', 'কাইলোমাইক্রন রোগের আণবিক জেনেটিক্স: MTP ও SAR1B'),
          paragraphs: [
            l(
              'Two distinct inborn errors of enterocyte transport illuminate the molecular choreography of chylomicron biogenesis. Abetalipoproteinemia (Bassen-Kornzweig syndrome, OMIM 200100) is caused by autosomal recessive mutations in the MTPS gene on chromosome 4q31 encoding the 97-kDa large subunit of Microsomal Triglyceride Transfer Protein. MTP forms an obligatory heterodimer with protein disulfide isomerase (PDI). Over 40 distinct pathogenic mutations (nonsense, frameshift, splice-site) produce complete loss of lipid transfer activity.',
              'দুটি বিশেষ জন্মগত ত্রুটি কাইলোমাইক্রন তৈরির আণবিক জটিলতাকে স্পষ্ট করে তোলে। প্রথমটি হলো অ্যাবেটালাইপোপ্রোটিনেমিয়া যা ক্রোমোজোম ৪-এ অবস্থিত MTP জিনের মিউটেশনের কারণে ঘটে। MTP এনজাইমের ত্রুটির কারণে কোষে চর্বি ট্রান্সফারের ক্ষমতা পুরোপুরি নষ্ট হয়ে যায়।'
            ),
            l(
              'Without functional MTP, newly synthesized ApoB-48 in enterocytes and ApoB-100 in hepatocytes cannot be lipidated during translocation across the ER membrane; unlipidated ApoB peptides misfold and undergo rapid ubiquitin-proteasome degradation via the ER-associated degradation (ERAD) pathway. Consequently, plasma concentrations of ApoB, chylomicrons, VLDL, and LDL are completely undetectable (zero), plasma cholesterol drops below 30 mg/dL, and triglycerides are undetectable.',
              'MTP না থাকলে তৈরি হওয়া ApoB প্রোটিনের সাথে চর্বি যুক্ত হতে পারে না; ফলে অপূর্ণ প্রোটিনগুলো কোষের প্রোটিওসোম দ্বারা সাথে সাথে ধ্বংস হয়ে যায়। এর ফলে রক্তে কাইলোমাইক্রন, ভিএলডিএল ও এলডিএল সম্পূর্ণ শূন্য হয়ে যায় এবং কোলেস্টেরল ও ট্রাইগ্লিসারাইড নেমে যায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Chylomicron Retention Disease (Anderson Disease) & Vesicle Budding Defects', 'কাইলোমাইক্রন রিটেনশন ডিজিজ ও ভেসিকল পরিবহন ত্রুটি'),
          paragraphs: [
            l(
              'In stark contrast to abetalipoproteinemia, Chylomicron Retention Disease (CMRD / Anderson disease, OMIM 246700) is caused by mutations in SAR1B on chromosome 5q31. Sar1b is a small Ras-family GTPase that initiates the assembly of the COPII inner coat (Sec23/Sec24) at the endoplasmic reticulum membrane. In CMRD patients, MTP is fully functional; enterocytes successfully assemble embryonic chylomicrons inside the ER lumen, but the giant pre-chylomicrons cannot bud into PCTVs to traffic to the Golgi apparatus.',
              'বিপরীতভাবে কাইলোমাইক্রন রিটেনশন ডিজিজে ক্রোমোজোম ৫-এর SAR1B জিনে মিউটেশন থাকে। Sar1b হলো একটি বিশেষ প্রোটিন যা ভেসিকল তৈরিতে সাহায্য করে। এই রোগীদের MTP সম্পূর্ণ সুস্থ থাকে এবং কোষে কাইলোমাইক্রনও তৈরি হয়; কিন্তু ভেসিকল না থাকায় সেই কাইলোমাইক্রন এন্ডোপ্লাজমিক রেটিকুলাম থেকে গলজি বডিতে যেতে পারে না।'
            ),
            l(
              'Electron microscopy of intestinal biopsies demonstrates normal-sized chylomicron particles trapped inside massively dilated ER cisternae. Interestingly, hepatic secretion of VLDL (ApoB-100) is preserved because hepatocytes express Sar1a which compensates for Sar1b loss, meaning plasma ApoB-100 and LDL are only moderately reduced, distinguishing CMRD from abetalipoproteinemia.',
              'ইলেকট্রন মাইক্রোস্কোপে দেখা যায় অন্ত্রের কোষের ভেতরে কাইলোমাইক্রন সুন্দরভাবে তৈরি হয়ে আটকে আছে কিন্তু বের হতে পারছে না। তবে যকৃতে Sar1a প্রোটিন থাকায় যকৃতের VLDL তৈরি সচল থাকে, যা এই রোগটিকে অ্যাবেটালাইপোপ্রোটিনেমিয়া থেকে স্পষ্টভাবে পৃথক করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Pharmacological Modulation of Intestinal Lipid Absorption', 'অন্ত্রের চর্বি শোষণের ফার্মাকোলজিক্যাল নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Targeting intestinal lipid processing represents a major therapeutic avenue in cardiovascular medicine. Ezetimibe binds the extracellular loop of NPC1L1, preventing its interaction with the clathrin adaptor protein complex AP2 and blocking endocytosis of dietary and biliary cholesterol. In the landmark IMPROVE-IT clinical trial, adding ezetimibe to statin therapy produced an additional 20% reduction in LDL cholesterol and significantly reduced major adverse cardiovascular events post-acute coronary syndrome.',
              'অন্ত্রের চর্বি শোষণ কমানো আধুনিক হৃদরোগ চিকিৎসার অন্যতম প্রধান হাতিয়ার। ইজেটিমাইব ওষুধটি NPC1L1 বাহককে অবরুদ্ধ করে কোলেস্টেরল শোষণ বন্ধ করে দেয়। বিভিন্ন আন্তর্জাতিক ক্লিনিক্যাল ট্রায়ালে প্রমাণিত হয়েছে যে স্ট্যাটিনের সাথে ইজেটিমাইব যোগ করলে রক্তের ক্ষতিকর এলডিএল কোলেস্টেরল আরও ২০% কমে যায় এবং হার্ট অ্যাটাকের ঝুঁকি বহুলাংশে হ্রাস পায়।'
            ),
            l(
              'More recently, systemic and enterocyte-selective MTP inhibitors (such as lomitapide) were developed. Lomitapide successfully reduces LDL cholesterol by over 50% in homozygous familial hypercholesterolemia, but its therapeutic use is strictly limited by adverse effects directly predicted by MTP biology: severe intestinal steatosis, diarrhea, and hepatic steatosis with elevated transaminases.',
              'সম্প্রতি লোমিটাপাইড নামক MTP ইনহিবিটর ওষুধ আবিষ্কার করা হয়েছে যা বংশগত মারাত্মক কোলেস্টেরল রোগীদের এলডিএল ৫০%-এর বেশি কমিয়ে দিতে পারে; তবে অন্ত্র ও যকৃতে চর্বি জমে যাওয়ার পার্শ্বপ্রতিক্রিয়ার কারণে এর ব্যবহার অত্যন্ত সতর্কতার সাথে সীমিত রাখা হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Management & Nutritional Rehabilitation in Fat Malabsorption', 'চর্বি শোষণহীনতায় ক্লিনিক্যাল ব্যবস্থাপনা ও পুষ্টি পুনর্বাসন'),
          paragraphs: [
            l(
              'Managing patients with inborn or acquired fat malabsorption requires sophisticated medical nutrition therapy. In abetalipoproteinemia, dietary long-chain fat is restricted to <15 grams per day to eliminate steatorrhea and abdominal pain. Caloric requirements are restored by supplementing with synthetic medium-chain triglyceride (MCT) oil, which diffuses directly into the portal circulation.',
              'চর্বি শোষণহীনতায় আক্রান্ত রোগীদের জন্য বিশেষায়িত পুষ্টি পুনর্বাসন একান্ত প্রয়োজন। অ্যাবেটালাইপোপ্রোটিনেমিয়ায় খাদ্যে সাধারণ দীর্ঘ চর্বি দিনে ১৫ গ্রামের নিচে নামিয়ে আনা হয় যাতে ডায়রিয়া ও পেট ফাঁপা বন্ধ হয়। শক্তির ঘাটতি মেটাতে রোগীকে কৃত্রিম মাঝারি শিকলের তেল (MCT oil) দেওয়া হয় যা সরাসরি যকৃতে গিয়ে শক্তি যোগায়।'
            ),
            l(
              'Massive oral doses of fat-soluble vitamins must be prescribed for life: vitamin E (alpha-tocopherol, 100–300 mg/kg/day) to prevent spinocerebellar degeneration, retinitis pigmentosa, and neuromuscular disability; vitamin A (10,000–20,000 IU/day) to preserve retinal rod function; vitamin D (ergocalciferol) to prevent rickets; and vitamin K to prevent bleeding diathesis. Early implementation before 1 year of age completely arrests neuromuscular progression.',
              'রোগীদের আজীবন বিপুল মাত্রায় চর্বিতে দ্রবণীয় ভিটামিন খেতে হয়: স্নায়ু ও চোখের অন্ধত্ব রোধে উচ্চমাত্রার ভিটামিন ই (১০০-৩০০ mg/kg/দিন), ভিটামিন এ, ভিটামিন ডি এবং রক্তক্ষরণ রোধে ভিটামিন কে দেওয়া হয়। জীবনের প্রথম বছরের মধ্যে চিকিৎসা শুরু করলে শিশুরা সম্পূর্ণ স্বাভাবিক জীবনযাপন করতে পারে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Frontiers in Intestinal Lipid Biology', 'অন্ত্রের লিপিড বিজ্ঞানের ভবিষ্যৎ দিগন্ত'),
          paragraphs: [
            l(
              'Intestinal lipid digestion and chylomicron assembly demonstrate how macroscopic dietary fats are transformed through biophysical micellar chemistry, precision RNA editing, and specialized vesicular trafficking into circulating lipoprotein particles. Unraveling these mechanisms continues to yield transformative therapies for dyslipidemia, metabolic syndrome, and rare monogenic lipid disorders.',
              'খাদ্যের চর্বি পরিপাক ও কাইলোমাইক্রন সমাবেশ কীভাবে ভৌত রাসায়নিক মাইসেলি গঠন, সুনির্দিষ্ট আরএনএ এডিটিং এবং বিশেষ ভেসিকল পরিবহনের মাধ্যমে সম্পন্ন হয় তা এক অনন্য বিস্ময়। এই আণবিক প্রক্রিয়াগুলোর উন্মোচন হৃদরোগ, মেটাবলিক সিন্ড্রোম এবং বিরল জেনেটিক রোগের চিকিৎসায় নতুন নতুন দিগন্ত উন্মোচন করে চলেছে।'
            ),
          ],
        },
      ],
    },
  },
}
