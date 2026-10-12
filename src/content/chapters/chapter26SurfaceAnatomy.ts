import type { LessonTopic, Localized, ReferenceItem } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs: ReferenceItem[] = [
  {
    id: 'moore-anatomy-9e',
    title: 'Clinically Oriented Anatomy, 9th Edition',
    authors: 'Dalley AF, Agur AMR',
    organization: 'Wolters Kluwer',
    year: 2022,
    url: 'https://www.wolterskluwer.com/en/solutions/lippincott-williams-wilkins',
  },
  {
    id: 'bates-examination-13e',
    title: "Bates' Guide to Physical Examination and History Taking, 13th Edition",
    authors: 'Bickley LS, Szilagyi PG, Hoffman RM, Soriano RP',
    organization: 'Wolters Kluwer',
    year: 2021,
    url: 'https://www.wolterskluwer.com/en/solutions/lippincott-williams-wilkins',
  },
  {
    id: 'grays-anatomy-42e',
    title: "Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd Edition",
    authors: 'Standring S',
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0',
  },
  {
    id: 'lumley-surface-anatomy-4e',
    title: 'Surface Anatomy: The Anatomical Basis of Clinical Examination, 4th Edition',
    authors: 'Lumley JSP',
    organization: 'Churchill Livingstone, Elsevier',
    year: 2008,
    url: 'https://www.elsevier.com/books/surface-anatomy/lumley/978-0-443-06794-5',
  },
]

export const chapter26SurfaceAnatomyLesson: LessonTopic = {
  id: 'topic.anatomy.surface-anatomy',
  slug: 'surface-anatomy',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('26 · Surface Anatomy and Landmarks', '২৬ · সারফেস অ্যানাটমি ও ল্যান্ডমার্ক'),
  summary: l(
    'A comprehensive regional and procedural study of human surface anatomy and palpable landmarks: head and neck neurovascular pulse points and the pterion, thoracic cardiac auscultation valves and the triangle of safety for chest tube thoracostomy, abdominal diagnostic projection landmarks including McBurney’s point and Murphy’s gallbladder sign, femoral and peripheral arterial pulse palpation sites, and Tuffier’s intercristal line for safe lumbar puncture access.',
    'মানবদেহের বাহ্যিক শারীরস্থান এবং স্পর্শনীয় ল্যান্ডমার্কের বিশদ বিশ্লেষণ: মাথা ও ঘাড়ের স্নায়ু-রক্তনালীর পালস পয়েন্ট ও টেরিয়ন, বুকের হৃৎপিণ্ডের কপাটিকা শোনার স্থান ও চেস্ট টিউব স্থাপনের নিরাপদ ত্রিভুজ, ম্যাকবার্নি পয়েন্ট ও মারফি সাইনসহ পেটের প্রধান ডায়াগনস্টিক ল্যান্ডমার্ক, ফিমোরাল ও প্রান্তীয় ধমনীর পালস এবং সুষুম্নাকাণ্ডে নিরাপদে সুঁই প্রবেশের টাফিয়ার্স ইন্টারক্রিস্টাল রেখা।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Locate and palpate major superficial arterial pulse points (carotid, brachial, radial, femoral, popliteal, posterior tibial, and dorsalis pedis) and state their precise anatomical relations.',
      'শরীরের প্রধান অগভীর ধমনীগুলোর পালস পয়েন্ট (ক্যারোটিড, ব্র্যাকিয়াল, রেডিয়াল, ফিমোরাল, পপলিটিয়াল, পোস্টেরিয়র টিবিয়াল ও ডরসালিস পেডিস) স্পর্শ করে নির্ণয় করা এবং তাদের সঠিক শারীরিক অবস্থান ব্যাখ্যা করা।'
    ),
    l(
      'Map surface projections for critical invasive procedures: the cricothyroid membrane for emergency cricothyroidotomy, the triangle of safety for chest drain insertion, and Tuffier’s line for lumbar puncture.',
      'জরুরি জীবনরক্ষাকারী চিকিৎসার সারফেস প্রজেকশন চিহ্নিত করা: জরুরি শ্বাসনালী উন্মুক্তকরণের ক্রিকোথাইরয়েড পর্দা, চেস্ট ড্রেন স্থাপনের সেফটি ট্রায়াঙ্গল এবং লাম্বার পাংচারের টাফিয়ার্স রেখা।'
    ),
    l(
      'Correlate surface abdominal points (McBurney’s appendiceal point and Murphy’s gallbladder point) with underlying visceral anatomy and acute surgical pathology.',
      'পেটের প্রধান বাহ্যিক বিন্দুসমূহকে (অ্যাপেন্ডিক্সের ম্যাকবার্নি পয়েন্ট এবং পিত্তথলির মারফি পয়েন্ট) অভ্যন্তরীণ অঙ্গের অবস্থান ও জরুরি সার্জিক্যাল রোগের সাথে সুসংগত করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.introduction'],
  relatedTopicIds: ['topic.anatomy.thorax', 'topic.anatomy.abdomen', 'topic.anatomy.cross-sectional-anatomy'],
  references: refs,
  evidenceBySection: {
    introduction: ['moore-anatomy-9e', 'lumley-surface-anatomy-4e'],
    structure: ['lumley-surface-anatomy-4e', 'bates-examination-13e'],
    mechanism: ['bates-examination-13e', 'grays-anatomy-42e'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['bates-examination-13e', 'moore-anatomy-9e'],
    takeaways: ['lumley-surface-anatomy-4e', 'bates-examination-13e'],
  },
  chapter: {
    toc: [
      { id: 'sec-head-neck-landmarks', label: l('Head & Neck Surface Topography & Arterial Pulses', 'মাথা ও ঘাড়ের সারফেস টপোগ্রাফি ও পালস পয়েন্ট'), sectionId: 'introduction' },
      { id: 'sec-thoracic-surface', label: l('Thoracic Auscultation Points & Triangle of Safety', 'বক্ষের কপাটিকা শোনার স্থান ও ট্রায়াঙ্গল অব সেফটি'), sectionId: 'structure' },
      { id: 'sec-abdominal-landmarks', label: l('Abdominal Surface Projections: McBurney & Murphy', 'উদরীয় সারফেস প্রজেকশন: ম্যাকবার্নি ও মারফি পয়েন্ট'), sectionId: 'mechanism' },
      { id: 'sec-extremities-spine', label: l('Peripheral Pulse Points & Tuffier Lumbar Plane', 'প্রান্তীয় পালস পয়েন্ট ও টাফিয়ার্স লাম্বার তল'), sectionId: 'integration' },
      { id: 'sec-clinical-procedural', label: l('Emergency Procedures: Cricothyroidotomy & Chest Tube', 'জরুরি প্রক্রিয়া: ক্রিকোথাইরয়েডোটমি ও চেস্ট টিউব'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Clinical Rules of Palpation & Surface Navigation', 'স্পর্শ ও সারফেস নির্দেশনার ক্লিনিক্যাল মূলনীতি'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('McBurney’s Point', 'ম্যাকবার্নি পয়েন্ট (McBurney Point)'),
        definition: l(
          'A precise surface landmark situated on the anterior abdominal wall one-third of the distance along an oblique line drawn from the right anterior superior iliac spine (ASIS) to the umbilicus. Corresponds to the base of the vermiform appendix where it arises from the cecum. Maximal point tenderness to gentle compression and rapid release (rebound tenderness) at this point represents the cardinal clinical sign of acute appendicitis.',
          'উদরপ্রাচীরের একটি সুনির্দিষ্ট ল্যান্ডমার্ক যা ডানদিকের অ্যান্টেরিয়র সুপিরিয়র ইলিয়াক স্পাইন (ASIS) থেকে নাভি পর্যন্ত টানা একটি তীর্যক রেখার বাইরের এক-তৃতীয়াংশ এবং ভেতরের দুই-তৃতীয়াংশের সংযোগস্থলে অবস্থিত। এটি অন্ধান্ত্রের সাথে অ্যাপেন্ডিক্সের মূল মিলনস্থল নির্দেশ করে; এখানে আঙুল দিয়ে চাপ দিলে এবং হঠাৎ ছেড়ে দিলে তীব্র ব্যথা হওয়া একিউট অ্যাপেন্ডিসাইটিসের প্রধান লক্ষণ।'
        ),
      },
      {
        term: l('Triangle of Safety for Thoracostomy', 'চেস্ট ড্রেনের নিরাপদ ত্রিভুজ (Triangle of Safety)'),
        definition: l(
          'An anatomical surface zone on the lateral thoracic wall utilized for safe insertion of an intercostal chest tube (tube thoracostomy) to drain pneumothorax or hemothorax. Bounded anteriorly by the lateral border of the pectoralis major muscle, posteriorly by the anterior border of the latissimus dorsi muscle, inferiorly by the horizontal level of the 5th intercostal space (nipple level in males), and superiorly by the apex of the axilla. Insertion along the superior border of the rib avoids the subcostal intercostal neurovascular bundle.',
          'বক্ষপ্রাচীরের পাশের অংশে অবস্থিত একটি নিরাপদ অঞ্চল যার মধ্য দিয়ে ফুসফুসে বাতাস বা রক্ত জমলে ড্রেন পাইপ প্রবেশ করানো হয়। এর সামনের সীমানা পেক্টোরালিস মেজর পেশী, পেছনের সীমানা ল্যাটিসিমাস ডরসি পেশী, নিচের সীমানা ৫ম ইন্টারকোস্টাল স্পেস এবং ওপরের সীমানা বগলের শীর্ষ। পাঁজরের হাড়ের ওপরের প্রান্ত ঘেঁষে পাইপ ঢোকালে ইন্টারকোস্টাল রক্তনালী ও স্নায়ু আঘাত পাওয়া থেকে নিরাপদ থাকে।'
        ),
      },
      {
        term: l('Tuffier’s Line (Intercristal Line)', 'টাফিয়ার্স রেখা বা ইন্টারক্রিস্টাল সমতল (Tuffier Line)'),
        definition: l(
          'A horizontal reference line connecting the highest points of the bilateral iliac crests across the posterior lumbar spine. Intersects the vertebral column precisely at the L4 spinous process or the L4/L5 intervertebral disc space. Serves as the primary external palpation guide for safe lumbar puncture and spinal anesthesia, ensuring the needle enters the subarachnoid space well inferior to the termination of the adult spinal cord at the L1/L2 conus medullaris.',
          'একটি অনুভূমিক রেখা যা দুই পাশের ইলিয়াক অস্থির সর্বোচ্চ চূড়া দুটিকে মেরুদণ্ডের ওপর দিয়ে যুক্ত করে। এটি মেরুদণ্ডকে ৪র্থ লাম্বার (L4) কশেরুকার কাঁটা বা L4/L5 ডিস্ক বরাবর অতিক্রম করে। কোমর থেকে পানি পরীক্ষা (লাম্বার পাংচার) বা অবশ করার ইনজেকশন দেওয়ার সময় এটি প্রধান পথপ্রদর্শক; এর মাধ্যমে নিশ্চিত হওয়া যায় যে সুঁইটি প্রাপ্তবয়স্কদের সুষুম্নাকাণ্ডের সমাপ্তিস্থলের (L1/L2) অনেক নিচ দিয়ে নিরাপদে প্রবেশ করছে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Systematic Palpation and Landmark Verification for Safe Lumbar Puncture', 'নিরাপদ লাম্বার পাংচারের জন্য সঠিক শারীরিক ল্যান্ডমার্ক নির্ণয় পদ্ধতি'),
        steps: [
          l(
            'Step 1: Position the patient in the lateral decubitus position with hips, knees, and neck fully flexed ("fetal position") to maximize opening of the interspinous spaces between lumbar vertebrae.',
            'ধাপ ১: রোগীকে একপাশে কাত করে শুইয়ে ঘাড়, কোমর ও হাঁটু ভাঁজ করে পেটের সাথে লাগিয়ে রাখুন (ভ্রূণীয় ভঙ্গি) যাতে লাম্বার কশেরুকাগুলোর পেছনের কাঁটাগুলোর মধ্যবর্তী দূরত্ব সর্বোচ্চ প্রসারিত হয়।'
          ),
          l(
            'Step 2: Palpate the superior rims of both iliac crests with your gloved thumbs and span an imaginary horizontal line (Tuffier’s intercristal line) across the midline spine, identifying the L4 spinous process.',
            'ধাপ ২: দুই হাতের বুড়ো আঙুল দিয়ে দুই পাশের ইলিয়াক অস্থির সর্বোচ্চ উঁচু অংশ স্পর্শ করুন এবং মেরুদণ্ডের ওপর একটি কাল্পনিক সোজা রেখা (টাফিয়ার্স রেখা) টেনে ৪র্থ লাম্বার (L4) কশেরুকার কাঁটাটি চিহ্নিত করুন।'
          ),
          l(
            'Step 3: Palpate the depression immediately superior (L3/L4 interspace) or inferior (L4/L5 interspace) to the L4 spinous process. Infiltrate local anesthetic into the skin and advance the spinal needle perpendicular to the skin toward the umbilicus, penetrating the supraspinous ligament, interspinous ligament, ligamentum flavum ("pop"), epidural space, and dura-arachnoid membrane into the lumbar cistern.',
            'ধাপ ৩: L4 কাঁটার ঠিক ওপরের (L3/L4) বা নিচের (L4/L5) ফাঁকা জায়গাটি স্পর্শ করুন। ত্বক অবশ করে সুঁইটি নাভির দিক লক্ষ্য করে সোজা প্রবেশ করান; সুপ্রাস্পাইনাস ও ইন্টারস্পাইনাস লিগামেন্ট এবং লিগামেন্টাম ফ্লেভাম ভেদ করার পর একটি মৃদু পপ অনুভূতি হলে সুঁইটি সাবঅ্যারাকনয়েড সিস্টার্নে পৌঁছে যায়।'
          ),
        ],
        conclusion: l(
          'Using Tuffier’s line to enter at or below the L3/L4 interspace completely eliminates the risk of traumatic cord injury, as the spinal cord terminates at L1/L2.',
          'টাফিয়ার্স রেখা ব্যবহার করে L3/L4 বা তার নিচে সুঁই প্রবেশ করালে সুষুম্নাকাণ্ডে কোনো আঘাত লাগার ঝুঁকি শূন্য হয়ে যায়, কারণ প্রাপ্তবয়স্কদের স্পাইনাল কর্ড L1/L2 স্তরেই শেষ হয়ে যায়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Where is the ideal anatomical site for emergency cricothyroidotomy, and which blood vessels must the clinician avoid during midline puncture?',
          'জরুরি জীবনরক্ষাকারী ক্রিকোথাইরয়েডোটমির সবচেয়ে সঠিক শারীরিক অবস্থান কোথায় এবং মাঝখান দিয়ে সুঁই প্রবেশ করানোর সময় কোন রক্তনালীগুলো এড়িয়ে চলা আবশ্যক?',
        ),
        answer: l(
          'Emergency cricothyroidotomy is performed through the cricothyroid membrane, a palpable soft depression situated in the anterior midline of the neck between the inferior border of the thyroid cartilage (laryngeal prominence/Adam’s apple) and the superior border of the cricoid cartilage ring. The membrane is covered only by skin, subcutaneous tissue, and the investing layer of cervical fascia. Clinicians must strictly maintain a vertical midline incision to avoid the lateral cricothyroid arteries (which run across the upper margin of the membrane) and the anterior jugular veins coursing paramedially, while staying superior to the thyroid isthmus.',
          'জরুরি ক্রিকোথাইরয়েডোটমি সম্পন্ন করা হয় ক্রিকোথাইরয়েড পর্দার মাধ্যমে, যা গলার অ্যাডামস অ্যাপেল বা থাইরয়েড তরুণাস্থির নিচের প্রান্ত এবং ক্রিকয়েড আংটির ওপরের প্রান্তের মাঝে একটি নরম গর্ত হিসেবে স্পষ্টভাবে স্পর্শ করা যায়। এর ওপরে শুধু ত্বক ও পাতলা ফাসিয়া থাকে। সুঁই বা ব্লেড চালানোর সময় সর্বদা ঠিক মাঝখান বরাবর থাকতে হবে যাতে পাশের ক্রিকোথাইরয়েড ধমনী এবং অ্যান্টেরিওর জুগুলার শিরা ক্ষতিগ্রস্ত না হয়, এবং নিচে থাকা থাইরয়েড গ্রন্থির সংযোগস্থলের ওপরে থাকতে হবে।'
        ),
      },
      {
        question: l(
          'How is the anatomical snuffbox bounded on the dorsolateral wrist, and which bone fracture and artery traverse its floor?',
          'হাতের কবজির পেছনের অ্যানাটমিক্যাল স্নাফবক্সের সীমানা কীভাবে গঠিত এবং এর মেঝের ওপর কোন হাড়ের ফ্র্যাকচার ও কোন প্রধান ধমনী অবস্থান করে?',
        ),
        answer: l(
          'The anatomical snuffbox is a triangular skin depression visible on the posterolateral aspect of the wrist when the thumb is fully extended. It is bounded medially (posteriorly) by the tendon of extensor pollicis longus (EPL), and laterally (anteriorly) by the parallel tendons of abductor pollicis longus (APL) and extensor pollicis brevis (EPB). Its floor is formed proximally by the radial styloid process, the scaphoid bone, and the trapezium. The radial artery winds across the floor of the snuffbox before piercing between the two heads of the first dorsal interosseous muscle. Point tenderness within the snuffbox floor following a fall onto an outstretched hand (FOOSH) is diagnostic of a scaphoid fracture until proven otherwise.',
          'অ্যানাটমিক্যাল স্নাফবক্স হলো বুড়ো আঙুল টানটান করলে কবজির পাশে দৃশ্যমান একটি ত্রিভুজাকার খাঁজ। এর ভেতরের সীমানা তৈরি করে এক্সটেনসর পলিসিস লংগাস (EPL) টেনডন এবং বাইরের সীমানা তৈরি করে অ্যাবডাক্টর পলিসিস লংগাস (APL) ও এক্সটেনসর পলিসিস ব্রেভিস (EPB) টেনডন। এর মেঝের ওপর স্ক্যাফয়েড ও ট্রাপিজিয়াম হাড় থাকে এবং এর ওপর দিয়ে রেডিয়াল ধমনী অতিক্রম করে। সোজা হাতের ওপর ভর দিয়ে পড়ে যাওয়ার পর এই খাঁজের ভেতর প্রচণ্ড ব্যথা হলে তা স্ক্যাফয়েড হাড় ভেঙে যাওয়ার নিশ্চিত লক্ষণ।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch26-surface-anatomy-diagram',
    title: l('Interactive Surface Anatomy & Clinical Landmark Matrix', 'ইন্টারেক্টিভ সারফেস শারীরস্থান ও ক্লিনিক্যাল ল্যান্ডমার্ক ম্যাট্রিক্স'),
    description: l(
      'Explore foundational surface projections and palpable physical exam landmarks: inspect head and neck pulse points, thoracic cardiac auscultation zones, abdominal diagnostic points, and procedural safety corridors.',
      'শারীরিক পরীক্ষার প্রধান সারফেস প্রজেকশন ও স্পর্শনীয় ল্যান্ডমার্ক অন্বেষণ করুন: মাথা ও ঘাড়ের পালস পয়েন্ট, বুকের কপাটিকা শোনার অঞ্চল, পেটের ডায়াগনস্টিক বিন্দু এবং জরুরি চিকিৎসার নিরাপদ প্রবেশপথসমূহ পরীক্ষা করুন।'
    ),
    disclaimer: l(
      'Surface topography clinical schematic: select any regional sector to inspect palpation landmarks, underlying structures, and emergency access corridors.',
      'সারফেস টপোগ্রাফির ক্লিনিক্যাল রেখাচিত্র: স্পর্শের ল্যান্ডমার্ক, ভেতরের অঙ্গের অবস্থান এবং জরুরি চিকিৎসার পথ দেখতে যেকোনো অঞ্চল নির্বাচন করুন।'
    ),
    svgType: 'surface-anatomy-system',
    items: [
      {
        id: 'head-neck-cricothyroid',
        label: l('Cricothyroid Membrane & Carotid Pulse', 'ক্রিকোথাইরয়েড পর্দা ও ক্যারোটিড পালস'),
        description: l(
          'Palpable depression between thyroid and cricoid cartilages for emergency cricothyroidotomy. Carotid pulse palpated between trachea and anterior border of sternocleidomastoid.',
          'জরুরি ক্রিকোথাইরয়েডোটমির জন্য থাইরয়েড ও ক্রিকয়েডের মধ্যবর্তী নরম স্থান। ট্রাকিয়া ও স্টার্নোক্লিডোমাস্তয়েড পেশীর মধ্যবর্তী খাঁজে ক্যারোটিড পালস স্পর্শ করা যায়।'
        ),
        details: l(
          'Pterion lies two fingerbreadths superior to the zygomatic arch; fracture lacerates the anterior branch of the middle meningeal artery, causing epidural hematoma.',
          'জাইগোম্যাটিক আর্চের দুই আঙুল ওপরে টেরিয়ন থাকে; মাথার খুলির এই সংযোগ ভাঙলে ধমনী ছিঁড়ে গিয়ে প্রাণঘাতী এপিডুরাল হেমাটোমা হয়।'
        ),
        sectionId: 'introduction',
        color: '#f43f5e',
        svgCoords: { x: 25, y: 25, width: 310, height: 50 },
      },
      {
        id: 'thoracic-safety-triangle',
        label: l('Thoracic Triangle of Safety & Apex Beat', 'বক্ষের ট্রায়াঙ্গল অব সেফটি ও অ্যাপেক্স বিট'),
        description: l(
          'Lateral chest zone (pectoralis major, latissimus dorsi, 5th ICS) for chest drain insertion. Apex beat palpated at 5th left intercostal space, 9 cm from midsternal line.',
          'চেস্ট টিউব ঢোকানোর নিরাপদ অঞ্চল (পেক্টোরালিস মেজর, ল্যাটিসিমাস ডরসি, ৫ম ইন্টারকোস্টাল স্পেস)। বাম ৫ম পাঁজরের ফাঁকে মাঝখান থেকে ৯ সেমি দূরে হৃৎস্পন্দন স্পর্শ করা যায়।'
        ),
        details: l(
          'Auscultation: Aortic (right 2nd ICS), Pulmonary (left 2nd ICS), Tricuspid (left lower sternal edge), Mitral (cardiac apex at 5th ICS midclavicular line).',
          'স্টেথোস্কোপে শোনার স্থান: অ্যাওর্টিক (ডান ২য় ফাঁক), পালমোনারি (বাম ২য় ফাঁক), ট্রাইকাসপিড (স্টার্নামের বাম নিচ) এবং মাইট্রাল (হৃৎপিণ্ডের শীর্ষে ৫ম ফাঁকে)।'
        ),
        sectionId: 'structure',
        color: '#0ea5e9',
        svgCoords: { x: 25, y: 85, width: 310, height: 50 },
      },
      {
        id: 'abdominal-mcburney-murphy',
        label: l('McBurney’s Point & Murphy’s Sign', 'ম্যাকবার্নি পয়েন্ট ও মারফি সাইন'),
        description: l(
          'McBurney point: 1/3 from right ASIS to umbilicus (base of appendix, acute appendicitis). Murphy point: right costal margin at midclavicular line (acute cholecystitis).',
          'ম্যাকবার্নি পয়েন্ট: ডান ASIS থেকে নাভির দূরত্বের ১/৩ অংশ (অ্যাপেন্ডিক্সের গোড়া)। মারফি পয়েন্ট: ডান পাঁজরের শেষপ্রান্তে মিডক্ল্যাভিকুলার লাইনে (পিত্তথলির প্রদাহ)।'
        ),
        details: l(
          'Femoral pulse is palpated at the midinguinal point (midway between ASIS and pubic symphysis), immediately lateral to the femoral vein within the femoral sheath.',
          'ফিমোরাল পালস ASIS এবং পিউবিক সিমফাইসিসের ঠিক মাঝামাঝি বিন্দুতে স্পর্শ করা হয় যা ফিমোরাল শিরার ঠিক বাইরে অবস্থিত।'
        ),
        sectionId: 'mechanism',
        color: '#f59e0b',
        svgCoords: { x: 25, y: 145, width: 310, height: 50 },
      },
      {
        id: 'lumbar-tuffier-line',
        label: l('Tuffier’s Line & Peripheral Pulses', 'টাফিয়ার্স রেখা ও প্রান্তীয় পালস পয়েন্ট'),
        description: l(
          'Tuffier line connects iliac crests across L4 for safe lumbar puncture (L3/L4 or L4/L5). Peripheral pulses: dorsalis pedis (dorsum of foot) and posterior tibial (behind medial malleolus).',
          'L4 কশেরুকা বরাবর টাফিয়ার্স রেখা যা নিরাপদ লাম্বার পাংচার নিশ্চিত করে। পায়ের পালস: ডরসালিস পেডিস (পায়ের পাতার ওপরে) ও পোস্টেরিয়র টিবিয়াল (ভেতরের গোড়ালির পেছনে)।'
        ),
        details: l(
          'Anatomical snuffbox floor contains scaphoid bone and radial artery; point tenderness after a fall onto an outstretched hand indicates scaphoid fracture.',
          'স্নাফবক্সের মেঝের ওপর স্ক্যাফয়েড হাড় ও রেডিয়াল ধমনী থাকে; পড়ে যাওয়ার পর এখানে তীব্র ব্যথা স্ক্যাফয়েড হাড় ভাঙার নিশ্চিত লক্ষণ।'
        ),
        sectionId: 'integration',
        color: '#10b981',
        svgCoords: { x: 25, y: 205, width: 310, height: 50 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Head and Neck Surface Landmarks: Pulses, Pterion, and Airway', 'মাথা ও ঘাড়ের সারফেস ল্যান্ডমার্ক: পালস, টেরিয়ন ও শ্বাসনালী'),
          paragraphs: [
            l(
              'Surface anatomy is the clinical science of visualizing internal anatomical organs, vessels, and nerve paths by inspecting and palpating external skeletal and muscular contours on the living body. In the head and neck, examination begins with the carotid arterial pulse, palpated gently in the groove between the trachea and the anterior border of the sternocleidomastoid muscle at the level of the thyroid cartilage, serving as the primary pulse check during cardiopulmonary resuscitation.',
              'সারফেস শারীরস্থান হলো জীবিত মানুষের শরীরের দৃশ্যমান হাড় ও মাংসপেশির খাঁজ দেখে ও স্পর্শ করে ভেতরের অঙ্গ, রক্তনালী ও স্নায়ুর অবস্থান অনুধাবন করার চিকিৎসাবিজ্ঞান। মাথা ও ঘাড়ে পরীক্ষা শুরু হয় ক্যারোটিড ধমনীর স্পন্দন দিয়ে, যা শ্বাসনালী এবং স্টার্নোক্লিডোমাস্তয়েড পেশীর মধ্যবর্তী খাঁজে থাইরয়েড তরুণাস্থির পাশে আলতো করে স্পর্শ করা হয় এবং সিপিআর দেওয়ার সময় রোগীর বেঁচে থাকার প্রধান লক্ষণ হিসেবে পরীক্ষা করা হয়।'
            ),
            l(
              'On the lateral skull, two fingerbreadths superior to the zygomatic arch lies the pterion, an H-shaped suture junction uniting the frontal, parietal, temporal, and greater wing of the sphenoid bones. Because the calvaria is exceedingly thin here and the anterior branch of the middle meningeal artery grooves its inner table, a blunt blow to the temple easily fractures the pterion, severing the artery to produce an acute, life-threatening epidural hematoma that manifests as a lucid interval followed by rapid coma.',
              'মাথার খুলির পাশে জাইগোম্যাটিক আর্চের দুই আঙুল ওপরে অবস্থিত টেরিয়ন হলো ফ্রন্টাল, প্যারাইটাল, টেম্পোরাল ও স্ফেনয়েড হাড়ের মিলনস্থল। এখানে খুলির হাড় অত্যন্ত পাতলা থাকে এবং এর ভেতরের দিকে মিডল মেনিনজিয়াল ধমনীর প্রধান শাখা অবস্থান করে; ফলে কপালে কোনো ভারী আঘাত লাগলে এই স্থান ভেঙে ধমনী ছিঁড়ে গিয়ে খুলির ভেতরে দ্রুত রক্তক্ষরণ ঘটায় (এপিডুরাল হেমাটোমা) যা রোগীর জীবনকে মারাত্মক ঝুঁকিতে ফেলে দেয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Thoracic Surface Anatomy: Cardiac Auscultation and Procedural Zones', 'বক্ষের সারফেস শারীরস্থান: হৃৎপিণ্ডের কপাটিকা ও চিকিৎসার নিরাপদ অঞ্চল'),
          paragraphs: [
            l(
              'The thoracic cage features prominent palpable landmarks that guide both stethoscope placement and invasive tube insertions. The sternal angle (angle of Louis), felt as a transverse bony ridge approximately 5 cm below the jugular notch, marks the attachment of the second costal cartilage. Counting downward from the second rib allows clinicians to accurately locate intercostal spaces for cardiac auscultation and emergency decompression.',
              'বক্ষপিঞ্জরে এমন কিছু সুস্পষ্ট স্পর্শনীয় হাড়ের খাঁজ রয়েছে যা স্টেথোস্কোপ স্থাপন এবং জরুরি পাইপ ঢোকানোর পথ দেখায়। গলার নিচের খাঁজ থেকে প্রায় ৫ সেমি নিচে স্টার্নাল অ্যাঙ্গেল একটি উঁচু হাড়ের খাঁজ হিসেবে অনুভূত হয় যা দ্বিতীয় পাঁজরের তরুণাস্থির সাথে যুক্ত। এই দ্বিতীয় পাঁজর থেকে ক্রমান্বয়ে নিচের দিকে গুনে চিকিৎসকরা হৃৎপিণ্ডের প্রতিটি কপাটিকার শব্দ শোনার সঠিক স্থান নির্ধারণ করেন।'
            ),
            l(
              'Auscultation of the four primary cardiac valves does not occur directly over the anatomical valve orifices, but rather downstream along the path of acoustic blood flow projection: the aortic valve is heard at the right 2nd intercostal space parasternal; the pulmonary valve at the left 2nd intercostal space parasternal; the tricuspid valve at the left lower sternal border (4th/5th intercostal space); and the mitral valve at the cardiac apex, palpated at the left 5th intercostal space in the midclavicular line (approximately 7 to 9 cm lateral to the midsternal line).',
              'হৃৎপিণ্ডের চারটি কপাটিকার শব্দ সরাসরি তাদের অবস্থানের ওপর শোনা যায় না, বরং রক্তপ্রবাহের শব্দের প্রতিফলনের দিকে শোনা যায়: অ্যাওর্টিক কপাটিকা ডানদিকের ২য় পাঁজরের ফাঁকে স্টার্নামের পাশে শোনা যায়; পালমোনারি কপাটিকা বামদিকের ২য় পাঁজরের ফাঁকে; ট্রাইকাসপিড কপাটিকা স্টার্নামের বাম নিচের প্রান্তে (৪র্থ/৫ম ফাঁকে); আর মাইট্রাল কপাটিকার শব্দ হৃৎপিণ্ডের শীর্ষে বামদিকের ৫ম পাঁজরের ফাঁকে মিডক্ল্যাভিকুলার লাইনে সবচেয়ে স্পষ্ট শোনা যায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Abdominal Surface Projections: McBurney, Murphy, and Inguinal Lines', 'উদরীয় সারফেস প্রজেকশন: ম্যাকবার্নি পয়েন্ট, মারফি সাইন ও কুঁচকির রেখা'),
          paragraphs: [
            l(
              'Accurate physical examination of the abdomen relies upon standard surface projection points that correlate with underlying surgical pathology. McBurney’s point is located one-third of the distance along an oblique line drawn from the right anterior superior iliac spine (ASIS) to the umbilicus. Tenderness to deep palpation here, accompanied by localized muscular guarding and sharp rebound tenderness upon rapid release, indicates somatic peritoneal irritation from acute suppurative appendicitis.',
              'পেটের সঠিক শারীরিক পরীক্ষা নির্ভর করে কয়েকটি প্রধান বাহ্যিক বিন্দুর ওপর যা ভেতরের সার্জিক্যাল রোগের সঠিক অবস্থান নির্দেশ করে। ডানদিকের পেলভিসের উঁচু হাড় (ASIS) থেকে নাভি পর্যন্ত টানা রেখার বাইরের এক-তৃতীয়াংশ দূরত্বে ম্যাকবার্নি পয়েন্ট অবস্থিত। এখানে আঙুল দিয়ে চাপ দিলে এবং হঠাৎ ছেড়ে দিলে তীব্র ব্যথা অনুভূত হওয়া অ্যাপেন্ডিক্সের তীব্র প্রদাহ বা একিউট অ্যাপেন্ডিসাইটিসের নিশ্চিত প্রমাণ হিসেবে বিবেচিত হয়।'
            ),
            l(
              'Murphy’s point is identified where the right midclavicular line intersects the inferior costal margin, directly overlying the fundus of the gallbladder. When the examiner presses their fingers inward and upward at this point while asking the patient to take a deep inspiration, the descending inflamed gallbladder contacts the palpating fingers, causing sudden inspiratory arrest due to sharp pain (a positive Murphy’s sign diagnostic of acute cholecystitis).',
              'ডানদিকের কলারবোনের মাঝখান থেকে নামা রেখা যেখানে পাঁজরের নিচের কিনারায় মেশে, ঠিক সেখানে মারফি পয়েন্ট অবস্থিত যা পিত্তথলির ফান্ডাস নির্দেশ করে। চিকিৎসক এই স্থানে আঙুল দিয়ে ভেতরের দিকে চেপে ধরে রোগীকে গভীর শ্বাস নিতে বললে নিচে নেমে আসা প্রদাহযুক্ত পিত্তথলি আঙুলে স্পর্শ লাগামাত্র ব্যথার চোটে রোগীর শ্বাস আটকে যায় (মারফি সাইন), যা পিত্তথলির তীব্র প্রদাহের প্রধান লক্ষণ।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Extremities and Neuroaxial Surface Topography: Pulses and Tuffier’s Line', 'অঙ্গপ্রত্যঙ্গ ও মেরুদণ্ডের সারফেস টপোগ্রাফি: পালস ও টাফিয়ার্স রেখা'),
          paragraphs: [
            l(
              'Palpating peripheral arterial pulses is fundamental to vascular assessment. In the upper limb, the brachial pulse is felt medial to the biceps brachii tendon in the antecubital fossa, while the radial pulse is palpated on the anterior wrist lateral to the flexor carpi radialis tendon. In the lower limb, the femoral pulse is located at the midinguinal point (midway between ASIS and pubic symphysis); the popliteal pulse is compressed against the posterior femur in the deep popliteal fossa; the posterior tibial pulse is palpated posteroinferior to the medial malleolus; and the dorsalis pedis pulse is felt on the dorsum of the foot just lateral to the extensor hallucis longus tendon.',
              'প্রান্তীয় রক্তনালীর স্বাস্থ্য পরীক্ষার জন্য পালস স্পর্শ করা অপরিহার্য। ওপরের অঙ্গে কনুইয়ের ভাঁজে বাইসেপস টেনডনের ভেতরের দিকে ব্র্যাকিয়াল পালস এবং কবজিতে রেডিয়াল টেনডনের বাইরে রেডিয়াল পালস পাওয়া যায়। নিচের অঙ্গে কুঁচকির মাঝামাঝি ফিমোরাল পালস; হাঁটুর পেছনের খাঁজে গভীরে পপলিটিয়াল পালস; ভেতরের গোড়ালির ঠিক পেছনে পোস্টেরিয়র টিবিয়াল পালস; এবং পায়ের পাতার ওপরে বুড়ো আঙুল তোলার টেনডনের পাশে ডরসালিস পেডিস ধমনীর স্পন্দন স্পষ্টভাবে অনুভূত হয়।'
            ),
            l(
              'For spinal procedures, Tuffier’s line (the intercristal line connecting the highest points of the iliac crests) crosses the midline vertebral column at the L4 spinous process or L4/L5 intervertebral disc. Because the adult spinal cord terminates at the L1/L2 level as the conus medullaris, introducing a spinal needle through the L3/L4 or L4/L5 interspinous space accesses the cerebrospinal fluid-filled lumbar cistern containing only cauda equina nerve roots, which float away from the advancing needle and eliminate the danger of spinal cord transection.',
              'মেরুদণ্ডের চিকিৎসার জন্য টাফিয়ার্স রেখা (দুই পাশের ইলিয়াক অস্থির চূড়া সংযোগকারী রেখা) মেরুদণ্ডকে ৪র্থ লাম্বার (L4) কশেরুকা বরাবর অতিক্রম করে। প্রাপ্তবয়স্কদের সুষুম্নাকাণ্ড L1/L2 স্তরে শেষ হয়ে যায় বলে L3/L4 বা L4/L5 ফাঁকা স্থান দিয়ে সুঁই প্রবেশ করালে কোনো বিপদের ঝুঁকি থাকে না; এখানে কেবল কডা ইকুইনার স্নায়ুতন্তুগুলো পানিতে ভাসতে থাকে যা সুঁইয়ের ধাক্কায় সরে গিয়ে সুরক্ষিত থাকে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Emergency Clinical Procedures: Needle Decompression and Thoracostomy', 'জরুরি ক্লিনিক্যাল প্রক্রিয়া: সুঁই প্রবেশ ও চেস্ট টিউব স্থাপন'),
          paragraphs: [
            l(
              'In tension pneumothorax, air accumulates under positive pressure in the pleural cavity, compressing the lung and shifting the mediastinum to obstruct venous return to the heart, culminating in rapid circulatory arrest. Immediate emergency needle decompression is performed by inserting a large-bore cannula in either the 2nd intercostal space in the midclavicular line or the 4th/5th intercostal space in the anterior axillary line, always entering directly over the superior border of the rib to avoid the subcostal intercostal vein, artery, and nerve bundle.',
              'টেনশন নিউমোথোরাক্সে ফুসফুসের বাইরে অতিরিক্ত বাতাস জমে তীব্র চাপ সৃষ্টি করে হৃৎপিণ্ডে রক্ত প্রবেশ বন্ধ করে দেয়, যার ফলে কয়েক মিনিটের মধ্যে রোগীর মৃত্যু হতে পারে। জীবন বাঁচাতে অবিলম্বে একটি বড় সুঁই ২য় পাঁজরের ফাঁকে মিডক্ল্যাভিকুলার লাইনে অথবা ৫ম পাঁজরের ফাঁকে অ্যাক্সিলারি লাইনে প্রবেশ করানো হয়; পাঁজরের নিচের স্নায়ু ও রক্তনালী যাতে ক্ষতিগ্রস্ত না হয় সেজন্য সুঁইটি সর্বদা পাঁজরের হাড়ের ওপরের কিনারা ঘেঁষে ভেতরে ঢোকাতে হয়।'
            ),
            l(
              'Subsequent definitive management mandates tube thoracostomy within the "triangle of safety," bounded anteriorly by the pectoralis major, posteriorly by the latissimus dorsi, inferiorly by the 5th intercostal space (nipple level), and superiorly by the axillary apex. Blunt dissection through the intercostal muscles over the superior border of the 5th rib allows the chest tube to be directed posteriorly and superiorly for pneumothorax, or posteroinferiorly for hemothorax drainage.',
              'এর পরবর্তী স্থায়ী চিকিৎসার জন্য ট্রায়াঙ্গল অব সেফটি বা নিরাপদ ত্রিভুজের ভেতরে চেস্ট ড্রেন বসানো হয়, যার সীমানা হলো সামনে পেক্টোরালিস মেজর, পেছনে ল্যাটিসিমাস ডরসি, নিচে ৫ম পাঁজরের ফাঁক এবং ওপরে বগলের খাঁজ। ৫ম পাঁজরের ওপরের কিনারা দিয়ে মাংসপেশি ফাঁক করে ড্রেন পাইপ ঢোকালে বাতাসের জন্য তা ওপরে এবং রক্ত বা পুঁজ নিষ্কাশনের জন্য তা নিচের দিকে চালিত করা হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Essential Principles of Surface Anatomy and Physical Exam', 'সারফেস শারীরস্থান ও শারীরিক পরীক্ষার প্রধান সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Surface anatomy transforms palpable bone contours and muscular boundaries into reliable transparent projections of deep viscera and neurovascular conduits. Mastering landmarks—such as the sternal angle of Louis, McBurney’s point, the triangle of safety, and Tuffier’s line—provides clinicians with the confidence to perform physical examinations and execute invasive procedures safely.',
              'সারফেস শারীরস্থান বাহ্যিক হাড় ও মাংসপেশির সীমানাকে ভেতরের গুরুত্বপূর্ণ অঙ্গ ও রক্তনালীর একটি স্বচ্ছ মানচিত্রে রূপান্তর করে। লুইসের স্টার্নাল অ্যাঙ্গেল, ম্যাকবার্নি পয়েন্ট, সেফটি ট্রায়াঙ্গল এবং টাফিয়ার্স রেখার মতো প্রধান ল্যান্ডমার্কগুলো আয়ত্ত করলে চিকিৎসকরা গভীর আত্মবিশ্বাসের সাথে রোগীর রোগ নির্ণয় এবং জরুরি অপারেশন সম্পন্ন করতে পারেন।'
            ),
            l(
              'Adhering strictly to safe procedural anatomical corridors—such as always advancing needles over the superior border of ribs and performing lumbar puncture inferior to the L3 level—ensures patient safety by completely avoiding injury to vulnerable neurovascular bundles and the spinal cord.',
              'নিরাপদ শারীরিক পথ কঠোরভাবে অনুসরণ করা—যেমন পাঁজরের ওপরের কিনারা ঘেঁষে সুঁই চালানো এবং L3 কশেরুকার নিচ দিয়ে লাম্বার পাংচার করা—সংবেদনশীল স্নায়ু, রক্তনালী এবং সুষুম্নাকাণ্ডকে চিরতরে অক্ষত রেখে রোগীর শতভাগ নিরাপত্তা নিশ্চিত করে।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'প্রাতিষ্ঠানিক'),
      sections: [
        {
          id: 'introduction',
          heading: l('Advanced Craniocervical Surface Topography and Vessel Localization', 'উচ্চতর ক্র্যানিওসারভাইকাল সারফেস টপোগ্রাফি ও রক্তনালী নির্ণয়'),
          paragraphs: [
            l(
              'Precise craniocervical surface localization is critical for neurosurgical access and central venous cannulation. The internal jugular vein (IJV) runs along a line connecting the lobule of the ear to the sternoclavicular joint, deep to the groove between the sternal and clavicular heads of the sternocleidomastoid muscle (Sedillot’s triangle). Under ultrasound or landmark guidance, the operator palpates the common carotid artery pulse medially and introduces the cannulation needle into the apex of Sedillot’s triangle at a 45° angle to the skin, directed toward the ipsilateral nipple, aspirating venous blood while avoiding arterial puncture.',
              'মাথা ও ঘাড়ের সূক্ষ্ম সারফেস ল্যান্ডমার্ক নিউরোসার্জারি এবং গলার বড় শিরায় ক্যাথেটার (সেন্ট্রাল লাইন) বসানোর জন্য অপরিহার্য। ইন্টারনাল জুগুলার শিরা কানের লতি থেকে স্টার্নোক্ল্যাভিকুলার জয়েন্ট পর্যন্ত বিস্তৃত থাকে এবং স্টার্নোক্লিডোমাস্তয়েড পেশীর দুই মাথার মধ্যবর্তী সেডিলোটস ট্রায়াঙ্গলের নিচে অবস্থান করে। চিকিৎসক ভেতরে থাকা ক্যারোটিড ধমনীর স্পন্দন অনুভব করে তার বাইরে ৪৫ ডিগ্রি কোণে একই পাশের স্তনবৃন্ত লক্ষ্য করে সুঁই চালালে ধমনীতে আঘাত না করে নিরাপদে শিরায় প্রবেশ করা যায়।'
            ),
            l(
              'At the cranial base, Chassaignac’s tubercle (the anterior tubercle of the C6 transverse process) is palpable against the deep cervical spine approximately 3 cm superior to the clavicle, deep to the cricoid cartilage. Compressing the common carotid artery posteriorly against Chassaignac’s tubercle can achieve temporary hemostasis during catastrophic external facial or cervical hemorrhage, serving as a historic yet vital surgical pressure point in emergency battlefield trauma.',
              'ঘাড়ের নিচে কলারবোনের ৩ সেমি ওপরে ৬ষ্ঠ কশেরুকার অগ্রবর্তী টিউবারকল (শ্যাসাইন্যাক্স টিউবারকল) একটি শক্ত ল্যান্ডমার্ক হিসেবে স্পর্শ করা যায়। মুখ বা ঘাড়ের ধমনী ফেটে ভয়াবহ রক্তপাত হলে সাধারণ কমন ক্যারোটিড ধমনীকে এই শক্ত হাড়ের ওপর সজোরে চেপে ধরে সাময়িকভাবে রক্তপাত বন্ধ করা যায় যা ট্রমা ও যুদ্ধক্ষেত্রের চিকিৎসায় জীবন বাঁচানোর একটি অত্যন্ত কার্যকর পদ্ধতি।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Biomechanics and Boundary Constraints of the Thoracic Safety Triangle', 'বক্ষের ট্রায়াঙ্গল অব সেফটির বলবিদ্যা ও কাঠামোগত সীমানা'),
          paragraphs: [
            l(
              'The British Thoracic Society (BTS) designates the "triangle of safety" as the required anatomical zone for elective and emergency intercostal drain insertion to prevent fatal visceral and vascular lacerations. The anterior border is formed by the lateral edge of pectoralis major; the posterior border by the anterior edge of latissimus dorsi; the inferior border by a horizontal line at the 5th intercostal space; and the superior apex lies in the base of the axilla. Placing drains outside this triangle risks catastrophic puncture of the long thoracic nerve, the liver (via an elevated right hemidiaphragm), the spleen, or the heart.',
              'ব্রিটিশ থোরাসিক সোসাইটি বুকের ড্রেন পাইপ ঢোকানোর জন্য ট্রায়াঙ্গল অব সেফটি বা নিরাপদ ত্রিভুজটিকে বাধ্যতামূলক শারীরিক অঞ্চল হিসেবে নির্ধারণ করেছে। এর সীমানা হলো সামনে পেক্টোরালিস মেজর, পেছনে ল্যাটিসিমাস ডরসি, নিচে ৫ম পাঁজরের সমতল এবং ওপরে বগলের খাঁজ। এই ত্রিভুজের বাইরে পাইপ ঢোকাতে গেলে লং থোরাসিক নার্ভ ছিঁড়ে যেতে পারে, অথবা ডায়াফ্রাম ভেদ করে সরাসরি লিভার, প্লীহা বা হৃৎপিণ্ডে মারাত্মক রক্তক্ষরণ ঘটতে পারে।'
            ),
            l(
              'Within each intercostal space, the intercostal vein, artery, and nerve (VAN) course along the costal groove on the inferior internal surface of the superior rib, protected by the internal and innermost intercostal muscle layers. The intercostal nerve is the most inferior and exposed element of the neurovascular bundle. By introducing instruments immediately superior to the lower rib of the space, the clinician navigates through the collateral intercostal branches while completely avoiding the high-pressure main intercostal artery.',
              'প্রতিটি পাঁজরের ভেতরের নিচের খাঁজে ইন্টারকোস্টাল শিরা, ধমনী ও স্নায়ু (VAN) সুরক্ষিত থাকে যার মধ্যে স্নায়ুটি সবচেয়ে নিচে থাকে। তাই যেকোনো ড্রেন বা সুঁই সব সময় নিচের পাঁজরের হাড়ের ঠিক ওপরের কিনারা ঘেঁষে ভেতরে প্রবেশ করাতে হয়; এর ফলে উচ্চ রক্তচাপের প্রধান ইন্টারকোস্টাল ধমনী অক্ষত থাকে এবং বক্ষপ্রাচীরের রক্তক্ষরণ পুরোপুরি প্রতিরোধ করা সম্ভব হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Advanced Abdominal Visceral Surface Projections and Hernia Rings', 'উচ্চতর উদরীয় অঙ্গের সারফেস প্রজেকশন ও হার্নিয়ার রিং'),
          paragraphs: [
            l(
              'The anterior abdominal wall is partitioned into surface landmarks defining inguinal hernia pathways. The deep (internal) inguinal ring lies 1.25 cm superior to the midinguinal point (midway between the ASIS and pubic symphysis), immediately lateral to the origin of the inferior epigastric vessels. The superficial (external) inguinal ring is a triangular defect in the external oblique aponeurosis situated immediately superior and lateral to the pubic crest. Differentiating indirect hernias (which enter the deep ring lateral to inferior epigastric vessels) from direct hernias (which bulge through Hesselbach’s triangle medial to the vessels) begins with precise finger occlusion over the internal ring.',
              'উদরপ্রাচীরের নিচের ল্যান্ডমার্কগুলো ইনগুইনাল হার্নিয়ার গতিপথ নির্ধারণ করে। গভীর ইন্টারনাল ইনগুইনাল রিংটি ASIS এবং পিউবিক সিমফাইসিসের মধ্যবর্তী বিন্দুর ১.২৫ সেমি ওপরে ইনফিরিয়র এপিগ্যাস্ট্রিক রক্তনালীর বাইরে অবস্থিত। আর অগভীর এক্সটারনাল রিংটি পিউবিক হাড়ের ঠিক ওপরে একটি ত্রিভুজাকার ফাঁক হিসেবে থাকে। ইন্টারনাল রিংয়ের ওপর আঙুল চেপে ধরে পরীক্ষা করলে বোঝা যায় হার্নিয়াটি ইনডিরেক্ট নাকি ডিরেক্ট, যা অপারেশনের কৌশল নির্ধারণের জন্য অত্যন্ত গুরুত্বপূর্ণ।'
            ),
            l(
              'Surface projection of the spleen aligns longitudinally beneath the left 9th, 10th, and 11th ribs, its long axis parallel to the 10th rib, extending anteriorly only as far as the midaxillary line in healthy adults. Because the spleen is entirely protected by the lower rib cage, it is normally non-palpable during physical examination. A spleen must enlarge to roughly twice to three times its normal volume (splenomegaly) before its anterior notched border descends below the left costal margin toward the umbilicus during deep inspiration.',
              'সুস্থ মানুষের প্লীহা বামদিকের ৯ম, ১০ম এবং ১১তম পাঁজরের নিচে সংরক্ষিত থাকে এবং এর দীর্ঘ অক্ষ ১০ম পাঁজরের সমান্তরালে মিডঅ্যাক্সিলারি লাইন পর্যন্ত বিস্তৃত হয়। পাঁজরের নিচে সম্পূর্ণ লুক্কায়িত থাকায় স্বাভাবিক অবস্থায় প্লীহা হাতে স্পর্শ করা যায় না। প্লীহার আকার স্বাভাবিকের চেয়ে দ্বিগুণেরও বেশি বৃদ্ধি পেলে (স্প্লেনোমেগালি) তবেই গভীর শ্বাস নেওয়ার সময় এর খাঁজকাটা প্রান্তটি বাম পাঁজরের নিচ দিয়ে নাভির দিকে নেমে এসে চিকিৎসকের হাতে ধরা পড়ে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Fascial Planes and Vascular Cannulation Corridors of the Extremities', 'অঙ্গপ্রত্যঙ্গের ফাসিয়া স্তর এবং রক্তনালীতে ক্যানুলা প্রবেশের পথ'),
          paragraphs: [
            l(
              'In the femoral triangle, surface anatomy guides femoral arterial and venous puncture for cardiac catheterization and extracorporeal life support. The femoral nerve, artery, vein, and deep inguinal lymphatics arrange in the classic lateral-to-medial NAVEL sequence beneath the inguinal ligament. Palpating the maximal femoral pulse at the midinguinal point establishes the arterial landmark; the femoral vein lies precisely 1 cm medial to this pulse point within the intermediate compartment of the femoral sheath, permitting rapid emergency central venous cannulation.',
              'ফিমোরাল ত্রিভুজে রক্তনালীর অবস্থান এনজিওগ্রাম এবং জরুরি ক্যাথেটার বসানোর পথ দেখায়। কুঁচকির লিগামেন্টের নিচ দিয়ে বাইরে থেকে ভেতরের দিকে স্নায়ু, ধমনী, শিরা ও লিম্ফ নোড (NAVEL সূত্রে) সারিবদ্ধ থাকে। ফিমোরাল ধমনীর স্পন্দনের ঠিক ১ সেমি ভেতরের দিকে ফিমোরাল শিরা অবস্থান করে; এই নিখুঁত শারীরিক দূরত্বের ওপর নির্ভর করে চিকিৎসকরা কয়েক সেকেন্ডের ভেতর হৃৎপিণ্ডের দিকে বড় ক্যাথেটার প্রবেশ করিয়ে জীবনরক্ষা করেন।'
            ),
            l(
              'At the ankle, the medial malleolus is an indispensable bony landmark for both arterial assessment and surgical venous cutdown. The posterior tibial pulse is palpated midway between the medial malleolus and the calcaneus, accompanied by the tibial nerve. Immediately anterior to the medial malleolus runs the great saphenous vein, accompanied by the saphenous nerve; in collapsed pediatric or trauma patients where peripheral venous access fails, emergency surgical saphenous cutdown anterior to the medial malleolus guarantees rapid large-volume intravascular fluid resuscitation.',
              'গোড়ালির ভেতরের উঁচু হাড়টি (মিডিয়াল ম্যালিওলাস) ধমনী পরীক্ষা এবং জরুরি স্যালাইনের লাইন কাটার জন্য একটি অপরিহার্য ল্যান্ডমার্ক। এর ঠিক পেছনে পোস্টেরিয়র টিবিয়াল পালস এবং টিবিয়াল নার্ভ থাকে। আর এর ঠিক সামনে দিয়ে গ্রেট স্যাফেনাস শিরা অতিক্রম করে; শিশু বা মুমূর্ষু রোগীর কোনো শিরা খুঁজে না পাওয়া গেলে গোড়ালির এই হাড়ের সামনে চামড়া কেটে সরাসরি স্যাফেনাস শিরা বের করে স্যালাইন দেওয়া হয় যা দ্রুত রোগীকে পুনরুজ্জীবিত করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Procedural Safety: Thoracocentesis and Paracentesis Landmarks', 'চিকিৎসার নিরাপত্তা: থোরাসেন্টেসিস ও প্যারাসেন্টেসিস ল্যান্ডমার্ক'),
          paragraphs: [
            l(
              'In massive pleural effusion, diagnostic and therapeutic thoracocentesis demands meticulous surface landmark calculation to avoid visceral laceration. The procedure is performed posteriorly in the seated patient, typically in the 7th or 8th intercostal space midway between the inferior angle of the scapula and the vertebral column, never descending below the 9th intercostal space to avoid transdiaphragmatic puncture of the liver (on the right) or spleen (on the left). The needle is advanced resting firmly on the superior border of the rib.',
              'ফুসফুসে অতিরিক্ত পানি জমলে তা টেনে বের করার জন্য (থোরাসেন্টেসিস) শারীরিক ল্যান্ডমার্ক নিখুঁতভাবে নির্ধারণ করতে হয়। রোগীকে সোজা বসিয়ে পিঠের দিকে স্ক্যাপুলার কোণ ও মেরুদণ্ডের মাঝামাঝি ৭ম বা ৮ম পাঁজরের ফাঁক দিয়ে সুঁই প্রবেশ করানো হয়; ডায়াফ্রাম ভেদ করে লিভার বা প্লীহায় আঘাত লাগা এড়াতে কখনোই ৯ম পাঁজরের নিচে নামা যাবে না এবং সুঁইটি সর্বদা পাঁজরের ওপরের কিনারা ছুঁয়ে ভেতরে প্রবেশ করাতে হবে।'
            ),
            l(
              'In abdominal ascites, large-volume paracentesis is executed either in the midline 2 cm below the umbilicus (through the avascular linea alba, taking care to empty the bladder first to avoid puncture), or more commonly in the left lower quadrant, 3 cm superior and medial to the anterior superior iliac spine (ASIS). The left lower quadrant is preferred because the abdominal wall is thin and the sigmoid colon is mobile, whereas the right lower quadrant poses risks of puncturing the fixed cecum or an enlarged post-transplant liver.',
              'পেটের জলরোগ বা অ্যাসাইটিসের পানি নিষ্কাশনের জন্য (প্যারাসেন্টেসিস) নাভির নিচে মাঝখানের রক্তনালীহীন সাদা রেখা (লিনিয়া অ্যালবা) দিয়ে অথবা বাম তলপেটের ASIS থেকে ৩ সেমি ওপরে ও ভেতরের স্থানটি বেছে নেওয়া হয়। বাম তলপেটে উদরপ্রাচীর পাতলা থাকে এবং সিগময়েড কোলন নমনীয় হওয়ায় আঘাতের ঝুঁকি কম থাকে, অপরদিকে ডান তলপেটে শক্তভাবে লেগে থাকা অন্ধান্ত্র ফুটো হয়ে যাওয়ার মারাত্মক ঝুঁকি থাকে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Synthesis of Palpation-Aware Diagnostic Competence', 'স্পর্শনির্ভর ডায়াগনস্টিক দক্ষতার সমন্বিত সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Mastery of surface anatomy bridges physical examination with surgical anatomy. Whether evaluating acute abdominal tenderness over McBurney’s point, placing a life-saving intercostal drain within the triangle of safety, or cannulating the internal jugular vein in Sedillot’s triangle, precise knowledge of underlying structural geometry ensures procedural efficacy and eliminates iatrogenic injury.',
              'সারফেস শারীরস্থানে দক্ষতা অর্জন শারীরিক পরীক্ষাকে সরাসরি অস্ত্রোপচারের সাথে সংযুক্ত করে। ম্যাকবার্নি পয়েন্টে তীব্র অ্যাপেন্ডিসাইটিস শনাক্ত করা, সেফটি ট্রায়াঙ্গলে চেস্ট ড্রেন বসানো কিংবা গলার শিরায় সফলভাবে সেন্ট্রাল লাইন স্থাপন করা—প্রতিটি ক্ষেত্রেই শারীরিক ল্যান্ডমার্কের নিখুঁত জ্ঞান চিকিৎসকের কার্যকারিতা বাড়ায় এবং যেকোনো চিকিৎসাঘটিত আঘাত প্রতিরোধ করে।'
            ),
            l(
              'Surface anatomy is not an approximation, but an exact clinical discipline wherein every pulse, bony ridge, and fascial triangle reflects invariant deeper architecture, standing as the ultimate physical interface between doctor and patient in safe clinical medicine.',
              'সারফেস শারীরস্থান কোনো আনুমানিক ধারণা নয়, বরং এটি একটি সুনির্দিষ্ট চিকিৎসাবিজ্ঞান যেখানে প্রতিটি পালস, হাড়ের খাঁজ এবং ফাসিয়ার ত্রিভুজ শরীরের ভেতরের অপরিবর্তনীয় সত্যকে নির্দেশ করে এবং নিরাপদ চিকিৎসার ক্ষেত্রে চিকিৎসক ও রোগীর মাঝে সবচেয়ে বিশ্বস্ত যোগাযোগের মাধ্যম হিসেবে কাজ করে।'
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
          heading: l('Real-Time Ultrasound Surface Fusion and Procedural Guidance', 'রিয়েল-টাইম আল্ট্রাসাউন্ড সারফেস ফিউশন ও প্রসিডিউরাল গাইডেন্স'),
          paragraphs: [
            l(
              'Modern interventional practice pairs traditional tactile surface palpation with dynamic point-of-care ultrasound (POCUS), establishing "ultrasound-guided surface anatomy." In vascular cannulation, tactile palpation of the carotid artery pulse identifies the general anatomical zone, while high-frequency linear ultrasound reveals anatomical variations—such as an internal jugular vein that courses directly anterior or medial to the carotid artery in up to 8.5% of patients—completely preventing inadvertent carotid artery cannulation, stroke, or neck hematoma.',
              'আধুনিক চিকিৎসাব্যবস্থায় হাতের স্পর্শের সাথে পোর্টেবল আল্ট্রাসাউন্ড (POCUS) যুক্ত করে আরও নিখুঁত ও নিরাপদ চিকিৎসা প্রদান করা হয়। গলায় সেন্ট্রাল লাইন বসানোর সময় হাতের স্পর্শে ক্যারোটিড ধমনীর স্পন্দন দেখে সাধারণ এলাকা নির্ধারণ করা হয় এবং আল্ট্রাসাউন্ডের মাধ্যমে দেখা হয় শিরাটি ধমনীর ওপর দিয়ে যাচ্ছে কিনা (প্রায় ৮.৫% মানুষের ক্ষেত্রে যা দেখা যায়); এর ফলে অসাবধানতাবশত ধমনীতে আঘাত লাগা, রক্ত জমাট বাঁধা বা ব্রেন স্ট্রোকের ঝুঁকি শতভাগ দূর করা সম্ভব হয়।'
            ),
            l(
              'In regional anesthesiology, ultrasound localization of fascial planes enables target-specific nerve blocks without motor blockade. Transversus abdominis plane (TAP) blocks and erector spinae plane (ESP) blocks inject local anesthetics into deep fascial sheaths mapped between the internal oblique and transversus abdominis muscles or deep to the erector spinae, demonstrating how cross-sectional fascial topography extends surface landmarks into advanced multimodal analgesia.',
              'অ্যানেস্থেসিয়া দেওয়ার ক্ষেত্রে আল্ট্রাসাউন্ড ব্যবহার করে মাংসপেশি অবশ না করেই কেবল ব্যথানাশক নার্ভ ব্লক দেওয়া যায়। পেটের ট্রান্সভার্সাস অ্যাবডোমিনিস ফাসিয়া (TAP ব্লক) এবং পিঠের ইরেক্টর স্পাইনি ফাসিয়ার (ESP ব্লক) ভেতরে আল্ট্রাসাউন্ডের নির্দেশনায় ওষুধ প্রয়োগ করে বড় অপারেশনের পর রোগীকে কোনো ব্যথা ছাড়াই দ্রুত সুস্থ করে তোলা সম্ভব হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Emergency Resuscitative Endovascular Balloon Occlusion (REBOA)', 'জরুরি এন্ডোভাস্কুলার বেলুন ব্লকেজ (REBOA) ও ভাস্কুলার ল্যান্ডমার্ক'),
          paragraphs: [
            l(
              'In catastrophic non-compressible torso hemorrhage from severe pelvic or abdominal trauma, Resuscitative Endovascular Balloon Occlusion of the Aorta (REBOA) serves as a minimally invasive bridge to definitive surgical hemostasis. The procedure requires immediate percutaneous cannulation of the common femoral artery at the midinguinal point. A compliant balloon catheter is advanced retrograde into the aorta: Zone 1 (descending thoracic aorta from left subclavian to celiac axis, approximately 46 cm from the femoral sheath) for intra-abdominal hemorrhage, or Zone 3 (infrarenal aorta from lowest renal artery to aortic bifurcation, approximately 28 cm from the sheath) for isolated pelvic disruption.',
              'পেট বা পেলভিসের মারাত্মক দুর্ঘটনায় অভ্যন্তরীণ রক্তক্ষরণে রোগীর রক্তচাপ শূন্যে নেমে এলে জীবন বাঁচাতে মহাধমনীর ভেতর বেলুন ফুলিয়ে রক্তপাত বন্ধ করার পদ্ধতি (REBOA) প্রয়োগ করা হয়। কুঁচকির ফিমোরাল ধমনী দিয়ে একটি বিশেষ বেলুন ক্যাথেটার মহাধমনীর ভেতরে ঢুকিয়ে ফুলিয়ে দেওয়া হয়: পেটের ভেতরের রক্তক্ষরণে বুকের মহাধমনীতে (জোন ১) এবং পেলভিসের হাড় ভাঙার রক্তক্ষরণে কিডনির নিচের মহাধমনীতে (জোন ৩) রক্ত চলাচল সাময়িকভাবে আটকে দিয়ে সার্জনদের রোগীকে অপারেশন থিয়েটারে নেওয়ার মতো অমূল্য সময় এনে দেয়।'
            ),
            l(
              'Accurate external surface measurement from the femoral puncture site to the mid-sternum (Zone 1) or umbilicus (Zone 3) determines catheter insertion depth prior to blind or fluoroscopic deployment. Over-inflation risks aortic rupture, while balloon occlusion times exceeding 30 minutes induce severe distal tissue ischemia and reperfusion injury, illustrating how precise vascular surface metrics determine the knife-edge boundary between heroic resuscitation and fatal ischemic necrosis.',
              'ফিমোরাল ধমনীর প্রবেশমুখ থেকে বুকের মধ্যভাগ (জোন ১) বা নাভি (জোন ৩) পর্যন্ত শরীরের ওপর ফিতা দিয়ে মেপে ক্যাথেটার কতটুকু ঢোকাতে হবে তা নির্ধারণ করা হয়। বেলুন অতিরিক্ত ফোলালে মহাধমনী ফেটে যেতে পারে এবং ৩০ মিনিটের বেশি রক্ত চলাচল বন্ধ রাখলে নিচের অঙ্গগুলো পচে নষ্ট হয়ে যেতে পারে; তাই সারফেস পরিমাপের সামান্য হেরফেরই রোগীর জীবন ও মৃত্যুর মাঝে সীমানা নির্ধারণ করে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-region schematic of clinical surface anatomy: craniocervical pulse points and cricothyroid membrane, the thoracic triangle of safety, abdominal McBurney and Murphy points, and Tuffier’s lumbar plane.',
      'ক্লিনিক্যাল সারফেস শারীরস্থানের ৪টি প্রধান অঞ্চল: ঘাড়ের পালস পয়েন্ট ও ক্রিকোথাইরয়েড পর্দা, বক্ষের ট্রায়াঙ্গল অব সেফটি, পেটের ম্যাকবার্নি ও মারফি পয়েন্ট এবং মেরুদণ্ডের টাফিয়ার্স লাম্বার রেখা।'
    ),
    steps: [
      l(
        '1. Head and neck surface landmarks localize the carotid pulse point and cricothyroid membrane for emergency airway access.',
        '১. মাথা ও ঘাড়ের ল্যান্ডমার্ক ক্যারোটিড পালস এবং জরুরি শ্বাসনালী উন্মুক্তকরণের ক্রিকোথাইরয়েড পর্দা চিহ্নিত করে।'
      ),
      l(
        '2. The thoracic cage guides stethoscope placement over heart valves and defines the triangle of safety for chest tube thoracostomy.',
        '২. বক্ষপিঞ্জর হৃৎপিণ্ডের কপাটিকা শোনার স্থান নির্দেশ করে এবং চেস্ট ড্রেন বসানোর নিরাপদ ত্রিভুজ নির্ধারণ করে।'
      ),
      l(
        '3. Abdominal diagnostic points (McBurney and Murphy) pinpoint acute appendicitis and acute cholecystitis.',
        '৩. পেটের প্রধান বাহ্যিক বিন্দুসমূহ (ম্যাকবার্নি ও মারফি) তীব্র অ্যাপেন্ডিসাইটিস ও পিত্তথলির প্রদাহের সঠিক অবস্থান নির্দেশ করে।'
      ),
      l(
        '4. Tuffier’s intercristal line across the L4 spinous process guarantees safe lumbar puncture well below the conus medullaris.',
        '৪. L4 কশেরুকা বরাবর টাফিয়ার্স রেখা সুষুম্নাকাণ্ডের সমাপ্তির নিচে নিরাপদ লাম্বার পাংচারের স্থান নিশ্চিত করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'When performing an emergency tube thoracostomy (chest tube insertion) for traumatic hemopneumothorax, which anatomical structure marks the inferior boundary of the "triangle of safety"?',
      'ট্রমা রোগীদের ক্ষেত্রে বুকের গহ্বরে রক্ত ও বাতাস জমলে জরুরি চেস্ট ড্রেন পাইপ বসানোর সময় কোন শারীরিক গঠনটি "ট্রায়াঙ্গল অব সেফটি" বা নিরাপদ ত্রিভুজের নিচের সীমানা নির্ধারণ করে?',
    ),
    options: [
      l('Horizontal level of the 5th intercostal space', '৫ম ইন্টারকোস্টাল স্পেসের অনুভূমিক সমতল'),
      l('Lateral border of the pectoralis major muscle', 'পেক্টোরালিস মেজর পেশীর বাইরের সীমানা'),
      l('Anterior border of the latissimus dorsi muscle', 'ল্যাটিসিমাস ডরসি পেশীর সামনের সীমানা'),
      l('Inferior border of the 8th rib', '৮ম পাঁজরের হাড়ের নিচের সীমানা'),
    ],
    correctIndex: 0,
    explanation: l(
      'The British Thoracic Society "triangle of safety" on the lateral chest wall is bounded anteriorly by the lateral border of pectoralis major, posteriorly by the anterior border of latissimus dorsi, superiorly by the apex of the axilla, and inferiorly by the horizontal level of the 5th intercostal space (approximately the nipple level in males). Inserting the chest tube within this zone over the superior border of the 5th rib avoids injuring the long thoracic nerve, the liver or spleen beneath the diaphragm, and the subcostal intercostal neurovascular bundle.',
      'ব্রিটিশ থোরাসিক সোসাইটি কর্তৃক নির্ধারিত বক্ষপ্রাচীরের "ট্রায়াঙ্গল অব সেফটি"র সামনের সীমানা হলো পেক্টোরালিস মেজর পেশী, পেছনের সীমানা ল্যাটিসিমাস ডরসি পেশী, ওপরের সীমানা বগলের শীর্ষ এবং নিচের সীমানা হলো ৫ম ইন্টারকোস্টাল স্পেস বা পাঁজরের ফাঁক (পুরুষদের ক্ষেত্রে নিপলের সমতল)। এই সীমানার মধ্যে ৫ম পাঁজরের ওপরের কিনারা দিয়ে পাইপ ঢোকালে ডায়াফ্রামের নিচে থাকা লিভার বা প্লীহা এবং পাঁজরের নিচের প্রধান রক্তনালী কোনোভাবেই আঘাতপ্রাপ্ত হয় না।'
    ),
  },
}
