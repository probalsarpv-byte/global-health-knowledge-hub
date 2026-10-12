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
    id: 'openstax-ap2e-abdomen',
    title: 'Anatomy and Physiology 2e: The Abdominal Cavity and Peritoneum',
    authors: 'Betts JG, Young KA, Wise JA, Johnson E, Poe B, Kruse DH, Korol O, Johnson JE',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/details/books/anatomy-and-physiology-2e',
  },
  {
    id: 'netter-abdomen-8e',
    title: 'Atlas of Human Anatomy, 8th Edition',
    authors: 'Netter FH',
    organization: 'Elsevier',
    year: 2022,
    url: 'https://www.elsevier.com/books/atlas-of-human-anatomy/netter/978-0-323-68042-4',
  },
]

export const chapter22AbdomenLesson: LessonTopic = {
  id: 'topic.anatomy.abdomen',
  slug: 'abdomen',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('22 · Abdomen', '২২ · উদর'),
  summary: l(
    'A comprehensive regional study of the human abdomen: layers of the anterolateral abdominal wall, rectus sheath composition and the arcuate line of Douglas, inguinal canal anatomy and differential mechanics of direct vs. indirect inguinal and femoral hernias, peritoneal reflections, greater and lesser sacs (omental bursa) and the foramen of Winslow with the Pringle maneuver, vascular arborization of the celiac trunk, SMA, and IMA, and the retroperitoneum.',
    'মানব উদরের বিশদ আঞ্চলিক শারীরস্থান: উদরপ্রাচীরের স্তরবিন্যাস, রেকটাস শিথের গঠন ও ডগলাসের আর্কুয়েট রেখা, কুঁচকির ইনগুইনাল ক্যানাল এবং ডিরেক্ট বনাম ইনডিরেক্ট ও ফিমোরাল হার্নিয়ার মেকানিক্স, পেরিটোনিয়াল ভাঁজ ও ওমেন্টাল বার্সা, উইন্সলোর ছিদ্র ও প্রিঙ্গল ম্যানুভার, সিলিয়াক, সুপিরিয়র মেসেন্টেরিক ও ইনফিরিয়র মেসেন্টেরিক ধমনী জালিকা এবং রেট্রোপেরিটোনিয়ামের গুরুত্বপূর্ণ ক্লিনিক্যাল পর্যালোচনা।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Dissect the nine distinct layers of the anterolateral abdominal wall, contrasting rectus sheath architecture superior versus inferior to the arcuate line of Douglas.',
      'অ্যান্টেরোল্যাটারাল উদরপ্রাচীরের নয়টি স্তর বিশ্লেষণ করা এবং ডগলাসের আর্কুয়েট রেখার ওপরে ও নিচে রেকটাস শিথের গঠনের পার্থক্য নির্ধারণ করা।'
    ),
    l(
      'Map the boundaries, rings, and neurovascular contents of the inguinal canal, distinguishing indirect inguinal hernias, direct inguinal hernias (Hesselbach triangle), and femoral hernias.',
      'ইনগুইনাল ক্যানালের চার প্রাচীর, ছিদ্র এবং স্নায়ু-রক্তনালী চিহ্নিত করা এবং ইনডিরেক্ট, ডিরেক্ট (হেসেলব্যাখ ট্রায়াঙ্গল) ও ফিমোরাল হার্নিয়ার শারীরস্থানিক পার্থক্য ব্যাখ্যা করা।'
    ),
    l(
      'Trace the boundaries of the omental foramen of Winslow and the contents of the hepatoduodenal ligament, explaining the surgical mechanics of the Pringle maneuver during hepatic trauma.',
      'উইন্সলোর ওমেন্টাল ফোরামেনের সীমানা এবং হেপাটোডিউওডেনাল লিগামেন্টের রক্তনালীসমূহ চিহ্নিত করা এবং যকৃতে রক্তক্ষরণ বন্ধে প্রিঙ্গল ম্যানুভারের শারীরস্থানিক প্রয়োগ মূল্যায়ন করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.digestive'],
  relatedTopicIds: ['topic.anatomy.thorax', 'topic.anatomy.urinary'],
  references: refs,
  evidenceBySection: {
    introduction: ['moore-anatomy-9e', 'openstax-ap2e-abdomen'],
    structure: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    mechanism: ['grays-anatomy-42e', 'netter-abdomen-8e'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'netter-abdomen-8e'],
    takeaways: ['openstax-ap2e-abdomen', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-abdominal-wall', label: l('Anterolateral Wall & Rectus Sheath', 'উদরপ্রাচীর ও রেকটাস শিথ'), sectionId: 'introduction' },
      { id: 'sec-inguinal-canal', label: l('Inguinal Canal & Hernia Topography', 'ইনগুইনাল ক্যানাল ও হার্নিয়ার শারীরস্থান'), sectionId: 'structure' },
      { id: 'sec-peritoneal-cavity', label: l('Peritoneal Spaces & Foramen of Winslow', 'পেরিটোনিয়াল গহ্বর ও উইন্সলোর ছিদ্র'), sectionId: 'mechanism' },
      { id: 'sec-visceral-vessels', label: l('Splanchnic Circulation: Celiac, SMA & IMA', 'ভিসেরাল রক্তনালী: সিলিয়াক, এসএমএ ও আইএমএ'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Surgery: Pringle Maneuver & Hernia Repair', 'ক্লিনিক্যাল সার্জারি: প্রিঙ্গল ম্যানুভার ও হার্নিয়া অপারেশন'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary & Abdomen Core Principles', 'সারসংক্ষেপ ও উদর শারীরস্থানের মূলনীতি'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Inguinal Canal & Deep Ring', 'ইনগুইনাল ক্যানাল ও ডিপ রিং'),
        definition: l(
          'An oblique 4 cm interfascial tunnel directed inferomedially through the lower anterior abdominal wall. Extends from the deep inguinal ring (an evagination of transversalis fascia lateral to inferior epigastric vessels) to the superficial inguinal ring (a triangular slit in external oblique aponeurosis). Transmits the spermatic cord in males and the round ligament of the uterus in females, plus the ilioinguinal nerve.',
          'তলপেটের দেয়াল ভেদ করে নিচে ও ভেতরের দিকে নেমে যাওয়া একটি ৪ সেমি লম্বা তির্যক নালী। এটি ডিপ ইনগুইনাল রিং (ইনফিরিয়র এপিগ্যাস্ট্রিক ধমনীর বাইরে ট্রান্সভার্সালিস ফাসিয়ার খাঁজ) থেকে সুপারফিসিয়াল রিং (এক্সটারনাল অবলিকের ছিদ্র) পর্যন্ত বিস্তৃত। এটি পুরুষদের স্পার্মাটিক কর্ড এবং নারীদের জরায়ুর রাউন্ড লিগামেন্ট ধারণ করে।'
        ),
      },
      {
        term: l('Arcuate Line of Douglas', 'ডগলাসের আর্কুয়েট রেখা (Arcuate Line)'),
        definition: l(
          'A horizontal crescentic margin on the posterior wall of the rectus sheath located roughly one-third of the distance from the umbilicus to the pubic crest. Above it, the posterior rectus sheath consists of the posterior internal oblique and transversus abdominis aponeuroses; below it, all three aponeuroses pass anterior to the rectus abdominis, leaving only transversalis fascia and parietal peritoneum on the posterior surface.',
          'নাভি ও পিউবিক অস্থির সংযোগের মধ্যবর্তী স্থানে রেকটাস শিথের পেছনের দেয়ালে অবস্থিত একটি অর্ধচন্দ্রাকৃতির রেখা। এর ওপরে পেছনের দেয়াল শক্ত এপোনিউরোসিস দিয়ে তৈরি থাকে; কিন্তু এই রেখার নিচে তিনটি পেশীর এপোনিউরোসিসই রেকটাস পেশীর সামনে চলে আসে, ফলে পেছনের দেয়ালটি কেবল পাতলা ফাসিয়া ও পেরিটোনিয়াম দিয়ে গঠিত হয়ে দুর্বল হয়ে পড়ে।'
        ),
      },
      {
        term: l('Omental Foramen of Winslow & Pringle Maneuver', 'উইন্সলোর ওমেন্টাল ছিদ্র ও প্রিঙ্গল ম্যানুভার'),
        definition: l(
          'A solitary natural communication between the greater peritoneal sac and the lesser sac (omental bursa). Bounded anteriorly by the hepatoduodenal ligament containing the portal triad (proper hepatic artery, portal vein, common bile duct); posteriorly by the inferior vena cava; superiorly by the caudate lobe of the liver; and inferiorly by the first part of the duodenum. Clamping the hepatoduodenal ligament (Pringle maneuver) arrests hepatic arterial and portal inflow during liver trauma.',
          'পেরিটোনিয়ামের বৃহত্তর ও ক্ষুদ্রতর থলির মধ্যে যোগাযোগের একমাত্র প্রাকৃতিক পথ। এর সামনে হেপাটোডিউওডেনাল লিগামেন্টের ভেতর পোর্টাল ট্রায়াড (হেপাটিক ধমনী, পোর্টাল শিরা ও পিত্তনালী), পেছনে ইনফিরিয়র ভেনাকাভা, ওপরে যকৃতের কডেট লোব এবং নিচে ডিউওডেনামের ১ম অংশ থাকে। লিভারের রক্তপাত বন্ধ করতে এই লিগামেন্ট চেপে ধরার পদ্ধতিকে প্রিঙ্গল ম্যানুভার বলে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Differentiating Indirect versus Direct Inguinal Hernias and Femoral Hernias', 'ইনডিরেক্ট বনাম ডিরেক্ট ইনগুইনাল এবং ফিমোরাল হার্নিয়ার শারীরস্থানিক পার্থক্য নির্ণয়'),
        steps: [
          l(
            'Step 1: Identify the cardinal vascular landmark: the inferior epigastric artery, which arises from the external iliac artery just above the inguinal ligament and courses superomedially along the lateral border of the rectus abdominis.',
            'ধাপ ১: প্রধান রক্তনালীর ল্যান্ডমার্কটি চিহ্নিত করুন: ইনফিরিয়র এপিগ্যাস্ট্রিক ধমনী, যা ইনগুইনাল লিগামেন্টের ওপরে এক্সটারনাল ইলিয়াক ধমনী থেকে বের হয়ে রেকটাস পেশীর পাশ দিয়ে ওপরে ওঠে।'
          ),
          l(
            'Step 2: Differentiate by ring origin: An indirect inguinal hernia protrudes through the deep inguinal ring lateral to the inferior epigastric artery, passing within the spermatic cord coverings through the entire inguinal canal into the scrotum. A direct inguinal hernia protrudes through the floor of Hesselbach triangle medial to the inferior epigastric artery, covered only by transversalis fascia.',
            'ধাপ ২: ছিদ্রের অবস্থান মিলিয়ে নিন: ইনডিরেক্ট হার্নিয়া ইনফিরিয়র এপিগ্যাস্ট্রিক ধমনীর বাইরে অবস্থিত ডিপ রিং দিয়ে ঢুকে সম্পূর্ণ নালী পার হয়ে অণ্ডকোষে নামে। অপরদিকে ডিরেক্ট হার্নিয়া ধমনীর ভেতরের হেসেলব্যাখ ট্রায়াঙ্গলের দুর্বল মেঝে ঠেলে সরাসরি সামনে বের হয়।'
          ),
          l(
            'Step 3: Palpate the pubic tubercle and inguinal ligament: A hernia emerging superior and medial to the pubic tubercle is inguinal. A bulge emerging inferior and lateral to the pubic tubercle (below the inguinal ligament, medial to the femoral vein in the femoral canal) is a femoral hernia, carrying an extreme risk of strangulation due to the rigid lacunar ligament.',
            'ধাপ ৩: পিউবিক টিউবারকল পরীক্ষা করুন: পিউবিক টিউবারকলের ওপরে ও ভেতরে থাকলে তা ইনগুইনাল হার্নিয়া। আর এর নিচে ও বাইরে ইনগুইনাল লিগামেন্টের নিচ দিয়ে ফিমোরাল ক্যানাল দিয়ে বের হলে তা ফিমোরাল হার্নিয়া যা শক্ত ল্যাকুনার লিগামেন্টের কারণে আটকে গিয়ে পচে যাওয়ার তীব্র ঝুঁকি বহন করে।'
          ),
        ],
        conclusion: l(
          'Topographical relation to the inferior epigastric vessels and the inguinal ligament provides unambiguous surgical differentiation between inguinal and femoral pathologies.',
          'ইনফিরিয়র এপিগ্যাস্ট্রিক রক্তনালী এবং ইনগুইনাল লিগামেন্টের সাপেক্ষে অবস্থান নির্ণয় করে অস্ত্রোপচারের আগেই নিখুঁতভাবে হার্নিয়ার সঠিক ধরন নির্ধারণ করা সম্ভব।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'What are the boundaries of Hesselbach (inguinal) triangle, and why are direct inguinal hernias fundamentally acquired disorders of connective tissue aging?',
          'হেসেলব্যাখ (ইনগুইনাল) ট্রায়াঙ্গলের সীমানা কী এবং কেন ডিরেক্ট ইনগুইনাল হার্নিয়া মূলত বয়স্কদের অর্জিত সংযোজক কলার দুর্বলতাজনিত রোগ?',
        ),
        answer: l(
          'Hesselbach triangle is bounded: medially by the lateral border of the rectus abdominis muscle, laterally by the inferior epigastric vessels, and inferiorly by the inguinal ligament (Poupart ligament). Its floor is formed by the transversalis fascia, reinforced medially by the conjoint tendon. Unlike indirect hernias (which are congenital persistence of the processus vaginalis), direct hernias result from chronic intra-abdominal pressure (e.g., prostatic hypertrophy, chronic cough) eroding weakened transversalis fascia in elderly individuals, pushing a broad diffuse bulge forward medial to the epigastric vessels.',
          'হেসেলব্যাখ ট্রায়াঙ্গলটির সীমানা হলো: ভেতরের দিকে রেকটাস অ্যাবডোমিনিস পেশী, বাইরের দিকে ইনফিরিয়র এপিগ্যাস্ট্রিক রক্তনালী এবং নিচের দিকে ইনগুইনাল লিগামেন্ট। এর মেঝে তৈরি হয় ট্রান্সভার্সালিস ফাসিয়া দিয়ে। জন্মগত ত্রুটি না হয়ে এটি মূলত বয়স্ক মানুষদের দীর্ঘদিনের কাশি বা প্রস্রাবের চাপে দুর্বল হয়ে যাওয়া ফাসিয়া পর্দা ফেটে গিয়ে সামনের দিকে থলির মতো বের হয়ে আসে।'
        ),
      },
      {
        question: l(
          'Why does compression of the third (horizontal) part of the duodenum between the superior mesenteric artery and the abdominal aorta produce postprandial vomiting and rapid weight loss (SMA syndrome)?',
          'সুপিরিয়র মেসেন্টেরিক ধমনী এবং অ্যাওর্টার মাঝখানে ডিউওডেনামের তৃতীয় অংশ চেপে গিয়ে খাওয়ার পর বমি ও দ্রুত ওজন কমার (SMA সিন্ড্রোম) শারীরস্থানিক কারণ কী?',
        ),
        answer: l(
          'The third (horizontal) part of the duodenum passes transversely across the midline at the L3 vertebral level directly anterior to the abdominal aorta and posterior to the root of the superior mesenteric artery (SMA). Under normal conditions, an intervening cushion of retroperitoneal mesenteric fat maintains an aortomesenteric angle between 38 and 65 degrees. When severe catabolic weight loss, anorexia, or prolonged immobilization depletes this fat pad, the aortomesenteric angle narrows to less than 25 degrees, mechanically compressing the transverse duodenum like a vise, producing complete gastric outlet obstruction (Wilkie syndrome or SMA syndrome).',
          'ডিউওডেনামের ৩য় অনুভূমিক অংশটি পেটের ৩য় কশেরুকা বরাবর অ্যাওর্টার সামনে এবং সুপিরিয়র মেসেন্টেরিক ধমনীর পেছনের সংকীর্ণ খাঁজ দিয়ে যায়। স্বাভাবিক অবস্থায় সেখানে চর্বির কুশন থাকে যা ধমনী দুটিকে দূরে রাখে। কিন্তু কোনো ব্যক্তি দ্রুত শুকিয়ে গেলে বা অনাহারে থাকলে এই চর্বি মিলিয়ে যায় এবং ধমনীটি সাঁড়াশির মতো ডিউওডেনামকে চেপে ধরে; ফলে খাবার নিচে নামতে পারে না এবং রোগী খাওয়ার পরপরই তীব্র বমি করতে শুরু করে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch22-abdomen-diagram',
    title: l('Interactive Abdominal Wall, Inguinal Canal & Peritoneal Spaces', 'ইন্টারেক্টিভ উদরপ্রাচীর, ইনগুইনাল ক্যানাল ও পেরিটোনিয়াল স্থান'),
    description: l(
      'Inspect the layered architecture of the human abdomen: examine the 9 abdominal wall strata, rectus sheath and arcuate line, inguinal canal anatomy, and the omental foramen of Winslow.',
      'মানব উদরের স্তরভিত্তিক শারীরস্থান অন্বেষণ করুন: পেটের প্রাচীরের ৯টি স্তর, রেকটাস শিথ ও আর্কুয়েট রেখা, কুঁচকির ইনগুইনাল ক্যানাল এবং উইন্সলোর ওমেন্টাল ছিদ্রের গঠন পরীক্ষা করুন।'
    ),
    disclaimer: l(
      'Abdominal regional schematic: select any sector to review muscular boundaries, fascial layers, and surgical access points.',
      'উদর শারীরস্থানের রেখাচিত্র: সীমানা, ফাসিয়ার স্তর এবং অস্ত্রোপচারের প্রবেশপথ দেখতে যেকোনো অঞ্চল নির্বাচন করুন।'
    ),
    svgType: 'abdomen-system',
    items: [
      {
        id: 'abdominal-wall-layers',
        label: l('Anterolateral Wall & Rectus Sheath', 'উদরপ্রাচীরের স্তর ও রেকটাস শিথ'),
        description: l(
          'Nine anatomical layers from skin to parietal peritoneum. External oblique, internal oblique, and transversus abdominis aponeuroses envelop rectus abdominis.',
          'চামড়া থেকে শুরু করে পেরিটোনিয়াম পর্যন্ত ৯টি স্তর। এক্সটারনাল অবলিক, ইন্টারনাল অবলিক ও ট্রান্সভার্সাস পেশীর পর্দা মিলে রেকটাস পেশীর সুরক্ষাকারী খাপ বা শিথ গঠন করে।'
        ),
        details: l(
          'Below the arcuate line of Douglas (inferior 1/3 of sheath), all three aponeuroses pass anterior to the rectus abdominis; the posterior wall consists solely of transversalis fascia and peritoneum.',
          'ডগলাসের আর্কুয়েট রেখার নিচে তিনটি পেশীর এপোনিউরোসিসই রেকটাস পেশীর সামনে চলে আসে; ফলে পেছনের দেয়ালটি কেবল পাতলা ট্রান্সভার্সালিস ফাসিয়া ও পেরিটোনিয়াম দ্বারা গঠিত থাকে।'
        ),
        sectionId: 'introduction',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'inguinal-canal-hernias',
        label: l('Inguinal Canal & Hernia Rings', 'ইনগুইনাল ক্যানাল ও হার্নিয়া রিং'),
        description: l(
          '4 cm oblique tunnel. Anterior wall: external oblique aponeurosis. Posterior: transversalis fascia & conjoint tendon. Floor: inguinal ligament. Roof: arching internal oblique/transversus.',
          '৪ সেমি তির্যক নালী। সামনের দেয়াল এক্সটারনাল অবলিকের পর্দা; পেছনের দেয়াল ট্রান্সভার্সালিস ফাসিয়া ও কনজয়েন্ট টেনডন; মেঝে ইনগুইনাল লিগামেন্ট এবং ছাদ ইন্টারনাল অবলিকের খাঁজ।'
        ),
        details: l(
          'Indirect hernias enter deep ring lateral to inferior epigastric vessels; direct hernias protrude through Hesselbach triangle medial to the vessels. Femoral hernias pass below the inguinal ligament.',
          'ইনডিরেক্ট হার্নিয়া ধমনীর বাইরের ডিপ রিং দিয়ে ঢোকে; ডিরেক্ট হার্নিয়া ধমনীর ভেতরের হেসেলব্যাখ ট্রায়াঙ্গল ঠেলে বের হয়। ফিমোরাল হার্নিয়া ইনগুইনাল লিগামেন্টের নিচ দিয়ে নামে।'
        ),
        sectionId: 'structure',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'foramen-of-winslow',
        label: l('Foramen of Winslow & Portal Triad', 'উইন্সলোর ছিদ্র ও পোর্টাল ট্রায়াড'),
        description: l(
          'Epiploic communication into lesser sac. Anterior boundary: hepatoduodenal ligament enclosing proper hepatic artery, portal vein, and common bile duct.',
          'ক্ষুদ্রতর ওমেন্টাল থলিতে প্রবেশের প্রাকৃতিক পথ। এর সামনের দেয়ালে হেপাটোডিউওডেনাল লিগামেন্টের ভেতর হেপাটিক ধমনী, পোর্টাল শিরা এবং পিত্তনালী (পোর্টাল ট্রায়াড) অবস্থান করে।'
        ),
        details: l(
          'Pringle maneuver compresses the hepatoduodenal ligament between finger and thumb (or vascular clamp) to rapidly arrest bleeding from liver parenchymal trauma.',
          'যকৃতে তীব্র আঘাত বা রক্তক্ষরণে সার্জনরা এই লিগামেন্টটি দুই আঙুল বা ক্ল্যাম্প দিয়ে চেপে ধরে যকৃতের সমস্ত রক্তপ্রবাহ সাময়িকভাবে বন্ধ করেন যাকে প্রিঙ্গল ম্যানুভার বলে।'
        ),
        sectionId: 'mechanism',
        color: '#fecdd3',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'splanchnic-arteries',
        label: l('Splanchnic Conduits: Celiac, SMA & IMA', 'ভিসেরাল ধমনী: সিলিয়াক, এসএমএ ও আইএমএ'),
        description: l(
          'Unpaired anterior aortic branches: Celiac trunk (T12) supplies foregut; SMA (L1) supplies midgut; IMA (L3) supplies hindgut. Marginal artery of Drummond provides vital collateral anastomoses.',
          'অ্যাওর্টা থেকে বের হওয়া তিনটি একক ধমনী: সিলিয়াক ট্রাঙ্ক (T12) ফোরগাটে, এসএমএ (L1) মিডগাটে এবং আইএমএ (L3) হাইন্ডগাটে রক্ত দেয়। ড্রামন্ডের মার্জিনাল ধমনী বিকল্প সংযোগ দেয়।'
        ),
        details: l(
          'SMA syndrome compresses transverse duodenum between aorta and SMA root. Nutcracker syndrome compresses left renal vein in the same space, causing hematuria and left testicular pain.',
          'এসএমএ সিন্ড্রোমে ডিউওডেনাম চেপে খাবার আটকায়। নাটক্র্যাকার সিন্ড্রোমে বাম রেনাল শিরা চেপে গিয়ে প্রস্রাবে রক্ত পড়ে এবং অণ্ডকোষে ভেরিকোসিল সৃষ্টি হয়।'
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
          heading: l('Anterolateral Abdominal Wall: Nine Anatomical Strata', 'অ্যান্টেরোল্যাটারাল উদরপ্রাচীর: নয়টি স্তর ও পেশীর সংগঠন'),
          paragraphs: [
            l(
              'The anterolateral abdominal wall encloses the expansive peritoneal cavity and maintains intra-abdominal pressure for respiration, micturition, defecation, and parturition. From superficial to deep, surgical dissection traverses nine defined strata: (1) skin, (2) Camper fatty superficial fascia, (3) Scarpa membranous superficial fascia, (4) external oblique muscle and aponeurosis, (5) internal oblique muscle, (6) transversus abdominis muscle, (7) transversalis fascia, (8) extraperitoneal adipose tissue, and (9) parietal peritoneum.',
              'পেটের সামনের ও পাশের দেয়ালটি পেরিটোনিয়াল গহ্বরকে রক্ষা করে এবং শ্বাস নেওয়া, মল-মূত্র ত্যাগ ও সন্তান প্রসবের সময় পেটের ভেতরের চাপ নিয়ন্ত্রণ করে। চামড়া কেটে পেটের ভেতরে প্রবেশ করতে হলে সার্জনদের ক্রমান্বয়ে নয়টি স্তর ভেদ করতে হয়: (১) ত্বক, (২) ক্যাম্পারের চর্বিময় পর্দা, (৩) স্কার্পার পাতলা পর্দা, (৪) এক্সটারনাল অবলিক পেশী, (৫) ইন্টারনাল অবলিক পেশী, (৬) ট্রান্সভার্সাস পেশী, (৭) ট্রান্সভার্সালিস ফাসিয়া, (৮) অতিরিক্ত পেরিটোনিয়াল চর্বি এবং (৯) প্যারাইটাল পেরিটোনিয়াম।'
            ),
            l(
              'Centrally, the vertically oriented paired rectus abdominis muscles are enclosed within the tough fibrous rectus sheath formed by aponeuroses of the three flat abdominal wall muscles. Crucially, the posterior wall of the sheath is incomplete: at the arcuate line of Douglas (located midway between umbilicus and pubic crest), the posterior aponeurotic contribution ends as all three aponeuroses sweep anterior to the rectus muscle. Inferior to this line, only transversalis fascia and parietal peritoneum form the posterior boundary.',
              'পেটের মাঝখানে দুটি লম্বা রেকটাস অ্যাবডোমিনিস পেশী থাকে যা তিন পাশের পেশীর এপোনিউরোসিস দিয়ে তৈরি মজবুত রেকটাস শিথ দ্বারা আবৃত থাকে। তবে পেটের নিচের এক-তৃতীয়াংশে ডগলাসের আর্কুয়েট রেখা বরাবর পেছনের শক্ত দেয়ালটি শেষ হয়ে যায় এবং তিনটি পেশীর এপোনিউরোসিসই রেকটাস পেশীর সামনে চলে আসে; ফলে এই রেখার নিচে পেছনের দেয়ালটি অত্যন্ত পাতলা হয়ে কেবল ফাসিয়া ও পেরিটোনিয়াম দিয়ে গঠিত হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Inguinal Canal and Principles of Inguinal Hernias', 'ইনগুইনাল ক্যানাল এবং ইনগুইনাল হার্নিয়ার মূলনীতি'),
          paragraphs: [
            l(
              'The inguinal canal is an oblique 4-centimeter interfascial conduit situated immediately superior and parallel to the medial half of the inguinal ligament. It extends from the deep inguinal ring (an oval defect in the transversalis fascia situated roughly 1.5 cm superior to the femoral pulse) down to the superficial inguinal ring (a triangular split in the external oblique aponeurosis superior and lateral to the pubic tubercle). It transmits the spermatic cord in males and the round ligament in females.',
              'ইনগুইনাল ক্যানাল হলো তলপেটের ভেতরে ইনগুইনাল লিগামেন্টের সমান্তরালে অবস্থিত একটি ৪ সেন্টিমিটার লম্বা তির্যক পথ। এটি ডিপ ইনগুইনাল রিং (যা ফিমোরাল নাড়ির দেড় সেন্টিমিটার ওপরে ট্রান্সভার্সালিস ফাসিয়ার ভেতর তৈরি) থেকে সুপারফিসিয়াল রিং (যা পিউবিক অস্থির ওপরে এক্সটারনাল অবলিকের পর্দায় অবস্থিত) পর্যন্ত নেমে আসে। এটি পুরুষদের অণ্ডকোষে রক্ত ও শুক্রাণু বহনকারী স্পার্মাটিক কর্ড এবং নারীদের জরায়ুর রাউন্ড লিগামেন্ট ধারণ করে।'
            ),
            l(
              'An inguinal hernia represents a protrusion of abdominal viscera (most often small intestine or greater omentum) through the groin wall. In an indirect inguinal hernia, the sac passes through the deep ring lateral to the inferior epigastric vessels, traverses the full length of the canal within the coverings of the spermatic cord, and exits via the superficial ring into the scrotum. In a direct inguinal hernia, the sac pushes forward directly through weakened transversalis fascia in Hesselbach triangle, medial to the epigastric vessels.',
              'তলপেটের দুর্বল দেয়াল ভেদ করে নাড়িভুঁড়ি বের হয়ে আসাকে হার্নিয়া বলে। ইনডিরেক্ট হার্নিয়ায় থলিটি ইনফিরিয়র এপিগ্যাস্ট্রিক রক্তনালীর বাইরে অবস্থিত ডিপ রিং দিয়ে ঢুকে পুরো নালী পার হয়ে অণ্ডকোষের ভেতর নেমে আসে। অপরদিকে ডিরেক্ট হার্নিয়া কোনো নালীর ভেতর দিয়ে না গিয়ে ইনফিরিয়র এপিগ্যাস্ট্রিক রক্তনালীর ভেতরের হেসেলব্যাখ ট্রায়াঙ্গলের দুর্বল মাংসপেশী ঠেলে সরাসরি সামনের দিকে ফোলা পিণ্ডের মতো বের হয়ে আসে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Peritoneal Cavity: Greater and Lesser Sacs', 'পেরিটোনিয়াল গহ্বর: বৃহত্তর ও ক্ষুদ্রতর থলি এবং মেসেন্টারি'),
          paragraphs: [
            l(
              'The peritoneal cavity is a complex, continuous potential space lined by parietal peritoneum along the parietes and visceral peritoneum coating abdominal organs. It is partitioned into the expansive greater sac (extending from the diaphragm down into the pelvis) and the lesser sac (omental bursa), an isolated space situated posterior to the stomach and lesser omentum and anterior to the pancreas and retroperitoneal structures. The lesser sac provides essential frictionless mobility for gastric expansion during food ingestion.',
              'পেরিটোনিয়াল গহ্বর হলো পেটের সমস্ত অঙ্গগুলোকে ঘিরে থাকা একটি পাতলা সেরাস পর্দাযুক্ত ফাঁকা স্থান। এটি দুটি প্রধান প্রকোষ্ঠে বিভক্ত: বিশাল বৃহত্তর থলি (যা ডায়াফ্রাম থেকে শ্রোণী পর্যন্ত বিস্তৃত) এবং পাকস্থলীর পেছনে অবস্থিত ক্ষুদ্রতর থলি বা ওমেন্টাল বার্সা। এই ক্ষুদ্র থলিটি অগ্ন্যাশয়ের সামনে অবস্থান করে এবং খাবার খাওয়ার পর পাকস্থলী যখন ফুলে ওঠে তখন তাকে ঘর্ষণহীনভাবে প্রসারিত হতে চমৎকার জায়গা তৈরি করে দেয়।'
            ),
            l(
              'The greater and lesser sacs communicate through a single natural gateway: the omental (epiploic) foramen of Winslow. The anterior boundary of this foramen is formed by the free edge of the lesser omentum (the hepatoduodenal ligament), which encloses the vital portal triad: the portal vein posteriorly, the proper hepatic artery anteromedially, and the common bile duct anterolaterally. Behind the foramen lies the massive inferior vena cava, while the caudate lobe of the liver arches superiorly.',
              'বৃহত্তর ও ক্ষুদ্রতর থলির মধ্যে যোগাযোগের একমাত্র প্রাকৃতিক প্রবেশদ্বার হলো উইন্সলোর ওমেন্টাল ছিদ্র। এই ছিদ্রের সামনের দেয়ালে থাকে হেপাটোডিউওডেনাল লিগামেন্ট যার ভেতর দিয়ে যকৃতের তিন প্রধান রক্তনালী ও পিত্তনালী (পোর্টাল ট্রায়াড) গমন করে: পেছনে চওড়া পোর্টাল শিরা, সামনে হেপাটিক ধমনী এবং পিত্তনালী। এই ছিদ্রের পেছনের দেয়ালে থাকে ইনফিরিয়র ভেনাকাভা এবং ওপরে থাকে যকৃতের কডেট লোব।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Splanchnic Arterial Trunks: Celiac, SMA, and IMA', 'ভিসেরাল রক্ত সরবরাহ: সিলিয়াক, এসএমএ ও আইএমএ ধমনী'),
          paragraphs: [
            l(
              'Arterial perfusion of the abdominal gastrointestinal tract is governed by three unpaired branches arising sequentially from the anterior aspect of the abdominal aorta: the celiac trunk (arising at T12, supplying foregut derivatives from the abdominal esophagus to the major duodenal papilla), the superior mesenteric artery (SMA, arising at L1, supplying midgut derivatives to the distal transverse colon), and the inferior mesenteric artery (IMA, arising at L3, supplying hindgut derivatives to the upper rectum).',
              'পেটের পরিপাকতন্ত্রে রক্ত সরবরাহের কাজটি সম্পন্ন করে অ্যাওর্টার সামনের দিক থেকে বের হওয়া তিনটি একক ধমনী: সিলিয়াক ট্রাঙ্ক (T12 কশেরুকা বরাবর, যা পাকস্থলী, যকৃত ও প্লীহায় রক্ত দেয়), সুপিরিয়র মেসেন্টেরিক ধমনী বা SMA (L1 কশেরুকা বরাবর, যা ক্ষুদ্রান্ত্র ও বৃহদন্ত্রের অর্ধেকাংশে রক্ত দেয়) এবং ইনফিরিয়র মেসেন্টেরিক ধমনী বা IMA (L3 কশেরুকা বরাবর, যা বৃহদন্ত্রের শেষ অংশ ও মলাশয়ে রক্ত দেয়)।'
            ),
            l(
              'Extensive collateral anastomotic arcades link these vascular territories to buffer against ischemic bowel infarction. The celiac trunk and SMA anastomose through superior and inferior pancreaticoduodenal arteries around the C-loop of the duodenum. The SMA and IMA communicate along the inner border of the large intestine through the continuous marginal artery of Drummond and the central meandering mesenteric Arc of Riolan, preserving colonic viability during gradual arterial occlusion.',
              'অন্ত্রের রক্তস্বল্পতা রোধ করার জন্য এই তিনটি ধমনীর মধ্যে চমৎকার বিকল্প সংযোগ জালিকা গড়ে উঠেছে। সিলিয়াক ও এসএমএ ধমনী অগ্ন্যাশয় ও ডিউওডেনামের চারপাশে রক্তনালী দিয়ে একে অপরের সাথে যুক্ত থাকে। আবার বৃহদন্ত্রের কিনারা ঘেঁষে ড্রামন্ডের মার্জিনাল ধমনী এবং রিওলানের আর্চ এসএমএ ও আইএমএ ধমনীকে যুক্ত রাখে; ফলে একটি ধমনীতে চর্বি জমে বন্ধ হলেও অন্য ধমনী দিয়ে বিকল্প পথে রক্ত পৌঁছে অন্ত্রকে পচে যাওয়ার হাত থেকে রক্ষা করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Surgery: Inguinal Repairs and the Pringle Maneuver', 'ক্লিনিক্যাল সার্জারি: হার্নিয়ার চিকিৎসা ও প্রিঙ্গল ম্যানুভার'),
          paragraphs: [
            l(
              'Surgical repair of inguinal hernias mandates restoring the integrity of the abdominal wall while preserving the spermatic cord structures (vas deferens, testicular artery, and pampiniform venous plexus). Tension-free Lichtenstein repair places a prosthetic polypropylene mesh over the floor of the canal, reinforcing weakened transversalis fascia. The genital branch of the genitofemoral nerve, ilioinguinal nerve, and iliohypogastric nerve must be identified and protected to prevent debilitating chronic inguinodynia.',
              'হার্নিয়া অপারেশনের মূল লক্ষ্য হলো স্পার্মাটিক কর্ডের রক্তনালী ও শুক্রনালী অক্ষত রেখে তলপেটের দুর্বল দেয়ালকে মজবুত করা। আধুনিক লিখটেনস্টাইন পদ্ধতিতে একটি কৃত্রিম জাল বা মেশ বসিয়ে দুর্বল ট্রান্সভার্সালিস ফাসিয়ার ওপর সেলাই করে দেওয়া হয়। অপারেশনের সময় ইলিয়োইনগুইনাল ও জেনিটোফিমোরাল স্নায়ুগুলোকে সাবধানে রক্ষা করতে হয় যাতে অপারেশনের পর কুঁচকিতে আজীবন দীর্ঘস্থায়ী তীব্র ব্যথার সৃষ্টি না হয়।'
            ),
            l(
              'In severe abdominal trauma with massive hepatic parenchymal hemorrhage, surgeons execute the Pringle maneuver: a vascular clamp is passed through the foramen of Winslow to compress the hepatoduodenal ligament, temporarily arresting inflow from both the proper hepatic artery and portal vein. If arterial hemorrhage persists despite complete clamping, the surgeon immediately recognizes that bleeding originates from retrohepatic vena caval tears or an aberrant left hepatic artery arising from the left gastric artery.',
              'পেটে মারাত্মক আঘাত লেগে লিভার ফেটে প্রচণ্ড রক্তক্ষরণ হলে সার্জনরা উইন্সলোর ছিদ্র দিয়ে ক্ল্যাম্প ঢুকিয়ে হেপাটোডিউওডেনাল লিগামেন্টটি চেপে ধরেন যাকে প্রিঙ্গল ম্যানুভার বলে; এতে লিভারে প্রবেশ করা ধমনী ও শিরা দুটিই বন্ধ হয়ে যায়। এই পদ্ধতি প্রয়োগের পরেও যদি রক্তপাত চলতে থাকে, তবে সার্জন বুঝতে পারেন যে রক্তক্ষরণটি লিভারের পেছনের ইনফিরিয়র ভেনাকাভা বা অন্য কোনো অস্বাভাবিক রক্তনালী থেকে হচ্ছে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary & Abdomen Core Principles', 'সারসংক্ষেপ ও উদর শারীরস্থানের মূল সূত্রসমূহ'),
          paragraphs: [
            l(
              'The regional anatomy of the human abdomen integrates multi-layered muscular wall kinematics, complex peritoneal compartmentation, and an orderly embryological splanchnic arterial arborization. The inguinal canal represents a vulnerable structural canal whose fascial boundaries determine whether herniation follows a direct or indirect trajectory.',
              'মানব উদরের আঞ্চলিক শারীরস্থান পেটের বহুমাত্রিক পেশীবহুল দেয়াল, পেরিটোনিয়ামের থলি এবং ভ্রূণীয় রক্তনালীগুলোর সুশৃঙ্খল বিন্যাসকে চমৎকারভাবে একত্রিত করে। কুঁচকির ইনগুইনাল ক্যানাল হলো উদরপ্রাচীরের একটি স্বাভাবিক প্রাকৃতিক দুর্বল পথ যার ফাসিয়া স্তরগুলোর গঠনের ওপর নির্ভর করে হার্নিয়াটি ডিরেক্ট হবে নাকি ইনডিরেক্ট পথে অণ্ডকোষে নামবে।'
            ),
            l(
              'Mastery of anatomical boundaries, such as Hesselbach triangle, the arcuate line of Douglas, the foramen of Winslow, and the vascular relationships of the duodenum and pancreas, remains essential for safe general, vascular, and oncological abdominal surgery.',
              'হেসেলব্যাখ ট্রায়াঙ্গল, ডগলাসের আর্কুয়েট রেখা, উইন্সলোর ওমেন্টাল ছিদ্র এবং ডিউওডেনাম ও অগ্ন্যাশয়ের চারপাশের রক্তনালীগুলোর সঠিক পথ জানা জেনারেল ও ভাস্কুলার সার্জারিতে রোগীদের জীবন রক্ষা ও অপারেশনের ঝুঁকি এড়ানোর মূল শর্ত।'
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
          heading: l('The Rectus Sheath, Arcuate Line and Neurovascular Conduits', 'রেকটাস শিথ, ডগলাসের আর্কুয়েট রেখা ও রক্তনালী সরবরাহ'),
          paragraphs: [
            l(
              'The rectus sheath is a specialized bilaminar aponeurotic envelope housing the rectus abdominis muscle, pyramidalis muscle, superior and inferior epigastric vessels, and terminal anterior cutaneous branches of intercostal nerves T7 through T12. The structural arrangement changes dramatically at the horizontal arcuate line of Douglas (located approximately midway between the umbilicus and pubic crest).',
              'রেকটাস শিথ হলো পেটের মাঝখানের রেকটাস পেশী, পিরামিডালিস পেশী, সুপিরিয়র ও ইনফিরিয়র এপিগ্যাস্ট্রিক রক্তনালী এবং ৭ম থেকে ১২শ ইন্টারকোস্টাল স্নায়ুকে ধারণকারী একটি বিশেষ দ্বি-স্তরবিশিষ্ট এপোনিউরোসিসের খাপ। নাভি ও পিউবিক অস্থির মাঝখানে ডগলাসের আর্কুয়েট রেখা বরাবর এই খাপের পেছনের গঠনে এক নাটকীয় পরিবর্তন দেখা যায়।'
            ),
            l(
              'Superior to the arcuate line, the internal oblique aponeurosis splits into an anterior lamella (fusing with external oblique) and a posterior lamella (fusing with transversus abdominis), providing balanced anterior and posterior structural support. Inferior to the arcuate line, all three aponeuroses sweep anterior to the rectus muscle. On the posterior surface below this line, the inferior epigastric artery directly pierces the transversalis fascia to ascend against the naked dorsal surface of the muscle, making it susceptible to rectus sheath hematomas during blunt trauma or paroxysmal coughing.',
              'আর্কুয়েট রেখার ওপরে ইন্টারনাল অবলিকের পর্দা দুই ভাগে ভাগ হয়ে সামনে ও পেছনে সমান শক্তি জোগায়। কিন্তু এই রেখার নিচে তিনটি পেশীর এপোনিউরোসিসই রেকটাস পেশীর সামনে চলে আসে। এর ফলে পেছনের দেয়ালটি সম্পূর্ণ অরক্ষিত হয়ে পড়ে এবং ইনফিরিয়র এপিগ্যাস্ট্রিক ধমনীটি সরাসরি পেশীর পেছনের গায়ে লেগে থাকে; ফলে তীব্র কাশি বা আঘাতে এই ধমনীটি ছিঁড়ে গিয়ে রেকটাস শিথের ভেতরে মারাত্মক রক্তজমাট বাঁধার (হেমাটোমা) ঝুঁকি তৈরি হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Inguinal Canal Architecture: Walls, Rings and Triangles', 'ইনগুইনাল ক্যানালের চার দেয়াল, ছিদ্রসমূহ ও হেসেলব্যাখ ট্রায়াঙ্গল'),
          paragraphs: [
            l(
              'The architecture of the 4 cm inguinal canal is precisely defined by four anatomical boundaries: (1) Anterior wall: external oblique aponeurosis throughout, reinforced laterally by the fleshy internal oblique origin; (2) Posterior wall: transversalis fascia throughout, reinforced medially by the conjoint tendon (falx inguinalis, formed by united aponeuroses of internal oblique and transversus abdominis); (3) Floor: grooved upper surface of the inguinal ligament, reinforced medially by the lacunar ligament of Gimbernat; (4) Roof: arching lower fibers of internal oblique and transversus abdominis.',
              '৪ সেমি দীর্ঘ ইনগুইনাল ক্যানালটির চারটি সীমানা অত্যন্ত নিখুঁতভাবে গঠিত: (১) সামনের দেয়াল পুরোটা জুড়েই এক্সটারনাল অবলিকের পর্দা; (২) পেছনের দেয়াল পুরোটা ট্রান্সভার্সালিস ফাসিয়া এবং ভেতরের দিকে কনজয়েন্ট টেনডন দিয়ে মজবুত; (৩) মেঝেটি ইনগুইনাল লিগামেন্টের বাঁকানো খাঁজ এবং ভেতরের দিকে ল্যাকুনার লিগামেন্ট দিয়ে তৈরি; এবং (৪) ছাদ তৈরি হয় ইন্টারনাল অবলিক ও ট্রান্সভার্সাস পেশীর খিলানযুক্ত তন্তু দিয়ে।'
            ),
            l(
              'The deep inguinal ring is an outpouching of transversalis fascia located midway between the anterior superior iliac spine (ASIS) and pubic symphysis (the mid-inguinal point), immediately lateral to the origin of the inferior epigastric artery. Hesselbach triangle is situated medially, bounded by the lateral border of rectus abdominis, the inferior epigastric vessels, and the inguinal ligament. Direct hernias push directly through the floor of Hesselbach triangle without entering the deep ring.',
              'ডিপ ইনগুইনাল রিংটি হলো ট্রান্সভার্সালিস ফাসিয়ার একটি ডিম্বাকৃতির খাঁজ যা এএসআইএস এবং পিউবিক সিমফাইসিসের ঠিক মাঝখানের মিড-ইনগুইনাল পয়েন্টে ইনফিরিয়র এপিগ্যাস্ট্রিক ধমনীর ঠিক বাইরে অবস্থিত। এর ভেতরের দিকে হেসেলব্যাখ ট্রায়াঙ্গল থাকে যার মেঝে দুর্বল হয়ে গেলে ডিরেক্ট হার্নিয়া সরাসরি মাংস ঠেলে বের হয়, কিন্তু এটি কখনোই ডিপ রিং দিয়ে নালীর ভেতরে প্রবেশ করে না।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Lesser Sac Embryology, Recesses and the Pringle Maneuver', 'ক্ষুদ্রতর থলির ভ্রূণতত্ত্ব, রিসেসসমূহ এবং প্রিঙ্গল ম্যানুভার'),
          paragraphs: [
            l(
              'The omental bursa (lesser sac) arises embryologically from 90-degree clockwise rotation of the primitive stomach along its longitudinal axis, pulling the dorsal mesogastrium to the left and anteriorly. The lesser sac features a superior recess extending behind the liver to the diaphragm, an inferior recess between the two layers of the greater omentum, and a splenic recess extending to the hilum of the spleen, where the splenorenal and gastrosplenic ligaments envelop the short gastric and splenic vessels.',
              'ওমেন্টাল বার্সা বা ক্ষুদ্রতর থলিটি ভ্রূণাবস্থায় পাকস্থলীর ঘড়ির কাঁটার দিকে ৯০ ডিগ্রি ঘূর্ণনের ফলে তৈরি হয় যা পেছনের মেসেন্টারিকে বামে ও সামনে টেনে এনে পাকস্থলীর পেছনে একটি ফাঁকা ঘরের সৃষ্টি করে। এই থলিটির ওপরের অংশ লিভারের পেছনে ডায়াফ্রাম পর্যন্ত, নিচের অংশ ওমেন্টামের ভেতর এবং বামের অংশ প্লীহার গোড়া পর্যন্ত বিস্তৃত থাকে যেখানে রক্তনালীগুলো বিভিন্ন লিগামেন্টের ভেতর দিয়ে প্লীহায় প্রবেশ করে।'
            ),
            l(
              'The sole communication between the lesser and greater sacs is the omental foramen of Winslow (hiatus of Winslow). Digital exploration through the foramen allows the surgeon to palpate the hepatic artery, common bile duct, and portal vein within the hepatoduodenal ligament. Compression of this ligament (Pringle maneuver) arrests liver hemorrhage. If bleeding continues, it indicates avulsion of the retrohepatic inferior vena cava or hepatic veins into the central caval conduit.',
              'বৃহত্তর ও ক্ষুদ্রতর থলির মধ্যে যোগাযোগের একমাত্র প্রবেশদ্বার হলো উইন্সলোর ওমেন্টাল ছিদ্র। এই ছিদ্রে আঙুল ঢুকিয়ে সার্জনরা খুব সহজেই হেপাটোডিউওডেনাল লিগামেন্টের ভেতরের পোর্টাল শিরা, হেপাটিক ধমনী ও পিত্তনালী স্পর্শ করতে পারেন। এই পুরো লিগামেন্টটি চেপে ধরে প্রিঙ্গল ম্যানুভারের মাধ্যমে লিভারের রক্তপাত বন্ধ করা হয়; তবে এরপরেও রক্তক্ষরণ চলতে থাকলে বুঝতে হয় যে লিভারের পেছনের ইনফিরিয়র ভেনাকাভা মারাত্মকভাবে ছিঁড়ে গেছে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Splanchnic Vascular Geometry and Portosystemic Anastomoses', 'ভিসেরাল রক্তনালীর জ্যামিতি এবং পোর্টো-সিস্টেমিক সমান্তরাল সংযোগ'),
          paragraphs: [
            l(
              'The splanchnic arterial circulation demonstrates strict developmental partitioning: the celiac trunk supplies the foregut, the SMA supplies the midgut, and the IMA supplies the hindgut. The portal venous system drains this entire gastrointestinal capillary bed into the liver through the portal vein (formed by the confluence of the splenic vein and superior mesenteric vein behind the neck of the pancreas). At key junctional zones, portal veins freely anastomose with systemic caval veins.',
              'পেটের রক্ত সংবহন ব্যবস্থা ভ্রূণীয় বিকাশের নিয়ম পুরোপুরি মেনে চলে: সিলিয়াক ট্রাঙ্ক ফোরগাটে, এসএমএ মিডগাটে এবং আইএমএ হাইন্ডগাটে রক্ত পাঠায়। এই সমস্ত অঙ্গ থেকে রক্ত সংগ্রহ করে পোর্টাল শিরা (যা অগ্ন্যাশয়ের গলার পেছনে স্প্লেনিক শিরা ও সুপিরিয়র মেসেন্টেরিক শিরার মিলনে গঠিত হয়) যকৃতে নিয়ে যায়। কিছু নির্দিষ্ট প্রান্তিক অঞ্চলে এই পোর্টাল শিরাগুলো সাধারণ সিস্টেমিক শিরার সাথে কোনো ভালভ ছাড়াই সরাসরি মিশে যায়।'
            ),
            l(
              'Four critical portosystemic anastomotic sites exist: (1) Esophageal junction: left gastric vein (portal) anastomoses with azygos veins (systemic); portal hypertension dilates these into bleeding esophageal varices; (2) Rectal junction: superior rectal vein (portal) meets middle and inferior rectal veins (internal iliac, systemic), forming internal hemorrhoids; (3) Umbilicus: paraumbilical veins (portal) meet superficial epigastric veins (systemic), producing caput medusae; (4) Retroperitoneum: colic veins meet lumbar veins (Retzius veins).',
              'শরীরে চারটি প্রধান পোর্টো-সিস্টেমিক সংযোগস্থল রয়েছে: (১) খাদ্যনালির নিম্নাংশ: বাম গ্যাস্ট্রিক শিরা ও অ্যাজাইগোস শিরার মিলনে তৈরি হয় রক্তক্ষরণকারী ইসোফেজিয়াল ভ্যারিক্স; (২) মলাশয়: সুপিরিয়র রেক্টাল শিরা ও ইনফিরিয়র রেক্টাল শিরার মিলনে পাইলস বা অর্শ্বরোগ হয়; (৩) নাভি: প্যারাম্বিলিক্যাল শিরা ও এপিগ্যাস্ট্রিক শিরার মিলনে নাভির চারপাশের শিরা ফুলে সাপের মাথার মতো ক্যাপুট মেডুসা তৈরি করে; এবং (৪) পেছনের রেটজিয়াস শিরাসমূহ।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Vascular Compression Syndromes: SMA Syndrome and Nutcracker Phenomenon', 'ভাস্কুলার কম্প্রেশন সিন্ড্রোম: এসএমএ এবং নাটক্র্যাকার সিন্ড্রোম'),
          paragraphs: [
            l(
              'The superior mesenteric artery arises from the anterior surface of the abdominal aorta at the L1 vertebral level and courses inferiorly and anteriorly, forming an acute anatomical angle with the aorta termed the aortomesenteric angle (normally 38 to 65 degrees, maintained by an intervening retroperitoneal mesenteric fat pad). Two structures pass horizontally through this aortomesenteric fork: the left renal vein superiorly, and the third (horizontal) part of the duodenum inferiorly.',
              'সুপিরিয়র মেসেন্টেরিক ধমনী L1 কশেরুকা বরাবর অ্যাওর্টার সামনের দেয়াল থেকে বের হয়ে নিচের দিকে নেমে একটি কোণ তৈরি করে যাকে অ্যাওর্টো-মেসেন্টেরিক কোণ বলা হয় (স্বাভাবিক কোণ ৩৮ থেকে ৬৫ ডিগ্রি যা মেসেন্টেরিক চর্বির কুশন দিয়ে সুরক্ষিত থাকে)। এই সংকীর্ণ খাঁজের ভেতর দিয়ে দুটি অঙ্গ আনুভূমিকভাবে যায়: ওপরে বাম রেনাল শিরা এবং সামান্য নিচে ডিউওডেনামের ৩য় অনুভূমিক অংশ।'
            ),
            l(
              'In Superior Mesenteric Artery (SMA) syndrome (Wilkie syndrome), catabolic depletion of the mesenteric fat pad narrows the angle below 25 degrees, compressing the third part of the duodenum against the aorta and causing postprandial epigastric pain, bilious vomiting, and extreme weight loss. In Nutcracker syndrome, the same narrowing compresses the left renal vein, obstructing renal outflow and elevating left gonadal vein pressure, producing microhematuria, left flank pain, and pelvic congestion or left-sided varicocele.',
              'দ্রুত ওজন কমে গেলে বা অপুষ্টিতে চর্বির কুশন ক্ষয় হলে কোণটি ২৫ ডিগ্রির নিচে নেমে আসে এবং ডিউওডেনাম চেপে খাবার আটকিয়ে এসএমএ সিন্ড্রোম তৈরি করে যাতে রোগী অনবরত বমি করতে থাকে। অপরদিকে একই খাঁজে বাম রেনাল শিরাটি সাঁড়াশির মতো চেপে গেলে নাটক্র্যাকার সিন্ড্রোম হয় যার ফলে প্রস্রাবে রক্তক্ষরণ হয়, বাম কোমরে ব্যথা হয় এবং বাম অণ্ডকোষের শিরা ফুলে ভেরিকোসিল রোগ দেখা দেয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Abdominal Visceral and Surgical Topography', 'উচ্চতর সংশ্লেষ: উদরের ভিসেরাল ও সার্জিক্যাল শারীরস্থান'),
          paragraphs: [
            l(
              'Advanced mastery of abdominal anatomy requires synthesizing the multi-layered kinetics of the anterolateral wall, the complex embryological folding creating the lesser sac and peritoneal recesses, the vascular distribution of the three splanchnic trunks, and the delicate neurovascular relationships traversing retroperitoneal spaces.',
              'উচ্চতর উদর শারীরস্থান আয়ত্ত করার জন্য পেটের প্রাচীরের নয়টি স্তরের মেকানিক্স, ভ্রূণীয় ঘূর্ণনের ফলে ওমেন্টাল থলি ও পেরিটোনিয়াল রিসেস তৈরির রহস্য, তিনটি ভিসেরাল ধমনীর বিস্তৃতি এবং পেছনের রেট্রোপেরিটোনিয়াল অঞ্চলের স্নায়ু ও রক্তনালীর সূক্ষ্ম সংযোগগুলো সামগ্রিকভাবে উপলব্ধি করা প্রয়োজন।'
            ),
            l(
              'Clinical proficiency in acute abdomen management, trauma laparotomy, and oncological resections demands absolute anatomical command of landmarks including Hesselbach triangle, the foramen of Winslow, the arcuate line, and the aortomesenteric angle to execute decisive interventions while preventing catastrophic ischemic and hemorrhagic complications.',
              'তীব্র পেটের রোগ নির্ণয়, ট্রমা অপারেশনে জীবনরক্ষা কিংবা ক্যান্সারের টিউমার সফলভাবে কাটার জন্য হেসেলব্যাখ ট্রায়াঙ্গল, উইন্সলোর ছিদ্র, আর্কুয়েট রেখা এবং অ্যাওর্টো-মেসেন্টেরিক কোণের নিখুঁত জ্ঞান থাকা অপরিহার্য যাতে কোনো অবস্থাতেই ভুল রক্তনালী কেটে রোগীর জীবন বিপন্ন না হয়।'
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
          heading: l('Femoral Canal Anatomy and High-Risk Strangulation Biomechanics', 'ফিমোরাল ক্যানালের শারীরস্থান এবং হার্নিয়া পচে যাওয়ার বায়োমেকানিক্স'),
          paragraphs: [
            l(
              'The femoral sheath is a conical fascial sleeve derived from the transversalis fascia anteriorly and iliacus fascia posteriorly, extending below the inguinal ligament into the anterior thigh. It is partitioned by anteroposterior fibrous septa into three compartments: lateral (femoral artery), intermediate (femoral vein), and medial (the femoral canal, approximately 1.3 cm in length, containing Cloquet lymph node, loose areolar tissue, and lymphatic vessels). The superior opening of the femoral canal is the femoral ring.',
              'ফিমোরাল শিথ হলো তলপেটের ফাসিয়া থেকে উরুতে নেমে আসা একটি মোচাকৃতির আবরণ যা ইনগুইনাল লিগামেন্টের নিচ দিয়ে উরুর সামনের অংশে প্রবেশ করে। এটি তিনটি প্রকোষ্ঠে বিভক্ত: বাইরের অংশে ফিমোরাল ধমনী, মাঝের অংশে ফিমোরাল শিরা এবং ভেতরের সবচেয়ে ছোট অংশে থাকে ফিমোরাল ক্যানাল (মাত্র ১.৩ সেমি লম্বা যাতে ক্লোকেটের লিম্ফ নোড ও লসিকা নালী থাকে)। এই ক্যানালের ওপরের প্রবেশদ্বারটিকে ফিমোরাল রিং বলা হয়।'
            ),
            l(
              'The femoral ring is bounded anteriorly by the inguinal ligament, posteriorly by the pectineal (Cooper) ligament, laterally by the femoral vein, and medially by the sharp, rigid crescentic margin of the lacunar ligament of Gimbernat. Because these boundaries are unyielding and osteofibrous, any herniation descending through the femoral ring into the canal carries a 45% risk of acute irreducible incarceration and strangulation. An aberrant obturator artery crossing the lacunar ligament (corona mortis) represents a lethal bleeding hazard during surgical release.',
              'ফিমোরাল রিংটি সামনে ইনগুইনাল লিগামেন্ট, পেছনে পেকটিনিয়াল লিগামেন্ট, বাইরে ফিমোরাল শিরা এবং ভেতরের দিকে অত্যন্ত ধারালো শক্ত ল্যাকুনার লিগামেন্ট দ্বারা ঘেরা থাকে। যেহেতু চারপাশের এই দেয়ালগুলো সম্পূর্ণ শক্ত ও অনমনীয়, তাই কোনো অন্ত্র এখানে ঢুকে আটকে গেলে তা দ্রুত পচে গিয়ে গ্যাংগ্রিন হওয়ার ঝুঁকি প্রায় ৪৫ শতাংশ। হার্নিয়া কাটার সময় ল্যাকুনার লিগামেন্টের ওপর দিয়ে যাওয়া অস্বাভাবিক ধমনী (করোনা মর্টিস বা মৃত্যুর মুকুট) কেটে গেলে মারাত্মক রক্তক্ষরণে রোগী মারা যেতে পারে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Internal Herniation Syndromes and Mesenteric Defects', 'অভ্যন্তরীণ হার্নিয়া সিন্ড্রোম এবং মেসেন্টেরিক ত্রুটিসমূহ'),
          paragraphs: [
            l(
              'Internal hernias are protrusions of viscera through an anatomical or iatrogenic mesenteric opening within the peritoneal cavity. Paraduodenal hernias are the most common congenital internal hernias: left paraduodenal hernias occur through the fossa of Landzert (bounded anteriorly by the inferior mesenteric vein and ascending branch of the left colic artery); right paraduodenal hernias occur through the fossa of Waldeyer (bounded anteriorly by the superior mesenteric artery).',
              'অভ্যন্তরীণ হার্নিয়া হলো পেটের ভেতরের মেসেন্টারির কোনো ছিদ্র দিয়ে নাড়িভুঁড়ি ঢুকে আটকে যাওয়া। এর মধ্যে সবচেয়ে পরিচিত হলো প্যারাডিউওডেনাল হার্নিয়া: বাম প্যারাডিউওডেনাল হার্নিয়ায় অন্ত্র ল্যান্ডজার্টের খাঁজে ঢোকে যার সামনে ইনফিরিয়র মেসেন্টেরিক শিরা থাকে; আর ডান প্যারাডিউওডেনাল হার্নিয়ায় অন্ত্র ওয়াল্ডেয়ারের খাঁজে ঢোকে যার সামনে প্রধান সুপিরিয়র মেসেন্টেরিক ধমনী অবস্থান করে।'
            ),
            l(
              'Visceral loops trapped within paraduodenal fossae undergo closed-loop bowel obstruction with high rates of strangulation. Surgical reduction requires absolute anatomical care: incising the hernia neck to relieve obstruction risks catastrophic transection of the mesenteric vessels coursing directly across its free margin. Similarly, retrocolic Petersen defects following Roux-en-Y gastric bypass require meticulous prophylactic closure to prevent internal strangulation of the alimentary limb.',
              'এই খাঁজগুলোর ভেতর অন্ত্রের লুপ আটকে গেলে রক্ত চলাচল বন্ধ হয়ে দ্রুত পচন ধরে। অস্ত্রোপচারের সময় হার্নিয়ার মুখটি অসাবধানতাবশত কাটলে এর গায়ের ওপর দিয়ে যাওয়া প্রধান মেসেন্টেরিক রক্তনালী কেটে যাওয়ার প্রচণ্ড ঝুঁকি থাকে। গ্যাস্ট্রিক বাইপাস সার্জারির পরেও মেসেন্টারিতে এমন কৃত্রিম ছিদ্র তৈরি হতে পারে যা অপারেশনের সময়ই সেলাই করে বন্ধ না রাখলে পরবর্তীতে জীবনঘাতী অভ্যন্তরীণ হার্নিয়ার সৃষ্টি করে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-part schematic of the human abdomen: anterolateral wall strata and rectus sheath, inguinal canal borders and hernia rings, omental foramen of Winslow, and splanchnic arterial branches.',
      'মানব উদরের ৪টি মূল অঞ্চল: উদরপ্রাচীরের স্তর ও রেকটাস শিথ, ইনগুইনাল ক্যানাল ও হার্নিয়া রিং, উইন্সলোর ওমেন্টাল ছিদ্র এবং প্রধান ভিসেরাল ধমনীসমূহ।'
    ),
    steps: [
      l(
        '1. Nine anterolateral wall strata protect the peritoneal cavity, with the rectus sheath transitioning at the arcuate line of Douglas.',
        '১. পেটের প্রাচীরের নয়টি স্তর পেরিটোনিয়াল গহ্বরকে রক্ষা করে এবং ডগলাসের আর্কুয়েট রেখায় রেকটাস শিথের পেছনের গঠনে পরিবর্তন ঘটে।'
      ),
      l(
        '2. The 4 cm inguinal canal transmits the spermatic cord or round ligament, hosting indirect and direct hernia pathways.',
        '২. ৪ সেমি লম্বা ইনগুইনাল ক্যানাল স্পার্মাটিক কর্ড বা রাউন্ড লিগামেন্ট ধারণ করে এবং হার্নিয়ার প্রধান পথ তৈরি করে।'
      ),
      l(
        '3. The foramen of Winslow connects the greater and lesser sacs, transmitting the portal triad inside the hepatoduodenal ligament.',
        '৩. উইন্সলোর ছিদ্র বৃহত্তর ও ক্ষুদ্রতর থলিকে যুক্ত করে এবং হেপাটোডিউওডেনাল লিগামেন্টের ভেতর পোর্টাল ট্রায়াড বহন করে।'
      ),
      l(
        '4. Three unpaired splanchnic trunks (celiac, SMA, IMA) perfuse foregut, midgut, and hindgut derivatives through marginal anastomoses.',
        '৪. তিনটি একক ধমনী (সিলিয়াক, এসএমএ ও আইএমএ) মার্জিনাল রক্তনালী সংযোগের মাধ্যমে পরিপাকতন্ত্রে সুষম রক্তপ্রবাহ বজায় রাখে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 68-year-old male presents with a reducible bulge in his right groin that emerges directly forward through the abdominal wall medial to the inferior epigastric artery, within Hesselbach triangle. Which anatomical structure forms the primary floor through which this hernia protrudes?',
      '৬৮ বছর বয়সী একজন ব্যক্তির ডান কুঁচকিতে একটি ফোলা পিণ্ড দেখা গেল যা ইনফিরিয়র এপিগ্যাস্ট্রিক ধমনীর ভেতরের দিকে হেসেলব্যাখ ট্রায়াঙ্গল ঠেলে সরাসরি সামনের দিকে বের হয়ে আসে। কোন শারীরস্থানিক গঠনটি এই হার্নিয়া বের হওয়ার প্রধান মেঝে বা প্রাচীর তৈরি করে?'
    ),
    options: [
      l('Weakened transversalis fascia', 'দুর্বল হয়ে যাওয়া ট্রান্সভার্সালিস ফাসিয়া'),
      l('Deep inguinal ring', 'ডিপ ইনগুইনাল রিং'),
      l('Lacunar ligament of Gimbernat', 'গিম্বারনাটের ল্যাকুনার লিগামেন্ট'),
      l('External oblique aponeurosis', 'এক্সটারনাল অবলিক এপোনিউরোসিস'),
    ],
    correctIndex: 0,
    explanation: l(
      'A direct inguinal hernia protrudes directly forward through the posterior wall (floor) of the inguinal canal in Hesselbach (inguinal) triangle, located medial to the inferior epigastric vessels. The floor of this triangle is formed solely by the transversalis fascia (reinforced medially by the conjoint tendon). In older males, chronic intra-abdominal pressure and tissue degradation weaken the transversalis fascia, allowing abdominal contents to push a broad bulge forward without traversing the deep inguinal ring.',
      'ডিরেক্ট ইনগুইনাল হার্নিয়া ইনফিরিয়র এপিগ্যাস্ট্রিক রক্তনালীর ভেতরের হেসেলব্যাখ ট্রায়াঙ্গলের মেঝে ঠেলে সরাসরি সামনে বের হয়ে আসে। এই ট্রায়াঙ্গলের মেঝেটি মূলত তৈরি হয় ট্রান্সভার্সালিস ফাসিয়া দিয়ে। বয়স্ক ব্যক্তিদের ক্ষেত্রে দীর্ঘদিন কাশি বা প্রস্রাবের বাধার কারণে এই ফাসিয়া পর্দাটি দুর্বল হয়ে গেলে পেটের নাড়িভুঁড়ি ডিপ রিংয়ে না ঢুকেই সরাসরি এই পর্দা ঠেলে সামনে বের হয়ে আসে।'
    ),
  },
}
