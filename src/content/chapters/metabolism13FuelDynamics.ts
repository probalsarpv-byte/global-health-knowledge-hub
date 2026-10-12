import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const fuelRefs = [
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
    id: 'marks-medbiochem-6e-ch19',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 19: The Fed or Absorptive State",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
  {
    id: 'marks-medbiochem-6e-ch24',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 24: The Fasted State and Prolonged Starvation",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

const fuelOrgan3DData: Organ3DExplorerContent = {
  title: l('3D Multi-Organ Temporal Fuel Coordination & Starvation Adaptation', '৩ডি বহু-অঙ্গীয় সময়ানুগ জ্বালানি সমন্বয় ও অনাহার অভিযোজন'),
  disclaimer: l(
    'Interactive 3D anatomical teaching visualization: touch or drag to rotate in 3D coordinate space; observe how the liver, brain, skeletal muscle, kidneys, and pancreas orchestrate metabolic shifts from the fed state through prolonged starvation.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘোরাতে স্পর্শ বা ড্র্যাগ করুন; ভুক্ত অবস্থা থেকে শুরু করে দীর্ঘমেয়াদী অনাহারে যকৃৎ, মস্তিষ্ক, কঙ্কালপেশি, বৃক্ক ও অগ্ন্যাশয় কীভাবে জ্বালানি প্রবাহ নিয়ন্ত্রণ করে তা প্রত্যক্ষ করুন।'
  ),
  description: l(
    'Fuel homeostasis spans hepatic glycogen reserves, skeletal muscle proteolysis and sparing, renal gluconeogenesis, pancreatic endocrine sensing, and cerebral keto-adaptation via blood-brain barrier monocarboxylate transporters.',
    'জ্বালানি সমতা রক্ষা সমগ্র দেহে পরিচালিত হয়: যকৃতের গ্লাইকোজেন ভাণ্ডার, কঙ্কালপেশির প্রোটিন ভাঙন ও সঞ্চয়, বৃক্কে গ্লুকোনিওজেনেসিস, অগ্ন্যাশয়ের হরমোন নিঃসরণ এবং রক্ত-মস্তিষ্ক বাধার মাধ্যমে মস্তিষ্কে কিটোন বডির ব্যবহার।'
  ),
  organs: [
    {
      id: 'organ-liver-fuel',
      name: l('Liver (Master Metabolic Buffer & Ketone Factory)', 'যকৃৎ (প্রধান বিপাকীয় বাফার ও কিটোন তৈরির কারখানা)'),
      latinName: 'Hepar',
      system: l('Digestive / Metabolic System', 'পরিপাক ও বিপাকীয় তন্ত্র'),
      cavity: l('Abdominal Cavity (Right Hypochondrium)', 'উদর গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 28, y: 218, z: 12 },
      color: '#b45309',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'The liver buffers systemic blood glucose, storing ~100g of glycogen in the fed state, initiating glycogenolysis during the first 16 hours of fasting, and manufacturing acetoacetate and beta-hydroxybutyrate during prolonged starvation.',
        'যকৃৎ রক্তে গ্লুকোজের মাত্রা নিয়ন্ত্রণ করে, ভুক্ত অবস্থায় প্রায় ১০০ গ্রাম গ্লাইকোজেন জমা রাখে, উপবাসের প্রথম ১৬ ঘণ্টায় গ্লাইকোজেন ভেঙে গ্লুকোজ যোগায় এবং দীর্ঘস্থায়ী অনাহারে কিটোন বডি তৈরি করে।'
      ),
      spatialRelations: l(
        'Located in the right upper abdominal quadrant beneath the diaphragm; receives nutrient-rich portal blood from the intestines in the fed state and unesterified free fatty acids from adipose tissue during fasting.',
        'মধ্যচ্ছদার নিচে ডান উদরে অবস্থিত; ভুক্ত অবস্থায় অন্ত্র থেকে পুষ্টিসমৃদ্ধ পোর্টাল রক্ত গ্রহণ করে এবং অনাহারে চর্বিকলা থেকে নির্গত মুক্ত ফ্যাটি অ্যাসিড গ্রহণ করে।'
      ),
      physiology: l(
        'Executes gluconeogenesis from lactate, glycerol, and alanine; lacks beta-ketoacyl-CoA transferase (thiophorase), preventing self-consumption of the ketone bodies it synthesizes for the brain.',
        'ল্যাকটেট, গ্লিসারল ও অ্যালানিন থেকে গ্লুকোনিওজেনেসিস সম্পন্ন করে; কিন্তু এতে থায়োফোরাজ এনজাইম না থাকায় এটি নিজে তৈরি করা কিটোন বডি নিজে ধ্বংস করতে পারে না।'
      ),
      nutritionConnection: l(
        'Dietary carbohydrate refeeding immediately suppresses hepatic gluconeogenesis and ketogenesis via insulin release, refilling depleted glycogen stores.',
        'খাবারে শর্করা গ্রহণ করলে ইনসুলিন নিঃসরণের মাধ্যমে যকৃতের গ্লুকোনিওজেনেসিস ও কিটোজেনেসিস দ্রুত বন্ধ হয়ে যায় এবং নিঃশেষিত গ্লাইকোজেন ভাণ্ডার পুনরায় ভরে ওঠে।'
      ),
      clinicalSignificance: l(
        'Hepatic glycogen depletion after 24 hours of fasting forces reliance on gluconeogenesis; impaired hepatic beta-oxidation causes hypoketotic hypoglycemia.',
        '২৪ ঘণ্টা উপবাসে যকৃতের গ্লাইকোজেন শেষ হয়ে গেলে শরীর গ্লুকোনিওজেনেসিসের ওপর নির্ভরশীল হয়; ফ্যাটি অ্যাসিড জারণে ত্রুটি থাকলে হাইপোকিটোটিক হাইপোগ্লাইসেমিয়া হয়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-brain-fuel',
      name: l('Brain (Obligate Glucose Consumer & Keto-Adaptation)', 'মস্তিষ্ক (বাধ্যতামূলক গ্লুকোজ গ্রাহক ও কিটো-অভিযোজন)'),
      latinName: 'Cerebrum',
      system: l('Central Nervous System', 'কেন্দ্রীয় স্নায়ুতন্ত্র'),
      cavity: l('Cranial Cavity', 'করোটিকা গহ্বর'),
      position3D: { x: 0, y: 48, z: 0 },
      color: '#9333ea',
      highlightColor: '#c084fc',
      shapeType: 'brain',
      description: l(
        'The brain consumes ~120g of glucose daily in the fed state; during starvation beyond 48 hours, blood-brain barrier MCT1 transporters upregulate, allowing ketones to supply up to 70% of cerebral energy.',
        'স্বাভাবিক অবস্থায় মস্তিষ্ক দৈনিক প্রায় ১২০ গ্রাম গ্লুকোজ খরচ করে; কিন্তু ৪৮ ঘণ্টার বেশি অনাহারে রক্ত-মস্তিষ্ক বাধার MCT1 বাহক বৃদ্ধি পেয়ে কিটোন দিয়ে ৭০% শক্তি মেটায়।'
      ),
      spatialRelations: l(
        'Enclosed within the rigid neurocranium; protected by the blood-brain barrier whose tight junctions exclude hydrophobic albumin-bound fatty acids while permitting ketone body transport.',
        'করোটিকার ভেতরে অবস্থিত; রক্ত-মস্তিষ্ক বাধা দিয়ে সুরক্ষিত থাকে যার কারণে অ্যালবুমিনে যুক্ত ফ্যাটি অ্যাসিড প্রবেশ করতে পারে না কিন্তু কিটোন বডি সহজে প্রবেশ করতে পারে।'
      ),
      physiology: l(
        'Converts beta-hydroxybutyrate into acetoacetate, then to acetoacetyl-CoA via thiophorase, generating acetyl-CoA for the TCA cycle and sparing whole-body muscle protein breakdown.',
        'থায়োফোরাজ এনজাইম ব্যবহার করে বিটা-হাইড্রোক্সিবিউটাইরেটকে অ্যাসিটাইল-কোএ-তে রূপান্তর করে টিসিএ চক্র চালায়, যা সারা শরীরের কঙ্কালপেশির প্রোটিন ভাঙন নাটকীয়ভাবে কমিয়ে দেয়।'
      ),
      nutritionConnection: l(
        'Ketogenic diets mimic the starvation state, elevating circulating beta-hydroxybutyrate to reduce epileptic neuronal excitability and modify cellular signaling.',
        'কিটোজেনিক ডায়েট অনাহারের মতো পরিবেশ তৈরি করে রক্তে বিটা-হাইড্রোক্সিবিউটাইরেট বৃদ্ধি করে যা মৃগীরোগে স্নায়বিক অতি-উত্তেজনা উল্লেখযোগ্যভাবে হ্রাস করে।'
      ),
      clinicalSignificance: l(
        'Hypoglycemia below 40 mg/dL produces neuroglycopenia, seizures, coma, and brain damage; cerebral keto-adaptation is the critical evolutionary survival mechanism during prolonged famine.',
        'রক্তে গ্লুকোজ ৪০ মিগ্রা/ডেসিলিটারের নিচে নামলে নিউরোগ্লাইকোপেনিয়া, খিঁচুনি ও কোমা দেখা দেয়; দীর্ঘ অনাহারে মস্তিষ্কের কিটো-অভিযোজন বেঁচে থাকার প্রধানতম বিবর্তনীয় ঢাল।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-muscle-fuel',
      name: l('Skeletal Muscle (Early Proteolysis & Late Protein Sparing)', 'কঙ্কালপেশি (প্রাথমিক প্রোটিন ক্ষয় ও পরবর্তী প্রোটিন সংরক্ষণ)'),
      latinName: 'Musculus skeletalis',
      system: l('Musculoskeletal System', 'পেশিতন্ত্র'),
      cavity: l('Somatic Framework', 'দেহকাঠামো'),
      position3D: { x: 0, y: 130, z: -8 },
      color: '#dc2626',
      highlightColor: '#f87171',
      shapeType: 'skeleton',
      description: l(
        'Skeletal muscle exports alanine and glutamine in early fasting (75g protein/day) to fuel hepatic gluconeogenesis, but switches to fatty acids during starvation, reducing proteolysis to 15-20g/day to spare vital organs.',
        'উপবাসের শুরুতে কঙ্কালপেশি দৈনিক ৭৫ গ্রাম প্রোটিন ভেঙে অ্যালানিন ও গ্লুটামিন হিসেবে যকৃতে পাঠায়; তবে দীর্ঘ অনাহারে ফ্যাটি অ্যাসিড ব্যবহার করে প্রোটিন ক্ষয় কমিয়ে ১৫-২০ গ্রামে নামিয়ে আনে।'
      ),
      spatialRelations: l(
        'Comprises ~40% of total adult body mass, anchoring to axial and appendicular skeletons; stores ~400g of glycogen for its own contraction, lacking glucose-6-phosphatase to release free glucose.',
        'প্রাপ্তবয়স্কদের মোট ওজনের প্রায় ৪০% পেশি নিয়ে গঠিত; এতে প্রায় ৪০০ গ্রাম গ্লাইকোজেন থাকে যা কেবল নিজের কাজের জন্য খরচ হয় কারণ এতে গ্লুকোজ-৬-ফসফেটেজ এনজাইম নেই।'
      ),
      physiology: l(
        'During early starvation, branched-chain amino acids (Leu, Ile, Val) are transaminated to pyruvate to form alanine for the Cahill cycle; in late starvation, muscle switches almost entirely to fatty acid oxidation.',
        'প্রাথমিক উপবাসে ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিড ভেঙে অ্যালানিন বানিয়ে ক্যাহিল চক্র চালায়; কিন্তু গভীর অনাহারে পেশি সম্পূর্ণভাবে ফ্যাটি অ্যাসিড জারণের ওপর নির্ভর করে।'
      ),
      nutritionConnection: l(
        'Chronic starvation causes severe muscular wasting (cachexia, marasmus); preservation of respiratory diaphragm muscle mass is the limiting determinant of survival.',
        'দীর্ঘমেয়াদী অনাহারে মারাত্মক পেশিক্ষয় (ম্যারাসমাস বা ক্যাকেক্সিয়া) ঘটে; শ্বাস-প্রশ্বাসের মধ্যচ্ছদা পেশির অপচয়ই শেষ পর্যন্ত জীবনাবসানের মূল কারণ হয়ে দাঁড়ায়।'
      ),
      clinicalSignificance: l(
        'Exhaustion of adipose triacylglycerols after 6–8 weeks of starvation triggers terminal accelerated muscle breakdown, causing respiratory failure and death.',
        '৬-৮ সপ্তাহ অনাহারে চর্বি শেষ হয়ে গেলে দেহ পুনরায় মারাত্মকভাবে কাঠামোগত পেশি ভাঙতে শুরু করে, যার ফলে ফুসফুসের শ্বাসপেশি অকেজো হয়ে মৃত্যু ঘটে।'
      ),
      sectionId: 'practice',
    },
    {
      id: 'organ-kidneys-fuel',
      name: l('Kidneys (Late Starvation Gluconeogenesis & Acid-Base Buffering)', 'বৃক্ক (বিলম্বিত অনাহারে গ্লুকোনিওজেনেসিস ও অম্ল-ক্ষার ভারসাম্য)'),
      latinName: 'Renes',
      system: l('Excretory / Urinary System', 'রেচন তন্ত্র'),
      cavity: l('Retroperitoneal Space (T12-L3)', 'রেট্রোপেরিটোনিয়াল স্থান (T12-L3)'),
      position3D: { x: -32, y: 172, z: 22 },
      color: '#e11d48',
      highlightColor: '#fb7185',
      shapeType: 'kidneys',
      description: l(
        'During prolonged starvation, renal cortical gluconeogenesis increases dramatically, providing up to 40-50% of systemic endogenous glucose while deamidating glutamine to buffer ketoacidosis.',
        'দীর্ঘস্থায়ী অনাহারে বৃক্কের কর্টেক্সে গ্লুকোনিওজেনেসিস তীব্রভাবে বৃদ্ধি পায়, যা মোট গ্লুকোজের ৪০-৫০% তৈরি করে এবং গ্লুটামিন থেকে অ্যামোনিয়া তৈরি করে রক্তের কিটোঅ্যাসিডোসিস প্রতিহত করে।'
      ),
      spatialRelations: l(
        'Paired retroperitoneal organs; proximal tubular epithelial cells express high levels of PEPCK, fructose-1,6-bisphosphatase, and glucose-6-phosphatase along with mitochondrial glutaminase.',
        'উদর গহ্বরের পেছনের প্রাচীরে অবস্থিত; এর প্রক্সিমাল টিউবিউলে প্রচুর PEPCK, ফ্রুক্টোজ-১,৬-বিসফসফেটেজ এবং গ্লুটামিনেজ এনজাইম থাকে।'
      ),
      physiology: l(
        'Glutaminase cleaves glutamine into glutamate and NH3; glutamate dehydrogenase releases a second NH3 and alpha-ketoglutarate, which enters gluconeogenesis while NH3 traps luminal H+ as NH4+.',
        'গ্লুটামিনেজ গ্লুটামিন ভেঙে অ্যামোনিয়া ও আলফা-কিটোগ্লুটারেট তৈরি করে; আলফা-কিটোগ্লুটারেট নতুন গ্লুকোজ তৈরি করে এবং অ্যামোনিয়া মূত্রের অম্লতা কমিয়ে ইউরিনে নির্গত হয়।'
      ),
      nutritionConnection: l(
        'Water and electrolyte losses accompany early fasting natriuresis and ketoacid excretion; adequate rehydration prevents acute volume contraction during therapeutic fasting.',
        'উপবাসের শুরুতে সোডিয়াম ও পানির ক্ষয় হয়; চিকিৎসামূলক উপবাসে পর্যাপ্ত পানি ও লবণ গ্রহণ রক্তের আয়তন ঠিক রাখতে সাহায্য করে।'
      ),
      clinicalSignificance: l(
        'Renal gluconeogenesis compensates for declining hepatic capacity in end-stage fasting; impaired ammoniagenesis exacerbates systemic metabolic acidosis.',
        'অনাহারের শেষ পর্যায়ে যকৃতের সক্ষমতা কমলে বৃক্ক গ্লুকোজের ঘাটতি পূরণ করে; এখানে অ্যামোনিয়া তৈরিতে বাধা এলে মারাত্মক মেটাবলিক অ্যাসিডোসিস দেখা দেয়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-pancreas-fuel',
      name: l('Pancreas (Islet Endocrine Master Switch: Insulin vs Glucagon)', 'অগ্ন্যাশয় (আইলেটসের মাস্টার সুইচ: ইনসুলিন বনাম গ্লুকাগন)'),
      latinName: 'Pancreas',
      system: l('Endocrine & Digestive System', 'অন্তঃক্ষরা ও পরিপাক তন্ত্র'),
      cavity: l('Retroperitoneal Space (Epigastrium)', 'রেট্রোপেরিটোনিয়াল স্থান (এপিগ্যাস্ট্রিয়াম)'),
      position3D: { x: 12, y: 236, z: 10 },
      color: '#eab308',
      highlightColor: '#fde047',
      shapeType: 'pancreas',
      description: l(
        'The endocrine islets of Langerhans act as the primary metabolic command center, releasing anabolic insulin in response to fed-state hyperglycemia and switching to catabolic glucagon during fasting.',
        'ল্যাঙ্গারহ্যান্সের অন্তঃক্ষরা আইলেটস মানবদেহের প্রধান বিপাকীয় নিয়ন্ত্রণ কেন্দ্র; ভুক্ত অবস্থায় রক্তে গ্লুকোজ বাড়লে ইনসুলিন এবং উপবাসকালে ক্যাটাবলিক গ্লুকাগন নিঃসরণ করে।'
      ),
      spatialRelations: l(
        'Extends horizontally across the posterior abdominal wall from the C-loop of the duodenum to the splenic hilum, secreting hormones directly into the portal vein destined for the liver.',
        'ডিওডেনাম থেকে প্লীহা পর্যন্ত বিস্তৃত; সরাসরি হেপাটিক পোর্টাল শিরায় হরমোন নিঃসরণ করে যার ফলে যকৃৎ শরীরের যেকোনো অংশের চেয়ে সর্বোচ্চ ঘনত্বের হরমোন পায়।'
      ),
      physiology: l(
        'Beta-cell GLUT2/glucokinase sensing triggers insulin secretion at blood glucose >100 mg/dL; falling glucose releases alpha-cell inhibition, elevating portal glucagon to activate glycogenolysis.',
        'রক্তে গ্লুকোজ ১০০ মিগ্রা/ডেসিলিটার ছাড়ালে বিটা কোষ ইনসুলিন ছাড়ে; গ্লুকোজ কমে গেলে আলফা কোষ থেকে গ্লুকাগন বের হয়ে যকৃতের গ্লাইকোজেন ভাঙন চালু করে।'
      ),
      nutritionConnection: l(
        'High-carbohydrate meals spike the insulin-to-glucagon ratio up to 70:1, promoting lipogenesis; prolonged fasting drops the ratio below 0.5:1, unleashing uninhibited lipolysis.',
        'শর্করাবহুল খাবার ইনসুলিন ও গ্লুকাগনের অনুপাত ৭০:১ পর্যন্ত বাড়িয়ে চর্বি তৈরি করে; আর দীর্ঘ উপবাসে এই অনুপাত ০.৫:১ এর নিচে নেমে তীব্র চর্বি ভাঙন শুরু করে।'
      ),
      clinicalSignificance: l(
        'Absolute lack of insulin in Type 1 Diabetes uncouples the starvation switch in the fed state, driving lethal diabetic ketoacidosis (DKA); insulin resistance underlies metabolic syndrome.',
        'টাইপ-১ ডায়াবেটিসে ইনসুলিনের অভাবে ভুক্ত অবস্থাতেও শরীর অনাহার ভেবে মারাত্মক ডায়াবেটিক কিটোঅ্যাসিডোসিস (DKA) তৈরি করে; ইনসুলিন প্রতিরোধ মেটাবলিক সিন্ড্রোমের মূল কারণ।'
      ),
      sectionId: 'introduction',
    },
  ],
}

export const metabolism13FuelDynamicsLesson: LessonTopic = {
  id: 'topic.metabolism.fed-fasted-starvation-states',
  slug: 'fed-fasted-starvation-states',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('13 · Fed, Fasted & Starvation Dynamics', '১৩ · ভুক্ত, উপবাস ও অনাহারকালীন পরিবর্তন'),
  summary: l(
    'Temporal fuel transitions across human physiology: the absorptive fed state, postabsorptive phase, early fasting, and prolonged starvation; hormonal switches, hepatic glycogen kinetics, adipose lipolysis, ketogenesis, brain keto-adaptation, and renal gluconeogenesis.',
    'মানব শারীরবৃত্তে সময়ানুগ জ্বালানি রূপান্তর: শোষণকালীন ভুক্ত অবস্থা, শোষোত্তর পর্যায়, প্রাথমিক উপবাস এবং দীর্ঘস্থায়ী অনাহার; হরমোনজনিত সুইচ, যকৃতের গ্লাইকোজেন গতিবিদ্যা, চর্বি ভাঙন, কিটোজেনেসিস, মস্তিষ্কের কিটো-অভিযোজন এবং বৃক্কে গ্লুকোনিওজেনেসিস।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Track the sequential phases of human fuel homeostasis from the absorptive state through postabsorptive, early fasting, and prolonged starvation phases.',
      'ভুক্ত শোষণকালীন অবস্থা থেকে শুরু করে শোষোত্তর পর্যায়, প্রাথমিক উপবাস এবং দীর্ঘমেয়াদী অনাহারের প্রতিটি ধারাবাহিক পর্যায় নিখুঁতভাবে চিহ্নিত ও বিশ্লেষণ করা।',
    ),
    l(
      'Quantify the biochemical contributions of hepatic glycogenolysis, gluconeogenesis, adipose lipolysis, and ketogenesis to systemic euglycemia and energy homeostasis.',
      'রক্তে স্বাভাবিক গ্লুকোজ ও শক্তি বজায় রাখতে যকৃতের গ্লাইকোজেন ভাঙন, গ্লুকোনিওজেনেসিস, চর্বি ভাঙন এবং কিটোন তৈরির পরিমাণগত ভূমিকা নিরূপণ করা।',
    ),
    l(
      'Explain the molecular mechanism of cerebral keto-adaptation via monocarboxylate transporter-1 (MCT1) and its physiological consequence on skeletal muscle protein sparing.',
      'মনোকার্বক্সাইলেট ট্রান্সপোর্টার-১ (MCT1) দিয়ে মস্তিষ্কের কিটো-অভিযোজনের আণবিক ক্রিয়াকৌশল এবং কঙ্কালপেশির প্রোটিন সংরক্ষণে এর জীবনরক্ষাকারী ভূমিকা ব্যাখ্যা করা।',
    ),
  ],
  prerequisiteIds: ['topic.metabolism.glycogen-gluconeogenesis', 'topic.metabolism.fatty-acid-oxidation-ketones'],
  relatedTopicIds: ['topic.metabolism.endocrine-fuel-regulation', 'topic.metabolism.organ-metabolic-specialization'],
  references: fuelRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch23', 'marks-medbiochem-6e-ch19'],
    structure: ['harpers-biochem-32e-ch27', 'marks-medbiochem-6e-ch24'],
    mechanism: ['lehninger-biochem-8e-ch23', 'berg-biochem-9e-ch27'],
    integration: ['berg-biochem-9e-ch27', 'marks-medbiochem-6e-ch24'],
    practice: ['harpers-biochem-32e-ch27', 'marks-medbiochem-6e-ch24'],
    takeaways: ['lehninger-biochem-8e-ch23', 'harpers-biochem-32e-ch27'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Absorptive Fed State: Anabolic Storage', '১. শোষণকালীন ভুক্ত অবস্থা: উপচিতিমূলক সঞ্চয়'), sectionId: 'introduction' },
      { id: 'sec-postabsorptive', label: l('2. Postabsorptive & Early Fasting Phases', '২. শোষোত্তর ও প্রাথমিক উপবাসের পর্যায়'), sectionId: 'structure' },
      { id: 'sec-starvation', label: l('3. Starvation Shift: Ketogenesis & Fuel Switching', '৩. অনাহারের মোড়: কিটোজেনেসিস ও জ্বালানি রূপান্তর'), sectionId: 'mechanism' },
      { id: 'sec-ketoadapt', label: l('4. Brain Keto-Adaptation & Muscle Protein Sparing', '৪. মস্তিষ্কের কিটো-অভিযোজন ও পেশি প্রোটিন সংরক্ষণ'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('5. Terminal Starvation & Refeeding Syndrome', '৫. প্রান্তিক অনাহার ও রিফিডিং সিন্ড্রোম'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Review & Synthesis Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা ও মূল শিক্ষা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Absorptive (Fed) State', 'শোষণকালীন (ভুক্ত) অবস্থা'),
        definition: l(
          'The 2-to-4-hour postprandial window characterized by elevated insulin and suppressed glucagon; circulating glucose, amino acids, and chylomicrons are directed toward glycogen synthesis, lipogenesis, and protein translation.',
          'খাবার গ্রহণের পরবর্তী ২ থেকে ৪ ঘণ্টার সময়কাল যখন রক্তে ইনসুলিন বৃদ্ধি পায় এবং গ্লুকাগন হ্রাস পায়; গ্লুকোজ ও অ্যামিনো অ্যাসিড গ্লাইকোজেন, চর্বি ও প্রোটিন তৈরিতে ব্যবহৃত হয়।'
        ),
      },
      {
        term: l('Postabsorptive Phase', 'শোষোত্তর পর্যায়'),
        definition: l(
          'The 4-to-16-hour fasting window following complete nutrient absorption; declining blood glucose stimulates pancreatic glucagon secretion, triggering hepatic glycogenolysis to maintain systemic euglycemia.',
          'খাবার সম্পূর্ণ হজম ও শোষণের পরবর্তী ৪ থেকে ১৬ ঘণ্টার সময়কাল; রক্তে গ্লুকোজ কমে এলে গ্লুকাগন নিঃসৃত হয়ে যকৃতের গ্লাইকোজেন ভেঙে স্বাভাবিক গ্লুকোজ বজায় রাখে।'
        ),
      },
      {
        term: l('Monocarboxylate Transporter-1 (MCT1)', 'মনোকার্বক্সাইলেট ট্রান্সপোর্টার-১ (MCT1)'),
        definition: l(
          'Proton-linked plasma membrane transporter upregulated on blood-brain barrier endothelial cells during prolonged fasting; facilitates influx of acetoacetate and beta-hydroxybutyrate into the brain.',
          'রক্ত-মস্তিষ্ক বাধার এন্ডোথেলিয়াল কোষে অবস্থিত প্রোটন-সংযুক্ত বাহক যা দীর্ঘ উপবাসে বৃদ্ধি পেয়ে মস্তিষ্কে কিটোন বডি প্রবেশ সহজতর করে।'
        ),
      },
      {
        term: l('Refeeding Syndrome', 'রিফিডিং সিন্ড্রোম'),
        definition: l(
          'Potentially fatal metabolic complication occurring upon rapid carbohydrate refeeding in chronically starved individuals; massive insulin release drives phosphate, potassium, and magnesium into cells, causing severe hypophosphatemia, arrhythmias, and heart failure.',
          'দীর্ঘ অনাহারে থাকা রোগীকে হঠাৎ অতিরিক্ত শর্করা খাওয়ালে সৃষ্ট মারাত্মক জটিলতা; অতিরিক্ত ইনসুলিন রক্ত থেকে ফসফেট ও পটাশিয়াম কোষে ঢুকিয়ে ফেলে তীব্র ঘাটতি ও হার্ট ফেইলিউর ঘটায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Quantitative Nitrogen Balance During Fasting Transitions', 'উপবাসে নাইট্রোজেন ভারসাম্যের পরিমাণগত রূপান্তর'),
        steps: [
          l(
            'Step 1: In early fasting (days 1-3), whole-body proteolysis supplies ~75 grams of muscle protein daily for hepatic gluconeogenesis, resulting in high urinary nitrogen excretion (~12-15 grams of urea nitrogen/day).',
            'ধাপ ১: প্রাথমিক উপবাসে (১-৩ দিন) গ্লুকোনিওজেনেসিসের জন্য দৈনিক প্রায় ৭৫ গ্রাম পেশি প্রোটিন ক্ষয় হয়, যার ফলে মূত্রে প্রচুর ইউরিয়া নাইট্রোজেন নির্গত হয় (১২-১৫ গ্রাম/দিন)।'
          ),
          l(
            'Step 2: By day 14 of starvation, brain keto-adaptation reduces whole-body glucose requirements from ~160g/day to ~40g/day. Consequently, muscle proteolysis drops to ~15-20 grams/day.',
            'ধাপ ২: অনাহারের ১৪তম দিনে মস্তিষ্কের কিটো-অভিযোজনের ফলে সারা দেহের দৈনিক গ্লুকোজের চাহিদা ১৬০ গ্রাম থেকে কমে মাত্র ৪০ গ্রামে নেমে আসে; ফলে পেশি ক্ষয় কমে দৈনিক ১৫-২০ গ্রাম হয়।'
          ),
          l(
            'Step 3: Daily urinary urea nitrogen excretion plummets from 15 grams to 3-4 grams/day, conserving vital structural protein and prolonging survival from 2 weeks to 2 months.',
            'ধাপ ৩: মূত্রে ইউরিয়া নাইট্রোজেন নির্গমন ১৫ গ্রাম থেকে কমে দৈনিক মাত্র ৩-৪ গ্রামে দাঁড়ায়, যা কাঠামোগত প্রোটিন রক্ষা করে অনাহারে বেঁচে থাকার মেয়াদ ২ সপ্তাহ থেকে বাড়িয়ে ২ মাস করে।'
          ),
        ],
        conclusion: l(
          'Brain keto-adaptation is fundamentally a protein-sparing evolutionary mechanism that prevents lethal early diaphragmatic and cardiac muscle atrophy during food deprivation.',
          'মস্তিষ্কের কিটো-অভিযোজন মূলত প্রোটিন বাঁচানোর একটি অত্যাবশ্যকীয় বিবর্তনীয় কৌশল, যা খাদ্যাভাবের সময় হৃদপিণ্ড ও শ্বাসপেশির মারাত্মক ক্ষয় রোধ করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does administration of pure carbohydrate to a severely malnourished patient precipitate acute respiratory and cardiac arrest in Refeeding Syndrome?',
          'মারাত্মক পুষ্টিহীন বা অনাহারী রোগীকে হঠাৎ প্রচুর শর্করা খাওয়ালে কেন রিফিডিং সিন্ড্রোমে আকস্মিক শ্বাসকষ্ট ও কার্ডিয়াক অ্যারেস্ট ঘটে?',
        ),
        answer: l(
          'Prolonged starvation severely depletes total-body phosphate stores. Sudden carbohydrate intake triggers a massive spike in insulin, which abruptly stimulates glycolysis and cellular uptake of glucose and phosphate. Intracellular phosphorylation of glucose consumes residual free inorganic phosphate (Pi) to make glucose-6-phosphate and ATP. Severe systemic hypophosphatemia (<1.0 mg/dL) deprives erythrocytes of 2,3-BPG (causing tissue hypoxia) and deprives cardiomyocytes and diaphragm muscles of ATP, causing acute heart failure, lethal arrhythmias, and respiratory muscle paralysis.',
          'দীর্ঘ অনাহারে শরীরের মোট ফসফেট মারাত্মকভাবে কমে যায়। হঠাৎ শর্করা দিলে প্রচুর ইনসুলিন বের হয়ে রক্ত থেকে সমস্ত ফসফেট কোষে টেনে নেয় গ্লুকোজ ফসফরাইলেশনের জন্য। ফলে রক্তে ফসফেট চরম কমে গিয়ে (হাইপোফসফেটেমিয়া) লোহিত কণিকায় ২,৩-BPG এবং হৃৎপিণ্ড ও শ্বাসপেশিতে এটিপি তৈরি বন্ধ হয়ে যায়, যার ফলে তীব্র হার্ট ফেইলিউর ও শ্বাসযন্ত্র বিকল হয়ে মৃত্যু ঘটে।'
        ),
      },
      {
        question: l(
          'How does the liver maintain systemic glucose output in early fasting without consuming the newly synthesized glucose for its own metabolic needs?',
          'উপবাসের শুরুতে যকৃৎ নিজে তৈরি করা গ্লুকোজ নিজে খরচ না করে কীভাবে সারা শরীরে রক্তে গ্লুকোজের সরবরাহ নিশ্চিত রাখে?',
        ),
        answer: l(
          'Hepatocytes express low-affinity glucokinase (Km ~10 mM) rather than high-affinity hexokinase. In fasting states when intracellular glucose is low, glucokinase is bound and sequestered in the nucleus by its regulatory protein (GKRP). Furthermore, liver cells switch almost entirely to beta-oxidation of free fatty acids for their own ATP and NADH requirements. High acetyl-CoA from fatty acid oxidation allosterically activates pyruvate carboxylase (driving gluconeogenesis) while inhibiting pyruvate dehydrogenase, ensuring that all synthesized glucose is exported to the blood via glucose-6-phosphatase and GLUT2.',
          'যকৃতে হেক্সোকাইনেজের বদলে কম সংবেদনশীল গ্লুকোকাইনেজ থাকে যা উপবাসের সময় নিউক্লিয়াসে আবদ্ধ থাকে। এছাড়া যকৃৎ নিজের শক্তির জন্য সম্পূর্ণভাবে ফ্যাটি অ্যাসিড জারণের ওপর নির্ভর করে। ফ্যাটি অ্যাসিড থেকে উৎপন্ন প্রচুর অ্যাসিটাইল-কোএ গ্লুকোনিওজেনেসিস এনজাইমকে চালু করে কিন্তু পাইরুভেট ডিহাইড্রোজিনেজ বন্ধ রাখে; ফলে তৈরি হওয়া تمام গ্লুকোজ রক্তে চলে যায়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: fuelOrgan3DData,
  interactiveDiagram: {
    id: 'fuel-dynamics-starvation-hub',
    title: l('Interactive Temporal Fuel Transitions: Fed State to Late Starvation', 'ইন্টারেক্টিভ সময়ানুগ জ্বালানি রূপান্তর: ভুক্ত অবস্থা থেকে গভীর অনাহার'),
    description: l(
      'Trace human bioenergetics across time: follow the fed anabolic storage phase, hepatic glycogen depletion, gluconeogenic shift, adipose lipolytic surge, and the brain keto-adaptation switch that spares skeletal muscle.',
      'সময়ের সাথে মানবদেহের জৈবশক্তির পরিবর্তন প্রত্যক্ষ করুন: ভুক্ত অবস্থায় পুষ্টি সঞ্চয়, যকৃতের গ্লাইকোজেন শেষ হওয়া, গ্লুকোনিওজেনেসিস, চর্বি ভাঙন এবং মস্তিষ্কের কিটো-অভিযোজনের মাধ্যমে পেশি রক্ষার পূর্ণাঙ্গ রূপরেখা।'
    ),
    disclaimer: l(
      'Fuel kinetics, organ contributions, and hormonal ratios verified against Lehninger Principles of Biochemistry (8th ed) and Harper Illustrated Biochemistry (32nd ed).',
      'জ্বালানি ব্যবহারের গতিবিদ্যা ও হরমোনের অনুপাত লেহনিঞ্জার এবং হার্পারস বায়োকেমিস্ট্রি দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'node-fed-absorptive',
        label: l('1. Absorptive Fed State (0–4h): Anabolic Storage', '১. শোষণকালীন ভুক্ত অবস্থা (০-৪ ঘণ্টা): পুষ্টি সঞ্চয়'),
        description: l(
          'High insulin-to-glucagon ratio stimulates muscle and adipose GLUT4 translocation, hepatic glycogenesis via glycogen synthase dephosphorylation, de novo lipogenesis, and systemic protein synthesis.',
          'উচ্চ ইনসুলিন-গ্লুকাগন অনুপাত পেশি ও চর্বিকলায় GLUT4 উন্মুক্ত করে, যকৃতে গ্লাইকোজেন ও চর্বি তৈরি বৃদ্ধি করে এবং সারা দেহে প্রোটিন সংশ্লেষ চালায়।'
        ),
        details: l(
          'Portal glucose reaches 140 mg/dL; liver takes up 60g via glucokinase. Chylomicrons deliver dietary lipids to peripheral tissues via capillary LPL.',
          'পোর্টাল গ্লুকোজ বেড়ে যায়; যকৃৎ গ্লুকোকাইনেজ দিয়ে ৬০ গ্রাম গ্লুকোজ ধরে ফেলে এবং কাইলোমাইক্রন লিপিড পৌঁছে দেয়।'
        ),
        sectionId: 'introduction',
        color: '#10b981',
        svgCoords: { cx: 70, cy: 75, r: 24 },
      },
      {
        id: 'node-postabsorptive-glycogen',
        label: l('2. Postabsorptive Phase (4–16h): Hepatic Glycogenolysis', '২. শোষোত্তর পর্যায় (৪-১৬ ঘণ্টা): যকৃতের গ্লাইকোজেন ভাঙন'),
        description: l(
          'Falling insulin and rising glucagon stimulate glycogen phosphorylase via PKA phosphorylation. Hepatic glycogen stores (~100g) supply 75% of circulating glucose to maintain euglycemia (70-100 mg/dL).',
          'ইনসুলিন কমে গ্লুকাগন বাড়লে PKA সক্রিয় হয়ে গ্লাইকোজেন ফসফোরাইলেজ চালু করে। যকৃতের ১০০ গ্রাম গ্লাইকোজেন ভেঙে রক্তে ৭৫% গ্লুকোজ সরবরাহ করে।'
        ),
        details: l(
          'Glycogen breakdown is the primary defense against hypoglycemia; brain consumes 60% of exported glucose (~120g/day rate).',
          'রক্তে গ্লুকোজ ঠিক রাখার প্রধান ঢাল; মস্তিষ্ক যকৃত থেকে আসা গ্লুকোজের ৬০% এককভাবে ব্যবহার করে।'
        ),
        sectionId: 'structure',
        color: '#f59e0b',
        svgCoords: { cx: 160, cy: 75, r: 24 },
      },
      {
        id: 'node-gluconeogenic-shift',
        label: l('3. Gluconeogenic Shift (16–30h): Substrate Convergence', '৩. গ্লুকোনিওজেনেসিসের সূচনা (১৬-৩০ ঘণ্টা): কাঁচামাল একত্রীকরণ'),
        description: l(
          'Hepatic glycogen is largely exhausted by 24 hours. The liver shifts to de novo gluconeogenesis from lactate (Cori cycle), alanine (Cahill cycle), and adipose glycerol, driven by PEPCK and FBPase-1 induction.',
          '২৪ ঘণ্টার মধ্যে যকৃতের গ্লাইকোজেন প্রায় শেষ হয়ে যায়। যকৃৎ ল্যাকটেট, অ্যালানিন ও গ্লিসারল ব্যবহার করে নতুন গ্লুকোজ তৈরিতে মোড় নেয়।'
        ),
        details: l(
          'Muscle proteolysis increases to supply gluconeogenic amino acids; adipose lipolysis accelerates, providing glycerol backbones and fatty acid fuels.',
          'পেশি ভেঙে অ্যালানিন এবং চর্বি ভেঙে গ্লিসারল এসে যকৃতে গ্লুকোজ সংশ্লেষ অব্যাহত রাখে।'
        ),
        sectionId: 'mechanism',
        color: '#d97706',
        svgCoords: { cx: 250, cy: 75, r: 24 },
      },
      {
        id: 'node-lipolytic-surge',
        label: l('4. Adipose Lipolytic Surge (Day 2–3): FFA Flooding', '৪. চর্বি ভাঙনের তীব্রতা (২-৩ দিন): মুক্ত ফ্যাটি অ্যাসিডের প্লাবন'),
        description: l(
          'Glucagon and epinephrine stimulate hormone-sensitive lipase (HSL) and ATGL in adipocytes. Unesterified fatty acids flood into the blood bound to albumin, reaching plasma concentrations of 1.0–1.5 mM.',
          'গ্লুকাগন ও এপিনেফ্রিন চর্বিকলার HSL এনজাইম সক্রিয় করে। প্রচুর মুক্ত ফ্যাটি অ্যাসিড অ্যালবুমিনে যুক্ত হয়ে রক্তে ছড়িয়ে পড়ে।'
        ),
        details: l(
          'Skeletal muscle and heart switch almost entirely to beta-oxidation, preserving blood glucose exclusively for obligate glucose users (erythrocytes, brain).',
          'হৃদপিণ্ড ও পেশি গ্লুকোজ ত্যাগ করে ফ্যাটি অ্যাসিড ব্যবহার শুরু করে, ফলে রক্তে অবশিষ্ট গ্লুকোজ মস্তিষ্ক ও লোহিত কণিকার জন্য সংরক্ষিত থাকে।'
        ),
        sectionId: 'mechanism',
        color: '#ea580c',
        svgCoords: { cx: 340, cy: 75, r: 24 },
      },
      {
        id: 'node-hepatic-ketogenesis',
        label: l('5. Hepatic Ketogenesis Surge (Day 3–5): Ketone Body Factory', '৫. যকৃতের কিটোজেনেসিস (৩-৫ দিন): কিটোন বডির প্রাচুর্য'),
        description: l(
          'Massive hepatic beta-oxidation generates surplus acetyl-CoA while oxaloacetate is drained by gluconeogenesis. Acetyl-CoA is shunted into HMG-CoA synthase to produce acetoacetate and beta-hydroxybutyrate.',
          'অতিরিক্ত ফ্যাটি অ্যাসিড জারণে প্রচুর অ্যাসিটাইল-কোএ জমে যা কিটোন বডিতে (অ্যাসিটোঅ্যাসিটেট ও বিটা-হাইড্রোক্সিবিউটাইরেট) রূপান্তরিত হয়।'
        ),
        details: l(
          'Circulating ketones rise from <0.2 mM to 3–5 mM. Ketones are water-soluble fuels requiring no albumin carrier and can cross the blood-brain barrier.',
          'রক্তে কিটোন ৩-৫ মিলিমোলে পৌঁছায়; এগুলো পানিতে দ্রবণীয় এবং কোনো বাহক ছাড়াই সরাসরি রক্ত-মস্তিষ্ক বাধা অতিক্রম করতে পারে।'
        ),
        sectionId: 'integration',
        color: '#8b5cf6',
        svgCoords: { cx: 70, cy: 155, r: 24 },
      },
      {
        id: 'node-brain-ketoadaptation',
        label: l('6. Brain Keto-Adaptation (Week 1–2): MCT1 Influx', '৬. মস্তিষ্কের কিটো-অভিযোজন (১-২ সপ্তাহ): MCT1 দিয়ে শক্তি গ্রহণ'),
        description: l(
          'Endothelial blood-brain barrier cells upregulate monocarboxylate transporter-1 (MCT1). Neurons express thiophorase, allowing beta-hydroxybutyrate to meet 60–70% of total cerebral energy requirements.',
          'মস্তিষ্কের রক্তনালীতে MCT1 বাহক বৃদ্ধি পায়। নিউরনগুলো থায়োফোরাজ ব্যবহার করে কিটোন থেকে ৬০-৭০% শক্তি উৎপাদন শুরু করে।'
        ),
        details: l(
          'Cerebral glucose consumption drops from 120g/day to ~40g/day. Erythrocytes (lacking mitochondria) remain obligate glucose users.',
          'মস্তিষ্কের দৈনিক গ্লুকোজের চাহিদা ১২০ গ্রাম থেকে কমে মাত্র ৪০ গ্রামে নামে; কেবল মাইটোকন্ড্রিয়াহীন লোহিত কণিকা গ্লুকোজ ব্যবহার করে।'
        ),
        sectionId: 'integration',
        color: '#9333ea',
        svgCoords: { cx: 160, cy: 155, r: 24 },
      },
      {
        id: 'node-muscle-protein-sparing',
        label: l('7. Muscle Protein Sparing Switch: Nitrogen Conservation', '৭. পেশি প্রোটিন সংরক্ষণ সুইচ: নাইট্রোজেন সঞ্চয়'),
        description: l(
          'Because the brain now burns ketones, whole-body gluconeogenic demand plummets. Muscle proteolysis slows from 75g/day to 15-20g/day, dropping urinary urea excretion and preserving vital diaphragmatic and myocardial mass.',
          'মস্তিষ্ক কিটোন ব্যবহার করায় গ্লুকোজ তৈরির চাপ কমে যায়। পেশি ভাঙন দৈনিক ৭৫ গ্রাম থেকে কমে ১৫-২০ গ্রামে নেমে আসে, যা রোগীর জীবন বাঁচায়।'
        ),
        details: l(
          'Urea nitrogen excretion falls from 15g/day to 3-4g/day. Evolutionary adaptation allowing humans to survive up to 60-90 days with adequate water.',
          'ইউরিয়া নির্গমন ৩-৪ গ্রামে নেমে আসে; এই অসাধারণ বিবর্তনীয় অভিযোজন মানুষকে পানি থাকলে ৬০-৯০ দিন পর্যন্ত বাঁচিয়ে রাখে।'
        ),
        sectionId: 'practice',
        color: '#06b6d4',
        svgCoords: { cx: 250, cy: 155, r: 24 },
      },
      {
        id: 'node-renal-late-starvation',
        label: l('8. Renal Gluconeogenesis & Late Starvation Equilibrium', '৮. বৃক্কে গ্লুকোনিওজেনেসিস ও গভীর অনাহার ভারসাম্য'),
        description: l(
          'In prolonged starvation, the renal cortex synthesizes up to 50% of circulating glucose via glutamine deamination. Deamidated ammonia (NH3) buffers urinary ketoacids, preventing fatal ketoacidosis.',
          'গভীর অনাহারে বৃক্কের কর্টেক্স গ্লুটামিন থেকে প্রায় ৫০% গ্লুকোজ বানায় এবং অ্যামোনিয়া তৈরি করে প্রস্রাবের কিটোন অ্যাসিডোসিস প্রশমিত করে।'
        ),
        details: l(
          'Terminal starvation occurs when adipose fat stores are exhausted (<5% body fat), forcing terminal muscle breakdown, respiratory paralysis, and cardiac arrest.',
          'শরীরের সমস্ত চর্বি শেষ হয়ে গেলে পুনরায় তীব্র পেশিক্ষয় শুরু হয় যা ফুসফুসের মধ্যচ্ছদা ও হৃদযন্ত্র অকেজো করে মৃত্যুর দিকে নিয়ে যায়।'
        ),
        sectionId: 'practice',
        color: '#e11d48',
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
          heading: l('Introduction: Feeding and Fasting as the Central Rhythm of Life', 'ভূমিকা: আহার ও অনাহার—মানবজীবনের কেন্দ্রীয় জৈবিক ছন্দ'),
          paragraphs: [
            l(
              'Human survival requires maintaining a constant supply of energy to vital organs like the brain and heart, even though meals are consumed intermittently throughout the day. To bridge the gap between meals, during overnight sleep, and through periods of extended famine, the human body smoothly shifts its metabolic machinery between an anabolic storage mode (the fed state) and a catabolic fuel-releasing mode (the fasting state).',
              'দিনের নির্দিষ্ট কিছু সময় আমরা খাবার গ্রহণ করলেও মানবদেহের মস্তিষ্ক ও হৃদযন্ত্রের মতো অত্যাবশ্যকীয় অঙ্গগুলোতে অবিরাম শক্তির যোগান থাকা অপরিহার্য। আহারের অন্তর্বর্তী সময়ে, রাতের ঘুমের মধ্যে কিংবা দীর্ঘ অনাহারের দিনগুলোতে মানবদেহ অত্যন্ত নিপুণভাবে তার বিপাকীয় কলকব্জাকে পুষ্টি সঞ্চয়কারী অবস্থা (ভুক্ত পর্যায়) থেকে পুষ্টি অবমুক্তকারী অবস্থায় (উপবাস পর্যায়) বদলে নেয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Fuel Clock: From the First Hours to the First Days', 'জ্বালানি ঘড়ি: প্রথম কয়েক ঘণ্টা থেকে প্রথম কয়েক দিন'),
          paragraphs: [
            l(
              'Immediately after eating (the fed state, lasting 2 to 4 hours), the pancreas releases insulin, which commands the liver and muscles to store glucose as glycogen, and directs adipose tissue to store fat. After 4 hours without food, the body enters the postabsorptive state: insulin drops, glucagon rises, and the liver breaks down its stored glycogen to release glucose into the bloodstream, ensuring that the brain receives its mandatory fuel.',
              'খাবার গ্রহণের পরপরই (ভুক্ত অবস্থা, যা ২-৪ ঘণ্টা স্থায়ী হয়) অগ্ন্যাশয় ইনসুলিন হরমোন নিঃসরণ করে, যা যকৃৎ ও পেশিকে গ্লাইকোজেন হিসেবে গ্লুকোজ জমা রাখতে এবং চর্বিকলাকে চর্বি সঞ্চয় করতে নির্দেশ দেয়। ৪ ঘণ্টা না খেয়ে থাকলে শোষোত্তর অবস্থা শুরু হয়: ইনসুলিন কমে গ্লুকাগন বাড়ে এবং যকৃৎ নিজের জমানো গ্লাইকোজেন ভেঙে রক্তে গ্লুকোজ ছাড়ে যাতে মস্তিষ্ক সচল থাকে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Running Out of Sugar: The Shift to Fat and Ketones', 'শর্করার সংকট: চর্বি ও কিটোন বডিতে রূপান্তর'),
          paragraphs: [
            l(
              'By 24 to 30 hours of continuous fasting, hepatic glycogen stores are almost completely exhausted. To prevent blood sugar from crashing to zero, the liver starts manufacturing brand-new glucose from breakdown products like lactate, amino acids, and glycerol in a process called gluconeogenesis. Simultaneously, adipose tissue begins breaking down stored triacylglycerols into free fatty acids, which the liver converts into high-energy ketone bodies.',
              '২৪ থেকে ৩০ ঘণ্টা একটানা উপবাস করলে যকৃতের সমস্ত গ্লাইকোজেন শেষ হয়ে যায়। রক্তের গ্লুকোজ শূন্যে নেমে যাওয়া ঠেকাতে যকৃৎ তখন ল্যাকটেট, অ্যামিনো অ্যাসিড ও গ্লিসারল থেকে নতুন গ্লুকোজ তৈরি (গ্লুকোনিওজেনেসিস) শুরু করে। একই সাথে চর্বিকলা জমানো চর্বি ভেঙে মুক্ত ফ্যাটি অ্যাসিড রক্তে ছাড়ে, যা দিয়ে যকৃৎ প্রচুর উচ্চ-শক্তিসম্পন্ন কিটোন বডি তৈরি করতে থাকে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Brain Keto-Adaptation: How Ketones Save Skeletal Muscle', 'মস্তিষ্কের কিটো-অভিযোজন: কীভাবে কিটোন কঙ্কালপেশিকে রক্ষা করে'),
          paragraphs: [
            l(
              'Normally, the brain consumes about 120 grams of glucose every single day. Because fatty acids cannot cross the protective blood-brain barrier, the body would quickly destroy its own vital muscle proteins to make glucose if starvation continued. Remarkably, after several days of fasting, the brain adapts by switching to ketone bodies for up to 70% of its energy needs, dramatically slowing down muscle breakdown and allowing humans to survive for months.',
              'স্বাভাবিক অবস্থায় মস্তিষ্ক দৈনিক প্রায় ১২০ গ্রাম গ্লুকোজ খরচ করে। চর্বির ফ্যাটি অ্যাসিড রক্ত-মস্তিষ্ক বাধা পার হতে পারে না বলে মস্তিষ্ককে বাঁচাতে শরীর নিজের সমস্ত পেশি প্রোটিন ভেঙে ধ্বংস করে ফেলত। কিন্তু কয়েক দিন উপবাসের পর মস্তিষ্ক অভিযোজিত হয়ে কিটোন বডি থেকে তার ৭০% শক্তি মেটাতে শুরু করে, যার ফলে পেশিক্ষয় নাটকীয়ভাবে কমে যায় এবং মানুষ অনাহারে কয়েক মাস বাঁচতে পারে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Hazards: Starvation Cachexia and Refeeding Syndrome', 'ক্লিনিক্যাল ঝুঁকি: অনাহারজনিত ক্যাকেক্সিয়া ও রিফিডিং সিন্ড্রোম'),
          paragraphs: [
            l(
              'When starvation extends past 60 to 90 days and fat stores reach zero, the body enters terminal starvation, consuming structural proteins until the breathing muscles fail. Furthermore, suddenly feeding large amounts of carbohydrates to a severely malnourished patient causes Refeeding Syndrome: an enormous insulin rush drives phosphate, potassium, and magnesium into cells, causing lethal heart arrhythmias and respiratory arrest.',
              'অনাহার ৬০ থেকে ৯০ দিন ছাড়িয়ে গেলে এবং চর্বি সম্পূর্ণ শেষ হয়ে গেলে শরীর বেঁচে থাকার শেষ চেষ্টায় কাঠামোগত পেশি পোড়াতে শুরু করে, যার ফলে শ্বাসপেশি অকেজো হয়ে মৃত্যু ঘটে। এছাড়া মারাত্মক অনাহারী রোগীকে হঠাৎ প্রচুর শর্করা খাওয়ালে রিফিডিং সিন্ড্রোম হয়: হঠাৎ ইনসুলিনের বন্যায় রক্ত থেকে ফসফেট কোষে ঢুকে মারাত্মক ঘাটতি সৃষ্টি করে হার্ট অ্যাটাক ঘটায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('High-Yield Synthesis Takeaways', 'মূল সারসংক্ষেপ ও শিক্ষণীয় বিষয়'),
          paragraphs: [
            l(
              'The fed state is an anabolic storage phase dominated by insulin. Liver glycogen sustains blood glucose for the first 16 to 24 hours of fasting. Gluconeogenesis and adipose lipolysis take over as glycogen is depleted. Brain keto-adaptation reduces whole-body glucose demands and spares skeletal muscle from fatal wasting. Refeeding chronically starved patients must be executed cautiously with electrolyte monitoring.',
              'ভুক্ত অবস্থা হলো ইনসুলিন নিয়ন্ত্রিত পুষ্টি সঞ্চয়ের পর্যায়। যকৃতের গ্লাইকোজেন উপবাসের প্রথম ১৬ থেকে ২৪ ঘণ্টা রক্তে গ্লুকোজ জোগায়। গ্লাইকোজেন শেষ হলে গ্লুকোনিওজেনেসিস ও চর্বি ভাঙন শুরু হয়। মস্তিষ্কের কিটো-অভিযোজন গ্লুকোজের চাহিদা কমিয়ে পেশি প্রোটিন সংরক্ষণ করে। দীর্ঘ অনাহারী রোগীকে অত্যন্ত সতর্কতার সাথে লবণ পরীক্ষা করে ধীরে ধীরে খাবার দিতে হয়।'
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
          heading: l('Introduction: Temporal Fuel Partitioning and Hormonal Hierarchies', 'ভূমিকা: সময়ানুগ জ্বালানি বণ্টন ও হরমোনের ক্রমবিন্যাস'),
          paragraphs: [
            l(
              'Fuel homeostasis in mammals represents a tightly coordinated temporal symphony balancing substrate availability against tissue metabolic demands. The transition between nutritional satiety and prolonged food deprivation proceeds through four distinct chronological phases: the absorptive fed state (0-4 hours), the postabsorptive state (4-16 hours), early starvation (1-3 days), and prolonged starvation (>2 weeks). This transition is orchestrated by the molar ratio of insulin to counter-regulatory hormones (glucagon, epinephrine, cortisol, growth hormone).',
              'স্তন্যপায়ী প্রাণীদের জ্বালানি সমতা হলো একটি সময়ানুগ সুবিন্যস্ত প্রক্রিয়া যা পুষ্টির যোগান এবং বিভিন্ন টিস্যুর চাহিদার মাঝে নিখুঁত সমন্বয় বজায় রাখে। আহার গ্রহণ থেকে দীর্ঘ অনাহারের রূপান্তরটি চারটি ধারাবাহিক পর্যায়ে সম্পন্ন হয়: শোষণকালীন ভুক্ত অবস্থা (০-৪ ঘণ্টা), শোষোত্তর পর্যায় (৪-১৬ ঘণ্টা), প্রাথমিক উপবাস (১-৩ দিন) এবং দীর্ঘস্থায়ী অনাহার (>২ সপ্তাহ)। ইনসুলিন এবং বিপরীতমুখী হরমোনগুলোর (গ্লুকাগন, এপিনেফ্রিন, কর্টিসল) মধ্যকার অনুপাতই এই পুরো কর্মকাণ্ডের মূল নিয়ন্ত্রক।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Absorptive and Postabsorptive Transitions: Glycogen Kinetics', 'ভুক্ত ও শোষোত্তর রূপান্তর: গ্লাইকোজেন গতিবিদ্যা'),
          paragraphs: [
            l(
              'During the absorptive phase, high portal insulin stimulates hepatic glycogen synthase via protein phosphatase-1 (PP1) dephosphorylation, while driving GLUT4 translocation to the plasma membranes of skeletal muscle and adipose tissue. Excess glucose is channeled through hepatic glycolysis to pyruvate dehydrogenase and citrate cleavage for de novo fatty acid synthesis and VLDL packaging. In the postabsorptive state (4-16 hours), declining portal insulin and rising glucagon activate protein kinase A (PKA), phosphorylating and activating glycogen phosphorylase to sustain peripheral euglycemia.',
              'শোষণকালীন পর্যায়ে উচ্চ ইনসুলিন প্রোটিন ফসফেটেজ-১ (PP1) দিয়ে যকৃতের গ্লাইকোজেন সিন্থেজ সক্রিয় করে এবং কঙ্কালপেশি ও চর্বিকলায় GLUT4 উন্মুক্ত করে। উদ্বৃত্ত গ্লুকোজ পাইরুভেটে পরিণত হয়ে ফ্যাটি অ্যাসিড ও VLDL তৈরিতে ব্যবহৃত হয়। কিন্তু ৪-১৬ ঘণ্টার শোষোত্তর পর্যায়ে ইনসুলিন কমে গ্লুকাগন বৃদ্ধি পেলে PKA সক্রিয় হয়ে গ্লাইকোজেন ফসফোরাইলেজকে ফসফরাইলেশনের মাধ্যমে চালু করে এবং দ্রুত রক্তে গ্লুকোজের যোগান নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Gluconeogenic and Lipolytic Crossroads: Days 1 Through 3', 'গ্লুকোনিওজেনিক ও লাইপোলাইটিক সন্ধিক্ষণ: প্রথম থেকে তৃতীয় দিন'),
          paragraphs: [
            l(
              'Because hepatic glycogen stores rarely exceed 100 grams (~400 kcal), glycogenolysis is nearly exhausted within 24 to 30 hours. The organism relies increasingly on hepatic gluconeogenesis, fueled by lactate (Cori cycle), alanine (Cahill cycle), and adipose-derived glycerol. Concurrently, declining insulin releases the tonic inhibition on adipose triglyceride lipase (ATGL) and hormone-sensitive lipase (HSL), flooding the circulation with unesterified free fatty acids that saturate hepatic mitochondrial beta-oxidation and generate ketone bodies.',
              'যকৃতে গ্লাইকোজেনের মোট পরিমাণ ১০০ গ্রামের (~৪০০ কিলোক্যালরি) বেশি না হওয়ায় ২৪ থেকে ৩০ ঘণ্টার মধ্যে এটি প্রায় সম্পূর্ণ নিঃশেষ হয়ে যায়। ফলে শরীর যকৃতের গ্লুকোনিওজেনেসিসের ওপর পুরোপুরি নির্ভরশীল হয় যা ল্যাকটেট, অ্যালানিন ও গ্লিসারল ব্যবহার করে ঘটে। একই সাথে ইনসুলিন কমে যাওয়ায় চর্বিকলার ATGL ও HSL এনজাইম প্রচুর ফ্যাটি অ্যাসিড রক্তে ছেড়ে দেয় যা যকৃতে গিয়ে বিটা-জারণের মাধ্যমে কিটোন বডিতে রূপান্তরিত হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Prolonged Starvation: Cerebral Keto-Adaptation via MCT1 and Thiophorase', 'দীর্ঘস্থায়ী অনাহার: MCT1 ও থায়োফোরাজ দিয়ে মস্তিষ্কের কিটো-অভিযোজন'),
          paragraphs: [
            l(
              'The pivotal adaptation permitting human survival beyond two weeks is cerebral keto-adaptation. As circulating ketone body concentrations surpass 3 to 5 mM, blood-brain barrier endothelial cells upregulate monocarboxylate transporter-1 (MCT1). In cerebral neurons, beta-hydroxybutyrate is oxidized to acetoacetate, which is converted by succinyl-CoA:3-ketoacid CoA transferase (thiophorase) into acetoacetyl-CoA, yielding two acetyl-CoA molecules for the TCA cycle and meeting up to 70% of brain energy demands.',
              'দুই সপ্তাহের বেশি অনাহারে মানুষের বেঁচে থাকার প্রধানতম ভিত্তি হলো মস্তিষ্কের কিটো-অভিযোজন। রক্তে কিটোন বডি ৩ থেকে ৫ মিলিমোলের বেশি হলে রক্ত-মস্তিষ্ক বাধায় মনোকার্বক্সাইলেট ট্রান্সপোর্টার-১ (MCT1) বৃদ্ধি পায়। মস্তিষ্কের নিউরনে থায়োফোরাজ এনজাইম বিটা-হাইড্রোক্সিবিউটাইরেটকে অ্যাসিটোঅ্যাসিটাইল-কোএ-তে রূপান্তর করে টিসিএ চক্রের জন্য দুটি অ্যাসিটাইল-কোএ তৈরি করে এবং মস্তিষ্কের মোট শক্তির ৭০% যোগান দেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Pathophysiology of Starvation: Renal Compensation and Refeeding Syndrome', 'অনাহারের রোগতত্ত্ব: বৃক্কের ভূমিকা ও রিফিডিং সিন্ড্রোম'),
          paragraphs: [
            l(
              'In deep starvation, the renal cortex contributes up to 50% of systemic gluconeogenesis, utilizing glutamine while releasing ammonium ions (NH4+) to buffer urinary ketoacid excretion. When starving patients are precipitously re-fed with carbohydrates, an overwhelming insulin surge forces glucose, potassium, magnesium, and phosphate into cells. The sudden intracellular consumption of inorganic phosphate for glycolytic intermediates causes profound hypophosphatemia, triggering heart failure, respiratory paralysis, and sudden death.',
              'গভীর অনাহারে বৃক্কের কর্টেক্স মোট গ্লুকোনিওজেনেসিসের প্রায় ৫০% সম্পন্ন করে এবং গ্লুটামিন থেকে অ্যামোনিয়াম আয়ন তৈরি করে মূত্রে কিটোঅ্যাসিডের ক্ষয় প্রতিহত করে। এ অবস্থায় রোগীকে হঠাৎ অতিরিক্ত শর্করা খেতে দিলে ইনসুলিনের ব্যাপক নিঃসরণে রক্তের সমস্ত ফসফেট ও পটাশিয়াম কোষে ঢুকে যায়; তীব্র হাইপোফসফেটেমিয়ার কারণে এটিপি তৈরি স্তব্ধ হয়ে হার্ট ফেইলিউর, শ্বাসযন্ত্রের পক্ষাঘাত ও আকস্মিক মৃত্যু ঘটে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis & High-Yield Key Points', 'একাডেমিক পর্যালোচনা ও মূল শিক্ষণীয় বিষয়'),
          paragraphs: [
            l(
              'Hepatic glycogenolysis sustains euglycemia for 16-24 hours before giving way to gluconeogenesis. Lipolysis delivers FFAs for peripheral tissues and hepatic ketogenesis. MCT1 induction permits cerebral beta-hydroxybutyrate utilization, reducing whole-body glucose demands from 160g to 40g daily and slowing proteolysis from 75g to 15g daily. Refeeding syndrome requires slow caloric restoration with aggressive phosphate and thiamine replenishment.',
              'যকৃতের গ্লাইকোজেন ১৬-২৪ ঘণ্টা রক্তে গ্লুকোজ বজায় রাখে, এরপর গ্লুকোনিওজেনেসিস শুরু হয়। চর্বি ভাঙন থেকে আসা ফ্যাটি অ্যাসিড কিটোন বডিতে রূপান্তরিত হয়। MCT1 বৃদ্ধি মস্তিষ্কে কিটোনের ব্যবহার নিশ্চিত করে গ্লুকোজের চাহিদা ১৬০ থেকে ৪০ গ্রামে কমায় এবং পেশিক্ষয় ৭৫ থেকে ১৫ গ্রামে নামিয়ে আনে। রিফিডিং সিন্ড্রোম এড়াতে রোগীকে খুব ধীরে ধীরে খাবার এবং প্রচুর ফসফেট ও থায়ামিন দিতে হয়।'
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
          heading: l('Metabolic Flux Control Analysis: Pyruvate Dehydrogenase vs Pyruvate Carboxylase', 'মেটাবলিক ফ্লাক্স কন্ট্রোল: পাইরুভেট ডিহাইড্রোজিনেজ বনাম পাইরুভেট কার্বক্সিলেজ'),
          paragraphs: [
            l(
              'The metabolic gatekeeper determining whether hepatic pyruvate enters the TCA cycle or is converted to glucose is the reciprocal regulation of pyruvate dehydrogenase (PDH) and pyruvate carboxylase (PC). During fasting, elevated free fatty acid flux drives excessive mitochondrial beta-oxidation, producing soaring intra-mitochondrial ratios of acetyl-CoA/CoA and NADH/NAD+. High acetyl-CoA acts as an obligate allosteric activator of pyruvate carboxylase, driving the ATP-dependent conversion of pyruvate to oxaloacetate for gluconeogenesis. Concurrently, elevated acetyl-CoA and NADH activate pyruvate dehydrogenase kinase (PDK4), which phosphorylates the E1-alpha subunit of PDH at Ser264, Ser271, and Ser203, completely abolishing its catalytic activity and preventing the irreversible oxidation of gluconeogenic carbons to acetyl-CoA and CO2.',
              'যকৃতের পাইরুভেট টিসিএ চক্রে পুড়ে শক্তি দেবে নাকি গ্লুকোজ তৈরিতে ফিরে যাবে তা নির্ভর করে পাইরুভেট ডিহাইড্রোজিনেজ (PDH) এবং পাইরুভেট কার্বক্সিলেজ (PC)-এর পারস্পরিক নিয়ন্ত্রণের ওপর। উপবাসকালে অতিরিক্ত ফ্যাটি অ্যাসিডের জারণে মাইটোকন্ড্রিয়ায় প্রচুর অ্যাসিটাইল-কোএ এবং NADH তৈরি হয়। এই অ্যাসিটাইল-কোএ সরাসরি পাইরুভেট কার্বক্সিলেজ এনজাইমকে চালু করে পাইরুভেট থেকে অক্সালোঅ্যাসিটেট তৈরি করায় যা গ্লুকোনিওজেনেসিস চালায়। একই সাথে অ্যাসিটাইল-কোএ ও NADH পাইরুভেট ডিহাইড্রোজিনেজ কাইনেজ-৪ (PDK4) সক্রিয় করে PDH এনজাইমকে ফসফরাইলেশনের মাধ্যমে সম্পূর্ণ অকেজো করে দেয়, যার ফলে গ্লুকোজ তৈরির মূল্যবান কার্বন পুড়ে নষ্ট হতে পারে না।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Molecular Pathophysiology of Refeeding Hypophosphatemia and Thiamine Depletion', 'রিফিডিং হাইপোফসফেটেমিয়া ও থায়ামিন ঘাটতির আণবিক প্যাথোফিজিওলজি'),
          paragraphs: [
            l(
              'Refeeding syndrome illustrates the catastrophic biochemical consequences of uncoupling chronic metabolic starvation adaptations through rapid glycemic administration. In starvation, total-body stores of phosphorus, potassium, and magnesium are profoundly depleted through prolonged catabolism, though serum levels remain falsely normal due to hemoconcentration and intracellular leakage. When carbohydrates are reintroduced, the sudden surge of insulin stimulates sodium-hydrogen exchanger-1 (NHE1) and sodium-potassium ATPase (Na+/K+-ATPase), driving potassium into cells, while simultaneously upregulating hexokinase and phosphofructokinase-1 (PFK-1). Glucose entering cells is aggressively phosphorylated to glucose-6-phosphate, fructose-6-phosphate, and fructose-1,6-bisphosphate, consuming circulating inorganic phosphate (Pi) and driving serum phosphate below 1.0 mg/dL (severe hypophosphatemia). Because inorganic phosphate is required for both ATP synthesis via oxidative phosphorylation and 2,3-bisphosphoglycerate (2,3-BPG) formation in erythrocytes, hypophosphatemia shifts the oxygen-hemoglobin dissociation curve to the left, causing tissue hypoxia, myocardial depression, rhabdomyolysis, and diaphragmatic weakness. Furthermore, the reactivation of pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase creates an overwhelming demand for thiamine pyrophosphate (TPP); without thiamine supplementation, rapid refeeding precipitates acute Wernicke encephalopathy and high-output lactic acidosis.',
              'রিফিডিং সিন্ড্রোম দেখায় কীভাবে দীর্ঘ অনাহারের স্বাভাবিক অভিযোজনকে হঠাৎ শর্করা প্রয়োগের মাধ্যমে বিনষ্ট করলে প্রাণঘাতী বিপর্যয় ঘটে। দীর্ঘ উপবাসে শরীরের ফসফেট, পটাশিয়াম ও ম্যাগনেসিয়াম নিঃশেষিত হলেও রক্তে তাদের মাত্রা আপাতদৃষ্টিতে স্বাভাবিক দেখায়। কিন্তু হঠাৎ শর্করা দিলে ইনসুলিনের ব্যাপক নিঃসরণে Na+/K+-ATPase সক্রিয় হয়ে পটাশিয়াম কোষে টেনে নেয় এবং হেক্সোকাইনেজ ও PFK-1 অতিসক্রিয় হয়ে ওঠে। কোষে ঢোকা গ্লুকোজকে ফসফরাইলেট করতে রক্তের সমস্ত অজৈব ফসফেট (Pi) খরচ হয়ে যায় এবং সিরাম ফসফেট ১.০ মিগ্রা/ডেসিলিটারের নিচে নেমে যায়। লোহিত কণিকায় ২,৩-BPG এবং কোষে এটিপি তৈরি করতে ফসফেট প্রয়োজন হওয়ায় এর অভাবে অক্সিজেন হিমোগ্লোবিনের সাথে শক্তভাবে আটকে গিয়ে টিস্যু হাইপোক্সিয়া, হৃৎপিণ্ডের পাম্পিং ব্যর্থতা এবং মধ্যচ্ছদা পেশির পক্ষাঘাত ঘটায়। উপরন্তু পাইরুভেট ডিহাইড্রোজিনেজ চালু হওয়ায় প্রচুর থায়ামিন (TPP) খরচ হয়; থায়ামিন না দিলে রোগী সাথে সাথে একিউট ওয়ার্নিক এনসেফালোপ্যাথি এবং ল্যাকটিক অ্যাসিডোসিসে মারা যায়।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A metabolic map detailing human fuel transitions across time: absorptive fed storage under insulin, postabsorptive hepatic glycogenolysis, gluconeogenic shift, adipose lipolytic FFA flooding, hepatic ketogenesis, brain keto-adaptation via MCT1, and skeletal muscle protein sparing.',
      'সময়ের সাথে মানবদেহের জ্বালানি রূপান্তরের মানচিত্র: ইনসুলিন দ্বারা ভুক্ত পুষ্টি সঞ্চয়, শোষোত্তর যকৃতের গ্লাইকোজেন ভাঙন, গ্লুকোনিওজেনেসিস, চর্বি ভাঙন, যকৃতের কিটোজেনেসিস, MCT1 দিয়ে মস্তিষ্কের কিটো-অভিযোজন এবং কঙ্কালপেশির প্রোটিন সংরক্ষণের সমন্বিত নকশা।'
    ),
    steps: [
      l('Absorptive state: Insulin drives glucose into glycogen, triacylglycerols, and protein.', 'ভুক্ত অবস্থা: ইনসুলিন গ্লুকোজকে গ্লাইকোজেন, ট্রাইগ্লিসারাইড ও প্রোটিনে রূপান্তর করে।'),
      l('Postabsorptive state: Hepatic glycogenolysis releases glucose to maintain euglycemia.', 'শোষোত্তর পর্যায়: যকৃতের গ্লাইকোজেন ভেঙে রক্তে স্বাভাবিক গ্লুকোজের মাত্রা বজায় রাখে।'),
      l('Gluconeogenic transition: Liver synthesizes glucose from lactate, glycerol, and alanine.', 'গ্লুকোনিওজেনেসিস: যকৃৎ ল্যাকটেট, গ্লিসারল ও অ্যালানিন থেকে নতুন গ্লুকোজ তৈরি করে।'),
      l('Ketogenic surge: Adipose FFAs fuel hepatic ketogenesis, raising circulating ketones.', 'কিটোজেনেসিস: চর্বির ফ্যাটি অ্যাসিড থেকে যকৃতে প্রচুর কিটোন বডি তৈরি হয়।'),
      l('Brain keto-adaptation: MCT1 imports ketones into neurons, meeting 70% of cerebral energy.', 'কিটো-অভিযোজন: MCT1 বাহক মস্তিষ্কে কিটোন ঢুকিয়ে ৭০% শক্তির চাহিদা পূরণ করে।'),
      l('Muscle sparing: Muscle proteolysis drops from 75g to 15g daily, preserving survival.', 'পেশি সঞ্চয়: পেশিক্ষয় দৈনিক ৭৫ গ্রাম থেকে ১৫ গ্রামে নেমে জীবন রক্ষা করে।'),
    ],
  },
  assessment: {
    question: l(
      'A 34-year-old political activist is admitted to the hospital after a 21-day hunger strike consuming only water. Physical examination demonstrates profound muscle wasting and temporal hollowing. Laboratory evaluation shows blood glucose of 58 mg/dL and serum beta-hydroxybutyrate of 6.2 mmol/L. Which metabolic adaptation is primarily responsible for the preservation of his skeletal muscle mass and survival at this stage of prolonged starvation?',
      '৩৪ বছর বয়সী এক অনশনকারী কেবল পানি পান করে ২১ দিন অনশন করার পর হাসপাতালে ভর্তি হলেন। পরীক্ষায় মারাত্মক পেশিক্ষয় দেখা গেল। রক্ত পরীক্ষায় গ্লুকোজ ৫৮ মিগ্রা/ডেসিলিটার এবং সিরাম বিটা-হাইড্রোক্সিবিউটাইরেট ৬.২ মিলিমোল/লিটার পাওয়া গেল। দীর্ঘ অনাহারের এই পর্যায়ে কঙ্কালপেশির অতিরিক্ত ক্ষয় রোধ করে তাকে বাঁচিয়ে রাখার জন্য কোন বিপাকীয় অভিযোজনটি মূলত দায়ী?'
    ),
    options: [
      l(
        'Upregulation of blood-brain barrier monocarboxylate transporters allowing cerebral utilization of ketone bodies, markedly reducing systemic gluconeogenic demand.',
        'রক্ত-মস্তিষ্ক বাধায় মনোকার্বক্সাইলেট ট্রান্সপোর্টার বৃদ্ধি পেয়ে মস্তিষ্কে কিটোন বডির ব্যবহার নিশ্চিত করা, যা সারা শরীরে গ্লুকোজ তৈরির চাহিদা বহুলাংশে কমিয়ে দেয়।'
      ),
      l(
        'Acceleration of hepatic glycogen synthesis to buffer fluctuating peripheral energy demands.',
        'প্রান্তীয় শক্তির তারতম্য মেটাতে যকৃতের গ্লাইকোজেন সংশ্লেষের গতি বৃদ্ধি করা।'
      ),
      l(
        'Complete cessation of adipose tissue lipolysis to prevent lipotoxicity.',
        'লিপোটক্সিসিটি রোধ করতে চর্বিকলার লাইপোলাইসিস সম্পূর্ণভাবে বন্ধ করে দেওয়া।'
      ),
      l(
        'Suppression of renal gluconeogenesis to minimize urinary nitrogen loss.',
        'মূত্রে নাইট্রোজেনের অপচয় কমাতে বৃক্কের গ্লুকোনিওজেনেসিস সম্পূর্ণ বন্ধ রাখা।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'By day 21 of starvation, circulating ketone bodies (acetoacetate and beta-hydroxybutyrate) are markedly elevated. Upregulation of monocarboxylate transporter-1 (MCT1) across the blood-brain barrier enables cerebral neurons to oxidize ketones for up to 70% of their metabolic energy. This reduces whole-body glucose requirement from 120–160 g/day to only ~40 g/day. Consequently, hepatic and renal gluconeogenesis requirements decline precipitously, sparing skeletal muscle proteolysis from ~75 g/day in early fasting to only ~15–20 g/day in late starvation.',
      'অনাহারের ২১তম দিনে রক্তে কিটোন বডি বহুগুণ বেড়ে যায়। রক্ত-মস্তিষ্ক বাধায় MCT1 বাহক বৃদ্ধি পাওয়ায় মস্তিষ্কের নিউরনগুলো কিটোন বডি ব্যবহার করে তাদের ৭০% শক্তি উৎপাদন করতে পারে। এর ফলে সারা শরীরের দৈনিক গ্লুকোজের চাহিদা ১৬০ গ্রাম থেকে কমে মাত্র ৪০ গ্রামে নেমে আসে; যার ফলে গ্লুকোজ তৈরির জন্য পেশি ভাঙার প্রয়োজনীয়তা কমে যায় এবং কঙ্কালপেশির ক্ষয় ৭৫ গ্রাম থেকে মাত্র ১৫-২০ গ্রামে নেমে এসে জীবন বাঁচায়।'
    ),
  },
}
