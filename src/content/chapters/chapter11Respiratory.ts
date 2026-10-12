import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch22',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 22: The Respiratory System',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-introduction',
  },
  {
    id: 'guyton-hall-14e',
    authors: 'J. E. Hall, M. E. Hall',
    title: 'Guyton and Hall Textbook of Medical Physiology, 14th edition',
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/guyton-and-hall-textbook-of-medical-physiology/hall/978-0-323-59712-8',
  },
  {
    id: 'moore-anatomy-9e',
    authors: 'A. F. Dalley, A. M. R. Agur',
    title: "Moore's Clinically Oriented Anatomy, 9th edition",
    organization: 'Wolters Kluwer',
    year: 2023,
    url: 'https://shop.lww.com/Moore-s-Clinically-Oriented-Anatomy/p/9781975154066',
  },
  {
    id: 'grays-anatomy-42e',
    authors: 'S. Standring',
    title: "Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd edition",
    organization: 'Elsevier',
    year: 2020,
    url: 'https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0',
  },
  {
    id: 'junqueira-histology-16e',
    authors: 'A. L. Mescher',
    title: "Junqueira's Basic Histology: Text and Atlas, 16th edition",
    organization: 'McGraw-Hill Education',
    year: 2021,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3055',
  },
]

export const chapter11RespiratoryLesson: LessonTopic = {
  id: 'topic.anatomy.respiratory',
  slug: 'respiratory',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('11 · Respiratory Anatomy', '১১ · শ্বাসতন্ত্রের অ্যানাটমি'),
  summary: l(
    'A comprehensive exploration of the human respiratory system: upper and lower airways, laryngeal cartilages and phonation, tracheobronchial arborization, bronchopulmonary segments, alveolar ultrastructure, ventilatory mechanics, and clinical pulmonology.',
    'মানবদেহের শ্বাসতন্ত্রের সামগ্রিক শারীরস্থানিক অধ্যয়ন: উর্ধ্ব ও নিম্ন বায়ুপথ, ল্যারিংসের তরুণাস্থি ও স্বর তৈরি, ট্র্যাকিওব্রঙ্কিয়াল শাখা-প্রশাখা, ব্রঙ্কোপালমোনারি সেগমেন্ট, অ্যালভিওলাসের অণুগঠন, শ্বাসক্রিয়ার বলবিদ্যা এবং ক্লিনিক্যাল পালমোনোলজি।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Contrast the anatomical architecture of the upper respiratory tract (nasal cavity, pharynx, larynx) with the lower respiratory tree (trachea, bronchi, bronchioles, alveoli).',
      'উর্ধ্ব শ্বাসপথ (নাসাগহ্বর, গলবিল, ল্যারিংস) এবং নিম্ন শ্বাসবৃক্ষের (শ্বাসনালি, ব্রঙ্কাই, ব্রঙ্কিওল, অ্যালভিওলাই) গঠনগত বৈশিষ্ট্যের বিশদ তুলনা করতে পারা।'
    ),
    l(
      'Map the 18 to 20 bronchopulmonary segments, describing how tertiary bronchi and pulmonary arteries establish independent, surgically resectable anatomical units.',
      '১৮ থেকে ২০টি ব্রঙ্কোপালমোনারি সেগমেন্টের স্থানিক বিন্যাস চিহ্নিত করতে পারা এবং টারশিয়ারি ব্রঙ্কাস ও পালমোনারি ধমনী কীভাবে অস্ত্রোপচারযোগ্য স্বাধীন ইউনিট গঠন করে তা ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Evaluate alveolar-capillary diffusion mechanics (Type I/II pneumocytes, surfactant, DPPC) and clinical emergencies including tension pneumothorax, foreign body aspiration, and pulmonary embolism.',
      'অ্যালভিওলার-কৈশিক ব্যাপন বলবিদ্যা (টাইপ ১/২ নিউমোসাইট, সারফ্যাক্ট্যান্ট) এবং টেনশন নিউমোথোরাক্স, শ্বাসনালিতে বস্তু আটকে যাওয়া ও পালমোনারি এমবোলিজমের মতো জরুরি ক্লিনিক্যাল পরিস্থিতি মূল্যায়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.cardiovascular'],
  relatedTopicIds: ['topic.anatomy.cells-tissues'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch22', 'moore-anatomy-9e'],
    structure: ['openstax-ap2e-ch22', 'junqueira-histology-16e'],
    mechanism: ['guyton-hall-14e', 'openstax-ap2e-ch22'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'guyton-hall-14e'],
    takeaways: ['openstax-ap2e-ch22', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Upper Airways and the Laryngeal Gateway', 'ভূমিকা: উর্ধ্ব বায়ুপথ ও ল্যারিংসের প্রবেশদ্বার'), sectionId: 'introduction' },
      { id: 'sec-tree', label: l('Tracheobronchial Tree and Bronchopulmonary Segments', 'ট্র্যাকিওব্রঙ্কিয়াল বৃক্ষ ও ব্রঙ্কোপালমোনারি সেগমেন্ট'), sectionId: 'structure' },
      { id: 'sec-alveoli', label: l('Alveolar-Capillary Membrane and Surfactant Biology', 'অ্যালভিওলার-কৈশিক ঝিল্লি ও সারফ্যাক্ট্যান্ট জীববিজ্ঞান'), sectionId: 'mechanism' },
      { id: 'sec-mechanics', label: l('Pleural Dynamics and Ventilatory Biomechanics', 'প্লুরার গতিবিদ্যা ও শ্বাসক্রিয়ার বায়োমেকানিক্স'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Pulmonology: Pneumothorax, Aspiration and PE', 'ক্লিনিক্যাল পালমোনোলজি: নিউমোথোরাক্স, শ্বাসনালিতে বস্তু ও পিই'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary and Respiratory Anatomy Glossary', 'সারসংক্ষেপ ও শ্বাসতন্ত্রের শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Carina & Bronchial Asymmetry', 'শ্বাসনালির ক্যারিনা ও ব্রঙ্কাসের বৈষম্য'),
        definition: l(
          'The internal cartilaginous ridge at the tracheal bifurcation (T4-T5); the right main bronchus is wider, shorter (2.5 cm), and runs more vertically (25°) than the left (5 cm, 45°), making it the primary site for aspirated foreign objects.',
          'শ্বাসনালির দ্বিখণ্ডিত হওয়ার অভ্যন্তরীণ তরুণাস্থিময় খাঁজ (T4-T5); ডান মূল ব্রঙ্কাসটি বাম ব্রঙ্কাসের তুলনায় চওড়া, ছোট (২.৫ সেমি) এবং খাড়া হওয়ায় অসাবধানতাবশত গিলে ফেলা বস্তু প্রায়শই ডান ফুসফুসে প্রবেশ করে।'
        ),
      },
      {
        term: l('Tension Pneumothorax & Needle Thoracostomy', 'টেনশন নিউমোথোরাক্স ও নিডেল থোরাকোস্টমি'),
        definition: l(
          'A life-threatening condition where a one-way pleural tear allows air to enter the pleural space during inspiration without escaping, shifting the mediastinum, kinking the inferior vena cava, and arresting venous return.',
          'একটি প্রাণঘাতী অবস্থা যেখানে প্লুরার একমুখী ছিদ্র দিয়ে প্রতি শ্বাসে বাতাস ঢুকে জমা হতে থাকে কিন্তু বের হতে পারে না; ফলে বক্ষগহ্বরের অঙ্গসমূহ স্থানচ্যুত হয়ে মহাশিরা চেপে ধরে রক্তসংবহন বন্ধ করে দেয়।'
        ),
      },
      {
        term: l('Bronchopulmonary Segment', 'ব্রঙ্কোপালমোনারি সেগমেন্ট'),
        definition: l(
          'The functionally independent anatomical and surgical unit of lung tissue supplied by a single tertiary (segmental) bronchus and segmental branch of the pulmonary artery, enveloped by connective tissue septa.',
          'ফুসফুসের শারীরস্থানিক ও অস্ত্রোপচারযোগ্য স্বাধীন একক যা একটি একক টারশিয়ারি ব্রঙ্কাস এবং পালমোনারি ধমনীর শাখা দ্বারা বায়ু ও রক্ত পায় এবং সংযোজক টিস্যুর পর্দা দ্বারা অন্য অংশ থেকে বিচ্ছিন্ন থাকে।'
        ),
      },
      {
        term: l('Type II Pneumocytes & Dipalmitoylphosphatidylcholine (DPPC)', 'টাইপ-২ নিউমোসাইট ও ডাইপালমিটয়েলফসফাটিডাইলকোলিন (DPPC)'),
        definition: l(
          'Cuboidal alveolar epithelial cells containing lamellar bodies that synthesize and secrete pulmonary surfactant (primarily DPPC), reducing alveolar surface tension to prevent end-expiratory alveolar collapse (atelectasis).',
          'ঘনকাকার অ্যালভিওলার কোষ যা ল্যামেলার বডি থেকে পালমোনারি সারফ্যাক্ট্যান্ট (DPPC) নিঃসরণ করে পৃষ্ঠটান কমিয়ে দেয়, যাতে শ্বাস ছাড়ার সময় ফুসফুসের ক্ষুদ্র বায়ুকোষগুলো চুপসে না যায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Localizing Foreign Body Aspiration in Upright vs. Supine Postures', 'দাঁড়ানো বনাম শোয়া অবস্থায় শ্বাসনালিতে আটকে যাওয়া বস্তুর অবস্থান নির্ণয়'),
        steps: [
          l('Step 1: Identify that the right main bronchus is wider and more vertically oriented than the left, causing >70% of foreign bodies to enter the right lung.', 'ধাপ ১: জেনে নিন ডান মূল ব্রঙ্কাসটি বামটির চেয়ে চওড়া এবং প্রায় সোজা নিচের দিকে নামানো, যার ফলে ৭০ শতাংশের বেশি ক্ষেত্রে খাদ্যকণা বা বস্তু ডান ফুসফুসে যায়।'),
          l('Step 2: If the patient is upright when aspirating, gravity carries the object straight down into the posterior basal segment of the right lower lobe.', 'ধাপ ২: রোগী দাঁড়ানো বা বসা অবস্থায় কোনো বস্তু আটকে গেলে অভিকর্ষের টানে তা সরাসরি ডান ফুসফুসের নিচের লোবের পেছনের বেসাল সেগমেন্টে চলে যায়।'),
          l('Step 3: If the patient is supine (e.g., unconscious, intoxicated, or dental procedure), the object drops posteriorly into the superior segment of the right lower lobe (Nelson segment).', 'ধাপ ৩: রোগী শোয়া বা অচেতন অবস্থায় থাকলে বস্তুটি অভিকর্ষের নিয়মে নিচের লোবের ওপরের সেগমেন্টে (নেলসন সেগমেন্ট) গিয়ে পৌঁছায়।'),
        ],
        conclusion: l('Patient posture at the time of aspiration dictates the exact bronchopulmonary segment involved, directly guiding rigid bronchoscopic extraction and segmentectomy.', 'আঘাতের সময় রোগীর শারীরিক ভঙ্গি ঠিক কোন ব্রঙ্কোপালমোনারি সেগমেন্টে বস্তুটি আটকেছে তা নির্ধারণ করে, যা ব্রঙ্কোস্কোপি করে বস্তু অপসারণের জন্য অপরিহার্য।'),
      },
    ],
    checkpoints: [
      {
        question: l('Why does intrapleural pressure remain subatmospheric (negative, -4 to -7 mmHg) throughout normal quiet respiratory cycles?', 'স্বাভাবিক শান্ত শ্বাসক্রিয়ার সময় প্লুরাল গহ্বরের চাপ সর্বদা বায়ুমণ্ডলীয় চাপের চেয়ে কম (ঋণাত্মক, -৪ থেকে -৭ মিমি পারদ) থাকে কেন?'),
        answer: l('Because of two opposing mechanical elastic vectors: the inward elastic recoil of the lungs pulling away from the chest wall, opposed by the outward spring-like recoil of the thoracic rib cage. The fluid film between the visceral and parietal pleura binds them via surface tension, creating a continuous physiological vacuum.', 'কারণ দুটি বিপরীতমুখী স্থিতিস্থাপক বল পরস্পরকে টানে: ফুসফুস ভেতরের দিকে চুপসে যেতে চায় এবং পাঁজরের বক্ষপ্রাচীর বাইরের দিকে প্রসারিত হতে চায়। এই দুই বিপরীত টানের ফলে মধ্যবর্তী প্লুরাল গহ্বরে এক অবিচ্ছিন্ন শূন্যতা বা ঋণাত্মক চাপ তৈরি হয় যা ফুসফুসকে খোলা রাখে।'),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch11-respiratory-diagram',
    title: l('Interactive Respiratory System & Alveolar Arborization', 'ইন্টারেক্টিভ শ্বাসতন্ত্র ও অ্যালভিওলার বায়ুপথের স্থাপত্য'),
    description: l(
      'Inspect the four primary anatomical zones of the respiratory system: the upper airway and larynx, tracheobronchial arborization, alveolar-capillary blood-air barrier, and the ventilatory pleural pump.',
      'শ্বাসতন্ত্রের চারটি প্রধান শারীরস্থানিক অঞ্চল পরীক্ষা করুন: উর্ধ্ব বায়ুপথ ও ল্যারিংস, শ্বাসনালির বৃক্ষশাখা, অ্যালভিওলার-কৈশিক রক্ত-বায়ু প্রাচীর এবং শ্বাসক্রিয়ার প্লুরাল পাম্প।'
    ),
    disclaimer: l(
      'Respiratory anatomical schematic: select any sector to inspect its cartilaginous scaffolding, airway bifurcations, diffusion barrier microarchitecture, and clinical failure points.',
      'শ্বাসতন্ত্রের চিত্র: যেকোনো অংশ নির্বাচন করে এর তরুণাস্থির কাঠামো, শ্বাসনালির বিভাজন, গ্যাস বিনিময়ের অণুগঠন এবং ক্লিনিক্যাল রোগসমূহ পরীক্ষা করুন।'
    ),
    svgType: 'respiratory-system',
    items: [
      {
        id: 'larynx-trachea',
        label: l('Larynx & Tracheobronchial Tree', 'ল্যারিংস ও ট্র্যাকিওব্রঙ্কিয়াল বৃক্ষ'),
        description: l(
          'Phonation gateway and conducting conduit. Larynx contains 9 cartilages (thyroid, cricoid, epiglottis; paired arytenoids, corniculates, cuneiforms). Trachea contains 16–20 C-shaped hyaline cartilages.',
          'স্বর তৈরির প্রবেশদ্বার ও বায়ুনালি। ল্যারিংসে ৯টি তরুণাস্থি থাকে (থাইরয়েড, ক্রিকয়েড, এপিগ্লটিস ইত্যাদি)। শ্বাসনালি ১৬-২০টি সি-আকৃতির তরুণাস্থি দ্বারা শক্ত রাখা হয় যাতে চুপসে না যায়।'
        ),
        details: l(
          'Recurrent laryngeal nerve innervates all intrinsic laryngeal muscles except cricothyroid. Carina marks bifurcating ridge at T4/T5 into right and left main bronchi.',
          'ক্রিকাইরোইড ছাড়া ল্যারিংসের সমস্ত পেশী রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ু দিয়ে চলে। T4/T5 কশেরুকার কাছে ক্যারিনায় শ্বাসনালি দুই ভাগে বিভক্ত হয়।'
        ),
        sectionId: 'structure',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'segments-lobes',
        label: l('Bronchopulmonary Segments & Lobes', 'ব্রঙ্কোপালমোনারি সেগমেন্ট ও লোবস'),
        description: l(
          'Right lung has 3 lobes (superior, middle, inferior) and 10 segments; left lung has 2 lobes (superior, inferior) with cardiac notch/lingula and 8–10 segments. Functionally independent units.',
          'ডান ফুসফুসে ৩টি লোব ও ১০টি সেগমেন্ট থাকে; বাম ফুসফুসে ২টি লোব, কার্ডিয়াক নচ ও ৮-১০টি সেগমেন্ট থাকে। প্রতিটি সেগমেন্ট নিজস্ব রক্তনালী ও বায়ুপথযুক্ত অস্ত্রোপচারযোগ্য ইউনিট।'
        ),
        details: l(
          'Segmental pulmonary artery travels with tertiary bronchus centrally; intersegmental pulmonary veins run in connective tissue septa peripherally, guiding surgical resection.',
          'পালমোনারি ধমনী ব্রঙ্কাসের সাথে কেন্দ্রে প্রবেশ করে এবং পালমোনারি শিরা পর্দার মধ্য দিয়ে প্রান্তে প্রবাহিত হয়, যা অস্ত্রোপচারের মূল গাইড।'
        ),
        sectionId: 'structure',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'alveolar-membrane',
        label: l('Alveolar-Capillary Gas Exchange Unit', 'অ্যালভিওলার-কৈশিক গ্যাস বিনিময় একক'),
        description: l(
          'Ultra-thin (<0.5 µm) diffusion barrier comprising Type I pneumocytes, fused basal lamina, and capillary endothelium. Type II pneumocytes secrete phospholipid surfactant.',
          '০.৫ মাইক্রোমিটারের চেয়ে পাতলা ব্যাপন প্রাচীর যা টাইপ-১ নিউমোসাইট, ভিত্তিঝিল্লি ও কৈশিক নালীর এন্ডোথেলিয়াম নিয়ে গঠিত। টাইপ-২ কোষ সারফ্যাক্ট্যান্ট নিঃসরণ করে।'
        ),
        details: l(
          'Total surface area of 300–500 million alveoli spans 70–100 m² (size of a tennis court). Surfactant DPPC reduces surface tension to prevent end-expiratory atelectasis.',
          'ফুসফুসের ৩০-৫০ কোটি অ্যালভিওলাই প্রায় ৭০-১০০ বর্গমিটার ক্ষেত্রফল দেয়। সারফ্যাক্ট্যান্ট পৃষ্ঠটান কমিয়ে শ্বাস ছাড়ার পর ফুসফুসকে চুপসে যাওয়া থেকে বাঁচায়।'
        ),
        sectionId: 'mechanism',
        color: '#fef08a',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'pleura-diaphragm',
        label: l('Pleural Cavity & Ventilatory Pump', 'প্লুরাল গহ্বর ও শ্বাসক্রিয়ার পাম্প'),
        description: l(
          'Double-layered serous sac (visceral on lung surface, parietal lining chest wall) with potential pleural space. Dome-shaped diaphragm (phrenic nerve C3, C4, C5) powers 75% of quiet inspiration.',
          'দ্বিস্তরযুক্ত সিরাস থলি যা ফুসফুস ও বক্ষপ্রাচীর আবৃত রাখে। ফ্রেনিক স্নায়ু (C3-C5) দ্বারা চালিত গম্বুজাকৃতি ডায়াফ্রাম স্বাভাবিক শ্বাসের ৭৫% শক্তি জোগায়।'
        ),
        details: l(
          'Costodiaphragmatic recess provides expansion reservoir. Tension pneumothorax collapses the lung and shifts mediastinum; treated with emergency 2nd/5th interspace needle decompression.',
          'কোস্টোডায়াফ্রাগমেটিক রিসেস ফুসফুসের প্রসারণের জায়গা দেয়। টেনশন নিউমোথোরাক্সে ফুসফুস চুপসে গেলে জরুরি নিডেল ডিকম্প্রেশন দিয়ে বাতাস বের করতে হয়।'
        ),
        sectionId: 'integration',
        color: '#fbcfe8',
        svgCoords: { x: 25, y: 210, width: 310, height: 50 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Introduction to Upper Airways and the Laryngeal Gateway', 'ভূমিকা: উর্ধ্ব বায়ুপথ ও ল্যারিংসের প্রবেশদ্বার'),
          paragraphs: [
            l(
              'The respiratory system is responsible for supplying life-sustaining oxygen to systemic blood and eliminating metabolic carbon dioxide produced by cellular respiration. Anatomically divided into the upper respiratory tract (nose, nasal cavity, paranasal sinuses, and pharynx) and lower respiratory tract (larynx, trachea, bronchial tree, and lungs), this system conditions incoming ambient air through warming, humidification, and microscopic filtration before gas exchange occurs.',
              'শ্বাসতন্ত্র মানবদেহের প্রতিটি কোষে অক্সিজেন সরবরাহ এবং কোষীয় শ্বাসক্রিয়ার ফলে তৈরি ক্ষতিকারক কার্বন ডাই-অক্সাইড বের করে দেওয়ার মূল ব্যবস্থা। এটি উর্ধ্ব শ্বাসপথ (নাক, নাসাগহ্বর, সাইনাস ও গলবিল) এবং নিম্ন শ্বাসপথ (ল্যারিংস, শ্বাসনালি, ব্রঙ্কাই ও ফুসফুস)—এই দুই ভাগে বিভক্ত। গ্যাস বিনিময়ের আগে এই বায়ুপথ বাতাসকে উত্তপ্ত, আর্দ্র এবং ধূলিকণা ছেঁকে পুরোপুরি বিশুদ্ধ করে তোলে।'
            ),
            l(
              'The larynx (voice box) serves as the gatekeeper connecting the laryngopharynx with the trachea. Composed of nine cartilages (unpaired thyroid, cricoid, and epiglottis; paired arytenoid, corniculate, and cuneiform), the larynx performs two critical functions: its spoon-shaped epiglottis folds downward during swallowing to divert food into the esophagus, preventing tracheal aspiration, while its vocal folds (true vocal cords) adduct and vibrate under expired airflow to produce phonation.',
              'ল্যারিংস বা স্বরযন্ত্র হলো গলবিলের সাথে শ্বাসনালির সংযোগকারী প্রবেশদ্বার। নয়টি তরুণাস্থি নিয়ে গঠিত ল্যারিংসের দুটি প্রধান কাজ: খাবার গেলার সময় এর এপিগ্লটিস নামক ঢাকনাটি শ্বাসনালির মুখ ঢেকে খাবারকে অন্ননালিতে পাঠিয়ে দেয় যাতে খাদ্যকণা ফুসফুসে না ঢোকে, এবং এর ভেতরের ভোকাল কর্ড বাতাস চলাচলের সময় কেঁপে উঠে মিষ্টি কণ্ঠস্বর ও ধ্বনি তৈরি করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Tracheobronchial Tree and Bronchopulmonary Segments', 'ট্র্যাকিওব্রঙ্কিয়াল বৃক্ষ ও ব্রঙ্কোপালমোনারি সেগমেন্ট'),
          paragraphs: [
            l(
              'The trachea (windpipe) is a flexible fibrocartilaginous tube roughly 10 to 12 cm long and 2 cm in diameter extending from the cricoid cartilage (C6) down to the sternal angle (T4-T5 vertebra). Its anterior and lateral walls are supported by 16 to 20 C-shaped hyaline cartilage rings that prevent collapse during negative-pressure inspiration, while its posterior fibromuscular wall contains the trachealis muscle, which relaxes to permit esophageal expansion during swallowing of a food bolus.',
              'শ্বাসনালি (Trachea) হলো ১০-১২ সেন্টিমিটার লম্বা এবং ২ সেন্টিমিটার চওড়া একটি নমনীয় নল যা ঘাড়ের ক্রিকয়েড তরুণাস্থি (C6) থেকে বুকের স্টার্নাল অ্যাঙ্গেল (T4-T5) পর্যন্ত বিস্তৃত। এর সম্মুখ প্রাচীর ১৬ থেকে ২০টি সি-আকৃতির তরুণাস্থির আংটা দ্বারা সুরক্ষিত থাকে যাতে শ্বাস নেওয়ার সময় নালিটি চুপসে না যায়, এবং পেছনের মসৃণ ট্র্যাকিয়ালিস পেশী খাবার গেলার সময় অন্ননালিকে সহজে প্রসারিত হতে দেয়।'
            ),
            l(
              'At the carina, the trachea bifurcates into the right and left primary (main) bronchi. The right main bronchus is wider, shorter (2.5 cm), and runs more vertically than the left main bronchus, which is narrower, longer (5 cm), and courses at an acute angle beneath the aortic arch. Consequently, foreign bodies aspirated by children and adults lodge predominantly into the right bronchial tree.',
              'ক্যারিনা নামক স্থানে শ্বাসনালি ডান ও বাম মূল ব্রঙ্কাসে বিভক্ত হয়। ডান ব্রঙ্কাসটি বামটির তুলনায় চওড়া, ছোট (২.৫ সেমি) এবং প্রায় সোজা নিচের দিকে নামানো; অন্যদিকে বাম ব্রঙ্কাসটি তুলনামূলকভাবে সরু ও লম্বা (৫ সেমি) হয়ে মহাধমনীর নিচ দিয়ে যায়। এই গঠনগত পার্থক্যের কারণেই শ্বাসনালিতে অসাবধানতাবশত কোনো বস্তু ঢুকে গেলে তা প্রায় সর্বদা ডান ফুসফুসেই গিয়ে আটকে যায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Alveolar-Capillary Membrane and Surfactant Biology', 'অ্যালভিওলার-কৈশিক ঝিল্লি ও সারফ্যাক্ট্যান্ট জীববিজ্ঞান'),
          paragraphs: [
            l(
              'The functional respiratory zone begins at the respiratory bronchioles, which lead into alveolar ducts and cluster into terminal alveolar sacs comprising approximately 300 to 500 million microscopic alveoli. This massive arborization delivers an expansive surface area of 70 to 100 square meters for passive gas diffusion. The alveolar wall is lined primarily by thin, attenuated Type I pneumocytes (covering 95% of the alveolar surface) specialized for rapid diffusion of oxygen and carbon dioxide across the ultra-thin blood-air barrier (<0.5 µm).',
              'ফুসফুসের মূল কাজের অংশ শুরু হয় রেসপিরেটরি ব্রঙ্কিওল থেকে, যা গিয়ে ৩০ থেকে ৫০ কোটি ক্ষুদ্র অ্যালভিওলাই বা বায়ুকোষে শেষ হয়। এই বিপুল সংখ্যক বায়ুকোষ প্রায় ৭০ থেকে ১০০ বর্গমিটার ক্ষেত্রফল তৈরি করে (একটি টেনিস কোর্টের সমান)। অ্যালভিওলাসের প্রাচীর অত্যন্ত পাতলা টাইপ-১ নিউমোসাইট কোষ দ্বারা আবৃত থাকে, যা ০.৫ মাইক্রোমিটারের চেয়েও সরু রক্তের কৈশিক প্রাচীরের মধ্য দিয়ে গ্যাস বিনিময়ে সহায়তা করে।'
            ),
            l(
              'Scattered among the Type I cells are cuboidal Type II pneumocytes, which synthesize and secrete pulmonary surfactant, a complex mixture of phospholipids (predominantly dipalmitoylphosphatidylcholine, DPPC) and surfactant proteins (SP-A, SP-B, SP-C, SP-D). Surfactant dramatically lowers surface tension at the air-water interface of the alveolar fluid lining. In accordance with the law of Laplace, surfactant stabilizes unequal-sized alveoli, prevents alveolar collapse (atelectasis) at the end of expiration, and reduces the muscular work required to inflate the lungs.',
              'টাইপ-১ কোষের ফাঁকে ফাঁকে ঘনকাকার টাইপ-২ নিউমোসাইট থাকে, যা পালমোনারি সারফ্যাক্ট্যান্ট নামক বিশেষ চর্বিজাতীয় রস (DPPC) তৈরি করে নিঃসরণ করে। সারফ্যাক্ট্যান্ট বায়ুকোষের ভেতরের পানির পৃষ্ঠটান নাটকীয়ভাবে কমিয়ে দেয়। ল্যাপলাসের সূত্র অনুযায়ী এটি শ্বাস ছাড়ার পর ফুসফুসের ক্ষুদ্র বায়ুকোষগুলোকে চুপসে যাওয়া (অ্যাটেলেক্ট্যাসিস) থেকে রক্ষা করে এবং পরবর্তী শ্বাস নেওয়ার জন্য পেশীর শক্তি খরচ বহুলাংশে কমিয়ে দেয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Pleural Dynamics and Ventilatory Biomechanics', 'প্লুরার গতিবিদ্যা ও শ্বাসক্রিয়ার বায়োমেকানিক্স'),
          paragraphs: [
            l(
              'Each lung is enclosed within a closed serous sac formed by the visceral pleura (intimately investing the lung parenchyma and dipping into interlobar fissures) and parietal pleura (lining the thoracic wall, mediastinum, and diaphragm). The potential space between these layers, the pleural cavity, contains approximately 5 to 15 mL of serous pleural fluid that lubricates respiratory movement and generates high surface tension, adhering the lungs to the expanding chest wall.',
              'প্রতিটি ফুসফুস একটি দ্বিস্তরযুক্ত প্লুরাল থলি দ্বারা সুরক্ষিত থাকে যার ভেতরের ভিসেরাল স্তর ফুসফুসের গায়ে সেঁটে থাকে এবং বাইরের প্যারাইটাল স্তর বক্ষপ্রাচীর ও ডায়াফ্রামের সাথে যুক্ত থাকে। এই দুই স্তরের মধ্যবর্তী ফাঁকা স্থানে ৫ থেকে ১৫ মিলি তরল থাকে যা ফুসফুস ওঠানামার ঘর্ষণ কমায় এবং বক্ষপ্রাচীর প্রসারিত হলে ফুসফুসকেও সাথে সাথে টেনে বড় করে তোলে।'
            ),
            l(
              'Pulmonary ventilation is driven by volume and pressure changes governed by Boyle law. Quiet inspiration is an active muscular process powered predominantly by contraction of the dome-shaped diaphragm (innervated by the phrenic nerves, C3-C5), which descends by 1 to 2 cm, assisted by the external intercostal muscles, which elevate the ribs in "bucket-handle" and "pump-handle" motions. This thoracic expansion drops intrapleural pressure from -4 mmHg to -7 mmHg, drawing ambient air into the lungs.',
              'শ্বাসক্রিয়া বয়েলের সূত্রের চাপ ও আয়তনের পরিবর্তনের মাধ্যমে পরিচালিত হয়। স্বাভাবিক শ্বাস নেওয়া একটি সক্রিয় পেশী প্রক্রিয়া যা মূলত গম্বুজাকৃতির ডায়াফ্রামের (ফ্রেনিক স্নায়ু C3-C5 দ্বারা পরিচালিত) সংকোচনের মাধ্যমে ঘটে; ডায়াফ্রাম নিচে নেমে যায় এবং পাঁজরের পেশীগুলো বক্ষপিঞ্জরকে বালতির হাতলের মতো ওপরে তুলে দেয়। বক্ষগহ্বর প্রসারিত হলে প্লুরার চাপ -৪ থেকে -৭ মিমি পারদে নেমে আসে এবং বাইরের বাতাস ফুসফুসে প্রবেশ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Pulmonology: Pneumothorax, Aspiration and PE', 'ক্লিনিক্যাল পালমোনোলজি: নিউমোথোরাক্স, শ্বাসনালিতে বস্তু ও পিই'),
          paragraphs: [
            l(
              'Breach of the thoracic wall or visceral pleura allows atmospheric air into the pleural space, abolishing the negative intrapleural pressure and causing a pneumothorax. In a tension pneumothorax, a one-way tissue flap creates a progressive air trap that shifts the mediastinum to the contralateral side, kinks the inferior vena cava, and arrests venous return, producing severe hypotension, tracheal deviation, and cyanosis. Immediate emergency treatment requires needle thoracostomy in the second intercostal space at the midclavicular line (or fifth interspace at the midaxillary line).',
              'বক্ষপ্রাচীর বা ফুসফুসের পর্দা ছিঁড়ে বাতাস ঢুকে পড়লে নেগেটিভ চাপ নষ্ট হয়ে ফুসফুস চুপসে যায় যাকে নিউমোথোরাক্স বলে। টেনশন নিউমোথোরাক্সে একমুখী ভাল্ভের মতো বাতাস কেবল ভেতরে ঢোকে কিন্তু বের হতে পারে না; ফলে জমা হওয়া বাতাস হৃৎপিণ্ড ও প্রধান শিরা চেপে ধরে রক্ত চলাচল বন্ধ করে দেয়। রোগীর ঘাড়ের শ্বাসনালি বাঁকা হয়ে যায় এবং তৎক্ষণাৎ দ্বিতীয় পাঁজরের ফাঁকে সুঁই ফুটিয়ে বাতাস বের না করলে রোগী মারা যায়।'
            ),
            l(
              'Pulmonary embolism (PE) occurs when a thrombus (predominantly arising from deep vein thrombosis, DVT, in the iliofemoral veins) dislodges, travels through the right cardiac chambers, and impacts within the pulmonary arterial tree. Saddle emboli occluding the pulmonary trunk bifurcation abruptly increase right ventricular afterload, causing acute right heart failure (cor pulmonale) and cardiogenic shock. CT pulmonary angiography (CTPA) represents the diagnostic standard of care.',
              'পালমোনারি এমবোলিজম (PE) হলো পায়ের গভীর শিরা থেকে রক্তের জমাট বাঁধা দলা (DVT) ছুটে এসে ফুসফুসের প্রধান ধমনীর মুখ বন্ধ করে দেওয়া। প্রধান ধমনীর সংযোগস্থলে বড় দলা আটকে গেলে ডান নিলয়ের রক্ত পাম্প করা বন্ধ হয়ে যায় এবং তীব্র হার্ট ফেইলিওর ও শক দেখা দেয়। সিটি পালমোনারি এনজিওগ্রামের (CTPA) মাধ্যমে এই জরুরি রোগটি তাৎক্ষণিকভাবে নির্ণয় করা হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary and Respiratory Anatomy Glossary', 'সারসংক্ষেপ ও শ্বাসতন্ত্রের শব্দকোষ'),
          paragraphs: [
            l(
              'The human respiratory system integrates fluid-flow airway plumbing with a massive microscopic gas-exchange interface and an active neuromuscular bellows pump. Bronchopulmonary segments provide surgically resectable anatomical compartments, while Type II pneumocyte surfactant synthesis maintains alveolar stability across cyclic volume swings. Understanding airway branching, pleural pressure dynamics, and neurovascular pathways is essential for managing critical airway emergencies, chest trauma, and pulmonary diseases.',
              'মানবদেহের শ্বাসতন্ত্র হলো বায়ু পরিবহনের পাইপলাইন, শত শত বর্গমিটারের গ্যাস বিনিময় কেন্দ্র এবং একটি শক্তিশালী পেশীবহুল পাম্পের নিখুঁত সমন্বয়। ব্রঙ্কোপালমোনারি সেগমেন্টগুলো ফুসফুসের অংশবিশেষ কেটে বাদ দেওয়ার সুযোগ দেয় এবং টাইপ-২ কোষের সারফ্যাক্ট্যান্ট বায়ুকোষের স্থিতিশীলতা রক্ষা করে। বায়ুপথের গঠন, প্লুরার চাপের গতিবিদ্যা এবং রক্তনালীর পথ জানা জরুরি শ্বাসকষ্ট ও বক্ষব্যাধির সফল চিকিৎসার মৌলিক ভিত্তি।'
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
          heading: l('Laryngeal Neural Topography and the Recurrent Laryngeal Nerve', 'ল্যারিংসের স্নায়ু সরবরাহ ও রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ুর গতিপথ'),
          paragraphs: [
            l(
              'The intrinsic musculature of the larynx is innervated exclusively by branches of the vagus nerve (cranial nerve X): the superior laryngeal nerve and the recurrent laryngeal nerve (RLN). The external branch of the superior laryngeal nerve innervates only the cricothyroid muscle (the tensor of the vocal folds), while the recurrent laryngeal nerve innervates all remaining intrinsic laryngeal muscles, including the posterior cricoarytenoid, the solitary abductor of the vocal cords.',
              'ল্যারিংসের অভ্যন্তরীণ সমস্ত পেশী ভেগাস স্নায়ুর (দশম ক্রেনিয়াল স্নায়ু) দুটি শাখা দিয়ে নিয়ন্ত্রিত হয়: সুপিরিয়র ল্যারিঞ্জিয়াল স্নায়ু এবং রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ু (RLN)। সুপিরিয়র স্নায়ুর বাইরের শাখাটি কেবল ক্রিকোথাইরয়েড পেশীকে চালায় (যা কর্ড টানটান করে), অন্যদিকে রিকারেন্ট স্নায়ু পোস্টেরিয়র ক্রিকোঅ্যারিটিনয়েডসহ (যা ভোকাল কর্ড খোলার একমাত্র পেশী) বাকি সমস্ত পেশীকে স্নায়ু সংযোগ প্রদান করে।'
            ),
            l(
              'The course of the RLN exhibits striking developmental asymmetry: the left RLN loops beneath the aortic arch distal to the ligamentum arteriosum within the mediastinum before ascending in the tracheoesophageal groove, making it highly vulnerable to compression by mediastinal tumors or aortic aneurysms (Ortner syndrome). The right RLN loops higher, under the right subclavian artery at the root of the neck. Unilateral RLN injury produces vocal cord paralysis in the paramedian position, causing hoarseness and loss of high-pitched voice.',
              'রিকারেন্ট স্নায়ুর গতিপথে অদ্ভুত ভ্রূণীয় বৈষম্য দেখা যায়: বাম স্নায়ুটি বুকের গভীরে মহাধমনীর আর্চের নিচ দিয়ে ঘুরে খাদ্যনালি ও শ্বাসনালির খাঁজ বেয়ে ঘাড়ে ওঠে; ফলে বুকের টিউমার বা মহাধমনীর ফোলায় এটি সহজে চেপে গিয়ে কণ্ঠস্বর ভেঙে যায় (অর্টনার সিন্ড্রোম)। ডান স্নায়ুটি ঘাড়ের গোড়ায় সাবক্ল্যাভিয়ান ধমনীর নিচ দিয়ে ঘোরে। থাইরয়েড অপারেশনের সময় একপাশের স্নায়ু কেটে গেলে ভোকাল কর্ড অচল হয়ে স্থায়ীভাবে গলার স্বর ফ্যাসফেসে হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Bronchopulmonary Segmental Architecture and Surgical Planes', 'ব্রঙ্কোপালমোনারি সেগমেন্টের স্থাপত্য ও সার্জিক্যাল তল'),
          paragraphs: [
            l(
              'The lungs are partitioned into 18 to 20 bronchopulmonary segments (10 in the right lung: 3 superior, 2 middle, 5 inferior; 8 to 10 in the left lung: 4-5 superior, 4-5 inferior). Each segment is an independent pyramid-shaped functional unit with its apex pointing toward the lung hilum and its base at the pleural surface. The segmental tertiary bronchus and intrasegmental pulmonary arterial branch run together centrally along the core of the segment.',
              'ফুসফুস ১৮ থেকে ২০টি ব্রঙ্কোপালমোনারি সেগমেন্টে বিভক্ত (ডানে ১০টি এবং বামে ৮-১০টি)। প্রতিটি সেগমেন্ট একটি স্বাধীন পিরামিডাকার কার্যকরী ইউনিট যার শীর্ষ ফুসফুসের হিলামের দিকে এবং ভিত্তি বাইরের পর্দার দিকে থাকে। সেগমেন্টাল ব্রঙ্কাস এবং পালমোনারি ধমনী একসাথে সেগমেন্টের কেন্দ্রস্থল দিয়ে প্রবেশ করে।'
            ),
            l(
              'In contrast, the pulmonary veins and lymphatic drainage vessels course peripherally within the intersegmental connective tissue septa that delineate adjacent segments. Because these venous tributaries run between segments rather than in their core, surgical thoracic oncologists can perform segmentectomy—anatomically dissecting and resecting a single diseased segment for early-stage non-small cell lung cancer along intersegmental planes without sacrificing healthy adjacent parenchyma or causing venous infarction.',
              'বিপরীতভাবে, পালমোনারি শিরা এবং লসিকানালীগুলো দুটি সেগমেন্টের মধ্যবর্তী সংযোজক টিস্যুর পর্দার ভেতর দিয়ে প্রবাহিত হয়। এই শিরাগুলো পরিধিতে অবস্থান করায় বক্ষব্যাধি শল্যচিকিৎসকরা সুস্থ ফুসফুসের কোনো ক্ষতি না করে কেবল আক্রান্ত সেগমেন্টটিকে পর্দা বরাবর নিখুঁতভাবে কেটে ফেলে দিতে পারেন (সেগমেন্টেক্টমি), যা ফুসফুসের ক্যান্সারের আধুনিক চিকিৎসায় ফুসফুসের কার্যক্ষমতা ধরে রাখতে দারুণ ভূমিকা রাখে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Ultrastructure of the Alveolar-Capillary Diffusion Barrier and Fick Law', 'অ্যালভিওলার-কৈশিক ব্যাপন প্রাচীরের অণুগঠন ও ফিকের সূত্র'),
          paragraphs: [
            l(
              'Gas transfer across the alveolar-capillary barrier is governed by Fick law of diffusion: V_gas = [Area × Diffusion Constant × (P1 - P2)] / Thickness. The blood-air barrier is optimized to maximize diffusion area while minimizing diffusion distance (<0.2 to 0.5 µm), consisting of three fused layers: the cytoplasmic attenuation of Type I alveolar epithelial cells, a fused dual basement membrane (epithelial and endothelial basal laminae), and the capillary endothelial cytoplasm.',
              'অ্যালভিওলার ব্যাপন ফিকের সূত্র মেনে চলে, যেখানে গ্যাস বিনিময়ের হার ক্ষেত্রফল ও চাপের পার্থক্যের সমানুপাতিক কিন্তু দূরত্বের ব্যস্তানুপাতিক। রক্ত-বায়ু প্রাচীরটি ০.২ থেকে ০.৫ মাইক্রোমিটারের চেয়েও পাতলা হয়ে তিনটি সংযুক্ত স্তরে গঠিত: টাইপ-১ কোষের পাতলা সাইটোপ্লাজম, একীভূত ভিত্তিঝিল্লি এবং রক্তনালীর এন্ডোথেলিয়াম।'
            ),
            l(
              'In pathological pulmonary fibrosis, fibroproliferative expansion of the interstitial space thickens the basement membrane beyond 1 to 2 µm, drastically impairing diffusion capacity for oxygen (DLCO), while carbon dioxide diffusion (which is 20 times more soluble in water than oxygen) remains relatively preserved until end-stage disease. Pulmonary surfactant deficiency in premature infants (Neonatal Respiratory Distress Syndrome, NRDS) leads to diffuse microatelectasis and intra-alveolar hyaline membrane formation.',
              'ফুসফুসের ফাইব্রোসিস রোগে এই প্রাচীর ১ থেকে ২ মাইক্রোমিটারের বেশি পুরু হয়ে যায়, যার ফলে রক্তে অক্সিজেন ঢোকার ক্ষমতা (DLCO) মারাত্মক হ্রাস পায়। অকালজাত নবজাতকদের ক্ষেত্রে টাইপ-২ কোষ অপরিণত থাকায় সারফ্যাক্ট্যান্ট তৈরি হয় না (NRDS); ফলে শ্বাস ছাড়লেই বায়ুকোষ চুপসে গিয়ে হায়ালিন মেমব্রেন রোগ সৃষ্টি করে এবং শিশু তীব্র শ্বাসকষ্টে ভোগে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Ventilation-Perfusion (V/Q) Matching and Hypoxic Pulmonary Vasoconstriction', 'ভেন্টিলেশন-পারফিউশন (V/Q) সমতা ও হাইপক্সিক ভাসোকনস্ট্রিকশন'),
          paragraphs: [
            l(
              'Optimal pulmonary gas exchange requires precise matching of alveolar ventilation (V_A ~4.2 L/min) to pulmonary capillary blood flow (Q ~5.0 L/min), yielding an average global V/Q ratio of roughly 0.8. Due to gravity, regional V/Q matching varies down the upright lung: apex alveoli are over-ventilated relative to perfusion (V/Q ~3.3, high PaO2), whereas base alveoli are over-perfused relative to ventilation (V/Q ~0.6, lower PaO2).',
              'ফুসফুসের সর্বোত্তম গ্যাস বিনিময়ের জন্য বাতাস চলাচল (V) এবং রক্তপ্রবাহের (Q) অনুপাত নিখুঁত হওয়া আবশ্যক (গড় অনুপাত প্রায় ০.৮)। অভিকর্ষের কারণে খাড়া ফুসফুসের ওপরের অংশে রক্তপ্রবাহ কম থাকায় V/Q অনুপাত বেশি থাকে (৩.৩), পক্ষান্তরে ফুসফুসের নিচের অংশে রক্তপ্রবাহ বেশি হওয়ায় V/Q অনুপাত কম থাকে (০.৬)।'
            ),
            l(
              'When local alveolar ventilation is compromised by airway obstruction, local PO2 plummets. In unique contrast to systemic arterioles (which dilate in response to hypoxia), pulmonary pre-capillary arterioles respond to regional hypoxia with robust vasoconstriction (Hypoxic Pulmonary Vasoconstriction, HPV). By actively diverting perfusion away from poorly ventilated alveoli toward well-ventilated regions, HPV minimizes physiological shunting and preserves arterial oxygen saturation.',
              'কোনো বায়ুপথ বন্ধ হয়ে অ্যালভিওলাসে অক্সিজেন কমে গেলে পালমোনারি রক্তনালীগুলো শরীরের অন্য অংশের মতো প্রসারিত না হয়ে উল্টো সংকুচিত হয়ে যায় (হাইপক্সিক পালমোনারি ভাসোকনস্ট্রিকশন বা HPV)। এর ফলে নষ্ট বায়ুকোষ থেকে রক্তপ্রবাহ বন্ধ হয়ে ভালো বায়ুকোষের দিকে রক্ত চলে যায়, যা রক্তে অক্সিজেনের মাত্রা স্বাভাবিক রাখতে এক অসাধারণ স্বয়ংক্রিয় প্রতিরোধ ব্যবস্থা।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Pathophysiology of Pulmonary Embolism and McConnell Sign', 'পালমোনারি এমবোলিজমের প্যাথোফিজিওলজি ও ম্যাককনেল সাইন'),
          paragraphs: [
            l(
              'Massive pulmonary embolism impacts the major pulmonary arteries, acutely increasing pulmonary vascular resistance (PVR) and precipitating abrupt right ventricular afterload mismatch. Because the thin-walled right ventricle is unaccustomed to generating systolic pressures above 40–50 mmHg, it dilates acutely, shifting the interventricular septum leftward (the "D-shaped" left ventricle on echocardiography) and impairing left ventricular diastolic filling.',
              'বিশালাকার পালমোনারি এমবোলিজমে রক্ত জমাট বেঁধে ধমনী বন্ধ হলে ডান নিলয়ের রক্ত পাম্প করার বাধা হঠাৎ বেড়ে যায়। পাতলা ডান নিলয় ৪০-৫০ মিমি পারদের বেশি চাপ সহ্য করতে না পেরে হঠাৎ ফুলে ওঠে এবং ইন্টারভেন্ট্রিকুলার সেপ্টামকে বাম দিকে ঠেলে দিয়ে বাম নিলয়ের রক্ত গ্রহণ বাধাগ্রস্ত করে।'
            ),
            l(
              'Bedside transthoracic echocardiography reveals the pathognomonic McConnell sign: severe hypokinesia or akinesia of the mid-free wall of the right ventricle with preserved or hyperdynamic contraction of the right ventricular apex. Patients experience sudden dyspnea, pleuritic chest pain, tachypnea, and hemodynamic instability. Emergent reperfusion via systemic intravenous thrombolysis (tissue plasminogen activator, alteplase) or catheter-directed mechanical thrombectomy is life-saving.',
              'ইকোকার্ডিওগ্রাফিতে ম্যাককনেল সাইন ধরা পড়ে: ডান নিলয়ের মুক্ত প্রাচীর অবশ হয়ে গেলেও শীর্ষভাগ সজোরে সংকুচিত হয়। রোগীর হঠাৎ শ্বাসকষ্ট, বুকে তীব্র ব্যথা ও রক্তচাপ কমে গিয়ে শক দেখা দেয়। জীবন বাঁচাতে তাৎক্ষণিকভাবে রক্ত জমাট গলানোর ওষুধ (Alteplase) বা ক্যাথেটার দিয়ে জমাট রক্ত টেনে বের করা অপরিহার্য।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Academic Principles of Pulmonary Physiology', 'পালমোনারি ফিজিওলজির মূল একাডেমিক নীতি'),
          paragraphs: [
            l(
              'The respiratory system achieves maximal gas exchange efficiency through multiscale branching that culminates in a massive, sub-micron diffusion barrier. Structural integrity relies upon dynamic mechanical balances: negative intrapleural pressure maintained by opposing elastic vectors, alveolar stability secured by DPPC surfactant, and local ventilation-perfusion matching optimized by hypoxic vasoconstriction. Disruption of these anatomical balances produces rapid respiratory failure requiring urgent intervention.',
              'শ্বাসতন্ত্র বহুশাখায় বিভক্ত হয়ে একটি বিশালাকার অথচ উপ-মাইক্রন পাতলা ব্যাপন প্রাচীর গড়ে তোলে। বিপরীতমুখী স্থিতিস্থাপক বলের মাধ্যমে প্লুরার ঋণাত্মক চাপ, সারফ্যাক্ট্যান্ট দিয়ে অ্যালভিওলাসের সুরক্ষা এবং হাইপক্সিক ভাসোকনস্ট্রিকশন দিয়ে রক্তপ্রবাহের সমতা বজায় থাকে। এই শারীরস্থানিক ভারসাম্যে সামান্য বিঘ্ন ঘটলেই মারাত্মক শ্বাসকষ্ট দেখা দেয় যা তাৎক্ষণিক চিকিৎসা দাবি করে।'
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
          heading: l('Ex Vivo Lung Perfusion (EVLP) and Donor Organ Bioengineering', 'এক্স ভিভো লাং পারফিউশন (EVLP) ও ফুসফুস বায়ো-ইঞ্জিনিয়ারিং গবেষণা'),
          paragraphs: [
            l(
              'Lung transplantation represents the definitive therapy for end-stage respiratory failure (idiopathic pulmonary fibrosis, cystic fibrosis, alpha-1 antitrypsin deficiency), but clinical utilization is hindered by the fact that >80% of deceased donor lungs are rejected due to aspiration, pulmonary edema, or mechanical ventilator trauma. Normothermic Ex Vivo Lung Perfusion (EVLP, e.g. the Toronto protocol) has transformed donor utilization by maintaining harvested donor lungs in a protective physiological circuit outside the human body.',
              'ফুসফুস প্রতিস্থাপন হলো ফুসফুস বিকল রোগীদের একমাত্র চূড়ান্ত চিকিৎসা, কিন্তু অঙ্গদানের ৮০ শতাংশ ফুসফুসই পানি জমা বা সংক্রমণের কারণে বাতিল হয়ে যায়। আধুনিক এক্স ভিভো লাং পারফিউশন (EVLP) প্রযুক্তির মাধ্যমে দাতার ফুসফুস শরীরের বাইরে একটি কৃত্রিম মেশিনে রেখে রক্ত ও অক্সিজেন দিয়ে জীবন্ত রাখা হয়।'
            ),
            l(
              'During 4 to 6 hours of normothermic EVLP, acellular hyperoncotic perfusate (Steen solution) is pumped through the pulmonary vasculature while protective mechanical ventilation is maintained. This allows serial assessment of oxygenation capacity (PaO2/FiO2 ratio), airway resistance, and dynamic lung compliance, while enabling targeted therapeutics—such as broad-spectrum antibiotic perfusion, gene delivery via adenoviral vectors expressing anti-inflammatory IL-10, and thrombolysis of microvascular emboli—rehabilitating marginal organs for successful clinical transplantation.',
              'এই মেশিনে ফুসফুসকে কৃত্রিম পুষ্টি দ্রবণ দিয়ে ধুয়ে অ্যান্টিবায়োটিক ও স্টেম সেল প্রয়োগ করে ক্ষতিগ্রস্ত অংশ মেরামত করা হয়। চিকিৎসকরা ফুসফুসের অক্সিজেন ধারণক্ষমতা সরাসরি পরীক্ষা করে প্রায় অকেজো ফুসফুসকেও সম্পূর্ণ সুস্থ ও ব্যবহারযোগ্য করে তোলেন, যা ফুসফুস প্রতিস্থাপনের জন্য অপেক্ষারত রোগীদের জীবনে নতুন আশার আলো জ্বালিয়েছে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Single-Cell RNA Sequencing of Idiopathic Pulmonary Fibrosis (IPF)', 'আইডিওপ্যাথিক পালমোনারি ফাইব্রোসিসে সিঙ্গেল-সেল আরএনএ সিকোয়েন্সিং'),
          paragraphs: [
            l(
              'Idiopathic Pulmonary Fibrosis (IPF) is an unrelenting, fatal progressive interstitial pneumonia characterized by aberrant fibroblastic proliferation and destruction of normal alveolar architecture. Single-cell RNA sequencing (scRNA-seq) of explanted human IPF lungs has resolved the cellular heterogeneity of the fibrotic niche, identifying a transitional population of damaged alveolar epithelial cells termed KRT5-/KRT17+ basaloid-like cells or aberrant basaloid cells.',
              'আইডিওপ্যাথিক পালমোনারি ফাইব্রোসিস (IPF) হলো ফুসফুসের একটি মারাত্মক রোগ যেখানে স্বাভাবিক বায়ুকোষ ধ্বংস হয়ে পুরো ফুসফুস শুকিয়ে শক্ত ফাইব্রাস টিস্যুতে পরিণত হয়। আধুনিক সিঙ্গেল-সেল আরএনএ সিকোয়েন্সিং গবেষণায় দেখা গেছে যে এই রোগে এক বিশেষ ধরনের অস্বাভাবিক ক্ষতিগ্রস্ত এপিথেলিয়াল কোষ তৈরি হয়।'
            ),
            l(
              'These aberrant epithelial cells fail to complete differentiation into functional Type I pneumocytes, remaining trapped in an active senescence state characterized by high expression of markers TP53, CDKN1A, and profibrotic growth factors (TGF-beta-1, CTGF). Furthermore, spatially resolved transcriptomics demonstrates that these senescent basaloid cells directly direct adjacent lung fibroblasts to transdifferentiate into contractile, collagen-overproducing myofibroblasts, uncovering novel therapeutic targets for antifibrotic small-molecule inhibitors.',
              'এই রোগাক্রান্ত কোষগুলো সুস্থ কোষে রূপান্তরিত হতে না পেরে বার্ধক্যে আটকে থাকে এবং ক্ষতিকারক TGF-বিটা গ্রোথ ফ্যাক্টর নিঃসরণ করে চারপাশের কোষগুলোকে কোলাজেন তৈরি করতে বাধ্য করে। এই ত্রুটিপূর্ণ আণবিক পথগুলো শনাক্ত করার মাধ্যমে আধুনিক চিকিৎসাবিজ্ঞানে ফুসফুসের ফাইব্রোসিস চিরতরে থামিয়ে দেওয়ার জন্য উন্নত টার্গেটেড থেরাপি আবিষ্কারের কাজ চলছে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-step schematic tracing respiratory system organization: upper airway conducting conduits, tracheobronchial arborization, alveolar-capillary diffusion membrane, and the pleural pump.',
      'শ্বাসতন্ত্রের শারীরস্থানের ৪টি সহজলভ্য ধাপ: উর্ধ্ব বায়ুপথের নল, শ্বাসনালির বৃক্ষশাখা, অ্যালভিওলার-কৈশিক ব্যাপন পর্দা এবং প্লুরাল শ্বাসক্রিয়া পাম্পের বিন্যাস।'
    ),
    steps: [
      l(
        '1. The nasal cavity and larynx filter, humidify, and route ambient air past the protective epiglottis.',
        '১. নাসাগহ্বর ও ল্যারিংস বাতাসকে ছেঁকে ও আর্দ্র করে এপিগ্লটিসের পাশ দিয়ে শ্বাসনালিতে পাঠায়।'
      ),
      l(
        '2. The trachea and branching bronchial tree funnel inspired air into 18 to 20 independent bronchopulmonary segments.',
        '২. শ্বাসনালি ও ব্রঙ্কাই বাতাসকে ১৮ থেকে ২০টি স্বাধীন ব্রঙ্কোপালমোনারি সেগমেন্টে পৌঁছে দেয়।'
      ),
      l(
        '3. 300 to 500 million alveoli deploy Type I and Type II pneumocytes across a sub-micron diffusion barrier.',
        '৩. ৩০-৫০ কোটি বায়ুকোষ টাইপ-১ ও টাইপ-২ নিউমোসাইটের সাহায্যে অতি-পাতলা প্রাচীর দিয়ে রক্তে অক্সিজেন দেয়।'
      ),
      l(
        '4. The diaphragm and intercostal muscles drive negative-pressure intrapleural changes powering pulmonary ventilation.',
        '৪. ডায়াফ্রাম ও পাঁজরের পেশী প্লুরার ঋণাত্মক চাপ পরিবর্তন করে ফুসফুসে বাতাস টেনে আনে ও বের করে দেয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A toddler accidentally swallows a small round plastic bead while playing and begins coughing violently. Bronchoscopy confirms that the bead has lodged into the tracheobronchial tree. In which bronchus is the aspirated foreign body most likely located?',
      'একটি শিশু খেলার সময় একটি প্লাস্টিকের পুতি গিলে ফেলে এবং প্রচণ্ড কাশতে শুরু করে। ব্রঙ্কোস্কোপিতে দেখা গেল পুতিটি শ্বাসনালিতে আটকে গেছে। শারীরস্থানিক নিয়মে পুতিটি কোন ব্রঙ্কাসে আটকে থাকার সম্ভাবনা সবচেয়ে বেশি?'
    ),
    options: [
      l('Right main bronchus', 'ডান মূল ব্রঙ্কাস (Right main bronchus)'),
      l('Left main bronchus', 'বাম মূল ব্রঙ্কাস (Left main bronchus)'),
      l('Left superior lobar bronchus', 'বাম উর্ধ্ব লোবার ব্রঙ্কাস'),
      l('Tracheal bifurcation above the carina', 'ক্যারিনার ওপরে শ্বাসনালি'),
    ],
    correctIndex: 0,
    explanation: l(
      'The right main bronchus is wider, shorter (approx. 2.5 cm), and courses more vertically (approx. 25-degree angle from the vertical tracheal axis) than the left main bronchus (approx. 5 cm, 45-degree angle). Consequently, aspirated foreign bodies preferentially enter the right bronchial tree in over 70% of clinical cases.',
      'ডান মূল ব্রঙ্কাসটি বাম ব্রঙ্কাসের তুলনায় উল্লেখযোগ্যভাবে চওড়া, ছোট (২.৫ সেমি) এবং প্রায় সোজা নিচের দিকে নামানো (২৫ ডিগ্রি কোণে)। পক্ষান্তরে বাম ব্রঙ্কাসটি লম্বা (৫ সেমি) ও বাঁকানো (৪৫ ডিগ্রি)। ফলে শ্বাসনালিতে আটকে যাওয়া যেকোনো বস্তু ৭০ শতাংশের বেশি ক্ষেত্রে ডান ব্রঙ্কাসেই গিয়ে প্রবেশ করে।'
    ),
  },
}
