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

export const chapter09LowerLimbLesson: LessonTopic = {
  id: 'topic.anatomy.lower-limb',
  slug: 'lower-limb',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('09 · Lower Limb', '০৯ · নিম্ন অঙ্গ'),
  summary: l(
    'A comprehensive regional anatomical exploration of the human lower extremity: the gluteal gateway and sciatic nerve, femoral triangle, popliteal fossa, osteofascial leg compartments, tarsal tunnel, foot arches, and gait biomechanics.',
    'মানবদেহের নিম্ন অঙ্গের বিশদ আঞ্চলিক শারীরস্থানিক অধ্যয়ন: নিতম্ব অঞ্চল ও সায়াটিক স্নায়ুর পথ, ফিমোরাল ট্রায়াঙ্গল, পপলিটিয়াল ফসা, জঙ্ঘার ফাসিয়াল কম্পার্টমেন্ট, টার্সাল টানেল, পায়ের পাতার ধনুকাকার আর্চ এবং হাঁটার বলবিদ্যা।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Map the boundaries and neurovascular contents of the femoral triangle (NAVeL) and popliteal fossa, distinguishing the anterior, medial, and posterior compartments of the thigh.',
      'ফিমোরাল ট্রায়াঙ্গল (NAVeL) ও পপলিটিয়াল ফসার সীমানা এবং রক্তনালী-স্নায়ু উপাদান চিহ্নিত করতে পারা এবং উরুর সম্মুখ, মধ্যবর্তী ও পশ্চাৎ কম্পার্টমেন্ট পৃথক করতে পারা।'
    ),
    l(
      'Explain the anatomical basis of pelvic stability during the single-leg stance phase of gait, focusing on the gluteus medius/minimus and the biomechanics of Trendelenburg sign.',
      'এক পায়ে ভর দিয়ে হাঁটার সময় শ্রোণীর ভারসাম্য রক্ষার শারীরস্থানিক ভিত্তি ব্যাখ্যা করতে পারা এবং গ্লুটিয়াস মিডিয়াস/মিনিমাসের ভূমিকা ও ট্রেন্ডেলেনবার্গ লক্ষণের মেকানিক্স বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Evaluate lower extremity neurovascular syndromes, including sciatic nerve compression (piriformis syndrome), common fibular nerve palsy (foot drop), and tarsal tunnel syndrome.',
      'সায়াটিক স্নায়ু সংকোচন (পিরিফর্মিস সিন্ড্রোম), কমন ফিবুলার স্নায়ুর পক্ষাঘাত (ফুট ড্রপ) এবং টার্সাল টানেল সিন্ড্রোমসহ নিম্ন অঙ্গের স্নায়বিক রোগসমূহ ক্লিনিক্যালভাবে মূল্যায়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.upper-limb'],
  relatedTopicIds: ['topic.anatomy.skeletal-appendicular'],
  references: refs,
  evidenceBySection: {
    introduction: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    structure: ['moore-anatomy-9e', 'netter-anatomy-8e'],
    mechanism: ['grays-anatomy-42e', 'openstax-ap2e-ch11'],
    integration: ['moore-anatomy-9e', 'guyton-hall-14e'],
    practice: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    takeaways: ['moore-anatomy-9e', 'openstax-ap2e-ch11'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Lower Limb Architecture and Bipedal Stance', 'ভূমিকা: নিম্ন অঙ্গের গঠন ও দ্বিপদী ভারসাম্য'), sectionId: 'introduction' },
      { id: 'sec-gluteal', label: l('Gluteal Region, Sciatic Nerve and Femoral Triangle', 'নিতম্ব অঞ্চল, সায়াটিক স্নায়ু ও ফিমোরাল ট্রায়াঙ্গল'), sectionId: 'structure' },
      { id: 'sec-thigh', label: l('Thigh Compartments, Adductor Canal and Popliteal Fossa', 'উরুর কম্পার্টমেন্ট, অ্যাডাক্টর ক্যানাল ও পপলিটিয়াল ফসা'), sectionId: 'mechanism' },
      { id: 'sec-foot', label: l('Leg Compartments, Tarsal Tunnel and Foot Arches', 'জঙ্ঘার কম্পার্টমেন্ট, টার্সাল টানেল ও পদতলের আর্চ'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Neuropathies: Trendelenburg, Foot Drop and Hernias', 'ক্লিনিক্যাল প্যাথলজি: ট্রেন্ডেলেনবার্গ, ফুট ড্রপ ও হার্নিয়া'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary and Lower Limb Regional Glossary', 'সারসংক্ষেপ ও নিম্ন অঙ্গের পরিভাষা শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Femoral Triangle Contents (NAVeL)', 'ফিমোরাল ট্রায়াঙ্গলের উপাদানসমূহ (NAVeL)'),
        definition: l(
          'Arranged from lateral to medial across the sub-inguinal space: Femoral Nerve, Femoral Artery, Femoral Vein, and Empty space / Femoral Canal containing deep inguinal lymphatics (lymph node of Cloquet).',
          'কুঁচকির নিচে বাইরে থেকে ভেতরের দিকে ক্রমান্বয়ে সাজানো উপাদান: ফিমোরাল নার্ভ, ফিমোরাল আর্টারি, ফিমোরাল ভেইন এবং লিম্ফ নোডযুক্ত ফিমোরাল ক্যানাল (সংক্ষেপে NAVeL)।'
        ),
      },
      {
        term: l('Trendelenburg Sign', 'ট্রেণ্ডেলেনবার্গ লক্ষণ (Trendelenburg Sign)'),
        definition: l(
          'A clinical sign of hip abductor weakness (gluteus medius and minimus, superior gluteal nerve); when standing on the affected limb, the unsupported contralateral pelvis drops downward.',
          'নিতম্বের অ্যাবডাক্টর পেশীর (গ্লুটিয়াস মিডিয়াস/মিনিমাস) দুর্বলতার লক্ষণ; আক্রান্ত পায়ের ওপর এক পায়ে দাঁড়ালে সুস্থ বিপরীত পাশের কোমর নিচের দিকে হেলে পড়ে।'
        ),
      },
      {
        term: l('Windlass Mechanism of the Plantar Fascia', 'প্ল্যান্টার ফাসিয়ার উইন্ডলাস মেকানিজম'),
        definition: l(
          'The mechanical tightening of the plantar aponeurosis during great toe dorsiflexion, which pulls the calcaneus toward the metatarsal heads to elevate the medial longitudinal arch for rigid push-off during gait.',
          'পায়ের বুড়ো আঙুল ওপরের দিকে তুললে পদতলের প্ল্যান্টার ফাসিয়া টানটান হয়ে ক্যালকেনিয়াসকে কাছে টেনে আনে, যা পদতলের আর্চকে শক্ত লিভারে রূপান্তর করে হাঁটার সময় ধাক্কা দিতে সাহায্য করে।'
        ),
      },
      {
        term: l('Common Fibular (Peroneal) Nerve Entrapment', 'কমন ফিবুলার স্নায়ুর আঘাত ও ফুট ড্রপ'),
        definition: l(
          'Compression or laceration of the superficial common fibular nerve as it winds around the fibular neck, paralyzing anterior and lateral leg muscles to cause profound foot drop and high-stepping gait.',
          'ফিবুলার গলার চারপাশে চামড়ার কাছে থাকা কমন ফিবুলার স্নায়ুতে আঘাত লাগলে পা তোলার পেশী অবশ হয়ে পা ঝুলে পড়ে (ফুট ড্রপ) এবং রোগী পা উঁচু করে হাঁটে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Distinguishing Femoral Hernia from Inguinal Hernia by Landmark Palpation', 'শারীরস্থানিক ল্যান্ডমার্ক দিয়ে ফিমোরাল বনাম ইনগুইনাল হার্নিয়া পৃথকীকরণ'),
        steps: [
          l('Step 1: Identify the pubic tubercle and the anterior superior iliac spine (ASIS), visualizing the course of the taut inguinal ligament bridging between them.', 'ধাপ ১: পিউবিক টিউবার্কল এবং ইলিয়ামের সামনের স্পাইন (ASIS) স্পর্শ করে এদের সংযোগকারী ইনগুইনাল লিগামেন্টের রেখাটি স্পষ্টভাবে কল্পনা করুন।'),
          l('Step 2: Palpate the hernia mass relative to the pubic tubercle and inguinal ligament. An inguinal hernia emerges through the superficial inguinal ring, which lies superior and medial to the pubic tubercle.', 'ধাপ ২: হার্নিয়া ফোলা অংশটি পরীক্ষা করুন। ইনগুইনাল হার্নিয়া ইনগুইনাল লিগামেন্টের ওপরে এবং পিউবিক টিউবার্কলের ওপরে ও ভেতরের দিকে অবস্থান করে।'),
          l('Step 3: A femoral hernia descends through the rigid femoral canal into the saphenous opening, placing the neck of the hernia strictly inferior and lateral to the pubic tubercle, below the inguinal ligament.', 'ধাপ ৩: ফিমোরাল হার্নিয়া ফিমোরাল ক্যানাল দিয়ে নিচে নেমে আসে; ফলে এটি ইনগুইনাল লিগামেন্টের নিচে এবং পিউবিক টিউবার্কলের নিচে ও বাইরের দিকে অবস্থান করে।'),
        ],
        conclusion: l('Because the femoral canal is bounded by rigid, unyielding fibrous borders (lacunar ligament medially, inguinal ligament anteriorly), femoral hernias carry an extremely high risk (>30%) of acute strangulation and mandate urgent surgical repair.', 'যেহেতু ফিমোরাল সুড়ঙ্গের চারপাশ শক্ত লিগামেন্ট দিয়ে ঘেরা, তাই ফিমোরাল হার্নিয়ায় নাড়ি আটকে রক্ত চলাচল বন্ধ হওয়ার (স্ট্র্যাঙ্গুলেশন) মারাত্মক ঝুঁকি থাকে এবং জরুরি অস্ত্রোপচার আবশ্যক।'),
      },
    ],
    checkpoints: [
      {
        question: l('Why does the sciatic nerve emerge into the gluteal region inferior to the piriformis muscle rather than passing through the pelvic brim?', 'সায়াটিক স্নায়ু কেন পেলভিক রিমের ওপর দিয়ে না গিয়ে পিরিফর্মিস পেশীর নিচ দিয়ে নিতম্ব অঞ্চলে প্রবেশ করে?'),
        answer: l('Because the sciatic nerve arises from the lumbosacral plexus (L4-S3) inside the true pelvis and exits the pelvis through the greater sciatic foramen immediately inferior to the piriformis muscle, establishing the direct neurovascular highway into the posterior thigh and leg.', 'কারণ সায়াটিক স্নায়ুটি পেলভিসের ভেতরে লাম্বোস্যাক্রাল প্লেক্সাস থেকে উৎপন্ন হয় এবং গ্রেটার সায়াটিক ফোরামেন দিয়ে পিরিফর্মিস পেশীর ঠিক নিচ দিয়ে বের হয়ে উরুর পেছনের অংশে সরাসরি নেমে আসে।'),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch09-lower-limb-diagram',
    title: l('Interactive Lower Limb Regional Anatomy Schematic', 'ইন্টারেক্টিভ নিম্ন অঙ্গের আঞ্চলিক শারীরস্থানিক স্কিম্যাটিক'),
    description: l(
      'Inspect the four primary anatomical zones of the lower extremity: the gluteal gateway, femoral triangle, popliteal fossa, and tarsal tunnel with foot arches.',
      'নিম্ন অঙ্গের চারটি প্রধান শারীরস্থানিক অঞ্চল পরীক্ষা করুন: নিতম্বের পথ, ফিমোরাল ট্রায়াঙ্গল, পপলিটিয়াল ফসা এবং টার্সাল টানেল ও পদতলের আর্চ।'
    ),
    disclaimer: l(
      'Regional anatomical schematic: select any zone to inspect its muscular boundaries, major neurovascular highways, weight-bearing mechanisms, and entrapment syndromes.',
      'আঞ্চলিক অ্যানাটমি চিত্র: যেকোনো অঞ্চল নির্বাচন করে এর পেশীর সীমানা, প্রধান রক্তনালী ও স্নায়ুর পথ, ভারবহন কৌশল এবং পক্ষাঘাতজনিত সমস্যা পরীক্ষা করুন।'
    ),
    svgType: 'lower-limb-regions',
    items: [
      {
        id: 'gluteal-sciatic',
        label: l('Gluteal Region & Sciatic Gateway', 'নিতম্ব অঞ্চল ও সায়াটিক স্নায়ুর পথ'),
        description: l(
          'Gateway from pelvis to lower limb. Gluteus medius/minimus stabilize the pelvis during bipedal gait. Giant sciatic nerve (L4-S3, thickest nerve in the body) exits below the piriformis muscle.',
          'পেলভিস থেকে পায়ে প্রবেশের মূল পথ। গ্লুটিয়াস মিডিয়াস হাঁটার সময় কোমর স্থির রাখে। দেহের সবচেয়ে মোটা স্নায়ু সায়াটিক নার্ভ পিরিফর্মিস পেশীর নিচ দিয়ে এখানে বেরিয়ে আসে।'
        ),
        details: l(
          'Intramuscular injections must be delivered strictly in the upper outer (superolateral) quadrant of the buttock to avoid catastrophic piercing of the sciatic nerve or gluteal vessels.',
          'নিতম্বে ইনজেকশন দেওয়ার সময় অবশ্যই ওপরের বাইরের চতুর্ভাগে দিতে হয়, যাতে সায়াটিক স্নায়ু বা রক্তনালী ক্ষতিগ্রস্ত না হয়।'
        ),
        sectionId: 'structure',
        color: '#fed7aa',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'femoral-triangle',
        label: l('Femoral Triangle & Thigh Compartments', 'ফিমোরাল ট্রায়াঙ্গল ও উরুর পেশীসমূহ'),
        description: l(
          'Sub-inguinal junction transmitting major neurovascular inflow (NAVeL: Femoral Nerve, Artery, Vein, Canal). Thigh is split into anterior (quadriceps), medial (adductors), and posterior (hamstrings).',
          'কুঁচকির নিচের ফাঁকা স্থান যার মধ্য দিয়ে প্রধান রক্তনালী পায়ে ঢোকে (NAVeL)। উরুর পেশীগুলো সামনের (কোয়াড্রিসেপস), ভেতরের (অ্যাডাক্টর) ও পেছনের (হ্যামস্ট্রিং) ভাগে বিভক্ত।'
        ),
        details: l(
          'Femoral canal contains deep lymph nodes; rigid borders make femoral hernias prone to strangulation. Quadriceps extended by femoral nerve; hamstrings flex knee via sciatic nerve.',
          'ফিমোরাল ক্যানালে লিম্ফ নোড থাকে এবং এর শক্ত সীমানার কারণে হার্নিয়া আটকে যাওয়ার ঝুঁকি বেশি থাকে। কোয়াড্রিসেপস হাঁটু সোজা করে এবং হ্যামস্ট্রিং হাঁটু ভাঁজ করে।'
        ),
        sectionId: 'structure',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'popliteal-leg',
        label: l('Popliteal Fossa & Leg Compartments', 'পপলিটিয়াল ফসা ও জঙ্ঘার কম্পার্টমেন্ট'),
        description: l(
          'Diamond-shaped space behind the knee transmitting the popliteal artery, vein, and tibial/common fibular nerves. Distally splits into anterior, lateral, and posterior osteofascial leg compartments.',
          'হাঁটুর পেছনের হীরকাকৃতি স্থান যার মধ্য দিয়ে পপলিটিয়াল ধমনী ও স্নায়ু নেমে আসে। নিচে এটি জঙ্ঘার সম্মুখ, পার্শ্বীয় ও পশ্চাৎ ফাসিয়াল কম্পার্টমেন্টে বিভক্ত হয়।'
        ),
        details: l(
          'Anterior leg compartment (deep fibular nerve) dorsiflexes ankle; lateral compartment (superficial fibular) everts foot; posterior compartment (tibial nerve) powers plantarflexion via Achilles tendon.',
          'সামনের পেশীগুলো পা ওপরে তোলে (ডরসিফ্লেকশন), পাশের পেশীগুলো পা বাইরে ঘোরায়, এবং পেছনের কাফ পেশীগুলো অ্যাকিলিস টেন্ডনের সাহায্যে পায়ের পাতা নিচে নামায়।'
        ),
        sectionId: 'mechanism',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'tarsal-foot',
        label: l('Tarsal Tunnel & Plantar Arches (Pes)', 'টার্সাল টানেল ও পদতলের আর্চ'),
        description: l(
          'Fibro-osseous conduit behind medial malleolus transmitting posterior tibial neurovascular bundle and deep flexors into the foot. The plantar aponeurosis and arches act as dynamic shock absorbers.',
          'ভেতরের গোড়ালির পেছনের সুড়ঙ্গ যার মধ্য দিয়ে রক্তনালী ও টেন্ডন পদতলে প্রবেশ করে। পদতলের প্ল্যান্টার ফাসিয়া ও ধনুকাকৃতি আর্চ হাঁটার সময় অভিঘাত শোষণ করে।'
        ),
        details: l(
          'Tarsal tunnel syndrome compresses the tibial nerve, causing burning sole pain. Plantar fasciitis creates severe heel pain at the medial calcaneal tubercle, worst upon first morning steps.',
          'টার্সাল টানেলে স্নায়ু চেপে গেলে পদতলে জ্বালাপোড়া হয়। প্ল্যান্টার ফাসাইটিসে গোড়ালির হাড়ে তীব্র ব্যথা হয়, বিশেষ করে সকালে ঘুম থেকে উঠে প্রথম পা ফেলার সময়।'
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
          heading: l('Introduction to Lower Limb Architecture and Bipedal Stance', 'নিম্ন অঙ্গের পরিচিতি ও দ্বিপদী ভারসাম্য'),
          paragraphs: [
            l(
              'The human lower extremity is specialized for supporting total body weight against gravity, maintaining balance during upright bipedal standing, and powering energy-efficient forward locomotion. Divided into the gluteal region, thigh (femur), leg (crus), and foot (pes), the lower limb is anchored to the axial vertebral column through the rigid osseous pelvic ring and massive sacroiliac joints.',
              'মানবদেহের নিম্ন অঙ্গটি অভিকর্ষের বিরুদ্ধে দেহের সম্পূর্ণ ভর বহন করতে, সোজা হয়ে দাঁড়িয়ে ভারসাম্য রক্ষা করতে এবং দক্ষভাবে হাঁটাচলার জন্য বিশেষভাবে গঠিত। নিতম্ব, উরু, জঙ্ঘা এবং পা—এই চার ভাগে বিভক্ত অঙ্গটি শক্তিশালী শ্রোণী বলয় এবং স্যাক্রোইলিয়াক সন্ধির মাধ্যমে মেরুদণ্ডের সাথে দৃঢ়ভাবে সংযুক্ত থাকে।'
            ),
            l(
              'Unlike the hypermobile upper limb, the lower extremity trades multiplanar reach for structural stability and shock absorption. The hip joint is deeply encapsulated, the knee features massive collateral and cruciate ligaments with cushioning menisci, and the bones of the foot form three dynamic elastic arches that absorb the mechanical impact of every step.',
              'অতিরিক্ত গতিশীল হাতের মতো না হয়ে পা স্থিতিশীলতা এবং ঝাঁকুনি শোষণের ওপর নির্ভর করে। নিতম্বের সন্ধিটি অত্যন্ত গভীর ও মজবুত, হাঁটুতে শক্তিশালী ক্রুসিয়েট লিগামেন্ট ও মেনিসকাসের কুশন থাকে, এবং পায়ের পাতার তিনটি ধনুকাকার আর্চ প্রতিটি পদক্ষেপের অভিঘাত স্প্রিংয়ের মতো শোষণ করে নেয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Gluteal Region, Sciatic Nerve and Femoral Triangle', 'নিতম্ব অঞ্চল, সায়াটিক স্নায়ু ও ফিমোরাল ট্রায়াঙ্গল'),
          paragraphs: [
            l(
              'The gluteal region covers the posterior aspect of the pelvis. It is dominated by the large gluteus maximus (the principal extensor of the hip, powered by the inferior gluteal nerve) and the deeper gluteus medius and minimus (powerful abductors and medial rotators of the hip, powered by the superior gluteal nerve). The pear-shaped piriformis muscle acts as an essential landmark: the giant sciatic nerve (the thickest nerve in the human body) exits the pelvis through the greater sciatic foramen directly inferior to the piriformis.',
              'নিতম্ব অঞ্চলে সবচেয়ে বড় পেশী হলো গ্লুটিয়াস ম্যাক্সিমাস (যা নিতম্ব সোজা করার প্রধান পেশী) এবং এর নিচে থাকে গ্লুটিয়াস মিডিয়াস ও মিনিমাস (যা হাঁটার সময় কোমর স্থির রাখে)। পিরিফর্মিস নামক নাশপাতি আকৃতির পেশীটি এখানে মূল ল্যান্ডমার্ক: দেহের সবচেয়ে মোটা স্নায়ু সায়াটিক নার্ভ এই পেশীর ঠিক নিচ দিয়ে পেলভিস থেকে বের হয়ে উরুর পেছনে নেমে আসে।'
            ),
            l(
              'On the anterior upper thigh lies the femoral triangle, a sub-inguinal depression bounded superiorly by the inguinal ligament, laterally by the sartorius muscle, and medially by the adductor longus muscle. From lateral to medial, its vital contents follow the classic NAVeL mnemonic: Femoral Nerve, Femoral Artery, Femoral Vein, and the Femoral Canal containing deep inguinal lymph nodes. The femoral pulse is palpable midway between the anterior superior iliac spine and pubic symphysis.',
              'উরুর ওপরের অংশে ফিমোরাল ট্রায়াঙ্গল অবস্থিত, যা ওপরে ইনগুইনাল লিগামেন্ট, বাইরে সারটোরিয়াস এবং ভেতরে অ্যাডাক্টর লংগাস পেশী দ্বারা সীমাবদ্ধ। বাইরে থেকে ভেতরের দিকে এর উপাদানগুলো NAVeL সূত্র মেনে চলে: ফিমোরাল নার্ভ, ফিমোরাল আর্টারি, ফিমোরাল ভেইন এবং লিম্ফ নোডযুক্ত ফিমোরাল ক্যানাল। কুঁচকির মাঝামাঝি হাত দিলে ফিমোরাল ধমনীর স্পন্দন স্পষ্ট অনুভূত হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Thigh Compartments, Adductor Canal and Popliteal Fossa', 'উরুর কম্পার্টমেন্ট, অ্যাডাক্টর ক্যানাল ও পপলিটিয়াল ফসা'),
          paragraphs: [
            l(
              'The thigh is organized into three osteofascial compartments separated by intermuscular septa: the anterior compartment (quadriceps femoris, innervated by the femoral nerve to extend the knee), the medial compartment (adductor longus, brevis, and magnus, innervated by the obturator nerve to adduct the thigh), and the posterior compartment (biceps femoris, semitendinosus, and semimembranosus hamstrings, innervated by the sciatic nerve to flex the knee and extend the hip).',
              'উরুর পেশীগুলো তিনটি কম্পার্টমেন্টে বিভক্ত: সামনের কম্পার্টমেন্ট (কোয়াড্রিসেপস পেশী যা ফিমোরাল স্নায়ু দিয়ে চলে এবং হাঁটু সোজা করে), ভেতরের কম্পার্টমেন্ট (অ্যাডাক্টর পেশী যা অবটুরেটর স্নায়ু দিয়ে চলে এবং পা কাছে টানে), এবং পেছনের কম্পার্টমেন্ট (হ্যামস্ট্রিং পেশী যা সায়াটিক স্নায়ু দিয়ে চলে এবং হাঁটু ভাঁজ করে)।'
            ),
            l(
              'Behind the knee lies the diamond-shaped popliteal fossa, bounded superolaterally by the biceps femoris, superomedially by the semimembranosus, and inferiorly by the medial and lateral heads of the gastrocnemius. Deep within the fossa, the popliteal artery (the continuation of the femoral artery after passing through the adductor hiatus) lies closest to the bone, flanked superficially by the popliteal vein and the tibial and common fibular divisions of the sciatic nerve.',
              'হাঁটুর পেছনে হীরকাকৃতির পপলিটিয়াল ফসা অবস্থিত, যার চারপাশ হ্যামস্ট্রিং এবং কাফ পেশী দিয়ে ঘেরা। এর গভীরতম স্থানে হাড়ের ঠিক ওপরে পপলিটিয়াল ধমনী অবস্থান করে এবং এর ওপর দিয়ে পপলিটিয়াল শিরা ও সায়াটিক স্নায়ুর দুই প্রধান শাখা—টিবিয়াল এবং কমন ফিবুলার স্নায়ু প্রবাহিত হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Leg Compartments, Tarsal Tunnel and Foot Arches', 'জঙ্ঘার কম্পার্টমেন্ট, টার্সাল টানেল ও পদতলের আর্চ'),
          paragraphs: [
            l(
              'The leg (crus) contains three fascial compartments bounded by the tibia, fibula, interosseous membrane, and anterior/posterior crural septa: the anterior compartment (tibialis anterior, extensor digitorum longus, extensor hallucis longus, deep fibular nerve; dorsiflexes the ankle and extends toes), lateral compartment (fibularis longus and brevis, superficial fibular nerve; everts the foot), and posterior compartment (gastrocnemius, soleus, plantaris, and deep flexors, tibial nerve; powers plantarflexion via the thick calcaneal tendon).',
              'জঙ্ঘাটি তিনটি ফাসিয়াল কম্পার্টমেন্টে বিভক্ত: সামনের কম্পার্টমেন্ট (ডিপ ফিবুলার স্নায়ু দ্বারা নিয়ন্ত্রিত হয়ে পায়ের পাতা ওপরে তোলে বা ডরসিফ্লেকশন করে), পাশের কম্পার্টমেন্ট (সুপারফিসিয়াল ফিবুলার স্নায়ু দিয়ে পা বাইরে মোচড়ায়), এবং পেছনের কম্পার্টমেন্ট (টিবিয়াল স্নায়ু দিয়ে নিয়ন্ত্রিত হয়ে অ্যাকিলিস টেন্ডনের সাহায্যে পা নিচে নামায় এবং হাঁটার সময় শরীরকে সামনে ঠেলে দেয়)।'
            ),
            l(
              'Posterior to the medial malleolus lies the tarsal tunnel, a fibro-osseous channel roofed by the flexor retinaculum that routes the posterior tibial neurovascular bundle and long flexor tendons into the sole. The foot possesses three dynamic arches (medial and lateral longitudinal, and transverse) supported by the dense plantar aponeurosis. Under the windlass mechanism, extending the great toe tightens the plantar aponeurosis, elevating the medial arch to convert the supple shock-absorbing foot into a rigid propulsion lever during push-off.',
              'ভেতরের গোড়ালির পেছনের খাঁজ দিয়ে টার্সাল টানেল অবস্থিত, যার ভেতর দিয়ে স্নায়ু ও রক্তনালী পদতলে প্রবেশ করে। পায়ের পাতার ধনুকাকৃতি আর্চগুলো প্ল্যান্টার ফাসিয়া দ্বারা সুরক্ষিত থাকে। হাঁটার সময় পায়ের বুড়ো আঙুল ওপরের দিকে উঠলে উইন্ডলাস মেকানিজমের মাধ্যমে ফাসিয়া টানটান হয়ে পদতলকে একটি শক্ত লিভারে পরিণত করে যা দেহকে সামনে ঠেলে দিতে সাহায্য করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Neuropathies: Trendelenburg, Foot Drop and Hernias', 'ক্লিনিক্যাল প্যাথলজি: ট্রেন্ডেলেনবার্গ, ফুট ড্রপ ও হার্নিয়া'),
          paragraphs: [
            l(
              'Injuries to lower extremity nerves produce distinct postural and gait abnormalities. Damage to the superior gluteal nerve paralyzes the gluteus medius and minimus, resulting in a positive Trendelenburg sign: when the patient stands on the affected leg, the pelvis drops downward on the unsupported contralateral side, producing an uncompensated waddling gait. Injections in the gluteal region must be administered strictly in the superolateral quadrant to safeguard the sciatic nerve.',
              'পায়ের স্নায়ুর আঘাতে সুনির্দিষ্ট হাঁটার বিকৃতি দেখা দেয়। সুপিরিয়র গ্লুটিয়াস স্নায়ু ক্ষতিগ্রস্ত হলে কোমর স্থির রাখার পেশী অবশ হয়ে যায় এবং ট্রেন্ডেলেনবার্গ লক্ষণ প্রকাশ পায়: আক্রান্ত পায়ে দাঁড়ালে সুস্থ বিপরীত পাশের কোমর নিচে হেলে পড়ে এবং রোগী হাঁসের মতো দুলে দুলে হাঁটে। সায়াটিক স্নায়ু রক্ষা করতে নিতম্বের ইনজেকশন কেবল ওপরের বাইরের কোয়ার্টারে দিতে হয়।'
            ),
            l(
              'Because the common fibular nerve curves superficial and subcutaneous around the neck of the fibula, direct blunt trauma or tight plaster casts readily compress it. Paralyzing the anterior and lateral compartments, this injury abolishes ankle dorsiflexion and eversion, producing classic "foot drop." Patients present with a high-stepping equine gait, lifting the knee excessively to prevent the dragging toes from scuffing against the ground during the swing phase.',
              'কমন ফিবুলার স্নায়ুটি চামড়ার ঠিক নিচ দিয়ে ফিবুলার গলার ওপর দিয়ে প্রবাহিত হয়; ফলে কোনো আঘাত বা আঁটসাঁট প্লাস্টারের চাপে এটি সহজে অকেজো হয়ে যায়। এর ফলে পা ওপরে তোলার ক্ষমতা পুরোপুরি নষ্ট হয়ে পা ঝুলে পড়ে (ফুট ড্রপ) এবং রোগী হাঁটার সময় পা যাতে মাটিতে না ঘষা খায় সেজন্য হাঁটু অস্বাভাবিক উঁচুতে তুলে ঘোড়ার মতো পা ফেলে হাঁটে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary and Lower Limb Regional Glossary', 'সারসংক্ষেপ ও নিম্ন অঙ্গের পরিভাষা শব্দকোষ'),
          paragraphs: [
            l(
              'The regional anatomy of the lower limb is engineered for high-load durability, dynamic shock dispersion, and rhythmic bipedal gait. From the gluteal abductor lever system that keeps the pelvis level to the compact tarsal tunnel and arched foot structure, osteofascial boundaries dictate both normal gait kinematics and specific clinical compression neuropathies. Precise appreciation of these structural conduits is foundational for orthopedic trauma surgery, vascular bypasses, and gait rehabilitation.',
              'নিম্ন অঙ্গের আঞ্চলিক শারীরস্থান উচ্চ চাপ সহ্য করা, ঝাঁকুনি শোষণ এবং অবিচল দ্বিপদী চলনের জন্য নিখুঁত প্রকৌশলের প্রতীক। কোমর সোজা রাখার গ্লুটিয়াল পেশী থেকে শুরু করে গোড়ালির টার্সাল টানেল এবং পদতলের আর্চ—এই কাঠামো স্বাভাবিক চলনের পাশাপাশি বিভিন্ন স্নায়বিক ও ভাস্কুলার রোগের কেন্দ্রবিন্দু। এই শারীরিক পথগুলো জানা অর্থোপেডিক ট্রমা সার্জারি, ভাস্কুলার বাইপাস এবং ফিজিওথেরাপির অপরিহার্য ভিত্তি।'
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
          heading: l('Limb Bud Rotation and Dermatomal Torsion in Lower Limb Ontogeny', 'নিম্ন অঙ্গের বিবর্তনীয় ঘূর্ণন ও ডার্মাটোমের রূপান্তর'),
          paragraphs: [
            l(
              'During embryonic development in the seventh week, the lower limb bud undergoes a 90-degree medial (internal) rotation along its longitudinal axis, moving in the exact opposite direction to the lateral rotation of the upper limb. Consequently, the original ventral flexor compartment comes to lie posteriorly (the hamstrings and gastrocnemius), while the dorsal extensor compartment comes to lie anteriorly (the quadriceps femoris and tibialis anterior).',
              'ভ্রূণের সপ্তম সপ্তাহে নিম্ন অঙ্গটি তার অক্ষ বরাবর ভেতরের দিকে ৯০ ডিগ্রি কোণে ঘুরে যায়, যা হাতের বাইরের ঘূর্ণনের ঠিক বিপরীত। এর ফলে আদিম ভাঁজকারী পেশীগুলো পেছনে চলে যায় (হ্যামস্ট্রিং ও কাফ পেশী) এবং সোজা করার পেশীগুলো সামনে অবস্থান নেয় (কোয়াড্রিসেপস ও টিবিয়ালিস অ্যান্টেরিওর)।'
            ),
            l(
              'This internal rotation spirals the dermatomal map of the lower limb downward and medially in a helical trajectory. Dermatome L1 supplies the inguinal region; L2 and L3 spiral across the anterior thigh; L4 descends over the patella and medial leg to the great toe; L5 supplies the lateral leg and dorsum of the foot; and S1 covers the lateral foot, sole, and posterior calf. Clinical testing of deep tendon reflexes evaluates root-specific pathways: L3-L4 for the patellar reflex and S1-S2 for the Achilles tendon reflex.',
              'এই ভেতরের ঘূর্ণনের কারণে পায়ের ডার্মাটোমগুলো সর্পিলভাবে নিচে নেমে আসে। L1 কুঁচকিতে, L2-L3 উরুর সামনে, L4 হাঁটু ও পায়ের ভেতরের দিক হয়ে বুড়ো আঙুলে, L5 পদপৃষ্ঠে এবং S1 পদতল ও গোড়ালিতে অনুভূতি জোগায়। প্যাটেলার রিফ্লেক্স পরীক্ষার মাধ্যমে L3-L4 সুষুম্না স্নায়ু এবং অ্যাকিলিস রিফ্লেক্স দিয়ে S1-S2 স্নায়ুর সুস্থতা যাচাই করা হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Femoral Sheath Compartments and Femoral Canal Surgical Anatomy', 'ফিমোরাল শিথ ও ফিমোরাল ক্যানালের সার্জিক্যাল অ্যানাটমি'),
          paragraphs: [
            l(
              'The femoral sheath is a funnel-shaped fascial prolongation of the abdominal lining (fascia transversalis anteriorly and fascia iliaca posteriorly) passing beneath the inguinal ligament into the femoral triangle for approximately 3 to 4 cm. Importantly, the femoral nerve does not enter the femoral sheath; it lies laterally outside the sheath on the surface of the iliopsoas muscle.',
              'ফিমোরাল শিথ হলো পেটের ভেতরের ফাসিয়ার তৈরি একটি চোঙাকৃতি আবরণ যা ইনগুইনাল লিগামেন্টের নিচ দিয়ে ৩-৪ সেন্টিমিটার পর্যন্ত ফিমোরাল ট্রায়াঙ্গলে নেমে আসে। একটি গুরুত্বপূর্ণ বিষয় হলো, ফিমোরাল স্নায়ু এই শিথের ভেতরে থাকে না; এটি শিথের বাইরে পাশে ইলিয়োপসোয়াস পেশীর ওপর অবস্থান করে।'
            ),
            l(
              'The interior of the femoral sheath is partitioned by vertical fibrous septa into three distinct compartments: a lateral compartment containing the femoral artery, an intermediate compartment containing the femoral vein, and a medial compartment termed the femoral canal. The femoral canal is a conical dead space roughly 1.3 cm long containing loose connective tissue, lymphatic vessels, and the deep inguinal lymph node of Cloquet (Rosenmüller), providing expansion space for venous return during exercise.',
              'ফিমোরাল শিথটি উল্লম্ব পর্দা দ্বারা তিনটি প্রকোষ্ঠে বিভক্ত: বাইরের প্রকোষ্ঠে ফিমোরাল ধমনী, মাঝের প্রকোষ্ঠে ফিমোরাল শিরা এবং ভেতরের প্রকোষ্ঠে ফিমোরাল ক্যানাল থাকে। ফিমোরাল ক্যানাল হলো প্রায় ১.৩ সেন্টিমিটার লম্বা একটি ফাঁকা স্থান যাতে লিম্ফ নোড থাকে এবং ব্যায়ামের সময় শিরা ফুলে ওঠার জায়গা দেয়; কিন্তু এই ফাঁকা স্থান দিয়েই মারাত্মক ফিমোরাল হার্নিয়া নেমে আসে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Adductor Canal (Hunter Canal) and Popliteal Neurovascular Transmission', 'অ্যাডাক্টর ক্যানাল ও পপলিটিয়াল রক্তসংবহনের গতিপথ'),
          paragraphs: [
            l(
              'The adductor canal (Hunter canal, subsartorial canal) is an aponeurotic tunnel in the middle third of the medial thigh extending from the apex of the femoral triangle to the adductor hiatus in the adductor magnus tendon. Bounded anterolaterally by vastus medialis, posteriorly by adductor longus and magnus, and roofed by the fibrous subsartorial fascia and sartorius muscle, it serves as an intermuscular conduit for the femoral artery, femoral vein, and the saphenous nerve.',
              'অ্যাডাক্টর ক্যানাল (হান্টার্স ক্যানাল) হলো উরুর ভেতরের অংশে অবস্থিত একটি তন্তুময় সুড়ঙ্গ যা ফিমোরাল ট্রায়াঙ্গল থেকে শুরু হয়ে অ্যাডাক্টর হায়াটাস পর্যন্ত বিস্তৃত। এর ভেতর দিয়ে ফিমোরাল ধমনী ও শিরা এবং সাফেনাস স্নায়ু নিরাপদে উরু থেকে হাঁটুর পেছনের পপলিটিয়াল ফসায় প্রবেশ করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Tarsal Tunnel Osteofascial Architecture and Plantar Nerve Branching', 'টার্সাল টানেল ও প্ল্যান্টার স্নায়ু শাখার অণুগঠন'),
          paragraphs: [
            l(
              'The tarsal tunnel is bounded anteromedially by the medial malleolus, laterally by the calcaneus and talus, and roofed by the flexor retinaculum extending from the medial malleolus to the calcaneus. Arranged from anterior to posterior, six structures pass beneath the retinaculum: (1) Tibialis posterior tendon, (2) Flexor digitorum longus tendon, (3) Posterior tibial Artery, (4) Posterior tibial Vein, (5) Tibial Nerve, and (6) Flexor hallucis longus tendon (classic mnemonic: Tom, Dick And Very Nervous Harry).',
              'টার্সাল টানেলটি গোড়ালির হাড় ও ফ্লেক্সর রেটিনাকুলাম দ্বারা গঠিত একটি সুড়ঙ্গ। সামনে থেকে পেছনের দিকে এর ভেতর দিয়ে ক্রমান্বয়ে যায়: (১) টিবিয়ালিস পোস্টেরিয়র টেন্ডন, (২) ফ্লেক্সর ডিজিটোরাম লংগাস টেন্ডন, (৩) পোস্টেরিয়র টিবিয়াল ধমনী, (৪) শিরা, (৫) টিবিয়াল স্নায়ু, এবং (৬) ফ্লেক্সর হ্যালুসিস লংগাস টেন্ডন।'
            ),
            l(
              'Within or immediately distal to the tarsal tunnel, the tibial nerve bifurcates into the medial and lateral plantar nerves (homologues of the median and ulnar nerves in the hand). Entrapment of the tibial nerve or its plantar branches beneath the flexor retinaculum precipitates tarsal tunnel syndrome, presenting with burning paresthesias, numbness, and aching across the sole that intensifies during prolonged weight-bearing ambulation.',
              'টার্সাল টানেলের ভেতরে বা ঠিক বের হয়ে টিবিয়াল স্নায়ুটি মিডিয়াল ও ল্যাটেরাল প্ল্যান্টার স্নায়ুতে বিভক্ত হয়। রেটিনাকুলামের নিচে এই স্নায়ুগুলো চাপে পড়লে টার্সাল টানেল সিন্ড্রোম ঘটে, যার ফলে পদতলে তীব্র জ্বালাপোড়া ও অবশ অনুভূতি হয় যা দীর্ঘক্ষণ দাঁড়িয়ে থাকলে বা হাঁটলে বৃদ্ধি পায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Biomechanical Etiology of Plantar Fasciitis and Calcaneal Spurs', 'প্ল্যান্টার ফাসাইটিস ও গোড়ালির কাঁটা ব্যথার বায়োমেকানিক্স'),
          paragraphs: [
            l(
              'Plantar fasciitis is the most prevalent cause of inferior heel pain in adults, arising from repetitive mechanical microtrauma and degenerating enthesopathy at the origin of the central plantar aponeurosis on the medial process of the calcaneal tuberosity. Chronic tensile overload—exacerbated by obesity, prolonged standing, pes planus (flat feet), or a tight gastrocnemius-soleus complex—induces micro-tearing of collagen fibrils, focal myxoid degeneration, and calcification.',
              'প্ল্যান্টার ফাসাইটিস হলো প্রাপ্তবয়স্কদের গোড়ালি ব্যথার প্রধান কারণ, যা গোড়ালির অস্থির সাথে প্ল্যান্টার ফাসিয়ার সংযোগস্থলে অতিরিক্ত টানের ফলে সৃষ্ট মাইক্রো-ট্রমা ও প্রদাহ থেকে শুরু হয়। স্থূলতা, সমতল পদতল বা কাফ পেশীর অতিরিক্ত টানের কারণে কোলাজেন তন্তু ফেটে গিয়ে ক্ষয় ও ক্যালসিয়াম জমে গোড়ালির অস্থিতে কাঁটা বা স্পার তৈরি করে।'
            ),
            l(
              'Patients present with localized point tenderness upon deep palpation of the anteromedial calcaneus. The pathognomonic clinical feature is severe pain during the first few steps in the morning or after prolonged rest, which temporarily improves as the aponeurosis warms and stretches, only to worsen again by the end of the day. First-line management includes eccentric calf stretching, silicone heel cups, nocturnal splinting, and shockwave therapy.',
              'গোড়ালির ভেতরের অংশে চাপ দিলে তীব্র ব্যথা অনুভূত হয়। এর প্রধান ক্লাসিক্যাল লক্ষণ হলো সকালে ঘুম থেকে উঠে মেঝেতে প্রথম পা ফেলার সময় অসহ্য ব্যথা, যা কিছুক্ষণ হাঁটার পর কিছুটা কমে কিন্তু সারাদিনের কাজের শেষে পুনরায় তীব্র আকার ধারণ করে। কাফ পেশী প্রসারিত করার ব্যায়াম, নরম সিলিকন প্যাড এবং ফিজিওথেরাপির মাধ্যমে এর সফল চিকিৎসা সম্ভব।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Academic Principles of Lower Limb Regional Anatomy', 'নিম্ন অঙ্গের আঞ্চলিক শারীরস্থানের মূল একাডেমিক নীতি'),
          paragraphs: [
            l(
              'The lower limb functions as a robust weight-bearing column designed to dissipate ground reaction forces and conserve kinetic energy during bipedal gait. Tight osteofascial compartmental boundaries enforce unidirectional muscular pull and prevent vascular distension, but create vulnerable spaces prone to elevated pressures. Mastery of neurovascular gateways (femoral triangle, popliteal fossa, tarsal tunnel) and gait stabilization vectors is essential for surgical and clinical diagnosis.',
              'নিম্ন অঙ্গটি মানবদেহের একটি মজবুত ভারবাহী স্তম্ভ যা ভূমির অভিঘাত দূর করে এবং শক্তি সঞ্চয় করে দ্বিপদী চলন সচল রাখে। শক্ত ফাসিয়াল পর্দা পেশীর বলকে সুনির্দিষ্ট দিকে চালিত করে এবং শিরায় রক্ত চলাচল সচল রাখে, কিন্তু অতিরিক্ত চাপে স্নায়ু সংকোচনের ঝুঁকি বাড়ায়। ফিমোরাল ট্রায়াঙ্গল, পপলিটিয়াল ফসা এবং টার্সাল টানেলের মতো প্রধান প্রবেশদ্বারগুলো জানা অর্থোপেডিক ও ভাস্কুলার চিকিৎসার মূল ভিত্তি।'
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
          heading: l('Endovascular Revascularization in Peripheral Arterial Disease (PAD)', 'পেরিফেরাল আর্টারিয়াল ডিজিজ ও আধুনিক এন্ডোভাস্কুলার রিভাস্কুলারাইজেশন'),
          paragraphs: [
            l(
              'Chronic lower extremity arterial disease (LEAD) leading to critical limb-threatening ischemia (CLTI) represents a catastrophic complication of diabetes mellitus and smoking. Atherosclerotic plaque accumulation predominantly affects anatomical flow transition zones: the superficial femoral artery (SFA) within the adductor canal and the tibial runoff vessels (anterior tibial, posterior tibial, and fibular arteries).',
              'পেরিফেরাল আর্টারিয়াল ডিজিজের কারণে পায়ে রক্তপ্রবাহ বন্ধ হয়ে গ্যাংগ্রিন হওয়া ডায়াবেটিস ও ধূমপায়ীদের একটি অত্যন্ত ভয়াবহ জটিলতা। রক্তনালীর চর্বি জমে ব্লকগুলো মূলত উরুর অ্যাডাক্টর ক্যানাল এবং জঙ্ঘার টিবিয়াল ধমনীগুলোতে দেখা যায়।'
            ),
            l(
              'Contemporary vascular surgery has shifted from open bypass (e.g. femoropopliteal reversed saphenous vein bypass) toward image-guided endovascular intervention. Utilizing retrograde pedal puncture techniques and intravascular ultrasound (IVUS), vascular interventionalists navigate micro-guidewires through total chronic occlusions, delivering paclitaxel-eluting balloons and bioresorbable biomimetic nitinol stents that flex naturally under knee articulation without stent fracture or late thrombosis.',
              'আধুনিক ভাস্কুলার সার্জারি পেট কেটে বাইপাস করার বদলে পা বা গোড়ালির সূক্ষ্ম ধমনী দিয়ে সুঁই ঢুকিয়ে এনজিওপ্লাস্টির মাধ্যমে বন্ধ রক্তনালী উন্মুক্ত করছে। বিশেষায়িত ওষুধযুক্ত বেলুন এবং নিটিনল ধাতুর তৈরি নমনীয় স্টেন্ট পরিয়ে হাঁটু ভাঁজের স্বাভাবিক গতির সাথে তাল মিলিয়ে রক্তপ্রবাহ পুনরুদ্ধার করা হচ্ছে, যা পা কেটে ফেলার হাত থেকে হাজার হাজার রোগীকে রক্ষা করছে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Biomechanics of Powered Robotic Exoskeletons in Spinal Cord Injury', 'স্পাইনাল কর্ড ইনজুরিতে রোবোটিক এক্সোস্কেলিটনের বায়োমেকানিক্স'),
          paragraphs: [
            l(
              'Paraplegic individuals following complete traumatic thoracic spinal cord injury lose all volitional neuromuscular motor control across both lower limbs. Powered robotic exoskeletons (e.g. ReWalk, EksoNR) are restoring overground reciprocal bipedal locomotion by acting as motorized external skeletal trusses equipped with brushless DC electric motors at the hip and knee joints.',
              'মেরুরজ্জুর আঘাতে কোমর থেকে নিচের অংশ পুরোপুরি অবশ হয়ে যাওয়া রোগীরা সম্পূর্ণ চলাচলের ক্ষমতা হারান। আধুনিক চিকিৎসাবিজ্ঞানে চালিত রোবোটিক এক্সোস্কেলিটন এমন এক যান্ত্রিক কঙ্কাল যা রোগীর শরীরের বাইরে পরিয়ে দিয়ে ব্যাটারিচালিত শক্তিশালী মোটরের সাহায্যে পুনরায় স্বাভাবিক মানুষের মতো হাঁটার ক্ষমতা ফিরিয়ে দিচ্ছে।'
            ),
            l(
              'Onboard tri-axial inertial measurement units (IMUs) and pressure-sensing insoles continuously detect upper body center-of-mass shifts. When the user tilts forward, microprocessors compute inverse kinematics in real time, triggering coordinated hip flexion and knee extension that mimics the native physiological swing phase of gait, counteracting disuse osteopenia, deep vein thrombosis (DVT), and autonomic dysreflexia.',
              'রোগীর জুতোয় থাকা বিশেষ সেন্সর এবং শরীরের কাত হওয়ার দিক শনাক্ত করে আধুনিক মাইক্রোপ্রসেসর মুহূর্তের মধ্যে হাঁটুর মোটর ঘুরিয়ে পা সামনে এগিয়ে দেয়। এই প্রযুক্তির সাহায্যে প্যারালাইজড ব্যক্তিরা পুনরায় সোজা দাঁড়িয়ে হাঁটতে পারছেন, যা রক্তের জমাট বাঁধা রোধ করতে এবং হাড়ের ঘনত্ব ধরে রাখতে যুগান্তকারী সাফল্য এনে দিয়েছে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-step pathway tracing lower extremity regional anatomy: gluteal gateway conduits, femoral triangle inflow, popliteal fossa transition, and tarsal tunnel-foot arch mechanics.',
      'নিম্ন অঙ্গের আঞ্চলিক শারীরস্থানের ৪টি সহজলভ্য ধাপ: নিতম্বের স্নায়ুর পথ, ফিমোরাল ট্রায়াঙ্গলের রক্তপ্রবাহ, পপলিটিয়াল ফসার সংযোগ এবং টার্সাল টানেল ও পদতলের আর্চ বলবিদ্যা।'
    ),
    steps: [
      l(
        '1. The gluteal region transmits the thick sciatic nerve and anchors hip abductors stabilizing the pelvis during gait.',
        '১. নিতম্ব অঞ্চল সায়াটিক স্নায়ু পরিচালনা করে এবং হাঁটার সময় কোমর সোজা রাখার পেশীগুলোকে নোঙর করে।'
      ),
      l(
        '2. The femoral triangle routes major arterial, venous, and lymphatic conduits into the anterior and medial thigh.',
        '২. ফিমোরাল ট্রায়াঙ্গল প্রধান ধমনী, শিরা ও লসিকানালীকে উরুর সম্মুখ ও মধ্যবর্তী অংশে পৌঁছে দেয়।'
      ),
      l(
        '3. The popliteal fossa transitions deep neurovascular cables past the knee joint into three distinct crural compartments.',
        '৩. পপলিটিয়াল ফসা হাঁটুর পেছন দিয়ে রক্তনালী ও স্নায়ুকে জঙ্ঘার তিনটি ফাসিয়াল কম্পার্টমেন্টে চালিত করে।'
      ),
      l(
        '4. The tarsal tunnel packages posterior tibial cables, while plantar arches absorb landing shock and power push-off.',
        '৪. টার্সাল টানেল পদতলে স্নায়ু পাঠায়, আর ধনুকাকার আর্চগুলো ঝাঁকুনি শোষণ করে হাঁটার ধাক্কা তৈরি করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'During physical examination of a patient with a limp, the examiner asks the patient to stand solely on the right leg. The left side of the pelvis immediately drops downward below the horizontal plane. Which nerve and muscle group on the right side is impaired?',
      'খোঁড়িয়ে চলা একজন রোগীকে কেবল ডান পায়ে দাঁড়াতে বলা হলো। দেখা গেল সাথে সাথে বাম পাশের কোমর অনুভূমিক রেখার নিচে হেলে পড়ল। ডান পাশের কোন স্নায়ু ও পেশীদল এখানে ক্ষতিগ্রস্ত হয়েছে?'
    ),
    options: [
      l('Right superior gluteal nerve innervating right gluteus medius and minimus', 'ডান সুপিরিয়র গ্লুটিয়াল স্নায়ু ও ডান গ্লুটিয়াস মিডিয়াস/মিনিমাস'),
      l('Left superior gluteal nerve innervating left gluteus medius and minimus', 'বাম সুপিরিয়র গ্লুটিয়াল স্নায়ু ও বাম গ্লুটিয়াস মিডিয়াস/মিনিমাস'),
      l('Right sciatic nerve innervating right hamstrings', 'ডান সায়াটিক স্নায়ু ও ডান হ্যামস্ট্রিং'),
      l('Right femoral nerve innervating right quadriceps', 'ডান ফিমোরাল স্নায়ু ও ডান কোয়াড্রিসেপস'),
    ],
    correctIndex: 0,
    explanation: l(
      'This is a positive Trendelenburg sign on the right side. The right hip abductors (gluteus medius and minimus, innervated by the right superior gluteal nerve) are responsible for holding the contralateral (left) pelvis level during single-leg stance on the right leg. Weakness in the right abductors allows the unsupported left pelvis to drop.',
      'এটি ডান পাশের পজিটিভ ট্রেন্ডেলেনবার্গ লক্ষণ। ডান পায়ে দাঁড়ালে ডান পাশের গ্লুটিয়াস মিডিয়াস ও মিনিমাস পেশী (ডান সুপিরিয়র গ্লুটিয়াল স্নায়ু দ্বারা পরিচালিত) বিপরীত পাশের (বাম) কোমরকে সমতলে ধরে রাখে। ডান পাশের পেশী দুর্বল হলে বাম পাশের কোমর নিচে হেলে পড়ে।'
    ),
  },
}
