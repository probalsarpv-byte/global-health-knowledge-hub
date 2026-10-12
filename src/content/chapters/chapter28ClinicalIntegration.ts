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
    id: 'grays-anatomy-42e',
    title: "Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd Edition",
    authors: 'Standring S',
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0',
  },
  {
    id: 'skandalakis-surgical-anatomy',
    title: "Skandalakis' Surgical Anatomy: The Embryologic and Anatomic Basis of Modern Surgery",
    authors: 'Skandalakis JE, Colborn GL, Weidman TA',
    organization: 'McGraw-Hill Education',
    year: 2004,
    url: 'https://accesssurgery.mhmedical.com/book.aspx?bookid=2557',
  },
  {
    id: 'atls-student-course-manual-10e',
    title: 'Advanced Trauma Life Support (ATLS) Student Course Manual, 10th Edition',
    authors: 'American College of Surgeons Committee on Trauma',
    organization: 'American College of Surgeons',
    year: 2018,
    url: 'https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/',
  },
]

export const chapter28ClinicalIntegrationLesson: LessonTopic = {
  id: 'topic.anatomy.clinical-integration',
  slug: 'clinical-integration',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('28 · Clinical Anatomy Integration', '২৮ · ক্লিনিক্যাল অ্যানাটমি সমন্বয়'),
  summary: l(
    'The capstone synthesis of the Human Anatomy curriculum, uniting regional architecture, cross-sectional diagnostic imaging, and clinical operative emergency medicine: acute mesenteric ischemia and watershed vascular boundaries (Griffith’s and Sudeck’s points), high-energy trauma shear biomechanics at the aortic isthmus, intracranial compartment herniation syndromes (subfalcine, uncal, and tonsillar), extremity fascial compartment syndromes, autonomic referred pain neurocircuitry, and master surgical exposure corridors (Pringle, Kocher, Cattell-Braasch, and Mattox maneuvers).',
    'মানব শারীরস্থান কারিকুলামের শীর্ষ সমন্বিত পাঠ, যা আঞ্চলিক শারীরস্থান, ক্রস-সেকশনাল রেডিওলজি এবং জরুরি সার্জিক্যাল চিকিৎসাকে একসূত্রে গাঁথে: একিউট মেসেন্টেরিক ইস্কেমিয়া ও রক্তনালীর ওয়াটারশেড অঞ্চল (গ্রিফিথ ও সুডেক পয়েন্ট), ট্রমা দুর্ঘটনায় মহাধমনীর ইস্থমাসে বলবিদ্যার ঘর্ষণ, মস্তিষ্কের হার্নিয়েশন সিন্ড্রোম (সাবফ্যালসিন, আঙ্কাল ও টনসিলার), অঙ্গপ্রত্যঙ্গের কম্পার্টমেন্ট সিন্ড্রোম, জটিল রেফার্ড পেইন স্নায়ুসংযোগ এবং প্রধান প্রধান অস্ত্রোপচারিক করিডোর (প্রিংগল, কোশার, ক্যাটেল-ব্রাশ ও ম্যাটক্স কৌশল)।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Synthesize regional vascular territories to analyze acute mesenteric ischemia, identifying vulnerable watershed anastomotic zones (Griffith’s point and Sudeck’s critical point).',
      'আঞ্চলিক রক্তনালীর সীমানা সমন্বয় করে একিউট মেসেন্টেরিক ইস্কেমিয়া বিশ্লেষণ করা এবং সংবেদনশীল ওয়াটারশেড অঞ্চলসমূহ (গ্রিফিথস ও সুডেকস ক্রুশিয়াল পয়েন্ট) চিহ্নিত করা।'
    ),
    l(
      'Correlate dural reflection anatomy with intracranial mass effects, differentiating the clinical presentations of subfalcine, uncal (transtentorial), and tonsillar brain herniation syndromes.',
      'মস্তিষ্কের ডুরা পর্দার সাথে ইন্ট্রাক্র্যানিয়াল চাপের সম্পর্ক নির্ণয় করা এবং সাবফ্যালসিন, আঙ্কাল (ট্র্যান্সটেন্টোরিয়াল) ও টনসিলার ব্রেন হার্নিয়েশনের ক্লিনিক্যাল লক্ষণসমূহ পৃথক করা।'
    ),
    l(
      'Master the anatomical principles of life-saving surgical maneuvers: the Pringle maneuver for hepatic inflow control, the Kocher maneuver for retroperitoneal exposure, and the Cattell-Braasch and Mattox visceral mobilizations.',
      'জীবনরক্ষাকারী জরুরি অস্ত্রোপচারের শারীরস্থানিক নীতি আয়ত্ত করা: লিভারে রক্তপাত নিয়ন্ত্রণের প্রিংগল কৌশল, রেট্রোপেরিটোনিয়াল অঙ্গ উন্মুক্তকরণের কোশার কৌশল এবং ক্যাটেল-ব্রাশ ও ম্যাটক্স ভিসেরাল সচলীকরণ।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.cross-sectional-anatomy', 'topic.anatomy.anatomical-variation'],
  relatedTopicIds: ['topic.anatomy.thorax', 'topic.anatomy.abdomen', 'topic.anatomy.brain'],
  references: refs,
  evidenceBySection: {
    introduction: ['moore-anatomy-9e', 'skandalakis-surgical-anatomy'],
    structure: ['grays-anatomy-42e', 'skandalakis-surgical-anatomy'],
    mechanism: ['moore-anatomy-9e', 'atls-student-course-manual-10e'],
    integration: ['grays-anatomy-42e', 'atls-student-course-manual-10e'],
    practice: ['skandalakis-surgical-anatomy', 'atls-student-course-manual-10e'],
    takeaways: ['moore-anatomy-9e', 'grays-anatomy-42e'],
  },
  chapter: {
    toc: [
      { id: 'sec-mesenteric-ischemia', label: l('Acute Mesenteric Ischemia & Watershed Collaterals', 'একিউট মেসেন্টেরিক ইস্কেমিয়া ও ওয়াটারশেড রক্তনালী'), sectionId: 'introduction' },
      { id: 'sec-aortic-isthmus-trauma', label: l('Aortic Isthmus Biomechanics & Polytrauma Rupture', 'অ্যাওর্টিক ইস্থমাসের বলবিদ্যা ও ট্রমা ফেটে যাওয়া'), sectionId: 'structure' },
      { id: 'sec-intracranial-herniation', label: l('Intracranial Compartments & Herniation Syndromes', 'ইন্ট্রাক্র্যানিয়াল প্রকোষ্ঠ ও মস্তিষ্কের হার্নিয়েশন'), sectionId: 'mechanism' },
      { id: 'sec-compartment-syndrome', label: l('Fascial Compartment Pressures & Emergent Fasciotomy', 'ফাসিয়াল কম্পার্টমেন্টের চাপ ও জরুরি ফ্যাসিওটমি'), sectionId: 'integration' },
      { id: 'sec-surgical-maneuvers', label: l('Master Surgical Corridors: Pringle, Kocher & Mattox', 'প্রধান অস্ত্রোপচারিক করিডোর: প্রিংগল, কোশার ও ম্যাটক্স'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Capstone Principles of Integrated Clinical Anatomy', 'সমন্বিত ক্লিনিক্যাল শারীরস্থানের চূড়ান্ত সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Pringle Maneuver', 'প্রিংগল কৌশল (Pringle Maneuver)'),
        definition: l(
          'A life-saving surgical clamping technique described by J. Hogarth Pringle in 1908 to control catastrophic hemorrhage from liver trauma or during hepatic resection. An atraumatic vascular clamp (or index finger and thumb) is placed across the hepatoduodenal ligament (the free right anterior margin of the lesser omentum) at the epiploic foramen of Winslow, simultaneously compressing the portal vein and proper hepatic artery. This completely halts all hepatic arterial and portal venous inflow to the liver parenchyma; persistence of heavy bleeding despite an effective Pringle clamp indicates injury to the retrohepatic inferior vena cava or hepatic veins.',
          '১৯০৮ সালে জে. হোগার্থ প্রিংগল কর্তৃক উদ্ভাবিত একটি জীবনরক্ষাকারী সার্জিক্যাল পদ্ধতি যার মাধ্যমে লিভারের তীব্র রক্তপাত মুহূর্তের মধ্যে নিয়ন্ত্রণ করা হয়। উইনস্লোর ফোরামেনের কাছে হেপাটোডিওডেনাল লিগামেন্টের ওপর একটি নরম ক্ল্যাম্প লাগিয়ে একসাথে হেপাটিক ধমনী ও পোর্টাল শিরা চেপে ধরা হয়। এর ফলে লিভারে সমস্ত রক্ত প্রবেশ তৎক্ষণাৎ বন্ধ হয়ে যায়; সঠিকভাবে এই ক্ল্যাম্প লাগানোর পরেও যদি পেটের ভেতর তীব্র রক্তপাত হতে থাকে, তবে সার্জনরা নিশ্চিত হন যে লিভারের পেছনের ইনফিরিয়র ভেনাকাভা বা হেপাটিক শিরা ফেটে গেছে।'
        ),
      },
      {
        term: l('Aortic Isthmus Shear Rupture', 'মহাধমনীর ইস্থমাস ফেটে যাওয়া (Aortic Isthmus Rupture)'),
        definition: l(
          'The catastrophic traumatic transection of the thoracic aorta occurring in rapid-deceleration blunt trauma (motor vehicle collisions or falls from heights). The aortic isthmus is the short, vulnerable anatomical transition zone located immediately distal to the origin of the left subclavian artery. Because the proximal aortic arch and heart are mobile while the descending thoracic aorta is rigidly anchored to the posterior thoracic spine by intercostal arteries and parietal pleura, severe deceleration generates intense differential inertia and violent shearing stress across the tethered ligamentum arteriosum, causing 80% of immediate traumatic aortic ruptures.',
          'মারাত্মক গাড়ি দুর্ঘটনা বা ওপর থেকে নিচে আছড়ে পড়ার মতো তীব্র গতিরোধক আঘাতে বুকের মহাধমনী ছিঁড়ে যাওয়ার প্রাণঘাতী ঘটনা। বাম সাবক্ল্যাভিয়ান ধমনীর ঠিক পরে অবস্থিত অ্যাওর্টিক ইস্থমাস হলো এমন একটি সরু রূপান্তর অঞ্চল যা লিগামেন্টাম আর্টারিওসাম দ্বারা মেরুদণ্ডের সাথে শক্তভাবে আটকানো থাকে। দুর্ঘটনার সময় হৃৎপিণ্ড ও মহাধমনীর আর্চ স্বাধীনভাবে সামনে ছিটকে গেলেও পেছনের ডিসেন্ডিং মহাধমনী মেরুদণ্ডে অনড় থাকে; এই বিপরীতধর্মী তীব্র ঘর্ষণে প্রায় ৮০% ক্ষেত্রে মহাধমনী এই ইস্থমাসের সংযোগস্থলে মুহূর্তের মধ্যে ছিঁড়ে যায়।'
        ),
      },
      {
        term: l('Uncal (Transtentorial) Herniation', 'আঙ্কাল বা ট্র্যান্সটেন্টোরিয়াল হার্নিয়েশন (Uncal Herniation)'),
        definition: l(
          'A life-threatening neurosurgical emergency in which an expanding supratentorial lateral mass (such as an acute epidural or subdural hematoma) forces the medial temporal lobe uncus over the free edge of the tentorium cerebelli into the posterior cranial fossa. Compresses the ipsilateral oculomotor nerve (CN III), causing an unreactive dilated pupil ("blown pupil"), and the ipsilateral posterior cerebral artery (PCA), causing occipital lobe infarction. Compression of the contralateral cerebral peduncle against the opposite tentorial edge produces the Kernohan notch phenomenon (paradoxical ipsilateral hemiparesis), rapidly progressing to fatal midbrain Duret hemorrhages if untreated.',
          'একটি চরম জরুরি নিউরোসার্জিক্যাল রোগাবস্থা যেখানে মস্তিষ্কে জমাট বাঁধা রক্তের চাপে টেম্পোরাল লোবের আঙ্কাস টেন্টোরিয়ামের খাঁজ গলে পেছনের ক্র্যানিয়াল গহ্বরে ঢুকে পড়ে। এটি একই পাশের ৩য় ক্রেনিয়াল নার্ভকে চেপে চোখের তারারন্ধ্র বা পিউপিল অস্বাভাবিক বড় ও আলোতে সংবেদনহীন করে দেয় ("ব্লোন পিউপিল") এবং ব্রেনস্টেমকে বিপরীত দিকের খাঁজে চেপে ধরে কের্নোহান নচ সিন্ড্রোম ঘটায়, যার ফলে বিপরীত পাশের পরিবর্তে একই পাশে প্যারালাইসিস দেখা দিতে পারে এবং দ্রুত অস্ত্রোপচার না করলে ব্রেনস্টেম নষ্ট হয়ে রোগী মারা যায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Emergency Multidisciplinary Evaluation of Polytrauma Aortic Injury and Massive Hemorrhage', 'পলিট্রমা দুর্ঘটনায় মহাধমনীর আঘাত ও রক্তক্ষরণের সমন্বিত জরুরি মূল্যায়ন'),
        steps: [
          l(
            'Step 1: Perform primary survey and chest radiograph: Identify superior mediastinal widening (>8 cm), loss of the sharp aortic knob contour, depression of the left mainstem bronchus, and deviation of the nasogastric tube to the right, suggesting traumatic aortic injury at the isthmus.',
            'ধাপ ১: প্রাইমারি সার্ভে এবং বুকের এক্স-রে পরীক্ষা করুন: মিডিয়াস্টাইনাম ৮ সেমি-র বেশি চওড়া হওয়া, মহাধমনীর স্বাভাবিক বাঁক মুছে যাওয়া, বাম ব্রঙ্কাস নিচে চেপে যাওয়া এবং রাইলস টিউব ডানপাশে সরে যাওয়া দেখলেই মহাধমনীর ইস্থমাসে আঘাত নিশ্চিতভাবে সন্দেহ করুন।'
          ),
          l(
            'Step 2: Obtain emergent contrast-enhanced CT angiography (CTA) of the chest: Localize the intimal tear, pseudoaneurysm, and mediastinal hematoma located immediately distal to the origin of the left subclavian artery, anchored at the ligamentum arteriosum.',
            'ধাপ ২: জরুরি বুকের কনট্রাস্ট সিটি অ্যানজিওগ্রাম করুন: বাম সাবক্ল্যাভিয়ান ধমনীর ঠিক পরে লিগামেন্টাম আর্টারিওসামের সাথে লেগে থাকা স্থানে মহাধমনীর ভেতরের পর্দা ফেটে যাওয়া এবং রক্তের থলি স্পষ্টভাবে চিহ্নিত করুন।'
          ),
          l(
            'Step 3: Initiate impulse control therapy (IV beta-blockade to target systolic BP <100 mmHg and HR <60 bpm) to reduce aortic wall shear stress (dP/dt), and transport immediately to the hybrid operating suite for Thoracic Endovascular Aortic Repair (TEVAR) with covered stent-graft deployment across the isthmus.',
            'ধাপ ৩: রক্তচাপ কমানোর ওষুধ দিয়ে মহাধমনীর দেয়ালের ওপর রক্তপ্রবাহের ঘর্ষণ কমান এবং অবিলম্বে হাইব্রিড থিয়েটারে নিয়ে রক্তনালীর ভেতর দিয়ে কৃত্রিম স্টেন্ট গ্রাফট বসিয়ে (TEVAR) মহাধমনীর ছেঁড়া স্থান সিল করে রোগীকে বাঁচান।'
          ),
        ],
        conclusion: l(
          'Recognizing the unique shear vulnerability of the aortic isthmus and applying rapid CTA diagnostics enables lifesaving endovascular exclusion before complete transmural rupture occurs.',
          'অ্যাওর্টিক ইস্থমাসের বলবিদ্যার দুর্বলতা আগে থেকেই জানা থাকলে এবং দ্রুত সিটি অ্যানজিওগ্রাম সম্পন্ন করলে মহাধমনী পুরোপুরি ফেটে রক্ত শূন্য হয়ে যাওয়ার আগেই সফলভাবে কৃত্রিম স্টেন্ট বসিয়ে জীবন রক্ষা করা সম্ভব হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Where are Griffith’s point and Sudeck’s critical point located in the gastrointestinal circulation, and why do they represent the primary sites of ischemic colitis during systemic hypotension?',
          'পরিপাকতন্ত্রের রক্ত সংবহনে গ্রিফিথস পয়েন্ট এবং সুডেকস পয়েন্ট কোথায় অবস্থিত এবং রক্তচাপ কমে গেলে কেন এই দুটি স্থানেই সবচেয়ে আগে কোলনের ইস্কেমিয়া বা রক্তাভাব ঘটে?',
        ),
        answer: l(
          'Griffith’s point and Sudeck’s point represent the two classic "watershed" vascular border zones of the large intestine, where terminal capillary beds of adjacent major arterial territories meet with minimal collateral redundancy. Griffith’s point is located at the splenic flexure (left colic flexure), representing the fragile junction between the terminal branches of the superior mesenteric artery (via the middle colic artery) and the inferior mesenteric artery (via the ascending branch of the left colic artery). Sudeck’s critical point is located at the rectosigmoid junction, where the lowest sigmoid branch of the IMA anastomoses with the superior rectal artery. During states of severe systemic hypotension, hypovolemic shock, or cardiac failure, compensatory splanchnic vasoconstriction selectively starves these peripheral border zones first, producing ischemic colitis characterized by mucosal sloughing, severe left lower quadrant pain, and bloody diarrhea.',
          'গ্রিফিথস পয়েন্ট এবং সুডেকস পয়েন্ট হলো বৃহদন্ত্রের দুটি প্রধান "ওয়াটারশেড" বা সীমান্ত অঞ্চল যেখানে দুটি প্রধান ধমনীর শেষ প্রান্তগুলো এসে মিলিত হয় এবং তাদের মধ্যে রক্ত চলাচলের কোনো শক্ত বিকল্প ব্যবস্থা থাকে না। গ্রিফিথস পয়েন্টটি অবস্থিত প্লীহার বাঁকে (স্প্লেনিক ফ্লেক্সার), যা সুপিরিয়র ও ইনফিরিয়র মেসেন্টেরিক ধমনীর শেষ সীমানা। আর সুডেকস পয়েন্টটি অবস্থিত সিগময়েড কোলন ও মলাশয়ের সংযোগস্থলে। শরীরে রক্তচাপ মারাত্মক কমে গেলে বা হার্ট ফেইলিউর হলে মস্তিষ্ক ও হৃৎপিণ্ড বাঁচাতে অন্ত্রের রক্তনালী সংকুচিত হয়ে যায়; এর ফলে এই প্রান্তিক সীমানাগুলো সবার আগে রক্তশূন্যতায় ভোগে এবং কোলনের পর্দা মরে গিয়ে রক্তযুক্ত তীব্র ডায়রিয়া ও পেটে ব্যথা শুরু হয়।'
        ),
      },
      {
        question: l(
          'What are the boundaries and anatomical contents of the four fascial compartments of the lower leg, and which nerve deficit produces foot drop in anterior compartment syndrome?',
          'পায়ের নিচের অংশের চারটি ফাসিয়াল কম্পার্টমেন্টের সীমানা ও উপাদান কী এবং অ্যান্টেরিয়র কম্পার্টমেন্ট সিন্ড্রোমে কোন স্নায়ু নষ্ট হয়ে যাওয়ার কারণে পায়ের পাতা ঝুলে পড়ে (ফুট ড্রপ)?',
        ),
        answer: l(
          'The lower leg is partitioned by the tibia, fibula, interosseous membrane, and crural intermuscular septa into four rigid, non-compliant fascial compartments: anterior, lateral, superficial posterior, and deep posterior. The anterior compartment contains the dorsiflexor muscles (tibialis anterior, extensor digitorum longus, extensor hallucis longus, and fibularis tertius), the anterior tibial artery, and the deep fibular (peroneal) nerve. When trauma or reperfusion elevates tissue fluid pressure within the rigid unyielding fascia above 30 mmHg (or within 30 mmHg of diastolic pressure), perfusion ceases. Ischemic necrosis of the deep fibular nerve paralyzes the dorsiflexors, producing permanent foot drop (steppage gait) and sensory loss in the first web space between the great and second toes unless emergency two-incision four-compartment fasciotomy is immediately performed.',
          'পায়ের নিচের অংশ টিবিয়া, ফিবুলা ও শক্ত ফাসিয়ার পর্দা দ্বারা চারটি অনমনীয় কম্পার্টমেন্টে বিভক্ত: অ্যান্টেরিয়র, ল্যাটারাল, সুপারফিসিয়াল পোস্টেরিয়র এবং ডিপ পোস্টেরিয়র। অ্যান্টেরিয়র কম্পার্টমেন্টের ভেতরে পায়ের পাতা ওপরে তোলার পেশীসমূহ, অ্যান্টেরিওর টিবিয়াল ধমনী এবং ডিপ ফিবুলার স্নায়ু অবস্থান করে। কোনো আঘাত বা রক্ত জমাট বাঁধার পর এই অনমনীয় খাপের ভেতরের চাপ ৩০ মিলিমিটারের বেশি উঠে গেলে রক্ত চলাচল পুরোপুরি বন্ধ হয়ে যায়। এর ফলে ডিপ ফিবুলার স্নায়ু পচে নষ্ট হয়ে গিয়ে পায়ের পাতা ওপরে তোলার ক্ষমতা চিরতরে হারিয়ে যায় (ফুট ড্রপ) এবং রোগী স্বাভাবিকভাবে হাঁটতে পারে না যদি না অবিলম্বে চামড়া ও ফাসিয়া কেটে (ফ্যাসিওটমি) অতিরিক্ত চাপ বের করে দেওয়া হয়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch28-clinical-integration-diagram',
    title: l('Interactive Clinical Anatomy & Operative Emergency Matrix', 'ইন্টারেক্টিভ ক্লিনিক্যাল শারীরস্থান ও জরুরি অস্ত্রোপচার ম্যাট্রিক্স'),
    description: l(
      'Explore core multidisciplinary clinical scenarios and master operative corridors: investigate watershed intestinal ischemia, aortic isthmus deceleration biomechanics, intracranial brain herniations, and the Pringle liver inflow maneuver.',
      'প্রধান প্রধান ক্লিনিক্যাল সংকট ও জীবনরক্ষাকারী অস্ত্রোপচারিক পথ অন্বেষণ করুন: অন্ত্রের ওয়াটারশেড রক্তাভাব, মহাধমনীর ইস্থমাসে বলবিদ্যার ঘর্ষণ, মস্তিষ্কের জীবনঘাতী হার্নিয়েশন এবং লিভারের রক্তপাত নিয়ন্ত্রণের প্রিংগল কৌশল পরীক্ষা করুন।'
    ),
    disclaimer: l(
      'Clinical integration operative schematic: select any sector to review vascular territories, pressure compartments, and emergency surgical access maneuvers.',
      'ক্লিনিক্যাল সমন্বয় রেখাচিত্র: রক্তনালীর অঞ্চল, চাপের প্রকোষ্ঠ এবং জরুরি অস্ত্রোপচারিক কৌশলসমূহ দেখতে যেকোনো ক্ষেত্র নির্বাচন করুন।'
    ),
    svgType: 'clinical-integration-system',
    items: [
      {
        id: 'watershed-mesenteric-ischemia',
        label: l('Watershed Boundaries: Griffith & Sudeck Points', 'ওয়াটারশেড সীমানা: গ্রিফিথ ও সুডেক পয়েন্ট'),
        description: l(
          'Vascular border zones of the colon: Griffith point (splenic flexure, SMA-IMA junction) and Sudeck point (rectosigmoid junction). Vulnerable to systemic hypoperfusion.',
          'বৃহদন্ত্রের প্রান্তিক রক্তনালীর সীমানা: গ্রিফিথ পয়েন্ট (স্প্লেনিক ফ্লেক্সার) ও সুডেক পয়েন্ট (রেকটোসিগময়েড সংযোগ)। রক্তচাপ কমলে সবার আগে রক্তশূন্যতায় ভোগে।'
        ),
        details: l(
          'Ischemic colitis presents with sudden cramping abdominal pain, bloody diarrhea, and mucosal sloughing; CT shows bowel wall thickening and "thumbprinting" edema.',
          'কোলনের ইস্কেমিয়ায় তীব্র পেটব্যথা, রক্তযুক্ত ডায়রিয়া দেখা দেয়; সিটি স্ক্যানে অন্ত্রের দেয়ালে বৃদ্ধাঙ্গুলির ছাপের মতো শোথ দৃশ্যমান হয়।'
        ),
        sectionId: 'introduction',
        color: '#fb7185',
        svgCoords: { x: 25, y: 25, width: 310, height: 50 },
      },
      {
        id: 'aortic-isthmus-deceleration',
        label: l('Aortic Isthmus Shear & Deceleration Trauma', 'অ্যাওর্টিক ইস্থমাসের ঘর্ষণ ও ট্রমা দুর্ঘটনা'),
        description: l(
          'Distal to left subclavian origin at ligamentum arteriosum. Differential deceleration between mobile arch and anchored descending aorta causes 80% of blunt ruptures.',
          'বাম সাবক্ল্যাভিয়ান ধমনীর পরে লিগামেন্টাম আর্টারিওসামে অবস্থিত। স্বাধীন আর্চ ও আটকানো মহাধমনীর বিপরীত গতির কারণে ৮০% দুর্ঘটনায় মহাধমনী এখানে ছেঁড়ে।'
        ),
        details: l(
          'Chest radiograph shows widened mediastinum (>8 cm) and depressed left bronchus; emergency treatment utilizes Thoracic Endovascular Aortic Repair (TEVAR).',
          'বুকের এক্স-রেতে মিডিয়াস্টাইনাম চওড়া (>৮ সেমি) দেখা যায়; এন্ডোভাস্কুলার স্টেন্ট গ্রাফট (TEVAR) বসিয়ে জীবন রক্ষা করা হয়।'
        ),
        sectionId: 'structure',
        color: '#38bdf8',
        svgCoords: { x: 25, y: 85, width: 310, height: 50 },
      },
      {
        id: 'intracranial-herniation-syndromes',
        label: l('Brain Herniation: Subfalcine, Uncal & Tonsillar', 'মস্তিষ্কের হার্নিয়েশন: সাবফ্যালসিন, আঙ্কাল ও টনসিলার'),
        description: l(
          'Uncal herniation compresses CN III (dilated fixed pupil) and PCA. Tonsillar herniation compresses medulla oblongata through foramen magnum, causing respiratory arrest.',
          'আঙ্কাল হার্নিয়েশন ৩য় নার্ভ চেপে পিউপিল বড় করে দেয়। টনসিলার হার্নিয়েশন ফোরামেন ম্যাগনাম দিয়ে মেডুলা চেপে ধরে মুহূর্তেই শ্বাসক্রিয়া বন্ধ করে দেয়।'
        ),
        details: l(
          'Subfalcine herniation displaces cingulate gyrus under falx cerebri, compressing anterior cerebral arteries to cause contralateral lower extremity paralysis.',
          'সাবফ্যালসিন হার্নিয়েশনে মস্তিষ্কের খাঁজ ফ্যালক্সের নিচে ঢুকে অ্যান্টেরিওর সেরিব্রাল ধমনী চেপে বিপরীত দিকের পা অবশ করে ফেলে।'
        ),
        sectionId: 'mechanism',
        color: '#c084fc',
        svgCoords: { x: 25, y: 145, width: 310, height: 50 },
      },
      {
        id: 'surgical-pringle-kocher-maneuvers',
        label: l('Master Surgical Corridors: Pringle & Kocher', 'প্রধান অস্ত্রোপচারিক পথ: প্রিংগল ও কোশার কৌশল'),
        description: l(
          'Pringle maneuver clamps hepatoduodenal ligament to stop hepatic inflow. Kocher maneuver mobilizes duodenum and pancreas head to expose IVC and renal vessels.',
          'প্রিংগল কৌশল হেপাটোডিওডেনাল লিগামেন্ট চেপে লিভারের রক্তপাত বন্ধ করে। কোশার কৌশল ডিওডেনাম উল্টিয়ে পেছনের IVC ও রেনাল রক্তনালী উন্মুক্ত করে।'
        ),
        details: l(
          'Cattell-Braasch mobilizes right colon and small bowel for inframesocolic exposure; Mattox maneuver mobilizes left viscera to expose the entire abdominal aorta.',
          'ক্যাটেল-ব্রাশ ডানদিকের অন্ত্র উল্টিয়ে দেয়; আর ম্যাটক্স কৌশল বামদিকের সমস্ত অঙ্গ সরিয়ে সমগ্র উদরীয় মহাধমনীকে পুরোপুরি উন্মুক্ত করে।'
        ),
        sectionId: 'practice',
        color: '#34d399',
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
          heading: l('Vascular Watershed Vulnerability: Acute Mesenteric Ischemia', 'রক্তনালীর ওয়াটারশেড সংবেদনশীলতা: একিউট মেসেন্টেরিক ইস্কেমিয়া'),
          paragraphs: [
            l(
              'The pinnacle of clinical anatomy lies in synthesizing isolated organ knowledge into interconnected systemic frameworks that explain disease pathophysiology and guide operative intervention. Acute mesenteric ischemia exemplifies this synthesis: while the gastrointestinal tract enjoys rich collateral anastomoses via the marginal artery of Drummond and arc of Riolan, two specific watershed border zones lack robust microvascular redundancy: Griffith’s point at the splenic flexure and Sudeck’s critical point at the rectosigmoid junction.',
              'ক্লিনিক্যাল শারীরস্থানের শ্রেষ্ঠ সার্থকতা হলো আলাদা আলাদা অঙ্গের জ্ঞানকে একত্রিত করে একটি সমন্বিত চিকিৎসাবিজ্ঞানে রূপ দেওয়া যা রোগ কেন হয় তা ব্যাখ্যা করে এবং অপারেশনের টেবিলে সার্জনকে পথ দেখায়। একিউট মেসেন্টেরিক ইস্কেমিয়া হলো এর সবচেয়ে চমৎকার উদাহরণ: পরিপাকতন্ত্রে ড্রামন্ড ও রিওলানের রক্তনালীর প্রাচুর্য থাকা সত্ত্বেও দুটি নির্দিষ্ট "ওয়াটারশেড" বা সীমান্ত অঞ্চলে রক্তের পর্যাপ্ত বিকল্প পথ থাকে না: প্লীহার বাঁকে অবস্থিত গ্রিফিথস পয়েন্ট এবং মলাশয়ের মুখে অবস্থিত সুডেকস পয়েন্ট।'
            ),
            l(
              'At Griffith’s point, the territory of the superior mesenteric artery (via the middle colic artery) terminates and meets the territory of the inferior mesenteric artery (via the left colic artery). In states of profound circulatory shock, dehydration, or systemic hypotension, sympathetic vasoconstriction selectively diverts blood flow away from the splanchnic circulation to preserve cerebral and myocardial perfusion. The vulnerable watershed mucosa at the splenic flexure is the first to succumb to ischemic necrosis, producing severe abdominal cramping pain out of proportion to physical exam findings followed by bloody diarrhea.',
              'গ্রিফিথস পয়েন্টে সুপিরিয়র মেসেন্টেরিক ধমনী এসে শেষ হয় এবং ইনফিরিয়র মেসেন্টেরিক ধমনীর শুরু হয়। যখন কোনো রোগীর মারাত্মক রক্তচাপ কমে যায় বা হার্ট ফেইলিউর হয়, তখন মস্তিষ্ক ও হৃৎপিণ্ডকে বাঁচিয়ে রাখতে শরীর পেটের অন্ত্রের রক্তনালীগুলোকে সংকুচিত করে ফেলে। এর ফলে এই অরক্ষিত সীমান্ত এলাকার কোষগুলো সবার আগে রক্তশূন্যতায় মারা যেতে শুরু করে; ফলে রোগীর পেটে হাত দিলে কোনো ব্যথা বা শক্ত ভাব না পাওয়া গেলেও ভেতরে প্রচণ্ড যন্ত্রণাদায়ক খিঁচুনি ও রক্তযুক্ত ডায়রিয়া শুরু হয় যা দ্রুত অপারেশন না করলে অন্ত্র পচে মৃত্যু ডেকে আনে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Trauma Biomechanics: The Aortic Isthmus Deceleration Injury', 'ট্রমা বলবিদ্যা: অ্যাওর্টিক ইস্থমাসে তীব্র গতিরোধের আঘাত'),
          paragraphs: [
            l(
              'High-energy blunt trauma mechanisms obey strict physical principles governed by anatomical tethering. When an occupant wearing a seatbelt experiences a high-speed frontal vehicular collision or falls from a significant height, the body undergoes rapid catastrophic deceleration. Within the thorax, different segments of the cardiovascular system possess markedly disparate mobility: the heart, ascending aorta, and transverse aortic arch are suspended within the pericardium and anterior mediastinum, retaining substantial inertia and moving forward during impact.',
              'উচ্চগতির দুর্ঘটনার ক্ষেত্রে আঘাতের প্রকৃতি পদার্থবিজ্ঞান এবং শরীরের ভেতরের লিগামেন্টের টান দ্বারা নির্ধারিত হয়। সিটবেল্ট পরা কোনো গাড়ি যখন তীব্র বেগে কোনো কিছুর সাথে ধাক্কা খায় বা কোনো ব্যক্তি উঁচু স্থান থেকে আছড়ে পড়ে, তখন তার শরীর মুহূর্তের মধ্যে থেমে যায় (র‌্যাপিড ডিসিলারেশন)। বুকের ভেতরে বিভিন্ন অঙ্গের নমনীয়তা একরকম নয়: হৃৎপিণ্ড এবং মহাধমনীর আর্চ বুকের ফাঁকা স্থানে ঝুলে থাকে বলে দুর্ঘটনার সময় তারা গতিজাড্যের কারণে সজোরে সামনের দিকে ছিটকে যেতে চায়।'
            ),
            l(
              'In stark contrast, the descending thoracic aorta is firmly anchored to the rigid posterior thoracic spine by multiple paired intercostal arteries, surrounding endothoracic fascia, and parietal pleura. The junction between the mobile aortic arch and the fixed descending aorta is the aortic isthmus, situated immediately distal to the origin of the left subclavian artery at the attachment of the ligamentum arteriosum. The violent shearing stress generated at this fixed-to-mobile transition zone produces a transmural tear in over 80% of blunt aortic trauma victims, causing fatal exsanguination at the scene unless contained by adventitia.',
              'কিন্তু এর বিপরীতে পেছনের ডিসেন্ডিং মহাধমনীটি পাঁজরের রক্তনালী ও পর্দার মাধ্যমে শক্ত মেরুদণ্ডের সাথে আঠার মতো লেগে থাকে। এই স্বাধীনভাবে দোলা আর্চ এবং মেরুদণ্ডে শক্তভাবে আটকে থাকা পেছনের মহাধমনীর সংযোগস্থলটিই হলো অ্যাওর্টিক ইস্থমাস, যা বাম সাবক্ল্যাভিয়ান ধমনীর ঠিক পরে অবস্থিত। দুর্ঘটনার প্রচণ্ড ঘর্ষণে এই সংযোগস্থলে এমন এক ভয়াবহ মোচড় তৈরি হয় যে প্রায় ৮০% ক্ষেত্রে মহাধমনীর দেয়াল মুহূর্তের মধ্যে ছিঁড়ে যায় এবং ঘটনাস্থলেই তীব্র রক্তক্ষরণে রোগীর মৃত্যু ঘটে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Intracranial Herniation Syndromes: Rigid Dura Partition Mechanics', 'মস্তিষ্কের হার্নিয়েশন সিন্ড্রোম: অনমনীয় ডুরা পর্দার প্রকোষ্ঠ বলবিদ্যা'),
          paragraphs: [
            l(
              'The intracranial vault is partitioned into semi-rigid compartments by thick reflections of dura mater: the falx cerebri separating the cerebral hemispheres, and the tentorium cerebelli separating the supratentorial cerebrum from the infratentorial cerebellum and brainstem. Because the skull is a rigid, non-distensible box (the Monro-Kellie doctrine), any expanding pathological mass—such as an acute epidural hematoma, intracerebral neoplasm, or diffuse cerebral edema—progressively elevates intracranial pressure (ICP), eventually forcing soft brain tissue across these rigid dural apertures.',
              'মাথার খুলির ভেতরের অংশটি অনমনীয় ডুরা পর্দা দিয়ে কয়েকটি আলাদা কক্ষে বিভক্ত: ফ্যালক্স সেরিDownload দুই সেরিব্রাল গোলার্ধকে আলাদা করে এবং টেন্টোরিয়াম পর্দা ওপরে মস্তিষ্ক ও নিচে লঘুমস্তিষ্ককে পৃথক করে। মনরো-কেলি নীতি অনুসারে খুলির হাড় কোনো রবারের মতো প্রসারিত হতে পারে না; তাই মাথার ভেতরে রক্ত জমাট বাঁধলে বা টিউমার বড় হলে ভেতরের চাপ অতিরিক্ত বেড়ে যায় এবং মস্তিষ্কের নরম অংশগুলো এই শক্ত পর্দার খাঁজ গলে এক কক্ষ থেকে অন্য কক্ষে ছিটকে যেতে বাধ্য হয় যাকে ব্রেন হার্নিয়েশন বলে।'
            ),
            l(
              'In uncal herniation, an expanding lateral supratentorial mass pushes the medial temporal lobe uncus over the free edge of the tentorium into the posterior fossa. The herniating uncus immediately compresses the ipsilateral oculomotor nerve (CN III), paralyzing its parasympathetic pupilloconstrictor fibers to produce an unreactive, widely dilated pupil ("blown pupil")—the cardinal clinical warning sign of impending brainstem failure. Continued descent compresses the posterior cerebral artery causing occipital blindness, and crushes the midbrain to produce decerebrate posturing and terminal respiratory arrest.',
              'আঙ্কাল হার্নিয়েশনে একপাশের রক্তের চাপে টেম্পোরাল লোবের আঙ্কাস টেন্টোরিয়ামের খাঁজ দিয়ে নিচের গহ্বরে ঢুকে পড়ে। নিচে নামার সময় এটি সবার আগে ৩য় ক্রেনিয়াল নার্ভকে পিষে ফেলে যার কারণে আক্রান্ত পাশের চোখের মণি বা পিউপিল অস্বাভাবিক বড় হয়ে যায় এবং আলো ফেললেও সংকুচিত হয় না ("ব্লোন পিউপিল")। এটি মস্তিষ্কের মৃত্যুর চরম বিপদ সংকেত; দ্রুত রক্ত বের করে চাপ না কমালে ব্রেনস্টেম পিষ্ট হয়ে কয়েক ঘণ্টার মধ্যে রোগীর চিরতরে শ্বাসপ্রশ্বাস বন্ধ হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Extremity Compartment Syndrome: Tissue Pressures and Fasciotomy', 'অঙ্গপ্রত্যঙ্গের কম্পার্টমেন্ট সিন্ড্রোম: টিস্যুর চাপ ও জরুরি ফ্যাসিওটমি'),
          paragraphs: [
            l(
              'In musculoskeletal trauma, the interplay between closed fascial envelopes and microvascular perfusion dictates limb survival. Extremity muscles are packaged into dense, collagenous fascial compartments with negligible elasticity. Following a tibial fracture, crush injury, or reperfusion after prolonged arterial occlusion, capillary leak and progressive tissue edema dramatically elevate pressure within the closed compartment. The normal resting tissue pressure of 0 to 8 mmHg rapidly escalates toward the diastolic blood pressure.',
              'হাত ও পায়ের তীব্র ট্রমা দুর্ঘটনায় মাংসপেশির খাপ এবং রক্ত চলাচলের মধ্যকার ভারসাম্যই অঙ্গটির টিকে থাকা নির্ধারণ করে। হাত-পায়ের মাংসপেশিগুলো চামড়ার নিচে শক্ত ও অনমনীয় ফাসিয়ার থলির ভেতর এমনভাবে আঁটসাঁট থাকে যা কোনোভাবেই প্রসারিত হতে পারে না। পা ভাঙার পর বা রক্তনালী আটকে থাকার পর যখন ভেতরে পানি জমতে শুরু করে, তখন এই বন্ধ খাঁচার ভেতরের চাপ স্বাভাবিক ০-৮ মিলিমিটার থেকে লাফিয়ে লাফিয়ে রক্তচাপের কাছাকাছি উঠে যায়।'
            ),
            l(
              'When intracompartmental pressure exceeds 30 mmHg (or rises within 30 mmHg of the patient’s diastolic pressure—a delta pressure <30 mmHg), capillary hydrostatic pressure is overcome, completely halting venous drainage and capillary exchange while arterial inflow persists. Clinically, this generates excruciating pain out of proportion to the physical injury, exacerbated by passive stretching of the compartment muscles. Without emergent two-incision, four-compartment fasciotomy within six hours, irreversible neuromuscular ischemia induces muscle necrosis, Volkmann’s ischemic contracture, rhabdomyolysis-induced acute renal failure, and amputation.',
              'ভেতরের চাপ যখন ৩০ মিলিমিটার ছাড়িয়ে যায়, তখন শিরা ও কৈশিকনালীর রক্ত চলাচল পুরোপুরি বন্ধ হয়ে যায়। এর ফলে তীব্র অবর্ণনীয় ব্যথা শুরু হয় যা পেশী একটু নাড়ালেই অসহ্য রূপ নেয়। আঘাতের প্রথম ৬ ঘণ্টার মধ্যে যদি দুই পাশ দিয়ে চামড়া ও ফাসিয়ার পর্দা লম্বা করে কেটে (ফ্যাসিওটমি) অতিরিক্ত চাপ বের করে দেওয়া না হয়, তবে সমস্ত মাংসপেশি ও স্নায়ু পচে নষ্ট হয়ে যায়; যার ফলে হাত-পা চিরতরে বেঁকে নষ্ট হয়ে যায় (ভকম্যানস কন্ট্রাকচার) এবং কিডনি নষ্ট হয়ে অঙ্গহানি ও মৃত্যু ঘটে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Master Surgical Corridors: The Pringle, Kocher, and Mattox Maneuvers', 'প্রধান অস্ত্রোপচারিক পথ: প্রিংগল, কোশার ও ম্যাটক্স কৌশল'),
          paragraphs: [
            l(
              'When massive internal hemorrhage or retroperitoneal pathology confronts the trauma or oncological surgeon, master anatomical exposure maneuvers provide rapid vascular control and visceral mobilization. The Pringle maneuver controls catastrophic hepatic bleeding by clamping the hepatoduodenal ligament at the foramen of Winslow, occluding the proper hepatic artery and portal vein. If massive bleeding persists, the surgeon knows instantly that the retrohepatic inferior vena cava or hepatic veins are torn.',
              'পেটের ভেতরে ভয়াবহ রক্তপাত বা জটিল ক্যান্সার অপারেশনের সময় সার্জনরা কিছু বিখ্যাত শারীরিক কৌশল ব্যবহার করে রক্তনালী নিয়ন্ত্রণে আনেন। প্রিংগল কৌশলের মাধ্যমে হেপাটোডিওডেনাল লিগামেন্টে ক্ল্যাম্প লাগিয়ে এক সেকেন্ডের ভেতর যকৃতে সমস্ত রক্ত ঢোকা বন্ধ করে দেওয়া হয়। এরপরেও যদি পেটভর্তি রক্ত আসতে থাকে, তবে সার্জন নিশ্চিত হন যে লিভারের পেছনের মহাধমনী বা ভেনাকাভা ছিঁড়ে গেছে যা ভিন্নভাবে চিকিৎসা করতে হয়।'
            ),
            l(
              'To expose deep retroperitoneal structures behind the duodenum and pancreas head, the surgeon executes the Kocher maneuver: incising the avascular lateral peritoneal reflection of the C-loop of the duodenum and flipping the duodenum and pancreatic head medially like a book. This safely exposes the inferior vena cava, left renal vein, and aorta. For catastrophic injuries to the entire abdominal aorta, the Mattox maneuver mobilizes the descending colon, spleen, and stomach from left to right along the avascular retroperitoneal plane, unveiling the complete thoracoabdominal aorta from the diaphragm to the bifurcation.',
              'ডিওডেনাম ও অগ্ন্যাশয়ের পেছনের গভীর রক্তনালী দেখতে কোশার কৌশল প্রয়োগ করা হয়: ডিওডেনামের পাশের রক্তনালীহীন পর্দা কেটে পুরো ডিওডেনাম ও অগ্ন্যাশয়ের মাথাকে বইয়ের পাতার মতো উল্টিয়ে দিলে পেছনে থাকা ইনফিরিয়র ভেনাকাভা ও রেনাল শিরা সুন্দরভাবে উন্মুক্ত হয়। আর পেটের মহাধমনীতে মারাত্মক গুলি বা চাকুর আঘাতে পুরো মহাধমনী দেখতে ম্যাটক্স কৌশলের মাধ্যমে বাম পাশের প্লীহা, পাকস্থলী ও অন্ত্রকে ডানপাশে সরিয়ে পুরো পেটের মহাধমনীকে এক পলকে চোখের সামনে নিয়ে আসা হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('The Master Synthesis of Integrated Human Clinical Anatomy', 'সমন্বিত মানব ক্লিনিক্যাল শারীরস্থানের মহিমান্বিত সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Integrated clinical anatomy represents the culmination of medical training, where regional boundaries, fascial layers, embryonic remnants, and cross-sectional topologies unify to solve complex diagnostic and operative dilemmas. Every symptom observed at the bedside—from the unreactive blown pupil of uncal herniation to the excruciating ischemic pain of acute compartment syndrome—reflects the physical laws of anatomical architecture under stress.',
              'সমন্বিত ক্লিনিক্যাল শারীরস্থান হলো সমগ্র চিকিৎসাবিজ্ঞানের সর্বোচ্চ শিখর, যেখানে প্রতিটি অঙ্গের সীমানা, ফাসিয়ার পর্দা, ভ্রূণীয় ইতিহাস এবং ক্রস-সেকশনাল চিত্র একত্রিত হয়ে রোগীর জীবন রক্ষার মূল হাতিয়ার হয়ে ওঠে। হাসপাতালের বেডে রোগীর চোখে দেখা প্রতিটি লক্ষণ—আঙ্কাল হার্নিয়েশনে চোখের তারারন্ধ্র বড় হয়ে যাওয়া থেকে শুরু করে কম্পার্টমেন্ট সিন্ড্রোমে তীব্র যন্ত্রণা—সবই মূলত মানব শারীরস্থানের ওপর অতিরিক্ত চাপের বাস্তব শারীরিক বহিঃপ্রকাশ।'
            ),
            l(
              'By mastering these integrated principles, clinicians, surgeons, and biomedical scientists transform anatomical knowledge from passive factual recall into an active, life-saving diagnostic and operative art, ensuring patient safety, technical surgical excellence, and compassionate care throughout their professional lives.',
              'এই সমন্বিত জ্ঞানকে হৃদয়ে ধারণ করে চিকিৎসক, শল্যবিদ এবং বিজ্ঞানীরা শারীরস্থানকে সাধারণ বইয়ের মুখস্থ বিদ্যা থেকে একটি জীবন্ত, জীবনরক্ষাকারী শিল্পে রূপান্তরিত করেন; যা সারা জীবন রোগীর সর্বোচ্চ সুরক্ষা, অস্ত্রোপচারের নিখুঁত উৎকর্ষ এবং মানবসেবাকে বিশ্বমানের মর্যাদায় প্রতিষ্ঠিত করে।'
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
          heading: l('Microvascular Architecture of Mesenteric Collaterals and Splanchnic Vasoconstriction', 'মেসেন্টেরিক রক্তনালীর অণুগঠন ও স্প্ল্যাঙ্কনিক রক্তনালীর সংকোচন'),
          paragraphs: [
            l(
              'The intestinal blood supply is engineered with tiered collateral networks to protect against localized microthrombosis. The superior mesenteric artery (SMA) and inferior mesenteric artery (IMA) communicate via two major anatomical arcades: the marginal artery of Drummond, which runs along the inner mesenteric border of the colon 1 to 2 cm from the bowel wall, and the more central, less reliable meandering mesenteric artery of Riolan (arc of Riolan), connecting the middle colic artery to the left colic artery.',
              'অন্ত্রের রক্ত সঞ্চালন ব্যবস্থা এমনভাবে তৈরি যাতে একটি ছোট রক্তনালী বন্ধ হলেও পুরো অন্ত্র পচে না যায়। সুপিরিয়র মেসেন্টেরিক ধমনী (SMA) এবং ইনফিরিয়র মেসেন্টেরিক ধমনী (IMA) প্রধানত দুটি রক্তনালীর খিলান দিয়ে পরস্পরের সাথে যুক্ত থাকে: ড্রামন্ডের মার্জিনাল ধমনী যা অন্ত্রের দেয়াল থেকে ১-২ সেমি দূর দিয়ে অবিচ্ছিন্নভাবে চলে, এবং রিওলানের গভীর আর্চ যা মাঝখানের কলিক ধমনীকে বাম কলিক ধমনীর সাথে যুক্ত করে।'
            ),
            l(
              'Despite these extensive anastomoses, the microvascular density at Griffith’s point (splenic flexure) and Sudeck’s critical point (rectosigmoid junction) is inherently tenuous. In non-occlusive mesenteric ischemia (NOMI), sustained systemic hypoperfusion triggers potent endothelin-1, angiotensin II, and vasopressin release, producing intense precapillary arteriolar spasm in the mesenteric bed. Capillary perfusion pressure falls below the critical closing threshold of mucosal arterioles (roughly 20 mmHg), resulting in subepithelial blebbing, transmural gangrene, and bacterial translocation across the disrupted enterocyte barrier.',
              'এত খিলান থাকা সত্ত্বেও গ্রিফিথস ও সুডেক পয়েন্টে সূক্ষ্ম রক্তনালীর সংখ্যা প্রাকৃতিকভাবেই খুব কম থাকে। রক্তচাপ কমে গেলে শরীরের অ্যাঞ্জিওটেনসিন ও ভেসোপ্রেসিন হরমোন পেটের রক্তনালীগুলোকে শক্তভাবে চেপে ধরে রাখে যাতে হৃৎপিণ্ড রক্ত পায়। ফলে এই সংবেদনশীল সীমান্ত অঞ্চলের রক্তচাপ বন্ধ হওয়ার সীমায় (২০ মিমি পারদ) নেমে আসে; এর ফলে অন্ত্রের ভেতরের কোষগুলো খসে পড়ে, পুরো অন্ত্র কালো হয়ে পচে যায় এবং অন্ত্রের কোটি কোটি জীবাণু রক্তের ভেতর ছড়িয়ে পড়ে প্রাণঘাতী সেপটিক শক তৈরি করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Viscoelastic Biomechanics of High-Deceleration Aortic Isthmus Rupture', 'অ্যাওর্টিক ইস্থমাস ফেটে যাওয়ার ভিসকোইলাস্টিক বলবিদ্যা'),
          paragraphs: [
            l(
              'The susceptibility of the aortic isthmus to traumatic rupture in motor vehicle collisions is governed by classical viscoelastic material mechanics and anatomical boundary conditions. The aortic arch possesses significant compliance and translational freedom within the anterior and superior mediastinum, whereas the descending thoracic aorta is rigidly constrained to the vertebral column by the pairs of posterior intercostal arteries and fibrous mediastinal pleura.',
              'গাড়ি দুর্ঘটনায় মহাধমনীর ইস্থমাস ফেটে যাওয়ার পেছনে কাজ করে শারীরিক বলবিদ্যা ও দুটি বিপরীতধর্মী কাঠামোর সংঘর্ষ। বুকের ওপরে মহাধমনীর আর্চ স্বাধীনভাবে নড়াচড়া করতে পারে, কিন্তু পেছনের ডিসেন্ডিং মহাধমনীটি পাঁজরের ধমনীগুলোর সাহায্যে অনমনীয়ভাবে মেরুদণ্ডের সাথে পেরেক মারার মতো আটকে থাকে।'
            ),
            l(
              'During abrupt deceleration from highway speeds, the forward momentum of the blood column (hemodynamic water-hammer effect) spikes intraluminal pressure dramatically (>1000 mmHg), while the mobile heart and arch swing forward against the stationary descending aorta. The ligamentum arteriosum acts as a rigid, inelastic tether point, focusing immense bending moments and shear stress precisely across the aortic wall immediately distal to the left subclavian artery. In 80% to 85% of cases, this causes an acute circumferential transection of the intima and media, leaving only the thin adventitia and mediastinal pleura to temporarily prevent fatal exsanguination.',
              'তীব্র গতির মুখে যখন গাড়ি থেমে যায়, তখন রক্তনালীর ভেতরের রক্ত সজোরে ধাক্কা মেরে চাপ ১০০০ মিলিমিটারের ওপরে তুলে দেয় এবং স্বাধীন আর্চটি পেছনের স্থির মহাধমনী থেকে বিচ্ছিন্ন হতে চায়। শক্ত লিগামেন্টাম আর্টারিওসাম একটি স্থির খুঁটির মতো কাজ করায় সমস্ত টান ও ঘর্ষণ বাম সাবক্ল্যাভিয়ান ধমনীর ঠিক পরে এসে পড়ে। প্রায় ৮৫% ক্ষেত্রে মহাধমনীর ভেতরের শক্ত পর্দা দুটি পুরোপুরি ছিঁড়ে যায় এবং কেবল বাইরের পাতলা পর্দাটি সাময়িকভাবে রক্ত আটকে রাখে; এই মুহূর্তে দ্রুত স্টেন্ট না বসালে কয়েক মিনিটের ভেতর সেই পাতলা পর্দাও ফেটে রোগীর তাৎক্ষণিক মৃত্যু ঘটে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Pathophysiological Cascade of Transtentorial and Tonsillar Herniations', 'ট্র্যান্সটেন্টোরিয়াল ও টনসিলার হার্নিয়েশনের প্যাথলজিক্যাল ধাপসমূহ'),
          paragraphs: [
            l(
              'The biomechanics of brain herniation reflect spatial decompensation within the intracranial volume. The intracranial space is partitioned into four major compartments: the left and right supratentorial anterior/middle fossae (separated by the falx cerebri), and the posterior fossa (separated from the cerebrum by the tentorium cerebelli). As a focal mass expands, compensatory displacement of cerebrospinal fluid (CSF) into the spinal thecal sac and compression of cerebral venous blood buffering reserves temporarily maintains normal ICP (spatial compensation phase).',
              'মস্তিষ্কের হার্নিয়েশন হলো খুলির ভেতরের বদ্ধ প্রকোষ্ঠের চাপ সহ্য করার ক্ষমতা ভেঙে পড়ার একটি চূড়ান্ত রূপ। খুলির ভেতর চারটি প্রধান কক্ষ থাকে: ফ্যালক্স পর্দা দ্বারা বিভক্ত বাম ও ডান সেরিব্রাল গোলার্ধ এবং টেন্টোরিয়াম দ্বারা বিভক্ত নিচের সেরিবেলার গহ্বর। কোনো টিউমার বা রক্তক্ষরণ হলে শরীর প্রথমে কিছু সিএসএফ তরল মেরুদণ্ডে পাঠিয়ে চাপ নিয়ন্ত্রণের চেষ্টা করে (কম্পেনসেশন ফেজ)।'
            ),
            l(
              'Once these compliance reserves are exhausted, ICP enters the exponential phase of the volume-pressure curve. In descending transtentorial (uncal) herniation, the medial parahippocampal gyrus and uncus compress the ambient cistern, stretching the oculomotor nerve over the petroclinoid ligament (ipsilateral mydriasis). The posterior cerebral artery is compressed against the tentorial edge, causing infarction of the calcarine visual cortex. Ultimately, displacement of the brainstem downward stretches the penetrating pontine basilar perforators, causing Duret hemorrhages within the pons and midbrain, which is uniformly fatal.',
              'কিন্তু যখন এই নিয়ন্ত্রণ ক্ষমতা ফুরিয়ে যায়, তখন চাপ অত্যন্ত দ্রুত বিপদসীমা অতিক্রম করে। আঙ্কাল হার্নিয়েশনে টেম্পোরাল লোবের আঙ্কাস নিচের দিকে নেমে ৩য় ক্রেনিয়াল নার্ভকে শক্ত হাড়ের ওপর চেপে ধরে চোখের তারারন্ধ্র বা পিউপিলকে প্রসারিত করে দেয়। পেছনের সেরিব্রাল ধমনী চেপে গিয়ে চোখের দৃষ্টিশক্তি নষ্ট হয়। সবশেষে ব্রেনস্টেম নিচের দিকে টান খেয়ে এর ভেতরের সূক্ষ্ম রক্তনালীগুলো ফেটে যায় (ডুরেট হেমাটোমা), যার ফলে ব্রেনস্টেমের গুরুত্বপূর্ণ শ্বাসকেন্দ্র ধ্বংস হয়ে রোগীর অনিবার্য মৃত্যু ঘটে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Microvascular Perfusion Pressure Gradients in Acute Compartment Syndrome', 'কম্পার্টমেন্ট সিন্ড্রোমে কৈশিকনালীর রক্তপ্রবাহের চাপীয় গ্রেডিয়েন্ট'),
          paragraphs: [
            l(
              'The pathophysiology of compartment syndrome is governed by the arteriovenous pressure gradient equation: Local Blood Flow = (P_arterial - P_venous) / Vascular Resistance. Skeletal muscle fascial envelopes possess fixed volume compliance limits. In trauma, capillary extravasation increases intracompartmental tissue fluid pressure (P_tissue). Because venules and veins are thin-walled, compliant vessels, elevated P_tissue directly collapses the intramedullary and intramuscular venous beds, elevating P_venous to equal P_tissue.',
              'কম্পার্টমেন্ট সিন্ড্রোমের আণবিক রূপ রক্তনালীর চাপীয় সমীকরণ দ্বারা পরিচালিত হয়: স্থানীয় রক্তপ্রবাহ = (ধমনীর চাপ - শিরার চাপ) / রক্তনালীর বাধা। মাংসপেশির ফাসিয়ার খাপ কোনোভাবেই বড় হতে পারে না। কোনো আঘাতের পর যখন খাপের ভেতরের টিস্যুর চাপ বাড়তে থাকে, তখন নরম শিরাগুলো সবচেয়ে আগে চ্যাপ্টা হয়ে বন্ধ হয়ে যায়; ফলে রক্ত বাইরে বের হতে না পেরে শিরার ভেতরের চাপ টিস্যুর সমান হয়ে যায়।'
            ),
            l(
              'As P_venous approaches P_arterial, the driving arteriovenous perfusion pressure gradient drops precipitously toward zero. Muscle tissue perfusion halts, producing profound cellular hypoxia, anaerobic glycolysis, and intracellular ATP depletion. The Na+/K+-ATPase membrane pumps fail, causing intracellular sodium and water accumulation (cytotoxic cell swelling), which paradoxically increases tissue volume and further accelerates the vicious cycle of compartment hypertension, causing irreversible myocyte necrosis and nerve infarction within six hours unless relieved by fasciotomy.',
              'শিরার চাপ যখন ধমনীর চাপের সমান হয়ে যায়, তখন নতুন রক্ত ঢোকার রাস্তা বন্ধ হয়ে রক্ত চলাচল শূন্যে নেমে আসে। মাংসপেশির কোষগুলো অক্সিজেনের অভাবে ছটফট করতে করতে শক্তি হারায়। কোষের ঝিল্লির পাম্প বন্ধ হয়ে গিয়ে কোষের ভেতর পানি ঢুকে মাংসপেশিগুলো আরও ফুলে শক্ত হয়ে যায় যা ভেতরের চাপকে আরও বাড়িয়ে দেয়। এই মারাত্মক দুষ্টচক্রের কারণে ৬ ঘণ্টার ভেতর সমস্ত স্নায়ু ও পেশী পচে মরে যায় যদি না অবিলম্বে চামড়া কেটে এই অতিরিক্ত চাপ বের করে দেওয়া হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Advanced Visceral Mobilization Maneuvers: Cattell-Braasch and Mattox Corridors', 'উচ্চতর অস্ত্রোপচারিক সচলীকরণ: ক্যাটেল-ব্রাশ ও ম্যাটক্স করিডোর'),
          paragraphs: [
            l(
              'In catastrophic multi-visceral and retroperitoneal vascular trauma, limited exposure is fatal. Surgeons employ extended embryonic derotation maneuvers that re-trace the embryological rotation of the midgut to expose the entire retroperitoneum. The Cattell-Braasch maneuver (right medial visceral mobilization) extends the Kocher maneuver: the surgeon incises the white line of Toldt along the ascending colon, mobilizes the hepatic flexure, and extends the peritoneal incision around the cecum and along the root of the small bowel mesentery to the ligament of Treitz.',
              'পেটের গভীর রক্তনালী ছিঁড়ে গেলে বা জটিল ক্যান্সার অপারেশনে সামান্য জায়গা দিয়ে কাজ করা রোগীর মৃত্যু ডেকে আনতে পারে। এজন্য সার্জনরা ভ্রূণীয় বিকাশের গতিপথ উল্টো দিকে ঘুরিয়ে সমগ্র পেটের অঙ্গগুলোকে একপাশে সরিয়ে নেন। ক্যাটেল-ব্রাশ কৌশলটি হলো কোশার কৌশলের একটি বিশাল রূপ: ডানদিকের কোলনের পাশের সাদা পর্দা কেটে লিভারের বাঁক ও অন্ধান্ত্রকে মুক্ত করে পুরো ক্ষুদ্রান্ত্রের মূল ধরে ওপরের দিকে তুলে নেওয়া হয়।'
            ),
            l(
              'By flipping the entire right colon, duodenum, pancreatic head, and small bowel medially and superiorly onto the chest, the Cattell-Braasch maneuver provides breathtaking, unhindered access to the entire retroperitoneum, including the infrarenal and juxtarenal inferior vena cava, the right renal vessels, the aortic bifurcation, and the iliac vessels. Conversely, the Mattox maneuver incises the left white line of Toldt from the sigmoid colon around the splenic flexure to the phrenicocolic ligament, mobilizing the left colon, left kidney, spleen, and tail of the pancreas medially to expose the entire suprarenal and infrarenal abdominal aorta from the diaphragmatic hiatus to the bifurcation.',
              'পুরো ডানদিকের কোলন, অগ্ন্যাশয় ও ক্ষুদ্রান্ত্রকে একসাথে বুকের ওপর উল্টিয়ে রাখলে পেছনের ইনফিরিয়র ভেনাকাভা, ডান রেনাল রক্তনালী এবং মহাধমনীর বিভাজন পুরোপুরি চোখের সামনে চলে আসে। অপরদিকে ম্যাটক্স কৌশলের মাধ্যমে বাম পাশের পর্দা কেটে বাম কোলন, বাম কিডনি, প্লীহা এবং অগ্ন্যাশয়ের লেজকে ডানপাশে টেনে নিলে ডায়াফ্রামের নিচের পুরো উদরীয় মহাধমনীটি কোনো বাধা ছাড়াই পুরোপুরি অনাবৃত হয়ে যায়, যা ভয়াবহ রক্তক্ষরণে জীবনরক্ষার চূড়ান্ত সার্জিক্যাল পথ হিসেবে কাজ করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('The Master Milestone: Unifying Anatomical Science and Clinical Practice', 'চূড়ান্ত মাইলফলক: শারীরস্থানিক বিজ্ঞান ও চিকিৎসার পূর্ণাঙ্গ মেলবন্ধন'),
          paragraphs: [
            l(
              'The journey across the 28 chapters of Human Anatomy culminates in this grand synthesis: anatomy is not merely a descriptive catalog of bones, nerves, and organs, but the foundational architecture that determines how human beings move, function, fall ill, and heal under the skilled hands of healthcare practitioners.',
              'মানব শারীরস্থানের ২৮টি অধ্যায়ের এই মহাকাব্যিক সমাপ্তি প্রমাণ করে যে শারীরস্থান কেবল হাড়, স্নায়ু ও পেশীর কোনো নাম মুখস্থ করার বই নয়, বরং এটি মানবজীবনের সেই অলঙ্ঘনীয় মূল পরিকাঠামো যা নির্ধারণ করে মানুষ কীভাবে চলে, কাজ করে, অসুস্থ হয় এবং একজন দক্ষ চিকিৎসকের স্পর্শে কীভাবে পুনরায় সুস্থ হয়ে ওঠে।'
            ),
            l(
              'From the sub-cellular molecular architecture of tissues in Chapter 02 to the master life-saving surgical corridors of Chapter 28, rigorous bilingual anatomical literacy remains the timeless, immutable cornerstone of safe medicine, surgical mastery, and compassionate human healing.',
              'অধ্যায় ০২-এর আণুবীক্ষণিক টিস্যুর গঠন থেকে শুরু করে অধ্যায় ২৮-এর জীবনরক্ষাকারী প্রধান প্রধান অস্ত্রোপচারিক করিডোর পর্যন্ত—নিখুঁত দ্বিভাষিক শারীরস্থানিক জ্ঞানই হলো চিকিৎসাবিজ্ঞানের চিরন্তন ভিত্তি, সার্জারির পরম দক্ষতা এবং আর্তমানবতার সেবায় নিবেদিত শ্রেষ্ঠতম শক্তি।'
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
          heading: l('Damage Control Laparotomy and the Open Abdomen Fascial Mechanics', 'ড্যামেজ কন্ট্রোল ল্যাপারোটমি ও ওপেন অ্যাবডোমেন ফাসিয়া বলবিদ্যা'),
          paragraphs: [
            l(
              'In exsanguinating trauma patients presenting with the lethal triad (hypothermia <35°C, refractory metabolic acidosis pH <7.2, and severe coagulopathy), conventional definitive anatomical reconstruction is aborted in favor of Damage Control Surgery (DCS). Phase 1 comprises immediate abbreviated laparotomy: controlling hemorrhage with four-quadrant abdominal packing and vascular shunts, controlling enteric contamination with rapid stapling, and leaving the abdomen open with temporary negative pressure wound therapy (Abthera or Bogota bag). Attempting formal fascial closure in a resuscitated, edematous patient elevates intra-abdominal pressure above 20 mmHg, precipitating abdominal compartment syndrome.',
              'পেটের মারাত্মক রক্তক্ষরণে যখন রোগী মৃত্যুর তিন লক্ষণে (শরীরের তাপমাত্রা কমে যাওয়া, অ্যাসিড বেড়ে যাওয়া এবং রক্ত জমাট না বাঁধা) আক্রান্ত হয়, তখন পুরো অপারেশন শেষ না করে ড্যামেজ কন্ট্রোল সার্জারি (DCS) করা হয়। প্রথমে দ্রুত রক্তক্ষরণ ঠেকাতে চার কোনায় গজ প্যাক দেওয়া হয়, ছিঁড়ে যাওয়া অন্ত্র স্ট্যাপলার দিয়ে আটকে দেওয়া হয় এবং পেট সেলাই না করে একটি বিশেষ ভ্যাকুয়াম ব্যাগের মাধ্যমে সাময়িকভাবে খোলা রাখা হয়। পানি জমে ফুলে যাওয়া পেটের ফাসিয়া জোর করে সেলাই করতে গেলে পেটের ভেতরের চাপ ২০ মিলিমিটারের ওপরে উঠে গিয়ে অ্যাবডোমেনাল কম্পার্টমেন্ট সিন্ড্রোম তৈরি করে রোগীকে মেরে ফেলবে।'
            ),
            l(
              'Phase 2 transfers the patient to the intensive care unit for aggressive physiological rewarming, correction of coagulopathy with balanced blood products (1:1:1 packed red cells, fresh frozen plasma, and platelets), and reversal of acidosis. Only after physiological restoration is achieved (typically 24 to 48 hours later) does Phase 3 proceed: re-exploration, unpackaging, definitive vascular reconstruction, bowel anastomoses, and progressive fascial closure, demonstrating how deep anatomical mechanics must be subordinated to physiological survival.',
              'দ্বিতীয় ধাপে রোগীকে আইসিইউতে নিয়ে রক্ত ও প্লাজমা দিয়ে শরীরের তাপমাত্রা ও অ্যাসিডের মাত্রা স্বাভাবিক অবস্থায় ফিরিয়ে আনা হয়। রোগী শারীরিকভাবে স্থিতিশীল হলে ২৪ থেকে ৪৮ ঘণ্টা পর তৃতীয় ধাপে রোগীকে আবার অপারেশনে নিয়ে গজগুলো বের করা হয়, অন্ত্রের স্থায়ী জোড়া লাগানো হয় এবং পেটের ফাসিয়া ধীরে ধীরে সেলাই করা হয়; যা প্রমাণ করে যে রোগীর জীবন বাঁচানোর জন্য শারীরস্থানের চেয়ে রোগীর সার্বিক শারীরবৃত্তীয় স্থিতি রক্ষা করাই সবচেয়ে বড় অগ্রাধিকার।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Extracorporeal Membrane Oxygenation (ECMO) Vascular Cannulation Mechanics', 'একস্ট্রাকর্পোরিয়াল মেমব্রেন অক্সিজেনেশন (ECMO) রক্তনালী ক্যানুলেশন বলবিদ্যা'),
          paragraphs: [
            l(
              'In refractory cardiogenic shock or catastrophic acute respiratory distress syndrome (ARDS), Extracorporeal Membrane Oxygenation (ECMO) provides mechanical cardiopulmonary support. Venoarterial (VA) ECMO drains deoxygenated blood from the right atrium via a multi-stage venous cannula inserted into the right femoral vein, and returns oxygenated blood under arterial pressure into the right common femoral artery, terminating in the iliac artery or abdominal aorta.',
              'হার্ট ফেইলিউর বা ফুসফুস সম্পূর্ণ বিকল হয়ে যাওয়ার চরম সংকটে একস্ট্রাকর্পোরিয়াল মেমব্রেন অক্সিজেনেশন (ECMO) যন্ত্র রোগীর হৃৎপিণ্ড ও ফুসফুসের বিকল্প হিসেবে কৃত্রিমভাবে রক্ত চলাচল ও শ্বাসপ্রশ্বাস চালু রাখে। ভেনো-আর্টারিয়াল (VA) ইকমোতে কুঁচকির ফিমোরাল শিরা দিয়ে রক্ত টেনে নিয়ে কৃত্রিম মেশিনে অক্সিজেন দিয়ে পুনরায় ফিমোরাল ধমনী দিয়ে সারা শরীরে উচ্চচাপে ফেরত পাঠানো হয়।'
            ),
            l(
              'A critical anatomical hazard of VA-ECMO is retrograde aortic blood flow colliding with native cardiac output in the thoracic aorta (the watershed "Harlequin syndrome" or North-South syndrome). If pulmonary function is poor, deoxygenated blood from the failing heart perfuses the ascending aorta, aortic arch, and head vessels, while ECMO perfuses the lower body, starving the brain of oxygen while the legs remain well-oxygenated. Monitoring arterial blood gases from the right radial artery (innervated by the brachiocephalic trunk) is mandatory to detect cerebral hypoxia, demonstrating how hemodynamics across the transverse thoracic plane dictates advanced critical care survival.',
              'এই চিকিৎসার সবচেয়ে চমকপ্রদ চ্যালেঞ্জ হলো পেটের দিক থেকে আসা মেশিনের কৃত্রিম রক্ত এবং বুকের হৃৎপিণ্ড থেকে বের হওয়া দুর্বল রক্তের মুখোমুখি সংঘর্ষ (হার্লেকুইন সিন্ড্রোম)। ফুসফুস নষ্ট থাকলে দুর্বল হৃৎপিণ্ড মস্তিষ্ক ও হাতে অক্সিজেনহীন রক্ত পাঠায়, অথচ মেশিনের কারণে পা সম্পূর্ণ ভালো অক্সিজেন পায়। তাই রোগীর ডান হাতের কবজি থেকে রক্ত পরীক্ষা করে নিশ্চিত হতে হয় যে মস্তিষ্কে পর্যাপ্ত অক্সিজেন পৌঁছাচ্ছে কিনা; এটি প্রমাণ করে যে বক্ষপিঞ্জরের রক্তপ্রবাহের শারীরস্থানিক বলবিদ্যাই আধুনিকতম আইসিইউ চিকিৎসায় জীবন ও মৃত্যুর ব্যবধান তৈরি করে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-pillar schematic of integrated clinical anatomy: mesenteric watershed territories, aortic isthmus shear biomechanics, intracranial brain herniation corridors, and master surgical exposure maneuvers.',
      'সমন্বিত ক্লিনিক্যাল শারীরস্থানের ৪টি প্রধান স্তম্ভ: অন্ত্রের ওয়াটারশেড রক্তনালী, মহাধমনীর ইস্থমাসে বলবিদ্যার ঘর্ষণ, মস্তিষ্কের হার্নিয়েশন করিডোর এবং প্রধান প্রধান অস্ত্রোপচারিক কৌশল।'
    ),
    steps: [
      l(
        '1. Watershed territories at the splenic flexure (Griffith) and rectosigmoid (Sudeck) are the primary sites of ischemic colitis during shock.',
        '১. শক বা রক্তচাপ কমলে প্লীহার বাঁক (গ্রিফিথ) এবং মলাশয়ের মুখের (সুডেক) ওয়াটারশেড অঞ্চলে সবার আগে রক্তশূন্যতা তৈরি হয়।'
      ),
      l(
        '2. The aortic isthmus represents a fixed-to-mobile transition zone that experiences violent shear forces during high-speed deceleration trauma.',
        '২. মহাধমনীর ইস্থমাস হলো গতিশীল ও স্থির অংশের সংযোগস্থল যা তীব্র গতি দুর্ঘটনায় ঘর্ষণের মুখে ফেটে যায়।'
      ),
      l(
        '3. Intracranial mass effect forces brain tissue across rigid dural partitions, with uncal herniation compressing the oculomotor nerve.',
        '৩. মাথার ভেতরে চাপ বাড়লে নরম মস্তিষ্ক ডুরা পর্দা ভেদ করে স্থানচ্যুত হয় এবং আঙ্কাল হার্নিয়েশন ৩য় নার্ভ চেপে পিউপিল বড় করে দেয়।'
      ),
      l(
        '4. Master surgical maneuvers (Pringle, Kocher, Cattell-Braasch, Mattox) mobilize viscera and secure vascular control in catastrophic trauma.',
        '৪. প্রধান প্রধান সার্জিক্যাল কৌশল (প্রিংগল, কোশার, ক্যাটেল-ব্রাশ ও ম্যাটক্স) অঙ্গ সরিয়ে দিয়ে রক্তপাত বন্ধ করে মানুষের জীবন বাঁচায়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'During emergency exploratory laparotomy for massive liver hemorrhage following severe blunt abdominal trauma, a surgeon applies a vascular clamp across the hepatoduodenal ligament at the foramen of Winslow (Pringle maneuver). If heavy arterial-like hemorrhage continues unabated from the deep liver laceration despite an effectively placed clamp, which anatomical structure is the most likely source of bleeding?',
      'পেটের মারাত্মক দুর্ঘটনায় লিভার ফেটে গিয়ে ভয়াবহ রক্তক্ষরণের সময় সার্জন উইনস্লোর ফোরামেনের কাছে হেপাটোডিওডেনাল লিগামেন্টে ক্ল্যাম্প লাগালেন (প্রিংগল কৌশল)। ক্ল্যাম্পটি সঠিকভাবে লাগানোর পরেও যদি লিভারের গভীর ক্ষত থেকে প্রচুর রক্তপাত হতে থাকে, তবে কোন শারীরিক গঠনটি এই রক্তক্ষরণের প্রধান উৎস?',
    ),
    options: [
      l('Retrohepatic inferior vena cava or main hepatic veins', 'লিভারের পেছনের ইনফিরিয়র ভেনাকাভা বা প্রধান হেপাটিক শিরাসমূহ'),
      l('Proper hepatic artery trunk', 'প্রপার হেপাটিক ধমনীর মূল কাণ্ড'),
      l('Main portal vein within the lesser omentum', 'লেসার ওমেন্টামের প্রধান পোর্টাল শিরা'),
      l('Gastroduodenal artery branch', 'গ্যাস্ট্রোডিওডেনাল ধমনীর শাখা'),
    ],
    correctIndex: 0,
    explanation: l(
      'The Pringle maneuver compresses the hepatoduodenal ligament, occluding the two incoming vessels that constitute total hepatic inflow: the proper hepatic artery and the hepatic portal vein. If torrential bleeding from the liver parenchyma continues despite complete inflow occlusion, the hemorrhage is arising from the hepatic outflow tract—namely, the retrohepatic inferior vena cava (IVC) or the major hepatic veins (right, middle, or left hepatic veins) that drain directly into the IVC along the posterior superior bare area of the liver, requiring retrohepatic packing or total hepatic vascular exclusion.',
      'প্রিংগল কৌশল হেপাটোডিওডেনাল লিগামেন্ট চেপে লিভারে রক্ত প্রবেশ করার দুটি প্রধান পথ (হেপাটিক ধমনী ও পোর্টাল শিরা) পুরোপুরি বন্ধ করে দেয়। এই ক্ল্যাম্প লাগানোর পরেও যদি রক্তপাত বন্ধ না হয়, তবে রক্ত বের হওয়ার পথগুলো ছিঁড়ে গেছে বলে নিশ্চিত হওয়া যায়—অর্থাৎ লিভারের পেছনে থাকা ইনফিরিয়র ভেনাকাভা (IVC) বা প্রধান তিনটি হেপাটিক শিরা ফেটে গেছে যা রক্ত বের করে নিয়ে যায়। এই রক্তপাত বন্ধ করার জন্য লিভারের পেছনে বিশেষ গজ প্যাক দেওয়া বা পুরো রক্তনালী বিচ্ছিন্ন করার মতো অতি জটিল কৌশল গ্রহণ করতে হয়।'
    ),
  },
}
