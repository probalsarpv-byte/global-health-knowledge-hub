import type { LessonTopic, Localized, ReferenceItem } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs: ReferenceItem[] = [
  {
    id: 'novelline-radiology-7e',
    title: "Squire's Fundamentals of Radiology, 7th Edition",
    authors: 'Novelline RA',
    organization: 'Harvard University Press',
    year: 2012,
    url: 'https://www.hup.harvard.edu/books/9780674012790',
  },
  {
    id: 'herring-radiology-5e',
    title: 'Learning Radiology: Recognizing the Basics, 5th Edition',
    authors: 'Herring W',
    organization: 'Elsevier Health Sciences',
    year: 2023,
    url: 'https://www.elsevier.com/books/learning-radiology/herring/978-0-323-87817-3',
  },
  {
    id: 'bushberg-physics-4e',
    title: 'The Essential Physics of Medical Imaging, 4th Edition',
    authors: 'Bushberg JT, Seibert JA, Leidholdt EM, Boone JM',
    organization: 'Wolters Kluwer',
    year: 2020,
    url: 'https://www.wolterskluwer.com/en/solutions/lippincott-williams-wilkins',
  },
  {
    id: 'moore-anatomy-9e',
    title: 'Clinically Oriented Anatomy, 9th Edition',
    authors: 'Dalley AF, Agur AMR',
    organization: 'Wolters Kluwer',
    year: 2022,
    url: 'https://www.wolterskluwer.com/en/solutions/lippincott-williams-wilkins',
  },
]

export const chapter24ImagingOrientationLesson: LessonTopic = {
  id: 'topic.anatomy.imaging-orientation',
  slug: 'imaging-orientation',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('24 · Imaging and Sectional Anatomy Orientation', '২৪ · ইমেজিং ও সেকশনাল শারীরস্থান ওরিয়েন্টেশন'),
  summary: l(
    'A comprehensive foundation in diagnostic imaging modalities and sectional anatomical orientation: the five fundamental radiographic densities of conventional X-ray, computed tomography (CT) attenuation and Hounsfield unit (HU) quantitative scales with clinical windowing techniques, magnetic resonance imaging (MRI) tissue relaxation physics (T1-weighted, T2-weighted, FLAIR, and diffusion-weighted imaging), diagnostic ultrasound acoustic impedance and echogenicity spectrums, and standard sectional spatial orientation conventions across axial, coronal, and sagittal imaging planes.',
    'ডায়াগনস্টিক মেডিকেল ইমেজিং এবং সেকশনাল অ্যানাটমির মৌলিক ওরিয়েন্টেশনের সম্পূর্ণ পর্যালোচনা: প্রথাগত এক্স-রেতে দৃশ্যমান ৫টি মৌলিক রেডিওগ্রাফিক ঘনত্ব, কম্পিউটেড টমোগ্রাফি (সিটি স্ক্যান) শোষণ ও হাউন্সফিল্ড স্কেল (এইচইউ) ভিত্তিক উইন্ডোয়িং কৌশল, ম্যাগনেটিক রেজোন্যান্স ইমেজিং (এমআরআই) টিস্যু রিলাক্সেশন পদার্থবিজ্ঞান (টি১, টি২, ফ্লেয়ার ও ডিফিউশন-ওয়েটেড স্ক্যান), ডায়াগনস্টিক আল্ট্রাসাউন্ডের অ্যাকোস্টিক প্রতিবন্ধকতা ও ইকো কাঠামোর বিশ্লেষণ এবং অক্ষীয় (অ্যাক্সিয়াল), করোনার ও স্যাজিটাল তলে রোগীর শারীরিক দিকনির্দেশনার আন্তর্জাতিক মান।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Identify the five fundamental densities of projection radiography (air, fat, soft tissue/water, bone/mineral, and metal) and apply attenuation principles to interpret contrast differences.',
      'প্রজেকশন রেডিওগ্রাফির পাঁচটি মৌলিক ঘনত্ব (বায়ু, চর্বি, নরম কলা বা পানি, অস্থি বা খনিজ এবং ধাতু) চিহ্নিত করা এবং শোষণ নীতির ভিত্তিতে ঘনত্বের তারতম্য বিশ্লেষণ করা।'
    ),
    l(
      'Interpret computed tomography (CT) numbers on the Hounsfield unit scale (ranging from -1000 HU for air to +1000 HU for dense cortical bone) and manipulate window width and window level for targeted tissue evaluation.',
      'হাউন্সফিল্ড স্কেলে সিটি নম্বর বা অ্যাটেনুয়েশন মান (বাতাসের -১০০০ এইচইউ থেকে ঘন অস্থির +১০০০ এইচইউ পর্যন্ত) বিশ্লেষণ করা এবং সুনির্দিষ্ট অঙ্গ পরীক্ষার জন্য উইন্ডো উইডথ ও উইন্ডো লেভেল নিয়ন্ত্রণ বোঝা।'
    ),
    l(
      'Differentiate T1-weighted, T2-weighted, and FLAIR magnetic resonance imaging (MRI) signal characteristics based on fluid and fat contrast, evaluate ultrasound echogenicity patterns, and navigate cross-sectional anatomy in axial, coronal, and sagittal planes using standard radiological conventions.',
      'তরল এবং চর্বির বৈসাদৃশ্যের ওপর ভিত্তি করে টি১, টি২ এবং ফ্লেয়ার এমআরআই সিকোয়েন্সের সংকেত পৃথক করা, আল্ট্রাসাউন্ডের প্রতিফলন বৈশিষ্ট্য নির্ণয় করা এবং আন্তর্জাতিক রেডিওলজিক্যাল নিয়মে অক্ষীয়, করোনার ও স্যাজিটাল ক্রস-সেকশনাল চিত্র পাঠ করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.introduction'],
  relatedTopicIds: ['topic.anatomy.thorax', 'topic.anatomy.abdomen'],
  references: refs,
  evidenceBySection: {
    introduction: ['novelline-radiology-7e', 'herring-radiology-5e'],
    structure: ['novelline-radiology-7e', 'bushberg-physics-4e'],
    mechanism: ['bushberg-physics-4e', 'herring-radiology-5e'],
    integration: ['moore-anatomy-9e', 'herring-radiology-5e'],
    practice: ['herring-radiology-5e', 'moore-anatomy-9e'],
    takeaways: ['novelline-radiology-7e', 'bushberg-physics-4e'],
  },
  chapter: {
    toc: [
      { id: 'sec-radiographic-density', label: l('Projection Radiography & Five Fundamental Densities', 'প্রজেকশন রেডিওগ্রাফি ও পাঁচটি মৌলিক ঘনত্ব'), sectionId: 'introduction' },
      { id: 'sec-ct-hounsfield', label: l('Computed Tomography (CT) & Hounsfield Unit Windowing', 'কম্পিউটেড টমোগ্রাফি (সিটি) ও হাউন্সফিল্ড স্কেল'), sectionId: 'structure' },
      { id: 'sec-mri-ultrasound', label: l('MRI Physics & Diagnostic Ultrasound Echogenicity', 'এমআরআই পদার্থবিজ্ঞান ও আল্ট্রাসাউন্ড ইকো বৈশিষ্ট্য'), sectionId: 'mechanism' },
      { id: 'sec-sectional-planes', label: l('Sectional Viewing Conventions & Orthogonal Planes', 'সেকশনাল দিকনির্দেশনা ও ত্রিমাত্রিক শারীরিক তল'), sectionId: 'integration' },
      { id: 'sec-clinical-imaging', label: l('Clinical Scenarios: Acute Stroke, FAST & Chest X-Ray', 'ক্লিনিক্যাল প্রয়োগ: একিউট স্ট্রোক, ট্রমা ফাস্ট ও বুকের এক্স-রে'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Key Radiological Principles & Diagnostic Summary', 'রেডিওলজিক্যাল সারসংক্ষেপ ও ডায়াগনস্টিক মূলনীতি'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Hounsfield Unit (HU)', 'হাউন্সফিল্ড ইউনিট (Hounsfield Unit - HU)'),
        definition: l(
          'A quantitative dimensionless metric used in computed tomography (CT) describing the radiodensity of tissue relative to distilled water (defined as 0 HU) and air (defined as -1000 HU) at standard temperature and pressure. Named after Nobel laureate Sir Godfrey Hounsfield, it reflects the linear attenuation coefficient of X-ray photons traversing biological matter, where fat is roughly -100 to -50 HU, soft tissue is +30 to +60 HU, acute coagulated blood is +60 to +80 HU, and dense cortical bone approaches +1000 HU.',
          'কম্পিউটেড টমোগ্রাফিতে (সিটি স্ক্যান) টিস্যুর এক্স-রে শোষণ ক্ষমতা পরিমাপ করার জন্য ব্যবহৃত একটি সুনির্দিষ্ট স্কেল, যেখানে পাতিত পানির শোষণকে ০ এবং বাতাসকে -১০০০ এইচইউ ধরা হয়। নোবেল বিজয়ী স্যার গডফ্রে হাউন্সফিল্ডের নামানুসারে তৈরি এই স্কেলে চর্বি প্রায় -১০০ থেকে -৫০ এইচইউ, নরম কলা বা মাংসপেশি +৩০ থেকে +৬০ এইচইউ, জমাট বাঁধা রক্ত +৬০ থেকে +৮০ এইচইউ এবং নিরেট কঙ্কালের অস্থি +১০০০ এইচইউ পর্যন্ত পরিমাপ নির্দেশ করে।'
        ),
      },
      {
        term: l('T1 vs T2 MRI Relaxation Sequences', 'টি১ বনাম টি২ এমআরআই রিলাক্সেশন সিকোয়েন্স'),
        definition: l(
          'Fundamental radiofrequency pulse sequences reflecting distinct proton nuclear magnetic resonance relaxation properties within tissues. T1-weighted images emphasize longitudinal (spin-lattice) relaxation, rendering lipid/fat hyperintense (bright) and water/CSF hypointense (dark), providing exquisite spatial anatomical delineation. T2-weighted images emphasize transverse (spin-spin) relaxation, rendering water, CSF, and inflammatory edema hyperintense (bright) and dense fibrous tissue dark, optimizing detection of pathological fluid collections.',
          'এমআরআই যন্ত্রে টিস্যুর প্রোটন বা হাইড্রোজেন পরমাণুর চৌম্বকীয় ঘূর্ণনের শিথিলতা পরিমাপের দুটি বিপরীতধর্মী রেডিওতরঙ্গ সিকোয়েন্স। টি১-ওয়েটেড ছবিতে চর্বি উজ্জ্বল সাদা এবং পানি বা সিএসএফ তরল গাঢ় কালো দেখায়, যা স্বাভাবিক অঙ্গ ও কলার নিখুঁত শারীরিক গঠন প্রদর্শন করে। অপরদিকে টি২-ওয়েটেড ছবিতে পানি, মস্তিষ্ক-মেরুরস (সিএসএফ) এবং প্রদাহজনিত তরল অত্যন্ত উজ্জ্বল সাদা দেখায়, যা যেকোনো রোগ, টিউমার বা ক্ষতস্থান দ্রুত শনাক্ত করতে সহায়তা করে।'
        ),
      },
      {
        term: l('Radiological Sectional Viewing Convention', 'রেডিওলজিক্যাল সেকশনাল ওরিয়েন্টেশন বা অক্ষীয় নিয়ম'),
        definition: l(
          'The standardized international convention for inspecting cross-sectional axial (transverse) CT and MRI images, viewed from the perspective of an examiner standing at the supine patient’s feet and looking cephalad toward their head. Consequently, the patient’s anatomical right is located on the viewer’s left-hand side, the patient’s anatomical left is on the viewer’s right-hand side, anterior structures lie toward the top of the display, and posterior structures lie toward the bottom.',
          'সিটি স্ক্যান এবং এমআরআই-এর মতো ক্রস-সেকশনাল অক্ষীয় ছবি দেখার সার্বজনীন আন্তর্জাতিক নিয়ম, যেখানে পরীক্ষক রোগীর পায়ের কাছে দাঁড়িয়ে মাথার দিকে তাকাচ্ছেন বলে ধরে নেওয়া হয়। এর ফলে ছবির বাম পাশটি রোগীর শরীরের ডান দিক এবং ছবির ডান পাশটি রোগীর শরীরের বাম দিক নির্দেশ করে; পাশাপাশি ছবির ওপরের অংশ রোগীর সামনের দিক (অ্যান্টেরিয়র) এবং নিচের অংশ রোগীর পেছনের দিক (পোস্টেরিয়র) হিসেবে বিবেচিত হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Systematic Emergency CT Windowing and Acute Stroke Multimodal Evaluation', 'জরুরি সিটি উইন্ডোয়িং এবং একিউট স্ট্রোকের মাল্টিমোডাল মূল্যায়ন প্রক্রিয়া'),
        steps: [
          l(
            'Step 1: Inspect the non-contrast head CT (NCCT) on standard brain parenchymal window: Set window width (WW) to 80 HU and window level (WL) to 40 HU. Systematically exclude acute intracranial hemorrhage, which presents as a hyperattenuating mass (+60 to +80 HU) within brain parenchyma, subarachnoid cisterns, or subdural/epidural spaces.',
            'ধাপ ১: নন-কনট্রাস্ট মস্তিষ্কের সিটি স্ক্যান ব্রেন উইন্ডোতে পরীক্ষা করুন: উইন্ডো উইডথ ৮০ এইচইউ এবং উইন্ডো লেভেল ৪০ এইচইউ-তে স্থির করুন। মস্তিষ্কের ভেতরে বা সাবঅ্যারাকনয়েড স্তরে কোনো রক্তক্ষরণ আছে কিনা তা নিবিড়ভাবে দেখুন; জমাট বাঁধা তাজা রক্ত উজ্জ্বল সাদা রঙের তীব্র শোষণ (+৬০ থেকে +৮০ এইচইউ) হিসেবে ধরা পড়ে।'
          ),
          l(
            'Step 2: Adjust display to stroke window settings to detect early ischemic changes: Narrow the window settings (WW 30–40 HU, WL 30–35 HU) to heighten contrast between ischemic and normal cerebral cortex. Search for loss of gray-white matter differentiation, insular ribbon sign blurring, and effacement of cerebral cortical sulci indicating early cytotoxic intracellular edema.',
            'ধাপ ২: প্রাথমিক ব্রেন স্ট্রোক শনাক্ত করতে স্ট্রোক উইন্ডোতে পরিবর্তন করুন: বৈসাদৃশ্য বাড়ানোর জন্য উইন্ডোকে আরও সংকুচিত করুন (উইন্ডো উইডথ ৩০-৪০ এবং লেভেল ৩০-৩৫ এইচইউ)। সেরিব্রাল কর্টেক্সের ধূসর ও সাদা অংশের স্বাভাবিক সীমানা মুছে গেছে কিনা (ইনসুলার রিবন সাইন) এবং কোষ ফুলে যাওয়ার কারণে মস্তিষ্কের খাঁজ বা সালকাস চাপা পড়েছে কিনা তা পরীক্ষা করুন।'
          ),
          l(
            'Step 3: Correlate with MRI Diffusion-Weighted Imaging (DWI) and Apparent Diffusion Coefficient (ADC): Hyperintense signal on DWI combined with corresponding hypointense signal on the ADC map unequivocally confirms acute cytotoxic edema and restricted water diffusion within infarcted brain tissue within minutes of ischemic onset.',
            'ধাপ ৩: এমআরআই ডিফিউশন-ওয়েটেড স্ক্যান (ডিডব্লিউআই) এবং এডিসি মানচিত্রের সাথে মেলান: ডিডব্লিউআই ছবিতে উজ্জ্বল সাদা সংকেত এবং একই স্থানে এডিসি মানচিত্রে কালো দাগ দেখা দিলে নিশ্চিত হওয়া যায় যে রক্ত চলাচল বন্ধ হয়ে মস্তিষ্কের কোষের ভেতর পানি আটকে গেছে (রেস্ট্রিক্টেড ডিফিউশন), যা স্ট্রোকের কয়েক মিনিটের মধ্যেই নিখুঁতভাবে ধরা পড়ে।'
          ),
        ],
        conclusion: l(
          'Targeted window manipulation and multimodal diffusion imaging enable rapid differentiation between hemorrhagic contraindications and salvageable ischemic penumbra within the golden therapeutic window for thrombolysis.',
          'সঠিক রেডিওলজিক্যাল উইন্ডো নির্বাচন এবং অত্যাধুনিক ডিফিউশন স্ক্যান মস্তিষ্কে রক্তক্ষরণ ও রক্ত জমাট বাঁধার পার্থক্য অবিলম্বে পরিষ্কার করে দেয়, যা থ্রম্বোলাইসিস ইনজেকশন দেওয়ার মতো জীবনরক্ষাকারী চিকিৎসা দ্রুত শুরু করতে সক্ষম করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does cortical bone appear hyperdense (white) on CT but hypointense (black) on standard T1- and T2-weighted MRI sequences, and what physical tissue property accounts for this divergence?',
          'সিটি স্ক্যানে অস্থির বাইরের শক্ত অংশ উজ্জ্বল সাদা দেখা গেলেও টি১ এবং টি২ এমআরআই ছবিতে কেন তা ঘন কালো দেখায় এবং টিস্যুর কোন ভৌত বৈশিষ্ট্যের কারণে এই সম্পূর্ণ বিপরীত রূপ তৈরি হয়?',
        ),
        answer: l(
          'Computed tomography detects X-ray photon attenuation, which is governed by electron density and atomic number; dense cortical bone contains abundant high-Z calcium phosphate (hydroxyapatite), strongly attenuating X-rays and yielding high Hounsfield values (+1000 HU, white). Conversely, MRI generates signal exclusively from the nuclear magnetic resonance of mobile hydrogen protons within water and lipids. Dense cortical bone possesses extremely low free water content and tightly bound protons with rapid transverse relaxation (very short T2 decay <1 ms), producing virtually zero measurable transverse magnetization and yielding a complete signal void (black) across conventional MRI sequences.',
          'সিটি স্ক্যান নির্ভর করে পদার্থের ইলেকট্রন ঘনত্ব এবং পরমাণু সংখ্যার ওপর; নিরেট হাড়ে প্রচুর পরিমাণ ক্যালসিয়াম ও ফসফেট খনিজ থাকায় তা শক্তিশালীভাবে এক্স-রে শোষণ করে এবং সাদা রঙের উচ্চ মান (+১০০০ এইচইউ) দেখায়। অপরদিকে এমআরআই কাজ করে টিস্যুর পানির মুক্ত হাইড্রোজেন প্রোটনের চৌম্বকীয় সংকেত নিয়ে। নিরেট অস্থির ভেতর পানির পরিমাণ প্রায় শূন্য এবং এর প্রোটনগুলো অত্যন্ত শক্তভাবে আবদ্ধ থাকায় কোনো রেডিও সংকেত তৈরি করতে পারে না; ফলে এমআরআই ছবিতে শক্ত হাড় সবসময় সংকেতহীন কালো গহ্বরের মতো দেখা যায়।'
        ),
      },
      {
        question: l(
          'How does the acoustic impedance mismatch between soft tissue and gas or bone explain the generation of acoustic shadowing during abdominal ultrasound, and how does acoustic enhancement identify cystic fluid?',
          'পেটের আল্ট্রাসাউন্ড করার সময় নরম মাংসপেশি এবং বাতাস বা হাড়ের সংযোগস্থলে শব্দের প্রতিবন্ধকতার ব্যাপক পার্থক্যের কারণে কীভাবে শ্যাডো বা ছায়া তৈরি হয় এবং তরলভর্তি সিস্টের পেছনে বর্ধিত শব্দপ্রবাহ কেন দেখা যায়?',
        ),
        answer: l(
          'Acoustic impedance (Z = density × speed of sound) dictates the fraction of ultrasound energy reflected at tissue interfaces. When sound waves encounter a boundary between soft tissue (Z ≈ 1.63 MRayl) and bone (Z ≈ 7.8 MRayl) or bowel gas (Z ≈ 0.0004 MRayl), nearly 99% to 100% of the acoustic beam is reflected or attenuated, leaving no sound transmission beyond the reflector and producing an anechoic dark acoustic shadow beneath gallstones or ribs. In contrast, simple fluid (such as bile or urine) exhibits negligible attenuation compared to surrounding solid parenchyma; the sound beam traverses the fluid unhindered, arriving at the deep interface with preserved amplitude, generating an artefactual bright hyperechoic region termed posterior acoustic enhancement.',
          'শব্দ প্রতিবন্ধকতা (Z = ঘনত্ব × শব্দের গতি) নির্ধারণ করে দুটি টিস্যুর সংযোগস্থলে কতটুকু শব্দ প্রতিফলিত হবে। শব্দতরঙ্গ যখন নরম কলা থেকে শক্ত হাড় বা অন্ত্রের বাতাসের সংযোগস্থলে পৌঁছায়, তখন প্রায় শতভাগ শব্দ তৎক্ষণাৎ বাধা পেয়ে ফিরে আসে অথবা শোষিত হয়ে যায়; ফলে পাথর বা হাড়ের পেছনের অংশে কোনো শব্দ পৌঁছাতে না পেরে একটি কালো ছায়া (পোস্টেরিয়র অ্যাকোস্টিক শ্যাডো) তৈরি হয়। বিপরীতে মূত্রথলি বা সিস্টের ভেতরের সাধারণ তরল শব্দ শোষণ করে না; শব্দতরঙ্গ কোনো ক্ষতি ছাড়াই তরল ভেদ করে পেছনের টিস্যুতে সজোরে আঘাত করে, যার ফলে সিস্টের ঠিক পেছনে অত্যন্ত উজ্জ্বল সাদা আভা (অ্যাকোস্টিক এনহ্যান্সমেন্ট) তৈরি হয় যা সিস্ট শনাক্ত করার নিশ্চিত লক্ষণ।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch24-imaging-orientation-diagram',
    title: l('Interactive Medical Imaging Modalities & Sectional Orientation Planes', 'ইন্টারেক্টিভ মেডিকেল ইমেজিং মাধ্যম ও সেকশনাল শারীরস্থান তল'),
    description: l(
      'Explore core diagnostic modalities and directional conventions: examine projection radiography densities, CT Hounsfield attenuation and windowing, MRI relaxation contrast sequences, and standard orthogonal cross-sectional planes.',
      'প্রধান ডায়াগনস্টিক ইমেজিং মাধ্যম এবং দিকনির্দেশনার নিয়মাবলী পরীক্ষা করুন: এক্স-রেতে পাঁচ ধরনের ঘনত্ব, সিটি স্ক্যানের হাউন্সফিল্ড স্কেল ও উইন্ডোয়িং, এমআরআই সিকোয়েন্সের বৈসাদৃশ্য এবং অক্ষীয়, করোনার ও স্যাজিটাল ক্রস-সেকশনাল শারীরস্থান তলসমূহ অন্বেষণ করুন।'
    ),
    disclaimer: l(
      'Diagnostic radiology reference diagram: select any imaging domain to inspect physical attenuation principles, signal characteristics, and anatomical orientation.',
      'ডায়াগনস্টিক রেডিওলজি সহায়িকা রেখাচিত্র: ভৌত শোষণ নীতি, সংকেতের বৈশিষ্ট্য এবং শারীরিক দিকনির্দেশনা দেখতে যেকোনো ইমেজিং মাধ্যম নির্বাচন করুন।'
    ),
    svgType: 'imaging-orientation-system',
    items: [
      {
        id: 'radiography-density',
        label: l('Projection Radiography & 5 Basic Densities', 'প্রজেকশন রেডিওগ্রাফি ও ৫টি মৌলিক ঘনত্ব'),
        description: l(
          'Differential X-ray beam absorption through matter producing black to white contrast: air/gas (black), fat (dark gray), water/soft tissue (light gray), bone/mineral (white), and metal (bright white).',
          'পদার্থের মধ্য দিয়ে এক্স-রে শোষণের পাঁচটি স্তর যা কালো থেকে সাদা বৈসাদৃশ্য সৃষ্টি করে: বাতাস (কালো), চর্বি (গাঢ় ধূসর), নরম কলা বা পানি (হালকা ধূসর), হাড় (সাদা) এবং ধাতু (উজ্জ্বল সাদা)।'
        ),
        details: l(
          'Radiolucent structures transmit photons to expose silver halide or digital detectors, whereas radio-opaque structures absorb photons, casting sharp diagnostic silhouettes.',
          'রেডিওলুসেন্ট গঠন বেশি এক্স-রে পার হতে দিয়ে ফিল্মকে কালো করে, আর রেডিও-অপেক গঠন এক্স-রে শোষণ করে ফিল্মকে সাদা রেখে নিখুঁত কঙ্কাল কাঠামো প্রদর্শন করে।'
        ),
        sectionId: 'introduction',
        color: '#38bdf8',
        svgCoords: { x: 30, y: 30, width: 300, height: 50 },
      },
      {
        id: 'computed-tomography',
        label: l('Computed Tomography (CT) & Hounsfield Scale', 'কম্পিউটেড টমোগ্রাফি (সিটি) ও হাউন্সফিল্ড স্কেল'),
        description: l(
          'Quantitative cross-sectional cross-beam reconstruction measuring Hounsfield units (HU) calibrated from air (-1000 HU) to water (0 HU) to dense bone (+1000 HU).',
          'এক্স-রে রশ্মির ঘূর্ণনভিত্তিক ক্রস-সেকশনাল প্রযুক্তি যা টিস্যুর শোষণকে সংখ্যাগত হাউন্সফিল্ড স্কেলে (-১০০০ এইচইউ বাতাস থেকে ০ এইচইউ পানি ও +১০০০ এইচইউ হাড়) পরিমাপ করে।'
        ),
        details: l(
          'Window width (WW) and window level (WL) settings map targeted narrow HU ranges into grayscale displays, isolating mediastinum, lung parenchyma, brain, or cortical bone.',
          'উইন্ডো উইডথ এবং লেভেল নিয়ন্ত্রণের মাধ্যমে নির্দিষ্ট ঘনত্বের টিস্যুকে স্পষ্টভাবে দেখার জন্য কম্পিউটারের পর্দায় ধূসর রঙের বিন্যাস পরিবর্তন করা হয়।'
        ),
        sectionId: 'structure',
        color: '#818cf8',
        svgCoords: { x: 30, y: 100, width: 300, height: 50 },
      },
      {
        id: 'magnetic-resonance',
        label: l('Magnetic Resonance Imaging (T1, T2 & FLAIR)', 'ম্যাগনেটিক রেজোন্যান্স ইমেজিং (টি১, টি২ ও ফ্লেয়ার)'),
        description: l(
          'Hydrogen proton nuclear magnetic resonance imaging: T1 sequences show bright fat and dark fluid; T2 sequences show bright fluid and pathology; FLAIR suppresses free CSF to highlight lesions.',
          'হাইড্রোজেন প্রোটনের চৌম্বকীয় অনুরণন ভিত্তিক প্রযুক্তি: টি১-এ চর্বি সাদা ও পানি কালো দেখায়; টি২-তে পানি ও প্রদাহ সাদা দেখায়; আর ফ্লেয়ার সাধারণ পানি মুছে দিয়ে ক্ষতস্থান স্পষ্ট করে।'
        ),
        details: l(
          'No ionizing radiation; provides superior soft-tissue contrast resolution, sensitive detection of acute stroke with DWI, and precise neuro-musculoskeletal anatomical evaluation.',
          'কোনো ক্ষতিকর তেজস্ক্রিয়তা নেই; এটি নরম কলার নিখুঁত পার্থক্য, স্ট্রোকের কয়েক মিনিটের ভেতর কোষের ক্ষতি এবং স্নায়ু ও পেশীর জটিল ব্যাধি স্পষ্টভাবে তুলে ধরে।'
        ),
        sectionId: 'mechanism',
        color: '#c084fc',
        svgCoords: { x: 30, y: 170, width: 300, height: 50 },
      },
      {
        id: 'sectional-planes',
        label: l('Sectional Orientation & Orthogonal Planes', 'সেকশনাল দিকনির্দেশনা ও শারীরিক তলসমূহ'),
        description: l(
          'Standard radiological inspection convention: axial slices viewed looking from the feet cephalad (patient right is viewer left; anterior is top; posterior is bottom).',
          'রেডিওলজির সার্বজনীন দেখার নিয়ম: অক্ষীয় ছবিগুলো রোগীর পায়ের নিচ থেকে মাথার দিকে দেখা হয় (রোগীর ডান পাশ ছবির বামে; রোগীর বুক ওপরে এবং পিঠ নিচে থাকে)।'
        ),
        details: l(
          'Coronal slices view the patient face-to-face; sagittal slices display anterior-posterior depth; multiplanar reconstructions integrate true 3D spatial anatomy.',
          'করোনার তল রোগীকে সামনাসামনি দেখায়; স্যাজিটাল তল পাশ থেকে সামনের ও পেছনের গভীরতা তুলে ধরে; এবং ত্রিমাত্রিক পুনর্গঠন নিখুঁত শারীরিক অবস্থান নিশ্চিত করে।'
        ),
        sectionId: 'integration',
        color: '#34d399',
        svgCoords: { x: 30, y: 240, width: 300, height: 50 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Nature of Diagnostic Radiation and the Five Radiographic Densities', 'ডায়াগনস্টিক বিকিরণের প্রকৃতি এবং পাঁচটি রেডিওগ্রাফিক ঘনত্ব'),
          paragraphs: [
            l(
              'Diagnostic radiology began with Wilhelm Röntgen’s discovery of X-rays in 1895, utilizing electromagnetic ionizing photons to penetrate anatomical tissue and cast internal shadows onto photosensitive media. Conventional projection radiography operates on the fundamental principle of differential attenuation: as the uniform X-ray beam traverses biological structures, tissues with higher mass density and greater atomic numbers absorb or scatter a larger fraction of incident photons, preventing them from reaching the detector behind the patient.',
              '১৮৯৫ সালে উইলহেম রন্টজেন কর্তৃক এক্স-রে আবিষ্কারের মাধ্যমে ডায়াগনস্টিক রেডিওলজির যাত্রা শুরু হয়, যেখানে উচ্চ ক্ষমতাসম্পন্ন তড়িচ্চৌম্বকীয় ফোটন কণা মানবদেহের ভেতর দিয়ে প্রবেশ করিয়ে অভ্যন্তরীণ অঙ্গের ছায়া তৈরি করা হয়। প্রজেকশন রেডিওগ্রাফি মূলত শোষণ বৈষম্যের নীতির ওপর কাজ করে: এক্স-রে রশ্মি যখন শরীরের বিভিন্ন কলার ভেতর দিয়ে অতিক্রম করে, তখন উচ্চ পরমাণু সংখ্যা ও ঘনত্বের টিস্যু বেশি পরিমাণ ফোটন শোষণ করে ডিটেক্টরে পৌঁছাতে বাধা দেয়।'
            ),
            l(
              'On plain film radiographs and modern digital detector arrays, these attenuation discrepancies resolve into five fundamental radiographic densities arranged along a continuous grayscale spectrum from black to white. Gas and air absorb the fewest photons, allowing maximal detector exposure to produce profound blackness (radiolucency); fat appears dark gray; water, muscle, blood, and solid viscera share identical intermediate attenuation, appearing light gray (soft tissue density); calcified bone and dental enamel attenuate strongly, appearing white (radiopaque); and surgical metal or dense barium contrast agents absorb virtually all photons, producing brilliant stark white.',
              'প্রথাগত এক্স-রে ফিল্ম এবং আধুনিক ডিজিটাল পর্দায় এই শোষণের পার্থক্যগুলো কালো থেকে সাদা রঙের পাঁচটি মূল রেডিওগ্রাফিক ঘনত্বে বিভক্ত হয়। বাতাস সবচেয়ে কম রশ্মি শোষণ করে বলে ফিল্ম সম্পূর্ণ কালো দেখায়; চর্বি গাঢ় ধূসর দেখায়; পানি, রক্ত, মাংসপেশি এবং পেটের নরম অঙ্গগুলো সমান আলো শোষণ করে হালকা ধূসর দেখায়; ক্যালসিয়ামসমৃদ্ধ হাড় প্রচুর রশ্মি শোষণ করে সাদা দেখায়; আর সার্জিক্যাল ধাতু বা বেরিয়াম সম্পূর্ণ রশ্মি আটকে দিয়ে সবচেয়ে উজ্জ্বল সাদা রঙে ফুটে ওঠে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Computed Tomography Fundamentals and the Hounsfield Scale', 'কম্পিউটেড টমোগ্রাফির মূল ভিত্তি এবং হাউন্সফিল্ড স্কেল'),
          paragraphs: [
            l(
              'While projection radiography collapses three-dimensional human anatomy into a single two-dimensional silhouette causing extensive overlapping of structures, computed tomography (CT) solves this limitation by rotating a focused fan-beam X-ray tube and opposed electronic detector array rapidly around the patient’s longitudinal axis. Powerful computer algorithms synthesize thousands of angular attenuation profiles using filtered back-projection to reconstruct a stack of contiguous cross-sectional anatomical slices, each consisting of an array of microscopic volumetric elements termed voxels.',
              'প্রথাগত সাধারণ এক্স-রে ত্রিমাত্রিক মানবদেহকে একটি মাত্র দ্বিমাত্রিক পর্দায় সংকুচিত করে ফেলে যার ফলে একটি অঙ্গের ওপর অন্য অঙ্গের ছায়া পড়ে বিভ্রান্তি সৃষ্টি হয়; কিন্তু কম্পিউটেড টমোগ্রাফি (সিটি স্ক্যান) রোগীর শরীরের চারদিকে ঘূর্ণায়মান এক্স-রে টিউব ও ডিটেক্টর ব্যবহার করে এই সীমাবদ্ধতা পুরোপুরি দূর করে। অত্যাধুনিক কম্পিউটার অ্যালগরিদম হাজার হাজার কোণ থেকে সংগৃহীত শোষণের উপাত্ত বিশ্লেষণ করে মানবদেহের পাতলা পাতলা ক্রস-সেকশনাল স্লাইস তৈরি করে যা প্রতিটি অঙ্গকে আলাদাভাবে দেখার সুযোগ দেয়।'
            ),
            l(
              'Each voxel in a CT image is assigned a quantitative CT number quantified in Hounsfield units (HU), calibrated against pure water (defined as 0 HU) and ambient air (defined as -1000 HU). In biological tissues, lung parenchyma filled with air measures approximately -800 to -600 HU; subcutaneous and visceral adipose tissue measures -120 to -60 HU; cerebrospinal fluid and clear transudative cysts measure 0 to +15 HU; muscular soft tissue, hepatic parenchyma, and the spleen measure +35 to +60 HU; acute clotted hematomas measure +60 to +80 HU; and dense cortical bone ranges from +700 to +1000 HU.',
              'সিটি স্ক্যানের প্রতিটি ক্ষুদ্র অংশের বা ভক্সেলের শোষণ ক্ষমতাকে নোবেলজয়ী পদার্থবিজ্ঞানীর নামানুসারে হাউন্সফিল্ড ইউনিটে (এইচইউ) প্রকাশ করা হয়, যেখানে বিশুদ্ধ পানিকে ০ এবং বাতাসকে -১০০০ এইচইউ হিসেবে ধরা হয়। মানবদেহে বাতাসভর্তি ফুসফুসের ঘনত্ব প্রায় -৮০০ থেকে -৬০০ এইচইউ; শরীরের চর্বি -১২০ থেকে -৬০ এইচইউ; মস্তিষ্ক-মেরুরস ও পানির সিস্ট ০ থেকে +১৫ এইচইউ; মাংসপেশি ও লিভার +৩৫ থেকে +৬০ এইচইউ; সদ্য জমাট বাঁধা রক্ত +৬০ থেকে +৮০ এইচইউ এবং শক্ত হাড় +৭০০ থেকে +১০০০ এইচইউ পর্যন্ত পরিমাপ নির্দেশ করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Magnetic Resonance and Ultrasound: Non-Ionizing Imaging Modalities', 'ম্যাগনেটিক রেজোন্যান্স ও আল্ট্রাসাউন্ড: ক্ষতিকর বিকিরণহীন ইমেজিং মাধ্যম'),
          paragraphs: [
            l(
              'Magnetic resonance imaging (MRI) eschews ionizing X-radiation entirely, operating on the quantum physics of nuclear magnetic resonance. Biological tissues are predominantly water and lipid, containing vast quantities of hydrogen nuclei (protons) that possess intrinsic spin and small magnetic moments. Placed inside a powerful static superconducting magnetic field (typically 1.5 to 3.0 Tesla), these random proton spins align parallel or antiparallel to the field, establishing a net longitudinal magnetization vector precessing at the tissue-specific Larmor frequency.',
              'ম্যাগনেটিক রেজোন্যান্স ইমেজিং বা এমআরআই কোনো প্রকার তেজস্ক্রিয় বিকিরণ ছাড়াই সম্পূর্ণ নিরাপদ কোয়ান্টাম পদার্থবিজ্ঞানের নিয়মে কাজ করে। মানবদেহের বেশিরভাগ অংশই পানি ও চর্বি দিয়ে তৈরি যাতে কোটি কোটি হাইড্রোজেন পরমাণুর প্রোটন উপস্থিত থাকে। রোগীকে যখন একটি অত্যন্ত শক্তিশালী সুপারকন্ডাক্টিং চুম্বকের (১.৫ থেকে ৩.০ টেসলা) ভেতরে রাখা হয়, তখন এই সমস্ত এলোমেলো প্রোটনগুলো চুম্বকের দিকে মুখ করে সারিবদ্ধ হয়ে যায় এবং একটি নির্দিষ্ট কম্পাঙ্কে (লারমর ফ্রিকোয়েন্সি) চক্রাকারে ঘুরতে থাকে।'
            ),
            l(
              'Diagnostic ultrasound similarly avoids ionizing radiation by transmitting high-frequency mechanical sound waves (typically 2 to 15 MHz) into the body via piezoelectric ceramic crystals mounted inside a transducer. As the acoustic wave travels through tissues, acoustic impedance mismatches at anatomical interfaces reflect a fraction of sound energy back to the transducer, which reconverts echoes into electrical signals. Tissues are characterized by echogenicity: simple fluids transmit sound without reflection and appear anechoic (jet black); solid parenchyma appears moderately echogenic (gray); and calcified structures reflect almost all sound, appearing intensely hyperechoic (bright white) with acoustic shadowing.',
              'ডায়াগনস্টিক আল্ট্রাসাউন্ডও কোনো ক্ষতিকর বিকিরণ ব্যবহার করে না, বরং ট্রান্সডিউসারের ভেতরে থাকা পাইজোইলেকট্রিক ক্রিস্টালের মাধ্যমে উচ্চ কম্পাঙ্কের শব্দতরঙ্গ (২ থেকে ১৫ মেগাহার্টজ) শরীরের ভেতরে পাঠায়। শব্দতরঙ্গ যখন বিভিন্ন অঙ্গের মধ্য দিয়ে প্রবাহিত হয়, তখন কলার ঘনত্বের পরিবর্তনের কারণে শব্দের একটি অংশ প্রতিফলিত হয়ে ফিরে আসে যা মনিটরে ছবি তৈরি করে। তরল কোনো বাধা ছাড়া শব্দ পার করে দেয় বলে সিস্ট সম্পূর্ণ কালো দেখায়; সাধারণ মাংসপেশি ধূসর দেখায়; আর পাথর বা হাড় শতভাগ শব্দ প্রতিফলিত করে উজ্জ্বল সাদা দেখায় এবং পেছনে কালো ছায়া তৈরি করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Sectional Anatomical Planes and the Radiological Viewing Perspective', 'সেকশনাল শারীরস্থান তল এবং রেডিওলজিক্যাল দেখার দৃষ্টিভঙ্গি'),
          paragraphs: [
            l(
              'Interpreting cross-sectional imaging requires complete fluency with the three orthogonal cardinal planes of the human body: the axial (transverse) plane dividing superior and inferior aspects; the coronal (frontal) plane dividing anterior and posterior aspects; and the sagittal plane dividing right and left aspects. Multiplanar reconstruction (MPR) allows modern volumetric CT and MRI datasets to be rotated and rendered in any arbitrary plane, preserving accurate isotropic spatial relationships across anatomical compartments.',
              'ক্রস-সেকশনাল চিত্র সঠিকভাবে বোঝার জন্য মানবদেহের তিনটি প্রধান দিক বা তলের নিখুঁত ধারণা থাকা জরুরি: অক্ষীয় বা ট্রান্সভার্স তল যা দেহকে ওপর ও নিচে বিভক্ত করে; করোনার বা ফ্রন্টাল তল যা দেহকে সামনে ও পেছনে বিভক্ত করে; এবং স্যাজিটাল তল যা দেহকে ডান ও বামে ভাগ করে। আধুনিক মাল্টিপ্লানার রিকনস্ট্রাকশন প্রযুক্তির সাহায্যে সিটি ও এমআরআই-এর ত্রিমাত্রিক ডাটা ব্যবহার করে যেকোনো কোণ থেকে শরীরের ভেতরের অঙ্গগুলোকে স্পষ্টভাবে প্রদর্শন করা যায়।'
            ),
            l(
              'Crucially, all cross-sectional axial images are presented according to a strict international radiological convention: the examiner views the image from the patient’s feet looking upward toward the head with the patient lying supine. Under this invariant orientation, structures on the patient’s anatomical right are displayed on the viewer’s left side; structures on the patient’s anatomical left are displayed on the viewer’s right side; anterior structures (such as the sternum or anterior abdominal wall) are positioned at the top; and posterior structures (such as the spine) are situated at the bottom.',
              'সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো, সমস্ত অক্ষীয় ছবি আন্তর্জাতিক রেডিওলজিক্যাল নিয়মে প্রদর্শিত হয় যেখানে চিকিৎসক রোগীর পায়ের কাছে দাঁড়িয়ে মাথার দিকে তাকাচ্ছেন বলে গণ্য করা হয়। এই অপরিবর্তনীয় নিয়মের কারণে রোগীর শরীরের ডান দিকের অঙ্গগুলো ছবির বাম পাশে দেখা যায়; রোগীর শরীরের বাম দিকের অঙ্গগুলো ছবির ডান পাশে দেখা যায়; রোগীর সামনের অংশ (যেমন বুকের হাড় বা পেট) ছবির ওপরে থাকে; এবং রোগীর পেছনের অংশ (যেমন মেরুদণ্ড) ছবির নিচে অবস্থান করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Clinical Practice: Systemic Plain Radiograph Reading', 'প্রাথমিক ক্লিনিক্যাল প্রয়োগ: সুশৃঙ্খল নিয়মে সাধারণ এক্স-রে পরীক্ষা'),
          paragraphs: [
            l(
              'Reading any projection radiograph requires a methodical, checklist-driven search pattern to avoid premature cognitive closure and missed subtle pathology. When evaluating a standard upright posteroanterior (PA) chest radiograph, clinicians employ the ABCDE mnemonic: A for Airway (ensuring the trachea is straight and midline); B for Breathing and lungs (comparing symmetry of lung fields, lung markings extending to peripheral pleura, and sharp costophrenic angles); C for Circulation (assessing the cardiothoracic ratio, normally <50%, and cardiac borders); D for Diaphragm (noting gastric bubble position and smooth diaphragmatic contours); and E for Everything else (examining ribs, clavicles, spine, and soft tissues).',
              'যেকোনো এক্স-রে ফিল্ম দেখার সময় কোনো রোগ যাতে চোখ এড়িয়ে না যায় সেজন্য একটি সুনির্দিষ্ট পদ্ধতি অনুসরণ করা আবশ্যক। বুকের খাড়া এক্স-রে (পিএ ভিউ) দেখার সময় চিকিৎসকরা এবিসিডিই (ABCDE) সূত্রটি ব্যবহার করেন: এ দিয়ে শ্বাসনালী (ট্রাকিয়া মাঝখানে সোজা আছে কিনা); বি দিয়ে ফুসফুস (উভয় ফুসফুসের রঙের মিল এবং কোনায় কোনো পানি জমেছে কিনা); সি দিয়ে রক্ত সংবহন (হৃৎপিণ্ডের আকার বুকের মোট চওড়ার অর্ধেকের কম কিনা); ডি দিয়ে ডায়াফ্রাম বা মধ্যচ্ছদা (ডায়াফ্রামের মসৃণতা ও নিচে বাতাস); এবং ই দিয়ে বাকি সবকিছু (পাঁজরের হাড়, কলারবোন এবং নরম মাংসপেশি) পরীক্ষা করা হয়।'
            ),
            l(
              'Recognizing the silhouette sign is paramount: when two intrathoracic structures of identical radiographic density (such as the heart and consolidated lung parenchyma) lie in direct anatomical contact in the same plane, their separating interface disappears. Loss of the right heart border indicates consolidation within the adjacent right middle lobe, whereas loss of the right hemidiaphragmatic silhouette indicates pathology within the right lower lobe, enabling accurate anatomical localization on a single projection view.',
              'বুকের এক্স-রেতে সিলুয়েট সাইন অত্যন্ত গুরুত্বপূর্ণ একটি লক্ষণ: যখন একই ঘনত্বের দুটি গঠন (যেমন হৃৎপিণ্ডের মাংসপেশি এবং নিউমোনিয়ায় আক্রান্ত ফুসফুস) একে অপরের সাথে সরাসরি লেগে থাকে, তখন তাদের মধ্যকার সীমারেখাটি মিলিয়ে যায়। হৃৎপিণ্ডের ডান পাশের বর্ডার মুছে গেলে বোঝা যায় ডান মধ্যম লোবে নিউমোনিয়া হয়েছে, আর ডায়াফ্রামের দাগ মুছে গেলে বোঝা যায় ফুসফুসের নিচের লোবে রোগটি হয়েছে; ফলে একটি মাত্র ছবি দেখেই রোগের সঠিক অবস্থান নিশ্চিতভাবে বলা যায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Essential Principles of Diagnostic Imaging Orientation', 'ডায়াগনস্টিক ইমেজিং ওরিয়েন্টেশনের সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Mastery of diagnostic imaging rests upon comprehending how physical energy interactions generate grayscale contrast across modalities: differential X-ray absorption produces five fundamental densities in projection radiography; quantitative linear attenuation defines Hounsfield units in computed tomography; proton relaxation times govern soft-tissue contrast in MRI; and acoustic impedance boundaries create echoes in diagnostic ultrasound.',
              'ডায়াগনস্টিক ইমেজিংয়ে দক্ষতা অর্জনের মূল চাবিকাঠি হলো বিভিন্ন যন্ত্রে ছবির বৈসাদৃশ্য কীভাবে তৈরি হয় তা বোঝা: এক্স-রেতে শোষণের পার্থক্যে ৫টি মৌলিক ঘনত্ব তৈরি হয়; সিটি স্ক্যানে সুনির্দিষ্ট হাউন্সফিল্ড স্কেল কাজ করে; এমআরআই-তে প্রোটনের চৌম্বকীয় সংকেতের ওপর ভিত্তি করে নরম কলার নিখুঁত ছবি পাওয়া যায়; আর আল্ট্রাসাউন্ডে শব্দতরঙ্গের বাধার ওপর নির্ভর করে ভেতরের অঙ্গ দৃশ্যমান হয়।'
            ),
            l(
              'Sectional imaging literacy demands strict adherence to international orientation rules, conceptualizing every axial slice as looking cephalad from the patient’s feet with patient right on image left, while integrating orthogonal planes to construct an accurate three-dimensional mental representation of patient pathology.',
              'ক্রস-সেকশনাল চিত্র সঠিকভাবে পড়ার জন্য আন্তর্জাতিক নিয়ম মনে রাখা অত্যন্ত জরুরি, যেখানে প্রতিটি অক্ষীয় স্লাইসকে রোগীর পায়ের দিক থেকে দেখা বলে বিবেচনা করা হয় যাতে রোগীর ডান দিক ছবির বামে থাকে; আর বিভিন্ন তলের ছবির সমন্বয় ঘটিয়ে চিকিৎসকরা রোগীর অভ্যন্তরীণ রোগের একটি নিখুঁত ত্রিমাত্রিক চিত্র মস্তিষ্কে তৈরি করে নিতে পারেন।'
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
          heading: l('X-Ray Attenuation Physics and Technical Projection Parameters', 'এক্স-রে শোষণ পদার্থবিজ্ঞান এবং প্রজেকশন প্যারামিটার'),
          paragraphs: [
            l(
              'The physical interaction of X-ray photons with human tissue is governed by the Beer-Lambert exponential law of attenuation, I = I₀ · e^(-μx), where I₀ represents incident photon flux, x is tissue path length, and μ is the linear attenuation coefficient. At diagnostic energy levels (typically 50 to 140 kVp), two primary quantum interactions predominate: photoelectric absorption and Compton scattering. Photoelectric absorption is proportional to the cube of the effective atomic number (Z³) and inversely proportional to photon energy cubed (1/E³), providing the sharp contrast difference between calcium-rich bone (Z_eff ≈ 13.8) and soft tissue (Z_eff ≈ 7.4).',
              'মানবদেহের কলার সাথে এক্স-রে ফোটন কণার ক্রিয়া বিয়ার-ল্যাম্বার্টের সূচকীয় শোষণ নীতি দ্বারা পরিচালিত হয়, যেখানে কলার মধ্য দিয়ে যাওয়ার সময় ফোটনের তীব্রতা ক্রমান্বয়ে হ্রাস পায়। ডায়াগনস্টিক রেডিওলজিতে মূলত দুটি কোয়ান্টাম ঘটনা ঘটে: ফটোইলেকট্রিক শোষণ এবং কম্পটন বিচ্ছুরণ। ফটোইলেকট্রিক শোষণ কলার কার্যকর পরমাণু সংখ্যার ঘনফলের (Z³) সমানুপাতিক হওয়ায় ক্যালসিয়াম সমৃদ্ধ হাড় (Z প্রায় ১৩.৮) এবং সাধারণ মাংসপেশির (Z প্রায় ৭.৪) মধ্যে অত্যন্ত তীব্র ও স্পষ্ট বৈসাদৃশ্য তৈরি করতে পারে।'
            ),
            l(
              'Projection geometry significantly impacts diagnostic image quality. Standard chest radiographs are performed in the posteroanterior (PA) orientation at a source-to-image distance of 72 inches (180 cm) with the patient upright and full inspiratory effort. In critically ill patients, anteroposterior (AP) portable supine radiographs are frequently substituted; however, geometric beam divergence magnifies the anteriorly positioned cardiac silhouette, obscures pulmonary markings, and limits evaluation of pleural effusion and pneumothorax, requiring clinicians to account for projection artifacts during clinical interpretation.',
              'প্রজেকশনের জ্যামিতিক বিন্যাস ছবির মানের ওপর গভীর প্রভাব ফেলে। আদর্শ বুকের এক্স-রে পিএ ভিউতে রোগীকে বুক চেপে সোজা দাঁড় করিয়ে ৬ ফুট দূর থেকে এক্স-রে নিক্ষেপ করে তোলা হয়। কিন্তু মুমূর্ষু রোগীদের ক্ষেত্রে শুইয়ে সামনে থেকে (এপি ভিউ) পোর্টেবল এক্স-রে করা হয়; এর ফলে সামনের দিকে থাকা হৃৎপিণ্ড জ্যামিতিক কারণে আসল আকারের চেয়ে অনেক বড় দেখায় এবং ফুসফুসের রোগ বা পানি জমার সঠিক মূল্যায়ন কঠিন হয়ে পড়ে, যা রোগ নির্ণয়ের সময় চিকিৎসকদের মাথায় রাখতে হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('CT Mathematics, Hounsfield Unit Calibration, and Clinical Windowing', 'সিটি গাণিতিক মডেল, হাউন্সফিল্ড ক্যালিব্রেশন এবং উইন্ডোয়িং প্রযুক্তি'),
          paragraphs: [
            l(
              'Computed tomography calculates the CT number for each volumetric voxel according to the standardized equation: CT Number (HU) = 1000 × [(μ_tissue - μ_water) / μ_water], where μ represents the linear X-ray attenuation coefficient measured by the detector array at the scanner’s operating beam spectrum. Modern multi-detector row CT (MDCT) systems employ dual-source and photon-counting detectors capable of acquiring sub-millimeter isotropic voxels, eliminating step-like reconstruction artifacts and enabling high-resolution vascular angiography and virtual bronchoscopy.',
              'কম্পিউটেড টমোগ্রাফিতে প্রতিটি ভক্সেলের মান নির্ণয় করা হয় একটি সুনির্দিষ্ট সমীকরণের মাধ্যমে: সিটি নম্বর = ১০০০ × [(μ_টিস্যু - μ_পানি) / μ_পানি], যেখানে μ হলো নির্দিষ্ট এক্স-রে বর্ণালীতে পরিমাপকৃত লিনিয়ার শোষণ সহগ। আধুনিক মাল্টি-ডিটেক্টর সিটি স্ক্যানার এবং ফোটন-কাউন্টিং প্রযুক্তিতে এক মিলিমিটারেরও ক্ষুদ্র সমমাপের ত্রিমাত্রিক ভক্সেল তৈরি করা সম্ভব হয়, যার ফলে রক্তনালীর নিখুঁত এনজিওগ্রাম এবং ব্রঙ্কোস্কোপি কোনো বিকৃতি ছাড়াই পর্দায় ফুটিয়ে তোলা যায়।'
            ),
            l(
              'Because human monitors display only 256 shades of gray while the Hounsfield scale spans over 4,000 units (from -1000 to +3000 HU), the human visual system cannot distinguish subtle density differences across the full range simultaneously. Radiologists utilize window width (WW) and window level/center (WL) to overcome this limitation. Window level defines the midpoint CT number around which grayscale values are mapped, while window width defines the total HU range displayed. In abdominal imaging, a soft-tissue window (WW 350 HU, WL 40 HU) accentuates parenchymal differences, whereas pulmonary evaluation requires a lung window (WW 1500 HU, WL -600 HU) to resolve delicate bronchovascular arborization against air.',
              'কম্পিউটারের মনিটর কেবল ২৫৬টি ধূসর স্তর দেখাতে পারে অথচ হাউন্সফিল্ড স্কেলের পরিধি ৪,০০০ এককেরও বেশি; মানুষের চোখ একসঙ্গে এত বিশাল স্কেলের সূক্ষ্ম পার্থক্য ধরতে পারে না। এই সীমাবদ্ধতা দূর করতে চিকিৎসকরা উইন্ডো উইডথ এবং উইন্ডো লেভেল ব্যবহার করেন। উইন্ডো লেভেল হলো প্রদর্শিত ঘনত্বের মধ্যবিন্দু আর উইন্ডো উইডথ হলো মোট প্রদর্শিত পরিধি। পেটের অঙ্গ দেখতে সফট-টিস্যু উইন্ডো (উইডথ ৩৫০, লেভেল ৪০) ব্যবহার করা হয়, আর ফুসফুসের সূক্ষ্ম রক্তনালী ও বাতাসের খাঁজ দেখতে লাং উইন্ডো (উইডথ ১৫০০, লেভেল -৬০০) ব্যবহার করা হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Advanced MRI Pulse Physics and Ultrasound Acoustic Wave Dynamics', 'উচ্চতর এমআরআই পালস পদার্থবিজ্ঞান এবং আল্ট্রাসাউন্ড তরঙ্গ বলবিদ্যা'),
          paragraphs: [
            l(
              'Contrast in magnetic resonance imaging is generated by exploiting differences in tissue relaxation constants following radiofrequency (RF) excitation. T1 relaxation (spin-lattice) reflects the recovery of longitudinal magnetization as protons surrender energy to their surrounding molecular lattice, which occurs rapidly in lipid molecules (short T1, high signal/bright) and slowly in free water (long T1, low signal/dark). T2 relaxation (spin-spin) reflects the loss of phase coherence among precessing protons caused by microscopic local magnetic field inhomogeneities, decaying rapidly in solid tissues and slowly in liquids (long T2, high signal/bright). Fluid-Attenuated Inversion Recovery (FLAIR) utilizes an initial 180° inversion pulse timed to null signal from free cerebrospinal fluid, revealing hyperintense demyelinating plaques and subarachnoid hemorrhage.',
              'এমআরআই ছবিতে বৈসাদৃশ্য তৈরি হয় রেডিও ফ্রিকোয়েন্সি প্রয়োগের পর কলার নিজস্ব রিলাক্সেশন সময়ের পার্থক্যের ওপর ভিত্তি করে। টি১ রিলাক্সেশন বোঝায় প্রোটনের দীর্ঘাকার চৌম্বকত্ব ফিরে পাওয়ার গতি যা চর্বিতে খুব দ্রুত ঘটে বলে চর্বি উজ্জ্বল সাদা দেখায় এবং পানিতে খুব ধীর বলে পানি গাঢ় কালো দেখায়। অপরদিকে টি২ রিলাক্সেশন পরিমাপ করে প্রোটনের ঘূর্ণন সমন্বয় নষ্ট হওয়ার হার, যা কঠিন কলায় খুব দ্রুত নষ্ট হলেও তরল পদার্থে দীর্ঘক্ষণ বজায় থাকে; ফলে পানিতে বা প্রদাহে টি২ উজ্জ্বল সাদা দেখায়। ফ্লেয়ার সিকোয়েন্সে বিশেষ তরঙ্গের মাধ্যমে স্বাভাবিক সিএসএফ তরলের সংকেত মুছে ফেলা হয় যাতে মস্তিষ্কের রোগগুলো স্পষ্টভাবে ফুটে ওঠে।'
            ),
            l(
              'Ultrasound propagation relies on tissue mechanical properties described by acoustic impedance, Z = ρ · c, where ρ is physical tissue density (kg/m³) and c is the speed of sound through the medium (averaging 1540 m/s in human soft tissues). The reflection coefficient at a planar interface is R = [(Z₂ - Z₁) / (Z₂ + Z₁)]². The enormous mismatch between soft tissue (Z ≈ 1.63 × 10⁶ kg/m²s) and air (Z ≈ 400 kg/m²s) causes greater than 99.9% reflection at skin-air interfaces, necessitating aqueous coupling gel. As sound penetrates depth, it undergoes exponential attenuation via absorption and scattering, requiring frequency selection trade-offs: low frequencies (2.5–5 MHz) penetrate deeply into the abdomen but offer lower axial resolution, while high frequencies (7.5–15 MHz) provide exquisite sub-millimeter superficial resolution at the expense of depth.',
              'আল্ট্রাসাউন্ড তরঙ্গের গতি টিস্যুর অ্যাকোস্টিক প্রতিবন্ধকতার ওপর নির্ভর করে, যার মান হলো ঘনত্ব ও শব্দের গতির গুণফল (মানবদেহের নরম কলায় শব্দের গড় গতি ১৫৪০ মিটার/সেকেন্ড)। দুটি ভিন্ন কলার সংযোগস্থলে শব্দের প্রতিফলনের হার তাদের প্রতিবন্ধকতার পার্থক্যের ওপর নির্ধারিত হয়। ত্বক ও বাতাসের মধ্যে এই পার্থক্য বিশাল হওয়ায় ৯৯.৯% শব্দ বাইরেই প্রতিফলিত হয়ে ফিরে আসে; একারণে ত্বকের ওপর জেল ব্যবহার করা বাধ্যতামূলক। আল্ট্রাসাউন্ডের কম্পাঙ্ক নির্বাচনের ক্ষেত্রে আপস করতে হয়: কম কম্পাঙ্কের তরঙ্গ (২.৫-৫ মেগাহার্টজ) পেটের গভীরে পৌঁছাতে পারলেও ছবির স্পষ্টতা কম থাকে, আর বেশি কম্পাঙ্কের তরঙ্গ (৭.৫-১৫ মেগাহার্টজ) ত্বকের কাছের অঙ্গের অত্যন্ত নিখুঁত ছবি দিলেও গভীরে প্রবেশ করতে পারে না।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Sectional Anatomical Correlation Across Axial, Coronal, and Sagittal Planes', 'অক্ষীয়, করোনার ও স্যাজিটাল তলে সমন্বিত শারীরস্থানিক পর্যালোচনা'),
          paragraphs: [
            l(
              'A sophisticated clinician mentally maps planar slices into interconnected anatomical topologies. In the upper abdomen on axial CT, a slice through the transpyloric plane (L1) demonstrates the splenic vein coursing along the posterior margin of the pancreatic body and tail to join the superior mesenteric vein behind the pancreatic neck, forming the hepatic portal vein. Anterior to the pancreatic head lies the gastroduodenal artery, while the common bile duct descends in its posterior groove, creating an anatomical triangle that guides surgical resection in pancreaticoduodenectomy (Whipple procedure).',
              'একজন দক্ষ চিকিৎসক প্রতিটি সমতল স্লাইসকে মনে মনে সমগ্র শরীরের সাথে মিলিয়ে দেখেন। পেটের ওপরের অংশের অক্ষীয় সিটি স্ক্যানে প্রথম লাম্বার কশেরুকা (এল১) বরাবর তাকালে দেখা যায় প্যানক্রিয়াসের পেছনের কিনারা ধরে প্লীহার শিরা এগিয়ে আসছে এবং সুপিরিয়র মেসেন্টেরিক শিরার সাথে মিলিত হয়ে প্যানক্রিয়াসের গলার পেছনে পোর্টাল শিরা তৈরি করছে। প্যানক্রিয়াসের মাথার সামনে গ্যাস্ট্রোডিউওডেনাল ধমনী এবং পেছনের খাঁজে কমন পিত্তনালী অবস্থান করে একটি জটিল ত্রিভুজ তৈরি করে যা হুইপলস অপারেশনের সময় সার্জনদের জন্য সবচেয়ে গুরুত্বপূর্ণ দিকনির্দেশক হিসেবে কাজ করে।'
            ),
            l(
              'Coronal reformatted images optimize evaluation of vertically oriented structures, illustrating the craniocaudal extent of the retroperitoneal ascending and descending colon, the bilateral diaphragmatic crura anchoring into the upper lumbar vertebral bodies, and the inferior vena cava draining into the right atrium. Sagittal imaging shines in midline neuraxial and pelvic evaluations, displaying the normal cervical and lumbar lordoses, the relationship of intervertebral discs to the thecal sac and exit neuroforamina, and the relative positions of the female urinary bladder, uterus, and rectum in the pelvic basin.',
              'করোনার ছবিগুলো লম্বালম্বিভাবে বিস্তৃত অঙ্গ পরীক্ষার জন্য সবচেয়ে উপযোগী, যেমন পেটের দুই পাশের অ্যাসেন্ডিং ও ডিসেন্ডিং কোলনের সম্পূর্ণ বিস্তার, মধ্যচ্ছদার ক্রুরা লাম্বার কশেরুকায় শক্তভাবে লেগে থাকার রূপ এবং ইনফিরিয়র ভেনাকাভা সোজা গিয়ে ডান অলিন্দে প্রবেশের পথ। অন্যদিকে স্যাজিটাল ছবি মেরুদণ্ড ও পেলভিসের মূল কাঠামো দেখতে অতুলনীয়; এটি দিয়ে ঘাড় ও কোমরের স্বাভাবিক বক্রতা, মেরুদণ্ডের ডিস্কের সাথে সুষুম্নাকাণ্ডের অবস্থান এবং মেয়েদের পেলভিসে মূত্রথলি, জরায়ু ও মলাশয়ের মধ্যকার পারস্পরিক সন্নিবেশ নিখুঁতভাবে বোঝা যায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Academic Clinical Scenarios: Acute Stroke, FAST Trauma, and PE Protocols', 'প্রাতিষ্ঠানিক ক্লিনিক্যাল প্রয়োগ: একিউট স্ট্রোক, ট্রমা ফাস্ট এবং পিই প্রটোকল'),
          paragraphs: [
            l(
              'In acute ischemic stroke, rapid multimodal neuroimaging dictates time-sensitive interventions. Non-contrast head CT (NCCT) must first rule out intracerebral hemorrhage (hyperattenuating acute blood) before considering intravenous thrombolysis (r-tPA) within the 4.5-hour therapeutic window. CT angiography (CTA) is immediately acquired from the aortic arch to the vertex to identify large vessel occlusion (LVO) amenable to mechanical thrombectomy. CT perfusion (CTP) maps cerebral blood flow (CBF), cerebral blood volume (CBV), and mean transit time (MTT) to calculate the ischemic penumbra—tissue with prolonged transit time but preserved blood volume that can be salvaged with immediate reperfusion.',
              'মস্তিষ্কের একিউট স্ট্রোকের ক্ষেত্রে দ্রুত ইমেজিং করাই হলো জীবন বাঁচানোর একমাত্র চাবিকাঠি। প্রথম ৪.৫ ঘণ্টার মধ্যে রক্ত জমাট বাঁধার ইনজেকশন দেওয়ার আগে নন-কনট্রাস্ট সিটি স্ক্যানের মাধ্যমে নিশ্চিত হতে হবে যে কোনো রক্তক্ষরণ হয়নি। এরপর মহাধমনী থেকে মস্তিষ্কের শীর্ষ পর্যন্ত সিটি অ্যানজিওগ্রাম করে প্রধান রক্তনালী বন্ধ আছে কিনা তা চিহ্নিত করা হয়। সবশেষে পারফিউশন স্ক্যান করে রক্ত প্রবাহের পরিমাণ মেপে বাঁচানো সম্ভব এমন পেনাম্ব্রা অঞ্চল নির্ধারণ করা হয় যা দ্রুত রক্ত চলাচল চালু করলে চিরতরে নষ্ট হওয়া থেকে রক্ষা পায়।'
            ),
            l(
              'In severe blunt abdominal trauma, the Focused Assessment with Sonography for Trauma (FAST) examination serves as a point-of-care rapid triage tool. Clinicians interrogate four standardized acoustic windows: the right upper quadrant (Morison’s pouch between liver and kidney, the most dependent intraperitoneal space in a supine patient), the left upper quadrant (splenorenal recess), the suprapubic pelvis (pouch of Douglas in females, rectovesical pouch in males), and the subxiphoid pericardial window. An anechoic strip of free fluid in any of these spaces in an unstable patient mandates emergent surgical laparotomy.',
              'মারাত্মক পেটের দুর্ঘটনায় ইমার্জেন্সিতে দ্রুত ট্রায়াজ করার জন্য পয়েন্ট-অফ-কেয়ার ফাস্ট (FAST) আল্ট্রাসাউন্ড পরীক্ষা প্রয়োগ করা হয়। এতে পেটের চারটি প্রধান স্থানে শব্দতরঙ্গ ফেলা হয়: ডান ওপরের অংশ (মরিসনস পাউচ বা লিভার ও কিডনির মধ্যবর্তী ফাঁক যা চিৎ হয়ে শোয়া রোগীর পেটের সবচেয়ে নিচু স্থান), বাম ওপরের অংশ (প্লীহা ও কিডনির মধ্যবর্তী স্থান), তলপেট (জরায়ু বা মূত্রথলির পেছনের থলি) এবং বুকের হাড়ের নিচের পেরিকার্ডিয়াম। রক্তক্ষরণের কারণে কোনো স্থানে তরলের কালো স্তর দেখা গেলে এবং রোগীর রক্তচাপ কমে গেলে অবিলম্বে জরুরি অপারেশন থিয়েটারে নিয়ে পেট কেটে রক্তপাত বন্ধ করতে হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Synthesis of Cross-Sectional Diagnostic Competencies', 'ক্রস-সেকশনাল ডায়াগনস্টিক দক্ষতার সমন্বিত পর্যালোচনা'),
          paragraphs: [
            l(
              'Competence in sectional anatomy requires cross-modality synthesis: recognizing how a single anatomical structure—such as the normal liver—displays moderate soft-tissue attenuation (+55 HU) on non-contrast CT, isointense T1 and T2 signals on MRI, and homogeneous mid-level gray echogenicity on ultrasound, while pathological conditions alter these physical properties predictably through edema, lipid deposition, or calcification.',
              'সেকশনাল শারীরস্থানে পরিপূর্ণ দক্ষতা অর্জনের জন্য সবকটি মাধ্যমের সমন্বয় বুঝতে হবে: উদাহরণস্বরূপ একটি সুস্থ লিভার নন-কনট্রাস্ট সিটিতে নরম কলার স্বাভাবিক ঘনত্ব (+৫৫ এইচইউ) দেখায়, এমআরআই-তে সুষম টি১ ও টি২ সংকেত দেয় এবং আল্ট্রাসাউন্ডে মসৃণ ধূসর ইকো তৈরি করে; কিন্তু কোনো রোগ দেখা দিলে কোষের চর্বি বা প্রদাহের কারণে এই সমস্ত শারীরিক বৈশিষ্ট্যে সুনির্দিষ্ট পরিবর্তন সূচিত হয়।'
            ),
            l(
              'Diagnostic radiology bridges microscopic cellular pathology and gross physical structure through the rigorous language of mathematics and physics, making adherence to strict orientation conventions, systematic search patterns, and multimodal correlation the cornerstone of safe patient care.',
              'ডায়াগনস্টিক রেডিওলজি মূলত পদার্থবিজ্ঞান ও গণিতের মাধ্যমে কোষের আণবিক রোগ এবং মানবদেহের দৃশ্যমান শারীরস্থানের মধ্যে সেতুবন্ধন রচনা করে; তাই সঠিক দিকনির্দেশনা মেনে চলা, নিয়মতান্ত্রিক অনুসন্ধান এবং বিভিন্ন ইমেজিং পদ্ধতির তুলনা করাই হলো রোগীর জীবন রক্ষার সবচেয়ে বড় চালিকাশক্তি।'
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
          heading: l('Advanced Diffusion Tensor Imaging and Dual-Energy CT Material Decomposition', 'উন্নত ডিফিউশন টেনসর ইমেজিং এবং ডুয়াল-এনার্জি সিটি বিশ্লেষণ'),
          paragraphs: [
            l(
              'Diffusion Tensor Imaging (DTI) extends standard diffusion MRI by measuring the directional anisotropy of water diffusion in three-dimensional space, described mathematically by a 3×3 symmetric second-order diffusion tensor matrix. In organized white matter tracts, axonal membranes and myelin sheaths restrict water diffusion perpendicular to fibers while allowing relatively unhindered diffusion parallel to their longitudinal axes (fractional anisotropy approaching 1.0). Fractional anisotropy mapping and deterministic tractography reconstruct critical subcortical conduits—such as the corticospinal tract, arcuate fasciculus, and optic radiations—enabling neurosurgeons to navigate around functional motor and language pathways during intracranial tumor resection.',
              'ডিফিউশন টেনসর ইমেজিং বা ডিটিআই হলো এমআরআই-এর এমন একটি অত্যাধুনিক রূপ যা ত্রিমাত্রিক স্থানে পানির অণুর নির্দিষ্ট দিকে ছড়িয়ে পড়ার গতিকে গাণিতিক ম্যাট্রিক্সের সাহায্যে পরিমাপ করে। মস্তিষ্কের সাদা অংশের স্নায়ুতন্তুতে মায়েলিনের আবরণ থাকায় পানির অণুগুলো তন্তুর আড়াআড়ি যেতে পারে না কিন্তু তন্তুর সমান্তরালে দ্রুত ছুটতে পারে। এই বৈশিষ্ট্যের ওপর ভিত্তি করে কম্পিউটারে কর্টিকোস্পাইনাল মোটর ট্র্যাক্ট বা কথা বলার প্রধান স্নায়ুপথগুলোকে রঙিন তারের মতো জীবন্ত ফুটিয়ে তোলা হয়, যার ফলে ব্রেন টিউমার অপারেশনের সময় সার্জনরা রোগীর হাত-পা নাড়ানো বা কথা বলার ক্ষমতা অক্ষত রেখে টিউমার কেটে বের করতে পারেন।'
            ),
            l(
              'Dual-energy CT (DECT) acquires volumetric attenuation data simultaneously at two disparate X-ray energy spectra (typically 80 kVp and 140 kVp). Because the photoelectric effect is highly energy-dependent while Compton scatter is not, DECT exploits differential attenuation ratios to perform material decomposition, quantitatively separating materials with distinct effective atomic numbers even if they possess identical single-energy Hounsfield values. DECT virtually subtracts iodinated contrast to generate non-contrast brain reconstructions, distinguishes uric acid from calcium oxalate nephrolithiasis, and quantifies myocardial extracellular volume fractions in ischemic heart failure.',
              'ডুয়াল-এনার্জি সিটি স্ক্যানার একই সাথে দুটি ভিন্ন শক্তির এক্স-রে বর্ণালী (সাধারণত ৮০ এবং ১৪০ কেভিপি) ব্যবহার করে মানবদেহের উপাত্ত সংগ্রহ করে। ফটোইলেকট্রিক শোষণ শক্তির ওপর ব্যাপকভাবে নির্ভরশীল হওয়ায় এই যন্ত্রটি বিভিন্ন পদার্থের পরমাণু সংখ্যা বিশ্লেষণ করে তাদের আলাদা করে চিহ্নিত করতে পারে, এমনকি যদি সাধারণ সিটিতে তাদের ঘনত্ব দেখতে হুবহু একই রকমও হয়। এর সাহায্যে কিডনির পাথরের ভেতরে ইউরিক অ্যাসিড নাকি ক্যালসিয়াম আছে তা বাইরে থেকেই শনাক্ত করা যায় এবং হার্ট অ্যাটাকের রোগীদের হৃৎপিণ্ডের মাংসপেশির স্থায়ী ক্ষয় নিখুঁতভাবে পরিমাপ করা যায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Advanced Interventional Radiological Principles and Contrast Nephropathy', 'উন্নত ইন্টারভেনশনাল রেডিওলজি এবং কনট্রাস্ট নেফ্রোপ্যাথি নিরাপত্তা'),
          paragraphs: [
            l(
              'Interventional radiology (IR) utilizes real-time fluoroscopic, CT, and ultrasound guidance to deliver minimally invasive targeted therapies with remarkable anatomical precision. Transjugular intrahepatic portosystemic shunt (TIPS) creation exemplifies complex sectional anatomical navigation: guided by real-time ultrasound and fluoroscopy, an operator cannulates the right internal jugular vein, advances a catheter through the superior vena cava, right atrium, and inferior vena cava into the right hepatic vein, punctures through the liver parenchyma into an intrahepatic branch of the portal vein, and deploys an expandable covered metal stent graft to decompress portal hypertension and halt lethal variceal hemorrhage.',
              'ইন্টারভেনশনাল রেডিওলজি হলো রিয়েল-টাইম এক্স-রে, সিটি স্ক্যান বা আল্ট্রাসাউন্ডের নির্দেশনায় শরীরের ভেতরে সূক্ষ্ম ক্যাথেটার ও তারের সাহায্যে অস্ত্রোপচার করার আধুনিকতম প্রযুক্তি। উদাহরণস্বরূপ লিভার সিরোসিসের মারাত্মক রক্তবমি বন্ধ করতে গলার শিরা দিয়ে তার ঢুকিয়ে হৃৎপিণ্ড পার হয়ে লিভারের ভেতরে পোর্টাল শিরা এবং হেপাটিক শিরার মাঝে একটি কৃত্রিম ধাতব স্টেন্ট বসিয়ে রক্তচাপ কমিয়ে দেওয়া হয় (টিপস পদ্ধতি); এটি কোনো বড় অপারেশন ছাড়াই সম্পূর্ণ স্ক্রিনের ছবি দেখে অত্যন্ত নিখুঁতভাবে সম্পন্ন করা হয় যা জীবন রক্ষায় যুগান্তকারী ভূমিকা পালন করে।'
            ),
            l(
              'Administration of iodinated intravascular contrast media carries risks of contrast-induced nephropathy (CIN) and contrast-induced acute kidney injury (CI-AKI), especially in diabetic patients with pre-existing renal compromise (eGFR <30 mL/min/1.73m²). The pathophysiology involves renal medullary hypoxia driven by profound vasoconstriction and direct cytotoxic oxidative stress on tubular epithelial cells. Prophylactic volume expansion with isotonic sodium chloride remains the proven gold-standard prevention, while non-contrast protocols or iso-osmolar contrast agents at minimal diagnostic doses are mandatory in high-risk candidates.',
              'রক্তনালীতে আয়োডিনযুক্ত কনট্রাস্ট ইনজেকশন দেওয়ার সময় কিডনি ফেইলিউরের (কনট্রাস্ট-ইনডিউসড নেফ্রোপ্যাথি) ঝুঁকি থাকে, বিশেষ করে ডায়াবেটিস এবং আগে থেকেই কিডনি দুর্বল (জিএফআর ৩০ এর নিচে) থাকা রোগীদের ক্ষেত্রে। এই ওষুধ কিডনির ভেতরের রক্তনালী সংকুচিত করে অক্সিজেনের তীব্র অভাব তৈরি করে এবং কিডনির কোষগুলোর মারাত্মক ক্ষতিসাধন করে। এই ক্ষতি প্রতিরোধ করার জন্য রোগীকে আগে থেকেই প্রচুর স্যালাইন দেওয়া এবং সর্বনিম্ন মাত্রায় নিরাপদ ওষুধ ব্যবহার করা চিকিৎসাবিজ্ঞানের একটি বাধ্যতামূলক সতর্কতামূলক প্রটোকল।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-tier schematic of diagnostic medical imaging: projection radiography five densities, CT Hounsfield attenuation and windowing, MRI tissue relaxation sequences, and standardized orthogonal cross-sectional planes.',
      'ডায়াগনস্টিক মেডিকেল ইমেজিংয়ের ৪টি মূল স্তর: এক্স-রেতে পাঁচটি মৌলিক ঘনত্ব, সিটি স্ক্যানের হাউন্সফিল্ড স্কেল ও উইন্ডোয়িং, এমআরআই টিস্যু রিলাক্সেশন সিকোয়েন্স এবং আন্তর্জাতিক সেকশনাল দিকনির্দেশনা ও শারীরিক তল।'
    ),
    steps: [
      l(
        '1. Projection radiography establishes five fundamental densities (air, fat, water/soft tissue, bone, metal) based on differential X-ray attenuation.',
        '১. এক্স-রে শোষণের পার্থক্যের ওপর ভিত্তি করে প্রজেকশন রেডিওগ্রাফি পাঁচটি মৌলিক ঘনত্ব (বাতাস, চর্বি, পানি/নরম কলা, হাড়, ধাতু) তৈরি করে।'
      ),
      l(
        '2. Computed tomography calculates quantitative Hounsfield units (from -1000 HU for air to +1000 HU for bone), employing windowing to optimize tissue contrast.',
        '২. কম্পিউটেড টমোগ্রাফি হাউন্সফিল্ড স্কেলে (-১০০০ বাতাস থেকে +১০০০ হাড়) শোষণ পরিমাপ করে উইন্ডোয়িংয়ের মাধ্যমে টিস্যু স্পষ্ট করে তোলে।'
      ),
      l(
        '3. MRI differentiates soft tissues via proton T1 and T2 relaxation, while ultrasound analyzes acoustic impedance reflections.',
        '৩. এমআরআই প্রোটনের টি১ ও টি২ রিলাক্সেশনের মাধ্যমে নরম কলার নিখুঁত ছবি দেয় এবং আল্ট্রাসাউন্ড শব্দের প্রতিফলন দিয়ে অঙ্গ পরীক্ষা করে।'
      ),
      l(
        '4. Sectional axial images adhere to universal radiological orientation: looking from the supine patient’s feet cephalad with patient right on image left.',
        '৪. অক্ষীয় ক্রস-সেকশনাল ছবি রোগীর পায়ের দিক থেকে দেখার নিয়মে তৈরি হয় যাতে রোগীর ডান পাশ সর্বদা ছবির বাম পাশে থাকে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'When viewing a standard axial computed tomography (CT) slice of the abdomen under conventional radiological viewing rules, which quadrant of the display screen corresponds to the patient’s anatomical right anterior abdominal wall?',
      'প্রচলিত আন্তর্জাতিক রেডিওলজিক্যাল নিয়ম অনুসারে পেটের একটি অক্ষীয় (অ্যাক্সিয়াল) সিটি স্ক্যান দেখার সময় প্রদর্শন পর্দার কোন চতুর্ভাগটি রোগীর শরীরের শারীরস্থানিক ডান সামনের দিকের পেটের প্রাচীরকে নির্দেশ করে?',
    ),
    options: [
      l('Top-left quadrant of the screen', 'পর্দার ওপরের বাম চতুর্ভাগ'),
      l('Top-right quadrant of the screen', 'পর্দার ওপরের ডান চতুর্ভাগ'),
      l('Bottom-left quadrant of the screen', 'পর্দার নিচের বাম চতুর্ভাগ'),
      l('Bottom-right quadrant of the screen', 'পর্দার নিচের ডান চতুর্ভাগ'),
    ],
    correctIndex: 0,
    explanation: l(
      'Under the international radiological convention for cross-sectional axial imaging, the examiner views the supine patient from their feet looking cephalad toward the head. Consequently, the patient’s anatomical right is located on the viewer’s left side, the patient’s anatomical left is on the viewer’s right side, anterior structures are at the top of the display, and posterior structures are at the bottom. Therefore, the patient’s right anterior structures (such as the right rectus abdominis or gallbladder) are situated in the top-left quadrant of the display screen.',
      'আন্তর্জাতিক রেডিওলজিক্যাল নিয়মানুসারে যেকোনো অক্ষীয় ছবিকে রোগীর পায়ের দিক থেকে মাথার দিকে দেখা বলে গণ্য করা হয়। এই নিয়মের কারণে রোগীর শরীরের ডান দিকের অংশ ছবির বাম পাশে থাকে, বাম দিকের অংশ ছবির ডান পাশে থাকে, সামনের অংশ ছবির ওপরে থাকে এবং পেছনের অংশ ছবির নিচে থাকে। অতএব রোগীর ডান পাশের সামনের পেট (যেমন পিত্তথলি বা ডান রেকটাস পেশী) কম্পিউটার পর্দার ওপরের বাম চতুর্ভাগে প্রদর্শিত হবে।'
    ),
  },
}
