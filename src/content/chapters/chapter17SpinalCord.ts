import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch13',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 13: The Anatomy of the Nervous System',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-introduction',
  },
  {
    id: 'kandel-neuroscience-6e',
    authors: 'E. R. Kandel, J. D. Koester, S. H. Mack, S. A. Siegelbaum',
    title: 'Principles of Neural Science, 6th edition',
    organization: 'McGraw-Hill Education',
    year: 2021,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=2965',
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
    id: 'guyton-hall-14e',
    authors: 'J. E. Hall, M. E. Hall',
    title: 'Guyton and Hall Textbook of Medical Physiology, 14th edition',
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/guyton-and-hall-textbook-of-medical-physiology/hall/978-0-323-59712-8',
  },
]

export const chapter17SpinalCordLesson: LessonTopic = {
  id: 'topic.anatomy.spinal-cord',
  slug: 'spinal-cord',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('17 · Spinal Cord and Meninges', '১৭ · মেরুরজ্জু ও মেনিনজেস'),
  summary: l(
    'A comprehensive, clinically rigorous study of the spinal cord and its protective coverings: conus medullaris and cauda equina topography, the meningeal hierarchy, lumbar cistern dynamics, Rexed gray laminae, ascending sensory and descending motor tracts, spinal cord blood supply, and cord hemisection syndromes.',
    'মেরুরজ্জু ও তার সুরক্ষামূলক আবরণের বিশদ ও ক্লিনিক্যাল শারীরস্থানিক অধ্যয়ন: কোনাস মেডুলারিস ও কডা ইকুইনার অবস্থান, মেনিনজেসের তিন স্তর, লাম্বার সিস্টার্ন ও সিএসএফ গতিবিদ্যা, রেক্সেড গ্রে ল্যামিনা, সংবেদী ও মোটর স্নায়ুপথ, মেরুরজ্জুর রক্ত সঞ্চালন এবং ব্রাউন-সেকোয়ার্ড সহ বিভিন্ন কর্ড সিন্ড্রোম।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Map spinal cord topography (foramen magnum to conus medullaris at L1–L2), cauda equina, filum terminale, and the safe anatomical landmarks for lumbar puncture (L3–L4 or L4–L5 intervertebral space).',
      'মেরুরজ্জুর অবস্থান (ফোরামেন ম্যাগনাম থেকে L1–L2 তে কোনাস মেডুলারিস), কডা ইকুইনা, ফাইলাম টার্মিনাল এবং লাম্বার পাংচারের নিরাপদ শারীরস্থানিক স্থান (L3–L4 বা L4–L5 খাঁজ) মানচিত্রে চিহ্নিত করা।'
    ),
    l(
      'Analyze internal spinal cord cross-sectional architecture: Rexed gray laminae (I–X), dorsal column-medial lemniscal pathways (gracilis and cuneatus), and the lateral corticospinal motor tract.',
      'মেরুরজ্জুর প্রস্থচ্ছেদের অভ্যন্তরীণ গঠন বিশ্লেষণ করা: রেক্সেড গ্রে ল্যামিনা (I–X), ডর্সাল কলামের সূক্ষ্ম স্পর্শ ও প্রোপ্রিওসেপশন পথ (গ্রাসিলিস ও কিউনিয়েটাস) এবং কর্টিকোস্পাইনাল প্রধান ঐচ্ছিক মোটর পথ।'
    ),
    l(
      'Correlate spinal cord vascular territories (anterior spinal artery vs. paired posterior spinal arteries) with acute clinical myelopathies, including anterior cord syndrome and Brown-Séquard hemisection.',
      'মেরুরজ্জুর রক্তনালী অঞ্চল (একটি অ্যান্টিরিয়র স্পাইনাল ধমনী বনাম দুটি পোস্টেরিয়র স্পাইনাল ধমনী) এবং ব্রাউন-সেকোয়ার্ড ও অ্যান্টিরিয়র স্পাইনাল আর্টারি সিন্ড্রোমের ক্লিনিক্যাল লক্ষণসমূহ ব্যাখ্যা করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.neural-tissue'],
  relatedTopicIds: ['topic.anatomy.skeletal-axial'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch13', 'moore-anatomy-9e'],
    structure: ['openstax-ap2e-ch13', 'kandel-neuroscience-6e'],
    mechanism: ['guyton-hall-14e', 'kandel-neuroscience-6e'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'kandel-neuroscience-6e'],
    takeaways: ['openstax-ap2e-ch13', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Spinal Cord Topography & Conus Medullaris', 'ভূমিকা: মেরুরজ্জুর অবস্থান ও কোনাস মেডুলারিস'), sectionId: 'introduction' },
      { id: 'sec-meninges', label: l('Meningeal Layers, Spaces & Lumbar Puncture', 'মেনিনজেসের স্তর, স্থান ও লাম্বার পাংচার'), sectionId: 'structure' },
      { id: 'sec-internal-gray', label: l('Internal Gray Matter: Rexed Laminae & Reflex Arcs', 'অভ্যন্তরীণ ধূসর বস্তু: রেক্সেড ল্যামিনা ও প্রতিবর্ত ক্রিয়া'), sectionId: 'mechanism' },
      { id: 'sec-white-tracts', label: l('Ascending & Descending White Matter Tracts', 'উর্ধ্বগামী সংবেদী ও নিম্নগামী মোটর স্নায়ুপথ'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Cord Syndromes: Brown-Séquard & Infarction', 'ক্লিনিক্যাল কর্ড সিন্ড্রোম: ব্রাউন-সেকোয়ার্ড ও ইনফার্কশন'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary & Spinal Cord Glossary', 'সারসংক্ষেপ ও মেরুরজ্জুর শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Conus Medullaris & Cauda Equina', 'কোনাস মেডুলারিস ও কডা ইকুইনা'),
        definition: l(
          'The tapered conical terminal end of the adult spinal cord at the level of the L1–L2 intervertebral disc. The cauda equina ("horse tail") is the collection of long dorsal and ventral nerve roots descending through the lumbar cistern below the conus to exit their respective intervertebral foramina.',
          'পূর্ণবয়স্ক মানুষের মেরুরজ্জুর নিচের সূক্ষ্ম মোচাকৃতি শেষ প্রান্ত যা L1–L2 কশেরুকা বরাবর শেষ হয়। কোনাসের নিচ থেকে ঘোড়ার লেজের মতো ঝুলে থাকা লম্বা লম্বা স্নায়ুর মূলগুলোকে কডা ইকুইনা বলে যা লাম্বার সিস্টার্নের তরলে ভেসে নিজ নিজ কশেরুকার ছিদ্র দিয়ে বের হয়।'
        ),
      },
      {
        term: l('Lumbar Cistern & Safe Puncture Space', 'লাম্বার সিস্টার্ন ও নিরাপদ সুঁই ফোটানোর স্থান'),
        definition: l(
          'An enlarged subarachnoid space extending from the conus medullaris (L1–L2) down to the termination of the dural sac at S2, containing cerebrospinal fluid (CSF) and free-floating cauda equina roots. Lumbar puncture is safely performed at L3–L4 or L4–L5 to harvest CSF without piercing the spinal cord.',
          'কোনাস মেডুলারিস (L1–L2) থেকে স্যাক্রাল ২ (S2) পর্যন্ত বিস্তৃত সাবঅ্যারাকনয়েড গহ্বর যেখানে প্রচুর সিএসএফ তরল এবং ভাসমান স্নায়ুমূল থাকে। L3–L4 বা L4–L5 কশেরুকার মাঝখান দিয়ে সুঁই ঢুকিয়ে মেরুরজ্জুর কোনো ক্ষতি না করে অত্যন্ত নিরাপদে রোগ পরীক্ষার জন্য সিএসএফ সংগ্রহ করা হয়।'
        ),
      },
      {
        term: l('Dorsal Column-Medial Lemniscal System (DCML)', 'ডর্সাল কলাম-মিডিয়াল লেমনিস্কাল সংবেদী পথ (DCML)'),
        definition: l(
          'The primary ascending sensory pathway conveying fine discriminative touch, conscious proprioception, and vibratory sense. First-order afferents enter the ipsilateral dorsal columns: fasciculus gracilis (medial, lower body below T6) and fasciculus cuneatus (lateral, upper body above T6), synapsing in the medulla before decussating.',
          'সূক্ষ্ম স্পর্শ, কম্পন এবং শরীরের অঙ্গের অবস্থান বোঝার প্রধান সংবেদী স্নায়ুপথ। T6 কশেরুকার নিচের অংশের সংকেত বহন করে ভেতরের ফ্যাসিকুলাস গ্রাসিলিস এবং ওপরের অংশের সংকেত বহন করে বাইরের ফ্যাসিকুলাস কিউনিয়েটাস; এরা মস্তিষ্কের মেডুলায় গিয়ে অপর পাশে ক্রস করে।'
        ),
      },
      {
        term: l('Lateral Corticospinal Tract & Pyramidal Decussation', 'ল্যাটারাল কর্টিকোস্পাইনাল পথ ও পিরামিডাল ক্রস'),
        definition: l(
          'The principal descending motor pathway mediating skilled, voluntary distal limb movement. Approximately 85–90% of corticospinal axons cross the midline at the cervicomedullary junction (pyramidal decussation) to descend in the contralateral lateral funiculus of the spinal cord.',
          'শরীরের হাত ও পায়ের সূক্ষ্ম ঐচ্ছিক নড়াচড়া নিয়ন্ত্রণকারী প্রধান মোটর পথ। মস্তিষ্কের কর্টেক্স থেকে আসা ৮৫ থেকে ৯০ শতাংশ অ্যাক্সন মেডুলার নিচের পিরামিডে অপর পাশে ক্রস করে মেরুরজ্জুর ল্যাটারাল কলাম দিয়ে নিচে নামে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Localizing Cord Hemisection (Brown-Séquard Syndrome) via Neuroanatomy', 'শারীরস্থানিক নিয়মে মেরুরজ্জুর অর্ধচ্ছেদ (ব্রাউন-সেকোয়ার্ড সিন্ড্রোম) শনাক্তকরণ'),
        steps: [
          l('Step 1: Identify corticospinal damage: the descending lateral corticospinal tract has already decussated in the medulla; hemisection produces ipsilateral spastic paresis (upper motor neuron signs) below the lesion level.', 'ধাপ ১: মোটর ক্ষতি বুঝুন: ল্যাটারাল কর্টিকোস্পাইনাল পথ মস্তিষ্কের নিচেই ক্রস করে এসেছে; ফলে মেরুরজ্জুর এক পাশ কাটা গেলে সেই পাশেরই (ইপসিলেটারাল) হাত বা পায়ে পক্ষাঘাত ও টানটান শক্ত ভাব দেখা দেয়।'),
          l('Step 2: Identify dorsal column damage: the ascending fasciculus gracilis and cuneatus ascend uncrossed on the same side up to the medulla; hemisection produces ipsilateral loss of fine touch, vibration, and conscious proprioception below the lesion.', 'ধাপ ২: ডর্সাল কলাম ক্ষতি বুঝুন: ডর্সাল কলামের সূক্ষ্ম স্পর্শ ও কম্পনের স্নায়ুও একই পাশে ওপরে ওঠে; ফলে কাটা পড়ার কারণে আঘাতের একই পাশের স্পর্শ ও কম্পন অনুভূতি পুরোপুরি নষ্ট হয়।'),
          l('Step 3: Identify spinothalamic damage: second-order pain and temperature fibers cross the anterior white commissure 1 to 2 segments above their entry; hemisection produces contralateral loss of pain and temperature sensation starting 1 to 2 segments below the lesion level.', 'ধাপ ৩: স্পাইনোথ্যালামিক ক্ষতি বুঝুন: ব্যথা ও তাপমাত্রার স্নায়ু মেরুরজ্জুতে ঢোকার ১-২ সেগমেন্টের মধ্যেই উল্টো পাশে ক্রস করে ওপরে ওঠে; ফলে এক পাশ কাটা গেলে তার বিপরীত পাশের (কনট্রালেটারাল) ব্যথা ও গরম-ঠান্ডার অনুভূতি বন্ধ হয়ে যায়।'),
        ],
        conclusion: l('Dissociated sensory loss (ipsilateral loss of touch/vibration with contralateral loss of pain/temperature) combined with ipsilateral motor paralysis is the diagnostic triad of spinal cord hemisection (Brown-Séquard syndrome).', 'একপাশে স্পর্শ/কম্পন নষ্ট ও প্যারালাইসিস এবং বিপরীত পাশে ব্যথা ও তাপমাত্রার অনুভূতি হারিয়ে যাওয়ার এই বিস্ময়কর বৈপরীত্যই হলো মেরুরজ্জুর অর্ধচ্ছেদের (ব্রাউন-সেকোয়ার্ড সিন্ড্রোম) নিশ্চিত শারীরস্থানিক প্রমাণ।' ),
      },
    ],
    checkpoints: [
      {
        question: l('Why does an anterior spinal artery infarction produce bilateral paralysis and loss of pain/temperature sensation while sparing fine touch and proprioception?', 'অ্যান্টিরিয়র স্পাইনাল ধমনী বন্ধ হয়ে গেলে হাত-পায়ে প্যারালাইসিস এবং ব্যথা-তাপমাত্রা নষ্ট হলেও সূক্ষ্ম স্পর্শ ও কম্পন অক্ষত থাকে কেন?'),
        answer: l('The single anterior spinal artery supplies the anterior two-thirds of the spinal cord, containing both lateral corticospinal tracts and both anterolateral spinothalamic pathways. The posterior one-third of the cord—housing the dorsal columns (fasciculus gracilis and cuneatus)—is independently perfused by the paired posterior spinal arteries, preserving light touch and joint position sense.', 'অ্যান্টিরিয়র স্পাইনাল ধমনী মেরুরজ্জুর সামনের দুই-তৃতীয়াংশ রক্ত দেয় যেখানে প্যারালাইসিসের মোটর পথ এবং ব্যথা-তাপমাত্রার স্পাইনোথ্যালামিক পথ থাকে। কিন্তু পেছনের এক-তৃতীয়াংশ (যেখানে স্পর্শ ও কম্পনের ডর্সাল কলাম থাকে) দুটি পৃথক পোস্টেরিয়র স্পাইনাল ধমনী থেকে রক্ত পায়; তাই সামনের ধমনী বন্ধ হলেও পেছনের স্পর্শ অনুভূতি পুরোপুরি স্বাভাবিক থাকে।' ),
      },
      {
        question: l('Why is a lumbar puncture needle inserted specifically below the L2 vertebral level in an adult?', 'পূর্ণবয়স্ক মানুষের ক্ষেত্রে লাম্বার পাংচারের সুঁই কেন অবশ্যই দ্বিতীয় লাম্বার কশেরুকার (L2) নিচে ঢোকানো হয়?'),
        answer: l('In adults, the spinal cord terminates at the conus medullaris between L1 and L2, while the subarachnoid space (lumbar cistern) extends down to S2. Inserting the needle at the L3–L4 or L4–L5 interspinous space enters the expansive CSF-filled lumbar cistern where mobile cauda equina nerve roots float freely and brush away from the needle tip, preventing traumatic spinal cord puncture or transection.', 'পূর্ণবয়স্কদের ক্ষেত্রে মেরুরজ্জু L1–L2 কশেরুকায় শেষ হয়ে যায়, কিন্তু সিএসএফ ভর্তি থলিটি S2 পর্যন্ত বিস্তৃত থাকে। L3–L4 বা L4–L5 খাঁজে সুঁই ঢোকালে কোনো শক্ত মেরুরজ্জু থাকে না; সেখানে কেবল ভাসমান স্নায়ুর মূলগুলো থাকে যা সুঁইয়ের ছোঁয়া লাগলে সরে যায়, ফলে মেরুরজ্জুর কোনো আঘাতের ঝুঁকি থাকে না।' ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch17-spinal-cord-diagram',
    title: l('Interactive Spinal Cord Anatomy & Cross-Sectional Tracts', 'ইন্টারেক্টিভ মেরুরজ্জু ও প্রস্থচ্ছেদের স্নায়ুপথ'),
    description: l(
      'Inspect the four primary architectural zones of the spinal cord: the conus medullaris and lumbar cistern, the meningeal coverings, the gray matter H-horns, and the white matter sensory/motor tracts.',
      'মেরুরজ্জুর চারটি প্রধান শারীরস্থানিক অঞ্চল পরীক্ষা করুন: কোনাস মেডুলারিস ও লাম্বার সিস্টার্ন, মেনিনজেসের প্রতিরক্ষামূলক স্তর, এইচ-আকৃতির ধূসর বস্তু এবং শ্বেতবস্তুর সংবেদী ও মোটর পথ।'
    ),
    disclaimer: l(
      'Neuroanatomical schematic: select any sector to review lumbar puncture landmarks, Rexed laminar functional zones, tract decussations, and cord hemisection deficits.',
      'নিউরোঅ্যানাটমিক্যাল চিত্র: লাম্বার পাংচারের ল্যান্ডমার্ক, রেক্সেড ল্যামিনা, স্নায়ুপথের ক্রস এবং কর্ডের আঘাতের লক্ষণগুলো দেখতে যেকোনো অংশ নির্বাচন করুন।'
    ),
    svgType: 'spinal-cord-system',
    items: [
      {
        id: 'conus-cauda',
        label: l('Conus Medullaris & Lumbar Cistern', 'কোনাস মেডুলারিস ও লাম্বার সিস্টার্ন'),
        description: l(
          'Topographical termination and CSF reservoir. Cord ends at L1–L2 disc. Lumbar cistern extends to S2, containing cauda equina nerve roots and filum terminale.',
          'মেরুরজ্জুর সমাপ্তি ও সিএসএফের আধার। মেরুরজ্জু L1–L2 এ শেষ হয়। লাম্বার সিস্টার্ন S2 পর্যন্ত থাকে যেখানে কডা ইকুইনার ভাসমান স্নায়ুমূল এবং ফাইলাম টার্মিনাল থাকে।'
        ),
        details: l(
          'Tuffier line connects highest points of iliac crests, intersecting spine at L4 spinous process or L4-L5 interspace, providing reliable surface landmark for lumbar puncture.',
          'ইলিয়াক ক্রেস্টের সংযোগকারী টুফিয়ার রেখা L4 কশেরুকা বরাবর পড়ে যা নিরাপদ স্থানে লাম্বার পাংচার করার জন্য চিকিৎসকদের মূল গাইড।'
        ),
        sectionId: 'introduction',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'meningeal-envelopes',
        label: l('Meninges & Denticulate Ligaments', 'মেনিনজেস ও ডেন্টিকুলেট লিগামেন্ট'),
        description: l(
          'Three protective sheets: pachymeninx (dura mater), arachnoid mater with web-like trabeculae, and vascular pia mater. Denticulate ligaments anchor cord laterally to dural wall.',
          'তিনটি প্রতিরক্ষামূলক স্তর: বাইরের শক্ত ডুরা মেটার, মাঝের অ্যারাকনয়েড মেটার এবং ভেতরের নরম পিয়া মেটার। ২১ জোড়া ডেন্টিকুলেট লিগামেন্ট মেরুরজ্জুকে নড়াচড়া থেকে আটকে রাখে।'
        ),
        details: l(
          'Epidural space contains fat and Batson internal vertebral venous plexus (valveless). Subarachnoid space carries 150 mL of continuously circulating CSF.',
          'এপিডুরাল স্পেসে চর্বি ও ব্যাটসনের ভালভহীন শিরা থাকে। সাবঅ্যারাকনয়েড গহ্বরের মধ্য দিয়ে মস্তিষ্কের ১৫০ মিলি সিএসএফ তরল প্রবাহিত হয়।'
        ),
        sectionId: 'structure',
        color: '#fecdd3',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'gray-horns',
        label: l('Internal Gray Matter & Rexed Laminae', 'ধূসর বস্তু ও রেক্সেড ল্যামিনা'),
        description: l(
          'H-shaped core divided into 10 Rexed laminae. Posterior horns receive sensory input (substantia gelatinosa, laminae I–II). Anterior horns house alpha/gamma motor neurons (lamina IX).',
          'এইচ-আকৃতির কেন্দ্র যা ১০টি রেক্সেড ল্যামিনায় বিভক্ত। পেছনের শিং সংবেদী তথ্য গ্রহণ করে এবং সামনের শিং-এ পেশী নিয়ন্ত্রণকারী বড় আলফা মোটর নিউরন থাকে।'
        ),
        details: l(
          'Lateral horns (T1–L2) contain preganglionic sympathetic cell bodies in intermediolateral (IML) column. S2–S4 intermediate zone contains sacral parasympathetic nucleus.',
          'T1 থেকে L2 কশেরুকার ল্যাটারাল শিং সিমপ্যাথেটিক স্নায়ুতন্ত্রের জন্ম দেয়। S2–S4 এর অংশ মূত্র ও মল নিয়ন্ত্রণকারী প্যারাসিমপ্যাথেটিক কেন্দ্র বহন করে।'
        ),
        sectionId: 'mechanism',
        color: '#fed7aa',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'white-matter-tracts',
        label: l('White Matter Tracts: DCML & Corticospinal', 'শ্বেতবস্তুর সংবেদী ও মোটর পথ'),
        description: l(
          'Long ascending and descending conduits. Dorsal columns (gracilis & cuneatus) carry fine touch/proprioception. Lateral corticospinal tract carries voluntary motor commands.',
          'লম্বা স্নায়ুপথসমূহ। ডর্সাল কলাম সূক্ষ্ম স্পর্শ ও কম্পনের অনুভূতি বহন করে। ল্যাটারাল কর্টিকোস্পাইনাল পথ মস্তিষ্ক থেকে হাত-পায়ে স্বেচ্ছাধীন নড়াচড়ার নির্দেশ পাঠায়।'
        ),
        details: l(
          'Spinothalamic tract carries pain and temperature, decussating in anterior white commissure. Corticospinal tract decussates in medullary pyramids (85–90%).',
          'স্পাইনোথ্যালামিক পথ ব্যথা ও তাপমাত্রা বহন করে এবং প্রবেশের পরপরই ক্রস করে। কর্টিকোস্পাইনাল পথ মেডুলায় ক্রস করে নিচে নেমে আসে।'
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
          heading: l('Spinal Cord Topography, Segments and Spinal Nerves', 'মেরুরজ্জুর অবস্থান, সেগমেন্ট ও স্পাইনাল স্নায়ু'),
          paragraphs: [
            l(
              'The spinal cord is a cylindrical, elongated bundle of nervous tissue that extends from the level of the foramen magnum at the base of the skull—where it is continuous with the medulla oblongata—down to the level of the L1 or L2 vertebral body in the average adult. Measuring approximately 42 to 45 cm in length and weighing roughly 30 grams, the cord occupies roughly the upper two-thirds of the bony vertebral canal, reflecting differential developmental growth rates between the neural cord and the vertebral column.',
              'মেরুরজ্জু বা স্পাইনাল কর্ড হলো একটি লম্বা বেলনাকার স্নায়বিক রজ্জু যা মাথার খুলির নিচের ফোরামেন ম্যাগনাম থেকে শুরু হয়ে মেডুলা অবলংগাটার সাথে যুক্ত থাকে এবং পূর্ণবয়স্কদের দেহে ১ম বা ২য় লাম্বার কশেরুকা বরাবর শেষ হয়। প্রায় ৪২ থেকে ৪৫ সেন্টিমিটার লম্বা এবং ৩০ গ্রাম ওজনের এই রজ্জুটি মেরুদণ্ডের হাড়ের খালের ওপরের দুই-তৃতীয়াংশ স্থান দখল করে থাকে, কারণ শৈশবে কঙ্কালের বৃদ্ধির গতি স্নায়ুর বৃদ্ধির চেয়ে বেশি হয়।'
            ),
            l(
              'Along its length, the spinal cord is organized into 31 physiological segments defined by the origin of 31 pairs of spinal nerves: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, and 1 coccygeal. Each spinal nerve is formed by the union of an anterior (ventral) motor root emerging from the anterior cord surface and a posterior (dorsal) sensory root bearing a swelling known as the dorsal root ganglion (DRG), uniting just distal to the ganglion within or near the intervertebral foramen.',
              'মেরুরজ্জুটি ৩১টি কার্যকরী সেগমেন্টে বিভক্ত যা থেকে ৩১ জোড়া স্পাইনাল স্নায়ু বের হয়: ৮ জোড়া সারভাইকাল, ১২ জোড়া থোরাসিক, ৫ জোড়া লাম্বার, ৫ জোড়া স্যাক্রাল এবং ১ জোড়া কক্সিজিয়াল স্নায়ু। প্রতিটি স্নায়ু একটি সামনের মোটর মূল এবং একটি পেছনের সংবেদী মূলের মিলনে তৈরি হয়; পেছনের মূলে একটি স্ফীত ডর্সাল রুট গ্যাংলিয়ন (DRG) থাকে যা সংবেদী স্নায়ুর কোষদেহ বহন করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Meningeal Hierarchy, Spaces and Lumbar Puncture', 'মেনিনজেসের তিন স্তর, স্থানসমূহ এবং লাম্বার পাংচার'),
          paragraphs: [
            l(
              'The spinal cord is enveloped and protected from mechanical shear by three concentric fibroelastic sheets called the spinal meninges. The outermost layer is the thick, dense fibrous dura mater (pachymeninx), which forms a tubular dural sac anchored rostrally at the foramen magnum and terminating caudally at the level of the S2 vertebra. Outside the dura lies the epidural space, a true anatomical space containing protective adipose tissue and the extensive internal vertebral venous plexus of Batson.',
              'মেরুরজ্জুটি ঘর্ষণ ও বাইরের আঘাত থেকে রক্ষা পাওয়ার জন্য মেনিনজেস নামক তিনটি সমকেন্দ্রিক তন্তুময় পর্দা দ্বারা আবৃত থাকে। সবচেয়ে বাইরের শক্ত স্তরটি হলো ডুরা মেটার, যা একটি লম্বা নলের মতো তৈরি হয়ে ফোরামেন ম্যাগনাম থেকে স্যাক্রাল ২ (S2) কশেরুকা পর্যন্ত বিস্তৃত থাকে। ডুরার বাইরে এপিডুরাল স্পেস নামক একটি খাঁটি স্থান থাকে যা চর্বি এবং ভালভহীন ব্যাটসনের শিরার জালিকা দ্বারা পূর্ণ থাকে।'
            ),
            l(
              'Deep to the dura is the avascular arachnoid mater, separated from the underlying pia mater by the subarachnoid space containing cerebrospinal fluid (CSF) and fine arachnoid trabeculae. Because the adult spinal cord ends at L1–L2 while the dural-arachnoid sac continues to S2, an expansive CSF-filled reservoir is created below the cord termed the lumbar cistern. Clinicians exploit this anatomical safety margin during lumbar puncture (spinal tap) by introducing a needle at the L3–L4 or L4–L5 interspinous space without risking spinal cord injury.',
              'ডুরার নিচে থাকে পাতলা অ্যারাকনয়েড মেটার এবং এর নিচে সাবঅ্যারাকনয়েড গহ্বর যা সিএসএফ তরল বহন করে। যেহেতু পূর্ণবয়স্কদের মেরুরজ্জু L1–L2 তে শেষ হয়ে যায় কিন্তু সিএসএফ ভর্তি থলিটি S2 পর্যন্ত বিস্তৃত থাকে, তাই নিচে লাম্বার সিস্টার্ন নামক এক নিরাপদ তরলের আধার তৈরি হয়। ডাক্তাররা L3–L4 বা L4–L5 কশেরুকার মাঝখান দিয়ে সুঁই ঢুকিয়ে অত্যন্ত নিরাপদে মেরুরজ্জুর কোনো ক্ষতি না করে সিএসএফ পরীক্ষা বা অ্যানেস্থেসিয়ার ওষুধ প্রয়োগ করেন।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Monosynaptic and Polysynaptic Spinal Reflex Arcs', 'মোনোসাইন্যাপটিক ও পলিসাইন্যাপটিক স্পাইনাল প্রতিবর্ত চাপ'),
          paragraphs: [
            l(
              'The spinal cord functions not only as a signal transit highway but also as an autonomous reflex processing center. The simplest motor reflex is the monosynaptic stretch reflex (such as the patellar or Achilles tendon reflex). Tapping a muscle tendon rapidly stretches intrafusal fibers within neuromuscular spindles, activating primary type Ia sensory afferents that enter the dorsal horn and form direct excitatory chemical synapses onto alpha-motor neurons in the anterior horn.',
              'মেরুরজ্জু কেবল সংকেত যাতায়াতের পথ হিসেবেই নয়, বরং স্বয়ংক্রিয় প্রতিবর্ত ক্রিয়া বা রিফ্লেক্স নিয়ন্ত্রণের স্বাধীন কেন্দ্র হিসেবেও কাজ করে। সবচেয়ে সহজ প্রতিবর্ত ক্রিয়া হলো মোনোসাইন্যাপটিক স্ট্রেচ রিফ্লেক্স (যেমন হাঁটুর প্যাজেলার রিফ্লেক্স)। টেনডনে আঘাত করলে পেশীর স্পিন্ডল প্রসারিত হয় এবং টাইপ Ia সংবেদী স্নায়ুর মাধ্যমে সংকেত সরাসরি মেরুরজ্জুর সামনের শিং-এর আলফা মোটর নিউরনে গিয়ে তৎক্ষণাৎ পেশী সংকুচিত করায়।'
            ),
            l(
              'Concurrently, reciprocal inhibition occurs through spinal interneurons: collateral branches of the Ia afferent stimulate inhibitory interneurons (Ia interneurons) that suppress alpha-motor neurons innervating antagonist flexor muscles, preventing opposing resistance. Polysynaptic withdrawal reflexes (flexor reflex) engage multiple segmental interneuronal chains to withdraw a limb from noxious stimuli while crossed extensor reflexes maintain postural balance on the contralateral limb.',
              'একই সাথে পারস্পরিক প্রতিরোধের মাধ্যমে বিপরীত পেশীর নড়াচড়া থামানো হয়: সংবেদী স্নায়ুটি একটি প্রতিরোধক ইন্টারনিউরনকেও উদ্দীপিত করে যা বিপরীতমুখী ফ্লেক্সর পেশীর মোটর নিউরনকে নিষ্ক্রিয় করে দেয়, ফলে কোনো বাধা ছাড়াই পা সহজে সোজা হতে পারে। ব্যথাদায়ক কোনো কিছুতে পা লাগলে পলিসাইন্যাপটিক রিফ্লেক্সের মাধ্যমে পুরো পা দ্রুত গুটিয়ে নেওয়া হয় এবং শরীরের ভারসাম্য বজায় রাখতে অপর পা শক্ত হয়ে মাটিতে ভর দেয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Sensory Dermatomes and Motor Myotomes', 'সংবেদী ডার্মাটোম এবং চেষ্টীয় মোটর মায়োটোম'),
          paragraphs: [
            l(
              'The segmental organization of the 31 spinal cord pairs maps the entire somatic body into specific cutaneous sensory dermatomes and functional motor myotomes. A dermatome represents the strip of skin innervated by sensory fibers arising from a single spinal nerve root. Clinically crucial sensory landmarks include C6 (thumb), T4 (nipples), T10 (umbilicus), L4 (medial malleolus and knee), and S1 (lateral foot margin and little toe).',
              '৩১ জোড়া স্পাইনাল স্নায়ুর ক্রমান্বয়ে সাজানো বিন্যাস সারা শরীরের ত্বককে নির্দিষ্ট সংবেদী ডার্মাটোম এবং পেশীগুলোকে মোটর মায়োটোমে বিভক্ত করে। একটি একক স্পাইনাল স্নায়ুমূল দ্বারা সংবেদী সংকেত পাওয়া ত্বকের অংশকে ডার্মাটোম বলে। ক্লিনিক্যাল পরীক্ষার গুরুত্বপূর্ণ ডার্মাটোমের মধ্যে রয়েছে C6 (হাতের বৃদ্ধাঙ্গুলি), T4 (স্তনবৃন্ত), T10 (নাভি), L4 (হাঁটু ও গোড়ালির ভেতরের অংশ) এবং S1 (পায়ের কনিষ্ঠ আঙুল ও বাইরের প্রান্ত)।'
            ),
            l(
              'Similarly, myotomes define muscle groups innervated predominantly by motor axons from a single spinal segment. Testing key motor levels—such as deltoid abduction (C5), elbow flexion (C6), elbow extension (C7), finger abduction (T1), hip flexion (L2), knee extension (L3/L4), ankle dorsiflexion (L4/L5), and ankle plantarflexion (S1)—allows the clinician to localize acute spinal root compressions or spinal cord injury levels with anatomical precision.',
              'একইভাবে একক স্পাইনাল সেগমেন্ট থেকে মোটর সংকেত পাওয়া পেশীর সমষ্টিকে মায়োটোম বলা হয়। নির্দিষ্ট পেশীর শক্তি পরীক্ষা করে ডাক্তাররা মেরুদণ্ডের আঘাতের সঠিক স্থান নির্ণয় করেন: যেমন ডেল্টয়েড হাত তোলা (C5), কনুই বাঁকানো (C6), কনুই সোজা করা (C7), আঙ্গুল ফাঁক করা (T1), কোমর বাঁকানো (L2), হাঁটু সোজা করা (L3/L4), এবং পায়ের গোড়ালি বাঁকানো ও সোজা করা (L5 ও S1)।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Spinal Trauma and Clinical Cord Syndromes', 'মেরুরজ্জুর ট্রমা ও ক্লিনিক্যাল কর্ড সিন্ড্রোমসমূহ'),
          paragraphs: [
            l(
              'Traumatic spinal cord injury triggers acute spinal shock characterized by temporary flaccid paralysis, total areflexia, and loss of autonomic tone below the lesion level, lasting days to weeks. As spinal shock resolves, hyperreflexia, spasticity, and positive Babinski signs emerge due to loss of descending corticospinal inhibition. Complete transection leaves permanent loss of all voluntary motor function and conscious sensation below the injured segment.',
              'মেরুরজ্জুতে তীব্র আঘাত লাগার পর প্রাথমিক পর্যায়ে স্পাইনাল শক দেখা দেয় যেখানে আঘাতের নিচের সমস্ত পেশী সম্পূর্ণ নিস্তেজ হয়ে যায়, কোনো রিফ্লেক্স থাকে না এবং রক্তচাপ মারাত্মকভাবে কমে যায়। কয়েক সপ্তাহ পর এই শক কেটে গেলে মস্তিষ্ক থেকে আসা নিয়ন্ত্রণের অভাবে পেশীগুলো অতিরিক্ত টানটান শক্ত হয়ে ওঠে এবং অস্বাভাবিক ব্যাবিলনস্কি রিফ্লেক্স দেখা দেয়। মেরুরজ্জু সম্পূর্ণ ছিঁড়ে গেলে আঘাতের নিচের সমস্ত নড়াচড়া ও অনুভূতি চিরতরে হারিয়ে যায়।'
            ),
            l(
              'Incomplete cord syndromes exhibit distinct patterns dictated by white matter tract topography. Central cord syndrome, typically occurring in elderly patients with cervical spondylosis during hyperextension trauma, damages the centrally positioned upper limb fibers of the corticospinal tract, producing severe bilateral arm weakness with relative sparing of lower extremity motor function.',
              'অসম্পূর্ণ কর্ড আঘাতের ক্ষেত্রে স্নায়ুপথের অবস্থান অনুযায়ী ভিন্ন ভিন্ন লক্ষণ দেখা দেয়। সেন্ট্রাল কর্ড সিন্ড্রোমে সাধারণত বয়স্কদের ঘাড় পেছনে অতিরিক্ত বাঁকা হয়ে গেলে স্পাইনাল কর্ডের মাঝখানের অংশ ক্ষতিগ্রস্ত হয়; এতে হাতের পেশীগুলো মারাত্মক দুর্বল হয়ে পড়ে অথচ পায়ের পেশীর শক্তি আশ্চর্যজনকভাবে প্রায় স্বাভাবিক থাকে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary & Spinal Cord Core Essentials', 'সারসংক্ষেপ ও মেরুরজ্জুর মৌলিক প্রয়োজনীয় বিষয়'),
          paragraphs: [
            l(
              'The spinal cord provides both the anatomical conduits connecting the brain to peripheral end-organs and local segmental circuitry for protective reflexes. Exact mastery of internal gray matter laminations, sensory and motor white matter columns, and segmental dermatome/myotome mapping provides the indispensable foundation for clinical neurology and emergency spine trauma triage.',
              'মেরুরজ্জু মস্তিষ্ক থেকে সারা শরীরে সংকেত আনা-নেওয়ার প্রধান রাজপথ হিসেবে কাজ করার পাশাপাশি জরুরি প্রতিবর্ত ক্রিয়াগুলো নিজেই সম্পাদন করে। এর ধূসর বস্তুর স্তরবিন্যাস, সংবেদী ও মোটর শ্বেতবস্তুর পথ এবং ডার্মাটোম-মায়োটোমের মানচিত্র জানা থাকলে খুব সহজেই স্নায়বিক আঘাতের গভীরতা ও সঠিক অবস্থান নির্ণয় করা সম্ভব হয়।'
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
          heading: l('Embryological Cord Development and Vertebral Level Discrepancy', 'ভ্রূণীয় মেরুরজ্জুর বিকাশ ও কশেরুকার স্তরের পার্থক্য'),
          paragraphs: [
            l(
              'The spinal cord develops from the caudal neural tube posterior to the fourth pair of somites. Longitudinal proliferation creates the lateral walls, divided by the shallow sulcus limitans into dorsal alar plates (giving rise to sensory dorsal horns) and ventral basal plates (giving rise to motor ventral horns). The central canal represents the persisting lumen of the embryonic neural tube, lined by ciliated cuboidal ependymal cells.',
              'মেরুরজ্জু ভ্রূণের নিউরাল টিউবের পেছনের অংশ থেকে তৈরি হয়। এর ভেতরের খাঁজটি (সালকাস লিমিটান্স) প্রাচীরকে দুটি অংশে ভাগ করে: পেছনের অ্যালার প্লেট যা সংবেদী ডর্সাল হর্ন তৈরি করে এবং সামনের ব্যাসাল প্লেট যা মোটর ভেন্ট্রাল হর্ন তৈরি করে। ভ্রূণীয় নিউরাল টিউবের মাঝের নালিটি পরিণত বয়সে কেন্দ্রীয় সেন্ট্রাল ক্যানেল হিসেবে থেকে যায় যার ভেতরে সিলিয়াযুক্ত এপেনডাইমাল কোষ সিএসএফ সঞ্চালনে সাহায্য করে।'
            ),
            l(
              'During early fetal life (up to the third month), the spinal cord extends the entire length of the embryo, with spinal roots exiting intervertebral foramina horizontally. Because the bony vertebral column and dura mater grow much faster than the spinal cord during late gestation and infancy, the cord ends progressively higher: at L3 at birth and reaching its definitive adult level at the L1–L2 intervertebral disc by adulthood. This developmental discrepancy creates the cauda equina.',
              'গর্ভকালীন তৃতীয় মাস পর্যন্ত মেরুরজ্জু পুরো কঙ্কালের সমান লম্বা থাকে এবং স্নায়ুগুলো সোজা অনুভূমিকভাবে বের হয়। কিন্তু পরবর্তীতে কঙ্কালের বৃদ্ধির গতি স্নায়ুতন্ত্রের চেয়ে অনেক বেশি হওয়ায় মেরুরজ্জুর নিচের প্রান্তটি ক্রমশ ওপরের দিকে সরে যায়: জন্মের সময় এটি L3 কশেরুকায় থাকে এবং প্রাপ্তবয়স্ক অবস্থায় L1-L2 কশেরুকা বরাবর স্থির হয়। কঙ্কাল ও মেরুরজ্জুর এই বৃদ্ধির অসামঞ্জস্যের কারণেই লম্বা লম্বা স্নায়ুর শিকড়গুলো নিচে ঝুলে কডা ইকুইনা তৈরি করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Denticulate Ligaments, Filum Terminale and Subarachnoid Spaces', 'ডেন্টিকুলেট লিগামেন্ট, ফাইলাম টার্মিনাল ও সাবঅ্যারাকনয়েড স্থান'),
          paragraphs: [
            l(
              'The spinal cord is suspended within the cerebrospinal fluid of the dural-arachnoid sheath by twenty-one pairs of lateral, tooth-like pial reflections known as denticulate ligaments (ligamenta denticulata). These collagenous ribbons extend from the lateral pial margins between dorsal and ventral rootlets, piercing the arachnoid to anchor firmly into the inner dura mater, mechanically buffering the cord against torsional and oscillatory forces.',
              'মেরুরজ্জুটি সাবঅ্যারাকনয়েড তরলের ভেতরে নিরাপদে ভেসে থাকার জন্য এর দুই পাশে ২১ জোড়া দাঁতের মতো সূক্ষ্ম লিগামেন্ট থাকে যাকে ডেন্টিকুলেট লিগামেন্ট বলে। পিয়া মেটার থেকে বের হওয়া এই শক্ত তন্তুর ফিতাগুলো সংবেদী ও মোটর স্নায়ুর মাঝখান দিয়ে গিয়ে ডুরা মেটারের ভেতরের গায়ে শক্তভাবে আটকে থাকে, যা হাঁটাচলা বা ঝাঁকুনির সময় মেরুরজ্জুকে মোচড় খাওয়া ও আঘাত থেকে রক্ষা করে।'
            ),
            l(
              'Inferiorly, the conus medullaris tapers into the filum terminale. The filum terminale internum is a slender, 15 cm pial filament descending through the lumbar cistern to the fundus of the dural sac at S2. Piercing the dura and arachnoid, it acquires an outer dural investment to continue as the filum terminale externum (coccygeal ligament), which fuses with the dorsal coccygeal periosteum, serving as a vertical stabilizing tether for the entire spinal cord.',
              'নিচের দিকে কোনাস মেডুলারিস সরু হয়ে ফাইলাম টার্মিনাল নামক সূক্ষ্ম দড়িতে রূপ নেয়। এর ওপরের ১৫ সেমি অংশ (ফাইলাম টার্মিনাল ইন্টারনাম) পিয়া মেটার দিয়ে গঠিত হয়ে লাম্বার সিস্টার্নের মধ্য দিয়ে S2 পর্যন্ত যায়। এরপর এটি ডুরা মেটারের শক্ত আবরণ নিয়ে ফাইলাম টার্মিনাল এক্সটারনাম হিসেবে কক্সিক্স বা লেজ-হাড়ের সাথে যুক্ত হয় এবং পুরো মেরুরজ্জুকে সোজা ও টানটান রাখতে নোঙর হিসেবে কাজ করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Spinal Gray Matter Microorganization and Rexed Laminae', 'স্পাইনাল ধূসর বস্তুর অণুগঠন এবং রেক্সেড ল্যামিনা'),
          paragraphs: [
            l(
              'In cross-section, the spinal cord reveals a butterfly- or H-shaped central gray matter core surrounded by peripherally arranged white matter columns. The gray matter is partitioned into paired posterior (dorsal) horns, paired anterior (ventral) horns, and intermediate zones (with lateral horns present from T1 to L2). Bror Rexed revolutionized spinal cytoarchitecture by demonstrating that neurons are organized into ten functional horizontal layers termed Rexed laminae (I through X).',
              'মেরুরজ্জুর প্রস্থচ্ছেদে দেখা যায় ভেতরের প্রজাপতি বা এইচ-আকৃতির ধূসর বস্তু বাইরের সাদা শ্বেতবস্তু দ্বারা পরিবেষ্টিত। ধূসর বস্তুটি পেছনের সংবেদী শিং, সামনের মোটর শিং এবং T1 থেকে L2 কশেরুকায় ল্যাটারাল সিমপ্যাথেটিক শিং নিয়ে গঠিত। বিজ্ঞানী ব্রোর রেক্সেড এই ধূসর বস্তুকে কোষের বৈশিষ্ট্যের ওপর ভিত্তি করে ১০টি সুনির্দিষ্ট অনুভূমিক স্তরে (ল্যামিনা I থেকে X) ভাগ করেছেন।'
            ),
            l(
              'Lamina I (posteromarginal zone) and Lamina II (substantia gelatinosa of Rolando) cap the dorsal horn, receiving primary nociceptive and thermoreceptive C- and A-delta fibers and gating pain transmission via substance P and enkephalins. Laminae III through VI process tactile information. Lamina VII spans the intermediate zone, containing the nucleus dorsalis of Clarke (C8–L3) and the intermediolateral sympathetic horn (T1–L2). Lamina IX in the anterior horn contains large multipolar alpha-motor neurons innervating extrafusal skeletal muscle fibers.',
              'পেছনের শিং-এর ল্যামিনা I এবং ল্যামিনা II (সাবস্ট্যানশিয়া জেলাটিনোসা) ব্যথা ও তাপমাত্রার সংকেত গ্রহণ করে এবং ব্যথার তীব্রতা নিয়ন্ত্রণ করে। ল্যামিনা III থেকে VI স্পর্শ অনুভূতি প্রক্রিয়াজাত করে। ল্যামিনা VII-এ ক্লার্কের নিউক্লিয়াস এবং সিমপ্যাথেটিক স্নায়ুর কেন্দ্র থাকে। আর সামনের শিং-এর ল্যামিনা IX-এ বিশাল আলফা মোটর নিউরনগুলো অবস্থান করে যা সরাসরি কঙ্কালপেশীতে সংকেত পাঠিয়ে হাত-পা সচল রাখে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Ascending Sensory and Descending Motor White Matter Tracts', 'উর্ধ্বগামী সংবেদী এবং নিম্নগামী মোটর শ্বেতবস্তুর পথসমূহ'),
          paragraphs: [
            l(
              'The peripheral white matter is organized into three paired funiculi: posterior, lateral, and anterior columns. The posterior funiculus is dedicated exclusively to the Dorsal Column-Medial Lemniscal (DCML) system: the medially positioned fasciculus gracilis carries fine touch, vibratory sense, and conscious proprioception from the lower limbs (below T6), while the lateral fasciculus cuneatus carries inputs from the upper limbs and thorax (above T6). These fibers ascend ipsilaterally to synapse and decussate in the lower medulla.',
              'মেরুরজ্জুর বাইরের সাদা শ্বেতবস্তু তিনটি কলামে বিভক্ত: পেছনের, পাশের এবং সামনের কলাম। পেছনের কলামটি সম্পূর্ণভাবে ডর্সাল কলাম সংবেদী পথের জন্য নিবেদিত: ভেতরের ফ্যাসিকুলাস গ্রাসিলিস শরীরের নিচের অংশ (T6-এর নিচে) থেকে এবং বাইরের ফ্যাসিকুলাস কিউনিয়েটাস ওপরের অংশ (T6-এর ওপরে) থেকে সূক্ষ্ম স্পর্শ, কম্পন ও শরীরের ভারসাম্য অনুভূতি সরাসরি মেডুলা পর্যন্ত পৌঁছে দেয়।'
            ),
            l(
              'The lateral funiculus houses the lateral corticospinal tract, the premier voluntary motor pathway whose axons decussated in the medullary pyramids, as well as the anterolateral spinothalamic system (pain, temperature, crude touch). Spinothalamic axons arise from dorsal horn neurons and decussate obliquely across the anterior white commissure within 1 to 2 spinal segments of entry before ascending into the contralateral anterolateral quadrant toward the ventral posterolateral (VPL) nucleus of the thalamus.',
              'পাশের কলামে অবস্থান করে প্রধান ঐচ্ছিক মোটর পথ ল্যাটারাল কর্টিকোস্পাইনাল ট্র্যাক্ট যা মেডুলার পিরামিড থেকে ক্রস করে নামে, পাশাপাশি থাকে ব্যথা ও তাপমাত্রার স্পাইনোথ্যালামিক পথ। স্পাইনোথ্যালামিক স্নায়ুতন্তুগুলো মেরুরজ্জুতে ঢোকার ১-২ সেগমেন্টের মধ্যেই উল্টো পাশে ক্রস করে এবং ওপরের থ্যালামাসে গিয়ে মস্তিষ্কের কর্টেক্সে ব্যথার খবর পৌঁছায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Brown-Séquard Hemisection and Dissociated Sensory Loss', 'ক্লিনিক্যাল ব্রাউন-সেকোয়ার্ড অর্ধচ্ছেদ ও সংবেদী অনুভূতির বৈপরীত্য'),
          paragraphs: [
            l(
              'Brown-Séquard syndrome results from anatomical hemisection of the spinal cord (e.g., penetrative stab wound or asymmetric compressive extramedullary tumor). Damage to the ipsilateral lateral corticospinal tract produces spastic motor paresis, hyperreflexia, and an extensor plantar response below the lesion, accompanied by flaccid lower motor neuron paralysis at the exact segmental level due to ventral horn destruction.',
              'ব্রাউন-সেকোয়ার্ড সিন্ড্রোম মেরুরজ্জুর ঠিক অর্ধেক অংশ কেটে গেলে বা মারাত্মক ক্ষতিগ্রস্ত হলে সৃষ্টি হয় (যেমন ছুরিকাঘাত বা একপাশের টিউমার)। একই পাশের ল্যাটারাল কর্টিকোস্পাইনাল পথ ক্ষতিগ্রস্ত হওয়ায় আঘাতের নিচের অংশে মোটর প্যারালাইসিস ও অতিরিক্ত টানটান রিফ্লেক্স দেখা দেয়, আর আঘাতের নির্দিষ্ট সেগমেন্টে সামনের হর্নের মোটর নিউরন নষ্ট হওয়ায় সেই নির্দিষ্ট পেশীগুলো পুরোপুরি নিস্তেজ হয়ে যায়।'
            ),
            l(
              'Sensory deficits demonstrate pathognomonic functional dissociation: damage to the ipsilateral fasciculus gracilis and cuneatus causes ipsilateral loss of discriminative touch, vibratory sense, and position awareness below the lesion. In contrast, interruption of the ascending spinothalamic tract produces loss of pain and temperature sensation on the contralateral side of the body starting 1 to 2 segments below the lesion, because second-order fibers decussate near their entry.',
              'সংবেদী অনুভূতির ক্ষেত্রে এক চমৎকার বৈপরীত্য তৈরি হয়: একই পাশের ডর্সাল কলাম নষ্ট হওয়ায় আঘাতের সেই পাশেই সূক্ষ্ম স্পর্শ, কম্পন এবং শরীরের ভারসাম্য অনুভূতি চিরতরে হারিয়ে যায়। পক্ষান্তরে বিপরীত পাশের ব্যথা ও গরম-ঠান্ডার অনুভূতি বন্ধ হয়ে যায়, কারণ স্পাইনোথ্যালামিক স্নায়ুপথগুলো মেরুরজ্জুতে ঢোকার পরপরই উল্টো পাশে ক্রস করে ওপরের দিকে ওঠে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Ascending/Descending Track Topography & Somatotopic Maps', 'উর্ধ্বগামী ও নিম্নগামী স্নায়ুপথের অবস্থান ও সোমাটোটোপিক মানচিত্র'),
          paragraphs: [
            l(
              'The white matter columns of the spinal cord exhibit strict internal somatotopic laminar organization. Within both the dorsal columns and lateral corticospinal tracts, cervical fibers course most medially while sacral fibers are displaced to the outermost lateral perimeter. Recognizing these somatotopic gradients enables precise anatomical localization of extrinsic compressive masses versus intrinsic intramedullary cord lesions.',
              'মেরুরজ্জুর সাদা শ্বেতবস্তুর স্নায়ুপথগুলোতে শরীরের বিভিন্ন অঙ্গের তন্তুগুলো অত্যন্ত সুশৃঙ্খলভাবে স্তরে স্তরে সাজানো থাকে যাকে সোমাটোটোপিক বিন্যাস বলে। ডর্সাল কলাম এবং কর্টিকোস্পাইনাল ট্র্যাকে ঘাড়ের তন্তুগুলো ভেতরের দিকে থাকে এবং পা ও স্যাক্রামের তন্তুগুলো সবচেয়ে বাইরের প্রান্তে অবস্থান করে। এই শারীরস্থানিক বিন্যাস বোঝার মাধ্যমেই একজন নিউরোলজিস্ট টিউমারটি ভেতর থেকে নাকি বাইরে থেকে চাপ দিচ্ছে তা নিশ্চিতভাবে নির্ণয় করতে পারেন।'
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
          heading: l('Spinal Cord Vascular Territories and Adamkiewicz Perfusion', 'মেরুরজ্জুর রক্ত সংবহন অঞ্চল এবং অ্যাডামকিউইচ ধমনী'),
          paragraphs: [
            l(
              'The arterial supply of the spinal cord is partitioned between an unpaired anterior spinal artery and paired posterior spinal arteries. The anterior spinal artery originates from the vertebral arteries and runs in the anterior median fissure, supplying the anterior two-thirds of the spinal cord parenchyma—including both anterior gray horns, both lateral corticospinal tracts, and both spinothalamic tracts. However, its calibre tapers in the midthoracic region (T4–T8), establishing a critical watershed zone vulnerable to ischemic hypoperfusion.',
              'মেরুরজ্জুর রক্ত সঞ্চালন মূলত একটি অ্যান্টিরিয়র স্পাইনাল ধমনী এবং দুটি পোস্টেরিয়র স্পাইনাল ধমনী দ্বারা নিয়ন্ত্রিত হয়। অ্যান্টিরিয়র স্পাইনাল ধমনীটি সামনের খাঁজ দিয়ে নেমে মেরুরজ্জুর সামনের দুই-তৃতীয়াংশ অঞ্চলকে রক্ত দেয় যেখানে মোটর পথ এবং ব্যথা-তাপমাত্রার পথ থাকে। তবে বুকের মাঝামাঝি অঞ্চলে (T4–T8) ধমনীটি খুব সরু হয়ে যায়, ফলে হঠাৎ রক্তচাপ কমলে এই অংশটি সবার আগে রক্তস্বল্পতায় ক্ষতিগ্রস্ত হয়।'
            ),
            l(
              'In the lower thoracic and lumbar segments, the anterior spinal artery receives critical reinforcement from the great anterior radicular artery of Adamkiewicz (arteria radicularis magna), which typically arises from a left posterior intercostal or lumbar artery between T9 and L1. Surgical clamping of the descending thoracic aorta during aneurysm repair or endovascular stent graft deployment can occlude the artery of Adamkiewicz, causing acute anterior spinal artery syndrome with sudden flaccid paraplegia and loss of pain/temperature while preserving proprioception.',
              'শরীরের নিচের অংশে এই ধমনীটিকে রক্ত দিয়ে বাঁচিয়ে রাখে অ্যাডামকিউইচের বিশেষ বড় রেডিকুলার ধমনী যা সাধারণত T9 থেকে L1 কশেরুকার বাম পাশ থেকে আসে। মহাধমনীর কোনো অপারেশনের সময় ভুলবশত বা অনিবার্য কারণে এই ধমনী বন্ধ হয়ে গেলে মেরুরজ্জুর রক্ত বন্ধ হয়ে যায় এবং রোগীর দুই পা চিরতরে অবশ হয়ে যায় অথচ স্পর্শ ও কম্পন অনুভূতি সম্পূর্ণ অক্ষত থাকে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Differentiating Conus Medullaris from Cauda Equina Syndromes', 'কোনাস মেডুলারিস বনাম কডা ইকুইনা সিন্ড্রোমের পার্থক্য নির্ণয়'),
          paragraphs: [
            l(
              'Differentiating acute compression of the conus medullaris from that of the cauda equina is a critical clinical emergency. Conus medullaris syndrome results from lesions at the L1–L2 vertebral level affecting the distal tip of the cord (sacral segments S3–Co). Because it involves central nervous system gray and white matter, symptoms present acutely with symmetric bilateral saddle anesthesia (S3–S5), early and severe bowel/bladder incontinence with lax anal sphincter tone, and preserved motor strength in the lower limbs.',
              'কোনাস মেডুলারিস এবং কডা ইকুইনায় স্নায়ু চেপে যাওয়ার পার্থক্য নির্ণয় করা চিকিৎসকদের জন্য এক জরুরি পরীক্ষা। কোনাস মেডুলারিস সিন্ড্রোম L1–L2 কশেরুকা বরাবর কেন্দ্রীয় মেরুরজ্জুর ক্ষতি করে; এতে দুই পাশের স্পর্শ অনুভূতি একইভাবে হারায় এবং শুরুতেই প্রস্রাব-পায়খানার নিয়ন্ত্রণ সম্পূর্ণ চলে যায়, যদিও পায়ের পেশীর জোর বেশিরভাগ সময় ঠিক থাকে।'
            ),
            l(
              'In contrast, cauda equina syndrome involves mechanical compression of the peripheral lumbosacral nerve roots within the lumbar cistern below L2 (frequently by massive central disc herniation at L4–L5 or L5–S1). As a lower motor neuron peripheral nerve lesion, it produces asymmetric, severe radicular leg pain, flaccid lower extremity paresis with absent ankle jerks, asymmetric sensory loss, and relatively later onset of urinary retention with overflow incontinence.',
              'পক্ষান্তরে কডা ইকুইনা সিন্ড্রোম ঘটে L2 কশেরুকার নিচে যেখানে ডিস্ক সরে গিয়ে ভাসমান প্রান্তীয় স্নায়ুর মূলগুলোকে চেপে ধরে। যেহেতু এটি প্রান্তীয় স্নায়ুর সমস্যা, তাই এতে দুই পায়ে অসম তীব্র ব্যথা হয়, পায়ের পেশী অবশ হয়ে পায়ের রিফ্লেক্স হারিয়ে যায় এবং প্রস্রাব আটকে গিয়ে ফোঁটায় ফোঁটায় ঝরতে থাকে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-part schematic of the spinal cord: topography and lumbar cistern, meningeal protective envelopes, internal gray laminar H-architecture, and long sensory/motor white matter tracts.',
      'মেরুরজ্জুর ৪টি সহজলভ্য স্তর: অবস্থান ও লাম্বার সিস্টার্ন, মেনিনজেসের তিন স্তরীয় সুরক্ষা, ভেতরের এইচ-আকৃতির ধূসর বস্তু এবং দীর্ঘ সংবেদী ও মোটর শ্বেতবস্তুর পথ।'
    ),
    steps: [
      l(
        '1. The spinal cord extends from the foramen magnum to the conus medullaris at L1–L2, tapering into the cauda equina.',
        '১. মেরুরজ্জুটি ফোরামেন ম্যাগনাম থেকে L1–L2 কশেরুকা পর্যন্ত বিস্তৃত হয়ে কডা ইকুইনা তৈরি করে শেষ হয়।'
      ),
      l(
        '2. Dura mater and arachnoid mater enclose the CSF-filled lumbar cistern down to S2, enabling safe lumbar puncture.',
        '২. ডুরা ও অ্যারাকনয়েড মেটার S2 পর্যন্ত সিএসএফ ভর্তি লাম্বার সিস্টার্ন গঠন করে যা নিরাপদ সুঁই ফোটানোর স্থান।'
      ),
      l(
        '3. Posterior gray horns receive sensory inputs, while anterior gray horns house alpha-motor neurons commanding muscles.',
        '৩. পেছনের ধূসর শিং সংবেদী তথ্য গ্রহণ করে এবং সামনের শিং-এর মোটর নিউরনগুলো পেশী সঞ্চালনের নির্দেশ দেয়।'
      ),
      l(
        '4. Dorsal columns ascend uncrossed to the medulla, whereas corticospinal motor and spinothalamic tracts cross to opposite sides.',
        '৪. ডর্সাল কলাম সোজাসুজি মস্তিষ্কে ওঠে, কিন্তু মোটর এবং ব্যথা-তাপমাত্রার পথগুলো বিপরীত পাশে ক্রস করে চলাচল করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 32-year-old security guard is stabbed in the back with a thin blade, sustaining a precise right-sided hemisection of the spinal cord at the level of the T8 vertebra. On detailed neurological examination, what pattern of sensory and motor deficits below the T8 level will this patient exhibit?',
      'ছুরিকাঘাতে ৩২ বছর বয়সী এক ব্যক্তির T8 কশেরুকা বরাবর মেরুরজ্জুর ডান পাশ সম্পূর্ণ কেটে আলাদা হয়ে গেল (Right-sided hemisection)। নিউরোলজিক্যাল পরীক্ষায় T8-এর নিচে রোগীর হাত-পায়ে কোন ধরণের লক্ষণ দেখা যাবে?'
    ),
    options: [
      l('Right-sided spastic paralysis, right-sided loss of fine touch/proprioception, and left-sided loss of pain and temperature sensation', 'ডান পায়ে পক্ষাঘাত ও সূক্ষ্ম স্পর্শ/কম্পন নষ্ট, এবং বাম পায়ে ব্যথা ও গরম-ঠান্ডার অনুভূতি বিলোপ'),
      l('Bilateral complete paralysis with preserved pain sensation', 'উভয় পায়ে সম্পূর্ণ পক্ষাঘাত কিন্তু ব্যথা স্বাভাবিক থাকা'),
      l('Left-sided spastic paralysis with right-sided loss of pain and temperature', 'বাম পায়ে পক্ষাঘাত এবং ডান পায়ে ব্যথা নষ্ট'),
      l('Right-sided loss of pain and temperature with intact motor strength bilaterally', 'ডান পায়ে ব্যথা নষ্ট এবং দুই পায়ে স্বাভাবিক শক্তি'),
    ],
    correctIndex: 0,
    explanation: l(
      'This presentation defines classic Brown-Séquard syndrome (spinal cord hemisection). Damage to the right lateral corticospinal tract causes ipsilateral (right-sided) upper motor neuron paralysis. Damage to the right dorsal column (fasciculus gracilis) causes ipsilateral (right-sided) loss of discriminative touch, vibration, and proprioception. Damage to the right spinothalamic tract causes contralateral (left-sided) loss of pain and temperature sensation starting 1 to 2 segments below the lesion, because spinothalamic fibers cross to the opposite side near their level of entry.',
      'এটি হলো ক্লাসিক ব্রাউন-সেকোয়ার্ড সিন্ড্রোম। ডান কর্টিকোস্পাইনাল পথ কাটার ফলে ডান পায়েই পক্ষাঘাত হবে; ডান ডর্সাল কলাম কাটার ফলে ডান পায়েই স্পর্শ ও কম্পন নষ্ট হবে; কিন্তু ডান স্পাইনোথ্যালামিক পথ কাটার ফলে বাম পায়ের (বিপরীত পাশের) ব্যথা ও তাপমাত্রা নষ্ট হবে, কারণ এই স্নায়ুগুলো মেরুরজ্জুর ভেতরে ঢোকার পরপরই উল্টো পাশে ক্রস করে ওপরে ওঠে।'
    ),
  },
}
