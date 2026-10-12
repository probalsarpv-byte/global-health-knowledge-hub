import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch12',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 12: The Nervous System and Nervous Tissue',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/12-introduction',
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
]

export const chapter16NeuralTissueLesson: LessonTopic = {
  id: 'topic.anatomy.neural-tissue',
  slug: 'neural-tissue',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('16 · Neural Tissue and Peripheral Nerves', '১৬ · স্নায়ু টিস্যু ও প্রান্তীয় স্নায়ু'),
  summary: l(
    'A comprehensive, cellular and molecular study of nervous tissue and peripheral neuroanatomy: neuronal morphology, axonal transport motors, glial specializations, the blood-brain barrier, peripheral nerve fascial sheaths, saltatory conduction, Wallerian degeneration, and demyelinating neuropathies.',
    'স্নায়ু টিস্যু ও প্রান্তীয় স্নায়ুর বিশদ কোষীয় ও আণবিক অধ্যয়ন: নিউরনের অঙ্গসংস্থান, অ্যাক্সন পরিবহন মোটর, নিউরোগ্লিয়ার বিশেষায়ন, রক্ত-মস্তিষ্ক প্রাচীর (BBB), প্রান্তীয় স্নায়ুর ফাসিয়া আবরণী, সল্টেটরি বিদ্যুৎ পরিবহন, ওয়ালারিয়ান অবক্ষয় এবং মায়েলিন ক্ষয়কারী স্নায়ুরোগ।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Contrast neuronal cellular domains (perikaryon, axon hillock, initial segment, telodendria) and differentiate anterograde kinesin from retrograde dynein fast axonal transport.',
      'নিউরনের কোষীয় অঞ্চলগুলো (কোষদেহ, অ্যাক্সন হিলক, ইনিশিয়াল সেগমেন্ট, টেলোডেনড্রিয়া) তুলনা করা এবং কাইনেসিন ও ডাইনিন প্রোটিনের অ্যাক্সোনাল পরিবহন প্রক্রিয়া পার্থক্য করতে পারা।'
    ),
    l(
      'Analyze the structural roles of central and peripheral neuroglia (astrocytes, oligodendrocytes, microglia, ependyma, Schwann cells) in myelination and blood-brain barrier maintenance.',
      'কেন্দ্রীয় ও প্রান্তীয় নিউরোগ্লিয়ার (অ্যাস্ট্রোসাইট, অলিগোডেনড্রোসাইট, মাইক্রোগ্লিয়া, এপেনডাইমা, সোয়ান কোষ) ভূমিকা এবং মায়েলিন গঠন ও রক্ত-মস্তিষ্ক প্রাচীর রক্ষায় তাদের অবদান বিশ্লেষণ করা।'
    ),
    l(
      'Delineate peripheral nerve fascial envelopes (epineurium, perineurium, endoneurium), classify nerve injuries under the Seddon framework, and evaluate Wallerian regeneration mechanics.',
      'প্রান্তীয় স্নায়ুর তিনটি ফাসিয়া স্তর (এপিনিউরিয়াম, পেরিনিউরিয়াম, এন্ডোনিউরিয়াম) চিহ্নিত করা, সেডনের স্নায়ু আঘাতের শ্রেণিবিভাগ এবং ওয়ালারিয়ান অবক্ষয় পরবর্তী স্নায়ু পুনর্জন্ম প্রক্রিয়া মূল্যায়ন করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.cells-tissues'],
  relatedTopicIds: ['topic.anatomy.cardiovascular'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch12', 'kandel-neuroscience-6e'],
    structure: ['openstax-ap2e-ch12', 'junqueira-histology-16e'],
    mechanism: ['guyton-hall-14e', 'kandel-neuroscience-6e'],
    integration: ['moore-anatomy-9e', 'kandel-neuroscience-6e'],
    practice: ['moore-anatomy-9e', 'guyton-hall-14e'],
    takeaways: ['openstax-ap2e-ch12', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Neuronal Architecture & Axonal Transport', 'ভূমিকা: নিউরনের গঠন ও অ্যাক্সোনাল পরিবহন'), sectionId: 'introduction' },
      { id: 'sec-glia', label: l('Neuroglia, Myelination & the Blood-Brain Barrier', 'নিউরোগ্লিয়া, মায়েলিন আবরণী ও রক্ত-মস্তিষ্ক প্রাচীর'), sectionId: 'structure' },
      { id: 'sec-nerve-sheaths', label: l('Peripheral Nerve Sheaths: Epi-, Peri- & Endoneurium', 'প্রান্তীয় স্নায়ুর আবরণী: এপি-, পেরি- ও এন্ডোনিউরিয়াম'), sectionId: 'mechanism' },
      { id: 'sec-synapse-action', label: l('Synaptic Transmission & Saltatory Electrogenesis', 'সাইন্যাপস সংকেত ও সল্টেটরি বিদ্যুৎ প্রবাহ'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Neuropathology: Demyelination & Seddon Injury', 'ক্লিনিক্যাল স্নায়ুরোগ: মায়েলিন ক্ষয় ও সেডন আঘাত'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary & Neural Tissue Glossary', 'সারসংক্ষেপ ও স্নায়ু টিস্যুর শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Nodes of Ranvier & Saltatory Conduction', 'র‌্যানভিয়ারের পর্ব ও সল্টেটরি সংকেত পরিবহন'),
        definition: l(
          'Periodic unmyelinated gaps (1–2 µm wide) along myelinated axons densely enriched with voltage-gated Na+ channels (Nav1.6, >1000/µm²); action potentials regenerate exclusively at these nodes, "jumping" intracellularly via electrotonic current flow to increase conduction velocity up to 120 m/s.',
          'মায়েলিনযুক্ত স্নায়ুতন্তুর মাঝে মাঝে অবস্থিত ১-২ মাইক্রোমিটারের আবরণহীন খাঁজ যেখানে প্রচুর পরিমাণে ভোল্টেজ-গেটেড সোডিয়াম চ্যানেল থাকে; বিদ্যুৎ তরঙ্গ এই খাঁজগুলোতে লাফিয়ে লাফিয়ে প্রবাহিত হয়ে স্নায়ু সংকেতের গতি সেকেন্ডে ১২০ মিটার পর্যন্ত বাড়িয়ে দেয়।'
        ),
      },
      {
        term: l('Blood-Brain Barrier (BBB)', 'রক্ত-মস্তিষ্ক প্রাচীর (BBB)'),
        definition: l(
          'A highly selective semipermeable neurovascular barrier formed by non-fenestrated capillary endothelial cells joined by continuous tight junctions (claudin-5 and occludin), a thick basal lamina, and perivascular endfeet of astrocytes (AQP4+); shields the central nervous system from systemic pathogens and neurotoxic fluctuations.',
          'একটি অত্যন্ত সংবেদনশীল সুরক্ষামূলক প্রাচীর যা ছিদ্রহীন কৈশিক রক্তনালীর এন্ডোথেলিয়াম, টাইট জাংশন প্রোটিন, বেসমেন্ট মেমব্রেন এবং অ্যাস্ট্রোসাইটের ভাস্কুলার ফুটের সমন্বয়ে গঠিত; এটি মস্তিষ্ককে রক্তের বিষাক্ত উপাদান ও জীবাণু থেকে রক্ষা করে।'
        ),
      },
      {
        term: l('Seddon Classification of Nerve Injury', 'সেডনের স্নায়ু আঘাতের শ্রেণিবিভাগ'),
        definition: l(
          'Tripartite clinical schema for peripheral nerve trauma: (1) Neuropraxia: focal conduction block without axonal disruption; spontaneous recovery in weeks; (2) Axonotmesis: axonal severance with intact endoneurial/perineurial tubes; undergoes Wallerian degeneration but regenerates at ~1 mm/day; (3) Neurotmesis: complete structural transection of axon and supporting fascial sheaths; requires microsurgical reapproximation.',
          'প্রান্তীয় স্নায়ুর আঘাতের ৩টি মাত্রা: (১) নিউরোপ্র্যাক্সিয়া: স্নায়ু না ছিঁড়ে কেবল সাময়িক সংকেত বন্ধ হওয়া (কয়েক সপ্তাহে ভালো হয়); (২) অ্যাক্সোনটমেসিস: অ্যাক্সন কেটে গেলেও বাইরের খোলস অটুট থাকা (প্রতিদিন ১ মিমি হারে বৃদ্ধি পায়); এবং (৩) নিউরোটমেসিস: সম্পূর্ণ স্নায়ু ও তার আবরণী বিচ্ছিন্ন হওয়া যা সূক্ষ্ম জোড়া লাগানো অপারেশন ছাড়া কখনোই জোড়া লাগে না।'
        ),
      },
      {
        term: l('Wallerian Degeneration & Bands of Büngner', 'ওয়ালারিয়ান অবক্ষয় ও বুংনারের ব্যান্ড'),
        definition: l(
          'The stereotyped molecular cascade following axonal transection: the distal severed axon and myelin sheath fragment and are cleared by macrophages within 1 to 2 weeks; denervated Schwann cells proliferate and align in longitudinal columns termed bands of Büngner to guide regenerating axon sprouts.',
          'স্নায়ু কেটে যাওয়ার পর তার বিচ্ছিন্ন অংশের নির্দিষ্ট পচন প্রক্রিয়া: কাটার ১-২ সপ্তাহের মধ্যে কাটা অংশের অ্যাক্সন ও মায়েলিন ভেঙে ম্যাক্রোফেজ দ্বারা পরিষ্কার হয়; এরপর সোয়ান কোষগুলো সারিবদ্ধ হয়ে বুংনারের ব্যান্ড তৈরি করে যা নতুন গজানো অ্যাক্সনকে সঠিক দিকে পথ দেখিয়ে নিয়ে যায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Differentiating Central vs. Peripheral Demyelinating Pathologies', 'কেন্দ্রীয় বনাম প্রান্তীয় মায়েলিন ধ্বংসের রোগ (MS বনাম GBS) পার্থক্যকরণ'),
        steps: [
          l('Step 1: Identify myelin-producing glial cells: in the Central Nervous System (CNS), oligodendrocytes myelinate segments of up to 40 distinct axons simultaneously; in the Peripheral Nervous System (PNS), each Schwann cell wraps a single internode of one individual axon.', 'ধাপ ১: মায়েলিন তৈরি করা কোষগুলো চিনুন: কেন্দ্রীয় স্নায়ুতন্ত্রে একটি অলিগোডেনড্রোসাইট একসাথে ৪০টি অ্যাক্সনে মায়েলিন দেয়; কিন্তু প্রান্তীয় স্নায়ুতন্ত্রে প্রতিটি সোয়ান কোষ কেবল একটি মাত্র অ্যাক্সনের একটি পর্বকে পেঁচিয়ে রাখে।'),
          l('Step 2: Recognize Multiple Sclerosis (MS) pathogenesis: autoimmune T-cell and B-cell infiltration across the blood-brain barrier selectively attacks CNS myelin and oligodendrocytes, creating perivenular demyelinating plaques in the brain, spinal cord, and optic nerves.', 'ধাপ ২: মাল্টিপল স্ক্লেরোসিস (MS) বুঝুন: শরীরের রোগ প্রতিরোধ ব্যবস্থা ভুলবশত রক্ত-মস্তিষ্ক প্রাচীর ভেদ করে মস্তিষ্কের নিজস্ব অলিগোডেনড্রোসাইট ও মায়েলিন ধ্বংস করে, যার ফলে দৃষ্টিশক্তি হ্রাস ও হাত-পা অবশ হয়।'),
          l('Step 3: Recognize Guillain-Barré Syndrome (GBS) pathogenesis: molecular mimicry following Campylobacter jejuni or viral infection generates autoantibodies attacking gangliosides (e.g., GM1) on peripheral motor axons and Schwann cells, causing acute ascending motor paralysis with albuminocytological dissociation.', 'ধাপ ৩: গুলেন-বারে সিন্ড্রোম (GBS) বুঝুন: পেটের বা ফুসফুসের ইনফেকশনের পর তৈরি হওয়া অ্যান্টিবডি প্রান্তীয় স্নায়ুর সোয়ান কোষ ও গ্যাংলিওসাইড ধ্বংস করে, যার ফলে পা থেকে শুরু হয়ে দ্রুত ওপরের দিকে পক্ষাঘাত ছড়ায় কিন্তু মস্তিষ্কের ভেতরের স্নায়ু অক্ষত থাকে।'),
        ],
        conclusion: l('Because oligodendrocytes and Schwann cells express distinct myelin-associated glycoproteins and embryological lineages, autoimmune demyelination strictly compartmentalizes into CNS disease (MS) versus PNS neuropathy (GBS), dictating distinct neurological management.', 'যেহেতু কেন্দ্রীয় ও প্রান্তীয় স্নায়ুতন্ত্রের মায়েলিন তৈরির কোষ সম্পূর্ণ আলাদা, তাই রোগ প্রতিরোধ ব্যবস্থার আক্রমণও পৃথক থাকে: মস্তিষ্কের ক্ষেত্রে MS এবং প্রান্তীয় স্নায়ুর ক্ষেত্রে GBS, যার চিকিৎসা সম্পূর্ণ ভিন্ন।' ),
      },
    ],
    checkpoints: [
      {
        question: l('Why does a local anesthetic such as lidocaine block small unmyelinated C-fibers (pain) before it blocks large heavily myelinated A-alpha motor fibers?', 'দাঁত তোলার বা অপারেশনের অবশ করার ওষুধ (লিডোকেইন) বড় মোটর স্নায়ুর আগে সূক্ষ্ম ব্যথাবাহী স্নায়ুকে আগে অবশ করে কেন?'),
        answer: l('Lidocaine blocks voltage-gated Na+ channels from the intracellular axoplasmic side. Small unmyelinated C-fibers and thin A-delta fibers fire at higher frequencies during nociceptive stimulation and require shorter diffusion distances, allowing use-dependent local anesthetic blockade to suppress pain conduction long before the thick, well-insulated, low-frequency A-alpha motor axons are fully penetrated.', 'লিডোকেইন কোষের ভেতর থেকে সোডিয়াম চ্যানেল বন্ধ করে সংকেত আটকায়। ব্যথা বহনকারী পাতলা সি-ফাইবারগুলোর চারপাশে কোনো মোটা আবরণ না থাকায় ওষুধ খুব দ্রুত ভেতরে ঢুকে যায় এবং ব্যথার তীব্র ফায়ারিং রেটের কারণে দ্রুত অবশ হয়, অথচ বড় ও পুরু মায়েলিনযুক্ত মোটর স্নায়ুতে ওষুধ ঢুকতে অনেক বেশি সময় লাগে।' ),
      },
      {
        question: l('What is the function of the perineurium, and why does its breach during accidental surgical trauma cause devastating neuroma formation?', 'পেরিনিউরিয়াম স্তরের কাজ কী এবং অপারেশনের সময় এটি ছিঁড়ে গেলে সেখানে ব্যথাদায়ক টিউমার (নিউরোমা) তৈরি হয় কেন?'),
        answer: l('The perineurium is a specialized sheath of concentric squamous epithelial-like cells linked by continuous zonulae occludentes, creating the physiological blood-nerve barrier that isolates the endoneurial microenvironment. When ruptured, regenerating axonal sprouts escape into surrounding fibroelastic tissues without guidance from endoneurial tubes, entangling into a highly sensitive, disorganized, and excruciatingly painful traumatic neuroma.', 'পেরিনিউরিয়াম হলো টাইট জাংশনযুক্ত কোষের একটি শক্ত খোলস যা প্রান্তীয় স্নায়ুর ভেতরের তরল পরিবেশের সুরক্ষা প্রাচীর হিসেবে কাজ করে। এই পর্দা কেটে গেলে নতুন গজানো স্নায়ুতন্তুগুলো পথ হারিয়ে আশপাশের মাংসে ছড়িয়ে পড়ে এবং জট পাকিয়ে অত্যন্ত সংবেদনশীল ও যন্ত্রণাদায়ক ট্রমাটিক নিউরোমা নামক টিউমার তৈরি করে।' ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch16-neural-tissue-diagram',
    title: l('Interactive Neural Cytology & Peripheral Nerve Fascicle', 'ইন্টারেক্টিভ স্নায়ু কোষবিজ্ঞান ও প্রান্তীয় স্নায়ুর বান্ডেল'),
    description: l(
      'Inspect the four primary architectural tiers of the nervous system: the multipolar motor neuron, neuroglial cell classes, the triple-sheathed peripheral nerve fascicle, and the chemical synapse.',
      'স্নায়ুতন্ত্রের চারটি প্রধান কাঠামোগত স্তর পরীক্ষা করুন: মাল্টিপোলার মোটর নিউরন, নিউরোগ্লিয়ার বিভিন্ন শ্রেণি, ত্রি-স্তরীয় প্রান্তীয় স্নায়ুর বান্ডেল এবং রাসায়নিক সাইন্যাপস সংযোগ।'
    ),
    disclaimer: l(
      'Cytological schematic: select any sector to review axoplasmic flow, glial-vascular barriers, connective tissue sheaths, and action potential regeneration.',
      'কোষীয় শারীরস্থানিক চিত্র: অ্যাক্সন পরিবহন, রক্ত-মস্তিষ্ক প্রাচীর, ফাসিয়া আবরণী এবং বিদ্যুৎ তরঙ্গ প্রবাহ দেখতে যেকোনো অঞ্চল নির্বাচন করুন।'
    ),
    svgType: 'neural-tissue-system',
    items: [
      {
        id: 'multipolar-neuron',
        label: l('Multipolar Neuron & Axon Hillock', 'মাল্টিপোলার নিউরন ও অ্যাক্সন হিলক'),
        description: l(
          'Fundamental signaling unit. Contains perikaryon with prominent Nissl bodies (rough ER), dendritic tree receiving synaptic inputs, and axon hillock integrating graded potentials.',
          'সংকেত আদান-প্রদানের মৌলিক একক। নিউরনের কোষদেহে প্রচুর নিসল দানা (প্রোটিন তৈরির কারখানা), তথ্য গ্রহণকারী ডেনড্রাইট এবং বিদ্যুৎ তরঙ্গ শুরু করার অ্যাক্সন হিলক থাকে।'
        ),
        details: l(
          'Axon initial segment (AIS) contains highest density of Nav1.6 channels, triggering action potentials. Fast axonal transport moves vesicles via kinesin (400 mm/day).',
          'অ্যাক্সনের গোড়ায় সবচেয়ে বেশি সোডিয়াম চ্যানেল থাকে যা অ্যাকশন পটেনশিয়াল তৈরি করে। কাইনেসিন মোটর প্রোটিন দিনে ৪০০ মিলিমিটার বেগে পুষ্টি অ্যাক্সনের শেষ প্রান্তে পৌঁছে দেয়।'
        ),
        sectionId: 'introduction',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'neuroglial-network',
        label: l('Neuroglia & Blood-Brain Barrier', 'নিউরোগ্লিয়া ও রক্ত-মস্তিষ্ক প্রাচীর'),
        description: l(
          'Cellular supportive scaffolding outnumbering neurons. Astrocytes form perivascular endfeet for BBB. Oligodendrocytes (CNS) and Schwann cells (PNS) wrap myelin.',
          'নিউরনকে সাহায্যকারী গ্লিয়াল কোষসমূহ। অ্যাস্ট্রোসাইট রক্তনালীকে ঘিরে রক্ত-মস্তিষ্ক প্রাচীর বানায়। অলিগোডেনড্রোসাইট ও সোয়ান কোষ স্নায়ুর ওপর মায়েলিনের ইনসুলেশন দেয়।'
        ),
        details: l(
          'Microglia act as yolk-sac-derived resident macrophages. Ependymal cells line ventricles, possessing microvilli and motile cilia that circulate cerebrospinal fluid (CSF).',
          'মাইক্রোগ্লিয়া মস্তিষ্কের নিজস্ব পাহারাদার শ্বেতকণিকা হিসেবে কাজ করে। এপেনডাইমাল কোষ মস্তিষ্কের প্রকোষ্ঠে সিলিয়ার সাহায্যে মস্তিষ্কের পানি (CSF) সচল রাখে।'
        ),
        sectionId: 'structure',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'nerve-sheaths',
        label: l('Fascial Sheaths: Epi-, Peri- & Endoneurium', 'স্নায়ুর খোলস: এপি-, পেরি- ও এন্ডোনিউরিয়াম'),
        description: l(
          'Connective tissue hierarchy shielding peripheral axons: Epineurium surrounds the whole nerve trunk; Perineurium binds fascicles; Endoneurium envelops single axons.',
          'প্রান্তীয় স্নায়ুকে রক্ষা করা তিনটি সুরক্ষামূলক স্তর: সবচেয়ে বাইরের শক্ত এপিনিউরিয়াম, ভেতরের বান্ডেলকে বাঁধা পেরিনিউরিয়াম এবং প্রতিটি একক অ্যাক্সনকে ঘিরে থাকা এন্ডোনিউরিয়াম।'
        ),
        details: l(
          'Perineurium forms blood-nerve barrier via tight junctions. Endoneurial fluid pressure elevations during trauma or entrapment cause local microvascular ischemia.',
          'পেরিনিউরিয়ামের টাইট জাংশন স্নায়ুর ভেতরে রক্তের বিষাক্ত উপাদান ঢুকতে দেয় না। স্নায়ু চেপে গেলে এই স্তরের রক্তনালী বন্ধ হয়ে অবশ ভাব তৈরি হয়।'
        ),
        sectionId: 'mechanism',
        color: '#fed7aa',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'synapse-nodes',
        label: l('Chemical Synapse & Nodes of Ranvier', 'রাসায়নিক সাইন্যাপস ও র‍্যানভিয়ারের খাঁজ'),
        description: l(
          'Junctions for neural computation and rapid propagation. Presynaptic vesicle exocytosis via SNARE proteins into 20 nm synaptic cleft. Saltatory jumping along nodes.',
          'স্নায়ু সংকেত আদান-প্রদান ও দ্রুত চলাচলের কেন্দ্র। স্নেয়ার প্রোটিনের সাহায্যে নিউরোট্রান্সমিটার বের হয়ে ফাঁকা সাইন্যাপসে যায়। মায়েলিনের ফাঁকে খাঁজগুলোতে বিদ্যুৎ লাফিয়ে চলে।'
        ),
        details: l(
          'Tetanus toxin retrogradely travels to spinal inhibitory interneurons, cleaving synaptobrevin and blocking GABA/glycine release to cause severe spastic paralysis.',
          'টিটেনাসের বিষ অ্যাক্সন বেয়ে মেরুদণ্ডে গিয়ে নিউরোট্রান্সমিটার আটকে দেয়, যার ফলে সারা শরীরের পেশী শক্ত হয়ে মারাত্মক ধনুষ্টঙ্কার রোগ সৃষ্টি করে।'
        ),
        sectionId: 'integration',
        color: '#fecdd3',
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
          heading: l('The Structural Archetype of the Neuron', 'নিউরনের মৌলিক গঠন ও উপাদানসমূহ'),
          paragraphs: [
            l(
              'The human nervous system contains an estimated 86 billion neurons, each anatomically specialized for electrical excitability, rapid intracellular signal integration, and intercellular communication. A prototypical multipolar neuron consists of four morphologically distinct domains: the cell body (soma or perikaryon), multiple branching dendrites, a single elongated axon, and terminal axonal arborizations (telodendria) that end at specialized synaptic boutons.',
              'মানব স্নায়ুতন্ত্রে প্রায় ৮,৬০০ কোটি নিউরন রয়েছে যার প্রতিটি বিদ্যুৎ সংকেত তৈরি, প্রক্রিয়াজাতকরণ এবং দ্রুত ছড়িয়ে দেওয়ার জন্য বিশেষভাবে তৈরি। একটি আদর্শ নিউরনের চারটি অংশ থাকে: কোষদেহ (সোমা), তথ্য সংগ্রহকারী অসংখ্য ডেনড্রাইট, লম্বা বিদ্যুৎ তারের মতো অ্যাক্সন এবং সংকেত পাঠিয়ে দেওয়ার জন্য অ্যাক্সনের শেষ প্রান্তের সাইন্যাপটিক নব।'
            ),
            l(
              'The perikaryon houses a large spherical euchromatic nucleus with an intensely prominent nucleolus, surrounded by dense aggregates of rough endoplasmic reticulum and free polyribosomes known histologically as Nissl substance or chromophilic bodies. These synthetic organelles sustain continuous protein synthesis required for neurotransmitter synthesis and cytoplasmic renewal, but terminate abruptly at the axon hillock, leaving the axon entirely dependent on anterograde axoplasmic transport.',
              'নিউরনের কোষদেহে স্পষ্ট নিউক্লিয়াস এবং প্রোটিন তৈরির জন্য ঘন নিসল দানা (Nissl bodies) থাকে। এই অঙ্গাণুগুলো নিউরোট্রান্সমিটার ও অন্যান্য রাসায়নিক উপাদান তৈরি করে কোষকে সজীব রাখে। তবে অ্যাক্সন হিলক থেকে অ্যাক্সনের শুরুতেই এই নিসল দানা শেষ হয়ে যায়; ফলে অ্যাক্সন তার সমস্ত প্রয়োজনীয় পুষ্টির জন্য কোষদেহ থেকে আসা অ্যাক্সোনাল পরিবহনের ওপর পুরোপুরি নির্ভরশীল থাকে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Glial Allies of the Central and Peripheral Nervous System', 'কেন্দ্রীয় ও প্রান্তীয় স্নায়ুতন্ত্রের সহায়ক গ্লিয়াল কোষ'),
          paragraphs: [
            l(
              'Neurons do not function in isolation; they are physically supported, insulated, metabolically nourished, and immunologically protected by neuroglial cells, which outnumber neurons in many regions of the human brain. In the Central Nervous System (CNS), four major glial classes are present: star-shaped astrocytes that regulate extracellular ion homeostasis and maintain the blood-brain barrier; myelinating oligodendrocytes; resident phagocytic microglia; and ciliated ependymal cells lining the ventricular system.',
              'নিউরনগুলো একা একা কাজ করতে পারে না; এদের সুরক্ষা, পুষ্টি এবং বিদ্যুৎ অপরিবাহী ইনসুলেশন দেওয়ার জন্য কোটি কোটি নিউরোগ্লিয়া কোষ কাজ করে। কেন্দ্রীয় স্নায়ুতন্ত্রে চার ধরণের প্রধান গ্লিয়া থাকে: তারকাকার অ্যাস্ট্রোসাইট যা রক্ত-মস্তিষ্ক প্রাচীর রক্ষা করে, মায়েলিন সরবরাহকারী অলিগোডেনড্রোসাইট, মস্তিষ্কের পাহারাদার শ্বেতকণিকা সদৃশ মাইক্রোগ্লিয়া এবং মস্তিষ্কের ভেতরে পানি সচল রাখা এপেনডাইমাল কোষ।'
            ),
            l(
              'In the Peripheral Nervous System (PNS), the two primary glial cell types are Schwann cells and satellite cells. Schwann cells wrap around peripheral axons to generate concentric myelin sheaths or envelope bundles of unmyelinated fibers within Remak bundles, playing a vital role in axonal survival and post-traumatic nerve regeneration. Satellite cells envelop the cell bodies of pseudo-unipolar and multipolar neurons within sensory and autonomic ganglia, controlling their immediate microenvironment.',
              'প্রান্তীয় স্নায়ুতন্ত্রে দুই ধরণের প্রধান গ্লিয়াল কোষ থাকে: সোয়ান কোষ এবং স্যাটেলাইট কোষ। সোয়ান কোষগুলো প্রান্তীয় স্নায়ুর অ্যাক্সনকে পেঁচিয়ে ফ্যাটি মায়েলিন আবরণী তৈরি করে যা সংকেতের গতি বহুগুণ বাড়ায় এবং স্নায়ু ক্ষতিগ্রস্ত হলে তা পুনরায় গজাতে সাহায্য করে। অপরদিকে স্যাটেলাইট কোষগুলো সংবেদী ও অটোনোমিক গ্যাংলিয়ার ভেতরে নিউরনের কোষদেহকে ঘিরে রেখে পুষ্টি ও সুরক্ষার পরিবেশ বজায় রাখে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Membrane Potentials and Saltatory Conduction Mechanics', 'ঝিল্লি বিভব এবং সল্টেটরি সংকেত পরিবহনের বলবিদ্যা'),
          paragraphs: [
            l(
              'Resting membrane potential in neurons is established primarily by the sodium-potassium pump (Na+/K+-ATPase) and background potassium leak channels, creating an intracellular potential of approximately -70 mV. When excitatory synaptic inputs depolarize the initial segment of the axon past the threshold of roughly -55 mV, voltage-gated sodium channels (Nav1.6) open rapidly, triggering an all-or-none explosive influx of Na+ that drives the membrane potential to +30 mV.',
              'নিউরনের বিশ্রামকালীন ঝিল্লি বিভব মূলত সোডিয়াম-পটাশিয়াম পাম্প এবং ব্যাকগ্রাউন্ড পটাশিয়াম লিক চ্যানেলের মাধ্যমে বজায় থাকে, যা কোষের ভেতরে প্রায় -৭০ মিলিভোল্ট ঋণাত্মক চার্জ তৈরি করে। যখন উত্তেজক সাইন্যাপটিক সংকেত অ্যাক্সনের শুরুর অংশের বিভবকে -৫৫ মিলিভোল্ট থ্রেশহোল্ডে পৌঁছে দেয়, তখন ভোল্টেজ-গেটেড সোডিয়াম চ্যানেলগুলো বিদ্যুৎ গতিতে খুলে যায় এবং সোডিয়াম প্রবেশের মাধ্যমে ঝিল্লি বিভব +৩০ মিলিভোল্টে উন্নীত হয়ে অ্যাকশন পটেনশিয়াল তৈরি করে।'
            ),
            l(
              'In myelinated nerve fibers, the thick lipid sheath synthesized by Schwann cells or oligodendrocytes provides high electrical resistance and low membrane capacitance across the internodal segments. As a result, the action potential cannot depolarize the insulated internode and instead leaps electrotonically from one node of Ranvier to the next in a process termed saltatory conduction. This jump increases impulse velocity from under 2 m/s in unmyelinated fibers up to 120 m/s in large myelinated fibers.',
              'মায়েলিনযুক্ত স্নায়ুতন্তুতে সোয়ান কোষ বা অলিগোডেনড্রোসাইট দ্বারা গঠিত পুরু ফ্যাটি আবরণী উচ্চমাত্রার বিদ্যুৎ অপরিবাহী হিসেবে কাজ করে। ফলে বিদ্যুৎ তরঙ্গ পুরো অ্যাক্সন বেয়ে ধীরে ধীরে যাওয়ার পরিবর্তে এক র‍্যানভিয়ারের পর্ব থেকে পরবর্তী পর্বে বিদ্যুৎ গতিতে লাফিয়ে লাফিয়ে চলে যাকে সল্টেটরি পরিবহন বলা হয়। এই বিশেষ লাফের কারণে স্নায়ু সংকেতের গতি আবরণহীন স্নায়ুর সেকেন্ডে ২ মিটার থেকে বৃদ্ধি পেয়ে মায়েলিনযুক্ত স্নায়ুতে সেকেন্ডে ১২০ মিটার পর্যন্ত পৌঁছায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Peripheral Nerve Organization and Functional Modalities', 'প্রান্তীয় স্নায়ুর সংগঠন ও কার্যকারিতার বিন্যাস'),
          paragraphs: [
            l(
              'Peripheral nerves are complex conduits that integrate thousands of afferent sensory and efferent motor axons into cohesive anatomical cords. Sensory fibers carry exteroceptive, proprioceptive, and visceral signals toward the central nervous system, with their pseudo-unipolar neuronal cell bodies grouped safely within dorsal root ganglia. Somatic motor fibers originate from alpha and gamma motor neurons in the ventral horn of the spinal cord, projecting directly to skeletal muscle motor endplates.',
              'প্রান্তীয় স্নায়ু হলো হাজার হাজার সংবেদী ও চেষ্টীয় অ্যাক্সনের সুশৃঙ্খল মিলনস্থল যা একটি দৃশ্যমান জীবন্ত তারের মতো কাজ করে। সংবেদী স্নায়ুতন্তুগুলো স্পর্শ, ব্যথা, তাপমাত্রা ও পেশীর অবস্থান সংক্রান্ত তথ্য মেরুদণ্ড ও মস্তিষ্কের দিকে নিয়ে যায়, যাদের কোষদেহগুলো ডরসাল রুট গ্যাংলিয়ায় সুরক্ষিত থাকে। পক্ষান্তরে চেষ্টীয় মোটর তন্তুগুলো স্পাইনাল কর্ডের সামনের হর্ন থেকে সরাসরি কঙ্কাল পেশীর মোটর এন্ডপ্লেটে সংকেত পৌঁছে দিয়ে দেহের সমস্ত নড়াচড়া পরিচালনা করে।'
            ),
            l(
              'Autonomic efferent pathways utilize a two-neuron relay system consisting of preganglionic myelinated fibers that synapse within sympathetic chain ganglia or parasympathetic terminal ganglia, followed by postganglionic unmyelinated fibers innervating smooth muscle, cardiac muscle, and glandular epithelia. This structural integration allows a single peripheral nerve trunk (such as the sciatic or median nerve) to simultaneously transmit voluntary motor commands, precise sensory feedback, and involuntary vasomotor control.',
              'স্বায়ত্তশাসিত বা অটোনোমিক স্নায়ুতন্ত্র দুটি নিউরনের একটি বিশেষ রিলে ব্যবস্থার মাধ্যমে কাজ করে: প্রি-গ্যাংলিওনিক মায়েলিনযুক্ত তন্তু যা সিমপ্যাথেটিক চেইনে বা প্রান্তীয় গ্যাংলিয়ায় সাইন্যাপস করে এবং পোস্ট-গ্যাংলিওনিক আবরণহীন তন্তু যা মসৃণ পেশী, হৃৎপেশী ও বিভিন্ন গ্রন্থির কাজ নিয়ন্ত্রণ করে। এই গঠনের ফলেই একটি প্রধান স্নায়ু (যেমন সায়াটিক বা মিডিয়ান নার্ভ) একই সাথে ঐচ্ছিক পেশী চালনা, অনুভূতি গ্রহণ এবং রক্তনালীর সংকোচন-প্রসারণ নিখুঁতভাবে সমন্বয় করতে পারে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Signs of Nerve Compression and Neuropathy', 'স্নায়ু সংকোচনের ক্লিনিক্যাল লক্ষণ ও নিউরোপ্যাথি'),
          paragraphs: [
            l(
              'Focal entrapment neuropathies demonstrate the structural vulnerability of peripheral nerves passing through rigid fibro-osseous tunnels. The classical exemplar is carpal tunnel syndrome, where elevated pressure within the carpal tunnel beneath the transverse carpal ligament compresses the median nerve, leading to ischemia of the vasa nervorum. Patients experience nocturnal paresthesias and burning pain in the thumb, index, and middle fingers, progressing to thenar muscle atrophy and weakness.',
              'শরীরের হাড় ও শক্ত লিগামেন্টের সরু সুড়ঙ্গের মধ্য দিয়ে যাওয়ার সময় প্রান্তীয় স্নায়ু সহজেই চেপে গিয়ে এন্ট্রাপমেন্ট নিউরোপ্যাথি তৈরি করে। এর সবচেয়ে পরিচিত উদাহরণ কার্পাল টানেল সিন্ড্রোম, যেখানে হাতের কব্জির ট্রান্সভার্স কার্পাল লিগামেন্টের নিচে মিডিয়ান নার্ভ চেপে গিয়ে রক্তপ্রবাহ বন্ধ হয়ে যায়। এর ফলে রোগীরা রাতে বৃদ্ধাঙ্গুলি ও পাশের আঙুলগুলোতে তীব্র জ্বালাপোড়া ও ঝিমঝিম ব্যথা অনুভব করে এবং পরবর্তীতে হাতের বুড়ো আঙুলের গোড়ার থেনার পেশী শুকিয়ে যায়।'
            ),
            l(
              'Systemic peripheral neuropathies, such as diabetic distal symmetrical polyneuropathy, exhibit a characteristic length-dependent "glove-and-stocking" sensory loss pattern. Because the longest axons have the greatest metabolic and axoplasmic transport demands, axonal dying-back pathology starts at the distal terminals in the toes and feet before ascending to the fingers. Loss of protective sensation predisposes patients to painless skin breakdown, neuropathic ulcers, and joint deformities.',
              'ডায়াবেটিসের মতো দীর্ঘস্থায়ী রোগে আক্রান্ত রোগীদের ক্ষেত্রে স্নায়ুর দীর্ঘতম তন্তুগুলো সবচেয়ে আগে পুষ্টিহীনতায় ভুগে নষ্ট হতে থাকে, যাকে "গ্লাভস অ্যান্ড স্টকিং" প্যাটার্ন বলা হয়। যেহেতু পায়ের আঙুল পর্যন্ত পৌঁছানো স্নায়ুগুলো সবচেয়ে লম্বা, তাই পায়ের পাতার অনুভূতি সবার আগে হারিয়ে যায় এবং রোগটি ধীরে ধীরে ওপরে উঠে হাতের আঙুলগুলোকে আক্রান্ত করে। ব্যথার স্বাভাবিক অনুভূতি হারিয়ে যাওয়ায় রোগীরা অজান্তেই পায়ে আঘাত পান যা পরবর্তীতে মারাত্মক ডায়াবেটিক আলসার ও গ্যাংগ্রিনে রূপ নেয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary & Neural Organization Fundamentals', 'সারসংক্ষেপ ও স্নায়ুতন্ত্রের মৌলিক সাংগঠনিক নীতি'),
          paragraphs: [
            l(
              'Neural tissue architecture unites electrically excitable neurons with supportive neuroglia to create the computational and communication network of the body. Myelination by Schwann cells and oligodendrocytes dramatically accelerates action potential conduction via saltatory electrogenesis, while peripheral connective tissue coats defend axons against physical trauma and metabolic compromise.',
              'স্নায়ু টিস্যুর গঠন উত্তেজনাশীল নিউরন এবং তাদের সহায়ক নিউরোগ্লিয়া কোষের সমন্বয়ে দেহের তথ্য আদান-প্রদান ও সমন্বয়ের মূল নেটওয়ার্ক তৈরি করে। সোয়ান কোষ ও অলিগোডেনড্রোসাইটের মায়েলিন আবরণী সল্টেটরি প্রবাহের মাধ্যমে বিদ্যুৎ সংকেতের গতি বহুগুণ বাড়ায় এবং ত্রি-স্তরীয় ফাসিয়া আবরণী স্নায়ুকে বাইরের আঘাত থেকে সুরক্ষিত রাখে।'
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
          heading: l('Neuronal Domains and Cytoskeletal Polarity', 'নিউরনের অঞ্চলসমূহ এবং সাইটোস্কেলেটনের মেরুকরণ'),
          paragraphs: [
            l(
              'The structural compartmentalization of neurons depends on an intricately polarized cytoskeleton that defines distinct dendritic and axonal identities. Somatodendritic compartments are enriched in microtubule-associated protein 2 (MAP2) and display mixed-polarity microtubule lattices. In contrast, the axon contains uniformly polarized microtubules with their plus ends directed toward the terminal, stabilized by the tau protein, and is physically partitioned from the perikaryon by the axon initial segment (AIS).',
              'নিউরনের সুনির্দিষ্ট গঠনগত বিভাজন তার অত্যন্ত নিয়ন্ত্রিত সাইটোস্কেলেটনের ওপর নির্ভর করে যা ডেনড্রাইট এবং অ্যাক্সনের ভিন্ন ভিন্ন বৈশিষ্ট্য বজায় রাখে। কোষদেহ এবং ডেনড্রাইটে মাইক্রোটিউবিউল-সংযুক্ত প্রোটিন-২ (MAP2) থাকে এবং এদের অণুনালিকাগুলোর দিক মিশ্রিত থাকে। অপরপক্ষে অ্যাক্সনে টাউ (Tau) প্রোটিন দ্বারা সুসংগঠিত অণুনালিকাগুলো কেবল সামনের দিকে প্লাস-প্রান্ত মুখী হয়ে সাজানো থাকে এবং এটি অ্যাক্সন ইনিশিয়াল সেগমেন্ট (AIS) দ্বারা কোষদেহ থেকে পৃথক থাকে।'
            ),
            l(
              'The axon initial segment is a specialized 20 to 60 micrometer cytoskeletal microdomain characterized by a dense submembranous scaffold of ankyrin-G, beta-IV spectrin, and actin rings. Ankyrin-G concentrates voltage-gated sodium channels (primarily Nav1.6 and Nav1.2) at densities exceeding 1000 channels per square micrometer. This dramatic channel density makes the axon initial segment the lowest-threshold site in the entire neuron for action potential initiation, directing downstream directional propagation.',
              'অ্যাক্সন ইনিশিয়াল সেগমেন্ট হলো ২০ থেকে ৬০ মাইক্রোমিটার দীর্ঘ একটি বিশেষায়িত অংশ যেখানে অ্যাঙ্কাইরিন-জি, বিটা-স্পেকট্রিন এবং অ্যাক্টিন প্রোটিনের ঘন জালিকায় প্রতি বর্গমাইক্রোমিটারে এক হাজারেরও বেশি ভোল্টেজ-গেটেড সোডিয়াম চ্যানেল আটকে থাকে। এই অত্যধিক চ্যানেল ঘনত্বের কারণেই নিউরনের সমস্ত অংশের মধ্যে ইনিশিয়াল সেগমেন্টেই সবচেয়ে সহজে এবং সবার আগে অ্যাকশন পটেনশিয়াল বা বিদ্যুৎ সংকেত উৎপন্ন হয় যা অ্যাক্সন বেয়ে সামনের দিকে ছুটে যায়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Glial Subtypes and the Neurovascular Unit / Blood-Brain Barrier', 'গ্লিয়াল উপপ্রকার এবং নিউরোভাস্কুলার একক ও রক্ত-মস্তিষ্ক প্রাচীর'),
          paragraphs: [
            l(
              'The blood-brain barrier (BBB) represents a specialized cellular interface within cerebral microvessels that maintains the privileged microenvironment of the central nervous system. Non-fenestrated capillary endothelial cells are joined by continuous complex tight junctions comprising claudin-5, occludin, and zonula occludens (ZO-1). These tight junctions restrict paracellular diffusion of ions and polar macromolecules, forcing transcellular transport to rely on specialized stereospecific solute carriers such as GLUT1.',
              'রক্ত-মস্তিষ্ক প্রাচীর (BBB) হলো মস্তিষ্কের ক্ষুদ্র রক্তনালীগুলোর একটি বিশেষায়িত কোষীয় প্রাচীর যা কেন্দ্রীয় স্নায়ুতন্ত্রের অভ্যন্তরীণ পরিবেশকে রক্তের বিষাক্ত উপাদান থেকে মুক্ত রাখে। এর ছিদ্রহীন এন্ডোথেলিয়াল কোষগুলো ক্লাউডিন-৫, অক্লুডিন এবং ZO-1 টাইট জাংশন দ্বারা শক্তভাবে আটকানো থাকে, যা কোনো ক্ষতিকর অণুকে কোষের ফাঁক দিয়ে ঢুকতে দেয় না এবং গ্লুকোজ পরিবহনের জন্য GLUT1 এর মতো বিশেষ বাহকের ওপর নির্ভর করায়।'
            ),
            l(
              'Enveloping the endothelial basal lamina are contractile pericytes and perivascular endfeet of protoplasmic astrocytes, which express high concentrations of the water channel aquaporin-4 (AQP4). Astrocytic endfeet induce and sustain endothelial tight junctions through the release of transforming growth factor-beta (TGF-beta) and glial-derived neurotrophic factor (GDNF), while facilitating neurovascular coupling to match local cerebral blood flow with active synaptic metabolic demands.',
              'কৈশিক রক্তনালীর বেসমেন্ট মেমব্রেনকে ঘিরে থাকে পেরিসাইট এবং অ্যাস্ট্রোসাইটের ভাস্কুলার এন্ডফুট যাতে প্রচুর পরিমাণে একুয়াপোরিন-৪ (AQP4) পানির চ্যানেল থাকে। অ্যাস্ট্রোসাইটের এই পাগুলো বিশেষ গ্রোথ ফ্যাক্টর নিঃসরণ করে রক্তনালীর টাইট জাংশন বজায় রাখে এবং স্নায়ুর কাজের সাথে সামঞ্জস্য রেখে সংশ্লিষ্ট মস্তিষ্কের অংশে রক্তপ্রবাহ তৎক্ষণাৎ বাড়িয়ে দিতে সংকেত পাঠায় যাকে নিউরোভাস্কুলার কাপলিং বলা হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Anterograde and Retrograde Axoplasmic Transport Motors', 'সম্মুখমুখী ও পশ্চাৎমুখী অ্যাক্সোপ্লাজমিক পরিবহন মোটর'),
          paragraphs: [
            l(
              'Because axons lack ribosomes and the capacity for protein synthesis, cellular materials synthesized in the soma must be actively ferried down the axon along organized parallel arrays of polarized microtubules. Fast anterograde axonal transport moves secretory vesicles, synaptic membrane components, and neurotransmitter enzymes toward the axon terminal at speeds of 200 to 400 mm/day, powered by the plus-end-directed microtubule motor protein kinesin utilizing ATP hydrolysis.',
              'যেহেতু অ্যাক্সনে কোনো রাইবোসোম থাকে না, তাই কোষদেহে তৈরি হওয়া প্রয়োজনীয় সব প্রোটিন ও এনজাইম মাইক্রোটিউবিউল ট্র‍্যাক বেয়ে অ্যাক্সনের ডগায় পাঠাতে হয়। কাইনেসিন নামক বিশেষ মোটর প্রোটিন এটিপি শক্তি খরচ করে সামনের দিকে এগিয়ে যায় এবং দিনে ২০০ থেকে ৪০০ মিলিমিটার গতিতে ভেসিকল ও প্রয়োজনীয় রাসায়নিক উপাদান অ্যাক্সন টার্মিনালে পৌঁছে দেয়।'
            ),
            l(
              'In contrast, retrograde axonal transport moves endocytosed neurotrophic factors (such as Nerve Growth Factor, NGF), internalized cell surface receptors, and degraded autophagic vesicles back toward the soma at speeds of 100 to 200 mm/day, propelled by the minus-end-directed motor dynein. Clinically, certain neurotropic pathogens exploit this retrograde highway to breach the central nervous system: rabies virus, poliovirus, herpes simplex virus, and the tetanus neurotoxin produced by Clostridium tetani.',
              'বিপরীতভাবে, ডাইনিন নামক মোটর প্রোটিন অ্যাক্সনের শেষ প্রান্ত থেকে ব্যবহৃত বর্জ্য এবং গ্রোথ ফ্যাক্টরগুলোকে পেছনের দিকে কোষদেহের অভিমুখে দিনে ১০০ থেকে ২০০ মিলিমিটার গতিতে টেনে নিয়ে যায়। দুর্ভাগ্যবশত, জলাতঙ্ক ভাইরাস (Rabies), পোলিও ভাইরাস, হারপিস এবং টিটেনাসের বিষাক্ত টক্সিন এই পশ্চাৎমুখী পরিবহন ব্যবস্থা ব্যবহার করেই নার্ভ বেয়ে সরাসরি মেরুদণ্ড ও মস্তিষ্কে প্রবেশ করে মারাত্মক ক্ষতিসাধন করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Connective Tissue Envelopes of Peripheral Nerves: Epi-, Peri- and Endoneurium', 'প্রান্তীয় স্নায়ুর তিনটি সংযোজক টিস্যু স্তর: এপি-, পেরি- এবং এন্ডোনিউরিয়াম'),
          paragraphs: [
            l(
              'A macroscopic peripheral nerve is not merely a bare collection of axons, but a sophisticated, tensile cable encased in three hierarchical layers of fibroelastic connective tissue. The outermost tunic is the epineurium, a dense irregular fibrous sheath that envelops the entire nerve trunk, cushions against external compression, and carries longitudinal nutrient blood vessels termed the vasa nervorum.',
              'একটি দৃশ্যমান প্রান্তীয় স্নায়ু কেবল কতগুলো তারের সমষ্টি নয়, বরং তিনটি শক্ত ফাসিয়া স্তর দ্বারা সুরক্ষিত এক জটিল জৈব কেবল। সবচেয়ে বাইরের স্তরটি হলো এপিনিউরিয়াম, যা ঘন তন্তুময় সংযোজক টিস্যু দিয়ে তৈরি এবং পুরো স্নায়ুকে বাইরের আঘাত ও চাপ থেকে রক্ষা করে এবং স্নায়ুর নিজস্ব রক্তনালী (ভাসা নারভোরাম) ধারণ করে।'
            ),
            l(
              'Beneath the epineurium, axons are organized into distinct bundles termed fascicles, each encapsulated by the perineurium. The perineurium is composed of concentric lamellae of flattened, contractile myofibroblastic cells joined by continuous tight junctions, creating the physiologically indispensable blood-nerve barrier that maintains the delicate ionic microenvironment of the nerve. Deep inside each fascicle, individual myelinated axons and Schwann cells are ensheathed by the delicate, reticulin-rich endoneurium.',
              'এপিনিউরিয়ামের ভেতরে অ্যাক্সনগুলো কতগুলো বান্ডেলে বিভক্ত থাকে যার প্রতিটি পেরিনিউরিয়াম দ্বারা আবৃত। এই স্তরটি টাইট জাংশন দিয়ে এমনভাবে সিল করা থাকে যে এটি একটি রক্ত-স্নায়ু প্রাচীর তৈরি করে স্নায়ুর ভেতরের তরলের ভারসাম্য রক্ষা করে। পরিশেষে, বান্ডেলের ভেতরে প্রতিটি একক অ্যাক্সন ও সোয়ান কোষ এন্ডোনিউরিয়াম নামক পাতলা জালিকাকার পর্দা দ্বারা আবৃত থাকে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Demyelinating Neuropathies and Conduction Velocity Physics', 'মায়েলিন ধ্বংসজনিত নিউরোপ্যাথি এবং সংকেত গতির পদার্থবিজ্ঞান'),
          paragraphs: [
            l(
              'The pathophysiological hallmark of demyelination is the progressive loss of the insulating internodal myelin sheath without primary axonal transection. In multiple sclerosis (CNS demyelination) and chronic inflammatory demyelinating polyneuropathy (CIDP, PNS demyelination), exposed internodal axolemma lacks sufficient voltage-gated sodium channels to sustain continuous electrogenesis, leading to conduction slowing, temporal dispersion, and frequent conduction block.',
              'মায়েলিন ধ্বংসজনিত স্নায়ুরোগের মূল বৈশিষ্ট্য হলো অ্যাক্সন অক্ষত থাকলেও তার চারপাশের বিদ্যুৎ অপরিবাহী ইনসুলেশন স্তর নষ্ট হয়ে যাওয়া। মাল্টিপল স্ক্লেরোসিস (মস্তিষ্কে) এবং সিআইডিপি (প্রান্তীয় স্নায়ুতে) রোগে মায়েলিন উঠে গেলে উন্মুক্ত অ্যাক্সনের গায়ে সংকেত এগিয়ে নেওয়ার মতো যথেষ্ট সোডিয়াম চ্যানেল থাকে না, যার ফলে স্নায়ু সংকেতের গতি মারাত্মকভাবে মন্থর হয়ে যায় এবং একপর্যায়ে সংকেত পুরোপুরি থেমে যায়।'
            ),
            l(
              'Conduction failure is worsened by temperature elevation (Uhthoff phenomenon in multiple sclerosis), as hyperthermia accelerates sodium channel inactivation kinetics, causing marginally functioning demyelinated fibers to fail completely during physical exertion or fever. Electrophysiological nerve conduction studies demonstrate marked prolongation of distal latencies, reduction of conduction velocities below 70% of lower normal limits, and conduction blocks diagnostic of acquired demyelinating polyneuropathy.',
              'শরীরের তাপমাত্রা বাড়লে এই সংকেত ব্যর্থতা আরও প্রকট আকার ধারণ করে (মাল্টিপল স্ক্লেরোসিসে উহথফ ফেনোমেনন), কারণ জ্বর বা ব্যায়ামে শরীর গরম হলে সোডিয়াম চ্যানেলগুলো অকালে বন্ধ হয়ে যায় এবং দুর্বল স্নায়ুগুলো আর সংকেত চালাতে পারে না। স্নায়ু পরীক্ষার (NCS) সময় ডাক্তাররা সংকেতের তীব্র মন্থর গতি এবং কন্ডাকশন ব্লক দেখে রোগটি যে মায়েলিনের ক্ষতি তা নিশ্চিতভাবে শনাক্ত করেন।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Advanced Biophysical Principles of Neural Tissue', 'স্নায়ু টিস্যুর উচ্চতর বায়োফিজিক্যাল নীতিসমূহ'),
          paragraphs: [
            l(
              'Comprehensive mastery of neural tissue integrates the nanomechanics of motor-driven axoplasmic transport, the barrier physics of the blood-brain and blood-nerve interfaces, and the cable properties governing saltatory action potential electrogenesis. These foundational biophysical mechanisms govern the clinical expression of toxic neuropathies, autoimmune demyelinating syndromes, and post-traumatic neural regeneration.',
              'স্নায়ু টিস্যুর উচ্চতর পাঠে অ্যাক্সন মোটর পরিবহনের গতিবিজ্ঞান, রক্ত-মস্তিষ্ক ও রক্ত-স্নায়ু প্রাচীরের অভেদ্য সুরক্ষা ব্যবস্থা এবং সল্টেটরি সংকেত পরিবহনের পদার্থবিজ্ঞানের গভীর সমন্বয় প্রয়োজন। এই মৌলিক কোষীয় ও আণবিক প্রক্রিয়াগুলোই বিষাক্ত রাসায়নিকের স্নায়ুরোগ, অটোইমিউন মায়েলিন ক্ষয় এবং ট্রমা পরবর্তী স্নায়ু পুনর্জন্মের ক্লিনিক্যাল আচরণ নির্ধারণ করে।'
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
          heading: l('Seddon Classification and the Molecular Cascade of Wallerian Degeneration', 'সেডন শ্রেণিবিভাগ এবং ওয়ালারিয়ান অবক্ষয়ের আণবিক চক্র'),
          paragraphs: [
            l(
              'Traumatic peripheral nerve injuries are universally categorized using Sir Herbert Seddon seminal tripartite classification: (1) Neuropraxia: a transient physiological conduction block without anatomical discontinuity of the axon; full spontaneous clinical recovery occurs within days to weeks; (2) Axonotmesis: physical severance of axons with preservation of the surrounding perineurial and endoneurial tubes; and (3) Neurotmesis: complete structural division of axons and all supporting connective tissue sheaths.',
              'প্রান্তীয় স্নায়ুর আঘাতকে বিজ্ঞানী হার্বার্ট সেডন তিনটি শ্রেণিতে বিভক্ত করেছেন: (১) নিউরোপ্র্যাক্সিয়া: যেখানে অ্যাক্সন না কেটে কেবল রক্ত সরবরাহ কমে সংকেত সাময়িক বন্ধ হয়, যা কয়েক সপ্তাহে পুরোপুরি ভালো হয়ে যায়; (২) অ্যাক্সোনটমেসিস: অ্যাক্সন কেটে গেলেও বাইরের সুরক্ষামূলক খোলস অটুট থাকে; এবং (৩) নিউরোটমেসিস: সম্পূর্ণ স্নায়ু এবং তার সমস্ত খোলস কেটে আলাদা হয়ে যাওয়া যা অস্ত্রোপচার ছাড়া জোড়া লাগা অসম্ভব।'
            ),
            l(
              'In axonotmesis and neurotmesis, the distal segment disconnected from the cell body undergoes Wallerian degeneration. Within 24 to 48 hours, calcium influx activates calpain proteases that disintegrate the neurofilament cytoskeleton and axolemma. Resident and hematogenous macrophages infiltrate to phagocytose fragmented myelin debris. The denervated Schwann cells shed their myelin, proliferate, and align longitudinally to form continuous cellular conduits termed bands of Büngner, which guide regenerating axon sprouts advancing at approximately 1 mm per day toward target end-organs.',
              'অ্যাক্সন বিচ্ছিন্ন হলে তার দূরবর্তী অংশ ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ক্যালসিয়াম প্রবেশের কারণে ক্ষয় হতে শুরু করে যা ওয়ালারিয়ান অবক্ষয় নামে পরিচিত। ম্যাক্রোফেজ এসে ভাঙা মায়েলিনের ধ্বংসাবশেষ পরিষ্কার করে ফেলে। এরপর সোয়ান কোষগুলো বিভাজিত হয়ে সারিবদ্ধভাবে বুংনারের ব্যান্ড তৈরি করে, যা প্রতিদিন ১ মিলিমিটার হারে নতুন গজানো অ্যাক্সনকে সামনের দিকে পথ দেখিয়ে সংশ্লিষ্ট পেশী বা অঙ্গে পৌঁছে দেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Synaptic Transmission Ultrastructure, SNARE Assembly and Pathologies', 'সাইন্যাপসের অণুগঠন, স্নেয়ার কমপ্লেক্স এবং নিউরোটক্সিন রোগব্যাধি'),
          paragraphs: [
            l(
              'At the chemical synapse, action potentials invading the presynaptic bouton open voltage-gated P/Q- and N-type Ca2+ channels. Local micromolar calcium surges bind the calcium sensor synaptotagmin, catalyzing ultrafast fusion of synaptic vesicles mediated by the core SNARE complex: v-SNARE synaptobrevin (VAMP) zippering with t-SNAREs syntaxin-1 and SNAP-25 on the plasma membrane. Neurotransmitter is exocytosed into the 20 nm synaptic cleft within 200 microseconds, binding postsynaptic ligand-gated receptors.',
              'রাসায়নিক সাইন্যাপসে অ্যাকশন পটেনশিয়াল পৌঁছালে ক্যালসিয়াম চ্যানেলের মাধ্যমে কোষে ক্যালসিয়াম প্রবেশ করে। এই ক্যালসিয়াম সাইন্যাপটোট্যাগমিনের সাথে যুক্ত হয়ে স্নেয়ার প্রোটিন কমপ্লেক্সকে সক্রিয় করে; সিন্যাপ্টোব্রেভিন, সিনট্যাক্সিন ও স্ন্যাপ-২৫ প্রোটিন একসাথে মিলে ভেসিকলকে প্লাজমা মেমব্রেনের সাথে মিশিয়ে দেয় এবং মাইক্রোসেকেন্ডের মধ্যে নিউরোট্রান্সমিটার ফাঁকা সাইন্যাপসে ছড়িয়ে পড়ে ও ওপরের গ্রাহকে যুক্ত হয়।'
            ),
            l(
              'Disruption of this molecular nanomachinery produces devastating clinical synaptopathies. Botulinum neurotoxin (from Clostridium botulinum) cleaves SNAP-25 and synaptobrevin at peripheral cholinergic motor endplates, irreversibly blocking acetylcholine release and producing descending flaccid paralysis. Conversely, tetanus toxin undergoes retrograde transport to the spinal cord, cleaving synaptobrevin in inhibitory Renshaw and interneuron terminals, preventing glycine and GABA release and resulting in uninhibited, agonizing spastic muscle spasms and trismus (lockjaw).',
              'এই আণবিক ব্যবস্থার ক্ষতি মারাত্মক স্নায়ুরোগ সৃষ্টি করে। বোটুলিনাম টক্সিন স্নেয়ার প্রোটিন কেটে দিয়ে মোটর নার্ভ থেকে অ্যাসিটাইলকোলিন নিঃসরণ চিরতরে বন্ধ করে দেয়, ফলে সারা শরীর নিস্তেজ হয়ে পক্ষাঘাত (Flaccid paralysis) তৈরি হয়। অন্যদিকে টিটেনাসের বিষ মেরুদণ্ডের ইনহিবিটরি স্নায়ুতে ঢুকে একই প্রোটিন কেটে দেয়, যার ফলে পেশীর সংকোচন থামানোর কোনো সংকেত থাকে না এবং সারা শরীরের পেশী ধনুকের মতো শক্ত হয়ে মারাত্মক ধনুষ্টঙ্কার রোগ সৃষ্টি করে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-part schematic of neural tissue organization: multipolar neuron morphology, neuroglial supportive network, triple-layered peripheral nerve fascial architecture, and the synaptic SNARE machinery.',
      'স্নায়ু টিস্যুর ৪টি স্তর: মাল্টিপোলার নিউরনের রূপবিজ্ঞান, সহায়ক নিউরোগ্লিয়ার নেটওয়ার্ক, প্রান্তীয় স্নায়ুর ত্রি-স্তরীয় ফাসিয়া এবং সাইন্যাপসের স্নেয়ার প্রোটিন ব্যবস্থা।'
    ),
    steps: [
      l(
        '1. Multipolar neurons integrate dendritic inputs and generate all-or-none action potentials at the axon initial segment.',
        '১. মাল্টিপোলার নিউরন ডেনড্রাইট দিয়ে সংকেত গ্রহণ করে এবং অ্যাক্সনের গোড়ায় অ্যাকশন পটেনশিয়াল বিদ্যুৎ তরঙ্গ তৈরি করে।'
      ),
      l(
        '2. Oligodendrocytes (CNS) and Schwann cells (PNS) wrap axons in multi-lamellar myelin to accelerate saltatory conduction.',
        '২. অলিগোডেনড্রোসাইট ও সোয়ান কোষ অ্যাক্সনকে মায়েলিন দিয়ে আবৃত করে বিদ্যুৎ তরঙ্গের গতি বহু গুণ বাড়িয়ে দেয়।'
      ),
      l(
        '3. Epineurium, perineurium, and endoneurium shield peripheral nerve axons and preserve the blood-nerve barrier.',
        '৩. এপিনিউরিয়াম, পেরিনিউরিয়াম এবং এন্ডোনিউরিয়াম স্নায়ুকে সুরক্ষিত রাখে এবং রক্ত-স্নায়ু প্রাচীর বজায় রাখে।'
      ),
      l(
        '4. Presynaptic SNARE complexes drive vesicle fusion to release neurotransmitters across the 20 nm synaptic cleft.',
        '৪. সাইন্যাপসে স্নেয়ার প্রোটিন ভেসিকল মিশিয়ে দিয়ে ফাঁকা জায়গায় রাসায়নিক সংকেত পাঠিয়ে পরবর্তী নিউরনকে উত্তেজিত করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 26-year-old carpenter sustains a deep laceration across the anterior wrist from a circular saw. Surgical exploration reveals that the median nerve trunk has been completely severed, with disruption of both the axons and all three supporting connective tissue sheaths (epineurium, perineurium, and endoneurium). Under the Seddon classification, what category of nerve injury has occurred?',
      'করাতের আঘাতে ২৬ বছর বয়সী এক ছুতোরের কবজির মিডিয়ান নার্ভ সম্পূর্ণ কেটে গেল। অপারেশনে দেখা গেল স্নায়ুর অ্যাক্সন এবং তার তিনটি সুরক্ষামূলক ফাসিয়া স্তরই (এপিনিউরিয়াম, পেরিনিউরিয়াম ও এন্ডোনিউরিয়াম) পুরোপুরি দ্বিখণ্ডিত হয়ে গেছে। সেডনের শ্রেণিবিভাগ অনুসারে এটি কোন ধরনের স্নায়ু আঘাত?'
    ),
    options: [
      l('Neurotmesis', 'নিউরোটমেসিস (Neurotmesis)'),
      l('Axonotmesis', 'অ্যাক্সোনটমেসিস (Axonotmesis)'),
      l('Neuropraxia', 'নিউরোপ্র্যাক্সিয়া (Neuropraxia)'),
      l('Segmental demyelination', 'সেগমেন্টাল ডিমায়েলিনেশন'),
    ],
    correctIndex: 0,
    explanation: l(
      'Under the Seddon classification, complete transection of the nerve trunk involving disruption of the axon, endoneurium, perineurium, and epineurium is defined as Neurotmesis (equivalent to Sunderland Grade V). Spontaneous functional regeneration cannot occur because the guiding endoneurial conduits are destroyed; primary microsurgical epineurial or perineurial reapproximation is mandatory to restore function.',
      'সেডনের শ্রেণিবিভাগে স্নায়ুর অ্যাক্সন এবং তার সমস্ত সুরক্ষামূলক ফাসিয়া স্তর (এন্ডোনিউরিয়াম, পেরিনিউরিয়াম ও এপিনিউরিয়াম) সম্পূর্ণ বিচ্ছিন্ন হয়ে যাওয়াকে নিউরোটমেসিস বলে। এতে সোয়ান কোষের পথপ্রদর্শক খোলস সম্পূর্ণ নষ্ট হয়ে যাওয়ায় নিজে নিজে স্নায়ু জোড়া লাগতে পারে না; মাইক্রোসার্জারির মাধ্যমে সেলাই করে জোড়া লাগানো অপরিহার্য।'
    ),
  },
}
