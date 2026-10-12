import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch7',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 7: Axial Skeleton',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/7-introduction',
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

export const chapter04AxialSkeletonLesson: LessonTopic = {
  id: 'topic.anatomy.skeletal-axial',
  slug: 'skeletal-axial',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('04 · Axial Skeleton', '০৪ · অক্ষীয় কঙ্কাল'),
  summary: l(
    'A comprehensive regional study of the 80 bones composing the human axial skeleton: the neurocranium, facial viscerocranium, vertebral column, thoracic cage, and clinical biomechanics.',
    'মানবদেহের অক্ষীয় কঙ্কালের ৮০টি অস্থির বিশদ আঞ্চলিক শারীরস্থানিক অধ্যয়ন: মস্তিষ্ক আধার, মুখের অস্থি, মেরুদণ্ড, বক্ষপিঞ্জর এবং ক্লিনিক্যাল অস্থি-বলবিদ্যা।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Identify the 80 bones of the axial skeleton, distinguishing the 8 cranial bones, 14 facial bones, 7 associated auditory/hyoid bones, 26 vertebral segments, and 25 thoracic cage bones.',
      'অক্ষীয় কঙ্কালের ৮০টি অস্থি সঠিকভাবে চিহ্নিত করে ৮টি ক্রেনিয়াল, ১৪টি ফেসিয়াল, ৭টি সহযোগী, ২৬টি কশেরুকা এবং ২৫টি বক্ষপিঞ্জরের অস্থির বিন্যাস বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Describe the primary and secondary curvatures of the vertebral column and the specialized anatomical adaptations of C1 (atlas), C2 (axis), and the sacrum.',
      'মেরুদণ্ডের প্রাথমিক ও গৌণ বক্রতা এবং C1 (অ্যাটলাস), C2 (অ্যাক্সিস) ও স্যাক্রামের বিশেষায়িত গঠনগত রূপান্তর ও গতিবিদ্যা ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Correlate osteological landmarks and cranial base foramina with their traversing cranial nerves, vascular pedicles, and vulnerability to fracture patterns (e.g. pterion, Jefferson fracture, herniated disc).',
      'করোটির মেঝের ছিদ্রপথ ও অস্থির ল্যান্ডমার্কগুলোর সাথে তাদের মধ্য দিয়ে অতিক্রমকারী ক্রেনিয়াল স্নায়ু, রক্তনালী এবং সাধারণ ফ্র্যাকচারের ক্লিনিক্যাল সম্পর্ক স্থাপন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.introduction'],
  relatedTopicIds: ['topic.anatomy.cells-tissues'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch7', 'moore-anatomy-9e'],
    structure: ['openstax-ap2e-ch7', 'grays-anatomy-42e'],
    mechanism: ['moore-anatomy-9e', 'netter-anatomy-8e'],
    integration: ['openstax-ap2e-ch7', 'guyton-hall-14e'],
    practice: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    takeaways: ['openstax-ap2e-ch7', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: The Central Axis of Human Form', 'ভূমিকা: মানবদেহের কেন্দ্রীয় অক্ষ'), sectionId: 'introduction' },
      { id: 'sec-skull', label: l('The Skull: Cranial and Facial Architecture', 'করোটি: মস্তিষ্ক আধার ও মুখের গঠন'), sectionId: 'structure' },
      { id: 'sec-vertebrae', label: l('The Vertebral Column and Intervertebral Discs', 'মেরুদণ্ড ও ইন্টারভার্টিব্রাল ডিস্ক'), sectionId: 'mechanism' },
      { id: 'sec-thorax', label: l('The Thoracic Cage and Respiratory Mechanics', 'বক্ষপিঞ্জর ও শ্বাসক্রিয়ার বলবিদ্যা'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Osteopathology: Pterion and Disc Herniation', 'ক্লিনিক্যাল অস্টিওপ্যাথলজি: টেরিওন ও ডিস্ক হার্নিয়েশন'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary and Axial Osteology Glossary', 'সারসংক্ষেপ ও অক্ষীয় অস্থি শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Pterion & Middle Meningeal Artery', 'টেরিওন ও মিডল মেনিনজিয়াল ধমনী'),
        definition: l(
          'An H-shaped suture junction on the lateral skull vault where frontal, parietal, sphenoid, and temporal bones meet, overlying the vulnerable anterior branch of the middle meningeal artery.',
          'মাথার খুলির পাশের একটি H-আকৃতির অস্থিসন্ধি যেখানে ফ্রন্টাল, প্যারাইটাল, স্ফেনয়েড ও টেম্পোরাল অস্থি মিলিত হয়; এর ঠিক নিচ দিয়ে মিডল মেনিনজিয়াল ধমনী অতিক্রম করে।'
        ),
      },
      {
        term: l('Dens (Odontoid process)', 'ডেনস বা ওডন্টয়েড প্রসেস'),
        definition: l(
          'A tooth-like cranial projection of the C2 (axis) vertebra that articulates with the anterior arch of C1 (atlas), secured by the transverse ligament of the atlas to allow head rotation.',
          'C2 (অ্যাক্সিস) কশেরুকার ওপরের দিকে প্রক্ষিপ্ত দাঁতের মতো অংশ যা C1 (অ্যাটলাস)-এর সাথে সন্ধি তৈরি করে মাথা ডানে-বামে ঘোরাতে সাহায্য করে।'
        ),
      },
      {
        term: l('Sternal Angle of Louis', 'স্টার্নাল অ্যাঙ্গেল অব লুই'),
        definition: l(
          'The transverse cartilaginous manubriosternal junction at the level of T4-T5, marking the clinical landmark for the 2nd costal cartilage, tracheal bifurcation, and aortic arch.',
          'ম্যানুব্রিয়াম ও স্টার্নামের সংযোগস্থল (T4-T5 লেভেলে) যা দ্বিতীয় পাঁজরের তরুণাস্থি, শ্বাসনালীর বিভাজন এবং মহাধমনীর বাঁক নির্দেশকারী গুরুত্বপূর্ণ ক্লিনিক্যাল ল্যান্ডমার্ক।'
        ),
      },
      {
        term: l('Annulus Fibrosus & Nucleus Pulposus', 'অ্যানুলাস ফাইব্রোসাস ও নিউক্লিয়াস পালপোসাস'),
        definition: l(
          'The concentric fibrocartilaginous outer ring (annulus fibrosus) and gelatinous hydrated core (nucleus pulposus) composing each resilient intervertebral disc.',
          'প্রতিটি ইন্টারভার্টিব্রাল ডিস্কের বাইরের দৃঢ় ফাইব্রোকার্টিলেজ স্তর (অ্যানুলাস) এবং ভেতরের জেলির মতো স্থিতিস্থাপক কেন্দ্র (নিউক্লিয়াস পালপোসাস)।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Evaluating a Trauma Patient with a Lateral Skull Impact at the Pterion', 'মাথার পাশে টেরিওনে আঘাতপ্রাপ্ত রোগীর জরুরি মূল্যায়ন'),
        steps: [
          l('Step 1: Identify that the pterion represents the thinnest calvarial zone, overlying the anterior branch of the middle meningeal artery.', 'ধাপ ১: মনে রাখুন যে টেরিওন মাথার খুলির সবচেয়ে পাতলা অংশ এবং এর ঠিক নিচ দিয়ে মিডল মেনিনজিয়াল ধমনী প্রবাহিত হয়।'),
          l('Step 2: Recognize the classic "lucid interval" where transient post-concussive recovery precedes rapid neurological deterioration as arterial bleeding expands.', 'ধাপ ২: ক্লাসিক "লুসিড ইন্টারভ্যাল" উপলব্ধি করুন যেখানে প্রাথমিক জ্ঞান ফেরার পর ধমনীর রক্তক্ষরণ বেড়ে গিয়ে রোগী দ্রুত অচেতন হয়ে পড়ে।'),
          l('Step 3: Deduce that arterial bleeding strips periosteal dura from the inner calvarium to form a biconvex (lens-shaped) epidural hematoma on urgent CT imaging.', 'ধাপ ৩: সিদ্ধান্ত নিন যে এই রক্তক্ষরণ হাড় থেকে ডুরাকে বিচ্ছিন্ন করে জরুরি সিটিতে লেন্স-আকৃতির এপিডুরাল হেমাটোমা হিসেবে ধরা পড়ে।'),
        ],
        conclusion: l(
          'Emergent neurosurgical trephination (burr hole) or craniotomy is mandatory to evacuate the arterial clot before uncal herniation compresses the brainstem.',
          'মস্তিষ্কের ব্রেনস্টেম সংকুচিত হয়ে প্রাণহানি ঘটার আগেই মাথার খুলিতে ফুটো (বার হোল) করে জরুরি ভিত্তিতে রক্ত বের করা অপরিহার্য।'
        ),
      },
      {
        title: l('Anatomical Localization of a Lumbar Disc Herniation (L4-L5)', 'L4-L5 ইন্টারভার্টিব্রাল ডিস্ক হার্নিয়েশনের শারীরস্থানিক নির্ণয়'),
        steps: [
          l('Step 1: Recall that the posterior longitudinal ligament is narrow in the lumbar spine, predisposing the annulus fibrosus to posterolateral rupture.', 'ধাপ ১: মনে রাখুন যে লাম্বার অঞ্চলে পোস্টেরিয়র লংগিটিউডিনাল লিগামেন্ট সরু হওয়ায় ডিস্কের পেছনের পাশ ফেটে যাওয়ার প্রবণতা বেশি।'),
          l('Step 2: Trace that a posterolateral protrusion of the L4-L5 disc compresses the transiting L5 spinal nerve root within the lateral recess.', 'ধাপ ২: শনাক্ত করুন যে L4-L5 ডিস্ক ফেটে গিয়ে বের হয়ে আসা নিউক্লিয়াস পালপোসাস L5 স্নায়ুমূলকে সংকুচিত করে।'),
          l('Step 3: Correlate L5 nerve root impingement with sensory paresthesia across the lateral leg and dorsum of the foot alongside weakness in great toe dorsiflexion.', 'ধাপ ৩: L5 স্নায়ুর ওপর চাপের ফলে পায়ের বাইরের অংশে ও পাতার ওপর অসাড়তা এবং পায়ের বুড়ো আঙুল ওপরের দিকে টানার দুর্বলতা চিহ্নিত করুন।'),
        ],
        conclusion: l(
          'Posterolateral disc herniations in the lumbar spine compress the traversing, lower nerve root rather than the exiting nerve root of the upper named vertebra.',
          'কোমরের ডিস্ক হার্নিয়েশন সাধারণত বের হয়ে যাওয়া স্নায়ুকে নয়, বরং নিচের দিকে নেমে আসা ট্রানজিটিং স্নায়ুমূলকে চেপে ধরে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Which cranial fossa houses the cerebellum, pons, and medulla oblongata, and what major foramen allows the spinal cord to exit?',
          'কোন ক্রেনিয়াল ফসাতে সেরিবেলাম, পনস ও মেডুলা অবস্থান করে এবং কোন প্রধান ছিদ্র দিয়ে মেরুরজ্জু বের হয়ে যায়?'
        ),
        answer: l(
          'The posterior cranial fossa houses the cerebellum, pons, and medulla oblongata; the foramen magnum in the occipital bone serves as the central conduit for the medulla oblongata to transition into the spinal cord.',
          'পোস্টেরিয়র ক্রেনিয়াল ফসা সেরিবেলাম, পনস ও মেডুলা ধারণ করে; এবং অক্সিপিটাল অস্থির ফোরামেন ম্যাগনাম দিয়ে মেডুলা বের হয়ে মেরুরজ্জুতে রূপান্তরিত হয়।'
        ),
      },
      {
        question: l(
          'Why are ribs 11 and 12 designated as "floating ribs"?',
          '১১ ও ১২ নম্বর পাঁজরকে "ভাসমান পাঁজর" বলা হয় কেন?'
        ),
        answer: l(
          'Floating ribs (costae fluctuantes) articulate posteriorly with vertebrae T11 and T12 but lack any anterior cartilaginous attachment to the sternum or adjacent costal cartilages, ending freely in the muscular lateral abdominal wall.',
          'ভাসমান পাঁজর পেছনের দিকে কশেরুকার সাথে যুক্ত থাকলেও সামনের দিকে স্টার্নাম বা অন্য কোনো পাঁজরের সাথে যুক্ত না হয়ে পেটের মাংসপেশীতে উন্মুক্তভাবে শেষ হয়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch04-axial-diagram',
    title: l('Interactive Axial Skeleton Modular Anatomy', 'ইন্টারেক্টিভ অক্ষীয় কঙ্কাল ও অস্থি বিন্যাস'),
    description: l(
      'Explore the structural compartments of the axial skeleton: the protective skull, the articulated vertebral column, and the flexible thoracic cage.',
      'অক্ষীয় কঙ্কালের প্রধান অংশগুলো পরীক্ষা করুন: প্রতিরক্ষামূলক খুলি, সচল মেরুদণ্ড এবং শ্বাস-প্রশ্বাসে সহায়ক বক্ষপিঞ্জর।'
    ),
    disclaimer: l(
      'Schematic osteological model: select any axial division to inspect its bone counts, functional articulations, and protective boundaries.',
      'অস্থি সংক্রান্ত পরিকল্পিত মডেল: অস্থির সংখ্যা, সন্ধি এবং সুরক্ষামূলক গঠন জানতে যেকোনো অংশ নির্বাচন করুন।'
    ),
    svgType: 'axial-skeleton',
    items: [
      {
        id: 'neurocranium',
        label: l('Neurocranium (Cranial Vault & Base)', 'নিউরোক্রেনিয়াম (মস্তিষ্ক আধার)'),
        description: l(
          'The 8 cranial bones that enclose and protect the brain and sensory organs: frontal (1), parietal (2), temporal (2), occipital (1), sphenoid (1), and ethmoid (1). United by immovable fibrous sutures.',
          '৮টি ক্রেনিয়াল অস্থি যা মস্তিষ্ককে আবদ্ধ ও সুরক্ষিত রাখে: ফ্রন্টাল (১), প্যারাইটাল (২), টেম্পোরাল (২), অক্সিপিটাল (১), স্ফেনয়েড (১) ও এথময়েড (১)।'
        ),
        details: l(
          'Contains anterior, middle, and posterior cranial fossae with foramina permitting cranial nerve exit.',
          'এর মেঝেতে তিনটি ফসা এবং অসংখ্য ছিদ্র থাকে যা দিয়ে করোটিক স্নায়ু ও রক্তনালী মস্তিষ্কে যাতায়াত করে।'
        ),
        sectionId: 'structure',
        color: '#e4dcf4',
        svgCoords: { x: 25, y: 30, width: 310, height: 44 },
      },
      {
        id: 'viscerocranium',
        label: l('Viscerocranium (Facial Skeleton)', 'ভিসেরোক্রেনিয়াম (মুখমণ্ডলের অস্থি)'),
        description: l(
          'The 14 facial bones supporting facial musculature, air passages, and mastication: maxillae (2), zygomatics (2), nasals (2), lacrimals (2), palatines (2), inferior nasal conchae (2), vomer (1), and mandible (1).',
          'মুখের ১৪টি অস্থি যা মুখের মাংসপেশী, শ্বাসনালী ও চর্বণে সাহায্য করে: ম্যাক্সিলা (২), জাইগোম্যাটিক (২), ন্যাসাল (২), ল্যাক্রিমাল (২), প্যালাটাইন (২), নিম্ন ন্যাসাল কঙ্কা (২), ভোমার (১) এবং ম্যান্ডিবল (১)।'
        ),
        details: l(
          'The mandible forms the only freely movable diarthrodial joint of the skull at the temporomandibular joint (TMJ).',
          'ম্যান্ডিবল টেম্পোরোম্যান্ডিবুলার সন্ধির (TMJ) মাধ্যমে মাথার খুলির একমাত্র সচল অস্থি হিসেবে কাজ করে।'
        ),
        sectionId: 'structure',
        color: '#f9dece',
        svgCoords: { x: 25, y: 82, width: 310, height: 44 },
      },
      {
        id: 'cervical-spine',
        label: l('Cervical Vertebrae (C1–C7)', 'সারভাইকাল কশেরুকা (C1–C7)'),
        description: l(
          '7 neck vertebrae characterized by transverse foramina for the vertebral arteries. Includes C1 (atlas, lacking body/spinous process) and C2 (axis, with odontoid dens permitting head rotation).',
          'ঘাড়ের ৭টি কশেরুকা যার প্রধান বৈশিষ্ট্য হলো ভার্টিব্রাল ধমনীর জন্য ট্রান্সভার্স ছিদ্র থাকা। এতে C1 (অ্যাটলাস) ও C2 (অ্যাক্সিস) অন্তর্ভুক্ত যা মাথা ঘোরাতে সাহায্য করে।'
        ),
        details: l(
          'Exhibits secondary lordotic curvature developing as an infant learns to hold the head upright.',
          'শিশুর মাথা সোজা রাখতে শেখার সাথে সাথে এই অংশে লর্ডোটিক বক্রতা তৈরি হয়।'
        ),
        sectionId: 'mechanism',
        color: '#dbeed6',
        svgCoords: { x: 25, y: 134, width: 310, height: 44 },
      },
      {
        id: 'thoracic-cage',
        label: l('Thoracic Cage & Sternum (T1–T12 & Ribs)', 'বক্ষপিঞ্জর ও স্টার্নাম (পাঁজর ও বুক)'),
        description: l(
          'The sternum (manubrium, body, xiphoid) and 12 pairs of ribs: true ribs 1–7 (vertebrosternal), false ribs 8–10 (vertebrochondral), and floating ribs 11–12 (vertebral). Protects thoracic viscera.',
          'স্টার্নাম (ম্যানুব্রিয়াম, দেহ, জিফয়েড) এবং ১২ জোড়া পাঁজর নিয়ে গঠিত: প্রকৃত পাঁজর ১-৭, অপ্রকৃত পাঁজর ৮-১০ এবং ভাসমান পাঁজর ১১-১২।'
        ),
        details: l(
          'Costovertebral and costosternal joints permit pump-handle and bucket-handle motions during ventilation.',
          'শ্বাস নেওয়ার সময় পাম্প-হ্যান্ডেল ও বাকেট-হ্যান্ডেল গতিতে বক্ষগহ্বরের আয়তন বৃদ্ধি করে।'
        ),
        sectionId: 'integration',
        color: '#fde9cf',
        svgCoords: { x: 25, y: 186, width: 310, height: 44 },
      },
      {
        id: 'lumbar-spine',
        label: l('Lumbar Vertebrae (L1–L5)', 'লাম্বার কশেরুকা (L1–L5)'),
        description: l(
          '5 robust lower back vertebrae with massive kidney-shaped bodies and hatchet-shaped spinous processes engineered to withstand heavy compressive axial loads of upright bipedal posture.',
          'কোমরের ৫টি শক্তিশালী কশেরুকা যার কিডনি-আকৃতির পুরু দেহ মানবদেহের ওপরের অংশের সম্পূর্ণ ওজন বহন করার জন্য তৈরি।'
        ),
        details: l(
          'Susceptible to intervertebral disc herniation, particularly at the L4-L5 and L5-S1 junctions.',
          'বিশেষ করে L4-L5 ও L5-S1 জাংশনে অতিরিক্ত চাপের কারণে ডিস্ক ক্ষয় ও হার্নিয়েশন বেশি হয়।'
        ),
        sectionId: 'mechanism',
        color: '#d7e6f8',
        svgCoords: { x: 25, y: 238, width: 310, height: 44 },
      },
      {
        id: 'sacrum-coccyx',
        label: l('Sacrum & Coccyx (Fused Segments)', 'স্যাক্রাম ও কক্সিক্স (সংযুক্ত কশেরুকা)'),
        description: l(
          '5 fused sacral vertebrae forming a triangular wedge transferring axial weight to the pelvic girdle via sacroiliac joints, anchored inferiorly to 3–5 fused coccygeal tailbone segments.',
          '৫টি সংযুক্ত কশেরুকা নিয়ে গঠিত স্যাক্রাম যা মেরুদণ্ডের ওজন পেলভিসে পাঠায়, এবং নিচে লেজের মতো ৩-৫টি সংযুক্ত কক্সিক্স থাকে।'
        ),
        details: l(
          'Features anterior and posterior sacral foramina for sacral spinal nerve rami transmission.',
          'স্যাক্রাল স্নায়ু বের হওয়ার জন্য এতে সামনের ও পেছনের স্যাক্রাল ছিদ্র বিদ্যমান।'
        ),
        sectionId: 'mechanism',
        color: '#f6d5d9',
        svgCoords: { x: 25, y: 290, width: 310, height: 44 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Introduction: The Structural Scaffold of the Central Body', 'ভূমিকা: মানবদেহের কেন্দ্রীয় অক্ষীয় কাঠামো'),
          paragraphs: [
            l(
              'The human skeletal system is organized into two primary functional divisions: the axial skeleton and the appendicular skeleton. The axial skeleton forms the vertical central axis of the human organism, comprising precisely 80 bones that protect our most delicate vital organs—the brain, spinal cord, sensory organs, heart, and lungs. It also provides stable anchor points for the muscles that stabilize the neck, position the thoracic cage during breathing, and maintain upright bipedal posture.',
              'মানবদেহের কঙ্কালতন্ত্র দুটি প্রধান অংশে বিভক্ত: অক্ষীয় কঙ্কাল এবং উপাঙ্গীয় কঙ্কাল। অক্ষীয় কঙ্কাল মানবদেহের কেন্দ্রীয় উলম্ব অক্ষ তৈরি করে, যা ঠিক ৮০টি অস্থির সমন্বয়ে গঠিত। এটি আমাদের সবচেয়ে গুরুত্বপূর্ণ অঙ্গগুলো—মস্তিষ্ক, মেরুরজ্জু, জ্ঞানেন্দ্রিয়, হৃদ্‌পিণ্ড এবং ফুসফুসকে সুরক্ষিত রাখে। এছাড়াও এটি ঘাড় সোজা রাখতে, শ্বাস-প্রশ্বাসের সময় বক্ষপিঞ্জর প্রসারিত করতে এবং দুই পায়ে সোজা হয়ে দাঁড়াতে প্রয়োজনীয় পেশীগুলোকে মজবুত নোঙর প্রদান করে।'
            ),
            l(
              'Without the axial skeleton, human life would be impossible. The skull shields the fragile cerebral hemispheres from kinetic trauma; the articulated vertebral column encases the central highway of the spinal cord while flexing to absorb shock during walking and running; and the cage of the ribs shields the vital cardiopulmonary viscera while constantly expanding and contracting with every single breath we take.',
              'অক্ষীয় কঙ্কাল ছাড়া মানুষের বেঁচে থাকা অসম্ভব হতো। মাথার খুলি বাইরের আঘাত থেকে মস্তিষ্ককে রক্ষা করে; মেরুদণ্ডের কশেরুকাগুলো মেরুরজ্জুকে নিরাপদ নালীর মধ্যে আবৃত রাখে এবং হাঁটাচলার সময় যান্ত্রিক ঝাঁকুনি শোষণ করে; আর বুকের পাঁজরগুলো ফুসফুস ও হৃদ্‌পিণ্ডকে রক্ষা করার পাশাপাশি প্রতিটি নিঃশ্বাসের সাথে সাবলীলভাবে ওঠানামা করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Skull: Cranial Vault and Facial Architecture', 'করোটি: মস্তিষ্ক আধার ও মুখমণ্ডলের অস্থিসমূহ'),
          paragraphs: [
            l(
              'The human skull comprises 22 bones (excluding the 6 middle ear ossicles and the solitary hyoid bone), structurally divided into the neurocranium and the facial viscerocranium. The neurocranium forms the rounded cranial vault and stepped floor that encloses the brain. It is built from 8 cranial bones: the anterior frontal bone, two lateral parietal bones, two inferior temporal bones, the posterior occipital bone, the central butterfly-shaped sphenoid bone, and the deep ethmoid bone that separates the brain from the nasal cavity.',
              'মাথার খুলিতে মোট ২২টি অস্থি রয়েছে (কানের ৬টি ক্ষুদ্র অস্থি এবং গলার হাইওয়েড অস্থি বাদে), যা মস্তিষ্ক আধার (নিউরোক্রেনিয়াম) এবং মুখমণ্ডলের অস্থিতে (ভিসেরোক্রেনিয়াম) বিভক্ত। নিউরোক্রেনিয়াম ৮টি অস্থির সমন্বয়ে গঠিত: সামনে ফ্রন্টাল অস্থি, দুই পাশে দুটি প্যারাইটাল ও দুটি টেম্পোরাল অস্থি, পেছনে অক্সিপিটাল অস্থি, কেন্দ্রে প্রজাপতি-আকৃতির স্ফেনয়েড অস্থি এবং নাক ও মস্তিষ্কের সংযোগস্থলে এথময়েড অস্থি।'
            ),
            l(
              'The facial viscerocranium comprises 14 bones that sculpt the human facial profile, house the orbits and nasal chambers, and anchor teeth for mastication: two maxillae forming the upper jaw, two cheek-forming zygomatic bones, two nasal bones, two tear-draining lacrimal bones, two palatine bones, two inferior nasal conchae, the unpaired midline vomer bone, and the powerful lower jaw—the mandible. The mandible forms the only freely movable joint of the skull at the temporomandibular joint (TMJ).',
              'মুখমণ্ডলে ১৪টি অস্থি থাকে যা চোখের কোটর, নাসাগহ্বর ও দাঁতের ভিত্তি তৈরি করে: দুটি ম্যাক্সিলা বা ওপরের চোয়াল, দুটি জাইগোম্যাটিক বা গালের অস্থি, দুটি ন্যাসাল অস্থি, দুটি ল্যাক্রিমাল অস্থি, দুটি প্যালাটাইন অস্থি, দুটি নিম্ন ন্যাসাল কঙ্কা, একটি ভোমার এবং নিচের চোয়াল বা ম্যান্ডিবল। ম্যান্ডিবল হলো মাথার খুলির একমাত্র অস্থি যা সন্ধির মাধ্যমে свободно নড়াচড়া করতে পারে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Vertebral Column: Articulated Curvatures and Biomechanics', 'মেরুদণ্ড: কশেরুকার বক্রতা ও গতিবিদ্যা'),
          paragraphs: [
            l(
              'The adult vertebral column comprises 26 individual moving and fused osteological segments: 7 cervical vertebrae (C1–C7) in the neck, 12 thoracic vertebrae (T1–T12) articulating with ribs, 5 large lumbar vertebrae (L1–L5) supporting lower back weight, the triangular sacrum (5 fused vertebrae), and the tailbone coccyx (3–4 fused segments). Viewed from the side, the spine displays four natural curvatures: primary thoracic and sacral kyphoses that curve outward, and secondary cervical and lumbar lordoses that curve inward to align body center of mass over the pelvis.',
              'প্রাপ্তবয়স্কের মেরুদণ্ড ২৬টি অস্থির সমন্বয়ে গঠিত: ঘাড়ে ৭টি সারভাইকাল (C1–C7), পিঠে ১২টি থোরাসিক (T1–T12), কোমরে ৫টি লাম্বার (L1–L5), ৫টি জোড়া লাগা কশেরুকা নিয়ে গঠিত স্যাক্রাম এবং লেজের অংশে কক্সিক্স। পাশ থেকে দেখলে মেরুদণ্ডে চারটি স্বাভাবিক বাঁক দেখা যায়: থোরাসিক ও স্যাক্রাল অংশের উত্তল বক্রতা (কাইফোসিস) এবং ঘাড় ও কোমরের অবতল বক্রতা (লর্ডোসিস), যা দেহের ওজনকে সোজাভাবে পায়ের ওপর ধরে রাখতে সাহায্য করে।'
            ),
            l(
              'Between adjacent moving vertebrae sit specialized intervertebral discs. Each disc features a tough, fibrous outer ring of fibrocartilage termed the annulus fibrosus, which securely encloses a soft, highly hydrated gelatinous core called the nucleus pulposus. These discs act as hydraulic shock absorbers, cushioning axial forces generated during running, jumping, and lifting while permitting multidirectional spinal bending and axial twisting.',
              'দুটি কশেরুকার মাঝে থাকে স্থিতিস্থাপক ইন্টারভার্টিব্রাল ডিস্ক। প্রতিটি ডিস্কের বাইরে থাকে ফাইব্রাস রিং বা অ্যানুলাস ফাইব্রোসাস এবং ভেতরে থাকে জেলির মতো নিউক্লিয়াস পালপোসাস। এই ডিস্কগুলো প্রাকৃতিক হাইড্রোলিক শক-অ্যাবজরবার হিসেবে কাজ করে, যা হাঁটা, দৌড়ানো ও ওজন তোলার সময় মেরুদণ্ডের ওপর আসা তীব্র চাপ শোষণ করে এবং পিঠকে ডানে-বামে বাঁকাতে সাহায্য করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Thoracic Cage: Respiratory Pump and Visceral Shield', 'বক্ষপিঞ্জর: শ্বাসযন্ত্রের পাম্প ও অঙ্গের বর্ম'),
          paragraphs: [
            l(
              'The thoracic cage forms an expandable, semi-rigid skeletal basket comprising the anterior sternum, 12 thoracic vertebrae posteriorly, and 12 pairs of ribs with their intervening costal cartilages. The sternum consists of three fused parts: the superior manubrium, the elongated central body, and the small inferior xiphoid process. The junction between the manubrium and body forms a prominent palpable ridge termed the sternal angle of Louis, situated precisely at the level of the second rib and thoracic vertebrae T4–T5.',
              'বক্ষপিঞ্জর একটি খাঁচার মতো গঠন যা সামনে স্টার্নাম, পেছনে ১২টি থোরাসিক কশেরুকা এবং ১২ জোড়া পাঁজর ও তরুণাস্থি নিয়ে গঠিত। স্টার্নাম তিনটি অংশে বিভক্ত: ম্যানুব্রিয়াম, দেহ এবং জিফয়েড প্রসেস। ম্যানুব্রিয়াম ও দেহের সংযোগস্থলকে স্টার্নাল অ্যাঙ্গেল অব লুই বলা হয়, যা দ্বিতীয় পাঁজরের অবস্থান নির্দেশ করে এবং চিকিৎসাবিজ্ঞানে ফুসফুস ও হৃদ্‌পিণ্ডের বিভিন্ন পরীক্ষা করার প্রধান ল্যান্ডমার্ক হিসেবে ব্যবহৃত হয়।'
            ),
            l(
              'The 12 pairs of ribs are categorized by their anterior connections: true ribs (ribs 1–7) attach directly to the sternum through individual costal cartilages; false ribs (ribs 8–10) attach indirectly via the cartilage of the rib immediately above; and floating ribs (ribs 11–12) have no anterior attachment whatsoever, ending freely in the lateral abdominal musculature. During breathing, the ribs swing outward and upward like bucket handles, dynamically expanding thoracic volume to draw atmospheric air into the lungs.',
              '১২ জোড়া পাঁজর তাদের সামনের সংযোগের ভিত্তিতে তিন ভাগে বিভক্ত: প্রকৃত পাঁজর (১-৭) সরাসরি তরুণাস্থি দিয়ে স্টার্নামের সাথে যুক্ত থাকে; অপ্রকৃত পাঁজর (৮-১০) ওপরের পাঁজরের তরুণাস্থির মাধ্যমে পরোক্ষভাবে যুক্ত থাকে; এবং ভাসমান পাঁজর (১১-১২) সামনে কোনো কিছুর সাথেই যুক্ত না থেকে পেটের পেশীতে শেষ হয়। শ্বাস নেওয়ার সময় পাঁজরগুলো বালতির হাতলের মতো ওপরের দিকে উঠে বক্ষগহ্বরের আয়তন বাড়িয়ে ফুসফুসে বাতাস প্রবেশ করায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Worked Clinical Analysis: Skull Fractures and Vertebral Injury', 'ক্লিনিক্যাল বিশ্লেষণ: খুলির ফ্র্যাকচার ও মেরুদণ্ডের আঘাত'),
          paragraphs: [
            l(
              'Understanding axial osteology is essential for trauma diagnosis. At the lateral skull, the pterion marks an H-shaped junction where the frontal, parietal, sphenoid, and temporal bones meet. It represents the thinnest region of the lateral cranial vault, directly overlying the anterior branch of the middle meningeal artery. Blunt force impact to this site can fracture the bone and lacerate the artery, causing an epidural hematoma that rapidly compresses the brain.',
              'অক্ষীয় কঙ্কালের জ্ঞান জরুরি ট্রমা চিকিৎসায় অত্যন্ত গুরুত্বপূর্ণ। মাথার খুলির পাশে টেরিওন হলো এমন একটি স্থান যেখানে চারটি প্রধান অস্থি মিলিত হয়। এটি খুলির সবচেয়ে পাতলা অংশ এবং এর ঠিক নিচ দিয়ে মিডল মেনিনজিয়াল ধমনী প্রবাহিত হয়। এখানে ভোঁতা আঘাত লাগলে হাড় ভেঙে ধমনী ছিঁড়ে যেতে পারে, যার ফলে এপিডুরাল হেমাটোমা তৈরি হয়ে দ্রুত মস্তিষ্ককে চেপে ধরে এবং জরুরি অপারেশন ছাড়া রোগীর মৃত্যু হতে পারে।'
            ),
          ],
          bullets: [
            l('Check: What is a herniated disc, and why does it cause shooting pain down the leg? Answer: The outer annulus fibrosus ruptures, allowing the inner gelatinous nucleus pulposus to protrude and mechanically compress an adjacent spinal nerve root (radiculopathy / sciatica).', 'যাচাই: হার্নিয়েটেড ডিস্ক কী এবং কেন এর ফলে পায়ে তীব্র ব্যথা হয়? উত্তর: ডিস্কের বাইরের আবরণ ফেটে গিয়ে ভেতরের জেলি বের হয়ে পাশের স্পাইনাল স্নায়ুকে চেপে ধরে, যার ফলে সংশ্লিষ্ট স্নায়ু বরাবর পায়ে তীব্র ব্যথা ও অসাড়তা (সায়াটিকা) দেখা দেয়।'),
            l('Check: What makes cervical vertebra C1 (the atlas) unique? Answer: The atlas lacks a vertebral body and a spinous process, consisting of a delicate ring of bone with superior articular facets that cradle the occipital condyles to permit head nodding ("yes" movement).', 'যাচাই: প্রথম সারভাইকাল কশেরুকা (অ্যাটলাস)-র অনন্য বৈশিষ্ট্য কী? উত্তর: অ্যাটলাসের কোনো ভার্টিব্রাল বডি বা স্পাইনাস প্রসেস নেই; এটি একটি রিং-এর মতো অস্থি যা খুলির গোড়ার সাথে সন্ধি তৈরি করে মাথা ওপর-নিচ নাড়তে ("হ্যাঁ" বাচক গতি) সাহায্য করে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Axial Skeleton Key Takeaways and Glossary', 'অক্ষীয় কঙ্কালের মূল সারসংক্ষেপ ও শব্দকোষ'),
          paragraphs: [
            l(
              'The axial skeleton provides the central protective framework and kinetic foundation for the entire human body. The 8 neurocranial and 14 facial bones shield the brain and anchor the senses; the 26 articulated vertebral column segments absorb shock and safeguard the spinal cord while maintaining upright balance; and the 25 bones of the thoracic cage protect the cardiopulmonary viscera while powering respiration. Recognizing key cranial sutures, foramina, and vertebral landmarks is essential for clinical practice.',
              'অক্ষীয় কঙ্কাল সমগ্র মানবদেহের কেন্দ্রীয় সুরক্ষাপ্রাচীর এবং চলনের মূল ভিত্তি। এর ৮টি ক্রেনিয়াল ও ১৪টি ফেসিয়াল অস্থি মস্তিষ্ক ও জ্ঞানেন্দ্রিয় রক্ষা করে; ২৬টি কশেরুকা মেরুরজ্জু রক্ষা করে ও শরীরের ভারসাম্য বজায় রাখে; আর ২৫টি বক্ষপিঞ্জরের অস্থি হৃদ্‌পিণ্ড ও ফুসফুসকে সুরক্ষিত রেখে শ্বাসকার্যে শক্তি জোগায়। ক্রেনিয়াল সুচার, ছিদ্রপথ এবং কশেরুকার গঠন জানা যেকোনো স্বাস্থ্যসেবা পেশার জন্য অপরিহার্য।'
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
          heading: l('Embryology and Craniofacial Morphogenesis', 'করোটি ও অক্ষীয় কঙ্কালের ভ্রূণীয় উৎপত্তি'),
          paragraphs: [
            l(
              'The axial skeleton develops through two distinct osteogenic mechanisms: intramembranous ossification and endochondral ossification. The flat bones of the cranial vault (calvaria—frontal, parietal, squamosal portions of temporal and occipital) develop directly within embryonic mesenchymal membranes without a cartilaginous precursor. In contrast, the cranial base (chondrocranium—sphenoid, ethmoid, petrous temporal, basioccipital) and all post-cranial axial structures (vertebral column and ribs) form via endochondral replacement of an initial hyaline cartilage model derived from paraxial somitic mesoderm.',
              'অক্ষীয় কঙ্কাল দুটি প্রধান প্রক্রিয়ার মাধ্যমে গঠিত হয়: ইন্ট্রামেমব্রেনাস এবং এন্ডোকনড্রাল অস্থিভবন। মাথার খুলির ওপরের চ্যাপ্টা অস্থিগুলো (ফ্রন্টাল, প্যারাইটাল) কোনো তরুণাস্থি ছাড়াই সরাসরি মেসেনকাইমাল ঝিল্লি থেকে শক্ত হাড়ে রূপান্তরিত হয়। অন্যদিকে, করোটির তলদেশ এবং মেরুদণ্ড ও পাঁজরের সকল অস্থি প্রথমে সোমাইট থেকে তরুণাস্থির মডেল হিসেবে তৈরি হয় এবং পরে ধীরে ধীরে রক্তনালী প্রবেশের মাধ্যমে শক্ত অস্থিতে রূপান্তরিত হয়।'
            ),
            l(
              'Somites differentiate into sclerotomes, dermatomes, and myotomes. Sclerotomal mesenchyme undergoes a process of resegmentation to form the definitive vertebral column: the caudal half of one sclerotome fuses with the cranial half of the immediately subjacent sclerotome to construct each individual vertebral body. Consequently, intersegmental arteries cross over the middle of the vertebral bodies, while intervertebral spinal nerves emerge cleanly between adjacent vertebrae through the newly created intervertebral foramina.',
              'সোমাইটগুলো বিভাজিত হয়ে স্ক্লেরোটোম গঠন করে। স্ক্লেরোটোমগুলো রিসেগমেন্টেশন প্রক্রিয়ার মাধ্যমে পুনরায় জোড়া লেগে কশেরুকা তৈরি করে: একটি স্ক্লেরোটোমের পেছনের অংশ নিচের স্ক্লেরোটোমের সামনের অংশের সাথে জোড়া লেগে একেকটি কশেরুকা গঠন করে। এর ফলে মেরুদণ্ডের রক্তনালীগুলো কশেরুকার মাঝখান দিয়ে যায় এবং প্রতিটি স্পাইনাল স্নায়ু দুটি কশেরুকার মাঝখানের ছিদ্র দিয়ে সুন্দরভাবে বের হয়ে আসতে পারে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Cranial Base Foramina and Neurovascular Conduits', 'করোটির মেঝের ছিদ্রপথ ও রক্তনালী-স্নায়ুর বিস্তার'),
          paragraphs: [
            l(
              'The internal cranial base is divided into three stepped depressions: the anterior, middle, and posterior cranial fossae. The anterior cranial fossa supports the frontal lobes, featuring the perforated cribriform plate of the ethmoid bone transmitting olfactory nerve fibers (CN I) from the nasal mucosa. The middle cranial fossa cradles the temporal lobes and pituitary gland; it features the optic canal transmitting the optic nerve (CN II) and ophthalmic artery, the superior orbital fissure transmitting CN III, IV, V1, VI, and the foramen rotundum (CN V2), foramen ovale (CN V3), and foramen spinosum (middle meningeal artery).',
              'করোটির ভেতরের মেঝে তিনটি ধাপে বিভক্ত: অ্যান্টিরিয়র, মিডল এবং পোস্টেরিয়র ক্রেনিয়াল ফসা। অ্যান্টিরিয়র ফসায় এথময়েড অস্থির ছিদ্রযুক্ত প্লেট থাকে যা দিয়ে ঘ্রাণ স্নায়ু (CN I) মস্তিষ্কে পৌঁছায়। মিডল ফসায় অপটিক ক্যানেল (CN II), সুপিরিয়র অরবিটাল ফিসার (CN III, IV, V1, VI), ফোরামেন রোটান্ডাম (CN V2), ফোরামেন ওভেল (CN V3) এবং ফোরামেন স্পাইনোসাম (মিডল মেনিনজিয়াল ধমনী) অবস্থান করে।'
            ),
            l(
              'The deep posterior cranial fossa lodges the cerebellum, pons, and medulla oblongata. Its prominent apertures include the internal acoustic meatus transmitting the facial nerve (CN VII) and vestibulocochlear nerve (CN VIII), the jugular foramen transmitting the glossopharyngeal (CN IX), vagus (CN X), and accessory (CN XI) nerves alongside the internal jugular vein, the hypoglossal canal (CN XII), and the massive foramen magnum transmitting the brainstem, vertebral arteries, and spinal accessory roots.',
              'পোস্টেরিয়র ক্রেনিয়াল ফসাতে সেরিবেলাম ও ব্রেনস্টেম থাকে। এর প্রধান ছিদ্রপথগুলোর মধ্যে রয়েছে ইন্টারনাল অ্যাকোস্টিক মিয়েটাস (CN VII ও VIII), জুগুলার ফোরামেন (CN IX, X, XI এবং জুগুলার শিরা), হাইপোগ্লোসাল ক্যানেল (CN XII) এবং বিশাল ফোরামেন ম্যাগনাম যা দিয়ে মেডুলা মেরুরজ্জুতে রূপান্তরিত হয় এবং ভার্টিব্রাল ধমনী মস্তিষ্কে রক্ত সরবরাহ করতে প্রবেশ করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Specialized Vertebral Articulations: Craniovertebral Joints', 'ক্র্যানিওভার্টিব্রাল সন্ধি: অ্যাটলাস ও অ্যাক্সিসের অনন্য গতিবিদ্যা'),
          paragraphs: [
            l(
              'The junction between the skull and the superior cervical spine features two specialized synovial articulations: the atlanto-occipital joints and the atlanto-axial joints. The paired atlanto-occipital joints articulate the concave superior articular facets of C1 (atlas) with the convex occipital condyles flanking the foramen magnum. This configuration permits approximately 15 to 20 degrees of pure flexion and extension, colloquially known as the "yes" nodding motion, while restricting axial rotation.',
              'মাথার খুলি এবং ঘাড়ের প্রথম দুটি কশেরুকার সংযোগস্থলে দুটি বিশেষায়িত সাইনোভিয়াল সন্ধি বিদ্যমান: অ্যাটলান্টো-অক্সিপিটাল এবং অ্যাটলান্টো-অ্যাক্সিয়াল সন্ধি। অ্যাটলান্টো-অক্সিপিটাল সন্ধি অ্যাটলাসের ওপর খুলির অক্সিপিটাল কন্ডাইলকে বসিয়ে রাখে, যা মাথাকে ১৫ থেকে ২০ ডিগ্রি সামনে-পেছনে নাড়াতে ("হ্যাঁ" সূচক গতি) সাহায্য করে কিন্তু ঘোরানো প্রতিরোধ করে।'
            ),
            l(
              'The atlanto-axial complex consists of two lateral planar facet joints and a central pivot trochoid articulation between the odontoid process (dens) of C2 (axis) and the anterior arch of C1. The dens is secured against the anterior arch by the robust transverse ligament of the atlas. This pivot configuration allows approximately 45 degrees of horizontal cervical rotation to each side (the "no" head-shake movement), accounting for roughly 50% of total neck rotation.',
              'অ্যাটলান্টো-অ্যাক্সিয়াল সন্ধি C2 কশেরুকার ডেনস প্রসেস এবং C1 কশেরুকার মধ্যে একটি পিভট বা অক্ষীয় সন্ধি তৈরি করে। ট্রান্সভার্স লিগামেন্ট এই ডেনসকে শক্ত করে ধরে রাখে। এই চমৎকার পিভট কাঠামোর কারণেই আমরা মাথা দুই পাশে ৪৫ ডিগ্রি পর্যন্ত ঘোরাতে ("না" বাচক গতি) পারি, যা আমাদের ঘাড়ের মোট ঘূর্ণন গতির প্রায় অর্ধেক সম্পন্ন করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Biomechanical Kinematics of the Thoracic Cage and Diaphragm', 'বক্ষপিঞ্জর ও ডায়াফ্রামের বায়োমেকানিক্যাল ক্রিয়া'),
          paragraphs: [
            l(
              'Thoracic cage kinematics during ventilation depend upon dual-axis costovertebral articulations. The head of each rib articulates with adjacent demifacets on vertebral bodies (costocorporeal joint), while the rib tubercle articulates with the transverse process of the corresponding vertebra (costotransverse joint). In ribs 1 through 6, the axis of rotation runs transversely, producing an upward and forward projection of the anterior rib and sternum termed the "pump-handle" motion, which expands anteroposterior thoracic diameter.',
              'শ্বাস-প্রশ্বাসের সময় বক্ষপিঞ্জরের ওঠানামা পাঁজরের দ্বৈত অক্ষীয় সন্ধির ওপর নির্ভর করে। প্রতিটি পাঁজরের মাথা কশেরুকার দেহের সাথে এবং টিউবারকল ট্রান্সভার্স প্রসেসের সাথে সন্ধি তৈরি করে। ১ থেকে ৬ নম্বর পাঁজরে এই ঘূর্ণন অক্ষ আড়াআড়িভাবে থাকে, ফলে শ্বাস নেওয়ার সময় স্টার্নাম ও পাঁজর সামনের দিকে ওপরে উঠে আসে, যাকে "পাম্প-হ্যান্ডেল" গতি বলা হয়; এটি বুকের সামনের ও পেছনের ব্যাস বৃদ্ধি করে।'
            ),
            l(
              'In ribs 7 through 10, the axis of rotation shifts into an anteroposterior orientation. During inspiration, rib elevation causes the lateral shaft to swing outward away from the midline like the handle of a bucket, an action termed the "bucket-handle" motion that dramatically expands lateral transverse thoracic diameter. Simultaneously, contraction of the domed muscular diaphragm lowers its central tendon, expanding vertical thoracic height and creating subatmospheric negative intrapleural pressure that inflates the lungs.',
              '৭ থেকে ১০ নম্বর পাঁজরে ঘূর্ণন অক্ষ সামনে-পেছনে থাকে। শ্বাস গ্রহণের সময় এই পাঁজরগুলো পাশের দিকে প্রসারিত হয়ে বাইরের দিকে উঠে আসে, যাকে "বাকেট-হ্যান্ডেল" গতি বলা হয়; এটি বুকের দুই পাশের ব্যাস বৃদ্ধি করে। একই সময়ে ডায়াফ্রামের সংকোচন নিচের দিকে নেমে বুকের উচ্চতা বাড়িয়ে দেয়, ফলে ফুসফুসে ঋণাত্মক চাপ তৈরি হয়ে বাতাস ভেতরে প্রবেশ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Osteopathology: Fractures, Craniosynostosis, and Spinal Stenosis', 'ক্লিনিক্যাল প্যাথলজি: ফ্র্যাকচার, ক্র্যানিওসিনোস্টোসিস ও স্টেনোসিস'),
          paragraphs: [
            l(
              'Premature pathological fusion of cranial sutures in infants is termed craniosynostosis. Premature sagittal suture closure prevents lateral calvarial growth, forcing compensatory anteroposterior elongation to produce an elongated, boat-shaped skull termed scaphocephaly (dolichocephaly). Coronal suture synostosis yields an abnormally wide and short skull (brachycephaly). Early surgical suturectomy is required to prevent raised intracranial pressure and facilitate normal brain volume expansion.',
              'শিশুর মাথার খুলির অস্থিসন্ধিগুলো (সুচার) সময়ের আগেই জোড়া লেগে গেলে তাকে ক্র্যানিওসিনোস্টোসিস বলা হয়। স্যাজিটাল সুচার আগে জোড়া লেগে গেলে খুলি দুই পাশে বাড়তে না পেরে সামনে ও পেছনে লম্বা হয়ে নৌকার মতো আকার ধারণ করে (স্ক্যাফোসেফালি)। মস্তিষ্কের স্বাভাবিক বৃদ্ধি নিশ্চিত করতে এবং মাথার ভেতরের চাপ কমাতে সময়মতো সার্জারির মাধ্যমে এই সুচারগুলো কেটে আলাদা করা হয়।'
            ),
          ],
          bullets: [
            l('Assessment: A high-impact axial blow to the vertex of the skull causes burst fractures through the anterior and posterior arches of C1. What is this fracture named? Answer: A Jefferson burst fracture, which can disrupt the transverse ligament and destabilize the dens.', 'মূল্যায়ন: মাথার ওপর সরাসরি তীব্র আঘাতে C1 কশেরুকা ফেটে চার টুকরো হয়ে গেলে তাকে কী ফ্র্যাকচার বলে? উত্তর: জেফারসন বার্স্ট ফ্র্যাকচার, যা ট্রান্সভার্স লিগামেন্ট ছিঁড়ে ফেলে মেরুরজ্জুর জন্য মারাত্মক হুমকি সৃষ্টি করতে পারে।'),
            l('Assessment: Contrast lumbar disc herniation with lumbar central canal spinal stenosis. Answer: Disc herniation acutely impinges a specific exiting or traversing nerve root causing focal radiculopathy; spinal stenosis causes chronic, progressive concentric narrowing of the entire spinal canal by hypertrophied ligamentum flavum and facet osteophytes, precipitating neurogenic claudication relieved by lumbar flexion.', 'মূল্যায়ন: ডিস্ক হার্নিয়েশন ও লাম্বার স্পাইনাল স্টেনোসিসের ক্লিনিক্যাল পার্থক্য কী? উত্তর: ডিস্ক হার্নিয়েশনে নির্দিষ্ট একটি স্নায়ুমূল হঠাৎ সংকুচিত হয়ে তীব্র ব্যথা দেয়; আর স্পাইনাল স্টেনোসিসে পুরো মেরুনালী সরু হয়ে যাওয়ায় হাঁটার সময় উভয় পায়ে অবশ ভাব ও ক্লান্তি আসে যা একটু সামনের দিকে ঝুঁকলে কমে যায়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Academic Principles of Axial Skeletal Architecture', 'অক্ষীয় কঙ্কাল কাঠামোর মূল একাডেমিক নীতি'),
          paragraphs: [
            l(
              'The axial skeleton seamlessly balances rigid protection with dynamic biomechanical mobility. Intramembranous ossification creates the protective calvaria, while endochondral ossification builds the stepped cranial base, mobile vertebral column, and expandable thoracic basket. Cranial base foramina safeguard cranial nerves and cerebrovascular circulation; craniovertebral joints orchestrate head rotation; and dual-axis costovertebral joints power pulmonary ventilation. Structural failure across any of these elements precipitates devastating neurological, cardiovascular, or respiratory morbidity.',
              'অক্ষীয় কঙ্কাল দেহের গুরুত্বপূর্ণ অঙ্গের সুরক্ষা এবং গতিশীলতার মধ্যে এক অপূর্ব ভারসাম্য বজায় রাখে। ইন্ট্রামেমব্রেনাস প্রক্রিয়ায় খুলির ঢাকনা তৈরি হয়, আর এন্ডোকনড্রাল প্রক্রিয়ায় করোটির মেঝে, মেরুদণ্ড ও বক্ষপিঞ্জর গঠিত হয়। ক্রেনিয়াল ফোরামিনা স্নায়ু ও রক্তনালী রক্ষা করে; ঘাড়ের সন্ধি মাথা ঘোরায়; আর পাঁজরের সন্ধি শ্বাস-প্রশ্বাসে শক্তি জোগায়। এই কাঠামোর যেকোনো অংশে ত্রুটি মারাত্মক স্নায়বিক ও শ্বাসকষ্টজনিত জটিলতা সৃষ্টি করতে পারে।'
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
          heading: l('Frontiers in Spinal Biomechanics and Intervertebral Disc Regeneration', 'মেরুদণ্ডের বায়োমেকানিক্স ও ডিস্ক পুনর্গঠন গবেষণা'),
          paragraphs: [
            l(
              'Intervertebral disc degeneration (IVDD) represents the leading cause of global chronic low back disability, initiated by loss of hydrated glycosaminoglycans within the central nucleus pulposus. Senescent nucleus pulposus notochordal-like cells cease synthesizing aggrecan while increasing secretion of degradative matrix metalloproteinases (MMP-1, MMP-3, MMP-13) and ADAMTS aggrecanases, driven by pro-inflammatory cytokines TNF-alpha and IL-1beta. Reduced swelling pressure impairs intradiscal nutritional diffusion, leading to fissuring of the outer annulus fibrosus.',
              'ইন্টারভার্টিব্রাল ডিস্ক ক্ষয় বা ডিজেনারেশন বিশ্বব্যাপী কোমর ব্যথার প্রধান কারণ, যা নিউক্লিয়াস পালপোসের পানি ধারণকারী গ্লাইকোসামিনোগ্লাইকান হ্রাসের মাধ্যমে শুরু হয়। প্রদাহজনক সাইটোকাইন (TNF-আলফা, IL-১বিটা)-র প্রভাবে ম্যাট্রিক্স মেটালোপ্রোটিনেজ এনজাইম বেড়ে গিয়ে ডিস্কের কোলাজেন ও এগ্রিক্যান প্রোটিন নষ্ট করে ফেলে। এর ফলে ডিস্কের ভেতরের পুষ্টি ব্যাপন বাধাগ্রস্ত হয় এবং অ্যানুলাস ফেটে হার্নিয়েশন ঘটে।'
            ),
            l(
              'Frontier regenerative strategies are shifting beyond surgical decompression and fusion toward biological disc repair. Injectable thermosensitive hydrogels delivering autologous mesenchymal stem cells (MSCs) or induced pluripotent stem cell (iPSC)-derived notochordal progenitors are undergoing clinical trials. Concurrently, CRISPR-Cas9 epigenetic silencing targeting the inflammatory interleukin-1 receptor (IL-1R1) promoter is being evaluated to arrest catabolic matrix degradation and restore disc height in biomechanical animal models.',
              'আধুনিক চিকিৎসাবিজ্ঞান কেবল ডিস্ক কেটে ফেলা বা ফিউশন করার মধ্যে সীমাবদ্ধ না থেকে ডিস্ক পুনরুজ্জীবনের দিকে এগিয়ে যাচ্ছে। অটোলোগাস মেসেনকাইমাল স্টেম সেলযুক্ত বিশেষায়িত থার্মোসেন্সিটিভ হাইড্রোজেল ইনজেকশন এখন ক্লিনিক্যাল ট্রায়ালে রয়েছে। পাশাপাশি CRISPR প্রযুক্তির মাধ্যমে প্রদাহজনিত জিন নিষ্ক্রিয় করে ডিস্কের উচ্চতা ও স্থিতিস্থাপকতা ফিরিয়ে আনার উন্নত গবেষণা চলছে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Craniocervical Junction Instability and Advanced Surgical Navigation', 'ক্র্যানিওসারভাইকাল অস্থিরতা ও আধুনিক সার্জিক্যাল নেভিগেশন'),
          paragraphs: [
            l(
              'Pathological instability of the craniocervical junction (CCJ) arises in inflammatory arthritides such as rheumatoid arthritis, where chronic synovial pannus erodes the transverse ligament of the atlas and the odontoid peg. This precipitates atlanto-axial subluxation (AAS), defined radiologically by an anterior atlantodental interval (AADI) exceeding 3 mm in adults. Dynamic flexion cervical radiographs reveal anterior translation of C1, compressing the cervicomedullary junction and endangering cardiac and respiratory autonomic centers in the medulla oblongata.',
              'রিউমাটয়েড আর্থ্রাইটিসের মতো দীর্ঘস্থায়ী বাতের প্রদাহে অ্যাটলাসের ট্রান্সভার্স লিগামেন্ট এবং ডেনস প্রসেস ক্ষয় হয়ে ক্র্যানিওসারভাইকাল সংযোগস্থল অস্থিতিশীল হয়ে পড়ে। এতে অ্যাটলান্টো-অ্যাক্সিয়াল সাবলাক্সেশন (AAS) ঘটে যেখানে অ্যাটলাস ও ডেনসের দূরত্ব ৩ মিলিমিটারের বেশি বেড়ে যায়। মাথা সামনে ঝোঁকালে C1 স্থানচ্যুত হয়ে ব্রেনস্টেম ও মেরুরজ্জুর ওপর মারাত্মক চাপ ফেলে হৃদযন্ত্র ও শ্বাসক্রিয়া বন্ধ করে দিতে পারে।'
            ),
            l(
              'Modern surgical management employs posterior occipitocervical fusion or transarticular C1-C2 screw fixation guided by intraoperative O-arm 3D fluoroscopy and real-time optical tracking navigation. Precise pre-operative CT angiographic trajectory planning is mandatory to identify high-riding vertebral artery anomalies (present in up to 18% of patients), preventing catastrophic arterial laceration and posterior circulation cerebellar infarction during drill instrumentation.',
              'আধুনিক অস্ত্রোপচারে ত্রিমাত্রিক ফ্লোরোস্কোপি এবং অপটিক্যাল ট্র্যাকিং নেভিগেশনের সাহায্যে নিখুঁতভাবে স্ক্রু পরিয়ে খুলি ও ঘাড়ের প্রথম কশেরুকাগুলোকে জোড়া লাগানো হয়। অস্ত্রোপচারের আগে সিটি এনজিওগ্রামের মাধ্যমে ভার্টিব্রাল ধমনীর অস্বাভাবিক গতিপথ শনাক্ত করা অপরিহার্য, যাতে ড্রিল করার সময় ধমনী ছিঁড়ে গিয়ে মস্তিষ্কে রক্তক্ষরণ বা স্ট্রোক না ঘটে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible five-step schematic tracing axial skeletal organization: neurocranial vault protection, facial viscerocranial support, cervical-to-sacral vertebral column alignment, thoracic cage boundary, and weight transmission through the sacrum.',
      'অক্ষীয় কঙ্কাল বিন্যাসের ৫টি ধাপ: মস্তিষ্ক আধারের সুরক্ষা, মুখের অস্থির কাঠামো, সারভাইকাল থেকে স্যাক্রাম পর্যন্ত মেরুদণ্ডের সংগতি, বক্ষপিঞ্জরের বিস্তার এবং স্যাক্রামের মাধ্যমে দেহের ওজন পেলভিসে সঞ্চালন।'
    ),
    steps: [
      l(
        '1. The 8 neurocranial bones encase and shield the cerebral hemispheres and brainstem.',
        '১. ৮টি ক্রেনিয়াল অস্থি মস্তিষ্ক ও ব্রেনস্টেমকে মজবুতভাবে আবৃত করে রাখে।'
      ),
      l(
        '2. The 14 facial viscerocranial bones shape the features, anchor dentition, and form orbital and nasal cavities.',
        '২. ১৪টি ফেসিয়াল অস্থি চোখের কোটর, নাসাগহ্বর ও দাঁতের চোয়াল গঠন করে।'
      ),
      l(
        '3. 24 movable presacral vertebrae and intervertebral discs absorb axial shock and encase the spinal cord.',
        '৩. ২৪টি সচল কশেরুকা ও ডিস্ক যান্ত্রিক ঝাঁকুনি শোষণ করে মেরুরজ্জু রক্ষা করে।'
      ),
      l(
        '4. The 12 pairs of ribs and sternum form a semi-rigid thoracic cage powering respiratory ventilation.',
        '৪. ১২ জোড়া পাঁজর ও স্টার্নাম বক্ষপিঞ্জর গঠন করে শ্বাসক্রিয়ায় সহায়তা করে।'
      ),
      l(
        '5. The fused sacrum bridges the axial skeleton to the appendicular pelvic girdle, transmitting bipedal weight.',
        '৫. ৫টি সংযুক্ত কশেরুকা নিয়ে গঠিত স্যাক্রাম দেহের ওপরের অংশের ওজন দুই পায়ের পেলভিসে স্থানান্তরিত করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A blunt impact to the side of the head fractures the skull at the pterion. Which vascular structure directly underlying this landmark is most frequently torn, causing an acute epidural hematoma?',
      'মাথার পাশে টেরিওনে আঘাত লেগে হাড় ভেঙে গেলে কোন রক্তনালীটি সবচেয়ে বেশি ক্ষতিগ্রস্ত হয়ে তাৎক্ষণিক এপিডুরাল হেমাটোমা তৈরি করে?'
    ),
    options: [
      l('Anterior branch of the middle meningeal artery', 'মিডল মেনিনজিয়াল ধমনীর সম্মুখ শাখা (Anterior branch)'),
      l('Internal carotid artery', 'ইন্টারনাল ক্যারোটিড ধমনী'),
      l('Superior sagittal sinus', 'সুপিরিয়র স্যাজিটাল সাইনাস'),
      l('Vertebral artery', 'ভার্টিব্রাল ধমনী'),
    ],
    correctIndex: 0,
    explanation: l(
      'The pterion is the thin junction of the frontal, parietal, sphenoid, and temporal bones. The anterior branch of the middle meningeal artery courses in a groove on the internal calvarial surface directly beneath the pterion; fracture here frequently lacerates this artery, resulting in an arterial-pressure epidural hematoma.',
      'টেরিওন হলো মাথার খুলির সবচেয়ে পাতলা অংশ যেখানে চারটি অস্থি মিলিত হয়। এর ঠিক নিচ দিয়ে মিডল মেনিনজিয়াল ধমনীর সম্মুখ শাখা প্রবাহিত হয়; এখানে হাড় ভাঙলে এই ধমনী ছিঁড়ে গিয়ে উচ্চচাপের এপিডুরাল রক্তক্ষরণ ও হেমাটোমা তৈরি করে।'
    ),
  },
}
