import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch27',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 27: The Reproductive System',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-introduction',
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
  {
    id: 'junqueira-histology-16e',
    authors: 'A. L. Mescher',
    title: "Junqueira's Basic Histology: Text and Atlas, 16th edition",
    organization: 'McGraw-Hill Education',
    year: 2021,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3055',
  },
]

export const chapter14ReproductiveLesson: LessonTopic = {
  id: 'topic.anatomy.reproductive',
  slug: 'reproductive',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('14 · Reproductive Anatomy', '১৪ · প্রজননতন্ত্রের অ্যানাটমি'),
  summary: l(
    'A comprehensive, clinically rigorous study of the human male and female reproductive systems: gonadal descent and microarchitecture, spermatic cord layers, prostatic zonal anatomy, ovarian-uterine cycles, pelvic diaphragm dynamics, erectile neurobiology, and pelvic floor pathology.',
    'মানবদেহের পুরুষ ও স্ত্রী প্রজননতন্ত্রের বিশদ ও ক্লিনিক্যাল শারীরস্থানিক অধ্যয়ন: গোনাডের অবতরণ ও অণুগঠন, স্পার্মাটিক কর্ডের স্তরবিন্যাস, প্রোস্টেটের জোনাল অ্যানাটমি, ডিম্বাশয়-জরায়ুর চক্রীয় পরিবর্তন, পেলভিক ডায়াফ্রামের বলবিদ্যা, যৌন স্নায়ুবিজ্ঞান এবং পেলভিক ফ্লোরের রোগব্যাধি।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Contrast male and female gonadal microarchitecture (seminiferous tubules vs. ovarian follicular development) and trace gamete transport pathways.',
      'পুরুষ ও স্ত্রী জননগ্রন্থির অণুগঠন (শুক্রাণু উৎপাদক নালিকা বনাম ডিম্বাশয়ের ফলিকল বিকাশ) তুলনা করতে পারা এবং গ্যামেট পরিবহনের শারীরস্থানিক পথ চিহ্নিত করা।'
    ),
    l(
      'Map McNeal prostatic zones (transition, central, peripheral) and delineate their direct clinical correlations to benign prostatic hyperplasia versus adenocarcinoma.',
      'ম্যাকনিলের প্রোস্টেটিক জোনসমূহ (ট্রানজিশন, সেন্ট্রাল, পেরিফেরাল) মানচিত্রে চিহ্নিত করা এবং বিনাইন প্রোস্টেটিক হাইপারপ্লাসিয়া বনাম অ্যাডেনোকার্সিনোমার সাথে ক্লিনিক্যাল সম্পর্ক স্থাপন করা।'
    ),
    l(
      'Analyze the pelvic diaphragm (levator ani), perineal fascial spaces, and the autonomic neuroanatomy governing erection (parasympathetic S2–S4) and emission/ejaculation (sympathetic T11–L2).',
      'পেলভিক ডায়াফ্রাম (লিভেটর অ্যানাই), পেরিনিয়াল ফাসিয়ার স্তর এবং ইরেকশন (প্যারাসিমপ্যাথেটিক S2–S4) ও বীর্যপাত (সিমপ্যাথেটিক T11–L2) নিয়ন্ত্রণকারী স্বায়ত্তশাসিত স্নায়ুবিজ্ঞান বিশ্লেষণ করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.cardiovascular'],
  relatedTopicIds: ['topic.anatomy.cells-tissues'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch27', 'moore-anatomy-9e'],
    structure: ['openstax-ap2e-ch27', 'junqueira-histology-16e'],
    mechanism: ['guyton-hall-14e', 'openstax-ap2e-ch27'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'guyton-hall-14e'],
    takeaways: ['openstax-ap2e-ch27', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Gonadal Development & Scrotal Descent', 'ভূমিকা: গোনাডের বিকাশ ও স্ক্রোটামে অবতরণ'), sectionId: 'introduction' },
      { id: 'sec-male', label: l('Male Reproductive Organs & Prostatic Zones', 'পুরুষ প্রজনন অঙ্গ ও প্রোস্টেটিক জোনসমূহ'), sectionId: 'structure' },
      { id: 'sec-female', label: l('Female Reproductive Organs & Uterine Ligaments', 'স্ত্রী প্রজনন অঙ্গ ও জরায়ুর লিগামেন্ট'), sectionId: 'mechanism' },
      { id: 'sec-pelvic-floor', label: l('Pelvic Diaphragm, Perineum & Autonomic Neurobiology', 'পেলভিক ডায়াফ্রাম, পেরিনিয়াম ও স্বায়ত্তশাসিত স্নায়ু'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Gynecologic & Urologic Emergencies', 'ক্লিনিক্যাল স্ত্রীরোগ ও ইউরোলজিক্যাল জরুরি অবস্থা'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary & Reproductive Anatomy Glossary', 'সারসংক্ষেপ ও প্রজননতন্ত্রের শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('McNeal Prostatic Zonal Anatomy', 'ম্যাকনিল প্রোস্টেটিক জোনাল অ্যানাটমি'),
        definition: l(
          'Structural division of the prostate into three glandular zones: peripheral (70% volume, cancer origin), central (25%), and transition (5% volume, BPH origin).',
          'প্রোস্টেটের ৩টি জোন: পেরিফেরাল জোন (ক্যান্সারের উৎস), সেন্ট্রাল জোন এবং ট্রানজিশন জোন (প্রস্রাব আটকানো BPH-এর উৎস)।'
        ),
      },
      {
        term: l('Levator Ani Muscle Complex', 'লিভেটর অ্যানাই পেশী কমপ্লেক্স'),
        definition: l(
          'A broad muscular sheet forming the floor of the true pelvis (puborectalis, pubococcygeus, iliococcygeus) supporting pelvic viscera and preventing uterine prolapse.',
          'পেলভিসের মেঝের পেশীস্তর (পিউবোরেক্টালিস, পিউবোকক্সিজিয়াস, ইলিওকক্সিজিয়াস) যা জরায়ু ও মূত্রাশয়কে নিচে নামা থেকে রক্ষা করে।'
        ),
      },
      {
        term: l('Pampiniform Venous Plexus & Cooling', 'প্যাম্পিনিফর্ম ভেনাস প্লেক্সাস ও শীতলীকরণ'),
        definition: l(
          'Testicular veins acting as a countercurrent heat exchanger that cools arterial blood by 2–3°C, preserving the hypothermic scrotal microenvironment for spermatogenesis.',
          'টেস্টিসের ধমনীকে ঘিরে থাকা শিরার জালক যা রক্ত ঠাণ্ডা করে অণ্ডকোষের তাপমাত্রা ২-৩ ডিগ্রি কম রাখে যাতে সুস্থ শুক্রাণু তৈরি হতে পারে।'
        ),
      },
      {
        term: l('Uterine Broad and Cardinal Ligaments', 'জরায়ুর ব্রড ও কার্ডিনাল লিগামেন্ট'),
        definition: l(
          'Peritoneal and fascial supports of the internal female genitalia: cardinal ligaments provide primary support preventing uterine descent and transmit uterine vessels.',
          'স্ত্রী প্রজননতন্ত্রের প্রধান অবলম্বন যা জরায়ুকে শক্ত করে ধরে রাখে এবং এর মধ্য দিয়েই জরায়ুর প্রধান রক্তনালী প্রবাহিত হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Differentiating Acute Testicular Torsion from Epididymitis', 'তীব্র টেস্টিসের মোচড় বনাম এপিডিডাইমাইটিস পার্থক্যকরণ'),
        steps: [
          l('Step 1: In the "bell-clapper" deformity, the tunica vaginalis envelops testis completely, allowing it to rotate freely within the scrotum.', 'ধাপ ১: বেল-ক্ল্যাপার বিকৃতিতে অণ্ডকোষটি স্ক্রোটামে ঘণ্টার দোলকের মতো ঝুলে থাকে, যার ফলে এটি সহজে পেঁচিয়ে যেতে পারে।'),
          l('Step 2: Torsion twists the spermatic cord, immediately occluding veins and producing severe ischemia with loss of the cremasteric reflex (L1-L2).', 'ধাপ ২: মোচড় খেলে স্পার্মাটিক কর্ডের শিরাগুলো চেপে বন্ধ হয়ে রক্ত চলাচল বন্ধ হয় এবং ক্রিমাস্টেরিক রিফ্লেক্স হারিয়ে যায়।'),
          l('Step 3: Prehn sign: elevating scrotum relieves epididymitis pain (positive Prehn sign) but does not relieve or worsens pain in true torsion.', 'ধাপ ৩: অণ্ডকোষ ওপরে তুললে এপিডিডাইমাইটিসের ব্যথা কমে (পজিটিভ প্রেন সাইন), কিন্তু টরশনের তীব্র ব্যথা মোটেও কমে না।'),
        ],
        conclusion: l('Testicular torsion represents a 6-hour surgical emergency requiring immediate exploration and bilateral orchidopexy.', 'টেস্টিসের মোচড় হলো একটি ৬ ঘণ্টার জরুরি অবস্থা যেখানে অবিলম্বে অস্ত্রোপচার করে রক্তপ্রবাহ সচল করতে হয়।'),
      },
    ],
    checkpoints: [
      {
        question: l('Why does benign prostatic hyperplasia (BPH) cause early urinary hesitancy, whereas prostatic adenocarcinoma may remain asymptomatic for years?', 'BPH রোগ হলে শুরুতেই প্রস্রাব আটকে যায় কিন্তু প্রোস্টেট ক্যান্সারের ক্ষেত্রে অনেক দিন কোনো লক্ষণ থাকে না কেন?'),
        answer: l('BPH arises in the periurethral transition zone directly compressing the urethra. Adenocarcinoma originates in the outer peripheral zone distant from the urethra, growing silently.', 'BPH রোগটি মূত্রনালিকে ঘিরে থাকা ট্রানজিশন জোনে হয় যার ফলে প্রস্রাবের পথ বন্ধ হয়; কিন্তু ক্যান্সার পেছনের পেরিফেরাল জোনে হওয়ায় প্রস্রাবে সহজে বাধা পড়ে না।'),
      },
      {
        question: l('What anatomical danger must a surgeon strictly avoid when ligating the uterine artery during a hysterectomy?', 'জরায়ু অপসারণের অপারেশনে ইউটেরাইন ধমনী কাটার সময় সার্জনকে কোন সূক্ষ্ম নালির ব্যাপারে সতর্ক থাকতে হয়?'),
        answer: l('The ureter courses directly inferior to the uterine artery ("water under the bridge") within the cardinal ligament. Inadvertent clamping can crush or ligate the ureter, causing hydronephrosis.', 'ইউরেটারটি জরায়ুর ঠিক পাশে কার্ডিনাল লিগামেন্টের ভেতর ইউটেরাইন ধমনীর নিচ দিয়ে যায়; অসাবধানতাবশত ধমনীর সাথে ইউরেটার কেটে বা বেঁধে ফেললে কিডনি নষ্ট হতে পারে।'),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch14-reproductive-diagram',
    title: l('Interactive Reproductive Systems & Pelvic Architecture', 'ইন্টারেক্টিভ প্রজননতন্ত্র ও পেলভিক কাঠামো'),
    description: l(
      'Inspect the four primary anatomical compartments of human reproduction: the male gonadal and ductal tract, the prostatic zones, the female internal reproductive tract, and the supporting pelvic diaphragm.',
      'মানব প্রজননতন্ত্রের চারটি প্রধান শারীরস্থানিক অঞ্চল পরীক্ষা করুন: পুরুষ গোনাড ও শুক্রাণু পরিবহন পথ, প্রোস্টেটিক জোনসমূহ, স্ত্রী অভ্যন্তরীণ জননতন্ত্র এবং অবলম্বন প্রদানকারী পেলভিক ডায়াফ্রাম।'
    ),
    disclaimer: l(
      'Anatomical educational schematic: select any sector to review gametogenesis conduits, zonal prostatic pathology, uterine ligaments, and erectile neurovascular pathways.',
      'শিক্ষামূলক শারীরস্থানিক নকশা: গ্যামেট পরিবহন পথ, প্রোস্টেটের জোনভিত্তিক রোগ, জরায়ুর লিগামেন্ট এবং যৌন স্নায়ু-রক্তনালী পথসমূহ দেখতে যেকোনো অঞ্চল নির্বাচন করুন।'
    ),
    svgType: 'reproductive-system',
    items: [
      {
        id: 'male-tract',
        label: l('Testis, Epididymis & Spermatic Cord', 'টেস্টিস, এপিডিডাইমিস ও স্পার্মাটিক কর্ড'),
        description: l(
          'Sperm factory and transit conduit. Testis contains 250 lobules of seminiferous tubules (Sertoli & Leydig cells). Epididymis spans 6 m of convoluted tubule for sperm maturation.',
          'শুক্রাণু উৎপাদন ও পরিবহন পথ। টেস্টিসে ২৫০টি লোবিউলে পেঁচানো নালিকা থাকে যেখানে সারটলি ও লেডিগ কোষ শুক্রাণু ও টেস্টোস্টেরন তৈরি করে। এপিডিডাইমিসে শুক্রাণুর সক্ষমতা বৃদ্ধি পায়।'
        ),
        details: l(
          'Spermatic cord layers derived from anterior abdominal wall: internal spermatic fascia (transversalis), cremasteric fascia (internal oblique), external spermatic fascia (external oblique).',
          'স্পার্মাটিক কর্ডের তিনটি প্রতিরক্ষামূলক স্তর পেটের প্রাচীর থেকে তৈরি হয়: ইন্টারনাল স্পার্মাটিক, ক্রিমাস্টেরিক এবং এক্সটার্নাল স্পার্মাটিক ফাসিয়া।'
        ),
        sectionId: 'structure',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'prostate-zones',
        label: l('Prostate Gland & Zonal Microanatomy', 'প্রোস্টেট গ্রন্থি ও জোনাল অণুগঠন'),
        description: l(
          'Accessory male sex gland producing 30% of seminal plasma. Divided into McNeal zones: peripheral (cancer origin), central, and transition (BPH origin surrounding urethra).',
          'পুরুষ প্রজনন গ্রন্থি যা বীর্যরসের ৩০% তৈরি করে। ম্যাকনিলের তিনটি জোন: পেরিফেরাল জোন (ক্যান্সারের উৎস), সেন্ট্রাল জোন এবং ট্রানজিশন জোন (প্রস্রাব আটকানো BPH-এর উৎস)।'
        ),
        details: l(
          'Prostatic venous plexus communicates with the valveless Batson vertebral venous plexus, explaining why prostate adenocarcinoma preferentially metastasizes to the spine.',
          'প্রোস্টেটের শিরাগুলো ভালভবিহীন ব্যাটসনের মেরুদণ্ডীয় শিরার সাথে যুক্ত থাকে, যে কারণে প্রোস্টেট ক্যান্সার সহজেই মেরুদণ্ডের হাড়ে ছড়িয়ে পড়ে।'
        ),
        sectionId: 'structure',
        color: '#fecdd3',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'female-tract',
        label: l('Ovaries, Uterus & Broad Ligaments', 'ডিম্বাশয়, জরায়ু ও ব্রড লিগামেন্ট'),
        description: l(
          'Female reproductive apparatus. Ovaries mature follicles. Fallopian tubes feature fimbriae, ampulla (fertilization site), and isthmus. Uterus has thick muscular myometrium.',
          'স্ত্রী জননতন্ত্র। ডিম্বাশয়ে ডিম্বাণু পরিণত হয়। ফ্যালোপিয়ান নালির অ্যাম্পুলা হলো শুক্রাণু ও ডিম্বাণুর মিলনের (নিষেকের) মূল স্থান। জরায়ু ভ্রূণ ধারণ ও পুষ্টি জোগায়।'
        ),
        details: l(
          'Cardinal and uterosacral ligaments provide primary support against uterine descent. Blood supply from uterine artery anastomosing with ovarian artery in broad ligament.',
          'কার্ডিনাল ও ইউটেরোস্যাক্রাল লিগামেন্ট জরায়ুকে শক্ত করে ধরে রাখে। ব্রড লিগামেন্টে ইউটেরাইন ও ওভারিয়ান ধমনী মিলিত হয়ে রক্ত সঞ্চালন নিশ্চিত করে।'
        ),
        sectionId: 'mechanism',
        color: '#fed7aa',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'pelvic-floor',
        label: l('Pelvic Diaphragm & Perineal Neurovasculature', 'পেলভিক ডায়াফ্রাম ও পেরিনিয়াল স্নায়ুজালিকা'),
        description: l(
          'Muscular basin of the pelvis: levator ani (puborectalis, pubococcygeus, iliococcygeus). Perineal membrane separates deep and superficial perineal pouches.',
          'পেলভিসের পেশীবহুল মেঝের লিভেটর অ্যানাই পেশী অঙ্গগুলোকে নিচের দিকে খসে পড়া থেকে রক্ষা করে। পেরিনিয়াল মেমব্রেন প্রস্রাব ও যৌন অঙ্গের অবস্থান সুদৃঢ় রাখে।'
        ),
        details: l(
          'Pudendal nerve (S2–S4) exits greater sciatic foramen, hooks around ischial spine, enters Alcock canal in ischioanal fossa to supply external sphincters and perineal skin.',
          'পুডেন্ডাল স্নায়ু (S2–S4) অ্যালককের ক্যানাল দিয়ে প্রবাহিত হয়ে মলদ্বার ও মূত্রনালির ঐচ্ছিক স্ফিংক্টার এবং জননাঙ্গের চামড়ার সংবেদনশীলতা নিয়ন্ত্রণ করে।'
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
          heading: l('Gonadal Origin and the Male Reproductive System', 'জননগ্রন্থির উৎপত্তি ও পুরুষ প্রজননতন্ত্র'),
          paragraphs: [
            l(
              'The male reproductive system is specialized to produce, nourish, and deliver male gametes (spermatozoa) and synthesize androgenic hormones, primarily testosterone. The paired testes originate in the retroperitoneal lumbar region during fetal development and descend through the anterior abdominal wall via the inguinal canals into the scrotum, arriving by the end of the eighth gestational month. This descent is critical because normal spermatogenesis requires a cooler environment (approximately 34°C).',
              'পুরুষ প্রজননতন্ত্রের প্রধান কাজ হলো পুরুষ গ্যামেট (শুক্রাণু) তৈরি করা, পুষ্টি জোগানো এবং টেস্টোস্টেরন হরমোন নিঃসরণ করা। ভ্রূণ অবস্থায় পেটের পেছনে থাকা অণ্ডকোষ বা টেস্টিস গর্ভকালীন অষ্টম মাসের মধ্যে ইঙ্গুইনাল ক্যানাল দিয়ে স্ক্রোটামে বা অণ্ডথলিতে নেমে আসে। এই অবতরণ অত্যন্ত গুরুত্বপূর্ণ, কারণ শুক্রাণু তৈরির জন্য শরীরের স্বাভাবিক তাপমাত্রার চেয়ে প্রায় ২ থেকে ৩ ডিগ্রি সেলসিয়াস কম তাপমাত্রা প্রয়োজন হয়।'
            ),
            l(
              'Each testis is encapsulated by a tough fibrous capsule called the tunica albuginea, which sends septa dividing the interior into roughly 250 pyramidal lobules. Within each lobule lie one to four tightly coiled seminiferous tubules where spermatogenesis takes place, orchestrated by supportive Sertoli cells and steroid-producing Leydig (interstitial) cells. Spermatozoa flow into the rete testis and efferent ductules to reach the comma-shaped epididymis on the posterior testicular margin.',
              'প্রতিটি টেস্টিস টিউনিকা অ্যালবুজিনিয়া নামক একটি শক্ত তন্তুময় ক্যাপসুল দ্বারা আবৃত থাকে যা ভেতরের অংশকে প্রায় ২৫০টি ছোট খণ্ডে বিভক্ত করে। প্রতিটি খণ্ডে এক থেকে চারটি অত্যন্ত পেঁচানো শুক্রাণু উৎপাদক নালিকা থাকে যেখানে সারটলি কোষের সহায়তায় শুক্রাণু তৈরি হয় এবং মধ্যবর্তী লেডিগ কোষ থেকে টেস্টোস্টেরন হরমোন নিঃসৃত হয়। উৎপাদিত শুক্রাণুগুলো পরিপক্ব হওয়ার জন্য টেস্টিসের পেছনে থাকা এপিডিডাইমিসে জমা হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Spermatic Cord Envelopes and Prostatic Architecture', 'স্পার্মাটিক কর্ডের স্তর ও প্রোস্টেটের গঠন'),
          paragraphs: [
            l(
              'As the testis descends into the scrotum, it evaginates the layers of the anterior abdominal wall, acquiring three concentric protective sheaths forming the spermatic cord: the internal spermatic fascia (from transversalis fascia), the middle cremasteric fascia and muscle (from internal oblique), and the external spermatic fascia (from external oblique aponeurosis). The spermatic cord transmits the ductus deferens, testicular artery, pampiniform venous plexus, and genital branch of the genitofemoral nerve.',
              'স্ক্রোটামে নামার সময় অণ্ডকোষ পেটের প্রাচীরের স্তরগুলোকে সাথে নিয়ে নামে যা স্পার্মাটিক কর্ডের তিনটি আবরণ তৈরি করে: ইন্টারনাল স্পার্মাটিক ফাসিয়া, ক্রিমাস্টেরিক পেশীস্তর এবং এক্সটার্নাল স্পার্মাটিক ফাসিয়া। এই কর্ডটি শুক্রনালি, টেস্টিসের ধমনী, প্যাম্পিনিফর্ম শিরা এবং স্নায়ু বহন করে।'
            ),
            l(
              'The prostate gland is an inverted cone-shaped fibromuscular and glandular organ situated at the neck of the urinary bladder surrounding the prostatic urethra. It secretes a thin, milky fluid contributing roughly 30% of total seminal volume, rich in citric acid, zinc, and prostate-specific antigen (PSA), an enzyme that liquefies coagulated semen to liberate motile spermatozoa.',
              'প্রোস্টেট হলো মূত্রথলির ঠিক নিচে মূত্রনালিকে ঘিরে থাকা একটি মোচাকৃতির গ্রন্থি। এটি বীর্যরসের প্রায় ৩০ শতাংশ তৈরি করে যাতে সাইট্রিক এসিড, দস্তা এবং পিএসএ (PSA) এনজাইম থাকে যা বীর্যকে তরল করে শুক্রাণুকে মুক্তভাবে সাঁতার কাটতে সাহায্য করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Female Internal Reproductive Tract and Ovarian Follicles', 'স্ত্রী অভ্যন্তরীণ জননতন্ত্র এবং ডিম্বাশয়ের ফলিকল'),
          paragraphs: [
            l(
              'The female reproductive system is anatomically tailored for oocyte genesis, fertilization, blastocyst implantation, fetal gestation, and parturition. The primary female gonads, the ovaries, lie in the ovarian fossae on the lateral pelvic walls, suspended by the mesovarium of the broad ligament and the suspensory ligament of the ovary. The ovarian cortex contains thousands of primordial follicles embedded in dense cellular stroma, which mature under cyclic pituitary FSH and LH stimulation.',
              'স্ত্রী প্রজননতন্ত্র ডিম্বাণু উৎপাদন, নিষেক, ভ্রূণ ধারণ, গর্ভধারণ এবং সন্তান প্রসবের জন্য বিশেষভাবে তৈরি। পেলভিসের দুই পাশে অবস্থিত দুটি ডিম্বাশয় ব্রড লিগামেন্ট এবং সাসপেনসরি লিগামেন্ট দ্বারা সংযুক্ত থাকে যা ডিম্বাশয়ের রক্তনালী ও স্নায়ু বহন করে। ডিম্বাশয়ের কর্টেক্সে হাজার হাজার আদিম ফলিকল থাকে যা প্রতি মাসে হরমোনের প্রভাবে বৃদ্ধি পেয়ে পরিণত ডিম্বাণুতে রূপান্তরিত হয়।'
            ),
            l(
              'Adjacent to each ovary are the uterine (fallopian) tubes, which extend laterally from the uterine horns. Each tube comprises four segments: the trumpet-shaped infundibulum with mobile fimbriae sweeping over the ovary; the wide ampulla where fertilization typically occurs; the narrow isthmus; and the intramural segment traversing the uterine wall. Ciliated epithelial cells within the tubal mucosa generate fluid currents that propel the ovulated oocyte toward the uterine cavity.',
              'ডিম্বাশয়ের পাশে থাকা ফ্যালোপিয়ান নালির চারটি অংশ রয়েছে: আঙ্গুলের মতো প্রান্তযুক্ত ফানেল আকৃতির ইনফান্ডিবুলাম যা ডিম্বাণু গ্রহণ করে, প্রশস্ত অ্যাম্পুলা যেখানে সাধারণত শুক্রাণু ও ডিম্বাণুর মিলন বা নিষেক ঘটে, সরু ইস্থমাস এবং জরায়ুর প্রাচীরের ভেতরের অংশ। নালির সিলিয়াযুক্ত কোষগুলো ডিম্বাণুকে জরায়ুর দিকে ঠেলে নিয়ে যায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Uterine Bed, Endometrial Cycles and Pelvic Supports', 'জরায়ুর শয্যা, এন্ডোমেট্রিয়াল চক্র ও পেলভিক বন্ধনী'),
          paragraphs: [
            l(
              'The uterus is a thick-walled pear-shaped organ consisting of a superior fundus, an expansive body (corpus), and an inferior cylindrical cervix projecting into the vagina. Its wall comprises three layers: the inner cyclical endometrium (subdivided into the functional stratum functionalis shed during menstruation and the regenerating stratum basale), the thick smooth-muscle myometrium, and the outer peritoneal perimetrium.',
              'জরায়ু হলো একটি পুরু পেশীবহুল নাশপাতি আকৃতির অঙ্গ যা ফান্ডাস, দেহ ও সার্ভিক্স নিয়ে গঠিত। এর প্রাচীরে তিনটি স্তর থাকে: ভেতরের এন্ডোমেট্রিয়াম যা প্রতি মাসে মাসিকের সময় ঝরে পড়ে এবং পুনরায় গজায়, মাঝের শক্তিশালী মসৃণ পেশীর মায়োমেট্রিয়াম এবং বাইরের পেরিটোনিয়াল পেরিমেট্রিয়াম।'
            ),
            l(
              'The anatomical position of the uterus is normally anteverted (tipped forward relative to the vaginal axis) and anteflexed (bent forward over the superior bladder dome). This orientation is maintained by endopelvic fascial ligaments: the broad ligament, the round ligaments anchoring the horns to the labia majora through the inguinal canals, and the cardinal and uterosacral ligaments anchoring the cervix to the pelvic walls.',
              'জরায়ুটি স্বাভাবিক অবস্থায় সামনের দিকে মূত্রথলির ওপর বাঁকানো (Anteverted & Anteflexed) থাকে। এই অবস্থান রক্ষা করে ব্রড লিগামেন্ট, রাউন্ড লিগামেন্ট, কার্ডিনাল লিগামেন্ট এবং স্যাক্রামের সাথে যুক্ত ইউটেরোস্যাক্রাল লিগামেন্ট।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Gynecologic Emergencies: Ectopic Pregnancy and Prolapse', 'ক্লিনিক্যাল স্ত্রীরোগের জরুরি অবস্থা: এক্টোপিক প্রেগন্যান্সি ও প্রোল্যাপস'),
          paragraphs: [
            l(
              'Tubal ectopic pregnancy occurs in approximately 1 to 2% of gestations when a fertilized blastocyst implants outside the uterine cavity, most commonly (over 80%) within the ampulla of the fallopian tube. As the trophoblast invades the thin, non-decidualized tubal wall, erosion of tubal branches of the ovarian and uterine arteries precipitates acute tubal rupture, presenting with sudden-onset severe unilateral iliac fossa pain and life-threatening hemoperitoneum.',
              'এক্টোপিক প্রেগন্যান্সিতে নিষিক্ত ডিম্বাণু জরায়ুর বাইরে (৮০% ক্ষেত্রে ফ্যালোপিয়ান টিউবের অ্যাম্পুলায়) প্রতিস্থাপিত হয়। ভ্রূণ বড় হলে পাতলা নালিটি ফেটে গিয়ে পেটের ভেতর তীব্র রক্তক্ষরণ ঘটায় যা তাৎক্ষণিক অপারেশন ছাড়া রোগীর মৃত্যু ঘটাতে পারে।'
            ),
            l(
              'Pelvic organ prolapse (POP) manifests when prolonged vaginal delivery, chronic intra-abdominal pressure, or hypoestrogenic menopause weakens the levator ani muscle and stretches the cardinal and uterosacral ligaments. Descent of the anterior vaginal wall presents as a cystocele (bladder herniation), posterior wall as a rectocele, and central descent as progressive uterine procidentia protruding past the introitus.',
              'স্বাভাবিক সন্তান প্রসবের আঘাত বা বার্ধক্যে পেলভিক ডায়াফ্রাম পেশী ও লিগামেন্টগুলো আলগা হয়ে গেলে জরায়ু নিচে নেমে আসে। সামনের দেয়াল নামলে মূত্রাশয় নিচে নেমে সিস্টোসিল হয়, পেছনের দেয়াল নামলে রেক্টোসিল হয় এবং পুরো জরায়ু বাইরে বের হয়ে আসলে প্রসিডেনশিয়া তৈরি হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary and Reproductive Anatomy Glossary', 'সারসংক্ষেপ ও প্রজননতন্ত্রের শব্দকোষ'),
          paragraphs: [
            l(
              'Reproductive anatomy unites gonadal gametogenesis with endocrine steroidogenesis, internal ductal transit systems, and the biomechanics of the pelvic floor. Precise mastery of prostatic zonal anatomy, uterine ligamentous anchors, and autonomic neurovascular pathways provides the essential foundation for urology, obstetrics, gynecology, and surgical oncology.',
              'প্রজননতন্ত্র গোনাডের গ্যামেট তৈরির সাথে হরমোন নিঃসরণ, নালিপথ এবং পেলভিক মেঝের পেশীর সমন্বয় সাধন করে। প্রোস্টেটের জোন, জরায়ুর লিগামেন্ট এবং যৌন স্নায়ুর জ্ঞান ইউরোলজি ও স্ত্রীরোগ চিকিৎসার জন্য অপরিহার্য।'
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
          heading: l('Embryological Sex Differentiation and Mesonephric/Paramesonephric Ducts', 'ভ্রূণীয় যৌন রূপান্তর এবং ওলফিয়ান ও মুলারিয়ান নালি'),
          paragraphs: [
            l(
              'Until the sixth week of human gestation, the developing embryo is morphologically bipotential, bearing indifferent gonads alongside two paired ductal systems: the mesonephric (Wolffian) ducts and the paramesonephric (Müllerian) ducts. In genetic males (46,XY), the SRY gene on the Y chromosome drives testicular determination, leading Sertoli cells to secrete Anti-Müllerian Hormone (AMH), which induces regression of the paramesonephric ducts.',
              'গর্ভকালীন ষষ্ঠ সপ্তাহ পর্যন্ত মানব ভ্রূণের লিঙ্গ রূপান্তরহীন থাকে এবং এতে মেসোনেফ্রিক (ওলফিয়ান) ও প্যারামেসোনেফ্রিক (মুলারিয়ান) উভয় নালিই উপস্থিত থাকে। পুরুষ ভ্রূণে (46,XY) এসআরওয়াই (SRY) জিনের কারণে অণ্ডকোষ তৈরি হয় এবং সারটলি কোষ থেকে এএমএইচ হরমোন নিঃসৃত হয়ে মুলারিয়ান নালিকে ধ্বংস করে দেয়।'
            ),
            l(
              'Simultaneously, fetal Leydig cells synthesize testosterone, stabilizing the mesonephric ducts to differentiate into the epididymides, ductus deferentia, and seminal vesicles, while 5-alpha-dihydrotestosterone (DHT) virilizes the external genitalia. In genetic females (46,XX), the absence of SRY and AMH allows the paramesonephric ducts to persist and fuse in the midline, forming the fallopian tubes, uterus, and upper two-thirds of the vagina, while mesonephric ducts degenerate.',
              'লেডিগ কোষের টেস্টোস্টেরন মেসোনেফ্রিক নালিকে বাঁচিয়ে রেখে এপিডিডাইমিস ও শুক্রনালি বানায়। পক্ষান্তরে নারী ভ্রূণে (46,XX) এই হরমোনগুলো না থাকায় মুলারিয়ান নালি দুটি জোড়া লেগে ফ্যালোপিয়ান টিউব, জরায়ু এবং যোনিপথের ওপরের অংশ গঠন করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('McNeal Prostatic Zonal Architecture and Cancer Pathology', 'ম্যাকনিল প্রোস্টেটিক জোনাল গঠন ও ক্যান্সার প্যাথোলজি'),
          paragraphs: [
            l(
              'In clinical urology, the prostate gland is partitioned according to John McNeal authoritative zonal architecture into four distinct histomorphological regions: the peripheral zone, the central zone, the transition zone, and the anterior fibromuscular stroma. Each zone possesses distinct ductal architectures, embryological origins, and susceptibility to pathological processes.',
              'ক্লিনিক্যাল ইউরোলজিতে প্রোস্টেট গ্রন্থিকে জন ম্যাকনিলের আধুনিক জোনাল আর্কিটেকচার অনুযায়ী মূল্যায়ন করা হয়: পেরিফেরাল জোন, সেন্ট্রাল জোন, ট্রানজিশন জোন এবং অ্যান্টিরিয়র ফাইব্রোমাসকিউলার স্ট্রোমা। প্রতিটি জোনের নিজস্ব গঠন এবং রোগের ঝুঁকি ভিন্ন ভিন্ন।'
            ),
            l(
              'The peripheral zone constitutes 70% of normal glandular volume, occupying the posterior and apical aspects of the organ; it is the origin site for 70 to 80% of all prostatic adenocarcinomas and is directly palpable during digital rectal examination (DRE). In contrast, the transition zone comprises only 5% of glandular mass in young males surrounding the preprostatic urethra, but undergoes nodular hyperplasia in older men, giving rise to benign prostatic hyperplasia (BPH) and urinary retention.',
              'পেরিফেরাল জোনটি প্রোস্টেটের ৭০ শতাংশ আয়তন নিয়ে গঠিত এবং পেছনের অংশে অবস্থিত; ৭০ থেকে ৮০ শতাংশ প্রোস্টেট ক্যান্সার এই জোনেই তৈরি হয় এবং মলদ্বারে আঙ্গুল দিয়ে সহজেই এই অংশ পরীক্ষা করা যায়। অন্যদিকে ট্রানজিশন জোনটি মূত্রনালির চারপাশে থাকে এবং বার্ধক্যে হরমোনের প্রভাবে ফুলে গিয়ে প্রস্রাবের পথ বন্ধ করে দেয় (BPH রোগ)।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Spermatogenesis and the Blood-Testis Barrier', 'শুক্রাণু জনন এবং রক্ত-অণ্ডকোষ প্রাচীর'),
          paragraphs: [
            l(
              'Spermatogenesis is the continuous developmental cascade through which diploid spermatogonia undergo meiotic reduction and spermiogenesis into flagellated haploid spermatozoa within the seminiferous epithelium. This process requires approximately 64 days and is supported by columnar Sertoli cells, which extend from the basal lamina to the tubular lumen, enveloping developing germ cells with lateral cytoplasmic processes.',
              'শুক্রাণু উৎপাদন হলো এমন এক অবিচ্ছিন্ন কোষ বিভাজন যার মাধ্যমে পেঁচানো নালিকায় ডিপ্লয়েড কোষ থেকে হ্যাপ্লয়েড শুক্রাণু তৈরি হয়। প্রায় ৬৪ দিন সময় লাগা এই প্রক্রিয়ায় সারটলি কোষগুলো শুক্রাণুকে পুষ্টি ও সংকেত দিয়ে পূর্ণতা দান করে।'
            ),
            l(
              'Adjacent Sertoli cells are interconnected by specialized tight junctions (zonulae occludentes), forming the physiologically vital blood-testis barrier (BTB). The BTB partitions the seminiferous epithelium into a basal compartment (housing spermatogonia) and an adluminal compartment (housing meiotic spermatocytes and spermatids). This barrier sequesters haploid post-meiotic germ cells from circulating immune surveillance, preventing autoimmune orchitis.',
              'সারটলি কোষগুলোর মধ্যকার টাইট জাংশন এক অভেদ্য রক্ত-অণ্ডকোষ প্রাচীর (BTB) তৈরি করে। এই প্রাচীর হ্যাপ্লয়েড শুক্রাণুগুলোকে রক্তের শ্বেতকণিকা থেকে আড়াল করে রাখে, ফলে শরীরের নিজস্ব রোগ প্রতিরোধ ব্যবস্থা ভুলবশত শুক্রাণুগুলোকে শত্রু মনে করে ধ্বংস করতে পারে না।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Levator Ani Complex and Perineal Fascial Spaces', 'লিভেটর অ্যানাই কমপ্লেক্স এবং পেরিনিয়াল ফাসিয়ার স্তর'),
          paragraphs: [
            l(
              'The pelvic diaphragm forms a broad muscular partition separating the true pelvic cavity above from the perineum below. It is dominated by the levator ani, a tripartite muscle sheet comprising the puborectalis, pubococcygeus, and iliococcygeus. The puborectalis forms a continuous muscular U-shaped sling around the anorectal junction, maintaining the acute anorectal angle (approx. 80°) that provides mechanical fecal continence.',
              'পেলভিক ডায়াফ্রাম হলো একটি ফানেল আকৃতির পেশীবহুল বিভাজক যা ওপরের পেলভিক গহ্বরকে নিচের পেরিনিয়াম থেকে আলাদা করে। এর মূল অংশ লিভেটর অ্যানাই (পিউবোরেক্টালিস, পিউবোকক্সিজিয়াস, ইলিওকক্সিজিয়াস)। পিউবোরেক্টালিস পেশীটি মলাশয়ের চারপাশে একটি ইউ-আকৃতির দোলনা তৈরি করে মলাশয় ও পায়ুপথের মধ্যবর্তী কোণকে বাঁকা রাখে, যা মল আটকে রাখতে অপরিহার্য।'
            ),
            l(
              'Inferior to the pelvic diaphragm lies the wedge-shaped ischioanal fossa, filled with compliant adipose tissue that allows lateral expansion of the anal canal during defecation. Embedded in the lateral fascial wall of this fossa is the pudendal (Alcock) canal, which transmits the pudendal nerve (S2–S4) and internal pudendal vessels as they course toward the perineum, giving off the inferior rectal, perineal, and dorsal genital branches.',
              'পেলভিক ডায়াফ্রামের নিচে চর্বিপূর্ণ ইস্কিওঅ্যানাল ফোসা থাকে যা মলত্যাগের সময় পায়ুপথকে প্রসারিত হতে দেয়। এর পাশের প্রাচীরে অ্যালককের পুডেন্ডাল ক্যানাল থাকে, যার মধ্য দিয়ে পুডেন্ডাল স্নায়ু (S2–S4) এবং রক্তনালী প্রবাহিত হয়ে বহিরাঙ্গ ও স্ফিংক্টার পেশীগুলোতে সংকেত পাঠায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Pudendal Nerve Entrapment and Obstetric Perineal Lacerations', 'পুডেন্ডাল স্নায়ু চাপ এবং প্রসবকালীন পেরিনিয়াল ক্ষত'),
          paragraphs: [
            l(
              'The pudendal nerve (S2–S4) exits the pelvic cavity through the greater sciatic foramen, crosses posterior to the ischial spine and sacrospinous ligament, and re-enters the pelvis through the lesser sciatic foramen into the pudendal canal. Chronic compression between the sacrotuberous and sacrospinous ligaments (Alcock canal syndrome) produces agonizing neuropathic burning perineal pain worsened by sitting.',
              'পুডেন্ডাল স্নায়ু পেলভিস থেকে বের হয়ে ইশকিয়াল স্পাইন ও লিগামেন্ট ঘুরে পুনরায় অ্যালককের ক্যানালে ঢোকে। এই লিগামেন্টগুলোর মাঝে স্নায়ুটি চেপে গেলে বসলে তীব্র জ্বালাপোড়া ব্যথার সৃষ্টি হয় যাকে অ্যালকক ক্যানাল সিন্ড্রোম বলে।'
            ),
            l(
              'During vaginal delivery, extreme crowning of the fetal head stretches the perineal body. Third- and fourth-degree perineal lacerations tear the external anal sphincter and rectal mucosa, requiring meticulous multi-layered surgical repair of the internal and external anal sphincters to prevent life-threatening post-partum fecal incontinence.',
              'স্বাভাবিক সন্তান প্রসবের সময় বাচ্চার মাথা বের হওয়ার সময় পেরিনিয়াল বডি অতিরিক্ত প্রসারিত হয়ে ছিঁড়ে যেতে পারে। তৃতীয় বা চতুর্থ মাত্রার ক্ষতে পায়ুপথের স্ফিংক্টার পেশী ছিঁড়ে যায়, যা সাবধানে সেলাই না করলে প্রসবোত্তর মল নিয়ন্ত্রণ চিরতরে নষ্ট হয়ে যেতে পারে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Autonomic Regulation of Erectile and Ejaculatory Function', 'যৌন ক্রিয়া এবং ইরেকশন ও বীর্যপাতের অটোনোমিক নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Penile and clitoral erection is mediated by parasympathetic postganglionic fibers arising from the pelvic splanchnic nerves (S2–S4 via the prostatic/vaginal plexus). Acetylcholine and nitric oxide (NO) stimulate cyclic GMP production, relaxing smooth muscle in the helicine arteries and corpora cavernosa, engorging sinusoidal spaces and compressing emissary veins against the tunica albuginea.',
              'যৌন অঙ্গের উত্থান (ইরেকশন) মূলত S2–S4 প্যারাসিমপ্যাথেটিক স্নায়ুর নির্দেশনায় নাইট্রিক অক্সাইড (NO) নিঃসরণের মাধ্যমে ঘটে, যা রক্তনালী প্রসারিত করে ক্যাভারনোসা টিস্যুতে প্রচুর রক্ত ঢুকিয়ে দেয় এবং শিরাগুলোকে চেপে রক্ত ভেতরে আটকে রাখে।'
            ),
            l(
              'Emission and ejaculation are driven by sympathetic outflow from T11–L2 via the hypogastric nerves. Sympathetic stimulation contracts smooth muscle in the epididymis, ductus deferens, seminal vesicles, and prostate, expelling seminal fluid into the posterior urethra while closing the internal urethral sphincter to prevent retrograde ejaculation, followed by rhythmic bulbospongiosus contractions via the somatic pudendal nerve.',
              'বীর্যপাত নিয়ন্ত্রিত হয় T11 থেকে L2 সিমপ্যাথেটিক স্নায়ুর মাধ্যমে। এই স্নায়ু সংকেত শুক্রনালি ও প্রোস্টেট সংকুচিত করে বীর্যকে মূত্রনালিতে পাঠায় এবং একই সাথে মূত্রথলির মুখ বন্ধ করে দেয় যাতে বীর্য উল্টো না যায়, এরপর পুডেন্ডাল স্নায়ু পেশী সংকুচিত করে বীর্যপাত সম্পন্ন করে।'
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
          heading: l('Nerve-Sparing Radical Prostatectomy and Potency Preservation', 'স্নায়ু-সংরক্ষণকারী প্রোস্টেটেক্টমি এবং যৌন ক্ষমতা রক্ষা'),
          paragraphs: [
            l(
              'In radical prostatectomy for localized adenocarcinoma, maintaining post-operative erectile potency requires preservation of the delicate cavernous nerves. These parasympathetic fibers originate from the inferior hypogastric plexus and travel along the posterolateral aspect of the prostatic capsule within the neurovascular bundles at roughly the 5-o-clock and 7-o-clock positions.',
              'প্রোস্টেট ক্যান্সারের অপারেশনে যৌন উত্থান ক্ষমতা রক্ষা করতে ক্যাভারনাস স্নায়ুগুলো অক্ষত রাখা অপরিহার্য। এই প্যারাসিমপ্যাথেটিক তন্তুগুলো প্রোস্টেট ক্যাপসুলের পেছনের বাইরের দিকে ঘড়ির ৫টা ও ৭টার কোণে নিউরোভাস্কুলার বান্ডেলের ভেতর দিয়ে প্রবাহিত হয়।'
            ),
            l(
              'Laparoscopic and robotic-assisted techniques utilize high-magnification visualization to perform an intrafascial or interfascial dissection, peeling the neurovascular bundles away from the prostatic capsule without thermal electrocautery injury. This nerve-sparing approach preserves erectile recovery in over 70% of carefully selected young patients.',
              'আধুনিক রোবোটিক অপারেশনে অত্যন্ত সূক্ষ্মভাবে কোনো তাপীয় ক্ষতি না করে এই স্নায়ুজালিকাটি প্রোস্টেট থেকে আলাদা করে বাঁচিয়ে রাখা হয়, যার ফলে অপারেশনের পরও ৭০ শতাংশের বেশি রোগীর স্বাভাবিক যৌন ক্ষমতা অক্ষত থাকে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Radical Hysterectomy and Surgical Planes of the Pelvic Retroperitoneum', 'র‌্যাডিক্যাল হিস্টেরেক্টমি এবং পেলভিক রেট্রোপেরিটোনিয়ামের সার্জিক্যাল তল'),
          paragraphs: [
            l(
              'Radical hysterectomy (Wertheim-Meigs procedure) for invasive cervical carcinoma demands complete unroofing of the ureters through the paracervical tunnels within the transverse cervical (cardinal) ligaments. The ureter courses directly inferior to the uterine artery ("water under the bridge") roughly 1.5 cm lateral to the supravaginal cervix.',
              'সারভাইকাল ক্যান্সারের র‌্যাডিক্যাল হিস্টেরেক্টমি অপারেশনে কার্ডিনাল লিগামেন্টের ভেতর থেকে ইউরেটারকে সম্পূর্ণ মুক্ত করতে হয়। ইউরেটারটি জরায়ুর ঠিক পাশে ইউটেরাইন ধমনীর নিচ দিয়ে প্রবাহিত হয় (যেন সেতুর নিচে পানি)।'
            ),
            l(
              'Surgical dissection must sharply separate the ureter from the uterine artery without stripping the adventitial ureteric blood supply derived from the common iliac, internal iliac, and uterine vessels. Overly aggressive skeletonization devascularizes the ureteral wall, causing delayed ischemic necrosis, sloughing, and ureterovaginal fistula formation on postoperative days 7 to 14.',
              'ইউরেটারের চারপাশের নিজস্ব রক্তনালী অক্ষত রেখে এই অপারেশন সম্পন্ন করতে হয়; অতিরিক্ত চেঁছে ফেললে ইউরেটারের প্রাচীর রক্তহীন হয়ে পচে যায় এবং যোনিপথে প্রস্রাব চুইয়ে পড়ার মারাত্মক ফিস্টুলা তৈরি হতে পারে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-part schematic of human reproductive architecture: gonadal microenvironment, ductal gamete transit, secondary glandular secretions, and the supporting pelvic diaphragm.',
      'মানব প্রজনন কাঠামোর ৪টি সহজলভ্য স্তর: জননগ্রন্থির অণুগঠন, গ্যামেট পরিবহন নালি, সহায়ক গ্রন্থির ক্ষরণ এবং পেলভিক ডায়াফ্রাম।'
    ),
    steps: [
      l(
        '1. Testes and ovaries produce haploid gametes through meiosis under pituitary gonadotropin regulation.',
        '১. পিটুইটারি হরমোনের প্রভাবে অণ্ডকোষ ও ডিম্বাশয়ে মিয়োসিস বিভাজনের মাধ্যমে হ্যাপ্লয়েড শুক্রাণু ও ডিম্বাণু তৈরি হয়।'
      ),
      l(
        '2. Ductus deferens and uterine tubes actively transport mature gametes via smooth muscle peristalsis.',
        '২. শুক্রনালি ও ফ্যালোপিয়ান টিউব পেশী সংকোচনের মাধ্যমে শুক্রাণু ও ডিম্বাণুকে যথাস্থানে পৌঁছে দেয়।'
      ),
      l(
        '3. The prostate, seminal vesicles, and bulbourethral glands provide nutrient seminal plasma and buffering alkaline secretions.',
        '৩. প্রোস্টেট ও সেমিনাল ভেসিকল বীর্যরসে পুষ্টি ও ক্ষারীয় তরল যোগ করে শুক্রাণুর টিকে থাকা নিশ্চিত করে।'
      ),
      l(
        '4. The levator ani and cardinal ligaments support pelvic viscera against intra-abdominal pressures.',
        '৪. লিভেটর অ্যানাই পেশী এবং কার্ডিনাল লিগামেন্ট পেলভিসের অভ্যন্তরীণ অঙ্গসমূহকে সঠিক অবস্থানে ধরে রাখে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'During a radical retropubic prostatectomy for localized adenocarcinoma, a surgical team must preserve the neurovascular bundles responsible for erectile potency. Where do the cavernous nerves (autonomic fibers mediating penile erection) course relative to the prostate capsule?',
      'প্রোস্টেট ক্যান্সারের অপারেশনে লিঙ্গের উত্থান ক্ষমতা (Erection) বজায় রাখতে ডাক্তারদের একটি সূক্ষ্ম স্নায়ুজালিকা অক্ষত রাখতে হয়। লিঙ্গে রক্তপ্রবাহ নিয়ন্ত্রণকারী এই অটোনোমিক ক্যাভারনাস স্নায়ুগুলো প্রোস্টেটের ঠিক কোন অংশে অবস্থান করে?'
    ),
    options: [
      l('Posterolateral to the prostatic capsule in the neurovascular bundle', 'প্রোস্টেট ক্যাপসুলের পেছনের বাইরের দিকে (পোস্টেরোল্যাটারাল) নিউরোভাস্কুলার বান্ডেলে'),
      l('Directly anterior to the puboprostatic ligaments', 'পিউবোপ্রোস্টেটিক লিগামেন্টের ঠিক সামনে'),
      l('Within the central zone parenchyma surrounding the ejaculatory ducts', 'ইজাকুলেটরি নালির চারপাশের সেন্ট্রাল জোনে'),
      l('Deep inside the transitional zone surrounding the prostatic urethra', 'মূত্রনালিকে ঘিরে থাকা ট্রানজিশন জোনের গভীরে'),
    ],
    correctIndex: 0,
    explanation: l(
      'The cavernous nerves arise from the prostatic plexus (derived from the inferior hypogastric plexus, S2–S4) and run intimately along the posterolateral surface of the prostatic capsule within the delicate prostatic fascial neurovascular bundles at roughly the 5-o-clock and 7-o-clock positions. Nerve-sparing surgical dissection along this plane preserves erectile function.',
      'লিঙ্গে রক্ত সঞ্চালন নিয়ন্ত্রণকারী ক্যাভারনাস স্নায়ুগুলো প্রোস্টেট ক্যাপসুলের পেছনের বাইরের (পোস্টেরোল্যাটারাল) দিকে ঘড়ির ৫টা এবং ৭টার কোণে নিউরোভাস্কুলার বান্ডেলের ভেতর দিয়ে প্রবাহিত হয়। এই বান্ডেল অক্ষত রেখে অস্ত্রোপচার করলেই রোগীর উত্থান ক্ষমতা রক্ষা পায়।'
    ),
  },
}
