import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch19',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 19: The Cardiovascular System - The Heart',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-introduction',
  },
  {
    id: 'openstax-ap2e-ch20',
    authors: 'J. G. Betts et al.',
    title: 'Anatomy and Physiology 2e, Chapter 20: The Cardiovascular System - Blood Vessels and Circulation',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-introduction',
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
  {
    id: 'grays-anatomy-42e',
    authors: 'S. Standring',
    title: "Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd edition",
    organization: 'Elsevier',
    year: 2020,
    url: 'https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0',
  },
]

export const chapter10CardiovascularLesson: LessonTopic = {
  id: 'topic.anatomy.cardiovascular',
  slug: 'cardiovascular',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('10 · Cardiovascular Anatomy', '১০ · হৃদ্‌-রক্তনালীর অ্যানাটমি'),
  summary: l(
    'A detailed anatomical and physiological study of the human cardiovascular system: pericardial architecture, four cardiac chambers, atrioventricular and semilunar valves, coronary circulation, intrinsic electrical conduction, great vessels, and clinical cardiology.',
    'মানবদেহের কার্ডিওভাসকুলার তন্ত্রের বিশদ শারীরস্থানিক ও শারীরবৃত্তীয় অধ্যয়ন: পেরিকার্ডিয়ামের গঠন, চারটি প্রকোষ্ঠ, কপাটিকাসমূহ, করোনারি রক্তসঞ্চালন, নিজস্ব বিদ্যুৎ পরিবাহী ব্যবস্থা, প্রধান রক্তনালী এবং ক্লিনিক্যাল হৃদরোগবিজ্ঞান।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Describe the boundaries of the pericardial sac and trace the internal flow of blood through the four cardiac chambers, valves, and systemic and pulmonary circuits.',
      'পেরিকার্ডিয়াল থলির সীমানা বর্ণনা করতে পারা এবং চারটি প্রকোষ্ঠ, কপাটিকা এবং ফুসফুসীয় ও সমগ্রদেহের রক্তসংবহন চক্রের মধ্য দিয়ে রক্তের অভ্যন্তরীণ প্রবাহ ট্রেস করতে পারা।'
    ),
    l(
      'Map the coronary arterial anatomy (RCA and LCA branches), coronary venous drainage into the coronary sinus, and the intrinsic nodal conduction pathway (SA node, AV node, bundle of His, Purkinje network).',
      'করোনারি ধমনীর শাখা-প্রশাখা, করোনারি সাইনাসে শিরাস্থ রক্তের নিষ্কাশন এবং নিজস্ব বিদ্যুৎ পরিবাহী পথ (SA নোড, AV নোড, বান্ডিল অব হিস ও পারকিঞ্জি তন্তু) সঠিকভাবে চিহ্নিত করতে পারা।'
    ),
    l(
      'Correlate clinical cardiovascular pathologies, including coronary artery occlusion territories (myocardial infarction), acute cardiac tamponade (Beck triad), and valvular stenosis/regurgitation.',
      'করোনারি ধমনী বন্ধ হয়ে হার্ট অ্যাটাক (মায়োকার্ডিয়াল ইনফার্কশন), তীব্র কার্ডিয়াক ট্যাম্পোনেড (বেকস ট্রায়াড) এবং কপাটিকার অস্বাভাবিক সংকোচন বা লিকের মতো ক্লিনিক্যাল রোগসমূহ নিখুঁতভাবে সমন্বয় করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.introduction'],
  relatedTopicIds: ['topic.anatomy.cells-tissues'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch19', 'moore-anatomy-9e'],
    structure: ['openstax-ap2e-ch19', 'grays-anatomy-42e'],
    mechanism: ['guyton-hall-14e', 'openstax-ap2e-ch19'],
    integration: ['openstax-ap2e-ch20', 'guyton-hall-14e'],
    practice: ['moore-anatomy-9e', 'guyton-hall-14e'],
    takeaways: ['openstax-ap2e-ch19', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Heart Orientation and Pericardial Sac', 'ভূমিকা: হৃৎপিণ্ডের অবস্থান ও পেরিকার্ডিয়াল থলি'), sectionId: 'introduction' },
      { id: 'sec-chambers', label: l('Cardiac Chambers, Valves and Fibrous Skeleton', 'হৃৎপ্রকোষ্ঠ, কপাটিকাসমূহ ও ফাইব্রাস কঙ্কাল'), sectionId: 'structure' },
      { id: 'sec-coronary', label: l('Coronary Circulation and Nodal Conduction System', 'করোনারি রক্তসঞ্চালন ও বিদ্যুৎ পরিবাহী ব্যবস্থা'), sectionId: 'mechanism' },
      { id: 'sec-vessels', label: l('Great Vessels and Systemic Vascular Architecture', 'প্রধান রক্তনালী ও সামগ্রিক রক্তসংবহন ব্যবস্থা'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Cardiology: Infarction, Tamponade and Valvular Disease', 'ক্লিনিক্যাল হৃদরোগ: হার্ট অ্যাটাক, ট্যাম্পোনেড ও ভাল্ভের রোগ'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary and Cardiovascular Anatomy Glossary', 'সারসংক্ষেপ ও কার্ডিওভাসকুলার শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Left Anterior Descending (LAD) Artery & The "Widow Maker"', 'বাম সম্মুখ ইন্টারভার্টিব্রাল ধমনী (LAD) ও "উইডো মেকার"'),
        definition: l(
          'The clinical designation for the anterior interventricular branch of the left coronary artery, which supplies 45%–55% of the left ventricle; acute thrombotic occlusion precipitates catastrophic anteroseptal myocardial infarction.',
          'বাম করোনারি ধমনীর প্রধান সম্মুখ শাখা যা বাম নিলয়ের প্রায় অর্ধেক অংশে রক্ত দেয়; এটি হঠাৎ ব্লক হয়ে গেলে প্রাণঘাতী হার্ট অ্যাটাক ঘটে বলে একে চিকিৎসাবিজ্ঞানে উইডো মেকার বলা হয়।'
        ),
      },
      {
        term: l('Cardiac Tamponade & Beck Triad', 'কার্ডিয়াক ট্যাম্পোনেড ও বেকস ট্রায়াড'),
        definition: l(
          'A life-threatening hemodynamic compression of the heart caused by acute fluid accumulation in the rigid pericardial sac, presenting with the classic triad: hypotension, jugular venous distension (JVD), and muffled heart sounds.',
          'অনমনীয় পেরিকার্ডিয়াল থলির ভেতর হঠাৎ তরল বা রক্ত জমে হৃৎপিণ্ডের রক্ত পাম্প করার ক্ষমতা বন্ধ হয়ে যাওয়া, যার প্রধান তিনটি লক্ষণ হলো: নিম্ন রক্তচাপ, ঘাড়ের শিরার স্ফীতি এবং স্তিমিত মৃদু হৃৎস্পন্দন।'
        ),
      },
      {
        term: l('Koch Triangle & Atrioventricular (AV) Node', 'কখের ত্রিভুজ ও অ্যাট্রিওভেন্ট্রিকুলার (AV) নোড'),
        definition: l(
          'An anatomical landmark in the right atrium bounded by the tendon of Todaro, the tricuspid valve septal leaflet, and the coronary sinus orifice, housing the compact AV node.',
          'ডান অলিন্দের ভেতরের একটি ত্রিকোণাকার অঞ্চল যার সীমানায় টোডারোর টেন্ডন, ট্রাইকাসপিড কপাটিকা ও করোনারি সাইনাস অবস্থিত; এর ঠিক ভেতরেই অত্যন্ত গুরুত্বপূর্ণ AV নোড অবস্থান করে।'
        ),
      },
      {
        term: l('Septomarginal Trabecula (Moderator Band)', 'মডারেটর ব্যান্ড (Septomarginal Trabecula)'),
        definition: l(
          'A prominent muscular band crossing the lumen of the right ventricle from the interventricular septum to the anterior papillary muscle, transmitting the right bundle branch of the conduction system for coordinated contraction.',
          'ডান নিলয়ের গহ্বরের মধ্য দিয়ে বিস্তৃত একটি স্পষ্ট পেশী বন্ধনী যা ইন্টারভেন্ট্রিকুলার সেপ্টাম থেকে সম্মুখ প্যাপিলারি পেশী পর্যন্ত পরিবাহী স্নায়ু পৌঁছে দিয়ে নিলয়ের সুষম সংকোচন নিশ্চিত করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Determining Coronary Dominance and Arterial Myocardial Territories', 'করোনারি আধিপত্য ও হৃৎপেশীর রক্তসরবরাহের অঞ্চল নির্ধারণ'),
        steps: [
          l('Step 1: Identify the posterior descending artery (PDA, posterior interventricular artery), which runs in the posterior interventricular sulcus to supply the inferior third of the septum and inferior ventricular walls.', 'ধাপ ১: পোস্টেরিয়র ডিসেন্ডিং ধমনী (PDA) শনাক্ত করুন, যা হৃৎপিণ্ডের পেছনের খাঁজ দিয়ে নেমে এসে নিলয়ের পেছনের প্রাচীরে রক্ত সরবরাহ করে।'),
          l('Step 2: Trace the arterial origin of the PDA. In roughly 85% of individuals (Right-Dominant circulation), the PDA arises as a continuation of the right coronary artery (RCA).', 'ধাপ ২: এই PDA ধমনীটি কোন মূল ধমনী থেকে এসেছে তা দেখুন। প্রায় ৮৫ শতাংশ মানুষের ক্ষেত্রে এটি ডান করোনারি ধমনী (RCA) থেকে উৎপন্ন হয় (রাইট-ডমিন্যান্ট সংবহন)।'),
          l('Step 3: In approximately 8% of individuals (Left-Dominant), the PDA arises from the left circumflex artery (LCx). In 7% (Co-Dominant), branches from both RCA and LCx meet to supply the posterior septum.', 'ধাপ ৩: প্রায় ৮ শতাংশ ক্ষেত্রে এটি বাম সারকামফ্লেক্স ধমনী (LCx) থেকে আসে (লেফট-ডমিন্যান্ট), এবং ৭ শতাংশ ক্ষেত্রে উভয় ধমনী মিলেই পেছনের সেপ্টামে রক্ত সরবরাহ প্রদান করে।'),
        ],
        conclusion: l('Coronary dominance dictates which artery supplies the posterior third of the interventricular septum and AV nodal artery, determining whether an inferior wall myocardial infarction is secondary to RCA or LCx thrombosis.', 'করোনারি আধিপত্য নির্ধারণ করে পেছনের সেপ্টাম ও AV নোডে কোন ধমনী রক্ত দিচ্ছে; এর মাধ্যমেই বোঝা যায় পেছনের হার্ট অ্যাটাকটি ডান করোনারি ধমনী নাকি বাম ধমনীর ব্লকের কারণে ঘটেছে।'),
      },
    ],
    checkpoints: [
      {
        question: l('Why does the left ventricular myocardium have roughly three times the thickness of the right ventricular wall?', 'বাম নিলয়ের পেশীর দেওয়াল ডান নিলয়ের দেওয়ালের চেয়ে প্রায় তিনগুণ বেশি পুরু কেন?'),
        answer: l('Because the left ventricle must pump blood against high systemic vascular resistance (mean arterial pressure ~93 mmHg) to supply the entire body, whereas the right ventricle pumps against low pulmonary vascular resistance (mean pulmonary arterial pressure ~15 mmHg) to the nearby lungs.', 'কারণ বাম নিলয়কে উচ্চ রক্তচাপের (গড়ে ৯৩ মিমি পারদ) বিরুদ্ধে সমস্ত শরীরে রক্ত পৌঁছে দিতে বিপুল শক্তি প্রয়োগ করতে হয়, পক্ষান্তরে ডান নিলয়কে কেবল পাশের ফুসফুসে অত্যন্ত নিম্ন চাপে (গড়ে ১৫ মিমি পারদ) রক্ত পাঠাতে হয়।'),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch10-cardiovascular-diagram',
    title: l('Interactive Cardiovascular & Cardiac Chamber Anatomy', 'ইন্টারেক্টিভ কার্ডিওভাসকুলার ও হৃৎপ্রকোষ্ঠের শারীরস্থান'),
    description: l(
      'Inspect the four primary anatomical systems of the human heart: pericardial sac and surface topography, internal cardiac chambers and valves, coronary arterial-venous network, and the great vessels.',
      'মানবদেহের হৃৎপিণ্ডের চারটি প্রধান শারীরস্থানিক ব্যবস্থা পরীক্ষা করুন: পেরিকার্ডিয়াল থলি ও পৃষ্ঠের গঠন, ভেতরের প্রকোষ্ঠ ও কপাটিকাসমূহ, করোনারি রক্তনালী ব্যবস্থা এবং প্রধান রক্তনালীসমূহ।'
    ),
    disclaimer: l(
      'Cardiovascular anatomical schematic: select any sector to inspect its internal microanatomy, hemodynamics, vascular branching, and clinical failure points.',
      'কার্ডিওভাসকুলার চিত্র: যেকোনো অংশ নির্বাচন করে এর অভ্যন্তরীণ অণুগঠন, রক্তপ্রবাহের গতিবিদ্যা, ধমনীর শাখা এবং ক্লিনিক্যাল রোগসমূহ পরীক্ষা করুন।'
    ),
    svgType: 'cardiovascular-system',
    items: [
      {
        id: 'pericardium-surface',
        label: l('Pericardium & External Topography', 'পেরিকার্ডিয়াম ও বাহ্যিক গঠন'),
        description: l(
          'Conical fibroserous sac enclosing the heart in the middle mediastinum. Outer unyielding fibrous pericardium anchors to the central tendon of the diaphragm; inner serous pericardium has parietal and visceral layers.',
          'মিডল মিডিয়াস্টাইনামে হৃৎপিণ্ডকে আবৃত রাখা দ্বিস্তরযুক্ত থলি। বাইরের শক্ত ফাইব্রাস স্তরটি ডায়াফ্রামের সাথে যুক্ত এবং ভেতরের পিচ্ছিল সিরাস স্তরটি ঘর্ষণহীন স্পন্দন নিশ্চিত করে।'
        ),
        details: l(
          'Pericardial cavity contains 15–50 mL of serous fluid. Transverse and oblique pericardial sinuses form surgical keyholes behind the great arteries and pulmonary veins.',
          'পেরিকার্ডিয়াল গহ্বরে ১৫-৫০ মিলি তরল থাকে। প্রধান ধমনীর পেছনে ট্রান্সভার্স ও অবলিক সাইনাস হৃদযন্ত্রের অস্ত্রোপচারের জন্য অত্যন্ত গুরুত্বপূর্ণ প্রবেশদ্বার।'
        ),
        sectionId: 'structure',
        color: '#fecaca',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'chambers-valves',
        label: l('Cardiac Chambers & Atrioventricular Valves', 'হৃৎপ্রকোষ্ঠ ও কপাটিকাসমূহ'),
        description: l(
          'Four muscular chambers: low-pressure right atrium and ventricle driving pulmonary circuit; high-pressure left atrium and massive left ventricle powering systemic arterial flow.',
          'চারটি পেশীবহুল প্রকোষ্ঠ: ডান অলিন্দ ও নিলয় ফুসফুসে রক্ত পাঠায়; বাম অলিন্দ ও তিনগুণ পুরু বাম নিলয় উচ্চচাপে সমগ্রদেহের রক্তসংবহন পরিচালনা করে।'
        ),
        details: l(
          'Tricuspid and Mitral (bicuspid) valves tethered by chordae tendineae to papillary muscles to prevent systolic prolapse. Aortic and pulmonary semilunar valves prevent diastolic backflow.',
          'ট্রাইকাসপিড ও মাইট্রাল কপাটিকা প্যাপিলারি পেশী দিয়ে আটকানো থাকে যাতে রক্ত পেছনে না যায়। অ্যাওর্টিক ও পালমোনারি কপাটিকা ডায়াস্টোলের সময় রক্তপ্রবাহ ধরে রাখে।'
        ),
        sectionId: 'structure',
        color: '#bae6fd',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'coronary-conduction',
        label: l('Coronary Vessels & Nodal Conduction', 'করোনারি রক্তনালী ও বিদ্যুৎ পরিবাহী ব্যবস্থা'),
        description: l(
          'Coronary arteries arise from aortic sinuses. RCA supplies right heart, inferior wall, and SA/AV nodes. LCA branches into LAD and Circumflex. Conduction initiated at SA node (pacemaker).',
          'অ্যাওর্টা থেকে উৎপন্ন ডান ও বাম করোনারি ধমনী হৃৎপেশীতে রক্ত জোগায়। এসএ নোড (পেসমেকার) বিদ্যুৎ সংকেত তৈরি করে যা এভি নোড ও পারকিঞ্জি তন্তু হয়ে নিলয়ে ছড়ায়।'
        ),
        details: l(
          'LAD supplies anterior septum and LV apex ("widow maker"). SA node fires at 60–100 bpm; AV node introduces a critical 0.1-second delay allowing ventricular filling.',
          'LAD ধমনী বন্ধ হলে সবচেয়ে মারাত্মক হার্ট অ্যাটাক হয়। এসএ নোড প্রতি মিনিটে ৬০-১০০টি সংকেত দেয়; এভি নোড সামান্য বিলম্ব ঘটিয়ে নিলয়কে রক্তে পূর্ণ হতে সময় দেয়।'
        ),
        sectionId: 'mechanism',
        color: '#fef08a',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'great-vessels',
        label: l('Great Vessels & Systemic Conduits', 'প্রধান রক্তনালী ও সামগ্রিক সংবহন'),
        description: l(
          'Ascending aorta arches into brachiocephalic trunk, left common carotid, and left subclavian artery before descending. Superior and inferior venae cavae return venous blood to the right atrium.',
          'মহাধমনী বা অ্যাওর্টা বুক থেকে উঠে তিনটি প্রধান ধমনী তৈরি করে মস্তিষ্ক ও হাতে রক্ত পাঠায়। সুপিরিয়র ও ইনফিরিয়র ভেনাকাভা সমগ্রদেহ থেকে অবিশুদ্ধ রক্ত ডান অলিন্দে ফিরিয়ে আনে।'
        ),
        details: l(
          'Pulmonary trunk divides into left and right pulmonary arteries carrying deoxygenated blood to the lungs; four pulmonary veins return oxygenated blood to the left atrium.',
          'পালমোনারি ধমনী ফুসফুসে অশোধিত রক্ত নিয়ে যায় এবং চারটি পালমোনারি শিরা শোধিত অক্সিজেনযুক্ত রক্ত বাম অলিন্দে ফেরত নিয়ে আসে।'
        ),
        sectionId: 'integration',
        color: '#bbf7d0',
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
          heading: l('Introduction to Cardiovascular Anatomy and the Cardiac Pump', 'কার্ডিওভাসকুলার অ্যানাটমির পরিচিতি ও হৃদযন্ত্রের পাম্প'),
          paragraphs: [
            l(
              'The human cardiovascular system is a closed dual-circuit transport network powered by a four-chambered muscular myogenic pump: the heart. Beating approximately 100,000 times each day and pumping over 7,000 liters of blood through thousands of miles of vascular conduits, the heart delivers vital oxygen, glucose, amino acids, and hormones to all living tissues while removing metabolic end-products including carbon dioxide and lactic acid.',
              'মানবদেহের কার্ডিওভাসকুলার ব্যবস্থা একটি দ্বি-চক্রীয় পরিবহন নেটওয়ার্ক যার কেন্দ্রস্থলে রয়েছে চার প্রকোষ্ঠবিশিষ্ট পেশীবহুল পাম্প: হৃৎপিণ্ড। এটি প্রতিদিন প্রায় ১ লক্ষ বার স্পন্দিত হয়ে ৭ হাজার লিটারের বেশি রক্ত সমগ্রদেহের রক্তনালীতে প্রবাহিত করে; যা প্রতিটি কোষে অক্সিজেন, গ্লুকোজ ও হরমোন পৌঁছে দেয় এবং কার্বন ডাই-অক্সাইডসহ বিপাকীয় বর্জ্য পদার্থ অপসারণ করে।'
            ),
            l(
              'The heart sits obliquely within the middle mediastinum of the thoracic cavity, posterior to the sternal body and costal cartilages 2 through 6, and immediately superior to the central tendon of the diaphragm. Approximately two-thirds of the cardiac mass lies to the left of the anatomical midsternal line, with its pointed apex directed anteroinferiorly toward the fifth left intercostal space along the midclavicular line.',
              'হৃৎপিণ্ডটি বক্ষগহ্বরের মিডল মিডিয়াস্টাইনামে স্টার্নাম ও ২-৬ নং পাঁজরের পেছনে এবং ডায়াফ্রামের ঠিক ওপরে তীর্যকভাবে অবস্থান করে। এর প্রায় দুই-তৃতীয়াংশ অংশ শরীরের মধ্যরেখার বাম দিকে থাকে এবং এর নিচের সূঁচালো শীর্ষভাগ (Apex) বাম দিকের পঞ্চম পাঁজরের মধ্যবর্তী স্থানে স্পষ্টভাবে অনুভূত হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Pericardium, Cardiac Chambers and Atrioventricular Valves', 'পেরিকার্ডিয়াম, হৃৎপ্রকোষ্ঠ এবং কপাটিকাসমূহ'),
          paragraphs: [
            l(
              'The heart is enclosed by the fibroserous pericardial sac, which consists of an outer tough, unyielding fibrous pericardium and an inner delicate serous pericardium. The serous pericardium has two continuous layers: the parietal layer lining the inner fibrous wall, and the visceral layer (the epicardium) tightly adherent to the outer surface of the heart muscle. The microscopic pericardial cavity contains 15 to 50 mL of lubricating serous fluid that eliminates frictional resistance during cardiac contraction.',
              'হৃৎপিণ্ডটি পেরিকার্ডিয়াল থলি দ্বারা আবৃত থাকে যার বাইরের শক্ত ফাইব্রাস স্তর হৃৎপিণ্ডকে অতিরিক্ত ফুলে যাওয়া থেকে রক্ষা করে এবং ভেতরের সিরাস স্তরটি পিচ্ছিল তরল নিঃসরণ করে। সিরাস স্তরের প্যারাইটাল ও ভিসেরাল স্তরের মধ্যবর্তী ফাঁকা স্থানে ১৫ থেকে ৫০ মিলিমিটার তরল থাকে, যা প্রতি স্পন্দনে হৃৎপেশীর ঘর্ষণহীন অবাধ নড়াচড়া নিশ্চিত করে।'
            ),
            l(
              'Internally, the heart contains four distinct chambers: the right and left atria (superior receiving chambers) and the right and left ventricles (inferior muscular discharging chambers). The right atrium receives deoxygenated systemic venous blood via the superior and inferior venae cavae, pumping it across the tricuspid valve into the right ventricle, which ejects it into the pulmonary circuit. Oxygenated pulmonary venous blood enters the left atrium via four pulmonary veins, passes across the bicuspid (mitral) valve into the thick-walled left ventricle, and is propelled under high pressure across the aortic semilunar valve into the systemic aorta.',
              'হৃৎপিণ্ডের ভেতরে চারটি প্রকোষ্ঠ রয়েছে: ওপরের দুটি অলিন্দ (রক্ত গ্রহণকারী) এবং নিচের দুটি নিলয় (রক্ত পাম্পকারী)। ডান অলিন্দ সারা শরীর থেকে অবিশুদ্ধ রক্ত গ্রহণ করে ট্রাইকাসপিড কপাটিকা দিয়ে ডান নিলয়ে পাঠায়, যা রক্তকে ফুসফুসে নিক্ষেপ করে। ফুসফুস থেকে শোধিত রক্ত চারটি শিরার মাধ্যমে বাম অলিন্দে আসে, মাইট্রাল কপাটিকা দিয়ে পুরু বাম নিলয়ে প্রবেশ করে এবং মহাধমনীর (Aorta) মাধ্যমে সারা শরীরে ছড়িয়ে পড়ে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Coronary Circulation and the Intrinsic Conduction System', 'করোনারি রক্তসঞ্চালন ও নিজস্ব বিদ্যুৎ পরিবাহী ব্যবস্থা'),
          paragraphs: [
            l(
              'Although blood continuously courses through the cardiac chambers, the thick myocardium is too metabolically active and dense to obtain nourishment from lumen diffusion. The heart is nourished exclusively by the coronary arteries, which arise directly from the right and left aortic sinuses at the base of the ascending aorta. The left coronary artery bifurcates into the circumflex artery and the left anterior descending (LAD) artery, while the right coronary artery (RCA) gives off marginal branches and the posterior descending artery (PDA).',
              'প্রকোষ্ঠের মধ্য দিয়ে বিপুল রক্ত প্রবাহিত হলেও হৃৎপেশী সরাসরি সেই রক্ত থেকে পুষ্টি নিতে পারে না; এর নিজস্ব পুষ্টির জন্য দুটি বিশেষায়িত করোনারি ধমনী রয়েছে। মহাধমনীর গোড়া থেকে ডান ও বাম করোনারি ধমনী উৎপন্ন হয়। বাম ধমনীটি সারকামফ্লেক্স এবং সবচেয়ে গুরুত্বপূর্ণ LAD ধমনীতে বিভক্ত হয়, অন্যদিকে ডান ধমনীটি হৃৎপিণ্ডের ডান ও পেছনের অংশে রক্ত সরবরাহ করে।'
            ),
            l(
              'Cardiac contraction is initiated and synchronized by an intrinsic specialized conduction network composed of modified, non-contractile cardiomyocytes. The primary cardiac pacemaker is the sinuatrial (SA) node, situated subepicardially at the junction of the superior vena cava and the right atrium, firing rhythmic action potentials at 60 to 100 beats per minute. Electrical impulses travel through atrial internodal pathways to the atrioventricular (AV) node, where conduction is delayed by approximately 0.1 second before propagating rapidly down the bundle of His, bundle branches, and Purkinje fiber network.',
              'হৃদস্পন্দন পরিচালিত হয় নিজস্ব বিদ্যুৎ উৎপাদন ও পরিবাহী ব্যবস্থার মাধ্যমে। ডান অলিন্দের শীর্ষে অবস্থিত সাইনোঅ্যাট্রিয়াল (SA) নোড হলো প্রাকৃতিক পেসমেকার, যা প্রতি মিনিটে ৬০ থেকে ১০০টি বিদ্যুৎ সংকেত তৈরি করে। এই সংকেত অ্যাট্রিওভেন্ট্রিকুলার (AV) নোডে এসে ০.১ সেকেন্ড সামান্য বিলম্বিত হয় (যাতে অলিন্দ খালি হয়ে নিলয় রক্তে ভরতে পারে) এবং এরপর বান্ডিল অব হিস ও পারকিঞ্জি তন্তুর মাধ্যমে মুহূর্তের মধ্যে দুই নিলয়ে ছড়িয়ে পড়ে সুষম সংকোচন ঘটায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Great Vessels and Systemic Vascular Architecture', 'প্রধান রক্তনালী ও সামগ্রিক রক্তসংবহন ব্যবস্থা'),
          paragraphs: [
            l(
              'The great vessels entering and exiting the cardiac base coordinate bidirectional systemic and pulmonary transit. Arising from the right ventricle, the pulmonary trunk bifurcates into the left and right pulmonary arteries carrying deoxygenated blood to the alveolar capillary networks. Arising from the left ventricle, the ascending aorta transitions into the aortic arch, giving origin to three vital arterial trunks supplying the head, neck, and upper limbs: the brachiocephalic trunk, left common carotid artery, and left subclavian artery.',
              'হৃৎপিণ্ডের গোড়ায় যুক্ত থাকা বিশালাকার রক্তনালীগুলো শরীরের প্রধান সংবহন পরিচালনা করে। ডান নিলয় থেকে পালমোনারি ট্রাঙ্ক উৎপন্ন হয়ে ফুসফুসে রক্ত নিয়ে যায়। বাম নিলয় থেকে ওঠা মহাধমনী ধনুকের মতো বাঁক নিয়ে তিনটি প্রধান ধমনী তৈরি করে—ব্র্যাকিওসিফালিক, বাম কমন ক্যারোটিড ও বাম সাবক্ল্যাভিয়ান ধমনী—যা মস্তিষ্ক, ঘাড় ও দুই হাতে রক্ত সরবরাহ নিশ্চিত করে।'
            ),
            l(
              'Blood vessels exhibit structural specializations matching their physiological roles: large elastic arteries (such as the aorta) act as pressure reservoirs that expand during systole and recoil during diastole (the Windkessel effect) to maintain continuous downstream capillary perfusion. Muscular distributing arteries regulate regional flow via sympathetic tone, while microscopic terminal arterioles serve as the primary site of total peripheral resistance (TPR). Exchange occurs exclusively across thin endothelial capillary beds.',
              'রক্তনালীগুলো তাদের কাজের ওপর ভিত্তি করে বিশেষায়িত: বড় স্থিতিস্থাপক ধমনীগুলো (মহাধমনী) রক্ত পাম্পের সময় ফুলে ওঠে এবং ডায়াস্টোলের সময় সংকুচিত হয়ে অবিচ্ছিন্ন রক্তপ্রবাহ বজায় রাখে (উইন্ডকেসেল প্রভাব)। পেশীবহুল ধমনীগুলো বিভিন্ন অঙ্গে রক্তের পরিমাণ নিয়ন্ত্রণ করে এবং সূক্ষ্ম আর্টেরিওলগুলো রক্তচাপ ধরে রাখার প্রধান কেন্দ্র হিসেবে কাজ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Cardiology: Infarction, Tamponade and Valvular Disease', 'ক্লিনিক্যাল হৃদরোগ: হার্ট অ্যাটাক, ট্যাম্পোনেড ও ভাল্ভের রোগ'),
          paragraphs: [
            l(
              'Atherosclerotic plaque rupture and acute thrombosis in a coronary artery precipitates a myocardial infarction (MI). Occlusion of the left anterior descending (LAD) artery affects the anterior left ventricular wall and the anterior two-thirds of the interventricular septum, frequently causing cardiogenic shock or lethal arrhythmias (hence its clinical moniker, the "widow maker"). Patients present with crushing substernal chest pressure radiating to the left arm and jaw, diaphoresis, and dyspnea.',
              'করোনারি ধমনীতে চর্বির প্লাক ফেটে রক্ত জমাট বাঁধলে হার্ট অ্যাটাক (মায়োকার্ডিয়াল ইনফার্কশন) ঘটে। LAD ধমনী বন্ধ হয়ে গেলে বাম নিলয়ের সামনের প্রাচীর অকেজো হয়ে যায় যা সবচেয়ে মারাত্মক হার্ট অ্যাটাক সৃষ্টি করে (উইডো মেকার)। রোগীর বুকে প্রচণ্ড পাথর চাপা ব্যথা অনুভূত হয় যা বাম হাত ও চোয়ালে ছড়িয়ে পড়ে, সাথে অতিরিক্ত ঘাম ও শ্বাসকষ্ট দেখা দেয়।'
            ),
            l(
              'Cardiac tamponade occurs when fluid, pus, or blood rapidly accumulates within the inextensible pericardial space (often following penetrating trauma or aortic dissection), preventing diastolic ventricular filling. Physical examination reveals classic Beck triad: arterial hypotension, distended neck veins (elevated jugular venous pressure), and muffled distant heart sounds. Immediate emergency bedside pericardiocentesis with needle aspiration is mandatory to relieve intrapericardial pressure and prevent cardiac arrest.',
              'কার্ডিয়াক ট্যাম্পোনেড হলো অনমনীয় পেরিকার্ডিয়াল থলির ভেতর হঠাৎ রক্ত বা তরল জমে যাওয়া, যার ফলে নিলয় রক্ত গ্রহণ করতে পারে না। এর ক্লাসিক্যাল তিনটি লক্ষণ হলো (বেকস ট্রায়াড): মারাত্মক নিম্ন রক্তচাপ, ঘাড়ের শিরার অস্বাভাবিক স্ফীতি এবং স্টেথোস্কোপে হৃৎস্পন্দনের ক্ষীণ স্তিমিত শব্দ। রোগীকে বাঁচাতে তাৎক্ষণিকভাবে সুঁই দিয়ে থলির রক্ত টেনে বের করে চাপ মুক্ত (পেরিকার্ডিওসেন্টেসিস) করতে হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary and Cardiovascular Anatomy Glossary', 'সারসংক্ষেপ ও কার্ডিওভাসকুলার শব্দকোষ'),
          paragraphs: [
            l(
              'Cardiovascular anatomy unites mechanical plumbing with automated bioelectrical pacemaking. The dual-pump structural architecture of the heart ensures simultaneous oxygenation of deoxygenated blood in the low-pressure pulmonary circuit and high-pressure propulsion of oxygenated blood throughout the systemic arterial tree. Precision knowledge of pericardial boundaries, coronary anatomy, and valve mechanics forms the vital bedrock for clinical cardiology and cardiothoracic surgery.',
              'কার্ডিওভাসকুলার অ্যানাটমি হলো মেকানিক্যাল পাম্পিং এবং স্বয়ংক্রিয় জৈব-বৈদ্যুতিক সংকেতের এক অপূর্ব মিলনমেলা। হৃৎপিণ্ডের দ্বৈত-পাম্প ব্যবস্থা ফুসফুসে কম চাপে রক্ত পাঠানো এবং একই সাথে সমগ্রদেহে উচ্চচাপে রক্ত ছড়ানোর কাজ নিখুঁতভাবে সম্পন্ন করে। পেরিকার্ডিয়ামের গঠন, করোনারি ধমনীর গতিপথ এবং কপাটিকার মেকানিক্স জানা ক্লিনিক্যাল হৃদরোগবিজ্ঞান ও কার্ডিয়াক সার্জারির মৌলিক স্তম্ভ।'
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
          heading: l('Cardiac Embryogenesis, Heart Tube Looping and Septation', 'হৃদযন্ত্রের ভ্রূণীয় বিকাশ, লুপিং ও প্রকোষ্ঠ গঠন'),
          paragraphs: [
            l(
              'The cardiovascular system is the first organ system to achieve functional maturity in the developing embryo, beginning coordinated rhythmic contractions by day 22. Originating from cardiogenic mesoderm in the splanchnic layer, bilateral endothelial heart fields coalesce into a single primitive heart tube. The tube organizes longitudinally into five dilatations: truncus arteriosus, bulbus cordis, primitive ventricle, primitive atrium, and sinus venosus.',
              'ভ্রূণের বিকাশে কার্ডিওভাসকুলার সিস্টেমই প্রথম কার্যকর অঙ্গ হিসেবে ২২তম দিনেই ছন্দবদ্ধ স্পন্দন শুরু করে। মেসোডার্ম থেকে উৎপন্ন দুটি নল একত্রিত হয়ে একটি আদিম হার্ট টিউব গঠন করে যা পাঁচটি প্রধান অংশে বিভক্ত থাকে: ট্রাঙ্কাস আর্টেরিওসাস, বাল্বাস কর্ডিস, প্রিমিটিভ ভেন্ট্রিকল, অ্যাট্রিয়াম এবং সাইনাস ভেনোসাস।'
            ),
            l(
              'During the fourth embryonic week, rapid differential elongation forces the tube to loop to the right (dextral looping), placing the presumptive ventricles anteriorly and moving the presumptive atria posterosuperiorly. Septation of the common atrium involves coordinated formation of the septum primum and rigid septum secundum, leaving an oblique valvular aperture—the foramen ovale—that permits right-to-left shunting of oxygenated maternal blood prior to birth.',
              'চতুর্থ সপ্তাহে টিউবটি দ্রুত বৃদ্ধি পেয়ে ডান দিকে মোচড় খেয়ে বেঁকে যায় (ডেক্সট্রাল লুপিং), যার ফলে নিলয় সামনে আসে এবং অলিন্দ ওপরে ও পেছনে চলে যায়। অলিন্দ দুটির মাঝে সেপ্টাম প্রিমাম ও সেপ্টাম সেকানডাম গঠিত হয় এবং এদের মাঝে ফোরামেন ওভালি নামক ছিদ্রপথ থাকে, যা জন্মের পূর্বে গর্ভস্থ শিশুর মায়ের রক্তকে ফুসফুস এড়িয়ে সরাসরি ডান থেকে বাম অলিন্দে প্রবাহিত হতে সাহায্য করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Microarchitecture of the Cardiac Fibrous Skeleton and Valve Mechanics', 'হৃৎপিণ্ডের ফাইব্রাস কঙ্কাল ও কপাটিকার অণুগঠন'),
          paragraphs: [
            l(
              'The cardiac fibrous skeleton consists of four dense collagenous rings (annuli fibrosi) encircling the valvular orifices, interconnected by the right and left fibrous trigones and the membranous interventricular septum. This tough fibrocartilage-like framework serves two fundamental functions: it provides rigid mechanical anchorage for the cusps of the four heart valves and the origins of myocardial muscle bundles, and it serves as a complete electrical insulator separating the atria from the ventricles.',
              'হৃৎপিণ্ডের ফাইব্রাস কঙ্কাল হলো চারটি কপাটিকার গোড়ায় অবস্থিত ঘন কোলাজেনের শক্ত বলয় যা ট্রাইগোন দ্বারা পরস্পরের সাথে যুক্ত। এটি দুটি গুরুত্বপূর্ণ কাজ করে: এটি চারটি কপাটিকা ও মাংসপেশীকে শক্তভাবে নোঙর করে ধরে রাখে, এবং অলিন্দ ও নিলয়ের মাঝে একটি বিদ্যুৎ-অপরিবাহী পর্দা হিসেবে কাজ করে যাতে সংকেত অনিয়ন্ত্রিতভাবে নিলয়ে ঢুকতে না পারে।'
            ),
            l(
              'Because of this electrical insulation, action potentials can cross from atria to ventricles exclusively through the atrioventricular (AV) bundle of His penetrating the central fibrous body. Histologically, cardiac valve cusps are tridominant structures composed of the fibrosa (dense collagen providing tensile load support), the spongiosa (hydrated proteoglycan-rich core absorbing shock), and the ventricularis (elastic fibers providing recoil).',
              'এই ইনসুলেশনের কারণেই অলিন্দ থেকে নিলয়ে বিদ্যুৎ সংকেত প্রবেশের একমাত্র পথ হলো সেন্ট্রাল ফাইব্রাস বডি ভেদ করে যাওয়া AV বান্ডিল অব হিস। কপাটিকাগুলোর ভেতরে কোলাজেন, পানিভরা স্পঞ্জিওসা স্তর এবং ইলাস্টিক তন্তু থাকে যা সিস্টোলের সময় রক্ত আটকাতে টানটান হয় এবং বন্ধ হওয়ার অভিঘাত নিখুঁতভাবে শোষণ করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Coronary Microvascular Resistance and Autoregulation Dynamics', 'করোনারি রক্তপ্রবাহের প্রতিরোধ ও নিজস্ব নিয়ন্ত্রণ গতিবিদ্যা'),
          paragraphs: [
            l(
              'Left ventricular myocardial perfusion occurs almost exclusively during diastole. During ventricular systole, powerful myocardial compression generates intramyocardial pressures exceeding 120 mmHg, compressing intramural coronary capillaries and reversing blood flow in the subendocardium. Consequently, systemic diastolic blood pressure and diastolic filling time (inversely proportional to heart rate) are the primary determinants of left ventricular myocardial oxygen delivery.',
              'বাম নিলয়ের পেশীতে রক্ত চলাচল প্রায় সম্পূর্ণভাবে ডায়াস্টোলের (হৃদপিণ্ড শিথিল থাকার সময়) ওপর নির্ভর করে। সিস্টোলে নিলয়ের ভেতরের চাপ ১২০ মিমি পারদ ছাড়িয়ে যাওয়ায় রক্তনালীগুলো সজোরে চেপে বন্ধ হয়ে যায়। তাই ডায়াস্টোলিক রক্তচাপ এবং ডায়াস্টোলের স্থিতিকালই হৃৎপেশীতে অক্সিজেন সরবরাহের প্রধান নিয়ামক হিসেবে কাজ করে।'
            ),
            l(
              'Coronary blood flow is governed by potent metabolic autoregulation. Increased myocardial work and oxygen consumption stimulate local production of adenosine (from ATP hydrolysis), nitric oxide (NO) from endothelial shear stress, and opening of vascular smooth muscle K-ATP channels. These local vasoactive factors override sympathetic alpha-adrenergic vasoconstriction, dilating coronary arterioles to escalate coronary blood flow up to 4 to 5 times above baseline resting values (coronary flow reserve).',
              'করোনারি রক্তপ্রবাহ অত্যন্ত শক্তিশালী মেটাবলিক অটোরেগুলেশন দ্বারা নিয়ন্ত্রিত। হৃৎপিণ্ডের কাজ বেড়ে গেলে কোষ থেকে অ্যাডিনোসিন ও নাইট্রিক অক্সাইড নিঃসৃত হয়ে রক্তনালীকে কয়েকগুণ প্রশস্ত করে দেয়, যার ফলে বিশ্রামের তুলনায় ব্যায়ামের সময় করোনারি রক্তপ্রবাহ ৪ থেকে ৫ গুণ পর্যন্ত বৃদ্ধি পেতে পারে (করোনারি ফ্লো রিজার্ভ)।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Baroreceptor Reflex Circuits and Central Hemodynamic Coupling', 'ব্যারোরিসেপ্টর রিফ্লেক্স সার্কিট ও কেন্দ্রীয় সংবহন সমন্বয়'),
          paragraphs: [
            l(
              'Systemic arterial blood pressure is monitored continuously by high-pressure stretch baroreceptors located within the carotid sinus (innervated by the glossopharyngeal nerve, CN IX) and the aortic arch (innervated by the vagus nerve, CN X). An acute rise in mean arterial pressure stretches the vascular wall, increasing afferent firing rates to the nucleus tractus solitarius (NTS) in the medulla oblongata.',
              'ক্যারোটিড সাইনাস ও মহাধমনীর আর্চে অবস্থিত বিশেষায়িত ব্যারোরিসেপ্টর স্নায়ু রক্তের চাপ প্রতিনিয়ত পরিমাপ করে। রক্তচাপ সামান্য বৃদ্ধি পেলেই নালীর দেওয়াল প্রসারিত হয় এবং স্নায়ুর মাধ্যমে মস্তিষ্কের মেডুলায় অবস্থিত নিউক্লিয়াস ট্র্যাকটাস সলিটারিয়াসে (NTS) সংকেতের গতি বৃদ্ধি পায়।'
            ),
            l(
              'In response, the NTS excites the caudal ventrolateral medulla (CVLM), which inhibits the rostral ventrolateral medulla (RVLM) sympathetic outflow while simultaneously activating the vagal nucleus ambiguus. The resulting withdrawal of sympathetic tone and surge in parasympathetic cholinergic stimulation slows SA nodal heart rate (negative chronotropy) and reduces peripheral vascular resistance, buffering blood pressure back toward the homeostatic set-point within seconds.',
              'মস্তিষ্ক তাৎক্ষণিকভাবে সহানুভূতিশীল বা সিম্প্যাথেটিক সংকেত কমিয়ে দিয়ে প্যারাসিম্প্যাথেটিক ভেগাস স্নায়ুর প্রবাহ বাড়িয়ে দেয়। এর ফলে হার্ট রেট কমে যায় এবং পেরিফেরাল রক্তনালীগুলো শিথিল হয়ে রক্তচাপ মুহূর্তের মধ্যে স্বাভাবিক মাত্রায় নেমে আসে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Cardiovascular Traumatology: Aortic Dissection and Acute Valvular Failure', 'কার্ডিওভাসকুলার ট্রমাটোলজি: অ্যাওর্টিক ডিসেকশন ও একিউট ভাল্ভ ফেইলিওর'),
          paragraphs: [
            l(
              'Acute aortic dissection is a catastrophic vascular emergency initiated by an intimal tear in the ascending aorta (Stanford Type A) or descending thoracic aorta (Stanford Type B). High-pressure pulsatile blood dissects longitudinally into the tunica media, propagating a false lumen that can shear off coronary origins, rupture into the pericardial sac to cause fatal cardiac tamponade, or compress spinal and mesenteric vessels.',
              'অ্যাওর্টিক ডিসেকশন হলো একটি অত্যন্ত প্রাণঘাতী ভাস্কুলার জরুরি অবস্থা যেখানে মহাধমনীর ভেতরের পর্দা ছিঁড়ে গিয়ে উচ্চচাপের রক্ত দেওয়ালের মাঝের স্তরে ঢুকে একটি কৃত্রিম নালী তৈরি করে। এই রক্ত দ্রুত ছড়িয়ে পড়ে করোনারি ধমনীর মুখ বন্ধ করে দিতে পারে অথবা পেরিকার্ডিয়াল থলিতে ফেটে গিয়ে তাৎক্ষণিক কার্ডিয়াক ট্যাম্পোনেড ও মৃত্যু ঘটাতে পারে।'
            ),
            l(
              'Patients present with excruciating, "tearing" or "ripping" chest pain radiating to the interscapular back, accompanied by asymmetric blood pressures (>20 mmHg differential between arms) and a newly developed diastolic murmur of aortic valve insufficiency. Urgent diagnosis requires intravenous contrast-enhanced CT angiography (CTA); Stanford Type A dissections mandate emergency open ascending aortic graft replacement under hypothermic circulatory arrest.',
              'রোগীরা পিঠের দিকে ছড়িয়ে পড়া অসহ্য "ছিঁড়ে যাওয়ার মতো" তীব্র বুকে ব্যথা এবং দুই বাহুর রক্তচাপে উল্লেখযোগ্য পার্থক্য (২০ মিমি পারদের বেশি) নিয়ে উপস্থিত হন। জরুরি সিটি এনজিওগ্রামের মাধ্যমে এটি শনাক্ত করা হয় এবং টাইপ-এ ডিসেকশনে জীবন বাঁচাতে অবিলম্বে ওপেন হার্ট সার্জারির মাধ্যমে কৃত্রিম গ্রাফ্ট প্রতিস্থাপন আবশ্যক।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Academic Principles of Cardiovascular Biology', 'কার্ডিওভাসকুলার জীববিজ্ঞানের মূল একাডেমিক নীতি'),
          paragraphs: [
            l(
              'The cardiovascular system functions as a tightly coupled electro-mechanical and fluid transport machine. Cellular excitation at the SA node drives coordinated mechanical chamber contraction across an electrically insulated fibrous skeleton, while pressure gradients across specialized tri-laminar valves dictate unidirectional systemic flow. Structural disruptions—whether ischemic coronary thrombosis, dissecting medial degeneration, or pericardial effusion—demand rapid anatomical localization and hemodynamically guided intervention.',
              'কার্ডিওভাসকুলার ব্যবস্থাটি একটি তড়িৎ-যান্ত্রিক এবং তরল পরিবহনের সমন্বিত ইঞ্জিন। এসএ নোডের তড়িৎ সংকেত ফাইব্রাস কঙ্কালের ইনসুলেশনের মধ্য দিয়ে নিলয়কে সংকুচিত করে এবং ভাল্ভের সাহায্যে রক্তকে সুনির্দিষ্ট একমুখী পথে চালিত করে। করোনারি রক্তনালীর ব্লক থেকে শুরু করে মহাধমনীর ডিসেকশন পর্যন্ত যেকোনো আঘাতের চিকিৎসায় এই নিখুঁত শারীরস্থানিক জ্ঞানই জীবন রক্ষার মূল চাবিকাঠি।'
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
          heading: l('Transcatheter Aortic Valve Implantation (TAVI) and 4D Flow MRI Hemodynamics', 'TAVI ও ফোর-ডি ফ্লো এমআরআই হেমোডায়নামিক্স গবেষণা'),
          paragraphs: [
            l(
              'Transcatheter Aortic Valve Implantation (TAVI / TAVR) has revolutionized the treatment of severe symptomatic calcific aortic stenosis in elderly and high-risk patients. Rather than open-heart sternotomy and cardiopulmonary bypass, a balloon-expandable or self-expanding bovine pericardial bioprosthetic valve mounted within a nitinol stent frame is guided transfemorally under fluoroscopic and transesophageal echocardiographic guidance into the native aortic annulus.',
              'ট্রান্সক্যাথেটার অ্যাওর্টিক ভাল্ভ প্রতিস্থাপন (TAVI) বুক না কেটে কুঁচকির ধমনী দিয়ে ক্যাথেটার ঢুকিয়ে কৃত্রিম ভাল্ভ প্রতিস্থাপনের এক বৈপ্লবিক পদ্ধতি। নিটিনল ধাতুর তৈরি ফ্রেমের ভেতর বিশেষায়িত জৈব ভাল্ভ বসিয়ে এক্স-রে ও আল্ট্রাসাউন্ডের নির্দেশনায় পুরাতন ক্যালসিফাইড ভাল্ভের স্থানে নতুন ভাল্ভটি নিখুঁতভাবে বসিয়ে দেওয়া হয়।'
            ),
            l(
              'Advanced 4D Flow Magnetic Resonance Imaging (MRI) is providing time-resolved, three-dimensional velocity field mapping across the aortic root and thoracic aorta post-implantation. By measuring helical and vortical flow patterns, turbulent kinetic energy (TKE) dissipation, and regional wall shear stress (WSS), clinicians can detect paravalvular regurgitation, evaluate bicuspid aortic valve aortopathy risk, and predict neo-sinus thrombus formation before clinical symptoms emerge.',
              'আধুনিক ফোর-ডি ফ্লো এমআরআই প্রযুক্তির সাহায্যে ভাল্ভ প্রতিস্থাপনের পর রক্তের ঘূর্ণন গতি, শক্তির অপচয় এবং মহাধমনীর দেওয়ালের ওপর চাপের ত্রিমাত্রিক মানচিত্র তৈরি করা হচ্ছে। এর ফলে কৃত্রিম ভাল্ভের পাশ দিয়ে কোনো রক্ত লিক হচ্ছে কি না বা ভবিষ্যতে রক্ত জমাট বাঁধার কোনো ঝুঁকি আছে কি না তা লক্ষণ প্রকাশের বহু আগেই নির্ভুলভাবে নির্ণয় করা সম্ভব হচ্ছে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Induced Pluripotent Stem Cell (iPSC) Cardiomyocyte Regeneration', 'স্টেম সেল থেকে হৃৎপেশী পুনরুজ্জীবন গবেষণা'),
          paragraphs: [
            l(
              'Adult mammalian cardiomyocytes possess an intrinsic mitotic turnover of less than 1% per year, precluding meaningful endogenous myocardial regeneration following massive ischemic infarction. Groundbreaking regenerative medicine paradigms utilize human induced pluripotent stem cells (hiPSCs) differentiated into ventricular-like cardiomyocytes (hiPSC-CMs) via temporal modulation of Wnt/beta-catenin signaling.',
              'প্রাপ্তবয়স্ক মানুষের হৃদপেশীর কোষ নিজে থেকে বিভাজিত হতে পারে না বললেই চলে; ফলে হার্ট অ্যাটাকে পেশী মারা গেলে তা স্থায়ী ক্ষতে পরিণত হয়। আধুনিক স্টেম সেল গবেষণায় মানুষের দেহকোষ থেকে প্রাপ্ত প্লুরিপোটেন্ট স্টেম সেলকে বিশেষ সংকেতের মাধ্যমে তাজা জীবন্ত হৃদপেশী কোষে রূপান্তরিত করা হচ্ছে।'
            ),
            l(
              'Engineered cardiac tissue patches (ECTs) formulated with hiPSC-CMs, vascular endothelial cells, and bioresorbable extracellular matrix hydrogels are being grafted directly onto epicardial infarct scars. Preclinical non-human primate studies demonstrate electromechanical host-graft coupling via de novo connexin-43 gap junctions, marked reduction in left ventricular remodeling, and sustained recovery of left ventricular ejection fraction, heralding a future where heart failure can be biologically cured.',
              'এই স্টেম সেল থেকে তৈরি জীবন্ত হৃদপেশীর প্যাচ সরাসরি হার্ট অ্যাটাকে ক্ষতিগ্রস্ত অঞ্চলে বসিয়ে দেওয়া হচ্ছে। গবেষণায় দেখা গেছে যে এই নতুন কোষগুলো রোগীর নিজস্ব হৃৎপিণ্ডের সাথে তড়িৎ সংযোগ স্থাপন করে স্বাভাবিকভাবে স্পন্দিত হতে শুরু করে এবং হৃদযন্ত্রের পাম্প করার ক্ষমতা পুনরায় আগের মতো স্বাভাবিক করে তোলে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-step pathway tracing cardiovascular system anatomy: pericardial envelope protection, four-chambered dual-circuit pumping, coronary nutrient supply, and great vessel systemic distribution.',
      'কার্ডিওভাসকুলার তন্ত্রের শারীরস্থানের ৪টি সহজলভ্য ধাপ: পেরিকার্ডিয়াল থলির সুরক্ষা, চার প্রকোষ্ঠের দ্বৈত-পাম্প সংবহন, করোনারি রক্তনালীর পুষ্টি এবং প্রধান রক্তনালী দিয়ে সমগ্রদেহে বিতরণ।'
    ),
    steps: [
      l(
        '1. The fibroserous pericardium anchors the heart in the mediastinum and eliminates frictional resistance during contraction.',
        '১. ফাইব্রোসিরাস পেরিকার্ডিয়াম হৃৎপিণ্ডকে সুরক্ষিত রাখে এবং স্পন্দনের সময় ঘর্ষণ প্রতিরোধ করে।'
      ),
      l(
        '2. Four internal muscular chambers and unidirectional fibrous valves separate pulmonary and systemic circulatory circuits.',
        '২. চারটি অভ্যন্তরীণ প্রকোষ্ঠ ও একমুখী কপাটিকা ফুসফুসীয় ও সমগ্রদেহের রক্তসংবহনকে সুষমভাবে পৃথক রাখে।'
      ),
      l(
        '3. Right and left coronary arteries nourish the working myocardium, while the SA nodal network orchestrates rhythmic depolarization.',
        '৩. ডান ও বাম করোনারি ধমনী হৃৎপেশীতে পুষ্টি দেয়, আর এসএ নোড ছন্দবদ্ধ তড়িৎ সংকেত তৈরি করে।'
      ),
      l(
        '4. The aorta and pulmonary trunk deliver pressurized blood into systemic and pulmonary vascular trees.',
        '৪. মহাধমনী ও পালমোনারি ট্রাঙ্ক উচ্চচাপে রক্তকে ফুসফুস ও সমগ্রদেহের কোটি কোটি কোষে পৌঁছে দেয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 58-year-old patient presents with acute crushing retrosternal chest pain and ST-segment elevations in leads V1 through V4 on ECG. Emergent cardiac catheterization confirms an acute thrombotic occlusion of the artery supplying this territory. Which coronary artery is occluded?',
      '৫৮ বছর বয়সী একজন রোগী বুকে তীব্র পাথর চাপা ব্যথা এবং ইসিজিতে V1 থেকে V4 লিডে অস্বাভাবিক পরিবর্তন নিয়ে আসেন। করোনারি এনজিওগ্রামে একটি ধমনীতে ব্লক ধরা পড়ে। কোন করোনারি ধমনীটি এখানে বন্ধ হয়ে গেছে?'
    ),
    options: [
      l('Left anterior descending (LAD) coronary artery', 'বাম সম্মুখ ইন্টারভেন্ট্রিকুলার (LAD) ধমনী'),
      l('Right coronary artery (RCA)', 'ডান করোনারি ধমনী (RCA)'),
      l('Left circumflex (LCx) artery', 'বাম সারকামফ্লেক্স (LCx) ধমনী'),
      l('Posterior descending artery (PDA)', 'পোস্টেরিয়র ডিসেন্ডিং ধমনী (PDA)'),
    ],
    correctIndex: 0,
    explanation: l(
      'ST-segment elevation in precordial leads V1 through V4 localizes to the anteroseptal wall of the left ventricle and the anterior two-thirds of the interventricular septum. This territory is supplied exclusively by the Left Anterior Descending (LAD) artery, commonly referred to clinically as the "widow maker."',
      'ইসিজির V1 থেকে V4 লিডে পরিবর্তন বাম নিলয়ের সম্মুখ প্রাচীর এবং ইন্টারভেন্ট্রিকুলার সেপ্টামে হার্ট অ্যাটাক নির্দেশ করে। এই অঞ্চলে কেবল বাম সম্মুখ ইন্টারভেন্ট্রিকুলার (LAD) ধমনী রক্ত সরবরাহ করে, যা বন্ধ হয়ে গেলে এই মারাত্মক অবস্থার সৃষ্টি হয়।'
    ),
  },
}
