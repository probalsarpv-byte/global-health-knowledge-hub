import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const lipoproteinRefs = [
  {
    id: 'lehninger-biochem-8e-ch21',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 21: Lipid Biosynthesis: Lipoprotein Transport and Atherosclerosis',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch25',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 25: Lipid Transport & Storage",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch26',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 26: The Biosynthesis of Membrane Lipids and Steroids: Lipoprotein Particles',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'marks-medbiochem-6e-ch26',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 26: Cholesterol Absorption, Synthesis, Metabolism, and Fate: Lipoprotein Metabolism",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

export const metabolism08LipoproteinsLesson: LessonTopic = {
  id: 'topic.metabolism.lipoproteins-lipid-flux',
  slug: 'lipoproteins-lipid-flux',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('08 · Lipoprotein Transport & Lipid Flux', '০৮ · লাইপোপ্রোটিন পরিবহন ও লিপিড প্রবাহ'),
  summary: l(
    'Plasma lipoprotein architecture, exogenous and endogenous lipid transport cascades, LDL receptor endocytosis and PCSK9 regulation, HDL reverse cholesterol transport, and dyslipidemias.',
    'প্লাজমা লাইপোপ্রোটিনের গঠন, বহির্জাত ও অন্তর্জাত লিপিড পরিবহন গতিপথ, এলডিএল রিসেপ্টর এন্ডোসাইটোসিস ও PCSK9 নিয়ন্ত্রণ, এইচডিএল রিভার্স কোলেস্টেরল পরিবহন এবং ডিসলিপিডেমিয়া।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Contrast the molecular composition, apolipoprotein profiles (ApoB-48, ApoB-100, ApoC-II, ApoE, ApoA-I), and physical density of the five major plasma lipoprotein classes.',
      'পাঁচটি প্রধান প্লাজমা লাইপোপ্রোটিন শ্রেণির আণবিক উপাদান, অ্যাপোলাইপোপ্রোটিন রূপরেখা (ApoB-48, ApoB-100, ApoC-II, ApoE, ApoA-I) এবং ঘনত্বের তুলনামূলক পার্থক্য নির্ণয় করতে পারা।'
    ),
    l(
      'Differentiate the exogenous (chylomicron) and endogenous (VLDL-IDL-LDL) lipid transport cycles, detailing lipoprotein lipase action and remnant clearance.',
      'বহির্জাত (কাইলোমাইক্রন) ও অন্তর্জাত (VLDL-IDL-LDL) লিপিড পরিবহন চক্রের পার্থক্য ব্যাখ্যা করতে পারা এবং লাইপোপ্রোটিন লাইপেজের ভূমিকা ও কণার অবশিষ্টাংশ শোষণ বিশদভাবে বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Detail the mechanism of LDL receptor-mediated endocytosis, intracellular cholesterol feedback regulation, HDL reverse cholesterol transport (LCAT, CETP, ABCA1), and primary dyslipidemias.',
      'এলডিএল রিসেপ্টর-নির্ভর এন্ডোসাইটোসিস, কোষীয় কোলেস্টেরল ফিডব্যাক নিয়ন্ত্রণ, এইচডিএল রিভার্স কোলেস্টেরল পরিবহন (LCAT, CETP, ABCA1) এবং প্রাথমিক ডিসলিপিডেমিয়ার জৈবরাসায়নিক ভিত্তি বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.lipogenesis-triglycerides'],
  relatedTopicIds: ['topic.metabolism.cholesterol-steroids', 'topic.metabolism.fatty-acid-oxidation-ketones'],
  references: lipoproteinRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch21', 'harpers-biochem-32e-ch25'],
    structure: ['harpers-biochem-32e-ch25', 'marks-medbiochem-6e-ch26'],
    mechanism: ['lehninger-biochem-8e-ch21', 'berg-biochem-9e-ch26'],
    integration: ['berg-biochem-9e-ch26', 'marks-medbiochem-6e-ch26'],
    practice: ['lehninger-biochem-8e-ch21', 'harpers-biochem-32e-ch25'],
    takeaways: ['lehninger-biochem-8e-ch21', 'marks-medbiochem-6e-ch26'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Architecture & Apolipoprotein Geography', '১. লাইপোপ্রোটিনের গঠন ও অ্যাপোপ্রোটিন শ্রেণিবিন্যাস'), sectionId: 'introduction' },
      { id: 'sec-cycles', label: l('2. Exogenous & Endogenous Transport Pathways', '২. বহির্জাত ও অন্তর্জাত লিপিড পরিবহন গতিপথ'), sectionId: 'structure' },
      { id: 'sec-ldlr', label: l('3. LDL Receptor Endocytosis & PCSK9 Dynamics', '৩. এলডিএল রিসেপ্টর এন্ডোসাইটোসিস ও PCSK9 গতিবিদ্যা'), sectionId: 'mechanism' },
      { id: 'sec-hdl', label: l('4. HDL & Reverse Cholesterol Transport Flux', '৪. এইচডিএল ও রিভার্স কোলেস্টেরল পরিবহন প্রবাহ'), sectionId: 'integration' },
      { id: 'sec-dyslipid', label: l('5. Dyslipidemias, Xanthomas & Atherosclerosis', '৫. ডিসলিপিডেমিয়া, জ্যান্থোমা ও অ্যাথেরোস্ক্লেরোসিস'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Review & Synthesis Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা ও মূল শিক্ষা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Apolipoprotein B-100 (ApoB-100)', 'অ্যাপোলাইপোপ্রোটিন বি-১০০ (ApoB-100)'),
        definition: l(
          'Full-length 550 kDa protein synthesized exclusively in hepatocytes that serves as the essential structural scaffold of VLDL, IDL, and LDL, and acts as the recognition ligand for the LDL receptor.',
          'যকৃতে সংশ্লেষিত ৫৫০ কিলোডালটনের সম্পূর্ণ প্রোটিন যা VLDL, IDL এবং LDL কণার প্রধান কাঠামোগত ভিত্তি হিসেবে থাকে এবং এলডিএল রিসেপ্টরের প্রধান বন্ধনকারী লিগ্যান্ড হিসেবে কাজ করে।'
        ),
      },
      {
        term: l('Lipoprotein Lipase (LPL)', 'লাইপোপ্রোটিন লাইপেজ (LPL)'),
        definition: l(
          'Capillary endothelial enzyme anchored by GPIHBP1 in adipose and cardiac/skeletal muscle that hydrolyzes core triacylglycerols in chylomicrons and VLDL; activated obligately by ApoC-II.',
          'ক্যাপিলারি এন্ডোথেলিয়ামের গায়ে যুক্ত এনজাইম যা কাইলোমাইক্রন ও VLDL-এর ট্রাইগ্লিসারাইড ভেঙে ফ্যাটি অ্যাসিড নির্গত করে; এটি সক্রিয় হতে ApoC-II প্রোটিনের অপরিহার্য উপস্থিতি প্রয়োজন।'
        ),
      },
      {
        term: l('Lecithin-Cholesterol Acyltransferase (LCAT)', 'লেসিথিন-কোলেস্টেরল অ্যাসাইলট্রান্সফারেজ (LCAT)'),
        definition: l(
          'Plasma enzyme activated by ApoA-I that transfers a fatty acyl group from phosphatidylcholine (lecithin) to free cholesterol on nascent HDL, trapping hydrophobic cholesteryl esters in the core.',
          'রক্তরসের এনজাইম যা ApoA-I দ্বারা উদ্দীপ্ত হয়ে ফসফেটিডিলকোলিন থেকে ফ্যাটি অ্যাসিড নিয়ে মুক্ত কোলেস্টেরলে যুক্ত করে, যা কোলেস্টেরল এস্টার তৈরি করে এইচডিএল কণার ভেতরে আবদ্ধ করে।'
        ),
      },
      {
        term: l('Proprotein Convertase Subtilisin/Kexin Type 9 (PCSK9)', 'প্রোপ্রোটিন কনভার্টেজ সাবটিলিসিন/কেক্সিন টাইপ ৯ (PCSK9)'),
        definition: l(
          'Secreted hepatic serine protease that binds the extracellular domain of the LDL receptor, preventing endosomal conformational release and directing the receptor to lysosomes for destruction.',
          'যকৃৎ থেকে নিঃসৃত প্রোটিন যা এলডিএল রিসেপ্টরের বহিঃকোষীয় অংশে যুক্ত হয়ে এর স্বাভাবিক রিসাইক্লিং বন্ধ করে দেয় এবং রিসেপ্টরটিকে লাইসোজোমে ধ্বংসের দিকে পরিচালিত করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Brown and Goldstein LDL Receptor-Mediated Endocytosis Triad', 'ব্রাউন ও গোল্ডস্টাইন এলডিএল রিসেপ্টর ফিডব্যাক ট্রায়াড'),
        steps: [
          l(
            'Step 1: Circulating LDL particles bind cell-surface LDL receptors via ApoB-100 and cluster into clathrin-coated pits. The pits invaginate and pinch off as clathrin-coated endocytic vesicles.',
            'ধাপ ১: রক্তে সঞ্চালিত এলডিএল কণা তার ApoB-100 প্রোটিনের মাধ্যমে কোষের গায়ের এলডিএল রিসেপ্টরে যুক্ত হয় এবং ক্ল্যাথরিনযুক্ত পিটে জমা হয়, যা পরবর্তীতে কোষে প্রবেশ করে।'
          ),
          l(
            'Step 2: Inside the endosome, proton-pumping ATPases lower the luminal pH to approximately 5.0. This acidic environment alters receptor conformation, causing dissociation of LDL from the receptor. The receptor recycles back to the plasma membrane (cycling up to 150 times), while LDL is delivered to lysosomes where acid lipases hydrolyze cholesteryl esters to free unesterified cholesterol.',
            'ধাপ ২: এন্ডোজোমের অম্লীয় পরিবেশে (pH ৫.০) রিসেপ্টরের গঠন পরিবর্তিত হয় এবং এলডিএল মুক্ত হয়ে যায়। রিসেপ্টরটি পুনরায় কোষপর্দায় ফিরে আসে (যা ১৫০ বার পর্যন্ত চক্রাকারে ঘটে), আর এলডিএল লাইসোজোমে গিয়ে লাইপেজ দ্বারা মুক্ত কোলেস্টেরলে রূপান্তরিত হয়।'
          ),
          l(
            'Step 3: The surge in intracellular free cholesterol coordinates three homeostatic regulatory responses: 1) Suppression of HMG-CoA reductase to shut down de novo synthesis; 2) Suppression of LDL receptor gene transcription via SREBP-2 retention to halt sterol uptake; 3) Activation of ACAT (acyl-CoA:cholesterol acyltransferase) to convert toxic free cholesterol into inert cholesteryl ester lipid droplets.',
            'ধাপ ৩: কোষে মুক্ত কোলেস্টেরল বেড়ে গেলে তিনটি প্রতিরক্ষামূলক ব্যবস্থা শুরু হয়: ১) HMG-CoA রিডাক্টেজ অবদমিত করে নিজস্ব কোলেস্টেরল তৈরি বন্ধ করা; ২) SREBP-2 আটকে রেখে নতুন এলডিএল রিসেপ্টর তৈরি থামানো; ৩) ACAT এনজাইম সক্রিয় করে অতিরিক্ত কোলেস্টেরলকে নিরাপদ লিপিড ড্রপলেটে রূপান্তর করা।'
          ),
        ],
        conclusion: l(
          'Receptor-mediated endocytosis maintains strict intracellular sterol homeostasis by linking extracellular lipoprotein clearance with immediate suppression of endogenous synthetic enzymes.',
          'রিসেপ্টর-নির্ভর এন্ডোসাইটোসিস রক্তের কোলেস্টেরল শোষণের সাথে সাথে নিজস্ব কোলেস্টেরল তৈরির এনজাইমগুলোকে বন্ধ করে কোষের অভ্যন্তরীণ স্টেরল ভারসাম্য রক্ষা করে।'
        ),
      },
      {
        title: l('APOBEC-1 RNA Editing of Apolipoprotein B: Intestine Versus Liver', 'অন্ত্র বনাম যকৃতে APOBEC-1 দ্বারা অ্যাপোলাইপোপ্রোটিন বি এর আরএনএ এডিটিং'),
        steps: [
          l(
            'Step 1: The human APOB gene encodes a single primary pre-mRNA containing a CAA glutamine codon at nucleotide position 6666 (codon 2153).',
            'ধাপ ১: মানবদেহের APOB জিন থেকে তৈরি হওয়া প্রাথমিক প্রি-এমআরএনএ-এর ৬৬৬৬ নম্বর নিউক্লিওটাইডে একটি CAA গ্লুটামিন কোডন (কোডন ২১৫৩) বিদ্যমান থাকে।'
          ),
          l(
            'Step 2: In the liver, the APOB transcript is translated without modification into full-length Apolipoprotein B-100 (4536 amino acids, ~550 kDa), which possesses the carboxyl-terminal domain required for binding the LDL receptor.',
            'ধাপ ২: যকৃতে কোনো পরিবর্তন ছাড়াই সম্পূর্ণ এমআরএনএ অনূদিত হয়ে বিশাল ApoB-100 প্রোটিন (৪৫৩৬ অ্যামিনো অ্যাসিড) তৈরি করে, যার শেষ প্রান্তটি এলডিএল রিসেপ্টরে যুক্ত হতে পারে।'
          ),
          l(
            'Step 3: In the small intestine, the cytidine deaminase enzyme APOBEC-1 binds the transcript with its auxiliary factor and deaminates the specific cytidine at position 6666 to uridine, changing CAA (glutamine) into UAA (stop codon). Translation terminates prematurely, producing Apolipoprotein B-48 (2152 amino acids, exactly 48 percent of full length), which lacks the LDL receptor-binding domain and is dedicated exclusively to chylomicron assembly.',
            'ধাপ ৩: ক্ষুদ্রান্ত্রে APOBEC-1 এনজাইম সাইটিডিনকে ডিঅ্যামিনেশন করে ইউরিডিনে পরিণত করে, ফলে CAA কোডনটি UAA স্টপ কোডনে রূপান্তরিত হয়। ফলে অনুবাদ মাঝপথে থেমে গিয়ে ঠিক ৪৮ শতাংশ দৈর্ঘ্যের ApoB-48 প্রোটিন তৈরি হয়, যা কেবল কাইলোমাইক্রনের জন্যই নির্দিষ্ট।'
          ),
        ],
        conclusion: l(
          'Tissue-specific RNA editing enables a single structural gene to produce two functionally specialized apolipoproteins with entirely divergent receptor affinities and metabolic fates.',
          'কলা-নির্দিষ্ট আরএনএ এডিটিং কৌশল একই জিন থেকে দুটি সম্পূর্ণ ভিন্নধর্মী প্রোটিন তৈরি করে খাদ্যের চর্বি পরিবহন এবং রক্তের কোলেস্টেরল শোষণের মধ্যে স্পষ্ট পার্থক্য রচনা করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why do patients with homozygous Familial Hypercholesterolemia (FH) develop massive plasma elevations of LDL and severe premature myocardial infarction in childhood?',
          'হোমোজাইগাস ফ্যামিলিয়াল হাইপারকোলেস্টেরলেমিয়ায় (এফএইচ) আক্রান্ত শিশুদের রক্তে কেন প্রচুর এলডিএল জমে শৈশবেই মারাত্মক হার্ট অ্যাটাকের ঝুঁকি তৈরি হয়?'
        ),
        answer: l(
          'Patients inherit two non-functional LDLR alleles (or defective ApoB-100), eliminating LDL receptor-mediated endocytosis. Because the liver cannot clear LDL particles, plasma LDL-cholesterol rises to 600-1000 mg/dL, and uninhibited HMG-CoA reductase continues producing sterols, causing widespread subendothelial LDL infiltration, foam cell formation, and accelerated atherosclerotic coronary plaque rupture.',
          'রোগীরা দুটি নিষ্ক্রিয় LDLR অ্যালিল উত্তরাধিকার সূত্রে পায়, যার ফলে যকৃৎ রক্ত থেকে এলডিএল অপসারণ করতে পারে না। রক্তে এলডিএল ৬০০-১০০০ মিলিগ্রাম/ডেসিলিটারে পৌঁছায় এবং নিজস্ব কোলেস্টেরল তৈরিও বন্ধ হয় না, যার ফলে রক্তনালীতে চর্বি জমে দ্রুত ব্লক তৈরি হয়।'
        ),
      },
      {
        question: l(
          'How does the cholesteryl ester transfer protein (CETP) link HDL reverse cholesterol transport with pro-atherogenic LDL particles?',
          'কোলেস্টেরিল এস্টার ট্রান্সফার প্রোটিন (CETP) কীভাবে উপকারী এইচডিএল কণার কোলেস্টেরলকে ক্ষতিকর এলডিএল কণার সাথে বিনিময় করে?'
        ),
        answer: l(
          'CETP transfers hydrophobic cholesteryl esters from cardioprotective HDL particles to pro-atherogenic ApoB-containing lipoproteins (VLDL, IDL, and LDL) in exchange for triacylglycerols, redirecting sterols from biliary excretion back into the atherogenic pathway.',
          'CETP এনজাইম উপকারী এইচডিএল থেকে কোলেস্টেরল এস্টার নিয়ে ক্ষতিকর VLDL ও LDL কণায় স্থানান্তর করে এবং তাদের থেকে ট্রাইগ্লিসারাইড গ্রহণ করে, যার ফলে কোলেস্টেরল পিত্ত দিয়ে বের না হয়ে পুনরায় রক্তনালীতে ব্লকেজ তৈরির ঝুঁকিতে চলে যায়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'lipoprotein-traffic-simulator',
    title: l('Interactive Plasma Lipoprotein Flux & Receptor Simulator', 'ইন্টারেক্টিভ প্লাজমা লাইপোপ্রোটিন প্রবাহ ও রিসেপ্টর সিমুলেটর'),
    description: l(
      'Track the lifecycle of dietary chylomicrons, hepatic VLDL remodeling into LDL, receptor-mediated clearance, PCSK9 regulation, and HDL reverse transport.',
      'খাদ্যের কাইলোমাইক্রনের রূপান্তর, যকৃতের VLDL থেকে ক্ষতিকর LDL গঠন, রিসেপ্টর দ্বারা শোষণ, PCSK9 নিয়ন্ত্রণ এবং উপকারী এইচডিএল প্রবাহ প্রত্যক্ষ করুন।'
    ),
    disclaimer: l(
      'Lipoprotein fractions, apolipoprotein ligands, and dyslipidemia classifications verified against Lehninger Principles of Biochemistry (8th ed) and Harper Illustrated Biochemistry (32nd ed).',
      'লাইপোপ্রোটিন অংশসমূহ, অ্যাপোপ্রোটিন লিগ্যান্ড এবং ডিসলিপিডেমিয়ার শ্রেণিবিভাগ লেহনিঞ্জার এবং হার্পারস বায়োকেমিস্ট্রি দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'chylomicron-node',
        label: l('1. Chylomicrons & ApoB-48 [Exogenous Dietary Lipids]', '১. কাইলোমাইক্রন ও ApoB-48 [বহির্জাত খাদ্যের লিপিড]'),
        description: l(
          'Assembled in enterocytes around ApoB-48 using MTP. Enters lacteals and systemic blood, acquiring ApoC-II and ApoE from circulating HDL particles.',
          'অন্ত্রের কোষে ApoB-48 দিয়ে তৈরি হয়ে লসিকানালী ও রক্তে প্রবেশ করে এবং এইচডিএল থেকে ApoC-II ও ApoE প্রোটিন গ্রহণ করে পরিপক্ক হয়।'
        ),
        details: l(
          'Largest, least dense lipoprotein (>95% triacylglycerol). Cleared by hepatic ApoE/LRP-1 receptors as chylomicron remnants after LPL delipidation.',
          'সবচেয়ে বড় ও কম ঘনত্বের কণা (>৯৫% ট্রাইগ্লিসারাইড)। LPL দ্বারা চর্বি মুক্ত হওয়ার পর এর অবশিষ্টাংশ যকৃতের ApoE রিসেপ্টরে শোষিত হয়।'
        ),
        sectionId: 'introduction',
      },
      {
        id: 'vldl-secretion-node',
        label: l('2. Hepatic VLDL Secretion & Remodeling [Endogenous Flux]', '২. যকৃতের VLDL নিঃসরণ ও রূপান্তর [অন্তর্জাত লিপিড প্রবাহ]'),
        description: l(
          'Synthesized by hepatocytes containing full-length ApoB-100 to package endogenous triglycerides. Delivered to systemic blood and remodeled by LPL into IDL.',
          'যকৃতে পূর্ণদৈর্ঘ্যের ApoB-100 দিয়ে তৈরি হয়ে রক্তে প্রবেশ করে। লাইপোপ্রোটিন লাইপেজ দ্বারা চর্বি মুক্ত হয়ে এটি মধ্যবর্তী IDL কণায় পরিণত হয়।'
        ),
        details: l(
          'Overproduction of VLDL occurs in metabolic syndrome, type 2 diabetes, and high-carbohydrate diets, producing elevated plasma triglycerides.',
          'মেটাবলিক সিন্ড্রোম ও ডায়াবেটিসে অতিরিক্ত VLDL তৈরি হয়ে রক্তে মারাত্মক ট্রাইগ্লিসারাইড বৃদ্ধি ঘটায়।'
        ),
        sectionId: 'structure',
      },
      {
        id: 'lpl-hydrolysis-node',
        label: l('3. Lipoprotein Lipase (LPL) [Capillary Delipidation Valve]', '৩. লাইপোপ্রোটিন লাইপেজ (LPL) [ক্যাপিলারি চর্বি বিদারণ ভালভ]'),
        description: l(
          'Attached to luminal capillary endothelium by GPIHBP1 in heart, skeletal muscle, and adipose tissue. Hydrolyzes core triglycerides into free fatty acids.',
          'হৃদপিণ্ড ও পেশির রক্তজালকে অবস্থান করে। কাইলোমাইক্রন ও VLDL-এর ট্রাইগ্লিসারাইড ভেঙে কোষে শক্তির জন্য ফ্যাটি অ্যাসিড মুক্ত করে।'
        ),
        details: l(
          'Obligately requires ApoC-II as an allosteric cofactor. Type I dyslipidemia results from inherited deficiency of either LPL or ApoC-II.',
          'সক্রিয় হওয়ার জন্য ApoC-II প্রোটিনের উপস্থিতি অপরিহার্য। এর জন্মগত ঘাটতিতে রক্তে মারাত্মক চর্বি জমে একিউট প্যানক্রিয়াটাইটিস হয়।'
        ),
        sectionId: 'structure',
      },
      {
        id: 'ldlr-endocytosis-node',
        label: l('4. LDL Receptor-Mediated Endocytosis [ApoB-100 Ligand]', '৪. এলডিএল রিসেপ্টর এন্ডোসাইটোসিস [ApoB-100 লিগ্যান্ড]'),
        description: l(
          'LDL particles retaining exclusively ApoB-100 bind hepatic LDL receptors in clathrin-coated pits, internalizing via endosomes to lysosomal degradation.',
          'কেবল ApoB-100 বিশিষ্ট এলডিএল কণা যকৃতের এলডিএল রিসেপ্টরে আবদ্ধ হয়ে এন্ডোজোমের মাধ্যমে লাইসোজোমে প্রবেশ করে বিনষ্ট হয়।'
        ),
        details: l(
          'Receptors recycle back to cell surface. Discovered by Brown & Goldstein; mutations cause Familial Hypercholesterolemia (FH).',
          'রিসেপ্টরগুলো পুনরায় কোষপর্দায় ফিরে আসে। ব্রাউন ও গোল্ডস্টাইন কর্তৃক আবিষ্কৃত; এর ত্রুটিতে বংশগত হাইপারকোলেস্টেরলেমিয়া ঘটে।'
        ),
        sectionId: 'mechanism',
      },
      {
        id: 'pcsk9-switch-node',
        label: l('5. PCSK9 Receptor Degradation Switch [Pharmacological Target]', '৫. PCSK9 রিসেপ্টর ধ্বংসের সুইচ [আধুনিক ওষুধের লক্ষ্যবস্তু]'),
        description: l(
          'Secreted liver protease that binds the EGF-A domain of the LDL receptor, preventing acid dissociation in endosomes and routing the receptor to lysosomal destruction.',
          'যকৃত থেকে নিঃসৃত প্রোটিন যা এলডিএল রিসেপ্টরে আবদ্ধ হয়ে এর স্বাভাবিক রিসাইক্লিং বন্ধ করে সরাসরি লাইসোজোমে ধ্বংস করে দেয়।'
        ),
        details: l(
          'PCSK9 monoclonal antibodies (evolocumab) and siRNA (inclisiran) preserve receptors, driving dramatic 50-60% reductions in circulating LDL-C.',
          'আধুনিক PCSK9 প্রতিরোধক ওষুধ রিসেপ্টর রক্ষা করে রক্তের ক্ষতিকর কোলেস্টেরল ৫০-৬০ শতাংশ পর্যন্ত কমিয়ে ফেলে।'
        ),
        sectionId: 'mechanism',
      },
      {
        id: 'hdl-reverse-node',
        label: l('6. HDL & Reverse Cholesterol Transport [ApoA-I, LCAT, ABCA1]', '৬. এইচডিএল ও রিভার্স কোলেস্টেরল পরিবহন [ApoA-I, LCAT, ABCA1]'),
        description: l(
          'Nascent ApoA-I disks efflux cellular cholesterol from peripheral tissues via ABCA1. LCAT esterifies cholesterol into the hydrophobic core of spherical HDL.',
          'ApoA-I বিশিষ্ট ডিস্ক আকৃতির এইচডিএল টিস্যু থেকে কোলেস্টেরল গ্রহণ করে এবং LCAT এনজাইম এটিকে এস্টারে পরিণত করে ভেতরে আবদ্ধ করে।'
        ),
        details: l(
          'Cholesteryl esters are returned directly to the liver via scavenger receptor BI (SR-BI) or transferred to ApoB lipoproteins via CETP.',
          'এই কোলেস্টেরল সরাসরি যকৃতের SR-BI রিসেপ্টরে জমা হয় পিত্ত হিসেবে নির্গমনের জন্য, অথবা CETP দিয়ে অন্যান্য কণায় স্থানান্তরিত হয়।'
        ),
        sectionId: 'integration',
      },
      {
        id: 'foam-cell-node',
        label: l('7. Oxidized LDL & Macrophage Foam Cells [Atherogenesis Cascade]', '৭. জারিত এলডিএল ও ম্যাক্রোফেজ ফোম সেল [অ্যাথেরোস্ক্লেরোসিস ক্যাসকেড]'),
        description: l(
          'Excess LDL trapped in the subendothelial intima undergoes oxidation. Scavenger receptors (SR-A, CD36) ingest oxLDL unchecked, forming foam cells.',
          'রক্তনালীর প্রাচীরে আটকে থাকা অতিরিক্ত এলডিএল জারিত হয়। ম্যাক্রোফেজ এই জারিত এলডিএল গিলে ফেলে ফোম সেলে পরিণত হয়।'
        ),
        details: l(
          'Foam cell apoptosis forms necrotic lipid cores that weaken fibrous caps, leading to acute plaque rupture and occlusive myocardial infarction.',
          'ফোম সেল ধ্বংস হয়ে রক্তনালীতে চর্বির প্লাক তৈরি করে, যা ফেটে গিয়ে রক্ত জমাট বেঁধে হার্ট অ্যাটাক ও স্ট্রোক ঘটায়।'
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
          heading: l('Introduction: Why Insoluble Lipids Require Lipoprotein Shuttles', 'ভূমিকা: অদ্রবণীয় লিপিড পরিবহনে লাইপোপ্রোটিন শাটলের প্রয়োজনীয়তা'),
          paragraphs: [
            l(
              'Because fats such as triacylglycerols and cholesteryl esters are nonpolar and completely insoluble in water, they cannot float freely in the watery medium of human blood plasma. If released directly, hydrophobic lipid droplets would rapidly coalesce and form dangerous fat emboli that would obstruct capillaries and halt circulation. To solve this physical challenge, the body packages hydrophobic lipids into spherical, macromolecular transport vehicles called lipoproteins.',
              'যেহেতু ট্রাইগ্লিসারাইড এবং কোলেস্টেরল এস্টারের মতো চর্বিগুলো সম্পূর্ণ অ-পোলার এবং পানিতে অদ্রবণীয়, তাই তারা জলীয় রক্তরসে স্বাধীনভাবে চলাচল করতে পারে না। সরাসরি নির্গত হলে এই চর্বির কণাগুলো একত্রিত হয়ে রক্তনালী বন্ধ করে প্রাণঘাতী বিপদ ডেকে আনত। এই ভৌত সংকট সমাধানের জন্য মানবদেহ হাইড্রোফোবিক লিপিডগুলোকে লাইপোপ্রোটিন নামক বিশেষ গোলাকার আণবিক যানে আবদ্ধ করে সারা শরীরে পরিবহন করে।'
            ),
            l(
              'Every lipoprotein particle features a core filled with water-insoluble neutral fats (triacylglycerols and cholesteryl esters) shielded by an outer amphipathic shell composed of phospholipids, free cholesterol, and specialized surface proteins known as apolipoproteins. These water-friendly outer coats allow the particles to remain smoothly suspended in blood while transporting their oily cargo to vital tissues.',
              'প্রতিটি লাইপোপ্রোটিন কণার কেন্দ্রে থাকে পানিতে অদ্রবণীয় নিরপেক্ষ চর্বি (ট্রাইগ্লিসারাইড ও কোলেস্টেরল এস্টার), যা চারপাশ থেকে ফসফোলিপিড, মুক্ত কোলেস্টেরল এবং অ্যাপোলাইপোপ্রোটিন নামক পৃষ্ঠীয় প্রোটিন দ্বারা আবৃত থাকে। এই জলবান্ধব বহিরাবরণ তেলজাতীয় চর্বিকে জলীয় রক্তে জমাট বাঁধতে না দিয়ে সুন্দরভাবে ভাসমান রেখে প্রয়োজনীয় অঙ্গগুলোতে পৌঁছে দেয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Five Lipoprotein Classes & Their Apolipoprotein Identity Tags', 'পাঁচটি লাইপোপ্রোটিন শ্রেণি ও তাদের অ্যাপোপ্রোটিন পরিচয়চিহ্ন'),
          paragraphs: [
            l(
              'Plasma lipoproteins are categorized into five major classes according to their size, lipid content, and physical density. Chylomicrons are the largest, lowest-density particles assembled in the intestinal wall to deliver dietary fats. Very-Low-Density Lipoproteins (VLDL) are assembled in the liver to distribute endogenous fat. Intermediate-Density Lipoproteins (IDL) are transient remnants, Low-Density Lipoproteins (LDL) deliver cholesterol to body tissues, and High-Density Lipoproteins (HDL) retrieve excess cholesterol from tissues.',
              'আকার, চর্বির পরিমাণ এবং ঘনত্বের ওপর ভিত্তি করে প্লাজমা লাইপোপ্রোটিনগুলোকে পাঁচটি প্রধান শ্রেণিতে ভাগ করা হয়। কাইলোমাইক্রন হলো অন্ত্রে তৈরি হওয়া সবচেয়ে বড় কণা যা খাদ্যের চর্বি পরিবহন করে। VLDL যকৃতে তৈরি হয়ে অন্তর্জাত চর্বি সরবরাহ করে। IDL হলো ক্ষণস্থায়ী অবশিষ্টাংশ কণা, LDL সারা শরীরে কোলেস্টেরল পৌঁছে দেয় এবং HDL অতিরিক্ত ক্ষতিকর কোলেস্টেরল টিস্যু থেকে তুলে নিয়ে যকৃতে ফেরত পাঠায়।'
            ),
            l(
              'Apolipoproteins embedded on the particle surface function as essential molecular address labels and enzymatic switches. Apolipoprotein B provides structural scaffolding (ApoB-48 in gut chylomicrons, ApoB-100 in hepatic VLDL and LDL). Apolipoprotein C-II serves as the vital on-switch for capillary fat-clearing enzymes, while Apolipoprotein E acts as the docking key that directs circulating remnants back into hepatocytes for clearance.',
              'কণার উপরিভাগে থাকা অ্যাপোলাইপোপ্রোটিনগুলো আণবিক ঠিকানা ও এনজাইম নিয়ন্ত্রক সুইচ হিসেবে কাজ করে। ApoB কণার কাঠামো ধরে রাখে (অন্ত্রের কাইলোমাইক্রনে ApoB-48 এবং যকৃতের VLDL ও LDL-এ ApoB-100 থাকে)। ApoC-II রক্তজালকের চর্বি হজমকারী এনজাইম সক্রিয় করার চাবিকাঠি হিসেবে কাজ করে, আর ApoE অবশিষ্টাংশ কণাগুলোকে যকৃতে শোষিত হওয়ার সংকেত দেয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Tissue Fuel Delivery: Capillary Cleavage by Lipoprotein Lipase', 'কলাসমূহে জ্বালানি সরবরাহ: লাইপোপ্রোটিন লাইপেজের কার্যপ্রণালী'),
          paragraphs: [
            l(
              'As newly formed chylomicrons and VLDL circulate through the capillary beds of adipose tissue, skeletal muscle, and the heart, they encounter Lipoprotein Lipase (LPL), an enzyme tethered to the inner endothelial wall. Activated by surface ApoC-II, LPL rapidly hydrolyzes core triglycerides into free fatty acids and glycerol, allowing muscle cells to burn fatty acids for aerobic ATP and fat cells to store them for future needs.',
              'নতুন তৈরি হওয়া কাইলোমাইক্রন ও VLDL যখন চর্বি কোষ, হৃদপেশি ও কঙ্কালপেশির রক্তজালক দিয়ে প্রবাহিত হয়, তখন তারা রক্তনালীর প্রাচীরে আটকে থাকা লাইপোপ্রোটিন লাইপেজ (LPL) এনজাইমের সংস্পর্শে আসে। ApoC-II দ্বারা সক্রিয় হয়ে LPL ট্রাইগ্লিসারাইড ভেঙে ফ্যাটি অ্যাসিড মুক্ত করে, যা পেশিকলা শক্তিতে রূপান্তর করে এবং চর্বি কোষ ভবিষ্যতে ব্যবহারের জন্য জমা রাখে।'
            ),
            l(
              'As LPL extracts triacylglycerols, the particles shrink dramatically in volume. Chylomicrons transform into cholesterol-rich remnants that are rapidly cleared by the liver via ApoE receptors. VLDL progressively delipidates through IDL into Low-Density Lipoprotein (LDL). Because LDL has lost its triglycerides and surface apoproteins except ApoB-100, it becomes a dense, long-circulating particle specialized in delivering cholesterol to peripheral cells.',
              'LPL চর্বি শুষে নেওয়ার সাথে সাথে কণাগুলো আকারে ছোট হয়ে যায়। কাইলোমাইক্রন পরিণত হয় কাইলোমাইক্রন রেমন্যান্টে, যা ApoE রিসেপ্টর দিয়ে দ্রুত যকৃতে শোষিত হয়। VLDL ক্রমান্বয়ে IDL হয়ে অবশেষে LDL কণায় রূপান্তরিত হয়। ট্রাইগ্লিসারাইড হারিয়ে এবং ApoB-100 ছাড়া অন্যান্য প্রোটিন খসে পড়ে এটি দীর্ঘ সময় রক্তে ভেসে থাকা কোলেস্টেরলসমৃদ্ধ কণায় পরিণত হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The LDL Receptor Cycle & Reverse Cholesterol Transport by HDL', 'এলডিএল রিসেপ্টর চক্র ও এইচডিএল-এর মাধ্যমে রিভার্স কোলেস্টেরল পরিবহন'),
          paragraphs: [
            l(
              'Peripheral tissues and the liver absorb LDL particles through cell-surface LDL receptors that recognize ApoB-100, internalizing them via clathrin-coated endocytosis. Once inside, acidic endosomes release the LDL particle to lysosomes for degradation into free cholesterol, while the receptor recycles back to the plasma membrane up to 150 times. When circulating LDL exceeds clearance capacity, particles penetrate arterial walls, oxidize, and trigger atherosclerosis.',
              'টিস্যু এবং যকৃৎ তাদের কোষপর্দার এলডিএল রিসেপ্টর দিয়ে ApoB-100 প্রোটিনকে চিনে নিয়ে এন্ডোসাইটোসিসের মাধ্যমে এলডিএল কণা গিলে ফেলে। কোষের ভেতরে লাইসোজোমে কণাটি ভেঙে মুক্ত কোলেস্টেরল নির্গত হয় এবং রিসেপ্টরটি প্রায় ১৫০ বার পুনর্ব্যবহৃত হতে পারে। রক্তে এলডিএল অতিরিক্ত বেড়ে গেলে এরা রক্তনালীর প্রাচীরে ঢুকে জারিত হয় এবং অ্যাথেরোস্ক্লেরোসিস বা রক্তনালীর ব্লক সৃষ্টি করে।'
            ),
            l(
              'In defense against this danger, High-Density Lipoproteins (HDL) carry out reverse cholesterol transport. Synthesized as empty discoidal protein shells by the liver and intestine, nascent HDL uses ABCA1 transporters to suck excess cholesterol out of arterial macrophage foam cells. The enzyme LCAT traps this cholesterol inside the HDL core, enabling mature HDL to return surplus cholesterol to the liver for safe excretion into bile.',
              'এই বিপদের বিরুদ্ধে রক্ষাকবচ হিসেবে কাজ করে হাই-ডেনসিটি লাইপোপ্রোটিন (HDL), যা রিভার্স কোলেস্টেরল পরিবহন সম্পন্ন করে। যকৃৎ ও অন্ত্র থেকে নিঃসৃত খালি ডিস্ক আকৃতির এইচডিএল ABCA1 ট্রান্সপোর্টার ব্যবহার করে রক্তনালীর ক্ষতিকর ফোম সেল থেকে অতিরিক্ত কোলেস্টেরল তুলে নেয়। LCAT এনজাইম এই কোলেস্টেরলকে এইচডিএল-এর ভেতরে আটকে ফেলে এবং পরিণত এইচডিএল তা যকৃতে ফেরত পাঠিয়ে পিত্তের মাধ্যমে শরীর থেকে বের করে দেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Reasoning: Interpreting Routine Fasting Lipid Panels', 'মৌলিক যুক্তি: রক্তের সাধারণ ফাস্টিং লিপিড প্রোফাইল মূল্যায়ন'),
          paragraphs: [
            l(
              'In clinical medicine, fasting lipid panels measure total cholesterol, triglycerides, and HDL-cholesterol directly, while calculating LDL-cholesterol using the Friedewald equation (Total Cholesterol minus HDL minus Triglycerides divided by 5). Elevated LDL-cholesterol directly correlates with atherosclerotic plaque formation, whereas elevated HDL-cholesterol reflects active reverse transport and cardiovascular protection.',
              'চিকিৎসাবিজ্ঞানে ফাস্টিং লিপিড প্রোফাইল পরীক্ষায় মোট কোলেস্টেরল, ট্রাইগ্লিসারাইড এবং এইচডিএল সরাসরি মাপা হয় এবং ফ্রিডওয়াল্ড সমীকরণ দিয়ে এলডিএল হিসাব করা হয়। রক্তে এলডিএল বেশি থাকা সরাসরি রক্তনালীতে চর্বি জমার সাথে সম্পর্কিত, আর উচ্চ মাত্রার এইচডিএল নির্দেশ করে যে রক্তনালী থেকে ক্ষতিকর কোলেস্টেরল সফলভাবে পরিষ্কার হচ্ছে এবং হৃদযন্ত্র সুরক্ষিত রয়েছে।'
            ),
          ],
          bullets: [
            l('LDL is the primary atherogenic vehicle delivering cholesterol to arterial walls.', 'এলডিএল হলো প্রধান ক্ষতিকর কণা যা রক্তনালীর প্রাচীরে চর্বি জমিয়ে ব্লক তৈরি করে।'),
            l('HDL retrieves excess cholesterol from arterial foam cells and returns it to the liver for bile excretion.', 'এইচডিএল রক্তনালী থেকে অতিরিক্ত কোলেস্টেরল সংগ্রহ করে যকৃতে ফেরত পাঠিয়ে শরীরকে রক্ষা করে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Foundational Takeaways & Lipoprotein Summary', 'মূল শিক্ষণীয় বিষয় ও লাইপোপ্রোটিন সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Lipoproteins solve the physical challenge of transporting water-insoluble fats through the aqueous bloodstream. Chylomicrons transport dietary lipids, hepatic VLDL distributes endogenous triglycerides, and LDL delivers cholesterol via receptor-mediated endocytosis. High-density lipoprotein mediates cardioprotective reverse cholesterol transport, balancing systemic lipid flux and preventing arterial cholesterol accumulation.',
              'লাইপোপ্রোটিন জলীয় রক্তপ্রবাহের মধ্য দিয়ে অদ্রবণীয় চর্বি পরিবহনের ভৌত সমস্যা সমাধান করে। কাইলোমাইক্রন খাদ্যের চর্বি পরিবহন করে, যকৃতের VLDL অন্তর্জাত চর্বি সরবরাহ করে এবং LDL রিসেপ্টরের মাধ্যমে কোলেস্টেরল পৌঁছে দেয়। উচ্চ-ঘনত্বের এইচডিএল রিভার্স কোলেস্টেরল পরিবহনের মাধ্যমে হৃদযন্ত্রকে রক্ষা করে এবং দেহের সামগ্রিক লিপিড প্রবাহের ভারসাম্য বজায় রাখে।'
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
          heading: l('1. Architecture & Apolipoprotein Geography of Plasma Lipoproteins', '১. প্লাজমা লাইপোপ্রোটিনের গঠন ও অ্যাপোপ্রোটিন বিন্যাস'),
          paragraphs: [
            l(
              'Because triacylglycerols and cholesteryl esters are completely insoluble in aqueous blood plasma, the human body packages these hydrophobic lipids into macromolecular spherical transport vehicles termed lipoproteins. Each lipoprotein particle features an oil-like core of neutral nonpolar lipids (triacylglycerols and cholesteryl esters) surrounded by an amphipathic monolayer of phospholipids, free unesterified cholesterol, and specialized surface proteins designated apolipoproteins (or apoproteins). This structural design presents a hydrophilic exterior to aqueous plasma while solubilizing hydrophobic cargo within.',
              'যেহেতু ট্রাইগ্লিসারাইড এবং কোলেস্টেরল এস্টার রক্তরসে সম্পূর্ণ অদ্রবণীয়, তাই মানবদেহ এই হাইড্রোফোবিক লিপিডগুলোকে লাইপোপ্রোটিন নামক গোলাকার কণার ভেতর আবদ্ধ করে পরিবহন করে। প্রতিটি লাইপোপ্রোটিন কণার কেন্দ্রে থাকে তেলজাতীয় অ-পোলার ট্রাইগ্লিসারাইড ও কোলেস্টেরল এস্টার, যা চারপাশ থেকে ফসফোলিপিড, মুক্ত কোলেস্টেরল এবং অ্যাপোলাইপোপ্রোটিনের একটি জলগ্রাহী স্তর দ্বারা বেষ্টিত থাকে। এই অনন্য স্থাপত্যের কারণে জলীয় রক্তে চর্বির কণাগুলো সুন্দরভাবে দ্রবীভূত অবস্থায় ভেসে বেড়াতে পারে।'
            ),
            l(
              'Plasma lipoproteins are classified into five major operational classes on the basis of physical density, electrophoretic mobility, and lipid-to-protein ratio. In order of ascending density and decreasing diameter, they are: Chylomicrons (density < 0.95 g/mL, >90% triacylglycerol, synthesized in intestine), Very-Low-Density Lipoproteins (VLDL, density 0.95-1.006 g/mL, ~60% triacylglycerol, synthesized in liver), Intermediate-Density Lipoproteins (IDL, density 1.006-1.019 g/mL, transient metabolic remnants), Low-Density Lipoproteins (LDL, density 1.019-1.063 g/mL, ~50% cholesterol, primary atherogenic carrier), and High-Density Lipoproteins (HDL, density 1.063-1.210 g/mL, ~50% protein, cardioprotective reverse cholesterol carrier).',
              'ঘনত্ব, আকৃতি এবং প্রোটিন-চর্বির অনুপাতের ওপর ভিত্তি করে প্লাজমা লাইপোপ্রোটিনগুলোকে পাঁচটি প্রধান শ্রেণিতে ভাগ করা হয়। ক্রমবর্ধমান ঘনত্ব অনুসারে এগুলো হলো: কাইলোমাইক্রন (সবচেয়ে বড় ও কম ঘনত্ব, অন্ত্রে তৈরি খাদ্যের চর্বি বাহক), ভেরি-লো-ডেনসিটি লাইপোপ্রোটিন বা VLDL (যকৃতে তৈরি অন্তর্জাত চর্বি বাহক), ইন্টারমিডিয়েট-ডেনসিটি লাইপোপ্রোটিন বা IDL (মধ্যবর্তী অবশিষ্টাংশ কণা), লো-ডেনসিটি লাইপোপ্রোটিন বা LDL (রক্তে কোলেস্টেরল বহনকারী প্রধান ক্ষতিকর কণা), এবং হাই-ডেনসিটি লাইপোপ্রোটিন বা HDL (সবচেয়ে ঘন, প্রোটিনসমৃদ্ধ উপকারী কণা যা রক্তনালী থেকে কোলেস্টেরল ফিরিয়ে আনে)।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Exogenous (Dietary) & Endogenous (Hepatic) Transport Cascades', '২. বহির্জাত (খাদ্য) ও অন্তর্জাত (যকৃৎ) লিপিড পরিবহন গতিপথ'),
          paragraphs: [
            l(
              'The exogenous lipid transport pathway orchestrates the delivery of dietary fats from the gastrointestinal tract to peripheral tissues. Enterocytes re-esterify digested fatty acids and monoacylglycerols into triacylglycerols, which the microsomal triglyceride transfer protein (MTP) packages with Apolipoprotein B-48 into nascent chylomicrons. Nascent chylomicrons enter intestinal lacteals, travel through the thoracic duct, and empty into the left subclavian vein. In the systemic circulation, chylomicrons collide with circulating HDL particles, from which they acquire Apolipoprotein C-II and Apolipoprotein E.',
              'বহির্জাত পরিবহন গতিপথ অন্ত্র থেকে খাদ্যের চর্বি দেহের বিভিন্ন অঙ্গে পৌঁছে দেয়। অন্ত্রের কোষে MTP প্রোটিন খাদ্যের চর্বিকে ApoB-48 এর সাথে আবদ্ধ করে প্রাথমিক কাইলোমাইক্রন তৈরি করে। এই কণাগুলো লসিকানালীর মধ্য দিয়ে থোরাসিক ডাক্ট হয়ে সরাসরি সাবক্লেভিয়ান শিরায় রক্তপ্রবাহে প্রবেশ করে। রক্তে সঞ্চালনের সময় এরা উপকারী এইচডিএল কণার সাথে সংঘর্ষে লিপ্ত হয়ে তাদের কাছ থেকে অপরিহার্য ApoC-II এবং ApoE প্রোটিন গ্রহণ করে পরিপক্কতা লাভ করে।'
            ),
            l(
              'On the luminal capillary endothelial surface of adipose tissue, skeletal muscle, and myocardium, anchored Lipoprotein Lipase (LPL) is allosterically activated by ApoC-II. LPL progressively hydrolyzes core triacylglycerols into free fatty acids, which diffuse into tissues for beta-oxidation or triglyceride re-esterification. As the core shrinks, excess surface phospholipids and ApoC-II transfer back to HDL, leaving a chylomicron remnant enriched in cholesteryl esters and ApoE. Hepatocytes rapidly clear these remnants via ApoE recognition by the LDL receptor-related protein-1 (LRP-1) and LDL receptors.',
              'চর্বি কোষ ও পেশির রক্তজালকের গায়ে আটকে থাকা লাইপোপ্রোটিন লাইপেজ (LPL) এনজাইম ApoC-II দ্বারা উদ্দীপ্ত হয়ে কাইলোমাইক্রনের ট্রাইগ্লিসারাইড ভেঙে ফ্যাটি অ্যাসিড মুক্ত করে, যা কোষে শক্তি বা চর্বি হিসেবে জমা হয়। চর্বি ক্ষয় হতে হতে কণাটি ছোট হয়ে কাইলোমাইক্রন রেমন্যান্টে পরিণত হয়, যার গায়ে প্রচুর ApoE প্রোটিন থাকে। যকৃতের LRP-1 ও এলডিএল রিসেপ্টর এই ApoE কে চিনে ফেলে এবং অবশিষ্টাংশ কণাটিকে রক্ত থেকে সম্পূর্ণ শুষে নিয়ে রক্ত পরিষ্কার করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Endogenous VLDL-LDL Axis & The Cellular LDL Receptor Cycle', '৩. অন্তর্জাত VLDL-LDL অক্ষ ও কোষীয় এলডিএল রিসেপ্টর চক্র'),
          paragraphs: [
            l(
              'In the endogenous pathway, hepatocytes package surplus carbohydrates and fatty acids into VLDL particles containing full-length Apolipoprotein B-100. Secreted into the bloodstream, VLDL acquires ApoC-II and ApoE from HDL and undergoes LPL-mediated triglyceride extraction across peripheral capillaries, progressively shrinking through intermediate-density lipoprotein (IDL). While approximately half of IDL is directly cleared by the liver via ApoE, the remainder is acted upon by Hepatic Lipase (HL) in the space of Disse, removing residual triglycerides and shedding ApoE to yield Low-Density Lipoprotein (LDL), which retains exclusively ApoB-100.',
              'অন্তর্জাত গতিপথে যকৃৎ অতিরিক্ত চর্বিকে পূর্ণদৈর্ঘ্যের ApoB-100 প্রোটিন সহযোগে VLDL কণায় সাজিয়ে রক্তে ছাড়ে। রক্তে LPL দ্বারা ট্রাইগ্লিসারাইড অপসারিত হয়ে এটি প্রথমে IDL এবং পরবর্তীতে হেপাটিক লাইপেজের ক্রিয়ায় ক্ষতিকর LDL কণায় রূপান্তরিত হয়। এই প্রক্রিয়ায় কণাটির অন্যান্য প্রোটিন খসে পড়ে কেবল একটিমাত্র ApoB-100 প্রোটিন অবশিষ্ট থাকে এবং কণাটি প্রধানত কোলেস্টেরল এস্টারে সমৃদ্ধ হয়ে ওঠে।'
            ),
            l(
              'LDL delivers cholesterol to peripheral cells and hepatocytes through LDL receptor-mediated endocytosis, discovered by Michael Brown and Joseph Goldstein. Circulating LDL binds the cell-surface LDL receptor via ApoB-100, localizing to clathrin-coated pits that invaginate to form endosomes. As the endosomal proton pump acidifies the lumen to pH 5.0, a conformational shift in the beta-propeller domain of the receptor causes it to release LDL. The receptor recycles back to the plasma membrane (reusable up to 150 times), while LDL fuses with lysosomes where acid cholesteryl ester hydrolase releases free cholesterol, shutting down HMG-CoA reductase and activating ACAT storage.',
              'এলডিএল কণা তার ApoB-100 লিগ্যান্ডের মাধ্যমে কোষপর্দার এলডিএল রিসেপ্টরে আবদ্ধ হয় এবং এন্ডোসাইটোসিসের মাধ্যমে কোষে ঢোকে, যা ব্রাউন ও গোল্ডস্টাইন আবিষ্কার করেছিলেন। এন্ডোজোমের অম্লীয় পরিবেশে রিসেপ্টরটি এলডিএলকে মুক্ত করে দেয় এবং নিজে পুনরায় কোষপর্দায় ফিরে আসে (যা প্রায় ১৫০ বার পুনর্ব্যবহৃত হতে পারে)। মুক্ত হওয়া এলডিএল লাইসোজোমে গিয়ে ভেঙে মুক্ত কোলেস্টেরল অবমুক্ত করে, যা কোষে অতিরিক্ত কোলেস্টেরল তৈরি বন্ধ করে এবং ACAT এনজাইম সক্রিয় করে নিরাপদ সঞ্চয় নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. HDL & Reverse Cholesterol Transport: The Protective Pathway', '৪. এইচডিএল ও রিভার্স কোলেস্টেরল পরিবহন: হৃদযন্ত্র রক্ষাকারী গতিপথ'),
          paragraphs: [
            l(
              'High-density lipoprotein (HDL) coordinates reverse cholesterol transport (RCT), the atheroprotective pathway that retrieves excess cholesterol from peripheral arterial walls and transports it back to the liver for biliary elimination. The liver and intestine secrete lipid-poor Apolipoprotein A-I (ApoA-I) as nascent discoidal pre-beta-HDL. Peripheral cells and lipid-laden macrophage foam cells efflux unesterified cholesterol and phospholipids to ApoA-I through the ATP-binding cassette transporter A1 (ABCA1).',
              'হাই-ডেনসিটি লাইপোপ্রোটিন (HDL) রিভার্স কোলেস্টেরল পরিবহন সম্পন্ন করে, যা রক্তনালীর প্রাচীর ও ম্যাক্রোফেজ ফোম সেল থেকে অতিরিক্ত ক্ষতিকর কোলেস্টেরল তুলে নিয়ে যকৃতে পৌঁছে দেয় যাতে তা পিত্তের মাধ্যমে শরীর থেকে বের হয়ে যেতে পারে। যকৃৎ ও অন্ত্র প্রথমে ডিস্ক আকৃতির প্রাক-বিটা এইচডিএল তৈরি করে। রক্তনালীর কোষগুলো ABCA1 ট্রান্সপোর্টারের মাধ্যমে নিজেদের অতিরিক্ত কোলেস্টেরল এই কণার ApoA-I প্রোটিনে তুলে দেয়।'
            ),
            l(
              'Once acquired by nascent HDL, free cholesterol is esterified by Lecithin-Cholesterol Acyltransferase (LCAT / PCAT), which transfers a fatty acid from phosphatidylcholine to cholesterol. Highly hydrophobic cholesteryl esters partition inward into the particle core, driving the structural transition into spherical mature HDL3 and HDL2 particles. Mature HDL returns cholesterol to the liver via two distinct routes: direct selective uptake of cholesteryl esters mediated by Scavenger Receptor Class B Type I (SR-BI) on hepatocytes without particle catabolism, or indirect transfer to ApoB-containing lipoproteins (VLDL/LDL) via Cholesteryl Ester Transfer Protein (CETP) in exchange for triacylglycerols.',
              'এইচডিএল-এ প্রবেশ করা মুক্ত কোলেস্টেরল LCAT এনজাইম দ্বারা এস্টারিফাইড হয়ে কণাটির ভেতরের অংশে ঢুকে পড়ে এবং এটিকে গোলাকার পরিণত এইচডিএল-এ রূপান্তর করে। এই পরিণত এইচডিএল দুইভাবে যকৃতে কোলেস্টেরল ফেরত পাঠায়: সরাসরি যকৃতের SR-BI রিসেপ্টরে কোলেস্টেরল জমা দিয়ে, অথবা CETP প্রোটিন ব্যবহার করে VLDL ও LDL কণার সাথে চর্বি বিনিময়ের মাধ্যমে। যকৃতে পৌঁছানোর পর এই কোলেস্টেরল পিত্তে পরিণত হয়ে শরীর থেকে চিরতরে নিষ্ক্রান্ত হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Dyslipidemias, Familial Hypercholesterolemia & Atherogenesis', '৫. ডিসলিপিডেমিয়া, ফ্যামিলিয়াল হাইপারকোলেস্টেরলেমিয়া ও অ্যাথেরোজেনেসিস'),
          paragraphs: [
            l(
              'Primary genetic dyslipidemias are categorized using the Fredrickson-WHO classification. Type I (Familial Hyperchylomicronemia) stems from loss-of-function mutations in LPL or its activator APOC2, manifesting with massive fasting chylomicronemia, milky plasma, eruptive xanthomas, hepatosplenomegaly, and recurrent acute pancreatitis without premature atherosclerosis. Type IIa (Familial Hypercholesterolemia / FH) is an autosomal dominant condition caused by mutations in LDLR (over 90 percent), APOB, or gain-of-function in PCSK9, leading to profound elevations in LDL-cholesterol, tendon xanthomas (Achilles tendon), xanthelasma, and devastating premature coronary heart disease.',
              'বংশগত ডিসলিপিডেমিয়ার ফ্রেডরিকসন শ্রেণিবিভাগে টাইপ ১ হলো কাইলোমাইক্রনের আধিক্য যা LPL বা ApoC-II এর ত্রুটির কারণে ঘটে; এতে রক্ত দুধের মতো সাদা হয়ে যায় এবং বারবার তীব্র প্যানক্রিয়াটাইটিস হয়। টাইপ ২-এ বা ফ্যামিলিয়াল হাইপারকোলেস্টেরলেমিয়া (FH) হলো একটি মারাত্মক বংশগত রোগ যা এলডিএল রিসেপ্টর বা PCSK9 এর ত্রুটিতে ঘটে; এতে রক্তে এলডিএল মাত্রাতিরিক্ত বেড়ে গিয়ে অ্যাকিলিস টেন্ডনে চর্বির টিউমার (জ্যান্থোমা) তৈরি করে এবং অল্প বয়সেই মারাত্মক হার্ট অ্যাটাক ঘটায়।'
            ),
            l(
              'The molecular pathogenesis of atherosclerosis begins with the insudation and subendothelial retention of ApoB-containing lipoproteins within the arterial intima at sites of hemodynamic shear stress. Trapped particles undergo oxidative modification (oxLDL) by endothelial reactive oxygen species. Local monocytes differentiate into macrophages that express scavenger receptors (SR-A and CD36). Unlike the regulated LDL receptor, scavenger receptors lack sterol feedback inhibition, continuously engulfing oxLDL until macrophages transform into foam cells. Foam cell death creates a necrotic, pro-inflammatory lipid core that destabilizes the overlying fibrous cap, predisposing to catastrophic plaque rupture and occlusive arterial thrombosis.',
              'অ্যাথেরোস্ক্লেরোসিস বা রক্তনালী ব্লকেজের সূচনা ঘটে যখন রক্তনালীর প্রাচীরে অতিরিক্ত এলডিএল কণা আটকে যায় এবং জারিত হয় (oxLDL)। সেখানে উপস্থিত ম্যাক্রোফেজ তার স্ক্যাভেঞ্জার রিসেপ্টর দিয়ে অনবরত এই জারিত চর্বি গিলতে থাকে কারণ এই রিসেপ্টরে কোনো ফিডব্যাক বাধা থাকে না। একসময় ম্যাক্রোফেজগুলো চর্বিভর্তি ফোম সেলে পরিণত হয়। এই ফোম সেলগুলো মারা গিয়ে রক্তনালীর নিচে গলিত চর্বির ধ্বংসাত্মক কোর তৈরি করে, যা একদিন হঠাৎ ফেটে গিয়ে রক্ত জমাট বাঁধায় এবং প্রাণঘাতী হার্ট অ্যাটাক বা স্ট্রোক ঘটায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Core Synthetic Takeaways: Lipoprotein Equilibrium', '৬. মূল শিক্ষা: লাইপোপ্রোটিন ভারসাম্য ও শারীরবৃত্তীয় দর্শন'),
          paragraphs: [
            l(
              'Lipoprotein metabolism operates as a dynamic continuum balancing lipid delivery against reverse clearance. Apolipoproteins act as the critical molecular dispatchers, directing particle assembly (ApoB), enzyme activation (ApoC-II, ApoA-I), and receptor recognition (ApoB-100, ApoE). Receptor-mediated endocytosis of LDL coordinates whole-body sterol homeostasis, while PCSK9 inhibitors represent landmark triumphs in translating molecular receptor biology into life-saving cardiovascular medicine.',
              'লাইপোপ্রোটিন বিপাক হলো দেহে চর্বি সরবরাহ এবং ক্ষতিকর চর্বি অপসারণের মধ্যকার এক অত্যন্ত সুনির্দিষ্ট ভারসাম্য। অ্যাপোপ্রোটিনগুলো এই ব্যবস্থার মূল পরিচালক হিসেবে কাজ করে কণার গঠন (ApoB), এনজাইম সক্রিয়করণ (ApoC-II, ApoA-I) এবং রিসেপ্টর সনাক্তকরণ (ApoB-100, ApoE) নিয়ন্ত্রণ করে। এলডিএল রিসেপ্টর জীববিজ্ঞানের এই আবিষ্কার এবং আধুনিক PCSK9 ইনহিবিটর ওষুধের প্রয়োগ আণবিক বিজ্ঞানের যুগান্তকারী সাফল্যের এক উজ্জ্বল নিদর্শন।'
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
          heading: l('Abetalipoproteinemia & Tangier Disease: Transporter Deficiencies', 'অ্যাবেটালাইপোপ্রোটিনেমিয়া ও ট্যাঙ্গিয়ার ডিজিজ: ট্রান্সপোর্টার বৈকল্য'),
          paragraphs: [
            l(
              'Abetalipoproteinemia (Bassen-Kornzweig syndrome) is an autosomal recessive disorder caused by mutations in the MTPS gene encoding the microsomal triglyceride transfer protein. Without functional MTP, enterocytes and hepatocytes cannot assemble ApoB-48 or ApoB-100 particles, resulting in undetectable plasma chylomicrons, VLDL, and LDL, accompanied by severe lipid malabsorption, acanthocytosis (spur-cell erythrocytes), retinitis pigmentosa, and spinocerebellar ataxia due to fat-soluble vitamin E deficiency. Conversely, Tangier disease is caused by ABCA1 mutations, preventing nascent HDL generation and causing orange-yellow tonsillar lipid deposits and early coronary artery disease.',
              'অ্যাবেটালাইপোপ্রোটিনেমিয়া হলো একটি বংশগত ব্যাধি যেখানে MTP প্রোটিন নষ্ট থাকায় অন্ত্র ও যকৃৎ কোনো ApoB কণা (কাইলোমাইক্রন, VLDL, LDL) তৈরি করতে পারে না; এর ফলে রক্তে কোলেস্টেরল শূন্যের কোঠায় নেমে আসে এবং ভিটামিন ই শোষিত না হওয়ায় স্নায়ুবিক পঙ্গুত্ব দেখা দেয়। অপরদিকে ট্যাঙ্গিয়ার ডিজিজে ABCA1 প্রোটিন নষ্ট থাকায় রক্তে কোনো উপকারী এইচডিএল তৈরি হতে পারে না, যার ফলে গলার টনসিলে হলুদ চর্বি জমা হয় এবং দ্রুত হৃদরোগ দেখা দেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Targeting Lipoprotein(a) & ANGPTL3: Frontier Therapeutics', 'লাইপোপ্রোটিন(এ) ও ANGPTL3 টার্গেট: আধুনিক চিকিৎসা বিপ্লব'),
          paragraphs: [
            l(
              'Lipoprotein(a) [Lp(a)] consists of an LDL-like particle covalently linked via a disulfide bond to Apolipoprotein(a), a glycoprotein sharing homology with plasminogen. Elevated Lp(a) represents a genetically determined, independent causal risk factor for calcific aortic valve stenosis and coronary thrombosis that is completely unresponsive to statins. Novel antisense oligonucleotides (pelacarsen) and small interfering RNAs (olpasiran, lepodisiran) selectively degrade hepatic LPA mRNA, reducing circulating Lp(a) by over 90 percent. Concurrently, monoclonal antibodies against ANGPTL3 (evinacumab) unleash LPL and endothelial lipase activity, lowering LDL-cholesterol in homozygous FH patients refractory to all traditional therapies.',
              'লাইপোপ্রোটিন(এ) হলো এলডিএল-এর সাথে যুক্ত এমন এক বিপজ্জনক কণা যা রক্তনালীতে রক্ত জমাট বাঁধায় এবং হার্টের ভাল্ভ শক্ত করে ফেলে, যা স্ট্যাটিন দিয়ে কমানো যায় না। আধুনিক জেনেটিক এসআইআরএনএ ওষুধ (যেমন ওলপাসিরান) এর উৎপাদন ৯০ শতাংশের বেশি কমিয়ে দিতে সক্ষম হয়েছে। একই সাথে এভিনাকুম্যাব নামক ওষুধ ANGPTL3 প্রোটিনকে অবদমিত করে লাইপোপ্রোটিন লাইপেজকে বাঁধনমুক্ত করে, যা মারাত্মক জেনেটিক রোগীদের ক্ষেত্রেও কোলেস্টেরল উল্লেখযোগ্যভাবে কমিয়ে আনতে সক্ষম হয়েছে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A comprehensive schematic illustrating the exogenous dietary lipid pathway (chylomicrons via LPL to remnants), the endogenous hepatic lipid pathway (VLDL through IDL to LDL), LDL receptor-mediated endocytosis and PCSK9 degradation, and HDL reverse cholesterol transport.',
      'বহির্জাত খাদ্য লিপিড পরিবহন (LPL সহযোগে কাইলোমাইক্রন থেকে রেমন্যান্ট), অন্তর্জাত যকৃৎ লিপিড পরিবহন (VLDL থেকে IDL হয়ে LDL), এলডিএল রিসেপ্টর এন্ডোসাইটোসিস ও PCSK9 নিয়ন্ত্রণ এবং এইচডিএল রিভার্স কোলেস্টেরল পরিবহনের সমন্বিত জৈবরাসায়নিক নকশা।'
    ),
    steps: [
      l('Dietary lipids are packaged into chylomicrons with ApoB-48 and delipidated by LPL.', 'খাদ্যের চর্বি ApoB-48 দিয়ে কাইলোমাইক্রনে আবদ্ধ হয় এবং LPL দ্বারা চর্বিমুক্ত হয়।'),
      l('Hepatic VLDL with ApoB-100 is delipidated to IDL and remodeled into cholesterol-rich LDL.', 'যকৃতের VLDL কণা LPL দ্বারা ট্রাইগ্লিসারাইড হারিয়ে কোলেস্টেরলসমৃদ্ধ LDL কণায় পরিণত হয়।'),
      l('LDL particles are cleared by hepatic LDL receptors; PCSK9 regulates receptor recycling.', 'এলডিএল কণা যকৃতের এলডিএল রিসেপ্টরে শোষিত হয়; PCSK9 প্রোটিন রিসেপ্টরের ধ্বংস নিয়ন্ত্রণ করে।'),
      l('HDL retrieves excess peripheral cholesterol via ABCA1 and LCAT for hepatic elimination.', 'এইচডিএল কণা ABCA1 ও LCAT ব্যবহার করে টিস্যু থেকে অতিরিক্ত কোলেস্টেরল যকৃতে ফেরত পাঠায়।'),
    ],
  },
  assessment: {
    question: l(
      'A 34-year-old male presents with tendon xanthomas over both Achilles tendons and a family history of fatal myocardial infarction in his father at age 42. Fasting lipid profile reveals a total cholesterol of 380 mg/dL and LDL-cholesterol of 310 mg/dL, with normal triglycerides. Which molecular defect is the most frequent cause of this condition?',
      '৩৪ বছর বয়সী এক যুবকের উভয় অ্যাকিলিস টেন্ডনে জ্যান্থোমা (চর্বির পিণ্ড) দেখা গেছে এবং তার বাবার ৪২ বছর বয়সে হার্ট অ্যাটাকে মৃত্যুর ইতিহাস রয়েছে। পরীক্ষায় রক্তের মোট কোলেস্টেরল ৩৮০ মিলিগ্রাম/ডেসিলিটার এবং এলডিএল কোলেস্টেরল ৩১০ মিলিগ্রাম/ডেসিলিটার পাওয়া গেল। কোন আণবিক ত্রুটিটি এই রোগের প্রধানতম কারণ?'
    ),
    options: [
      l(
        'Autosomal dominant loss-of-function mutation in the LDLR gene encoding the cell-surface LDL receptor.',
        'কোষপর্দার এলডিএল রিসেপ্টর পরিচালনাকারী LDLR জিনের অটোসোমাল ডমিন্যান্ট কার্যক্ষমতাহীন মিউটেশন।'
      ),
      l(
        'Homozygous loss-of-function mutation in Lipoprotein Lipase (LPL) causing complete failure of chylomicron clearance.',
        'লাইপোপ্রোটিন লাইপেজ (LPL) জিনের ত্রুটি যার ফলে কাইলোমাইক্রন রক্ত থেকে অপসারিত হতে পারে না।'
      ),
      l(
        'Isolated deficiency of Apolipoprotein C-II preventing activation of capillary endothelial lipases.',
        'Apolipoprotein C-II এর ঘাটতি যা রক্তজালকের লাইপেজ এনজাইম সক্রিয়করণে সম্পূর্ণ বাধা দেয়।'
      ),
      l(
        'Complete absence of Lecithin-Cholesterol Acyltransferase (LCAT) halting HDL maturation.',
        'LCAT এনজাইমের সম্পূর্ণ অনুপস্থিতি যার কারণে এইচডিএল কণার পরিপক্কতা ব্যাহত হয়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'This clinical presentation is characteristic of heterozygous Familial Hypercholesterolemia (Type IIa dyslipidemia). Over 90 percent of cases are caused by loss-of-function mutations in the LDLR gene. Impaired LDL receptor-mediated endocytosis prevents hepatic clearance of LDL from the circulation, resulting in severe hypercholesterolemia, tendon xanthomas, and premature atherosclerotic coronary artery disease.',
      'এটি ফ্যামিলিয়াল হাইপারকোলেস্টেরলেমিয়া বা টাইপ ২-এ ডিসলিপিডেমিয়ার ক্লাসিক্যাল লক্ষণ। ৯০ শতাংশেরও বেশি ক্ষেত্রে এটি LDLR জিনের মিউটেশনের কারণে ঘটে। এলডিএল রিসেপ্টর অকেজো থাকায় যকৃৎ রক্ত থেকে এলডিএল অপসারণ করতে পারে না; ফলে রক্তে কোলেস্টেরল অস্বাভাবিক বেড়ে গিয়ে টেন্ডন জ্যান্থোমা এবং অকালে প্রাণঘাতী করোনারি হৃদরোগ সৃষ্টি করে।'
    ),
  },
}
