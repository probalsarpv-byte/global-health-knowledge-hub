import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const digestionRefs = [
  {
    id: 'goodman-modern-nutrition-digestion',
    authors: 'Barbara E. Goodman',
    title: 'Modern Nutrition in Health and Disease, 11th edition, Chapter 1: Digestion, Absorption, and Transport of Nutrients',
    organization: 'Wolters Kluwer Health / Lippincott Williams & Wilkins',
    year: 2014,
    url: 'https://shop.lww.com/Modern-Nutrition-in-Health-and-Disease/p/9781605474618',
  },
  {
    id: 'gropper-advanced-nutrition-digestion',
    authors: 'Sareen S. Gropper, Jack L. Smith, Timothy P. Carr',
    title: 'Advanced Nutrition and Human Metabolism, 8th edition, Chapter 2: The Digestive System: Mechanism for Nourishing the Body',
    organization: 'Cengage Learning',
    year: 2021,
    url: 'https://www.cengage.com/c/advanced-nutrition-and-human-metabolism-8e-gropper/9780357449813/',
  },
  {
    id: 'krause-nutrition-care-digestion',
    authors: 'Janice L. Raymond, Kelly Morrow',
    title: "Krause and Mahan's Food & the Nutrition Care Process, 15th edition, Chapter 1: Digestion, Absorption, Transport, and Excretion",
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/krause-and-mahans-food-and-the-nutrition-care-process/raymond/978-0-323-63655-1',
  },
  {
    id: 'broer-physrev-amino-acid-transport',
    authors: 'Stefan Broer, Angelika Broer',
    title: 'Amino acid transport across mammalian intestinal and renal epithelia',
    organization: 'Physiological Reviews',
    year: 2017,
    url: 'https://doi.org/10.1152/physrev.00018.2016',
  },
]

export const nutrition02MacronutrientDigestionLesson: LessonTopic = {
  id: 'topic.nutrition.macronutrient-digestion',
  slug: 'macronutrient-digestion-absorption',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '02 · Macronutrient Digestion, Brush-Border Transport & Absorption Mechanics',
    '০২ · ম্যাক্রোনিউট্রিয়েন্ট পরিপাক, ব্রাশ-বর্ডার পরিবহন ও শোষণ প্রক্রিয়া'
  ),
  summary: l(
    'Step-by-step chemical hydrolysis of carbohydrates, proteins, and lipids from the gut lumen to the enterocyte: luminal zymogen activation, apical brush-border transport kinetics (SGLT1, GLUT5, PepT1), and portal versus lymphatic distribution.',
    'অন্ত্রের লুমেন থেকে এন্টারোসাইট পর্যন্ত শর্করা, প্রোটিন ও লিপিডের রাসায়নিক আর্দ্রবিশ্লেষণ: জাইমোজেন সক্রিয়করণ, ব্রাশ-বর্ডার পরিবহন গতিবিদ্যা (SGLT1, GLUT5, PepT1) এবং পোর্টাল বনাম লসিকা সঞ্চালন।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Map the sequential mechanical and biochemical stages of carbohydrate, protein, and lipid digestion across oral, gastric, and small intestinal compartments.',
      'মুখবিবর, পাকস্থলী ও ক্ষুদ্রান্ত্রের মধ্য দিয়ে শর্করা, প্রোটিন ও চর্বি পরিপাকের যান্ত্রিক ও রাসায়নিক ধাপগুলোর ধারাবাহিক মানচিত্র তৈরি করতে পারা।'
    ),
    l(
      'Contrast apical and basolateral enterocyte transport mechanisms, distinguishing secondary active cotransport (SGLT1, PepT1) from facilitated diffusion (GLUT5, GLUT2).',
      'এন্টারোসাইটের অ্যাপিক্যাল ও বেসোল্যাটারাল ঝিল্লির পরিবহন ব্যবস্থার তুলনা করা এবং গৌণ সক্রিয় পরিবহন (SGLT1, PepT1) ও সহায়ক ব্যাপনের (GLUT5, GLUT2) পার্থক্য ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Analyze the physiological packaging of re-esterified long-chain lipids into chylomicrons for lymphatic absorption versus direct portal venous transport of short- and medium-chain fatty acids.',
      'লসিকা শোষণের জন্য কাইলোমাইক্রনে দীর্ঘ-শৃঙ্খল লিপিডের মোড়কীকরণ এবং পোর্টাল শিরার মাধ্যমে ক্ষুদ্র ও মাঝারি ফ্যাটি অ্যাসিডের সরাসরি পরিবহন বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.energy-balance-tdee'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  references: digestionRefs,
  evidenceBySection: {
    introduction: ['goodman-modern-nutrition-digestion', 'gropper-advanced-nutrition-digestion'],
    structure: ['gropper-advanced-nutrition-digestion', 'krause-nutrition-care-digestion'],
    mechanism: ['goodman-modern-nutrition-digestion', 'broer-physrev-amino-acid-transport'],
    integration: ['gropper-advanced-nutrition-digestion', 'goodman-modern-nutrition-digestion'],
    practice: ['krause-nutrition-care-digestion', 'broer-physrev-amino-acid-transport'],
    takeaways: ['goodman-modern-nutrition-digestion', 'krause-nutrition-care-digestion'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Digestive Architecture & Luminal Hydrolysis', '১. পরিপাকতন্ত্রের কাঠামো ও লুমেনের আর্দ্রবিশ্লেষণ'), sectionId: 'introduction' },
      { id: 'sec-brush-border', label: l('2. Brush-Border Membrane Hydrolases', '২. ব্রাশ-বর্ডার ঝিল্লির হাইড্রোলেজ এনজাইমসমূহ'), sectionId: 'structure' },
      { id: 'sec-transport', label: l('3. Epithelial Transporters: SGLT1, GLUT5, PepT1', '৩. আবরণী পরিবহন প্রোটিন: SGLT1, GLUT5, PepT1'), sectionId: 'mechanism' },
      { id: 'sec-lipids', label: l('4. Lipid Emulsification, Micelles & Chylomicron Assembly', '৪. লিপিড ইমালসিফিকেশন, মাইসেল ও কাইলোমাইক্রন গঠন'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Worked Absorption Pathway Reasoning', '৫. পুষ্টি শোষণ পথের বিশদ পর্যালোচনা ও মূল্যায়ন'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Enterocyte', 'এন্টারোসাইট'),
        definition: l(
          'The specialized simple columnar epithelial absorptive cell lining the small intestine, featuring an apical brush border composed of up to 3,000 microvilli to maximize surface area.',
          'ক্ষুদ্রান্ত্রের অভ্যন্তরীণ প্রাচীর গঠনকারী বিশেষায়িত স্তম্ভাকার শোষণকারী আবরণী কোষ, যার শীর্ষে শোষণতল সর্বাধিক করতে প্রায় ৩,০০০ মাইক্রোভিলাই সমৃদ্ধ ব্রাশ-বর্ডার থাকে।'
        ),
      },
      {
        term: l('Sodium-Glucose Cotransporter 1 (SGLT1)', 'সোডিয়াম-গ্লুকোজ কো-ট্রান্সপোর্টার ১ (SGLT1)'),
        definition: l(
          'A high-affinity, secondary active symporter on the apical enterocyte membrane that transports two sodium ions alongside one molecule of glucose or galactose against their concentration gradients.',
          'এন্টারোসাইটের শীর্ষ ঝিল্লিতে অবস্থিত উচ্চ-আসক্তিসম্পন্ন গৌণ সক্রিয় পরিবাহক, যা ঘনমাত্রার নতির বিপরীতে দুটি সোডিয়াম আয়নের সাথে একটি গ্লুকোজ বা গ্যালাক্টোজ অণু কোষে প্রবেশ করায়।'
        ),
      },
      {
        term: l('Peptide Transporter 1 (PepT1)', 'পেপটাইড ট্রান্সপোর্টার ১ (PepT1)'),
        definition: l(
          'A proton-coupled oligopeptide symporter on the apical brush-border membrane responsible for the electrogenic uptake of dipeptides and tripeptides driven by an inward proton gradient.',
          'শীর্ষ ব্রাশ-বর্ডারে অবস্থিত একটি প্রোটন-সংযুক্ত পরিবাহক, যা বহিঃস্থ অম্লীয় প্রোটন নতির সাহায্যে ডাইপেপটাইড ও ট্রাইপেপটাইডকে তড়িৎ-সক্রিয়ভাবে কোষে প্রবেশ করায়।'
        ),
      },
      {
        term: l('Chylomicron', 'কাইলোমাইক্রন'),
        definition: l(
          'A large, low-density lipoprotein particle synthesized exclusively within enterocytes containing dietary triacylglycerols, cholesteryl esters, fat-soluble vitamins, and apolipoprotein B-48, secreted into lymphatic lacteals.',
          'এন্টারোসাইটের অভ্যন্তরে খাদ্যের ট্রাইগ্লিসারাইড, কোলেস্টেরল এস্টার, ভিটামিন এবং অ্যাপোলিপোপ্রোটিন বি-৪৮ দিয়ে গঠিত বৃহৎ লাইপোপ্রোটিন কণা, যা লসিকানালিতে নিঃসৃত হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Tracing Carbohydrate Digestion from Ingestion to Portal Appearance', 'শর্করা গ্রহণ থেকে পোর্টাল রক্তে প্রবেশ পর্যন্ত পরিপাক প্রক্রিয়া'),
        steps: [
          l(
            'Step 1: Salivary and pancreatic alpha-amylase cleave internal alpha-1,4-glucosidic bonds of amylose and amylopectin, generating maltose, maltotriose, and alpha-limit dextrins.',
            'ধাপ ১: লালারস ও অগ্ন্যাশয়ের আলফা-অ্যামাইলেজ শ্বেতসারের অভ্যন্তরীণ আলফা-১,৪-গ্লুকোসিডিক বন্ধন ভেঙে মল্টোজ, মল্টোট্রায়োজ এবং আলফা-লিমিট ডেক্সট্রিন তৈরি করে।'
          ),
          l(
            'Step 2: Brush-border enzymes complete hydrolysis: sucrase-isomaltase cleaves alpha-1,6 branch points, while maltase-glucoamylase and lactase release free glucose, fructose, and galactose.',
            'ধাপ ২: ব্রাশ-বর্ডার এনজাইম আর্দ্রবিশ্লেষণ সম্পন্ন করে: সুক্রেজ-আইসোমল্টেজ আলফা-১,৬ শাখা কাটে এবং মল্টেজ ও ল্যাকটেজ মুক্ত গ্লুকোজ, ফ্রুক্টোজ ও গ্যালাক্টোজ তৈরি করে।'
          ),
          l(
            'Step 3: Glucose and galactose enter the enterocyte via SGLT1 coupled to Na+ influx; fructose enters via facilitated GLUT5 uniporter. All monosaccharides exit basolaterally via GLUT2 into portal capillaries.',
            'ধাপ ৩: গ্লুকোজ ও গ্যালাক্টোজ সোডিয়ামের সাথে SGLT1 দিয়ে কোষে ঢোকে; ফ্রুক্টোজ GLUT5 দিয়ে প্রবেশ করে। অতঃপর সকল মনোস্যাকারাইড বেসোল্যাটারাল GLUT2 দিয়ে পোর্টাল রক্তে যায়।'
          ),
        ],
        conclusion: l(
          'Digestion requires coordinated luminal polymer breakdown followed by specialized apical membrane transport.',
          'পরিপাক প্রক্রিয়ায় প্রথমে লুমেনে পলিমার ভাঙা এবং পরে শীর্ষ ঝিল্লির নির্দিষ্ট পরিবাহক দিয়ে শোষণের নিখুঁত সমন্বয় অপরিহার্য।'
        ),
      },
      {
        title: l('Lipid Partitioning: Medium-Chain vs Long-Chain Triacylglycerols', 'লিপিড বিভাজন: মাঝারি-শৃঙ্খল বনাম দীর্ঘ-শৃঙ্খল ফ্যাটি অ্যাসিডের পথ'),
        steps: [
          l(
            'Step 1: Long-chain fatty acids (LCFA, >12 carbons) and 2-monoacylglycerols form mixed micelles with bile salts, passively diffuse or use FAT/CD36 into enterocytes, and are re-esterified to triacylglycerols in the endoplasmic reticulum.',
            'ধাপ ১: দীর্ঘ-শৃঙ্খল ফ্যাটি অ্যাসিড ও ২-মনোঅ্যাসিলগ্লিসারল পিত্তলবণের সাথে মাইসেল গঠন করে কোষে ঢোকে এবং এন্ডোপ্লাজমিক রেটিকুলামে পুনরায় ট্রাইগ্লিসারাইডে রূপান্তর হয়।'
          ),
          l(
            'Step 2: Enterocytes package re-esterified lipids with ApoB-48 into chylomicrons, which exocytose into central lacteals, bypassing the liver and entering venous blood via the thoracic duct.',
            'ধাপ ২: এন্টারোসাইট এই লিপিডকে অ্যাপো বি-৪৮ সহযোগে কাইলোমাইক্রনে মোড়ায়, যা ল্যাকটিয়ালে ঢুকে যকৃতকে বাইপাস করে থোরাসিক ডাক্ট দিয়ে সরাসরি রক্তে পৌঁছায়।'
          ),
          l(
            'Step 3: Medium-chain fatty acids (MCFA, 6–12 carbons) are relatively water-soluble, enter enterocytes independently of micellar formation, escape re-esterification, and pass directly into the portal vein bound to albumin.',
            'ধাপ ৩: মাঝারি-শৃঙ্খল ফ্যাটি অ্যাসিড (MCFA, ৬-১২ কার্বন) তুলনামূলক পানিতে দ্রবণীয় হওয়ায় মাইসেল ছাড়াই শোষিত হয় এবং কাইলোমাইক্রন না হয়ে সরাসরি পোর্টাল রক্তে যায়।'
          ),
        ],
        conclusion: l(
          'Chain length dictates lipid transport route, explaining why medium-chain triglycerides (MCTs) are utilized in clinical lymphatic malabsorption.',
          'কার্বন শৃঙ্খলের দৈর্ঘ্য লিপিডের পরিবহন পথ নির্ধারণ করে, যে কারণে লসিকা বা পিত্তের সমস্যায় আক্রান্ত রোগীদের চিকিৎসায় মাঝারি শৃঙ্খলের চর্বি ব্যবহৃত হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why are dipeptides and tripeptides absorbed more rapidly across the brush border than equivalent free amino acids?',
          'ডাইপেপটাইড ও ট্রাইপেপটাইড কেন সমপরিমাণ মুক্ত অ্যামিনো অ্যাসিডের চেয়ে দ্রুত ব্রাশ-বর্ডার অতিক্রম করে?'
        ),
        answer: l(
          'The PepT1 symporter has a high turnover capacity that transports intact di- and tripeptides using the proton gradient, allowing greater stoichiometric amino acid mass influx per transport cycle than monomeric amino acid systems.',
          'PepT1 পরিবাহক উচ্চ ক্ষমতাসম্পন্ন এবং প্রোটন নতি ব্যবহার করে অক্ষত ডাই- ও ট্রাইপেপটাইড পরিবহন করে, যার ফলে একক অ্যামিনো অ্যাসিড পরিবাহকের চেয়ে প্রতিটি চক্রে বেশি পরিমাণ পুষ্টি কোষে প্রবেশ করে।'
        ),
      },
      {
        question: l(
          'What happens to bile salts after they facilitate micellar lipid absorption in the proximal jejunum?',
          'প্রক্সিমাল জেজুনামে লিপিড শোষণ সহজ করার পর পিত্তলবণগুলোর পরিণতি কী হয়?'
        ),
        answer: l(
          'Bile salts remain in the intestinal lumen until they reach the terminal ileum, where over 95% are actively reabsorbed by the apical sodium-dependent bile acid transporter (ASBT) and returned to the liver via the enterohepatic circulation.',
          'পিত্তলবণগুলো লুমেনেই থাকে যতক্ষণ না তারা প্রান্তীয় ইলিয়ামে পৌঁছায়; সেখানে সোডিয়াম-নির্ভর পরিবাহকের (ASBT) মাধ্যমে ৯৫ শতাংশেরও বেশি পুনরায় শোষিত হয়ে এন্টেরোহেপাটিক চক্রে যকৃতে ফিরে যায়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'macronutrient-digestion-transport-architecture',
    title: l(
      'Interactive Intestinal Brush-Border Absorption Landscape',
      'ইন্টারেক্টিভ অন্ত্রীয় ব্রাশ-বর্ডার পুষ্টি শোষণ রূপরেখা'
    ),
    description: l(
      'Inspect the molecular transport machinery across the enterocyte apical and basolateral membranes, contrasting carbohydrate, protein, and lipid handling.',
      'এন্টারোসাইটের শীর্ষ ও ভিত্তি ঝিল্লির আণবিক পরিবহন ব্যবস্থা পর্যবেক্ষণ করুন এবং শর্করা, প্রোটিন ও চর্বির শোষণ পদ্ধতির পারস্পরিক পার্থক্য বিশ্লেষণ করুন।'
    ),
    disclaimer: l(
      'Schematic representation of mature human jejunal enterocytes; expression levels vary along the duodenal-to-ileal longitudinal axis.',
      'প্রাপ্তবয়স্ক সুস্থ মানুষের জেজুনাম এন্টারোসাইটের রূপরেখা; ডুওডেনাম থেকে ইলিয়াম পর্যন্ত পরিবাহকগুলোর উপস্থিতির মাত্রা পরিবর্তিত হতে পারে।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'sglt1-node',
        label: l('SGLT1: Apical Na+/Glucose Symport', 'SGLT1: শীর্ষ সোডিয়াম/গ্লুকোজ সহ-পরিবহন'),
        description: l(
          'Secondary active symporter coupling 2 Na+ ions to 1 glucose or galactose molecule, energized by the basolateral Na+/K+-ATPase gradient.',
          'গৌণ সক্রিয় পরিবাহক যা বেসোল্যাটারাল সোডিয়াম-পটাশিয়াম পাম্পের শক্তির সাহায্যে দুটি সোডিয়াম আয়নের সাথে একটি গ্লুকোজ বা গ্যালাক্টোজ কোষে টানে।'
        ),
        details: l(
          'High substrate affinity (Km ~0.5 mM). Driven by the transmembrane electrochemical sodium gradient. Mutated in congenital glucose-galactose malabsorption.',
          'সাবস্ট্রেটের প্রতি উচ্চ আসক্তি (Km ~০.৫ mM)। জন্মগত গ্লুকোজ-গ্যালাক্টোজ শোষণহীনতায় এই পরিবাহক নিষ্ক্রিয় থাকে।'
        ),
        sectionId: 'mechanism',
        color: '#059669',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'glut5-node',
        label: l('GLUT5: Apical Fructose Uniporter', 'GLUT5: শীর্ষ ফ্রুক্টোজ সহায়ক পরিবাহক'),
        description: l(
          'Facilitated diffusion transporter dedicated to fructose uptake, functioning independently of luminal sodium concentrations.',
          'সোডিয়াম-নিরপেক্ষ সহায়ক ব্যাপন পরিবাহক যা ফ্রুক্টোজ অণুকে ঘনমাত্রার নতি অনুসারে এন্টারোসাইটের ভেতরে প্রবেশ করায়।'
        ),
        details: l(
          'Saturable carrier with lower affinity and transport capacity than SGLT1. Excess free dietary fructose exceeding glucose can overwhelm GLUT5, causing luminal osmotic diarrhea.',
          'সীমিত শোষণ ক্ষমতাসম্পন্ন পরিবাহক। খাদ্যে অতিরিক্ত ফ্রুক্টোজ থাকলে তা GLUT5-কে ছাপিয়ে গিয়ে অন্ত্রে পানি টেনে ডায়রিয়া ঘটাতে পারে।'
        ),
        sectionId: 'mechanism',
        color: '#10b981',
        svgCoords: { x: 25, y: 95, width: 310, height: 48 },
      },
      {
        id: 'pept1-node',
        label: l('PepT1: Apical H+/Oligopeptide Symport', 'PepT1: শীর্ষ প্রোটন/অলিগোপেপটাইড সহ-পরিবহন'),
        description: l(
          'Tertiary active symporter transporting dipeptides and tripeptides coupled to inward proton movement driven by NHE3 Na+/H+ exchange.',
          'তৃণীয় সক্রিয় পরিবাহক যা ডাইপেপটাইড ও ট্রাইপেপটাইডকে প্রোটনের সাথে কোষে টানে; NHE3 সোডিয়াম-হাইড্রোজেন এক্সচেঞ্জার এই প্রোটন নতি তৈরি করে।'
        ),
        details: l(
          'Responsible for over 60–70% of total dietary amino acid absorption. Cytosolic peptidases subsequently hydrolyze oligopeptides into free amino acids prior to basolateral exit.',
          'খাদ্যের প্রোটিনের ৬০-৭০ শতাংশের বেশি PepT1 দিয়ে কোষে ঢোকে। কোষের ভেতরে থাকা পেপটিডেজ এগুলোকে মুক্ত অ্যামিনো অ্যাসিডে পরিণত করে।'
        ),
        sectionId: 'mechanism',
        color: '#34d399',
        svgCoords: { x: 25, y: 155, width: 310, height: 48 },
      },
      {
        id: 'glut2-node',
        label: l('GLUT2: Basolateral Sugar Efflux', 'GLUT2: ভিত্তি ঝিল্লির শর্করা নির্গমন'),
        description: l(
          'High-capacity, low-affinity facilitated hexose transporter facilitating the exit of glucose, galactose, and fructose into the lamina propria capillaries.',
          'উচ্চ-ক্ষমতাসম্পন্ন পরিবাহক যার মাধ্যমে কোষে জমে থাকা গ্লুকোজ, গ্যালাক্টোজ এবং ফ্রুক্টোজ দ্রুত পোর্টাল কৈশিক রক্তে নির্গত হয়।'
        ),
        details: l(
          'Km ~15–20 mM for glucose. Following high-carbohydrate meals, GLUT2 can transiently translocate to the apical membrane to augment absorption velocity.',
          'খাদ্যে প্রচুর শর্করা থাকলে GLUT2 সাময়িকভাবে শীর্ষ ঝিল্লিতেও স্থানান্তরিত হয়ে শোষণ গতি বাড়াতে সাহায্য করে।'
        ),
        sectionId: 'structure',
        color: '#6ee7b7',
        svgCoords: { x: 25, y: 215, width: 310, height: 48 },
      },
      {
        id: 'chylomicron-node',
        label: l('Chylomicron Assembly & Lacteal Exocytosis', 'কাইলোমাইক্রন তৈরি ও ল্যাকটিয়াল নিঃসরণ'),
        description: l(
          'Complex packaging of re-esterified triacylglycerols, cholesterol esters, and ApoB-48 into nascent chylomicrons entering central lymphatic lacteals.',
          'এন্ডোপ্লাজমিক রেটিকুলামে ট্রাইগ্লিসারাইড, কোলেস্টেরল এবং অ্যাপোলিপোপ্রোটিন বি-৪৮ সমন্বয়ে গঠিত কাইলোমাইক্রন লসিকানালিতে নিঃসৃত হয়।'
        ),
        details: l(
          'Microsomal Triglyceride Transfer Protein (MTP) is essential for lipidation of ApoB-48. Abetalipoproteinemia results from genetic defects in MTP.',
          'অ্যাপো বি-৪৮ এর সাথে চর্বি যুক্ত করতে এমটিপি এনজাইম অপরিহার্য। এমটিপি জিনের ত্রুটিতে অ্যাবিটালাইপোপ্রোটিনেমিয়া রোগ দেখা দেয়।'
        ),
        sectionId: 'integration',
        color: '#047857',
        svgCoords: { x: 25, y: 275, width: 310, height: 48 },
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'A multi-step diagram showing the path of carbohydrates, proteins, and lipids from luminal enzyme breakdown to enterocyte uptake and vascular exit.',
      'লুমেনে এনজাইমীয় ভাঙন থেকে শুরু করে এন্টারোসাইটে প্রবেশ এবং রক্ত ও লসিকায় পৌঁছানো পর্যন্ত শর্করা, প্রোটিন ও চর্বির শোষণ ধাপগুলোর রূপরেখা।'
    ),
    steps: [
      l(
        'Step 1: Luminal digestion cleaves polymers to oligomers and monomers via pancreatic enzymes and bile salt emulsification.',
        'ধাপ ১: অগ্ন্যাশয়ের এনজাইম এবং পিত্তলবণের মাধ্যমে লুমেনের বৃহৎ খাদ্য অণুগুলো ভেঙে ছোট অলিগোমার ও মনোমারে পরিণত হয়।'
      ),
      l(
        'Step 2: Brush-border enzymes complete surface hydrolysis at the microvillar membrane.',
        'ধাপ ২: মাইক্রোভিলাই ঝিল্লিতে অবস্থিত ব্রাশ-বর্ডার এনজাইমগুলো চূড়ান্ত আর্দ্রবিশ্লেষণ সম্পন্ন করে।'
      ),
      l(
        'Step 3: Transporters (SGLT1, GLUT5, PepT1, FAT/CD36) move nutrient products across the apical membrane.',
        'ধাপ ৩: নির্দিষ্ট পরিবাহকসমূহ পুষ্টি উপাদানগুলোকে শীর্ষ ঝিল্লি অতিক্রম করিয়ে এন্টারোসাইটের অভ্যন্তরে নেয়।'
      ),
      l(
        'Step 4: Monosaccharides and amino acids enter the portal vein to the liver, while chylomicrons enter lymphatic lacteals.',
        'ধাপ ৪: শর্করা ও অ্যামিনো অ্যাসিড পোর্টাল শিরার মাধ্যমে যকৃতে যায়, আর কাইলোমাইক্রন লসিকানালিতে প্রবেশ করে।'
      ),
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Introduction to Macronutrient Digestion', 'ম্যাক্রোনিউট্রিয়েন্ট পরিপাকের ভূমিকা'),
          paragraphs: [
            l(
              'Digestion combines mechanical chewing and churning with chemical hydrolysis. Digestive enzymes use water molecules to cleave the chemical bonds holding large food polymers together so that individual building blocks can cross the lining of the small intestine into the bloodstream.',
              'পরিপাক হলো যান্ত্রিক চর্বণ ও মন্থনের সাথে রাসায়নিক আর্দ্রবিশ্লেষণের মেলবন্ধন। পরিপাককারী এনজাইমসমূহ পানির অণু ব্যবহার করে খাদ্যের জটিল পলিমারগুলোর রাসায়নিক বন্ধন ভেঙে এমন ক্ষুদ্র এককে রূপান্তর করে যা ক্ষুদ্রান্ত্রের দেয়াল ভেদ করে রক্তে প্রবেশ করতে পারে।',
            ),
            l(
              'The digestive tract is a continuous muscular tube extending from the mouth to the rectum. Accessory digestive organs, including the salivary glands, liver, gallbladder, and pancreas, supply critical fluids, acid, enzymes, and detergents into the gut lumen without food directly passing through them.',
              'পরিপাকনালি মুখ থেকে পায়ু পর্যন্ত বিস্তৃত একটি অবিচ্ছিন্ন পেশিবহুল নল। লালাগ্রন্থি, যকৃত, পিত্তথলি এবং অগ্ন্যাশয়ের মতো সহায়ক অঙ্গগুলো পরিপাকনালির ভেতরে গুরুত্বপূর্ণ তরল, অ্যাসিড, এনজাইম এবং পিত্ত নিঃসরণ করে, যদিও খাদ্য সরাসরি এদের ভেতর দিয়ে যায় না।',
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Anatomy of the Small Intestine and Brush Border', 'ক্ষুদ্রান্ত্রের গঠন ও ব্রাশ-বর্ডার'),
          paragraphs: [
            l(
              'The small intestine is divided into the duodenum, jejunum, and ileum, and serves as the principal site of nutrient digestion and absorption. Its internal surface is amplified several hundred times by circular mucosal folds, finger-like villi, and microscopic hair-like microvilli, creating a vast exchange surface roughly the size of a studio apartment.',
              'ক্ষুদ্রান্ত্র ডুওডেনাম, জেজুনাম ও ইলিয়ামে বিভক্ত এবং এটি পুষ্টি পরিপাক ও শোষণের প্রধান কেন্দ্র। এর অভ্যন্তরীণ পৃষ্ঠ মিউকোসার বৃত্তাকার ভাঁজ, আঙ্গুলের মতো ভিলাই এবং অতিসূক্ষ্ম মাইক্রোভিলাই দ্বারা কয়েকশত গুণ প্রসারিত হয়ে একটি সুবিশাল শোষণ ক্ষেত্র তৈরি করে।',
            ),
            l(
              'Each individual villus contains a rich network of blood capillaries that drain directly into the portal vein leading to the liver, as well as a specialized central lymphatic vessel termed a lacteal, which collects absorbed dietary fats.',
              'প্রতিটি ভিলাসের ভেতরে কৈশিক রক্তনালির একটি ঘন জালিকা থাকে যা সরাসরি যকৃতে যাওয়া পোর্টাল শিরার সাথে যুক্ত, এবং এর কেন্দ্রে থাকে একটি বিশেষায়িত লসিকানালি বা ল্যাকটিয়াল, যা শোষিত চর্বি সংগ্রহ করে।',
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Enzyme Actions on Carbohydrates, Proteins, and Fats', 'শর্করা, প্রোটিন ও চর্বির ওপর এনজাইমের ক্রিয়া'),
          paragraphs: [
            l(
              'Carbohydrate digestion begins in the mouth with salivary amylase, continues in the small intestine with pancreatic amylase, and finishes at the enterocyte surface where enzymes like lactase and sucrase release single sugars (glucose, galactose, and fructose) for absorption.',
              'শর্করা পরিপাক মুখে লালা অ্যামাইলেজের মাধ্যমে শুরু হয়, ক্ষুদ্রান্ত্রে অগ্ন্যাশয় অ্যামাইলেজের সাহায্যে অগ্রসর হয় এবং এন্টারোসাইটের পৃষ্ঠে ল্যাকটেজ ও সুক্রেজ এনজাইমের ক্রিয়ায় একক শর্করা (গ্লুকোজ, গ্যালাক্টোজ ও ফ্রুক্টোজ) হিসেবে শোষণ সম্পন্ন হয়।',
            ),
            l(
              'Protein digestion begins in the stomach where hydrochloric acid denatures folded proteins and pepsin breaks long chains into peptide fragments. In the intestine, pancreatic proteases and surface peptidases reduce peptides into individual amino acids and small dipeptides and tripeptides.',
              'প্রোটিন পরিপাক পাকস্থলীতে শুরু হয় যেখানে হাইড্রোক্লোরিক অ্যাসিড প্রোটিনের জটিল গঠন খুলে দেয় এবং পেপসিন শিকলগুলোকে পেপটাইড খণ্ডে কাটে। ক্ষুদ্রান্ত্রে অগ্ন্যাশয়ের প্রোটিয়েজ এগুলোকে মুক্ত অ্যামিনো অ্যাসিড ও ক্ষুদ্র পেপটাইডে পরিণত করে।',
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Absorption and Transport Routing: Blood vs Lymph', 'শোষণ ও পরিবহন পথ: রক্ত বনাম লসিকা'),
          paragraphs: [
            l(
              'Water-soluble nutrients, including monosaccharides, amino acids, water-soluble vitamins, and minerals, are transported across enterocytes directly into villus capillaries and travel through the portal vein straight to the liver for primary metabolic inspection and processing.',
              'পানিতে দ্রবণীয় পুষ্টি উপাদানসমূহ—যেমন একক শর্করা, অ্যামিনো অ্যাসিড, পানিতে দ্রবণীয় ভিটামিন ও খনিজ—সরাসরি কৈশিক রক্তনালিতে প্রবেশ করে এবং পোর্টাল শিরার মাধ্যমে প্রথমে যকৃতে পৌঁছে যাচাই ও প্রক্রিয়াজাত হয়।',
            ),
            l(
              'In contrast, digested dietary fats are reassembled inside intestinal cells into large lipoprotein droplets called chylomicrons. Because chylomicrons are too large to penetrate normal blood capillaries, they enter the wider openings of lymphatic lacteals, traveling through the lymphatic system before discharging into the bloodstream.',
              'পক্ষান্তরে, পরিপাককৃত চর্বি অন্ত্রের কোষের ভেতর পুনরায় একত্রিত হয়ে কাইলোমাইক্রন নামক বৃহৎ ড্রপলেটে পরিণত হয়। এরা রক্তনালির সূক্ষ্ম ছিদ্র দিয়ে ঢুকতে না পেরে ল্যাকটিয়ালে প্রবেশ করে এবং লসিকা প্রবাহের মাধ্যমে পরে সাধারণ রক্তসঞ্চালনে পৌঁছায়।',
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Everyday Nutrition Assessment', 'দৈনন্দিন পুষ্টি মূল্যায়ন'),
          paragraphs: [
            l(
              'Understanding nutrient transport explains why a person missing their gallbladder can still digest moderate amounts of fat, and why lactose intolerance occurs when lactase enzymes are insufficient on the brush border, leaving unabsorbed milk sugar to ferment in the colon.',
              'পুষ্টি পরিবহন প্রক্রিয়া জানলে বোঝা যায় কেন পিত্তথলি কেটে ফেলার পরও মানুষ পরিমিত চর্বি হজম করতে পারে, এবং কেন ব্রাশ-বর্ডারে ল্যাকটেজ এনজাইমের স্বল্পতায় দুধের শর্করা অপাচ্য থেকে বৃহদান্ত্রে গাঁজন ও গ্যাসের সৃষ্টি করে।',
            ),
          ],
          bullets: [
            l('Carbohydrates and proteins enter the portal blood directly.', 'শর্করা ও প্রোটিন সরাসরি পোর্টাল রক্তে প্রবেশ করে।'),
            l('Long-chain fats are packaged into chylomicrons and enter lymph.', 'দীর্ঘ চর্বি কাইলোমাইক্রনে মোড়ানো হয়ে লসিকায় প্রবেশ করে।'),
            l('Dietary fiber resists human enzymes and passes to the colon.', 'খাদ্যের আঁশ মানুষের এনজাইমে ভাঙে না এবং বৃহদান্ত্রে চলে যায়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Educational Summary', 'মূল শিক্ষা ও শিক্ষামূলক সারাংশ'),
          paragraphs: [
            l(
              'The small intestine coordinates luminal digestive secretions with microscopic brush-border transporters to convert dietary macronutrients into cellular fuel. Hydrolysis provides the chemical specificity required for selective absorption.',
              'ক্ষুদ্রান্ত্র লুমেনের পরিপাক রস এবং ব্রাশ-বর্ডার পরিবাহকগুলোর সমন্বয়ে খাদ্যের জটিল উপাদানকে কোষীয় জ্বালানিতে রূপান্তর করে। আর্দ্রবিশ্লেষণ প্রক্রিয়া নির্বাচনী শোষণের জন্য প্রয়োজনীয় রাসায়নিক বিশুদ্ধতা নিশ্চিত করে।',
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
          heading: l('Luminal Hydrolysis and Pancreatic Zymogen Cascades', 'লুমেনের আর্দ্রবিশ্লেষণ ও অগ্ন্যাশয়ের জাইমোজেন সক্রিয়করণ'),
          paragraphs: [
            l(
              'Macronutrient digestion in the small intestine requires the sequential activation of pancreatic zymogens within the intestinal lumen [1, 2]. Duodenal mucosal enteropeptidase (enterokinase) cleaves the N-terminal hexapeptide of trypsinogen to generate active trypsin [2]. Trypsin then autocatalytically activates chymotrypsinogen, proelastase, and procarboxypeptidases A and B, initiating an irreversible proteolytic cascade that hydrolyzes dietary proteins without damaging pancreatic tissue [1, 3].',
              'ক্ষুদ্রান্ত্রে ম্যাক্রোনিউট্রিয়েন্ট পরিপাকের জন্য লুমেনে অগ্ন্যাশয়ের জাইমোজেন এনজাইমগুলোর ধারাবাহিক সক্রিয়করণ অপরিহার্য [1, 2]। ডুওডেনাল মিউকোসার এন্টারোপেপটিডেজ ট্রিপসিনোজেনের প্রান্তীয় হেক্সাপেপটাইড কেটে সক্রিয় ট্রিপসিন তৈরি করে [2]। ট্রিপসিন অতঃপর কাইমোট্রিপসিনোজেন, প্রো-ইলাস্টেজ এবং প্রোকার্বক্সিপেপটিডেজকে সক্রিয় করে একটি একমুখী প্রোটিওলাইটিক ধারা শুরু করে যা অগ্ন্যাশয়ের ক্ষতি না করেই প্রোটিন ভাঙতে সক্ষম [1, 3]।'
            ),
            l(
              'Luminal carbohydrate digestion is mediated by pancreatic alpha-amylase, an endoglucosidase that specifically hydrolyzes internal alpha-1,4-glucosidic bonds of starch but cannot cleave terminal bonds, alpha-1,6 branch points, or adjacent alpha-1,4 linkages [1, 2]. The resulting luminal products comprise maltose, maltotriose, and alpha-limit dextrins containing five to nine glucose residues, which require further oligomeric hydrolysis at the microvillar surface [2].',
              'লুমেনের শর্করা পরিপাক অগ্ন্যাশয় আলফা-অ্যামাইলেজ দ্বারা পরিচালিত হয়, যা শ্বেতসারের অভ্যন্তরীণ আলফা-১,৪ বন্ধন কাটে কিন্তু প্রান্তীয় বন্ধন বা আলফা-১,৬ শাখা কাটতে পারে না [1, 2]। এর ফলে মল্টোজ, মল্টোট্রায়োজ এবং ৫ থেকে ৯টি গ্লুকোজযুক্ত আলফা-লিমিট ডেক্সট্রিন তৈরি হয়, যা শোষণের পূর্বে ব্রাশ-বর্ডার ঝিল্লিতে পুনরায় ভাঙার প্রয়োজন পড়ে [2]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Brush-Border Membrane Hydrolases and Surface Architecture', 'ব্রাশ-বর্ডার ঝিল্লির হাইড্রোলেজ ও পৃষ্ঠীয় সংগঠন'),
          paragraphs: [
            l(
              'The enterocyte apical brush-border membrane is embedded with heavily glycosylated transmembrane hydrolases organized into discrete catalytic domains [1, 2]. The sucrase-isomaltase complex consists of two enzymatic subunits derived from a single polypeptide precursor: isomaltase cleaves alpha-1,6 branch points, while sucrase hydrolyzes sucrose into glucose and fructose [2]. Maltase-glucoamylase provides high-affinity cleavage of terminal alpha-1,4 bonds of linear dextrins [1].',
              'এন্টারোসাইটের শীর্ষ ব্রাশ-বর্ডারে ভারী গ্লাইকোসিলেটেড ট্রান্সমেমব্রেন হাইড্রোলেজ এনজাইমগুলো সজ্জিত থাকে [1, 2]। সুক্রেজ-আইসোমল্টেজ কমপ্লেক্স দুটি সাব-ইউনিট নিয়ে গঠিত: আইসোমল্টেজ আলফা-১,৬ শাখা কাটে এবং সুক্রেজ সুক্রোজকে গ্লুকোজ ও ফ্রুক্টোজে আর্দ্রবিশ্লেষিত করে [2]। মল্টেজ-গ্লুকোঅ্যামাইলেজ সরল ডেক্সট্রিনের প্রান্তীয় বন্ধন কাটার কাজ সম্পন্ন করে [1]।'
            ),
            l(
              'Lactase-phlorizin hydrolase (LPH) is the sole intestinal beta-galactosidase capable of cleaving lactose into glucose and galactose [1, 3]. Genetic regulation of the LCT gene promoter on chromosome 2 determines adult lactase persistence or non-persistence [1]. Undigested lactose increases luminal osmotic pressure and undergoes colonic bacterial fermentation to hydrogen, methane, and short-chain fatty acids [1, 3].',
              'ল্যাকটেজ-ফ্লোরিজিন হাইড্রোলেজ (LPH) হলো অন্ত্রের একমাত্র বিটা-গ্যালাক্টোসিডেজ যা দুধের ল্যাকটোজকে গ্লুকোজ ও গ্যালাক্টোজে ভাঙে [1, 3]। ক্রোমোজোম ২-এর এলসিটি প্রমোটারের বংশগত নিয়ন্ত্রণ প্রাপ্তবয়স্কদের ল্যাকটেজ স্থায়িত্ব বা স্বল্পতা নির্ধারণ করে [1]। অপাচ্য ল্যাকটোজ লুমেনের অভিস্রবণ চাপ বাড়ায় এবং বৃহদান্ত্রে জীবাণুর গাঁজনে হাইড্রোজেন, মিথেন ও গ্যাস তৈরি করে [1, 3]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Epithelial Transporter Kinetics: SGLT1, GLUT5, PepT1, and GLUT2', 'আবরণী পরিবহন গতিবিদ্যা: SGLT1, GLUT5, PepT1 ও GLUT2'),
          paragraphs: [
            l(
              'Monosaccharide uptake across the apical membrane is compartmentalized between distinct transporter classes [1, 2]. SGLT1 couples the downhill transport of two Na+ ions to the uphill influx of one glucose or galactose molecule against steep intracellular concentration gradients, energized by the basolateral Na+/K+-ATPase pump [1]. In contrast, GLUT5 mediates facilitated sodium-independent diffusion of fructose, which exhibits lower kinetic capacity and can be overwhelmed by high fructose loads [2].',
              'শীর্ষ ঝিল্লি অতিক্রম করে একক শর্করা শোষণ দুটি ভিন্ন পরিবাহকের মাধ্যমে ঘটে [1, 2]। SGLT1 দুটি সোডিয়াম আয়নের অনুকূল প্রবেশের সাথে একটি গ্লুকোজ বা গ্যালাক্টোজ অণুকে ঘনমাত্রার বিপরীতে কোষে টানে, যা বেসোল্যাটারাল সোডিয়াম পাম্প দ্বারা শক্তিপ্রাপ্ত [1]। অন্যদিকে GLUT5 সোডিয়াম-নিরপেক্ষভাবে ফ্রুক্টোজের সহায়ক ব্যাপন ঘটায়, যার পরিবহন ক্ষমতা সীমিত হওয়ায় অতিরিক্ত ফ্রুক্টোজে তা অন্ত্রে অপাচ্য থেকে যেতে পারে [2]।'
            ),
            l(
              'Peptide absorption is mediated by PepT1 (SLC15A1), a high-capacity symporter that utilizes an electrochemical proton gradient maintained by the apical NHE3 Na+/H+ exchanger to transport di- and tripeptides [3, 4]. Intracellular cytosolic peptidases rapidly hydrolyze absorbed oligopeptides into free amino acids, which subsequently exit the basolateral membrane via neutral and basic amino acid transporters (LAT2, TAT1, y+LAT1) into the portal circulation [4].',
              'পেপটাইড শোষণ পরিচালিত হয় PepT1 (SLC15A1) পরিবাহক দ্বারা, যা শীর্ষ NHE3 সোডিয়াম-হাইড্রোজেন এক্সচেঞ্জার দ্বারা সৃষ্ট প্রোটন নতি ব্যবহার করে ডাই- ও ট্রাইপেপটাইড কোষে প্রবেশ করায় [3, 4]। কোষের অভ্যন্তরীণ পেপটিডেজ এগুলোকে মুক্ত অ্যামিনো অ্যাসিডে পরিণত করে, যা বেসোল্যাটারাল ঝিল্লি অতিক্রম করে পোর্টাল রক্তে পৌঁছায় [4]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Lipid Emulsification, Micellar Solubilization & Chylomicron Secretion', 'লিপিড ইমালসিফিকেশন, মাইসেল গঠন ও কাইলোমাইক্রন নিঃসরণ'),
          paragraphs: [
            l(
              'Dietary triacylglycerols are insoluble in aqueous luminal fluid and require bile salt emulsification to increase the accessible oil-water surface interface [1, 2]. Pancreatic lipase, anchored by colipase to circumvent bile acid inhibition, hydrolyzes triacylglycerols at the sn-1 and sn-3 positions, yielding free fatty acids and 2-monoacylglycerol [2]. These hydrophobic products associate with bile salts, cholesterol, and fat-soluble vitamins to form mixed polymolecular micelles that diffuse across the unstirred water layer [1, 3].',
              'খাদ্যের ট্রাইগ্লিসারাইড জলীয় পরিবেশে অদ্রবণীয় হওয়ায় পিত্তলবণের মাধ্যমে ইমালসিফিকেশন আবশ্যক হয় যাতে তেল-পানির সংযোগ পৃষ্ঠ বৃদ্ধি পায় [1, 2]। অগ্ন্যাশয় লাইপেজ কোলিপেজের সহায়তায় পিত্তলবণের বাধা অতিক্রম করে ১ ও ৩ নম্বর পজিশনের এস্টার বন্ধন কেটে মুক্ত ফ্যাটি অ্যাসিড ও ২-মনোঅ্যাসিলগ্লিসারল তৈরি করে [2]। এই হাইড্রোফোবিক উৎপাদগুলো পিত্তলবণের সাথে মিশ্র মাইসেল গঠন করে অন্ত্রের প্রাচীরে ব্যাপিত হয় [1, 3]।'
            ),
            l(
              'Inside the enterocyte smooth endoplasmic reticulum, fatty acids and 2-monoacylglycerols are re-esterified into triacylglycerols by monoacylglycerol acyltransferase (MGAT) and diacylglycerol acyltransferase (DGAT) [1, 3]. Microsomal triglyceride transfer protein (MTP) incorporates these neutral lipids onto newly translated apolipoprotein B-48 to assemble nascent chylomicrons, which undergo exocytosis into mesenteric lacteals and enter the thoracic duct [1, 2].',
              'এন্টারোসাইটের স্মুথ এন্ডোপ্লাজমিক রেটিকুলামে এমজিএটি ও ডিজিএটি এনজাইমের ক্রিয়ায় ফ্যাটি অ্যাসিড পুনরায় ট্রাইগ্লিসারাইডে রূপান্তর হয় [1, 3]। মাইক্রোসোমাল ট্রাইগ্লিসারাইড ট্রান্সফার প্রোটিন (MTP) এই লিপিডসমূহকে নতুন তৈরি অ্যাপোলিপোপ্রোটিন বি-৪৮ এর সাথে যুক্ত করে কাইলোমাইক্রন গঠন করে, যা মেসেন্টেরিক ল্যাকটিয়ালে নিঃসৃত হয়ে থোরাসিক ডাক্ট দিয়ে রক্তে যায় [1, 2]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Correlations: Malabsorption & Transport Pathophysiology', 'ক্লিনিক্যাল সংযোগ: অপশোষণ ও পরিবহন প্যাথোফিজিওলজি'),
          paragraphs: [
            l(
              'Deficiencies in digestive enzymes or transporters manifest as malabsorption syndromes [1, 3]. Exocrine pancreatic insufficiency (e.g., in cystic fibrosis or chronic pancreatitis) produces steatorrhea due to deficient lipase secretion [2]. Abetalipoproteinemia, caused by autosomal recessive mutations in the MTTP gene, completely blocks chylomicron assembly, leading to enterocyte lipid engorgement, fat-soluble vitamin malabsorption, and spinocerebellar ataxia [1, 3].',
              'পরিপাককারী এনজাইম বা পরিবাহকের ঘাটতিতে অপশোষণ রোগ দেখা দেয় [1, 3]। সিস্টিক ফাইব্রোসিস বা ক্রনিক প্যানক্রিয়াটাইটিসে অগ্ন্যাশয়ের লাইপেজ স্বল্পতার কারণে মলের সাথে চর্বি অপচয় (স্টিয়াটোরিয়া) ঘটে [2]। অন্যদিকে MTTP জিনের ত্রুটিতে সৃষ্ট অ্যাবিটালাইপোপ্রোটিনেমিয়ায় কাইলোমাইক্রন তৈরি বন্ধ হয়ে যায়, ফলে এন্টারোসাইটে চর্বি আটকে থাকে এবং স্নেহ-দ্রবণীয় ভিটামিনের মারাত্মক ঘাটতি ও স্নায়বিক সমস্যা হয় [1, 3]।'
            ),
          ],
          bullets: [
            l('Pancreatic zymogen activation requires initial duodenal enteropeptidase cleavage.', 'অগ্ন্যাশয় জাইমোজেন সক্রিয় হতে ডুওডেনামের এন্টারোপেপটিডেজের সূচনা অপরিহার্য।'),
            l('SGLT1 couples Na+ influx to glucose uptake; GLUT5 transports fructose independently of Na+.', 'SGLT1 সোডিয়ামের সাথে গ্লুকোজ টানে; GLUT5 সোডিয়াম ছাড়াই ফ্রুক্টোজ পরিবহন করে।'),
            l('Chylomicrons transport dietary lipids through lymph, bypassing initial hepatic first-pass.', 'কাইলোমাইক্রন লসিকার মাধ্যমে চর্বি বহন করে যকৃতের প্রাথমিক ফিল্টারিং বাইপাস করে।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Academic Review', 'মূল শিক্ষা ও একাডেমিক সারাংশ'),
          paragraphs: [
            l(
              'Macronutrient digestion is a coordinated multi-organ sequence integrating luminal zymogen activation, apical brush-border hydrolysis, and specialized transporter kinetics. Portal and lymphatic routing reflect the physicochemical divergence between water-soluble substrates and re-esterified long-chain lipids.',
              'ম্যাক্রোনিউট্রিয়েন্ট পরিপাক হলো লুমেনের জাইমোজেন সক্রিয়করণ, ব্রাশ-বর্ডার হাইড্রোলাইসিস এবং বিশেষায়িত পরিবাহকের সমন্বিত প্রক্রিয়া। পানিতে দ্রবণীয় পুষ্টি উপাদান পোর্টাল রক্তে যায় আর দীর্ঘ-শৃঙ্খল চর্বি কাইলোমাইক্রন হিসেবে লসিকাপথে সঞ্চালিত হয়।',
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'integration',
          heading: l('Advanced Molecular Dynamics: Transporter Translocation & Barrier Regulation', 'উচ্চতর আণবিক গতিবিদ্যা: পরিবাহক স্থানান্তর ও প্রাচীর নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Recent molecular investigations reveal that apical glucose transport is not solely dependent on constitutive SGLT1 kinetics; high luminal glucose concentrations trigger rapid calcium- and PKC-beta-II-dependent insertion of basolateral GLUT2 into the apical brush-border membrane [1, 2]. This dynamic apical GLUT2 translocation provides a high-capacity, low-affinity diffusive conduit that permits rapid postprandial glucose assimilation, but becomes dysregulated in insulin-resistant metabolic syndrome [1, 2].',
              'সাম্প্রতিক গবেষণায় দেখা গেছে যে শীর্ষ গ্লুকোজ পরিবহন কেবল SGLT1-এর স্থির গতিবিদ্যার ওপর নির্ভরশীল নয়; লুমেনে উচ্চ গ্লুকোজের উপস্থিতিতে ক্যালসিয়াম ও পিকেসি-বিটা-২ সংকেতের মাধ্যমে বেসোল্যাটারাল GLUT2 সাময়িকভাবে শীর্ষ ব্রাশ-বর্ডারে স্থানান্তরিত হয় [1, 2]। এই গতিশীল স্থানান্তর খাবার-পরবর্তী দ্রুত শোষণে সহায়তা করে, তবে ইনসুলিন রেজিস্ট্যান্স ও মেটাবলিক সিন্ড্রোমে এই নিয়ন্ত্রণ বিঘ্নিত হয় [1, 2]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Frontier Research: Incretin Secretion & Enteroendocrine Nutrient Sensing', 'অত্যাধুনিক গবেষণা: ইনক্রেটিন ক্ষরণ ও এন্টারোএন্ডোক্রাইন পুষ্টি সংবেদন'),
          paragraphs: [
            l(
              'Enteroendocrine L-cells dispersed along the ileum express the same transport machinery (SGLT1, PepT1, and G-protein coupled receptors FFAR1/4) as absorptive enterocytes [1, 4]. Transporter-mediated depolarizing ion currents directly couple nutrient appearance to the calcium-dependent exocytosis of glucagon-like peptide-1 (GLP-1) and peptide YY (PYY), providing the mechanistic basis for the entero-insular axis and modern incretin-based metabolic pharmacotherapy [1, 3].',
              'ইলিয়ামে অবস্থিত এন্টারোএন্ডোক্রাইন এল-কোষগুলো সাধারণ এন্টারোসাইটের মতোই SGLT1, PepT1 এবং ফ্যাটি অ্যাসিড রিসেপ্টর (FFAR1/4) প্রকাশ করে [1, 4]। পরিবাহক দিয়ে আয়ন প্রবেশের ফলে কোষের মেমব্রেন ডিপোলারাইজড হয়ে ক্যালসিয়াম নিঃসরণের মাধ্যমে GLP-1 ও PYY হরমোন ক্ষরিত হয়, যা খাদ্য গ্রহণের সাথে ইনসুলিন নিঃসরণের জৈবিক যোগসূত্র এবং আধুনিক ইনক্রেটিন ওষুধের ভিত্তি রচনা করে [1, 3]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'Which apical membrane transport mechanism is directly responsible for the entry of intact dipeptides and tripeptides into enterocytes?',
      'কোন শীর্ষ ঝিল্লি পরিবাহক ব্যবস্থাটি অক্ষত ডাইপেপটাইড ও ট্রাইপেপটাইডকে এন্টারোসাইটে প্রবেশের জন্য সরাসরি দায়ী?'
    ),
    options: [
      l('Peptide Transporter 1 (PepT1) proton symport', 'পেপটাইড ট্রান্সপোর্টার ১ (PepT1) প্রোটন সহ-পরিবহন'),
      l('Sodium-Glucose Cotransporter 1 (SGLT1)', 'সোডিয়াম-গ্লুকোজ কো-ট্রান্সপোর্টার ১ (SGLT1)'),
      l('Facilitated GLUT5 diffusion', 'সহায়ক GLUT5 ব্যাপন'),
      l('Pinocytotic fluid endocytosis', 'পিনোসাইটোটিক তরল এন্ডোসাইটোসিস'),
    ],
    correctIndex: 0,
    explanation: l(
      'PepT1 utilizes an inward electrochemical proton gradient generated by the apical NHE3 exchanger to transport oligopeptides, accounting for the majority of dietary amino acid entry.',
      'PepT1 শীর্ষ NHE3 এক্সচেঞ্জার দ্বারা সৃষ্ট প্রোটন নতি ব্যবহার করে ডাই- ও ট্রাইপেপটাইড পরিবহন করে, যা খাদ্যের অধিকাংশ অ্যামিনো অ্যাসিডের কোষে প্রবেশের প্রধান মাধ্যম।'
    ),
  },
}
