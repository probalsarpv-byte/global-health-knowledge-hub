import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch13-14',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapters 13 & 14: The Brain and Cranial Nerves',
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

export const chapter18BrainLesson: LessonTopic = {
  id: 'topic.anatomy.brain',
  slug: 'brain',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('18 · Brain and Cranial Nerves', '১৮ · মস্তিষ্ক ও করোটিক স্নায়ু'),
  summary: l(
    'A comprehensive, authoritative neuroanatomical study of the human brain and cranial nerves: cerebral lobes and Brodmann cytoarchitecture, the basal ganglia and internal capsule, brainstem cranial nerve nuclei, cerebellar coordination circuitry, ventricular CSF circulation, the arterial Circle of Willis, and acute stroke localization.',
    'মানব মস্তিষ্ক ও ১২ জোড়া করোটিক স্নায়ুর বিশদ ও প্রামাণ্য নিউরোঅ্যানাটমিক্যাল অধ্যয়ন: সেরিব্রাল লোব ও ব্রডম্যান কর্টেক্স, বেসাল গ্যাংলিয়া ও ইন্টারনাল ক্যাপসুল, ব্রেনস্টেম ও করোটিক স্নায়ুর নিউক্লিয়াস, সেরিবেলার সমন্বয় বর্তনী, ভেন্ট্রিকল ও সিএসএফ সংবহন, উইলির ধমনী বৃত্ত এবং তীব্র স্ট্রোকের শারীরস্থানিক নির্ণয়।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Map the four macroscopic cerebral lobes, key functional Brodmann areas (BA 4 motor, BA 3,1,2 sensory, BA 44/45 Broca, BA 22 Wernicke), and deep nuclear basal ganglia loops.',
      'সেরিব্রামের চারটি প্রধান লোব, গুরুত্বপূর্ণ কার্যকরী ব্রডম্যান অঞ্চলসমূহ (BA 4 মোটর, BA 3,1,2 সেন্সরি, ব্রোকার ও ওয়ার্নিকের ভাষা কেন্দ্র) এবং বেসাল গ্যাংলিয়ার মোটর লুপ মানচিত্রে চিহ্নিত করা।'
    ),
    l(
      'Trace brainstem cranial nerve nuclei from midbrain to medulla, cataloging the anatomical exit foramina and clinical deficits for all 12 pairs of cranial nerves (CN I through XII).',
      'মিডব্রেন থেকে মেডুলা পর্যন্ত ১২ জোড়া করোটিক স্নায়ুর নিউক্লিয়াসের অবস্থান, মাথার খুলির প্রস্থান ছিদ্রসমূহ এবং স্নায়ু ক্ষতিগ্রস্ত হলে সৃষ্ট ক্লিনিক্যাল লক্ষণ তালিকাভুক্ত করা।'
    ),
    l(
      'Analyze the dynamics of cerebrospinal fluid (CSF) flow through the four ventricles and map the collateral cerebral perfusion circuit of the arterial Circle of Willis.',
      'মস্তিষ্কের চারটি প্রকোষ্ঠের মধ্য দিয়ে সিএসএফ সংবহন গতিবিদ্যা এবং উইলির ধমনী বৃত্তের (Circle of Willis) রক্ত সরবরাহ ও স্ট্রোকের ভাস্কুলার অঞ্চলসমূহ বিশ্লেষণ করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.spinal-cord'],
  relatedTopicIds: ['topic.anatomy.neural-tissue'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch13-14', 'kandel-neuroscience-6e'],
    structure: ['openstax-ap2e-ch13-14', 'moore-anatomy-9e'],
    mechanism: ['guyton-hall-14e', 'kandel-neuroscience-6e'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'kandel-neuroscience-6e'],
    takeaways: ['openstax-ap2e-ch13-14', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Cerebral Hemispheres & Brodmann Cytoarchitecture', 'ভূমিকা: সেরিব্রাল গোলার্ধ ও ব্রডম্যান অঞ্চলসমূহ'), sectionId: 'introduction' },
      { id: 'sec-basal-stem', label: l('Basal Ganglia, Internal Capsule & Brainstem', 'বেসাল গ্যাংলিয়া, ইন্টারনাল ক্যাপসুল ও ব্রেনস্টেম'), sectionId: 'structure' },
      { id: 'sec-ventricles-willis', label: l('Ventricular CSF Flow & the Circle of Willis', 'ভেন্ট্রিকুলার সিএসএফ প্রবাহ ও উইলির ধমনী বৃত্ত'), sectionId: 'mechanism' },
      { id: 'sec-cranial-nerves', label: l('The Twelve Cranial Nerves: Nuclei & Exit Foramina', 'বারো জোড়া করোটিক স্নায়ু: নিউক্লিয়াস ও ছিদ্র'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Neurology: MCA Stroke, Aneurysms & Palsies', 'ক্লিনিক্যাল নিউরোলজি: এমসিএ স্ট্রোক, অ্যানিউরিজম ও প্যারালাইসিস'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary & Brain Anatomy Glossary', 'সারসংক্ষেপ ও মস্তিষ্ক অ্যানাটমির শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Arterial Circle of Willis', 'উইলিসের ধমনী বৃত্ত (Circle of Willis)'),
        definition: l(
          'An anastomotic heptagon of arteries situated at the base of the brain in the interpeduncular cistern, formed by the anterior communicating artery, paired anterior cerebral arteries, internal carotid arteries, paired posterior communicating arteries, and paired posterior cerebral arteries; provides crucial collateral circulation during vascular occlusions.',
          'মস্তিষ্কের তলায় অবস্থিত একটি সাত-বাহুবিশিষ্ট ধমনী বৃত্ত যা অ্যান্টিরিয়র কমিউনিকেটিং, দুটি অ্যান্টিরিয়র সেরিব্রাল, ইন্টারনাল ক্যারোটিড, পোস্টেরিয়র কমিউনিকেটিং এবং পোস্টেরিয়র সেরিব্রাল ধমনীর মিলনে তৈরি; কোনো একটি প্রধান ধমনী বন্ধ হলেও এটি বিকল্প পথে রক্ত পাঠিয়ে মস্তিষ্ককে বাঁচায়।'
        ),
      },
      {
        term: l('Ventricular CSF Pathway', 'ভেন্ট্রিকুলার সিএসএফ সংবহন পথ'),
        definition: l(
          'Continuous fluid route: CSF is secreted by choroid plexuses in lateral ventricles, flows through paired interventricular foramina of Monro into the third ventricle, traverses the narrow cerebral aqueduct of Sylvius into the fourth ventricle, exits through the lateral foramina of Luschka and median foramen of Magendie into the subarachnoid space, and is resorbed into the superior sagittal sinus by arachnoid granulations of Pacchioni.',
          'সিএসএফ তরলের পথ: দুই পাশের ল্যাটারাল ভেন্ট্রিকলের কোরয়েড প্লেক্সাসে তৈরি হয়ে মনরোর ছিদ্র দিয়ে তৃতীয় ভেন্ট্রিকলে যায়, সেখান থেকে সরু অ্যাকুইডাক্ট দিয়ে চতুর্থ ভেন্ট্রিকলে নেমে লুশকা ও মেগেন্দির ছিদ্র দিয়ে সাবঅ্যারাকনয়েড গহ্বরে বের হয় এবং পরিশেষে অ্যারাকনয়েড গ্র্যানুলেশনের মাধ্যমে শিরায় ফিরে যায়।'
        ),
      },
      {
        term: l('Internal Capsule (Anterior Limb, Genu, Posterior Limb)', 'ইন্টারনাল ক্যাপসুল (অ্যান্টেরিয়র লিম্ব, জেনু, পোস্টেরিয়র লিম্ব)'),
        definition: l(
          'A compact V-shaped two-way highway of ascending and descending white matter fibers bounded medially by the thalamus and caudate nucleus, and laterally by the lentiform nucleus. The genu transmits corticobulbar fibers (facial motor control); the posterior limb transmits the corticospinal motor tract and somatosensory thalamocortical projections.',
          'থ্যালামাস ও লেন্টিফর্ম নিউক্লিয়াসের মাঝে অবস্থিত ভি-আকৃতির ঘন শ্বেতবস্তুর প্রধান স্নায়ু মহাসড়ক। এর বাঁক বা জেনু দিয়ে মুখের পেশী নিয়ন্ত্রণকারী কর্টিকোবালবার তন্তু যায়; আর পেছনের বাহু দিয়ে হাত-পায়ের প্রধান মোটর কর্টিকোস্পাইনাল পথ এবং অনুভূতি বহনকারী সংবেদী পথগুলো চলাচল করে।'
        ),
      },
      {
        term: l('Twelve Cranial Nerves Functional Hierarchy', '১২ জোড়া করোটিক স্নায়ুর কার্যকরী বিন্যাস'),
        definition: l(
          'Twelve paired peripheral nerves emerging directly from the brain and brainstem (CN I through XII): CN I (Olfactory), CN II (Optic), CN III (Oculomotor), CN IV (Trochlear), CN V (Trigeminal: V1 ophthalmic, V2 maxillary, V3 mandibular), CN VI (Abducens), CN VII (Facial), CN VIII (Vestibulocochlear), CN IX (Glossopharyngeal), CN X (Vagus), CN XI (Accessory), and CN XII (Hypoglossal).',
          'মস্তিষ্ক ও ব্রেনস্টেম থেকে সরাসরি বের হওয়া ১২ জোড়া বিশেষ স্নায়ু: ১ অলফ্যাক্টরি (ঘ্রাণ), ২ অপটিক (দৃষ্টি), ৩ অকিউলোমোটর, ৪ ট্রকলিয়ার, ৫ ট্রাইজেমিনাল (মুখের স্পর্শ ও চর্বণ), ৬ অ্যাবডুসেন্স, ৭ ফেসিয়াল (মুখের পেশী ও স্বাদ), ৮ ভেস্টিবুলোককলিয়ার (শ্রবণ ও ভারসাম্য), ৯ গ্লসোফ্যারিঞ্জিয়াল, ১০ ভেগাস (ভিসেরাল অঙ্গ), ১১ অ্যাক্সেসরি এবং ১২ হাইপোগ্লসাল (জিহ্বা সঞ্চালন)।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Localizing a Left Middle Cerebral Artery (MCA) Territory Ischemic Stroke', 'বাম মিডল সেরিব্রাল ধমনী (MCA) স্ট্রোকের শারীরস্থানিক লক্ষণ নির্ণয়'),
        steps: [
          l('Step 1: Identify motor homunculus territory: the MCA supplies the lateral convexity of the cerebral hemisphere, which maps the face, hand, and arm representation on the precentral gyrus (Brodmann Area 4). Occlusion causes contralateral (right-sided) hemiparesis predominantly affecting the face and upper extremity.', 'ধাপ ১: মোটর কর্টেক্সের মানচিত্র দেখুন: এমসিএ ধমনী মস্তিষ্কের বাইরের অংশে রক্ত দেয় যেখানে মুখ, হাত ও বাহুর নিয়ন্ত্রণ কেন্দ্র থাকে। ফলে ধমনী বন্ধ হলে বিপরীত পাশে (ডান পাশে) মুখ ও হাতের তীব্র পক্ষাঘাত তৈরি হয়, অথচ পায়ের শক্তি তুলনামূলক ভালো থাকে।'),
          l('Step 2: Recognize dominant language cortices: in >95% of individuals, the left hemisphere is language-dominant. The superior MCA division supplies Broca motor speech area (BA 44/45 in inferior frontal gyrus), while the inferior division supplies Wernicke comprehension area (BA 22 in superior temporal gyrus).', 'ধাপ ২: ভাষা কেন্দ্র বুঝুন: ৯৫% মানুষের বাম গোলার্ধে ভাষার নিয়ন্ত্রণ কেন্দ্র থাকে। এমসিএ-র ওপরের শাখা ব্রোকার মোটর এরিয়া এবং নিচের শাখা ওয়ার্নিকের ভাষা বোঝার এলাকায় রক্ত দেয়; ফলে সম্পূর্ণ এমসিএ ব্লক হলে কথা বলা ও বোঝার ক্ষমতা সম্পূর্ণ হারিয়ে যায় (গ্লোবাল অ্যাফেজিয়া)।'),
          l('Step 3: Check visual and sensory projections: the posterior limb of the internal capsule and optic radiations (Meyer loop and parietal bundle) coursing to the calcarine cortex are infarcted, generating contralateral right-sided homonymous hemianopsia without macular sparing.', 'ধাপ ৩: দৃষ্টি ও অনুভূতি পরীক্ষা করুন: অপটিক রেডিয়েশনের স্নায়ুতন্তু ক্ষতিগ্রস্ত হওয়ার ফলে রোগীর দুই চোখেরই ডান পাশের দৃষ্টি পুরোপুরি বন্ধ হয়ে যায় (হোমোনিমাস হেমিয়ানপসিয়া)।'),
        ],
        conclusion: l('Contralateral right-sided faciobrachial hemiparesis, right hemisensory loss, right homonymous hemianopsia, and global aphasia form the classic, unmistakable neuroanatomical syndrome of a complete left main-stem MCA occlusion.', 'বিপরীত পাশের মুখ ও হাতে প্যারালাইসিস, ডান চোখের দৃষ্টি আংশিক বন্ধ এবং কথা বলা ও বোঝার ক্ষমতা লোপ পাওয়া হলো প্রধান বাম এমসিএ ধমনী স্ট্রোকের নিশ্চিত শারীরস্থানিক লক্ষণ, যা জরুরি থ্রম্বোলাইসিস ও মেকানিক্যাল থ্রম্বেক্টমির নির্দেশ দেয়।' ),
      },
    ],
    checkpoints: [
      {
        question: l('Why does an acute uncal herniation (transtentorial herniation) cause an ipsilateral dilated, fixed pupil followed by contralateral hemiplegia?', 'মাথার ভেতরে রক্তক্ষরণে আনকাল হার্নিয়েশন হলে একই চোখের মণি কেন আলোতে সাড়া না দিয়ে বড় হয়ে যায় (ব্লোন পিউপিল) এবং বিপরীত পাশে প্যারালাইসিস হয়?'),
        answer: l('Expanding temporal lobe mass forces the medial temporal uncus over the rigid edge of the tentorium cerebelli. The herniating uncus mechanically crushes the adjacent oculomotor nerve (CN III), interrupting parasympathetic pupilloconstrictor fibers to produce an ipsilateral wide, unreactive pupil (blown pupil). Continued downward herniation compresses the ipsilateral cerebral peduncle carrying corticospinal motor axons, producing contralateral hemiplegia.', 'টেম্পোরাল লোবের ফোলা অংশ (আনকাস) টেন্টোরিয়ামের শক্ত কিনারার ওপর দিয়ে নিচে নেমে আসে এবং পাশে থাকা ৩য় করোটিক স্নায়ুকে (অকিউলোমোটর) চেপে পিষে ফেলে। এর ফলে স্নায়ুর ভেতরের প্যারাসিমপ্যাথেটিক তন্তু নষ্ট হয়ে একই পাশের চোখের মণি অস্বাভাবিক বড় ও আলোতে নিশ্চল হয়ে যায়; এরপর ব্রেনস্টেমের ক্রাশের কারণে উল্টো পাশের হাত-পায়ে প্যারালাইসিস ঘটে।' ),
      },
      {
        question: l('How does Bell palsy (peripheral facial nerve CN VII lesion) clinically differ from a central supranuclear (stroke) facial palsy?', 'বেলস পালসি (প্রান্তীয় ৭ম স্নায়ুর ক্ষতি) এবং মস্তিষ্কের স্ট্রোকজনিত মুখের প্যারালাইসিসের মধ্যে পার্থক্য করার মূল শারীরস্থানিক লক্ষণ কী?'),
        answer: l('The upper face motor nucleus of CN VII receives bilateral corticobulbar innervation from both cerebral hemispheres, whereas the lower face nucleus receives only contralateral input. A central stroke destroys only the contralateral corticobulbar drive, sparing the forehead (patient can still wrinkle forehead and close eyes tightly). In contrast, Bell palsy affects the peripheral nerve trunk of CN VII, paralyzing both upper and lower facial muscles, resulting in inability to wrinkle the forehead and inability to close the eye.', 'কপাল নিয়ন্ত্রণকারী ফেসিয়াল স্নায়ুর নিউক্লিয়াসটি মস্তিষ্কের উভয় পাশ থেকেই সংকেত পায়, কিন্তু মুখের নিচের অংশ কেবল বিপরীত পাশ থেকে সংকেত পায়। ফলে মস্তিষ্কের স্ট্রোকে কপাল কুঁচকানোর ক্ষমতা অক্ষত থাকে; কিন্তু বেলস পালসিতে পুরো ফেসিয়াল স্নায়ু ক্ষতিগ্রস্ত হওয়ায় কপাল, চোখ বন্ধ করা এবং মুখের নিচের অংশ—সব এক সাথে অবশ হয়ে যায়।' ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch18-brain-diagram',
    title: l('Interactive Encephalon Architecture & Cranial Nerve Emergence', 'ইন্টারেক্টিভ মস্তিষ্ক ও করোটিক স্নায়ুর বিন্যাস'),
    description: l(
      'Inspect the four primary neuroanatomical zones of the human brain: the cerebral hemispheres and functional Brodmann cortices, the basal ganglia and internal capsule, the brainstem and cranial nerve exits, and the ventricular CSF pathway.',
      'মানব মস্তিষ্কের চারটি প্রধান শারীরস্থানিক অঞ্চল পরীক্ষা করুন: সেরিব্রাল গোলার্ধ ও ব্রডম্যান কর্টেক্স, বেসাল গ্যাংলিয়া ও ইন্টারনাল ক্যাপসুল, ব্রেনস্টেম ও করোটিক স্নায়ুর পথ এবং ভেন্ট্রিকুলার সিএসএফ সংবহন।'
    ),
    disclaimer: l(
      'Neuroanatomical schematic: select any sector to review cortical functional mapping, subcortical motor circuitry, cranial nerve emerge points, and vascular territories.',
      'নিউরোঅ্যানাটমিক্যাল চিত্র: কর্টেক্সের কার্যপদ্ধতি, সাবকর্টিকাল মোটর বর্তনী, করোটিক স্নায়ুর প্রস্থান এবং রক্ত সংবহন অঞ্চল দেখতে যেকোনো অংশ নির্বাচন করুন।'
    ),
    svgType: 'brain-system',
    items: [
      {
        id: 'cerebral-cortex',
        label: l('Cerebral Lobes & Brodmann Cortices', 'সেরিব্রাল লোব ও ব্রডম্যান কর্টেক্স'),
        description: l(
          'Higher cognition, voluntary motor planning, and sensory integration. Divided into Frontal, Parietal, Temporal, and Occipital lobes. Houses BA 4 (motor) and BA 3,1,2 (sensory).',
          'উচ্চতর চেতনা, ঐচ্ছিক নড়াচড়া এবং সংবেদী বিশ্লেষণের কেন্দ্র। ফ্রন্টাল, প্যারাইটাল, টেম্পোরাল ও অক্সিপিটাল লোবে বিভক্ত। ব্রোকার ও ওয়ার্নিকের ভাষা কেন্দ্র ধারণ করে।'
        ),
        details: l(
          'Motor homunculus on precentral gyrus displays upside-down topography (leg medial, face lateral). Dominant left hemisphere controls speech output and syntax.',
          'প্রিসেন্ট্রাল জাইরাসে শরীরের মোটর মানচিত্র উল্টোভাবে থাকে (পা ভেতরে, মুখ বাইরে)। বাম গোলার্ধ ভাষা ও ব্যাকরণ নিয়ন্ত্রণ করে।'
        ),
        sectionId: 'introduction',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'basal-ganglia-capsule',
        label: l('Basal Ganglia & Internal Capsule', 'বেসাল গ্যাংলিয়া ও ইন্টারনাল ক্যাপসুল'),
        description: l(
          'Subcortical motor loops and major projection highway. Striatum (caudate + putamen) receives cortical inputs; globus pallidus outputs to thalamus. Modulated by dopamine.',
          'ঐচ্ছিক নড়াচড়া মসৃণ করার মোটর লুপ এবং প্রধান স্নায়ু মহাসড়ক। স্ট্রিয়াটাম কর্টেক্স থেকে তথ্য নিয়ে থ্যালামাসে পাঠায়। ডোপামিন হরমোন এই গতি মসৃণ রাখে।'
        ),
        details: l(
          'Degeneration of dopaminergic neurons in substantia nigra pars compacta causes Parkinson disease (resting tremor, rigidity, bradykinesia).',
          'সাবস্ট্যানশিয়া নাইগ্রায় ডোপামিন তৈরি করা কোষ ধ্বংস হলে পারকিনসন্স রোগ (হাত কাঁপা, শক্ত ভাব ও ধীর গতি) তৈরি হয়।'
        ),
        sectionId: 'structure',
        color: '#fed7aa',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'brainstem-nerves',
        label: l('Brainstem & Cranial Nerves I–XII', 'ব্রেনস্টেম ও ১২ জোড়া করোটিক স্নায়ু'),
        description: l(
          'Vital cardiorespiratory centers and cranial nerve gateway: Midbrain (CN III, IV), Pons (CN V, VI, VII, VIII), and Medulla (CN IX, X, XI, XII). Ascending reticular formation controls consciousness.',
          'জীবনরক্ষাকারী শ্বাস-প্রশ্বাস কেন্দ্র ও স্নায়ুর প্রবেশদ্বার: মিডব্রেন (৩, ৪), পনস (৫, ৬, ৭, ৮) এবং মেডুলা (৯, ১০, ১১, ১২)। রেটিকুলার ফর্মেশন মানুষের চেতনা বজায় রাখে।'
        ),
        details: l(
          'Pyramidal decussation in caudal medulla crosses 85–90% of lateral corticospinal motor axons. Medullary olivary nuclei project climbing fibers to cerebellum.',
          'মেডুলার পিরামিডে ৮৫ থেকে ৯০ শতাংশ মোটর স্নায়ু অপর পাশে ক্রস করে। অলিম্পিক নিউক্লিয়াস সেরিবেলামের সাথে সমন্বয় করে।'
        ),
        sectionId: 'integration',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'ventricles-circle-willis',
        label: l('Ventricular System & Circle of Willis', 'ভেন্ট্রিকুলার ব্যবস্থা ও উইলির ধমনী বৃত্ত'),
        description: l(
          'Fluid cushioning and cerebral arterial perfusion. Lateral ventricles connect via Monro to 3rd and aqueduct to 4th ventricle. Circle of Willis buffers cerebral ischemia.',
          'মস্তিষ্কের তরল কুশন ও রক্ত সংবহন। ল্যাটারাল ভেন্ট্রিকল মনরোর ছিদ্র দিয়ে তৃতীয় ও অ্যাকুইডাক্ট দিয়ে চতুর্থ ভেন্ট্রিকলে মেশে। উইলির ধমনী বৃত্ত স্ট্রোক প্রতিরোধে কাজ করে।'
        ),
        details: l(
          'Aqueductal stenosis produces non-communicating hydrocephalus with massively dilated lateral ventricles. Rupture of saccular Berry aneurysms in the Circle of Willis causes thunderclap subarachnoid hemorrhage.',
          'অ্যাকুইডাক্ট সরু হলে মাথায় পানি জমে হাইড্রোসেফালাস হয়। উইলির ধমনী বৃত্তের অ্যানিউরিজম ফেটে গেলে হঠাৎ বজ্রপাতের মতো তীব্র মাথাব্যথা নিয়ে রক্তক্ষরণ হয়।'
        ),
        sectionId: 'mechanism',
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
          heading: l('The Four Primary Divisions of the Encephalon', 'মানব মস্তিষ্কের চারটি প্রধান ভৌগোলিক বিভাজন'),
          paragraphs: [
            l(
              'The human brain (encephalon) is the most metabolically demanding and structurally complex organ in the body, consuming roughly 20% of resting cardiac output and 20% of systemic oxygen while accounting for only 2% of total body mass. Macroscopically, it is partitioned into four primary divisions: (1) the massive cerebral hemispheres (telencephalon), (2) the central diencephalon, (3) the brainstem (midbrain, pons, and medulla oblongata), and (4) the dorsal cerebellum.',
              'মানব মস্তিষ্ক হলো দেহের সবচেয়ে জটিল ও শক্তিক্ষুধার্ত অঙ্গ; শরীরের মোট ওজনের মাত্র ২ শতাংশ হওয়া সত্ত্বেও এটি বিশ্রামরত অবস্থায় শরীরের ২০ শতাংশ রক্ত এবং ২০ শতাংশ অক্সিজেন একাই ব্যবহার করে। শারীরস্থানিকভাবে মস্তিষ্ক চারটি প্রধান অঞ্চলে বিভক্ত: (১) দুটি বিশাল সেরিব্রাল গোলার্ধ, (২) কেন্দ্রীয় ডায়েনসেফালন, (৩) ব্রেনস্টেম (মিডব্রেন, পনস ও মেডুলা অবলংগাটা) এবং (৪) পেছনের সেরিবেলাম বা লঘুমস্তিষ্ক।'
            ),
            l(
              'The cerebral cortex is organized into thousands of convoluted folds: elevated ridges termed gyri separated by shallow grooves called sulci or deep fissures. Two prominent landmarks define the lobes on each hemisphere: the central sulcus of Rolando (separating the frontal lobe from the parietal lobe) and the lateral sulcus of Sylvius (demarcating the temporal lobe below). The occipital lobe sits posteriorly at the back of the skull, dedicated to the perception and processing of visual reality.',
              'মস্তিষ্কের বাইরের কর্টেক্সটি অসংখ্য ভাঁজ দ্বারা গঠিত: উঁচু খাঁজগুলোকে জাইরাস এবং মধ্যবর্তী নিচু খাঁজগুলোকে সালকাস বলা হয়। দুটি প্রধান সালকাস প্রতিটি গোলার্ধকে লোবে ভাগ করে: সেন্ট্রাল সালকাস ফ্রন্টাল ও প্যারাইটাল লোবকে আলাদা করে এবং ল্যাটারাল সালকাস নিচের টেম্পোরাল লোবকে চিহ্নিত করে। মাথার পেছনে থাকা অক্সিপিটাল লোবটি চোখের মাধ্যমে দেখা সমস্ত দৃশ্য প্রক্রিয়াজাত করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Twelve Cranial Nerves: An Anatomical Overview', 'বারো জোড়া করোটিক স্নায়ুর শারীরস্থানিক রূপরেখা'),
          paragraphs: [
            l(
              'Directly emerging from the inferior aspect of the cerebrum and brainstem are the twelve pairs of cranial nerves, designated by Roman numerals I through XII in a rostrocaudal sequence. Unlike spinal nerves, which uniformly possess mixed sensory and motor roots, cranial nerves are highly specialized: some are purely special sensory (CN I Olfactory, CN II Optic, CN VIII Vestibulocochlear), some are purely somatic motor (CN III, IV, VI, XI, XII), and others are complex mixed nerves (CN V, VII, IX, X).',
              'মস্তিষ্ক ও ব্রেনস্টেমের নিচ থেকে সরাসরি ১২ জোড়া বিশেষ করোটিক স্নায়ু বের হয় যাদের উপর থেকে নিচে রোমান সংখ্যা I থেকে XII দিয়ে চিহ্নিত করা হয়। মেরুদণ্ডের মিশ্র স্নায়ুগুলোর মতো না হয়ে এগুলো বিশেষায়িত: কিছু স্নায়ু কেবল অনুভূতি গ্রহণ করে (১ ঘ্রাণ, ২ দৃষ্টি, ৮ শ্রবণ ও ভারসাম্য), কিছু স্নায়ু কেবল পেশী সঞ্চালন করে (৩, ৪, ৬, ১১, ১২) এবং বাকিগুলো মিশ্র প্রকৃতির (৫, ৭, ৯, ১০)।'
            ),
            l(
              'Each cranial nerve exits the cranial cavity through a dedicated bony opening (foramen, fissure, or canal) in the skull base: CN I traverses the cribriform plate of the ethmoid bone; CN II passes through the optic canal; CN III, IV, V1, and VI traverse the superior orbital fissure into the orbit; CN V2 passes through the foramen rotundum; CN V3 through the foramen ovale; CN VII and VIII enter the internal acoustic meatus; CN IX, X, and XI exit through the jugular foramen; and CN XII traverses the hypoglossal canal.',
              'প্রতিটি করোটিক স্নায়ু মাথার খুলির নির্দিষ্ট ছিদ্র দিয়ে বের হয়: ১ নং স্নায়ু এথময়েড হাড়ের ছিদ্র দিয়ে নাকে নামে; ২ নং স্নায়ু অপটিক ক্যানাল দিয়ে চোখে যায়; ৩, ৪, ৫-এর প্রথম শাখা ও ৬ নং স্নায়ু সুপিরিয়র অরবিটাল ফিশার দিয়ে চোখে প্রবেশ করে; ৭ ও ৮ নং স্নায়ু ইন্টারনাল অ্যাকোস্টিক ক্যানেলে ঢোকে; ৯, ১০ ও ১১ নং স্নায়ু জুগুলার ফোরামেন দিয়ে এবং ১২ নং স্নায়ু হাইপোগ্লসাল ক্যানাল দিয়ে জিহ্বায় পৌঁছে যায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Ventricular Architecture and Cerebrospinal Fluid Flow', 'ভেন্ট্রিকুলার গঠন এবং সেরিব্রোস্পাইনাল ফ্লুইড প্রবাহ'),
          paragraphs: [
            l(
              'The brain and spinal cord are cushioned by approximately 150 mL of clear, cell-free cerebrospinal fluid (CSF), continuously produced at a rate of 500 mL/day (0.35 mL/min) by specialized choroid plexuses within the lateral, third, and fourth ventricles. CSF flows from the lateral ventricles through the paired interventricular foramina of Monro into the slit-like third ventricle, traverses the narrow 1.5 cm cerebral aqueduct of Sylvius through the midbrain into the fourth ventricle, and exits via the lateral apertures of Luschka and median aperture of Magendie.',
              'মস্তিষ্ক ও মেরুরজ্জু প্রায় ১৫০ মিলিলিটার স্বচ্ছ সিএসএফ তরলের ভেতর ভেসে থাকে যা প্রতিদিন প্রায় ৫০০ মিলিলিটার তৈরি হয় ভেন্ট্রিকলের ভেতরে থাকা কোরয়েড প্লেক্সাস দ্বারা। এই তরল দুই পাশের ল্যাটারাল ভেন্ট্রিকল থেকে মনরোর ছিদ্র দিয়ে তৃতীয় ভেন্ট্রিকলে আসে, এরপর মিডব্রেনের সরু অ্যাকুইডাক্ট দিয়ে চতুর্থ ভেন্ট্রিকলে নামে এবং লুশকা ও মেগেন্দির ছিদ্র দিয়ে বের হয়ে সারা মস্তিষ্কের চারপাশে ছড়িয়ে পড়ে।'
            ),
            l(
              'After entering the subarachnoid space surrounding the encephalon and spinal cord, CSF cushions delicate neural tissue against gravitational acceleration and mechanical trauma. It is ultimately resorbed into the venous circulation via arachnoid granulations (Pacchionian bodies) projecting into the superior sagittal sinus. Impairment of CSF drainage or mechanical stenosis of the cerebral aqueduct causes hydrocephalus, producing elevated intracranial pressure and ventricular enlargement.',
              'সাবঅ্যারাকনয়েড গহ্বরে প্রবেশের পর এই সিএসএফ তরল সূক্ষ্ম স্নায়ুকোষগুলোকে বাইরের যে কোনো আঘাত ও ঝাঁকুনি থেকে তরল কুশনের মতো সুরক্ষা প্রদান করে। পরিশেষে সুপিরিয়র স্যাজিটাল সাইনাসে অবস্থিত অ্যারাকনয়েড গ্র্যানুলেশনের মাধ্যমে এই তরল শিরায় ফিরে গিয়ে নিঃশেষিত হয়। এই প্রবাহে বাধা সৃষ্টি হলে বা অ্যাকুইডাক্ট সরু হয়ে গেলে মস্তিষ্কে অতিরিক্ত পানি জমে ইন্ট্রাক্রেনিয়াল প্রেশার বেড়ে হাইড্রোসেফালাস রোগ হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Arterial Perfusion: The Circle of Willis and Stroke Vulnerability', 'ধমনীর রক্ত সংবহন: উইলির বৃত্ত এবং স্ট্রোকের ঝুঁকি'),
          paragraphs: [
            l(
              'The arterial supply of the brain is organized into a remarkable anastomotic polygon at the base of the skull known as the arterial Circle of Willis. Anteriorly, the two internal carotid arteries give off the anterior cerebral arteries (connected by the anterior communicating artery) and the middle cerebral arteries. Posteriorly, the two vertebral arteries unite at the pontomedullary junction to form the basilar artery, which bifurcates into the paired posterior cerebral arteries, linked to the carotid system by paired posterior communicating arteries.',
              'মস্তিষ্কের রক্ত সঞ্চালন নিশ্চিত করতে খুলির তলায় উইলির ধমনী বৃত্ত (Circle of Willis) নামক এক চমৎকার সমান্তরাল সংযোগ তৈরি হয়েছে। সামনের দিকে দুটি ইন্টারনাল ক্যারোটিড ধমনী অ্যান্টিরিয়র ও মিডল সেরিব্রাল ধমনীতে বিভক্ত হয় এবং অ্যান্টিরিয়র কমিউনিকেটিং ধমনী দিয়ে যুক্ত থাকে। পেছনের দিকে দুটি ভার্টিব্রাল ধমনী মিলে ব্যাসিলার ধমনী গঠন করে এবং তা দুটি পোস্টেরিয়র সেরিব্রাল ধমনীতে ভাগ হয়ে পোস্টেরিয়র কমিউনিকেটিং ধমনীর মাধ্যমে পুরো চক্রটি সম্পন্ন করে।'
            ),
            l(
              'This interconnected arterial ring provides critical collateral blood flow: if one internal carotid artery becomes gradually stenosed by atherosclerotic plaque, retrograde perfusion across the anterior communicating and posterior communicating arteries preserves cerebral cortical oxygenation. However, congenital anatomical variations (such as hypoplastic communicating segments) are present in over 50% of individuals, leaving specific cortical regions acutely vulnerable to ischemic infarction during thromboembolic arterial occlusion.',
              'এই সংযুক্ত ধমনী বলয়টি অত্যন্ত জরুরি বিকল্প রক্ত চলাচলের পথ তৈরি করে: যদি একটি অভ্যন্তরীণ ক্যারোটিড ধমনীতে চর্বি জমে সরু হয়ে যায়, তবে অন্য পাশের ধমনীগুলো কমিউনিকেটিং ধমনীর মাধ্যমে রক্ত পাঠিয়ে মস্তিষ্কের কোষগুলোকে বাঁচিয়ে রাখে। তবে অর্ধেকের বেশি মানুষের দেহে এই বৃত্তটির কোনো কোনো শাখা জন্মগতভাবে খুব সরু বা অনুপস্থিত থাকে, যার ফলে রক্তনালীতে রক্তজমাট বাঁধলে তাৎক্ষণিক স্ট্রোক হওয়ার ঝুঁকি অনেকাংশেই বেড়ে যায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Cranial Nerve Examination in Neurological Practice', 'ক্লিনিক্যাল নিউরোলজিতে করোটিক স্নায়ু পরীক্ষা'),
          paragraphs: [
            l(
              'A systematic bedside examination of the twelve cranial nerves provides irreplaceable localizing value for brainstem and skull base pathology. Testing the pupillary light reflex simultaneously evaluates CN II afferents and CN III parasympathetic efferents; the corneal reflex probes CN V1 sensory input and CN VII motor closure of the orbicularis oculi; while testing the gag reflex verifies CN IX sensory integrity and CN X motor innervation of the pharyngeal musculature.',
              'হাসপাতালে বিছানার পাশে ১২ জোড়া করোটিক স্নায়ুর নিয়মতান্ত্রিক পরীক্ষা ব্রেনস্টেম ও মাথার খুলির রোগ নির্ণয়ে অদ্বিতীয় ভূমিকা রাখে। চোখের পিউপিলের আলো প্রতিবর্ত পরীক্ষা অপটিক (২) ও অকিউলোমোটর (৩) স্নায়ুর সমন্বয় যাচাই করে; কর্নিয়া রিফ্লেক্স ট্রাইজেমিনাল (৫) ও ফেসিয়াল (৭) স্নায়ুকে পরীক্ষা করে; এবং গ্যাগ রিফ্লেক্স গ্লসোফ্যারিঞ্জিয়াল (৯) ও ভেগাস (১০) স্নায়ুর কার্যকারিতা নিশ্চিত করে।'
            ),
            l(
              'Differentiating upper motor neuron (UMN) from lower motor neuron (LMN) facial nerve lesions represents a cornerstone of neurological diagnosis. Because the frontalis muscle receives bilateral corticonuclear innervation, a unilateral cortical or internal capsule stroke (UMN lesion) spares forehead movement while paralyzing the contralateral lower face; conversely, a peripheral Bell palsy damaging the facial motor nerve trunk (LMN lesion) paralyzes the entire ipsilateral half of the face, including eyebrow elevation and eye closure.',
              'ফেসিয়াল স্নায়ুর আপার মোটর নিউরন (UMN) এবং লোয়ার মোটর নিউরন (LMN) ক্ষতের পার্থক্য বোঝা স্নায়ুরোগ নির্ণয়ের অন্যতম মৌলিক ধাপ। কপালের পেশী উভয় পাশের মস্তিষ্ক থেকে স্নায়ু সংযোগ পাওয়ায় স্ট্রোকের ক্ষেত্রে (UMN) কপাল কুঁচকানোর ক্ষমতা অক্ষত থাকে কিন্তু বিপরীত পাশের নিচের মুখ বেঁকে যায়; অপরদিকে বেলের পক্ষাঘাত বা স্নায়ু কাণ্ডের সরাসরি ক্ষতিতে (LMN) আক্রান্ত পাশের কপাল, চোখ বন্ধ করা সহ মুখের সম্পূর্ণ একপাশ অবশ হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary & Brain Anatomy Core Principles', 'সারসংক্ষেপ ও মস্তিষ্ক শারীরস্থানের মূল সূত্রসমূহ'),
          paragraphs: [
            l(
              'Mastery of human neuroanatomy requires appreciating the structural integration linking cerebral cortical localization, subcortical basal ganglia modulation, brainstem cranial nerve nuclei, and the protective meningeal-ventricular CSF cushioning architecture. Each functional system is precisely mirrored by a dedicated vascular territory supplied by the internal carotid and vertebrobasilar arterial systems.',
              'মানব স্নায়ুশারীরস্থান সঠিকভাবে আয়ত্ত করার জন্য সেরিব্রাল কর্টেক্সের কার্যকরী অঞ্চল, বেসাল গ্যাংলিয়ার মোটর সমন্বয়, ব্রেনস্টেমের করোটিক স্নায়ু নিউক্লিয়াস এবং সিএসএফ তরলের প্রতিরক্ষামূলক কাঠামোর পারস্পরিক সংযোগ অনুধাবন করা অপরিহার্য। প্রতিটি স্নায়বিক কেন্দ্র অভ্যন্তরীণ ক্যারোটিড ও ভার্টিব্রোব্যাসিলার ধমনী ব্যবস্থা থেকে নির্দিষ্ট এলাকায় অক্সিজেন ও পুষ্টি গ্রহণ করে সুশৃঙ্খলভাবে কাজ পরিচালনা করে।'
            ),
            l(
              'Accurate clinical interpretation of acute neurological emergencies—such as ischemic stroke, intracranial hemorrhage, transtentorial herniation, and cranial neuropathies—rests entirely upon correlating focal neurological deficits with precise anatomical pathways, skull base exit foramina, and vascular perfusion territories.',
              'স্ট্রোক, মস্তিষ্কে রক্তক্ষরণ, মারাত্মক হার্নিয়েশন কিংবা করোটিক স্নায়ুর পক্ষাঘাতের মতো জরুরি স্নায়বিক রোগগুলোর সঠিক চিকিৎসা নির্ভর করে রোগীর শারীরিক লক্ষণগুলোকে মস্তিষ্কের সুনির্দিষ্ট স্নায়ুপথ, খুলির প্রস্থান ছিদ্র এবং রক্তনালীর অঞ্চলের সাথে পুঙ্খানুপুঙ্খভাবে মিলিয়ে দেখার ওপর।'
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
          heading: l('Cerebral Cytoarchitecture and Brodmann Cortical Localization', 'সেরিব্রাল সাইটোআর্কিটেকচার এবং ব্রডম্যানের কর্টিকাল অঞ্চল'),
          paragraphs: [
            l(
              'The mammalian neocortex is historically classified into 52 cytoarchitecturally distinct areas delineated by Korbinian Brodmann based on cellular density, neuronal soma morphology, and laminar thickness across six histological cortical layers (molecular layer I, external granular layer II, external pyramidal layer III, internal granular layer IV, internal pyramidal layer V, and multiform layer VI). The primary motor cortex (Brodmann area 4, precentral gyrus) contains giant Betz pyramidal cells in layer V projecting directly into the corticospinal tract.',
              'মানুষের মস্তিষ্কের নিওকর্টেক্সকে কর্বিনিয়ান ব্রডম্যান কোষের গঠন, স্তরবিন্যাস ও ঘনত্বের ওপর ভিত্তি করে ৫২টি অঞ্চলে বিভক্ত করেন যা ছয়টি সুনির্দিষ্ট হিস্টোলজিক্যাল স্তর নিয়ে গঠিত। প্রি-সেন্ট্রাল জাইরাসে অবস্থিত প্রাইমারি মোটর কর্টেক্স (BA 4)-এর পঞ্চম স্তরে দৈত্যাকার বেটজ পিরামিডাল কোষ থাকে যা কর্টিকোস্পাইনাল নালীর মাধ্যমে সরাসরি হাত ও পায়ের পেশীতে দ্রুত নির্দেশ পাঠাতে সক্ষম।'
            ),
            l(
              'Sensory reality is decoded by the primary somatosensory cortex (Brodmann areas 3, 1, and 2, postcentral gyrus), which features an expanded internal granular layer IV receiving dense thalamocortical afferents from the ventral posterolateral (VPL) and ventral posteromedial (VPM) thalamic nuclei. Language processing represents a striking left-hemispheric specialization: motor speech articulation is programmed in Broca area (BA 44 pars opercularis and BA 45 pars triangularis in the inferior frontal gyrus), while semantic comprehension is centered in Wernicke area (BA 22 in the posterior superior temporal gyrus), linked by the arcuate fasciculus.',
              'পোস্ট-সেন্ট্রাল জাইরাসে অবস্থিত প্রাইমারি সোমাটোসেন্সরি কর্টেক্স (BA 3, 1, 2) শরীরের স্পর্শ ও ব্যথার অনুভূতি গ্রহণ করে যার চতুর্থ স্তরে থ্যালামাস থেকে ঘন সংকেত আসে। মানুষের ভাষা নিয়ন্ত্রণ মূলত বাম মস্তিষ্কে বিশেষায়িত: কথা বলার পরিকল্পনা তৈরি হয় ব্রোকার অঞ্চলে (BA 44/45, ফ্রন্টাল লোব) এবং কথার অর্থ বোঝা নিয়ন্ত্রিত হয় ওয়ার্নিকের অঞ্চলে (BA 22, টেম্পোরাল লোব), যা আর্কুয়েট ফ্যাসিকুলাস নামক একগুচ্ছ স্নায়ুতন্তু দিয়ে পরস্পর সংযুক্ত থাকে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Subcortical Gray Matter: Basal Ganglia and the Internal Capsule', 'সাবকর্টিকাল ধূসর পদার্থ: বেসাল গ্যাংলিয়া এবং ইন্টারনাল ক্যাপসুল'),
          paragraphs: [
            l(
              'The basal ganglia comprise a collection of interconnected subcortical gray matter nuclei that modulate voluntary movement, motor learning, and habit execution. The primary input structure is the striatum (composed of the caudate nucleus and putamen), which receives dense glutamatergic projections from throughout the cerebral cortex. The major output structures are the internal segment of the globus pallidus (GPi) and the substantia nigra pars reticulata (SNr), which exert continuous tonic GABAergic inhibition on motor nuclei of the thalamus.',
              'বেসাল গ্যাংলিয়া হলো মস্তিষ্কের গভীরে অবস্থিত একগুচ্ছ নিউক্লিয়াস যা মানুষের ঐচ্ছিক নড়াচড়াকে মসৃণ ও সুনির্দিষ্ট করতে সাহায্য করে। এর প্রধান প্রবেশদ্বার হলো স্ট্রিয়াটাম (কডেট ও পুটামেন), যা মস্তিষ্কের কর্টেক্স থেকে সংকেত গ্রহণ করে। এর আউটপুট কেন্দ্রগুলো হলো গ্লোবাস প্যালিডাস ও সাবস্ট্যানশিয়া নাইগ্রা যা থ্যালামাসকে অনবরত বাধা দিয়ে অতিরিক্ত অনাকাঙ্ক্ষিত নড়াচড়া আটকে রাখে।'
            ),
            l(
              'Intercalated between the lentiform nucleus laterally and the caudate and thalamus medially lies the internal capsule, a massive compact highway of ascending and descending myelinated axons. Its anterior limb transmits frontopontine and thalamocortical fibers; its genu carries corticonuclear fibers to brainstem motor nuclei; and its posterior limb conveys the dense corticospinal tract fibers organized somatotopically (arm, trunk, leg). Small penetrator artery occlusions (lenticulostriate branches of the MCA) infarct the posterior limb, producing classic pure motor hemiparesis.',
              'লেন্টিফর্ম নিউক্লিয়াস এবং থ্যালামাসের মাঝখানে ইন্টারনাল ক্যাপসুল নামক এক বিশাল স্নায়ুপথ অবস্থিত যা দিয়ে মস্তিষ্কের সমস্ত মোটর ও সেন্সরি তার ওঠানামা করে। এর পিছনের অংশে (পোস্টেরিয়র লিম্ব) হাত ও পায়ের প্রধান কর্টিকোস্পাইনাল স্নায়ুগুলো ক্রমান্বয়ে সাজানো থাকে। মিডল সেরিব্রাল ধমনীর ক্ষুদ্র শাখা বন্ধ হয়ে ল্যাকুনার স্ট্রোক হলে ইন্টারনাল ক্যাপসুলের এই স্থানটি নষ্ট হয়ে কোনো সংবেদনশীল ক্ষতি ছাড়াই শরীরের বিপরীত পাশ সম্পূর্ণ অবশ হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Basal Ganglia Circuitry: Direct, Indirect and Hyperdirect Pathways', 'বেসাল গ্যাংলিয়া বর্তনী: ডিরেক্ট, ইনডিরেক্ট এবং হাইপারডিরেক্ট পাথওয়ে'),
          paragraphs: [
            l(
              'Motor initiation is regulated by two parallel opposing pathways through the basal ganglia: the direct pathway (striatal neurons projecting directly to GPi/SNr via D1 dopamine receptors), which disinhibits the thalamus and facilitates movement; and the indirect pathway (striatal neurons projecting to GPe, then subthalamic nucleus, via D2 receptors), which reinforces thalamic inhibition to suppress unwanted movements. Dopaminergic input from the substantia nigra pars compacta (SNc) biases the system toward movement initiation.',
              'নড়াচড়া শুরু করার কাজটি দুটি বিপরীত লুপের ভারসাম্যে ঘটে: ডিরেক্ট পাথওয়ে থ্যালামাসকে মুক্ত করে নড়াচড়া দ্রুত শুরু করায়, আর ইনডিরেক্ট পাথওয়ে থ্যালামাসকে চেপে ধরে অপ্রয়োজনীয় নড়াচড়া থামায়। সাবস্ট্যানশিয়া নাইগ্রা থেকে নিঃসৃত ডোপামিন এই পুরো ব্যবস্থাকে সচল রাখে; পারকিনসন্স রোগে এই ডোপামিন কোষ ধ্বংস হলে রোগী হাত-পা নাড়ানোর ক্ষমতা হারিয়ে ধীরগতির হয়ে পড়ে।'
            ),
            l(
              'Degeneration of dopaminergic neurons in the substantia nigra pars compacta depletes striatal dopamine, tipping the balance toward hyperactive indirect pathway output and excessive GPi/SNr firing, which profoundly suppresses thalamocortical drive, manifesting as the bradykinesia, rigidity, and resting tremor of Parkinson disease. In contrast, selective loss of GABAergic indirect pathway striatal neurons projecting to GPe causes Huntington chorea, wherein failure of subthalamic inhibition produces involuntary, uncontrollable flinging movements.',
              'সাবস্ট্যানশিয়া নাইগ্রার ডোপামিন কোষগুলো ধ্বংস হয়ে গেলে ডিরেক্ট পাথওয়ে দুর্বল হয় এবং ইনডিরেক্ট পাথওয়ে অতিসক্রিয় হয়ে থ্যালামাসকে অতিরিক্ত চেপে ধরে; ফলে পারকিনসন্স রোগে রোগীর শরীর শক্ত হয়ে যায় ও হাত কাঁপতে থাকে। বিপরীতভাবে হান্টিংটন রোগে ইনডিরেক্ট পাথওয়ের নিউরনগুলো আগে নষ্ট হওয়ায় থ্যালামাসের ওপর বাধা উঠে যায় এবং রোগী অনবরত অনাকাঙ্ক্ষিত নাচানাচি বা ঝটকা নড়াচড়া করতে বাধ্য হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Brainstem Functional Columns and Cerebellar Circuitry', 'ব্রেনস্টেমের কার্যকরী কলাম এবং সেরিবেলার সমন্বয় বর্তনী'),
          paragraphs: [
            l(
              'The brainstem (midbrain, pons, and medulla) organizes its twelve cranial nerve nuclei into six continuous longitudinal embryological columns based on functional modality: somatic motor (GSE: CN III, IV, VI, XII), branchial motor (SVE: CN V, VII, IX, X, XI), visceral motor parasympathetic (GVE: CN III Edinger-Westphal, CN VII superior salivatory, CN IX inferior salivatory, CN X dorsal vagal motor), visceral sensory (GVA/SVA: nucleus tractus solitarius for taste and visceral afferents), and somatic sensory (GSA: trigeminal sensory nuclear complex).',
              'ব্রেনস্টেমের ভেতর করোটিক স্নায়ুর নিউক্লিয়াসগুলো এলোমেলোভাবে না থেকে ছয়টি সমান্তরাল কলামে সুবিন্যস্ত থাকে: সোম্যাটিক মোটর কলাম (৩, ৪, ৬, ১২ নং স্নায়ু), ব্র্যাঙ্কিয়াল মোটর কলাম (৫, ৭, ৯, ১০, ১১ নং স্নায়ু), প্যারাসিমপ্যাথেটিক মোটর কলাম (এডিনজার-ওয়েস্টফাল ও লালাগ্রন্থির নিউক্লিয়াস), এবং সংবেদী কলাম (নিউক্লিয়াস ট্র্যাকটাস সলিটারিয়াস যা স্বাদ ও অভ্যন্তরীণ অঙ্গের অনুভূতি গ্রহণ করে)।'
            ),
            l(
              'Dorsal to the brainstem sits the cerebellum, which coordinates movement timing, precision, and motor learning without directly initiating motor contractions. The tri-laminar cerebellar cortex (molecular layer, Purkinje cell layer, and granular layer) receives sensory copies of motor commands via mossy fibers from the pons and error signals via climbing fibers from the inferior olivary nucleus. Inhibitory Purkinje cell GABAergic outputs modulate deep cerebellar nuclei (dentate, emboliform, globose, fastigial), fine-tuning descending motor commands.',
              'ব্রেনস্টেমের পেছনে অবস্থিত সেরিবেলাম বা লঘুমস্তিষ্ক নিজে কোনো নড়াচড়া শুরু না করলেও শরীরের সমস্ত অঙ্গ সঞ্চালনকে মসৃণ, সুনির্দিষ্ট ও ছন্দোময় রাখতে কাজ করে। এর তিনটি স্তরের মধ্যে পার্কিঞ্জে কোষগুলো সবচেয়ে গুরুত্বপূর্ণ, যা পনস ও অলিভারি নিউক্লিয়াস থেকে আসা তথ্যের ভুল সংশোধন করে গভীর সেরিবেলার নিউক্লিয়াসের মাধ্যমে মোটর কর্টেক্সে নিয়ন্ত্রণ পাঠায়; এর ক্ষতি হলে রোগী টালমাটাল হয়ে মাতালের মতো হাঁটে যাকে অ্যাটাক্সিয়া বলা হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Crossed Brainstem Syndromes and Vascular Occlusion Syndromes', 'ক্রসড ব্রেনস্টেম সিন্ড্রোম এবং ভাস্কুলার অক্লুশন সিন্ড্রোম'),
          paragraphs: [
            l(
              'Brainstem vascular lesions produce diagnostic "crossed" neurological signs: ipsilateral cranial nerve deficits combined with contralateral body hemiparesis or sensory loss. The archetypal example is Lateral Medullary (Wallenberg) syndrome, caused by atherothrombotic occlusion of the posterior inferior cerebellar artery (PICA) or vertebral artery, infarcting the posterolateral territory of the rostral medulla oblongata.',
              'ব্রেনস্টেমের রক্তনালী বন্ধ হলে এক অদ্ভুত "ক্রসড" বা বিপরীতমুখী লক্ষণ দেখা যায়: মুখের স্নায়ু ক্ষতিগ্রস্ত হয় যেপাশে ধমনী বন্ধ হয়েছে সেপাশে, কিন্তু শরীরের হাত-পা অবশ হয় তার উল্টো পাশে। এর সবচেয়ে বিখ্যাত উদাহরণ হলো ওয়ালেনবার্গ ল্যাটারাল মেডুলারি সিন্ড্রোম, যা পোস্টেরিয়র ইনফিরিয়র সেরিবেলার ধমনী (PICA) বা ভার্টিব্রাল ধমনী বন্ধ হওয়ার কারণে ঘটে।'
            ),
            l(
              'Wallenberg syndrome manifests with a pathognomonic neuroanatomical cluster: (1) damage to the nucleus ambiguus (CN IX, X) produces dysphagia, hoarseness, and loss of the gag reflex; (2) damage to the vestibular nuclei causes vertigo, vomiting, and nystagmus; (3) damage to descending hypothalamic sympathetic fibers produces ipsilateral Horner syndrome (ptosis, miosis, anhidrosis); (4) damage to the spinal trigeminal nucleus causes ipsilateral facial loss of pain/temperature; and (5) damage to the spinothalamic tract causes contralateral body loss of pain/temperature.',
              'ওয়ালেনবার্গ সিন্ড্রোমের পাঁচটি ক্লাসিক্যাল লক্ষণ রয়েছে: (১) নিউক্লিয়াস অ্যাম্বিগুয়াস নষ্ট হওয়ায় খাবার গিলতে না পারা ও স্বর ভেঙে যাওয়া; (২) ভেস্টিবুলার নিউক্লিয়াসের জন্য তীব্র মাথা ঘোরা ও বমি; (৩) সিমপ্যাথেটিক তন্তু নষ্ট হওয়ায় একই চোখে হর্নার সিন্ড্রোম (চোখের পাতা ঝুলে পড়া ও পিউপিল ছোট হওয়া); (৪) মুখের একই পাশে ব্যথা-তাপমাত্রা নষ্ট হওয়া; এবং (৫) শরীরের বিপরীত পাশের হাত-পায়ে ব্যথা ও তাপমাত্রা নষ্ট হওয়া।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Functional Neuroanatomy and Vascular Mapping', 'উচ্চতর সংশ্লেষ: কার্যকরী নিউরোঅ্যানাটমি ও ভাস্কুলার ম্যাপিং'),
          paragraphs: [
            l(
              'Rigorous mastery of advanced neuroanatomy requires reconciling structural cellular topography with macroscopic functional systems. The architectural continuity running from cerebral Brodmann cytoarchitecture down through subcortical basal ganglia loops, brainstem cranial nerve nuclei, and cerebellar feedback circuits forms an exquisitely calibrated computational network regulating somatic, autonomic, and cognitive behaviors.',
              'উচ্চতর নিউরোঅ্যানাটমি আয়ত্ত করার জন্য কোষীয় গঠন থেকে শুরু করে দৃশ্যমান কার্যকরী ব্যবস্থার নিখুঁত সমন্বয় উপলব্ধি করা প্রয়োজন। সেরিব্রাল কর্টেক্সের ব্রডম্যান অঞ্চল থেকে বেসাল গ্যাংলিয়ার লুপ, ব্রেনস্টেমের নিউক্লিয়াস এবং সেরিবেলামের ফিডব্যাক বর্তনী মিলে মানবদেহের পেশী সঞ্চালন, স্বয়ংক্রিয় অঙ্গের ছন্দ এবং চিন্তাচেতনাকে অত্যন্ত সূক্ষ্মভাবে সমন্বিত করে রাখে।'
            ),
            l(
              'Vascular neuroanatomy serves as the clinical key connecting theoretical architecture to emergency management. Understanding the precise branching territories of the Circle of Willis and the delicate brainstem perforators allows physicians to decode acute ischemic or hemorrhagic deficits, establish exact anatomical localization, and initiate timely targeted thrombolysis or surgical decompression.',
              'রক্ত সংবহন শারীরস্থান হলো ক্লিনিক্যাল নিউরোলজির মূল ভিত্তি যা তাত্ত্বিক জ্ঞানকে হাসপাতালের জরুরি চিকিৎসার সাথে যুক্ত করে। উইলির ধমনী বৃত্ত এবং ব্রেনস্টেমের ক্ষুদ্র রক্তনালীগুলোর সঠিক পথ জানা থাকলে চিকিৎসকরা রোগীর লক্ষণ দেখেই মস্তিষ্কের ক্ষতিগ্রস্ত কেন্দ্রটি নির্ভুলভাবে শনাক্ত করতে পারেন এবং দ্রুত জীবনরক্ষাকারী চিকিৎসা শুরু করতে সক্ষম হন।'
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
          heading: l('Biomechanics of Intracranial Herniation Syndromes', 'ইন্ট্রাক্রেনিয়াল হার্নিয়েশন সিন্ড্রোমের বায়োমেকানিক্স'),
          paragraphs: [
            l(
              'The Monro-Kellie doctrine dictates that the rigid adult cranial vault contains a fixed internal volume occupied by three non-compressible compartments: brain parenchyma (~80%), blood (~10%), and cerebrospinal fluid (~10%). An expanding mass lesion (such as an epidural hematoma, glioblastoma, or malignant middle cerebral artery infarction) initially displaces CSF into the spinal subarachnoid space and compresses venous sinuses. Once compensatory volumetric reserves are exhausted, intracranial pressure rises precipitously, driving catastrophic mechanical brain herniation across rigid dural partitions.',
              'মনরো-কেলি ডকট্রিন অনুযায়ী মানুষের শক্ত মাথার খুলির আয়তন নির্দিষ্ট থাকে যার ভেতর মস্তিষ্ক (৮০%), রক্ত (১০%) এবং সিএসএফ তরল (১০%) সংকুচিত না হয়ে অবস্থান করে। কোনো টিউমার বা রক্তক্ষরণ হলে প্রাথমিকভাবে সিএসএফ বের করে চাপ কমানোর চেষ্টা করা হয়। কিন্তু এই সহনশীলতার সীমা অতিক্রম করলে মাথার খুলির ভেতর চাপ মারাত্মকভাবে বৃদ্ধি পায় এবং মস্তিষ্কের নরম অংশগুলো ডুরার পর্দা ভেদ করে অন্য প্রকোষ্ঠে ঠেলে নেমে যেতে বাধ্য হয় যাকে ব্রেন হার্নিয়েশন বলে।'
            ),
            l(
              'In uncal transtentorial herniation, the medial temporal lobe (uncus) herniates downward over the free tentorial notch, sequentially compressing the ipsilateral oculomotor nerve (CN III) to cause an unreactive, "blown" pupil, followed by the posterior cerebral artery (producing occipital visual cortex infarction), and ultimately compressing the contralateral cerebral peduncle against Kernohan notch, paradoxically producing ipsilateral hemiparesis. Tonsillar herniation through the foramen magnum fatally compresses medullary respiratory centers.',
              'আঙ্কাল হার্নিয়েশনে টেম্পোরাল লোবের ভেতরের অংশ টেন্টোরিয়ামের খাঁজ দিয়ে নিচে নেমে একই পাশের ৩ নং ক্রেনিয়াল নার্ভ চেপে ধরে পিউপিলকে পুরোপুরি প্রসারিত ও নিষ্ক্রিয় করে ফেলে এবং পোস্টেরিয়র সেরিব্রাল ধমনী চেপে দৃষ্টি নষ্ট করে। চাপ আরও বাড়লে বিপরীত পাশের সেরিব্রাল পেডাঙ্কল কার্নোহানের নচে চেপে বিপরীতমুখী প্যারালাইসিস তৈরি করে। অবশেষে সেরিবেলার টনসিল ফোরামেন ম্যাগনাম দিয়ে মেডুলায় চাপ দিলে শ্বাসপ্রশ্বাস বন্ধ হয়ে তাৎক্ষণিক মৃত্যু ঘটে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Acute Stroke Syndromes and Vascular Territory Localization', 'তীব্র স্ট্রোক সিন্ড্রোম এবং রক্তনালী অঞ্চলভিত্তিক শারীরস্থানিক নির্ণয়'),
          paragraphs: [
            l(
              'The clinical presentation of an acute ischemic stroke is dictated precisely by the vascular territory of the occluded cerebral artery. Occlusion of the anterior cerebral artery (ACA) selectively deprives the medial surface of the frontal and parietal lobes, causing contralateral paralysis and sensory loss predominantly affecting the lower limb and urinary incontinence due to damage to the frontal micturition center, while largely sparing the upper extremity and face.',
              'মস্তিষ্কের স্ট্রোকের লক্ষণগুলো ঠিক কোন ধমনীটি বন্ধ হয়েছে তার ওপর হুবহু নির্ভর করে। অ্যান্টিরিয়র সেরিব্রাল ধমনী (ACA) বন্ধ হলে মস্তিষ্কের ভেতরের লোব রক্ত পায় না যেখানে পায়ের কেন্দ্র থাকে; ফলে বিপরীত পাশের পা অবশ হয়ে যায় এবং প্রস্রাব নিয়ন্ত্রণের কেন্দ্র নষ্ট হওয়ায় অনিচ্ছাকৃত প্রস্রাব হয়ে যায়, অথচ হাত ও মুখ প্রায় স্বাভাবিক থাকে।'
            ),
            l(
              'In contrast, middle cerebral artery (MCA) occlusion affects the lateral convexity, causing contralateral faciobrachial hemiparesis and hemisensory loss, with global or Broca aphasia if the dominant hemisphere is involved, or hemispatial neglect (anosognosia) if the non-dominant hemisphere is infarcted. Posterior cerebral artery (PCA) occlusion infarcts the occipital cortex, producing contralateral homonymous hemianopsia with macular sparing (collateral blood flow from terminal MCA branches preserves the macular visual pole).',
              'বিপরীতভাবে, মিডল সেরিব্রাল ধমনী (MCA) বন্ধ হলে মস্তিষ্কের বাইরের অংশ ক্ষতিগ্রস্ত হয়ে বিপরীত পাশের মুখ ও হাত পক্ষাঘাতগ্রস্ত হয় এবং কথা বলা ও বোঝার ক্ষমতা চলে যায়। পোস্টেরিয়র সেরিব্রাল ধমনী (PCA) বন্ধ হলে পেছনের ভিজ্যুয়াল কর্টেক্স নষ্ট হয়, যার ফলে বিপরীত চোখের দৃষ্টি নষ্ট হলেও চোখের একদম কেন্দ্রীয় দৃষ্টি (ম্যাকুলা) অক্ষত থাকে কারণ এমসিএ ধমনী সেখানে বিকল্প রক্ত সরবরাহ দেয়।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-tier schematic of the human brain: cerebral cortex functional mapping, subcortical basal ganglia motor loops, brainstem cranial nerve nuclei, and the arterial Circle of Willis.',
      'মানব মস্তিষ্কের ৪টি স্তর: সেরিব্রাল কর্টেক্সের কার্যপদ্ধতি, সাবকর্টিকাল বেসাল গ্যাংলিয়ার মোটর লুপ, ব্রেনস্টেমের করোটিক স্নায়ু এবং উইলির ধমনী বৃত্ত।'
    ),
    steps: [
      l(
        '1. Cerebral lobes integrate conscious cognition, somatosensory perception, language (Broca/Wernicke), and voluntary motor commands.',
        '১. সেরিব্রাল লোবগুলো মানুষের চেতনা, স্পর্শ অনুভূতি, ভাষা এবং স্বেচ্ছাধীন নড়াচড়ার পরিকল্পনা পরিচালনা করে।'
      ),
      l(
        '2. Basal ganglia direct and indirect loops balance dopamine signaling to coordinate smooth motor execution.',
        '২. বেসাল গ্যাংলিয়ার মোটর লুপ ডোপামিনের সাহায্যে হাত-পায়ের নড়াচড়াকে মসৃণ ও অনাকাঙ্ক্ষিত কাঁপুনিমুক্ত রাখে।'
      ),
      l(
        '3. The brainstem integrates 12 pairs of cranial nerves to manage cardiorespiratory rhythms, swallowing, and eye movements.',
        '৩. ব্রেনস্টেম ১২ জোড়া করোটিক স্নায়ুর মাধ্যমে হৃদস্পন্দন, শ্বাসক্রিয়া, খাদ্য গিলা এবং চোখের নড়াচড়া নিয়ন্ত্রণ করে।'
      ),
      l(
        '4. The arterial Circle of Willis provides collateral anastomoses protecting the cerebral hemispheres from focal ischemic infarction.',
        '৪. উইলির ধমনী বৃত্ত বিকল্প রক্ত সঞ্চালনের পথ তৈরি করে মস্তিষ্ককে হঠাৎ রক্তস্বল্পতা ও স্ট্রোক থেকে রক্ষা করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 62-year-old male with atrial fibrillation suddenly develops severe weakness of his right face and right arm, with relatively preserved strength in his right leg. He is alert but unable to speak fluently, producing only hesitant, grammatically broken words while appearing to comprehend questions fully. Occlusion of which cerebral artery accounts for this presentation?',
      'অ্যাট্রিয়াল ফিব্রিলেশনে আক্রান্ত ৬২ বছর বয়সী একজন ব্যক্তির হঠাৎ ডান মুখ ও ডান হাত অবশ হয়ে গেল, কিন্তু ডান পায়ে শক্তি তুলনামূলক স্বাভাবিক। তিনি সজাগ আছেন এবং কথা সব বুঝতে পারছেন কিন্তু নিজে অনর্গল কথা বলতে পারছেন না, কেবল তোতলে তোতলে ভাঙা শব্দ বলছেন। মস্তিষ্কের কোন ধমনীটি বন্ধ হয়ে যাওয়ার কারণে এই স্ট্রোকটি হয়েছে?'
    ),
    options: [
      l('Superior division of the left middle cerebral artery (MCA)', 'বাম মিডল সেরিব্রাল ধমনীর (MCA) উর্ধ্ব শাখা'),
      l('Left anterior cerebral artery (ACA)', 'বাম অ্যান্টিরিয়র সেরিব্রাল ধমনী (ACA)'),
      l('Left posterior cerebral artery (PCA)', 'বাম পোস্টেরিয়র সেরিব্রাল ধমনী (PCA)'),
      l('Basilar artery apex trunk', 'ব্যাসিলার ধমনীর শীর্ষদেশ'),
    ],
    correctIndex: 0,
    explanation: l(
      'The superior division of the left middle cerebral artery supplies the lateral convexity of the left frontal lobe, encompassing the motor homunculus representation of the face and upper extremity (precentral gyrus, BA 4) and Broca motor speech area (inferior frontal gyrus, BA 44/45). Occlusion produces contralateral (right-sided) faciobrachial paresis and expressive (Broca or non-fluent) aphasia, while leg strength is spared because the leg motor strip lies medially in the territory of the anterior cerebral artery.',
      'বাম মিডল সেরিব্রাল ধমনীর উর্ধ্ব শাখাটি বাম ফ্রন্টাল লোবের বাইরের অংশে রক্ত দেয় যেখানে মুখ ও হাতের মোটর কেন্দ্র এবং ব্রোকার কথা বলার কেন্দ্র (Broca area) থাকে। এটি বন্ধ হলে ডান মুখ ও হাত অবশ হয়ে যায় এবং রোগী কথা বুঝতে পারলেও নিজে মুখে শব্দ বের করতে পারেন না (এক্সপ্রেসিভ অ্যাফেজিয়া)। কিন্তু পায়ের কেন্দ্রটি অ্যান্টিরিয়র সেরিব্রাল ধমনীর এলাকায় থাকায় পায়ে শক্তি অক্ষত থাকে।'
    ),
  },
}
