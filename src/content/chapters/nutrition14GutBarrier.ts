import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const gutBarrierRefs = [
  {
    id: 'turner-nat-rev-immunol-tight-junctions',
    authors: 'Jerrold R. Turner',
    title: 'Intestinal mucosal barrier function in health and disease',
    organization: 'Nature Reviews Immunology',
    year: 2009,
    url: 'https://doi.org/10.1038/nri2653',
    doi: '10.1038/nri2653',
  },
  {
    id: 'peterson-nat-rev-immunol-mucosal-barrier',
    authors: 'Lance W. Peterson, David Artis',
    title: 'Intestinal epithelial cells: regulators of barrier function and immune homeostasis',
    organization: 'Nature Reviews Immunology',
    year: 2014,
    url: 'https://doi.org/10.1038/nri3608',
    doi: '10.1038/nri3608',
  },
  {
    id: 'chelakkot-signal-transduct-gut-barrier',
    authors: 'Chelakkot Chaithanya, Yejin Choi, Myoung-Dong Kim',
    title: 'Mechanisms of intestinal barrier dysfunction and its role in human diseases',
    organization: 'Signal Transduction and Targeted Therapy',
    year: 2018,
    url: 'https://doi.org/10.1038/s41392-018-0027-2',
    doi: '10.1038/s41392-018-0027-2',
  },
  {
    id: 'cani-diabetes-metabolic-endotoxemia',
    authors: 'Patrice D. Cani et al.',
    title: 'Metabolic endotoxemia initiates obesity and insulin resistance',
    organization: 'Diabetes',
    year: 2007,
    url: 'https://doi.org/10.2337/db06-1491',
    doi: '10.2337/db06-1491',
  },
  {
    id: 'marchiando-ann-rev-pathol-epithelial-barriers',
    authors: 'Amanda M. Marchiando, W. Vallen Graham, Jerrold R. Turner',
    title: 'Epithelial Barriers in Homeostasis and Disease',
    organization: 'Annual Review of Pathology: Mechanisms of Disease',
    year: 2010,
    url: 'https://doi.org/10.1146/annurev.pathol.4.110807.092135',
    doi: '10.1146/annurev.pathol.4.110807.092135',
  },
]

export const nutrition14GutBarrierLesson: LessonTopic = {
  id: 'topic.nutrition.gut-barrier-mucosal-immunity',
  slug: 'gut-barrier-mucosal-immunity',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '14 · The Gastrointestinal Barrier: Mucosal Immunity & Tight Junction Integrity',
    '১৪ · পরিপাক প্রাচীর: মিউকোসাল প্রতিরোধ ব্যবস্থা ও টাইট জাংশনের অখণ্ডতা'
  ),
  summary: l(
    'The cellular architecture and immunometabolic regulation of the human gastrointestinal barrier: the two-tiered MUC2 mucin shield and antimicrobial lectins (REG3gamma), apical junctional complexes (claudins, occludin, and ZO-1), myosin light chain kinase (MLCK) cytoskeletal gating, polymeric immunoglobulin receptor (pIgR) secretory IgA transcytosis, and the pathophysiological cascade of tight junction breakdown leading to luminal lipopolysaccharide (LPS) translocation, metabolic endotoxemia, and chronic systemic inflammation.',
    'মানব পরিপাক প্রাচীরের কোষীয় গঠন ও রোগপ্রতিরোধ নিয়ন্ত্রণ: দ্বি-স্তরবিশিষ্ট MUC2 মিউসিন ও অণুজীবনাশক লেকটিন (REG3gamma), শীর্ষস্থ জাংশনাল কমপ্লেক্স (ক্লডিন, অক্লুডিন ও ZO-1), মায়োসিন লাইট চেইন কাইনেজ (MLCK) সংকেতের মাধ্যমে সংকোচন, pIgR গ্রাহক সহযোগে ক্ষরণকারী IgA পরিবহন এবং টাইট জাংশন বিনষ্ট হয়ে ক্ষতিকর এন্ডোটক্সিন (LPS) প্রবেশ, বিপাকীয় প্রদাহ ও দীর্ঘস্থায়ী শারীরিক জটিলতার প্রক্রিয়া।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Map the tripartite structure of the intestinal mucosal barrier: the biochemical mucus layer, the physical epithelial monolayer, and the lamina propria immunological compartment.',
      'অন্ত্রের মিউকোসাল প্রাচীরের ত্রিস্তরীয় গঠন: জৈবরাসায়নিক মিউকাস স্তর, এপিথেলিয়াল ভৌত কোষস্তর এবং ল্যামিনা প্রোপ্রিয়ার প্রতিরোধ ব্যবস্থা চিহ্নিত করতে পারা।'
    ),
    l(
      'Detail the molecular assembly of tight junctions (claudin-1, claudin-2, occludin, JAMs, and ZO-1 scaffold) and contrast the pore pathway (selective ion flux) versus leak pathway (macromolecular passage).',
      'টাইট জাংশনের আণবিক সংগঠন (ক্লডিন, অক্লুডিন, ZO-1) এবং ক্ষুদ্র ছিদ্র পথ (আয়ন প্রবাহ) বনাম ফাটল পথ (বৃহৎ অণু প্রবেশ) এর পার্থক্য বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Explain how myosin light chain kinase (MLCK) phosphorylation and dietary factors (glutamine, zinc, butyrate, emulsifiers) regulate perijunctional actomyosin ring tension and paracellular permeability.',
      'মায়োসিন লাইট চেইন কাইনেজ (MLCK) এবং খাদ্য উপাদানসমূহ (গ্লুটামিন, জিঙ্ক, বিউটাইরেট, ইমালসিফায়ার) কীভাবে প্যারাসেলুলার শোষণ ও প্রাচীর নমনীয়তা নিয়ন্ত্রণ করে তা পর্যালোচনা করতে পারা।'
    ),
    l(
      'Trace the mechanism of metabolic endotoxemia: luminal lipopolysaccharide (LPS) translocation, TLR4/CD14 macrophage activation, and downstream low-grade systemic insulin resistance.',
      'বিপাকীয় এন্ডোটক্সেমিয়ার গতিপথ: ব্যাকটেরিয়াল LPS প্রবেশ, ম্যাক্রোফেজের TLR4/CD14 সক্রিয়করণ এবং এর ফলে সৃষ্ট দীর্ঘস্থায়ী প্রদাহ ও ইনসুলিন প্রতিরোধ্যতা ব্যাখ্যা করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.macronutrient-digestion', 'topic.nutrition.dietary-fiber-scfa'],
  relatedTopicIds: ['topic.metabolism.organ-metabolic-specialization', 'topic.anatomy.digestive'],
  references: gutBarrierRefs,
  evidenceBySection: {
    introduction: ['turner-nat-rev-immunol-tight-junctions', 'peterson-nat-rev-immunol-mucosal-barrier'],
    structure: ['turner-nat-rev-immunol-tight-junctions', 'marchiando-ann-rev-pathol-epithelial-barriers'],
    mechanism: ['turner-nat-rev-immunol-tight-junctions', 'chelakkot-signal-transduct-gut-barrier'],
    integration: ['cani-diabetes-metabolic-endotoxemia', 'chelakkot-signal-transduct-gut-barrier'],
    practice: ['cani-diabetes-metabolic-endotoxemia', 'turner-nat-rev-immunol-tight-junctions'],
    takeaways: ['peterson-nat-rev-immunol-mucosal-barrier', 'turner-nat-rev-immunol-tight-junctions'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Mucosal Battlefield: Surface Area & Barrier Architecture', '১. মিউকোসাল সীমানা: পৃষ্ঠীয় ক্ষেত্রফল ও প্রাচীর কাঠামো'), sectionId: 'introduction' },
      { id: 'sec-mucus', label: l('2. The Chemical Shield: MUC2 Glycocalyx, AMPs & Secretory IgA', '২. রাসায়নিক সুরক্ষা: MUC2 মিউসিন, পেপটাইড ও ক্ষরণকারী IgA'), sectionId: 'structure' },
      { id: 'sec-junctions', label: l('3. Apical Junctional Complexes: Claudins, Occludin & ZO-1 Scaffolding', '৩. শীর্ষস্থ জাংশনাল কমপ্লেক্স: ক্লডিন, অক্লুডিন ও ZO-1 মাচা'), sectionId: 'structure' },
      { id: 'sec-permeability', label: l('4. MLCK Cytoskeletal Gating & Pore vs Leak Pathways', '৪. MLCK সাইটোস্কেলিটাল গেটিং এবং পোর বনাম লিক পথ'), sectionId: 'mechanism' },
      { id: 'sec-endotoxemia', label: l('5. Dietary Disruption, LPS Translocation & Metabolic Endotoxemia', '৫. খাদ্যজনিত ক্ষতি, LPS প্রবেশ ও বিপাকীয় এন্ডোটক্সেমিয়া'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('6. Diagnostic Biomarkers & Practice Assessment', '৬. ডায়াগনস্টিক বায়োমার্কার ও অনুশীলন মূল্যায়ন'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('7. High-Yield Takeaways', '৭. মূল শিক্ষণীয় সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Tight Junction (Zonula Occludens)', 'টাইট জাংশন (জোনুলা অক্লুডেন্স)'),
        definition: l(
          'The most apical intercellular junctional complex between epithelial cells, composed of transmembrane claudins and occludin anchored to actin via ZO-1 scaffolding, which regulates paracellular permeability.',
          'এপিথেলিয়াল কোষগুলোর শীর্ষস্থ সীমানায় অবস্থিত প্রোটিন সিল যা ক্লডিন, অক্লুডিন ও ZO-1 প্রোটিনের মাধ্যমে কোষের ফাঁক দিয়ে উপাদানের যাতায়াত নিয়ন্ত্রণ করে।'
        ),
      },
      {
        term: l('Myosin Light Chain Kinase (MLCK)', 'মায়োসিন লাইট চেইন কাইনেজ (MLCK)'),
        definition: l(
          'A key regulatory kinase that phosphorylates myosin II regulatory light chain, driving perijunctional actomyosin ring contraction, which mechanically pulls tight junctions apart to dilate the paracellular leak pathway.',
          'এমন এক এনজাইম যা পেরিজাংশনাল অ্যাক্টোমায়োসিন রিংকে সংকুচিত করে টাইট জাংশনের ফাঁক বাড়িয়ে দেয়, ফলে ক্ষতিকর উপাদান সহজে রক্তে ঢুকতে পারে।'
        ),
      },
      {
        term: l('Secretory Immunoglobulin A (sIgA)', 'ক্ষরণকারী ইমিউনোগ্লোবুলিন এ (sIgA)'),
        definition: l(
          'A dimeric antibody linked by a J chain and protected by a secretory component, transcytosed via pIgR into the gut lumen to execute non-inflammatory immune exclusion of pathogens and toxins.',
          'অন্ত্রের প্রধান অ্যান্টিবডি যা এন্টারোসাইট দিয়ে পরিবাহিত হয়ে মিউকোসাল লুমেনে রোগজীবাণু ও অ্যালার্জেনকে নিষ্ক্রিয় করে নির্দোষভাবে মলের সাথে বের করে দেয়।'
        ),
      },
      {
        term: l('Metabolic Endotoxemia', 'বিপাকীয় এন্ডোটক্সেমিয়া'),
        definition: l(
          'A chronic 2- to 3-fold elevation in circulating bacterial lipopolysaccharide (LPS) leaking from the gut lumen, which activates macrophage TLR4/CD14 receptors, driving low-grade systemic inflammation and insulin resistance.',
          'অন্ত্রের প্রাচীর ক্ষতিগ্রস্ত হয়ে রক্তে ব্যাকটেরিয়াল LPS বিষাক্ত উপাদান ঢুকে যাওয়া, যা TLR4 রিসেপ্টরের মাধ্যমে দীর্ঘস্থায়ী শারীরিক প্রদাহ ও ইনসুলিন প্রতিরোধ্যতা তৈরি করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Evaluating Intestinal Permeability with the Lactulose/Mannitol Ratio', 'ল্যাকটুলোজ/ম্যানিটল অনুপাত পরীক্ষার মাধ্যমে অন্ত্রের প্রাচীর বিনষ্ট নির্ণয়'),
        steps: [
          l(
            'Step 1: A 45-year-old patient with metabolic syndrome and chronic abdominal bloating undergoes an intestinal permeability challenge by ingesting 5 g lactulose and 1 g mannitol followed by a 6-hour urine collection.',
            'ধাপ ১: মেটাবলিক সিন্ড্রোমে আক্রান্ত এক রোগী ৫ গ্রাম ল্যাকটুলোজ ও ১ গ্রাম ম্যানিটল সেবন করার পর ৬ ঘণ্টার প্রস্রাব সংগ্রহ করা হলো।'
          ),
          l(
            'Step 2: Understand Probe Biophysics: Mannitol (monosaccharide, radius 0.4 nm) freely crosses intact Pore pathways reflecting transcellular surface area, whereas lactulose (disaccharide, radius 0.52 nm) is physically excluded unless Leak pathways are dilated.',
            'ধাপ ২: অণুর আকার বিশ্লেষণ: ম্যানিটল ছোট হওয়ায় স্বাভাবিক পোর পথ দিয়ে প্রবেশ করে, কিন্তু বড় ল্যাকটুলোজ কেবল ক্ষতিগ্রস্ত লিক পথ দিয়েই ঢুকতে পারে।'
          ),
          l(
            'Step 3: Calculate the Excretion Ratio: Urinary mannitol recovery is 14% (normal 10–20%), but lactulose recovery is markedly elevated at 0.84% (normal <0.2%), yielding an LMR of 0.060 (normal reference cutoff <0.030).',
            'ধাপ ৩: অনুপাত গণনা: প্রস্রাবে ল্যাকটুলোজ অস্বাভাবিক বেশি পাওয়ায় LMR অনুপাত ০.০৬০ পাওয়া গেছে (স্বাভাবিক মাত্রার দ্বিগুণ)।'
          ),
          l(
            'Step 4: Clinical Interpretation: The elevated LMR demonstrates severe barrier breakdown of the paracellular leak pathway. Implement dietary interventions: remove ultra-processed emulsifiers, increase fermentable fiber (butyrate fuel), and provide supplemental L-glutamine and zinc.',
            'ধাপ ৪: চিকিৎসা পরিকল্পনা: এই উচ্চ অনুপাত অন্ত্রের প্রাচীর বিনষ্ট প্রমাণ করে। প্রক্রিয়াজাত খাবার বন্ধ করে খাদ্য আঁশ, এল-গ্লুটামিন ও জিঙ্ক প্রয়োগ করে প্রাচীর মেরামত করতে হবে।'
          ),
        ],
        conclusion: l(
          'Quantifying the differential excretion of lactulose vs mannitol provides objective validation of mucosal leakiness and guides targeted barrier restoration.',
          'ল্যাকটুলোজ ও ম্যানিটলের অনুপাত অন্ত্রের ক্ষতি নিরূপণের একটি অত্যন্ত নির্ভরযোগ্য ও প্রমাণভিত্তিক পরীক্ষা।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'How do dietary short-chain fatty acids (particularly butyrate) biochemically reinforce apical tight junctions and mucosal barrier defense?',
          'খাদ্য আঁশ থেকে উৎপন্ন বিউটাইরেট কোন সুনির্দিষ্ট জৈবরাসায়নিক প্রক্রিয়ায় অন্ত্রের টাইট জাংশন ও মিউকোসাল প্রাচীরকে শক্তিশালী করে?'
        ),
        answer: l(
          'Butyrate serves as the primary energetic substrate for colonocytes, sustaining high mitochondrial ATP production required for junctional protein synthesis. Mechanistically, butyrate functions as a pan-histone deacetylase (HDAC) inhibitor and activates AMP-activated protein kinase (AMPK). AMPK activation accelerates the assembly of ZO-1 and occludin into junctional strands, while HDAC inhibition promotes the transcription of claudin-1 and MUC2 mucin, actively sealing the paracellular leak pathway and expanding the sterile inner mucus hydrogel.',
          'বিউটাইরেট কোলনের কোষসমূহের প্রধান জ্বালানি হিসেবে এটিপি তৈরি করে। এটি হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) দমন করে এবং AMPK প্রোটিন সক্রিয় করে। এর ফলে ক্লডিন-১, ZO-1 এবং MUC2 মিউসিন জিনের প্রকাশ বহুগুণ বৃদ্ধি পায়, যা টাইট জাংশনের ফাটল বন্ধ করে এবং ক্ষতিকর জীবাণু প্রবেশ রুখে দেয়।'
        ),
      },
      {
        question: l(
          'Why do common ultra-processed food emulsifiers (e.g., polysorbate-80 and carboxymethylcellulose) promote low-grade systemic inflammation and metabolic syndrome?',
          'প্রক্রিয়াজাত খাবারের কৃত্রিম ইমালসিফায়ারগুলো (যেমন পলিসরবেট-৮০) কীভাবে শারীরিক প্রদাহ ও মেটাবলিক সিন্ড্রোম সৃষ্টি করে?'
        ),
        answer: l(
          'Dietary emulsifiers act as chemical detergents that solubilize the hydrophobic and electrostatic bonds holding the dense inner colonic mucus layer together. Mucus dissolution allows luminal bacteria to penetrate the normally sterile inner layer and make direct physical contact with apical enterocyte microvilli. This triggers enterocyte TLR4/5 signaling, activates Myosin Light Chain Kinase (MLCK) to dilate tight junctions, and promotes transcellular and paracellular leakage of LPS, culminating in chronic metabolic endotoxemia and insulin resistance.',
          'ইমালসিফায়ার মূলত সাবানের মতো কাজ করে বৃহদন্ত্রের সুরক্ষাকারী অভ্যন্তরীণ ঘন মিউসিন স্তরকে গুলিয়ে দেয়। এর ফলে ব্যাকটেরিয়াগুলো এন্টারোসাইটের কোষের সংস্পর্শে চলে আসে এবং MLCK এনজাইম সক্রিয় করে টাইট জাংশন খুলে ফেলে। রক্তে ব্যাকটেরিয়াল LPS প্রবেশ করার ফলে দীর্ঘস্থায়ী বিপাকীয় প্রদাহ ও ডায়াবেটিসের সৃষ্টি হয়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'gut-barrier-mlck-endotoxemia-cascade',
    title: l(
      'Intestinal Mucosal Barrier & Metabolic Endotoxemia Cascade',
      'অন্ত্রীয় মিউকোসাল প্রাচীর ও বিপাকীয় এন্ডোটক্সেমিয়া প্রবাহ'
    ),
    description: l(
      'Interactive architecture of mucosal defense layers: MUC2 mucus shield, tight junction gating, sIgA transcytosis, and LPS-induced systemic inflammation.',
      'মিউকোসাল প্রতিরক্ষা স্তরের আণবিক রূপরেখা: MUC2 মিউসিন ঢাল, টাইট জাংশন গেটিং, sIgA পরিবহন এবং LPS জনিত শারীরিক প্রদাহ।'
    ),
    disclaimer: l(
      'Educational mucosal barrier simulation; dietary and clinical interventions require qualified gastroenterological evaluation.',
      'মিউকোসাল প্রাচীরের শিক্ষামূলক সিমুলেশন; কোনো চিকিৎসার পূর্বে চিকিৎসকের পরামর্শ আবশ্যক।'
    ),
    svgType: 'barrier-cascade',
    items: [
      {
        id: 'node-mucus-shield',
        label: l('MUC2 Mucus & Antimicrobial Shield', 'MUC2 মিউসিন ও অণুজীবনাশক ঢাল'),
        description: l(
          'Goblet cells secrete polymeric MUC2 mucin creating a sterile inner colonic barrier, reinforced by Paneth cell antimicrobial lectins.',
          'গবলেট কোষ থেকে নিঃসৃত MUC2 মিউসিন একটি নিবিড় জীবাণুমুক্ত স্তর তৈরি করে, যা প্যানেথ কোষের REG3gamma পেপটাইড দ্বারা সুরক্ষিত থাকে।'
        ),
        details: l(
          'MUC2 is a gigantic 2.5 MDa O-glycosylated glycoprotein hydrogel. In the colon, the dense inner layer excludes bacteria. Antimicrobial peptides (alpha-defensins, lysozyme, REG3gamma) kill translocating microbes.',
          'বৃহদন্ত্রের MUC2 মিউসিন দুটি স্তর তৈরি করে। ভেতরের নিবিড় স্তরটি সম্পূর্ণ জীবাণুমুক্ত এবং এটি প্যানেথ কোষের ডিফেন্সিন ও REG3gamma দিয়ে ব্যাকটেরিয়াকে মেরে ফেলে।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-tight-junctions',
        label: l('Claudins, Occludin & ZO-1 Scaffolding', 'ক্লডিন, অক্লুডিন ও ZO-1 মাচা'),
        description: l(
          'Apical tight junctions seal adjacent enterocytes, anchored to the perijunctional actomyosin ring via ZO-1.',
          'শীর্ষস্থ টাইট জাংশন পাশাপাশি থাকা এন্টারোসাইটগুলোকে আটকে রাখে এবং ZO-1 প্রোটিন এদের সাইটোস্কেলেটনের সাথে বাঁধে।'
        ),
        details: l(
          'Claudins determine paracellular pore charge and size selectivity. Occludin confers structural stability. ZO-1 scaffolding docks into PDZ motifs and binds the perijunctional actomyosin ring.',
          'ক্লডিন ক্ষুদ্র ছিদ্রের আয়ন নির্বাচন করে, অক্লুডিন স্থায়িত্ব দেয় এবং ZO-1 প্রোটিন এদের অ্যাক্টোমায়োসিন রিংয়ের সাথে গেঁথে রাখে।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-mlck-gating',
        label: l('MLCK Phosphorylation & Leak Pathway', 'MLCK ফসফোরাইলেশন ও লিক পথ উন্মোচন'),
        description: l(
          'Inflammatory cytokines activate Myosin Light Chain Kinase (MLCK), contracting the perijunctional ring and opening the macromolecular Leak pathway.',
          'প্রদাহজনিত সাইটোকাইন Myosin Light Chain Kinase (MLCK) সক্রিয় করে রিং সংকুচিত করে, ফলে লিক পথ খুলে ক্ষতিকর উপাদান ঢোকে।'
        ),
        details: l(
          'Cytokines like TNF-a activate Myosin Light Chain Kinase (MLCK), which phosphorylates MLC20, causing perijunctional actomyosin ring contraction. This pulls tight junction scaffolding inward, opening the macromolecular leak pathway to allow LPS entry.',
          'TNF-a সাইটোকাইন Myosin Light Chain Kinase (MLCK) এনজাইমকে উদ্দীপিত করে অ্যাক্টোমায়োসিন রিং সংকুচিত করে, ফলে বড় ফাটল (লিক পথ) তৈরি হয়ে ক্ষতিকর উপাদান প্রবেশের পথ পায়।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-lps-endotoxemia',
        label: l('LPS Translocation & Metabolic Endotoxemia', 'LPS প্রবেশ ও বিপাকীয় এন্ডোটক্সেমিয়া'),
        description: l(
          'Translocated LPS binds macrophage TLR4/CD14, triggering NF-kB inflammation and insulin resistance via IRS-1 serine phosphorylation.',
          'রক্তে ঢোকা LPS ম্যাক্রোফেজের TLR4/CD14 এ যুক্ত হয়ে NF-kB সক্রিয় করে এবং IRS-1 সেরিন ফসফোরাইলেশন দিয়ে ইনসুলিন সংবেদনশীলতা নষ্ট করে।'
        ),
        details: l(
          'Breached barriers permit Lipopolysaccharide (LPS) leakage into portal circulation. LPS engages macrophage CD14/TLR4 complexes, activating NF-kB and releasing TNF-a and IL-6, which phosphorylate IRS-1 on serine residues, causing peripheral insulin resistance.',
          'অন্ত্রের প্রাচীর ভেদ করে LPS রক্তে প্রবেশ করে TLR4 রিসেপ্টরে আবদ্ধ হয় এবং NF-kB সংকেতের মাধ্যমে প্রদাহ তৈরি করে ইনসুলিন সংবেদনশীলতা ধ্বংস করে দেয়।'
        ),
        color: '#ec4899',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'মৌলিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. The Mucosal Interface: Surface Area & Defense Architecture', '১. মিউকোসাল সীমানা: পৃষ্ঠীয় ক্ষেত্রফল ও প্রতিরক্ষা কাঠামো'),
          paragraphs: [
            l(
              'The human gastrointestinal tract spans an unfolded surface area of over 30 to 32 square meters—equivalent to a studio apartment [1]. Across this vast expanse, a single continuous monolayer of epithelial cells must absorb vital nutrients while keeping out more than 100 trillion microbes and toxins [1, 2].',
              'মানব পরিপাকতন্ত্রের পৃষ্ঠীয় ক্ষেত্রফল প্রায় ৩০ থেকে ৩২ বর্গমিটার [১]। এই বিশাল অঞ্চলজুড়ে এপিথেলিয়াল কোষের পাতলা একক স্তরটিকে পানি ও পুষ্টি উপাদান শোষণের পাশাপাশি ১০০ ট্রিলিয়ন অণুজীব ও ক্ষতিকর উপাদানকে বাইরে আটকে রাখতে হয় [১, ২]।'
            ),
            l(
              'This defense is organized into three layers: (1) Extrinsic biochemical mucus and antimicrobial peptides; (2) Intrinsic physical epithelial cells sealed by tight junctions; and (3) Lamina propria immune cells providing mucosal surveillance and tolerance [1, 2, 3].',
              'এই প্রাচীর তিনটি স্তরে বিভক্ত: (১) বহিঃস্থ রাসায়নিক মিউকাস ও অ্যান্টিমাইক্রোবিয়াল পেপটাইড; (২) অভ্যন্তরীণ ভৌত কোষীয় স্তর ও টাইট জাংশন সিল; এবং (৩) ল্যামিনা প্রোপ্রিয়ার রোগপ্রতিরোধ ব্যবস্থা [১, ২, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. The Chemical Shield: MUC2 Glycocalyx, AMPs & Secretory IgA', '২. রাসায়নিক সুরক্ষা: MUC2 মিউসিন, পেপটাইড ও ক্ষরণকারী IgA'),
          paragraphs: [
            l(
              'Goblet cells secrete polymeric MUC2 mucin, forming a continuous hydrogel [2]. In the colon, an outer loose layer houses commensals, while an inner dense layer is sterile and excludes microbes [2, 3]. Paneth cells secrete antimicrobial peptides (defensins, lysozyme, REG3gamma) to kill bacteria that approach the epithelial surface [2].',
              'গবলেট কোষ থেকে নিঃসৃত MUC2 মিউসিন কোলনে দুটি স্তর তৈরি করে: বাইরের আলগা স্তরে ব্যাকটেরিয়া বাস করে, আর ভেতরের নিবিড় স্তরটি সম্পূর্ণ জীবাণুমুক্ত থাকে [২, ৩]। প্যানেথ কোষ থেকে নিঃসৃত ডিফেন্সিন ও REG3gamma পেপটাইড ক্ষতিকর জীবাণু ধ্বংস করে [২]।'
            ),
            l(
              'Secretory IgA (sIgA), produced by lamina propria plasma cells, binds the polymeric immunoglobulin receptor (pIgR) on enterocytes, undergoes transcytosis, and aggregates luminal pathogens for non-inflammatory fecal elimination [1, 2].',
              'ল্যামিনা প্রোপ্রিয়ার তৈরি ক্ষরণকারী IgA এন্টারোসাইটের pIgR রিসেপ্টর দিয়ে পরিবাহিত হয়ে অন্ত্রের ভেতর কোনো ক্ষতিকর প্রদাহ ছাড়াই রোগজীবাণু বেঁধে মলের সাথে বের করে দেয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Apical Tight Junctions: Claudins, Occludin & ZO-1 Scaffolding', '৩. শীর্ষস্থ টাইট জাংশন: ক্লডিন, অক্লুডিন ও ZO-1 মাচা'),
          paragraphs: [
            l(
              'At the apical lateral boundary, Tight Junctions form a belt-like circumferential seal around each cell [1, 5]. Claudins dictate charge and pore size selectivity, occludin regulates stability, and ZO-1 scaffolds them directly to the perijunctional actomyosin ring [1, 3, 5].',
              'কোষের শীর্ষভাগে টাইট জাংশন বেল্টের মতো সিল তৈরি করে [১, ৫]। ক্লডিন আয়নের নির্বাচন করে, অক্লুডিন স্থায়িত্ব দেয় এবং ZO-1 প্রোটিন এদের ভেতরের অ্যাক্টোমায়োসিন রিংয়ের সাথে গেঁথে রাখে [১, ৩, ৫]।'
            ),
            l(
              'Paracellular transit is segregated into a small Pore pathway (<0.4 nm, selective for ions and water) and a macromolecular Leak pathway (4-6 nm, gated by cytoskeletal contraction) [1, 3].',
              'কোষের ফাঁক দিয়ে পরিবহন দুটি পথে হয়: ক্ষুদ্র পোর পথ (<০.৪ ন্যানোমিটার, কেবল আয়ন ও পানি) এবং বড় লিক পথ (৪-৬ ন্যানোমিটার, সাইটোস্কেলেটনের টানে খোলে) [১, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. MLCK Activation, LPS Translocation & Metabolic Endotoxemia', '৪. MLCK সক্রিয়করণ, LPS প্রবেশ ও বিপাকীয় এন্ডোটক্সেমিয়া'),
          paragraphs: [
            l(
              'Inflammatory cytokines activate Myosin Light Chain Kinase (MLCK), which phosphorylates myosin light chain and contracts the perijunctional ring, dilating the leak pathway [1, 3]. This allows Gram-negative bacterial Lipopolysaccharide (LPS) to breach the epithelial barrier [3, 4].',
              'প্রদাহজনিত সাইটোকাইন Myosin Light Chain Kinase (MLCK) এনজাইমকে উদ্দীপিত করে অ্যাক্টোমায়োসিন রিং সংকুচিত করে, ফলে লিক পথ খুলে গিয়ে ব্যাকটেরিয়াল LPS রক্তে প্রবেশের পথ পায় [১, ৩, ৪]।'
            ),
            l(
              'Translocated LPS binds macrophage CD14/TLR4 complexes, triggering NF-kB activation and releasing TNF-a and IL-6 [4]. These cytokines cause inhibitory serine phosphorylation of Insulin Receptor Substrate-1 (IRS-1), precipitating systemic insulin resistance [3, 4].',
              'রক্তে প্রবেশ করা LPS ম্যাক্রোফেজের TLR4/CD14 এ যুক্ত হয়ে NF-kB এর মাধ্যমে প্রদাহ তৈরি করে এবং IRS-1 সেরিন ফসফোরাইলেশনের মাধ্যমে ইনসুলিন প্রতিরোধ্যতা সৃষ্টি করে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Dietary Modulators: Butyrate, Glutamine vs Emulsifiers', '৫. খাদ্যের প্রভাব: বিউটাইরেট, গ্লুটামিন বনাম ইমালসিফায়ার'),
          paragraphs: [
            l(
              'Butyrate from fiber fermentation and L-glutamine fuel enterocytes and upregulate tight junction proteins [2, 3]. Zinc stabilizes occludin. Conversely, ultra-processed emulsifiers (carboxymethylcellulose, polysorbate-80) dissolve the inner mucus shield, triggering barrier collapse [2, 3, 4].',
              'খাদ্য আঁশের বিউটাইরেট এবং এল-গ্লুটামিন এন্টারোসাইটের শক্তি জোগায় ও টাইট জাংশন মজবুত করে [২, ৩]। কিন্তু প্রক্রিয়াজাত খাবারের ইমালসিফায়ার মিউসিন স্তর গলিয়ে ফেলে প্রাচীর ধ্বংস করে দেয় [২, ৩, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Takeaways', '৬. মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'The intestinal barrier comprises biochemical mucus/AMPs, physical tight junctions, and lamina propria immunity [1, 2]. Secretory IgA performs non-inflammatory pathogen immune exclusion [1]. MLCK-mediated perijunctional ring contraction dilates the macromolecular leak pathway [1, 3]. Leaked LPS binds TLR4, triggering metabolic endotoxemia and insulin resistance [3, 4].',
              'অন্ত্রের প্রাচীর মিউকাস, টাইট জাংশন ও ইমিউন কোষের সমন্বয়ে গঠিত [১, ২]। ক্ষরণকারী IgA নিরাপদে জীবাণু বের করে দেয় [১]। MLCK এনজাইম অ্যাক্টোমায়োসিন রিং সংকুচিত করে বড় লিক পথ খুলে দেয় [১, ৩]। রক্তে LPS ঢুকলে TLR4 দিয়ে প্রদাহ সৃষ্টি হয়ে ইনসুলিন সংবেদনশীলতা ধ্বংস হয় [৩, ৪]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'প্রাতিষ্ঠানিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. Epithelial Cell Types & Compartmental Spatial Organization', '১. এপিথেলিয়াল কোষের প্রকারভেদ ও স্থানিক বিন্যাস'),
          paragraphs: [
            l(
              'The monolayer includes absorptive enterocytes (90%), goblet cells secreting MUC2, Paneth cells at crypt bases secreting AMPs, enteroendocrine cells releasing incretins, and M-cells over Peyer patches facilitating antigen transcytosis to dendritic cells [1, 2].',
              'এপিথেলিয়ামে রয়েছে এন্টারোসাইট (৯০%), মিউসিন ক্ষরণকারী গবলেট কোষ, AMP ক্ষরণকারী প্যানেথ কোষ, হরমোন ক্ষরণকারী এন্টারোএন্ডোক্রাইন কোষ এবং রোগপ্রতিরোধক এম-কোষ [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Molecular Anatomy of the Apical Junctional Complex', '২. শীর্ষস্থ জাংশনাল কমপ্লেক্সের আণবিক শারীরস্থান'),
          paragraphs: [
            l(
              'The AJC includes the apical tight junction (claudins, occludin, JAMs) and the subadjacent adherens junction (E-cadherin and catenins) [1, 5]. Claudin-2 forms small cation pores in leaky crypts, whereas claudins-1, 3, and 5 form tight seals [1, 3].',
              'AJC কমপ্লেক্সে টাইট জাংশন এবং ঠিক নিচেই অ্যাডহেরেন্স জাংশন থাকে [১, ৫]। ক্লডিন-২ ক্যাটায়নের জন্য ক্ষুদ্র ছিদ্র তৈরি করে, আর ক্লডিন-১, ৩ ও ৫ প্রাচীরকে শক্তভাবে বন্ধ রাখে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Regulation of MLCK and Perijunctional Actomyosin Ring Tension', '৩. MLCK নিয়ন্ত্রণ ও পেরিজাংশনাল অ্যাক্টোমায়োসিন রিংয়ের টান'),
          paragraphs: [
            l(
              'MLCK phosphorylates MLC20 at Thr18/Ser19, activating myosin ATPase and generating mechanical centripetal tension on the perijunctional ring [1, 5]. This pulls ZO-1 and occludin away from the junctional membrane, expanding the paracellular leak pathway [1, 3].',
              'MLCK এনজাইম মায়োসিন-২ এর লাইট চেইনে ফসফেট যুক্ত করে পেরিজাংশনাল রিং সংকুচিত করে [১, ৫]। এই টানের ফলে ZO-1 ও অক্লুডিন স্থানচ্যুত হয় এবং বড় লিক পথ খুলে যায় [১, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Molecular Mechanisms of Metabolic Endotoxemia & IRS-1 Serine Kinases', '৪. বিপাকীয় এন্ডোটক্সেমিয়ার আণবিক পথ ও IRS-1 সেরিন কাইনেজ'),
          paragraphs: [
            l(
              'Translocated LPS complexes with LBP and binds CD14/TLR4, recruiting MyD88 to activate NF-kB [4]. Released TNF-a and IL-6 activate stress kinases JNK and IKKb, which phosphorylate IRS-1 at inhibitory Ser307, uncoupling downstream PI3K/Akt insulin signaling [3, 4].',
              'রক্তে ঢোকা LPS উপাদান CD14/TLR4 এ যুক্ত হয়ে NF-kB এর মাধ্যমে TNF-a তৈরি করে [৪]। এই সাইটোকাইনগুলো IRS-1 এর সেরিন অংশে ফসফেট যুক্ত করে স্বাভাবিক ইনসুলিন সংকেত পথ বিচ্ছিন্ন করে দেয় [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Biomarkers: Lactulose/Mannitol Ratio & Serological Markers', '৫. বায়োমার্কার: ল্যাকটুলোজ/ম্যানিটল অনুপাত ও সিরাম নির্দেশক'),
          paragraphs: [
            l(
              'Dual-sugar testing measures the ratio of excreted lactulose (leak pathway) to mannitol (pore pathway). LMR >0.03 indicates barrier breakdown [1, 3]. Serum LBP, soluble CD14, and zonulin serve as systemic markers of endotoxin exposure and tight junction dysregulation [3, 4].',
              'ল্যাকটুলোজ ও ম্যানিটল অনুপাত (LMR >০.০৩) প্রাচীর বিনষ্টের অকাট্য প্রমাণ [১, ৩]। এছাড়া রক্তে LBP এবং সলিউবল CD14 ব্যাকটেরিয়াল এন্ডোটক্সিন অনুপ্রবেশ নির্দেশ করে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Summary', '৬. প্রাতিষ্ঠানিক সারাংশ'),
          paragraphs: [
            l(
              'The intestinal barrier integrates biophysical exclusion with immune tolerance [1, 2]. Dysregulation of the MLCK-tight junction axis permits endotoxin translocation, driving low-grade chronic metabolic disease [3, 4].',
              'অন্ত্রের প্রাচীর জীব-পদার্থবৈজ্ঞানিক সুরক্ষা ও রোগপ্রতিরোধ সহনশীলতার এক অপূর্ব মিলন [১, ২]। টাইট জাংশন নষ্ট হয়ে এন্ডোটক্সিন প্রবেশ দীর্ঘস্থায়ী বিপাকীয় রোগের অন্যতম মূল কারণ [৩, ৪]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উচ্চতর / গবেষণা স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. Biophysics of MUC2 Polymeric Hydrogels & Glycan Branching', '১. MUC2 পলিমারিক হাইড্রোজেল ও গ্লাইক্যান রসায়ন'),
          paragraphs: [
            l(
              'MUC2 monomers assemble via N-terminal and C-terminal von Willebrand factor domains into giant covalently cross-linked net-like polymeric matrices [2]. Densely packed O-glycans terminating in sialic acid and sulfate create polyanionic repulsion that hydrates and expands the gel, physically excluding entities larger than ~0.5 um [2, 3].',
              'MUC2 মনোমারগুলো বিশালাকার জালের মতো পলিমার তৈরি করে [২]। এর সাথে থাকা ঋণাত্মক সিয়ালিক অ্যাসিড ও সালফেট গ্রুপ পানি ধরে রেখে জেল তৈরি করে, যা ০.৫ মাইক্রন বা তার চেয়ে বড় জীবাণু প্রবেশ সম্পূর্ণরূপে আটকে দেয় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Structural Biology of Claudin Strands & PDZ Scaffolding', '২. ক্লডিন স্ট্র্যান্ড ও PDZ মাচার আণবিক জীববিদ্যা'),
          paragraphs: [
            l(
              'Freeze-fracture electron microscopy demonstrates that tight junctions consist of anastomosing intramembrane strands [5]. Claudin extracellular loops form anti-parallel beta-sheet barrels that line paracellular pores [1, 5]. The intracellular C-terminal PDZ motifs bind the first PDZ domain of ZO-1, anchoring strands to actin filaments [1, 5].',
              'ইলেকট্রন মাইক্রোস্কোপে দেখা যায় টাইট জাংশন জালিকার মতো ইন্টারমেমব্রেন স্ট্র্যান্ড নিয়ে গঠিত [৫]। ক্লডিনের বহিঃকোষীয় লুপগুলো ক্ষুদ্র ছিদ্র তৈরি করে এবং এদের সাইটোপ্লাজমিক প্রান্ত ZO-1 প্রোটিনের PDZ ডোমেনের সাথে যুক্ত থাকে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. MLCK Isoforms and Ca2+/Calmodulin Catalytic Activation', '৩. MLCK আইসোফর্ম ও ক্যালসিয়াম/ক্যালমোডিউলিন সক্রিয়করণ'),
          paragraphs: [
            l(
              'Enterocytes express the 210 kDa long MLCK isoform [1]. Cytokine binding activates phospholipase C, raising intracellular Ca2+, which complexes with calmodulin to relieve auto-inhibition of the MLCK catalytic core [1, 5]. Activated MLCK phosphorylates MLC20, reorganizing actin filaments into concentrated perijunctional bundles [1, 5].',
              'এন্টারোসাইটে ২১০ kDa দীর্ঘ MLCK এনজাইম থাকে [১]। সাইটোকাইন সংকেতে ক্যালসিয়াম-ক্যালমোডিউলিন কমপ্লেক্স তৈরি হয়ে MLCK কে সক্রিয় করে, যা অ্যাক্টোমায়োসিন রিংকে সংকুচিত করে জাংশনের বন্ধন আলগা করে দেয় [১, ৫]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Chylomicron-Mediated LPS Translocation in Postprandial Lipemia', '৪. খাবার পরবর্তী চর্বি শোষণে কাইলোমাইক্রন দ্বারা LPS পরিবহন'),
          paragraphs: [
            l(
              'Beyond paracellular leaking, dietary saturated long-chain fatty acids promote transcellular LPS entry [4]. During chylomicron assembly in the endoplasmic reticulum, hydrophobic Lipid A of LPS incorporates into the phospholipid monolayer of nascent chylomicrons, entering mesenteric lymph and circumventing hepatic first-pass clearance [3, 4].',
              'কোষের ফাঁক দিয়ে ঢোকা ছাড়াও খাদ্যের স্যাচুরেটেড ফ্যাটি অ্যাসিডের সাথে কাইলোমাইক্রন কণাগুলো LPS-কে নিজেদের ভেতরে ঢুকিয়ে লসিকার মাধ্যমে সরাসরি রক্তে ছড়িয়ে দেয়, যা যকৃতের নজরদারি এড়িয়ে যায় [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Therapeutic Targeting: MLCK Inhibitors & Synthetic Postbiotics', '৫. চিকিৎসাগত গবেষণা: MLCK ইনহিবিটর ও সিন্থেটিক পোস্টবায়োটিক'),
          paragraphs: [
            l(
              'Divergent MLCK inhibitor peptides (e.g., membrane-permeant inhibitor of kinase, PIK) prevent perijunctional actomyosin contraction without impairing smooth muscle contractility [1, 5]. Concurrently, microbial metabolites (indole-3-propionic acid activating AhR, butyrate activating GPR109A) restore junctional protein transcription in inflammatory bowel disease [2, 3].',
              'নতুন গবেষণায় PIK নামক পেপটাইড তৈরি হয়েছে যা পেশির ক্ষতি না করে কেবল অন্ত্রের MLCK এনজাইমকে দমন করে টাইট জাংশন সিল রক্ষা করে [১, ৫]। পাশাপাশি মাইক্রোবায়ালের ইনডোল যৌগ AhR সক্রিয় করে অন্ত্রের ক্ষয় নিরাময়ে যুগান্তকারী ভূমিকা রাখছে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Synthesis', '৬. অনুবাদমূলক সংশ্লেষ'),
          paragraphs: [
            l(
              'Gastrointestinal barrier failure is an active, biochemically regulated event rather than simple passive epithelial necrosis [1, 3]. Pharmacological stabilization of tight junctions and nutritional optimization of the mucosal shield represent cornerstone strategies in immunometabolic therapeutics [2, 4].',
              'অন্ত্রের প্রাচীর বিনষ্ট হওয়া কোনো আকস্মিক কোষমৃত্যু নয়, বরং এটি একটি সুনির্দিষ্ট জৈবরাসায়নিক সংকেত দ্বারা চালিত প্রক্রিয়া [১, ৩]। টাইট জাংশন স্থিতিশীল রাখা এবং পুষ্টির মাধ্যমে মিউকোসাল ঢাল রক্ষা করাই আধুনিক চিকিৎসার অন্যতম ভবিষ্যৎ [২, ৪]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential intestinal mucosal defense: MUC2 mucus layer, tight junction sealing, MLCK-mediated leak pathway dilation, and LPS-induced metabolic endotoxemia.',
      'অন্ত্রের মিউকোসাল প্রতিরক্ষা: MUC2 মিউসিন স্তর, টাইট জাংশন সিল, MLCK সংকেতে লিক পথ উন্মোচন এবং LPS জনিত বিপাকীয় প্রদাহের ধারাবাহিক পর্যায়।'
    ),
    steps: [
      l(
        'Step 1: Goblet cells secrete polymeric MUC2 mucin creating a sterile inner colonic barrier, reinforced by Paneth cell antimicrobial lectins (REG3gamma, defensins) and lysozyme.',
        'ধাপ ১: গবলেট কোষ থেকে নিঃসৃত MUC2 মিউসিন বৃহদন্ত্রে একটি নিবিড় জীবাণুমুক্ত স্তর তৈরি করে, যা প্যানেথ কোষের REG3gamma ও ডিফেন্সিন পেপটাইড দ্বারা সুরক্ষিত থাকে।'
      ),
      l(
        'Step 2: Apical tight junctions join adjacent enterocytes. Claudins regulate pore permeability, while ZO-1 anchors transmembrane occludin and claudins directly to the perijunctional actomyosin ring.',
        'ধাপ ২: শীর্ষস্থ টাইট জাংশন পাশাপাশি থাকা এন্টারোসাইটগুলোকে আটকে রাখে। ক্লডিন আয়নের প্রবেশ্যতা নিয়ন্ত্রণ করে এবং ZO-1 প্রোটিন এদের অ্যাক্টোমায়োসিন সাইটোস্কেলেটনের সাথে বেঁধে রাখে।'
      ),
      l(
        'Step 3: Inflammatory cytokines (TNF-a, IFN-g) activate Myosin Light Chain Kinase (MLCK), phosphorylating MLC20 and contracting the perijunctional ring, dilating the macromolecular Leak pathway.',
        'ধাপ ৩: প্রদাহজনিত সাইটোকাইন (TNF-a) MLCK এনজাইমকে উদ্দীপিত করে পেরিজাংশনাল অ্যাক্টোমায়োসিন রিং সংকুচিত করে, যার ফলে বড় ফাটল (লিক পথ) খুলে গিয়ে ক্ষতিকর উপাদান প্রবেশের পথ পায়।'
      ),
      l(
        'Step 4: Luminal Lipopolysaccharide (LPS) breaches compromised tight junctions, binds macrophage TLR4/CD14 complexes, activates NF-kB, and triggers systemic insulin resistance via IRS-1 serine phosphorylation.',
        'ধাপ ৪: ব্যাকটেরিয়ার বিষাক্ত LPS ক্ষতিগ্রস্ত জাংশন ভেদ করে ম্যাক্রোফেজের TLR4/CD14 রিসেপ্টরে আবদ্ধ হয় এবং NF-kB সংকেতের মাধ্যমে প্রদাহ তৈরি করে ইনসুলিন সংবেদনশীলতা ধ্বংস করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'Through which molecular mechanism does activated Myosin Light Chain Kinase (MLCK) increase intestinal paracellular macromolecular permeability?',
      'মায়োসিন লাইট চেইন কাইনেজ (MLCK) সক্রিয় হলে কোন সুনির্দিষ্ট আণবিক প্রক্রিয়ায় অন্ত্রের প্যারাসেলুলার বৃহৎ অণুর প্রবেশ্যতা বৃদ্ধি পায়?'
    ),
    options: [
      l(
        'It phosphorylates myosin II regulatory light chain, inducing perijunctional actomyosin ring contraction that mechanically pulls ZO-1 and occludin away from the junctional membrane.',
        'এটি মায়োসিন-২ লাইট চেইনে ফসফেট যুক্ত করে পেরিজাংশনাল অ্যাক্টোমায়োসিন রিং সংকুচিত করে, যা ZO-1 ও অক্লুডিনকে ভেতরের দিকে টেনে ফাটল সৃষ্টি করে।'
      ),
      l(
        'It cleaves the extracellular domain of claudin-1 into soluble oligopeptides in the intestinal lumen.',
        'এটি অন্ত্রের লুমেনের ভেতর ক্লডিন-১ প্রোটিনের বহিঃকোষীয় অংশটি কেটে ক্ষুদ্র পেপটাইডে রূপান্তর করে।'
      ),
      l(
        'It degrades the polymeric joining (J) chain of dimeric IgA, blocking pIgR-mediated apical transcytosis.',
        'এটি ডাইমেরিক IgA এর J-চেইন নষ্ট করে দিয়ে pIgR এর মাধ্যমে শীর্ষস্থ পরিবহন বন্ধ করে দেয়।'
      ),
      l(
        'It activates intestinal alkaline phosphatase to dephosphorylate MUC2 polymeric mucin chains.',
        'এটি অ্যালকালাইন ফসফাটেজ এনজাইম সক্রিয় করে MUC2 মিউসিন চেইনকে ডিফসফোরাইলেট করে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Activated MLCK specifically phosphorylates MLC20 on Thr18/Ser19, triggering ATPase activity and physical contraction of the perijunctional actomyosin ring. This mechanical tension pulls junctional scaffolding proteins (ZO-1, occludin) toward the cell center, destabilizing tight junction strands and opening the macromolecular Leak pathway.',
      'সক্রিয় MLCK এনজাইম মায়োসিন-২ এর লাইট চেইনে ফসফেট যুক্ত করে পেরিজাংশনাল অ্যাক্টোমায়োসিন রিংকে সংকুচিত করে। এই যান্ত্রিক টানের ফলে ZO-1 ও অক্লুডিন স্থানচ্যুত হয় এবং বড় লিক পথটি খুলে গিয়ে ক্ষতিকর উপাদান প্রবেশের সুযোগ পায়।'
    ),
  },
}
