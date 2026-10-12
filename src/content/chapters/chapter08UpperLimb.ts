import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
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
    id: 'netter-anatomy-8e',
    authors: 'F. H. Netter',
    title: 'Atlas of Human Anatomy, 8th edition',
    organization: 'Elsevier',
    year: 2022,
    url: 'https://www.elsevier.com/books/atlas-of-human-anatomy/netter/978-0-323-68042-4',
  },
  {
    id: 'openstax-ap2e-ch11',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 11: The Muscular System (Appendicular Muscles)',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-introduction',
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

export const chapter08UpperLimbLesson: LessonTopic = {
  id: 'topic.anatomy.upper-limb',
  slug: 'upper-limb',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('08 · Upper Limb', '০৮ · ঊর্ধ্ব অঙ্গ'),
  summary: l(
    'A comprehensive regional anatomical study of the human upper extremity: the axilla and brachial plexus, arm and forearm fascial compartments, cubital fossa, carpal tunnel, intricate hand spaces, and peripheral nerve neuropathies.',
    'মানবদেহের ঊর্ধ্ব অঙ্গের বিশদ আঞ্চলিক শারীরস্থানিক অধ্যয়ন: বগল ও ব্র্যাকিয়াল প্লেক্সাস, বাহু ও অগ্রবাহুর ফাসিয়াল কম্পার্টমেন্ট, কিউবিটাল ফসা, কার্পাল টানেল, হাতের সূক্ষ্ম স্থানসমূহ এবং প্রান্তীয় স্নায়ুর পক্ষাঘাত।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Map the boundaries and neurovascular contents of the axilla, tracing the brachial plexus from its ventral rami roots (C5-T1) through trunks, divisions, cords, and terminal peripheral nerve branches.',
      'বগলের সীমানা ও রক্তনালী-স্নায়ু উপাদান চিহ্নিত করতে পারা এবং ব্র্যাকিয়াল প্লেক্সাসের মূল (C5-T1) থেকে শুরু করে ট্রাঙ্ক, ডিভিশন, কর্ড ও প্রান্তীয় স্নায়ু শাখা পর্যন্ত বিশদ পথ ট্রেস করতে পারা।'
    ),
    l(
      'Differentiate the fascial compartments and innervation of the arm, forearm, and hand, highlighting key clinical spaces including the cubital fossa, anatomical snuffbox, and carpal tunnel.',
      'বাহু, অগ্রবাহু ও হাতের ফাসিয়াল কম্পার্টমেন্ট এবং স্নায়ু সরবরাহ পৃথক করতে পারা এবং কিউবিটাল ফসা, অ্যানাটমিক্যাল স্নাফবক্স ও কার্পাল টানেলের গঠন বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Correlate focal nerve lesions (Erb-Duchenne palsy, Klumpke palsy, radial nerve spiral groove injury, carpal tunnel syndrome, ulnar claw hand) with their distinctive functional motor and sensory deficits.',
      'সুনির্দিষ্ট স্নায়ুর আঘাতগুলোর (যেমন আর্বস পালসি, ক্লাম্পকেস পালসি, রেডিয়াল স্নায়ুর আঘাত, কার্পাল টানেল সিন্ড্রোম ও আলনার ক্ল হ্যান্ড) সাথে সংশ্লিষ্ট পেশীর পক্ষাঘাত ও সংবেদনহীনতার ক্লিনিক্যাল সম্পর্ক স্থাপন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.muscles'],
  relatedTopicIds: ['topic.anatomy.skeletal-appendicular'],
  references: refs,
  evidenceBySection: {
    introduction: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    structure: ['moore-anatomy-9e', 'netter-anatomy-8e'],
    mechanism: ['grays-anatomy-42e', 'moore-anatomy-9e'],
    integration: ['openstax-ap2e-ch11', 'netter-anatomy-8e'],
    practice: ['moore-anatomy-9e', 'guyton-hall-14e'],
    takeaways: ['moore-anatomy-9e', 'grays-anatomy-42e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Regional Organization and Functional Grasp', 'ভূমিকা: আঞ্চলিক সংগঠন ও হাতের নিপুণ কার্যক্ষমতা'), sectionId: 'introduction' },
      { id: 'sec-axilla', label: l('The Axilla and the Brachial Plexus Matrix', 'বগল এবং ব্র্যাকিয়াল প্লেক্সাসের স্নায়ুজালিক কাঠামো'), sectionId: 'structure' },
      { id: 'sec-brachium', label: l('Arm, Forearm Compartments and Cubital Fossa', 'বাহু, অগ্রবাহুর কম্পার্টমেন্ট ও কিউবিটাল ফসা'), sectionId: 'mechanism' },
      { id: 'sec-hand', label: l('Carpal Tunnel and Intrinsic Hand Architecture', 'কার্পাল টানেল ও হাতের অভ্যন্তরীণ জটিল গঠন'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Neuropathies: Erb, Klumpke and Radial Palsy', 'ক্লিনিক্যাল নিউরোপ্যাথি: আর্ব, ক্লাম্পকে ও রেডিয়াল নার্ভ পালসি'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary and Upper Limb Regional Glossary', 'সারসংক্ষেপ ও ঊর্ধ্ব অঙ্গের পরিভাষা শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Carpal Tunnel Contents', 'কার্পাল টানেলের উপাদানসমূহ'),
        definition: l(
          'A rigid fibro-osseous canal containing exactly ten structures: the single median nerve, four tendons of flexor digitorum superficialis, four tendons of flexor digitorum profundus, and one tendon of flexor pollicis longus.',
          'একটি অনমনীয় অস্থি-তন্তুময় সুড়ঙ্গ যার মধ্য দিয়ে ঠিক ১০টি গঠন অতিক্রম করে: একটি মিডিয়ান স্নায়ু, ফ্লেক্সর ডিজিটোরাম সুপারফিসিয়ালিসের ৪টি টেন্ডন, প্রোফান্ডাসের ৪টি টেন্ডন এবং ফ্লেক্সর পলিসিস লংগাসের ১টি টেন্ডন।'
        ),
      },
      {
        term: l('Erb-Duchenne Palsy (Waiter’s Tip Deformity)', 'আর্ব-ডুশেন পালসি (ওয়েটার্স টিপ বিকৃতি)'),
        definition: l(
          'Upper brachial plexus traction injury (C5-C6 roots) resulting in loss of shoulder abduction, external rotation, and forearm supination, leaving the limb hanging adducted, internally rotated, and pronated.',
          'ব্র্যাকিয়াল প্লেক্সাসের ওপরের শিকড়ে (C5-C6) অতিরিক্ত টানের ফলে সৃষ্ট পক্ষাঘাত, যার কারণে কাঁধ ঝুলে গিয়ে হাত ভেতরের দিকে ঘুরে থাকে যা বকশিশ নেওয়ার সময় ওয়েটারের হাতের ভঙ্গির মতো দেখায়।'
        ),
      },
      {
        term: l('Cubital Fossa Boundaries and Contents', 'কিউবিটাল ফসার সীমানা ও উপাদানসমূহ'),
        definition: l(
          'A triangular space anterior to the elbow bounded laterally by brachioradialis and medially by pronator teres; contains (medial to lateral): median nerve, brachial artery bifurcation, biceps tendon, and radial nerve.',
          'কনুইয়ের সামনে অবস্থিত ত্রিকোণাকার ফাঁকা স্থান; এর ভেতর দিয়ে ভেতর থেকে বাইরের দিকে মিডিয়ান স্নায়ু, ব্র্যাকিয়াল ধমনীর বিভাজন, বাইসেপস টেন্ডন এবং রেডিয়াল স্নায়ু অতিক্রম করে।'
        ),
      },
      {
        term: l('Klumpke Palsy (Claw Hand)', 'ক্লাম্পকে পালসি (ক্ল হ্যান্ড)'),
        definition: l(
          'Lower brachial plexus traction injury (C8-T1 roots) caused by sudden upward limb traction, paralyzing all intrinsic hand muscles (lumbricals and interossei) and producing a severe claw hand deformity.',
          'ব্র্যাকিয়াল প্লেক্সাসের নিচের শিকড়ে (C8-T1) ওপরের দিকে হঠাৎ হেঁচকা টানের ফলে সৃষ্ট পক্ষাঘাত, যার ফলে হাতের সমস্ত অভ্যন্তরীণ ক্ষুদ্র পেশী অচল হয়ে আঙুলগুলো পশুর থাবার মতো বাঁকা হয়ে যায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Localizing Peripheral Nerve Lesions Across the Radial Nerve Pathway', 'রেডিয়াল স্নায়ুর গতিপথ বরাবর আঘাতের সুনির্দিষ্ট অবস্থান নির্ণয়'),
        steps: [
          l('Step 1: If a high lesion occurs in the axilla (e.g., crutch palsy or "Saturday night palsy"), all triceps heads, brachioradialis, wrist extensors, and digital extensors are paralyzed; complete wrist drop occurs with loss of elbow extension.', 'ধাপ ১: বগলের উঁচুতে আঘাত লাগলে (যেমন ক্রাচের অতিরিক্ত চাপে) ট্রাইসেপস, কব্জি সোজা করার পেশী এবং আঙুল তোলার সমস্ত পেশী অবশ হয়ে যায়; কনুই সোজা করার ক্ষমতা হারায় এবং কব্জি পুরোপুরি ঝুলে পড়ে (রিস্ট ড্রপ)।'),
          l('Step 2: If a mid-shaft humeral fracture injures the radial nerve in the spiral groove, triceps innervation is spared (branches exit proximally), but wrist and finger extension are paralyzed, causing wrist drop with preserved elbow extension.', 'ধাপ ২: হিউমেরাসের মাঝামাঝি ভাঙলে স্পাইরাল খাঁজে স্নায়ুটি ক্ষতিগ্রস্ত হয়; এখানে কনুই সোজা করার ক্ষমতা বহাল থাকে কারণ এর শাখা আগেই বের হয়ে গেছে, কিন্তু কব্জি ও আঙুল তোলার ক্ষমতা পুরোপুরি নষ্ট হয়ে ঝুলে পড়ে।'),
          l('Step 3: If a distal injury affects only the superficial radial nerve at the wrist, motor function is 100% normal, but sensory numbness is confined to the dorsal web space of the thumb and index finger.', 'ধাপ ৩: কব্জির কাছে কেবল পৃষ্ঠীয় শাখায় আঘাত লাগলে কোনো পেশী অবশ হয় না, কেবল বৃদ্ধাঙ্গুল ও তর্জনীর পেছনের ত্বকে অবশ অনুভূতি বা অসাড়তা দেখা দেয়।'),
        ],
        conclusion: l('Systematic testing of triceps elbow extension, wrist dorsiflexion, and the first dorsal interosseous sensory web space precisely isolates the anatomical level of radial nerve entrapment or laceration.', 'কনুই সোজা করার পরীক্ষা, কব্জি তোলার পরীক্ষা এবং বৃদ্ধাঙ্গুলের পেছনের ত্বকের সংবেদনশীলতা পরখ করে রেডিয়াল স্নায়ুর আঘাতটি ঠিক কোন উচ্চতায় ঘটেছে তা নিখুঁতভাবে শনাক্ত করা যায়।'),
      },
    ],
    checkpoints: [
      {
        question: l('Why does compression of the median nerve in carpal tunnel syndrome cause sensory loss in the lateral three and a half digits, while sparing sensation over the central palm (thenar eminence)?', 'কার্পাল টানেল সিন্ড্রোমে মিডিয়ান স্নায়ু চাপে পড়লে বাইরের সাড়ে তিনটি আঙুল অবশ হলেও হাতের তালুর মাংসল অংশের (থেনার এমিনেন্স) চামড়া স্বাভাবিক থাকে কেন?'),
        answer: l('Because the palmar cutaneous branch of the median nerve arises approximately 5 cm proximal to the flexor retinaculum and courses superficial to the carpal tunnel, thereby completely bypassing the compressed tunnel compartment to preserve sensation over the proximal thenar palm.', 'কারণ মিডিয়ান স্নায়ুর পামার কিউটেনিয়াস শাখাটি কব্জির সুড়ঙ্গের প্রায় ৫ সেন্টিমিটার আগেই বের হয়ে সুড়ঙ্গের ওপর দিয়ে প্রবাহিত হয়; ফলে সুড়ঙ্গের ভেতরে চাপ পড়লেও এই শাখাটি মুক্ত থাকে এবং তালুর চামড়ার সংবেদন স্বাভাবিক থাকে।'),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch08-upper-limb-diagram',
    title: l('Interactive Upper Limb Regional Anatomy Schematic', 'ইন্টারেক্টিভ ঊর্ধ্ব অঙ্গের আঞ্চলিক শারীরস্থানিক স্কিম্যাটিক'),
    description: l(
      'Explore the four key anatomical zones of the upper extremity: the axilla and brachial plexus, arm compartments and cubital fossa, forearm flexor/extensor architecture, and carpal tunnel spaces.',
      'ঊর্ধ্ব অঙ্গের চারটি প্রধান শারীরস্থানিক অঞ্চল পরীক্ষা করুন: বগল ও ব্র্যাকিয়াল প্লেক্সাস, বাহু ও কিউবিটাল ফসা, অগ্রবাহুর পেশী ব্যবস্থা এবং কার্পাল টানেল ও হাতের জটিল গঠন।'
    ),
    disclaimer: l(
      'Regional anatomical schematic: select any zone to inspect its neurovascular conduits, muscle compartments, functional boundaries, and clinical nerve injury syndromes.',
      'আঞ্চলিক অ্যানাটমি চিত্র: যেকোনো অঞ্চল নির্বাচন করে এর রক্তনালী ও স্নায়ুর পথ, পেশী কম্পার্টমেন্ট, সীমানা এবং স্নায়ুর পক্ষাঘাতজনিত লক্ষণসমূহ পরীক্ষা করুন।'
    ),
    svgType: 'upper-limb-regions',
    items: [
      {
        id: 'axilla-plexus',
        label: l('Axilla & Brachial Plexus Matrix', 'বগল ও ব্র্যাকিয়াল প্লেক্সাসের কাঠামো'),
        description: l(
          'Pyramidal space below the shoulder transmitting the axillary vessels and brachial plexus (Roots C5-T1, Trunks, Divisions, Cords). Cords wrap around the axillary artery named by their anatomical relation.',
          'কাঁধের নিচে অবস্থিত পিরামিডাকার অঞ্চল যার মধ্য দিয়ে ব্র্যাকিয়াল প্লেক্সাস (C5-T1 শিকড়) ও রক্তনালী অতিক্রম করে। কর্ডগুলো অ্যাক্সিলারি ধমনীর চারপাশের অবস্থান অনুযায়ী নামাঙ্কিত।'
        ),
        details: l(
          'Lateral cord yields musculocutaneous & median root; medial cord yields ulnar & median root; posterior cord yields axillary & radial nerves. Axillary lymph nodes drain whole breast.',
          'ল্যাটেরাল কর্ড থেকে মাসকুলোকিউটেনিয়াস, মিডিয়াল কর্ড থেকে আলনার, এবং পেছনের কর্ড থেকে রেডিয়াল ও অ্যাক্সিলারি স্নায়ু উৎপন্ন হয়। এর লিম্ফ নোড স্তনের লসিকা নিষ্কাশন করে।'
        ),
        sectionId: 'structure',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'brachium-cubital',
        label: l('Brachium Compartments & Cubital Fossa', 'বাহুর কম্পার্টমেন্ট ও কিউবিটাল ফসা'),
        description: l(
          'Anterior flexor compartment (biceps, brachialis, coracobrachialis, musculocutaneous nerve) and posterior extensor compartment (triceps, radial nerve) transition across the triangular cubital fossa.',
          'সামনের ভাঁজকারী কম্পার্টমেন্ট (বাইসেপস, ব্র্যাকিয়ালিস) এবং পেছনের সোজা করার কম্পার্টমেন্ট (ট্রাইসেপস) কনুইয়ের সামনে ত্রিভুজাকার কিউবিটাল ফসায় এসে মিলিত হয়।'
        ),
        details: l(
          'Cubital fossa contents (medial to lateral): Median nerve, Brachial artery bifurcation, Biceps tendon, Radial nerve deep in lateral gutter under brachioradialis.',
          'কিউবিটাল ফসার উপাদান (ভেতর থেকে বাইরে): মিডিয়ান স্নায়ু, ব্র্যাকিয়াল ধমনী, বাইসেপস টেন্ডন এবং রেডিয়াল স্নায়ু।'
        ),
        sectionId: 'mechanism',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'antebrachium-layers',
        label: l('Antebrachial Flexor & Extensor Layers', 'অগ্রবাহুর পেশী স্তরবিন্যাস'),
        description: l(
          'Contains 20 muscles arranged into anterior (8 flexor/pronator muscles in superficial, intermediate, deep strata; mostly median nerve) and posterior (12 extensor/supinator muscles; radial nerve).',
          '২০টি পেশী নিয়ে গঠিত: সামনের ৮টি পেশী প্রধানত মিডিয়ান স্নায়ু দ্বারা নিয়ন্ত্রিত হয়ে কব্জি ও আঙুল ভাঁজ করে, এবং পেছনের ১২টি পেশী রেডিয়াল স্নায়ু দ্বারা নিয়ন্ত্রিত হয়ে আঙুল ও কব্জি সোজা করে।'
        ),
        details: l(
          'Anterior compartment contains the flexor digitorum superficialis and profundus; posterior compartment contains extensor digitorum and specialized thumb outcropper muscles.',
          'সামনের স্তরে আঙুল ভাঁজের গভীর টেন্ডন থাকে এবং পেছনের স্তরে আঙুল তোলা ও বৃদ্ধাঙ্গুল ছড়ানোর পেশীসমূহ অবস্থান করে।'
        ),
        sectionId: 'mechanism',
        color: '#fef08a',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'carpal-hand',
        label: l('Carpal Tunnel & Palmar Spaces', 'কার্পাল টানেল ও হাতের জটিল স্থান'),
        description: l(
          'Fibro-osseous channel transmitting 9 flexor tendons and the median nerve under the flexor retinaculum into the intricate fascial compartments and arterial arches of the manual palmar grasp.',
          'অনমনীয় সুড়ঙ্গ যার মধ্য দিয়ে ৯টি টেন্ডন ও মিডিয়ান স্নায়ু কব্জি পার হয়ে হাতের তালুতে প্রবেশ করে, যা করতলের ধমনী আর্চ ও সূক্ষ্ম কাজের পেশীসমূহকে সচল রাখে।'
        ),
        details: l(
          'Thenar muscles (OAF: Opponens, Abductor, Flexor pollicis brevis) powered by recurrent median nerve. Lumbricals and interossei coordinate precise finger pinch and writing grasp.',
          'বৃদ্ধাঙ্গুলের গোড়ার থেনার পেশীগুলো মিডিয়ান স্নায়ু দিয়ে চলে। লুমব্রিকাল ও ইন্টারঅসিয়াস পেশী আঙুল দিয়ে সূক্ষ্ম লেখালেখি ও কলম ধরার কাজ নিয়ন্ত্রণ করে।'
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
          heading: l('Introduction to Upper Limb Organization and Dexterity', 'ঊর্ধ্ব অঙ্গের পরিচিতি ও হাতের অনন্য দক্ষতা'),
          paragraphs: [
            l(
              'The human upper limb is specialized for tactile sensation, three-dimensional spatial manipulation, and delicate tool use rather than weight-bearing locomotion. Divided into the shoulder, arm (brachium), forearm (antebrachium), and hand (manus), the limb functions as a multi-segmented kinetic chain where proximal joints position the hand in space while distal intrinsic hand muscles execute fine motor dexterity.',
              'মানবদেহের ঊর্ধ্ব অঙ্গটি দেহের ভার বহন করার বদলে স্পর্শানুভূতি, ত্রিমাত্রিক স্থানে কাজ করা এবং নিপুণভাবে যন্ত্রপাতি ব্যবহারের জন্য বিশেষভাবে বিবর্তিত হয়েছে। কাঁধ, বাহু, অগ্রবাহু এবং হাত—এই চার ভাগে বিভক্ত অঙ্গটি একটি গতিশীল শৃঙ্খল হিসেবে কাজ করে যেখানে কাঁধ ও কনুই হাতকে কাঙ্ক্ষিত স্থানে পৌঁছে দেয় এবং হাতের সূক্ষ্ম পেশীগুলো নিখুঁত কাজ সম্পন্ন করে।'
            ),
            l(
              'The innervation of the upper limb is supplied entirely by the brachial plexus, a complex somatic nerve network originating from cervical and thoracic spinal cord levels C5 through T1. Arterial blood enters through the subclavian artery, continues as the axillary and brachial arteries, and bifurcates at the cubital fossa into the radial and ulnar arteries to form the rich palmar anastomotic arches of the hand.',
              'ঊর্ধ্ব অঙ্গের সমস্ত পেশী ও ত্বকের স্নায়ু সরবরাহ ব্র্যাকিয়াল প্লেক্সাস নামক এক জটিল স্নায়ুজালিকা থেকে আসে, যা ঘাড়ের C5 থেকে T1 পর্যন্ত সুষুম্নাকাণ্ডের শিকড় থেকে উৎপন্ন হয়। সাবক্ল্যাভিয়ান ধমনী দিয়ে রক্ত ঢুকে বগলে অ্যাক্সিলারি এবং বাহুতে ব্র্যাকিয়াল ধমনী হিসেবে নেমে এসে কনুইয়ে রেডিয়াল ও আলনার ধমনীতে বিভক্ত হয়ে হাতের তালুতে সমৃদ্ধ রক্তসংবহন নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Axilla and the Brachial Plexus Matrix', 'বগল এবং ব্র্যাকিয়াল প্লেক্সাসের স্নায়ুজালিক কাঠামো'),
          paragraphs: [
            l(
              'The axilla is a four-sided pyramidal space beneath the shoulder joint connecting the base of the neck with the upper limb. It features an apex (cervicoaxillary canal bounded by clavicle, first rib, and scapula), a base (armpit skin and axillary fascia), an anterior wall (pectoralis major and minor), a posterior wall (subscapularis, teres major, latissimus dorsi), a medial wall (ribs 1–4 and serratus anterior), and a narrow lateral wall (intertubercular sulcus of the humerus).',
              'বগল হলো কাঁধের নিচে অবস্থিত একটি চারকোনা পিরামিডাকার স্থান যা ঘাড়ের সাথে বাহুকে যুক্ত করে। এর ওপরের প্রবেশপথ ক্লাভিকল ও প্রথম পাঁজরের মাঝে অবস্থিত; মেঝের ত্বক ও ফাসিয়া বগলের খাঁজ তৈরি করে; সামনের প্রাচীর পেক্টোরালিস পেশী, পেছনের প্রাচীর ল্যাটিসিমাস ডরসি, ভেতরের প্রাচীর পাঁজর ও সেরাটা পেশী এবং বাইরের প্রাচীর হিউমেরাস অস্থির খাঁজ নিয়ে গঠিত।'
            ),
            l(
              'The brachial plexus traverses the axilla, organizing systematically from proximal to distal into 5 Roots (anterior rami of C5, C6, C7, C8, T1), 3 Trunks (superior from C5-C6, middle from C7, inferior from C8-T1), 6 Divisions (anterior and posterior divisions of each trunk), and 3 Cords (lateral, medial, and posterior, named according to their relationship to the axillary artery). The cords terminate in five major motor and sensory nerves: the musculocutaneous, axillary, radial, median, and ulnar nerves.',
              'ব্র্যাকিয়াল প্লেক্সাস বগলের মধ্য দিয়ে ক্রমান্বয়ে সাজানো থাকে: ৫টি মূল বা রুট (C5-T1), ৩টি ট্রাঙ্ক (ওপরের C5-C6, মাঝের C7 এবং নিচের C8-T1), ৬টি ডিভিশন (প্রতিটির সম্মুখ ও পশ্চাৎ শাখা) এবং ৩টি কর্ড (অ্যাক্সিলারি ধমনীর পাশে থাকার কারণে এদের ল্যাটেরাল, মিডিয়াল ও পোস্টেরিয়র কর্ড বলে)। এই কর্ডগুলো থেকেই শেষ পর্যন্ত পাঁচটি প্রধান স্নায়ু—মাসকুলোকিউটেনিয়াস, অ্যাক্সিলারি, রেডিয়াল, মিডিয়ান এবং আলনার স্নায়ু উৎপন্ন হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Arm, Forearm Compartments and Cubital Fossa', 'বাহু, অগ্রবাহুর কম্পার্টমেন্ট ও কিউবিটাল ফসা'),
          paragraphs: [
            l(
              'The arm is partitioned by medial and lateral intermuscular septa into two fascial compartments: the anterior compartment (containing biceps brachii, coracobrachialis, and brachialis, innervated by the musculocutaneous nerve to flex the elbow and supinate the forearm) and the posterior compartment (containing the three heads of the triceps brachii, innervated by the radial nerve to extend the elbow).',
              'বাহুটি দুটি প্রধান কম্পার্টমেন্টে বিভক্ত: সামনের কম্পার্টমেন্ট (বাইসেপস ও ব্র্যাকিয়ালিস পেশী যা মাসকুলোকিউটেনিয়াস স্নায়ু দ্বারা পরিচালিত হয়ে কনুই ভাঁজ করে এবং হাতকে বাইরের দিকে মোচড় দেয়) এবং পেছনের কম্পার্টমেন্ট (ট্রাইসেপস পেশী যা রেডিয়াল স্নায়ু দ্বারা পরিচালিত হয়ে কনুই সোজা করে)।'
            ),
            l(
              'The cubital fossa is a vital triangular depression on the anterior elbow. Bounded laterally by the brachioradialis and medially by the pronator teres, its roof is reinforced by the bicipital aponeurosis. Arranged strictly from medial to lateral, the deep structures crossing the fossa are: the median nerve, the brachial artery (and its bifurcation into radial and ulnar arteries), the tendon of the biceps brachii, and the radial nerve deep within the lateral gutter under the brachioradialis.',
              'কিউবিটাল ফসা হলো কনুইয়ের সামনের একটি অত্যন্ত গুরুত্বপূর্ণ ত্রিকোণাকার অঞ্চল। এর একপাশে ব্র্যাকিওরেডিয়ালিস এবং অন্যপাশে প্রোনেটর টেরিস পেশী থাকে; ওপরের ছাদটি বাইসেপসের শক্ত পর্দা দ্বারা সুরক্ষিত। ভেতর থেকে বাইরের দিকে এর প্রধান উপাদানগুলো হলো: মিডিয়ান স্নায়ু, ব্র্যাকিয়াল ধমনী (যা এখানে দুই ভাগে বিভক্ত হয়), বাইসেপস টেন্ডন এবং গভীরে থাকা রেডিয়াল স্নায়ু।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Carpal Tunnel and Intrinsic Hand Architecture', 'কার্পাল টানেল ও হাতের অভ্যন্তরীণ জটিল গঠন'),
          paragraphs: [
            l(
              'The forearm contains 20 muscles arranged into anterior flexor/pronator layers (8 muscles, predominantly median nerve) and posterior extensor/supinator layers (12 muscles, radial nerve). At the wrist, the anterior flexor tendons pass through the carpal tunnel, a tight fibro-osseous space bounded deeply by the concave carpal bones and roofed by the thick, inelastic flexor retinaculum (transverse carpal ligament).',
              'অগ্রবাহুতে ২০টি পেশী থাকে: সামনের ৮টি পেশী কব্জি ও আঙুল ভাঁজ করে (প্রধানত মিডিয়ান স্নায়ু) এবং পেছনের ১২টি পেশী আঙুল সোজা করে (রেডিয়াল স্নায়ু)। কব্জির সামনে এই টেন্ডনগুলো কার্পাল টানেল নামক একটি অত্যন্ত আঁটসাঁট সুড়ঙ্গের মধ্য দিয়ে যায়, যার ওপরের ছাদটি শক্ত ও অনমনীয় ফ্লেক্সর রেটিনাকুলাম পর্দা দিয়ে আবৃত থাকে।'
            ),
            l(
              'Exactly ten structures enter the palm through the carpal tunnel: the single median nerve, four tendons of flexor digitorum superficialis, four tendons of flexor digitorum profundus, and the single tendon of flexor pollicis longus. In the hand, the recurrent branch of the median nerve innervates the thenar muscles to permit thumb opposition, while the deep branch of the ulnar nerve controls the hypothenar muscles, adductor pollicis, and interossei for finger abduction and adduction.',
              'কার্পাল টানেলের মধ্য দিয়ে ঠিক ১০টি অঙ্গ হাতের তালুতে প্রবেশ করে: একটি মিডিয়ান স্নায়ু, ফ্লেক্সর সুপারফিসিয়ালিসের ৪টি টেন্ডন, প্রোফান্ডাসের ৪টি টেন্ডন এবং ফ্লেক্সর পলিসিসের ১টি টেন্ডন। হাতের তালুতে মিডিয়ান স্নায়ুর বিশেষ শাখা বৃদ্ধাঙ্গুলের গোড়ার পেশীকে নিয়ন্ত্রণ করে বৃদ্ধাঙ্গুলকে অন্য আঙুলের বিপরীতে স্পর্শ করতে দেয়, অন্যদিকে আলনার স্নায়ু বাকি ক্ষুদ্র পেশীগুলোকে নিয়ন্ত্রণ করে আঙুল ছড়ানো ও একত্রিত করার কাজ চালায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Neuropathies: Erb, Klumpke and Radial Palsy', 'ক্লিনিক্যাল নিউরোপ্যাথি: আর্ব, ক্লাম্পকে ও রেডিয়াল নার্ভ পালসি'),
          paragraphs: [
            l(
              'Traction injuries to the brachial plexus create distinct anatomical syndromes based on the affected spinal roots. Upper plexus traction (C5-C6 roots), known as Erb-Duchenne palsy, occurs during difficult breech deliveries or falling onto the shoulder, paralyzing the deltoid, biceps, and supinator to produce a "waiter tip deformity" (limb adducted, internally rotated, pronated). Lower plexus traction (C8-T1 roots), known as Klumpke palsy, occurs when clutching an object during a fall from a height, paralyzing intrinsic hand muscles to cause a claw hand.',
              'ব্র্যাকিয়াল প্লেক্সাসের স্নায়ুতে অতিরিক্ত টানের কারণে সুনির্দিষ্ট পক্ষাঘাত দেখা দেয়। ওপরের স্নায়ুতে টান পড়লে (C5-C6) তাকে আর্ব-ডুশেন পালসি বলে, যা কঠিন প্রসবের সময় শিশুর কাঁধ আটকে গেলে ঘটে; এতে কাঁধ ও কনুইয়ের শক্তি হারিয়ে হাত ভেতরের দিকে ঘুরে ঝুলে থাকে (ওয়েটার্স টিপ বিকৃতি)। নিচের স্নায়ুতে টান পড়লে (C8-T1) তাকে ক্লাম্পকে পালসি বলে, যা ওপর থেকে পড়ার সময় কোনো ডালে হাত দিয়ে আটকে গেলে ঘটে এবং হাতের আঙুলগুলো বাঁকা থাবার মতো হয়ে যায় (ক্ল হ্যান্ড)।'
            ),
            l(
              'Carpal tunnel syndrome results from elevated pressure within the carpal tunnel, compressing the vulnerable median nerve. Patients experience nocturnal paresthesias and burning pain in the thumb, index, middle, and radial half of the ring finger, progressing to atrophy of the thenar eminence. Diagnostic physical signs include a positive Tinel sign (percussion over the carpal tunnel elicits tingling) and positive Phalen test (sustained wrist flexion for 60 seconds reproduces symptoms).',
              'কার্পাল টানেল সিন্ড্রোম হলো কব্জির সুড়ঙ্গে অতিরিক্ত চাপের কারণে সংবেদনশীল মিডিয়ান স্নায়ু চেপে যাওয়া। রোগীরা রাতে বৃদ্ধাঙ্গুল, তর্জনী, মধ্যমা এবং অনামিকার অর্ধেক অংশে তীব্র জ্বালাপোড়া ও অবশ অনুভূতি ভোগ করে এবং কালক্রমে বৃদ্ধাঙ্গুলের গোড়ার মাংস শুকিয়ে যায়। টিনেল পরীক্ষা (কব্জিতে টোকা দিলে ঝিনঝিন করা) এবং ফ্যালেন পরীক্ষা (কব্জি বাঁকা করে রাখলে লক্ষণ ফিরে আসা) দিয়ে এটি সহজেই শনাক্ত করা যায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary and Upper Limb Regional Glossary', 'সারসংক্ষেপ ও ঊর্ধ্ব অঙ্গের পরিভাষা শব্দকোষ'),
          paragraphs: [
            l(
              'The regional anatomy of the upper extremity represents an elegant architectural trade-off that prioritizes sensory feedback, kinetic dexterity, and multidirectional reach over massive load bearing. From the proximal routing of the brachial plexus through the axilla down to the crowded carpal tunnel and opposable thenar eminence, regional landmarks dictate both normal biomechanics and common clinical compression syndromes.',
              'ঊর্ধ্ব অঙ্গের আঞ্চলিক শারীরস্থান মানবদেহের এক অপূর্ব সৃষ্টি যা স্থায়িত্বের চেয়ে স্পর্শানুভূতি, সূক্ষ্ম হাতের কাজ এবং বহুদূরের নাগালকে সর্বোচ্চ প্রাধান্য দেয়। বগলের মধ্য দিয়ে ব্র্যাকিয়াল প্লেক্সাসের নির্ভুল শাখা-প্রশাখা থেকে শুরু করে কব্জির আঁটসাঁট কার্পাল টানেল এবং বৃদ্ধাঙ্গুলের অনন্য নড়াচড়া—এই সমস্ত অঞ্চল স্বাভাবিক কাজের পাশাপাশি বিভিন্ন স্নায়বিক রোগের কেন্দ্রবিন্দু হিসেবে কাজ করে।'
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
          heading: l('Developmental Segmentation and Dermatomal Topography', 'ভ্রূণীয় বিকাশ এবং ডার্মাটোমের স্থানিক মানচিত্র'),
          paragraphs: [
            l(
              'During embryonic development, the upper limb bud emerges at postovulatory day 26 opposite somites C5 through T1. As the limb bud elongates under the guidance of the apical ectodermal ridge (AER), it undergoes an obligatory 90-degree lateral (external) rotation along its longitudinal axis. Consequently, the original dorsal extensor muscle mass comes to lie posteriorly, while the preaxial border (C5, thumb) comes to lie laterally and the postaxial border (T1, little finger) lies medially.',
              'ভ্রূণের ২৬তম দিনে C5 থেকে T1 সোমাইটের বিপরীতে হাতের কুঁড়ি গজায়। অ্যাপিকাল এক্টোডার্মাল রিজের প্রভাবে হাতটি দৈর্ঘ্য বরাবর বাড়ার সাথে সাথে বাইরের দিকে ৯০ ডিগ্রি কোণে ঘুরে যায়। এর ফলে পেছনের সোজা করার পেশীগুলো পেছনে চলে যায় এবং বৃদ্ধাঙ্গুল বাইরের দিকে (C5) ও কনিষ্ঠ আঙুল ভেতরের দিকে (T1) অবস্থান নেয়।'
            ),
            l(
              'This rotational embryology explains the continuous barber-pole dermatomal distribution of the upper limb. Dermatome C5 supplies the lateral arm; C6 covers the lateral forearm and thumb; C7 supplies the middle finger; C8 covers the medial hand and little finger; and T1 supplies the medial forearm. The axial line of the limb represents the embryological boundary where discontinuous dermatomes (such as C6 and C8) meet without intermediate overlap.',
              'এই বিবর্তনীয় ঘূর্ণনের কারণেই হাতের চামড়ার স্নায়ু সরবরাহ বা ডার্মাটোমগুলো এক বিশেষ ক্রমানুসারে সাজানো থাকে। C5 বাহুর বাইরে, C6 অগ্রবাহু ও বৃদ্ধাঙ্গুলে, C7 মধ্যমা আঙুলে, C8 কনিষ্ঠ আঙুলে এবং T1 অগ্রবাহুর ভেতরের ত্বকে অনুভূতি জোগায়। এক্সিয়াল লাইন হলো সেই ভ্রূণীয় সীমারেখা যেখানে পাশাপাশি দুটি দূরবর্তী ডার্মাটোম কোনো মিশ্রণ ছাড়াই একে অপরের সাথে মিলিত হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Brachial Plexus Fiber Architecture and Terminal Branching Patterns', 'ব্র্যাকিয়াল প্লেক্সাসের স্নায়ুতন্তুর স্থাপত্য ও বিভাজন বিন্যাস'),
          paragraphs: [
            l(
              'The brachial plexus organizes the anterior rami of five spinal nerves into functional peripheral cables. The ventral rami receive postganglionic sympathetic fibers via gray rami communicantes from the cervical sympathetic chain. The roots emerge in the posterior triangle of the neck between the scalenus anterior and scalenus medius muscles, forming the interscalene triangle alongside the third part of the subclavian artery.',
              'ব্র্যাকিয়াল প্লেক্সাস পাঁচটি সুষুম্না স্নায়ুকে একত্রিত করে সুনির্দিষ্ট প্রান্তীয় স্নায়ু তারে রূপান্তরিত করে। স্নায়ুগুলো ঘাড়ের পেছনের অংশে স্ক্যালেনাস অ্যান্টেরিওর ও মিডিয়াস পেশীর মধ্যবর্তী ফাঁক দিয়ে সাবক্ল্যাভিয়ান ধমনীর সাথে একসাথে বেরিয়ে আসে।'
            ),
            l(
              'Pre-fixed plexuses (where C4 contributes significantly and T1 is reduced) occur in roughly 20% of individuals, while post-fixed plexuses (where T2 contributes and C5 is reduced) occur in 5%. The posterior cord (derived from posterior divisions of all three trunks, carrying contributions from C5 to T1) gives off the upper and lower subscapular nerves, thoracodorsal nerve (supplying latissimus dorsi), axillary nerve (C5-C6), and terminates as the radial nerve (C5-T1), innervating all extensor musculature in the upper limb.',
              'প্রায় ২০ শতাংশ মানুষের ক্ষেত্রে ব্র্যাকিয়াল প্লেক্সাস C4 থেকে শুরু হয় এবং ৫ শতাংশ ক্ষেত্রে T2 পর্যন্ত বিস্তৃত থাকে। পোস্টেরিয়র কর্ডটি তিনটি ট্রাঙ্কের পেছনের শাখাগুলো থেকে গঠিত হয়ে সাবস্ক্যাপুলার, থোরাকোডর্সাল ও অ্যাক্সিলারি স্নায়ু দেয় এবং সবশেষে বিশাল রেডিয়াল স্নায়ুতে পরিণত হয়ে হাতের পেছনের সমস্ত এক্সটেনসর পেশীকে স্নায়ু সরবরাহ নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Compartmental Fascial Mechanics and Deep Forearm Spaces', 'অগ্রবাহুর ফাসিয়াল মেকানিক্স ও গভীর স্থানসমূহ'),
          paragraphs: [
            l(
              'The deep fascia of the forearm (antebrachial fascia) is an inelastic fibrous sheath that thickens distally into the palmar carpal ligament and flexor retinaculum. The anterior compartment is subdivided by an oblique fascial plane into superficial flexors (pronator teres, flexor carpi radialis, palmaris longus, flexor carpi ulnaris), an intermediate layer (flexor digitorum superficialis), and deep flexors (flexor digitorum profundus, flexor pollicis longus, pronator quadratus).',
              'অগ্রবাহুর গভীর ফাসিয়া একটি অত্যন্ত অনমনীয় তন্তুময় পর্দা যা কব্জির কাছে এসে ফ্লেক্সর রেটিনাকুলাম হিসেবে পুরু হয়ে যায়। সামনের পেশীগুলোকে তিনটি স্তরে ভাগ করা হয়: পৃষ্ঠীয় স্তর (প্রোনেটর টেরিস, কব্জি বাঁকানোর পেশী), মধ্যম স্তর (আঙুল বাঁকানোর ফ্লেক্সর সুপারফিসিয়ালিস), এবং গভীর স্তর (ফ্লেক্সর প্রোফান্ডাস, পলিসিস লংগাস ও চারকোনা প্রোনেটর কোয়াড্রাটাস পেশী)।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Palmar Fascial Spaces, Lumbrical Mechanics and the Extensor Hood', 'করতলের ফাসিয়াল ফাঁকা স্থান, লুমব্রিকাল ও এক্সটেনসর হুড বলবিদ্যা'),
          paragraphs: [
            l(
              'The palm is partitioned by vertical fascial septa into distinct surgical spaces: the thenar space, midpalmar space, and the central palmar space. Infection in the deep flexor tendon sheaths can track rapidly into these potential spaces; the synovial sheath of the little finger (radial bursa) and the thumb sheath (ulnar bursa) frequently communicate in the distal forearm at the space of Parona, permitting a devastating cross-infection known as a horseshoe abscess.',
              'হাতের তালু উল্লম্ব পর্দার মাধ্যমে থেনার স্পেস ও মিডপামার স্পেস নামক গহ্বরে বিভক্ত। আঙুলের টেন্ডনে পুঁজ বা সংক্রমণ হলে তা দ্রুত এই ফাঁকা স্থানগুলোতে ছড়িয়ে পড়তে পারে; বৃদ্ধাঙ্গুল ও কনিষ্ঠ আঙুলের টেন্ডন থলি কব্জির ওপরে প্যারোনার ফাঁকা স্থানে পরস্পর যুক্ত থাকায় এক আঙুলের ইনফেকশন পুরো কব্জিতে ছড়িয়ে ঘোড়ার নালের মতো মারাত্মক ফোঁড়া (হর্স-শু অ্যাবসেস) তৈরি করতে পারে।'
            ),
            l(
              'The lumbrical muscles exhibit a unique anatomical design: arising from the movable tendons of flexor digitorum profundus and inserting into the extensor hood expansions on the dorsum of the digits. Through this mechanical link, the lumbricals flex the metacarpophalangeal (MCP) joints while simultaneously extending the proximal and distal interphalangeal (PIP and DIP) joints, a kinematic combination essential for holding a pen, typing, and precision manual craft.',
              'লুমব্রিকাল পেশীগুলো এক অসাধারণ মেকানিক্যাল লিভারের ওপর কাজ করে: এরা নড়নক্ষম ফ্লেক্সর টেন্ডন থেকে শুরু হয়ে আঙুলের পেছনের এক্সটেনসর হুডে যুক্ত হয়। এই বিশেষ সংযোগের কারণে এরা আঙুলের গোড়ার সন্ধিকে ভাঁজ করে কিন্তু ডগার সন্ধি দুটিকে পুরোপুরি সোজা রাখে, যা কলম ধরা, টাইপিং এবং সূক্ষ্ম কাজের জন্য অপরিহার্য।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Focal Neuropathies: Spiral Groove, Cubital Tunnel and Pronator Syndromes', 'সুনির্দিষ্ট স্নায়ুর আঘাত ও সংকোচন সিন্ড্রোম'),
          paragraphs: [
            l(
              'The ulnar nerve passes behind the medial epicondyle through the cubital tunnel, roofed by the arcuate ligament of Osborne. Compression here causes cubital tunnel syndrome, marked by numbness in the fifth digit and medial half of the fourth digit, accompanied by weakness of intrinsic hand muscles. Because the long flexors to the fourth and fifth digits (FDP) are also weakened in high ulnar lesions, the clawing deformity is paradoxically milder than in distal lesions at the wrist (the "ulnar paradox").',
              'আলনার স্নায়ুটি কনুইয়ের মিডিয়াল এপিকনডাইলের পেছনের খাঁজ দিয়ে কিউবিটাল টানেল অতিক্রম করে। এখানে স্নায়ু চাপে পড়লে কনিষ্ঠ আঙুলে অবশ অনুভূতি এবং হাতের ক্ষুদ্র পেশী দুর্বল হয়ে পড়ে। কনুইয়ের উঁচুতে স্নায়ু নষ্ট হলে আঙুল বাঁকানোর গভীর পেশীও পক্ষাঘাতগ্রস্ত হয়; ফলে কব্জির নিচের আঘাতের তুলনায় এখানে আঙুলের থাবা কম বাঁকা দেখায়, যা চিকিৎসাবিজ্ঞানে "আলনার প্যারাডক্স" নামে পরিচিত।'
            ),
            l(
              'Radial nerve compression within the spiral groove of the humerus typically spares the triceps but paralyzes the extensor carpi radialis longus and brevis, producing wrist drop. The patient cannot dorsiflex the wrist or extend the metacarpophalangeal joints, profoundly weakening grip strength because the wrist cannot be stabilized in the functional 20-degree extended position required for maximal digital flexion.',
              'হিউমেরাসের স্পাইরাল খাঁজে রেডিয়াল স্নায়ু চাপে পড়লে ট্রাইসেপস স্বাভাবিক থাকলেও কব্জি তোলার পেশী অবশ হয়ে কব্জি পুরোপুরি ঝুলে পড়ে (রিস্ট ড্রপ)। রোগী কব্জি তুলতে না পারায় কোনো বস্তু শক্ত করে মুষ্টিবদ্ধ করতে পারে না, কারণ আঙুল শক্ত করে বাঁধার জন্য কব্জিকে পেছনের দিকে ২০ ডিগ্রি তুলে স্থির রাখা অত্যন্ত জরুরি।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Academic Principles of Upper Limb Mechanics', 'ঊর্ধ্ব অঙ্গ বলবিদ্যার মূল একাডেমিক নীতি'),
          paragraphs: [
            l(
              'The upper limb functions as a progressive kinematic chain wherein the proximal multi-segmented lever system positions the terminal hand effector for stereotactic interaction. Deep fascial compartmentalization segregates antagonistic functional groups, while peripheral nerve pathways follow highly conserved osteofascial grooves and fibro-osseous tunnels. Understanding these precise anatomic relationships enables exact clinical localization of peripheral nerve injuries and guiding reconstructive microsurgery.',
              'ঊর্ধ্ব অঙ্গ একটি ধাপে ধাপে বিস্তৃত গতিশীল শৃঙ্খল হিসেবে কাজ করে যার গোড়ার অংশ হাতকে উদ্দিষ্ট স্থানে পৌঁছে দেয় এবং প্রান্তীয় অংশ সূক্ষ্ম কাজ সম্পন্ন করে। ফাসিয়াল পর্দা বিপরীতমুখী পেশীগুলোকে আলাদা রাখে এবং স্নায়ুগুলো সুনির্দিষ্ট হাড় ও সুড়ঙ্গের পথ অনুসরণ করে। এই নিখুঁত শারীরস্থান জানা স্নায়ুর আঘাতের সুনির্দিষ্ট অবস্থান নির্ণয় এবং আধুনিক মাইক্রোসার্জারির অপরিহার্য ভিত্তি।'
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
          heading: l('Targeted Muscle Reinnervation (TMR) and Bionic Neural Prosthetics', 'টার্গেটেড মাসল রি-ইনারভেশন ও বায়োনিক নিউরাল প্রোস্থেটিক্স গবেষণা'),
          paragraphs: [
            l(
              'Targeted Muscle Reinnervation (TMR) is a transformative neurosurgical innovation developed to interface severed peripheral nerves with motorized bionic prosthetic limbs following proximal upper limb amputation. In high-level transhumeral or shoulder disarticulation amputees, the distal ends of the transected median, ulnar, radial, and musculocutaneous nerves are surgically coapted to denervated motor branches of local chest or residual limb muscles (e.g. segments of pectoralis major and minor).',
              'টার্গেটেড মাসল রি-ইনারভেশন (TMR) হলো একটি বৈপ্লবিক নিউরোসার্জিক্যাল পদ্ধতি যার মাধ্যমে হাত কেটে ফেলা রোগীদের বিচ্ছিন্ন স্নায়ুগুলোকে কৃত্রিম বায়োনিক হাতের সাথে যুক্ত করা হয়। কাঁধ বা বাহু থেকে হাত বিচ্ছিন্ন রোগীদের ক্ষেত্রে কাটা মিডিয়ান, আলনার ও রেডিয়াল স্নায়ুর প্রান্তগুলোকে বুকের পেক্টোরালিস পেশীর বিশেষ স্নায়ুহীন অংশে এনে নিখুঁতভাবে সেলাই করে জোড়া লাগানো হয়।'
            ),
            l(
              'Following axonal regeneration across the coaptation site over 3 to 6 months, the reinnervated muscle segments act as high-gain biological amplifiers for motor intentions. When the amputee attempts to "close the hand" or "bend the elbow," specific regional myoelectric potentials (EMG) are recorded by non-invasive surface electrodes or implanted myoelectric sensors (IMES), decoded via machine-learning pattern recognition algorithms, and translated into simultaneous multi-degree-of-freedom prosthetic movements.',
              'কয়েক মাসের মধ্যে স্নায়ু বুকের পেশীর সাথে যুক্ত হয়ে পেশীটিকে একটি জৈবিক সংকেত বিবর্ধকে রূপান্তরিত করে। রোগী মনে মনে "হাত মুষ্টিবদ্ধ করা" বা "কনুই ভাঁজ করার" ইচ্ছা করলেই বুকের পেশীতে তড়িৎ সংকেত তৈরি হয়, যা আধুনিক কৃত্রিম হাত তাৎক্ষণিকভাবে শনাক্ত করে কোনো বিলম্ব ছাড়াই রোবটিক আঙুলগুলোকে সচল করে তোলে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Microsurgical Free Vascularized Perforator Flaps in Hand Reconstruction', 'হাতের পুনর্গঠনে মাইক্রোসার্জিক্যাল পারফোরেটর ফ্ল্যাপ গবেষণা'),
          paragraphs: [
            l(
              'Severe traumatic mangling injuries of the hand with extensive soft-tissue loss, exposed flexor tendons, and osseous defects demand advanced reconstructive microsurgery. The conventional paradigm of bulky fasciocutaneous groin or latissimus dorsi flaps has been superseded by ultrathin perforator free flaps, such as the anterolateral thigh (ALT) perforator flap or the superficial circumflex iliac artery perforator (SCIP) flap.',
              'মারাত্মক দুর্ঘটনায় হাতের তালু ও আঙুলের মাংস ছিঁড়ে টেন্ডন ও হাড় উন্মুক্ত হয়ে গেলে মাইক্রোসার্জারি অপরিহার্য হয়ে ওঠে। প্রাচীনকালে শরীরের অন্য অংশ থেকে ভারী মাংস কেটে এনে লাগানোর ফলে হাতের সূক্ষ্ম নড়াচড়া নষ্ট হতো; কিন্তু বর্তমানে আধুনিক আল্ট্রাথিন পারফোরেটর ফ্ল্যাপের মাধ্যমে চামড়ার নিচের সূক্ষ্মতম রক্তনালীসহ পাতলা চামড়া এনে জোড়া লাগানো হয়।'
            ),
            l(
              'Utilizing supermicrosurgical techniques with suture sizes down to 11-0 and 12-0 under 25x operative magnification, donor arteries and venae comitantes with luminal diameters under 0.5 to 0.8 mm are anastomosed to digital arteries or the superficial palmar arch. Concurrently, sensory nerve coaptation to recipient digital nerves restores protective two-point discrimination (<6 mm), preventing secondary trophic ulceration and restoring high-dexterity manual function.',
              'অপারেটিং মাইক্রোস্কোপের নিচে ২৫ গুণ বড় করে দেখে ০.৫ মিলিমিটারের চেয়েও সরু রক্তনালীগুলোকে আঙুলের ধমনীর সাথে নিখুঁতভাবে সেলাই করে জোড়া দেওয়া হয়। একই সাথে স্নায়ুর সংযোগ ফিরিয়ে আনার মাধ্যমে রোগী পুনরায় আঙুলের ডগায় স্পর্শের অনুভূতি ফিরে পায়, যা হাতের স্বাভাবিক সূক্ষ্ম কাজ ও পেশাগত দক্ষতা পুনরুদ্ধারে বৈপ্লবিক সাফল্য এনে দিয়েছে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-step pathway tracing upper extremity regional anatomy: axillary neurovascular inflow, arm and cubital fossa conduits, forearm compartmental divisions, and carpal tunnel-hand distribution.',
      'ঊর্ধ্ব অঙ্গের আঞ্চলিক শারীরস্থানের ৪টি সহজলভ্য ধাপ: বগলের রক্তনালী ও স্নায়ুর প্রবাহ, বাহু ও কিউবিটাল ফসার পথ, অগ্রবাহুর কম্পার্টমেন্ট বিভাজন এবং কার্পাল টানেল হয়ে হাতের আঙুলে বিস্তৃতি।'
    ),
    steps: [
      l(
        '1. The axilla transmits the brachial plexus and axillary artery from the neck into the upper limb kinetic chain.',
        '১. বগল ঘাড় থেকে ব্র্যাকিয়াল প্লেক্সাস ও অ্যাক্সিলারি ধমনীকে বাহুর মূল গতিশীল শৃঙ্খলে প্রবেশ করায়।'
      ),
      l(
        '2. The arm compartments flex and extend the elbow, funneling neurovascular cables through the cubital fossa.',
        '২. বাহুর কম্পার্টমেন্ট কনুইকে ভাঁজ ও সোজা করে এবং রক্তনালী-স্নায়ুকে কিউবিটাল ফসার মধ্য দিয়ে চালিত করে।'
      ),
      l(
        '3. Forearm flexor and extensor compartments coordinate wrist manipulation and power long digital tendons.',
        '৩. অগ্রবাহুর পেশীগুলো কব্জির নড়াচড়া সমন্বয় করে এবং আঙুলের দীর্ঘ টেন্ডনগুলোকে শক্তিশালী টান দেয়।'
      ),
      l(
        '4. The carpal tunnel tightly packages flexor tendons and the median nerve, routing them to the dexterous manual digits.',
        '৪. কার্পাল টানেল ৯টি টেন্ডন ও মিডিয়ান স্নায়ুকে সুবিন্যস্তভাবে কব্জি পার করে হাতের সূক্ষ্ম আঙুলে পৌঁছে দেয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A patient presents with persistent numbness and burning tingling in the palmar aspect of the thumb, index, and middle fingers that wakes them up at night. Physical examination reveals positive Phalen and Tinel signs over the wrist. Which anatomical structure is directly compressed in this patient condition?',
      'একজন রোগী বৃদ্ধাঙ্গুল, তর্জনী ও মধ্যমার ভেতরের ত্বকে তীব্র জ্বালাপোড়া ও অবশ অনুভূতি নিয়ে আসেন যা রাতে ঘুমাতে দেয় না। কব্জির ওপর পরীক্ষায় ফ্যালেন ও টিনেল লক্ষণ পজিটিভ আসে। রোগীর কোন শারীরস্থানিক গঠনটি এখানে সরাসরি চাপে পড়েছে?'
    ),
    options: [
      l('Median nerve within the carpal tunnel', 'কার্পাল টানেলের ভেতরে মিডিয়ান স্নায়ু'),
      l('Ulnar nerve within Guyon canal', 'গিয়ন্স ক্যানালের ভেতরে আলনার স্নায়ু'),
      l('Radial nerve in the spiral groove', 'স্পাইরাল খাঁজে রেডিয়াল স্নায়ু'),
      l('Musculocutaneous nerve in the coracobrachialis', 'কোরাকোব্র্যাকিয়ালিসে মাসকুলোকিউটেনিয়াস স্নায়ু'),
    ],
    correctIndex: 0,
    explanation: l(
      'The clinical presentation describes carpal tunnel syndrome, the most common entrapment neuropathy. The median nerve is compressed beneath the flexor retinaculum within the fibro-osseous carpal tunnel, causing sensory paresthesias in its cutaneous distribution (thumb, index, middle, and radial half of ring finger) and positive Phalen/Tinel tests.',
      'এটি কার্পাল টানেল সিন্ড্রোমের ক্লাসিক্যাল লক্ষণ, যা সবচেয়ে সাধারণ স্নায়ু সংকোচন রোগ। কব্জির ফ্লেক্সর রেটিনাকুলামের নিচে মিডিয়ান স্নায়ু চেপে যাওয়ায় বৃদ্ধাঙ্গুল, তর্জনী ও মধ্যমায় অবশ অনুভূতি হয় এবং ফ্যালেন ও টিনেল পরীক্ষায় লক্ষণগুলো তীব্র হয়ে ওঠে।'
    ),
  },
}
