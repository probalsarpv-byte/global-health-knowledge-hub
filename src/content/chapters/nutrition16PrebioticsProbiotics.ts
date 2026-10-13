import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const bioticRefs = [
  {
    id: 'gibson-nat-rev-prebiotics-isapp',
    authors: 'Glenn R. Gibson et al.',
    title: 'Expert consensus document: The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on the definition and scope of prebiotics',
    organization: 'Nature Reviews Gastroenterology & Hepatology',
    year: 2017,
    url: 'https://doi.org/10.1038/nrgastro.2017.75',
    doi: '10.1038/nrgastro.2017.75',
  },
  {
    id: 'hill-nat-rev-probiotics-isapp',
    authors: 'Colin Hill et al.',
    title: 'Expert consensus document: The International Scientific Association for Probiotics and Prebiotics consensus statement on the scope and appropriate use of the term probiotic',
    organization: 'Nature Reviews Gastroenterology & Hepatology',
    year: 2014,
    url: 'https://doi.org/10.1038/nrgastro.2014.66',
    doi: '10.1038/nrgastro.2014.66',
  },
  {
    id: 'swanson-nat-rev-synbiotics-isapp',
    authors: 'Kelly S. Swanson et al.',
    title: 'The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on the definition and scope of synbiotics',
    organization: 'Nature Reviews Gastroenterology & Hepatology',
    year: 2020,
    url: 'https://doi.org/10.1038/s41575-020-0344-2',
    doi: '10.1038/s41575-020-0344-2',
  },
  {
    id: 'salminen-nat-rev-postbiotics-isapp',
    authors: 'Seppo Salminen et al.',
    title: 'The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on the definition and scope of postbiotics',
    organization: 'Nature Reviews Gastroenterology & Hepatology',
    year: 2021,
    url: 'https://doi.org/10.1038/s41575-021-00440-6',
    doi: '10.1038/s41575-021-00440-6',
  },
  {
    id: 'halmos-gastroenterology-low-fodmap',
    authors: 'Emma P. Halmos et al.',
    title: 'Diets that differ in their FODMAP content alter the colonic luminal microenvironment',
    organization: 'Gastroenterology',
    year: 2015,
    url: 'https://doi.org/10.1053/j.gastro.2014.07.037',
    doi: '10.1053/j.gastro.2014.07.037',
  },
]

export const nutrition16PrebioticsProbioticsLesson: LessonTopic = {
  id: 'topic.nutrition.prebiotics-probiotics-dysbiosis',
  slug: 'prebiotics-probiotics-dysbiosis',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '16 · Prebiotics, Probiotics, Synbiotics & Dietary Interventions in Dysbiosis',
    '১৬ · প্রিবায়োটিক, প্রোবায়োটিক, সিনবায়োটিক ও ডিসবায়োসিসে খাদ্যের ভূমিকা'
  ),
  summary: l(
    'The molecular pharmacology and clinical evidence of the "biotic" continuum: ISAPP definitions, prebiotic carbohydrate kinetics (inulin, FOS, GOS, human milk oligosaccharides [2\'-FL]), strain-specific probiotic mechanisms (Lactobacillus rhamnosus GG, Bifidobacterium animalis BB-12, Saccharomyces boulardii), synergistic versus complementary synbiotics, inanimate postbiotic signaling, keystone microbial collapse in dysbiosis, and the 3-phase clinical low-FODMAP dietary protocol for functional gastrointestinal disorders.',
    '"বায়োটিক" চিকিৎসা বিজ্ঞানের আণবিক শারীরবৃত্ত ও ক্লিনিক্যাল প্রমাণ: ISAPP বৈজ্ঞানিক সংজ্ঞা, প্রিবায়োটিক কার্বোহাইড্রেটের গাঁজন (ইনুলিন, FOS, GOS, মাতৃদুগ্ধের 2\'-FL অলিগোস্যাকারাইড), স্ট্রেন-নির্দিষ্ট প্রোবায়োটিকের কার্যপদ্ধতি (L. rhamnosus GG, B. lactis BB-12), সিনবায়োটিক ও পোস্টবায়োটিক আণবিক সংকেত, অন্ত্রের ক্ষতিকর ডিসবায়োসিস এবং ইরিটেবল বাওয়েল সিনড্রোমে (IBS) তিন-পর্যায় বিশিষ্ট লো-FODMAP খাদ্যাভ্যাসের বৈজ্ঞানিক প্রয়োগ।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Define prebiotics, probiotics, synbiotics, and postbiotics according to authoritative ISAPP consensus criteria, establishing strict requirements for viability, strain identification, and clinical evidence.',
      'ISAPP আন্তর্জাতিক মানদণ্ড অনুসারে প্রিবায়োটিক, প্রোবায়োটিক, সিনবায়োটিক ও পোস্টবায়োটিকের সঠিক সংজ্ঞা, স্ট্রেনভিত্তিক কার্যকারিতা এবং ক্লিনিক্যাল প্রমাণের বাধ্যবাধকতা নির্ধারণ করতে পারা।'
    ),
    l(
      'Detail the prebiotic chemistry and microbial metabolic fate of fructo-oligosaccharides (FOS), galacto-oligosaccharides (GOS), and 2\'-fucosyllactose (2\'-FL) in promoting bifidobacterial dominance.',
      'FOS, GOS এবং মাতৃদুগ্ধের 2\'-ফুকোসাইলোল্যাকটোজ (2\'-FL) যৌগের রাসায়নিক রূপ এবং কীভাবে এরা বাইফিডোব্যাকটেরিয়ার বংশবৃদ্ধি ত্বরান্বিত করে তা ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Contrast the molecular modes of probiotic action: pathogen competitive exclusion, bacteriocin secretion, mucosal acidification, barrier reinforcement, and dendritic cell immunomodulation.',
      'প্রোবায়োটিকের বহুমাত্রিক কার্যপদ্ধতি: রোগজীবাণু বিতাড়ন, ব্যাকটেরিওসিন ক্ষরণ, অন্ত্রীয় অম্লীকরণ, টাইট জাংশন শক্তিশালীকরণ এবং ডেনড্রাইটিক কোষের মাধ্যমে প্রতিরোধ ব্যবস্থা নিয়ন্ত্রণ নিরূপণ করতে পারা।'
    ),
    l(
      'Critique the evidence-based 3-phase low-FODMAP protocol for Irritable Bowel Syndrome (IBS), evaluating both short-term visceral symptom relief and long-term effects on bifidobacterial abundance.',
      'ইরিটেবল বাওয়েল সিনড্রোমে (IBS) তিন-পর্যায়ের লো-FODMAP ডায়েটের কার্যকারিতা পর্যালোচনা এবং দীর্ঘমেয়াদে অন্ত্রের উপকারী ব্যাকটেরিয়ার ভারসাম্যের ওপর এর প্রভাব বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.dietary-fiber-scfa', 'topic.nutrition.gut-barrier-mucosal-immunity'],
  relatedTopicIds: ['topic.nutrition.gut-microbiome-metagenomics', 'topic.anatomy.digestive'],
  references: bioticRefs,
  evidenceBySection: {
    introduction: ['gibson-nat-rev-prebiotics-isapp', 'hill-nat-rev-probiotics-isapp'],
    structure: ['gibson-nat-rev-prebiotics-isapp', 'hill-nat-rev-probiotics-isapp'],
    mechanism: ['swanson-nat-rev-synbiotics-isapp', 'salminen-nat-rev-postbiotics-isapp'],
    integration: ['halmos-gastroenterology-low-fodmap', 'swanson-nat-rev-synbiotics-isapp'],
    practice: ['halmos-gastroenterology-low-fodmap', 'hill-nat-rev-probiotics-isapp'],
    takeaways: ['gibson-nat-rev-prebiotics-isapp', 'halmos-gastroenterology-low-fodmap'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Biotic Spectrum: International Scientific Consensus', '১. বায়োটিক পরিবার: আন্তর্জাতিক বৈজ্ঞানিক ঐক্যমত্য'), sectionId: 'introduction' },
      { id: 'sec-prebiotics', label: l('2. Prebiotics & HMOs: FOS, GOS & 2\'-Fucosyllactose Chemistry', '২. প্রিবায়োটিক ও HMO: FOS, GOS ও ২\'-ফুকোসাইলোল্যাকটোজ রসায়ন'), sectionId: 'structure' },
      { id: 'sec-probiotics', label: l('3. Probiotics: Strain Specificity & Multi-Tier Mechanisms', '৩. প্রোবায়োটিক: স্ট্রেন নির্দিষ্টতা ও বহুমাত্রিক কার্যপদ্ধতি'), sectionId: 'structure' },
      { id: 'sec-syn-post', label: l('4. Synbiotics & Postbiotics: Synergism & Inanimate Effector Signals', '৪. সিনবায়োটিক ও পোস্টবায়োটিক: যৌথ শক্তি ও মৃত কোষের সংকেত'), sectionId: 'mechanism' },
      { id: 'sec-fodmap', label: l('5. Dysbiosis & The 3-Phase Low-FODMAP Clinical Protocol', '৫. ডিসবায়োসিস ও তিন-পর্যায়ের লো-FODMAP ক্লিনিক্যাল চিকিৎসা'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('6. Diagnostic Biomarkers & Practice Assessment', '৬. ডায়াগনস্টিক বায়োমার্কার ও অনুশীলন মূল্যায়ন'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('7. High-Yield Takeaways', '৭. মূল শিক্ষণীয় সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Prebiotic', 'প্রিবায়োটিক'),
        definition: l(
          'A substrate that is selectively utilized by host microorganisms conferring a health benefit, confirmed by targeted enrichment of specific beneficial taxa (ISAPP consensus).',
          'এমন এক খাদ্য উপাদান যা অন্ত্রের নির্দিষ্ট উপকারী অণুজীব বেছে বেছে খাদ্য হিসেবে গ্রহণ করে এবং এর ফলে মানবদেহে স্বাস্থ্যগত সুবিধা লাভ হয়।'
        ),
      },
      {
        term: l('Probiotic', 'প্রোবায়োটিক'),
        definition: l(
          'Live microorganisms that, when administered in adequate amounts, confer a health benefit on the host, requiring documented strain-specific identification and RCT evidence (ISAPP consensus).',
          'পর্যাপ্ত পরিমাণে সেবনকৃত এমন জীবন্ত অণুজীব যা পোষকদেহে সুনির্দিষ্ট স্বাস্থ্যগত উপকার সাধন করে, যার স্ট্রেন নির্দিষ্টতা ও গবেষণায় প্রমাণ আবশ্যক।'
        ),
      },
      {
        term: l('Postbiotic', 'পোস্টবায়োটিক'),
        definition: l(
          'A preparation of inanimate microorganisms and/or their components that confers a health benefit on the host, resolving the bacteremia risk of live probiotics in vulnerable hosts.',
          'মৃত বা নিষ্ক্রিয় অণুজীব ও তাদের কোষীয় উপাদানের নিরাপদ ফর্মুলেশন যা কোনো সংক্রমণের ঝুঁকি ছাড়াই রোগপ্রতিরোধ ক্ষমতা বৃদ্ধি করে।'
        ),
      },
      {
        term: l('FODMAPs', 'FODMAP শর্করাসমূহ'),
        definition: l(
          'Fermentable Oligosaccharides, Disaccharides, Monosaccharides, and Polyols: short-chain carbohydrates that are poorly absorbed, exerting luminal osmotic effects and rapid gas distension in IBS.',
          'ক্ষুদ্র গাঁজনযোগ্য শর্করা যা ক্ষুদ্রান্ত্রে হজম না হয়ে বৃহদন্ত্রে দ্রুত ব্যাকটেরিয়াল গাঁজনের মাধ্যমে অতিরিক্ত গ্যাস ও পেট ফাঁপা সৃষ্টি করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Managing Irritable Bowel Syndrome via Structured Low-FODMAP Reintroduction', 'তিন-পর্যায়ের লো-FODMAP ডায়েটের মাধ্যমে আইবিএস (IBS) রোগীর চিকিৎসা'),
        steps: [
          l(
            'Step 1: A 32-year-old patient with Rome IV-criteria IBS with diarrhea (IBS-D) presents with daily postprandial cramping and bloating. Fecal calprotectin (<20 ug/g) and celiac serology (anti-tTG IgA negative) rule out inflammatory bowel disease and celiac sprue.',
            'ধাপ ১: আইবিএস-ডি (IBS-D) তে আক্রান্ত এক রোগীর প্রতিদিন খাবার পর পেট ব্যথা ও পেট ফাঁপার সমস্যা। টেস্ট করে নিশ্চিত হওয়া গেল যে এটি কোনো ইনফ্ল্যামেটরি বাওয়েল ডিজিজ বা সিলিয়াক রোগ নয়।'
          ),
          l(
            'Step 2: Phase 1 Elimination (4 Weeks): Place the patient on a strict low-FODMAP dietary protocol under dietitian supervision. Abdominal pain scores drop by 70% and stool frequency normalizes from 5 times to 1-2 times daily.',
            'ধাপ ২: পর্যায় ১ বর্জন (৪ সপ্তাহ): ৪ সপ্তাহের জন্য সব হাই-FODMAP খাবার বন্ধ রাখা হলো। এতে রোগীর পেট ব্যথা ৭০% কমে গিয়ে মলত্যাগ স্বাভাবিক হলো।'
          ),
          l(
            'Step 3: Phase 2 Structured Rechallenge (6 Weeks): Reintroduce individual FODMAP subgroups one at a time over 3 days (e.g., test lactose with milk, test excess fructose with honey, test fructans with wheat, test sorbitol with avocado). The patient tolerates lactose and polyols perfectly, but develops severe bloating specifically upon fructan rechallenge.',
            'ধাপ ৩: পর্যায় ২ পুনঃপরীক্ষা (৬ সপ্তাহ): প্রতিটি খাবার ৩ দিন করে আলাদাভাবে খেয়ে দেখা হলো। দেখা গেল ল্যাকটোজ ও সর্বিটলে সমস্যা নেই, কেবল গমের ফ্রুক্টানে পেটে গ্যাস হয়।'
          ),
          l(
            'Step 4: Phase 3 Long-Term Personalization: Liberalize all well-tolerated foods (dairy, fruits, legumes in controlled portions), restricting only specific fructan-rich wheat foods. Co-administer a verified Bifidobacterium-targeted synbiotic to preserve gut microbiome diversity.',
            'ধাপ ৪: পর্যায় ৩ দীর্ঘমেয়াদী খাদ্যতালিকা: সহ্য হওয়া সব খাবার ফিরিয়ে এনে কেবল সমস্যা সৃষ্টিকারী খাবার সীমিত করা হলো, যাতে অন্ত্রের উপকারী ব্যাকটেরিয়া অক্ষুণ্ণ থাকে।'
          ),
        ],
        conclusion: l(
          'Completing all three phases of the low-FODMAP protocol prevents the irreversible loss of commensal bifidobacteria that occurs with indefinite strict restriction.',
          'তিনটি পর্যায় সঠিকভাবে সম্পন্ন করলে অন্ত্রের উপসর্গও নিয়ন্ত্রণে থাকে এবং উপকারী ব্যাকটেরিয়ার বিলুপ্তিও সফলভাবে রোধ করা যায়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does Human Milk Oligosaccharide 2\'-fucosyllactose (2\'-FL) uniquely shape the neonatal gut microbiome?',
          'মাতৃদুগ্ধের 2\'-ফুকোসাইলোল্যাকটোজ (2\'-FL) কীভাবে নবজাতকের অন্ত্রের অণুজীব পরিবেশ সুনির্দিষ্টভাবে গড়ে তোলে?'
        ),
        answer: l(
          'Human infants lack the digestive enzymes to break down 2\'-FL. Instead, 2\'-FL functions as a selective evolutionary prebiotic for Bifidobacterium longum subsp. infantis. B. infantis internalizes intact 2\'-FL and ferments it into acetate and lactate, acidifying the colonic lumen to pH <5.0, which competitively excludes fatal enteric pathobionts such as Clostridium difficile and Salmonella.',
          'নবজাতক নিজে 2\'-FL হজম করতে পারে না; এটি কেবলমাত্র Bifidobacterium infantis এর খাদ্য হিসেবে কাজ করে। এই বিশেষ ব্যাকটেরিয়াটি 2\'-FL গ্রহণ করে প্রচুর অ্যাসিড তৈরি করে অন্ত্রের pH ৫.০-এর নিচে নামিয়ে দেয়, ফলে সালমোনেলা বা ক্লস্ট্রিডিয়ামের মতো মারাত্মক ক্ষতিকর জীবাণু শিশুর অন্ত্রে বসতি গড়তে পারে না।'
        ),
      },
      {
        question: l(
          'What biological mechanism explains the safety advantage of postbiotics over live probiotics in immunocompromised patients?',
          'রোগপ্রতিরোধহীন বা সংকটাপন্ন রোগীদের ক্ষেত্রে জীবন্ত প্রোবায়োটিকের চেয়ে মৃত পোস্টবায়োটিক নিরাপদ হওয়ার কারণ কী?'
        ),
        answer: l(
          'Administering live probiotic organisms to severely immunocompromised or critically ill ICU patients carries a rare risk of bacterial translocation, opportunistic fungemia, or systemic bacteremia. Postbiotics consist of non-viable inanimate microbial fragments (e.g., purified peptidoglycan, teichoic acids, or exopolysaccharides) that stimulate host pattern-recognition receptors (TLR2, NOD2) to induce mucosal tolerance and barrier defense without introducing replicating infectious pathogens.',
          'সংকটাপন্ন বা ক্যান্সার রোগীদের শরীরে জীবিত ব্যাকটেরিয়া দিলে তা রক্তে ছড়িয়ে সেপসিস সৃষ্টির ঝুঁকি থাকে। পোস্টবায়োটিক মৃত কোষপ্রাচীর ও উপাদান নিয়ে গঠিত হওয়ায় কোনো সংক্রমণের ঝুঁকি ছাড়াই TLR2 ও NOD2 রিসেপ্টরের মাধ্যমে প্রোবায়োটিকের সমান প্রতিরোধ ও নিরাময় সুবিধা দেয়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'biotic-continuum-fodmap-protocol',
    title: l(
      'The Biotic Continuum & Three-Phase Low-FODMAP Intervention',
      'বায়োটিক ধারাবাহিকতা ও তিন-পর্যায়ের লো-FODMAP চিকিৎসা ব্যবস্থা'
    ),
    description: l(
      'Interactive architecture of prebiotic selective fermentation, probiotic colonization resistance, postbiotic safety, and clinical FODMAP reintroduction.',
      'প্রিবায়োটিকের নির্বাচনশীল গাঁজন, প্রোবায়োটিকের জীবাণু বিতাড়ন, পোস্টবায়োটিকের সুরক্ষা এবং ক্লিনিক্যাল FODMAP পুনর্ব্যবহারের ইন্টারঅ্যাক্টিভ চিত্র।'
    ),
    disclaimer: l(
      'Educational nutritional and probiotic simulation; dietary therapy for IBS requires professional clinical guidance.',
      'পুষ্টি ও প্রোবায়োটিকের শিক্ষামূলক সিমুলেশন; যেকোনো বিশেষ খাদ্যাভ্যাস শুরুর আগে পুষ্টিবিদের পরামর্শ নিন।'
    ),
    svgType: 'biotic-continuum',
    items: [
      {
        id: 'node-prebiotic-fermentation',
        label: l('Prebiotic & HMO Selective Fermentation', 'প্রিবায়োটিক ও HMO নির্বাচনশীল গাঁজন'),
        description: l(
          'Inulin, FOS, and HMO 2\'-FL resist host enzymes to selectively stimulate Bifidobacterium and Faecalibacterium prausnitzii.',
          'ইনুলিন, FOS ও মাতৃদুগ্ধের 2\'-FL পাচক রসে অক্ষত থেকে বৃহদন্ত্রে পৌঁছে বাইফিডোব্যাকটেরিয়ার বংশবৃদ্ধি ঘটায়।'
        ),
        details: l(
          'Non-digestible prebiotics (FOS, GOS, 2\'-FL) undergo selective fermentation, yielding acetate, propionate, and butyrate, lowering colonic pH and excluding enteric pathogens.',
          'প্রিবায়োটিকসমূহ অন্ত্রের নির্দিষ্ট উপকারী ব্যাকটেরিয়ার খাদ্য হিসেবে ব্যবহৃত হয়ে শর্ট-চেইন ফ্যাটি অ্যাসিড তৈরি করে পরিবেশ অম্লীয় করে ক্ষতিকর জীবাণু বিতাড়ন করে।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-probiotic-colonization',
        label: l('Probiotic Colonization Resistance & Bacteriocins', 'প্রোবায়োটিকের প্রতিরোধ ও ব্যাকটেরিওসিন'),
        description: l(
          'Live strains (L. rhamnosus GG, B. lactis BB-12) secrete bacteriocins, acidify lumen, and fortify tight junctions.',
          'সুনির্দিষ্ট স্ট্রেন (L. rhamnosus GG) ব্যাকটেরিওসিন পেপটাইড ক্ষরণ করে জীবাণু ধ্বংস করে এবং টাইট জাংশনকে সুদৃঢ় করে।'
        ),
        details: l(
          'Documented strains compete for epithelial binding sites, consume trace iron, secrete bacteriocins that collapse pathobiont membrane potential, and stimulate protective mucosal Tregs.',
          'প্রমাণিত প্রোবায়োটিক স্ট্রেনসমূহ ক্ষতিকর ব্যাকটেরিয়ার সাথে সংযোগস্থলে প্রতিযোগিতা করে, ব্যাকটেরিওসিন তৈরি করে তাদের মেরে ফেলে এবং রোগপ্রতিরোধ ব্যবস্থা শান্ত রাখে।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-postbiotic-safety',
        label: l('Postbiotic Inanimate Signaling & Safety', 'পোস্টবায়োটিক নিষ্ক্রিয় সংকেত ও নিরাপত্তা'),
        description: l(
          'Inanimate bacterial cell walls, teichoic acids, and SCFAs stimulate TLR2/NOD2 without risks of bacteremia.',
          'নিষ্ক্রিয় ব্যাকটেরিয়ার কোষপ্রাচীর ও উপাদানসমূহ কোনো সংক্রমণের ঝুঁকি ছাড়াই TLR2 গ্রাহকের মাধ্যমে নিরাময় জোরদার করে।'
        ),
        details: l(
          'Postbiotic cell wall fragments and supernatant metabolites deliver immune tuning and barrier support without live replication, resolving the sepsis risk in immunocompromised hosts.',
          'পোস্টবায়োটিক মৃত কোষ হওয়ায় আইসিইউ বা সংকটাপন্ন রোগীদের শরীরে কোনো রক্তে সংক্রমণের ঝুঁকি ছাড়াই প্রোবায়োটিকের মতো সমান উপকারিতা নিশ্চিত করে।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-fodmap-protocol',
        label: l('Three-Phase Low-FODMAP Personalization', 'তিন-পর্যায়ের লো-FODMAP ব্যক্তিগতকরণ'),
        description: l(
          'Phase 1 eliminates gas-distending fermentable oligosaccharides (2-6 wks), Phase 2 tests individual triggers (6-8 wks), and Phase 3 liberalizes diet.',
          'Phase 1 eliminates gas-distending fermentable oligosaccharides (2-6 wks), Phase 2 tests individual triggers (6-8 wks), and Phase 3 liberalizes diet.',
        ),
        details: l(
          'Phase 1 eliminates gas-distending fermentable oligosaccharides (2-6 wks) to achieve visceral quiescence. Phase 2 rechallenges individual categories. Phase 3 liberalizes all tolerated fiber to preserve bifidobacterial abundance.',
          'Phase 1 eliminates gas-distending fermentable oligosaccharides to calm the gut, Phase 2 tests each food, and Phase 3 personalizes the diet to prevent loss of beneficial bifidobacteria.',
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
          heading: l('1. The Biotic Spectrum: Definitions & International Standards', '১. বায়োটিক পরিবার: বৈজ্ঞানিক সংজ্ঞা ও আন্তর্জাতিক মানদণ্ড'),
          paragraphs: [
            l(
              'The International Scientific Association for Probiotics and Prebiotics (ISAPP) establishes precise definitions for gut-targeted nutrition [1, 2]. A Prebiotic is a selectively utilized substrate conferring a host health benefit (such as inulin or FOS) [1]. A Probiotic consists of live microorganisms administered in adequate amounts that confer a health benefit, requiring verified strain identity and clinical RCT proof [2].',
              'আন্তর্জাতিক পরিষদ ISAPP অন্ত্রের পুষ্টি চিকিৎসার সুনির্দিষ্ট সংজ্ঞা দিয়েছে [১, ২]। প্রিবায়োটিক হলো অন্ত্রের নির্দিষ্ট উপকারী ব্যাকটেরিয়া বেছে বেছে খায় এমন খাদ্য উপাদান [১]। আর প্রোবায়োটিক হলো পর্যাপ্ত পরিমাণে সেবনকৃত জীবন্ত অণুজীব যা গবেষণায় প্রমাণিত সুনির্দিষ্ট স্ট্রেনভিত্তিক উপকারিতা প্রদান করে [২]।'
            ),
            l(
              'Synbiotics combine probiotics and prebiotics [3]. Postbiotics are preparations of inanimate microorganisms and/or their components that confer health benefits safely without introducing live replicating agents [4].',
              'সিনবায়োটিক হলো প্রোবায়োটিক ও প্রিবায়োটিকের যৌথ রূপ [৩]। আর পোস্টবায়োটিক হলো মৃত বা নিষ্ক্রিয় উপকারী ব্যাকটেরিয়ার কোষীয় উপাদান যা কোনো সংক্রমণের ঝুঁকি ছাড়াই শরীরে উপকার দেয় [৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Prebiotic Carbohydrate Chemistry & Infant HMOs', '২. প্রিবায়োটিক কার্বোহাইড্রেট রসায়ন ও মাতৃদুগ্ধের HMO'),
          paragraphs: [
            l(
              'Fructo-oligosaccharides (FOS) and Inulin are linear chains of fructose units with beta(2->1) linkages that escape small-bowel digestion to reach the colon [1]. Galacto-oligosaccharides (GOS) feature galactose chains that specifically stimulate bifidobacteria [1].',
              'FOS এবং ইনুলিন হলো ফ্রুক্টোজের শিকল যা মানুষের এনজাইমে না ভেঙে সরাসরি বৃহদন্ত্রে পৌঁছায় [১]। GOS হলো গ্যালাক্টোজের শিকল যা সুনির্দিষ্টভাবে বাইফিডোব্যাকটেরিয়ার বংশবৃদ্ধি ঘটায় [১]।'
            ),
            l(
              'In human breast milk, 2\'-Fucosyllactose (2\'-FL) is the dominant Human Milk Oligosaccharide (HMO) [1]. Infants cannot digest 2\'-FL; it exists specifically to feed Bifidobacterium infantis, which acidifies the colon to pH <5.0 and prevents pathogen colonization [1, 2].',
              'মায়ের দুধের প্রধান HMO হলো ২\'-ফুকোসাইলোল্যাকটোজ (2\'-FL) [১]। শিশু এটি হজম করতে পারে না; এটি কেবল Bifidobacterium infantis কে খাওয়ানোর জন্য থাকে, যা অন্ত্র অম্লীয় করে শিশুকে মারাত্মক জীবাণু থেকে রক্ষা করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Probiotics: Strain Specificity & Multi-Tier Mechanisms', '৩. প্রোবায়োটিক: স্ট্রেন নির্দিষ্টতা ও বহুমাত্রিক কার্যপদ্ধতি'),
          paragraphs: [
            l(
              'Probiotic efficacy is strictly strain-specific: beneficial traits of Lacticaseibacillus rhamnosus GG (ATCC 53103) cannot be claimed for other rhamnosus strains [2]. Probiotics work by (1) outcompeting pathogens and secreting antimicrobial bacteriocins; (2) preserving epithelial tight junctions via soluble proteins (p40, p75); and (3) inducing anti-inflammatory regulatory T cells (Tregs) [2, 3].',
              'প্রোবায়োটিকের গুণাবলী নিখুঁতভাবে স্ট্রেনের ওপর নির্ভর করে: L. rhamnosus GG এর কোনো উপকারিতা অন্য কোনো সাধারণ স্ট্রেনের জন্য প্রযোজ্য নয় [২]। এরা ক্ষতিকর জীবাণু বিতাড়ন করে, টাইট জাংশন শক্তিশালী করে এবং প্রদাহবিরোধী রেগুলেটরি টি-কোষ তৈরি করে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Dysbiosis & The 3-Phase Low-FODMAP Protocol in IBS', '৪. ডিসবায়োসিস ও আইবিএস-এ তিন-পর্যায়ের লো-FODMAP খাদ্যাভ্যাস'),
          paragraphs: [
            l(
              'In Irritable Bowel Syndrome (IBS), visceral hypersensitivity causes severe bloating and pain when consuming rapidly fermentable short-chain carbohydrates (FODMAPs: fructans, GOS, lactose, excess fructose, polyols) [5]. These draw water osmotically into the small intestine and trigger explosive colonic gas production [5].',
              'আইবিএস (IBS) রোগীদের অন্ত্রে দ্রুত গাঁজনযোগ্য ক্ষুদ্র শর্করা (FODMAP) প্রবেশ করলে তা অস্মোটিক টানে পানি টেনে আনে এবং ব্যাকটেরিয়া দ্বারা দ্রুত গাঁজন হয়ে অতিরিক্ত গ্যাস সৃষ্টি করে তীব্র ব্যথা দেয় [৫]।'
            ),
            l(
              'Management follows a Three-Phase Protocol: (1) FODMAP Restriction (2-6 weeks) to calm symptoms; (2) Structured Reintroduction (6-8 weeks) testing individual food groups; and (3) Personalization [5]. Indefinite restriction is harmful because it starves beneficial bifidobacteria and reduces protective butyrate [1, 5].',
              'চিকিৎসা হয় তিন ধাপে: (১) সাময়িক বর্জন (২-৬ সপ্তাহ); (২) ধাপে ধাপে খাদ্য পরীক্ষা (৬-৮ সপ্তাহ); এবং (৩) ব্যক্তিগত খাদ্যতালিকা [৫]। অনির্দিষ্টকাল সব খাবার বন্ধ রাখলে উপকারী বাইফিডোব্যাকটেরিয়া বিলুপ্ত হয়ে অন্ত্রের অপূরণীয় ক্ষতি হয় [১, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Clinical Assessment of SIBO and Postbiotic Safety', '৫. SIBO পরীক্ষা ও পোস্টবায়োটিকের নিরাপত্তা'),
          paragraphs: [
            l(
              'Hydrogen/methane breath testing detects Small Intestinal Bacterial Overgrowth (SIBO). Fecal calprotectin rules out active inflammatory bowel disease [1, 5]. For immunocompromised and ICU patients where live probiotics carry bacteremia risk, inanimate postbiotics provide safe immune support [3, 4].',
              'হাইড্রোজেন শ্বাস পরীক্ষা করে SIBO রোগ নির্ণয় করা হয় এবং মলের ক্যালপ্রোটেক্টিন দিয়ে অন্ত্রের আলসার পরীক্ষা করা হয় [১, ৫]। সংকটাপন্ন রোগীদের রক্তে সংক্রমণের ঝুঁকি এড়াতে জীবন্ত ব্যাকটেরিয়ার বদলে নিরাপদ পোস্টবায়োটিক ব্যবহার করা হয় [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Takeaways', '৬. মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Prebiotics require selective utilization; probiotics require verified strains and clinical trials [1, 2]. Breast milk 2\'-FL specifically nurtures infant B. infantis [1]. Probiotic benefits are strain-specific [2]. Postbiotics resolve safety risks in vulnerable hosts [4]. The 3-phase low-FODMAP protocol controls IBS symptoms while preserving long-term microbiome diversity [5].',
              'প্রিবায়োটিককে অবশ্যই সুনির্দিষ্ট ব্যাকটেরিয়ার খাবার হতে হবে; প্রোবায়োটিককে পর্যাপ্ত জীবন্ত ও স্ট্রেনভিত্তিক হতে হবে [১, ২]। মায়ের দুধের 2\'-FL শিশুর অন্ত্রের বন্ধু B. infantis কে বাঁচিয়ে রাখে [১]। পোস্টবায়োটিক কোনো সংক্রমণের ঝুঁকি ছাড়াই নিরাপদ প্রতিরক্ষা দেয় [৪]। তিন-পর্যায়ের লো-FODMAP খাদ্যাভ্যাস অন্ত্রের ভারসাম্য বজায় রাখে [৫]।'
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
          heading: l('1. Pharmacological Criteria of the ISAPP Consensus', '১. ISAPP ঐকমত্যের ফার্মাকোলজিক্যাল মানদণ্ড'),
          paragraphs: [
            l(
              'ISAPP demands evidence of selective microbial stimulation conferring health benefit for prebiotics [1], and viable CFU dosing, alphanumeric strain naming, and double-blind human RCTs for probiotics [2].',
              'ISAPP সংজ্ঞায় প্রিবায়োটিকের জন্য সুনির্দিষ্ট ব্যাকটেরিয়ার বৃদ্ধির প্রমাণ এবং প্রোবায়োটিকের জন্য জীবন্ত CFU ডোজ, স্ট্রেন কোড এবং মানবদেহে ক্লিনিক্যাল ট্রায়ালের প্রমাণ থাকা বাধ্যতামূলক [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Enzymatic Architecture of HMO Utilization in B. infantis', '২. B. infantis এ HMO ব্যবহারের এনজাইমীয় রূপ'),
          paragraphs: [
            l(
              'B. infantis imports 2\'-FL intact via specialized ABC transporters, using intracellular fucosidases and beta-galactosidases to ferment it into acetate and lactate via the bifid shunt, suppressing enteric pathogens [1, 2].',
              'B. infantis ব্যাকটেরিয়া 2\'-FL কে সম্পূর্ণ অক্ষত অবস্থায় কোষে নিয়ে বিশেষ এনজাইম দিয়ে ভেঙে প্রচুর অ্যাসিটেট ও ল্যাকটেট তৈরি করে অন্ত্রের pH কমিয়ে রোগজীবাণু বিতাড়ন করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Probiotic Bacteriocins and EGFR Signaling', '৩. প্রোবায়োটিকের ব্যাকটেরিওসিন ও EGFR সংকেত'),
          paragraphs: [
            l(
              'L. rhamnosus GG secretes p40 and p75 proteins that transactivate enterocyte EGFR, promoting Akt phosphorylation and preventing cytokine-induced apoptosis while upregulating claudin-1 and ZO-1 [2, 3].',
              'L. rhamnosus GG থেকে ক্ষরিত p40 প্রোটিন এন্টারোসাইটের EGFR রিসেপ্টর সক্রিয় করে কোষের মৃত্যু রোধ করে এবং টাইট জাংশন প্রোটিন বৃদ্ধি করে দেয়াল রক্ষা করে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. The Osmotic & Fermentation Kinetics of FODMAPs', '৪. FODMAP শর্করার অস্মোটিক ও গাঁজন গতিবিদ্যা'),
          paragraphs: [
            l(
              'Unabsorbed FODMAPs exert high intraluminal osmotic pressure, increasing ileal water content [5]. Upon colonic entry, bacterial fermentation generates rapid surges in hydrogen, methane, and CO2, causing mechanical distension and stimulating visceral nociceptors [5].',
              'হজম না হওয়া FODMAP পানি টেনে এনে অন্ত্রের চাপ বাড়ায় এবং বৃহদন্ত্রে পৌঁছামাত্রই ব্যাকটেরিয়াগুলো দ্রুত গ্যাস তৈরি করে অন্ত্রের দেয়াল ফুলিয়ে দিয়ে তীব্র ব্যথা সৃষ্টি করে [৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Three-Phase Low-FODMAP Rechallenge Methodology', '৫. তিন-পর্যায়ের লো-FODMAP খাদ্য পরীক্ষার পদ্ধতি'),
          paragraphs: [
            l(
              'Phase 1 eliminates FODMAPs for 2-6 weeks [5]. Phase 2 rechallenges individual categories with structured dose titrations over 3 days with a 3-day washout [5]. Phase 3 integrates tolerated foods to preserve bifidobacterial abundance and SCFA production [1, 5].',
              'পর্যায় ১ এ সাময়িক খাবার বন্ধ থাকে [৫]। পর্যায় ২ এ প্রতিটি উপাদান ৩ দিন করে আলাদাভাবে পরীক্ষা করা হয় [৫]। পর্যায় ৩ এ সহ্য হওয়া খাবার ফিরিয়ে এনে অন্ত্রের উপকারী ব্যাকটেরিয়ার দীর্ঘমেয়াদী সুস্থতা রক্ষা করা হয় [১, ৫]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Summary', '৬. প্রাতিষ্ঠানিক সারাংশ'),
          paragraphs: [
            l(
              'The biotic continuum extends from prebiotic fiber chemistry to viable probiotic pharmacology and inanimate postbiotic signaling [1, 2, 4]. Dietary therapy in functional disorders must balance short-term symptom relief against long-term ecological diversity [5].',
              'বায়োটিক চিকিৎসা প্রিবায়োটিক, প্রোবায়োটিক ও পোস্টবায়োটিকের এক সমন্বিত রূপ [১, ২, ৪]। পেটের চিকিৎসায় সাময়িক আরামের পাশাপাশি অন্ত্রের দীর্ঘমেয়াদী অণুজীব বৈচিত্র্য রক্ষা করাই মূল লক্ষ্য [৫]।'
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
          heading: l('1. Molecular Classification: Complementary vs Synergistic Synbiotics', '১. পরিপূরক বনাম সমন্বিত সিনবায়োটিকের আণবিক শ্রেণিবিভাগ'),
          paragraphs: [
            l(
              'Complementary synbiotics pair independent probiotics and prebiotics targeting distinct pathways [3]. Synergistic synbiotics formulate a prebiotic substrate that is selectively metabolized by the co-administered probiotic strain to enhance its survival and colonization [3].',
              'পরিপূরক সিনবায়োটিক স্বাধীনভাবে কাজ করে [৩]। আর সমন্বিত সিনবায়োটিকে প্রিবায়োটিকটিকে এমনভাবে তৈরি করা হয় যাতে তা কেবল সাথে দেওয়া প্রোবায়োটিক ব্যাকটেরিয়ার খাদ্য হয়ে তার টিকে থাকা নিশ্চিত করে [৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Glycobiology of HMO Core and Branched Structures', '২. HMO অলিগোস্যাকারাইডের জটিল গ্লাইকোবায়োলজি'),
          paragraphs: [
            l(
              'HMOs contain five monosaccharide building blocks: D-glucose, D-galactose, N-acetylglucosamine, L-fucose, and sialic acid, forming over 200 distinct structures [1]. Secretor status (FUT2 gene expression) dictates whether mothers produce alpha(1,2)-fucosylated HMOs like 2\'-FL [1].',
              'মাতৃদুগ্ধে ২০০টিরও বেশি বৈচিত্র্যময় HMO থাকে [১]। মায়ের FUT2 জিনের ওপর ভিত্তি করে মাতৃদুগ্ধে 2\'-FL এর মতো সুরক্ষাকারী উপাদান তৈরি হয় যা শিশুর অন্ত্রের ভিত্তি গড়ে দেয় [১]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Postbiotic Cell Wall Ligands and Innate Pattern Recognition', '৩. পোস্টবায়োটিক কোষপ্রাচীর ও সহজাত ইমিউন গ্রাহক সংকেত'),
          paragraphs: [
            l(
              'Inanimate postbiotic preparations contain muramyl dipeptides (activating intracellular NOD2) and lipoteichoic acids (activating TLR2/6 heterodimers) [4]. These trigger cytoprotective heat-shock protein expression and mucin exocytosis without viable bacteremia hazards [3, 4].',
              'পোস্টবায়োটিকের পেপটিডোগ্লাইকান ও লাইপোটিইকোয়িক অ্যাসিড কোষের NOD2 ও TLR2 গ্রাহকে আবদ্ধ হয়ে কোনো সংক্রমণের ঝুঁকি ছাড়াই কোষ সুরক্ষা ও মিউসিন নিঃসরণ ত্বরান্বিত করে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Longitudinal Microbial Metagenomic Shifts During Low-FODMAP Diet', '৪. লো-FODMAP ডায়েটে অণুজীবের মেটাজেনোমিক পরিবর্তন'),
          paragraphs: [
            l(
              'Shotgun sequencing reveals that prolonged FODMAP elimination depletes Bifidobacterium adolescentis and Faecalibacterium prausnitzii by >50%, reducing fecal butyrate and increasing luminal pH [5]. Personalizing the diet restores keystone populations [1, 5].',
              'দীর্ঘদিন কঠোর লো-FODMAP ডায়েট মেনে চললে অন্ত্রের উপকারী বাইফিডোব্যাকটেরিয়া ও বিউটাইরেট ৫০%-এরও বেশি কমে যায় [৫]। তাই ধাপে ধাপে খাবার ফিরিয়ে এনে অন্ত্রের সুস্থতা রক্ষা করা অপরিহার্য [১, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Therapeutic Frontiers: Defined Microbial Consortia and Engineered Biotics', '৫. চিকিৎসাগত গবেষণা: কনসোর্টিয়া ও ইঞ্জিনিয়ার্ড বায়োটিক'),
          paragraphs: [
            l(
              'Next-generation biotics utilize defined live biotherapeutic products (LBPs) such as purified Faecalibacterium prausnitzii or engineered Lactococcus lactis expressing human IL-10 for targeted mucosal healing [2, 3].',
              'আধুনিক বায়োটিক্সে জেনেটিক্যালি ইঞ্জিনিয়ার্ড ব্যাকটেরিয়া তৈরি হচ্ছে যা সরাসরি অন্ত্রের ভেতর প্রদাহবিরোধী ওষুধ ও হরমোন তৈরি করে আলসার নিরাময় করতে সক্ষম [২, ৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Synthesis', '৬. অনুবাদমূলক সংশ্লেষ'),
          paragraphs: [
            l(
              'Microbiome therapeutics requires integrating molecular definition with clinical safety and nutritional preservation [1, 4]. Advancing from empirical remedies to mechanistic synbiotics and postbiotics represents the future of gastroenterological pharmacology [2, 3].',
              'অণুজীব চিকিৎসা আণবিক বিজ্ঞান, ক্লিনিক্যাল নিরাপত্তা এবং দীর্ঘমেয়াদী ভারসাম্যের ওপর প্রতিষ্ঠিত [১, ৪]। পরীক্ষামূলক পদ্ধতির বদলে সুনির্দিষ্ট সিনবায়োটিক ও নিরাপদ পোস্টবায়োটিকই হলো গ্যাস্ট্রোএন্টারোলজির ভবিষ্যৎ [২, ৩]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential biotic mechanisms: Prebiotic fermentation, probiotic colonization resistance, postbiotic signaling, and the three-phase low-FODMAP protocol.',
      'বায়োটিক চিকিৎসা ব্যবস্থা: প্রিবায়োটিক গাঁজন, প্রোবায়োটিক জীবাণু বিতাড়ন, পোস্টবায়োটিক সংকেত এবং তিন-পর্যায়ের লো-FODMAP খাদ্যাভ্যাস।'
    ),
    steps: [
      l(
        'Step 1: Inulin, FOS, and HMO 2\'-fucosyllactose resist human digestive enzymes, reaching the colon to selectively stimulate Bifidobacterium and Faecalibacterium prausnitzii.',
        'ধাপ ১: ইনুলিন, FOS ও মাতৃদুগ্ধের 2\'-FL মানুষের পাচক রসে অক্ষত থেকে বৃহদন্ত্রে পৌঁছে সুনির্দিষ্টভাবে বাইফিডোব্যাকটেরিয়ার বংশবৃদ্ধি ঘটায়।'
      ),
      l(
        'Step 2: Specific live strains (L. rhamnosus GG, B. lactis BB-12) secrete antimicrobial bacteriocins, acidify lumen with lactic acid, and strengthen tight junctions via EGFR/p40 signaling.',
        'ধাপ ২: সুনির্দিষ্ট স্ট্রেন (L. rhamnosus GG) ব্যাকটেরিওসিন পেপটাইড ক্ষরণ করে রোগজীবাণু ধ্বংস করে এবং p40 সংকেতের মাধ্যমে টাইট জাংশনকে সুদৃঢ় করে।'
      ),
      l(
        'Step 3: Inanimate bacterial lysates, teichoic acids, and SCFAs stimulate enterocyte TLR2/NOD2 receptors to confer anti-inflammatory benefits without risks of bacteremia in vulnerable hosts.',
        'ধাপ ৩: নিষ্ক্রিয় ব্যাকটেরিয়ার কোষপ্রাচীর ও উপাদানসমূহ কোনো সংক্রমণের ঝুঁকি ছাড়াই TLR2 গ্রাহকের মাধ্যমে রোগ প্রতিরোধ ও নিরাময় ক্ষমতা জোরদার করে।'
      ),
      l(
        'Step 4: Phase 1 eliminates gas-distending fermentable oligosaccharides (2-6 wks), Phase 2 tests individual triggers (6-8 wks), and Phase 3 liberalizes the diet to preserve long-term bifidobacteria.',
        'ধাপ ৪: পর্যায় ১ ক্ষতিকর গ্যাস কমাতে সাময়িক খাবার বর্জন করে, পর্যায় ২ সমস্যা সৃষ্টিকারী উপাদান শনাক্ত করে এবং পর্যায় ৩ খাদ্যতালিকা প্রশস্ত করে অন্ত্রের দীর্ঘমেয়াদী সুস্থতা রক্ষা করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'According to the ISAPP consensus definition, what mandatory criterion distinguishes a true prebiotic from general non-digestible dietary fiber?',
      'ISAPP বৈজ্ঞানিক সংজ্ঞা অনুযায়ী, কোন বাধ্যতামূলক শর্তটি সাধারণ অপাচ্য খাদ্য আঁশের সাথে একটি প্রকৃত প্রিবায়োটিককে পৃথক করে?'
    ),
    options: [
      l(
        'It must be selectively utilized by host microorganisms, conferring documented health benefits through targeted taxonomic enrichment.',
        'এটি পোষকদেহের অণুজীবসমূহ কর্তৃক অবশ্যই সুনির্দিষ্টভাবে ও বেছে বেছে ব্যবহৃত হতে হবে এবং লক্ষ্যভিত্তিক উপকারী ব্যাকটেরিয়ার বৃদ্ধির মাধ্যমে প্রমাণিত স্বাস্থ্যগত সুবিধা দিতে হবে।'
      ),
      l(
        'It must be completely synthesized in human hepatocytes before enterohepatic secretion.',
        'এটি অন্ত্রে ক্ষরণের আগে অবশ্যই মানুষের যকৃত কোষে সম্পূর্ণরূপে সংশ্লেষিত হতে হবে।'
      ),
      l(
        'It must increase fecal stool volume without undergoing any anaerobic microbial fermentation in the colon.',
        'এটি বৃহদন্ত্রে কোনো ধরনের অণুজীবীয় গাঁজন ছাড়াই কেবল মলের ভলিউম বাড়াতে সক্ষম হতে হবে।'
      ),
      l(
        'It must bind dietary cholesterol irreversibly to induce fecal bile acid wasting.',
        'এটি খাদ্যের কোলেস্টেরলের সাথে শক্তভাবে যুক্ত হয়ে মলের সাথে পিত্ত অম্ল নিষ্কাশন করতে হবে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'The ISAPP consensus definition requires proof of "selective utilization". While all prebiotics are non-digestible fibers, not all dietary fibers are prebiotics: a prebiotic must selectively stimulate specific beneficial taxa (such as Bifidobacterium or Faecalibacterium) rather than being fermented indiscriminately by all luminal species.',
      'ISAPP সংজ্ঞার মূল শর্ত হলো "নির্বাচনশীল ব্যবহার"। সব প্রিবায়োটিকই খাদ্য আঁশ, কিন্তু সব খাদ্য আঁশ প্রিবায়োটিক নয়। একটি প্রিবায়োটিককে অবশ্যই অন্ত্রের নির্দিষ্ট উপকারী ব্যাকটেরিয়া (যেমন বাইফিডোব্যাকটেরিয়া) বেছে বেছে খেতে পারে এমন উপাদান হতে হবে।'
    ),
  },
}
