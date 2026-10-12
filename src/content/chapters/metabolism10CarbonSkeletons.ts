import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const carbonSkeletonRefs = [
  {
    id: 'lehninger-biochem-8e-ch18',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 18: Carbon Skeleton Degradation and Specialized Products',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch29',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 29: Catabolism of the Carbon Skeletons of Amino Acids",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'harpers-biochem-32e-ch30',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 30: Conversion of Amino Acids to Specialized Products",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'marks-medbiochem-6e-ch39',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 39: Synthesis and Degradation of Amino Acids",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

export const metabolism10CarbonSkeletonsLesson: LessonTopic = {
  id: 'topic.metabolism.carbon-skeletons-specialized-products',
  slug: 'carbon-skeletons-specialized-products',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('10 · Carbon Skeleton Fates & Specialized Products', '১০ · কার্বন কাঠামোর পরিণতি ও বিশেষ যৌগ'),
  summary: l(
    'Degradation of the 20 amino acid carbon skeletons into seven universal metabolic intermediates, glucogenic versus ketogenic classification, branched-chain amino acid catabolism in MSUD, aromatic phenylalanine degradation in PKU and alkaptonuria, one-carbon SAM methylation, and biosyntheses of neurotransmitters, nitric oxide, creatine, and glutathione.',
    '২০টি অ্যামিনো অ্যাসিডের কার্বন কঙ্কালের সাতটি সার্বজনীন বিপাকীয় মধ্যবর্তী যৌগে রূপান্তর, গ্লুকোজেনিক বনাম কিটোজেনিক শ্রেণিবিভাগ, MSUD-তে ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিডের ভাঙন, PKU ও অ্যালক্যাপটনুরিয়া, এক-কার্বন SAM মিথাইলেশন এবং নিউরোট্রান্সমিটার, নাইট্রিক অক্সাইড, ক্রিয়েটিন ও গ্লুটাথিয়ন সংশ্লেষ।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Categorize all 20 proteinogenic amino acids into glucogenic, ketogenic, or mixed fates, tracing their convergence onto the seven universal metabolic intermediates.',
      'সকল ২০টি অ্যামিনো অ্যাসিডকে গ্লুকোজেনিক, কিটোজেনিক বা মিশ্র বৈশিষ্ট্যে শ্রেণিভুক্ত করতে পারা এবং সাতটি সার্বজনীন মধ্যবর্তী যৌগে তাদের রূপান্তর ব্যাখ্যা করা।',
    ),
    l(
      'Analyze the molecular mechanisms and clinical phenotypes of branched-chain alpha-keto acid dehydrogenase (BCKDH) deficiency (MSUD) and phenylalanine hydroxylase deficiency (PKU).',
      'ব্রাঞ্চড-চেইন আলফা-কিটো অ্যাসিড ডিহাইড্রোজিনেজ (BCKDH) ঘাটতিজনিত MSUD এবং ফিনাইলঅ্যালানিন হাইড্রক্সিলেজ ঘাটতিজনিত PKU-এর আণবিক প্রক্রিয়া ও ক্লিনিক্যাল বৈশিষ্ট্য বিশ্লেষণ করা।',
    ),
    l(
      'Map the biosyntheses of specialized compounds from amino acids: catecholamines and melanin from tyrosine, serotonin from tryptophan, GABA from glutamate, and creatine and nitric oxide from arginine.',
      'অ্যামিনো অ্যাসিড থেকে বিশেষ যৌগ সংশ্লেষের মানচিত্র তৈরি করা: টাইরোসিন থেকে ক্যাটেকোলামিন ও মেলানিন, ট্রিপটোফ্যান থেকে সেরোটোনিন, গ্লুটামেট থেকে GABA এবং আর্জিনিন থেকে ক্রিয়েটিন ও নাইট্রিক অক্সাইড।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.amino-acid-catabolism-urea', 'topic.metabolism.tca-oxphos'],
  relatedTopicIds: ['topic.metabolism.purine-pyrimidine-metabolism', 'topic.metabolism.glycogen-gluconeogenesis'],
  references: carbonSkeletonRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch18', 'harpers-biochem-32e-ch29'],
    structure: ['harpers-biochem-32e-ch29', 'marks-medbiochem-6e-ch39'],
    mechanism: ['lehninger-biochem-8e-ch18', 'harpers-biochem-32e-ch30'],
    integration: ['harpers-biochem-32e-ch30', 'marks-medbiochem-6e-ch39'],
    practice: ['lehninger-biochem-8e-ch18', 'marks-medbiochem-6e-ch39'],
    takeaways: ['lehninger-biochem-8e-ch18', 'harpers-biochem-32e-ch29'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Seven Metabolic Intermediates & Fuel Classification', '১. সাতটি বিপাকীয় সংযোগস্থল ও জ্বালানি শ্রেণিবিভাগ'), sectionId: 'introduction' },
      { id: 'sec-bcaa', label: l('2. Branched-Chain Amino Acids & Maple Syrup Urine Disease', '২. ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিড ও ম্যাপল সিরাপ ইউরিন ডিজিজ'), sectionId: 'structure' },
      { id: 'sec-arom', label: l('3. Aromatic Catabolism: Phenylalanine, PKU & Alkaptonuria', '৩. অ্যারোমেটিক ভাঙন: ফিনাইলঅ্যালানিন, PKU ও অ্যালক্যাপটনুরিয়া'), sectionId: 'mechanism' },
      { id: 'sec-sam', label: l('4. One-Carbon Metabolism: SAM, Homocysteine & Folate/B12', '৪. এক-কার্বন বিপাক: SAM, হোমোসিস্টিন ও ফোলেট/বি১২ অক্ষ'), sectionId: 'integration' },
      { id: 'sec-spec', label: l('5. Specialized Biosyntheses: Neurotransmitters & Anabolic Triads', '৫. বিশেষ যৌগ সংশ্লেষ: নিউরোট্রান্সমিটার ও উপচিতিমূলক উপাদান'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Review & Synthetic Integration Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা ও সমন্বিত সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Phenylalanine Hydroxylase (PAH)', 'ফিনাইলঅ্যালানিন হাইড্রক্সিলেজ (PAH)'),
        definition: l(
          'Hepatic mixed-function oxygenase that converts phenylalanine to tyrosine using tetrahydrobiopterin (BH4); inborn deficiency causes classical phenylketonuria (PKU).',
          'যকৃতের এনজাইম যা টেট্রাহাইড্রোবায়োপ্টেরিন (BH4) ব্যবহার করে ফিনাইলঅ্যালানিনকে টাইরোসিনে রূপান্তর করে; এর জন্মগত ত্রুটি ক্লাসিক্যাল ফিনাইলকিটোনুরিয়া (PKU) ঘটায়।'
        ),
      },
      {
        term: l('Branched-Chain alpha-Keto Acid Dehydrogenase (BCKDH)', 'ব্রাঞ্চড-চেইন আলফা-কিটো অ্যাসিড ডিহাইড্রোজিনেজ (BCKDH)'),
        definition: l(
          'Mitochondrial multienzyme complex that oxidatively decarboxylates deaminated leucine, isoleucine, and valine; deficiency causes toxic ketoacid accumulation in MSUD.',
          'মাইটোকন্ড্রিয়াল বহু-এনজাইম কমপ্লেক্স যা লিউসিন, আইসোলিউসিন ও ভ্যালিনের ডিঅ্যামিনেটেড কিটো রূপকে জারিত করে; এর ঘাটতিতে MSUD নামক মারাত্মক রোগ হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Glucogenic vs Ketogenic Fate Stoichiometry', 'গ্লুকোজেনিক বনাম কিটোজেনিক রূপান্তরের পরিমাণগত হিসাব'),
        steps: [
          l(
            'Step 1: Glucogenic amino acids yield pyruvate or TCA intermediates (alpha-ketoglutarate, succinyl-CoA, fumarate, oxaloacetate). Because oxaloacetate can form phosphoenolpyruvate (PEP) via PEPCK, there is a net pathway for de novo glucose synthesis.',
            'ধাপ ১: গ্লুকোজেনিক অ্যামিনো অ্যাসিডগুলো পাইরুভেট বা টিসিএ মধ্যবর্তী যৌগ তৈরি করে। যেহেতু অক্সালোঅ্যাসিটেট PEPCK এনজাইম দিয়ে ফসফোইনলপাইরুভেটে পরিণত হতে পারে, তাই নিট নতুন গ্লুকোজ তৈরি সম্ভব।'
          ),
          l(
            'Step 2: Purely ketogenic amino acids (Leucine and Lysine) yield solely acetyl-CoA and/or acetoacetate. Because the pyruvate dehydrogenase reaction is irreversible in mammals, carbons from acetyl-CoA cannot achieve net carbon gain in glucose.',
            'ধাপ ২: সম্পূর্ণ কিটোজেনিক অ্যামিনো অ্যাসিডগুলো (লিউসিন ও লাইসিন) কেবল অ্যাসিটাইল-কোএ বা অ্যাসিটোঅ্যাসিটেট তৈরি করে। পাইরুভেট ডিহাইড্রোজিনেজ অপরিবর্তনীয় হওয়ায় অ্যাসিটাইল-কোএ থেকে নেট নতুন গ্লুকোজ তৈরি অসম্ভব।'
          ),
        ],
        conclusion: l(
          'Of the 20 amino acids: 2 are purely ketogenic (Leu, Lys), 5 are both glucogenic and ketogenic (Phe, Tyr, Trp, Ile, Thr), and the remaining 13 are purely glucogenic.',
          '২০টি অ্যামিনো অ্যাসিডের মধ্যে: ২টি সম্পূর্ণ কিটোজেনিক (লিউসিন, লাইসিন), ৫টি দ্বৈত বৈশিষ্ট্যের (ফিনাইলঅ্যালানিন, টাইরোসিন, ট্রিপটোফ্যান, আইসোলিউসিন, থ্রিওনিন) এবং বাকি ১৩টি সম্পূর্ণ গ্লুকোজেনিক।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does untreated classical phenylketonuria (PKU) cause profound intellectual disability and hypopigmentation (light skin and blonde hair)?',
          'চিকিৎসাহীন ক্লাসিক্যাল ফিনাইলকিটোনুরিয়ায় (PKU) কেন মারাত্মক বুদ্ধিবৈকল্য এবং ত্বকের ফ্যাকাশে ভাব (হালকা ত্বক ও সোনালী চুল) দেখা দেয়?'
        ),
        answer: l(
          'Toxic levels of phenylalanine competitively inhibit the Large Neutral Amino Acid Transporter-1 (LAT1) at the blood-brain barrier, starving the brain of other essential amino acids like tyrosine and tryptophan required for myelin and neurotransmitters. Additionally, high phenylalanine competitively inhibits tyrosinase in melanocytes, blocking melanin synthesis and causing hypopigmentation.',
          'রক্তে অতিরিক্ত ফিনাইলঅ্যালানিন মস্তিষ্কের LAT1 ট্রান্সপোর্টারকে দখল করে রাখে, ফলে টাইরোসিন ও ট্রিপটোফ্যান মস্তিষ্কে ঢুকতে না পেরে নিউরোট্রান্সমিটার তৈরিতে ব্যর্থ হয় ও বুদ্ধিবৈকল্য ঘটায়। তাছাড়া অতিরিক্ত ফিনাইলঅ্যালানিন ত্বকের টাইরোসিনেজ এনজাইমকে বাধা দিয়ে মেলানিন তৈরি কমিয়ে ত্বক ফ্যাকাশে করে।'
        ),
      },
      {
        question: l(
          'How does S-adenosylmethionine (SAM) serve as the universal biological methyl currency for human cellular biochemistry?',
          'এস-অ্যাডেনোসিলমিথায়োনিন (SAM) কীভাবে মানবদেহের জৈবরাসায়নিক বিক্রিয়ায় সার্বজনীন মিথাইল মুদ্রা হিসেবে কাজ করে?'
        ),
        answer: l(
          'ATP condenses with methionine via methionine adenosyltransferase to yield SAM. The sulfonium bond destabilizes the attached methyl group, raising its transfer potential to the highest level in biology. This activated methyl group is donated to DNA, RNA, histones, phospholipids, and neurotransmitters by dedicated methyltransferases, leaving S-adenosylhomocysteine (SAH).',
          'মিথায়োনিনের সাথে এটিপি যুক্ত হয়ে SAM তৈরি হয়। এর সালফোনিয়াম বন্ধনটি মিথাইল মূলকের শক্তি বহুগুণ বাড়িয়ে দেয়, ফলে এটি সহজেই ডিএনএ, হিস্টোন, ফসফোলিপিড এবং নিউরোট্রান্সমিটারে মিথাইল মূলক দান করে জীবনপ্রক্রিয়া নিয়ন্ত্রণ করে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'carbon-skeletons-specialized-hub',
    title: l('Interactive Amino Acid Carbon Fates: TCA Entry Hubs & Specialized Biosyntheses', 'ইন্টারেক্টিভ অ্যামিনো অ্যাসিড কার্বন পরিণতি: টিসিএ চক্রের প্রবেশদ্বার ও বিশেষ যৌগ সংশ্লেষ'),
    description: l(
      'Explore the convergence of all twenty amino acid carbon skeletons onto the central metabolic engine and trace their divergence into vital neurotransmitters, pigments, and cellular protectors.',
      'সকল ২০টি অ্যামিনো অ্যাসিডের কার্বন কঙ্কালের মূল বিপাকীয় ইঞ্জিনে একত্রীকরণ এবং গুরুত্বপূর্ণ নিউরোট্রান্সমিটার, রঞ্জক ও কোষীয় প্রতিরোধক অণুতে রূপান্তর প্রত্যক্ষ করুন।'
    ),
    disclaimer: l(
      'Stoichiometry and enzymatic nodes verified against Lehninger Principles of Biochemistry (8th ed) and Harper Illustrated Biochemistry (32nd ed).',
      'রাসায়নিক অনুপাত ও এনজাইম তথ্য লেহনিঞ্জার বায়োকেমিস্ট্রি এবং হার্পারস ইলাস্ট্রেটেড বায়োকেমিস্ট্রি দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'purely-ketogenic-hub',
        label: l('1. Purely Ketogenic Hub: Leucine & Lysine Degradation', '১. সম্পূর্ণ কিটোজেনিক কেন্দ্র: লিউসিন ও লাইসিনের ভাঙন'),
        description: l(
          'Degraded exclusively into acetoacetate and acetyl-CoA; cannot produce new glucose in mammals, instead generating ketone bodies during starvation.',
          'কেবলমাত্র অ্যাসিটোঅ্যাসিটেট ও অ্যাসিটাইল-কোএ তৈরি করে; স্তন্যপায়ীদের দেহে নতুন গ্লুকোজ বানাতে অক্ষম, কিন্তু অনাহারে কিটোন তৈরি করে।'
        ),
        details: l(
          'Provides crucial alternative fuel fragments for heart and brain; strictly non-glucogenic because two carbons enter TCA as acetyl-CoA and two exit as CO2.',
          'হৃদপিণ্ড ও মস্তিষ্কের জন্য বিকল্প জ্বালানি দেয়; দুটি কার্বন প্রবেশ করে এবং দুটিই CO2 হিসেবে বের হয়ে যাওয়ায় নেট গ্লুকোজ উৎপাদন শূন্য।'
        ),
        color: '#dc2626',
        sectionId: 'introduction',
      },
      {
        id: 'bcaa-bckdh-complex',
        label: l('2. Branched-Chain Amino Acids (BCAA) & BCKDH Complex', '২. ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিড (BCAA) ও BCKDH কমপ্লেক্স'),
        description: l(
          'Mitochondrial BCKDH complex decarboxylates deaminated leucine, isoleucine, and valine using thiamine (B1), lipoate, CoA, FAD, and NAD+.',
          'মাইটোকন্ড্রিয়াল BCKDH কমপ্লেক্স ভিটামিন বি১, লিপোয়েট, কোএ, FAD ও NAD+ সহযোগে লিউসিন, আইসোলিউসিন ও ভ্যালিনের কার্বক্সিল গ্রুপ অপসারণ করে।'
        ),
        details: l(
          'Deficiency in BCKDH causes Maple Syrup Urine Disease (MSUD) with severe neurotoxicity and sweet-smelling urine from accumulating branched ketoacids.',
          'BCKDH ঘাটতিতে ম্যাপল সিরাপ ইউরিন ডিজিজ (MSUD) হয়; রক্তে জমা হওয়া কিটো অ্যাসিড মস্তিষ্কে তীব্র বিষক্রিয়া এবং প্রস্রাবে মিষ্টি গন্ধ সৃষ্টি করে।'
        ),
        color: '#d97706',
        sectionId: 'structure',
      },
      {
        id: 'aromatic-pah-axis',
        label: l('3. Phenylalanine Hydroxylase (PAH) & Tetrahydrobiopterin (BH4)', '৩. ফিনাইলঅ্যালানিন হাইড্রক্সিলেজ (PAH) ও টেট্রাহাইড্রোবায়োপ্টেরিন (BH4)'),
        description: l(
          'Converts essential phenylalanine to tyrosine; inborn deficiency causes classical Phenylketonuria (PKU) with microcephaly and intellectual disability.',
          'অপরিহার্য ফিনাইলঅ্যালানিনকে টাইরোসিনে রূপান্তর করে; জন্মগত ঘাটতিতে ফিনাইলকিটোনুরিয়া (PKU) ঘটে যা শিশুদের বুদ্ধিবৈকল্য ও ছোট মাথা সৃষ্টি করে।'
        ),
        details: l(
          'Requires tetrahydrobiopterin (BH4), regenerated by dihydropteridine reductase; downstream defects in homogentisate oxidase produce alkaptonuria.',
          'টেট্রাহাইড্রোবায়োপ্টেরিন (BH4) কোফ্যাক্টর প্রয়োজন হয়; পরবর্তী ধাপে হোমোজেন্টিসেট অক্সিডেজের ত্রুটি অ্যালক্যাপটনুরিয়া নামক কালো মূত্রের রোগ ঘটায়।'
        ),
        color: '#2563eb',
        sectionId: 'mechanism',
      },
      {
        id: 'one-carbon-sam-cycle',
        label: l('4. Methionine, SAM Cycle & Homocysteine Junction', '৪. মিথায়োনিন, SAM চক্র ও হোমোসিস্টিন সংযোগস্থল'),
        description: l(
          'Methionine condenses with ATP to form S-adenosylmethionine (SAM), the primary biological methyl donor for DNA, RNA, and lipids.',
          'মিথায়োনিন এটিপির সাথে যুক্ত হয়ে SAM গঠন করে, যা ডিএনএ, আরএনএ ও লিপিডের প্রধানতম জৈবিক মিথাইল সরবরাহকারী হিসেবে কাজ করে।'
        ),
        details: l(
          'Donation of methyl group yields homocysteine, which requires vitamin B12 and folate for remethylation, or vitamin B6 for transsulfuration to cysteine.',
          'মিথাইল ত্যাগের পর হোমোসিস্টিন তৈরি হয়, যা ভিটামিন বি১২ ও ফোলেট দিয়ে মিথায়োনিনে ফেরে অথবা ভিটামিন বি৬ দিয়ে সিস্টিনে রূপান্তরিত হয়।'
        ),
        color: '#059669',
        sectionId: 'integration',
      },
      {
        id: 'catecholamine-melanin',
        label: l('5. Tyrosine Specialized Hub: DOPA, Dopamine & Epinephrine', '৫. টাইরোসিন বিশেষ কেন্দ্র: ডোপা, ডোপামিন ও এপিনেফ্রিন'),
        description: l(
          'Tyrosine hydroxylase (BH4-dependent) converts tyrosine to DOPA, precursor for dopamine, norepinephrine, epinephrine, and melanocyte melanin.',
          'টাইরোসিন হাইড্রক্সিলেজ এনজাইম টাইরোসিনকে ডোপাতে পরিণত করে, যা ডোপামিন, নর-এপিনেফ্রিন, এপিনেফ্রিন এবং ত্বকের মেলানিনের মূল উৎস।'
        ),
        details: l(
          'Rate-limiting step in sympathetic neuroendocrine axis; defective copper-dependent tyrosinase causes classical Oculocutaneous Albinism.',
          'সহানুভূতিশীল স্নায়ুতন্ত্রের প্রধান নিয়ন্ত্রক ধাপ; কপার-নির্ভর টাইরোসিনেজের ত্রুটিতে চোখের ও ত্বকের জন্মগত বর্ণহীনতা বা অ্যালবিনিজম দেখা দেয়।'
        ),
        color: '#9333ea',
        sectionId: 'practice',
      },
      {
        id: 'serotonin-gaba',
        label: l('6. Tryptophan & Glutamate: Serotonin, Melatonin & GABA', '৬. ট্রিপটোফ্যান ও গ্লুটামেট: সেরোটোনিন, মেলাটোনিন ও GABA'),
        description: l(
          'Tryptophan hydroxylase yields serotonin and pineal melatonin; glutamate decarboxylase (GAD, PLP-dependent) forms inhibitory GABA.',
          'ট্রিপটোফ্যান হাইড্রক্সিলেজ থেকে সেরোটোনিন ও মেলাটোনিন তৈরি হয়; গ্লুটামেট ডিকার্বক্সিলেজ ভিটামিন বি৬ ব্যবহার করে মস্তিষ্কের প্রতিরোধক GABA বানায়।'
        ),
        details: l(
          'Serotonin governs mood, intestinal motility, and circadian rhythms; GABA is the brain primary inhibitory neurotransmitter preventing seizures.',
          'সেরোটোনিন মেজাজ, অন্ত্রের গতি ও ঘুম নিয়ন্ত্রণ করে; GABA হলো মস্তিষ্কের প্রধান প্রতিরোধক নিউরোট্রান্সমিটার যা খিঁচুনি প্রতিরোধ করে।'
        ),
        color: '#0891b2',
        sectionId: 'practice',
      },
      {
        id: 'creatine-no-glutathione',
        label: l('7. Anabolic Triads: Creatine, Nitric Oxide & Glutathione', '৭. উপচিতিমূলক ত্রয়ী: ক্রিয়েটিন, নাইট্রিক অক্সাইড ও গ্লুটাথিয়ন'),
        description: l(
          'Arginine donates guanidino group for muscle phosphocreatine and forms nitric oxide (NO) via NOS; cysteine provides reactive thiol for glutathione.',
          'আর্জিনিন পেশির ফসফোক্রিয়েটিন তৈরির গুয়ানিডিনো গ্রুপ দেয় এবং নাইট্রিক অক্সাইড বানায়; সিস্টিন গ্লুটাথিয়নের সক্রিয় থায়োল গ্রুপ জোগায়।'
        ),
        details: l(
          'Nitric oxide regulates endothelial vasodilation and blood pressure; reduced glutathione (GSH) is the master protector against oxidative hemolysis.',
          'নাইট্রিক অক্সাইড রক্তনালী প্রসারিত করে রক্তচাপ নিয়ন্ত্রণ করে; বিজারিত গ্লুটাথিয়ন কোষকে ক্ষতিকর ফ্রি র্যাডিক্যাল ধ্বংস থেকে রক্ষা করে।'
        ),
        color: '#16a34a',
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
          heading: l('Introduction: Recycling Amino Acid Carbon Backbones', 'ভূমিকা: অ্যামিনো অ্যাসিডের কার্বন কঙ্কালের পুনর্ব্যবহার'),
          paragraphs: [
            l(
              'Once the toxic nitrogen amino group is stripped off an amino acid in the liver, what remains is an organic carbon skeleton called an alpha-keto acid. Rather than throwing these carbon backbones away, the human body uses them as high-value metabolic fuel. Every single one of the twenty amino acids has a specific biochemical route that funnels its carbon skeleton into central energy metabolism.',
              'যকৃতে অ্যামিনো অ্যাসিড থেকে বিষাক্ত নাইট্রোজেন অংশটি আলাদা করার পর যা অবশিষ্ট থাকে তাকে আলফা-কিটো অ্যাসিড বা কার্বন কঙ্কাল বলা হয়। এই মূল্যবান কার্বন কঙ্কাল ফেলে দেওয়ার পরিবর্তে মানবদেহ এদেরকে উচ্চ-ক্ষমতাসম্পন্ন জ্বালানি হিসেবে পুনর্ব্যবহার করে। মানবদেহের বিশটি অ্যামিনো অ্যাসিডের প্রতিটির নিজস্ব সুনির্দিষ্ট জৈবরাসায়নিক পথ রয়েছে যার মাধ্যমে এদের মূল বিপাকীয় ইঞ্জিনে পরিচালিত করা হয়।'
            ),
            l(
              'These carbon skeletons converge onto just seven universal intermediates: pyruvate, acetyl-CoA, acetoacetate, alpha-ketoglutarate, succinyl-CoA, fumarate, or oxaloacetate. Depending on which intermediate an amino acid forms, it is classified as either glucogenic (capable of being turned into new glucose) or ketogenic (capable of forming ketone bodies and fats).',
              'এই বিশটি অ্যামিনো অ্যাসিডের কার্বন কঙ্কাল মূলত সাতটি সার্বজনীন মধ্যবর্তী যৌগে রূপান্তরিত হয়: পাইরুভেট, অ্যাসিটাইল-কোএ, অ্যাসিটোঅ্যাসিটেট, আলফা-কিটোগ্লুটারেট, সাকসিনাইল-কোএ, ফিউমারেট এবং অক্সালোঅ্যাসিটেট। কোন যৌগটি তৈরি হয় তার ওপর ভিত্তি করে অ্যামিনো অ্যাসিডকে গ্লুকোজেনিক (যা থেকে নতুন গ্লুকোজ বানানো সম্ভব) অথবা কিটোজেনিক (যা থেকে কিটোন বডি ও চর্বি তৈরি হয়) বলা হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Branched-Chain Amino Acids: Fueling Muscle & Maple Syrup Urine Disease', 'ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিড: পেশির জ্বালানি ও ম্যাপল সিরাপ রোগ'),
          paragraphs: [
            l(
              'Three essential amino acids—leucine, isoleucine, and valine—are called branched-chain amino acids (BCAAs) because their carbon tails branch out like tree limbs. Unlike most other amino acids, which are broken down in the liver, BCAAs are burned predominantly in skeletal muscle, heart, and brain tissue to generate quick aerobic energy during exercise and fasting.',
              'তিনটি অপরিহার্য অ্যামিনো অ্যাসিড—লিউসিন, আইসোলিউসিন এবং ভ্যালিন—তাদের গাছের ডালের মতো শাখান্বিত গঠনের কারণে ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিড (BCAA) নামে পরিচিত। অন্যান্য অ্যামিনো অ্যাসিডের মতো এরা প্রধানত যকৃতে ভাঙে না; বরং ব্যায়াম ও উপবাসের সময় কঙ্কালপেশি, হৃদযন্ত্র এবং মস্তিষ্কে সরাসরি জারিত হয়ে প্রচুর তাৎক্ষণিক বায়বীয় শক্তি উৎপন্ন করে।'
            ),
            l(
              'To break down these branched chains, cells use a specialized multi-part molecular machine called the branched-chain alpha-keto acid dehydrogenase (BCKDH) complex. If a baby is born with a defective BCKDH machine, toxic branched ketoacids accumulate in the blood and brain, causing severe brain damage and giving the infant urine and earwax a distinctive sweet smell like maple syrup or burnt sugar.',
              'এই শাখান্বিত চেইনগুলোকে ভাঙতে কোষ BCKDH নামক একটি জটিল বহু-অংশ বিশিষ্ট আণবিক যন্ত্র ব্যবহার করে। কোনো শিশু যদি জন্মগতভাবে এই ত্রুটি নিয়ে জন্মায়, তবে তার রক্ত ও মস্তিষ্কে বিষাক্ত কিটো অ্যাসিড জমা হয়ে মারাত্মক স্নায়বিক ক্ষতি ঘটায় এবং তার প্রস্রাবে ম্যাপল সিরাপ বা পোড়া চিনির মতো মিষ্টি সুগন্ধ তৈরি করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Aromatic Amino Acids: The Phenylketonuria (PKU) Story', 'অ্যারোমেটিক অ্যামিনো অ্যাসিড: ফিনাইলকিটোনুরিয়ার (PKU) আণবিক ইতিহাস'),
          paragraphs: [
            l(
              'The aromatic amino acids possess bulky chemical ring structures. The essential amino acid phenylalanine is normally converted into tyrosine by an enzyme called phenylalanine hydroxylase (PAH), which uses a special molecular cofactor called tetrahydrobiopterin (BH4). Tyrosine is then used to synthesize essential proteins, thyroid hormones, and brain chemicals.',
              'অ্যারোমেটিক অ্যামিনো অ্যাসিডগুলোর কাঠামোতে বিশেষ বলয় থাকে। মানবদেহের জন্য অপরিহার্য ফিনাইলঅ্যালানিনকে ফিনাইলঅ্যালানিন হাইড্রক্সিলেজ (PAH) এনজাইম টেট্রাহাইড্রোবায়োপ্টেরিন (BH4) সহযোগে টাইরোসিনে রূপান্তর করে। এই টাইরোসিন পরবর্তীতে দেহের গুরুত্বপূর্ণ প্রোটিন, থাইরয়েড হরমোন এবং মস্তিষ্কের বিভিন্ন রাসায়নিক তৈরি করতে ব্যবহৃত হয়।'
            ),
            l(
              'In classical Phenylketonuria (PKU), a baby inherits two defective copies of the PAH gene. Phenylalanine cannot be converted to tyrosine and skyrockets to toxic levels in the blood, blocking the entry of other nutrients into the brain and causing severe intellectual disability. Modern newborn screening tests baby heel blood at birth, allowing early intervention with a low-phenylalanine diet that enables children with PKU to develop completely normally.',
              'ক্লাসিক্যাল ফিনাইলকিটোনুরিয়া (PKU) রোগে শিশুরা বংশগতভাবে ত্রুটিপূর্ণ PAH জিন পায়। ফলে ফিনাইলঅ্যালানিন জমতে জমতে রক্তে বিষাক্ত হয়ে যায় এবং মস্তিষ্কে অন্যান্য পুষ্টি উপাদানের প্রবেশ আটকে মারাত্মক বুদ্ধিবৈকল্য ঘটায়। আধুনিক নবজাতক রক্ত পরীক্ষার মাধ্যমে জন্মমুহূর্তেই এটি শনাক্ত করে নিয়ন্ত্রিত খাদ্যতালিকা দেওয়ার মাধ্যমে শিশুদের সম্পূর্ণ স্বাভাবিকভাবে বড় তোলা সম্ভব হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The One-Carbon SAM Cycle: The Body Master Molecular Stamp', 'এক-কার্বন SAM চক্র: দেহের প্রধান আণবিক মিথাইল মোহর'),
          paragraphs: [
            l(
              'Cells frequently need to attach single carbon methyl groups (-CH3) onto molecules to turn genes on or off, synthesize cell membranes, and produce neurotransmitters. The universal provider of these methyl tags is S-adenosylmethionine (SAM), derived from the sulfur-containing amino acid methionine using energy from ATP.',
              'কোষে প্রায়শই বিভিন্ন অণুর গায়ে একক কার্বনের মিথাইল মূলক (-CH3) যুক্ত করতে হয়, যা জিন নিয়ন্ত্রণ, কোষপর্দা তৈরি এবং নিউরোট্রান্সমিটার সংশ্লেষের জন্য অপরিহার্য। এই মিথাইল মূলক সরবরাহের সার্বজনীন উৎস হলো SAM, যা মিথায়োনিন অ্যামিনো অ্যাসিডের সাথে এটিপি যুক্ত হয়ে তৈরি হয়।'
            ),
            l(
              'After donating its methyl tag, SAM becomes homocysteine. To prevent dangerous homocysteine from accumulating and damaging blood vessels, the body uses vitamin B12 and folate to turn it back into methionine, or vitamin B6 to convert it into harmless cysteine. Deficiencies in these vitamins cause elevated homocysteine, increasing the risk of blood clots and cardiovascular disease.',
              'মিথাইল মূলক দান করার পর SAM হোমোসিস্টিনে পরিণত হয়। অতিরিক্ত হোমোসিস্টিন রক্তনালী ধ্বংস করতে পারে; তাই শরীর ভিটামিন বি১২ ও ফোলেট ব্যবহার করে একে পুনরায় মিথায়োনিনে রূপান্তরিত করে অথবা ভিটামিন বি৬ দিয়ে সিস্টিনে পরিণত করে। এই ভিটামিনগুলোর ঘাটতি রক্তে হোমোসিস্টিন বাড়িয়ে রক্ত জমাট বাঁধা ও হৃদরোগের ঝুঁকি বৃদ্ধি করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Reasoning: Neurotransmitters from Amino Acids', 'মৌলিক যুক্তি: অ্যামিনো অ্যাসিড থেকে নিউরোট্রান্সমিটার গঠন'),
          paragraphs: [
            l(
              'Amino acids do not just build muscle fibers; they are the primary raw building blocks for our entire nervous system. Tyrosine is sculpted into L-DOPA, dopamine, norepinephrine, and epinephrine to drive alertness, mood, and fight-or-flight responses. Tryptophan is converted into serotonin (the calm mood chemical) and melatonin (which sets our sleep-wake cycle).',
              'অ্যামিনো অ্যাসিড কেবল পেশি তৈরি করে না; এরা আমাদের সমগ্র স্নায়ুতন্ত্রের প্রধান কাঁচামাল। টাইরোসিন থেকে তৈরি হয় ডোপামিন ও এপিনেফ্রিন যা সতর্কতা ও মানসিক শক্তি জোগায়। ট্রিপটোফ্যান থেকে তৈরি হয় সেরোটোনিন (যা মনের প্রফুল্লতা রক্ষা করে) এবং মেলাটোনিন (যা আমাদের স্বাভাবিক ঘুমের চক্র নিয়ন্ত্রণ করে)।'
            ),
          ],
          bullets: [
            l('Glutamate is decarboxylated via vitamin B6 to create GABA, the brain chief calming neurotransmitter.', 'গ্লুটামেট থেকে ভিটামিন বি৬-এর সাহায্যে GABA তৈরি হয়, যা মস্তিষ্কের প্রধান প্রশান্তিদায়ক রাসায়নিক।'),
            l('Arginine is converted into nitric oxide (NO) to dilate blood vessels and creatine to store muscle energy.', 'আর্জিনিন থেকে রক্তনালী প্রসারক নাইট্রিক অক্সাইড এবং পেশির শক্তিভাণ্ডার ক্রিয়েটিন তৈরি হয়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Foundational Takeaways & Summary', 'মূল শিক্ষণীয় বিষয় ও সংক্ষিপ্ত সারসংক্ষেপ'),
          paragraphs: [
            l(
              'The 20 amino acid carbon skeletons converge into seven universal intermediates of central metabolism. Leucine and lysine are purely ketogenic, while thirteen are purely glucogenic. Inborn defects such as PKU and MSUD highlight the critical importance of these degradation pathways, while specialized branches generate life-sustaining neurotransmitters, nitric oxide, creatine, and cellular antioxidants.',
              'বিশটি অ্যামিনো অ্যাসিডের কার্বন কঙ্কাল মূল বিপাকের সাতটি সার্বজনীন সংযোগস্থলে প্রবেশ করে। লিউসিন ও লাইসিন সম্পূর্ণ কিটোজেনিক এবং তেরটি সম্পূর্ণ গ্লুকোজেনিক। PKU এবং MSUD-এর মতো রোগগুলো এই গতিপথের অপরিহার্যতা তুলে ধরে, আর এর বিশেষ শাখাগুলো আমাদের জীবনরক্ষাকারী নিউরোট্রান্সমিটার, নাইট্রিক অক্সাইড, ক্রিয়েটিন ও অ্যান্টিঅক্সিডেন্ট তৈরি করে।'
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
          heading: l('Convergence onto Seven Intermediates & Glucogenic/Ketogenic Classification', 'সাতটি মধ্যবর্তী সংযোগস্থলে একত্রীকরণ ও গ্লুকোজেনিক/কিটোজেনিক বিভাজন'),
          paragraphs: [
            l(
              'Following the removal of alpha-amino nitrogen, the resulting carbon skeletons of the twenty proteinogenic amino acids are channeled into the citric acid cycle or gluconeogenesis through seven fundamental metabolic intermediates: pyruvate, acetyl-CoA, acetoacetate, alpha-ketoglutarate, succinyl-CoA, fumarate, and oxaloacetate. The classification of amino acids as glucogenic or ketogenic reflects the precise thermodynamic architecture of mammalian metabolism.',
              'আলফা-অ্যামিনো নাইট্রোজেন অপসারিত হওয়ার পর বিশটি অ্যামিনো অ্যাসিডের কার্বন কঙ্কাল সাতটি সার্বজনীন মধ্যবর্তী যৌগে রূপান্তরিত হয়ে সাইট্রিক অ্যাসিড চক্র বা গ্লুকোনিওজেনেসিসে প্রবেশ করে: পাইরুভেট, অ্যাসিটাইল-কোএ, অ্যাসিটোঅ্যাসিটেট, আলফা-কিটোগ্লুটারেট, সাকসিনাইল-কোএ, ফিউমারেট এবং অক্সালোঅ্যাসিটেট। এই বিভাজন স্তন্যপায়ীদের বিপাকীয় তাপগতিবিদ্যার সুনির্দিষ্ট নীতি দ্বারা নির্ধারিত হয়।'
            ),
            l(
              'An amino acid is strictly ketogenic if its catabolism yields only acetyl-CoA or acetoacetate (leucine and lysine). Because the pyruvate dehydrogenase multienzyme complex is irreversible in mammals, carbons entering as acetyl-CoA are oxidized to two molecules of CO2 in the TCA cycle before oxaloacetate is regenerated, precluding net carbon synthesis of glucose. Five amino acids (phenylalanine, tyrosine, tryptophan, isoleucine, and threonine) are both glucogenic and ketogenic because their complex ring or branched structures are split into both acetyl-CoA and glucogenic precursors (fumarate, succinyl-CoA, or pyruvate). The remaining thirteen amino acids are purely glucogenic.',
              'যদি কোনো অ্যামিনো অ্যাসিড ভাঙলে কেবল অ্যাসিটাইল-কোএ বা অ্যাসিটোঅ্যাসিটেট পাওয়া যায় তবে তা সম্পূর্ণ কিটোজেনিক (লিউসিন ও লাইসিন)। পাইরুভেট ডিহাইড্রোজিনেজ অপরিবর্তনীয় হওয়ায় অ্যাসিটাইল-কোএ-র দুটি কার্বন টিসিএ চক্রে CO2 হিসেবে অপসৃত হয়, ফলে নেট গ্লুকোজ তৈরি অসম্ভব। পাঁচটি অ্যামিনো অ্যাসিড দ্বৈত বৈশিষ্ট্যের (ফিনাইলঅ্যালানিন, টাইরোসিন, ট্রিপটোফ্যান, আইসোলিউসিন, থ্রিওনিন) কারণ এদের ভেঙে কিটোজেনিক ও গ্লুকোজেনিক উভয় অংশ পাওয়া যায়। বাকি ১৩টি সম্পূর্ণ গ্লুকোজেনিক।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Branched-Chain Amino Acid Catabolism & The BCKDH Complex in MSUD', 'ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিড ভাঙন ও MSUD-তে BCKDH কমপ্লেক্স'),
          paragraphs: [
            l(
              'Catabolism of the branched-chain amino acids (leucine, isoleucine, valine) occurs primarily in skeletal muscle, cardiac myocytes, and adipose tissue, which possess high activities of branched-chain aminotransferase (BCAT), an enzyme absent in liver. BCAT transaminates BCAAs with alpha-ketoglutarate to form branched-chain alpha-keto acids: alpha-ketoisocaproate (from leucine), alpha-keto-beta-methylvalerate (from isoleucine), and alpha-ketoisovalerate (from valine).',
              'ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিডগুলোর ভাঙন প্রধানত কঙ্কালপেশি, হৃদপেশি ও চর্বি কোষে ঘটে যেখানে উচ্চমাত্রার ব্রাঞ্চড-চেইন অ্যামিনোট্রান্সফারেজ (BCAT) থাকে, যা যকৃতে প্রায় অনুপস্থিত। BCAT এনজাইম লিউসিন, আইসোলিউসিন ও ভ্যালিনের অ্যামিনো মূলক সরিয়ে এদেরকে যথাক্রমে আলফা-কিটোআইসোক্যাপ্রোয়েট, আলফা-কিটো-বিটা-মিথাইলভ্যালেরেট এবং আলফা-কিটোআইসোভ্যালেরেট নামক আলফা-কিটো অ্যাসিডে রূপান্তর করে।'
            ),
            l(
              'Step two is catalyzed by the branched-chain alpha-keto acid dehydrogenase (BCKDH) complex, an inner mitochondrial membrane multienzyme machine structurally and mechanistically homologous to the pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase complexes. BCKDH utilizes five cofactors: thiamine pyrophosphate (TPP), lipoate, coenzyme A, FAD, and NAD+. Mutations in any of the catalytic subunits (E1alpha, E1beta, E2) produce Maple Syrup Urine Disease (MSUD), characterized by toxic accumulation of BCAAs and their ketoacids, cerebral edema, severe ketoacidosis, and a classic sweet odor resembling maple syrup in cerumen and urine.',
              '২য় ধাপটি সম্পন্ন করে মাইটোকন্ড্রিয়ার BCKDH বহু-এনজাইম কমপ্লেক্স যা পাইরুভেট ডিহাইড্রোজিনেজের অনুরূপ এবং পাঁচটি কোফ্যাক্টর (TPP/বি১, লিপোয়েট, কোএ, FAD ও NAD+) ব্যবহার করে। এর যেকোনো সাবইউনিটের মিউটেশন ম্যাপল সিরাপ ইউরিন ডিজিজ (MSUD) ঘটায়; এতে শাখান্বিত কিটো অ্যাসিড রক্ত ও মস্তিষ্কে জমা হয়ে মারাত্মক সেরিব্রাল ইডিমা এবং প্রস্রাব ও কানের খৈলে ম্যাপল সিরাপের মতো মিষ্টি গন্ধ সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Aromatic Catabolism: Phenylalanine, Tyrosine, PKU & Alkaptonuria', 'অ্যারোমেটিক ভাঙন: ফিনাইলঅ্যালানিন, টাইরোসিন, PKU ও অ্যালক্যাপটনুরিয়া'),
          paragraphs: [
            l(
              'Phenylalanine catabolism is initiated by phenylalanine hydroxylase (PAH), a mixed-function oxygenase in hepatocytes that uses molecular oxygen to hydroxylate phenylalanine into tyrosine. PAH requires the non-protein cofactor (6R)-L-erythro-tetrahydrobiopterin (BH4). During the reaction, BH4 is oxidized to quinonoid dihydrobiopterin (qBH2), which must be reduced back to BH4 by dihydropteridine reductase (DHPR) using NADH. Mutations in the PAH gene (chromosome 12q23.2) account for over 98 percent of Phenylketonuria (PKU) cases, while defects in DHPR or biopterin synthesis cause malignant variant PKU refractory to dietary phenylalanine restriction.',
              'ফিনাইলঅ্যালানিন ভাঙনের সূচনা করে যকৃতের ফিনাইলঅ্যালানিন হাইড্রক্সিলেজ (PAH) এনজাইম, যা অক্সিজেন ও টেট্রাহাইড্রোবায়োপ্টেরিন (BH4) ব্যবহার করে একে টাইরোসিনে পরিণত করে। বিক্রিয়ায় জারিত হওয়া ডাইহাইড্রোবায়োপ্টেরিনকে পুনরায় BH4-এ বিজারিত করে DHPR এনজাইম। PAH জিনের মিউটেশন ৯৮ শতাংশ ক্লাসিক্যাল PKU-র কারণ, আর DHPR বা বায়োপ্টেরিন তৈরির ত্রুটির কারণে মারাত্মক ভ্যারিয়েন্ট PKU ঘটে যা সাধারণ খাদ্য নিয়ন্ত্রণের ওষুধে সারে না।'
            ),
            l(
              'Tyrosine degradation continues through 4-hydroxyphenylpyruvate to homogentisic acid. Homogentisate 1,2-dioxygenase (HGD) cleaves the aromatic ring of homogentisate to form maleylacetoacetate, which is ultimately converted to fumarate (glucogenic) and acetoacetate (ketogenic). Inborn deficiency of HGD causes alkaptonuria, characterized by accumulation of homogentisic acid that auto-oxidizes into a dark brown-black pigment on standing in alkaline urine and deposits in connective tissue cartilages (ochronosis), predisposing to severe early-onset degenerative arthropathy.',
              'টাইরোসিন ভেঙে পরবর্তীতে হোমোজেন্টিসিক অ্যাসিড উৎপন্ন হয়। হোমোজেন্টিসেট ১,২-ডাইঅক্সিজিনেজ (HGD) এনজাইম এই বলয়টিকে ভেঙে ফিউমারেট ও অ্যাসিটোঅ্যাসিটেট তৈরি করে। HGD-র জন্মগত ঘাটতি অ্যালক্যাপটনুরিয়া ঘটায়; এতে অতিরিক্ত হোমোজেন্টিসিক অ্যাসিড প্রস্রাবে বেরিয়ে বাতাসে জারিত হয়ে কালো বর্ণ ধারণ করে এবং তরুণাস্থিতে জমা হয়ে মারাত্মক জয়েন্টের বাত সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The One-Carbon Metabolism Engine: SAM, Homocysteine, B12 & Folate', 'এক-কার্বন বিপাকীয় ইঞ্জিন: SAM, হোমোসিস্টিন, ভিটামিন বি১২ ও ফোলেট'),
          paragraphs: [
            l(
              'S-adenosylmethionine (SAM) serves as the primary methyl donor for over two hundred distinct cellular methyltransferases modifying DNA, RNA, histones, phospholipids, and neurotransmitters. Methionine adenosyltransferase (MAT) synthesizes SAM from methionine and ATP, generating a high-energy sulfonium center with exceptional methyl transfer potential. Methyl donation yields S-adenosylhomocysteine (SAH), which is cleaved by SAH hydrolase into adenosine and homocysteine.',
              'এস-অ্যাডেনোসিলমিথায়োনিন (SAM) মানবদেহের দুই শতাধিক মিথাইলট্রান্সফারেজ এনজাইমের প্রধান মিথাইল সরবরাহকারী হিসেবে কাজ করে ডিএনএ, হিস্টোন ও লিপিডকে সক্রিয় করে। MAT এনজাইম মিথায়োনিন ও এটিপি থেকে SAM তৈরি করে যার সালফোনিয়াম কেন্দ্রটি মিথাইল গ্রুপকে অত্যন্ত সক্রিয় করে তোলে। মিথাইল দানের পর SAH তৈরি হয় যা ভেঙে অ্যাডেনোসিন ও হোমোসিস্টিন মুক্ত করে।'
            ),
            l(
              'Homocysteine resides at a critical metabolic crossroads: it can be remethylated to methionine or shunted into the transsulfuration pathway to form cysteine. Remethylation requires methionine synthase, which uses methylcobalamin (vitamin B12) to transfer a methyl group from N5-methyltetrahydrofolate (N5-methyl-THF), directly linking the SAM cycle to the folate pool. Severe deficiency of cystathionine beta-synthase (CBS, requiring vitamin B6) or folate/B12 causes classical homocystinuria, manifesting with ectopia lentis (downward lens dislocation), marfanoid habitus, osteoporosis, and life-threatening premature thromboembolism.',
              'হোমোসিস্টিন একটি গুরুত্বপূর্ণ সন্ধিস্থলে থাকে: এটি পুনরায় মিথায়োনিন হতে পারে অথবা ভিটামিন বি৬ দিয়ে সিস্টিনে রূপান্তরিত হতে পারে। পুনরায় মিথায়োনিন তৈরিতে মিথায়োনিন সিন্থেজ এনজাইম ভিটামিন বি১২ এবং মিথাইল-ফোলেট ব্যবহার করে। সিস্টাথায়োনিন বিটা-সিন্থেজ (CBS) বা ভিটামিন বি১২/ফোলেটের ঘাটতিতে হোমোসিস্টিনুরিয়া রোগ হয়; এতে চোখের লেন্স স্থানচ্যুত হয়, হাড় ভঙ্গুর হয় এবং রক্তনালীতে রক্ত জমাট বেঁধে অকালমৃত্যু ঘটতে পারে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Specialized Anabolic Derivatives: Neurotransmitters, Creatine & Nitric Oxide', 'বিশেষ উপচিতিমূলক উপাদান: নিউরোট্রান্সমিটার, ক্রিয়েটিন ও নাইট্রিক অক্সাইড'),
          paragraphs: [
            l(
              'Amino acids serve as the obligate precursors for human signaling and bioenergetic systems. Tyrosine is hydroxylated by tyrosine hydroxylase (BH4-dependent, rate-limiting) to L-DOPA, which aromatic L-amino acid decarboxylase (PLP-dependent) converts to dopamine. Dopamine beta-hydroxylase (copper- and ascorbate-dependent) forms norepinephrine, and phenylethanolamine N-methyltransferase (PNMT, SAM-dependent) methylates norepinephrine to epinephrine. In melanocytes, tyrosinase oxidizes tyrosine to dopaquinone for melanin synthesis; albinism stems from autosomal recessive tyrosinase mutations.',
              'অ্যামিনো অ্যাসিড মানবদেহের স্নায়বিক ও শক্তি ব্যবস্থার অপরিহার্য অগ্রদূত। টাইরোসিন থেকে টাইরোসিন হাইড্রক্সিলেজ দিয়ে এল-ডোপা এবং ডিকার্বক্সিলেজ দিয়ে ডোপামিন তৈরি হয়। ডোপামিন বিটা-হাইড্রক্সিলেজ নর-এপিনেফ্রিন তৈরি করে এবং SAM-নির্ভর PNMT এনজাইম একে এপিনেফ্রিনে রূপান্তর করে। মেলানোসাইটে টাইরোসিনেজ এনজাইম মেলানিন বানায়, যার বংশগত ত্রুটি অ্যালবিনিজম সৃষ্টি করে।'
            ),
            l(
              'Tryptophan is converted by tryptophan hydroxylase (BH4-dependent) and aromatic amino acid decarboxylase into serotonin (5-HT), which the pineal gland acetylates and methylates into melatonin. Arginine condenses with glycine via AGAT in the kidneys to form guanidinoacetate, which the liver methylates via GAMT using SAM to yield creatine, exported to muscle for ATP buffering as phosphocreatine. Nitric oxide synthases (eNOS, nNOS, iNOS) convert arginine and oxygen into nitric oxide (NO) and citrulline, governing systemic vasodilation, while cysteine condenses with glutamate and glycine to form the antioxidant glutathione (GSH).',
              'ট্রিপটোফ্যান থেকে সেরোটোনিন ও ঘুমের মেলাটোনিন তৈরি হয়। বৃক্ক ও যকৃতে আর্জিনিন ও গ্লাইসিন থেকে SAM সহযোগে ক্রিয়েটিন তৈরি হয় যা পেশিতে ফসফোক্রিয়েটিন হিসেবে শক্তি জমা রাখে। নাইট্রিক অক্সাইড সিন্থেজ (NOS) আর্জিনিন থেকে নাইট্রিক অক্সাইড গ্যাস তৈরি করে রক্তনালী প্রসারিত রাখে এবং সিস্টিন, গ্লুটামেট ও গ্লাইসিন একত্রিত হয়ে প্রধান অ্যান্টিঅক্সিডেন্ট গ্লুটাথিয়ন (GSH) গঠন করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Takeaways & Energetic Logic of Amino Acid Anabolism', 'একাডেমিক সারাংশ ও অ্যামিনো অ্যাসিড উপচিতি বিজ্ঞানের মূল রূপরেখা'),
          paragraphs: [
            l(
              'The catabolism of amino acid carbon skeletons displays exquisite architectural precision, routing twenty distinct structures into seven central crossroads. Glucogenic carbon skeletons can generate net glucose, whereas purely ketogenic skeletons (leucine, lysine) cannot. Multi-enzyme complexes (BCKDH) and hydroxylases (PAH) coordinate critical branch points whose disruption produces catastrophic clinical inborn errors. Concurrently, amino acids supply the nitrogen and carbon cores for the body entire neurotransmitter, antioxidant, and methyl transfer infrastructure.',
              'অ্যামিনো অ্যাসিডের কার্বন কঙ্কাল ভাঙনের প্রক্রিয়াটি এক অবিশ্বাস্য নির্ভুলতায় পরিচালিত হয় যা বিশটি ভিন্ন গঠনকে সাতটি মূল মোড়ে পৌঁছে দেয়। গ্লুকোজেনিক কঙ্কাল নেট গ্লুকোজ তৈরি করতে পারলেও সম্পূর্ণ কিটোজেনিক কঙ্কাল (লিউসিন, লাইসিন) তা পারে না। BCKDH ও PAH-এর মতো বহু-এনজাইম কমপ্লেক্সের ত্রুটি মারাত্মক জন্মগত রোগ সৃষ্টি করে। একই সাথে এই অ্যামিনো অ্যাসিডগুলো দেহের সকল নিউরোট্রান্সমিটার, অ্যান্টিঅক্সিডেন্ট ও মিথাইল স্থানান্তরের অপরিহার্য ভিত্তি যোগায়।'
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
          heading: l('Malignant Hyperphenylalaninemia & Tetrahydrobiopterin Regeneration Deficits', 'ম্যালিগন্যান্ট হাইপারফিনাইলঅ্যালানিনেমিয়া ও টেট্রাহাইড্রোবায়োপ্টেরিন ঘাটতি'),
          paragraphs: [
            l(
              'Approximately two percent of infants with hyperphenylalaninemia do not harbor mutations in the PAH gene itself, but instead suffer from defects in BH4 biosynthesis (e.g., 6-pyruvoyltetrahydropterin synthase deficiency) or recycling (dihydropteridine reductase, DHPR deficiency). Because BH4 is also the obligate cofactor for tyrosine hydroxylase and tryptophan hydroxylase, these patients suffer from severe systemic deficiency of central dopamine, norepinephrine, and serotonin. Simple dietary phenylalanine restriction fails to halt progressive neurological deterioration, requiring pharmacologic BH4 supplementation (sapropterin dihydrochloride) and neurotransmitter precursor replacement (L-DOPA/carbidopa and 5-hydroxytryptophan).',
              'হাইপারফিনাইলঅ্যালানিনেমিয়ায় আক্রান্ত প্রায় ২ শতাংশ শিশুর PAH জিনে কোনো ত্রুটি থাকে না, বরং টেট্রাহাইড্রোবায়োপ্টেরিন (BH4) তৈরি বা পুনর্ব্যবহারের (DHPR) এনজাইমে ত্রুটি থাকে। যেহেতু BH4 টাইরোসিন ও ট্রিপটোফ্যান হাইড্রক্সিলেজের জন্যও অপরিহার্য, তাই এই শিশুদের মস্তিষ্কে ডোপামিন ও সেরোটোনিনের মারাত্মক সংকট দেখা দেয়। এদের ক্ষেত্রে কেবল খাদ্য নিয়ন্ত্রণ যথেষ্ট নয়; কৃত্রিম BH4 ওষুধ (স্যাপ্রোপ্টেরিন) এবং সরাসরি নিউরোট্রান্সমিটার অগ্রদূত প্রয়োগ করতে হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Frontier Therapeutics: Enzyme Substitution & CRISPR Gene Editing in Inborn Errors', 'আধুনিক চিকিৎসা বিপ্লব: এনজাইম প্রতিস্থাপন ও সিআরআইএসপিআর জিন সম্পাদনা'),
          paragraphs: [
            l(
              'Translational medicine has transformed the management of inborn amino acid disorders. Pegvaliase is an FDA-approved PEGylated recombinant Anabaena variabilis phenylalanine ammonia lyase (PAL) that degrades circulating phenylalanine into harmless trans-cinnamic acid and ammonia, bypassing defective PAH entirely in adults with uncontrolled PKU. Simultaneously, in vivo CRISPR-Cas9 base editing targeting pathogenic splice mutations in PAH and BCKDHA is demonstrating durable metabolic normalization in humanized murine models, establishing the blueprint for curative somatic genome correction.',
              'চিকিৎসাবিজ্ঞান অ্যামিনো অ্যাসিডের জন্মগত রোগের চিকিৎসায় অভাবনীয় সাফল্য অর্জন করেছে। পেগভালিয়েজ নামক আধুনিক ওষুধ সরাসরি রক্তে ফিনাইলঅ্যালানিন ভেঙে ফেলে ত্রুটিপূর্ণ PAH এনজাইমকে সম্পূর্ণ পাশ কাটিয়ে রোগীদের স্বাভাবিক জীবনে ফিরিয়ে আনে। একই সাথে CRISPR-Cas9 জিন সম্পাদনা প্রযুক্তির মাধ্যমে ত্রুটিপূর্ণ PAH ও BCKDH জিন স্থায়ীভাবে সংশোধন করার গবেষণা সফল হয়েছে যা জেনেটিক রোগ মুক্তির নতুন দিগন্ত উন্মোচন করেছে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A comprehensive biochemical map showing the convergence of all twenty amino acid carbon skeletons onto the seven universal metabolic entry points (pyruvate, acetyl-CoA, acetoacetate, alpha-ketoglutarate, succinyl-CoA, fumarate, oxaloacetate) and branching into neurotransmitters and specialized products.',
      'সকল বিশটি অ্যামিনো অ্যাসিডের কার্বন কঙ্কালের সাতটি সার্বজনীন বিপাকীয় সংযোগস্থলে প্রবেশ এবং নিউরোট্রান্সমিটার ও বিশেষ যৌগে রূপান্তরের সম্পূর্ণ জৈবরাসায়নিক মানচিত্র।'
    ),
    steps: [
      l('Transaminated carbon skeletons enter the TCA cycle at seven specific junctions.', 'অ্যামিনোমুক্ত কার্বন কঙ্কালগুলো সাতটি সুনির্দিষ্ট মোড়ে সাইট্রিক অ্যাসিড চক্রে ঢোকে।'),
      l('Leucine and lysine form acetyl-CoA and acetoacetate, functioning as purely ketogenic fuels.', 'লিউসিন ও লাইসিন কেবল অ্যাসিটাইল-কোএ তৈরি করে সম্পূর্ণ কিটোজেনিক হিসেবে কাজ করে।'),
      l('BCAAs undergo oxidative decarboxylation by BCKDH; defects cause neurotoxic MSUD.', 'BCKDH এনজাইম BCAA জারিত করে; এর ত্রুটি মারাত্মক ম্যাপল সিরাপ রোগ সৃষ্টি করে।'),
      l('Aromatic and aliphatic residues yield catecholamines, serotonin, creatine, and glutathione.', 'অ্যারোমেটিক যৌগগুলো থেকে নিউরোট্রান্সমিটার, ক্রিয়েটিন এবং অ্যান্টিঅক্সিডেন্ট গ্লুটাথিয়ন তৈরি হয়।'),
    ],
  },
  assessment: {
    question: l(
      'A 6-day-old infant is brought to the emergency department with severe vomiting, muscular hypertonicity alternating with flaccidity, and a distinctive odor resembling burnt sugar or maple syrup in the diaper. Tandem mass spectrometry confirms elevated branched-chain amino acids and their branched alpha-keto acids. Which coenzyme is an indispensable catalytic cofactor for the defective multienzyme complex in this condition?',
      '৬ দিন বয়সী এক শিশুকে তীব্র বমি, পেশির খিঁচুনি এবং প্রস্রাবে পোড়া চিনি বা ম্যাপল সিরাপের মিষ্টি গন্ধ নিয়ে হাসপাতালে আনা হলো। পরীক্ষায় রক্তে ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিড ও কিটো অ্যাসিডের অস্বাভাবিক আধিক্য দেখা গেল। এই রোগে আক্রান্ত বহু-এনজাইম কমপ্লেক্সের জন্য কোন কোএনজাইমটি অপরিহার্য কোফ্যাক্টর হিসেবে কাজ করে?'
    ),
    options: [
      l(
        'Thiamine pyrophosphate (TPP, derived from vitamin B1).',
        'থায়ামিন পাইরোফসফেট (TPP, যা ভিটামিন বি১ থেকে আসে)।'
      ),
      l(
        'Biotin (vitamin B7 required for simple carboxylations).',
        'বায়োটিন (ভিটামিন বি৭ যা সাধারণ কার্বক্সিলেশনে লাগে)।'
      ),
      l(
        'Cobalamin (vitamin B12 used exclusively in mutase isomerizations).',
        'কোবালামিন (ভিটামিন বি১২ যা কেবল মিউটেজ বিক্রিয়ায় ব্যবহৃত হয়)।'
      ),
      l(
        'Folic acid (required for single-carbon methyl transfers).',
        'ফলিক অ্যাসিড (যা এক-কার্বন মিথাইল স্থানান্তরে লাগে)।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'This clinical scenario describes Maple Syrup Urine Disease (MSUD), caused by a deficiency in the mitochondrial branched-chain alpha-keto acid dehydrogenase (BCKDH) complex. BCKDH is analogous to pyruvate dehydrogenase and requires five cofactors: Thiamine pyrophosphate (TPP/B1), Lipoic acid, Coenzyme A (B5), FAD (B2), and NAD+ (B3). Thiamine pyrophosphate functions as the key catalytic cofactor in the E1 alpha-keto acid decarboxylase subunit, and thiamine-responsive variants of MSUD exist.',
      'এটি ম্যাপল সিরাপ ইউরিন ডিজিজ (MSUD)-এর ক্লাসিক্যাল লক্ষণ, যা মাইটোকন্ড্রিয়াল BCKDH কমপ্লেক্সের ঘাটতিতে ঘটে। পাইরুভেট ডিহাইড্রোজিনেজের মতো এই কমপ্লেক্সের জন্য পাঁচটি কোফ্যাক্টর প্রয়োজন হয় যার মধ্যে থায়ামিন পাইরোফসফেট (TPP/ভিটামিন বি১) হলো E1 সাবইউনিটের অপরিহার্য অনুঘটক। কিছু কিছু রোগীর ক্ষেত্রে উচ্চমাত্রার থায়ামিন প্রয়োগে রোগের উপশম ঘটে।'
    ),
  },
}
