import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch23',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 23: The Digestive System',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-introduction',
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

export const chapter12DigestiveLesson: LessonTopic = {
  id: 'topic.anatomy.digestive',
  slug: 'digestive',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('12 · Digestive Anatomy', '১২ · পরিপাকতন্ত্রের অ্যানাটমি'),
  summary: l(
    'A comprehensive, clinically oriented study of the human digestive system: gastrointestinal wall histology, peritoneal spaces, stomach and intestinal compartments, Couinaud hepatic segmentation, biliary-pancreatic arborization, portosystemic shunts, and abdominal emergencies.',
    'মানবদেহের পরিপাকতন্ত্রের বিশদ ও ক্লিনিক্যাল শারীরস্থানিক অধ্যয়ন: পরিপাকনালির চার স্তরীয় অণুগঠন, পেরিটোনিয়াল স্থান, পাকস্থলী ও অন্ত্রের বিভাজন, যকৃতের কুইনো সেগমেন্টেশন, পিত্ত-অগ্ন্যাশয় নালি ব্যবস্থা, পোর্টাল-সিস্টেমিক রক্তজালক এবং জরুরি পেটের সার্জিক্যাল প্যাথোলজি।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Analyze the four-layered histological architecture of the alimentary tract (mucosa, submucosa, muscularis externa, serosa/adventitia) and enteric nervous plexuses (Meissner and Auerbach).',
      'পরিপাকনালির চার স্তরীয় কলাস্থানিক গঠন (মিউকোসা, সাবমিউকোসা, মাসকিউলারিস এক্সটার্না, সেরোসা/অ্যাডভেনটিশিয়া) এবং এন্টারিক স্নায়ু প্লেক্সাস (মেইসনার ও আউয়ারবাখ) বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Map Couinaud functional hepatic segments (I–VIII), porta hepatis vascular arborization, and the biliary-pancreatic confluence at the hepatopancreatic ampulla of Vater.',
      'যকৃতের কুইনো কার্যকরী সেগমেন্ট (I–VIII), পোর্টা হেপাটিসের রক্তনালী বিন্যাস এবং ভ্যাটারের অ্যাম্পুলায় পিত্ত-অগ্ন্যাশয় নালির মিলনস্থল মানচিত্রে চিহ্নিত করতে পারা।'
    ),
    l(
      'Evaluate portosystemic collateral pathways (esophageal, rectal, retroperitoneal, and paraumbilical) in portal hypertension and correlate with clinical emergencies.',
      'পোর্টাল হাইপারটেনশনে পোর্টাল-সিস্টেমিক বাইপাস পথসমূহ (অন্ননালি, মলদ্বার, রেট্রোপেরিটোনিয়াল ও নাভির চারপাশ) মূল্যায়ন করা এবং ক্লিনিক্যাল জটিলতার সাথে সম্পর্ক স্থাপন করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.cardiovascular'],
  relatedTopicIds: ['topic.anatomy.cells-tissues'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch23', 'junqueira-histology-16e'],
    structure: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    mechanism: ['guyton-hall-14e', 'openstax-ap2e-ch23'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'guyton-hall-14e'],
    takeaways: ['openstax-ap2e-ch23', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: Alimentary Architecture & Peritoneum', 'ভূমিকা: পরিপাকনালির স্তরবিন্যাস ও পেরিটোনিয়াম'), sectionId: 'introduction' },
      { id: 'sec-upper-gi', label: l('Upper GI: Esophagus, Stomach & Gastric Secretion', 'উর্ধ্ব জিআই: খাদ্যনালি, পাকস্থলী ও ক্ষরণ'), sectionId: 'structure' },
      { id: 'sec-intestines', label: l('Intestinal Arborization: Small & Large Bowel', 'অন্ত্রের সংগঠন: ক্ষুদ্রান্ত্র ও বৃহদন্ত্র'), sectionId: 'mechanism' },
      { id: 'sec-liver-pancreas', label: l('Hepato-Biliary-Pancreatic Complex & Couinaud Segments', 'যকৃৎ-পিত্ত-অগ্ন্যাশয় তন্ত্র ও কুইনো সেগমেন্ট'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Portosystemic Shunts, Appendicitis & GI Emergencies', 'পোর্টাল-সিস্টেমিক শান্ট, অ্যাপেন্ডিসাইটিস ও জরুরি অবস্থা'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary & Alimentary Glossary', 'সারসংক্ষেপ ও পরিপাকতন্ত্রের শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Couinaud Hepatic Segmentation', 'কুইনো হেপাটিক সেগমেন্টেশন'),
        definition: l(
          'Division of the liver into 8 functionally independent vascular segments (I through VIII) based on secondary and tertiary branching of the portal triad and drainage by hepatic veins, enabling precise anatomical segmentectomies.',
          'পোর্টাল ট্রায়াডের শাখা ও হেপাটিক শিরার নিষ্কাশনের ভিত্তিতে যকৃতকে ৮টি স্বাধীন ভাস্কুলার সেগমেন্টে বিভক্ত করার পদ্ধতি, যা রক্তপাতহীন অস্ত্রোপচারের ভিত্তি।'
        ),
      },
      {
        term: l('Portosystemic Anastomoses', 'পোর্টাল-সিস্টেমিক অ্যানাস্টোমোসিস'),
        definition: l(
          'Specific clinical anatomical sites where the portal venous circulation directly interconnects with systemic veins: gastroesophageal junction, periumbilical region, anal canal, and retroperitoneum.',
          'শরীরের নির্দিষ্ট স্থান যেখানে পোর্টাল শিরা সরাসরি সিস্টেমিক ভেনাস ড্রেনেজের সাথে মিলিত হয়: নিম্ন খাদ্যনালি, নাভির চারপাশ, মলদ্বার এবং রেট্রোপেরিটোনিয়াম।'
        ),
      },
      {
        term: l('Ampulla of Vater & Sphincter of Oddi', 'ভ্যাটারের অ্যাম্পুলা ও অডির স্ফিংক্টার'),
        definition: l(
          'The dilatated hepatopancreatic junction where the common bile duct and main pancreatic duct unite within the major duodenal papilla; surrounded by smooth muscle sphincters regulating bile and pancreatic flow.',
          'ডুওডেনামের দ্বিতীয় অংশে অবস্থিত সংযোগস্থল যেখানে সাধারণ পিত্তনালি ও অগ্ন্যাশয় নালি মিলিত হয়ে ডুওডেনামে উন্মুক্ত হয়।'
        ),
      },
      {
        term: l('Enteric Nervous System (Auerbach & Meissner)', 'এন্টারিক স্নায়ুতন্ত্র (আউয়ারবাখ ও মেইসনার)'),
        definition: l(
          'The autonomous nervous network of the gut: the myenteric (Auerbach) plexus controls muscular motility, while the submucosal (Meissner) plexus regulates mucosal secretion and blood flow.',
          'পরিপাকনালির নিজস্ব স্নায়ুতন্ত্র: মায়েন্টেরিক প্লেক্সাস পেরিস্টালসিস নিয়ন্ত্রণ করে এবং সাবমিউকোসাল প্লেক্সাস ক্ষরণ ও রক্তপ্রবাহ নিয়ন্ত্রণ করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Localizing and Diagnosing Acute Appendicitis via McBurney Point', 'ম্যাকবার্নি বিন্দু ব্যবহার করে তীব্র অ্যাপেন্ডিসাইটিস নির্ণয় ও শারীরস্থানিক ভিত্তি'),
        steps: [
          l('Step 1: Understand visceral pain pathways: early luminal obstruction stretches visceral afferents running with sympathetic nerves (T10 dermatome), causing dull periumbilical pain.', 'ধাপ ১: অ্যাপেন্ডিক্সের নালী বন্ধ হলে ভিসেরাল স্নায়ু প্রসারিত হয়ে T10 ডার্মাটোমে সংকেত পাঠায়, যার ফলে নাভির চারপাশে অস্পষ্ট ব্যথা শুরু হয়।'),
          l('Step 2: Recognize somatic peritoneal irritation: transmural inflammation reaching the parietal peritoneum stimulates somatic afferents, producing sharp localized right lower quadrant pain.', 'ধাপ ২: প্রদাহ যখন প্যারাইটাল পেরিটোনিয়ামে ছড়ায়, তখন ডান তলপেটে তীব্র ও সুনির্দিষ্ট ব্যথা অনুভূত হয়।'),
          l('Step 3: Palpate McBurney point: located two-thirds along a line from umbilicus to right anterior superior iliac spine (ASIS), marking the base of the appendix.', 'ধাপ ৩: নাভি থেকে ডান ASIS পর্যন্ত রেখার বাইরের এক-তৃতীয়াংশের সংযোগস্থলে চাপ দিলে তীব্র ম্যাকবার্নি সাইন পাওয়া যায়।'),
        ],
        conclusion: l('The chronological shift from periumbilical visceral pain to localized somatic pain at McBurney point reflects appendiceal neuroanatomy and dictates emergency surgery.', 'নাভি থেকে ম্যাকবার্নি বিন্দুতে ব্যথার স্থানান্তর অ্যাপেন্ডিসাইটিসের নিশ্চিত শারীরস্থানিক লক্ষণ যা জরুরি অস্ত্রোপচারের নির্দেশ দেয়।'),
      },
    ],
    checkpoints: [
      {
        question: l('Why does severe liver cirrhosis cause massive hematemesis from ruptured esophageal varices?', 'গুরুতর লিভার সিরোসিসে খাদ্যনালির ভেরিকোজ শিরা ফেটে গিয়ে হঠাৎ প্রচুর রক্তবমি হয় কেন?'),
        answer: l('Cirrhotic fibrosis causes high sinusoidal resistance, elevating portal pressure (>12 mmHg). Blood shunts retrogradely through the left gastric vein into esophageal submucosal veins draining to the azygos system, which dilate and rupture under high tension.', 'সিরোসিসের উচ্চ চাপে রক্ত বাম গ্যাস্ট্রিক শিরা দিয়ে খাদ্যনালির পাতলা সাবমিউকোসাল শিরাগুলোতে গিয়ে আজাইগোস শিরায় ড্রেন হতে চায়; ফলে শিরাগুলো ফুলে ফেটে গিয়ে রক্তবমি ঘটায়।'),
      },
      {
        question: l('What anatomical relationship explains why posterior gastric peptic ulcers can cause catastrophic abdominal hemorrhage?', 'পাকস্থলীর পেছনের প্রাচীরের গ্যাস্ট্রিক আলসার ফেটে গেলে মারাত্মক পেটের রক্তক্ষরণ হওয়ার শারীরস্থানিক কারণ কী?'),
        answer: l('The splenic artery runs tortuously along the superior border of the pancreas directly posterior to the stomach bed. A deep posterior ulcer erodes through the lesser sac into the splenic artery trunk, causing torrential arterial bleeding.', 'প্লীহা ধমনীটি অগ্ন্যাশয়ের ওপর দিয়ে পাকস্থলীর পেছনের প্রাচীর ঘেঁষে প্রবাহিত হয়। গভীর আলসার প্রাচীর ছিদ্র করে সরাসরি এই ধমনী কেটে ফেললে কয়েক মিনিটে তীব্র রক্তক্ষরণ ঘটে।'),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch12-digestive-diagram',
    title: l('Interactive Alimentary Tract & Hepatobiliary Architecture', 'ইন্টারেক্টিভ পরিপাকনালি ও হেপাটোবিলিয়ারি কাঠামো'),
    description: l(
      'Explore the four primary anatomical compartments of the gastrointestinal system: the upper alimentary tract, the mesenteric small intestine, the large intestine, and the hepatobiliary-pancreatic nexus.',
      'পরিপাকতন্ত্রের চারটি প্রধান শারীরস্থানিক অঞ্চল পরীক্ষা করুন: উর্ধ্ব পরিপাকনালি, মেসেন্টেরিক ক্ষুদ্রান্ত্র, বৃহদন্ত্র এবং যকৃৎ-পিত্ত-অগ্ন্যাশয় জটিল সংযোগ।'
    ),
    disclaimer: l(
      'Anatomical schematic for educational study: select any functional zone to explore mucosal specializations, neurovascular pedicles, and clinical pathology.',
      'শিক্ষামূলক শারীরস্থানিক নকশা: মিউকোসার বিশেষ রূপান্তর, রক্তনালী-স্নায়ু সরবরাহ এবং ক্লিনিক্যাল রোগব্যাধি দেখতে যেকোনো অঞ্চল নির্বাচন করুন।'
    ),
    svgType: 'digestive-system',
    items: [
      {
        id: 'esophagus-stomach',
        label: l('Upper GI: Esophagus & Stomach', 'উর্ধ্ব জিআই: খাদ্যনালি ও পাকস্থলী'),
        description: l(
          'Muscular conduit and digestive reservoir. Esophagus transitions from skeletal to smooth muscle. Stomach features 3 muscular layers (longitudinal, circular, oblique) and rugal folds.',
          'পেশীবহুল খাদ্যনালি এবং পাচক থলি। খাদ্যনালি ঐচ্ছিক থেকে অনৈচ্ছিক মসৃণ পেশীতে রূপান্তরিত হয়। পাকস্থলীতে তিনটি পেশীস্তর এবং অ্যাসিড ক্ষরণকারী গ্যাস্ট্রিক গ্রন্থি থাকে।'
        ),
        details: l(
          'Gastric mucosa houses parietal cells (HCl, intrinsic factor) and chief cells (pepsinogen). Blood supply from celiac trunk via gastric and gastroepiploic arches.',
          'প্যারাইটাল কোষ থেকে হাইড্রোক্লোরিক অ্যাসিড ও ইন্ট্রিনসিক ফ্যাক্টর এবং চিফ কোষ থেকে পেপসিনোজেন নিঃসৃত হয়। সিলিয়াক ট্রাঙ্কের ধমনী রক্ত সরবরাহ করে।'
        ),
        sectionId: 'structure',
        color: '#fecdd3',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'small-intestine',
        label: l('Small Intestine: Duodenum to Ileum', 'ক্ষুদ্রান্ত্র: ডুওডেনাম থেকে ইলিয়াম'),
        description: l(
          'Primary site of chemical digestion and nutrient absorption spanning 6 meters: duodenum (C-loop), jejunum (tall plicae circulares), and ileum (Peyer patches, lymphoid aggregates).',
          '৬ মিটার লম্বা রাসায়নিক পরিপাক ও পুষ্টি শোষণের মূল স্থান: ডুওডেনাম (সি-আকৃতির), জেজুনাম (উঁচু বৃত্তাকার খাঁজ) এবং ইলিয়াম (পেয়ারস প্যাচ সমৃদ্ধ লসিকাবহুল টিস্যু)।'
        ),
        details: l(
          'Surface amplification: plicae circulares (3x), villi (10x), and microvillar brush border (20x) expand absorptive surface to over 30 square meters. Supplied by superior mesenteric artery.',
          'অভ্যন্তরীণ ভাঁজ, ভিলাই এবং মাইক্রোভিলাই মিলে শোষণের ক্ষেত্রফল ৩০ বর্গমিটারের বেশি বৃদ্ধি করে। সুপিরিয়র মেসেন্টেরিক ধমনী পুরো ক্ষুদ্রান্ত্রে রক্ত দেয়।'
        ),
        sectionId: 'mechanism',
        color: '#fed7aa',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'large-intestine',
        label: l('Large Intestine: Colon & Appendix', 'বৃহদন্ত্র: কোলন ও অ্যাপেন্ডিক্স'),
        description: l(
          'Water resorptive colon with structural hallmarks: teniae coli (3 longitudinal smooth muscle bands), haustra (sacculations), and omental appendices. Cecum anchors the lymphoid appendix.',
          'পানি ও ইলেক্ট্রোলাইট শোষণকারী কোলন। তিনটি বিশেষ বৈশিষ্ট্য: টিনিয়া কোলাই (৩টি অনুদৈর্ঘ্য পেশীব্যান্ড), হস্ট্রা (থলেসদৃশ খাঁজ) এবং ওমেন্টাল অ্যাপেন্ডিসেস।'
        ),
        details: l(
          'Supplied by SMA up to proximal two-thirds of transverse colon; IMA supplies distal third through upper rectum. Watershed areas at splenic flexure (Griffiths point) prone to ischemia.',
          'স্প্লেনিক ফ্লেক্সার পর্যন্ত রক্ত দেয় এসএমএ এবং বাকি অংশে আইএমএ। এই দুই ধমনীর মিলনস্থল (গ্রিফিথস পয়েন্ট) রক্তস্বল্পতা বা ইস্কেমিয়ার জন্য অত্যন্ত সংবেদনশীল।'
        ),
        sectionId: 'integration',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'liver-pancreas',
        label: l('Hepatobiliary-Pancreatic Complex', 'যকৃৎ-পিত্ত-অগ্ন্যাশয় জটিল ব্যবস্থা'),
        description: l(
          'Metabolic center and duodenal glands. Liver divided into 8 Couinaud segments. Gallbladder stores bile. Pancreas houses exocrine acini and endocrine islets of Langerhans.',
          'বিপাকীয় কেন্দ্র ও পরিপাক গ্রন্থি। যকৃৎ ৮টি কুইনো সেগমেন্টে বিভক্ত। পিত্তথলি পিত্তরস জমা করে এবং অগ্ন্যাশয় পাচক রস ও ইনসুলিন/গ্লুকাগন হরমোন তৈরি করে।'
        ),
        details: l(
          'Porta hepatis contains portal vein (posterior), proper hepatic artery (left anterior), and common bile duct (right anterior). Drains via ampulla of Vater into the descending duodenum.',
          'পোর্টা হেপাটিসে পোর্টাল শিরা থাকে পেছনে, হেপাটিক ধমনী বামে এবং সাধারণ পিত্তনালি ডানে থাকে। অডির স্ফিংক্টার দিয়ে এরা ডুওডেনামে উন্মুক্ত হয়।'
        ),
        sectionId: 'practice',
        color: '#bfdbfe',
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
          heading: l('The Four Fundamental Tunics of the Alimentary Wall', 'পরিপাকনালি প্রাচীরের চারটি মৌলিক স্তর'),
          paragraphs: [
            l(
              'The human alimentary canal operates as a continuous, specialized muscular tube extending approximately nine meters from the oral cavity to the external anal sphincter. Despite profound regional adaptations tailored to mastication, acid hydrolysis, nutrient absorption, and water reclamation, every segment from the mid-esophagus to the rectum shares a conserved, concentric four-layered architecture: the mucosa, submucosa, muscularis externa, and adventitia or serosa.',
              'মানবদেহের পরিপাকনালি মুখগহ্বর থেকে শুরু করে পায়ুদ্বার পর্যন্ত প্রায় ৯ মিটার দীর্ঘ এক অবিচ্ছিন্ন, বিশেষায়িত পেশীবহুল নালি। খাদ্য চর্বণ, অ্যাসিড ভাঙন, পুষ্টি উপাদান শোষণ এবং পানি নিষ্কাশনের জন্য অঞ্চলভেদে বিভিন্ন পরিবর্তন থাকা সত্ত্বেও খাদ্যনালির মধ্যভাগ থেকে মলদ্বার পর্যন্ত প্রতিটি অংশ চারটি মৌলিক সমকেন্দ্রিক স্তরে বিন্যস্ত: মিউকোসা, সাবমিউকোসা, মাসকিউলারিস এক্সটার্না এবং সেরোসা বা অ্যাডভেনটিশিয়া।'
            ),
            l(
              'The innermost layer, the mucosa, consists of a luminal epithelium, a vascularized lamina propria rich in gut-associated lymphoid tissue (GALT), and a thin smooth muscle layer termed the muscularis mucosae that produces micro-folds to enhance local mixing. Deep to this lies the submucosa, a dense irregular connective tissue layer bearing extensive vascular plexuses, lymphatic trunks, and the submucosal (Meissner) nervous plexus that coordinates local glandular secretion.',
              'সবচেয়ে ভেতরের স্তরটি হলো মিউকোসা, যা লুমিনাল এপিথেলিয়াম, লিম্ফয়েড টিস্যু সমৃদ্ধ ল্যামিনা প্রোপ্রিয়া এবং পাতলা পেশীর মাসকিউলারিস মিউকোসা নিয়ে গঠিত। এর নিচে অবস্থিত সাবমিউকোসা হলো ঘন সংযোজক টিস্যুর একটি শক্তিশালী স্তর, যা রক্তনালী, লসিকানালী এবং গ্রন্থি থেকে রস নিঃসরণ নিয়ন্ত্রণকারী মেইসনার স্নায়ু প্লেক্সাস বহন করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Peritoneal Cavity, Mesenteries and the Stomach Bed', 'পেরিটোনিয়াল গহ্বর, মেসেন্টারি এবং পাকস্থলীর শয্যা'),
          paragraphs: [
            l(
              'The abdominal viscera are enveloped by the peritoneum, an extensive, continuous serous membrane divided into a parietal layer lining the abdominal walls and a visceral layer reflecting over the organs. Between these sheets lies the peritoneal cavity, lubricated by peritoneal fluid that minimizes frictional shear during peristalsis. Double layers of peritoneum form mesenteries that anchor the intestines to the posterior abdominal wall while transmitting vital neurovascular bundles.',
              'পেটের ভেতরের অঙ্গগুলো পেরিটোনিয়াম নামক একটি দ্বিস্তর বিশিষ্ট পিচ্ছিল সেরাস ঝিল্লি দ্বারা আবৃত থাকে, যার বাইরের স্তরটি পেটের প্রাচীরে এবং ভেতরের স্তরটি অঙ্গগুলোর গায়ে লেগে থাকে। এই দুই স্তরের মাঝে সামান্য পিচ্ছিল রস থাকে যা খাদ্য সঞ্চালনের সময় ঘর্ষণ রোধ করে। পেরিটোনিয়ামের দ্বৈত ভাঁজগুলো মেসেন্টারি তৈরি করে অন্ত্রকে পেটের পেছনের প্রাচীরে শক্ত করে ঝুলিয়ে রাখে এবং এর মধ্য দিয়েই রক্তনালী ও স্নায়ু অঙ্গগুলোতে পৌঁছায়।'
            ),
            l(
              'The stomach is an asymmetric J-shaped dilation occupying the left hypochondriac, epigastric, and umbilical regions. It comprises four anatomical zones: the cardia surrounding the gastroesophageal junction, the superior fundus abutting the left hemidiaphragm, the expansive corpus (body), and the funnel-shaped pyloric antrum and canal ending at the thick, circular smooth-muscle pyloric sphincter regulating duodenal emptying.',
              'পাকস্থলী হলো একটি জে-আকৃতির পেশীবহুল থলি যা পেটের উপরের বাম অংশে অবস্থিত। এর চারটি প্রধান অংশ রয়েছে: খাদ্যনালির সাথে যুক্ত কার্ডিয়া, বাম ডায়াফ্রামের নিচে স্ফীত ফান্ডাস, প্রধান দেহ বা করপাস এবং ডুওডেনামে খাদ্য প্রবেশ নিয়ন্ত্রণকারী শক্তিশালী বৃত্তাকার পাইলোরিক স্ফিংক্টার সমৃদ্ধ পাইলোরাস। খাদ্য গ্রহণের পর পাকস্থলীর পেশীস্তর শক্তিশালী তরঙ্গের মাধ্যমে খাদ্যকে পিষে কাইমে রূপান্তর করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Small Intestinal Surface Amplification and Nutrient Absorption', 'ক্ষুদ্রান্ত্রের শোষণ ক্ষেত্র সম্প্রসারণ ও পাচন ক্রিয়া'),
          paragraphs: [
            l(
              'The small intestine maximizes its absorptive capacity through three hierarchical tiers of mucosal surface amplification. Macroscopic transverse folds called plicae circulares (valves of Kerckring) triple the luminal area and are most prominent in the proximal jejunum. Projecting from these folds are finger-like intestinal villi (0.5 to 1 mm tall), which amplify surface area tenfold; each villus houses a central blind-ended lymphatic lacteal alongside a capillary network.',
              'ক্ষুদ্রান্ত্র তার শোষণ ক্ষমতা নাটকীয়ভাবে বাড়ানোর জন্য তিনটি স্তরে পৃষ্ঠের ক্ষেত্রফল বৃদ্ধি করে। প্রথমত, বৃত্তাকার ভাঁজ বা প্লাইকা সার্কুলারিস ক্ষেত্রফল তিনগুণ বাড়ায় যা জেজুনায় সবচেয়ে বেশি স্পষ্ট। দ্বিতীয়ত, প্রতিটি ভাঁজ থেকে আঙ্গুলের মতো ভিলাস বের হয় যা ক্ষেত্রফল দশগুণ বৃদ্ধি করে; প্রতিটি ভিলাসের কেন্দ্রে চর্বি শোষণের জন্য একটি অন্ধ ল্যাকটিয়েল লসিকানালী এবং রক্তজালক থাকে।'
            ),
            l(
              'At the cellular apex, columnar enterocytes bear thousands of packed microvilli forming the brush border, embedding disaccharidases and peptidases while expanding total luminal area to approximately 32 square meters. This vast surface area enables rapid, complete enzymatic breakdown of carbohydrates, proteins, and emulsified lipid micelles into absorbable monomeric nutrients.',
              'তৃতীয়ত, প্রতিটি এপিথেলিয়াল কোষের ওপর হাজার হাজার মাইক্রোভিলাই বা ব্রাশ বর্ডার থাকে যা বিভিন্ন পাচক এনজাইম ধারণ করে এবং মোট শোষণ ক্ষেত্রফলকে প্রায় ৩২ বর্গমিটারে পৌঁছে দেয়। এই বিশাল ক্ষেত্রফল কার্বোহাইড্রেট, প্রোটিন এবং ফ্যাটের দ্রুত ও সম্পূর্ণ শোষণ নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Large Intestinal Landmarks, Water Resorption and Defecation', 'বৃহদন্ত্রের বৈশিষ্ট্য, পানি পুনঃশোষণ এবং মল নিষ্কাশন'),
          paragraphs: [
            l(
              'The large intestine extends approximately 1.5 meters from the ileocecal junction to the anal orifice, specialized primarily for the reclamation of water and electrolytes from indigestible chyme and the compaction of feces. Structurally, it is distinguished from the small bowel by three macroscopic hallmarks: teniae coli (three ribbons of longitudinal smooth muscle), haustra (pouch-like sacculations), and omental appendices (fat-filled peritoneal tags).',
              'বৃহদন্ত্র ইলিসিওক্যাল সংযোগস্থল থেকে মলদ্বার পর্যন্ত প্রায় ১.৫ মিটার দীর্ঘ, যার মূল কাজ হলো অপাচ্য খাদ্যসার থেকে পানি ও লবণ পুনঃশোষণ করে মলকে ঘনীভূত করা। ক্ষুদ্রান্ত্রের সাথে এর প্রধান তিনটি দৃশ্যমান পার্থক্য হলো: টিনিয়া কোলাই নামক তিনটি অনুদৈর্ঘ্য পেশীব্যান্ড, হস্ট্রা নামক থলেসদৃশ খাঁজ এবং ওমেন্টাল অ্যাপেন্ডিসেস নামক চর্বিযুক্ত পেরিটোনিয়াল উপাঙ্গ।'
            ),
            l(
              'Peristaltic mass movements occur several times daily, propelling fecal matter into the normally empty rectal ampulla. Distension of the rectal wall activates mechanoreceptors that initiate the defecation reflex via parasympathetic pelvic splanchnic nerves (S2-S4), relaxing the involuntary internal anal sphincter while voluntary continence is maintained by the somatic external anal sphincter and puborectalis muscle.',
              'প্রতিদিন কয়েকবার শক্তিশালী পেরিস্টাল্টিক তরঙ্গ মলকে সাধারণত খালি থাকা মলাশয়ে ঠেলে দেয়। মলাশয়ের প্রাচীর প্রসারিত হলে পেলভিক প্যারাসিমপ্যাথেটিক স্নায়ু উত্তেজিত হয়ে অভ্যন্তরীণ অনৈচ্ছিক স্ফিংক্টার শিথিল করে, এবং ঐচ্ছিক এক্সটার্নাল স্ফিংক্টার ও পিউবোরেক্টালিস পেশীর নিয়ন্ত্রণে মলত্যাগ সম্পন্ন হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Hepatobiliary Architecture, Bile Secretion and Clinical Jaundice', 'হেপাটোবিলিয়ারি কাঠামো, পিত্ত ক্ষরণ ও জন্ডিসের শারীরস্থান'),
          paragraphs: [
            l(
              'The liver and biliary tree constitute the metabolic and exocrine powerhouses of the digestive system. Hepatocytes continuously synthesize bile containing bile salts, cholesterol, and bilirubin, secreting it into bile canaliculi that drain into the common hepatic duct. Between meals, the tonic contraction of the sphincter of Oddi diverts bile through the cystic duct into the gallbladder, where it is concentrated five- to ten-fold via active mucosal NaCl and water resorption.',
              'যকৃৎ এবং পিত্তনালি ব্যবস্থা হলো পরিপাকতন্ত্রের প্রধান বিপাকীয় এবং পাচক কেন্দ্র। লিভারের হেপাটোসাইট কোষগুলো অনবরত পিত্তরস তৈরি করে পিত্তনালিতে পাঠায়। খাবারের মধ্যবর্তী সময়ে অডির স্ফিংক্টার বন্ধ থাকায় পিত্তরস সিস্টিক নালি দিয়ে পিত্তথলিতে জমা হয় এবং সেখানে পানি শোষিত হয়ে পাঁচ থেকে দশ গুণ ঘনীভূত হয়।'
            ),
            l(
              'Upon ingestion of fatty chyme, duodenal I-cells release cholecystokinin (CCK), inducing simultaneous gallbladder smooth muscle contraction and sphincter of Oddi relaxation to discharge concentrated bile into the descending duodenum. Obstruction of the biliary tree by gallstones (choledocholithiasis) or pancreatic head carcinoma leads to obstructive jaundice, dark urine, and pale acholic stools.',
              'চর্বিযুক্ত খাবার ডুওডেনামে ঢুকলে সিসিকে (CCK) হরমোন নিঃসৃত হয় যা পিত্তথলিকে সংকুচিত করে এবং অডির স্ফিংক্টার খুলে পিত্তরস ডুওডেনামে ঢেলে দেয়। পিত্তনালিতে পাথর বা অগ্ন্যাশয়ের টিউমারের কারণে এই পথ বন্ধ হয়ে গেলে পিত্ত রক্তে মিশে অবস্ট্রাকটিভ জন্ডিস এবং সাদা মল তৈরি করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary and Digestive Anatomy Glossary', 'সারসংক্ষেপ ও পরিপাকতন্ত্রের শব্দকোষ'),
          paragraphs: [
            l(
              'The digestive system coordinates macroscopic mechanical propulsion with microscopic chemical hydrolysis across a continuous specialized muscular tube. From the protective four-layer tunic to the intricate vascular segmentation of the liver and portal venous network, digestive architecture reflects an evolutionary balance between maximizing absorptive surface area and defending the internal milieu against microbial invasion.',
              'পরিপাকতন্ত্র একটি অবিচ্ছিন্ন পেশীবহুল নালির মধ্য দিয়ে যান্ত্রিক খাদ্য সঞ্চালন এবং রাসায়নিক খাদ্য ভাঙনের চমৎকার সমন্বয় সাধন করে। চার স্তরীয় প্রতিরক্ষামূলক প্রাচীর থেকে শুরু করে যকৃতের কুইনো সেগমেন্টেশন পর্যন্ত প্রতিটি শারীরস্থানিক গঠন একদিকে শোষণের ক্ষেত্রফল সর্বোচ্চ করে এবং অন্যদিকে বাইরের জীবাণু থেকে দেহকে রক্ষা করে।'
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
          heading: l('Embryological Gut Rotation and Peritoneal Compartmentalization', 'ভ্রূণীয় অন্ত্রের আবর্তন এবং পেরিটোনিয়াল স্থানসমূহ'),
          paragraphs: [
            l(
              'During early human organogenesis, the primitive gut tube is divided into the foregut (celiac trunk), midgut (superior mesenteric artery), and hindgut (inferior mesenteric artery). During the sixth week of gestation, rapid midgut elongation causes physiological herniation into the umbilical cord. As the gut returns to the abdominal cavity during week 10, it undergoes a complex 270-degree counterclockwise rotation around the axis of the superior mesenteric artery.',
              'ভ্রূণের বিকাশে আদিম অন্ত্র তিনটি অংশে বিভক্ত থাকে: ফোরগাট (সিলিয়াক ধমনী), মিডগাট (এসএমএ ধমনী) এবং হাইন্ডগাট (আইএমএ ধমনী)। ষষ্ঠ সপ্তাহে অন্ত্রের দ্রুত বৃদ্ধির কারণে এটি নাভির মধ্য দিয়ে সাময়িকভাবে বাইরে চলে আসে এবং দশম সপ্তাহে পেটে ফেরার সময় সুপিরিয়র মেসেন্টেরিক ধমনীকে কেন্দ্র করে ঘড়ির কাঁটার বিপরীত দিকে ২৭০ ডিগ্রি আবর্তিত হয়।'
            ),
            l(
              'This coordinated embryological rotation and subsequent mesenteric fusion partitions the peritoneal cavity into two major communicating spaces: the greater sac (subdivided into supracolic and infracolic compartments by the transverse mesocolon) and the lesser sac (omental bursa) situated posterior to the stomach. Communication between these cavities occurs exclusively through the epiploic foramen of Winslow.',
              'এই আবর্তনের ফলেই পেটের ভেতরে দুটি প্রধান গহ্বর তৈরি হয়: গ্রেটার স্যাক (যা ট্রান্সভার্স মেসোকোলন দ্বারা ওপর ও নিচের অংশে বিভক্ত) এবং পাকস্থলীর পেছনে থাকা লেসার স্যাক (ওমেন্টাল বার্সা)। এই দুটি গহ্বরের মাঝে যোগাযোগের একমাত্র প্রাকৃতিক পথ হলো উইন্সলোর এপি hisploic ছিদ্র।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Gastric Microarchitecture, Parietal Cell Kinetics and Peptic Ulcers', 'পাকস্থলীর অণুগঠন, প্যারাইটাল কোষের অ্যাসিড ক্ষরণ ও আলসার'),
          paragraphs: [
            l(
              'The gastric mucosa is densely indented by millions of microscopic gastric pits that lead into branched tubular gastric glands. The oxyntic glands in the fundus and corpus house parietal (oxyntic) cells characterized by extensive intracellular canaliculi densely packed with H+/K+-ATPase proton pumps. These pumps actively secrete hydrochloric acid (generating an intragastric pH of 1.5 to 2.0) while co-secreting intrinsic factor essential for terminal ileal vitamin B12 absorption.',
              'পাকস্থলীর মিউকোসায় কোটি কোটি ক্ষুদ্র গ্যাস্ট্রিক পিট থাকে যা গ্যাস্ট্রিক গ্রন্থিতে উন্মুক্ত হয়। ফান্ডাস ও দেহের গ্রন্থিগুলোতে থাকা প্যারাইটাল কোষগুলো প্রচুর প্রোটন পাম্পের সাহায্যে হাইড্রোক্লোরিক অ্যাসিড নিঃসরণ করে পাকস্থলীর পিএইচ ১.৫ থেকে ২.০-তে নামিয়ে আনে এবং ভিটামিন বি১২ শোষণের জন্য অত্যাবশ্যকীয় ইন্ট্রিনসিক ফ্যাক্টর ক্ষরণ করে।'
            ),
            l(
              'Adjacent chief (zymogenic) cells exocytose pepsinogen, which is autocatalytically cleaved by gastric acid into active pepsin. The gastric lining is defended against this corrosive acid-pepsin cocktail by a 200 µm thick mucus-bicarbonate barrier maintained by surface mucous cells under the stimulation of endogenous prostaglandins (PGE2). Non-steroidal anti-inflammatory drugs (NSAIDs) and Helicobacter pylori disrupt this protective barrier, precipitating penetrating peptic ulcer disease.',
              'চিফ কোষ থেকে পেপসিনোজেন ক্ষরিত হয় যা অ্যাসিডের সংস্পর্শে পেপসিন এনজাইমে পরিণত হয়। পাকস্থলীর নিজস্ব দেয়ালকে এই তীব্র অ্যাসিড থেকে বাঁচাতে প্রোস্টাগ্ল্যান্ডিন হরমোনের সাহায্যে মিউকাস ও বাইকার্বনেটের একটি পুরু ক্ষারীয় পর্দা তৈরি থাকে। ব্যথানাশক ওষুধ (NSAID) বা হেলিকোব্যাক্টার পাইলোরি ব্যাকটেরিয়া এই পর্দা নষ্ট করে দিলে পেপটিক আলসার বা ঘা তৈরি হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Enteric Neurobiology: The Autonomous Brain of the Gut', 'এন্টারিক স্নায়ুবিজ্ঞান: অন্ত্রের নিজস্ব মস্তিষ্ক'),
          paragraphs: [
            l(
              'The enteric nervous system (ENS) constitutes an extensive quasi-autonomous division of the autonomic nervous system containing over 500 million neurons embedded entirely within the gastrointestinal wall. It comprises two concentric ganglionated plexuses: the myenteric (Auerbach) plexus situated between the outer longitudinal and inner circular layers of the muscularis externa, and the submucosal (Meissner) plexus nestled within the dense submucosa.',
              'এন্টারিক স্নায়ুতন্ত্র হলো অন্ত্রের নিজস্ব একটি স্বয়ংসম্পূর্ণ স্নায়ু নেটওয়ার্ক যা ৫০ কোটিরও বেশি নিউরন বহন করে। এটি দুটি সমকেন্দ্রিক প্লেক্সাস নিয়ে গঠিত: মাসকিউলারিস এক্সটার্নার দুটি পেশীস্তরের মাঝখানে থাকা মায়েন্টেরিক (আউয়ারবাখ) প্লেক্সাস এবং সাবমিউকোসায় অবস্থিত সাবমিউকোসাল (মেইসনার) প্লেক্সাস।'
            ),
            l(
              'The myenteric plexus functions as the principal motor coordinator of digestive motility, regulating the frequency, velocity, and amplitude of peristaltic contractions via alternating release of excitatory transmitters (acetylcholine, substance P) and inhibitory transmitters (nitric oxide, VIP). Congenital failure of neural crest cells to migrate into the distal colonic ENS causes Hirschsprung disease (congenital aganglionic megacolon), presenting with neonatal functional bowel obstruction.',
              'মায়েন্টেরিক প্লেক্সাস মূলত অ্যাসিটাইলকোলিন ও নাইট্রিক অক্সাইডের মাধ্যমে ছন্দময় পেরিস্টালটিক সংকোচন ও শিথিলকরণ নিয়ন্ত্রণ করে। ভ্রূণ অবস্থায় যদি স্নায়ু কোষগুলো কোলনের শেষ প্রান্তে পৌঁছাতে ব্যর্থ হয়, তবে তাকে হিরশস্প্রাং রোগ বলে, যার ফলে শিশুর মলদ্বার স্বাভাবিকভাবে শিথিল হতে না পেরে পেট ফুলে তীব্র মলবদ্ধতা তৈরি হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Couinaud Hepatic Segmentation and Surgical Resection Anatomy', 'কুইনো হেপাটিক সেগমেন্টেশন এবং লিভার অস্ত্রোপচারের শারীরস্থান'),
          paragraphs: [
            l(
              'Under the authoritative Couinaud classification, the liver is divided into eight functionally autonomous vascular segments (Segments I through VIII), each supplied by a dedicated primary branch of the hepatic portal triad and drained by intersegmental hepatic veins. The caudate lobe (Segment I) represents a functionally distinct entity receiving independent arterial supply from both right and left portal systems and draining directly into the inferior vena cava.',
              'কুইনো শ্রেণিবিভাগে লিভারকে ৮টি স্বাধীন কার্যকরী সেগমেন্টে (I থেকে VIII) বিভক্ত করা হয়েছে। প্রতিটি সেগমেন্ট নিজস্ব পোর্টাল ট্রায়াডের শাখা থেকে রক্ত পায় এবং মধ্যবর্তী হেপাটিক শিরার মাধ্যমে রক্ত ফেরত পাঠায়। কডেট লোব (সেগমেন্ট I) একটি স্বাধীন অংশ যা ডান ও বাম উভয় পোর্টাল ব্যবস্থা থেকেই রক্ত পায় এবং সরাসরি ইনফিরিয়র ভেনাকাভায় রক্ত ঢালে।'
            ),
            l(
              'Cantlie line, an imaginary plane drawn from the gallbladder fossa to the left border of the inferior vena cava, divides the liver into true functional right and left hemilivers, in stark contrast to the anatomical division defined by the falciform ligament. Mastery of these vascular segment boundaries enables modern hepatic surgeons to perform precise, anatomical segmentectomies and hemihepatectomies with minimal intraoperative blood loss.',
              'ক্যান্টলির রেখা (পিত্তথলি থেকে ভেনাকাভা পর্যন্ত কাল্পনিক রেখা) লিভারকে শারীরস্থানিকভাবে ডান ও বাম অর্ধে ভাগ করে। এই ভাস্কুলার সীমানা জানার ফলেই আধুনিক সার্জনরা টিউমার আক্রান্ত একটি নির্দিষ্ট সেগমেন্ট সম্পূর্ণ রক্তপাতহীনভাবে কেটে অপসারণ করতে পারেন।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Portosystemic Collateral Pathways in Portal Hypertension', 'পোর্টাল হাইপারটেনশনে পোর্টাল-সিস্টেমিক সমান্তরাল বাইপাস পথ'),
          paragraphs: [
            l(
              'Normal hepatic portal venous pressure ranges between 5 and 10 mmHg. In advanced hepatic cirrhosis, extensive sinusoidal fibrosis and regenerative nodule formation dramatically increase intrahepatic vascular resistance, causing portal venous pressure to exceed 12 mmHg and reversing venous flow through embryological portosystemic collateral channels.',
              'স্বাভাবিক অবস্থায় পোর্টাল শিরার চাপ ৫ থেকে ১০ মিমি পারদ থাকে। কিন্তু লিভার সিরোসিস হলে লিভারের সাইনুসয়েড শক্ত হয়ে পোর্টাল চাপ ১২ মিমি পারদের ওপরে উঠে যায় এবং রক্ত বিপরীত দিকে ভ্রূণীয় সমান্তরাল রক্তনালী দিয়ে সরাসরি সিস্টেমিক শিরায় ছুটতে বাধ্য হয়।'
            ),
            l(
              'Four critical portosystemic collateral sites enlarge under portal hypertension: (1) esophageal submucosal veins connecting the left gastric vein with the azygos vein (esophageal varices); (2) recanalized paraumbilical veins connecting the left portal branch to epigastric veins (caput medusae); (3) superior rectal veins connecting with middle and inferior rectal veins (internal hemorrhoids); and (4) retroperitoneal veins of Retzius connecting mesenteric veins to lumbar systemic veins.',
              'উচ্চ চাপে চারটি প্রধান স্থানে রক্তনালী ফুলে ওঠে: (১) খাদ্যনালির নিম্নাংশ, যেখানে বাম গ্যাস্ট্রিক শিরা আজাইগোস শিরায় রক্ত পাঠিয়ে পাতলা খাদ্যনালির ভেরিকোজ শিরা তৈরি করে; (২) নাভির চারপাশ (ক্যাপুট মেডুসি); (৩) পায়ুপথ (ইন্টারনাল হেমোরয়েড বা অর্শ); এবং (৪) রেটৎসিয়াসের রেট্রোপেরিটোনিয়াল শিরা।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Mesenteric Watershed Zones and Intestinal Ischemia', 'মেসেন্টেরিক ওয়াটারশেড জোন এবং অন্ত্রের রক্তস্বল্পতা'),
          paragraphs: [
            l(
              'The arterial blood supply to the alimentary canal exhibits vulnerable boundary zones termed watershed areas where the terminal microvascular territories of major mesenteric arteries meet. The two most critical watershed sites are Griffiths point at the splenic flexure (junction of SMA and IMA territories) and Sudek critical point at the rectosigmoid junction (junction of IMA and superior rectal territories).',
              'পরিপাকনালির রক্ত সরবরাহে দুটি দুর্বল মিলনস্থল বা ওয়াটারশেড জোন থাকে: স্প্লেনিক ফ্লেক্সারে গ্রিফিথস পয়েন্ট (এসএমএ ও আইএমএ ধমনীর মিলনস্থল) এবং রেকটোসিগময়েড সংযোগস্থলে সুডেক সংকটময় বিন্দু (আইএমএ ও সুপিরিয়র রেক্টাল ধমনীর মিলনস্থল)।'
            ),
            l(
              'During systemic hypotension, severe cardiogenic shock, or non-occlusive mesenteric hypoperfusion, these watershed territories suffer preferential ischemic injury, progressing rapidly to full-thickness mucosal sloughing, gangrene, and bowel perforation. Prompt clinical diagnosis requires emergency contrast-enhanced CT angiography to guide catheter-directed revascularization or urgent surgical resection.',
              'হঠাৎ রক্তচাপ মারাত্মক কমে গেলে বা কার্ডিয়াক শকে এই দুর্বল মিলনস্থলগুলোতে সবার আগে রক্ত চলাচল বন্ধ হয়ে যায়, যার ফলে অন্ত্রে পচন (গ্যাংগ্রিন) ও ছিদ্র হতে পারে। জরুরি সিটি অ্যানজিওগ্রামের মাধ্যমে রক্ত চলাচল নিশ্চিত করা অথবা পচে যাওয়া অংশ কেটে ফেলাই এর একমাত্র চিকিৎসা।'
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
          heading: l('Total Mesorectal Excision and Pelvic Autonomic Nerve Preservation', 'টোটাল মেসোরেক্টাল এক্সিশন এবং পেলভিক অটোনোমিক স্নায়ু সংরক্ষণ'),
          paragraphs: [
            l(
              'Total Mesorectal Excision (TME) is the oncological gold standard for curative surgical resection of mid- and low-rectal adenocarcinomas. The procedure hinges on meticulous sharp dissection within the embryological avascular plane—the "holy plane" of Heald—lying between the visceral mesorectal fascia enveloped around the rectal lymphatics and the parietal presacral fascia covering the sacral concavity.',
              'টোটাল মেসোরেক্টাল এক্সিশন (TME) হলো মলাশয়ের ক্যান্সারের নিরাময়মূলক অপারেশনের বিশ্বমান। এই পদ্ধতিতে সার্জনরা হিল্ডের পবিত্র ভ্রূণীয় তল (Holy plane of Heald) বরাবর সূক্ষ্মভাবে কেটে টিউমার ও তার চারপাশের লিম্ফ নোডগুলো সম্পূর্ণ অক্ষত একটি ব্যাগের মতো বের করে আনেন।'
            ),
            l(
              'Preserving this intact mesorectal envelope achieves negative circumferential resection margins (CRM) and drastically slashes local recurrence rates from over 30% to below 5%. Furthermore, precise dissection along this plane prevents inadvertent transection of the superior hypogastric plexus and inferior hypogastric (pelvic) plexuses, thereby preserving voluntary urinary bladder control, fecal continence, and sexual erectile and ejaculatory potency.',
              'এই ফাসিয়া পর্দা অটুট রাখলে ক্যান্সারের জীবাণু পুনরায় ছড়িয়ে পড়া রোধ হয় এবং পেলভিসের সূক্ষ্ম অটোনোমিক স্নায়ুগুলো অক্ষত থাকে, যা রোগীর মূত্র নিয়ন্ত্রণ, মল নিয়ন্ত্রণ এবং স্বাভাবিক যৌন ক্ষমতা বজায় রাখে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Bariatric Surgical Anatomy: Sleeve Gastrectomy and Roux-en-Y Mechanics', 'ব্যারিয়াট্রিক সার্জারির শারীরস্থান: স্লিভ গ্যাস্ট্রেক্টমি ও বাইপাস মেকানিক্স'),
          paragraphs: [
            l(
              'Surgical management of severe metabolic obesity relies on permanent anatomical reconfiguration of the upper gastrointestinal tract. In laparoscopic sleeve gastrectomy, the greater curvature of the stomach is resected over a 36-to-40 French calibration bougie from 4 cm proximal to the pylorus up to the angle of His, removing roughly 80% of gastric volume including the fundus, which drastically decreases serum ghrelin levels.',
              'অতিরিক্ত ওজনের আধুনিক ব্যারিয়াট্রিক সার্জারিতে পরিপাকনালির শারীরস্থান স্থায়ীভাবে পুনর্গঠন করা হয়। স্লিভ গ্যাস্ট্রেক্টমিতে পাকস্থলীর বৃহত্তর বাঁকের প্রায় ৮০ শতাংশ অংশ কেটে একটি সরু নলের মতো রূপ দেওয়া হয়, যা ফান্ডাস অপসারণের মাধ্যমে ক্ষুধা সৃষ্টিকারী ঘ্রেলিন হরমোনের মাত্রা কমিয়ে দেয়।'
            ),
            l(
              'In Roux-en-Y gastric bypass (RYGB), a miniature 20-to-30 mL proximal gastric pouch is created and anastomosed to a mobilized Roux limb of jejunum (gastrojejunostomy), while the excluded biliopancreatic limb is reattached 100 to 150 cm distally (jejunojejunostomy). This dual restrictive-malabsorptive reconstruction accelerates delivery of undigested nutrients to the distal gut, stimulating dramatic secretion of GLP-1 and PYY to reverse metabolic syndrome and type 2 diabetes mellitus.',
              'রুক্স-এন-ওয়াই গ্যাস্ট্রিক বাইপাস পদ্ধতিতে পাকস্থলীতে একটি ক্ষুদ্র ২০-৩০ মিলির থলি বানিয়ে সরাসরি জেজুনামের সাথে যুক্ত করা হয়। এর ফলে খাদ্য সরাসরি অন্ত্রের নিচের অংশে পৌঁছে GLP-1 ও PYY হরমোন নিঃসরণ বাড়ায়, যা ডায়াবেটিস ও মেটাবলিক সিন্ড্রোম পুরোপুরি নিরাময়ে বিস্ময়কর ভূমিকা রাখে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-tier schematic showing digestive system organization: upper gastrointestinal conduit, small intestinal mucosal amplification, large bowel water reclamation, and the hepatobiliary-pancreatic metabolic nexus.',
      'পরিপাকতন্ত্রের সংগঠনের ৪টি সহজলভ্য স্তর: উর্ধ্ব পরিপাকনালি, ক্ষুদ্রান্ত্রের মিউকোসা সম্প্রসারণ, বৃহদন্ত্রের পানি শোষণ এবং যকৃৎ-পিত্ত-অগ্ন্যাশয় বিপাকীয় কেন্দ্র।'
    ),
    steps: [
      l(
        '1. The esophagus and stomach propel boluses, acidifying and churning ingested food into liquid chyme.',
        '১. খাদ্যনালি ও পাকস্থলী খাদ্যকে নিচের দিকে পাঠিয়ে অ্যাসিড ও পেশীর চাপে তরল কাইমে রূপান্তর করে।'
      ),
      l(
        '2. Plicae circulares, villi, and microvilli in the small intestine expand surface area 600-fold to absorb amino acids, sugars, and fatty micellar complexes.',
        '২. ক্ষুদ্রান্ত্রের ভাঁজ, ভিলাই এবং মাইক্রোভিলাই ক্ষেত্রফল ৬০০ গুণ বাড়িয়ে খাদ্য থেকে পুষ্টি উপাদান ও ফ্যাটি অ্যাসিড শোষণ করে।'
      ),
      l(
        '3. The colon reabsorbs water and electrolytes, guided by teniae coli and haustral churn, compacting waste into feces.',
        '৩. কোলন টিনিয়া কোলাই ও হস্ট্রাল সঞ্চালনের মাধ্যমে পানি ও লবণ পুনঃশোষণ করে মলকে ঘনীভূত করে।'
      ),
      l(
        '4. The liver processes portal venous blood in 8 Couinaud segments, secreting bile into the duodenum via the ampulla of Vater.',
        '৪. লিভার ৮টি কুইনো সেগমেন্টে পোর্টাল রক্ত পরিশোধন করে এবং ভ্যাটারের অ্যাম্পুলা দিয়ে ডুওডেনামে পিত্তরস পাঠায়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 54-year-old male with long-standing decompensated alcohol-related cirrhosis presents with acute upper gastrointestinal hemorrhage. Endoscopy reveals torrential bleeding from engorged submucosal veins at the lower end of the esophagus. Flow through which venous pathway has reversed to cause this life-threatening complication?',
      'লিভার সিরোসিসে আক্রান্ত ৫৪ বছর বয়সী একজন ব্যক্তি হঠাৎ তীব্র রক্তবমি নিয়ে হাসপাতালে আসেন। এন্ডোস্কোপিতে দেখা গেল খাদ্যনালির নিচের অংশের ফোলা শিরা ফেটে প্রচণ্ড রক্তক্ষরণ হচ্ছে। কোন শিরার স্বাভাবিক রক্তপ্রবাহ উল্টে যাওয়ার ফলে এই প্রাণঘাতী জটিলতা সৃষ্টি হয়েছে?'
    ),
    options: [
      l('Left gastric (coronary) vein shunting into esophageal systemic veins of the azygos system', 'বাম গ্যাস্ট্রিক (করোনারি) শিরা উল্টো পথে আজাইগোস তন্ত্রের খাদ্যনালির শিরায় রক্ত পাঠাচ্ছে'),
      l('Inferior mesenteric vein shunting into the internal iliac vein', 'ইনফিরিয়র মেসেন্টেরিক শিরা ইন্টারনাল ইলিয়াক শিরায় রক্ত পাঠাচ্ছে'),
      l('Splenic vein draining retrogradely into renal systemic veins', 'প্লীহা শিরা কিডনির রেনাল শিরায় রক্ত পাঠাচ্ছে'),
      l('Superior mesenteric vein flowing directly into the inferior vena cava', 'সুপিরিয়র মেসেন্টেরিক শিরা সরাসরি ইনফিরিয়র ভেনাকাভায় যাচ্ছে'),
    ],
    correctIndex: 0,
    explanation: l(
      'In portal hypertension secondary to cirrhosis, elevated sinusoidal resistance forces portal blood retrogradely into the left gastric (coronary) vein. At the gastroesophageal junction, these vessels communicate with thin-walled submucosal esophageal veins that drain into the systemic azygos vein. The dramatic pressure gradient causes extreme variceal dilation, making them prone to catastrophic rupture.',
      'লিভার সিরোসিসে পোর্টাল রক্তচাপ বেড়ে গেলে রক্ত বিপরীত দিকে বাম গ্যাস্ট্রিক শিরা দিয়ে খাদ্যনালির পাতলা প্রাচীরের সাবমিউকোসাল শিরাগুলোতে প্রবেশ করে আজাইগোস শিরায় ড্রেন হতে চায়। অতিরিক্ত চাপে খাদ্যনালির এই ভেরিকোজ শিরাগুলো ফুলে ফেটে গিয়ে মারাত্মক রক্তক্ষরণ তৈরি করে।'
    ),
  },
}
