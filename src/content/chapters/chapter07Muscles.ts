import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch10',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 10: Muscle Tissue',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/10-introduction',
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
    id: 'junqueira-histology-16e',
    authors: 'A. L. Mescher',
    title: "Junqueira's Basic Histology: Text and Atlas, 16th edition",
    organization: 'McGraw-Hill Education',
    year: 2021,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3055',
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

export const chapter07MusclesLesson: LessonTopic = {
  id: 'topic.anatomy.muscles',
  slug: 'muscles',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('07 · Skeletal Muscle Anatomy', '০৭ · কঙ্কালপেশীর অ্যানাটমি'),
  summary: l(
    'A detailed macroscopic and microscopic exploration of skeletal muscle: fascial envelopes (epimysium, perimysium, endomysium), sarcomere ultrastructure, excitation-contraction coupling, motor unit recruitment, fiber typing, and clinical myopathies.',
    'কঙ্কালপেশীর ম্যাক্রোস্কোপিক ও অণুবীক্ষণিক বিশদ অধ্যয়ন: ফাসিয়াল আবরণী (এপিমাইসিয়াম, পেরিমাইসিয়াম, এন্ডোমাইসিয়াম), সারকোমিয়ারের সূক্ষ্ম গঠন, উত্তেজনা-সংকোচন যুগলন, মোটর ইউনিট নিয়োগ, পেশীতন্তুর ধরন এবং ক্লিনিক্যাল মায়োপ্যাথি।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Differentiate the three connective tissue investments of skeletal muscle (epimysium, perimysium, endomysium) and explain how pennate vs parallel fascicle architectures dictate force vs excursion trade-offs.',
      'কঙ্কালপেশীর তিনটি সংযোজক টিস্যুর আবরণ (এপিমাইসিয়াম, পেরিমাইসিয়াম, এন্ডোমাইসিয়াম) পৃথক করতে পারা এবং পেনেট বনাম সমান্তরাল ফ্যাসিকেলের গঠন কীভাবে শক্তি বনাম প্রসারণের ভারসাম্য নির্ধারণ করে তা ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Map the molecular ultrastructure of the sarcomere (Z-discs, A/I bands, M-line, titin, actin, myosin) and trace the excitation-contraction coupling sequence through dihydropyridine and ryanodine receptors.',
      'সারকোমিয়ারের আণবিক অণুগঠন (Z-ডিস্ক, A/I ব্যান্ড, M-লাইন, টাইটিন, অ্যাক্টিন, মায়োসিন) চিহ্নিত করতে পারা এবং ডাইহাইড্রোপাইরিডিন ও রায়ানোডিন গ্রাহকের মাধ্যমে উত্তেজনা-সংকোচন যুগলন প্রক্রিয়া বিশদভাবে অনুসরণ করতে পারা।'
    ),
    l(
      'Evaluate clinical myopathologies including Duchenne muscular dystrophy, myasthenia gravis, acute exertional rhabdomyolysis, and acute fascial compartment syndrome.',
      'ডুশেন মাসকুলার ডিস্ট্রফি, মায়াস্থেনিয়া গ্র্যাভিস, অতিরিক্ত পরিশ্রমে র্যাবডোমায়োলাইসিস এবং তীব্র ফাসিয়াল কম্পার্টমেন্ট সিন্ড্রোম ক্লিনিক্যালভাবে মূল্যায়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.joints'],
  relatedTopicIds: ['topic.anatomy.cells-tissues'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch10', 'moore-anatomy-9e'],
    structure: ['openstax-ap2e-ch10', 'junqueira-histology-16e'],
    mechanism: ['guyton-hall-14e', 'openstax-ap2e-ch10'],
    integration: ['guyton-hall-14e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'guyton-hall-14e'],
    takeaways: ['openstax-ap2e-ch10', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Skeletal Muscle Organization and Fascicular Form', 'ভূমিকা: কঙ্কালপেশীর সংগঠন ও ফ্যাসিকেলের গঠন'), sectionId: 'introduction' },
      { id: 'sec-sarcomere', label: l('Sarcomere Molecular Architecture and Sliding Filaments', 'সারকোমিয়ারের আণবিক স্থাপত্য ও স্লাইডিং ফিলামেন্ট'), sectionId: 'structure' },
      { id: 'sec-excitation', label: l('Excitation-Contraction Coupling and Calcium Kinetics', 'উত্তেজনা-সংকোচন যুগলন ও ক্যালসিয়াম গতিবিদ্যা'), sectionId: 'mechanism' },
      { id: 'sec-recruitment', label: l('Motor Units, Henneman Principle and Fiber Types', 'মোটর ইউনিট, হেনম্যান নীতি ও পেশীতন্তুর ধরন'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Myopathies: Dystrophin, Myasthenia and Rhabdomyolysis', 'ক্লিনিক্যাল মায়োপ্যাথি: ডিস্ট্রোফিন, মায়াস্থেনিয়া ও র্যাবডোমায়োলাইসিস'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary and Skeletal Muscle Glossary', 'সারসংক্ষেপ ও কঙ্কালপেশী শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Dystrophin-Glycoprotein Complex (DGC)', 'ডিস্ট্রোফিন-গ্লাইকোপ্রোটিন কমপ্লেক্স'),
        definition: l(
          'A multi-protein trans-sarcolemmal complex anchored by dystrophin that mechanically links the subsarcolemmal F-actin cytoskeleton to laminin-211 in the extracellular basal lamina, protecting muscle membranes against contraction-induced tearing.',
          'সারকোলেমার মধ্য দিয়ে বিস্তৃত একটি বহু-প্রোটিন জটিল কাঠামো যা ডিস্ট্রোফিনের সাহায্যে কোষের ভেতরের অ্যাক্টিন সাইটোস্কেলেটনকে বাইরের ভিত্তিঝিল্লির সাথে যুক্ত করে পেশীর সংকোচনকালে ঝিল্লি ফেটে যাওয়া থেকে রক্ষা করে।'
        ),
      },
      {
        term: l('Henneman Size Principle', 'হেনম্যানের আকার নীতি (Size Principle)'),
        definition: l(
          'The neurophysiological law stating that motor units are recruited progressively from smallest (slow-twitch Type I, fatigue-resistant) to largest (fast-twitch Type IIx, high-force, fatiguable) as voluntary contractile demand increases.',
          'স্নায়ু-শারীরবৃত্তীয় নীতি যা বলে যে পেশীর শক্তি বাড়ানোর সময় প্রথমে সবচেয়ে ছোট ও ক্লান্তিহীন মোটর ইউনিট (টাইপ ১) এবং পরবর্তীতে ক্রমান্বয়ে বড় ও উচ্চ-শক্তিসম্পন্ন কিন্তু দ্রুত ক্লান্ত হওয়া মোটর ইউনিট (টাইপ ২) কার্যকর হয়।'
        ),
      },
      {
        term: l('Titin (Connectin) Molecular Spring', 'টাইটিন আণবিক স্প্রিং'),
        definition: l(
          'The largest known polypeptide in the human body (~3.8 MDa), spanning from the Z-disc to the M-line; provides passive restoring elasticity, centers the thick filaments within the sarcomere, and prevents overextension.',
          'মানবদেহের বৃহত্তম পরিচিত প্রোটিন যা সারকোমিয়ারের Z-ডিস্ক থেকে M-লাইন পর্যন্ত বিস্তৃত; এটি স্প্রিংয়ের মতো কাজ করে পেশীর নিষ্ক্রিয় স্থিতিস্থাপকতা দেয় এবং মায়োসিন ফিলামেন্টকে কেন্দ্রস্থলে নিখুঁতভাবে ধরে রাখে।'
        ),
      },
      {
        term: l('Compartment Syndrome & Fasciotomy', 'কম্পার্টমেন্ট সিন্ড্রোম ও ফ্যাসিওটমি'),
        definition: l(
          'A limb-threatening elevation of interstitial hydrostatic pressure (>30 mmHg) within an unyielding osteofascial compartment, causing capillary perfusion arrest, muscle ischemia, and necrosis requiring urgent surgical decompression.',
          'অনমনীয় পেশী আবরণের ভেতরে অতিরিক্ত চাপ বেড়ে রক্তপ্রবাহ বন্ধ হয়ে যাওয়া, যার ফলে পেশীর তীব্র রক্তশূন্যতা ও পচন ঘটে এবং অঙ্গ বাঁচাতে অবিলম্বে অস্ত্রোপচার করে আবরণী কেটে চাপ মুক্ত (ফ্যাসিওটমি) করতে হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Pennation Angle Effect on Physiological Cross-Sectional Area (PCSA)', 'পেনেশন কোণ ও পেশীর কার্যকরী প্রস্থচ্ছেদ ক্ষেত্রফল গণনা'),
        steps: [
          l('Step 1: Recognize that maximal contractile force is proportional to Physiological Cross-Sectional Area (PCSA), defined as [Muscle Mass × cos(theta)] / [Muscle Density × Fiber Length], where theta is the angle of fiber pennation.', 'ধাপ ১: জেনে নিন পেশীর সর্বোচ্চ শক্তি এর কার্যকরী ক্ষেত্রফলের (PCSA) সমানুপাতিক, যার সূত্র হলো [পেশীর ভর × cos(কোণ)] / [ঘনত্ব × তন্তুর দৈর্ঘ্য], যেখানে কোণটি হলো পেনেশন অ্যাঙ্গেল।'),
          l('Step 2: Contrast a parallel-fibered muscle (e.g. sartorius, theta = 0°, cos = 1.0) with a multipennate muscle (e.g. deltoid, theta = 20°, cos = 0.94). Parallel muscles have long fibers suited for rapid, large-distance joint excursion.', 'ধাপ ২: সমান্তরাল পেশী (যেমন সারটোরিয়াস, কোণ = ০°) এবং মাল্টিপেনেট পেশীর (যেমন ডেল্টয়েড, কোণ = ২০°) তুলনা করুন। সমান্তরাল তন্তুগুলো দীর্ঘ হওয়ায় সন্ধির দ্রুত ও দূরবর্তী চলনের জন্য উপযোগী।'),
          l('Step 3: A multipennate muscle packs vastly more short fibers into a given volume. Although each fiber pulls at a 20° cosine reduction (0.94 of its vector), the massive 3-fold increase in parallel fiber count delivers vastly greater absolute peak force.', 'ধাপ ৩: পেনেট পেশীতে একই আয়তনের মধ্যে বিপুল পরিমাণ ছোট ছোট তন্তু সাজানো থাকে। সামান্য কোণে টানলেও মোট তন্তুর সংখ্যা কয়েকগুণ বেশি হওয়ায় এটি অবিশ্বাস্যভাবে বেশি শক্তি তৈরি করতে পারে।'),
        ],
        conclusion: l('Pennation architecture sacrifices excursion distance and velocity to maximize force generation per unit muscle volume, adapting postural and weight-bearing muscles for massive force output.', 'পেনেশন স্থাপত্য চলনগতি ও দৈর্ঘ্য কমিয়ে নির্দিষ্ট আয়তনে সর্বোচ্চ শক্তি উৎপাদনের ক্ষমতা দেয়, যা দেহের ভারবাহী ও খাড়া রাখার পেশীগুলোর জন্য নিখুঁত অভিযোজন।'),
      },
    ],
    checkpoints: [
      {
        question: l('Why does rigor mortis develop within 3 to 4 hours following death and persist until postmortem proteolysis occurs?', 'মৃত্যুর ৩ থেকে ৪ ঘণ্টার মধ্যে কেন রিগর মর্টিস (মৃতদেহ শক্ত হয়ে যাওয়া) শুরু হয় এবং পচন না হওয়া পর্যন্ত তা বজায় থাকে?'),
        answer: l('Because postmortem cessation of mitochondrial respiration halts cellular ATP synthesis. While calcium leaks into the sarcoplasm to expose actin binding sites, ATP is strictly required to bind the myosin head and cause cross-bridge detachment; without ATP, myosin remains irreversibly locked to actin in a rigid rigor complex.', 'কারণ মৃত্যুর পর কোষীয় শ্বাসক্রিয়া বন্ধ হয়ে এটিপি (ATP) তৈরি পুরোপুরি থেমে যায়। সাইটোপ্লাজমে ক্যালসিয়াম বের হয়ে এলেও মায়োসিনের মাথাকে অ্যাক্টিন থেকে আলাদা করার জন্য নতুন এটিপি অণু আবশ্যক; এটিপি না থাকায় অ্যাক্টিন ও মায়োসিন চিরতরে একে অপরের সাথে শক্তভাবে আটকে থাকে।'),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch07-muscles-diagram',
    title: l('Interactive Muscle Architecture and Sarcomere Hierarchy', 'ইন্টারেক্টিভ পেশী স্থাপত্য ও সারকোমিয়ারের স্তরবিন্যাস'),
    description: l(
      'Navigate the microscopic and macroscopic hierarchy of skeletal muscle: investing fascial sheaths, muscle fibers with T-tubules, sarcomeric contractile units, and actin-myosin bridges.',
      'কঙ্কালপেশীর অণুবীক্ষণিক ও ম্যাক্রোস্কোপিক স্তরগুলো পরীক্ষা করুন: ফাসিয়াল আবরণী, টি-টিউবিউলসহ পেশীতন্তু, সারকোমিয়ার একক এবং অ্যাক্টিন-মায়োসিন ক্রস-ব্রিজ।'
    ),
    disclaimer: l(
      'Histological schematic: select any structural level to inspect its cellular packaging, molecular machinery, force-generating cycle, and pathological vulnerability.',
      'হিস্টোলজিক্যাল চিত্র: যেকোনো স্তর নির্বাচন করে এর কোষীয় বিন্যাস, আণবিক যন্ত্রপাতি, শক্তি উৎপাদন চক্র এবং রোগজনিত দুর্বলতা পরীক্ষা করুন।'
    ),
    svgType: 'muscle-sarcomere',
    items: [
      {
        id: 'epimysium-fascicle',
        label: l('Epimysium & Fascicular Bundles', 'এপিমাইসিয়াম ও ফ্যাসিকেল বান্ডিল'),
        description: l(
          'Dense irregular collagenous sleeve (epimysium) enclosing the whole muscle, branching inward as perimysium around fascicles (bundles of 10–100 muscle fibers) accompanied by neuromuscular neurovascular bundles.',
          'পুরো পেশীকে আবৃত রাখা ঘন কোলাজেনের খোলস (এপিমাইসিয়াম), যা ভেতরে ঢুকে পেরিমাইসিয়াম হিসেবে ১০-১০০টি পেশীতন্তুর ফ্যাসিকেল এবং রক্তনালী ও স্নায়ুকে সুরক্ষিত রাখে।'
        ),
        details: l(
          'Continuously coalesces into dense regular collagenous tendons or broad aponeuroses that anchor muscle to the bone periosteum, transmitting force with minimal elastic dissipation.',
          'অস্থির সাথে যুক্ত টেন্ডন বা চ্যাপ্টা অ্যাপোনিউরোসিসের সাথে অবিচ্ছিন্ন হয়ে এটি পেশীর সংকোচন বলকে সরাসরি হাড়ে স্থানান্তর করে।'
        ),
        sectionId: 'structure',
        color: '#fecaca',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'fiber-sarcolemma',
        label: l('Muscle Fiber & T-Tubule Network', 'পেশীতন্তু ও টি-টিউবিউল নেটওয়ার্ক'),
        description: l(
          'Elongated multinucleated muscle cell enclosed by the excitable sarcolemma and surrounded by the reticular endomysium. Deep invaginations of the sarcolemma (transverse T-tubules) conduct action potentials deep inside.',
          'উত্তেজনাশীল সারকোলেমা ও এন্ডোমাইসিয়াম দ্বারা আবৃত বহু-নিউক্লিয়াসযুক্ত পেশী কোষ। এর ভেতরের খাঁজ (টি-টিউবিউল) তড়িৎ সংকেতকে কোষের গভীরে দ্রুত পৌঁছে দেয়।'
        ),
        details: l(
          'Flanked on both sides by terminal cisternae of the sarcoplasmic reticulum to form the classic muscle triad, linking electrical depolarization directly to intracellular calcium release.',
          'সারকোপ্লাজমিক রেটিকুলামের প্রান্তীয় থলির সাথে মিলে ক্লাসিক ট্রায়াড গঠন করে, যা তড়িৎ সংকেতকে ক্যালসিয়াম নিঃসরণের সাথে সরাসরি সংযুক্ত করে।'
        ),
        sectionId: 'structure',
        color: '#fde68a',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'sarcomere-unit',
        label: l('Myofibril & Sarcomere Z-to-Z Unit', 'মায়োফাইব্রিল ও সারকোমিয়ার একক'),
        description: l(
          'The fundamental functional contractile unit (2.2 µm rest length) bounded between adjacent Z-discs. Contains the anisotropic A-band (thick filaments), isotropic I-band (thin filaments), central H-zone, and M-line.',
          'পাশাপাশি দুটি Z-ডিস্কের মধ্যবর্তী পেশীর মূল সংকোচন একক (বিশ্রামে ২.২ মাইক্রোমিটার)। এতে মায়োসিনের A-ব্যান্ড, অ্যাক্টিনের I-ব্যান্ড, কেন্দ্রীয় H-জোন এবং M-লাইন থাকে।'
        ),
        details: l(
          'Anchored by giant elastic titin springs. During contraction, Z-discs move closer together, I-bands and H-zones narrow and disappear, while the A-band length remains completely constant.',
          'বিশাল টাইটিন স্প্রিং দ্বারা সুরক্ষিত। সংকোচনের সময় Z-ডিস্কগুলো কাছাকাছি আসে, I-ব্যান্ড ও H-জোন সংকুচিত হয়ে যায়, কিন্তু A-ব্যান্ডের দৈর্ঘ্য অপরিবর্তিত থাকে।'
        ),
        sectionId: 'mechanism',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'crossbridge-cycle',
        label: l('Actin-Myosin Cross-Bridge Complex', 'অ্যাক্টিন-মায়োসিন ক্রস-ব্রিজ চক্র'),
        description: l(
          'Molecular engine where myosin globular heads bind exposed actin sites, hydrolyze ATP, and execute the 70-degree power stroke, generating 3–5 piconewtons of mechanical pulling force per cross-bridge.',
          'আণবিক ইঞ্জিন যেখানে মায়োসিনের মাথা উন্মুক্ত অ্যাক্টিনের সাথে যুক্ত হয়ে এটিপি ভেঙে ৭০ ডিগ্রি কোণে বাঁক নিয়ে টান দেয় এবং প্রতি ব্রিজে ৩-৫ পিকোপিকোনিউটন শক্তি তৈরি করে।'
        ),
        details: l(
          'Regulated by the troponin complex (TnT, TnI, TnC) and tropomyosin ribbon; calcium binding to TnC induces a conformational shift that rolls tropomyosin away from the myosin binding groove.',
          'ট্রপোনিন ও ট্রপোমায়োসিন দ্বারা নিয়ন্ত্রিত; ক্যালসিয়াম TnC-তে যুক্ত হলে ট্রপোমায়োসিনের ফিতা সরে গিয়ে মায়োসিনের বসার পথ উন্মুক্ত করে।'
        ),
        sectionId: 'mechanism',
        color: '#fed7aa',
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
          heading: l('Introduction to Skeletal Muscle Organization', 'কঙ্কালপেশীর পরিচিতি ও সামগ্রিক সংগঠন'),
          paragraphs: [
            l(
              'Skeletal muscle tissue makes up roughly 40% of adult body mass and serves as the primary effector system that transforms chemical energy into mechanical force. In addition to powering body locomotion and dynamic manual tasks, skeletal muscles maintain posture against gravity, stabilize joint fulcrums, support visceral organs, control bodily orifices, and generate over 85% of body heat through metabolic shivering and daily contraction.',
              'প্রাপ্তবয়স্ক মানুষের মোট দেহভরের প্রায় ৪০ শতাংশ কঙ্কালপেশী নিয়ে গঠিত এবং এটি রাসায়নিক শক্তিকে যান্ত্রিক শক্তিতে রূপান্তরিত করার প্রধান ব্যবস্থা। হাঁটাচলা ও হাতের কাজের পাশাপাশি কঙ্কালপেশী অভিকর্ষের বিরুদ্ধে দেহের ভঙ্গি সোজা রাখে, অস্থিসন্ধিগুলোকে স্থির রাখে, অভ্যন্তরীণ অঙ্গগুলোকে আশ্রয় দেয় এবং স্বাভাবিক সংকোচনের মাধ্যমে দেহের ৮৫ শতাংশের বেশি তাপ উৎপাদন করে।'
            ),
            l(
              'Skeletal muscle is organized into a nested hierarchy of connective tissue investments. The entire anatomical muscle is wrapped by the dense collagenous epimysium. Deep to this, the perimysium organizes the muscle into distinct bundles called fascicles (containing 10 to 100 fibers). Finally, each individual elongated muscle fiber is enveloped by a delicate reticular sheath known as the endomysium, which cushions capillary networks and individual motor nerve terminals.',
              'কঙ্কালপেশী একটির ভেতর আরেকটি সাজানো সংযোজক টিস্যুর নিখুঁত স্তরে বিন্যস্ত। সমগ্র পেশীটি ঘন কোলাজেনের তৈরি এপিমাইসিয়াম দ্বারা আবৃত থাকে। এর ভেতরে পেরিমাইসিয়াম নামক স্তর পেশীটিকে ফ্যাসিকেল নামের ছোট ছোট গুচ্ছে (১০ থেকে ১০০টি তন্তু) ভাগ করে। সবশেষে প্রতিটি লম্বা পেশীতন্তু এন্ডোমাইসিয়াম নামের একটি সূক্ষ্ম জালিকা দ্বারা আবৃত থাকে, যা রক্তনালী ও স্নায়ুর স্পর্শকাতর প্রান্তগুলোকে সুরক্ষিত রাখে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Fascicle Architecture and Sarcomere Ultrastructure', 'ফ্যাসিকেলের স্থাপত্য ও সারকোমিয়ারের অণুগঠন'),
          paragraphs: [
            l(
              'The spatial orientation of fascicles determines a muscle range of motion and maximal force capacity. In parallel and fusiform muscles (e.g. biceps brachii), fascicles run parallel to the long axis, allowing long-distance shortening and rapid limb velocities. In pennate muscles (unipennate, bipennate like the rectus femoris, and multipennate like the deltoid), fascicles insert obliquely into a central tendon like feathers on a quill, packing vastly more contractile fibers into a given cross-section to generate immense force.',
              'পেশীর ফ্যাসিকেলগুলোর সাজানোর কোণ এর কাজের ধরন নির্ধারণ করে। সমান্তরাল পেশীতে (যেমন বাইসেপস) ফ্যাসিকেলগুলো দৈর্ঘ্যের সমান্তরালে থাকায় এটি দ্রুত ও বেশি দূরত্বে সংকুচিত হতে পারে। পক্ষান্তরে পেনেট পেশীতে (যেমন ফিমোরাল রেক্টাস বা কাঁধের ডেল্টয়েড) পাখির পালকের মতো তন্তুগুলো তীর্যকভাবে মূল টেন্ডনে এসে যুক্ত হয়, যার ফলে অল্প জায়গায় প্রচুর তন্তু ঠাসা থাকে এবং এটি প্রচণ্ড শক্তি উৎপাদন করতে পারে।'
            ),
            l(
              'Each muscle fiber contains thousands of parallel cylindrical myofibrils divided into repeating longitudinal segments called sarcomeres (the fundamental contractile unit). A sarcomere spans from one Z-disc to the next Z-disc. It features dark anisotropic A-bands (composed of thick myosin filaments overlapping thin actin filaments) and light isotropic I-bands (composed purely of thin actin filaments bisected by the Z-disc). At the center of the A-band lies the lighter H-zone and the central M-line anchoring the myosin tails.',
              'প্রতিটি পেশীতন্তুর ভেতরে হাজার হাজার মায়োফাইব্রিল থাকে যা সারকোমিয়ার নামক ক্ষুদ্র সংকোচন এককে বিভক্ত। একটি সারকোমিয়ার একটি Z-ডিস্ক থেকে পরবর্তী Z-ডিস্ক পর্যন্ত বিস্তৃত। এতে গাঢ় A-ব্যান্ড (যেখানে মোটা মায়োসিন ও পাতলা অ্যাক্টিন একে অপরকে স্পর্শ করে থাকে) এবং হালকা I-ব্যান্ড (কেবল অ্যাক্টিন তন্তু) থাকে। A-ব্যান্ডের ঠিক কেন্দ্রে হালকা H-জোন এবং একদম মাঝখানে M-লাইন থাকে যা মায়োসিনের লেজগুলোকে শক্ত করে ধরে রাখে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Excitation-Contraction Coupling and the Cross-Bridge Cycle', 'উত্তেজনা-সংকোচন যুগলন ও ক্রস-ব্রিজ চক্র'),
          paragraphs: [
            l(
              'Skeletal muscle contraction begins at the neuromuscular junction (NMJ). A somatic motor neuron action potential triggers acetylcholine (ACh) exocytosis into the synaptic cleft. Binding of ACh to nicotinic receptors on the motor end-plate generates an end-plate potential that propagates across the sarcolemma and plunges into transverse (T) tubules deep within the fiber, triggering voltage-gated calcium channels to release vast quantities of calcium from the sarcoplasmic reticulum into the sarcoplasm.',
              'কঙ্কালপেশীর সংকোচন শুরু হয় নিউরোমাসকুলার জংশনে। স্নায়ুর তড়িৎ সংকেত সিন্যাপ্টিক ফাঁকে অ্যাসিটাইলকোলিন হরমোন নিঃসরণ করায়। এটি পেশীর গ্রাহকে যুক্ত হয়ে একটি তড়িৎ প্রবাহ সৃষ্টি করে যা টি-টিউবিউল দিয়ে পেশীর গভীরে প্রবেশ করে এবং সারকোপ্লাজমিক রেটিকুলাম থেকে মুহূর্তের মধ্যে বিপুল পরিমাণ ক্যালসিয়াম আয়ন সাইটোপ্লাজমে ছড়িয়ে দেয়।'
            ),
            l(
              'Under resting conditions, the actin binding sites are physically blocked by the filamentous tropomyosin ribbon. When released calcium binds to troponin C, a conformational shift rolls tropomyosin away from the active sites. High-energy myosin heads bind to actin, release inorganic phosphate, and execute a 70-degree mechanical power stroke that pulls the actin filament toward the M-line (the sliding filament mechanism). Fresh ATP binding is required to detach myosin and cock the head for the subsequent cycle.',
              'বিশ্রামের সময় অ্যাক্টিনের বসার খাঁজগুলো ট্রপোমায়োসিন নামক ফিতা দিয়ে ঢাকা থাকে। ক্যালসিয়াম এসে ট্রপোনিন প্রোটিনের সাথে যুক্ত হলে ট্রপোমায়োসিন সরে যায় এবং অ্যাক্টিনের খাঁজ উন্মুক্ত হয়। মায়োসিনের মাথা এতে যুক্ত হয়ে ৭০ ডিগ্রি কোণে হেলে গিয়ে অ্যাক্টিনকে M-লাইনের দিকে টেনে আনে (স্লাইডিং ফিলামেন্ট মেকানিজম)। এরপর একটি নতুন এটিপি যুক্ত হয়ে মায়োসিনের মাথাকে বিচ্ছিন্ন করে পরবর্তী টানের জন্য প্রস্তুত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Motor Units, Recruitment and Muscle Fiber Types', 'মোটর ইউনিট, নিয়োগ এবং পেশীতন্তুর শ্রেণিবিভাগ'),
          paragraphs: [
            l(
              'A motor unit consists of a single alpha somatic motor neuron and all the muscle fibers it innervates. Muscles executing fine, delicate maneuvers (such as extrinsic eye muscles or intrinsic hand muscles) possess small motor units (1 neuron innervating 5 to 10 fibers), whereas large postural and locomotor muscles (such as the gastrocnemius) possess massive motor units where a single axon branches to supply over 1,000 to 2,000 muscle fibers.',
              'একটি মোটর ইউনিট হলো একটিমাত্র মোটর স্নায়ু এবং এর দ্বারা পরিচালিত সমস্ত পেশীতন্তুর সমন্বয়। চোখের বা হাতের অত্যন্ত সূক্ষ্ম কাজের পেশীগুলোতে মোটর ইউনিট খুব ছোট হয় (১টি স্নায়ু মাত্র ৫-১০টি তন্তু চালায়), পক্ষান্তরে পায়ের কাফ বা উরুর মতো ভারী কাজের পেশীতে একটি স্নায়ু ১,০০০ থেকে ২,০০০ তন্তুকে একসাথে সংকুচিত করে বিপুল বল তৈরি করে।'
            ),
            l(
              'Human muscles comprise three major fiber phenotypes: Type I (slow-twitch oxidative, rich in myoglobin and mitochondria, fatigue-resistant, ideal for endurance and posture), Type IIa (fast-twitch oxidative-glycolytic, capable of aerobic and anaerobic energy production), and Type IIx (fast-twitch glycolytic, high glycogen, rapid fatigue, built for explosive power). In accordance with Henneman size principle, the central nervous system activates small Type I units first, recruiting larger Type II units only when greater force is demanded.',
              'মানবদেহের পেশীতে তিন ধরনের তন্তু থাকে: টাইপ ১ (ধীর গতির, প্রচুর মায়োগ্লোবিনযুক্ত, ক্লান্তিহীন, দীর্ঘক্ষণ দাঁড়িয়ে থাকা বা হাঁটার জন্য আদর্শ), টাইপ ২এ (দ্রুত গতির মিশ্র তন্তু), এবং টাইপ ২এক্স (তীব্র দ্রুত গতির, প্রচুর গ্লাইকোজেনযুক্ত, দ্রুত ক্লান্ত হয়ে যাওয়া, ভারী ওজন তোলার উপযোগী)। হেনম্যানের আকার নীতি অনুযায়ী মস্তিষ্ক প্রথমে ক্লান্তিহীন টাইপ ১ তন্তু সক্রিয় করে এবং বেশি শক্তির প্রয়োজন হলেই কেবল বড় টাইপ ২ তন্তুগুলোকে ডাকে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Myopathology: Dystrophin, Myasthenia and Rhabdomyolysis', 'ক্লিনিক্যাল মায়োপ্যাথি: ডিস্ট্রোফিন, মায়াস্থেনিয়া ও র্যাবডোমায়োলাইসিস'),
          paragraphs: [
            l(
              'Duchenne muscular dystrophy (DMD) is an X-linked recessive genetic disease caused by out-of-frame mutations in the DMD gene, eliminating the vital structural protein dystrophin. Without dystrophin to anchor the internal actin cytoskeleton to the extracellular basal lamina, eccentric muscle contractions cause sarcolemmal micro-tears, pathological calcium influx, activation of calpain proteases, and progressive myofiber necrosis with pseudohypertrophic fibrofatty replacement.',
              'ডুশেন মাসকুলার ডিস্ট্রফি হলো একটি বংশগত রোগ যেখানে ডিস্ট্রোফিন নামক গুরুত্বপূর্ণ প্রোটিন তৈরি হয় না। এই প্রোটিনের অভাবে পেশী সংকোচনের সময় কোষের ঝিল্লি ছিঁড়ে যায়, অতিরিক্ত ক্যালসিয়াম ঢুকে পেশী কোষগুলোকে মেরে ফেলে এবং ধীরে ধীরে পেশীর স্থান চর্বি দখল করে নেয়, যার ফলে শিশুরা ক্রমেই দুর্বল হয়ে অল্প বয়সেই চলাচলের ক্ষমতা হারায়।'
            ),
            l(
              'Myasthenia gravis is an autoimmune neuromuscular disorder characterized by pathogenic IgG autoantibodies directed against nicotinic acetylcholine receptors at the motor end-plate. This causes receptor cross-linking, internal degradation, and complement-mediated destruction of junctional folds, producing fluctuating skeletal muscle weakness that worsens with repetitive activity and characteristically presents with asymmetric ptosis, diplopia, and proximal limb fatigability.',
              'মায়াস্থেনিয়া গ্র্যাভিস হলো একটি অটোইমিউন রোগ যেখানে রোগীর নিজস্ব অ্যান্টিবডি নিউরোমাসকুলার জংশনের অ্যাসিটাইলকোলিন গ্রাহকগুলোকে ধ্বংস করে ফেলে। এর ফলে স্নায়ুর সংকেত ঠিকমতো পেশীতে পৌঁছাতে পারে না এবং কাজ করার সাথে সাথে পেশী মারাত্মক দুর্বল হয়ে পড়ে; সাধারণত চোখের পাতা ঝুলে পড়া (টপসিস), দ্বৈত দৃষ্টি এবং হাত-পায়ে দ্রুত ক্লান্তি নেমে আসার মাধ্যমে এর প্রকাশ ঘটে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary and Skeletal Muscle Glossary', 'সারসংক্ষেপ ও কঙ্কালপেশী শব্দকোষ'),
          paragraphs: [
            l(
              'Skeletal muscle functions as an exquisitely tuned biomechanical machine spanning from macroscale pennate architecture down to the sub-nanometer cross-bridge cycle. Force generation requires coordinated cooperation between somatic neural action potentials, sarcolemmal T-tubule depolarization, sarcoplasmic calcium release, and the cyclic interaction of actin and myosin. Pathological breakdown across any molecular level—from acetylcholine receptor autoantibodies to dystrophin deficiency—leads to crippling neuromuscular disease.',
              'কঙ্কালপেশী হলো ন্যানোমিটার পর্যায়ের ক্রস-ব্রিজ থেকে শুরু করে পুরো অঙ্গের বলবিদ্যা পর্যন্ত এক নিখুঁত যন্ত্র। শক্তি উৎপাদনের জন্য স্নায়বিক সংকেত, টি-টিউবিউলে তড়িৎ প্রবাহ, ক্যালসিয়াম নিঃসরণ এবং অ্যাক্টিন-মায়োসিনের ছন্দবদ্ধ মিথস্ক্রিয়া অপরিহার্য। এই ব্যবস্থার যেকোনো একটি আণবিক অংশে ত্রুটি—অ্যাসিটাইলকোলিন গ্রাহক নষ্ট হওয়া থেকে ডিস্ট্রোফিন প্রোটিনের ঘাটতি—মারাত্মক স্নায়ু-পেশীগত পক্ষাঘাত ও দুর্বলতা সৃষ্টি করে।'
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
          heading: l('Myogenesis, Satellite Cells and Muscle Regeneration', 'মায়োজেনেসিস, স্যাটেলাইট কোষ ও পেশী পুনরুজ্জীবন'),
          paragraphs: [
            l(
              'Embryonic skeletal muscle derives from the paraxial mesoderm somites, wherein dorsolateral somitic cells delaminate to form the dermomyotome. The myogenic transcription factor cascade—orchestrated by basic helix-loop-helix master regulators Pax3/Pax7, MyoD, Myf5, myogenin, and MRF4—drives lineage commitment from multipotent mesenchyme into proliferating myoblasts that subsequently align and fuse into multinucleated syncytial myotubes.',
              'ভ্রূণের কঙ্কালপেশী সোমাইট নামক প্যারাঅ্যাক্সিয়াল মেসোডার্ম থেকে উৎপন্ন হয়। মায়োজেনিক মাস্টার রেগুলেটর জিনসমূহ—যেমন Pax3/7, MyoD, Myf5 এবং মায়োজেনিন—মেসেনকাইমাল কোষকে মায়োব্লাস্টে রূপান্তরিত করে, যা পরবর্তীতে পরস্পর সংযুক্ত হয়ে বহু-নিউক্লিয়াসযুক্ত দীর্ঘ মায়োটিউব বা পেশীতন্তু গঠন করে।'
            ),
            l(
              'Quiescent adult muscle stem cells, known as satellite cells, reside in specialized niches wedged between the basal lamina and the sarcolemma of mature myofibers. Upon mechanical strain, eccentric contraction damage, or focal necrosis, satellite cells break quiescence, express MyoD, and undergo asymmetric division: one daughter cell self-renews the stem-cell pool, while the other proliferates as a transient-amplifying myoblast to repair the injured fiber or fuse to form de novo myofibers.',
              'প্রাপ্তবয়স্ক মানুষের পেশীতে ভিত্তিঝিল্লি ও সারকোলেমার মাঝে সুপ্ত স্যাটেলাইট কোষ বাস করে। পেশীতে আঘাত বা ক্ষত সৃষ্টি হলে এই কোষগুলো জেগে ওঠে এবং বিভাজিত হয়ে নতুন পেশী কোষ তৈরি করে ক্ষতস্থান নিখুঁতভাবে মেরামত করে অথবা পুনরায় সুপ্ত অবস্থায় ফিরে গিয়ে ভবিষ্যৎ সুরক্ষার জন্য মজুত থাকে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Molecular Architecture of the Triad and Calcium Release Machinery', 'ট্রায়াডের আণবিক কাঠামো ও ক্যালসিয়াম নিঃসরণ ব্যবস্থা'),
          paragraphs: [
            l(
              'The muscle triad comprises a central transverse (T) tubule invagination flanked symmetrically by two terminal cisternae of the sarcoplasmic reticulum (SR). The fundamental molecular transduction nexus within the triad consists of physical conformational coupling between two giant channel proteins: the voltage-gated L-type calcium channel (dihydropyridine receptor, DHPR / CaV1.1) in the T-tubule sarcolemma, and the calcium release channel (ryanodine receptor type 1, RyR1) in the SR membrane.',
              'পেশীর ট্রায়াড একটি কেন্দ্রীয় টি-টিউবিউল এবং এর দুই পাশের সারকোপ্লাজমিক রেটিকুলামের প্রান্তীয় থলি নিয়ে গঠিত। এই সংযোগস্থলের মূল চালিকাশক্তি হলো দুটি বিশালাকার প্রোটিনের সরাসরি শারীরিক বন্ধন: টি-টিউবিউলের ভোল্টেজ-সংবেদনশীল ডাইহাইড্রোপাইরিডিন গ্রাহক (DHPR) এবং রেটিকুলামের ঝিল্লিতে থাকা রায়ানোডিন গ্রাহক (RyR1)।'
            ),
            l(
              'Unlike cardiac muscle, where influx of extracellular calcium is obligatory (calcium-induced calcium release), skeletal muscle excitation-contraction coupling operates primarily via mechanical coupling. Membrane depolarization induces a voltage-sensing intramembrane charge movement in the DHPR tetrad, which transmits a direct physical allosteric pull to the RyR1 foot domain, opening the SR channel and releasing stored calcium down an immense chemical gradient into the sarcoplasm within 2 milliseconds.',
              'হৃৎপেশীর মতো বাইরে থেকে ক্যালসিয়াম ঢোকার ওপর নির্ভর না করে কঙ্কালপেশী সরাসরি যান্ত্রিক শারীরিক টানের মাধ্যমে কাজ করে। বিদ্যুৎ প্রবাহে DHPR প্রোটিনের রূপ বদলালে তা রায়ানোডিন গেটকে সজোরে টেনে খুলে দেয়, যার ফলে মাত্র ২ মিলিসেকেন্ডের মধ্যে রেটিকুলামের জমা ক্যালসিয়াম হুড়মুড় করে সাইটোপ্লাজমে ছড়িয়ে পড়ে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Biochemical Cross-Bridge Kinetics and Force-Velocity Dynamics', 'ক্রস-ব্রিজের বায়োকেমিস্ট্রি ও গতি-শক্তির গতিবিদ্যা'),
          paragraphs: [
            l(
              'The Lymn-Taylor actomyosin cross-bridge cycle describes the sequential chemomechanical transduction of ATP hydrolysis. In the detached state, ATP binding to the myosin head causes immediate dissociation from actin. Hydrolysis of ATP into ADP and inorganic phosphate (Pi) cocks the myosin neck linker into a high-energy 90-degree conformation. Weak initial actin binding transitions to tight stereospecific stereochemical binding upon phosphate release.',
              'লিম-টেইলর ক্রস-ব্রিজ চক্র এটিপি ভাঙার রাসায়নিক শক্তিকে যান্ত্রিক শক্তিতে রূপান্তরের নিখুঁত ব্যাখ্যা দেয়। মায়োসিনের মাথায় এটিপি যুক্ত হওয়া মাত্র তা অ্যাক্টিন থেকে আলাদা হয়ে যায়। এটিপি ভেঙে ADP ও অজৈব ফসফেটে পরিণত হলে মায়োসিনের মাথাটি ৯০ ডিগ্রি কোণে স্প্রিংয়ের মতো টানটান হয় এবং অ্যাক্টিনের সাথে শক্তভাবে যুক্ত হয়।'
            ),
            l(
              'Release of Pi triggers the mechanical power stroke: the light-chain lever arm rotates roughly 70 degrees, translating the thin filament by 10 to 12 nm and generating isometric tension. Dissociation of ADP leaves myosin trapped in the rigid rigor conformation until a fresh ATP binds. In Hill hyperbolic force-velocity relationship, shortening velocity is inversely proportional to load, because cross-bridge detachment kinetics become rate-limiting as opposing mechanical resistance escalates.',
              'ফসফেট বের হয়ে যাওয়া মাত্রই মায়োসিন ৭০ ডিগ্রি হেলে গিয়ে অ্যাক্টিনকে ১০-১২ ন্যানোমিটার টেনে আনে। এরপর ADP বের হয়ে যায় এবং নতুন এটিপি না আসা পর্যন্ত মায়োসিন অ্যাক্টিনকে শক্ত করে ধরে রাখে। হিলের বল-গতি সমীকরণ অনুযায়ী ভারী বোঝা তোলার সময় পেশীর সংকুচিত হওয়ার গতি কমে যায়, কারণ যান্ত্রিক বাধার কারণে ক্রস-ব্রিজ আলাদা হওয়ার হার সীমাবদ্ধ হয়ে পড়ে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Motor Unit Plasticity, Metabolic Signatures and Fiber-Type Transitions', 'মোটর ইউনিটের রূপান্তর ও পেশীতন্তুর বিপাকীয় পরিবর্তন'),
          paragraphs: [
            l(
              'Skeletal muscle fibers exhibit remarkable phenotypic plasticity in response to chronic mechanical loading, electrical pacing, and endocrine cues. Prolonged endurance training activates the calcium-calmodulin-activated phosphatase calcineurin and the transcriptional coactivator PGC-1-alpha (peroxisome proliferator-activated receptor gamma coactivator 1-alpha), driving mitochondrial biogenesis, angiogenesis, and conversion of fast-glycolytic Type IIx fibers into fatigue-resistant Type IIa and Type I phenotypes.',
              'কঙ্কালপেশীর তন্তুগুলো দীর্ঘমেয়াদী ব্যায়াম ও হরমোনের প্রভাবে তাদের নিজস্ব ধরন রূপান্তর করতে পারে। একটানা সহনশীলতার ব্যায়াম (যেমন দৌড়ানো) PGC-1-আলফা প্রোটিন ও ক্যালসিনিউরিনকে সক্রিয় করে প্রচুর নতুন মাইটোকন্ড্রিয়া ও রক্তনালী তৈরি করে, যার ফলে দ্রুত ক্লান্ত হওয়া টাইপ ২ তন্তুগুলো ক্লান্তিহীন টাইপ ১ তন্তুতে রূপান্তরিত হয়।'
            ),
            l(
              'Conversely, prolonged mechanical unloading (such as bed rest, cast immobilization, or microgravity spaceflight) downregulates PGC-1-alpha and activates the ubiquitin-proteasome proteolytic system via muscle-specific E3 ligases MuRF1 (TRIM63) and MAFbx (Atrogin-1). This accelerates rapid selective degradation of myosin heavy chains and induces a pathological shift toward fatigable glycolytic fibers, causing up to 20% loss of muscle volume within two weeks.',
              'বিপরীতভাবে, দীর্ঘদিন বিছানায় শুয়ে থাকলে বা মহাকাশে ওজনহীনতায় থাকলে পেশী ক্ষয়কারী MuRF1 ও অ্যাট্রোজিন এনজাইম সক্রিয় হয়ে মায়োসিন প্রোটিনকে দ্রুত ভেঙে ফেলে। এর ফলে মাত্র দুই সপ্তাহের মধ্যে পেশীর ২০ শতাংশ পর্যন্ত ভর ক্ষয়প্রাপ্ত হতে পারে এবং পেশী দ্রুত ক্লান্ত হয়ে পড়ে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Acute Exertional Rhabdomyolysis and Pathophysiological Biomarkers', 'তীব্র র্যাবডোমায়োলাইসিসের প্যাথোফিজিওলজি ও বায়োমার্কার'),
          paragraphs: [
            l(
              'Exertional rhabdomyolysis is an acute life-threatening syndrome characterized by rapid breakdown of damaged skeletal muscle and leakage of intracellular contents into systemic circulation. It occurs when exhaustive unaccustomed exercise or crush injury exhausts intracellular ATP reserves, failing sarcolemmal Na+/K+-ATPase and Ca2+-ATPase pumps and precipitating catastrophic intracellular calcium accumulation and activation of neutral proteases.',
              'অতিরিক্ত পরিশ্রমে র্যাবডোমায়োলাইসিস হলো এমন এক মারাত্মক রোগ যেখানে পেশীর তীব্র ক্ষয় হয়ে কোষের ভেতরের সমস্ত উপাদান রক্তে ছড়িয়ে পড়ে। এটি ঘটে যখন মাত্রাতিরিক্ত ব্যায়ামে কোষের এটিপি শেষ হয়ে যায়, সোডিয়াম-পটাসিয়াম ও ক্যালসিয়াম পাম্প বিকল হয় এবং অনিয়ন্ত্রিত ক্যালসিয়াম জমে প্রোটিন-ভাঙা এনজাইমগুলো পেশী কোষকে ভেতর থেকে গলিয়ে দেয়।'
            ),
            l(
              'Pathognomonic laboratory findings include serum creatine kinase (CK) elevations exceeding 5 to 50 times the upper limit of normal (>1,000 to >100,000 U/L), hyperkalemia, hyperphosphatemia, and profound myoglobinuria. Filtered myoglobin precipitates within renal proximal tubules under acidic urinary pH, forming pigmented obstructing casts and causing heme-induced free-radical generation that triggers acute kidney injury (AKI). Management mandates aggressive intravenous isotonic crystalloid hydration to maintain urine outputs >200–300 mL/hour.',
              'রক্ত পরীক্ষায় ক্রিয়েটিন কাইনেজ (CK) স্বাভাবিকের চেয়ে ৫ থেকে ৫০ গুণ পর্যন্ত বেড়ে যায় এবং রক্তে বিপজ্জনক মাত্রায় পটাসিয়াম বৃদ্ধি পায়। প্রস্রাবের সাথে নির্গত মায়োগ্লোবিন কিডনির নালীগুলোতে জমে অবরুদ্ধ করে ফেলে এবং তীব্র কিডনি বিকলতা (AKI) ঘটায়। এই প্রাণঘাতী জটিলতা ঠেকাতে রোগীকে তাৎক্ষণিকভাবে প্রচুর স্যালাইন দিয়ে প্রস্রাবের প্রবাহ স্বাভাবিক রাখতে হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Academic Principles of Skeletal Muscle Dynamics', 'কঙ্কালপেশী গতিবিদ্যার মূল একাডেমিক নীতি'),
          paragraphs: [
            l(
              'Skeletal muscle exemplifies biological multiscale integration. Molecular ATP hydrolysis at the myosin catalytic core drives nanometer-scale power strokes that summate across hundreds of thousands of sarcomeres to generate kilonewtons of macroscopic tendon force. Connective tissue fascial envelopes ensure lateral and longitudinal force transmission, while neuromuscular motor unit architecture provides exquisite graded recruitment control.',
              'কঙ্কালপেশী বহু-স্কেলের জৈবিক সংহতির এক অনন্য নিদর্শন। মায়োসিনের একটিমাত্র অণুতে এটিপি ভাঙার শক্তি হাজার হাজার সারকোমিয়ারে পুঞ্জীভূত হয়ে শেষ পর্যন্ত কিলোগ্রাম ওমেগার যান্ত্রিক শক্তিতে রূপান্তরিত হয়। ফাসিয়াল আবরণী এই শক্তিকে চতুর্দিকে ছড়িয়ে দেয় এবং স্নায়ুর মোটর ইউনিটগুলো প্রয়োজনের ওপর ভিত্তি করে পেশীর সংকোচনকে নিখুঁতভাবে নিয়ন্ত্রণ করে।'
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
          heading: l('Molecular Frontiers in CRISPR-Cas9 Exon Skipping for Muscular Dystrophy', 'মাসকুলার ডিস্ট্রফিতে ক্রিসপার-ক্যাস৯ এক্সন স্কিপিং গবেষণা'),
          paragraphs: [
            l(
              'Therapeutic management of Duchenne muscular dystrophy is entering an epochal transition from palliative corticosteroid regimes toward curative gene editing. Over 60% of DMD mutations cluster within mutational hotspots (exons 45–55) of the 79-exon dystrophin gene, causing translational reading-frame shifts that truncate the protein. Recombinant adeno-associated virus (AAV)-mediated delivery of antisense phosphorodiamidate morpholino oligomers (PMOs, e.g. eteplirsen for exon 51 skipping) restores an in-frame reading transcript, converting a severe DMD phenotype into a milder, Becker-like truncated dystrophin.',
              'ডুশেন মাসকুলার ডিস্ট্রফির চিকিৎসায় কেবল স্টেরয়েড ব্যবহারের দিন পেরিয়ে আধুনিক চিকিৎসাবিজ্ঞান জিন-সম্পাদনার নতুন যুগে প্রবেশ করেছে। ডিস্ট্রোফিন জিনের ৭৯টি এক্সনের মধ্যে ৪৫ থেকে ৫৫ নম্বরে বেশিরভাগ ত্রুটি দেখা যায় যা প্রোটিন তৈরির রিডিং ফ্রেম নষ্ট করে দেয়। আধুনিক অ্যান্টিসেন্স মরফোলিনো অলিগোমার (PMO) এবং ভাইরাসের মাধ্যমে ক্ষতিগ্রস্ত এক্সনকে বাদ দিয়ে (Exon skipping) পুনরায় কার্যকর প্রোটিন তৈরি করা সম্ভব হচ্ছে।'
            ),
            l(
              'At the cutting edge, dual-guide CRISPR-Cas9 base editors and prime editors delivered via engineered non-immunogenic lipid nanoparticles (LNPs) or AAV9 capsids are directly excising entire genomic deletion-prone regions. In humanized canine and mdx mouse models, single-dose systemic administration restores sarcolemmal dystrophin expression to >40% of wild-type levels, halting eccentric contraction injury and eliminating chronic muscle fibrosis without eliciting permanent off-target genomic cleavages.',
              'গবেষণার শীর্ষে রয়েছে ডুয়াল-গাইড ক্রিসপার (CRISPR-Cas9) প্রযুক্তি, যা লিপিড ন্যানোপার্টিকেলের মাধ্যমে ক্ষতিগ্রস্ত জিনকে পুরোপুরি মেরামত করতে পারে। প্রাণীর ওপর সফল পরীক্ষায় দেখা গেছে যে একবার এই থেরাপি প্রয়োগ করলেই ৪০ শতাংশেরও বেশি প্রাকৃতিক ডিস্ট্রোফিন প্রোটিন ফিরে আসে, যা পেশীর ক্ষয় ও স্থায়ী ফাইব্রোসিস পুরোপুরি থামিয়ে দিতে সক্ষম হয়েছে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Mechanosensing, Sarcopenia Biomarkers and Muscle-Bone Crosstalk', 'মেকানোসেন্সিং, সারকোপেনিয়া বায়োমার্কার ও পেশী-অস্থি মিথস্ক্রিয়া'),
          paragraphs: [
            l(
              'Age-related loss of muscle mass and functional strength (sarcopenia) is increasingly recognized as an endocrine disorder coupled to bone loss (osteosarcopenia). Contracting skeletal muscle behaves as an endocrine organ, secreting bioactive myokines into systemic circulation. PGC-1-alpha-driven muscle contraction induces expression of FNDC5, which is proteolytically cleaved to yield irisin, a peptide hormone that crosses the blood-brain barrier to upregulate hippocampal brain-derived neurotrophic factor (BDNF) and stimulates cortical bone osteoblastogenesis via alpha-V integrin receptors.',
              'বয়সের সাথে সাথে পেশীর ভর ও শক্তি হ্রাস পাওয়া (সারকোপেনিয়া) কেবল বয়োবৃদ্ধির সাধারণ লক্ষণ নয়, বরং এটি হাড় ক্ষয়ের সাথে জড়িত একটি হরমোনজনিত জটিলতা। সংকুচিত কঙ্কালপেশী একটি অন্তঃক্ষরা অঙ্গের মতো কাজ করে রক্তে মায়োকাইন নামক উপকারী উপাদান নিঃসরণ করে। ব্যায়ামের ফলে পেশী থেকে নিঃসৃত আইরিসিন হরমোন মস্তিষ্কে মেধা বাড়াতে এবং অস্থির কোষগুলোকে সক্রিয় করে নতুন হাড় তৈরিতে সরাসরি সাহায্য করে।'
            ),
            l(
              'In sarcopenic states, chronic low-grade systemic inflammation (elevated IL-6, TNF-alpha) drives myostatin (GDF-8) overexpression via the ActRIIB/Smad2/3 signaling axis, suppressing protein synthesis via mTOR inhibition while promoting muscle proteolysis. Clinical trials investigating humanized monoclonal antibodies against myostatin (trevogrumab) and soluble ActRIIB decoy receptors (bimagrumab) have achieved marked hypertrophic increases in lean muscle mass, demonstrating the therapeutic viability of targeting endocrine myokine axes.',
              'সারকোপেনিয়ায় দীর্ঘস্থায়ী প্রদাহের কারণে মায়োস্ট্যাটিন নামক ক্ষতিকারক প্রোটিন অতিরিক্ত বেড়ে যায়, যা পেশী তৈরি বন্ধ করে দিয়ে ক্ষয় ত্বরান্বিত করে। এই ক্ষয় রুখতে আধুনিক ক্লিনিক্যাল ট্রায়ালে মায়োস্ট্যাটিন প্রতিরোধী বিশেষ অ্যান্টিবডি সফলভাবে প্রয়োগ করা হচ্ছে, যা বৃদ্ধ বয়সেও পেশীর ক্ষয় রোধ করে পুনরায় স্বাভাবিক শক্তি ফিরিয়ে আনার দারুণ সম্ভাবনা তৈরি করেছে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-step schematic tracing skeletal muscle hierarchy: epimysial fascial wrapping, myofiber excitation-contraction packaging, sarcomeric Z-to-Z architecture, and actin-myosin force generation.',
      'কঙ্কালপেশীর স্তরবিন্যাসের ৪টি সহজলভ্য ধাপ: এপিমাইসিয়াম ফাসিয়াল মোড়ক, পেশীতন্তুর উত্তেজনা-সংকোচন কাঠামো, সারকোমিয়ার Z-ডিস্ক স্থাপত্য এবং অ্যাক্টিন-মায়োসিন শক্তি উৎপাদন।'
    ),
    steps: [
      l(
        '1. Epimysium, perimysium, and endomysium fascial investments package fibers and transmit tensile forces to bone tendons.',
        '১. এপিমাইসিয়াম, পেরিমাইসিয়াম ও এন্ডোমাইসিয়াম তন্তুগুলোকে সাজিয়ে রাখে এবং শক্তিকে সরাসরি টেন্ডনে পাঠায়।'
      ),
      l(
        '2. Multinucleated muscle fibers propagate action potentials along T-tubules to trigger sarcoplasmic reticulum calcium release.',
        '২. বহু-নিউক্লিয়াসযুক্ত পেশীতন্তুর টি-টিউবিউল বিদ্যুৎ সংকেত ছড়িয়ে দিয়ে ক্যালসিয়াম নিঃসরণ করায়।'
      ),
      l(
        '3. Sarcomeres bounded by Z-discs shorten as thin actin filaments slide over thick myosin filaments toward the central M-line.',
        '৩. মায়োসিনের ওপর অ্যাক্টিন পিছলে গিয়ে কেন্দ্রীয় M-লাইনের দিকে আসার মাধ্যমে সারকোমিয়ার সংকুচিত হয়।'
      ),
      l(
        '4. Myosin heads hydrolyze ATP to cycle through cross-bridge attachment, power stroke, and detachment, generating kinetic force.',
        '৪. মায়োসিনের মাথা এটিপি ভেঙে ক্রস-ব্রিজ তৈরি করে টান দেয় এবং পুনরায় বিচ্ছিন্ন হয়ে গতিশীল শক্তি জোগায়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 5-year-old boy presents with progressive proximal muscle weakness, calf pseudohypertrophy, and relies on climbing up his own thighs with his hands to stand upright from the floor (Gowers sign). Genetic sequencing reveals a frameshift mutation in the DMD gene. The absence of which protein causes this condition?',
      'একটি ৫ বছর বয়সী ছেলে ধীরে ধীরে পেশীর দুর্বলতা, পায়ের কাফে অস্বাভাবিক স্ফীতি এবং বসা থেকে ওঠার জন্য দুই হাত দিয়ে নিজের উরুর ওপর ভর দিয়ে সোজা হওয়ার সমস্যা (গোয়ার্স সাইন) নিয়ে আসে। পরীক্ষায় জিনের ত্রুটি শনাক্ত হয়। কোন প্রোটিনের অনুপস্থিতিতে এই রোগটি ঘটে?'
    ),
    options: [
      l('Dystrophin', 'ডিস্ট্রোফিন (Dystrophin)'),
      l('Titin', 'টাইটিন (Titin)'),
      l('Myosin heavy chain', 'মায়োসিন হেভি চেইন'),
      l('Troponin C', 'ট্রপোনিন সি (Troponin C)'),
    ],
    correctIndex: 0,
    explanation: l(
      'Duchenne muscular dystrophy is an X-linked recessive disorder caused by mutations in the DMD gene that prevent synthesis of functional dystrophin. Dystrophin normally anchors the internal actin cytoskeleton to the extracellular basal lamina; its absence causes sarcolemmal fragility, recurrent necrosis, pseudohypertrophy, and the characteristic Gowers sign.',
      'ডুশেন মাসকুলার ডিস্ট্রফি হলো ডিস্ট্রোফিন জিনের ত্রুটির কারণে সৃষ্ট একটি বংশগত রোগ যার ফলে কার্যকর ডিস্ট্রোফিন তৈরি হয় না। এই প্রোটিনটি পেশী কোষের ভেতরের কঙ্কালকে বাইরের আবরণের সাথে শক্ত করে ধরে রাখে; এর অভাবে পেশীর কোষগুলো বারবার ফেটে গিয়ে ধ্বংস হয় এবং রোগী নিজের উরুর ওপর হাত রেখে সোজা হতে বাধ্য হয় (গোয়ার্স সাইন)।'
    ),
  },
}
