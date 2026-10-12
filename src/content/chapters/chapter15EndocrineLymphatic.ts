import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch17-21',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapters 17 & 21: The Endocrine System & The Lymphatic/Immune System',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-introduction',
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
    id: 'guyton-hall-14e',
    authors: 'J. E. Hall, M. E. Hall',
    title: 'Guyton and Hall Textbook of Medical Physiology, 14th edition',
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/guyton-and-hall-textbook-of-medical-physiology/hall/978-0-323-59712-8',
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

export const chapter15EndocrineLymphaticLesson: LessonTopic = {
  id: 'topic.anatomy.endocrine-lymphatic',
  slug: 'endocrine-lymphatic',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('15 · Endocrine and Lymphatic Anatomy', '১৫ · অন্তঃস্রাবী ও লসিকাতন্ত্রের অ্যানাটমি'),
  summary: l(
    'A comprehensive, clinically oriented exploration of the human endocrine and lymphoid systems: the hypothalamic-hypophyseal portal axis, thyroid-parathyroid topography, adrenal cortex zonation, splenic red/white pulp architecture, lymph node microcompartments, thoracic duct dynamics, and immune-endocrine emergencies.',
    'মানবদেহের অন্তঃস্রাবী ও লসিকাতন্ত্রের বিশদ ও ক্লিনিক্যাল শারীরস্থানিক অধ্যয়ন: হাইপোথ্যালামিক-পিটুইটারি পোর্টাল অক্ষ, থাইরয়েড-প্যারাথাইরয়েডের অবস্থান, অ্যাড্রেনাল কর্টেক্সের জোনসমূহ, প্লীহার লাল ও সাদা মজ্জার গঠন, লিম্ফ নোডের অণুগঠন, থোরাসিক ডাক্টের গতিপথ এবং ইমিউনো-এন্ডোক্রাইন জরুরি ক্লিনিক্যাল অবস্থা।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Map the hypothalamic-pituitary structural axis (adenohypophysis, neurohypophysis, hypophyseal portal veins) and correlate sella turcica expansion with visual field defects.',
      'হাইপোথ্যালামিক-পিটুইটারি গঠনগত অক্ষ (অ্যাডিনোহাইপোফাইসিস, নিউরোহাইপোফাইসিস, পোর্টাল শিরা) মানচিত্রে চিহ্নিত করা এবং সেলা টারসিকার বৃদ্ধির সাথে দৃষ্টিসীমা হ্রাসের সম্পর্ক বিশ্লেষণ করা।'
    ),
    l(
      'Analyze the surgical anatomy of the thyroid gland, recurrent laryngeal nerve intimate relationship, and vascular pedicles of the superior and inferior parathyroid glands.',
      'থাইরয়েড গ্রন্থির সার্জিক্যাল অ্যানাটমি, রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ুর সাথে এর ঘনিষ্ঠ সম্পর্ক এবং সুপিরিয়র ও ইনফিরিয়র প্যারাথাইরয়েড গ্রন্থির রক্তনালীর বিন্যাস বিশ্লেষণ করা।'
    ),
    l(
      'Trace lymph node histology (cortex, paracortex, medulla), the course of the thoracic duct from the cisterna chyli to the left venous angle, and splenic red/white pulp filtration.',
      'লিম্ফ নোডের অণুগঠন (কর্টেক্স, প্যারাকর্টেক্স, মেডুলা), সিস্টার্না কাইলি থেকে বাম ভেনাস অ্যাঙ্গেল পর্যন্ত থোরাসিক ডাক্টের গতিপথ এবং প্লীহার রক্ত পরিশোধন ব্যবস্থা চিহ্নিত করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.cardiovascular'],
  relatedTopicIds: ['topic.anatomy.cells-tissues'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch17-21', 'moore-anatomy-9e'],
    structure: ['openstax-ap2e-ch17-21', 'junqueira-histology-16e'],
    mechanism: ['guyton-hall-14e', 'openstax-ap2e-ch17-21'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'guyton-hall-14e'],
    takeaways: ['openstax-ap2e-ch17-21', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Neuroendocrine Hypothalamic-Pituitary Axis', 'ভূমিকা: নিউরোএন্ডোক্রাইন হাইপোথ্যালামিক-পিটুইটারি অক্ষ'), sectionId: 'introduction' },
      { id: 'sec-thyroid-adrenal', label: l('Thyroid, Parathyroid & Adrenal Cortical Zonation', 'থাইরয়েড, প্যারাথাইরয়েড ও অ্যাড্রেনাল কর্টেক্সের জোন'), sectionId: 'structure' },
      { id: 'sec-lymphoid-organs', label: l('Thymus, Spleen & Lymph Node Microarchitecture', 'থাইমাস, প্লীহা ও লিম্ফ নোডের অণুগঠন'), sectionId: 'mechanism' },
      { id: 'sec-lymphatic-ducts', label: l('Thoracic Duct, Cisterna Chyli & Lymphatic Drainage', 'থোরাসিক ডাক্ট, সিস্টার্না কাইলি ও লসিকা নিষ্কাশন'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Endocrinology & Lymphatic Emergencies', 'ক্লিনিক্যাল এন্ডোক্রিনোলজি ও লসিকাতন্ত্রের জরুরি অবস্থা'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary & Endocrine-Lymphatic Glossary', 'সারসংক্ষেপ ও অন্তঃস্রাবী-লসিকাতন্ত্রের শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Hypothalamic-Hypophyseal Portal System', 'হাইপোথ্যালামিক-হাইপোফাইসিয়াল পোর্টাল রক্তজালক'),
        definition: l(
          'A specialized microvascular plexus interconnecting capillary beds of the median eminence of the hypothalamus with the sinusoids of the anterior pituitary (adenohypophysis), transporting releasing and inhibiting neurohormones without systemic dilution.',
          'একটি বিশেষায়িত রক্তজালক যা হাইপোথ্যালামাসের মধ্যবর্তী অংশকে অগ্র পিটুইটারি গ্রন্থির সাইনুসয়েডের সাথে সরাসরি সংযুক্ত করে; এটি রক্তে ছড়িয়ে পড়ার আগেই পিটুইটারি-নিয়ন্ত্রণকারী হরমোনগুলো সরাসরি পৌঁছে দেয়।'
        ),
      },
      {
        term: l('Thoracic Duct & Left Venous Angle', 'থোরাসিক ডাক্ট ও বাম ভেনাস অ্যাঙ্গেল'),
        definition: l(
          'The largest lymphatic vessel in the human body, arising in the abdomen from the cisterna chyli (L1–L2), ascending through the aortic hiatus (T12) into the posterior mediastinum, and terminating at the left venous angle (confluence of the left internal jugular and subclavian veins).',
          'মানবদেহের সর্ববৃহৎ লসিকানালী যা পেটে L1–L2 কশেরুকা বরাবর সিস্টার্না কাইলি থেকে শুরু হয়ে ডায়াফ্রামের মহাধমনীর ছিদ্র (T12) দিয়ে উঠে বাম ইন্টারনাল জুগুলার ও সাবক্লেভিয়ান শিরার মিলনস্থলে লসিকা ঢেলে দেয়।'
        ),
      },
      {
        term: l('Adrenal Cortical Zonation (GFR)', 'অ্যাড্রেনাল কর্টেক্সের স্তরবিন্যাস (GFR)'),
        definition: l(
          'Three histologically distinct zones of the suprarenal cortex: Zona Glomerulosa (outer, secretes mineralocorticoid aldosterone), Zona Fasciculata (middle, largest, secretes glucocorticoid cortisol), and Zona Reticularis (inner, secretes androgen DHEA); remembered by the mnemonic "Salt, Sugar, Sex".',
          'অ্যাড্রেনাল কর্টেক্সের তিনটি স্বতন্ত্র কোষীয় স্তর: জোনা গ্লোমেরুলোসা (বাইরের স্তর, অ্যালডোস্টেরন ক্ষরণ করে), জোনা ফ্যাসিকুলেটা (মাঝের বৃহত্তম স্তর, কর্টিসল ক্ষরণ করে), এবং জোনা রেটিকুলারিস (ভেতরের স্তর, সেক্স হরমোন DHEA ক্ষরণ করে)।'
        ),
      },
      {
        term: l('Splenic Red and White Pulp Microarchitecture', 'প্লীহার লাল ও সাদা মজ্জার অণুগঠন'),
        definition: l(
          'Functional division of splenic parenchyma: White pulp consists of central arterioles enveloped by periarteriolar lymphoid sheaths (PALS, T-cells) and lymphoid follicles (B-cells); Red pulp comprises splenic cords of Billroth and sinusoids that mechanically filter senescent erythrocytes.',
          'প্লীহার টিস্যুর দুটি কার্যকরী অংশ: সাদা মজ্জা যা টি-কোষ সমৃদ্ধ প্যালস (PALS) এবং বি-কোষের ফলিকল দ্বারা গঠিত হয়ে রোগ প্রতিরোধ করে; আর লাল মজ্জা বিলরথের কর্ড ও সাইনুসয়েড দ্বারা তৈরি যা রক্ত থেকে বুড়িয়ে যাওয়া লোহিত রক্তকণিকাকে ছেঁকে ধ্বংস করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Explaining Bitemporal Hemianopsia from a Pituitary Macroadenoma', 'পিটুইটারি ম্যাক্রোঅ্যাডেনোমায় দুই পাশের দৃষ্টি নষ্ট হওয়ার (বাইটেলপোরাল হেমিয়ানপসিয়া) শারীরস্থানিক ভিত্তি'),
        steps: [
          l('Step 1: Understand pituitary anatomy: the pituitary gland sits inside the rigid bony sella turcica of the sphenoid bone, enclosed superiorly by the dura mater diaphragma sellae.', 'ধাপ ১: পিটুইটারির অবস্থান জানুন: পিটুইটারি গ্রন্থিটি মাথার খুলির স্ফেনয়েড হাড়ের সেলা টারসিকা নামক ছোট হাড়ের খোপে অবস্থিত, যার ওপরে ডুরা মেটারের একটি শক্ত পর্দা থাকে।'),
          l('Step 2: Trace upward expansion: a benign adenoma exceeding 10 mm (macroadenoma) erodes or outgrows the diaphragma sellae, expanding superiorly directly into the suprasellar cistern.', 'ধাপ ২: ওপরের দিকে বৃদ্ধি লক্ষ্য করুন: টিউমারটি ১০ মিলিমিটারের বেশি বড় হলে তা ওপরের পর্দা ভেদ করে মাথার ভেতরে ওপরের দিকে বাড়তে থাকে।'),
          l('Step 3: Compression of the optic chiasm: situated directly 5 to 10 mm superior to the diaphragma sellae is the optic chiasm; superior tumor extension specifically crushes decussating nasal retinal fibers from both eyes.', 'ধাপ ৩: অপটিক কায়াজমায় চাপ চিহ্নিত করুন: পিটুইটারির ঠিক ওপরে অপটিক কায়াজমা থাকে যেখানে দুই চোখের ভেতরের রেটিনা থেকে আসা অপটিক স্নায়ুর তন্তুগুলো পরস্পরকে ক্রস করে; টিউমারের চাপ এই ক্রস করা স্নায়ুগুলোকে অকেজো করে দেয়।'),
        ],
        conclusion: l('Because nasal retinal fibers process light from the temporal visual fields, selective compression of decussating fibers produces pathognomonic bitemporal hemianopsia (tunnel vision), requiring transsphenoidal surgical decompression.', 'যেহেতু রেটিনার ভেতরের তন্তুগুলো বাইরের পাশের (টেম্পোরাল) দৃশ্য দেখে, তাই এই ক্রসিং তন্তুগুলো নষ্ট হলে রোগীর দুই চোখের বাইরের দিকের দৃষ্টি পুরোপুরি বন্ধ হয়ে যায় যা ট্রান্সস্ফেনয়ডাল অপারেশনের মাধ্যমে অপসারণ করতে হয়।'),
      },
    ],
    checkpoints: [
      {
        question: l('Why can total thyroidectomy cause inadvertent vocal cord paralysis and acute hoarseness?', 'সম্পূর্ণ থাইরয়েড অপারেশনের পর রোগীর হঠাৎ কণ্ঠস্বর ভেঙে যাওয়া বা স্বরতন্ত্রী অবশ হওয়ার শারীরস্থানিক কারণ কী?'),
        answer: l('The recurrent laryngeal nerve ascends in the tracheoesophageal groove directly posterior to the lateral lobes of the thyroid gland, intimately traversing the ligament of Berry and interweaving with terminal branches of the inferior thyroid artery. Inadvertent traction, transection, or electrocautery injury to this nerve paralyzes all intrinsic laryngeal muscles except the cricothyroid, causing ipsilateral vocal cord paralysis.', 'রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ুটি শ্বাসনালি ও খাদ্যনালির খাঁজ দিয়ে থাইরয়েডের পেছনের অংশ এবং ইনফিরিয়র থাইরয়েড ধমনীর শাখাগুলোর সাথে ঘনিষ্ঠভাবে জড়িয়ে ওপরে ওঠে। অসাবধানতাবশত এই স্নায়ুতে টান পড়লে বা কেটে গেলে ভোকাল কর্ডের পেশীগুলো অবশ হয়ে যায় এবং তীব্র কণ্ঠস্বরহীনতা তৈরি হয়।'),
      },
      {
        question: l('Why does severe splenomegaly place a patient at catastrophic risk of fatal intraperitoneal hemorrhage from minor blunt abdominal trauma?', 'প্লীহা অতিরিক্ত বড় হয়ে গেলে (স্প্লেনোমেগালি) পেটে সামান্য আঘাতেই মারাত্মক অভ্যন্তরীণ রক্তক্ষরণে মৃত্যুর ঝুঁকি বাড়ে কেন?'),
        answer: l('Normally, the spleen is tucked safely beneath the left 9th through 11th ribs in the left hypochondrium. When pathologically enlarged, it projects inferomedially past the protective costal margin into the unprotected anterior abdomen. The spleen possesses an extremely thin, friable fibroelastic capsule enclosing vast sinusoidal blood pools (receiving 5% of cardiac output); blunt impact easily ruptures this fragile capsule, causing torrential exsanguinating hemoperitoneum.', 'স্বাভাবিক অবস্থায় প্লীহা বাম পাঁজরের হাড়ের নিচে সুরক্ষিত থাকে। কিন্তু রোগাক্রান্ত হয়ে এটি বড় হলে পাঁজরের সুরক্ষা ছেড়ে পেটের নরম অংশে নেমে আসে। অত্যন্ত পাতলা ক্যাপসুলযুক্ত প্লীহায় প্রচুর রক্ত জমা থাকে; ফলে সামান্য আঘাতেই এটি ফেটে গিয়ে পেটের ভেতর কয়েক মিনিটের মধ্যে কয়েক লিটার রক্তক্ষরণ ঘটাতে পারে।'),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch15-endocrine-lymphatic-diagram',
    title: l('Interactive Endocrine Organs & Lymphatic Circulation', 'ইন্টারেক্টিভ অন্তঃস্রাবী অঙ্গ ও লসিকা সংবহন'),
    description: l(
      'Explore the four primary anatomical centers of endocrine regulation and lymphoid defense: the hypothalamic-pituitary nexus, thyroid and adrenal glands, lymphoid filtration organs (spleen and lymph nodes), and the thoracic duct.',
      'অন্তঃস্রাবী নিয়ন্ত্রণ ও লসিকা প্রতিরক্ষার চারটি প্রধান কেন্দ্র পরীক্ষা করুন: হাইপোথ্যালামিক-পিটুইটারি অক্ষ, থাইরয়েড ও অ্যাড্রেনাল গ্রন্থি, লসিকা ফিল্টার অঙ্গ (প্লীহা ও লিম্ফ নোড) এবং থোরাসিক ডাক্ট।'
    ),
    disclaimer: l(
      'Anatomical educational schematic: select any sector to review hormone-producing parenchyma, vascular porting, lymphoid immune zones, and clinical failure points.',
      'শিক্ষামূলক শারীরস্থানিক চিত্র: হরমোন নিঃসরণকারী কোষ, রক্ত সংবহন পথ, লিম্ফয়েড প্রতিরক্ষামূলক অঞ্চল এবং ক্লিনিক্যাল রোগসমূহ দেখতে যেকোনো অংশ নির্বাচন করুন।'
    ),
    svgType: 'endocrine-lymphatic-system',
    items: [
      {
        id: 'pituitary-hypothalamus',
        label: l('Hypothalamus & Pituitary Gland', 'হাইপোথ্যালামাস ও পিটুইটারি গ্রন্থি'),
        description: l(
          'Master neuroendocrine regulator in sella turcica. Anterior adenohypophysis controlled by hypophyseal portal system. Posterior neurohypophysis releases ADH and oxytocin.',
          'সেলা টারসিকায় অবস্থিত প্রধান নিয়ন্ত্রক গ্রন্থি। অগ্র পিটুইটারি রক্তজালকের মাধ্যমে হরমোন পায় এবং পশ্চাৎ পিটুইটারি সরাসরি স্নায়ুর মাধ্যমে এডিএইচ ও অক্সিটোসিন রক্তে ছাড়ে।'
        ),
        details: l(
          'Optic chiasm lies 5–10 mm superior to sella. Pituitary macroadenomas compress decussating chiasmatic fibers, producing classic bitemporal hemianopsia.',
          'পিটুইটারির ঠিক ওপরে অপটিক কায়াজমা থাকে। টিউমার বড় হলে এই স্নায়ুতে চাপ পড়ে চোখের দুই পাশের দৃষ্টি বন্ধ হয়ে যাওয়ার রোগ তৈরি হয়।'
        ),
        sectionId: 'introduction',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'thyroid-adrenal',
        label: l('Thyroid, Parathyroid & Adrenal Glands', 'থাইরয়েড, প্যারাথাইরয়েড ও অ্যাড্রেনাল গ্রন্থি'),
        description: l(
          'Metabolic and stress regulators. Butterfly-shaped thyroid (follicles produce T3/T4, C-cells calcitonin). Four parathyroids secrete PTH. Adrenal cortex features G-F-R layers.',
          'বিপাক ও স্ট্রেস নিয়ন্ত্রণকারী গ্রন্থিসমূহ। থাইরয়েড T3/T4 হরমোন তৈরি করে। চারটি প্যারাথাইরয়েড ক্যালসিয়াম নিয়ন্ত্রণ করে এবং অ্যাড্রেনাল কর্টেক্স অ্যালডোস্টেরন ও কর্টিসল তৈরি করে।'
        ),
        details: l(
          'Recurrent laryngeal nerves run intimately behind thyroid lobes. Adrenal medulla contains chromaffin cells derived from neural crest secreting epinephrine and norepinephrine.',
          'থাইরয়েডের পেছনের রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ু স্বরতন্ত্রী চালায়। অ্যাড্রেনাল মেডুলার ক্রোমাফিন কোষ অ্যাড্রেনালিন হরমোন রক্তে ঢেলে দেয়।'
        ),
        sectionId: 'structure',
        color: '#fecdd3',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'spleen-thymus',
        label: l('Spleen, Thymus & Lymph Nodes', 'প্লীহা, থাইমাস ও লিম্ফ নোড'),
        description: l(
          'Lymphoid defense and filtration. Spleen filters blood (red pulp cords, white pulp PALS). Thymus educates T-cells. Lymph nodes deploy B-cell follicles and T-cell paracortex.',
          'রোগ প্রতিরোধ ও রক্ত পরিশোধনকারী অঙ্গ। প্লীহা রক্ত থেকে জীবাণু ও পুরনো লোহিত কণিকা দূর করে। থাইমাসে টি-কোষ তৈরি হয় এবং লিম্ফ নোড লসিকা ফিল্টার করে।'
        ),
        details: l(
          'Post-splenectomy patients lose splenic macrophage opsonization, creating lifetime susceptibility to overwhelming encapsulated bacterial infections (Streptococcus pneumoniae).',
          'প্লীহা কেটে ফেলে দিলে ক্যাপসুলযুক্ত ব্যাকটেরিয়ার (নিউমোকক্কাস) বিরুদ্ধে প্রতিরোধ ক্ষমতা কমে গিয়ে মারাত্মক সেপসিসের ঝুঁকি বেড়ে যায়।'
        ),
        sectionId: 'mechanism',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'thoracic-duct',
        label: l('Thoracic Duct & Lymphatic Trunks', 'থোরাসিক ডাক্ট ও লসিকা নালী'),
        description: l(
          'Great lymphatic conduit. Begins at cisterna chyli (L1–L2), ascends posterior mediastinum, empties into left venous angle. Returns 3–4 liters of lymph daily to venous circulation.',
          'শরীরের সর্ববৃহৎ লসিকানালী। পেটের সিস্টার্না কাইলি থেকে শুরু হয়ে বক্ষ ভেদ করে বাম জুগুলার-সাবক্লেভিয়ান শিরায় মেশে এবং প্রতিদিন ৩-৪ লিটার লসিকা রক্তে ফেরত দেয়।'
        ),
        details: l(
          'Drains entire body except right upper extremity, right hemithorax, and right head/neck (drained by right lymphatic duct). Virchow node (left supraclavicular) signals GI metastasis.',
          'ডান হাত ও ডান বুক ছাড়া শরীরের সমস্ত অংশের লসিকা থোরাসিক ডাক্ট দিয়ে ড্রেন হয়। বাম কলারবোনের উপরের ভারচো নোড ফুলে যাওয়া পেটের ক্যান্সারের লক্ষণ।'
        ),
        sectionId: 'integration',
        color: '#fef08a',
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
          heading: l('The Endocrine Gland Concept and the Master Pituitary', 'অন্তঃস্রাবী গ্রন্থির ধারণা এবং প্রধান পিটুইটারি গ্রন্থি'),
          paragraphs: [
            l(
              'Unlike exocrine glands that deliver enzymes through dedicated epithelial ducts, endocrine glands are ductless organs that synthesize specialized chemical messengers known as hormones, releasing them directly into the interstitial fluid and surrounding rich capillary networks for systemic transport. The endocrine network operates in close partnership with the autonomic nervous system to coordinate homeostasis, metabolic rate, reproductive cycles, and systemic stress responses.',
              'বহিঃস্রাবী গ্রন্থির মতো নালির মাধ্যমে রস নিঃসরণ না করে অন্তঃস্রাবী গ্রন্থিগুলো নালিবিহীনভাবে হরমোন নামক বিশেষ রাসায়নিক দূত তৈরি করে যা সরাসরি রক্তের কৈশিক জালিকার মাধ্যমে সারা শরীরে ছড়িয়ে পড়ে। এই গ্রন্থিতন্ত্রটি স্নায়ুতন্ত্রের সাথে একযোগে কাজ করে দেহের অভ্যন্তরীণ পরিবেশের ভারসাম্য, বিপাক ক্রিয়া, প্রজনন চক্র এবং মানসিক ও শারীরিক চাপের বিরুদ্ধে শরীরের প্রতিক্রিয়া নিয়ন্ত্রণ করে।'
            ),
            l(
              'The anatomical centerpiece of endocrine coordination is the hypophysis (pituitary gland), a pea-sized organ suspended from the hypothalamus by the infundibular stalk within the sella turcica of the sphenoid bone. It is partitioned into two developmentally distinct lobes: the anterior adenohypophysis (derived from oral ectoderm of Rathke pouch), which secretes GH, TSH, ACTH, FSH, LH, and prolactin; and the posterior neurohypophysis (derived from neuroectoderm), which stores and releases oxytocin and ADH synthesized in the hypothalamus.',
              'অন্তঃস্রাবী ব্যবস্থার কেন্দ্রবিন্দু হলো পিটুইটারি গ্রন্থি যা মস্তিষ্কের স্ফেনয়েড হাড়ের সেলা টারসিকা নামক ছোট খাঁজে সুরক্ষিত থাকে। এটি দুটি ভিন্ন অংশে বিভক্ত: অগ্র অ্যাডিনোহাইপোফাইসিস যা গ্রোথ হরমোন, টিএসএইচ, এসিটিএইচ ইত্যাদির মতো প্রধান হরমোন তৈরি করে; এবং পশ্চাৎ নিউরোহাইপোফাইসিস যা হাইপোথ্যালামাসে তৈরি হওয়া অক্সিটোসিন ও অ্যান্টিডাইইউরেটিক হরমোন (ADH) রক্তে নিঃসরণ করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Thyroid, Parathyroid and Adrenal Glands', 'থাইরয়েড, প্যারাথাইরয়েড ও অ্যাড্রেনাল গ্রন্থির গঠন'),
          paragraphs: [
            l(
              'The thyroid gland is a highly vascular butterfly-shaped organ wrapped around the anterolateral trachea inferior to the cricoid cartilage. It consists of two lateral lobes connected across the midline by a central isthmus overlying the 2nd through 4th tracheal rings. Microscopically, the thyroid is organized into spherical follicles filled with colloidal thyroglobulin, synthesized by follicular cells to produce thyroxine (T4) and triiodothyronine (T3), and interspersed parafollicular C cells secreting calcitonin.',
              'থাইরয়েড হলো গলার সামনের দিকে শ্বাসনালির চারপাশে প্রজাপতির মতো বসে থাকা একটি অত্যন্ত রক্তসমৃদ্ধ গ্রন্থি। এর দুটি ডান ও বাম লোব রয়েছে যা মাঝের একটি ইস্থমাস দ্বারা যুক্ত থাকে। মাইক্রোস্কোপে দেখলে বোঝা যায় থাইরয়েড অসংখ্য গোলাকার থলি বা ফলিকল দিয়ে তৈরি যা থাইরক্সিন হরমোন জমা রাখে; পাশাপাশি প্যারাফলিকুলার সি-কোষগুলো রক্তে ক্যালসিয়াম কমাতে ক্যালসিটোনিন হরমোন নিঃসরণ করে।'
            ),
            l(
              'Embedded on the posterior capsule of the thyroid lobes are four pea-sized parathyroid glands (two superior, two inferior), whose chief cells synthesize parathyroid hormone (PTH) to defend serum calcium levels. Above the kidneys sit the pyramidal adrenal (suprarenal) glands, each enveloped in Gerota fascia and partitioned into an outer steroid-producing cortex (mineralocorticoids, glucocorticoids, androgens) and an inner chromaffin-cell medulla releasing catecholamines (epinephrine and norepinephrine).',
              'থাইরয়েডের পেছনের পৃষ্ঠে ৪টি ছোট মটরের দানার মতো প্যারাথাইরয়েড গ্রন্থি থাকে যা প্যারাথরমোন (PTH) তৈরি করে রক্তে ক্যালসিয়ামের মাত্রা ঠিক রাখে। প্রতিটি কিডনির ওপরে টুপির মতো বসে থাকে অ্যাড্রেনাল গ্রন্থি, যার বাইরের কর্টেক্স অংশ অ্যালডোস্টেরন ও কর্টিসল হরমোন তৈরি করে এবং ভেতরের মেডুলা অংশ বিপদের সময় রক্তচাপ বাড়ানোর জন্য অ্যাড্রেনালিন হরমোন রক্তে ছেড়ে দেয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Hypothalamic-Pituitary Cascades and Hormone Distribution', 'হাইপোথ্যালামিক-পিটুইটারি সংকেত ও হরমোন বিস্তার'),
          paragraphs: [
            l(
              'Endocrine regulation relies on coordinated negative feedback loops between the hypothalamus, anterior pituitary, and peripheral target glands. Hypothalamic hypophysiotropic hormones (such as TRH, CRH, and GnRH) are secreted in pulsatile bursts into the primary capillary plexus of the median eminence. These neurohormones travel down the hypophyseal portal venules into the sinusoidal secondary plexus of the anterior pituitary to stimulate hormone release.',
              'অন্তঃস্রাবী ব্যবস্থার নিয়ন্ত্রণ হাইপোথ্যালামাস, অগ্র পিটুইটারি এবং প্রান্তীয় গ্রন্থিগুলোর মধ্যবর্তী সুনির্দিষ্ট নেগেটিভ ফিডব্যাক লুপের ওপর নির্ভর করে। হাইপোথ্যালামাস থেকে নিঃসৃত নিয়ন্ত্রণকারী হরমোনগুলো (যেমন TRH, CRH ও GnRH) মধ্যবর্তী অংশের প্রাইমারি ক্যাপিলারি প্লেক্সাসে প্রবেশ করে। এরপর হাইপোফাইসিয়াল পোর্টাল শিরার মাধ্যমে পিটুইটারির সেকেন্ডারি প্লেক্সাসে পৌঁছে সংশ্লিষ্ট ট্রফিক হরমোন ক্ষরণ উদ্দীপিত করে।'
            ),
            l(
              'Once released into systemic capillaries, hormones circulate bound to carrier globulins or as free biologically active fractions. Lipid-soluble steroid hormones and thyroid hormones readily traverse plasma membranes to bind intracellular nuclear receptors, altering gene transcription. Conversely, hydrophilic peptide hormones and catecholamines bind cell-surface G-protein coupled receptors or receptor tyrosine kinases, activating second-messenger cascades such as cAMP and IP3/DAG.',
              'রক্তে প্রবেশের পর হরমোনগুলো নির্দিষ্ট বাহক প্রোটিনের সাথে যুক্ত হয়ে বা মুক্ত অবস্থায় সারা শরীরে সঞ্চালিত হয়। চর্বিতে দ্রবণীয় স্টেরয়েড এবং থাইরয়েড হরমোনগুলো সরাসরি কোষঝিল্লি ভেদ করে কোষের ভেতরের নিউক্লিয়ার রিসেপ্টরের সাথে যুক্ত হয়ে জিনের প্রকাশ নিয়ন্ত্রণ করে। অপরদিকে পেপটাইড হরমোন এবং ক্যাটেকোলামাইনগুলো কোষের বহিরাবরণের জি-প্রোটিন যুক্ত রিসেপ্টরের সাথে যুক্ত হয়ে সাইক্লিক এএমপি (cAMP) ইত্যাদি সেকেন্ড মেসেঞ্জারের মাধ্যমে দ্রুত কোষীয় প্রতিক্রিয়া তৈরি করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Lymphatic Fluid Recovery and Primary Versus Secondary Lymphoid Organs', 'লসিকাতন্ত্রের তরল পুনরুদ্ধার এবং প্রাথমিক বনাম মাধ্যমিক লিম্ফয়েড অঙ্গ'),
          paragraphs: [
            l(
              'The lymphatic system acts as an indispensable low-pressure drainage network operating parallel to the venous circulation. Approximately 20 liters of fluid are filtered daily from blood capillaries into the interstitial space, of which roughly 17 liters are reabsorbed directly into venules. The remaining 3 liters of protein-rich interstitial fluid enter blind-ended lymphatic capillaries, whose overlapping endothelial minivalves allow bulk entry of fluid, macromolecules, and cellular debris without backflow.',
              'লসিকাতন্ত্র হলো শিরার রক্ত সংবহনের সমান্তরালে কাজ করা শরীরের একটি অপরিহার্য নিষ্কাশন ব্যবস্থা। রক্তজালক থেকে প্রতিদিন প্রায় ২০ লিটার তরল কোষের মধ্যবর্তী স্থানে বের হয়, যার মধ্যে ১৭ লিটার সরাসরি শিরায় পুনর্শোষিত হয়। অবশিষ্ট ৩ লিটার প্রোটিনসমৃদ্ধ তরল একমুখো লসিকা ক্যাপিলারির ভেতরে প্রবেশ করে, যার বিশেষ কপাটিকাসদৃশ এন্ডোথেলিয়াল কোষগুলো অতিরিক্ত তরল, প্রোটিন এবং কোষীয় বর্জ্যকে আটকে না রেখে ভেতরে ঢুকতে দেয় কিন্তু বাইরে ফিরে যেতে বাধা দেয়।'
            ),
            l(
              'Lymphoid tissues are anatomically segregated into primary and secondary lymphoid organs. Primary organs, comprising red bone marrow and the thymus, provide specialized microenvironments for lymphocyte genesis, antigen-receptor rearrangement, and central self-tolerance selection. Secondary lymphoid organs, including hundreds of regional lymph nodes, the spleen, and mucosa-associated lymphoid tissue (MALT), optimize foreign antigen presentation and lymphocyte activation.',
              'লিম্ফয়েড টিস্যুসমূহ শারীরস্থানিকভাবে প্রাথমিক ও মাধ্যমিক অঙ্গে বিভক্ত। প্রাথমিক অঙ্গসমূহ, যথা লাল অস্থিমজ্জা এবং থাইমাস গ্রন্থি, লিম্ফোসাইট কোষের উৎপত্তি, বিকাশ এবং স্ব-প্রতিরোধ সহনশীলতা নির্বাচনের কেন্দ্র হিসেবে কাজ করে। অপরদিকে মাধ্যমিক লিম্ফয়েড অঙ্গসমূহ, যেমন শত শত লিম্ফ নোড, প্লীহা এবং মিউকোসা-সংলগ্ন লিম্ফয়েড টিস্যু (MALT), রক্তের ও লসিকার মাধ্যমে আগত রোগজীবাণুকে কার্যকরভাবে শনাক্ত ও প্রতিরোধ করার ক্ষেত্র প্রস্তুত করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Signs of Endocrine and Lymphatic Disorders', 'অন্তঃস্রাবী ও লসিকা ব্যাধির ক্লিনিক্যাল লক্ষণসমূহ'),
          paragraphs: [
            l(
              'Clinical assessment of endocrine pathology frequently centers on the neck and thyroid gland. Diffuse thyroid enlargement (goiter) can expand retrosternally, compressing the trachea and esophagus to produce dyspnea, stridor, and dysphagia (positive Pemberton sign when arm elevation causes facial plethora). Graves disease presents with thyroid eye disease (exophthalmos) due to autoimmune orbital fibroblast proliferation and glycosaminoglycan deposition.',
              'অন্তঃস্রাবী রোগের শারীরিক পরীক্ষায় গলা ও থাইরয়েড গ্রন্থি অত্যন্ত সতর্কতার সাথে পর্যবেক্ষণ করা হয়। থাইরয়েডের অস্বাভাবিক বৃদ্ধি (গয়টার) কখনও কখনও বুকের ভেতরের দিকে প্রসারিত হয়ে শ্বাসনালি ও খাদ্যনালি চেপে ধরে শ্বাসকষ্ট ও খাবার গিলতে বাধার সৃষ্টি করে (পেম্বারটন সাইন)। অন্যদিকে গ্রেভস ডিজিজে চোখের পেছনের কোলাজেন ও ফাইব্রোব্লাস্ট ফুলে গিয়ে চোখ সামনের দিকে ঠেলে বের হয়ে আসে যাকে এক্সঅফথালমোস বলে।'
            ),
            l(
              'Lymphatic insufficiency leads to lymphedema, characterized by the progressive accumulation of interstitial protein and progressive dermal fibrofatty proliferation. Unlike venous edema, early lymphedema evolves into non-pitting, indurated swelling with hyperkeratosis and a positive Stemmer sign (inability to pinch the skin fold at the base of the second toe). Worldwide, lymphatic filariasis (Wuchereria bancrofti) is the leading cause, whereas surgical lymphadenectomy dominates in high-income regions.',
              'লসিকানালীর পথ বন্ধ বা ক্ষতিগ্রস্ত হলে লিম্ফিডিমা দেখা দেয়, যার ফলে কোষে কোষে প্রোটিন ও পানি জমে শক্ত ফোলা তৈরি হয়। সাধারণ শিরার ফোলায় চাপ দিলে গর্ত হয়, কিন্তু দীর্ঘস্থায়ী লিম্ফিডিমাতে ত্বক পুরু ও শক্ত হয়ে যায় এবং পায়ের দ্বিতীয় আঙুলের ত্বক চিমটি দিয়ে আলাদা করা যায় না (পজিটিভ স্টেমার সাইন)। উন্নয়নশীল বিশ্বে উচেরেরিয়া ব্যানক্রফটি পরজীবী দ্বারা লিম্ফ্যাটিক ফাইলেরিয়াসিস এর প্রধান কারণ, আর উন্নত বিশ্বে ক্যান্সার সার্জারিতে লিম্ফ নোড অপসারণের কারণে এটি বেশি ঘটে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary & Endocrine-Lymphatic Core Principles', 'সারসংক্ষেপ ও অন্তঃস্রাবী-লসিকাতন্ত্রের মূল নীতি'),
          paragraphs: [
            l(
              'Endocrine and lymphatic systems are vital partners in maintaining homeostasis and fluid balance. Hormonal cascades govern metabolic pace and stress adaptation through bloodborne transport, while lymphatic vessels prevent peripheral tissue edema and transport antigen-bearing lymphocytes to regional secondary lymphoid filtration nodes.',
              'দেহের অভ্যন্তরীণ পরিবেশের ভারসাম্য ও তরলের সাম্যাবস্থা বজায় রাখতে অন্তঃস্রাবী ও লসিকাতন্ত্র একে অপরের পরিপূরক হিসেবে কাজ করে। হরমোন সংকেত রক্তপ্রবাহের মাধ্যমে দেহের বিপাক ও চাপ নিয়ন্ত্রণ করে, আর লসিকাতন্ত্র টিস্যু থেকে অতিরিক্ত তরল নিষ্কাশন করে এবং জীবাণু ধ্বংসের জন্য লিম্ফোসাইটকে লিম্ফ নোডে পৌঁছে দেয়।'
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
          heading: l('Hypothalamic-Hypophyseal Portal System & Sella Turcica Topography', 'হাইপোথ্যালামিক-হাইপোফাইসিয়াল পোর্টাল ব্যবস্থা ও সেলা টারসিকার অবস্থান'),
          paragraphs: [
            l(
              'The hypothalamic-hypophyseal portal system is a high-specialization microvascular nexus coupling neurosecretory output from the parvocellular hypothalamic nuclei with adenohypophyseal parenchymal sinusoids. Parvocellular neurons terminate directly on fenestrated capillaries of the primary capillary plexus in the median eminence and infundibulum. Releasing and inhibiting hormones pass down long and short hypophyseal portal venules through the pituitary stalk without systemic dilution.',
              'হাইপোথ্যালামিক-হাইপোফাইসিয়াল পোর্টাল ব্যবস্থা হলো একটি অত্যন্ত বিশেষায়িত রক্তজালক যা হাইপোথ্যালামাসের নিউরোসিক্রেটরি নিউরনগুলোকে অগ্র পিটুইটারির সাইনুসয়েডের সাথে সরাসরি সংযুক্ত করে। ক্ষুদ্র কোষীয় নিউরনগুলোর অ্যাক্সন প্রান্ত মিডিয়ান এমিনেন্সের বিশেষ ছিদ্রযুক্ত প্রাইমারি ক্যাপিলারি প্লেক্সাসে হরমোন ত্যাগ করে। এই হরমোনগুলো দীর্ঘ ও সংক্ষিপ্ত পোর্টাল শিরার মধ্য দিয়ে গিয়ে রক্তে মিশ্রিত ও হ্রাসপ্রাপ্ত না হয়ে সরাসরি পিটুইটারি কোষে পৌঁছায়।'
            ),
            l(
              'The pituitary gland resides within the hypophyseal fossa of the sphenoid sella turcica, bounded laterally by the cavernous sinuses containing cranial nerves III, IV, V1, V2, and VI alongside the internal carotid artery. Superiorly, the sellar diaphragm (a reflection of cranial dura mater) is pierced solely by the pituitary stalk. Expansile pituitary macroadenomas erode superiorly into the suprasellar cistern, compressing decussating nasal retinal axons in the optic chiasm to induce pathognomonic bitemporal hemianopsia.',
              'পিটুইটারি গ্রন্থিটি স্ফেনয়েড হাড়ের সেলা টারসিকার হাইপোফাইসিয়াল ফোসার মধ্যে অবস্থান করে, যার দুই পাশে ক্যাভারনাস সাইনাস থাকে যেখানে ৩য়, ৪র্থ, ৫ম ও ৬ষ্ঠ ক্র্যানিয়াল স্নায়ু এবং ইন্টারনাল ক্যারোটিড ধমনী সুরক্ষিত থাকে। এর ওপরে ডুরা মেটারের ডায়াফ্রামা সেলাই থাকে। পিটুইটারির ম্যাক্রোঅ্যাডেনোমা বড় হলে ওপরের পর্দা ভেদ করে অপটিক কায়াজমায় চাপ দেয় এবং দুই চোখের ভেতরের ক্রসিং তন্তুগুলো চেপে ধরে ক্লাসিক বাইটেম্পোরাল হেমিয়ানপসিয়া বা অন্ধত্ব সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Thyroid Follicle Microarchitecture & Adrenal Cortical Zonation (GFR)', 'থাইরয়েড ফলিকলের অণুগঠন ও অ্যাড্রেনাল কর্টেক্সের স্তরবিন্যাস (GFR)'),
          paragraphs: [
            l(
              'Histologically, the thyroid gland is organized into densely packed follicles lined by simple cuboidal to columnar epithelium enclosing a central lumen of gelatinous colloid. Follicular cells basolaterally concentrate iodide against an electrochemical gradient via the sodium-iodide symporter (NIS), transporting it apically into colloid via pendrin. Thyroid peroxidase (TPO) catalyzes iodide oxidation, organification onto tyrosine residues of thyroglobulin, and coupling to form thyroxine (T4) and triiodothyronine (T3).',
              'হিস্টোলজিক্যালভাবে থাইরয়েড গ্রন্থি অসংখ্য গোলাকার ফলিকল দ্বারা গঠিত যার ভেতরের গহ্বরে থাইরোগ্লোবুলিন যুক্ত কলয়েড জমা থাকে। ফলিকুলার কোষগুলো সোডিয়াম-আয়োডাইড সিমপোর্টারের (NIS) মাধ্যমে রক্ত থেকে আয়োডিন গ্রহণ করে কলয়েডে পাঠায়। সেখানে থাইরয়েড পারঅক্সিডেজ (TPO) এনজাইম আয়োডিনকে জারিত করে থাইরোগ্লোবুলিনের টাইরোসিনের সাথে যুক্ত করে T3 ও T4 হরমোন তৈরি করে, যা পরবর্তীতে রক্তে ক্ষরিত হয়।'
            ),
            l(
              'The adrenal cortex displays three distinct histological zones driven by different trophic stimuli: the outer Zona Glomerulosa (arranged in arches, producing aldosterone under angiotensin II control); the middle Zona Fasciculata (comprising lipid-rich foamy clear cells arranged in straight cords, producing cortisol under ACTH regulation); and the inner Zona Reticularis (anastomosing cords producing dehydroepiandrosterone [DHEA]). The inner medulla consists of neural-crest derived chromaffin cells innervated by preganglionic sympathetic fibers.',
              'অ্যাড্রেনাল কর্টেক্সে তিনটি সুস্পষ্ট হিস্টোলজিক্যাল স্তর রয়েছে: বাইরের জোনা গ্লোমেরুলোসা (অ্যাঞ্জিওটেনসিন-২ এর প্রভাবে অ্যালডোস্টেরন তৈরি করে), মাঝের জোনা ফ্যাসিকুলেটা (ফেনা সদৃশ লিপিডসমৃদ্ধ কোষ যা এসিটিএইচ হরমোনের অধীনে কর্টিসল তৈরি করে), এবং ভেতরের জোনা রেটিকুলারিস (DHEA অ্যান্ড্রোজেন ক্ষরণ করে)। গ্রন্থির ভেতরের মেডুলা নিউরাল ক্রেস্ট থেকে তৈরি ক্রোমাফিন কোষ দিয়ে গঠিত যা সিমপ্যাথেটিক স্নায়ুর উদ্দীপনায় সরাসরি অ্যাড্রেনালিন ক্ষরণ করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Lymph Node Microcompartments and Splenic Filtration Architecture', 'লিম্ফ নোডের অণুগঠন এবং প্লীহার রক্ত পরিশোধন কাঠামো'),
          paragraphs: [
            l(
              'Lymph nodes function as modular secondary lymphoid filters. Lymph flows through multiple afferent vessels across the convex surface into the subcapsular sinus, moving through trabecular sinuses into the medullary sinuses before exiting via a single efferent lymphatic vessel at the hilum. The outer cortex contains B-cell rich primary and secondary lymphoid follicles featuring actively proliferating germinal centers. The deep cortex (paracortex) houses CD4+ and CD8+ T cells alongside high endothelial venules (HEVs) specialized for lymphocyte homing.',
              'লিম্ফ নোডগুলো অত্যন্ত সুশৃঙ্খল ছাঁকনি হিসেবে কাজ করে। লসিকা অনেকগুলো বহির্বাহী নালির মাধ্যমে সাবক্যাপসুলার সাইনাসে ঢোকে এবং নোডের ভেতরের কর্টেক্স ও মেডুলার মধ্য দিয়ে প্রবাহিত হয়ে হাইলামের একক নির্গমন নালী দিয়ে বের হয়। নোডের বাইরের কর্টেক্সে বি-কোষের জার্মিনাল সেন্টার থাকে যেখানে অ্যান্টিবডি তৈরি হয়। গভীরের প্যারাকর্টেক্সে টি-কোষ এবং হাই এন্ডোথেলিয়াল ভেনিউল (HEV) অবস্থান করে যা রক্তের মধ্য থেকে নতুন লিম্ফোসাইটকে নোডের ভেতরে টেনে নেয়।'
            ),
            l(
              'The splenic parenchyma is partitioned into immunologically active white pulp and vascular red pulp. White pulp consists of central arterioles encased by the periarteriolar lymphoid sheath (PALS, rich in T-lymphocytes) and adjacent lymphoid nodules (rich in B-lymphocytes). Central arterioles terminate in the red pulp, discharging into open-ended cords of Billroth (open circulation). Erythrocytes must squeeze through narrow endothelial slits (1–2 µm wide) between stave cells of the venous sinusoids; non-deformable senescent erythrocytes are trapped and phagocytosed by red pulp macrophages.',
              'প্লীহার ভেতরের প্যারেনকাইমা রোগপ্রতিরোধী সাদা মজ্জা এবং রক্তসঞ্চালিত লাল মজ্জায় বিভক্ত। সাদা মজ্জায় কেন্দ্রীয় ধমনীর চারপাশে টি-কোষের প্যালস (PALS) আবরণী এবং বি-কোষের নোডিউল থাকে। এই ধমনীগুলো লাল মজ্জার বিলরথ কর্ডে সরাসরি রক্ত ঢেলে দেয় (মুক্ত সংবহন)। লোহিত রক্তকণিকাকে শিরার সাইনুসয়েডে ঢুকতে হলে মাত্র ১-২ মাইক্রোমিটার চওড়া সরু ফাঁক গলে বের হতে হয়; পুরনো ও শক্ত হয়ে যাওয়া লোহিত রক্তকণিকা এই সরু ফাঁকে আটকে যায় এবং ম্যাক্রোফেজ দ্বারা ধ্বংসপ্রাপ্ত হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Thoracic Duct, Cisterna Chyli and Regional Drainage Maps', 'থোরাসিক ডাক্ট, সিস্টার্না কাইলি এবং লসিকা নিষ্কাশন মানচিত্র'),
          paragraphs: [
            l(
              'The thoracic duct begins in the retroperitoneum anterior to L1–L2 as the cisterna chyli, which receives chyle from intestinal lymphatic trunks and lymph from paired lumbar trunks. It traverses the diaphragm through the aortic hiatus at T12, ascending the posterior mediastinum between the thoracic aorta and azygos vein. At approximately the T4–T5 level, it crosses posterior to the esophagus to the left side, arching 3 to 4 cm above the clavicle to enter the left venous angle (the junction of the left internal jugular and subclavian veins).',
              'থোরাসিক ডাক্ট পেটের ভেতরে L1-L2 কশেরুকার সামনে সিস্টার্না কাইলি হিসেবে শুরু হয় যা অন্ত্র ও দুই পায়ের লসিকা গ্রহণ করে। এটি ডায়াফ্রামের অ্যাওর্টিক ছিদ্র দিয়ে T12 লেভেলে বক্ষগহ্বরে ঢোকে এবং মহাধমনী ও আজাইগোস শিরার মাঝখান দিয়ে ওঠে। T4-T5 লেভেলে খাদ্যনালির পেছন দিয়ে বামে সরে গিয়ে এটি বাম কলারবোনের ৩-৪ সেমি ওপর দিয়ে বাঁক নিয়ে বাম জুগুলার ও সাবক্লেভিয়ান শিরার মিলনস্থলে (ভেনাস অ্যাঙ্গেল) উন্মুক্ত হয়।'
            ),
            l(
              'The asymmetry of lymphatic drainage holds profound clinical significance: the thoracic duct drains lymph from approximately 75% of the body (both lower limbs, pelvis, abdomen, left hemithorax, left upper limb, and left head and neck). The smaller right lymphatic duct drains only the right upper extremity, right hemithorax, and right head and neck into the right venous angle. Consequently, abdominal malignancies (such as gastric adenocarcinoma) disseminate along the thoracic duct to manifest as an enlarged, non-tender left supraclavicular lymph node, known as Virchow node (Troisier sign).',
              'শরীরের লসিকা নিষ্কাশনের এই অসামঞ্জস্য অত্যন্ত গুরুত্বপূর্ণ: থোরাসিক ডাক্ট শরীরের প্রায় ৭৫% অংশ থেকে লসিকা গ্রহণ করে (উভয় পা, পেলভিস, পেট, বাম বুক, বাম হাত এবং বাম মাথা)। পক্ষান্তরে ছোট ডান লিম্ফ্যাটিক ডাক্ট কেবল ডান হাত, ডান বুক এবং ডান মাথা থেকে লসিকা গ্রহণ করে। এই কারণে পেটের ক্যান্সার (যেমন পাকস্থলীর ক্যান্সার) থোরাসিক ডাক্ট বেয়ে বাম কলারবোনের ওপরের লিম্ফ নোডে ছড়িয়ে পড়ে যা ভারচো নোড বা ট্রয়সিয়ার সাইন নামে পরিচিত।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Recurrent Laryngeal Nerve Topography and Surgical Thyroidectomy', 'রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ুর গতিপথ ও থাইরয়েড সার্জারির সতর্কতা'),
          paragraphs: [
            l(
              'Thyroid surgery presents critical anatomical hazards regarding the recurrent laryngeal nerve (RLN) and the external branch of the superior laryngeal nerve (EBSLN). The right RLN loops around the right subclavian artery, while the left RLN loops around the aortic arch, both ascending within the tracheoesophageal groove. As the nerve nears the thyroid gland, it interweaves with terminal ramifications of the inferior thyroid artery and passes deep to or directly through the adherent lateral suspensory ligament of Berry.',
              'থাইরয়েড অস্ত্রোপচারের প্রধান ঝুঁকি হলো রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ু (RLN) এবং সুপিরিয়র ল্যারিঞ্জিয়াল স্নায়ুর বহিঃশাখা। ডান স্নায়ুটি সাবক্লেভিয়ান ধমনীকে এবং বাম স্নায়ুটি অ্যাওর্টিক আর্চকে পেঁচিয়ে শ্বাসনালি ও খাদ্যনালির মধ্যবর্তী খাঁজ দিয়ে ওপরে ওঠে। থাইরয়েডের কাছাকাছি পৌঁছে স্নায়ুটি ইনফিরিয়র থাইরয়েড ধমনীর শাখাগুলোর সাথে ঘনিষ্ঠভাবে জড়িয়ে যায় এবং বেরির লিগামেন্টের ভেতর দিয়ে বা নিচ দিয়ে ল্যারিংসে প্রবেশ করে।'
            ),
            l(
              'During ligation of the superior thyroid vascular pedicle, the surgeon must remain within millimeters of the superior pole to avoid injuring the EBSLN, which innervates the cricothyroid muscle; transection impairs vocal cord tension, causing loss of high pitch and vocal fatigue. Simultaneously, preserving parathyroid function requires subcapsular dissection and ligating tertiary branches of the inferior thyroid artery directly upon the thyroid capsule to protect end-arterial branches supplying the parathyroids.',
              'সুপিরিয়র থাইরয়েড ধমনী বাঁধার সময় সার্জনকে থাইরয়েডের উপরের প্রান্তের অত্যন্ত কাছাকাছি থাকতে হয় যাতে ক্রিকোকথাইরয়েড পেশী নিয়ন্ত্রণকারী সুপিরিয়র ল্যারিঞ্জিয়াল স্নায়ুর বাহ্যিক শাখা ক্ষতিগ্রস্ত না হয়; এই স্নায়ু ছিঁড়ে গেলে উচ্চস্বরে কথা বলার ক্ষমতা নষ্ট হয়। একই সাথে প্যারাথাইরয়েড গ্রন্থিগুলোকে বাঁচাতে হলে ইনফিরিয়র থাইরয়েড ধমনীর প্রান্তীয় ক্ষুদ্র শাখাগুলোকে থাইরয়েড ক্যাপসুলের একেবারে গায়ে বেঁধে রক্ত সরবরাহ সুরক্ষিত রাখতে হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Neuroendocrine Synthesis & Systemic Hemodynamic Integration', 'নিউরোএন্ডোক্রাইন সমন্বয় ও রক্ত সংবহনের সাথে লসিকার সম্পর্ক'),
          paragraphs: [
            l(
              'Academic mastery of the endocrine and lymphatic systems demands deep comprehension of microvascular and fascial architectures: the fenestrated portals of the hypophysis, the zonal steroidogenic enzymes of the adrenal cortex, the splenic stave cell filtration slits, and the asymmetric termination of major lymphatic ducts at the venous angles of the neck.',
              'অন্তঃস্রাবী ও লসিকাতন্ত্রের গভীর প্রাতিষ্ঠানিক জ্ঞান অর্জনে সূক্ষ্ম রক্তনালী ও ফাসিয়ার বিন্যাস অনুধাবন অপরিহার্য: পিটুইটারির বিশেষায়িত রক্তজালক, অ্যাড্রেনাল কর্টেক্সের জোনভিত্তিক হরমোন সংশ্লেষণ, প্লীহার লাল মজ্জায় রক্ত ফিল্ট্রেশনের সরু ছিদ্র এবং ঘাড়ের ভেনাস অ্যাঙ্গেলে থোরাসিক ডাক্ট ও ডান লিম্ফ্যাটিক ডাক্টের অপ্রতিসম নিষ্কাশন ব্যবস্থা।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উন্নত'),
      sections: [
        {
          id: 'integration',
          heading: l('Sentinel Lymph Node Biopsy and Cancer Lymphatic Metastasis', 'সেন্টিনেল লিম্ফ নোড বায়োপসি এবং ক্যান্সারের লসিকা বিস্তার'),
          paragraphs: [
            l(
              'In modern surgical oncology, the lymphatic dissemination of epithelial carcinomas (e.g., breast adenocarcinoma, malignant melanoma) follows an orderly, predictable path toward regional draining lymph basins. The sentinel lymph node (SLN) is defined as the first lymph node or nodal group receiving direct lymphatic drainage from the primary malignant tumor. If the sentinel node is histologically free of tumor micrometastases, the likelihood that downstream nodes contain cancer is less than 5%.',
              'আধুনিক ক্যান্সার সার্জারিতে ব্রেস্ট বা ত্বকের মেলানোমা ক্যান্সার ছড়িয়ে পড়ার সময় লসিকানালী বেয়ে সুনির্দিষ্ট নিয়মে সামনের দিকে অগ্রসর হয়। সেন্টিনেল লিম্ফ নোড হলো সেই প্রথম নোড যা টিউমার থেকে সরাসরি লসিকা পায়। অপারেশন করার সময় যদি এই সেন্টিনেল নোডটি পরীক্ষা করে দেখা যায় এতে ক্যান্সারের কোনো জীবাণু নেই, তবে পেছনের বাকি সমস্ত লিম্ফ নোড কেটে ফেলার কোনো প্রয়োজন হয় না, যা রোগীর জটিলতা অনেক কমিয়ে দেয়।'
            ),
            l(
              'Intraoperative lymphatic mapping combines technetium-99m labeled sulfur colloid (tracked using a handheld gamma radiation probe) and vital blue dye (isosulfan blue or patent blue) injected peritumorally. Following blue lymphatic channels to the "hot and blue" sentinel node permits targeted, minimally invasive excision. This technique avoids the severe morbidity of routine complete axillary lymph node dissection, specifically reducing the incidence of chronic, disfiguring upper-limb lymphedema from 20–30% down to under 5%.',
              'অপারেশনের সময় টিউমারের চারপাশে তেজস্ক্রিয় রেডিওআইসোটোপ ও নীল রঙ ইনজেকশন দিয়ে গামা প্রোবের সাহায্যে সেই প্রথম "হট অ্যান্ড ব্লু" সেন্টিনেল নোডটি নিখুঁতভাবে খুঁজে বের করে কেটে আনা হয়। এর ফলে রোগীকে অযথা বগলের সব লিম্ফ নোড কেটে ফেলার মারাত্মক পার্শ্বপ্রতিক্রিয়া এবং সারাজীবন হাত ফুলে পানি জমে শক্ত হয়ে যাওয়া (লিম্ফিডিমা) থেকে বাঁচানো সম্ভব হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Surgical Endocrine Emergencies and Intraoperative Neuromonitoring', 'জরুরি সার্জিক্যাল এন্ডোক্রিনোলজি এবং ইন্ট্রাঅপারেটিভ নিউরোমনিটরিং'),
          paragraphs: [
            l(
              'Thyroidectomy and parathyroidectomy demand precise mastery of neck fascial planes and neurovascular pedicles. The recurrent laryngeal nerve (RLN) ascends along the tracheoesophageal groove, passing deep to or through the suspensory ligament of Berry into the larynx. Unilateral transection results in ipsilateral vocal fold paralysis in the paramedian position, causing persistent hoarseness and breathy dysphonia; bilateral transection causes immediate adductor spasm, airway compromise, and requires emergency tracheostomy.',
              'থাইরয়েড বা প্যারাথাইরয়েডের অপারেশনে গলার জটিল স্নায়ু ও রক্তনালীর জ্ঞান অপরিহার্য। রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ুটি শ্বাসনালির পেছনের খাঁজ দিয়ে ভ্যারির লিগামেন্ট ভেদ করে ল্যারিংসে ঢোকে। ভুলবশত একপাশের স্নায়ু কেটে গেলে রোগীর গলার স্বর সারাজীবনের জন্য ভেঙে যায়; কিন্তু উভয় পাশের স্নায়ু একসাথে ক্ষতিগ্রস্ত হলে শ্বাসনালি পুরোপুরি বন্ধ হয়ে যায় এবং রোগীকে বাঁচানোর জন্য তাৎক্ষণিক গলায় ছিদ্র (ট্র্যাকিওস্টমি) করতে হয়।'
            ),
            l(
              'To minimize nerve injury, modern endocrine surgery utilizes continuous intraoperative neuromonitoring (IONM) with an electromyographic endotracheal tube. Furthermore, surgeons must meticulously preserve the blood supply to the parathyroid glands—derived primarily from terminal end-arterial branches of the inferior thyroid artery. Inadvertent devascularization or total excision of all four parathyroid glands causes profound, life-threatening postoperative hypocalcemia presenting with neuromuscular tetany, perioral paresthesias, Chvostek sign, and Trousseau carpopedal spasm.',
              'স্নায়ুর ক্ষতি এড়াতে আধুনিক অপারেশনে বিশেষ ইলেকট্রোডযুক্ত টিউব দিয়ে স্নায়ুর বিদ্যুৎ সংকেত মনিটর করা হয়। তাছাড়া ইনফিরিয়র থাইরয়েড ধমনী থেকে রক্ত পাওয়া প্যারাথাইরয়েড গ্রন্থিগুলোকে অক্ষত রাখা অত্যন্ত জরুরি। ভুলবশত চারটি প্যারাথাইরয়েডই ক্ষতিগ্রস্ত হলে অপারেশনের পর রক্তে ক্যালসিয়াম ভয়ানকভাবে কমে যায়, যার ফলে রোগীর হাত-পা বেঁকে খিঁচুনি (টিটানি) এবং শ্বাসকষ্টের মতো প্রাণঘাতী জটিলতা দেখা দেয়।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-part schematic of the endocrine and lymphatic systems: hypothalamic master control, thyroid-adrenal metabolic regulation, lymphoid tissue immune filtration, and the thoracic duct venous return.',
      'অন্তঃস্রাবী ও লসিকাতন্ত্রের ৪টি স্তর: হাইপোথ্যালামিক মাস্টার কন্ট্রোল, থাইরয়েড-অ্যাড্রেনাল বিপাকীয় নিয়ন্ত্রণ, লিম্ফয়েড প্রতিরক্ষামূলক ফিল্টার এবং থোরাসিক ডাক্টের রক্ত সংবহনে প্রত্যাবর্তন।'
    ),
    steps: [
      l(
        '1. The hypothalamus signals the pituitary gland to release trophic hormones regulating systemic metabolism and adrenal response.',
        '১. হাইপোথ্যালামাস পিটুইটারি গ্রন্থিকে সংকেত পাঠিয়ে বিপাক ও স্ট্রেস নিয়ন্ত্রণকারী ট্রফিক হরমোনগুলো নিঃসরণ করায়।'
      ),
      l(
        '2. The thyroid, parathyroids, and adrenal glands synthesize steroid and peptide hormones to maintain calcium and glucose homeostasis.',
        '২. থাইরয়েড, প্যারাথাইরয়েড ও অ্যাড্রেনাল গ্রন্থি হরমোন তৈরি করে রক্তে ক্যালসিয়াম, রক্তচাপ ও গ্লুকোজের ভারসাম্য বজায় রাখে।'
      ),
      l(
        '3. Lymph nodes and the spleen deploy B and T-lymphocytes to screen lymphatic fluid and circulating blood for foreign pathogens.',
        '৩. লিম্ফ নোড এবং প্লীহা লসিকা ও রক্ত থেকে ক্ষতিকারক জীবাণু ও ব্যাকটেরিয়া ফিল্টার করে রোগ প্রতিরোধ করে।'
      ),
      l(
        '4. The cisterna chyli and thoracic duct return 3 to 4 liters of filtered lymphatic fluid and chyle into the left venous angle daily.',
        '৪. সিস্টার্না কাইলি ও থোরাসিক ডাক্ট প্রতিদিন ৩ থেকে ৪ লিটার পরিশ্রুত লসিকা তরল বাম ভেনাস অ্যাঙ্গেলে ফেরত পাঠায়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 45-year-old woman undergoes total thyroidectomy for multinodular goiter. On post-operative day 2, she develops numbness and tingling around her lips and fingertips, followed by painful involuntary carpopedal muscle spasms when her blood pressure cuff is inflated. Which anatomical structures were inadvertently devascularized or removed during surgery to cause this acute presentation?',
      'বহু-গ্রন্থিময় গয়টারের জন্য ৪৫ বছর বয়সী এক নারীর সম্পূর্ণ থাইরয়েড গ্রন্থি কেটে ফেলা হলো। অপারেশনের ২ দিন পর তার ঠোঁট ও আঙ্গুলের চারপাশে অবশ অনুভূতি এবং রক্তচাপ মাপার কাফ ফোলালে হাতে তীব্র ব্যথাদায়ক খিঁচুনি শুরু হয়। থাইরয়েড অপারেশনের সময় অসাবধানতাবশত কোন অঙ্গগুলো রক্তহীন বা অপসারিত হওয়ার কারণে এই সংকট তৈরি হয়েছে?'
    ),
    options: [
      l('Parathyroid glands resulting in severe acute hypocalcemia', 'প্যারাথাইরয়েড গ্রন্থিসমূহ, যার ফলে রক্তে তীব্র ক্যালসিয়াম স্বল্পতা (Hypocalcemia) হয়েছে'),
      l('Recurrent laryngeal nerves resulting in bilateral vocal cord adduction', 'রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ু, যার ফলে স্বরতন্ত্রীর অবশতা তৈরি হয়েছে'),
      l('External branch of the superior laryngeal nerve', 'সুপিরিয়র ল্যারিঞ্জিয়াল স্নায়ুর বহিঃশাখা'),
      l('Cervical sympathetic chain resulting in Horner syndrome', 'সারভাইকাল সিমপ্যাথেটিক চেইন, যার ফলে হর্নার সিন্ড্রোম তৈরি হয়েছে'),
    ],
    correctIndex: 0,
    explanation: l(
      'The clinical findings of perioral paresthesia and carpopedal spasm (Trousseau sign) are classic hallmarks of acute hypocalcemic tetany caused by accidental excision or devascularization of the fragile parathyroid glands during total thyroidectomy. The parathyroid glands lie on the posterior capsule of the thyroid lobes and depend on delicate terminal branches of the inferior thyroid artery; loss of PTH leads to precipitously falling serum ionized calcium.',
      'ঠোঁটের চারপাশে অবশ লাগা এবং রক্তচাপ মাপার সময় হাতে টান ধরে খিঁচুনি হওয়া (ট্রুসো সাইন) হলো তীব্র ক্যালসিয়াম স্বল্পতার নিশ্চিত লক্ষণ, যা থাইরয়েড অপারেশনের সময় অসাবধানতাবশত পেছনের প্যারাথাইরয়েড গ্রন্থিগুলো কেটে ফেলা বা সেগুলোর রক্তনালী নষ্ট করার ফলে ঘটে। এর ফলে প্যারাথরমোনের অভাবে রক্তে ক্যালসিয়াম মারাত্মক কমে যায়।'
    ),
  },
}
