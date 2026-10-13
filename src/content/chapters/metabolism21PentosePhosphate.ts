import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const pppRefs = [
  {
    id: 'lehninger-biochem-8e-ch14',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 14: Glycolysis, Gluconeogenesis, and the Pentose Phosphate Pathway',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'cappellini-g6pd-2008',
    authors: 'Maria Domenica Cappellini, Gemino Fiorelli',
    title: 'Glucose-6-phosphate dehydrogenase deficiency. The Lancet, 371(9606):64-74',
    organization: 'Elsevier / The Lancet',
    year: 2008,
    url: 'https://pubmed.ncbi.nlm.nih.gov/18177777/',
  },
  {
    id: 'harpers-biochem-32e-ch20',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 20: The Pentose Phosphate Pathway & Other Pathways of Hexose Metabolism",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'luzzatto-g6pd-malaria-2020',
    authors: 'Lucio Luzzatto, Allyson N. Seneca',
    title: 'Glucose 6-phosphate dehydrogenase deficiency: a historical review. British Journal of Haematology, 189(1):10-23',
    organization: 'Wiley / British Journal of Haematology',
    year: 2020,
    url: 'https://pubmed.ncbi.nlm.nih.gov/31828751/',
  },
  {
    id: 'marks-medbiochem-6e-ch29',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 29: Pentose Phosphate Pathway and Other Pathways of Glucose Metabolism",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

const ppp3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Pentose Phosphate Flux & NADPH Demand',
    '৩ডি বহু-অঙ্গীয় পেন্টোজ ফসফেট প্রবাহ ও এনএডিপিএইচ চাহিদার মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and explore coordinate space to trace how human tissues differentially utilize the Pentose Phosphate Pathway for reductive biosynthesis, oxidative stress protection, and nucleotide generation.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে মানবদেহের বিভিন্ন অঙ্গ জারণজনিত চাপ থেকে বাঁচতে এবং নিউক্লিওটাইড তৈরিতে পেন্টোজ ফসফেট পথ ব্যবহার করে।'
  ),
  description: l(
    'The Pentose Phosphate Pathway (PPP) is partitioned across organ systems based on biochemical specializations: erythrocytes possess zero mitochondria and depend 100% on G6PD-derived NADPH for glutathione reduction to prevent hemolysis; the liver and lactating mammary glands run the PPP for fatty acid lipogenesis; the adrenal cortex utilizes NADPH for steroid hydroxylation; while rapidly dividing hematopoietic bone marrow harnesses ribose-5-phosphate for DNA replication.',
    'পেন্টোজ ফসফেট পথ (PPP) বিভিন্ন অঙ্গে তাদের কাজের ওপর ভিত্তি করে বিশেষভাবে বণ্টিত: লোহিত রক্তকণিকায় মাইটোকন্ড্রিয়া না থাকায় তারা রক্তকণিকা ভাঙন রোধে ১০০% G6PD-এর ওপর নির্ভর করে; যকৃতে এটি চর্বি তৈরিতে ব্যবহৃত হয়; অ্যাড্রিনাল গ্রন্থিতে স্টেরয়েড তৈরিতে এনএডিপিএইচ লাগে; আর অস্থিমজ্জায় দ্রুত কোষ বিভাজনের জন্য রাইবোজ-৫-ফসফেট সরবরাহ করে।'
  ),
  organs: [
    {
      id: 'organ-rbc-ppp',
      name: l('Erythrocytes & Spleen (Sole NADPH Source & Hemolytic Filter)', 'লোহিত রক্তকণিকা ও প্লীহা (একক এনএডিপিএইচ উৎস ও ফিল্টার)'),
      latinName: 'Erythrocyti et Lien',
      system: l('Hematologic & Reticuloendothelial System', 'রক্ত সংবহন ও রেটিকিউলোএন্ডোথেলিয়াল তন্ত্র'),
      cavity: l('Left Hypochondrium & Vascular Bed', 'বাম হাইপোকন্ড্রিয়াম ও ভাস্কুলার সংবহন'),
      position3D: { x: -22, y: 210, z: -2 },
      color: '#e11d48',
      highlightColor: '#fb7185',
      shapeType: 'stomach',
      description: l(
        'Erythrocytes lack mitochondria, making G6PD their ONLY biochemical source of NADPH. NADPH is required by glutathione reductase to maintain reduced glutathione (GSH), which neutralizes hydrogen peroxide via glutathione peroxidase.',
        'লোহিত রক্তকণিকায় কোনো মাইটোকন্ড্রিয়া থাকে না; ফলে G6PD এনজাইমই তাদের এনএডিপিএইচ তৈরির একমাত্র উৎস। গ্লুটাথিয়নকে বিজারিত রাখতে এটি অপরিহার্য যা কোষকে ক্ষতিকর পারঅক্সাইড থেকে রক্ষা করে।'
      ),
      spatialRelations: l(
        'Circulates through systemic capillaries, squeezing repeatedly through the 2-micron interendothelial slits of the splenic red pulp cords of Billroth.',
        'সারা শরীরে রক্ত চলাচলের সময় প্লীহার অতি-সংকীর্ণ রক্তনালিকা দিয়ে প্রতিনিয়ত প্রবাহিত হয় যা দুর্বল রক্তকণিকাগুলোকে ফিল্টার করে আটকে দেয়।'
      ),
      physiology: l(
        'Consumes ~10% of total erythrocyte glucose via the PPP shunt under basal conditions, accelerating up to 20-fold during oxidant challenge.',
        'স্বাভাবিক অবস্থায় লোহিত রক্তকণিকার প্রায় ১০% গ্লুকোজ এই পথে ব্যবহৃত হয়, যা কোনো জারণ বা বিষাক্ত চাপে ২০ গুণ পর্যন্ত বৃদ্ধি পেতে পারে।'
      ),
      nutritionConnection: l(
        'Fava beans (Vicia faba) contain toxic beta-glucosides vicine and convicine; when hydrolyzed to divicine, they generate severe oxidative stress in G6PD-deficient individuals.',
        'ফাফা শিমের ভিসিন ও কনভিসিন উপাদান শরীরে বিষাক্ত ডিভিসিন তৈরি করে যা G6PD ঘাটতিযুক্ত মানুষের তীব্র রক্তাল্পতা (ফ্যাভিজম) ঘটায়।'
      ),
      clinicalSignificance: l(
        'G6PD deficiency causes episodic acute hemolytic anemia triggered by oxidative drugs (primaquine, dapsone, rasburicase), infections, or fava beans, forming diagnostic Heinz bodies.',
        'G6PD ঘাটতিতে প্রিমাকুইন বা ড্যাপসনের মতো ওষুধ খেলে লোহিত রক্তকণিকা ভেঙে যায় এবং কোষে হাইঞ্জ বডি তৈরি হয়ে তীব্র জন্ডিস ও রক্তশূন্যতা সৃষ্টি করে।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-liver-ppp',
      name: l('Liver (High-Capacity Reductive Lipogenic & Detoxification Factory)', 'যকৃৎ (উচ্চ-ক্ষমতাসম্পন্ন চর্বি তৈরি ও বিষমুক্তকরণ কারখানা)'),
      latinName: 'Hepar',
      system: l('Hepatobiliary & Intermediary System', 'যকৃৎ-পিত্ত ও অন্তর্বর্তী বিপাকীয় তন্ত্র'),
      cavity: l('Right Upper Abdominal Quadrant', 'ডান ঊর্ধ্ব উদর গহ্বর'),
      position3D: { x: 12, y: 200, z: 0 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'Operates the complete PPP at high capacity to supply the massive NADPH demands of de novo fatty acid synthesis, cholesterol biosynthesis, bile acid production, and Cytochrome P450 monooxygenase drug metabolism.',
        'চর্বি সংশ্লেষণ, কোলেস্টেরল তৈরি, পিত্ত অ্যাসিড উৎপাদন এবং সাইটোক্রোম P450 এনজাইম দ্বারা ওষুধ বিষমুক্ত করার জন্য বিপুল পরিমাণ এনএডিপিএইচ সরবরাহ করতে পূর্ণ শক্তিতে এই পথ চালায়।'
      ),
      spatialRelations: l(
        'Receives carbohydrate-rich portal venous blood from the small intestine, providing high concentrations of glucose-6-phosphate substrate immediately postprandially.',
        'অন্ত্র থেকে পোর্টাল শিরার মাধ্যমে প্রচুর গ্লুকোজ গ্রহণ করে, যা খাবার গ্রহণের পর দ্রুত প্রচুর গ্লুকোজ-৬-ফসফেট সরবরাহ নিশ্চিত করে।'
      ),
      physiology: l(
        'G6PD is transcriptionally induced by insulin via SREBP-1c and ChREBP, coupling carbohydrate abundance to lipogenic NADPH generation.',
        'ইনসুলিন হরমোন যকৃতে G6PD এনজাইমের প্রকাশ বৃদ্ধি করে, যার ফলে অতিরিক্ত শর্করা থেকে সহজেই চর্বি তৈরি হতে পারে।'
      ),
      nutritionConnection: l(
        'Transketolase requires thiamine pyrophosphate (TPP, vitamin B1); measuring erythrocyte transketolase activity before and after TPP addition is the clinical gold standard for diagnosing thiamine deficiency.',
        'ট্রান্সকিটোলেজ এনজাইমের জন্য থায়ামিন (ভিটামিন বি১) অপরিহার্য; রক্তে এই এনজাইমের গতি মেপেই থায়ামিনের ঘাটতি নির্ণয় করা হয়।'
      ),
      clinicalSignificance: l(
        'Supplies NADPH to Cytochrome P450 reductase for Phase I xenobiotic biotransformation, converting hydrophobic toxins into conjugatable polar metabolites.',
        'ওষুধ ও বিষাক্ত পদার্থকে প্রস্রাবের সাথে বের করে দিতে সাইটোক্রোম P450 এনজাইমকে নিরবচ্ছিন্ন এনএডিপিএইচ সরবরাহ করে।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-adrenal-ppp',
      name: l('Adrenal Cortex (Steroid Hormone Hydroxylation Engine)', 'অ্যাড্রিনাল কর্টেক্স (স্টেরয়েড হরমোন তৈরির মূল ইঞ্জিন)'),
      latinName: 'Glandula Suprarenalis',
      system: l('Endocrine System', 'অন্তঃক্ষরা গ্রন্থিতন্ত্র'),
      cavity: l('Retroperitoneum (Superior Renal Poles)', 'রেট্রোপেরিটোনিয়াম (বৃক্কের ঊর্ধ্ব মেরু)'),
      position3D: { x: -14, y: 240, z: -6 },
      color: '#eab308',
      highlightColor: '#fde047',
      shapeType: 'kidneys',
      description: l(
        'Exhibits one of the highest tissue concentrations of G6PD in the human body. NADPH is an obligatory electron donor for mitochondrial and microsomal cytochrome P450 steroid hydroxylases (CYP11A1, CYP21A2, CYP11B1, CYP17A1).',
        'মানবদেহের মধ্যে সবচেয়ে বেশি ঘনমাত্রায় G6PD ধারণকারী অন্যতম অঙ্গ। স্টেরয়েড হরমোন (যেমন কর্টিসল, অ্যালডোস্টেরন) তৈরিতে প্রতিটি হাইড্রোক্সিলেশন ধাপে এনএডিপিএইচ প্রয়োজন হয়।'
      ),
      spatialRelations: l(
        'Caps the superior pole of each kidney; organized into Zona Glomerulosa, Zona Fasciculata, and Zona Reticularis.',
        'উভয় বৃক্কের উপরিভাগে টুপির মতো অবস্থান করে এবং কর্টিসল ও সেক্স হরমোন তৈরি করে।'
      ),
      physiology: l(
        'Cholesterol side-chain cleavage (CYP11A1) and cortisol synthesis require 2 moles of NADPH per mole of steroid hydroxylated via adrenodoxin reductase and adrenodoxin intermediates.',
        'কোলেস্টেরল থেকে হরমোন তৈরির জন্য অ্যাডরিনোডক্সিন রিডাক্টেজের মাধ্যমে প্রচুর এনএডিপিএইচ ব্যবহৃত হয়।'
      ),
      nutritionConnection: l(
        'Dependent on ascorbic acid (vitamin C) stored in high concentrations in adrenal cortex to protect steroidogenic P450 enzymes from autoxidation.',
        'অ্যাড্রিনাল কর্টেক্সে উচ্চ মাত্রায় ভিটামিন সি জমা থাকে যা স্টেরয়েড তৈরির এনজাইমগুলোকে জারণের হাত থেকে রক্ষা করে।'
      ),
      clinicalSignificance: l(
        'Adrenocorticotropic hormone (ACTH) acutely stimulates glucose uptake and G6PD flux in the zona fasciculata to match NADPH supply to steroidogenic demand.',
        'ACTH হরমোন অ্যাড্রিনাল কর্টেক্সে গ্লুকোজ প্রবেশ এবং G6PD-এর গতি বাড়িয়ে কর্টিসল হরমোন উৎপাদনের ভারসাম্য রক্ষা করে।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-phagocytes-ppp',
      name: l('Neutrophils & Macrophages (NADPH Oxidase Respiratory Burst)', 'নিউট্রোফিল ও ম্যাক্রোফেজ (রেস্পিরেটরি বার্স্ট জীবাণুনাশক ইঞ্জিন)'),
      latinName: 'Phagocyti',
      system: l('Innate Immune System', 'সহজাত রোগপ্রতিরোধ তন্ত্র'),
      cavity: l('Vascular & Lymphoid Compartments', 'রক্ত ও লসিকা প্রকোষ্ঠ'),
      position3D: { x: 0, y: 160, z: 10 },
      color: '#06b6d4',
      highlightColor: '#22d3ee',
      shapeType: 'skeleton',
      description: l(
        'Upon phagocytosis, immune cells assemble the multimeric NADPH Oxidase (NOX2) complex on phagolysosomal membranes, utilizing NADPH to reduce molecular oxygen into superoxide: NADPH + 2O2 -> NADP+ + 2O2*- + H+.',
        'জীবাণু ধ্বংসের সময় ফ্যাগোসাইট কোষগুলো ঝিল্লিতে NADPH Oxidase (NOX2) এনজাইম তৈরি করে, যা এনএডিপিএইচ ব্যবহার করে সুপারঅক্সাইড গ্যাস তৈরি করে ব্যাক্টেরিয়া ধ্বংস করে।'
      ),
      spatialRelations: l(
        'Patrols systemic bloodstream, migrating rapidly into infected tissues across postcapillary venules under chemokine guidance.',
        'সারা শরীরে টহল দেয় এবং ইনফেকশনের স্থানে দ্রুত গিয়ে জীবাণুর বিরুদ্ধে রাসায়নিক যুদ্ধ চালায়।'
      ),
      physiology: l(
        'The respiratory burst increases glucose consumption through the PPP by over 50-fold within minutes of bacterial encounter.',
        'ব্যাক্টেরিয়ার সংস্পর্শে আসার কয়েক মিনিটের মধ্যে ফ্যাগোসাইট কোষের পেন্টোজ ফসফেট পথ ৫০ গুণেরও বেশি গতিশীল হয়ে ওঠে।'
      ),
      nutritionConnection: l(
        'Superoxide dismutase converts superoxide to hydrogen peroxide, which myeloperoxidase (MPO, containing heme iron) converts to bactericidal hypochlorous acid (bleach).',
        'সুপারঅক্সাইড থেকে হাইড্রোজেন পারঅক্সাইড এবং পরবর্তীতে মায়েলোপারঅক্সিডেজ এনজাইমের মাধ্যমে শক্তিশালী জীবাণুনাশক হাইপোক্লোরাস অ্যাসিড তৈরি হয়।'
      ),
      clinicalSignificance: l(
        'Mutations in NOX2 subunits cause Chronic Granulomatous Disease (CGD), characterized by recurrent, severe catalase-positive bacterial and fungal infections.',
        'NOX2 এনজাইমের ত্রুটির কারণে ক্রনিক গ্র্যানুলোমেটাস ডিজিজ (CGD) হয়, যাতে রোগীরা বারবার মারাত্মক ব্যাক্টেরিয়া ও ছত্রাক ইনফেকশনে আক্রান্ত হয়।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism21PentosePhosphateLesson: LessonTopic = {
  id: 'topic.metabolism.pentose-phosphate-pathway',
  slug: 'pentose-phosphate-pathway',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '21 · Pentose Phosphate Pathway & NADPH Generation',
    '২১ · পেন্টোজ ফসফেট পথ ও এনএডিপিএইচ উৎপাদন'
  ),
  summary: l(
    'The molecular architecture of the Hexose Monophosphate Shunt: oxidative irreversible phase (G6PD, 6-phosphogluconolactonase, 6-PGDH generating 2 NADPH and ribulose-5-P), non-oxidative reversible carbon shuffling (transketolase and transaldolase), the 4 operational metabolic modes, erythrocyte glutathione antioxidant shield, G6PD deficiency genetics, and alternative cytosolic NADPH generators (Malic Enzyme, IDH1).',
    'হেক্সোজ মনোফসফেট শান্টের আণবিক গতিবিদ্যা: অক্সিডেটিভ অপ্রত্যাবর্তনীয় পর্যায় (G6PD, ৬-ফসফোগ্লুকোনোল্যাক্টোনেজ, ৬-PGDH দ্বারা ২টি NADPH ও রিবুলোজ-৫-P উৎপাদন), নন-অক্সিডেটিভ বিপরীতমুখী কার্বন পুনর্গঠন (ট্রান্সকিটোলেজ ও ট্রান্সঅ্যালডোলেজ), ৪টি বিপাকীয় মোড, লোহিত রক্তকণিকার গ্লুটাথিয়ন সুরক্ষা, G6PD ঘাটতির বংশগতি এবং বিকল্প সাইটোসোলিক NADPH উৎস (ম্যালিক এনজাইম, IDH1)।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Detail the enzymatic sequence, stoichiometry, and redox regulation of the oxidative irreversible phase of the Pentose Phosphate Pathway, identifying glucose-6-phosphate dehydrogenase (G6PD) as the rate-limiting committed step governed by the [NADP+]/[NADPH] ratio.',
      'পেন্টোজ ফসফেট পথের অক্সিডেটিভ পর্যায়ের এনজাইম ধারা, স্টোইকিওমেট্রি এবং রেডক্স নিয়ন্ত্রণ ব্যাখ্যা করতে পারা এবং [NADP+]/[NADPH] অনুপাত দ্বারা নিয়ন্ত্রিত G6PD এনজাইমের রেট-লিমিটিং ভূমিকা বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Trace the non-oxidative reversible phase reactions catalyzed by transketolase (thiamine pyrophosphate-dependent) and transaldolase, explaining how cells transition between the 4 metabolic modes to balance fluctuating requirements for NADPH, ribose-5-phosphate, and ATP.',
      'ট্রান্সকিটোলেজ (থায়ামিন-নির্ভর) এবং ট্রান্সঅ্যালডোলেজ এনজাইমের বিপরীতমুখী বিক্রিয়াগুলো ট্রেস করা এবং ব্যাখ্যা করতে পারা কীভাবে কোষ NADPH, রাইবোজ-৫-ফসফেট এবং এটিপির পরিবর্তিত চাহিদা মেটাতে ৪টি বিপাকীয় মোডের মধ্যে রূপান্তর ঘটায়।'
    ),
    l(
      'Evaluate the molecular pathophysiology and clinical genetics of Glucose-6-Phosphate Dehydrogenase (G6PD) deficiency, detailing the mechanism of oxidant-induced acute hemolytic anemia, Heinz body formation, bite cells, and the evolutionary trade-off granting protection against severe falciparum malaria.',
      'G6PD ঘাটতির আণবিক প্যাথোফিজিওলজি এবং ক্লিনিক্যাল জেনেটিক্স মূল্যায়ন করা, যার মধ্যে রয়েছে জারণ-উদ্দীপ্ত হিমোলাইটিক অ্যানিমিয়া, হাইঞ্জ বডি ও বাইট সেলের সৃষ্টি এবং ফ্যালসিপেরাম ম্যালেরিয়ার বিরুদ্ধে প্রাকৃতিক সুরক্ষার বিবর্তনীয় তাৎপর্য।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  references: pppRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch14', 'harpers-biochem-32e-ch20'],
    structure: ['harpers-biochem-32e-ch20', 'cappellini-g6pd-2008'],
    mechanism: ['lehninger-biochem-8e-ch14', 'marks-medbiochem-6e-ch29'],
    integration: ['cappellini-g6pd-2008', 'luzzatto-g6pd-malaria-2020'],
    practice: ['cappellini-g6pd-2008', 'marks-medbiochem-6e-ch29'],
    takeaways: ['lehninger-biochem-8e-ch14', 'luzzatto-g6pd-malaria-2020'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Architecture of the Hexose Monophosphate Shunt', '১. হেক্সোজ মনোফসফেট শান্টের স্থাপত্য'), sectionId: 'introduction' },
      { id: 'sec-oxidative', label: l('2. The Oxidative Irreversible Phase: NADPH Generation', '২. অক্সিডেটিভ অপ্রত্যাবর্তনীয় পর্যায়: NADPH উৎপাদন'), sectionId: 'structure' },
      { id: 'sec-nonoxidative', label: l('3. The Non-Oxidative Carbon Shuffling Engine & 4 Flux Modes', '৩. নন-অক্সিডেটিভ কার্বন পুনর্গঠন ও ৪টি বিপাকীয় মোড'), sectionId: 'mechanism' },
      { id: 'sec-rbc-g6pd', label: l('4. Erythrocyte Redox Homeostasis & G6PD Deficiency Genetics', '৪. লোহিত রক্তকণিকার রেডক্স ভারসাম্য ও G6PD ঘাটতির বংশগতি'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Stoichiometric Carbon Balance & Transketolase Thiamine Diagnostics', '৫. স্টোইকিওমেট্রিক কার্বন সমীকরণ ও থায়ামিন নির্ণয়'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Clinical High-Yield Review & Alternative NADPH Sources', '৬. ক্লিনিক্যাল উচ্চ-গুরুত্বপূর্ণ সারাংশ ও বিকল্প NADPH উৎস'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Glucose-6-Phosphate Dehydrogenase (G6PD)', 'গ্লুকোজ-৬-ফসফেট ডিহাইড্রোজিনেজ (G6PD)'),
        definition: l(
          'The rate-limiting committed enzyme of the Pentose Phosphate Pathway, oxidizing glucose-6-phosphate to 6-phosphoglucono-delta-lactone while reducing NADP+ to NADPH; allosterically inhibited by a low [NADP+]/[NADPH] ratio.',
          'পেন্টোজ ফসফেট পথের মূল গতি-নিয়ন্ত্রক এনজাইম, যা গ্লুকোজ-৬-ফসফেটকে জারিত করে এবং NADP+ কে NADPH এ পরিণত করে; কোষে NADPH এর পরিমাণ বেশি থাকলে এটি বাধাপ্রাপ্ত হয়।'
        ),
      },
      {
        term: l('Transketolase', 'ট্রান্সকিটোলেজ'),
        definition: l(
          'A thiamine pyrophosphate (TPP)-dependent enzyme of the non-oxidative PPP that reversibly transfers a two-carbon ketol group from a ketose donor to an aldose acceptor; measured clinically in erythrocytes to assess systemic thiamine deficiency.',
          'নন-অক্সিডেটিভ পর্যায়ের থায়ামিন-নির্ভর (TPP) এনজাইম যা একটি কিটোজ থেকে অ্যালডোজে ২-কার্বন স্থানান্তর করে; থায়ামিন বা ভিটামিন বি১ ঘাটতি নির্ণয়ে এটি ব্যবহৃত হয়।'
        ),
      },
      {
        term: l('Heinz Bodies', 'হাইঞ্জ বডি (Heinz Bodies)'),
        definition: l(
          'Insoluble intra-erythrocytic precipitates of denatured, cross-linked hemoglobin formed under severe oxidative stress when NADPH and reduced glutathione (GSH) are depleted; removed by splenic macrophages creating characteristic "bite cells".',
          'লোহিত রক্তকণিকায় জমে থাকা অপদ্রব্য বা বিকৃত হিমোগ্লোবিনের দলা যা মারাত্মক জারণ চাপে তৈরি হয়; প্লীহার ম্যাক্রোফেজ এদের কামড়ে বের করে "বাইট সেল" তৈরি করে।'
        ),
      },
      {
        term: l('Malic Enzyme (ME1)', 'ম্যালিক এনজাইম (ME1)'),
        definition: l(
          'A cytosolic enzyme that oxidatively decarboxylates malate to pyruvate, generating cytosolic NADPH and CO2; provides an important alternative source of NADPH for de novo lipogenesis in liver and adipose tissue.',
          'সাইটোসোলের একটি এনজাইম যা ম্যালেটকে পাইরুভেটে রূপান্তরিত করে এবং NADPH তৈরি করে; এটি যকৃৎ ও চর্বিকলায় চর্বি তৈরির বিকল্প উৎস হিসেবে কাজ করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Overall Stoichiometry in Mode 3 (Maximum NADPH Production)', 'মোড ৩-এ সামগ্রিক স্টোইকিওমেট্রি ও সর্বোচ্চ NADPH উৎপাদন হিসাব'),
        steps: [
          l(
            'Mode 3 operates when cellular demand for NADPH greatly exceeds the demand for ribose-5-phosphate (e.g., active fatty acid synthesis in liver or lactating mammary gland).',
            'মোড ৩ তখন পরিচালিত হয় যখন কোষে রাইবোজ-৫-ফসফেটের তুলনায় NADPH-এর চাহিদা অনেক বেশি থাকে (যেমন যকৃতে চর্বি সংশ্লেষণ)।'
          ),
          l(
            'Six molecules of glucose-6-phosphate enter the oxidative phase: 6 G6P + 12 NADP+ + 6 H2O -> 6 Ribulose-5-P + 12 NADPH + 12 H+ + 6 CO2.',
            'ছয়টি গ্লুকোজ-৬-ফসফেট অক্সিডেটিভ ধাপে প্রবেশ করে: ৬ G6P + ১২ NADP+ -> ৬ রিবুলোজ-৫-P + ১২ NADPH + ৬ CO2।'
          ),
          l(
            'The six pentose phosphates are processed through the non-oxidative reversible phase (isomerase, epimerase, transketolase, transaldolase) to regenerate five hexose phosphates (4 F6P + 2 GA-3-P, which convert to 5 G6P via gluconeogenesis): 6 Ribulose-5-P -> 5 Glucose-6-P + Pi.',
            'উৎপন্ন ছয়টি পেন্টোজ নন-অক্সিডেটিভ বিক্রিয়া এবং গ্লুকোনিওজেনেসিসের মাধ্যমে পুনরায় পাঁচটি হেক্সোজে রূপান্তরিত হয়: ৬ রিবুলোজ-৫-P -> ৫ গ্লুকোজ-৬-P + Pi।'
          ),
          l(
            'Subtracting 5 G6P from both sides yields the net reaction: 1 Glucose-6-Phosphate + 12 NADP+ + 7 H2O -> 6 CO2 + 12 NADPH + 12 H+ + Pi.',
            'উভয় পাশ থেকে ৫টি G6P বিয়োগ করলে নিট সমীকরণ দাঁড়ায়: ১ G6P + ১২ NADP+ -> ৬ CO2 + ১২ NADPH + Pi।'
          ),
        ],
        conclusion: l(
          'Through complete cyclic oxidation via the PPP and gluconeogenic recycling, the cell oxidizes one complete six-carbon glucose molecule entirely to six molecules of CO2, yielding a massive 12 molecules of NADPH without generating any ATP.',
          'এই চক্রাকার প্রক্রিয়ায় একটি ছয়-কার্বন গ্লুকোজ সম্পূর্ণ জারিত হয়ে ৬টি CO2 তৈরি করে এবং এটিপি ছাড়াই বিপুল পরিমাণ ১২টি NADPH অণু উৎপন্ন করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why are heterozygous female carriers of G6PD deficiency clinically resistant to severe malaria while displaying variable red cell sensitivity to primaquine?',
          'G6PD ঘাটতির হেটারোজাইগাস নারী বাহকরা কেন ম্যালেরিয়া প্রতিরোধী হন কিন্তু প্রিমাকুইন খেলে তাদের রক্তকণিকা বিভিন্ন মাত্রায় সংবেদনশীল হয়?'
        ),
        answer: l(
          'Due to random X-chromosome inactivation (lyonization) during embryonic development, heterozygous females possess two distinct circulating erythrocyte populations: roughly 50% normal G6PD cells and 50% G6PD-deficient cells. Plasmodium falciparum parasites entering the G6PD-deficient red cells suffer oxidative arrest, preventing high parasitemia; however, the deficient red cell fraction remains vulnerable to drug-induced oxidative lysis.',
          'ভ্রূণ বিকাশের সময় দৈব এক্স-ক্রোমোজোম নিষ্ক্রিয়করণের (লায়োনাইজেশন) কারণে নারীদের রক্তে প্রায় ৫০% স্বাভাবিক এবং ৫০% ত্রুটিযুক্ত লোহিত রক্তকণিকা থাকে। ম্যালেরিয়ার জীবাণু ত্রুটিযুক্ত কোষে ঢুকলে জারণ চাপে ধ্বংস হয়ে যায়; ফলে ম্যালেরিয়া হতে পারে না, কিন্তু প্রিমাকুইন জাতীয় ওষুধ দিলে এই ত্রুটিপূর্ণ অংশটি ভেঙে রক্তশূন্যতা সৃষ্টি হতে পারে।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: ppp3DData,
  interactiveDiagram: {
    id: 'pentose-phosphate-interactive-hub',
    title: l('Interactive Hexose Monophosphate Shunt & NADPH Defense Engine', 'ইন্টারেক্টিভ হেক্সোজ মনোফসফেট শান্ট ও NADPH প্রতিরক্ষা ইঞ্জিন'),
    disclaimer: l(
      'Redox and carbohydrate flux simulation: select pathway nodes to observe enzymatic transformations, stoichiometric carbon shuffling, and glutathione antioxidant coupling in real time.',
      'রেডক্স ও শর্করা প্রবাহ সিমুলেশন: বিভিন্ন নোড নির্বাচন করে এনজাইমের রূপান্তর, কার্বন পুনর্বিন্যাস এবং গ্লুটাথিয়ন অ্যান্টিঅক্সিডেন্ট ব্যবস্থার সমন্বয় পর্যবেক্ষণ করুন।'
    ),
    description: l(
      'The Pentose Phosphate Pathway diverts glucose-6-phosphate to generate reducing power (NADPH) and five-carbon sugars (ribose-5-phosphate). This interactive engine models the irreversible oxidative dehydrogenase reactions, reversible transketolase/transaldolase shuffling, and erythrocyte defense against oxidative hemolysis.',
      'পেন্টোজ ফসফেট পথ গ্লুকোজ-৬-ফসফেটকে সরিয়ে বিজারণ শক্তি (NADPH) এবং পাঁচ-কার্বন শর্করা (রাইবোজ-৫-ফসফেট) তৈরি করে। এই ইন্টারঅ্যাকটিভ ইঞ্জিন অক্সিডেটিভ ধাপ, কার্বন পুনর্বিন্যাস এবং রক্তকণিকার সুরক্ষা ব্যবস্থা প্রদর্শন করে।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-g6pd-gateway',
        label: l('1. Glucose-6-Phosphate Dehydrogenase (G6PD) Gateway', '১. গ্লুকোজ-৬-ফসফেট ডিহাইড্রোজিনেজ (G6PD) গেটওয়ে'),
        description: l(
          'First committed rate-limiting step: G6P + NADP+ -> 6-Phosphoglucono-delta-lactone + NADPH + H+. Severely feedback-inhibited by NADPH (Ki ~ 10 uM).',
          'প্রথম ও মূল গতি-নিয়ন্ত্রক ধাপ: G6P + NADP+ -> ৬-ফসফোগ্লুকোনোল্যাক্টোন + NADPH + H+। এটি NADPH দ্বারা তীব্রভাবে বাধাপ্রাপ্ত হয়।'
        ),
        details: l(
          'In resting cells, [NADPH]/[NADP+] ratio is >100, keeping G6PD activity suppressed to ~1–2% of Vmax. Oxidative challenge converts NADPH to NADP+, immediately derepressing G6PD up to 50-fold.',
          'স্বাভাবিক অবস্থায় NADPH বেশি থাকায় এনজাইমটি নিষ্ক্রিয় থাকে। কিন্তু জারণ চাপ দেখা দিলে NADPH কমে NADP+ বাড়ে, ফলে এনজাইমটি মুহূর্তেই ৫০ গুণ সক্রিয় হয়ে ওঠে।'
        ),
        sectionId: 'structure',
        color: '#d97706',
      },
      {
        id: 'node-6pgdh-step',
        label: l('2. 6-Phosphogluconate Dehydrogenase (Second NADPH Yield)', '২. ৬-ফসফোগ্লুকোনেট ডিহাইড্রোজিনেজ (দ্বিতীয় NADPH ফলন)'),
        description: l(
          'Oxidative decarboxylation: 6-Phosphogluconate + NADP+ -> Ribulose-5-Phosphate + NADPH + CO2. Completes the oxidative phase.',
          'অক্সিডেটিভ ডিকার্বক্সিলেশন: ৬-ফসফোগ্লুকোনেট + NADP+ -> রিবুলোজ-৫-ফসফেট + NADPH + CO2। এর মাধ্যমে অক্সিডেটিভ ধাপ সমাপ্ত হয়।'
        ),
        details: l(
          'Yields the second mole of NADPH per glucose entered and releases carbon dioxide. The product ribulose-5-phosphate is the branch point substrate for non-oxidative enzymes.',
          'প্রতিটি গ্লুকোজের জন্য দ্বিতীয় NADPH অণু তৈরি করে এবং ১টি কার্বন ডাই-অক্সাইড মুক্ত করে। উৎপন্ন রিবুলোজ-৫-ফসফেট পরবর্তী ধাপের কাঁচামাল হিসেবে কাজ করে।'
        ),
        sectionId: 'structure',
        color: '#ea580c',
      },
      {
        id: 'node-rpi-prpp',
        label: l('3. Ribose-5-Phosphate Isomerase & PRPP Synthesis', '৩. রাইবোজ-৫-ফসফেট আইসোমারেজ ও PRPP সংশ্লেষ'),
        description: l(
          'Interconverts ketopentose ribulose-5-P to aldopentose ribose-5-P. Ribose-5-P is reacted with ATP by PRPP synthetase to create PRPP for purine, pyrimidine, and histidine synthesis.',
          'কিটোপেন্টোজ রিবুলোজ-৫-P কে অ্যালডোপেন্টোজ রাইবোজ-৫-P তে রূপান্তর করে। এটি পিউরিন, পিরিমিডিন ও নিউক্লিওটাইড তৈরির প্রধান কাঁচামাল PRPP গঠন করে।'
        ),
        details: l(
          'Critical for proliferating tissue (bone marrow, gut mucosa, tumors). When ribose demand exceeds NADPH demand (Mode 1), this reaction runs in reverse from glycolytic intermediates.',
          'বিভাজনরত কোষের (অস্থিমজ্জা, টিউমার) জন্য অত্যন্ত গুরুত্বপূর্ণ। যখন কোষে রাইবোজের চাহিদা বেশি থাকে তখন এটি উল্টো পথে গ্লাইকোলাইসিসের উপাদান থেকে তৈরি হয়।'
        ),
        sectionId: 'mechanism',
        color: '#2563eb',
      },
      {
        id: 'node-transketolase-shuffling',
        label: l('4. Transketolase & Transaldolase Reversible Shuffling', '৪. ট্রান্সকিটোলেজ ও ট্রান্সঅ্যালডোলেজ কার্বন পুনর্বিন্যাস'),
        description: l(
          'Reversible interconversion of 3 pentoses (5C + 5C + 5C = 15C) into 2 hexoses and 1 triose (6C + 6C + 3C = 15C). Transketolase transfers 2C units (TPP-dependent); Transaldolase transfers 3C units.',
          'তিনটি পেন্টোজের ১৫টি কার্বনকে (৫+৫+৫) ভেঙে দুটি হেক্সোজ ও একটি ট্রায়োজে (৬+৬+৩) রূপান্তর করে। ট্রান্সকিটোলেজ ২-কার্বন এবং ট্রান্সঅ্যালডোলেজ ৩-কার্বন স্থানান্তর করে।'
        ),
        details: l(
          'Transketolase requires thiamine pyrophosphate (TPP). Reaction 1: Xylulose-5-P (5C) + Ribose-5-P (5C) <-> Sedoheptulose-7-P (7C) + GA-3-P (3C). Reaction 2: Transaldolase forms F6P (6C) + Erythrose-4-P (4C).',
          'ট্রান্সকিটোলেজের জন্য থায়ামিন বা ভিটামিন বি১ অপরিহার্য। এটি খাদ্য থেকে আসা অতিরিক্ত পেন্টোজকে সহজেই গ্লাইকোলাইসিসে ফেরত পাঠাতে সাহায্য করে।'
        ),
        sectionId: 'mechanism',
        color: '#059669',
      },
      {
        id: 'node-mode3-max-nadph',
        label: l('5. Mode 3: Maximum Reductive NADPH Generation', '৫. মোড ৩: সর্বোচ্চ বিজারণক্ষম NADPH উৎপাদন'),
        description: l(
          'When NADPH demand far exceeds ribose demand (fatty acid lipogenesis in liver), the non-oxidative phase funnels GA-3-P and F6P into gluconeogenesis to regenerate G6P for repeated shunting.',
          'যখন চর্বি তৈরির জন্য কেবল NADPH প্রয়োজন হয়, তখন নন-অক্সিডেটিভ ধাপের উপাদানগুলো গ্লুকোনিওজেনেসিসের মাধ্যমে আবার G6P হয়ে চক্রাকারে ঘুরতে থাকে।'
        ),
        details: l(
          'Complete oxidation of 1 Glucose-6-Phosphate yields 12 NADPH and 6 CO2 without requiring the Krebs cycle or generating ATP. Primary operational mode in hepatic de novo lipogenesis.',
          'একটি গ্লুকোজ-৬-ফসফেট সম্পূর্ণ জারিত হয়ে কোনো এটিপি উৎপাদন ছাড়াই ১২টি NADPH এবং ৬টি CO2 তৈরি করে। যকৃতে চর্বি সংশ্লেষণের সময় এটি প্রধান মোড হিসেবে কাজ করে।'
        ),
        sectionId: 'mechanism',
        color: '#7c3aed',
      },
      {
        id: 'node-rbc-glutathione-shield',
        label: l('6. Glutathione Reductase Coupling & Erythrocyte Shield', '৬. গ্লুটাথিয়ন রিডাক্টেজ সংযোগ ও রক্তকণিকার সুরক্ষা ঢাল'),
        description: l(
          'NADPH transfers hydrides to glutathione reductase (GR, FAD-dependent), reducing oxidized glutathione disulfide (GSSG) back to 2 GSH: GSSG + NADPH + H+ -> 2 GSH + NADP+.',
          'NADPH গ্লুটাথিয়ন রিডাক্টেজ এনজাইমকে ইলেকট্রন দিয়ে জারিত গ্লুটাথিয়নকে (GSSG) পুনরায় বিজারিত গ্লুটাথিয়নে (GSH) রূপান্তর করে: GSSG + NADPH -> ২ GSH + NADP+।'
        ),
        details: l(
          'GSH is the essential co-substrate for glutathione peroxidase (GPx), which detoxifies hydrogen peroxide (H2O2 + 2 GSH -> GSSG + 2 H2O) and lipid hydroperoxides, preserving membrane integrity.',
          'GSH গ্লুটাথিয়ন পারঅক্সিডেজ এনজাইমের সাথে মিলে হাইড্রোজেন পারঅক্সাইড ও বিষাক্ত র্যাডিক্যাল নিষ্ক্রিয় করে লোহিত রক্তকণিকার ঝিল্লিকে অক্ষত রাখে।'
        ),
        sectionId: 'integration',
        color: '#0891b2',
      },
      {
        id: 'node-g6pd-deficiency-hemolysis',
        label: l('7. G6PD Deficiency: Heinz Bodies & Favism Hemolysis', '৭. G6PD ঘাটতি: হাইঞ্জ বডি ও ফ্যাভিজম রক্তশূন্যতা'),
        description: l(
          'Genetic mutations destabilize G6PD, causing rapid enzyme decay as red cells age. Oxidative drugs (primaquine, dapsone) or fava beans trigger massive GSH depletion, cross-linking hemoglobin into Heinz bodies.',
          'জিনের ত্রুটির কারণে লোহিত রক্তকণিকা বুড়িয়ে গেলে G6PD দ্রুত নষ্ট হয়ে যায়। অ্যান্টিম্যালেরিয়াল ওষুধ বা ফাফা শিম খেলে GSH শেষ হয়ে হিমোগ্লোবিন জমে হাইঞ্জ বডি তৈরি হয়।'
        ),
        details: l(
          'Splenic macrophages bite out Heinz bodies, producing "bite cells" and "blister cells". Rigid spherocytic remnants undergo intravascular and extravascular hemolysis, producing jaundice and dark urine.',
          'প্লীহার ম্যাক্রোফেজ এই অপদ্রব্যগুলো খুবলে বের করে "বাইট সেল" তৈরি করে; যার ফলে রক্তকণিকা ভেঙে তীব্র জন্ডিস, রক্তশূন্যতা এবং কালো রঙের প্রস্রাব দেখা দেয়।'
        ),
        sectionId: 'integration',
        color: '#dc2626',
      },
      {
        id: 'node-alternative-nadph-engines',
        label: l('8. Alternative NADPH Engines: Malic Enzyme & Cytosolic IDH1', '৮. বিকল্প NADPH ইঞ্জিন: ম্যালিক এনজাইম ও সাইটোসোলিক IDH1'),
        description: l(
          'Tissues with mitochondria generate supplemental NADPH through Malic Enzyme 1 (ME1: Malate + NADP+ -> Pyruvate + NADPH + CO2) and Cytosolic Isocitrate Dehydrogenase (IDH1).',
          'মাইটোকন্ড্রিয়াযুক্ত অঙ্গগুলোতে ম্যালিক এনজাইম (ME1) এবং সাইটোসোলিক আইসোসাইট্রেট ডিহাইড্রোজিনেজ (IDH1) এর মাধ্যমে বিকল্প NADPH তৈরি হয়।'
        ),
        details: l(
          'ME1 functions in the citrate-malate shuttle during lipogenesis, providing ~50% of the NADPH required for fatty acid synthesis in non-ruminants. IDH1 mutation produces the oncometabolite D-2-hydroxyglutarate.',
          'ME1 সাইট্রেট শাটলের মাধ্যমে চর্বি তৈরির প্রায় অর্ধেক NADPH সরবরাহ করে। IDH1-এর মিউটেশন ক্যান্সারে ক্ষতিকর অনকোমেটাবোলাইট D-2-hydroxyglutarate তৈরি করে।'
        ),
        sectionId: 'practice',
        color: '#db2777',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'Two-phase pathway diagram showing the oxidative irreversible generation of NADPH from G6P, non-oxidative reversible carbon shuffling via transketolase/transaldolase, and glutathione antioxidant coupling.',
      'পেন্টোজ ফসফেট পথের দুই-পর্যায়ের রেখাচিত্র যা G6P থেকে NADPH এর অক্সিডেটিভ উৎপাদন, ট্রান্সকিটোলেজ দ্বারা কার্বন পুনর্বিন্যাস এবং গ্লুটাথিয়ন অ্যান্টিঅক্সিডেন্ট ব্যবস্থার সংযোগ প্রদর্শন করে।'
    ),
    steps: [
      l(
        'Step 1: G6PD oxidizes glucose-6-phosphate to yield NADPH; 6-phosphogluconate dehydrogenase releases CO2 to produce a second NADPH and ribulose-5-phosphate.',
        'ধাপ ১: G6PD গ্লুকোজ-৬-ফসফেটকে জারিত করে NADPH তৈরি করে; পরবর্তী ধাপে CO2 বের হয়ে দ্বিতীয় NADPH এবং রিবুলোজ-৫-ফসফেট উৎপন্ন হয়।'
      ),
      l(
        'Step 2: Non-oxidative enzymes (transketolase and transaldolase) reversibly interconvert pentose phosphates with glycolytic intermediates F6P and GA-3-P.',
        'ধাপ ২: নন-অক্সিডেটিভ এনজাইমগুলো (ট্রান্সকিটোলেজ ও ট্রান্সঅ্যালডোলেজ) পেন্টোজ ফসফেটকে গ্লাইকোলাইসিসের উপাদানের সাথে পরিবর্তন করে।'
      ),
      l(
        'Step 3: Erythrocytes couple NADPH to glutathione reductase to neutralize peroxides; G6PD deficiency triggers hemoglobin precipitation into Heinz bodies and acute hemolytic anemia.',
        'ধাপ ৩: লোহিত রক্তকণিকা পারঅক্সাইড নিষ্ক্রিয় করতে NADPH ব্যবহার করে; G6PD ঘাটতিতে হিমোগ্লোবিন জমাট বেঁধে হাইঞ্জ বডি তৈরি হয় এবং রক্তকণিকা ভেঙে যায়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 24-year-old military recruit of Mediterranean descent is prescribed primaquine for malaria prophylaxis. Four days later, he develops scleral icterus, dark tea-colored urine, back pain, and severe fatigue. Laboratory evaluation shows hemoglobin 7.2 g/dL (baseline 14.5 g/dL), elevated indirect bilirubin, undetectable haptoglobin, and Heinz bodies on crystal violet supravital staining. What is the fundamental molecular cause of his acute hemolytic crisis?',
      'ভূমধ্যসাগরীয় বংশোদ্ভূত ২৪ বছর বয়সী এক সেনাসদস্য ম্যালেরিয়া প্রতিরোধের জন্য প্রিমাকুইন খাওয়া শুরু করলেন। চার দিন পর তার চোখ হলুদ হয়ে জন্ডিস, গাঢ় চায়ের রঙের প্রস্রাব, পিঠে তীব্র ব্যথা এবং দুর্বলতা দেখা দিল। রক্ত পরীক্ষায় হিমোগ্লোবিন ৭.২ g/dL-এ নেমে গেল, ইনডাইরেক্ট বিলিরুবিন বেড়ে গেল এবং রক্তকণিকায় হাইঞ্জ বডি দেখা গেল। এই তীব্র রক্তকণিকা ভাঙনের মূল আণবিক কারণ কী?'
    ),
    options: [
      l(
        'Failure of mitochondrial Complex I to regenerate NAD+, stalling the citric acid cycle.',
        'মাইটোকন্ড্রিয়াল কমপ্লেক্স I-এর ব্যর্থতার কারণে সাইট্রিক অ্যাসিড চক্র স্থবির হয়ে পড়া।'
      ),
      l(
        'G6PD deficiency causing inability to regenerate NADPH, leading to failure of glutathione reductase, depletion of reduced glutathione (GSH), and oxidative denaturation of hemoglobin.',
        'G6PD এনজাইমের ঘাটতির কারণে রক্তকণিকায় NADPH তৈরি না হওয়া, ফলে গ্লুটাথিয়ন রিডাক্টেজ ব্যর্থ হয়ে বিজারিত গ্লুটাথিয়ন (GSH) শেষ হয়ে যাওয়া এবং জারণ চাপে হিমোগ্লোবিন নষ্ট হয়ে যাওয়া।'
      ),
      l(
        'Deficiency of erythrocyte pyruvate kinase preventing substrate-level phosphorylation and causing ATP depletion.',
        'লোহিত রক্তকণিকার পাইরুভেট কাইনেজের ঘাটতির কারণে এটিপি তৈরি না হওয়া।'
      ),
      l(
        'Autoimmune destruction of erythrocyte membranes by IgG warm agglutinins cross-reacting with primaquine.',
        'অটোইমিউন অ্যান্টিবডি দ্বারা প্রিমাকুইনের বিরুদ্ধে লোহিত রক্তকণিকা ধ্বংস হওয়া।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'The patient has classic drug-induced acute hemolytic anemia secondary to G6PD deficiency (Mediterranean variant). Primaquine generates intracellular reactive oxygen species (ROS). Erythrocytes lack mitochondria and depend exclusively on G6PD for NADPH. Without NADPH, glutathione reductase cannot regenerate reduced glutathione (GSH). Hydrogen peroxide and ROS oxidize hemoglobin sulfhydryl groups, cross-linking hemoglobin into insoluble Heinz bodies. Splenic macrophages remove these inclusions (forming bite cells), and rigid erythrocytes undergo intravascular and extravascular hemolysis.',
      'রোগী G6PD ঘাটতিজনিত তীব্র ওষুধ-উদ্দীপ্ত হিমোলাইটিক অ্যানিমিয়ায় আক্রান্ত। প্রিমাকুইন কোষে প্রচুর ক্ষতিকর ফ্রি র্যাডিক্যাল তৈরি করে। লোহিত রক্তকণিকায় মাইটোকন্ড্রিয়া না থাকায় তারা NADPH-এর জন্য কেবল G6PD-এর ওপর নির্ভরশীল। NADPH না থাকলে গ্লুটাথিয়ন বিজারিত হতে পারে না; ফলে জারণ চাপে হিমোগ্লোবিন জমে হাইঞ্জ বডি তৈরি করে এবং প্লীহা দিয়ে যাওয়ার সময় রক্তকণিকাগুলো ভেঙে তীব্র রক্তাল্পতা ও জন্ডিস সৃষ্টি হয়।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation Level', 'ভিত্তি স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Dual Purpose of the Hexose Monophosphate Shunt', 'হেক্সোজ মনোফসফেট শান্টের দ্বিমুখী উদ্দেশ্য'),
          paragraphs: [
            l(
              'While glycolysis burns glucose to generate immediate ATP for cellular work, human cells frequently need something entirely different: reducing power to build complex molecules and specialized five-carbon sugars to build DNA and RNA. To solve this problem, cells divert a fraction of their glucose-6-phosphate into a parallel bypass known as the Pentose Phosphate Pathway (PPP), also called the Hexose Monophosphate (HMP) Shunt. This pathway operates entirely in the cytosol and generates zero ATP.',
              'গ্লাইকোলাইসিস যেখানে শক্তি বা এটিপি (ATP) তৈরির জন্য গ্লুকোজ পোড়ায়, জীবকোষের সেখানে প্রায়শই সম্পূর্ণ ভিন্ন কিছু প্রয়োজন হয়: নতুন অণু তৈরির জন্য বিজারণ শক্তি এবং ডিএনএ ও আরএনএ তৈরির জন্য পাঁচ-কার্বন শর্করা। এই সমস্যা সমাধানের জন্য কোষ গ্লুকোজ-৬-ফসফেটের একটি অংশকে একটি সমান্তরাল বাইপাস বা শান্টে পাঠিয়ে দেয় যাকে পেন্টোজ ফসফেট পথ (PPP) বা হেক্সোজ মনোফসফেট (HMP) শান্ট বলা হয়। এই পথটি সম্পূর্ণ সাইটোসোলে সম্পন্ন হয় এবং এতে সরাসরি কোনো এটিপি উৎপন্ন হয় না।'
            ),
            l(
              'Instead of generating ATP, the pentose phosphate pathway produces two indispensable biochemical treasures: NADPH, the cellular currency of reducing power required for fat synthesis and antioxidant defense; and ribose-5-phosphate, the five-carbon sugar backbone required to synthesize every nucleotide in human genetics.',
              'এটিপি তৈরির বদলে এই পথটি কোষের জন্য দুটি অত্যন্ত মূল্যবান উপাদান তৈরি করে: প্রথমটি হলো NADPH—যা চর্বি সংশ্লেষণ ও বিষাক্ত পদার্থ ধ্বংসের মূল বিজারণ শক্তি; এবং দ্বিতীয়টি হলো রাইবোজ-৫-ফসফেট—যা মানবদেহের জিনগত ডিএনএ ও আরএনএর নিউক্লিওটাইড তৈরির অবিচ্ছেদ্য পাঁচ-কার্বন কাঠামো।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Two Phases: Making Power and Shuffling Carbons', 'দুটি পর্যায়: শক্তি তৈরি ও কার্বন পুনর্বিন্যাস'),
          paragraphs: [
            l(
              'The Pentose Phosphate Pathway is organized into two distinct operational phases. The first phase is the oxidative, irreversible phase: here, three consecutive enzymes—led by Glucose-6-Phosphate Dehydrogenase (G6PD)—strip high-energy electrons from glucose-6-phosphate to produce two molecules of NADPH while releasing one molecule of carbon dioxide. This phase is irreversible and strictly regulated by the cellular demand for NADPH.',
              'পেন্টোজ ফসফেট পথ মূলত দুটি সুস্পষ্ট পর্যায়ে বিভক্ত। প্রথমটি হলো অক্সিডেটিভ অপ্রত্যাবর্তনীয় পর্যায়: এখানে G6PD এনজাইমের নেতৃত্বে গ্লুকোজ থেকে ইলেকট্রন বের করে দুটি NADPH তৈরি করা হয় এবং একটি কার্বন ডাই-অক্সাইড গ্যাস নির্গত হয়। এই ধাপটি একমুখী এবং কোষে NADPH-এর চাহিদার ওপর ভিত্তি করে অত্যন্ত কঠোরভাবে নিয়ন্ত্রিত হয়।'
            ),
            l(
              'The second phase is the non-oxidative, reversible phase: here, a battery of molecular carbon shufflers (transketolase and transaldolase) juggle five-carbon sugars, converting them into three-carbon and six-carbon sugars that can seamlessly flow right back into glycolysis or gluconeogenesis. This phase is completely reversible and operates according to mass action.',
              'দ্বিতীয়টি হলো নন-অক্সিডেটিভ বা বিপরীতমুখী পর্যায়: এখানে ট্রান্সকিটোলেজ ও ট্রান্সঅ্যালডোলেজ নামক এনজাইমগুলো পাঁচ-কার্বনের শর্করাগুলোকে পুনর্বিন্যাস করে তিন ও ছয়-কার্বনের শর্করায় রূপান্তর করে, যা প্রয়োজনে আবার গ্লাইকোলাইসিসে ফিরে যেতে পারে। এই ধাপটি সম্পূর্ণ দ্বিমুখী এবং কোষের প্রয়োজনের ওপর নির্ভর করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Erythrocyte Shield: How NADPH Protects Red Blood Cells', 'লোহিত রক্তকণিকার বর্ম: NADPH কীভাবে রক্তকণিকা বাঁচায়'),
          paragraphs: [
            l(
              'Mature human red blood cells are unique: they contain no nuclei, no endoplasmic reticulum, and no mitochondria. Because they lack mitochondria, red blood cells cannot perform the Krebs cycle or oxidative phosphorylation, making G6PD and the pentose phosphate pathway their single, solitary mechanism for generating NADPH. Without G6PD, red blood cells are completely defenseless against the oxygen they carry every day.',
              'পরিণত লোহিত রক্তকণিকা অন্যান্য কোষের চেয়ে সম্পূর্ণ আলাদা: এদের কোনো নিউক্লিয়াস বা মাইটোকন্ড্রিয়া থাকে না। মাইটোকন্ড্রিয়া না থাকার কারণে এরা সাইট্রিক অ্যাসিড চক্র চালাতে পারে না; ফলে G6PD এনজাইম এবং পেন্টোজ ফসফেট পথই তাদের শরীরে NADPH তৈরির একমাত্র অবলম্বন। G6PD না থাকলে রক্তকণিকা যে অক্সিজেন পরিবহন করে সেই অক্সিজেনের ক্ষতিকর জারণ ক্রিয়া থেকেই নিজেকে বাঁচাতে পারে না।'
            ),
            l(
              'Inside the red blood cell, NADPH acts as a fuel source for glutathione reductase, an enzyme that keeps an antioxidant molecule called glutathione in its active, reduced state (GSH). Reduced glutathione instantly neutralizes harmful hydrogen peroxide and free radicals. If NADPH runs out, free radicals cross-link hemoglobin into hard clumps called Heinz bodies, causing the fragile cell to burst as it squeezes through the spleen.',
              'রক্তকণিকার ভেতরে NADPH গ্লুটাথিয়ন নামক একটি প্রধান অ্যান্টিঅক্সিডেন্ট অণুকে সক্রিয় রাখে। এই সক্রিয় গ্লুটাথিয়ন কোষের ভেতরে তৈরি হওয়া বিষাক্ত হাইড্রোজেন পারঅক্সাইডকে তাৎক্ষণিকভাবে পানিতে পরিণত করে। NADPH ফুরিয়ে গেলে পারঅক্সাইড হিমোগ্লোবিনকে জমিয়ে হাইঞ্জ বডি নামক শক্ত পিণ্ড তৈরি করে, যার ফলে প্লীহার সরু পথে যাওয়ার সময় রক্তকণিকা ফেটে ধ্বংস হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('G6PD Deficiency: The World Most Common Genetic Enzyme Defect', 'G6PD ঘাটতি: বিশ্বের সর্বাধিক সাধারণ এনজাইম রোগ'),
          paragraphs: [
            l(
              'Glucose-6-phosphate dehydrogenase deficiency is an X-linked recessive genetic condition affecting over 500 million people worldwide, predominantly in Mediterranean, African, Middle Eastern, and Southeast Asian populations. Most individuals with G6PD deficiency are completely asymptomatic in daily life because baseline G6PD activity is sufficient for resting red cell survival.',
              'G6PD ঘাটতি হলো একটি বংশগত রোগ যা বিশ্বজুড়ে ৫০ কোটিরও বেশি মানুষের মধ্যে বিদ্যমান, বিশেষ করে ভূমধ্যসাগরীয়, আফ্রিকান ও এশীয় জনগোষ্ঠীর মধ্যে। আক্রান্ত অধিকাংশ মানুষ স্বাভাবিক অবস্থায় সম্পূর্ণ সুস্থ থাকেন কারণ দৈনন্দিন জীবনে সামান্য এনজাইমই তাদের রক্তকণিকা বাঁচিয়ে রাখার জন্য যথেষ্ট।'
            ),
            l(
              'However, when exposed to oxidative triggers—such as certain antimalarial medications (primaquine), sulfa antibiotics, severe bacterial infections, or eating fava beans (a condition called favism)—the red cells suffer massive oxidative shock. The cells undergo acute hemolytic crisis, causing jaundice, severe anemia, and dark tea-colored urine containing free hemoglobin.',
              'কিন্তু যখন তারা কোনো জারণ সৃষ্টিকারী উপাদান—যেমন ম্যালেরিয়ার ওষুধ প্রিমাকুইন, সালফা অ্যান্টিবায়োটিক, তীব্র ইনফেকশন বা ফাফা শিম (ফ্যাভিজম)—এর সংস্পর্শে আসে, তখন রক্তকণিকাগুলো মারাত্মক ক্ষতির মুখে পড়ে। লোহিত রক্তকণিকাগুলো হঠাৎ ভেঙে যায়, যার ফলে তীব্র জন্ডিস, রক্তশূন্যতা এবং গাঢ় রঙের প্রস্রাব দেখা দেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('The Malaria Evolutionary Connection', 'ম্যালেরিয়ার সাথে বিবর্তনীয় সম্পর্ক'),
          paragraphs: [
            l(
              'Why is a potentially dangerous genetic defect so common across tropical regions of the world? The answer lies in evolutionary selection pressure from falciparum malaria. The malaria parasite Plasmodium falciparum lives inside red blood cells and requires host nutrients and reduced glutathione to survive. In G6PD-deficient red cells, the parasite suffers oxidative arrest and the infected cells are cleared rapidly by the spleen, protecting the patient from fatal cerebral malaria.',
              'কেন এই বিপজ্জনক জিনগত ত্রুটিটি গ্রীষ্মমণ্ডলীয় অঞ্চলে এত বেশি মানুষের মধ্যে টিকে আছে? এর উত্তর হলো ম্যালেরিয়া জীবাণুর বিরুদ্ধে প্রাকৃতিক নির্বাচন। ম্যালেরিয়া পরজীবী লোহিত রক্তকণিকার ভেতর বেঁচে থাকার জন্য প্রচুর গ্লুটাথিয়ন ব্যবহার করে। G6PD ঘাটতিযুক্ত কোষে পরজীবীটি জারণ চাপে আটকে মারা যায় এবং প্লীহা এদের দ্রুত ধ্বংস করে ফেলে; ফলে আক্রান্ত ব্যক্তি মারাত্মক সেরিব্রাল ম্যালেরিয়া থেকে বেঁচে যায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary of the Pentose Phosphate Pathway', 'পেন্টোজ ফসফেট পথের সারসংক্ষেপ'),
          paragraphs: [
            l(
              'The Pentose Phosphate Pathway diverts glucose-6-phosphate to generate reducing power in the form of NADPH and five-carbon sugars in the form of ribose-5-phosphate. Red blood cells depend exclusively on G6PD to maintain glutathione defenses, and genetic deficiency in this enzyme leads to acute hemolytic anemia upon oxidative stress while conferring resistance against severe malaria.',
              'পেন্টোজ ফসফেট পথ গ্লুকোজ-৬-ফসফেটকে সরিয়ে বিজারণ শক্তি হিসেবে NADPH এবং ডিএনএ তৈরির জন্য রাইবোজ-৫-ফসফেট উৎপন্ন করে। লোহিত রক্তকণিকা বিষাক্ত পারঅক্সাইড থেকে বাঁচতে পুরোপুরি G6PD-এর ওপর নির্ভরশীল; এই এনজাইমের ঘাটতিতে ওষুধ বা ইনফেকশনের কারণে রক্তকণিকা ভেঙে রক্তশূন্যতা সৃষ্টি হয়, তবে এটি ম্যালেরিয়ার বিরুদ্ধে প্রাকৃতিক সুরক্ষা দেয়।'
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
          heading: l('The Chemical Reactions of the Oxidative Irreversible Phase', 'অক্সিডেটিভ অপ্রত্যাবর্তনীয় পর্যায়ের রাসায়নিক বিক্রিয়াসমূহ'),
          paragraphs: [
            l(
              'The oxidative phase of the Pentose Phosphate Pathway consists of three consecutive enzymatic reactions operating in the cytosol. The first and committed reaction is catalyzed by Glucose-6-Phosphate Dehydrogenase (G6PD): beta-D-glucose-6-phosphate + NADP+ <-> 6-phosphoglucono-delta-lactone + NADPH + H+. G6PD is an NADP+-specific oxidoreductase that transfers a hydride ion from the C1 carbon of glucose-6-phosphate to the nicotinamide ring of NADP+.',
              'পেন্টোজ ফসফেট পথের অক্সিডেটিভ পর্যায়টি সাইটোসোলে তিনটি ধারাবাহিক এনজাইম বিক্রিয়া দ্বারা সম্পন্ন হয়। প্রথম ও সুনির্দিষ্ট বিক্রিয়াটি ঘটায় গ্লুকোজ-৬-ফসফেট ডিহাইড্রোজিনেজ (G6PD): বিটা-D-গ্লুকোজ-৬-ফসফেট + NADP+ <-> ৬-ফসফোগ্লুকোনো-ডেল্টা-ল্যাকটোন + NADPH + H+। এটি একটি NADP+-নির্দিষ্ট এনজাইম যা C1 কার্বন থেকে হাইড্রাইড আয়ন সরিয়ে NADP+ কে বিজারিত করে।'
            ),
            l(
              'In the second step, 6-Phosphogluconolactonase hydrolyzes the unstable cyclic ester: 6-phosphoglucono-delta-lactone + H2O -> 6-phosphogluconate + H+. In the third step, 6-Phosphogluconate Dehydrogenase (6-PGDH) catalyzes an oxidative decarboxylation: 6-phosphogluconate + NADP+ -> D-ribulose-5-phosphate + NADPH + CO2. Thus, for each molecule of glucose-6-phosphate entering the oxidative phase, the net stoichiometric yield is 2 NADPH, 1 CO2, and 1 ribulose-5-phosphate.',
              'দ্বিতীয় ধাপে ৬-ফসফোগ্লুকোনোল্যাক্টোনেজ এনজাইম পানি যোগ করে ল্যাকটোন বলয় ভেঙে ৬-ফসফোগ্লুকোনেট তৈরি করে। তৃতীয় ধাপে ৬-ফসফোগ্লুকোনেট ডিহাইড্রোজিনেজ (6-PGDH) জারণ ও ডিকার্বক্সিলেশন সম্পন্ন করে: ৬-ফসফোগ্লুকোনেট + NADP+ -> D-রিবুলোজ-৫-ফসফেট + NADPH + CO2। ফলে অক্সিডেটিভ ধাপে প্রতিটি গ্লুকোজ-৬-ফসফেট থেকে নিট ফলন হয় ২টি NADPH, ১টি CO2 এবং ১টি রিবুলোজ-৫-ফসফেট।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Allosteric Regulation of G6PD by the Cellular Redox Charge', 'কোষীয় রেডক্স আধান দ্বারা G6PD-এর অ্যালবস্টেরিক নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Glucose-6-phosphate dehydrogenase is the sole rate-limiting control valve of the entire Pentose Phosphate Pathway. The enzyme is strictly regulated by the availability of its substrate NADP+ and subject to potent competitive feedback inhibition by its product NADPH. Under basal, unstressed conditions, the cytosolic concentration of NADPH (~300 uM) is vastly higher than that of NADP+ (~3 uM), maintaining an [NADPH]/[NADP+] ratio exceeding 100:1.',
              'গ্লুকোজ-৬-ফসফেট ডিহাইড্রোজিনেজ সম্পূর্ণ পেন্টোজ ফসফেট পথের একমাত্র মূল গতি-নিয়ন্ত্রক কপাটিকা। এনজাইমটি তার সাবস্ট্রেট NADP+ এর উপস্থিতি দ্বারা কঠোরভাবে নিয়ন্ত্রিত হয় এবং উৎপাদ NADPH দ্বারা প্রতিযোগিতামূলকভাবে বাধাপ্রাপ্ত হয়। স্বাভাবিক শান্ত অবস্থায় সাইটোসোলে NADPH-এর পরিমাণ NADP+-এর চেয়ে প্রায় ১০০ গুণ বেশি থাকে, যা এনজাইমটিকে নিষ্ক্রিয় রাখে।'
            ),
            l(
              'Because the Ki for NADPH is approximately 10 uM, G6PD is normally over 98% inhibited in resting human tissues. Whenever oxidative stress oxidizes NADPH to NADP+, or whenever anabolic reductive biosyntheses (such as fatty acid synthase) consume NADPH, the [NADP+] concentration rises sharply, relieving product inhibition and instantly accelerating flux through the oxidative shunt.',
              'যেহেতু NADPH-এর জন্য Ki মাত্র ১০ মাইক্রোমোলার, তাই স্বাভাবিক কোষে G6PD প্রায় ৯৮% অবরুদ্ধ অবস্থায় থাকে। কিন্তু যখনই কোনো জারণ চাপ বা চর্বি সংশ্লেষণ NADPH খরচ করে NADP+ বাড়িয়ে দেয়, তাৎক্ষণিকভাবে বাধা দূর হয়ে যায় এবং অক্সিডেটিভ শান্ট দিয়ে বিক্রিয়ার গতি বহুগুণ বৃদ্ধি পায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Non-Oxidative Phase: Transketolase, Transaldolase & The 4 Modes', 'নন-অক্সিডেটিভ পর্যায়: ট্রান্সকিটোলেজ, ট্রান্সঅ্যালডোলেজ ও ৪টি মোড'),
          paragraphs: [
            l(
              'The non-oxidative phase catalyzes the reversible reshuffling of five-carbon sugars into three- and six-carbon glycolytic intermediates. Ribulose-5-phosphate is first converted into two distinct pentose isomers: Ribose-5-Phosphate Isomerase converts it to ribose-5-phosphate (aldopentose), while Phosphopentose Epimerase converts it to xylulose-5-phosphate (ketopentose, inverted at C3).',
              'নন-অক্সিডেটিভ পর্যায় পাঁচ-কার্বন শর্করাকে পুনর্বিন্যাস করে গ্লাইকোলাইসিসের তিন ও ছয়-কার্বন উপাদানে রূপান্তর করে। রিবুলোজ-৫-ফসফেট প্রথমে দুটি আইসোমারে পরিণত হয়: আইসোমারেজ তৈরি করে রাইবোজ-৫-ফসফেট (অ্যালডোজ) এবং এপিমেমারেজ তৈরি করে জাইলুলোজ-৫-ফসফেট (কিটোজ)।'
            ),
            l(
              'Transketolase is a thiamine pyrophosphate (TPP)-dependent enzyme that transfers a two-carbon hydroxyethyl moiety from xylulose-5-P to ribose-5-P, producing sedoheptulose-7-phosphate (7C) and glyceraldehyde-3-phosphate (3C). Transaldolase then transfers a three-carbon dihydroxyacetone unit from sedoheptulose-7-P to glyceraldehyde-3-P, producing fructose-6-phosphate (6C) and erythrose-4-phosphate (4C). In a final transketolase step, erythrose-4-P reacts with a second xylulose-5-P to produce another fructose-6-phosphate (6C) and glyceraldehyde-3-phosphate (3C).',
              'ট্রান্সকিটোলেজ একটি থায়ামিন-নির্ভর (TPP) এনজাইম যা জাইলুলোজ থেকে রাইবোজে ২-কার্বন স্থানান্তর করে সিডোহেপ্টুলোজ-৭-P (৭C) ও গ্লিসার্যালডিহাইড-৩-P (৩C) তৈরি করে। এরপর ট্রান্সঅ্যালডোলেজ ৩-কার্বন সরিয়ে ফ্রুক্টোজ-৬-P (৬C) ও এরিথ্রোজ-৪-P (৪C) বানায়। সবশেষে দ্বিতীয় ট্রান্সকিটোলেজ বিক্রিয়া আরও একটি ফ্রুক্টোজ-৬-P এবং গ্লিসার্যালডিহাইড তৈরি করে।'
            ),
            l(
              'The reversibility of these reactions allows cells to navigate four operational flux modes: Mode 1 (Ribose-5-P demand >> NADPH; e.g., rapid DNA synthesis; non-oxidative phase runs backward from F6P and GA-3-P without G6PD); Mode 2 (NADPH demand = Ribose-5-P demand; oxidative phase produces 2 NADPH and 1 Ribose-5-P); Mode 3 (NADPH demand >> Ribose-5-P demand; G6P is completely oxidized via oxidative phase, and non-oxidative intermediates are recycled to G6P via gluconeogenesis); and Mode 4 (NADPH and ATP both needed; pentoses enter glycolysis directly to produce pyruvate and ATP).',
              'এই বিক্রিয়াগুলোর উভমুখীতা কোষকে ৪টি মোডে কাজ করার স্বাধীনতা দেয়: মোড ১ (কেবল রাইবোজ প্রয়োজন; গ্লাইকোলাইসিসের উপাদান থেকে উল্টো পথে রাইবোজ তৈরি হয়); মোড ২ (উভয়ই সমপরিমাণ প্রয়োজন); মোড ৩ (কেবল NADPH প্রয়োজন; শর্করা চক্রাকারে সম্পূর্ণ জারিত হয়ে CO2 হয়); এবং মোড ৪ (NADPH ও এটিপি উভয়ই প্রয়োজন; পেন্টোজগুলো গ্লাইকোলাইসিসে ঢুকে পাইরুভেট ও এটিপি তৈরি করে)।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Glutathione Redox Kinetics & Protection of Erythrocyte Proteins', 'গ্লুটাথিয়ন রেডক্স গতিবিদ্যা ও লোহিত রক্তকণিকার প্রোটিন সুরক্ষা'),
          paragraphs: [
            l(
              'In erythrocytes, the primary physiological sink for NADPH is Glutathione Reductase (GR), a homodimeric flavoenzyme containing FAD and a redox-active active-site disulfide bond. GR uses NADPH to reduce oxidized glutathione disulfide (GSSG) back to two molecules of reduced glutathione (GSH): GSSG + NADPH + H+ -> 2 GSH + NADP+. Under normal steady-state conditions, erythrocytes maintain a massive [GSH]/[GSSG] ratio exceeding 500:1.',
              'লোহিত রক্তকণিকায় NADPH-এর মূল গ্রাহক হলো গ্লুটাথিয়ন রিডাক্টেজ (GR)। এটি FAD-যুক্ত এনজাইম যা NADPH ব্যবহার করে জারিত গ্লুটাথিয়নকে (GSSG) বিজারিত গ্লুটাথিয়নে (GSH) পরিণত করে: GSSG + NADPH + H+ -> ২ GSH + NADP+। স্বাভাবিক অবস্থায় লোহিত রক্তকণিকায় GSH-এর মাত্রা GSSG-এর তুলনায় ৫০০ গুণেরও বেশি বজায় থাকে।'
            ),
            l(
              'GSH is the essential co-substrate for Glutathione Peroxidase 1 (GPx1), a selenoenzyme that reduces hydrogen peroxide to water: H2O2 + 2 GSH -> GSSG + 2 H2O. When G6PD is deficient, oxidative stress overwhelms the depleted GSH pool. Unquenched ROS oxidizes the reactive sulfhydryl groups (-SH) of hemoglobin cysteine residues, causing disulfide cross-linking, subunit denaturation, and precipitation into rigid, membrane-bound Heinz bodies.',
              'এই GSH গ্লুটাথিয়ন পারঅক্সিডেজ (GPx1) এনজাইমের সাথে মিলে বিষাক্ত পারঅক্সাইডকে পানিতে পরিণত করে: H2O2 + ২ GSH -> GSSG + ২ H2O। G6PD-এর ঘাটতি হলে GSH দ্রুত শেষ হয়ে যায়; ফলে ক্ষতিকর ফ্রি র্যাডিক্যাল হিমোগ্লোবিনের প্রোটিন বন্ধন নষ্ট করে কঠিন অপদ্রব্য হাইঞ্জ বডি তৈরি করে যা রক্তকণিকার মৃত্যু ঘটায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Transketolase Activation Assay for Thiamine (Vitamin B1) Deficiency', 'থায়ামিন (ভিটামিন বি১) ঘাটতি নির্ণয়ে ট্রান্সকিটোলেজ পরীক্ষা'),
          paragraphs: [
            l(
              'Because transketolase relies strictly on thiamine pyrophosphate (TPP) as an essential cofactor, clinical biochemistry utilizes erythrocyte transketolase activity to objectively diagnose thiamine deficiency (beriberi and Wernicke-Korsakoff syndrome). In the clinical laboratory, baseline erythrocyte transketolase activity is measured, excess exogenous TPP is added to the lysate, and activity is remeasured.',
              'যেহেতু ট্রান্সকিটোলেজ এনজাইমের কাজের জন্য থায়ামিন পাইরোফসফেট (TPP) একান্ত প্রয়োজন, তাই চিকিৎসাবিজ্ঞানে থায়ামিনের ঘাটতি (যেমন বেরিবেরি ও ওয়ার্নিকি সিন্ড্রোম) শনাক্ত করতে লোহিত রক্তকণিকার ট্রান্সকিটোলেজ অ্যাক্টিভিটি পরীক্ষা করা হয়। পরীক্ষাগারে রক্তে বাইরে থেকে TPP যোগ করার আগে ও পরে এনজাইমের গতি মেপে এই পরীক্ষা করা হয়।'
            ),
            l(
              'The Thiamine Pyrophosphate Effect (TPPE) is calculated as: TPPE (%) = [(Activity with TPP - Baseline Activity) / Baseline Activity] * 100. A TPPE greater than 25% indicates severe biochemical thiamine deficiency with marked apoenzyme unsaturation, mandating immediate parenteral thiamine administration before intravenous glucose infusion.',
              'TPP প্রভাব হিসাব করা হয়: TPPE (%) = [(TPP সহ গতি - প্রাথমিক গতি) / প্রাথমিক গতি] * ১০০। যদি এই বৃদ্ধির হার ২৫%-এর বেশি হয় তবে তা মারাত্মক থায়ামিন ঘাটতি প্রমাণ করে, যার জন্য গ্লুকোজ স্যালাইন দেওয়ার আগেই রোগীকে দ্রুত থায়ামিন ইনজেকশন দিতে হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Review of the Pentose Phosphate Network', 'পেন্টোজ ফসফেট নেটওয়ার্কের একাডেমিক পর্যালোচনা'),
          paragraphs: [
            l(
              'The Pentose Phosphate Pathway represents an essential cytosolic metabolic branch point governed by G6PD and the [NADP+]/[NADPH] ratio. The oxidative phase generates 2 NADPH and 1 ribulose-5-P per glucose, while the reversible non-oxidative phase shuffles carbons through TPP-dependent transketolase and transaldolase to meet fluctuating cellular demands across four versatile metabolic modes.',
              'পেন্টোজ ফসফেট পথ একটি বহুমুখী সাইটোসোলিক বিপাকীয় শাখা যা G6PD এবং [NADP+]/[NADPH] অনুপাত দ্বারা নিয়ন্ত্রিত হয়। এর অক্সিডেটিভ পর্যায় ২টি NADPH ও ১টি রিবুলোজ তৈরি করে এবং নন-অক্সিডেটিভ পর্যায় থায়ামিন-নির্ভর এনজাইম দিয়ে কার্বন পুনর্বিন্যাস করে কোষের পরিবর্তিত চাহিদা মেটাতে ৪টি চমৎকার মোডে কাজ করে।'
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
          heading: l('Molecular Genetics & Structural Polymorphism of G6PD Variants', 'G6PD ভ্যারিয়েন্টের আণবিক বংশগতি ও গাঠনিক বৈচিত্র্য'),
          paragraphs: [
            l(
              'The G6PD gene spans 18.5 kilobases on the distal long arm of the X chromosome (Xq28), consisting of 13 exons encoding a 515-amino acid monomer that assembles into homodimers and homotetramers. Structural stability requires the binding of a structural NADP+ molecule at an allosteric pocket located near the dimer interface, distinct from the catalytic NADP+ active site. Over 200 distinct clinical variants of G6PD have been characterized, categorized by the World Health Organization into classes based on residual enzymatic activity.',
              'G6PD জিনটি এক্স-ক্রোমোজোমের দীর্ঘ বাহুতে (Xq28) ১৮.৫ কিলোবেস জুড়ে অবস্থিত এবং ১৩টি এক্সন নিয়ে গঠিত যা ৫১৫ অ্যামিনো অ্যাসিডের প্রোটিন তৈরি করে। এনজাইমের স্থায়িত্ব রক্ষার জন্য ডাইমার সংযোগস্থলে একটি বিশেষ কাঠামোগত NADP+ যুক্ত থাকা আবশ্যক। বিশ্ব স্বাস্থ্য সংস্থা (WHO) এনজাইমের অবশিষ্ট কার্যক্ষমতার ওপর ভিত্তি করে ২০০টিরও বেশি মিউটেশনকে বিভিন্ন শ্রেণিতে বিন্যস্ত করেছে।'
            ),
            l(
              'Class II variants (such as G6PD Mediterranean, carrying a Ser188Phe missense mutation) exhibit profound enzyme instability with residual red cell activity below 10%, predisposing to severe, life-threatening hemolysis. In contrast, Class III variants (such as G6PD A-, carrying Val68Met and Asn126Asp mutations common in African populations) have normal catalytic efficiency (kcat) but an accelerated in vivo degradation rate, so that younger reticulocytes retain sufficient activity to make hemolytic episodes self-limiting.',
              'ক্লাস II ভ্যারিয়েন্টে (যেমন ভূমধ্যসাগরীয় Ser188Phe মিউটেশন) এনজাইমের স্থায়িত্ব চরমভাবে হ্রাস পায় এবং মাত্র ১০%-এর কম ক্ষমতা অবশিষ্ট থাকে, যার ফলে মারাত্মক রক্তশূন্যতা হয়। পক্ষান্তরে আফ্রিকান ক্লাস III ভ্যারিয়েন্টে (G6PD A-) নবীন রক্তকণিকায় কিছুটা এনজাইম সক্রিয় থাকে; ফলে রক্ত ভাঙার প্রকোপ তুলনামূলকভাবে কিছুটা মৃদু ও স্ব-সীমাবদ্ধ হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Redox Stress Mechanisms: Primaquine, Dapsone & Rasburicase Pharmacology', 'রেডক্স চাপের আণবিক প্রক্রিয়া: প্রিমাকুইন ও ড্যাপসন ফার্মাকোলজি'),
          paragraphs: [
            l(
              'Pharmacological agents trigger hemolytic crises through redox cycling. The 8-aminoquinoline antimalarial primaquine is metabolized by hepatic Cytochrome P450 2D6 (CYP2D6) to generate hydroxylated metabolites such as 5-hydroxyprimaquine. In the erythrocyte, these metabolites undergo spontaneous autoxidation with molecular oxygen, cycling repeatedly between quinone-imine and quinol states to generate massive quantities of superoxide (O2*-) and hydrogen peroxide (H2O2).',
              'ওষুধগুলো মূলত চক্রাকার জারণ বিক্রিয়ার মাধ্যমে রক্তকণিকা ধ্বংস করে। ম্যালেরিয়ার ওষুধ প্রিমাকুইন যকৃতে মেটাবোলাইজড হয়ে ৫-হাইড্রোক্সিপ্রিমাকুইনে পরিণত হয়। রক্তকণিকায় পৌঁছে এই যৌগটি অক্সিজেনের সাথে স্বতঃস্ফূর্তভাবে বিক্রিয়া করে ক্রমাগত বিপুল পরিমাণ সুপারঅক্সাইড ও হাইড্রোজেন পারঅক্সাইড গ্যাস তৈরি করতে থাকে।'
            ),
            l(
              'Similarly, dapsone is converted to dapsone hydroxylamine, and rasburicase (recombinant urate oxidase used in tumor lysis syndrome) produces stoichiometric quantities of H2O2 as it oxidizes uric acid to allantoin. In individuals with normal G6PD, erythrocyte PPP flux accelerates twentyfold to quench this peroxide surge; in G6PD-deficient red cells, the oxidative onslaught irreversibly oxidizes spectrin, ankyrin, and band 3, cross-linking the cytoskeleton and driving splenic clearance.',
              'একইভাবে ড্যাপসন এবং টিউমার লাইসিস সিন্ড্রোমে ব্যবহৃত র্যাসবিউরিকেজ ওষুধ সরাসরি প্রচুর হাইড্রোজেন পারঅক্সাইড তৈরি করে। স্বাভাবিক মানুষের রক্তকণিকা এর বিরুদ্ধে ২০ গুণ বেশি NADPH তৈরি করে নিজেকে রক্ষা করে; কিন্তু G6PD ঘাটতিযুক্ত কোষে এই সুরক্ষা না থাকায় কোষের ভেতরের প্রোটিন কঙ্কাল পুরোপুরি বিকৃত হয়ে রক্তকণিকাগুলো ধ্বংস হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Metabolic Rewiring in Cancer: The PPP as an Oncogenic Engine', 'ক্যান্সারে বিপাকীয় পুনর্বিন্যাস: অনকোজেনিক ইঞ্জিন হিসেবে PPP'),
          paragraphs: [
            l(
              'Beyond red blood cells, the Pentose Phosphate Pathway is dramatically hijacked by malignant tumors to sustain rapid proliferation and chemotherapeutic resistance. Oncogenes such as KRAS, MYC, and PI3K/Akt directly upregulate G6PD expression and activate transketolase-like 1 (TKTL1). This rewiring channels glycolytic carbon into ribose-5-phosphate to support the astronomical nucleotide synthesis rates required for continuous DNA replication.',
              'রক্তকণিকার বাইরে ক্যান্সার কোষগুলো দ্রুত বংশবৃদ্ধি এবং কেমোথেরাপি প্রতিরোধ করতে পেন্টোজ ফসফেট পথকে ছিনতাই করে। KRAS, MYC এবং Akt-এর মতো ক্যান্সার সৃষ্টিকারী অনকোজিনগুলো সরাসরি G6PD এবং ট্রান্সকিটোলেজ-লাইক ১ (TKTL1) এনজাইমের প্রকাশ বহুগুণ বাড়িয়ে দেয়, যা টিউমার কোষের নিরবচ্ছিন্ন ডিএনএ তৈরির কাঁচামাল সরবরাহ করে।'
            ),
            l(
              'Simultaneously, the massive NADPH output generated by tumor G6PD detoxifies the elevated intracellular ROS generated by hyperactive oncogenic metabolism, shielding cancer cells from ferroptosis and apoptosis. Pharmacological G6PD inhibitors (such as 6-aminonicotinamide and G6PDi-1) are currently in preclinical development to selectively sensitize drug-resistant cancers to radiation and chemotherapy.',
              'একই সাথে টিউমারের G6PD থেকে উৎপাদিত বিপুল পরিমাণ NADPH ক্যান্সার কোষকে নিজস্ব বিষাক্ত ফ্রি র্যাডিক্যাল এবং ফেরোপ্টোসিস নামক কোষমৃত্যু থেকে বাঁচিয়ে রাখে। আধুনিক চিকিৎসাবিজ্ঞানে ৬-অ্যামিনোনিকোটিনামাইডের মতো G6PD ইনহিবিটর তৈরি করা হচ্ছে যা ক্যান্সার কোষকে কেমোথেরাপির প্রতি পুনরায় সংবেদনশীল করে তুলবে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Diagnostic Timing & Post-Hemolytic Pitfalls in G6PD Testing', 'G6PD পরীক্ষায় সময়কাল ও পোস্ট-হিমোলাইটিক ভুল নির্ণয়ের ফাঁদ'),
          paragraphs: [
            l(
              'A critical clinical pitfall in diagnosing G6PD deficiency is testing timing. During an acute hemolytic crisis, the oldest, most enzyme-deficient red cells have already lysed and been cleared. The bone marrow responds with a vigorous reticulocyte surge; because reticulocytes are young cells retaining higher residual G6PD activity, measuring G6PD levels during or immediately following an acute hemolytic episode frequently yields a falsely normal result.',
              'G6PD ঘাটতি নির্ণয়ে চিকিৎসকদের একটি মারাত্মক ফাঁদ হলো ভুল সময়ে পরীক্ষা করা। তীব্র রক্ত ভাঙার সময় সবচেয়ে পুরনো ও দুর্বল কোষগুলো ইতোমধ্যে ভেঙে শরীর থেকে বিলীন হয়ে যায়। এর জবাবে অস্থিমজ্জা দ্রুত প্রচুর তরুণ রক্তকণিকা (রেটিকিউলোসাইট) তৈরি করে রক্তে পাঠায়; এই তরুণ কোষগুলোতে কিছু এনজাইম অবশিষ্ট থাকায় সংকটের ঠিক পরপরই রক্ত পরীক্ষা করলে ফলাফল মিথ্যা স্বাভাবিক (false-normal) আসতে পারে।'
            ),
            l(
              'Clinicians must postpone definitive quantitative spectrophotometric G6PD testing until at least 2 to 3 months after the resolution of the hemolytic event and after transfused donor red blood cells have cleared, ensuring that the patient steady-state red cell population is accurately assayed.',
              'তাই চিকিৎসকদের অবশ্যই রক্ত ভাঙার তীব্র সংকট কেটে যাওয়ার এবং কোনো রক্ত পরিসঞ্চালন থাকলে তার প্রভাব দূর হওয়ার অন্তত ২ থেকে ৩ মাস পর এই পরীক্ষাটি পুনরাবৃত্তি করতে হয় যাতে রোগীর প্রকৃত অবস্থা ধরা পড়ে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Frontiers in Pentose Phosphate Research', 'পেন্টোজ ফসফেট গবেষণার ভবিষ্যৎ দিগন্ত'),
          paragraphs: [
            l(
              'The Pentose Phosphate Pathway exemplifies the elegant balance of cellular bioenergetics: coupling carbohydrate diversion to redox homeostasis and nucleotide biogenesis. From historical natural selection against malaria to modern targeted oncological therapeutics, the molecular biology of G6PD and NADPH remains at the forefront of human metabolic medicine.',
              'পেন্টোজ ফসফেট পথ জীবকোষের রেডক্স ভারসাম্য এবং নিউক্লিওটাইড তৈরির এক অনন্য সমন্বয় প্রদর্শন করে। ম্যালেরিয়ার বিরুদ্ধে বিবর্তনীয় সুরক্ষা থেকে শুরু করে আধুনিক ক্যান্সার চিকিৎসার লক্ষ্যবস্তু হিসেবে—G6PD এবং NADPH-এর আণবিক বিজ্ঞান চিকিৎসাবিজ্ঞানের অত্যন্ত গুরুত্বপূর্ণ স্থান দখল করে আছে।'
            ),
          ],
        },
      ],
    },
  },
}
