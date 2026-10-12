import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch5',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 5: The Integumentary System',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/5-introduction',
  },
  {
    id: 'fitzpatrick-dermatology-9e',
    authors: 'S. Kang, M. Amagai, A. L. Bruckner, A. H. Enk, D. J. Margolis, A. J. McMichael, J. S. Orringer',
    title: "Fitzpatrick's Dermatology, 9th edition",
    organization: 'McGraw-Hill Education',
    year: 2019,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=2570',
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
  {
    id: 'moore-anatomy-9e',
    authors: 'A. F. Dalley, A. M. R. Agur',
    title: "Moore's Clinically Oriented Anatomy, 9th edition",
    organization: 'Wolters Kluwer',
    year: 2023,
    url: 'https://shop.lww.com/Moore-s-Clinically-Oriented-Anatomy/p/9781975154066',
  },
]

export const chapter03IntegumentaryLesson: LessonTopic = {
  id: 'topic.anatomy.integumentary-system',
  slug: 'integumentary-system',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('03 · Integumentary System', '০৩ · আবরণী তন্ত্র'),
  summary: l(
    'A detailed study of the human skin and its cutaneous appendages: epidermal stratification, melanogenesis, dermal microarchitecture, tactile sensation, thermoregulation, and clinical dermatopathology.',
    'মানবদেহের ত্বক ও এর আনুষঙ্গিক কাঠামোর বিশদ অধ্যয়ন: এপিডার্মিসের স্তরবিন্যাস, মেলানিন সংশ্লেষ, ডার্মিসের অণুগঠন, সংবেদনশীলতা, তাপনিয়ন্ত্রণ এবং ক্লিনিক্যাল ডার্মাটোপ্যাথলজি।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Identify the five histological strata of thick epidermis and four strata of thin epidermis, tracing keratinocyte differentiation from stratum basale to stratum corneum.',
      'পুরু ত্বকের ৫টি এবং পাতলা ত্বকের ৪টি এপিডার্মাল স্তর চিহ্নিত করে স্ট্র্যাটাম বেসাল থেকে স্ট্র্যাটাম কর্নিয়াম পর্যন্ত কেরাটিনোসাইটের রূপান্তর প্রক্রিয়া বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Contrast the roles of melanocytes, Langerhans cells, and Merkel cells with structural keratinocytes in cutaneous defense, photoprotection, and neurosensory transduction.',
      'ত্বকের সুরক্ষা, অতিবেগুনী রশ্মি প্রতিরোধ এবং স্নায়বিক সংবেদনশীলতায় মেলানোসাইট, ল্যাঙ্গারহ্যান্স কোষ ও মের্কেল কোষের সুনির্দিষ্ট ভূমিকা ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Evaluate dermal microvasculature and neurovascular reflexes in whole-body thermoregulation, sweat gland secretion, and systemic fluid maintenance.',
      'সমগ্র দেহের তাপমাত্রা নিয়ন্ত্রণ, ঘর্মগ্রন্থির নিঃসরণ এবং তরল ভারসাম্য রক্ষায় ডার্মাল রক্তনালী ও স্নায়ু প্রতিবর্তের ভূমিকা মূল্যায়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.cells-tissues'],
  relatedTopicIds: ['topic.anatomy.introduction'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch5', 'moore-anatomy-9e'],
    structure: ['openstax-ap2e-ch5', 'junqueira-histology-16e'],
    mechanism: ['fitzpatrick-dermatology-9e', 'guyton-hall-14e'],
    integration: ['openstax-ap2e-ch5', 'guyton-hall-14e'],
    practice: ['fitzpatrick-dermatology-9e', 'moore-anatomy-9e'],
    takeaways: ['openstax-ap2e-ch5', 'junqueira-histology-16e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: The Largest Human Organ', 'ভূমিকা: মানবদেহের বৃহত্তম অঙ্গ'), sectionId: 'introduction' },
      { id: 'sec-strata', label: l('Epidermal Strata and Cellular Populations', 'এপিডার্মিসের স্তরবিন্যাস ও কোষসমূহ'), sectionId: 'structure' },
      { id: 'sec-dermis', label: l('Dermal Matrix and Appendages', 'ডার্মিসের সংযোজক মাতৃকা ও উপাঙ্গসমূহ'), sectionId: 'mechanism' },
      { id: 'sec-thermo', label: l('Thermoregulation and Barrier Physiology', 'তাপনিয়ন্ত্রণ ও প্রতিরক্ষামূলক শারীরবৃত্ত'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Burns and Cutaneous Neoplasia', 'পোড়া ক্ষতের তীব্রতা ও ত্বকের ক্যান্সার'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary and Key Glossary', 'সারসংক্ষেপ ও মূল শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Stratum basale (Stratum germinativum)', 'স্ট্র্যাটাম বেসাল (অঙ্কুরোদগম স্তর)'),
        definition: l(
          'A single layer of cuboidal/columnar stem cells resting upon the basal lamina, undergoing continuous mitotic division to replenish the epidermis.',
          'ভিত্তিঝিল্লির ওপর অবস্থিত ঘনকাকার স্টেম কোষের একক স্তর, যা অবিরাম মাইটোসিস বিভাজনের মাধ্যমে ওপরের সকল এপিডার্মাল কোষকে প্রতিস্থাপন করে।'
        ),
      },
      {
        term: l('Melanocyte & Melanosome', 'মেলানোসাইট ও মেলানোসোম'),
        definition: l(
          'Neural crest-derived dendritic cells in the stratum basale that synthesize melanin within melanosomes and transfer them to keratinocytes to shield nuclear DNA from UV radiation.',
          'নিউরাল ক্রেস্ট থেকে উদ্ভূত ডেনড্রাইটিক কোষ যা মেলানোসোমে মেলানিন তৈরি করে পাশের কেরাটিনোসাইটে পাঠায় যাতে নিউক্লিয়াসের DNA অতিবেগুনী রশ্মি থেকে সুরক্ষিত থাকে।'
        ),
      },
      {
        term: l('Dermal Papillae & Epidermal Ridges', 'ডার্মাল প্যাপিলা ও এপিডার্মাল রিজ'),
        definition: l(
          'Interdigitating projections of the papillary dermis into the epidermis that increase mechanical shear resistance and create unique dermatoglyphic friction ridges (fingerprints).',
          'প্যাপিলারি ডার্মিস ও এপিডার্মিসের মাঝে আঙুলের মতো প্রক্ষেপণ যা যান্ত্রিক দৃঢ়তা বাড়ায় এবং হাতের আঙুলে অনন্য ফিঙ্গারপ্রিন্ট বা ঘর্ষণ খাঁজ তৈরি করে।'
        ),
      },
      {
        term: l('Langerhans cell (Epidermal dendritic cell)', 'ল্যাঙ্গারহ্যান্স কোষ (এপিডার্মাল ডেনড্রাইটিক সেল)'),
        definition: l(
          'Bone marrow-derived antigen-presenting immune cells residing in the stratum spinosum that capture cutaneously encountered microbial antigens and migrate to regional lymph nodes.',
          'অস্থিমজ্জা থেকে উদ্ভূত অ্যান্টিজেন-উপস্থাপনকারী অনাক্রম্য কোষ যা স্ট্র্যাটাম স্পাইনোসামে অবস্থান করে প্যাথোজেন শনাক্ত করে নিকটস্থ লিম্ফ নোডে নিয়ে যায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Estimating Fluid Loss in Major Thermal Burns via the Rule of Nines', 'রুল অব নাইনস পদ্ধতিতে পোড়া রোগীর তরল ক্ষতির পরিমাপ'),
        steps: [
          l('Step 1: Map anatomical burn distribution in an adult: head and neck (9%), anterior trunk (18%), posterior trunk (18%), each upper limb (9%), each lower limb (18%), perineum (1%).', 'ধাপ ১: প্রাপ্তবয়স্কের পোড়া অংশের হিসাব করুন: মাথা ও ঘাড় (৯%), বুকের সামনের অংশ (১৮%), পিঠ (১৮%), প্রতিটি হাত (৯%), প্রতিটি পা (১৮%), যৌনাঙ্গ (১%)।'),
          l('Step 2: Calculate total body surface area (TBSA) percentage for partial- and full-thickness burns while excluding superficial first-degree erythema.', 'ধাপ ২: প্রথম ডিগ্রির হালকা লাল অংশ বাদ দিয়ে গভীর দ্বিতীয় ও তৃতীয় ডিগ্রির পোড়া অংশের মোট ক্ষেত্রফল (TBSA) যোগ করুন।'),
          l('Step 3: Apply the Parkland formula (4 mL × body mass in kg × % TBSA burn) to calculate crystalloid resuscitation requirements for the initial 24 hours.', 'ধাপ ৩: পার্কল্যান্ড ফর্মুলা (৪ মিলি × ওজন কেজিতে × % পোড়া অংশ) প্রয়োগ করে প্রথম ২৪ ঘণ্টার জন্য প্রয়োজনীয় স্যালাইনের পরিমাণ নির্ধারণ করুন।'),
        ],
        conclusion: l(
          'Loss of the hydrophobic epidermal stratum corneum precipitates massive transepidermal fluid evaporation and hypovolemic shock if not promptly corrected.',
          'ত্বকের পানিনিরোধক স্ট্র্যাটাম কর্নিয়াম ধ্বংস হলে দ্রুত অতিরিক্ত তরল বাষ্পীভূত হয়ে হাইপোভোলেমিয়া ও শক সৃষ্টি হতে পারে।'
        ),
      },
      {
        title: l('Applying the ABCDE Criteria for Early Cutaneous Melanoma Detection', 'ত্বকের মেলানোমা শনাক্তে ABCDE মানদণ্ডের প্রয়োগ'),
        steps: [
          l('Step 1: Assess Asymmetry (one half does not match the other).', 'ধাপ ১: অসমতা (Asymmetry) পরীক্ষা করুন: তিলের এক পাশ অন্য পাশের মতো নয়।'),
          l('Step 2: Inspect Border irregularity (scalloped, notched, or poorly defined margins).', 'ধাপ ২: সীমানা (Border): কিনারা অমসৃণ, খাঁজকাটা বা ঝাপসা।'),
          l('Step 3: Analyze Color variation (shades of brown, black, white, red, or blue across the lesion).', 'ধাপ ৩: রঙ (Color): একই তিলে বাদামী, কালো, লাল বা নীলের মিশ্রণ।'),
          l('Step 4: Measure Diameter (greater than 6 mm, the size of a pencil eraser).', 'ধাপ ৪: ব্যাস (Diameter): ৬ মিলিমিটারের চেয়ে বড় কি না দেখুন।'),
          l('Step 5: Document Evolution (changing size, shape, surface elevation, itching, or bleeding over time).', 'ধাপ ৫: বিবর্তন (Evolution): সময়ের সাথে সাথে তিলের আকার, রঙ বা উচ্চতা পরিবর্তন হচ্ছে কি না।'),
        ],
        conclusion: l(
          'Differentiating benign melanocytic nevi from aggressive malignant melanoma hinges upon recognizing irregular vertical and horizontal epidermal architectural invasion.',
          'সাধারণ তিল এবং বিপজ্জনক মেলানোমা ক্যান্সারের পার্থক্য এপিডার্মিস স্তরে অনিয়মিত কোষ বিভাজন ও বৃদ্ধির লক্ষণ চিহ্নিত করার ওপর নির্ভর করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why is the stratum lucidum observed exclusively in thick skin (palms and soles) rather than thin skin covering the rest of the body?',
          'স্ট্র্যাটাম লুসিডাম কেবল হাতের তালু ও পায়ের তলায় (পুরু ত্বকে) দেখা যায়, কিন্তু শরীরের অন্যান্য অংশে (পাতলা ত্বকে) থাকে না কেন?'
        ),
        answer: l(
          'Thick skin endures chronic high compressive and shearing forces; the stratum lucidum provides an extra translucent barrier of densely packed, eleidin-rich anucleate keratinocytes prior to the stratum corneum.',
          'হাতের তালু ও পায়ের তলায় প্রতিনিয়ত প্রচুর ঘর্ষণ ও চাপ সহ্য করতে হয়; তাই স্ট্র্যাটাম লুসিডাম এলিডিন প্রোটিন সমৃদ্ধ স্বচ্ছ কোষের একটি অতিরিক্ত প্রতিরক্ষামূলক স্তর তৈরি করে।'
        ),
      },
      {
        question: l(
          'How does dermal microvascular vasoconstriction preserve core body temperature in cold environments?',
          'ঠাণ্ডা পরিবেশে ডার্মিসের রক্তনালী সংকোচনের মাধ্যমে কীভাবে শরীরের ভেতরের তাপমাত্রা বজায় থাকে?'
        ),
        answer: l(
          'Sympathetic stimulation constricts dermal precapillary sphincters and diverts arterial blood flow away from superficial papillary loops to deep venous plexuses, reducing convective heat loss.',
          'সিমপ্যাথেটিক স্নায়বিক সংকেত ডার্মিসের রক্তনালীকে সংকুচিত করে রক্তপ্রবাহকে গভীর শিরায় সরিয়ে দেয়, যার ফলে ত্বক দিয়ে পরিবেশের সাথে তাপের অপচয় বন্ধ হয়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch03-skin-diagram',
    title: l('Interactive Integumentary Strata & Appendage Visualizer', 'ইন্টারেক্টিভ ত্বকের স্তর ও উপাঙ্গ নির্দেশক'),
    description: l(
      'Inspect the structural strata spanning the waterproof epidermis, vascular collagenous dermis, and energy-rich subcutaneous hypodermis.',
      'পানিনিরোধক এপিডার্মিস, রক্তনালীসমৃদ্ধ কোলাজেনাস ডার্মিস এবং চর্বিযুক্ত হাইপোডার্মিসের প্রতিটি স্তর গভীরভাবে দেখুন।'
    ),
    disclaimer: l(
      'Schematic dermatohistological model: click or touch any skin layer or cutaneous appendage to view microscopic anatomy and functional specialization.',
      'কলাস্থানিক ত্বক মডেল: অণুবীক্ষণিক গঠন এবং কার্যকরী কাজ জানতে ত্বকের যেকোনো স্তর বা উপাঙ্গ নির্বাচন করুন।'
    ),
    svgType: 'skin-layers',
    items: [
      {
        id: 'stratum-corneum',
        label: l('Stratum Corneum', 'স্ট্র্যাটাম কর্নিয়াম (Stratum Corneum)'),
        description: l(
          'The outermost layer of 15–30 layers of dead, anucleate, keratin-packed corneocytes embedded in a hydrophobic lipid mortar (ceramides, cholesterol, free fatty acids). Prevents water loss and microbial invasion.',
          'ত্বকের সর্ববহিঃস্থ স্তর যা ১৫-৩০ স্তরের নিউক্লিয়াসবিহীন কেরাটিনপূর্ণ মৃত কর্নিওসাইট ও লিপিড আস্তর নিয়ে গঠিত। এটি পানিশূন্যতা রোধ করে এবং জীবাণুর অনুপ্রবেশ ঠেকায়।'
        ),
        details: l(
          'Undergoes constant desquamation regulated by kallikrein-related peptidases breaking down corneodesmosomes.',
          'কর্নিওডেসমোজোম ভেঙে যাওয়ার মাধ্যমে ক্রমাগত পুরাতন মৃত কোষ ঝরে পড়ে এবং নতুন কোষ দ্বারা প্রতিস্থাপিত হয়।'
        ),
        sectionId: 'structure',
        color: '#f0d9c4',
        svgCoords: { x: 25, y: 30, width: 310, height: 42 },
      },
      {
        id: 'stratum-granulosum-spinosum',
        label: l('Stratum Granulosum & Spinosum', 'স্ট্র্যাটাম গ্র্যানুলোসাম ও স্পাইনোসাম'),
        description: l(
          'Stratum granulosum cells accumulate keratohyalin granules (profilaggrin) and lamellar bodies discharging hydrophobic lipids. Stratum spinosum contains polyhedral keratinocytes rich in tonofilament-anchored desmosomes.',
          'স্ট্র্যাটাম গ্র্যানুলোসায় কেরাটোহায়ালিন দানা ও লিপিডযুক্ত ল্যামেলার বডি থাকে। স্ট্র্যাটাম স্পাইনোসায় বহুভুজাকার কেরাটিনোসাইট থাকে যা মজবুত ডেসমোজোম দ্বারা পরস্পরের সাথে যুক্ত থাকে।'
        ),
        details: l(
          'Langerhans cells patrol the stratum spinosum to capture cutaneously encountered microbial antigens.',
          'ল্যাঙ্গারহ্যান্স অনাক্রম্য কোষ এই স্তরে অবস্থান করে ক্ষতিকর জীবাণুর বিরুদ্ধে নজরদারি চালায়।'
        ),
        sectionId: 'structure',
        color: '#eec7a8',
        svgCoords: { x: 25, y: 80, width: 310, height: 44 },
      },
      {
        id: 'stratum-basale',
        label: l('Stratum Basale & Stem Cells', 'স্ট্র্যাটাম বেসাল ও স্টেম সেল'),
        description: l(
          'A single basal layer of proliferative keratinocyte stem cells, melanocytes transferring pigment melanosomes, and neuroendocrine Merkel tactile discs resting on the basal lamina.',
          'ভিত্তিঝিল্লির ওপর অবস্থিত অবিরাম বিভাজনরত স্টেম কোষের একক স্তর, যাতে মেলানিন প্রস্তুতকারী মেলানোসাইট এবং স্পর্শগ্রাহী মের্কেল কোষ থাকে।'
        ),
        details: l(
          'Anchored to the basement membrane via integrin-rich hemidesmosomes and type VII collagen anchoring fibrils.',
          'ইন্টিগ্রিন ও টাইপ ৭ কোলাজেনের মাধ্যমে ভিত্তিঝিল্লির সাথে অত্যন্ত দৃঢ়ভাবে যুক্ত থাকে।'
        ),
        sectionId: 'structure',
        color: '#e7b593',
        svgCoords: { x: 25, y: 132, width: 310, height: 42 },
      },
      {
        id: 'papillary-dermis',
        label: l('Papillary Dermis', 'প্যাপিলারি ডার্মিস (Papillary Dermis)'),
        description: l(
          'Superficial 20% of the dermis composed of loose areolar connective tissue with fine collagen and elastic fibers, looping capillary beds supplying the avascular epidermis, and Meissner tactile corpuscles.',
          'ডার্মিসের ওপরের ২০% যা শিথিল অ্যারওলার কানেক্টিভ টিস্যু, সূক্ষ্ম রক্তকৈশিক জালক এবং স্পর্শগ্রাহী মাইসনার করপাসল নিয়ে গঠিত।'
        ),
        details: l(
          'Interdigitates with epidermal ridges to generate high shear resistance and dermatoglyphic fingerprints.',
          'এপিডার্মিসের সাথে আঙুলের মতো খাঁজ তৈরি করে হাতের তালুতে ফিঙ্গারপ্রিন্ট গঠন করে।'
        ),
        sectionId: 'mechanism',
        color: '#f6dcd8',
        svgCoords: { x: 25, y: 182, width: 310, height: 44 },
      },
      {
        id: 'reticular-dermis',
        label: l('Reticular Dermis & Hair Appendages', 'রেটিকুলার ডার্মিস ও ত্বকের উপাঙ্গ'),
        description: l(
          'Deeper 80% of dermis composed of dense irregular connective tissue rich in thick Type I collagen bundles aligned with Langer cleavage lines. Houses hair follicles, sebaceous glands, sweat glands, and Pacinian corpuscles.',
          'ডার্মিসের নিচের ৮০% যা পুরু কোলাজেন তন্তু নিয়ে গঠিত। এতে লোমকূপ, সিবাম গ্রন্থি, ঘর্মগ্রন্থি এবং গভীর চাপগ্রাহী প্যাসিনিয়ান করপাসল থাকে।'
        ),
        details: l(
          'Surgical incisions made parallel to Langer cleavage lines experience minimal tension and heal with minimal scarring.',
          'ল্যাঙ্গার লাইনের সমান্তরালে অস্ত্রোপচারের ছেদ দিলে ক্ষত দ্রুত সারে এবং দাগ ন্যূনতম হয়।'
        ),
        sectionId: 'mechanism',
        color: '#efc1bb',
        svgCoords: { x: 25, y: 234, width: 310, height: 50 },
      },
      {
        id: 'hypodermis-subcutis',
        label: l('Hypodermis (Subcutaneous Tissue)', 'হাইপোডার্মিস (সাবকিউটেনিয়াস স্তর)'),
        description: l(
          'Subcutaneous superficial fascia composed of lobules of white adipose tissue separated by fibrovascular septa. Serves as thermal insulation, kinetic shock absorption, and systemic triglyceride energy storage.',
          'ত্বকের নিচের স্তর যা চর্বিকোষ ও রক্তনালীযুক্ত পর্দা দ্বারা গঠিত। এটি দেহের তাপমাত্রা ধরে রাখে, যান্ত্রিক ধাক্কা শোষণ করে এবং শক্তি সঞ্চয় করে।'
        ),
        details: l(
          'Highly vascular plane utilized for subcutaneous injections (e.g. insulin, low-molecular-weight heparin).',
          'অত্যধিক রক্তনালী থাকার কারণে ইনসুলিনসহ বিভিন্ন ইনজেকশন এই স্তরে নিরাপদে প্রয়োগ করা হয়।'
        ),
        sectionId: 'integration',
        color: '#fdf3c6',
        svgCoords: { x: 25, y: 292, width: 310, height: 50 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Introduction: The Skin as an Integrated Protective Organ', 'ভূমিকা: প্রতিরক্ষামূলক সমন্বিত অঙ্গ হিসেবে ত্বক'),
          paragraphs: [
            l(
              'The integumentary system is the largest, most visible, and most versatile organ system of the human body, accounting for roughly 7% to 15% of total adult body weight and spanning an expansive surface area of 1.5 to 2.0 square meters. Far from an inanimate wrapper, the skin is an active, living ecosystem composed of two primary anatomical layers—the outer cellular epidermis and the underlying fibrous dermis—anchored to the deeper muscular skeleton by a subcutaneous cushion termed the hypodermis. It stands as our primary interface with the external universe.',
              'আবরণী তন্ত্র বা ত্বক হলো মানবদেহের বৃহত্তম, সর্বাধিক দৃশ্যমান এবং সবচেয়ে বহুমুখী অঙ্গতন্ত্র, যা একজন প্রাপ্তবয়স্কের মোট দেহভরের প্রায় ৭% থেকে ১৫% দখল করে এবং প্রায় দেড় থেকে দুই বর্গমিটার স্থান জুড়ে বিস্তৃত থাকে। ত্বক কেবল একটি জড় আবরণ নয়, বরং এটি একটি গতিশীল জীবন্ত ব্যবস্থা যা দুটি প্রধান স্তর নিয়ে গঠিত—বাইরের কোষীয় এপিডার্মিস এবং নিচের আঁশযুক্ত ডার্মিস—যা চর্বিযুক্ত হাইপোডার্মিসের মাধ্যমে নিচের পেশী ও কঙ্কালের সাথে যুক্ত থাকে। এটি বাইরের পরিবেশের সাথে দেহের প্রধান সুরক্ষাপ্রাচীর।'
            ),
            l(
              'Every second of life, the integument tirelessly executes multiple survival imperatives: it prevents catastrophic whole-body desiccation by holding vital body water inside; it repels bacterial, viral, and fungal invasions; it synthesizes the vital hormone precursor cholecalciferol (vitamin D3) upon exposure to solar ultraviolet light; it continuously reports tactile, thermal, and noxious sensory data to the central nervous system; and it dynamically regulates core body temperature across shifting climatic extremes.',
              'প্রতিটি মুহূর্তে ত্বক অসংখ্য জীবনরক্ষাকারী কাজ পরিচালনা করে: এটি দেহের মূল্যবান পানি বাষ্পীভূত হতে না দিয়ে পানিশূন্যতা রোধ করে; ক্ষতিকর ব্যাকটেরিয়া, ভাইরাস ও ছত্রাকের অনুপ্রবেশ প্রতিহত করে; সূর্যের আলোর উপস্থিতিতে অপরিহার্য ভিটামিন ডি৩ সংশ্লেষ করে; স্পর্শ, তাপমাত্রা ও ব্যথার সংবেদন মস্তিষ্কে পাঠায়; এবং পরিবেশের তারতম্য সত্ত্বেও ভেতরের তাপমাত্রা ৩৭ ডিগ্রি সেলসিয়াসে স্থিতিশীল রাখে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Epidermal Layers and Cellular Differentiation', 'এপিডার্মিসের স্তরবিন্যাস ও কোষীয় রূপান্তর'),
          paragraphs: [
            l(
              'The epidermis is a keratinized stratified squamous epithelium devoid of blood vessels, entirely reliant upon microvascular diffusion from dermal capillaries beneath. In thick skin found on friction-heavy surfaces like palms and soles, five discrete histological strata are visible from deep to superficial: stratum basale, stratum spinosum, stratum granulosum, stratum lucidum, and stratum corneum. In thin skin covering the remainder of the human torso and limbs, the translucent stratum lucidum is absent, yielding four protective strata.',
              'এপিডার্মিস হলো রক্তনালীবিহীন একটি কেরাটিনযুক্ত যৌগিক আঁইশাকার আবরণী কলা, যা তার বেঁচে থাকার জন্য নিচের ডার্মিসের কৈশিকনালীর ব্যাপন প্রক্রিয়ার ওপর নির্ভর করে। হাতের তালু ও পায়ের পাতার মতো ঘর্ষণযুক্ত পুরু ত্বকে গভীর থেকে বাইরের দিকে ৫টি স্তর দেখা যায়: স্ট্র্যাটাম বেসাল, স্ট্র্যাটাম স্পাইনোসাম, স্ট্র্যাটাম গ্র্যানুলোসাম, স্ট্র্যাটাম লুসিডাম এবং স্ট্র্যাটাম কর্নিয়াম। শরীরের অন্যান্য অংশের পাতলা ত্বকে স্ট্র্যাটাম লুসিডাম অনুপস্থিত থাকে, ফলে সেখানে ৪টি স্তর বিদ্যমান থাকে।'
            ),
            l(
              'Four specialized cellular populations reside within this stratified sheet. Keratinocytes comprise roughly 90% of epidermal cells, undergoing continuous upward migration as they manufacture tough fibrous keratin proteins and lipid envelopes. Interspersed within the basal layer are melanocytes that synthesize protective melanin pigment, neurosensory Merkel cells that transduce light touch to sensory nerve terminals, and star-shaped Langerhans cells that patrol the spinous stratum to intercept and engulf microbial pathogens.',
              'এই স্তরে চারটি বিশেষায়িত কোষ বসবাস করে। প্রায় ৯০% কোষই হলো কেরাটিনোসাইট, যা ক্রমাগত ওপরের দিকে উঠে শক্ত কেরাটিন প্রোটিন তৈরি করে বাইরের আবরণ গঠন করে। বেসাল স্তরে অবস্থান করে মেলানিন প্রস্তুতকারী মেলানোসাইট, হালকা স্পর্শ গ্রহণকারী মের্কেল কোষ এবং স্পাইনোসাম স্তরে জীবাণু ধ্বংসের জন্য অতন্দ্র প্রহরীর মতো টহলরত অনাক্রম্য ল্যাঙ্গারহ্যান্স কোষ।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Dermis: Mechanical Strength, Glands and Sensory Receptors', 'ডার্মিস: যান্ত্রিক শক্তি, গ্রন্থিসমূহ ও সংবেদনশীল গ্রাহক'),
          paragraphs: [
            l(
              'Beneath the basement membrane lies the dermis, a vascular and tough fibrous envelope constructed from dense irregular connective tissue. The dermis is divided into a superficial papillary dermis and a deeper, thicker reticular dermis. The papillary layer features delicate finger-like ridges called dermal papillae that interlock with epidermal ridges, housing loops of capillary vessels and Meissner corpuscles that perceive delicate light touch, gentle flutter, and localized slip sensations.',
              'ভিত্তিঝিল্লির ঠিক নিচে অবস্থান করে রক্তনালী ও স্নায়ুসমৃদ্ধ ডার্মিস, যা ঘন অনিয়মিত কানেক্টিভ টিস্যু দিয়ে গঠিত। ডার্মিস দুটি অংশে বিভক্ত: ওপরের পাতলা প্যাপিলারি ডার্মিস এবং নিচের পুরু রেটিকুলার ডার্মিস। প্যাপিলারি স্তরে আঙুলের মতো প্রক্ষেপণ বা ডার্মাল প্যাপিলা থাকে যা এপিডার্মিসের সাথে খাঁজ তৈরি করে আটকে থাকে; এতে কৈশিকনালীর জালক এবং সূক্ষ্ম স্পর্শগ্রাহী মাইসনার করপাসল অবস্থান করে।'
            ),
            l(
              'The reticular dermis comprises the bulk of dermal thickness, woven from dense bundles of Type I collagen and springy elastin fibers that provide tensile durability and elasticity. Within this structural bed lie cutaneous appendages: hair follicles with associated sebaceous glands that secrete lubricating waterproof sebum; coiled eccrine sweat glands that pump evaporative water and electrolytes; apocrine sweat glands in axillary and anogenital zones; and deep encapsulated Pacinian corpuscles that register mechanical vibration.',
              'রেটিকুলার ডার্মিস মূলত পুরু কোলাজেন ও স্থিতিস্থাপক ইলাস্টিন তন্তু দিয়ে গঠিত যা ত্বককে প্রসারিত হতে এবং পূর্বাবস্থায় ফিরতে সাহায্য করে। এতে লোমকূপ, তৈলাক্ত সিবাম ক্ষরণকারী সিবাসিয়াস গ্রন্থি, ঘাম নিঃসরণকারী এক্রাইন গ্রন্থি এবং গভীর চাপ ও কম্পন গ্রহণকারী প্যাসিনিয়ান করপাসল সুরক্ষিত থাকে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Thermoregulation and Systemic Homeostasis', 'তাপনিয়ন্ত্রণ ও সামগ্রিক শারীরিক ভারসাম্য'),
          paragraphs: [
            l(
              'The integument operates as the primary peripheral radiator of human thermoregulation, coordinated directly by the preoptic anterior hypothalamus. When core body temperature rises during physical exertion or fever, hypothalamic sympathetic outflow dilates dermal arteriolar sphincters, diverting up to several liters of warm blood per minute through superficial capillary loops where heat dissipates via infrared radiation and convection into surrounding ambient air.',
              'মানবদেহের তাপমাত্রা নিয়ন্ত্রণে ত্বক একটি প্রাকৃতিক রেডিয়েটরের মতো কাজ করে, যা মস্তিষ্কের হাইপোথ্যালামাস দ্বারা নিয়ন্ত্রিত হয়। ব্যায়াম বা গরমের সময় হাইপোথ্যালামাস ত্বকের রক্তনালীগুলোকে প্রসারিত করে দেয়, যার ফলে প্রতি মিনিটে প্রচুর পরিমাণ উষ্ণ রক্ত ত্বকের উপরিভাগে চলে আসে এবং বিকিরণ ও পরিচলনের মাধ্যমে অতিরিক্ত তাপ পরিবেশে ছড়িয়ে পড়ে।'
            ),
            l(
              'Simultaneously, cholinergic sympathetic nerves stimulate 2 to 4 million eccrine sweat glands across the body surface to secrete clear hypotonic fluid. As sweat evaporates from the cutaneous surface, it absorbs roughly 0.58 kilocalories of heat per gram of evaporated water, efficiently cooling the circulating blood. Conversely, exposure to severe cold triggers reflex sympathetic vasoconstriction, shunting blood toward deep visceral veins to preserve core brain and cardiac warmth.',
              'একই সাথে স্নায়বিক সংকেতে সারা দেহে ছড়িয়ে থাকা ২০ থেকে ৪০ লক্ষ ঘর্মগ্রন্থি ঘাম নিঃসরণ শুরু করে। ত্বকের উপরিভাগ থেকে প্রতি গ্রাম ঘাম বাষ্পীভূত হওয়ার সময় প্রায় ০.৫৮ কিলোক্যালরি সুপ্ততাপ শোষণ করে রক্তকে শীতল করে তোলে। বিপরীতে, তীব্র শীতে ত্বকের রক্তনালী সংকুচিত হয়ে রক্তকে ভেতরের গুরুত্বপূর্ণ অঙ্গসমূহে পাঠিয়ে দিয়ে তাপ অপচয় রোধ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Assessment: Burn Staging and Skin Lesion Inspection', 'ক্লিনিক্যাল প্রয়োগ: পোড়া ক্ষতের পর্যায় ও ত্বকের রোগ পরীক্ষা'),
          paragraphs: [
            l(
              'Clinical assessment of integumentary injury categorizes burns by tissue depth. First-degree burns damage only the epidermis, causing localized erythema, swelling, and pain without blistering (e.g., mild sunburn). Second-degree burns extend through the epidermis into the dermis, producing painful weeping blisters. Third-degree burns destroy the entire thickness of both epidermis and dermis, appearing leathery, white, or charred, and are paradoxically insensitive to light touch due to the thermal destruction of dermal nerve endings.',
              'ত্বকের পোড়া আঘাতের চিকিৎসায় গভীরতা অনুসারে পর্যায় নির্ধারণ করা হয়। প্রথম ডিগ্রির পোড়ায় কেবল এপিডার্মিস ক্ষতিগ্রস্ত হয় এবং ফোস্কা ছাড়াই ত্বক লাল ও ব্যথাতুর হয়। দ্বিতীয় ডিগ্রির পোড়ায় ক্ষতি ডার্মিস পর্যন্ত বিস্তৃত হয় এবং তীব্র ব্যথাপূর্ণ ফোস্কা তৈরি করে। তৃতীয় ডিগ্রির পোড়ায় এপিডার্মিস ও ডার্মিসের পুরো স্তর পুড়ে যায়; স্নায়ুপ্রান্ত পুড়ে নষ্ট হয়ে যাওয়ায় রোগাক্রান্ত স্থানটিতে আপাতদৃষ্টিতে কোনো স্পর্শানুভূতি থাকে না।'
            ),
          ],
          bullets: [
            l('Check: Why do deep third-degree burns require skin grafting to heal without severe contractures? Answer: The entire basal layer containing epithelial stem cells and follicular epidermal reservoirs is destroyed, preventing spontaneous re-epithelialization.', 'যাচাই: তৃতীয় ডিগ্রির পোড়ায় চামড়া প্রতিস্থাপন (স্কিন গ্রাফটিং) কেন প্রয়োজন হয়? উত্তর: স্টেম সেলযুক্ত সম্পূর্ণ বেসাল স্তর এবং লোমকূপের কোষগুলো ধ্বংস হয়ে যাওয়ায় ত্বক নিজে নিজে নতুন আবরণ তৈরি করতে পারে না।'),
            l('Check: What is the Rule of Nines? Answer: An emergency clinical tool dividing adult anatomical body regions into multiples of 9% to rapidly estimate total body surface area burned.', 'যাচাই: রুল অব নাইনস কী? উত্তর: প্রাপ্তবয়স্কের পোড়া অংশের মোট ক্ষেত্রফল দ্রুত নির্ণয় করার একটি জরুরি ক্লিনিক্যাল পদ্ধতি যা দেহের বিভিন্ন অংশকে ৯%-এর গুণিতকে ভাগ করে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Integumentary System Key Concepts and Glossary', 'আবরণী তন্ত্রের মূল ধারণা ও শব্দকোষ'),
          paragraphs: [
            l(
              'The integumentary system is an essential physiological shield balancing dynamic protection with sensory feedback and homeostatic regulation. The stratified, self-renewing epidermis forms an impenetrable waterproof barrier; the collagen-rich dermis confers mechanical elasticity and houses glands, hair, and sensory corpuscles; and the adipose hypodermis buffers shock and conserves heat. Mastery of skin strata, neurovascular reflexes, and cutaneous pathology is foundational for emergency medicine, surgery, dermatology, and nursing.',
              'আবরণী তন্ত্র হলো একটি অপরিহার্য শারীরিক বর্ম যা বাইরের আঘাত থেকে রক্ষা, সংবেদন গ্রহণ এবং তাপমাত্রা নিয়ন্ত্রণের চমৎকার সমন্বয় সাধন করে। এপিডার্মিস পানিনিরোধক প্রাচীর তৈরি করে; ডার্মিস স্থিতিস্থাপকতা দেয় এবং লোম ও গ্রন্থিসমূহ ধারণ করে; আর হাইপোডার্মিস আঘাত শোষণ করে তাপ ধরে রাখে। ত্বকের এই কলাস্থানিক জ্ঞান জরুরি চিকিৎসা, সার্জারি ও চর্মরোগবিদ্যার জন্য অত্যন্ত গুরুত্বপূর্ণ।'
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
          heading: l('Embryogenesis of the Integumentary Organ System', 'আবরণী তন্ত্রের ভ্রূণতত্ত্ব ও বিকাশ'),
          paragraphs: [
            l(
              'The integumentary system arises from an intimate coordination between surface ectoderm and underlying mesenchyme during mammalian embryonic development. Surface ectoderm initially forms a single layer of cuboidal cells that divides at 4 to 5 weeks gestational age to form an outer transient protective periderm and a deeper germinative basal layer. Mesenchyme derived from lateral plate mesoderm (torso), somites (dorsal paraxial mesoderm), and cranial neural crest (face and anterior scalp) condensates beneath the basal lamina to form the fibrous dermis and subcutaneous adipose matrix.',
              'ভ্রূণীয় বিকাশের সময় সারফেস এক্টোডার্ম এবং নিচের মেসেনকাইমের নিবিড় সমন্বয়ের মাধ্যমে ত্বকের সৃষ্টি হয়। গর্ভধারণের চতুর্থ সপ্তাহে এক্টোডার্মের একক স্তর বিভাজিত হয়ে একটি অস্থায়ী পেরিডার্ম এবং একটি গভীর বেসাল স্তর তৈরি করে। পার্শ্বীয় মেসোডার্ম, সোমাইট এবং নিউরাল ক্রেস্ট থেকে আসা মেসেনকাইম ভিত্তিঝিল্লির নিচে একত্রিত হয়ে ডার্মিস এবং সাবকিউটেনিয়াস চর্বিযুক্ত স্তর গঠন করে।'
            ),
            l(
              'Melanoblasts migrate from the dorsal neural crest into the developing embryonic basal layer between weeks 8 and 10 of gestation, establishing functional dendritic associations with surrounding keratinocytes. Epidermal appendages—hair follicles, sebaceous glands, and eccrine sweat coils—develop through bidirectional reciprocal signaling cascades between the surface epithelial placodes and dermal mesenchymal condensates, orchestrated by Wnt/beta-catenin, Eda/Edar, and Sonic hedgehog (Shh) molecular morphogen pathways.',
              'গর্ভকালীন অষ্টম থেকে দশম সপ্তাহের মধ্যে মেলানোব্লাস্ট কোষগুলো নিউরাল ক্রেস্ট থেকে এপিডার্মিসের বেসাল স্তরে প্রবেশ করে এবং কেরাটিনোসাইটের সাথে সংযোগ স্থাপন করে। লোমকূপ, সিবাম গ্রন্থি ও ঘর্মগ্রন্থিসমূহ এপিথেলিয়াল প্লাকোড এবং ডার্মাল মেসেনকাইমের পারস্পরিক সংকেত বিনিময় (Wnt, Shh পথ)-এর মাধ্যমে সুশৃঙ্খলভাবে গঠিত হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Microscopic Architecture: The Epidermal Keratinization Cascade', 'অণুবীক্ষণিক গঠন: কেরাটিনাইজেশন ও কোষীয় স্তর'),
          paragraphs: [
            l(
              'The epidermal stratification sequence represents a programmed terminal differentiation trajectory lasting 28 to 40 days from basal mitosis to corneal desquamation. Keratinocytes in the stratum basale express basic keratin 5 (K5) and acidic keratin 14 (K14) heterodimers. As daughter cells ascend into the stratum spinosum, they transition to expressing differentiation-specific K1 and K10 tonofilament networks and synthesize Odland bodies (lamellar granules) containing glucosylceramides, sphingomyelin, and cholesterol.',
              'এপিডার্মিসের স্তরবিন্যাস হলো প্রায় ২৮ থেকে ৪০ দিনব্যাপী একটি সুশৃঙ্খল কোষীয় রূপান্তর যাত্রা। বেসাল স্তরের কোষে কেরাটিন ৫ ও ১৪ তৈরি হয়। কোষগুলো যখন স্ট্র্যাটাম স্পাইনোসামে উঠে আসে, তখন তারা কেরাটিন ১ ও ১০ তৈরি করতে শুরু করে এবং ল্যামেলার গ্র্যানিউলসের মধ্যে গ্লুকোসিলসেরামাইড, স্ফিংগোমায়েলিন ও কোলেস্টেরল সঞ্চয় করে।'
            ),
            l(
              'In the stratum granulosum, cells flatten and synthesize basophilic keratohyalin granules composed of profilaggrin and loricrin. Enzymatic cleavage yields active filaggrin (filament-aggregating protein), which cross-links keratin tonofilaments into tightly compacted macrofibrils. Simultaneously, transglutaminase enzymes covalently cross-link loricrin and involucrin beneath the plasma membrane, forging a tough cornified cell envelope. Extrusion of lamellar granule lipids seals the intercellular space into an impermeable lipid bilayer mortar.',
              'স্ট্র্যাটাম গ্র্যানুলোসামে কোষগুলো চ্যাপ্টা হয়ে কেরাটোহায়ালিন দানা (প্রোফিলাগ্রিন ও লোরিকরিন) তৈরি করে। ফিলাগ্রিন প্রোটিন কেরাটিন ফিলামেন্টগুলোকে নিবিড়ভাবে আবদ্ধ করে শক্ত রূপ দেয়। ট্রান্সগ্লুটামিনেজ এনজাইম কোষঝিল্লির নিচে একটি অবিচ্ছেদ্য কর্নিফাইড খোলস তৈরি করে এবং ল্যামেলার দানা থেকে নির্গত লিপিড কোষগুলোর মাঝে একটি সম্পূর্ণ পানিনিরোধক স্তর গড়ে তোলে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Photoprotection, Melanogenesis, and Dermal Cleavage Lines', 'সূর্যরশ্মি প্রতিরোধ, মেলানিন সংশ্লেষ ও ল্যাঙ্গার লাইনস'),
          paragraphs: [
            l(
              'Cutaneous photoprotection is governed by epidermal melanin synthesized inside specialized lysosome-related organelles termed melanosomes. The copper-dependent enzyme tyrosinase hydroxylates tyrosine to dihydroxyphenylalanine (DOPA) and oxidizes DOPA to dopaquinone, yielding insoluble photoprotective eumelanin (brown/black) or sulfur-containing pheomelanin (yellow/red). Melanocyte dendrites transfer mature melanosomes to adjacent keratinocytes, which position these melanin pigment caps supranuclearly like molecular parasols to absorb ultraviolet photons and prevent thymine dimer mutagenesis.',
              'ত্বকের সূর্যরশ্মি প্রতিরোধ ব্যবস্থা মেলানোসোমে তৈরি হওয়া মেলানিন রঞ্জক দ্বারা পরিচালিত হয়। টাইরোসিনেজ এনজাইমের মাধ্যমে টাইরোসিন অ্যামাইনো অ্যাসিড জারিত হয়ে বাদামী/কালো ইউমেলানিন অথবা লালচে ফিওমেলানিন তৈরি করে। মেলানোসাইটের ডেনড্রাইটগুলো পরিপক্ব মেলানোসোম পাশের কেরাটিনোসাইটের নিউক্লিয়াসের ওপর ছাতার মতো স্থাপন করে, যা অতিবেগুনী রশ্মি শোষণ করে DNA-কে মিউটেশন থেকে রক্ষা করে।'
            ),
            l(
              'Within the dense reticular dermis, thick bundles of Type I collagen orient along dominant biomechanical skin tension vectors termed Langer lines (cleavage lines). Surgical incisions placed strictly parallel to Langer lines experience minimal distraction force across the wound edges during movement, facilitating rapid myofibroblastic closure and resulting in fine, cosmetically superior linear scars. Incisions perpendicular to cleavage lines encounter strong perpendicular distraction forces, leading to wound dehiscence and hypertrophic cicatrization.',
              'রেটিকুলার ডার্মিসে কোলাজেন তন্তুগুলো নির্দিষ্ট শারীরিক টানের সমান্তরালে বিন্যস্ত থাকে, যাকে ল্যাঙ্গার লাইনস বা ক্লিভেজ লাইন বলা হয়। শল্যচিকিৎসায় এই লাইনের সমান্তরালে চামড়া কাটলে ক্ষত দ্রুত জোড়া লাগে এবং দাগ অত্যন্ত সূক্ষ্ম হয়। বিপরীতভাবে, এই লাইনের আড়াআড়ি কাটলে টানের কারণে ক্ষত খুলে যাওয়ার এবং পুরু দাগ (হাইপারট্রফিক স্কার) পড়ার ঝুঁকি বাড়ে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Endocrine and Neurosensory Cutaneous Integration', 'ত্বকের অন্তঃক্ষরা ও সংবেদনশীল স্নায়বিক সমন্বয়'),
          paragraphs: [
            l(
              'The skin functions as a critical endocrine organ initiating whole-body calcium homeostasis. Photons of solar ultraviolet B (UVB, wavelengths 290–315 nm) penetrate into the stratum spinosum and basale, triggering the photolytic cleavage of 7-dehydrocholesterol into previtamin D3, which thermally isomerizes into cholecalciferol (vitamin D3). Cholecalciferol subsequently enters dermal capillaries bound to vitamin D-binding protein, undergoing sequential enzymatic 25-hydroxylation in the liver and 1-alpha-hydroxylation in the kidneys to yield active calcitriol.',
              'ত্বক ক্যালসিয়াম নিয়ন্ত্রণে একটি গুরুত্বপূর্ণ এন্ডোক্রাইন অঙ্গ হিসেবে কাজ করে। সূর্যের অতিবেগুনী বি (UVB) রশ্মি এপিডার্মিসের বেসাল স্তরে প্রবেশ করে ৭-ডিহাইড্রোকোলেস্টেরলকে ভেঙে প্রিভিটামিন ডি৩ তৈরি করে, যা ভিটামিন ডি৩ (কোলেক্যালসিফেরল)-এ রূপান্তরিত হয়। রক্তপ্রবাহের মাধ্যমে এটি প্রথমে যকৃতে ২৫-হাইড্রক্সিলেশন এবং পরে বৃক্কে ১-আলফা-হাইড্রক্সিলেশনের মাধ্যমে চূড়ান্ত সক্রিয় ক্যালসিট্রিওল হরমোন তৈরি করে।'
            ),
            l(
              'Sensory innervations of the dermis and epidermis comprise specialized low-threshold mechanoreceptors and free nerve endings. Unmyelinated epidermal free nerve endings expressing transient receptor potential (TRP) cation channels transduce temperature and nociceptive noxious chemical stimuli. Rapidly adapting Meissner corpuscles in dermal papillae respond to light touch and dynamic slip, slowly adapting Merkel discs perceive sustained edges and surface texture, and deeply situated Pacinian corpuscles fire rapidly in response to mechanical vibrations up to 250 Hz.',
              'ত্বকের স্নায়বিক ব্যবস্থায় বিশেষায়িত স্পর্শগ্রাহী এবং উন্মুক্ত স্নায়ুপ্রান্ত বিদ্যমান। উন্মুক্ত স্নায়ুপ্রান্তগুলো তাপমাত্রা এবং ব্যথার সংবেদন গ্রহণ করে। প্যাপিলারি স্তরের মাইসনার করপাসল হালকা স্পর্শ, মের্কেল ডিস্ক দীর্ঘস্থায়ী চাপ ও টেক্সচার এবং গভীরে অবস্থিত প্যাসিনিয়ান করপাসল উচ্চ কম্পাঙ্কের কম্পন সংকেত দ্রুত মস্তিষ্কে প্রেরণ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Dermatopathological Diagnosis: Malignant Cutaneous Neoplasia', 'ডার্মাটোপ্যাথলজি: ত্বকের ক্যান্সারের তুলনামূলক বিশ্লেষণ'),
          paragraphs: [
            l(
              'Cutaneous malignancies represent the most prevalent human cancers, divided into non-melanoma skin cancers and malignant melanoma. Basal cell carcinoma (BCC), arising from the basal stratum, represents 75% of non-melanoma cases, characterized by pearly translucent papules with telangiectasias that locally invade but rarely metastasize. Squamous cell carcinoma (SCC) originates from spinous keratinocytes, forming hyperkeratotic, ulcerated nodules with potential for regional lymphatic dissemination, frequently preceded by premalignant actinic keratosis.',
              'ত্বকের ক্যান্সার মানবদেহের সর্বাধিক সাধারণ ক্যান্সার, যা নন-মেলানোমা ও মেলানোমাতে বিভক্ত। বেসাল সেল কার্সিনোমা (BCC) বেসাল স্তরের স্টেম সেল থেকে তৈরি হয় এবং উজ্জ্বল মুক্তার মতো গুটি তৈরি করে স্থানীয়ভাবে আক্রমণ করলেও সহজে দূরবর্তী স্থানে ছড়ায় না। স্কোয়ামাস সেল কার্সিনোমা (SCC) স্পাইনোসাম স্তরের কোষ থেকে তৈরি হয় এবং ক্ষতযুক্ত শক্ত পিণ্ড তৈরি করে লিম্ফ নোডে ছড়িয়ে পড়ার ঝুঁকি বহন করে।'
            ),
          ],
          bullets: [
            l('Assessment: In a patient with extensive blistering following drug exposure, skin biopsy demonstrates full-thickness epidermal necrosis with subepidermal detachment. What life-threatening condition is diagnosed? Answer: Toxic Epidermal Necrolysis (TEN) / Stevens-Johnson Syndrome (SJS spectrum), carrying severe hypovolemic and septic mortality risk.', 'মূল্যায়ন: ওষুধের প্রতিক্রিয়ায় রোগীর ত্বক সম্পূর্ণ বিচ্ছিন্ন হয়ে আলগা হয়ে গেলে কোন রোগ নির্দেশ করে? উত্তর: টক্সিক এপিডার্মাল নেক্রোলাইসিস (TEN) বা স্টিভেনস-জনসন সিন্ড্রোম, যা তীব্র পানিশূন্যতা ও ইনফেকশনের কারণে জীবনঘাতী হতে পারে।'),
            l('Assessment: Describe the pathophysiological defect underlying junctional epidermolysis bullosa. Answer: Inherited genetic mutations in laminin-332, alpha-6 beta-4 integrin, or type XVII collagen impair hemidesmosomal anchorage at the dermal-epidermal junction, causing blistering under minimal mechanical friction.', 'মূল্যায়ন: জাংশনাল এপিডার্মোলাইসিস বুলোসার আণবিক কারণ কী? উত্তর: ল্যামিনিন-৩৩২ বা হেমিডেসমোজোমাল প্রোটিনের জিনগত ত্রুটির কারণে সামান্য ঘর্ষণেই এপিডার্মিস ডার্মিস থেকে আলাদা হয়ে মারাত্মক ফোস্কা তৈরি করে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Academic Foundations of Dermatology', 'ডার্মাটোলজির মূল একাডেমিক ভিত্তি ও সারসংক্ষেপ'),
          paragraphs: [
            l(
              'A thorough anatomical grounding in the integumentary system unites microscopic cytokeratin biochemistry with clinical disease presentation. The continuous keratinization gradient of the stratified epidermis maintains waterproof barrier defense and immunoprotection; the fibrous papillary and reticular dermis governs mechanical resilience, microvascular heat exchange, and exocrine sweating; and the subcutaneous hypodermis provides metabolic insulation. Recognizing the cellular origins of burns, blistering autoimmunities, and cutaneous carcinomas provides indispensable diagnostic acuity.',
              'আবরণী তন্ত্রের কলাস্থানিক গঠন আণবিক কোষবিজ্ঞানের সাথে চর্মরোগের সরাসরি সমন্বয় সাধন করে। এপিডার্মিসের অবিরাম কেরাটিনাইজেশন পানিনিরোধক প্রাচীর গড়ে তোলে; ডার্মিস যান্ত্রিক প্রসারণ ও তাপনিয়ন্ত্রণ নিয়ন্ত্রণ করে; এবং হাইপোডার্মিস মেটাবলিক কুশন দেয়। পোড়া ক্ষত, ফোস্কারোগ এবং ত্বকের ক্যান্সারের উৎস বুঝতে এই ভিত্তি অত্যন্ত সহায়ক।'
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
          heading: l('Frontiers in Cutaneous Immunology and the Skin Microbiome', 'ত্বকের ইমিউনোলজি ও মাইক্রোবায়োম গবেষণা'),
          paragraphs: [
            l(
              'Modern molecular dermatology views the human skin as an active immunological organ populated by diverse commensal microorganisms (Staphylococcus epidermidis, Cutibacterium acnes, Malassezia yeasts). Commensal bacteria continuously prime cutaneous innate immunity by stimulating keratinocytes to secrete antimicrobial peptides (cathelicidins, human beta-defensins). Disruptions in epidermal filaggrin (FLG) loss-of-function mutations alter stratum corneum barrier permeability and acid mantle pH, provoking dysbiotic microbial colonization and driving type 2 inflammatory cascades characteristic of severe atopic dermatitis.',
              'আধুনিক আণবিক ডার্মাটোলজি ত্বককে একটি সক্রিয় অনাক্রম্য অঙ্গ হিসেবে দেখে যাতে লক্ষ লক্ষ উপকারী ব্যাকটেরিয়া বসবাস করে। এই অণুজীবগুলো কেরাটিনোসাইটকে উদ্দীপিত করে অ্যান্টিমাইক্রোবিয়াল পেপটাইড ক্ষরণ করায় যা ক্ষতিকর প্যাথোজেন প্রতিরোধ করে। ফিলাগ্রিন জিনের মিউটেশন ত্বকের এসিডিক pH বদলে দিলে মাইক্রোবায়োমের ভারসাম্য নষ্ট হয় এবং অ্যাটোপিক ডার্মাটাইটিসের মতো তীব্র প্রদাহের সৃষ্টি হয়।'
            ),
            l(
              'Cutaneous resident memory T cells (T_RM cells, CD4+ and CD8+ expressing CD69 and CD103) persist within the epidermis and dermis for decades following resolution of local infections. While these non-recirculating cells provide instantaneous localized defense upon pathogen re-exposure, inappropriate persistent activation of autoimmune T_RM populations drives chronic dermatoses including localized psoriasis plaques and vitiligo. Targeted pharmacological blockade of interleukin-17 (IL-17A) and interleukin-23 (IL-23) pathways demonstrates unprecedented clinical efficacy in halting psoriatic epidermal hyperproliferation.',
              'ত্বকের অভ্যন্তরে রেসিডেন্ট মেমোরি টি-সেল (T_RM) কয়েক দশক ধরে অবস্থান করে স্থানীয়ভাবে তাৎক্ষণিক অনাক্রম্য পাহারা দেয়। তবে এই কোষগুলোর অনিয়ন্ত্রিত অতি-সক্রিয়তা সোরিয়াসিস ও শ্বেতীর (ভিটিলিগো) মতো দীর্ঘস্থায়ী অটোইমিউন রোগ সৃষ্টি করে। ইন্টারলিউকিন-১৭ ও ২৩ সংকেত বন্ধকারী আধুনিক বায়োলজিক ওষুধগুলো সোরিয়াসিসের অনিয়ন্ত্রিত কোষ বৃদ্ধি থামাতে অত্যন্ত কার্যকর প্রমাণিত হয়েছে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Stem Cell Plasticity and Tissue Engineering in Skin Regeneration', 'স্টেম সেল প্লাস্টিসিটি ও ত্বক পুনর্গঠন প্রকৌশল'),
          paragraphs: [
            l(
              'Cutaneous regenerative medicine relies on dissecting distinct stem cell niches within the skin: interfollicular basal stem cells, hair follicle bulge stem cells (expressing Lgr5 and CD34), and sebaceous gland progenitors. Following catastrophic full-thickness cutaneous trauma or deep thermal burns, Lgr5+ bulge stem cells exhibit remarkable phenotypic plasticity, emigrating out of hair follicles and reprogramming into interfollicular keratinocytes to re-epithelialize damaged dermal surfaces.',
              'ত্বক পুনর্গঠন চিকিৎসাবিজ্ঞান ত্বকের বিভিন্ন স্টেম সেল কুলুঙ্গি (হেয়ার ফলিকল বাল্জের Lgr5+ স্টেম সেল এবং বেসাল স্টেম সেল)-র ওপর নির্ভর করে। মারাত্মক পোড়া আঘাতের পর বাল্জের স্টেম কোষগুলো লোমকূপ থেকে বের হয়ে এসে নতুন এপিডার্মিস তৈরি করতে পারে।'
            ),
            l(
              'Engineered cellular scaffolds now combine biodegradable synthetic matrices (collagen-glycosaminoglycan polymers) with autologous keratinocytes and dermal fibroblasts expanded in vitro. Advanced 3D bioprinting technologies depositing vascular endothelial cells alongside epidermal and dermal layers are actively overcoming the critical microvascular perfusion bottleneck in large-surface skin grafts, transforming survival outcomes for severe burn casualties.',
              'আধুনিক ৩ডি বায়োপ্রিন্টিং প্রযুক্তির মাধ্যমে কোলাজেন পলিমার, অটোলোগাস কেরাটিনোসাইট এবং ডার্মাল রক্তনালীর এন্ডোথেলিয়াল কোষ একত্রিত করে কৃত্রিম জীবন্ত ত্বক তৈরি করা হচ্ছে, যা পোড়া রোগীদের জীবন বাঁচাতে যুগান্তকারী ভূমিকা রাখছে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible five-step schematic detailing integumentary organization: epidermal stratification, basal stem cell renewal, dermal fibrous support, microvascular thermoregulation, and subcutaneous cushioning.',
      'আবরণী তন্ত্রের সংগঠনের ৫টি ধাপ: এপিডার্মাল স্তরবিন্যাস, বেসাল স্টেম সেলের বিভাজন, ডার্মিসের সংযোজক কাঠামো, রক্তনালীর মাধ্যমে তাপমাত্রা নিয়ন্ত্রণ এবং ত্বকের নিচের চর্বিস্তর।'
    ),
    steps: [
      l(
        '1. Stratum basale stem cells undergo continuous mitosis to generate new keratinocyte cohorts.',
        '১. স্ট্র্যাটাম বেসাল স্টেম কোষগুলো ক্রমাগত বিভাজিত হয়ে নতুন কেরাটিনোসাইট তৈরি করে।'
      ),
      l(
        '2. Keratinocytes ascend through spinous and granular strata, accumulating keratin tonofilaments and lipid envelopes.',
        '২. কেরাটিনোসাইট স্পাইনোসাম ও গ্র্যানুলোসাম স্তরে উঠে কেরাটিন ও লিপিড আবরণ তৈরি করে।'
      ),
      l(
        '3. Anucleate stratum corneum squames form a tough, waterproof, desquamating outer envelope.',
        '৩. নিউক্লিয়াসবিহীন কর্নিওসাইট একটি শক্তিশালী পানিনিরোধক বহিরাবরণ গঠন করে।'
      ),
      l(
        '4. Papillary and reticular dermis provide tensile collagen scaffolding, tactile sensation, and thermoregulatory vascular loops.',
        '৪. ডার্মিস ত্বককে স্থিতিস্থাপকতা দেয়, সংবেদন গ্রহণ করে এবং রক্তনালীর মাধ্যমে তাপমাত্রা নিয়ন্ত্রণ করে।'
      ),
      l(
        '5. Adipose hypodermis anchors the skin, absorbs kinetic shock, and insulates deep visceral structures.',
        '৫. চর্বিযুক্ত হাইপোডার্মিস ত্বককে নিচের স্তরে নোঙর করে, আঘাত শোষণ করে এবং তাপমাত্রা ধরে রাখে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'In a patient suffering full-thickness burns involving the anterior surface of both lower limbs and the anterior trunk, what is the estimated total body surface area (TBSA) burned according to the adult Rule of Nines?',
      'একজন প্রাপ্তবয়স্ক রোগীর উভয় পায়ের সামনের অংশ এবং বুকের সামনের অংশ পুড়ে গেলে রুল অব নাইনস অনুসারে পোড়া অংশের শতকরা হার কত?'
    ),
    options: [
      l('18%', '১৮%'),
      l('27%', '২৭%'),
      l('36%', '৩৬%'),
      l('45%', '৪৫%'),
    ],
    correctIndex: 2,
    explanation: l(
      'According to the Rule of Nines: the anterior trunk accounts for 18%, and the anterior surface of each lower limb accounts for 9% (18% for the entire limb). Therefore: 18% (trunk) + 9% (right anterior lower limb) + 9% (left anterior lower limb) = 36% TBSA.',
      'রুল অব নাইনস অনুসারে: বুকের সামনের অংশ ১৮% এবং প্রতিটি পায়ের সামনের অংশ ৯% (পুরো পা ১৮%)। সুতরাং: ১৮% (বুক) + ৯% (ডান পা) + ৯% (বাম পা) = ৩৬% TBSA।'
    ),
  },
}
