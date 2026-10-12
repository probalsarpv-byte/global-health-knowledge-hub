import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const hemeRefs = [
  {
    id: 'lehninger-biochem-8e-ch22',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 22: Biosynthesis of Heme and Porphyrins',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch31',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 31: Porphyrins & Bile Pigments",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch24',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 24: The Biosynthesis of Amino Acids and Heme',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'marks-medbiochem-6e-ch44',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 44: Heme Metabolism and Jaundice",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

const hemeOrgan3DData: Organ3DExplorerContent = {
  title: l('3D Multi-Organ Heme Economy, Porphyrias & Jaundice Differential', '৩ডি বহু-অঙ্গীয় হিম অর্থনীতি, পরফাইরিয়া ও জন্ডিসের স্থানিক রূপরেখা'),
  disclaimer: l(
    'Interactive 3D anatomical teaching visualization: touch or drag to rotate in 3D coordinate space; explore how the bone marrow, spleen, liver, intestines, and kidneys coordinate heme biosynthesis, erythrocyte destruction, bilirubin clearance, and porphyrin accumulation.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘোরাতে স্পর্শ বা ড্র্যাগ করুন; অস্থিমজ্জা, প্লীহা, যকৃৎ, অন্ত্র ও বৃক্ক কীভাবে হিম সংশ্লেষ, রক্তকণিকা ভাঙন, বিলিরুবিন নিষ্কাশন ও পরফাইরিয়া নিয়ন্ত্রণ করে তা প্রত্যক্ষ করুন।'
  ),
  description: l(
    'Heme economy operates across an integrated anatomical circuit: bone marrow erythroblasts synthesize 85% of total heme; splenic macrophages degrade senescent red cells into unconjugated bilirubin; hepatocytes execute glucuronide conjugation; gut bacteria form stercobilin; and the kidneys excrete amber urobilin.',
    'হিম অর্থনীতি মানবদেহের একটি সমন্বিত সার্কিটে পরিচালিত হয়: অস্থিমজ্জার রক্তকণিকা ৮৫% হিম তৈরি করে; প্লীহার ম্যাক্রোফেজ পুরানো লোহিত কণিকাকে বিলিরুবিনে ভাঙে; হেপাটোসাইট গ্লুকুরোনাইড কনজুগেশন সম্পন্ন করে; অন্ত্রের ব্যাকটেরিয়া স্টারকোবিলিন তৈরি করে এবং বৃক্ক মূত্রে ইউরোবিলিন নিষ্কাশন করে।'
  ),
  organs: [
    {
      id: 'organ-skeleton-marrow-heme',
      name: l('Bone Marrow & Skeleton (85% Erythroid Heme Factory & ALAS2)', 'অস্থিমজ্জা ও কঙ্কাল (৮৫% লোহিত হিম কারখানা ও ALAS2)'),
      latinName: 'Medulla ossium rubra',
      system: l('Hematopoietic / Skeletal System', 'রক্তোৎপাদী ও কঙ্কাল তন্ত্র'),
      cavity: l('Medullary Cavity of Axial & Proximal Long Bones', 'অক্ষীয় ও দীর্ঘ অস্থির মজ্জা গহ্বর'),
      position3D: { x: 0, y: 130, z: -8 },
      color: '#e2e8f0',
      highlightColor: '#38bdf8',
      shapeType: 'skeleton',
      description: l(
        'Red bone marrow produces 85% of total human heme, driven by erythroid-specific ALAS2, which is translationally regulated by iron availability via iron-responsive elements (IRE) in its 5-UTR.',
        'লাল অস্থিমজ্জা মানবদেহের মোট হিমের ৮৫% তৈরি করে যা এরিথ্রয়েড-নির্দিষ্ট ALAS2 দ্বারা পরিচালিত; এটি আয়রন রেসপন্সিভ এলিমেন্ট (IRE) দ্বারা কোষে বিদ্যমান আয়রনের পরিমাণের ওপর কঠোরভাবে নিয়ন্ত্রিত হয়।'
      ),
      spatialRelations: l(
        'Housed within trabecular cavities of vertebrae, ribs, pelvis, and proximal femur; tightly coupled to sinusoidal capillaries for immediate reticulocyte release into blood.',
        'কশেরুকা, পাঁজর ও শ্রোণীচক্রের স্পঞ্জি অস্থির গহ্বরে অবস্থিত; উৎপন্ন রেটিকুলোসাইট সরাসরি সাইনুসয়েড কৈশিকনালির মাধ্যমে রক্তপ্রবাহে প্রবেশ করে।'
      ),
      physiology: l(
        'Combines succinyl-CoA and glycine into ALA, executing mitochondrial and cytosolic steps to insert ferrous iron (Fe2+) via ferrochelatase to form hemoglobin tetramers.',
        'সাকসিনাইল-কোএ এবং গ্লাইসিন যুক্ত করে ALA তৈরি করে, এবং মাইটোকন্ড্রিয়া ও সাইটোসলের ৮টি ধাপ শেষে ফেরোচেলাটেজ দ্বারা আয়রন ঢুকিয়ে হিমোগ্লোবিন বানায়।'
      ),
      nutritionConnection: l(
        'Requires dietary iron, vitamin B6 (PLP for ALAS2), copper (for ferroxidase ceruloplasmin), and erythropoietin stimulation for full erythropoietic heme output.',
        'হিম উৎপাদনের জন্য খাদ্যের আয়রন, ভিটামিন বি৬ (ALAS2-এর জন্য পিএলপি), তামা (সেরুলোপ্লাজমিনের জন্য) এবং এরিথ্রোপয়েটিন হরমোনের উপস্থিতি অপরিহার্য।'
      ),
      clinicalSignificance: l(
        'X-linked sideroblastic anemia results from ALAS2 deficiency; lead toxicity inhibits ALAS2 and ferrochelatase, causing microcytic anemia with basophilic stippling.',
        'ALAS2 ঘাটতিতে এক্স-লিংকড সিডারোব্লাস্টিক অ্যানিমিয়া হয়; সীসার বিষাক্ততা ALAS2 ও ফেরোচেলাটেজ বন্ধ করে বেসোফিলিক স্টিপলিং সহ অ্যানিমিয়া ঘটায়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-liver-heme',
      name: l('Liver (15% Hepatic Heme, ALAS1, UGT1A1 Conjugation & Porphyrias)', 'যকৃৎ (১৫% হেপাটিক হিম, ALAS1, UGT1A1 কনজুগেশন ও পরফাইরিয়া)'),
      latinName: 'Hepar',
      system: l('Digestive / Metabolic System', 'পরিপাক ও বিপাকীয় তন্ত্র'),
      cavity: l('Abdominal Cavity (Right Hypochondrium)', 'উদর গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 28, y: 218, z: 12 },
      color: '#b45309',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'The liver synthesizes 15% of body heme (primarily for cytochrome P450 drug detox enzymes) regulated by ALAS1 feedback, and conjugates splenic unconjugated bilirubin into soluble bilirubin diglucuronide via UGT1A1.',
        'যকৃৎ সারা শরীরের ১৫% হিম তৈরি করে (প্রধানত সাইটোক্রোম P450 ডিটক্স এনজাইমের জন্য) যা ALAS1 দ্বারা নিয়ন্ত্রিত; এবং প্লীহা থেকে আসা বিলিরুবিনকে UGT1A1 দিয়ে পানিতে দ্রবণীয় করে তোলে।'
      ),
      spatialRelations: l(
        'Occupies right upper abdomen beneath diaphragm; receives unconjugated bilirubin bound to albumin via the portal vein and hepatic artery, secreting conjugated bile into canaliculi.',
        'মধ্যচ্ছদার নিচে ডান উদরে অবস্থিত; অ্যালবুমিনে যুক্ত অদ্রবণীয় বিলিরুবিন গ্রহণ করে এবং ইউরিডিন গ্লুকুরোনাইল ট্রান্সফারেজ দিয়ে কনজুগেট করে পিত্তনালিতে পাঠায়।'
      ),
      physiology: l(
        'Hepatic ALAS1 is strongly repressed by hemin. Microsomal UGT1A1 transfers two glucuronic acids from UDP-glucuronate, enabling canalicular ATP-dependent MRP2 active transport.',
        'হেপাটিক ALAS1 অতিরিক্ত হিম বা হেমিং দ্বারা ঋণাত্মকভাবে নিয়ন্ত্রিত হয়। মাইক্রোসোমাল UGT1A1 দুটি গ্লুকুরোনিক অ্যাসিড যুক্ত করে এবং MRP2 পাম্প দিয়ে পিত্তে নিঃসরণ করে।'
      ),
      nutritionConnection: l(
        'Carbohydrate loading (glucose infusions) suppresses hepatic ALAS1 transcription via PGC-1alpha downregulation, clinically halting acute porphyric attacks.',
        'উচ্চ শর্করা গ্রহণ বা গ্লুকোজ স্যালাইন PGC-1alpha কমিয়ে হেপাটিক ALAS1 জিন বন্ধ করে দেয়, যা একিউট ইন্টারমিটেন্ট পরফাইরিয়ার আক্রমণ নিরাময়ে কার্যকর।'
      ),
      clinicalSignificance: l(
        'PBG deaminase deficiency causes Acute Intermittent Porphyria (AIP); UROD defect causes Porphyria Cutanea Tarda; UGT1A1 deficiency causes Gilbert and Crigler-Najjar syndromes.',
        'PBG ডিমাইনেজের অভাবে একিউট পরফাইরিয়া (AIP) এবং UROD ঘাটতিতে পরফাইরিয়া কিউটেনিয়া টারডা হয়; UGT1A1 এনজাইমের ঘাটতিতে গিলবার্ট ও ক্রিগলার-নাজার সিন্ড্রোম দেখা দেয়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-spleen-heme',
      name: l('Spleen (Reticuloendothelial Hemocatheresis & Heme Oxygenase)', 'প্লীহা (রেটিকুলোএন্ডোথেলিয়াল রক্তকণিকা ধ্বংস ও হিম অক্সিজিনেজ)'),
      latinName: 'Splen / Lien',
      system: l('Lymphatic & Reticuloendothelial System', 'লসিকা ও রেটিকুলোএন্ডোথেলিয়াল তন্ত্র'),
      cavity: l('Abdominal Cavity (Left Hypochondrium)', 'উদর গহ্বর (বাম হাইপোকন্ড্রিয়াম)'),
      position3D: { x: -38, y: 224, z: 8 },
      color: '#7c2d12',
      highlightColor: '#ea580c',
      shapeType: 'stomach',
      description: l(
        'Splenic red pulp macrophages inspect and phagocytose senescent red blood cells (~120 days old), cleaving hemoglobin heme via microsomal heme oxygenase into biliverdin, iron, and carbon monoxide.',
        'প্লীহার লাল মজ্জার ম্যাক্রোফেজগুলো ১২০ দিন বয়সী পুরানো লোহিত রক্তকণিকাকে ধ্বংস করে এবং হিম অক্সিজিনেজ এনজাইমের মাধ্যমে হিমকে ভেঙে বিলিভার্ডিন, আয়রন এবং কার্বন মনোক্সাইড তৈরি করে।'
      ),
      spatialRelations: l(
        'Located in the left hypochondrium posterior to stomach fundus; splenic vein drains venous blood directly into the hepatic portal system carrying lipid-soluble bilirubin to the liver.',
        'বাম উদরে পাকস্থলীর পেছনে অবস্থিত; প্লীহার শিরা সরাসরি পোর্টাল সিস্টেমে রক্ত পাঠায়, ফলে চর্বিদ্রাব্য মুক্ত বিলিরুবিন অ্যালবুমিনের সাথে দ্রুত যকৃতে পৌঁছাতে পারে।'
      ),
      physiology: l(
        'Heme oxygenase consumes 3 O2 and NADPH to open the porphyrin ring; biliverdin reductase subsequently reduces biliverdin to unconjugated bilirubin (insoluble 4Z,15Z-isomer).',
        'হিম অক্সিজিনেজ ৩টি অক্সিজেন ও NADPH ব্যবহার করে পরফাইরিন বলয় খোলে; বিলিভার্ডিন রিডাক্টেজ দ্রুত সবুজ বিলিভার্ডিনকে পানিতে অদ্রবণীয় হলুদ বিলিরুবিনে পরিণত করে।'
      ),
      nutritionConnection: l(
        'Recycles endogenous iron back to bone marrow via plasma transferrin, conserving ~20-25 mg of iron daily and preventing systemic iron-deficiency anemia.',
        'রক্তকণিকা ভাঙন থেকে প্রতিদিন প্রায় ২০-২৫ মিলিগ্রাম মূল্যবান আয়রন উদ্ধার করে ট্রান্সফারিনের মাধ্যমে পুনরায় অস্থিমজ্জায় পাঠায়, যা আয়রনের ঘাটতি রোধ করে।'
      ),
      clinicalSignificance: l(
        'Massive hemolysis (autoimmune hemolytic anemia, sickle cell crises) overwhelms hepatic conjugation capacity, producing unconjugated hyperbilirubinemia, splenomegaly, and pigment gallstones.',
        'অতিরিক্ত রক্ত ভাঙন (হেমোলাইটিক অ্যানিমিয়া, সিকেল সেল) যকৃতের ধারণক্ষমতাকে ছাড়িয়ে তীব্র আনকনজুগেটেড জন্ডিস, প্লীহার বৃদ্ধি এবং ব্ল্যাক পিগমেন্ট পিত্তপাথর সৃষ্টি করে।'
      ),
      sectionId: 'practice',
    },
    {
      id: 'organ-intestines-heme',
      name: l('Intestines (Microbial Deconjugation & Stercobilin Stool Pigment)', 'অন্ত্র (ব্যাকটেরিয়াল ডিকনজুগেশন ও স্টারকোবিলিন মল রঞ্জক)'),
      latinName: 'Intestinum tenue et crassum',
      system: l('Digestive System', 'পরিপাক তন্ত্র'),
      cavity: l('Abdominal & Pelvic Cavities', 'উদর ও শ্রোণী গহ্বর'),
      position3D: { x: 0, y: 275, z: 14 },
      color: '#d97706',
      highlightColor: '#fbbf24',
      shapeType: 'intestines',
      description: l(
        'Intestinal bacterial flora deconjugate bilirubin diglucuronide and reduce it into colorless urobilinogens, which are oxidized to stercobilin, the chromophore imparting normal brown color to stool.',
        'অন্ত্রের ব্যাকটেরিয়া বিলিরুবিন গ্লুকুরোনাইডকে মুক্ত করে বর্ণহীন ইউরোবিলিনোজেনে পরিণত করে, যা জারিত হয়ে স্টারকোবিলিন নামক বাদামী রঞ্জক তৈরি করে মলের স্বাভাবিক বর্ণ নিশ্চিত করে।'
      ),
      spatialRelations: l(
        'Occupies central and lower abdominal cavity; receives conjugated bile from the biliary tree at the second part of the duodenum through the ampulla of Vater.',
        'উদর ও শ্রোণী গহ্বরের কেন্দ্রে অবস্থিত; ডিওডেনামের অ্যাম্পুলা অব ভেটার দিয়ে পিত্তরস গ্রহণ করে এবং ক্ষুদ্র ও বৃহদন্ত্রের মধ্য দিয়ে মলদ্বারে পরিবহন করে।'
      ),
      physiology: l(
        'Colonic anaerobic bacteria (Clostridia, Bacteroides) express beta-glucuronidases; ~80-90% of urobilinogen is oxidized to stercobilin and excreted in feces; ~10-20% is reabsorbed into portal circulation.',
        'কোলনের অ্যানেরোবিক ব্যাকটেরিয়া বিটা-গ্লুকুরোনিডেজ তৈরি করে; প্রায় ৮০-৯০% ইউরোবিলিনোজেন স্টারকোবিলিন হয়ে মলের সাথে বের হয় এবং ১০-২০% পুনরায় পোর্টাল রক্তে শোষিত হয়।'
      ),
      nutritionConnection: l(
        'Broad-spectrum antibiotics sterilize colonic microflora, preventing urobilinogen formation and leading to light, unpigmented stools and reduced enterohepatic recycling.',
        'শক্তিশালী অ্যান্টিবায়োটিক অন্ত্রের ভালো ব্যাকটেরিয়া ধ্বংস করে দিলে ইউরোবিলিনোজেন তৈরি বন্ধ হয়ে যায়, যার ফলে মলের স্বাভাবিক বাদামী রঙ ফ্যাকাশে হয়ে যেতে পারে।'
      ),
      clinicalSignificance: l(
        'Biliary obstruction (gallstones, pancreatic cancer) prevents conjugated bilirubin from entering the gut, causing pale, clay-colored (acholic) stools, pruritus, and dark urine.',
        'পিত্তনালি বন্ধ হয়ে গেলে (পিত্তপাথর বা টিউমার) অন্ত্রে বিলিরুবিন পৌঁছাতে পারে না; ফলে মল সাদা বা মাটির রঙের মতো ফ্যাকাশে হয়ে যায় এবং তীব্র চুলকানি দেখা দেয়।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-kidneys-heme',
      name: l('Kidneys (Urobilin Amber Urine Color & Direct Bilirubin Filtration)', 'বৃক্ক (ইউরোবিলিন মূত্রের হলুদ বর্ণ ও কনজুগেটেড বিলিরুবিন ফিল্ট্রেশন)'),
      latinName: 'Renes',
      system: l('Excretory / Urinary System', 'রেচন তন্ত্র'),
      cavity: l('Retroperitoneal Space (T12-L3)', 'রেট্রোপেরিটোনিয়াল স্থান (T12-L3)'),
      position3D: { x: -32, y: 172, z: 22 },
      color: '#dc2626',
      highlightColor: '#f87171',
      shapeType: 'kidneys',
      description: l(
        'Reabsorbed enterohepatic urobilinogen reaches the kidneys via systemic circulation, where it is filtered and oxidized into yellow urobilin (urochrome), giving urine its characteristic amber hue.',
        'অন্ত্র থেকে পুনরায় শোষিত ইউরোবিলিনোজেন রক্ত সংবহনের মাধ্যমে বৃক্কে পৌঁছায় এবং ফিল্টার হয়ে হলুদ ইউরোবিলিনে জারিত হয়, যা মূত্রের স্বাভাবিক হালকা হলুদ বর্ণ নির্ধারণ করে।'
      ),
      spatialRelations: l(
        'Paired retroperitoneal organs; glomerular capillaries filter water-soluble molecules below 68 kDa, allowing conjugated bilirubin diglucuronide and urobilinogen to enter filtrate.',
        'উদর গহ্বরের পেছনে অবস্থিত একজোড়া অঙ্গ; এর গ্লোমেরুলাস পানিতে দ্রবণীয় কনজুগেটেড বিলিরুবিন ও ইউরোবিলিনোজেন ফিল্টার করতে পারে, কিন্তু অ্যালবুমিনে যুক্ত বিলিরুবিন পারে না।'
      ),
      physiology: l(
        'Filters ~1-4 mg/day of urobilinogen. Unconjugated bilirubin cannot be filtered because it is tightly bound to albumin; water-soluble conjugated bilirubin is freely filtered during cholestatic jaundice.',
        'দৈনিক ১-৪ মিগ্রা ইউরোবিলিনোজেন ফিল্টার করে। অদ্রবণীয় বিলিরুবিন অ্যালবুমিনের সাথে শক্তভাবে বাঁধা থাকায় ফিল্টার হয় না; তবে পিত্তনালি বন্ধ হলে কনজুগেটেড বিলিরুবিন সরাসরি মূত্রে চলে আসে।'
      ),
      nutritionConnection: l(
        'Hydration volume dilutes urinary urobilin concentration, lightening urine color from deep amber to pale straw, while severe dehydration concentrates pigment.',
        'পর্যাপ্ত পানি পান করলে মূত্রে ইউরোবিলিনের ঘনত্ব কমে প্রস্রাবের রঙ ফ্যাকাশে খড়ের মতো হয়, আর পানিশূন্যতায় প্রস্রাব গাঢ় অ্যাম্বার হলুদ বর্ণ ধারণ করে।'
      ),
      clinicalSignificance: l(
        'Dark tea-colored urine with yellow foam indicates conjugated hyperbilirubinemia (cholestasis); urine port-wine darkening on UV exposure indicates acute intermittent porphyria.',
        'গাঢ় চায়ের মতো প্রস্রাব এবং হলুদ ফেনা অবস্ট্রাকটিভ জন্ডিসের লক্ষণ; আর আলোতে রাখলে প্রস্রাব গাঢ় লালচে-কালো হয়ে যাওয়া একিউট ইন্টারমিটেন্ট পরফাইরিয়ার বৈশিষ্ট্য।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism12HemeBilirubinLesson: LessonTopic = {
  id: 'topic.metabolism.heme-bilirubin-metabolism',
  slug: 'heme-bilirubin-metabolism',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('12 · Heme Biosynthesis & Bilirubin Metabolism', '১২ · হিম সংশ্লেষ ও বিলিরুবিন বিপাক'),
  summary: l(
    'Mitochondrial and cytosolic 8-step heme biosynthesis pathway, ALAS1 hepatic repression vs ALAS2 erythroid iron regulation, lead toxicity mechanisms, acute neurovisceral and cutaneous porphyrias, reticuloendothelial macrophage heme oxygenase degradation, hepatic UGT1A1 glucuronidation, enterohepatic urobilinogen recycling, neonatal phototherapy, and the clinical differential diagnosis of pre-hepatic, hepatic, and post-hepatic jaundice.',
    'মাইটোকন্ড্রিয়া ও সাইটোসলিক ৮-ধাপ বিশিষ্ট হিম জৈবসংশ্লেষ, ALAS1 বনাম ALAS2 নিয়ন্ত্রণ, সীসার বিষাক্ততা, একিউট ও কিউটেনিয়াস পরফাইরিয়া, ম্যাক্রোফেজ হিম অক্সিজিনেজ ভাঙন, হেপাটিক UGT1A1 কনজুগেশন, অন্ত্র-যকৃত ইউরোবিলিনোজেন চক্র, নবজাতকের ফটোথেরাপি এবং প্রি-হেপাটিক, হেপাটিক ও পোস্ট-হেপাটিক জন্ডিসের নিখুঁত ক্লিনিক্যাল পার্থক্য।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Map the eight sequential enzymatic steps of heme biosynthesis across mitochondrial matrix and cytosolic compartments, identifying the rate-limiting enzyme and lead-sensitive catalysts.',
      'মাইটোকন্ড্রিয়া ও সাইটোসলের মাঝে বিস্তৃত হিম সংশ্লেষের ৮টি ধারাবাহিক ধাপ মানচিত্রে চিহ্নিত করা এবং হার-নিয়ন্ত্রক এনজাইম ও সীসা-সংবেদনশীল অনুঘটকসমূহ শনাক্ত করা।',
    ),
    l(
      'Distinguish the biochemical mechanisms and clinical phenotypes of acute porphyrias (e.g., Acute Intermittent Porphyria) from cutaneous photosensitive porphyrias (e.g., Porphyria Cutanea Tarda).',
      'স্নায়বিক একিউট পরফাইরিয়া (যেমন একিউট ইন্টারমিটেন্ট পরফাইরিয়া) এবং আলোকসংবেদনশীল ত্বকের পরফাইরিয়ার (যেমন পরফাইরিয়া কিউটেনিয়া টারডা) আণবিক ও ক্লিনিক্যাল পার্থক্য নিরূপণ করা।',
    ),
    l(
      'Trace heme catabolism to bilirubin, explain hepatic UGT1A1 conjugation, and evaluate laboratory panels (total/direct bilirubin, urine urobilinogen, fecal stercobilin) across pre-hepatic, intra-hepatic, and post-hepatic jaundice.',
      'হিম ভাঙন থেকে বিলিরুবিন তৈরি ও UGT1A1 কনজুগেশন ব্যাখ্যা করা এবং প্রি-হেপাটিক, হেপাটিক ও পোস্ট-হেপাটিক জন্ডিসের ল্যাবরেটরি মানদণ্ড নিখুঁতভাবে বিশ্লেষণ করতে পারা।',
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.carbon-skeletons-specialized-products'],
  relatedTopicIds: ['topic.metabolism.amino-acid-catabolism-urea', 'topic.metabolism.purine-pyrimidine-metabolism'],
  references: hemeRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch22', 'harpers-biochem-32e-ch31'],
    structure: ['harpers-biochem-32e-ch31', 'marks-medbiochem-6e-ch44'],
    mechanism: ['lehninger-biochem-8e-ch22', 'berg-biochem-9e-ch24'],
    integration: ['berg-biochem-9e-ch24', 'marks-medbiochem-6e-ch44'],
    practice: ['lehninger-biochem-8e-ch22', 'harpers-biochem-32e-ch31'],
    takeaways: ['lehninger-biochem-8e-ch22', 'marks-medbiochem-6e-ch44'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Biological Role of Metalloporphyrins', '১. মেটালোপরফাইরিনের জীবতাত্ত্বিক গুরুত্ব'), sectionId: 'introduction' },
      { id: 'sec-pathway', label: l('2. The 8-Step Heme Biosynthetic Pathway', '২. ৮-ধাপ বিশিষ্ট হিম জৈবসংশ্লেষ গতিপথ'), sectionId: 'structure' },
      { id: 'sec-porphyrias', label: l('3. Regulation, Lead Toxicity & Porphyrias', '৩. নিয়ন্ত্রণ, সীসার বিষাক্ততা ও পরফাইরিয়া'), sectionId: 'mechanism' },
      { id: 'sec-catabolism', label: l('4. Heme Degradation, Bilirubin & Enterohepatic Flux', '৪. হিম ভাঙন, বিলিরুবিন ও আন্তঃ-অঙ্গীয় প্রবাহ'), sectionId: 'integration' },
      { id: 'sec-jaundice', label: l('5. Hyperbilirubinemia, Phototherapy & Jaundice Differential', '৫. হাইপারবিলিরুবিনেমিয়া, ফটোথেরাপি ও জন্ডিস নির্ণয়'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Review & Synthesis Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা ও মূল শিক্ষা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('delta-Aminolevulinate Synthase (ALAS)', 'ডেল্টা-অ্যামিনোলেভুলিনেট সিন্থেজ (ALAS)'),
        definition: l(
          'Mitochondrial matrix pyridoxal phosphate (PLP)-dependent enzyme catalyzing the committed, rate-limiting condensation of succinyl-CoA and glycine to form ALA; exists as hepatic ALAS1 (repressed by hemin) and erythroid ALAS2 (regulated by iron).',
          'মাইটোকন্ড্রিয়াল ম্যাট্রিক্সের পিএলপি-নির্ভর এনজাইম যা সাকসিনাইল-কোএ এবং গ্লাইসিন যুক্ত করে ALA তৈরির হার-নিয়ন্ত্রক ধাপটি সম্পন্ন করে; হেপাটিক ALAS1 হিম দ্বারা নিবৃত্ত হয় এবং এরিথ্রয়েড ALAS2 আয়রন দ্বারা নিয়ন্ত্রিত হয়।'
        ),
      },
      {
        term: l('UDP-Glucuronosyltransferase 1A1 (UGT1A1)', 'ইউডিপি-গ্লুকুরোনোসাইলেট্রান্সফারেজ ১এ১ (UGT1A1)'),
        definition: l(
          'Hepatic endoplasmic reticulum enzyme that sequentially transfers two glucuronic acid molecules from UDP-glucuronate to bilirubin propionate carboxyl groups, converting insoluble unconjugated bilirubin into water-soluble bilirubin diglucuronide.',
          'যকৃতের এন্ডোপ্লাজমিক রেটিকুলামের এনজাইম যা দুটি গ্লুকুরোনিক অ্যাসিড যুক্ত করে অদ্রবণীয় আনকনজুগেটেড বিলিরুবিনকে পানিতে দ্রবণীয় বিলিরুবিন ডাইগ্লুকুরোনাইডে রূপান্তর করে।'
        ),
      },
      {
        term: l('Acute Intermittent Porphyria (AIP)', 'একিউট ইন্টারমিটেন্ট পরফাইরিয়া (AIP)'),
        definition: l(
          'Autosomal dominant inborn error caused by porphobilinogen deaminase (hydroxymethylbilane synthase) deficiency, leading to toxic accumulation of ALA and PBG; manifests as episodic severe neurovisceral pain, psychosis, autonomic neuropathy, and dark port-wine urine without photosensitivity.',
          'অটোসোমাল ডমিন্যান্ট জন্মগত ত্রুটি যা PBG ডিমাইনেজ এনজাইমের ঘাটতির কারণে ঘটে; ফলে ALA ও PBG জমা হয়ে তীব্র পেটে ব্যথা, মানসিক বিভ্রম ও সূর্যালোক সংবেদনশীলতাবিহীন গাঢ় প্রস্রাব দেখা দেয়।'
        ),
      },
      {
        term: l('Porphyria Cutanea Tarda (PCT)', 'পরফাইরিয়া কিউটেনিয়া টারডা (PCT)'),
        definition: l(
          'Most common human porphyria, caused by deficiency of uroporphyrinogen decarboxylase (UROD); accumulation of uroporphyrinogen generates reactive oxygen species upon sunlight exposure, causing blistering cutaneous photosensitivity, skin fragility, hyperpigmentation, and tea-colored urine.',
          'মানবদেহের সবচেয়ে সাধারণ পরফাইরিয়া যা UROD এনজাইমের ঘাটতির কারণে ঘটে; সূর্যালোকের সংস্পর্শে এলে ত্বকে তীব্র ফোসকা, ক্ষত, কালো দাগ এবং গাঢ় চায়ের মতো প্রস্রাব দেখা দেয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Stoichiometric Accounting of Heme Ring Assembly', 'হিম বলয় তৈরির রাসায়নিক অনুপাতের হিসাব'),
        steps: [
          l(
            'Step 1: ALAS condenses 8 molecules of glycine and 8 molecules of succinyl-CoA to produce 8 molecules of delta-aminolevulinic acid (ALA), releasing 8 CoA and 8 CO2.',
            'ধাপ ১: ALAS এনজাইম ৮ অণু গ্লাইসিন এবং ৮ অণু সাকসিনাইল-কোএ যুক্ত করে ৮ অণু ডেল্টা-অ্যামিনোলেভুলিনিক অ্যাসিড (ALA) তৈরি করে এবং ৮টি CO2 মুক্ত করে।'
          ),
          l(
            'Step 2: Porphobilinogen synthase condenses pairs of ALA molecules to form 4 molecules of the monopyrrole porphobilinogen (PBG), releasing 8 H2O.',
            'ধাপ ২: পরফোবিলিনোজেন সিন্থেজ প্রতি জোড়া ALA যুক্ত করে মোট ৪টি মনোফাইরোল PBG অণু তৈরি করে এবং ৮ অণু পানি অপসারিত করে।'
          ),
          l(
            'Step 3: PBG deaminase polymerizes the 4 PBG pyrrole rings into linear hydroxymethylbilane, followed by ring closure, decarboxylation, oxidations, and ferrochelatase insertion of 1 Fe2+ atom to yield 1 molecule of planar heme b (iron protoporphyrin IX).',
            'ধাপ ৩: PBG ডিমাইনেজ ৪টি রিং জোড়া লাগায় এবং পরবর্তী ধাপগুলোতে কার্বক্সিল অপসারণ ও জারণ শেষে ফেরোচেলাটেজ ১টি Fe2+ পরমাণু যুক্ত করে ১ অণু হিম তৈরি করে।'
          ),
        ],
        conclusion: l(
          'A single heme molecule coordinates one iron atom within a tetrapyrrole scaffold constructed entirely from 8 glycine and 8 succinyl-CoA precursors.',
          'একটি একক হিম অণু ঠিক একটি আয়রন পরমাণুকে ধরে রাখে এবং এর পুরো কাঠামোটি ৮টি গ্লাইসিন ও ৮টি সাকসিনাইল-কোএ থেকে নিখুঁতভাবে তৈরি হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does administration of barbiturates, antiepileptics, or alcohol precipitate life-threatening neurovisceral attacks in patients with Acute Intermittent Porphyria?',
          'একিউট ইন্টারমিটেন্ট পরফাইরিয়া রোগীর ক্ষেত্রে বারবিচুরেট, মৃগীরোগের ওষুধ বা অ্যালকোহল সেবন কেন জীবনঘাতী তীব্র আক্রমণ সৃষ্টি করে?',
        ),
        answer: l(
          'Barbiturates and lipophilic antiepileptics induce hepatic cytochrome P450 enzymes. CYP450 synthesis consumes intracellular heme pools, releasing the negative feedback repression on hepatic ALAS1. In AIP, porphobilinogen deaminase is half-normal, creating a rate-limiting enzymatic bottleneck. The massively upregulated ALAS1 floods the pathway with neurotoxic delta-aminolevulinic acid (ALA) and porphobilinogen (PBG), triggering agonizing abdominal colic, motor neuropathies, and delirium.',
          'বারবিচুরেট যকৃতের সাইটোক্রোম P450 এনজাইম উৎপাদন বহুগুণ বাড়িয়ে দেয়। CYP450 তৈরি করতে যকৃতের সমস্ত হিম খরচ হয়ে যায়, যার ফলে ALAS1 এনজাইমের ওপর ঋণাত্মক নিয়ন্ত্রণ উঠে যায়। AIP রোগীদের PBG ডিমাইনেজ আগে থেকেই কম থাকায় অতিরিক্ত সক্রিয় ALAS1 বিষাক্ত ALA ও PBG তৈরি করে শরীরে জমিয়ে দেয়, যা তীব্র পেটে ব্যথা, পক্ষাঘাত ও মানসিক বিভ্রম ঘটায়।'
        ),
      },
      {
        question: l(
          'How does phototherapy with blue-green light (460–490 nm) successfully treat neonatal unconjugated hyperbilirubinemia without requiring hepatic UGT1A1 activity?',
          'নীল-সবুজ আলো (৪৬০-৪৯০ ন্যানোমিটার) ব্যবহার করে ফটোথেরাপি কীভাবে যকৃতের UGT1A1 এনজাইম ছাড়াই নবজাতকের মারাত্মক আনকনজুগেটেড জন্ডিস নিরাময় করে?',
        ),
        answer: l(
          'Unconjugated bilirubin normally exists in a highly stable, hydrophobic 4Z,15Z internal hydrogen-bonded conformation that cannot be excreted. Absorption of 460–490 nm photons in cutaneous capillary beds causes photochemical configurational and structural isomerization. This converts insoluble bilirubin into geometric photoisomers (4Z,15E) and structural photoisomers (lumirubin), in which hydrogen bonds are broken. Lumirubin is water-soluble and is directly excreted into bile and urine without requiring hepatic glucuronide conjugation.',
          'আনকনজুগেটেড বিলিরুবিনের অভ্যন্তরীণ হাইড্রোজেন বন্ধনের কারণে এটি পানিতে সম্পূর্ণ অদ্রবণীয় থাকে। ফটোথেরাপির ৪৬০-৪৯০ ন্যানোমিটার আলো ত্বকের রক্তনালিতে পৌঁছে আলোক-রাসায়নিক আইসোমারাইজেশন ঘটায়। এর ফলে অদ্রবণীয় বিলিরুবিন পরিবর্তিত হয়ে লুমিরুবিন নামক পানিতে দ্রবণীয় আইসোমারে পরিণত হয়, যা যকৃতের সাহায্য ছাড়াই সরাসরি পিত্ত ও মূত্রে নির্গত হয়ে যায়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: hemeOrgan3DData,
  interactiveDiagram: {
    id: 'heme-bilirubin-jaundice-hub',
    title: l('Interactive Heme Lifecycle: Biosynthesis, Porphyrias, Degradation & Jaundice Differential', 'ইন্টারেক্টিভ হিম জীবনচক্র: সংশ্লেষ, পরফাইরিয়া, ভাঙন ও জন্ডিস নির্ণয়'),
    description: l(
      'Follow the full molecular journey from mitochondrial ALAS commitment through porphyrin ring closure to macrophage heme oxygenase degradation and hepatic UGT1A1 biliary clearance.',
      'মাইটোকন্ড্রিয়াল ALAS গেটওয়ে থেকে শুরু করে পরফাইরিন বলয় তৈরি, ম্যাক্রোফেজে বিলিরুবিন ভাঙন এবং যকৃতের UGT1A1 দ্বারা পিত্তে নিষ্কাশনের সম্পূর্ণ গতিপথ প্রত্যক্ষ করুন।'
    ),
    disclaimer: l(
      'Pathway stoichiometry and clinical diagnostic algorithms verified against Lehninger Principles of Biochemistry (8th ed) and Harper Illustrated Biochemistry (32nd ed).',
      'গতিপথের রাসায়নিক অনুপাত ও রোগনির্ণয়ের মানদণ্ড লেহনিঞ্জার বায়োকেমিস্ট্রি এবং হার্পারস ইলাস্ট্রেটেড বায়োকেমিস্ট্রি দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'node-alas-commitment',
        label: l('1. Mitochondrial ALAS Rate-Limiting Gateway', '১. মাইটোকন্ড্রিয়াল ALAS হার-নিয়ন্ত্রক গেটওয়ে'),
        description: l(
          'Mitochondrial delta-aminolevulinate synthase (ALAS) condenses succinyl-CoA and glycine using pyridoxal phosphate (PLP) to form ALA. Hepatic ALAS1 is feedback-inhibited by free heme/hemin; erythroid ALAS2 is transcriptionally stimulated by erythropoietin and translationally by iron.',
          'মাইটোকন্ড্রিয়ার ALAS এনজাইম পিএলপি সহ সাকসিনাইল-কোএ ও গ্লাইসিন যুক্ত করে ALA তৈরি করে। যকৃতের ALAS1 হিম দ্বারা বন্ধ হয়, আর অস্থিমজ্জার ALAS2 আয়রন ও এরিথ্রোপয়েটিন দ্বারা চালিত হয়।'
        ),
        details: l(
          'Committed step. Glucose/carbohydrate loading represses hepatic ALAS1 via PGC-1alpha. ALAS2 mutations cause X-linked sideroblastic anemia.',
          'হার-নিয়ন্ত্রক ধাপ। শর্করা বা গ্লুকোজ ইনফিউশন ALAS1 বন্ধ করে একিউট পরফাইরিয়ার আক্রমণ থামায়। ALAS2 ত্রুটিতে সিডারোব্লাস্টিক অ্যানিমিয়া হয়।'
        ),
        sectionId: 'structure',
        color: '#f59e0b',
        svgCoords: { cx: 70, cy: 75, r: 24 },
      },
      {
        id: 'node-pbg-synthase-lead',
        label: l('2. PBG Synthase & Lead Poisoning Checkpoint', '২. PBG সিন্থেজ ও সীসার বিষাক্ততা'),
        description: l(
          'Cytosolic porphobilinogen synthase (ALA dehydratase) condenses two ALA molecules into monopyrrole PBG. It is an octameric zinc-dependent enzyme; lead (Pb2+) displaces active-site Zn2+, inactivating the enzyme and causing ALA accumulation in plumbism.',
          'সাইটোসলের PBG সিন্থেজ দুটি ALA অণু যুক্ত করে এক-বলয় বিশিষ্ট PBG তৈরি করে। এটি জিংক-নির্ভর এনজাইম; সীসা (Pb2+) জিংককে তাড়িয়ে এনজাইমটি নষ্ট করে তীব্র সীসা বিষাক্ততা ঘটায়।'
        ),
        details: l(
          'Lead poisoning presents with microcytic sideroblastic anemia, basophilic stippling, Burton lines on gums, encephalopathy, and high urinary ALA.',
          'সীসার বিষাক্ততায় রক্তস্বল্পতা, দাঁতের মাড়িতে নীলচে বার্টন লাইন, পেটে তীব্র ব্যথা এবং প্রস্রাবে প্রচুর ALA দেখা যায়।'
        ),
        sectionId: 'structure',
        color: '#dc2626',
        svgCoords: { cx: 160, cy: 75, r: 24 },
      },
      {
        id: 'node-pbg-deaminase-aip',
        label: l('3. PBG Deaminase & Acute Intermittent Porphyria', '৩. PBG ডিমাইনেজ ও একিউট ইন্টারমিটেন্ট পরফাইরিয়া'),
        description: l(
          'PBG deaminase (hydroxymethylbilane synthase) condenses 4 PBG molecules into linear hydroxymethylbilane. Autosomal dominant half-normal activity causes Acute Intermittent Porphyria (AIP), presenting with neurovisceral pain without photosensitivity.',
          'PBG ডিমাইনেজ ৪টি PBG অণু জোড়া লাগিয়ে হাইড্রোক্সিমিথাইলবিলেইন বানায়। এর ঘাটতিতে একিউট ইন্টারমিটেন্ট পরফাইরিয়া (AIP) দেখা দেয়, যাতে তীব্র পেটব্যথা ও স্নায়ুরোগ হয় কিন্তু ত্বকে কোনো ক্ষত হয় না।'
        ),
        details: l(
          'Classic triad: Abdominal pain, neuropsychiatric symptoms, port-wine urine on standing. Precipitated by CYP450-inducing drugs (barbiturates) and fasting.',
          'প্রধান লক্ষণ: তীব্র পেটে ব্যথা, মানসিক বিভ্রম ও আলোতে রাখলে গাঢ় চেরি রঙের প্রস্রাব। বারবিচুরেট ও উপবাসে এর তীব্রতা বেড়ে যায়।'
        ),
        sectionId: 'mechanism',
        color: '#7c3aed',
        svgCoords: { cx: 250, cy: 75, r: 24 },
      },
      {
        id: 'node-urod-pct',
        label: l('4. UROD & Porphyria Cutanea Tarda', '৪. UROD ও পরফাইরিয়া কিউটেনিয়া টারডা'),
        description: l(
          'Uroporphyrinogen decarboxylase (UROD) converts uroporphyrinogen III into coproporphyrinogen III. Deficiency causes Porphyria Cutanea Tarda (PCT), the most common porphyria, producing severe blistering photosensitivity upon sun exposure.',
          'UROD এনজাইম ইউরোপরফাইরিনোজেন-৩ কে কোপ্রোপরফাইরিনোজেন-৩ এ রূপান্তর করে। এর অভাবে সবচেয়ে সাধারণ পরফাইরিয়া PCT দেখা দেয়, যাতে রোদে গেলে ত্বকে তীব্র ফোসকা পড়ে।'
        ),
        details: l(
          'Triggered by alcohol, iron overload (hemochromatosis), and Hepatitis C. Treated with therapeutic phlebotomy and low-dose chloroquine to excrete porphyrins.',
          'মদ্যপান, আয়রনের আধিক্য এবং হেপাটাইটিস সি দ্বারা এটি বাড়ে। চিকিৎসায় রক্তমোক্ষণ (ফ্লেবোটমি) ও ক্লোরোকুইন দিয়ে পরফাইরিন বের করে দেওয়া হয়।'
        ),
        sectionId: 'mechanism',
        color: '#ea580c',
        svgCoords: { cx: 340, cy: 75, r: 24 },
      },
      {
        id: 'node-ferrochelatase-heme',
        label: l('5. Mitochondrial Ferrochelatase & Heme Formation', '৫. মাইটোকন্ড্রিয়াল ফেরোচেলাটেজ ও হিম উৎপাদন'),
        description: l(
          'Ferrochelatase inserts a ferrous iron atom (Fe2+) into protoporphyrin IX inside the inner mitochondrial membrane, completing heme synthesis. Inhibited by lead; deficiency produces erythropoietic protoporphyria (EPP) with acute painful solar urticaria.',
          'ফেরোচেলাটেজ এনজাইম প্রোটোপরফাইরিন-৯ এর কেন্দ্রে Fe2+ আয়রন ঢুকিয়ে সম্পূর্ণ হিম অণু তৈরি করে। সীসা একে নিবৃত্ত করে; এর অভাবে EPP নামক মারাত্মক রোদ-অ্যালার্জি হয়।'
        ),
        details: l(
          'Heme incorporates into hemoglobin, myoglobin, cytochromes, catalase, and nitric oxide synthase. Excess heme oxidizes to hemin (Fe3+).',
          'উৎপন্ন হিম পরবর্তীতে হিমোগ্লোবিন, মায়োগ্লোবিন ও সাইটোক্রোমে যুক্ত হয়। অতিরিক্ত হিম জারিত হয়ে হেমিং (Fe3+) তৈরি করে।'
        ),
        sectionId: 'structure',
        color: '#10b981',
        svgCoords: { cx: 70, cy: 155, r: 24 },
      },
      {
        id: 'node-heme-oxygenase-spleen',
        label: l('6. Reticuloendothelial Heme Oxygenase Cleavage', '৬. ম্যাক্রোফেজ হিম অক্সিজিনেজ ভাঙন'),
        description: l(
          'Splenic and Kupffer macrophages phagocytose aged red blood cells. Microsomal heme oxygenase opens the porphyrin ring, releasing biliverdin, Fe2+, and carbon monoxide (CO). Biliverdin reductase then reduces biliverdin to unconjugated bilirubin.',
          'প্লীহার ম্যাক্রোফেজ পুরানো লোহিত কণিকাকে ভেঙে ফেলে। হিম অক্সিজিনেজ বলয়টি খুলে সবুজ বিলিভার্ডিন, Fe2+ এবং কার্বন মনোক্সাইড তৈরি করে। এরপর বিলিভার্ডিন রিডাক্টেজ হলুদ বিলিরুবিন উৎপন্ন করে।'
        ),
        details: l(
          'Unconjugated bilirubin is lipophilic and insoluble; circulates bound tightly to albumin. Cannot cross glomerular filter into urine (acholuric).',
          'আনকনজুগেটেড বিলিরুবিন পানিতে অদ্রবণীয় এবং রক্তে অ্যালবুমিনের সাথে বাঁধা থাকে। এটি কিডনিতে ফিল্টার হতে পারে না বলে মূত্রে যেতে পারে না।'
        ),
        sectionId: 'integration',
        color: '#06b6d4',
        svgCoords: { cx: 160, cy: 155, r: 24 },
      },
      {
        id: 'node-ugt1a1-conjugation',
        label: l('7. Hepatic UGT1A1 Glucuronide Conjugation', '৭. যকৃতের UGT1A1 গ্লুকুরোনাইড কনজুগেশন'),
        description: l(
          'Hepatocytes take up bilirubin via OATP1B1. In the smooth ER, UGT1A1 adds two glucuronic acids from UDP-glucuronate, forming water-soluble bilirubin diglucuronide, actively pumped into bile canaliculi by ATP-dependent MRP2.',
          'যকৃত কোষ রক্ত থেকে বিলিরুবিন গ্রহণ করে। মসৃণ এন্ডোপ্লাজমিক রেটিকুলামে UGT1A1 দুটি গ্লুকুরোনিক অ্যাসিড যুক্ত করে পানিতে দ্রবণীয় কনজুগেটেড বিলিরুবিন বানায় যা MRP2 পাম্প দিয়ে পিত্তে যায়।'
        ),
        details: l(
          'Gilbert syndrome: ~30% UGT1A1 activity, benign mild indirect jaundice. Crigler-Najjar Type I: absent UGT1A1, fatal kernicterus without transplant. Dubin-Johnson: MRP2 defect, black liver.',
          'গিলবার্ট সিন্ড্রোমে ৩০% কার্যকারিতা থাকে যা নির্দোষ; ক্রিগলার-নাজারে এনজাইম না থাকায় কার্নিকটেরাস হয়; ডুবিন-জনসনে MRP2 নষ্ট থাকায় যকৃৎ কালো হয়।'
        ),
        sectionId: 'practice',
        color: '#8b5cf6',
        svgCoords: { cx: 250, cy: 155, r: 24 },
      },
      {
        id: 'node-stercobilin-urobilin',
        label: l('8. Gut Microbiome & Enterohepatic Elimination', '৮. অন্ত্রের ব্যাকটেরিয়া ও মল-মূত্রে নিষ্কাশন'),
        description: l(
          'Intestinal bacteria reduce conjugated bilirubin into colorless urobilinogen. ~85% is oxidized to brown stercobilin in feces; ~15% is reabsorbed into portal blood, with a small fraction filtered by kidneys and oxidized to amber yellow urobilin.',
          'অন্ত্রের ব্যাকটেরিয়া বিলিরুবিনকে বর্ণহীন ইউরোবিলিনোজেনে পরিণত করে। এর ৮৫% বাদামী স্টারকোবিলিন হয়ে মলে যায় এবং বাকি অংশ শোষিত হয়ে কিডনির মাধ্যমে হলুদ ইউরোবিলিন হয়ে মূত্রে বের হয়।'
        ),
        details: l(
          'Biliary obstruction blocks bilirubin entry into gut: results in pale clay-colored stools, dark tea-colored urine (direct bilirubin filtered), and severe itching.',
          'পিত্তনালি বন্ধ হলে অন্ত্রে পিত্ত যেতে পারে না: ফলে মল সাদা বা মাটির রঙের মতো হয় এবং প্রস্রাব গাঢ় চায়ের মতো হয়।'
        ),
        sectionId: 'practice',
        color: '#ec4899',
        svgCoords: { cx: 340, cy: 155, r: 24 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Introduction: The Essential Biological Roles of Heme', 'ভূমিকা: হিমের অপরিহার্য জীবতাত্ত্বিক গুরুত্ব'),
          paragraphs: [
            l(
              'Heme is one of the most vital iron-binding organic molecules in human biology, forming the essential functional core of hemoglobin, myoglobin, respiratory cytochromes in electron transport, and detoxification enzymes in the liver like cytochrome P450. Human cells synthesize approximately 30 milligrams of fresh heme every single day, primarily in the bone marrow to produce new erythrocytes and in the liver to maintain chemical defenses, while simultaneously degrading aged heme into the yellow pigment bilirubin.',
              'হিম হলো মানবদেহের অন্যতম গুরুত্বপূর্ণ আয়রন-যুক্ত জৈব অণু, যা হিমোগ্লোবিন, মায়োগ্লোবিন, শ্বাস-প্রশ্বাসের ইলেকট্রন পরিবহন সাইটোক্রোম এবং যকৃতের সাইটোক্রোম P450 ডিটক্স এনজাইমের প্রাণকেন্দ্র। নতুন লোহিত রক্তকণিকা তৈরি এবং যকৃতের রাসায়নিক প্রতিরক্ষা সচল রাখতে মানবদেহের কোষগুলো প্রতিদিন প্রায় ৩০ মিলিগ্রাম নতুন হিম সংশ্লেষ করে; আর একই সাথে পুরানো ও ক্ষতিগ্রস্ত রক্তকণিকার হিম ভেঙে হলুদ রঞ্জক বিলিরুবিনে পরিণত করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Molecular Architecture: The Planar Iron-Protoporphyrin Scaffold', 'আণবিক গঠন: সমতল আয়রন-প্রোটোপরফাইরিন কাঠামো'),
          paragraphs: [
            l(
              'The chemical structure of heme consists of an organic planar ring called protoporphyrin IX coordinating a central ferrous iron atom (Fe2+) at its center. This tetrapyrrole ring is constructed by linking four pyrrole rings together through methene bridges. Because free iron and porphyrin intermediates are highly photoreactive and capable of generating damaging reactive oxygen species, the eight-step pathway is strictly partitioned between two distinct cellular compartments: the mitochondrial matrix and the cytoplasm.',
              'হিমের রাসায়নিক কাঠামোটি প্রোটোপরফাইরিন-৯ নামক একটি সমতল জৈব বলয় নিয়ে গঠিত যার কেন্দ্রস্থলে একটি ফেরাস আয়রন (Fe2+) পরমাণু আবদ্ধ থাকে। চারটি পাইরোল বলয় মিথিন বন্ধন দিয়ে যুক্ত হয়ে এই টেট্রাপাইরোল কাঠামো তৈরি করে। মুক্ত আয়রন এবং পরফাইরিনের অন্তর্বর্তী যৌগগুলো সূর্যালোকের উপস্থিতিতে অত্যন্ত ক্ষতিকর মুক্ত র্যাডিক্যাল তৈরি করতে পারে বলে এই ৮-ধাপ বিশিষ্ট গতিপথটি মাইটোকন্ড্রিয়া ও সাইটোপ্লাজমের মাঝে কঠোরভাবে বিভক্ত থাকে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Eight Synthesis Steps and Splenic Degradation', 'আটটি সংশ্লেষ ধাপ এবং প্লীহায় ভাঙন প্রক্রিয়া'),
          paragraphs: [
            l(
              'Heme synthesis begins inside the mitochondria, where the enzyme ALA synthase combines succinyl-CoA from the citric acid cycle with the amino acid glycine using vitamin B6. The pathway then moves into the cytoplasm for four successive steps that construct the porphyrin ring, before returning to the mitochondria for the final oxidations and iron insertion by ferrochelatase. When old red blood cells are destroyed in the spleen after 120 days, macrophages cleave the heme ring into carbon monoxide, iron, and yellow bilirubin.',
              'হিম সংশ্লেষ মাইটোকন্ড্রিয়ার ভেতরে শুরু হয়, যেখানে ALA সিন্থেজ এনজাইম ভিটামিন বি৬ ব্যবহার করে সাইট্রিক অ্যাসিড চক্রের সাকসিনাইল-কোএ এবং অ্যামিনো অ্যাসিড গ্লাইসিনকে যুক্ত করে। এরপর গতিপথটি সাইটোপ্লাজমে চলে আসে যেখানে চারটি ধাপে বলয়টি তৈরি হয়, এবং সবশেষে পুনরায় মাইটোকন্ড্রিয়ায় ফিরে এসে ফেরোচেলাটেজ দ্বারা আয়রন যুক্ত হয়ে পূর্ণাঙ্গ হিম তৈরি হয়। ১২০ দিন পর প্লীহায় পুরানো রক্তকণিকা ভাঙলে ম্যাক্রোফেজ হিমকে ভেঙে বিলিরুবিনে পরিণত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Albumin Transit and Hepatic Glucuronidation', 'অ্যালবুমিন পরিবহন এবং যকৃতের গ্লুকুরোনাইড কনজুগেশন'),
          paragraphs: [
            l(
              'Because unconjugated bilirubin released from the spleen is oily and insoluble in water, it must travel through the bloodstream tightly bound to serum albumin. Upon arriving at the liver, hepatocytes attach two water-soluble glucuronic acid sugars using the enzyme UGT1A1 to make conjugated bilirubin, which is excreted into bile and sent to the intestines. Gut bacteria then reduce bilirubin into stercobilin (which gives stool its normal brown color) and urobilin (which gives urine its amber yellow hue).',
              'প্লীহা থেকে বের হওয়া আনকনজুগেটেড বিলিরুবিন চর্বিদ্রাব্য ও পানিতে অদ্রবণীয় হওয়ায় এটি রক্তের সিরাম অ্যালবুমিনের সাথে শক্তভাবে যুক্ত হয়ে যকৃতে পৌঁছায়। যকৃতে হেপাটোসাইট কোষগুলো UGT1A1 এনজাইম দিয়ে দুটি গ্লুকুরোনিক অ্যাসিড যুক্ত করে পানিতে দ্রবণীয় কনজুগেটেড বিলিরুবিন বানায় এবং পিত্তরসের মাধ্যমে অন্ত্রে পাঠায়। সেখানে ভালো ব্যাকটেরিয়া এটিকে ভেঙে স্টারকোবিলিন (মলের স্বাভাবিক বাদামী বর্ণ) এবং ইউরোবিলিনে (মূত্রের হলুদ বর্ণ) পরিণত করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Patterns of Jaundice: Pre-Hepatic, Hepatic, and Post-Hepatic', 'জন্ডিসের ক্লিনিক্যাল ধরন: প্রি-হেপাটিক, হেপাটিক ও পোস্ট-হেপাটিক'),
          paragraphs: [
            l(
              'When bilirubin accumulates in the blood above 2.5 to 3.0 mg/dL, it deposits in tissues containing high elastin fibers like the sclera of the eyes and skin, causing jaundice (icterus). Disruptions in this circuit cause distinctive clinical patterns: severe hemolytic anemia causes indirect jaundice; biliary gallstones block bile flow causing direct jaundice with pale clay-colored stools and dark tea-colored urine; and newborn babies frequently require blue phototherapy until their liver enzymes mature.',
              'রক্তে বিলিরুবিনের মাত্রা ২.৫ থেকে ৩.০ মিগ্রা/ডেসিলিটারের ওপরে উঠে গেলে এটি চোখের সাদা অংশ (স্ক্লেরা) ও ত্বকের ইলাস্টিন তন্তুতে জমে জন্ডিস সৃষ্টি করে। এই সার্কিটের সমস্যাগুলো ভিন্ন ভিন্ন লক্ষণ দেখায়: অতিরিক্ত রক্ত ভাঙলে ইনডাইরেক্ট জন্ডিস হয়; পিত্তনালিতে পাথর আটকে গেলে পিত্ত অন্ত্রে যেতে পারে না বলে মল সাদাটে-মাটির মতো এবং মূত্র গাঢ় চায়ের মতো হয়; আর নবজাতকের লিভার পরিপক্ক না হওয়া পর্যন্ত নীল আলোর ফটোথেরাপি দিয়ে চিকিৎসা করা হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('High-Yield Synthesis Takeaways', 'মূল সারসংক্ষেপ ও শিক্ষণীয় বিষয়'),
          paragraphs: [
            l(
              'Heme biosynthesis requires eight coordinated steps spanning the mitochondria and cytosol, initiated by ALAS and finalized by ferrochelatase. Lead poisoning blocks ALA dehydratase and ferrochelatase. Splenic macrophages convert heme into water-insoluble unconjugated bilirubin, which the liver conjugates via UGT1A1 for biliary secretion and microbial conversion into stool stercobilin and urinary urobilin.',
              'হিম তৈরিতে মাইটোকন্ড্রিয়া ও সাইটোসলে বিস্তৃত ৮টি ধারাবাহিক ধাপ প্রয়োজন যা ALAS দিয়ে শুরু হয় এবং ফেরোচেলাটেজ দিয়ে শেষ হয়। সীসার বিষাক্ততা ALA ডিহাইড্রেটেজ ও ফেরোচেলাটেজ বন্ধ করে দেয়। প্লীহার ম্যাক্রোফেজ হিম ভেঙে অদ্রবণীয় বিলিরুবিন বানায় যা যকৃতের UGT1A1 দিয়ে কনজুগেট হয়ে পিত্তে যায় এবং ব্যাকটেরিয়া দ্বারা স্টারকোবিলিন ও ইউরোবিলিন হিসেবে দেহ থেকে নির্গত হয়।'
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
          heading: l('Introduction: Biochemistry of Tetrapyrroles and Metalloproteins', 'ভূমিকা: টেট্রাপাইরোল ও মেটালোপ্রোটিনের জৈবরসায়ন'),
          paragraphs: [
            l(
              'Heme biosynthesis and porphyrin metabolism encompass the cellular pathways responsible for constructing iron-protoporphyrin IX and degrading it into open-chain tetrapyrrole bile pigments. Heme serves as an indispensable prosthetic group for oxygen transport (hemoglobin, myoglobin), mitochondrial respiration (complexes III and IV cytochromes), oxidative biotransformation (microsomal cytochrome P450 monooxygenases), and peroxide scavenging (catalase, peroxidases). Deficiencies in the biosynthetic pathway cause porphyrias or sideroblastic anemias, whereas disturbances in bilirubin handling precipitate distinctive clinical forms of hyperbilirubinemia.',
              'হিম জৈবসংশ্লেষ এবং পরফাইরিন বিপাক হলো কোষীয় গতিপথ যা আয়রন-প্রোটোপরফাইরিন-৯ তৈরি এবং পরবর্তীতে এটিকে রৈখিক পিত্ত রঞ্জকে ভাঙনের সাথে জড়িত। হিম হলো অক্সিজেন পরিবহন (হিমোগ্লোবিন, মায়োগ্লোবিন), মাইটোকন্ড্রিয়াল শ্বসন (কমপ্লেক্স ৩ ও ৪ সাইটোক্রোম), ড্রাগ ডিটক্সিফিকেশন (সাইটোক্রোম P450) এবং পারঅক্সাইড ধ্বংসের (ক্যাটালেজ) অপরিহার্য প্রস্থেটিক গ্রুপ। এই জৈবসংশ্লেষে এনজাইমের ঘাটতি হলে পরফাইরিয়া বা সিডারোব্লাস্টিক অ্যানিমিয়া দেখা দেয়, আর বিলিরুবিন নিষ্কাশনে ব্যাঘাত ঘটলে বিভিন্ন ধরনের জন্ডিস সৃষ্টি হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Subcellular Partitioning: Mitochondrial Matrix and Cytosolic Catalysis', 'কোষীয় বিভাজন: মাইটোকন্ড্রিয়াল ম্যাট্রিক্স ও সাইটোসলিক অনুঘটন'),
          paragraphs: [
            l(
              'The eight enzymatic steps of heme synthesis are strictly partitioned across subcellular compartments. Step 1 occurs in the mitochondrial matrix: ALA synthase (ALAS) condenses succinyl-CoA and glycine to delta-aminolevulinic acid (ALA) in a PLP-dependent reaction. Steps 2 through 5 take place in the cytosol: porphobilinogen synthase (ALA dehydratase) condenses two ALA into porphobilinogen (PBG); PBG deaminase polymerizes four PBG molecules into linear hydroxymethylbilane; uroporphyrinogen III synthase cyclizes it into asymmetric uroporphyrinogen III; and uroporphyrinogen decarboxylase (UROD) decarboxylates it to coproporphyrinogen III.',
              'হিম সংশ্লেষের ৮টি এনজাইমীয় ধাপ কোষীয় উপ-অঙ্গাণুর মাঝে নিখুঁতভাবে বণ্টিত থাকে। ধাপ ১ মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে ঘটে: ALA সিন্থেজ (ALAS) পিএলপি নির্ভর বিক্রিয়ায় সাকসিনাইল-কোএ এবং গ্লাইসিন যুক্ত করে ডেল্টা-অ্যামিনোলেভুলিনিক অ্যাসিড (ALA) তৈরি করে। ধাপ ২ থেকে ৫ সাইটোসলে সম্পন্ন হয়: পরফোবিলিনোজেন সিন্থেজ দুটি ALA দিয়ে PBG বানায়; PBG ডিমাইনেজ ৪টি PBG দিয়ে রৈখিক হাইড্রোক্সিমিথাইলবিলেইন বানায়; ইউরোপরফাইরিনোজেন-৩ সিন্থেজ বলয়টি বন্ধ করে এবং UROD এনজাইম এটিকে কোপ্রোপরফাইরিনোজেন-৩ এ পরিণত করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Return to Mitochondria and Divergent ALAS1/ALAS2 Regulation', 'মাইটোকন্ড্রিয়ায় প্রত্যাবর্তন ও ALAS1/ALAS2-এর ভিন্নধর্মী নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Steps 6 through 8 return to the mitochondria: coproporphyrinogen oxidase oxidizes coproporphyrinogen III to protoporphyrinogen IX in the intermembrane space; protoporphyrinogen oxidase oxidizes it to planar protoporphyrin IX; and ferrochelatase inserts a ferrous ion (Fe2+) on the matrix side of the inner mitochondrial membrane to complete heme b. Hepatic ALAS1 is strictly feedback-inhibited by free heme and hemin (Fe3+-heme) at transcriptional, translational, and mitochondrial import levels. In contrast, erythroid ALAS2 is induced by erythropoietin and transcriptionally coupled to iron availability through 5-UTR iron-responsive elements (IRE).',
              'ধাপ ৬ থেকে ৮ পুনরায় মাইটোকন্ড্রিয়ায় সম্পন্ন হয়: কোপ্রোপরফাইরিনোজেন অক্সিডেজ প্রোটোপরফাইরিনোজেন-৯ তৈরি করে; প্রোটোপরফাইরিনোজেন অক্সিডেজ এটিকে প্রোটোপরফাইরিন-৯ এ জারিত করে; এবং ফেরোচেলাটেজ ভেতরের পর্দায় Fe2+ যুক্ত করে হিম তৈরি সম্পন্ন করে। যকৃতের ALAS1 মুক্ত হিম ও হেমিং দ্বারা ঋণাত্মকভাবে নিয়ন্ত্রিত হয়। বিপরীতে, অস্থিমজ্জার ALAS2 এরিথ্রোপয়েটিন দ্বারা উদ্দীপিত হয় এবং আয়রনের উপস্থিতির ওপর নির্ভর করে IRE উপাদানের মাধ্যমে অনুবাদ নিয়ন্ত্রিত হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Reticuloendothelial Catabolism and Carbon Monoxide Generation', 'রেটিকুলোএন্ডোথেলিয়াল অপচিতি ও কার্বন মনোক্সাইড নির্গমন'),
          paragraphs: [
            l(
              'Senescent erythrocytes are phagocytosed after ~120 days by reticuloendothelial macrophages in the spleen, liver (Kupffer cells), and bone marrow. Microsomal heme oxygenase utilizes 3 O2 and NADPH to cleave the alpha-methene bridge of heme, yielding green biliverdin IX-alpha, free Fe2+, and carbon monoxide (CO)—the only endogenous reaction generating CO in the human body. Biliverdin reductase rapidly reduces the central methene bridge to produce unconjugated (indirect) bilirubin, a hydrophobic molecule with extensive internal hydrogen bonding that circulates tightly bound to albumin.',
              '১২০ দিন পর পুরানো রক্তকণিকাগুলো প্লীহা, যকৃৎ ও অস্থিমজ্জার ম্যাক্রোফেজ দ্বারা ফ্যাগোসাইটোসিস হয়। মাইক্রোসোমাল হিম অক্সিজিনেজ ৩টি অক্সিজেন ও NADPH ব্যবহার করে হিমের বলয়টি ভেঙে সবুজ বিলিভার্ডিন, Fe2+ এবং কার্বন মনোক্সাইড (CO) তৈরি করে—যা মানবদেহে প্রাকৃতিকভাবে CO উৎপাদনের একমাত্র উৎস। এরপর বিলিভার্ডিন রিডাক্টেজ দ্রুত এটিকে অদ্রবণীয় আনকনজুগেটেড বিলিরুবিনে পরিণত করে, যা অভ্যন্তরীণ হাইড্রোজেন বন্ধনের কারণে চর্বিদ্রাব্য থাকে এবং রক্তে অ্যালবুমিনের সাথে যুক্ত হয়ে ভ্রমণ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Hepatic UGT1A1 Glucuronidation and Enterohepatic Bacterial Fate', 'যকৃতের UGT1A1 কনজুগেশন ও অন্ত্রীয় ব্যাকটেরিয়ার রূপান্তর'),
          paragraphs: [
            l(
              'Hepatocytes take up unconjugated bilirubin via sinusoidal OATP1B1 and OATP1B3 transporters. In the smooth endoplasmic reticulum, UDP-glucuronosyltransferase 1A1 (UGT1A1) sequentially transfers two glucuronic acid moieties from UDP-glucuronate to the propionate side chains, producing water-soluble bilirubin diglucuronide (direct bilirubin). Bilirubin diglucuronide is actively pumped against a steep concentration gradient into bile canaliculi by MRP2 (ABCC2). In the bowel, bacterial beta-glucuronidases and reductases form urobilinogen, which is oxidized to stercobilin in feces and urobilin in urine.',
              'হেপাটোসাইট সাইনুসয়েড থেকে OATP1B1 বাহক দ্বারা বিলিরুবিন গ্রহণ করে। মসৃণ এন্ডোপ্লাজমিক রেটিকুলামে UGT1A1 এনজাইম UDP-গ্লুকুরোনেট থেকে দুটি গ্লুকুরোনিক অ্যাসিড যুক্ত করে পানিতে দ্রবণীয় কনজুগেটেড বিলিরুবিন ডাইগ্লুকুরোনাইড তৈরি করে। এরপর এটি ATP-নির্ভর MRP2 পাম্পের মাধ্যমে পিত্তনালিতে প্রবেশ করে। অন্ত্রে ব্যাকটেরিয়ার বিটা-গ্লুকুরোনিডেজ ও রিডাক্টেজ এনজাইম এটিকে ইউরোবিলিনোজেনে রূপান্তর করে, যা জারিত হয়ে মলে স্টারকোবিলিন এবং মূত্রে ইউরোবিলিন হিসেবে বেরিয়ে যায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis & High-Yield Key Points', 'একাডেমিক পর্যালোচনা ও মূল শিক্ষণীয় বিষয়'),
          paragraphs: [
            l(
              'Heme synthesis partitions between mitochondria (steps 1, 6-8) and cytosol (steps 2-5). ALAS1 is repressed by hemin, whereas ALAS2 is iron-dependent. PBG deaminase deficiency causes Acute Intermittent Porphyria without photosensitivity; UROD deficiency causes Porphyria Cutanea Tarda with blistering skin fragility. Bilirubin conjugation by hepatic UGT1A1 enables biliary excretion, while biliary obstruction causes direct hyperbilirubinemia with clay-colored stools.',
              'হিম সংশ্লেষ মাইটোকন্ড্রিয়া (ধাপ ১, ৬-৮) ও সাইটোসলের (ধাপ ২-৫) মাঝে বিভক্ত। ALAS1 হেমিং দ্বারা বন্ধ হয় কিন্তু ALAS2 আয়রন নির্ভর। PBG ডিমাইনেজ ঘাটতিতে ত্বকের ক্ষতহীন AIP রোগ হয়; UROD ঘাটতিতে ফোস্কাযুক্ত PCT রোগ হয়। যকৃতের UGT1A1 বিলিরুবিন কনজুগেট করে পিত্তে পাঠায়; আর পিত্তনালি বন্ধ হলে কনজুগেটেড জন্ডিস ও মাটির রঙের মতো সাদাটে মল দেখা দেয়।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced & Research', 'উন্নত ও গবেষণা'),
      sections: [
        {
          id: 'integration',
          heading: l('Porphyria Pathophysiology: Pre- vs Post-Ring-Closure Mechanisms', 'পরফাইরিয়ার আণবিক ক্রিয়াকৌশল: বলয় তৈরির পূর্ববর্তী বনাম পরবর্তী পর্যায়'),
          paragraphs: [
            l(
              'The molecular genetics and pathophysiology of porphyrias reflect the precise biochemical accumulation of intermediates upstream of enzymatic lesions. Enzymatic blocks preceding the cyclization of uroporphyrinogen III (such as PBG deaminase in Acute Intermittent Porphyria) lead to the accumulation of non-cyclic precursors delta-aminolevulinic acid (ALA) and porphobilinogen (PBG). ALA shares striking structural homology with gamma-aminobutyric acid (GABA) and glutamate; it acts as a partial agonist at GABA-A receptors, generates neurotoxic reactive oxygen species, and causes central autonomic dysregulation, producing the severe colicky abdominal pain, hypertension, motor neuropathy, and acute delirium characteristic of acute porphyric attacks without cutaneous photosensitivity. Conversely, enzymatic blocks downstream of uroporphyrinogen III closure (such as UROD in Porphyria Cutanea Tarda, or ferrochelatase in Erythropoietic Protoporphyria) cause accumulation of oxidized, resonance-stabilized cyclic porphyrins. When circulating porphyrins deposit in cutaneous capillary beds and absorb Soret band light (~400–410 nm), their excited triplet state transfers energy to molecular oxygen, generating singlet oxygen (1O2) and hydroxyl radicals that disrupt dermal lysosomal membranes, producing the severe cutaneous blistering, solar urticaria, skin friability, and hypertrichosis of cutaneous porphyrias.',
              'পরফাইরিয়ার আণবিক ক্রিয়াকৌশল নির্ভর করে এনজাইম ব্লকেজের ঠিক পূর্বে কোন মধ্যবর্তী যৌগটি জমা হচ্ছে তার ওপর। ইউরোপরফাইরিনোজেন-৩ বলয় তৈরির পূর্ববর্তী এনজাইমে ঘাটতি থাকলে (যেমন AIP-তে PBG ডিমাইনেজ) অপূর্ণ যৌগ ALA ও PBG জমা হয়। ALA দেখতে স্নায়ুর প্রধান নিবৃত্তিকারক নিউরোট্রান্সমিটার GABA-এর মতো হওয়ায় এটি রিসেপ্টরে বিশৃঙ্খলা তৈরি করে তীব্র পেটে ব্যথা, পক্ষাঘাত ও মানসিক বিভ্রম ঘটায়—তবে কোনো ত্বকের সংবেদনশীলতা থাকে না। এর বিপরীতে, বলয় তৈরির পরবর্তী এনজাইমে ঘাটতি হলে (যেমন PCT-তে UROD) পূর্ণাঙ্গ পরফাইরিন বলয় জমা হয়। এই পরফাইরিন অণুগুলো ত্বকের রক্তনালিতে গিয়ে ৪০০ ন্যানোমিটার তরঙ্গদৈর্ঘ্যের সূর্যালোক শোষণ করে অত্যন্ত ক্ষতিকর একক অক্সিজেন (সিঙ্গলেট অক্সিজেন) তৈরি করে ত্বকের লাইসোজোম ধ্বংস করে ফেলে; যার ফলে তীব্র ফোসকা, ত্বকের ভঙ্গুরতা ও রোদে ক্ষত তৈরি হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Comprehensive Laboratory Differential of Hyperbilirubinemia', 'হাইপারবিলিরুবিনেমিয়ার বিশদ ল্যাবরেটরি পার্থক্য নিরূপণ'),
          paragraphs: [
            l(
              'The differential diagnosis of hyperbilirubinemia requires integrating fractional bilirubin measurements (indirect vs direct), hepatic enzymes (AST, ALT, ALP, GGT), and urinary/fecal chromophores. Pre-hepatic jaundice (e.g., severe intravascular or extravascular hemolysis) is characterized by elevated unconjugated bilirubin, normal transaminases and ALP, markedly elevated urinary urobilinogen from massive enterohepatic recycling, and absence of urinary bilirubin because unconjugated bilirubin is tightly albumin-bound and cannot cross the glomerular filtration barrier (acholuric jaundice). Intra-hepatic jaundice features mixed unconjugated and conjugated elevation, with hereditary unconjugated syndromes including Gilbert syndrome (benign ~70% reduction in UGT1A1 transcription due to homozygous A(TA)7TAA promoter insertion, provoked by fasting or illness) and Crigler-Najjar syndrome (type I with complete absence of UGT1A1 causing fatal kernicterus in infancy; type II with severe reduction responding to phenobarbital-mediated enzyme induction). Post-hepatic or cholestatic jaundice (e.g., choledocholithiasis, adenocarcinoma of the pancreatic head) produces profound conjugated hyperbilirubinemia, marked elevation of alkaline phosphatase and GGT, complete absence of stool stercobilin (clay-colored, acholic stools), absence of urinary urobilinogen, and excretion of water-soluble conjugated bilirubin in urine, producing dark tea-colored urine with characteristic yellow surface foam.',
              'জন্ডিসের নির্ভুল ক্লিনিক্যাল শ্রেণীবিভাগ নির্ভর করে রক্তে আনকনজুগেটেড বনাম কনজুগেটেড বিলিরুবিনের অনুপাত, লিভার এনজাইম (AST, ALT, ALP, GGT) এবং মল-মূত্রের রঞ্জকের সমন্বিত বিশ্লেষণের ওপর। প্রি-হেপাটিক বা হেমোলাইটিক জন্ডিসে আনকনজুগেটেড বিলিরুবিন বৃদ্ধি পায়, লিভার এনজাইম স্বাভাবিক থাকে, প্রস্রাবে প্রচুর ইউরোবিলিনোজেন থাকে কিন্তু প্রস্রাবে কোনো বিলিরুবিন পাওয়া যায় না (কারণ অ্যালবুমিনে যুক্ত বিলিরুবিন কিডনি দিয়ে ফিল্টার হতে পারে না)। ইন্ট্রা-হেপাটিক জন্ডিসে উভয় ধরনের বিলিরুবিন বাড়ে; যার মধ্যে গিলবার্ট সিন্ড্রোম সবচেয়ে সাধারণ (UGT1A1 জিন প্রোমোটারে ত্রুটির কারণে ৩০% এনজাইম থাকে যা উপবাসে সামান্য বাড়ে) এবং ক্রিগলার-নাজার সিন্ড্রোম টাইপ-১ এ এনজাইম একেবারেই না থাকায় মস্তিষ্কে কার্নিকটেরাস হয়ে মৃত্যু ঘটে। পক্ষান্তরে পোস্ট-হেপাটিক বা অবস্ট্রাকটিভ জন্ডিসে (পিত্তপাথর বা অগ্ন্যাশয়ের ক্যান্সার) কনজুগেটেড বিলিরুবিন ও ক্ষারীয় ফসফেটেজ (ALP) মারাত্মক বাড়ে, অন্ত্রে পিত্ত না যাওয়ায় মল ফ্যাকাশে মাটির মতো হয়, আর পানিতে দ্রবণীয় বিলিরুবিন কিডনি দিয়ে বের হয়ে প্রস্রাবকে গাঢ় চায়ের মতো হলুদ ফেনাযুক্ত করে তোলে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A metabolic map detailing the 8-step heme biosynthetic pathway initiated by mitochondrial ALAS, through cytosolic porphobilinogen and uroporphyrinogen formation, returning to mitochondria for ferrochelatase iron insertion, followed by splenic macrophage heme oxygenase degradation to bilirubin and hepatic UGT1A1 conjugation.',
      'মাইটোকন্ড্রিয়াল ALAS দিয়ে শুরু হওয়া ৮-ধাপের হিম জৈবসংশ্লেষ, সাইটোসলে পরফোবিলিনোজেন গঠন, মাইটোকন্ড্রিয়ায় ফেরোচেলাটেজ দ্বারা আয়রন সংযোজন এবং পরবর্তীতে প্লীহার ম্যাক্রোফেজে হিম অক্সিজিনেজ দ্বারা বিলিরুবিন ভাঙন ও যকৃতের UGT1A1 কনজুগেশনের পূর্ণাঙ্গ মানচিত্র।'
    ),
    steps: [
      l('ALAS condenses succinyl-CoA and glycine in mitochondria to start heme synthesis.', 'ALAS মাইটোকন্ড্রিয়ায় সাকসিনাইল-কোএ ও গ্লাইসিন যুক্ত করে হিম সংশ্লেষ শুরু করে।'),
      l('Porphobilinogen synthase condenses two ALA into PBG; inhibited by lead poisoning.', 'পরফোবিলিনোজেন সিন্থেজ দুটি ALA যুক্ত করে PBG বানায়; সীসা একে ধ্বংস করে।'),
      l('PBG deaminase forms hydroxymethylbilane; deficiency causes acute porphyria (AIP).', 'PBG ডিমাইনেজ হাইড্রোক্সিমিথাইলবিলেইন বানায়; এর ঘাটতিতে AIP রোগ দেখা দেয়।'),
      l('Ferrochelatase inserts iron (Fe2+) into protoporphyrin IX inside mitochondria to form heme.', 'ফেরোচেলাটেজ মাইটোকন্ড্রিয়ায় প্রোটোপরফাইরিন-৯-এ আয়রন যুক্ত করে হিম বানায়।'),
      l('Heme oxygenase splits senescent heme into iron, CO, and bilirubin in splenic macrophages.', 'হিম অক্সিজিনেজ প্লীহার ম্যাক্রোফেজে হিম ভেঙে আয়রন, CO ও বিলিরুবিন উৎপন্ন করে।'),
      l('Hepatic UGT1A1 attaches glucuronic acid to bilirubin for safe biliary excretion.', 'যকৃতের UGT1A1 বিলিরুবিনে গ্লুকুরোনিক অ্যাসিড যুক্ত করে পিত্তে বের করে দেয়।'),
    ],
  },
  assessment: {
    question: l(
      'A 29-year-old woman is admitted to the emergency department with severe, colicky abdominal pain, nausea, and visual hallucinations following a 3-day fast to lose weight. Her abdomen is soft and non-tender on palpation. Neurological examination reveals bilateral wrist drop and absent ankle reflexes. A freshly voided urine sample is amber-yellow on collection, but turns dark port-wine red after standing exposed to sunlight on the laboratory bench. Which enzymatic deficiency is the underlying cause of this presentation?',
      '২৯ বছর বয়সী এক তরুণী ওজন কমানোর জন্য ৩ দিন না খেয়ে থাকার পর তীব্র পেটে ব্যথা, বমি ও হ্যালুসিনেশন নিয়ে হাসপাতালে ভর্তি হলেন। পেটে চাপ দিলে কোনো ব্যথা বা শক্ত ভাব পাওয়া গেল না। স্নায়ু পরীক্ষায় দুই হাতের কব্জি ঝুলে যাওয়া (রিস্ট ড্রপ) দেখা গেল। ল্যাবরেটরিতে তার প্রস্রাবের নমুনাটি আলোতে কয়েক ঘণ্টা রেখে দেওয়ার পর গাঢ় চেরি রঙের মতো লালচে-কালো হয়ে গেল। কোন এনজাইমের ঘাটতি এই লক্ষণের জন্য দায়ী?'
    ),
    options: [
      l(
        'Porphobilinogen deaminase (hydroxymethylbilane synthase) deficiency (Acute Intermittent Porphyria).',
        'পরফোবিলিনোজেন ডিমাইনেজ (হাইড্রোক্সিমিথাইলবিলেইন সিন্থেজ) ঘাটতি (একিউট ইন্টারমিটেন্ট পরফাইরিয়া)।'
      ),
      l(
        'Uroporphyrinogen decarboxylase (UROD) deficiency (Porphyria Cutanea Tarda).',
        'ইউরোপরফাইরিনোজেন ডিকার্বক্সিলেজ (UROD) ঘাটতি (পরফাইরিয়া কিউটেনিয়া টারডা)।'
      ),
      l(
        'ALA dehydratase (porphobilinogen synthase) deficiency with zinc displacement.',
        'ALA ডিহাইড্রেটেজ (পরফোবিলিনোজেন সিন্থেজ) ঘাটতি ও জিংক প্রতিস্থাপন।'
      ),
      l(
        'UDP-glucuronosyltransferase 1A1 (UGT1A1) complete deficiency (Crigler-Najjar type I).',
        'ইউডিপি-গ্লুকুরোনোসাইলেট্রান্সফারেজ ১এ১ (UGT1A1) এর সম্পূর্ণ ঘাটতি (ক্রিগলার-নাজার টাইপ-১)।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'The clinical tetrad of severe neurovisceral abdominal pain with a non-tender abdomen, peripheral motor neuropathy (wrist drop), neuropsychiatric symptoms (hallucinations), and urine turning dark port-wine on standing exposed to light is diagnostic of Acute Intermittent Porphyria (AIP). AIP is caused by an autosomal dominant deficiency of PBG deaminase. Fasting downregulates PGC-1alpha/glucose repression, markedly inducing hepatic ALAS1. In the presence of a PBG deaminase bottleneck, neurotoxic ALA and PBG accumulate; on standing in air and light, PBG polymerizes non-enzymatically into dark porphobilin and porphyrins.',
      'তীব্র পেটে ব্যথা অথচ পেটে কোনো বাহ্যিক স্পর্শকাতরতা না থাকা, পেরিফেরাল নার্ভের পক্ষাঘাত (রিস্ট ড্রপ), মানসিক বিভ্রম এবং আলোতে প্রস্রাব গাঢ় চেরি রঙের লালচে-কালো হয়ে যাওয়া একিউট ইন্টারমিটেন্ট পরফাইরিয়ার নিশ্চিত লক্ষণ। এটি PBG ডিমাইনেজ এনজাইমের ঘাটতির কারণে ঘটে। উপবাসের কারণে যকৃতের ALAS1 এনজাইম অতিরিক্ত সক্রিয় হয়ে বিষাক্ত ALA ও PBG জমিয়ে দেয়, যা আলোতে জারিত হয়ে গাঢ় পরফাইরিনে পরিণত হয়।'
    ),
  },
}
