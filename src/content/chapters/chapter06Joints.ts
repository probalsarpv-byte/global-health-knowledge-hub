import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch9',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 9: Joints',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/9-introduction',
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
  {
    id: 'guyton-hall-14e',
    authors: 'J. E. Hall, M. E. Hall',
    title: 'Guyton and Hall Textbook of Medical Physiology, 14th edition',
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/guyton-and-hall-textbook-of-medical-physiology/hall/978-0-323-59712-8',
  },
]

export const chapter06JointsLesson: LessonTopic = {
  id: 'topic.anatomy.joints',
  slug: 'joints',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('06 · Joints and Connective Tissues', '০৬ · সন্ধি ও সংযোজক টিস্যু'),
  summary: l(
    'A detailed anatomical and biomechanical examination of human articulations: structural classifications (fibrous, cartilaginous, synovial), synovial microarchitecture, kinematic degrees of freedom, joint stability, and clinical arthropathies.',
    'মানবদেহের অস্থিসন্ধির শারীরস্থানিক ও বায়োমেকানিক্যাল বিশদ পর্যালোচনা: গঠনগত শ্রেণিবিন্যাস (তন্তুময়, তরুণাস্থিময়, সাইনোভিয়াল), সাইনোভিয়াল অণুগঠন, চলনমাত্রা, সন্ধির স্থায়িত্ব এবং ক্লিনিক্যাল বাত ও আঘাতজনিত রোগ।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Classify human joints structurally into fibrous, cartilaginous, and synovial types, and functionally into synarthroses, amphiarthroses, and diarthroses.',
      'মানবদেহের সন্ধিগুলোকে গঠনগতভাবে তন্তুময়, তরুণাস্থিময় ও সাইনোভিয়ালে এবং কার্যকরভাবে অচঞ্চল, ঈষৎ সচল ও পূর্ণ সচল সন্ধিতে সঠিকভাবে শ্রেণিবিন্যাস করতে পারা।'
    ),
    l(
      'Analyze the microarchitectural components of a typical synovial joint, including hyaline articular cartilage, synovial membrane type A/B synoviocytes, lubricin, and fibrous capsular ligaments.',
      'হায়ালিন আর্টিকুলার তরুণাস্থি, সাইনোভিয়াল ঝিল্লির টাইপ এ/বি সাইনোভায়োসাইট, লুব্রিসিন এবং ফাইব্রাস ক্যাপসুলের লিগামেন্টসহ একটি সাধারণ সাইনোভিয়াল সন্ধির অণুগঠন বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Differentiate the kinematics of the six synovial joint configurations (plane, hinge, pivot, condyloid, saddle, ball-and-socket) and evaluate ligamentous injury mechanisms (e.g., ACL rupture, terrible triad).',
      'ছয় প্রকার সাইনোভিয়াল সন্ধির (সমতল, কবজা, পিভট, উপবৃত্তাকার, স্যাডেল, বল-ও-কোটর) চলনগতিবিদ্যা পৃথক করতে পারা এবং লিগামেন্ট ছিঁড়ে যাওয়ার মেকানিজম (যেমন এসিএল ও টেরিবল ট্রায়াড) মূল্যায়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.skeletal-appendicular'],
  relatedTopicIds: ['topic.anatomy.cells-tissues'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch9', 'moore-anatomy-9e'],
    structure: ['openstax-ap2e-ch9', 'junqueira-histology-16e'],
    mechanism: ['grays-anatomy-42e', 'openstax-ap2e-ch9'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'guyton-hall-14e'],
    takeaways: ['openstax-ap2e-ch9', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Joint Classification and Articular Biology', 'ভূমিকা: সন্ধির শ্রেণিবিন্যাস ও আর্টিকুলার জীববিজ্ঞান'), sectionId: 'introduction' },
      { id: 'sec-synovial', label: l('Synovial Microarchitecture and Tribology', 'সাইনোভিয়াল সন্ধির অণুগঠন ও ঘর্ষণহীন বিজ্ঞান'), sectionId: 'structure' },
      { id: 'sec-kinematics', label: l('Kinematic Classes and Degrees of Freedom', 'চলনগতির শ্রেণিবিভাগ ও স্বাধীনতার মাত্রা'), sectionId: 'mechanism' },
      { id: 'sec-stability', label: l('Articular Stability vs. Mobility Trade-Offs', 'সন্ধির স্থায়িত্ব বনাম গতিশীলতার ভারসাম্য'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Arthropathies and Ligament Traumatology', 'ক্লিনিক্যাল বাতব্যাধি ও লিগামেন্টের ট্রমাটোলজি'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary and Articular Terminology Glossary', 'সারসংক্ষেপ ও সন্ধি পরিভাষা শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Synovial Tribology & Boundary Lubrication', 'সাইনোভিয়াল ট্রাইবোলোজি ও বাউন্ডারি লুব্রিকেশন'),
        definition: l(
          'The specialized low-friction biomechanical regime of diarthrodial joints governed by hyaluronic acid, lubricin (PRG4), and surface-active phospholipids, achieving a friction coefficient (0.001) lower than polished ice.',
          'হায়ালুরোনিক অ্যাসিড, লুব্রিসিন এবং ফসফোলিপিডের মাধ্যমে সাইনোভিয়াল সন্ধির ঘর্ষণহীন চলন প্রক্রিয়া, যার ঘর্ষণ গুণাঙ্ক মসৃণ বরফের চেয়েও কম (০.০০১)।'
        ),
      },
      {
        term: l('Odonoghue Terrible Triad of the Knee', 'হাঁটুর ও’ডনোহিউ টেরিবল ট্রায়াড'),
        definition: l(
          'A catastrophic triad of knee injuries caused by combined lateral impact, valgus stress, and tibial external rotation, rupturing the anterior cruciate ligament (ACL), medial collateral ligament (MCL), and medial (or lateral) meniscus.',
          'হাঁটুতে বাইরের দিক থেকে তীব্র আঘাত ও মোচড়ের ফলে সৃষ্ট মারাত্মক ত্রিবিধ আঘাত, যার ফলে এসিএল, মিডিয়াল কোলেটারাল লিগামেন্ট এবং মেনিসকাস একসাথে ছিঁড়ে যায়।'
        ),
      },
      {
        term: l('Hilton Law of Joint Innervation', 'হিলটনের সন্ধি স্নায়ু সরবরাহ নীতি'),
        definition: l(
          'The anatomical principle stating that the nerve supplying a joint also innervates the muscles moving that joint and the skin overlying the attachments of those muscles.',
          'শারীরস্থানিক নীতি যা বলে যে স্নায়ুটি একটি সন্ধিকে সংবেদন দেয়, সেটিই সেই সন্ধি পরিচালনাকারী পেশীসমূহ এবং সংশ্লিষ্ট ত্বকেও স্নায়ু সংযোগ প্রদান করে।'
        ),
      },
      {
        term: l('Gomphosis & Periodontal Ligament', 'গমফোসিস ও পেরিওডন্টাল লিগামেন্ট'),
        definition: l(
          'A specialized peg-in-socket fibrous synarthrosis anchoring the roots of teeth within alveolar bone sockets of the maxilla and mandible via dense collagenous periodontal ligament fibers.',
          'একটি বিশেষায়িত তন্তুময় অচঞ্চল সন্ধি যা কোলাজেন তন্তুর পেরিওডন্টাল লিগামেন্টের সাহায্যে চোয়ালের অস্থিগহ্বরে দাঁতের শিকড়কে মজবুতভাবে আটকে রাখে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Evaluating Lachman Test Mechanics for Anterior Cruciate Ligament Rupture', 'এসিএল লিগামেন্ট ছেঁড়ার জন্য লাচম্যান পরীক্ষার মেকানিক্স মূল্যায়ন'),
        steps: [
          l('Step 1: Position the patient supine with the knee flexed to 20°–30°, eliminating muscular stabilization by hamstring and quadriceps tension.', 'ধাপ ১: রোগীকে চিৎ করে শুইয়ে হাঁটু ২০° থেকে ৩০° বাঁকা করুন, যাতে হ্যামস্ট্রিং ও কোয়াড্রিসেপস পেশীর টান শিথিল হয়ে সন্ধির নিজস্ব লিগামেন্ট স্পষ্ট হয়।'),
          l('Step 2: Stabilize the distal femur with one hand while applying an anterior translation force to the proximal tibia with the examiner’s other hand.', 'ধাপ ২: এক হাত দিয়ে ফিমারের নিচের প্রান্ত শক্ত করে ধরে রেখে অন্য হাত দিয়ে টিবিয়ার ওপরের প্রান্তকে সামনের দিকে টেনে আনুন।'),
          l('Step 3: Assess the quantitative anterior displacement (millimeter translation) and the qualitative tactile end-point (firm, distinct stop vs. soft, mushy endpoint).', 'ধাপ ৩: টিবিয়া কতটা সামনে সরে এলো (মিলিমিটার পরিমাপ) এবং থামার অনুভূতি (শক্ত লিগামেন্টের বাধা বনাম নরম স্পঞ্জের মতো ভেসে আসা) নিখুঁতভাবে পরখ করুন।'),
        ],
        conclusion: l('An anterior tibial translation exceeding 3–5 mm compared to the contralateral uninjured knee, accompanied by an absent or soft end-point, provides >95% sensitivity for complete anterior cruciate ligament disruption.', 'সুস্থ বিপরীত পায়ের তুলনায় ৩ থেকে ৫ মিলিমিটারের বেশি সামনে সরে আসা এবং শক্ত বাধার অনুপস্থিতি এসিএল লিগামেন্ট সম্পূর্ণ ছিঁড়ে যাওয়ার ৯৫% নিশ্চিত প্রমাণ দেয়।'),
      },
    ],
    checkpoints: [
      {
        question: l('Why does articular cartilage have virtually zero capacity for intrinsic self-repair following full-thickness mechanical injury?', 'গুরুতর আঘাতের পর আর্টিকুলার হায়ালিন তরুণাস্থির নিজস্ব নিরাময় ক্ষমতা প্রায় শূন্য কেন?'),
        answer: l('Because mature adult hyaline cartilage is completely avascular, aneural, and alymphatic; chondrocytes are entrapped within dense extracellular lacunae with low metabolic activity and cannot migrate to repair matrix defects, relying purely on passive solute diffusion from synovial fluid.', 'কারণ প্রাপ্তবয়স্কদের হায়ালিন তরুণাস্থিতে কোনো রক্তনালী, স্নায়ু বা লসিকানালী থাকে না; কনড্রোসাইট কোষগুলো নিশ্ছিদ্র মাতৃকার গহ্বরে বন্দি থাকে এবং রক্তপ্রবাহ না থাকায় কেবল সাইনোভিয়াল তরলের নিষ্ক্রিয় ব্যাপনের ওপর বেঁচে থাকে।'),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch06-joints-diagram',
    title: l('Interactive Synovial Joint Microarchitecture Schematic', 'ইন্টারেক্টিভ সাইনোভিয়াল সন্ধির অণুগঠন স্কিম্যাটিক'),
    description: l(
      'Explore the essential anatomical components that construct a low-friction synovial diarthrosis: articular cartilage, synovial membrane, fibrous capsule, and cushioning structures.',
      'ঘর্ষণহীন সচল সাইনোভিয়াল সন্ধির প্রধান শারীরস্থানিক উপাদানসমূহ পরীক্ষা করুন: আর্টিকুলার তরুণাস্থি, সাইনোভিয়াল ঝিল্লি, ফাইব্রাস ক্যাপসুল এবং কুশনকারী কাঠামো।'
    ),
    disclaimer: l(
      'Biomechanical schematic: select any joint compartment to inspect its cellular histology, lubricant biochemistry, mechanical damping, and pathological failure points.',
      'বায়োমেকানিক্যাল চিত্র: যেকোনো সন্ধি অংশ নির্বাচন করে এর কোষীয় বিন্যাস, পিচ্ছিলকারী বায়োকেমিস্ট্রি, অভিঘাত শোষণ এবং রোগজনিত জটিলতা পরীক্ষা করুন।'
    ),
    svgType: 'synovial-joint',
    items: [
      {
        id: 'articular-cartilage',
        label: l('Articular Cartilage & Subchondral Plate', 'আর্টিকুলার তরুণাস্থি ও সাবকনড্রাল অস্থি'),
        description: l(
          'Avascular, aneural hyaline cartilage (2–4 mm thick) covering bone ends. Composed of type II collagen arcade fibril networks and aggrecan proteoglycans that bind massive fluid volumes for hydrostatic load support.',
          'অস্থির প্রান্তে ২-৪ মিলিমিটার পুরু রক্তনালীহীন হায়ালিন তরুণাস্থির আবরণ। টাইপ-২ কোলাজেন ও এগ্রিক্যান প্রোটিন প্রচুর পানি ধরে রেখে হাইড্রোলিক শক-অ্যাবজর্বার হিসেবে কাজ করে।'
        ),
        details: l(
          'Divided into superficial tangential, middle transitional, deep radial, and calcified cartilage zones anchored to the rigid subchondral cortical bone plate.',
          'পৃষ্ঠীয়, মধ্যম, গভীর এবং ক্যালসিফাইড—এই চার স্তরে বিন্যস্ত যা নিচের শক্ত সাবকনড্রাল অস্থির সাথে তরুণাস্থিকে নোঙর করে রাখে।'
        ),
        sectionId: 'structure',
        color: '#bae6fd',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'synovial-membrane',
        label: l('Synovial Membrane & Cavity Fluid', 'সাইনোভিয়াল ঝিল্লি ও সন্ধি গহ্বরের তরল'),
        description: l(
          'Vascular inner lining of the joint capsule. Type A synoviocytes (macrophage-derived) clear cellular debris, while Type B synoviocytes (fibroblastic) synthesize hyaluronic acid and lubricin for viscous joint lubrication.',
          'সন্ধির ক্যাপসুলের ভেতরের রক্তনালীবহুল স্তর। টাইপ-এ কোষ বর্জ্য অপসারণ করে এবং টাইপ-বি কোষ হায়ালুরোনিক অ্যাসিড ও লুব্রিসিন তৈরি করে পিচ্ছিল তরল নিঃসরণ করে।'
        ),
        details: l(
          'Normal synovial fluid is clear, pale yellow, and highly viscous with <200 WBCs/mm³. Transudate from fenestrated synovial capillaries provides all nutrients to chondrocytes.',
          'স্বাভাবিক সাইনোভিয়াল তরল স্বচ্ছ ও ঘন পিচ্ছিল। রক্তনালীর আল্ট্রাফিল্ট্রেশন থেকে তৈরি হয়ে এটি তরুণাস্থির কোষগুলোতে অক্সিজেন ও পুষ্টি পৌঁছে দেয়।'
        ),
        sectionId: 'structure',
        color: '#fef08a',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'fibrous-capsule',
        label: l('Fibrous Capsule & Extracapsular Ligaments', 'ফাইব্রাস ক্যাপসুল ও সহায়ক লিগামেন্ট'),
        description: l(
          'Dense irregular connective tissue sleeve continuous with the periosteum of articulating bones. Heavily innervated with Ruffini and Pacinian mechanoreceptors for joint proprioception and protective reflexes.',
          'অস্থির পেরিঅস্টিয়ামের সাথে সংযুক্ত ঘন অনিয়মিত সংযোজক টিস্যুর খোলস। এতে প্রচুর সংবেদনশীল স্নায়ু থাকে যা মস্তিষ্কে সন্ধির অবস্থান ও নড়াচড়ার সংকেত পাঠায়।'
        ),
        details: l(
          'Reinforced by intrinsic capsular thickenings and distinct extrinsic ligaments (e.g., collateral ligaments) that prevent abnormal subluxation and define anatomical limits.',
          'ক্যাপসুলের নিজস্ব ও বাইরের শক্ত লিগামেন্ট দ্বারা সুরক্ষিত, যা সন্ধিকে স্থানচ্যুত হতে দেয় না এবং নিরাপদ নড়াচড়ার সীমা নির্ধারণ করে।'
        ),
        sectionId: 'mechanism',
        color: '#fed7aa',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'menisci-bursae',
        label: l('Articular Menisci & Cushioning Bursae', 'আর্টিকুলার মেনিসকাস ও প্রতিরক্ষামূলক বার্সা'),
        description: l(
          'Specialized accessory fibrocartilage pads (menisci, labra) that deepen shallow sockets and spread load, accompanied by fluid-filled synovial bursae that prevent tendon friction against bone.',
          'বিশেষায়িত ফাইব্রোকার্টিলেজের তৈরি মেনিসকাস ও ল্যাব্রাম যা অগভীর সন্ধিকে গভীর করে এবং পিচ্ছিল বার্সা যা হাড়ের সাথে টেন্ডনের ঘর্ষণ প্রতিরোধ করে।'
        ),
        details: l(
          'Menisci in the knee disperse 50%–70% of axial load across the tibial plateau. Peripheral vascular zone (red-red) has healing capacity, whereas the avascular central zone (white-white) does not.',
          'হাঁটুর মেনিসকাস মোট ওজনের ৫০-৭০% চাপ সুষমভাবে ছড়িয়ে দেয়। এর বাইরের রক্তনালীযুক্ত অংশে নিরাময় সম্ভব হলেও ভেতরের রক্তহীন অংশে নিরাময় হয় না।'
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
          heading: l('Introduction: Joint Classification and Articular Biology', 'ভূমিকা: সন্ধির শ্রেণিবিন্যাস ও আর্টিকুলার জীববিজ্ঞান'),
          paragraphs: [
            l(
              'A joint, or articulation, is any junction between two or more bones, bone and cartilage, or teeth and bone. Joints provide two complementary functions: they bind the skeletal elements together into a cohesive architectural whole, and they provide mobile fulcrums that allow muscular contractions to produce dynamic body movement. Joint mechanics are governed by an inverse relationship: joints with the greatest mobility (such as the shoulder) have the least intrinsic stability, whereas joints with maximal stability (such as cranial sutures) permit no movement.',
              'একটি সন্ধি বা জয়েন্ট হলো দুই বা ততোধিক অস্থির মিলনস্থল, যেখানে অস্থি ও তরুণাস্থি বা দাঁত ও চোয়ালের সংযোগ ঘটে। সন্ধি দুটি প্রধান কাজ করে: এটি সমস্ত অস্থিকে একত্র করে একটি মজবুত কাঠামো গঠন করে, এবং পেশীর সংকোচনে দেহকে সচল করার জন্য লিভারের ভিত্তি হিসেবে কাজ করে। সন্ধির একটি মূল নিয়ম হলো: যে সন্ধির নড়াচড়ার ক্ষমতা যত বেশি (যেমন কাঁধের সন্ধি), তার নিজস্ব স্থায়িত্ব তত কম; পক্ষান্তরে যার স্থায়িত্ব সর্বোচ্চ (যেমন মাথার খুলির জোড়া), তা একেবারেই নড়তে পারে না।'
            ),
            l(
              'Joints are classified structurally according to the material binding the bones and whether a joint cavity is present: fibrous joints (united by dense fibrous connective tissue, lacking a cavity), cartilaginous joints (united by hyaline or fibrocartilage, lacking a cavity), and synovial joints (separated by a fluid-filled synovial joint cavity). Functionally, joints are categorized as synarthroses (immovable), amphiarthroses (slightly movable), and diarthroses (freely movable).',
              'গঠনগতভাবে সন্ধি তিন প্রকার: তন্তুময় সন্ধি (ঘন তন্তু দ্বারা যুক্ত, কোনো গহ্বর নেই), তরুণাস্থিময় সন্ধি (হায়ালিন বা ফাইব্রোকার্টিলেজ দ্বারা যুক্ত, কোনো গহ্বর নেই), এবং সাইনোভিয়াল সন্ধি (তরলে পূর্ণ গহ্বরযুক্ত)। কাজের দিক থেকে এরা আবার অচঞ্চল (Synarthrosis), ঈষৎ সচল (Amphiarthrosis) এবং পূর্ণ সচল (Diarthrosis) সন্ধি হিসেবে পরিচিত।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Synovial Microarchitecture and Tribology', 'সাইনোভিয়াল সন্ধির অণুগঠন ও ঘর্ষণহীন বিজ্ঞান'),
          paragraphs: [
            l(
              'Synovial joints are diarthrodial articulations enclosed by a dual-layered articular capsule. The outer fibrous capsule consists of dense irregular connective tissue continuous with the bone periosteum, protecting the joint against tensile forces. The inner synovial membrane is a delicate, vascular connective tissue layer that lines all non-articular surfaces within the joint capsule, actively secreting synovial fluid into the joint cavity.',
              'সাইনোভিয়াল সন্ধি হলো পূর্ণ সচল সন্ধি যা একটি দ্বিস্তরযুক্ত আর্টিকুলার ক্যাপসুল দ্বারা আবৃত থাকে। বাইরের তন্তুময় স্তরটি অস্থির পেরিঅস্টিয়ামের সাথে অবিচ্ছিন্ন থেকে সন্ধিকে ছিঁড়ে যাওয়া থেকে রক্ষা করে। ভেতরের সাইনোভিয়াল ঝিল্লিটি একটি অত্যন্ত সংবেদনশীল রক্তনালীবহুল স্তর, যা সন্ধির ভেতরের সমস্ত পৃষ্ঠকে আবৃত রাখে এবং অবিচ্ছিন্নভাবে সাইনোভিয়াল তরল নিঃসরণ করে।'
            ),
            l(
              'Articulating bone surfaces are capped by smooth hyaline articular cartilage (typically 2 to 4 mm thick). Articular cartilage is completely avascular and lacks a perichondrium; it relies entirely upon diffusion of nutrients and oxygen from the synovial fluid, which is pumped into and out of the porous cartilage matrix by the alternating compression and relaxation cycles of normal joint loading during physical movement.',
              'সন্ধির মিলনস্থলে অস্থির প্রান্তে মসৃণ হায়ালিন তরুণাস্থির আবরণ থাকে (সাধারণত ২ থেকে ৪ মিলিমিটার পুরু)। এই তরুণাস্থিতে কোনো রক্তনালী বা স্নায়ু থাকে না; এটি কেবল সাইনোভিয়াল তরল থেকে ব্যাপন প্রক্রিয়ায় অক্সিজেন ও পুষ্টি গ্রহণ করে। চলাচলের সময় সন্ধিতে চাপ পড়া ও শিথিল হওয়ার ছন্দবদ্ধ প্রক্রিয়ায় স্পঞ্জের মতো এই তরল তরুণাস্থির ভেতরে প্রবেশ করে এবং বের হয়ে আসে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Kinematic Classes and Degrees of Freedom', 'চলনগতির শ্রেণিবিভাগ ও স্বাধীনতার মাত্রা'),
          paragraphs: [
            l(
              'Synovial joints are classified into six distinct structural shapes that determine their allowed planes of motion (degrees of freedom). Plane joints (e.g. intercarpal joints) permit nonaxial gliding. Hinge joints (e.g. elbow, interphalangeal joints) permit uniaxial flexion and extension. Pivot joints (e.g. atlantoaxial and proximal radioulnar joints) permit uniaxial rotation around a central longitudinal axis.',
              'সাইনোভিয়াল সন্ধিগুলোর মিলনপৃষ্ঠের আকারের ওপর ভিত্তি করে এদের ছয় ভাগে ভাগ করা হয়, যা এদের নড়াচড়ার মাত্রা নির্ধারণ করে। সমতল সন্ধি (যেমন কব্জির ভেতরের সন্ধি) কেবল পিছলে যাওয়ার গতি দেয়। কবজা সন্ধি (যেমন কনুই বা আঙুলের সন্ধি) দরজার কবজার মতো ভাঁজ হওয়া ও সোজা হওয়ার একমুখী গতি দেয়। পিভট সন্ধি (যেমন ঘাড়ের প্রথম দুই কশেরুকার সংযোগ) একটি অক্ষকে কেন্দ্র করে ঘোরার সুযোগ দেয়।'
            ),
            l(
              'Condyloid joints (e.g. metacarpophalangeal knuckle joints) permit biaxial movement (flexion, extension, abduction, adduction). Saddle joints (e.g. first carpometacarpal joint of the thumb) are biaxial joints featuring reciprocal concave and convex articular surfaces, enabling circumduction and true opposition. Ball-and-socket joints (e.g. glenohumeral shoulder and acetabulofemoral hip joints) are multiaxial spheroidal joints allowing free motion across all three perpendicular spatial planes.',
              'উপবৃত্তাকার বা কনডাইলয়েড সন্ধি (যেমন আঙুলের গোড়ার সন্ধি) দ্বিমুখী নড়াচড়া দেয় (ভাঁজ হওয়া, সোজা হওয়া ও পাশে ছড়ানো)। স্যাডেল সন্ধি (যেমন বৃদ্ধাঙ্গুলের গোড়ার সন্ধি) অবতল ও উত্তল পৃষ্ঠের সংযোগের মাধ্যমে বৃদ্ধাঙ্গুলকে অন্য আঙুলের বিপরীতে স্পর্শ করার বিশেষ ক্ষমতা দেয়। বল-ও-কোটর সন্ধি (যেমন কাঁধ ও নিতম্বের সন্ধি) ত্রিমাত্রিক তলে যেকোনো দিকে স্বাধীনভাবে ঘোরার সর্বোচ্চ ক্ষমতা প্রদান করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Articular Stability vs. Mobility Trade-Offs', 'সন্ধির স্থায়িত্ব বনাম গতিশীলতার ভারসাম্য'),
          paragraphs: [
            l(
              'Joint stability depends on three interdependent factors: the shape and congruency of articular surfaces, the arrangement and strength of stabilizing ligaments, and muscle tone spanning the joint. Muscle tone is generally the most vital active stabilizing force: tendons crossing the joint act as dynamic dynamic tension bands that pull articulating surfaces together during motion.',
              'একটি সন্ধির স্থায়িত্ব তিনটি বিষয়ের ওপর নির্ভরশীল: অস্থির মিলনপৃষ্ঠের আকৃতি ও গভীরতা, চারপাশের লিগামেন্টের শক্তি, এবং সংশ্লিষ্ট পেশীর স্বাভাবিক টান বা পেশীটোন। এর মধ্যে পেশীটোন হলো সবচেয়ে গুরুত্বপূর্ণ সক্রিয় সুরক্ষাকবচ: সন্ধির ওপর দিয়ে যাওয়া পেশীর টেন্ডনগুলো নড়াচড়ার সময় অস্থির প্রান্তগুলোকে শক্ত করে ধরে রেখে স্থানচ্যুতি ঠেকায়।'
            ),
            l(
              'Contrast the glenohumeral (shoulder) joint with the acetabulofemoral (hip) joint. The shoulder prioritizes mobility: its shallow glenoid cavity covers only one-third of the humeral head, relying on the rotator cuff muscles for dynamic stability, making it prone to anterior dislocation. In contrast, the hip sacrifices extreme range of motion for weight-bearing stability: its deep bony acetabulum and dense iliofemoral ligament securely encapsulate the femoral head, resisting hundreds of kilograms of axial force.',
              'কাঁধের সন্ধি এবং নিতম্বের সন্ধির মধ্যে তুলনা করলে এই বৈপরীত্য স্পষ্ট হয়। কাঁধ গতিশীলতাকে প্রাধান্য দেয়: অগভীর গ্লেনয়েড গহ্বর হিউমেরাসের গোল মাথার মাত্র এক-তৃতীয়াংশ ধরে রাখতে পারে এবং রোটেটর কাফ পেশীর ওপর নির্ভরশীল হওয়ায় এটি সহজে স্থানচ্যুত হয়। পক্ষান্তরে নিতম্বের সন্ধি চলাচলের ব্যাপ্তি কমিয়ে গভীর অ্যাসিটাবুলাম ও অত্যন্ত শক্ত ইলিয়োফিমোরাল লিগামেন্টের সাহায্যে ফিমারকে আটকে রাখে, যা শত শত কেজি শারীরিক চাপ সহ্য করতে সক্ষম।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Arthropathies and Ligament Traumatology', 'ক্লিনিক্যাল বাতব্যাধি ও লিগামেন্টের ট্রমাটোলজি'),
          paragraphs: [
            l(
              'Pathology in synovial joints is divided into degenerative, inflammatory, metabolic, and traumatic etiologies. Osteoarthritis (OA) is a non-inflammatory progressive mechanical wear of articular cartilage marked by joint space narrowing, subchondral bone sclerosis, and osteophyte formation. Rheumatoid arthritis (RA) is an autoimmune systemic disorder where chronic inflammatory synovitis leads to synovial hypertrophy (pannus), which invades and enzymatically destroys cartilage and bone.',
              'সাইনোভিয়াল সন্ধির রোগগুলোকে ক্ষয়জনিত, প্রদাহজনিত, বিপাকীয় এবং আঘাতজনিত ভাগে ভাগ করা হয়। অস্টিওআর্থ্রাইটিস হলো অতিরিক্ত ব্যবহারজনিত তরুণাস্থির ক্ষয়, যার ফলে সন্ধির ফাঁকা স্থান কমে যায় এবং হাড়ে বাড়তি কাঁটার মতো অস্টিওফাইট সৃষ্টি হয়। রিউমাটয়েড আর্থ্রাইটিস হলো একটি অটোইমিউন রোগ যেখানে সাইনোভিয়াল ঝিল্লিতে দীর্ঘস্থায়ী প্রদাহের ফলে প্যানাস নামক ক্ষতিকারক টিস্যু তৈরি হয়ে তরুণাস্থি ও অস্থি গলিয়ে ফেলে।'
            ),
            l(
              'Traumatic knee ligament injuries frequently involve the anterior cruciate ligament (ACL), which prevents anterior translation of the tibia relative to the femur. High-velocity pivoting or hyperextension during sports tears the ACL, accompanied by a pathognomonic "pop" sensation and rapid hemarthrosis (bleeding into the joint). Physical examination relies on the Lachman test and anterior drawer test to assess mechanical laxity.',
              'হাঁটুর লিগামেন্টের গুরুতর আঘাতের মধ্যে এসিএল (ACL) ছিঁড়ে যাওয়া অন্যতম, যা ফিমারের তুলনায় টিবিয়ার অতিরিক্ত সামনে সরে যাওয়া প্রতিরোধ করে। খেলাধুলার সময় হঠাৎ পা আটকে গিয়ে মোচড় খেলে শব্দ করে এসিএল ছিঁড়ে যায় এবং কয়েক ঘণ্টার মধ্যে সন্ধির ভেতরে রক্ত জমে হাঁটু ফুলে যায়। লাচম্যান পরীক্ষার মাধ্যমে অভিজ্ঞ চিকিৎসক এই লিগামেন্টের অকার্যকারিতা নির্ভুলভাবে নির্ণয় করেন।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary and Articular Terminology Glossary', 'সারসংক্ষেপ ও সন্ধি পরিভাষা শব্দকোষ'),
          paragraphs: [
            l(
              'Articulations embody dynamic engineering solutions that resolve the physical compromise between structural rigidity and kinetic freedom. Synovial joints achieve frictionless motion through the combined action of fluid-secreting synoviocytes, highly hydrated articular cartilage, and precision ligamentous guides. Understanding joint classifications, kinematics, and the neurological distribution dictated by Hilton law provides the foundation for orthopedic diagnosis, arthroplasty surgery, and rehabilitation biomechanics.',
              'মানবদেহের অস্থিসন্ধি কাঠামোগত দৃঢ়তা এবং অবাধ নড়াচড়ার মধ্যকার এক অপূর্ব প্রকৌশলগত ভারসাম্য। সাইনোভিয়াল তরল, পানিভরা আর্টিকুলার তরুণাস্থি এবং শক্ত লিগামেন্টের সমন্বয়ে সাইনোভিয়াল সন্ধি ঘর্ষণহীন গতিশীলতা নিশ্চিত করে। সন্ধির বিভিন্ন শ্রেণিবিভাগ, বায়োমেকানিক্স এবং হিলটনের স্নায়ু সরবরাহ নীতি জানা অর্থোপেডিক চিকিৎসা, কৃত্রিম সন্ধি প্রতিস্থাপন এবং ফিজিওথেরাপি পুনর্বাসনের মৌলিক ভিত্তি।'
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
          heading: l('Articular Morphogenesis and Interzone Chondrogenesis', 'সন্ধির বিকাশ ও ইন্টারজোন কনড্রোজেনেসিস'),
          paragraphs: [
            l(
              'Embryological development of synovial joints is initiated during the sixth postovulatory week within the continuous mesenchymal blastema of developing limb cartilaginous models. The process is governed by the formation of an articular interzone, a specialized three-layered condensation of non-chondrogenic mesenchyme. Downregulation of chondrogenic transcription factor Sox9 and local upregulation of Wnt14 (Wnt9a) and Gdf5 signaling arrest cartilage matrix production at the prospective joint site.',
              'ভ্রূণের ষষ্ঠ সপ্তাহে হাত ও পায়ের অবিচ্ছিন্ন মেসেনকাইমাল তরুণাস্থি কাঠামোর মধ্যে সাইনোভিয়াল সন্ধির বিকাশ শুরু হয়। এই প্রক্রিয়াটি একটি বিশেষায়িত তিন স্তরবিশিষ্ট ইন্টারজোনের মাধ্যমে পরিচালিত হয়। সন্ধি গঠনের স্থানে তরুণাস্থি তৈরির প্রধান জিন Sox9 নিষ্ক্রিয় হয় এবং Wnt14 ও Gdf5 প্রোটিন সংকেতের প্রভাবে কোষগুলোর তরুণাস্থি তৈরি বন্ধ হয়ে সেখানে সন্ধি গহ্বর তৈরির প্রস্তুতি সম্পন্ন হয়।'
            ),
            l(
              'Cavitation occurs as central interzone cells undergo regulated apoptosis and synthesis of high-molecular-weight hyaluronan, drawing water and generating mechanical cleavage spaces that coalesce into the definitive synovial cavity. Mechanical muscular twitches in utero generated by developing fetal neuromuscular units are strictly obligatory for continuous joint cavitation; in neuromuscular paralytic conditions, joint cavities fail to form and undergo fibrous or cartilaginous ankylosis.',
              'ইন্টারজোনের মধ্যবর্তী কোষগুলোর সুনিয়ন্ত্রিত বিনাশ এবং উচ্চ-আণবিক হায়ালুরোনিক অ্যাসিড তৈরির মাধ্যমে পানি শোষিত হয়ে একটি ফাঁকা গহ্বরের সৃষ্টি হয়। গর্ভাশয়ে ভ্রূণের নড়াচড়া ও পেশীর টান এই সন্ধি গহ্বর উন্মুক্ত করার জন্য অপরিহার্য; ভ্রূণের পেশী অচল থাকলে এই গহ্বর তৈরি হতে ব্যর্থ হয় এবং জন্মের আগেই সন্ধিগুলো জোড়া লেগে অসচল (অ্যাঙ্কাইলোসিস) হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Ultrastructure of Articular Cartilage and Synovial Fluid Rheology', 'আর্টিকুলার তরুণাস্থির অণুগঠন ও সাইনোভিয়াল তরলের রিওলজি'),
          paragraphs: [
            l(
              'Hyaline articular cartilage exhibits an anisotropic four-zone architectural hierarchy. In the superficial tangential zone (10%–20% of thickness), densely packed type II and type IX collagen fibrils orient parallel to the articular surface, offering maximal resistance to shear stress. In the middle transitional zone (40%–60%), collagen fibrils are randomly woven around rounded chondrocytes surrounded by high concentrations of aggrecan proteoglycans.',
              'হায়ালিন আর্টিকুলার তরুণাস্থি চারটি ভিন্নধর্মী স্তরে বিন্যস্ত। পৃষ্ঠীয় স্তরে (১০-২০% পুরুত্ব) ঘনভাবে সাজানো টাইপ-২ কোলাজেন তন্তুগুলো সন্ধিপৃষ্ঠের সমান্তরালে অবস্থান করে আড়াআড়ি ঘর্ষণজনিত চাপ সফলভাবে প্রতিরোধ করে। মধ্যম স্তরে (৪০-৬০%) কোলাজেন তন্তুগুলো এলোমেলোভাবে জালিকার মতো বিন্যস্ত থাকে এবং গোলাকার কনড্রোসাইট কোষের চারপাশে প্রচুর এগ্রিক্যান প্রোটিন পানি ধরে রাখে।'
            ),
            l(
              'In the deep radial zone (roughly 30%), thick collagen bundles orient perpendicular to the joint surface, anchoring across the tidemark into the calcified cartilage zone, which interlocks mechanically with the subchondral bone. Proteoglycan aggrecan monomers attach to hyaluronic acid backbones via link proteins, creating a high negative fixed charge density (FCD) from sulfate and carboxylate groups that generates massive osmotic swelling pressure, resisting compressive loads up to 15–20 MPa.',
              'গভীর স্তরে (প্রায় ৩০%) মোটা কোলাজেন তন্তুগুলো উল্লম্বভাবে নিচে নেমে টাইডমার্ক অতিক্রম করে ক্যালসিফাইড তরুণাস্থির মধ্য দিয়ে সাবকনড্রাল অস্থির সাথে তরুণাস্থিকে নোঙর করে রাখে। এগ্রিক্যান প্রোটিনের নেতিবাচক সালফেটের টান অস্মোটিক প্রক্রিয়ায় প্রচুর পানি টেনে রাখে, যা হাঁটা বা লাফানোর সময় ১৫ থেকে ২০ মেগাপ্যাসকেল পর্যন্ত প্রচণ্ড যান্ত্রিক চাপ সহজেই প্রতিরোধ করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Biomechanics of Joint Tribology and Boundary Lubrication', 'সন্ধির ট্রাইবোলোজি ও বাউন্ডারি লুব্রিকেশনের বলবিদ্যা'),
          paragraphs: [
            l(
              'Synovial joint tribology relies on a biphasic, multimode lubrication mechanism. Under rapid cyclic loading, fluid-film (elastohydrodynamic) lubrication dominates: interstitial water is pressurized within the cartilage pores, exuding into the joint space under compression to support over 90% of the normal contact force, separating the opposing surfaces with a microscopic fluid cushion.',
              'সাইনোভিয়াল সন্ধির ঘর্ষণহীন বিজ্ঞান একটি দ্বি-পর্যায়ের বিশেষায়িত ব্যবস্থার ওপর নির্ভর করে। দ্রুত হাঁটার সময় ইলাস্টোহাইড্রোডাইনামিক লুব্রিকেশন কার্যকর হয়: তরুণাস্থির ভেতরের পানি অতিরিক্ত চাপে সন্ধির মাঝে বেরিয়ে এসে ৯০ শতাংশেরও বেশি ভর সরাসরি নিজের ওপর তুলে নেয় এবং দুই হাড়ের মধ্যকার পৃষ্ঠকে কোনো স্পর্শ ছাড়াই আলাদা রাখে।'
            ),
            l(
              'Under high sustained stationary loads where interstitial fluid exudation ceases, boundary lubrication takes over. Boundary lubricant molecules—primarily lubricin (proteoglycan 4, encoded by PRG4) and surface-active phospholipids—bind tenaciously to superficial cartilage layers via their terminal domains, forming a monomolecular sacrificial boundary that prevents direct asperity-to-asperity contact and minimizes friction and wear down to coefficients as low as 0.001 to 0.005.',
              'একটানা দাঁড়িয়ে থাকার মতো ভারী স্থির চাপে যখন পানি বের হওয়া বন্ধ হয়ে যায়, তখন বাউন্ডারি লুব্রিকেশন কার্যকর হয়। লুব্রিসিন (PRG4 প্রোটিন) এবং বিশেষ ফসফোলিপিড তরুণাস্থির ওপরের স্তরে শক্তভাবে লেগে থেকে একটি পাতলা আণবিক প্রতিরক্ষামূলক স্তর তৈরি করে, যা হাড়ের সরাসরি ঘর্ষণ পুরোপুরি আটকে দিয়ে ঘর্ষণ গুণাঙ্ক ০.০০১-এর মতো অবিশ্বাস্য সর্বনিম্ন মাত্রায় নামিয়ে আনে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Cruciate Ligament Kinematics and Rotational Stability of the Knee', 'হাঁটুর ক্রুসিয়েট লিগামেন্টের গতিবিদ্যা ও ঘূর্ণন স্থায়িত্ব'),
          paragraphs: [
            l(
              'The cruciate ligaments of the knee represent an intracapsular yet extrasynovial kinematic cross-linkage that controls anteroposterior translation and internal-external axial rotation. The anterior cruciate ligament (ACL) consists of two functional bundles named for their tibial insertion points: the anteromedial bundle (AMB) and the posterolateral bundle (PLB). During knee flexion, the AMB tightens while the PLB relaxes; during terminal extension, the PLB tightens to provide primary rotational stability.',
              'হাঁটুর ক্রুসিয়েট লিগামেন্ট দুটি ক্যাপসুলের ভেতরে কিন্তু সাইনোভিয়াল ঝিল্লির বাইরে অবস্থিত একটি আড়াআড়ি বায়োমেকানিক্যাল বন্ধন, যা টিবিয়ার সামনে-পেছনে এবং চারপাশে ঘূর্ণন নিয়ন্ত্রণ করে। এসিএল দুটি পৃথক বান্ডিল নিয়ে গঠিত: অ্যান্টেরোমিডিয়াল ও পোস্টেরোল্যাটেরাল বান্ডিল। হাঁটু ভাঁজ করলে অ্যান্টেরোমিডিয়াল বান্ডিল টানটান হয় এবং সোজা করার সময় পোস্টেরোল্যাটেরাল বান্ডিল শক্ত হয়ে ঘূর্ণন প্রতিরোধ করে।'
            ),
            l(
              'The posterior cruciate ligament (PCL) is roughly twice as strong as the ACL and prevents posterior displacement of the tibia on the femur. The "screw-home mechanism" is an obligatory kinematic coupling occurring during the final 30° of knee extension, wherein the tibia externally rotates roughly 10° relative to the femur (due to the larger articular surface of the medial femoral condyle), locking the knee in full extension to permit effortless bipedal standing without active quadriceps work.',
              'পোস্টেরিয়র ক্রুসিয়েট লিগামেন্ট (PCL) এসিএল-এর চেয়ে প্রায় দ্বিগুণ শক্তিশালী এবং টিবিয়াকে পেছনে পিছলে যেতে দেয় না। হাঁটু পুরোপুরি সোজা করার শেষ ৩০ ডিগ্রিতে "স্ক্রু-হোম মেকানিজম" নামের এক বিশেষায়িত ঘূর্ণন ঘটে, যেখানে ভেতরের ফিমারের প্রশস্ততার কারণে টিবিয়া বাইরের দিকে ১০ ডিগ্রি ঘুরে গিয়ে হাঁটুটিকে পুরোপুরি লক করে দেয়, ফলে পেশীর কোনো শক্তি খরচ ছাড়াই মানুষ ঘণ্টার পর ঘণ্টা সোজা দাঁড়িয়ে থাকতে পারে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Differential Arthrocentesis and Synovial Fluid Pathophysiology', 'সাইনোভিয়াল তরল পরীক্ষা ও বাতব্যাধির প্যাথোফিজিওলজি'),
          paragraphs: [
            l(
              'Diagnostic arthrocentesis (joint aspiration) is critical for distinguishing acute inflammatory, crystal-induced, and infectious arthropathies. Normal synovial fluid is crystal clear, pale straw-colored, with a leukocyte count under 200 cells/mm³. In non-inflammatory osteoarthritis, fluid remains clear or slightly hazy, with leukocytes typically ranging from 200 to 2,000 cells/mm³ (predominantly mononuclear cells).',
              'আর্থ্রোসেন্টেসিস (সুঁই দিয়ে সন্ধির তরল বের করে পরীক্ষা) তীব্র প্রদাহ, ইউরিক এসিডের ক্রিস্টাল এবং জীবাণু সংক্রমণ পৃথক করার জন্য অপরিহার্য। স্বাভাবিক সাইনোভিয়াল তরল স্ফটিকের মতো স্বচ্ছ এবং এতে প্রতি ঘন মিলিমিটারে ২০০টির কম শ্বেতরক্তকণিকা থাকে। অস্টিওআর্থ্রাইটিসে তরল কিছুটা ঘোলাটে হতে পারে এবং শ্বেতরক্তকণিকা ২০০ থেকে ২,০০০ এর মধ্যে থাকে।'
            ),
            l(
              'In acute inflammatory arthritis (such as rheumatoid arthritis or gout), fluid is translucent or opaque, with leukocyte counts between 2,000 and 50,000 cells/mm³ (>50% polymorphonuclear neutrophils). Monosodium urate crystals in gout exhibit strong negative birefringence (yellow when parallel to the compensator axis under polarized microscopy), whereas calcium pyrophosphate dihydrate (CPPD) crystals in pseudogout show weak positive birefringence. In septic arthritis, counts exceed 50,000 to 100,000 cells/mm³ with >90% PMNs, requiring urgent surgical drainage.',
              'তীব্র গেঁটেবাত (গাউট) বা রিউমাটয়েডে তরল ঘন ঘোলাটে হয়ে শ্বেতরক্তকণিকা ২,০০০ থেকে ৫০,০০০ পর্যন্ত পৌঁছায়। পোলারাইজড মাইক্রোস্কোপে গাউটের মনোসোডিয়াম ইউরেট ক্রিস্টালগুলো সূঁচালো ও নেতিবাচক প্রতিসরণশীল দেখায়, পক্ষান্তরে সিউডোগাউটে ইতিবাচক প্রতিসরণ দেখা যায়। সেপটিক আর্থ্রাইটিসে জীবাণু সংক্রমণের কারণে শ্বেতরক্তকণিকা ৫০,০০০ থেকে ১ লক্ষ ছাড়িয়ে যায়, যা সন্ধি বাঁচাতে জরুরি অস্ত্রোপচার দাবি করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Academic Principles of Synovial Joint Mechanics', 'সাইনোভিয়াল সন্ধি বলবিদ্যার মূল একাডেমিক নীতি'),
          paragraphs: [
            l(
              'Articular biology represents a sophisticated convergence of tissue engineering, fluid dynamics, and musculoskeletal kinematics. The integrity of diarthrodial joints is maintained by the low metabolic turnover of an avascular hyaline matrix, dynamic biphasic fluid exudation, and boundary protection by PRG4 lubricin. Failure of any single mechanical or biochemical constituent—whether through traumatic ligamentous laxity, synovial autoimmune destruction, or crystal precipitation—initiates irreversible degradative cascades that precipitate chronic arthrosis.',
              'আর্টিকুলার জীববিজ্ঞান হলো টিস্যু ইঞ্জিনিয়ারিং, তরল গতিবিদ্যা এবং মাস্কুলোস্কেলিটাল মেকানিক্সের এক অনন্য সমন্বয়। রক্তনালীহীন হায়ালিন ম্যাট্রিক্স, দ্বিমুখী তরল নিঃসরণ এবং লুব্রিসিন প্রোটিনের সুরক্ষায় সাইনোভিয়াল সন্ধি সুরক্ষিত থাকে। আঘাতের কারণে লিগামেন্ট আলগা হওয়া, অটোইমিউন আক্রমণ বা ইউরিক এসিড জমার মাধ্যমে এই ব্যবস্থার যেকোনো একটি উপাদান নষ্ট হলে তা অপরিবর্তনীয় ক্ষয় সৃষ্টি করে চিরস্থায়ী বাতব্যাধির জন্ম দেয়।'
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
          heading: l('Mechanobiology of Osteoarthritis and Chondrocyte Senescence', 'অস্টিওআর্থ্রাইটিসের মেকানোবায়োলজি ও কনড্রোসাইট বার্ধক্য গবেষণা'),
          paragraphs: [
            l(
              'Modern molecular rheumatology has revised the concept of osteoarthritis from a passive "wear-and-tear" condition to an active, metabolically driven whole-joint organ disease. Excessive mechanical stress sensed via chondrocyte cell-surface integrins (alpha-1-beta-1, alpha-5-beta-1) and mechanosensitive ion channels (Piezo1, Piezo2, TRPV4) triggers nuclear translocation of NF-kappa-B and hypoxia-inducible factor-2-alpha (HIF-2-alpha).',
              'আধুনিক মলিকুলার রিউমাটোলজি অস্টিওআর্থ্রাইটিসকে কেবল বয়সের সাধারণ "ঘর্ষণজনিত ক্ষয়" হিসেবে না দেখে একটি বিপাকীয় ও সক্রিয় অঙ্গের রোগ হিসেবে চিহ্নিত করেছে। কনড্রোসাইট কোষপৃষ্ঠের মেকানোসেন্সিটিভ পিজো (Piezo1/2) চ্যানেল দিয়ে অতিরিক্ত যান্ত্রিক চাপ অনুভূত হলে কোষে NF-kappa-B ও HIF-2-আলফা প্রোটিন সক্রিয় হয়ে ওঠে।'
            ),
            l(
              'These mechanotransduction cascades drive expression of catabolic zinc metalloproteinases, specifically collagenase-3 (MMP-13) and aggrecanases (ADAMTS-4, ADAMTS-5), which cleave type II collagen fibrils and aggrecan interglobular domains. Concurrently, chondrocytes undergo senescence-associated secretory phenotype (SASP), secreting pro-inflammatory cytokines (IL-1-beta, TNF-alpha) that suppress matrix anabolism and accelerate subchondral bone remodeling, paving the way for senolytic and gene-therapy interventions targeting ADAMTS-5.',
              'এই সিগন্যালিংয়ের ফলে MMP-13 এবং ADAMTS এনজাইমগুলো টাইপ-২ কোলাজেন ও এগ্রিক্যান প্রোটিন কেটে টুকরো টুকরো করে ফেলে। একই সাথে কনড্রোসাইট কোষগুলো অকাল বার্ধক্যে আক্রান্ত হয়ে ক্ষতিকর প্রদাহজনক সাইটোকাইন নিঃসরণ করে যা নতুন তরুণাস্থি তৈরি বন্ধ করে দেয়। এই প্রক্রিয়া বন্ধ করতে আধুনিক গবেষণায় ADAMTS-5 জিনকে নিষ্ক্রিয় করার জন্য উন্নত জিন-থেরাপি ও সেনোলাইটিক ওষুধের ট্রায়াল চলছে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Bioengineered Ligament Reconstruction and Hydrogel Articular Resurfacing', 'বায়ো-ইঞ্জিনিয়ার্ড লিগামেন্ট পুনর্গঠন ও আর্টিকুলার হাইড্রোজেল গবেষণা'),
          paragraphs: [
            l(
              'Conventional ACL reconstruction utilizing bone-patellar tendon-bone (BPTB) or hamstring tendon autografts remains plagued by donor-site morbidity, incomplete proprioceptive recovery, and high secondary graft failure rates in young athletes. Contemporary orthopedic bioengineering is pioneering biomimetic braided silk and poly(L-lactic acid) (PLLA) composite ligament scaffolds seeded with autologous tendon-derived stem cells (TDSCs).',
              'নিজের শরীর থেকে টেন্ডন কেটে এনে এসিএল জোড়া লাগানোর চিরাচরিত পদ্ধতিতে রোগীর শক্তি হ্রাস পায় এবং তরুণ খেলোয়াড়দের ক্ষেত্রে আবারও লিগামেন্ট ছিঁড়ে যাওয়ার ঝুঁকি থাকে। এই সীমাবদ্ধতা দূর করতে আধুনিক অর্থোপেডিক্সে প্রাকৃতিক রেশম তন্তু ও বায়ো-পলিমারের তৈরি বিশেষ লিগামেন্ট স্ক্যাফোল্ড ব্যবহার করা হচ্ছে, যাতে রোগীর নিজস্ব স্টেম সেল যুক্ত করে নিখুঁত প্রাকৃতিক লিগামেন্ট তৈরি করা যায়।'
            ),
            l(
              'At the bone-ligament enthesis, tri-phasic continuous scaffolds incorporating ceramic nanoparticles (hydroxyapatite) are restoring the anatomical transition from fibrous ligament to uncalcified fibrocartilage, calcified fibrocartilage, and subchondral bone, mitigating stress concentration. In parallel, ultra-tough self-healing zwitterionic hydrogels exhibiting compressive strengths of >30 MPa are advancing through primate clinical models as permanent focal cartilage resurfacing implants, potentially rendering metal-on-polyethylene total joint arthroplasty obsolete.',
              'হাড় ও লিগামেন্টের সংযোগস্থলে ন্যানো-সিরামিক কণা ব্যবহার করে প্রাকৃতিক কাঠামোর অনুকরণে স্তরভিত্তিক সংযোগ ফিরিয়ে আনা হচ্ছে, যা যান্ত্রিক টান সমানভাবে ছড়িয়ে দেয়। পাশাপাশি ৩০ মেগাপ্যাসকেলের বেশি চাপ সহ্য করতে সক্ষম স্ব-নিরাময়কারী আধুনিক কৃত্রিম হাইড্রোজেল সফলভাবে পরীক্ষা করা হচ্ছে, যা ভবিষ্যতে ধাতু ও প্লাস্টিকের ক্ষতিকারক কৃত্রিম সন্ধি প্রতিস্থাপনের প্রয়োজনীয়তাকে পুরোপুরি দূর করে দিতে পারে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-step schematic tracing synovial joint microarchitecture: hyaline cartilage capping, synovial cavity lining and fluid secretion, fibrous capsule constraint, and accessory cushioning structures.',
      'সাইনোভিয়াল সন্ধির অণুগঠনের ৪টি সহজলভ্য ধাপ: হায়ালিন তরুণাস্থির আবরণ, সাইনোভিয়াল ঝিল্লি ও তরল নিঃসরণ, ফাইব্রাস ক্যাপসুলের সুরক্ষা এবং কুশনকারী সহায়ক কাঠামোর বিন্যাস।'
    ),
    steps: [
      l(
        '1. Avascular hyaline articular cartilage caps the opposing bone ends, providing an ultra-smooth, shock-absorbing bearing surface.',
        '১. রক্তনালীহীন হায়ালিন তরুণাস্থি অস্থির প্রান্তগুলোকে মসৃণ ও স্থিতিস্থাপক সুরক্ষা দিয়ে আবৃত রাখে।'
      ),
      l(
        '2. The vascular synovial membrane lines non-articulating internal surfaces, actively producing hyaluronic acid-rich synovial fluid.',
        '২. রক্তনালীবহুল সাইনোভিয়াল ঝিল্লি হায়ালুরোনিক অ্যাসিডসমৃদ্ধ পিচ্ছিল সাইনোভিয়াল তরল নিঃসরণ করে।'
      ),
      l(
        '3. The dense fibrous joint capsule and intrinsic ligaments bind the skeletal elements, mechanically preventing pathological dislocation.',
        '৩. ঘন ফাইব্রাস ক্যাপসুল ও লিগামেন্ট অস্থিগুলোকে একত্রে বেঁধে রেখে অস্বাভাবিক স্থানচ্যুতি ঠেকায়।'
      ),
      l(
        '4. Accessory fibrocartilage menisci and fluid-filled bursae distribute compressive loads and prevent tendon wear during locomotion.',
        '৪. ফাইব্রোকার্টিলেজের মেনিসকাস ও পিচ্ছিল বার্সা ওজনের চাপ ছড়িয়ে দেয় এবং ঘর্ষণ রোধ করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'During a non-contact athletic maneuver, an athlete experiences knee hyperextension with sudden deceleration and hears an audible "pop," followed by rapid hemarthrosis within 2 hours. Physical examination reveals an anterior tibial translation of 7 mm with a soft end-point. Which ligament is primarily disrupted?',
      'খেলাধুলার সময় হঠাৎ পা আটকে গিয়ে হাঁটু অতিরিক্ত সোজা হয়ে মোচড় খেলে তীব্র শব্দ হয় এবং ২ ঘণ্টার মধ্যে সন্ধিতে রক্ত জমে হাঁটু ফুলে যায়। পরীক্ষায় দেখা যায় টিবিয়া ৭ মিলিমিটার সামনে সরে আসছে কিন্তু কোনো শক্ত বাধা অনুভূত হচ্ছে না। কোন লিগামেন্টটি মূলত ছিঁড়ে গেছে?'
    ),
    options: [
      l('Anterior cruciate ligament (ACL)', 'অ্যান্টেরিয়র ক্রুসিয়েট লিগামেন্ট (ACL)'),
      l('Posterior cruciate ligament (PCL)', 'পোস্টেরিয়র ক্রুসিয়েট লিগামেন্ট (PCL)'),
      l('Fibular (lateral) collateral ligament (LCL)', 'ফিবুলার (ল্যাটেরাল) কোলেটারাল লিগামেন্ট (LCL)'),
      l('Patellar ligament', 'প্যাটেলার লিগামেন্ট'),
    ],
    correctIndex: 0,
    explanation: l(
      'The presentation of sudden deceleration, hyperextension, an audible "pop," rapid hemarthrosis, and a positive Lachman test (anterior tibial translation with a soft end-point) is pathognomonic for a complete rupture of the anterior cruciate ligament (ACL).',
      'হঠাৎ থমকে যাওয়া, হাঁটু অতিরিক্ত সোজা হয়ে মোচড় খাওয়া, শব্দ হওয়া, দ্রুত রক্ত জমে ফুলে যাওয়া এবং পজিটিভ লাচম্যান পরীক্ষা (টিবিয়া সামনে সরে আসা ও শক্ত বাধার অভাব) এসিএল (ACL) লিগামেন্ট সম্পূর্ণ ছিঁড়ে যাওয়ার নিশ্চিত ও ক্লাসিক্যাল লক্ষণ।'
    ),
  },
}
