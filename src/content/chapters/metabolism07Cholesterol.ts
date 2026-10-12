import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const cholesterolRefs = [
  {
    id: 'lehninger-biochem-8e-ch21',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 21: Lipid Biosynthesis: Cholesterol, Steroids, and Isoprenoids',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch26',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 26: Cholesterol Synthesis, Transport, and Excretion",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch26',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 26: The Biosynthesis of Membrane Lipids and Steroids',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'marks-medbiochem-6e-ch26',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 26: Cholesterol Absorption, Synthesis, Metabolism, and Fate",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

export const metabolism07CholesterolLesson: LessonTopic = {
  id: 'topic.metabolism.cholesterol-steroids',
  slug: 'cholesterol-steroids',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('07 · Cholesterol & Steroid Metabolism', '০৭ · কোলেস্টেরল ও স্টেরয়েড বিপাক'),
  summary: l(
    'The four stages of de novo cholesterol biosynthesis, SREBP-2 transcriptional and ERAD regulation of HMG-CoA reductase, statin pharmacology, bile acid synthesis and enterohepatic circulation, and steroidogenesis cascades.',
    'ডি নোভো কোলেস্টেরল সংশ্লেষের চার ধাপ, SREBP-2 জিন নিয়ন্ত্রণ ও HMG-CoA রিডাক্টেজ নিয়ন্ত্রণ, স্ট্যাটিন ওষুধের কার্যপ্রণালী, পিত্ত অ্যাসিড সংশ্লেষ ও অন্ত্র-যকৃৎ আবর্তন, এবং স্টেরয়েড হরমোন তৈরির ধারা।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Delineate the four developmental stages of de novo cholesterol synthesis from acetyl-CoA to mevalonate, activated isoprenoids, squalene, and lanosterol cyclization.',
      'অ্যাসিটাইল-কোএ থেকে মেভালোনেট, সক্রিয় আইসোপ্রিন, স্কোয়ালিন এবং ল্যানোস্টেরল বলয় গঠনের মাধ্যমে কোলেস্টেরল সংশ্লেষের চারটি ধাপ নিখুঁতভাবে চিহ্নিত করতে পারা।'
    ),
    l(
      'Analyze the SREBP-2/SCAP sterol-sensing mechanism, sterol-induced ER-associated degradation (ERAD), and competitive inhibition of HMG-CoA reductase by statin therapeutics.',
      'SREBP-2/SCAP স্টেরল সংবেদনশীল কৌশল, স্টেরল দ্বারা ERAD অবক্ষয় এবং স্ট্যাটিন জাতীয় ওষুধ দ্বারা HMG-CoA রিডাক্টেজ এনজাইমের প্রতিযোগিতামূলক অবদমন বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Explain bile acid synthesis (CYP7A1), FXR feedback regulation, enterohepatic circulation, and steroid hormone biogenesis via StAR protein and desmolase (CYP11A1).',
      'পিত্ত অ্যাসিড উৎপাদন (CYP7A1), FXR নিউক্লিয়ার রিসেপ্টর নিয়ন্ত্রণ, অন্ত্র-যকৃৎ আবর্তন এবং StAR প্রোটিন ও ডেসমোলেজ দ্বারা স্টেরয়েড হরমোন সংশ্লেষ ব্যাখ্যা করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.lipogenesis-triglycerides'],
  relatedTopicIds: ['topic.metabolism.lipoproteins-lipid-flux', 'topic.metabolism.fatty-acid-oxidation-ketones'],
  references: cholesterolRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch21', 'harpers-biochem-32e-ch26'],
    structure: ['harpers-biochem-32e-ch26', 'marks-medbiochem-6e-ch26'],
    mechanism: ['lehninger-biochem-8e-ch21', 'berg-biochem-9e-ch26'],
    integration: ['berg-biochem-9e-ch26', 'marks-medbiochem-6e-ch26'],
    practice: ['lehninger-biochem-8e-ch21', 'harpers-biochem-32e-ch26'],
    takeaways: ['lehninger-biochem-8e-ch21', 'marks-medbiochem-6e-ch26'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Biological Roles & Mevalonate Pathway', '১. জৈবিক গুরুত্ব ও মেভালোনেট গতিপথ'), sectionId: 'introduction' },
      { id: 'sec-hmgcr', label: l('2. HMG-CoA Reductase & SREBP-2 Regulation', '২. HMG-CoA রিডাক্টেজ ও SREBP-2 নিয়ন্ত্রণ'), sectionId: 'structure' },
      { id: 'sec-isoprene', label: l('3. Isoprenoids, Squalene & Lanosterol Cyclization', '৩. আইসোপ্রিনয়েড, স্কোয়ালিন ও ল্যানোস্টেরল বলয়'), sectionId: 'mechanism' },
      { id: 'sec-bile', label: l('4. Bile Acid Biogenesis & Enterohepatic Circulation', '৪. পিত্ত অ্যাসিড তৈরি ও অন্ত্র-যকৃৎ আবর্তন'), sectionId: 'integration' },
      { id: 'sec-steroids', label: l('5. Adrenal & Gonadal Steroidogenesis Enzymopathies', '৫. অ্যাড্রিনাল ও জননাঙ্গের স্টেরয়েড এনজাইম ব্যাধি'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Core Academic Summary & Takeaways', '৬. মূল একাডেমিক সারাংশ ও পর্যালোচনা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('HMG-CoA Reductase (HMGCR)', 'HMG-CoA রিডাক্টেজ (HMGCR)'),
        definition: l(
          'Integral endoplasmic reticulum glycoprotein catalyzing the four-electron reduction of HMG-CoA to mevalonate using two NADPH molecules; the committed rate-limiting step of cholesterol synthesis.',
          'এন্ডোপ্লাজমিক রেটিকুলামের মেমব্রেন এনজাইম যা দুটি NADPH ব্যবহার করে HMG-CoA-কে মেভালোনেটে বিজারিত করে; এটি কোলেস্টেরল সংশ্লেষের প্রধান হার-নিয়ন্ত্রক ধাপ।'
        ),
      },
      {
        term: l('SREBP-2 / SCAP Sterol Sensor', 'SREBP-2 / SCAP স্টেরল সংবেদক কমপ্লেক্স'),
        definition: l(
          'Master transcription factor system where sterol depletion triggers SCAP-mediated trafficking of SREBP-2 to the Golgi for proteolytic cleavage, releasing a basic helix-loop-helix factor that activates sterol genes.',
          'প্রধান জিন নিয়ন্ত্রক ব্যবস্থা যেখানে কোষে স্টেরল কমলে SCAP প্রোটিন SREBP-2 কে গলগি বডিতে নিয়ে যায়; সেখানে প্রোটিওলাইসিসের মাধ্যমে মুক্ত হওয়া ট্রান্সক্রিপশন ফ্যাক্টর নিউক্লিয়াসে গিয়ে কোলেস্টেরল তৈরির জিন উদ্দীপ্ত করে।'
        ),
      },
      {
        term: l('Cholesterol 7alpha-Hydroxylase (CYP7A1)', 'কোলেস্টেরল ৭-আলফা-হাইড্রক্সিলেজ (CYP7A1)'),
        definition: l(
          'Hepatic cytochrome P450 monooxygenase catalyzing the rate-limiting initial step of bile acid synthesis from cholesterol; transcriptionally inhibited by FXR via FGF19 and small heterodimer partner (SHP).',
          'যকৃতের সাইটোক্রোম P450 এনজাইম যা পিত্ত অ্যাসিড তৈরির প্রধান হার-নিয়ন্ত্রক সূচনা ধাপ সম্পন্ন করে; এটি পিত্ত লবণ দ্বারা FXR নিউক্লিয়ার রিসেপ্টরের মাধ্যমে নেতিবাচকভাবে নিয়ন্ত্রিত হয়।'
        ),
      },
      {
        term: l('Steroidogenic Acute Regulatory Protein (StAR)', 'স্টেরয়েডোজেনিক অ্যাকিউট রেগুলেটরি প্রোটিন (StAR)'),
        definition: l(
          'Mitochondrial transport protein that transfers free cholesterol from outer to inner mitochondrial membrane; acts as the rate-limiting gatekeeper of all adrenal and gonadal steroid hormone synthesis.',
          'মাইটোকন্ড্রিয়াল পরিবহন প্রোটিন যা মুক্ত কোলেস্টেরলকে বহিঃপর্দা থেকে অন্তঃপর্দায় স্থানান্তর করে; এটি অ্যাড্রিনাল ও জননাঙ্গে সকল স্টেরয়েড হরমোন তৈরির প্রধান প্রবেশদ্বার হিসেবে কাজ করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Mechanism of Competitive HMG-CoA Reductase Inhibition by Statins', 'স্ট্যাটিন ওষুধ দ্বারা HMG-CoA রিডাক্টেজের প্রতিযোগিতামূলক অবদমন কৌশল'),
        steps: [
          l(
            'Step 1: The physiological substrate HMG-CoA contains a 3-hydroxy-3-methylglutaryl moiety that forms hydrogen bonds with catalytic residues (Lys691, His752, Asp690) inside the HMGCR active site pocket.',
            'ধাপ ১: স্বাভাবিক সাবস্ট্রেট HMG-CoA এর ৩-হাইড্রক্সি-৩-মিথাইলগ্লুটারিল অংশটি HMGCR এনজাইমের সক্রিয় কেন্দ্রের অ্যামিনো অ্যাসিডের সাথে হাইড্রোজেন বন্ধন তৈরি করে।'
          ),
          l(
            'Step 2: Statins (such as atorvastatin and rosuvastatin) possess an active dihydroxyheptanoic acid pharmacophore that structurally mimics the tetrahedral transition state intermediate formed during the enzymatic reduction of HMG-CoA to mevaldehyde and mevalonate.',
            'ধাপ ২: স্ট্যাটিন জাতীয় ওষুধের ডাইহাইড্রক্সিহেপ্টানোয়িক অ্যাসিড কাঠামোটি হুবহু HMG-CoA থেকে মেভালোনেট তৈরির অন্তর্বর্তী রূপান্তর অবস্থার মতো কাজ করে এনজাইমের সক্রিয় কেন্দ্রে দৃঢ়ভাবে যুক্ত হয়।'
          ),
          l(
            'Step 3: Statin binding achieves an inhibitory constant (Ki) in the low nanomolar range (~0.1 to 1.0 nM), compared to the substrate Km of ~4 uM. This massive binding affinity competitively displaces HMG-CoA, arresting mevalonate production and lowering hepatic free cholesterol, which activates SREBP-2 to upregulate LDL receptors.',
            'ধাপ ৩: সাবস্ট্রেটের Km (৪ মাইক্রোমোলার) এর তুলনায় স্ট্যাটিনের অবদমন ধ্রুবক Ki ন্যানোমোলার রেঞ্জে (০.১-১ ন্যানোমোলার) হওয়ায় এটি HMG-CoA কে সম্পূর্ণরূপে প্রতিস্থাপন করে কোলেস্টেরল তৈরি বন্ধ করে, যার ফলে যকৃতে এলডিএল রিসেপ্টর বেড়ে রক্ত থেকে ক্ষতিকর কোলেস্টেরল দ্রুত অপসারিত হয়।'
          ),
        ],
        conclusion: l(
          'Statins lower circulating atherogenic LDL-C primarily by inducing hepatic LDL receptor expression secondary to intracellular cholesterol depletion rather than simply halting peripheral sterol synthesis.',
          'স্ট্যাটিন ওষুধ রক্তের ক্ষতিকর এলডিএল কোলেস্টেরল কমায় প্রধানত যকৃতে কোলেস্টেরল কমিয়ে এলডিএল রিসেপ্টরের সংখ্যা বৃদ্ধি করার মাধ্যমে, যার ফলে রক্ত থেকে এলডিএল দ্রুত যকৃতে শোষিত হয়ে যায়।'
        ),
      },
      {
        title: l('Enterohepatic Circulation & Bile Acid Sequestrant Mechanism', 'পিত্ত লবণের অন্ত্র-যকৃৎ আবর্তন ও কোলেস্টাইরামিন ওষুধের প্রভাব'),
        steps: [
          l(
            'Step 1: The human liver synthesizes approximately 0.5 grams of primary bile acids daily from cholesterol via CYP7A1, replenishing a circulating bile acid pool of 3 to 5 grams that cycles 6 to 10 times daily.',
            'ধাপ ১: মানব যকৃত প্রতিদিন CYP7A1 এনজাইম দিয়ে কোলেস্টেরল থেকে প্রায় ০.৫ গ্রাম নতুন পিত্ত অ্যাসিড তৈরি করে, যা ৩ থেকে ৫ গ্রামের মোট পুল বজায় রেখে দিনে ৬ থেকে ১০ বার আবর্তিত হয়।'
          ),
          l(
            'Step 2: After emulsifying dietary fats in the duodenum and jejunum, roughly 95 percent of secreted bile salts are actively reabsorbed in the terminal ileum by the apical sodium-dependent bile acid transporter (ASBT / SLC10A2) and returned to the liver via the portal circulation.',
            'ধাপ ২: খাদ্যনালীতে চর্বি পরিপাকের পর নিঃসৃত পিত্ত লবণের প্রায় ৯৫ শতাংশই ক্ষুদ্রান্ত্রের শেষ ভাগে ASBT ট্রান্সপোর্টার দিয়ে পুনরায় শোষিত হয়ে পোর্টাল শিরার মাধ্যমে যকৃতে ফিরে আসে।'
          ),
          l(
            'Step 3: Bile acid sequestrants (such as cholestyramine and colesevelam) are non-absorbable cationic ion-exchange resins that bind negatively charged bile salts in the intestinal lumen, preventing ileal reabsorption and forcing their excretion in feces. Loss of bile salts relieves FXR-mediated inhibition on CYP7A1, forcing the liver to convert endogenous cholesterol into new bile acids, depleting intracellular cholesterol and upregulating hepatic LDL receptors.',
            'ধাপ ৩: কোলেস্টাইরামিন ওষুধ অন্ত্রের মধ্যে ঋণাত্মক চার্জযুক্ত পিত্ত লবণকে আটকে রেখে মলের সাথে নির্গত করে দেয়। পিত্ত লবণ যকৃতে না ফেরায় যকৃতের CYP7A1 এনজাইম বাধাগ্রস্ত হয় না; ফলে যকৃত বাধ্য হয়ে রক্তের কোলেস্টেরল ভেঙে নতুন পিত্ত লবণ তৈরি করে, যা রক্তের এলডিএল কোলেস্টেরল বহুলাংশে কমিয়ে আনে।'
          ),
        ],
        conclusion: l(
          'Interrupting the enterohepatic recycling of bile acids creates a persistent metabolic sink that draws circulating sterols into biliary excretion.',
          'পিত্ত লবণের অন্ত্র-যকৃৎ পুনঃশোষণ বাধাগ্রস্ত করলে যকৃত রক্তের কোলেস্টেরল খরচ করে নতুন পিত্ত তৈরি করতে বাধ্য হয়, যা রক্তের কোলেস্টেরল কমানোর চমৎকার প্রাকৃতিক পথ তৈরি করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'What happens to intracellular HMG-CoA reductase when cellular free cholesterol levels become excessively high?',
          'কোষের ভেতরে মুক্ত কোলেস্টেরলের মাত্রা অত্যধিক বেড়ে গেলে HMG-CoA রিডাক্টেজ এনজাইমের কী পরিণতি ঘটে?'
        ),
        answer: l(
          'Excess sterols bind directly to the sterol-sensing domain of HMG-CoA reductase, inducing a conformational change that promotes binding to Insig-1/Insig-2 proteins in the ER membrane, recruiting gp78 ubiquitin ligases that polyubiquitinate the enzyme and target it for rapid proteasomal degradation (ERAD).',
          'অতিরিক্ত কোলেস্টেরল সরাসরি এনজাইমের স্টেরল-সেন্সিং ডোমেনে যুক্ত হয়ে এর গঠন পরিবর্তন করে এবং ER পর্দার ইন্সিগ (Insig) প্রোটিনের সাথে যুক্ত করে; এটি ইউবিকুইটিন লিগেজকে ডেকে এনে এনজাইমটিতে ইউবিকুইটিন যুক্ত করে এবং প্রোটিজোমে এটিকে দ্রুত ধ্বংস করে দেয় (ERAD)।'
        ),
      },
      {
        question: l(
          'Why does a congenital deficiency of 21-hydroxylase (CYP21A2) produce both adrenal insufficiency and marked virilization in newborn females?',
          '২১-হাইড্রক্সিলেজ (CYP21A2) এনজাইমের জন্মগত অভাবে নবজাতক কন্যাসন্তানের ক্ষেত্রে কেন একই সাথে অ্যাড্রিনাল অপ্রতুলতা এবং পুরুষালী শারীরিক বৈশিষ্ট্য (ভিরিলাইজেশন) দেখা দেয়?'
        ),
        answer: l(
          'Blockade of 21-hydroxylase prevents the synthesis of mineralocorticoids (aldosterone) and glucocorticoids (cortisol). Lack of cortisol removes negative feedback on the anterior pituitary, triggering massive ACTH secretion that shunts accumulated 17-hydroxyprogesterone precursors into the unblocked adrenal androgen synthesis pathway, causing severe prenatal virilization.',
          '২১-হাইড্রক্সিলেজের ঘাটতি কর্টিসল ও অ্যালডোস্টেরন সংশ্লেষ বন্ধ করে দেয়। রক্তে কর্টিসল না থাকায় পিটুইটারি থেকে প্রচুর ACTH হরমোন নিঃসৃত হয়, যা জমা হওয়া ১৭-হাইড্রক্সিপ্রোজেস্টেরনকে অবাধ অ্যান্ড্রোজেন উৎপাদন পথে ঠেলে দেয় এবং প্রচুর পুরুষ হরমোন তৈরি করে নবজাতক কন্যার বাহ্যিক অঙ্গে পুরুষালী পরিবর্তন ঘটায়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'cholesterol-steroidogenesis-hub',
    title: l('Interactive Sterol Architecture: Mevalonate to Steroid Cascades', 'ইন্টারেক্টিভ স্টেরল কাঠামো: মেভালোনেট থেকে স্টেরয়েড হরমোন চক্র'),
    description: l(
      'Navigate the multistage synthesis of the 27-carbon steroid core, SREBP-2 sterol feedback mechanisms, bile acid formation, and adrenal steroidogenesis pathways.',
      '২৭ কার্বনের স্টেরয়েড কাঠামোর ধাপসমূহ, SREBP-2 ফিডব্যাক সংকেত, পিত্ত অ্যাসিড রূপান্তর এবং অ্যাড্রিনাল স্টেরয়েড হরমোন তৈরির সম্পূর্ণ আণবিক গতিপথ পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Biochemical mechanisms, enzymatic topologies, and pharmacological targets verified against Lehninger Principles of Biochemistry (8th ed) and Harper Illustrated Biochemistry (32nd ed).',
      'জৈবরাসায়নিক বিক্রিয়া, এনজাইম অবস্থান এবং ওষুধের লক্ষ্যবস্তু লেহনিঞ্জার এবং হার্পারস বায়োকেমিস্ট্রি দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'hmgcr-node',
        label: l('1. HMG-CoA Reductase [Committed Mevalonate Step]', '১. HMG-CoA রিডাক্টেজ [প্রধান মেভালোনেট ধাপ]'),
        description: l(
          'Rate-limiting enzyme of cholesterol synthesis located in ER membrane. Reduces HMG-CoA to mevalonate consuming 2 NADPH. Targeted competitively by statin medications.',
          'কোলেস্টেরল সংশ্লেষের প্রধান হার-নিয়ন্ত্রক এনজাইম যা ER পর্দায় থাকে। এটি ২টি NADPH দিয়ে HMG-CoA কে মেভালোনেটে বিজারিত করে। স্ট্যাটিন ওষুধ একে বাধা দেয়।'
        ),
        details: l(
          'Regulated by SREBP-2 transcription, AMPK phosphorylation (inactivation), and sterol-induced ERAD proteasomal destruction.',
          'SREBP-2 ট্রান্সক্রিপশন, এএমপিকে ফসফরাইলেশন এবং কোলেস্টেরল দ্বারা ERAD প্রোটিজোমাল অবক্ষয়ের মাধ্যমে নিয়ন্ত্রিত হয়।'
        ),
        sectionId: 'introduction',
      },
      {
        id: 'isopentenyl-node',
        label: l('2. Isopentenyl Pyrophosphate (IPP) [Activated 5C Isoprenoid]', '২. আইসোপেন্টিনাইল পাইরোফসফেট (IPP) [সক্রিয় ৫-কার্বন আইসোপ্রিন]'),
        description: l(
          'Mevalonate is phosphorylated by 3 ATP molecules and decarboxylated to form activated isoprene units: IPP and its isomer dimethylallyl pyrophosphate (DMAPP).',
          'মেভালোনেট ৩টি এটিপি দ্বারা ফসফরাইলেটেড ও কার্বক্সিলমুক্ত হয়ে সক্রিয় ৫ কার্বনের আইসোপ্রিন একক: IPP এবং DMAPP উৎপন্ন করে।'
        ),
        details: l(
          'Universal precursors for cholesterol, dolichol (glycoprotein synthesis), coenzyme Q (electron transport), and protein prenylation (Ras/Rho GTPases).',
          'কোলেস্টেরল ছাড়াও ডলিকল, কোএনজাইম কিউ এবং প্রোটিন প্রেনাইলেশনের (ক্যান্সার সংকেত রাস/রো প্রোটিন) অপরিহার্য প্রাথমিক একক।'
        ),
        sectionId: 'structure',
      },
      {
        id: 'squalene-synthase-node',
        label: l('3. Squalene Synthase [Head-to-Head Condensation to 30C]', '৩. স্কোয়ালিন সিন্থেজ [৩০ কার্বনের স্কোয়ালিন ঘনীভবন]'),
        description: l(
          'Condenses two 15-carbon farnesyl pyrophosphate (FPP) molecules head-to-head in an NADPH-dependent reaction to form the 30-carbon acyclic hydrocarbon squalene.',
          'দুটি ১৫ কার্বনের ফার্নেসিল পাইরোফসফেট (FPP) অণুকে NADPH ব্যবহার করে মুখোমুখি যুক্ত করে ৩০ কার্বনের রৈখিক হাইড্রোকার্বন স্কোয়ালিন তৈরি করে।'
        ),
        details: l(
          'The first committed step dedicated exclusively to sterol synthesis, branching away from non-sterol isoprenoid pathways.',
          'এটি কেবল স্টেরল সংশ্লেষের জন্য নির্ধারিত প্রথম ধাপ, যা নন-স্টেরল আইসোপ্রিন শাখা থেকে আলাদা হয়ে যায়।'
        ),
        sectionId: 'mechanism',
      },
      {
        id: 'squalene-cyclase-node',
        label: l('4. Oxidosqualene Cyclase & Lanosterol [Concerted Ring Closure]', '৪. অক্সিডোস্কোয়ালিন সাইক্লেজ ও ল্যানোস্টেরল [একযোগে চার-বলয় গঠন]'),
        description: l(
          'Squalene monooxygenase forms squalene 2,3-epoxide. Oxidosqualene cyclase catalyzes a spectacular cationic cascade closing the A, B, C, and D rings into lanosterol.',
          'স্কোয়ালিন ইপোক্সাইড তৈরির পর সাইক্লেজ এনজাইম একযোগে ক্যাটায়ন ক্যাসকেডের মাধ্যমে A, B, C ও D বলয় বন্ধ করে চার-বলয়বিশিষ্ট ল্যানোস্টেরল তৈরি করে।'
        ),
        details: l(
          'Nineteen subsequent enzymatic reactions remove three methyl groups, reduce double bonds, and migrate the delta-8 bond to delta-5 to yield 27C cholesterol.',
          'পরবর্তী ১৯টি এনজাইমীয় ধাপে তিনটি মিথাইল গ্রুপ অপসারিত হয় এবং দ্বিবন্ধন স্থানান্তরিত হয়ে ২৭ কার্বনের কোলেস্টেরল গঠিত হয়।'
        ),
        sectionId: 'mechanism',
      },
      {
        id: 'srebp2-sensor-node',
        label: l('5. SREBP-2 / SCAP Sterol Sensor [Homeostatic Feedback Hub]', '৫. SREBP-2 / SCAP স্টেরল সংবেদক [ভারসাম্য নিয়ন্ত্রক কেন্দ্র]'),
        description: l(
          'When ER membrane cholesterol drops below 5 mol percent, SCAP escorts SREBP-2 to the Golgi. S1P and S2P proteases cleave SREBP-2, releasing nuclear transcription factor.',
          'ER পর্দায় কোলেস্টেরল ৫ শতাংশের নিচে নামলে SCAP প্রোটিন SREBP-2 কে গলগিতে নিয়ে যায়, যেখানে প্রোটিয়েজ এনজাইম কেটে সক্রিয় ট্রান্সক্রিপশন ফ্যাক্টর মুক্ত করে।'
        ),
        details: l(
          'Nuclear SREBP-2 binds sterol regulatory elements (SRE) to upregulate HMGCR and LDL receptor expression, restoring intracellular sterol homeostasis.',
          'নিউক্লিয়াসে গিয়ে এটি HMGCR এবং এলডিএল রিসেপ্টর জিনের প্রকাশ বাড়িয়ে কোষের স্বাভাবিক কোলেস্টেরল পুনরুদ্ধার করে।'
        ),
        sectionId: 'structure',
      },
      {
        id: 'cyp7a1-bile-node',
        label: l('6. CYP7A1 & Bile Salt Synthesis [Enterohepatic Flux Gateway]', '৬. CYP7A1 ও পিত্ত লবণ সংশ্লেষ [অন্ত্র-যকৃৎ প্রবাহের প্রধান পথ]'),
        description: l(
          'Cholesterol 7alpha-hydroxylase initiates conversion of cholesterol into cholic acid and chenodeoxycholic acid. Conjugated with glycine or taurine into amphipathic bile salts.',
          'CYP7A1 এনজাইম কোলেস্টেরলকে কোলিক ও চেনোডেক্সিকোলিক অ্যাসিডে রূপান্তরিত করে, যা গ্লাইসিন বা টরিনের সাথে যুক্ত হয়ে পিত্ত লবণ তৈরি করে।'
        ),
        details: l(
          'Bile salts emulsify dietary lipids in duodenum; 95% reabsorbed in terminal ileum via ASBT. Inhibited by FXR receptor signaling to prevent detergent toxicity.',
          'পিত্ত লবণ অন্ত্রে চর্বি পরিপাক করে এবং ৯৫% ইলিয়ামে পুনর্শোষিত হয়। পিত্তের বিষাক্ততা রোধে এটি FXR রিসেপ্টর দ্বারা অবদমিত হয়।'
        ),
        sectionId: 'integration',
      },
      {
        id: 'star-steroid-node',
        label: l('7. StAR Protein & CYP11A1 Desmolase [Steroid Hormone Master Gate]', '৭. StAR প্রোটিন ও CYP11A1 ডেসমোলেজ [স্টেরয়েড হরমোনের মূল দ্বার]'),
        description: l(
          'StAR protein delivers cholesterol across the mitochondrial intermembrane space. CYP11A1 (desmolase) cleaves the side chain to form pregnenolone, precursor to all steroid hormones.',
          'StAR প্রোটিন কোলেস্টেরলকে মাইটোকন্ড্রিয়ার ভেতরে পাঠায়। CYP11A1 এনজাইম সাইড চেইন কেটে প্রেগনেনোলোন তৈরি করে, যা সকল স্টেরয়েড হরমোনের জনক।'
        ),
        details: l(
          'Diverges in adrenal cortex and gonads to form mineralocorticoids (aldosterone), glucocorticoids (cortisol), androgens (testosterone), and estrogens (estradiol).',
          'অ্যাড্রিনাল ও জননাঙ্গে এটি বিভিন্ন দিকে প্রবাহিত হয়ে অ্যালডোস্টেরন, কর্টিসল, টেস্টোস্টেরন এবং ইস্ট্রাডিওল হরমোন তৈরি করে।'
        ),
        sectionId: 'practice',
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Introduction: Cholesterol as an Essential Membrane Architect', 'ভূমিকা: কোষপর্দার অপরিহার্য স্থপতি হিসেবে কোলেস্টেরল'),
          paragraphs: [
            l(
              'While cholesterol is frequently associated with cardiovascular risk in popular discussions, it is in reality an absolute structural necessity for human life. Within the cellular plasma membrane, the rigid four-ring hydrocarbon nucleus of cholesterol intercalates between fatty acid tails of phospholipids, stabilizing the membrane at high temperatures while preventing rigid crystallization at low temperatures.',
              'জনসাধারণের আলোচনায় কোলেস্টেরলকে প্রায়শই কেবল হৃদরোগের ঝুঁকির সাথে তুলনা করা হলেও প্রকৃতপক্ষে এটি মানব জীবনের এক পরম অপরিহার্য কাঠামোগত উপাদান। প্রতিটি কোষপর্দায় কোলেস্টেরলের সমতল চার-বলয়বিশিষ্ট হাইড্রোকার্বন কাঠামো ফসফোলিপিডের মাঝে অবস্থান করে চরম গরমে কোষপর্দাকে অতিরিক্ত তরল হওয়া থেকে এবং ঠান্ডায় শক্ত হয়ে জমাট বাঁধা থেকে রক্ষা করে।'
            ),
            l(
              'Beyond maintaining plasma membrane architecture, cholesterol serves as the irreplaceable starting raw material for synthesizing all steroid hormones (including cortisol, aldosterone, and sex hormones), digestive bile salts that absorb dietary fats, and vitamin D in sun-exposed skin. Every cell with a nucleus can synthesize cholesterol from simple two-carbon acetyl-CoA units, with the liver serving as the body primary production capital.',
              'কোষপর্দার গঠন অটুট রাখা ছাড়াও কোলেস্টেরল সকল স্টেরয়েড হরমোন (যেমন কর্টিসল, অ্যালডোস্টেরন ও সেক্স হরমোন), খাদ্যের চর্বি হজমকারী পিত্ত লবণ এবং ত্বকে সূর্যালোকের সাহায্যে ভিটামিন ডি তৈরির অপরিহার্য কাঁচামাল হিসেবে কাজ করে। নিউক্লিয়াসযুক্ত মানবদেহের প্রতিটি কোষ দুই কার্বনের অ্যাসিটাইল-কোএ থেকে কোলেস্টেরল তৈরি করতে পারলেও যকৃৎ হলো দেহের মূল উৎপাদন কেন্দ্র।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The HMG-CoA Reductase Valve & The SREBP-2 Sensor', 'HMG-CoA রিডাক্টেজ ভালভ ও SREBP-2 স্টেরল সেন্সর'),
          paragraphs: [
            l(
              'Cholesterol synthesis begins in the cytoplasm when two acetyl-CoA units condense into acetoacetyl-CoA, which receives a third acetyl-CoA to produce 3-hydroxy-3-methylglutaryl-CoA (HMG-CoA). The committed, rate-limiting gatekeeper of this entire pathway is the enzyme HMG-CoA reductase (HMGCR), embedded within the membrane of the endoplasmic reticulum. Using two molecules of NADPH, HMGCR converts HMG-CoA irreversibly into mevalonate.',
              'সাইটোপ্লাজমে দুটি অ্যাসিটাইল-কোএ যুক্ত হয়ে অ্যাসিটোঅ্যাসিটাইল-কোএ গঠনের মাধ্যমে কোলেস্টেরল তৈরি শুরু হয়, যা তৃতীয় অ্যাসিটাইল-কোএ গ্রহণ করে HMG-CoA তৈরি করে। এই সম্পূর্ণ গতিপথের প্রধান হার-নিয়ন্ত্রক প্রবেশদ্বার হলো এন্ডোপ্লাজমিক রেটিকুলামের পর্দায় থাকা HMG-CoA রিডাক্টেজ (HMGCR) এনজাইম। দুটি NADPH ব্যবহার করে এটি অপরিবর্তনীয়ভাবে HMG-CoA কে মেভালোনেটে রূপান্তর করে।'
            ),
            l(
              'HMG-CoA reductase is the pharmacological target of statin medications, the most widely prescribed lipid-lowering drugs in global medicine. Cells tightly regulate this enzyme through an intracellular cholesterol sensor called SREBP-2. When cell cholesterol runs low, SREBP-2 travels to the cell nucleus to ramp up transcription of HMGCR and LDL receptors, ensuring that cells maintain precise internal sterol equilibrium.',
              'HMG-CoA রিডাক্টেজ হলো বিশ্বব্যাপী বহুল ব্যবহৃত স্ট্যাটিন ওষুধের প্রধান চিকিৎসাগত লক্ষ্যবস্তু। কোষে SREBP-2 নামক একটি বিশেষ স্টেরল সেন্সর প্রোটিনের মাধ্যমে এই এনজাইমটি অত্যন্ত সতর্কতার সাথে নিয়ন্ত্রিত হয়। কোষে কোলেস্টেরল কমে গেলে SREBP-2 কোষের নিউক্লিয়াসে গিয়ে নতুন HMGCR এবং এলডিএল রিসেপ্টর তৈরির সংকেত দেয়, যা কোষের ভেতরের স্টেরল ভারসাম্য নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Assembling Activated Isoprenes, Squalene & The Steroid Nucleus', 'সক্রিয় আইসোপ্রিন, স্কোয়ালিন ও স্টেরয়েড বলয় গঠন প্রক্রিয়া'),
          paragraphs: [
            l(
              'Following mevalonate synthesis, the cell invests three molecules of ATP to decarboxylate and phosphorylate the molecule into active five-carbon building blocks called isopentenyl pyrophosphate (IPP). These versatile five-carbon units are not only used for cholesterol, but are also branched off to construct ubiquinone (coenzyme Q) for mitochondrial energy generation and dolichol for cellular glycoprotein synthesis.',
              'মেভালোনেট তৈরির পর কোষ তিনটি এটিপি খরচ করে এটিকে ৫-কার্বন বিশিষ্ট সক্রিয় জৈব একক আইসোপেন্টিনাইল পাইরোফসফেটে (IPP) রূপান্তর করে। এই বহুমুখী ৫-কার্বনের এককগুলো কেবল কোলেস্টেরল তৈরিতেই ব্যবহৃত হয় না, বরং মাইটোকন্ড্রিয়াল শক্তির কোএনজাইম কিউ এবং কোষীয় গ্লাইকোপ্রোটিন তৈরির ডলিকল কঙ্কাল গঠনেও একইভাবে অংশ নেয়।'
            ),
            l(
              'Six of these activated isoprene units condense together head-to-tail and head-to-head to form the linear thirty-carbon hydrocarbon squalene. Squalene monooxygenase then introduces oxygen, triggering a dramatic enzymatic cyclization that closes four rings simultaneously to generate lanosterol. Over nineteen subsequent enzymatic steps in the endoplasmic reticulum, lanosterol is trimmed down to form mature 27-carbon cholesterol.',
              'এই সক্রিয় আইসোপ্রিন এককগুলোর ছয়টি পরস্পরের সাথে যুক্ত হয়ে ৩০-কার্বনের লম্বা হাইড্রোকার্বন স্কোয়ালিন গঠন করে। স্কোয়ালিন মনোঅক্সিজিনেজ এতে অক্সিজেন যুক্ত করার পর একটি চমকপ্রদ এনজাইম বিক্রিয়া একযোগে চারটি বলয় বন্ধ করে ল্যানোস্টেরল তৈরি করে। এরপর এন্ডোপ্লাজমিক রেটিকুলামের ১৯টি জটিল ধাপে ল্যানোস্টেরল পরিবর্তিত হয়ে ২৭ কার্বনের পূর্ণাঙ্গ কোলেস্টেরল অণুতে পরিণত হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Bile Salts & Steroid Hormones: Eliminating and Utilizing Cholesterol', 'পিত্ত লবণ ও স্টেরয়েড হরমোন: কোলেস্টেরল নিষ্কাশন ও ব্যবহার'),
          paragraphs: [
            l(
              'The human body lacks any metabolic machinery capable of breaking the four rigid steroid rings into carbon dioxide and water. Consequently, the primary route for eliminating cholesterol is converting it in the liver into amphipathic bile acids (such as cholic acid and chenodeoxycholic acid). Secreted into bile, these bile salts act as biological detergents that emulsify dietary lipids in the small intestine before being ninety-five percent recycled by the enterohepatic circulation.',
              'মানবদেহে চার-বলয়বিশিষ্ট অনমনীয় স্টেরয়েড কাঠামোকে ভেঙে কার্বন ডাই-অক্সাইড বা পানিতে পরিণত করার কোনো এনজাইম নেই। ফলে শরীর থেকে কোলেস্টেরল দূর করার একমাত্র প্রধান উপায় হলো যকৃতে এটিকে পিত্ত অ্যাসিডে (যেমন কোলিক অ্যাসিড) রূপান্তর করা। পিত্তের মাধ্যমে অন্ত্রে নিঃসৃত হয়ে এরা খাদ্যের চর্বি হজমে ডিটারজেন্ট হিসেবে কাজ করে এবং ৯৫ শতাংশ পুনরায় শোষিত হয়ে যকৃতে ফিরে আসে।'
            ),
            l(
              'In endocrine tissues such as the adrenal cortex, ovaries, and testes, cholesterol is delivered across mitochondrial membranes by the StAR protein. Inside the mitochondria, the desmolase enzyme (CYP11A1) cleaves its hydrocarbon side chain to produce pregnenolone, the master precursor that is sculpted by specialized tissues into cortisol, aldosterone, testosterone, and estrogens to regulate human physiology.',
              'অ্যাড্রিনাল গ্রন্থি, ডিম্বাশয় এবং শুক্রাশয়ের মতো অন্তঃক্ষরা অঙ্গে StAR প্রোটিন কোলেস্টেরলকে মাইটোকন্ড্রিয়ার ভেতরে পৌঁছে দেয়। মাইটোকন্ড্রিয়ার ভেতরে ডেসমোলেজ (CYP11A1) এনজাইম কোলেস্টেরলের সাইড চেইন কেটে প্রেগনেনোলোন তৈরি করে, যা পরবর্তীতে রূপান্তরিত হয়ে কর্টিসল, অ্যালডোস্টেরন, টেস্টোস্টেরন ও ইস্ট্রাডিওলের মতো গুরুত্বপূর্ণ হরমোন গঠন করে মানব শারীরবৃত্ত নিয়ন্ত্রণ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Reasoning: How Statin Therapy Protects Arteries', 'মৌলিক যুক্তি: স্ট্যাটিন চিকিৎসা কীভাবে রক্তনালীকে সুরক্ষা দেয়'),
          paragraphs: [
            l(
              'When a patient with elevated cardiovascular risk takes a statin, the drug competitively blocks HMG-CoA reductase in the liver. Facing a drop in internal sterol levels, hepatocytes activate SREBP-2 to produce abundant cell-surface LDL receptors. These receptors capture atherogenic LDL particles from the bloodstream, cleansing the circulation and substantially lowering the risk of myocardial infarction.',
              'হৃদরোগের ঝুঁকিতে থাকা রোগী যখন স্ট্যাটিন সেবন করে, তখন ওষুধটি যকৃতের HMG-CoA রিডাক্টেজ এনজাইমকে বাধা দেয়। যকৃতে কোলেস্টেরল কমে যাওয়ায় কোষগুলো SREBP-2 সক্রিয় করে প্রচুর নতুন এলডিএল রিসেপ্টর তৈরি করে। এই রিসেপ্টরগুলো রক্ত থেকে ক্ষতিকর এলডিএল কণা শুষে নিয়ে রক্ত পরিষ্কার করে এবং হৃদরোগ বা হার্ট অ্যাটাকের ঝুঁকি অনেকাংশে কমিয়ে দেয়।'
            ),
          ],
          bullets: [
            l('Statin inhibition of HMGCR triggers compensatory LDL receptor upregulation on hepatocytes.', 'স্ট্যাটিন দ্বারা HMGCR বাধাগ্রস্ত হলে যকৃতে ক্ষতিপূরণ হিসেবে এলডিএল রিসেপ্টরের সংখ্যা বৃদ্ধি পায়।'),
            l('Bile acid sequestering resins force the liver to convert more cholesterol into bile salts for elimination.', 'পিত্ত অ্যাসিড বন্ধনকারী ওষুধ যকৃৎকে বেশি করে কোলেস্টেরল পিত্তে রূপান্তর করতে বাধ্য করে কোলেস্টেরল কমায়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Foundational Takeaways & Summary', 'মূল শিক্ষণীয় বিষয় ও সংক্ষিপ্ত সারাংশ'),
          paragraphs: [
            l(
              'Cholesterol is an indispensable eukaryotic membrane lipid and the universal precursor for bile salts and steroid hormones. De novo synthesis is rate-limited by endoplasmic reticulum HMG-CoA reductase, controlled via the SREBP-2 sterol sensor. Because the steroid nucleus cannot be degraded, hepatic conversion into bile salts and enterohepatic recycling represent the principal quantitative excretory pathways in human physiology.',
              'কোলেস্টেরল হলো কোষপর্দার এক অপরিহার্য উপাদান এবং পিত্ত লবণ ও সকল স্টেরয়েড হরমোনের সার্বজনীন অগ্রদূত। এন্ডোপ্লাজমিক রেটিকুলামের HMG-CoA রিডাক্টেজ এবং SREBP-2 সেন্সর এই সংশ্লেষের প্রধান নিয়ন্ত্রক হিসেবে কাজ করে। স্টেরয়েড রিং ধ্বংস করা অসম্ভব হওয়ায় যকৃতে পিত্ত অ্যাসিডে রূপান্তর এবং অন্ত্র-যকৃৎ আবর্তনই হলো মানবদেহে কোলেস্টেরল নিয়ন্ত্রণের মূল শারীরবৃত্তীয় পথ।'
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
          heading: l('1. Structural Importance of Cholesterol & The Mevalonate Commitment', '১. কোলেস্টেরলের গঠনগত গুরুত্ব ও মেভালোনেট পথের সূচনা'),
          paragraphs: [
            l(
              'Cholesterol is a twenty-seven carbon tetracyclic lipid molecule that serves as an indispensable constituent of eukaryotic plasma membranes. Within the lipid bilayer, the rigid planar four-ring steroid nucleus intercalates between fatty acyl tails of phospholipids, while its polar carbon-3 hydroxyl group orients toward aqueous solvent. This amphipathic structure confers membrane fluidity modulation, preventing phase transitions at extreme temperatures and organizing specialized sphingolipid-rich membrane microdomains termed lipid rafts that organize signal transduction complexes.',
              'কোলেস্টেরল হলো একটি ২৭-কার্বন বিশিষ্ট চার-বলয়যুক্ত লিপিড অণু যা প্রতিটি ইউক্যারিওটিক কোষপর্দার এক অপরিহার্য উপাদান। কোষপর্দার ফসফোলিপিডের মাঝে কোলেস্টেরলের সমতল রিং কাঠামোটি প্রবেশ করে এর স্বাভাবিক তারল্য ও স্থায়িত্ব বজায় রাখে এবং এর ৩-নম্বর কার্বনের পোলার হাইড্রোক্সিল মূলকটি বাইরের পানির দিকে মুখ করে থাকে। এই অনন্য বৈশিষ্ট্য কোষপর্দাকে চরম তাপমাত্রায় সুরক্ষিত রাখে এবং লিপিড র্যাফ্ট নামক বিশেষ সংকেত আদান-প্রদানকারী এলাকা গঠন করে।'
            ),
            l(
              'De novo cholesterol synthesis occurs predominantly in hepatocytes and enterocytes, although every nucleated human cell retains autonomous synthetic capacity. Biosynthesis begins in the cytosol where two molecules of acetyl-CoA are condensed by acetoacetyl-CoA thiolase, followed by the addition of a third acetyl-CoA by cytosolic HMG-CoA synthase to generate 3-hydroxy-3-methylglutaryl-CoA (HMG-CoA). Note that this cytosolic HMG-CoA synthase is a distinct genetic isozyme from the mitochondrial synthase dedicated to ketogenesis, representing strict intracellular spatial compartmentalization.',
              'যদিও মানবদেহের প্রতিটি নিউক্লিয়াসযুক্ত কোষের কোলেস্টেরল তৈরির নিজস্ব ক্ষমতা রয়েছে, তবে যকৃৎ ও অন্ত্রের কোষেই এর সিংহভাগ সংশ্লেষিত হয়। সাইটোসলে থায়োলেজ এনজাইম দুটি অ্যাসিটাইল-কোএ যুক্ত করে অ্যাসিটোঅ্যাসিটাইল-কোএ তৈরি করে, যার সাথে সাইটোসলিক HMG-CoA সিন্থেজ তৃতীয় অ্যাসিটাইল-কোএ যুক্ত করে HMG-CoA গঠন করে। মনে রাখতে হবে, সাইটোসলের এই HMG-CoA সিন্থেজ এনজাইমটি মাইটোকন্ড্রিয়ার কিটোন তৈরিকারী সিন্থেজ থেকে জিনগতভাবে সম্পূর্ণ ভিন্ন এবং স্বতন্ত্র।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. HMG-CoA Reductase: Master Gatekeeper & The SREBP-2 Sterol Sensor', '২. HMG-CoA রিডাক্টেজ: প্রধান নিয়ন্ত্রক ও SREBP-2 স্টেরল সেন্সর'),
          paragraphs: [
            l(
              'The committed, rate-limiting reaction of cholesterol biosynthesis is catalyzed by 3-hydroxy-3-methylglutaryl-CoA reductase (HMGCR). Located in the membrane of the endoplasmic reticulum with its catalytic tetramer protruding into the cytosol, HMGCR carries out the irreversible four-electron reduction of HMG-CoA to mevalonate, utilizing two molecules of NADPH as electron donors and releasing coenzyme A. Because of its pivotal thermodynamic and regulatory position, HMGCR is subject to exquisite feedback control across transcriptional, translational, and post-translational axes.',
              'কোলেস্টেরল সংশ্লেষের প্রধান হার-নিয়ন্ত্রক ও অপরিবর্তনীয় বিক্রিয়াটি সম্পন্ন করে HMG-CoA রিডাক্টেজ (HMGCR)। এটি এন্ডোপ্লাজমিক রেটিকুলামের মেমব্রেনে অবস্থান করে এবং সাইটোসলে দুটি NADPH ব্যবহার করে HMG-CoA কে মেভালোনেটে বিজারিত করে কোএনজাইম এ মুক্ত করে। এই এনজাইমটি গতিপথের প্রধান নিয়ন্ত্রক ভালভ হওয়ায় এটি ট্রান্সক্রিপশন, অনুবাদের হার এবং প্রোটিন অবক্ষয়ের বহুস্তরীয় ফিডব্যাক দ্বারা অত্যন্ত সূক্ষ্মভাবে নিয়ন্ত্রিত হয়।'
            ),
            l(
              'Transcriptional regulation is governed by sterol regulatory element-binding protein-2 (SREBP-2). SREBP-2 resides in the ER membrane in a complex with SCAP (SREBP cleavage-activating protein), which contains a sterol-sensing domain. When ER membrane cholesterol exceeds 5 mol percent, cholesterol binds SCAP, which binds Insig-1/Insig-2, locking the complex securely in the ER. When cellular sterol levels fall, Insig dissociates, and SCAP escorts SREBP-2 to the Golgi apparatus in COPII vesicles. In the Golgi, Site-1 Protease (S1P) and Site-2 Protease (S2P) cleave SREBP-2, liberating the basic helix-loop-helix transcription factor domain to migrate to the nucleus and induce transcription of HMGCR and the LDL receptor.',
              'ট্রান্সক্রিপশন নিয়ন্ত্রণের কেন্দ্রে রয়েছে SREBP-2 প্রোটিন। এন্ডোপ্লাজমিক রেটিকুলামে এটি SCAP প্রোটিনের সাথে যুক্ত থাকে যা স্টেরল সংবেদনশীল। কোষে কোলেস্টেরল স্বাভাবিক থাকলে এটি ইন্সিগ (Insig) প্রোটিনের সাথে আবদ্ধ হয়ে ER-এ স্থির থাকে। কিন্তু কোলেস্টেরল কমে গেলে ইন্সিগ আলাদা হয়ে যায় এবং SCAP প্রোটিন SREBP-2 কে গলগি বডিতে নিয়ে যায়। গলগিতে S1P এবং S2P প্রোটিয়েজ এনজাইম একে কেটে সক্রিয় অংশটিকে নিউক্লিয়াসে পাঠিয়ে দেয়, যা HMGCR এবং এলডিএল রিসেপ্টর জিনের প্রকাশ বহুলাংশে বৃদ্ধি করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Activated Isoprenes, Squalene Condensation & Lanosterol Cyclization', '৩. সক্রিয় আইসোপ্রিন, স্কোয়ালিন ঘনীভবন ও ল্যানোস্টেরল বলয় গঠন'),
          paragraphs: [
            l(
              'In stage two, mevalonate undergoes sequential phosphorylations by mevalonate kinase and phosphomevalonate kinase consuming two ATP molecules, followed by an ATP-dependent decarboxylative elimination by diphosphomevalonate decarboxylase to yield the fundamental five-carbon activated isoprene unit: isopentenyl pyrophosphate (IPP). Isopentenyl pyrophosphate isomerase readily interconverts IPP with dimethylallyl pyrophosphate (DMAPP). These five-carbon building blocks are essential precursors not only for sterols, but also for ubiquinone (coenzyme Q) in the mitochondrial electron transport chain, dolichol phosphate for N-linked protein glycosylation, and farnesyl/geranylgeranyl groups for post-translational prenylation of signaling GTPases (Ras, Rho, Rac).',
              '২য় পর্যায়ে মেভালোনেট দুটি এটিপি খরচ করে ফসফরাইলেটেড হয় এবং ৩য় এটিপি সহযোগে কার্বক্সিলমুক্ত হয়ে ৫-কার্বনের প্রধান জৈব একক আইসোপেন্টিনাইল পাইরোফসফেট (IPP) তৈরি করে। আইসোমারেজ এনজাইম এটিকে DMAPP-তে রূপান্তরিত করে। এই ৫-কার্বনের আইসোপ্রিন এককগুলো কেবল কোলেস্টেরলই তৈরি করে না, বরং ইলেকট্রন ট্রান্সপোর্ট চেইনের কোএনজাইম কিউ, প্রোটিন গ্লাইকোসাইলেশনের ডলিকল এবং ক্যান্সার সংকেতের রাস/রো প্রোটিনের প্রেনাইলেশনের জন্যও সম্পূর্ণ অপরিহার্য।'
            ),
            l(
              'In stage three, head-to-tail condensation of DMAPP with two molecules of IPP generates farnesyl pyrophosphate (FPP, 15 carbons). Squalene synthase in the ER membrane condenses two molecules of FPP head-to-head in an NADPH-dependent reductive elimination of both pyrophosphate groups, synthesizing the unbranched 30-carbon hydrocarbon squalene. In stage four, squalene monooxygenase (epoxidase) incorporates molecular oxygen to form squalene 2,3-epoxide. Oxidosqualene cyclase then executes a spectacular, concerted carbocation cascade that closes rings A, B, C, and D simultaneously, converting squalene epoxide into the tetracyclic sterol lanosterol. Nineteen subsequent ER-localized reactions remove three methyl groups and migrate double bonds to yield 27-carbon cholesterol.',
              '৩য় পর্যায়ে DMAPP ও IPP যুক্ত হয়ে ১৫ কার্বনের ফার্নেসিল পাইরোফসফেট (FPP) তৈরি করে। স্কোয়ালিন সিন্থেজ এনজাইম দুটি FPP-কে মুখোমুখি যুক্ত করে ৩০ কার্বনের স্কোয়ালিন গঠন করে। ৪র্থ পর্যায়ে স্কোয়ালিন মনোঅক্সিজিনেজ অক্সিজেন যুক্ত করে স্কোয়ালিন ২,৩-ইপোক্সাইড তৈরি করে। এরপর সাইক্লেজ এনজাইম এক অবিশ্বাস্য দ্রুততায় চারটি বলয় একযোগে বন্ধ করে ল্যানোস্টেরল তৈরি করে। পরবর্তী ১৯টি ধাপে এন্ডোপ্লাজমিক রেটিকুলামের এনজাইমগুলো তিনটি মিথাইল মূলক অপসারণ করে ২৭ কার্বনের পূর্ণাঙ্গ কোলেস্টেরল উৎপাদন সম্পন্ন করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Bile Acid Biogenesis, Conjugation & Enterohepatic Circulation', '৪. পিত্ত অ্যাসিড তৈরি, সংযোজন ও অন্ত্র-যকৃৎ আবর্তন গতিপথ'),
          paragraphs: [
            l(
              'The human body cannot degrade the four-ring cyclopentanoperhydrophenanthrene sterol nucleus into carbon dioxide and water. The sole quantitative pathway for cholesterol elimination is hepatic conversion into amphipathic bile acids and direct biliary excretion of unesterified cholesterol. The rate-limiting initial step of classic bile acid synthesis is catalyzed by cholesterol 7alpha-hydroxylase (CYP7A1), an endoplasmic reticulum cytochrome P450 monooxygenase requiring NADPH, molecular oxygen, and vitamin C. CYP7A1 is transcriptionally repressed by bile acids returning to the liver via farnesoid X receptor (FXR) induction of small heterodimer partner (SHP) and ileal fibroblast growth factor 19 (FGF19).',
              'মানবদেহ কোলেস্টেরলের চার-বলয়বিশিষ্ট স্টেরয়েড কঙ্কালকে ভেঙে কার্বন ডাই-অক্সাইড বা পানিতে পরিণত করতে পারে না। শরীর থেকে কোলেস্টেরল বের করার একমাত্র কার্যকর উপায় হলো যকৃতে এটিকে পিত্ত অ্যাসিডে রূপান্তর করা। এই গতিপথের প্রধান হার-নিয়ন্ত্রক এনজাইম হলো সাইটোক্রোম P450 শ্রেণির কোলেস্টেরল ৭-আলফা-হাইড্রক্সিলেজ (CYP7A1)। যকৃতে ফিরে আসা পিত্ত অ্যাসিড FXR রিসেপ্টরের মাধ্যমে FGF19 ও SHP প্রোটিন তৈরি করে এই এনজাইমকে অবদমিত রাখে, যাতে অতিরিক্ত ক্ষতিকর পিত্ত লবণ তৈরি না হয়।'
            ),
            l(
              'The liver converts cholesterol into the primary bile acids cholic acid and chenodeoxycholic acid, which are subsequently conjugated via amide linkages with glycine or taurine (at a 3:1 ratio in humans) to form bile salts such as glycocholate and taurocholate. Conjugation lowers their pKa from ~6 to ~4 (glycine) or ~2 (taurine), ensuring they remain fully ionized, water-soluble amphipathic detergents across the acidic-to-neutral pH of the intestinal lumen. Secreted into the duodenum, bile salts emulsify dietary triacylglycerols and fat-soluble vitamins into mixed micelles. In the terminal ileum, approximately 95 percent of bile salts are actively reabsorbed by the apical sodium-dependent bile acid transporter (ASBT) and recycled back to the liver via the portal vein, cycling 6 to 10 times daily.',
              'যকৃৎ কোলেস্টেরল থেকে প্রাথমিক পিত্ত অ্যাসিড—কোলিক অ্যাসিড ও চেনোডেক্সিকোলিক অ্যাসিড তৈরি করে এবং এদেরকে গ্লাইসিন বা টরিনের সাথে যুক্ত করে গ্লাইকোকোলেট ও টরোকোলেটের মতো পিত্ত লবণে রূপান্তর করে। এই সংযোজনের ফলে তাদের pKa কমে যায় এবং অন্ত্রের স্বাভাবিক অম্লীয় ও ক্ষারীয় পরিবেশে তারা সম্পূর্ণরূপে আয়নিত হয়ে চমৎকার ডিটারজেন্ট হিসেবে কাজ করে। পিত্ত লবণ খাদ্যের চর্বি হজমে সাহায্য করে এবং ক্ষুদ্রান্ত্রের শেষ ভাগে ASBT ট্রান্সপোর্টার দিয়ে ৯৫ শতাংশই পুনরায় শোষিত হয়ে পোর্টাল শিরার মাধ্যমে যকৃতে ফিরে আসে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Steroid Hormone Biosynthesis & Congenital Adrenal Hyperplasia', '৫. স্টেরয়েড হরমোন সংশ্লেষ ও জন্মগত অ্যাড্রিনাল হাইপারপ্লাসিয়া'),
          paragraphs: [
            l(
              'All steroid hormones—mineralocorticoids, glucocorticoids, androgens, estrogens, and progestins—derive from free cholesterol. The rate-limiting step in all steroidogenic tissues (adrenal cortex, ovaries, testes) is the transport of hydrophobic cholesterol from the outer mitochondrial membrane to the inner mitochondrial membrane, mediated by the steroidogenic acute regulatory protein (StAR). At the inner membrane, CYP11A1 (cholesterol side-chain cleavage enzyme / P450scc / desmolase) cleaves a six-carbon isocaproaldehyde fragment from the 27-carbon sterol core to generate the universal 21-carbon steroid precursor pregnenolone.',
              'মানবদেহের সকল স্টেরয়েড হরমোন—অ্যালডোস্টেরন, কর্টিসল, টেস্টোস্টেরন, ইস্ট্রাডিওল এবং প্রোজেস্টেরন—সরাসরি মুক্ত কোলেস্টেরল থেকে তৈরি হয়। অ্যাড্রিনাল ও জননাঙ্গে এই প্রক্রিয়ার প্রধান হার-নিয়ন্ত্রক সূচনা হলো StAR প্রোটিন দ্বারা কোলেস্টেরলকে মাইটোকন্ড্রিয়ার বহিঃপর্দা থেকে অন্তঃপর্দায় স্থানান্তর করা। অন্তঃপর্দায় CYP11A1 (ডেসমোলেজ) এনজাইম ২৭ কার্বনের কোলেস্টেরলের সাইড চেইন কেটে ২১ কার্বনের সার্বজনীন অগ্রদূত প্রেগনেনোলোন তৈরি করে।'
            ),
            l(
              'Congenital adrenal hyperplasia (CAH) represents a spectrum of autosomal recessive enzymopathies affecting adrenal steroidogenesis, with greater than 90 percent of cases caused by mutations in the CYP21A2 gene encoding 21-hydroxylase. Impairment of 21-hydroxylase blocks the synthesis of both aldosterone (producing severe salt wasting, hyponatremia, hyperkalemia, and hypovolemic shock in the classical salt-wasting form) and cortisol. Absent cortisol removes negative feedback on the pituitary, causing massive ACTH secretion. Excess ACTH drives unchecked adrenal steroidogenesis, shunting accumulated 17-hydroxyprogesterone into intact androgen synthesis pathways and causing prenatal virilization (ambiguous genitalia) in newborn genetic females.',
              'কনজেনিটাল অ্যাড্রিনাল হাইপারপ্লাসিয়া (CAH) হলো একটি অটোসোমাল রিসেসিভ বংশগত রোগ যার ৯০ শতাংশের বেশি ক্ষেত্রে ২১-হাইড্রক্সিলেজ (CYP21A2) এনজাইমের ঘাটতি থাকে। এই এনজাইমের অভাবে অ্যালডোস্টেরন তৈরি বন্ধ হয়ে মারাত্মক লবণক্ষয়, রক্তে সোডিয়াম হ্রাস, পটাশিয়াম বৃদ্ধি ও শক দেখা দেয় এবং কর্টিসল তৈরিও বন্ধ হয়ে যায়। রক্তে কর্টিসল না থাকায় পিটুইটারি থেকে অনবরত ACTH হরমোন নিঃসৃত হয়, যা জমা হওয়া কাঁচামালকে অ্যান্ড্রোজেন তৈরির দিকে ঠেলে দেয় এবং নবজাতক কন্যাসন্তানের বাহ্যিক যৌনাঙ্গে পুরুষালী রূপান্তর ঘটায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Core Synthetic Takeaways: Sterol Metabolism Architecture', '৬. মূল শিক্ষা: স্টেরল বিপাকের মৌলিক রূপরেখা'),
          paragraphs: [
            l(
              'Cholesterol biosynthesis is an architecturally elaborate anabolic pathway governed by the rate-limiting enzyme HMG-CoA reductase and the SREBP-2/SCAP transcription sensor. Conversion to bile acids represents the primary quantitative excretory mechanism for sterols, with tight enterohepatic conservation. Free cholesterol also serves as the indispensable precursor for all steroid hormones, initiated by StAR mitochondrial transport and CYP11A1 side-chain cleavage.',
              'কোলেস্টেরল সংশ্লেষ হলো একটি জটিল উপচিতিমূলক গতিপথ যা প্রধানত HMG-CoA রিডাক্টেজ এবং SREBP-2 স্টেরল সেন্সর দ্বারা নিয়ন্ত্রিত হয়। পিত্ত অ্যাসিডে রূপান্তরই হলো শরীর থেকে অতিরিক্ত কোলেস্টেরল দূর করার একমাত্র প্রধান পথ, যার ৯৫% অন্ত্রে পুনর্শোষিত হয়। এছাড়াও কোলেস্টেরল সকল স্টেরয়েড হরমোনের অপরিহার্য ভিত্তি হিসেবে কাজ করে, যার সূচনা ঘটে StAR প্রোটিনের মাইটোকন্ড্রিয়াল পরিবহন ও CYP11A1 এনজাইমের মাধ্যমে।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced & Research', 'উন্নত ও গবেষণা'),
      sections: [
        {
          id: 'integration',
          heading: l('Smith-Lemli-Opitz Syndrome & Post-Lanosterol Enzymopathies', 'স্মিথ-লেমলি-ওপিটজ সিন্ড্রোম ও ল্যানোস্টেরল-পরবর্তী এনজাইম ত্রুটি'),
          paragraphs: [
            l(
              'Smith-Lemli-Opitz syndrome (SLOS) is an autosomal recessive developmental disorder caused by mutations in the DHCR7 gene encoding 7-dehydrocholesterol reductase, the terminal enzyme of cholesterol biosynthesis that reduces the delta-7 double bond. Deficiency of DHCR7 causes severe systemic deficiency of cholesterol accompanied by toxic accumulation of 7-dehydrocholesterol (7-DHC) and its reactive oxysterol photoproducts. SLOS manifests clinically with distinctive microcephaly, characteristic 2-3 toe syndactyly, cleft palate, congenital cardiac anomalies, and severe intellectual disability, illustrating that cholesterol is obligately required for embryonic Sonic Hedgehog (Shh) morphogen autoprocessing.',
              'স্মিথ-লেমলি-ওপিটজ সিন্ড্রোম (SLOS) হলো একটি অটোসোমাল রিসেসিভ জন্মগত রোগ যা কোলেস্টেরল তৈরির সর্বশেষ এনজাইম ৭-ডিহাইড্রোকোলেস্টেরল রিডাক্টেজ (DHCR7) এর ঘাটতির কারণে ঘটে। এর ফলে কোষে কোলেস্টেরলের চরম ঘাটতি হয় এবং বিষাক্ত ৭-ডিহাইড্রোকোলেস্টেরল জমা হয়। এই রোগীদের জন্মগতভাবে মাইক্রোসেফালি, ২য় ও ৩য় পায়ের আঙুল জোড়া লাগা (সিন্ড্যাক্টাইলি), তালুকাটা এবং মারাত্মক বুদ্ধিবৈকল্য দেখা দেয়, যা প্রমাণ করে যে ভ্রূণের স্বাভাবিক বিকাশের জন্য সনিক হেজহগ (Shh) সংকেত প্রোটিনের সাথে কোলেস্টেরল যুক্ত হওয়া অপরিহার্য।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Frontier Pharmacotherapy: PCSK9 Inhibition & FXR Agonists', 'আধুনিক ওষুধ উদ্ভাবন: PCSK9 ইনহিবিটর ও FXR অ্যাগোনিস্ট'),
          paragraphs: [
            l(
              'Modern lipidology has expanded beyond statins to target sterol regulatory nodes directly. Monoclonal antibodies against PCSK9 (evolocumab, alirocumab) and small interfering RNA (inclisiran) prevent PCSK9-mediated lysosomal degradation of the LDL receptor, recycling the receptor up to 150 times to dramatically lower circulating LDL-cholesterol by 50 to 60 percent. Concurrently, synthetic FXR agonists (such as obeticholic acid) and FGF19 analogs are deployed in primary biliary cholangitis and steatohepatitis to shut down toxic bile acid accumulation and improve hepatic metabolic architecture.',
              'আধুনিক চিকিৎসাবিজ্ঞানে স্ট্যাটিনের পাশাপাশি লিপিড নিয়ন্ত্রণের অভিনব পথ আবিষ্কৃত হয়েছে। PCSK9 প্রতিরোধক অ্যান্টিবডি (ইভোলকুম্যাব) এবং এসআইআরএনএ (ইনক্লিসিরান) এলডিএল রিসেপ্টরের ধ্বংস রোধ করে একে প্রায় ১৫০ বার পুনর্ব্যবহারের সুযোগ দেয়, যা রক্তের এলডিএল কোলেস্টেরল ৫০ থেকে ৬০ শতাংশ পর্যন্ত কমিয়ে ফেলে। একই সাথে কৃত্রিম FXR অ্যাগোনিস্ট ওষুধ পিত্তনালীর রোগ এবং ফ্যাটি লিভারে বিষাক্ত পিত্ত লবণের ক্ষতিকর জমা প্রতিহত করতে কার্যকর ভূমিকা রাখছে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A pathway diagram outlining the four stages of cholesterol biosynthesis: acetyl-CoA to mevalonate via HMGCR, generation of activated isoprenoids, condensation to squalene, and cyclization to lanosterol and cholesterol, with branches leading to bile acids and steroid hormones.',
      'কোলেস্টেরল সংশ্লেষের চারটি ধাপ নির্দেশক জৈবরাসায়নিক মানচিত্র: HMGCR দ্বারা অ্যাসিটাইল-কোএ থেকে মেভালোনেট, সক্রিয় আইসোপ্রিন তৈরি, স্কোয়ালিনে ঘনীভবন এবং ল্যানোস্টেরল ও কোলেস্টেরল বলয় গঠন, যার শাখাগুলো পিত্ত অ্যাসিড এবং স্টেরয়েড হরমোন তৈরির দিকে প্রবাহিত হয়েছে।'
    ),
    steps: [
      l('HMG-CoA is reduced to mevalonate by HMG-CoA reductase in the committed rate-limiting step.', 'HMG-CoA রিডাক্টেজ এনজাইম হার-নিয়ন্ত্রক প্রধান ধাপে HMG-CoA কে মেভালোনেটে বিজারিত করে।'),
      l('Mevalonate is converted into five-carbon activated isoprenoids (IPP and DMAPP) using 3 ATP.', '৩টি এটিপি ব্যবহার করে মেভালোনেট থেকে ৫ কার্বনের সক্রিয় আইসোপ্রিন (IPP ও DMAPP) তৈরি হয়।'),
      l('Squalene synthase condenses two 15-carbon FPP molecules to form 30-carbon squalene.', 'স্কোয়ালিন সিন্থেজ দুটি ১৫ কার্বনের FPP যুক্ত করে ৩০ কার্বনের স্কোয়ালিন গঠন করে।'),
      l('Squalene is cyclized into lanosterol and processed to cholesterol, bile acids, and steroid hormones.', 'স্কোয়ালিন বলয়াকারে ল্যানোস্টেরল হয়ে কোলেস্টেরল, পিত্ত অ্যাসিড ও স্টেরয়েড হরমোনে রূপান্তরিত হয়।'),
    ],
  },
  assessment: {
    question: l(
      'A patient with familial hypercholesterolemia is prescribed atorvastatin. By what primary cellular mechanism does this HMG-CoA reductase inhibitor reduce circulating plasma low-density lipoprotein (LDL) levels?',
      'পারিবারিক হাইপারকোলেস্টেরলেমিয়ায় আক্রান্ত এক রোগীকে অ্যাটোরভাস্ট্যাটিন দেওয়া হলো। কোষীয় কোন প্রধান প্রক্রিয়ার মাধ্যমে এই HMG-CoA রিডাক্টেজ ইনহিবিটর ওষুধটি রক্তে এলডিএল কোলেস্টেরলের মাত্রা কমায়?'
    ),
    options: [
      l(
        'Depletion of hepatic intracellular cholesterol activates SREBP-2, upregulating transcription and cell-surface expression of LDL receptors that clear LDL from plasma.',
        'যকৃতে কোলেস্টেরল কমে যাওয়ায় SREBP-2 সক্রিয় হয়, যা যকৃত কোষের উপরিভাগে এলডিএল রিসেপ্টরের সংখ্যা বহুলাংশে বাড়িয়ে দেয় এবং রক্ত থেকে দ্রুত এলডিএল শোষণ করে।'
      ),
      l(
        'Statins directly bind circulating LDL particles in plasma and precipitate them into the biliary canaliculi for fecal excretion.',
        'স্ট্যাটিন সরাসরি রক্তে এলডিএল কণার সাথে যুক্ত হয়ে এদেরকে পিত্তনালীতে অধঃক্ষিপ্ত করে মলের মাধ্যমে বের করে দেয়।'
      ),
      l(
        'Statins completely inhibit the activity of intestinal pancreatic lipase, preventing all dietary cholesterol absorption.',
        'স্ট্যাটিন অগ্ন্যাশয়ের লাইপেজ এনজাইমকে সম্পূর্ণরূপে ধ্বংস করে খাদ্যের কোলেস্টেরল শোষণ বন্ধ করে দেয়।'
      ),
      l(
        'Statins stimulate hormone-sensitive lipase in adipose tissue to convert plasma cholesterol into free fatty acids.',
        'স্ট্যাটিন চর্বি কোষের হরমোন-সংবেদনশীল লাইপেজকে উদ্দীপ্ত করে কোলেস্টেরলকে ফ্যাটি অ্যাসিডে পরিণত করে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Statins competitively inhibit HMG-CoA reductase, reducing hepatic de novo cholesterol synthesis. The resulting drop in endoplasmic reticulum free cholesterol relieves Insig retention of SCAP, allowing SREBP-2 to traffic to the Golgi, undergo proteolytic cleavage, and migrate to the nucleus. SREBP-2 transactivates the LDL receptor gene, dramatically increasing cell-surface LDL receptor density on hepatocytes and pulling circulating atherogenic LDL particles out of the bloodstream via receptor-mediated endocytosis.',
      'স্ট্যাটিন ওষুধ HMG-CoA রিডাক্টেজ এনজাইমকে অবদমিত করে যকৃতে কোলেস্টেরল তৈরি কমিয়ে দেয়। যকৃতে কোলেস্টেরল হ্রাস পাওয়ায় SREBP-2 মুক্ত হয়ে নিউক্লিয়াসে যায় এবং এলডিএল রিসেপ্টর তৈরির জিন সক্রিয় করে। ফলে যকৃতের গায়ে প্রচুর নতুন এলডিএল রিসেপ্টর তৈরি হয় যা রক্তে ভেসে বেড়ানো ক্ষতিকর এলডিএল কোলেস্টেরলকে দ্রুত কোষের ভেতরে টেনে নিয়ে রক্ত পরিষ্কার করে।'
    ),
  },
}
