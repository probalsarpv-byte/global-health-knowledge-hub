import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch25',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 25: The Urinary System',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-introduction',
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

export const chapter13UrinaryLesson: LessonTopic = {
  id: 'topic.anatomy.urinary',
  slug: 'urinary',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('13 · Urinary Anatomy', '১৩ · মূত্রতন্ত্রের অ্যানাটমি'),
  summary: l(
    'A comprehensive exploration of the human urinary system: retroperitoneal renal topography, cortical-medullary pyramids, nephron ultrastructure, podocyte slit diaphragms, the juxtaglomerular apparatus, ureteral constrictions, urinary bladder trigone, and micturition mechanics.',
    'মানবদেহের মূত্রতন্ত্রের বিশদ ও ক্লিনিক্যাল শারীরস্থানিক অধ্যয়ন: রেট্রোপেরিটোনিয়াল কিডনির অবস্থান, কর্টেক্স-মেডুলারি পিরামিড, নেফ্রনের অণুগঠন, পোডোসাইটের স্লিট ডায়াফ্রাম, জাক্সটাগ্লোমেরুলার কমপ্লেক্স, ইউরেটারের তিনটি সংকীর্ণ বিন্দু, মূত্রথলির ট্রাইগোন এবং মূত্রত্যাগের স্নায়বিক বলবিদ্যা।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Describe retroperitoneal renal topography (T12–L3), fascial envelopes (Gerota fascia, perirenal fat), and macroscopic internal organization into cortex, medullary pyramids, and calyces.',
      'কিডনির রেট্রোপেরিটোনিয়াল অবস্থান (T12–L3), প্রতিরক্ষামূলক ফাসিয়া স্তর (জেরোটা ফাসিয়া, পেরিরেনাল ফ্যাট) এবং অভ্যন্তরীণ কর্টেক্স, মেডুলারি পিরামিড ও ক্যালিক্সের স্থূল সংগঠন ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Analyze nephron microarchitecture, the three-layered glomerular filtration barrier (fenestrated endothelium, GBM, podocyte slit diaphragms), and the juxtaglomerular apparatus.',
      'নেফ্রনের অণুগঠন, তিন স্তরীয় গ্লোমেরুলার পরিস্রাবণ পর্দা (ছিদ্রযুক্ত এন্ডোথেলিয়াম, বেসমেন্ট মেমব্রেন, পোডোসাইট স্লিট ডায়াফ্রাম) এবং জাক্সটাগ্লোমেরুলার কমপ্লেক্স বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Map the course of the ureters, identify the three clinical sites of luminal constriction where calculi impinge, and delineate the neuroanatomy of the micturition reflex.',
      'ইউরেটারের গতিপথ চিহ্নিত করা, পাথর আটকে যাওয়ার তিনটি ঝুঁকিপূর্ণ সংকীর্ণ বিন্দু নির্ণয় করা এবং মূত্রথলি খালি করার মূত্রত্যাগ প্রতিবর্ত ক্রিয়া (Micturition reflex) ব্যাখ্যা করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.cardiovascular'],
  relatedTopicIds: ['topic.anatomy.cells-tissues'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch25', 'moore-anatomy-9e'],
    structure: ['openstax-ap2e-ch25', 'junqueira-histology-16e'],
    mechanism: ['guyton-hall-14e', 'openstax-ap2e-ch25'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'guyton-hall-14e'],
    takeaways: ['openstax-ap2e-ch25', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Renal Topography & Protective Envelopes', 'ভূমিকা: কিডনির অবস্থান ও প্রতিরক্ষামূলক পর্দা'), sectionId: 'introduction' },
      { id: 'sec-nephron', label: l('Nephron Ultrastructure & Filtration Membrane', 'নেফ্রনের অণুগঠন ও পরিস্রাবণ ঝিল্লি'), sectionId: 'structure' },
      { id: 'sec-jga', label: l('Juxtaglomerular Apparatus & Tubule Countercurrent', 'জাক্সটাগ্লোমেরুলার কমপ্লেক্স ও নালিকার প্রতিস্রোত ব্যবস্থা'), sectionId: 'mechanism' },
      { id: 'sec-ureters-bladder', label: l('Ureters, Trigone & Urethral Sphincters', 'ইউরেটার, ট্রাইগোন ও মূত্রনালির স্ফিংক্টার'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Nephrology: Calculi, Obstruction & Reflux', 'ক্লিনিক্যাল নেফ্রোলজি: কিডনির পাথর, বাধা ও রিফ্লাক্স'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary & Urinary Anatomy Glossary', 'সারসংক্ষেপ ও মূত্রতন্ত্রের শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Glomerular Filtration Barrier (GFB)', 'গ্লোমেরুলার পরিস্রাবণ প্রাচীর'),
        definition: l(
          'A three-layered molecular sieve consisting of fenestrated capillary endothelium, negative-charged glomerular basement membrane (GBM), and podocyte pedicel slit diaphragms.',
          'একটি তিন স্তরীয় আণবিক ছাঁকনি যা ছিদ্রযুক্ত কৈশিক এন্ডোথেলিয়াম, ঋণাত্মক চার্জযুক্ত বেসমেন্ট মেমব্রেন এবং পোডোসাইটের স্লিট ডায়াফ্রাম পর্দা নিয়ে গঠিত।'
        ),
      },
      {
        term: l('Ureteral Constriction Points', 'ইউরেটারের তিনটি সংকীর্ণ বিন্দু'),
        definition: l(
          'Three discrete physiological narrowings along the 25 cm muscular ureter where renal calculi lodge: ureteropelvic junction (UPJ), pelvic brim crossing iliac vessels, and ureterovesical junction (UVJ).',
          'ইউরেটারের ৩টি স্বাভাবিক সংকীর্ণ স্থান যেখানে কিডনির পাথর আটকে যায়: রেনাল পেলভিসের মুখ (UPJ), পেলভিসের কিনারায় রক্তনালী পার হওয়ার স্থান এবং মূত্রথলির প্রবেশদ্বার (UVJ)।'
        ),
      },
      {
        term: l('Juxtaglomerular Apparatus (JGA)', 'জাক্সটাগ্লোমেরুলার কমপ্লেক্স (JGA)'),
        definition: l(
          'A specialized sensor complex comprising macula densa cells sensing luminal NaCl, renin-secreting juxtaglomerular cells, and extraglomerular mesangial cells regulating systemic blood pressure.',
          'প্রতিটি নেফ্রনের রক্তনালীর প্রবেশমুখে অবস্থিত সেন্সর কমপ্লেক্স যা সোডিয়াম মেপে রেনিন হরমোন ক্ষরণের মাধ্যমে রক্তচাপ ও পরিস্রাবণের ভারসাম্য রক্ষা করে।'
        ),
      },
      {
        term: l('Trigone of the Bladder (Lieutaud)', 'মূত্রথলির ট্রাইগোন'),
        definition: l(
          'A smooth, non-distensible triangular mucosal area on the internal bladder base bounded by the two ureteric orifices and the internal urethral orifice, free from rugal folds.',
          'মূত্রথলির ভেতরের তলায় অবস্থিত মসৃণ ত্রিকোণাকার অঞ্চল যার দুই কোণে দুটি ইউরেটারের মুখ এবং নিচে মূত্রনালির অভ্যন্তরীণ মুখ থাকে; এখানে কোনো ভাঁজ থাকে না।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Tracing Ureteric Colic and Dermatomal Pain Radiance', 'ইউরেটারিক কলিক এবং ডার্মাটোমভিত্তিক ব্যথার বিস্তার নির্ণয়'),
        steps: [
          l('Step 1: An obstructing calculus causes proximal ureteral hyperperistalsis, stimulating visceral pain afferents (T11 to L2).', 'ধাপ ১: ইউরেটারে পাথর আটকে গেলে তীব্র পেশী সংকোচনের ফলে ভিসেরাল স্নায়ু উত্তেজিত হয়ে T11 থেকে L2 ডার্মাটোমে সংকেত পাঠায়।'),
          l('Step 2: Recognize referral: upper ureter pain presents in the flank/costovertebral angle; mid-ureter pain shifts to lower abdomen and iliac fossa.', 'ধাপ ২: পাথর যখন ইউরেটারের ওপরের অংশে থাকে তখন কোমরে ও পিঠে ব্যথা হয়; পাথর মাঝামাঝি নামলে ব্যথা তলপেটে ছড়িয়ে পড়ে।'),
          l('Step 3: Note genitofemoral radiation: at the lower ureter/UVJ, pain refers to scrotum/labium majus via genitofemoral nerve (L1-L2).', 'ধাপ ৩: পাথর যখন মূত্রথলির প্রবেশমুখে পৌঁছায় তখন জেনিটোফিমোরাল স্নায়ুর কারণে ব্যথা অণ্ডকোষ বা ভলভায় তীব্রভাবে অনুভূত হয়।'),
        ],
        conclusion: l('Pain migration from loin to groin dynamically charts stone passage along ureteric constrictions, guiding clinical analgesia and urological intervention.', 'কোমর থেকে তলপেট হয়ে কুঁচকিতে ব্যথার এই গতিশীল স্থানান্তর পাথরের অবস্থান সঠিকভাবে নির্দেশ করে।' ),
      },
    ],
    checkpoints: [
      {
        question: l('Why does an acute obstructing calculus at the ureteropelvic junction (UPJ) cause hydronephrosis without immediately dilating the distal ureter?', 'রেনাল পেলভিস ও ইউরেটারের মিলনস্থলে (UPJ) পাথর আটকে গেলে ইউরেটার না ফুলে শুধু কিডনি পানি জমে স্ফীত হয় কেন?'),
        answer: l('Because obstruction is located at the origin of the ureter. Hydrostatic pressure backs up into the renal pelvis and calyces, distending the kidney, while the distal ureter remains empty.', 'কারণ পাথরটি ইউরেটারের ঠিক উৎপত্তিস্থলে আটকে থাকে; ফলে প্রস্রাব কেবল রেনাল পেলভিস ও ক্যালিক্সে জমা হয়ে কিডনিকে ফুলিয়ে দেয় কিন্তু নিচের ইউরেটার খালি থাকে।'),
      },
      {
        question: l('How does the anatomical oblique tunnel of the ureter through the bladder wall prevent vesicoureteral reflux (VUR) during micturition?', 'মূত্রথলির প্রাচীর দিয়ে ইউরেটারের তির্যক গতিপথ কীভাবে মূত্র উল্টো ফেরত যাওয়া প্রতিরোধ করে?'),
        answer: l('The terminal 1.5 to 2 cm of the ureter pierces the detrusor obliquely. During bladder contraction, intravesical pressure naturally compresses this intramural tunnel like a one-way flap valve.', 'ইউরেটার মূত্রথলির প্রাচীর তির্যকভাবে ভেদ করে ঢোকে; ফলে মূত্রথলি সংকুচিত হলে নালিটি ভালভের মতো চেপে বন্ধ হয়ে যায় এবং প্রস্রাব আর উল্টো কিডনিতে যেতে পারে না।'),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch13-urinary-diagram',
    title: l('Interactive Renal Microarchitecture & Urinary Conduit', 'ইন্টারেক্টিভ কিডনির অণুগঠন ও মূত্র পরিবহন ব্যবস্থা'),
    description: l(
      'Inspect the four primary architectural zones of the urinary system: the renal cortex and columns, the medullary pyramids and calyces, the glomerular filtration barrier, and the ureterovesical micturition tract.',
      'মূত্রতন্ত্রের চারটি প্রধান শারীরস্থানিক অঞ্চল পরীক্ষা করুন: রেনাল কর্টেক্স ও কলাম, মেডুলারি পিরামিড ও ক্যালিক্স, গ্লোমেরুলার ছাঁকনি পর্দা এবং ইউরেটার ও মূত্রথলি।'
    ),
    disclaimer: l(
      'Urinary anatomical schematic: select any sector to review podocyte filtration mechanics, the countercurrent multiplier, and clinical stone impaction points.',
      'মূত্রতন্ত্রের চিত্র: পোডোসাইট ছাঁকনি ব্যবস্থা, নালিকার প্রতিস্রোত গুণক এবং কিডনির পাথর আটকে যাওয়ার সংকীর্ণ স্থানগুলো দেখতে যেকোনো অংশ নির্বাচন করুন।'
    ),
    svgType: 'urinary-system',
    items: [
      {
        id: 'renal-cortex',
        label: l('Renal Cortex & Glomerular Corpuscles', 'রেনাল কর্টেক্স ও গ্লোমেরুলার কণিকা'),
        description: l(
          'Outer 1 cm parenchyma containing 1.2 million renal corpuscles, proximal and distal convoluted tubules, and cortical collecting ducts. Receives 90% of renal blood flow.',
          'কিডনির বাইরের ১ সেমি অংশ যেখানে ১২ লাখ গ্লোমেরুলাস ও পেঁচানো নালিকা থাকে। কিডনিতে আসা মোট রক্তের ৯০ শতাংশই এই কর্টেক্স অঞ্চলের মধ্য দিয়ে প্রবাহিত হয়।'
        ),
        details: l(
          'Cortical extensions called renal columns of Bertin project deeply between medullary pyramids. Ultrafiltration rate normalizes to 120-125 mL/min (GFR).',
          'বার্তিনের রেনাল কলামগুলো পিরামিডের ফাঁক দিয়ে গভীরে প্রবেশ করে। প্রতি মিনিটে প্রায় ১২০ থেকে ১২৫ মিলিলিটার তরল এখানে প্রথম পরিস্রুত হয়।'
        ),
        sectionId: 'structure',
        color: '#fecdd3',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'medulla-calyces',
        label: l('Medullary Pyramids & Pelvicalyceal Collector', 'মেডুলারি পিরামিড ও ক্যালিক্স সংগ্রহশালা'),
        description: l(
          'Inner renal zone containing 8 to 18 striated conical pyramids housing loops of Henle and ducts of Bellini. Renal papillae discharge into minor and major calyces.',
          'কিডনির ভেতরের ৮ থেকে ১৮টি ত্রিভুজাকার মেডুলারি পিরামিড যা হেনলির লুপ এবং সংগ্রাহী নালি বহন করে। পিরামিডের অগ্রভাগ ক্যালিক্সে মূত্র ঢেলে দেয়।'
        ),
        details: l(
          'Vasa recta and long loops of Henle maintain a hyperosmotic corticomedullary gradient (300 to 1200 mOsm/kg) essential for ADH-dependent water reclamation.',
          'ভাসা রেকটা রক্তনালী ও হেনলির লম্বা লুপ মিলে মেডুলায় লবণাক্ততার এক বিশেষ গ্রেডিয়েন্ট তৈরি করে যা পানি পুনঃশোষণ করে মূত্র ঘনীভূত করতে সাহায্য করে।'
        ),
        sectionId: 'mechanism',
        color: '#fed7aa',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'filtration-barrier',
        label: l('Glomerular Filtration Barrier & Podocytes', 'গ্লোমেরুলার ছাঁকনি প্রাচীর ও পোডোসাইট'),
        description: l(
          'Tripartite molecular filter: fenestrated endothelium, thick negatively charged glomerular basement membrane (GBM), and interdigitating podocyte foot processes.',
          'তিন স্তরীয় আণবিক ছাঁকনি: ছিদ্রযুক্ত রক্তনালী, ঋণাত্মক চার্জযুক্ত বেসমেন্ট মেমব্রেন এবং আঙ্গুলের মতো আটকে থাকা পোডোসাইট কোষের স্লিট ডায়াফ্রাম পর্দা।'
        ),
        details: l(
          'Nephrin and podocin bridge filtration slits (25–30 nm), preventing proteinuria. Disruption leads to nephrotic syndrome, massive proteinuria, and peripheral edema.',
          'নেফ্রিন ও পোডোসিন প্রোটিন স্লিট ডায়াফ্রামকে শক্তিশালী রাখে যাতে রক্ত থেকে প্রোটিন বের না হয়। এতে সমস্যা হলে নেফ্রোটিক সিন্ড্রোমে শরীর ফুলে পানি জমে যায়।'
        ),
        sectionId: 'integration',
        color: '#fef08a',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'ureter-bladder',
        label: l('Ureters, Bladder Trigone & Sphincters', 'ইউরেটার, ব্লাডার ট্রাইগোন ও স্ফিংক্টার'),
        description: l(
          'Active conduit and compliant reservoir. 25 cm muscular ureters display 3 constrictions. Trigone forms non-distensible base of the detrusor bladder.',
          '২৫ সেমি দীর্ঘ পেশীবহুল ইউরেটারে তিনটি প্রাকৃতিক সংকীর্ণ খাঁজ থাকে যেখানে পাথর আটকে যায়। মূত্রথলির নিচে মসৃণ ট্রাইগোন মূত্রনালির পথ নির্দেশ করে।'
        ),
        details: l(
          'Parasympathetic pelvic splanchnic nerves (S2–S4) stimulate detrusor contraction and internal sphincter relaxation during voluntary micturition.',
          'পেলভিক স্প্ল্যাঙ্কনিক প্যারাসিমপ্যাথেটিক স্নায়ু (S2–S4) মূত্রথলির পেশী সংকুচিত করে এবং স্ফিংক্টার শিথিল করে সহজে মূত্রত্যাগে সহায়তা করে।'
        ),
        sectionId: 'practice',
        color: '#bfdbfe',
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
          heading: l('Renal Topography, Gerota Fascia and Anatomical Relations', 'কিডনির অবস্থান, জেরোটা ফাসিয়া ও আশপাশের সম্পর্ক'),
          paragraphs: [
            l(
              'The kidneys are paired, bean-shaped organs positioned retroperitoneally against the posterior abdominal wall on either side of the vertebral column, extending from the level of the T12 vertebra down to the L3 vertebra. Because the massive right lobe of the liver occupies the right upper quadrant, the right kidney typically sits approximately 2 to 3 centimeters lower than the left kidney. Each adult kidney measures approximately 10 to 12 cm in length, 5 to 7 cm in breadth, and 3 cm in thickness, weighing roughly 150 grams.',
              'মানবদেহে কিডনি দুটি শিমের দানার মতো আকৃতির অঙ্গ যা মেরুদণ্ডের দুই পাশে পেটের পেছনের প্রাচীরে রেট্রোপেরিটোনিয়াল স্থানে T12 থেকে L3 কশেরুকা বরাবর অবস্থান করে। ডান পাশে যকৃতের বিশাল আকার থাকার কারণে ডান কিডনিটি বাম কিডনির চেয়ে প্রায় ২ থেকে ৩ সেন্টিমিটার নিচে থাকে। একজন পূর্ণবয়স্ক মানুষের প্রতিটি কিডনি প্রায় ১০ থেকে ১২ সেন্টিমিটার লম্বা, ৫ থেকে ৭ সেন্টিমিটার চওড়া এবং প্রায় ১৫০ গ্রাম ওজনের হয়ে থাকে।'
            ),
            l(
              'Each kidney is protected by four concentric anatomical layers: (1) an intimate fibrous renal capsule that strips easily from healthy parenchyma, (2) an abundant cushion of perinephric (perirenal) fat that buffers against mechanical trauma, (3) the fibroelastic renal fascia of Gerota which encloses the kidney and suprarenal gland within a distinct compartment, and (4) an outer layer of paranephric fat anchoring the organ within the retroperitoneum.',
              'প্রতিটি কিডনি চারটি প্রতিরক্ষামূলক স্তরে আবৃত থাকে: (১) সবচেয়ে ভেতরের শক্ত আঁশযুক্ত রেনাল ক্যাপসুল, (২) পেরিরেনাল চর্বির একটি মোটা কুশন যা বাইরের আঘাত থেকে কিডনিকে রক্ষা করে, (৩) জেরোটা ফাসিয়া নামক ফাইব্রাস পর্দা যা কিডনি ও এড্রেনাল গ্রন্থিকে একসাথে আটকে রাখে এবং (৪) প্যারারেনাল চর্বির বাইরের স্তর যা কিডনিকে পেটের পেছনে স্থির রাখে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Internal Macroscopic Architecture: Cortex, Medulla and Calyces', 'কিডনির অভ্যন্তরীণ স্থূল গঠন: কর্টেক্স, মেডুলা ও ক্যালিক্স'),
          paragraphs: [
            l(
              'A coronal section through the kidney exposes two distinct parenchymal regions surrounding a central cavity known as the renal sinus. The outer zone is the reddish-brown renal cortex, approximately 1 cm thick, which projects inwardly between the medullary pyramids as the renal columns of Bertin. The inner zone is the renal medulla, characterized by 8 to 18 conical, striated structures termed renal medullary pyramids whose bases face the cortex and whose rounded apices, or renal papillae, project inward.',
              'কিডনি লম্বালম্বি কাটলে দুটি স্পষ্ট অংশ দেখা যায়: বাইরের লালচে-বাদামী রেনাল কর্টেক্স এবং ভেতরের রেনাল মেডুলা। কর্টেক্স অঞ্চলটি মেডুলারি পিরামিডগুলোর ফাঁকে ফাঁকে বার্তিনের কলাম হিসেবে গভীরে প্রবেশ করে। মেডুলা অঞ্চলে ৮ থেকে ১৮টি শঙ্কু আকৃতির পিরামিড থাকে যাদের গোড়া কর্টেক্সের দিকে এবং সূক্ষ্ম শীর্ষভাগ বা রেনাল প্যাপিলা ভেতরের রেনাল সাইনাসের দিকে মুখ করে থাকে।'
            ),
            l(
              'Each renal papilla is perforated by the openings of 20 to 30 papillary ducts of Bellini and is cupped by a funnel-like minor calyx. Two or three minor calyces coalesce to form a major calyx, and the major calyces unite to form the expanded, funnel-shaped renal pelvis. The renal pelvis emerges through the medial hilum—accompanied by the anterior renal vein and intermediate renal artery—and tapers inferiorly into the ureter at the ureteropelvic junction.',
              'প্রতিটি রেনাল প্যাপিলা বেলিনির সংগ্রাহী নালিগুলোর মাধ্যমে একটি ফানেল আকৃতির মাইনর ক্যালিক্সে মূত্র ঢেলে দেয়। দুই বা তিনটি মাইনর ক্যালিক্স মিলে একটি মেজর ক্যালিক্স তৈরি করে এবং কয়েকটি মেজর ক্যালিক্স মিলে রেনাল পেলভিস গঠন করে। এই পেলভিসটি কিডনির মাঝখানের খাঁজ বা হাইলাম দিয়ে বের হয়ে ইউরেটারোপেলভিক সংযোগস্থলে ইউরেটারে রূপান্তরিত হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Glomerular Filtration Barrier and Nephron Architecture', 'গ্লোমেরুলার পরিস্রাবণ প্রাচীর ও নেফ্রনের অণুগঠন'),
          paragraphs: [
            l(
              'The nephron represents the structural and functional unit of the human kidney, numbering approximately 1.2 million per organ. Each nephron begins with a renal corpuscle, composed of an anastomosing capillary tuft (the glomerulus) invaginating into Bowman capsule. The filtration barrier consists of fenestrated capillary endothelium, a thick negatively charged glomerular basement membrane (GBM), and interdigitating podocyte foot processes bridged by slit diaphragms.',
              'প্রতিটি কিডনিতে প্রায় ১২ লাখ নেফ্রন থাকে যা মূত্র তৈরির মূল একক হিসেবে কাজ করে। প্রতিটি নেফ্রনের শুরুতে থাকে বোম্যান্স ক্যাপসুল ও গ্লোমেরুলাস। এদের মধ্যকার পরিস্রাবণ পর্দাটি ছিদ্রযুক্ত কৈশিক এন্ডোথেলিয়াম, ঋণাত্মক চার্জযুক্ত বেসমেন্ট মেমব্রেন এবং পোডোসাইটের স্লিট ডায়াফ্রাম পর্দা নিয়ে গঠিত যা রক্তরসকে ছাঁকে।'
            ),
            l(
              'This specialized molecular sieve freely filters water, glucose, amino acids, and urea while strictly barring cellular elements and plasma proteins larger than albumin (69 kDa). Ultrafiltrate flows into the proximal convoluted tubule, which reabsorbs roughly 65% of filtered water and sodium alongside 100% of filtered glucose and amino acids through apical microvillar brush borders.',
              'এই আণবিক ছাঁকনি পানি, গ্লুকোজ ও বর্জ্য পদার্থ ফিল্টার করলেও রক্তের লোহিত কণিকা ও অ্যালবুমিন প্রোটিনকে কোনোভাবেই মূত্রে যেতে দেয় না। পরিস্রুত তরল প্রক্সিমাল পেঁচানো নালিকায় ঢোকে যা তার ব্রাশ বর্ডারের মাধ্যমে প্রায় ৬৫% পানি ও সোডিয়াম এবং ১০০% গ্লুকোজ পুনরায় রক্তে শোষণ করে নেয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Ureteral Course, Constrictions and the Urinary Bladder', 'ইউরেটারের গতিপথ, সংকীর্ণ খাঁজ এবং মূত্রথলির গঠন'),
          paragraphs: [
            l(
              'The ureters are paired muscular ducts, roughly 25 to 30 cm long, that actively convey urine from the renal pelvis to the urinary bladder via myogenic peristalsis. The ureter displays three distinct physiological constrictions where renal calculi characteristically lodge: the ureteropelvic junction (UPJ), the pelvic brim crossing the common or external iliac vessels, and the ureterovesical junction (UVJ) penetrating the detrusor muscle wall obliquely.',
              'ইউরেটার দুটি হলো ২৫ থেকে ৩০ সেন্টিমিটার লম্বা পেশীবহুল নালি যা কিডনি থেকে মূত্রথলিতে সক্রিয়ভাবে প্রস্রাব পরিবহন করে। এর পথে তিনটি সংকীর্ণ স্থান রয়েছে যেখানে পাথর আটকে যায়: রেনাল পেলভিস ও ইউরেটারের মিলনস্থল (UPJ), পেলভিসের কিনারায় ইলিয়াক রক্তনালী পার হওয়ার স্থান, এবং মূত্রথলির প্রাচীরে প্রবেশের স্থান (UVJ)।'
            ),
            l(
              'The urinary bladder is a compliant pelvic reservoir featuring a thick smooth muscle wall termed the detrusor muscle. On the posteroinferior internal bladder base lies the trigone of Lieutaud, a smooth triangular mucosal region bounded by the two ureteric orifices superiorly and the internal urethral orifice inferiorly, sensitive to stretch and free from mucosal rugae.',
              'মূত্রথলি হলো একটি প্রসারণশীল থলি যার দেয়াল ডেট্রুসর মসৃণ পেশী দিয়ে গঠিত। মূত্রথলির নিচের তলায় ট্রাইগোন নামক একটি মসৃণ ত্রিকোণাকার অংশ থাকে যার দুই কোণে দুটি ইউরেটারের মুখ এবং নিচে মূত্রনালির মুখ থাকে; এই অংশে কোনো ভাঁজ থাকে না।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Nephrology: Calculi, Obstruction and Pyelonephritis', 'ক্লিনিক্যাল নেফ্রোলজি: কিডনির পাথর, বাধা ও কিডনি সংক্রমণ'),
          paragraphs: [
            l(
              'Nephrolithiasis (kidney stones) arises from supersaturation of urinary solutes, predominantly calcium oxalate (75–80%), struvite, or uric acid. When a calculus dislodges and impacts in a ureteral constriction point, acute proximal hydroureter and hydronephrosis develop. Sudden luminal distension triggers intense spasmodic contractions that generate severe referred loin-to-groin colicky pain (T11–L2).',
              'কিডনিতে পাথর মূলত ক্যালসিয়াম অক্সালেট, স্ট্রুভাইট বা ইউরিক অ্যাসিড জমাট বেঁধে তৈরি হয়। এই পাথর যখন ইউরেটারের সংকীর্ণ খাঁজে আটকে যায়, তখন পেছনে প্রস্রাব জমা হয়ে কিডনি ফুলে যায় (হাইড্রোনাফ্রোসিস)। ইউরেটারের তীব্র পেশী সংকোচনের ফলে কোমর থেকে কুঁচকি পর্যন্ত মারাত্মক কলিক ব্যথার সৃষ্টি হয়।'
            ),
            l(
              'Untreated urinary obstruction fosters stagnant bacterial colonization, predisposing to ascending acute pyelonephritis, renal parenchymal abscesses, and urosepsis. Evaluation utilizes non-contrast low-dose helical abdominal CT as the definitive imaging modality to determine calculus size, anatomical location, and secondary renal parenchymal swelling.',
              'মূত্রপথে দীর্ঘস্থায়ী বাধা থাকলে ব্যাক্টেরিয়া সংক্রমণ হয়ে তীব্র পাইলোনেফ্রাইটিস এবং ইউরোসেপসিস হতে পারে। সিটি স্ক্যানের মাধ্যমে পাথরের সঠিক আকার ও অবস্থান নির্ণয় করে জরুরি চিকিৎসা বা স্টেন্ট বসানো হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary and Urinary Anatomy Glossary', 'সারসংক্ষেপ ও মূত্রতন্ত্রের শব্দকোষ'),
          paragraphs: [
            l(
              'The urinary system maintains systemic plasma volume, electrolyte osmolality, and acid-base homeostasis while eliminating metabolic nitrogenous wastes. From the ultra-thin podocyte slit diaphragm in the cortex to the compliant detrusor musculature in the true pelvis, renal and urinary anatomy represents an exquisitely coordinated biological filtration and excretory apparatus.',
              'মূত্রতন্ত্র দেহের রক্তরস, লবণের ঘনত্ব এবং এসিড-ক্ষারের ভারসাম্য বজায় রাখার পাশাপাশি ক্ষতিকারক নাইট্রোজেন ঘটিত বর্জ্য দূর করে। কর্টেক্সের সূক্ষ্ম পোডোসাইট ছাঁকনি থেকে শুরু করে পেলভিসের শক্তিশালী মূত্রথলি পর্যন্ত প্রতিটি গঠন এক নিখুঁত জৈবিক পরিশোধন ব্যবস্থা হিসেবে কাজ করে।'
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
          heading: l('Renal Embryogenesis: Pronephros, Mesonephros and Metanephros', 'কিডনির ভ্রূণীয় বিকাশ: প্রোনেফ্রস, মেসোনেফ্রস ও মেটানেফ্রস'),
          paragraphs: [
            l(
              'During mammalian embryonic development, the urinary system develops through three successive, overlapping stages originating from intermediate mesoderm: the cervical pronephros (non-functional and transient in humans), the thoracolumbar mesonephros (functioning transiently during the first trimester before contributing to the male reproductive tract), and the metanephros, which forms the definitive permanent kidney.',
              'মানব ভ্রূণের বিকাশে মূত্রতন্ত্র ইন্টারমিডিয়েট মেসোডার্ম থেকে তিনটি ধারাবাহিক ধাপে তৈরি হয়: ঘাড়ের দিকের প্রোনেফ্রস (অকার্যকর ও ক্ষণস্থায়ী), বুকের দিকের মেসোনেফ্রস (প্রথম তিন মাস কাজ করে এবং পরে পুরুষ প্রজনন নালিতে রূপ নেয়), এবং মেটানেফ্রস যা স্থায়ী মানব কিডনি গঠন করে।'
            ),
            l(
              'Development of the metanephros begins during gestational week 5 through reciprocal inductive signaling between two embryological structures: the ureteric bud (an epithelial outgrowth of the mesonephric duct that branches to form the ureter, renal pelvis, calyces, and collecting ducts) and the metanephric blastema (mesenchymal condensation forming the nephrons). Failure of this reciprocal induction leads to renal agenesis or multicystic dysplastic kidney.',
              'পঞ্চম সপ্তাহে ইউরেটারিক বাড এবং মেটানেফ্রিক ব্লাস্টেমা নামক দুটি টিস্যুর পারস্পরিক সংকেতের মাধ্যমে স্থায়ী কিডনি তৈরি শুরু হয়; বাড থেকে ইউরেটার, পেলভিস ও সংগ্রাহী নালি তৈরি হয় এবং ব্লাস্টেমা থেকে নেফ্রনগুলো তৈরি হয়। এই সংযোগে ত্রুটি হলে শিশুর কিডনি জন্মগতভাবে অনুপস্থিত (রেনাল অ্যাজেনেসিস) হতে পারে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Podocyte Molecular Ultrastructure and Slit Diaphragm Signaling', 'পোডোসাইটের আণবিক অণুগঠন এবং স্লিট ডায়াফ্রাম সংকেত'),
          paragraphs: [
            l(
              'Podocytes are terminally differentiated, post-mitotic visceral epithelial cells that envelop the exterior surface of glomerular capillaries with primary and secondary interdigitating foot processes (pedicels). The 25 to 30 nm filtration slits between adjacent pedicels are bridged by the slit diaphragm, an extracellular porous protein zipper anchored intracellularly to the actin cytoskeleton.',
              'পোডোসাইট হলো অত্যন্ত বিশেষায়িত এপিথেলিয়াল কোষ যা আঙ্গুলের মতো পেডিসেল দিয়ে গ্লোমেরুলার রক্তনালীগুলোকে আঁকড়ে রাখে। পেডিসেলগুলোর মধ্যবর্তী ২৫ থেকে ৩০ ন্যানোমিটারের ফাঁকগুলো স্লিট ডায়াফ্রাম নামক প্রোটিন পর্দা দ্বারা আবৃত থাকে।'
            ),
            l(
              'The slit diaphragm complex is assembled from transmembrane proteins nephrin and NEPH1, which form homophilic and heterophilic extracellular bridges, coupled intracellularly via podocin and CD2AP to the actin-associated synaptopodin machinery. Genetic mutations in NPHS1 (encoding nephrin) cause Finnish-type congenital nephrotic syndrome, characterized by absent slit diaphragms, massive in utero proteinuria, and neonatal anasarca.',
              'নেফ্রিন ও পোডোসিন প্রোটিন এই স্লিট ডায়াফ্রামকে শক্তিশালী রাখে যাতে রক্ত থেকে প্রোটিন বের না হয়। নেফ্রিন জিন নষ্ট হলে জন্মগত ফিনিশ টাইপ নেফ্রোটিক সিন্ড্রোমে সারা শরীর ফুলে শিশু মারাত্মক অসুস্থ হয়ে পড়ে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Juxtaglomerular Complex and Tubuloglomerular Feedback', 'জাক্সটাগ্লোমেরুলার কমপ্লেক্স ও টিউবুলোগ্লোমেরুলার নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'The juxtaglomerular apparatus (JGA) is a specialized neuroendocrine sensor complex situated at the vascular pole of each nephron where the thick ascending limb of the loop of Henle contacts its originating afferent and efferent arterioles. It consists of three integrated cell types: macula densa cells sensing luminal NaCl, renin-secreting juxtaglomerular (JG) cells of the afferent arteriole, and extraglomerular mesangial (Lacis) cells.',
              'জাক্সটাগ্লোমেরুলার কমপ্লেক্স (JGA) হলো নেফ্রনের রক্তনালীর প্রবেশমুখে অবস্থিত একটি নিয়ন্ত্রণ কেন্দ্র। এটি সোডিয়াম-ক্লোরাইড পরিমাপকারী ম্যাকুলা ডেনসা কোষ, রেনিন হরমোন ক্ষরণকারী জেজি কোষ এবং এক্সট্রাগ্লোমেরুলার মেসাঞ্জিয়াল কোষ নিয়ে গঠিত।'
            ),
            l(
              'When renal perfusion drops or reduced GFR lowers distal tubular NaCl delivery, macula densa cells signal JG cells via local prostaglandins (PGE2) to exocytose renin into the circulation. Renin initiates the renin-angiotensin-aldosterone system (RAAS), producing angiotensin II (which constricts efferent arterioles to preserve intraglomerular hydrostatic pressure) and stimulating aldosterone release to promote distal sodium and water retention.',
              'রক্তচাপ কমে গেলে বা কিডনিতে রক্ত প্রবাহ হ্রাস পেলে ম্যাকুলা ডেনসা কোষ সেই সংকেত বুঝতে পেরে জেজি কোষকে রেনিন ক্ষরণ করতে নির্দেশ দেয়। রেনিন রক্তে অ্যাঞ্জিওটেনসিন II তৈরি করে রক্তনালী সংকুচিত করে এবং অ্যালডোস্টেরন ক্ষরণ করিয়ে স্বাভাবিক রক্তচাপ ফিরিয়ে আনে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Corticomedullary Osmotic Gradient and Vasa Recta Dynamics', 'কর্টিকোমেডুলারি অসমোটিক গ্রেডিয়েন্ট ও ভাসা রেকটা বলবিদ্যা'),
          paragraphs: [
            l(
              'The kidney concentrates urine up to 1200 mOsm/kg (four times plasma osmolality) through the countercurrent multiplier mechanism deployed by the long loops of Henle of juxtamedullary nephrons. The thick ascending limb actively pumps NaCl into the medullary interstitium via apical Na+-K+-2Cl- (NKCC2) cotransporters while remaining completely impermeable to water, progressively hyperconcentrating the medullary interstitium.',
              'কিডনি তার জুক্সটামেডুলারি নেফ্রনের লম্বা হেনলির লুপের মাধ্যমে মেডুলায় লবণের ঘনত্ব স্বাভাবিক রক্তের চেয়ে চার গুণ (১২০০ mOsm/kg) পর্যন্ত বৃদ্ধি করতে পারে। থিক অ্যাসেন্ডিং লিম্ব NKCC2 ট্রান্সপোর্টারের সাহায্যে লবণ বের করে মেডুলায় জমায় কিন্তু পানি ধরে রাখে।'
            ),
            l(
              'Hairpin-shaped capillary loops termed the vasa recta function as passive countercurrent exchangers, maintaining this medullary hyperosmolality by removing reclaimed water without washing out the solute gradient. In the presence of antidiuretic hormone (ADH/vasopressin), medullary collecting ducts insert aquaporin-2 (AQP2) channels, allowing osmotic equilibration that concentrates the final urine.',
              'ভাসা রেকটা রক্তনালীগুলো প্রতিস্রোত বিনিময় ব্যবস্থার মাধ্যমে অতিরিক্ত পানি সরিয়ে নেয় কিন্তু লবণের ভারসাম্য অক্ষত রাখে। এডিএইচ হরমোনের উপস্থিতিতে সংগ্রাহী নালিকায় অ্যাকোয়াপোরিন-২ চ্যানেল যুক্ত হয়ে পানি টেনে নেয় এবং মূত্রকে ঘনীভূত করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Renal Artery Stenosis and Renovascular Hypertension', 'রেনাল ধমনীর সংকোচন এবং রেনোভ্যাসকুলার উচ্চ রক্তচাপ'),
          paragraphs: [
            l(
              'Renal artery stenosis (RAS)—caused by atherosclerosis (75–85%, typically elderly males at the aortic ostium) or fibromuscular dysplasia (FMD, younger females affecting distal two-thirds)—reduces renal perfusion pressure to the ipsilateral kidney. The affected kidney interprets this hypoperfusion as systemic shock, chronically hypersecreting renin from juxtaglomerular cells.',
              'রেনাল ধমনী সরু হয়ে গেলে (অ্যাথেরোস্ক্লেরোসিস বা ফাইব্রোমাসকিউলার ডিসপ্লাসিয়ার কারণে) কিডনিতে রক্ত পৌঁছাতে পারে না। কিডনি মনে করে সারা শরীরেই রক্তচাপ কমে গেছে, ফলে এটি অস্বাভাবিক মাত্রায় রেনিন হরমোন নিঃসরণ শুরু করে।'
            ),
            l(
              'Sustained systemic angiotensin II generation produces refractory renovascular hypertension and secondary hyperaldosteronism with hypokalemia. Diagnostic evaluation demonstrates asymmetrical kidney size on ultrasound and high-velocity turbulent jets on Doppler ultrasound, while treatment in refractory cases requires percutaneous transluminal renal angioplasty with stenting.',
              'অতিরিক্ত রেনিনের কারণে মারাত্মক অনিয়ন্ত্রিত উচ্চ রক্তচাপ তৈরি হয় যা সাধারণ ওষুধে কমে না। আল্ট্রাসাউন্ডে ক্ষতিগ্রস্ত কিডনিটি আকারে ছোট হয়ে যেতে দেখা যায় এবং এনজিওপ্লাস্টির মাধ্যমে রেনাল ধমনীতে স্টেন্ট পরিয়ে চিকিৎসা করা হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Anatomical Variations: Horseshoe Kidney and Pelvic Kidney', 'কিডনির শারীরস্থানিক ভিন্নতা: হর্সশু কিডনি ও পেলভিক কিডনি'),
          paragraphs: [
            l(
              'During normal embryological ascent between weeks 6 and 9, the fetal kidneys migrate from the true pelvis into the lumbar fossae. In approximately 1 in 500 individuals, the lower poles of the metanephroi fuse across the midline to form a horseshoe kidney. During its ascent, the central parenchymal isthmus impinges against the origin of the inferior mesenteric artery (IMA) at the L3 vertebral level, arresting cephalad migration.',
              'ভ্রূণাবস্থায় কিডনি পেলভিস থেকে ওপরের দিকে কোমরের কাছে উঠে আসে। প্রতি ৫০০ জনের একজনের ক্ষেত্রে দুটি কিডনির নিচের অংশ একসাথে জোড়া লেগে ঘোড়ার খুরের মতো (Horseshoe kidney) রূপ নেয়। ওপরে ওঠার সময় এটি L3 কশেরুকা বরাবর ইনফিরিয়র মেসেন্টেরিক ধমনীতে (IMA) আটকে যায় এবং আর ওপরে উঠতে পারে না।'
            ),
            l(
              'Horseshoe kidneys remain entrapped in the lower lumbar retroperitoneum, with anomalous anteriorly directed calyces and variable supernumerary renal arteries. Although frequently asymptomatic, patients exhibit increased incidence of ureteropelvic junction obstruction, nephrolithiasis, recurrent urinary tract infections, and Wilms tumor.',
              'এই হর্সশু কিডনি নিচের দিকে আটকে থাকার ফলে ইউরেটারে সহজে ভাঁজ পড়ে প্রস্রাব আটকে পাথর হতে পারে এবং বারবার মূত্রনালির ইনফেকশন হওয়ার ঝুঁকি বেশি থাকে।'
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
          heading: l('Neurogenic Bladder Dysfunction and Autonomic Control', 'নিউরোঅ্যানাটমিক্যাল মূত্রথলি গোলযোগ ও স্নায়ু নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'The storage and evacuation of urine depend on coordinated reciprocal control between sympathetic, parasympathetic, and somatic efferents. Storage is sustained by T11–L2 sympathetic outflow via hypogastric nerves, keeping the detrusor relaxed via beta-3 adrenergic receptors and the internal urethral sphincter contracted via alpha-1 receptors.',
              'মূত্র ধরে রাখা এবং যথাসময়ে তা ত্যাগ করার কাজটি তিনটি পৃথক স্নায়ু ব্যবস্থার জটিল সমন্বয়ে ঘটে। মূত্র জমা রাখার সময় T11 থেকে L2 সিমপ্যাথেটিক স্নায়ু মূত্রথলির মূল পেশীকে শিথিল রাখে এবং অভ্যন্তরীণ স্ফিংক্টারকে শক্ত করে বন্ধ রাখে।'
            ),
            l(
              'Voluntary micturition requires frontal cortex disinhibition of the pontine micturition center (Barrington nucleus), which fires sacral parasympathetic outflow (S2–S4 via pelvic splanchnic nerves). Acetylcholine binds M3 receptors to contract the detrusor while somatic pudendal nerve inhibition relaxes the external urethral sphincter. Spinal cord lesions above the conus cause spastic neurogenic bladder with detrusor-sphincter dyssynergia.',
              'মূত্রত্যাগের সময় মস্তিষ্কের পনস কেন্দ্র S2–S4 প্যারাসিমপ্যাথেটিক স্নায়ুকে সক্রিয় করে ডেট্রুসর পেশী সংকুচিত করে এবং পুডেন্ডাল স্নায়ুর বাধা সরিয়ে বাহ্যিক স্ফিংক্টার শিথিল করে পূর্ণ মূত্রত্যাগে সহায়তা করে। মেরুরজ্জুতে আঘাত লাগলে এই সমন্বয় নষ্ট হয়ে স্পাস্টিক ব্লাডার তৈরি হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Renal Transplantation Vascular and Ureteral Anastomosis', 'কিডনি প্রতিস্থাপনের রক্তনালী ও ইউরেটার জোড়া লাগানোর শারীরস্থান'),
          paragraphs: [
            l(
              'In clinical kidney transplantation, the donor allograft is placed heterotopically in the recipient iliac fossa (most frequently the right iliac fossa due to horizontal, superficial access to the external iliac vessels). The donor renal vein is anastomosed end-to-side to the recipient external iliac vein, while the donor renal artery is anastomosed to the external iliac artery (or internal iliac artery).',
              'কিডনি প্রতিস্থাপনের অপারেশনে দাতার কিডনিটি রোগীর তলপেটের ডান ইলিয়াক ফসাতে বসানো হয় কারণ সেখানে ইলিয়াক রক্তনালীগুলো সহজে পাওয়া যায়। দাতার রেনাল শিরা রোগীর এক্সটার্নাল ইলিয়াক শিরার সাথে এবং রেনাল ধমনী এক্সটার্নাল ইলিয়াক ধমনীর সাথে জোড়া লাগানো হয়।'
            ),
            l(
              'Urinary continuity is established via an extravesical ureteroneocystostomy (Lich-Gregoir technique), where the short donor ureter is anastomosed to the recipient bladder mucosa through an obliquely tunneled detrusor muscular flap. This antireflux tunnel prevents retrograde ascent of urine and infectious pyelonephritis during high-pressure voiding cycles.',
              'এরপর দাতার ইউরেটারটি রোগীর মূত্রথলির প্রাচীরে তির্যক সুরঙ্গ তৈরি করে জোড়া লাগানো হয় (লিচ-গ্রেগোয়ার পদ্ধতি)। এই বিশেষ তির্যক সুরঙ্গ প্রস্রাব করার সময় মূত্রকে উল্টো পথে প্রতিস্থাপিত নতুন কিডনিতে উঠে ইনফেকশন করা থেকে পুরোপুরি রক্ষা করে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-stage schematic of the urinary system: glomerular filtration barrier, medullary concentration pyramids, ureteral active transport, and bladder micturition coordination.',
      'মূত্রতন্ত্রের ৪টি সহজলভ্য ধাপ: গ্লোমেরুলার ছাঁকনি পর্দা, মেডুলারি ঘনীভবন পিরামিড, ইউরেটারের পরিবহন এবং মূত্রথলির স্নায়বিক নিয়ন্ত্রণ।'
    ),
    steps: [
      l(
        '1. Glomerular capillaries filter plasma through podocyte slit diaphragms into Bowman capsule at 125 mL/min.',
        '১. গ্লোমেরুলার কৈশিক জালিকা পোডোসাইট পর্দার মাধ্যমে প্রতি মিনিটে ১২৫ মিলি রক্তরস বোম্যান্স ক্যাপসুলে ছাঁকে।'
      ),
      l(
        '2. Proximal tubules, loops of Henle, and medullary pyramids reclaim 99% of filtered water and essential electrolytes.',
        '২. প্রক্সিমাল নালিকা ও মেডুলারি পিরামিড পরিস্রুত তরলের ৯৯ শতাংশ পানি এবং জরুরি লবণ রক্তে ফেরত পাঠায়।'
      ),
      l(
        '3. Smooth muscle contractions propagate urine down 25 cm ureters past three anatomical constriction points.',
        '৩. ইউরেটারের পেশী তরঙ্গ তিনটি সংকীর্ণ খাঁজ অতিক্রম করে মূত্রকে মূত্রথলির দিকে সক্রিয়ভাবে চালিত করে।'
      ),
      l(
        '4. Sacral parasympathetic reflexes contract the detrusor and relax urethral sphincters to evacuate urine.',
        '৪. স্যাক্রাল প্যারাসিমপ্যাথেটিক স্নায়ু মূত্রথলির পেশী সংকুচিত করে মূত্রনালির মুখ খুলে মূত্র নিষ্কাশন করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 38-year-old woman presents to the emergency department with sudden-onset, severe, spasmodic right flank pain radiating along the groin to the labium majus. A non-contrast helical CT scan confirms an obstructing 5 mm calculus lodged in the ureter at the pelvic brim. Over which vascular structure is this stone compressing as the ureter crosses into the true pelvis?',
      '৩৮ বছর বয়সী একজন নারী হঠাৎ ডান কোমরে তীব্র কলিক ব্যথা নিয়ে আসেন যা তলপেট হয়ে কুঁচকি ও জননাঙ্গে ছড়িয়ে পড়ছে। সিটি স্ক্যানে দেখা গেল পেলভিসের কিনারায় ইউরেটারে একটি ৫ মিলিমিটার পাথর আটকে গেছে। এই স্থানে ইউরেটার কোন রক্তনালীর ওপর দিয়ে ট্রু পেলভিসে প্রবেশ করে?'
    ),
    options: [
      l('Bifurcation of the common iliac (or external iliac) vessels', 'কমন ইলিয়াক (বা এক্সটার্নাল ইলিয়াক) রক্তনালীর বিভাজন'),
      l('Inferior vena cava', 'ইনফিরিয়র ভেনাকাভা'),
      l('Renal vein trunk', 'প্রধান রেনাল শিরা'),
      l('Internal pudendal artery', 'ইন্টারনাল পুডেন্ডাল ধমনী'),
    ],
    correctIndex: 0,
    explanation: l(
      'The second physiological constriction point of the ureter occurs at the pelvic brim, where the ureter crosses anterior to the bifurcation of the common iliac artery (or origin of the external iliac vessels) as it enters the true pelvis. Calculi frequently lodge at this anatomical crossroads, producing excruciating referred colicky pain radiating to the groin along the distribution of the genitofemoral and ilioinguinal nerves.',
      'ইউরেটারের দ্বিতীয় প্রাকৃতিক সংকীর্ণ বিন্দুটি পেলভিসের কিনারায় অবস্থিত, যেখানে ইউরেটার কমন ইলিয়াক ধমনীর বিভাজনের (বা এক্সটার্নাল ইলিয়াক রক্তনালীর) ওপর দিয়ে ট্রু পেলভিসে প্রবেশ করে। এই স্থানে পাথর আটকে গেলে ইউরেটার প্রসারিত হয়ে কুঁচকি ও জননাঙ্গের ডার্মাটোমে মারাত্মক ব্যথা ছড়ায়।'
    ),
  },
}
