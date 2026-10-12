import type { LessonTopic, Localized, ReferenceItem } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs: ReferenceItem[] = [
  {
    id: 'fleckenstein-anatomy-3e',
    title: 'Anatomy in Diagnostic Imaging, 3rd Edition',
    authors: 'Fleckenstein P, Tranum-Jensen J',
    organization: 'Wiley-Blackwell',
    year: 2014,
    url: 'https://www.wiley.com/en-us/Anatomy+in+Diagnostic+Imaging%2C+3rd+Edition-p-9781405139915',
  },
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
    id: 'netter-cross-sectional-2e',
    title: "Netter's Correlative Imaging: Abdominal and Pelvic Anatomy",
    authors: 'Mortele KJ, Silverman SG',
    organization: 'Elsevier',
    year: 2013,
    url: 'https://www.elsevier.com/books/netters-correlative-imaging-abdominal-and-pelvic-anatomy/mortele/978-1-4377-0414-3',
  },
]

export const chapter25CrossSectionalLesson: LessonTopic = {
  id: 'topic.anatomy.cross-sectional-anatomy',
  slug: 'cross-sectional-anatomy',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('25 · Cross-Sectional Anatomy', '২৫ · ক্রস-সেকশনাল শারীরস্থান'),
  summary: l(
    'A rigorous multi-regional study of human cross-sectional anatomy across standard axial, sagittal, and coronal planes: the T4/T5 transverse thoracic plane of Ludwig and cardiac four-chamber relationships, the L1 transpyloric plane of Addison with pancreatic and mesenteric vascular landmarks, the retroperitoneal aortic bifurcation at L4, the pelvic floor compartments and peritoneal recesses, and neuroaxial suprasellar cistern and internal capsule sectional topologies.',
    'অক্ষীয়, স্যাজিটাল ও করোনার তলে মানবদেহের ক্রস-সেকশনাল শারীরস্থানের বিশদ বিশ্লেষণ: T4/T5 ট্র্যান্সভার্স থোরাসিক সমতল ও হৃৎপিণ্ডের চার প্রকোষ্ঠের সন্নিবেশ, L1 ট্রান্সপাইলোরিক সমতলে অগ্ন্যাশয় ও মেসেন্টেরিক রক্তনালীর ল্যান্ডমার্ক, L4 কশেরুকা বরাবর মহাধমনীর বিভাজন, পেলভিক মেঝে ও পেরিটোনিয়াল রিসেস এবং মস্তিষ্কের সুপ্রাসেলার সিস্টার্ন ও ইন্টারনাল ক্যাপসুলের সেকশনাল রূপরেখা।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Correlate the key anatomical structures traversing the transverse thoracic plane (T4/T5 disc level) and identify their spatial relationships on cross-sectional CT and MRI.',
      'ট্র্যান্সভার্স থোরাসিক সমতল (T4/T5 ডিস্ক স্তর) অতিক্রমকারী প্রধান গঠনসমূহ চিহ্নিত করা এবং ক্রস-সেকশনাল সিটি ও এমআরআই ছবিতে তাদের পারস্পরিক অবস্থান বিশ্লেষণ করা।'
    ),
    l(
      'Map the transpyloric plane of Addison (L1 vertebral body) to locate the pancreatic neck, celiac and superior mesenteric arteries, portal vein confluence, and renal hila in axial slices.',
      'অ্যাডিসনের ট্রান্সপাইলোরিক সমতল (L1 কশেরুকা) ব্যবহার করে অক্ষীয় স্লাইসে অগ্ন্যাশয়ের গ্রীবা, সিলিয়াক ও সুপিরিয়র মেসেন্টেরিক ধমনী, পোর্টাল শিরার মিলনস্থল এবং বৃক্কের হাইলামের অবস্থান নির্ণয় করা।'
    ),
    l(
      'Analyze the craniocaudal sectional organization of the retroperitoneum, the male and female pelvic peritoneal pouches, and the deep cerebral nuclei surrounding the internal capsule.',
      'রেট্রোপেরিটোনিয়ামের উপর-নিচ স্তরবিন্যাস, নারী ও পুরুষের পেলভিক পেরিটোনিয়াল পাউচ এবং ইন্টারনাল ক্যাপসুল ঘিরে অবস্থিত মস্তিষ্কের গভীর নিউক্লিয়াসমূহের সেকশনাল গঠন মূল্যায়ন করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.imaging-orientation'],
  relatedTopicIds: ['topic.anatomy.thorax', 'topic.anatomy.abdomen', 'topic.anatomy.brain'],
  references: refs,
  evidenceBySection: {
    introduction: ['fleckenstein-anatomy-3e', 'moore-anatomy-9e'],
    structure: ['fleckenstein-anatomy-3e', 'grays-anatomy-42e'],
    mechanism: ['grays-anatomy-42e', 'netter-cross-sectional-2e'],
    integration: ['moore-anatomy-9e', 'netter-cross-sectional-2e'],
    practice: ['fleckenstein-anatomy-3e', 'moore-anatomy-9e'],
    takeaways: ['grays-anatomy-42e', 'fleckenstein-anatomy-3e'],
  },
  chapter: {
    toc: [
      { id: 'sec-thoracic-levels', label: l('Transverse Thoracic Plane & Mediastinal Axial Levels', 'ট্র্যান্সভার্স থোরাসিক তল ও মিডিয়াস্টাইনাল অক্ষীয় স্তর'), sectionId: 'introduction' },
      { id: 'sec-transpyloric-plane', label: l('The Transpyloric Plane of Addison (L1 Landmarks)', 'অ্যাডিসনের ট্রান্সপাইলোরিক তল (L1 ল্যান্ডমার্ক)'), sectionId: 'structure' },
      { id: 'sec-retroperitoneum-pelvis', label: l('Retroperitoneal Great Vessels & Pelvic Sectional Spaces', 'রেট্রোপেরিটোনিয়াল রক্তনালী ও পেলভিক সেকশনাল স্থান'), sectionId: 'mechanism' },
      { id: 'sec-neuroaxial-cross-sections', label: l('Neuroaxial Cross-Sections: Suprasellar Cistern & Basal Nuclei', 'নিউরোঅ্যাক্সিয়াল সেকশন: সুপ্রাসেলার সিস্টার্ন ও বেসাল নিউক্লিয়াস'), sectionId: 'integration' },
      { id: 'sec-clinical-cross-sectional', label: l('Clinical Interpretation: Aortic Dissection & Pancreatitis', 'ক্লিনিক্যাল রেডিওলজি: মহাধমনী ব্যবচ্ছেদ ও অগ্ন্যাশয় প্রদাহ'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Synthesis of Cross-Sectional Diagnostic Landmarks', 'ক্রস-সেকশনাল শারীরস্থানের মূল ডায়াগনস্টিক সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Transverse Thoracic Plane of Ludwig', 'লুডউইগের ট্র্যান্সভার্স থোরাসিক সমতল (T4/T5 Plane)'),
        definition: l(
          'An imaginary horizontal plane extending from the sternal angle (manubriosternal joint) anteriorly to the intervertebral disc between T4 and T5 vertebrae posteriorly. Divides the superior mediastinum from the inferior mediastinum; marks the bifurcation of the trachea (carina), the start and end of the aortic arch, the bifurcation of the pulmonary trunk, the entry of the azygos vein into the superior vena cava, and the level where the thoracic duct crosses from right to left.',
          'একটি কাল্পনিক আনুভূমিক তল যা সামনে স্টার্নাল অ্যাঙ্গেল থেকে শুরু হয়ে পেছনে ৪র্থ ও ৫ম থোরাসিক কশেরুকার মধ্যবর্তী ডিস্ক পর্যন্ত বিস্তৃত। এটি সুপিরিয়র ও ইনফিরিয়র মিডিয়াস্টাইনামকে পৃথক করে; এখানে শ্বাসনালী (ট্রাকিয়া) দ্বিখণ্ডিত হয়, মহাধমনীর আর্চ শুরু ও শেষ হয়, পালমোনারি ট্রাঙ্ক বিভক্ত হয় এবং অ্যাজাইগাস শিরা সুপিরিয়র ভেনাকাভায় প্রবেশ করে।'
        ),
      },
      {
        term: l('Transpyloric Plane of Addison', 'অ্যাডিসনের ট্রান্সপাইলোরিক সমতল (L1 Transpyloric Plane)'),
        definition: l(
          'A key horizontal sectional reference plane located midway between the jugular notch and the superior border of the pubic symphysis, intersecting the vertebral column at the lower border of L1. Intersects the pylorus of the stomach, the neck of the pancreas, the duodenojejunal flexure, the fundus of the gallbladder, the origin of the superior mesenteric artery from the aorta, the formation of the hepatic portal vein from the splenic and SMV, and the hila of both kidneys (left kidney hilum slightly superior to the right).',
          'একটি অত্যন্ত গুরুত্বপূর্ণ অনুভূমিক তল যা গলার জুগুলার নচ এবং তলপেটের পিউবিক সিমফাইসিসের ঠিক মাঝামাঝি অবস্থিত এবং ১ম লাম্বার (L1) কশেরুকা বরাবর দেহকে অতিক্রম করে। এই তলে পাকস্থলীর পাইলোরাস, অগ্ন্যাশয়ের গ্রীবা, পিত্তথলির ফান্ডাস, সুপিরিয়র মেসেন্টেরিক ধমনীর উৎপত্তি, পোর্টাল শিরার মিলন এবং দুই বৃক্কের হাইলাম অবস্থান করে।'
        ),
      },
      {
        term: l('Internal Capsule Sectional Configuration', 'ইন্টারনাল ক্যাপসুলের সেকশনাল রূপরেখা (Internal Capsule)'),
        definition: l(
          'A boomerang-shaped bundle of ascending and descending myelinated projection fibers on horizontal axial brain sections, bounded medially by the caudate nucleus and thalamus, and laterally by the lentiform nucleus (putamen and globus pallidus). Composed of an anterior limb (frontopontine and thalamocortical fibers), a genu (corticobulbar tract for cranial nerve motor nuclei), and a posterior limb (corticospinal motor fibers organized homunculus-like and somatosensory radiations).',
          'মস্তিষ্কের অক্ষীয় সেকশনে দৃশ্যমান বুমেরাং আকৃতির ঘন স্নায়ুতন্তুর বান্ডিল, যার ভেতরের দিকে কডেট নিউক্লিয়াস ও থ্যালামাস এবং বাইরের দিকে লেন্টিফর্ম নিউক্লিয়াস অবস্থান করে। এটি অ্যান্টেরিয়র লিম্ব, জেনু (করোটিক স্নায়ুর কর্টিকোবালবার ট্র্যাক্ট) এবং পোস্টেরিয়র লিম্ব (হাত ও পায়ের নড়াচড়া নিয়ন্ত্রণকারী কর্টিকোস্পাইনাল ট্র্যাক্ট ও সংবেদী তন্তু) নিয়ে গঠিত।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Systematic Axial CT Localization of the Pancreatic Bed and Mesenteric Root', 'অক্ষীয় সিটি স্ক্যানে অগ্ন্যাশয় ও মেসেন্টেরিক রক্তনালী শনাক্তকরণ প্রক্রিয়া'),
        steps: [
          l(
            'Step 1: Identify the L1 vertebral body and retroperitoneal aorta on axial contrast-enhanced CT. Note the exit of the superior mesenteric artery (SMA) from the anterior aortic wall, surrounded by low-attenuation retroperitoneal adipose tissue forming the periceliac and peri-SMA fat ring.',
            'ধাপ ১: কনট্রাস্ট সিটি স্ক্যানে L1 কশেরুকা এবং পেছনের মহাধমনী (অ্যাওর্টা) চিহ্নিত করুন। মহাধমনীর সামনের দেয়াল থেকে সুপিরিয়র মেসেন্টেরিক ধমনীর (SMA) নির্গমন লক্ষ্য করুন, যা চারপাশের কালো রঙের চর্বি বলয় দ্বারা সুরক্ষিত থাকে।'
          ),
          l(
            'Step 2: Trace the tubular splenic vein crossing horizontally from the splenic hilum directly anterior to the SMA and posterior to the pancreatic body. Identify the junction where the vertical superior mesenteric vein (SMV) unites with the splenic vein to form the portal vein directly behind the pancreatic neck.',
            'ধাপ ২: প্লীহার হাইলাম থেকে অনুভূমিকভাবে আসা স্প্লেনিক শিরাটিকে লক্ষ্য করুন যা SMA-এর ঠিক সামনে এবং অগ্ন্যাশয়ের দেহের পেছনে অবস্থান করে। অগ্ন্যাশয়ের গলার পেছনে নিচ থেকে আসা SMV-এর সাথে এটি যুক্ত হয়ে প্রধান পোর্টাল শিরা গঠন করে।'
          ),
          l(
            'Step 3: Map the pancreatic head cradled within the C-loop of the duodenum to the right of the mesenteric vessels, and identify the uncinate process extending medially posterior to the SMV and SMA, establishing the vascular relationship critical for oncological resectability margins.',
            'ধাপ ৩: মেসেন্টেরিক রক্তনালীর ডানপাশে ডিওডেনামের ভাঁজের মধ্যে অগ্ন্যাশয়ের মাথা এবং SMA ও SMV-এর পেছনের দিকে প্রসারিত আনসিনেট প্রসেস চিহ্নিত করুন, যা অগ্ন্যাশয়ের ক্যান্সার অপারেশনের সম্ভাব্যতা নির্ধারণে অপরিহার্য।'
          ),
        ],
        conclusion: l(
          'Using the SMA and splenic vein confluence as reliable cross-sectional vascular landmarks permits unambiguous segmentation of the pancreatic head, uncinate process, body, and tail.',
          'SMA এবং স্প্লেনিক শিরার মিলনস্থলকে স্থির ভাস্কুলার ল্যান্ডমার্ক হিসেবে ব্যবহার করলে অগ্ন্যাশয়ের বিভিন্ন অংশ নির্ভুলভাবে পৃথক করা এবং টিউমারের বিস্তার নিশ্চিতভাবে বোঝা সম্ভব হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Which vessels form the vascular "nutcracker" relationship on axial abdominal CT, and what clinical syndrome develops when this space is abnormally compressed?',
          'পেটের অক্ষীয় সিটি স্ক্যানে কোন রক্তনালীগুলো নাটক্র্যাকার বা যাঁতি আকৃতির সম্পর্ক তৈরি করে এবং এই স্থান সংকুচিত হলে কোন ক্লিনিক্যাল সিন্ড্রোম দেখা দেয়?',
        ),
        answer: l(
          'On axial CT at the L1 level, the left renal vein courses horizontally from the left kidney to the inferior vena cava, passing directly between the abdominal aorta posteriorly and the superior mesenteric artery (SMA) anteriorly. The angle between the aorta and SMA normally ranges from 38° to 65°. If this aortomesenteric angle narrows pathologically (<25° due to rapid weight loss or loss of mesenteric fat), the left renal vein is compressed like a nutcracker. This obstruction elevates left renal venous pressure, leading to left flank pain, microscopic/gross hematuria, left testicular varicocele in males (due to retrograde pressure in the left gonadal vein), and pelvic congestion in females (nutcracker syndrome).',
          'L1 স্তরের অক্ষীয় সিটিতে বাম রেনাল শিরা মহাধমনীর সামনে এবং সুপিরিয়র মেসেন্টেরিক ধমনীর (SMA) পেছনের সরু স্থান দিয়ে অতিক্রম করে। সাধারণ অবস্থায় এই দুই ধমনীর মধ্যবর্তী কোণ ৩৮° থেকে ৬৫° থাকে। হঠাৎ ওজন কমে গেলে বা চর্বি নষ্ট হলে এই কোণ সংকুচিত হয়ে বাম রেনাল শিরাকে যাঁতির মতো চেপে ধরে (নাটক্র্যাকার সিন্ড্রোম); ফলে শিরায় রক্তচাপ বেড়ে গিয়ে প্রস্রাবে রক্তপাত, বামপাশে পেটে ব্যথা এবং পুরুষদের ক্ষেত্রে বাম অণ্ডকোষে ভেরিকোসিল দেখা দেয়।'
        ),
      },
      {
        question: l(
          'How does the appearance of the subarachnoid suprasellar cistern on axial non-contrast brain CT serve as a critical radiological indicator of impending uncal herniation?',
          'মস্তিষ্কের অক্ষীয় নন-কনট্রাস্ট সিটি স্ক্যানে সুপ্রাসেলার সিস্টার্ন কীভাবে আসন্ন আঙ্কাল হার্নিয়েশন বা মস্তিষ্কের জীবনঘাতী স্থানচ্যুতির সংবেদনশীল সূচক হিসেবে কাজ করে?',
        ),
        answer: l(
          'The suprasellar cistern is a cerebrospinal fluid-filled star- or pentagon-shaped space situated superior to the sella turcica, bounded by the frontal lobes anteriorly, temporal lobes (uncus) laterally, and cerebral peduncles/pons posteriorly. It normally contains the circle of Willis and optic chiasm, appearing hypodense (black, 0–15 HU). When an expanding supratentorial mass (such as an acute epidural or subdural hematoma) elevates intracranial pressure, the medial temporal lobe uncus is displaced medially and inferiorly over the free tentorial notch (uncal herniation). On axial CT, this directly effaces and obliterates the ipsilateral and central suprasellar cistern, compressing the oculomotor nerve (CN III, producing pupillary dilation) and posterior cerebral artery prior to fatal midbrain compression.',
          'সুপ্রাসেলার সিস্টার্ন হলো সেলা টারসিকার ওপরে অবস্থিত সিএসএফ তরলভর্তি একটি তারা বা পঞ্চভুজ আকৃতির কালো গহ্বর, যার দুই পাশে টেম্পোরাল লোবের আঙ্কাস এবং পেছনে ব্রেনস্টেম থাকে। মস্তিষ্কে রক্তক্ষরণ বা টিউমারের কারণে চাপ বেড়ে গেলে টেম্পোরাল লোবের আঙ্কাস ভেতরের দিকে সরে এসে এই সিস্টার্নকে চেপে বন্ধ করে দেয় (আঙ্কাল হার্নিয়েশন)। অক্ষীয় সিটিতে এই কালো ফাঁকা জায়গাটি মুছে যেতে দেখলেই বোঝা যায় যে ৩য় ক্রেনিয়াল নার্ভ ও ব্রেনস্টেম মারাত্মক চাপে পড়েছে এবং অবিলম্বে জরুরি ডিকম্প্রেশন সার্জারি না করলে রোগী দ্রুত মৃত্যুবরণ করবে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch25-cross-sectional-diagram',
    title: l('Interactive Sectional Anatomy & Multilevel Axial Planes', 'ইন্টারেক্টিভ সেকশনাল শারীরস্থান ও বহুস্তরীয় অক্ষীয় তল'),
    description: l(
      'Explore core cross-sectional anatomical landmarks across body compartments: inspect the T4/T5 thoracic plane, the L1 transpyloric abdominal junction, the retroperitoneal bifurcation, and the deep neuroaxial internal capsule.',
      'মানবদেহের বিভিন্ন গহ্বরের প্রধান ক্রস-সেকশনাল ল্যান্ডমার্ক পরীক্ষা করুন: T4/T5 থোরাসিক সমতল, L1 ট্রান্সপাইলোরিক সংযোগ, রেট্রোপেরিটোনিয়াল রক্তনালী বিভাজন এবং মস্তিষ্কের গভীর ইন্টারনাল ক্যাপসুলের অক্ষীয় রূপরেখা অন্বেষণ করুন।'
    ),
    disclaimer: l(
      'Cross-sectional regional schematic: select any anatomical plane to review vascular relationships, fascial spaces, and clinical imaging correlations.',
      'সেকশনাল শারীরস্থান রেখাচিত্র: রক্তনালীর পারস্পরিক সন্নিবেশ, ফাসিয়ার বিস্তার এবং ক্লিনিক্যাল ইমেজিং সংযোগ দেখতে যেকোনো তল নির্বাচন করুন।'
    ),
    svgType: 'cross-sectional-system',
    items: [
      {
        id: 'thoracic-ludwig-plane',
        label: l('T4/T5 Transverse Thoracic Plane of Ludwig', 'T4/T5 লুডউইগের ট্র্যান্সভার্স থোরাসিক সমতল'),
        description: l(
          'Extends from sternal angle to T4/T5 disc. Demarcates aortic arch, tracheal carina bifurcation, pulmonary trunk division, and azygos vein entry into superior vena cava.',
          'স্টার্নাল অ্যাঙ্গেল থেকে T4/T5 ডিস্ক পর্যন্ত বিস্তৃত। মহাধমনীর আর্চ, শ্বাসনালীর ক্যারাইনা বিভাজন, পালমোনারি ট্রাঙ্ক এবং SVC-তে অ্যাজাইগাস শিরার প্রবেশ নির্দেশ করে।'
        ),
        details: l(
          'Critical benchmark for staging thoracic lymph nodes, localizing central venous lines, and evaluating ascending versus descending thoracic aortic aneurysms.',
          'বুকের লিম্ফ নোড স্টেজিং, সেন্ট্রাল লাইন স্থাপন এবং মহাধমনীর অ্যানিউরিজম মূল্যায়নের সবচেয়ে গুরুত্বপূর্ণ রেফারেন্স তল।'
        ),
        sectionId: 'introduction',
        color: '#38bdf8',
        svgCoords: { x: 25, y: 25, width: 310, height: 50 },
      },
      {
        id: 'transpyloric-addison-plane',
        label: l('L1 Transpyloric Plane of Addison', 'L1 অ্যাডিসনের ট্রান্সপাইলোরিক সমতল'),
        description: l(
          'Midway between jugular notch and pubic symphysis (L1 level). Intersects gastric pylorus, pancreatic neck, SMA origin from aorta, splenic vein/portal vein confluence, and renal hila.',
          'জুগুলার নচ ও পিউবিক সিমফাইসিসের মধ্যবর্তী তল (L1 স্তর)। পাকস্থলীর পাইলোরাস, অগ্ন্যাশয়ের গ্রীবা, SMA-এর উৎপত্তি, পোর্টাল শিরা এবং বৃক্কের হাইলাম অতিক্রম করে।'
        ),
        details: l(
          'Nutcracker space: left renal vein traverses between abdominal aorta posteriorly and SMA anteriorly; compression causes left flank pain and testicular varicocele.',
          'নাটক্র্যাকার স্থান: বাম রেনাল শিরা মহাধমনী ও SMA-এর ফাঁক দিয়ে যায়; এখানে চাপ পড়লে পেটে ব্যথা ও অণ্ডকোষের ভেরিকোসিল হয়।'
        ),
        sectionId: 'structure',
        color: '#fb923c',
        svgCoords: { x: 25, y: 85, width: 310, height: 50 },
      },
      {
        id: 'retroperitoneal-pelvis-plane',
        label: l('L4 Aortic Bifurcation & Pelvic Recesses', 'L4 মহাধমনী বিভাজন ও পেলভিক রিসেস'),
        description: l(
          'Aorta bifurcates into common iliac arteries at L4; IVC forms at L5. In the pelvis, peritoneal reflections form the pouch of Douglas in females and rectovesical pouch in males.',
          'L4 কশেরুকা বরাবর মহাধমনী দুটি কমন ইলিয়াক ধমনীতে ভাগ হয়। পেলভিসে পেরিটোনিয়াল আবরণী নারীদের ক্ষেত্রে ডগলাস পাউচ এবং পুরুষদের ক্ষেত্রে রেকটোভেসিক্যাল পাউচ তৈরি করে।'
        ),
        details: l(
          'The pouch of Douglas is the most gravity-dependent peritoneal space in upright females; fluid/pus or drop metastases collect here and are palpable transvaginally.',
          'ডগলাস পাউচ হলো খাড়া অবস্থায় নারীদের পেটের সর্বনিম্ন স্থান; যেকোনো রক্ত, পুঁজ বা ক্যান্সার কোষ এখানে এসে জমা হয়।'
        ),
        sectionId: 'mechanism',
        color: '#c084fc',
        svgCoords: { x: 25, y: 145, width: 310, height: 50 },
      },
      {
        id: 'neuroaxial-capsule-plane',
        label: l('Basal Nuclei & Internal Capsule Axis', 'বেসাল নিউক্লিয়াস ও ইন্টারনাল ক্যাপসুল সমতল'),
        description: l(
          'Boomerang-shaped projection tract bounded medially by caudate nucleus and thalamus, and laterally by lentiform nucleus. Contains motor corticospinal and somatosensory fibers.',
          'বুমেরাং আকৃতির স্নায়ুপথ যার ভেতরের দিকে কডেট নিউক্লিয়াস ও থ্যালামাস এবং বাইরে লেন্টিফর্ম নিউক্লিয়াস থাকে। এতে মোটর ও সংবেদী স্নায়ুতন্তু সুরক্ষিত থাকে।'
        ),
        details: l(
          'Charcot artery of cerebral hemorrhage (lenticulostriate branch of MCA) supplies posterior limb; rupture causes dense contralateral hemiplegia and hemianesthesia.',
          'শার্কোট আর্টারি (MCA-এর শাখা) এই অংশ রক্ত দেয়; এখানে রক্তক্ষরণ হলে বিপরীত দিকের পুরো হাত ও পা চিরতরে অবশ হয়ে যায়।'
        ),
        sectionId: 'integration',
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
          heading: l('The Concept of Sectional Anatomy and the Transverse Thoracic Plane', 'সেকশনাল শারীরস্থানের ধারণা এবং ট্র্যান্সভার্স থোরাসিক তল'),
          paragraphs: [
            l(
              'Cross-sectional anatomy represents the modern clinical bridge between macroscopic gross dissection and diagnostic sectional imaging modalities such as CT, MRI, and ultrasound. Rather than viewing anatomical structures as isolated organs, sectional anatomy analyzes their immutable contiguous relationships within horizontal (axial), frontal (coronal), and sagittal slices. Mastery begins with standard reference planes, the most fundamental of which in the chest is the transverse thoracic plane of Ludwig, passing horizontally through the sternal angle anteriorly and the T4/T5 intervertebral disc posteriorly.',
              'ক্রস-সেকশনাল শারীরস্থান হলো দৃশ্যমান পোস্টমর্টেম ডিসেকশন এবং আধুনিক সিটি বা এমআরআই ইমেজিংয়ের মধ্যকার একটি অতি প্রয়োজনীয় সেতুবন্ধন। অঙ্গগুলোকে আলাদাভাবে না দেখে শরীরের ভেতরে তারা কীভাবে একে অপরের পাশে সংলগ্ন থাকে তা অক্ষীয় (অ্যাক্সিয়াল), ফ্রন্টাল এবং স্যাজিটাল স্লাইসের মাধ্যমে এখানে নিখুঁতভাবে পর্যালোচনা করা হয়। এই পাঠ শুরু হয় মানসম্পন্ন রেফারেন্স সমতল দিয়ে, যার মধ্যে বুকের সবচেয়ে প্রধান হলো লুডউইগের ট্র্যান্সভার্স থোরাসিক সমতল যা সামনে স্টার্নাল অ্যাঙ্গেল এবং পেছনে ৪র্থ ও ৫ম কশেরুকার ডিস্ক বরাবর অনুভূমিকভাবে বিস্তৃত।'
            ),
            l(
              'On an axial CT slice through the T4/T5 level, clinicians observe a constellation of vital cardiovascular and respiratory landmarks that establish anatomical boundaries. The aortic arch courses in an anteroposterior sweep from right-anterior to left-posterior; the trachea bifurcates at the carina into the right and left mainstem bronchi; the pulmonary trunk divides into right and left pulmonary arteries beneath the arch; the azygos vein curves anteriorly over the right main bronchus to empty into the superior vena cava; and the thoracic duct crosses from the right to the left side of the esophagus, making this single level the cardinal hub of thoracic radiology.',
              'T4/T5 স্তরের একটি অক্ষীয় সিটি স্ক্যানে তাকালে হৃৎপিণ্ড ও ফুসফুসের প্রধান রক্তনালী ও নালীর একটি অসাধারণ সন্নিবেশ দেখা যায়। মহাধমনীর আর্চ সামনে-ডান দিক থেকে শুরু হয়ে পেছনে-বাম দিকে বেঁকে যায়; ট্রাকিয়া ক্যারাইনা বরাবর ডান ও বাম প্রধান ব্রঙ্কাসে বিভক্ত হয়; পালমোনারি ধমনী দ্বিখণ্ডিত হয়; অ্যাজাইগাস শিরা ডান ব্রঙ্কাসের ওপর দিয়ে ঘুরে সুপিরিয়র ভেনাকাভায় প্রবেশ করে; এবং খাদ্যনালীর পেছনে থোরাসিক ডাক্ট ডান পাশ থেকে বাম পাশে মোড় নেয়, যার ফলে এই একটি মাত্র স্লাইস বুকের সমগ্র রেডিওলজির প্রধান দিকনির্দেশক হিসেবে কাজ করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Abdominal Hub: The Transpyloric Plane of Addison (L1)', 'উদরীয় কেন্দ্রবিন্দু: অ্যাডিসনের ট্রান্সপাইলোরিক তল (L1)'),
          paragraphs: [
            l(
              'Descending into the abdomen, the transpyloric plane of Addison serves as the premier anatomical landmark for abdominal cross-sectional imaging. Defined mathematically as the midpoint of a vertical line drawn between the jugular notch of the manubrium and the superior border of the pubic symphysis, it intersects the lumbar spine precisely at the lower border of the first lumbar vertebra (L1). On axial slices through this level, clinicians can identify the gastric pylorus, the horizontal first part of the duodenum, the gallbladder fundus, the neck of the pancreas, and the duodenojejunal flexure.',
              'পেটের অংশে প্রবেশ করলে অ্যাডিসনের ট্রান্সপাইলোরিক সমতল হলো সবচেয়ে নিখুঁত ও নির্ভরযোগ্য ল্যান্ডমার্ক। গলার জুগুলার নচ থেকে তলপেটের পিউবিক সিমফাইসিসের দূরত্বের ঠিক মাঝামাঝি বিন্দু দিয়ে এটি আনুভূমিকভাবে ১ম লাম্বার কশেরুকা (L1) বরাবর অতিক্রম করে। এই স্তরের অক্ষীয় সিটি ছবিতে পাকস্থলীর পাইলোরাস, ডিওডেনামের প্রথম অংশ, পিত্তথলির ফান্ডাস, অগ্ন্যাশয়ের গ্রীবা এবং ডিওডেনোজেজুনাল সংযোগস্থল স্পষ্টভাবে দৃশ্যমান হয়।'
            ),
            l(
              'Equally vital are the vascular structures that congregate at the transpyloric plane. The abdominal aorta gives off the superior mesenteric artery (SMA) from its anterior wall immediately inferior to the celiac trunk; the horizontal splenic vein courses across the posterior surface of the pancreatic body to unite with the vertically ascending superior mesenteric vein, forming the main trunk of the hepatic portal vein directly behind the pancreatic neck; and the bilateral renal hila lie at this level, with the left renal hilum positioned slightly superior to the right due to the liver’s bulk on the right side.',
              'এই ট্রান্সপাইলোরিক সমতলে রক্তনালীর সমাবেশও অত্যন্ত গুরুত্বপূর্ণ। মহাধমনীর সামনের দেয়াল থেকে সুপিরিয়র মেসেন্টেরিক ধমনী (SMA) বের হয়; প্লীহা থেকে আসা স্প্লেনিক শিরা অগ্ন্যাশয়ের পেছনের খাঁজ ধরে এসে নিচ থেকে আসা SMV-এর সাথে মিলিত হয়ে অগ্ন্যাশয়ের গলার পেছনে সরাসরি পোর্টাল শিরা তৈরি করে; এবং দুই পাশের কিডনির হাইলাম বা রক্তনালীর প্রবেশমুখ এই সমতলে অবস্থান করে, যেখানে ডানপাশে লিভারের চাপের কারণে বাম কিডনি ডানটির চেয়ে সামান্য ওপরে থাকে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Retroperitoneal Organization and Lower Abdominopelvic Axial Levels', 'রেট্রোপেরিটোনিয়াল স্তরবিন্যাস এবং নিম্ন উদর ও পেলভিসের অক্ষীয় স্তর'),
          paragraphs: [
            l(
              'Below the transpyloric plane, axial cross-sections through the L3 and L4 levels illustrate the termination of the great abdominal vessels. At the level of the L4 vertebra (corresponding externally to the supracristal plane joining the highest points of the iliac crests), the abdominal aorta bifurcates into the right and left common iliac arteries. Just inferior and to the right, at the L5 vertebral level, the common iliac veins converge to form the inferior vena cava, providing clear anatomical markers that guide retroperitoneal lymph node dissection and vascular aneurysm screening.',
              'ট্রান্সপাইলোরিক সমতলের নিচে L3 এবং L4 কশেরুকার স্তরে মহাধমনীর সমাপ্তি ঘটে। ইলিয়াক অস্থির ওপরের প্রান্ত বরাবর L4 কশেরুকার স্তরে মহাধমনী দ্বিখণ্ডিত হয়ে ডান ও বাম কমন ইলিয়াক ধমনীতে পরিণত হয়। এর ঠিক নিচে L5 স্তরে দুই পাশের ইলিয়াক শিরা মিলিত হয়ে ইনফিরিয়র ভেনাকাভা তৈরি করে; এই স্পষ্ট ভাস্কুলার ল্যান্ডমার্কগুলো পেটের ক্যান্সার অপারেশনে লিম্ফ নোড পরিষ্কার করতে এবং মহাধমনীর অ্যানিউরিজম শনাক্ত করতে চিকিৎসকদের পথ দেখায়।'
            ),
            l(
              'In the true pelvis, axial slices demonstrate how peritoneal reflections drape over pelvic viscera to form clinically significant dependent recesses. In the male, the peritoneum reflects from the superior bladder onto the rectum, creating the rectovesical pouch. In the female, the intervening uterus creates two separate recesses: the shallow vesicouterine pouch anteriorly and the deep, gravity-dependent rectouterine pouch of Douglas posteriorly, situated between the posterior vaginal fornix and anterior rectum where free intraperitoneal fluid, hemorrhage, or metastatic seedlings preferentially pool.',
              'ট্রু পেলভিসের অক্ষীয় চিত্রে দেখা যায় কীভাবে পেরিটোনিয়াম অঙ্গগুলোর ওপর ঝুলে পড়ে ফাঁকা থলি বা রিসেস তৈরি করে। পুরুষের ক্ষেত্রে মূত্রথলি থেকে মলাশয়ের ওপর পর্দা নেমে এসে রেকটোভেসিক্যাল পাউচ তৈরি করে। নারীর ক্ষেত্রে মাঝে জরায়ু থাকায় দুটি থলি গঠিত হয়: সামনে অগভীর ভেসিকোইউটেরাইন পাউচ এবং পেছনে গভীর ডগলাস পাউচ যা পেটের সবচেয়ে নিচু স্থান হওয়ায় পেটের যেকোনো রক্ত, পুঁজ বা ক্যান্সারের বীজ এখানে এসেই জমা হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Neuroaxial Cross-Sections: The Ventricular System and Internal Capsule', 'নিউরোঅ্যাক্সিয়াল ক্রস-সেকশন: ভেন্ট্রিকুলার ব্যবস্থা ও ইন্টারনাল ক্যাপসুল'),
          paragraphs: [
            l(
              'Horizontal cross-sections of the cerebral hemispheres provide exceptional localization of central nervous system pathways. At the level of the basal ganglia and thalamus, the dominant landmark is the lateral ventricle system surrounding the deep gray nuclei. The head of the caudate nucleus bulges into the frontal horn of the lateral ventricle, while the lentiform nucleus (composed of the lateral putamen and medial globus pallidus) is nestled lateral to the internal capsule, creating a distinct wedge-shaped configuration on axial T1/T2 MRI and CT.',
              'মস্তিষ্কের অনুভূমিক অক্ষীয় ছবি স্নায়ুপথ এবং প্যারালাইসিসের স্থান নির্ধারণে সবচেয়ে নিখুঁত তথ্য প্রদান করে। বেসাল গ্যাংলিয়া ও থ্যালামাসের স্তরে প্রধান ল্যান্ডমার্ক হলো মস্তিষ্কের ভেন্ট্রিকল যা গভীর নিউক্লিয়াসগুলোকে ঘিরে থাকে। কডেট নিউক্লিয়াসের মাথা ভেন্ট্রিকলের সামনের খাঁজে ঢুকে থাকে এবং লেন্টিফর্ম নিউক্লিয়াস (পুটামেন ও গ্লোবাস প্যালিডাস) ইন্টারনাল ক্যাপসুলের বাইরের দিকে অবস্থান করে চমৎকার ত্রিভুজাকার রূপ প্রদর্শন করে।'
            ),
            l(
              'The internal capsule itself is visible as a high-density white matter conduit folded into an anterior limb, a central genu, and a posterior limb. Descending voluntary motor fibers of the corticospinal tract travel through the anterior two-thirds of the posterior limb in a strict somatotopic arrangement (cervical fibers anterior, lumbosacral fibers posterior), while ascending sensory fibers from the ventral posterolateral thalamic nucleus occupy the posterior third, explaining why small lacunar infarcts here produce pure motor or pure sensory deficits.',
              'ইন্টারনাল ক্যাপসুল হলো একটি ঘন স্নায়ুতন্তুর মহাসড়ক যা অ্যান্টেরিওর লিম্ব, মাঝের জেনু এবং পোস্টেরিওর লিম্বে বিভক্ত। হাত-পা নাড়ানোর কর্টিকোস্পাইনাল ট্র্যাক্ট এর পোস্টেরিওর লিম্বের দুই-তৃতীয়াংশ দিয়ে নিচে নেমে যায় যেখানে শরীরের প্রতিটি অংশের জন্য আলাদা নির্দিষ্ট লাইন থাকে; আর অনুভূতিবাহী সংবেদী স্নায়ু এর পেছনের এক-তৃতীয়াংশ দিয়ে ওপরে ওঠে, যার কারণে এই ক্ষুদ্র অংশে একটি ছোট স্ট্রোক হলেও পুরো একপাশের হাত-পা অবশ হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Cross-Sectional Pathological Recognition: Dissection and Hemorrhage', 'ক্রস-সেকশনাল প্যাথলজি শনাক্তকরণ: অ্যাওর্টিক ডিসেকশন ও হেমাটোমা'),
          paragraphs: [
            l(
              'Interpreting cross-sectional imaging under acute clinical conditions requires identifying subtle distortions of normal spatial planes. In acute aortic dissection, contrast-enhanced CT through the thoracic plane reveals an intimal flap dividing the aorta into a true lumen and an expansive false lumen. The true lumen is typically smaller, maintains continuous communication with aortic roots, and exhibits faster contrast transit, whereas the false lumen exhibits delayed enhancement, cobweb signs of sheared elastin, and variable thrombosis.',
              'জরুরি অবস্থায় ক্রস-সেকশনাল চিত্র পাঠ করার জন্য স্বাভাবিক শারীরস্থানের সামান্য বিকৃতিও দ্রুত চিহ্নিত করতে হয়। মহাধমনী ফেটে যাওয়ার তীব্র রোগে (অ্যাওর্টিক ডিসেকশন) বুকের সিটি স্ক্যানে দেখা যায় মহাধমনীর ভেতরের পর্দা ছিঁড়ে গিয়ে রক্তনালীটিকে আসল ও নকল দুটি নালীতে ভাগ করে ফেলেছে। আসল নালীটি সাধারণত ছোট থাকে এবং দ্রুত রক্ত প্রবাহিত হয়, আর নকল নালীটি চওড়া হয়ে রক্ত জমাট বাঁধিয়ে অন্যান্য গুরুত্বপূর্ণ অঙ্গের রক্ত চলাচল বন্ধ করে দেয়।'
            ),
            l(
              'In acute intracranial trauma, non-contrast axial head CT distinguishes epidural and subdural hemorrhages based on their cross-sectional geometric boundaries. An epidural hematoma appears as a hyperdense, biconvex (lenticular) collection limited by cranial suture lines where the dura periosteal layer anchors tightly to bone. In contrast, a subdural hematoma forms a crescent-shaped hyperdense layer that crosses cranial suture lines freely, tracking along the entire cerebral hemisphere beneath the inner meningeal dura layer.',
              'মাথায় গুরুতর আঘাতের পর নন-কনট্রাস্ট অক্ষীয় সিটি স্ক্যান দেখে রক্তক্ষরণের ধরন নিশ্চিত করা হয়। এপিডুরাল হেমাটোমা দেখতে দ্বি-উত্তল বা মসুর ডালের দানার মতো স্ফীত দেখায় কারণ মাথার খুলির জোড়া বা সিউচারে ডুরা পর্দা শক্তভাবে লেগে থাকায় রক্ত সীমানা পেরোতে পারে না। অপরদিকে সাবডিউরাল হেমাটোমা ডুরা পর্দার নিচে চাঁদ বা কাস্তের মতো বাঁকা দেখায় যা কোনো বাধা ছাড়াই পুরো মস্তিষ্কের একপাশ জুড়ে ছড়িয়ে পড়ে মস্তিষ্ককে মারাত্মকভাবে চেপে ধরে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Core Principles of Human Cross-Sectional Anatomy', 'মানব ক্রস-সেকশনাল শারীরস্থানের মূল সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Cross-sectional anatomy unifies individual regional systems into an integrated spatial matrix. Fluency in axial levels—from the T4/T5 thoracic plane and L1 transpyloric hub to the L4 aortic bifurcation and the internal capsule—empowers clinicians to navigate multiplanar reconstructions, understand visceral displacement by pathological masses, and guide percutaneous interventions with precision.',
              'ক্রস-সেকশনাল শারীরস্থান শরীরের সমস্ত স্বতন্ত্র অঙ্গকে একটি সুসংহত ত্রিমাত্রিক পরিকাঠামোয় রূপ দেয়। T4/T5 থোরাসিক সমতল ও L1 ট্রান্সপাইলোরিক কেন্দ্র থেকে শুরু করে L4 মহাধমনী বিভাজন এবং মস্তিষ্কের ইন্টারনাল ক্যাপসুলের মতো প্রধান স্তরগুলোর নিখুঁত জ্ঞান থাকলে যেকোনো ক্রস-সেকশনাল ছবি দেখে রোগ শনাক্ত করা এবং নিরাপদে সূক্ষ্ম বায়োপসি বা সার্জারি পরিচালনা করা সম্ভব হয়।'
            ),
            l(
              'Consistent cognitive application of international radiological viewing conventions ensures that structural borders, fascial compartments, and neurovascular conduits are systematically inspected, safeguarding diagnostic accuracy and surgical efficacy across clinical disciplines.',
              'আন্তর্জাতিক রেডিওলজিক্যাল দিকনির্দেশনার নিয়মাবলী কঠোরভাবে মেনে চলার মাধ্যমেই প্রতিটি অঙ্গের সীমানা, ফাসিয়ার পর্দা এবং সংবেদনশীল স্নায়ু-রক্তনালী পথ সঠিকভাবে পরীক্ষা করা সম্ভব হয়, যা ভুল রোগ নির্ণয় প্রতিরোধ করে আধুনিক চিকিৎসাব্যবস্থাকে নিরাপদ ও সফল করে তোলে।'
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
          heading: l('Topographical Mechanics of the Thoracic Transverse Plane (T4/T5)', 'থোরাসিক ট্র্যান্সভার্স সমতলের (T4/T5) কাঠামোগত বলবিদ্যা'),
          paragraphs: [
            l(
              'The plane of Ludwig at T4/T5 functions as the paramount biomechanical and anatomical boundary of the thorax. It establishes the dividing line between the superior mediastinum and the three divisions of the inferior mediastinum (anterior, middle, and posterior). The aortic arch begins anteriorly at the level of the second right costal cartilage, arches superiorly and posteriorly over the left main bronchus, and terminates at the lower border of the T4 vertebral body, where it continues as the descending thoracic aorta within the posterior mediastinal compartment.',
              'T4/T5 স্তরে অবস্থিত লুডউইগের সমতলটি বক্ষপিঞ্জরের সবচেয়ে প্রধান কাঠামোগত সীমারেখা হিসেবে কাজ করে। এটি সুপিরিয়র মিডিয়াস্টাইনামকে ইনফিরিয়র মিডিয়াস্টাইনামের তিনটি অংশ (অ্যান্টেরিয়র, মিডল ও পোস্টেরিয়র) থেকে স্পষ্টভাবে আলাদা করে। মহাধমনীর আর্চ ডানদিকের দ্বিতীয় পাঁজরের তরুণাস্থির সমতল থেকে শুরু হয়ে বাম ব্রঙ্কাসের ওপর দিয়ে পেছনে ঘুরে T4 কশেরুকার নিচে এসে শেষ হয় এবং পোস্টেরিয়র মিডিয়াস্টাইনামে ডিসেন্ডিং থোরাসিক মহাধমনী হিসেবে নিচের দিকে নেমে যায়।'
            ),
            l(
              'Tracheal bifurcation into the primary bronchi occurs at the carina at this plane, with the subcarinal angle normally measuring less than 90°. Enlargement of the subcarinal lymph nodes (station 7) by granulomatous disease or metastatic bronchogenic carcinoma splays this bifurcation angle, an abnormality readily detectable on axial CT slices. Furthermore, the ligamentum arteriosum bridges the left pulmonary artery to the concavity of the aortic arch at this level, with the left recurrent laryngeal nerve looping under the arch immediately posterior to the ligament.',
              'এই তলে ট্রাকিয়ার সমাপ্তি ঘটে এবং সাবক্যারিনাল কোণ সাধারণত ৯০ ডিগ্রির কম থাকে। ফুসফুসের ক্যান্সার বা যক্ষ্মার কারণে সাবক্যারিনাল লিম্ফ নোড ফুলে উঠলে এই কোণটি অস্বাভাবিকভাবে চওড়া হয়ে যায় যা অক্ষীয় সিটি স্ক্যানে খুব সহজে ধরা পড়ে। তদুপরি লিগামেন্টাম আর্টারিওসাম এই স্তরে মহাধমনীর আর্চের সাথে বাম পালমোনারি ধমনীকে যুক্ত করে এবং এর ঠিক পেছন দিয়ে বাম রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ু মহাধমনীকে পেঁচিয়ে গলার দিকে উঠে যায়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Advanced Sectional Analysis of Addison’s Transpyloric Plane (L1)', 'অ্যাডিসের ট্রান্সপাইলোরিক তলের (L1) উচ্চতর সেকশনাল বিশ্লেষণ'),
          paragraphs: [
            l(
              'On high-resolution multidetector CT, the transpyloric plane (L1) provides the quintessential window into retroperitoneal pancreaticobiliary relationships. The neck of the pancreas lies directly over the confluence of the splenic vein and superior mesenteric vein, situated anterior to the L1 vertebral body and aorta. The uncinate process of the pancreatic head wraps medially and posteriorly around the superior mesenteric vessels, meaning that pancreatic adenocarcinomas arising in the uncinate process readily invade the SMA adventitia, converting potentially resectable tumors into borderline resectable or unresectable lesions.',
              'হাই-রেজোলিউশন মাল্টিডিটেক্টর সিটিতে ট্রান্সপাইলোরিক সমতল (L1) অগ্ন্যাশয় ও পিত্তনালীর পেছনের জটিল সম্পর্কের নিখুঁত রূপ প্রদর্শন করে। অগ্ন্যাশয়ের গ্রীবা সরাসরি স্প্লেনিক শিরা ও SMV-এর মিলনস্থলের ওপরে থাকে। অগ্ন্যাশয়ের আনসিনেট প্রসেস মেসেন্টেরিক ধমনীর পেছনের দিকে প্রসারিত থাকে, যার কারণে আনসিনেট প্রসেসে ক্যান্সার হলে তা খুব সহজেই SMA ধমনীর দেয়ালে আক্রমণ করে যা টিউমারটির সফল অস্ত্রোপচার প্রায় অসম্ভব করে তোলে।'
            ),
            l(
              'The SMA emerges from the anterior aortic wall at a sharp downward trajectory, forming an acute aortomesenteric angle through which the third (transverse) part of the duodenum and the left renal vein must pass. Compression of the transverse duodenum between the SMA and aorta produces superior mesenteric artery syndrome (Wilkie syndrome), manifesting as recurrent proximal small bowel obstruction and postprandial vomiting following rapid depletion of the retroperitoneal adipose pad during chronic illness or severe burn convalescence.',
              'SMA ধমনীটি মহাধমনীর সামনের দিক থেকে নিচের দিকে একটি তীর্যক কোণে নির্গত হয় এবং এই সরু ফাঁক দিয়েই ডিওডেনামের ৩য় অংশ এবং বাম রেনাল শিরা অতিক্রম করে। কোনো কঠিন রোগ বা মারাত্মক পোড়ার কারণে পেটের চর্বি শুকিয়ে গেলে এই কোণ সংকুচিত হয়ে ডিওডেনামকে পিষে ফেলে (উইলকি সিন্ড্রোম); ফলে খাবার সামনে এগোতে পারে না এবং রোগী বারবার তীব্র বমি ও পেটের ফাঁপায় আক্রান্ত হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Fascial Compartments of the Retroperitoneum and Pelvic Spaces', 'রেট্রোপেরিটোনিয়ামের ফাসিয়াল প্রকোষ্ঠ এবং পেলভিক ফাঁকা স্থান'),
          paragraphs: [
            l(
              'Cross-sectional compartmentalization of the retroperitoneum is governed by the renal fascia (Gerota fascia anteriorly and Zuckerkandl fascia posteriorly). These distinct fibroelastic sheets partition the retroperitoneum into three discrete paired spaces: the anterior pararenal space (containing the pancreas, ascending/descending colon, and duodenal C-loop), the perirenal space (housing the kidneys, adrenal glands, and perinephric fat within the renal fascia), and the posterior pararenal space (containing only fat, bounded posteriorly by the transversalis fascia).',
              'রেট্রোপেরিটোনিয়ামের ক্রস-সেকশনাল প্রকোষ্ঠগুলো জেরোটার অ্যান্টেরিওর ফাসিয়া এবং জুকারকান্ডলের পোস্টেরিওর ফাসিয়া দ্বারা তিনটি সুনির্দিষ্ট অংশে বিভক্ত। অ্যান্টেরিওর প্যারা-রেনাল স্পেসের মধ্যে অগ্ন্যাশয়, কোলন এবং ডিওডেনাম থাকে; পেরি-রেনাল স্পেসের ভেতরে কিডনি, অ্যাড্রেনাল গ্রন্থি ও রক্ষাকারী চর্বি থাকে; আর পোস্টেরিওর প্যারা-রেনাল স্পেসটি শুধুই চর্বি দিয়ে গঠিত যা কিডনিকে পেছনের পেশীপ্রাচীর থেকে সুরক্ষিত রাখে।'
            ),
            l(
              'In acute necrotizing pancreatitis, enzymatically active fluid collections preferentially track through the anterior pararenal space, but because the inferior leaf of the renal fascia is only weakly fused over the iliac fossa, retroperitoneal collections can track inferiorly into the pelvis or flank, generating retroperitoneal fat necrosis and retroperitoneal hematomas that clinically manifest as flank ecchymosis (Grey Turner sign) and periumbilical ecchymosis (Cullen sign).',
              'মারাত্মক একিউট প্যানক্রিয়াটাইটিসে অগ্ন্যাশয়ের ক্ষয়কারী পাচক রস অ্যান্টেরিয়র প্যারা-রেনাল স্পেস দিয়ে বের হয়ে কিডনির ফাসিয়ার দুর্বল সংযোগস্থল গলে তলপেট ও কোমরের পেশীতে ছড়িয়ে পড়ে। এই অ্যাসিড ও রক্তের কারণে পেটের ভেতরের চর্বি পুড়ে যায় এবং রক্তক্ষরণের ফলে কোমরের চামড়ায় কালশিটে (গ্রে টার্নার সাইন) এবং নাভির চারপাশে নীলচে দাগ (কালেন সাইন) দেখা দেয় যা গুরুতর অভ্যন্তরীণ বিপদের স্পষ্ট সংকেত।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Deep Cerebral Nuclei Sectional Geometry on Axial Neuroimaging', 'অক্ষীয় নিউরোইমেজিংয়ে মস্তিষ্কের গভীর নিউক্লিয়াসের জ্যামিতি'),
          paragraphs: [
            l(
              'On horizontal axial sections through the foramen of Monro, the relationship between deep gray nuclei and the ventricular system establishes foundational neuroanatomical geometry. The anterior horn of the lateral ventricle is indented laterally by the prominent head of the caudate nucleus; directly lateral to the internal capsule lies the lentiform nucleus, composed of the larger, darker putamen laterally and the paler globus pallidus medially. The thalamus forms the lateral wall of the third ventricle and the medial border of the internal capsule’s posterior limb.',
              'মস্তিষ্কের মনো-ছিদ্র বরাবর অনুভূমিক স্লাইসে ভেন্ট্রিকল এবং গভীর ধূসর নিউক্লিয়াসের পারস্পরিক অবস্থান স্নায়ুবিজ্ঞানের ভিত্তি তৈরি করে। ল্যাটারাল ভেন্ট্রিকলের সামনের খাঁজটিকে কডেট নিউক্লিয়াসের গোল মাথাটি ভেতরের দিকে চেপে রাখে; ইন্টারনাল ক্যাপসুলের ঠিক বাইরে পুটামেন ও গ্লোবাস প্যালিডাস নিয়ে গঠিত লেন্টিফর্ম নিউক্লিয়াস অবস্থান করে; আর থ্যালামাস ৩য় ভেন্ট্রিকলের পাশের দেয়াল এবং ইন্টারনাল ক্যাপসুলের পেছনের অংশের ভেতরের সীমানা তৈরি করে।'
            ),
            l(
              'The arterial supply to this territory is clinically unforgiving. The medial striate artery (recurrent artery of Heubner from ACA) supplies the head of the caudate and anterior limb of the internal capsule. The lenticulostriate arteries (lateral striate branches of MCA) penetrate the anterior perforated substance to supply the putamen, globus pallidus, and posterior limb of the internal capsule. Chronic hypertension induces lipohyalinosis and microaneurysms (Charcot-Bouchard aneurysms) in these fragile lenticulostriate branches, making the posterior limb of the internal capsule the most frequent site of catastrophic hypertensive intracerebral hemorrhage.',
              'মস্তিষ্কের এই অংশের রক্ত সরবরাহ অত্যন্ত নাজুক। অ্যান্টেরিওর সেরিব্রাল ধমনীর শাখা হিউবনার আর্টারি কডেট নিউক্লিয়াস ও ক্যাপসুলের সামনের অংশে রক্ত দেয়। আর মিডল সেরিব্রাল ধমনীর সরু লেন্টিকুলোস্ট্রিয়েট শাখাগুলো ইন্টারনাল ক্যাপসুলের পেছনের অংশ ও লেন্টিফর্ম নিউক্লিয়াসে রক্ত সরবরাহ করে। দীর্ঘস্থায়ী উচ্চ রক্তচাপের কারণে এই সরু রক্তনালীগুলো ফুলে ফেটে গিয়ে মস্তিষ্কের ভেতরে রক্তক্ষরণ ঘটায়, যার ফলে রোগী মুহূর্তের মধ্যে বিপরীত দিকের শরীরের সম্পূর্ণ প্যারালাইসিসে আক্রান্ত হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Systematic Cross-Sectional Trauma and Critical Care Evaluation', 'পদ্ধতিগত ক্রস-সেকশনাল ট্রমা ও ক্রিটিক্যাল কেয়ার মূল্যায়ন'),
          paragraphs: [
            l(
              'In polytrauma whole-body CT (pan-scan), axial image analysis proceeds systematically across designated anatomical compartments. In the thorax, clinicians evaluate the aortic arch contour, hemothorax volumes, lung contusion patterns, and pneumatic tracking indicative of pneumomediastinum. In the abdomen, active intravenous contrast extravasation (the "contrast blush") is distinguished from contained hematoma: a blush indicates ongoing arterial spurting (attenuation >150 HU identical to adjacent arteries), demanding immediate interventional transcatheter embolization or exploratory laparotomy.',
              'মারাত্মক দুর্ঘটনায় সারা শরীরের হোল-বডি সিটি স্ক্যান (প্যান-স্ক্যান) করার সময় প্রতিটি গহ্বরের রক্তনালী ও অঙ্গ ধারাবাহিকভাবে পরীক্ষা করা হয়। বুকের অংশে মহাধমনীর দেওয়াল অক্ষত আছে কিনা, ফুসফুস থেঁতলে গেছে কিনা এবং মিডিয়াস্টাইনামে বাতাস আছে কিনা তা দেখা হয়। পেটের অংশে কনট্রাস্ট দিয়ে পরীক্ষা করে তাজা রক্তক্ষরণ (কনট্রাস্ট ব্লাশ) শনাক্ত করা হয়: সক্রিয় রক্তক্ষরণের সময় ধমনীর মতো উজ্জ্বল আলো দেখা যায় যা দেখামাত্রই অবিলম্বে ক্যাথেটার দিয়ে রক্তনালী বন্ধ করা অথবা পেট কেটে সার্জারি করা বাধ্যতামূলক।'
            ),
            l(
              'In the pelvis, pelvic ring disruptions (such as open-book sacroiliac joint diastasis) lacerate the extensive presacral and internal iliac venous plexuses within the retroperitoneal pelvic extraperitoneal space. Because this potential space can accommodate up to 4 liters of blood before tamponade occurs, rapid axial CT assessment of pelvic hematoma volumes and pelvic binder placement is life-saving, preventing fatal hemorrhagic shock in the golden hour.',
              'পেলভিসের হাড় ভেঙে যাওয়ার মারাত্মক আঘাতে পেছনের স্যাক্রামের শিরাগুলোর জাল ছিঁড়ে গিয়ে পেলভিসের ফাঁকা স্থানে বিপুল রক্তক্ষরণ ঘটে। এই প্রশস্ত স্থানে ৪ লিটার পর্যন্ত রক্ত জমা হতে পারে কিন্তু বাইরে থেকে তা সহজে বোঝা যায় না; তাই দ্রুত অক্ষীয় সিটি স্ক্যান করে রক্তক্ষরণ চিহ্নিত করা এবং পেলভিক বেল্ট বা বাইন্ডার দিয়ে হাড় চেপে ধরে রক্তপাত বন্ধ করাই হলো রোগীকে জীবনঘাতী শক থেকে বাঁচানোর প্রধান চিকিৎসা।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis of Cross-Sectional Topography', 'ক্রস-সেকশনাল টপোগ্রাফির প্রাতিষ্ঠানিক সমন্বিত সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Cross-sectional diagnostic acumen transforms flat planar imagery into comprehensive three-dimensional mental anatomy. Recognizing how axial landmarks—such as the sternal angle of Ludwig, the transpyloric plane of Addison, and the retroperitoneal fascial planes—govern vascular conduits and organ boundaries ensures precision in diagnostic staging and surgical intervention.',
              'ক্রস-সেকশনাল ডায়াগনস্টিক দক্ষতা সাধারণ সমতল ছবিকে চিকিৎসকের মস্তিষ্কে একটি সম্পূর্ণ জীবন্ত ত্রিমাত্রিক গঠনে রূপান্তরিত করে। লুডউইগের সমতল, অ্যাডিসনের ট্রান্সপাইলোরিক কেন্দ্র এবং রেট্রোপেরিটোনিয়ামের ফাসিয়া স্তরগুলোর নিখুঁত জ্ঞান থাকলে যেকোনো ক্যান্সার অপারেশন বা জরুরি জীবনরক্ষাকারী চিকিৎসা শতভাগ আত্মবিশ্বাসের সাথে সম্পন্ন করা যায়।'
            ),
            l(
              'From acute stroke localization within the internal capsule to multi-compartment retroperitoneal fluid mapping, cross-sectional anatomy remains the ultimate common ground uniting anatomical science, diagnostic radiology, and clinical operative practice.',
              'ইন্টারনাল ক্যাপসুলের স্ট্রোক থেকে শুরু করে পেটের ভেতরের তীব্র সংক্রমণ বা রক্তক্ষরণ পর্যন্ত মানবদেহের যেকোনো রোগ নিরাময়ের জন্য ক্রস-সেকশনাল শারীরস্থানই হলো শারীরস্থানিক বিজ্ঞান, আধুনিক রেডিওলজি এবং ক্লিনিক্যাল অস্ত্রোপচারের সবচেয়ে শক্তিশালী সাধারণ ভিত্তি।'
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
          heading: l('Cross-Sectional Surgical Corridors and Retroperitoneal Fascial Planes', 'ক্রস-সেকশনাল সার্জিক্যাল করিডোর এবং রেট্রোপেরিটোনিয়াল ফাসিয়া'),
          paragraphs: [
            l(
              'Modern retroperitoneal and pelvic oncological resections exploit embryonic fusion planes visible on cross-sectional imaging to achieve complete R0 resection margins while preserving autonomic neurovascular bundles. In total mesorectal excision (TME) for rectal carcinoma, surgeons dissect within the "holy plane" of Heald—an avascular, areolar plane between the visceral mesorectal fascia and the parietal presacral fascia. Breaching the presacral fascia posteriorly lacerates the valveless presacral venous plexus, inducing torrential hemorrhage that is notoriously refractory to conventional surgical ligation and carries high intraoperative mortality.',
              'আধুনিক ক্যান্সার সার্জারিতে সম্পূর্ণ টিউমার কেটে ফেলার জন্য ভ্রূণীয় ফাসিয়ার ফাঁকা স্থানগুলোকে অস্ত্রোপচারের করিডোর হিসেবে ব্যবহার করা হয়। মলাশয়ের ক্যান্সারে (TME অপারেশন) সার্জনরা হিল্ডের "হোলি প্লেন" নামক একটি রক্তনালীহীন ফাসিয়ার ফাঁক দিয়ে মলাশয় আলাদা করেন। অসাবধানতাবশত পেছনের প্রিস্যাক্রাল ফাসিয়া কেটে ফেললে পেছনের কপাটিকাহীন শিরা ফেটে গিয়ে এমন ভয়াবহ রক্তপাত শুরু হয় যা সেলাই করে সহজে বন্ধ করা যায় না এবং রোগী দ্রুত মৃত্যুর কোলে ঢলে পড়তে পারে।'
            ),
            l(
              'Similarly, in retroperitoneal sarcoma surgery, precise axial cross-sectional mapping of the relationship between tumor pseudo-capsule, the psoas fascia, and the inferior mesenteric vessels dictates whether en-bloc nephrectomy, hemicolectomy, or aortic adventitial stripping is required to achieve microscopically negative margins, highlighting how sectional fascial geometry directly governs surgical oncology decision trees.',
              'একইভাবে পেটের গভীর সারকোমা ক্যান্সারের ক্ষেত্রে টিউমারের আবরণের সাথে সোয়াস পেশী এবং রক্তনালীর মধ্যকার দূরত্ব অক্ষীয় সিটি স্ক্যানে মেপে সার্জনরা সিদ্ধান্ত নেন যে টিউমারের সাথে কিডনি বা অন্ত্র কেটে ফেলতে হবে কিনা; অর্থাৎ ফাসিয়ার নিখুঁত ক্রস-সেকশনাল রূপরেখাই অস্ত্রোপচারের সমস্ত সিদ্ধান্ত নির্ধারণ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('High-Resolution Multiplanar Vascular Angiography and Endovascular Stenting', 'উচ্চ-রেজোলিউশন মাল্টিপ্লানার ভাস্কুলার অ্যানজিওগ্রাফি ও এন্ডোভাস্কুলার স্টেন্টিং'),
          paragraphs: [
            l(
              'Endovascular abdominal aortic aneurysm repair (EVAR) relies entirely on pre-procedural sub-millimeter axial CT angiography with center-line lumen reconstructions. Vascular interventionalists measure the proximal aortic neck length (distance from the lowest renal artery to the aneurysm sac, ideally >15 mm), neck diameter, neck angulation (<60°), and iliac access vessel tortuosity. Severe angulation or circumferential calcification at the L1–L2 level threatens proximal stent-graft seal, predisposing to catastrophic type IA endoleaks where systemic arterial blood continues to pressurize the aneurysm sac.',
              'মহাধমনীর অ্যানিউরিজমে কোনো বুক বা পেট না কেটে রক্তনালীর ভেতর দিয়ে কৃত্রিম স্টেন্ট গ্রাফট বসানোর (EVAR) জন্য সাব-মিলিমিটার সিটি অ্যানজিওগ্রাম ব্যবহার করা হয়। সার্জনরা সর্বনিম্ন রেনাল ধমনী থেকে ফোলা অংশের দূরত্ব (ন্যূনতম ১৫ মিমি), রক্তনালীর ব্যাস এবং বাঁক নিখুঁতভাবে মাপেন। এই মাপ একটু ভুল হলে স্টেন্টের মুখ ঢিলে হয়ে গিয়ে রক্ত ক্ষরণ চলতে থাকে (টাইপ ১এ এন্ডোলিক) যা যেকোনো মুহূর্তে মহাধমনী ফাটিয়ে রোগীকে মেরে ফেলতে পারে।'
            ),
            l(
              'In the neurovascular domain, cross-sectional computed tomographic angiography (CTA) and digital subtraction angiography (DSA) delineate complex intracranial aneurysm morphologies at the anterior communicating artery (ACom) and internal carotid artery (ICA) bifurcation. Determining the neck-to-dome ratio (>1:2 favors primary coil embolization, whereas wide necks require balloon assistance or flow-diverting stents) demonstrates how microscopic cross-sectional dimensions govern life-saving neurointerventional therapeutic strategy.',
              'মস্তিষ্কের স্নায়ু-রক্তনালীর ক্ষেত্রে সিটি অ্যানজিওগ্রাম ও ডিজিটাল সাবট্রাকশন অ্যানজিওগ্রাফির মাধ্যমে অ্যানিউরিজমের আকৃতি ও গলার পরিমাপ নির্ধারণ করা হয়। অ্যানিউরিজমের গলার মাপের ওপর ভিত্তি করে সিদ্ধান্ত নেওয়া হয় যে সেখানে সরাসরি প্ল্যাটিনাম কয়েল ঢুকিয়ে রক্ত চলাচল বন্ধ করা হবে নাকি আধুনিক ফ্লো-ডাইভার্টার স্টেন্ট বসানো হবে, যা মস্তিষ্কের প্রাণঘাতী রক্তক্ষরণ পুরোপুরি প্রতিরোধ করে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-level schematic of human cross-sectional anatomy: the T4/T5 transverse thoracic plane, the L1 transpyloric plane, the L4 retroperitoneal bifurcation, and the deep internal capsule axis.',
      'মানব ক্রস-সেকশনাল শারীরস্থানের ৪টি মূল স্তর: T4/T5 ট্র্যান্সভার্স থোরাসিক সমতল, L1 ট্রান্সপাইলোরিক সমতল, L4 রেট্রোপেরিটোনিয়াল রক্তনালী বিভাজন এবং মস্তিষ্কের গভীর ইন্টারনাল ক্যাপসুল সমতল।'
    ),
    steps: [
      l(
        '1. The T4/T5 transverse thoracic plane divides superior and inferior mediastinum, passing through the aortic arch and carina.',
        '১. T4/T5 ট্র্যান্সভার্স থোরাসিক সমতল মহাধমনীর আর্চ ও শ্বাসনালীর ক্যারাইনা অতিক্রম করে সুপিরিয়র ও ইনফিরিয়র মিডিয়াস্টাইনামকে আলাদা করে।'
      ),
      l(
        '2. The L1 transpyloric plane coordinates the gastric pylorus, pancreatic neck, SMA origin, portal vein origin, and renal hila.',
        '২. L1 ট্রান্সপাইলোরিক সমতল পাকস্থলীর পাইলোরাস, অগ্ন্যাশয়ের গ্রীবা, SMA, পোর্টাল শিরা এবং দুই বৃক্কের হাইলামকে সুসংহত করে।'
      ),
      l(
        '3. The L4 vertebral level marks the aortic bifurcation into common iliac arteries, while pelvic reflections form deep peritoneal pouches.',
        '৩. L4 কশেরুকা স্তরে মহাধমনী ইলিয়াক ধমনীতে ভাগ হয় এবং পেলভিসের নিচে পেরিটোনিয়াম ডগলাস পাউচের মতো গভীর থলি তৈরি করে।'
      ),
      l(
        '4. In the brain, the internal capsule coordinates corticospinal motor and sensory pathways between the caudate, lentiform, and thalamus.',
        '৪. মস্তিষ্কে ইন্টারনাল ক্যাপসুল কডেট, লেন্টিফর্ম ও থ্যালামাসের মাঝখান দিয়ে মোটর ও সংবেদী স্নায়ুতন্তুকে সুশৃঙ্খলভাবে পরিচালিত করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'On an axial contrast-enhanced CT of the abdomen at the transpyloric plane (L1), which venous structure courses horizontally directly between the abdominal aorta posteriorly and the superior mesenteric artery anteriorly?',
      'L1 ট্রান্সপাইলোরিক সমতলে পেটের একটি অক্ষীয় কনট্রাস্ট সিটি স্ক্যানে কোন শিরাটি মহাধমনীর সামনে এবং সুপিরিয়র মেসেন্টেরিক ধমনীর (SMA) পেছনের সরু স্থান দিয়ে আনুভূমিকভাবে অতিক্রম করে?',
    ),
    options: [
      l('Left renal vein', 'বাম রেনাল শিরা'),
      l('Splenic vein', 'স্প্লেনিক শিরা'),
      l('Inferior mesenteric vein', 'ইনফিরিয়র মেসেন্টেরিক শিরা'),
      l('Right renal vein', 'ডান রেনাল শিরা'),
    ],
    correctIndex: 0,
    explanation: l(
      'At the transpyloric plane (L1), the left renal vein emerges from the left renal hilum and courses horizontally across the midline to empty into the inferior vena cava. In doing so, it passes directly through the acute aortomesenteric angle, positioned anterior to the abdominal aorta and posterior to the origin of the superior mesenteric artery (SMA). Pathological narrowing of this angle compresses the left renal vein in the classic "nutcracker" syndrome, causing elevated venous pressure, left flank pain, hematuria, and left gonadal varicocele.',
      'L1 ট্রান্সপাইলোরিক সমতলে বাম রেনাল শিরাটি বাম কিডনি থেকে বেরিয়ে মহাধমনীর সামনে এবং সুপিরিয়র মেসেন্টেরিক ধমনীর (SMA) পেছনের সরু ফাঁক দিয়ে ডানপাশে থাকা ইনফিরিয়র ভেনাকাভায় প্রবেশ করে। এই দুই ধমনীর মধ্যবর্তী স্থান সংকুচিত হলে শিরাটি যাঁতির মতো চেপে যায় (নাটক্র্যাকার সিন্ড্রোম), যার ফলে শিরায় রক্তচাপ বেড়ে গিয়ে পেটে ব্যথা, প্রস্রাবে রক্তপাত এবং বাম অণ্ডকোষে ভেরিকোসিল সৃষ্টি হয়।'
    ),
  },
}
