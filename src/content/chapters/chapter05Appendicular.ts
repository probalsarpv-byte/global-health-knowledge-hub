import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch8',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 8: The Appendicular Skeleton',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/8-introduction',
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
    id: 'netter-anatomy-8e',
    authors: 'F. H. Netter',
    title: 'Atlas of Human Anatomy, 8th edition',
    organization: 'Elsevier',
    year: 2022,
    url: 'https://www.elsevier.com/books/atlas-of-human-anatomy/netter/978-0-323-68042-4',
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

export const chapter05AppendicularLesson: LessonTopic = {
  id: 'topic.anatomy.skeletal-appendicular',
  slug: 'skeletal-appendicular',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('05 · Appendicular Skeleton', '০৫ · উপাঙ্গীয় কঙ্কাল'),
  summary: l(
    'A comprehensive osteological and biomechanical study of the 126 appendicular bones: the pectoral girdle, upper extremity levers, pelvic girdle, lower extremity weight-bearing columns, sexual dimorphism, and clinical traumatology.',
    'উপাঙ্গীয় কঙ্কালের ১২৬টি অস্থির বিশদ অস্থিবিদ্যা ও বলবিদ্যাভিত্তিক অধ্যয়ন: বক্ষ বন্ধনী, ঊর্ধ্ববাহুর লিভার, শ্রোণী বন্ধনী, নিম্নবাহুর ভারবাহী স্তম্ভ, লিঙ্গভিত্তিক পার্থক্য এবং ক্লিনিক্যাল ট্রমাটোলজি।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Identify and categorize the 126 appendicular bones into the pectoral girdle (4), upper limbs (60), pelvic girdle (2), and lower limbs (60).',
      'উপাঙ্গীয় কঙ্কালের ১২৬টি অস্থিকে বক্ষ বন্ধনী (৪), ঊর্ধ্ব অঙ্গ (৬০), শ্রোণী বন্ধনী (২) এবং নিম্ন অঙ্গ (৬০)—এই চারটি প্রধান ভাগে সঠিকভাবে শনাক্ত ও শ্রেণিবিন্যাস করতে পারা।'
    ),
    l(
      'Contrast the hypermobility of the pectoral girdle with the weight-bearing stability and structural adaptations of the pelvic girdle and bipedal lower limb.',
      'বক্ষ বন্ধনীর চরম গতিশীলতার সাথে শ্রোণী বন্ধনী ও দ্বিপদ চলনের জন্য অভিযোজিত নিম্ন অঙ্গের ভারবহনকারী স্থায়িত্বের গঠনগত পার্থক্য তুলনা করতে পারা।'
    ),
    l(
      'Evaluate clinical fracture mechanics and vulnerable vascular supplies across the clavicle, scaphoid bone, femoral neck, and distal radius.',
      'ক্লাভিকল, স্ক্যাফয়েড অস্থি, ফিমারের গ্রীবা এবং রেডিয়াসের দূরবর্তী প্রান্তের ফ্র্যাকচার মেকানিক্স এবং রক্তসরবরাহের ঝুঁকি ক্লিনিক্যালভাবে মূল্যায়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.skeletal-axial'],
  relatedTopicIds: ['topic.anatomy.cells-tissues'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch8', 'moore-anatomy-9e'],
    structure: ['openstax-ap2e-ch8', 'grays-anatomy-42e'],
    mechanism: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    integration: ['openstax-ap2e-ch8', 'netter-anatomy-8e'],
    practice: ['moore-anatomy-9e', 'guyton-hall-14e'],
    takeaways: ['openstax-ap2e-ch8', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Appendicular Organization and Mobility', 'ভূমিকা: উপাঙ্গীয় কঙ্কালের সংগঠন ও গতিশীলতা'), sectionId: 'introduction' },
      { id: 'sec-upper', label: l('Pectoral Girdle and Upper Extremity Levers', 'বক্ষ বন্ধনী ও ঊর্ধ্ব অঙ্গের অস্থিকাঠামো'), sectionId: 'structure' },
      { id: 'sec-pelvis', label: l('Pelvic Girdle Architecture and Sexual Dimorphism', 'শ্রোণী বন্ধনীর গঠন ও যৌন দ্বিরূপতা'), sectionId: 'mechanism' },
      { id: 'sec-lower', label: l('Lower Extremity Weight-Bearing and Locomotion', 'নিম্ন অঙ্গের ভারবহন ও চলন কৌশল'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Traumatology: Scaphoid, Colles and Hip Fractures', 'ক্লিনিক্যাল ট্রমাটোলজি: স্ক্যাফয়েড, কোলেস ও নিতম্ব ফ্র্যাকচার'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary and Appendicular Osteology Glossary', 'সারসংক্ষেপ ও উপাঙ্গীয় অস্থি শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Scaphoid Avascular Necrosis', 'স্ক্যাফয়েডের অ্যাভাস্কুলার নেক্রোসিস'),
        definition: l(
          'Ischemic bone death occurring in the proximal pole of the scaphoid following a waist fracture, caused by retrograde blood supply entering exclusively from the distal tubercle.',
          'স্ক্যাফয়েডের কোমরে ফ্র্যাকচারের ফলে প্রক্সিমাল প্রান্তে রক্তসরবরাহ বন্ধ হয়ে অস্থির টিস্যু ধ্বংস হওয়া, কারণ রক্ত কেবল দূরবর্তী টিউবার্কল দিয়ে বিপরীতমুখী প্রবেশ করে।'
        ),
      },
      {
        term: l('Colles Fracture', 'কোলেস ফ্র্যাকচার'),
        definition: l(
          'A fracture of the distal radius within 2 cm of the articular surface, typically sustained from falling onto an outstretched hand (FOOSH), producing a characteristic "dinner-fork" dorsal displacement.',
          'প্রসারিত হাতের ওপর পড়ে যাওয়ার কারণে রেডিয়াসের দূরবর্তী প্রান্তে সন্ধির ২ সেন্টিমিটারের মধ্যে সংঘটিত ফ্র্যাকচার, যা পেছনের দিকে সরে গিয়ে কাঁটাচামচের মতো বাঁকা রূপ ধারণ করে।'
        ),
      },
      {
        term: l('Pelvic Brim & True Pelvis', 'শ্রোণী কিনারা ও প্রকৃত শ্রোণী (True Pelvis)'),
        definition: l(
          'The continuous oblique anatomical ring formed by the promontory, arcuate line, pecten pubis, and pubic crest, dividing the greater (false) pelvis superiorly from the lesser (true) birth canal inferiorly.',
          'স্যাক্রাল প্রমন্টরি, আর্কুয়েট রেখা এবং পিউবিক ক্রেস্ট দ্বারা গঠিত বৃত্তাকার অস্থির কিনারা, যা ওপরের বৃহত্তর বা অপ্রকৃত শ্রোণী থেকে নিচের প্রসব নালীযুক্ত প্রকৃত শ্রোণীকে পৃথক করে।'
        ),
      },
      {
        term: l('Femoral Neck Angle of Inclination', 'ফিমারের গ্রীবার হেলে পড়ার কোণ (Angle of Inclination)'),
        definition: l(
          'The frontal-plane angle between the femoral neck axis and the femoral shaft (normally 120°–130° in adults); values below 120° define coxa vara, while values above 135° define coxa valga.',
          'ফিমারের গ্রীবা ও এর মূল দণ্ডের মধ্যবর্তী কোণ (প্রাপ্তবয়স্কদের মধ্যে সাধারণত ১২০° থেকে ১৩০°); ১২০ ডিগ্রির কম হলে কক্সা ভারা এবং ১৩৫ ডিগ্রির বেশি হলে কক্সা ভালগা বলে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Analyzing Force Dissipation in Upper vs. Lower Limb Loading', 'ঊর্ধ্ব বনাম নিম্ন অঙ্গে যান্ত্রিক বলের বিস্তরণ বিশ্লেষণ'),
        steps: [
          l('Step 1: In the upper limb, impact forces pass from hand to radius via the radiocarpal joint, through the interosseous membrane to the ulna, through the humerus, and across the clavicle to the axial sternum via the sternoclavicular joint.', 'ধাপ ১: ঊর্ধ্ব অঙ্গে আঘাতের চাপ হাত থেকে রেডিওকার্পাল সন্ধি হয়ে রেডিয়াসে যায়, সেখান থেকে ইন্টারঅসিয়াস মেমব্রেন দিয়ে আলনায়, হিউমেরাস হয়ে ক্লাভিকলের মাধ্যমে স্টার্নোক্ল্যাভিকুলার সন্ধিতে পৌঁছায়।'),
          l('Step 2: In the lower limb, gravity and ground reaction forces transmit directly from the femoral head through the trabecular system of the femoral neck into the shaft, through the tibial condyles into the talus, and dissipate across the arches of the foot.', 'ধাপ ২: নিম্ন অঙ্গে দেহের সম্পূর্ণ ভর ফিমারের মাথা থেকে গ্রীবার ট্র্যাবেকুলার জালিকা হয়ে মূল দণ্ডে যায়, সেখান থেকে টিবিয়া হয়ে গোড়ালির ট্যালাস এবং পায়ের ধনুকাকৃতি আর্চে ছড়িয়ে পড়ে।'),
          l('Step 3: Contrast mobility versus stability: the scapulothoracic mechanism maximizes range of motion at the expense of osseous constraint, whereas the deep acetabular labrum maximizes structural containment to endure multi-body-weight forces.', 'ধাপ ৩: গতিশীলতা বনাম স্থায়িত্বের তুলনা: স্ক্যাপুলা-বক্ষ প্রাচীর ব্যবস্থা হাড়ের বন্ধন কমিয়ে চলনক্ষমতা বাড়ায়, পক্ষান্তরে গভীর অ্যাসিটাবুলাম দেহের ওজনের কয়েকগুণ চাপ সামলানোর জন্য সর্বোচ্চ স্থায়িত্ব নিশ্চিত করে।'),
        ],
        conclusion: l('The upper limb is optimized for versatile kinetic manipulation and spatial reach, whereas the lower limb is structurally specialized for shock attenuation and stable bipedal locomotion.', 'ঊর্ধ্ব অঙ্গ বিভিন্ন দিকে বহুবিধ সূক্ষ্ম কাজ ও নাগালের জন্য অভিযোজিত, অন্যদিকে নিম্ন অঙ্গ যান্ত্রিক ঝাঁকুনি শোষণ ও অবিচল দ্বিপদ চলনের জন্য বিশেষভাবে গঠিত।'),
      },
    ],
    checkpoints: [
      {
        question: l('Why does a fracture of the clavicle most frequently occur at the junction of its middle and lateral thirds?', 'ক্লাভিকল হাড়ের ফ্র্যাকচার কেন প্রায়শই এর মধ্যম ও বাইরের এক-তৃতীয়াংশের সংযোগস্থলে ঘটে?'),
        answer: l('Because this junction represents the structural transition point between the convex anterior medial curvature and the concave anterior lateral curvature, where cross-sectional geometry changes from rounded to flattened, creating a mechanical stress concentration point.', 'কারণ এই সংযোগস্থলটি হলো ক্লাভিকলের উত্তল ভেতরের বাঁক এবং অবতল বাইরের বাঁকের মধ্যবর্তী পরিবর্তনশীল অঞ্চল, যেখানে অস্থির গঠন গোলাকার থেকে চ্যাপ্টায় রূপান্তরিত হয় এবং যান্ত্রিক চাপের কেন্দ্রবিন্দু তৈরি হয়।'),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch05-appendicular-diagram',
    title: l('Interactive Appendicular Skeleton Modular Anatomy', 'ইন্টারেক্টিভ উপাঙ্গীয় কঙ্কালের মডুলার অ্যানাটমি'),
    description: l(
      'Inspect the structural divisions of the appendicular skeleton: pectoral girdle, upper limb levers, pelvic girdle, and lower limb weight-bearing columns.',
      'উপাঙ্গীয় কঙ্কালের চারটি প্রধান গঠনগত বিভাগ পরীক্ষা করুন: বক্ষ বন্ধনী, ঊর্ধ্ববাহুর লিভার, শ্রোণী বন্ধনী এবং নিম্নবাহুর ভারবাহী স্তম্ভ।'
    ),
    disclaimer: l(
      'Anatomical schematic: select an appendicular division to inspect its bone count, articulating joints, functional adaptations, and clinical fracture vulnerabilities.',
      'শারীরস্থানিক চিত্র: অস্থির সংখ্যা, সন্ধির সংযোগ, কাজের উপযোগিতা এবং ফ্র্যাকচারের ঝুঁকি দেখতে যেকোনো উপাঙ্গীয় বিভাগ নির্বাচন করুন।'
    ),
    svgType: 'appendicular-skeleton',
    items: [
      {
        id: 'pectoral-girdle',
        label: l('Pectoral Girdle & Brachium', 'বক্ষ বন্ধনী ও হিউমেরাস'),
        description: l(
          'Composed of the clavicle and scapula paired on each side, anchoring the humerus. Attached to the axial skeleton solely at the small synovial sternoclavicular joint, providing exceptional 3D circumduction.',
          'প্রতি পাশে ক্লাভিকল ও স্ক্যাপুলা নিয়ে গঠিত, যা হিউমেরাসকে যুক্ত করে। অক্ষীয় কঙ্কালের সাথে এটি কেবল ক্ষুদ্র স্টার্নোক্ল্যাভিকুলার সন্ধি দিয়ে যুক্ত থাকে, যা বাহুকে যেকোনো দিকে ঘোরার চরম স্বাধীনতা দেয়।'
        ),
        details: l(
          'Includes the clavicle (sternal & acromial ends), scapula (spine, acromion, coracoid process, glenoid cavity), and humerus (greater/lesser tubercles, surgical neck, deltoid tuberosity).',
          'অন্তর্ভুক্ত: ক্লাভিকল, স্ক্যাপুলা (অ্যাক্রোমিয়ন, কোরাকয়েড ও গ্লেনয়েড গহ্বর) এবং হিউমেরাস (গ্রেটার/লেসার টিউবার্কল, সার্জিক্যাল নেক)।'
        ),
        sectionId: 'structure',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'antebrachium-hand',
        label: l('Antebrachium & Hand Skeleton', 'অগ্রবাহু ও হাতের অস্থিসমূহ'),
        description: l(
          'Comprises the lateral radius and medial ulna connected by the syndesmotic interosseous membrane, articulates distally with 8 carpal bones, 5 metacarpals, and 14 phalanges.',
          'পার্শ্বীয় রেডিয়াস ও ভেতরের আলনা নিয়ে গঠিত যা ইন্টারঅসিয়াস মেমব্রেন দ্বারা যুক্ত; দূরবর্তী প্রান্তে ৮টি কার্পাল, ৫টি মেটাকার্পাল এবং ১৪টি ফালাঞ্জেসের সাথে যুক্ত।'
        ),
        details: l(
          'Carpal bones: Scaphoid, Lunate, Triquetrum, Pisiform (proximal row); Trapezium, Trapezoid, Capitate, Hamate (distal row). Radius pivots around the ulna for pronation and supination.',
          'কার্পাল অস্থি: স্ক্যাফয়েড, লুনেট, ট্রাইকোয়েট্রাম, পিসিফর্ম; ট্রাপিজিয়াম, ট্রাপিজয়েড, ক্যাপিটেট ও হ্যামেট। সুপিনেশন ও প্রোনেশনের জন্য রেডিয়াস আলনার ওপর ঘোরে।'
        ),
        sectionId: 'structure',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'pelvic-girdle',
        label: l('Pelvic Girdle & Femur', 'শ্রোণী বন্ধনী ও ফিমার'),
        description: l(
          'Rigid pelvic ring formed by the paired hip bones (os coxae: fused ilium, ischium, and pubis) articulating with the axial sacrum, providing the deep acetabular socket for the massive femoral head.',
          'ইলিয়াম, ইশ্চিয়াম ও পিউবিস সংযুক্ত হয়ে গঠিত শক্তিশালী শ্রোণী বন্ধনী যা স্যাক্রামের সাথে যুক্ত হয়ে ফিমারের গোল মাথার জন্য গভীর অ্যাসিটাবুলাম খাঁজ তৈরি করে।'
        ),
        details: l(
          'Adapted for supporting upright posture. Exhibits marked sexual dimorphism (wider subpubic angle >80° in females vs <70° in males). Femur is the longest, strongest bone in the body.',
          'খাড়াভাবে দাঁড়ানোর জন্য অভিযোজিত। এতে স্পষ্ট লিঙ্গীয় পার্থক্য দেখা যায় (নারীদের সাবপিউবিক কোণ ৮০ ডিগ্রির বেশি)। ফিমার দেহের দীর্ঘতম ও মজবুততম অস্থি।'
        ),
        sectionId: 'mechanism',
        color: '#fed7aa',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'crural-pes',
        label: l('Crural Skeleton & Pes (Foot)', 'জঙ্ঘা ও পায়ের পাতার অস্থিসমূহ'),
        description: l(
          'Includes the weight-bearing medial tibia, lateral non-weight-bearing fibula, sesamoid patella, 7 tarsals, 5 metatarsals, and 14 phalanges, arranged in dynamic elastic shock-absorbing arches.',
          'দেহের ভর বহনকারী টিবিয়া, পেশী সংযুক্তির ফিবুলা, সিসাময়েড প্যাটেল্লা, ৭টি টার্সাল, ৫টি মেটাটার্সাল এবং ১৪টি ফালাঞ্জেস নিয়ে গঠিত যা স্প্রিংয়ের মতো ধনুকাকৃতি আর্চ তৈরি করে।'
        ),
        details: l(
          'Tarsal bones: Talus (distributes weight), Calcaneus (heel lever), Navicular, Cuboid, and 3 Cuneiforms. Longitudinal and transverse arches distribute impact during running and gait.',
          'টার্সাল অস্থি: ট্যালাস (ওজন বণ্টন করে), ক্যালকেনিয়াস (গোড়ালি), নেভিকুলার, কিউবয়েড ও ৩টি কুনিফর্ম। লম্বালম্বি ও আড়াআড়ি আর্চ দৌড়ানোর সময় অভিঘাত কমায়।'
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
          heading: l('Introduction to the Appendicular Skeleton', 'উপাঙ্গীয় কঙ্কালের পরিচিতি ও বিন্যাস'),
          paragraphs: [
            l(
              'The human skeleton is divided into the central axial skeleton (80 bones) and the appendicular skeleton, which consists of 126 bones specifically arranged into paired limbs and their anchoring girdles. While the axial skeleton is specialized for rigid protection of vital neurovisceral cavities, the appendicular skeleton is designed for interaction with the external environment: grasping, manipulation, locomotion, and upright posture.',
              'মানবদেহের কঙ্কাল কেন্দ্রীয় অক্ষীয় কঙ্কাল (৮০টি অস্থি) এবং উপাঙ্গীয় কঙ্কালে বিভক্ত, যা ১২৬টি অস্থি নিয়ে জোড়ায় জোড়ায় হাত-পা এবং এদের ধারক বন্ধনীতে সাজানো থাকে। অক্ষীয় কঙ্কাল মস্তিষ্করূপ কোমল ভিসেরাল অঙ্গ সুরক্ষায় নিয়োজিত হলেও উপাঙ্গীয় কঙ্কালের উদ্দেশ্য হলো পরিবেশের সাথে সংযোগ রক্ষা করা: হাত দিয়ে ধরা, কাজ করা, হাঁটাচলা এবং সোজা হয়ে দাঁড়িয়ে থাকা।'
            ),
            l(
              'The upper limb is anchored to the axial skeleton by the pectoral girdle (clavicle and scapula), which prioritizes maximal multidirectional mobility over stability. Conversely, the lower limb is anchored by the rigid pelvic girdle (hip bones), which prioritizes strength, stability, and effective transmission of body weight to the ground during bipedal standing and locomotion.',
              'ঊর্ধ্ব অঙ্গটি বক্ষ বন্ধনীর (ক্লাভিকল ও স্ক্যাপুলা) মাধ্যমে অক্ষীয় কঙ্কালের সাথে যুক্ত থাকে, যা স্থায়িত্বের চেয়ে বহুদিকে স্বাধীন চলনক্ষমতাকে অগ্রাধিকার দেয়। পক্ষান্তরে নিম্ন অঙ্গটি দৃঢ় শ্রোণী বন্ধনীর মাধ্যমে যুক্ত থাকে, যা দ্বিপদী চলনে দেহের ভার সফলভাবে মাটিতে স্থানান্তরের জন্য সর্বোচ্চ শক্তি ও স্থায়িত্ব নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Pectoral Girdle and Upper Extremity Osteology', 'বক্ষ বন্ধনী ও ঊর্ধ্ব অঙ্গের অস্থিকাঠামো'),
          paragraphs: [
            l(
              'The pectoral girdle consists of two bones on each side: the S-shaped clavicle and the triangular flat scapula. The clavicle is an anterior strut holding the upper limb away from the thoracic wall to allow free movement; it articulates medially with the manubrium of the sternum at the sternoclavicular joint and laterally with the acromion of the scapula at the acromioclavicular joint. The scapula glides across the posterior thoracic wall over a cushion of muscular layers (the scapulothoracic physiological mechanism).',
              'বক্ষ বন্ধনী প্রতি পাশে দুটি অস্থি নিয়ে গঠিত: এস-আকৃতির ক্লাভিকল এবং চ্যাপ্টা ত্রিকোণাকার স্ক্যাপুলা। ক্লাভিকল একটি বিমের মতো বাহুকে বক্ষপ্রাচীর থেকে দূরে রাখে যাতে হাত স্বাধীনভাবে নড়াচড়া করতে পারে; এটি ভেতরের দিকে স্টার্নামের সাথে এবং বাইরের দিকে স্ক্যাপুলার অ্যাক্রোমিয়নের সাথে যুক্ত। স্ক্যাপুলা পেশীর আবরণের ওপর দিয়ে পেছনের পাঁজরের প্রাচীরে অবাধে বিচরণ করে।'
            ),
            l(
              'The upper limb contains 30 bones: 1 humerus in the arm, 2 bones in the forearm (lateral radius and medial ulna), 8 carpal bones in the wrist arranged in two rows, 5 metacarpal bones in the palm, and 14 phalanges in the digits (2 in the pollex or thumb, and 3 in each of the remaining four fingers). The head of the humerus articulates with the shallow glenoid cavity of the scapula, while the distal forearm bones permit pronation and supination as the radius crosses over the stationary ulna.',
              'প্রতিটি ঊর্ধ্ব অঙ্গে ৩০টি অস্থি থাকে: বাহুতে ১টি হিউমেরাস, অগ্রবাহুতে ২টি (বাইরে রেডিয়াস ও ভেতরে আলনা), কব্জিতে দুই সারিতে সাজানো ৮টি কার্পাল, করতলে ৫টি মেটাকার্পাল এবং আঙুলে ১৪টি ফালাঞ্জেস (বৃদ্ধাঙ্গুলে ২টি এবং অন্য চারটিতে ৩টি করে)। হিউমেরাসের গোল মাথা স্ক্যাপুলার অগভীর গ্লেনয়েড গহ্বরে বসে, এবং অগ্রবাহুর রেডিয়াস আলনার ওপর মোচড় দিয়ে সুপিনেশন ও প্রোনেশন ঘটায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Pelvic Girdle Architecture and Sexual Dimorphism', 'শ্রোণী বন্ধনীর গঠন ও যৌন দ্বিরূপতা'),
          paragraphs: [
            l(
              'The pelvic girdle consists of a single pair of hip bones (os coxae), which articulate anteriorly with each other at the fibrocartilaginous pubic symphysis and posteriorly with the sacrum at the sacroiliac joints. Each hip bone is formed by the embryonic fusion of three distinct bones: the superior flaring ilium, the posteroinferior ischium (on which one sits), and the anteroinferior pubis. All three bones fuse at the triradiate cartilage within the deep cup-shaped acetabulum.',
              'শ্রোণী বন্ধনী এক জোড়া হিপ বোন নিয়ে গঠিত, যা সামনে পিউবিক সিমফাইসিসে পরস্পরের সাথে এবং পেছনে স্যাক্রোইলিয়াক সন্ধিতে স্যাক্রামের সাথে যুক্ত হয়ে একটি মজবুত আংটি তৈরি করে। প্রতিটি হিপ বোন তিনটি অস্থির সংমিশ্রণে গঠিত: ওপরের প্রশস্ত ইলিয়াম, পেছনের নিচের ইশ্চিয়াম এবং সামনের পিউবিস। এই তিনটি অস্থি গভীর বাটির মতো অ্যাসিটাবুলামের ভেতরে ত্রিমুখী তরুণাস্থির মাধ্যমে একীভূত হয়।'
            ),
            l(
              'The bony pelvis exhibits pronounced sexual dimorphism related to childbirth adaptations. The female pelvis is typically broader, lighter, and shallower than the male pelvis. The female pelvic inlet is transversely oval or rounded with a wider pelvic brim, the pubic arch forms an obtuse angle greater than 80 degrees (compared to an acute angle of less than 70 degrees in males), and the coccyx is more flexible and oriented posteriorly.',
              'মানবদেহে সন্তান প্রসবের সুবিধার জন্য শ্রোণী বন্ধনীতে স্পষ্ট লিঙ্গভিত্তিক পার্থক্য বিদ্যমান। নারী শ্রোণী পুরুষ শ্রোণীর তুলনায় প্রশস্ত, হালকা এবং অগভীর হয়। নারীদের পেলভিক ইনলেট ডিম্বাকার বা গোলাকার, পিউবিক আর্চ ৮০ ডিগ্রির চেয়ে বেশি প্রশস্ত কোণ তৈরি করে (পুরুষদের ক্ষেত্রে ৭০ ডিগ্রির কম সূক্ষ্ম কোণ), এবং কক্কিক্স পেছনের দিকে সরে যেতে পারে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Lower Extremity Weight-Bearing and Locomotion', 'নিম্ন অঙ্গের ভারবহন ও চলন কৌশল'),
          paragraphs: [
            l(
              'Each lower limb contains 30 bones: 1 femur in the thigh, 1 sesamoid patella at the knee, 2 bones in the leg (medial weight-bearing tibia and lateral fibula), 7 tarsal bones in the ankle, 5 metatarsal bones in the metatarsus, and 14 phalanges in the toes. The femur is the longest, heaviest, and strongest bone in the human body, transmitting total upper body weight through its angled neck and shafts to the massive tibial plateau.',
              'প্রতিটি নিম্ন অঙ্গে ৩০টি অস্থি থাকে: উরুতে ১টি ফিমার, হাঁটুতে ১টি সিসাময়েড প্যাটেল্লা, জঙ্ঘায় ২টি (ভেতরে ওজন বহনকারী টিবিয়া এবং বাইরে ফিবুলা), গোড়ালিতে ৭টি টার্সাল, পদতলে ৫টি মেটাটার্সাল এবং আঙুলে ১৪টি ফালাঞ্জেস। ফিমার মানবদেহের দীর্ঘতম ও সবচেয়ে মজবুত অস্থি, যা দেহের সম্পূর্ণ ভরকে তার বাঁকানো গ্রীবা দিয়ে টিবিয়াল মালভূমির ওপর নিখুঁতভাবে ছড়িয়ে দেয়।'
            ),
            l(
              'The bones of the foot are arranged into three dynamic arches: the medial longitudinal arch, lateral longitudinal arch, and transverse arch. Supported by the plantar aponeurosis and strong ligaments (e.g. spring ligament), these arches act as an elastic mechanical spring during gait, flattening under weight-bearing to absorb landing shocks and recoiling during toe-off to propel the body forward.',
              'পায়ের পাতার অস্থিগুলো তিনটি আর্চ বা ধনুকাকার খাঁজে বিন্যস্ত: ভেতরের ও বাইরের অনুদৈর্ঘ্য আর্চ এবং আড়াআড়ি আর্চ। প্ল্যান্টার অ্যাপোনিউরোসিস ও স্প্রিং লিগামেন্ট দ্বারা সুরক্ষিত এই আর্চগুলো হাঁটার সময় স্থিতিস্থাপক স্প্রিংয়ের মতো কাজ করে; পায়ের ওপর ভর পড়লে এটি অভিঘাত শোষণ করতে সামান্য চ্যাপ্টা হয় এবং পা তোলার সময় পুনরায় সংকুচিত হয়ে দেহকে সামনে ঠেলে দেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Traumatology of the Appendicular Skeleton', 'উপাঙ্গীয় কঙ্কালের ক্লিনিক্যাল ট্রমাটোলজি'),
          paragraphs: [
            l(
              'Traumatic injuries to appendicular bones correlate directly with structural leverage and vascular anatomy. Fractures of the clavicle typically occur at the junction of its middle and lateral thirds after falling on an outstretched shoulder. In the wrist, a fall on an outstretched hand (FOOSH) most commonly causes a Colles fracture of the distal radius or a fracture of the scaphoid bone within the anatomical snuffbox.',
              'উপাঙ্গীয় অস্থির আঘাত সরাসরি এদের যান্ত্রিক অবস্থান এবং রক্তসরবরাহের ওপর নির্ভর করে। কাঁধে ভর দিয়ে পড়ে গেলে প্রায়শই ক্লাভিকলের মধ্যম ও বাইরের সংযোগস্থলে ফ্র্যাকচার ঘটে। প্রসারিত হাতের তালুতে ভর দিয়ে পড়ে গেলে রেডিয়াসের দূরবর্তী প্রান্তে কোলেস ফ্র্যাকচার অথবা কব্জির অ্যানাটমিক্যাল স্নাফবক্সের ভেতরে থাকা স্ক্যাফয়েড অস্থি ভেঙে যায়।'
            ),
            l(
              'In geriatric patients with osteoporosis, minor falls frequently cause fractures of the femoral neck. Because the medial and lateral circumflex femoral arteries provide the primary blood supply to the femoral head through retinacular branches along the neck, displaced intracapsular fractures can disrupt this arterial ring, precipitating avascular necrosis of the femoral head and necessitating hemiarthroplasty or total hip replacement.',
              'অস্টিওপোরোসিসযুক্ত প্রবীণ ব্যক্তিদের মধ্যে সামান্য পতনেও ফিমারের গ্রীবা ভেঙে যাওয়ার ঘটনা ঘটে। মিডিয়াল ও ল্যাটেরাল সারকামফ্লেক্স ফিমোরাল ধমনী এই গ্রীবা বেয়ে ফিমারের মাথায় রক্ত পাঠায়; তাই এই হাড় ভেঙে স্থানচ্যুত হলে মাথায় রক্তপ্রবাহ বন্ধ হয়ে অ্যাভাস্কুলার নেক্রোসিস ঘটে, যার ফলে হিপ জয়েন্ট প্রতিস্থাপন অস্ত্রোপচার আবশ্যক হয়ে পড়ে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Principles and Appendicular Osteology Glossary', 'সারসংক্ষেপ ও উপাঙ্গীয় অস্থি শব্দকোষ'),
          paragraphs: [
            l(
              'The 126 bones of the appendicular skeleton reflect evolutionary specialization for bipedal life. The mobile, lightly tethered pectoral girdle and dexterous hand enable sophisticated tool handling and spatial exploration, whereas the heavy, locked pelvic girdle, columnar femur, and arched foot provide resilient shock attenuation and efficient bipedal standing. Recognizing these functional dichotomies explains why the shoulder dislocates readily while the hip fractures under axial loads.',
              'উপাঙ্গীয় কঙ্কালের ১২৬টি অস্থি দ্বিপদী মানবজীবনের জন্য বিবর্তনীয় অভিযোজনের নিখুঁত নিদর্শন। হালকা বন্ধনীযুক্ত কাঁধ ও নিপুণ হাত পরিবেশের সাথে কাজ করতে ব্যবহৃত হয়, অন্যদিকে দৃঢ় শ্রোণী বন্ধনী, মজবুত ফিমার এবং ধনুকাকার পদতল ঝাঁকুনি শোষণ ও খাড়া দাঁড়াতে সাহায্য করে। এই গঠনগত পার্থক্যের কারণেই কাঁধ সহজে স্থানচ্যুত হয়, পক্ষান্তরে নিতম্বের হাড় সরাসরি চাপে ভেঙে যায়।'
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
          heading: l('Morphometric and Evolutionary Foundations of the Limbs', 'অঙ্গপ্রত্যঙ্গের মরফোমেট্রিক ও বিবর্তনীয় ভিত্তি'),
          paragraphs: [
            l(
              'Comparative vertebrate morphology traces the appendicular skeleton from paired gnathostome fin girdles to the chiridium (pentadactyl limb). The transformation of ancestral sprawling tetrapod posture into parasagittal bipedal human posture required radical repositioning of the pelvic girdle: the iliac blades flared laterally to realign the gluteus medius and minimus as hip abductors rather than hip extensors, preventing contralateral pelvic drop during the single-leg stance phase of gait.',
              'মেরুদণ্ডী প্রাণীদের তুলনামূলক অঙ্গসংস্থানবিদ্যায় প্রাচীন পাখনার বন্ধনী থেকে পাঁচ আঙুলবিশিষ্ট আধুনিক অঙ্গের রূপান্তর দেখা যায়। চতুষ্পদ থেকে মানুষের দ্বিপদী খাড়া চলনে রূপান্তরের জন্য শ্রোণী বন্ধনীর গঠনে আমূল পরিবর্তন ঘটে: ইলিয়ামের ডানাগুলো দুই পাশে ছড়িয়ে গিয়ে গ্লুটিয়াস মিডিয়াস ও মিনিমাস পেশীকে পেছনের বদলে পাশে সরিয়ে দেয়, যা হাঁটার সময় এক পায়ে ভর দিলে বিপরীত পাশের শ্রোণী হেলে পড়া সফলভাবে ঠেকায়।'
            ),
            l(
              'The Upper and Lower Limb buds develop during the fourth embryonic week through coordinated signaling by the apical ectodermal ridge (AER, governed by FGF signaling for proximal-distal outgrowth) and the zone of polarizing activity (ZPA, governed by Sonic Hedgehog for anterior-posterior patterning). Failure or disruption of these morphological gradients produces amelia, phocomelia, or polydactyly.',
              'ভ্রূণের চতুর্থ সপ্তাহে অ্যাপিকাল এক্টোডার্মাল রিজ (AER, যা FGF সংকেতের মাধ্যমে অঙ্গের দৈর্ঘ্য বাড়ায়) এবং জোন অব পোলারাইজিং অ্যাক্টিভিটি (ZPA, যা সোনিক হেজহগ প্রোটিনের মাধ্যমে আঙুলের সামনের ও পেছনের দিক ঠিক করে)-র মাধ্যমে হাত ও পায়ের কুঁড়ি বিকশিত হয়। এই সিগন্যালিংয়ে সামান্য বাধা এলে অঙ্গহীনতা (অ্যামেলিয়া) বা অতিরিক্ত আঙুল (পলিড্যাক্টাইলি) সৃষ্টি হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Kinematic Coupling of the Forearm and Wrist Complex', 'অগ্রবাহু ও কব্জির গতিশীল বায়োমেকানিক্স'),
          paragraphs: [
            l(
              'The forearm functions as a bicentric kinematic unit formed by the proximal and distal radioulnar joints linked by the syndesmotic interosseous membrane. The central band of the interosseous membrane is directed obliquely downward from radius to ulna; during axial compression (e.g., carrying load or pushing), forces transmitted from the hand to the broad distal radius are transferred medially to the robust proximal ulna, which articulates securely with the humerus at the trochlear notch.',
              'অগ্রবাহুটি প্রক্সিমাল ও ডিস্টাল রেডিওআলনার সন্ধি এবং এদের সংযোগকারী ইন্টারঅসিয়াস মেমব্রেন নিয়ে গঠিত একটি দ্বি-কেন্দ্রিক বায়োমেকানিক্যাল একক হিসেবে কাজ করে। এই মেমব্রেনের কেন্দ্রীয় তন্তুগুলো রেডিয়াস থেকে আলনার দিকে তীর্যকভাবে নেমে আসে; ফলে হাতের তালু দিয়ে কোনো ভার ঠেললে রেডিয়াসে আসা চাপ সহজেই আলনায় চলে যায়, যা হিউমেরাসের ট্রকলিয়ার খাঁজে মজবুতভাবে সংযুক্ত থাকে।'
            ),
            l(
              'The carpus comprises two transverse rows acting as an intercalated kinetic segment. The scaphoid bridges both the proximal row (scaphoid, lunate, triquetrum) and the distal row (trapezium, trapezoid, capitate, hamate). During wrist extension and radial deviation, the scaphoid flexes palmarward while the capitate seats into the concavity of the lunate, forming a rigid closed-pack conformation for gripping.',
              'কব্জির কার্পাল অস্থিগুলো দুটি সারিতে বিভক্ত হয়ে একটি জটিল ভারসাম্য রক্ষা করে। স্ক্যাফয়েড অস্থিটি প্রক্সিমাল ও ডিস্টাল সারির মাঝে সেতুর মতো কাজ করে। কব্জি পেছনের দিকে বাঁকালে স্ক্যাফয়েড কিছুটা সামনের দিকে ঝুঁকে যায় এবং ক্যাপিটেট অস্থি লুনেটের খাঁজে দৃঢ়ভাবে আটকে গিয়ে হাত দিয়ে কোনো বস্তু শক্ত করে ধরার জন্য মজবুত ভিত্তি প্রদান করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Pelvic Obstetric Diameters and Biomechanical Vectors', 'শ্রোণীর প্রসবকালীন ব্যাস ও বলবিদ্যার ভেক্টর'),
          paragraphs: [
            l(
              'In clinical obstetrics and skeletal pelvimetry, the true pelvis is defined by three critical planes: the pelvic inlet (superior aperture), midpelvis (plane of least pelvic dimensions), and pelvic outlet (inferior aperture). The true conjugate diameter (anteroposterior diameter from the upper margin of the pubic symphysis to the sacral promontory) normally measures 11.0 cm or greater, while the obstetric conjugate (from the posterior pubic midpoint to the promontory) is roughly 10.5 cm, representing the narrowest fixed aperture through which the fetal head must engage.',
              'ক্লিনিক্যাল ধাত্রীবিদ্যায় প্রকৃত শ্রোণীকে তিনটি প্রধান তলে ভাগ করা হয়: পেলভিক ইনলেট, মিডপেলভিস এবং পেলভিক আউটলেট। ট্রু কনজুগেট ব্যাস (পিউবিক সিমফাইসিসের শীর্ষ থেকে স্যাক্রাল প্রমন্টরি পর্যন্ত দূরত্ব) সাধারণত ১১ সেন্টিমিটার বা বেশি হয়, যেখানে অবস্টেট্রিক কনজুগেট ব্যাস প্রায় ১০.৫ সেন্টিমিটার; এটিই হলো সবচেয়ে সরু স্থির পথ যার মধ্য দিয়ে প্রসবের সময় নবজাতকের মাথা অতিক্রম করতে হয়।'
            ),
            l(
              'The interspinous diameter between the prominent ischial spines in the midpelvis represents the narrowest transverse distance of the birth canal (averaging 10.5 cm). Pelvic classification according to Caldwell and Moloy categorizes female pelvic architecture into four basic morphologies: gynecoid (round inlet, optimal for spontaneous vaginal delivery), android (heart-shaped, funnel-like, predisposing to deep transverse arrest), anthropoid (elongated anteroposteriorly), and platypelloid (transversely wide and flat).',
              'মিডপেলভিসে দুটি তীক্ষ্ণ ইশ্চিয়াল স্পাইনের মধ্যবর্তী দূরত্ব হলো প্রসব পথের সবচেয়ে সংকীর্ণ আড়াআড়ি স্থান (গড়ে ১০.৫ সেন্টিমিটার)। ক্যাল্ডওয়েল ও মলয় শ্রেণিবিন্যাস অনুযায়ী নারী শ্রোণী চার প্রকার: গাইনিকয়েড (গোলাকার, প্রসবের জন্য আদর্শ), অ্যান্ড্রয়েড (হৃদপিণ্ডাকৃতি, পুরুষালি ধরনের, যা প্রসব বাধাগ্রস্ত করতে পারে), অ্যানথ্রোপয়েড (সামনে-পেছনে লম্বা) এবং প্লাটিপেলয়েড (চ্যাপ্টা ও চওড়া)।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Femoral Trabecular Architecture and Hip Biomechanics', 'ফিমারের ট্র্যাবেকুলার জালিকা ও নিতম্বের বলবিদ্যা'),
          paragraphs: [
            l(
              'The proximal femur embodies classic Wolff law functional adaptation, wherein bone trabeculae orient along principal mechanical stress vectors. Cross-sectional micro-computed tomography demonstrates two primary trabecular systems: the principal compressive system (arising from the medial cortex of the femoral shaft and arching upward into the superior femoral head) and the principal tensile system (arising from the lateral cortex and curving across the neck into the inferior head).',
              'প্রক্সিমাল ফিমার উলফের সূত্রের (Wolff’s Law) এক চমৎকার উদাহরণ, যেখানে অস্থির ভেতরের ট্র্যাবেকুলা যান্ত্রিক চাপের রেখা বরাবর সুবিন্যস্ত থাকে। মাইক্রো-সিটি স্ক্যানে দুটি প্রধান ট্র্যাবেকুলার কাঠামো দেখা যায়: প্রধান সংকোচনশীল জালিকা (যা ফিমারের ভেতরের প্রাচীর থেকে শুরু হয়ে মাথার ওপর পর্যন্ত যায়) এবং প্রধান টানটান বা টেনসিল জালিকা (যা বাইরের প্রাচীর থেকে গ্রীবা হয়ে মাথার নিচের অংশে পৌঁছায়)।'
            ),
            l(
              'The intersection of these trabecular arches forms a structural triangulated lattice capable of sustaining joint reaction forces exceeding 3 to 4 times body weight during single-leg support. Between these systems lies Ward triangle, an area of low trabecular density within the femoral neck that enlarges progressively as bone mineral density declines in osteopenia and osteoporosis, predisposing to catastrophic fragility fractures under trivial twisting loads.',
              'এই দুটি ট্র্যাবেকুলার আর্চের সংযোগস্থলে একটি ত্রিকোণাকার কাঠামো তৈরি হয় যা এক পায়ে দাঁড়ালে দেহের ওজনের ৩ থেকে ৪ গুণ চাপ অনায়াসে সহ্য করতে পারে। এদের মাঝখানে ওয়ার্ডস ট্রায়াঙ্গেল (Ward’s triangle) নামের একটি অপেক্ষাকৃত ফাঁকা অঞ্চল থাকে; বয়স বৃদ্ধির সাথে সাথে অস্টিওপোরোসিসে এই অঞ্চলটি আরও দুর্বল হয়ে পড়ে এবং সামান্য মোচড়েই নিতম্বের হাড় ভেঙে যায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Traumatology: Classifications of Scaphoid and Proximal Femur Fractures', 'ট্রমাটোলজি: স্ক্যাফয়েড ও প্রক্সিমাল ফিমার ফ্র্যাকচারের শ্রেণিবিন্যাস'),
          paragraphs: [
            l(
              'Scaphoid fractures account for 60% of all carpal bone fractures and present subtly with tenderness in the anatomical snuffbox (bounded laterally by the abductor pollicis longus and extensor pollicis brevis, and medially by the extensor pollicis longus). Herbert classification stratifies scaphoid injuries into stable incomplete (Type A), acute unstable through the waist or proximal pole (Type B), delayed union (Type C), and established nonunion with avascular necrosis (Type D), dictating whether percutaneous compression screw fixation or cast immobilization is indicated.',
              'কব্জির সমস্ত অস্থির ফ্র্যাকচারের প্রায় ৬০% স্ক্যাফয়েডে ঘটে এবং এটি অ্যানাটমিক্যাল স্নাফবক্সে ব্যথার মাধ্যমে প্রকাশ পায় (যার একপাশে অ্যাবডাক্টর পলিসিস লংগাস ও অন্যপাশে এক্সটেনসর পলিসিস লংগাস থাকে)। হারবার্ট শ্রেণিবিন্যাস অনুযায়ী এটি স্থিতিশীল, অস্থিতিশীল, দেরিতে জোড়া লাগা বা রক্ত সরবরাহ বন্ধ হয়ে অকেজো হয়ে যাওয়া—এই চার ভাগে বিভক্ত; যা নির্ধারণ করে প্লাস্টার করতে হবে নাকি স্ক্রু দিয়ে অস্ত্রোপচার জরুরি।'
            ),
            l(
              'Proximal femur fractures are broadly classified based on their relationship to the hip joint capsule as intracapsular (femoral head, subcapital, transcervical) or extracapsular (intertrochanteric, subtrochanteric). The Garden classification evaluates subcapital femoral neck fractures based on trabecular alignment and displacement on plain anteroposterior radiographs (Stages I through IV), where Garden III and IV fractures signify ruptured retinacular vessels and high risk of femoral head osteonecrosis.',
              'প্রক্সিমাল ফিমারের ফ্র্যাকচারকে সন্ধির আবরণের সাথে সম্পর্কের ওপর ভিত্তি করে ইন্ট্রাক্যাপসুলার (গ্রীবার ভেতরে) এবং এক্সট্রাক্যাপসুলার (ট্রোক্যান্টারিক অঞ্চলে) এই দুই ভাগে ভাগ করা হয়। গার্ডেন শ্রেণিবিন্যাস এক্স-রেতে স্থানচ্যুতির মাত্রার ওপর ভিত্তি করে একে ১ থেকে ৪ ধাপে ভাগ করে; যার ৩ ও ৪ নম্বর ধাপে রক্তনালী পুরোপুরি ছিঁড়ে গিয়ে ফিমারের মাথা পচে যাওয়ার তীব্র ঝুঁকি থাকে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Academic Principles of Appendicular Osteology', 'উপাঙ্গীয় অস্থিবিদ্যার মূল একাডেমিক নীতি'),
          paragraphs: [
            l(
              'The architecture of the appendicular skeleton resolves an engineering trade-off between mobility and structural constraint. The open, muscle-suspended pectoral girdle facilitates multiplanar manipulation, whereas the rigid osseous ring of the pelvis and columnar lower limbs optimize ground reaction force transmission and energy efficiency during gait. Mastery of specific osteological landmarks, internal trabecular trajectories, and regional arterial anastomoses is essential for diagnosing traumatic disruptions and guiding surgical orthopedic reconstructions.',
              'উপাঙ্গীয় কঙ্কালের স্থাপত্য গতিশীলতা এবং কাঠামোগত স্থিতিশীলতার মধ্যকার প্রকৌশলগত ভারসাম্যের বহিঃপ্রকাশ। পেশী দ্বারা ঝুলন্ত বক্ষ বন্ধনী হাতের বহুমাত্রিক কাজকে সহজ করে, পক্ষান্তরে শ্রোণী বন্ধনীর অবিচল বলয় ও স্তম্ভাকৃতির পা হাঁটার সময় শক্তি সঞ্চয় ও স্থিতিশীলতা বজায় রাখে। অস্থির সূক্ষ্ম ল্যান্ডমার্ক, অভ্যন্তরীণ ট্র্যাবেকুলার গতিপথ এবং রক্তনালীর বিন্যাস জানা অর্থোপেডিক চিকিৎসায় ফ্র্যাকচার নির্ণয় ও সফল অস্ত্রোপচারের পূর্বশর্ত।'
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
          heading: l('Bone Mineral Density Dynamics, Finite Element Modeling and Orthopedic Biomechanics', 'অস্থির খনিজ ঘনত্ব, ফাইনাইট এলিমেন্ট মডেলিং ও বায়োমেকানিক্স'),
          paragraphs: [
            l(
              'Computational biomechanics leverages high-resolution peripheral quantitative computed tomography (HR-pQCT) combined with micro-finite element analysis (micro-FEA) to quantify trabecular thickness, cortical porosity, and failure load in vivo. Unlike conventional dual-energy X-ray absorptiometry (DXA), which measures areal bone mineral density (aBMD in g/cm²) in two dimensions, volumetric micro-FEA accurately simulates three-dimensional strain distribution across the femoral neck and distal radius under simulated fall vectors.',
              'আধুনিক বায়োমেকানিক্সে উচ্চ রেজোলিউশনের পেরিফেরাল কিউসিটি (HR-pQCT) এবং মাইক্রো-ফাইনাইট এলিমেন্ট অ্যানালাইসিস (micro-FEA) ব্যবহার করে জীবন্ত শরীরে ট্র্যাবেকুলার ঘনত্ব, কর্টেক্সের ছিদ্রতা এবং হাড় ভাঙার সর্বোচ্চ সহনশীলতা পরিমাপ করা হয়। প্রচলিত দ্বিমাত্রিক ডিএক্সএ (DXA) স্ক্যানের সীমাবদ্ধতা কাটিয়ে ত্রিমাত্রিক micro-FEA মডেলিং পড়ে যাওয়ার বিভিন্ন কোণে ফিমারের গ্রীবা ও কব্জির ওপর ঠিক কীভাবে চাপ পড়ে তা নিখুঁতভাবে বিশ্লেষণ করতে পারে।'
            ),
            l(
              'These advanced models have demonstrated that subcortical osteoclastic tunneling within the superior femoral neck cortex accelerates dramatically following postmenopausal estrogen withdrawal, precipitating critical stress concentrations under lateral fall impacts. Furthermore, topological optimization algorithms are now guiding patient-specific 3D-printed porous titanium trabecular acetabular cups and femoral stems, matching the elastic modulus of native bone (10–18 GPa) to eliminate stress shielding and catastrophic aseptic loosening.',
              'এই মডেলগুলো প্রমাণ করেছে যে মেনোপজের পর ইস্ট্রোজেনের অভাবে ফিমার গ্রীবার ওপরের স্তরে অস্টিওক্ল্যাস্ট কোষে ক্ষয় দ্রুত বেড়ে যায়, যা পাশ ফিরে আছাড় খেলে তাৎক্ষণিক হাড় ভাঙার ঝুঁকি বহুগুণ বাড়ায়। এছাড়া টপোলজিক্যাল অ্যালগরিদমের সাহায্যে রোগীর নিজস্ব অস্থির স্থিতিস্থাপকতার সাথে মিলিয়ে থ্রিডি-প্রিন্টেড টাইটানিয়াম কৃত্রিম হিপ জয়েন্ট তৈরি করা হচ্ছে, যা দীর্ঘমেয়াদে কৃত্রিম সন্ধি আলগা হয়ে যাওয়ার সমস্যা চিরতরে রোধ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Regenerative Orthopedics and Scaffold-Guided Osteochondral Reconstruction', 'রিজেনারেটিভ অর্থোপেডিক্স ও অস্টিওকনড্রাল পুনর্গঠন গবেষণা'),
          paragraphs: [
            l(
              'Critical-sized bone defects resulting from high-energy appendicular blast trauma or oncological resections represent an enduring orthopedic challenge. Conventional vascularized fibular autografts and bulk allografts suffer from donor-site morbidity, nonunion rates exceeding 25%, and long-term fatigue microfracture. Emerging tissue-engineering paradigms combine polycaprolactone (PCL)-tricalcium phosphate bioactive ceramic scaffolds with autologous bone marrow-derived mesenchymal stromal cells (BMSCs) primed with recombinant human bone morphogenetic protein-2 (rhBMP-2).',
              'উচ্চমাত্রার বিস্ফোরণ বা ক্যান্সারের কারণে উপাঙ্গের হাড়ের বড় অংশ নষ্ট হয়ে গেলে তা প্রতিস্থাপন করা অর্থোপেডিক্সের জন্য এক জটিল চ্যালেঞ্জ। পায়ের ফিবুলা হাড় কেটে এনে জোড়া লাগানোর চিরাচরিত পদ্ধতিতে রোগীর অঙ্গহানি ঘটে এবং ২৫ শতাংশ ক্ষেত্রে হাড় ঠিকমতো জোড়া লাগে না। আধুনিক গবেষণায় বায়ো-সিরামিক স্ক্যাফোল্ডের সাথে রোগীর নিজস্ব অস্থিমজ্জার স্টেম সেল এবং হাড় তৈরির বিশেষ গ্রোথ ফ্যাক্টর (rhBMP-2) মিশিয়ে কৃত্রিমভাবে নিখুঁত জীবন্ত হাড় তৈরি করা হচ্ছে।'
            ),
            l(
              'Simultaneously, for articular cartilage restoration at the hip and knee, multiphasic gradient scaffolds mimicking the native zonal hierarchy of hyaline cartilage, calcified cartilage, and subchondral bone are being investigated. By functionalizing scaffolds with spatially localized transforming growth factor-beta-3 (TGF-beta-3) for chondrogenesis superficially and osteogenic peptides deeply, tissue engineers are achieving physiological integration without fibrocartilaginous scar formation, transforming the future management of post-traumatic arthrosis.',
              'একই সাথে নিতম্ব ও হাঁটুর আর্টিকুলার তরুণাস্থি মেরামতের জন্য প্রাকৃতিক কাঠামোর অনুকরণে স্তরভিত্তিক বিশেষায়িত স্ক্যাফোল্ড তৈরি করা হচ্ছে। উপরের স্তরে হায়ালিন তরুণাস্থি তৈরির জন্য TGF-বিটা-৩ এবং নিচের স্তরে হাড় তৈরির পেপটাইড যুক্ত করে গবেষকরা কোনো ক্ষত বা স্কার ছাড়া প্রাকৃতিক সন্ধির পুনর্গঠন সম্পন্ন করছেন, যা ভবিষ্যতে আঘাত-পরবর্তী অস্টিওআর্থ্রাইটিসের চিকিৎসায় বৈপ্লবিক পরিবর্তন আনবে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-step pathway tracing appendicular skeletal mechanics: pectoral girdle orientation, upper limb manipulation levers, pelvic girdle load distribution, and lower limb bipedal propulsion.',
      'উপাঙ্গীয় কঙ্কাল বলবিদ্যার ৪টি সহজলভ্য ধাপ: বক্ষ বন্ধনীর বিস্তার, ঊর্ধ্ববাহুর সূক্ষ্ম কাজের লিভার, শ্রোণী বন্ধনীর ওজন বণ্টন এবং নিম্নবাহুর দ্বিপদী চলন ও ধাক্কা।'
    ),
    steps: [
      l(
        '1. The pectoral girdle (clavicle and scapula) provides a highly mobile platform anchoring the upper limb with minimal axial constraint.',
        '১. বক্ষ বন্ধনী (ক্লাভিকল ও স্ক্যাপুলা) সামান্য অস্থি সংযোগের মাধ্যমে বাহুকে সবদিকে ঘোরার স্বাধীনতা দেয়।'
      ),
      l(
        '2. The upper extremity levers (humerus, radius, ulna, and hand) translate muscular contraction into precise manual manipulation and reach.',
        '২. ঊর্ধ্ববাহুর অস্থির লিভারগুলো পেশীর সংকোচনকে সূক্ষ্ম হাতের কাজ ও বহুদূরের নাগালে রূপান্তরিত করে।'
      ),
      l(
        '3. The fused pelvic ring (os coxae and sacrum) establishes a rigid basin transmitting body weight from the spine to both hip joints.',
        '৩. একীভূত শ্রোণী বলয় মেরুদণ্ড থেকে শরীরের সম্পূর্ণ ভর দুই নিতম্বের সন্ধিতে সুষমভাবে বণ্টন করে।'
      ),
      l(
        '4. The columnar lower extremity (femur, tibia, fibula, and arched foot) absorbs ground impacts and propels the center of mass during gait.',
        '৪. স্তম্ভাকার নিম্নবাহু ও আর্চযুক্ত পদতল ভূমির ঝাঁকুনি শোষণ করে এবং হাঁটার সময় দেহকে সামনের দিকে এগিয়ে দেয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A young athlete falls onto an outstretched hand and develops acute point tenderness in the anatomical snuffbox. What critical vascular complication is this patient at highest risk of developing if this injury is misdiagnosed?',
      'একজন তরুণ খেলোয়াড় প্রসারিত হাতের ওপর পড়ে গিয়ে অ্যানাটমিক্যাল স্নাফবক্সে তীব্র ব্যথা অনুভব করেন। এই আঘাত শনাক্ত না হলে রোগী কোন মারাত্মক ভাস্কুলার জটিলতার ঝুঁকিতে থাকবেন?'
    ),
    options: [
      l('Avascular necrosis of the proximal pole of the scaphoid', 'স্ক্যাফয়েডের প্রক্সিমাল প্রান্তের অ্যাভাস্কুলার নেক্রোসিস (রক্তহীন পচন)'),
      l('Rupture of the brachial artery', 'ব্র্যাকিয়াল ধমনী ছিঁড়ে যাওয়া'),
      l('Compartment syndrome of the anterior forearm', 'অগ্রবাহুর সম্মুখ কম্পার্টমেন্ট সিন্ড্রোম'),
      l('Dislocation of the radioulnar syndesmosis', 'রেডিওআলনার সিন্ডেসমোসিস স্থানচ্যুতি'),
    ],
    correctIndex: 0,
    explanation: l(
      'Tenderness in the anatomical snuffbox is classic for a fracture across the waist of the scaphoid. Because the scaphoids blood supply enters distally and flows in a retrograde fashion, a waist fracture can interrupt blood flow to the proximal pole, resulting in ischemic avascular necrosis and nonunion.',
      'অ্যানাটমিক্যাল স্নাফবক্সে তীব্র ব্যথা স্ক্যাফয়েডের কোমরে ফ্র্যাকচারের সুনির্দিষ্ট লক্ষণ। স্ক্যাফয়েডে রক্ত দূরবর্তী প্রান্ত থেকে ঢুকে উল্টোদিকে প্রবাহিত হয়; তাই কোমরে হাড় ভাঙলে প্রক্সিমাল অংশে রক্ত সরবরাহ বন্ধ হয়ে রক্তহীন পচন (অ্যাভাস্কুলার নেক্রোসিস) ও জোড়া না লাগার মারাত্মক জটিলতা ঘটে।'
    ),
  },
}
