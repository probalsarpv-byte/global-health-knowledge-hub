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
    id: 'openstax-ap2e-headneck',
    title: 'Anatomy and Physiology 2e: The Head and Neck',
    authors: 'Betts JG, Young KA, Wise JA, Johnson E, Poe B, Kruse DH, Korol O, Johnson JE',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/details/books/anatomy-and-physiology-2e',
  },
  {
    id: 'netter-headneck-8e',
    title: 'Atlas of Human Anatomy, 8th Edition',
    authors: 'Netter FH',
    organization: 'Elsevier',
    year: 2022,
    url: 'https://www.elsevier.com/books/atlas-of-human-anatomy/netter/978-0-323-68042-4',
  },
]

export const chapter20HeadNeckLesson: LessonTopic = {
  id: 'topic.anatomy.head-neck',
  slug: 'head-neck',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('20 · Head and Neck', '২০ · মাথা ও ঘাড়'),
  summary: l(
    'A comprehensive regional study of the human head and neck: cervical fascial layers and deep spaces (danger space, retropharyngeal space), anterior and posterior cervical triangles, the carotid sheath, the pharynx and larynx with cartilaginous biomechanics, thyroid neurovascular relations, and clinical emergencies including Ludwig angina, carotid sinus syncope, and recurrent laryngeal nerve palsy.',
    'মানব মাথা ও ঘাড়ের বিশদ আঞ্চলিক শারীরস্থান: গ্রীবার গভীর ফাসিয়া স্তর ও ফাঁকা স্থানসমূহ (ডেনজার স্পেস ও রেট্রোফ্যারিঞ্জিয়াল স্পেস), অ্যান্টিরিয়র ও পোস্টেরিয়র ট্রায়াঙ্গল, ক্যারোটিড শিথ, ফ্যারিঙ্কস ও ল্যারিঙ্কসের তরুণাস্থিময় কাঠামো, থাইরয়েডের রক্তনালী ও স্নায়ু সংযোগ এবং লুডউইগ অ্যানজাইনা, ক্যারোটিড সাইনাস সিনকোপ ও প্যারালাইসিস সহ জরুরি ক্লিনিক্যাল পর্যালোচনা।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Delineate the four deep cervical fascial sheets (investing, pretracheal, prevertebral, and carotid sheath) and map the surgical danger space transmitting infections from the pharynx directly into the posterior mediastinum.',
      'গ্রীবার চারটি গভীর ফাসিয়া স্তর (ইনভেস্টিং, প্রি-ট্রাকিয়াল, প্রি-ভার্টিব্রাল ও ক্যারোটিড শিথ) এবং ফ্যারিঙ্কস থেকে পেছনের মিডিয়াস্টাইনামে সংক্রমণ ছড়ানোর ডেনজার স্পেসের শারীরস্থান চিহ্নিত করা।'
    ),
    l(
      'Subdivide the anterior and posterior triangles of the neck, cataloging their muscular boundaries, vascular conduits (carotid arterial bifurcations, internal jugular vein), and nerve paths (cranial nerves XI, XII, and ansa cervicalis).',
      'ঘাড়ের অ্যান্টিরিয়র ও পোস্টেরিয়র ট্রায়াঙ্গলের পেশীবহুল সীমানা, রক্তনালী (ক্যারোটিড ধমনী ও ইন্টারনাল জুগুলার শিরা) এবং স্নায়ুসমূহ (এক্সেসরি স্নায়ু, হাইপোগ্লসাল স্নায়ু ও আনসা সারভাইকালিস) তালিকাভুক্ত করা।'
    ),
    l(
      'Analyze the structural anatomy and intrinsic biomechanics of the larynx (vocal folds, cricothyroid, and posterior cricoarytenoid muscles) and correlate thyroid surgery with recurrent laryngeal nerve injury.',
      'ল্যারিঙ্কসের তরুণাস্থি ও অভ্যন্তরীণ পেশীসমূহের বলবিদ্যা (পোস্টেরিয়র ক্রিকোঅ্যারিটিনয়েড ও স্বরতন্ত্রীর নড়াচড়া) বিশ্লেষণ করা এবং থাইরয়েড অপারেশনের সময় রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ ক্ষতের ঝুঁকি নির্ণয় করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.brain'],
  relatedTopicIds: ['topic.anatomy.special-senses', 'topic.anatomy.skeletal-axial'],
  references: refs,
  evidenceBySection: {
    introduction: ['moore-anatomy-9e', 'openstax-ap2e-headneck'],
    structure: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    mechanism: ['grays-anatomy-42e', 'netter-headneck-8e'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'netter-headneck-8e'],
    takeaways: ['openstax-ap2e-headneck', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-cervical-fascia', label: l('Cervical Fasciae & Deep Neck Spaces', 'সারভাইকাল ফাসিয়া ও ঘাড়ের গভীর ফাঁকা স্থানসমূহ'), sectionId: 'introduction' },
      { id: 'sec-triangles', label: l('Anterior & Posterior Neck Triangles', 'ঘাড়ের অ্যান্টিরিয়র ও পোস্টেরিয়র ট্রায়াঙ্গল'), sectionId: 'structure' },
      { id: 'sec-larynx-pharynx', label: l('Larynx & Pharyngeal Mechanics', 'ল্যারিঙ্কস ও ফ্যারিঙ্কসের কার্যপদ্ধতি'), sectionId: 'mechanism' },
      { id: 'sec-neurovascular', label: l('Carotid Sheath & Cranial Nerve Conduits', 'ক্যারোটিড শিথ ও করোটিক স্নায়ুর পথসমূহ'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Surgery: Ludwig Angina & RLN Palsy', 'ক্লিনিক্যাল সার্জারি: লুডউইগ অ্যানজাইনা ও স্নায়ু ক্ষত'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary & Head-Neck Core Principles', 'সারসংক্ষেপ ও মাথা-ঘাড় শারীরস্থানের মূলসূত্র'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Carotid Sheath', 'ক্যারোটিড শিথ (Carotid Sheath)'),
        definition: l(
          'A tubular condensation of deep cervical fascia extending from the cranial base to the root of the neck at the first rib. Contents: common and internal carotid arteries medially, internal jugular vein laterally, and vagus nerve (CN X) posteriorly; the ansa cervicalis is embedded in or lies on its anterior wall.',
          'মাথার খুলির তলদেশ থেকে প্রথম পাঁজর পর্যন্ত বিস্তৃত গভীর সারভাইকাল ফাসিয়ার একটি নলাকার আবরণ। এর ভেতরের দিকে কমন ক্যারোটিড ধমনী, বাইরের দিকে ইন্টারনাল জুগুলার শিরা এবং পেছনে ভেগাস স্নায়ু থাকে; সামনের দেয়ালে আনসা সারভাইকালিস অবস্থান করে।'
        ),
      },
      {
        term: l('Posterior Cricoarytenoid Muscle', 'পোস্টেরিয়র ক্রিকোঅ্যারিটিনয়েড পেশী'),
        definition: l(
          'The only intrinsic laryngeal muscle that abducts the vocal folds (opens the rima glottidis). Innervated by the recurrent laryngeal nerve; bilateral paralysis causes complete adduction of the cords with catastrophic airway obstruction requiring emergency tracheostomy.',
          'ল্যারিঙ্কসের একমাত্র পেশী যা স্বরতন্ত্রীকে বাইরের দিকে টেনে খুলে দেয় (শ্বাসনালির পথ উন্মুক্ত রাখে)। এটি রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ দ্বারা নিয়ন্ত্রিত হয়; উভয় পাশের পেশী অবশ হলে স্বরতন্ত্রী বন্ধ হয়ে দম বন্ধ হয়ে যায় এবং জরুরি ট্র্যাকিওস্টমি করতে হয়।'
        ),
      },
      {
        term: l('Danger Space of the Neck', 'ঘাড়ের ডেনজার স্পেস (Danger Space)'),
        definition: l(
          'A potential fascial space bounded anteriorly by the alar fascia and posteriorly by the prevertebral layer of deep cervical fascia, extending continuously from the skull base down into the posterior mediastinum to the diaphragm; infections can track unimpeded into the thorax.',
          'ঘাড়ের এমন একটি গভীর ফাঁকা স্থান যা অ্যালার ফাসিয়া এবং প্রি-ভার্টিব্রাল ফাসিয়ার মাঝে অবস্থিত এবং খুলি থেকে শুরু করে ডায়াফ্রাম পর্যন্ত সোজা চলে গেছে; এর ভেতর কোনো বাধা না থাকায় গলার তীব্র সংক্রমণ সরাসরি বক্ষপিঞ্জরে নেমে জীবনঘাতী মিডিয়াস্টাইনাইটিস সৃষ্টি করতে পারে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Localizing Neck Triangles and Performing Emergency Cricothyroidotomy', 'ঘাড়ের ট্রায়াঙ্গল চিহ্নিতকরণ এবং জরুরি ক্রিকোথাইরয়েডোটমি পদ্ধতি'),
        steps: [
          l(
            'Step 1: Palpate the thyroid cartilage laryngeal prominence ("Adam apple") in the midline of the anterior neck. Trace inferiorly into the depression of the cricothyroid membrane before encountering the rounded ring of the cricoid cartilage.',
            'ধাপ ১: ঘাড়ের মাঝখানে থাইরয়েড তরুণাস্থির উঁচু অংশটি ("আদম আপেল") স্পর্শ করুন। সেখান থেকে সামান্য নিচে নামলে নরম ক্রিকোথাইরয়েড পর্দা এবং তার ঠিক নিচে শক্ত ক্রিকয়েড তরুণাস্থির রিংটি অনুভব করুন।'
          ),
          l(
            'Step 2: Recognize boundaries: The anterior triangle is defined by the anterior border of the sternocleidomastoid (SCM), the inferior border of the mandible, and the anterior midline. The muscular triangle within it contains the infrahyoid strap muscles, thyroid gland, and trachea.',
            'ধাপ ২: সীমানা শনাক্ত করুন: অ্যান্টিরিয়র ট্রায়াঙ্গলের একদিকে স্টার্নোক্লিডোমাস্তয়েড পেশী, উপরে চোয়াল এবং মাঝখানে ঘাড়ের মধ্যরেখা। এর ভেতরের মাস্কুলার ট্রায়াঙ্গলে থাইরয়েড গ্রন্থি, শ্বাসনালি এবং স্ট্র্যাপ পেশীগুলো থাকে।'
          ),
          l(
            'Step 3: In acute total upper airway obstruction where intubation fails, perform a horizontal scalpel incision through skin and the subcutaneous tissue directly over the cricothyroid membrane, avoiding the vocal folds above and the thyroid isthmus below, establishing an immediate subglottic airway.',
            'ধাপ ৩: যদি তীব্র শ্বাসনালি ব্লকের কারণে বাতাস না ঢোকে, তবে ক্রিকোথাইরয়েড পর্দার ওপর আনুভূমিকভাবে ত্বক কেটে শ্বাসনালিতে একটি নল স্থাপন করে সরাসরি ফুসফুসে অক্সিজেন প্রবেশের পথ তৈরি করুন যা রোগীকে তাৎক্ষণিক মৃত্যুর হাত থেকে বাঁচায়।'
          ),
        ],
        conclusion: l(
          'Cricothyroidotomy exploits the avascular midline plane between thyroid and cricoid cartilages, safely bypassing obstructed supraglottic tissues while avoiding large carotid and thyroid vessels.',
          'ক্রিকোথাইরয়েডোটমি থাইরয়েড ও ক্রিকয়েডের মধ্যবর্তী তুলনামূলকভাবে রক্তনালীহীন মধ্যরেখাকে কাজে লাগিয়ে গলার বিপজ্জনক রক্তনালী বাঁচিয়ে দ্রুততম সময়ে জীবনরক্ষা নিশ্চিত করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does a unilateral iatrogenic injury to the recurrent laryngeal nerve during thyroidectomy produce hoarseness of voice, whereas bilateral injury causes stridor and acute asphyxiation?',
          'থাইরয়েড অপারেশনের সময় একপাশের রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ ক্ষতিগ্রস্ত হলে রোগীর গলা ভেঙে যায়, কিন্তু উভয় পাশের স্নায়ু নষ্ট হলে দম বন্ধ হয়ে তাৎক্ষণিক শ্বাসকষ্ট কেন শুরু হয়?'
        ),
        answer: l(
          'The recurrent laryngeal nerve innervates all intrinsic muscles of the larynx except the cricothyroid. A unilateral injury paralyzes the ipsilateral vocal cord in a paramedian position, causing hoarseness and ineffective coughing. Bilateral injury paralyzes both posterior cricoarytenoid abductor muscles, leaving both vocal cords locked together in the midline due to unopposed cricothyroid adduction, sealing the airway and causing acute asphyxia.',
          'রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ ক্রিকোথাইরয়েড ছাড়া স্বরতন্ত্রীর সমস্ত পেশীকে চালিত করে। একপাশের স্নায়ু ছিঁড়লে একটি স্বরতন্ত্রী নড়াচড়া হারায় ফলে গলা ভেঙে যায়। কিন্তু উভয় পাশের স্নায়ু ছিঁড়ে গেলে স্বরতন্ত্রী খুলে রাখার একমাত্র পেশী (পোস্টেরিয়র ক্রিকোঅ্যারিটিনয়েড) অকেজো হয়ে পড়ে এবং উভয় স্বরতন্ত্রী মাঝখানে এসে পুরোপুরি বন্ধ হয়ে শ্বাসনালির মুখ আটকে ফেলে, যার ফলে জরুরি ট্র্যাকিওস্টমি ছাড়া রোগী মারা যেতে পারে।'
        ),
      },
      {
        question: l(
          'What is Ludwig angina, and why does an odontogenic infection of the lower second or third molar spread rapidly into the submandibular and sublingual spaces to compromise the airway?',
          'লুডউইগ অ্যানজাইনা কী এবং নিচের মাড়ির দাঁতের সংক্রমণ কীভাবে দ্রুত জিহ্বার নিচে ছড়িয়ে শ্বাসনালি বন্ধ করে দেয়?'
        ),
        answer: l(
          'Ludwig angina is a rapidly progressing cellulitis of the submandibular and submandibular fascial spaces, typically arising from periapical abscesses of mandibular 2nd or 3rd molars whose roots extend below the mylohyoid muscle line. Infection crosses fascial boundaries bilaterally, pushing the floor of the mouth and tongue superiorly and posteriorly against the palate, mechanically occluding the oropharynx and threatening fatal airway compromise.',
          'লুডউইগ অ্যানজাইনা হলো চোয়াল ও জিহ্বার নিচের গভীর ফাঁকা স্থানে ছড়িয়ে পড়া এক মারাত্মক তীব্র ব্যাকটেরিয়াল সংক্রমণ যা সাধারণত নিচের মাড়ির দাঁতের পুঁজ থেকে শুরু হয়। মাইলোহায়য়েড পেশীর নিচ দিয়ে এই পুঁজ উভয় পাশে ছড়িয়ে পড়ে পুরো জিহ্বাকে ওপরের ও পেছনের তালুর দিকে ঠেলে দেয়; ফলে গলার ভেতরের শ্বাস নেওয়ার পথ সম্পূর্ণ বন্ধ হয়ে রোগী দম আটকে মৃত্যুর ঝুঁকিতে পড়ে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch20-head-neck-diagram',
    title: l('Interactive Cervical Triangles, Fascial Spaces & Neurovascular Conduits', 'ইন্টারেক্টিভ গ্রীবা ট্রায়াঙ্গল, ফাসিয়া স্থান ও স্নায়ু-রক্তনালী কাঠামো'),
    description: l(
      'Explore the architectural cross-section and muscular triangles of the human neck: investigate deep fascial layers, carotid sheath contents, cervical triangles, thyroid bed, and laryngeal cartilages.',
      'মানব ঘাড়ের পেশীবহুল ট্রায়াঙ্গল ও ফাসিয়ার গভীর স্তরসমূহ পরীক্ষা করুন: ক্যারোটিড শিথ, থাইরয়েডের অবস্থান, ল্যারিঙ্কসের তরুণাস্থি এবং গভীর ডেনজার স্পেসের শারীরস্থান অন্বেষণ করুন।'
    ),
    disclaimer: l(
      'Regional cervical schematic: select any sector to inspect anatomical borders, neurovascular conduits, and surgical landmarks.',
      'গ্রীবা শারীরস্থানের রেখাচিত্র: সীমানা, প্রধান রক্তনালী ও স্নায়ু এবং সার্জিক্যাল ল্যান্ডমার্ক দেখতে যেকোনো অঞ্চল নির্বাচন করুন।'
    ),
    svgType: 'head-neck-system',
    items: [
      {
        id: 'carotid-sheath',
        label: l('Carotid Sheath & Bifurcation', 'ক্যারোটিড শিথ ও ধমনী বিভাজন'),
        description: l(
          'Dense tubular fascial compartment. Common carotid bifurcates at C4 into internal and external carotids. Internal jugular vein lies lateral; vagus nerve (CN X) lies posterior.',
          'গভীর ফাসিয়ার নলাকার প্রকোষ্ঠ। ৪র্থ কশেরুকা বরাবর কমন ক্যারোটিড ধমনী দুটি শাখায় ভাগ হয়। বাইরে থাকে ইন্টারনাল জুগুলার শিরা এবং পেছনে থাকে ১০ম ক্রেনিয়াল নার্ভ ভেগাস।'
        ),
        details: l(
          'Carotid sinus (baroreceptor, CN IX) and carotid body (chemoreceptor, CN IX/X) lie at the bifurcation. Carotid massage stimulates baroreceptors, triggering reflex bradycardia and hypotension.',
          'ধমনীর বিভাজনস্থলে রক্তচাপ পরিমাপক ক্যারোটিড সাইনাস এবং অক্সিজেন পরিমাপক ক্যারোটিড বডি থাকে। এখানে অতিরিক্ত চাপ পড়লে হঠাৎ হৃদস্পন্দন কমে গিয়ে মানুষ অজ্ঞান হয়ে যেতে পারে।'
        ),
        sectionId: 'integration',
        color: '#fecdd3',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'cervical-fascia-spaces',
        label: l('Deep Cervical Fascia & Danger Space', 'গভীর সারভাইকাল ফাসিয়া ও ডেনজার স্পেস'),
        description: l(
          'Concentric fascial envelopes: investing, pretracheal (visceral), and prevertebral layers. Danger space lies between alar and prevertebral fascia, descending into the mediastinum.',
          'ঘাড়ের সমকেন্দ্রিক পর্দার স্তরসমূহ: ইনভেস্টিং, প্রি-ট্রাকিয়াল এবং প্রি-ভার্টিব্রাল ফাসিয়া। অ্যালার ও প্রি-ভার্টিব্রাল স্তরের মাঝখানের ফাঁকা স্থানটি সোজা বুকের খাঁচায় নেমে যায়।'
        ),
        details: l(
          'Retropharyngeal infections easily traverse the danger space down to the posterior mediastinum, causing fulminant descending necrotizing mediastinitis with a 40% mortality rate.',
          'গলার পেছনের তীব্র পুঁজ বা সংক্রমণ এই ডেনজার স্পেস দিয়ে সরাসরি বক্ষপিঞ্জরে নেমে গিয়ে জীবনঘাতী মিডিয়াস্টাইনাইটিস তৈরি করতে পারে যার মৃত্যুঝুঁকি প্রায় ৪০ শতাংশ।'
        ),
        sectionId: 'introduction',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'larynx-trachea',
        label: l('Laryngeal Framework & Vocal Folds', 'ল্যারিঙ্কসের তরুণাস্থি ও স্বরতন্ত্রী'),
        description: l(
          'Cartilaginous airway valve: thyroid, cricoid, and arytenoid cartilages. Posterior cricoarytenoid abducts vocal folds; all intrinsic muscles innervated by RLN except cricothyroid (SLN).',
          'শ্বাসনালির তরুণাস্থিময় কপাটিকা: থাইরয়েড, ক্রিকয়েড ও অ্যারিটিনয়েড তরুণাস্থি। একমাত্র পোস্টেরিয়র ক্রিকোঅ্যারিটিনয়েড পেশী স্বরতন্ত্রীকে খোলে; ক্রিকোথাইরয়েড ছাড়া বাকি সব পেশী রিকারেন্ট নার্ভ পায়।'
        ),
        details: l(
          'Cricothyroid membrane provides rapid emergent airway access. Cricothyroid muscle is tensed by external branch of superior laryngeal nerve, controlling high vocal pitch.',
          'ক্রিকোথাইরয়েড পর্দা কেটে জরুরি ভিত্তিতে শ্বাসনালি খোলা যায়। সুপিরিয়র ল্যারিঞ্জিয়াল নার্ভের বাইরের শাখাটি ক্রিকোথাইরয়েড পেশী নিয়ন্ত্রণ করে সুরের তীক্ষ্ণতা পরিবর্তন করে।'
        ),
        sectionId: 'mechanism',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'anterior-posterior-triangles',
        label: l('Anterior & Posterior Cervical Triangles', 'ঘাড়ের অ্যান্টিরিয়র ও পোস্টেরিয়র ট্রায়াঙ্গল'),
        description: l(
          'Muscular division by SCM. Anterior triangle contains carotid, submandibular, submental, and muscular triangles. Posterior triangle contains spinal accessory nerve (CN XI).',
          'স্টার্নোক্লিডোমাস্তয়েড পেশী ঘাড়কে দুটি প্রধান ভাগে ভাগ করে। সামনের ট্রায়াঙ্গলে ক্যারোটিড ও থাইরয়েড থাকে; পেছনের ট্রায়াঙ্গলে এক্সেসরি নার্ভ ও ব্র্যাকিয়াল প্লেক্সাসের মূল থাকে।'
        ),
        details: l(
          'Spinal accessory nerve (CN XI) traverses the posterior triangle superficially beneath the investing fascia, leaving it vulnerable to transection during lymph node biopsy, paralyzing trapezius.',
          'এক্সেসরি স্নায়ুটি পেছনের ট্রায়াঙ্গলে খুব অগভীরভাবে থাকে; ফলে বায়োপসি করার সময় অসাবধানতায় এটি কেটে গেলে কাঁধের ট্র্যাপিজিয়াস পেশী অবশ হয়ে কাঁধ ঝুলে পড়ে।'
        ),
        sectionId: 'structure',
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
          heading: l('Fascial Organization of the Human Neck', 'মানব গ্রীবার ফাসিয়ার স্তরবিন্যাস ও ফাঁকা স্থানসমূহ'),
          paragraphs: [
            l(
              'The anatomy of the human neck is fundamentally dictated by its concentric fascial packaging. Superficial fascia lies directly beneath the skin and contains the thin, broad platysma muscle (derived from the second pharyngeal arch and innervated by the cervical branch of the facial nerve, CN VII). Deep to this lies the deep cervical fascia, which is organized into three defined sheets: the investing layer, the pretracheal (visceral) layer, and the prevertebral layer.',
              'মানুষের ঘাড়ের অভ্যন্তরীণ কাঠামো পুরোপুরি এর গভীর ফাসিয়ার স্তরের ওপর নির্ভরশীল। চামড়ার ঠিক নিচেই সুপারফিসিয়াল ফাসিয়ায় পাতলা প্লাটিজমা পেশী থাকে যা ৭ম করোটিক স্নায়ু দ্বারা পরিচালিত হয়। এর নিচে থাকে গভীর সারভাইকাল ফাসিয়া যা তিনটি প্রধান স্তরে বিন্যস্ত: সবচেয়ে বাইরের ইনভেস্টিং লেয়ার, ভেতরের অঙ্গগুলোকে ঘিরে থাকা প্রি-ট্রাকিয়াল লেয়ার এবং পেছনের মেরুদণ্ডকে ঘিরে থাকা প্রি-ভার্টিব্রাল লেয়ার।'
            ),
            l(
              'The investing layer of deep cervical fascia roofs the entire neck, splitting to encase two major muscles (sternocleidomastoid and trapezius) and two salivary glands (submandibular and parotid). The pretracheal layer encloses the visceral compartment, enveloping the thyroid gland, trachea, and esophagus. The prevertebral layer forms a tough tubular sheath enclosing the cervical vertebral column and deep paraspinal muscles, while also providing the axillary sheath around the subclavian vessels and brachial plexus.',
              'ইনভেস্টিং লেয়ারটি পুরো ঘাড়কে ঢেকে রাখে এবং বিভক্ত হয়ে স্টার্নোক্লিডোমাস্তয়েড ও ট্র্যাপিজিয়াস পেশী এবং সাবম্যান্ডিবুলার ও প্যারোটিড লালাগ্রন্থিকে আবৃত করে। প্রি-ট্রাকিয়াল স্তরটি ঘাড়ের ভেতরের থাইরয়েড গ্রন্থি, শ্বাসনালি ও খাদ্যনালিকে ঘিরে রাখে। আর প্রি-ভার্টিব্রাল স্তরটি শক্তভাবে মেরুদণ্ডের হাড় ও পেছনের পেশীগুলোকে সুরক্ষিত রাখে এবং বাহুর দিকে অ্যাক্সিলারি শিথ তৈরি করে ব্র্যাকিয়াল প্লেক্সাসকে বগল পর্যন্ত নিয়ে যায়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Anterior and Posterior Cervical Triangles', 'ঘাড়ের অ্যান্টিরিয়র ও পোস্টেরিয়র ট্রায়াঙ্গল'),
          paragraphs: [
            l(
              'For surgical orientation, the prominent diagonal strap of the sternocleidomastoid (SCM) muscle bisects the lateral neck into an anterior triangle and a posterior triangle. The anterior triangle is bounded superiorly by the inferior border of the mandible, posteriorly by the anterior border of the SCM, and anteriorly by the anterior midline of the neck. It is further partitioned by the digastric and omohyoid muscles into four subordinate triangles: submandibular, submental, carotid, and muscular.',
              'অপারেশন ও চিকিৎসার সুবিধার জন্য ঘাড়ের একপাশে বাঁকাভাবে থাকা স্টার্নোক্লিডোমাস্তয়েড (SCM) পেশী ঘাড়কে দুটি বড় ত্রিভুজে ভাগ করে: সামনের অ্যান্টিরিয়র ট্রায়াঙ্গল এবং পেছনের পোস্টেরিয়র ট্রায়াঙ্গল। অ্যান্টিরিয়র ট্রায়াঙ্গলটি ওপরে চোয়াল, পেছনে এসসিএম পেশী এবং সামনে মধ্যরেখা দিয়ে ঘেরা থাকে। এটি আবার ডাইগ্যাস্ট্রিক ও ওমোহায়য়েড পেশী দ্বারা চারটি ছোট ত্রিভুজে বিভক্ত হয়: সাবম্যান্ডিবুলার, সাবমেন্টাল, ক্যারোটিড এবং মাস্কুলার ট্রায়াঙ্গল।'
            ),
            l(
              'The posterior triangle is bounded anteriorly by the posterior border of the SCM, posteriorly by the anterior border of the trapezius, and inferiorly by the middle third of the clavicle. Its floor is formed by the splenius capitis, levator scapulae, and scalene muscles. Crossing this triangle obliquely is the spinal accessory nerve (CN XI), which emerges from beneath the SCM to cross the roof of the posterior triangle before plunging deep to the trapezius muscle, which it innervates.',
              'পোস্টেরিয়র ট্রায়াঙ্গলটি সামনে এসসিএম পেশীর পেছনের কিনারা, পেছনে ট্র্যাপিজিয়াস পেশী এবং নিচে কলারবোনের মাঝের অংশ দিয়ে গঠিত। এর মেঝে তৈরি করে স্প্লেনিয়াস ক্যাপিটিস, লিভেটর স্ক্যাপুলি এবং স্ক্যালিন পেশীসমূহ। এই ত্রিভুজের ছাদ দিয়ে ১১তম করোটিক স্নায়ু (স্পাইনাল এক্সেসরি নার্ভ) অত্যন্ত অগভীরভাবে অতিক্রম করে ট্র্যাপিজিয়াস পেশীতে প্রবেশ করে; এটি ক্ষতিগ্রস্ত হলে রোগী কাঁধ উঁচু করতে পারে না।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Larynx: Cartilaginous Framework and Phonatory Mechanics', 'ল্যারিঙ্কস: তরুণাস্থিময় কাঠামো এবং স্বরযন্ত্রের বলবিদ্যা'),
          paragraphs: [
            l(
              'The larynx functions as both an indispensable sphincter guarding the lower respiratory tract against aspiration and a sophisticated musical instrument generating phonation. Its skeleton consists of nine cartilages: three unpaired (the thyroid, cricoid, and epiglottis) and three paired (the arytenoid, corniculate, and cuneiform). The signet-ring-shaped cricoid cartilage is the only complete complete cartilaginous ring encircling the human airway, sitting at the level of the sixth cervical vertebra (C6).',
              'ল্যারিঙ্কস বা স্বরযন্ত্র একদিকে যেমন খাদ্যনালির খাবার যাতে শ্বাসনালিতে না ঢোকে তার কপাটিকা হিসেবে কাজ করে, অন্যদিকে এটি মানুষের গলার স্বর তৈরি করে। এর কাঠামো নয়টি তরুণাস্থি দিয়ে তৈরি: তিনটি একক (থাইরয়েড, ক্রিকয়েড ও এপিগ্লটিস) এবং তিন জোড়া ক্ষুদ্র তরুণাস্থি (অ্যারিটিনয়েড, কর্নিকুলেট ও কিউনিফর্ম)। আংটির মতো গোল ক্রিকয়েড তরুণাস্থিটি হলো সম্পূর্ণ বায়ুপথের একমাত্র পূর্ণাঙ্গ বলয় যা ৬ষ্ঠ সারভাইকাল কশেরুকা বরাবর অবস্থান করে।'
            ),
            l(
              'Movement of the true vocal folds (vocal cords) is regulated by intrinsic laryngeal muscles acting upon the mobile pyramidal arytenoid cartilages. The posterior cricoarytenoid muscles rotate the arytenoids laterally to abduct the vocal folds, opening the rima glottidis for respiration. The lateral cricoarytenoid and transverse arytenoid muscles adduct the folds for phonation. The cricothyroid muscle tilts the thyroid cartilage forward to lengthen and tense the vocal cords, elevating vocal pitch.',
              'স্বরতন্ত্রী বা ভোকাল কর্ডের নড়াচড়া নিয়ন্ত্রিত হয় আরিচিনয়েড তরুণাস্থির ওপর কাজ করা অভ্যন্তরীণ পেশীসমূহ দ্বারা। পোস্টেরিয়র ক্রিকোঅ্যারিটিনয়েড পেশীটি স্বরতন্ত্রীকে বাইরের দিকে টেনে ফাঁক করে যাতে মানুষ সহজে শ্বাস নিতে পারে। ল্যাটারাল ক্রিকোঅ্যারিটিনয়েড পেশী স্বরতন্ত্রীকে কাছে এনে চেপে ধরে স্বর তৈরি করে। আর ক্রিকোথাইরয়েড পেশী থাইরয়েড তরুণাস্থিকে সামনে ঝুঁকিয়ে স্বরতন্ত্রীকে টানটান শক্ত করে গলার স্বরের তীক্ষ্ণতা বাড়িয়ে দেয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Carotid Sheath and Cranial Nerve Topography', 'ক্যারোটিড শিথ এবং করোটিক স্নায়ুসমূহের গতিপথ'),
          paragraphs: [
            l(
              'The carotid sheath is a condensation of deep cervical fascia that encloses three critical neurovascular structures running vertically through the neck: the common carotid artery (which bifurcates at the superior border of the thyroid cartilage, C4 level, into the internal and external carotid arteries), the internal jugular vein lying laterally, and the vagus nerve (cranial nerve X) coursing posteriorly in the groove between artery and vein.',
              'ক্যারোটিড শিথ হলো গভীর ফাসিয়ার একটি শক্তিশালী নলাকার আবরণ যা ঘাড়ের তিনটি অতি গুরুত্বপূর্ণ রক্তনালী ও স্নায়ুকে একসাথে ধরে রাখে: কমন ক্যারোটিড ধমনী (যা ৪র্থ কশেরুকা বরাবর ইন্টারনাল ও এক্সটারনাল শাখায় ভাগ হয়), এর বাইরে থাকা ইন্টারনাল জুগুলার শিরা এবং এদের পেছনের খাঁজে সোজা নিচে নেমে যাওয়া ১০ম ক্রেনিয়াল নার্ভ ভেগাস।'
            ),
            l(
              'Surrounding the sheath are key neural conduits: the ansa cervicalis (a loop of nerve fibers from C1–C3) lies embedded in or on its anterior wall, supplying the infrahyoid strap muscles (omohyoid, sternohyoid, sternothyroid). Medial to the bifurcation sits the carotid body (a glomus chemoreceptor monitoring arterial PO2, PCO2, and pH via CN IX), while the dilated base of the internal carotid artery forms the carotid sinus, housing high-pressure baroreceptors that buffer arterial blood pressure.',
              'ক্যারোটিড শিথের ওপর সারভাইকাল প্লেক্সাস থেকে আসা আনসা সারভাইকালিস নামক স্নায়ুর ফাঁস থাকে যা ঘাড়ের স্ট্র্যাপ পেশীগুলোকে নিয়ন্ত্রণ করে। ধমনীর বিভাজনস্থলে ক্যারোটিড বডি থাকে যা রক্তে অক্সিজেনের মাত্রা মাপে, এবং ক্যারোটিড সাইনাস থাকে যা রক্তচাপের ওঠানামা পর্যবেক্ষণ করে ৯ ও ১০ নং করোটিক স্নায়ুর মাধ্যমে মস্তিষ্কে সংকেত পাঠিয়ে রক্তচাপ স্বাভাবিক মাত্রায় ধরে রাখে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Emergencies: Deep Neck Space Infections and Ludwig Angina', 'ক্লিনিক্যাল জরুরি অবস্থা: গভীর গলার সংক্রমণ ও লুডউইগ অ্যানজাইনা'),
          paragraphs: [
            l(
              'Infections originating from lower molar teeth, tonsillitis, or pharyngeal trauma can dissect into deep cervical fascial compartments. Ludwig angina is an aggressive, non-suppurative cellulitis involving the submandibular and sublingual spaces bilaterally. Because the roots of the second and third mandibular molars penetrate beneath the mylohyoid muscle attachment, periapical abscesses rapidly spread across fascial boundaries without encountering natural anatomical barriers.',
              'নিচের মাড়ির দাঁতের পুঁজ বা গলার আঘাত থেকে সংক্রমণ দ্রুত ঘাড়ের গভীর ফাঁকা স্থানে ছড়িয়ে পড়তে পারে। লুডউইগ অ্যানজাইনা হলো চোয়াল ও জিহ্বার নিচের গভীর ফাঁকা স্থানে ছড়িয়ে পড়া এক মারাত্মক তীব্র ব্যাকটেরিয়াল সংক্রমণ। যেহেতু ২য় ও ৩য় মাড়ির দাঁতের গোড়া মাইলোহায়য়েড পেশীর নিচে বিস্তৃত থাকে, তাই দাঁতের পুঁজ সহজেই কোনো প্রাকৃতিক বাধা ছাড়াই ঘাড়ের উভয় পাশে দ্রুত ছড়িয়ে পড়তে সক্ষম হয়।'
            ),
            l(
              'As inflammatory induration consolidates, the floor of the mouth elevates and the swollen tongue is driven postero-superiorly against the hard and soft palate, producing severe trismus, "woody" induration of the submandibular neck, drooling, and catastrophic acute airway obstruction. Definitive management mandates early airway protection (awake fiberoptic intubation or tracheostomy) combined with intravenous broad-spectrum antimicrobial therapy and surgical fascial decompression.',
              'সংক্রমণ বাড়ার সাথে সাথে পুরো জিহ্বা ফুলে ওপরে ও পেছনের তালুতে ঠেকে যায় যার ফলে মুখ খোলা অসম্ভব হয়ে পড়ে, লালা ঝরতে থাকে এবং শ্বাসনালি বন্ধ হয়ে রোগী দম আটকে মারা যাওয়ার উপক্রম হয়। এই অবস্থায় দ্রুত শ্বাসনালিতে কৃত্রিম নল স্থাপন বা ট্র্যাকিওস্টমি করে শ্বাসপ্রশ্বাস নিশ্চিত করা এবং অপারেশনের মাধ্যমে ফাসিয়া কেটে পুঁজ নিষ্কাশন করা রোগীর জীবন বাঁচানোর একমাত্র উপায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary & Head and Neck Core Principles', 'সারসংক্ষেপ ও মাথা-ঘাড় শারীরস্থানের মূল সূত্রসমূহ'),
          paragraphs: [
            l(
              'Mastery of head and neck regional anatomy centers upon understanding the three-dimensional architecture of the deep cervical fasciae, the surgical boundaries of the cervical triangles, the neurovascular contents of the carotid sheath, and the sphincter-phonatory mechanics of the cartilaginous larynx. Every fascial envelope acts as either an impassable barrier or an unhindered surgical conduit.',
              'মাথা ও ঘাড়ের শারীরস্থান সঠিকভাবে আয়ত্ত করার মূল চাবিকাঠি হলো গভীর সারভাইকাল ফাসিয়ার ত্রিমাত্রিক স্তরবিন্যাস, ঘাড়ের ত্রিভুজসমূহের সার্জিক্যাল সীমানা, ক্যারোটিড শিথের রক্তনালী ও স্নায়ু এবং ল্যারিঙ্কসের তরুণাস্থিময় স্বরযন্ত্রের মেকানিক্স অনুধাবন করা। ঘাড়ের প্রতিটি ফাসিয়া স্তর হয় কোনো সংক্রমণকে আটকে রাখার বাধা হিসেবে কাজ করে অথবা সংক্রমণ ছড়ানোর নালী হিসেবে ব্যবহৃত হয়।'
            ),
            l(
              'Surgical interventions on the thyroid gland, carotid artery, or cervical lymph nodes require meticulous anatomical respect for delicate crossing nerves—particularly the recurrent laryngeal nerve, superior laryngeal nerve, spinal accessory nerve, and hypoglossal nerve—to avoid devastating permanent phonatory and motor deficits.',
              'থাইরয়েড অপারেশন, ক্যারোটিড ধমনীর অস্ত্রোপচার কিংবা গলার লিম্ফ নোড অপসারণের সময় ক্ষুদ্র স্নায়ুগুলোর (যেমন রিকারেন্ট ল্যারিঞ্জিয়াল, এক্সেসরি ও হাইপোগ্লসাল স্নায়ু) অবস্থান সম্পর্কে অত্যন্ত সচেতন থাকতে হয়, যাতে কোনো স্নায়ু কেটে গিয়ে রোগীর কথা বলা বা শ্বাস নেওয়ার স্থায়ী ক্ষতি না ঘটে।'
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
          heading: l('Deep Neck Fascial Spaces and Descending Mediastinitis', 'গভীর ঘাড়ের ফাঁকা স্থানসমূহ এবং ডিসেন্ডিং মিডিয়াস্টাইনাইটিস'),
          paragraphs: [
            l(
              'The deep cervical fascia gives rise to three clinically pivotal potential spaces: the submandibular space, the retropharyngeal space, and the danger space (space 4 of Grodinsky and Holyoke). The retropharyngeal space is bounded anteriorly by the buccopharyngeal fascia coating the pharyngeal constrictors, posteriorly by the alar fascia, and laterally by the carotid sheaths; it extends from the skull base downward to the level of the superior mediastinum (T1–T2), where the alar fascia fuses with the visceral fascia.',
              'গভীর সারভাইকাল ফাসিয়া ঘাড়ে তিনটি অত্যন্ত গুরুত্বপূর্ণ সম্ভাব্য ফাঁকা স্থানের জন্ম দেয়: সাবম্যান্ডিবুলার স্পেস, রেট্রোফ্যারিঞ্জিয়াল স্পেস এবং ডেনজার স্পেস। রেট্রোফ্যারিঞ্জিয়াল স্পেসটি ফ্যারিঙ্কসের পেশীর আবরণ এবং পেছনের অ্যালার ফাসিয়ার মাঝে অবস্থিত যা মাথার খুলির তলদেশ থেকে শুরু করে ১ম বা ২য় বক্ষ কশেরুকা (T1–T2) পর্যন্ত বিস্তৃত থাকে যেখানে অ্যালার ফাসিয়া এসে খাদ্যনালির সাথে মিলে যায়।'
            ),
            l(
              'Directly posterior to the retropharyngeal space lies the true danger space, bounded anteriorly by the alar fascia and posteriorly by the prevertebral layer. Unlike the retropharyngeal space, the danger space contains loose, gelatinous areolar tissue and continues without anatomical interruption from the clivus of the skull base through the posterior mediastinum all the way to the level of the respiratory diaphragm (T12). Suppurative infections entering the danger space rapidly cause necrotizing descending mediastinitis, empyema, and pericarditis.',
              'রেট্রোফ্যারিঞ্জিয়াল স্পেসের ঠিক পেছনে থাকে আসল ডেনজার স্পেস যা অ্যালার ফাসিয়া ও প্রি-ভার্টিব্রাল ফাসিয়ার মাঝে অবস্থিত। রেট্রোফ্যারিঞ্জিয়াল স্পেসের মতো বক্ষে আটকে না গিয়ে এই ডেনজার স্পেসটি কোনো বাধা ছাড়াই মাথার খুলি থেকে শুরু করে ডায়াফ্রাম (T12) পর্যন্ত উন্মুক্ত থাকে। ফলে গলার পুঁজ এই পথ দিয়ে কয়েক ঘণ্টার মধ্যে বক্ষপিঞ্জরে নেমে গিয়ে মারাত্মক পচনশীল মিডিয়াস্টাইনাইটিস ও পেরিকার্ডাইটিস সৃষ্টি করে রোগীর মৃত্যু ঘটাতে পারে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Topographical Anatomy of the Cervical Triangles and Lymph Nodes', 'সারভাইকাল ট্রায়াঙ্গল ও লিম্ফ নোডের আঞ্চলিক শারীরস্থান'),
          paragraphs: [
            l(
              'The carotid triangle (bounded by the posterior belly of digastric, superior belly of omohyoid, and anterior border of SCM) is the anatomical nexus of neck surgery. Within it lies the bifurcation of the common carotid artery into internal carotid (which gives off no cervical branches) and external carotid (which immediately emits eight branches: superior thyroid, ascending pharyngeal, lingual, facial, occipital, posterior auricular, maxillary, and superficial temporal).',
              'ক্যারোটিড ট্রায়াঙ্গলটি হলো ঘাড়ের অপারেশনের প্রধান কেন্দ্র। এর ভেতরেই কমন ক্যারোটিড ধমনী দুটি প্রধান শাখায় বিভক্ত হয়: ইন্টারনাল ক্যারোটিড (যা ঘাড়ে কোনো শাখা না দিয়ে সরাসরি খুলির ভেতরে মস্তিষ্কে চলে যায়) এবং এক্সটারনাল ক্যারোটিড ধমনী (যা ঘাড়ে ও মুখে ৮টি গুরুত্বপূর্ণ শাখা দেয়: সুপিরিয়র থাইরয়েড, লিঙ্গুয়াল, ফেসিয়াল, ম্যাক্সিলারি ইত্যাদি)।'
            ),
            l(
              'Cervical lymph nodes are organized clinically into six standard levels: Level I (submental IA and submandibular IB), Level II (upper internal jugular/jugulodigastric), Level III (middle jugular), Level IV (lower jugular/jugulo-omohyoid), Level V (posterior triangle/spinal accessory chain), and Level VI (anterior central compartment, encompassing prelaryngeal, pretracheal, and paratracheal nodes surrounding the thyroid). Understanding this drainage hierarchy governs neck dissections for metastatic squamous cell carcinomas.',
              'ঘাড়ের লিম্ফ নোডগুলোকে চিকিৎসার সুবিধার জন্য ছয়টি আন্তর্জাতিক স্তরে ভাগ করা হয়: ১ম স্তর (চিবুক ও চোয়ালের নিচের নোড), ২য় স্তর (উর্ধ্ব জুগুলার নোড), ৩য় স্তর (মধ্য জুগুলার নোড), ৪র্থ স্তর (নিম্ন জুগুলার নোড), ৫ম স্তর (পেছনের ট্রায়াঙ্গলের নোড) এবং ৬ষ্ঠ স্তর (থাইরয়েডের চারপাশের সেন্ট্রাল নোড)। মুখ বা গলার ক্যান্সারের সার্জারি ও লিম্ফ নোড অপসারণে এই স্তরবিন্যাস জানা অপরিহার্য।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Intrinsic Laryngeal Biomechanics and Recurrent Laryngeal Nerve Neuroanatomy', 'ল্যারিঙ্কসের অভ্যন্তরীণ বলবিদ্যা ও রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ'),
          paragraphs: [
            l(
              'Innervation of the larynx is divided between two branches of the vagus nerve (CN X): the superior laryngeal nerve and the recurrent (inferior) laryngeal nerve. The superior laryngeal nerve bifurcates into an internal branch (piercing the thyrohyoid membrane to convey sensory innervation to the supraglottic laryngeal mucosa, triggering the cough reflex) and an external branch (innervating the cricothyroid muscle to regulate vocal fold tension and high pitch).',
              'ল্যারিঙ্কসের স্নায়ু সরবরাহ ১০ম করোটিক স্নায়ু ভেগাসের দুটি শাখা দ্বারা সম্পন্ন হয়: সুপিরিয়র ল্যারিঞ্জিয়াল নার্ভ এবং রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ। সুপিরিয়র ল্যারিঞ্জিয়াল নার্ভের ভেতরের শাখাটি স্বরতন্ত্রীর ওপরের অংশের সংবেদী অনুভূতি বহন করে এবং কাশির প্রতিবর্ত ক্রিয়া চালু রাখে; আর বাইরের শাখাটি ক্রিকোথাইরয়েড পেশীকে উদ্দীপিত করে গলার স্বরের তীক্ষ্ণতা বজায় রাখে।'
            ),
            l(
              'The recurrent laryngeal nerve exhibits asymmetrical thoracic courses due to vascular embryology. The right RLN loops around the right subclavian artery (derived from the 4th aortic arch) and ascends in the tracheoesophageal groove. The left RLN loops under the aortic arch distal to the ligamentum arteriosum (6th aortic arch) and ascends through the superior mediastinum. Both nerves pass deep to the inferior thyroid artery near the ligament of Berry before entering the larynx behind the cricothyroid joint.',
              'ভ্রূণাবস্থার রক্তনালীর কারণে দুই পাশের রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভের পথ ভিন্ন হয়: ডান পাশের স্নায়ুটি সাবক্ল্যাভিয়ান ধমনীর নিচ দিয়ে ঘুরে গলায় ওঠে, আর বাম পাশের স্নায়ুটি মহাধমনীর আর্চের নিচ দিয়ে ঘুরে বক্ষপিঞ্জর হয়ে গলায় ওঠে। দুটি স্নায়ুই থাইরয়েডের ইনফিরিয়র ধমনীর পাশ দিয়ে বেরির লিগামেন্টের ভেতর দিয়ে ল্যারিঙ্কসে প্রবেশ করে; থাইরয়েড কাটার সময় অসাবধান হলে এই স্নায়ু কেটে গিয়ে চিরতরে গলা নষ্ট হতে পারে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Thyroid Bed and Parathyroid Vascular Supply', 'থাইরয়েড বেড এবং প্যারাথাইরয়েড গ্রন্থির রক্ত সংবহন'),
          paragraphs: [
            l(
              'The thyroid gland comprises two lateral lobes linked across the 2nd to 4th tracheal rings by a median isthmus. It receives dual arterial perfusion: the superior thyroid artery (first anterior branch of the external carotid artery) descending to the superior pole accompanied by the external branch of the superior laryngeal nerve, and the inferior thyroid artery (from the thyrocervical trunk of the subclavian artery) ascending to the inferior pole intimately intertwined with the recurrent laryngeal nerve.',
              'থাইরয়েড গ্রন্থির দুটি লোব ২য় থেকে ৪র্থ শ্বাসনালি বলয়ের ওপর একটি ইস্থমাস দিয়ে যুক্ত থাকে। এটি দুটি প্রধান ধমনী থেকে রক্ত পায়: এক্সটারনাল ক্যারোটিড থেকে আসা সুপিরিয়র থাইরয়েড ধমনী যা ওপরের মেরুতে নামে, এবং সাবক্ল্যাভিয়ান ধমনীর থাইরোসারভাইকাল ট্রাঙ্ক থেকে আসা ইনফিরিয়র থাইরয়েড ধমনী যা নিচের মেরুতে গিয়ে রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ুর গা ঘেঁষে প্রবেশ করে।'
            ),
            l(
              'Nestled along the posterior capsule of the thyroid lobes are the four lentil-sized parathyroid glands (superior pair derived from the 4th pharyngeal pouch; inferior pair from the 3rd pouch, which migrate with the thymus). Both pairs derive their critical arterial blood supply almost exclusively from terminal branches of the inferior thyroid arteries. Indiscriminate ligation of the main trunk of the inferior thyroid artery devascularizes the parathyroids, provoking acute hypocalcemic tetany.',
              'থাইরয়েডের পেছনের আবরণের সাথে মসুর ডালের মতো চারটি ক্ষুদ্র প্যারাথাইরয়েড গ্রন্থি লেগে থাকে যা শরীরের ক্যালসিয়াম নিয়ন্ত্রণ করে। এদের বেঁচে থাকার রক্ত আসে মূলত ইনফিরিয়র থাইরয়েড ধমনীর সূক্ষ্ম শাখা থেকে। থাইরয়েড অপারেশনের সময় এই ধমনীটি মূল কাণ্ডে ভুলভাবে বেঁধে দিলে প্যারাথাইরয়েড গ্রন্থিগুলো মরে যায়, যার ফলে রক্তে ক্যালসিয়াম মারাত্মক কমে গিয়ে রোগীর হাত-পা খিঁচুনি ও টিটানি শুরু হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Surgical Approaches and Nerve Protection during Thyroidectomy', 'থাইরয়েডেক্টমির সার্জিক্যাল পদ্ধতি এবং স্নায়ু সুরক্ষা'),
          paragraphs: [
            l(
              'Safe thyroid surgery depends upon precise capsular dissection techniques. To protect the external branch of the superior laryngeal nerve, the superior thyroid vessels must be ligated individually on the thyroid capsule rather than as a mass ligature high in the neck; injuring this nerve denervates the cricothyroid muscle, causing vocal fatigue and loss of high-pitch phonation (monotone voice, critical for singers and public speakers).',
              'নিরাপদ থাইরয়েড সার্জারির জন্য গ্রন্থির পর্দার ঠিক ওপর রক্তনালী বাঁধার কৌশল অবলম্বন করা হয়। সুপিরিয়র ল্যারিঞ্জিয়াল স্নায়ুর ক্ষতি এড়াতে সুপিরিয়র থাইরয়েড রক্তনালীগুলোকে উঁচুতে না বেঁধে ঠিক থাইরয়েডের গায়ের ওপর পৃথকভাবে বাঁধতে হয়; এই স্নায়ুটি কাটা পড়লে রোগী উচ্চস্বরে গান গাইতে বা চিৎকার করতে পারে না এবং কথা বলতে গেলে দ্রুত গলা ক্লান্ত হয়ে পড়ে।'
            ),
            l(
              'Similarly, to preserve the recurrent laryngeal nerve, the inferior thyroid artery branches must be ligated peripherally on the thyroid parenchyma. Intraoperative neuromonitoring (IONM) using electromyographic endotracheal tubes verifies nerve conduction before and after resection. Accidental transection leaves the vocal fold paretic in the paramedian position, causing hoarseness, loss of vocal volume, and increased aspiration risk.',
              'একইভাবে রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ বাঁচাতে ইনফিরিয়র থাইরয়েড ধমনীকে দূরবর্তী স্থানে না বেঁধে একদম থাইরয়েডের ভেতরের ক্ষুদ্র শাখায় বাঁধতে হয়। অপারেশনের সময় আধুনিক স্নায়ু মনিটরিং যন্ত্র ব্যবহার করে স্নায়ুর সংকেত ঠিক আছে কিনা তা নিশ্চিত করা হয়। অসাবধানতাবশত স্নায়ুটি কেটে গেলে স্বরতন্ত্রী অবশ হয়ে রোগী চিরদিনের জন্য গলার স্পষ্ট স্বর হারিয়ে ফেলে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Head and Neck Surgical Anatomy', 'উচ্চতর সংশ্লেষ: মাথা ও ঘাড়ের সার্জিক্যাল শারীরস্থান'),
          paragraphs: [
            l(
              'The head and neck represent one of the highest densities of vital neurovascular structures, visceral conduits, and fascial compartments in the human body. Mastery of this territory requires integrating embryological branchial arch derivatives, cranial nerve exit pathways, cervical fascial clefts, and the intricate vascular anastomoses of the external carotid system.',
              'মানবদেহের মাথা ও ঘাড়ের ক্ষুদ্র অঞ্চলে সবচেয়ে বেশি সংখ্যক গুরুত্বপূর্ণ স্নায়ু, রক্তনালী, শ্বাসনালি ও খাদ্যনালি অবস্থান করে। এই অঞ্চলটি সঠিকভাবে পরিচালনা করতে হলে ভ্রূণীয় ব্র্যাঙ্কিয়াল আর্চের রূপান্তর, করোটিক স্নায়ুর গতিপথ, ঘাড়ের ফাসিয়ার মধ্যবর্তী স্থানসমূহ এবং ক্যারোটিড রক্তনালীর সমান্তরাল সংযোগ সম্পর্কে গভীর ও স্পষ্ট জ্ঞান থাকা অপরিহার্য।'
            ),
            l(
              'Whether addressing complex deep neck infections, performing radical neck dissections for aerodigestive malignancies, or safely excising endocrine tumors, precise visualization of structural boundaries, fascial planes, and nerve courses safeguards patient survival, speech, and swallowing function.',
              'গলার গভীর পুঁজ নিষ্কাশন, ক্যান্সারের জন্য লিম্ফ নোড অপারেশন কিংবা থাইরয়েড টিউমার অপসারণ—প্রতিটি ক্ষেত্রেই ফাসিয়ার প্রাকৃতিক স্তর ও সূক্ষ্ম স্নায়ুপথগুলোকে নিখুঁতভাবে রক্ষা করার ওপরই রোগীর জীবনরক্ষা, স্বাভাবিক কথা বলার ক্ষমতা এবং খাদ্য গেলার সক্ষমতা নির্ভর করে।'
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
          heading: l('Autonomic Reflex Arcs: Carotid Sinus Syncope and Horner Syndrome', 'স্বয়ংক্রিয় রিফ্লেক্স: ক্যারোটিড সাইনাস সিনকোপ এবং হর্নার সিন্ড্রোম'),
          paragraphs: [
            l(
              'The carotid sinus is a dilated neurovascular baroreceptor located at the origin of the internal carotid artery, innervated by the sinus nerve of Hering (branch of glossopharyngeal nerve, CN IX). Increased transmural pressure or external mechanical compression stretches baroreceptors, triggering afferent impulses to the nucleus tractus solitarius in the medulla. This excites parasympathetic vagal efferents (slowing the heart rate) while inhibiting sympathetic vasomotor centers (causing systemic vasodilation).',
              'ক্যারোটিড সাইনাস হলো ইন্টারনাল ক্যারোটিড ধমনীর গোড়ায় অবস্থিত রক্তচাপ সংবেদক স্নায়ুকেন্দ্র যা ৯ নং করোটিক স্নায়ুর হেরিং শাখা দ্বারা নিয়ন্ত্রিত হয়। রক্তচাপ অতিরিক্ত বাড়লে বা বাইরে থেকে শক্ত কলার চেপে বসলে এই কেন্দ্রটি উত্তেজিত হয়ে ব্রেনস্টেমে সংকেত পাঠায়; এর ফলে ভেগাস স্নায়ু হৃদস্পন্দন কমিয়ে দেয় এবং রক্তনালীগুলো প্রসারিত হয়ে রক্তচাপ দ্রুত নামিয়ে দেয়।'
            ),
            l(
              'In carotid sinus hypersensitivity, minor mechanical stimulation (such as shaving, a tight necktie, or turning the head) provokes exaggerated vagal bradycardia and profound hypotension, leading to cerebral hypoperfusion and syncope. Conversely, disruption of the cervical sympathetic chain (which ascends from T1–T2 along the prevertebral fascia deep to the carotid sheath) produces Horner syndrome: ipsilateral ptosis (loss of superior tarsal muscle), miosis (unopposed pupillary constrictor), and anhidrosis.',
              'ক্যারোটিড সাইনাসের অতিরিক্ত সংবেদনশীলতায় আক্রান্ত ব্যক্তিরা শেভ করার সময় বা শক্ত টাই পরলে হঠাৎ অজ্ঞান হয়ে পড়ে যাকে ক্যারোটিড সাইনাস সিনকোপ বলে। বিপরীতভাবে ক্যারোটিড শিথের পেছনের সিমপ্যাথেটিক স্নায়ুরজ্জু নষ্ট হলে আক্রান্ত চোখে হর্নার সিন্ড্রোম দেখা দেয়: চোখের পাতা ঝুলে পড়া (টপোসিস), পিউপিল সংকুচিত হয়ে যাওয়া (মায়োসিস) এবং মুখের সেই অংশে ঘাম বন্ধ হয়ে যাওয়া (অ্যানহাইড্রোসিস)।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Pharyngeal Pouch Herniations and Zenker Diverticulum Biomechanics', 'ফ্যারিঙ্কসের থলি ও জেনকার ডাইভার্টিকুলামের বলবিদ্যা'),
          paragraphs: [
            l(
              'The junction between the pharynx and esophagus represents an anatomical weak spot known as Killian triangle, a triangular dehiscence bounded superiorly by the oblique fibers of the thyropharyngeus muscle and inferiorly by the horizontal fibers of the cricopharyngeus muscle (the upper esophageal sphincter, both part of the inferior pharyngeal constrictor). Uncoordinated swallowing mechanics elevate intraluminal pharyngeal pressure against an unrelaxed cricopharyngeus.',
              'ফ্যারিঙ্কস এবং খাদ্যনালির মিলনস্থলে কিলিয়ান ট্রায়াঙ্গল নামক একটি জন্মগত দুর্বল স্থান থাকে যা থাইরোফ্যারিঞ্জিয়াস ও ক্রিকোফ্যারিঞ্জিয়াস পেশীর মাঝখানে অবস্থিত। খাবার গেলার সময় যদি নিচের স্ফিংটার পেশীটি যথাসময়ে শিথিল না হয়, তবে গলার ভেতরের অস্বাভাবিক চাপ পেছনের দুর্বল দেয়ালটিকে বাইরের দিকে ঠেলে বের করে দেয়।'
            ),
            l(
              'This chronic pulsion pressure forces mucosal and submucosal herniation through Killian triangle, creating a Zenker diverticulum (a false diverticulum). As the pouch enlarges, it traps ingested food particles, producing progressive dysphagia, regurgitation of undigested foul food, halitosis, gurgling in the neck, and recurrent aspiration pneumonia. Surgical management requires endoscopic or open cricopharyngeal myotomy with diverticulectomy or diverticulopexy.',
              'এই অনবরত চাপের ফলে খাদ্যনালির ভেতরের পর্দা কিলিয়ান ট্রায়াঙ্গল দিয়ে বের হয়ে একটি থলি তৈরি করে যাকে জেনকার ডাইভার্টিকুলাম বলা হয়। এই থলির ভেতর খাবার আটকে পচে দুর্গন্ধ ছড়ায়, খাবার গিলতে কষ্ট হয় এবং রাতে শুয়ে থাকলে খাদ্যকণা ফুসফুসে ঢুকে মারাত্মক নিউমোনিয়া হতে পারে; অপারেশনের মাধ্যমে এই স্ফিংটার পেশী কেটে থলিটি বন্ধ করে দিলে রোগী সম্পূর্ণ সুস্থ হয়।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-quadrant schematic of the human head and neck: deep fascial layers and danger space, carotid sheath contents, cervical triangles, and the cartilaginous framework of the larynx.',
      'মানব মাথা ও ঘাড়ের ৪টি মূল অঞ্চল: গভীর সারভাইকাল ফাসিয়া ও ডেনজার স্পেস, ক্যারোটিড শিথ, ঘাড়ের ত্রিভুজসমূহ এবং ল্যারিঙ্কসের তরুণাস্থিময় কাঠামো।'
    ),
    steps: [
      l(
        '1. Deep cervical fascia divides the neck into investing, visceral, and prevertebral compartments, defining surgical planes.',
        '১. গভীর সারভাইকাল ফাসিয়া ঘাড়কে ইনভেস্টিং, ভিসেরাল এবং প্রি-ভার্টিব্রাল প্রকোষ্ঠে ভাগ করে সার্জিক্যাল সীমানা তৈরি করে।'
      ),
      l(
        '2. The carotid sheath encases the common carotid artery, internal jugular vein, and vagus nerve along the cervical axis.',
        '২. ক্যারোটিড শিথ কমন ক্যারোটিড ধমনী, ইন্টারনাল জুগুলার শিরা এবং ভেগাস স্নায়ুকে সুরক্ষিত নলের মতো ধারণ করে।'
      ),
      l(
        '3. The sternocleidomastoid separates anterior triangles from the posterior triangle transmitting the spinal accessory nerve.',
        '৩. স্টার্নোক্লিডোমাস্তয়েড পেশী ঘাড়কে ভাগ করে পেছনের ট্রায়াঙ্গলে এক্সেসরি নার্ভকে কাঁধের দিকে পথ তৈরি করে দেয়।'
      ),
      l(
        '4. The cartilaginous larynx coordinates vocal cord abduction (posterior cricoarytenoid) and adduction for speech and airway defense.',
        '৪. ল্যারিঙ্কসের তরুণাস্থি ও পেশীসমূহ স্বরতন্ত্রী খোলা ও বন্ধ করে মানুষের শ্বাসপ্রশ্বাস ও সুমধুর কণ্ঠস্বর নিশ্চিত করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'During a difficult total thyroidectomy for multinodular goiter, a surgeon accidentally transects the nerve that innervates the only muscle capable of abducting the vocal cords. Bilateral injury to this nerve would produce which critical clinical emergency?',
      'একটি জটিল থাইরয়েড অপারেশনের সময় সার্জন অসাবধানতাবশত এমন একটি স্নায়ু কেটে ফেললেন যা স্বরতন্ত্রীকে বাইরের দিকে টেনে খুলে রাখার একমাত্র পেশীটিকে নিয়ন্ত্রণ করে। উভয় পাশের এই স্নায়ু কেটে গেলে রোগীর কোন প্রাণঘাতী জরুরি অবস্থা তৈরি হবে?'
    ),
    options: [
      l('Bilateral vocal cord adduction with acute catastrophic airway obstruction', 'উভয় স্বরতন্ত্রী মাঝখানে বন্ধ হয়ে গিয়ে দম বন্ধ হওয়া মারাত্মক শ্বাসনালি ব্লকেজ'),
      l('Permanent loss of high-pitch vocal cord tension with preserved breathing', 'শ্বাসপ্রশ্বাস স্বাভাবিক থাকলেও গলার সুরের তীক্ষ্ণতা চিরতরে হারিয়ে যাওয়া'),
      l('Ipsilateral loss of sensation above the vocal cords with cough failure', 'স্বরতন্ত্রীর ওপরের অনুভূতি চলে গিয়ে কাশি বন্ধ হয়ে যাওয়া'),
      l('Flaccid paralysis of the soft palate with nasal speech regurgitation', 'নরম তালু অবশ হয়ে গিয়ে নাকে কথা বলা ও খাবার নাকে উঠে যাওয়া'),
    ],
    correctIndex: 0,
    explanation: l(
      'The recurrent laryngeal nerve innervates the posterior cricoarytenoid muscle, which is the sole abductor of the vocal cords (opening the rima glottidis). While unilateral transection produces hoarseness due to paramedian fixation of one cord, bilateral recurrent laryngeal nerve injury paralyzes both abductor muscles. The unopposed action of the cricothyroid muscles (innervated by the external branch of the superior laryngeal nerve) adducts both vocal folds tight against the midline, completely sealing the airway and causing acute asphyxiation requiring immediate emergency tracheostomy.',
      'রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ পোস্টেরিয়র ক্রিকোঅ্যারিটিনয়েড পেশী নিয়ন্ত্রণ করে যা স্বরতন্ত্রীকে খুলে রাখার একমাত্র পেশী। একপাশের স্নায়ু ছিঁড়লে কেবল গলা ভাঙে; কিন্তু উভয় পাশের স্নায়ু নষ্ট হলে স্বরতন্ত্রী খোলার কোনো ক্ষমতা থাকে না এবং ক্রিকোথাইরয়েড পেশীর টানে উভয় স্বরতন্ত্রী মাঝখানে এসে বায়ুপথ পুরোপুরি বন্ধ করে দেয়। এর ফলে কয়েক মিনিটের মধ্যে দম আটকে রোগীর মৃত্যু হতে পারে যদি না অবিলম্বে জরুরি ট্র্যাকিওস্টমি করা হয়।'
    ),
  },
}
