import type { LessonTopic, Localized, Organ3DExplorerContent } from './lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  { id: 'openstax-ap2e-ch1', authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix', title: 'Anatomy and Physiology 2e, Chapter 1: An Introduction to the Human Body', organization: 'OpenStax, Rice University', year: 2022, url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction' },
  { id: 'openstax-ap2e-1-6', authors: 'J. G. Betts et al.', title: 'Anatomy and Physiology 2e, section 1.6: Anatomical Terminology', organization: 'OpenStax, Rice University', year: 2022, url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/1-6-anatomical-terminology' },
  { id: 'openstax-ap2e-1-5', authors: 'J. G. Betts et al.', title: 'Anatomy and Physiology 2e, section 1.5: Body Cavities and Serous Membranes', organization: 'OpenStax, Rice University', year: 2022, url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/1-5-body-cavities-and-serous-membranes' },
  { id: 'fipat-ta2', authors: 'Federative International Programme for Anatomical Terminology', title: 'Terminologia Anatomica, second edition', organization: 'International Federation of Associations of Anatomists', year: 2019, url: 'https://fipat.library.dal.ca/TA2/' },
  { id: 'guyton-hall-14e', authors: 'J. E. Hall, M. E. Hall', title: 'Guyton and Hall Textbook of Medical Physiology, 14th edition', organization: 'Elsevier Health Sciences', year: 2020, url: 'https://www.elsevier.com/books/guyton-and-hall-textbook-of-medical-physiology/hall/978-0-323-59712-8' },
]

const organ3DExplorerData: Organ3DExplorerContent = {
  title: l('Interactive 3D Organ Explorer: Anatomy & Visceral Topology', 'ইন্টারেক্টিভ ৩ডি অর্গান এক্সপ্লোরার: মানবদেহের প্রধান অঙ্গ ও অবস্থান'),
  disclaimer: l('Interactive 3D anatomical teaching visualization: touch or drag to rotate in 3D; click or touch any organ to view in-depth spatial relationships, physiology, and nutrition connections.', 'ইন্টারেক্টিভ ৩ডি শিক্ষামূলক অ্যানাটমি মডেল: ৩ডি-তে ঘোরাতে ড্র্যাগ বা টাচ করুন; অঙ্গের অবস্থান, শারীরবৃত্তীয় কাজ ও পুষ্টির সংযোগ দেখতে যেকোনো অঙ্গে স্পর্শ করুন।'),
  description: l('Explore the visceral organs of the human body in full 3D coordinate space. Touch any organ to inspect its precise anatomical cavity, spatial relations to surrounding structures, physiological mechanics, and nutritional biochemistry.', 'ত্রিমাত্রিক কোঅর্ডিনেট স্পেসে মানবদেহের অভ্যন্তরীণ অঙ্গসমূহ গভীরভাবে জানুন। যেকোনো অঙ্গ স্পর্শ করে তার সুনির্দিষ্ট দেহগহ্বর, পার্শ্ববর্তী অঙ্গের সাথে স্থানিক সম্পর্ক, শারীরবৃত্তীয় কাজ এবং পুষ্টিবিজ্ঞানীয় সংযোগ পরীক্ষা করুন।'),
  organs: [
    {
      id: 'brain',
      name: l('Brain', 'মস্তিষ্ক'),
      latinName: 'Encephalon',
      system: l('Central Nervous System', 'কেন্দ্রীয় স্নায়ুতন্ত্র'),
      cavity: l('Cranial Cavity', 'করোটিগহ্বর (Cranial Cavity)'),
      position3D: { x: 0, y: 48, z: 0 },
      color: '#8b5cf6',
      highlightColor: '#6d28d9',
      shapeType: 'brain',
      description: l('The master regulatory center of the human organism, situated within the protective neurocranium. Coordinates sensory perception, motor execution, cognition, emotion, autonomic regulation, and endocrine feedback.', 'মানবদেহের কেন্দ্রীয় নিয়ন্ত্রণকারী অঙ্গ, যা প্রতিরক্ষামূলক করোটির মধ্যে অবস্থিত। এটি সংবেদনশীল অনুভূতি, চালিকা বা মোটর নিয়ন্ত্রণ, চিন্তা, স্মৃতি, স্বতঃস্ফূর্ত শারীরবৃত্তীয় কাজ এবং হরমোনের প্রতিক্রিয়া সমন্বয় করে।'),
      spatialRelations: l('Superior to the brainstem and spinal cord; enclosed by the dura, arachnoid, and pia meninges; supported inferiorly by the cranial fossae; superior and posterior to the facial viscera and nasal cavity.', 'ব্রেনস্টেম ও মেরুরজ্জুর উর্ধ্বভাগে; ডুরা, অ্যারাকনয়েড ও পিয়া মেনিনজেস দ্বারা পরিবেষ্টিত; করোটির মেঝের ক্রেনিয়াল ফসা দ্বারা অবলম্বিত; এবং মুখের অস্থিকাঠামো ও নাসাগহ্বরের উর্ধ্বে ও পেছনে অবস্থিত।'),
      physiology: l('Contains approximately 86 billion neurons interconnected by trillions of synaptic networks. Generates continuous electrochemical action potentials, regulates circadian rhythms, and integrates neuroendocrine signaling via the pituitary gland.', 'প্রায় ৮৬ বিলিয়ন নিউরন এবং ট্রিলিয়ন সিন্যাপ্টিক সংযোগ নিয়ে গঠিত। অবিচ্ছিন্ন জৈব-বৈদ্যুতিক সংকেত তৈরি করে, দেহের ঘুম-জাগরণ ছন্দ নিয়ন্ত্রণ করে এবং পিটুইটারি গ্রন্থির মাধ্যমে স্নায়ু-অন্তঃক্ষরা সংকেত সমন্বয় করে।'),
      nutritionConnection: l('Demands roughly 20% of resting whole-body glucose and oxygen despite comprising only 2% of total body mass. Depends crucially on docosahexaenoic acid (DHA, omega-3) for neuronal membranes, thiamine (vitamin B1) for pyruvate oxidation, and vitamins B6, B12, and folate for neurotransmitter methylation.', 'মোট দেহভরের মাত্র ২% হওয়া সত্ত্বেও বিশ্রামে মোট দেহের প্রায় ২০% গ্লুকোজ ও অক্সিজেন ব্যবহার করে। নিউরনের ঝিল্লির জন্য DHA (ওমেগা-৩), পাইরুভেট জারণের জন্য থায়ামিন (ভিটামিন B1) এবং নিউরোট্রান্সমিটার সংশ্লেষের জন্য ভিটামিন B6, B12 ও ফোলেটের ওপর গভীরভাবে নির্ভরশীল।'),
      clinicalSignificance: l('Protected by the tight junctions of the blood-brain barrier (BBB). Highly susceptible to ischemic injury after only minutes of oxygen deprivation; nutritional deficits can precipitate encephalopathies (e.g. Wernicke encephalopathy from thiamine deficiency).', 'ব্লাড-ব্রেন ব্যারিয়ার (BBB)-এর টাইট জাংশন দ্বারা সুরক্ষিত। রক্ত ও অক্সিজেন সরবরাহ কয়েক মিনিট বন্ধ থাকলেই স্থায়ী ক্ষতির ঝুঁকিতে থাকে; পুষ্টি ঘাটতিতে তীব্র স্নায়বিক সমস্যা (যেমন থায়ামিন ঘাটতিতে ওয়ার্নিক এনসেফালোপ্যাথি) দেখা দেয়।'),
      sectionId: 'structure',
    },
    {
      id: 'lungs',
      name: l('Lungs', 'ফুসফুস'),
      latinName: 'Pulmones',
      system: l('Respiratory System', 'শ্বাসতন্ত্র (Respiratory System)'),
      cavity: l('Thoracic Cavity (Pleural Cavities)', 'থোরাসিক গহ্বর (প্লুরাল গহ্বর)'),
      position3D: { x: 0, y: 142, z: 6 },
      color: '#0284c7',
      highlightColor: '#0369a1',
      shapeType: 'lungs',
      description: l('Paired spongy respiratory organs occupying the lateral thoracic cavity. Their primary function is oxygenating deoxygenated venous blood and removing metabolic carbon dioxide via diffusion across the alveolar-capillary membrane.', 'বক্ষগহ্বরের উভয় পার্শ্বে অবস্থিত জোড়া স্পঞ্জের মতো শ্বাসযন্ত্র। এর মূল কাজ হলো অ্যালভিওলার-কৈশিক ঝিল্লির মধ্য দিয়ে বিসরণের মাধ্যমে ভেনাস রক্তে অক্সিজেন সরবরাহ করা এবং বিপাকীয় কার্বন ডাই-অক্সাইড বের করে দেওয়া।'),
      spatialRelations: l('Flank the central mediastinum; sit immediately superior to the diaphragm; enclosed anteriorly, laterally, and posteriorly by the ribs, costal cartilages, and intercostal muscles.', 'কেন্দ্রীয় মিডিয়াস্টাইনামের দুই পাশে অবস্থিত; নিচে ডায়াফ্রামের ঠিক উপরে বসে থাকে; এবং সামনে, পাশে ও পেছনে পাঁজর, ইন্টারকোস্টাল পেশী ও বক্ষপ্রাচীর দ্বারা ঘেরা।'),
      physiology: l('Contains roughly 300 to 500 million alveoli delivering an expansive gas-exchange surface area of approximately 70–100 m². Driven by rhythmic diaphragm contraction and thoracic pressure changes.', 'প্রায় ৩০০ থেকে ৫০০ মিলিয়ন অ্যালভিওলাই ধারণ করে যা প্রায় ৭০-১০০ বর্গমিটার বিস্তৃত পৃষ্ঠতল তৈরি করে। ডায়াফ্রামের সংকোচন এবং বক্ষীয় চাপের পার্থক্যের দ্বারা নিয়ন্ত্রিত হয়।'),
      nutritionConnection: l('Type II pneumocytes synthesize pulmonary surfactant, an essential phospholipid-protein complex (dipalmitoylphosphatidylcholine) requiring dietary choline, fatty acids, and zinc. Antioxidant nutrients (vitamins C and E, beta-carotene) protect delicate alveolar surfaces against oxidant stress.', 'টাইপ-২ নিউমোসাইট অ্যালভিওলার সারফ্যাক্ট্যান্ট তৈরি করে, যা ফসফোলিপিড-প্রোটিন জটিল যৌগ এবং এর জন্য খাদ্যের কোলিন, ফ্যাটি অ্যাসিড ও জিঙ্ক প্রয়োজন। অ্যান্টিঅক্সিডেন্ট পুষ্টি উপাদান (ভিটামিন C, E) ফুসফুসকে অক্সিডেটিভ স্ট্রেস থেকে রক্ষা করে।'),
      clinicalSignificance: l('The right lung has three lobes (superior, middle, inferior) divided by horizontal and oblique fissures; the left lung has two lobes with a cardiac notch. Enclosed by visceral and parietal pleura with potential pleural space.', 'ডান ফুসফুসে ৩টি লোব (উর্ধ্ব, মধ্য ও নিম্ন) থাকে; বাম ফুসফুসে ২টি লোব এবং হৃদ্‌পিণ্ডের অবস্থানের জন্য কার্ডিয়াক নচ থাকে। ভিসেরাল ও প্যারাইটাল প্লুরা দ্বারা সুরক্ষিত।'),
      sectionId: 'cavities',
    },
    {
      id: 'heart',
      name: l('Heart', 'হৃদ্‌পিণ্ড'),
      latinName: 'Cor',
      system: l('Cardiovascular System', 'কার্ডিওভাসকুলার তন্ত্র (Cardiovascular System)'),
      cavity: l('Middle Mediastinum (Pericardial Cavity)', 'মিডল মিডিয়াস্টাইনাম (পেরিকার্ডিয়াল গহ্বর)'),
      position3D: { x: -10, y: 156, z: 14 },
      color: '#e11d48',
      highlightColor: '#9f1239',
      shapeType: 'heart',
      description: l('A four-chambered muscular myogenic pump that propels blood under pressure throughout the pulmonary and systemic circulatory circuits.', 'চার প্রকোষ্ঠবিশিষ্ট পেশীবহুল মায়োজেনিক পাম্প যা ফুসফুসীয় ও সমগ্রদেহের রক্তসংবহনতন্ত্রে চাপের মাধ্যমে অবিচ্ছিন্ন রক্ত সঞ্চালন বজায় রাখে।'),
      spatialRelations: l('Anterior to the esophagus and descending aorta; posterior to the sternal body and ribs 2–6; medial to the left and right lungs; its diaphragmatic surface rests upon the central tendon of the diaphragm.', 'অন্ননালি ও ডিসেন্ডিং অ্যাওর্টার সামনে; স্টার্নাম ও ২-৬ নং পাঁজরের পেছনে; ফুসফুস দুটির মাঝখানে এবং এর নিচের পৃষ্ঠ ডায়াফ্রামের কেন্দ্রীয় টেন্ডনের ওপর অবস্থান করে।'),
      physiology: l('Pumps approximately 5 liters of blood per minute at rest. The sinoatrial (SA) node initiates autonomous electrical depolarization, coordinating sequential atrial and ventricular systole and diastole.', 'বিশ্রামে প্রতি মিনিটে প্রায় ৫ লিটার রক্ত পাম্প করে। সাইনোঅ্যাট্রিয়াল (SA) নোড বিদ্যুৎ সংকেত তৈরি করে পর্যায়ক্রমিক অলিন্দ ও নিলয়ের সংকোচন ও প্রসারণ ঘটায়।'),
      nutritionConnection: l('Myocardial cells rely primarily (60–70%) on mitochondrial beta-oxidation of long-chain fatty acids for ATP generation, alongside glucose and ketones. Highly dependent on magnesium, potassium, calcium, and sodium balance for cardiac rhythmicity and contractility; coenzyme Q10 and thiamine are crucial for energy production.', 'মায়োকার্ডিয়াল কোষ শক্তির (ATP) ৬০-৭০% পায় দীর্ঘ-শৃঙ্খল ফ্যাটি অ্যাসিডের বিটা-অক্সিডেশন থেকে। হৃৎস্পন্দনের ছন্দ বজায় রাখতে ম্যাগনেসিয়াম, পটাসিয়াম, ক্যালসিয়াম ও সোডিয়ামের ভারসাম্য জরুরি; শক্তি উৎপাদনে কোএনজাইম Q10 ও থায়ামিন অপরিহার্য।'),
      clinicalSignificance: l('Enclosed within the fibrous pericardium and serous pericardial sac. Coronary arteries supply the thick myocardium; coronary atherosclerosis causes ischemic heart disease and myocardial infarction.', 'ফাইব্রাস পেরিকার্ডিয়াম এবং সিরাস পেরিকার্ডিয়াল থলি দ্বারা আবৃত। করোনারি ধমনী হৃদ্‌পেশীতে রক্ত দেয়; এর রক্তপ্রবাহ বাধাগ্রস্ত হলে ইস্কেমিক হৃদরোগ বা হার্ট অ্যাটাক হতে পারে।'),
      sectionId: 'cavities',
    },
    {
      id: 'liver',
      name: l('Liver', 'যকৃত'),
      latinName: 'Hepar',
      system: l('Hepato-biliary & Digestive System', 'হেপাটো-বিলিয়ারি ও পরিপাকতন্ত্র'),
      cavity: l('Right Hypochondrium & Epigastrium (Abdominal Cavity)', 'ডান হাইপোকনড্রিয়াম ও এপিগ্যাস্ট্রিয়াম (উদরগহ্বর)'),
      position3D: { x: 28, y: 218, z: 12 },
      color: '#c2410c',
      highlightColor: '#9a3412',
      shapeType: 'liver',
      description: l('The largest visceral organ and metabolic powerhouse of the human body, carrying out biochemical transformation, plasma protein synthesis, bile production, and xenobiotic detoxification.', 'মানবদেহের বৃহত্তম ভিসেরাল অঙ্গ ও প্রধান মেটাবলিক পাওয়ারহাউস; যা জৈবরাসায়নিক রূপান্তর, রক্তরস প্রোটিন তৈরি, পিত্ত ক্ষরণ এবং বিষাক্ত পদার্থ নিষ্কাশনে অংশ নেয়।'),
      spatialRelations: l('Directly inferior to the right hemidiaphragm; superior to the stomach, duodenum, and right hepatic flexure of the colon; anterior to the right kidney and inferior vena cava.', 'ডান ডায়াফ্রামের ঠিক নিচে; পাকস্থলী, ডুওডেনাম ও বৃহদান্ত্রের হেপাটিক বাঁকের উপরে; এবং ডান কিডনি ও ইনফিরিয়র ভেনাকাভার সামনে অবস্থিত।'),
      physiology: l('Receives dual blood inflow: ~75% deoxygenated nutrient-rich blood via the hepatic portal vein and ~25% oxygenated blood via the hepatic artery. Synthesizes albumin, coagulation factors (fibrinogen, prothrombin), and bile acids.', 'দ্বিমুখী রক্ত সরবরাহ পায়: প্রায় ৭৫% পুষ্টিসমৃদ্ধ রক্ত পোর্টাল ভেইন দিয়ে এবং ২৫% অক্সিজেনসমৃদ্ধ রক্ত হেপাটিক ধমনী দিয়ে। অ্যালবুমিন, রক্ত জমাট বাঁধার উপাদান এবং পিত্তলবণ তৈরি করে।'),
      nutritionConnection: l('Acts as the central clearinghouse for absorbed carbohydrates, amino acids, and lipids. Stores glucose as glycogen (~100g), stores fat-soluble vitamins (A, D, E, K), vitamin B12, and iron in the form of ferritin.', 'শোষিত কার্বোহাইড্রেট, অ্যামিনো অ্যাসিড ও লিপিডের কেন্দ্রীয় বিতরণ কেন্দ্র। গ্লুকোজকে গ্লাইকোজেন হিসেবে সঞ্চয় করে, চর্বিতে দ্রবণীয় ভিটামিন (A, D, E, K), ভিটামিন B12 এবং ফেরিটিন হিসেবে আয়রন সঞ্চয় করে রাখে।'),
      clinicalSignificance: l('Functionally divided into 8 Couinaud segments, each with independent portal triad vascularization. Capable of remarkable compensatory cellular regeneration after tissue resection.', 'কার্যকরীভাবে ৮টি কুইনাউড (Couinaud) সেগমেন্টে বিভক্ত, প্রতিটির নিজস্ব রক্ত সরবরাহ রয়েছে। ক্ষতিগ্রস্ত হলে পুনরায় কোষ বিভাজনের মাধ্যমে পুনর্গঠনের অনন্য ক্ষমতা রাখে।'),
      sectionId: 'structure',
    },
    {
      id: 'stomach',
      name: l('Stomach', 'পাকস্থলী'),
      latinName: 'Gaster',
      system: l('Gastrointestinal / Digestive System', 'গ্যাস্ট্রোইনটেস্টাইনাল / পরিপাকতন্ত্র'),
      cavity: l('Left Hypochondrium & Epigastrium (Abdominal Cavity)', 'বাম হাইপোকনড্রিয়াম ও এপিগ্যাস্ট্রিয়াম (উদরগহ্বর)'),
      position3D: { x: -24, y: 226, z: 12 },
      color: '#d97706',
      highlightColor: '#b45309',
      shapeType: 'stomach',
      description: l('A muscular, J-shaped dilatable segment of the alimentary tract situated between the esophagus and duodenum, responsible for mechanical maceration and enzymatic protein digestion.', 'অন্ননালি ও ডুওডেনামের মাঝে অবস্থিত পেশীবহুল J আকৃতির প্রসারণশীল পরিপাক অঙ্গ, যা যান্ত্রিক মন্থন এবং এনজাইমীয় প্রোটিন পরিপাক সম্পন্ন করে।'),
      spatialRelations: l('Inferior to the left dome of the diaphragm; anterior to the pancreas, left suprarenal gland, and left kidney (stomach bed); medial to the spleen; posterior to the left lobe of the liver.', 'ডায়াফ্রামের বাম গম্বুজের নিচে; অগ্ন্যাশয়, বাম কিডনি ও বাম অ্যাড্রেনাল গ্রন্থির (পাকস্থলীর শয্যা) সামনে; প্লীহার ভেতরের দিকে এবং যকৃতের বাম লোবের পেছনে অবস্থিত।'),
      physiology: l('Gastric parietal cells secrete hydrochloric acid (HCl, pH 1.5–2.0) to denature food proteins and destroy pathogens. Chief cells secrete pepsinogen, which acid converts to active pepsin.', 'প্যারাইটাল কোষ হাইড্রোক্লোরিক অ্যাসিড (pH ১.৫-২.০) ক্ষরণ করে প্রোটিন উন্মুক্ত করে ও জীবাণু ধ্বংস করে। চিফ কোষ পেপসিনোজেন ক্ষরণ করে যা অ্যাসিডের সংস্পর্শে পেপসিনে পরিণত হয়।'),
      nutritionConnection: l('Parietal cells secrete gastric intrinsic factor (GIF), which is biologically mandatory for the receptor-mediated endocytosis of Vitamin B12 in the terminal ileum. Gastric acid also reduces dietary ferric iron (Fe3+) to absorbable ferrous iron (Fe2+).', 'প্যারাইটাল কোষ ইন্ট্রিনসিক ফ্যাক্টর (GIF) ক্ষরণ করে, যা প্রান্তীয় ইলিয়ামে ভিটামিন B12 শোষণের জন্য অত্যাবশ্যক। এছাড়া অম্ল পরিবেশ খাদ্যের আয়রনকে (Fe3+ থেকে Fe2+) শোষণযোগ্য রূপে রূপান্তর করে।'),
      clinicalSignificance: l('Divided anatomically into cardia, fundus, body, antrum, and pyloric canal. Protected by a thick alkaline mucus-bicarbonate barrier; disruption leads to gastritis and peptic ulceration.', 'কার্ডিয়া, ফান্ডাস, দেহ, অ্যান্ট্রাম ও পাইলোরিক ক্যানালে বিভক্ত। বাইকার্বোনেটসমৃদ্ধ মিউকাস স্তর দ্বারা সুরক্ষিত; এই স্তর ক্ষতিগ্রস্ত হলে গ্যাস্ট্রাইটিস ও আলসার হতে পারে।'),
      sectionId: 'structure',
    },
    {
      id: 'pancreas',
      name: l('Pancreas', 'অগ্ন্যাশয়'),
      latinName: 'Pancreas',
      system: l('Digestive & Endocrine System', 'পরিপাক ও অন্তঃক্ষরা তন্ত্র'),
      cavity: l('Retroperitoneal Space (Abdominal Cavity)', 'রেট্রোপেরিটোনিয়াল স্থান (উদরগহ্বর)'),
      position3D: { x: -8, y: 240, z: -4 },
      color: '#f59e0b',
      highlightColor: '#d97706',
      shapeType: 'pancreas',
      description: l('An elongated retroperitoneal glandular organ with dual functionality: exocrine secretion of digestive enzymes into the duodenum and endocrine secretion of metabolic hormones into the portal bloodstream.', 'পেছনের দিকে অবস্থিত একটি দীর্ঘায়িত মিশ্র গ্রন্থি; যার বহিঃক্ষরা অংশ ডুওডেনামে পরিপাক এনজাইম দেয় এবং অন্তঃক্ষরা অংশ রক্তে বিপাকীয় হরমোন ক্ষরণ করে।'),
      spatialRelations: l('The C-shaped loop of the duodenum embraces the pancreatic head; the neck and body cross anterior to the abdominal aorta and superior mesenteric vessels; the tail extends laterally to touch the splenic hilum.', 'ডুওডেনামের C আকৃতির বাঁক অগ্ন্যাশয়ের মাথাকে ঘিরে রাখে; দেহ ও গ্রীবা অ্যাওর্টা ও সুপিরিয়র মেসেন্টেরিক নালীর সামনে দিয়ে যায়; এবং লেজটি প্লীহার কাছে পৌঁছে।'),
      physiology: l('Acinar cells secrete pancreatic juice containing zymogens (trypsinogen, chymotrypsinogen), pancreatic lipase, and amylase. Islets of Langerhans contain beta-cells (insulin), alpha-cells (glucagon), and delta-cells (somatostatin).', 'অ্যাসিনার কোষ ট্রিপসিনোজেন, লাইপেজ ও অ্যামাইলেজসমৃদ্ধ ক্ষারীয় অগ্ন্যাশয় রস দেয়। ল্যাঙ্গারহ্যান্সের দ্বীপপুঞ্জের বিটা কোষ থেকে ইনসুলিন এবং আলফা কোষ থেকে গ্লুকাগন নিঃসৃত হয়।'),
      nutritionConnection: l('Master hormonal regulator of systemic fuel metabolism. Postprandial insulin drives cellular glucose uptake (GLUT4), glycogen synthesis, and lipogenesis; fasting glucagon stimulates hepatic glycogenolysis and gluconeogenesis.', 'সমগ্রদেহের পুষ্টি ও জ্বালানি ব্যবহারের মূল নিয়ামক। খাওয়ার পর ইনসুলিন কোষে গ্লুকোজ প্রবেশ, গ্লাইকোজেন ও চর্বি তৈরি করায়; উপবাসে গ্লুকাগন যকৃত থেকে গ্লুকোজ রক্তে পাঠায়।'),
      clinicalSignificance: l('Exocrine insufficiency precipitates severe steatorrhea (fat malabsorption) and fat-soluble vitamin deficiencies; autoimmune destruction of beta-cells causes Type 1 diabetes mellitus.', 'বহিঃক্ষরা রসের অভাবে চর্বি ও চর্বিতে দ্রবণীয় ভিটামিন অপশোষণ ঘটে; বিটা কোষ নষ্ট হলে টাইপ-১ ডায়াবেটিস হয়।'),
      sectionId: 'integration',
    },
    {
      id: 'kidneys',
      name: l('Kidneys', 'বৃক্ক (কিডনি)'),
      latinName: 'Renes',
      system: l('Urinary & Endocrine System', 'মূত্র ও অন্তঃক্ষরা তন্ত্র'),
      cavity: l('Retroperitoneal Space (Posterior Abdominal Wall)', 'রেট্রোপেরিটোনিয়াল স্থান (পেছনের উদরপ্রাচীর)'),
      position3D: { x: 0, y: 255, z: -16 },
      color: '#dc2626',
      highlightColor: '#7f1d1d',
      shapeType: 'kidneys',
      description: l('Paired bean-shaped retroperitoneal organs that filter circulating blood, excrete metabolic end-products in urine, regulate fluid and electrolyte homeostasis, and produce vital hormones.', 'পেছনের পেটের প্রাচীরে অবস্থিত জোড়া শিমবিচির মতো অঙ্গ, যা রক্ত ছেঁকে মূত্র তৈরি করে, বর্জ্য বের করে দেয়, পানি ও ইলেক্ট্রোলাইটের সমতা রাখে এবং গুরুত্বপূর্ণ হরমোন তৈরি করে।'),
      spatialRelations: l('Flank the vertebral column between T12 and L3 vertebrae; retroperitoneal; the right kidney sits slightly lower than the left due to the liver; anterior to the quadratus lumborum muscle.', 'মেরুদণ্ডের T12 থেকে L3 কশেরুকার দুপাশে অবস্থিত; রেট্রোপেরিটোনিয়াল; যকৃতের কারণে ডান কিডনি বামটির চেয়ে সামান্য নিচে থাকে; কোয়াড্রেটাস লাম্বোরাম পেশীর সামনে অবস্থিত।'),
      physiology: l('Contain approximately 1 million nephrons per kidney. Filter roughly 180 liters of primary glomerular filtrate daily, reabsorbing over 99% of filtered water and sodium while eliminating urea, creatinine, and protons.', 'প্রতি কিডনিতে প্রায় ১০ লাখ নেফ্রন থাকে। দিনে প্রায় ১৮০ লিটার তরল ছেঁকে ৯৯% এর বেশি পানি ও সোডিয়াম পুনরায় শোষণ করে এবং ইউরিয়া, ক্রিয়েটিনিন ও অতিরিক্ত অম্ল মূত্র দিয়ে বের করে দেয়।'),
      nutritionConnection: l('Carries out the final 1-alpha-hydroxylation of 25-hydroxyvitamin D into active 1,25-dihydroxyvitamin D (calcitriol), the hormone essential for dietary calcium and phosphate absorption in the gut. Regulates dietary sodium, potassium, and phosphorus balance.', 'ভিটামিন D-কে এর সবচেয়ে সক্রিয় রূপ ১,২৫-ডাইহাইড্রক্সিভিটামিন D (ক্যালসিট্রিওল)-এ রূপান্তরিত করে, যা অন্ত্র থেকে খাদ্যের ক্যালসিয়াম ও ফসফরাস শোষণের প্রধান হরমোন। খাদ্যের সোডিয়াম ও পটাসিয়ামের সমতা রক্ষা করে।'),
      clinicalSignificance: l('Regulates blood pressure via the renin-angiotensin-aldosterone system (RAAS) and stimulates erythropoiesis via erythropoietin (EPO). Chronic kidney disease leads to anemia and renal osteodystrophy.', 'রেনিন-অ্যাঞ্জিওটেনসিন ব্যবস্থার মাধ্যমে রক্তচাপ এবং এরিথ্রোপোয়েটিন হরমোনের মাধ্যমে লোহিত রক্তকণিকা উৎপাদন নিয়ন্ত্রণ করে। কিডনি রোগে রক্তস্বল্পতা ও হাড়ের দুর্বলতা দেখা দেয়।') ,
      sectionId: 'cavities',
    },
    {
      id: 'intestines',
      name: l('Intestines', 'অন্ত্র (ক্ষুদ্রান্ত্র ও বৃহদান্ত্র)'),
      latinName: 'Intestinum',
      system: l('Gastrointestinal / Absorptive System', 'পরিপাক ও শোষণ তন্ত্র'),
      cavity: l('Umbilical, Hypogastric & Pelvic Cavity', 'আমবিলিকাল, হাইপোগ্যাস্ট্রিক ও পেলভিক গহ্বর'),
      position3D: { x: 0, y: 288, z: 14 },
      color: '#16a34a',
      highlightColor: '#15803d',
      shapeType: 'intestines',
      description: l('The convoluted conduit of digestion comprising the small intestine (duodenum, jejunum, ileum) for enzymatic hydrolysis and nutrient absorption, and the large intestine (cecum, colon, rectum) for water conservation and microbiome ecology.', 'পরিপাক নালীর বিস্তৃত অংশ; যার ক্ষুদ্রান্ত্রে (ডুওডেনাম, জেজুনাম, ইলিয়াম) খাদ্যের চূড়ান্ত পরিপাক ও পুষ্টি শোষণ হয় এবং বৃহদান্ত্রে (কোলন, রেক্টাম) পানি পুনঃশোষণ ও মাইক্রোবায়োটা গাঁজন ঘটে।'),
      spatialRelations: l('Occupies the central umbilical and lower abdominal spaces; surrounded peripherally by the ascending, transverse, and descending segments of the colon; anterior to the spine and retroperitoneum.', 'কেন্দ্রীয় নাভি অঞ্চল ও নিচের উদরগহ্বর পূর্ণ করে; চারপাশে কোলনের অ্যাসেন্ডিং, ট্রান্সভার্স ও ডিসেন্ডিং অংশ দ্বারা পরিবেষ্টিত; এবং মেরুদণ্ড ও পেছনের নালীর সামনে অবস্থিত।'),
      physiology: l('Mucosal plicae circulares, villi, and microvilli create a massive surface area (~30 m²). Enterocytes absorb monosaccharides, amino acids, and fatty acids; lymphatic lacteals transport chylomicrons.', 'মিউকোসার ভাঁজ, ভিলাই ও মাইক্রোভিলাই প্রায় ৩০ বর্গমিটার শোষণ ক্ষেত্রফল তৈরি করে। এন্টারোসাইট কোষ চিনি, অ্যামিনো অ্যাসিড ও ফ্যাটি অ্যাসিড শোষণ করে; ল্যাকটিয়াল দিয়ে কাইলোমাইক্রন লসিকায় যায়।'),
      nutritionConnection: l('The primary anatomical surface through which all dietary nutrients enter the body. Hosts trillions of symbiotic gut bacteria that ferment non-digestible dietary fiber into beneficial short-chain fatty acids (acetate, propionate, butyrate) and synthesize vitamin K and biotin.', 'সব খাদ্য-পুষ্টি উপাদান দেহে প্রবেশের মূল অঙ্গসংস্থানিক প্রবেশদ্বার। এখানে ট্রিলিয়ন উপকারী অন্ত্রীয় জীবাণু বাস করে যা খাদ্য-ফাইবার গেঁজে শর্ট-চেন ফ্যাটি অ্যাসিড (অ্যাসিটেট, বিউটাইরেট) তৈরি করে এবং ভিটামিন K ও বায়োটিন সংশ্লেষ করে।'),
      clinicalSignificance: l('Epithelial tight junctions maintain the selective mucosal barrier preventing pathogen translocation. Inflammation (e.g. Celiac disease, Crohn disease) causes mucosal atrophy and global nutritional malabsorption.', 'এপিথেলিয়াল টাইট জাংশন ক্ষতিকর জীবাণু রক্তে প্রবেশ আটকাতে প্রতিবন্ধক হিসেবে কাজ করে। সিলিয়াক ডিজিজ বা প্রদাহে ভিলাই ধ্বংস হয়ে পুষ্টির তীব্র অপশোষণ ঘটে।'),
      sectionId: 'structure',
    },
    {
      id: 'skeleton',
      name: l('Skeletal Frame & Spine', 'কঙ্কাল ও মেরুদণ্ড'),
      latinName: 'Skeleton & Columna Vertebralis',
      system: l('Musculoskeletal System', 'পেশী-কঙ্কাল তন্ত্র'),
      cavity: l('Axial Framework (Protects Cranial, Thoracic & Spinal Spaces)', 'অক্ষীয় কাঠামো (করোটি, বক্ষ ও সুষুম্নাকাণ্ড সুরক্ষিত রাখে)'),
      position3D: { x: 0, y: 180, z: 0 },
      color: '#475569',
      highlightColor: '#1e293b',
      shapeType: 'skeleton',
      description: l('The rigid architectural framework of bones and joints that shields delicate viscera, provides mechanical levers for locomotion, and serves as the principal mineral bank of the human body.', 'অস্থি ও সন্ধি দ্বারা গঠিত মানবদেহের মজবুত কাঠামো; যা কোমল অভ্যন্তরীণ অঙ্গসমূহ রক্ষা করে, চলাচলের লিভার হিসেবে কাজ করে এবং প্রধান খনিজ ভাণ্ডার হিসেবে কাজ করে।'),
      spatialRelations: l('Forms the central axial column (vertebrae, ribs, sternum) and peripheral appendicular girdles; directly surrounds the brain (cranium), spinal cord (vertebral canal), and heart/lungs (thoracic cage).', 'কেন্দ্রীয় অক্ষীয় কঙ্কাল (কশেরুকা, পাঁজর, স্টার্নাম) এবং উপাঙ্গীয় কাঠামো গঠন করে; যা মস্তিষ্ক, সুষুম্নাকাণ্ড এবং হৃদ্‌পিণ্ড ও ফুসফুসকে পূর্ণ সুরক্ষা দেয়।'),
      physiology: l('Composed of cortical and trabecular bone continuously remodeled by osteoclasts and osteoblasts. Houses active hematopoiesis in red bone marrow, producing red cells, white cells, and platelets.', 'কর্টিক্যাল ও ট্রাবেকুলার অস্থি দ্বারা গঠিত, যা অস্টিওক্লাস্ট ও অস্টিওব্লাস্ট দ্বারা নিয়মিত পুনর্গঠিত হয়। লাল অস্থিমজ্জা রক্তকণিকা (লোহিত, শ্বেত ও অণুচক্রিকা) তৈরি করে।'),
      nutritionConnection: l('Contains 99% of total body calcium, 85% of body phosphorus, and significant magnesium. Dependent upon dietary calcium, vitamin D (which drives intestinal calcium absorption), vitamin K2 (which directs calcium into hydroxyapatite crystals), and dietary protein for collagen matrix synthesis.', 'দেহের ৯৯% ক্যালসিয়াম, ৮৫% ফসফরাস এবং প্রচুর ম্যাগনেসিয়াম ধারণ করে। খাদ্য থেকে ক্যালসিয়াম, ভিটামিন D, হাড়ে ক্যালসিয়াম বাঁধতে ভিটামিন K2 এবং কোলাজেন কাঠামোর জন্য প্রোটিনের ওপর নির্ভরশীল।'),
      clinicalSignificance: l('Bone mineral density (BMD) declines when dietary calcium or vitamin D is inadequate, resulting in osteopenia and osteoporosis. Sternal angle of Louis is a primary clinical surface landmark.', 'পুষ্টিতে ক্যালসিয়াম ও ভিটামিন D-এর ঘাটতি হলে অস্থি ক্ষয় হয়ে অস্টিওপোরোসিস ঘটে। স্টার্নাল অ্যাঙ্গেল বুক ও ফুসফুস পরীক্ষার অন্যতম প্রধান সারফেস ল্যান্ডমার্ক।'),
      sectionId: 'variation',
    },
  ],
}

const sections = {
  foundation: [
    ['introduction', 'Anatomy asks what structures are present, where they are, and how they relate; physiology asks how those structures work. The distinction is useful but not absolute: a thin alveolar wall, a joint surface, or the branching of a vessel matters because form constrains exchange, movement, and flow. Human anatomy uses a shared reference posture so that a description remains meaningful when a patient, scan, or specimen is turned.', 'অ্যানাটমি জিজ্ঞেস করে কোন গঠন আছে, কোথায় আছে এবং পরস্পরের সঙ্গে তাদের সম্পর্ক কী; ফিজিওলজি জিজ্ঞেস করে সেই গঠন কীভাবে কাজ করে। পার্থক্যটি উপকারী, কিন্তু সম্পূর্ণ বিচ্ছিন্ন নয়: অ্যালভিওলারের পাতলা প্রাচীর, সন্ধির পৃষ্ঠ বা রক্তনালীর শাখা বিনিময়, চলন ও প্রবাহকে সীমা দেয়। রোগী, স্ক্যান বা নমুনা ঘোরানো হলেও বর্ণনা অর্থপূর্ণ রাখতে মানব অ্যানাটমিতে একটি অভিন্ন রেফারেন্স ভঙ্গি ব্যবহৃত হয়।'],
    ['structure', 'The body is organized in nested levels. Atoms and molecules form organelles; cells build tissues; two or more tissue types make an organ; organs cooperate in organ systems; the organism is the integrated person. This hierarchy is a teaching map, not a claim that every boundary is sharp. Blood, nerves, connective tissue, and signaling molecules cross levels and connect regions continuously.', 'দেহ সংগঠনের স্তরগুলো একটির মধ্যে আরেকটি বসানো। পরমাণু ও অণু অঙ্গাণু তৈরি করে; কোষ টিস্যু গড়ে; দুই বা ততোধিক টিস্যু মিলে অঙ্গ; অঙ্গগুলো সহযোগিতায় অঙ্গতন্ত্র; আর জীব হলো সমন্বিত ব্যক্তি। এটি শিক্ষার মানচিত্র, প্রতিটি সীমা যে কঠোর তার দাবি নয়। রক্ত, স্নায়ু, সংযোজক টিস্যু ও সংকেত অণু স্তর অতিক্রম করে অঞ্চলগুলোকে অবিচ্ছিন্নভাবে যুক্ত করে।'],
    ['mechanism', 'In anatomical position, a person stands upright, faces forward, keeps the arms at the sides, and turns the palms forward. Superior means toward the head and inferior toward the feet; anterior means toward the front and posterior toward the back. Medial is closer to the midline, lateral farther from it; proximal and distal compare positions along a limb. These words describe relations, not a person’s value, sex, or usual posture.', 'অ্যানাটমিক্যাল পজিশনে ব্যক্তি সোজা দাঁড়ান, সামনে তাকান, বাহু পাশে রাখেন এবং হাতের তালু সামনে রাখেন। superior মানে মাথার দিকে, inferior মানে পায়ের দিকে; anterior সামনে, posterior পেছনে। medial মধ্যরেখার কাছে, lateral মধ্যরেখা থেকে দূরে; proximal ও distal অঙ্গের দৈর্ঘ্য বরাবর অবস্থান তুলনা করে। শব্দগুলো সম্পর্ক বর্ণনা করে, ব্যক্তির মূল্য, লিঙ্গ বা স্বাভাবিক ভঙ্গি নয়।'],
    ['integration', 'A sagittal plane divides right and left, a frontal (coronal) plane divides anterior and posterior, and a transverse (axial) plane divides superior and inferior portions. A section is the cut or displayed slice made along a plane. Imaging conventions require care: an axial CT image is commonly viewed as if looking from the patient’s feet toward the head, so image left corresponds to the patient’s right.', 'স্যাজিটাল প্লেন ডান ও বাম ভাগ করে, ফ্রন্টাল বা করোনাল প্লেন সামনের ও পেছনের ভাগ করে, এবং ট্রান্সভার্স বা অ্যাক্সিয়াল প্লেন ওপরের ও নিচের অংশ ভাগ করে। section হলো কোনো প্লেন বরাবর কাটা বা প্রদর্শিত স্লাইস। ইমেজিংয়ের রীতি সতর্কতার দাবি করে: অ্যাক্সিয়াল CT সাধারণত রোগীর পা থেকে মাথার দিকে তাকানোর মতো দেখা হয়, তাই ছবির বাম রোগীর ডান।'],
    ['cavities', 'The dorsal cavity contains the cranial cavity and vertebral canal. The ventral cavity includes thoracic and abdominopelvic cavities, separated by the diaphragm. Pleural cavities surround lungs; the pericardial cavity surrounds the heart; the peritoneal cavity lies within the abdominopelvic region. Serous membranes reduce friction as organs move, but diagrams simplify their folded, continuous arrangement.', 'ডরসাল গহ্বরে করোটিগহ্বর ও মেরুদণ্ডীয় নাল থাকে। ভেন্ট্রাল গহ্বরে থোরাসিক ও অ্যাবডোমিনোপেলভিক গহ্বর থাকে, যেগুলো ডায়াফ্রাম আলাদা করে। প্লুরাল গহ্বর ফুসফুসকে, পেরিকার্ডিয়াল গহ্বর হৃদ্‌পিণ্ডকে ঘিরে; পেরিটোনিয়াল গহ্বর অ্যাবডোমিনোপেলভিক অঞ্চলের মধ্যে। serous membrane অঙ্গ চলার সময় ঘর্ষণ কমায়, তবে চিত্রে তাদের ভাঁজযুক্ত অবিচ্ছিন্ন বিন্যাস সরলীকৃত হয়।'],
    ['variation', 'Anatomical regions give a second map: axial regions include head, neck, trunk and back; appendicular regions include the limbs and their girdles. Normal variation is expected. A vessel may branch differently, an organ may lie somewhat differently, and body proportions vary. Variation should be described precisely and respectfully; it is not automatically disease, and an illustration cannot establish an individual’s anatomy.', 'অ্যানাটমিক্যাল অঞ্চল দ্বিতীয় একটি মানচিত্র দেয়: axial অঞ্চলে মাথা, ঘাড়, ধড় ও পিঠ; appendicular অঞ্চলে অঙ্গপ্রত্যঙ্গ ও তাদের গার্ডল। স্বাভাবিক ভিন্নতা প্রত্যাশিত। রক্তনালীর শাখা, অঙ্গের অবস্থান বা শরীরের অনুপাত ভিন্ন হতে পারে। ভিন্নতা নির্ভুল ও সম্মানজনকভাবে বর্ণনা করা উচিত; এটি নিজে থেকে রোগ নয় এবং কোনো চিত্র ব্যক্তির অ্যানাটমি নির্ধারণ করতে পারে না।'],
    ['practice', 'Worked orientation: “The spleen is lateral to the stomach and inferior to the diaphragm” uses two independent relations. First set the reference position. Then locate both structures in the left upper abdominopelvic region. Finally, verify the relation on an appropriately oriented image or specimen. The statement does not mean the spleen is directly beside every part of the stomach in every slice.', 'সমাধানসহ অরিয়েন্টেশন: “spleen, stomach-এর lateral এবং diaphragm-এর inferior” বাক্যে দুটি স্বতন্ত্র সম্পর্ক আছে। প্রথমে রেফারেন্স পজিশন ঠিক করুন। তারপর বাম ওপরের অ্যাবডোমিনোপেলভিক অঞ্চলে উভয় গঠন খুঁজুন। শেষে যথাযথভাবে অরিয়েন্ট করা ছবি বা নমুনায় সম্পর্ক যাচাই করুন। বাক্যটি বোঝায় না যে প্রতিটি স্লাইসে spleen, stomach-এর প্রতিটি অংশের ঠিক পাশে থাকে।'],
    ['takeaways', 'Anatomical terminology is a safety language: it lets learners and clinicians state location, direction, and relation without relying on “left on the page” or “nearby.” Use it with the body in anatomical position, identify the plane and viewing convention for images, and keep structure–function reasoning conditional on context. This chapter is educational; it cannot interpret a person’s symptoms or scan.', 'অ্যানাটমিক্যাল পরিভাষা নিরাপত্তার ভাষা: “পাতার বাম” বা “কাছাকাছি” না বলে অবস্থান, দিক ও সম্পর্ক বলা যায়। শরীরকে অ্যানাটমিক্যাল পজিশনে ধরে এটি ব্যবহার করুন, ছবির প্লেন ও দেখার রীতি শনাক্ত করুন এবং গঠন–কাজের যুক্তিকে প্রেক্ষাপটনির্ভর রাখুন। এই অধ্যায় শিক্ষামূলক; এটি কারও উপসর্গ বা স্ক্যান ব্যাখ্যা করতে পারে না।'],
  ],
  academic: [
    ['introduction', 'Descriptive anatomy uses reproducible spatial relationships, whereas functional morphology asks how geometry, material properties, and connectivity constrain performance. Structure–function reasoning is strongest when the proposed mechanism can be measured: for example, diffusion distance, cross-sectional area, fiber orientation, or pressure gradient. It is weaker when a visible feature is treated as a direct explanation without comparative or physiological evidence.', 'বর্ণনামূলক অ্যানাটমি পুনরুৎপাদনযোগ্য স্থানিক সম্পর্ক ব্যবহার করে; functional morphology জিজ্ঞেস করে জ্যামিতি, বস্তুগত বৈশিষ্ট্য ও সংযোগ কীভাবে কর্মক্ষমতাকে সীমা দেয়। প্রস্তাবিত প্রক্রিয়া মাপা গেলে গঠন–কাজের যুক্তি সবচেয়ে শক্তিশালী হয়—যেমন diffusion distance, cross-sectional area, fiber orientation বা pressure gradient। কেবল দৃশ্যমান বৈশিষ্ট্যকে তুলনামূলক বা শারীরবৃত্তীয় প্রমাণ ছাড়া সরাসরি ব্যাখ্যা ধরা হলে যুক্তি দুর্বল।'],
    ['structure', 'Levels of organization are linked by extracellular matrix, vascular supply, innervation, and developmental patterning. An organ is not just a named mass: its capsule, stroma, parenchyma, ducts, vessels, and nerves establish routes for support and exchange. Histological organization often predicts gross form, but scale changes what can be resolved; a CT voxel, a light-microscopy field, and a dissection expose different information.', 'সংগঠনের স্তরগুলো extracellular matrix, রক্তসরবরাহ, innervation ও বিকাশগত patterning দ্বারা যুক্ত। অঙ্গ শুধু নামযুক্ত একটি ভর নয়: capsule, stroma, parenchyma, duct, রক্তনালী ও স্নায়ু সহায়তা ও বিনিময়ের পথ স্থাপন করে। histological সংগঠন প্রায়ই gross form অনুমান করতে সাহায্য করে, কিন্তু স্কেল বদলালে দৃশ্যমান তথ্যও বদলে যায়; CT voxel, light-microscopy field এবং dissection ভিন্ন তথ্য দেখায়।'],
    ['mechanism', 'Directional terms form paired coordinate systems. Median and midsagittal refer to the midline plane; parasagittal planes are parallel but offset. Ipsilateral means on the same side and contralateral on the opposite side. Superficial and deep compare distance from a body surface, while internal and external may be defined relative to a hollow organ wall. Correct usage therefore requires naming the reference structure rather than memorizing isolated word pairs.', 'দিকনির্দেশক শব্দ জোড়া coordinate system তৈরি করে। median ও midsagittal মধ্যরেখার প্লেন বোঝায়; parasagittal প্লেন সমান্তরাল হলেও সরানো থাকে। ipsilateral একই পাশে এবং contralateral বিপরীত পাশে। superficial ও deep শরীরের পৃষ্ঠ থেকে দূরত্ব তুলনা করে, আর internal ও external ফাঁপা অঙ্গের প্রাচীরের তুলনায় নির্ধারিত হতে পারে। তাই সঠিক ব্যবহারে বিচ্ছিন্ন শব্দজোড়া মুখস্থ না করে রেফারেন্স গঠনটি বলতে হয়।'],
    ['integration', 'Plane terminology links gross anatomy to image acquisition and reconstruction. Radiographs compress three-dimensional structures into a projection; CT reconstructs attenuation measurements into slices; MRI contrast depends on tissue properties and sequence parameters; ultrasound depends on reflected sound and operator window. A named plane does not by itself guarantee an image is diagnostic, and a schematic plane cannot substitute for supervised image interpretation.', 'প্লেনের পরিভাষা gross anatomy-কে image acquisition ও reconstruction-এর সঙ্গে যুক্ত করে। রেডিওগ্রাফি ত্রিমাত্রিক গঠনকে projection-এ সংকুচিত করে; CT attenuation measurement থেকে slice reconstruct করে; MRI contrast টিস্যুর বৈশিষ্ট্য ও sequence parameter-এর উপর নির্ভর করে; ultrasound প্রতিফলিত শব্দ ও operator window-এর উপর নির্ভরশীল। শুধু প্লেনের নাম কোনো ছবি diagnostic হওয়ার নিশ্চয়তা দেয় না এবং schematic plane তত্ত্বাবধানযুক্ত image interpretation-এর বিকল্প নয়।'],
    ['cavities', 'Cavities describe potential spaces, membranes, and organ relationships rather than empty boxes. The pleural and pericardial serous membranes have parietal layers lining cavity walls and visceral layers adherent to organ surfaces; a thin fluid film permits low-friction movement. The mediastinum is the central thoracic compartment between pleural cavities, not a cavity containing a free-floating heart.', 'গহ্বরের বর্ণনা সম্ভাব্য স্থান, ঝিল্লি ও অঙ্গসম্পর্ক বোঝায়; এগুলো খালি বাক্স নয়। pleural ও pericardial serous membrane-এ cavity wall-এ parietal layer এবং অঙ্গপৃষ্ঠে visceral layer থাকে; পাতলা তরল স্তর কম ঘর্ষণে চলন সম্ভব করে। mediastinum দুই pleural cavity-এর মাঝের কেন্দ্রীয় thoracic compartment; এটি মুক্তভাবে ভাসমান হৃদ্‌পিণ্ডের গহ্বর নয়।'],
    ['variation', 'Anatomical variation is evaluated against a population distribution, developmental context, and functional consequence. Incidental variants may be clinically important only when they alter access, blood supply, drainage, or risk during a procedure. Inclusive terminology and explicit laterality reduce error. When sex-related anatomy is relevant, distinguish anatomy from gender identity and avoid inferring one from external appearance or a diagram.', 'অ্যানাটমিক্যাল ভিন্নতাকে population distribution, বিকাশগত প্রেক্ষাপট ও কার্যগত ফলের সঙ্গে বিচার করা হয়। incidental variant কেবল তখনই clinically গুরুত্বপূর্ণ হতে পারে যখন এটি procedure-এর সময় প্রবেশপথ, রক্তসরবরাহ, drainage বা ঝুঁকি বদলায়। অন্তর্ভুক্তিমূলক পরিভাষা ও স্পষ্ট laterality ভুল কমায়। sex-related anatomy প্রাসঙ্গিক হলে anatomy ও gender identity আলাদা করুন এবং বাহ্যিক চেহারা বা ছবি থেকে একটিকে অন্যটির অনুমান করবেন না।'],
    ['practice', 'Example: a coronal image through the thorax can show both lungs laterally and the mediastinum centrally. To read it, first confirm the displayed orientation marker, then identify the body wall, pleural spaces, and central structures, and finally compare left–right symmetry without assuming symmetry proves normality. This sequence prevents the common error of calling image-right “patient-right” without checking convention.', 'উদাহরণ: thorax-এর একটি coronal image-এ দুপাশে ফুসফুস এবং কেন্দ্রে mediastinum দেখা যায়। পড়তে হলে আগে orientation marker নিশ্চিত করুন, তারপর body wall, pleural space ও কেন্দ্রীয় গঠন শনাক্ত করুন, শেষে left–right symmetry তুলনা করুন—কিন্তু symmetry-কে স্বয়ংক্রিয়ভাবে স্বাভাবিকতার প্রমাণ ভাববেন না। এই ক্রম convention না দেখে image-right-কে patient-right বলার সাধারণ ভুল রোধ করে।'],
    ['takeaways', 'At academic level, anatomy is a coordinate language plus a layered model of materials, spaces, and connections. Claims should specify scale, plane, reference point, and method. Link a structural observation to a plausible function only after stating the mechanism and limits. Clinical images and variation require trained interpretation, not pattern matching from educational diagrams.', 'Academic স্তরে অ্যানাটমি হলো coordinate language এবং material, space ও connection-এর স্তরভিত্তিক মডেল। দাবিতে scale, plane, reference point ও method উল্লেখ করা উচিত। mechanism ও সীমা বলার পরই structural observation-কে সম্ভাব্য function-এর সঙ্গে যুক্ত করুন। clinical image ও variation শিক্ষামূলক চিত্রের pattern matching নয়, প্রশিক্ষিত interpretation দাবি করে।'],
  ],
  advanced: [
    ['introduction', 'Research-grade anatomy treats structure as measured, variable data. Segmentation, morphometry, diffusion imaging, histology, and dissection each introduce sampling, registration, and observer effects. A statistical atlas summarizes a population; it does not define a single “standard body.” Reproducible claims report acquisition method, coordinate frame, sample characteristics, uncertainty, and whether an observed association supports mechanism or merely co-occurs with it.', 'গবেষণা-স্তরের অ্যানাটমি গঠনকে পরিমাপযোগ্য, পরিবর্তনশীল তথ্য হিসেবে দেখে। segmentation, morphometry, diffusion imaging, histology ও dissection-এ sampling, registration এবং observer effect থাকে। statistical atlas একটি population-কে সংক্ষেপ করে; এটি একটিমাত্র “মানক দেহ” নির্ধারণ করে না। পুনরুৎপাদনযোগ্য দাবিতে acquisition method, coordinate frame, sample characteristics, uncertainty এবং দেখা সম্পর্ক mechanism সমর্থন করে নাকি শুধু সহাবস্থান করে—তা জানাতে হয়।'],
    ['structure', 'Multi-scale organization requires linking measurements across resolutions. Cell orientation may influence tissue anisotropy; tissue architecture may influence organ mechanics; organ geometry may influence system-level flow. These links are hypotheses until validated across samples and conditions. Partial-volume effects, fixation shrinkage, posture, hydration, and reconstruction algorithm can alter apparent dimensions, so measurements should not be compared without compatible protocols.', 'বহু-স্কেল সংগঠনে ভিন্ন resolution-এর পরিমাপ যুক্ত করতে হয়। কোষের orientation টিস্যুর anisotropy, টিস্যুর architecture অঙ্গের mechanics এবং অঙ্গের geometry system-level flow-কে প্রভাবিত করতে পারে। নমুনা ও পরিস্থিতি জুড়ে যাচাই না হওয়া পর্যন্ত এই যোগসূত্র hypothesis। partial-volume effect, fixation shrinkage, posture, hydration ও reconstruction algorithm দৃশ্যমান মাত্রা বদলাতে পারে; তাই compatible protocol ছাড়া পরিমাপ তুলনা করা ঠিক নয়।'],
    ['mechanism', 'Spatial terminology can be formalized with coordinate transforms. Patient, scanner, image, and atlas coordinates may differ; laterality errors arise when transformations or display conventions are implicit. In image analysis, define the plane from acquisition geometry rather than the visual impression of a slice. Report whether an orientation is anatomical, radiological, neurological, or software-specific, especially when exporting labels or comparing datasets.', 'স্থানিক পরিভাষাকে coordinate transform দিয়ে formalize করা যায়। patient, scanner, image ও atlas coordinate আলাদা হতে পারে; transform বা display convention গোপন থাকলে laterality error হয়। image analysis-এ slice দেখে অনুমান না করে acquisition geometry থেকে plane নির্ধারণ করুন। label export বা dataset তুলনার সময় orientation anatomical, radiological, neurological নাকি software-specific তা জানান।'],
    ['integration', 'Cross-sectional anatomy is an inference problem. A voxel’s intensity or signal is not a tissue identity by itself; contrast, artifact, motion, acquisition parameters, and prior knowledge shape interpretation. Machine-learning segmentations can improve throughput but require validation against an appropriate reference standard, performance across populations, and transparent failure analysis. They are not independent confirmation of the labels used to train them.', 'ক্রস-সেকশনাল অ্যানাটমি একটি inference problem। voxel-এর intensity বা signal একা টিস্যুর পরিচয় নয়; contrast, artifact, motion, acquisition parameter ও prior knowledge ব্যাখ্যাকে প্রভাবিত করে। machine-learning segmentation কাজ দ্রুত করতে পারে, তবে উপযুক্ত reference standard, বিভিন্ন population-এ performance এবং স্বচ্ছ failure analysis দিয়ে যাচাই দরকার। যে label দিয়ে model প্রশিক্ষিত হয়েছে, সেটির স্বাধীন প্রমাণ এটি নয়।'],
    ['cavities', 'Cavity boundaries are dynamic interfaces. Respiratory motion changes thoracic geometry; posture and intra-abdominal pressure shift viscera; peritoneal reflections create spaces whose appearance depends on position and fluid. A static atlas is therefore an indexed representation, not a time-resolved description. Research questions should state whether anatomy is measured at rest, during a maneuver, after fixation, or under a specific imaging protocol.', 'গহ্বরের সীমানা গতিশীল interface। শ্বাসপ্রশ্বাসে thoracic geometry বদলায়; posture ও intra-abdominal pressure ভিসেরা সরায়; peritoneal reflection এমন স্থান তৈরি করে যার চেহারা অবস্থান ও তরলের উপর নির্ভরশীল। তাই static atlas হলো indexed representation, সময়-সমাধানযুক্ত বর্ণনা নয়। গবেষণা প্রশ্নে anatomy বিশ্রামে, কোনো maneuver-এ, fixation-এর পরে নাকি নির্দিষ্ট imaging protocol-এ মাপা হয়েছে তা বলা উচিত।'],
    ['variation', 'Variation research must avoid converting group averages into normative judgments. Sampling frames, ancestry labels, age distributions, sex-related variables, disease status, and measurement error affect reported ranges. A variant may be rare, common in a sampled group, or under-detected by a method; prevalence estimates require denominators and ascertainment detail. Clinical relevance requires outcome evidence, not merely anatomical difference.', 'ভিন্নতা-গবেষণায় group average-কে normative judgment-এ পরিণত করা যাবে না। sampling frame, ancestry label, বয়স-বণ্টন, sex-related variable, রোগাবস্থা ও measurement error reported range বদলায়। কোনো variant বিরল, নমুনার কোনো group-এ সাধারণ অথবা method-এ কম ধরা পড়তে পারে; prevalence estimate-এ denominator ও ascertainment detail দরকার। clinical relevance-এর জন্য শুধু অ্যানাটমিক্যাল পার্থক্য নয়, outcome evidence দরকার।'],
    ['practice', 'Research example: before comparing hippocampal volume between groups, define the segmentation protocol, intracranial-volume adjustment, scan sequence, quality exclusions, and preregistered analysis. Then inspect whether group differences persist after relevant covariates and whether measurement reliability is adequate. A difference in an atlas-derived volume cannot, by itself, diagnose an individual or establish a cause of cognition or disease.', 'গবেষণা উদাহরণ: দুই group-এর hippocampal volume তুলনার আগে segmentation protocol, intracranial-volume adjustment, scan sequence, quality exclusion ও preregistered analysis নির্ধারণ করুন। তারপর প্রাসঙ্গিক covariate-এর পর পার্থক্য থাকে কি না এবং measurement reliability যথেষ্ট কি না দেখুন। atlas-derived volume-এর পার্থক্য একা কোনো ব্যক্তিকে diagnosis দিতে বা cognition কিংবা disease-এর কারণ স্থাপন করতে পারে না।'],
    ['takeaways', 'Advanced anatomy demands explicit measurement context, uncertainty, and ethical interpretation of variation. Anatomical planes, regions, and cavities remain essential shared language, but digital representations add coordinate and algorithmic assumptions. The disciplined workflow is: define the structure and reference frame, verify the modality, quantify uncertainty, test the proposed structure–function link, and avoid extending population findings to an individual.', 'উন্নত অ্যানাটমিতে measurement context, uncertainty এবং variation-এর নৈতিক ব্যাখ্যা স্পষ্ট করতে হয়। anatomical plane, region ও cavity অপরিহার্য shared language, কিন্তু digital representation coordinate ও algorithmic assumption যোগ করে। শৃঙ্খলাবদ্ধ workflow হলো: structure ও reference frame নির্ধারণ, modality যাচাই, uncertainty পরিমাপ, প্রস্তাবিত structure–function link পরীক্ষা এবং population finding ব্যক্তির ক্ষেত্রে বাড়িয়ে না বলা।'],
  ],
} as const

const level = (name: string, bnName: string, rows: readonly (readonly [string, string, string])[]) => ({
  label: l(name, bnName),
  sections: rows.map(([id, en, bn]) => ({
    id,
    heading: l(
      id === 'cavities' ? 'Body cavities and serous membranes' : id === 'takeaways' ? 'Key takeaways and terminology' : id.replace(/-/g, ' ').replace(/\b\w/g, (x) => x.toUpperCase()),
      id === 'cavities' ? 'দেহগহ্বর, ভিসেরাল অঙ্গ ও সিরাস ঝিল্লি' : id === 'takeaways' ? 'মূল বিষয় ও অ্যানাটমিক্যাল পরিভাষা' : 'অ্যানাটমির ধারণা'
    ),
    paragraphs: [l(en, bn)],
  })),
})

export const anatomyIntroductionLesson: LessonTopic = {
  id: 'topic.anatomy.introduction',
  slug: 'introduction-human-anatomy',
  version: 1,
  updatedAt: '2026-10-10',
  lastReviewed: '2026-10-10',
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  title: l('Introduction to Human Anatomy: Visceral Systems & 3D Spatial Topology', 'মানব অ্যানাটমির পরিচয়: অভ্যন্তরীণ অঙ্গসংস্থান ও ৩ডি স্থানিক সম্পর্ক'),
  summary: l('A comprehensive bilingual foundation connecting anatomical terminology, spatial planes, visceral cavities, organ systems, normal variation, and research methods with interactive 3D exploration.', 'অ্যানাটমিক্যাল পরিভাষা, স্থানিক প্লেন, দেহগহ্বর, অভ্যন্তরীণ প্রধান অঙ্গতন্ত্র, স্বাভাবিক ভিন্নতা এবং ৩ডি ইন্টারেক্টিভ মডেলের মাধ্যমে মানবদেহের সম্পূর্ণ দ্বিভাষিক শিক্ষা।'),
  objectives: [
    l('Use anatomical position, directional terms, planes and regions to describe organ relationships precisely in 3D.', 'ত্রিমাত্রিক স্থানে অঙ্গসমূহের সম্পর্ক নির্ভুলভাবে বর্ণনা করতে অ্যানাটমিক্যাল পজিশন, দিকনির্দেশক শব্দ, প্লেন ও রিজিওন ব্যবহার করতে পারা।'),
    l('Relate structural levels, cavities, membranes, and visceral organs to systemic physiological function and nutrition.', 'গঠনগত স্তর, দেহগহ্বর, সিরাস ঝিল্লি ও অভ্যন্তরীণ প্রধান অঙ্গসমূহকে সামগ্রিক শারীরবৃত্তীয় কাজ ও পুষ্টির সাথে সমন্বয় করতে পারা।'),
    l('Recognize anatomical variation and radiological imaging conventions as essential boundaries on diagram-based conclusions.', 'চিত্র বা মডেল-ভিত্তিক সিদ্ধান্তের সীমা ও ক্লিনিক্যাল প্রেক্ষাপট হিসেবে অ্যানাটমিক্যাল ভিন্নতা ও রেডিওলজিক্যাল রীতি উপলব্ধি করা।'),
  ],
  prerequisiteIds: [],
  relatedTopicIds: ['topic.cell.structure'],
  references: refs,
  evidenceBySection: Object.fromEntries(
    ['introduction', 'structure', 'mechanism', 'integration', 'cavities', 'variation', 'practice', 'takeaways'].map((id) => [
      id,
      id === 'mechanism' || id === 'integration'
        ? ['openstax-ap2e-1-6', 'fipat-ta2']
        : id === 'cavities'
        ? ['openstax-ap2e-1-5', 'guyton-hall-14e']
        : ['openstax-ap2e-ch1', 'guyton-hall-14e'],
    ])
  ),
  levels: {
    foundation: level('Foundation', 'ভিত্তি', sections.foundation),
    academic: level('Academic', 'একাডেমিক', sections.academic),
    advanced: level('Advanced / Research', 'উন্নত / গবেষণা', sections.advanced),
  },
  diagram: {
    accessibleDescription: l(
      'A text-first orientation sequence for anatomical position, directional language, planes, regions and body cavities.',
      'অ্যানাটমিক্যাল পজিশন, দিকনির্দেশক পরিভাষা, প্লেন, অঞ্চল ও দেহগহ্বরের টেক্সট-ফার্স্ট নির্দেশনামূলক ধারা।'
    ),
    steps: [
      l('1. Set standard anatomical position before applying any directional terminology.', '১. কোনো দিকনির্দেশক পরিভাষা ব্যবহারের পূর্বে মানক অ্যানাটমিক্যাল পজিশন নির্ধারণ করুন।'),
      l('2. Identify the anatomical plane (sagittal, coronal, transverse) and viewing convention before interpreting cross-sections.', '২. ক্রস-সেকশন বা স্লাইস ব্যাখ্যার আগে নির্দিষ্ট প্লেন (স্যাজিটাল, করোনাল, ট্রান্সভার্স) ও দেখার রীতি চিহ্নিত করুন।'),
      l('3. Describe relationships using established named reference landmarks and visceral cavities.', '৩. প্রতিষ্ঠিত ও নামাঙ্কিত রেফারেন্স ল্যান্ডমার্ক এবং দেহগহ্বরের সাপেক্ষে অঙ্গসমূহের পারস্পরিক সম্পর্ক ব্যাখ্যা করুন।'),
    ],
  },
  assessment: {
    question: l(
      'On a standard axial radiological image (such as an abdominal CT scan), which side of the patient corresponds to the left side of the displayed image?',
      'প্রচলিত অ্যাক্সিয়াল রেডিওলজিক্যাল ইমেজে (যেমন উদরের CT স্ক্যান) প্রদর্শিত ছবির বাম দিক রোগীর কোন দিক নির্দেশ করে?'
    ),
    options: [
      l('The patient’s right side (viewed from feet toward head)', 'রোগীর ডান দিক (পা থেকে মাথার দিকে তাকানোর রীতি অনুযায়ী)'),
      l('The patient’s left side (mirror image convention)', 'রোগীর বাম দিক (আয়না প্রতিবিম্ব রীতি)'),
      l('The patient’s superior / cranial side', 'রোগীর উর্ধ্ব বা ক্রেনিয়াল দিক'),
    ],
    correctIndex: 0,
    explanation: l(
      'By international radiological convention, transverse/axial scans are viewed as if standing at the patient’s feet looking toward the head, placing patient-right on image-left. Always verify the orientation marker.',
      'আন্তর্জাতিক রেডিওলজিক্যাল রীতি অনুযায়ী, ট্রান্সভার্স বা অ্যাক্সিয়াল স্ক্যান রোগীর পায়ের দিক থেকে মাথার দিকে তাকানোর দৃষ্টিকোণ থেকে দেখা হয়, ফলে ছবির বাম দিক রোগীর ডান দিক নির্দেশ করে।'
    ),
  },
  chapter: {
    toc: ['introduction', 'structure', 'mechanism', 'integration', 'cavities', 'variation', 'practice', 'takeaways'].map((id, index) => ({
      id,
      sectionId: id,
      label: l(
        `${index + 1}. ${['Scope and structure–function', 'Levels of organization & visceral organs', 'Position and coordinate directions', 'Planes and 3D imaging interpretation', 'Cavities, membranes and visceral spaces', 'Regions, surface landmarks and normal variation', 'Worked orientation and spatial reasoning', 'Synthesis and clinical takeaways'][index]}`,
        `${index + 1}. ${['অ্যানাটমির পরিধি ও গঠন–কাজ', 'সংগঠনের স্তর ও ভিসেরাল অঙ্গ', 'অবস্থান ও দিকনির্দেশক স্থানাঙ্ক', 'প্লেন ও ৩ডি ইমেজিং ব্যাখ্যা', 'দেহগহ্বর, ঝিল্লি ও অঙ্গের স্থান', 'অঞ্চল, সারফেস ল্যান্ডমার্ক ও ভিন্নতা', 'সমাধানসহ স্থানিক যুক্তিবিন্যাস', 'সংশ্লেষ ও ক্লিনিক্যাল সারসংক্ষেপ'][index]}`
      ),
    })),
    terms: [
      {
        term: l('Anatomical position', 'অ্যানাটমিক্যাল পজিশন'),
        definition: l('The standardized upright reference posture used for directional descriptions, with arms at sides and palms facing forward.', 'দিকনির্দেশক বর্ণনায় ব্যবহৃত মানক সোজা রেফারেন্স ভঙ্গি, যেখানে দুহাত পাশে এবং তালু সামনের দিকে থাকে।'),
      },
      {
        term: l('Visceral organ', 'ভিসেরাল অঙ্গ (Viscus / Viscera)'),
        definition: l('An internal organ located within a major body cavity, such as the heart, lungs, liver, stomach, or kidneys.', 'দেহের প্রধান গহ্বরের অভ্যন্তরে অবস্থিত অভ্যন্তরীণ কোমল অঙ্গ, যেমন হৃদ্‌পিণ্ড, ফুসফুস, যকৃত, পাকস্থলী বা কিডনি।'),
      },
      {
        term: l('Plane & Section', 'প্লেন ও সেকশন'),
        definition: l('An imaginary 2D flat geometric surface (sagittal, coronal, transverse) used to section or view 3D human anatomy.', 'ত্রিমাত্রিক মানবদেহকে কাটা বা প্রদর্শনের জন্য ব্যবহৃত কাল্পনিক দ্বিমাত্রিক সমতল পৃষ্ঠ (স্যাজিটাল, করোনাল, ট্রান্সভার্স)।'),
      },
      {
        term: l('Serous membrane', 'সিরাস ঝিল্লি (Serosa)'),
        definition: l('A continuous thin double-layered membrane (parietal and visceral) that lines cavities and envelops moving organs with lubricating serous fluid.', 'একটি অবিচ্ছিন্ন দ্বিস্তরযুক্ত পাতলা ঝিল্লি (প্যারাইটাল ও ভিসেরাল) যা দেহগহ্বর আবৃত করে এবং পিচ্ছিল তরলের মাধ্যমে অঙ্গসমূহের ঘর্ষণহীন চলন সম্ভব করে।'),
      },
      {
        term: l('Anatomical variation', 'অ্যানাটমিক্যাল ভিন্নতা'),
        definition: l('A non-pathological morphological or spatial deviation from typical textbook patterns occurring naturally within populations.', 'জনগোষ্ঠীর মধ্যে প্রাকৃতিকভাবে বিদ্যমান গঠনগত বা স্থানিক বৈচিত্র্য, যা কোনো রোগ বা প্যাথলজি নয়।'),
      },
    ],
    workedExamples: [
      {
        title: l('Describing visceral spatial topology in 3D without screen ambiguity', 'পর্দার দিক বিভ্রান্তি ছাড়া ত্রিমাত্রিক অঙ্গের সম্পর্ক বর্ণনা'),
        steps: [
          l('Step 1: Anchor the reference posture in standard anatomical position.', 'ধাপ ১: মানক অ্যানাটমিক্যাল পজিশনে রেফারেন্স অক্ষ স্থির করুন।'),
          l('Step 2: Name the primary reference landmark and identify its specific body cavity.', 'ধাপ ২: প্রধান রেফারেন্স ল্যান্ডমার্ক এবং সংশ্লিষ্ট দেহগহ্বর শনাক্ত করুন।'),
          l('Step 3: Apply precise paired directional terms (e.g. anterior, posterior, superior, inferior, medial, lateral).', 'ধাপ ৩: সুনির্দিষ্ট জোড়া দিকনির্দেশক পরিভাষা (সম্মুখ, পশ্চাৎ, উর্ধ্ব, নিম্ন, মিডিয়াল, ল্যাটেরাল) প্রয়োগ করুন।'),
        ],
        conclusion: l('Accurate clinical and scientific anatomical communication is absolute to the organism coordinates, entirely independent of the viewer’s angle or screen orientation.', 'নির্ভুল অ্যানাটমিক্যাল ও ক্লিনিক্যাল যোগাযোগ সম্পূর্ণভাবে ব্যক্তির নিজস্ব স্থানাঙ্কের ওপর নির্ভর করে, দর্শকের দেখার কোণ বা স্ক্রিনের ওপর নয়।'),
      },
    ],
    checkpoints: [
      {
        question: l('Why is the liver described as superior to the right kidney and inferior to the diaphragm?', 'যকৃতকে কেন ডান কিডনির উর্ধ্বে এবং ডায়াফ্রামের নিম্নে বলা হয়?'),
        answer: l('Because anatomical terms relate directly to the standard reference frame: along the vertical cranial-caudal axis, the liver lies below the respiratory diaphragm but above the retroperitoneal right kidney.', 'কারণ অ্যানাটমিক্যাল পরিভাষা স্ট্যান্ডার্ড অক্ষ অনুযায়ী চলে: উল্লম্ব ক্রেনিয়াল-কডাল অক্ষ বরাবর যকৃত ডায়াফ্রামের নিচে কিন্তু ডান কিডনির ওপরে অবস্থান করে।'),
      },
    ],
    organelles: [],
  },
  anatomyExplorer: {
    title: l('Anatomy Explorer: orientation and planes', 'অ্যানাটমি এক্সপ্লোরার: অরিয়েন্টেশন ও প্লেন'),
    disclaimer: l('Original 2D teaching schematic: not a diagnostic image, not a 3D anatomical model, and not to scale.', 'মূল 2D শিক্ষামূলক schematic: এটি diagnostic image নয়, 3D anatomical model নয় এবং scale-অনুযায়ী নয়।'),
    description: l('Select a plane or labeled body region to read its spatial meaning and linked chapter context.', 'স্থানিক অর্থ ও সংশ্লিষ্ট chapter context পড়তে কোনো plane বা label-করা body region নির্বাচন করুন।'),
    planes: [
      { id: 'sagittal', label: l('Sagittal plane', 'স্যাজিটাল প্লেন'), description: l('Divides the body into right and left portions. A midsagittal plane passes through the midline; parasagittal planes run parallel to it.', 'দেহকে ডান ও বাম অংশে ভাগ করে। midsagittal প্লেন মধ্যরেখা দিয়ে যায়; parasagittal প্লেন এর সমান্তরাল।') },
      { id: 'coronal', label: l('Frontal / coronal plane', 'ফ্রন্টাল / করোনাল প্লেন'), description: l('Divides the body into anterior and posterior portions.', 'দেহকে anterior ও posterior অংশে ভাগ করে।') },
      { id: 'transverse', label: l('Transverse / axial plane', 'ট্রান্সভার্স / অ্যাক্সিয়াল প্লেন'), description: l('Divides the body into superior and inferior portions; imaging display conventions must still be checked.', 'দেহকে superior ও inferior অংশে ভাগ করে; তবু imaging display convention যাচাই করতে হবে।') },
    ],
    regions: [
      { id: 'cranial', label: l('Head and neck', 'মাথা ও ঘাড়'), description: l('An axial region above the thorax; the head contains the cranial cavity and the neck connects it to the trunk.', 'thorax-এর ওপরের axial region; মাথায় cranial cavity থাকে এবং ঘাড় এটিকে trunk-এর সঙ্গে যুক্ত করে।'), sectionId: 'variation' },
      { id: 'thoracic', label: l('Thoracic region', 'থোরাসিক অঞ্চল'), description: l('The chest region, bounded inferiorly by the diaphragm; it contains pleural cavities and the mediastinum.', 'বক্ষ অঞ্চল, নিচে diaphragm দ্বারা সীমাবদ্ধ; এতে pleural cavity ও mediastinum থাকে।'), sectionId: 'cavities' },
      { id: 'abdominopelvic', label: l('Abdominopelvic region', 'অ্যাবডোমিনোপেলভিক অঞ্চল'), description: l('The continuous region inferior to the diaphragm, often subdivided for description and clinical communication.', 'diaphragm-এর নিচের অবিচ্ছিন্ন অঞ্চল, বর্ণনা ও clinical communication-এর জন্য প্রায়ই উপবিভক্ত করা হয়।'), sectionId: 'cavities' },
      { id: 'upper-limb', label: l('Upper limb', 'ঊর্ধ্ব অঙ্গ'), description: l('An appendicular region where proximal and distal terms are especially useful.', 'appendicular region যেখানে proximal ও distal term বিশেষভাবে উপযোগী।'), sectionId: 'mechanism' },
    ],
  },
  organ3DExplorer: organ3DExplorerData,
}
