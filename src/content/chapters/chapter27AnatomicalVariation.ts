import type { LessonTopic, Localized, ReferenceItem } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs: ReferenceItem[] = [
  {
    id: 'bergman-variations-online',
    title: "Bergman's Comprehensive Encyclopedia of Human Anatomic Variation",
    authors: 'Tubbs RS, Shoja MM, Loukas M',
    organization: 'Wiley-Blackwell',
    year: 2016,
    url: 'https://www.wiley.com/en-us/Bergman%27s+Comprehensive+Encyclopedia+of+Human+Anatomic+Variation-p-9781118430354',
  },
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
    id: 'skandalakis-surgical-anatomy',
    title: "Skandalakis' Surgical Anatomy: The Embryologic and Anatomic Basis of Modern Surgery",
    authors: 'Skandalakis JE, Colborn GL, Weidman TA',
    organization: 'McGraw-Hill Education',
    year: 2004,
    url: 'https://accesssurgery.mhmedical.com/book.aspx?bookid=2557',
  },
]

export const chapter27AnatomicalVariationLesson: LessonTopic = {
  id: 'topic.anatomy.anatomical-variation',
  slug: 'anatomical-variation',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('27 · Anatomical Variation and Safety', '২৭ · অ্যানাটমিক্যাল ভিন্নতা ও নিরাপত্তা'),
  summary: l(
    'A clinically vital exploration of normal human anatomical variations and surgical patient safety: arterial variations including replaced hepatic arteries, circle of Willis incompleteness, and coronary dominance; peripheral neural anomalies including the non-recurrent laryngeal nerve and Martin-Gruber anastomosis; embryological visceral anomalies including Meckel’s diverticulum and horseshoe kidney; and clinical surgical safety frameworks designed to prevent catastrophic iatrogenic injury.',
    'স্বাভাবিক মানব শারীরস্থানিক ভিন্নতা এবং অস্ত্রোপচারকালীন রোগী নিরাপত্তার বিশদ ক্লিনিক্যাল বিশ্লেষণ: প্রতিস্থাপিত হেপাটিক ধমনী, অপূর্ণ উইলির বৃত্ত ও করোনারি আধিপত্যসহ রক্তনালীর ভিন্নতা; নন-রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ ও মার্টিন-গ্রুবার অ্যানাস্টোমোসিসসহ স্নায়বিক রূপভেদ; মেকেলস ডাইভার্টিকুলাম ও হর্সশু কিডনিসহ ভ্রূণীয় ভিন্নতা এবং চিকিৎসাঘটিত প্রাণঘাতী ভুল প্রতিরোধে আন্তর্জাতিক অস্ত্রোপচার নিরাপত্তা প্রটোকল।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Identify common vascular variations (replaced right and left hepatic arteries, aberrant right subclavian artery, and incomplete circle of Willis) and evaluate their surgical implications.',
      'সাধারণ রক্তনালীর ভিন্নতা (প্রতিস্থাপিত ডান ও বাম হেপাটিক ধমনী, অস্বাভাবিক ডান সাবক্ল্যাভিয়ান ধমনী এবং অসম্পূর্ণ উইলির ধমনী বৃত্ত) চিহ্নিত করা এবং অস্ত্রোপচারে এদের ঝুঁকি মূল্যায়ন করা।'
    ),
    l(
      'Explain the embryological etiology and clinical hazard of the non-recurrent laryngeal nerve during thyroid surgery and the Martin-Gruber median-to-ulnar neural crossover.',
      'থাইরয়েড অপারেশনের সময় নন-রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ুর ভ্রূণীয় উৎপত্তি ও বিপদ ব্যাখ্যা করা এবং অগ্রবাহুতে মার্টিন-গ্রুবার মিডিয়ান-আলনার স্নায়ু সংযোগের তাৎপর্য বিশ্লেষণ করা।'
    ),
    l(
      'Apply surgical safety principles, the WHO surgical safety checklist, and intraoperative identification protocols to prevent wrong-site surgery and iatrogenic injury in patients with atypical anatomy.',
      'অস্বাভাবিক শারীরিক গঠনের রোগীদের ক্ষেত্রে চিকিৎসাঘটিত অঙ্গহানি ও ভুল স্থানের অপারেশন প্রতিরোধে ডব্লিউএইচও সার্জিক্যাল সেফটি চেকলিস্ট এবং সনাক্তকরণ প্রটোকল প্রয়োগ করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.introduction'],
  relatedTopicIds: ['topic.anatomy.head-neck', 'topic.anatomy.abdomen', 'topic.anatomy.cardiovascular'],
  references: refs,
  evidenceBySection: {
    introduction: ['bergman-variations-online', 'moore-anatomy-9e'],
    structure: ['bergman-variations-online', 'grays-anatomy-42e'],
    mechanism: ['grays-anatomy-42e', 'skandalakis-surgical-anatomy'],
    integration: ['moore-anatomy-9e', 'skandalakis-surgical-anatomy'],
    practice: ['skandalakis-surgical-anatomy', 'moore-anatomy-9e'],
    takeaways: ['bergman-variations-online', 'skandalakis-surgical-anatomy'],
  },
  chapter: {
    toc: [
      { id: 'sec-vascular-variations', label: l('Arterial Variations: Hepatic, Coronary & Willis Circle', 'ধমনীর ভিন্নতা: হেপাটিক, করোনারি ও উইলির বৃত্ত'), sectionId: 'introduction' },
      { id: 'sec-neural-variations', label: l('Peripheral Neural Variations: Non-Recurrent Laryngeal', 'প্রান্তীয় স্নায়ুর ভিন্নতা: নন-রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ'), sectionId: 'structure' },
      { id: 'sec-visceral-embryological', label: l('Embryological Visceral Variations: Meckel & Horseshoe Kidney', 'ভ্রূণীয় অঙ্গের ভিন্নতা: মেকেলস ও হর্সশু কিডনি'), sectionId: 'mechanism' },
      { id: 'sec-musculoskeletal-variants', label: l('Skeletal & Muscular Variants: Cervical Rib & Fabella', 'কঙ্কাল ও পেশীর রূপভেদ: সারভাইকাল রিব ও ফ্যাবেলা'), sectionId: 'integration' },
      { id: 'sec-surgical-safety-checklist', label: l('Surgical Patient Safety & Iatrogenic Prevention Protocols', 'সার্জিক্যাল রোগী নিরাপত্তা ও ভুল প্রতিরোধ প্রটোকল'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Principles of Anatomic Diversity & Clinical Vigilance', 'শারীরস্থানিক বৈচিত্র্যের মূলনীতি ও ক্লিনিক্যাল সতর্কতা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Replaced Hepatic Artery (Michels Classification)', 'প্রতিস্থাপিত হেপাটিক ধমনী (মিশেলস শ্রেণিবিভাগ)'),
        definition: l(
          'A congenital arterial variation in which a hepatic lobe receives its primary blood supply from an atypical origin rather than the proper hepatic artery of the celiac trunk. Most commonly, a replaced right hepatic artery arises from the superior mesenteric artery (SMA, 12% to 15% prevalence) coursing posterior to the portal vein and head of the pancreas; a replaced left hepatic artery arises from the left gastric artery (10% to 12% prevalence) traversing the lesser omentum. Accidental ligation during pancreaticoduodenectomy or gastrectomy causes catastrophic hepatic infarction or liver graft ischemia.',
          'একটি জন্মগত ধমনীর রূপভেদ যেখানে যকৃতের প্রধান রক্ত সরবরাহ সিলিয়াক ট্রাঙ্কের পরিবর্তে অস্বাভাবিক অন্য কোনো ধমনী থেকে আসে। প্রায় ১২% থেকে ১৫% ক্ষেত্রে প্রতিস্থাপিত ডান হেপাটিক ধমনীটি সুপিরিয়র মেসেন্টেরিক ধমনী (SMA) থেকে উৎপন্ন হয়ে অগ্ন্যাশয় ও পোর্টাল শিরার পেছন দিয়ে যকৃতে যায়; আর ১০% থেকে ১২% ক্ষেত্রে প্রতিস্থাপিত বাম হেপাটিক ধমনীটি বাম গ্যাস্ট্রিক ধমনী থেকে আসে। অগ্ন্যাশয় বা পাকস্থলীর অপারেশনে এটি খেয়াল না করে কেটে ফেললে যকৃতে রক্ত চলাচল বন্ধ হয়ে রোগী মারা যেতে পারে।'
        ),
      },
      {
        term: l('Non-Recurrent Laryngeal Nerve (NRLN)', 'নন-রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ (NRLN)'),
        definition: l(
          'A rare congenital neural anomaly occurring on the right side in 0.5% to 1.0% of individuals, invariably associated with an aberrant right subclavian artery (arteria lusoria) arising directly from the aortic arch. Due to the embryonic absence of the 4th right aortic arch, the nerve does not loop around the subclavian artery; instead, it emerges directly from the cervical vagus trunk at the level of the cricoid cartilage and passes transversely into the larynx. Unsuspecting thyroid surgeons expecting the standard tracheoesophageal groove trajectory face an extreme risk of inadvertent nerve transection and permanent vocal fold paralysis.',
          'একটি বিরল জন্মগত স্নায়ুর রূপভেদ যা প্রায় ০.৫% থেকে ১% মানুষের ডানপাশে দেখা যায় এবং এটি সবসময় মহাধমনী থেকে অস্বাভাবিক ডান সাবক্ল্যাভিয়ান ধমনীর উৎপত্তির সাথে সম্পর্কিত থাকে। ভ্রূণাবস্থায় ৪র্থ আর্চ বিলুপ্ত হওয়ায় স্নায়ুটি সাবক্ল্যাভিয়ান ধমনীর নিচ দিয়ে ঘুরে আসে না, বরং ঘাড়ের ভেগাস স্নায়ু থেকে সরাসরি বের হয়ে আনুভূমিকভাবে স্বরযন্ত্রে প্রবেশ করে। থাইরয়েড অপারেশনের সময় সাধারণ স্নায়ুর গতিপথ আশা করা সার্জনরা অসাবধানতাবশত এটি কেটে ফেলে রোগীর স্বরতন্ত্রী চিরতরে অবশ করে ফেলার তীব্র ঝুঁকিতে থাকেন।'
        ),
      },
      {
        term: l('Meckel’s Diverticulum (Rule of Twos)', 'মেকেলস ডাইভার্টিকুলাম (দুই-এর নিয়ম)'),
        definition: l(
          'The most common congenital anomaly of the gastrointestinal tract, representing persistent partial obliteration of the embryonic vitelline duct (omphalomesenteric duct). Governed by the classic clinical "Rule of 2s": occurs in 2% of the population, located within 2 feet (60 cm) of the ileocecal valve on the antimesenteric border of the ileum, measures roughly 2 inches (5 cm) in length, twice as common in males, and contains 2 types of heterotopic mucosa (gastric in 50% and pancreatic in 5%). Acid secretion from ectopic gastric mucosa causes painless lower gastrointestinal bleeding or ulcer perforation.',
          'পরিপাকতন্ত্রের সবচেয়ে সাধারণ জন্মগত রূপভেদ যা ভ্রূণীয় ভাইটেলাইন নালী আংশিক অপসারিত না হওয়ার কারণে সৃষ্টি হয়। এটি "দুই-এর নিয়ম" দ্বারা পরিচিত: জনসংখ্যার ২% মানুষের ক্ষেত্রে দেখা যায়, ইলিয়োসেকাল ভালভ থেকে ২ ফুট (৬০ সেমি) দূরে থাকে, দৈর্ঘ্যে প্রায় ২ ইঞ্চি হয়, পুরুষদের দ্বিগুণেরও বেশি হয় এবং এর ভেতরে ২ ধরনের অস্বাভাবিক পর্দা (৫০% ক্ষেত্রে পাকস্থলীর ও ৫% ক্ষেত্রে অগ্ন্যাশয়ের টিস্যু) থাকে। পাকস্থলীর অ্যাসিড ক্ষরণের কারণে এই থলি থেকে অন্ত্রে রক্তপাত বা আলসার ফুটো হয়ে যায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Preoperative Identification and Safe Preservation of Replaced Hepatic Arteries', 'অপারেশনের পূর্বে প্রতিস্থাপিত হেপাটিক ধমনী শনাক্তকরণ ও নিরাপদ সংরক্ষণ'),
        steps: [
          l(
            'Step 1: Inspect preoperative arterial-phase CT angiography for Michels hepatic variants: Trace the superior mesenteric artery (SMA) at L1. Identify an anomalous replaced right hepatic artery (rRHA) arising from the right lateral wall of the SMA, coursing cephalad and to the right in the retroportal space behind the pancreatic head.',
            'ধাপ ১: অপারেশনের আগে ধমনীর সিটি অ্যানজিওগ্রাম পরীক্ষা করুন: L1 কশেরুকা বরাবর SMA ধমনীটি নিবিড়ভাবে দেখুন। SMA-এর ডান দিক থেকে অস্বাভাবিকভাবে একটি প্রতিস্থাপিত ডান হেপাটিক ধমনী (rRHA) বের হয়ে অগ্ন্যাশয়ের মাথার পেছন দিয়ে যকৃতের দিকে উঠছে কিনা তা নিশ্চিত করুন।'
          ),
          l(
            'Step 2: Palpate the free edge of the lesser omentum (hepatoduodenal ligament) during surgery: Normally, only the proper hepatic artery lies anterior to the portal vein. In patients with an rRHA, note the strong arterial pulse directly posterior and lateral to the common bile duct and portal vein.',
            'ধাপ ২: অপারেশনের সময় হেপাটোডিওডেনাল লিগামেন্টের প্রান্তটি আলতোভাবে স্পর্শ করুন: স্বাভাবিক অবস্থায় পোর্টাল শিরার সামনে হেপাটিক ধমনী থাকে। কিন্তু এই অস্বাভাবিক ধমনী থাকলে পিত্তনালী ও পোর্টাল শিরার পেছনের দিকে একটি শক্তিশালী ধমনীর স্পন্দন অনুভূত হবে।'
          ),
          l(
            'Step 3: Dissect and skeletonize the rRHA carefully away from the pancreatic head margins during Whipple resection, mobilizing the vessel off the tumor margin to maintain unimpeded hepatic arterial perfusion and prevent total ischemic breakdown of the biliary tree.',
            'ধাপ ৩: অগ্ন্যাশয়ের ক্যান্সার অপারেশনের সময় এই অস্বাভাবিক ধমনীটিকে খুব সতর্কতার সাথে আলাদা করে বাঁচিয়ে রাখুন, যাতে যকৃতে রক্ত চলাচল পুরোপুরি অক্ষত থাকে এবং অপারেশনের পর রোগীর পিত্তনালী পচে যাওয়া বা লিভার ফেইলিউর সম্পূর্ণ প্রতিরোধ করা যায়।'
          ),
        ],
        conclusion: l(
          'Vigilant multimodal recognition of replaced arterial anatomy prevents inadvertent vascular ligation, preserving hepatic viability and preventing graft loss during organ transplantation and oncological resections.',
          'অস্ত্রোপচারের আগে সিটি স্ক্যান এবং অপারেশনের সময় সতর্ক স্পর্শের মাধ্যমে রক্তনালীর এই রূপভেদ শনাক্ত করলে অনাকাঙ্ক্ষিত ধমনী কর্তন প্রতিরোধ করা যায় এবং রোগীর জীবন ও অঙ্গহানির ঝুঁকি শতভাগ দূর হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'What embryological arrest gives rise to a horseshoe kidney, and which major abdominal vessel physically blocks its normal cephalad ascent into the renal fossa?',
          'কোন ভ্রূণীয় বাধার কারণে হর্সশু কিডনি বা ঘোড়ার খুর আকৃতির কিডনি তৈরি হয় এবং পেটের কোন প্রধান রক্তনালী এর স্বাভাবিক ওপরে ওঠার পথ শারীরিকভাবে আটকে দেয়?',
        ),
        answer: l(
          'A horseshoe kidney occurs in approximately 1 in 500 individuals when the lower poles of the bilateral metanephric blastemas fuse across the midline prior to cephalad ascent from the pelvis during the 4th to 6th embryonic weeks (90% lower pole fusion, 10% upper pole). As the fused kidney attempts its normal cranial ascent from the pelvis toward the adrenal beds, the central parenchymal isthmus encounters the origin of the inferior mesenteric artery (IMA), arising from the anterior abdominal aorta at the level of L3. The IMA physically blocks further cranial ascent, trapping the horseshoe kidney permanently in the lower lumbar retroperitoneum with anteriorly facing hila and variable multiple accessory renal arteries.',
          'প্রতি ৫০০ জনের মধ্যে প্রায় একজনের ক্ষেত্রে ভ্রূণাবস্থায় ৪র্থ থেকে ৬ষ্ঠ সপ্তাহের মধ্যে পেলভিসের ভেতর দুটি কিডনির নিচের অংশ পরস্পরের সাথে যুক্ত হয়ে যায় (হর্সশু কিডনি)। এই যুক্ত কিডনি যখন পেলভিস থেকে স্বাভাবিকভাবে পেটের ওপরের দিকে উঠতে চেষ্টা করে, তখন ৩য় লাম্বার কশেরুকা (L3) বরাবর মহাধমনী থেকে বের হওয়া ইনফিরিয়র মেসেন্টেরিক ধমনী (IMA) এর ওপরে ওঠার পথটি আড়াআড়িভাবে আটকে দেয়। এর ফলে কিডনিটি স্থায়ীভাবে তলপেটেই আটকে থাকে এবং এর রক্তনালীগুলোর প্রবেশমুখ সামনের দিকে মুখ করে থাকে।'
        ),
      },
      {
        question: l(
          'How does a cervical rib cause thoracic outlet syndrome (TOS), and which neurological and vascular structures are compressed over its fibrous band?',
          'সারভাইকাল রিব বা ঘাড়ের অতিরিক্ত পাঁজর কীভাবে থোরাসিক আউটলেট সিন্ড্রোম (TOS) সৃষ্টি করে এবং এর তন্তুময় ব্যান্ডের চাপে কোন স্নায়ু ও রক্তনালী ক্ষতিগ্রস্ত হয়?',
        ),
        answer: l(
          'A cervical rib is an anomalous supernumerary rib arising from the seventh cervical vertebra (C7) in roughly 0.5% to 1.0% of the population, often terminating in a taut fibrous band that inserts into the scalene tubercle of the first thoracic rib. This anomalous band elevates and narrows the interscalene triangle. The lower trunk of the brachial plexus (C8–T1 nerve roots) and the subclavian artery arch over this rigid structure. Compression of the T1 fibers produces progressive wasting and weakness of the intrinsic hand muscles (hypothenar and thenar muscles) with numbness along the medial forearm and hand. Compression of the subclavian artery produces arm pallor, absent radial pulses with overhead arm abduction (positive Adson test), post-stenotic aneurysm formation, and thromboembolism.',
          'সারভাইকাল রিব হলো ৭ম সার্ভাইকাল কশেরুকা (C7) থেকে তৈরি হওয়া একটি অতিরিক্ত পাঁজর যা প্রায় ০.৫% থেকে ১% মানুষের থাকে এবং একটি শক্ত ব্যান্ডের মাধ্যমে ১ম পাঁজরের সাথে যুক্ত হয়। এই অস্বাভাবিক হাড়ের ওপর দিয়ে ব্র্যাকিয়াল প্লেক্সাসের নিচের ট্রাঙ্ক (C8–T1) এবং সাবক্ল্যাভিয়ান ধমনী অতিক্রম করে। স্নায়ু চাপা পড়ার কারণে হাতের তালুর পেশীগুলো শুকিয়ে দুর্বল হয়ে যায় এবং হাতের ভেতরের দিকে অবশ লাগে। আর ধমনী চাপা পড়লে হাত উঁচুতে তুললে হাতের পালস বন্ধ হয়ে যায় এবং রক্ত জমাট বেঁধে হাত নীলচে ও ব্যথাতুর হয়ে পড়ে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch27-anatomic-variation-diagram',
    title: l('Interactive Anatomical Variation & Surgical Safety Matrix', 'ইন্টারেক্টিভ অ্যানাটমিক্যাল ভিন্নতা ও সার্জিক্যাল নিরাপত্তা ম্যাট্রিক্স'),
    description: l(
      'Explore frequent morphological variations and surgical safety checkpoints: examine replaced hepatic arteries, non-recurrent laryngeal nerve pathways, Meckel’s diverticulum, and WHO patient safety protocols.',
      'মানবদেহের সাধারণ শারীরিক রূপভেদ ও অস্ত্রোপচারকালীন নিরাপত্তা যাচাইসমূহ অন্বেষণ করুন: প্রতিস্থাপিত হেপাটিক ধমনী, নন-রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ুর গতিপথ, মেকেলস ডাইভার্টিকুলাম এবং বিশ্ব স্বাস্থ্য সংস্থার রোগী নিরাপত্তা প্রটোকল পরীক্ষা করুন।'
    ),
    disclaimer: l(
      'Anatomical variation clinical schematic: select any sector to review morphological prevalence, embryological origins, and surgical prevention protocols.',
      'শারীরস্থানিক রূপভেদের ক্লিনিক্যাল রেখাচিত্র: ভিন্নতার হার, ভ্রূণীয় উৎস এবং অপারেশনের সুরক্ষা নির্দেশিকা দেখতে যেকোনো অঞ্চল নির্বাচন করুন।'
    ),
    svgType: 'anatomical-variation-system',
    items: [
      {
        id: 'vascular-replaced-hepatic',
        label: l('Replaced Hepatic Arteries (Michels Variants)', 'প্রতিস্থাপিত হেপাটিক ধমনী (মিশেলস রূপভেদ)'),
        description: l(
          'Replaced right hepatic artery (12–15%) arises from SMA behind pancreas head; replaced left hepatic (10–12%) arises from left gastric artery in lesser omentum.',
          'প্রতিস্থাপিত ডান হেপাটিক ধমনী (১২-১৫%) অগ্ন্যাশয়ের পেছনে SMA থেকে উৎপন্ন হয়; প্রতিস্থাপিত বাম হেপাটিক ধমনী (১০-১২%) বাম গ্যাস্ট্রিক ধমনী থেকে উৎপন্ন হয়।'
        ),
        details: l(
          'Accidental transection during pancreaticoduodenectomy (Whipple) or gastrectomy causes acute liver ischemia and breakdown of biliary ductal anastomoses.',
          'অগ্ন্যাশয় বা পাকস্থলীর ক্যান্সারের অপারেশনের সময় এটি ভুলবশত কেটে ফেললে লিভারে রক্ত চলাচল বন্ধ হয়ে যায় এবং পিত্তনালী পচে মারাত্মক বিপত্তি ঘটে।'
        ),
        sectionId: 'introduction',
        color: '#f87171',
        svgCoords: { x: 25, y: 25, width: 310, height: 50 },
      },
      {
        id: 'neural-nonrecurrent-nerve',
        label: l('Non-Recurrent Laryngeal Nerve & Lusoria Artery', 'নন-রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ ও লুসোরিয়া ধমনী'),
        description: l(
          'Right-sided anomaly (0.5–1.0%) coupled with aberrant retroesophageal right subclavian artery. Nerve exits vagus directly in neck without looping.',
          'ডানপাশের রূপভেদ (০.৫-১.০%) যা খাদ্যনালীর পেছনের অস্বাভাবিক সাবক্ল্যাভিয়ান ধমনীর সাথে থাকে। স্নায়ুটি নিচে না নেমে ঘাড়ের ভেগাস থেকে সরাসরি স্বরযন্ত্রে ঢোকে।'
        ),
        details: l(
          'High transection risk during thyroidectomy because the nerve courses horizontally across the thyroid capsule rather than ascending in the tracheoesophageal groove.',
          'থাইরয়েড অপারেশনের সময় এটি কাটার মারাত্মক ঝুঁকি থাকে কারণ স্নায়ুটি সাধারণ খাঁজ দিয়ে না উঠে থাইরয়েড গ্রন্থির ওপর দিয়ে আড়াআড়িভাবে প্রবেশ করে।'
        ),
        sectionId: 'structure',
        color: '#fbbf24',
        svgCoords: { x: 25, y: 85, width: 310, height: 50 },
      },
      {
        id: 'visceral-meckel-horseshoe',
        label: l('Meckel’s Diverticulum & Horseshoe Kidney', 'মেকেলস ডাইভার্টিকুলাম ও হর্সশু কিডনি'),
        description: l(
          'Meckel: 2% prevalence, 2 feet from ileocecal valve, persistent vitelline duct. Horseshoe kidney: lower pole fusion arrested beneath inferior mesenteric artery (L3).',
          'মেকেলস: ২% মানুষের থাকে, নাভি-অন্ত্রের অবশিষ্ট নালী। হর্সশু কিডনি: দুই কিডনির নিচের অংশ যুক্ত হয়ে ৩য় লাম্বার কশেরুকায় IMA ধমনীর নিচে আটকে যায়।'
        ),
        details: l(
          'Heterotopic gastric mucosa in Meckel causes painless ulcer bleeding; horseshoe kidney is predisposed to ureteropelvic junction obstruction and recurrent stones.',
          'মেকেলসের ভেতরের পাকস্থলীর অ্যাসিড অন্ত্রে রক্তপাত ঘটায়; আর হর্সশু কিডনিতে মূত্রনালী চেপে গিয়ে বারবার পাথর ও প্রস্রাবে ইনফেকশন তৈরি হয়।'
        ),
        sectionId: 'mechanism',
        color: '#a78bfa',
        svgCoords: { x: 25, y: 145, width: 310, height: 50 },
      },
      {
        id: 'safety-who-surgical-checklist',
        label: l('WHO Surgical Safety Checklist & Universal Protocol', 'ডব্লিউএইচও সার্জিক্যাল সেফটি চেকলিস্ট ও প্রটোকল'),
        description: l(
          'Three-stage surgical safety pause (Sign In, Time Out, Sign Out) verifying patient identity, operative site marking, anatomical imaging, and critical equipment.',
          'অস্ত্রোপচারের তিন স্তরের নিরাপত্তা বিরতি (সাইন ইন, টাইম আউট, সাইন আউট) যা রোগীর পরিচয়, অঙ্গ চিহ্নিতকরণ, ইমেজিং এবং সঠিক যন্ত্রপাতি নিশ্চিত করে।'
        ),
        details: l(
          'Mandatory anatomical pause immediately before incision prevents wrong-site surgery and alerts the entire surgical team to patient-specific anatomical variations.',
          'অস্ত্রোপচারের ছুরি চালানোর ঠিক আগে এই বাধ্যতামূলক বিরতি ভুল অঙ্গের অপারেশন বন্ধ করে এবং শারীরিক রূপভেদ সম্পর্কে পুরো টিমকে সতর্ক করে।'
        ),
        sectionId: 'practice',
        color: '#34d399',
        svgCoords: { x: 25, y: 205, width: 310, height: 50 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Reality of Human Anatomical Variation and Vascular Diversity', 'মানব শারীরস্থানিক রূপভেদের বাস্তবতা ও রক্তনালীর বৈচিত্র্য'),
          paragraphs: [
            l(
              'A foundational premise of clinical medicine is that standard textbook anatomy represents a statistical consensus rather than an absolute blueprint. Genetic polymorphism and complex embryological morphogenesis produce profound anatomical variations across asymptomatic populations. Nowhere is this diversity more evident than in the arterial vascular tree, where branching patterns routinely diverge from classic classical textbook descriptions.',
              'চিকিৎসাবিজ্ঞানের একটি মৌলিক সত্য হলো যে পাঠ্যপুস্তকের সাধারণ শারীরস্থান কোনো অপরিবর্তনীয় বিধান নয়, বরং এটি কেবল সংখ্যাগরিষ্ঠ মানুষের একটি গড় রূপরেখা। জিনগত বৈচিত্র্য এবং জটিল ভ্রূণীয় বিকাশের কারণে সুস্থ ও স্বাভাবিক মানুষের শরীরেও বহু ধরণের শারীরিক ভিন্নতা দেখা যায়। এই রূপভেদ সবচেয়ে বেশি স্পষ্ট রক্তনালীর বিন্যাসে, যেখানে ধমনীগুলোর গতিপথ ও শাখা প্রায়শই সাধারণ বইয়ের বর্ণনার চেয়ে সম্পূর্ণ আলাদা হয়ে থাকে।'
            ),
            l(
              'In the abdominal circulation, the classic celiac trunk trifurcation into the left gastric, splenic, and common hepatic arteries is present in only roughly 55% to 75% of individuals. In 12% to 15% of the population, a replaced right hepatic artery arises from the superior mesenteric artery (SMA), while in 10% to 12%, a replaced left hepatic artery arises from the left gastric artery. Radiologists and surgeons must anticipate these replaced vessels prior to major hepatic, pancreatic, or gastric resections to avoid accidental devascularization and fatal organ necrosis.',
              'পেটের রক্ত সংবহনে সিলিয়াক ট্রাঙ্ক থেকে তিনটি প্রধান ধমনী বের হওয়ার আদর্শ রূপটি কেবল ৫৫% থেকে ৭৫% মানুষের ক্ষেত্রে পাওয়া যায়। প্রায় ১২% থেকে ১৫% মানুষের ক্ষেত্রে ডান হেপাটিক ধমনীটি সরাসরি মেসেন্টেরিক ধমনী (SMA) থেকে এবং ১০% থেকে ১২% মানুষের ক্ষেত্রে বাম হেপাটিক ধমনীটি বাম গ্যাস্ট্রিক ধমনী থেকে তৈরি হয়। লিভার, অগ্ন্যাশয় বা পাকস্থলীর যেকোনো অপারেশনের আগে এই রূপভেদগুলো আগে থেকেই জানা না থাকলে সার্জনরা ভুলবশত রক্তনালী কেটে রোগীর লিভারের রক্ত চলাচল বন্ধ করে দিতে পারেন।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Peripheral Neural Variations: The Non-Recurrent Laryngeal Nerve', 'প্রান্তীয় স্নায়ুর ভিন্নতা: নন-রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ'),
          paragraphs: [
            l(
              'While neural pathways are often conceptualized as rigidly fixed, peripheral nervous system branching patterns exhibit crucial clinical anomalies. The most hazardous of these is the non-recurrent laryngeal nerve (NRLN), which occurs almost exclusively on the right side in approximately 0.5% to 1% of the population. In these individuals, an embryological anomaly prevents the right 4th aortic arch from forming the proximal subclavian artery; instead, the right subclavian artery arises anomalously from the descending aorta (arteria lusoria) and courses behind the esophagus.',
              'স্নায়ুর গতিপথকে সাধারণত স্থির ও অপরিবর্তনীয় মনে করা হলেও প্রান্তীয় স্নায়ুতন্ত্রে কিছু অতি বিপজ্জনক রূপভেদ বিদ্যমান। এর মধ্যে সবচেয়ে ঝুঁকিপূর্ণ হলো ডানপাশের নন-রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ, যা প্রায় ০.৫% থেকে ১% মানুষের ক্ষেত্রে দেখা যায়। ভ্রূণাবস্থায় ধমনীর আর্চ তৈরি না হওয়ার কারণে এই ব্যক্তিদের ডান সাবক্ল্যাভিয়ান ধমনীটি অস্বাভাবিকভাবে খাদ্যনালীর পেছন দিয়ে ঘুরে যায় (লুসোরিয়া ধমনী); এর ফলে স্নায়ুটি নিচে নেমে ধমনীকে পেঁচিয়ে না ঘুরে সোজা গলার মাঝখান দিয়ে স্বরযন্ত্রে প্রবেশ করে।'
            ),
            l(
              'Because the subclavian vessel does not drag the right recurrent laryngeal nerve downward into the chest during fetal elongation of the neck, the nerve emerges directly from the vagus trunk in the cervical region at the level of the cricoid cartilage. It courses transversely and medially toward the larynx, directly crossing the posterior surface of the thyroid gland. A surgeon performing thyroid lobectomy who expects the nerve to ascend safely in the tracheoesophageal groove will inadvertently transect this transversely running nerve, causing permanent vocal cord paralysis and persistent hoarseness.',
              'ভ্রূণের ঘাড় লম্বা হওয়ার সময় ধমনীটি স্নায়ুটিকে বুকের নিচে টেনে না নেওয়ায় স্নায়ুটি সরাসরি গলার ভেগাস নার্ভ থেকে অনুভূমিকভাবে বেরিয়ে থাইরয়েড গ্রন্থির পেছনের অংশ দিয়ে স্বরযন্ত্রে ঢুকে পড়ে। থাইরয়েডের অপারেশনের সময় সার্জন যদি মনে করেন স্নায়ুটি শ্বাসনালীর খাঁজ দিয়ে নিচ থেকে ওপরে উঠবে, তবে তিনি অজান্তেই আড়াআড়িভাবে থাকা এই স্নায়ুটি কেটে ফেলবেন, যার ফলে রোগীর স্বরতন্ত্রী চিরতরে অবশ হয়ে যাবে এবং কণ্ঠস্বর সম্পূর্ণ ভেঙে যাবে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Embryological Visceral Anomalies: Meckel and Horseshoe Kidney', 'ভ্রূণীয় অঙ্গের ভিন্নতা: মেকেলস ডাইভার্টিকুলাম ও হর্সশু কিডনি'),
          paragraphs: [
            l(
              'Visceral organ morphology frequently reflects incomplete involution or abnormal fusion during embryonic development. Meckel’s diverticulum represents failure of the proximal vitelline (omphalomesenteric) duct to completely obliterate during the 7th to 8th week of gestation. Persisting as a true diverticulum on the antimesenteric border of the distal ileum, it contains all layers of the intestinal wall. The famous "Rule of 2s" highlights its epidemiology: 2% of the population, 2 inches in length, located within 2 feet of the ileocecal valve, and often containing 2 types of heterotopic tissue (gastric and pancreatic).',
              'মানবদেহের অঙ্গগুলোর স্বাভাবিক রূপ অনেক সময় ভ্রূণীয় বিকাশের অসম্পূর্ণ পরিবর্তনের ছাপ বহন করে। মেকেলস ডাইভার্টিকুলাম হলো গর্ভকালীন ৭ম থেকে ৮ম সপ্তাহে নাভির সাথে যুক্ত ভ্রূণীয় নালীটি পুরোপুরি শুকিয়ে না যাওয়ার ফল। এটি ক্ষুদ্রান্ত্রের ইলিয়ামের বাইরের কিনারায় একটি থলি হিসেবে থেকে যায় এবং এর ভেতরে অন্ত্রের সমস্ত পর্দা উপস্থিত থাকে। বিখ্যাত "দুই-এর নিয়ম" অনুসারে এটি জনসংখ্যার ২% মানুষের থাকে, ২ ইঞ্চি লম্বা হয়, বৃহদন্ত্রের মিলনস্থল থেকে ২ ফুট দূরে অবস্থান করে এবং এর ভেতরে প্রায়ই পাকস্থলী ও অগ্ন্যাশয়ের অস্বাভাবিক কোষ পাওয়া যায়।'
            ),
            l(
              'Horseshoe kidney exemplifies abnormal embryonic blastema fusion. When the lower poles of the developing metanephroi contact and fuse across the midline in the pelvis during early development, a fibrous or parenchymal isthmus unites both kidneys. During subsequent cranial ascent toward the renal fossae, the isthmus becomes physically entrapped beneath the origin of the inferior mesenteric artery (IMA) from the abdominal aorta at L3. The horseshoe kidney remains permanently positioned in the lower lumbar retroperitoneum, with anteriorly oriented hila that predispose patients to hydronephrosis and nephrolithiasis.',
              'হর্সশু কিডনি হলো ভ্রূণাবস্থায় দুটি কিডনি পরস্পরের সাথে জোড়া লেগে যাওয়ার একটি চমৎকার উদাহরণ। পেলভিসের ভেতরে থাকার সময় দুটি কিডনির নিচের অংশ জোড়া লেগে একটি ঘোড়ার খুরের মতো আকৃতি তৈরি করে। স্বাভাবিকভাবে পেটের ওপরে ওঠার সময় মহাধমনী থেকে বের হওয়া ইনফিরিয়র মেসেন্টেরিক ধমনী (IMA) এর পথ আটকে দেয়। ফলে এই জোড়া কিডনি আজীবনের জন্য তলপেটের L3 কশেরুকা বরাবর আটকে থাকে এবং এর মূত্রনালীগুলো বাঁকা হয়ে থাকায় সহজে প্রস্রাব নামতে পারে না, যার ফলে বারবার কিডনিতে পাথর ও ইনফেকশন হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Skeletal and Muscular Variations: Cervical Ribs and Accessary Muscles', 'কঙ্কাল ও পেশীর রূপভেদ: সারভাইকাল রিব ও অতিরিক্ত পেশী'),
          paragraphs: [
            l(
              'Skeletal variations occur across the entire axial and appendicular skeleton. A cervical rib arises from the seventh cervical vertebra (C7) in 0.5% to 1.0% of the population, ranging from a small bony prominence to a fully formed rib articulating with the first thoracic rib via a rigid fibrous band. This anomalous band narrows the interscalene triangle through which the brachial plexus and subclavian artery traverse, compressing the lower trunk (C8–T1) and arterial lumen to produce neurogenic and vascular thoracic outlet syndrome (TOS).',
              'কঙ্কালতন্ত্রের সমস্ত হাড়ের মধ্যেই জন্মগত রূপভেদ দেখা যেতে পারে। সারভাইকাল রিব হলো ৭ম সার্ভাইকাল কশেরুকা (C7) থেকে গজানো একটি অতিরিক্ত পাঁজর যা প্রায় ০.৫% থেকে ১% মানুষের ঘাড়ে থাকে। এটি একটি শক্ত সুতার মতো লিগামেন্ট দিয়ে ১ম পাঁজরের সাথে যুক্ত হয়ে বুকের ওপরের সরু পথটিকে আরও সংকুচিত করে ফেলে। এর ফাঁক দিয়ে যাওয়ার সময় হাতের প্রধান স্নায়ু (C8–T1) এবং সাবক্ল্যাভিয়ান ধমনী মারাত্মকভাবে চেপে যায়, যার ফলে হাতের তালুর পেশী শুকিয়ে যায় এবং হাত উঁচুতে তুললে হাতের রক্ত চলাচল পুরোপুরি বন্ধ হয়ে যায়।'
            ),
            l(
              'Muscular variations are similarly common and frequently mistaken for soft-tissue neoplasms on clinical examination or imaging. The sternalis muscle is a flat, longitudinal muscle running parallel to the sternum anterior to the pectoralis major in 5% to 8% of individuals, frequently appearing as an unexpected density on screening mammography. In the lower limb, the fabella is a small sesamoid bone embedded within the lateral head of the gastrocnemius muscle in up to 30% of knees, which can become arthritic or produce posterior knee pain when enlarged.',
              'মাংসপেশির রূপভেদগুলোও অত্যন্ত সাধারণ এবং অনেক সময় শারীরিক পরীক্ষায় বা এক্স-রেতে এগুলোকে টিউমার ভেবে ভুল করা হয়। প্রায় ৫% থেকে ৮% মানুষের বুকের ওপর স্টার্নালিস নামক একটি পাতলা অতিরিক্ত পেশী থাকে যা ম্যামোগ্রাফি পরীক্ষায় স্তনের টিউমার বলে বিভ্রান্তি তৈরি করতে পারে। একইভাবে প্রায় ৩০% মানুষের হাঁটুর পেছনের গ্যাস্ট্রোকনেমিয়াস পেশীর ভেতরে ফ্যাবেলা নামক একটি ক্ষুদ্র অতিরিক্ত হাড় থাকে, যা আকারে বড় হয়ে গেলে হাঁটুর পেছনে ব্যথার কারণ হতে পারে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Surgical Safety: The WHO Checklist and Universal Protocol', 'ক্লিনিক্যাল সার্জিক্যাল নিরাপত্তা: ডব্লিউএইচও চেকলিস্ট ও সার্বজনীন প্রটোকল'),
          paragraphs: [
            l(
              'Because anatomical variations cannot always be detected prior to an incision, clinical systems rely upon standardized surgical safety frameworks to protect patients. The World Health Organization (WHO) Surgical Safety Checklist establishes three critical pause points during every operative procedure: Sign In (before induction of anesthesia), Time Out (immediately before skin incision), and Sign Out (before the patient leaves the operating room). These pauses mandate verbal verification of patient identity, correct procedure, correct side and anatomical site, and anticipated critical steps.',
              'শারীরিক রূপভেদগুলো অপারেশনের আগে সবসময় ধরা নাও পড়তে পারে, তাই বিশ্ব স্বাস্থ্য সংস্থা (WHO) রোগীদের জীবন রক্ষায় আন্তর্জাতিক সার্জিক্যাল সেফটি চেকলিস্ট বাধ্যতামূলক করেছে। এতে তিনটি বাধ্যতামূলক বিরতি থাকে: সাইন ইন (অজ্ঞান করার আগে), টাইম আউট (চামড়া কাটার ঠিক আগে) এবং সাইন আউট (রোগীকে থিয়েটার থেকে বের করার আগে)। এই বিরতির সময় পুরো সার্জিক্যাল টিম একসঙ্গে রোগীর নাম, অপারেশনের অঙ্গের সঠিক দিক এবং কোনো শারীরিক রূপভেদ বা বিশেষ ঝুঁকি আছে কিনা তা উচ্চৈঃস্বরে মিলিয়ে নেয়।'
            ),
            l(
              'A core pillar of the Universal Protocol is preoperative site marking performed by the operating surgeon while the patient is awake and participatory. In the operating room, modern surgical practice enforces the principle of "visualize before you divide": no tubular structure, artery, duct, or nerve is ever clipped or transected based on presumed textbook location. Instead, definitive anatomical exposure, intraoperative fluoroscopic cholangiography, or nerve monitoring is utilized to confirm identity beyond doubt, turning knowledge of anatomical variation into active patient defense.',
              'সার্বজনীন প্রটোকলের প্রধান নিয়ম হলো রোগীর জ্ঞান থাকা অবস্থায় সার্জন নিজে রোগীর শরীরে অপারেশনের স্থান চিহ্নিত করবেন। অস্ত্রোপচারের টেবিলে মূল নীতি হলো "কাটার আগে স্পষ্ট দেখা": কোনো নালী, ধমনী বা স্নায়ু সাধারণ অনুমানের ওপর ভিত্তি করে কখনোই কাটা যাবে না। পূর্ণাঙ্গভাবে আশপাশ পরিষ্কার করে এবং এক্স-রে বা নার্ভ মনিটরিংয়ের মাধ্যমে নিশ্চিত হওয়ার পরেই কেবল রক্তনালী কাটা হয়; এর ফলে শারীরিক রূপভেদের বৈচিত্র্য সত্ত্বেও রোগীর নিরাপত্তা শতভাগ বজায় থাকে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Essential Principles of Anatomic Diversity and Clinical Vigilance', 'শারীরস্থানিক বৈচিত্র্য ও ক্লিনিক্যাল সতর্কতার মূল সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Anatomical variation is a universal reality of human biology that challenges dogmatic textbook assumptions. From replaced hepatic arteries and non-recurrent laryngeal nerves to Meckel’s diverticula and cervical ribs, recognizing the statistical frequencies and developmental origins of variations is essential for accurate diagnosis and safe operative practice.',
              'শারীরস্থানিক ভিন্নতা হলো মানবদেহের একটি স্বাভাবিক ও চিরন্তন সত্য যা বইয়ের সীমাবদ্ধ ধারণাকে অতিক্রম করতে শেখায়। প্রতিস্থাপিত হেপাটিক ধমনী ও নন-রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ থেকে শুরু করে মেকেলস ডাইভার্টিকুলাম ও সারভাইকাল রিব পর্যন্ত—প্রতিটি রূপভেদের শতকরা হার এবং ভ্রূণীয় ইতিহাস জানা সঠিক রোগ নির্ণয় এবং নিরাপদ অস্ত্রোপচারের পূর্বশর্ত।'
            ),
            l(
              'Embedding rigorous safety checklists and strict intraoperative verification protocols into everyday clinical workflow safeguards patients from catastrophic iatrogenic injury, ensuring that anatomical diversity is met with expert clinical vigilance rather than unexpected disaster.',
              'প্রতিদিনের হাসপাতালে কঠোর সুরক্ষা চেকলিস্ট এবং কাটার আগে নিশ্চিত হওয়ার প্রটোকলগুলো মেনে চলাই রোগীদেরকে চিকিৎসাঘটিত অঙ্গহানি থেকে রক্ষা করে, যার ফলে শারীরস্থানের যেকোনো চমকপ্রদ ভিন্নতাও একজন দক্ষ চিকিৎসকের কাছে কোনো বিপদ না হয়ে নিরাপদ চিকিৎসার অংশ হয়ে ওঠে।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'প্রাতিষ্ঠানিক'),
      sections: [
        {
          id: 'introduction',
          heading: l('Michels Classification of Hepatic Arterial Anatomy and Angiography', 'হেপাটিক ধমনীর মিশেলস শ্রেণিবিভাগ ও ভাস্কুলার অ্যানজিওগ্রাফি'),
          paragraphs: [
            l(
              'In 1955, Nicholas Michels published his landmark autopsy series of 200 cadavers, classifying hepatic arterial branching into ten distinct patterns that remain the global standard for liver surgery and transplantation today. Type I represents classic textbook anatomy (55%): the celiac trunk gives off the common hepatic artery, dividing into gastroduodenal and proper hepatic arteries, which subdivide into right and left branches. Type II (10%) features a replaced left hepatic artery (rLHA) from the left gastric artery; Type III (11%) features a replaced right hepatic artery (rRHA) from the superior mesenteric artery (SMA); and Type IV (1%) features both replaced right and left hepatic arteries simultaneously.',
              '১৯৫৫ সালে নিকোলাস মিশেলস ২০০টি মরদেহের ব্যবচ্ছেদ করে হেপাটিক ধমনীর শাখাবিন্যাসকে দশটি সুনির্দিষ্ট ভাগে বিভক্ত করেন যা আজও লিভার সার্জারি ও অঙ্গ প্রতিস্থাপনের বিশ্বমানের ভিত্তি। টাইপ ১ হলো সাধারণ বইয়ের রূপ (৫৫%): সিলিয়াক ট্রাঙ্ক থেকে হেপাটিক ধমনী এসে ডান ও বাম শাখায় ভাগ হয়। টাইপ ২ (১০%) হলো বাম গ্যাস্ট্রিক থেকে আসা প্রতিস্থাপিত বাম ধমনী; টাইপ ৩ (১১%) হলো SMA থেকে আসা প্রতিস্থাপিত ডান ধমনী; আর টাইপ ৪ (১%) হলো একই রোগীর দেহে ডান ও বাম উভয় ধমনীরই অস্বাভাবিক উৎপত্তি।'
            ),
            l(
              'The surgical implications of Michels Type III (replaced right hepatic artery from SMA) are profound. Because the rRHA ascends through the retroportal space along the right posterolateral aspect of the portal vein and directly posterior to the head of the pancreas, it is uniquely vulnerable during the uncinate process dissection in a pancreaticoduodenectomy (Whipple procedure). Ligation of the rRHA induces right hepatic lobe ischemia, acute liver failure, and breakdown of the hepaticojejunostomy biliary anastomosis due to devascularization of the donor common hepatic duct, which derives 60% of its microvascular arcade from the right hepatic artery.',
              'মিশেলস টাইপ ৩ (SMA থেকে আসা ডান হেপাটিক ধমনী) অপারেশনের ক্ষেত্রে সবচেয়ে জটিল চ্যালেঞ্জ তৈরি করে। এই ধমনীটি অগ্ন্যাশয়ের মাথার পেছন দিয়ে এবং পোর্টাল শিরার পাশ দিয়ে যকৃতে যায় বলে অগ্ন্যাশয়ের ক্যান্সার অপারেশনের সময় এটি কেটে ফেলার তীব্র ঝুঁকি থাকে। এই ধমনীটি কাটা পড়লে যকৃতের ডান অংশ পচে নষ্ট হয়ে যায় এবং পিত্তনালীতে রক্ত সরবরাহ বন্ধ হয়ে সেলাই ফেটে পিত্তরস পেটের ভেতর ছড়িয়ে পড়ে জীবনঘাতী সেপসিস সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Embryogenesis of the Non-Recurrent Laryngeal Nerve and Arteria Lusoria', 'নন-রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ ও লুসোরিয়া ধমনীর ভ্রূণতত্ত্ব'),
          paragraphs: [
            l(
              'The embryological origin of the non-recurrent laryngeal nerve (NRLN) is intimately tethered to the regression of the aortic arch system during the 5th to 7th embryonic weeks. Under normal conditions, the right 6th aortic arch degenerates, but the right 4th aortic arch persists to form the proximal segment of the definitive right subclavian artery. As the heart and great vessels descend into the thorax, the right recurrent laryngeal nerve is caught beneath the 4th arch vessel, looping around the subclavian artery before ascending back into the neck.',
              'নন-রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভের (NRLN) উৎপত্তি গর্ভকালীন ৫ম থেকে ৭ম সপ্তাহে মহাধমনীর আর্চ ব্যবস্থার রূপান্তরের সাথে ওতপ্রোতভাবে জড়িত। স্বাভাবিক ভ্রূণে ডানদিকের ৬ষ্ঠ আর্চ নষ্ট হয়ে গেলেও ৪র্থ আর্চটি অক্ষত থাকে এবং স্থায়ী ডান সাবক্ল্যাভিয়ান ধমনী তৈরি করে। হৃৎপিণ্ড নিচের দিকে নেমে যাওয়ার সময় ডানদিকের স্নায়ুটি এই ৪র্থ আর্চের নিচে আটকা পড়ে এবং সাবক্ল্যাভিয়ান ধমনীকে পেঁচিয়ে আবার গলার দিকে উঠে আসে।'
            ),
            l(
              'In 0.5% to 1.0% of individuals, the embryonic right 4th aortic arch abnormally obliterates. Consequently, the right subclavian artery develops from the distal dorsal aorta, arising as the final branch of the aortic arch (arteria lusoria) and coursing obliquely from left to right behind the esophagus (retroesophageal subclavian artery). In roughly 5% of these individuals, the aberrant artery compresses the esophagus against the trachea, producing dysphagia lusoria. Because no right 4th arch vessel descends into the thorax, the right laryngeal nerve is freed from caudal traction and takes a direct, non-recurrent transverse course from the cervical vagus into the larynx.',
              'কিন্তু প্রায় ০.৫% থেকে ১% মানুষের ক্ষেত্রে ভ্রূণের ৪র্থ আর্চটি অস্বাভাবিকভাবে মুছে যায়। এর ফলে ডান সাবক্ল্যাভিয়ান ধমনীটি মহাধমনীর শেষ শাখা হিসেবে জন্ম নিয়ে খাদ্যনালীর পেছনের সরু স্থান দিয়ে ডানপাশে যায় (লুসোরিয়া ধমনী); যার ফলে খাদ্যনালী চেপে গিয়ে খাবার গিলতে কষ্ট হয়। যেহেতু ঘাড়ের নিচে কোনো রক্তনালী স্নায়ুটিকে টেনে নিচে নামায় না, তাই স্নায়ুটি সরাসরি গলার ভেগাস নার্ভ থেকে অনুভূমিকভাবে বেরিয়ে স্বরযন্ত্রে চলে যায়, যা থাইরয়েড সার্জারিতে অসাবধানতাবশত কাটার সবচেয়ে মারাত্মক ফাঁদ হিসেবে পরিচিত।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Embryonic Vitelline Remnants and Urorectal Septal Malformations', 'ভ্রূণীয় ভাইটেলাইন অবশেষ এবং মূত্র-পায়ুপথ প্রাচীরের রূপভেদ'),
          paragraphs: [
            l(
              'Meckel’s diverticulum is the mildest in a spectrum of vitelline (omphalomesenteric) duct anomalies. Complete patency of the duct produces an umbilical-ileal fistula with fecal discharge from the umbilicus; patency of the middle segment with closed ends forms a vitelline cyst (enterocystoma) predisposing to volvulus; and persistent fibrous cords connecting the ileum to the umbilicus can trap small bowel loops, causing acute mechanical strangulated intestinal obstruction in young children.',
              'মেকেলস ডাইভার্টিকুলাম হলো নাভি ও অন্ত্রের সংযোগকারী ভাইটেলাইন নালীর অপূর্ণ বিলুপ্তির একটি মৃদু রূপ। এই নালীটি পুরোপুরি খোলা থাকলে নাভি দিয়ে সরাসরি মল বের হতে থাকে (আম্বিলিক্যাল ফিস্টুলা); এর মাঝের অংশ খোলা থাকলে সিস্ট তৈরি হয়ে অন্ত্র প্যাঁচ খেয়ে যায়; আর নালীর অবশিষ্টাংশ শক্ত সুতার মতো লেগে থাকলে শিশুর অন্ত্র এর সাথে পেঁচিয়ে রক্ত চলাচল বন্ধ হয়ে মারাত্মক অন্ত্রের গ্যাংগ্রিন সৃষ্টি হতে পারে।'
            ),
            l(
              'Within a Meckel’s diverticulum, pluripotential embryonic endoderm can differentiate into heterotopic mucosa. Gastric oxyntic mucosa secretes hydrochloric acid into the adjacent ileal lumen, which lacks protective alkaline bicarbonate mucus secretions. The resulting peptic ulceration typically occurs not in the diverticulum itself, but in the adjacent normal ileal mucosa immediately downstream, presenting as painless bright red or maroon rectal bleeding (currant jelly stools) in children under two years of age, readily imaged with technetium-99m pertechnetate scintigraphy (Meckel scan).',
              'মেকেলস ডাইভার্টিকুলামের ভেতরের আদিম কোষগুলো ভুলবশত পাকস্থলীর কোষে রূপান্তরিত হয়ে হাইড্রোক্লোরিক অ্যাসিড তৈরি করতে শুরু করে। ক্ষুদ্রান্ত্রে অ্যাসিড সহ্য করার ক্ষমতা না থাকায় এই অ্যাসিডের কারণে অন্ত্রের দেয়ালে গভীর আলসার সৃষ্টি হয়। এর ফলে দুই বছরের কম বয়সী শিশুদের ক্ষেত্রে কোনো পেটব্যথা ছাড়াই পায়খানার সাথে তাজা লাল বা মেরুন রঙের প্রচুর রক্ত যেতে থাকে, যা রেডিওঅ্যাক্টিভ টেকনিশিয়াম-৯৯ স্ক্যানের মাধ্যমে পেটের ভেতর উজ্জ্বল আলো হিসেবে অত্যন্ত নিখুঁতভাবে শনাক্ত করা যায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Neural Cross-Talk: Martin-Gruber and Riche-Cannieu Anastomoses', 'স্নায়বিক আন্তঃসংযোগ: মার্টিন-গ্রুবার ও রিচে-ক্যানিউ অ্যানাস্টোমোসিস'),
          paragraphs: [
            l(
              'Anomalous peripheral motor communication between the median and ulnar nerves complicates neurophysiological testing and surgical repair of peripheral nerve injuries. The Martin-Gruber anastomosis (MGA) is present in 15% to 30% of forearms, consisting of motor axons that depart the median nerve (frequently via the anterior interosseous nerve) in the proximal forearm, cross deep to the flexor digitorum profundus, and join the main trunk of the ulnar nerve to supply intrinsic hand muscles (most commonly the first dorsal interosseous and adductor pollicis).',
              'হাতের মিডিয়ান এবং আলনার স্নায়ুর মধ্যকার অস্বাভাবিক যোগাযোগ নার্ভ কন্ডাকশন পরীক্ষা এবং স্নায়ু মেরামতের অস্ত্রোপচারকে অত্যন্ত বিভ্রান্তিকর করে তোলে। প্রায় ১৫% থেকে ৩০% মানুষের অগ্রবাহুতে মার্টিন-গ্রুবার অ্যানাস্টোমোসিস (MGA) থাকে, যেখানে মিডিয়ান নার্ভের মোটর তন্তুগুলো কনুইয়ের কাছে আলনার নার্ভে প্রবেশ করে এবং হাতের তালুর পেশীগুলোকে নিয়ন্ত্রণ করে।'
            ),
            l(
              'Clinically, a complete laceration of the ulnar nerve at the elbow in a patient with a Martin-Gruber anastomosis produces anomalous sparing of the intrinsic hand muscles, confounding the diagnosis of a complete nerve transection. Conversely, severe carpal tunnel syndrome in an MGA patient can paradoxically diminish ulnar-innervated muscle potentials, misleading electromyographers into diagnosing a coexisting ulnar neuropathy unless supramaximal stimulation is systematically performed at both wrist and elbow sites.',
              'এর ফলে কনুইয়ের কাছে আলনার স্নায়ু পুরোপুরি কেটে গেলেও এই বিশেষ সংযোগের কারণে হাতের তালুর পেশীগুলো প্যারালাইসিস না হয়ে সচল থাকে, যা চিকিৎসককে সম্পূর্ণ স্নায়ু কর্তন বুঝতে বিভ্রান্ত করে। একইভাবে কবজিতে কার্পাল টানেল সিন্ড্রোম হলে আলনার পেশীগুলোও দুর্বল মনে হতে পারে; তাই হাতের স্নায়ু পরীক্ষা করার সময় কবজি এবং কনুই উভয় স্থানে বৈদ্যুতিক উদ্দীপনা দিয়ে এই জন্মগত সংযোগটি পরীক্ষা করা নিউরোলজিস্টদের একটি বাধ্যতামূলক নিয়ম।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('High-Reliability Surgical Systems and the Critical View of Safety', 'উচ্চ-নির্ভরযোগ্য সার্জিক্যাল ব্যবস্থা ও ক্রিটিক্যাল ভিউ অব সেফটি'),
          paragraphs: [
            l(
              'To eliminate common bile duct injuries during laparoscopic cholecystectomy caused by misidentifying aberrant cystic or sectoral bile ducts, Strasberg formulated the "Critical View of Safety" (CVS). Achieving the CVS requires three non-negotiable criteria before any structure is clipped: the hepatocystic triangle (bounded by cystic duct, common hepatic duct, and liver bed) must be cleared entirely of fat and fibrous tissue; the lower third of the gallbladder must be dissected off the liver bed; and only two structures (the cystic duct and cystic artery) must be seen entering the gallbladder.',
              'ল্যাপারোস্কোপিক পিত্তথলির অপারেশনে পিত্তনালীর রূপভেদজনিত ভুল কাটা চিরতরে বন্ধ করতে স্ট্রাসবার্গ "ক্রিটিক্যাল ভিউ অব সেফটি" (CVS) নীতি প্রণয়ন করেছেন। ক্লিপ লাগানোর আগে তিনটি শর্ত পূরণ করা বাধ্যতামূলক: হেপাটোসিস্টিক ত্রিভুজের সমস্ত চর্বি পরিষ্কার করতে হবে; পিত্তথলির নিচের এক-তৃতীয়াংশ লিভারের গা থেকে পুরোপুরি মুক্ত করতে হবে; এবং কেবল দুটি নালী (সিস্টিক নালী ও সিস্টিক ধমনী) পিত্তথলিতে ঢুকছে তা খালি চোখে স্পষ্ট দেখতে হবে।'
            ),
            l(
              'The Critical View of Safety completely eliminates the common cognitive error of mistaking a short common bile duct or an aberrant right hepatic duct for the cystic duct. If extensive severe inflammation obliterates the triangle planes, surgical safety mandates conversion to subtotal fenestrating cholecystectomy or open exploration, proving that adherence to standardized surgical safety frameworks prevents catastrophic iatrogenic disability regardless of underlying patient anatomical anomalies.',
              'এই নীতি কঠোরভাবে অনুসরণ করলে ভুলবশত প্রধান পিত্তনালী বা অস্বাভাবিক হেপাটিক নালী কেটে ফেলার মতো জীবনঘাতী বিপর্যয় পুরোপুরি নির্মূল হয়। প্রচণ্ড প্রদাহের কারণে এই নিরাপদ দৃশ্যপট তৈরি করা সম্ভব না হলে জোর করে না কেটে পিত্তথলির মুখ খোলা রেখে আংশিক অপসারণ করা উচিত; এটি প্রমাণ করে যে নিরাপদ চিকিৎসা ব্যবস্থা শারীরিক রূপভেদ সত্ত্বেও রোগীকে চিরতরে সুস্থ রাখতে সক্ষম।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis of Anatomic Heterogeneity and Operative Safety', 'শারীরস্থানিক বৈচিত্র্য ও অস্ত্রোপচার নিরাপত্তার প্রাতিষ্ঠানিক সমন্বয়'),
          paragraphs: [
            l(
              'Human anatomical variation is an intrinsic feature of biological populations governed by evolutionary genetics and embryonic mechanics. Categorizing arterial variations via Michels classification, identifying non-recurrent nerves, and understanding visceral malrotations provides the scientific foundation for specialized surgical and interventional practice.',
              'মানবদেহের শারীরিক ভিন্নতা কোনো রোগ নয়, বরং এটি জিনগত ও ভ্রূণীয় বলবিদ্যার একটি স্বাভাবিক জৈবিক বৈচিত্র্য। মিশেলস শ্রেণিবিভাগ দিয়ে ধমনীর রূপভেদ বোঝা, নন-রিকারেন্ট স্নায়ু শনাক্ত করা এবং অঙ্গের জন্মগত স্থানচ্যুতি জানা আধুনিক সার্জারি এবং ইন্টারভেনশনাল রেডিওলজির বৈজ্ঞানিক ভিত্তি হিসেবে কাজ করে।'
            ),
            l(
              'Ultimately, surgical patient safety depends not upon the assumption of uniformity, but upon institutionalized vigilance: pairing meticulous cross-sectional imaging with standardized verification checkpoints (WHO checklist, Critical View of Safety) ensures that anatomical diversity is anticipated, respected, and navigated with consummate operative excellence.',
              'পরিশেষে রোগীর অস্ত্রোপচারকালীন নিরাপত্তা কখনো সবার শরীর একরকম হবে এই ভ্রান্ত অনুমানের ওপর নির্ভর করে না, বরং প্রাতিষ্ঠানিক সতর্কতার ওপর নির্ভর করে: সঠিক সিটি ইমেজিংয়ের সাথে আন্তর্জাতিক সুরক্ষা চেকলিস্টের সমন্বয় ঘটিয়ে শারীরস্থানের যেকোনো বৈচিত্র্যকে পরম দক্ষতার সাথে পরিচালনা করাই হলো একজন বিশ্বমানের শল্যচিকিৎসকের প্রকৃত পরিচয়।'
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
          heading: l('Complex Cirrhotic Portosystemic Collaterals and Vascular Shunting', 'লিভার সিরোসিসের জটিল পোর্টোসিস্টেমিক শান্ট ও রক্তনালীর রূপভেদ'),
          paragraphs: [
            l(
              'In end-stage liver disease and portal hypertension, embryonic vascular channels that normally obliterate postnatally can reopen, creating massive spontaneous portosystemic shunts. The umbilical vein within the ligamentum teres recanalizes, carrying portal blood anteriorly into the superficial abdominal wall veins to produce caput medusae. Splenorenal shunts (collaterals between splenic and left renal veins) and gastroesophageal varices develop rapidly. Mapping these complex dilated collateral networks on multiphasic CT angiography is paramount prior to liver transplantation, as clamping or avulsing an unrecognized high-flow retroperitoneal shunt precipitates catastrophic intraoperative exsanguination.',
              'লিভার সিরোসিসের কারণে পোর্টাল রক্তচাপ অতিরিক্ত বৃদ্ধি পেলে ভ্রূণাবস্থায় বন্ধ হয়ে যাওয়া পুরনো রক্তনালীগুলো পুনরায় চালু হয়ে গিয়ে পেটের ভেতর বিশাল অস্বাভাবিক বাইপাস পথ তৈরি করে। নাভির লিগামেন্টামের ভেতর থাকা আম্বিলিক্যাল শিরা খুলে গিয়ে পেটের চামড়ার শিরাগুলোকে ফুলিয়ে তোলে (ক্যাপুট মেডুসি)। স্প্লেনোরেনাল শান্ট এবং খাদ্যনালীর শিরাগুলো ফুলে মারাত্মক রক্তবমির ঝুঁকি সৃষ্টি করে। লিভার প্রতিস্থাপন অপারেশনের আগে সিটি অ্যানজিওগ্রাম করে এই অস্বাভাবিক রক্তনালীর জাল চিহ্নিত করা অপরিহার্য, অন্যথায় হঠাৎ এই শিরা ফেটে কয়েক মিনিটের ভেতর রোগীর সমস্ত রক্ত পেটের ভেতর ঝরে পড়তে পারে।'
            ),
            l(
              'Congenital extrahepatic portosystemic shunts (Abernethy malformations) present an extreme developmental variant where portal venous blood bypasses the liver entirely to drain directly into the inferior vena cava or renal veins. Type 1 Abernethy malformations feature complete absence of intrahepatic portal veins, demanding liver transplantation, whereas Type 2 malformations feature preserved hypoplastic portal branches that can be treated with catheter-directed coil embolization, demonstrating how developmental vascular variations dictate organ-level therapy.',
              'জন্মগত এক্সট্রাহেপাটিক পোর্টোসিস্টেমিক শান্ট (অ্যাবার্নেথি ম্যালফরমেশন) হলো রক্ত সংবহনের এমন একটি চরম রূপভেদ যেখানে পোর্টাল রক্ত লিভারে প্রবেশ না করে সরাসরি ইনফিরিয়র ভেনাকাভায় চলে যায়। টাইপ ১ ক্ষেত্রে লিভারের ভেতর কোনো পোর্টাল শিরাই থাকে না যার কারণে লিভার প্রতিস্থাপন ছাড়া অন্য কোনো উপায় থাকে না; আর টাইপ ২ ক্ষেত্রে সরু রক্তনালী সচল থাকায় ক্যাথেটার দিয়ে অস্বাভাবিক শান্টটি বন্ধ করে দিয়ে রোগীকে পুরোপুরি সুস্থ করা সম্ভব হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Intraoperative Neuromonitoring (IONM) and Nerve Preservation Protocols', 'অস্ত্রোপচারকালীন ইন্ট্রাঅপারেটিভ নিউরোমনিটরিং (IONM) ও স্নায়ু সুরক্ষা'),
          paragraphs: [
            l(
              'In thyroid, parathyroid, and skull base oncological surgery, intraoperative neuromonitoring (IONM) has revolutionized the preservation of the recurrent laryngeal nerve (RLN) and its non-recurrent variants. IONM utilizes an endotracheal tube embedded with surface recording electrodes in contact with the true vocal cords, paired with a handheld stimulating probe. The surgeon stimulates the vagus nerve in the carotid sheath to obtain a baseline electromyographic (EMG) signal, then tracks the nerve across the surgical bed, verifying functional integrity through latency and amplitude metrics.',
              'থাইরয়েড ও মাথার খুলির ক্যান্সার অপারেশনের সময় ইন্ট্রাঅপারেটিভ নিউরোমনিটরিং (IONM) রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ ও এর নন-রিকারেন্ট রূপভেদকে অক্ষত রাখার ক্ষেত্রে বৈপ্লবিক পরিবর্তন এনেছে। এতে রোগীর শ্বাসনালীর টিউবের সাথে সংযুক্ত ইলেকট্রোড স্বরতন্ত্রী স্পর্শ করে থাকে এবং সার্জন একটি সূক্ষ্ম স্টিমুলেশন প্রোব দিয়ে স্নায়ু স্পর্শ করেন। ঘাড়ের ভেগাস স্নায়ু স্পর্শ করে প্রাথমিক সংকেত নেওয়ার পর অপারেশনের পুরো সময় ধরে স্নায়ুর সংকেতের বিস্তার মেপে নিশ্চিত হওয়া যায় যে স্নায়ুর কোনো ক্ষতি হচ্ছে না।'
            ),
            l(
              'A loss of signal (LOS, defined as amplitude <100 μV following baseline >500 μV) alerts the surgeon to impending neuropraxia or traction injury. If a confirmed LOS occurs on the first side of a planned bilateral total thyroidectomy, modern endocrine surgical safety guidelines mandate staging the procedure—terminating the operation after completing the first lobe and delaying the contralateral lobectomy until vocal cord mobility recovers—thereby completely eliminating the catastrophic complication of bilateral vocal cord paralysis and emergent tracheostomy.',
              'অপারেশনের সময় সংকেত হারিয়ে গেলে (LOS) সার্জন অবিলম্বে সতর্ক হন যে স্নায়ুর ওপর অতিরিক্ত টান পড়েছে বা ক্ষতি হচ্ছে। দুই পাশের থাইরয়েড কাটার সময় প্রথম পাশের অপারেশনে যদি সংকেত নষ্ট হয়ে যায়, তবে আন্তর্জাতিক নিরাপত্তা গাইডলাইন অনুযায়ী অবিলম্বে অপারেশন স্থগিত করা হয় এবং দ্বিতীয় পাশের অপারেশন কয়েক মাস পিছিয়ে দেওয়া হয় যতক্ষণ না প্রথম স্নায়ুটি ভালো হয়; এর ফলে উভয় পাশের স্বরতন্ত্রী অবশ হয়ে রোগী শ্বাসরুদ্ধ হয়ে মারা যাওয়ার ভয়াবহ পরিণতি শতভাগ প্রতিরোধ করা সম্ভব হয়।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-sector schematic of clinical anatomical variation and surgical safety: replaced hepatic arterial branching, the non-recurrent laryngeal nerve, Meckel’s diverticulum and horseshoe kidney, and the WHO surgical safety checklist.',
      'শারীরস্থানিক ভিন্নতা ও অস্ত্রোপচার নিরাপত্তার ৪টি মূল ক্ষেত্র: প্রতিস্থাপিত হেপাটিক ধমনী, নন-রিকারেন্ট ল্যারিঞ্জিয়াল স্নায়ু, মেকেলস ও হর্সশু কিডনি এবং বিশ্ব স্বাস্থ্য সংস্থার সার্জিক্যাল সেফটি চেকলিস্ট।'
    ),
    steps: [
      l(
        '1. Replaced hepatic arteries (arising from SMA or left gastric artery) alter standard vascular anatomy during liver and pancreas resections.',
        '১. প্রতিস্থাপিত হেপাটিক ধমনী (SMA বা বাম গ্যাস্ট্রিক থেকে উৎপন্ন) লিভার ও অগ্ন্যাশয়ের অপারেশনে সাধারণ রক্তনালীর রূপ পরিবর্তন করে।'
      ),
      l(
        '2. The non-recurrent laryngeal nerve (NRLN) emerges directly in the neck in patients with an aberrant retroesophageal right subclavian artery.',
        '২. অস্বাভাবিক ডান সাবক্ল্যাভিয়ান ধমনী থাকা ব্যক্তিদের ক্ষেত্রে নন-রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ সরাসরি ঘাড় থেকে স্বরযন্ত্রে প্রবেশ করে।'
      ),
      l(
        '3. Embryological visceral remnants include Meckel’s diverticulum (vitelline duct) and horseshoe kidney (inferior mesenteric artery arrest).',
        '৩. ভ্রূণীয় অবশেষের মধ্যে মেকেলস ডাইভার্টিকুলাম এবং হর্সশু কিডনি (IMA ধমনী দ্বারা আটকে যাওয়া) প্রধান শারীরিক ভিন্নতা।'
      ),
      l(
        '4. The WHO Surgical Safety Checklist and intraoperative confirmation protocols eliminate wrong-site surgery and prevent iatrogenic nerve transection.',
        '৪. বিশ্ব স্বাস্থ্য সংস্থার সার্জিক্যাল চেকলিস্ট ও নিশ্চিতকরণ প্রটোকল ভুল অঙ্গের অপারেশন বন্ধ করে এবং স্নায়ু কাটা প্রতিরোধ করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'During a pancreaticoduodenectomy (Whipple procedure), a surgeon palpates an anomalous arterial pulse coursing along the right posterolateral aspect of the portal vein and posterior to the pancreatic head. According to the Michels classification, what is this variation, and what is its vessel of origin?',
      'অগ্ন্যাশয়ের ক্যান্সার অপারেশনের (হুইপলস পদ্ধতি) সময় সার্জন পোর্টাল শিরার ডান পেছনের দিকে এবং অগ্ন্যাশয়ের মাথার পেছনে একটি অস্বাভাবিক ধমনীর স্পন্দন অনুভব করলেন। মিশেলস শ্রেণিবিভাগ অনুসারে এটি কোন ধমনীর রূপভেদ এবং এটি কোথা থেকে উৎপন্ন হয়েছে?',
    ),
    options: [
      l('Replaced right hepatic artery arising from the superior mesenteric artery (SMA)', 'সুপিরিয়র মেসেন্টেরিক ধমনী (SMA) থেকে উৎপন্ন প্রতিস্থাপিত ডান হেপাটিক ধমনী'),
      l('Replaced left hepatic artery arising from the left gastric artery', 'বাম গ্যাস্ট্রিক ধমনী থেকে উৎপন্ন প্রতিস্থাপিত বাম হেপাটিক ধমনী'),
      l('Accessory splenic artery arising from the celiac trunk', 'সিলিয়াক ট্রাঙ্ক থেকে উৎপন্ন অতিরিক্ত স্প্লেনিক ধমনী'),
      l('Aberrant right subclavian artery arising from the abdominal aorta', 'উদরীয় মহাধমনী থেকে উৎপন্ন অস্বাভাবিক ডান সাবক্ল্যাভিয়ান ধমনী'),
    ],
    correctIndex: 0,
    explanation: l(
      'Under the Michels classification of hepatic arterial anatomy, Type III represents a replaced right hepatic artery (rRHA) arising from the superior mesenteric artery (SMA), occurring in 12% to 15% of individuals. The rRHA ascends toward the liver by traveling in the retroportal space, directly along the posterolateral margin of the portal vein and posterior to the head of the pancreas and uncinate process. Recognizing this variation is critical during a Whipple procedure to avoid inadvertent ligation, which causes severe right hepatic lobe necrosis and breakdown of the biliary anastomosis.',
      'হেপাটিক ধমনীর মিশেলস শ্রেণিবিভাগ অনুসারে টাইপ ৩ হলো সুপিরিয়র মেসেন্টেরিক ধমনী (SMA) থেকে বের হওয়া প্রতিস্থাপিত ডান হেপাটিক ধমনী, যা প্রায় ১২% থেকে ১৫% মানুষের দেহে থাকে। এই ধমনীটি অগ্ন্যাশয়ের মাথার পেছন দিয়ে এবং পোর্টাল শিরার পাশ দিয়ে যকৃতে রক্ত নিয়ে যায়। অগ্ন্যাশয়ের অপারেশনে এটি আগে থেকেই শনাক্ত করে রক্ষা করা অত্যন্ত জরুরি, অন্যথায় ভুলবশত কেটে ফেললে যকৃতের ডান অংশ পচে নষ্ট হয়ে যায় এবং পিত্তনালীর সেলাই ছিঁড়ে মারাত্মক জটিলতা সৃষ্টি হয়।'
    ),
  },
}
