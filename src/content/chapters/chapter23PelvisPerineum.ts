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
    id: 'openstax-ap2e-pelvis',
    title: 'Anatomy and Physiology 2e: The Pelvis and Perineum',
    authors: 'Betts JG, Young KA, Wise JA, Johnson E, Poe B, Kruse DH, Korol O, Johnson JE',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/details/books/anatomy-and-physiology-2e',
  },
  {
    id: 'netter-pelvis-8e',
    title: 'Atlas of Human Anatomy, 8th Edition',
    authors: 'Netter FH',
    organization: 'Elsevier',
    year: 2022,
    url: 'https://www.elsevier.com/books/atlas-of-human-anatomy/netter/978-0-323-68042-4',
  },
]

export const chapter23PelvisPerineumLesson: LessonTopic = {
  id: 'topic.anatomy.pelvis-perineum',
  slug: 'pelvis-perineum',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('23 · Pelvis and Perineum', '২৩ · পেলভিস ও পেরিনিয়াম'),
  summary: l(
    'A comprehensive regional study of the human pelvis and perineum: osteology of the true and false pelvis and obstetrical pelvimetry, the funnel-shaped pelvic diaphragm (levator ani and puborectalis anorectal sling mechanics), division of the diamond-shaped perineum into urogenital and anal triangles, superficial and deep perineal pouches, the central perineal body and obstetric lacerations, the ischioanal fossae and Alcock pudendal canal, and autonomic pelvic splanchnic neurovascular networks governing continence and micturition.',
    'মানব পেলভিস ও পেরিনিয়ামের বিশদ আঞ্চলিক শারীরস্থান: ট্রু ও ফলস পেলভিসের অস্থিকাঠামো ও প্রসূতি পরিমাপ, ফানেল আকৃতির পেলভিক ডায়াফ্রাম (লিভেটর অ্যানাই ও মলদ্বারের অ্যাঙ্গেল নিয়ন্ত্রণকারী পিউবোরেকটালিস পেশী), হীরকাকৃতির পেরিনিয়ামকে ইউরোজেনিটাল ও অ্যানাল ট্রায়াঙ্গলে বিভাজন, অগভীর ও গভীর পেরিনিয়াল পাউচ, পেরিনিয়াল বডি ও প্রসবকালীন ছিঁড়ে যাওয়া, ইশ্চিওঅ্যানাল গহ্বর ও অ্যালককের পুডেন্ডাল ক্যানাল এবং মল-মূত্র নিয়ন্ত্রণকারী স্বয়ংক্রিয় স্নায়ুসংযোগের সম্পূর্ণ পর্যালোচনা।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Distinguish the boundaries and clinical planes of the true (lesser) and false (greater) pelvis, calculating the obstetric conjugate and contrasting gynecoid and android pelvic architectures.',
      'ট্রু (লেসার) ও ফলস (গ্রেটার) পেলভিসের সীমানা ও ক্লিনিক্যাল তলসমূহ চিহ্নিত করা, প্রসূতি পরিমাপে অবস্টেট্রিক কনজুগেট নির্ণয় করা এবং গাইনেকয়েড ও অ্যান্ড্রয়েড পেলভিসের পার্থক্য বিশ্লেষণ করা।'
    ),
    l(
      'Map the tripartite levator ani muscle complex (puborectalis, pubococcygeus, and iliococcygeus), explaining how the puborectalis muscular sling maintains the 80-degree anorectal angle for fecal continence.',
      'লিভেটর অ্যানাই পেশীর তিনটি অংশ (পিউবোরেকটালিস, পিউবোকক্সিজিয়াস ও ইলিয়োকক্সিজিয়াস) চিহ্নিত করা এবং কীভাবে পিউবোরেকটালিস পেশীর ফাঁস ৮০ ডিগ্রির মলদ্বার কোণ তৈরি করে মল নিয়ন্ত্রণ বজায় রাখে তা ব্যাখ্যা করা।'
    ),
    l(
      'Dissect the urogenital and anal triangles, the contents of the superficial and deep perineal pouches, the central perineal body, and the pudendal nerve (S2–S4) within the Alcock canal.',
      'ইউরোজেনিটাল ও অ্যানাল ট্রায়াঙ্গল, অগভীর ও গভীর পেরিনিয়াল পাউচের উপাদান, কেন্দ্রীয় পেরিনিয়াল বডি এবং অ্যালকক ক্যানালের ভেতরে পুডেন্ডাল স্নায়ুর (S2–S4) গতিপথ ও অবস্টেট্রিক নার্ভ ব্লকের শারীরস্থান মূল্যায়ন করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.reproductive'],
  relatedTopicIds: ['topic.anatomy.urinary', 'topic.anatomy.abdomen'],
  references: refs,
  evidenceBySection: {
    introduction: ['moore-anatomy-9e', 'openstax-ap2e-pelvis'],
    structure: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    mechanism: ['grays-anatomy-42e', 'netter-pelvis-8e'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'netter-pelvis-8e'],
    takeaways: ['openstax-ap2e-pelvis', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-bony-pelvis', label: l('Bony Pelvis & Obstetrical Conjugates', 'অস্থি পেলভিস ও প্রসূতি পরিমাপ'), sectionId: 'introduction' },
      { id: 'sec-pelvic-diaphragm', label: l('Pelvic Diaphragm & Levator Ani Complex', 'পেলভিক ডায়াফ্রাম ও লিভেটর অ্যানাই পেশী'), sectionId: 'structure' },
      { id: 'sec-perineal-pouches', label: l('Perineum: Pouches & the Perineal Body', 'পেরিনিয়াম: পাউচ ও পেরিনিয়াল বডি'), sectionId: 'mechanism' },
      { id: 'sec-pudendal-canal', label: l('Ischioanal Fossa & Alcock Pudendal Canal', 'ইশ্চিওঅ্যানাল গহ্বর ও অ্যালকক ক্যানাল'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Obstetrics: Prolapse & Pudendal Block', 'ক্লিনিক্যাল প্রসূতিবিদ্যা: প্রোল্যাপ্স ও নার্ভ ব্লক'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary & Pelvis Core Principles', 'সারসংক্ষেপ ও পেলভিস শারীরস্থানের মূলনীতি'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Puborectalis Anorectal Sling', 'পিউবোরেকটালিস মলদ্বার ফাঁস (Anorectal Sling)'),
        definition: l(
          'A robust U-shaped muscular band arising from the posterior surface of the pubic bones, passing posteriorly around the junction of the rectum and anal canal. Exerts continuous forward traction to maintain the 80-degree anorectal angle, providing resting passive fecal continence; relaxation straightens the canal during active defecation.',
          'পিউবিক হাড়ের পেছনের অংশ থেকে তৈরি হয়ে মলাশয় ও মলদ্বারের সংযোগস্থলকে ঘিরে থাকা একটি শক্তিশালী U-আকৃতির পেশীর ফাঁস। এটি মলাশয়কে সামনের দিকে টেনে একটি ৮০ ডিগ্রি কোণ তৈরি করে রাখে যার ফলে মানুষ না চাইলে মল বাইরে বের হতে পারে না; মলত্যাগের সময় এই পেশীটি শিথিল হয়ে কোণটিকে সোজা করে দেয়।'
        ),
      },
      {
        term: l('Perineal Body (Central Tendon)', 'পেরিনিয়াল বডি (কেন্দ্রীয় টেনডন)'),
        definition: l(
          'An essential fibromuscular mass situated in the midline at the junction of the urogenital and anal triangles between the bulb of the penis/vagina and the anal canal. Point of convergence for eight muscles: external anal sphincter, bulbospongiosus, superficial and deep transverse perineal muscles, levator ani, and rectal smooth muscle; tearing during unassisted vaginal delivery causes pelvic floor laxity and organ prolapse.',
          'মলদ্বার এবং প্রজনন অঙ্গের সংযোগস্থলে অবস্থিত একটি অতি গুরুত্বপূর্ণ তন্তুময় পেশীবহুল কেন্দ্র যেখানে আটটি ভিন্ন পেশী এসে মিলিত হয়। প্রসবের সময় এটি ছিঁড়ে গেলে পেলভিক মেঝের শক্তি নষ্ট হয়ে যায় এবং পরবর্তীতে জরায়ু ও মূত্রথলি নিচে নেমে আসার মতো মারাত্মক প্রোল্যাপ্স সমস্যা তৈরি হয়।'
        ),
      },
      {
        term: l('Pudendal Canal of Alcock', 'অ্যালককের পুডেন্ডাল ক্যানাল (Alcock Canal)'),
        definition: l(
          'A horizontal fascial tunnel formed by a split in the obturator internus fascia along the lateral wall of the ischioanal fossa. Transmits the pudendal nerve (S2–S4) and internal pudendal vessels into the perineum; site of regional anesthetic infiltration (pudendal nerve block) guided by transvaginal palpation of the ischial spine.',
          'ইশ্চিওঅ্যানাল গহ্বরের বাইরের দেয়ালে অপটুরেটর ইন্টারনাস পেশীর ফাসিয়া চিরে তৈরি হওয়া একটি আনুভূমিক সুরঙ্গ। এর ভেতর দিয়ে পেরিনিয়ামের প্রধান পুডেন্ডাল স্নায়ু (S2–S4) এবং রক্তনালী অতিক্রম করে; স্বাভাবিক প্রসবের সময় ব্যথা কমাতে যোনিপথের ভেতর দিয়ে ইশ্চিয়াল স্পাইন স্পর্শ করে এই স্থানে লোকাল অ্যানেস্থেসিয়া ইনজেকশন দেওয়া হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Measuring Obstetrical Conjugates and Performing Transvaginal Pudendal Nerve Block', 'প্রসূতি কনজুগেট পরিমাপ এবং যোনিপথের মাধ্যমে পুডেন্ডাল নার্ভ ব্লক প্রয়োগ'),
        steps: [
          l(
            'Step 1: Perform digital pelvimetry: Introduce index and middle fingers into the vagina to reach the sacral promontory. The distance from the inferior margin of the pubic symphysis to the sacral promontory is the diagonal conjugate (normally ≥12.5 cm). Subtracting 1.5 cm yields the true obstetric conjugate (normally ≥11.0 cm), which represents the narrowest fixed anteroposterior diameter through which the fetal head must engage.',
            'ধাপ ১: ডিজিটাল পেলভিমেট্রি করুন: যোনিপথ দিয়ে দুটি আঙুল প্রবেশ করিয়ে স্যাক্রামের উঁচু স্থান (স্যাক্রাল প্রমন্টোরি) স্পর্শ করার চেষ্টা করুন। পিউবিক সিমফাইসিসের নিচ থেকে স্যাক্রাল প্রমন্টোরির দূরত্ব হলো ডায়াগোনাল কনজুগেট (স্বাভাবিকভাবে ≥১২.৫ সেমি)। এখান থেকে দেড় সেন্টিমিটার বাদ দিলে পাওয়া যায় আসল অবস্টেট্রিক কনজুগেট (≥১১ সেমি) যা দিয়ে শিশুর মাথা স্বাভাবিকভাবে বের হতে পারে কিনা তা বোঝা যায়।'
          ),
          l(
            'Step 2: Identify landmark for pudendal block: Palpate the sharp bony landmark of the ischial spine on the lateral pelvic wall. The sacrospinous ligament extends medially from this spine to the sacrum.',
            'ধাপ ২: নার্ভ ব্লকের ল্যান্ডমার্ক শনাক্ত করুন: পেলভিসের পাশের দেয়ালে আঙুল বুলিয়ে সুচালো ইশ্চিয়াল স্পাইন এবং এর সাথে লেগে থাকা স্যাক্রোস্পাইনাস লিগামেন্টটি স্পষ্টভাবে অনুভব করুন।'
          ),
          l(
            'Step 3: Infiltrate local anesthetic: Guide a shielded needle (Iowa trumpet) transvaginally toward the ischial spine, piercing through the sacrospinous ligament into the pudendal canal of Alcock. Aspirate to ensure the needle is not inside the internal pudendal artery, then inject 10 mL of lidocaine to anesthetize S2–S4 dermatomes (perineum and lower vagina) for episiotomy or forceps delivery.',
            'ধাপ ৩: অবশ করার ওষুধ দিন: একটি সুরক্ষিত সুঁই আঙুলের সাহায্যে ইশ্চিয়াল স্পাইনের পেছনে স্যাক্রোস্পাইনাস লিগামেন্ট ভেদ করে অ্যালকক ক্যানালে প্রবেশ করান। রক্ত আসছে কিনা তা পরীক্ষা করে ১০ মিলিলিটার লিডোকেইন প্রয়োগ করুন যা শিশুর প্রসবের সময় পেরিনিয়ামের তীব্র ব্যথা সম্পূর্ণ বন্ধ করে দেয়।'
          ),
        ],
        conclusion: l(
          'Using the ischial spine as an immovable skeletal landmark guarantees accurate pudendal nerve blockade while avoiding systemic intravascular injection into the internal pudendal artery.',
          'ইশ্চিয়াল স্পাইনকে স্থির কঙ্কাল ল্যান্ডমার্ক হিসেবে ব্যবহার করলে পাশের প্রধান ধমনীতে ইনজেকশন দেওয়া এড়িয়ে শতভাগ সফলভাবে পুডেন্ডাল স্নায়ু অবশ করা সম্ভব হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'How does the tripartite levator ani muscle maintain pelvic organ support, and what is the pathophysiology of stress urinary incontinence following obstetric trauma?',
          'লিভেটর অ্যানাই পেশীর তিনটি অংশ কীভাবে পেলভিসের অঙ্গগুলোকে ধরে রাখে এবং প্রসবের আঘাতে এই পেশী ছিঁড়ে গেলে নারীদের প্রস্রাব আটকে রাখার অক্ষমতা (ইনকন্টিনেন্স) কেন তৈরি হয়?',
        ),
        answer: l(
          'The levator ani comprises the puborectalis, pubococcygeus, and iliococcygeus muscles, forming a dynamic muscular hammock that supports the pelvic viscera against gravitational and intra-abdominal forces. The pubovaginalis fibers attach directly to the lateral vaginal wall, elevating the bladder neck and proximal urethra against the posterior pubic symphysis. Severe vaginal stretching during prolonged second-stage labor or instrument-assisted delivery causes partial denervation (pudendal neuropathy) or avulsion of the pubococcygeus. Loss of this posterior backstop allows the bladder neck to hyper-descend during coughing or sneezing, overcoming urethral closure pressure and causing involuntary urine leakage (stress incontinence).',
          'লিভেটর অ্যানাই পেশী একটি ঝুলন্ত দোলনার মতো কাজ করে পেটের সমস্ত অঙ্গকে নিচে পড়ে যাওয়া থেকে রক্ষা করে। এর কিছু তন্তু সরাসরি মূত্রথলির মুখ ও মূত্রনালিকে পিউবিক হাড়ের পেছনের সাথে শক্তভাবে চেপে ধরে রাখে। কঠিন প্রসবের সময় বা ফরসেপ ব্যবহারে এই পেশী বা স্নায়ু ছিঁড়ে গেলে মূত্রথলির মুখের বাঁধন ঢিলে হয়ে যায়; ফলে হাঁচি বা কাশির সময় পেটের চাপ বাড়লেই অনিচ্ছাকৃতভাবে প্রস্রাব ঝরে পড়ে যাকে স্ট্রেস ইনকন্টিনেন্স বলা হয়।'
        ),
      },
      {
        question: l(
          'What are the boundaries of the ischioanal (ischiorectal) fossa, and why do perianal abscesses rapidly develop into complex horseshoe fistulas across the deep postanal space?',
          'ইশ্চিওঅ্যানাল গহ্বরের সীমানা কী এবং মলদ্বারের পুঁজ কীভাবে দ্রুত এই ফাঁকা স্থান দিয়ে উভয় পাশে ছড়িয়ে জটিল হর্সশু ফিস্টুলা তৈরি করে?',
        ),
        answer: l(
          'The ischioanal fossa is a wedge-shaped space situated lateral to the anal canal, bounded: medially by the sloping levator ani and external anal sphincter; laterally by the ischial tuberosity and obturator internus muscle covered by its fascia; inferiorly by the perianal skin; and anteriorly by the posterior border of the urogenital diaphragm. It is filled with loose, poorly vascularized adipose tissue. Dorsal to the anal canal lies the deep postanal space, an anatomical cleft that communicates directly between both ischioanal fossae. Infection from an obstructed anal crypt gland traverses the sphincter into the fossa; because the adipose offers minimal resistance, pus readily crosses the deep postanal space into the contralateral fossa, creating a devastating circumferential horseshoe abscess/fistula.',
          'ইশ্চিওঅ্যানাল গহ্বরটি হলো মলদ্বারের দুই পাশে অবস্থিত চর্বিভর্তি একটি বড় ফাঁকা জায়গা। এর ভেতরের দিকে লিভেটর অ্যানাই ও মলদ্বারের স্ফিংটার পেশী এবং বাইরের দিকে শক্ত ইশ্চিয়াল হাড় থাকে। এই চর্বিতে রক্ত চলাচল কম থাকায় কোনো পুঁজ হলে তা সহজে সারে না। মলদ্বারের পেছনের ডিপ পোস্টঅ্যানাল স্পেস নামক সুরঙ্গের মাধ্যমে দুই পাশের গহ্বর সরাসরি যুক্ত থাকে; ফলে এক পাশের পুঁজ খুব দ্রুত অন্য পাশে পার হয়ে ঘোড়ার খুরের মতো দুই পাশেই ছড়িয়ে পড়ে মারাত্মক জটিল হর্সশু ফিস্টুলা সৃষ্টি করে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch23-pelvis-perineum-diagram',
    title: l('Interactive Pelvic Diaphragm, Perineal Pouches & Pudendal Conduits', 'ইন্টারেক্টিভ পেলভিক ডায়াফ্রাম, পেরিনিয়াল পাউচ ও পুডেন্ডাল স্নায়ুপথ'),
    description: l(
      'Explore the architectural cross-section and muscular floor of the human pelvis: examine the levator ani complex, the urogenital and anal triangles, superficial/deep perineal pouches, and the Alcock pudendal canal.',
      'মানব পেলভিসের পেশীবহুল মেঝে ও স্তরসমূহ পরীক্ষা করুন: লিভেটর অ্যানাই পেশী, ইউরোজেনিটাল ও অ্যানাল ট্রায়াঙ্গল, অগভীর ও গভীর পেরিনিয়াল পাউচ এবং অ্যালকক ক্যানালের ভেতরে পুডেন্ডাল স্নায়ুর গতিপথ অন্বেষণ করুন।'
    ),
    disclaimer: l(
      'Pelvic-perineal anatomical schematic: select any sector to review muscular borders, fascial compartments, and obstetric landmarks.',
      'পেলভিস-পেরিনিয়াম শারীরস্থানের রেখাচিত্র: সীমানা, ফাসিয়ার প্রকোষ্ঠ এবং প্রসূতি ল্যান্ডমার্ক দেখতে যেকোনো অঞ্চল নির্বাচন করুন।'
    ),
    svgType: 'pelvis-perineum-system',
    items: [
      {
        id: 'pelvic-diaphragm',
        label: l('Pelvic Diaphragm & Levator Ani', 'পেলভিক ডায়াফ্রাম ও লিভেটর অ্যানাই'),
        description: l(
          'Funnel-shaped muscular floor separating pelvic cavity from perineum. Formed by levator ani (puborectalis, pubococcygeus, iliococcygeus) and coccygeus muscles.',
          'পেলভিসের তলদেশের ফানেল আকৃতির পেশীবহুল মেঝে যা লিভেটর অ্যানাই (পিউবোরেকটালিস, পিউবোকক্সিজিয়াস ও ইলিয়োকক্সিজিয়াস) এবং কক্সিজিয়াস পেশী দিয়ে গঠিত।'
        ),
        details: l(
          'Puborectalis forms a dynamic U-shaped sling maintaining the 80-degree anorectal angle, essential for fecal continence. Weakness causes pelvic organ prolapse and urinary incontinence.',
          'পিউবোরেকটালিস পেশী মলদ্বারের চারপাশে U-আকৃতির ফাঁস তৈরি করে ৮০ ডিগ্রি কোণ রক্ষা করে যা মল ধরে রাখতে অপরিহার্য; এটি ছিঁড়ে গেলে জরায়ু ও মূত্রথলি নিচে নেমে আসে।'
        ),
        sectionId: 'structure',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'perineal-body-pouches',
        label: l('Perineal Body & Perineal Pouches', 'পেরিনিয়াল বডি ও পেরিনিয়াল পাউচ'),
        description: l(
          'Central fibromuscular tendon anchoring 8 muscles. Perineal membrane separates superficial pouch (erectile bodies) from deep pouch (sphincter urethrae, deep transverse perineal).',
          'আটটি পেশীর মিলনস্থল কেন্দ্রীয় তন্তুময় কেন্দ্র। পেরিনিয়াল পর্দা অগভীর পাউচ (উত্তেজক অঙ্গ ও পেশী) এবং গভীর পাউচকে (মূত্রনালির স্ফিংটার) একে অপরের থেকে পৃথক রাখে।'
        ),
        details: l(
          'Tears during delivery disrupt the perineal body. Midline or mediolateral episiotomy incision is performed during difficult second-stage delivery to prevent uncontrolled 4th-degree tears.',
          'প্রসবের সময় পেরিনিয়াল বডি ক্ষতিগ্রস্ত হয়। অনিয়ন্ত্রিত ছিঁড়ে যাওয়া এড়াতে প্রসবকালে সাবধানে মধ্য-পার্শ্বীয় এপিসিওটমি কেটে শিশুর মাথা নিরাপদে বের করা হয়।'
        ),
        sectionId: 'mechanism',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'ischioanal-fossa-alcock',
        label: l('Ischioanal Fossa & Alcock Canal', 'ইশ্চিওঅ্যানাল গহ্বর ও অ্যালকক ক্যানাল'),
        description: l(
          'Adipose-filled wedges lateral to anal canal permitting rectal distension. Lateral wall features pudendal canal of Alcock on obturator internus fascia transmitting pudendal nerve (S2–S4).',
          'মলদ্বারের দুই পাশে চর্বিভর্তি ফাঁকা স্থান। এর বাইরের দেয়ালে অ্যালকক ক্যানাল থাকে যার ভেতর দিয়ে পেরিনিয়ামের প্রধান পুডেন্ডাল স্নায়ু (S2–S4) ও রক্তনালী অতিক্রম করে।'
        ),
        details: l(
          'Pudendal nerve block is performed by transvaginally palpating the ischial spine and infiltrating the canal, providing regional anesthesia to S2–S4 for episiotomy repair.',
          'যোনিপথের ভেতর দিয়ে ইশ্চিয়াল স্পাইন স্পর্শ করে অ্যালকক ক্যানালে অ্যানেস্থেসিয়া দিয়ে পুরো পেরিনিয়াম অঞ্চল অবশ করে ব্যথাহীন প্রসব ও সেলাই সম্পন্ন করা হয়।'
        ),
        sectionId: 'integration',
        color: '#fecdd3',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'bony-pelvis-diameters',
        label: l('Bony Pelvis & Obstetric Pelvimetry', 'অস্থি পেলভিস ও প্রসূতি পরিমাপ'),
        description: l(
          'Pelvic brim separates false (greater) from true (lesser) pelvis. Obstetric conjugate (≥11 cm) represents narrowest fixed AP diameter of the inlet traversed by fetal head.',
          'পেলভিক ব্রিম উপরের ফলস পেলভিসকে নিচের ট্রু পেলভিস থেকে আলাদা করে। অবস্টেট্রিক কনজুগেট (≥১১ সেমি) হলো সবচেয়ে সংকীর্ণ পথ যা দিয়ে শিশুর মাথা স্বাভাবিকভাবে বের হয়।'
        ),
        details: l(
          'Gynecoid pelvis (round inlet, wide subpubic arch >85°) favors vaginal delivery; android pelvis (heart-shaped, narrow angle) causes deep transverse arrest requiring cesarean delivery.',
          'গাইনেকয়েড পেলভিস গোলাকার ও প্রশস্ত হওয়ায় স্বাভাবিক প্রসবে অনুকূল; কিন্তু পুরুষালি অ্যান্ড্রয়েড পেলভিস সংকীর্ণ হওয়ায় শিশুর মাথা আটকে গিয়ে সিজারিয়ান অপারেশনের প্রয়োজন হয়।'
        ),
        sectionId: 'introduction',
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
          heading: l('The Bony Pelvic Architecture and Pelvic Inlets', 'অস্থি পেলভিসের গঠন এবং ট্রু ও ফলস পেলভিস'),
          paragraphs: [
            l(
              'The human pelvis is an osseous ring connecting the mobile vertebral column to the bilateral lower extremities, composed of four bones: the paired hip (coxal) bones laterally and anteriorly, and the sacrum and coccyx posteriorly. Strong sacroiliac and sacrotuberous ligaments stabilize the ring against rotational shear forces during bipedal ambulation. The pelvis is fundamentally divided into two regions by an oblique anatomical ring known as the pelvic brim or pelvic inlet.',
              'মানুষের পেলভিস বা শ্রোণীচক্র হলো একটি মজবুত হাড়ের বলয় যা মেরুদণ্ডকে দুই পায়ের সাথে যুক্ত করে। এটি চারটি প্রধান হাড় দিয়ে গঠিত: দুই পাশে দুটি হিপ বোন এবং পেছনের স্যাক্রাম ও কক্সিক্স। হাঁটাচলার সময় শরীরের ওজন বহন করতে মজবুত স্যাক্রোইলিয়াক লিগামেন্ট এই বলয়কে অবিচল রাখে। পেলভিক ব্রিম নামক একটি তির্যক হাড়ের রিং পুরো পেলভিসকে দুটি প্রধান অঞ্চলে বিভক্ত করে: উপরের ফলস পেলভিস এবং নিচের ট্রু পেলভিস।'
            ),
            l(
              'Above the pelvic brim lies the false (greater) pelvis, bounded laterally by the flared iliac fossae, functionally forming part of the lower abdominal cavity housing the cecum, appendix, and sigmoid colon. Below the pelvic brim lies the true (lesser) pelvis, bounded by the pubis, ischium, sacrum, and pelvic diaphragm. The true pelvis contains the pelvic viscera (urinary bladder, internal reproductive organs, and rectum) and forms the fixed bony birth canal through which the fetus must descend during parturition.',
              'পেলভিক ব্রিমের ওপরে থাকে ফলস পেলভিস যা দুই পাশের ইলিয়াক হাড়ের ডানা দিয়ে ঘেরা এবং পেটের নিচের অংশের অঙ্গগুলোকে (যেমন অ্যাপেন্ডিক্স ও সিকাম) ধারণ করে। ব্রিমের নিচের অংশটি হলো ট্রু পেলভিস যা সামনে পিউবিস, পেছনে স্যাক্রাম এবং নিচে মাংসপেশীর মেঝে দিয়ে ঘেরা থাকে। এই ট্রু পেলভিসের ভেতরেই মূত্রথলি, জরায়ু ও মলাশয় সুরক্ষিত থাকে এবং প্রসবের সময় শিশুর মাথা এই হাড়ের খালের মধ্য দিয়েই বাইরে নেমে আসে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Pelvic Diaphragm: Muscular Architecture and Continence', 'পেলভিক ডায়াফ্রাম: পেশীবহুল মেঝে এবং মলমূত্র নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'The pelvic cavity is closed inferiorly by a dynamic, funnel-shaped muscular floor termed the pelvic diaphragm, which separates the pelvic cavity above from the perineum below. It is composed of the paired levator ani muscles and the small posterior ischiococcygeus (coccygeus) muscles. The levator ani arises from the posterior surface of the pubis, the spine of the ischium, and a thickened fascia band termed the tendinous arch of the levator ani (ATLA) spanning the obturator internus muscle.',
              'পেলভিসের তলদেশটি একটি নমনীয়, ফানেল আকৃতির পেশীবহুল মেঝে দ্বারা বন্ধ থাকে যাকে পেলভিক ডায়াফ্রাম বলা হয়; এটি ওপরের পেলভিসকে নিচের পেরিনিয়াম থেকে সম্পূর্ণ আলাদা রাখে। এটি মূলত শক্তিশালী লিভেটর অ্যানাই পেশী এবং পেছনের কক্সিজিয়াস পেশী দিয়ে গঠিত। লিভেটর অ্যানাই পেশীটি পিউবিক হাড়, ইশ্চিয়াল স্পাইন এবং অপটুরেটর পেশীর ওপর বিস্তৃত একটি শক্ত টেনডন খিলান থেকে উৎপন্ন হয়ে পেছনের দিকে প্রসারিত হয়।'
            ),
            l(
              'The levator ani is subdivided into three distinct anatomical components: (1) puborectalis, forming a muscular U-shaped sling around the anorectal junction that pulls it forward to maintain an 80-degree anorectal angle essential for fecal continence; (2) pubococcygeus, passing around the urogenital hiatus to insert into the anococcygeal ligament; and (3) iliococcygeus, providing a broad posterolateral sheet supporting the pelvic organs against gravitational forces and elevated intra-abdominal pressures.',
              'লিভেটর অ্যানাই পেশী তিনটি ভাগে বিভক্ত: (১) পিউবোরেকটালিস, যা মলাশয়ের চারপাশে U-আকৃতির ফাঁস তৈরি করে সামনের দিকে টেনে রাখে এবং ৮০ ডিগ্রি কোণ বজায় রেখে মল নিয়ন্ত্রণ নিশ্চিত করে; (২) পিউবোকক্সিজিয়াস, যা মূত্রনালি ও যোনিপথের চারপাশ ঘিরে পেছনের লিগামেন্টে মেশে; এবং (৩) ইলিয়োকক্সিজিয়াস, যা একটি চওড়া পর্দার মতো কাজ করে হাঁচি, কাশি বা ভারী ওজন তোলার সময় পেটের সমস্ত অঙ্গকে নিচে পড়ে যাওয়া থেকে শক্তভাবে ধরে রাখে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Perineum: Urogenital and Anal Triangles and Pouches', 'পেরিনিয়াম: ইউরোজেনিটাল ও অ্যানাল ট্রায়াঙ্গল এবং পাউচসমূহ'),
          paragraphs: [
            l(
              'The perineum is the shallow diamond-shaped anatomical space situated inferior to the pelvic diaphragm, extending from the pubic symphysis anteriorly to the coccyx posteriorly, bounded laterally by the ischial tuberosities. A theoretical transverse line drawn between the two ischial tuberosities bisects the perineum into two distinct triangles: the anterior urogenital (UG) triangle (housing the external genitalia and urethra) and the posterior anal triangle (containing the anal canal and ischioanal fossae).',
              'পেরিনিয়াম হলো পেলভিক ডায়াফ্রামের নিচে অবস্থিত একটি অগভীর হীরকাকৃতির অঞ্চল যা সামনে পিউবিক হাড়, পেছনে মেরুদণ্ডের শেষ প্রান্ত কক্সিক্স এবং দুই পাশে বসার হাড় ইশ্চিয়াল টিউবারোসিটি দিয়ে সীমাবদ্ধ। দুই পাশের ইশ্চিয়াল হাড়ের মধ্যে একটি কাল্পনিক আনুভূমিক রেখা টানলে এটি দুটি ত্রিভুজে ভাগ হয়: সামনের ইউরোজেনিটাল ট্রায়াঙ্গল (যেখানে মূত্রনালি ও প্রজনন অঙ্গ থাকে) এবং পেছনের অ্যানাল ট্রায়াঙ্গল (যেখানে মলদ্বার ও চর্বিভর্তি গহ্বর থাকে)।'
            ),
            l(
              'Within the urogenital triangle, the tough triangular fibrous perineal membrane partitions the space into two compartments: the superficial perineal pouch (lying between the perineal membrane and Colles superficial perineal fascia, containing the erectile tissues of the clitoris/penis, bulbospongiosus, and ischiocavernosus muscles) and the deep perineal pouch (situated deep to the membrane, enclosing the external urethral sphincter, deep transverse perineal muscle, and the membranous urethra).',
              'ইউরোজেনিটাল ট্রায়াঙ্গলের ভেতর শক্ত পেরিনিয়াল পর্দা এই স্থানটিকে দুটি প্রকোষ্ঠে ভাগ করে: অগভীর পেরিনিয়াল পাউচ (যেখানে লিঙ্গ বা ভগাঙ্কুরের রক্তনালীপূর্ণ উত্তেজিত অঙ্গ এবং বাল্বোস্পঞ্জিওসাস ও ইশ্চিওক্যাভারনোসাস পেশী থাকে) এবং গভীর পেরিনিয়াল পাউচ (যা পর্দার পেছনে অবস্থিত এবং মূত্রনালিকে চেপে প্রস্রাব আটকে রাখার ঐচ্ছিক এক্সটারনাল স্ফিংটার পেশী ধারণ করে)।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Ischioanal Fossa and the Pudendal Canal of Alcock', 'ইশ্চিওঅ্যানাল গহ্বর এবং অ্যালককের পুডেন্ডাল ক্যানাল'),
          paragraphs: [
            l(
              'Flanking the anal canal within the posterior anal triangle are the bilateral ischioanal (ischiorectal) fossae. These expansive, wedge-shaped spaces are packed with resilient adipose tissue and are traversed by delicate fibrous septa. This compliant fat pad allows the anal canal to expand comfortably during the passage of solid fecal boluses without tearing surrounding structures, while allowing the pelvic diaphragm to descend during downward expulsive straining.',
              'পেছনের অ্যানাল ট্রায়াঙ্গলে মলদ্বারের উভয় পাশে দুটি বড় কীলকাকার ফাঁকা স্থান থাকে যাদের ইশ্চিওঅ্যানাল গহ্বর বলা হয়। এই গহ্বরগুলো নরম চর্বি দ্বারা পূর্ণ থাকে যা মলত্যাগের সময় কোনো বাধা ছাড়াই মলদ্বারকে প্রসারিত হতে জায়গা করে দেয় এবং মলমূত্র ত্যাগের সময় বা সন্তান প্রসবের সময় পেলভিক ডায়াফ্রামকে নির্বিঘ্নে নিচের দিকে নেমে আসার নমনীয়তা প্রদান করে।'
            ),
            l(
              'Running along the lateral wall of each ischioanal fossa—embedded within a split in the fascia of the obturator internus muscle—is the pudendal canal of Alcock. This canal conducts the pudendal nerve (derived from the ventral rami of spinal nerves S2, S3, and S4) and the internal pudendal artery and vein. As they traverse the canal, they emit the inferior rectal nerve and vessels to supply the external anal sphincter and perianal skin, before continuing into the urogenital triangle as perineal and dorsal genital nerves.',
              'প্রতিটি ইশ্চিওঅ্যানাল গহ্বরের বাইরের দেয়ালে অপটুরেটর ইন্টারনাস পেশীর পর্দার খাঁজে অ্যালককের পুডেন্ডাল ক্যানাল অবস্থিত। এই সুরঙ্গের ভেতর দিয়ে মেরুদণ্ডের S2, S3 ও S4 স্নায়ু থেকে তৈরি হওয়া প্রধান পুডেন্ডাল স্নায়ু এবং রক্তনালী চলাচল করে। এই স্নায়ুটি মলদ্বারের স্ফিংটার পেশী, পেরিনিয়ামের ত্বক এবং প্রজনন অঙ্গের সমস্ত সংবেদনশীল অনুভূতি ও নড়াচড়া পরিচালনা করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Obstetrics: Episiotomy, Tears, and Pudendal Nerve Block', 'ক্লিনিক্যাল প্রসূতিবিদ্যা: এপিসিওটমি, টিয়ার ও পুডেন্ডাল নার্ভ ব্লক'),
          paragraphs: [
            l(
              'At the junction of the urogenital and anal triangles lies the perineal body (central tendon of the perineum), an essential fibromuscular mass where eight muscles converge. During vaginal delivery, extreme stretching by the descending fetal head can severely lacerate this central anchor. Obstetricians perform a mediolateral episiotomy (incising through the posterior vaginal wall, bulbospongiosus, and superficial transverse perineal muscle at a 45-degree angle from the posterior fourchette) to enlarge the introitus while averting midline 4th-degree anal sphincter tears.',
              'ইউরোজেনিটাল ও অ্যানাল ট্রায়াঙ্গলের সংযোগস্থলে পেরিনিয়াল বডি নামক একটি অত্যন্ত গুরুত্বপূর্ণ মাংসপেশীর কেন্দ্র থাকে যেখানে আটটি পেশী মিলিত হয়। স্বাভাবিক প্রসবের সময় শিশুর মাথা বের হওয়ার চাপে এটি ছিঁড়ে যাওয়ার তীব্র ঝুঁকি থাকে। মলদ্বারের স্ফিংটার যাতে ছিঁড়ে না যায় সেজন্য ডাক্তাররা ৪৫ ডিগ্রি কোণে একপাশে সাবধানে মিডিয়োল্যাটারাল এপিসিওটমি কেটে যোনিপথের মুখ বড় করেন যাতে শিশুর মাথা নিরাপদে বের হতে পারে।'
            ),
            l(
              'For pain relief during instrumental delivery or episiotomy repair, a transvaginal pudendal nerve block is administered. Guided by an examining finger inside the vagina, the clinician palpates the sharp bony landmark of the ischial spine and the sacrospinous ligament. A long guarded needle (Iowa trumpet) is passed through the ligament into the pudendal canal of Alcock, delivering local anesthetic around the nerve to produce profound S2–S4 perineal analgesia while preserving uterine contractions.',
              'প্রসবের সেলাই বা ব্যথাহীন প্রসবের জন্য যোনিপথের মাধ্যমে পুডেন্ডাল নার্ভ ব্লক দেওয়া হয়। ডাক্তার যোনিপথের ভেতর আঙুল দিয়ে ইশ্চিয়াল স্পাইন নামক হাড়ের খাঁজটি স্পর্শ করেন এবং এর পেছনে থাকা স্যাক্রোস্পাইনাস লিগামেন্ট ভেদ করে একটি সুরক্ষিত সুঁই দিয়ে অ্যালকক ক্যানালে অ্যানেস্থেসিয়া দেন; এতে জরায়ুর স্বাভাবিক সংকোচন অক্ষত রেখেই পুরো পেরিনিয়াম অঞ্চল সম্পূর্ণ ব্যথামুক্ত হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary & Pelvis Core Principles', 'সারসংক্ষেপ ও পেলভিস শারীরস্থানের মূল সূত্রসমূহ'),
          paragraphs: [
            l(
              'The regional anatomy of the pelvis and perineum exemplifies exquisite structural engineering reconciling structural weight-bearing with visceral continence and the physiological demands of reproduction and parturition. The levator ani complex provides a dynamic floor supporting pelvic viscera while maintaining active fecal and urinary sphincteric barriers.',
              'পেলভিস ও পেরিনিয়ামের আঞ্চলিক শারীরস্থান মানুষের সোজা হয়ে দাঁড়িয়ে শরীরের সম্পূর্ণ ওজন বহন করার সাথে সাথে মল-মূত্র নিয়ন্ত্রণ এবং বংশবৃদ্ধির জটিল শারীরবৃত্তীয় প্রক্রিয়ার এক অনন্য ভারসাম্য প্রকাশ করে। লিভেটর অ্যানাই পেশী সমস্ত অভ্যন্তরীণ অঙ্গকে নিচে পড়ে যাওয়া থেকে রক্ষা করার পাশাপাশি মলমূত্র আটকে রাখার নির্ভরযোগ্য কপাটিকা হিসেবে কাজ করে।'
            ),
            l(
              'Clinical mastery of pelvic landmarks—including the ischial spine, the obstetrical conjugate, the perineal body, and the contents of the pudendal canal—empowers clinicians to safeguard maternal perineal integrity, manage obstetric deliveries, and treat pelvic floor prolapse effectively.',
              'ইশ্চিয়াল স্পাইন, অবস্টেট্রিক কনজুগেট, পেরিনিয়াল বডি এবং পুডেন্ডাল ক্যানালের সঠিক শারীরস্থানিক জ্ঞান চিকিৎসকদের প্রসবকালীন জটিলতা রোধ করতে, মায়ের পেরিনিয়াম সুরক্ষিত রাখতে এবং প্রোল্যাপ্সের মতো মারাত্মক রোগগুলো সফলভাবে নিরাময় করতে সক্ষম করে।'
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
          heading: l('Obstetrical Pelvimetry: Diameters and Conjugates of the Birth Canal', 'প্রসূতি পেলভিমেট্রি: প্রসব খালের ব্যাস এবং কনজুগেটসমূহ'),
          paragraphs: [
            l(
              'The true pelvis forms the rigid osseous birth canal, whose spatial dimensions determine the feasibility of vaginal cephalic delivery. The pelvic inlet features three cardinal anteroposterior diameters: (1) the anatomic conjugate (sacral promontory to superior pubic border, ~11.5 cm); (2) the true obstetric conjugate (promontory to the posterior bulge of the pubic symphysis, ~11.0 cm), which represents the narrowest fixed dimension through which the fetal biparietal diameter (9.5 cm) must navigate; and (3) the diagonal conjugate (~12.5 cm).',
              'ট্রু পেলভিস হলো একটি শক্ত হাড়ের প্রসব খাল যার ভেতরের পরিমাপ স্বাভাবিক প্রসবের সম্ভাবনা নির্ধারণ করে। এর প্রবেশদ্বারে তিনটি প্রধান সম্মুখ-পশ্চাৎ ব্যাস থাকে: (১) অ্যানাটমিক কনজুগেট (স্যাক্রাম থেকে পিউবিসের ওপরের সীমানা, সাড়ে ১১ সেমি); (২) অবস্টেট্রিক কনজুগেট (স্যাক্রাম থেকে পিউবিসের সবচেয়ে ভেতরের উঁচু স্থান, ১১ সেমি), যা শিশুর সাড়ে নয় সেন্টিমিটার মাথার জন্য সবচেয়ে সংকীর্ণ ও নির্দিষ্ট পথ; এবং (৩) ডায়াগোনাল কনজুগেট (সাড়ে ১২ সেমি)।'
            ),
            l(
              'Because the obstetric conjugate cannot be measured directly on clinical examination without radiometry, it is estimated by digital palpation of the diagonal conjugate (from the inferior margin of the pubic symphysis to the sacral promontory) and subtracting 1.5 to 2.0 cm. In the Caldwell-Moloy classification, four morphological pelvic types exist: gynecoid (ideal round inlet, wide subpubic arch >85°), android (heart-shaped inlet, narrow subpubic arch, predisposing to deep transverse arrest), anthropoid (elongated oval inlet), and platypelloid (transversely flattened inlet).',
              'যেহেতু অবস্টেট্রিক কনজুগেট সরাসরি স্কেল দিয়ে মাপা যায় না, তাই চিকিৎসকরা আঙুল দিয়ে ডায়াগোনাল কনজুগেট মেপে সেখান থেকে দেড় থেকে দুই সেন্টিমিটার বাদ দিয়ে এটি হিসাব করেন। ক্যাল্ডওয়েল-মলোয় শ্রেণিবিভাগ অনুসারে পেলভিস চার ধরণের হয়: গাইনেকয়েড (গোলাকার ও আদর্শ যা স্বাভাবিক প্রসবের জন্য সেরা), অ্যান্ড্রয়েড (পুরুষালি হার্ট-আকৃতির যা শিশুর মাথা আটকে সিজারিয়ানের ঝুঁকি বাড়ায়), অ্যানথ্রোপয়েড এবং প্লাটিপেলয়েড।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Levator Ani Subdivisions and Urogenital Hiatus Biomechanics', 'লিভেটর অ্যানাই পেশীর অংশসমূহ এবং ইউরোজেনিটাল হায়াটাস'),
          paragraphs: [
            l(
              'The levator ani muscle is functionally partitioned into three distinct vector systems: puborectalis, pubococcygeus, and iliococcygeus. The puborectalis originates from the posterior surface of the superior pubic rami on either side of the midline and forms a continuous, active muscular sling hugging the anorectal junction. Its tonic contraction bends the gastrointestinal axis forward, establishing an acute 80-degree anorectal angle that acts as an anatomical flap-valve preventing fecal descent during resting conditions.',
              'লিভেটর অ্যানাই পেশী মূলত তিনটি সুনির্দিষ্ট পেশীবহুল ভেক্টরে কাজ করে: পিউবোরেকটালিস, পিউবোকক্সিজিয়াস এবং ইলিয়োকক্সিজিয়াস। পিউবোরেকটালিস পেশীটি পিউবিক হাড় থেকে বের হয়ে মলাশয় ও মলদ্বারের সংযোগস্থলকে একটি শক্ত বন্ধনীর মতো জড়িয়ে ধরে থাকে। এর অনবরত টান মলাশয়কে সামনের দিকে বাঁকিয়ে একটি ৮০ ডিগ্রি কোণ তৈরি করে রাখে যা একটি কপাটিকার মতো কাজ করে না চাইলে মলকে নিচে নামতে সম্পূর্ণ বাধা দেয়।'
            ),
            l(
              'Medially, the paired levator ani bellies fail to meet anteriorly, leaving a U-shaped gap termed the urogenital hiatus, which transmits the urethra (in males) and the urethra and vagina (in females). Under conditions of elevated intra-abdominal pressure, the levator ani contracts reflexively, compressing the vagina and urethra against the pubic bone to close the hiatus. Avulsion of the puborectalis muscle from the pubic ramus during rotational forceps delivery leads to irreversible widening of the urogenital hiatus, causing severe pelvic organ prolapse.',
              'মাঝখানের অংশে দুই পাশের লিভেটর অ্যানাই পেশী পুরোপুরি না মিলে একটি U-আকৃতির ফাঁকা পথ তৈরি করে যাকে ইউরোজেনিটাল হায়াটাস বলা হয় যা দিয়ে মূত্রনালি ও যোনিপথ বাইরে বের হয়। পেটে চাপ বাড়লে এই পেশীগুলো সংকুচিত হয়ে মূত্রনালিকে পিউবিক হাড়ের সাথে চেপে ধরে মুখ বন্ধ করে দেয়। কিন্তু প্রসবের সময় ফরসেপের টানে এই পেশী হাড় থেকে ছিঁড়ে গেলে ফাঁকা পথটি অস্বাভাবিক বড় হয়ে যায় যার ফলে জরায়ু ও মূত্রথলি নিচে নেমে এসে মারাত্মক প্রোল্যাপ্স রোগ তৈরি হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Fascial Stratification: Deep versus Superficial Perineal Pouches', 'ফাসিয়ার স্তরবিন্যাস: গভীর বনাম অগভীর পেরিনিয়াল পাউচ'),
          paragraphs: [
            l(
              'The urogenital triangle is structured around the fibrous perineal membrane (inferior fascia of the urogenital diaphragm), an inelastic sheet spanning the ischiopubic rami. The superficial perineal pouch lies inferior to the membrane and superior to Colles superficial perineal fascia. In males, it contains the root of the penis (corpora cavernosa crura and corpus spongiosum bulb), ischiocavernosus and bulbospongiosus muscles, superficial transverse perineal muscles, and posterior scrotal vessels/nerves.',
              'ইউরোজেনিটাল ট্রায়াঙ্গলটি একটি শক্ত তন্তুময় পেরিনিয়াল পর্দাকে কেন্দ্র করে গড়ে উঠেছে যা দুই পাশের হাড়ের মাঝে টানটান থাকে। এই পর্দার নিচে থাকে অগভীর পেরিনিয়াল পাউচ। পুরুষদের ক্ষেত্রে এতে লিঙ্গের মূল অংশ (করপোরা ক্যাভারনোসা ও বাল্ব), বাল্বোস্পঞ্জিওসাস ও ইশ্চিওক্যাভারনোসাস পেশী এবং অণ্ডকোষের পেছনের রক্তনালী ও স্নায়ুগুলো অবস্থান করে যা যৌন উত্তেজনার সময় রক্তে পূর্ণ হয়ে দৃঢ়তা প্রদান করে।'
            ),
            l(
              'In females, the superficial pouch houses the crura of the clitoris, the bulbs of the vestibule, greater vestibular glands of Bartholin, and homologous perineal muscles. The deep perineal pouch lies immediately superior to the perineal membrane, containing the external urethral sphincter (sphincter urethrae), the deep transverse perineal muscle, the compressor urethrae and urethrovaginal sphincter (in females), the bulbourethral glands of Cowper (in males), and the internal pudendal vessels giving off dorsal genital branches.',
              'নারীদের ক্ষেত্রে অগভীর পাউচে ভগাঙ্কুরের মূল, ভেস্টিবুলের বাল্ব, বার্থোলিনের পিচ্ছিল রস নিঃসরণকারী গ্রন্থি এবং সংশ্লিষ্ট পেশীসমূহ থাকে। আর পেরিনিয়াল পর্দার ঠিক ওপরে অবস্থিত গভীর পেরিনিয়াল পাউচে মূত্রনালিকে চেপে প্রস্রাব আটকে রাখার প্রধান বাহ্যিক স্ফিংটার পেশী, কাউপারের বাল্বোইউরেথ্রাল গ্রন্থি এবং অভ্যন্তরীণ পুডেন্ডাল ধমনীর প্রধান শাখাসমূহ সুরক্ষিত থাকে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Autonomic Innervation: Pelvic Splanchnic Nerves and Hypogastric Plexuses', 'স্বয়ংক্রিয় স্নায়ুতন্ত্র: পেলভিক স্প্ল্যাঙ্কনিক স্নায়ু ও হাইপোগ্যাস্ট্রিক প্লেক্সাস'),
          paragraphs: [
            l(
              'Autonomic control of pelvic visceral function is mediated by a complex convergence of sympathetic and parasympathetic nerves. Sympathetic fibers arise from spinal cord segments T10 through L2, descending via the lumbar splanchnic nerves into the superior hypogastric plexus (situated at the aortic bifurcation, L5 level). This bifurcates into the bilateral hypogastric nerves, which descend along the lateral pelvic wall to join the inferior hypogastric (pelvic) plexus.',
              'পেলভিসের অভ্যন্তরীণ অঙ্গগুলোর স্বয়ংক্রিয় নিয়ন্ত্রণ সিমপ্যাথেটিক এবং প্যারাসিমপ্যাথেটিক স্নায়ুর যৌথ সমন্বয়ে পরিচালিত হয়। সিমপ্যাথেটিক স্নায়ুতন্তু মেরুদণ্ডের T10 থেকে L2 সেগমেন্ট থেকে উৎপন্ন হয়ে মহাধমনীর বিভাজনস্থলে সুপিরিয়র হাইপোগ্যাস্ট্রিক প্লেক্সাস তৈরি করে। এখান থেকে স্নায়ুগুলো দুই ভাগে ভাগ হয়ে পেলভিসের পাশের দেয়াল দিয়ে নেমে ইনফিরিয়র হাইপোগ্যাস্ট্রিক প্লেক্সাস নামক প্রধান স্নায়ুজালিকায় মিলিত হয়।'
            ),
            l(
              'Parasympathetic fibers arise from the ventral rami of sacral spinal nerves S2, S3, and S4 as preganglionic pelvic splanchnic nerves (nervi erigentes), joining the inferior hypogastric plexus. Parasympathetic stimulation mediates bladder detrusor contraction for micturition, rectal peristalsis for defecation, and arterial vasodilation producing penile/clitoral tumescence (erection: "Point"). Sympathetics mediate internal urethral sphincter closure and peristaltic emission/ejaculation ("Shoot").',
              'প্যারাসিমপ্যাথেটিক স্নায়ু স্যাক্রাল ২, ৩ ও ৪ নং স্নায়ু থেকে পেলভিক স্প্ল্যাঙ্কনিক স্নায়ু (নার্ভি ইরিজেন্টেস) হিসেবে বের হয়ে এই জালিকায় যোগ দেয়। প্যারাসিমপ্যাথেটিক স্নায়ু মূত্রথলিকে সংকুচিত করে প্রস্রাব করায়, মলাশয়ের নড়াচড়া বাড়িয়ে মলত্যাগ করায় এবং যৌনাঙ্গে রক্তপ্রবাহ বাড়িয়ে উত্থান ঘটায় ("পয়েন্ট")। বিপরীতভাবে সিমপ্যাথেটিক স্নায়ু বীর্যপাত ঘটায় এবং প্রস্রাবের মুখ বন্ধ রাখে ("শুট")।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Iatrogenic Nerve Injuries in Pelvic Surgery and Organ Prolapse', 'পেলভিক সার্জারিতে স্নায়ু ক্ষত এবং অঙ্গের প্রোল্যাপ্স'),
          paragraphs: [
            l(
              'Surgical dissection along the lateral pelvic sidewalls during radical prostatectomy, total mesorectal excision (TME) for rectal cancer, or abdominal hysterectomy places the cavernous nerves of the inferior hypogastric plexus at extreme risk. Because these unmyelinated parasympathetic fibers course in the neurovascular bundle of Walsh immediately posterolateral to the prostatic capsule and anterolateral to the rectal fascia, accidental thermal injury or mechanical traction leads to permanent postoperative erectile dysfunction and urinary incontinence.',
              'প্রোস্টেট ক্যান্সার অপারেশন, মলাশয়ের ক্যান্সারের জন্য রেকটাম অপসারণ কিংবা জরায়ু কাটার সময় পেলভিসের পাশের দেয়াল ঘেঁষে যাওয়া ক্ষুদ্র ক্যাভারনাস স্নায়ুগুলো মারাত্মক ঝুঁকির মুখে পড়ে। যেহেতু এই সূক্ষ্ম স্নায়ুগুলো প্রোস্টেট ও মলাশয়ের আবরণের ঠিক পাশ দিয়েই গমন করে, তাই অপারেশনের সময় সামান্য তাপ বা অতিরিক্ত টানের কারণে এগুলো ছিঁড়ে গেলে রোগী সারাজীবনের জন্য পুরুষত্বহীন হয়ে পড়ে এবং প্রস্রাবের নিয়ন্ত্রণ হারিয়ে ফেলে।'
            ),
            l(
              'Pelvic floor relaxation (pelvic organ prolapse) represents a progressive failure of muscular and endopelvic fascial support: stretching or attenuation of the pubocervical fascia permits anterior vaginal wall herniation of the bladder (cystocele), whereas failure of the rectovaginal septum allows posterior herniation of the rectum (rectocele). Loss of the cardinal (Mackenrodt) and uterosacral ligament complex results in apical uterine prolapse, requiring anatomical reconstructive sacrocolpopexy.',
              'পেলভিক মেঝের শিথিলতা বা প্রোল্যাপ্স হলো পেশী ও ফাসিয়া দুর্বল হয়ে অঙ্গ নিচে নেমে আসার রোগ: সামনের ফাসিয়া আলগা হলে মূত্রথলি যোনিপথের ভেতরে নেমে আসে (সিস্টোসিল), পেছনের পর্দা ছিঁড়লে মলাশয় ফুলে ওঠে (রেকটোসিল), এবং জরায়ুকে ধরে রাখা কার্ডিনাল ও ইউটেরোস্যাক্রাল লিগামেন্ট ঢিলে হয়ে গেলে পুরো জরায়ু বাইরে বের হয়ে আসে যা সার্জারির মাধ্যমে স্যাক্রামের সাথে পুনরায় বেঁধে দিয়ে ঠিক করতে হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Functional Architecture of Pelvis and Perineum', 'উচ্চতর সংশ্লেষ: পেলভিস ও পেরিনিয়ামের কার্যকরী শারীরস্থান'),
          paragraphs: [
            l(
              'Rigorous mastery of the pelvis and perineum requires synthesizing the osseous rigidity of the pelvic ring with the dynamic compliance of the muscular pelvic diaphragm, the compartmentalized stratification of the perineal pouches, and the complex autonomic innervation regulating continence, micturition, and sexual reflexes.',
              'পেলভিস ও পেরিনিয়ামের উচ্চতর শারীরস্থান আয়ত্ত করার জন্য হাড়ের তৈরি অনমনীয় পেলভিক বলয়, মাংসপেশীর তৈরি নমনীয় পেলভিক ডায়াফ্রাম, পেরিনিয়াল পাউচের স্তরবিন্যাস এবং মল-মূত্র নিয়ন্ত্রণ ও যৌন ক্রিয়া পরিচালনাকারী স্বয়ংক্রিয় স্নায়ুসংযোগের নিখুঁত সমন্বয় উপলব্ধি করা অপরিহার্য।'
            ),
            l(
              'In clinical practice, protecting anatomical landmarks—such as the ischial spine during obstetric anesthesia, the neurovascular bundle of Walsh during pelvic oncological resections, and the perineal body during vaginal deliveries—ensures preservation of vital visceral continence, sexual function, and maternal pelvic floor health.',
              'চিকিৎসাবিজ্ঞানে প্রসবকালীন অ্যানেস্থেসিয়ার সময় ইশ্চিয়াল স্পাইন, ক্যান্সার অপারেশনের সময় ওয়ালশের নার্ভ বান্ডিল এবং স্বাভাবিক প্রসবের সময় পেরিনিয়াল বডিকে অক্ষত রাখার ওপরই রোগীর আজীবন মলমূত্র নিয়ন্ত্রণ, স্বাভাবিক বৈবাহিক জীবন এবং সুস্থভাবে বেঁচে থাকা নির্ভর করে।'
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
          heading: l('Pelvic Fascia Spaces and the Retroperitoneal Lymphatic Basins', 'পেলভিক ফাসিয়ার ফাঁকা স্থানসমূহ এবং লিম্ফ নোড ড্রেনেজ বেসিন'),
          paragraphs: [
            l(
              'The endopelvic fascia is differentiated into parietal layers lining the pelvic sidewalls and visceral layers enveloping organs. Between these layers lie expansive potential surgical spaces: the retropubic space of Retzius (anterior to the bladder, bounded by pubic bones and transversalis fascia), the rectovaginal space (in females) or rectovesical space (in males), and the retrorectal (presacral) space bounded by the presacral fascia posteriorly and mesorectal fascia anteriorly.',
              'এন্ডোপেলভিক ফাসিয়া পেলভিসের দেয়াল এবং ভেতরের অঙ্গগুলোকে পৃথক করে রাখে। এদের মাঝে গুরুত্বপূর্ণ ফাঁকা স্থান বা স্পেস থাকে: মূত্রথলির সামনে অবস্থিত রেটজিয়াসের রেট্রোপিউবিক স্পেস, মলাশয় ও যোনির মধ্যবর্তী স্পেস এবং স্যাক্রামের সামনে অবস্থিত প্রিস্যাক্রাল স্পেস। এই প্রাকৃতিক স্থানগুলো ব্যবহার করে রক্তপাতহীনভাবে খুব সহজে অপারেশন সম্পন্ন করা যায়।'
            ),
            l(
              'Lymphatic drainage from pelvic viscera follows arterial pathways into regional nodal basins: the internal iliac nodes receive lymph from pelvic viscera and the deep perineum; external iliac nodes drain the bladder anteriorly and lower abdominal wall; common iliac nodes serve as a second-tier conduit; and superficial inguinal nodes receive lymph from the external genitalia (vulva, scrotum, penis skin, and lower third of the anal canal below the pectinate line).',
              'পেলভিসের অঙ্গগুলো থেকে লসিকা তরল ধমনীর গতিপথ ধরে বিভিন্ন নোডে পৌঁছায়: ইন্টারনাল ইলিয়াক নোড ভেতরের সমস্ত অঙ্গ ও গভীর পেরিনিয়াম থেকে লসিকা নেয়; এক্সটারনাল ইলিয়াক নোড মূত্রথলি থেকে নেয়; কমন ইলিয়াক নোড এগুলোকে ওপরে পাঠায়; আর বাইরের চামড়া, অণ্ডকোষ ও মলদ্বারের নিচের অংশের লসিকা কুঁচকির সুপারফিসিয়াল ইনগুইনাল নোডে জমা হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Pectinate Line Pathology and Anal Fissure Biomechanics', 'পেক্টিনেট রেখা এবং অ্যানাল ফিশারের আণবিক বলবিদ্যা'),
          paragraphs: [
            l(
              'The pectinate (dentate) line marks the embryological transition between the endoderm-derived hindgut above and the ectoderm-derived proctodeum below. Superior to the pectinate line, the mucosa is lined by simple columnar epithelium, drains to the portal venous system (superior rectal vein) and internal iliac lymph nodes, and receives visceral autonomic sensation (insensitive to sharp pain, sensitive only to stretch). Pathologies here manifest as painless internal hemorrhoids.',
              'পেক্টিনেট রেখা হলো মলদ্বারের এমন একটি ঐতিহাসিক সীমারেখা যা ভেতরের ভ্রূণীয় এন্ডোডার্ম এবং বাইরের এক্টোডার্মকে আলাদা করে। এই রেখার ওপরের অংশ স্তম্ভাকার কোষ দিয়ে তৈরি, এর রক্ত পোর্টাল শিরায় যায় এবং এটি কেবল চাপের অনুভূতি বোঝে কিন্তু ধারালো কোনো ব্যথা পায় না; ফলে এই রেখার ওপরে হওয়া পাইলস বা অর্শ্বরোগে রক্ত পড়লেও রোগী কোনো ব্যথা অনুভব করে না।'
            ),
            l(
              'Inferior to the pectinate line, the anal canal is lined by stratified squamous epithelium, drains to the systemic venous system (inferior rectal vein to internal iliac) and superficial inguinal lymph nodes, and is supplied by somatic branches of the pudendal nerve (inferior rectal nerve, exquisitely sensitive to sharp pain). Passage of hard stool tears this anoderm (typically at the posterior midline due to relative ischemia), producing excruciating anal fissures whose hypertonic sphincter spasm perpetuates chronic non-healing ulcers.',
              'বিপরীতভাবে পেক্টিনেট রেখার নিচের অংশ সাধারণ চামড়ার মতো স্তরযুক্ত কোষ দিয়ে গঠিত, এর রক্ত সাধারণ শিরায় যায় এবং পুডেন্ডাল স্নায়ুর কারণে এটি অত্যন্ত তীব্র ব্যথা অনুভব করে। শক্ত মল ত্যাগ করার সময় এই চামড়া ছিঁড়ে গেলে তীব্র যন্ত্রণাদায়ক অ্যানাল ফিশার তৈরি হয়; ব্যথার কারণে মলদ্বারের পেশী আরও শক্ত হয়ে রক্ত চলাচল বন্ধ করে দেয় ফলে ক্ষতটি সহজে শুকায় না এবং দীর্ঘস্থায়ী ক্ষতে রূপ নেয়।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-part schematic of the human pelvis and perineum: the bony pelvic conjugates, the levator ani pelvic diaphragm, the urogenital and anal triangles, and the pudendal canal.',
      'মানব পেলভিস ও পেরিনিয়ামের ৪টি মূল অংশ: অস্থি পেলভিসের অবস্টেট্রিক ব্যাস, লিভেটর অ্যানাই পেলভিক মেঝে, ইউরোজেনিটাল ও অ্যানাল ট্রায়াঙ্গল এবং পুডেন্ডাল ক্যানাল।'
    ),
    steps: [
      l(
        '1. The bony pelvic ring defines true and false pelvic spaces, establishing the critical obstetric conjugate for delivery.',
        '১. অস্থি পেলভিস ট্রু ও ফলস পেলভিসের সীমানা নির্ধারণ করে প্রসবের প্রধান অবস্টেট্রিক কনজুগেট তৈরি করে।'
      ),
      l(
        '2. The levator ani complex (puborectalis sling) forms a dynamic muscular floor maintaining the 80-degree anorectal angle.',
        '২. লিভেটর অ্যানাই পেশীর ফাঁস মলাশয়কে সামনের দিকে টেনে ৮০ ডিগ্রি কোণ রক্ষা করে মল নিয়ন্ত্রণ বজায় রাখে।'
      ),
      l(
        '3. The perineum is partitioned into urogenital and anal triangles, housing superficial and deep perineal pouches.',
        '৩. পেরিনিয়াম ইউরোজেনিটাল ও অ্যানাল ট্রায়াঙ্গলে বিভক্ত হয়ে অগভীর ও গভীর পাউচের মধ্যে অঙ্গগুলোকে ধারণ করে।'
      ),
      l(
        '4. The pudendal canal of Alcock conveys the pudendal nerve (S2–S4) and internal pudendal vessels into the perineum.',
        '৪. অ্যালককের পুডেন্ডাল ক্যানাল S2–S4 স্নায়ু ও রক্তনালীকে পেরিনিয়ামের পেশী ও ত্বকে পৌঁছে দেয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'During normal fecal continence at rest, which component of the levator ani muscle maintains the acute 80-degree anorectal angle by pulling the anorectal junction forward like a dynamic muscular sling?',
      'স্বাভাবিক অবস্থায় মল ধরে রাখার জন্য লিভেটর অ্যানাই পেশীর কোন অংশটি মলাশয়ের সংযোগস্থলকে ডাইনামিক স্লিং বা ফাঁসের মতো সামনের দিকে টেনে ৮০ ডিগ্রির তীব্র কোণ বজায় রাখে?'
    ),
    options: [
      l('Puborectalis muscle', 'পিউবোরেকটালিস পেশী'),
      l('Iliococcygeus muscle', 'ইলিয়োকক্সিজিয়াস পেশী'),
      l('Ischiococcygeus (coccygeus) muscle', 'ইশ্চিওকক্সিজিয়াস (কক্সিজিয়াস) পেশী'),
      l('Deep transverse perineal muscle', 'ডিপ ট্রান্সভার্স পেরিনিয়াল পেশী'),
    ],
    correctIndex: 0,
    explanation: l(
      'The puborectalis muscle is the intermediate, U-shaped sling component of the levator ani. Arising from the posterior surface of the pubis, it passes posteriorly around the anorectal junction. Its continuous tonic resting contraction pulls the junction anteriorly toward the pubis, creating and maintaining the sharp 80-degree anorectal angle that functions as a flap valve preventing involuntary fecal passage. During active defecation, the puborectalis relaxes, straightening the anorectal canal to allow unimpeded fecal expulsion.',
      'পিউবোরেকটালিস হলো লিভেটর অ্যানাই পেশীর সবচেয়ে শক্তিশালী U-আকৃতির ফাঁস। এটি পিউবিক হাড় থেকে শুরু হয়ে মলাশয়ের চারপাশে ঘুরে আসে। স্বাভাবিক অবস্থায় এর অনবরত টান মলাশয়কে সামনের দিকে টেনে একটি ৮০ ডিগ্রি কোণ তৈরি করে রাখে যা ভালভের মতো কাজ করে মল আটকে রাখে। মলত্যাগের সময় এই পেশীটি শিথিল হয়ে কোণটিকে সোজা করে দেয় যাতে কোনো বাধা ছাড়াই মল সহজে বের হয়ে যেতে পারে।'
    ),
  },
}
