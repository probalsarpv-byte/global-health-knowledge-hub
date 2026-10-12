import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const organRefs = [
  {
    id: 'lehninger-biochem-8e-ch23',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 23: Hormonal Regulation and Integration of Mammalian Metabolism',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch27',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 27: Integration of Metabolism & the Provision of Tissue Fuels",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch27',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 27: The Integration of Metabolism',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'marks-medbiochem-6e-ch25',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 25: Fuel Metabolism in Starvation, Diabetes, and Exercise",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

const organSpecialization3DData: Organ3DExplorerContent = {
  title: l('3D Multi-Organ Metabolic Specialization & Inter-Organ Fuel Loops', '৩ডি বহু-অঙ্গীয় বিপাকীয় বিশেষায়ন ও আন্তঃ-অঙ্গীয় জ্বালানি চক্র'),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and explore coordinate space to trace organ-specific fuel preferences and metabolic loops connecting the brain, heart, liver, kidneys, and skeletal musculature.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে মস্তিষ্ক, হৃৎপিণ্ড, যকৃৎ, বৃক্ক এবং কঙ্কালপেশি নিজ নিজ জ্বালানি চাহিদা পূরণ করে এবং আন্তঃ-অঙ্গীয় চক্রের মাধ্যমে দেহের সামগ্রিক ভারসাম্য রক্ষা করে।'
  ),
  description: l(
    'Metabolic homeostasis relies on division of labor: the liver acts as the altruistic processing hub, the brain consumes glucose and ketones, the heart oxidizes fatty acids continuously, skeletal muscle switches between sprint and endurance modes, and the kidneys buffer systemic acid.',
    'বিপাকীয় ভারসাম্য শ্রমবিভাজনের ওপর প্রতিষ্ঠিত: যকৃৎ নিঃস্বার্থ প্রক্রিয়াকরণ কেন্দ্র হিসেবে কাজ করে, মস্তিষ্ক গ্লুকোজ ও কিটোন গ্রহণ করে, হৃৎপিণ্ড অবিরাম ফ্যাটি অ্যাসিড পোড়ায়, কঙ্কালপেশি কাজভেদে জ্বালানি বদলায় এবং বৃক্ক অম্ল-ক্ষার ভারসাম্য রক্ষা করে।'
  ),
  organs: [
    {
      id: 'organ-brain-spec',
      name: l('Brain (High Oxygen Demand & Obligate Fuel Consumer)', 'মস্তিষ্ক (উচ্চ অক্সিজেন চাহিদা ও আবশ্যকীয় জ্বালানি গ্রাহক)'),
      latinName: 'Cerebrum',
      system: l('Central Nervous System', 'কেন্দ্রীয় স্নায়ুতন্ত্র'),
      cavity: l('Cranial Cavity', 'করোটিকা গহ্বর'),
      position3D: { x: 0, y: 48, z: 0 },
      color: '#9333ea',
      highlightColor: '#c084fc',
      shapeType: 'brain',
      description: l(
        'Weighs only ~2% of total body mass yet consumes ~20% of resting oxygen and 120g of glucose daily; cannot oxidize albumin-bound fatty acids due to the blood-brain barrier, switching to ketones during prolonged starvation.',
        'দেহের মোট ওজনের মাত্র ২% হলেও বিশ্রামে থাকা অবস্থার ২০% অক্সিজেন এবং দৈনিক প্রায় ১২০ গ্রাম গ্লুকোজ খরচ করে; রক্ত-মস্তিষ্ক বাধার কারণে ফ্যাটি অ্যাসিড ব্যবহার করতে পারে না, তবে অনাহারে কিটোন বডিতে অভ্যস্ত হয়।'
      ),
      spatialRelations: l(
        'Protected within the cranium; insulated from circulating fluctuations by capillary tight junctions (blood-brain barrier) expressing constitutive high-affinity GLUT1 and neuronal GLUT3 transporters.',
        'করোটিকার ভেতরে সুরক্ষিত; কৈশিক রক্তনালির টাইট জাংশন দিয়ে তৈরি রক্ত-মস্তিষ্ক বাধার মাধ্যমে রক্ত সংবহন থেকে আলাদা থাকে এবং এতে উচ্চ সংবেদনশীল GLUT1 ও GLUT3 গ্লুকোজ বাহক থাকে।'
      ),
      physiology: l(
        'Maintains Na+/K+-ATPase gradients along axons to propagate electrical action potentials; expresses high thiophorase (SCOT) activity to convert acetoacetate and beta-hydroxybutyrate into acetyl-CoA for TCA cycle ATP synthesis.',
        'স্নায়ু সংকেত পরিবহনের জন্য Na+/K+-ATPase পাম্প সচল রাখে; এতে প্রচুর থায়োফোরাজ (SCOT) এনজাইম থাকে যা কিটোন বডিকে অ্যাসিটাইল-কোএ-তে রূপান্তর করে শক্তি উৎপাদন নিশ্চিত করে।'
      ),
      nutritionConnection: l(
        'Strict carbohydrate restriction elevates circulating beta-hydroxybutyrate, which readily crosses the blood-brain barrier via MCT1 to sustain cerebral energy without cognitive impairment.',
        'শর্করা খাদ্য বাদ দিলে রক্তে বিটা-হাইড্রোক্সিবিউটাইরেট বৃদ্ধি পায়, যা MCT1 বাহক দিয়ে রক্ত-মস্তিষ্ক বাধা পেরিয়ে মস্তিষ্কে শক্তি যোগায় এবং বুদ্ধিবৃত্তিক কার্যকারিতা অক্ষুণ্ণ রাখে।'
      ),
      clinicalSignificance: l(
        'Acute hypoglycemia below 40 mg/dL produces neuroglycopenia, confusion, seizures, and irreversible neuronal death; the brain possesses no significant endogenous glycogen or lipid reserves.',
        'রক্তে গ্লুকোজ ৪০ মিগ্রা/ডেসিলিটারের নিচে নামলে বিভ্রান্তি, খিঁচুনি এবং মস্তিষ্কের কোষের স্থায়ী মৃত্যু ঘটে; কারণ মস্তিষ্কে নিজস্ব কোনো গ্লাইকোজেন বা চর্বির সঞ্চয় থাকে না।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-heart-spec',
      name: l('Heart (Continuously Aerobic & Fatty Acid Specialist)', 'হৃৎপিণ্ড (অবিরাম বায়বীয় ও ফ্যাটি অ্যাসিড বিশেষজ্ঞ)'),
      latinName: 'Cor',
      system: l('Cardiovascular System', 'সংবহন তন্ত্র'),
      cavity: l('Middle Mediastinum (Thoracic Cavity)', 'মধ্য মিডিয়াস্টিনাম (বক্ষ গহ্বর)'),
      position3D: { x: -8, y: 152, z: 8 },
      color: '#e11d48',
      highlightColor: '#fb7185',
      shapeType: 'heart',
      description: l(
        'Performs non-stop mechanical pumping, deriving 60–70% of resting ATP from long-chain fatty acid beta-oxidation and 20–25% from glucose/lactate; possesses dense mitochondria occupying 40% of cardiomyocyte volume.',
        'বিশ্রামহীন পাম্পিংয়ের মাধ্যমে কাজ করে এবং স্বাভাবিক অবস্থায় ৬০-৭০% শক্তি ফ্যাটি অ্যাসিড জারণ এবং ২০-২৫% শক্তি গ্লুকোজ ও ল্যাকটেট থেকে পায়; এর কোষের আয়তনের ৪০% জুড়ে থাকে মাইটোকন্ড্রিয়া।'
      ),
      spatialRelations: l(
        'Located between the pleural cavities within the pericardial sac; perfused by right and left coronary arteries primarily during ventricular diastole, extracting up to 75% of arterial oxygen at rest.',
        'পেরিকার্ডিয়াল থলির ভেতর দুই ফুসফুসের মাঝে অবস্থিত; ডায়াস্টোল চলাকালীন করোনারি ধমনি দিয়ে রক্ত পায় এবং স্বাভাবিক অবস্থাতেই রক্তের প্রায় ৭৫% অক্সিজেন শোষণ করে নেয়।'
      ),
      physiology: l(
        'Lacks significant glycogen or lipid stores and cannot tolerate anaerobic debt; during heavy exertion, rapidly extracts circulating lactate produced by skeletal muscle, converting it to pyruvate via LDH1.',
        'এতে কোনো গ্লাইকোজেন বা চর্বির ভাণ্ডার নেই এবং এটি অবায়বীয় ঋণ সহ্য করতে পারে না; ভারী ব্যায়ামের সময় এটি কঙ্কালপেশি থেকে নির্গত ল্যাকটেট গ্রহণ করে LDH1 দিয়ে পাইরুভেটে পরিণত করে শক্তি তৈরি করে।'
      ),
      nutritionConnection: l(
        'Carnitine availability is essential for myocardial long-chain fatty acid transport via CPT-1 and CPT-2; systemic carnitine deficiency causes progressive dilated cardiomyopathy and lipid storage.',
        'কার্নিটিন হৃৎপিণ্ডের CPT-1 ও CPT-2 দিয়ে ফ্যাটি অ্যাসিড পরিবহনের জন্য অত্যাবশ্যক; কার্নিটিনের অভাব হলে মায়োকার্ডিয়ামে চর্বি জমে হৃৎপিণ্ড প্রসারিত হয়ে কার্ডিওমায়োপ্যাথি তৈরি হয়।'
      ),
      clinicalSignificance: l(
        'Coronary occlusion halts oxidative phosphorylation within 8 seconds; anaerobic glycolysis rapidly exhausts cellular glycogen, accumulating protons and lactate, producing lethal ischemic arrhythmias.',
        'করোনারি ধমনি বন্ধ হলে মাত্র ৮ সেকেন্ডের মধ্যে বায়বীয় শক্তি উৎপাদন বন্ধ হয়ে যায়; অবায়বীয় গ্লাইকোলাইসিসে অ্যাসিড ও ল্যাকটেট জমে মারাত্মক ইস্কেমিক অ্যারিথমিয়া ও হার্ট অ্যাটাক ঘটে।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-liver-spec',
      name: l('Liver (Altruistic Processing Hub Lacking Thiophorase)', 'যকৃৎ (থায়োফোরাজ-বিহীন নিঃস্বার্থ বিপাকীয় কেন্দ্র)'),
      latinName: 'Hepar',
      system: l('Digestive / Metabolic System', 'পরিপাক ও বিপাকীয় তন্ত্র'),
      cavity: l('Right Upper Abdominal Quadrant', 'উদর গহ্বরের ডান ঊর্ধ্বাংশ'),
      position3D: { x: 28, y: 218, z: 12 },
      color: '#b45309',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'The master metabolic hub: expresses high-capacity glucokinase and glucose-6-phosphatase to regulate systemic blood glucose, manufactures ketone bodies, and performs the complete urea cycle.',
        'দেহের প্রধান বিপাকীয় কেন্দ্র: রক্তের গ্লুকোজ নিয়ন্ত্রণে গ্লুকোকাইনেজ ও গ্লুকোজ-৬-ফসফেটেজ ব্যবহার করে, কিটোন বডি তৈরি করে এবং একমাত্র অঙ্গ হিসেবে পূর্ণাঙ্গ ইউরিয়া চক্র সম্পন্ন করে।'
      ),
      spatialRelations: l(
        'Interposed between the splanchnic circulation and systemic circulation; receives 75% of its blood from the nutrient-rich portal vein and 25% from the oxygenated hepatic artery.',
        'পরিপাকতন্ত্র ও সাধারণ রক্ত সংবহনের মাঝে অবস্থিত; এর ৭৫% রক্ত আসে পুষ্টিসমৃদ্ধ পোর্টাল শিরা থেকে এবং ২৫% রক্ত আসে অক্সিজেনসমৃদ্ধ হেপাটিক ধমনি থেকে।'
      ),
      physiology: l(
        'Lacks beta-ketoacyl-CoA transferase (succinyl-CoA:3-ketoacid CoA transferase / thiophorase / SCOT), making it biochemically impossible for the liver to consume the ketone bodies it manufactures for the brain.',
        'এতে থায়োফোরাজ (SCOT) এনজাইম থাকে না, যার কারণে যকৃৎ নিজে তৈরি করা কিটোন বডি নিজে কখনো খরচ করতে পারে না এবং তৈরি করা সমস্ত কিটোন নিঃস্বার্থভাবে মস্তিষ্ক ও পেশিতে পাঠিয়ে দেয়।'
      ),
      nutritionConnection: l(
        'Choline and essential amino acid deficiency impairs hepatic very-low-density lipoprotein (VLDL) assembly, trapping triacylglycerols in hepatocytes and causing non-alcoholic fatty liver disease (NAFLD).',
        'কোলিন বা প্রয়োজনীয় অ্যামিনো অ্যাসিডের ঘাটতি থাকলে VLDL তৈরি বাধাগ্রস্ত হয়, ফলে যকৃতে চর্বি আটকে গিয়ে নন-অ্যালকোহলিক ফ্যাটি লিভার ডিজিজ (NAFLD) দেখা দেয়।'
      ),
      clinicalSignificance: l(
        'Hepatic failure abolishes gluconeogenesis and the urea cycle, causing profound hypoglycemia, hyperammonemia, cerebral edema, asterixis, and fatal hepatic encephalopathy.',
        'যকৃৎ অকেজো হলে গ্লুকোনিওজেনেসিস ও ইউরিয়া চক্র বন্ধ হয়ে মারাত্মক হাইপোগ্লাইসেমিয়া, অ্যামোনিয়া বৃদ্ধি এবং হেপাটিক এনসেফালোপ্যাথি হয়ে রোগী কোমায় চলে যায়।'
      ),
      sectionId: 'introduction',
    },
    {
      id: 'organ-muscle-spec',
      name: l('Skeletal Muscle (Contractile Mass, Fiber Types & Creatine Buffer)', 'কঙ্কালপেশি (সংকোচনশীল ভর, ফাইবার ধরন ও ক্রিয়েটিন বাফার)'),
      latinName: 'Musculus skeletalis',
      system: l('Musculoskeletal System', 'পেশিতন্ত্র'),
      cavity: l('Somatic Framework', 'দেহকাঠামো'),
      position3D: { x: 0, y: 130, z: -8 },
      color: '#dc2626',
      highlightColor: '#f87171',
      shapeType: 'skeleton',
      description: l(
        'Constitutes ~40% of adult body mass; divided into Type I slow-twitch oxidative fibers (endurance) and Type II fast-twitch glycolytic fibers (sprint); buffers immediate ATP via creatine kinase.',
        'প্রাপ্তবয়স্কদের মোট ওজনের প্রায় ৪০% পেশি; এটি টাইপ-১ ধীর-বায়বীয় ফাইবার এবং টাইপ-২ দ্রুত-গ্লাইকোলাইটিক ফাইবারে বিভক্ত; ক্রিয়েটিন কাইনেজ দিয়ে তাৎক্ষণিক এটিপি ধরে রাখে।'
      ),
      spatialRelations: l(
        'Attached to the skeleton by tendons, generating locomotion; contains intramuscular glycogen (~400g) that cannot be exported to blood because muscle lacks glucose-6-phosphatase.',
        'কণ্ডরা বা টেন্ডনের মাধ্যমে অস্থির সাথে যুক্ত থাকে; এতে প্রায় ৪০০ গ্রাম গ্লাইকোজেন থাকে যা পেশিতে গ্লুকোজ-৬-ফসফেটেজ না থাকায় কেবল পেশির নিজস্ব কাজের জন্যই সংরক্ষিত থাকে।'
      ),
      physiology: l(
        'Executes the Cori cycle by exporting lactate to the liver during anaerobic glycolysis; executes the Cahill cycle by exporting alanine carrying amino nitrogen and carbon skeletons during fasting.',
        'তীব্র পরিশ্রমে ল্যাকটেট যকৃতে পাঠিয়ে কোরি চক্র সম্পন্ন করে; এবং উপবাসের সময় নাইট্রোজেন ও কার্বন কঙ্কাল অ্যালানিন হিসেবে যকৃতে পাঠিয়ে কাহিল (গ্লুকোজ-অ্যালানিন) চক্র চালায়।'
      ),
      nutritionConnection: l(
        'Creatine monohydrate supplementation expands intramyocellular phosphocreatine reserves by 15–25%, significantly delaying fatigue during repeated bursts of maximal anaerobic power output.',
        'ক্রিয়েটিন সাপ্লিমেন্ট পেশিতে ফসফোক্রিয়েটিনের ভাণ্ডার ১৫-২৫% বৃদ্ধি করে, যা উচ্চমাত্রার সংক্ষিপ্ত শারীরিক ব্যায়ামের সময় পেশির ক্লান্তি দূর করতে সাহায্য করে।'
      ),
      clinicalSignificance: l(
        'McArdle disease (Glycogen Storage Disease Type V) results from skeletal muscle glycogen phosphorylase deficiency, causing severe painful exercise cramps, fatigue, and myoglobinuria.',
        'ম্যাকআর্ডল ডিজিজে পেশির গ্লাইকোজেন ফসফোরাইলেজ এনজাইমের ঘাটতির কারণে ব্যায়ামের সময় তীব্র পেশি ব্যথা, ক্র্যাম্প এবং প্রস্রাবে মায়োগ্লোবিন নির্গমন ঘটে।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-kidney-spec',
      name: l('Kidneys (Cortex Gluconeogenesis & Medullary Glycolysis)', 'বৃক্ক (কর্টেক্স গ্লুকোনিওজেনেসিস ও মেডুলারি গ্লাইকোলাইসিস)'),
      latinName: 'Renes',
      system: l('Urinary & Metabolic System', 'রেচন ও বিপাকীয় তন্ত্র'),
      cavity: l('Retroperitoneal Space (Flanks)', 'রেট্রোপেরিটোনিয়াল স্থান (কোমর অঞ্চল)'),
      position3D: { x: 0, y: 260, z: -10 },
      color: '#0284c7',
      highlightColor: '#38bdf8',
      shapeType: 'kidneys',
      description: l(
        'Features metabolic compartmentalization: the oxygen-rich renal cortex performs up to 50% of systemic gluconeogenesis in prolonged starvation, while the hypoxic renal medulla relies on anaerobic glycolysis.',
        'বিপাকীয় দ্বৈত চরিত্র সম্পন্ন: অক্সিজেনসমৃদ্ধ রেনাল কর্টেক্স দীর্ঘ উপবাসে সারা দেহের প্রায় ৫০% গ্লুকোনিওজেনেসিস সম্পন্ন করে, আর অক্সিজেনহীন রেনাল মেডুলা সম্পূর্ণ অবায়বীয় গ্লাইকোলাইসিসে চলে।'
      ),
      spatialRelations: l(
        'Located in the retroperitoneum, filtering 180 liters of plasma daily; renal tubular cells consume large amounts of ATP via basolateral Na+/K+-ATPases to drive tubular solute reabsorption.',
        'উদর গহ্বরের পেছনে অবস্থিত এবং দৈনিক ১৮০ লিটার রক্ত ফিল্টার করে; এর নালিকাগুলো প্রস্রাব থেকে প্রয়োজনীয় পুষ্টি ও লবণ শোষণ করতে প্রচুর এটিপি খরচ করে।'
      ),
      physiology: l(
        'Renal gluconeogenesis utilizes glutamine, deaminating it via renal glutaminase and glutamate dehydrogenase to form alpha-ketoglutarate, releasing NH3 to buffer urinary H+ into NH4+ for net acid excretion.',
        'বৃক্কের গ্লুকোনিওজেনেসিসে গ্লুটামিন ব্যবহৃত হয়; গ্লুটামিনেজ এনজাইম দিয়ে অ্যামোনিয়া মুক্ত করে যা মূত্রের অ্যাসিডকে বাফার করে NH4+ হিসেবে বের করে দিয়ে রক্তের pH ঠিক রাখে।'
      ),
      nutritionConnection: l(
        'High-protein diets increase glomerular hyperfiltration and renal nitrogen excretion load, requiring adequate hydration to maintain normal glomerular capillary hemodynamics.',
        'অতিরিক্ত প্রোটিনযুক্ত খাবার খেলে বৃক্কে ফিল্ট্রেশনের চাপ বাড়ে এবং নাইট্রোজেন নিষ্কাশন বহুগুণ বৃদ্ধি পায়, যার জন্য পর্যাপ্ত পানি পান করা অত্যন্ত জরুরি।'
      ),
      clinicalSignificance: l(
        'In diabetic ketoacidosis and chronic starvation, renal cortex gluconeogenesis accelerates dramatically, becoming a vital co-contributor alongside the liver to sustain circulating blood glucose.',
        'ডায়াবেটিক কিটোঅ্যাসিডোসিস এবং দীর্ঘ অনাহারে বৃক্কের কর্টেক্স অত্যন্ত দ্রুত নতুন গ্লুকোজ তৈরি করে রক্তের গ্লুকোজ ও শক্তি ধরে রাখতে যকৃতের সমকক্ষ ভূমিকা পালন করে।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism15OrganSpecializationLesson: LessonTopic = {
  id: 'topic.metabolism.organ-metabolic-specialization',
  slug: 'organ-metabolic-specialization',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('15 · Organ-Specific Metabolic Specialization', '১৫ · অঙ্গভিত্তিক বিপাকীয় বিশেষায়ন'),
  summary: l(
    'Functional fuel specialization across human tissues: hepatic metabolic hub (glucokinase vs G6Pase, complete urea cycle, lack of thiophorase), brain obligate glucose and starvation keto-adaptation (GLUT1/GLUT3, MCT1), cardiac fatty acid beta-oxidation and dense mitochondrial architecture, skeletal muscle fiber types (Type I oxidative vs Type II glycolytic, phosphocreatine sprint buffer, Cori and Cahill inter-organ cycles), adipose tissue lipid storage (ATGL/HSL, lack of glycerol kinase) and brown adipose UCP-1 thermogenesis, and renal cortex gluconeogenesis coupled to ammoniagenesis.',
    'মানবদেহের বিভিন্ন অঙ্গের সুনির্দিষ্ট জ্বালানি বিশেষায়ন: যকৃতের কেন্দ্রীয় ভূমিকা (গ্লুকোকাইনেজ বনাম G6Pase, পূর্ণাঙ্গ ইউরিয়া চক্র, থায়োফোরাজের অনুপস্থিতি), মস্তিষ্কের গ্লুকোজ ও কিটোন নির্ভরতা (GLUT1/GLUT3, MCT1), হৃৎপিণ্ডের অবিরাম ফ্যাটি অ্যাসিড জারণ ও ঘন মাইটোকন্ড্রিয়া, কঙ্কালপেশির ফাইবার রূপভেদ (টাইপ-১ বনাম টাইপ-২, ক্রিয়েটিন বাফার, কোরি ও কাহিল চক্র), চর্বিকলার লিপিড সঞ্চয় (ATGL/HSL, গ্লিসারল কাইনেজের অভাব) ও বাদামী চর্বির UCP-1 তাপ উৎপাদন, এবং বৃক্কের কর্টেক্সে গ্লুকোনিওজেনেসিস ও অ্যাসিড-ক্ষার বাফারিং।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Contrast the enzymatic machinery and fuel preferences of the liver, brain, myocardium, skeletal muscle, adipose tissue, and kidneys across the fed, fasted, and exercised states.',
      'ভুক্ত অবস্থা, উপবাস এবং শারীরিক পরিশ্রমের সময় যকৃৎ, মস্তিষ্ক, হৃৎপেশি, কঙ্কালপেশি, চর্বিকলা এবং বৃক্কের এনজাইম ও জ্বালানি পছন্দের সুনির্দিষ্ট পার্থক্য নিরূপণ করা।',
    ),
    l(
      'Explain why the liver cannot utilize the ketone bodies it synthesizes, identifying the absent mitochondrial enzyme (beta-ketoacyl-CoA transferase / thiophorase) and its physiological significance.',
      'যকৃৎ কেন নিজে তৈরি করা কিটোন বডি নিজে শক্তি উৎপাদনের জন্য ব্যবহার করতে পারে না তা অনুপস্থিত মাইটোকন্ড্রিয়াল এনজাইম (থায়োফোরাজ / SCOT) শনাক্তকরণের মাধ্যমে ব্যাখ্যা করা।',
    ),
    l(
      'Map the bidirectional inter-organ metabolic loops that coordinate muscle and liver: the Cori cycle (lactate-glucose loop) and the Cahill cycle (glucose-alanine-nitrogen loop).',
      'পেশি ও যকৃতের মাঝে সমন্বয় সাধনকারী দ্বিমুখী আন্তঃ-অঙ্গীয় বিপাকীয় চক্রসমূহ চিত্রিত করা: কোরি চক্র (ল্যাকটেট-গ্লুকোজ চক্র) এবং কাহিল চক্র (গ্লুকোজ-অ্যালানিন-নাইট্রোজেন চক্র)।',
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.fed-fasted-starvation-states', 'topic.metabolism.endocrine-fuel-regulation'],
  relatedTopicIds: ['topic.metabolism.glycogen-gluconeogenesis', 'topic.metabolism.fatty-acid-oxidation-ketones'],
  references: organRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch23', 'harpers-biochem-32e-ch27'],
    structure: ['harpers-biochem-32e-ch27', 'berg-biochem-9e-ch27'],
    mechanism: ['berg-biochem-9e-ch27', 'marks-medbiochem-6e-ch25'],
    integration: ['lehninger-biochem-8e-ch23', 'marks-medbiochem-6e-ch25'],
    practice: ['harpers-biochem-32e-ch27', 'marks-medbiochem-6e-ch25'],
    takeaways: ['lehninger-biochem-8e-ch23', 'harpers-biochem-32e-ch27'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Metabolic Division of Labor', '১. বিপাকীয় শ্রমবিভাজন ও অঙ্গীয় দায়িত্ব'), sectionId: 'introduction' },
      { id: 'sec-liver-brain', label: l('2. The Liver Processing Hub & Brain Glucose Reliance', '২. যকৃৎ প্রক্রিয়াকরণ কেন্দ্র ও মস্তিষ্কের গ্লুকোজ নির্ভরতা'), sectionId: 'structure' },
      { id: 'sec-heart', label: l('3. Myocardial Aerobic Reliance & Fatty Acid Oxidation', '৩. মায়োকার্ডিয়ামের বায়বীয় নির্ভরতা ও ফ্যাটি অ্যাসিড জারণ'), sectionId: 'mechanism' },
      { id: 'sec-muscle', label: l('4. Skeletal Muscle Fiber Dynamics, Cori & Cahill Loops', '৪. কঙ্কালপেশির ফাইবার গতিবিদ্যা, কোরি ও কাহিল চক্র'), sectionId: 'integration' },
      { id: 'sec-adipose-kidney', label: l('5. Adipose Thermogenesis & Renal Acid-Base Partitioning', '৫. চর্বিকলার তাপ উৎপাদন ও বৃক্কের অম্ল-ক্ষার সমন্বয়'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Review & Synthesis Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা ও মূল শিক্ষা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Thiophorase (SCOT / OXCT1)', 'থায়োফোরাজ (SCOT / OXCT1)'),
        definition: l(
          'Mitochondrial enzyme (succinyl-CoA:3-ketoacid CoA transferase) that transfers CoA from succinyl-CoA to acetoacetate, activating it to acetoacetyl-CoA for terminal oxidation; expressed abundantly in brain, heart, and muscle, but completely absent in hepatocytes.',
          'মাইটোকন্ড্রিয়াল এনজাইম যা সাকসিনাইল-কোএ থেকে কোএ সরিয়ে অ্যাসিটোঅ্যাসিটেটে যুক্ত করে তাকে সক্রিয় করে; এটি মস্তিষ্ক ও পেশিতে প্রচুর থাকে কিন্তু যকৃতে সম্পূর্ণ অনুপস্থিত থাকায় যকৃৎ নিজের কিটোন নিজে পোড়াতে পারে না।'
        ),
      },
      {
        term: l('The Cori Cycle', 'কোরি চক্র'),
        definition: l(
          'Inter-organ metabolic cycle in which lactate produced by anaerobic glycolysis in contracting skeletal muscle or erythrocytes travels via blood to the liver, where it is converted back to glucose via gluconeogenesis and returned to peripheral tissues.',
          'একটি আন্তঃ-অঙ্গীয় চক্র যাতে পেশি বা লোহিত কণিকায় তৈরি ল্যাকটেট রক্ত দিয়ে যকৃতে যায় এবং যকৃতে গ্লুকোনিওজেনেসিসের মাধ্যমে পুনরায় গ্লুকোজে রূপান্তরিত হয়ে আবার পেশিতে ফিরে আসে।'
        ),
      },
      {
        term: l('The Cahill Cycle (Glucose-Alanine Cycle)', 'কাহিল চক্র (গ্লুকোজ-অ্যালানিন চক্র)'),
        definition: l(
          'Inter-organ loop wherein muscle pyruvate is transaminated with branched-chain amino acid nitrogen to form alanine; alanine travels to the liver, where its carbon is converted to glucose and its nitrogen is channeled into the urea cycle.',
          'পেশি ও যকৃতের মাঝে সমন্বয়কারী চক্র যেখানে পেশির পাইরুভেট অ্যামিনো অ্যাসিডের নাইট্রোজেন গ্রহণ করে অ্যালানিন তৈরি করে; এই অ্যালানিন যকৃতে গিয়ে গ্লুকোজ এবং অতিরিক্ত নাইট্রোজেন ইউরিয়াতে পরিণত করে।'
        ),
      },
      {
        term: l('Uncoupling Protein 1 (UCP-1 / Thermogenin)', 'আনকাপলিং প্রোটিন ১ (UCP-1 / থার্মোজেনিন)'),
        definition: l(
          'Mitochondrial inner membrane proton channel expressed in brown adipose tissue; dissipates the proton motive force generated by the respiratory chain as heat rather than driving ATP synthase, executing non-shivering thermogenesis.',
          'বাদামী চর্বিকলার মাইটোকন্ড্রিয়াল ঝিল্লির বিশেষ প্রোটিন যা শ্বসন শৃঙ্খলে তৈরি প্রোটন গ্র্যাডিয়েন্টকে এটিপি না বানিয়ে সরাসরি তাপে রূপান্তরিত করে মানবদেহের তাপমাত্রা রক্ষা করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Comparative ATP Yield and Oxygen Cost in Myocardial Fuel Oxidation', 'হৃদপেশিতে জ্বালানি জারণের তুলনামূলক এটিপি উৎপাদন ও অক্সিজেন ব্যয়ের হিসাব'),
        steps: [
          l(
            'Step 1: Calculate the complete stoichiometric oxidation of 1 molecule of palmitate (16:0): Palmitate + 23 O2 + 108 ADP + 108 Pi -> 16 CO2 + 16 H2O + 106 ATP (net after 2 ATP activation cost).',
            'ধাপ ১: ১ অণু প্যালমিটেট ফ্যাটি অ্যাসিড সম্পূর্ণ জারিত হয়ে ১০৬টি এটিপি তৈরি করে এবং এর জন্য ২৩ অণু অক্সিজেন (O2) খরচ হয়।'
          ),
          l(
            'Step 2: Calculate the complete stoichiometric oxidation of 1 molecule of glucose (6:0): Glucose + 6 O2 + 32 ADP + 32 Pi -> 6 CO2 + 6 H2O + 32 ATP (using the malate-aspartate shuttle).',
            'ধাপ ২: ১ অণু গ্লুকোজ সম্পূর্ণ জারিত হয়ে ৩২টি এটিপি তৈরি করে এবং এর জন্য ৬ অণু অক্সিজেন খরচ হয়।'
          ),
          l(
            'Step 3: Compare ATP yield per oxygen atom consumed (P/O ratio): For glucose, 32 ATP / 12 O atoms = 2.67 ATP/O. For palmitate, 106 ATP / 46 O atoms = 2.30 ATP/O.',
            'ধাপ ৩: প্রতি অক্সিজেন পরমাণু প্রতি এটিপি উৎপাদন অনুপাত: গ্লুকোজের ক্ষেত্রে অনুপাত ২.৬৭ এটিপি/অক্সিজেন, আর প্যালমিটেটের ক্ষেত্রে ২.৩০ এটিপি/অক্সিজেন।'
          ),
          l(
            'Step 4: Clinical insight: Glucose is ~16% more oxygen-efficient than fatty acids per mole of ATP generated. Under myocardial ischemia where oxygen is severely limiting, the heart shifts toward glucose oxidation to maximize mechanical power per available oxygen molecule.',
            'ধাপ ৪: ক্লিনিক্যাল সিদ্ধান্ত: প্রতি অণু এটিপি তৈরিতে গ্লুকোজ ফ্যাটি অ্যাসিডের চেয়ে ১৬% বেশি অক্সিজেন সাশ্রয়ী। তাই হার্টে রক্ত চলাচল কমলে (ইস্কেমিয়া) হৃৎপিণ্ড বাঁচতে ফ্যাটি অ্যাসিড ছেড়ে গ্লুকোজ ব্যবহারে ঝুঁকে পড়ে।'
          ),
        ],
        conclusion: l(
          'Glucose oxidation yields approximately 16% more ATP per mole of oxygen consumed than fatty acid oxidation, making glucose the essential oxygen-sparing fuel during myocardial ischemia.',
          'প্রতি অণু অক্সিজেনের বিপরীতে গ্লুকোজ জারণ ফ্যাটি অ্যাসিডের তুলনায় প্রায় ১৬% বেশি এটিপি উৎপাদন করে, যার কারণে হৃদপেশির ইস্কেমিয়ায় গ্লুকোজ সবচেয়ে অক্সিজেন-সাশ্রয়ী জ্বালানি হিসেবে কাজ করে।'
        ),
      },
      {
        title: l('Thermodynamics of the Phosphocreatine Sprint Buffer in Type II Muscle', 'টাইপ-২ পেশিতে ফসফোক্রিয়েটিন স্প্রিন্ট বাফারের তাপগতিবিদ্যা হিসাব'),
        steps: [
          l(
            'Step 1: In resting muscle, the creatine kinase equilibrium ([ATP][Creatine] / [ADP][Phosphocreatine] * Keq = 1) maintains resting [PCr] at ~25–30 mM and [ATP] at ~5 mM.',
            'ধাপ ১: বিশ্রামে থাকা পেশিতে ক্রিয়েটিন কাইনেজ এনজাইমের ভারসাম্যে ফসফোক্রিয়েটিনের (PCr) ঘনত্ব থাকে ২৫-৩০ মিলি মোলার এবং এটিপির ঘনত্ব থাকে প্রায় ৫ মিলি মোলার।'
          ),
          l(
            'Step 2: During maximal sprint exercise (100-meter dash), muscle ATP consumption surges to ~3.7 mM/sec, which would completely exhaust total resting ATP in under 1.5 seconds if unsupported.',
            'ধাপ ২: ১০০ মিটার দ্রুত দৌড়ের সময় পেশিতে প্রতি সেকেন্ডে ৩.৭ মিলি মোলার এটিপি খরচ হয়, যা কোনো সাহায্য ছাড়া মাত্র দেড় সেকেন্ডেই সম্পূর্ণ শেষ হয়ে যেত।'
          ),
          l(
            'Step 3: Creatine kinase rapidly transfers the high-energy phosphate group from PCr to ADP: PCr + ADP + H+ <-> Creatine + ATP (Delta G0\' = -12.5 kJ/mol), re-phosphorylating ADP into ATP as rapidly as it is hydrolyzed by myosin ATPase.',
            'ধাপ ৩: ক্রিয়েটিন কাইনেজ সাথে সাথে ফসফোক্রিয়েটিন থেকে ফসফেট নিয়ে এডিপিকে আবার এটিপিতে রূপান্তর করে, ফলে এটিপির মাত্রা স্বাভাবিক থাকে।'
          ),
          l(
            'Step 4: The 25 mM reservoir of PCr sustains maximal power output for ~6–8 seconds, after which PCr is depleted, intracellular ADP rises, and anaerobic glycogenolysis takes over, producing lactate and slowing sprint velocity.',
            'ধাপ ৪: এই ২৫ মিলি মোলার ফসফোক্রিয়েটিন প্রায় ৬-৮ সেকেন্ড পর্যন্ত তীব্র গতি ধরে রাখে; এরপর তা শেষ হয়ে গেলে অবায়বীয় গ্লাইকোলাইসিস চালু হয়ে ল্যাকটেট তৈরি করে এবং দৌড়বিদ কিছুটা ক্লান্ত হয়ে পড়ে।'
          ),
        ],
        conclusion: l(
          'The high-energy phosphocreatine pool serves as an instantaneous temporal energy buffer, sustaining maximal sprint power output until anaerobic glycolysis and lactate accumulation take over.',
          'ফসফোক্রিয়েটিন ভাণ্ডার পেশিতে তাৎক্ষণিক শক্তি বাফার হিসেবে কাজ করে এবং স্প্রিন্টের শুরুতে সর্বোচ্চ গতি বজায় রাখে যতক্ষণ না অবায়বীয় গ্লাইকোলাইসিস চালু হয়ে ল্যাকটেট তৈরি করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why is the liver completely incapable of utilizing ketone bodies as an energy source, despite being the sole organ responsible for synthesizing them?',
          'যকৃৎ সারা দেহের জন্য কিটোন বডি তৈরি করার একমাত্র প্রধান অঙ্গ হওয়া সত্ত্বেও নিজে কেন নিজের তৈরি কিটোন বডি ব্যবহার করে শক্তি উৎপাদন করতে পারে না?',
        ),
        answer: l(
          'To utilize acetoacetate for energy, tissues must activate it to acetoacetyl-CoA. This activation is catalyzed by the mitochondrial enzyme beta-ketoacyl-CoA transferase (succinyl-CoA:3-ketoacid CoA transferase / SCOT / thiophorase), which transfers a coenzyme A moiety from succinyl-CoA onto acetoacetate. Hepatocytes completely lack expression of the SCOT enzyme (encoded by the OXCT1 gene). Consequently, while the liver possesses the HMG-CoA synthase pathway to manufacture acetoacetate and beta-hydroxybutyrate, it cannot activate acetoacetate, guaranteeing that all synthesized ketone bodies are exported via blood to extrahepatic tissues like the brain and myocardium.',
          'কিটোন বডি থেকে শক্তি পেতে হলে প্রথমে অ্যাসিটোঅ্যাসিটেটকে অ্যাসিটোঅ্যাসিটাইল-কোএ-তে রূপান্তর করতে হয়। এই রূপান্তরটি ঘটায় মাইটোকন্ড্রিয়াল এনজাইম বিটা-কিটোঅ্যাসাইল-কোএ ট্রান্সফারেজ (SCOT বা থায়োফোরাজ), যা সাকসিনাইল-কোএ থেকে কোএ স্থানান্তর করে। কিন্তু যকৃতে এই SCOT এনজাইমটি জিনগতভাবেই সম্পূর্ণ অনুপস্থিত থাকে। তাই যকৃৎ প্রচুর কিটোন বডি বানাতে পারলেও নিজে তা ভাঙতে পারে না এবং নিঃস্বার্থভাবে রক্তের মাধ্যমে মস্তিষ্ক ও হৃৎপিণ্ডে শক্তি যোগাতে পাঠিয়ে দেয়।'
        ),
      },
      {
        question: l(
          'Why do white adipocytes depend on active glycolysis to synthesize triacylglycerols, despite having abundant free fatty acids available?',
          'চর্বিকলায় প্রচুর পরিমাণে মুক্ত ফ্যাটি অ্যাসিড থাকা সত্ত্বেও ট্রাইগ্লিসারাইড চর্বি তৈরি করার জন্য কেন তাদের সক্রিয় গ্লাইকোলাইসিসের ওপর নির্ভর করতে হয়?',
        ),
        answer: l(
          'Triacylglycerol synthesis requires glycerol-3-phosphate as the molecular backbone to esterify three fatty acyl-CoA molecules. While the liver expresses high levels of glycerol kinase to directly phosphorylate free glycerol, white adipose tissue lacks glycerol kinase. Therefore, adipocytes cannot reuse the glycerol released during lipolysis. Instead, adipocytes must obtain glycerol-3-phosphate through glycolysis by reducing dihydroxyacetone phosphate (DHAP) via glycerol-3-phosphate dehydrogenase. This enzymatic constraint makes adipocyte triacylglycerol synthesis strictly dependent on insulin-stimulated glucose uptake via GLUT4.',
          'ট্রাইগ্লিসারাইড তৈরি করতে তিনটি ফ্যাটি অ্যাসিড যুক্ত করার জন্য গ্লিসারল-৩-ফসফেট মেরুদণ্ড প্রয়োজন হয়। যকৃতে গ্লিসারল কাইনেজ এনজাইম থাকায় তা সরাসরি মুক্ত গ্লিসারলকে ফসফরাইলেট করতে পারে, কিন্তু চর্বিকলায় কোনো গ্লিসারল কাইনেজ এনজাইম থাকে না। তাই চর্বি ভাঙার সময় নির্গত গ্লিসারল চর্বিকলা নিজে পুনরায় ব্যবহার করতে পারে না। তাদের গ্লাইকোলাইসিস চালিয়ে DHAP থেকে গ্লিসারল-৩-ফসফেট বানাতে হয়; যার জন্য চর্বিকলায় চর্বি জমা হতে হলে ইনসুলিনের মাধ্যমে কোষে গ্লুকোজ ঢোকা আবশ্যক।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: organSpecialization3DData,
  interactiveDiagram: {
    id: 'organ-metabolic-specialization-hub',
    title: l('Interactive Organ Specialization & Inter-Organ Fuel Loops', 'ইন্টারেক্টিভ অঙ্গীয় বিশেষায়ন ও আন্তঃ-অঙ্গীয় জ্বালানি চক্র'),
    description: l(
      'Map the physiological division of metabolic labor across human tissues: observe hepatic processing and ketone export, myocardial fatty acid burning, skeletal muscle phosphocreatine sprinting, the Cori and Cahill cycles, and adipose thermogenesis.',
      'মানবদেহের বিভিন্ন অঙ্গের মাঝে বিপাকীয় শ্রমবিভাজন প্রত্যক্ষ করুন: যকৃতের প্রক্রিয়াকরণ ও কিটোন রফতানি, হৃদপেশির ফ্যাটি অ্যাসিড জারণ, কঙ্কালপেশির ক্রিয়েটিন শক্তি, কোরি ও কাহিল আন্তঃ-অঙ্গীয় চক্র এবং চর্বিকলার তাপ উৎপাদনের পূর্ণাঙ্গ মানচিত্র।'
    ),
    disclaimer: l(
      'Organ fuel percentages, enzyme distributions, and inter-organ cycle stoichiometries verified against Lehninger Principles of Biochemistry (8th ed) and Harper Illustrated Biochemistry (32nd ed).',
      'অঙ্গভিত্তিক জ্বালানি অনুপাত, এনজাইমের উপস্থিতি এবং আন্তঃ-অঙ্গীয় চক্রের রাসায়নিক ভারসাম্য লেহনিঞ্জার এবং হার্পারস বায়োকেমিস্ট্রি দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'node-liver-glucokinase-hub',
        label: l('1. Hepatic Glucokinase & Fuel Distribution Hub', '১. যকৃতের গ্লুকোকাইনেজ ও জ্বালানি বণ্টন কেন্দ্র'),
        description: l(
          'Hepatocytes express high-capacity, low-affinity glucokinase (Km ~10 mM) and GLUT2, acting as the systemic glucose buffer; exports glucose via glucose-6-phosphatase to maintain euglycemia during fasting.',
          'যকৃতে উচ্চ ক্ষমতার গ্লুকোকাইনেজ ও GLUT2 থাকে যা রক্তে গ্লুকোজের মাত্রা নিয়ন্ত্রণ করে; উপবাসকালে গ্লুকোজ-৬-ফসফেটেজের মাধ্যমে রক্তে গ্লুকোজ ছেড়ে স্বাভাবিক মাত্রা বজায় রাখে।'
        ),
        details: l(
          'Glucokinase is not inhibited by glucose-6-phosphate, permitting continuous phosphorylation of high portal glucose loads; regulated by nuclear sequestration via GKRP.',
          'গ্লুকোজ-৬-ফসফেট দ্বারা গ্লুকোকাইনেজ বন্ধ হয় না, ফলে খাবার পর প্রচুর গ্লুকোজ সহজে যকৃতে ঢুকতে পারে; GKRP প্রোটিন দিয়ে এটি নিউক্লিয়াসে নিয়ন্ত্রিত থাকে।'
        ),
        sectionId: 'introduction',
        color: '#10b981',
        svgCoords: { cx: 70, cy: 75, r: 24 },
      },
      {
        id: 'node-liver-ketone-export',
        label: l('2. Altruistic Ketogenesis & Lack of Thiophorase (SCOT)', '২. নিঃস্বার্থ কিটোজেনেসিস ও থায়োফোরাজের অনুপস্থিতি'),
        description: l(
          'The liver oxidizes excess fatty acids to synthesize acetoacetate and beta-hydroxybutyrate via HMG-CoA synthase; totally lacks thiophorase (SCOT), preventing self-utilization and forcing 100% export to extrahepatic tissues.',
          'যকৃৎ ফ্যাটি অ্যাসিড ভেঙে কিটোন বডি তৈরি করে; কিন্তু এতে থায়োফোরাজ এনজাইম না থাকায় এটি নিজে তৈরি করা কিটোন নিজে খরচ করতে পারে না এবং সম্পূর্ণ কিটোন রক্তে ছেড়ে দেয়।'
        ),
        details: l(
          'SCOT (OXCT1) expression is silenced in adult liver, ensuring ketones manufactured during starvation reach the brain, heart, and skeletal muscle unimpeded.',
          'যকৃতে SCOT এনজাইম বন্ধ থাকে, যার ফলে অনাহারে তৈরি কিটোনগুলো সম্পূর্ণ অক্ষত অবস্থায় মস্তিষ্ক ও হৃৎপিণ্ডে পৌঁছে তাদের জীবন রক্ষা করে।'
        ),
        sectionId: 'structure',
        color: '#8b5cf6',
        svgCoords: { cx: 160, cy: 75, r: 24 },
      },
      {
        id: 'node-cardiac-fatty-acid-reliance',
        label: l('3. Cardiac Aerobic Beta-Oxidation & Mitochondrial Density', '৩. হৃদপেশির বায়বীয় বিটা-জারণ ও ঘন মাইটোকন্ড্রিয়া'),
        description: l(
          'The myocardium relies on long-chain fatty acids for 60–70% of resting ATP; dense mitochondria occupy 40% of cell volume, providing continuous oxidative phosphorylation without fatigue.',
          'হৃদপেশি স্বাভাবিক অবস্থায় ৬০-৭০% শক্তি ফ্যাটি অ্যাসিড জারণ থেকে পায়; কোষের ৪০% অংশ মাইটোকন্ড্রিয়া দিয়ে পূর্ণ থাকে যা অবিরাম শক্তি যোগায়।'
        ),
        details: l(
          'Extracts 70–75% of arterial oxygen at rest; possesses virtually no glycogen reserve, making it immediately susceptible to ischemic necrosis upon coronary occlusion.',
          'বিশ্রামেই রক্তের প্রায় ৭৫% অক্সিজেন শোষণ করে নেয়; এতে কোনো সঞ্চিত গ্লাইকোজেন না থাকায় রক্তনালি বন্ধ হলে দ্রুত মায়োকার্ডিয়াল নেক্রোসিস ঘটে।'
        ),
        sectionId: 'mechanism',
        color: '#ef4444',
        svgCoords: { cx: 250, cy: 75, r: 24 },
      },
      {
        id: 'node-muscle-phosphocreatine-buffer',
        label: l('4. Skeletal Muscle Phosphocreatine Sprint Buffer', '৪. কঙ্কালপেশির ফসফোক্রিয়েটিন স্প্রিন্ট বাফার'),
        description: l(
          'Type II fast-twitch glycolytic fibers buffer ATP using creatine kinase and phosphocreatine (~25 mM pool), sustaining maximal anaerobic muscular contraction for the initial 6–8 seconds of a sprint.',
          'টাইপ-২ দ্রুত গ্লাইকোলাইটিক পেশি ফাইবার ক্রিয়েটিন কাইনেজ ও ফসফোক্রিয়েটিন দিয়ে এটিপি ধরে রাখে, যা তীব্র স্প্রিন্টের প্রথম ৬-৮ সেকেন্ড সর্বোচ্চ শক্তি সরবরাহ করে।'
        ),
        details: l(
          'PCr + ADP + H+ <-> Creatine + ATP; as PCr is depleted, intracellular ADP and AMP rise, activating glycogen phosphorylase and PFK-1 to stimulate anaerobic glycolysis.',
          'ফসফোক্রিয়েটিন শেষ হয়ে গেলে কোষে ADP ও AMP বৃদ্ধি পায় যা গ্লাইকোজেন ভেঙে অবায়বীয় গ্লাইকোলাইসিস চালু করে।'
        ),
        sectionId: 'mechanism',
        color: '#f59e0b',
        svgCoords: { cx: 340, cy: 75, r: 24 },
      },
      {
        id: 'node-cori-cycle-loop',
        label: l('5. The Cori Cycle: Lactate-to-Glucose Inter-Organ Loop', '৫. কোরি চক্র: ল্যাকটেট থেকে গ্লুকোজ আন্তঃ-অঙ্গীয় চক্র'),
        description: l(
          'Anaerobic muscle and erythrocytes export lactate to the bloodstream; the liver takes up lactate, converting it back to glucose via hepatic gluconeogenesis at the cost of 6 ATP equivalents.',
          'অবায়বীয় পেশি ও লোহিত কণিকা রক্তে ল্যাকটেট পাঠায়; যকৃৎ সেই ল্যাকটেট গ্রহণ করে ৬টি এটিপি খরচ করে পুনরায় গ্লুকোজে রূপান্তরিত করে রক্তে ফেরত পাঠায়।'
        ),
        details: l(
          'Prevents systemic lactic acidosis while regenerating blood glucose; LDH-M in muscle favors pyruvate->lactate, while LDH-H in liver and heart favors lactate->pyruvate.',
          'রক্তে অতিরিক্ত ল্যাকটিক অ্যাসিড জমতে বাধা দেয়; পেশির LDH ল্যাকটেট বানায় আর যকৃতের LDH ল্যাকটেট ভেঙে পাইরুভেট তৈরি করে।'
        ),
        sectionId: 'integration',
        color: '#06b6d4',
        svgCoords: { cx: 70, cy: 155, r: 24 },
      },
      {
        id: 'node-cahill-alanine-cycle',
        label: l('6. The Cahill Cycle: Glucose-Alanine-Nitrogen Transport Loop', '৬. কাহিল চক্র: গ্লুকোজ-অ্যালানিন-নাইট্রোজেন পরিবহন চক্র'),
        description: l(
          'Fasting muscle catabolizes branched-chain amino acids, transferring nitrogen to pyruvate to form alanine via ALT; alanine travels to liver, where nitrogen enters the urea cycle and pyruvate enters gluconeogenesis.',
          'উপবাসে পেশি অ্যামিনো অ্যাসিড ভেঙে নাইট্রোজেন পাইরুভেটে যুক্ত করে অ্যালানিন বানায়; অ্যালানিন যকৃতে গিয়ে ইউরিয়া তৈরি করে এবং কার্বন দিয়ে নতুন গ্লুকোজ তৈরি হয়।'
        ),
        details: l(
          'Provides a non-toxic nitrogen shuttle from muscle to liver while simultaneously exporting carbon skeletons to sustain systemic blood glucose.',
          'পেশি থেকে ক্ষতিকর অ্যামোনিয়া বিষাক্ত না করে নিরাপদে যকৃতে পৌঁছে দেয় এবং একই সাথে গ্লুকোজ তৈরির কাঁচামাল সরবরাহ করে।'
        ),
        sectionId: 'integration',
        color: '#3b82f6',
        svgCoords: { cx: 160, cy: 155, r: 24 },
      },
      {
        id: 'node-adipose-lipolysis-release',
        label: l('7. Adipose Lipolysis & Lack of Glycerol Kinase', '৭. চর্বিকলার লাইপোলাইসিস ও গ্লিসারল কাইনেজের অভাব'),
        description: l(
          'White adipose tissue mobilizes triacylglycerols via ATGL, HSL, and MAGL under beta-adrenergic PKA control; lacks glycerol kinase, exporting all free glycerol to the liver for gluconeogenesis.',
          'শ্বেত চর্বিকলা ATGL ও HSL দিয়ে ট্রাইগ্লিসারাইড ভেঙে ফ্যাটি অ্যাসিড ও গ্লিসারল বের করে; এতে গ্লিসারল কাইনেজ না থাকায় تمام গ্লিসারল যকৃতে গ্লুকোজ তৈরিতে চলে যায়।'
        ),
        details: l(
          'Re-esterification of fatty acids in adipocytes strictly requires glycolysis-derived DHAP to make glycerol-3-phosphate, coupling lipid storage directly to glucose uptake.',
          'চর্বিকলায় চর্বি জমা করতে গ্লাইকোলাইসিস থেকে গ্লিসারল-৩-ফসফেট বানাতে হয়, যার কারণে গ্লুকোজ গ্রহণ ছাড়া চর্বি জমা হতে পারে না।'
        ),
        sectionId: 'practice',
        color: '#ea580c',
        svgCoords: { cx: 250, cy: 155, r: 24 },
      },
      {
        id: 'node-brown-adipose-ucp1-heat',
        label: l('8. Brown Adipose UCP-1 Thermogenesis (Non-Shivering Heat)', '৮. বাদামী চর্বিকলার UCP-1 থার্মোজেনেসিস (কম্পনহীন তাপ তৈরি)'),
        description: l(
          'Brown and beige adipocytes express uncoupling protein 1 (UCP-1 / thermogenin) in their inner mitochondrial membrane; sympathetic norepinephrine dissipates the proton gradient directly as heat rather than ATP.',
          'বাদামী চর্বিকলার মাইটোকন্ড্রিয়ায় UCP-1 প্রোটিন থাকে; স্নায়ুর উত্তেজনার ফলে এটি প্রোটন গ্র্যাডিয়েন্ট সরাসরি তাপে পরিণত করে এটিপি তৈরি না করেই শরীর গরম রাখে।'
        ),
        details: l(
          'Abundant in human infants (interscapular, perirenal) and adult cervical/supraclavicular depots; activated by cold exposure via beta-3 adrenergic receptors and free fatty acids.',
          'নবজাতক শিশু এবং প্রাপ্তবয়স্কদের ঘাড়ের কাছে বিদ্যমান; শীতের সময় বিটা-৩ রিসেপ্টরের মাধ্যমে সক্রিয় হয়ে শরীরের অভ্যন্তরীণ তাপমাত্রা ধরে রাখে।'
        ),
        sectionId: 'takeaways',
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
          heading: l('The Physiological Division of Labor: Why Organs Specialize', 'শারীরবৃত্তীয় শ্রমবিভাজন: বিভিন্ন অঙ্গ কেন বিপাকীয়ভাবে বিশেষায়িত'),
          paragraphs: [
            l(
              'The survival of a complex multicellular organism requires an intricate division of metabolic labor. Individual organs do not synthesize all of their own fuels or manage identical enzymatic pathways. Instead, evolution has partitioned metabolic tasks according to the anatomical structure and physiological role of each tissue. For example, the brain requires constant, high-energy fuel with zero interruption; the heart must pump rhythmically without resting; skeletal muscle must rapidly scale its power output by more than twenty-fold during physical exertion; and the liver acts as the selfless metabolic buffer and distributor for the entire body.',
              'একটি বহুকোষী জটিল জীবদেহের বেঁচে থাকার জন্য বিপাকীয় কাজের সূক্ষ্ম শ্রমবিভাজন অপরিহার্য। মানবদেহের প্রতিটি অঙ্গ নিজে নিজে সমস্ত জ্বালানি তৈরি করে না বা একই ধরনের এনজাইম চালায় না। বরং বিবর্তন প্রতিটি অঙ্গের শারীরস্থানিক গঠন ও কাজের ধরন অনুযায়ী তাদের বিপাকীয় দায়িত্ব ভাগ করে দিয়েছে। উদাহরণস্বরূপ, মস্তিষ্কের জন্য নিরবচ্ছিন্ন উচ্চ শক্তির জ্বালানি প্রয়োজন; হৃৎপিণ্ডকে বিশ্রামহীনভাবে আজীবন স্পন্দিত হতে হয়; কঙ্কালপেশিকে দৌড়াদৌড়ির সময় বিশ গুণেরও বেশি শক্তি দ্রুত উৎপাদন করতে হয়; আর যকৃৎ সারা শরীরের জন্য এক নিঃস্বার্থ সাহায্যকারী ও নিয়ন্ত্রক অঙ্গ হিসেবে কাজ করে।'
            ),
            l(
              'This specialization is established by organ-specific differences in membrane transport proteins, key regulatory enzyme isoforms, and mitochondrial density. Tissues that store fuels—such as the liver and adipose tissue—possess specialized machinery to release glucose and fatty acids into systemic circulation when nutrient levels fall. Conversely, tissues that perform continuous work—such as the heart and brain—are specialized consumers that rely on these exported fuels. Understanding the fuel preferences and enzymatic limitations of each organ explains how the human body survives transitions between feeding, prolonged fasting, and intense exercise.',
              'এই বিশেষায়ন গড়ে ওঠে প্রতিটি অঙ্গের নিজস্ব ঝিল্লি পরিবহন প্রোটিন, নিয়ন্ত্রক এনজাইমের আইসোফর্ম এবং মাইটোকন্ড্রিয়ার ঘনত্বের পার্থক্যের ওপর ভিত্তি করে। যেসব অঙ্গ জ্বালানি জমা রাখে—যেমন যকৃৎ এবং চর্বিকলা—তাদের কাছে রক্তে গ্লুকোজ ও ফ্যাটি অ্যাসিড মুক্ত করার বিশেষ এনজাইম থাকে যখন খাবারের অভাব হয়। বিপরীতে যেসব অঙ্গ অবিরাম কাজ করে—যেমন হৃৎপিণ্ড ও মস্তিষ্ক—তারা মূলত ভোক্তা হিসেবে এই মুক্ত জ্বালানির ওপর নির্ভর করে। প্রতিটি অঙ্গের জ্বালানি পছন্দ এবং এনজাইমের সীমাবদ্ধতা বোঝা খাবার গ্রহণ, দীর্ঘ উপবাস এবং ভারী ব্যায়ামের সময় মানবদেহের বেঁচে থাকার রহস্য উন্মোচন করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Liver as Central Processing Hub and Cerebral Glucose Reliance', 'কেন্দ্রীয় প্রক্রিয়াকরণ কেন্দ্র হিসেবে যকৃৎ ও মস্তিষ্কের গ্লুকোজ নির্ভরতা'),
          paragraphs: [
            l(
              'The liver is the central metabolic clearinghouse of the human body. Located strategically between the portal circulation and systemic venous return, hepatocytes sample and process dietary nutrients before they reach the rest of the body. The liver expresses glucokinase, a high-capacity hexokinase isozyme with a low affinity for glucose (Km ~10 mM) that is not inhibited by its product, glucose-6-phosphate. This unique kinetic property allows the liver to absorb large spikes in portal blood glucose following carbohydrate meals and convert them into glycogen or triacylglycerols, preventing postprandial hyperglycemia.',
              'যকৃৎ হলো মানবদেহের প্রধান বিপাকীয় লেনদেন কেন্দ্র। পরিপাকতন্ত্রের পোর্টাল রক্ত এবং সাধারণ রক্ত সংবহনের মাঝে কৌশলগতভাবে অবস্থান করায় যকৃৎ খাদ্য থেকে আসা সমস্ত পুষ্টি সারা দেহে পৌঁছানোর আগেই যাচাই ও প্রক্রিয়াজাত করে নেয়। যকৃতে গ্লুকোকাইনেজ নামক একটি বিশেষ এনজাইম থাকে যা সাধারণ হেক্সোকাইনেজের মতো নিজের উৎপাদ দ্বারা বাধাগ্রস্ত হয় না। এই বিশেষ গুণের কারণে খাবারের পর রক্তে প্রচুর গ্লুকোজ এলে যকৃৎ তা সহজেই গ্রহণ করে গ্লাইকোজেন ও চর্বি হিসেবে জমা রাখতে পারে এবং রক্তে গ্লুকোজের অতিরিক্ত বৃদ্ধি রোধ করে।'
            ),
            l(
              'In stark contrast to the versatile, altruistic liver, the brain is an obligate, specialized consumer. Comprising only 2% of total body mass, the adult brain consumes roughly 20% of basal oxygen and 120 grams of glucose daily. Because albumin-bound free fatty acids cannot cross the blood-brain barrier and neuronal beta-oxidation generates toxic reactive oxygen species, the brain relies entirely on glucose imported via high-affinity, insulin-independent GLUT1 and GLUT3 transporters. Only during prolonged starvation does the brain adapt by upregulating monocarboxylate transporters (MCT1) to oxidize ketone bodies manufactured and exported by the liver.',
              'বিচিত্র কাজের কাজী যকৃতের ঠিক বিপরীতে মস্তিষ্ক হলো একটি সংবেদনশীল ও বিশেষায়িত ভোক্তা। দেহের মোট ওজনের মাত্র ২% হওয়া সত্ত্বেও প্রাপ্তবয়স্ক মস্তিষ্ক প্রতিদিন প্রায় ২০% অক্সিজেন এবং ১২০ গ্রাম গ্লুকোজ খরচ করে। রক্ত-মস্তিষ্ক বাধার কারণে অ্যালবুমিনে যুক্ত ফ্যাটি অ্যাসিড মস্তিষ্কে ঢুকতে পারে না এবং নিউরনে ফ্যাটি অ্যাসিড জারণে ক্ষতিকর ফ্রি র্যাডিক্যাল তৈরি হয়; তাই মস্তিষ্ক GLUT1 ও GLUT3 বাহকের মাধ্যমে রক্ত থেকে আসা গ্লুকোজের ওপর সম্পূর্ণ নির্ভরশীল থাকে। কেবল দীর্ঘ উপবাসকালে রক্ত-মস্তিষ্ক বাধায় MCT1 বাহক বৃদ্ধি করে মস্তিষ্ক যকৃতের তৈরি কিটোন বডি ব্যবহার করে বেঁচে থাকে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Myocardial Energetics: Continuous Aerobic Work and Fatty Acid Oxidation', 'হৃদপেশির শক্তিগতিবিদ্যা: অবিরাম বায়বীয় কাজ ও ফ্যাটি অ্যাসিড জারণ'),
          paragraphs: [
            l(
              'The human heart beats approximately 100,000 times each day, contracting rhythmically without a single period of rest. To maintain this ceaseless mechanical pump, cardiomyocytes maintain an extraordinarily high rate of ATP turnover, renewing their entire intracellular ATP pool every few seconds. To meet this massive energy demand, cardiac muscle is organized for continuous aerobic metabolism: mitochondria occupy nearly 40% of cardiomyocyte volume, and the myocardium extracts roughly 70% to 75% of available oxygen from coronary arterial blood even under resting baseline conditions.',
              'মানবদেহের হৃৎপিণ্ড প্রতিদিন প্রায় এক লক্ষ বার স্পন্দিত হয় এবং জীবনের শুরু থেকে শেষ পর্যন্ত এক মুহূর্তের জন্যও বিশ্রাম নেয় না। এই অবিরাম যান্ত্রিক পাম্প চালু রাখতে হৃদপেশির কোষে অত্যন্ত দ্রুত গতিতে এটিপি তৈরি ও খরচ হতে হয়; প্রতি কয়েক সেকেন্ডে কোষের সমস্ত এটিপি নতুন করে তৈরি হয়। এই বিশাল শক্তির চাহিদা মেটাতে হৃৎপিণ্ড সম্পূর্ণ বায়বীয় বিপাকের ওপর প্রতিষ্ঠিত: কোষের প্রায় ৪০% জায়গা জুড়ে থাকে মাইটোকন্ড্রিয়া এবং স্বাভাবিক অবস্থাতেই করোনারি রক্ত থেকে এটি প্রায় ৭০-৭৫% অক্সিজেন গ্রহণ করে নেয়।'
            ),
            l(
              'Under normal aerobic conditions, the myocardium derives 60% to 70% of its ATP from the beta-oxidation of long-chain fatty acids, with the remaining 20% to 25% supplied by glucose and circulating lactate. Because cardiac muscle stores negligible glycogen and has minimal capacity for anaerobic glycolysis, it cannot tolerate interruption of coronary blood flow. Complete occlusion of a coronary artery depletes high-energy phosphates within seconds, halting contraction and rapidly precipitating ischemic cardiomyocyte necrosis, highlighting the heart\'s absolute dependence on uninterrupted oxygen delivery.',
              'স্বাভাবিক অবস্থায় হৃৎপিণ্ড তার ৬০-৭০% শক্তি দীর্ঘ ফ্যাটি অ্যাসিডের বিটা-জারণ থেকে পায় এবং অবশিষ্ট ২০-২৫% শক্তি গ্লুকোজ ও ল্যাকটেট থেকে গ্রহণ করে। হৃদপেশিতে নিজস্ব কোনো গ্লাইকোজেনের সঞ্চয় না থাকায় এবং অবায়বীয় প্রক্রিয়ায় শক্তি উৎপাদনের কোনো সক্ষমতা না থাকায় এটি রক্তের প্রবাহ বন্ধ হওয়া এক মুহূর্তের জন্যও সহ্য করতে পারে না। করোনারি ধমনি বন্ধ হলে মাত্র কয়েক সেকেন্ডের মধ্যে কোষের শক্তি নিঃশেষ হয়ে সংকোচন থেমে যায় এবং হার্ট অ্যাটাক ঘটে, যা হৃৎপিণ্ডের অক্সিজেনের ওপর চরম নির্ভরতাকে প্রমাণ করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Skeletal Muscle Fuel Switching, Fiber Diversity, and Inter-Organ Cycles', 'কঙ্কালপেশির জ্বালানি রূপান্তর, ফাইবারের বৈচিত্র্য ও আন্তঃ-অঙ্গীয় চক্র'),
          paragraphs: [
            l(
              'Skeletal muscle comprises roughly 40% of total adult body mass and demonstrates the greatest dynamic range in fuel consumption of any human tissue. During intense physical exertion, muscular ATP expenditure can surge more than twenty-fold above resting rates. Muscle accommodates these dramatic shifts through a heterogeneous mixture of muscle fiber types: Type I slow-twitch oxidative fibers (rich in mitochondria and myoglobin, optimized for sustained aerobic posture and endurance) and Type II fast-twitch glycolytic fibers (rich in glycogen and glycolytic enzymes, specialized for rapid, explosive power).',
              'কঙ্কালপেশি মানবদেহের মোট ওজনের প্রায় ৪০% গঠন করে এবং দেহের যেকোনো অঙ্গের তুলনায় শক্তির ব্যবহারে সবচেয়ে বেশি ওঠানামা প্রদর্শন করে। কঠোর ব্যায়ামের সময় পেশিতে এটিপি খরচের হার স্বাভাবিকের চেয়ে বিশ গুণেরও বেশি বৃদ্ধি পেতে পারে। পেশি বিভিন্ন ধরনের ফাইবারের সমন্বয়ে এই পরিবর্তন পরিচালনা করে: টাইপ-১ ধীর গতির বায়বীয় ফাইবার (প্রচুর মাইটোকন্ড্রিয়া ও মায়োগ্লোবিনযুক্ত, দীর্ঘস্থায়ী সহনশীল কাজের জন্য উপযুক্ত) এবং টাইপ-২ দ্রুত গতির গ্লাইকোলাইটিক ফাইবার (গ্লাইকোজেন ও গ্লাইকোলাইটিক এনজাইম সমৃদ্ধ, যা তাৎক্ষণিক তীব্র শক্তির বিস্ফোরণ ঘটায়)।'
            ),
            l(
              'Because skeletal muscle lacks the enzyme glucose-6-phosphatase, intramuscular glycogen (~400 grams) cannot be cleaved into free glucose for export into the bloodstream; it is sequestered exclusively for muscular contraction. During high-intensity anaerobic sprints, rapid glycolysis generates excess lactate, which is exported into the bloodstream and carried to the liver for gluconeogenesis via the Cori cycle. During fasting, muscle degrades branched-chain amino acids and transaminates pyruvate to alanine, sending it to the liver via the Cahill cycle to support hepatic glucose output and safe nitrogen clearance.',
              'কঙ্কালপেশিতে গ্লুকোজ-৬-ফসফেটেজ এনজাইম না থাকায় পেশির গ্লাইকোজেন (প্রায় ৪০০ গ্রাম) রক্তে গ্লুকোজ হিসেবে মুক্ত হতে পারে না; এটি কেবল পেশির নিজস্ব কাজের জন্য সংরক্ষিত থাকে। তীব্র ব্যায়ামের সময় অবায়বীয় গ্লাইকোলাইসিসে প্রচুর ল্যাকটেট তৈরি হয়, যা রক্তের মাধ্যমে যকৃতে গিয়ে কোরি চক্রের সাহায্যে পুনরায় গ্লুকোজে রূপান্তরিত হয়। একইভাবে উপবাসের সময় পেশি প্রোটিন ভেঙে অ্যালানিন তৈরি করে যকৃতে পাঠায় যা কাহিল চক্রের মাধ্যমে রক্তে গ্লুকোজের সরবরাহ নিশ্চিত করে এবং ইউরিয়া চক্রের মাধ্যমে ক্ষতিকর নাইট্রোজেন অপসারণ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Adipose Tissue Thermogenesis and Renal Metabolic Partitioning', 'চর্বিকলার তাপ উৎপাদন ও বৃক্কের দ্বৈত বিপাকীয় ভূমিকা'),
          paragraphs: [
            l(
              'Adipose tissue is not merely a passive insulator; it is an active endocrine and metabolic organ partitioned into white adipose tissue (WAT) and brown adipose tissue (BAT). White adipose tissue stores triacylglycerols in large unilocular lipid droplets, releasing free fatty acids and glycerol during fasting under hormone-sensitive lipase control. Because adipocytes lack the enzyme glycerol kinase, they cannot reuse the glycerol released during lipolysis; all free glycerol is exported to the liver for gluconeogenesis. In contrast, brown and beige adipocytes contain multilocular droplets and abundant mitochondria expressing uncoupling protein 1 (UCP-1), which uncouples respiration to generate heat directly.',
              'চর্বিকলা কেবল কোনো নিষ্ক্রিয় স্তর নয়; এটি একটি অতি-সক্রিয় অন্তঃক্ষরা ও বিপাকীয় অঙ্গ যা শ্বেত চর্বিকলা (WAT) এবং বাদামী চর্বিকলায় (BAT) বিভক্ত। শ্বেত চর্বিকলা ট্রাইগ্লিসারাইড জমা রাখে এবং উপবাসকালে হরমোন-সংবেদনশীল লাইপেজের মাধ্যমে ফ্যাটি অ্যাসিড ও গ্লিসারল রক্তে ছেড়ে দেয়। চর্বিকলায় গ্লিসারল কাইনেজ এনজাইম না থাকায় তারা নির্গত গ্লিসারল পুনরায় ব্যবহার করতে পারে না, ফলে সমস্ত গ্লিসারল যকৃতে গিয়ে নতুন গ্লুকোজ তৈরিতে ব্যবহৃত হয়। অপরদিকে বাদামী চর্বিকলায় প্রচুর মাইটোকন্ড্রিয়া এবং UCP-1 প্রোটিন থাকে, যা এটিপি না বানিয়ে সরাসরি তাপ উৎপাদন করে শরীর উষ্ণ রাখে।'
            ),
            l(
              'The kidneys exhibit remarkable metabolic compartmentalization between their outer cortex and inner medulla. The renal cortex is highly oxygenated and rich in gluconeogenic enzymes; during prolonged starvation and diabetic ketoacidosis, renal cortex gluconeogenesis accelerates dramatically, contributing up to 50% of systemic endogenous glucose output. This renal gluconeogenesis is coupled to glutamine deamination, releasing ammonium ions into the urine to excrete systemic acid. Conversely, the renal medulla is hypoxic and lacks gluconeogenic enzymes, relying almost exclusively on anaerobic glycolysis to produce lactate.',
              'বৃক্কের বাইরের কর্টেক্স এবং ভেতরের মেডুলার মাঝে এক চমৎকার বিপাকীয় শ্রমবিভাজন বিদ্যমান। বৃক্কের কর্টেক্স প্রচুর অক্সিজেন সমৃদ্ধ এবং এতে গ্লুকোজ তৈরির প্রচুর এনজাইম থাকে; দীর্ঘ উপবাস ও ডায়াবেটিক কিটোঅ্যাসিডোসিসে রেনাল কর্টেক্স রক্তের প্রায় ৫০% নতুন গ্লুকোজ তৈরি করে। এই প্রক্রিয়ায় গ্লুটামিন থেকে অ্যামোনিয়াম আয়ন তৈরি হয়ে অতিরিক্ত অ্যাসিড মূত্রের মাধ্যমে বের করে রক্তের ভারসাম্য রক্ষা করে। অপরদিকে বৃক্কের মেডুলা তুলনামূলক অক্সিজেনহীন হওয়ায় এটি কেবল অবায়বীয় গ্লাইকোলাইসিসের মাধ্যমে শক্তি তৈরি করে ল্যাকটেট উৎপন্ন করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('High-Yield Review: Core Principles of Metabolic Specialization', 'উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা: বিপাকীয় বিশেষায়নের মূলনীতি'),
          paragraphs: [
            l(
              'Organ-specific metabolic specialization reflects evolutionary adaptation to distinct functional demands. The liver acts as the master processing hub, utilizing glucokinase to buffer postprandial glucose surges and manufacturing ketones while lacking thiophorase (SCOT) to ensure they reach peripheral tissues. The brain is an obligate glucose consumer that adapts to ketones via MCT1 during starvation. The heart is an unrelenting aerobic pump relying primarily on fatty acid beta-oxidation, and skeletal muscle utilizes Type I and Type II fibers alongside phosphocreatine buffers and the Cori and Cahill cycles to manage energy fluxes.',
              'অঙ্গভিত্তিক বিপাকীয় বিশেষায়ন প্রতিটি অঙ্গের নিজস্ব শারীরবৃত্তীয় কাজের সাথে নিখুঁতভাবে সঙ্গতিপূর্ণ। যকৃৎ গ্লুকোকাইনেজের মাধ্যমে গ্লুকোজ নিয়ন্ত্রণ করে এবং থায়োফোরাজ এনজাইমবিহীন হওয়ায় নিজের তৈরি সমস্ত কিটোন রক্তে ছেড়ে দেয়। মস্তিষ্ক সাধারণ অবস্থায় গ্লুকোজ এবং অনাহারে MCT1 দিয়ে কিটোন ব্যবহার করে। হৃৎপিণ্ড অবিরাম বায়বীয় পাম্প হিসেবে মূলত ফ্যাটি অ্যাসিড পোড়ায়; আর কঙ্কালপেশি টাইপ-১ ও টাইপ-২ ফাইবার, ক্রিয়েটিন বাফার এবং কোরি ও কাহিল চক্রের মাধ্যমে বিভিন্ন পরিস্থিতিতে শক্তি উৎপাদন নিশ্চিত করে।'
            ),
            l(
              'White adipose tissue stores triacylglycerols and exports glycerol due to its lack of glycerol kinase, while brown adipose tissue dissipates the mitochondrial proton motive force via UCP-1 for non-shivering thermogenesis. In the kidneys, the cortex performs glutamine-coupled gluconeogenesis to maintain systemic acid-base balance, while the hypoxic medulla relies on anaerobic glycolysis. Together, these complementary tissues form a tightly integrated network that safeguards human energy homeostasis under all nutritional and environmental conditions.',
              'শ্বেত চর্বিকলা গ্লিসারল কাইনেজের অভাবে গ্লিসারল যকৃতে পাঠিয়ে দেয় এবং বাদামী চর্বিকলা UCP-1 দিয়ে তাপ তৈরি করে। বৃক্কে কর্টেক্স অম্ল-ক্ষার ভারসাম্য রক্ষার পাশাপাশি নতুন গ্লুকোজ তৈরি করে আর মেডুলা অবায়বীয় গ্লাইকোলাইসিস চালায়। একসাথে এই অঙ্গগুলো এমন একটি শক্তিশালী সমন্বিত চক্র গড়ে তোলে যা যেকোনো পুষ্টি সংকট বা কঠোর শারীরিক পরিস্থিতিতে মানবদেহের শক্তি ও জীবন রক্ষা করে।'
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
          heading: l('Enzymatic Topography and Membrane Transport Isoforms Across Tissues', 'অঙ্গভেদে এনজাইমের বিন্যাস ও ঝিল্লি পরিবহনকারী বাহকের আইসোফর্ম'),
          paragraphs: [
            l(
              'Metabolic specialization across mammalian organs is molecularly encoded by the differential expression of facilitative glucose transporters (GLUT isoforms) and hexokinase isozymes. Hepatocytes and pancreatic beta cells express GLUT2, a low-affinity, high-capacity bidirectional transporter (Km ~15–20 mM) that allows rapid, equilibrative flux of glucose across the plasma membrane proportional to ambient blood glucose concentrations. In hepatocytes, this is matched with glucokinase (Hexokinase IV, encoded by GCK), which displays a sigmoidal kinetic saturation curve with a high Km (~8–10 mM) and no product inhibition by glucose-6-phosphate, enabling maximum catalytic velocity during postprandial portal hyperglycemia.',
              'স্তন্যপায়ী প্রাণীর বিভিন্ন অঙ্গে বিপাকীয় বিশেষায়নের ভিত্তি হলো গ্লুকোজ বাহক (GLUT) এবং হেক্সোকাইনেজ এনজাইমের সুনির্দিষ্ট আইসোফর্ম। যকৃৎ এবং অগ্ন্যাশয়ের বিটা কোষে GLUT2 নামক কম সংবেদনশীল কিন্তু উচ্চ ক্ষমতার উভমুখী বাহক থাকে যা রক্তের গ্লুকোজের ওঠানামার সাথে সামঞ্জস্য রেখে কাজ করে। যকৃতে এর সাথে থাকে গ্লুকোকাইনেজ এনজাইম যার গ্লুকোজের প্রতি আকর্ষণ কম (Km ~৮-১০ মিলি মোলার) এবং এটি উৎপাদ দ্বারা বাধাগ্রস্ত হয় না; ফলে খাবার গ্রহণের পর রক্তে গ্লুকোজ বেড়ে গেলে এটি সর্বোচ্চ গতিতে গ্লুকোজ জমা করার কাজ করতে পারে।'
            ),
            l(
              'In contrast, the brain expresses GLUT1 in capillary endothelial cells forming the blood-brain barrier and GLUT3 in neuronal membranes. Both GLUT1 and GLUT3 possess extremely low Km values (~1.0–1.5 mM), ensuring that cerebral glucose uptake proceeds at near-maximal velocity (Vmax) even when peripheral blood glucose drops to hypoglycemic levels (3.0–3.5 mM). Striated muscle and white adipose tissue express GLUT4 (Km ~5 mM), which is sequestered intracellularly within tubulovesicular storage endosomes under basal conditions and translocated to the sarcolemma only upon stimulation by insulin-activated Akt or exercise-activated AMPK.',
              'বিপরীতে মস্তিষ্কের রক্ত-মস্তিষ্ক বাধার রক্তনালিতে GLUT1 এবং নিউরনের ঝিল্লিতে GLUT3 বাহক থাকে। উভয়েরই Km মান অত্যন্ত কম (~১.০-১.৫ মিলি মোলার), যার ফলে রক্তে গ্লুকোজ স্বাভাবিকের চেয়ে অনেক কমে গেলেও মস্তিষ্ক প্রায় সর্বোচ্চ গতিতে গ্লুকোজ গ্রহণ চালিয়ে যেতে পারে। কঙ্কালপেশি ও চর্বিকলায় থাকে GLUT4 বাহক (Km ~৫ মিলি মোলার), যা সাধারণ অবস্থায় কোষের ভেতরে থলিতে লুকানো থাকে এবং কেবল ইনসুলিন বা শারীরিক ব্যায়ামের সংকেত পেলেই কোষঝিল্লিতে উন্মুক্ত হয়ে গ্লুকোজ কোষে প্রবেশ করায়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Hepatic Metabolic Hub, Urea Cycle Exclusivity, and Thiophorase Absence', 'হেপাটিক বিপাকীয় হাব, ইউরিয়া চক্রের একচ্ছত্রতা ও থায়োফোরাজের অনুপস্থিতি'),
          paragraphs: [
            l(
              'The liver is the exclusive mammalian organ capable of executing the complete five-enzyme urea cycle (CPS-1, OTC, ASS, ASL, and ARG1), making it the obligate destination for systemic ammonia detoxification. Furthermore, hepatocytes possess the complete enzymatic cascade for both gluconeogenesis (pyruvate carboxylase, PEPCK, FBPase-1, and glucose-6-phosphatase) and ketogenesis (mitochondrial thiolase, HMG-CoA synthase-2, and HMG-CoA lyase). This enzymatic complement equips the liver to act as an unselfish donor, synthesizing glucose and ketone bodies to maintain whole-body fuel homeostasis during caloric deprivation.',
              'যকৃৎ হলো স্তন্যপায়ী প্রাণীর একমাত্র অঙ্গ যাতে পূর্ণাঙ্গ পাঁচ-ধাপ বিশিষ্ট ইউরিয়া চক্রের সমস্ত এনজাইম বিদ্যমান থাকে, যার ফলে সারা দেহের বিষাক্ত অ্যামোনিয়া দূর করতে রক্তকে যকৃতেই আসতে হয়। উপরন্তু যকৃতে গ্লুকোনিওজেনেসিসের সমস্ত এনজাইম এবং কিটোন তৈরির সমস্ত এনজাইম পূর্ণমাত্রায় থাকে। এই অসাধারণ এনজাইম বিন্যাস যকৃৎকে একটি নিঃস্বার্থ দাতায় পরিণত করেছে, যা উপবাসের সময় সারা দেহের বেঁচে থাকার জন্য অবিরাম গ্লুকোজ ও কিটোন বডি তৈরি করে রক্তে সরবরাহ করে।'
            ),
            l(
              'Crucially, the liver lacks succinyl-CoA:3-ketoacid CoA transferase (SCOT / thiophorase, encoded by OXCT1), the enzyme that activates acetoacetate to acetoacetyl-CoA by transferring a coenzyme A group from succinyl-CoA. In extrahepatic tissues like the brain and heart, SCOT catalyzes the committed step in ketone body utilization, generating acetoacetyl-CoA that is cleaved by thiolase into two acetyl-CoA molecules for entry into the citric acid cycle. The total absence of SCOT expression in hepatocytes prevents an autocatalytic futile cycle, ensuring that 100% of newly synthesized ketone bodies are exported systemically to nourish peripheral tissues.',
              'সবচেয়ে তাৎপর্যপূর্ণ বিষয় হলো, যকৃতে সাকসিনাইল-কোএ:৩-কিটোঅ্যাসিড কোএ ট্রান্সফারেজ (SCOT বা থায়োফোরাজ) এনজাইমটি জিনগতভাবেই সম্পূর্ণ অনুপস্থিত। মস্তিষ্ক ও হৃৎপিণ্ডের মতো বহিস্থ অঙ্গগুলোতে এই SCOT এনজাইমটি কিটোন বডি ব্যবহারের প্রথম ধাপ সম্পন্ন করে অ্যাসিটোঅ্যাসিটাইল-কোএ তৈরি করে যা পরে দুটি অ্যাসিটাইল-কোএ হয়ে টিসিএ চক্রে শক্তি দেয়। যকৃতে এই এনজাইম না থাকার কারণে যকৃৎ নিজে তৈরি করা কিটোন নিজে কখনোই ধ্বংস করতে পারে না এবং তৈরি করা সমস্ত কিটোন নিঃস্বার্থভাবে মস্তিষ্ক ও অন্যান্য অঙ্গে পৌঁছে যায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Myocardial Fatty Acid Beta-Oxidation Kinetics and Coronary Perfusion Limits', 'হৃদপেশির ফ্যাটি অ্যাসিড বিটা-জারণের গতিবিদ্যা ও করোনারি সংবহনের সীমাবদ্ধতা'),
          paragraphs: [
            l(
              'Cardiomyocytes express extremely high concentrations of fatty acid translocase (FAT/CD36) and plasma membrane fatty acid-binding proteins (FABPpm), allowing rapid, continuous uptake of albumin-bound long-chain non-esterified fatty acids (NEFAs). Once inside the sarcoplasm, long-chain acyl-CoA synthetases activate fatty acids to fatty acyl-CoAs, which are shuttled across the mitochondrial membranes via carnitine palmitoyltransferase-1B (CPT-1B) and CPT-2. Inside the mitochondrial matrix, complete beta-oxidation generates acetyl-CoA for the TCA cycle alongside stoichiometric equivalents of NADH and FADH2, driving the electron transport chain to sustain high ATP phosphorylation potentials.',
              'হৃদপেশির কোষে প্রচুর পরিমাণে ফ্যাটি অ্যাসিড ট্রান্সলোকেজ (CD36) এবং বাইন্ডিং প্রোটিন থাকে যা রক্তে অ্যালবুমিনের সাথে থাকা ফ্যাটি অ্যাসিডকে দ্রুত কোষে টেনে নেয়। কোষের ভেতর ফ্যাটি অ্যাসিড সক্রিয় হয়ে acyl-CoA তৈরি করে এবং CPT-1B ও CPT-2 বাহকের সাহায্যে মাইটোকন্ড্রিয়ায় প্রবেশ করে। মাইটোকন্ড্রিয়ার ভেতরে সম্পূর্ণ বিটা-জারণের মাধ্যমে প্রচুর অ্যাসিটাইল-কোএ, NADH ও FADH2 তৈরি হয় যা ইলেকট্রন ট্রান্সপোর্ট চেইনের মাধ্যমে বিপুল পরিমাণ এটিপি উৎপাদন করে হৃদপেশির পাম্পিং সচল রাখে।'
            ),
            l(
              'Because beta-oxidation requires more oxygen per mole of ATP generated than carbohydrate oxidation (P/O ratio of ~2.30 for palmitate vs ~2.67 for glucose), the heart operates near the upper limit of oxygen extraction even at rest. Resting myocardial oxygen extraction reaches 70% to 75%, leaving minimal extraction reserve; therefore, any increase in myocardial work (such as during physical exercise) must be met almost entirely by augmenting coronary blood flow through adenosine- and nitric oxide-mediated active coronary vasodilation. Under ischemic conditions, accumulation of fatty acyl-carnitines and long-chain acyl-CoAs exerts detergent effects on membranes, triggering lethal cardiac arrhythmias.',
              'ফ্যাটি অ্যাসিড পোড়াতে গ্লুকোজের চেয়ে বেশি অক্সিজেন খরচ হওয়ায় হৃৎপিণ্ড বিশ্রামে থাকা অবস্থাতেই রক্তের প্রায় ৭৫% অক্সিজেন শোষণ করে ফেলে। তাই ব্যায়ামের সময় হৃৎপিণ্ডের অতিরিক্ত অক্সিজেনের চাহিদা মেটাতে রক্ত থেকে বেশি অক্সিজেন নেওয়ার সুযোগ থাকে না; বরং করোনারি ধমনি প্রসারিত করে রক্ত প্রবাহ বৃদ্ধি করতে হয়। রক্ত চলাচল বন্ধ হলে ফ্যাটি অ্যাসিডের অপূর্ণ ভাঙনে কোষে ক্ষতিকর অন্তর্বর্তী উপাদান জমা হয় যা কোষঝিল্লি নষ্ট করে মারাত্মক অ্যারিথমিয়া ও আকস্মিক কার্ডিয়াক ডেথ ঘটায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Fiber-Type Metabolism, Creatine Kinase Kinetics, and the Cori/Cahill Loops', 'ফাইবার ধরনের বিপাকীয় বৈচিত্র্য, ক্রিয়েটিন কাইনেজ এবং কোরি ও কাহিল চক্র'),
          paragraphs: [
            l(
              'Skeletal muscle fibers are metabolically stratified into distinct functional classes. Type I slow oxidative fibers are characterized by dense capillary beds, high myoglobin concentrations, abundant mitochondria, and high levels of CPT-1 and citrate synthase, specializing in aerobic fatty acid oxidation and resisting fatigue. In contrast, Type IIb/IIx fast glycolytic fibers possess sparse mitochondria and low myoglobin, but display massive glycogen stores and high activities of glycogen phosphorylase and phosphofructokinase-1 (PFK-1), specialized for rapid bursts of anaerobic ATP production via substrate-level phosphorylation.',
              'কঙ্কালপেশির ফাইবারগুলো বিপাকীয়ভাবে ভিন্ন বৈশিষ্ট্যে বিভক্ত। টাইপ-১ ধীর গতির অক্সিডেটিভ ফাইবার প্রচুর রক্তনালি, মায়োগ্লোবিন এবং মাইটোকন্ড্রিয়া সমৃদ্ধ; এতে CPT-1 এনজাইম বেশি থাকে এবং এটি ফ্যাটি অ্যাসিড জারণের মাধ্যমে দীর্ঘ সময় ক্লান্তিহীনভাবে কাজ করতে পারে। অপরদিকে টাইপ-২ দ্রুত গ্লাইকোলাইটিক ফাইবারে মাইটোকন্ড্রিয়া কম থাকলেও প্রচুর গ্লাইকোজেন এবং PFK-1 এনজাইম থাকে যা অবায়বীয় গ্লাইকোলাইসিসের মাধ্যমে অত্যন্ত দ্রুত এটিপি তৈরি করে তীব্র গতির শক্তি সরবরাহ করে।'
            ),
            l(
              'To bridge sudden energy demands during muscular contraction, skeletal muscle relies on the creatine kinase reaction (Phosphocreatine + ADP + H+ <-> Creatine + ATP), which operates with an equilibrium constant favoring ATP generation and buffers cellular ATP for 6–8 seconds of maximal sprinting. When anaerobic glycolysis produces lactate, muscle exports it to the liver via monocarboxylate transporters (MCT4 in muscle, MCT1 in liver). In the liver, lactate is converted back to glucose via gluconeogenesis at an energetic cost of 6 ATP equivalents (the Cori cycle). Similarly, branched-chain amino acid catabolism in muscle generates alanine, which is exported to the liver to deliver gluconeogenic carbon and urea nitrogen (the Cahill cycle).',
              'পেশি সংকোচনের শুরুতে শক্তির শূন্যতা পূরণের জন্য পেশি ক্রিয়েটিন কাইনেজ এনজাইম ব্যবহার করে ফসফোক্রিয়েটিন থেকে দ্রুত এটিপি বানায় যা স্প্রিন্টের প্রথম ৬-৮ সেকেন্ড শক্তি যোগায়। এরপর অবায়বীয় গ্লাইকোলাইসিসে তৈরি ল্যাকটেট MCT4 বাহক দিয়ে রক্তে চলে যায় এবং যকৃতে গিয়ে ৬টি এটিপি খরচ করে কোরি চক্রের মাধ্যমে নতুন গ্লুকোজ তৈরি করে। একইভাবে পেশির অ্যামিনো অ্যাসিড ভাঙন থেকে তৈরি অ্যালানিন যকৃতে গিয়ে কাহিল চক্রের মাধ্যমে গ্লুকোজ এবং ইউরিয়া চক্রের মাধ্যমে ক্ষতিকর নাইট্রোজেন অপসারণ সম্পন্ন করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Adipocyte Lipolytic Gating, UCP-1 Thermogenesis, and Renal Acid-Base Flux', 'চর্বি ভাঙনের আণবিক নিয়ন্ত্রণ, UCP-1 তাপ উৎপাদন এবং বৃক্কের অম্ল-ক্ষার প্রবাহ'),
          paragraphs: [
            l(
              'White adipose tissue (WAT) lipolysis is tightly gated by the perilipin-1 (PLIN1) coat on lipid droplets. Phosphorylation of PLIN1 and hormone-sensitive lipase (HSL) by catecholamine-activated PKA liberates CGI-58 to activate adipose triglyceride lipase (ATGL), initiating sequential hydrolysis of triacylglycerols to diacylglycerols, monoacylglycerols, and free fatty acids. Because white adipocytes lack glycerol kinase (GK), the co-released glycerol cannot be re-esterified locally and is exported entirely to the liver, where hepatic glycerol kinase converts it to glycerol-3-phosphate for gluconeogenesis. In brown adipose tissue (BAT), cold-induced beta-3 adrenergic stimulation unleashes free fatty acids that allosterically activate uncoupling protein 1 (UCP-1 / thermogenin), short-circuiting the mitochondrial proton gradient to generate heat.',
              'শ্বেত চর্বিকলায় চর্বি ভাঙার কাজটি পেরিলিপিন-১ প্রোটিনের আস্তরণ দ্বারা নিয়ন্ত্রিত হয়। এপিনেফ্রিনের সংকেতে PKA পেরিলিপিন-১ ফসফরাইলেট করলে CGI-58 মুক্ত হয়ে ATGL এনজাইমকে চালু করে এবং ধাপে ধাপে ট্রাইগ্লিসারাইড ভেঙে ফ্যাটি অ্যাসিড ও গ্লিসারল তৈরি হয়। চর্বিকলায় গ্লিসারল কাইনেজ না থাকায় মুক্ত গ্লিসারল রক্তে চলে যায় এবং যকৃৎ তা দিয়ে নতুন গ্লুকোজ তৈরি করে। অন্যদিকে বাদামী চর্বিকলায় শীতের অনুভূতিতে বিটা-৩ রিসেপ্টর সক্রিয় হলে মুক্ত ফ্যাটি অ্যাসিড UCP-1 প্রোটিনকে চালু করে; যার ফলে মাইটোকন্ড্রিয়ার প্রোটন গ্র্যাডিয়েন্ট এটিপি না বানিয়ে সরাসরি তাপে রূপান্তরিত হয়।'
            ),
            l(
              'The kidneys partition their metabolic workload between the cortex and medulla based on tissue oxygen tension. The renal cortex, receiving high arterial blood flow and maintaining a pO2 of ~50 mmHg, contains abundant mitochondrial PEPCK, glucose-6-phosphatase, and glutaminase. Under conditions of metabolic acidosis or chronic starvation, renal cortical gluconeogenesis accelerates, utilizing glutamine as its primary substrate. Glutaminase and glutamate dehydrogenase cleave glutamine into alpha-ketoglutarate, releasing two ammonium ions (NH4+) that are secreted into tubular urine to eliminate proton equivalents, while alpha-ketoglutarate enters gluconeogenesis to generate new glucose and bicarbonate.',
              'বৃক্কের কর্টেক্স এবং মেডুলা অক্সিজেনের উপস্থিতির ওপর ভিত্তি করে কাজ করে। কর্টেক্সে প্রচুর রক্ত চলাচল ও অক্সিজেন থাকায় এতে PEPCK, গ্লুকোজ-৬-ফসফেটেজ এবং গ্লুটামিনেজ এনজাইম প্রচুর পরিমাণে থাকে। রক্তে অ্যাসিড বাড়লে বা দীর্ঘ উপবাসে কর্টেক্স গ্লুটামিন ব্যবহার করে নতুন গ্লুকোজ তৈরি করে। এই প্রক্রিয়ায় উৎপন্ন অ্যামোনিয়াম আয়ন মূত্রের মাধ্যমে অ্যাসিড বের করে রক্তের স্বাভাবিক pH বজায় রাখে। অপরদিকে মেডুলা অক্সিজেনহীন হওয়ায় কেবল অবায়বীয় গ্লাইকোলাইসিসে শক্তি পায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Integrated Network Mapping: Inter-Organ Substrate Flux and Homeostasis', 'সমন্বিত বিপাকীয় মানচিত্র: আন্তঃ-অঙ্গীয় পুষ্টিপ্রবাহ ও সার্বিক ভারসাম্য'),
          paragraphs: [
            l(
              'Human fuel economy is preserved across feeding and fasting cycles by dynamic inter-organ substrate trafficking. In the absorptive state, dietary glucose enters the liver via GLUT2/glucokinase, muscle via GLUT4, and adipose tissue via GLUT4, while dietary chylomicron lipids are cleared by endothelial lipoprotein lipase (LPL). In the postabsorptive and fasting states, hepatic glycogenolysis and gluconeogenesis export glucose to obligate consumers like the brain and erythrocytes, supported by adipose tissue lipolytic release of fatty acids and glycerol. During prolonged fasting, hepatic ketogenesis replaces glucose as the brain\'s primary fuel, markedly reducing systemic gluconeogenic demand.',
              'মানবদেহের জ্বালানি অর্থনীতি বিভিন্ন অঙ্গের মাঝে পারস্পরিক পুষ্টি আদান-প্রদানের মাধ্যমে বজায় থাকে। ভুক্ত অবস্থায় খাদ্য থেকে আসা গ্লুকোজ যকৃতে GLUT2 দিয়ে এবং পেশি ও চর্বিকলায় GLUT4 দিয়ে প্রবেশ করে, আর কাইলোমাইক্রনের চর্বি LPL দিয়ে টিস্যুতে জমা হয়। উপবাসের সময় যকৃৎ গ্লাইকোজেন ভেঙে এবং নতুন গ্লুকোজ তৈরি করে মস্তিষ্ক ও লোহিত কণিকায় পাঠায়, আর চর্বিকলা থেকে মুক্ত ফ্যাটি অ্যাসিড ও গ্লিসারল আসে। দীর্ঘ উপবাসে যকৃতের তৈরি কিটোন বডি মস্তিষ্কের প্রধান জ্বালানিতে পরিণত হয়, যার ফলে শরীরে নতুন গ্লুকোজ তৈরির চাপ বহুলাংশে কমে যায়।'
            ),
            l(
              'These inter-organ connections are cemented by reciprocal enzymatic blocks: the liver lacks thiophorase (SCOT) so it cannot consume the ketones it exports; skeletal muscle and adipose tissue lack glucose-6-phosphatase so their glycogen is purely for local consumption; and adipose tissue lacks glycerol kinase so its lipolytic glycerol must feed hepatic gluconeogenesis. Furthermore, the Cori and Cahill cycles continuously recycle peripheral carbon and nitrogen back to the liver. This profound physiological interdependence protects cellular bioenergetics and guarantees survival across extreme nutritional, metabolic, and physical challenges.',
              'এই আন্তঃ-অঙ্গীয় সংযোগগুলো বিভিন্ন এনজাইমের সুনির্দিষ্ট অনুপস্থিতির মাধ্যমে সুরক্ষিত থাকে: যকৃতে থায়োফোরাজ না থাকায় এটি নিজের তৈরি কিটোন খেতে পারে না; পেশি ও চর্বিকলায় গ্লুকোজ-৬-ফসফেটেজ না থাকায় তারা রক্তে গ্লুকোজ ছাড়তে পারে না; এবং চর্বিকলায় গ্লিসারল কাইনেজ না থাকায় গ্লিসারল যকৃতে যেতে বাধ্য হয়। এছাড়া কোরি ও কাহিল চক্র পেশির বর্জ্য পদার্থকে পুনরায় মূল্যবান জ্বালানিতে রূপান্তর করে। এই চমৎকার পারস্পরিক নির্ভরতাই মানুষকে যেকোনো প্রতিকূল পরিবেশ ও অনাহারের মধ্যেও সুস্থ ও জীবিত রাখে।'
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
          heading: l('Inter-Organ Nitrogen Flux: Cahill Cycle, Glutamine Synthase & Glutaminase Kinetics', 'আন্তঃ-অঙ্গীয় নাইট্রোজেন প্রবাহ: কাহিল চক্র, গ্লুটামিন সিন্থেজ ও গ্লুটামিনেজের গতিবিদ্যা'),
          paragraphs: [
            l(
              'During prolonged fasting, intense muscular contraction, or systemic catabolic illness, skeletal muscle proteolysis releases branched-chain amino acids (BCAAs: leucine, isoleucine, valine). Skeletal muscle expresses high levels of mitochondrial branched-chain amino acid aminotransferase (BCAT2), which transfers amino groups onto alpha-ketoglutarate to form glutamate and branched-chain alpha-keto acids. To prevent cytotoxic intra-myocellular accumulation of free ammonia, glutamate transfers its amino group onto pyruvate via alanine aminotransferase (ALT / GPT), generating L-alanine and regenerating alpha-ketoglutarate. Alanine is released into circulation at rates exceeding its representation in muscle protein by more than four-fold, representing the principal inter-organ nitrogen carrier of the Cahill cycle.',
              'দীর্ঘ অনাহার বা গুরুতর অসুস্থতায় কঙ্কালপেশির প্রোটিন ভেঙে ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিড (BCAA: লিউসিন, আইসোলিউসিন, ভ্যালিন) মুক্ত হয়। কঙ্কালপেশিতে প্রচুর BCAT2 এনজাইম থাকে যা এই অ্যামিনো অ্যাসিডের নাইট্রোজেন আলফা-কিটোগ্লুটারেটে স্থানান্তর করে গ্লুটামেট তৈরি করে। পেশিকোষে ক্ষতিকর মুক্ত অ্যামোনিয়া জমা হওয়া রোধ করতে গ্লুটামেট তার নাইট্রোজেন অ্যালানিন অ্যামিনোট্রান্সফারেজ (ALT) এনজাইমের মাধ্যমে পাইরুভেটে যুক্ত করে এল-অ্যালানিন তৈরি করে। এই অ্যালানিন পেশির স্বাভাবিক অনুপাতের চেয়ে চার গুণ বেশি হারে রক্তে নির্গত হয়, যা কাহিল চক্রের প্রধান নাইট্রোজেন বাহক হিসেবে কাজ করে।'
            ),
            l(
              'Simultaneously, skeletal muscle utilizes cytosolic glutamine synthetase (GLUL) to condense glutamate with free ammonia in an ATP-dependent reaction, manufacturing L-glutamine. Circulating glutamine serves as a non-toxic nitrogen shuttle with dual organ-specific fates: in the gut and immune cells, glutamine provides the essential fuel for rapid enterocyte proliferation; in the renal proximal convoluted tubule, apical sodium-coupled neutral amino acid transporters (SNAT3 / SLC38A3) import glutamine. Mitochondrial glutaminase (GLS1) and glutamate dehydrogenase (GDH) deaminate glutamine into alpha-ketoglutarate, liberating two NH4+ ions for tubular proton buffering and generating alpha-ketoglutarate to drive renal PEPCK gluconeogenesis.',
              'একই সাথে কঙ্কালপেশি গ্লুটামিন সিন্থেজ এনজাইম ব্যবহার করে মুক্ত অ্যামোনিয়াকে গ্লুটামেটের সাথে যুক্ত করে এল-গ্লুটামিন তৈরি করে। রক্তে প্রবাহিত এই গ্লুটামিন একটি নিরাপদ নাইট্রোজেন বাহক হিসেবে কাজ করে: অন্ত্রের কোষ ও রোগ প্রতিরোধক কোষগুলো এটি ব্যবহার করে দ্রুত বংশবৃদ্ধি করে; আর বৃক্কে এটি SNAT3 বাহক দিয়ে কোষে প্রবেশ করে। বৃক্কের মাইটোকন্ড্রিয়ায় গ্লুটামিনেজ এনজাইম এই গ্লুটামিন ভেঙে দুটি অ্যামোনিয়াম আয়ন মুক্ত করে যা মূত্রের অতিরিক্ত অ্যাসিড দূর করে এবং উৎপন্ন আলফা-কিটোগ্লুটারেট থেকে নতুন গ্লুকোজ তৈরি করে রক্তের ভারসাম্য রক্ষা করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Molecular Architecture of Brown/Beige Thermogenesis and BAT PET-CT Imaging', 'বাদামী/বেইজ চর্বিকলার তাপ উৎপাদনের আণবিক গঠন ও পিইটি-সিটি ইমেজিং'),
          paragraphs: [
            l(
              'Brown adipose tissue (BAT) and inducible beige (brite) adipocytes within white adipose depots originate from distinct developmental lineages: classical brown adipocytes derive from Myf5-positive dermomyotome precursors sharing a common lineage with skeletal muscle, driven by transcription factors PRDM16, PGC-1-alpha, and PPAR-gamma. The inner mitochondrial membrane of brown adipocytes is packed with uncoupling protein 1 (UCP-1 / thermogenin), a 32-kDa member of the mitochondrial anion carrier superfamily containing six transmembrane alpha-helices. Under basal conditions, UCP-1 proton conductance is allosterically inhibited by physiological purine nucleotides (ATP, ADP, GTP, GDP). Upon cold exposure, sympathetic nerve terminals release norepinephrine, which engages beta-3 adrenergic receptors, stimulating cAMP/PKA signaling and activating ATGL and HSL.',
              'বাদামী চর্বিকলা (BAT) এবং শ্বেত চর্বিকলার মাঝে উদ্ভূত বেইজ চর্বিকলা ভিন্ন ভ্রূণীয় উৎস থেকে তৈরি হয়: ধ্রুপদী বাদামী চর্বি Myf5-পজিটিভ প্রিকার্সর থেকে তৈরি হয় যা কঙ্কালপেশির সাথে একই বংশোদ্ভূত এবং PRDM16 ও PGC-1-আলফা দ্বারা নিয়ন্ত্রিত। বাদামী চর্বির মাইটোকন্ড্রিয়ার ভেতরের ঝিল্লিতে UCP-1 (থার্মোজেনিন) নামক ৩২ কিলোডাল্টনের বিশেষ প্রোটিন থাকে। স্বাভাবিক অবস্থায় এটিপি বা জিটিপি এই প্রোটিনকে বন্ধ রাখে। কিন্তু শীতের সংস্পর্শে এলে সিমপ্যাথেটিক স্নায়ু এপিনেফ্রিন নিঃসরণ করে বিটা-৩ রিসেপ্টরের মাধ্যমে PKA সক্রিয় করে এবং ATGL ও HSL দ্বারা লাইপোলাইসিস চালু করে।'
            ),
            l(
              'Unesterified long-chain fatty acids released by lipolysis overcome nucleotide inhibition and directly activate UCP-1 proton transport, shuttling matrix-bound protons back across the inner membrane. This dissipates the proton motive force (Delta-p) generated by the respiratory chain as heat rather than coupling it to ATP synthase (FoF1-ATPase), producing non-shivering thermogenesis. Because active brown adipose tissue displays an immense metabolic rate and requires rapid fuel replenishment, it dramatically upregulates GLUT4 and fatty acid uptake. In clinical oncology, this high glucose consumption manifests as intense bilateral fluorodeoxyglucose (18F-FDG) uptake in the cervical, supraclavicular, and paravertebral regions on PET-CT scans, frequently mimicking metastatic lymphadenopathy unless recognized as physiological brown fat activation.',
              'লাইপোলাইসিসে তৈরি মুক্ত ফ্যাটি অ্যাসিডগুলো UCP-1 এর নিউক্লিওটাইড বাধা দূর করে সরাসরি প্রোটিনটিকে চালু করে দেয়, যার ফলে মাইটোকন্ড্রিয়ার প্রোটনগুলো এটিপি সিন্থেজকে এড়িয়ে সরাসরি ঝিল্লি ভেদ করে ভেতরে ঢুকে যায় এবং সমস্ত শক্তি তাপে পরিণত হয়। সক্রিয় বাদামী চর্বি প্রচুর গ্লুকোজ ও ফ্যাটি অ্যাসিড গ্রহণ করে শরীর গরম রাখে। ক্যান্সার নির্ণয়ে ব্যবহৃত পিইটি-সিটি (PET-CT) স্ক্যানে রোগীর শীত লাগলে ঘাড় ও কাঁধের এই বাদামী চর্বিগুলো প্রচুর 18F-FDG গ্লুকোজ গ্রহণ করে উজ্জ্বল হয়ে ওঠে, যা অনেক সময় না বুঝলে ভুলবশত ক্যান্সারের মেটাস্ট্যাসিস হিসেবে বিভ্রান্তি সৃষ্টি করতে পারে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An integrated organ specialization diagram detailing inter-organ fuel flows across the human body: hepatic glucokinase buffering and altruistic ketone synthesis lacking thiophorase, cerebral glucose dependence and MCT1 keto-adaptation, continuous myocardial aerobic fatty acid oxidation, skeletal muscle fiber stratification and phosphocreatine buffering, the Cori and Cahill cycles, adipose lipolysis lacking glycerol kinase, brown fat UCP-1 thermogenesis, and renal cortex gluconeogenesis.',
      'মানবদেহের বিভিন্ন অঙ্গের মাঝে জ্বালানি আদান-প্রদানের সমন্বিত মানচিত্র: যকৃতের গ্লুকোকাইনেজ নিয়ন্ত্রণ ও থায়োফোরাজবিহীন কিটোন তৈরি, মস্তিষ্কের গ্লুকোজ নির্ভরতা ও MCT1 কিটো-অভিযোজন, হৃদপেশির অবিরাম ফ্যাটি অ্যাসিড জারণ, কঙ্কালপেশির ফাইবার ও ক্রিয়েটিন বাফার, কোরি ও কাহিল আন্তঃ-অঙ্গীয় চক্র, চর্বিকলার লাইপোলাইসিস, বাদামী চর্বির UCP-1 তাপ উৎপাদন এবং বৃক্কের কর্টেক্সে গ্লুকোনিওজেনেসিস।'
    ),
    steps: [
      l('Liver buffers systemic glucose via glucokinase and exports ketones lacking thiophorase.', 'যকৃৎ গ্লুকোকাইনেজ দিয়ে গ্লুকোজ নিয়ন্ত্রণ করে এবং থায়োফোরাজ না থাকায় কিটোন রপ্তানি করে।'),
      l('Brain imports glucose via GLUT1/GLUT3 and upregulates MCT1 for ketones in starvation.', 'মস্তিষ্ক GLUT1/GLUT3 দিয়ে গ্লুকোজ নেয় এবং অনাহারে MCT1 দিয়ে কিটোন ব্যবহার করে।'),
      l('Heart derives 60–70% of resting ATP from fatty acid oxidation via dense mitochondria.', 'হৃৎপিণ্ড ঘন মাইটোকন্ড্রিয়ার সাহায্যে ৬০-৭০% শক্তি ফ্যাটি অ্যাসিড জারণ থেকে উৎপাদন করে।'),
      l('Skeletal muscle buffers sprinting via phosphocreatine and routes lactate/alanine to liver.', 'কঙ্কালপেশি ফসফোক্রিয়েটিন দিয়ে শক্তি ধরে রাখে এবং কোরি ও কাহিল চক্রে যকৃতে উপাদান পাঠায়।'),
      l('White adipose exports glycerol lacking glycerol kinase, and brown fat generates heat via UCP-1.', 'শ্বেত চর্বি গ্লিসারল কাইনেজ না থাকায় গ্লিসারল পাঠায় এবং বাদামী চর্বি UCP-1 দিয়ে তাপ বানায়।'),
      l('Renal cortex couples gluconeogenesis to glutamine deamination for acid-base balance.', 'বৃক্কের কর্টেক্স অম্ল-ক্ষার ভারসাম্য রক্ষার পাশাপাশি গ্লুটামিন থেকে নতুন গ্লুকোজ তৈরি করে।'),
    ],
  },
  assessment: {
    question: l(
      'A biomedical researcher is investigating fuel kinetics in primary cell cultures isolated from different human tissues. Tissue Sample X demonstrates robust synthesis of acetoacetate and beta-hydroxybutyrate from palmitate under conditions of glucagon stimulation. However, when radiolabeled [14C]-acetoacetate is added to the culture medium, Tissue Sample X shows zero incorporation of [14C] into carbon dioxide (CO2) or citric acid cycle intermediates. Which enzyme deficiency is responsible for this metabolic characteristic, and which tissue was sampled?',
      'একজন গবেষক বিভিন্ন মানব টিস্যুর প্রাথমিক কোষ কালচারে জ্বালানি গতিবিদ্যা নিয়ে গবেষণা করছেন। টিস্যু নমুনা X গ্লুকাগনের উপস্থিতিতে প্যালমিটেট থেকে প্রচুর পরিমাণে অ্যাসিটোঅ্যাসিটেট এবং বিটা-হাইড্রোক্সিবিউটাইরেট তৈরি করতে সক্ষম। কিন্তু কালচার মাধ্যমে তেজস্ক্রিয় [14C]-অ্যাসিটোঅ্যাসিটেট দেওয়া হলে নমুনা X এটি জারিত করে কার্বন ডাই-অক্সাইড (CO2) বা টিসিএ চক্রের উপাদান তৈরি করতে সম্পূর্ণ ব্যর্থ হয়। কোন এনজাইমের অনুপস্থিতি এই বৈশিষ্ট্যের জন্য দায়ী এবং কোন টিস্যুটি নমুনা হিসেবে নেওয়া হয়েছিল?'
    ),
    options: [
      l(
        'Succinyl-CoA:3-ketoacid CoA transferase (thiophorase / SCOT); sampled tissue is the Liver.',
        'সাকসিনাইল-কোএ:৩-কিটোঅ্যাসিড কোএ ট্রান্সফারেজ (থায়োফোরাজ / SCOT); সংগৃহীত নমুনাটি হলো যকৃৎ।'
      ),
      l(
        'Glycerol kinase; sampled tissue is Skeletal Muscle.',
        'গ্লিসারল কাইনেজ; সংগৃহীত নমুনাটি হলো কঙ্কালপেশি।'
      ),
      l(
        'Glucose-6-phosphatase; sampled tissue is White Adipose Tissue.',
        'গ্লুকোজ-৬-ফসফেটেজ; সংগৃহীত নমুনাটি হলো শ্বেত চর্বিকলা।'
      ),
      l(
        'Uncoupling protein 1 (UCP-1); sampled tissue is the Myocardium.',
        'আনকাপলিং প্রোটিন ১ (UCP-1); সংগৃহীত নমুনাটি হলো মায়োকার্ডিয়াম।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'The liver possesses the enzymatic machinery for ketogenesis (mitochondrial HMG-CoA synthase-2 and HMG-CoA lyase) and produces abundant acetoacetate and beta-hydroxybutyrate during fasting or glucagon stimulation. However, the liver completely lacks the enzyme succinyl-CoA:3-ketoacid CoA transferase (SCOT / thiophorase, encoded by OXCT1), which is required to transfer a coenzyme A moiety from succinyl-CoA onto acetoacetate to form acetoacetyl-CoA. Without thiophorase, hepatocytes cannot activate acetoacetate into acetoacetyl-CoA and therefore cannot oxidize ketone bodies to CO2 in the citric acid cycle. This physiological adaptation ensures that all ketone bodies manufactured by the liver are preserved for export to extrahepatic tissues such as the brain and heart.',
      'যকৃতে কিটোজেনেসিসের সমস্ত এনজাইম (যেমন HMG-CoA সিন্থেজ ও HMG-CoA লাইয়েজ) থাকায় এটি উপবাস বা গ্লুকাগনের প্রভাবে প্রচুর কিটোন বডি বানাতে পারে। কিন্তু যকৃতে সাকসিনাইল-কোএ:৩-কিটোঅ্যাসিড কোএ ট্রান্সফারেজ (SCOT বা থায়োফোরাজ) এনজাইমটি জিনগতভাবেই সম্পূর্ণ অনুপস্থিত থাকে, যা কিটোন বডিকে অ্যাসিটোঅ্যাসিটাইল-কোএ-তে রূপান্তর করার জন্য আবশ্যক। থায়োফোরাজ না থাকার কারণে হেপাটোসাইট কিটোন বডি ভেঙে টিসিএ চক্রে পুড়িয়ে CO2 বানাতে পারে না। এই বিশেষ শারীরবৃত্তীয় বৈশিষ্ট্যের কারণেই যকৃতের তৈরি সমস্ত কিটোন অক্ষত অবস্থায় মস্তিষ্ক ও হৃৎপিণ্ডে পৌঁছে তাদের জীবন রক্ষা করতে পারে।'
    ),
  },
}
