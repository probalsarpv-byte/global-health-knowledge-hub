import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const circadianRefs = [
  {
    id: 'takahashi-circadian-clock-nat-rev-genet-2017',
    authors: 'Joseph S. Takahashi',
    title: 'Transcriptional architecture of the mammalian circadian clock. Nature Reviews Genetics, 18(3):164-179',
    organization: 'Nature Publishing Group',
    year: 2017,
    url: 'https://pubmed.ncbi.nlm.nih.gov/27990019/',
  },
  {
    id: 'lehninger-biochem-8e-ch23',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 23: Hormonal Regulation and Integration of Mammalian Metabolism',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'bass-circadian-metabolism-science-2010',
    authors: 'Joseph Bass, Joseph S. Takahashi',
    title: 'Circadian integration of metabolism and energetics. Science, 330(6009):1349-1354',
    organization: 'AAAS',
    year: 2010,
    url: 'https://pubmed.ncbi.nlm.nih.gov/21127246/',
  },
  {
    id: 'panda-time-restricted-eating-science-2016',
    authors: 'Satchidananda Panda',
    title: 'Circadian physiology of metabolism. Science, 354(6315):1008-1015',
    organization: 'AAAS',
    year: 2016,
    url: 'https://pubmed.ncbi.nlm.nih.gov/27885007/',
  },
  {
    id: 'nakahata-sirt1-bmal1-cell-2008',
    authors: 'Yasukazu Nakahata, Milota Kaluzova, Marina Grimaldi, et al.',
    title: 'The NAD+-dependent deacetylase SIRT1 modulates CLOCK-mediated chromatin remodeling and circadian control. Cell, 134(2):329-340',
    organization: 'Elsevier / Cell Press',
    year: 2008,
    url: 'https://pubmed.ncbi.nlm.nih.gov/18662547/',
  },
]

const circadian3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Circadian Metabolism & Nutrient Timing',
    '৩ডি বহু-অঙ্গীয় দিবা-রাত্রি বিপাক ও পুষ্টির সময়জ্ঞানের মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: explore the central light-entrained pacemaker in the suprachiasmatic nucleus (SCN) and its coordination of peripheral food-entrainable clocks across the liver, pancreatic islets, and adipose tissue.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: পর্যবেক্ষণ করুন কীভাবে মস্তিষ্কের সুপ্রাকায়াসম্যাটিক নিউক্লিয়াস (SCN) এবং খাদ্য-সংবেদনশীল প্রান্তীয় ঘড়িগুলো যকৃৎ, অগ্ন্যাশয় ও চর্বিকলার দিবা-রাত্রি বিপাক নিয়ন্ত্রণ করে।'
  ),
  description: l(
    'Virtually every metabolic pathway in human physiology is under circadian control: insulin sensitivity, hepatic gluconeogenesis, lipid synthesis, bile acid excretion, and mitochondrial respiration oscillate with an autonomous ~24-hour rhythm. Disruption of this temporal architecture through nocturnal feeding or shift work causes circadian misalignment and metabolic disease.',
    'মানবদেহের প্রায় প্রতিটি বিপাকীয় পথ দিবা-রাত্রি ছন্দের অধীনে চলে: ইনসুলিন সংবেদনশীলতা, যকৃতের গ্লুকোজ তৈরি, চর্বি সংশ্লেষণ এবং মাইটোকন্ড্রিয়াল শ্বসন প্রায় ২৪ ঘণ্টার ছন্দে ওঠানামা করে। রাতের খাবার বা অনিয়মিত ঘুমের ফলে এই ছন্দ ভেঙে গিয়ে ডায়াবেটিস ও মেটাবলিক সিন্ড্রোম দেখা দেয়।'
  ),
  organs: [
    {
      id: 'organ-hypothalamus-scn',
      name: l('Hypothalamus: Suprachiasmatic Nucleus (Master Clock)', 'হাইপোথ্যালামাস: সুপ্রাকায়াসম্যাটিক নিউক্লিয়াস (প্রধান ঘড়ি)'),
      latinName: 'Nucleus Suprachiasmaticus Hypothalami',
      system: l('Central Nervous & Neuroendocrine System', 'কেন্দ্রীয় স্নায়ু ও নিউরোএন্ডোক্রাইন ব্যবস্থা'),
      cavity: l('Cranial Cavity (Diencephalon Floor)', 'করোটিকা গহ্বর (ডায়েনসেফালন মেঝে)'),
      position3D: { x: 0, y: 275, z: 0 },
      color: '#3b82f6',
      highlightColor: '#60a5fa',
      shapeType: 'brain',
      description: l(
        'The master circadian pacemaker of the human body, containing ~20,000 neurons directly above the optic chiasm. Entrained primarily by environmental blue light (460–480 nm) sensed by melanopsin-expressing retinal ganglion cells (ipRGCs) via the retinohypothalamic tract, the SCN synchronizes autonomic tone, core body temperature, cortisol awakening responses, and nocturnal pineal melatonin suppression.',
        'মানবদেহের প্রধান দিবা-রাত্রি ঘড়ি যা অপটিক কায়াজমার ওপরে প্রায় ২০,০০০ নিউরন ধারণ করে। চোখের বিশেষ মেলানপসিন কোষের মাধ্যমে নীল আলো সংবেদন করে SCN স্নায়ুতন্ত্র, শরীরের তাপমাত্রা, সকালের কর্টিসল বৃদ্ধি এবং রাতের মেলাটোনিন হরমোনের নিঃসরণ পরিচালনা করে।'
      ),
      spatialRelations: l(
        'Bilateral paired nuclei located in the anterior hypothalamus, directly adjacent to the third ventricle and superior to the optic chiasm.',
        'অগ্র হাইপোথ্যালামাসের ভেতরে তৃতীয় ভেন্ট্রিকলের পাশে এবং অপটিক কায়াজমার ঠিক ওপরে অবস্থিত।'
      ),
      physiology: l(
        'Maintains cell-autonomous ~24.2-hour firing rhythms, transmitting phase information via sympathetic and parasympathetic projections and neurohumoral signals to peripheral organ clocks.',
        'স্বায়ত্তশাসিত ২৪.২ ঘণ্টার ছন্দ বজায় রেখে এটি স্নায়ু সংকেত ও হরমোনের মাধ্যমে দেহের সমস্ত প্রান্তীয় অঙ্গের ঘড়িগুলোকে একই তালে পরিচালিত করে।'
      ),
      nutritionConnection: l(
        'The SCN is resistant to food cues, remaining entrained almost exclusively to light-dark cycles, creating potential phase conflicts when eating occurs during biological night.',
        'এই কেন্দ্রীয় ঘড়িটি খাবারের সংকেত দ্বারা পরিবর্তিত হয় না বরং আলোর ছন্দে চলে; তাই রাতে খাবার খেলে শরীরের বিভিন্ন অঙ্গের মধ্যে মারাত্মক সংঘাত সৃষ্টি হয়।'
      ),
      clinicalSignificance: l(
        'Chronic light exposure at night (screens, shift work) suppresses melatonin and desynchronizes SCN firing, precipitating sleep fragmentation, immune dysfunction, and cardiovascular risk.',
        'রাতে উজ্জ্বল কৃত্রিম আলো মেলাটোনিন কমিয়ে SCN-এর ছন্দ নষ্ট করে, যার ফলে অনিদ্রা, রোগ প্রতিরোধ ক্ষমতা হ্রাস এবং হৃদরোগের ঝুঁকি তৈরি হয়।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-liver-circadian-metabolism',
      name: l('Liver (Food-Entrained Circadian Clock Hub)', 'যকৃৎ (খাদ্য-সংবেদনশীল দিবা-রাত্রি ঘড়ির কেন্দ্র)'),
      latinName: 'Hepar et Horologium Circadianum',
      system: l('Hepato-Metabolic & Digestive System', 'যকৃৎ-বিপাকীয় ও পরিপাকতন্ত্র'),
      cavity: l('Peritoneal Cavity (Right Hypochondrium)', 'পেরিটোনিয়াল গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 5, y: 185, z: 2 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'The liver contains the most powerful peripheral clock in the body, which is entrained primarily by food intake rather than light. The hepatic molecular clock directs the rhythmic transcription of >15% of all liver genes: gluconeogenic enzymes (G6PC, PCK1) peak before waking; de novo lipogenic enzymes (FASN, ACC) align with daytime feeding; and bile acid synthesis (CYP7A1) oscillates with meal patterns.',
        'দেহের সবচেয়ে শক্তিশালী প্রান্তীয় ঘড়িটি যকৃতে থাকে, যা আলোর বদলে মূলত খাবারের সময়জ্ঞান দ্বারা নিয়ন্ত্রিত হয়। যকৃতের ১৫%-এর বেশি জিন এই ছন্দে চলে: ঘুম থেকে ওঠার আগে গ্লুকোজ তৈরির জিন সক্রিয় হয়; দিনের বেলায় চর্বি তৈরির এনজাইম বাড়ে; এবং খাওয়ার সময় পিত্তরস তৈরির প্রক্রিয়া গতি পায়।'
      ),
      spatialRelations: l(
        'Receives direct portal venous nutrient influx from the gastrointestinal tract, detecting the timing of nutrient absorption directly.',
        'পরিপাকনালী থেকে সরাসরি পুষ্টিসমৃদ্ধ রক্ত গ্রহণ করে খাবারের সময় তাৎক্ষণিকভাবে শনাক্ত করতে পারে।'
      ),
      physiology: l(
        'The hepatic clock drives oscillatory NAMPT expression, creating a 24-hour wave of intracellular NAD+ that cycles SIRT1 deacetylase activity to orchestrate mitochondrial metabolic efficiency.',
        'যকৃতের ঘড়িটি NAMPT এনজাইম নিয়ন্ত্রণ করে কোষে NAD+ ও SIRT1-এর ২৪ ঘণ্টার ঢেউ তৈরি করে, যা মাইটোকন্ড্রিয়ার শক্তি উৎপাদনকে সঠিক সময়ে সর্বোচ্চ রাখে।'
      ),
      nutritionConnection: l(
        'Time-Restricted Eating (TRE) within an 8–10 hour diurnal window aligns hepatic nutrient flux with clock-driven metabolic machinery, preventing hepatic steatosis (MASLD) and hypertriglyceridemia.',
        'দিনের বেলায় ৮–১০ ঘণ্টার মধ্যে খাবার গ্রহণ করলে যকৃতের ঘড়ির সাথে খাবারের নিখুঁত মিল ঘটে, যা ফ্যাটি লিভার ও অতিরিক্ত ট্রাইগ্লিসারাইড প্রতিরোধ করে।'
      ),
      clinicalSignificance: l(
        'Nocturnal eating desynchronizes the hepatic clock from the light-entrained SCN ("internal circadian desynchrony"), triggering hepatic insulin resistance, ectopic fat accumulation, and dyslipidemia.',
        'রাতে দেরি করে খাবার খেলে যকৃতের ঘড়ি মস্তিষ্কের ঘড়ির সাথে বিরোধে জড়িয়ে পড়ে, ফলে লিভারে ইনসুলিন রেজিস্ট্যান্স, ফ্যাটি লিভার ও রক্তে ক্ষতিকর চর্বি বৃদ্ধি পায়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-pancreas-circadian-beta-cells',
      name: l('Pancreas: Beta Cells (Circadian Insulin Secretome)', 'অগ্ন্যাশয়: বিটা কোষ (দিবা-রাত্রি ইনসুলিন ক্ষরণ)'),
      latinName: 'Pancreas et Insulae Pancreaticae',
      system: l('Endocrine Glucoregulatory System', 'অন্তঃক্ষরা গ্লুকোজ-নিয়ন্ত্রণ ব্যবস্থা'),
      cavity: l('Retroperitoneal Space (Epigastrium & Left Hypochondrium)', 'রেট্রোপেরিটোনিয়াল স্থান (এপিগ্যাস্ট্রিয়াম)'),
      position3D: { x: 2, y: 195, z: -1 },
      color: '#10b981',
      highlightColor: '#34d399',
      shapeType: 'pancreas',
      description: l(
        'Pancreatic beta cells possess an autonomous molecular clock that programs maximum glucose-stimulated insulin secretion (GSIS) during daytime active hours, declining sharply at night. Clock proteins rhythmically control the expression of glucokinase, GLUT2, ATP-sensitive K+ channels (K_ATP), and voltage-dependent calcium channels involved in insulin exocytosis.',
        'অগ্ন্যাশয়ের বিটা কোষগুলোর নিজস্ব ঘড়ি দিনের আলোতে সর্বোচ্চ ইনসুলিন ক্ষরণের প্রস্তুতি রাখে এবং রাতে তা নাটকীয়ভাবে কমিয়ে দেয়। ক্লক প্রোটিনগুলো গ্লুকোকাইনেজ, পটাশিয়াম চ্যানেল এবং ক্যালসিয়াম চ্যানেল নিয়ন্ত্রণের মাধ্যমে এই ছন্দ রক্ষা করে।'
      ),
      spatialRelations: l(
        'Located retroperitoneally behind the stomach, perfused directly by the splenic and pancreaticoduodenal arterial arcades.',
        'পাকস্থলীর পেছনে অবস্থিত যা রক্তে গ্লুকোজের ওঠানামা প্রতি মুহূর্তে পর্যবেক্ষণ করে হরমোন ছাড়ে।'
      ),
      physiology: l(
        'Glucose tolerance is physiologically highest in the morning and lowest at biological night; identical carbohydrate meals ingested at 8 PM produce a >50% higher glucose and insulin excursion than at 8 AM.',
        'মানবদেহে গ্লুকোজ হজম করার ক্ষমতা সকালে সর্বোচ্চ এবং রাতে সর্বনিম্ন থাকে; সকালে ও রাতে একই পরিমাণ মিষ্টি খেলে রাতে রক্তের গ্লুকোজ ৫০%-এরও বেশি অনিয়ন্ত্রিত থাকে।'
      ),
      nutritionConnection: l(
        'Front-loading carbohydrate calories into breakfast and lunch aligns carbohydrate digestion with maximal beta-cell secretory capacity, blunting glycemic variability.',
        'সকাল ও দুপুরে বেশি শর্করা খাওয়া অগ্ন্যাশয়ের সর্বোচ্চ ক্ষমতার সাথে খাপ খায়, যা রক্তের গ্লুকোজ নিয়ন্ত্রণে সর্বোত্তম ফলাফল দেয়।'
      ),
      clinicalSignificance: l(
        'Disruption of the beta-cell clock (via Bmal1 knockout or chronic rotating shift work) blunts first-phase insulin secretion, accelerating beta-cell apoptosis and onset of type 2 diabetes.',
        'বিটা কোষের ঘড়ি ক্ষতিগ্রস্ত হলে ইনসুলিন নিঃসরণের প্রথম ধাপ ভেঙে পড়ে, যার ফলে বিটা কোষ দ্রুত ধ্বংস হয়ে ডায়াবেটিস শুরু হয়।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-adipose-circadian-lipolysis',
      name: l('White Adipose Tissue (Circadian Lipolysis & Adipokines)', 'শ্বেত চর্বিকলা (দিবা-রাত্রি চর্বি ভাঙন ও অ্যাডিপোকাইন)'),
      latinName: 'Textus Adiposus et Horologium Circadianum',
      system: l('Endocrine Metabolic Tissue', 'অন্তঃক্ষরা বিপাকীয় কলা'),
      cavity: l('Subcutaneous & Visceral Depots', 'ত্বকের নিচে ও উদর গহ্বর'),
      position3D: { x: 0, y: 160, z: 2 },
      color: '#eab308',
      highlightColor: '#facc15',
      shapeType: 'stomach',
      description: l(
        'Adipocytes harbor an autonomous clock that coordinates 24-hour rhythms of lipolysis, adiponectin secretion, and leptin release. Lipolysis peaks rhythmically during the nocturnal fasting period under the influence of growth hormone and sympathetic innervation, releasing free fatty acids to fuel myocardial and resting muscle oxidative phosphorylation.',
        'চর্বি কোষের অভ্যন্তরীণ ঘড়ি চর্বি ভাঙন, অ্যাডিপোনেকটিন এবং লেপটিন হরমোন নিঃসরণের ২৪ ঘণ্টার ছন্দ পরিচালনা করে। রাতের ঘুমের সময় চর্বি ভেঙে মুক্ত ফ্যাটি অ্যাসিড তৈরি হয় যা হৃদযন্ত্র ও অন্যান্য অঙ্গের শক্তি যোগায়।'
      ),
      spatialRelations: l(
        'Pervades subcutaneous fat depots and surrounds intra-abdominal visceral organs.',
        'ত্বকের নিচে এবং পেটের ভেতরের গুরুত্বপূর্ণ অঙ্গগুলোর চারপাশে পরিবেষ্টিত থাকে।'
      ),
      physiology: l(
        'Clock genes regulate perilipin-1 and hormone-sensitive lipase (HSL) accessibility, gating nocturnal fatty acid mobilization while suppressing inappropriate daytime ectopic lipid spillover.',
        'ক্লক জিনগুলো পেরিলিপিন ও লাইপেজ এনজাইমের নিয়ন্ত্রণ করে রাতে চর্বি ভাঙার সুযোগ দেয় এবং দিনের বেলা অযথা রক্তে চর্বি ছড়ানো বন্ধ রাখে।'
      ),
      nutritionConnection: l(
        'Late-night meals suppress nocturnal lipolysis and elevate daytime free fatty acid spillover into liver and skeletal muscle, driving whole-body insulin resistance.',
        'দেরি করে খেলে রাতের চর্বি পোড়ানো বন্ধ হয়ে যায় এবং যকৃতে অতিরিক্ত চর্বি জমে সারা শরীরে ইনসুলিন রেজিস্ট্যান্স তৈরি হয়।'
      ),
      clinicalSignificance: l(
        'Shift work and circadian misalignment invert adipose leptin and ghrelin rhythms, driving uncontrollable nocturnal hunger, hyperphagia, and visceral adiposity.',
        'অসময়ের ঘুম ও কাজের কারণে ক্ষুধার হরমোন লেপটিন ও ঘ্রেলিনের স্বাভাবিক চক্র ভেঙে যায়, ফলে গভীর রাতে তীব্র ক্ষুধা লেগে দ্রুত স্থূলতা দেখা দেয়।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism32CircadianMetabolismLesson: LessonTopic = {
  id: 'topic.metabolism.circadian-metabolism-nutrient-timing',
  slug: 'circadian-metabolism-nutrient-timing',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '32 · Circadian Metabolism, Molecular Clocks & Nutrient Timing',
    '৩২ · দিবা-রাত্রি বিপাক, আণবিক ঘড়ি ও পুষ্টির সময়জ্ঞান'
  ),
  summary: l(
    'Circadian regulation of human metabolism: cell-autonomous TTFL clock machinery (CLOCK:BMAL1, PER/CRY, REV-ERB/ROR), the master suprachiasmatic nucleus pacemaker versus food-entrained peripheral clocks, 24-hour oscillatory NAMPT/NAD+ salvage driving SIRT1, time-of-day insulin sensitivity and glucose tolerance, and chrononutrition protocols including Time-Restricted Eating (TRE).',
    'মানব বিপাকের দিবা-রাত্রি নিয়ন্ত্রণ: কোষের স্বায়ত্তশাসিত TTFL আণবিক ঘড়ি (CLOCK:BMAL1, PER/CRY, REV-ERB/ROR), মস্তিষ্কের SCN ঘড়ি বনাম খাদ্য-নিয়ন্ত্রিত প্রান্তীয় ঘড়ি, NAMPT/NAD+ চালিত SIRT1 দোলন, সকাল-সন্ধ্যার ইনসুলিন সংবেদনশীলতার তারতম্য এবং টাইম-রেস্ট্রিক্টেড ইটিং (TRE) এর বিজ্ঞান।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Dissect the molecular architecture of the mammalian transcription-translation feedback loop (TTFL), detailing positive and negative regulatory loops.',
      'স্তন্যপায়ী প্রাণীর আণবিক ঘড়ির ট্রান্সক্রিপশন-ট্রান্সলেশন ফিডব্যাক লুপ (TTFL) এবং এর ইতিবাচক ও নেতিবাচক নিয়ন্ত্রণ পদ্ধতি বিশদভাবে বিশ্লেষণ করা।'
    ),
    l(
      'Contrast the light-entrained suprachiasmatic nucleus (SCN) master clock with food-entrained peripheral clocks in liver, pancreas, and adipose tissue.',
      'মস্তিষ্কের আলো-সংবেদনশীল SCN ঘড়ি এবং যকৃৎ, অগ্ন্যাশয় ও চর্বিকলার খাদ্য-সংবেদনশীল প্রান্তীয় ঘড়িগুলোর কার্যপদ্ধতির পার্থক্য নিরূপণ করা।'
    ),
    l(
      'Explain how circadian misalignment impairs insulin sensitivity, evaluate NAMPT/NAD+ oscillations, and detail evidence-based chrononutrition protocols.',
      'সময়ের অমিল কীভাবে ইনসুলিন অকার্যকারিতা তৈরি করে তা ব্যাখ্যা করা, NAMPT/NAD+ দোলন মূল্যায়ন করা এবং বৈজ্ঞানিক ক্রোনোনিউট্রিগ্রাফি প্রোটোকল তুলে ধরা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.endocrine-fuel-regulation'],
  relatedTopicIds: ['topic.metabolism.glycolysis-pyruvate', 'topic.metabolism.mitochondrial-dynamics-flexibility', 'topic.metabolism.exercise-bioenergetics-adaptation'],
  references: circadianRefs,
  evidenceBySection: {
    introduction: ['takahashi-circadian-clock-nat-rev-genet-2017', 'lehninger-biochem-8e-ch23'],
    structure: ['takahashi-circadian-clock-nat-rev-genet-2017', 'bass-circadian-metabolism-science-2010'],
    mechanism: ['nakahata-sirt1-bmal1-cell-2008', 'bass-circadian-metabolism-science-2010'],
    integration: ['bass-circadian-metabolism-science-2010', 'panda-time-restricted-eating-science-2016'],
    practice: ['panda-time-restricted-eating-science-2016', 'nakahata-sirt1-bmal1-cell-2008'],
    takeaways: ['panda-time-restricted-eating-science-2016', 'takahashi-circadian-clock-nat-rev-genet-2017'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Fourth Dimension of Biochemistry: Biological Time', '১. জৈবরসায়নের চতুর্থ মাত্রা: জীববৈজ্ঞানিক সময়জ্ঞান'), sectionId: 'introduction' },
      { id: 'sec-ttfl', label: l('2. The Molecular Clockwork: Core TTFL Mechanics', '২. আণবিক ঘড়ি ব্যবস্থা: মূল TTFL কার্যপ্রণালী'), sectionId: 'structure' },
      { id: 'sec-nampt-nad', label: l('3. Circadian Bioenergetics: The NAMPT-NAD+-SIRT1 Axis', '৩. ছন্দময় শক্তিবিজ্ঞান: NAMPT-NAD+-SIRT1 অক্ষ'), sectionId: 'mechanism' },
      { id: 'sec-peripheral', label: l('4. Master SCN vs Food-Entrained Peripheral Clocks', '৪. প্রধান SCN ঘড়ি বনাম খাদ্য-সংবেদনশীল প্রান্তীয় ঘড়ি'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Chrononutrition & Time-Restricted Eating (TRE)', '৫. ক্রোনোনিউট্রিগ্রাফি ও টাইম-রেস্ট্রিক্টেড ইটিং (TRE)'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Core Takeaways & High-Yield Summary', '৬. মূল শিক্ষা ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('CLOCK & BMAL1 Heterodimer', 'CLOCK ও BMAL1 হেটেরোডাইমার'),
        definition: l(
          'Basic helix-loop-helix transcription factor complex that functions as the positive arm of the mammalian circadian clock; binds E-box promoter elements to drive transcription of PER, CRY, and metabolic clock-controlled genes.',
          'মাইটোকন্ড্রিয়াল ও নিউক্লিয়ার জিনের প্রধান চালক প্রোটিন জটিল; যা ডিএনএ-র বিশেষ অংশে যুক্ত হয়ে PER, CRY এবং বিপাকীয় জিনগুলোর ২৪ ঘণ্টার ছন্দ পরিচালনা করে।'
        ),
      },
      {
        term: l('REV-ERBalpha (NR1D1)', 'REV-ERBalpha (NR1D1)'),
        definition: l(
          'Heme-binding nuclear receptor that forms the secondary negative feedback loop of the clock; directly represses BMAL1 and CLOCK transcription, rhythmically repressing hepatic lipogenesis and gluconeogenesis.',
          'হেম-সংবেদনশীল নিউক্লিয়ার রিসেপ্টর যা BMAL1 জিনকে বন্ধ করে ঘড়ির দ্বিতীয় নেতিবাচক নিয়ন্ত্রণ সম্পন্ন করে এবং যকৃতের চর্বি ও গ্লুকোজ জমার ছন্দ রক্ষা করে।'
        ),
      },
      {
        term: l('Nicotinamide Phosphoribosyltransferase (NAMPT)', 'নিকোটিনামাইড ফসফোরাইবোসিলট্রান্সফারেজ (NAMPT)'),
        definition: l(
          'Rate-limiting enzyme of the NAD+ salvage pathway; transcriptionally regulated by CLOCK:BMAL1, driving 24-hour sinusoidal oscillation of intracellular NAD+ concentration.',
          'NAD+ তৈরির প্রধান গতি-নিয়ন্ত্রক এনজাইম; যা CLOCK:BMAL1 দ্বারা নিয়ন্ত্রিত হয়ে কোষে NAD+ ঘনমাত্রার ২৪ ঘণ্টার অবিরাম ওঠানামা পরিচালনা করে।'
        ),
      },
      {
        term: l('Circadian Misalignment', 'দিবা-রাত্রি অমিল (Circadian Misalignment)'),
        definition: l(
          'Desynchronization between the central light-entrained SCN clock and peripheral nutrient-entrained organ clocks (e.g., eating during biological night), precipitating severe insulin resistance and metabolic dysfunction.',
          'মস্তিষ্কের আলোর ঘড়ি এবং যকৃতের খাবারের ঘড়ির মধ্যকার সময়ের অমিল (যেমন গভীর রাতে খাওয়া), যা মারাত্মক ডায়াবেটিস ও হৃদরোগের কারণ ঘটায়।'
        ),
      },
      {
        term: l('Time-Restricted Eating (TRE)', 'টাইম-রেস্ট্রিক্টেড ইটিং (TRE)'),
        definition: l(
          'Dietary regimen restricting nutrient intake to a consistent 8–10 hour diurnal window during the active biological phase, synchronizing peripheral clocks to optimize insulin sensitivity and lipid clearance.',
          'দিনের সক্রিয় সময়ে নির্দিষ্ট ৮-১০ ঘণ্টার মধ্যে আহার সীমাবদ্ধ রাখার বৈজ্ঞানিক পদ্ধতি, যা শরীরের অভ্যন্তরীণ ঘড়ির সাথে খাবারের সময় মিলিয়ে সুস্থতা নিশ্চিত করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Biochemical Mechanism of Nocturnal Insulin Resistance', 'রাতের বেলায় ইনসুলিন অকার্যকারিতার আণবিক কারণ'),
        steps: [
          l(
            'Step 1: The human circadian system is evolved to anticipate biological day as the active feeding phase and biological night as the restorative fasting phase. Insulin sensitivity in skeletal muscle and liver follows a profound circadian rhythm, peaking in the early morning and falling to its lowest nadir during the night.',
            'ধাপ ১: মানবদেহের জন্মগত ঘড়ি দিনের বেলা খাবার গ্রহণ ও রাতে উপবাসের জন্য তৈরি। কঙ্কালপেশি ও যকৃতে ইনসুলিনের কার্যক্ষমতা সকালে সর্বোচ্চ থাকে এবং রাতে স্বাভাবিকভাবেই সর্বনিম্ন পর্যায়ে নেমে আসে।'
          ),
          l(
            'Step 2: In pancreatic beta cells, the cell-autonomous clock downregulates glucokinase, GLUT2, and exocytic SNARE complexes at biological night, causing blunted first-phase and delayed second-phase insulin secretion upon a nocturnal glucose challenge.',
            'ধাপ ২: রাতে অগ্ন্যাশয়ের বিটা কোষের নিজস্ব ঘড়ি গ্লুকোকাইনেজ ও GLUT2 বাহকের মাত্রা কমিয়ে দেয়, ফলে রাতে খাবার খেলে ইনসুলিন তৈরি অনেক দেরিতে ও কম মাত্রায় হয়।'
          ),
          l(
            'Step 3: Simultaneously, nocturnal pineal melatonin secretion surges. Melatonin binds MT1 and MT2 G-protein coupled receptors on beta cells, which couple to Gi/o proteins to inhibit adenylyl cyclase, lowering intracellular cAMP and directly suppressing glucose-stimulated insulin secretion.',
            'ধাপ ৩: একই সাথে রাতে মস্তিষ্ক থেকে মেলাটোনিন নিঃসৃত হয়। মেলাটোনিন অগ্ন্যাশয়ের রিসেপ্টরে বসে ইনসুলিন নিঃসরণকে সরাসরি আটকে দেয় যাতে ঘুমের মধ্যে রক্তে সুগার হঠাৎ কমে না যায়।'
          ),
          l(
            'Step 4: In peripheral skeletal muscle, the molecular clock rhythmically downregulates sarcolemmal GLUT4 translocation and hexokinase II activity at night, creating a state of physiological nocturnal insulin resistance.',
            'ধাপ ৪: কঙ্কালপেশিতেও রাতে GLUT4 বাহকের কার্যক্রম বন্ধ থাকে, যার ফলে পেশি রক্ত থেকে গ্লুকোজ গ্রহণ করতে পারে না।'
          ),
          l(
            'Step 5: In adipose tissue, nocturnal snacking conflicts with rhythmic cortisol and growth hormone surges. Free fatty acid clearance is impaired, maintaining high circulating NEFA that directly competes with glucose via the Randle cycle, compounding hyperglycemia.',
            'ধাপ ৫: রাতে খেলে চর্বি ভাঙন ও হরমোনের স্বাভাবিক চক্র ব্যাহত হয়; রক্তে মুক্ত চর্বি বেড়ে গিয়ে র‍্যান্ডেল চক্রের মাধ্যমে গ্লুকোজ বিপাককে আরও জটিল করে তোলে।'
          ),
        ],
        conclusion: l(
          'Late-night caloric intake conflicts with the physiological downregulation of insulin secretion and peripheral glucose uptake, generating severe postprandial hyperglycemia and driving progressive beta-cell secretory exhaustion.',
          'গভীর রাতে খাবার খেলে অগ্ন্যাশয়ের ইনসুলিন তৈরির প্রাকৃতিক ছন্দ ব্যাহত হয় এবং রক্তে গ্লুকোজ মারাত্মকভাবে বৃদ্ধি পেয়ে ধীরে ধীরে স্থায়ী ডায়াবেটিস ও মেটাবলিক জটিলতা সৃষ্টি করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'How does the circadian molecular clockwork biochemically regulate the cellular energy sensor SIRT1?',
          'দিবা-রাত্রি আণবিক ঘড়ি কীভাবে কোষীয় শক্তি সংবেদক SIRT1 এনজাইমকে নিয়ন্ত্রণ করে?'
        ),
        answer: l(
          'The CLOCK:BMAL1 heterodimer binds E-box elements in the promoter of the NAMPT gene, driving rhythmic transcription of nicotinamide phosphoribosyltransferase. NAMPT is the rate-limiting enzyme in the NAD+ salvage pathway, generating a 24-hour sinusoidal wave in intracellular NAD+ concentration. Surging NAD+ directly activates the NAD+-dependent deacetylase SIRT1, which in turn deacetylates BMAL1 and PGC-1alpha to coordinate mitochondrial bioenergetics.',
          'CLOCK:BMAL1 প্রোটিন জটিলটি NAMPT জিনের প্রোমোটারে যুক্ত হয়ে এই এনজাইম তৈরি বাড়ায়। NAMPT কোষে NAD+ তৈরির মূল চালিকাশক্তি, ফলে কোষে NAD+ ঘনমাত্রার ২৪ ঘণ্টার একটি সুন্দর ছন্দ তৈরি হয়। এই অতিরিক্ত NAD+ তখন SIRT1 এনজাইমকে সক্রিয় করে, যা BMAL1 ও PGC-1alpha-কে নিয়ন্ত্রণ করে মাইটোকন্ড্রিয়ার শক্তি উৎপাদন পরিচালনা করে।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: circadian3DData,
  interactiveDiagram: {
    id: 'diag-metabolism32-circadian-metabolism',
    title: l('Interactive Molecular Circuit of the Circadian TTFL Clock & Metabolic Target Oscillation', 'দিবা-রাত্রি TTFL আণবিক ঘড়ি ও বিপাকীয় লক্ষ্যমাত্রার ইন্টারেক্টিভ বর্তনী'),
    disclaimer: l('Interactive educational diagram illustrating the transcription-translation feedback loop (TTFL) and metabolic oscillation.', 'ট্রান্সক্রিপশন-ট্রান্সলেশন ফিডব্যাক লুপ (TTFL) এবং বিপাকীয় দোলন প্রদর্শনকারী শিক্ষামূলক ডায়াগ্রাম।'),
    description: l(
      'Follow the 24-hour molecular feedback loop: CLOCK:BMAL1 transcriptional activation, PER/CRY translation and nuclear feedback repression, REV-ERB/ROR accessory looping, and rhythmic NAD+/SIRT1 oscillation.',
      '২৪ ঘণ্টার আণবিক ফিডব্যাক চক্র পর্যবেক্ষণ করুন: CLOCK:BMAL1 দ্বারা জিন সক্রিয়করণ, PER/CRY দ্বারা দমন, REV-ERB/ROR লুপ এবং ছন্দময় NAD+/SIRT1 দোলন।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-clock-bmal1-activation',
        label: l('1. CLOCK:BMAL1 Heterodimer Transcription', '১. CLOCK:BMAL1 হেটেরোডাইমার ট্রান্সক্রিপশন'),
        description: l('CLOCK and BMAL1 heterodimerize and bind E-box promoter elements (CACGTG) across genome.', 'CLOCK ও BMAL1 যুক্ত হয়ে ডিএনএ-র E-box অংশে বসে শত শত বিপাকীয় জিন সক্রিয় করে।'),
        details: l('Drives expression of PER1-3, CRY1-2, NAMPT, REV-ERBalpha, and rate-limiting metabolic enzymes.', 'PER, CRY, NAMPT এবং গুরুত্বপূর্ণ বিপাকীয় এনজাইমের দৈনিক উৎপাদন শুরু করে।'),
        sectionId: 'structure',
        color: '#3b82f6',
      },
      {
        id: 'node-per-cry-repression',
        label: l('2. PER/CRY Cytosolic Accumulation & Nuclear Repression', '২. PER/CRY সঞ্চয় ও নিউক্লিয়ার দমন'),
        description: l('PER and CRY accumulate, are phosphorylated by CK1, and translocate to nucleus to repress CLOCK:BMAL1.', 'PER ও CRY সাইটোপ্লাজমে জমা হয়ে ফসফরাইলেশনের পর নিউক্লিয়াসে ঢুকে CLOCK:BMAL1-কে বন্ধ করে দেয়।'),
        details: l('Negative feedback loop completes a full cycle in approximately 24 hours.', 'এই নেতিবাচক ফিডব্যাক লুপটি সম্পূর্ণ হতে ঠিক ২৪ ঘণ্টা সময় লাগে।'),
        sectionId: 'structure',
        color: '#ef4444',
      },
      {
        id: 'node-reverb-ror-loop',
        label: l('3. REV-ERBalpha & ROR Accessory Loop', '৩. REV-ERBalpha ও ROR সহায়ক লুপ'),
        description: l('REV-ERBalpha represses BMAL1 transcription; RORalpha activates it via RORE elements.', 'REV-ERBalpha প্রোটিন BMAL1 বন্ধ করে এবং RORalpha একে চালু করে ঘড়ির নির্ভুলতা রক্ষা করে।'),
        details: l('Heme binding to REV-ERBalpha couples cellular iron/porphyrin status to the circadian clock.', 'REV-ERBalpha হিমের সাথে যুক্ত হয়ে কোষের আয়রন মাত্রার সাথে ঘড়ির সমন্বয় ঘটায়।'),
        sectionId: 'structure',
        color: '#f59e0b',
      },
      {
        id: 'node-nampt-nad-oscillation',
        label: l('4. NAMPT Synthesis & 24-Hour NAD+ Waves', '৪. NAMPT সংশ্লেষণ ও ২৪ ঘণ্টার NAD+ তরঙ্গ'),
        description: l('CLOCK:BMAL1 rhythmically transcribes NAMPT, producing a sinusoidal 24-hour wave of NAD+.', 'CLOCK:BMAL1 দ্বারা NAMPT নিয়ন্ত্রিত হয়ে কোষে NAD+-এর একটি দৈনিক ছন্দ তৈরি করে।'),
        details: l('NAD+ peaks during the active biological phase, powering mitochondrial respiration.', 'সক্রিয় দিনে NAD+ সর্বোচ্চ হয়ে মাইটোকন্ড্রিয়ার শক্তি উৎপাদন বহুগুণ বাড়িয়ে দেয়।'),
        sectionId: 'mechanism',
        color: '#10b981',
      },
      {
        id: 'node-sirt1-deacetylation',
        label: l('5. SIRT1 Deacetylase & Metabolic Reset', '৫. SIRT1 ডিঅ্যাসিটাইলেজ ও বিপাকীয় পুনর্বিন্যাস'),
        description: l('Surging NAD+ activates SIRT1, which deacetylates BMAL1, PER2, and PGC-1alpha to close feedback loop.', 'উচ্চ NAD+ এনজাইম SIRT1-কে সক্রিয় করে যা BMAL1 ও PGC-1alpha-কে নিয়ন্ত্রণ করে লুপ সম্পন্ন করে।'),
        details: l('Couples circadian clock progression directly to mitochondrial bioenergetic status.', 'ঘড়ির সময়জ্ঞানকে সরাসরি মাইটোকন্ড্রিয়ার শক্তি অবস্থার সাথে নিখুঁতভাবে যুক্ত রাখে।'),
        sectionId: 'mechanism',
        color: '#8b5cf6',
      },
      {
        id: 'node-tre-metabolic-alignment',
        label: l('6. Time-Restricted Eating & Clock Alignment', '৬. টাইম-রেস্ট্রিক্টেড ইটিং ও ঘড়ির সমন্বয়'),
        description: l('Eating in an 8–10h diurnal window aligns liver and pancreas clocks, eliminating steatosis.', 'দিনের ৮-১০ ঘণ্টার মধ্যে খাবার গ্রহণ লিভার ও অগ্ন্যাশয়ের ঘড়ি মিলিয়ে ফ্যাটি লিভার দূর করে।'),
        details: l('Prevents internal circadian desynchrony caused by nocturnal feeding and shift work.', 'রাতের খাবারজনিত অভ্যন্তরীণ ঘড়ির সংঘাত ও ডায়াবেটিসের ঝুঁকি পুরোপুরি দূর করে।'),
        sectionId: 'practice',
        color: '#ec4899',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'An integrated biochemical map connecting the core CLOCK:BMAL1 transcriptional activator, cytoplasmic PER/CRY phosphorylation and nuclear feedback repression, REV-ERB/ROR secondary loops, oscillatory NAMPT/NAD+ synthesis, and SIRT1 deacetylation of metabolic targets.',
      'একটি সমন্বিত জৈবরাসাযনিক মানচিত্র যা CLOCK:BMAL1 অ্যাক্টিভেটর, PER/CRY ফিডব্যাক দমন, REV-ERB/ROR লুপ, NAMPT/NAD+ দোলন এবং SIRT1 ডিঅ্যাসিটাইলেশনকে সংযুক্ত করে।'
    ),
    steps: [
      l('CLOCK:BMAL1 heterodimers bind E-box promoters to transcribe PER, CRY, NAMPT, and metabolic genes.', 'CLOCK:BMAL1 প্রোটিন E-box অংশে বসে PER, CRY, NAMPT এবং বিপাকীয় জিনগুলোর ট্রান্সক্রিপশন চালায়।'),
      l('PER and CRY accumulate in cytoplasm, phosphorylated by CK1, entering nucleus to repress CLOCK:BMAL1.', 'PER ও CRY সাইটোপ্লাজমে জমা হয়ে নিউক্লিয়াসে প্রবেশ করে CLOCK:BMAL1-কে অবদমিত করে।'),
      l('Rhythmic NAMPT transcription drives a 24-hour wave of intracellular NAD+ salvage synthesis.', 'ছন্দময় NAMPT ট্রান্সক্রিপশন কোষে NAD+ ঘনমাত্রার ২৪ ঘণ্টার একটি অবিরাম ঢেউ পরিচালনা করে।'),
      l('NAD+ activates SIRT1 to deacetylate BMAL1 and PGC-1alpha, aligning bioenergetics with the circadian cycle.', 'NAD+ এনজাইম SIRT1-কে উদ্দীপ্ত করে PGC-1alpha ও BMAL1-কে নিয়ন্ত্রণ করে মাইটোকন্ড্রিয়ার শক্তি রক্ষা করে।'),
    ],
  },
  assessment: {
    question: l(
      'How does the core circadian molecular clockwork biochemically generate a 24-hour oscillation in cellular NAD+ levels and sirtuin deacetylase activity?',
      'দিবা-রাত্রি আণবিক ঘড়ি কীভাবে কোষে NAD+ মাত্রা এবং সার্টুইন এনজাইমের ২৪ ঘণ্টার পর্যায়ক্রমিক দোলন পরিচালনা করে?'
    ),
    options: [
      l(
        'The CLOCK:BMAL1 heterodimer binds E-box elements in the promoter of the NAMPT gene, driving rhythmic transcription of nicotinamide phosphoribosyltransferase, the rate-limiting enzyme in NAD+ salvage, which cyclically activates NAD+-dependent SIRT1.',
        'CLOCK:BMAL1 হেটেরোডাইমার NAMPT জিনের প্রোমোটারে বসে NAD+ তৈরির মূল গতি-নিয়ন্ত্রক এনজাইম তৈরি বাড়ায়, ফলে কোষে NAD+ ও SIRT1 এনজাইমের ২৪ ঘণ্টার ছন্দময় ওঠানামা ঘটে।'
      ),
      l(
        'Direct covalent cleavage of mitochondrial NADH dehydrogenase by cryptochrome-1 during biological night.',
        'রাতের বেলায় ক্রিপ্টোক্রোম-১ দ্বারা মাইটোকন্ড্রিয়াল NADH ডিহাইড্রোজিনেজের সরাসরি ভাঙন।'
      ),
      l(
        'Allosteric stimulation of poly(ADP-ribose) polymerase-1 (PARP1) by unphosphorylated Period-2.',
        'পিরিয়ড-২ দ্বারা PARP1 এনজাইমের সরাসরি অতিরিক্ত সক্রিয়করণ।'
      ),
      l(
        'Light-mediated destruction of tryptophan in the retina preventing de novo NAD+ biosynthesis.',
        'চোখে আলোর প্রভাবে ট্রিপটোফ্যান ধ্বংস হয়ে নতুন NAD+ তৈরি বন্ধ হওয়া।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'CLOCK:BMAL1 binds E-boxes in the NAMPT promoter, rhythmically transcribing the rate-limiting enzyme for NAD+ salvage. Intracellular NAD+ levels oscillate in a ~24-hour wave, peaking during the active biological phase. Surging NAD+ directly activates the NAD+-dependent deacetylase SIRT1, which deacetylates BMAL1, PER2, and PGC-1alpha, coupling the circadian clock directly to mitochondrial respiration and fuel selection.',
      'CLOCK:BMAL1 সরাসরি NAMPT জিনের প্রোমোটারে বসে এই এনজাইমটির ছন্দময় উৎপাদন নিশ্চিত করে। এর ফলে কোষে NAD+ ঘনমাত্রার ২৪ ঘণ্টার একটি সুন্দর ছন্দ তৈরি হয় যা সক্রিয় দিনে সর্বোচ্চ থাকে। এই অতিরিক্ত NAD+ তখন SIRT1 এনজাইমকে সক্রিয় করে PGC-1alpha ও মাইটোকন্ড্রিয়ার শ্বসন ক্ষমতাকে সঠিক সময়ে সর্বোচ্চ কর্মক্ষম রাখে।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Fourth Dimension of Biochemistry: Biological Time', 'জৈবরসায়নের চতুর্থ মাত্রা: জীববৈজ্ঞানিক সময়জ্ঞান'),
          paragraphs: [
            l(
              'Biochemistry is traditionally taught in two dimensions: substrate plus enzyme yields product. Yet every single chemical transformation inside the human body occurs along a fourth dimension: biological time. The 24-hour rotation of planet Earth imposes immutable environmental oscillations in light, temperature, and food availability. To flourish, virtually all terrestrial life evolved an internal circadian timing system.',
              'সাধারণত জৈবরসায়নকে দ্বিমাত্রিক হিসেবে শেখানো হয়: সাবস্ট্রেট ও এনজাইম মিলে উৎপাদ তৈরি করে। কিন্তু মানবদেহের প্রতিটি রাসায়নিক বিক্রিয়া একটি অপরিহার্য চতুর্থ মাত্রা বরাবর ঘটে: তা হলো জীববৈজ্ঞানিক সময়জ্ঞান। পৃথিবীর ২৪ ঘণ্টার ঘূর্ণন আলো, তাপমাত্রা এবং খাদ্যের প্রাচুর্যে এক অবিরাম পরিবর্তন আনে। এই ছন্দের সাথে তাল মিলিয়ে বেঁচে থাকার জন্য সমস্ত জীবকোষে একটি নিজস্ব অভ্যন্তরীণ ঘড়ি গড়ে উঠেছে।'
            ),
            l(
              'In humans, this biological clock is not merely a sleep-wake timer; it is a master metabolic operating system. The timing of when a nutrient is ingested dictates how it is processed: the identical carbohydrate meal ingested at 8:00 AM stimulates efficient glycogen storage, whereas consumed at 11:00 PM it triggers severe hyperglycemia, elevated insulin excursions, and accelerated de novo lipogenesis.',
              'মানুষের ক্ষেত্রে এই জৈব ঘড়িটি কেবল ঘুম ও জাগরণের সময় নির্ধারণ করে না; এটি বিপাকের মূল চালিকাশক্তি। একটি খাবার দিনের কোন সময়ে খাওয়া হচ্ছে তা নির্ধারণ করে শরীর একে কীভাবে কাজে লাগাবে: সকাল ৮টায় খেলে তা সুন্দরভাবে পেশিতে জমা হয়, কিন্তু রাত ১১টায় খেলে তা রক্তে তীব্র সুগার বাড়ায় এবং দ্রুত ক্ষতিকর চর্বিতে রূপান্তরিত হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Cell-Autonomous Molecular Clock: The TTFL Engine', 'কোষের নিজস্ব আণবিক ঘড়ি: TTFL চালিকাশক্তি'),
          paragraphs: [
            l(
              'Every nucleated cell in the human body possesses a cell-autonomous, self-sustaining molecular clock that oscillates with an intrinsic period of approximately 24 hours. The core engine is a transcription-translation feedback loop (TTFL). In the nucleus, basic helix-loop-helix transcription factors CLOCK and BMAL1 form a heterodimer that binds canonical E-box elements (5\'-CACGTG-3\') in target gene promoters.',
              'মানবদেহের প্রতিটি নিউক্লিয়াসযুক্ত কোষে একটি নিজস্ব, স্বায়ত্তশাসিত আণবিক ঘড়ি থাকে যা প্রায় ২৪ ঘণ্টার ছন্দে চলে। এর মূল চালিকাশক্তি হলো একটি ট্রান্সক্রিপশন-ট্রান্সলেশন ফিডব্যাক লুপ (TTFL)। নিউক্লিয়াসের ভেতরে CLOCK এবং BMAL1 নামক দুটি প্রোটিন একত্রিত হয়ে ডিএনএ-র বিশেষ অংশে (E-box) বসে নির্দিষ্ট জিনগুলোকে সক্রিয় করে তোলে।'
            ),
            l(
              'Among their primary transcriptional targets are the Period (PER1, PER2, PER3) and Cryptochrome (CRY1, CRY2) genes. As PER and CRY proteins accumulate in the cytoplasm, they are phosphorylated by casein kinase 1 (CK1), form stable inhibitory complexes, and translocate back into the nucleus. Inside the nucleus, CRY directly binds and physically represses the CLOCK:BMAL1 complex, shutting down its own transcription and taking approximately 24 hours to complete.',
              'এদের অন্যতম প্রধান লক্ষ্য হলো পিরিয়ড (PER) এবং ক্রিপ্টোক্রোম (CRY) জিন। PER ও CRY প্রোটিন সাইটোপ্লাজমে জমা হওয়ার পর ফসফরাইলেশনের মাধ্যমে নিউক্লিয়াসে ফিরে আসে। সেখানে এরা CLOCK:BMAL1 কমপ্লেক্সকে সরাসরি চেপে ধরে নিজেদের উৎপাদন বন্ধ করে দেয়। এই পুরো নেতিবাচক চক্রটি সম্পন্ন হতে প্রায় ২৪ ঘণ্টা সময় লাগে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Diurnal Hormone Cycling: Melatonin, Cortisol & Insulin Sensitivity', 'দৈনিক হরমোন চক্র: মেলাটোনিন, কর্টিসল ও ইনসুলিন সংবেদনশীলতা'),
          paragraphs: [
            l(
              'The central clock drives sharp circadian waves of systemic hormones. Cortisol surges in the early morning to stimulate hepatic gluconeogenesis and awaken the brain, while insulin sensitivity in skeletal muscle peaks before midday. Conversely, darkness prompts pineal melatonin synthesis, preparing the organism for nocturnal restorative fasting and blunting insulin secretion.',
              'কেন্দ্রীয় ঘড়িটি দেহের হরমোনগুলোর নিঃসরণে ২৪ ঘণ্টার নিখুঁত ছন্দ বজায় রাখে। সকালে ঘুম থেকে ওঠার আগে কর্টিসল বেড়ে গিয়ে লিভারের গ্লুকোজ ও শক্তি বাড়ায়, আর পেশির ইনসুলিন সংবেদনশীলতা দুপুরে পৌঁছানোর আগে সর্বোচ্চ থাকে। অন্যদিকে রাতের অন্ধকার মেলাটোনিন বাড়িয়ে দেহকে উপবাস ও ঘুমের জন্য প্রস্তুত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Central versus Peripheral Clocks: Light vs Food Entrainment', 'কেন্দ্রীয় বনাম প্রান্তীয় ঘড়ি: আলো বনাম খাবারের নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'While the master pacemaker in the suprachiasmatic nucleus (SCN) is synchronized primarily by blue light entering the retina, peripheral clocks in metabolic organs like the liver are entrained predominantly by food intake. Eating during the biological night desynchronizes the liver from the SCN, causing internal circadian misalignment and precipitating metabolic syndrome.',
              'মস্তিষ্কের প্রধান SCN ঘড়ি চোখের রেটিনায় পড়া আলোর সাহায্যে পরিচালিত হলেও যকৃৎ ও অন্যান্য অঙ্গের প্রান্তীয় ঘড়িগুলো খাবারের সময়ের দ্বারা নিয়ন্ত্রিত হয়। গভীর রাতে খাবার খেলে যকৃতের ঘড়ি মস্তিষ্কের ঘড়ির সাথে বিরোধে জড়িয়ে পড়ে, যার ফলে ইনসুলিন রেজিস্ট্যান্স ও মেটাবলিক সিন্ড্রোম দেখা দেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Shift Work Pathology and Nighttime Snacking Risks', 'শিফট ওয়ার্কের ঝুঁকি ও গভীর রাতে আহারের স্বাস্থ্যগত বিপদ'),
          paragraphs: [
            l(
              'Rotating shift workers face chronic circadian misalignment between environmental light, sleep cycles, and meal timing. Eating high-carbohydrate meals at night when melatonin suppresses beta-cell insulin secretion leads to chronic postprandial hyperglycemia, promoting visceral fat deposition and elevating long-term risks of type 2 diabetes and cardiovascular disease.',
              'যারা রাতে কাজ করেন বা গভীর রাতে ঘুমান, তাদের দেহের অভ্যন্তরীণ সময়ের মিল নষ্ট হয়ে যায়। রাতে খাবার খেলে মেলাটোনিন অগ্ন্যাশয়কে চেপে রাখায় রক্তে প্রচুর ক্ষতিকর গ্লুকোজ ও চর্বি জমে থাকে, যা কালক্রমে স্থায়ী ডায়াবেটিস, ফ্যাটি লিভার এবং মারাত্মক হৃদরোগের সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Core Principles of Chrononutrition and Circadian Health', 'ক্রোনোনিউট্রিগ্রাফি ও দিবা-রাত্রি স্বাস্থ্যের মূল শিক্ষা'),
          paragraphs: [
            l(
              'Aligning daily food consumption with our internal biological clock is vital for optimal metabolic health. Restricting caloric intake to a daytime window of eight to ten hours maximizes nutrient utilization, reduces glycemic variability, and allows natural nocturnal fasting mechanisms like cellular autophagy to repair tissues.',
              'অভ্যন্তরীণ জৈব ঘড়ির সাথে খাবারের সময় মিলিয়ে চলা সুস্থতার প্রধান শর্ত। দিনের বেলা ৮ থেকে ১০ ঘণ্টার মধ্যে আহার সীমাবদ্ধ রাখলে পুষ্টির সর্বোত্তম ব্যবহার নিশ্চিত হয়, রক্তের সুগার নিয়ন্ত্রণে থাকে এবং রাতের প্রাকৃতিক উপবাসে কোষের অটোফ্যাজি মেরামত ব্যবস্থা পূর্ণ কার্যকর হয়।'
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
          heading: l('Evolutionary and Thermodynamic Foundations of Chronobiology', 'ক্রোনোবায়োলজির বিবর্তনীয় ও তাপগতিবিদ্যীয় ভিত্তি'),
          paragraphs: [
            l(
              'From a thermodynamic perspective, the circadian timing system enables cells to anticipate cyclical environmental oscillations rather than passively reacting to homeostatic perturbations. By upregulating rate-limiting enzymes, membrane transporters, and electron transport machinery prior to expected nutrient influx, mammalian organisms maintain metabolic efficiency while sequestering potentially incompatible biochemical pathways into distinct temporal windows.',
              'তাপগতিবিদ্যার দৃষ্টিতে, দিবা-রাত্রি ঘড়ি দেহকে পরিবেশের পরিবর্তনের সাথে হঠাৎ ধাক্কা না খেয়ে আগে থেকেই প্রস্তুতি নিতে সাহায্য করে। খাবার আসার আগেই এনজাইম ও বাহকগুলোকে প্রস্তুত রেখে এটি বিপাকীয় দক্ষতা সর্বোচ্চ করে এবং পরস্পরবিরোধী রাসায়নিক প্রক্রিয়াগুলোকে দিনের ভিন্ন ভিন্ন সময়ে সম্পন্ন করে সংঘাত এড়ায়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Secondary Auxiliary Loops: REV-ERB and ROR Transcriptional Oscillators', 'দ্বিতীয় সহায়ক লুপ: REV-ERB ও ROR ট্রান্সক্রিপশনাল দোলক'),
          paragraphs: [
            l(
              'The core TTFL is reinforced by an interlocking transcriptional loop driven by the nuclear receptors REV-ERBalpha/beta and RORalpha/gamma. CLOCK:BMAL1 activates transcription of REV-ERBalpha, which acts as a transcriptional repressor by binding ROR response elements (ROREs) in the Bmal1 promoter to turn off its transcription. As REV-ERB levels decline, ROR activators restore Bmal1 expression, generating a robust 24-hour oscillatory rhythm.',
              'মূল TTFL ব্যবস্থাটি REV-ERB ও ROR নামক নিউক্লিয়ার রিসেপ্টর দ্বারা গঠিত একটি সহায়ক লুপের মাধ্যমে আরও সুদৃঢ় হয়। CLOCK:BMAL1 প্রোটিন REV-ERB তৈরি বাড়ায় যা উল্টো Bmal1 জিনকে বন্ধ করে দেয়। পরবর্তীতে REV-ERB কমে গেলে ROR প্রোটিন এসে পুনরায় Bmal1 চালু করে ঘড়ির নির্ভুল ২৪ ঘণ্টার ছন্দ অক্ষুণ্ণ রাখে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Metabolic Integration: Circadian NAD+ Oscillations & SIRT1', 'বিপাকীয় সংযোগ: ছন্দময় NAD+ দোলন ও SIRT1'),
          paragraphs: [
            l(
              'The molecular circadian clock does not run in isolation from cellular bioenergetics; rather, it is directly interwoven with cellular redox state via the NAD+ salvage pathway. The CLOCK:BMAL1 heterodimer binds E-box elements in the promoter of the NAMPT gene, which encodes nicotinamide phosphoribosyltransferase, the rate-limiting enzyme that converts nicotinamide into nicotinamide mononucleotide (NMN) for NAD+ resynthesis.',
              'আণবিক দিবা-রাত্রি ঘড়িটি শক্তি উৎপাদন থেকে বিচ্ছিন্ন কোনো ব্যবস্থা নয়; বরং এটি NAD+ বিপাকের মাধ্যমে কোষের শক্তির সাথে নিবিড়ভাবে জড়িত। CLOCK:BMAL1 প্রোটিন সরাসরি NAMPT জিনের ওপর বসে এই এনজাইমের উৎপাদন নিয়ন্ত্রণ করে, যা কোষে নিকোটিনামাইড থেকে পুনরায় সক্রিয় NAD+ তৈরির প্রধান চালিকাশক্তি।'
            ),
            l(
              'Rhythmic expression of NAMPT drives a prominent 24-hour sinusoidal wave of intracellular NAD+ concentration, peaking during the active biological feeding phase. Surging NAD+ directly activates the NAD+-dependent protein deacetylase SIRT1. SIRT1 then deacetylates BMAL1, PER2, and the metabolic coactivator PGC-1alpha. By deacetylating PGC-1alpha, SIRT1 optimizes mitochondrial respiratory chain gene expression to match energetic demand, closing a bidirectional bioenergetic feedback loop.',
              'ছন্দময় NAMPT উৎপাদনের ফলে কোষে NAD+ ঘনমাত্রার ২৪ ঘণ্টার একটি নিয়মিত তরঙ্গ তৈরি হয় যা দিনের সক্রিয় সময়ে সর্বোচ্চ থাকে। এই অতিরিক্ত NAD+ তখন SIRT1 এনজাইমকে সক্রিয় করে। SIRT1 প্রোটিন PGC-1alpha-কে নিয়ন্ত্রণ করে মাইটোকন্ড্রিয়ার শক্তি উৎপাদন ক্ষমতাকে সঠিক সময়ে সর্বোচ্চ রাখে, যা ঘড়ি ও বিপাকের এক অভূতপূর্ব মেলবন্ধন নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Master Pacemaker vs Peripheral Food-Entrained Clocks', 'মস্তিষ্কের প্রধান ঘড়ি বনাম খাদ্য-সংবেদনশীল প্রান্তীয় ঘড়ি'),
          paragraphs: [
            l(
              'The mammalian circadian hierarchy consists of a master central pacemaker in the suprachiasmatic nucleus (SCN) of the hypothalamus and peripheral autonomous clocks embedded within the liver, pancreas, heart, muscle, and adipose tissue. The SCN is entrained almost exclusively by the light-dark cycle via the retinohypothalamic tract, driving systemic autonomic output, pineal melatonin suppression, and the hypothalamic-pituitary-adrenal cortisol awakening response.',
              'মানবদেহের ঘড়ি ব্যবস্থাটি দুটি স্তরে বিভক্ত: মস্তিষ্কের হাইপোথ্যালামাসে অবস্থিত প্রধান সুপ্রাকায়াসম্যাটিক নিউক্লিয়াস (SCN) এবং যকৃৎ, অগ্ন্যাশয়, পেশি ও চর্বিকলায় অবস্থিত প্রান্তীয় ঘড়ি। মস্তিষ্কের SCN ঘড়িটি চোখের মাধ্যমে আলোর সংকেত গ্রহণ করে কর্টিসল ও মেলাটোনিন হরমোনের মাধ্যমে সারাদেহের প্রাথমিক ছন্দ নিয়ন্ত্রণ করে।'
            ),
            l(
              'In stark contrast, peripheral clocks in metabolic organs—most notably the liver—are overwhelmingly entrained by the timing of food intake. In nocturnal shift workers or individuals who eat late at night, the liver clock phase-shifts by up to 12 hours to align with nocturnal food cues, while the light-entrained SCN clock remains fixed. This internal circadian desynchrony between central and peripheral clocks triggers metabolic chaos: hepatic steatosis, impaired glucose tolerance, and systemic inflammation.',
              'বিপরীতভাবে, যকৃৎ ও অন্যান্য বিপাকীয় অঙ্গের প্রান্তীয় ঘড়িগুলো আলোর বদলে মূলত খাবারের সময়ের ওপর নির্ভর করে। যারা গভীর রাতে খাবার খায়, তাদের যকৃতের ঘড়ি খাবারের কারণে উল্টো দিকে ঘুরে যায় অথচ মস্তিষ্কের ঘড়ি আলোর সাথে স্থির থাকে। এই অভ্যন্তরীণ সময়ের অমিল যকৃতে চর্বি জমা, ডায়াবেটিস এবং রক্তনালীর প্রদাহের জন্ম দেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Molecular Mechanisms of Chronopharmacology and Beta-Cell Desynchrony', 'ক্রোনোফার্মাকোলজির আণবিক কৌশল ও বিটা কোষের সময়ের সংঘাত'),
          paragraphs: [
            l(
              'Chronopharmacology investigates how the efficacy and toxicity of therapeutic drugs vary as a function of the biological clock. Because xenobiotic metabolizing enzymes like CYP3A4, transporters like P-glycoprotein, and rate-limiting drug targets oscillate rhythmically, timing medication administration (e.g., administering statins at night when HMG-CoA reductase peaks) markedly enhances therapeutic efficacy while minimizing adverse drug reactions.',
              'ক্রোনোফার্মাকোলজি পরীক্ষা করে কীভাবে দিনের বিভিন্ন সময়ে ওষুধের কার্যকারিতা ও ক্ষতিকর পার্শ্বপ্রতিক্রিয়া পরিবর্তিত হয়। যকৃতের ড্রাগ-মেটাবোলাইজিং এনজাইমগুলো দিবা-রাত্রি ছন্দে চলায় সঠিক সময়ে ওষুধ প্রয়োগ (যেমন রাতে কোলেস্টেরল কমানোর স্ট্যাটিন খাওয়া যখন লিভারে কোলেস্টেরল তৈরির এনজাইম সবচেয়ে সক্রিয় থাকে) চিকিৎসার সাফল্য বহুগুণ বাড়িয়ে দেয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Systems Medicine Integration of Circadian Timing', 'সিস্টেমস মেডিসিনে দিবা-রাত্রি সময়জ্ঞানের সমন্বিত প্রয়োগ'),
          paragraphs: [
            l(
              'Circadian timing represents a master regulatory layer that sits above traditional metabolic signaling cascades. Co-aligning environmental zeitgebers—optimizing bright natural daylight exposure, eliminating nocturnal screen light, and restricting nutrient delivery to a consistent daytime feeding window—restores cellular homeostasis and represents an indispensable foundation of modern preventive lifestyle medicine.',
              'দিবা-রাত্রি ছন্দ হলো কোষীয় বিপাকের সবচেয়ে উচ্চস্তরের পরিচালক। প্রাকৃতিক আলোর সাথে দিনের কাজের সামঞ্জস্য রাখা, রাতে কৃত্রিম আলো পরিহার করা এবং একটি নির্দিষ্ট সময়ে সুষম খাবার গ্রহণ করা দেহের বিপাকীয় সুস্থতা পুনঃপ্রতিষ্ঠা করে এবং জটিল রোগ প্রতিরোধের প্রধানতম হাতিয়ার হিসেবে কাজ করে।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উচ্চতর'),
      sections: [
        {
          id: 'integration',
          heading: l('Chromatin Epigenetics, Circadian Metabolomics, and BMAL1 Cistrome', 'ক্রোমাটিন এপিজেনেটিক্স, দিবা-রাত্রি মেটাবোলোমিক্স ও BMAL1 সিস্ট্রোম'),
          paragraphs: [
            l(
              'Genome-wide ChIP-sequencing reveals that BMAL1 rhythmically binds to thousands of genomic loci, orchestrating cyclical histone H3K9 and H3K27 acetylation through recruitment of p300/CBP and the MLL histone methyltransferase complex. This creates an open chromatin architecture that pulses across 24 hours, driving the coordinated transcription of mitochondrial respiratory components, fatty acid oxidation enzymes, and antioxidant genes.',
              'উন্নত জিনোম সিকোয়েন্সিংয়ে দেখা গেছে যে BMAL1 প্রোটিন দৈনিক ছন্দে হাজার হাজার জিনের সাথে যুক্ত হয়ে হিস্টোন অ্যাসিটাইলেশন পরিচালনা করে। এর ফলে ক্রোমাটিন উন্মুক্ত হয়ে ২৪ ঘণ্টার একটি নিয়মিত স্পন্দন তৈরি করে, যা মাইটোকন্ড্রিয়ার শক্তি উৎপাদন, চর্বি পোড়ানো এবং অ্যান্টিঅক্সিডেন্ট জিনগুলোর ছন্দময় উৎপাদন নিশ্চিত করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Chrononutrition & Time-Restricted Eating (TRE) Therapeutics', 'ক্রোনোনিউট্রিগ্রাফি ও টাইম-রেস্ট্রিক্টেড ইটিং (TRE) চিকিৎসা'),
          paragraphs: [
            l(
              'Chrononutrition is the scientific discipline investigating how the timing of food intake interacts with the circadian timing system to modulate human metabolic health. Groundbreaking trials led by Satchidananda Panda and others demonstrated that confining calorie intake to a consistent 8–10 hour diurnal window during the biological active phase—Time-Restricted Eating (TRE)—produces profound metabolic benefits without requiring calorie reduction.',
              'ক্রোনোনিউট্রিগ্রাফি হলো সেই বিজ্ঞান যা খাবারের সময়জ্ঞান কীভাবে জীবদেহের অভ্যন্তরীণ ঘড়ির সাথে সমন্বয় করে রোগ প্রতিরোধ করে তা অনুসন্ধান করে। আধুনিক গবেষণায় প্রমাণিত হয়েছে যে প্রতিদিন একটি নির্দিষ্ট ৮–১০ ঘণ্টার মধ্যে আহার সীমাবদ্ধ রাখলে (টাইম-রেস্ট্রিক্টেড ইটিং বা TRE) খাবারের ক্যালোরি না কমিয়েই রক্তের সুগার ও রক্তচাপ নিয়ন্ত্রণে অভাবনীয় উন্নতি ঘটে।'
            ),
            l(
              'Early Time-Restricted Eating (eTRE), where calories are consumed between 8:00 AM and 4:00 PM, aligns nutrient delivery with the diurnal peaks of insulin sensitivity, pancreatic beta-cell glucose responsiveness, and thermic effect of food. Furthermore, an extended 14-to-16-hour overnight fast triggers physiological AMPK activation, hepatic glycogen depletion, SIRT1 deacetylation, and macroautophagy cleansing of damaged intracellular components, reversing metabolic syndrome and hepatic steatosis.',
              'দিনের শুরুতে (সকাল ৮টা থেকে বিকাল ৪টা) আহার গ্রহণ করলে ইনসুলিনের স্বাভাবিক ক্ষমতার সাথে খাবারের নিখুঁত মিল ঘটে। একই সাথে রাতের ১৪–১৬ ঘণ্টার স্বাভাবিক উপবাস যকৃতের গ্লুকোজ খালি করে AMPK ও SIRT1 বাড়িয়ে দেয়, যা অটোফ্যাজির মাধ্যমে ক্ষতিগ্রস্ত কোষীয় উপাদান দূর করে মেটাবলিক সিন্ড্রোম এবং ফ্যাটি লিভার নিরাময় করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Clinical Chronobiology & High-Yield Takeaways', 'ক্লিনিক্যাল ক্রোনোবায়োলজি ও উচ্চ-গুরুত্বপূর্ণ শিক্ষা'),
          paragraphs: [
            l(
              'Circadian timing is an indispensable vital sign of human metabolic health. Preserving circadian alignment by maximizing natural daytime bright light exposure, completely eliminating nocturnal screen illumination, and confining eating to an 8–10 hour daytime window optimizes cardiovascular, endocrine, and mitochondrial resilience. Integrating biological timing into clinical management transforms chronic metabolic disease prevention.',
              'দিবা-রাত্রি ছন্দ রক্ষা মানবদেহের সুস্থতার এক অপরিহার্য চাবিকাঠি। দিনের বেলা পর্যাপ্ত প্রাকৃতিক আলো গ্রহণ, রাতে নীল আলো ও স্ক্রিন পরিহার এবং আহারকে দিনের ৮–১০ ঘণ্টার মধ্যে সীমাবদ্ধ রাখা হৃদযন্ত্র, হরমোন এবং মাইটোকন্ড্রিয়ার কার্যক্ষমতাকে দীর্ঘস্থায়ী সুরক্ষা দেয়। জীবনযাপনে এই সময়ের সমন্বয় আধুনিক মেটাবলিক রোগ প্রতিরোধের অন্যতম শ্রেষ্ঠ হাতিয়ার।'
            ),
          ],
        },
      ],
    },
  },
}
