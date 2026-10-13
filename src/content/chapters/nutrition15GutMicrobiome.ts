import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const microbiomeRefs = [
  {
    id: 'sender-cell-human-microbiome-numbers',
    authors: 'Ron Sender, Shai Fuchs, Ron Milo',
    title: 'Revised Estimates for the Number of Human and Bacteria Cells in the Body',
    organization: 'Cell',
    year: 2016,
    url: 'https://doi.org/10.1016/j.cell.2016.01.043',
    doi: '10.1016/j.cell.2016.01.043',
  },
  {
    id: 'sonnenburg-nature-microbiota-diet',
    authors: 'Justin L. Sonnenburg, Fredrik Bäckhed',
    title: 'Diet-microbiota interactions as moderators of human metabolism',
    organization: 'Nature',
    year: 2016,
    url: 'https://doi.org/10.1038/nature18846',
    doi: '10.1038/nature18846',
  },
  {
    id: 'wahlstrom-cell-metab-bile-acids-microbiome',
    authors: 'Annika Wahlström et al.',
    title: 'Intestinal Crosstalk Between Bile Acids and Microbiota and Its Impact on Host Metabolism',
    organization: 'Cell Metabolism',
    year: 2016,
    url: 'https://doi.org/10.1016/j.cmet.2016.05.005',
    doi: '10.1016/j.cmet.2016.05.005',
  },
  {
    id: 'tang-nejm-tmao-cardiovascular',
    authors: 'W.H. Wilson Tang et al.',
    title: 'Intestinal Microbial Metabolism of Phosphatidylcholine and Cardiovascular Risk',
    organization: 'The New England Journal of Medicine',
    year: 2013,
    url: 'https://doi.org/10.1056/NEJMoa1109400',
    doi: '10.1056/NEJMoa1109400',
  },
  {
    id: 'zelante-immunity-tryptophan-microbiome',
    authors: 'Teresa Zelante et al.',
    title: 'Tryptophan catabolites from microbiota engage aryl hydrocarbon receptor and balance mucosal reactivity via interleukin-22',
    organization: 'Immunity',
    year: 2013,
    url: 'https://doi.org/10.1016/j.immuni.2013.08.003',
    doi: '10.1016/j.immuni.2013.08.003',
  },
]

export const nutrition15GutMicrobiomeLesson: LessonTopic = {
  id: 'topic.nutrition.gut-microbiome-metagenomics',
  slug: 'gut-microbiome-metagenomics',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '15 · The Human Gut Microbiome: Taxonomic Architecture & Metagenomics',
    '১৫ · মানব অন্ত্রের মাইক্রোবায়োম: শ্রেণিবিন্যাস কাঠামো ও মেটাজেনোমিক্স'
  ),
  summary: l(
    'The molecular ecosystem of the human gastrointestinal microbiome: quantitative microbial cell censuses (1:1 ratio with human somatic cells), phylum-level architecture (Bacillota, Bacteroidota, Actinomycetota, Verrucomicrobiota), ecological diversity metrics (alpha versus beta diversity), microbial bile salt hydrolase and 7alpha-dehydroxylation transforming primary into secondary bile acids, tryptophan catabolism into aryl hydrocarbon receptor (AhR) protective indoles, and dietary choline/carnitine cleavage via CutC/D lyases into pro-atherogenic trimethylamine N-oxide (TMAO).',
    'মানব অন্ত্রের অণুজীব বাস্তুতন্ত্রের আণবিক জীববিদ্যা: কোষীয় অনুপাত (মানব কোষ ও ব্যাকটেরিয়ার ১:১ অনুপাত), পর্বভিত্তিক শ্রেণিবিন্যাস (Bacillota, Bacteroidota, Actinomycetota, Akkermansia), বাস্তুতাত্ত্বিক বৈচিত্র্য পরিমাপ (আলফা বনাম বিটা ডাইভার্সিটি), পিত্ত অম্লের রূপান্তর ও রিসেপ্টর সংকেত, ট্রিপটোফ্যান থেকে উৎপন্ন প্রতিরক্ষামূলক ইনডোল যৌগ এবং কোলিন ও কার্নিটিন থেকে রক্তনালির ক্ষতিসাধনকারী TMAO তৈরির ক্ষতিকর প্রক্রিয়া।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Quantify the human gut microbiome cell population (~3.8 x 10^13 bacteria) and characterize the dominant phylogenetic phyla: Bacillota, Bacteroidota, Actinomycetota, Pseudomonadota, and Verrucomicrobiota.',
      'মানব অন্ত্রের অণুজীব জনসংখ্যা (প্রায় ৩.৮ x ১০^১৩ ব্যাকটেরিয়া) এবং প্রধান পর্বসমূহ (Bacillota, Bacteroidota, Actinomycetota, Verrucomicrobiota) সঠিকভাবে চিহ্নিত করতে পারা।'
    ),
    l(
      'Contrast ecological biodiversity metrics: within-individual richness and evenness (alpha diversity: Shannon index, Chao1) versus between-community phylogenetic dissimilarity (beta diversity: Bray-Curtis, UniFrac).',
      'বাস্তুতাত্ত্বিক জীববৈচিত্র্য পরিমাপের পার্থক্য বিশ্লেষণ: ব্যক্তির অভ্যন্তরীণ বৈচিত্র্য (আলফা ডাইভার্সিটি) বনাম ব্যক্তিদের মধ্যকার পার্থক্য (বিটা ডাইভার্সিটি) ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Map microbial secondary bile acid synthesis: bacterial bile salt hydrolase (BSH) deconjugation and 7alpha-dehydroxylation generating deoxycholate and lithocholate, detailing their regulatory effects on FXR and TGR5 receptors.',
      'অণুজীবীয় পিত্ত অম্লের রূপান্তর: BSH এনজাইমের ডিকনজুগেশন এবং ৭-আলফা ডিহাইড্রোক্সিলেশনের মাধ্যমে সেকেন্ডারি পিত্ত অম্ল তৈরি ও FXR/TGR5 গ্রাহকের ওপর তাদের প্রভাব পর্যালোচনা করতে পারা।'
    ),
    l(
      'Trace the diet-dependent metabolic pathways of host-microbe crosstalk: tryptophan indoles activating Aryl Hydrocarbon Receptors (AhR) vs choline/carnitine conversion into TMA and hepatic TMAO in cardiovascular pathology.',
      'দেহের সাথে অণুজীবের রাসায়নিক যোগাযোগ: ট্রিপটোফ্যান থেকে AhR রিসেপ্টর সক্রিয়কারী ইনডোল তৈরি বনাম কোলিন থেকে রক্তনালির জন্য ক্ষতিকর TMAO তৈরির আণবিক পথ বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.dietary-fiber-scfa', 'topic.nutrition.gut-barrier-mucosal-immunity'],
  relatedTopicIds: ['topic.metabolism.cholesterol-steroids', 'topic.anatomy.digestive'],
  references: microbiomeRefs,
  evidenceBySection: {
    introduction: ['sender-cell-human-microbiome-numbers', 'sonnenburg-nature-microbiota-diet'],
    structure: ['sender-cell-human-microbiome-numbers', 'sonnenburg-nature-microbiota-diet'],
    mechanism: ['wahlstrom-cell-metab-bile-acids-microbiome', 'zelante-immunity-tryptophan-microbiome'],
    integration: ['tang-nejm-tmao-cardiovascular', 'sonnenburg-nature-microbiota-diet'],
    practice: ['wahlstrom-cell-metab-bile-acids-microbiome', 'tang-nejm-tmao-cardiovascular'],
    takeaways: ['sender-cell-human-microbiome-numbers', 'sonnenburg-nature-microbiota-diet'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Human Holobiont: Census & Phylogenetics', '১. মানব হোলোবায়োন্ট: আদমশুমারি ও পর্বভিত্তিক বিন্যাস'), sectionId: 'introduction' },
      { id: 'sec-diversity', label: l('2. Ecological Metagenomics: Alpha vs Beta Diversity', '২. বাস্তুতাত্ত্বিক মেটাজেনোমিক্স: আলফা বনাম বিটা বৈচিত্র্য'), sectionId: 'structure' },
      { id: 'sec-bile-acids', label: l('3. Microbial Bile Acid Transformations: BSH, FXR & TGR5', '৩. পিত্ত অম্লের রূপান্তর: BSH এনজাইম, FXR ও TGR5 সংকেত'), sectionId: 'structure' },
      { id: 'sec-indoles', label: l('4. Tryptophan Metabolites & Aryl Hydrocarbon Receptor Signaling', '৪. ট্রিপটোফ্যান বিপাক ও অ্যারিল হাইড্রোকার্বন রিসেপ্টর সংকেত'), sectionId: 'mechanism' },
      { id: 'sec-tmao', label: l('5. Choline, CutC/D Lyases, TMAO & Cardiovascular Disease', '৫. কোলিন, CutC/D লাইয়েজ, TMAO ও হৃদরোগের ঝুঁকি'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('6. Diagnostic Biomarkers & Practice Assessment', '৬. ডায়াগনস্টিক বায়োমার্কার ও অনুশীলন মূল্যায়ন'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('7. High-Yield Takeaways', '৭. মূল শিক্ষণীয় সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Holobiont', 'হোলোবায়োন্ট'),
        definition: l(
          'An ecological unit comprising a host organism and all of its symbiotic microorganisms (bacteria, archaea, fungi, viruses), acting as a co-evolved metabolic and genomic collective.',
          'পোষক দেহ এবং তার অভ্যন্তরে বসবাসকারী সমগ্র মিথোজীবী অণুজীবের সমন্বয়ে গঠিত অখণ্ড যৌথ জীবসত্তা।'
        ),
      },
      {
        term: l('Alpha vs Beta Diversity', 'আলফা বনাম বিটা বৈচিত্র্য'),
        definition: l(
          'Alpha diversity measures species richness and evenness within a single individual sample; Beta diversity evaluates phylogenetic composition distance and dissimilarity between different individuals or populations.',
          'আলফা ডাইভার্সিটি হলো একজন একক ব্যক্তির অন্ত্রের নিজস্ব প্রজাতির বৈচিত্র্য; আর বিটা ডাইভার্সিটি হলো বিভিন্ন ব্যক্তি বা জনগোষ্ঠীর মধ্যকার অণুজীবের পার্থক্যের পরিমাপ।'
        ),
      },
      {
        term: l('Bile Salt Hydrolase (BSH)', 'বাইল সল্ট হাইড্রোলেজ (BSH)'),
        definition: l(
          'A bacterial enzyme that cleaves the amide bond connecting glycine or taurine to steroid rings in primary bile acids, an obligate prerequisite for downstream 7alpha-dehydroxylation into secondary bile acids.',
          'ব্যাকটেরিয়ার এনজাইম যা প্রাথমিক পিত্ত অম্ল থেকে গ্লাইসিন ও টরিন মুক্ত করে সেকেন্ডারি পিত্ত অম্ল তৈরির পথ খুলে দেয়।'
        ),
      },
      {
        term: l('Trimethylamine N-Oxide (TMAO)', 'ট্রাইমিথাইলঅ্যামিন এন-অক্সাইড (TMAO)'),
        definition: l(
          'A circulating pro-atherogenic metabolite produced when hepatic FMO3 oxidizes trimethylamine (TMA) generated by gut microbial CutC/D cleavage of dietary choline and L-carnitine.',
          'লাল মাংস ও ডিমের কোলিন থেকে ব্যাকটেরিয়ার তৈরি গ্যাস যকৃতে জারিত হয়ে উৎপন্ন ভাস্কুলার বিষ যা হৃদরোগ ও রক্ত জমাট বাঁধার ঝুঁকি বাড়ায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Translating Stool Metagenomics and Elevated Plasma TMAO', 'মলের মেটাজেনোমিক্স ও রক্তে উচ্চ TMAO-এর সমন্বিত ক্লিনিক্যাল সমাধান'),
        steps: [
          l(
            'Step 1: A 54-year-old male with hypertension and family history of premature coronary artery disease presents for cardiovascular risk stratification. Fasting plasma TMAO is severely elevated at 11.4 umol/L (reference <6.2 umol/L).',
            'ধাপ ১: উচ্চ রক্তচাপ ও হৃদরোগের পারিবারিক ইতিহাসসম্পন্ন এক ব্যক্তির রক্তে TMAO মাত্রা ১১.৪ umol/L (স্বাভাবিকের দ্বিগুণ) পাওয়া গেছে।'
          ),
          l(
            'Step 2: Dietary & Microbial Audit: Nutritional history reveals high daily intake of processed red meats and choline supplements. Stool 16S sequencing reveals a high Bacillota/Bacteroidota ratio and blooms of CutC-expressing taxa alongside depleted Akkermansia muciniphila.',
            'ধাপ ২: খাদ্য ও অণুজীব নিরীক্ষা: খাদ্যাভ্যাসে প্রচুর লাল মাংস ও কোলিন রয়েছে। মলের সিকোয়েন্সিংয়ে কোলিন কাটার CutC এনজাইম সমৃদ্ধ ক্ষতিকর ব্যাকটেরিয়া বেশি পাওয়া গেছে।'
          ),
          l(
            'Step 3: Map Pathophysiological Danger: Elevated TMAO accelerates CD36 scavenger receptor expression on macrophages, driving rapid arterial foam cell accumulation and platelet hyper-reactivity.',
            'ধাপ ৩: ঝুঁকি পর্যালোচনা: উচ্চ TMAO ধমনিতে প্লাক তৈরি করে এবং অণুচক্রিকাকে অতি-সংবেদনশীল করে রক্ত জমাট বাঁধায়।'
          ),
          l(
            'Step 4: Clinical Prescription: Replace red meat and animal fats with plant-derived legumes, whole grains, and extra virgin olive oil (rich in 3,3-dimethyl-1-butanol [DMB], a natural non-lethal inhibitor of microbial CutC/D TMA-lyases).',
            'ধাপ ৪: চিকিৎসা নির্দেশিকা: লাল মাংস কমিয়ে অলিভ অয়েল ও ডাল সমৃদ্ধ ভূমধ্যসাগরীয় খাদ্যাভ্যাস চালু করা; অলিভ অয়েলের DMB উপাদান প্রাকৃতিকভাবে ব্যাকটেরিয়াল CutC এনজাইম বন্ধ করে দেয়।'
          ),
        ],
        conclusion: l(
          'Dietary shifting from choline-rich red meats to Mediterranean polyphenol-rich foods shuts down microbial TMA production, normalizing plasma TMAO within 4 to 8 weeks.',
          'খাদ্যাভ্যাস পরিবর্তনের মাধ্যমে ৪ থেকে ৮ সপ্তাহের মধ্যে রক্তে ক্ষতিকর TMAO স্বাভাবিক মাত্রায় নামিয়ে আনা সম্ভব।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'How does the specialized mucin-degrading bacterium Akkermansia muciniphila paradoxically promote mucosal barrier thickening rather than barrier erosion?',
          'মিউসিন ভক্ষণকারী ব্যাকটেরিয়া Akkermansia muciniphila মিউসিন খেয়ে ফেলা সত্ত্বেও কীভাবে অন্ত্রের প্রাচীরকে পাতলা না করে বরং আরও ঘন ও শক্তিশালী করে তোলে?'
        ),
        answer: l(
          'Although Akkermansia muciniphila utilizes host MUC2 glycans as its sole carbon and nitrogen source, its enzymatic foraging liberates small oligosaccharides, acetate, and propionate. These metabolic signals stimulate adjacent colonic goblet cells via G-protein-coupled receptors and histone modification, triggering a compensatory acceleration of de novo MUC2 synthesis and exocytosis that significantly exceeds the rate of degradation. Furthermore, its outer membrane protein Amuc_1100 directly engages enterocyte TLR2 to strengthen tight junction claudin-1 expression, resulting in net mucosal barrier thickening.',
          'Akkermansia muciniphila মিউসিন ভেঙে খেলেও এর ফলে অ্যাসিটেট ও প্রোপিওনেট তৈরি হয়। এই উপাদানগুলো অন্ত্রের গবলেট কোষকে উদ্দীপিত করে যে হারে মিউসিন ভাঙে তার চেয়ে বহুগুণ বেশি হারে নতুন MUC2 মিউসিন তৈরি করতে বাধ্য করে। এছাড়া এর কোষঝিল্লির Amuc_1100 প্রোটিন সরাসরি TLR2 রিসেপ্টরের মাধ্যমে টাইট জাংশন শক্তিশালী করে, ফলে সার্বিকভাবে প্রাচীর আরও ঘন ও অভেদ্য হয়ে ওঠে।'
        ),
      },
      {
        question: l(
          'Why does microbial cleavage of dietary choline and L-carnitine by CutC/D lyases accelerate coronary atherosclerosis and arterial thrombosis?',
          'ব্যাকটেরিয়াল CutC/D এনজাইম খাদ্যের কোলিন ও কার্নিটিন ভেঙে দিলে কীভাবে তা হৃদরোগ ও রক্ত জমাট বাঁধার ঝুঁকি বাড়ায়?'
        ),
        answer: l(
          'Anaerobic microbes expressing CutC/D lyases cleave the C-N bond in choline, releasing trimethylamine (TMA) gas. Absorbed TMA is oxidized in hepatocytes by FMO3 into Trimethylamine N-Oxide (TMAO). Circulating TMAO directly upregulates scavenger receptors CD36 and SR-A1 on arterial macrophages, promoting oxidized LDL uptake and foam cell formation. Concurrently, TMAO alters stimulus-dependent calcium signaling in platelets, inducing platelet hyper-reactivity that accelerates arterial thrombus formation and myocardial infarction.',
          'ব্যাকটেরিয়ার CutC/D এনজাইম কোলিন ভেঙে TMA তৈরি করে যা যকৃতে জারিত হয়ে বিষাক্ত TMAO গ্যাসে পরিণত হয়। রক্তে ভাসমান TMAO ম্যাক্রোফেজের CD36 রিসেপ্টর বাড়িয়ে ধমনিতে চর্বি জমায় এবং প্লাক তৈরি করে। একই সাথে এটি অণুচক্রিকার সংবেদনশীলতা বাড়িয়ে আকস্মিক রক্ত জমাট বাঁধায়, যা হার্ট অ্যাটাকের ঝুঁকি বহুগুণ বৃদ্ধি করে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'gut-microbiome-metabolic-crosstalk',
    title: l(
      'Functional Metagenomics: Host-Microbiome Metabolic Crosstalk',
      'কার্যকরী মেটাজেনোমিক্স: দেহ ও অণুজীবের রাসায়নিক মিথস্ক্রিয়া'
    ),
    description: l(
      'Interactive pathway of microbial metabolic biotransformations: bile acid deconjugation, tryptophan-AhR signaling, and choline-CutC-TMAO atherogenesis.',
      'অণুজীবীয় বিপাকের ইন্টারঅ্যাক্টিভ চিত্র: পিত্ত অম্লের রূপান্তর, ট্রিপটোফ্যান-AhR সংকেত এবং কোলিন থেকে রক্তনালির ক্ষতিকর TMAO তৈরি।'
    ),
    disclaimer: l(
      'Educational metagenomic pathway simulation; cardiovascular risk management requires comprehensive clinical evaluation.',
      'মেটাজেনোমিক বিপাকীয় পথের শিক্ষামূলক সিমুলেশন; হৃদরোগ নির্ণয়ে সার্বিক স্বাস্থ্য পরীক্ষা অপরিহার্য।'
    ),
    svgType: 'microbiome-crosstalk',
    items: [
      {
        id: 'node-taxonomic-architecture',
        label: l('Taxonomic Architecture & Alpha Diversity', 'শ্রেণিবিন্যাস কাঠামো ও আলফা বৈচিত্র্য'),
        description: l(
          'Trillions of anaerobic bacteria dominated by Bacillota and Bacteroidota maintain high alpha diversity, conferring metabolic redundancy.',
          'Bacillota ও Bacteroidota পরিচালিত ট্রিলিয়ন ট্রিলিয়ন ব্যাকটেরিয়া উচ্চমাত্রার আলফা বৈচিত্র্য রক্ষা করে পরিপাক স্থিতিশীলতা প্রদান করে।'
        ),
        details: l(
          'The gut microbiome encodes >3.3 million bacterial genes. High alpha diversity (Shannon index, Chao1) reflects balanced richness and evenness, driving metabolic stability and resistance against pathobionts.',
          'অন্ত্রের মেটাজেনোমে ৩.৩ মিলিয়নেরও বেশি জিন রয়েছে। উচ্চ আলফা ডাইভার্সিটি সুষম প্রজাতি বণ্টন নিশ্চিত করে রোগজীবাণুর বিরুদ্ধে প্রাকৃতিক প্রতিরোধ তৈরি করে।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-bsh-tgr5',
        label: l('Bile Salt Hydrolase & TGR5/GLP-1 Signaling', 'BSH এনজাইম ও TGR5/GLP-1 সংকেত'),
        description: l(
          'Bacterial BSH deconjugates bile acids; 7a-dehydroxylation yields secondary DCA/LCA, activating TGR5 to stimulate GLP-1 secretion.',
          'ব্যাকটেরিয়াল BSH এনজাইম পিত্ত অম্ল মুক্ত করে সেকেন্ডারি DCA/LCA তৈরি করে, যা TGR5 গ্রাহকের মাধ্যমে GLP-1 ক্ষরণ ঘটায়।'
        ),
        details: l(
          'Microbial BSH uncouples glycine/taurine. Then 7a-dehydroxylating bacteria (Clostridium scindens) generate DCA and LCA, which bind membrane receptor TGR5 on L-cells to stimulate GLP-1 exocytosis.',
          'ব্যাকটেরিয়ার BSH ও ৭-আলফা ডিহাইড্রোক্সিলেশন বিক্রিয়ায় উৎপন্ন সেকেন্ডারি পিত্ত অম্ল অন্ত্রের L-কোষের TGR5 গ্রাহকে আবদ্ধ হয়ে ইনসুলিন সহায়ক GLP-1 হরমোন ক্ষরণ বাড়ায়।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-tryptophan-ahr',
        label: l('Tryptophan Indoles & AhR IL-22 Activation', 'ট্রিপটোফ্যান ইনডোল ও AhR IL-22 সক্রিয়করণ'),
        description: l(
          'Bacterial tryptophanase converts dietary tryptophan into indoles (IPA, IAld), which bind AhR in ILC3 cells to drive protective IL-22 release.',
          'ব্যাকটেরিয়া খাদ্যের ট্রিপটোফ্যান ভেঙে ইনডোল তৈরি করে, যা AhR গ্রাহকে আবদ্ধ হয়ে IL-22 নিঃসরণ বাড়ায় এবং অন্ত্রের কোষ নিরাময় করে।'
        ),
        details: l(
          'Commensal species metabolize unabsorbed tryptophan into Indole-3-Propionic Acid (IPA) and Indole-3-Aldehyde. These bind the Aryl Hydrocarbon Receptor (AhR), driving transcription of IL-22, which induces REG3gamma and tight junctions.',
          'অণুজীবজাত ইনডোল যৌগসমূহ AhR গ্রাহকের সাথে যুক্ত হয়ে ইন্টারলিউকিন-২২ (IL-22) ক্ষরণ ঘটায়, যা অন্ত্রের টাইট জাংশন প্রোটিন বৃদ্ধি করে দেয়াল অভেদ্য রাখে।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-cutc-tmao',
        label: l('CutC Choline Lyase & Hepatic FMO3 TMAO', 'CutC কোলিন লাইয়েজ ও যকৃতের FMO3 TMAO'),
        description: l(
          'Microbial CutC/D cleaves dietary choline into Trimethylamine (TMA). Hepatic FMO3 oxidizes TMA to circulating TMAO, driving macrophage CD36 foam cell formation and thrombosis.',
          'ব্যাকটেরিয়াল CutC/D cleaves dietary choline into Trimethylamine (TMA). Hepatic FMO3 oxidizes TMA to circulating TMAO, driving macrophage CD36 foam cell formation and thrombosis.',
        ),
        details: l(
          'CutC/D cleaves dietary choline into Trimethylamine (TMA). Hepatic FMO3 oxidizes TMA to circulating TMAO, driving macrophage CD36 foam cell formation and thrombosis.',
          'ব্যাকটেরিয়ার CutC/D cleaves dietary choline into Trimethylamine (TMA). যকৃতের FMO3 oxidizes TMA to circulating TMAO, causing coronary foam cell buildup and platelet thrombosis.',
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
          heading: l('1. The Human Holobiont: Microbial Census & Dominant Phyla', '১. মানব হোলোবায়োন্ট: অণুজীব জনসংখ্যা ও প্রধান পর্বসমূহ'),
          paragraphs: [
            l(
              'The human body is an ecological super-organism known as a holobiont [1]. A reference adult contains ~3.0 x 10^13 human somatic cells and ~3.8 x 10^13 bacterial cells, creating an approximate 1:1 numerical balance [1]. However, while humans encode ~21,000 genes, the collective gut microbiome encodes over 3.3 million genes—a 150-fold expansion in functional genetic capacity [1, 2].',
              'মানবদেহ ইউক্যারিওটিক মানব কোষ এবং ট্রিলিয়ন ট্রিলিয়ন মিথোজীবী অণুজীবের সমন্বয়ে গঠিত একটি হোলোবায়োন্ট জীবসত্তা [১]। একজন প্রাপ্তবয়স্ক মানুষের দেহে প্রায় ৩.০ x ১০^১৩ মানব কোষ এবং প্রায় ৩.৮ x ১০^১৩ ব্যাকটেরিয়াল কোষ ১:১ অনুপাতে বাস করে [১]। তবে মানুষের জিন মাত্র ২১,০০০ হলেও অণুজীবসমগ্রের ৩.৩ মিলিয়নেরও বেশি জিন রয়েছে যা মানুষের চেয়ে ১৫০ গুণ বেশি [১, ২]।'
            ),
            l(
              'Over 99% of these microbes inhabit the large intestine [1]. A healthy adult microbiome is dominated by four phyla: Bacillota (60-65%), Bacteroidota (25-30%), Actinomycetota (Bifidobacterium, 3-5%), and Verrucomicrobiota (Akkermansia muciniphila, 1-3%) [1, 2].',
              'এই অণুজীবদের ৯৯%-এরও বেশি বৃহদন্ত্রে থাকে [১]। প্রধান চারটি পর্ব হলো: Bacillota (৬০-৬৫%), Bacteroidota (২৫-৩০%), Actinomycetota (৩-৫%) এবং Verrucomicrobiota (১-৩%) [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Ecological Biodiversity: Alpha vs Beta Diversity', '২. বাস্তুতাত্ত্বিক জীববৈচিত্র্য: আলফা বনাম বিটা বৈচিত্র্য'),
          paragraphs: [
            l(
              'Alpha diversity evaluates biodiversity within a single host sample, reflecting both species richness (Chao1 index) and evenness of distribution (Shannon index) [1, 2]. High alpha diversity protects against opportunistic infections and metabolic disruption [2].',
              'আলফা ডাইভার্সিটি হলো একজন একক ব্যক্তির অন্ত্রের অভ্যন্তরে অণুজীবের প্রজাতির সংখ্যা (রিচনেস) ও জনসংখ্যার সুষম বণ্টনের (ইভেননেস) পরিমাপ [১, ২]। উচ্চমাত্রার আলফা বৈচিত্র্য রোগজীবাণু থেকে অন্ত্রকে সুরক্ষিত রাখে [২]।'
            ),
            l(
              'Beta diversity measures dissimilarity between different individuals or dietary groups using distance metrics like Bray-Curtis and UniFrac [2]. Long-term diets segregate into distinct enterotypes: Bacteroides-dominant in animal-based Western diets vs Prevotella-dominant in plant-rich fiber diets [2].',
              'বিটা ডাইভার্সিটি হলো বিভিন্ন ব্যক্তি বা খাদ্যাভ্যাসের গোষ্ঠীর মধ্যকার পার্থক্যের পরিমাপ [২]। খাদ্যের ওপর ভিত্তি করে দুটি প্রধান এন্টারোটাইপ দেখা যায়: প্রাণিজ চর্বি সমৃদ্ধ খাবারে ব্যাকটেরয়ডিজ প্রধান এবং উদ্ভিজ্জ আঁশযুক্ত খাবারে প্রেভোটেলা প্রধান [২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Bile Acid Deconjugation & Secondary Bile Acid Signaling', '৩. পিত্ত অম্লের রূপান্তর ও সেকেন্ডারি পিত্ত অম্লের হরমোনীয় সংকেত'),
          paragraphs: [
            l(
              'Hepatocytes synthesize primary bile acids (cholic and chenodeoxycholic acids) conjugated to glycine or taurine [3]. Microbial Bile Salt Hydrolases (BSH) cleave these conjugates [3]. Then 7alpha-dehydroxylating bacteria generate secondary bile acids: Deoxycholic Acid (DCA) and Lithocholic Acid (LCA) [3].',
              'যকৃত প্রাথমিক পিত্ত অম্ল (কোলিক ও চেনোডিওক্সিকোলিক অ্যাসিড) তৈরি করে পিত্তরসে ক্ষরণ করে [৩]। ব্যাকটেরিয়াল BSH এনজাইম এদের মুক্ত করে এবং ৭-আলফা ডিহাইড্রোক্সিলেশনের মাধ্যমে সেকেন্ডারি পিত্ত অম্ল (DCA ও LCA) তৈরি করে [৩]।'
            ),
            l(
              'Secondary bile acids bind G-protein receptor TGR5 on intestinal L-cells to stimulate Glucagon-Like Peptide-1 (GLP-1) exocytosis, regulating insulin secretion and metabolic homeostasis [2, 3].',
              'এই সেকেন্ডারি পিত্ত অম্লগুলো অন্ত্রের L-কোষের TGR5 রিসেপ্টরে আবদ্ধ হয়ে GLP-1 হরমোন ক্ষরণ বাড়ায় যা রক্তে গ্লুকোজ ও ইনসুলিন সংবেদনশীলতা রক্ষা করে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Tryptophan Indoles vs The Atherogenic TMAO Cascade', '৪. ট্রিপটোফ্যান ইনডোল বনাম ক্ষতিকর TMAO অক্ষ'),
          paragraphs: [
            l(
              'Microbial breakdown of dietary tryptophan produces Indole-3-Propionic Acid (IPA) and other indoles that bind host Aryl Hydrocarbon Receptors (AhR), driving IL-22 release and epithelial wound healing [2, 5].',
              'খাদ্যের ট্রিপটোফ্যান ভেঙে ব্যাকটেরিয়া ইনডোল যৌগ (IPA) তৈরি করে যা AhR গ্রাহক সক্রিয় করে IL-22 ক্ষরণ ঘটায় এবং অন্ত্রের কোষ নিরাময় করে [২, ৫]।'
            ),
            l(
              'Conversely, microbial CutC/D lyases cleave choline and carnitine in red meats into Trimethylamine (TMA) [4]. Hepatic FMO3 oxidizes TMA into Trimethylamine N-Oxide (TMAO), which accelerates macrophage foam cell formation and platelet hyper-reactivity, elevating heart attack risk [2, 4].',
              'বিপরীতভাবে, লাল মাংস ও ডিমের কোলিন ভেঙে ব্যাকটেরিয়াল CutC এনজাইম TMA তৈরি করে যা যকৃতে জারিত হয়ে ক্ষতিকর TMAO তৈরি করে ধমনিতে প্লাক সৃষ্টি করে হার্ট অ্যাটাকের ঝুঁকি বাড়ায় [২, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Clinical Metabolomics: TMAO & Microbial Biomarkers', '৫. ক্লিনিক্যাল মেটাবোলোমিক্স: TMAO ও অণুজীব বায়োমার্কার'),
          paragraphs: [
            l(
              'Plasma TMAO (>6.2 umol/L) is an established independent biomarker of major adverse cardiac events [4]. A Mediterranean plant-rich diet provides 3,3-dimethyl-1-butanol (DMB), which inhibits bacterial CutC lyases, rapidly reducing TMAO levels [2, 4].',
              'রক্তে TMAO মাত্রা বৃদ্ধি হৃদরোগের একটি স্বীকৃত পূর্বাভাসকারী নির্দেশক [৪]। উদ্ভিজ্জ খাদ্য ও অলিভ অয়েলের DMB উপাদান ব্যাকটেরিয়াল CutC এনজাইম দমন করে রক্তে TMAO কমিয়ে দেয় [২, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Takeaways', '৬. মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'The human microbiome provides >150-fold more functional genes than the host genome in a 1:1 cell census [1]. Alpha diversity reflects within-sample resilience; Beta diversity segregates dietary enterotypes [2]. Bacterial BSH and 7a-dehydroxylation generate TGR5 agonists that stimulate GLP-1 [3]. Protective tryptophan indoles promote IL-22 mucosal repair, while microbial choline-CutC cleavage drives atherogenic TMAO [4, 5].',
              'অন্ত্রের অণুজীবসমগ্র মানুষের কোষের সমান অনুপাতে বাস করে মানুষের চেয়ে ১৫০ গুণ বেশি জিনগত শক্তি প্রদান করে [১]। আলফা বৈচিত্র্য ব্যক্তির অভ্যন্তরীণ শক্তি এবং বিটা বৈচিত্র্য খাদ্যাভ্যাসের পার্থক্য নির্দেশ করে [২]। পিত্ত অম্লের সেকেন্ডারি রূপান্তর TGR5 রিসেপ্টরের মাধ্যমে GLP-1 ক্ষরণ বাড়ায় [৩]। ট্রিপটোফ্যান ইনডোল অন্ত্রের প্রাচীর মেরামত করে, কিন্তু অতিরিক্ত মাংসের কোলিন হৃদরোগের কারণ TMAO তৈরি করে [৪, ৫]।'
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
          heading: l('1. Quantitative Census & Polysaccharide Utilization Loci', '১. পরিমাণগত শুমারি ও পলিস্যাকারাইড ব্যবহারিক জিন'),
          paragraphs: [
            l(
              'Metagenomic cataloging reveals that Bacteroidota possess extensive Polysaccharide Utilization Loci (PULs) encoding carbohydrate-active enzymes (CAZymes) that degrade plant glycans inaccessible to human enzymes [1, 2].',
              'মেটাজেনোমিক্সে দেখা যায় ব্যাকটেরয়ডিজ পর্বে প্রচুর PUL জিন রয়েছে যা জটিল উদ্ভিজ্জ আঁশ ভাঙতে পারদর্শী এনজাইম (CAZymes) তৈরি করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Alpha Diversity Estimators: Chao1, Shannon & Simpson', '২. আলফা বৈচিত্র্যের গাণিতিক পরিমাপকসমূহ'),
          paragraphs: [
            l(
              'The Chao1 metric calculates non-parametric asymptotic species richness based on singletons and doubletons. The Shannon index quantifies entropy, weighting both species numbers and equitable distribution [1, 2].',
              'Chao1 সূচক মোট প্রজাতির সংখ্যা হিসাব করে, আর শ্যানন সূচক প্রজাতির সংখ্যা ও জনসংখ্যার সুষম বণ্টন উভয়কে বিবেচনা করে সামগ্রিক বৈচিত্র্য নিরূপণ করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. The bai Operon and Nuclear FXR Feedback', '৩. bai অপারন জিন ও নিউক্লিয়ার FXR ফিডব্যাক লুপ'),
          paragraphs: [
            l(
              'The multi-step 7a-dehydroxylation pathway is encoded by the bai operon in Clostridium scindens. Secondary bile acids act as ligands for nuclear FXR, inducing ileal FGF19 secretion, which travels through portal blood to repress hepatic CYP7A1 rate-limiting bile acid synthesis [2, 3].',
              'Clostridium scindens এর bai অপারন জিন পিত্ত অম্লের রূপান্তর ঘটায়। উৎপন্ন যৌগ নিউক্লিয়ার FXR গ্রাহকে যুক্ত হয়ে FGF19 তৈরি করে যা যকৃতে নতুন পিত্ত তৈরি নিয়ন্ত্রণ করে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Enzymology of Choline TMA-Lyase (CutC/CutD)', '৪. কোলিন TMA-লাইয়েজ (CutC/D) এর এনজাইমীয় রূপ'),
          paragraphs: [
            l(
              'CutC is a glycyl radical enzyme activated by the S-adenosylmethionine (SAM)-dependent radical activase CutD [4]. Anaerobic cleavage of the C-N bond in choline liberates volatile trimethylamine (TMA), which is converted to TMAO by hepatic FMO3 [2, 4].',
              'CutC হলো একটি গ্লাইসিল র্যাডিকেল এনজাইম যা খাদ্যের কোলিনের C-N বন্ধন ভেঙে TMA গ্যাস তৈরি করে, যা পরে যকৃতের FMO3 দিয়ে জারিত হয়ে ক্ষতিকর TMAO তে রূপ নেয় [২, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Metagenomic Profiling in Metabolic Diseases', '৫. বিপাকীয় রোগে মেটাজেনোমিক প্রোফাইলিং'),
          paragraphs: [
            l(
              'Depletion of butyrate producers (Faecalibacterium prausnitzii) and mucin-dwelling Akkermansia muciniphila correlates with visceral adiposity and insulin resistance. Supplementing fiber substrates restores mucosal thickness and metabolic tone [2, 5].',
              'Faecalibacterium ও Akkermansia কমে গেলে পেটে চর্বি ও ইনসুলিন প্রতিরোধ্যতা বাড়ে। আঁশযুক্ত খাদ্য গ্রহণ এদের সংখ্যা ফিরিয়ে এনে প্রাচীর সুস্থ রাখে [২, ৫]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Summary', '৬. প্রাতিষ্ঠানিক সারাংশ'),
          paragraphs: [
            l(
              'The gut microbiome functions as an endocrine organ, transforming dietary substrates into receptor-active ligands (bile acids, indoles, TMAO) that calibrate systemic human metabolism [2, 3, 4].',
              'অন্ত্রের অণুজীবসমগ্র একটি হরমোন গ্রন্থির মতো কাজ করে খাদ্যের উপাদানকে সংকেতবাহী যৌগে রূপান্তরিত করে মানবদেহের সার্বিক বিপাক পরিচালনা করে [২, ৩, ৪]।'
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
          heading: l('1. Metagenomic Assembly and Single-Cell Sequencing', '১. মেটাজেনোমিক সমাবেশ ও একক-কোষ সিকোয়েন্সিং'),
          paragraphs: [
            l(
              'Shotgun metagenomic deep sequencing circumvents PCR amplification bias, assembling Metagenome-Assembled Genomes (MAGs) to identify previously unculturable candidate phyla (Candidate Phyla Radiation, CPR) and delineate horizontal gene transfer [1, 2].',
              'শটগান মেটাজেনোমিক্স গবেষণাগারে চাষ অযোগ্য দুর্লভ অণুজীবদের জিনোম সফলভাবে শনাক্ত করে অণুজীবের বিবর্তনীয় বংশগতি উন্মোচন করছে [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. High-Dimensional Beta Diversity Embeddings: UniFrac Metrics', '২. ইউনিফ্র্যাক ম্যাট্রিক্স ও বহুমুখী বিটা ডাইভার্সিটি'),
          paragraphs: [
            l(
              'Unweighted UniFrac measures qualitative presence/absence differences along phylogenetic tree branch lengths, whereas Weighted UniFrac accounts for relative taxon abundances [2]. Dimensionality reduction with t-SNE or UMAP visualizes clustering across cohorts [2].',
              'ইউনিফ্র্যাক দূরত্ব ব্যাকটেরিয়ার ফাইলোজেনেটিক গাছের শাখার দৈর্ঘ্যের ওপর ভিত্তি করে বিভিন্ন জনগোষ্ঠীর বাস্তুতাত্ত্বিক পার্থক্য অত্যন্ত নিখুঁতভাবে চিত্রায়িত করে [২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Electrophysiology of Enteroendocrine TGR5 and GLP-1 Exocytosis', '৩. L-কোষের TGR5 রিসেপ্টর ও GLP-1 নিঃসরণের তড়িৎ-শারীরবৃত্ত'),
          paragraphs: [
            l(
              'TGR5 couples to G-alpha-s, stimulating adenylate cyclase to elevate intracellular cAMP [3]. cAMP-dependent Epac2 and protein kinase A phosphorylate ATP-sensitive potassium channels (KATP), causing membrane depolarization, calcium influx via Cav channels, and vesicular GLP-1 exocytosis [2, 3].',
              'TGR5 সক্রিয় হলে কোষে cAMP সংকেত বৃদ্ধি পায়, যা মেমব্রেন ডিপোলারাইজেশনের মাধ্যমে ক্যালসিয়াম প্রবেশ করিয়ে ইনসুলিন সহায়ক GLP-1 হরমোন নিঃসরণ ঘটায় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Molecular Mechanisms of TMAO in Atherosclerosis and Thrombosis', '৪. অ্যাথেরোস্ক্লেরোসিস ও রক্ত জমাট বাঁধায় TMAO-এর আণবিক ভূমিকা'),
          paragraphs: [
            l(
              'Circulating TMAO stimulates platelet intracellular IP3-mediated calcium release upon low-dose thrombin or ADP stimulation, accelerating platelet adhesion and arterial occlusive thrombus formation in myocardial infarction [4].',
              'রক্তে TMAO অণুচক্রিকার ভেতর ক্যালসিয়াম নিঃসরণ বাড়িয়ে দেয়, ফলে খুব সামান্য উসকানিতেই রক্ত জমাট বেঁধে হার্ট অ্যাটাকের প্রাণঘাতী প্লাক তৈরি হয় [৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Therapeutic Horizons: CutC Inhibitors & Microbiome Engraftment', '৫. চিকিৎসাগত গবেষণা: CutC ইনহিবিটর ও মাইক্রোবায়োম প্রতিস্থাপন'),
          paragraphs: [
            l(
              'Structural analogs like fluoromethylcholine irreversibly inactivate bacterial CutC without bacterial cell lysis, abolishing TMAO production and reducing aortic plaque burden in animal models [4]. Fecal microbiota transplantation (FMT) and defined consortia represent frontiers in dysbiosis restoration [2].',
              'আধুনিক গবেষণায় এমন ওষুধ তৈরি হয়েছে যা ব্যাকটেরিয়াকে না মেরেই তার CutC এনজাইম নিষ্ক্রিয় করে রক্তে TMAO শূন্যে নামিয়ে এনে হৃদরোগের ঝুঁকি কমাতে পারে [৪]। ফিকাল ট্রান্সপ্লান্টেশনও এর সফল দৃষ্টান্ত [২]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Synthesis', '৬. অনুবাদমূলক সংশ্লেষ'),
          paragraphs: [
            l(
              'Precision nutrition must integrate the metabolic outputs of the gut microbiome [2]. Selectively manipulating microbial enzyme pathways preserves mucosal integrity while mitigating cardiometabolic disease risk [3, 4].',
              'সুনির্দিষ্ট পুষ্টিবিজ্ঞানে অণুজীবের তৈরি উপাদানগুলোর সমন্বয় অপরিহার্য [২]। ব্যাকটেরিয়াল এনজাইমগুলো নিয়ন্ত্রণ করে একদিকে অন্ত্রের স্বাস্থ্য রক্ষা এবং অন্যদিকে হৃদরোগের ঝুঁকি কমানো সম্ভব [৩, ৪]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential microbial metabolic pathways: Taxonomic diversity, secondary bile acid synthesis, tryptophan-AhR signaling, and choline-CutC-TMAO atherogenesis.',
      'অণুজীবের বিপাকীয় ধারাবাহিকতা: শ্রেণিবিন্যাস বৈচিত্র্য, সেকেন্ডারি পিত্ত অম্লের রূপান্তর, ট্রিপটোফ্যান-AhR সংকেত এবং কোলিন থেকে রক্তনালির ক্ষতিকর TMAO তৈরি।'
    ),
    steps: [
      l(
        'Step 1: Trillions of anaerobic bacteria dominated by Bacillota and Bacteroidota maintain high alpha diversity, providing metabolic resilience.',
        'ধাপ ১: Bacillota ও Bacteroidota পরিচালিত ট্রিলিয়ন ট্রিলিয়ন ব্যাকটেরিয়া উচ্চমাত্রার আলফা বৈচিত্র্য রক্ষা করে পরিপাক স্থিতিশীলতা প্রদান করে।'
      ),
      l(
        'Step 2: Bacterial BSH deconjugates bile acids; 7a-dehydroxylating species produce secondary DCA/LCA, which activate TGR5 on L-cells to stimulate GLP-1 secretion.',
        'ধাপ ২: ব্যাকটেরিয়াল BSH এনজাইম পিত্ত অম্ল মুক্ত করে সেকেন্ডারি DCA/LCA তৈরি করে, যা L-কোষের TGR5 গ্রাহককে সক্রিয় করে ইনসুলিন সহায়ক GLP-1 হরমোন ক্ষরণ ঘটায়।'
      ),
      l(
        'Step 3: Commensals metabolize dietary tryptophan into indoles (IPA, IAld), which bind Aryl Hydrocarbon Receptors (AhR) in ILC3 cells to trigger protective IL-22 release.',
        'ধাপ ৩: ব্যাকটেরিয়া খাদ্যের ট্রিপটোফ্যান ভেঙে ইনডোল যৌগ তৈরি করে, যা AhR গ্রাহকে আবদ্ধ হয়ে IL-22 নিঃসরণ বাড়ায় এবং অন্ত্রের কোষ নিরাময় ও প্রতিরক্ষা জোরদার করে।'
      ),
      l(
        'Step 4: Microbial CutC/D cleaves dietary choline into Trimethylamine (TMA). Hepatic FMO3 oxidizes TMA to circulating TMAO, driving macrophage CD36 foam cell formation and thrombosis.',
        'ধাপ ৪: ব্যাকটেরিয়াল CutC/D cleaves dietary choline into Trimethylamine (TMA). Hepatic FMO3 oxidizes TMA to circulating TMAO, driving macrophage CD36 foam cell formation and thrombosis.'
      ),
    ],
  },
  assessment: {
    question: l(
      'How does microbial 7alpha-dehydroxylation of primary bile acids specifically influence host metabolic homeostasis?',
      'প্রাথমিক পিত্ত অম্লের ব্যাকটেরিয়াল ৭-আলফা ডিহাইড্রোক্সিলেশন মানুষের বিপাকীয় ভারসাম্যে কীভাবে প্রভাব ফেলে?'
    ),
    options: [
      l(
        'It generates secondary bile acids (DCA and LCA) that bind membrane receptor TGR5 on enteroendocrine L-cells to stimulate GLP-1 secretion.',
        'এটি সেকেন্ডারি পিত্ত অম্ল (DCA ও LCA) তৈরি করে যা L-কোষের TGR5 রিসেপ্টরে আবদ্ধ হয়ে উপকারী GLP-1 হরমোন ক্ষরণ ঘটায়।'
      ),
      l(
        'It degrades cholesterol into carbon monoxide to prevent intestinal foam cell nucleation.',
        'এটি কোলেস্টেরল ভেঙে কার্বন মনোক্সাইডে রূপান্তর করে অন্ত্রে ফোম সেল তৈরি বন্ধ করে।'
      ),
      l(
        'It phosphorylates intestinal alkaline phosphatase to accelerate apical lipid emulsification.',
        'এটি অ্যালকালাইন ফসফাটেজ সক্রিয় করে শীর্ষস্থ চর্বি ইমালসিফিকেশন বহুগুণ বাড়িয়ে দেয়।'
      ),
      l(
        'It blocks hepatic bile salt export pumps (BSEP), terminating all enterohepatic bile recycling.',
        'এটি যকৃতের BSEP পাম্প বন্ধ করে দিয়ে সব ধরনের পিত্ত পুনর্ব্যবহার চিরতরে স্তব্ধ করে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Microbial 7a-dehydroxylating bacteria (e.g., Clostridium scindens) convert cholic and chenodeoxycholic acids into hydrophobic deoxycholic (DCA) and lithocholic (LCA) acids. These secondary bile acids act as potent endogenous agonists for the G-protein-coupled receptor TGR5, stimulating GLP-1 secretion from intestinal L-cells to improve glucose tolerance.',
      'ব্যাকটেরিয়ার ৭-আলফা ডিহাইড্রোক্সিলেশন বিক্রিয়ার ফলে উৎপন্ন সেকেন্ডারি পিত্ত অম্লসমূহ (DCA ও LCA) অন্ত্রের L-কোষের TGR5 রিসেপ্টরে যুক্ত হয় এবং রক্তে গ্লুকোজ নিয়ন্ত্রণকারী হরমোন GLP-1 নিঃসরণ ত্বরান্বিত করে।'
    ),
  },
}
