import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const aminoAcidRefs = [
  {
    id: 'lehninger-biochem-8e-ch18',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 18: Amino Acid Oxidation and the Production of Urea',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'harpers-biochem-32e-ch28',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 28: Catabolism of Proteins & Amino Acid Nitrogen",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'berg-biochem-9e-ch23',
    authors: 'Jeremy M. Berg, John L. Tymoczko, Gregory J. Gatto Jr., Lubert Stryer',
    title: 'Biochemistry, 9th edition, Chapter 23: Protein Turnover and Amino Acid Catabolism',
    organization: 'W. H. Freeman / Macmillan Learning',
    year: 2019,
    url: 'https://www.macmillanlearning.com/college/us/product/Biochemistry/p/1319114678',
  },
  {
    id: 'marks-medbiochem-6e-ch38',
    authors: 'Michael A. Lieberman, Alisa Peet',
    title: "Marks' Basic Medical Biochemistry: A Clinical Approach, 6th edition, Chapter 38: Nitrogen Disposal: The Urea Cycle",
    organization: 'Wolters Kluwer Health',
    year: 2022,
    url: 'https://shop.lww.com/Marks--Basic-Medical-Biochemistry/p/9781975150143',
  },
]

const ureaOrgan3DData: Organ3DExplorerContent = {
  title: l('3D Inter-Organ Nitrogen Flux & Urea Clearance Topography', '৩ডি আন্তঃ-অঙ্গ নাইত্রোজেন প্রবাহ ও ইউরিয়া নিষ্কাশন স্থানিক রূপরেখা'),
  disclaimer: l(
    'Interactive 3D anatomical teaching visualization: touch or drag to rotate in 3D coordinate space; explore how skeletal muscle, liver, kidneys, and brain coordinate nitrogen excretion.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘোরাতে স্পর্শ বা ড্র্যাগ করুন; কঙ্কালপেশি, যকৃৎ, বৃক্ক ও মস্তিষ্ক কীভাবে নাইট্রোজেন নিষ্কাশন সমন্বয় করে তা প্রত্যক্ষ করুন।'
  ),
  description: l(
    'Nitrogen disposal spans multiple organ systems in 3D body space: peripheral muscle generates alanine/glutamine, periportal hepatocytes execute the urea cycle, perivenous hepatocytes trap residual ammonia, and the renal cortex excretes urea.',
    'নাইট্রোজেন নিষ্কাশন মানবদেহের একাধিক অঙ্গের মধ্যে সমন্বিতভাবে ঘটে: প্রান্তীয় পেশি অ্যালানিন ও গ্লুটামিন তৈরি করে, পেরিপরটাল যকৃৎ কোষ ইউরিয়া চক্র চালায়, পেরিভেনাস কোষ উদ্বৃত্ত অ্যামোনিয়া ধরে রাখে এবং বৃক্ক ইউরিয়া মূত্রের মাধ্যমে বের করে দেয়।'
  ),
  organs: [
    {
      id: 'organ-liver-urea',
      name: l('Liver (Periportal & Perivenous Hepatocytes)', 'যকৃৎ (পেরিপরটাল ও পেরিভেনাস হেপাটোসাইট)'),
      latinName: 'Hepar',
      system: l('Digestive / Metabolic System', 'পরিপাক ও বিপাকীয় তন্ত্র'),
      cavity: l('Abdominal Cavity (Right Hypochondrium)', 'উদর গহ্বর (ডান হাইপোকন্ড্রিয়াম)'),
      position3D: { x: 28, y: 218, z: 12 },
      color: '#b45309',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'The exclusive site of the complete 5-step urea cycle in periportal hepatocytes, supported by perivenous glutamine synthetase to capture residual neurotoxic ammonia.',
        'পেরিপরটাল হেপাটোসাইটে সম্পূর্ণ ৫-ধাপ বিশিষ্ট ইউরিয়া চক্রের একমাত্র অঙ্গ, যা পেরিভেনাস কোষে গ্লুটামিন সিন্থেটেজ দিয়ে অতিরিক্ত নিউরোটক্সিক অ্যামোনিয়া আটকে পরিষ্কার করে।'
      ),
      spatialRelations: l(
        'Occupies right upper quadrant immediately inferior to diaphragm; receives portal vein blood carrying gut-derived ammonia directly into hepatic sinusoids.',
        'মধ্যচ্ছদার ঠিক নিচে ডান ঊর্ধ্বাংশে অবস্থিত; অন্ত্র থেকে আসা পোর্টাল শিরার রক্ত সরাসরি গ্রহণ করে যাতে খাদ্যের অ্যামোনিয়া হেপাটিক সাইনুসয়েডে পৌঁছায়।'
      ),
      physiology: l(
        'Carbamoyl phosphate synthetase-I fixes toxic ammonia into carbamoyl phosphate inside mitochondria; arginase-1 hydrolyzes arginine into nontoxic urea in cytosol.',
        'মাইটোকন্ড্রিয়ায় কার্বামোয়েল ফসফেট সিন্থেজ-১ বিষাক্ত অ্যামোনিয়াকে যুক্ত করে এবং সাইটোসলে আর্জিনেজ-১ আর্দ্রবিশ্লেষণ করে নির্দোষ ইউরিয়া তৈরি করে।'
      ),
      nutritionConnection: l(
        'High-protein diets induce transcription of all five urea cycle enzymes; N-acetylglutamate synthesis requires dietary arginine as an essential allosteric activator.',
        'উচ্চ-প্রোটিনযুক্ত খাদ্য ইউরিয়া চক্রের পাঁচটি এনজাইমের মাত্রা বৃদ্ধি করে; এন-অ্যাসিটাইলগ্লুটামেট সংশ্লেষে অ্যালবস্টেরিক উদ্দীপক হিসেবে খাদ্যের আর্জিনিন প্রয়োজন হয়।'
      ),
      clinicalSignificance: l(
        'Severe cirrhosis or portosystemic shunting bypasses periportal detox, producing hyperammonemia, brain astrocyte swelling, asterixis, and hepatic encephalopathy.',
        'তীব্র লিভার সিরোসিস বা পোর্টোসিস্টেমিক শান্ট যকৃতের বিষমুক্তিকরণকে ব্যাহত করে মারাত্মক হাইপারঅ্যামোনেমিয়া, মস্তিষ্কের স্নায়ুকোষের ফোলাভাব ও হেপাটিক এনসেফালোপ্যাথি ঘটায়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-kidneys-urea',
      name: l('Kidneys (Glomerular Filtration & Ammoniagenesis)', 'বৃক্ক (গ্লোমেরুলার পরিস্রাবণ ও অ্যামোনিয়াজেনেসিস)'),
      latinName: 'Renes',
      system: l('Urinary / Renal System', 'মূত্র ও রেচন তন্ত্র'),
      cavity: l('Retroperitoneal Space (T12-L3)', 'রেট্রোপেরিটোনিয়াল অঞ্চল (টি১২-এল৩)'),
      position3D: { x: -8, y: 240, z: -4 },
      color: '#0284c7',
      highlightColor: '#38bdf8',
      shapeType: 'kidneys',
      description: l(
        'Filters hepatic urea freely at the glomerulus for urinary excretion, while proximal tubule cells deamidate glutamine to excrete NH4+ during systemic metabolic acidosis.',
        'গ্লোমেরুলাসে যকৃত থেকে আসা ইউরিয়া পরিস্রাবণের মাধ্যমে মূত্রে নিষ্কাশন করে এবং মেটাবলিক অ্যাসিডোসিসের সময় প্রক্সিমাল টিউবিউল কোষে গ্লুটামিন ভেঙে অতিরিক্ত অম্ল দূর করে।'
      ),
      spatialRelations: l(
        'Bilateral retroperitoneal organs flanking vertebral column; receives twenty percent of cardiac output via renal arteries for rapid solute filtration.',
        'মেরুদণ্ডের দুই পাশে রেট্রোপেরিটোনিয়ামে অবস্থিত; কার্ডিয়াক আউটপুটের ২০ শতাংশ রক্ত গ্রহণ করে সার্বক্ষণিক বিপাকীয় বর্জ্য পরিশোধন নিশ্চিত করে।'
      ),
      physiology: l(
        'Glomeruli freely filter urea; forty to fifty percent undergoes passive medullary reabsorption to maintain the hyperosmolar corticomedullary gradient for water conservation.',
        'গ্লোমেরুলাস দিয়ে ইউরিয়া সহজেই ছাঁকা হয়; এর ৪০ থেকে ৫০ শতাংশ মেডুলায় পুনরায় শোষিত হয়ে বৃক্কের অসমোটিক ঘনত্ব ও পানি সংরক্ষণে অবদান রাখে।'
      ),
      nutritionConnection: l(
        'Chronic kidney disease requires monitored dietary protein intake to control blood urea nitrogen (BUN) while preserving essential amino acid nutrition.',
        'দীর্ঘস্থায়ী বৃক্কের রোগে রক্তের ইউরিয়া ও বর্জ্য নিয়ন্ত্রণে রাখতে প্রোটিন গ্রহণের মাত্রা সতর্কতার সাথে পর্যবেক্ষণ করতে হয়।'
      ),
      clinicalSignificance: l(
        'Renal failure causes uremia, pericarditis, platelet dysfunction, and asterixis; blood urea nitrogen (BUN) serves as a classic diagnostic marker of glomerular function.',
        'বৃক্কের বিকলতা ইউরেমিয়া, পেরিকার্ডাইটিস ও রক্ত জমাট বাঁধার ত্রুটি সৃষ্টি করে; রক্তের বুন (BUN) বৃক্কের কার্যকারিতা পরিমাপের প্রধান ক্লিনিক্যাল নির্দেশক।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-brain-urea',
      name: l('Brain (Astrocyte Ammonia Vulnerability)', 'মস্তিষ্ক (অ্যাস্ট্রোসাইটের অ্যামোনিয়া সংবেদনশীলতা)'),
      latinName: 'Cerebrum',
      system: l('Central Nervous System', 'কেন্দ্রীয় স্নায়ুতন্ত্র'),
      cavity: l('Cranial Cavity', 'করোটিকা গহ্বর'),
      position3D: { x: 0, y: 48, z: 0 },
      color: '#9333ea',
      highlightColor: '#c084fc',
      shapeType: 'brain',
      description: l(
        'Lacks a complete urea cycle; detoxifies ammonia exclusively via astrocyte glutamine synthetase, making it exquisitely vulnerable to osmotic swelling during hyperammonemia.',
        'মস্তিষ্কে সম্পূর্ণ ইউরিয়া চক্র নেই; এটি কেবল অ্যাস্ট্রোসাইটের গ্লুটামিন সিন্থেটেজ দিয়ে অ্যামোনিয়া ধরে রাখে, ফলে হাইপারঅ্যামোনেমিয়ায় মারাত্মক অসমোটিক ফোলাভাব দেখা দেয়।'
      ),
      spatialRelations: l(
        'Enclosed within rigid cranial vault; blood-brain barrier permits lipophilic gaseous NH3 diffusion while excluding polar ammonium ions (NH4+).',
        'অস্থিময় করোটিকার ভেতরে আবদ্ধ; রক্ত-মস্তিষ্ক বাধা দিয়ে চর্বিদ্রাব্য মুক্ত অ্যামোনিয়া গ্যাস সহজে প্রবেশ করে স্নায়ুকোষকে ক্ষতিগ্রস্ত করতে পারে।'
      ),
      physiology: l(
        'Excess ammonia drives astrocyte glutamine synthesis, consuming alpha-ketoglutarate, depleting TCA cycle intermediates, and causing cerebral edema via osmotic glutamine trapping.',
        'অতিরিক্ত অ্যামোনিয়া অ্যাস্ট্রোসাইটে গ্লুটামিন জমা করে, যা টিসিএ চক্রের আলফা-কিটোগ্লুটারেট ধ্বংস করে এবং অসমোটিক আকর্ষণে পানি টেনে এনে সেরিব্রাল ইডিমা ঘটায়।'
      ),
      nutritionConnection: l(
        'Therapeutic lactulose and low-protein dietary management reduce gut bacterial ammonia generation and protect cerebral neurological function.',
        'চিকিৎসায় ল্যাকটুলোজ এবং কম-প্রোটিনযুক্ত খাদ্য অন্ত্রের ব্যাকটেরিয়ার অ্যামোনিয়া উৎপাদন কমিয়ে স্নায়ুতন্ত্রের মারাত্মক ক্ষতি রোধ করে।'
      ),
      clinicalSignificance: l(
        'Hyperammonemia presents with flapping tremor (asterixis), lethargy, cerebral edema, herniation, and death in OTC deficiency or end-stage liver failure.',
        'হাইপারঅ্যামোনেমিয়ায় হাতের কাঁপুনি (অ্যাস্টেরিক্সিস), ঘুম ঘুম ভাব, সেরিব্রাল ইডিমা এবং সময়মতো চিকিৎসা না পেলে মস্তিষ্কের হার্নিয়েশন ও মৃত্যু ঘটে।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism09AminoAcidsUreaLesson: LessonTopic = {
  id: 'topic.metabolism.amino-acid-catabolism-urea',
  slug: 'amino-acid-catabolism-urea',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('09 · Amino Acid Catabolism & Urea Cycle', '০৯ · অ্যামিনো অ্যাসিড ভাঙন ও ইউরিয়া চক্র'),
  summary: l(
    'Inter-organ nitrogen flux via the glucose-alanine and glutamine cycles, transamination using pyridoxal phosphate (PLP), oxidative deamination by glutamate dehydrogenase, the 5-step hepatic urea cycle, allosteric N-acetylglutamate activation, and inborn hyperammonemic enzymopathies.',
    'গ্লুকোজ-অ্যালানিন ও গ্লুটামিন চক্রের মাধ্যমে আন্তঃ-অঙ্গ নাইট্রোজেন পরিবহন, পিএলপি সহ ট্রান্সঅ্যামিনেশন, গ্লুটামেট ডিহাইড্রোজিনেজ দ্বারা ডিঅ্যামিনেশন, ৫-ধাপ বিশিষ্ট যকৃত ইউরিয়া চক্র, এন-অ্যাসিটাইলগ্লুটামেট নিয়ন্ত্রণ এবং জন্মগত হাইপারঅ্যামোনেমিয়া।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Contrast transamination by aminotransferases (ALT, AST) requiring pyridoxal phosphate (PLP) with oxidative deamination catalyzed by mitochondrial glutamate dehydrogenase (GDH).',
      'পাইরিডক্সাল ফসফেট (পিএলপি) নির্ভর অ্যামিনোট্রান্সফারেজ (ALT, AST) দ্বারা ট্রান্সঅ্যামিনেশন এবং মাইটোকন্ড্রিয়াল গ্লুটামেট ডিহাইড্রোজিনেজ (GDH) দ্বারা জারণমূলক ডিঅ্যামিনেশনের সুস্পষ্ট তুলনা করা।',
    ),
    l(
      'Trace the 5 sequential enzymatic steps of the urea cycle across mitochondrial and cytosolic compartments, accounting for ATP investments and the two nitrogen atom origins (NH4+ and aspartate).',
      'মাইটোকন্ড্রিয়া ও সাইটোসলের মাঝে বিস্তৃত ইউরিয়া চক্রের ৫টি ধারাবাহিক ধাপ বিশ্লেষণ করা, যেখানে এটিপি খরচ এবং দুটি নাইট্রোজেনের উৎস (অ্যামোনিয়াম ও অ্যাসপার্টেট) চিহ্নিত থাকবে।',
    ),
    l(
      'Explain the mandatory allosteric activation of carbamoyl phosphate synthetase-I (CPS-I) by N-acetylglutamate (NAG) and differentiate clinical presentations of inborn urea cycle defects (OTC vs CPS-I).',
      'এন-অ্যাসিটাইলগ্লুটামেট (NAG) দ্বারা কার্বামোয়েল ফসফেট সিন্থেজ-১ (CPS-I)-এর অপরিহার্য সক্রিয়করণ এবং ইউরিয়া চক্রের জন্মগত ত্রুটিগুলোর (OTC বনাম CPS-I) ক্লিনিক্যাল পার্থক্য নিরূপণ করা।',
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.tca-oxphos'],
  relatedTopicIds: ['topic.metabolism.carbon-skeletons-specialized-products', 'topic.metabolism.purine-pyrimidine-metabolism'],
  references: aminoAcidRefs,
  evidenceBySection: {
    introduction: ['lehninger-biochem-8e-ch18', 'harpers-biochem-32e-ch28'],
    structure: ['harpers-biochem-32e-ch28', 'marks-medbiochem-6e-ch38'],
    mechanism: ['lehninger-biochem-8e-ch18', 'berg-biochem-9e-ch23'],
    integration: ['berg-biochem-9e-ch23', 'marks-medbiochem-6e-ch38'],
    practice: ['lehninger-biochem-8e-ch18', 'harpers-biochem-32e-ch28'],
    takeaways: ['lehninger-biochem-8e-ch18', 'marks-medbiochem-6e-ch38'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Nitrogen Balance & Inter-Organ Amino Shuttles', '১. নাইট্রোজেন ভারসাম্য ও অঙ্গসমূহে অ্যামিনো পরিবহন'), sectionId: 'introduction' },
      { id: 'sec-transam', label: l('2. Transamination & Oxidative Deamination', '২. ট্রান্সঅ্যামিনেশন ও জারণমূলক ডিঅ্যামিনেশন'), sectionId: 'structure' },
      { id: 'sec-cycle', label: l('3. The 5-Step Hepatic Urea Cycle Architecture', '৩. যকৃতের ৫-ধাপ বিশিষ্ট ইউরিয়া চক্রের কাঠামো'), sectionId: 'mechanism' },
      { id: 'sec-regul', label: l('4. N-Acetylglutamate Regulation & Renal Elimination', '৪. এন-অ্যাসিটাইলগ্লুটামেট নিয়ন্ত্রণ ও বৃক্কে নিষ্কাশন'), sectionId: 'integration' },
      { id: 'sec-clinic', label: l('5. Hyperammonemia & Inborn Enzymatic Defects', '৫. হাইপারঅ্যামোনেমিয়া ও জন্মগত এনজাইম ত্রুটি'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Review & Synthesis Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ পর্যালোচনা ও মূল শিক্ষা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Carbamoyl Phosphate Synthetase-I (CPS-I)', 'কার্বামোয়েল ফসফেট সিন্থেজ-১ (CPS-I)'),
        definition: l(
          'Mitochondrial enzyme catalyzing the committed, rate-limiting step of the urea cycle; condenses NH4+ and bicarbonate using two ATP molecules, obligately activated by N-acetylglutamate.',
          'মাইটোকন্ড্রিয়াল এনজাইম যা ইউরিয়া চক্রের প্রধান হার-নিয়ন্ত্রক ধাপটি সম্পন্ন করে; এটি দুটি এটিপি ব্যবহার করে অ্যামোনিয়াম ও বাইকার্বনেট যুক্ত করে এবং এন-অ্যাসিটাইলগ্লুটামেট দ্বারা সক্রিয় হয়।'
        ),
      },
      {
        term: l('Ornithine Transcarbamoylase (OTC)', 'অর্নিথিন ট্রান্সকার্বামোইলেজ (OTC)'),
        definition: l(
          'Mitochondrial matrix enzyme that transfers carbamoyl group to ornithine, generating citrulline; deficiency is the most common, X-linked inborn error of the urea cycle.',
          'মাইটোকন্ড্রিয়ার এনজাইম যা অর্নিথিনে কার্বামোয়েল গ্রুপ স্থানান্তর করে সিট্রুলিন তৈরি করে; এর ঘাটতি ইউরিয়া চক্রের সবচেয়ে সাধারণ এক্স-লিংকড জন্মগত ব্যাধি।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Energetic Stoichiometry of Urea Biosynthesis', 'ইউরিয়া সংশ্লেষের রাসায়নিক শক্তি সমীকরণ'),
        steps: [
          l(
            'Step 1: CPS-I consumes 2 ATP to form carbamoyl phosphate from bicarbonate and ammonia (yielding 2 ADP + 1 Pi).',
            'ধাপ ১: CPS-I এনজাইম বাইকার্বনেট ও অ্যামোনিয়াম থেকে কার্বামোয়েল ফসফেট তৈরিতে ২টি এটিপি খরচ করে (২ ADP + ১ Pi উৎপন্ন হয়)।'
          ),
          l(
            'Step 2: Argininosuccinate synthetase consumes 1 ATP, cleaving it to AMP and inorganic pyrophosphate (PPi). Pyrophosphatase rapidly hydrolyzes PPi to 2 Pi, driving the reaction by consuming a total of 2 high-energy phosphoanhydride bonds.',
            'ধাপ ২: আর্জিনিনোসাকসিনেট সিন্থেটেজ ১টি এটিপি ভেঙে এএমপি ও পাইরোফসফেট (PPi) তৈরি করে। পাইরোফসফেটেজ PPi ভেঙে ২ Pi বানায়, ফলে কার্যকরভাবে আরও ২টি উচ্চ-শক্তি বন্ধন খরচ হয়।'
          ),
          l(
            'Step 3: Total energetic investment equals 4 high-energy phosphate bonds per single molecule of nontoxic urea synthesized: NH4+ + HCO3- + Aspartate + 3 ATP -> Urea + Fumarate + 2 ADP + AMP + 4 Pi.',
            'ধাপ ৩: প্রতি অণু ইউরিয়া তৈরিতে মোট ৪টি উচ্চ-শক্তি ফসফেট বন্ধন ব্যয় হয়: অ্যামোনিয়াম + বাইকার্বনেট + অ্যাসপার্টেট + ৩ এটিপি -> ইউরিয়া + ফিউমারেট + ২ ADP + AMP + ৪ Pi।'
          ),
        ],
        conclusion: l(
          'The body expends substantial metabolic currency (4 high-energy bonds per urea) to neutralize toxic ammonia into highly soluble, neutral urea for safe urinary elimination.',
          'বিষাক্ত ক্ষতিকর অ্যামোনিয়াকে পানিতে দ্রবণীয় নিরপেক্ষ ইউরিয়াতে রূপান্তর করতে শরীর উল্লেখযোগ্য পরিমাণ শক্তি (প্রতি ইউরিয়ায় ৪টি ফসফেট বন্ধন) বিনিয়োগ করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does an infant with ornithine transcarbamoylase (OTC) deficiency exhibit marked elevation of urinary orotic acid, whereas an infant with CPS-I deficiency does not?',
          'OTC এনজাইম ঘাটতিযুক্ত শিশুর প্রস্রাবে কেন প্রচুর পরিমাণে ওরোティック অ্যাসিড নির্গত হয়, কিন্তু CPS-I ঘাটতিযুক্ত শিশুর ক্ষেত্রে তা হয় না?'
        ),
        answer: l(
          'In OTC deficiency, accumulated mitochondrial carbamoyl phosphate spills out into the cytoplasm, where it floods the pyrimidine synthesis pathway, overwhelming CAD and driving massive synthesis and urinary excretion of orotic acid. In CPS-I deficiency, carbamoyl phosphate is never made, so orotic acid remains low.',
          'OTC ঘাটতিতে মাইটোকন্ড্রিয়ায় অতিরিক্ত কার্বামোয়েল ফসফেট জমা হয়ে সাইটোপ্লাজমে ছড়িয়ে পড়ে এবং পিরিমিডিন সংশ্লেষের গতিপথকে প্লাবিত করে প্রচুর ওরোティック অ্যাসিড তৈরি করে। কিন্তু CPS-I ঘাটতিতে কার্বামোয়েল ফসফেট তৈরিই হতে পারে না, ফলে ওরোティック অ্যাসিড বাড়ে না।'
        ),
      },
      {
        question: l(
          'How does dietary arginine act as an indispensable allosteric signal ensuring that the urea cycle keeps pace with amino acid catabolism?',
          'খাদ্যের আর্জিনিন কীভাবে অপরিহার্য সংকেত হিসেবে কাজ করে ইউরিয়া চক্রকে প্রোটিন ভাঙনের হারের সাথে সমন্বয় করতে বাধ্য করে?'
        ),
        answer: l(
          'Arginine is a potent positive allosteric activator of N-acetylglutamate synthase (NAGS). Rising intracellular arginine stimulates NAGS to produce N-acetylglutamate (NAG), which is the obligate allosteric activator required for CPS-I activity, ramping up urea cycle throughput precisely when amino acid influx is elevated.',
          'আর্জিনিন সরাসরি এন-অ্যাসিটাইলগ্লুটামেট সিন্থেজ (NAGS) এনজাইমকে উদ্দীপ্ত করে NAG তৈরি বাড়িয়ে দেয়। এই NAG হলো CPS-I এনজাইম চালু করার অপরিহার্য চাবিকাঠি; ফলে প্রোটিন বা অ্যামিনো অ্যাসিডের আধিক্য ঘটলেই ইউরিয়া চক্রের গতি স্বয়ংক্রিয়ভাবে বৃদ্ধি পায়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: ureaOrgan3DData,
  interactiveDiagram: {
    id: 'nitrogen-flux-urea-cycle-hub',
    title: l('Interactive Nitrogen Flux: Transamination, Ammonia Transport & Hepatic Urea Cycle', 'ইন্টারেক্টিভ নাইট্রোজেন প্রবাহ: ট্রান্সঅ্যামিনেশন, অ্যামোনিয়া পরিবহন ও যকৃতের ইউরিয়া চক্র'),
    description: l(
      'Explore the multi-organ journey of amino acid nitrogen from peripheral muscle transamination through mitochondrial CPS-I commitment to cytosolic arginase-1 urea liberation.',
      'প্রান্তীয় পেশির ট্রান্সঅ্যামিনেশন থেকে শুরু করে মাইটোকন্ড্রিয়াল CPS-I গেটওয়ে ও সাইটোসলিক আর্জিনেজ-১ দ্বারা ইউরিয়া মুক্তির সম্পূর্ণ জৈবরাসায়নিক গতিপথ প্রত্যক্ষ করুন।'
    ),
    disclaimer: l(
      'Enzymatic kinetics and stoichiometry verified against Lehninger Principles of Biochemistry (8th ed) and Harper Illustrated Biochemistry (32nd ed).',
      'এনজাইম গতিবিদ্যা ও রাসায়নিক অনুপাত লেহনিঞ্জার বায়োকেমিস্ট্রি এবং হার্পারস ইলাস্ট্রেটেড বায়োকেমিস্ট্রি দ্বারা নিশ্চিতকৃত।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'transamination-plp',
        label: l('1. ALT / AST Aminotransferases [PLP Vitamin B6 Hub]', '১. ALT / AST অ্যামিনোট্রান্সফারেজ [PLP ভিটামিন বি৬ কেন্দ্র]'),
        description: l(
          'Transfers alpha-amino groups from donor amino acids onto alpha-ketoglutarate, funneling nitrogen into glutamate using pyridoxal phosphate.',
          'অ্যামিনো অ্যাসিড থেকে অ্যামিনো মূলক আলফা-কিটোগ্লুটারেটে স্থানান্তর করে গ্লুটামেট তৈরি করে, যাতে পাইরিডক্সাল ফসফেট কোফ্যাক্টর হিসেবে কাজ করে।'
        ),
        details: l(
          'Ping-pong kinetic mechanism shuttles amino group through enzyme-bound pyridoxamine intermediate; essential diagnostic markers for liver and heart injury.',
          'পিং-পং গতিবিদ্যায় এনজাইমের গায়ে পিরিডক্সামিন মধ্যবর্তী যৌগ তৈরি হয়; রক্তে এদের বৃদ্ধি যকৃৎ ও হৃদযন্ত্রের কোষীয় ক্ষতির প্রধান ক্লিনিক্যাল নির্দেশক।'
        ),
        color: '#d97706',
        sectionId: 'structure',
      },
      {
        id: 'glucose-alanine-cycle',
        label: l('2. Skeletal Muscle Glucose-Alanine Inter-Organ Cycle', '২. কঙ্কালপেশির গ্লুকোজ-অ্যালানিন আন্তঃ-অঙ্গ চক্র'),
        description: l(
          'Vigorous muscle contraction converts pyruvate into alanine for safe vascular delivery of toxic nitrogen to the liver without elevating free ammonia.',
          'তীব্র পেশি সংকোচনের সময় পাইরুভেট অ্যালানিনে রূপান্তরিত হয়ে রক্তে মুক্ত অ্যামোনিয়া না বাড়িয়েই নিরাপদভাবে যকৃতে নাইট্রোজেন পৌঁছে দেয়।'
        ),
        details: l(
          'Liver re-converts alanine to pyruvate for gluconeogenesis, completing the cyclical return of glucose back to working peripheral muscles.',
          'যকৃৎ অ্যালানিন থেকে পুনরায় পাইরুভেট তৈরি করে গ্লুকোনিওজেনেসিসের মাধ্যমে নতুন গ্লুকোজ বানিয়ে পেশিতে ফেরত পাঠায়।'
        ),
        color: '#2563eb',
        sectionId: 'introduction',
      },
      {
        id: 'gdh-deamination',
        label: l('3. Mitochondrial Glutamate Dehydrogenase (GDH)', '৩. মাইটোকন্ড্রিয়াল গ্লুটামেট ডিহাইড্রোজিনেজ (GDH)'),
        description: l(
          'Oxidatively deaminates glutamate in hepatic mitochondria, releasing free ammonium (NH4+) and regenerating alpha-ketoglutarate.',
          'যকৃতের মাইটোকন্ড্রিয়ায় গ্লুটামেটকে জারিত করে মুক্ত অ্যামোনিয়াম আয়ন অবমুক্ত করে এবং আলফা-কিটোগ্লুটারেট পুনরুৎপাদন করে।'
        ),
        details: l(
          'Allosterically inhibited by GTP/ATP and activated by ADP/leucine; uniquely able to use either NAD+ (catabolic) or NADP+ (anabolic).',
          'জিটিপি ও এটিপি দ্বারা অবদমিত এবং এডিপি দ্বারা সক্রিয় হয়; এটি এনএডিপ্লাস বা এনএডিপিএইচ উভয়ই ব্যবহার করতে সক্ষম।'
        ),
        color: '#059669',
        sectionId: 'structure',
      },
      {
        id: 'cps1-checkpoint',
        label: l('4. Carbamoyl Phosphate Synthetase-I (CPS-I) [Master Valve]', '৪. কার্বামোয়েল ফসফেট সিন্থেজ-১ (CPS-I) [প্রধান নিয়ন্ত্রক গেট]'),
        description: l(
          'Rate-limiting enzyme of the urea cycle; condenses NH4+ and bicarbonate inside mitochondria using 2 ATP; strictly requires N-acetylglutamate.',
          'ইউরিয়া চক্রের প্রধান হার-নিয়ন্ত্রক এনজাইম; মাইটোকন্ড্রিয়ায় ২টি এটিপি ব্যবহার করে অ্যামোনিয়াম ও বাইকার্বনেট যুক্ত করে এবং NAG দ্বারা সক্রিয় হয়।'
        ),
        details: l(
          'Located exclusively in mitochondrial matrix of hepatocytes; inborn deficiency causes catastrophic neonatal hyperammonemia without orotic aciduria.',
          'কেবলমাত্র যকৃতের মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে থাকে; এর জন্মগত ত্রুটি ওরোティック অ্যাসিড ছাড়া মারাত্মক হাইপারঅ্যামোনেমিয়া ঘটায়।'
        ),
        color: '#dc2626',
        sectionId: 'mechanism',
      },
      {
        id: 'otc-condensation',
        label: l('5. Ornithine Transcarbamoylase (OTC) [Citrulline Formation]', '৫. অর্নিথিন ট্রান্সকার্বামোইলেজ (OTC) [সিট্রুলিন গঠন]'),
        description: l(
          'Transfers carbamoyl moiety to ornithine, synthesizing citrulline, which is exported through the inner mitochondrial membrane into the cytosol.',
          'অর্নিথিনের সাথে কার্বামোয়েল গ্রুপ যুক্ত করে সিট্রুলিন তৈরি করে, যা মাইটোকন্ড্রিয়ার পর্দা অতিক্রম করে সাইটোসলে স্থানান্তরিত হয়।'
        ),
        details: l(
          'Most common inborn urea cycle enzymopathy (X-linked); accumulated carbamoyl phosphate diverts into pyrimidines, producing massive orotic aciduria.',
          'ইউরিয়া চক্রের সবচেয়ে সাধারণ বংশগত ব্যাধি (এক্স-লিংকড); জমা হওয়া কাঁচামাল পিরিমিডিনে গিয়ে প্রস্রাবে প্রচুর ওরোティック অ্যাসিড নির্গত করে।'
        ),
        color: '#9333ea',
        sectionId: 'mechanism',
      },
      {
        id: 'ass-asl-reactions',
        label: l('6. Argininosuccinate Synthetase & Lyase [2nd Nitrogen Entry]', '৬. আর্জিনিনোসাকসিনেট সিন্থেটেজ ও লাইয়েজ [২য় নাইট্রোজেন সংযোজন]'),
        description: l(
          'Synthetase incorporates aspartate to introduce the second urea nitrogen atom (consuming 2 ATP equivalents); lyase cleaves fumarate.',
          'সিন্থেটেজ অ্যাসপার্টেট যুক্ত করে ইউরিয়ার দ্বিতীয় নাইট্রোজেন পরমাণু সরবরাহ করে (২ এটিপি খরচ হয়); লাইয়েজ ফিউমারেট মুক্ত করে।'
        ),
        details: l(
          'Released fumarate enters the citric acid cycle or is converted to malate for the aspartate-argininosuccinate shunt (Krebs bicycle).',
          'মুক্ত হওয়া ফিউমারেট টিসিএ চক্রে প্রবেশ করে বা ম্যালেটে পরিণত হয়ে অ্যাসপার্টেট শান্ট তৈরি করে ক্রেবস বাইসাইকেল সম্পন্ন করে।'
        ),
        color: '#0891b2',
        sectionId: 'mechanism',
      },
      {
        id: 'arginase-urea-release',
        label: l('7. Cytosolic Arginase-1 [Urea Cleavage & Cycle Closure]', '৭. সাইটোসলিক আর্জিনেজ-১ [ইউরিয়া বিদারণ ও চক্রের সমাপ্তি]'),
        description: l(
          'Hydrolyzes arginine to release nontoxic urea into the bloodstream and regenerates ornithine, which re-enters mitochondria to repeat the cycle.',
          'আর্জিনিনকে আর্দ্রবিশ্লেষণ করে রক্তে নির্দোষ ইউরিয়া অবমুক্ত করে এবং অর্নিথিন পুনরুৎপাদন করে যা মাইটোকন্ড্রিয়ায় ফিরে চক্রটি সচল রাখে।'
        ),
        details: l(
          'Manganese-dependent cytosolic enzyme expressed exclusively in periportal hepatocytes; released urea is carried via blood to kidneys for urinary clearance.',
          'ম্যাঙ্গানিজ-নির্ভর এই এনজাইম কেবল যকৃতের পেরিপরটাল কোষে থাকে; উৎপন্ন ইউরিয়া রক্তবাহিত হয়ে বৃক্কে গিয়ে মূত্রের মাধ্যমে দেহত্যাগ করে।'
        ),
        color: '#16a34a',
        sectionId: 'mechanism',
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Introduction: The Problem of Toxic Nitrogen Disposal', 'ভূমিকা: বিষাক্ত নাইট্রোজেন অপসারণের জৈবিক চ্যালেঞ্জ'),
          paragraphs: [
            l(
              'Unlike carbohydrates and fats, which consist entirely of carbon, hydrogen, and oxygen that can be fully combusted into harmless carbon dioxide and water, proteins contain significant amounts of nitrogen in their amino groups. When the body breaks down dietary or cellular proteins for metabolic energy, it faces a profound chemical challenge: free nitrogen readily forms ammonia, an extremely toxic compound that can rapidly poison brain cells.',
              'শর্করা ও চর্বির মতো খাদ্য উপাদানগুলো কেবল কার্বন, হাইড্রোজেন ও অক্সিজেন দিয়ে গঠিত হওয়ায় সহজে পুড়ে কার্বন ডাই-অক্সাইড ও পানিতে পরিণত হতে পারে; কিন্তু প্রোটিনের অ্যামিনো মূলকে প্রচুর নাইট্রোজেন থাকে। শরীর যখন শক্তি উৎপাদনের জন্য প্রোটিন বা অ্যামিনো অ্যাসিড ভাঙে, তখন এটি একটি মারাত্মক রাসায়নিক সংকটের মুখোমুখি হয়: মুক্ত নাইট্রোজেন সহজে অত্যন্ত বিষাক্ত অ্যামোনিয়া তৈরি করে যা দ্রুত মস্তিষ্কের স্নায়ুকোষকে ক্ষতিগ্রস্ত করে।'
            ),
            l(
              'To prevent toxic ammonia from accumulating in the bloodstream, the human body uses specialized molecular transport taxis—primarily the amino acids alanine and glutamine—to safely escort nitrogen through the vascular system to the liver. Inside the liver, a specialized circular biochemical factory called the urea cycle permanently neutralizes this dangerous waste into harmless, water-soluble urea.',
              'রক্তে বিষাক্ত অ্যামোনিয়া জমা হওয়া ঠেকাতে মানবদেহ অ্যালানিন ও গ্লুটামিন নামক বিশেষ অ্যামিনো অ্যাসিডকে আণবিক ট্যাক্সি হিসেবে ব্যবহার করে নিরাপদভাবে নাইট্রোজেনকে যকৃতে পৌঁছে দেয়। যকৃতের ভেতরে ইউরিয়া চক্র নামক একটি অত্যন্ত দক্ষ জৈবরাসায়নিক কারখানা এই বিপজ্জনক বর্জ্যকে সম্পূর্ণ নিরাপদ এবং পানিতে দ্রবণীয় ইউরিয়াতে রূপান্তর করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Aminotransferases: Handing Off Nitrogen with Vitamin B6', 'অ্যামিনোট্রান্সফারেজ: ভিটামিন বি৬ সহযোগে নাইট্রোজেন হস্তান্তর'),
          paragraphs: [
            l(
              'The first step in dismantling amino acids is transamination, carried out by enzymes called aminotransferases or transaminases. These enzymes use a coenzyme derived from vitamin B6, called pyridoxal phosphate (PLP), to pluck the amino group off an amino acid and transfer it onto a universal receiver molecule called alpha-ketoglutarate, creating glutamate.',
              'অ্যামিনো অ্যাসিড ভাঙার প্রথম ধাপ হলো ট্রান্সঅ্যামিনেশন, যা সম্পন্ন করে অ্যামিনোট্রান্সফারেজ এনজাইমগুলো। এই এনজাইমগুলো ভিটামিন বি৬ থেকে আসা পাইরিডক্সাল ফসফেট (পিএলপি) কোএনজাইম ব্যবহার করে অ্যামিনো অ্যাসিড থেকে নাইট্রোজেন মূলকটি তুলে নিয়ে আলফা-কিটোগ্লুটারেট নামক সার্বজনীন গ্রাহক অণুর সাথে যুক্ত করে গ্লুটামেট তৈরি করে।'
            ),
            l(
              'Two of the most important transaminases are alanine aminotransferase (ALT) and aspartate aminotransferase (AST). When liver cells are injured by viral hepatitis, toxic drugs, or fatty liver disease, these internal enzymes leak out into the circulation. Measuring elevated ALT and AST in routine clinical blood tests provides doctors with an immediate, sensitive window into hepatocyte damage.',
              'চিকিৎসাবিজ্ঞানে সবচেয়ে গুরুত্বপূর্ণ দুটি ট্রান্সঅ্যামিনেজ হলো অ্যালানিন অ্যামিনোট্রান্সফারেজ (ALT) এবং অ্যাসপার্টেট অ্যামিনোট্রান্সফারেজ (AST)। হেপাটাইটিস ভাইরাস, বিষাক্ত ওষুধ বা ফ্যাটি লিভারের কারণে যকৃত কোষ ক্ষতিগ্রস্ত হলে এই এনজাইমগুলো রক্তে নির্গত হয়। সাধারণ রক্ত পরীক্ষায় এদের বৃদ্ধি দেখেই চিকিৎসকরা যকৃতের ক্ষতি নির্ভুলভাবে শনাক্ত করেন।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Five Steps of the Urea Cycle: From Mitochondria to Cytosol', 'ইউরিয়া চক্রের পাঁচ ধাপ: মাইটোকন্ড্রিয়া থেকে সাইটোসলে রূপান্তর'),
          paragraphs: [
            l(
              'The urea cycle takes place exclusively in liver hepatocytes and is uniquely partitioned across two intracellular compartments: the first two steps occur inside the mitochondrial matrix, while the remaining three steps operate out in the cytosol. In the first step, carbamoyl phosphate synthetase-I (CPS-I) traps ammonia and bicarbonate using two ATP molecules to form carbamoyl phosphate.',
              'ইউরিয়া চক্র কেবল যকৃতের কোষে সম্পন্ন হয় এবং এটি কোষের দুটি ভিন্ন অংশে বিভক্ত: প্রথম দুটি ধাপ ঘটে মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে এবং শেষের তিনটি ধাপ সম্পন্ন হয় সাইটোসলে। প্রথম ধাপে কার্বামোয়েল ফসফেট সিন্থেজ-১ (CPS-I) এনজাইম দুটি এটিপি খরচ করে অ্যামোনিয়া ও বাইকার্বনেটকে যুক্ত করে কার্বামোয়েল ফসফেট তৈরি করে।'
            ),
            l(
              'Ornithine transcarbamoylase (OTC) then combines carbamoyl phosphate with ornithine to make citrulline, which exits the mitochondria. In the cytosol, enzymes attach a second nitrogen atom from aspartate and trim the molecule, culminating in arginase-1 snipping off a complete urea molecule while regenerating ornithine to restart the cycle. The newly synthesized urea dissolves into the blood and travels to the kidneys for excretion.',
              'এরপর OTC এনজাইম কার্বামোয়েল ফসফেটকে অর্নিথিনের সাথে যুক্ত করে সিট্রুলিন বানায় যা মাইটোকন্ড্রিয়া থেকে বেরিয়ে আসে। সাইটোসলে অ্যাসপার্টেট থেকে দ্বিতীয় নাইট্রোজেন যুক্ত হয় এবং পরিশেষে আর্জিনেজ-১ এনজাইম আর্জিনিনকে কেটে মুক্ত ইউরিয়া অবমুক্ত করে ও অর্নিথিন ফিরিয়ে দেয়। এই ইউরিয়া রক্তে দ্রবীভূত হয়ে বৃক্কে পৌঁছে মূত্রের মাধ্যমে দেহত্যাগ করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('N-Acetylglutamate: The Master Fuel Sensor for Protein Catabolism', 'এন-অ্যাসিটাইলগ্লুটামেট: প্রোটিন ভাঙনের প্রধান জৈবিক সংকেত'),
          paragraphs: [
            l(
              'The urea cycle is not left running at full blast continuously because synthesizing urea is metabolically expensive, consuming four high-energy phosphate bonds per turn. Instead, the entry gatekeeper enzyme CPS-I possesses an absolute requirement for an allosteric activator called N-acetylglutamate (NAG). Without NAG physically bound to CPS-I, the enzyme remains completely dormant.',
              'ইউরিয়া চক্র সারাক্ষণ পূর্ণ গতিতে চলে না কারণ প্রতি অণু ইউরিয়া তৈরিতে চারটি উচ্চ-শক্তি ফসফেট বন্ধন খরচ হয়। তাই এর প্রধান নিয়ন্ত্রক এনজাইম CPS-I সক্রিয় হতে এন-অ্যাসিটাইলগ্লুটামেট (NAG) নামক একটি বিশেষ উদ্দীপকের উপস্থিতি বাধ্যতামূলক। NAG এনজাইমের সাথে যুক্ত না থাকলে CPS-I সম্পূর্ণ নিষ্ক্রিয় অবস্থায় থাকে।'
            ),
            l(
              'The synthesis of NAG is directly accelerated by the amino acid arginine. When a person eats a protein-rich meal, rising levels of arginine act as a direct feedforward alert that an avalanche of amino acid nitrogen is arriving. This stimulates NAG synthesis, switching on CPS-I and accelerating the urea cycle to handle the incoming nitrogen surge smoothly.',
              'অ্যামিনো অ্যাসিড আর্জিনিন সরাসরি NAG সংশ্লেষকে ত্বরান্বিত করে। যখন একজন ব্যক্তি প্রোটিনসমৃদ্ধ খাবার গ্রহণ করে, তখন রক্তে আর্জিনিনের বৃদ্ধি শরীরকে সংকেত দেয় যে প্রচুর নাইট্রোজেন বর্জ্য আসছে। এটি সাথে সাথে NAG তৈরি বাড়িয়ে CPS-I কে চালু করে দেয়, ফলে ইউরিয়া চক্র দ্রুত গতিতে কাজ শুরু করে রক্তকে বিষমুক্ত রাখে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Reasoning: Recognizing Ammonia Poisoning (Hyperammonemia)', 'মৌলিক যুক্তি: অ্যামোনিয়ার বিষাক্ততা (হাইপারঅ্যামোনেমিয়া) শনাক্তকরণ'),
          paragraphs: [
            l(
              'If the liver fails due to cirrhosis or an inherited genetic deficiency in a urea cycle enzyme, ammonia levels in the blood rise sharply (hyperammonemia). Ammonia easily crosses the blood-brain barrier and enters brain astrocytes, where it is converted into glutamine. The accumulation of osmotic glutamine pulls water into the brain, producing cerebral edema, confusion, flapping hand tremors (asterixis), and coma.',
              'লিভার সিরোসিস বা ইউরিয়া চক্রের কোনো এনজাইমের জন্মগত ত্রুটির কারণে যকৃৎ অকেজো হলে রক্তে অ্যামোনিয়া বিপজ্জনকভাবে বেড়ে যায় (হাইপারঅ্যামোনেমিয়া)। অ্যামোনিয়া রক্ত-মস্তিষ্ক বাধা অতিক্রম করে মস্তিষ্কের অ্যাস্ট্রোসাইটে ঢুকে গ্লুটামিনে পরিণত হয়। অতিরিক্ত গ্লুটামিন পানি টেনে মস্তিষ্কে সেরিব্রাল ইডিমা, হাত কাঁপুনি (অ্যাস্টেরিক্সিস) এবং কোমা সৃষ্টি করে।'
            ),
          ],
          bullets: [
            l('Normal blood ammonia is under 50 micromoles per liter; levels above 100 cause serious neurotoxicity.', 'রক্তে অ্যামোনিয়ার স্বাভাবিক মাত্রা ৫০ মাইক্রোমোল/লিটারের নিচে থাকে; ১০০ অতিক্রম করলে মারাত্মক বিষক্রিয়া হয়।'),
            l('Emergency treatment includes dietary protein restriction and drugs like lactulose and sodium phenylbutyrate.', 'জরুরি চিকিৎসায় প্রোটিন বন্ধ করা এবং ল্যাকটুলোজ ও সোডিয়াম ফিনাইলবিউটাইরেট ওষুধ প্রয়োগ করা হয়।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Foundational Takeaways & Summary', 'মূল শিক্ষণীয় বিষয় ও সংক্ষিপ্ত সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Amino acid catabolism strips nitrogen using vitamin B6-dependent aminotransferases, funneling waste into glutamate. The liver neutralizes toxic ammonia into water-soluble urea through the 5-step urea cycle spanning mitochondria and cytosol, powered by 4 ATP equivalents and regulated by N-acetylglutamate. The kidneys excrete the resulting urea into urine, maintaining whole-body nitrogen equilibrium.',
              'অ্যামিনো অ্যাসিড ভাঙনের সময় ভিটামিন বি৬-নির্ভর ট্রান্সঅ্যামিনেজ দিয়ে নাইট্রোজেন আলাদা করে গ্লুটামেটে রূপান্তর করা হয়। যকৃৎ ৪টি এটিপি খরচ করে এবং মাইটোকন্ড্রিয়া ও সাইটোসলের ৫-ধাপের ইউরিয়া চক্রের মাধ্যমে এই বিষাক্ত অ্যামোনিয়াকে ইউরিয়ায় পরিণত করে। পরিশেষে বৃক্ক এই ইউরিয়া মূত্রের মাধ্যমে বের করে দিয়ে মানবদেহের নাইট্রোজেন ভারসাম্য রক্ষা করে।'
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
          heading: l('Inter-Organ Nitrogen Economy & The Glucose-Alanine Cycle', 'আন্তঃ-অঙ্গ নাইট্রোজেন পরিবহন অর্থনীতি ও গ্লুকোজ-অ্যালানিন চক্র'),
          paragraphs: [
            l(
              'Human nitrogen economy requires delicate multi-organ coordination because, unlike carbohydrates and triglycerides, excess amino acids cannot be stored in a dedicated polymeric reservoir. In peripheral tissues, especially contracting skeletal muscle during fasting or prolonged exercise, branched-chain amino acids are transaminated, transferring amino groups onto pyruvate to form alanine via alanine aminotransferase (ALT). This Cahill cycle (glucose-alanine cycle) transports both carbon skeletons for hepatic gluconeogenesis and nitrogen for urea synthesis without releasing free neurotoxic ammonia into systemic circulation.',
              'মানবদেহে নাইট্রোজেনের বিপাকীয় ভারসাম্য রক্ষার জন্য একাধিক অঙ্গের সমন্বয় অপরিহার্য, কারণ শর্করা বা চর্বির মতো অতিরিক্ত অ্যামিনো অ্যাসিড জমা রাখার কোনো বিশেষ পলিমার ভাণ্ডার নেই। প্রান্তীয় কঙ্কালপেশিতে উপবাস বা পরিশ্রমের সময় ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিডের ভাঙন ঘটে এবং অ্যালানিন অ্যামিনোট্রান্সফারেজ (ALT) এনজাইম পাইরুভেটের সাথে অ্যামিনো গ্রুপ যুক্ত করে অ্যালানিন তৈরি করে। এই কাহিল চক্র (গ্লুকোজ-অ্যালানিন চক্র) রক্তে বিষাক্ত মুক্ত অ্যামোনিয়া না ছড়িয়ে নিরাপদে যকৃতে কার্বন ও নাইট্রোজেন উভয়ই পরিবহন করে।'
            ),
            l(
              'Non-hepatic extrahepatic tissues also utilize glutamine synthetase to condense free ammonium with glutamate in an ATP-dependent reaction, generating non-toxic, circulating glutamine. Glutamine serves as the primary neutral nitrogen carrier in blood plasma. Upon reaching the kidneys, renal glutaminase hydrolyzes glutamine to glutamate and free NH4+, which is directly secreted into the tubular lumen to buffer metabolic acids and conserve bicarbonate during systemic acidosis.',
              'যকৃতের বাইরের অন্যান্য কলাগুলো গ্লুটামিন সিন্থেটেজ এনজাইমের মাধ্যমে এটিপি খরচ করে বিষাক্ত অ্যামোনিয়ামকে গ্লুটামেটের সাথে যুক্ত করে নিরাপদ গ্লুটামিন তৈরি করে। এই গ্লুটামিন রক্তরসে প্রধান নাইট্রোজেন বাহক হিসেবে কাজ করে। বৃক্কে পৌঁছানোর পর গ্লুটামিনেজ এনজাইম গ্লুটামিনকে ভেঙে সরাসরি নালীতে অ্যামোনিয়াম আয়ন হিসেবে নির্গত করে, যা অম্ল দূর করে এবং মেটাবলিক অ্যাসিডোসিসের সময় বহুমূল্য বাইকার্বনেট সংরক্ষণ করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Enzymology of Transamination & Mitochondrial Glutamate Dehydrogenase', 'ট্রান্সঅ্যামিনেশন এনজাইমবিজ্ঞান ও মাইটোকন্ড্রিয়াল গ্লুটামেট ডিহাইড্রোজিনেজ'),
          paragraphs: [
            l(
              'Aminotransferases (transaminases) catalyze the reversible exchange of an amino group between an amino acid and an alpha-keto acid. Every aminotransferase relies on pyridoxal 5-prime-phosphate (PLP), the active coenzyme form of vitamin B6, covalently bound via an internal aldimine (Schiff base) linkage to the epsilon-amino group of an active-site lysine residue. The substrate amino acid displaces lysine, forming an external aldimine that undergoes quinonoid tautomerization and hydrolysis, releasing the corresponding alpha-keto acid while converting PLP to enzyme-bound pyridoxamine phosphate (PMP).',
              'অ্যামিনোট্রান্সফারেজ এনজাইমগুলো অ্যামিনো অ্যাসিড ও আলফা-কিটো অ্যাসিডের মধ্যে উভমুখী অ্যামিনো গ্রুপ বিনিময় সম্পন্ন করে। প্রতিটি ট্রান্সঅ্যামিনেজ ভিটামিন বি৬-এর সক্রিয় রূপ পাইরিডক্সাল ৫-ফসফেট (PLP) ব্যবহার করে, যা এনজাইমের লাইসিন অ্যামিনো অ্যাসিডের সাথে শিফ বেস বন্ধনে আবদ্ধ থাকে। বিক্রিয়ার সময় সাবস্ট্রেট অ্যামিনো অ্যাসিড লাইসিনকে প্রতিস্থাপন করে কিটোন তৈরি করে এবং PLP অস্থায়ীভাবে পিরিডক্সামিন ফসফেটে (PMP) রূপান্তরিত হয়ে দ্বিতীয় ধাপে আলফা-কিটোগ্লুটারেটে অ্যামিনো মূলক যুক্ত করে।'
            ),
            l(
              'Glutamate collected in the cytosol enters the mitochondrial matrix, where glutamate dehydrogenase (GDH) catalyzes its oxidative deamination to alpha-ketoglutarate, liberating free ammonium ion (NH4+). GDH is uniquely allosteric and can utilize either NAD+ (for oxidative catabolism in the matrix) or NADP+ (for reductive amination). GTP and ATP act as potent allosteric inhibitors reflecting high cellular energy charge, whereas ADP and free leucine act as allosteric activators, signaling a demand for carbon skeleton combustion through the citric acid cycle.',
              'সাইটোসল থেকে সংগৃহীত গ্লুটামেট মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে প্রবেশ করে, যেখানে গ্লুটামেট ডিহাইড্রোজিনেজ (GDH) জারণমূলক ডিঅ্যামিনেশন ঘটিয়ে মুক্ত অ্যামোনিয়াম আয়ন এবং আলফা-কিটোগ্লুটারেট তৈরি করে। GDH একটি অনন্য এনজাইম যা NAD+ ও NADP+ উভয়ই ব্যবহার করতে পারে। কোষের উচ্চ শক্তিতে জিটিপি ও এটিপি একে অবদমিত রাখে, আর শক্তির ঘাটতি বা লিউসিনের উপস্থিতি একে সক্রিয় করে টিসিএ চক্রের দিকে কার্বন সরবরাহ বাড়ায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Five Enzymatic Steps of the Hepatic Urea Cycle & The Krebs Bicycle', 'যকৃত ইউরিয়া চক্রের পাঁচটি এনজাইমীয় ধাপ ও ক্রেবস বাইসাইকেল সমন্বয়'),
          paragraphs: [
            l(
              'The urea cycle begins in the mitochondrial matrix with carbamoyl phosphate synthetase-I (CPS-I), which condenses free NH4+ and bicarbonate (HCO3-) using two molecules of ATP. Next, ornithine transcarbamoylase (OTC) transfers the carbamoyl moiety to ornithine, generating citrulline. Citrulline is exported to the cytosol via the ornithine/citrulline antiporter (ORNT1 / SLC25A15). In the cytosol, argininosuccinate synthetase (ASS) condenses citrulline with aspartate, hydrolyzing one ATP to AMP and pyrophosphate (PPi) to introduce the second nitrogen atom of urea.',
              'ইউরিয়া চক্রের সূচনা ঘটে মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে CPS-I এনজাইম দ্বারা, যা দুটি এটিপি খরচ করে অ্যামোনিয়াম ও বাইকার্বনেট যুক্ত করে কার্বামোয়েল ফসফেট তৈরি করে। এরপর OTC এনজাইম অর্নিথিনের সাথে কার্বামোয়েল মূলক যুক্ত করে সিট্রুলিন তৈরি করে, যা ORNT1 ট্রান্সপোর্টার দিয়ে সাইটোসলে স্থানান্তরিত হয়। সাইটোসলে আর্জিনিনোসাকসিনেট সিন্থেটেজ (ASS) সিট্রুলিন ও অ্যাসপার্টেট যুক্ত করে ইউরিয়ার দ্বিতীয় নাইট্রোজেনটি প্রবেশ করায় এবং এটিপি ভেঙে এএমপি তৈরি করে।'
            ),
            l(
              'Argininosuccinate lyase (ASL) cleaves argininosuccinate into arginine and fumarate. In the final step, arginase-1 (ARG1), a manganese-dependent cytosolic hydrolase expressed predominantly in periportal hepatocytes, cleaves arginine to yield urea and regenerate ornithine, which ORNT1 translocates back into mitochondria. The released fumarate is converted to malate by cytosolic fumarase and oxidized to oxaloacetate, which transaminates with glutamate to regenerate aspartate, creating the aspartate-argininosuccinate shunt (the Krebs bicycle) that links the urea cycle directly to the TCA cycle.',
              'আর্জিনিনোসাকসিনেট লাইয়েজ (ASL) এনজাইম আর্জিনিনোসাকসিনেটকে ভেঙে আর্জিনিন ও ফিউমারেট তৈরি করে। শেষ ধাপে সাইটোসলের আর্জিনেজ-১ (ARG1) এনজাইম আর্জিনিনকে আর্দ্রবিশ্লেষণ করে রক্তে নির্দোষ ইউরিয়া অবমুক্ত করে এবং অর্নিথিন তৈরি করে যা পুনরায় মাইটোকন্ড্রিয়ায় প্রবেশ করে। নির্গত ফিউমারেট ম্যালেট হয়ে অক্সালোঅ্যাসিটেটে রূপান্তরিত হয় এবং পুনরায় অ্যাসপার্টেট তৈরি করে ক্রেবস বাইসাইকেল সম্পন্ন করে, যা ইউরিয়া চক্রকে সরাসরি সাইট্রিক অ্যাসিড চক্রের সাথে যুক্ত রাখে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Allosteric Regulation by N-Acetylglutamate & Zonal Hepatic Architecture', 'এন-অ্যাসিটাইলগ্লুটামেট দ্বারা নিয়ন্ত্রণ ও যকৃতের জোনাল স্থাপত্য'),
          paragraphs: [
            l(
              'Carbamoyl phosphate synthetase-I has an absolute, obligate requirement for N-acetylglutamate (NAG) as an allosteric activator. NAG is synthesized in the mitochondrial matrix by N-acetylglutamate synthase (NAGS) from acetyl-CoA and glutamate. L-arginine serves as a direct allosteric feedforward activator of NAGS. Consequently, when dietary protein consumption increases or protein catabolism accelerates during prolonged fasting, elevated intrahepatic arginine dramatically boosts NAG synthesis, switching on CPS-I to clear amino acid nitrogen rapidly.',
              'CPS-I এনজাইমের কাজ করার জন্য এন-অ্যাসিটাইলগ্লুটামেট (NAG) অ্যালবস্টেরিক উদ্দীপক হিসেবে থাকা অপরিহার্য। মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে NAGS এনজাইম অ্যাসিটাইল-কোএ ও গ্লুটামেট থেকে NAG তৈরি করে। অ্যামিনো অ্যাসিড আর্জিনিন সরাসরি NAGS এনজাইমকে উদ্দীপ্ত করে। ফলে খাদ্য থেকে প্রোটিন গ্রহণের পর আর্জিনিনের মাত্রা বাড়লেই যকৃতে NAG তৈরি বৃদ্ধি পায় এবং CPS-I চালু হয়ে অতিরিক্ত নাইট্রোজেনকে দ্রুত শরীর থেকে বের করে দেয়।'
            ),
            l(
              'The liver exhibits sophisticated metabolic zonation to ensure zero ammonia escapes into systemic circulation. Periportal hepatocytes surrounding the incoming portal venule express high levels of low-affinity, high-capacity urea cycle enzymes and glutaminase, processing the bulk of incoming nitrogen. Downstream perivenous hepatocytes surrounding the central vein express high-affinity glutamine synthetase, acting as a scavenger mop that binds residual traces of ammonia to glutamate, ensuring that systemic arterial blood maintains an ammonia concentration below 35 micromolar.',
              'যকৃতের জোনাল গঠন রক্তে অ্যামোনিয়ার শূন্য নির্গমন নিশ্চিত করে। পোর্টাল শিরার নিকটবর্তী পেরিপরটাল হেপাটোসাইট কোষে প্রচুর ইউরিয়া চক্রের এনজাইম থাকে যা বিপুল পরিমাণ নাইট্রোজেন প্রক্রিয়াজাত করে। অন্যদিকে সেন্ট্রাল শিরার চারপাশের পেরিভেনাস কোষগুলোতে উচ্চ-আকর্ষণের গ্লুটামিন সিন্থেটেজ থাকে, যা বেঁচে যাওয়া সামান্য অ্যামোনিয়াকেও গ্লুটামিনের সাথে বেঁধে ফেলে রক্তে অ্যামোনিয়ার মাত্রা ৩৫ মাইক্রোমোলের নিচে রাখে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Inborn Errors: OTC Deficiency, Citrullinemia & Hyperammonemic Crisis', 'ইউরিয়া চক্রের বংশগত রোগ: OTC ঘাটতি, সিট্রুলিনেমিয়া ও হাইপারঅ্যামোনেমিয়া সংকট'),
          paragraphs: [
            l(
              'Inborn errors of the urea cycle present in neonates within 24 to 72 hours of initial protein feeding with lethargy, poor feeding, respiratory alkalosis (due to ammonia stimulation of the medullary respiratory center), vomiting, cerebral edema, and hypothermia. Ornithine transcarbamoylase (OTC) deficiency is the only X-linked disorder in the pathway (all others are autosomal recessive). In OTC deficiency, accumulated mitochondrial carbamoyl phosphate leaks into the cytosol, where it enters pyrimidine synthesis, resulting in massive urinary excretion of orotic acid alongside severe hyperammonemia and undetectable citrulline.',
              'ইউরিয়া চক্রের জন্মগত ত্রুটিযুক্ত নবজাতকদের প্রোটিন গ্রহণের ২৪ থেকে ৭২ ঘণ্টার মধ্যে নিস্তেজতা, বমি, রেস্পিরেটরি অ্যালকালসিস (শ্বাসনিয়ন্ত্রণ কেন্দ্রে অ্যামোনিয়ার উদ্দীপনায়), সেরিব্রাল ইডিমা এবং শরীরের তাপমাত্রা হ্রাস পায়। OTC ঘাটতি হলো একমাত্র এক্স-লিংকড রোগ (অন্যগুলো অটোসোমাল রিসেসিভ)। এতে অতিরিক্ত কার্বামোয়েল ফসফেট সাইটোসলে গিয়ে পিরিমিডিন তৈরি বাড়িয়ে দেয়, ফলে রক্তে মারাত্মক অ্যামোনিয়া বৃদ্ধির সাথে প্রস্রাবে প্রচুর ওরোティック অ্যাসিড নির্গত হয়।'
            ),
            l(
              'In contrast, deficiency of carbamoyl phosphate synthetase-I (CPS-I) produces profound hyperammonemia with low or absent plasma citrulline and normal urinary orotic acid. Deficiencies of argininosuccinate synthetase (Citrullinemia Type I) and argininosuccinate lyase (Argininosuccinic aciduria) display markedly elevated citrulline. Emergency medical management includes stopping all dietary protein, intravenous dextrose to suppress catabolism, hemodialysis for ammonia > 500 uM, and intravenous nitrogen scavenger drugs: sodium benzoate (clears nitrogen via hippurate) and sodium phenylacetate / phenylbutyrate (clears nitrogen via phenylacetylglutamine).',
              'বিপরীতভাবে, CPS-I ঘাটতিতে মারাত্মক হাইপারঅ্যামোনেমিয়া হলেও প্রস্রাবে ওরোティック অ্যাসিড স্বাভাবিক থাকে এবং সিট্রুলিন পাওয়া যায় না। সিট্রুলিনেমিয়া টাইপ ১-এ রক্তে সিট্রুলিন অস্বাভাবিক বেড়ে যায়। জরুরি চিকিৎসায় প্রোটিন সম্পূর্ণ বন্ধ করা, ডেক্সট্রোজ স্যালাইন দেওয়া, অ্যামোনিয়া ৫০০ এর বেশি হলে হিমোডায়ালাইসিস এবং নাইট্রোজেন নিষ্কাশনকারী ওষুধ যেমন সোডিয়াম বেনজোয়েট ও সোডিয়াম ফিনাইলবিউটাইরেট প্রয়োগ করা হয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Takeaways & Stoichiometric Principles of Nitrogen Disposal', 'একাডেমিক সারাংশ ও নাইট্রোজেন অপসারণের রাসায়নিক শক্তিনীতি'),
          paragraphs: [
            l(
              'The urea cycle is an essential metabolic circuit neutralizing toxic ammonia into water-soluble urea at the thermodynamic cost of four high-energy phosphate bonds per molecule. Partitioned between the mitochondrial matrix (CPS-I, OTC) and cytosol (ASS, ASL, ARG1), the cycle is allosterically governed by N-acetylglutamate in response to arginine availability. Cross-talk with the citric acid cycle via the fumarate shunt couples nitrogen disposal tightly to cellular bioenergetics.',
              'ইউরিয়া চক্র হলো একটি অত্যাবশ্যকীয় বিপাকীয় পথ যা প্রতি অণু ইউরিয়া তৈরিতে চারটি উচ্চ-শক্তি ফসফেট বন্ধন খরচ করে বিষাক্ত অ্যামোনিয়াকে ইউরিয়াতে রূপান্তর করে। মাইটোকন্ড্রিয়া ও সাইটোসলের মাঝে বিভক্ত এই চক্রটি আর্জিনিনের উপস্থিতিতে এন-অ্যাসিটাইলগ্লুটামেট দ্বারা সূক্ষ্মভাবে নিয়ন্ত্রিত হয়। ফিউমারেট শান্টের মাধ্যমে সাইট্রিক অ্যাসিড চক্রের সাথে এর সংযোগ নাইট্রোজেন অপসারণকে সরাসরি কোষীয় শক্তির সাথে যুক্ত রাখে।'
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
          heading: l('Neurochemical Pathogenesis: Astrocyte Swelling, Glutamine & Brain Herniation', 'স্নায়ুরাসায়নিক প্যাথোজেনেসিস: অ্যাস্ট্রোসাইটের ফোলাভাব ও সেরিব্রাল হার্নিয়েশন'),
          paragraphs: [
            l(
              'The extreme neurotoxicity of hyperammonemia centers on cerebral astrocytic metabolism. Astrocytes are the only cells in the brain that express glutamine synthetase. Lipophilic gaseous NH3 crosses the blood-brain barrier and is coupled to glutamate, forming intracellular glutamine. Accumulation of glutamine generates an osmotic gradient that pulls water into astrocytes, producing cytotoxic astrocyte swelling, mitochondrial permeability transition pore (mPTP) opening, reactive oxygen species generation, loss of glutamate reuptake transporters (EAAT2 / GLT-1), and fatal cerebral edema leading to uncal herniation.',
              'হাইপারঅ্যামোনেমিয়ার মারাত্মক স্নায়বিক ক্ষতি প্রধানত মস্তিষ্কের অ্যাস্ট্রোসাইট কোষে ঘটে। মস্তিষ্কে কেবল অ্যাস্ট্রোসাইটেই গ্লুটামিন সিন্থেটেজ থাকে। চর্বিদ্রাব্য অ্যামোনিয়া গ্যাস রক্ত-মস্তিষ্ক বাধা পেরিয়ে কোষে ঢুকে গ্লুটামিন তৈরি করে। কোষে গ্লুটামিন জমা হওয়ায় তা বাইরে থেকে পানি টেনে অ্যাস্ট্রোসাইটকে ফুলিয়ে দেয়, মাইটোকন্ড্রিয়া নষ্ট করে এবং গ্লুটামেট শোষণ বন্ধ করে মারাত্মক সেরিব্রাল ইডিমা ও প্রাণঘাতী আনকাল হার্নিয়েশন ঘটায়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Translational Therapeutics: Gene Therapy & mRNA Replacement for Urea Cycle Defects', 'আধুনিক চিকিৎসা গবেষণা: জিন থেরাপি ও এমআরএনএ প্রতিস্থাপন'),
          paragraphs: [
            l(
              'While liver transplantation historically represented the sole definitive curative option for severe neonatal urea cycle disorders, clinical trials utilizing adeno-associated virus (AAV) serotype 8/9 vectors delivering human OTC or CPS1 cDNAs have demonstrated sustained phenotypic correction in animal models. Furthermore, lipid nanoparticle (LNP)-formulated modified mRNA encoding human arginase-1 or OTC is currently undergoing Phase 1/2 clinical trials, enabling hepatocytes to express functional enzymes transiently and rescue patients from hyperammonemic crises without permanent genomic integration.',
              'পূর্বে মারাত্মক ইউরিয়া চক্রের জন্মগত রোগে কেবল যকৃৎ প্রতিস্থাপনই একমাত্র স্থায়ী সমাধান ছিল; কিন্তু বর্তমানে অ্যাডেনো-অ্যাসোসিয়েটেড ভাইরাস (AAV) ভেক্টর দিয়ে মানবদেহের OTC জিন প্রতিস্থাপনে পশুদেহে দীর্ঘস্থায়ী সাফল্য পাওয়া গেছে। অধিকন্তু, লিপিড ন্যানোপার্টিকেল (LNP) প্রযুক্তিতে তৈরি আর্জিনেজ-১ ও OTC-র এমআরএনএ থেরাপির ক্লিনিক্যাল ট্রায়াল চলছে, যা হেপাটোসাইটে কার্যকর এনজাইম তৈরি করে জিন পরিবর্তন ছাড়াই রোগীকে তাৎক্ষণিক মৃত্যুর হাত থেকে রক্ষা করছে।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'A metabolic map detailing the inter-organ transport of amino acid nitrogen via alanine and glutamine to the liver, the mitochondrial entry through CPS-I and OTC to citrulline, cytosolic elongation via ASS and ASL to arginine, and hydrolysis by arginase-1 releasing urea for renal excretion.',
      'অ্যালানিন ও গ্লুটামিনের মাধ্যমে যকৃতে নাইট্রোজেন পরিবহন, CPS-I ও OTC দ্বারা মাইটোকন্ড্রিয়ায় সিট্রুলিন গঠন, ASS ও ASL দিয়ে সাইটোসলে আর্জিনিন সংশ্লেষ এবং আর্জিনেজ-১ দ্বারা ইউরিয়া অবমুক্তির সম্পূর্ণ জৈবরাসায়নিক নকশা।'
    ),
    steps: [
      l('Transaminases funnel amino groups to glutamate; peripheral muscle exports alanine.', 'ট্রান্সঅ্যামিনেজ অ্যামিনো মূলক গ্লুটামেটে পাঠায় এবং কঙ্কালপেশি অ্যালানিন রক্তে ছাড়ে।'),
      l('CPS-I consumes 2 ATP to form carbamoyl phosphate inside mitochondria in the presence of NAG.', 'NAG-এর উপস্থিতিতে CPS-I ২টি এটিপি খরচ করে মাইটোকন্ড্রিয়ায় কার্বামোয়েল ফসফেট তৈরি করে।'),
      l('OTC synthesizes citrulline, which is transported to the cytosol for aspartate addition.', 'OTC এনজাইম সিট্রুলিন তৈরি করে, যা সাইটোসলে এসে অ্যাসপার্টেটের সাথে যুক্ত হয়।'),
      l('Arginase-1 cleaves arginine to release nontoxic urea into the blood for kidney filtration.', 'আর্জিনেজ-১ আর্জিনিন কেটে নির্দোষ ইউরিয়া মুক্ত করে, যা বৃক্কে গিয়ে মূত্রে ছাঁকা হয়।'),
    ],
  },
  assessment: {
    question: l(
      'A 3-day-old male infant presents with progressive lethargy, hypothermia, tachypnea, and vomiting. Laboratory tests reveal a blood ammonia of 640 micromoles/L (normal < 50), blood pH of 7.52, undetectable plasma citrulline, and marked urinary excretion of orotic acid. Which enzymatic defect is the primary cause of this presentation?',
      '৩ দিন বয়সী এক ছেলে শিশুর তীব্র নিস্তেজতা, বমি ও শ্বাসকষ্ট দেখা দেয়। পরীক্ষায় রক্তে অ্যামোনিয়া ৬৪০ মাইক্রোমোল/লিটার, পিএইচ ৭.৫২, রক্তে সিট্রুলিন অনুপস্থিত এবং প্রস্রাবে প্রচুর ওরোティック অ্যাসিড পাওয়া গেল। কোন এনজাইমের জন্মগত ত্রুটি এই লক্ষণগুলোর মূল কারণ?'
    ),
    options: [
      l(
        'Ornithine transcarbamoylase (OTC) deficiency (X-linked defect shunting carbamoyl phosphate to orotic acid).',
        'অর্নিথিন ট্রান্সকার্বামোইলেজ (OTC) ঘাটতি (এক্স-লিংকড ত্রুটি যার কারণে অতিরিক্ত কার্বামোয়েল ফসফেট ওরোティック অ্যাসিডে পরিণত হয়)।'
      ),
      l(
        'Carbamoyl phosphate synthetase-I (CPS-I) deficiency (inability to synthesize mitochondrial carbamoyl phosphate).',
        'কার্বামোয়েল ফসফেট সিন্থেজ-১ (CPS-I) ঘাটতি (মাইটোকন্ড্রিয়ায় কার্বামোয়েল ফসফেট তৈরিতে সম্পূর্ণ অক্ষমতা)।'
      ),
      l(
        'Arginase-1 deficiency (failure to hydrolyze arginine in the cytosol).',
        'আর্জিনেজ-১ ঘাটতি (সাইটোসলে আর্জিনিন ভেঙে ইউরিয়া মুক্ত করতে অক্ষমতা)।'
      ),
      l(
        'Glutamate dehydrogenase deficiency (failure of oxidative deamination in the liver).',
        'গ্লুটামেট ডিহাইড্রোজিনেজ ঘাটতি (যকৃতে জারণমূলক ডিঅ্যামিনেশন সম্পন্ন করতে অক্ষমতা)।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'The combination of severe neonatal hyperammonemia, respiratory alkalosis (hyperventilation from brainstem stimulation), undetectable citrulline, and massive urinary orotic acid is diagnostic of OTC deficiency. When OTC is defective, accumulated mitochondrial carbamoyl phosphate spills into the cytoplasm and enters pyrimidine synthesis (CAD), producing high levels of orotic acid. In CPS-I deficiency, carbamoyl phosphate is never synthesized, so orotic acid remains low.',
      'তীব্র হাইপারঅ্যামোনেমিয়া, রেস্পিরেটরি অ্যালকালসিস, রক্তে সিট্রুলিনের অনুপস্থিতি এবং প্রস্রাবে প্রচুর ওরোティック অ্যাসিড নির্গমন নিশ্চিতভাবে OTC ঘাটতি নির্দেশ করে। OTC নষ্ট থাকলে মাইটোকন্ড্রিয়ায় জমা হওয়া কার্বামোয়েল ফসফেট সাইটোপ্লাজমে ছড়িয়ে পড়ে এবং পিরিমিডিন সংশ্লেষের মাধ্যমে প্রচুর ওরোティック অ্যাসিড বানায়। অপরদিকে CPS-I ঘাটতিতে কার্বামোয়েল ফসফেট তৈরিই হয় না, তাই ওরোティック অ্যাসিড বাড়ে না।'
    ),
  },
}
