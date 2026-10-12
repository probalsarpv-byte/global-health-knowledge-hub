import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch3',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 3: The Cellular Level of Organization',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/3-introduction',
  },
  {
    id: 'openstax-ap2e-ch4',
    authors: 'J. G. Betts et al.',
    title: 'Anatomy and Physiology 2e, Chapter 4: The Tissue Level of Organization',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/4-introduction',
  },
  {
    id: 'junqueira-histology-16e',
    authors: 'A. L. Mescher',
    title: "Junqueira's Basic Histology: Text and Atlas, 16th edition",
    organization: 'McGraw-Hill Education',
    year: 2021,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3055',
  },
  {
    id: 'ross-pawlina-histology-8e',
    authors: 'W. Pawlina, M. H. Ross',
    title: 'Histology: A Text and Atlas with Correlated Cell and Molecular Biology, 8th edition',
    organization: 'Wolters Kluwer',
    year: 2020,
    url: 'https://shop.lww.com/Histology--A-Text-and-Atlas/p/9781496383426',
  },
  {
    id: 'guyton-hall-14e',
    authors: 'J. E. Hall, M. E. Hall',
    title: 'Guyton and Hall Textbook of Medical Physiology, 14th edition',
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/guyton-and-hall-textbook-of-medical-physiology/hall/978-0-323-59712-8',
  },
]

export const chapter02CellsTissuesLesson: LessonTopic = {
  id: 'topic.anatomy.cells-tissues',
  slug: 'cells-tissues',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('02 · Cells, Tissues and Membranes', '০২ · কোষ, টিস্যু ও ঝিল্লি'),
  summary: l(
    'A comprehensive foundation in human microscopic anatomy: eukaryotic cell organization, the four fundamental tissue classes, intercellular junctions, and epithelial/connective membranes.',
    'মানবদেহের অণুবীক্ষণিক অ্যানাটমির সামগ্রিক ভিত্তি: ইউক্যারিওটিক কোষের সংগঠন, চারটি মৌলিক টিস্যু শ্রেণি, আন্তঃকোষীয় সংযোগ এবং এপিথেলিয়াল ও সংযোজক ঝিল্লি।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Classify the four primary tissue types (epithelial, connective, muscle, nervous) by their embryological origin, cellularity, extracellular matrix, and physiological function.',
      'চারটি প্রধান টিস্যু শ্রেণি (আবরণী, সংযোজক, পেশী ও স্নায়ু)-কে তাদের ভ্রূণীয় উৎপত্তি, কোষীয় ঘনত্ব, বহিঃকোষীয় মাতৃকা এবং শারীরবৃত্তীয় কাজের ভিত্তিতে শ্রেণিবিভাগ করতে পারা।'
    ),
    l(
      'Contrast the molecular architecture and clinical significance of cell junctions including tight junctions (zonula occludens), desmosomes (macula adherens), and gap junctions.',
      'টাইট জাংশন (জোনুলা অকলুডেন্স), ডেসমোজোম (ম্যাকুলা অ্যাডহেরেন্স) এবং গ্যাপ জাংশনসহ প্রধান কোষীয় সংযোগের আণবিক বিন্যাস ও ক্লিনিক্যাল তাৎপর্য বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Distinguish mucous, serous, cutaneous, and synovial membranes according to their epithelial lining, connective lamina, secretome, and regional anatomical distributions.',
      'মিউকাস, সিরাস, কিউটেনিয়াস ও সাইনোভিয়াল ঝিল্লিকে তাদের এপিথেলিয়াল স্তর, সংযোজক ল্যামিনা, ক্ষরণ এবং আঞ্চলিক শারীরস্থানিক বিস্তারের ভিত্তিতে পার্থক্য করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.introduction'],
  relatedTopicIds: ['topic.cell.structure'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch3', 'openstax-ap2e-ch4'],
    structure: ['openstax-ap2e-ch4', 'junqueira-histology-16e'],
    mechanism: ['ross-pawlina-histology-8e', 'guyton-hall-14e'],
    integration: ['openstax-ap2e-ch4', 'junqueira-histology-16e'],
    practice: ['openstax-ap2e-ch4', 'ross-pawlina-histology-8e'],
    takeaways: ['openstax-ap2e-ch3', 'openstax-ap2e-ch4'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: The Cellular Basis of Form', 'ভূমিকা: গঠনের কোষীয় ভিত্তি'), sectionId: 'introduction' },
      { id: 'sec-four-tissues', label: l('The Four Primary Tissue Classes', 'চারটি প্রধান টিস্যু শ্রেণি'), sectionId: 'structure' },
      { id: 'sec-junctions', label: l('Intercellular Junctions and Polarity', 'আন্তঃকোষীয় সংযোগ ও মেরুপ্রবণতা'), sectionId: 'mechanism' },
      { id: 'sec-membranes', label: l('Body Membranes and Histophysiology', 'শারীরিক ঝিল্লি ও কলাশারীরবৃত্ত'), sectionId: 'integration' },
      { id: 'sec-reasoning', label: l('Histological Reasoning and Diagnostics', 'কলাস্থানিক যুক্তি ও ডায়াগনস্টিক প্রয়োগ'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Glossary and Synthesis', 'শব্দকোষ ও সামগ্রিক সংশ্লেষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Basement membrane (Basal lamina)', 'বেসমেন্ট মেমব্রেন (ভিত্তিঝিল্লি)'),
        definition: l(
          'An acellular protein matrix (type IV collagen, laminin, perlecan) anchoring epithelium to underlying vascular connective tissue.',
          'একটি অকোষীয় প্রোটিন মাতৃকা (টাইপ IV কোলাজেন, ল্যামিনিন, পারলেক্যান) যা আবরণী টিস্যুকে নিচের রক্তনালীসমৃদ্ধ সংযোজক কলার সঙ্গে আবদ্ধ করে।'
        ),
      },
      {
        term: l('Zonula occludens (Tight junction)', 'জোনুলা অকলুডেন্স (টাইট জাংশন)'),
        definition: l(
          'Transmembrane protein seals (claudins, occludins) that obliterate intercellular space to form a selective paracellular diffusion barrier.',
          'ট্রান্সমেমব্রেন প্রোটিন বেষ্টনী (ক্লডিন, অকলুডিন) যা দুটি কোষের মধ্যবর্তী ফাঁকা স্থান বন্ধ করে নির্বাচনী ব্যাপন বাধা তৈরি করে।'
        ),
      },
      {
        term: l('Extracellular Matrix (ECM)', 'বহিঃকোষীয় মাতৃকা (ECM)'),
        definition: l(
          'The non-cellular component of tissues comprising protein fibers (collagen, elastin) and ground substance (glycosaminoglycans, proteoglycans).',
          'টিস্যুর অকোষীয় অংশ যা প্রোটিন তন্তু (কোলাজেন, ইলাস্টিন) এবং মাতৃকা উপাদান (গ্লাইকোসামিনোগ্লাইকান, প্রোটিওগ্লাইকান) নিয়ে গঠিত।'
        ),
      },
      {
        term: l('Endothelium & Mesothelium', 'এন্ডোথেলিয়াম ও মেসোথেলিয়াম'),
        definition: l(
          'Specialized simple squamous epithelia lining blood/lymph vessels (endothelium) and closed serous pericardial/pleural/peritoneal cavities (mesothelium).',
          'রক্তনালী ও লসিকানালী আবৃতকারী (এন্ডোথেলিয়াম) এবং পেরিকার্ডিয়াল/প্লুরাল/পেরিটোনিয়াল সিরাস গহ্বর আবৃতকারী (মেসোথেলিয়াম) বিশেষায়িত সরল আঁইশাকার আবরণী কলা।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Histological Classification of Tracheal Respiratory Epithelium', 'শ্বাসনালীর রেসপিরেটরি এপিথেলিয়ামের কলাস্থানিক নির্ণয়'),
        steps: [
          l('Step 1: Observe cell nuclear distribution at multiple vertical heights across the mucosal surface.', 'ধাপ ১: মিউকোসা স্তরের বিভিন্ন উচ্চতায় কোষের নিউক্লিয়াসের বিন্যাস প্রত্যক্ষ করুন।'),
          l('Step 2: Verify that every individual epithelial cell contacts the underlying basal lamina, revealing pseudostratified architecture.', 'ধাপ ২: প্রতিটি কোষ ভিত্তিঝিল্লি স্পর্শ করে কি না তা নিশ্চিত করুন, যা সিউডোস্ট্র্যাটিফাইড গঠন প্রমাণ করে।'),
          l('Step 3: Identify apical ciliary projections and intercalated mucin-secreting goblet cells confirming pseudostratified ciliated columnar epithelium.', 'ধাপ ৩: শীর্ষীয় সিলিয়া এবং মিউসিন-ক্ষরণকারী গবলেট কোষ শনাক্ত করে সিলিয়াযুক্ত সিউডোস্ট্র্যাটিফাইড কলামনার এপিথেলিয়াম চূড়ান্ত করুন।'),
        ],
        conclusion: l(
          'The mucociliary escalator functions effectively only when specialized columnar cilia coordinate metachronal beating atop a continuous basal lamina.',
          'মিউকোসিলিয়ারি এসকেলেটর কেবল তখনই কার্যকর হয় যখন বিশেষায়িত সিলিয়া একটি অবিচ্ছিন্ন ভিত্তিঝিল্লির ওপর সমন্বিত স্পন্দন তৈরি করে।'
        ),
      },
      {
        title: l('Evaluating Dermal Fibroblast Dysfunction in Scurvy', 'স্কার্ভি রোগে ডার্মাল ফাইব্রোব্লাস্টের কর্মহীনতা মূল্যায়ন'),
        steps: [
          l('Step 1: Ascertain that procollagen alpha chains require post-translational prolyl and lysyl hydroxylation.', 'ধাপ ১: নিশ্চিত করুন যে প্রোকোলাজেন আলফা চেইনের জন্য পোস্ট-ট্রান্সলেশনাল প্রোলিল ও লাইসিল হাইড্রক্সিলেশন প্রয়োজন।'),
          l('Step 2: Recognize that vitamin C (ascorbate) acts as an essential cofactor maintaining iron in the ferrous Fe2+ state for hydroxylase enzymes.', 'ধাপ ২: শনাক্ত করুন যে ভিটামিন সি (অ্যাসকরবেট) হাইড্রক্সিলেজ এনজাইমের জন্য আয়রনকে Fe2+ অবস্থায় বজায় রাখার অপরিহার্য কোফ্যাক্টর।'),
          l('Step 3: Deduce that ascorbic acid deficiency destabilizes the collagen triple helix, precipitating capillary fragility and impaired dermal wound healing.', 'ধাপ ৩: সিদ্ধান্ত নিন যে অ্যাসকরবিক অ্যাসিডের ঘাটতি কোলাজেনের ট্রিপল হেলিক্সকে অস্থিতিশীল করে, যার ফলে কৈশিক নালীর ভঙ্গুরতা ও ক্ষত নিরাময় বাধাগ্রস্ত হয়।'),
        ],
        conclusion: l(
          'Connective tissue mechanical integrity directly mirrors the biochemical post-translational maturation of its extracellular collagen scaffolding.',
          'সংযোজক কলার যান্ত্রিক স্থিতিস্থাপকতা সরাসরি তার বহিঃকোষীয় কোলাজেন কাঠামোর জৈবরাসায়নিক রূপান্তরের ওপর নির্ভরশীল।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why do epithelial tissues rely strictly on diffusion from underlying vascular connective tissues for oxygen and metabolic substrates?',
          'আবরণী কলা অক্সিজেন ও বিপাকীয় উপাদানের জন্য কেন সরাসরি নিচের রক্তনালীযুক্ত সংযোজক কলার ব্যাপন প্রক্রিয়ার ওপর নির্ভরশীল?'
        ),
        answer: l(
          'Epithelia are fundamentally avascular structures; their densely packed cellular sheets leave no intercellular room for blood capillary penetration, requiring nutrients to traverse the semipermeable basal lamina.',
          'আবরণী কলা প্রকৃতিগতভাবেই রক্তনালীহীন (অভাস্কুলার); এদের নিবিড় কোষীয় বিন্যাসের মধ্যে রক্তকৈশিকের স্থান থাকে না, ফলে পুষ্টি উপাদানকে ভিত্তিঝিল্লি ভেদ করে ব্যাপনের মাধ্যমে আসতে হয়।'
        ),
      },
      {
        question: l(
          'What structural specialization prevents epidermal sheets from tearing apart under high mechanical shear stresses?',
          'কোন গঠনগত বৈশিষ্ট্যের কারণে তীব্র যান্ত্রিক টানের মধ্যেও ত্বকের এপিডার্মাল স্তর ছিঁড়ে পৃথক হয়ে যায় না?'
        ),
        answer: l(
          'Desmosomes (maculae adherentes) anchored to cytoplasmic intermediate filaments (keratin tonofilaments) distribute mechanical shear stresses throughout the multidimensional cell sheet.',
          'সাইটোপ্লাজমীয় ইন্টারমিডিয়েট ফিলামেন্ট (কেরাটিন টোনোফিলামেন্ট)-এর সঙ্গে যুক্ত ডেসমোজোমসমূহ সম্পূর্ণ কোষীয় স্তরে যান্ত্রিক চাপ সুষমভাবে ছড়িয়ে দেয়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch02-tissue-diagram',
    title: l('Interactive Tissue Architecture & Junction Matrix', 'ইন্টারেক্টিভ টিস্যু সংগঠন ও জাংশন ম্যাট্রিক্স'),
    description: l(
      'Explore the structural strata of the four fundamental tissue classes and the molecular anchors that coordinate multicellular tissue cohesion.',
      'চারটি মৌলিক টিস্যু শ্রেণির গঠনগত স্তর এবং বহুকোষীয় সংহতি পরিচালনাকারী আণবিক নোঙরগুলো পরীক্ষা করুন।'
    ),
    disclaimer: l(
      'Schematic histological representation: select any tissue category to inspect its microscopic organization, matrix density, and physiological specializations.',
      'কলাস্থানিক পরিকল্পিত চিত্র: যেকোনো টিস্যুর অণুবীক্ষণিক বিন্যাস, মাতৃকার ঘনত্ব এবং শারীরবৃত্তীয় বিশেষত্ব দেখতে নির্বাচন করুন।'
    ),
    svgType: 'tissue-matrix',
    items: [
      {
        id: 'epithelial-tissue',
        label: l('Epithelial Tissue', 'আবরণী কলা (Epithelium)'),
        description: l(
          'Cellular sheets covering surfaces, lining internal cavities, and forming glands. Characterized by high cellularity, distinct apical-basal polarity, specialized intercellular junctions, and complete avascularity.',
          'দেহপৃষ্ঠ আবৃতকারী, অভ্যন্তরীণ গহ্বর রেখাকরণকারী এবং গ্রন্থি গঠনকারী কোষীয় স্তর। উচ্চ কোষীয় ঘনত্ব, স্পষ্ট শীর্ষ-ভিত্তি মেরুপ্রবণতা, বিশেষায়িত কোষ সংযোগ এবং রক্তনালীহীনতা এর প্রধান বৈশিষ্ট্য।'
        ),
        details: l(
          'Classified into simple (squamous, cuboidal, columnar, pseudostratified) and stratified (squamous keratinized/non-keratinized, cuboidal, columnar, transitional/urothelium).',
          'সরল (আঁইশাকার, ঘনকাকার, স্তম্ভাকার, সিউডোস্ট্র্যাটিফাইড) এবং যৌগিক (কেরাটিনযুক্ত/কেরাটিনবিহীন আঁইশাকার, ঘনকাকার, স্তম্ভাকার, ট্রানজিশনাল বা ইউরোথেলিয়াম)-এ বিভক্ত।'
        ),
        sectionId: 'structure',
        color: '#d6ecd2',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'connective-tissue',
        label: l('Connective Tissue', 'সংযোজক কলা (Connective Tissue)'),
        description: l(
          'The most abundant body tissue, derived from embryonic mesenchyme. Features relatively few cells dispersed within an expansive extracellular matrix of ground substance and protein fibers.',
          'ভ্রূণীয় মেসেনকাইম থেকে উদ্ভূত দেহের সর্বাধিক বিস্তৃত টিস্যু। বিস্তৃত বহিঃকোষীয় মাতৃকা ও প্রোটিন তন্তুর মধ্যে তুলনামূলকভাবে কম কোষ ছড়িয়ে থাকে।'
        ),
        details: l(
          'Subdivided into connective tissue proper (loose areolar, adipose, reticular; dense regular, irregular, elastic) and specialized connective tissues (cartilage, bone, blood, hemopoietic).',
          'প্রকৃত সংযোজক কলা (শিথিল অ্যারওলার, এডিপোজ, রেটিকুলার; ঘন সুষম, অসম, স্থিতিস্থাপক) এবং বিশেষায়িত সংযোজক কলা (তরুণাস্থি, অস্থি, রক্ত, রক্তোৎপাদী)-তে বিভক্ত।'
        ),
        sectionId: 'structure',
        color: '#fbe0c9',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'muscle-tissue',
        label: l('Muscle Tissue', 'পেশী কলা (Muscle Tissue)'),
        description: l(
          'Excitable, contractile tissue composed of elongated myocytes containing actin and myosin myofilaments. Converts chemical energy (ATP) into mechanical tension and movement.',
          'উত্তেজনশীল ও সংকোচনশীল কলা যা অ্যাক্টিন ও মায়োসিন ফিলামেন্টযুক্ত দীর্ঘায়িত মায়োসাইট নিয়ে গঠিত। রাসায়নিক শক্তিকে (ATP) যান্ত্রিক টানে রূপান্তর করে।'
        ),
        details: l(
          'Comprises skeletal muscle (striated, multinucleated, voluntary somatic control), cardiac muscle (striated, branched, intercalated discs, involuntary autonomic control), and smooth muscle (non-striated, fusiform, involuntary visceral control).',
          'কঙ্কালপেশী (রেখাযুক্ত, বহু-নিউক্লিয়াস, ঐচ্ছিক), হৃদ্‌পেশী (রেখাযুক্ত, শাখান্বিত, ইন্টারক্যালেটেড ডিস্কযুক্ত, অনৈচ্ছিক) এবং মসৃণ পেশী (রেখাহীন, অনৈচ্ছিক)-তে বিভক্ত।'
        ),
        sectionId: 'mechanism',
        color: '#f8d2d8',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'nervous-tissue',
        label: l('Nervous Tissue', 'স্নায়ু কলা (Nervous Tissue)'),
        description: l(
          'Excitable communicative tissue of ectodermal origin comprising electrically active neurons and supportive neuroglial cells (astrocytes, oligodendrocytes, microglia, Schwann cells).',
          'এক্টোডার্ম থেকে উদ্ভূত সংবেদনশীল ও যোগাযোগমূলক কলা যা তড়িৎ-সক্রিয় নিউরন এবং সহায়ক নিউরোগ্লিয়া (অ্যাস্ট্রোসাইট, অলিগোডেনড্রোসাইট, মাইক্রোগ্লিয়া, শোয়ান কোষ) নিয়ে গঠিত।'
        ),
        details: l(
          'Neurons generate and conduct action potentials via axons and receive afferent inputs via dendrites, communicating across chemical and electrical synapses.',
          'নিউরন অ্যাক্সনের মাধ্যমে অ্যাকশন পটেনশিয়াল তৈরি ও পরিচালনা করে এবং ডেনড্রাইটের মাধ্যমে সংকেত গ্রহণ করে সিন্যাপ্সে প্রেরণ করে।'
        ),
        sectionId: 'mechanism',
        color: '#e2d9f3',
        svgCoords: { x: 25, y: 210, width: 310, height: 50 },
      },
      {
        id: 'cell-junctions',
        label: l('Intercellular Junctions', 'কোষীয় সংযোগ (Cell Junctions)'),
        description: l(
          'Multiprotein complexes establishing paracellular gates (tight junctions), mechanical anchoring points (adherens junctions, desmosomes, hemidesmosomes), and direct metabolic conduits (gap junctions).',
          'বহু-প্রোটিন জটিল কাঠামো যা প্যারাসেলুলার দরজা (টাইট জাংশন), যান্ত্রিক নোঙর (ডেসমোজোম, হেমিডেসমোজোম) এবং প্রত্যক্ষ বিপাকীয় পথ (গ্যাপ জাংশন) তৈরি করে।'
        ),
        details: l(
          'Integral to transcellular transport regulation, tissue tensile strength, and synchronous electrochemical contraction (e.g. cardiac intercalated discs).',
          'ট্রান্সসেলুলার পরিবহন নিয়ন্ত্রণ, টিস্যুর দৃঢ়তা এবং হৃদ্‌পেশীর ছন্দবদ্ধ সংকোচনে অপরিহার্য ভূমিকা পালন করে।'
        ),
        sectionId: 'mechanism',
        color: '#d6e8f8',
        svgCoords: { x: 25, y: 270, width: 310, height: 50 },
      },
      {
        id: 'body-membranes',
        label: l('Epithelial & Synovial Membranes', 'শারীরিক ঝিল্লি (Body Membranes)'),
        description: l(
          'Flat continuous sheets lining cavities, organs, and articulating joints: mucous (wet cavities opening externally), serous (closed visceral cavities), cutaneous (skin), and synovial (diarthrodial joints).',
          'গহ্বর, অঙ্গ ও অস্থিসন্ধি রেখাকরণকারী পাতলা অবিচ্ছিন্ন স্তর: মিউকাস (বাইরে উন্মুক্ত ভেজা গহ্বর), সিরাস (আবদ্ধ ভিসেরাল গহ্বর), কিউটেনিয়াস (ত্বক) এবং সাইনোভিয়াল (সন্ধিগহ্বর)।',
        ),
        details: l(
          'Serous membranes secrete transudative serous fluid between visceral and parietal layers to reduce friction during cardiopulmonary and digestive motility.',
          'সিরাস ঝিল্লি ভিসেরাল ও প্যারাইটাল স্তরের মাঝে ঘর্ষণহীন চলাচলের জন্য সিরাস তরল ক্ষরণ করে।'
        ),
        sectionId: 'integration',
        color: '#fdf1c8',
        svgCoords: { x: 25, y: 330, width: 310, height: 42 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Introduction: The Hierarchical Architecture of Human Form', 'ভূমিকা: মানবদেহের স্তরভিত্তিক গঠন কাঠামো'),
          paragraphs: [
            l(
              'The human body is assembled through an exquisite biological hierarchy that spans atoms, biological macromolecules, subcellular organelles, living cells, functional tissues, discrete organs, and integrated organ systems. The cell represents the smallest fundamental living unit capable of autonomous homeostasis and metabolic self-regulation. When specialized cells that share a common embryological origin, morphological design, and functional purpose group together alongside their extracellular secretions, they constitute a tissue. Understanding tissues transforms gross anatomical structures from static organ shapes into dynamic cellular assemblies that maintain human life.',
              'মানবদেহের গঠন পরমাণু, জৈব অণু, কোষীয় অঙ্গাণু, জীবন্ত কোষ, কার্যকরী টিস্যু, পৃথক অঙ্গ এবং সমন্বিত অঙ্গতন্ত্রের এক চমৎকার ধারাবাহিক বিন্যাসে সজ্জিত। কোষ হলো জীবনের ক্ষুদ্রতম মৌলিক একক যা স্বতঃস্ফূর্ত ভারসাম্য ও বিপাকীয় কার্যক্রম পরিচালনায় সক্ষম। যখন অভিন্ন ভ্রূণীয় উৎস ও নির্দিষ্ট গঠনগত বৈশিষ্ট্যের কোষসমূহ একত্রিত হয়ে তাদের ক্ষরিত পদার্থের সাথে নির্দিষ্ট কাজ সম্পাদন করে, তখন তাকে টিস্যু বা কলা বলা হয়। টিস্যুর জ্ঞান মানবদেহের অঙ্গসংস্থানকে কেবল স্থূল কাঠামোর মধ্যে সীমাবদ্ধ না রেখে জীবন্ত কোষীয় কার্যক্রমে রূপান্তরিত করে।'
            ),
            l(
              'Rather than existing as isolated bags of fluid, trillions of cells in the human organism operate within organized structural frameworks called tissues and membranes. These sheets, cushions, and cables form every barrier that protects us from external pathogens, every vessel that channels blood throughout the cardiovascular grid, and every motor element that generates physical force. By learning to recognize the four primary tissue types, you unlock the anatomical blueprint that explains how every single human organ is constructed.',
              'মানবদেহের ট্রিলিয়ন ট্রিলিয়ন কোষ বিচ্ছিন্ন তরলকণা হিসেবে অবস্থান না করে সুসংগঠিত টিস্যু এবং ঝিল্লির সমন্বয়ে কাজ করে। এই স্তরগুলো বাইরের জীবাণু থেকে দেহকে রক্ষা করে, কার্ডিওভাসকুলার গ্রিডের মাধ্যমে রক্ত পরিবহন করে এবং প্রতিটি অঙ্গসঞ্চালনের পেশীশক্তি তৈরি করে। চারটি প্রধান টিস্যু শ্রেণি সঠিকভাবে উপলব্ধি করার মাধ্যমে মানবদেহের যেকোনো অঙ্গ কীভাবে তৈরি ও পরিচালিত হয় তার মৌলিক ব্লুপ্রিন্ট বোঝা সম্ভব।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Four Primary Tissue Classes and Matrix Topology', 'চারটি প্রধান টিস্যু শ্রেণি ও বহিঃকোষীয় মাতৃকার গঠন'),
          paragraphs: [
            l(
              'Every macroscopic organ in the human body is constructed from varying proportions of four primary tissue families: epithelial tissue, connective tissue, muscle tissue, and nervous tissue. Epithelial tissue consists of tightly aggregated polyhedral cells with minimal intercellular space, designed to carpet external surfaces, line internal lumina, and form specialized secretory glands. Connective tissue, in stark contrast, features relatively low cellularity embedded within an expansive extracellular matrix rich in protein fibers and ground substance, providing mechanical support, immune defense, and vascular conduits.',
              'মানবদেহের প্রতিটি স্থূল অঙ্গ চারটি প্রধান টিস্যু পরিবারের বিভিন্ন অনুপাতের সমন্বয়ে গঠিত: আবরণী কলা (এপিথেলিয়াল), সংযোজক কলা (কানেক্টিভ), পেশী কলা (মাসল) এবং স্নায়ু কলা (নার্ভাস)। আবরণী কলা নিবিড়ভাবে সন্নিবেশিত কোষের সমন্বয়ে গঠিত যার মাঝে প্রায় কোনো ফাঁকা স্থান থাকে না; এটি দেহের বহিরাবরণ, অভ্যন্তরীণ নালীর ভেতরের আস্তরণ এবং ক্ষরণকারী গ্রন্থি তৈরি করে। অন্যদিকে, সংযোজক কলায় প্রচুর পরিমাণ বহিঃকোষীয় মাতৃকা এবং প্রোটিন তন্তুর মাঝে কোষগুলো ছড়িয়ে থাকে, যা দেহের কাঠামোগত শক্তি, প্রতিরক্ষা এবং রক্তনালীর পথ তৈরি করে।'
            ),
            l(
              'Muscle tissue is composed of elongated, excitable contractile cells termed myocytes or myofibers that harness actin and myosin motor proteins to generate mechanical force and motility. Nervous tissue comprises electrically excitable neurons equipped with receptive dendrites and conductive axons, accompanied by abundant glial support cells that nurture, insulate, and structurally support neural signaling pathways across both the central and peripheral nervous systems.',
              'পেশী কলা সংকোচনশীল দীর্ঘায়িত কোষ নিয়ে গঠিত যা অ্যাক্টিন ও মায়োসিন প্রোটিনের মাধ্যমে যান্ত্রিক টান এবং চলন সৃষ্টি করে। স্নায়ু কলা সংবেদনশীল নিউরন এবং তাদের সহায়ক নিউরোগ্লিয়াল কোষ দ্বারা গঠিত, যা ডেনড্রাইটের মাধ্যমে সংকেত গ্রহণ করে এবং অ্যাক্সনের মাধ্যমে সমগ্র কেন্দ্রীয় ও প্রান্তীয় স্নায়ুতন্ত্রে দ্রুত তড়িৎ-রাসায়নিক সংকেত প্রেরণ করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Cell Junctions: Molecular Anchors and Paracellular Gates', 'কোষীয় সংযোগ: আণবিক নোঙর ও প্যারাসেলুলার প্রবেশদ্বার'),
          paragraphs: [
            l(
              'Epithelial integrity and tissue coordination depend upon specialized multimolecular junctional complexes along lateral plasma membranes. Tight junctions (zonula occludens) form circumferential seals near the apical pole, fusing outer membrane leaflets through claudin and occludin strands to block paracellular fluid leakage. Immediately subjacent are adherens junctions (zonula adherens) and spot-weld desmosomes (maculae adherentes), which physically anchor adjacent cell membranes to the internal cytoskeleton through cadherin family proteins.',
              'আবরণী কলার সংহতি এবং টিস্যু সমন্বয় তাদের পার্শ্বীয় ঝিল্লিতে অবস্থিত বিশেষায়িত আণবিক জাংশনাল কমপ্লেক্সের ওপর নির্ভর করে। টাইট জাংশন (জোনুলা অকলুডেন্স) কোষের শীর্ষের কাছাকাছি ক্লডিন ও অকলুডিন প্রোটিনের মাধ্যমে একটি অবিচ্ছিন্ন বন্ধন তৈরি করে, যা কোষগুলোর মধ্যবর্তী তরল ক্ষরণ রোধ করে। এর ঠিক নিচে অ্যাডহেরেন্স জাংশন এবং ডেসমোজোম (ম্যাকুলা অ্যাডহেরেন্স) ক্যাডেরিন প্রোটিনের মাধ্যমে কোষের অভ্যন্তরীণ সাইটোস্কেলেটনের সাথে শক্তিশালী যান্ত্রিক নোঙর তৈরি করে।'
            ),
            l(
              'Gap junctions (nexus) serve a completely different, communicative function by clustering hexameric connexin hemichannels into hydrophilic intercellular pores. These channels directly couple the cytoplasm of neighboring cells, allowing the rapid diffusion of inorganic ions (Ca2+, K+), cyclic AMP, and small metabolites under 1.2 kDa, thereby coordinating electrical synchrony across cardiac muscle and smooth muscle sheets.',
              'গ্যাপ জাংশন বা নেক্সাস হেক্সামেরিক কানেক্সিন প্রোটিন দ্বারা গঠিত হাইড্রোফিলিক ছিদ্রের মাধ্যমে সংলগ্ন কোষগুলোর সাইটোপ্লাজমকে সরাসরি সংযুক্ত করে। এই ছিদ্র দিয়ে ক্যালসিয়াম, পটাসিয়াম ও ছোট অণু দ্রুত চলাচল করতে পারে, যার ফলে হৃদ্‌পেশী ও মসৃণ পেশীর স্তরগুলো একযোগে সংকুচিত হতে এবং তাৎক্ষণিক সংকেত বিনিময় করতে সক্ষম হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Membranes and Histophysiological Integration', 'শারীরিক ঝিল্লি ও কলাশারীরবৃত্তীয় সমন্বয়'),
          paragraphs: [
            l(
              'A biological membrane at the anatomical tissue level consists of an epithelial surface sheet anchored to an underlying vascular lamina of connective tissue. Mucous membranes (mucosae) line all hollow tracts that open directly to the exterior, such as the digestive, respiratory, and urogenital passages, secreting lubricating mucin that traps debris. Serous membranes (serosae) line closed internal body cavities, forming double-layered parietal and visceral sacs that secrete slippery serous fluid into potential spaces to prevent friction during dynamic cardiac, pulmonary, and peristaltic motion.',
              'শারীরস্থানিক স্তরে একটি বায়োলজিক্যাল মেমব্রেন হলো একটি এপিথেলিয়াল স্তর এবং তার নিচে সংযুক্ত রক্তনালীযুক্ত কানেক্টিভ টিস্যুর সমন্বয়। মিউকাস মেমব্রেন বা শ্লেষ্মা ঝিল্লি বাইরে উন্মুক্ত সকল নালীর (যেমন পরিপাক, শ্বাস ও রেচন-জনন নালী) ভেতরের আস্তরণ তৈরি করে এবং তৈলাক্ত মিউসিন ক্ষরণ করে। অপরদিকে, সিরাস মেমব্রেন আবদ্ধ দেহগহ্বরগুলোকে আবৃত করে এবং ভিসেরাল ও প্যারাইটাল স্তরের মাঝে পিচ্ছিল সিরাস তরল ক্ষরণ করে, যা হৃদ্‌স্পন্দন ও ফুসফুসের প্রসারণের সময় ঘর্ষণ প্রতিরোধ করে।'
            ),
            l(
              'Cutaneous membrane (the skin) represents a unique, dry, keratinized stratified squamous epithelium supported by a dense irregular collagenous dermis, providing an impenetrable barrier against desiccation and mechanical trauma. Synovial membranes differ fundamentally by lacking a true epithelial lining, instead utilizing specialized synoviocytes within vascular connective tissue to generate hyaluronic-acid-rich synovial fluid that lubricates freely movable diarthrodial joints.',
              'কিউটেনিয়াস মেমব্রেন বা ত্বক হলো একটি শুষ্ক, কেরাটিনযুক্ত যৌগিক আঁইশাকার আবরণী কলা যা ঘন অনিয়মিত কোলাজেনাস ডার্মিসের ওপর প্রতিষ্ঠিত এবং পানিশূন্যতা ও যান্ত্রিক আঘাতের বিরুদ্ধে কাজ করে। সাইনোভিয়াল মেমব্রেন কোনো সাধারণ এপিথেলিয়াল স্তর ছাড়াই বিশেষায়িত সাইনোভিয়োসাইটের মাধ্যমে হায়ালুরোনিক অ্যাসিড সমৃদ্ধ সাইনোভিয়াল তরল ক্ষরণ করে অস্থিসন্ধির সাবলীল চলন নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Worked Histological Identification and Visual Analysis', 'কলাস্থানিক নমুনা শনাক্তকরণ ও দৃশ্যমান বিশ্লেষণ'),
          paragraphs: [
            l(
              'When examining a histology section under brightfield microscopy, systematic deduction begins with cellularity and nuclear arrangement. If nuclei are densely packed in single or stratified layers abutting a clear luminal surface with no intervening capillaries, the tissue is epithelial. The shape of cells at the free apical surface dictates classification: flat scale-like nuclei indicate squamous epithelium; spherical central nuclei define cuboidal epithelium; and elongated basal nuclei indicate columnar architecture.',
              'মাইক্রোস্কোপে কলাস্থানিক নমুনা পরীক্ষার সময় পদ্ধতিগত বিশ্লেষণ শুরু হয় কোষের ঘনত্ব এবং নিউক্লিয়াসের অবস্থান দিয়ে। যদি কোনো রক্তনালীবিহীন স্তরে নিউক্লিয়াসগুলো একক বা স্তরীভূতভাবে কোনো ফাঁকা লুমেনের দিকে মুখ করে সাজানো থাকে, তবে তা আবরণী কলা। শীর্ষীয় কোষের আকার দেখে শ্রেণিবিভাগ করা হয়: চ্যাপ্টা নিউক্লিয়াস আঁইশাকার, গোলাকার কেন্দ্রস্থ নিউক্লিয়াস ঘনকাকার এবং দীর্ঘায়িত ডিম্বাকার নিউক্লিয়াস স্তম্ভাকার এপিথেলিয়াম নির্দেশ করে।'
            ),
          ],
          bullets: [
            l('Check: How do you distinguish simple squamous endothelium from simple squamous mesothelium? Answer: Endothelium lines blood and lymphatic vessel lumina, whereas mesothelium lines closed peritoneal, pleural, and pericardial serous cavities.', 'যাচাই: সরল আঁইশাকার এন্ডোথেলিয়াম ও মেসোথেলিয়ামের পার্থক্য কীভাবে করবেন? উত্তর: এন্ডোথেলিয়াম রক্ত ও লসিকানালীর ভেতরে থাকে, আর মেসোথেলিয়াম আবদ্ধ পেরিটোনিয়াল, প্লুরাল ও পেরিকার্ডিয়াল সিরাস গহ্বর আবৃত করে।'),
            l('Check: Why does cartilage heal extremely slowly after injury? Answer: Mature cartilage is entirely avascular, requiring chondrocytes to obtain all nutrients via slow diffusion through dense proteoglycan matrix.', 'যাচাই: আঘাতের পর তরুণাস্থি অত্যন্ত ধীরে সেরে ওঠে কেন? উত্তর: পরিণত তরুণাস্থি সম্পূর্ণ রক্তনালীহীন, ফলে ঘন প্রোটিওগ্লাইকান মাতৃকার মধ্য দিয়ে ব্যাপনের মাধ্যমে পুষ্টি পৌঁছাতে দীর্ঘ সময় লাগে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary of Cellular and Tissue Principles', 'কোষীয় ও টিস্যু নীতির সারসংক্ষেপ'),
          paragraphs: [
            l(
              'The four primary tissue types collaborate within layered arrangements to construct functional organs. Epithelia govern selective boundaries and secretion; connective tissues provide mechanical scaffolding, vascular support, and immunological defense; muscle tissue provides dynamic contractile movement; and nervous tissue orchestrates systemic electrochemical communication. Tight junctions maintain compartmental segregation, desmosomes resist shear, and gap junctions coordinate metabolic and electrical synchrony. Recognizing these microscopic principles enables rigorous comprehension of organ pathology, pharmacology, and wound healing.',
              'চারটি মৌলিক টিস্যু শ্রেণি অঙ্গের অভ্যন্তরে সুশৃঙ্খল স্তরে বিন্যস্ত হয়ে কাজ সম্পাদন করে। এপিথেলিয়াম নির্বাচনী প্রাচীর ও ক্ষরণ নিয়ন্ত্রণ করে; কানেক্টিভ টিস্যু কাঠামোগত ভিত্তি, রক্ত সরবরাহ ও প্রতিরক্ষা দেয়; পেশী কলা গতি সঞ্চার করে; এবং স্নায়ু কলা সামগ্রিক যোগাযোগ রক্ষা করে। টাইট জাংশন বিভাজন রক্ষা করে, ডেসমোজোম টান প্রতিরোধ করে এবং গ্যাপ জাংশন সংকেত আদান-প্রদান করে। এই আণবিক নীতিগুলো বোঝা প্যাথলজি, ফার্মাকোলজি এবং ক্ষত নিরাময়ের ভিত্তি তৈরি করে।'
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
          heading: l('Embryological Germ Layers and Tissue Differentiation', 'ভ্রূণীয় জার্ম স্তর ও টিস্যুর বিভেদন প্রক্রিয়া'),
          paragraphs: [
            l(
              'During early mammalian gastrulation, the epiblast gives rise to the three primordial germ layers—ectoderm, mesoderm, and endoderm—from which all definitive adult tissues diverge. Epithelial tissue possesses the unique distinction of originating from all three germ layers: ectoderm yields the cutaneous epidermis and oral epithelium; endoderm forms the lining of the gastrointestinal and respiratory tracts; and mesoderm gives rise to vascular endothelium, serous mesothelium, and the urogenital epithelium. In contrast, connective and muscle tissues derive predominantly from mesoderm, while nervous tissue originates strictly from neuroectoderm and neural crest populations.',
              'স্তন্যপায়ী প্রাণীর গ্যাস্ট্রুলেশন চলাকালে এপিব্লাস্ট থেকে তিনটি প্রাথমিক ভ্রূণীয় স্তর—এক্টোডার্ম, মেসোডার্ম ও এন্ডোডার্ম—সৃষ্টি হয়, যা থেকে প্রাপ্তবয়স্কের সকল টিস্যু বিভেদিত হয়। আবরণী কলার অনন্য বৈশিষ্ট্য হলো এটি তিনটি স্তর থেকেই তৈরি হতে পারে: এক্টোডার্ম থেকে ত্বক ও মুখের এপিথেলিয়াম; এন্ডোডার্ম থেকে পরিপাক ও শ্বাসনালীর ভেতরের আস্তরণ; এবং মেসোডার্ম থেকে রক্তনালীর এন্ডোথেলিয়াম, সিরাস মেসোথেলিয়াম ও জনন-রেচন এপিথেলিয়াম উৎপন্ন হয়। অন্যদিকে, সংযোজক ও পেশী কলা প্রধানত মেসোডার্ম থেকে এবং স্নায়ু কলা নিউরোএক্টোডার্ম থেকে তৈরি হয়।'
            ),
            l(
              'Tissue homeostasis requires tightly regulated equilibrium between adult stem cell proliferation, lineage commitment, and programmed cell death (apoptosis). In labile tissues such as intestinal crypts and the epidermal basal stratum, multipotent stem cells continuously divide to replenish shedding surface cells. In stable tissues like hepatic parenchyma, differentiated cells remain arrested in G0 but retain proliferative capacity following tissue injury. Permanent tissues, notably adult cardiac myocytes and central nervous system neurons, possess virtually negligible regenerative capacity, responding to lethal insults predominantly through fibrous cicatrization.',
              'টিস্যুর সুস্থতা স্টেম কোষের বিভাজন, রূপান্তর এবং পরিকল্পিত কোষমৃত্যুর (অ্যাপোপটোসিস) সুষম ভারসাম্যের ওপর নির্ভরশীল। অন্ত্রের ক্রিপ্ট বা ত্বকের বেসাল স্তরের মতো পরিবর্তনশীল টিস্যুতে স্টেম কোষগুলো অবিরাম বিভাজিত হয়ে ক্ষয়প্রাপ্ত কোষ প্রতিস্থাপন করে। যকৃতের মতো স্থিতিশীল টিস্যুর কোষগুলো সাধারণ অবস্থায় বিভাজিত না হলেও আঘাত পেলে পুনরায় বিভাজনে অংশ নিতে পারে। কিন্তু স্থায়ী টিস্যু, বিশেষ করে প্রাপ্তবয়স্কের হৃদ্‌পেশী ও কেন্দ্রীয় স্নায়ুতন্ত্রের নিউরন, আঘাতের পর পুনর্গঠিত হতে পারে না এবং ফাইব্রাস স্কার বা ক্ষতের দাগ তৈরি করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Histological Classification of Epithelia and Connective Stroma', 'আবরণী ও সংযোজক কলার কলাস্থানিক শ্রেণিবিন্যাস'),
          paragraphs: [
            l(
              'Epithelial classification rigorously distinguishes layer count and apical morphology. Simple epithelia comprise a single cell layer anchored to the basal lamina, optimized for passive diffusion (simple squamous in renal Bowman capsules and pulmonary alveoli), regulated absorption and secretion (simple cuboidal in renal tubules; simple columnar with microvillar brush border in intestinal villi), or particulate transport (pseudostratified ciliated columnar in upper respiratory airways). Stratified epithelia withstand relentless mechanical abrasion: stratified squamous non-keratinized coats wet oropharyngeal and vaginal mucosal barriers, whereas heavily keratinized stratified squamous builds the waterproof stratum corneum of dry skin.',
              'আবরণী কলার শ্রেণিবিভাগ স্তরের সংখ্যা ও শীর্ষীয় কোষের আকারের ওপর সুনির্দিষ্টভাবে নির্ভরশীল। সরল আবরণী কলা একক স্তরে ভিত্তিঝিল্লির ওপর বসে থাকে এবং ব্যাপন (বৃক্কের বোম্যান্স ক্যাপসুল ও অ্যালভিওলাইয়ে সরল আঁইশাকার), শোষণ ও ক্ষরণ (রেনাল টিউবিউলে ঘনকাকার; অন্ত্রের ভিলাইয়ে ব্রাশ বর্ডারযুক্ত স্তম্ভাকার) বা কণা পরিবহনে (শ্বাসনালীর সিলিয়াযুক্ত সিউডোস্ট্র্যাটিফাইড) অংশ নেয়। যৌগিক স্তর ঘর্ষণ সহ্য করে: কেরাটিনবিহীন স্তর ওরোফ্যারিংস ও যোনিপথের মতো ভেজা স্থানকে রক্ষা করে, আর কেরাটিনযুক্ত স্তর ত্বকের পানিনিরোধক বহিরাবরণ তৈরি করে।'
            ),
            l(
              'Connective tissue comprises cellular effectors (fibroblasts, adipocytes, macrophages, mast cells) suspended within an extracellular matrix composed of fibrillar proteins and hydrated ground substance. Collagen fibers provide immense tensile strength: Type I dominates bone, tendon, and dermis; Type II composes hyaline and elastic cartilage; Type III forms fine reticular scaffolds supporting lymphoid organs; and Type IV forms meshworks within basal laminae. Ground substance consists of hydrophilic glycosaminoglycans (hyaluronic acid, chondroitin sulfate) covalently linked to core proteins as proteoglycans (aggrecan, syndecan), resisting compressive deformation.',
              'সংযোজক কলা বিভিন্ন কোষ (ফাইব্রোব্লাস্ট, এডিপোসাইট, ম্যাক্রোফেজ, মাস্ট সেল) এবং প্রোটিন তন্তু ও গ্রাউন্ড সাবস্ট্যান্স নিয়ে গঠিত। কোলাজেন তন্তু অসাধারণ যান্ত্রিক টান সহ্য করে: টাইপ I অস্থি, টেন্ডন ও ত্বকে প্রধান; টাইপ II তরুণাস্থিতে থাকে; টাইপ III লিম্ফয়েড অঙ্গের রেটিকুলার জালক গঠন করে; এবং টাইপ IV ভিত্তিঝিল্লির ভিত্তিপ্রস্তর স্থাপন করে। গ্রাউন্ড সাবস্ট্যান্সে থাকা গ্লাইকোসামিনোগ্লাইকান ও প্রোটিওগ্লাইকান প্রচুর পানি ধরে রেখে টিস্যুর ওপর আসা সংকোচনজনিত চাপ প্রতিহত করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Molecular Organization of the Junctional Complex and Cytoskeleton', 'জাংশনাল কমপ্লেক্স ও সাইটোস্কেলেটনের আণবিক সংগঠন'),
          paragraphs: [
            l(
              'The classic apical junctional complex consists of zonula occludens, zonula adherens, and macula adherens arranged sequentially from apical to basal poles. Zonula occludens depends upon claudin and occludin transmembrane proteins interacting with cytoplasmic scaffolding zonula occludens proteins (ZO-1, ZO-2), which physically tether the junction to perijunctional actin filaments. Phosphorylation of myosin light chains by MLC kinase alters perijunctional actomyosin tension, regulating paracellular permeability to solutes, electrolytes, and water.',
              'শীর্ষীয় জাংশনাল কমপ্লেক্সে জোনুলা অকলুডেন্স, জোনুলা অ্যাডহেরেন্স এবং ম্যাকুলা অ্যাডহেরেন্স উপর থেকে নিচে ধারাবাহিকভাবে সজ্জিত থাকে। জোনুলা অকলুডেন্স ক্লডিন ও অকলুডিন প্রোটিনের ওপর নির্ভরশীল যা সাইটোপ্লাজমীয় ZO-1 ও ZO-2 প্রোটিনের মাধ্যমে অ্যাক্টিন ফিলামেন্টের সাথে যুক্ত থাকে। মায়োসিন লাইট চেইন কাইনেজের মাধ্যমে এই অ্যাক্টোমায়োসিন ফিলামেন্টের সংকোচন-প্রসারণ নিয়ন্ত্রিত হয়, যা কোষের মধ্যবর্তী আয়ন ও তরলের ব্যাপন মাত্রা নির্ধারণ করে।'
            ),
            l(
              'Maculae adherentes (desmosomes) utilize non-classical cadherin family desmosomal cadherins—desmogleins (DSG1–4) and desmocollins (DSC1–3)—that bridge the 30 nm intercellular space. Intracellularly, these cadherins insert into an electron-dense plaque containing plakoglobin, plakophilin, and desmoplakin, which anchors thick bundles of intermediate filaments (keratin tonofilaments in epithelia; desmin in myocardium). Hemidesmosomes at the basal cell border functionally mirror this arrangement, utilizing alpha-6 beta-4 integrin heterodimers to tether cytoplasmic tonofilaments to laminin-332 within the lamina lucida of the basal lamina.',
              'ডেসমোজোমে ডেসমোগ্লিন ও ডেসমোকোলিন নামক ক্যাডেরিন প্রোটিন থাকে যা ৩০ ন্যানোমিটারের আন্তঃকোষীয় দূরত্ব অতিক্রম করে কোষগুলোকে আটকে রাখে। কোষের ভেতরে এরা প্লাকোগ্লোবিন ও ডেস্মোপ্ল্যাকিন প্রোটিনের প্লেটে নোঙর ফেলে এবং কেরাটিন টোনোফিলামেন্টের সাথে যুক্ত হয়। ভিত্তিঝিল্লির দিকে হেমিডেসমোজোম আলফা-৬ বিটা-৪ ইন্টিগ্রিনের মাধ্যমে কোষের সাইটোস্কেলেটনকে ল্যামিনিন-৩৩২ এর সাথে দৃঢ়ভাবে সংযুক্ত করে আবরণী কলাকে নিচের স্তরে ধরে রাখে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Comparative Functional Histophysiology of Membranes', 'ঝিল্লিসমূহের তুলনামূলক কার্যকরী কলাশারীরবৃত্ত'),
          paragraphs: [
            l(
              'Serous membranes (pleura, pericardium, peritoneum) exemplify dynamic fluid homeostasis governed by Starling capillary forces. The parietal serosa receives arterial blood from systemic arteries (intercostal, internal thoracic, lumbar branches) with higher microvascular filtration pressures, continuously generating transudate into the serous cavity. The visceral serosa, in contrast, drains into lower-pressure venous or portal systems with extensive subserosal lymphatics, continually reabsorbing excess fluid to maintain a lubricating film of less than 15–50 mL. Impairment of this hydrodynamic balance precipitates clinical effusions.',
              'সিরাস ঝিল্লি (প্লুরা, পেরিকার্ডিয়াম, পেরিটোনিয়াম) স্টার্লিং বলের মাধ্যমে গতিশীল তরল ভারসাম্য রক্ষা করে। প্যারাইটাল সিরাস উচ্চচাপের সিস্টেমিক ধমনী থেকে রক্ত পেয়ে সিরাস তরল ফিল্টার করে গহ্বরে পাঠায়। বিপরীতে, ভিসেরাল স্তর নিম্নচাপের ভেনাস ও লিম্ফ্যাটিক ব্যবস্থার মাধ্যমে এই তরল ক্রমাগত পুনঃশোষণ করে গহ্বরে মাত্র ১৫-৫০ মিলি পিচ্ছিল তরল বজায় রাখে। এই ভারসাম্যে বিঘ্ন ঘটলেই প্লুরাল বা পেরিকার্ডিয়াল ইফিউশনের মতো রোগ সৃষ্টি হয়।'
            ),
            l(
              'Mucous membranes maintain active immunochemical defenses termed mucosa-associated lymphoid tissue (MALT, including Peyer patches in the ileum). Specialized surface goblet cells continuously synthesize high-molecular-weight gel-forming mucins (MUC2, MUC5AC) that hydrate into a dense viscoelastic hydrogel. Submucosal plasma cells secrete dimeric IgA antibodies that are actively transcytosed across columnar epithelial cells via polymeric immunoglobulin receptors (pIgR) and released into the lumen as secretory IgA (sIgA), neutralizing pathogenic toxins without inciting destructive inflammatory tissue cascades.',
              'মিউকাস ঝিল্লি মিউকোসা-সংলগ্ন লিম্ফয়েড টিস্যু (MALT, যেমন ইলিয়ামের পেয়ার্স প্যাচ)-র মাধ্যমে শক্তিশালী অনাক্রম্যতা রক্ষা করে। গবলেট কোষ থেকে ক্ষরিত মিউসিন প্রোটিন একটি প্রতিরক্ষামূলক জেল তৈরি করে। প্লাজমা কোষ থেকে উৎপন্ন ডাইমেরিক IgA অ্যান্টিবডি এপিথেলিয়াল কোষ ভেদ করে লুমেনে ক্ষরিত হয় এবং ক্ষতিকর জীবাণু ও টক্সিনকে ধ্বংসাত্মক প্রদাহ সৃষ্টি না করেই নিরপেক্ষ করে তোলে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Histopathological Correlation: Metaplasia and Blistering Dermatoses', 'কলাস্থানিক প্যাথলজি: মেটাপ্লাসিয়া ও ফোস্কারোগের সংযোগ'),
          paragraphs: [
            l(
              'Epithelial plasticity is exemplified by Barrett esophagus: chronic gastroesophageal acid reflux exposes distal esophageal stratified squamous epithelium to chemical stress, triggering genetic reprogramming of basal stem cells into mucin-producing simple columnar epithelium with goblet cells (intestinal metaplasia). While this glandular phenotype better withstands gastric acidity, it confers a 30- to 40-fold increased relative risk for esophageal adenocarcinoma development, mandating endoscopic surveillance with targeted biopsies.',
              'আবরণী কলার রূপান্তরের অন্যতম উদাহরণ হলো ব্যারেট খাদ্যনালী: দীর্ঘস্থায়ী গ্যাস্ট্রিক অ্যাসিডের কারণে খাদ্যনালীর নিচের অংশের যৌগিক আঁইশাকার কলা রূপান্তরিত হয়ে মিউসিন-ক্ষরণকারী সরল স্তম্ভাকার অন্ত্রীয় কলায় পরিণত হয় (মেটাপ্লাসিয়া)। যদিও এই নতুন স্তর অ্যাসিডের বিরুদ্ধে কিছুটা প্রতিরোধী, তবে এটি এসোফেজিয়াল অ্যাডেনোকার্সিনোমা ক্যান্সারের ঝুঁকি ৩০ থেকে ৪০ গুণ বাড়িয়ে দেয়, যার ফলে এন্ডোস্কোপিক নজরদারি প্রয়োজন হয়।'
            ),
          ],
          bullets: [
            l('Assessment: In pemphigus vulgaris, IgG autoantibodies target desmoglein-3 (DSG3). What histopathological sign results? Answer: Loss of intercellular cohesion between keratinocytes (acantholysis), causing suprabasilar intraepidermal flaccid blisters.', 'মূল্যায়ন: পেমফিগাস ভালগারিসে অ্যান্টিবডি ডেসমোগ্লিন-৩ কে আক্রমণ করলে কী ঘটে? উত্তর: কেরাটিনোসাইটের মধ্যবর্তী সংযোগ বিচ্ছিন্ন হয়ে (অ্যাক্যান্থোলাইসিস) এপিডার্মিসের অভ্যন্তরে নরম ফোস্কা তৈরি হয়।'),
            l('Assessment: Contrast pemphigus vulgaris with bullous pemphigoid. Answer: Bullous pemphigoid involves autoantibodies targeting hemidesmosomal BP180/BP230 antigens, yielding subepidermal separation and tense, non-flaccid blisters.', 'মূল্যায়ন: পেমফিগাস ভালগারিস ও বুলাস পেমফিগোয়েডের পার্থক্য কী? উত্তর: বুলাস পেমফিগোয়েডে হেমিডেসমোজোমের BP180/BP230 আক্রান্ত হওয়ায় পুরো এপিডার্মিস ভিত্তিঝিল্লি থেকে বিচ্ছিন্ন হয়ে টানটান ফোস্কা তৈরি করে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Academic Concepts and Review Points', 'মূল একাডেমিক ধারণা ও পর্যালোচনামূলক পয়েন্ট'),
          paragraphs: [
            l(
              'Mastery of human histological architecture links molecular cell biology directly to gross regional anatomy. Epithelia form polarized, avascular boundaries anchored by basal laminae; connective tissues provide stromal matrices governed by collagen and proteoglycan composition; excitable muscle cells utilize sarcomeric or smooth-muscle myofilament sliding to generate kinetic force; and nervous tissue coordinates rapid electrotonic circuits. Pathologies as diverse as autoimmune blistering diseases, scurvy, Marfan syndrome, and metastatic carcinoma directly exploit disruptions in these fundamental structural tissue foundations.',
              'মানবদেহের কলাস্থানিক গঠন আণবিক কোষবিজ্ঞানের সাথে স্থূল অ্যানাটমির সরাসরি সংযোগ স্থাপন করে। এপিথেলিয়াম মেরুপ্রবণ রক্তনালীহীন সীমানা তৈরি করে; কানেক্টিভ টিস্যু কোলাজেন ও প্রোটিওগ্লাইকানের মাধ্যমে ভিত্তি দেয়; পেশী কলা ফিলামেন্টের মাধ্যমে শক্তি তৈরি করে; এবং স্নায়ু কলা তড়িৎ সংকেত নিয়ন্ত্রণ করে। অটোইমিউন ফোস্কারোগ, স্কার্ভি, মারফান সিন্ড্রোম এবং ক্যান্সারের বিস্তার এই মৌলিক টিস্যু কাঠামোর বিপর্যয়ের সরাসরি ফল।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'integration',
          heading: l('Epithelial-Mesenchymal Transition (EMT) and Metastatic Oncology', 'এপিথেলিয়াল-মেসেনকাইমাল রূপান্তর (EMT) ও অনকোলজি'),
          paragraphs: [
            l(
              'Epithelial-mesenchymal transition (EMT) is an evolutionary developmental program whereby polarized immotile epithelial cells downregulate junctional adhesion complexes, dissolve the underlying basal lamina, and acquire migratory mesenchymal fibroblastic properties. During physiological embryogenesis (Type 1 EMT), this program drives mesoderm formation and neural crest delamination. In chronic fibroproliferative organ disease (Type 2 EMT), epithelial cells transdifferentiate into matrix-secreting myofibroblasts, driving irreversible pulmonary and renal fibrosis.',
              'এপিথেলিয়াল-মেসেনকাইমাল ট্রানজিশন (EMT) হলো একটি জৈবিক রূপান্তর কর্মসূচি যার মাধ্যমে স্থিতিশীল এপিথেলিয়াল কোষগুলো তাদের জাংশনাল সংযোগ ভেঙে ফেলে ভিত্তিঝিল্লি গলিয়ে ফেলে গতিশীল মেসেনকাইমাল ফাইব্রোব্লাস্টে রূপান্তরিত হয়। ভ্রূণের বিকাশে (টাইপ ১ EMT) এটি মেসোডার্ম ও নিউরাল ক্রেস্ট সৃষ্টি করে। দীর্ঘস্থায়ী ফিব্রোসিস রোগে (টাইপ ২ EMT) এটি মায়োফাইব্রোব্লাস্ট তৈরি করে ফুসফুস ও কিডনির স্থায়ী ক্ষতিসাধন করে।'
            ),
            l(
              'In neoplastic carcinoma progression (Type 3 EMT), master transcription factors including Snail, Slug, Twist, and ZEB1/2 directly repress the E-cadherin (CDH1) promoter while upregulating N-cadherin (CDH2), vimentin, and matrix metalloproteinases (MMP-2, MMP-9). Loss of membranous E-cadherin releases sequestered beta-catenin into the cytoplasm, which translocates to the nucleus to co-activate Wnt/TCF target genes, driving cell motility, vascular intravasation, and distant metastasis. Reversion via mesenchymal-epithelial transition (MET) at secondary organ sites permits colonization, presenting a major pharmacological target for anti-metastatic therapeutics.',
              'ক্যান্সারের অগ্রগতিতে (টাইপ ৩ EMT) স্নেল, টুইস্ট এবং ZEB প্রোটিনসমূহ ই-ক্যাডেরিন জিনকে নিষ্ক্রিয় করে এবং ভিমেণ্টিন ও MMP এনজাইম সক্রিয় করে। ঝিল্লিতে ই-ক্যাডেরিনের অনুপস্থিতিতে মুক্ত বিটা-ক্যাটেনিন নিউক্লিয়াসে গিয়ে Wnt সংকেতের মাধ্যমে কোষের বিচলন ও রক্তনালীতে প্রবেশ ত্বরান্বিত করে, যা ক্যান্সারের দূরবর্তী বিস্তারের (মেটাস্ট্যাসিস) মূল চালিকাশক্তি।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Biomechanical Mechanotransduction and Matrix Remodeling Research', 'বায়োমেকানিক্যাল মেকানো-ট্রান্সডাকশন ও মাতৃকা রূপান্তর গবেষণা'),
          paragraphs: [
            l(
              'Extracellular matrix is no longer viewed as an inert structural gel, but rather as an active mechanical signaling hub. Mechanical strain sensed through cell-surface integrin adhesions activates focal adhesion kinase (FAK) and RhoA-ROCK signaling pathways, tensioning the actin cytoskeleton and regulating nuclear translocation of transcription coactivators YAP (Yes-associated protein) and TAZ. Increased matrix stiffness (measured in kilopascals via atomic force microscopy) alters cellular differentiation, transforming quiescent fibroblasts into contractile, collagen-overproducing myofibroblasts in fibrotic microenvironments and solid tumors.',
              'বহিঃকোষীয় মাতৃকা কেবল নিষ্ক্রিয় কাঠামো নয়, বরং একটি গতিশীল যান্ত্রিক সংকেত কেন্দ্র। কোষপৃষ্ঠের ইন্টিগ্রিন দিয়ে অনুভূত যান্ত্রিক টান ফোকাল অ্যাডহেশন কাইনেজ (FAK) ও RhoA পথের মাধ্যমে অ্যাক্টিন সাইটোস্কেলেটন হয়ে নিউক্লিয়াসের YAP ও TAZ প্রোটিনকে নিয়ন্ত্রণ করে। মাতৃকার কাঠিন্য বেড়ে গেলে সুপ্ত ফাইব্রোব্লাস্ট সংকুচিত মায়োফাইব্রোব্লাস্টে পরিণত হয়ে ফাইব্রোসিস এবং টিউমারের বৃদ্ধি ঘটায়।'
            ),
            l(
              'Genetic connective tissue disorders provide crucial insights into matrix assembly. In Marfan syndrome, mutations in the FBN1 gene encoding fibrillin-1 impair microfibril scaffold formation, disrupting the sequestration of transforming growth factor-beta (TGF-beta) complexes. Excessive bioavailable TGF-beta triggers matrix metalloproteinase-mediated elastolysis within the aortic tunica media, predisposing patients to progressive aortic root dilation and catastrophic dissection. This illustrates how single-molecule alterations in microscopic ECM architecture dictate macroscopic organ failure.',
              'মারফান সিন্ড্রোমে ফিব্রিলিন-১ জিনের মিউটেশন মাইক্রোফাইব্রিল গঠনে ত্রুটি ঘটায়, যার ফলে TGF-বিটা হরমোনের অতিরিক্ত নিঃসরণ ঘটে। এই অনিয়ন্ত্রিত সংকেতের কারণে অ্যাওর্টা বা মহাধমনীর দেওয়ালের ইলাস্টিক তন্তু ভেঙে যায় এবং অ্যানিউরিজম ও প্রাণঘাতী ডিসেকশন সৃষ্টি হয়। এটি প্রমাণ করে যে অণুবীক্ষণিক মাতৃকার একটি মাত্র প্রোটিনের পরিবর্তন কীভাবে একটি সমগ্র অঙ্গের ধ্বংস ডেকে আনতে পারে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-step pathway tracing tissue hierarchy: embryonic germ layer gastrulation, differentiation into four primary tissue lineages, specialized intercellular junction assembly, and integration into body membranes.',
      'টিস্যু ক্রমবিকাশের ৪টি সহজলভ্য ধাপ: ভ্রূণীয় জার্ম স্তর সৃষ্টি, চারটি মৌলিক টিস্যু শ্রেণিতে বিভেদন, বিশেষায়িত কোষ সংযোগ তৈরি এবং শারীরিক ঝিল্লিতে সমন্বয়।'
    ),
    steps: [
      l(
        '1. Embryonic gastrulation establishes ectoderm, mesoderm, and endoderm progenitor lineages.',
        '১. ভ্রূণীয় গ্যাস্ট্রুলেশনের মাধ্যমে এক্টোডার্ম, মেসোডার্ম ও এন্ডোডার্ম আদি স্তর প্রতিষ্ঠিত হয়।'
      ),
      l(
        '2. Lineage commitment generates the four definitive adult tissues: epithelial, connective, muscle, and nervous.',
        '২. নির্দিষ্ট পথে বিভেদনের মাধ্যমে প্রাপ্তবয়স্কের চারটি প্রধান টিস্যু—আবরণী, সংযোজক, পেশী ও স্নায়ু—উৎপন্ন হয়।'
      ),
      l(
        '3. Lateral and basal membrane junctional complexes (tight junctions, desmosomes, hemidesmosomes) establish polarized tissue architecture.',
        '৩. কোষের ঝিল্লিতে জাংশনাল কমপ্লেক্স (টাইট জাংশন, ডেসমোজোম, হেমিডেসমোজোম) তৈরি হয়ে মেরুপ্রবণ কাঠামো দেয়।'
      ),
      l(
        '4. Epithelial sheets pair with connective tissue laminae to form functional mucous, serous, cutaneous, and synovial membranes.',
        '৪. এপিথেলিয়াল স্তর কানেক্টিভ টিস্যুর সাথে মিলিত হয়ে মিউকাস, সিরাস, কিউটেনিয়াস ও সাইনোভিয়াল ঝিল্লি গঠন করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'Which intercellular junctional structure is primarily responsible for preventing the paracellular leakage of digestive enzymes and hydrochloric acid across the gastric mucosal barrier?',
      'পাকস্থলীর মিউকোসায় হাইড্রোক্লোরিক অ্যাসিড ও পাচক এনজাইমের প্যারাসেলুলার ক্ষরণ ঠেকাতে মূলত কোন কোষীয় সংযোগ দায়ী?'
    ),
    options: [
      l('Zonula occludens (Tight junctions)', 'জোনুলা অকলুডেন্স (টাইট জাংশন)'),
      l('Macula adherens (Desmosomes)', 'ম্যাকুলা অ্যাডহেরেন্স (ডেসমোজোম)'),
      l('Gap junctions (Nexus)', 'গ্যাপ জাংশন (নেক্সাস)'),
      l('Hemidesmosomes', 'হেমিডেসমোজোম'),
    ],
    correctIndex: 0,
    explanation: l(
      'Zonula occludens (tight junctions) form continuous anastomosing strands of claudins and occludins that obliterate the intercellular space near the apical margin, establishing a high-resistance barrier against paracellular ion and fluid diffusion.',
      'জোনুলা অকলুডেন্স বা টাইট জাংশন কোষের শীর্ষীয় প্রান্তে ক্লডিন ও অকলুডিন প্রোটিনের মাধ্যমে আন্তঃকোষীয় স্থান সম্পূর্ণ বন্ধ করে দিয়ে এসিড ও এনজাইমের ক্ষতিকারক ব্যাপন সফলভাবে প্রতিরোধ করে।'
    ),
  },
}
