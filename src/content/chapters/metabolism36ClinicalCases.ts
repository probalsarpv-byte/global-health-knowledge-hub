import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const caseRefs = [
  {
    id: 'fauci-harrison-internal-med-21e-ch398',
    authors: 'Joseph Loscalzo, Anthony S. Fauci, Dennis L. Kasper, et al.',
    title: "Harrison's Principles of Internal Medicine, 21st edition, Chapter 398: Acid-Base Disorders & Diabetic Ketoacidosis",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3095',
  },
  {
    id: 'lehninger-biochem-8e-ch23',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 23: Hormonal Regulation and Integration of Mammalian Metabolism',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'mehanna-refeeding-syndrome-bmj-2008',
    authors: 'Hisham M. Mehanna, J. Moledina, J. Travis',
    title: 'Refeeding syndrome: what it is, and how to prevent and treat it. BMJ, 336(7659):1495-1498',
    organization: 'British Medical Association',
    year: 2008,
    url: 'https://pubmed.ncbi.nlm.nih.gov/18583681/',
  },
  {
    id: 'kitabchi-dka-hhs-diabetes-care-2009',
    authors: 'Abbas E. Kitabchi, Guillermo E. Umpierrez, Mary Beth Murphy, et al.',
    title: 'Hyperglycemic Crises in Adult Patients With Diabetes. Diabetes Care, 32(7):1335-1343',
    organization: 'American Diabetes Association',
    year: 2009,
    url: 'https://pubmed.ncbi.nlm.nih.gov/19564476/',
  },
  {
    id: 'kraushaar-lactic-acidosis-crit-care-2014',
    authors: 'Jeffrey A. Kraut, Nicolaos E. Madias',
    title: 'Lactic Acidosis. New England Journal of Medicine, 371(24):2309-2319',
    organization: 'Massachusetts Medical Society',
    year: 2014,
    url: 'https://pubmed.ncbi.nlm.nih.gov/25494270/',
  },
]

const cases3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Acute Metabolic Emergencies & Critical Care',
    '৩ডি বহু-অঙ্গীয় তীব্র বিপাকীয় জরুরি অবস্থা ও জটিল রোগের শারীরস্থানিক মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D clinical teaching model: explore how acute biochemical pathway failures—from refeeding hypophosphatemia and diabetic ketoacidosis to organic acidemias and septic lactic acidosis—cascade across liver, pancreas, heart, and kidneys.',
    'ইন্টারেক্টিভ ৩ডি ক্লিনিক্যাল শিক্ষামূলক মডেল: পর্যবেক্ষণ করুন কীভাবে রিফিডিং সিন্ড্রোম, ডায়াবেটিক কিটোঅ্যাসিডোসিস, অর্গানিক অ্যাসিডেমিয়া ও সেপটিক ল্যাকটিক অ্যাসিডোসিসের জটিল বায়োকেমিক্যাল বিপর্যয় যকৃত, অগ্ন্যাশয়, হৃদপিণ্ড ও বৃক্কে অঙ্গ বিকলতা ঘটায়।'
  ),
  description: l(
    'Clinical metabolic grand rounds represent the ultimate capstone of biochemistry education: synthesizing the full curriculum of glycolysis, glycogenolysis, beta-oxidation, ketogenesis, the urea cycle, one-carbon transfer, and acid-base regulation to solve real-world life-threatening clinical emergencies at the patient bedside.',
    'ক্লিনিক্যাল গ্র্যান্ড রাউন্ডস হলো জৈব-রসায়ন শিক্ষার সর্বোচ্চ প্রয়োগ: গ্লাইকোলাইসিস, কিটোজেনেসিস, ইউরিয়া চক্র, মিথাইলেশন ও এসিড-ক্ষার ভারসাম্যের সমন্বিত জ্ঞানের মাধ্যমে মুমূর্ষু রোগীর জীবন রক্ষাকারী জরুরি বিপাকীয় সমস্যাগুলো সমাধান করা।'
  ),
  organs: [
    {
      id: 'organ-pancreas-endocrine-ketoacidosis',
      name: l('Pancreas: Beta-Cell Failure in DKA vs Hyperosmolar State', 'অগ্ন্যাশয়: DKA বনাম হাইপারঅসমোলার অবস্থায় বিটা-কোষের ব্যর্থতা'),
      latinName: 'Pancreas (Deficientia Insulinae Acuta)',
      system: l('Endocrine & Critical Care Metabolic System', 'অন্তঃক্ষরা ও জরুরি নিবিড় পর্যবেক্ষণ ব্যবস্থা'),
      cavity: l('Retroperitoneal Space (Epigastrium)', 'রেট্রোপেরিটোনিয়াল স্থান (এপিগ্যাস্ট্রিয়াম)'),
      position3D: { x: -2, y: 200, z: 2 },
      color: '#e11d48',
      highlightColor: '#f43f5e',
      shapeType: 'pancreas',
      description: l(
        'The primary endocrine defect in diabetic ketoacidosis (DKA) is absolute insulin deficiency, unleashing unchecked adipocyte hormone-sensitive lipase (HSL) lipolysis and flooding the liver with free fatty acids. In contrast, hyperosmolar hyperglycemic state (HHS) retains trace residual portal insulin sufficient to suppress lipolysis and ketogenesis, but insufficient to stimulate peripheral GLUT4 glucose disposal, driving extreme blood glucose elevations exceeding 600-1000 mg/dL.',
        'ডায়াবেটিক কিটোঅ্যাসিডোসিসে (DKA) ইনসুলিনের শতভাগ অভাব ঘটে, যার ফলে হরমোন-সংবেদনশীল লাইপেজ তীব্রভাবে সক্রিয় হয়ে চর্বি ভেঙে যকৃতে পাঠায় এবং কিটোন তৈরি করে। অন্যদিকে হাইপারঅসমোলার অবস্থায় (HHS) সামান্য ইনসুলিন অবশিষ্ট থাকে যা কিটোন তৈরি আটকাতে সক্ষম হলেও রক্ত থেকে চিনি কমাতে পারে না, ফলে গ্লুকোজ ৬০০-১০০০ মিগ্রা/ডেসিলিটার ছাড়িয়ে মারাত্মক পানিশূন্যতা ঘটায়।'
      ),
      spatialRelations: l(
        'Tucked along the C-loop of the duodenum behind the stomach, releasing islet hormones directly into the portal vein toward the liver.',
        'ডিওডেনামের ভাঁজে পাকস্থলীর পেছনে অবস্থিত যা পোর্টাল শিরার মাধ্যমে সরাসরি যকৃতে হরমোন প্রেরণ করে।'
      ),
      physiology: l(
        'Absolute lack of insulin removes the allosteric inhibition of CPT-I by malonyl-CoA in hepatocytes, opening the mitochondrial gates for runaway beta-oxidation and massive acetoacetate/beta-hydroxybutyrate production.',
        'ইনসুলিনের অভাবে যকৃতে ম্যালনাইল-কোএ কমে যাওয়ায় CPT-I এনজাইম পুরোপুরি উন্মুক্ত হয়ে পড়ে এবং অনিয়ন্ত্রিত চর্বি জারণের মাধ্যমে বিপুল কিটোন বডি তৈরি হয়।'
      ),
      nutritionConnection: l(
        'Carbohydrate starvation combined with severe dehydration creates profound electrolyte wasting, requiring strict IV potassium repletion before starting high-dose insulin therapy.',
        'শর্করার অভাব ও মারাত্মক পানিশূন্যতা রক্তে পটাশিয়াম শূন্য করে দেয়, তাই ইনসুলিন দেওয়ার আগে শিরায় পটাশিয়াম নিশ্চিত করা আবশ্যক।'
      ),
      clinicalSignificance: l(
        'Distinguishing DKA (high anion gap acidosis, positive serum ketones) from HHS (profound hyperosmolality > 320 mOsm/kg, minimal ketones) determines fluid resuscitation volume and mortality risk.',
        'DKA (উচ্চ অ্যানায়ন গ্যাপ ও কিটোন উপস্থিতি) এবং HHS (চরম অসমোলারিটি ও কিটোনহীনতা) সঠিকভাবে নির্ণয় করা রোগীর বেঁচে থাকার জন্য অপরিহার্য।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-liver-hepatic-starvation-refeeding',
      name: l('Liver: Refeeding Insulin Surge & AKA Gluconeogenic Arrest', 'যকৃত: রিফিডিং ইনসুলিন ঢেউ ও মদ্যপ কিটোঅ্যাসিডোসিসে গ্লুকোজ সংকট'),
      latinName: 'Hepar (Status Refeedens & Acidosis Alcoholica)',
      system: l('Digestive & Hepatic Metabolic Integration', 'পরিপাক ও যকৃতের সমন্বিত বিপাক ব্যবস্থা'),
      cavity: l('Peritoneal Cavity (Right Hypochondrium)', 'পেরিটোনিয়াল গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 5, y: 195, z: 2 },
      color: '#059669',
      highlightColor: '#10b981',
      shapeType: 'liver',
      description: l(
        'In prolonged starvation, the liver upregulates gluconeogenesis while whole-body phosphate stores are critically depleted. When refeeding with rapid intravenous carbohydrates is initiated, a sudden spike in endogenous insulin forces massive cellular uptake of glucose and phosphate to form glucose-6-phosphate and ATP, dropping serum inorganic phosphate to life-threatening nadirs (< 1.0 mg/dL). In alcoholic ketoacidosis, ethanol oxidation floods the liver with NADH, arresting gluconeogenesis.',
        'দীর্ঘ অনাহারে যকৃতে ফসফেটের তীব্র ঘাটতি থাকে। হঠাৎ করে প্রচুর শর্করা বা স্যালাইন দিলে ইনসুলিনের বন্যায় সমস্ত ফসফেট কোষের ভেতরে ঢুকে পড়ে এবং রক্তে ফসফেট বিপজ্জনকভাবে শূন্যের কোঠায় নেমে যায় (রিফিডিং সিন্ড্রোম)। আবার অতিরিক্ত অ্যালকোহল খেলে যকৃতে প্রচুর NADH তৈরি হয়ে গ্লুকোজ উৎপাদন বন্ধ হয়ে যায়।'
      ),
      spatialRelations: l(
        'Receives visceral venous return from the pancreas, spleen, and intestines, experiencing first-pass hormonal and substrate fluctuations.',
        'পরিপাকতন্ত্র ও অগ্ন্যাশয় থেকে পোর্টাল রক্তের মাধ্যমে হরমোন ও পুষ্টি উপাদানের প্রথম প্রভাব যকৃতেই পড়ে।'
      ),
      physiology: l(
        'High cytosolic NADH/NAD+ ratio from alcohol dehydrogenase shifts pyruvate to lactate and oxaloacetate to malate, freezing the entry of carbon into gluconeogenesis and precipitating profound hypoglycemia.',
        'অ্যালকোহল ভেঙে প্রচুর NADH তৈরি হওয়ায় পাইরুভেট ল্যাকটেটে এবং অক্সালোঅ্যাসিটেট ম্যালেটে পরিণত হয়, ফলে যকৃতে নতুন গ্লুকোজ তৈরির পথ সম্পূর্ণ রুদ্ধ হয়ে মারাত্মক হাইপোগ্লাইসেমিয়া দেখা দেয়।'
      ),
      nutritionConnection: l(
        'Administration of IV dextrose without co-administering intravenous thiamine (vitamin B1) triggers acute Wernicke encephalopathy by overwhelming thiamine-deficient pyruvate dehydrogenase.',
        'থায়ামিন (ভিটামিন বি১) না দিয়ে শুধু গ্লুকোজ স্যালাইন দিলে মস্তিষ্কের এনজাইম অচল হয়ে রোগী তৎক্ষণাৎ ভার্নিকে এনসেফালোপ্যাথিতে অচেতন হতে পারে।'
      ),
      clinicalSignificance: l(
        'Preventing refeeding syndrome requires starting caloric intake at no more than 10-15 kcal/kg/day with proactive intravenous phosphate and potassium supplementation.',
        'রিফিডিং সিন্ড্রোম ঠেকাতে অনাহারী রোগীকে শুরুতে খুব ধীরে ধীরে কম ক্যালোরি এবং আগাম ফসফেট ও পটাশিয়াম সরবরাহ করতে হয়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-heart-cardiogenic-shock-hypophosphatemia',
      name: l('Heart: Myocardial Failure in Refeeding & Type A Lactic Shock', 'হৃদপিণ্ড: রিফিডিং ফসফেট ঘাটতি ও টাইপ-এ ল্যাকটিক শকে হার্ট ফেইলিউর'),
      latinName: 'Cor (Insufficientia Cardiorespiratoria Acuta)',
      system: l('Cardiovascular & Hemodynamic System', 'সংবহনতন্ত্র ও রক্তগতিবিদ্যা ব্যবস্থা'),
      cavity: l('Middle Mediastinum (Pericardial Cavity)', 'মধ্য মিডিয়াস্টিনাম (পেরিকার্ডিয়াল গহ্বর)'),
      position3D: { x: -2, y: 215, z: 2 },
      color: '#dc2626',
      highlightColor: '#ef4444',
      shapeType: 'heart',
      description: l(
        'In severe refeeding syndrome, profound hypophosphatemia cripples myocardial intracellular ATP synthesis and creatine phosphate shuttling, causing acute contractile failure, refractory arrhythmias, and cardiogenic pulmonary edema. In septic and cardiogenic shock, widespread tissue hypoperfusion causes cellular hypoxia (Type A lactic acidosis), where failure of electron transport forces uncoupled anaerobic glycolysis and lethal systemic acidemia (arterial pH < 7.10).',
        'রিফিডিং সিন্ড্রোমে ফসফেটের মারাত্মক অভাবে হৃদপেশিতে এটিপি তৈরি বন্ধ হয়ে হার্ট ফেইলিউর ও অনিয়মিত হৃদস্পন্দন দেখা দেয়। অন্যদিকে সেপটিক বা কার্ডিওজেনিক শকে রক্ত চলাচল কমে কোষে অক্সিজেনের তীব্র ঘাটতি তৈরি হয় (টাইপ-এ ল্যাকটিক অ্যাসিডোসিস), যার ফলে অবাধ গ্লাইকোলাইসিসের চাপে রক্ত অত্যন্ত অম্লীয় হয়ে পড়ে।'
      ),
      spatialRelations: l(
        'Anchored to the central tendon of the diaphragm and flanked by the lungs, pumping oxygenated blood to all systemic vascular beds.',
        'মধ্যচ্ছদার ওপর অবস্থিত যা ফুসফুসের মধ্যবর্তী স্থান থেকে সারা দেহে অক্সিজেনযুক্ত রক্ত সংবহন পরিচালনা করে।'
      ),
      physiology: l(
        'Severe systemic acidosis (pH < 7.20) directly blunts myocardial beta-adrenergic receptor responsiveness, worsening hypotension and creating a lethal positive-feedback spiral.',
        'রক্তের তীব্র অম্লতা (pH < ৭.২০) হৃদপিণ্ডের অ্যাড্রেনার্জিক সংবেদনশীলতা নষ্ট করে রক্তচাপ আশঙ্কাজনকভাবে নামিয়ে দেয়।'
      ),
      nutritionConnection: l(
        'Magnesium is the obligate cofactor for Na+/K+-ATPase and adenylate cyclase; co-existing hypomagnesemia makes hypokalemia and cardiac arrhythmias refractory to standard therapy.',
        'ম্যাগনেসিয়াম হলো সোডিয়াম-পটাশিয়াম পাম্পের প্রধান সহায়ক; রক্তে ম্যাগনেসিয়াম কম থাকলে পটাশিয়াম প্রয়োগ করলেও হৃদস্পন্দনের সমস্যা নিরাময় হয় না।'
      ),
      clinicalSignificance: l(
        'Arterial blood gas lactate > 4.0 mmol/L in circulatory shock is a sensitive biomarker of occult tissue hypoperfusion demanding urgent volume resuscitation and vasopressor support.',
        'রক্তে ল্যাকটেট ৪.০ মিলিমোল/লিটার ছাড়িয়ে যাওয়া মারাত্মক শকের লক্ষণ, যা দেখা মাত্রই দ্রুত স্যালাইন ও রক্তচাপ বাড়ানোর ওষুধ প্রয়োগ করতে হয়।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-kidneys-renal-acid-base-clearance',
      name: l('Kidneys: Bicarbonate Regeneration & Organic Acid Clearance', 'বৃক্ক: বাইকার্বনেট পুনরুৎপাদন ও জৈব এসিড নিষ্কাশন'),
      latinName: 'Renes (Regulatio Acidi-Baseos Renalis)',
      system: l('Urinary & Acid-Base Homeostatic System', 'রেচনতন্ত্র ও অম্ল-ক্ষার ভারসাম্য ব্যবস্থা'),
      cavity: l('Retroperitoneum (Paravertebral Gutters)', 'রেট্রোপেরিটোনিয়াম (মেরুদণ্ডের উভয় পাশে)'),
      position3D: { x: 0, y: 180, z: 2 },
      color: '#7c3aed',
      highlightColor: '#a78bfa',
      shapeType: 'kidneys',
      description: l(
        'The kidneys are the ultimate defense against metabolic acidosis, reabsorbing filtered bicarbonate in proximal tubules and synthesizing de novo bicarbonate through glutamine deamidation (ammoniagenesis) in response to chronic acid loads. In diabetic ketoacidosis and organic acidemias (methylmalonic and propionic acidemias), massive filtration of unmeasured organic anions overwhelms tubular reabsorption, causing osmotic diuresis, prerenal azotemia, and profound bicarbonate loss.',
        'বৃক্ক হলো অম্লীয় বিপাকীয় সংকট নিয়ন্ত্রণের প্রধান অঙ্গ। এটি রক্ত থেকে বাইকার্বনেট সংরক্ষণ করে এবং গ্লুটামিন ভেঙে নতুন বাইকার্বনেট ও অ্যামোনিয়াম তৈরি করে এসিড প্রস্রাবের সাথে বের করে দেয়। DKA এবং অর্গানিক অ্যাসিডেমিয়ায় অতিরিক্ত এসিড ফিল্টার হতে গিয়ে প্রস্রাবের মাধ্যমে প্রচুর পানি ও লবণ বেরিয়ে মারাত্মক পানিশূন্যতা তৈরি হয়।'
      ),
      spatialRelations: l(
        'Positioned retroperitoneally between T12 and L3, filtering 180 liters of plasma daily through paired renal arteries.',
        'মেরুদণ্ডের উভয় পাশে রেট্রোপেরিটোনিয়াল স্থানে অবস্থিত যা প্রতিদিন ১৮০ লিটার রক্ত ছেঁকে বিষাক্ত বর্জ্য দূর করে।'
      ),
      physiology: l(
        'Renal ammoniagenesis converts glutamine into two NH4+ ions (excreted in urine) and two HCO3- ions (returned to blood), regenerating up to 200 mmol of bicarbonate daily during severe metabolic acid loads.',
        'তীব্র এসিডোসিসের সময় বৃক্ক প্রতিদিন ২০০ মিলিমোল পর্যন্ত নতুন বাইকার্বনেট তৈরি করে রক্তে যোগান দিয়ে জীবন রক্ষা করে।'
      ),
      nutritionConnection: l(
        'In organic acidemias, carnitine supplementation is critical to conjugate toxic propionyl and methylmalonyl groups into water-soluble carnitine esters for safe urinary excretion.',
        'অর্গানিক অ্যাসিডেমিয়ার শিশুদের কার্নিটিন সাপ্লিমেন্ট দেওয়া অত্যন্ত জরুরি, যা বিষাক্ত এসিডের সাথে যুক্ত হয়ে প্রস্রাবের মাধ্যমে তা নিরাপদে বের করে দেয়।'
      ),
      clinicalSignificance: l(
        'Serum anion gap calculation (Na - [Cl + HCO3]) > 12 mEq/L pinpoints unmeasured organic anions (ketoacids, lactate, toxins) requiring targeted antidotes rather than indiscriminate bicarbonate infusions.',
        'অ্যানায়ন গ্যাপ হিসাব করে রক্তে লুকানো বিষাক্ত এসিডের উপস্থিতি নিশ্চিত করা যায়, যা সঠিক চিকিৎসা নির্ধারণে চিকিৎসকদের প্রধান ভরসা।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism36ClinicalCasesLesson: LessonTopic = {
  id: 'topic.metabolism.clinical-cases-grand-rounds',
  slug: 'clinical-cases-grand-rounds',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '36 · Clinical Grand Rounds: Acute Metabolic Emergencies & Inborn Errors',
    '৩৬ · ক্লিনিক্যাল গ্র্যান্ড রাউন্ডস: তীব্র বিপাকীয় জরুরি অবস্থা ও জন্মগত ত্রুটি'
  ),
  summary: l(
    'Capstone synthesis of clinical biochemistry: Refeeding syndrome and lethal hypophosphatemia; Diabetic Ketoacidosis (DKA) vs Hyperosmolar Hyperglycemic State (HHS); inborn errors of propionate/methylmalonate metabolism and secondary hyperammonemia; Type A vs Type B lactic acidosis differential diagnosis; and Alcoholic Ketoacidosis with profound hypoglycemic arrest.',
    'চিকিৎসা জৈব-রসায়নের সর্বোচ্চ সমন্বয়: রিফিডিং সিন্ড্রোম ও মারাত্মক ফসফেট ঘাটতি; DKA বনাম হাইপারঅসমোলার ডায়াবেটিক সংকট; প্রোপিয়নিক ও মিথাইলম্যালনিক এসিডেমিয়া ও ইউরিয়া চক্রের বিষাক্ততা; টাইপ-এ বনাম টাইপ-বি ল্যাকটিক এসিডোসিসের ব্যবচ্ছেদ; এবং মদ্যপ কিটোঅ্যাসিডোসিস ও তীব্র হাইপোগ্লাইসেমিয়ার জরুরি নিরাময় কৌশল।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Synthesize the pathophysiological cascade of refeeding syndrome, explaining why rapid carbohydrate re-introduction triggers lethal hypophosphatemia, cardiac arrest, and respiratory muscle failure.',
      'রিফিডিং সিন্ড্রোমের আণবিক কারণ বিশ্লেষণ করা এবং হঠাৎ শর্করা প্রয়োগ কেন রক্তে ফসফেট শূন্য করে হৃদরোগ ও শ্বাসযন্ত্র বিকল করে তা ব্যাখ্যা করা।'
    ),
    l(
      'Contrast the molecular endocrine mechanisms separating Diabetic Ketoacidosis (absolute insulin lack, unconstrained HSL lipolysis) from Hyperosmolar Hyperglycemic State (residual portal insulin, absent ketogenesis, extreme hyperosmolality).',
      'DKA (ইনসুলিনের শতভাগ অভাব ও তীব্র কিটোন উৎপাদন) এবং HHS (সামান্য ইনসুলিনের উপস্থিতি ও কিটোনহীন চরম অসমোলারিটি) এর মধ্যকার আণবিক হরমোন পার্থক্যের তুলনা করা।'
    ),
    l(
      'Differential diagnose Type A vs Type B lactic acidosis, detailing how tissue hypoperfusion versus mitochondrial toxin/drug blockade (metformin, antiretrovirals) impairs lactate clearance.',
      'টিস্যুতে অক্সিজেনের ঘাটতি (টাইপ-এ) বনাম ওষুধ বা মাইটোকন্ড্রিয়াল বিষক্রিয়ায় (টাইপ-বি) ল্যাকটিক অ্যাসিডোসিসের কারণ ও চিকিৎসা পদ্ধতি নিখুঁতভাবে নিরূপণ করা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.glycolysis-pyruvate', 'topic.metabolism.fatty-acid-oxidation-ketones', 'topic.metabolism.amino-acid-catabolism-urea'],
  relatedTopicIds: ['topic.metabolism.metabolic-disease-clinical-integration', 'topic.metabolism.inborn-errors-metabolism'],
  references: caseRefs,
  evidenceBySection: {
    introduction: ['mehanna-refeeding-syndrome-bmj-2008', 'lehninger-biochem-8e-ch23'],
    structure: ['kitabchi-dka-hhs-diabetes-care-2009', 'fauci-harrison-internal-med-21e-ch398'],
    mechanism: ['mehanna-refeeding-syndrome-bmj-2008', 'fauci-harrison-internal-med-21e-ch398'],
    integration: ['kraushaar-lactic-acidosis-crit-care-2014', 'fauci-harrison-internal-med-21e-ch398'],
    practice: ['kitabchi-dka-hhs-diabetes-care-2009', 'kraushaar-lactic-acidosis-crit-care-2014'],
    takeaways: ['lehninger-biochem-8e-ch23', 'fauci-harrison-internal-med-21e-ch398'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Capstone Grand Rounds: Clinical Metabolic Diagnostic Logic', '১. গ্র্যান্ড রাউন্ডস: ক্লিনিক্যাল বিপাকীয় রোগনির্ণয়ের মূল যুক্তি'), sectionId: 'introduction' },
      { id: 'sec-case1-refeeding', label: l('2. Case 1: Refeeding Syndrome & Lethal Hypophosphatemia', '২. কেস ১: রিফিডিং সিন্ড্রোম ও মারাত্মক ফসফেট ঘাটতি'), sectionId: 'structure' },
      { id: 'sec-case2-dka-hhs', label: l('3. Case 2: DKA vs HHS Molecular Endocrine Dichotomy', '৩. কেস ২: DKA বনাম HHS আণবিক হরমোন বৈসাদৃশ্য'), sectionId: 'mechanism' },
      { id: 'sec-case3-inborn', label: l('4. Case 3: Propionic & Methylmalonic Acidemias in Neonates', '৪. কেস ৩: নবজাতকের প্রোপিয়নিক ও মিথাইলম্যালনিক এসিডেমিয়া'), sectionId: 'integration' },
      { id: 'sec-case4-lactic', label: l('5. Case 4: Lactic Acidosis Type A vs Type B & Alcoholic Ketoacidosis', '৫. কেস ৪: ল্যাকটিক এসিডোসিস টাইপ-এ বনাম বি ও মদ্যপ কিটোঅ্যাসিডোসিস'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Mastery Synthesis & Grand Curriculum Completion', '৬. সামগ্রিক মূল্যায়ন ও পাঠ্যক্রমের মহোত্তম সমাপ্তি'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Refeeding Syndrome', 'রিফিডিং সিন্ড্রোম'),
        definition: l(
          'A life-threatening clinical syndrome of severe electrolyte shifts (profound hypophosphatemia, hypokalemia, hypomagnesemia) and cardiac dysfunction occurring when carbohydrates are reintroduced to chronically malnourished patients.',
          'দীর্ঘদিন অনাহারে থাকা রোগীকে হঠাৎ প্রচুর শর্করা বা খাবার দিলে রক্তে ফসফেট, পটাশিয়াম ও ম্যাগনেসিয়াম শূন্য হয়ে হৃদরোগ ও শ্বাসকষ্টে মৃত্যুর আশঙ্কাজনক অবস্থা।'
        ),
      },
      {
        term: l('Serum Anion Gap', 'সিরাম অ্যানায়ন গ্যাপ'),
        definition: l(
          'The difference between measured serum cations and anions ([Na+] - ([Cl-] + [HCO3-])), normally 8-12 mEq/L; elevations above 12 mEq/L indicate accumulation of unmeasured organic acids (ketoacids, lactate, toxic metabolites).',
          'রক্তরসের প্রধান পজিটিভ ও নেগেটিভ আয়নের পার্থক্যের হিসাব ([Na+] - ([Cl-] + [HCO3-])), যার স্বাভাবিক মান ৮-১২; ১২ এর বেশি হলে রক্তে বিষাক্ত এসিড জমার প্রমাণ মেলে।'
        ),
      },
      {
        term: l('Diabetic Ketoacidosis (DKA)', 'ডায়াবেটিক কিটোঅ্যাসিডোসিস (DKA)'),
        definition: l(
          'An acute metabolic emergency driven by absolute insulin deficiency, marked by uncontrolled lipolysis, high ketone production (acetoacetate, beta-hydroxybutyrate), high anion gap acidosis, and ketonuria.',
          'ইনসুলিনের চরম অভাবে সৃষ্ট তীব্র জটিলতা যেখানে অনিয়ন্ত্রিতভাবে চর্বি ভেঙে প্রচুর কিটোন তৈরি হয় এবং রক্ত অত্যন্ত বিপজ্জনক অম্লতায় পৌঁছে যায়।'
        ),
      },
      {
        term: l('Hyperosmolar Hyperglycemic State (HHS)', 'হাইপারঅসমোলার হাইপারগ্লাইসেমিক অবস্থা (HHS)'),
        definition: l(
          'A hyperglycemic crisis characterized by severe blood glucose elevations (> 600 mg/dL) and hyperosmolality (> 320 mOsm/kg) with minimal ketosis, preserved by trace residual insulin suppressing lipolysis.',
          'ডায়াবেটিসের এমন এক জটিল অবস্থা যেখানে রক্তে চিনি মারাত্মক বেড়ে যায় (> ৬০০) এবং রক্ত ঘন হয়ে যায়, তবে সামান্য ইনসুলিন থাকায় কিটোন তৈরি হয় না।'
        ),
      },
      {
        term: l('Type A vs Type B Lactic Acidosis', 'টাইপ-এ বনাম টাইপ-বি ল্যাকটিক অ্যাসিডোসিস'),
        definition: l(
          'Type A is caused by overt tissue hypoperfusion and cellular hypoxia (septic or cardiogenic shock); Type B is caused by cellular metabolic or mitochondrial enzymatic dysfunction without overt hypoperfusion (metformin toxicity, thiamine deficiency).',
          'টাইপ-এ ঘটে অক্সিজেনের অভাবে রক্ত সংবহন বন্ধ হয়ে শকে গেলে; টাইপ-বি ঘটে রক্ত চলাচল ঠিক থাকলেও ওষুধ বা বিষক্রিয়ায় মাইটোকন্ড্রিয়ার কাজ নষ্ট হলে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Serum Anion Gap & Delta-Delta Ratio in Mixed Acidosis', 'সিরাম অ্যানায়ন গ্যাপ ও ডেল্টা-ডেল্টা অনুপাত নির্ণয়'),
        steps: [
          l(
            'Step 1: Calculate serum anion gap: Anion Gap = [Na+] - ([Cl-] + [HCO3-]) = 136 - (96 + 10) = 136 - 106 = 30 mEq/L (severely elevated, reference normal: 8-12 mEq/L).',
            'ধাপ ১: অ্যানায়ন গ্যাপ নির্ণয়: AG = ১৩৬ - (৯৬ + ১০) = ১৩৬ - ১০৬ = ৩০ mEq/L (স্বাভাবিকের চেয়ে অনেক বেশি)।'
          ),
          l(
            'Step 2: Calculate Delta AG: Delta AG = Measured AG - Normal AG = 30 - 12 = 18 mEq/L.',
            'ধাপ ২: ডেল্টা AG বের করা: ডেল্টা AG = ৩০ - ১২ = ১৮ mEq/L।'
          ),
          l(
            'Step 3: Calculate Delta Bicarbonate: Delta HCO3- = Normal HCO3- - Measured HCO3- = 24 - 10 = 14 mEq/L.',
            'ধাপ ৩: ডেল্টা বাইকার্বনেট বের করা: ডেল্টা HCO3- = ২৪ - ১০ = ১৪ mEq/L।'
          ),
          l(
            'Step 4: Compute Delta-Delta Ratio: Ratio = Delta AG / Delta HCO3- = 18 / 14 = 1.29. A ratio between 1.0 and 2.0 indicates pure, uncomplicated high anion gap metabolic acidosis (HAGMA) attributable to diabetic ketoacidosis without a concurrent secondary metabolic alkalosis or normal anion gap acidosis.',
            'ধাপ ৪: ডেল্টা-ডেল্টা অনুপাত: ১৮ / ১৪ = ১.২৯। এই অনুপাত ১.০ থেকে ২.০ এর মধ্যে থাকা নির্দেশ করে এটি কেবল বিশুদ্ধ DKA জনিত এসিডোসিস, সাথে অন্য কোনো জটিলতা নেই।'
          ),
        ],
        conclusion: l(
          'Serum anion gap is 30 mEq/L with a Delta-Delta ratio of 1.29, confirming pure high anion gap metabolic acidosis caused by accumulation of acetoacetate and beta-hydroxybutyrate in diabetic ketoacidosis.',
          'অ্যানায়ন গ্যাপ ৩০ mEq/L এবং ডেল্টা অনুপাত ১.২৯, যা নিশ্চিত করে যে রোগী কিটোন বডির অতিরিক্ত জমার কারণে বিশুদ্ধ ডায়াবেটিক কিটোঅ্যাসিডোসিসে ভুগছে।'
        ),
      },
      {
        title: l('Refeeding Syndrome: Calculating Phosphate Deficit & ATP Depletion Risk', 'রিফিডিং সিন্ড্রোম: ফসফেটের ঘাটতি ও এটিপি বিপর্যয় হিসাব'),
        steps: [
          l(
            'Step 1: Determine the fractional deficit of inorganic phosphate below the 2.0 mg/dL critical threshold: Ratio = Measured Phosphate / Threshold = 0.8 / 2.0 = 0.40 (40% of baseline capacity).',
            'ধাপ ১: ফসফেটের ঘাটতির অনুপাত: ০.৮ / ২.০ = ০.৪০ (স্বাভাবিকের মাত্র ৪০%)।'
          ),
          l(
            'Step 2: Calculate estimated erythrocyte 2,3-BPG: 2,3-BPG = 5.0 mmol/L * 0.40 = 2.0 mmol/L (a 60% reduction in red cell 2,3-BPG).',
            'ধাপ ২: লোহিত রক্তকণিকার নতুন 2,3-BPG মাত্রা: ৫.০ * ০.৪০ = ২.০ মিলিমোল/লিটার (৬০% কমে গেছে)।'
          ),
          l(
            'Step 3: Analyze physiological consequences: Depletion of 2,3-BPG causes an extreme left-shift of the oxyhemoglobin dissociation curve (P50 drops dramatically), locking oxygen onto hemoglobin and preventing oxygen offloading to tissues, causing severe tissue hypoxia, diaphragmatic paralysis, and respiratory failure.',
            'ধাপ ৩: শারীরবৃত্তীয় প্রভাব: 2,3-BPG কমে যাওয়ায় হিমোগ্লোবিন অক্সিজেনকে শক্ত করে আঁকড়ে ধরে রাখে এবং কোষে অক্সিজেন ছাড়তে পারে না। ফলে শ্বাসযন্ত্রের পেশি দুর্বল হয়ে রোগী শ্বাসকষ্টে মারা যেতে পারে।'
          ),
        ],
        conclusion: l(
          'Erythrocyte 2,3-BPG drops to approximately 2.0 mmol/L, causing a severe left-shift of the hemoglobin dissociation curve and failure of peripheral tissue oxygen release, directly precipitating acute respiratory muscle failure.',
          'রক্তকণিকায় 2,3-BPG নেমে ২.০ মিলিমোল/লিটার হয়, যার ফলে রক্ত কলাগুলোতে অক্সিজেন সরবরাহ করতে ব্যর্থ হয় এবং শ্বাসযন্ত্রের পেশি অবশ হয়ে মারাত্মক শ্বাসকষ্ট দেখা দেয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why must intravenous thiamine ALWAYS be administered BEFORE starting intravenous dextrose in a malnourished patient suspected of chronic alcohol use disorder?',
          'মদ্যপ বা পুষ্টিহীন রোগীকে গ্লুকোজ স্যালাইন দেওয়ার আগে কেন সর্বদা শিরায় থায়ামিন (ভিটামিন বি১) ইনজেকশন দিতে হয়?'
        ),
        answer: l(
          'Thiamine is the obligate cofactor for pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase; giving glucose without thiamine accelerates brain glycolysis, exhausting trace thiamine and precipitating acute, irreversible Wernicke encephalopathy.',
          'থায়ামিন হলো পাইরুভেট ও ক্রেবস চক্রের প্রধান এনজাইমের কো-ফ্যাক্টর; থায়ামিন ছাড়া গ্লুকোজ দিলে মস্তিষ্কে গ্লাইকোলাইসিস দ্রুত চলে অবশিষ্ট থায়ামিন শেষ করে ফেলে এবং তৎক্ষণাৎ স্থায়ী অন্ধত্ব বা অজ্ঞানতা (ভার্নিকে এনসেফালোপ্যাথি) তৈরি করে।'
        ),
      },
      {
        question: l(
          'What molecular difference explains why patients with Hyperosmolar Hyperglycemic State (HHS) do NOT develop significant ketoacidosis despite blood glucose levels exceeding 800 mg/dL?',
          'HHS রোগীদের রক্তে চিনি ৮০০ ছাড়িয়ে গেলেও কেন তাদের DKA-এর মতো মারাত্মক কিটোঅ্যাসিডোসিস হয় না?'
        ),
        answer: l(
          'HHS patients retain tiny residual levels of endogenous portal insulin that are sufficient to inhibit hormone-sensitive lipase (HSL) and block hepatic ketogenesis, even though insufficient to stimulate peripheral GLUT4 glucose uptake.',
          'HHS রোগীদের দেহে সামান্য পরিমাণ ইনসুলিন অবশিষ্ট থাকে যা চর্বি ভাঙা এবং কিটোন তৈরি বন্ধ রাখার জন্য যথেষ্ট, যদিও তা রক্ত থেকে চিনি সরানোর জন্য যথেষ্ট নয়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: cases3DData,
  interactiveDiagram: {
    id: 'diag-metabolism36-clinical-cases',
    title: l(
      'Interactive Bedside Metabolic Acidosis Triage & Clinical Pathways',
      'ইন্টারেক্টিভ বিছানায় বিপাকীয় অ্যাসিডোসিস ট্রায়াজ ও চিকিৎসা পথ'
    ),
    disclaimer: l(
      'Interactive educational diagram illustrating acute clinical metabolic acidosis triage algorithms.',
      'তীব্র বিপাকীয় অ্যাসিডোসিস ট্রায়াজ প্রক্রিয়া প্রদর্শনকারী শিক্ষামূলক ডায়াগ্রাম।'
    ),
    description: l(
      'Explore how laboratory anion gap, beta-hydroxybutyrate, and arterial lactate values route patients into precise clinical management algorithms.',
      'পর্যবেক্ষণ করুন কীভাবে ল্যাবরেটরির অ্যানায়ন গ্যাপ, কিটোন ও ল্যাকটেটের মান রোগীর সঠিক চিকিৎসা কৌশল নির্ধারণ করে জীবন বাঁচায়।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'case-node-patient-presentation',
        label: l('1. Patient in Critical Distress', '১. সংকটজনক অবস্থায় রোগী'),
        description: l(
          'Altered mental status, tachypnea (Kussmaul breathing), dehydration, and suspected acute metabolic collapse.',
          'অজ্ঞান অবস্থা, দ্রুত শ্বাসপ্রশ্বাস (কুসমল শ্বাস), পানিশূন্যতা ও তীব্র বিপাকীয় বিপর্যয়।'
        ),
        details: l(
          'Demands immediate airway, breathing, circulation assessment with rapid blood gas and electrolyte workup.',
          'তৎক্ষণাৎ শ্বাসপ্রশ্বাস ও রক্ত সঞ্চালন মূল্যায়নের পাশাপাশি দ্রুত ব্লাড গ্যাস ও ইলেকট্রোলাইট পরীক্ষা জরুরি।'
        ),
        sectionId: 'introduction',
        color: '#ef4444',
      },
      {
        id: 'case-node-anion-gap',
        label: l('2. Anion Gap Calculation', '২. অ্যানায়ন গ্যাপ হিসাব'),
        description: l(
          'AG > 12 confirms high anion gap acidosis: ketoacids, lactate, toxic alcohols, or renal failure anions.',
          'AG ১২ এর বেশি হলে রক্তে বিষাক্ত এসিড বা কিটোনের উপস্থিতি নিশ্চিত হয়।'
        ),
        details: l(
          'Formula: Na - (Cl + HCO3). Delta-delta ratio distinguishes pure versus mixed underlying metabolic disorders.',
          'সূত্র: সোডিয়াম - (ক্লোরাইড + বাইকার্বনেট)। ডেল্টা-ডেল্টা অনুপাত মিশ্র এসিড-ক্ষার সমস্যা শনাক্ত করে।'
        ),
        sectionId: 'structure',
        color: '#3b82f6',
      },
      {
        id: 'case-node-dka-pathway',
        label: l('3. DKA Protocol (Fluids + K+ First)', '৩. DKA প্রোটোকল (স্যালাইন ও পটাশিয়াম আগে)'),
        description: l(
          'Isotonic saline expansion, verify K+ > 3.3 mEq/L, then initiate continuous IV regular insulin infusion.',
          'প্রচুর স্যালাইন প্রয়োগ, পটাশিয়াম নিশ্চিতকরণ এবং এরপর ইনসুলিন ইনফিউশন চালু করা।'
        ),
        details: l(
          'Insulin drives potassium into cells; repletion prior to insulin prevents fatal hypokalemic cardiac arrhythmias.',
          'ইনসুলিন পটাশিয়াম কোষে ঢুকিয়ে দেয়; আগে পটাশিয়াম দিলে বিপজ্জনক হৃদযন্ত্র বন্ধ হওয়া প্রতিরোধ হয়।'
        ),
        sectionId: 'mechanism',
        color: '#10b981',
      },
      {
        id: 'case-node-lactic-pathway',
        label: l('4. Lactic Shock Resuscitation', '৪. ল্যাকটিক শকে নিবিড় পরিচর্যা'),
        description: l(
          'Restore tissue perfusion with vasopressors and inotropes; eliminate offending drugs (stop metformin).',
          'রক্তচাপ বাড়ানোর ওষুধ দিয়ে অক্সিজেন সরবরাহ বৃদ্ধি এবং ক্ষতিকর মেটফরমিন ওষুধ বন্ধ করা।'
        ),
        details: l(
          'Type A requires volume and vasopressors to restore oxygen delivery; Type B requires cessation of mitochondrial toxins.',
          'টাইপ-এ অবস্থায় রক্ত ও অক্সিজেন সংবহন জরুরি; টাইপ-বি অবস্থায় মাইটোকন্ড্রিয়াল বিষাক্ত ওষুধ বন্ধ করা জরুরি।'
        ),
        sectionId: 'integration',
        color: '#8b5cf6',
      },
      {
        id: 'case-node-refeeding-pathway',
        label: l('5. Refeeding Prophylaxis Protocol', '৫. রিফিডিং প্রতিরোধ প্রোটোকল'),
        description: l(
          'Administer high-dose IV thiamine, start caloric intake cautiously (< 10 kcal/kg/day), and replete phosphate vigorously.',
          'উচ্চমাত্রার থায়ামিন ইনজেকশন, সতর্ক খাদ্যগ্রহণ এবং প্রচুর ফসফেট সরবরাহ করা।'
        ),
        details: l(
          'Prevents fatal ATP exhaustion, erythrocyte 2,3-BPG collapse, diaphragmatic paralysis, and Wernicke encephalopathy.',
          'এটিপি ঘাটতি, রক্তকণিকার 2,3-BPG পতন, শ্বাসকষ্টে ফুসফুস অচল হওয়া এবং ভার্নিকে এনসেফালোপ্যাথি রোধ করে।'
        ),
        sectionId: 'practice',
        color: '#d97706',
      },
      {
        id: 'case-node-pediatric-inborn',
        label: l('6. Pediatric Inborn Error Protocol', '৬. শিশুদের জন্মগত রোগ প্রোটোকল'),
        description: l(
          'Stop all protein intake, administer IV dextrose + L-carnitine to clear toxic propionyl esters, and treat hyperammonemia.',
          'সব ধরনের প্রোটিন বন্ধ রাখা, গ্লুকোজ ও কার্নিটিন দিয়ে বিষাক্ত এসিড বের করা এবং অ্যামোনিয়া কমানো।'
        ),
        details: l(
          'Restores hepatic CPS-I activity by reducing propionyl-CoA-mediated inhibition of N-acetylglutamate synthase.',
          'প্রোপিওনাইল-কোএ দ্বারা NAGS বাধা কমিয়ে যকৃতে ইউরিয়া চক্রের মূল এনজাইম CPS-I পুনরায় চালু করে।'
        ),
        sectionId: 'takeaways',
        color: '#ec4899',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'Integrated Clinical Diagnostic Logic: Anion Gap, Ketones & Lactate Bedside Flowchart.',
      'সমন্বিত ক্লিনিক্যাল রোগনির্ণয় নকশা: অ্যানায়ন গ্যাপ, কিটোন ও ল্যাকটেট প্রবাহচিত্র।'
    ),
    steps: [
      l(
        'Recognize metabolic acidemia with arterial pH < 7.35 and serum bicarbonate < 22 mEq/L, prompting urgent anion gap calculation.',
        'রক্তের pH ও বাইকার্বনেটের মারাত্মক পতন শনাক্ত করে তৎক্ষণাৎ অ্যানায়ন গ্যাপ হিসাব শুরু করা।'
      ),
      l(
        'Calculate Serum Anion Gap = Na - (Cl + HCO3) to differentiate High Anion Gap Acidosis (AG > 12) from Normal Anion Gap Acidosis.',
        'সোডিয়াম থেকে ক্লোরাইড ও বাইকার্বনেট বাদ দিয়ে উচ্চ অ্যানায়ন গ্যাপ বনাম স্বাভাবিক অ্যানায়ন গ্যাপ অ্যাসিডোসিস পৃথক করা।'
      ),
      l(
        'Measure serum beta-hydroxybutyrate and arterial lactate to identify ketoacidosis versus Type A/B lactic shock states.',
        'রক্তে বিটা-হাইড্রোক্সিবিউটাইরেট ও ল্যাকটেট মেপে কিটোঅ্যাসিডোসিস বনাম ল্যাকটিক শক নির্ণয় করা।'
      ),
      l(
        'Initiate targeted pathway resuscitation: electrolyte repletion prior to insulin in DKA, thiamine before dextrose in refeeding.',
        'সুনির্দিষ্ট চিকিৎসা শুরু: DKA-তে ইনসুলিনের আগে পটাশিয়াম এবং রিফিডিং-এ শর্করার আগে থায়ামিন ইনজেকশন নিশ্চিত করা।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 54-year-old patient with type 2 diabetes and chronic kidney disease on metformin is admitted in septic shock. Arterial blood gas reveals pH 7.08, bicarbonate 8 mEq/L, and arterial lactate 14.5 mmol/L. What dual pathophysiological mechanisms account for this catastrophic lactic acidosis?',
      'টাইপ-২ ডায়াবেটিস ও কিডনি রোগে আক্রান্ত মেটফরমিন খাওয়া এক রোগী সেপটিক শকে হাসপাতালে এলো। রক্তে pH ৭.০৮ এবং ল্যাকটেট ১৪.৫ পাওয়া গেল। এই ভয়াবহ ল্যাকটিক অ্যাসিডোসিসের দ্বৈত কারণ কোনটি?'
    ),
    options: [
      l(
        'Combination of Type A lactic acidosis (systemic septic hypoperfusion reducing oxygen delivery to mitochondria) and Type B lactic acidosis (metformin accumulation inhibiting mitochondrial Complex I and hepatic gluconeogenic lactate clearance).',
        'টাইপ-এ ল্যাকটিক এসিডোসিস (সেপটিক শকে রক্ত চলাচল ও অক্সিজেন কমে যাওয়া) এবং টাইপ-বি ল্যাকটিক এসিডোসিস (কিডনি বিকল হওয়ায় মেটফরমিন জমে মাইটোকন্ড্রিয়াল কমপ্লেক্স ১ ও যকৃতের ল্যাকটেট রূপান্তর বন্ধ হওয়া) এর সম্মিলিত প্রভাব।'
      ),
      l(
        'Complete spontaneous conversion of blood hemoglobin into calcium carbonate crystals.',
        'রক্তের হিমোগ্লোবিন স্বতঃস্ফূর্তভাবে ক্যালসিয়াম কার্বনেট পাথরে পরিণত হওয়া।'
      ),
      l(
        'Sudden hypersecretion of insulin causing cellular dehydration.',
        'ইনসুলিনের অতিরিক্ত নিঃসরণের ফলে কোষে পানিশূন্যতা সৃষ্টি হওয়া।'
      ),
      l(
        'Dietary consumption of too many citrus oranges within 24 hours.',
        '২৪ ঘণ্টার মধ্যে অতিরিক্ত পরিমাণে লেবু বা কমলালেবু খাওয়া।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'The patient suffers from mixed Type A and Type B lactic acidosis. Sepsis causes tissue hypoperfusion (Type A), while impaired renal excretion allows metformin to accumulate, directly poisoning mitochondrial Complex I and blocking hepatic lactate clearance via gluconeogenesis (Type B).',
      'রোগীটি টাইপ-এ ও বি এর যৌথ জটিলতায় আক্রান্ত। সেপসিসের কারণে অক্সিজেন ঘাটতি (টাইপ-এ) এবং কিডনি অকেজো হওয়ায় মেটফরমিন বিষক্রিয়ায় মাইটোকন্ড্রিয়া বন্ধ হয়ে যাওয়া (টাইপ-বি) মিলে ল্যাকটেট পাহাড়সম বৃদ্ধি করেছে।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Bedside Biochemist: Translating Molecular Pathways into Life-Saving Action', 'বিছানার পাশে জৈব-রসায়নবিদ: জীবন রক্ষায় আণবিক জ্ঞানের ব্যবহারিক প্রয়োগ'),
          paragraphs: [
            l(
              'Biochemistry is not an abstract exercise in memorizing molecular structures and reaction arrows; it is the living language of critical illness and resuscitation medicine. When a patient arrives at the emergency department in shock, comatose, or breathing with rapid deep gasps (Kussmaul respirations), the clinician must immediately decode the patient\'s metabolic state to save their life.',
              'জৈব-রসায়ন কেবল পরীক্ষার খাতায় রাসায়নিক সংকেত বা তীরচিহ্ন আঁকার কোনো নিরস বিষয় নয়; এটি হলো মুমূর্ষু রোগীর জীবন বাঁচানোর জীবন্ত ভাষা। যখন একজন রোগী অচেতন অবস্থায় বা দ্রুত গভীর শ্বাস নিয়ে হাসপাতালে উপস্থিত হয়, তখন চিকিৎসককে রোগীর ভেতরের জৈব-রাসায়নিক বিপর্যয় তাৎক্ষণিকভাবে পড়ে ফেলে সঠিক সিদ্ধান্ত নিতে হয়।'
            ),
            l(
              'Every abnormal blood test—an elevated lactate, an undetectable bicarbonate, a plummeting serum phosphate, or an astronomical blood sugar—is a direct distress signal from a specific biochemical pathway pushed beyond its homeostatic limits. This final capstone chapter brings together thirty-five preceding chapters of metabolic theory into bedside diagnostic mastery.',
              'রক্তের যেকোনো অস্বাভাবিক মান—উচ্চ ল্যাকটেট, শূন্য বাইকার্বনেট, বিপজ্জনকভাবে কমে যাওয়া ফসফেট বা মাত্রাতিরিক্ত রক্তে চিনি—দেহের কোনো নির্দিষ্ট এনজাইম বা বিপাক পথের বিকল হয়ে পড়ার আর্তনাদ। এই সমাপনী অধ্যায়টি পূর্ববর্তী ৩৫টি অধ্যায়ের সমস্ত জ্ঞানকে বাস্তব রোগীর চিকিৎসায় একীভূত করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Case 1: Refeeding Syndrome & the Catastrophic Phosphate Collapse', 'কেস ১: রিফিডিং সিন্ড্রোম ও রক্তে ফসফেটের মারাত্মক পতন'),
          paragraphs: [
            l(
              'Consider a patient who has undergone weeks of extreme starvation secondary to severe anorexia nervosa, prolonged famine, or chronic critical illness. During chronic starvation, the body shifts entirely from carbohydrate metabolism to fatty acid oxidation and ketone body utilization. Total-body stores of minerals, particularly inorganic phosphate, potassium, and magnesium, become severely depleted.',
              'ধরা যাক একজন রোগী দীর্ঘ কয়েক সপ্তাহ তীব্র অনাহারে বা পুষ্টিহীনতায় ভুগেছেন। এই দীর্ঘ অনাহারে শরীর শর্করার বদলে কেবল চর্বি ও কিটোন পুড়িয়ে বেঁচে থাকে। এই সময়ে দেহের মোট খনিজ উপাদান, বিশেষ করে অজৈব ফসফেট, পটাশিয়াম ও ম্যাগনেসিয়ামের ভাণ্ডার আশঙ্কাজনকভাবে খালি হয়ে যায়।'
            ),
            l(
              'When well-meaning medical staff suddenly administer a rapid infusion of intravenous dextrose or a rich carbohydrate meal, catastrophe strikes. The influx of glucose triggers a sudden, massive surge in endogenous insulin secretion. Insulin immediately stimulates cellular glucose uptake and activates the sodium-potassium ATPase, driving glucose, potassium, magnesium, and phosphate out of the bloodstream and into cells.',
              'এই অবস্থায় অজ্ঞতাবশত রোগীকে হঠাৎ প্রচুর মিষ্টি, খাবার বা গ্লুকোজ স্যালাইন দিলে ভয়াবহ বিপর্যয় নেমে আসে। গ্লুকোজের কারণে অগ্ন্যাশয় থেকে বিপুল ইনসুলিন হরমোন নিঃসৃত হয়। ইনসুলিন রক্তের সমস্ত ফসফেট, পটাশিয়াম ও ম্যাগনেসিয়ামকে এক নিমেষে কোষের ভেতরে টেনে নিয়ে রক্তকে শূন্য করে ফেলে।'
            ),
            l(
              'Within hours, serum inorganic phosphate crashes below 1.0 mg/dL (severe hypophosphatemia). Because phosphate is the essential building block of adenosine triphosphate (ATP) and erythrocyte 2,3-bisphosphoglycerate (2,3-BPG), intracellular ATP production collapses. Patients develop acute heart failure, lethal arrhythmias, diaphragmatic paralysis leading to respiratory arrest, and acute hemolytic anemia.',
              'কয়েক ঘণ্টার মধ্যে রক্তে ফসফেট বিপজ্জনকভাবে শূন্যের কোঠায় নেমে যায়। যেহেতু এটিপি (ATP) এবং লোহিত রক্তকণিকার 2,3-BPG তৈরি করতে ফসফেট অপরিহার্য, তাই কোষের শক্তি উৎপাদন মুহূর্তেই থমকে যায়। ফলে হৃদযন্ত্র বিকল হয়, অনিয়মিত হৃদস্পন্দন দেখা দেয়, শ্বাসকষ্টে ফুসফুস অচল হয় এবং রক্তকণিকা ভেঙে রোগীর মৃত্যু হতে পারে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Emergency Fluid & Electrolyte Dynamics: The Potassium-Insulin Axis', 'জরুরি স্যালাইন ও ইলেকট্রোলাইট ভারসাম্য: পটাশিয়াম-ইনসুলিন অক্ষ'),
          paragraphs: [
            l(
              'Administering insulin without knowing a patient’s serum potassium concentration is one of the most perilous mistakes in emergency resuscitation. Insulin strongly stimulates the cellular Na+/K+-ATPase pump, shifting potassium out of the extracellular fluid and into cells. In diabetic ketoacidosis, total-body potassium is depleted by osmotic diuresis, meaning that insulin administered in hypokalemic states precipitously causes fatal cardiac arrest.',
              'রোগীর রক্তে পটাশিয়ামের মাত্রা না জেনে ইনসুলিন ইনজেকশন দেওয়া জরুরি চিকিৎসায় একটি মারাত্মক বিপজ্জনক ভুল। ইনসুলিন সোডিয়াম-পটাশিয়াম পাম্পকে অতিমাত্রায় সচল করে রক্ত থেকে সমস্ত পটাশিয়াম কোষের ভেতরে ঢুকিয়ে দেয়। DKA-তে প্রস্রাবের সাথে আগে থেকেই প্রচুর পটাশিয়াম বেরিয়ে যাওয়ায় পটাশিয়াম কম থাকা অবস্থায় ইনসুলিন দিলে তাৎক্ষণিকভাবে হৃদযন্ত্র বন্ধ হয়ে রোগী মারা যায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Inter-Organ Collapse: How Acidemia Paralyzes Cardiorespiratory Function', 'অঙ্গসমূহের সম্মিলিত বিপর্যয়: তীব্র অম্লতা কীভাবে শ্বাস ও হৃদযন্ত্র স্তব্ধ করে'),
          paragraphs: [
            l(
              'When arterial blood pH drops below 7.10, the profound accumulation of hydrogen ions directly interferes with calcium binding to cardiac troponin C, severely crippling myocardial contractility and causing refractory hypotension. Concurrently, the respiratory center in the brainstem drives maximal compensatory hyperventilation (Kussmaul breathing) to exhale carbon dioxide; eventual respiratory muscle fatigue triggers sudden catastrophic cardiopulmonary arrest.',
              'রক্তের pH ৭.১০ এর নিচে নেমে গেলে অতিরিক্ত হাইড্রোজেন আয়ন হৃদপেশির ট্রোপোনিন প্রোটিনে ক্যালসিয়াম যুক্ত হতে বাধা দেয়, ফলে হৃদপিণ্ডের পাম্প করার ক্ষমতা মারাত্মকভাবে নষ্ট হয়ে রক্তচাপ শূন্যে নেমে যায়। একই সাথে মস্তিষ্ক দ্রুত গভীর শ্বাস (কুসমল শ্বাস) চালিয়ে কার্বন ডাই-অক্সাইড বের করে অম্লতা কমানোর চেষ্টা করে; কিন্তু শ্বাসযন্ত্রের পেশি ক্লান্ত হয়ে পড়লে রোগী হঠাৎ মৃত্যুর কোলে ঢলে পড়ে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Bedside Calculations: Anion Gap and Delta-Delta Ratios in Clinical Care', 'বিছানার পাশে হিসাব: চিকিৎসায় অ্যানায়ন গ্যাপ ও ডেল্টা অনুপাত'),
          paragraphs: [
            l(
              'At the patient bedside, rapid calculation of the serum anion gap [Na+ - (Cl- + HCO3-)] provides immediate diagnostic clarity. An anion gap greater than 12 mEq/L signals the presence of unmeasured organic anions, such as ketoacids in DKA, lactic acid in septic shock, or toxic acids in ingestion emergencies. Calculating the delta-delta ratio distinguishes whether high anion gap acidosis is complicated by concurrent metabolic alkalosis or non-gap acidosis.',
              'রোগীর বিছানার পাশে দ্রুত অ্যানায়ন গ্যাপ [সোডিয়াম - (ক্লোরাইড + বাইকার্বনেট)] হিসাব করে সুনির্দিষ্ট তথ্য পাওয়া যায়। অ্যানায়ন গ্যাপ ১২ এর বেশি হওয়া মানে রক্তে কোনো ক্ষতিকর জৈব এসিড বা কিটোন জমে আছে। এরপর ডেল্টা-ডেল্টা অনুপাত হিসাব করে চিকিৎসকরা নিশ্চিত হন যে রোগীর অম্লতার সাথে বমির কারণে ক্ষারত্ব বৃদ্ধি বা অন্য কোনো জটিল এসিড-ক্ষার সমস্যা একসাথে মিশে আছে কিনা।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Foundational Clinical Takeaways: Metabolic Principles at the Bedside', 'ক্লিনিক্যাল প্রাথমিক মূল শিক্ষণীয়: বিছানার পাশে বিপাকীয় মূলনীতি'),
          paragraphs: [
            l(
              'Every clinical laboratory parameter represents an active window into a cellular biochemical pathway. In acute metabolic emergencies, recognizing the molecular drivers of fluid shifts, electrolyte depletion, and acidemia guides rational resuscitation. Always replete potassium before insulin in DKA, administer thiamine before dextrose in starvation, and treat the underlying cause of tissue hypoperfusion in lactic acidosis.',
              'হাসপাতালের প্রতিটি রক্ত পরীক্ষা কোষের ভেতরের জীবন্ত রাসায়নিক পথের একটি স্বচ্ছ প্রতিচ্ছবি। তীব্র বিপাকীয় সংকটে সঠিক আণবিক জ্ঞান চিকিৎসকদের জীবন বাঁচানোর সঠিক পথ দেখায়। DKA-তে ইনসুলিনের আগে সর্বদা পটাশিয়াম নিশ্চিত করতে হবে, অনাহারী রোগীকে স্যালাইন দেওয়ার আগে থায়ামিন ভিটামিন দিতে হবে এবং শকে অক্সিজেনের ঘাটতি পূরণ করে ল্যাকটিক অ্যাসিডোসিস দূর করতে হবে।'
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
          heading: l('Pathophysiological Paradigms in Acute Metabolic Crises', 'তীব্র বিপাকীয় সংকটের রোগতাত্ত্বিক মূলনীতি'),
          paragraphs: [
            l(
              'Acute metabolic decompensation occurs when physiological regulatory counter-mechanisms fail to buffer accelerated pathway throughput or overcome sudden enzymatic blocks. Understanding the dynamic kinetic interplay between endocrine hormonal drivers, substrate availability, and organ-specific clearance capacities allows clinicians to anticipate complications and design targeted, physiologically sound therapeutic interventions.',
              'তীব্র বিপাকীয় সংকট তখনই দেখা দেয় যখন কোনো এনজাইমের কাজ বন্ধ হয়ে যায় বা হরমোনের অভাবে রাসায়নিক ভারসাম্য সম্পূর্ণ ভেঙে পড়ে। অন্তঃক্ষরা হরমোন, রক্তে ভাসমান খাদ্য উপাদান এবং বিভিন্ন অঙ্গের বর্জ্য অপসারণ ক্ষমতার মধ্যকার পারস্পরিক সম্পর্ক বুঝতে পারলে চিকিৎসকরা সম্ভাব্য বিপদ আগে থেকেই আঁচ করতে পারেন এবং সঠিক চিকিৎসা দিতে পারেন।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Acid-Base Stoichiometry: Unmeasured Anions and Osmolar Gaps', 'এসিড-ক্ষার স্টয়কিওমেট্রি: অনিরূপিত অ্যানায়ন ও অসমোলার গ্যাপ'),
          paragraphs: [
            l(
              'Serum electroneutrality dictates that total cation charges equal total anion charges. The standard anion gap accounts for unmeasured circulating proteins, primarily albumin. Each 1 g/dL drop in serum albumin lowers the baseline normal anion gap by approximately 2.5 mEq/L, meaning that in hypoalbuminemic critically ill patients, a seemingly normal anion gap of 11 mEq/L may conceal severe occult ketoacidosis or lactic acidemia.',
              'রক্তে ধনাত্মক ও ঋণাত্মক আয়নের মোট চার্জ সবসময় সমান থাকে। স্বাভাবিক অ্যানায়ন গ্যাপ মূলত রক্তের অ্যালবুমিন প্রোটিনের পরিমাণের ওপর নির্ভর করে। রক্তে অ্যালবুমিন ১ গ্রাম/ডেসিলিটার কমে গেলে স্বাভাবিক অ্যানায়ন গ্যাপ প্রায় ২.৫ কমে যায়; ফলে গুরুতর অসুস্থ পুষ্টিহীন রোগীর অ্যানায়ন গ্যাপ আপাতদৃষ্টিতে স্বাভাবিক (১১) মনে হলেও তার রক্তে ভয়াবহ মাত্রার অ্যাসিডোসিস লুকিয়ে থাকতে পারে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Case 2: The Endocrine Divergence of DKA vs Hyperosmolar State', 'কেস ২: DKA বনাম হাইপারঅসমোলার ডায়াবেটিক সংকটের হরমোন বৈসাদৃশ্য'),
          paragraphs: [
            l(
              'In adult diabetes emergencies, clinicians frequently encounter two divergent crises: Diabetic Ketoacidosis (DKA) and Hyperosmolar Hyperglycemic State (HHS). In DKA, which typically occurs in type 1 diabetes, there is an absolute lack of circulating insulin. Without insulin, hormone-sensitive lipase (HSL) in adipose tissue is completely disinhibited, releasing a torrential flood of free fatty acids into the circulation.',
              'ডায়াবেটিসের জরুরি চিকিৎসায় চিকিৎসকরা প্রায়ই দুটি ভিন্ন সংকটের মুখোমুখি হন: ডায়াবেটিক কিটোঅ্যাসিডোসিস (DKA) এবং হাইপারঅসমোলার অবস্থা (HHS)। টাইপ-১ ডায়াবেটিসে ঘটা DKA-তে ইনসুলিনের শতভাগ অভাব থাকে। ইনসুলিন না থাকায় চর্বি কোষের লাইপেজ এনজাইম বাঁধনহীন হয়ে রক্তের মধ্যে বিপুল পরিমাণ ফ্যাটি অ্যাসিড মুক্ত করে দেয়।'
            ),
            l(
              'In hepatocytes, absolute insulin deficiency lowers malonyl-CoA levels, removing the physiological inhibition on carnitine palmitoyltransferase-I (CPT-I). Fatty acids surge into mitochondrial beta-oxidation, producing an overwhelming excess of acetyl-CoA that saturates the citrate synthase reaction. The liver diverts this acetyl-CoA into runaway ketogenesis, producing massive quantities of acetoacetate and beta-hydroxybutyrate.',
              'যকৃতে ইনসুলিন না থাকায় ম্যালনাইল-কোএ কমে গিয়ে CPT-I এনজাইম পুরোপুরি খুলে যায়। মাইটোকন্ড্রিয়ায় চর্বি ভেঙে অতিরিক্ত অ্যাসিটাইল-কোএ জমে যায়, যা স্বাভাবিক চক্রে জায়গা না পেয়ে হু হু করে কিটোন বডিতে (অ্যাসিটোঅ্যাসিটেট ও বিটা-হাইড্রোক্সিবিউটাইরেট) রূপান্তরিত হয় এবং রক্তে মারাত্মক অ্যাসিডোসিস তৈরি করে।'
            ),
            l(
              'In contrast, HHS typically occurs in older individuals with type 2 diabetes who retain trace residual beta-cell secretion. Remarkably, the concentration of insulin required to suppress adipocyte lipolysis is roughly one-tenth of the concentration required to stimulate skeletal muscle GLUT4 glucose uptake. This trace residual insulin is sufficient to prevent runaway lipolysis and ketogenesis, but insufficient to clear glucose, allowing blood sugar to climb above 1000 mg/dL.',
              'বিপরীতভাবে, HHS ঘটে টাইপ-২ ডায়াবেটিসে যাদের দেহে সামান্য ইনসুলিন অবশিষ্ট থাকে। চর্বি ভাঙা বন্ধ রাখতে যতটুকু ইনসুলিন লাগে, পেশিতে চিনি ঢোকাতে তার দশ গুণ বেশি ইনসুলিন প্রয়োজন হয়। এই সামান্য ইনসুলিন কিটোন তৈরি আটকে দিলেও রক্ত থেকে চিনি কমাতে পারে না, যার ফলে গ্লুকোজ ১০০০ ছাড়িয়ে রক্ত চরম ঘন হয়ে মারাত্মক পানিশূন্যতা ঘটায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Case 3: Neonatal Organic Acidemias & Secondary Hyperammonemia', 'কেস ৩: নবজাতকের অর্গানিক এসিডেমিয়া ও পরোক্ষ অ্যামোনিয়া বিষক্রিয়া'),
          paragraphs: [
            l(
              'A previously healthy five-day-old infant is brought to the hospital with poor feeding, lethargy, severe hypotonia, and vomiting following the introduction of protein-rich breast milk or formula. Blood gas demonstrates severe high anion gap metabolic acidosis, and laboratory testing reveals profound hyperammonemia with plasma ammonia exceeding 400 micromol/L, raising suspicion of an inborn error of metabolism.',
              'জন্মের পাঁচ দিন পর মাতৃদুগ্ধ বা ফর্মুলা দুধ খাওয়ার পর একটি শিশু হঠাৎ নিস্তেজ হয়ে বমি করতে শুরু করে এবং শরীর অবশ হয়ে যায়। রক্ত পরীক্ষায় দেখা যায় রক্তের অম্লতা অত্যন্ত বেশি এবং বিষাক্ত অ্যামোনিয়ার মাত্রা ৪০০ ছাড়িয়ে গেছে, যা কোনো বিরল জন্মগত বিপাকীয় রোগের স্পষ্ট পূর্বাভাস।'
            ),
            l(
              'Urine organic acid analysis identifies propionic acidemia (caused by propionyl-CoA carboxylase deficiency) or methylmalonic acidemia (caused by methylmalonyl-CoA mutase deficiency). These enzymes are essential for catabolizing branched-chain amino acids (isoleucine, valine), methionine, threonine, and odd-chain fatty acids into succinyl-CoA for entry into the TCA cycle.',
              'প্রস্রাব পরীক্ষায় প্রোপিয়নিক এসিডেমিয়া বা মিথাইলম্যালনিক এসিডেমিয়া ধরা পড়ে, যা সুনির্দিষ্ট এনজাইমের জিনগত অনুপস্থিতির কারণে ঘটে। এই এনজাইমগুলো খাবার থেকে প্রাপ্ত নির্দিষ্ট অ্যামিনো অ্যাসিড এবং বিজোড় ফ্যাটি অ্যাসিড ভেঙে শক্তি তৈরির জন্য অপরিহার্য ছিল।'
            ),
            l(
              'The life-threatening hyperammonemia in organic acidemias is a secondary phenomenon: accumulated propionyl-CoA acts as a potent competitive inhibitor of N-acetylglutamate synthase (NAGS). N-acetylglutamate is the obligate allosteric activator of carbamoyl phosphate synthetase I (CPS-I). Depleting N-acetylglutamate completely paralyzes the first gatekeeping step of the hepatic urea cycle, causing toxic ammonia accumulation.',
              'এখানে অ্যামোনিয়ার বিপজ্জনক বৃদ্ধি ঘটে একটি পরোক্ষ কারণে: জমে থাকা প্রোপিওনাইল-কোএ সরাসরি NAGS এনজাইমকে থামিয়ে দেয়। এর ফলে N-অ্যাসিটাইলগ্লুটামেট তৈরি হতে পারে না, যা ছাড়া যকৃতের ইউরিয়া চক্রের প্রথম এনজাইম CPS-I কাজই করতে পারে না। ফলে ইউরিয়া তৈরি বন্ধ হয়ে রক্তে বিষাক্ত অ্যামোনিয়ার ঝড় ওঠে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Diagnostic Algorithm: High Anion Gap vs Normal Anion Gap Acidosis', 'রোগনির্ণয় অ্যালগরিদম: উচ্চ অ্যানায়ন গ্যাপ বনাম স্বাভাবিক অ্যানায়ন গ্যাপ এসিডোসিস'),
          paragraphs: [
            l(
              'Distinguishing high anion gap metabolic acidosis (HAGMA) from normal anion gap hyperchloremic acidosis (NAGMA) dictates specific therapeutic strategies. HAGMA indicates endogenous acid production or exogenous toxin ingestion (GOLDMARK mnemonic: Glycols, Oxoproline, L-lactate, D-lactate, Methanol, Aspirin, Renal failure, Ketoacidosis), whereas NAGMA typically reflects gastrointestinal bicarbonate loss (diarrhea) or impaired renal tubular proton secretion (renal tubular acidosis).',
              'উচ্চ অ্যানায়ন গ্যাপ এসিডোসিস (HAGMA) বনাম স্বাভাবিক অ্যানায়ন গ্যাপ এসিডোসিস (NAGMA) এর পার্থক্য রোগ নির্ণয়ে অত্যন্ত গুরুত্বপূর্ণ। HAGMA নির্দেশ করে রক্তে বিষাক্ত এসিড তৈরি বা প্রবেশ (যেমন কিটোন, ল্যাকটেট, মিথানল, অ্যাসপিরিন বা কিডনি বিকল), অন্যদিকে NAGMA ঘটে ডায়রিয়ায় পরিপাকতন্ত্র থেকে বাইকার্বনেট বেরিয়ে গেলে বা কিডনির অ্যাসিড নিষ্কাশনে ত্রুটি দেখা দিলে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Quantitative Bedside Metabolic Decision-Making', 'শিক্ষায়তনিক রূপরেখা: চিকিৎসায় পরিমাণগত বিপাকীয় সিদ্ধান্ত গ্রহণ'),
          paragraphs: [
            l(
              'Translational biochemistry bridges basic biochemical science and clinical critical care. Integrating thermodynamic equilibria, enzyme kinetics, allosteric regulation, and whole-body inter-organ physiology enables rigorous quantitative decision-making during life-threatening acute metabolic crises, saving lives through mechanistic understanding.',
              'জৈব-রসায়ন এবং নিবিড় চিকিৎসা বিজ্ঞানের সেতুবন্ধন হলো আধুনিক চিকিৎসার সবচেয়ে বড় শক্তি। তাপগতিবিদ্যা, এনজাইমের গতিবিজ্ঞান, হরমোন নিয়ন্ত্রণ এবং অঙ্গসমূহের সমন্বিত কার্যক্রমের গভীর উপলব্ধি মুমূর্ষু রোগীর জীবন রক্ষায় সবচেয়ে নির্ভরযোগ্য বৈজ্ঞানিক সিদ্ধান্ত গ্রহণে চিকিৎসকদের সক্ষম করে তোলে।'
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
          heading: l('Mitochondrial and Multi-Organ Failure in Septic Shock', 'সেপটিক শকে মাইটোকন্ড্রিয়া ও বহু-অঙ্গীয় ব্যর্থতা'),
          paragraphs: [
            l(
              'In severe septic shock, cellular bioenergetic failure extends far beyond macrovascular tissue hypoperfusion. Pro-inflammatory cytokines and nitric oxide overproduction induce profound cytopathic hypoxia: direct oxidative damage and nitrosylation of mitochondrial electron transport complexes (predominantly Complex I and Complex IV). Even when microvascular oxygen delivery is fully restored, mitochondria remain unable to consume oxygen, driving persistent uncoupled lactic acid production.',
              'মারাত্মক সেপটিক শকে কোষে শক্তি সংকট কেবল রক্ত চলাচল কমে যাওয়ার জন্য ঘটে না। প্রদাহজনিত সাইটোকাইন ও অতিরিক্ত নাইট্রিক অক্সাইডের কারণে কোষীয় মাইটোকন্ড্রিয়ার শ্বাস-শৃঙ্খল (কমপ্লেক্স ১ ও ৪) সরাসরি বিষাক্ত হয়ে অকেজো হয়ে পড়ে। চিকিৎসকরা বাইরে থেকে শতভাগ অক্সিজেন ও রক্তচাপ স্বাভাবিক করলেও মাইটোকন্ড্রিয়া অক্সিজেন গ্রহণ করতে পারে না, ফলে রক্তে ক্রমাগত ল্যাকটেট জমতে থাকে এবং বহু অঙ্গ বিকল হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Case 4: Type A vs Type B Lactic Acidosis & Alcoholic Ketoacidosis', 'কেস ৪: টাইপ-এ বনাম বি ল্যাকটিক এসিডোসিস ও মদ্যপ কিটোঅ্যাসিডোসিস'),
          paragraphs: [
            l(
              'Lactic acidosis is broadly categorized into Type A (associated with overt tissue hypoperfusion and cellular hypoxia, such as septic, cardiogenic, or hemorrhagic shock) and Type B (occurring without clinical hypoxia, driven by cellular toxins, enzymatic defects, or impaired hepatic clearance). In Type A, the absence of mitochondrial oxygen stalls the electron transport chain, causing uncoupled glycolysis to churn out lactate.',
              'ল্যাকটিক অ্যাসিডোসিস মূলত দুই প্রকার: টাইপ-এ (রক্ত সঞ্চালনের অভাবে অক্সিজেনের ঘাটতি ঘটলে, যেমন সেপটিক বা কার্ডিওজেনিক শকে) এবং টাইপ-বি (অক্সিজেনের অভাব ছাড়াই কোনো বিষক্রিয়া বা এনজাইম নষ্ট হলে)। টাইপ-এ অবস্থায় অক্সিজেনের অভাবে মাইটোকন্ড্রিয়া বন্ধ হয়ে গেলে অবাধ গ্লাইকোলাইসিসের চাপে রক্তে বিপুল ল্যাকটেট জমতে থাকে।'
            ),
            l(
              'Type B lactic acidosis is classically exemplified by metformin accumulation in patients with acute renal failure. Metformin directly inhibits mitochondrial respiratory Complex I and hepatic glycerol-3-phosphate dehydrogenase (mGPD), crippling oxidative phosphorylation and simultaneously freezing hepatic gluconeogenic lactate clearance. Thiamine deficiency (beriberi) similarly causes Type B lactic acidosis by crippling pyruvate dehydrogenase.',
              'টাইপ-বি ল্যাকটিক অ্যাসিডোসিসের সেরা উদাহরণ হলো কিডনি বিকল রোগীর দেহে মেটফরমিন ওষুধের বিষক্রিয়া। মেটফরমিন সরাসরি মাইটোকন্ড্রিয়াল কমপ্লেক্স ১ বন্ধ করে দেয় এবং যকৃতে নতুন গ্লুকোজ তৈরির মাধ্যমে ল্যাকটেট পরিষ্কার করার পথ আটকে দেয়। একইভাবে থায়ামিনের (ভিটামিন বি১) অভাবেও পাইরুভেট ভাঙতে না পেরে মারাত্মক ল্যাকটিক অ্যাসিডোসিস হতে পারে।'
            ),
            l(
              'In alcoholic ketoacidosis (AKA), chronic alcohol bingeing followed by sudden vomiting and starvation sets a unique trap. Hepatic alcohol and aldehyde dehydrogenases consume NAD+, creating an enormous cytosolic and mitochondrial NADH/NAD+ ratio. High NADH converts pyruvate into lactate (freezing gluconeogenesis) and drives oxaloacetate into malate, while unchecked lipolysis feeds ketogenesis predominantly into beta-hydroxybutyrate.',
              'অতিরিক্ত মদ্যপানের পর না খেয়ে থাকলে মদ্যপ কিটোঅ্যাসিডোসিস (AKA) দেখা দেয়। অ্যালকোহল ভাঙতে গিয়ে যকৃতে প্রচুর NADH তৈরি হয় যা পাইরুভেটকে ল্যাকটেটে পরিণত করে নতুন গ্লুকোজ তৈরি বন্ধ করে দেয়। ফলে রোগী মারাত্মক হাইপোগ্লাইসেমিয়ায় চলে যায় এবং চর্বি ভেঙে রক্তে প্রচুর বিটা-হাইড্রোক্সিবিউটাইরেট কিটোন জমে তীব্র অম্লতা তৈরি করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Grand Curriculum Mastery: The Symphony of Human Metabolism', 'পাঠ্যক্রমের পূর্ণাঙ্গ সমাপ্তি: মানব বিপাকের অবিচ্ছেদ্য ঐকতান'),
          paragraphs: [
            l(
              'Across thirty-six comprehensive chapters, we have explored human metabolism from its foundational subatomic bioenergetics to the cutting-edge frontiers of cancer fluxomics, immunometabolism, and critical care medicine. Metabolic pathways do not exist in isolation: they form a unified, exquisitely tuned symphony of interconnected feedback loops designed to sustain human life across every physiological challenge.',
              '৩৬টি বিশদ অধ্যায় জুড়ে আমরা মানবদেহের বিপাক প্রক্রিয়াকে তার আদি পরমাণু শক্তিবিজ্ঞান থেকে শুরু করে ক্যান্সারের ফ্লাক্সোমিক্স, প্রতিরোধ-বিপাক এবং জটিল নিবিড় পরিচর্যা পর্যন্ত গভীরভাবে অনুসন্ধান করেছি। কোনো বিক্রিয়া একা চলে না: প্রতিটি পথ এক অপরূপ অর্কেস্ট্রার মতো একে অপরের সাথে যুক্ত থেকে মানবদেহের সুস্থতা ও জীবন রক্ষা করে।'
            ),
          ],
        },
      ],
    },
  },
}

