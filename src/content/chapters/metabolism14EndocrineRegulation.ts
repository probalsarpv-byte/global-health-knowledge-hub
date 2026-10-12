import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const endocrineRefs = [
  {
    id: 'lehninger-biochem-8e-ch23',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 23: Hormonal Regulation and Integration of Mammalian Metabolism',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch42',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 42: Hormone Action & Signal Transduction",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch14',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 14: Signal-Transduction Pathways',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'marks-medbiochem-6e-ch26',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 26: Hormonal Regulation of Energy Metabolism",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

const endocrineOrgan3DData: Organ3DExplorerContent = {
  title: l('3D Multi-Organ Endocrine Signal Transduction & Metabolic Triage', '৩ডি বহু-অঙ্গীয় হরমোন সংকেত সঞ্চালন ও বিপাকীয় সমন্বয়সাধন'),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and explore coordinate space to trace endocrine signaling cascades linking the pancreas, liver, skeletal muscle, kidneys, and brain during anabolic and catabolic fuel transitions.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে অগ্ন্যাশয়, যকৃৎ, কঙ্কালপেশি, বৃক্ক এবং মস্তিষ্ক হরমোন সংকেত আদান-প্রদানের মাধ্যমে পুষ্টি সঞ্চয় ও ভাঙনের সমন্বয় সাধন করে।'
  ),
  description: l(
    'Metabolic fuel flux is governed by endocrine hormones acting on cell-surface tyrosine kinases, G-protein coupled receptors, and nuclear receptors across key target organs, balanced by intracellular master energy sensors like AMPK.',
    'বিপাকীয় জ্বালানি প্রবাহ নিয়ন্ত্রিত হয় কোষঝিল্লির টাইরোসিন কাইনেজ, জি-প্রোটিন যুক্ত রিসেপ্টর এবং নিউক্লিয়ার রিসেপ্টরের মাধ্যমে, যা এএমপিকে (AMPK)-এর মতো অন্তকোষীয় প্রধান শক্তি-সংবেদকের সাথে ভারসাম্য বজায় রাখে।'
  ),
  organs: [
    {
      id: 'organ-pancreas-endocrine',
      name: l('Pancreas (Islet Alpha & Beta Command Center)', 'অগ্ন্যাশয় (আইলেটস আলফা ও বিটা নিয়ন্ত্রণ কেন্দ্র)'),
      latinName: 'Pancreas',
      system: l('Endocrine & Digestive System', 'অন্তঃক্ষরা ও পরিপাক তন্ত্র'),
      cavity: l('Retroperitoneal Space (Epigastrium)', 'রেট্রোপেরিটোনিয়াল স্থান (এপিগ্যাস্ট্রিয়াম)'),
      position3D: { x: 12, y: 236, z: 10 },
      color: '#eab308',
      highlightColor: '#fde047',
      shapeType: 'pancreas',
      description: l(
        'The islets of Langerhans integrate circulating glucose concentrations; beta cells secrete anabolic insulin in response to hyperglycemia, while alpha cells secrete catabolic glucagon during hypoglycemia.',
        'ল্যাঙ্গারহ্যান্সের আইলেটস রক্তের গ্লুকোজের মাত্রা পর্যবেক্ষণ করে; রক্তে গ্লুকোজ বাড়লে বিটা কোষ ইনসুলিন এবং গ্লুকোজ কমে গেলে আলফা কোষ গ্লুকাগন হরমোন নিঃসরণ করে।'
      ),
      spatialRelations: l(
        'Located in the retroperitoneum posterior to the stomach, draining hormone-rich venous blood into the splenic and superior mesenteric veins, which unite to form the hepatic portal vein.',
        'পাকস্থলীর পেছনে রেট্রোপেরিটোনিয়ামে অবস্থিত; এর শিরাগুলো প্লীহা ও মেসেন্টেরিক শিরার সাথে যুক্ত হয়ে হেপাটিক পোর্টাল শিরা গঠন করে সরাসরি যকৃতে হরমোন পৌঁছে দেয়।'
      ),
      physiology: l(
        'Beta-cell glucokinase acts as a molecular glucose sensor. ATP generated from glycolysis closes Kir6.2 potassium channels, depolarizing the plasma membrane and opening voltage-gated calcium channels to evoke insulin exocytosis.',
        'বিটা কোষের গ্লুকোকাইনেজ গ্লুকোজের পরিমাপক হিসেবে কাজ করে। গ্লাইকোলাইসিসে তৈরি এটিপি পটাসিয়াম চ্যানেল বন্ধ করে ঝিল্লি ডিপোলারাইজেশনের মাধ্যমে ক্যালসিয়াম ঢুকিয়ে ইনসুলিন নিঃসরণ ঘটায়।'
      ),
      nutritionConnection: l(
        'Ingestion of carbohydrates and protein elicits incretin hormones (GLP-1 and GIP) from the intestinal L and K cells, potentiating glucose-dependent insulin secretion before portal hyperglycemia peaks.',
        'শর্করা ও আমিষ জাতীয় খাবার অন্ত্রের এল ও কে কোষ থেকে ইনক্রিটিন (GLP-1 এবং GIP) নিঃসরণ করে, যা রক্তে গ্লুকোজ সম্পূর্ণ বাড়ার আগেই ইনসুলিন ক্ষরণ বহুলাংশে বাড়িয়ে দেয়।'
      ),
      clinicalSignificance: l(
        'Autoimmune destruction of beta cells causes absolute insulin deficiency in Type 1 Diabetes; peripheral resistance combined with progressive beta-cell secretory exhaustion causes Type 2 Diabetes.',
        'স্বতঃঅনাক্রম্যতার কারণে বিটা কোষ ধ্বংস হলে টাইপ-১ ডায়াবেটিস হয়; আর প্রান্তীয় কোষে ইনসুলিন অকার্যকারিতা এবং বিটা কোষের ক্লান্তি টাইপ-২ ডায়াবেটিসের মূল কারণ।'
      ),
      sectionId: 'introduction',
    },
    {
      id: 'organ-liver-endocrine',
      name: l('Liver (Portal Hormone Receiver & Enzymatic Switchboard)', 'যকৃৎ (পোর্টাল হরমোন গ্রাহক ও এনজাইমেটিক সুইচবোর্ড)'),
      latinName: 'Hepar',
      system: l('Digestive / Metabolic System', 'পরিপাক ও বিপাকীয় তন্ত্র'),
      cavity: l('Right Upper Abdominal Quadrant', 'উদর গহ্বরের ডান ঊর্ধ্বাংশ'),
      position3D: { x: 28, y: 218, z: 12 },
      color: '#b45309',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'Receives first-pass portal insulin and glucagon concentrations up to three-fold higher than systemic blood, orchestrating glycogen synthesis vs. glycogenolysis and glycolysis vs. gluconeogenesis.',
        'সিস্টেমিক রক্তের চেয়ে তিন গুণ বেশি ঘনত্বের ইনসুলিন ও গ্লুকাগন সরাসরি পোর্টাল শিরা দিয়ে গ্রহণ করে গ্লাইকোজেন তৈরি বা ভাঙন এবং গ্লাইকোলাইসিস বা গ্লুকোনিওজেনেসিস নিয়ন্ত্রণ করে।'
      ),
      spatialRelations: l(
        'Situated immediately beneath the diaphragm, communicating directly with the gut and pancreas via the portal venous triad and exporting glucose systemically through the hepatic veins to the inferior vena cava.',
        'মধ্যচ্ছদার ঠিক নিচে অবস্থিত; পোর্টাল শিরার মাধ্যমে অন্ত্র ও অগ্ন্যাশয়ের সাথে যুক্ত থাকে এবং হেপাটিক শিরার মাধ্যমে ইনফিরিয়র ভেনাক্যাভায় গ্লুকোজ পৌঁছে দেয়।'
      ),
      physiology: l(
        'Insulin activates protein phosphatase-1 (PP1) to dephosphorylate glycogen synthase (active) and glycogen phosphorylase (inactive). Glucagon stimulates cAMP/PKA to phosphorylate the PFK-2/FBPase-2 switch, activating gluconeogenesis.',
        'ইনসুলিন প্রোটিন ফসফেটেজ-১ চালু করে গ্লাইকোজেন তৈরি বাড়ায় এবং ভাঙন বন্ধ করে। অপরদিকে গ্লুকাগন PKA এর মাধ্যমে PFK-2/FBPase-2 ফসফরাইলেট করে গ্লুকোনিওজেনেসিস চালু করে।'
      ),
      nutritionConnection: l(
        'High-fructose corn syrup bypasses phosphofructokinase-1 control in the liver, entering glycolysis as trioses and driving uncontrolled de novo lipogenesis even under insulin-resistant conditions.',
        'উচ্চ ফ্রুক্টোজযুক্ত খাবার যকৃতে PFK-1 এর স্বাভাবিক নিয়ন্ত্রণ বাইপাস করে সরাসরি ট্রায়োজে রূপান্তরিত হয় এবং ইনসুলিন প্রতিরোধী অবস্থাতেও ব্যাপক চর্বি তৈরি করে।'
      ),
      clinicalSignificance: l(
        'Hepatic insulin resistance impairs FOXO1 phosphorylation, failing to suppress PEPCK and glucose-6-phosphatase transcription, resulting in uninhibited nocturnal gluconeogenesis and fasting hyperglycemia.',
        'যকৃতে ইনসুলিন কাজ না করলে FOXO1 ফসফরাইলেশন হয় না, ফলে PEPCK ও গ্লুকোজ-৬-ফসফেটেজ বন্ধ হতে ব্যর্থ হয় এবং রাতে অতিরিক্ত গ্লুকোজ তৈরি হয়ে ফাস্টিং হাইপারগ্লাইসেমিয়া ঘটায়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-muscle-endocrine',
      name: l('Skeletal Muscle (Insulin-Responsive GLUT4 & Exercise AMPK Sink)', 'কঙ্কালপেশি (ইনসুলিন-সংবেদনশীল GLUT4 ও ব্যায়ামকালীন AMPK গ্রাহক)'),
      latinName: 'Musculus skeletalis',
      system: l('Musculoskeletal System', 'পেশিতন্ত্র'),
      cavity: l('Somatic Framework', 'দেহকাঠামো'),
      position3D: { x: 0, y: 130, z: -8 },
      color: '#dc2626',
      highlightColor: '#f87171',
      shapeType: 'skeleton',
      description: l(
        'Accounts for ~80% of postprandial insulin-mediated glucose disposal via Akt-stimulated AS160 phosphorylation and GLUT4 vesicle exocytosis; independently recruits GLUT4 during muscular contraction via AMPK.',
        'ভুক্ত অবস্থায় রক্তের প্রায় ৮০% গ্লুকোজ গ্রহণ করে Akt দ্বারা AS160 ফসফরাইলেশন এবং GLUT4 ঝিল্লিতে উন্মুক্ত করার মাধ্যমে; ব্যায়ামের সময় AMPK দিয়ে ইনসুলিন ছাড়াই GLUT4 উন্মুক্ত করে।'
      ),
      spatialRelations: l(
        'Dispersed across somatic musculature, directly wired to motor neurons and extensively vascularized by muscular capillary beds that expand blood flow up to 20-fold during sustained aerobic physical exertion.',
        'সারা দেহের কঙ্কালের সাথে সংযুক্ত; প্রচুর রক্তজালিকা সমৃদ্ধ যা শারীরিক পরিশ্রম ও ব্যায়ামের সময় রক্ত প্রবাহ বিশ গুণ পর্যন্ত বৃদ্ধি করে কোষে গ্লুকোজ ও অক্সিজেন সরবরাহ নিশ্চিত করে।'
      ),
      physiology: l(
        'Insulin stimulates Akt to inactivate glycogen synthase kinase-3 (GSK-3), allowing dephosphorylated glycogen synthase to manufacture intramyocellular glycogen reserves.',
        'ইনসুলিন Akt সক্রিয় করে GSK-3 এনজাইমকে নিবৃত্ত করে, যার ফলে গ্লাইকোজেন সিন্থেজ ফসফেটমুক্ত হয়ে সক্রিয় হয় এবং পেশির ভেতরে ব্যবহারের জন্য গ্লাইকোজেন জমা রাখে।'
      ),
      nutritionConnection: l(
        'Post-workout carbohydrate consumption combined with rapid-acting proteins maximizes muscle glycogen resynthesis and activates mTORC1 via intracellular leucine sensing and insulin synergy.',
        'ব্যায়ামের পর দ্রুত শর্করা ও প্রোটিন গ্রহণ করলে পেশির গ্লাইকোজেন দ্রুত পুনঃসঞ্চিত হয় এবং লিউসিন ও ইনসুলিনের সমন্বয়ে mTORC1 সক্রিয় হয়ে পেশি পুনর্গঠন ত্বরান্বিত করে।'
      ),
      clinicalSignificance: l(
        'Intramyocellular diacylglycerols and ceramides inhibit insulin receptor substrate-1 (IRS-1) tyrosine phosphorylation via PKC-theta activation, representing the earliest biochemical lesion in Type 2 Diabetes.',
        'পেশিকোষে চর্বিজাত ডাইঅ্যাসাইলগ্লিসারল জমা হলে তা PKC-থিটা সক্রিয় করে IRS-1 এর স্বাভাবিক কার্যকারিতা নষ্ট করে, যা টাইপ-২ ডায়াবেটিসের একেবারে প্রাথমিক আণবিক কারণ।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-kidney-endocrine',
      name: l('Kidneys (Cortisol Target & Acid-Base Gluconeogenic Buffer)', 'বৃক্ক (কর্টিসোল গ্রাহক ও অ্যাসিড-ক্ষার গ্লুকোনিওজেনিক বাফার)'),
      latinName: 'Renes',
      system: l('Urinary & Endocrine System', 'রেচন ও অন্তঃক্ষরা তন্ত্র'),
      cavity: l('Retroperitoneal Space (Flanks)', 'রেট্রোপেরিটোনিয়াল স্থান (কোমর অঞ্চল)'),
      position3D: { x: 0, y: 260, z: -10 },
      color: '#0284c7',
      highlightColor: '#38bdf8',
      shapeType: 'kidneys',
      description: l(
        'Renal cortical tubules express glucocorticoid receptors and respond to chronic cortisol and acidosis by upregulating phosphoenolpyruvate carboxykinase (PEPCK) to generate new glucose while clearing systemic acid.',
        'বৃক্কের কর্টেক্স কর্টিসোল হরমোনের প্রভাবে PEPCK এনজাইম বৃদ্ধি করে নতুন গ্লুকোজ তৈরি করে এবং একই সাথে অতিরিক্ত অ্যাসিড মূত্রের মাধ্যমে বের করে রক্তের ভারসাম্য রক্ষা করে।'
      ),
      spatialRelations: l(
        'Paired retroperitoneal organs lying adjacent to the vertebral column at T12–L3 levels, crowned by the adrenal glands that manufacture glucocorticoid and catecholamine stress hormones.',
        'মেরুদণ্ডের দুই পাশে T12-L3 উচ্চতায় অবস্থিত একজোড়া অঙ্গ, যার শীর্ষে রয়েছে অ্যাড্রিনাল গ্রন্থি যা কর্টিসোল এবং এপিনেফ্রিনের মতো জরুরি স্ট্রেস হরমোন তৈরি করে।'
      ),
      physiology: l(
        'Cortisol binds intracellular glucocorticoid receptors, translocating to the nucleus to induce transcription of catalytic PEPCK and glucose-6-phosphatase, coordinating systemic gluconeogenesis during prolonged stress.',
        'কর্টিসোল অন্তঃকোষীয় রিসেপ্টরে যুক্ত হয়ে নিউক্লিয়াসে প্রবেশ করে এবং PEPCK ও গ্লুকোজ-৬-ফসফেটেজ জিনের প্রতিলিপন বাড়িয়ে দীর্ঘস্থায়ী মানসিক বা শারীরিক চাপে গ্লুকোজের সরবরাহ সচল রাখে।'
      ),
      nutritionConnection: l(
        'High dietary sodium intake induces renal hyperfiltration and activates intrarenal renin-angiotensin-aldosterone signaling, exacerbating vascular stiffness and insulin resistance.',
        'অতিরিক্ত লবণাক্ত খাবার বৃক্কে ফিল্ট্রেশনের চাপ বাড়ায় এবং রেনিন-অ্যাঞ্জিওটেনসিন পথ সক্রিয় করে রক্তনালির সংকোচন বৃদ্ধি করে ও ইনসুলিন কার্যকারিতা কমিয়ে দেয়।'
      ),
      clinicalSignificance: l(
        'Hypercortisolemia in Cushing syndrome causes steroid-induced diabetes through uninhibited renal and hepatic gluconeogenesis combined with profound peripheral muscle wasting.',
        'কুশিং সিন্ড্রোমে অতিরিক্ত কর্টিসোল বৃক্ক ও যকৃতে অতিরিক্ত গ্লুকোজ তৈরির মাধ্যমে ডায়াবেটিস তৈরি করে এবং মারাত্মক পেশিক্ষয় ঘটায়।'
      ),
      sectionId: 'practice',
    },
    {
      id: 'organ-brain-endocrine',
      name: l('Brain (Hypothalamic Nutrient Sensing & Autonomic Output)', 'মস্তিষ্ক (হাইপোথ্যালামিক পুষ্টি সংবেদন ও স্বয়ংক্রিয় স্নায়ু নিয়ন্ত্রণ)'),
      latinName: 'Cerebrum / Hypothalamus',
      system: l('Central Nervous System', 'কেন্দ্রীয় স্নায়ুতন্ত্র'),
      cavity: l('Cranial Cavity', 'করোটিকা গহ্বর'),
      position3D: { x: 0, y: 48, z: 0 },
      color: '#9333ea',
      highlightColor: '#c084fc',
      shapeType: 'brain',
      description: l(
        'The arcuate nucleus of the hypothalamus senses circulating insulin, leptin, and ghrelin to modulate appetite, energy expenditure, and autonomic outflow to peripheral metabolic organs.',
        'হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াস রক্তে ইনসুলিন, লেপটিন ও গ্রেলিনের মাত্রা পরিমাপ করে ক্ষুধা, সামগ্রিক শক্তি খরচ এবং শরীরের অন্যান্য বিপাকীয় অঙ্গের ওপর স্নায়ুবিক নিয়ন্ত্রণ বজায় রাখে।'
      ),
      spatialRelations: l(
        'Situated at the diencephalic base bordering the third ventricle, containing a semi-permeable median eminence allowing direct sampling of blood-borne endocrine peptides.',
        'মস্তিষ্কের তলদেশে অবস্থিত; এখানে রক্ত-মস্তিষ্ক বাধা কিছুটা শিথিল থাকায় এটি সহজেই রক্তে প্রবাহিত বিভিন্ন হরমোন ও পেপটাইডের মাত্রা সরাসরি শনাক্ত করতে পারে।'
      ),
      physiology: l(
        'Hypoglycemia triggers hypothalamic counter-regulatory centers, firing sympathetic autonomic nerves to stimulate adrenal medullary epinephrine secretion and alpha-cell glucagon release.',
        'রক্তে গ্লুকোজ কমে গেলে হাইপোথ্যালামাস তাৎক্ষণিকভাবে সহানুভূতিশীল স্নায়ুতন্ত্র সক্রিয় করে অ্যাড্রিনাল থেকে এপিনেফ্রিন এবং অগ্ন্যাশয় থেকে গ্লুকাগন ক্ষরণ করিয়ে প্রাণ বাঁচায়।'
      ),
      nutritionConnection: l(
        'Ketogenic neuro-adaptation dampens hypothalamic hunger signaling and lowers ghrelin spikes, helping stabilize metabolic rate during intentional energy restriction.',
        'কিটো-অভিযোজন হাইপোথ্যালামাসে ক্ষুধার সংকেত কমায় এবং গ্রেলিন হরমোনের তীব্র ওঠানামা হ্রাস করে খাদ্য নিয়ন্ত্রণের সময় বিপাকীয় হার স্থির রাখতে সাহায্য করে।'
      ),
      clinicalSignificance: l(
        'Hypoglycemia unawareness develops when recurrent low blood glucose blunts the hypothalamic sympathoadrenal response, predisposing diabetic patients to fatal neuroglycopenia.',
        'বারবার হাইপোগ্লাইসেমিয়া হলে মস্তিষ্কের সতর্কীকরণ সংকেত ভোঁতা হয়ে যায়, ফলে রোগী কোনো লক্ষণ ছাড়াই হঠাৎ অজ্ঞান হয়ে প্রাণঘাতী বিপদের সম্মুখীন হতে পারে।'
      ),
      sectionId: 'integration',
    },
  ],
}

export const metabolism14EndocrineRegulationLesson: LessonTopic = {
  id: 'topic.metabolism.endocrine-fuel-regulation',
  slug: 'endocrine-fuel-regulation',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('14 · Endocrine Regulation of Fuel Flux', '১৪ · হরমোনজনিত জ্বালানি বিপাকীয় সমন্বয়সাধন'),
  summary: l(
    'Receptor tyrosine kinase insulin signaling (IRS-1, PI3K, Akt/PKB, AS160, GSK-3, FOXO1), G-protein coupled glucagon and epinephrine cascades (Gs, cAMP, PKA, PFK-2/FBPase-2 switch), cortisol transcriptional reprogramming of gluconeogenesis, and the cellular master energy sensor AMPK (Thr172 activation, ACC/HMGCR shutdown, mTORC1 inhibition).',
    'রিসেপ্টর টাইরোসিন কাইনেজ ইনসুলিন সংকেত পথ (IRS-1, PI3K, Akt/PKB, AS160, GSK-3, FOXO1), জি-প্রোটিন যুক্ত গ্লুকাগন ও এপিনেফ্রিন সংকেত প্রবাহ (Gs, cAMP, PKA, PFK-2/FBPase-2 সুইচ), কর্টিসোল কর্তৃক গ্লুকোনিওজেনেসিসের জিনগত নিয়ন্ত্রণ এবং কোষীয় প্রধান শক্তি সেন্সর এএমপিকে (AMPK Thr172 সক্রিয়করণ, ACC/HMGCR বন্ধ ও mTORC1 নিবৃত্তকরণ)।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Dissect the molecular steps of insulin receptor tyrosine kinase activation, tracing downstream signaling through IRS-1, PI3K, PIP3, PDK1, and Akt/PKB to GLUT4 translocation, glycogen synthesis, and FOXO1 exclusion.',
      'ইনসুলিন রিসেপ্টর টাইরোসিন কাইনেজ সক্রিয়করণের ধাপসমূহ বিশ্লেষণ করা এবং IRS-1, PI3K, PIP3, PDK1 ও Akt এর মাধ্যমে GLUT4 উন্মুক্তকরণ, গ্লাইকোজেন তৈরি ও FOXO1 নিবৃত্তকরণের আণবিক গতিপথ ব্যাখ্যা করা।',
    ),
    l(
      'Trace the counter-regulatory GPCR signaling cascades of glucagon and epinephrine through Gs, adenylate cyclase, cAMP, and Protein Kinase A, detailing the reversible phosphorylation of the bifunctional PFK-2/FBPase-2 enzyme.',
      'গ্লুকাগন ও এপিনেফ্রিনের জি-প্রোটিন রিসেপ্টর সংকেত পথ, অ্যাডিনাইলেট সাইক্লেজ, cAMP ও PKA এর ভূমিকা এবং বাইফাংশনাল PFK-2/FBPase-2 এনজাইমের রিভার্সিবল ফসফরাইলেশন সুইচ বিস্তারিতভাবে চিহ্নিত করা।',
    ),
    l(
      'Evaluate the role of AMP-activated protein kinase (AMPK) as the master cellular energy sensor, including its activation by rising AMP/ATP ratios and its reciprocal control over anabolic vs catabolic pathways.',
      'কোষের প্রধান শক্তি-সংবেদক হিসেবে এএমপিকে (AMPK)-এর ভূমিকা মূল্যায়ন করা, যার মধ্যে AMP/ATP অনুপাত বৃদ্ধি দ্বারা এর সক্রিয়করণ এবং উপচিতি বনাম অপচিতি বিপাকীয় পথের বিপরীতমুখী নিয়ন্ত্রণ অন্তর্ভুক্ত।',
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycogen-gluconeogenesis', 'topic.metabolism.fed-fasted-starvation-states'],
  relatedTopicIds: ['topic.metabolism.organ-metabolic-specialization', 'topic.metabolism.fatty-acid-oxidation-ketones'],
  references: endocrineRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch23', 'marks-medbiochem-6e-ch26'],
    structure: ['harpers-biochem-32e-ch42', 'berg-biochem-9e-ch14'],
    mechanism: ['lehninger-biochem-8e-ch23', 'harpers-biochem-32e-ch42'],
    integration: ['marks-medbiochem-6e-ch26', 'berg-biochem-9e-ch14'],
    practice: ['harpers-biochem-32e-ch42', 'marks-medbiochem-6e-ch26'],
    takeaways: ['lehninger-biochem-8e-ch23', 'marks-medbiochem-6e-ch26'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Endocrine Hierarchy & Metabolic Command', '১. হরমোনীয় স্তরবিন্যাস ও বিপাকীয় নিয়ন্ত্রণ'), sectionId: 'introduction' },
      { id: 'sec-insulin', label: l('2. Insulin RTK Signaling & Anabolic Transduction', '২. ইনসুলিন RTK সংকেত ও উপচিতিমূলক সঞ্চালন'), sectionId: 'structure' },
      { id: 'sec-glucagon', label: l('3. Glucagon & Epinephrine GPCR Cascades', '৩. গ্লুকাগন ও এপিনেফ্রিনের GPCR ক্যাসকেড'), sectionId: 'mechanism' },
      { id: 'sec-ampk', label: l('4. AMPK: The Master Cellular Fuel Sensor', '৪. এএমপিকে: কোষীয় শক্তির প্রধান পরিমাপক'), sectionId: 'integration' },
      { id: 'sec-cortisol', label: l('5. Cortisol, Steroid Diabetes & Clinical Resistance', '৫. কর্টিসোল, স্টেরয়েড ডায়াবেটিস ও ইনসুলিন প্রতিরোধ'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Review & Synthesis Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা ও মূল শিক্ষা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Insulin Receptor Substrate-1 (IRS-1)', 'ইনসুলিন রিসেপ্টর সাবস্ট্রেট-১ (IRS-1)'),
        definition: l(
          'Cytosolic docking protein phosphorylated on multiple tyrosine residues by activated insulin receptor kinase; serves as a scaffold recruiting SH2 domain-containing enzymes like phosphoinositide 3-kinase (PI3K).',
          'কোষীয় ডকিং প্রোটিন যা সক্রিয় ইনসুলিন রিসেপ্টর কাইনেজ দ্বারা টাইরোসিনে ফসফরাইলেটেড হয়ে PI3K-এর মতো SH2 ডোমেইনযুক্ত এনজাইমগুলোকে সংকেত সঞ্চালনের জন্য নোঙর করে।'
        ),
      },
      {
        term: l('Protein Kinase B (Akt / PKB)', 'প্রোটিন কাইনেজ বি (Akt / PKB)'),
        definition: l(
          'Serine/threonine kinase activated downstream of PI3K and PIP3 via dual phosphorylation by PDK1 (Thr308) and mTORC2 (Ser473); phosphorylates AS160, GSK-3, and FOXO1 to orchestrate glucose uptake, glycogen synthesis, and gluconeogenic shutdown.',
          'সেরিন/থ্রিওনিন কাইনেজ যা PDK1 ও mTORC2 দ্বারা দ্বৈত ফসফরাইলেশনের মাধ্যমে সক্রিয় হয়ে AS160, GSK-3 এবং FOXO1 ফসফরাইলেট করে গ্লুকোজ গ্রহণ, গ্লাইকোজেন তৈরি এবং গ্লুকোনিওজেনেসিস বন্ধ করে।'
        ),
      },
      {
        term: l('AMP-Activated Protein Kinase (AMPK)', 'এএমপি-অ্যাক্টিভেটেড প্রোটিন কাইনেজ (AMPK)'),
        definition: l(
          'Heterotrimeric cellular energy gauge activated allosterically by AMP and phosphorylated by upstream kinase LKB1 at Thr172; shuts down ATP-consuming anabolic pathways (ACC, HMGCR, mTORC1) while accelerating ATP-producing catabolism (fatty acid oxidation, glycolysis).',
          'হেটারোট্রাইমেরিক কোষীয় শক্তি সেন্সর যা AMP বৃদ্ধি পেলে সক্রিয় হয় এবং LKB1 দ্বারা Thr172 এ ফসফরাইলেটেড হয়ে চর্বি তৈরি ও প্রোটিন সংশ্লেষ বন্ধ করে ফ্যাটি অ্যাসিড জারণ ও গ্লাইকোলাইসিস চালু করে।'
        ),
      },
      {
        term: l('Forkhead Box O1 (FOXO1)', 'ফর্কহেড বক্স ও১ (FOXO1)'),
        definition: l(
          'Transcription factor that induces expression of gluconeogenic genes PEPCK and glucose-6-phosphatase; direct phosphorylation by Akt creates binding sites for 14-3-3 chaperone proteins, triggering nuclear exclusion and halting gluconeogenesis.',
          'একটি ট্রান্সক্রিপশন ফ্যাক্টর যা PEPCK ও গ্লুকোজ-৬-ফসফেটেজ তৈরি করে গ্লুকোজ বাড়ায়; Akt দ্বারা ফসফরাইলেটেড হলে এটি নিউক্লিয়াস থেকে বিতাড়িত হয়ে গ্লুকোনিওজেনেসিস বন্ধ করে দেয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Glucagon cAMP Signal Amplification Cascade', 'গ্লুকাগন cAMP সংকেতের গুণিতক বিস্তার গণনা'),
        steps: [
          l(
            'Step 1: One molecule of glucagon binds a single cell-surface GPCR, catalyzing GDP-GTP exchange on multiple G-alpha-s subunits (~10 G-alpha-s activated per receptor).',
            'ধাপ ১: একটিমাত্র গ্লুকাগন অণু কোষঝিল্লির রিসেপ্টরে যুক্ত হয়ে প্রায় ১০টি G-আলফা-এস প্রোটিনে GDP এর বদলে GTP যুক্ত করে সেগুলোকে সক্রিয় করে।'
          ),
          l(
            'Step 2: Each activated G-alpha-s stimulates adenylate cyclase to synthesize hundreds of cAMP molecules (~1,000 cAMP generated), binding to PKA regulatory subunits.',
            'ধাপ ২: প্রতিটি সক্রিয় G-আলফা-এস অ্যাডিনাইলেট সাইক্লেজকে উদ্দীপিত করে প্রায় ১,০০০ cAMP তৈরি করে, যা PKA-এর নিয়ন্ত্রক সাবইউনিটে যুক্ত হয়ে অনুঘটক সাবইউনিট মুক্ত করে।'
          ),
          l(
            'Step 3: Free active PKA catalytic subunits phosphorylate and activate phosphorylase kinase (~1,000 active kinases), which in turn phosphorylate glycogen phosphorylase-b into phosphorylase-a (~100,000 active enzymes).',
            'ধাপ ৩: মুক্ত PKA সাবইউনিট ফসফোরাইলেজ কাইনেজকে ফসফরাইলেট করে এবং তা আবার লক্ষাধিক গ্লাইকোজেন ফসফোরাইলেজ এনজাইমকে দ্রুত সক্রিয় অবস্থায় রূপান্তর করে।'
          ),
          l(
            'Step 4: Active glycogen phosphorylase cleaves glycogen chains to release glucose-1-phosphate (~1,000,000 glucose molecules released), representing a 10^6-fold amplification of the initial hormonal signal in under 60 seconds.',
            'ধাপ ৪: সক্রিয় গ্লাইকোজেন ফসফোরাইলেজ গ্লাইকোজেন ভেঙে কয়েক লক্ষ গ্লুকোজ অণু মুক্ত করে; অর্থাৎ মাত্র ১ মিনিটে প্রাথমিক হরমোন সংকেত ১০ লক্ষ গুণ শক্তিশালী হয়ে রক্তে গ্লুকোজ বাড়ায়।'
          ),
        ],
        conclusion: l(
          'Receptor-mediated signal cascades utilize enzyme cascades to achieve million-fold amplification, enabling picomolar hormone fluxes to govern whole-body millimolar glucose fluxes.',
          'রিসেপ্টর সংকেত এনজাইম ক্যাসকেডের মাধ্যমে ১০ লক্ষ গুণ বিস্তার লাভ করে, যার ফলে রক্তে অতি সামান্য পিকোমোলার হরমোন সারা দেহের মিলিমোলার মাত্রার গ্লুকোজ প্রবাহকে নিখুঁতভাবে নিয়ন্ত্রণ করতে পারে।'
        ),
      },
      {
        title: l('Kinetic Equilibrium of the PFK-2 / FBPase-2 Bifunctional Switch', 'PFK-2 / FBPase-2 বাইফাংশনাল সুইচের গতিময় ভারসাম্য হিসাব'),
        steps: [
          l(
            'Step 1: In the fed state, high insulin activates protein phosphatase-2A (PP2A), dephosphorylating Ser32 on the liver bifunctional enzyme PFK-2/FBPase-2.',
            'ধাপ ১: ভুক্ত অবস্থায় ইনসুলিনের প্রভাবে PP2A এনজাইম বাইফাংশনাল এনজাইমের Ser32 থেকে ফসফেট সরিয়ে ফেলে, যার ফলে PFK-2 কাইনেজ ডোমেন সক্রিয় হয়।'
          ),
          l(
            'Step 2: Dephosphorylated PFK-2 synthesizes fructose-2,6-bisphosphate (F-2,6-BP) from fructose-6-phosphate and ATP, elevating hepatic F-2,6-BP concentration to >10 microM.',
            'ধাপ ২: ফসফেটমুক্ত PFK-2 ফ্রুক্টোজ-৬-ফসফেট থেকে ফ্রুক্টোজ-২,৬-বিসফসফেট (F-2,6-BP) তৈরি করে এবং এর মাত্রা ১০ মাইক্রোমোলারের উপরে তুলে দেয়।'
          ),
          l(
            'Step 3: F-2,6-BP binds allosterically to phosphofructokinase-1 (PFK-1), shifting its conformational equilibrium to the high-affinity R-state and abolishing ATP inhibition, driving rapid glycolysis.',
            'ধাপ ৩: F-2,6-BP অ্যালোস্টেরিক্যালি PFK-1 এনজাইমে যুক্ত হয়ে একে অতিসক্রিয় অবস্থায় নিয়ে যায় এবং এটিপির বাধা দূর করে দ্রুত গ্লাইকোলাইসিস চালায়।'
          ),
          l(
            'Step 4: During fasting, glucagon-activated PKA phosphorylates Ser32, inactivating PFK-2 and activating FBPase-2; F-2,6-BP drops to <1 microM, unleashing FBPase-1 to drive gluconeogenesis.',
            'ধাপ ৪: উপবাসকালে PKA দ্বারা Ser32 ফসফরাইলেটেড হলে PFK-2 বন্ধ হয়ে FBPase-2 চালু হয়; ফলে F-2,6-BP কমে যায় এবং FBPase-1 মুক্ত হয়ে গ্লুকোনিওজেনেসিস শুরু করে।'
          ),
        ],
        conclusion: l(
          'Phosphorylation of a single serine residue (Ser32) switches the hepatic PFK-2/FBPase-2 enzyme between kinase and phosphatase states, locking carbon flux into either glycolysis or gluconeogenesis.',
          'একটিমাত্র সেরিন অ্যামিনো অ্যাসিডের (Ser32) ফসফরাইলেশন যকৃতের বাইফাংশনাল এনজাইমকে কাইনেজ থেকে ফসফেটেজে বদলে দিয়ে কার্বন প্রবাহকে সম্পূর্ণরূপে গ্লাইকোলাইসিস অথবা গ্লুকোনিওজেনেসিসে নির্ধারিত করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'How does insulin signaling through Akt/PKB suppress hepatic gluconeogenesis at the transcriptional level?',
          'ইনসুলিন সংকেত কীভাবে Akt/PKB এর মাধ্যমে জিন প্রতিলিপনের স্তরে যকৃতের গ্লুকোনিওজেনেসিস বন্ধ করে দেয়?',
        ),
        answer: l(
          'Activated Akt directly phosphorylates the transcription factor FOXO1 at three conserved residues (Thr24, Ser256, and Ser319). Phosphorylated FOXO1 is recognized by 14-3-3 chaperone proteins and exported from the nucleus into the cytoplasm, where it undergoes polyubiquitination and proteasomal degradation. Because FOXO1 is the obligate transcriptional activator for phosphoenolpyruvate carboxykinase (PEPCK) and glucose-6-phosphatase, its nuclear exclusion halts de novo synthesis of these rate-limiting gluconeogenic enzymes.',
          'সক্রিয় Akt সরাসরি FOXO1 ট্রান্সক্রিপশন ফ্যাক্টরের তিনটি অ্যামিনো অ্যাসিড ফসফরাইলেট করে। ফসফরাইলেটেড FOXO1 ১৪-৩-৩ প্রোটিনের সাথে যুক্ত হয়ে নিউক্লিয়াস থেকে সাইটোপ্লাজমে বিতাড়িত হয় এবং সেখানে ধ্বংসপ্রাপ্ত হয়। নিউক্লিয়াসে FOXO1 না থাকলে PEPCK এবং গ্লুকোজ-৬-ফসফেটেজ এনজাইমের জিন প্রতিলিপন বন্ধ হয়ে যায়, যার ফলে নতুন গ্লুকোজ তৈরি সম্পূর্ণ থেমে যায়।'
        ),
      },
      {
        question: l(
          'Why does muscle contraction stimulate glucose uptake in patients with severe insulin resistance or Type 2 Diabetes?',
          'মারাত্মক ইনসুলিন প্রতিরোধ বা টাইপ-২ ডায়াবেটিসে আক্রান্ত রোগীদের ক্ষেত্রেও শারীরিক ব্যায়াম বা পেশি সংকোচন কীভাবে গ্লুকোজ গ্রহণ বাড়িয়ে দেয়?',
        ),
        answer: l(
          'Muscular contraction consumes ATP, generating AMP and activating AMP-activated protein kinase (AMPK) via Thr172 phosphorylation, alongside intracellular calcium transients activating CaMKK2. Activated AMPK directly phosphorylates TBC1D1 and AS160 at distinct phosphorylation sites independent of the insulin-IRS1-PI3K-Akt pathway. This relieves Rab-GTPase inhibition and triggers the exocytosis of GLUT4 storage vesicles to the sarcolemma, allowing insulin-independent glucose uptake into contracting muscle fibers.',
          'পেশি সংকোচনের ফলে এটিপি ভেঙে এএমপি (AMP) বৃদ্ধি পায় যা সরাসরি AMPK এনজাইমকে এবং ক্যালসিয়াম CaMKK2 কে সক্রিয় করে। এই AMPK ইনসুলিনের সংকেত পথ ছাড়াই স্বাধীনভাবে AS160 ও TBC1D1 ফসফরাইলেট করে GLUT4 বাহকগুলোকে পেশিকোষের ঝিল্লিতে উন্মুক্ত করে দেয়; ফলে ইনসুলিন প্রতিরোধ থাকলেও ব্যায়ামের মাধ্যমে রক্ত থেকে দ্রুত গ্লুকোজ কোষে প্রবেশ করতে পারে।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: endocrineOrgan3DData,
  interactiveDiagram: {
    id: 'endocrine-fuel-signaling-hub',
    title: l('Interactive Endocrine Fuel Signaling: Insulin RTK, Glucagon GPCR & AMPK Energy Triage', 'ইন্টারেক্টিভ হরমোন সংকেত সঞ্চালন: ইনসুলিন RTK, গ্লুকাগন GPCR ও AMPK শক্তি সমন্বয়'),
    description: l(
      'Follow the molecular signaling branches that govern human fuel flux: trace insulin RTK autophosphorylation to GLUT4 and glycogen synthesis, glucagon GPCR/PKA amplification, and AMPK cellular energy sensing.',
      'মানবদেহের জ্বালানি নিয়ন্ত্রণকারী আণবিক সংকেত পথগুলো পর্যবেক্ষণ করুন: ইনসুলিন টাইরোসিন কাইনেজ থেকে GLUT4 ও গ্লাইকোজেন সংশ্লেষ, গ্লুকাগন জি-প্রোটিন সংকেত বিস্তার এবং AMPK-এর শক্তি সেন্সর নিয়ন্ত্রণের সম্পূর্ণ মানচিত্র।'
    ),
    disclaimer: l(
      'Signal transduction cascades, phosphorylation targets, and regulatory thresholds verified against Lehninger Principles of Biochemistry (8th ed) and Harper Illustrated Biochemistry (32nd ed).',
      'সংকেত সঞ্চালন প্রবাহ, ফসফরাইলেশন লক্ষ্যবস্তু এবং নিয়ন্ত্রক মাত্রা লেহনিঞ্জার এবং হার্পারস বায়োকেমিস্ট্রি দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'node-rtk-insulin-irs',
        label: l('1. Insulin Receptor Autophosphorylation & IRS-1 Docking', '১. ইনসুলিন রিসেপ্টর অটোফসফরাইলেশন ও IRS-1 নোঙর'),
        description: l(
          'Insulin binds extracellular alpha subunits, inducing trans-autophosphorylation of tyrosine residues on intracellular beta subunits; activated receptor recruits and phosphorylates IRS-1 and IRS-2 on specific YXXM motifs.',
          'ইনসুলিন রিসেপ্টরের আলফা সাবইউনিটে যুক্ত হলে বিটা সাবইউনিটের টাইরোসিন কাইনেজ নিজে নিজে ফসফরাইলেটেড হয় এবং কোষের ভেতরে IRS-1 ও IRS-2 প্রোটিনগুলোকে টাইরোসিনে ফসফরাইলেট করে সক্রিয় করে।'
        ),
        details: l(
          'Insulin receptor is a disulfide-linked (alpha-beta)2 heterotetramer; phosphorylation at Tyr1158, Tyr1162, and Tyr1163 in the kinase activation loop creates high catalytic activity.',
          'ইনসুলিন রিসেপ্টর ডাইসালফাইড বন্ধনে যুক্ত একটি হেটারোট্রেট্রামার; টাইরোসিন ফসফরাইলেশন এর অনুঘটন ক্ষমতা বহুগুণ বাড়িয়ে দেয়।'
        ),
        sectionId: 'introduction',
        color: '#10b981',
        svgCoords: { cx: 70, cy: 75, r: 24 },
      },
      {
        id: 'node-pi3k-akt-cascade',
        label: l('2. PI3K Generation of PIP3 & Akt/PKB Dual Activation', '২. PI3K দ্বারা PIP3 তৈরি ও Akt/PKB এর দ্বৈত সক্রিয়করণ'),
        description: l(
          'Phosphorylated IRS-1 binds the p85 regulatory subunit of PI3K via SH2 domains, activating catalytic p110 to convert PIP2 into PIP3; PIP3 recruits PDK1 and Akt to the membrane, where Akt is phosphorylated at Thr308 and Ser473.',
          'ফসফরাইলেটেড IRS-1 PI3K এর p85 সাবইউনিটে যুক্ত হয়ে p110 চালু করে PIP2 কে PIP3 তে রূপান্তর করে; PIP3 মেমব্রেনে PDK1 ও Akt টেনে এনে Akt কে সম্পূর্ণ সক্রিয় করে।'
        ),
        details: l(
          'PDK1 phosphorylates Akt at Thr308 in the activation loop; mTORC2 phosphorylates Ser473 in the hydrophobic motif. PTEN phosphatase acts as the critical tumor suppressor opposing PIP3 generation.',
          'PDK1 Thr308 এবং mTORC2 Ser473 ফসফরাইলেট করে Akt চালু করে; PTEN ফসফাটেজ PIP3 নষ্ট করে এই সংকেতকে থামায়।'
        ),
        sectionId: 'structure',
        color: '#06b6d4',
        svgCoords: { cx: 160, cy: 75, r: 24 },
      },
      {
        id: 'node-as160-glut4-translocation',
        label: l('3. AS160 Inactivation & Sarcolemmal GLUT4 Translocation', '৩. AS160 নিবৃত্তকরণ ও পেশিঝিল্লিতে GLUT4 উন্মুক্তকরণ'),
        description: l(
          'Active Akt phosphorylates Rab-GTPase-activating protein AS160 (TBC1D4) at Ser588 and Thr642, inhibiting its GAP activity and allowing Rab-GTP to load, driving the fusion of intracellular GLUT4 storage vesicles into the plasma membrane.',
          'সক্রিয় Akt AS160 প্রোটিনকে ফসফরাইলেশনের মাধ্যমে নিবৃত্ত করে, যার ফলে Rab-GTP সক্রিয় হয়ে কোষের ভেতরের থলি থেকে GLUT4 বাহকগুলোকে কোষঝিল্লিতে উন্মুক্ত করে গ্লুকোজ গ্রহণ বাড়ায়।'
        ),
        details: l(
          'Operates in striated skeletal and cardiac muscle and white adipocytes; increases postprandial glucose uptake up to 20-fold from a baseline basal rate driven by GLUT1.',
          'কঙ্কালপেশি, হৃৎপেশি ও চর্বিকলায় কাজ করে; ভুক্ত অবস্থায় গ্লুকোজ গ্রহণের গতি সাধারণ অবস্থার চেয়ে বিশ গুণ বাড়িয়ে দেয়।'
        ),
        sectionId: 'mechanism',
        color: '#3b82f6',
        svgCoords: { cx: 250, cy: 75, r: 24 },
      },
      {
        id: 'node-gsk3-glycogen-synthase',
        label: l('4. GSK-3 Phosphorylation & Glycogen Synthase Activation', '৪. GSK-3 ফসফরাইলেশন ও গ্লাইকোজেন সিন্থেজ সক্রিয়করণ'),
        description: l(
          'Akt phosphorylates glycogen synthase kinase-3 (GSK-3-alpha at Ser21, GSK-3-beta at Ser9), inactivating it; relief of GSK-3 inhibition combined with PP1 activation keeps glycogen synthase dephosphorylated and catalytically active.',
          'Akt GSK-3 এনজাইমকে ফসফরাইলেশনের মাধ্যমে নিষ্ক্রিয় করে দেয়; এর ফলে গ্লাইকোজেন সিন্থেজ এনজাইম ফসফেটমুক্ত অবস্থায় থেকে সক্রিয় থাকে এবং দ্রুত গ্লাইকোজেন তৈরি করে।'
        ),
        details: l(
          'Dephosphorylated glycogen synthase utilizes UDP-glucose to elongate alpha-1,4-glucosidic chains; insulin simultaneously promotes brancher enzyme activity for compact energy storage.',
          'ফসফেটমুক্ত গ্লাইকোজেন সিন্থেজ UDP-গ্লুকোজ ব্যবহার করে গ্লাইকোজেন চেইন বড় করে এবং ইনসুলিন শাখা তৈরির এনজাইমকেও সক্রিয় রাখে।'
        ),
        sectionId: 'mechanism',
        color: '#6366f1',
        svgCoords: { cx: 340, cy: 75, r: 24 },
      },
      {
        id: 'node-foxo1-gluconeogenesis-off',
        label: l('5. FOXO1 Nuclear Exclusion & Gluconeogenic Repression', '৫. FOXO1 নিউক্লিয়াস বর্জন ও গ্লুকোনিওজেনেসিস বন্ধ'),
        description: l(
          'Akt phosphorylates transcription factor FOXO1 at Thr24, Ser256, and Ser319; phosphorylated FOXO1 binds 14-3-3 proteins and is shuttled out of the nucleus into the cytosol, halting transcription of PEPCK and glucose-6-phosphatase.',
          'Akt FOXO1 ট্রান্সক্রিপশন ফ্যাক্টরকে ফসফরাইলেট করে নিউক্লিয়াস থেকে সাইটোপ্লাজমে বের করে দেয়; ফলে PEPCK ও গ্লুকোজ-৬-ফসফেটেজের জিন বন্ধ হয়ে নতুন গ্লুকোজ তৈরি সম্পূর্ণ থেমে যায়।'
        ),
        details: l(
          'This shutdown prevents hepatic futile cycles during the absorptive phase when dietary glucose is abundant; failure of this checkpoint causes fasting hyperglycemia in diabetes.',
          'ভুক্ত অবস্থায় যখন প্রচুর শর্করা পাওয়া যায় তখন যকৃতে অনর্থক গ্লুকোজ তৈরি হওয়া রোধ করে; ডায়াবেটিসে এই নিয়ন্ত্রণ নষ্ট হয়ে যায়।'
        ),
        sectionId: 'integration',
        color: '#8b5cf6',
        svgCoords: { cx: 70, cy: 155, r: 24 },
      },
      {
        id: 'node-glucagon-pka-cascade',
        label: l('6. Glucagon GPCR / Gs / cAMP / PKA Signal Cascade', '৬. গ্লুকাগন GPCR / Gs / cAMP / PKA সংকেত বিস্তার'),
        description: l(
          'Glucagon binds hepatic GPCRs, activating G-alpha-s to stimulate adenylate cyclase; rising cAMP activates Protein Kinase A (PKA), which phosphorylates phosphorylase kinase to trigger rapid glycogenolysis and glucose export.',
          'গ্লুকাগন হেপাটিক GPCR-এ যুক্ত হয়ে Gs প্রোটিনের মাধ্যমে অ্যাডিনাইলেট সাইক্লেজ চালায়; উৎপন্ন cAMP PKA সক্রিয় করে ফসফোরাইলেজ কাইনেজের মাধ্যমে দ্রুত গ্লাইকোজেন ভেঙে রক্তে গ্লুকোজ ছাড়ে।'
        ),
        details: l(
          'Epinephrine binds hepatic and muscle beta-2 receptors via identical Gs coupling, and hepatic alpha-1 receptors via Gq/PLC/IP3 signaling to release endoplasmic reticulum Ca2+.',
          'এপিনেফ্রিন বিটা-২ রিসেপ্টরের মাধ্যমে একইভাবে PKA চালায় এবং আলফা-১ রিসেপ্টরের মাধ্যমে ক্যালসিয়াম মুক্ত করে গ্লাইকোজেন ভাঙন ত্বরান্বিত করে।'
        ),
        sectionId: 'integration',
        color: '#f59e0b',
        svgCoords: { cx: 160, cy: 155, r: 24 },
      },
      {
        id: 'node-pfk2-bifunctional-switch',
        label: l('7. PFK-2/FBPase-2 Reciprocal Glycolytic Switch', '৭. PFK-2/FBPase-2 এর বিপরীতমুখী গ্লাইকোলাইটিক সুইচ'),
        description: l(
          'PKA phosphorylates the liver bifunctional enzyme at Ser32, turning off PFK-2 kinase activity and turning on FBPase-2 phosphatase; degradation of F-2,6-BP relieves FBPase-1 inhibition, directing carbon flux into gluconeogenesis.',
          'PKA লিভার বাইফাংশনাল এনজাইমের Ser32 ফসফরাইলেট করে PFK-2 বন্ধ ও FBPase-2 চালু করে; ফলে F-2,6-BP নষ্ট হয়ে FBPase-1 সক্রিয় হয় এবং গ্লুকোনিওজেনেসিস বেগবান হয়।'
        ),
        details: l(
          'In heart muscle, an alternative PFK-2 isozyme is phosphorylated by PKA and AMPK at Ser466, activating kinase activity to boost glycolysis during stress or ischemia.',
          'হৃদপেশির ভিন্ন আইসোজাইমে PKA ফসফরাইলেশন উল্টো PFK-2 কে সক্রিয় করে যাতে জরুরি অবস্থায় দ্রুত গ্লাইকোলাইসিসে শক্তি তৈরি হতে পারে।'
        ),
        sectionId: 'practice',
        color: '#ef4444',
        svgCoords: { cx: 250, cy: 155, r: 24 },
      },
      {
        id: 'node-ampk-energy-sensor',
        label: l('8. AMPK Thr172 Sensor & Metabolic Energy Triage', '৮. AMPK Thr172 সেন্সর ও বিপাকীয় শক্তির ভারসাম্য বিধান'),
        description: l(
          'Elevated AMP/ATP ratios bind the gamma regulatory CBS domains of AMPK, facilitating Thr172 phosphorylation by LKB1; active AMPK phosphorylates and inhibits ACC and HMGCR, halts mTORC1, and promotes glucose uptake and beta-oxidation.',
          'AMP বৃদ্ধি পেলে তা AMPK এর গামা সাবইউনিটে যুক্ত হয়ে LKB1 দ্বারা Thr172 ফসফরাইলেশন ঘটায়; সক্রিয় AMPK চর্বি ও কোলেস্টেরল তৈরি বন্ধ করে ফ্যাটি অ্যাসিড জারণ ও গ্লুকোজ গ্রহণ বাড়ায়।'
        ),
        details: l(
          'Phosphorylation of acetyl-CoA carboxylase (ACC) at Ser79 drops malonyl-CoA, disinhibiting CPT-1 and unleashing mitochondrial beta-oxidation to restore cellular ATP charge.',
          'ACC এনজাইম বন্ধ হলে ম্যালনাইল-কোএ কমে যায়, ফলে CPT-1 মুক্ত হয়ে মাইটোকন্ড্রিয়ায় প্রচুর ফ্যাটি অ্যাসিড ঢুকিয়ে জারণের মাধ্যমে এটিপি তৈরি করে।'
        ),
        sectionId: 'takeaways',
        color: '#14b8a6',
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
          heading: l('The Endocrine Hierarchy: Orchestrating Anabolism and Catabolism', 'হরমোনীয় স্তরবিন্যাস: পুষ্টি সঞ্চয় ও ভাঙনের সমন্বিত নেতৃত্ব'),
          paragraphs: [
            l(
              'Metabolic homeostasis in the human body requires continuous communication between nutrient-absorbing organs and fuel-consuming tissues. Rather than functioning as autonomous metabolic units, individual organs rely on endocrine hormones to coordinate their enzyme networks. The primary command system is governed by the opposing actions of pancreatic insulin, which directs nutrient storage during the absorptive state, and the counter-regulatory hormones glucagon, epinephrine, and cortisol, which mobilize stored fuels during fasting, exercise, and physiological stress. These systemic chemical messengers ensure that vital tissues, especially the brain and heart, receive an uninterrupted supply of energy regardless of when the individual last ate.',
              'মানবদেহে বিপাকীয় ভারসাম্য বজায় রাখতে পুষ্টি-শোষণকারী অঙ্গ এবং শক্তি-ব্যবহারকারী অঙ্গসমূহের মাঝে নিরবচ্ছিন্ন যোগাযোগ রক্ষা করা অপরিহার্য। প্রতিটি অঙ্গ নিজের ইচ্ছামতো কাজ না করে হরমোন বার্তার ওপর ভিত্তি করে তাদের এনজাইম সক্রিয় বা নিষ্ক্রিয় করে। এই হরমোন নিয়ন্ত্রণ ব্যবস্থার শীর্ষে রয়েছে অগ্ন্যাশয়ের ইনসুলিন যা খাবার গ্রহণের পর পুষ্টি সঞ্চয় পরিচালনা করে, এবং এর বিপরীতমুখী হরমোন যেমন গ্লুকাগন, এপিনেফ্রিন ও কর্টিসোল যা উপবাস ও শারীরিক চাপের সময় সঞ্চিত জ্বালানি মুক্ত করে। এই সংকেত ব্যবস্থার কারণেই মানুষ দীর্ঘ সময় না খেয়ে থাকলেও তার মস্তিষ্ক ও হৃৎপিণ্ড কোনো বাধা ছাড়াই অবিরাম শক্তি পেতে থাকে।'
            ),
            l(
              'Hormones transmit their regulatory messages across cellular membranes through specialized receptor classes. Water-soluble peptide hormones and catecholamines cannot cross hydrophobic lipid bilayers; instead, they bind high-affinity cell-surface receptors, such as receptor tyrosine kinases (utilized by insulin) and seven-transmembrane G-protein coupled receptors (utilized by glucagon and epinephrine). In contrast, lipid-soluble steroid hormones like cortisol diffuse directly across the plasma membrane to engage intracellular nuclear receptors, altering gene transcription directly. Understanding these diverse signal transduction architectures is essential for comprehending how hormonal balance coordinates metabolic fuel flux across the human body.',
              'হরমোনগুলো বিভিন্ন ধরনের রিসেপ্টরের মাধ্যমে কোষের ভেতরে তাদের বার্তা পৌঁছে দেয়। পানিতে দ্রবণীয় পেপটাইড হরমোন এবং ক্যাটেকোলামাইন কোষের লিপিড ঝিল্লি ভেদ করতে পারে না; তাই তারা কোষের বাইরের বিশেষ রিসেপ্টরে যুক্ত হয়, যেমন ইনসুলিনের টাইরোসিন কাইনেজ রিসেপ্টর এবং গ্লুকাগন ও এপিনেফ্রিনের জি-প্রোটিন রিসেপ্টর। অন্যদিকে চর্বিতে দ্রবণীয় কর্টিসোলের মতো স্টেরয়েড হরমোন সরাসরি কোষঝিল্লি অতিক্রম করে ভেতরে থাকা নিউক্লিয়ার রিসেপ্টরে যুক্ত হয় এবং জিনের প্রতিলিপন পরিবর্তন করে। মানবদেহে কীভাবে হাজার হাজার এনজাইম একযোগে নিয়ন্ত্রিত হয় তা বোঝার জন্য এই সংকেত সঞ্চালন পদ্ধতি নিখুঁতভাবে জানা প্রয়োজন।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Insulin Receptor Tyrosine Kinase Signaling: The Anabolic Engine', 'ইনসুলিন রিসেপ্টর টাইরোসিন কাইনেজ সংকেত: উপচিতির মূল চালিকাশক্তি'),
          paragraphs: [
            l(
              'Insulin is synthesized and stored in pancreatic beta-cell granules, secreted rapidly when portal blood glucose rises above 100 mg/dL following a meal. Upon entering systemic circulation, insulin binds to the extracellular alpha subunits of the insulin receptor, an (alpha-beta)2 heterotetrameric complex with intrinsic catalytic activity. Ligand binding induces a conformational change that triggers trans-autophosphorylation of tyrosine residues located within the activation loop of the intracellular beta subunits. This autophosphorylation creates high catalytic tyrosine kinase activity, initiating an intracellular phosphorylation cascade that coordinates the cellular uptake, utilization, and storage of incoming dietary nutrients.',
              'খাবার খাওয়ার পর রক্তে গ্লুকোজের মাত্রা স্বাভাবিকের চেয়ে বৃদ্ধি পেলে অগ্ন্যাশয়ের বিটা কোষ থেকে ইনসুলিন হরমোন দ্রুত নিঃসৃত হয়ে রক্তে ছড়িয়ে পড়ে। রক্তে প্রবাহিত হয়ে ইনসুলিন কোষে থাকা তার নিজস্ব রিসেপ্টরের আলফা সাবইউনিটে যুক্ত হয়, যা একটি বিশেষ হেটারোট্রেটামার প্রোটিন। ইনসুলিন যুক্ত হওয়ার সাথে সাথে রিসেপ্টরের ভেতরের অংশে থাকা বিটা সাবইউনিটের টাইরোসিন কাইনেজ নিজের গায়ে নিজেই ফসফেট যুক্ত করে অতিসক্রিয় হয়ে ওঠে। এই আত্ম-ফসফরাইলেশন কোষের ভেতরে সংকেতের একটি শক্তিশালী ঢেউ তৈরি করে যা কোষে গ্লুকোজ গ্রহণ, শক্তি উৎপাদন এবং অতিরিক্ত পুষ্টি গ্লাইকোজেন ও চর্বি হিসেবে জমা করার কাজ পরিচালনা করে।'
            ),
            l(
              'Activated insulin receptor kinase phosphorylates scaffold proteins known as insulin receptor substrates (IRS-1 and IRS-2) on specific tyrosine motifs. Phosphorylated IRS proteins serve as high-affinity docking platforms for phosphoinositide 3-kinase (PI3K), recruiting its p85 regulatory subunit and activating its p110 catalytic domain. Active PI3K phosphorylates membrane-bound phosphatidylinositol-4,5-bisphosphate (PIP2) to generate phosphatidylinositol-3,4,5-trisphosphate (PIP3). The lipid second messenger PIP3 recruits both phosphoinositide-dependent kinase-1 (PDK1) and protein kinase B (Akt/PKB) to the inner leaflet of the plasma membrane, setting the stage for Akt activation.',
              'সক্রিয় ইনসুলিন রিসেপ্টর কোষের ভেতরের IRS-1 এবং IRS-2 নামক ডকিং প্রোটিনে টাইরোসিন ফসফেট যুক্ত করে। ফসফরাইলেটেড IRS প্রোটিনের সাথে তখন PI3K এনজাইম যুক্ত হয় এবং এর অনুঘটন ডোমেন সক্রিয় হয়ে ওঠে। সক্রিয় PI3K কোষঝিল্লির PIP2 কে PIP3 নামক শক্তিশালী লিপিড বার্তাবাহকে রূপান্তর করে। এই PIP3 কোষঝিল্লির ভেতরের অংশে PDK1 এবং Akt (প্রোটিন কাইনেজ বি) এনজাইমকে টেনে এনে নোঙর করায়, যার ফলে Akt এনজাইম সম্পূর্ণ সক্রিয় হওয়ার উপযুক্ত পরিবেশ তৈরি হয় এবং পরবর্তী বিপাকীয় পরিবর্তনসমূহ শুরু হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Glucagon and Epinephrine GPCR Cascades: The Mobilization Switch', 'গ্লুকাগন ও এপিনেফ্রিনের GPCR ক্যাসকেড: জ্বালানি মোতায়েনের সংকেত'),
          paragraphs: [
            l(
              'When circulating blood glucose falls below 70 mg/dL during fasting or physical exertion, the pancreas releases glucagon from islet alpha cells, while the adrenal medulla secretes epinephrine in response to sympathetic neural stimulation. Glucagon acts predominantly on the liver, whereas epinephrine acts on both liver and skeletal muscle. Both hormones bind to specific seven-transmembrane G-protein coupled receptors (GPCRs) coupled to the heterotrimeric stimulatory G-protein (Gs). Binding promotes GDP-GTP exchange on the G-alpha-s subunit, causing it to dissociate from G-beta-gamma and activate membrane-bound adenylate cyclase.',
              'উপবাস বা কঠোর পরিশ্রমের সময় রক্তে গ্লুকোজ কমে গেলে অগ্ন্যাশয়ের আলফা কোষ থেকে গ্লুকাগন নিঃসৃত হয় এবং স্নায়ুতন্ত্রের উদ্দীপনায় অ্যাড্রিনাল থেকে এপিনেফ্রিন হরমোন বের হয়। গ্লুকাগন মূলত যকৃতে কাজ করে, আর এপিনেফ্রিন যকৃৎ ও কঙ্কালপেশি উভয় স্থানেই কাজ করে। উভয় হরমোনই কোষঝিল্লির বিশেষ জি-প্রোটিন যুক্ত রিসেপ্টরে (GPCR) যুক্ত হয়। হরমোন যুক্ত হলে রিসেপ্টর Gs প্রোটিনকে সক্রিয় করে এবং এর আলফা সাবইউনিট মুক্ত হয়ে অ্যাডিনাইলেট সাইক্লেজ নামক এনজাইমকে উদ্দীপিত করে, যার ফলে কোষের ভেতরে এটিপি থেকে দ্রুত প্রচুর সাইক্লিক এএমপি (cAMP) তৈরি হতে শুরু করে।'
            ),
            l(
              'Adenylate cyclase converts cellular ATP into cyclic AMP (cAMP), a soluble second messenger that binds the regulatory subunits of Protein Kinase A (PKA). Binding of cAMP causes conformational dissociation of PKA, releasing catalytically active PKA subunits that phosphorylate target metabolic enzymes at serine and threonine residues. Phosphorylation by PKA activates catabolic enzymes—including phosphorylase kinase (which activates glycogen phosphorylase) and hormone-sensitive lipase—while inactivating anabolic enzymes like glycogen synthase and acetyl-CoA carboxylase, shifting systemic metabolism to fuel release.',
              'উৎপন্ন সাইক্লিক এএমপি (cAMP) সরাসরি প্রোটিন কাইনেজ এ (PKA) এর নিয়ন্ত্রক অংশে যুক্ত হয়ে এর সক্রিয় অনুঘটক সাবইউনিটগুলোকে মুক্ত করে দেয়। মুক্ত PKA এনজাইম তখন লক্ষ্যবস্তু এনজাইমগুলোতে ফসফেট যুক্ত করে। PKA এর ফসফরাইলেশনের কারণে গ্লাইকোজেন ভাঙার এনজাইম এবং চর্বি ভাঙার হরমোন-সংবেদনশীল লাইপেজ অতিসক্রিয় হয়ে ওঠে; একই সাথে গ্লাইকোজেন তৈরির এনজাইম এবং চর্বি তৈরির এনজাইম ফসফেট পেয়ে বন্ধ হয়ে যায়। এর ফলে শরীর তৎক্ষণাৎ পুষ্টি সঞ্চয় বন্ধ করে সঞ্চিত গ্লাইকোজেন ও ফ্যাটি অ্যাসিড রক্তে মুক্ত করে রক্তের গ্লুকোজ স্বাভাবিক রাখে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('AMPK: The Cellular Energy Gauge and Metabolic Guardian', 'এএমপিকে: কোষীয় শক্তির প্রধান পরিমাপক ও বিপাকীয় অভিভাবক'),
          paragraphs: [
            l(
              'At the cellular level, energy balance is safeguarded by AMP-activated protein kinase (AMPK), an evolutionary conserved heterotrimeric enzyme complex consisting of an alpha catalytic subunit and beta and gamma regulatory subunits. AMPK acts as a cellular fuel gauge by continuously sensing the ratio of AMP to ATP. Because the adenylate kinase reaction (2 ADP <-> ATP + AMP) maintains an equilibrium where small percentage drops in cellular ATP produce exponential increases in free AMP, rising AMP serves as an ultra-sensitive warning indicator of impending cellular energy crisis during hypoxia, ischemia, or sustained muscle contraction.',
              'কোষের ভেতরে শক্তির ভারসাম্য রক্ষা করার প্রধান দায়িত্ব পালন করে এএমপি-অ্যাক্টিভেটেড প্রোটিন কাইনেজ (AMPK)। এই এনজাইমটি তিনটি ভিন্ন প্রোটিন সাবইউনিট নিয়ে গঠিত এবং এটি কোষের ভেতরে AMP ও ATP এর অনুপাত প্রতিনিয়ত পরিমাপ করে। কোষে এটিপির মাত্রা সামান্য কমে গেলেই অ্যাডিনাইলেট কাইনেজ এনজাইমের কারণে মুক্ত এএমপি (AMP)-এর পরিমাণ বহুগুণ বেড়ে যায়। তাই কোষে অক্সিজেনের অভাব হলে বা ব্যায়ামের সময় অতিরিক্ত শক্তি খরচ হলে এএমপি দ্রুত বৃদ্ধি পেয়ে কোষের আসন্ন শক্তি সংকটের একটি অতি-সংবেদনশীল বিপদসংকেত হিসেবে কাজ করে এবং এএমপিকে এনজাইমকে চালু করে।'
            ),
            l(
              'Binding of AMP to cystathionine beta-synthase (CBS) domains on the gamma subunit induces a conformational shift that exposes Thr172 in the activation loop of the alpha catalytic subunit, enabling phosphorylation by upstream tumor suppressor kinase LKB1. Once phosphorylated, active AMPK executes a rapid metabolic triage: it shuts down ATP-consuming anabolic processes such as fatty acid synthesis (by phosphorylating acetyl-CoA carboxylase) and protein synthesis (by inhibiting mTORC1), while aggressively accelerating ATP-generating catabolic processes like fatty acid beta-oxidation and insulin-independent glucose uptake via GLUT4.',
              'এএমপি (AMP) যুক্ত হলে AMPK-এর গঠনে পরিবর্তন ঘটে এবং এর থ্রিওনিন-১৭২ (Thr172) অ্যামিনো অ্যাসিড উন্মুক্ত হয়ে এলকেবি-১ (LKB1) কাইনেজ দ্বারা ফসফরাইলেটেড হয়। একবার সক্রিয় হয়ে গেলে AMPK কোষের শক্তি বাঁচাতে এক জরুরি ব্যবস্থা গ্রহণ করে: এটি নতুন চর্বি ও প্রোটিন তৈরির মতো শক্তি অপচয়কারী পথগুলো সাথে সাথে বন্ধ করে দেয় এবং একই সাথে মাইটোকন্ড্রিয়ায় চর্বি পোড়ানো ও ইনসুলিন ছাড়াই কোষে গ্লুকোজ ঢুকিয়ে এটিপি তৈরির গতি বহুলাংশে বৃদ্ধি করে কোষকে মৃত্যুর হাত থেকে রক্ষা করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Cortisol and Nuclear Reprogramming: The Long-Term Stress Hormone', 'কর্টিসোল ও জিনগত রূপান্তর: দীর্ঘমেয়াদী মানসিক ও শারীরিক চাপের হরমোন'),
          paragraphs: [
            l(
              'While epinephrine and glucagon execute rapid metabolic adjustments within seconds to minutes, glucocorticoids like cortisol mediate long-term metabolic adaptations over hours and days. Secreted by the adrenal cortex under control of the hypothalamic-pituitary-adrenal (HPA) axis, cortisol diffuses across cell membranes and binds intracellular glucocorticoid receptors (GR) in the cytoplasm. Ligand binding releases heat shock proteins, permitting receptor homodimerization and translocation into the nucleus, where the receptor binds specific glucocorticoid response elements (GREs) in promoter regions of target metabolic genes.',
              'এপিনেফ্রিন ও গ্লুকাগন কয়েক সেকেন্ড থেকে মিনিটের মধ্যে দ্রুত কাজ করলেও কর্টিসোলের মতো গ্লুকোকোর্টিকয়েড হরমোন কয়েক ঘণ্টা থেকে কয়েক দিন ধরে বিপাকীয় পরিবর্তন পরিচালনা করে। হাইপোথ্যালামাস ও পিটুইটারির নির্দেশে অ্যাড্রিনাল কর্টেক্স থেকে কর্টিসোল নিঃসৃত হয়ে সরাসরি কোষের ভেতরে প্রবেশ করে সাইটোপ্লাজমে থাকা রিসেপ্টরে যুক্ত হয়। কর্টিসোল যুক্ত হওয়ার পর এই রিসেপ্টর নিউক্লিয়াসে প্রবেশ করে এবং নির্দিষ্ট জিনের প্রমোটার অঞ্চলে যুক্ত হয়ে আরএনএ তৈরির গতি বৃদ্ধি করে, যার ফলে দীর্ঘস্থায়ী উপবাস বা মানসিক চাপে নতুন বিপাকীয় এনজাইম তৈরি হয়।'
            ),
            l(
              'In the liver and kidneys, cortisol transcriptionally induces phosphoenolpyruvate carboxykinase (PEPCK) and glucose-6-phosphatase, expanding the enzymatic machinery required for sustained gluconeogenesis. Concurrently, cortisol promotes peripheral catabolism, stimulating skeletal muscle proteolysis to release alanine and glutamine as gluconeogenic substrates while inhibiting peripheral glucose uptake. In states of pathological chronic cortisol excess, such as Cushing syndrome or prolonged high-dose corticosteroid therapy, this uninhibited hepatic glucose output and peripheral insulin resistance leads to steroid-induced diabetes.',
              'যকৃৎ ও বৃক্কে কর্টিসোল PEPCK এবং গ্লুকোজ-৬-ফসফেটেজ জিনের প্রতিলিপন বাড়িয়ে নতুন গ্লুকোজ তৈরির স্থায়ী কারখানা চালু রাখে। একই সাথে এটি কঙ্কালপেশির প্রোটিন ভেঙে রক্তে অ্যামিনো অ্যাসিড ছাড়তে বাধ্য করে যাতে সেই অ্যামিনো অ্যাসিড দিয়ে যকৃতে গ্লুকোজ তৈরি হতে পারে। কুশিং সিন্ড্রোম বা দীর্ঘমেয়াদী স্টেরয়েড ওষুধ সেবনের মতো রোগে অতিরিক্ত কর্টিসোল রক্তে থাকলে যকৃৎ থেকে অনিয়ন্ত্রিত গ্লুকোজ তৈরি হয় এবং পেশিতে ইনসুলিন কাজ না করায় রোগী মারাত্মক স্টেরয়েড-জনিত ডায়াবেটিসে আক্রান্ত হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('High-Yield Review: Core Principles of Endocrine Fuel Control', 'উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা: হরমোনভিত্তিক জ্বালানি নিয়ন্ত্রণের মূলনীতি'),
          paragraphs: [
            l(
              'Endocrine regulation of human metabolism operates through reciprocal kinase-phosphatase switches and allosteric feedback circuits. The fed state is dominated by insulin receptor tyrosine kinase signaling via PI3K and Akt, which promotes nutrient storage by mobilizing GLUT4 vesicles, activating glycogen synthase through GSK-3 inhibition, and excluding FOXO1 from the nucleus to silence gluconeogenic transcription. Conversely, fasting and stress elevate glucagon and epinephrine, activating GPCR/Gs/cAMP/PKA signaling to stimulate glycogenolysis, lipolysis, and gluconeogenesis via reciprocal phosphorylation of the PFK-2/FBPase-2 bifunctional enzyme.',
              'মানবদেহের হরমোনভিত্তিক বিপাকীয় নিয়ন্ত্রণ কাইনেজ ও ফসফেটেজ এনজাইমের বিপরীতমুখী সুইচ এবং ফিডব্যাক চক্রের মাধ্যমে পরিচালিত হয়। ভুক্ত অবস্থায় ইনসুলিনের টাইরোসিন কাইনেজ PI3K ও Akt এর মাধ্যমে GLUT4 উন্মুক্ত করে, GSK-3 বন্ধ করে গ্লাইকোজেন তৈরি বাড়ায় এবং FOXO1 কে নিউক্লিয়াস থেকে বের করে গ্লুকোনিওজেনেসিস বন্ধ রাখে। অন্যদিকে উপবাসকালে গ্লুকাগন ও এপিনেফ্রিন GPCR এবং PKA এর মাধ্যমে গ্লাইকোজেন ও চর্বি ভাঙন বাড়ায় এবং PFK-2/FBPase-2 এনজাইম ফসফরাইলেট করে নতুন গ্লুকোজ তৈরির পথ উন্মুক্ত করে।'
            ),
            l(
              'At the cellular level, AMPK acts as the master emergency energy sensor, responding to depleted ATP and soaring AMP by phosphorylating Thr172. Activated AMPK halts ATP-consuming lipid and protein synthesis while driving fatty acid oxidation and contraction-stimulated glucose uptake. Superimposed on these acute phosphorylation cascades, cortisol directs transcriptional remodeling, inducing gluconeogenic enzymes while driving peripheral proteolysis. Understanding these intersecting pathways provides the essential biochemical framework for diagnosing and managing diabetes mellitus, metabolic syndrome, and acute endocrine emergencies.',
              'কোষের ভেতরে AMPK প্রধান জরুরি শক্তি সেন্সর হিসেবে কাজ করে; এটিপি কমে এএমপি বৃদ্ধি পেলে Thr172 ফসফরাইলেশনের মাধ্যমে এটি সক্রিয় হয়। সক্রিয় AMPK চর্বি ও প্রোটিন তৈরি বন্ধ রেখে ফ্যাটি অ্যাসিড জারণ ও ব্যায়ামকালীন গ্লুকোজ গ্রহণ চালু করে। পাশাপাশি কর্টিসোল জিনের পরিবর্তন ঘটিয়ে গ্লুকোজ তৈরির এনজাইম বাড়ায় ও পেশিক্ষয় ঘটায়। এই আন্তঃসংযুক্ত সংকেত পথগুলো নিখুঁতভাবে বোঝা ডায়াবেটিস, মেটাবলিক সিন্ড্রোম এবং বিভিন্ন হরমোনজনিত জটিলতা সফলভাবে নির্ণয় ও চিকিৎসার মূল ভিত্তি।'
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
          heading: l('Receptor Topography and Transmembrane Signaling Mechanics', 'রিসেপ্টর টপোগ্রাফি ও কোষঝিল্লি সংকেত সঞ্চালনের গতিবিদ্যা'),
          paragraphs: [
            l(
              'The mammalian insulin receptor is synthesized as a single 1382-amino-acid proreceptor precursor that undergoes proteolytic cleavage in the Golgi apparatus into an extracellular alpha subunit (135 kDa) and a transmembrane beta subunit (95 kDa), linked together by disulfide bonds to form a mature alpha2-beta2 heterotetramer. The extracellular alpha subunits form an inverted V-shaped binding pocket that coordinates a single insulin molecule with high nanomolar affinity (Kd ~0.1–0.5 nM), causing the membrane-spanning beta subunits to converge. This juxtaposition releases steric autoinhibition in the intracellular catalytic tyrosine kinase domain, enabling mutual trans-phosphorylation across the two beta chains.',
              'স্তন্যপায়ী প্রাণীর ইনসুলিন রিসেপ্টর একটি একক প্রোটিন হিসেবে তৈরি হয়ে গলজি বডিতে প্রক্রিয়াজাত হয় এবং আলফা ও বিটা সাবইউনিটে বিভক্ত হয়ে ডাইসালফাইড বন্ধনে যুক্ত একটি পূর্ণাঙ্গ আলফা২-বিটা২ হেটারোট্রেটামার গঠন করে। বাইরের আলফা সাবইউনিট একটি উল্টানো ভি-আকৃতির পকেট তৈরি করে যার সাথে অত্যন্ত শক্তিশালী বন্ধনে ইনসুলিন অণু যুক্ত হয়। ইনসুলিন যুক্ত হওয়ার সাথে সাথে কোষঝিল্লির ভেতরে থাকা বিটা সাবইউনিটগুলো একে অপরের কাছাকাছি চলে আসে এবং অভ্যন্তরীণ বাধা অপসারিত হয়ে উভয় চেইন একে অপরকে টাইরোসিন অ্যামিনো অ্যাসিডে ফসফরাইলেট করে অতিসক্রিয় অনুঘটন ক্ষমতা লাভ করে।'
            ),
            l(
              'Trans-phosphorylation occurs sequentially on three critical tyrosine residues within the activation loop (A-loop) of the beta-subunit catalytic domain: Tyr1158, Tyr1162, and Tyr1163 (human isoform numbering). In the unphosphorylated state, the unphosphorylated A-loop occupies the active site cleft, directly blocking ATP binding and protein substrate access. Sequential phosphorylation of these three tyrosines induces a massive electrostatic conformational displacement, rotating the A-loop away from the catalytic cleft and aligning the catalytic base Asp1132 and ATP-coordinating residues into optimal spatial alignment, increasing kinase activity by more than 200-fold.',
              'বিটা সাবইউনিটের অ্যাক্টিভেশন লুপে থাকা তিনটি নির্দিষ্ট টাইরোসিন (Tyr1158, Tyr1162 এবং Tyr1163) ধারাবাহিকভাবে ফসফরাইলেটেড হয়। ফসফেটবিহীন অবস্থায় এই লুপটি এনজাইমের সক্রিয় স্থান আটকে রাখে যার ফলে এটিপি ঢুকতে পারে না। কিন্তু তিনটি টাইরোসিনে ফসফেট যুক্ত হওয়ার সাথে সাথে বৈদ্যুতিক বিকর্ষণে লুপটি সরে যায় এবং ক্যাটালাইটিক cleft উন্মুক্ত হয়ে এটিপি ও সাবস্ট্রেট প্রোটিনকে নিখুঁত অবস্থানে বসিয়ে দেয়, যার ফলে কাইনেজ এনজাইমের সক্রিয়তা দুই শত গুণেরও বেশি বৃদ্ধি পায়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('IRS-1 Phosphorylation, PI3K Activation, and Akt Substrate Cascades', 'IRS-1 ফসফরাইলেশন, PI3K সক্রিয়করণ এবং Akt সাবস্ট্রেট ক্যাসকেড'),
          paragraphs: [
            l(
              'Once activated, the insulin receptor tyrosine kinase recruits insulin receptor substrate-1 (IRS-1) via its amino-terminal pleckstrin homology (PH) and phosphotyrosine-binding (PTB) domains, which recognize phosphorylated NPXY motifs on the juxtamembrane region of the receptor beta-subunit. The receptor kinase then phosphorylates at least nine tyrosine residues on IRS-1 situated within consensus YXXM motifs. These phosphorylated YXXM motifs serve as high-affinity docking sites for the tandem Src-homology-2 (SH2) domains of the p85 regulatory subunit of Class IA phosphoinositide 3-kinase (PI3K), relieving p85-mediated inhibition of the p110 catalytic subunit and recruiting PI3K to the plasma membrane.',
              'সক্রিয় ইনসুলিন রিসেপ্টর তার বিটা সাবইউনিটের ফসফরাইলেটেড মোটিফের মাধ্যমে IRS-1 প্রোটিনের PH ও PTB ডোমেনকে কাছে টেনে নেয়। এরপর রিসেপ্টর কাইনেজ IRS-1 এর কমপক্ষে নয়টি টাইরোসিনে ফসফেট যুক্ত করে। এই ফসফরাইলেটেড মোটিফগুলো ক্লাস-১এ PI3K এনজাইমের p85 রেগুলেটরি সাবইউনিটের SH2 ডোমেনকে শক্তভাবে আটকে ফেলে, যার ফলে অনুঘটক সাবইউনিট p110 মুক্ত হয় এবং প্লাজমা মেমব্রেনের কাছে এসে সংকেত তৈরি শুরু করে।'
            ),
            l(
              'Membrane-localized p110 phosphorylates phosphatidylinositol-4,5-bisphosphate (PIP2) at the 3-position of the inositol ring to generate phosphatidylinositol-3,4,5-trisphosphate (PIP3). PIP3 acts as a membrane anchor for proteins containing specialized PH domains, simultaneously recruiting 3-phosphoinositide-dependent kinase-1 (PDK1) and Akt/PKB. At the membrane, PDK1 phosphorylates Akt at Thr308 in its activation loop, while the mammalian target of rapamycin complex 2 (mTORC2) phosphorylates Akt at Ser473 in its carboxy-terminal hydrophobic motif. This dual phosphorylation fully activates Akt, which detaches from the membrane to phosphorylate diverse downstream substrates throughout the cytosol and nucleus.',
              'ঝিল্লিতে অবস্থানরত p110 সাবইউনিট PIP2 এর ৩ নম্বর কার্বনে ফসফেট যুক্ত করে PIP3 তৈরি করে। PIP3 তার PH ডোমেনের মাধ্যমে PDK1 এবং Akt উভয় এনজাইমকেই কোষঝিল্লির ভেতরের স্তরে টেনে আনে। সেখানে PDK1 Akt-এর Thr308 এ ফসফেট দেয় এবং mTORC2 এর Ser473 এ ফসফেট যুক্ত করে। এই দ্বৈত ফসফরাইলেশনের ফলে Akt পূর্ণ শক্তি লাভ করে ঝিল্লি থেকে বিচ্ছিন্ন হয় এবং সাইটোপ্লাজম ও নিউক্লিয়াসে ছড়িয়ে পড়ে তার লক্ষ্যবস্তু সাবস্ট্রেটগুলোকে ফসফরাইলেট করে পুষ্টি সঞ্চয় পরিচালনা করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('G-Protein Heterotrimers, Adenylate Cyclase, and PKA Target Kinetics', 'জি-প্রোটিন হেটারোট্রাইমার, অ্যাডিনাইলেট সাইক্লেজ ও PKA এর গতিবিদ্যা'),
          paragraphs: [
            l(
              'Glucagon and epinephrine receptors are archetypal Class A family G-protein coupled receptors spanning the plasma membrane through seven alpha-helices. Upon agonist binding, the intracellular loops undergo outward helical displacement, creating an intracellular cavity that engages the carboxy-terminal tail of the heterotrimeric G-protein alpha subunit (Gs-alpha). This interaction destabilizes the nucleotide-binding pocket of Gs-alpha, triggering GDP dissociation and allowing intracellular GTP (present at ~10-fold higher concentration than GDP) to bind. GTP binding causes Gs-alpha to dissociate from the G-beta-gamma heterodimer and translocate laterally along the membrane to bind and stimulate adenylate cyclase isoforms AC5 and AC6.',
              'গ্লুকাগন ও এপিনেফ্রিনের রিসেপ্টরগুলো সাতটি আলফা-হেলিক্স দিয়ে গঠিত আদর্শ ক্লাস-এ GPCR। হরমোন যুক্ত হলে রিসেপ্টরের গঠনের পরিবর্তন ঘটে এবং এটি হেটারোট্রাইমেরিক Gs প্রোটিনের আলফা সাবইউনিটের সাথে যুক্ত হয়। এই সংযোগের কারণে Gs-আলফা থেকে GDP বের হয়ে যায় এবং কোষে প্রচুর থাকা GTP এতে যুক্ত হয়। GTP যুক্ত হওয়ার সাথে সাথে Gs-আলফা বিটা-গামা ডাইমার থেকে আলাদা হয়ে প্লাজমা মেমব্রেনের ভেতর দিয়ে দ্রুত সরে গিয়ে অ্যাডিনাইলেট সাইক্লেজ এনজাইমের সাথে যুক্ত হয়ে তাকে অত্যন্ত শক্তিশালীভাবে উদ্দীপিত করে।'
            ),
            l(
              'Activated adenylate cyclase converts cytosolic Mg-ATP into cyclic 3\',5\'-adenosine monophosphate (cAMP) and inorganic pyrophosphate. cAMP diffuses through the cytosol and binds cooperatively to four allosteric sites on the tandem regulatory (R) subunit dimer of the inactive PKA holoenzyme (R2C2). Binding of two cAMP molecules to each R subunit induces an extensive conformational rotation that drops its affinity for the catalytic (C) subunits by four orders of magnitude, liberating two monomeric C subunits with open, constitutively active kinase catalytic sites. These free C subunits rapidly phosphorylate specific target motifs displaying the consensus sequence Arg-Arg-X-Ser/Thr-Phi (where Phi is a hydrophobic residue).',
              'সক্রিয় অ্যাডিনাইলেট সাইক্লেজ এটিপি থেকে সাইক্লিক এএমপি (cAMP) তৈরি করে। এই cAMP নিষ্ক্রিয় PKA এনজাইমের রেগুলেটরি সাবইউনিটে গিয়ে যুক্ত হয়। প্রতিটি রেগুলেটরি সাবইউনিটে দুটি করে cAMP যুক্ত হলে এদের গঠনে ব্যাপক পরিবর্তন ঘটে এবং অনুঘটক (C) সাবইউনিটের প্রতি আকর্ষণ দশ হাজার গুণ কমে যায়, যার ফলে দুটি সম্পূর্ণ সক্রিয় C সাবইউনিট মুক্ত হয়ে ছড়িয়ে পড়ে। এই মুক্ত কাইনেজগুলো দ্রুত নির্দিষ্ট প্রোটিন মোটিফে থাকা সেরিন ও থ্রিওনিন অ্যামিনো অ্যাসিডে ফসফেট যুক্ত করে গ্লাইকোজেন ও চর্বি ভাঙনের পথ উন্মুক্ত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The AMPK Heterotrimer, CBS Domains, and Kinase Cross-Regulation', 'AMPK হেটারোট্রাইমার, CBS ডোমেন ও কাইনেজ নিয়ন্ত্রণের সূক্ষ্ম আণবিক কৌশল'),
          paragraphs: [
            l(
              'AMP-activated protein kinase functions as an obligate heterotrimer comprising an alpha catalytic subunit (alpha1 or alpha2), a beta scaffolding subunit (beta1 or beta2), and a gamma regulatory subunit (gamma1, gamma2, or gamma3). The gamma subunit contains four tandem cystathionine beta-synthase (CBS) domains arranged into two Bateman domains that form four potential adenine nucleotide-binding sites. Sites 1 and 3 exchange AMP, ADP, and ATP competitively, while site 4 binds AMP constitutively with ultra-high affinity and site 2 remains empty. When the cellular adenylate energy charge drops, AMP binding to sites 1 and 3 promotes an allosteric interaction that shifts the beta-subunit carbohydrate-binding module (CBM) and alpha-subunit kinase domain into a closed, active conformation.',
              'এএমপিকে (AMPK) একটি আলফা ক্যাটালাইটিক, একটি বিটা স্ক্যাফোল্ডিং এবং একটি গামা রেগুলেটরি সাবইউনিট নিয়ে গঠিত একটি অবিচ্ছেদ্য ট্রাইমার। গামা সাবইউনিটে চারটি CBS ডোমেন থাকে যা অ্যাডেনিন নিউক্লিওটাইড বন্ধন ক্ষেত্র তৈরি করে। কোষের শক্তি কমে গেলে সাইট ১ এবং ৩-এ এটিপির বদলে এএমপি যুক্ত হয়। এর ফলে প্রোটিনের অভ্যন্তরীণ গঠনে মোচড় তৈরি হয় এবং আলফা সাবইউনিটের কাইনেজ ডোমেনটি এমন এক সক্রিয় অবস্থায় চলে আসে যা শক্তি উৎপাদনকারী প্রক্রিয়া চালু করার জন্য আদর্শ।'
            ),
            l(
              'Allosteric binding of AMP accomplishes three coordinated biochemical outcomes: it produces a modest direct 2- to 10-fold allosteric activation of kinase activity, it promotes phosphorylation of Thr172 by upstream tumor suppressor kinase LKB1 (in complex with STRAD and MO25), and it sterically blocks protein phosphatases (such as PP2A and PP2C) from dephosphorylating Thr172. Phosphorylated AMPK then phosphorylates and inactivates acetyl-CoA carboxylase 1 (ACC1 at Ser79) in the cytosol, halting malonyl-CoA production for fatty acid synthesis, while simultaneously inactivating muscle ACC2 (Ser221) at the mitochondrial outer membrane, relieving allosteric inhibition of carnitine palmitoyltransferase-1 (CPT-1) to flood fatty acids into beta-oxidation.',
              'এএমপি যুক্ত হওয়ার ফলে তিনটি যুগপৎ ঘটনা ঘটে: এনজাইমের ক্ষমতা সরাসরি বৃদ্ধি পায়, এলকেবি-১ (LKB1) দ্বারা Thr172 এ ফসফরাইলেশন বহুগুণ সহজ হয় এবং ফসফেটেজ এনজাইম দ্বারা Thr172 থেকে ফসফেট খুলে নেওয়া সম্পূর্ণ বাধাগ্রস্ত হয়। এর ফলে সক্রিয় AMPK সাইটোসলে ACC1 এনজাইম বন্ধ করে চর্বি তৈরি থামায় এবং মাইটোকন্ড্রিয়ার গায়ে ACC2 বন্ধ করে ম্যালনাইল-কোএ কমিয়ে দেয়; যার ফলে CPT-1 এনজাইম বাধামুক্ত হয়ে প্রচুর ফ্যাটি অ্যাসিড মাইটোকন্ড্রিয়ায় ঢুকিয়ে জারণ শুরু করে প্রচুর এটিপি তৈরি করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Glucocorticoid Receptor Zinc-Finger Transactivation & Target Promoters', 'গ্লুকোকোর্টিকয়েড রিসেপ্টর জিংক-ফিঙ্গার জিন সক্রিয়করণ ও লক্ষ্য প্রমোটার'),
          paragraphs: [
            l(
              'Cortisol signal transduction operates via the classic nuclear receptor NR3C1 (glucocorticoid receptor-alpha). In the unliganded basal state, the glucocorticoid receptor resides in the cytoplasm as part of a multi-protein chaperone complex containing two molecules of heat shock protein 90 (Hsp90), Hsp70, and immunophilins such as FKBP51/52, which maintain the ligand-binding domain in a high-affinity receptive conformation. Lipophilic cortisol crosses the plasma membrane and binds the hydrophobic cleft of the C-terminal ligand-binding domain, inducing an inward clamp of helix-12. This conformational rearrangement destabilizes chaperone interactions, liberating the receptor to form a homodimer and uncover nuclear localization signals.',
              'কর্টিসোলের সংকেত সঞ্চালন মূলত NR3C1 নামক গ্লুকোকোর্টিকয়েড রিসেপ্টরের মাধ্যমে পরিচালিত হয়। সাধারণ অবস্থায় এই রিসেপ্টরটি সাইটোপ্লাজমে Hsp90 ও Hsp70 সহ বিভিন্ন চ্যাপেরন প্রোটিনের সাথে যুক্ত হয়ে আবদ্ধ থাকে। চর্বিতে দ্রবণীয় কর্টিসোল কোষঝিল্লি ভেদ করে রিসেপ্টরের নির্দিষ্ট পকেটে যুক্ত হলে চ্যাপেরন প্রোটিনগুলো বিচ্ছিন্ন হয়ে যায়। এরপর দুটি কর্টিসোলযুক্ত রিসেপ্টর একসাথে জোড়া বেঁধে হোমোডাইমার গঠন করে এবং তাদের নিউক্লিয়ার সংকেত উন্মুক্ত হয়ে তারা দ্রুত নিউক্লিয়াসে প্রবেশ করে জিনের কাছে পৌঁছায়।'
            ),
            l(
              'Translocating into the nucleus through nuclear pore complexes via importin-alpha/beta, the homodimer utilizes its central zinc-finger DNA-binding domain to recognize inverted palindromic glucocorticoid response elements (GREs, consensus 5\'-GGTACAnnnTGTTCT-3\') in chromatin. The dimer recruits histone acetyltransferases (such as p300/CBP) and chromatin remodeling complexes to open target promoters. In hepatocytes, the glucocorticoid receptor synergizes with transcription factor HNF4-alpha and forkhead factor FOXO1 to strongly induce the promoter of phosphoenolpyruvate carboxykinase-1 (PCK1) and glucose-6-phosphatase (G6PC), permanently reprogramming hepatic output toward high-rate gluconeogenesis during prolonged metabolic stress.',
              'নিউক্লিয়াসে প্রবেশের পর রিসেপ্টর ডাইমারটি তার জিংক-ফিঙ্গার ডোমেন ব্যবহার করে ডিএনএ-এর নির্দিষ্ট গ্লুকোকোর্টিকয়েড রেসপন্স এলিমেন্টে (GRE) যুক্ত হয়। সেখানে এটি হিস্টোন অ্যাসিটাইলেশন ঘটিয়ে ডিএনএ খুলে দেয়। যকৃতে এটি HNF4-আলফা এবং FOXO1 এর সাথে সমন্বিতভাবে PEPCK এবং গ্লুকোজ-৬-ফসফেটেজ জিনের প্রমোটার অঞ্চলকে অতিসক্রিয় করে তোলে; যার ফলে দীর্ঘস্থায়ী উপবাস বা অসুস্থতার সময় যকৃৎ অবিরাম নতুন গ্লুকোজ তৈরি করে রক্তে সরবরাহ নিশ্চিত রাখতে পারে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Integrated Network Mapping: Intersecting Anabolic and Catabolic Nodes', 'সমন্বিত সংকেত মানচিত্র: উপচিতি ও অপচিতির আন্তঃসংযোগ নোডসমূহ'),
          paragraphs: [
            l(
              'Metabolic regulation is defined not by linear pathways, but by a dense web of cross-talk between opposing signaling nodes. The key cross-regulatory node controlling glycolytic flux is the bifunctional enzyme 6-phosphofructo-2-kinase/fructose-2,6-bisphosphatase (PFK-2/FBPase-2). Insulin signaling activates protein phosphatase-2A (PP2A), dephosphorylating Ser32 on the liver isozyme to activate the kinase domain and synthesize fructose-2,6-bisphosphate (F-2,6-BP). Because F-2,6-BP is the most potent allosteric activator of PFK-1 and allosteric inhibitor of FBPase-1, insulin locks the cell into glycolysis. Conversely, glucagon-activated PKA phosphorylates Ser32, switching off PFK-2 and activating FBPase-2, purging F-2,6-BP and flipping carbon flux completely into gluconeogenesis.',
              'বিপাকীয় নিয়ন্ত্রণ কোনো সরলরৈখিক পথ নয়, বরং বিভিন্ন বিপরীতমুখী সংকেতের এক জটিল এবং সুসংগঠিত জাল। গ্লাইকোলাইসিস নিয়ন্ত্রণের মূল কেন্দ্র হলো PFK-2/FBPase-2 বাইফাংশনাল এনজাইম। ইনসুলিন সংকেত PP2A ফসফেটেজ সক্রিয় করে লিভার এনজাইমের Ser32 থেকে ফসফেট সরিয়ে ফেলে, যার ফলে F-2,6-BP তৈরি হয় যা PFK-1 কে অতিসক্রিয় করে গ্লাইকোলাইসিস চালায়। অপরদিকে গ্লুকাগন দ্বারা PKA Ser32 এ ফসফেট দিলে F-2,6-BP নষ্ট হয়ে যায় এবং FBPase-1 এনজাইম বাধামুক্ত হয়ে সমস্ত কার্বনকে গ্লুকোজ তৈরিতে চালিত করে।'
            ),
            l(
              'Similarly, fuel storage in glycogen is locked by a reciprocal switch: PKA phosphorylates both glycogen synthase (inactivating it) and phosphorylase kinase (activating it to phosphorylate glycogen phosphorylase-b into phosphorylase-a), driving instantaneous glycogen breakdown. In contrast, insulin activates protein phosphatase-1 (PP1), which removes these phosphates to stop glycogenolysis and stimulate glycogen synthesis. In energy-depleted conditions, AMPK phosphorylates ACC to silence malonyl-CoA synthesis and unleash CPT-1, driving fatty acid beta-oxidation while overriding anabolic insulin signals. These finely balanced molecular switches preserve whole-body fuel economy across feeding, fasting, and physical exercise.',
              'গ্লাইকোজেন সঞ্চয়ও একটি দ্বি-মুখী সুইচের মাধ্যমে সংরক্ষিত হয়: PKA গ্লাইকোজেন সিন্থেজকে ফসফরাইলেশনের মাধ্যমে বন্ধ করে এবং গ্লাইকোজেন ফসফোরাইলেজকে ফসফরাইলেশনের মাধ্যমে চালু করে তাৎক্ষণিক গ্লাইকোজেন ভাঙন নিশ্চিত করে। বিপরীতে ইনসুলিন PP1 ফসফেটেজ সক্রিয় করে ফসফেট সরিয়ে গ্লাইকোজেন তৈরি শুরু করে এবং ভাঙন থামায়। কোষে শক্তি সংকট দেখা দিলে AMPK চর্বি তৈরি বন্ধ করে ফ্যাটি অ্যাসিড জারণ বেগবান করে। এই সূক্ষ্ম আণবিক সুইচগুলোই খাবার খাওয়া, উপবাস এবং ব্যায়ামের সময় মানবদেহের সমগ্র জ্বালানি অর্থনীতিকে নিখুঁত ভারসাম্যে বজায় রাখে।'
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
          heading: l('mTORC1 Integration, SREBP-1c Lipogenesis, and TSC1/2 Molecular Mechanics', 'mTORC1 সমন্বয়, SREBP-1c লিপিড সংশ্লেষ ও TSC1/2 এর আণবিক মেকানিক্স'),
          paragraphs: [
            l(
              'A major anabolic branch downstream of Akt is the activation of the mechanistic target of rapamycin complex 1 (mTORC1), which integrates growth factor signaling with intracellular amino acid availability. Akt directly phosphorylates tuberous sclerosis complex 2 (TSC2 / tuberin) at Ser939 and Thr1462, destabilizing the TSC1-TSC2-TBC1D7 GTPase-activating protein (GAP) complex. Relief of TSC2 GAP activity allows the small G-protein Rheb (Ras homolog enriched in brain) to accumulate in its active GTP-bound state on the lysosomal limiting membrane. Rheb-GTP directly binds and activates the kinase domain of mTOR within the mTORC1 complex (containing mTOR, Raptor, and mLST8). Concurrently, intra-lysosomal amino acids (particularly leucine and arginine) activate Rag GTPase heterodimers (RagA/B bound to GTP, RagC/D bound to GDP) via the v-ATPase, Sestrin2, CASTOR1, and Ragulator sensing complexes, docking mTORC1 to the lysosomal membrane adjacent to Rheb-GTP for maximal catalytic activation.',
              'ইনসুলিন সংকেতের একটি অত্যন্ত গুরুত্বপূর্ণ শাখা হলো mTORC1 কমপ্লেক্সের সক্রিয়করণ, যা পুষ্টি সংকেত ও অ্যামিনো অ্যাসিডের প্রাচুর্যকে সমন্বিত করে। Akt সরাসরি TSC2 প্রোটিনের নির্দিষ্ট অ্যামিনো অ্যাসিড ফসফরাইলেট করে তার কার্যকারিতা নিষ্ক্রিয় করে দেয়। এর ফলে Rheb নামক ছোট জি-প্রোটিন GTP যুক্ত সক্রিয় অবস্থায় এসে লাইসোজোমের ঝিল্লিতে mTORC1 এর কাইনেজ ডোমেনকে উদ্দীপিত করে। একই সাথে কোষে লিউসিন ও আরজিনিন অ্যামিনো অ্যাসিডের উপস্থিতি র্যাগ (Rag) জি-প্রোটিন কমপ্লেক্সের মাধ্যমে mTORC1 কে লাইসোজোম ঝিল্লিতে এনে নোঙর করায়; যার ফলে mTORC1 পূর্ণ শক্তি লাভ করে প্রোটিন সংশ্লেষ ও কোষ বৃদ্ধিতে নেতৃত্ব দেয়।'
            ),
            l(
              'Active mTORC1 phosphorylates p70 ribosomal S6 kinase-1 (S6K1 at Thr389) and eukaryotic translation initiation factor 4E-binding protein 1 (4E-BP1 at multiple threonine and serine sites). Phosphorylation of 4E-BP1 liberates eIF4E, assembling the eIF4F cap-binding complex to initiate 5\'-cap-dependent translation of ribosomal proteins and metabolic enzymes. Simultaneously, mTORC1 activation promotes de novo lipogenesis through both S6K1 and direct phosphorylation of lipin-1, facilitating nuclear translocation and proteolytic cleavage of sterol regulatory element-binding protein-1c (SREBP-1c). Cleaved nuclear SREBP-1c drives the transcription of ATP-citrate lyase (ACLY), acetyl-CoA carboxylase-1 (ACAC1), and fatty acid synthase (FASN), converting surplus glycolytic carbons into palmitate and triacylglycerols for long-term adipocyte storage.',
              'সক্রিয় mTORC1 S6K1 এবং 4E-BP1 প্রোটিনকে ফসফরাইলেশনের মাধ্যমে মুক্ত করে কোষের রাইবোজোম বৃদ্ধি ও প্রোটিন সংশ্লেষের গতি ব্যাপকভাবে বাড়িয়ে দেয়। পাশাপাশি mTORC1 লিপিড তৈরির প্রধান ট্রান্সক্রিপশন ফ্যাক্টর SREBP-1c কে নিউক্লিয়াসে প্রবেশ করিয়ে চর্বি তৈরির এনজাইম যেমন ফ্যাটি অ্যাসিড সিন্থেজ (FASN) এবং অ্যাসিটাইল-কোএ কার্বক্সিলেজ (ACAC1) এর জিন প্রতিলিপন বহুগুণ বৃদ্ধি করে। এর ফলে অতিরিক্ত গ্লুকোজ সরাসরি প্যালমিটেট ও ট্রাইগ্লিসারাইড চর্বিতে রূপান্তরিত হয়ে চর্বিকলায় জমা হয়, যা পরবর্তীতে দীর্ঘস্থায়ী শক্তির ভাণ্ডার হিসেবে কাজ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Lipolysis, Perilipin Phosphorylation, and Molecular Drivers of Insulin Resistance', 'লাইপোলাইসিস, পেরিলিপিন ফসফরাইলেশন ও ইনসুলিন প্রতিরোধের আণবিক কার্যকারণ'),
          paragraphs: [
            l(
              'In white adipose tissue, triacylglycerol mobilization is governed by a tripartite enzymatic cascade under beta-adrenergic PKA control. Lipid droplets are enveloped by a monolayer of phospholipids coated with perilipin-1 (PLIN1), which physically prevents cytoplasmic lipases from contacting the hydrophobic triacylglycerol core. Upon catecholamine stimulation, PKA phosphorylates perilipin-1 at multiple serine residues (Ser81, Ser222, Ser276, Ser424, Ser492, and Ser517) and phosphorylates hormone-sensitive lipase (HSL at Ser659 and Ser660). Perilipin-1 phosphorylation releases the coactivator comparative gene identification-58 (CGI-58 / ABHD5), which binds and activates adipose triglyceride lipase (ATGL / PNPLA2). ATGL performs the first, rate-limiting cleavage of triacylglycerol to diacylglycerol; phosphorylated HSL then hydrolyzes diacylglycerol to monoacylglycerol; and monoacylglycerol lipase (MAGL) cleaves the final ester bond to release glycerol and three free fatty acids into systemic circulation.',
              'শ্বেত চর্বিকলায় ট্রাইগ্লিসারাইড ভাঙার কাজটি PKA-এর নিয়ন্ত্রণে একটি তিন-ধাপ বিশিষ্ট এনজাইম ক্যাসকেডের মাধ্যমে সম্পন্ন হয়। চর্বির ড্রপলেটগুলো পেরিলিপিন-১ (PLIN1) নামক প্রোটিনের আস্তরণে ঢাকা থাকে যা লাইপেজ এনজাইমকে ঢুকতে বাধা দেয়। এপিনেফ্রিনের সংকেতে PKA পেরিলিপিন-১ এবং হরমোন-সংবেদনশীল লাইপেজকে (HSL) ফসফরাইলেট করে। পেরিলিপিন ফসফরাইলেটেড হলে CGI-58 মুক্ত হয়ে ATGL এনজাইমকে চালু করে, যা প্রথম ট্রাইগ্লিসারাইডকে ডাইঅ্যাসাইলগ্লিসারলে ভাঙে। এরপর HSL একে মনোঅ্যাসাইলগ্লিসারলে এবং পরিশেষে MAGL গ্লিসারল ও তিনটি মুক্ত ফ্যাটি অ্যাসিডে পরিণত করে রক্তে পাঠিয়ে দেয়।'
            ),
            l(
              'Under chronic nutrient excess and visceral adiposity, excessive lipolysis floods skeletal muscle and liver with unesterified fatty acids, precipitating lipid-induced insulin resistance. Accumulation of intracellular lipid intermediates—specifically sn-1,2-diacylglycerols (DAG) and ceramides—triggers the translocation and activation of novel protein kinase C isoforms (particularly PKC-theta in skeletal muscle and PKC-epsilon in liver). Activated PKC phosphorylates IRS-1 and IRS-2 on inhibitory serine residues (such as Ser307 and Ser1101 on human IRS-1), directly obstructing insulin receptor-mediated tyrosine phosphorylation and accelerating IRS degradation. Consequently, downstream PI3K activation, Akt phosphorylation, AS160 inhibition, and GLUT4 translocation are severely blunted, locking muscle in a state of impaired glucose disposal and driving systemic hyperinsulinemia and Type 2 Diabetes.',
              'অতিরিক্ত চর্বি ও স্থূলতার কারণে যখন রক্তে অবিরাম ফ্যাটি অ্যাসিড প্রবাহিত হয়, তখন পেশি ও যকৃতে বিষাক্ত লিপিড অন্তর্বর্তী উপাদান যেমন ডাইঅ্যাসাইলগ্লিসারল (DAG) ও সিরামাইড জমা হয়। এই উপাদানগুলো PKC-থিটা এবং PKC-এপসিলন এনজাইমকে অতিসক্রিয় করে তোলে। সক্রিয় PKC সরাসরি IRS-1 এর সেরিন অ্যামিনো অ্যাসিডে ফসফেট যুক্ত করে রিসেপ্টর থেকে টাইরোসিন ফসফরাইলেশন গ্রহণ করতে বাধা দেয় এবং IRS ধ্বংস ত্বরান্বিত করে। এর ফলে Akt সক্রিয় হতে পারে না, GLUT4 ঝিল্লিতে পৌঁছায় না এবং পেশিকোষ রক্ত থেকে গ্লুকোজ নিতে সম্পূর্ণ ব্যর্থ হয়, যা মেটাবলিক সিন্ড্রোম এবং টাইপ-২ ডায়াবেটিসের মূল আণবিক কারণ।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An integrated endocrine pathway diagram displaying insulin RTK signaling via IRS-1, PI3K, PIP3, PDK1, and Akt, leading to GLUT4 translocation, glycogen synthesis, and FOXO1 exclusion, contrasted against counter-regulatory GPCR signaling via Gs, adenylate cyclase, cAMP, and PKA driving PFK-2/FBPase-2 phosphorylation and glycogenolysis, balanced by AMPK Thr172 cellular energy sensing.',
      'ইনসুলিন RTK সংকেতের মাধ্যমে IRS-1, PI3K, PIP3, PDK1 ও Akt সক্রিয় হয়ে GLUT4 উন্মুক্তকরণ, গ্লাইকোজেন তৈরি ও FOXO1 বর্জন করার মানচিত্র; যা গ্লুকাগন ও এপিনেফ্রিনের GPCR, cAMP, PKA এবং PFK-2/FBPase-2 সুইচের মাধ্যমে গ্লাইকোজেন ও চর্বি ভাঙন এবং AMPK-এর শক্তি সেন্সর নিয়ন্ত্রণের সাথে সমন্বিতভাবে প্রদর্শিত।'
    ),
    steps: [
      l('Insulin binding triggers receptor beta-subunit autophosphorylation and IRS-1 recruitment.', 'ইনসুলিন যুক্ত হয়ে রিসেপ্টরের বিটা সাবইউনিট অটোফসফরাইলেশন এবং IRS-1 ডকিং সম্পন্ন করে।'),
      l('IRS-1 docks PI3K, synthesizing PIP3 to recruit and dually activate Akt at Thr308 and Ser473.', 'IRS-1 PI3K যুক্ত করে PIP3 তৈরি করে যা Akt কে Thr308 ও Ser473 এ ফসফরাইলেট করে সক্রিয় করে।'),
      l('Akt phosphorylates AS160 to translocate GLUT4, GSK-3 to activate glycogen synthase, and FOXO1 to halt gluconeogenesis.', 'Akt AS160 দিয়ে GLUT4 উন্মুক্ত করে, GSK-3 নিবৃত্ত করে গ্লাইকোজেন তৈরি বাড়ায় এবং FOXO1 বের করে গ্লুকোজ তৈরি বন্ধ করে।'),
      l('Glucagon and epinephrine stimulate GPCR/Gs to produce cAMP, releasing active PKA catalytic subunits.', 'গ্লুকাগন ও এপিনেফ্রিন GPCR এবং Gs দিয়ে cAMP তৈরি করে সক্রিয় PKA মুক্ত করে।'),
      l('PKA phosphorylates PFK-2/FBPase-2 to lower F-2,6-BP and activates phosphorylase kinase to drive glycogenolysis.', 'PKA PFK-2/FBPase-2 ফসফরাইলেশনের মাধ্যমে F-2,6-BP কমিয়ে গ্লুকোনিওজেনেসিস এবং গ্লাইকোজেন ভাঙন চালু করে।'),
      l('AMPK senses elevated AMP/ATP, phosphorylating Thr172 to inhibit ACC/mTORC1 and stimulate catabolic ATP generation.', 'AMPK AMP বৃদ্ধি শনাক্ত করে Thr172 ফসফরাইলেশনের মাধ্যমে চর্বি তৈরি বন্ধ করে এবং শক্তি উৎপাদন বাড়ায়।'),
    ],
  },
  assessment: {
    question: l(
      'A 52-year-old man with a 10-year history of poorly controlled Type 2 Diabetes is evaluated for severe morning fasting hyperglycemia (fasting blood glucose 218 mg/dL). A hyperinsulinemic-euglycemic clamp study demonstrates profound hepatic insulin resistance. At the molecular level in his hepatocytes, which biochemical defect directly accounts for his unsuppressed nocturnal hepatic gluconeogenesis despite elevated circulating insulin concentrations?',
      '১০ বছরের অনিয়ন্ত্রিত টাইপ-২ ডায়াবেটিসে আক্রান্ত এক ৫২ বছর বয়সী ব্যক্তির সকালে ঘুম থেকে ওঠার পর রক্তে গ্লুকোজ মারাত্মক বেশি (ফাস্টিং গ্লুকোজ ২১৮ মিগ্রা/ডেসিলিটার) পাওয়া গেল। বিশেষ পরীক্ষায় দেখা গেল তার যকৃতে তীব্র ইনসুলিন প্রতিরোধ বিদ্যমান। আণবিক স্তরে তার হেপাটোসাইটে কোন ত্রুটিটির কারণে রক্তে ইনসুলিন বেশি থাকা সত্ত্বেও রাতে যকৃতের গ্লুকোনিওজেনেসিস বন্ধ হতে সম্পূর্ণ ব্যর্থ হচ্ছে?'
    ),
    options: [
      l(
        'Failure of Akt-mediated phosphorylation of FOXO1, allowing uninhibited nuclear transcription of PEPCK and glucose-6-phosphatase.',
        'Akt দ্বারা FOXO1 ফসফরাইলেশনে ব্যর্থতা, যার ফলে নিউক্লিয়াসে PEPCK ও গ্লুকোজ-৬-ফসফেটেজ জিনের অনিয়ন্ত্রিত প্রতিলিপন অব্যাহত থাকে।'
      ),
      l(
        'Hyperactivation of glucokinase regulatory protein (GKRP) trapping glucose in the cytoplasm.',
        'গ্লুকোকাইনেজ রেগুলেটরি প্রোটিন (GKRP) অতিসক্রিয় হয়ে সাইটোপ্লাজমে গ্লুকোজ আটকে রাখা।'
      ),
      l(
        'Overexpression of protein phosphatase-1 (PP1) accelerating glycogen synthase inactivation.',
        'প্রোটিন ফসফেটেজ-১ (PP1) এর অতিরিক্ত কার্যকারিতা যা গ্লাইকোজেন সিন্থেজ এনজাইমকে নিবৃত্ত করে।'
      ),
      l(
        'Excessive AMPK phosphorylation at Thr172 suppressing hepatic beta-oxidation.',
        'AMPK এর Thr172 অতিরিক্ত ফসফরাইলেশনের কারণে হেপাটিক বিটা-জারণ বাধাগ্রস্ত হওয়া।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Under normal physiological conditions, insulin signaling in hepatocytes activates the PI3K-Akt pathway. Active Akt directly phosphorylates the transcription factor FOXO1, triggering its nuclear exclusion and cytosolic proteasomal degradation. Because FOXO1 is the critical transcriptional activator for the rate-limiting gluconeogenic enzymes phosphoenolpyruvate carboxykinase (PEPCK) and glucose-6-phosphatase (G6Pase), its nuclear exclusion halts hepatic gluconeogenesis. In hepatic insulin resistance, impaired insulin signaling fails to activate Akt, leaving FOXO1 unphosphorylated and retained in the nucleus, where it drives continuous, uninhibited transcription of PEPCK and G6Pase, producing severe fasting hyperglycemia.',
      'স্বাভাবিক অবস্থায় ইনসুলিন PI3K-Akt সংকেতের মাধ্যমে FOXO1 ট্রান্সক্রিপশন ফ্যাক্টরকে ফসফরাইলেট করে নিউক্লিয়াস থেকে বের করে দেয়। নিউক্লিয়াসে FOXO1 না থাকলে গ্লুকোনিওজেনেসিসের হার-নিয়ন্ত্রক এনজাইম PEPCK এবং গ্লুকোজ-৬-ফসফেটেজ তৈরি হতে পারে না এবং যকৃতের নতুন গ্লুকোজ উৎপাদন বন্ধ থাকে। কিন্তু হেপাটিক ইনসুলিন প্রতিরোধে Akt চালু হতে না পারায় FOXO1 ফসফেটমুক্ত অবস্থায় নিউক্লিয়াসে অবস্থান করে এবং অবিরাম PEPCK ও গ্লুকোজ-৬-ফসফেটেজ তৈরি করে চলে; যার ফলে রোগী রাতে না খেয়ে থাকলেও যকৃৎ থেকে অনিয়ন্ত্রিত গ্লুকোজ বের হয়ে মারাত্মক ফাস্টিং হাইপারগ্লাইসেমিয়া ঘটায়।'
    ),
  },
}
