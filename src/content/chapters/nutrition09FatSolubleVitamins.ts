import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const fatSolubleVitaminsRefs = [
  {
    id: 'gropper-advanced-nutrition-vitamins',
    authors: 'Sareen S. Gropper, Jack L. Smith, Timothy P. Carr',
    title: 'Advanced Nutrition and Human Metabolism, 8th Edition, Chapter 10: Fat-Soluble Vitamins',
    organization: 'Cengage Learning',
    year: 2021,
    url: 'https://www.cengage.com/c/advanced-nutrition-and-human-metabolism-8e-gropper/9780357449813/',
  },
  {
    id: 'holick-nejm-vitamin-d',
    authors: 'Michael F. Holick',
    title: 'Vitamin D Deficiency',
    organization: 'The New England Journal of Medicine',
    year: 2007,
    url: 'https://doi.org/10.1056/NEJMra070553',
    doi: '10.1056/NEJMra070553',
  },
  {
    id: 'dowd-chem-rev-vitamin-k',
    authors: 'Paul Dowd, Seung-Wook Ham, Sankar Naganathan, et al.',
    title: 'The Mechanism of Action of Vitamin K',
    organization: 'Chemical Reviews',
    year: 1995,
    url: 'https://doi.org/10.1021/cr00033a004',
    doi: '10.1021/cr00033a004',
  },
  {
    id: 'traber-free-rad-biol-vit-e',
    authors: 'Maret G. Traber, Jeffrey Atkinson',
    title: 'Vitamin E, antioxidant and nothing more',
    organization: 'Free Radical Biology and Medicine',
    year: 2007,
    url: 'https://doi.org/10.1016/j.freeradbiomed.2007.03.024',
    doi: '10.1016/j.freeradbiomed.2007.03.024',
  },
  {
    id: 'wald-science-visual-cycle',
    authors: 'George Wald',
    title: 'Molecular Basis of Visual Excitation',
    organization: 'Science (Nobel Lecture)',
    year: 1968,
    url: 'https://doi.org/10.1126/science.162.3850.230',
    doi: '10.1126/science.162.3850.230',
  },
]

export const nutrition09FatSolubleVitaminsLesson: LessonTopic = {
  id: 'topic.nutrition.fat-soluble-vitamins',
  slug: 'fat-soluble-vitamins',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '09 · Fat-Soluble Vitamins (A, D, E, K): Genomic Signaling, Phototransduction & Antioxidation',
    '০৯ · চর্বি-দ্রবণীয় ভিটামিন (A, D, E, K): জিনগত সংকেত, আলোক-সংবেদন ও অ্যান্টিঅক্সিডেশন'
  ),
  summary: l(
    'The molecular physiology of the fat-soluble vitamins: retinoid nuclear receptors (RAR/RXR) and the rhodopsin visual cycle, photolytic synthesis and renal CYP27B1 activation of calcitriol for enterocyte TRPV6 calcium transport, alpha-tocopherol chain-breaking antioxidation in lipid membranes, and the VKORC1 gamma-glutamyl carboxylation cycle.',
    'চর্বি-দ্রবণীয় ভিটামিনের আণবিক শারীরবৃত্ত: রেটিনয়েড নিউক্লিয়ার রিসেপ্টর (RAR/RXR) ও রডোপসিন দৃষ্টি চক্র, ত্বকে অতিবেগুনি রশ্মির প্রভাবে সংশ্লেষণ ও বৃক্কে CYP27B1 দ্বারা সক্রিয় ক্যালসিট্রিওল গঠন, লিপিড মেমব্রেনে আলফা-টোকোফেরলের পারঅক্সিডেশন প্রতিরোধ এবং VKORC1 গামা-গ্লুটামিল কার্বক্সিলেশন চক্র।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Map the visual cycle of 11-cis-retinal and explain how retinoic acid binds RAR/RXR heterodimers to govern epithelial differentiation and immune tolerance.',
      '১১-সিস-রেটিনালের দৃষ্টি চক্র ব্যাখ্যা করা এবং রেটিনোয়িক অ্যাসিড কীভাবে RAR/RXR রিসেপ্টরের মাধ্যমে এপিথেলিয়াল রূপান্তর ও রোগপ্রতিরোধ নিয়ন্ত্রণ করে তা বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Trace the dual-organ enzymatic hydroxylation of vitamin D (hepatic CYP2R1 and renal CYP27B1) and its genomic induction of enterocyte TRPV6 and calbindin-D9k.',
      'ভিটামিন ডি-এর দ্বি-স্তরীয় হাইড্রক্সিলেশন (যকৃতে CYP2R1 ও বৃক্কে CYP27B1) এবং অন্ত্রের কোষে TRPV6 ও ক্যালবাইন্ডিন-D9k জিন উদ্দীপনার আণবিক গতিপথ নিরূপণ করতে পারা।'
    ),
    l(
      'Evaluate how alpha-tocopherol interrupts lipid peroxidation chain reactions in phospholipid bilayers and undergoes redox recycling by ascorbic acid.',
      'ফসফোলিপিড দ্বি-স্তরে আলফা-টোকোফেরল কীভাবে পারঅক্সিডেশন শৃঙ্খল প্রতিক্রিয়া বন্ধ করে এবং অ্যাসকরবিক অ্যাসিড দ্বারা পুনরায় বিজারিত হয় তা মূল্যায়ন করতে পারা।'
    ),
    l(
      'Describe the vitamin K cycle, gamma-glutamyl carboxylase (GGCX), VKORC1 recycling, and the physiological basis of prophylactic vitamin K administration in newborns.',
      'ভিটামিন কে চক্র, গামা-গ্লুটামিল কার্বক্সিলেজ, VKORC1 পুনর্ব্যবহার এবং নবজাতকের রক্তক্ষরণ প্রতিরোধে ভিটামিন কে প্রয়োগের শারীরবৃত্তীয় ভিত্তি ব্যাখ্যা করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.macronutrient-digestion', 'topic.nutrition.dietary-lipids-fatty-acids-pufa'],
  relatedTopicIds: ['topic.metabolism.cholesterol-steroids', 'topic.metabolism.organ-metabolic-specialization'],
  references: fatSolubleVitaminsRefs,
  evidenceBySection: {
    introduction: ['gropper-advanced-nutrition-vitamins', 'wald-science-visual-cycle'],
    structure: ['gropper-advanced-nutrition-vitamins', 'wald-science-visual-cycle'],
    mechanism: ['holick-nejm-vitamin-d', 'gropper-advanced-nutrition-vitamins'],
    integration: ['dowd-chem-rev-vitamin-k', 'traber-free-rad-biol-vit-e'],
    practice: ['holick-nejm-vitamin-d', 'dowd-chem-rev-vitamin-k'],
    takeaways: ['gropper-advanced-nutrition-vitamins', 'holick-nejm-vitamin-d'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Fat-Soluble Vitamin Absorption & Systemic Transport', '১. চর্বি-দ্রবণীয় ভিটামিনের শোষণ ও লসিকা সঞ্চালন'), sectionId: 'introduction' },
      { id: 'sec-vit-a', label: l('2. Vitamin A: Retinoid Chemistry, Phototransduction & RAR/RXR', '২. ভিটামিন এ: রেটিনয়েড রসায়ন, দৃষ্টি চক্র ও RAR/RXR'), sectionId: 'structure' },
      { id: 'sec-vit-d', label: l('3. Vitamin D: Photolysis, CYP27B1 Hydroxylation & VDR Signaling', '৩. ভিটামিন ডি: ত্বকের সংশ্লেষণ, CYP27B1 রূপান্তর ও VDR সংকেত'), sectionId: 'mechanism' },
      { id: 'sec-vit-e-k', label: l('4. Vitamin E Membrane Protection & Vitamin K Coagulation Cycle', '৪. ভিটামিন ই মেমব্রেন সুরক্ষা ও ভিটামিন কে রক্ত তঞ্চন চক্র'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Clinical Scenarios: Rickets, VKDB & Carotenoid Cleavage', '৫. ক্লিনিক্যাল সমাধান: রিকেটস, নবজাতকের রক্তক্ষরণ ও ভিটামিন রূপান্তর'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Summary & Review Checkpoints', '৬. উচ্চ-গুরুত্বপূর্ণ সারাংশ ও রিভিশন চেকপয়েন্ট'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Retinoic Acid Receptors (RAR / RXR)', 'রেটিনোয়িক অ্যাসিড রিসেপ্টর (RAR / RXR)'),
        definition: l(
          'Nuclear hormone receptors that form heterodimers upon binding all-trans or 9-cis retinoic acid, docking onto retinoic acid response elements (RARE) to regulate cellular transcription and mucosal epithelial differentiation.',
          'নিউক্লিয়ার হরমোন রিসেপ্টর যা অল-ট্রান্স বা ৯-সিস রেটিনোয়িক অ্যাসিডের সাথে যুক্ত হয়ে ডিএনএ-এর RARE অংশে বসে মিউকোসাল এপিথেলিয়াম গঠন ও কোষের রূপান্তর নিয়ন্ত্রণ করে।'
        ),
      },
      {
        term: l('Calcitriol (1,25-Dihydroxyvitamin D3)', 'ক্যালসিট্রিওল (১,২৫-ডাইহাইড্রক্সিভিটামিন ডি৩)'),
        definition: l(
          'The biologically active secosteroid hormone formed by renal 1-alpha-hydroxylation (CYP27B1), which binds the nuclear Vitamin D Receptor (VDR) to upregulate intestinal calcium and phosphate transport proteins.',
          'বৃক্কের CYP27B1 এনজাইম দ্বারা প্রস্তুতকৃত সক্রিয় স্টেরয়েড হরমোন, যা নিউক্লিয়ার VDR রিসেপ্টরের সাথে যুক্ত হয়ে ক্ষুদ্রান্ত্রে ক্যালসিয়াম ও ফসফেট শোষণের বাহক প্রোটিনগুলোর জিন সক্রিয় করে।'
        ),
      },
      {
        term: l('Alpha-Tocopherol Transfer Protein (alpha-TTP)', 'আলফা-টোকোফেরল ট্রান্সফার প্রোটিন (alpha-TTP)'),
        definition: l(
          'A specialized hepatic cytosolic transport protein that selectively binds 2R-stereoisomers of alpha-tocopherol, facilitating its incorporation into nascent VLDL for peripheral tissue delivery while allowing other tocopherols to be degraded.',
          'যকৃতের সাইটোসোলে অবস্থিত পরিবহন প্রোটিন যা খাদ্য থেকে প্রাপ্ত আলফা-টোকোফেরলকে বেছে নিয়ে ভিএলডিএলে লোড করে রক্তে পাঠায় এবং বাকি অপ্রয়োজনীয় টোকোফেরলগুলোকে ভেঙে ফেলে।'
        ),
      },
      {
        term: l('Vitamin K Epoxide Reductase (VKORC1)', 'ভিটামিন কে ইপক্সাইড রিডাক্টেজ (VKORC1)'),
        definition: l(
          'The integral membrane enzyme that reduces vitamin K 2,3-epoxide back to active vitamin K hydroquinone, regenerating the essential cofactor required by gamma-glutamyl carboxylase for clotting factor activation; the therapeutic target of warfarin.',
          'মেমব্রেন-সংযুক্ত এনজাইম যা জারিত ভিটামিন কে ইপক্সাইডকে পুনরায় কার্যকরী ভিটামিন কে হাইড্রোকুইনোনে বিজারিত করে; ওয়ারফারিন জাতীয় রক্ত পাতলা করার ওষুধ এই এনজাইমকে বাধা দেয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Evaluating Vitamin D Deficiency and Secondary Hyperparathyroidism', 'ভিটামিন ডি ঘাটতি এবং সেকেন্ডারি হাইপারপ্যারাথাইরয়েডিজম বিশ্লেষণ'),
        steps: [
          l(
            'Step 1: Obtain serum 25-hydroxyvitamin D [25(OH)D] rather than 1,25(OH)2D, because 25(OH)D has a 2-to-3-week half-life and reflects total hepatic stores without parathyroid feedback perturbation. Measured level = 12 ng/mL (profound deficiency, threshold < 20 ng/mL).',
            'ধাপ ১: রক্তে ২৫-হাইড্রক্সিভিটামিন ডি পরিমাপ করুন; কারণ এর অর্ধায়ু ২-৩ সপ্তাহ এবং এটি যকৃতের সঞ্চিত রূপকে নিরপেক্ষভাবে নির্দেশ করে। পরিমাপকৃত মাত্রা = ১২ ng/mL (মারাত্মক ঘাটতি, স্বাভাবিক মাত্রা > ২০ ng/mL)।'
          ),
          l(
            'Step 2: Note the physiological compensatory response: diminished calcitriol synthesis lowers enterocyte TRPV6 active calcium transport, causing ionized hypocalcemia.',
            'ধাপ ২: শারীরবৃত্তীয় প্রতিক্রিয়া লক্ষ্য করুন: ক্যালসিট্রিওল কমে যাওয়ায় অন্ত্রের TRPV6 চ্যানেল দিয়ে ক্যালসিয়াম শোষণ কমে যায়, যার ফলে রক্তে ক্যালসিয়াম হ্রাস পায়।'
          ),
          l(
            'Step 3: Calcium-Sensing Receptors (CaSR) on the parathyroid glands detect hypocalcemia, triggering vigorous secretion of Parathyroid Hormone (PTH). Serum PTH rises to 145 pg/mL (secondary hyperparathyroidism).',
            'ধাপ ৩: প্যারাথাইরয়েড গ্রন্থির CaSR সেন্সর ক্যালসিয়ামের পতন টের পেয়ে প্যারাথাইরয়েড হরমোন (PTH) নিঃসরণ বাড়িয়ে দেয় (মাত্রা বেড়ে ১৪৫ pg/mL হয়)।'
          ),
          l(
            'Step 4: Elevated PTH stimulates renal CYP27B1 to transiently maintain 1,25(OH)2D within the normal reference range, but concurrently drives osteoclast-mediated bone resorption and renal phosphate wasting, leading to osteomalacia.',
            'ধাপ ৪: উচ্চ পিটিএইচ বৃক্কে CYP27B1 কে জোরপূর্বক সক্রিয় রেখে সাময়িকভাবে ১,২৫(OH)2D স্বাভাবিক রাখে, কিন্তু হাড় থেকে ক্যালসিয়াম ও ফসফেট খসিয়ে অস্থি দুর্বল করে ফেলে (অস্টিওম্যালাসিয়া)।'
          ),
        ],
        conclusion: l(
          '1,25(OH)2D can be falsely normal or elevated in severe vitamin D deficiency due to PTH overdrive; always assess 25(OH)D and PTH concurrently.',
          'পিটিএইচের অতিরিক্ত উদ্দীপনার কারণে মারাত্মক ভিটামিন ডি ঘাটতিতেও ১,২৫(OH)2D আপাতদৃষ্টিতে স্বাভাবিক বা বেশি থাকতে পারে; তাই রোগ নির্ণয়ে ২৫(OH)D ও পিটিএইচ একত্রে পরীক্ষা করা বাধ্যতামূলক।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why must newborn infants receive prophylactic intramuscular vitamin K within hours of birth?',
          'নবজাতক শিশুদের জন্মের পরপরই কেন পেশিতে ভিটামিন কে ইনজেকশন দেওয়া বাধ্যতামূলক?'
        ),
        answer: l(
          'Newborns have minimal hepatic vitamin K storage due to poor placental transfer, human breast milk contains low phylloquinone concentrations (~1–2 mcg/L), and their sterile gastrointestinal tract lacks menaquinone-synthesizing microbiota. Without prophylaxis, impaired gamma-carboxylation of factors II, VII, IX, and X produces life-threatening Vitamin K Deficiency Bleeding (VKDB), frequently presenting as intracranial hemorrhage.',
          'নবজাতকদের যকৃতে ভিটামিন কে সঞ্চয় থাকে না কারণ এটি প্লাসেন্টা ভেদ করে কম যায়, মায়ের দুধে ভিটামিন কে কম থাকে এবং শিশুদের অন্ত্রে ভিটামিন তৈরি করার মতো ব্যাকটেরিয়া থাকে না। ইনজেকশন না দিলে রক্ত তঞ্চনকারী ফ্যাক্টরগুলোর কাজ বন্ধ হয়ে মারাত্মক অভ্যন্তরীণ রক্তক্ষরণ (VKDB) এবং ব্রেন হেমোরেজ হতে পারে।'
        ),
      },
      {
        question: l(
          'What enzymatic step couples Vitamin E antioxidation with Vitamin C in the cell membrane?',
          'কোষের মেমব্রেনে ভিটামিন ই-এর অ্যান্টিঅক্সিডেন্ট কার্যকারিতার সাথে ভিটামিন সি কীভাবে রাসায়নিকভাবে যুক্ত হয়?'
        ),
        answer: l(
          'Alpha-tocopherol intercepts peroxyl free radicals by donating a phenolic hydrogen atom, becoming an oxidized tocopheroxyl radical. Water-soluble ascorbic acid (Vitamin C) at the cytosolic membrane interface donates an electron to reduce the tocopheroxyl radical back to active alpha-tocopherol, transferring the oxidation burden to dehydroascorbate, which is subsequently regenerated by glutathione.',
          'আলফা-টোকোফেরল মেমব্রেনের লিপিড র্যাডিকেলকে একটি হাইড্রোজেন দিয়ে নিজে টোকোফেরক্সিল র্যাডিকেলে জারিত হয়। কোষের ভেতর থেকে ভিটামিন সি এসে ইলেকট্রন দান করে টোকোফেরলকে পুনরায় সক্রিয় করে তোলে এবং নিজে ডিহাইড্রোঅ্যাসকরবেটে পরিণত হয়, যা পরবর্তীতে গ্লুটাথিয়ন দ্বারা পুনর্ব্যবহৃত হয়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'fat-soluble-vitamins-signaling-cascade',
    title: l('Fat-Soluble Vitamins Molecular Cascade: Receptors & Enzymes', 'চর্বি-দ্রবণীয় ভিটামিনের আণবিক সংকেত প্রবাহ: রিসেপ্টর ও এনজাইম'),
    description: l(
      'Track the four distinct molecular axes: retinoid nuclear receptors, the photolytic renal vitamin D cascade, tocopherol membrane scavenging, and the hepatic vitamin K carboxylation cycle.',
      'চারটি স্বতন্ত্র আণবিক অক্ষ পর্যবেক্ষণ করুন: রেটিনয়েড রিসেপ্টর, ভিটামিন ডি-এর বৃক্কীয় রূপান্তর, টোকোফেরল মেমব্রেন সুরক্ষা এবং ভিটামিন কে-এর রক্ত তঞ্চন চক্র।'
    ),
    disclaimer: l(
      'Educational biochemical pathway simulation; therapeutic supplementation requires serum micronutrient quantification.',
      'জৈবরসায়ন ও পুষ্টি শারীরবৃত্তের শিক্ষামূলক সিমুলেশন; থেরাপিউটিক চিকিৎসায় রক্ত পরীক্ষার মাধ্যমে মাত্রা নির্ণয় অপরিহার্য।'
    ),
    svgType: 'vitamin-cascade',
    items: [
      {
        id: 'node-vit-a-vision',
        label: l('11-cis-Retinal: Phototransduction in Rhodopsin', '১১-সিস-রেটিনাল: রডোপসিনের দৃষ্টি সংকেত'),
        description: l(
          '11-cis-retinal couples with opsin to form rhodopsin. Light absorption isomerizes it to all-trans-retinal, activating transducin and cGMP phosphodiesterase.',
          '১১-সিস-রেটিনাল অপসিন প্রোটিনের সাথে যুক্ত হয়ে রডোপসিন গঠন করে। আলো পড়লে এটি অল-ট্রান্স-রেটিনালে রূপান্তরিত হয়ে স্নায়ুতে দৃষ্টি সংকেত পাঠায়।'
        ),
        details: l(
          'Photoisomerization triggers metarhodopsin II, which activates transducin (Gt), stimulating cGMP phosphodiesterase (PDE6). Cleavage of cGMP closes CNG cation channels, hyperpolarizing the photoreceptor and signaling light detection to the visual cortex. RPE65 isomerase restores 11-cis-retinal.',
          'আলোর সংস্পর্শে রড কোষে সোডিয়াম চ্যানেল বন্ধ হয়ে যায় এবং অ্যাকশন পটেনশিয়াল তৈরি হয়। রেটিনাল পিগমেন্ট এপিথেলিয়ামের RPE65 এনজাইম অল-ট্রান্স রূপকে পুনরায় ১১-সিস রূপে ফিরিয়ে এনে দৃষ্টির চক্র সচল রাখে।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-vit-a-rar',
        label: l('Retinoic Acid: RAR/RXR Epithelial Differentiation', 'রেটিনোয়িক অ্যাসিড: RAR/RXR এপিথেলিয়াল রূপান্তর'),
        description: l(
          'All-trans retinoic acid binds nuclear Retinoic Acid Receptor (RAR), forming heterodimers with RXR to govern mucosal differentiation and suppress squamous metaplasia.',
          'অল-ট্রান্স রেটিনোয়িক অ্যাসিড নিউক্লিয়াসে গিয়ে RAR/RXR রিসেপ্টরের সাথে যুক্ত হয় এবং মিউকাস ক্ষরণকারী এপিথেলিয়াল কোষের সুস্থ গঠন বজায় রাখে।'
        ),
        details: l(
          'RAR/RXR heterodimers bind RARE promoter sequences, displacing histone deacetylase (HDAC) corepressors and recruiting histone acetyltransferases (HAT) to activate genes responsible for goblet cell differentiation, surfactant production, and IgA class switching in mucosal lymphocytes.',
          'ভিটামিন এ-এর ঘাটতি হলে রেস্পিরেটরি ও চোখীয় এপিথেলিয়ামের মিউকাস কোষগুলো শুকিয়ে কেরাটিনযুক্ত স্কোয়ামাস কোষে রূপান্তরিত হয় (স্কোয়ামাস মেটাপ্লাসিয়া), যা অন্ধত্ব ও মারাত্মক ফুসফুসীয় সংক্রমণের পথ সুগম করে।'
        ),
        color: '#d97706',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-vit-d-cyp',
        label: l('Vitamin D Axis: Renal CYP27B1 & Calcitriol (1,25-(OH)2D)', 'ভিটামিন ডি অক্ষ: বৃক্কের CYP27B1 ও ক্যালসিট্রিওল'),
        description: l(
          'Circulating 25(OH)D is hydroxylated at C-1alpha by renal CYP27B1 under PTH stimulation, producing the bioactive secosteroid hormone calcitriol.',
          'রক্তের ২৫(OH)D বৃক্কে পৌঁছে প্যারাথাইরয়েড হরমোনের (PTH) প্রভাবে CYP27B1 এনজাইম দ্বারা সক্রিয় ১,২৫(OH)2D (ক্যালসিট্রিওল) হরমোনে রূপান্তরিত হয়।'
        ),
        details: l(
          'CYP27B1 in proximal convoluted tubule cells is tightly stimulated by elevated PTH and hypophosphatemia, and repressed by FGF23 (secreted by osteocytes) and high calcitriol via CYP24A1 24-hydroxylation catabolism. Calcitriol binds the nuclear VDR to induce enterocyte calcium absorption genes.',
          'ক্যালসিট্রিওল অন্ত্রের কোষে গিয়ে TRPV6 ক্যালসিয়াম চ্যানেল, ক্যালবাইন্ডিন-D9k প্রোটিন এবং PMCA1b পাম্পের জিন সক্রিয় করে, যার ফলে খাদ্যের ক্যালসিয়াম শোষণ বহুগুণ বৃদ্ধি পায়।'
        ),
        color: '#10b981',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-vit-e-scavenge',
        label: l('alpha-Tocopherol: Peroxyl Radical Chain-Breaking', 'আলফা-টোকোফেরল: পারঅক্সিডেশন শৃঙ্খল নিবারণ'),
        description: l(
          'Hydrophobic alpha-tocopherol intercalates into cellular lipid bilayers, trapping lipid peroxyl radicals (LOO•) before they can damage adjacent PUFAs.',
          'লিপিড-দ্রবণীয় আলফা-টোকোফেরল কোষঝিল্লির মাঝে অবস্থান করে এবং ক্ষতিকর পারঅক্সিল ফ্রি র্যাডিকেলকে নিষ্ক্রিয় করে ঝিল্লির পলি-আনস্যাচুরেটেড ফ্যাটি অ্যাসিডকে রক্ষা করে।'
        ),
        details: l(
          'Reaction: LOO• + alpha-TocOH -> LOOH + alpha-TocO•. The resulting tocopheroxyl radical is relatively stable and unreactive. Ascorbate at the aqueous boundary donates an electron to regenerate alpha-tocopherol, preventing the hemolytic breakdown of erythrocyte membranes.',
          'এই প্রক্রিয়ায় লিপিড পারঅক্সিডেশনের বিপজ্জনক চেইন রিঅ্যাকশন বন্ধ হয়ে যায়। রক্তের লোহিত কণিকার ঝিল্লি রক্ষায় ভিটামিন ই অপরিহার্য; এর অভাবে হেমোলাইটিক অ্যানিমিয়া ও স্নায়ুক্ষয় দেখা দেয়।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-vit-k-vkor',
        label: l('Vitamin K Cycle: GGCX & VKORC1 Gla Synthesis', 'ভিটামিন কে চক্র: GGCX ও VKORC1 গামা-কার্বক্সিলেশন'),
        description: l(
          'Reduced vitamin K hydroquinone powers gamma-glutamyl carboxylase (GGCX) to add CO2 to glutamate residues on factors II, VII, IX, and X, enabling Ca2+ chelation.',
          'বিজারিত ভিটামিন কে হাইড্রোকুইনোন রক্ত তঞ্চনকারী ফ্যাক্টরের গ্লুটামেট অংশে কার্বক্সিল গ্রুপ যুক্ত করে, যা ক্যালসিয়ামের সাথে যুক্ত হয়ে জমাট বাঁধতে সাহায্য করে।'
        ),
        details: l(
          'Carboxylation creates dicarboxylic gamma-carboxyglutamic acid (Gla) domains that bind Ca2+, anchoring coagulation factors to negative phosphatidylserine on activated platelet membranes. VKORC1 reduces the resulting vitamin K epoxide back to hydroquinone; warfarin specifically inhibits VKORC1.',
          'গামা-কার্বক্সিলেশন না হলে প্রোথ্রম্বিন (Factor II) এবং ফ্যাক্টর VII, IX ও X রক্তনালীর ক্ষতের মুখে জমাট বাঁধতে পারে না। রক্ত পাতলা করার ওষুধ ওয়ারফারিন এই পুনর্ব্যবহার প্রক্রিয়া বন্ধ করে কাজ করে।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 190, y: 175, width: 310, height: 48 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'মৌলিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. The Fat-Soluble Vitamins: Non-Polar Micronutrient Physiology', '১. চর্বি-দ্রবণীয় ভিটামিন: অপোলার ক্ষুদ্রপুষ্টির শারীরবৃত্ত'),
          paragraphs: [
            l(
              'Unlike water-soluble vitamins that circulate freely in plasma and undergo rapid urinary clearance, the fat-soluble vitamins—vitamins A, D, E, and K—are non-polar lipophilic organic molecules whose intestinal digestion, absorption, and transport are inextricably linked to dietary lipid assimilation [1]. Because they dissolve in fat rather than water, their absorption requires adequate dietary lipids, gastric emulsion formation, biliary mixed micelle packaging, and active lymphatic transport within chylomicrons [1, 2].',
              'পানিতে দ্রবণীয় ভিটামিনগুলোর মতো চর্বি-দ্রবণীয় ভিটামিনগুলো (ভিটামিন এ, ডি, ই এবং কে) রক্তরসে উন্মুক্তভাবে চলাচল করতে পারে না এবং সহজে প্রস্রাবের মাধ্যমে নির্গত হয় না; এগুলো অত্যন্ত অপোলার ও লিপিড-দ্রবণীয় অণু হওয়ায় এদের পরিপাক ও শোষণ প্রক্রিয়া সম্পূর্ণভাবে খাদ্যের চর্বি পরিপাকের ওপর নির্ভরশীল [১]। এদের শোষণের জন্য খাবারে পর্যাপ্ত তেলের উপস্থিতি, পিত্তরসের মিক্সড মাইসেলি গঠন এবং কাইলোমাইক্রনের মাধ্যমে লসিকা নালীতে প্রবেশ অপরিহার্য [১, ২]।'
            ),
            l(
              'Once absorbed into mucosal enterocytes, fat-soluble vitamins are packaged into the hydrophobic core of chylomicrons alongside triacylglycerols and cholesterol esters, traversing the mesenteric lymphatic system and thoracic duct to enter systemic venous circulation [1]. Because excess quantities are sequestered in specialized storage reservoirs—primarily hepatic stellate cells for vitamin A, adipose tissue for vitamin D and E, and hepatic parenchyma for vitamin K—these micronutrients exhibit substantial physiological half-lives spanning weeks to months [1, 2].',
              'অন্ত্রের এন্টারোসাইট কোষে শোষিত হওয়ার পর এই ভিটামিনগুলো ট্রাইগ্লিসারাইড ও কোলেস্টেরল এস্টারের সাথে কাইলোমাইক্রনের তৈলাক্ত কেন্দ্রে আবদ্ধ হয় এবং লসিকা নালী দিয়ে প্রবাহিত হয়ে সরাসরি রক্তে প্রবেশ করে [১]। অতিরিক্ত ভিটামিনগুলো দেহের সঞ্চয় ভাণ্ডারে জমা থাকে—যেমন যকৃতের স্টেলেট কোষে ভিটামিন এ, চর্বি কলায় ভিটামিন ডি ও ই এবং যকৃতে ভিটামিন কে; ফলে মানবদেহে এদের কার্যকাল কয়েক সপ্তাহ থেকে কয়েক মাস পর্যন্ত স্থায়ী হয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Retinoid Chemistry: Photoreception and Cellular Differentiation', '২. রেটিনয়েড রসায়ন: আলো শোষণ ও কোষের বিকাশ'),
          paragraphs: [
            l(
              'Vitamin A encompasses dietary preformed retinoids (retinol, retinal, retinoic acid) derived from animal products, as well as provitamin A carotenoids (predominantly beta-carotene) synthesized by photosynthetic plants [1, 5]. In the enterocyte, beta-carotene is symmetrically cleaved by beta-carotene 15,15\'-oxygenase (BCO1) to yield two molecules of retinal, which are subsequently reduced to retinol for chylomicron incorporation [1].',
              'ভিটামিন এ মূলত প্রাণীজ খাদ্য থেকে প্রাপ্ত সক্রিয় রেটিনয়েড (রেটিনল, রেটিনাল ও রেটিনোয়িক অ্যাসিড) এবং উদ্ভিজ্জ উৎস থেকে প্রাপ্ত প্রোভিটামিন এ ক্যারোটিনয়েড (যেমন বিটা-ক্যারোটিন) নিয়ে গঠিত [১, ৫]। অন্ত্রের কোষে বিটা-ক্যারোটিন ১৫,১৫\'-অক্সিজিনেজ (BCO1) এনজাইম দ্বারা বিটা-ক্যারোটিন ভেঙে দুই অণু রেটিনাল তৈরি হয়, যা পরবর্তীতে রেটিনলে বিজারিত হয়ে কাইলোমাইক্রনে প্রবেশ করে [১]।'
            ),
            l(
              'In ocular rod photoreceptors, 11-cis-retinal acts as the light-absorbing chromophore covalently coupled to the transmembrane G-protein-coupled receptor opsin, forming rhodopsin [5]. Absorption of a single photon triggers ultra-fast sub-picosecond photoisomerization of 11-cis-retinal to all-trans-retinal, initiating conformational transitions that close cyclic nucleotide-gated (CNG) cation channels and generate the visual nerve impulse [5].',
              'চোখের রেটিনার রড কোষে ১১-সিস-রেটিনাল অপসিন প্রোটিনের সাথে রাসায়নিক বন্ধন তৈরি করে রডোপসিন গঠন করে [৫]। মাত্র একটি ফোটন কণা এই রডোপসিনে আঘাত করা মাত্রই ১১-সিস-রেটিনাল রূপান্তরিত হয়ে অল-ট্রান্স-রেটিনালে পরিণত হয়, যা স্নায়বিক সংকেত সৃষ্টি করে মস্তিষ্কে দৃষ্টির অনুভূতি তৈরি করে [৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Vitamin D Synthesis and the Enterocyte Calcium Shuttle', '৩. ভিটামিন ডি সংশ্লেষণ ও অন্ত্রের ক্যালসিয়াম পরিবহন'),
          paragraphs: [
            l(
              'Vitamin D functions primarily as a steroid prehormone rather than an enzymatic cofactor [2]. Human biosynthesis begins in the epidermis, where photochemical solar ultraviolet B (UVB, wavelengths 290–315 nm) photolyses 7-dehydrocholesterol to pre-vitamin D3, which undergoes spontaneous, non-enzymatic thermal isomerization over 48 hours to form cholecalciferol (vitamin D3) [2].',
              'ভিটামিন ডি মূলত একটি সাধারণ খাদ্য উপাদানের চেয়ে শক্তিশালী স্টেরয়েড প্রি-হরমোন হিসেবে বেশি কাজ করে [২]। ত্বকের এপিডার্মিস স্তরে সূর্যালোকের অতিবেগুনি বি রশ্মির (UVB, তরঙ্গদৈর্ঘ্য ২৯০-৩১৫ ন্যানোমিটার) উপস্থিতিতে ৭-ডিহাইড্রো-কোলেস্টেরল ভেঙে প্রি-ভিটামিন ডি৩ তৈরি হয়, যা দেহের স্বাভাবিক উত্তাপে ৪৮ ঘণ্টার মধ্যে ভিটামিন ডি৩ (কোলেক্যালসিফেরল)-এ রূপান্তরিত হয় [২]।'
            ),
            l(
              'Cholecalciferol is biologically inert and requires sequential dual-organ enzymatic hydroxylation to achieve endocrine potency [2]. It travels bound to Vitamin D-Binding Protein (DBP) to the liver, where microsomal CYP2R1 adds a hydroxyl group at carbon-25 to generate 25-hydroxyvitamin D3 [25(OH)D], the major circulating marker of vitamin D stores [2]. In the renal proximal tubule, 1-alpha-hydroxylase (CYP27B1) adds a second hydroxyl group, producing the active secosteroid hormone 1,25-dihydroxyvitamin D3 [calcitriol] [1, 2].',
              'কোলেক্যালসিফেরল নিজে নিষ্ক্রিয়; একে দুটি ভিন্ন অঙ্গে এনজাইমের মাধ্যমে প্রক্রিয়াজাত হতে হয় [২]। প্রথমে এটি যকৃতে গিয়ে CYP2R1 এনজাইম দ্বারা ২৫-হাইড্রক্সিভিটামিন ডি৩ [২৫(OH)D]-এ পরিণত হয়, যা রক্তে সঞ্চিত থাকে [২]। এরপর বৃক্কে পৌঁছে প্যারাথাইরয়েড হরমোনের উদ্দীপনায় ১-আলফা-হাইড্রক্সিলেজ (CYP27B1) এনজাইম দ্বারা চূড়ান্ত সক্রিয় হরমোন ১,২৫-ডাইহাইড্রক্সিভিটামিন ডি৩ বা ক্যালসিট্রিওলে রূপান্তরিত হয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Antioxidant Defense (Vitamin E) and Hemostatic Carboxylation (Vitamin K)', '৪. অ্যান্টিঅক্সিডেন্ট সুরক্ষা (ভিটামিন ই) ও রক্ত তঞ্চন (ভিটামিন কে)'),
          paragraphs: [
            l(
              'Vitamin E functions as nature’s premier lipophilic, chain-breaking antioxidant in human cell membranes [4]. It consists of eight naturally occurring vitamer isomers (alpha-, beta-, gamma-, delta-tocopherols and tocotrienols), but human biology exhibits strict stereochemical selectivity for RRR-alpha-tocopherol via the hepatic alpha-tocopherol transfer protein (alpha-TTP) [4]. Inside phospholipid bilayers, alpha-tocopherol donates a phenolic hydrogen to neutralize peroxyl free radicals, protecting polyunsaturated fatty acids from oxidative degradation [4].',
              'ভিটামিন ই মানবদেহের কোষঝিল্লির প্রধান চর্বি-দ্রবণীয় অ্যান্টিঅক্সিডেন্ট হিসেবে কাজ করে [৪]। এর আটটি প্রাকৃতিক রূপ থাকলেও যকৃতের বিশেষ প্রোটিন alpha-TTP কেবল আলফা-টোকোফেরলকে বেছে নিয়ে রক্তে পাঠায় [৪]। এটি কোষঝিল্লির ভেতরে অবস্থান করে ক্ষতিকর ফ্রি র্যাডিকেলগুলোকে হাইড্রোজেন দান করে নিষ্ক্রিয় করে দেয়, ফলে মেমব্রেনের প্রয়োজনীয় ফ্যাটি অ্যাসিডগুলো জারণ বা ক্ষতির হাত থেকে রক্ষা পায় [৪]।'
            ),
            l(
              'Vitamin K serves as the obligate coenzyme for gamma-glutamyl carboxylase (GGCX), an endoplasmic reticulum enzyme that catalyzes the post-translational modification of specific glutamate (Glu) residues into dicarboxylic gamma-carboxyglutamic acid (Gla) [3]. This modification is vital for blood coagulation factors II (prothrombin), VII, IX, and X, as the dual negative charges of the Gla domain coordinate divalent calcium ions to anchor the clotting cascade onto platelet membranes [3].',
              'ভিটামিন কে হলো গামা-গ্লুটামিল কার্বক্সিলেজ (GGCX) এনজাইমের অপরিহার্য কো-ফ্যাক্টর, যা রক্ত তঞ্চনকারী প্রোটিনগুলোর গ্লুটামেট অংশে অতিরিক্ত কার্বক্সিল গ্রুপ যুক্ত করে [৩]। এই রূপান্তর রক্ত তঞ্চনের ফ্যাক্টর II (প্রোথ্রম্বিন), VII, IX ও X-এর জন্য অত্যন্ত জরুরি; কারণ এই ঋণাত্মক চার্জ ক্যালসিয়াম আয়নের সাথে যুক্ত হয়ে ক্ষতস্থানে রক্তের অনুচক্রিকার গায়ে জমাট বাঁধতে সাহায্য করে [৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Practical Clinical Implications: Deficiency and Toxicity Thresholds', '৫. ব্যবহারিক ক্লিনিক্যাল প্রাসঙ্গিকতা: ঘাটতি ও বিষক্রিয়ার মাত্রা'),
          paragraphs: [
            l(
              'Deficiencies of fat-soluble vitamins manifest with distinct clinical pathologies dictated by their cellular functions [1, 2]. Vitamin A deficiency produces impaired dark adaptation (nyctalopia) progressing to corneal xerosis, Bitot’s spots, and permanent blindness (xerophthalmia), alongside compromised mucosal epithelial immunity [1]. Vitamin D deficiency causes failure of osteoid mineralization, presenting as skeletal deformities (rickets) in children and generalized bone pain with pseudofractures (osteomalacia) in adults [2].',
              'চর্বি-দ্রবণীয় ভিটামিনের ঘাটতি হলে অত্যন্ত সুনির্দিষ্ট শারীরিক জটিলতা দেখা দেয় [১, ২]। ভিটামিন এ-এর অভাবে প্রথমে রাতকানা রোগ এবং পরবর্তীতে চোখের কর্নিয়া শুকিয়ে বিটট’স স্পট ও স্থায়ী অন্ধত্ব দেখা দেয়, সাথে রোগপ্রতিরোধ ক্ষমতা হ্রাস পায় [১]। ভিটামিন ডি-এর অভাবে হাড়ে ক্যালসিয়াম ও ফসফেট জমতে না পেরে শিশুদের ক্ষেত্রে রিকেটস (হাড় বেঁকে যাওয়া) এবং প্রাপ্তবয়স্কদের ক্ষেত্রে অস্টিওম্যালাসিয়া (তীব্র হাড়ের ব্যথা ও নরম হয়ে যাওয়া) ঘটে [২]।'
            ),
            l(
              'Because fat-soluble vitamins accumulate within adipose and hepatic stores, excessive supplemental intake carries marked toxicity risks that do not occur with water-soluble vitamins [1, 2]. Hypervitaminosis A induces intracranial hypertension, hepatic fibrosis, and potent teratogenicity in pregnancy, while hypervitaminosis D produces hypercalcemia, calcinosis of vascular soft tissues, and acute renal failure [1, 2].',
              'চর্বি-দ্রবণীয় ভিটামিনগুলো যকৃতে ও চর্বিতে দীর্ঘকাল জমা থাকে বলে অতিরিক্ত সাপ্লিমেন্ট গ্রহণে বিষক্রিয়া (টক্সিসিটি) হওয়ার মারাত্মক ঝুঁকি থাকে, যা পানিতে দ্রবণীয় ভিটামিনের ক্ষেত্রে ঘটে না [১, ২]। অতিরিক্ত ভিটামিন এ গ্রহণ করলে মস্তিষ্কে চাপ বৃদ্ধি, যকৃতের ক্ষতি এবং গর্ভাবস্থায় ভ্রূণের জন্মগত ত্রুটি তৈরি হতে পারে; তেমনি অতিরিক্ত ভিটামিন ডি গ্রহণ করলে রক্তে ক্যালসিয়াম অতিরিক্ত বেড়ে গিয়ে রক্তনালী শক্ত হওয়া ও কিডনি বিকল হতে পারে [১, ২]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Educational Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ শিক্ষামূলক সারাংশ'),
          paragraphs: [
            l(
              'Fat-soluble vitamins rely on biliary micelle formation and chylomicron packaging for absorption, accumulating in tissue reservoirs with prolonged turnover kinetics [1]. While vitamins A and D act via nuclear transcription factor heterodimers (RAR, RXR, VDR) to govern cellular growth, immunity, and mineral homeostasis, vitamins E and K operate at membrane and post-translational enzymatic interfaces to safeguard lipid integrity and blood hemostasis [1, 3, 4].',
              'চর্বি-দ্রবণীয় ভিটামিনগুলো পিত্তরস ও কাইলোমাইক্রনের মাধ্যমে শোষিত হয়ে যকৃতে ও চর্বিতে সঞ্চিত থাকে [১]। ভিটামিন এ এবং ডি যেখানে নিউক্লিয়ার রিসেপ্টরের মাধ্যমে জিন নিয়ন্ত্রণ করে কোষের বৃদ্ধি ও ক্যালসিয়াম শোষণ বজায় রাখে, সেখানে ভিটামিন ই ও কে মেমব্রেন সুরক্ষা ও এনজাইমের মাধ্যমে রক্ত তঞ্চন নিশ্চিত করে [১, ৩, ৪]।'
            ),
            l(
              'Clinical management requires distinguishing circulating storage forms (such as serum 25(OH)D) from active endocrine products, recognizing vulnerable populations such as newborns requiring vitamin K prophylaxis, and guarding against the serious consequences of fat-soluble hypervitaminosis [1, 2, 3].',
              'ক্লিনিক্যাল চিকিৎসায় ভিটামিনের সঞ্চিত রূপ (যেমন ২৫(OH)D) ও সক্রিয় রূপের পার্থক্য বোঝা, নবজাতকদের রক্তক্ষরণ রোধে জন্মের পরপরই ভিটামিন কে ইনজেকশন নিশ্চিত করা এবং অনিয়ন্ত্রিত সাপ্লিমেন্ট সেবনের ফলে বিষক্রিয়া এড়িয়ে চলা আবশ্যক [১, ২, ৩]।'
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
          heading: l('1. Biophysical Transport Kinetics and Tissue Sequestration', '১. বায়োফিজিক্যাল পরিবহন গতিবিদ্যা ও কলা সঞ্চয়'),
          paragraphs: [
            l(
              'The intestinal uptake of fat-soluble vitamins mirrors the thermodynamic phases of neutral dietary lipid assimilation [1]. In the stomach, mechanical churning generates a crude lipid emulsion with an average droplet diameter of 1 to 100 micrometers. Gastric lipase hydrolyzes approximately 10% to 30% of triacylglycerols, releasing sn-1,2-diacylglycerols and free fatty acids that promote subsequent pancreatic lipase-colipase binding in the duodenum [1].',
              'চর্বি-দ্রবণীয় ভিটামিনের অন্ত্রে শোষণ প্রক্রিয়া খাদ্যের ফ্যাটের থার্মোডাইনামিক রূপান্তরের হুবহু অনুরূপ [১]। পাকস্থলীতে যান্ত্রিক আলোড়নে চর্বির কণাগুলো ১ থেকে ১০০ মাইক্রোমিটার ব্যাসের ইমালশনে রূপ নেয়। গ্যাস্ট্রিক লাইপেজ প্রায় ১০% থেকে ৩০% ট্রাইগ্লিসারাইড ভেঙে মুক্ত ফ্যাটি অ্যাসিড তৈরি করে, যা ডিওডেনামে অগ্ন্যাশয়ের লাইপেজ ও কোলিপেজ এনজাইম যুক্ত হওয়ার পথ সুগম করে [১]।'
            ),
            l(
              'Upon entering the small intestine, conjugated bile salts (predominantly cholate and chenodeoxycholate) coalesce with the lipolysis products to assemble thermodynamically stable mixed micelles with an outer amphipathic shell and an inner hydrophobic core [1]. Non-polar vitamins—retinyl esters, provitamin A carotenoids, cholecalciferol, tocopherols, and phylloquinone—partition into this hydrophobic core, traversing the unstirred water layer to reach the enterocyte microvillar brush border [1, 2].',
              'ক্ষুদ্রান্ত্রে পিত্তলবণগুলোর (প্রধানত কোলেট ও চেনোডিওক্সিকোলেট) সাথে যুক্ত হয়ে থার্মোডাইনামিক্যালি স্থিতিশীল মিক্সড মাইসেলি গঠিত হয় [১]। অপোলার ভিটামিনগুলো—রেটিনাইল এস্টার, ক্যারোটিনয়েড, কোলেক্যালসিফেরল, টোকোফেরল ও ফাইলোকুইনোন—মাইসেলির তৈলাক্ত কেন্দ্রে অবস্থান নিয়ে অন্ত্রের ব্রাশ-বর্ডারের এন্টারোসাইট কোষে পৌঁছায় এবং ব্যাপন প্রক্রিয়ায় শোষিত হয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. The Rhodopsin Visual Cycle and RAR/RXR Genomic Signaling', '২. রডোপসিন দৃষ্টি চক্র ও RAR/RXR জিন নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'The phototransduction visual cycle involves tightly orchestrated enzymatic recycling between rod photoreceptor outer segments and the adjacent retinal pigment epithelium (RPE) [5]. Within rod discs, 11-cis-retinal is covalently attached via a protonated Schiff base to the epsilon-amino group of lysine residue Lys296 on opsin, stabilizing rhodopsin in its inactive ground state [5]. Upon photon capture, sub-picosecond isomerization to all-trans-retinal forces an outward tilt of transmembrane helix 6, generating the active G-protein-activating intermediate metarhodopsin II [5].',
              'দৃষ্টির আলোক-সংবেদন চক্রটি রড কোষ এবং রেটিনাল পিগমেন্ট এপিথেলিয়ামের (RPE) মধ্যে চমৎকার রাসায়নিক সমন্বয়ের মাধ্যমে ঘটে [৫]। রড কোষে ১১-সিস-রেটিনাল অপসিন প্রোটিনের Lys296 লাইসিন অ্যামিনো অ্যাসিডের সাথে শিফ-বেস বন্ধনে আবদ্ধ থাকে [৫]। আলো পড়ামাত্রই এটি অল-ট্রান্স-রেটিনালে রূপান্তরিত হয়ে মেটারডোপসিন II তৈরি করে এবং সংকেত পাঠিয়ে চোখের রড কোষকে উত্তেজিত করে [৫]।'
            ),
            l(
              'Metarhodopsin II activates the heterotrimeric G-protein transducin (Gt), releasing G-alpha-GTP to stimulate cGMP phosphodiesterase (PDE6) [5]. Rapid enzymatic hydrolysis of cGMP lowers its cytoplasmic concentration, causing the detachment of cGMP from cyclic nucleotide-gated (CNG) channels and precipitating channel closure [5]. The resulting cessation of inward sodium and calcium currents hyperpolarizes the plasma membrane from -40 mV to -70 mV, shutting off tonic glutamate exocytosis at the photoreceptor synapse [5].',
              'মেটারডোপসিন II ট্রান্সডিউসিন (Gt) প্রোটিনকে সক্রিয় করে cGMP ফসফোডাইএস্টারেজ (PDE6) এনজাইম চালু করে [৫]। এর ফলে কোষে cGMP কমে যায় এবং সোডিয়াম ও ক্যালসিয়াম চ্যানেলগুলো হঠাৎ বন্ধ হয়ে যায় [৫]। চ্যানেলে বিদ্যুৎ প্রবাহ থেমে যাওয়ায় কোষের পর্দা -৪০ মিলিভোল্ট থেকে -৭০ মিলিভোল্টে হাইপারপোলারাইজড হয়ে যায়, যা স্নায়ুর সিন্যাপসে গ্লুটামেট নিঃসরণ বন্ধ করে আলোর তথ্য মস্তিষ্কে পাঠায় [৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Endocrine Calcitriol Dynamics and Transepithelial Calcium Flux', '৩. ক্যালসিট্রিওলের হরমোনীয় গতিবিদ্যা ও ক্যালসিয়াম পরিবহন'),
          paragraphs: [
            l(
              'Endocrine regulation of systemic calcium homeostasis relies on the tightly counterbalanced feedback axes of Parathyroid Hormone (PTH), Fibroblast Growth Factor 23 (FGF23), and 1,25(OH)2D (calcitriol) [2]. The calcium-sensing receptor (CaSR), a G-protein-coupled receptor on parathyroid chief cells, constantly samples extracellular ionized calcium (Ca2+) [2]. When Ca2+ falls, CaSR G-alpha-q signaling attenuates, relieving tonic inhibition and unleashing preformed PTH exocytosis into the jugular circulation within seconds [2].',
              'দেহে ক্যালসিয়াম নিয়ন্ত্রণ প্যারাথাইরয়েড হরমোন (PTH), ফাইব্রোব্লাস্ট গ্রোথ ফ্যাক্টর ২৩ (FGF23) এবং ক্যালসিট্রিওলের পারস্পরিক ভারসাম্যের ওপর চলে [২]। প্যারাথাইরয়েড গ্রন্থির CaSR রিসেপ্টর প্রতি মুহূর্তে রক্তের ক্যালসিয়াম পর্যবেক্ষণ করে [২]। রক্তে ক্যালসিয়াম হ্রাস পাওয়া মাত্রই CaSR সংকেত কমে যায় এবং প্যারাথাইরয়েড গ্রন্থি মুহূর্তের মধ্যে রক্তে বিপুল পরিমাণ PTH হরমোন নিঃসরণ করে [২]।'
            ),
            l(
              'PTH binds PTH1R receptors on proximal tubule basolateral membranes, stimulating adenylate cyclase to elevate intracellular cAMP and upregulate transcription of CYP27B1 (1-alpha-hydroxylase) [2]. Calcitriol circulates bound to DBP, enters target enterocytes, and binds the cytosolic/nuclear Vitamin D Receptor (VDR) [2]. VDR heterodimerizes with RXR, binding vitamin D response elements (VDRE) in gene promoters to induce TRPV6 (apical Ca2+ channel), calbindin-D9k (intracellular Ca2+ chaperone), and PMCA1b (basolateral Ca2+-ATPase pump), driving active saturable transepithelial calcium absorption [1, 2].',
              'PTH বৃক্কে গিয়ে CYP27B1 এনজাইম সক্রিয় করে সক্রিয় ক্যালসিট্রিওল হরমোন তৈরি করে [২]। ক্যালসিট্রিওল অন্ত্রের এন্টারোসাইটে প্রবেশ করে VDR-RXR রিসেপ্টরের মাধ্যমে ডিএনএ-তে বসে TRPV6 ক্যালসিয়াম চ্যানেল, ক্যালবাইন্ডিন-D9k বাহক প্রোটিন এবং PMCA1b পাম্প তৈরি বাড়িয়ে দেয় [১, ২]। ফলে খাদ্য থেকে ক্যালসিয়াম দ্রুত শোষিত হয়ে রক্তে প্রবেশ করে ক্যালসিয়ামের মাত্রা স্বাভাবিক অবস্থায় ফিরে আসে [২]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Molecular Antioxidation Cascades and the Vitamin K Reductase Cycle', '৪. আণবিক অ্যান্টিঅক্সিডেশন প্রবাহ ও ভিটামিন কে রিডাক্টেজ চক্র'),
          paragraphs: [
            l(
              'The mechanism of alpha-tocopherol antioxidation operates through stoichiometric radical trapping rather than enzymatic catalytic turnover [4]. When hydroxyl radicals (•OH) or reactive nitrogen species abstract a bis-allylic hydrogen atom from a membrane polyunsaturated fatty acid (LH), an alkyl carbon radical (L•) is generated, which rapidly binds molecular oxygen to produce a peroxyl radical (LOO•) [4]. Alpha-tocopherol intercepts this propagating chain by donating its phenolic hydroxyl hydrogen (rate constant k ~ 3 x 10^6 M^-1 s^-1), converting LOO• to a lipid hydroperoxide (LOOH) and forming a resonance-stabilized tocopheroxyl radical [4].',
              'আলফা-টোকোফেরলের অ্যান্টিঅক্সিডেন্ট ক্রিয়া কোনো এনজাইমের মতো কাজ না করে সরাসরি র্যাডিকেলকে আটকে দিয়ে সম্পন্ন হয় [৪]। ক্ষতিকর অক্সিজেন র্যাডিকেল যখন মেমব্রেনের ফ্যাটি অ্যাসিডের হাইড্রোজেন কেড়ে নিয়ে পারঅক্সিল র্যাডিকেল (LOO•) তৈরি করে, তখন আলফা-টোকোফেরল নিজেই নিজের হাইড্রোজেন দান করে ক্ষতিকর চেইন বিক্রিয়াটি চিরতরে থামিয়ে দেয় [৪]। এর ফলে তৈরি হওয়া টোকোফেরক্সিল র্যাডিকেলটি অত্যন্ত শান্ত ও অহিংস থাকে [৪]।'
            ),
            l(
              'The vitamin K cycle represents a textbook example of an oxidation-reduction metabolic loop dedicated to a single post-translational modification [3]. Reduced vitamin K hydroquinone (KH2) acts as an electron donor for gamma-glutamyl carboxylase (GGCX), which abstracts a proton from the gamma-carbon of peptide-bound glutamate, generating a strong carbanion intermediate that captures ambient CO2 to yield gamma-carboxyglutamic acid (Gla) [3]. Concurrently, KH2 is oxidized to vitamin K 2,3-epoxide (KO) [3]. To sustain ongoing carboxylation, Vitamin K Epoxide Reductase (VKORC1) reduces KO back to quinone and hydroquinone, a pathway completely blocked by 4-hydroxycoumarin anticoagulants such as warfarin [3].',
              'ভিটামিন কে চক্র হলো একটি অসাধারণ জারণ-বিজারণ চক্র যা প্রোটিনের বিশেষ পরিবর্তনের জন্য নিবেদিত [৩]। বিজারিত ভিটামিন কে হাইড্রোকুইনোন (KH2) গামা-গ্লুটামিল কার্বক্সিলেজ (GGCX) এনজাইমকে শক্তি জুগিয়ে প্রোটিনের গ্লুটামেট অংশে CO2 যুক্ত করে গামা-কার্বক্সিগ্লুটামিক অ্যাসিড (Gla) তৈরি করে [৩]। এই সময় ভিটামিন কে জারিত হয়ে ভিটামিন কে ২,৩-ইপক্সাইডে পরিণত হয় [৩]। ভিটামিন কে ইপক্সাইড রিডাক্টেজ (VKORC1) এনজাইম একে পুনরায় বিজারিত করে সচল রাখে; ওয়ারফারিন এই এনজাইমকে অচল করে রক্ত জমাট বাঁধা রোধ করে [৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Laboratory Biomarkers, Pharmacokinetics and Drug Interactions', '৫. ল্যাবরেটরি বায়োমার্কার, ফার্মাকোকাইনেটিক্স ও ড্রাগ ইন্টারঅ্যাকশন'),
          paragraphs: [
            l(
              'Accurate clinical assessment of fat-soluble vitamin status requires selecting appropriate biochemical indicators and accounting for carrier protein kinetics [1, 2]. Serum retinol is homeostatically buffered by hepatic retinol-binding protein (RBP4) reserves, remaining normal until liver retinyl ester stores are virtually exhausted (< 20 mcg/g liver tissue); therefore, relative dose-response (RDR) testing or serum RBP4-to-transthyretin ratios provide superior sensitivity in borderline depletion [1].',
              'চর্বি-দ্রবণীয় ভিটামিনের সঠিক মূল্যায়নে কেবল রক্তের সাধারণ মাত্রা দেখলে চলে না, কারণ যকৃতে রেটিনল-বাইন্ডিং প্রোটিন (RBP4) থাকায় ভিটামিন এ-এর মারাত্মক ঘাটতি না হওয়া পর্যন্ত রক্তের রেটিনল আপাতদৃষ্টিতে স্বাভাবিক দেখাতে পারে [১]। তাই মৃদু ঘাটতি শনাক্ত করতে রিলেটিভ ডোজ-রেসপন্স (RDR) পরীক্ষা বা RBP4-ট্রান্সথাইরেটিন অনুপাত নির্ণয় করা অনেক বেশি নির্ভরযোগ্য [১]।'
            ),
            l(
              'For vitamin D, total serum 25(OH)D is the definitive clinical biomarker because it reflects combined cutaneous photoproduction and dietary intake with minimal diurnal variation [2]. Circulating calcitriol [1,25(OH)2D] has an ultra-short half-life of 4 to 15 hours and fluctuates wildly in response to minute shifts in serum calcium and PTH, making it completely unsuitable for screening nutritional vitamin D sufficiency [2].',
              'ভিটামিন ডি-এর ক্ষেত্রে রক্তের মোট ২৫(OH)D হলো আন্তর্জাতিকভাবে স্বীকৃত মানদণ্ড, কারণ এর মাত্রা স্থিতিশীল থাকে এবং এটি ত্বকের তৈরি ও খাদ্য থেকে পাওয়া মোট সঞ্চয় প্রকাশ করে [২]। সক্রিয় ক্যালসিট্রিওলের [১,২৫(OH)2D] অর্ধায়ু মাত্র ৪ থেকে ১৫ ঘণ্টা এবং প্যারাথাইরয়েড হরমোনের পরিবর্তনের সাথে এটি দ্রুত ওঠানামা করে বলে সাধারণ ভিটামিন ডি ঘাটতি নির্ণয়ে এটি ব্যবহার করা মারাত্মক ভুল [২]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Synthesis: Genomic vs Non-Genomic Vitamer Actions', '৬. প্রাতিষ্ঠানিক সমন্বয়: জিনগত বনাম নন-জিনগত ভূমিকা'),
          paragraphs: [
            l(
              'In summary, fat-soluble vitamins operate across two distinct mechanistic archetypes: genomic steroid-type transcriptional regulators (vitamins A and D) and non-genomic redox/coenzyme catalytic participants (vitamins E and K) [1, 2, 3, 4]. Nuclear receptor complexes (RAR/RXR and VDR/RXR) coordinate mucosal epithelial protection, immune maturation, and bone mineralization, while membrane-intercalated tocopherols and microsomal carboxylase cycles safeguard cellular polyunsaturated fatty acids and hemostatic stability [1, 3, 4].',
              'সংক্ষেপে, চর্বি-দ্রবণীয় ভিটামিন দুটি মূলধারায় কাজ করে: প্রথমত, জিনগত নিয়ন্ত্রণকারী স্টেরয়েড সদৃশ ভিটামিন (ভিটামিন এ এবং ডি) এবং দ্বিতীয়ত, নন-জিনগত জারণ-বিজারণ ও কো-এনজাইম ভিটামিন (ভিটামিন ই এবং কে) [১, ২, ৩, ৪]। নিউক্লিয়ার রিসেপ্টরগুলো (RAR/RXR এবং VDR/RXR) রোগপ্রতিরোধ ও অস্থি গঠন নিয়ন্ত্রণ করে, আর ভিটামিন ই ও কে মেমব্রেনের লিপিড সুরক্ষা এবং রক্ত তঞ্চন স্থিতিশীল রাখে [১, ৩, ৪]।'
            ),
            l(
              'Nutritional, clinical, and pharmacological practices must reconcile these diverse mechanisms when interpreting serum biomarkers, prescribing fat-soluble supplementation during malabsorptive states (e.g., celiac disease, cystic fibrosis, bariatric bypass), and monitoring anticoagulant therapy [1, 2, 3].',
              'পুষ্টি ও ক্লিনিক্যাল অনুশীলনে এই বৈচিত্র্যময় মেকানিজম মাথায় রেখে রক্ত পরীক্ষা বিশ্লেষণ করা, পরিপাক ও শোষণজনিত রোগে (যেমন সিলিয়াক ডিজিজ, সিস্টিক ফাইব্রোসিস বা বেরিয়াট্রিক সার্জারি) সঠিক ডোজে ভিটামিন দেওয়া এবং রক্ত পাতলা করার ওষুধ সতর্কতার সাথে পরিচালনা করা জরুরি [১, ২, ৩]।'
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
          heading: l('1. Structural Lipid Micellization, Enterocyte Uptake & Stellate Biology', '১. কাঠামোগত লিপিড মাইসেলি গঠন ও স্টেলেট কোষের জীববিদ্যা'),
          paragraphs: [
            l(
              'The molecular uptake of fat-soluble vitamins at the apical enterocyte microvillus membrane is not exclusively a passive partitioning process; modern molecular nutrition has demonstrated significant involvement of dedicated scavenger receptors and transport proteins [1]. Scavenger Receptor Class B Type 1 (SR-BI) and Niemann-Pick C1-Like 1 (NPC1L1) actively facilitate the membrane translocation of provitamin A carotenoids, alpha-tocopherol, and vitamin D alongside unesterified cholesterol [1, 4].',
              'অন্ত্রের কোষে চর্বি-দ্রবণীয় ভিটামিনের প্রবেশ কেবল সাধারণ ব্যাপন নয়; আধুনিক আণবিক গবেষণায় দেখা গেছে এখানে নির্দিষ্ট প্রোটিন চ্যানেল কাজ করে [১]। স্ক্যাভেঞ্জার রিসেপ্টর SR-BI এবং নিম্যান-পিক C1-লাইক 1 (NPC1L1) প্রোটিন কোলেস্টেরলের পাশাপাশি বিটা-ক্যারোটিন, আলফা-টোকোফেরল ও ভিটামিন ডি-কে মেমব্রেন ভেদ করে কোষে প্রবেশে সরাসরি সাহায্য করে [১, ৪]।'
            ),
            l(
              'Within hepatic architecture, approximately 80% to 90% of total body retinyl esters reside in specialized perisinusoidal cells known as hepatic stellate cells (Ito cells) [1]. Retinol arriving from chylomicron remnants is transferred from hepatocytes to stellate cells via retinol-binding protein 4 (RBP4). Inside stellate cells, lecithin:retinol acyltransferase (LRAT) esterifies retinol to long-chain retinyl palmitate, storing it in massive cytoplasmic lipid droplets that regulate systemic retinoid homeostasis [1].',
              'যকৃতের অভ্যন্তরে দেহের মোট ভিটামিন এ-এর প্রায় ৮০% থেকে ৯০% জমা থাকে পেরিসিনাসয়ডাল স্টেলেট কোষে (আইটো কোষ) [১]। হেপাটোসাইট থেকে ভিটামিন এ স্টেলেট কোষে স্থানান্তরিত হয়, যেখানে LRAT এনজাইম একে রেটিনাইল পামিটেট এস্টারে পরিণত করে বিশাল লিপিড ড্রপলেটে দীর্ঘদিনের জন্য সঞ্চয় করে রাখে [১]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Chromophore Isomerization Biophysics and Transcriptional Corepressors', '২. ক্রোমফোর রূপান্তর বায়োফিজিক্স ও জিন কোরপ্রেসার'),
          paragraphs: [
            l(
              'The biophysical trajectory of rhodopsin activation represents one of the fastest chemical reactions in living nature [5]. The excited state lifetime of the 11-cis-retinal protonated Schiff base following photon absorption is approximately 200 femtoseconds, with a photochemical quantum yield of ~0.65 [5]. Steric strain induced by all-trans isomerization drives rapid relaxation through bathorhodopsin, lumirhodopsin, and metarhodopsin I intermediates, culminating in the deprotonation of the Schiff base and formation of metarhodopsin II [5].',
              'রডোপসিন সক্রিয় হওয়ার গতি প্রকৃতিতে ঘটা দ্রুততম রাসায়নিক বিক্রিয়াগুলোর অন্যতম [৫]। আলো পড়ার পর মাত্র ২০০ ফেমটোসেকেন্ডের (এক সেকেন্ডের দশ লক্ষ কোটি ভাগের এক ভাগ) মধ্যে ১১-সিস-রেটিনাল অল-ট্রান্স রূপে রূপান্তরিত হয় [৫]। এই প্রচণ্ড দ্রুতগতির পরিবর্তনের ফলে মেটারডোপসিন II গঠিত হয়, যা চোখের কোষে তাৎক্ষণিক স্নায়বিক উত্তেজনা ছড়িয়ে দেয় [৫]।'
            ),
            l(
              'In the nucleus, unliganded Retinoic Acid Receptors (RAR/RXR) assemble with nuclear receptor corepressor complexes (NCoR and SMRT), which tether histone deacetylases (HDAC3) to silence transcription [1]. Binding of all-trans retinoic acid causes a dramatic conformational shift in the C-terminal activation function-2 (AF-2) helix of RAR, closing the ligand-binding pocket and dislodging NCoR/SMRT [1]. This enables recruitment of coactivators including steroid receptor coactivator-1 (SRC-1) and p300/CBP histone acetyltransferases, driving chromatin remodeling and transcriptional initiation of genes essential for immune T-regulatory cell differentiation [1].',
              'নিউক্লিয়াসে যখন রেটিনোয়িক অ্যাসিড অনুপস্থিত থাকে, তখন RAR/RXR রিসেপ্টর NCoR এবং SMRT কোরপ্রেসার প্রোটিনের মাধ্যমে জিন বন্ধ করে রাখে [১]। কিন্তু রেটিনোয়িক অ্যাসিড যুক্ত হওয়া মাত্রই রিসেপ্টরের গঠন বদলে গিয়ে কোরপ্রেসার খসে পড়ে এবং হিস্টোন অ্যাসিটাইলট্রান্সফারেজ এনজাইম যুক্ত হয় [১]। ফলে ডিএনএ খুলে যায় এবং মিউকোসাল এপিথেলিয়াম সুরক্ষা ও টি-রেগুলেটরি ইমিউন কোষ তৈরির জিনগুলো সক্রিয় হয় [১]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Cytochrome P450 Secosteroid Hydroxylases & Non-Calcemic VDR Actions', '৩. সাইটোক্রোম P450 সেকোস্টেরয়েড এনজাইম ও নন-ক্যালসেমিক VDR ভূমিকা'),
          paragraphs: [
            l(
              'The biological duration of calcitriol signaling is tightly restricted by the multicatalytic 24-hydroxylase enzyme CYP24A1 [2]. Highly induced by calcitriol itself via multiple VDREs in its promoter, CYP24A1 catalyzes five sequential oxidation reactions starting with C-24 hydroxylation of both 25(OH)D and 1,25(OH)2D, converting active calcitriol into water-soluble, biologically inert calcitroic acid for biliary excretion [2]. Loss-of-function mutations in CYP24A1 cause Idiopathic Infantile Hypercalcemia, characterized by unrestrained calcitriol signaling, severe nephrocalcinosis, and hypercalciuria [2].',
              'ক্যালসিট্রিওল সংকেতের সময়কাল বৃক্কের CYP24A1 এনজাইম দ্বারা কঠোরভাবে নিয়ন্ত্রিত হয় [২]। ক্যালসিট্রিওল নিজেই এই এনজাইম তৈরির নির্দেশ দেয়, যা অতিরিক্ত ১,২৫(OH)2D কে জারিত করে নিষ্ক্রিয় ক্যালসিট্রোয়িক অ্যাসিডে পরিণত করে পিত্তের মাধ্যমে বের করে দেয় [২]। যাদের বংশগতভাবে CYP24A1 এনজাইমে ত্রুটি থাকে, তাদের রক্তে ক্যালসিয়াম মাত্রাতিরিক্ত বেড়ে গিয়ে শৈশবে মারাত্মক কিডনি বিকল (আইডিওপ্যাথিক ইনফ্যান্টাইল হাইপারক্যালসেমিয়া) ঘটে [২]।'
            ),
            l(
              'Beyond classic mineral homeostatic organs, the Vitamin D Receptor (VDR) is expressed across macrophages, dendritic cells, pancreatic beta-cells, and cardiomyocytes [2]. In activated macrophages, Toll-like receptor 2/1 (TLR2/1) recognition of Mycobacterium tuberculosis upregulates endogenous CYP27B1, generating intracrine calcitriol [2]. This localized calcitriol binds VDR to directly induce transcription of cathelicidin (CAMP) and beta-defensin-4 (DEFB4), antimicrobial peptides that disrupt bacterial membranes inside phagolysosomes independent of systemic calcium levels [2].',
              'হাড় ও অন্ত্রের বাইরেও ম্যাক্রোফেজ, ডেনড্রাইটিক কোষ ও হৃদপেশির কোষে VDR রিসেপ্টর থাকে [২]। ম্যাক্রোফেজ যখন যক্ষ্মা বা ব্যাকটেরিয়ার আক্রমণ টের পায়, তখন এটি নিজে নিজেই ক্যালসিট্রিওল হরমোন তৈরি করে [২]। এই হরমোন ম্যাক্রোফেজের ভেতর ক্যাথেলেসিডিন ও বিটা-ডিফেনসিনের মতো শক্তিশালী প্রাকৃতিক অ্যান্টিবায়োটিক পেপটাইড তৈরি করিয়ে জীবাণুর মেমব্রেন ধ্বংস করে দেয়, যা দেহের রোগপ্রতিরোধের একটি অত্যাবশ্যক স্তম্ভ [২]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Radical Kinetics, alpha-TTP Crystallography & Warfarin Resistance', '৪. ফ্রি র্যাডিকেল গতিবিদ্যা, alpha-TTP স্ফটিক বিজ্ঞান ও ওয়ারফারিন রেজিস্ট্যান্স'),
          paragraphs: [
            l(
              'X-ray crystallography of the human alpha-tocopherol transfer protein (alpha-TTP) reveals a hydrophobic binding pocket with exquisite stereospecificity [4]. The pocket contains distinct sub-regions that accommodate the methylated chromanol ring and the phytyl tail, requiring specific steric positioning of the three methyl groups at positions 5, 7, and 8 of the ring, as well as the 2R-configuration of the ether linkage [4]. Synthetic all-rac-alpha-tocopherol, which contains equal parts of eight stereoisomers, possesses only 50% the biological activity of natural RRR-alpha-tocopherol because non-2R forms are rapidly rejected by alpha-TTP and catabolized via omega-oxidation in hepatocytes [4].',
              'এক্স-রে ক্রিস্টালোগ্রাফিতে দেখা গেছে মানবদেহের alpha-TTP প্রোটিনের ভেতরের পকেটটি অদ্ভুত নিখুঁতভাবে কেবল প্রাকৃতিক RRR-আলফা-টোকোফেরলকে গ্রহণ করতে পারে [৪]। কৃত্রিমভাবে তৈরি অল-র্যাক-টোকোফেরলে আটটি মিশ্র রূপ থাকে বলে তার কার্যকারিতা প্রাকৃতিক ভিটামিন ই-এর চেয়ে অর্ধেক কম হয়; কারণ লিভারের এই প্রোটিন অপ্রাকৃতিক রূপগুলোকে চিনতে না পেরে যকৃতে ধ্বংস করে ফেলে [৪]।'
            ),
            l(
              'In the vitamin K cycle, the transmembrane topology of human VKORC1 comprises four transmembrane helices with active-site cysteine residues (Cys132 and Cys135) that form a redox-active disulfide bond [3]. During reduction of vitamin K epoxide, these cysteines are oxidized to a disulfide, which is regenerated by protein disulfide isomerase (PDI) [3]. Missense mutations in VKORC1 (such as Tyr35Asn, Asp36Tyr, and Arg98Trp) alter the warfarin-binding pocket, conferring clinical warfarin resistance that demands multi-fold dose escalations to achieve therapeutic anticoagulation [3].',
              'ভিটামিন কে চক্রের প্রধান এনজাইম VKORC1-এর সক্রিয় স্থানে Cys132 এবং Cys135 সিস্টাইন অ্যামিনো অ্যাসিড থাকে যা ভিটামিন কে ইপক্সাইডকে বিজারিত করে নিজে জারিত হয় [৩]। অনেক রোগীর ক্ষেত্রে জিনের মিউটেশনের কারণে (যেমন Tyr35Asn বা Asp36Tyr) এই এনজাইমের গঠন বদলে যায়, ফলে রক্ত পাতলা করার ওষুধ ওয়ারফারিন আর এর সাথে যুক্ত হতে পারে না এবং মারাত্মক ওয়ারফারিন রেজিস্ট্যান্স দেখা দেয় [৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Complex Clinical Pathologies: Biliary Atresia, AVED & VKDB', '৫. জটিল ক্লিনিক্যাল রোগতত্ত্ব: বিলিয়ারি অ্যাট্রেসিয়া, AVED ও রক্তক্ষরণ'),
          paragraphs: [
            l(
              'Pediatric and adult malabsorptive disorders demonstrate the absolute dependence of fat-soluble vitamin uptake on biliary and lymphatic patency [1, 2]. In pediatric biliary atresia, progressive sclerosis of extrahepatic bile ducts obliterates luminal bile acid secretion into the duodenum, abolishing mixed micelle formation and precipitating simultaneous multi-vitamer fat-soluble deficiencies [1]. Without parenteral replacement, infants rapidly develop severe rickets, coagulopathy from hypoprothrombinemia, and irreversible neuro-ophthalmic impairment [1, 2, 3].',
              'পিত্তনালী ও লসিকার যেকোনো জটিলতায় চর্বি-দ্রবণীয় ভিটামিনের শোষণ সম্পূর্ণ বিপর্যস্ত হয় [১, ২]। শিশুদের বিলিয়ারি অ্যাট্রেসিয়া রোগে পিত্তনালী বন্ধ হয়ে যাওয়ায় ডিওডেনামে পিত্তরস পৌঁছাতে পারে না, ফলে মাইসেলি গঠন বন্ধ হয়ে একসাথে চার ধরনের চর্বি-দ্রবণীয় ভিটামিনের মারাত্মক অভাব দেখা দেয় [১]। ইনজেকশনের মাধ্যমে ভিটামিন না দিলে শিশুরা দ্রুত রিকেটস, রক্তক্ষরণ এবং স্থায়ী অন্ধত্ব ও স্নায়ুক্ষয়ে পতিত হয় [১, ২, ৩]।'
            ),
            l(
              'Ataxia with Vitamin E Deficiency (AVED) is an autosomal recessive neurodegenerative disorder caused by loss-of-function mutations in the TTPA gene encoding alpha-TTP [4]. Despite normal dietary intake and intestinal absorption, patients fail to secrete alpha-tocopherol from the liver into circulating VLDL, leading to undetectable plasma alpha-tocopherol levels [4]. Over childhood, unquenched lipid peroxidation in large-caliber myelinated sensory axons causes progressive spinocerebellar ataxia, loss of proprioception and vibration sensation, and retinal degeneration mimicking Friedreich ataxia [4].',
              'অ্যাটাক্সিয়া উইথ ভিটামিন ই ডেফিসিয়েন্সি (AVED) একটি বংশগত স্নায়ুরোগ যা TTPA জিনের ত্রুটির কারণে ঘটে [৪]। রোগী পর্যাপ্ত ভিটামিন ই খেলেও যকৃতের alpha-TTP নষ্ট থাকায় রক্তে কোনো ভিটামিন ই সরবরাহ হয় না [৪]। এর ফলে মেরুদণ্ড ও স্নায়ুর মেমব্রেনে অবিরাম জারণ ক্ষয় হয়ে স্নায়ু ধ্বংস হয় এবং রোগী হাঁটার ভারসাম্য ও স্পর্শের অনুভূতি হারিয়ে ফেলে [৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Research Frontiers: Receptor Selective Ligands', '৬. অনুবাদমূলক গবেষণা দিগন্ত: রিসেপ্টর নিয়ন্ত্রক লিগ্যান্ড'),
          paragraphs: [
            l(
              'Cutting-edge translational pharmacology focuses on developing vitamer analogues that dissociate beneficial therapeutic genomic responses from hypervitaminotic toxicity [1, 2]. In dermatology and oncology, third-generation synthetic retinoids (such as adapalene and tazarotene) selectively target RAR-beta and RAR-gamma, inducing cellular differentiation in acne and psoriasis while minimizing the systemic teratogenicity and mucocutaneous toxicity of pan-RAR agonists [1].',
              'চিকিৎসা বিজ্ঞানের সর্বাধুনিক গবেষণায় ভিটামিনের এমন কৃত্রিম রূপ তৈরি করা হচ্ছে যা ক্ষতিকর বিষক্রিয়া ছাড়াই রোগ নিরাময়ে কাজ করে [১, ২]। চর্মরোগ ও ক্যান্সারের চিকিৎসায় তৃতীয় প্রজন্মের সিন্থেটিক রেটিনয়েড (যেমন অ্যাডাপালিন ও টাজারোটিন) কেবল নির্দিষ্ট RAR-বিটা ও গামা রিসেপ্টরকে উদ্দীপিত করে ব্রণ ও সোরিয়াসিস নিরাময় করে, কিন্তু ভ্রূণের ক্ষতি বা তীব্র বিষক্রিয়া তৈরি করে না [১]।'
            ),
            l(
              'Similarly, non-hypercalcemic Vitamin D receptor agonists (such as paricalcitol and maxacalcitol) suppress parathyroid hormone gene transcription in end-stage chronic kidney disease while producing minimal enterocyte TRPV6 calcium transport stimulation, successfully controlling secondary hyperparathyroidism without precipitating vascular calcification [2].',
              'একইভাবে, কিডনি ফেইলিউরের রোগীদের জন্য তৈরি প্যারিক্যালসিট্রিওল জাতীয় কৃত্রিম ভিটামিন ডি ওষুধ রক্তে ক্যালসিয়াম অতিরিক্ত না বাড়িয়েই প্যারাথাইরয়েড হরমোন দমন করে, ফলে রক্তনালীতে ক্যালসিয়াম জমা হয়ে হার্ট অ্যাটাকের ঝুঁকি ছাড়াই সেকেন্ডারি হাইপারপ্যারাথাইরয়েডিজম নিয়ন্ত্রণ করা সম্ভব হচ্ছে [২]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential molecular activation of the four fat-soluble vitamins: Retinoid nuclear signaling, photolytic renal calcitriol synthesis, membrane tocopherol scavenging, and vitamin K carboxylation.',
      'চারটি চর্বি-দ্রবণীয় ভিটামিনের পর্যায়ক্রমিক আণবিক সক্রিয়করণ: রেটিনয়েড নিউক্লিয়ার সংকেত, ভিটামিন ডি-এর বৃক্কীয় রূপান্তর, মেমব্রেন টোকোফেরল সুরক্ষা এবং ভিটামিন কে কার্বক্সিলেশন।'
    ),
    steps: [
      l(
        'Step 1: Ingestion of dietary lipids and fat-soluble vitamins assembled into biliary mixed micelles, absorbed into enterocytes, and packaged into chylomicrons for lymphatic delivery.',
        'ধাপ ১: খাদ্যের লিপিড ও চর্বি-দ্রবণীয় ভিটামিন পিত্তরসের মিক্সড মাইসেলিতে প্রবেশ করে এন্টারোসাইটে শোষিত হয় এবং লসিকা নালী দিয়ে কাইলোমাইক্রনে বাহিত হয়।'
      ),
      l(
        'Step 2: Vitamin A visual cycle phototransduction in rod outer segments coupled with RAR/RXR nuclear heterodimer mucosal gene transcription.',
        'ধাপ ২: চোখে ভিটামিন এ-এর ১১-সিস-রেটিনাল দৃষ্টি চক্র এবং নিউক্লিয়াসে RAR/RXR রিসেপ্টরের মাধ্যমে এপিথেলিয়াল ও মিউকোসাল জিন সক্রিয়করণ।'
      ),
      l(
        'Step 3: Epidermal photolysis of 7-dehydrocholesterol to D3, followed by hepatic CYP2R1 and renal CYP27B1 hydroxylation to active calcitriol for enterocyte TRPV6 calcium flux.',
        'ধাপ ৩: ত্বকে সূর্যালোকের প্রভাবে ভিটামিন ডি৩ তৈরি, যকৃতে CYP2R1 ও বৃক্কে CYP27B1 দ্বারা সক্রিয় ক্যালসিট্রিওল গঠন এবং অন্ত্রে ক্যালসিয়াম শোষণ।'
      ),
      l(
        'Step 4: Membrane-intercalated alpha-tocopherol traps peroxyl radicals to prevent lipid peroxidation, undergoing reductive recycling by cytosolic ascorbic acid.',
        'ধাপ ৪: কোষঝিল্লিতে আলফা-টোকোফেরল পারঅক্সিল র্যাডিকেল আটকে দিয়ে ফ্যাটি অ্যাসিডের ক্ষতি রোধ করে এবং ভিটামিন সি দ্বারা পুনরায় বিজারিত হয়।'
      ),
      l(
        'Step 5: Hepatic VKORC1 maintains reduced vitamin K hydroquinone to drive GGCX gamma-glutamyl carboxylation of factors II, VII, IX, and X for calcium-dependent clotting.',
        'ধাপ ৫: যকৃতে VKORC1 ভিটামিন কে সচল রেখে GGCX দ্বারা রক্ত তঞ্চনকারী ফ্যাক্টরগুলোর গামা-কার্বক্সিলেশন ঘটায় এবং রক্ত জমাট বাঁধতে সাহায্য করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 62-year-old patient with end-stage chronic kidney disease presents with severe hypocalcemia and hyperparathyroidism. Despite oral cholecalciferol supplementation, active calcium absorption fails to normalize. Which specific biochemical failure explains this clinical presentation?',
      'শেষ ধাপের দীর্ঘস্থায়ী কিডনি রোগে আক্রান্ত এক রোগীর তীব্র রক্তে ক্যালসিয়ামের অভাব এবং প্যারাথাইরয়েড হরমোন বৃদ্ধি দেখা গেছে। মুখে ভিটামিন ডি৩ (কোলেক্যালসিফেরল) খাওয়ানো সত্ত্বেও ক্যালসিয়াম শোষণ স্বাভাবিক হচ্ছে না। কোন আণবিক ত্রুটি এর সঠিক ব্যাখ্যা?'
    ),
    options: [
      l(
        'Deficiency of renal 1-alpha-hydroxylase (CYP27B1) prevents conversion of 25(OH)D to active 1,25(OH)2D (calcitriol), impairing VDR-mediated enterocyte TRPV6 expression.',
        'কিডনির ১-আলফা-হাইড্রক্সিলেজ (CYP27B1) নষ্ট হওয়ায় ২৫(OH)D সক্রিয় ক্যালসিট্রিওলে রূপান্তরিত হতে পারছে না, ফলে অন্ত্রের TRPV6 ক্যালসিয়াম চ্যানেল তৈরি হচ্ছে না।'
      ),
      l(
        'Hepatic CYP2R1 is irreversibly inhibited by uremic toxins, preventing the initial 25-hydroxylation of dietary cholecalciferol.',
        'ইউরেমিক বিষের কারণে যকৃতের CYP2R1 এনজাইম অচল হয়ে প্রাথমিক ২৫-হাইড্রক্সিলেশন বন্ধ হয়ে গেছে।'
      ),
      l(
        'Loss of alpha-tocopherol transfer protein (alpha-TTP) destabilizes enterocyte apical brush-border microvilli.',
        'আলফা-টোকোফেরল ট্রান্সফার প্রোটিন (alpha-TTP) নষ্ট হওয়ায় অন্ত্রের ব্রাশ-বর্ডার ধ্বংস হয়ে গেছে।'
      ),
      l(
        'Parathyroid chief cell Calcium-Sensing Receptors (CaSR) are locked in an active state, suppressing parathyroid hormone secretion.',
        'প্যারাথাইরয়েড গ্রন্থির CaSR রিসেপ্টর আটকে যাওয়ায় প্যারাথাইরয়েড হরমোন তৈরি বন্ধ হয়ে গেছে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'In end-stage renal disease, destruction of functioning proximal tubular nephrons leads to loss of the mitochondrial CYP27B1 (1-alpha-hydroxylase) enzyme. While the liver can still synthesize 25(OH)D normally, the kidney cannot catalyze the obligate final 1-alpha-hydroxylation to produce calcitriol [1,25(OH)2D]. Without calcitriol to bind nuclear VDR, enterocyte TRPV6, calbindin-D9k, and PMCA1b transcription collapses, causing profound active calcium malabsorption and secondary hyperparathyroidism that requires therapy with active calcitriol or calcitriol analogues.',
      'কিডনি ফেইলিউরে বৃক্কের নালী ধ্বংস হয়ে যাওয়ায় মাইটোকন্ড্রিয়াল CYP27B1 (১-আলফা-হাইড্রক্সিলেজ) এনজাইম তৈরি হতে পারে না। ফলে যকৃতে ২৫(OH)D স্বাভাবিক থাকলেও কিডনি একে সক্রিয় ক্যালসিট্রিওলে রূপান্তর করতে ব্যর্থ হয়। ক্যালসিট্রিওল ছাড়া অন্ত্রে ক্যালসিয়াম শোষণের চ্যানেলগুলো (TRPV6 ও ক্যালবাইন্ডিন) সক্রিয় হয় না, যার ফলে মারাত্মক হাইপোক্যালসেমিয়া ও সেকেন্ডারি হাইপারপ্যারাথাইরয়েডিজম দেখা দেয়। এ কারণে এসব রোগীকে সরাসরি সক্রিয় ক্যালসিট্রিওল বা এর অ্যানালগ ওষুধ দিতে হয়।'
    ),
  },
}
