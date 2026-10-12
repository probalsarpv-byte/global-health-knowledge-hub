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
    id: 'openstax-ap2e-thorax',
    title: 'Anatomy and Physiology 2e: The Thorax and Cardiopulmonary Cavity',
    authors: 'Betts JG, Young KA, Wise JA, Johnson E, Poe B, Kruse DH, Korol O, Johnson JE',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/details/books/anatomy-and-physiology-2e',
  },
  {
    id: 'netter-thorax-8e',
    title: 'Atlas of Human Anatomy, 8th Edition',
    authors: 'Netter FH',
    organization: 'Elsevier',
    year: 2022,
    url: 'https://www.elsevier.com/books/atlas-of-human-anatomy/netter/978-0-323-68042-4',
  },
]

export const chapter21ThoraxLesson: LessonTopic = {
  id: 'topic.anatomy.thorax',
  slug: 'thorax',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('21 · Thorax', '২১ · বক্ষ'),
  summary: l(
    'A comprehensive regional study of the human thorax: the thoracic cage and costal mechanics, intercostal neurovascular bundles in the subcostal groove, division of the mediastinum by the transverse thoracic plane at the sternal angle of Louis, superior and inferior mediastinal compartments (anterior, middle, and posterior), pleural recesses and fluid mechanics, pericardial sinuses, and emergency clinical procedures including thoracentesis, tube thoracostomy, and subxiphoid pericardiocentesis.',
    'মানব বক্ষপিঞ্জরের বিশদ আঞ্চলিক শারীরস্থান: বক্ষ খাঁচা ও পাঁজরের শ্বাস বলবিদ্যা, সাবকোস্টাল খাঁজে অবস্থিত ইন্টারকোস্টাল রক্তনালী ও স্নায়ুগুচ্ছ, লুইসের স্টার্নাল অ্যাঙ্গেল বরাবর সমতল দ্বারা মিডিয়াস্টাইনামের চার প্রকোষ্ঠে বিভাজন (সুপিরিয়র, অ্যান্টিরিয়র, মিডল ও পোস্টেরিয়র), প্লুরাল গহ্বর ও তরল গতিবিদ্যা, পেরিকার্ডিয়াল সাইনাস এবং থোরাসেন্টেসিস, চেস্ট ড্রেন ও সাবজিফয়েড পেরিকার্ডিওসেন্টেসিস সহ জরুরি ক্লিনিক্যাল পর্যালোচনা।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Map the thoracic wall architecture, distinguishing the three intercostal muscle layers and tracing the vein-artery-nerve (VAN) bundle sheltered within the costal groove to explain safe thoracentesis needle entry.',
      'বক্ষপ্রাচীরের গঠন বিশ্লেষণ করা, তিনটি ইন্টারকোস্টাল পেশী স্তর চিহ্নিত করা এবং পাঁজরের নিচের খাঁজে সুরক্ষিত ভেন-আর্টারি-নার্ভ (VAN) গুচ্ছের অবস্থান জেনে নিরাপদ সুঁই প্রবেশের শারীরস্থান ব্যাখ্যা করা।'
    ),
    l(
      'Subdivide the mediastinum using the transverse thoracic plane (sternal angle of Louis at T4/T5), cataloging contents of the superior, anterior, middle, and posterior mediastinal compartments.',
      'লুইসের স্টার্নাল অ্যাঙ্গেল (T4/T5 কশেরুকা) বরাবর অনুভূমিক তল ব্যবহার করে মিডিয়াস্টাইনামকে বিভক্ত করা এবং সুপিরিয়র, অ্যান্টিরিয়র, মিডল ও পোস্টেরিয়র মিডিয়াস্টাইনামের গুরুত্বপূর্ণ অঙ্গসমূহ তালিকাভুক্ত করা।'
    ),
    l(
      'Correlate the anatomy of the pleural recesses (costodiaphragmatic and costomediastinal) and pericardial sinuses (transverse and oblique) with pleural effusion, pneumothorax, and cardiac tamponade.',
      'প্লুরাল রিসেস (কস্টোডায়াফ্রাগমেটিক) এবং পেরিকার্ডিয়াল সাইনাসের শারীরস্থান বিশ্লেষণ করা এবং প্লুরাল ইফিউশন, নিউমোথোরাক্স ও কার্ডিয়াক ট্যাম্পোনেডের জরুরি ক্লিনিক্যাল ব্যবস্থাপনা মূল্যায়ন করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.cardiovascular'],
  relatedTopicIds: ['topic.anatomy.respiratory', 'topic.anatomy.head-neck'],
  references: refs,
  evidenceBySection: {
    introduction: ['moore-anatomy-9e', 'openstax-ap2e-thorax'],
    structure: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    mechanism: ['grays-anatomy-42e', 'netter-thorax-8e'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'netter-thorax-8e'],
    takeaways: ['openstax-ap2e-thorax', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-thoracic-wall', label: l('Thoracic Cage & Intercostal Anatomy', 'বক্ষ খাঁচা ও ইন্টারকোস্টাল শারীরস্থান'), sectionId: 'introduction' },
      { id: 'sec-mediastinum-plane', label: l('Transverse Thoracic Plane & Mediastinal Divisions', 'ট্রান্সভার্স থোরাসিক সমতল ও মিডিয়াস্টাইনাম'), sectionId: 'structure' },
      { id: 'sec-pleura-pericardium', label: l('Pleural Recesses & Pericardial Cavity', 'প্লুরাল রিসেস ও পেরিকার্ডিয়াল গহ্বর'), sectionId: 'mechanism' },
      { id: 'sec-great-vessels', label: l('Posterior Mediastinum & Great Vessels', 'পোস্টেরিয়র মিডিয়াস্টাইনাম ও প্রধান রক্তনালী'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Procedures: Thoracentesis & Tamponade', 'ক্লিনিক্যাল পদ্ধতি: থোরাসেন্টেসিস ও ট্যাম্পোনেড'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary & Thorax Core Principles', 'সারসংক্ষেপ ও বক্ষ শারীরস্থানের মূলনীতি'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Sternal Angle of Louis', 'লুইসের স্টার্নাল অ্যাঙ্গেল (Angle of Louis)'),
        definition: l(
          'The visible and palpable manubriosternal junction located approximately 5 cm inferior to the jugular notch. Corresponds to the T4/T5 intervertebral disc plane; marks the articulation of the 2nd costal cartilage, the bifurcation of the trachea (carina), the start and end of the aortic arch, and the boundary separating superior from inferior mediastinum.',
          'বুকের মাঝখানের হাড়ে ম্যানুব্রিয়াম ও স্টার্নামের সংযোগস্থল যা চামড়ার ওপর স্পষ্টভাবে অনুভব করা যায়। এটি ৪র্থ ও ৫ম বক্ষ কশেরুকার মধ্যবর্তী তল নির্দেশ করে; এখানে ২য় পাঁজরের তরুণাস্থি যুক্ত হয়, শ্বাসনালি দুই ভাগে ভাগ হয়, মহাধমনীর আর্চ শুরু ও শেষ হয় এবং সুপিরিয়র ও ইনফিরিয়র মিডিয়াস্টাইনামের সীমানা নির্ধারিত হয়।'
        ),
      },
      {
        term: l('Costal Groove & Intercostal Bundle (VAN)', 'কোস্টাল খাঁজ ও ইন্টারকোস্টাল গুচ্ছ (VAN)'),
        definition: l(
          'A longitudinal groove sheltered along the inferior, internal margin of each rib. Houses the intercostal neurovascular bundle ordered superior to inferior as: Vein, Artery, Nerve (VAN), running between the internal intercostal and innermost intercostal muscle layers; needles for thoracentesis must pass over the superior margin of the lower rib to avoid lacerating these vessels.',
          'প্রতিটি পাঁজরের ভেতরের নিচের কিনারায় অবস্থিত একটি লম্বা খাঁজ। উপর থেকে নিচে ক্রমান্বয়ে শিরা, ধমনী ও স্নায়ু (VAN) এই খাঁজের নিচে সুরক্ষিত থাকে; তাই বুকে সুঁই বা নল ঢোকানোর সময় এই রক্তনালীগুলো এড়াতে সর্বদা নিচের পাঁজরের ওপরের কিনারা ঘেঁষে সুঁই প্রবেশ করাতে হয়।'
        ),
      },
      {
        term: l('Transverse Pericardial Sinus', 'ট্রান্সভার্স পেরিকার্ডিয়াল সাইনাস'),
        definition: l(
          'A horizontal passage within the pericardial cavity located posterior to the ascending aorta and pulmonary trunk and anterior to the superior vena cava and left atrium; cardiac surgeons insert a finger or clamp through this sinus during coronary bypass surgery to temporarily ligate or divert blood flow from both great arterial trunks.',
          'পেরিকার্ডিয়াল গহ্বরের ভেতর একটি আনুভূমিক সুরঙ্গ যা মহাধমনী ও ফুসফুসীয় ধমনীর পেছনে এবং সুপিরিয়র ভেনাকাভা ও বাম অলিন্দের সামনে অবস্থিত; বাইপাস সার্জারির সময় সার্জনরা এই সুরঙ্গে আঙুল বা ক্ল্যাম্প ঢুকিয়ে উভয় প্রধান ধমনীকে একসাথে আটকে রক্তপ্রবাহ নিয়ন্ত্রণ করেন।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Safe Landmark Localization for Thoracentesis and Chest Tube Insertion', 'থোরাসেন্টেসিস ও চেস্ট ড্রেন টিউব স্থাপনের নিরাপদ শারীরস্থানিক ল্যান্ডমার্ক'),
        steps: [
          l(
            'Step 1: For thoracentesis (pleural fluid aspiration in an upright sitting patient), identify the posterior or midaxillary line. Percuss the fluid level (stony dullness) and select the intercostal space 1 or 2 ribs below the fluid level, typically the 7th, 8th, or 9th intercostal space, but strictly above the 9th rib to avoid penetrating the elevated diaphragm and lacerating the liver (on the right) or spleen (on the left).',
            'ধাপ ১: থোরাসেন্টেসিসের জন্য (বসে থাকা রোগীর ফুসফুস থেকে পানি নিষ্কাশন) পেছনের বা বগলের মধ্যরেখা বরাবর আঙুল দিয়ে টোকা দিয়ে পানির মাত্রা নির্ণয় করুন। সাধারণত ৭ম বা ৮ম ইন্টারকোস্টাল স্পেস নির্বাচন করুন; তবে কোনোভাবেই ৯ম পাঁজরের নিচে নামবেন না যাতে ডায়াফ্রাম ভেদ করে ডান পাশের যকৃত বা বাম পাশের প্লীহা জখম না হয়।'
          ),
          l(
            'Step 2: Understand neurovascular topography: each rib shelters the intercostal vein, artery, and nerve (VAN) within its inferior subcostal groove. Collateral branches run along the superior border of the rib below but are significantly smaller.',
            'ধাপ ২: রক্তনালীর অবস্থান লক্ষ্য করুন: প্রতিটি পাঁজরের নিচের খাঁজে প্রধান শিরা, ধমনী ও স্নায়ু থাকে। নিচের পাঁজরের ওপরের কিনারায় খুব ক্ষুদ্র শাখা থাকে যা জখম হওয়ার ঝুঁকি অনেক কম।'
          ),
          l(
            'Step 3: Advance the needle directly over the superior border of the lower rib bounding the chosen intercostal space, perpendicular to the skin through the parietal pleura, aspirating as you enter to confirm return of pleural fluid while completely sparing the main intercostal bundle above.',
            'ধাপ ৩: নির্বাচিত স্পেসের নিচের পাঁজরের ওপরের কিনারা ঘেঁষে সুঁইটি সোজা ভেতরে প্রবেশ করান; এভাবে ওপরের পাঁজরের মূল ইন্টারকোস্টাল রক্তনালী বাঁচিয়ে নিরাপদে প্যারাইটাল প্লুরা ভেদ করে তরল বের করে নিয়ে আসুন।'
          ),
        ],
        conclusion: l(
          'Strict adherence to the "walk over the lower rib" rule prevents fatal intercostal artery laceration, while observing diaphragm borders prevents intra-abdominal organ perforation.',
          'সর্বদা "নিচের পাঁজরের ওপর দিয়ে যাওয়া"র নিয়ম মানলে মারাত্মক ইন্টারকোস্টাল ধমনী ছিঁড়ে রক্তক্ষরণ হওয়া প্রতিরোধ করা যায় এবং ডায়াফ্রামের উচ্চতা বিবেচনায় রাখলে পেটের অঙ্গ জখম হওয়া থেকে রক্ষা পায়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'What anatomical structures are traversed at the transverse thoracic plane (sternal angle of Louis, T4/T5), and why is this plane pivotal in cardiovascular and thoracic anatomy?',
          'লুইসের স্টার্নাল অ্যাঙ্গেল (T4/T5 কশেরুকা) বরাবর অনুভূমিক তলে কোন কোন গুরুত্বপূর্ণ অঙ্গ অতিক্রম করে এবং কেন এটি বক্ষ শারীরস্থানের সবচেয়ে প্রধান ল্যান্ডমার্ক?',
        ),
        answer: l(
          'The transverse thoracic plane passes through the manubriosternal joint anteriorly and the T4/T5 intervertebral disc posteriorly. Crucial anatomical events occur at this plane: (1) bifurcation of the trachea into left and right main bronchi at the carina; (2) beginning and end of the aortic arch; (3) entry of the azygos vein into the superior vena cava; (4) division of the pulmonary trunk into right and left pulmonary arteries; (5) crossing of the thoracic duct from right to left behind the esophagus; and (6) boundary demarcation separating the superior mediastinum from the three inferior mediastinal subdivisions.',
          'এই তলটি সামনে ম্যানুব্রিওস্টার্নাল সংযোগ এবং পেছনে T4/T5 কশেরুকার ডিস্ক বরাবর যায়। এখানে ছয়টি ঐতিহাসিক ঘটনা ঘটে: (১) শ্বাসনালি ক্যারিনায় দুই প্রধান ব্রঙ্কাসে বিভক্ত হয়; (২) অ্যাওর্টিক আর্চ শুরু ও শেষ হয়; (৩) অ্যাজাইগোস শিরা সুপিরিয়র ভেনাকাভায় মেশে; (৪) পালমোনারি ট্রাঙ্ক দুই ধমনীতে ভাগ হয়; (৫) থোরাসিক ডাক্ট ডান থেকে বামে ক্রসিং করে; এবং (৬) এটি সুপিরিয়র ও ইনফিরিয়র মিডিয়াস্টাইনামকে পৃথক করে।'
        ),
      },
      {
        question: l(
          'What is Beck triad in acute cardiac tamponade, and what is the anatomical route for emergency subxiphoid pericardiocentesis (Larrey approach)?',
          'তীব্র কার্ডিয়াক ট্যাম্পোনেডে বেকের ট্রায়াড কী এবং জরুরি সাবজিফয়েড পেরিকার্ডিওসেন্টেসিস (ল্যারি পদ্ধতি) কোন শারীরস্থানিক পথে সুঁই প্রবেশ করায়?',
        ),
        answer: l(
          'Beck triad comprises hypotension, distended neck veins (elevated jugular venous pressure), and muffled/distant heart sounds, caused by fluid accumulating in the non-distensible fibrous pericardium, which mechanically compresses the thin-walled right chambers and prevents diastolic filling. In emergency subxiphoid pericardiocentesis, a long needle is inserted at a 45-degree angle to the skin between the xiphoid process and left costal margin (infrasternal angle), aimed toward the left shoulder. It traverses skin, subcutaneous tissue, rectus abdominis aponeurosis, through the fibrous pericardium into the anterior pericardial space without puncturing pleura, lung, or coronary arteries.',
          'বেকের ট্রায়াড হলো নিম্ন রক্তচাপ, গলার শিরা ফুলে ওঠা এবং স্টেথোস্কোপে হৃদস্পন্দনের শব্দ স্তিমিত বা ক্ষীণ শোনা; শক্ত পেরিকার্ডিয়ামের ভেতর তরল জমে হৃৎপিণ্ডকে চেপে ধরলে এই অবস্থা হয়। জরুরি সাবজিফয়েড পদ্ধতিতে জিফয়েড এবং বাম পাঁজরের সংযোগস্থল থেকে ৪৫ ডিগ্রি কোণে বাম কাঁধ বরাবর সুঁই প্রবেশ করানো হয়। এটি ত্বক ও পেশী ভেদ করে সরাসরি পেরিকার্ডিয়ামে পৌঁছে ফুসফুস বা করোনারি ধমনী না ছুঁয়েই জমে থাকা তরল টেনে বের করে আনে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch21-thorax-diagram',
    title: l('Interactive Mediastinum, Thoracic Wall & Pericardial Compartments', 'ইন্টারেক্টিভ মিডিয়াস্টাইনাম, বক্ষপ্রাচীর ও পেরিকার্ডিয়াল প্রকোষ্ঠ'),
    description: l(
      'Inspect the anatomical architecture of the human thorax: explore the four mediastinal compartments, intercostal neurovascular bundles in the costal groove, the transverse thoracic plane of Louis, and the pleural recesses.',
      'মানব বক্ষপিঞ্জরের শারীরস্থান অন্বেষণ করুন: মিডিয়াস্টাইনামের চারটি প্রকোষ্ঠ, পাঁজরের নিচের খাঁজে রক্তনালী ও স্নায়ু, লুইসের স্টার্নাল অ্যাঙ্গেল এবং প্লুরাল রিসেসের গঠন পরীক্ষা করুন।'
    ),
    disclaimer: l(
      'Thoracic anatomical schematic: select any sector to review borders, contained organs, and clinical access routes.',
      'বক্ষ শারীরস্থানের রেখাচিত্র: সীমানা, অভ্যন্তরীণ অঙ্গ এবং চিকিৎসার জরুরি প্রবেশের পথ দেখতে যেকোনো অঞ্চল নির্বাচন করুন।'
    ),
    svgType: 'thorax-system',
    items: [
      {
        id: 'mediastinum-divisions',
        label: l('Mediastinal Divisions & Plane of Louis', 'মিডিয়াস্টাইনামের প্রকোষ্ঠ ও লুইসের তল'),
        description: l(
          'Central thoracic partition between pleural cavities. Transverse thoracic plane (T4/T5) divides superior from inferior mediastinum (anterior, middle, posterior).',
          'দুই ফুসফুসের মধ্যবর্তী কেন্দ্রীয় স্থান। লুইসের স্টার্নাল তল (T4/T5) মিডিয়াস্টাইনামকে সুপিরিয়র এবং ইনফিরিয়র (অ্যান্টিরিয়র, মিডল ও পোস্টেরিয়র) প্রকোষ্ঠে ভাগ করে।'
        ),
        details: l(
          'Superior mediastinum contains aortic arch, brachiocephalic veins, superior vena cava, trachea, esophagus, thoracic duct, phrenic and vagus nerves, and thymus gland remnants.',
          'সুপিরিয়র মিডিয়াস্টাইনামে মহাধমনীর আর্চ, ব্র্যাকিওসিফালিক শিরা, সুপিরিয়র ভেনাকাভা, শ্বাসনালি, খাদ্যনালি, থোরাসিক ডাক্ট এবং ফ্রেনিক ও ভেগাস স্নায়ু থাকে।'
        ),
        sectionId: 'structure',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'intercostal-bundle',
        label: l('Intercostal Wall & Subcostal Bundle (VAN)', 'ইন্টারকোস্টাল প্রাচীর ও সাবকোস্টাল গুচ্ছ (VAN)'),
        description: l(
          'Three muscle layers: external, internal, and innermost intercostals. Neurovascular bundle (vein, artery, nerve) runs sheltered in the costal groove along the lower rib border.',
          'তিনটি পেশী স্তর: এক্সটারনাল, ইন্টারনাল এবং ইনারমোস্ট। পাঁজরের নিচের খাঁজে শিরা, ধমনী ও স্নায়ু (VAN) সুরক্ষিত থাকে; সুঁই সর্বদা নিচের পাঁজরের ওপর দিয়ে ঢোকাতে হয়।'
        ),
        details: l(
          'Collateral branches travel along the superior border of the rib below. In thoracentesis and chest tube insertion, the superior margin of the lower rib is always hugged to avoid severe hemorrhage.',
          'নিচের পাঁজরের ওপরের কিনারায় ক্ষুদ্র শাখা থাকে। থোরাসেন্টেসিস ও চেস্ট টিউব স্থাপনে মারাত্মক রক্তক্ষরণ এড়াতে সর্বদা নিচের পাঁজরের ওপরের কিনারা ঘেঁষে যাওয়া হয়।'
        ),
        sectionId: 'introduction',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'pericardium-sinuses',
        label: l('Pericardium & Cardiac Sinuses', 'পেরিকার্ডিয়াম ও কার্ডিয়াক সাইনাস'),
        description: l(
          'Fibrous pericardium externally fuses with the central tendon of the diaphragm. Serous pericardium provides parietal and visceral (epicardium) layers forming transverse and oblique sinuses.',
          'বাইরের শক্ত ফাইব্রাস পেরিকার্ডিয়াম ডায়াফ্রামের সাথে যুক্ত থাকে। ভেতরের সেরাস পেরিকার্ডিয়াম প্যারাইটাল ও ভিসেরাল স্তরে ভাগ হয়ে ট্রান্সভার্স ও অবলিক সাইনাস তৈরি করে।'
        ),
        details: l(
          'Cardiac tamponade occurs when rapid effusion (>200 mL) in the fibrous sac prevents right ventricular diastolic filling, producing Beck triad and requiring emergency pericardiocentesis.',
          'পেরিকার্ডিয়ামের ভেতর হঠাৎ পানি বা রক্ত জমলে হৃদস্পন্দন ব্যাহত হয় যাকে কার্ডিয়াক ট্যাম্পোনেড বলে; এই অবস্থায় অবিলম্বে সাবজিফয়েড সুঁই দিয়ে পানি বের করতে হয়।'
        ),
        sectionId: 'mechanism',
        color: '#fecdd3',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'posterior-mediastinum',
        label: l('Posterior Mediastinum & Great Conduits', 'পোস্টেরিয়র মিডিয়াস্টাইনাম ও রক্তনালী'),
        description: l(
          'Dorsal visceral space anterior to T5–T12 vertebrae. Contains thoracic descending aorta, esophagus, thoracic duct, azygos/hemiazygos venous systems, and sympathetic trunks.',
          'T5 থেকে T12 কশেরুকার সামনের গভীর স্থান। এতে ডিসেন্ডিং থোরাসিক অ্যাওর্টা, খাদ্যনালি, থোরাসিক ডাক্ট, অ্যাজাইগোস শিরা এবং সিমপ্যাথেটিক স্নায়ুরজ্জু অবস্থান করে।'
        ),
        details: l(
          'Thoracic duct ascends between aorta and azygos vein, draining 75% of systemic lymph before crossing from right to left at T4/T5 to enter the left internal jugular-subclavian venous angle.',
          'থোরাসিক ডাক্ট অ্যাওর্টা ও অ্যাজাইগোসের মাঝখান দিয়ে উঠে শরীরের ৭৫% লসিকা বহন করে এবং T4/T5 কশেরুকা বরাবর বামে মোড় নিয়ে বাম জুগুলার-সাবক্ল্যাভিয়ান শিরা কোণে মেশে।'
        ),
        sectionId: 'integration',
        color: '#fef08a',
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
          heading: l('The Skeletal Thoracic Cage and Intercostal Architecture', 'কঙ্কাল বক্ষ খাঁচা এবং ইন্টারকোস্টাল প্রাচীরের সংগঠন'),
          paragraphs: [
            l(
              'The human thoracic cage is an osteocartilaginous framework enclosing and protecting the cardiopulmonary viscera while serving as an expandable mechanical bellows for respiration. It is composed of 12 pairs of ribs and their associated costal cartilages, the central sternum (manubrium, body, and xiphoid process), and 12 thoracic vertebrae dorsally. Ribs 1 through 7 are true (vertebrosternal) ribs attaching directly to the sternum; ribs 8 through 10 are false (vertebrochondral) ribs attaching indirectly; and ribs 11 and 12 are floating (vertebral) ribs with free anterior tips.',
              'মানুষের বক্ষপিঞ্জর হলো একটি হাড় ও তরুণাস্থি দিয়ে তৈরি সুরক্ষাকারী খাঁচা যা হৃৎপিণ্ড ও ফুসফুসকে বাইরের আঘাত থেকে রক্ষা করে এবং শ্বাস নেওয়ার সময় বেলুনের মতো প্রসারিত হয়। এটি ১২ জোড়া পাঁজর, মাঝখানের স্টার্নাম এবং পেছনের ১২টি বক্ষ কশেরুকা দিয়ে গঠিত। ১ম থেকে ৭ম পাঁজর সরাসরি স্টার্নামের সাথে যুক্ত থাকে; ৮ম থেকে ১০ম পাঁজর একে অপরের সাথে যুক্ত হয়ে অপ্রত্যক্ষভাবে স্টার্নামে মেশে; এবং ১১ ও ১২তম পাঁজর সামনের দিকে মুক্ত অবস্থায় ভেসে থাকে।'
            ),
            l(
              'Between adjacent ribs lie the eleven intercostal spaces, each spanned by three concentric muscle sheets: the external intercostal (fibers running anteroinferiorly like hands in pockets, elevating ribs during inspiration), the internal intercostal (fibers running posteroinferiorly, active in forced expiration), and the innermost intercostal muscle. Sheltered within the subcostal groove along the lower internal border of each rib runs the intercostal vein, artery, and nerve, arranged in a strict superior-to-inferior sequence: VAN.',
              'প্রতিটি পাঁজরের মধ্যবর্তী ফাঁকা স্থানগুলোকে ইন্টারকোস্টাল স্পেস বলে যা তিনটি পেশী স্তর দ্বারা পূর্ণ থাকে: এক্সটারনাল ইন্টারকোস্টাল (যা শ্বাস গ্রহণের সময় পাঁজরকে ওপরে তোলে), ইন্টারনাল ইন্টারকোস্টাল (যা জোরপূর্বক শ্বাস ছাড়তে সাহায্য করে) এবং ইনারমোস্ট ইন্টারকোস্টাল পেশী। প্রতিটি পাঁজরের নিচের ভেতরের খাঁজে সুরক্ষিতভাবে শিরা, ধমনী ও স্নায়ু উপর থেকে নিচে ক্রমান্বয়ে সাজানো থাকে যাকে সংক্ষেপে VAN বলা হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Mediastinum: Central Thoracic Partition and Planes', 'মিডিয়াস্টাইনাম: কেন্দ্রীয় বক্ষ বিভাজন এবং লুইসের সমতল'),
          paragraphs: [
            l(
              'The mediastinum is the thick, movable tissue partition situated centrally within the thoracic cavity, bounded laterally by the bilateral pleural cavities, anteriorly by the sternum, posteriorly by the vertebral column, superiorly by the thoracic inlet, and inferiorly by the diaphragm. It contains all thoracic viscera except the lungs themselves. Clinically, it is divided into two primary zones by the transverse thoracic plane—an imaginary horizontal line drawn from the sternal angle of Louis anteriorly to the T4/T5 intervertebral disc posteriorly.',
              'মিডিয়াস্টাইনাম হলো বক্ষপিঞ্জরের দুই ফুসফুসের মধ্যবর্তী একটি পুরু ও নমনীয় কেন্দ্রীয় প্রকোষ্ঠ যা সামনে স্টার্নাম, পেছনে মেরুদণ্ড, ওপরে ঘাড়ের প্রবেশদ্বার এবং নিচে ডায়াফ্রাম দ্বারা সীমাবদ্ধ। ফুসফুস ছাড়া বুকের ভেতরের সমস্ত গুরুত্বপূর্ণ অঙ্গ এই মিডিয়াস্টাইনামে অবস্থান করে। চিকিৎসাবিজ্ঞানে লুইসের স্টার্নাল অ্যাঙ্গেল থেকে পেছনের ৪র্থ ও ৫ম কশেরুকার মধ্যবর্তী ডিস্ক বরাবর একটি আনুভূমিক রেখা টেনে এটিকে সুপিরিয়র এবং ইনফিরিয়র মিডিয়াস্টাইনামে ভাগ করা হয়।'
            ),
            l(
              'The region above the plane is the superior mediastinum, housing the aortic arch and its three branches (brachiocephalic trunk, left common carotid, left subclavian), the superior vena cava, brachiocephalic veins, trachea, esophagus, and thoracic duct. The region below the plane is the inferior mediastinum, further partitioned into three compartments: the small anterior mediastinum (containing thymus remnants and internal thoracic vessels), the middle mediastinum (containing the pericardial sac, heart, and ascending aorta), and the posterior mediastinum.',
              'এই তলের ওপরের অংশটি হলো সুপিরিয়র মিডিয়াস্টাইনাম যাতে মহাধমনীর আর্চ ও তার তিন প্রধান শাখা, সুপিরিয়র ভেনাকাভা, ব্র্যাকিওসিফালিক শিরা, শ্বাসনালি, খাদ্যনালি ও থোরাসিক ডাক্ট থাকে। তলের নিচের ইনফিরিয়র মিডিয়াস্টাইনামটি আবার তিনটি প্রকোষ্ঠে বিভক্ত: সামনে ছোট অ্যান্টিরিয়র মিডিয়াস্টাইনাম (থাইমাসের অবশিষ্টাংশ), মাঝখানে মিডল মিডিয়াস্টাইনাম (হৃৎপিণ্ড ও পেরিকার্ডিয়াম) এবং পেছনে মেরুদণ্ডের সামনে থাকা পোস্টেরিয়র মিডিয়াস্টাইনাম।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Pleural Recesses and Respiratory Fluid Dynamics', 'প্লুরাল রিসেস এবং শ্বাসক্রিয়ার তরল গতিবিদ্যা'),
          paragraphs: [
            l(
              'Each lung is enveloped by a continuous serous membrane termed the pleura. The visceral pleura tightly adheres to the lung parenchyma, dipping into its interlobar fissures, whereas the parietal pleura lines the inner thoracic wall, diaphragm, and mediastinum. Between them lies the potential pleural cavity, lubricated by 10 to 15 mL of serous pleural fluid that reduces friction during respiratory excursions while maintaining high negative intrapleural surface tension (-5 cmH2O at rest) that holds the lungs expanded against the thoracic wall.',
              'প্রতিটি ফুসফুস প্লুরা নামক একটি দুই স্তরবিশিষ্ট পাতলা সেরাস পর্দা দিয়ে আবৃত থাকে। ভেতরের ভিসেরাল প্লুরা ফুসফুসের গায়ে শক্তভাবে লেগে থাকে এবং খাঁজের ভেতর ঢুকে যায়; আর বাইরের প্যারাইটাল প্লুরা বুকের প্রাচীর, ডায়াফ্রাম ও মিডিয়াস্টাইনামের ভেতরের দেয়ালে লেগে থাকে। এদের মাঝখানের ফাঁকা স্থানে মাত্র ১০ থেকে ১৫ মিলিলিটার পিচ্ছিল তরল থাকে যা শ্বাস নেওয়ার সময় ঘর্ষণ কমায় এবং ঋণাত্মক চাপের মাধ্যমে ফুসফুসকে প্রসারিত রাখতে সাহায্য করে।'
            ),
            l(
              'At peripheral margins where parietal pleura reflects back upon itself without intervening lung tissue, anatomical reservoirs known as pleural recesses are formed. The most clinically important is the costodiaphragmatic recess, an expansive slit-like space situated postero-inferiorly between the costal pleura and diaphragmatic pleura. In an upright individual, gravitational fluid collections (pleural effusions or hemothorax) pool primarily in the costodiaphragmatic recesses, blunting the sharp costophrenic angles visible on erect chest radiographs.',
              'যেসব স্থানে ফুসফুসের টিস্যু পৌঁছায় না অথচ প্লুরার দুটি স্তর পরস্পরের ওপর ভাঁজ হয়ে থাকে, সেখানে প্লুরাল রিসেস তৈরি হয়। এর মধ্যে সবচেয়ে গুরুত্বপূর্ণ হলো কস্টোডায়াফ্রাগমেটিক রিসেস যা পাঁজরের দেয়াল এবং ডায়াফ্রামের মাঝে পেছনের দিকে অবস্থিত। কোনো কারণে ফুসফুসে পানি জমলে (প্লুরাল ইফিউশন) তা অভিকর্ষের টানে সবার আগে এই রিসেসে এসে জমা হয় এবং এক্স-রে ছবিতে স্বাভাবিক তীক্ষ্ণ কোণটি ঘোলাটে বা ভোঁতা দেখায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Posterior Mediastinum and Thoracic Sympathetic Chains', 'পোস্টেরিয়র মিডিয়াস্টাইনাম এবং থোরাসিক রক্তনালী ও স্নায়ুপথ'),
          paragraphs: [
            l(
              'The posterior mediastinum is a vertical conduit situated dorsal to the pericardium and diaphragm and anterior to vertebral bodies T5 through T12. Running continuously through this space are the thoracic descending aorta, the esophagus accompanied by the anterior and posterior vagal trunks, the thoracic duct, the azygos vein on the right, and the hemiazygos and accessory hemiazygos veins on the left, alongside the paravertebral sympathetic trunks giving off the greater, lesser, and least splanchnic nerves.',
              'পোস্টেরিয়র মিডিয়াস্টাইনাম হলো পেরিকার্ডিয়ামের পেছনে এবং ৫ম থেকে ১২শ বক্ষ কশেরুকার সামনে অবস্থিত একটি উল্লম্ব পথ। এই সংকীর্ণ স্থানের ভেতর দিয়ে নিচে নেমে যায় শরীরের প্রধান রক্তনালী ডিসেন্ডিং থোরাসিক অ্যাওর্টা, ভেগাস স্নায়ু সহ খাদ্যনালি, লসিকা নালী থোরাসিক ডাক্ট, ডান পাশের অ্যাজাইগোস শিরা, বাম পাশের হেমিঅ্যাজাইগোস শিরা এবং পেটের অঙ্গগুলোর স্বয়ংক্রিয় স্নায়ু পরিচালনাকারী স্প্ল্যাঙ্কনিক স্নায়ুসমূহ।'
            ),
            l(
              'The thoracic duct serves as the main lymphatic trunk of the body, conveying roughly 75% of systemic lymph from the cisterna chyli below the diaphragm upward to empty into the left internal jugular-subclavian venous angle (Pirogoff angle). Ascending between the thoracic aorta and azygos vein, the duct crosses from the right side of the vertebral column to the left at the level of the T4/T5 transverse thoracic plane, leaving it vulnerable to traumatic or surgical rupture causing chylothorax.',
              'থোরাসিক ডাক্ট হলো মানবদেহের প্রধান লসিকা নালী যা শরীরের ৭৫ শতাংশ লসিকা রস বহন করে পেটের সিস্টার্না কাইলি থেকে বুকের খাঁচা দিয়ে উঠে বাম পাশের জুগুলার ও সাবক্ল্যাভিয়ান শিরার কোণে ঢেলে দেয়। অ্যাওর্টা ও অ্যাজাইগোস শিরার মাঝখান দিয়ে ওঠার সময় T4/T5 কশেরুকা বরাবর এটি ডান থেকে বামে মোড় নেয়; কোনো অপারেশনে বা বুকে তীব্র আঘাতে এটি ফেটে গেলে ফুসফুসে দুধের মতো সাদা লসিকা তরল জমতে পারে যাকে কাইলোথোরাক্স বলা হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Procedures: Thoracentesis, Chest Tubes, and Pericardiocentesis', 'ক্লিনিক্যাল পদ্ধতি: থোরাসেন্টেসিস, চেস্ট ড্রেন ও পেরিকার্ডিওসেন্টেসিস'),
          paragraphs: [
            l(
              'Performing a diagnostic or therapeutic thoracentesis requires strict adherence to intercostal landmarks. In a seated patient, needle puncture is ideally performed in the 7th or 8th intercostal space along the posterior or midaxillary line. The needle must always be advanced immediately over the superior border of the lower rib bounding the space; this technique safely avoids the vulnerable intercostal vein, artery, and nerve sheltered within the subcostal groove above, preventing massive intrapleural hemorrhage.',
              'ফুসফুসের পানি বের করার জন্য থোরাসেন্টেসিস করার সময় সঠিক শারীরস্থানিক ল্যান্ডমার্ক মেনে চলা জীবনরক্ষার শর্ত। বসে থাকা রোগীর ক্ষেত্রে সাধারণত পেছনের বা বগলের মধ্যরেখা বরাবর ৭ম বা ৮ম ইন্টারকোস্টাল স্পেস নির্বাচন করা হয়। সুঁইটি সর্বদা নিচের পাঁজরের ওপরের কিনারা ঘেঁষে ভেতরে ঢোকাতে হয় যাতে ওপরের পাঁজরের খাঁজে থাকা প্রধান রক্তনালীগুলো জখম না হয় এবং বুকে মারাত্মক রক্তক্ষরণ প্রতিরোধ করা যায়।'
            ),
            l(
              'In emergency tube thoracostomy (chest drain insertion for tension pneumothorax or massive hemothorax), the standard entry is the "triangle of safety," bounded anteriorly by the lateral border of pectoralis major, posteriorly by the anterior border of latissimus dorsi, and inferiorly by the horizontal line of the 5th intercostal space (nipple level). For acute cardiac tamponade, subxiphoid pericardiocentesis introduces a needle at the infrasternal angle directed at a 45-degree angle toward the left shoulder, relieving intrapericardial pressure.',
              'জরুরি চেস্ট টিউব স্থাপনের জন্য বগলের নিচে "ট্রায়াঙ্গল অব সেফটি" ব্যবহার করা হয় যার সামনে পেক্টোরালিস মেজর পেশী, পেছনে ল্যাটিসিমাস ডরসি পেশী এবং নিচে ৫ম ইন্টারকোস্টাল স্পেসের রেখা থাকে। অন্যদিকে কার্ডিয়াক ট্যাম্পোনেডে সাবজিফয়েড পদ্ধতিতে জিফয়েডের নিচ দিয়ে ৪৫ ডিগ্রি কোণে বাম কাঁধের দিকে সুঁই ঢুকিয়ে পেরিকার্ডিয়ামের অতিরিক্ত তরল টেনে বের করে রোগীকে দ্রুত বাঁচানো সম্ভব হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary & Thorax Core Principles', 'সারসংক্ষেপ ও বক্ষ শারীরস্থানের মূল সূত্রসমূহ'),
          paragraphs: [
            l(
              'The regional anatomy of the human thorax integrates three-dimensional protective osteocartilaginous boundaries with dynamic respiratory kinematics and complex neurovascular conduits. The sternal angle of Louis serves as the cardinal reference plane dividing the superior and inferior mediastinal subdivisions and locating great vessel bifurcations.',
              'মানব বক্ষপিঞ্জরের আঞ্চলিক শারীরস্থান হাড় ও তরুণাস্থির তৈরি প্রতিরক্ষামূলক দেয়ালের সাথে ফুসফুসের গতিশীল শ্বাসক্রিয়া এবং প্রধান রক্তনালীগুলোর জটিল সংযোগকে নিখুঁতভাবে সমন্বিত করে। লুইসের স্টার্নাল অ্যাঙ্গেল হলো বক্ষের প্রধান দিকনির্দেশক রেফারেন্স যা সুপিরিয়র ও ইনফিরিয়র মিডিয়াস্টাইনামকে বিভক্ত করে এবং প্রধান রক্তনালী ও শ্বাসনালির বিভাজনস্থল নির্দেশ করে।'
            ),
            l(
              'Safe execution of life-saving emergency procedures—including chest tube thoracostomy, needle decompression of tension pneumothorax, and pericardiocentesis—rests entirely upon meticulous appreciation of the subcostal neurovascular groove, the triangle of safety, and the pericardial reflections.',
              'চেস্ট ড্রেন টিউব স্থাপন, টেনশন নিউমোথোরাক্সের বাতাস বের করা কিংবা পেরিকার্ডিওসেন্টেসিসের মতো জীবনরক্ষাকারী চিকিৎসা পদ্ধতিগুলোর নির্ভুল প্রয়োগ পুরোপুরি নির্ভর করে পাঁজরের নিচের ভাস্কুলার খাঁজ, ট্রায়াঙ্গল অব সেফটি এবং পেরিকার্ডিয়ামের পর্দাগুলোর শারীরস্থানিক জ্ঞান যথাযথভাবে প্রয়োগের ওপর।'
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
          heading: l('Costal Biomechanics: "Pump-Handle" and "Bucket-Handle" Mechanics', 'পাঁজরের গতিবিজ্ঞান: "পাম্প-হ্যান্ডেল" এবং "বাকেট-হ্যান্ডেল" মেকানিক্স'),
          paragraphs: [
            l(
              'Ventilation relies upon rhythmical alterations in intrathoracic volume executed by coordinated costovertebral joint articulations. Ribs 1 through 6 rotate primarily around a transverse anatomical axis traversing the neck of the rib; upward rotation elevates the sternal body and manubrium antero-superiorly, increasing the anteroposterior (AP) diameter of the thorax in a motion termed "pump-handle" mechanics. This expansion is powered predominantly by the external intercostal muscles and scalene muscles.',
              'ফুসফুসের শ্বাসক্রিয়া পাঁজরের অস্থিসন্ধিসমূহের ছন্দোময় ঘূর্ণন গতির ওপর নির্ভর করে। ১ম থেকে ৬ষ্ঠ পাঁজর মূলত তাদের ঘাড় বরাবর আনুভূমিক অক্ষে ঘোরে; এর ফলে পাঁজরগুলো ওপরে উঠলে স্টার্নাম সামনের দিকে উঁচু হয়ে ওঠে যা বক্ষের সম্মুখ-পশ্চাৎ ব্যাস উল্লেখযোগ্যভাবে বৃদ্ধি করে; এই নড়াচড়াকে "পাম্প-হ্যান্ডেল" মেকানিক্স বলা হয় এবং এটি মূলত এক্সটারনাল ইন্টারকোস্টাল ও স্ক্যালিন পেশী দ্বারা পরিচালিত হয়।'
            ),
            l(
              'In contrast, ribs 7 through 10 articulate around an anteroposterior anatomical axis connecting the costovertebral and sternocostal joints. When these lower ribs elevate, their middle shaft swings laterally and upward, mimicking the lifting of a bucket handle and substantially expanding the lateral (transverse) diameter of the thorax. Diaphragmatic contraction simultaneously increases vertical thoracic dimensions; relaxation produces passive recoil driven by lung elastin, expelling tidal volume.',
              'অপরপক্ষে ৭ম থেকে ১০ম পাঁজর সম্মুখ-পশ্চাৎ অক্ষে ঘুরে কাজ করে। এই নিচের পাঁজরগুলো ওপরে উঠলে তাদের মাঝের বাঁকটি বাইরের দিকে ছিটকে ওঠে ঠিক যেভাবে বালতির হাতল ওপরে তুললে দুই পাশ চওড়া হয়; একে "বাকেট-হ্যান্ডেল" মেকানিক্স বলা হয় যা বক্ষের পার্শ্বীয় ব্যাস বহুগুণ বাড়িয়ে দেয়। একই সাথে ডায়াফ্রাম নিচের দিকে নেমে উল্লম্ব উচ্চতা বৃদ্ধি করে; ফলে ফুসফুসে বাতাস প্রবেশের বিশাল জায়গা তৈরি হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Mediastinal Compartmentalization and Mass Differential Diagnosis', 'মিডিয়াস্টাইনামের প্রকোষ্ঠ বিভাজন এবং টিউমারের অবস্থান নির্ণয়'),
          paragraphs: [
            l(
              'Anatomical compartmentalization of the mediastinum serves as the foundation for radiological localization and surgical management of thoracic neoplasms. The anterior mediastinum (anterior to the pericardium) is the classic site of the "4 Ts": Thymoma (or thymic carcinoma), Teratoma (and germ cell tumors), "Terrible" lymphoma, and Thyroid retrosternal goiter. Each lesion displaces normal retrosternal fat and can compress the brachiocephalic veins or trachea.',
              'মিডিয়াস্টাইনামের চার প্রকোষ্ঠের শারীরস্থান বুকের ভেতরের টিউমার সঠিকভাবে শনাক্ত করার সবচেয়ে নির্ভরযোগ্য ভিত্তি। পেরিকার্ডিয়ামের সামনে অবস্থিত অ্যান্টিরিয়র মিডিয়াস্টাইনাম হলো বিখ্যাত "৪টি T" টিউমারের আবাসস্থল: থাইমোমা (থাইমাস গ্রন্থির টিউমার), টেরাটোমা (জার্ম সেল টিউমার), টেরিবল লিম্ফোমা এবং থাইরয়েডের রিট্রোস্টার্নাল গয়টার; এগুলো বড় হয়ে শ্বাসনালি ও শিরার ওপর মারাত্মক চাপ সৃষ্টি করতে পারে।'
            ),
            l(
              'The middle mediastinum houses the heart, pericardium, ascending aorta, pulmonary trunk, and subcarinal lymph nodes; pathology here typically encompasses pericardial cysts, bronchogenic cysts, aortic aneurysms, and metastatic lymphadenopathy. The posterior mediastinum (retrocardiac and paravertebral) is predominantly populated by neurogenic tumors (schwannomas, neurofibromas arising from the sympathetic chain or intercostal nerves), esophageal duplications, and descending aortic aneurysms.',
              'মিডল মিডিয়াস্টাইনামে হৃৎপিণ্ড, পেরিকার্ডিয়াম, প্রধান ধমনী ও লিম্ফ নোড থাকে; এখানে মূলত পেরিকার্ডিয়াল সিস্ট, ব্রঙ্কোজেনিক সিস্ট, অ্যাওর্টিক অ্যানিউরিজম এবং ক্যান্সারের লিম্ফ নোড দেখা যায়। আর পেছনের পোস্টেরিয়র মিডিয়াস্টাইনাম হলো স্নায়ুজনিত টিউমারের (যেমন শোয়ানোমা বা নিউরোফাইব্রোমা যা সিমপ্যাথেটিক চেইন বা ইন্টারকোস্টাল স্নায়ু থেকে তৈরি হয়) এবং খাদ্যনালির রোগসমূহের প্রধান উৎসস্থল।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Pericardial Cavity: Sinuses and Hemodynamic Tamponade', 'পেরিকার্ডিয়াল গহ্বর: সাইনাসসমূহ এবং ট্যাম্পোনেডের হিমোডাইনামিক্স'),
          paragraphs: [
            l(
              'The heart is encased within the fibroserous pericardial sac. Embryological looping and folding of the primitive heart tube establishes two communication conduits within the serous pericardial cavity: the transverse pericardial sinus and the oblique pericardial sinus. The transverse sinus lies horizontally behind the aorta and pulmonary trunk and in front of the superior vena cava; surgical clamping across this sinus isolates arterial cardiac outflow during cardiopulmonary bypass.',
              'হৃৎপিণ্ডটি ফাইব্রোসেরাস পেরিকার্ডিয়াল থলির ভেতর সুরক্ষিত থাকে। ভ্রূণাবস্থায় হার্ট টিউব বাঁকা হওয়ার কারণে পেরিকার্ডিয়াল গহ্বরের ভেতর দুটি বিশেষ সুরঙ্গ বা সাইনাস তৈরি হয়: ট্রান্সভার্স পেরিকার্ডিয়াল সাইনাস এবং অবলিক পেরিকার্ডিয়াল সাইনাস। ট্রান্সভার্স সাইনাসটি মহাধমনী ও ফুসফুসীয় ধমনীর পেছনে এবং সুপিরিয়র ভেনাকাভার সামনে থাকে; বাইপাস সার্জারির সময় এই সাইনাসের ভেতর দিয়ে ক্ল্যাম্প ঢুকিয়ে উভয় প্রধান ধমনীকে আটকে রাখা হয়।'
            ),
            l(
              'The oblique sinus is a blind recess posterior to the left atrium, bounded by the reflections of the inferior vena cava and four pulmonary veins. Under pathological conditions, the non-compliant outer fibrous pericardium severely limits acute volume expansion: rapid accumulation of as little as 150 to 200 mL of fluid (e.g., hemopericardium from aortic dissection or myocardial rupture) acutely spikes intrapericardial pressure, impeding diastolic filling of the low-pressure right heart and provoking fatal obstructive shock.',
              'অবলিক সাইনাসটি হলো বাম অলিন্দের পেছনে চারটি পালমোনারি শিরা ও ইনফিরিয়র ভেনাকাভার মাঝখানে অবস্থিত একটি অন্ধ পকেট। বাইরের শক্ত ফাইব্রাস পেরিকার্ডিয়াম স্থিতিস্থাপক না হওয়ায় হঠাৎ মাত্র ১৫০ থেকে ২০০ মিলিলিটার রক্ত বা তরল জমলেই থলির ভেতরের চাপ অস্বাভাবিক বেড়ে যায়; এর ফলে ডান অলিন্দে রক্ত আসতে পারে না এবং সারা শরীরে রক্ত সরবরাহ বন্ধ হয়ে তাৎক্ষণিক অবস্ট্রাক্টিভ শক ও মৃত্যু ঘটতে পারে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Azygos Venous System and Caval Anastomoses', 'অ্যাজাইগোস শিরা ব্যবস্থা এবং ক্যাভাল সমান্তরাল সংযোগ'),
          paragraphs: [
            l(
              'The azygos venous system constitutes an extensive paravertebral collateral network draining the thoracic and abdominal walls and serving as a vital portocaval and cavocaval bypass conduit. The azygos vein arises at the level of T12 from the union of the right ascending lumbar vein and right subcostal vein, ascending through the posterior mediastinum along the right anterolateral aspect of the thoracic vertebrae before arching anteriorly over the root of the right lung at T4 to drain into the superior vena cava.',
              'অ্যাজাইগোস শিরা ব্যবস্থা হলো মেরুদণ্ডের দুই পাশে অবস্থিত একটি বিশাল রক্ত সংবহন জালিকা যা বক্ষ ও পেটের দেয়াল থেকে রক্ত সংগ্রহ করে এবং সুপিরিয়র ও ইনফিরিয়র ভেনাকাভার মধ্যে বিকল্প সংযোগ রক্ষা করে। ডান পাশের সাবকোস্টাল ও অ্যাসেন্ডিং লাম্বার শিরার মিলনে তৈরি হওয়া অ্যাজাইগোস শিরাটি T12 থেকে উঠে বক্ষ কশেরুকার পাশ দিয়ে চলে এবং T4 বরাবর ডান ফুসফুসের মূলের ওপর দিয়ে আর্চ করে সুপিরিয়র ভেনাকাভায় প্রবেশ করে।'
            ),
            l(
              'On the left side, venous drainage is handled by the inferior hemiazygos vein (draining lower left intercostal veins, crossing the midline at T9) and the superior accessory hemiazygos vein (draining middle left intercostal veins, crossing at T8 to join the azygos). If the superior vena cava or inferior vena cava becomes occluded (e.g., by tumor thrombus or retroperitoneal fibrosis), the valve-free azygos system can reverse its flow, channeling blood retrogradely around the obstruction into the patent vena cava.',
              'বাম পাশের রক্ত নিষ্কাশন করে নিচের হেমিঅ্যাজাইগোস শিরা (যা T9 কশেরুকা বরাবর ডান দিকে পার হয়ে অ্যাজাইগোসে মেশে) এবং ওপরের এক্সেসরি হেমিঅ্যাজাইগোস শিরা (যা T8 বরাবর পার হয়ে অ্যাজাইগোসে মেশে)। যদি কোনো টিউমারের কারণে সুপিরিয়র বা ইনফিরিয়র ভেনাকাভা পুরোপুরি বন্ধ হয়ে যায়, তবে ভালভহীন এই অ্যাজাইগোস শিরা উল্টো দিকে রক্ত প্রবাহিত করে বিকল্প পথে রক্ত হৃৎপিণ্ডে পৌঁছে দিয়ে রোগীকে বাঁচিয়ে রাখে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Pathophysiology of Tension Pneumothorax and Decompression', 'টেনশন নিউমোথোরাক্সের রোগতত্ত্ব এবং জরুরি বাতাস নিষ্কাশন'),
          paragraphs: [
            l(
              'Tension pneumothorax arises when a laceration of the visceral pleura or chest wall functions as a one-way "flutter valve," allowing atmospheric air to enter the pleural space during inspiration while preventing egress during expiration. Progressive accumulation of intrapleural air drives positive intrapleural pressure, collapsing the ipsilateral lung and driving mediastinal shift away from the affected side, which kinks the superior and inferior vena cavae.',
              'টেনশন নিউমোথোরাক্স ঘটে যখন ফুসফুসের পর্দা বা বুকের প্রাচীর এমনভাবে ছিঁড়ে যায় যা একটি একমুখী ভালভের মতো কাজ করে—শ্বাস নেওয়ার সময় বাতাস ভেতরে ঢোকে কিন্তু শ্বাস ছাড়ার সময় বের হতে পারে না। এর ফলে প্লুরাল গহ্বরে বাতাসের চাপ ক্রমেই বাড়তে থাকে, ফুসফুস চুপসে যায় এবং পুরো মিডিয়াস্টাইনাম ও হৃৎপিণ্ড উল্টো দিকে ঠেলে সরে যায়, যার ফলে সুপিরিয়র ও ইনফিরিয়র ভেনাকাভা মোচড় খেয়ে বন্ধ হয়ে যায়।'
            ),
            l(
              'Kinking of the great veins precipitously abolishes venous return to the right atrium, provoking severe obstructive shock, profound hypotension, tracheal deviation, and pulseless electrical activity (PEA). Treatment requires immediate needle decompression without awaiting radiographic confirmation: a large-bore cannula (14-gauge) is introduced in the 2nd intercostal space at the midclavicular line (or 4th/5th space at the anterior axillary line), instantly converting a life-threatening tension pneumothorax into an open pneumothorax.',
              'প্রধান শিরাগুলো মোচড় খেলে হৃৎপিণ্ডে রক্ত ফেরত আসা সম্পূর্ণ বন্ধ হয়ে যায়; ফলে রক্তচাপ শূন্যে নেমে আসে, শ্বাসনালি একদিকে বেঁকে যায় এবং নাড়ি বন্ধ হয়ে রোগী কয়েক মিনিটে মারা যেতে পারে। এই অবস্থায় এক্স-রে করার অপেক্ষা না করে অবিলম্বে ২য় ইন্টারকোস্টাল স্পেসের মিডক্ল্যাভিকুলার লাইনে একটি মোটা সুঁই (১৪ গেজ) ফুটিয়ে ভেতরের প্রচণ্ড বাতাস বের করে দিতে হয়, যা তৎক্ষণাৎ রোগীর জীবন রক্ষা করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Functional and Clinical Thoracic Anatomy', 'উচ্চতর সংশ্লেষ: কার্যকরী ও ক্লিনিক্যাল বক্ষ শারীরস্থান'),
          paragraphs: [
            l(
              'The regional anatomy of the thorax exemplifies structural specialization serving continuous vital physiological processes: the osteocartilaginous cage coordinates multidimensional expansion for ventilation, the compartmentalized mediastinum segregates high-pressure and low-pressure vascular pathways, and pleural-pericardial serous envelopes eliminate mechanical friction.',
              'বক্ষপিঞ্জরের আঞ্চলিক শারীরস্থান মানুষের নিরবচ্ছিন্ন জীবনধারণের প্রক্রিয়াগুলোকে নিখুঁতভাবে পরিচালনা করার এক অনন্য নিদর্শন: পাঁজরের বিশেষ খাঁচা শ্বাস নেওয়ার জন্য বহুমাত্রিক প্রসারণ ঘটায়, মিডিয়াস্টাইনামের প্রকোষ্ঠগুলো উচ্চচাপ ও নিম্নচাপের রক্তনালীকে সুশৃঙ্খলভাবে আলাদা রাখে এবং সেরাস পর্দাগুলো হৃৎপিণ্ড ও ফুসফুসের অবিরাম নড়াচড়াকে ঘর্ষণমুক্ত রাখে।'
            ),
            l(
              'In clinical medicine, emergency interventions—including pericardiocentesis, thoracostomy, needle decompression, and surgical approaches to mediastinal masses—demand absolute mastery of landmarks such as the sternal angle of Louis, costal grooves, and peritoneal-pericardial reflections to prevent fatal iatrogenic vascular and visceral injuries.',
              'চিকিৎসাবিজ্ঞানে পেরিকার্ডিওসেন্টেসিস, চেস্ট ড্রেন স্থাপন, টেনশন নিউমোথোরাক্সের ডিকম্প্রেশন কিংবা মিডিয়াস্টাইনাল টিউমারের অস্ত্রোপচার সফলভাবে পরিচালনা করার জন্য লুইসের স্টার্নাল অ্যাঙ্গেল, পাঁজরের নিচের খাঁজ এবং পেরিকার্ডিয়াল প্রতিফলনের সঠিক অবস্থান জানা অপরিহার্য যাতে কোনো অবস্থাতেই জীবনঘাতী জখম না ঘটে।'
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
          heading: l('Subxiphoid Anatomy and the Larrey Pericardial Window', 'সাবজিফয়েড শারীরস্থান এবং ল্যারি পেরিকার্ডিয়াল উইন্ডো'),
          paragraphs: [
            l(
              'Emergency pericardiocentesis via the subxiphoid Larrey approach relies upon traversing an avascular anatomical corridor between the xiphoid process and the left costal cartilage margin. The needle penetrates the skin at a 45-degree angle directed toward the left mid-clavicular region, traversing the subcutaneous tissue, the anterior rectus sheath, the rectus abdominis muscle, the transversalis fascia, and the retroxiphoid areolar space before piercing the fibrous pericardium.',
              'সাবজিফয়েড ল্যারি পদ্ধতিতে পেরিকার্ডিয়ামে সুঁই প্রবেশের ক্ষেত্রে জিফয়েড প্রসেস এবং বাম পাঁজরের তরুণাস্থির মধ্যবর্তী রক্তনালীহীন করিডোর ব্যবহার করা হয়। সুঁইটি ৪৫ ডিগ্রি কোণে বাম কাঁধ বা কলারবোনের দিকে মুখ করে ঢোকানো হয় যা ত্বক, রেকটাস অ্যাবডোমিনিস পেশীর পর্দা এবং ট্রান্সভার্সালিস ফাসিয়া ভেদ করে পেরিকার্ডিয়ামের তন্তুময় প্রাচীরে পৌঁছায়।'
            ),
            l(
              'This precise trajectory remains extrapleural and extramuscular, keeping the needle well inferior to the internal thoracic (mammary) vessels (which bifurcate at the 6th costal cartilage into the superior epigastric and musculophrenic arteries) while avoiding injury to the left anterior descending (LAD) coronary artery and diaphragmatic dome. Immediate aspiration of as little as 30 to 50 mL of non-clotting pericardial fluid dramatically lowers intrapericardial pressure, restoring right ventricular stroke volume.',
              'এই সঠিক গতিপথটি ফুসফুসের প্লুরা এবং ইন্টারনাল থোরাসিক ধমনীর (যা ৬ষ্ঠ পাঁজরে সুপিরিয়র এপিগ্যাস্ট্রিক ও মাস্কুলোফ্রেনিক ধমনীতে ভাগ হয়) থেকে দূরে অবস্থান করে; ফলে ফুসফুস বা করোনারি ধমনী জখম না করে নিরাপদ থাকা যায়। মাত্র ৩০ থেকে ৫০ মিলিলিটার জমে থাকা রক্ত বা তরল টেনে বের করলেই হৃৎপিণ্ডের ওপর থেকে মারাত্মক চাপ নেমে যায় এবং রক্তচাপ তৎক্ষণাৎ স্বাভাবিক হতে শুরু করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Thoracic Outlet Syndrome and Neurovascular Entrapment', 'থোরাসিক আউটলেট সিন্ড্রোম এবং রক্তনালী-স্নায়ু সংকোচন'),
          paragraphs: [
            l(
              'The thoracic outlet encompasses three anatomically confined spaces traversing from the base of the neck into the axilla: the interscalene triangle, the costoclavicular space, and the subpectoral (retropectoralis minor) tunnel. The interscalene triangle is bounded anteriorly by the anterior scalene muscle, posteriorly by the middle scalene muscle, and inferiorly by the superior surface of the 1st rib, through which pass the brachial plexus trunks and the subclavian artery, while the subclavian vein passes anterior to the anterior scalene.',
              'থোরাসিক আউটলেট হলো ঘাড়ের গোড়া থেকে বগল পর্যন্ত বিস্তৃত তিনটি সংকীর্ণ শারীরস্থানিক স্থান: ইন্টারস্ক্যালিন ট্রায়াঙ্গল, কস্টোক্ল্যাভিকুলার স্থান এবং সাবপেক্টোরাল টানেল। ইন্টারস্ক্যালিন ট্রায়াঙ্গলটি সামনে অ্যান্টিরিয়র স্ক্যালিন পেশী, পেছনে মিডল স্ক্যালিন পেশী এবং নিচে ১ম পাঁজরের ওপরের পৃষ্ঠ দিয়ে গঠিত; এর ভেতর দিয়ে ব্র্যাকিয়াল প্লেক্সাসের স্নায়ু ও সাবক্ল্যাভিয়ান ধমনী যায়, তবে সাবক্ল্যাভিয়ান শিরাটি অ্যান্টিরিয়র স্ক্যালিনের সামনে দিয়ে অতিক্রম করে।'
            ),
            l(
              'Compression of these structures produces Thoracic Outlet Syndrome (TOS), classified into neurogenic TOS (>90% of cases, from compression of the lower trunk of the brachial plexus, C8–T1, causing hand intrinsic muscle atrophy and ulnar sensory loss), venous TOS (Paget-Schroetter syndrome, subclavian vein thrombosis), or arterial TOS (subclavian artery compression producing distal digital ischemia). Common anatomical culprits include a congenital cervical rib, anomalous fibrous bands, or anterior scalene hypertrophy.',
              'এই পথটিতে চাপ লাগলে থোরাসিক আউটলেট সিন্ড্রোম (TOS) দেখা দেয়: স্নায়ুজনিত টিওএস (৯০% ক্ষেত্রে, যেখানে C8 ও T1 স্নায়ুমূল চেপে হাতের তালুর পেশী শুকিয়ে যায় ও অনুভূতি চলে যায়), শিরাজনিত টিওএস (সাবক্ল্যাভিয়ান শিরায় রক্তজমাট বাঁধা) এবং ধমনীজনিত টিওএস (ধমনী চেপে আঙ্গুলে রক্তস্বল্পতা হওয়া)। জন্মগত অতিরিক্ত সারভাইকাল পাঁজর বা স্ক্যালিন পেশী অস্বাভাবিক মোটা হয়ে যাওয়া এই জটিলতার প্রধান কারণ।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-part schematic of the human thorax: the thoracic cage and subcostal neurovascular bundle, the four mediastinal compartments, pleural recesses, and the pericardial sac.',
      'মানব বক্ষপিঞ্জরের ৪টি স্তর: বক্ষ খাঁচা ও পাঁজরের রক্তনালী গুচ্ছ, মিডিয়াস্টাইনামের চার প্রকোষ্ঠ, প্লুরাল রিসেস এবং পেরিকার্ডিয়াল থলি।'
    ),
    steps: [
      l(
        '1. The thoracic wall organizes intercostal muscles and shelters the vein-artery-nerve (VAN) bundle beneath each rib.',
        '১. বক্ষপ্রাচীর ইন্টারকোস্টাল পেশী ধারণ করে এবং প্রতিটি পাঁজরের নিচের খাঁজে শিরা, ধমনী ও স্নায়ু (VAN) সুরক্ষিত রাখে।'
      ),
      l(
        '2. The sternal angle plane at T4/T5 demarcates the superior mediastinum from the anterior, middle, and posterior compartments.',
        '২. T4/T5 কশেরুকা বরাবর লুইসের সমতল সুপিরিয়র মিডিয়াস্টাইনামকে অন্যান্য প্রকোষ্ঠ থেকে বিভক্ত করে।'
      ),
      l(
        '3. Pleural recesses provide anatomical fluid reservoirs, with the costodiaphragmatic recess collecting gravitational effusions.',
        '৩. প্লুরাল রিসেস অতিরিক্ত তরল জমার স্থান তৈরি করে যেখানে কস্টোডায়াফ্রাগমেটিক রিসেসে সবচেয়ে বেশি পানি জমে।'
      ),
      l(
        '4. The pericardium envelopes the heart, forming transverse and oblique sinuses and buffering cardiac filling pressures.',
        '৪. পেরিকার্ডিয়াম হৃৎপিণ্ডকে আবৃত করে ট্রান্সভার্স ও অবলিক সাইনাস তৈরি করে রক্তপ্রবাহ নিয়ন্ত্রণে সাহায্য করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A physician is preparing to perform a thoracentesis to aspirate a symptomatic pleural effusion in a seated patient. To completely avoid injuring the main intercostal neurovascular bundle supplying the chosen intercostal space, the needle must be inserted in which specific anatomical relationship to the ribs?',
      'বসে থাকা একজন রোগীর ফুসফুসে জমে থাকা পানি বের করতে চিকিৎসক থোরাসেন্টেসিস করতে যাচ্ছেন। নির্বাচিত ইন্টারকোস্টাল স্পেসের প্রধান রক্তনালী ও স্নায়ুগুচ্ছ যাতে কোনোভাবেই ক্ষতিগ্রস্ত না হয়, সেজন্য পাঁজরের সাপেক্ষে সুঁইটি ঠিক কোন স্থানে প্রবেশ করাতে হবে?'
    ),
    options: [
      l('Directly over the superior border of the lower rib bounding the space', 'নির্বাচিত স্পেসের নিচের পাঁজরের ঠিক ওপরের কিনারা ঘেঁষে'),
      l('Immediately along the inferior border of the upper rib within the costal groove', 'ওপরের পাঁজরের নিচের কিনারায় কোস্টাল খাঁজ বরাবর'),
      l('Equidistant at the precise midpoint of the intercostal space between both ribs', 'উভয় পাঁজরের ঠিক মাঝখানের দূরত্বে'),
      l('Behind the costal angle directly adjacent to the thoracic sympathetic chain', 'কোস্টাল অ্যাঙ্গেলের পেছনে সিমপ্যাথেটিক চেইনের ঠিক পাশে'),
    ],
    correctIndex: 0,
    explanation: l(
      'Within every intercostal space, the primary intercostal neurovascular bundle—arranged from superior to inferior as Vein, Artery, Nerve (VAN)—runs sheltered within the subcostal groove along the inferior internal margin of the upper rib. Inserting a thoracentesis needle immediately over the superior border of the lower rib takes advantage of the safe avascular plane above the small collateral branches, completely sparing the main intercostal artery and avoiding catastrophic hemothorax.',
      'প্রতিটি ইন্টারকোস্টাল স্পেসের ওপরের পাঁজরের নিচের খাঁজে শিরা, ধমনী ও স্নায়ু (VAN) সুরক্ষিত থাকে। তাই থোরাসেন্টেসিসের সুঁই সর্বদা নিচের পাঁজরের ওপরের কিনারা ঘেঁষে প্রবেশ করাতে হয়; এই নিয়মে ওপরের প্রধান রক্তনালীগুলো সম্পূর্ণ সুরক্ষিত থাকে এবং বুকে রক্তক্ষরণ হওয়ার মারাত্মক ঝুঁকি এড়ানো যায়।'
    ),
  },
}
