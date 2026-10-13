import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const lactateRefs = [
  {
    id: 'brooks-lactate-shuttle-2018',
    authors: 'George A. Brooks',
    title: 'The Science and Translation of Lactate Shuttle Theory. Cell Metabolism, 27(4):757-785',
    organization: 'Elsevier / Cell Press',
    year: 2018,
    url: 'https://pubmed.ncbi.nlm.nih.gov/29617642/',
  },
  {
    id: 'lehninger-biochem-8e-ch14',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 14: Glycolysis, Gluconeogenesis, and the Pentose Phosphate Pathway',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'magistretti-anls-2015',
    authors: 'Pierre J. Magistretti, Igor Allaman',
    title: 'A cellular perspective on brain energy metabolism and functional imaging. Neuron, 86(4):883-901',
    organization: 'Elsevier / Cell Press',
    year: 2015,
    url: 'https://pubmed.ncbi.nlm.nih.gov/25996133/',
  },
  {
    id: 'krazer-lactic-acidosis-2014',
    authors: 'Jeffrey A. Kraut, Nicolaos E. Madias',
    title: 'Lactic Acidosis. New England Journal of Medicine, 371(24):2309-2319',
    organization: 'Massachusetts Medical Society / NEJM',
    year: 2014,
    url: 'https://pubmed.ncbi.nlm.nih.gov/25494270/',
  },
  {
    id: 'harpers-biochem-32e-ch19',
    authors: 'Victor W. Rodwell, David A. Bender, Kathleen M. Botham, Peter J. Kennelly, P. Anthony Weil',
    title: "Harper's Illustrated Biochemistry, 32nd edition, Chapter 19: Gluconeogenesis and the Control of Blood Glucose",
    organization: 'McGraw-Hill Education',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
]

const lactate3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Inter-Tissue Lactate & Alanine Shuttles',
    '৩ডি বহু-অঙ্গীয় আন্তঃটিস্যু ল্যাকটেট ও অ্যালানিন শাটলের মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and explore coordinate space to trace how George Brooks Lactate Shuttle and the Cori/Cahill cycles connect skeletal muscle, liver, myocardium, and brain.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে জর্জ ব্রুকসের ল্যাকটেট শাটল এবং কোরি/কাহিল চক্র কঙ্কালপেশি, যকৃৎ, হৃদপিণ্ড ও মস্তিষ্কের শক্তি বিনিময় পরিচালনা করে।'
  ),
  description: l(
    'Lactate is not a waste product or dead-end fatigue toxin, but the primary circulating energetic fuel and signaling intermediate of human aerobic metabolism: white skeletal muscle exports lactate and alanine during contraction; the liver recycles them via the Cori cycle (6 ATP cost) and Glucose-Alanine cycle; the heart consumes lactate voraciously as its preferred oxidative fuel; while astrocytes shuttle lactate to neurons to fuel cognitive memory consolidation.',
    'ল্যাকটেট কোনো বর্জ্য বা বিষাক্ত পদার্থ নয়, বরং মানবদেহের বায়বীয় বিপাকের প্রধান সঞ্চালনশীল জ্বালানি ও সংকেত অণু: কঙ্কালপেশি ব্যায়ামের সময় ল্যাকটেট ও অ্যালানিন বের করে; যকৃৎ কোরি চক্র ও গ্লুকোজ-অ্যালানিন চক্রের মাধ্যমে তা পুনরায় গ্লুকোজে রূপান্তর করে; হৃৎপিণ্ড একে প্রধান জ্বালানি হিসেবে পুড়িয়ে শক্তি পায়; আর মস্তিষ্কের অ্যাস্ট্রোসাইট কোষ নিউরনকে শক্তি জোগাতে ল্যাকটেট সরবরাহ করে।'
  ),
  organs: [
    {
      id: 'organ-muscle-lactate',
      name: l('Skeletal Muscle (Glycolytic Lactate & Alanine Generator)', 'কঙ্কালপেশি (গ্লাইকোলাইটিক ল্যাকটেট ও অ্যালানিন উৎপাদক)'),
      latinName: 'Musculus Sceleti',
      system: l('Musculoskeletal & Locomotor System', 'পেশিকঙ্কাল ও চলন তন্ত্র'),
      cavity: l('Peripheral Somatic Mass', 'প্রান্তীয় দৈহিক কাঠামো'),
      position3D: { x: 26, y: 152, z: 0 },
      color: '#e11d48',
      highlightColor: '#fb7185',
      shapeType: 'skeleton',
      description: l(
        'Expresses M4-LDH (LDH-5) and the low-affinity, high-capacity monocarboxylate transporter MCT4 (SLC16A3). During vigorous contraction, rapid glycolysis produces lactate and alanine, exporting them into the bloodstream to clear protons and nitrogen.',
        'M4-LDH (LDH-5) এবং উচ্চ-ক্ষমতাসম্পন্ন MCT4 বাহক ধারণ করে। তীব্র ব্যায়ামের সময় দ্রুত গ্লাইকোলাইসিস চালিয়ে ল্যাকটেট ও অ্যালানিন তৈরি করে রক্তে ছেড়ে দেয় যাতে পেশিকোষ অম্লতা ও ক্ষতিকর নাইট্রোজেন থেকে মুক্ত থাকে।'
      ),
      spatialRelations: l(
        'Extensive peripheral vascularization drains venous return containing lactate directly into the inferior and superior vena cava for systemic distribution.',
        'প্রচুর রক্তনালী দ্বারা পরিবেষ্টিত যা পেশির শিরাস্থ রক্তের মাধ্যমে উৎপন্ন ল্যাকটেটকে সরাসরি হৃদপিণ্ড ও যকৃতে পৌঁছে দেয়।'
      ),
      physiology: l(
        'Pyruvate is transaminated with glutamate by Alanine Aminotransferase (ALT) to alanine, safely packaging ammonia for hepatic transport without free ammonium toxicity.',
        'অ্যালানিন অ্যামিনোট্রান্সফারেজ (ALT) এনজাইম পাইরুভেটকে অ্যালানিনে পরিণত করে, যার ফলে বিষাক্ত অ্যামোনিয়া নিরাপদে যকৃতে পৌঁছাতে পারে।'
      ),
      nutritionConnection: l(
        'Branched-chain amino acids (BCAAs: leucine, isoleucine, valine) donate their amino groups to alpha-ketoglutarate, fueling the continuous generation of alanine.',
        'খাদ্যের ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিডগুলো তাদের নাইট্রোজেন দান করে পেশিতে এই অ্যালানিন তৈরিতে সাহায্য করে।'
      ),
      clinicalSignificance: l(
        'During maximal exercise, muscle lactate production can surge to >30 mmol/L, yet tissue fatigue is driven by inorganic phosphate and H+ accumulation, not lactate per se.',
        'তীব্র পরিশ্রমে রক্তে ল্যাকটেট ৩০ mmol/L পর্যন্ত উঠতে পারে; তবে পেশির ক্লান্তির জন্য ল্যাকটেট নয়, বরং অজৈব ফসফেট ও অম্লতা দায়ী।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-liver-cori',
      name: l('Liver (The Cori Cycle & Cahill Glucose-Alanine Siphon)', 'যকৃৎ (কোরি চক্র ও কাহিল গ্লুকোজ-অ্যালানিন সাইফন)'),
      latinName: 'Hepar',
      system: l('Hepatobiliary & Gluconeogenic Hub', 'যকৃৎ-পিত্ত ও গ্লুকোজ তৈরির কেন্দ্র'),
      cavity: l('Right Upper Abdominal Quadrant', 'ডান ঊর্ধ্ব উদর গহ্বর'),
      position3D: { x: 12, y: 200, z: 0 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'The energetic clearinghouse of peripheral lactate and alanine. Converts lactate to pyruvate via LDH-5 and converts alanine via ALT, funneling both into hepatic gluconeogenesis to regenerate free glucose.',
        'প্রান্তীয় ল্যাকটেট ও অ্যালানিনের প্রধান শোধনাগার। LDH-5 দ্বারা ল্যাকটেট এবং ALT দ্বারা অ্যালানিনকে পাইরুভেটে পরিণত করে গ্লুকোনিওজেনেসিসের মাধ্যমে পুনরায় রক্তে গ্লুকোজ সরবরাহ করে।'
      ),
      spatialRelations: l(
        'Receives dual blood supply from portal vein and hepatic artery, clearance of systemic circulating lactate accounts for 50–70% of whole-body lactate disposal.',
        'দ্বৈত রক্ত সরবরাহ লাভ করে এবং সারা শরীরের মোট ল্যাকটেটের ৫০-৭০% একা যকৃৎ পরিষ্কার করে নতুন গ্লুকোজ তৈরি করে।'
      ),
      physiology: l(
        'Consumes exactly 6 high-energy phosphate bonds (4 ATP + 2 GTP) to convert 2 lactate molecules into 1 glucose molecule, powered by beta-oxidation of fatty acids.',
        'দুই অণু ল্যাকটেট থেকে এক অণু গ্লুকোজ তৈরি করতে যকৃৎকে ঠিক ৬টি উচ্চ-শক্তি ফসফেট (৪টি ATP + ২টি GTP) খরচ করতে হয়, যা চর্বি জারণ থেকে আসে।'
      ),
      nutritionConnection: l(
        'Alanine nitrogen stripped by hepatic ALT is channeled directly into carbamoyl phosphate synthetase I (CPS-I) to feed the urea cycle for nontoxic excretion.',
        'অ্যালানিন থেকে আলাদা হওয়া নাইট্রোজেন সরাসরি ইউরিয়া চক্রে প্রবেশ করে মূত্রের মাধ্যমে নিরাপদে শরীর থেকে বের হয়ে যায়।'
      ),
      clinicalSignificance: l(
        'In severe end-stage liver failure, loss of hepatic gluconeogenic lactate clearance leads rapidly to profound, life-threatening Type B1 lactic acidosis.',
        'লিভার ফেইলিউরের রোগীদের যকৃৎ ল্যাকটেট পরিষ্কার করতে না পারায় রক্তে মারাত্মক মাত্রায় ল্যাকটেট জমে টাইপ B1 ল্যাকটিক অ্যাসিডোসিস সৃষ্টি হয়।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-heart-lactate',
      name: l('Heart (Voracious Lactate Consumer & H4-LDH Oxidation)', 'হৃৎপিণ্ড (তীব্র ল্যাকটেট ভোক্তা ও H4-LDH জারণ)'),
      latinName: 'Cor',
      system: l('Cardiovascular & Aerobic Engine', 'সংবহন ও বায়বীয় শক্তি ইঞ্জিন'),
      cavity: l('Middle Mediastinum', 'মধ্য মিডিয়াস্টিনাম'),
      position3D: { x: -4, y: 228, z: 8 },
      color: '#0284c7',
      highlightColor: '#38bdf8',
      shapeType: 'heart',
      description: l(
        'Contains pure H4-LDH (LDH-1) and high-affinity MCT1 (SLC16A1). Rather than producing lactate, the human myocardium takes up circulating lactate avidly, extracting up to 60% of circulating lactate during exercise.',
        'বিশুদ্ধ H4-LDH (LDH-1) এবং উচ্চ-আসক্তির MCT1 বাহক ধারণ করে। ল্যাকটেট তৈরি করার বদলে হৃদপেশি রক্ত থেকে ল্যাকটেট চুষে নেয় এবং ব্যায়ামের সময় এর ৬০% শক্তি ল্যাকটেট থেকে পায়।'
      ),
      spatialRelations: l(
        'Pumps constantly within the pericardial sac, demanding continuous oxidative substrate flux with zero tolerance for ischemic hypoxia.',
        'পেরিকার্ডিয়াল থলির ভেতর অবিরাম পাম্প করে চলে এবং অক্সিজেন সমৃদ্ধ ল্যাকটেটকে পুড়িয়ে বিপুল পরিমাণ শক্তি উৎপাদন করে।'
      ),
      physiology: l(
        'LDH-1 has a very low Km for lactate and is allosterically inhibited by pyruvate, ensuring that incoming lactate is immediately oxidized to pyruvate and routed directly into the citric acid cycle.',
        'LDH-1 এনজাইম ল্যাকটেট গ্রহণ করে সাথে সাথে সাইট্রিক অ্যাসিড চক্রে পাঠিয়ে দেয় এবং প্রচুর এটিপি তৈরি করে।'
      ),
      nutritionConnection: l(
        'Spares precious myocardial glycogen reserves during heavy exertion by consuming circulating muscle-derived lactate.',
        'কঙ্কালপেশি থেকে আসা ল্যাকটেটকে পুড়িয়ে হৃদপেশি নিজের গ্লাইকোজেন সঞ্চয়কে অক্ষত রেখে দীর্ঘক্ষণ কাজ চালিয়ে যেতে পারে।'
      ),
      clinicalSignificance: l(
        'Serum LDH isozyme electrophoretic pattern showing "LDH flip" (LDH-1 > LDH-2) was historically a diagnostic hallmark of acute myocardial infarction.',
        'রক্তের সিরামে LDH-1 এর মাত্রা LDH-2 এর চেয়ে বেড়ে যাওয়া (LDH ফ্লিপ) মায়োকার্ডিয়াল ইনফার্কশন বা হার্ট অ্যাটাকের সনাতন ল্যাবরেটরি নির্দেশক।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-brain-anls',
      name: l('Brain (Astrocyte-Neuron Lactate Shuttle & Cognitive Memory)', 'মস্তিষ্ক (অ্যাস্ট্রোসাইট-নিউরন ল্যাকটেট শাটল ও স্মৃতি সংরক্ষণ)'),
      latinName: 'Encephalon',
      system: l('Central Nervous System & Cognition', 'কেন্দ্রীয় স্নায়ুতন্ত্র ও জ্ঞানীয় ব্যবস্থা'),
      cavity: l('Cranial Vault', 'করোটি গহ্বর'),
      position3D: { x: 0, y: 310, z: 0 },
      color: '#8b5cf6',
      highlightColor: '#a78bfa',
      shapeType: 'brain',
      description: l(
        'Under the Astrocyte-Neuron Lactate Shuttle (ANLS) model of Pierre Magistretti, astrocytes end-feet take up glucose, perform aerobic glycolysis to produce lactate, and export it via MCT4/MCT1 to neurons, which express MCT2 and LDH-1.',
        'ম্যাজিস্ট্রেটির ANLS মডেল অনুসারে অ্যাস্ট্রোসাইট কোষ গ্লুকোজ গ্রহণ করে ল্যাকটেট তৈরি করে এবং তা নিউরনে পাঠায়, যা নিউরন জ্বালানি হিসেবে পুড়িয়ে মস্তিষ্কের কার্যক্ষমতা চালায়।'
      ),
      spatialRelations: l(
        'Astrocytic end-feet envelop 99% of cerebral capillary endothelial walls, perfectly positioned as the metabolic gateway between blood glucose and neuronal synapses.',
        'অ্যাস্ট্রোসাইটের প্রান্তগুলো মস্তিষ্কের রক্তনালীর প্রাচীরকে ঘিরে থাকে এবং রক্ত থেকে পুষ্টি গ্রহণ করে সরাসরি নিউরনের সাইন্যাপসে পৌঁছে দেয়।'
      ),
      physiology: l(
        'Glutamate released during synaptic transmission is taken up by astrocytes via GLT-1 with 3 Na+; the resultant Na+/K+-ATPase activation triggers astrocytic glycolysis and lactate export.',
        'স্নায়বিক সংকেত বিনিময়ের সময় নির্গত গ্লুটামেট অ্যাস্ট্রোসাইটে ঢুকলেই কোষটি দ্রুত গ্লাইকোলাইসিস চালিয়ে নিউরনের ব্যবহারের জন্য ল্যাকটেট তৈরি করে।'
      ),
      nutritionConnection: l(
        'Lactate serves not only as fuel, but acts as a signaling molecule via HCAR1 (GPR81) receptors, stimulating brain-derived neurotrophic factor (BDNF) expression.',
        'ল্যাকটেট কেবল জ্বালানি নয়, এটি রিসেপ্টরের মাধ্যমে সংকেত পাঠিয়ে মস্তিষ্কের বৃদ্ধি ও নতুন নিউরন তৈরিতে উদ্দীপনা যোগায়।'
      ),
      clinicalSignificance: l(
        'Pharmacological blockade of astrocytic MCT4 or neuronal MCT2 completely impairs long-term memory formation and consolidation in animal models.',
        'অ্যাস্ট্রোসাইটের MCT4 বা নিউরনের MCT2 বাহক অবরুদ্ধ করলে দীর্ঘমেয়াদী স্মৃতি সংরক্ষণ ক্ষমতা পুরোপুরি নষ্ট হয়ে যায়।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism23LactateShuttleCoriLesson: LessonTopic = {
  id: 'topic.metabolism.lactate-cori-glucose-alanine',
  slug: 'lactate-cori-glucose-alanine',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '23 · Lactate Metabolism, Cori Cycle & Glucose–Alanine Cycle',
    '২৩ · ল্যাকটেট বিপাক, কোরি চক্র ও গ্লুকোজ-অ্যালানিন চক্র'
  ),
  summary: l(
    'The paradigm shift in lactate bioenergetics: George Brooks Lactate Shuttle Hypothesis (intracellular and cell-cell shuttles), Monocarboxylate Transporters (MCT1 and MCT4), mitochondrial lactate oxidation complexes (mLOC), hepatic Cori cycle stoichiometry (6 ATP cost), the Cahill Glucose-Alanine cycle for safe nitrogen carriage, cytosolic redox telemetry via the lactate/pyruvate ratio, and clinical differentiation of Type A versus Type B lactic acidosis.',
    'ল্যাকটেট জৈবশক্তিবিজ্ঞানের আধুনিক রূপরেখা: জর্জ ব্রুকসের ল্যাকটেট শাটল তত্ত্ব (আন্তঃকোষীয় ও কোষ-কোষ শাটল), মনোকার্বক্সাইলেট বাহক (MCT1 ও MCT4), মাইটোকন্ড্রিয়াল ল্যাকটেট জারণ কমপ্লেক্স (mLOC), যকৃতের কোরি চক্রের স্টোইকিওমেট্রি (৬টি এটিপি ব্যয়), নিরাপদ নাইট্রোজেন পরিবহনে কাহিল গ্লুকোজ-অ্যালানিন চক্র, ল্যাকটেট/পাইরুভেট অনুপাত দ্বারা সাইটোসোলিক রেডক্স পরিমাপ এবং টাইপ এ বনাম টাইপ বি ল্যাকটিক অ্যাসিডোসিসের ক্লিনিক্যাল বিশ্লেষণ।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Contrast the historical "dead-end waste product" view of lactate with modern Lactate Shuttle Theory, detailing how Monocarboxylate Transporters (MCT1 and MCT4) and the Mitochondrial Lactate Oxidation Complex (mLOC) mediate intracellular and inter-organ fuel exchange.',
      'ল্যাকটেট সম্পর্কে সনাতন "বর্জ্য পদার্থ" ধারণার সাথে আধুনিক ল্যাকটেট শাটল তত্ত্বের পার্থক্য নিরূপণ করা এবং MCT1, MCT4 ও মাইটোকন্ড্রিয়াল ল্যাকটেট জারণ কমপ্লেক্স (mLOC) কীভাবে আন্তঃটিস্যু জ্বালানি বিনিময় সম্পন্ন করে তা ব্যাখ্যা করা।'
    ),
    l(
      'Calculate the exact stoichiometric energy balance and nitrogen carriage of the hepatic Cori cycle versus the Glucose-Alanine (Cahill) cycle, explaining why peripheral lactate costs the liver 6 ATP per glucose returned while alanine simultaneously feeds the urea cycle.',
      'যকৃতের কোরি চক্র এবং গ্লুকোজ-অ্যালানিন (কাহিল) চক্রের সঠিক শক্তি ব্যয় ও নাইট্রোজেন পরিবহন স্টোইকিওমেট্রি হিসাব করা এবং ব্যাখ্যা করা কেন ল্যাকটেট রূপান্তরে যকৃতে ৬টি এটিপি খরচ হয় এবং কীভাবে অ্যালানিন ইউরিয়া চক্রকে সচল রাখে।'
    ),
    l(
      'Differentiate clinically between Type A lactic acidosis (tissue hypoperfusion/hypoxia) and Type B lactic acidosis (non-hypoxic/metformin/toxin/mitochondrial/malignancy), utilizing the serum Lactate/Pyruvate (L/P) ratio to assess cytosolic free [NAD+]/[NADH] redox balance.',
      'টাইপ এ ল্যাকটিক অ্যাসিডোসিস (টিস্যু হাইপোক্সিয়া/শক) এবং টাইপ বি ল্যাকটিক অ্যাসিডোসিস (মেটফরমিন/লিভার ফেইলিউর/ক্যান্সার)-এর মধ্যে ক্লিনিক্যাল পার্থক্য নির্ণয় করা এবং সিরাম ল্যাকটেট/পাইরুভেট অনুপাত ব্যবহার করে কোষীয় রেডক্স ভারসাম্য মূল্যায়ন করা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  references: lactateRefs,
  evidenceBySection: {
    introduction: ['brooks-lactate-shuttle-2018', 'lehninger-biochem-8e-ch14'],
    structure: ['brooks-lactate-shuttle-2018', 'harpers-biochem-32e-ch19'],
    mechanism: ['brooks-lactate-shuttle-2018', 'magistretti-anls-2015'],
    integration: ['lehninger-biochem-8e-ch14', 'harpers-biochem-32e-ch19'],
    practice: ['krazer-lactic-acidosis-2014', 'brooks-lactate-shuttle-2018'],
    takeaways: ['brooks-lactate-shuttle-2018', 'krazer-lactic-acidosis-2014'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Paradigm Shift: Deconstructing the Lactate Myth', '১. দৃষ্টিভঙ্গির পরিবর্তন: ল্যাকটেট ধারণার আধুনিকায়ন'), sectionId: 'introduction' },
      { id: 'sec-shuttle', label: l('2. The Lactate Shuttle Hypothesis & MCT Transporters', '২. ল্যাকটেট শাটল তত্ত্ব ও এমসিটি বাহক পরিবার'), sectionId: 'structure' },
      { id: 'sec-cori-cahill', label: l('3. Stoichiometry of the Cori & Glucose–Alanine Cycles', '৩. কোরি ও গ্লুকোজ-অ্যালানিন চক্রের স্টোইকিওমেট্রি'), sectionId: 'mechanism' },
      { id: 'sec-brain-heart', label: l('4. Lactate as Primary Aerobic Fuel in Heart & Brain', '৪. হৃৎপিণ্ড ও মস্তিষ্কের প্রধান বায়বীয় জ্বালানি হিসেবে ল্যাকটেট'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Cytosolic Redox Telemetry & The Lactate/Pyruvate Ratio', '৫. সাইটোসোলিক রেডক্স পরিমাপ ও ল্যাকটেট/পাইরুভেট অনুপাত'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Clinical Differential: Type A versus Type B Lactic Acidosis', '৬. ক্লিনিক্যাল পার্থক্য: টাইপ এ বনাম টাইপ বি অ্যাসিডোসিস'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Lactate Shuttle Hypothesis', 'ল্যাকটেট শাটল তত্ত্ব'),
        definition: l(
          'Formulated by George Brooks; posits that lactate is the major vehicle for coordinating whole-body carbohydrate flux, moving continuously between cells of high glycolytic activity to neighboring or distant oxidative cells for aerobic respiration or gluconeogenesis.',
          'জর্জ ব্রুকস কর্তৃক প্রস্তাবিত তত্ত্ব; যা বলে ল্যাকটেট কোনো বর্জ্য নয় বরং সারা শরীরের শর্করা সমন্বয়ের প্রধান মাধ্যম, যা এক কোষ থেকে অন্য কোষে গিয়ে শক্তি বা নতুন গ্লুকোজ তৈরিতে ব্যবহৃত হয়।'
        ),
      },
      {
        term: l('Monocarboxylate Transporters (MCT1 & MCT4)', 'মনোকার্বক্সাইলেট বাহক (MCT1 ও MCT4)'),
        definition: l(
          'Proton-linked symporters (SLC16 family); MCT1 (high affinity, Km ~3.5 mM) mediates net uptake in oxidative tissues like myocardium and brain; MCT4 (low affinity, high capacity, Km ~28 mM) mediates net export from glycolytic tissues like white muscle.',
          'প্রোটন-সংযুক্ত বাহক প্রোটিন; MCT1 হৃৎপিণ্ড ও মস্তিষ্কে ল্যাকটেট প্রবেশ করায়, আর MCT4 কঙ্কালপেশি থেকে দ্রুত ল্যাকটেট রক্তে বের করে দেয়।'
        ),
      },
      {
        term: l('Mitochondrial Lactate Oxidation Complex (mLOC)', 'মাইটোকন্ড্রিয়াল ল্যাকটেট জারণ কমপ্লেক্স (mLOC)'),
        definition: l(
          'An integrated sub-mitochondrial protein assembly comprising MCT1, its chaperone CD147 (basigin), and mitochondrial LDH located in the intermembrane space, enabling direct intramitochondrial oxidation of lactate to pyruvate without prior cytosolic conversion.',
          'মাইটোকন্ড্রিয়ার একটি বিশেষ প্রোটিন কমপ্লেক্স যা সাইটোপ্লাজমের সাহায্য ছাড়াই ল্যাকটেটকে সরাসরি মাইটোকন্ড্রিয়ার ভেতর জারিত করে পাইরুভেটে রূপান্তর করে।'
        ),
      },
      {
        term: l('Lactate/Pyruvate (L/P) Ratio', 'ল্যাকটেট/পাইরুভেট অনুপাত (L/P Ratio)'),
        definition: l(
          'The physiological ratio of plasma lactate to pyruvate (normal ~10:1 to 20:1); reflects the free cytosolic [NADH]/[NAD+] redox state through the equilibrium constant of lactate dehydrogenase; ratios >30:1 diagnose severe tissue hypoxia or mitochondrial respiratory chain arrest.',
          'রক্তে ল্যাকটেট ও পাইরুভেটের অনুপাত (স্বাভাবিক ১০:১ থেকে ২০:১); যা সাইটোসলের রেডক্স অবস্থা নির্দেশ করে; এই অনুপাত ৩০:১ ছাড়িয়ে গেলে তা তীব্র টিস্যু হাইপোক্সিয়া বা অক্সিজেন সংকট প্রমাণ করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Energetic Accounting of the Hepatic Cori Cycle', 'যকৃতের কোরি চক্রের শক্তি হিসাব'),
        steps: [
          l(
            'In contracting white skeletal muscle, anaerobic glycolysis consumes 1 glucose to produce 2 lactate molecules and a net of 2 ATP: Glucose + 2 ADP + 2 Pi -> 2 Lactate + 2 ATP + 2 H2O.',
            'সংকোচনশীল পেশিতে অ্যানেরোবিক গ্লাইকোলাইসিসে ১টি গ্লুকোজ ভেঙে ২টি ল্যাকটেট ও ২টি এটিপি উৎপন্ন হয়: গ্লুকোজ + ২ ADP -> ২ ল্যাকটেট + ২ ATP।'
          ),
          l(
            'The 2 lactate molecules enter the circulation, are taken up by hepatocytes, and oxidized to 2 pyruvate via hepatic LDH-5: 2 Lactate + 2 NAD+ -> 2 Pyruvate + 2 NADH + 2 H+.',
            '২টি ল্যাকটেট রক্ত হয়ে যকৃতে পৌঁছায় এবং ২টি পাইরুভেটে রূপান্তরিত হয়: ২ ল্যাকটেট + ২ NAD+ -> ২ পাইরুভেট + ২ NADH।'
          ),
          l(
            'Hepatic gluconeogenesis converts 2 pyruvate back into 1 glucose. This process consumes 2 pyruvate carboxylase ATP, 2 PEPCK GTP, and 2 phosphoglycerate kinase ATP: 2 Pyruvate + 4 ATP + 2 GTP + 2 NADH + 6 H2O -> Glucose + 4 ADP + 2 GDP + 6 Pi + 2 NAD+.',
            'যকৃতের গ্লুকোনিওজেনেসিসে এই ২টি পাইরুভেট থেকে আবার ১টি গ্লুকোজ তৈরি করতে ৪টি এটিপি এবং ২টি জিটিপি (মোট ৬টি উচ্চ-শক্তি ফসফেট) খরচ হয়।'
          ),
          l(
            'Net systemic energetic balance: Muscle gains 2 ATP; Liver expends 6 ATP. Systemic net cost: -4 high-energy phosphate bonds per complete Cori cycle.',
            'সার্বিক শক্তি হিসাব: পেশি পেল ২টি এটিপি, আর যকৃৎ খরচ করল ৬টি এটিপি। ফলে প্রতি পূর্ণ কোরি চক্রে নিট ৪টি উচ্চ-শক্তি ফসফেট ঋণাত্মক থাকে।'
          ),
        ],
        conclusion: l(
          'The Cori cycle operates at a net energetic cost of 4 ATP equivalents to the organism. The liver pays this thermodynamic tax (powered by beta-oxidation of fatty acids) to support continuous muscular exertion and clear peripheral metabolic acidosis.',
          'কোরি চক্রে শরীর মোট ৪টি এটিপি সমতুল্য শক্তি হারায়। যকৃৎ চর্বি পুড়িয়ে এই শক্তি খরচ বহন করে যাতে কঙ্কালপেশি কাজ চালিয়ে যেতে পারে এবং রক্তে বিপজ্জনক অম্লতা সৃষ্টি না হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does Metformin carry a black-box warning for Lactic Acidosis (MALA), and what type of lactic acidosis does it represent?',
          'মেটফরমিন ওষুধের সাথে কেন ল্যাকটিক অ্যাসিডোসিসের (MALA) সতর্কতা থাকে এবং এটি কোন ধরনের ল্যাকটিক অ্যাসিডোসিস?'
        ),
        answer: l(
          'Metformin is a mild inhibitor of mitochondrial respiratory chain Complex I. In patients with renal failure (impaired drug excretion) or liver disease, toxic metformin accumulation suppresses mitochondrial ATP production and elevates the [NADH]/[NAD+] ratio. This drives the LDH equilibrium toward lactate, while concurrently halting hepatic gluconeogenesis (which requires ATP), preventing lactate clearance. Because this occurs without systemic tissue hypoperfusion or hypoxia, it represents classic Type B2 Lactic Acidosis.',
          'মেটফরমিন মাইটোকন্ড্রিয়ার কমপ্লেক্স I এনজাইমকে কিছুটা অবরুদ্ধ করে। কিডনি ফেইলিউরে ওষুধটি শরীর থেকে বের হতে না পারলে কোষে এনএডিএইচ জমে ল্যাকটেট তৈরি বহুগুণ বেড়ে যায়, এবং লিভার শক্তিহীন হয়ে ল্যাকটেট পরিষ্কার করা বন্ধ করে দেয়। যেহেতু এটি কোনো অক্সিজেন সংকট বা রক্ত প্রবাহের ঘাটতি ছাড়াই ঘটে, তাই এটি ধ্রুপদী টাইপ B2 ল্যাকটিক অ্যাসিডোসিস।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: lactate3DData,
  interactiveDiagram: {
    id: 'lactate-shuttle-cori-interactive-hub',
    title: l('Interactive Lactate Shuttle & Inter-Organ Fuel Circuit', 'ইন্টারেক্টিভ ল্যাকটেট শাটল ও আন্তঃঅঙ্গ জ্বালানি বর্তনী'),
    disclaimer: l(
      'Inter-organ bioenergetics simulation: select pathway nodes to trace the George Brooks Lactate Shuttle, MCT transporter cascades, hepatic Cori recycling, and brain astrocyte-neuron dynamics.',
      'আন্তঃঅঙ্গ শক্তি সিমুলেশন: বিভিন্ন নোড নির্বাচন করে জর্জ ব্রুকসের ল্যাকটেট শাটল, এমসিটি বাহক ক্যাসকেড, যকৃতের কোরি চক্র এবং মস্তিষ্কের অ্যাস্ট্রোসাইট-নিউরন সমন্বয় পর্যবেক্ষণ করুন।'
    ),
    description: l(
      'Lactate serves as the central currency linking anaerobic glycogenolysis in peripheral muscle to aerobic respiration in the heart and brain and gluconeogenesis in the liver. This interactive engine traces the molecular shuttles, transporter kinetics, and stoichiometric energy costs of whole-body lactate flux.',
      'ল্যাকটেট হলো কেন্দ্রীয় মুদ্রা যা পেশির অ্যানেরোবিক কাজকে হৃদপিণ্ড ও মস্তিষ্কের বায়বীয় শ্বসন এবং যকৃতের গ্লুকোজ তৈরির সাথে সংযুক্ত করে। এই ইন্টারঅ্যাকটিভ ইঞ্জিন ল্যাকটেট প্রবাহের সম্পূর্ণ আণবিক গতিবিদ্যা প্রদর্শন করে।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-muscle-glycolytic-burst',
        label: l('1. Skeletal Muscle Glycolytic Lactate & M4-LDH', '১. কঙ্কালপেশির গ্লাইকোলাইটিক ল্যাকটেট ও M4-LDH'),
        description: l(
          'Vigorous muscular contraction drives rapid glycogenolysis. M4-LDH (LDH-5) reduces pyruvate to lactate, regenerating NAD+ to sustain high-flux glycolysis.',
          'তীব্র পেশি সংকোচনে গ্লাইকোজেন দ্রুত ভাঙে। LDH-5 এনজাইম পাইরুভেটকে ল্যাকটেটে পরিণত করে NAD+ উদ্ধার করে গ্লাইকোলাইসিস চালু রাখে।'
        ),
        details: l(
          'Pyruvate + NADH + H+ <-> L-Lactate + NAD+. The forward reaction consumes a cytosolic proton (H+), temporarily mitigating cellular acidosis during anaerobic glycolysis.',
          'ল্যাকটেট তৈরির এই বিক্রিয়াটি সাইটোসলের একটি প্রোটন খরচ করে, যা অ্যানেরোবিক অবস্থায় সাময়িকভাবে কোষের অম্লতা কমাতে সাহায্য করে।'
        ),
        sectionId: 'structure',
        color: '#e11d48',
      },
      {
        id: 'node-mct-transporters',
        label: l('2. Monocarboxylate Transporters: MCT4 Export & MCT1 Influx', '২. মনোকার্বক্সাইলেট বাহক: MCT4 নির্গমন ও MCT1 প্রবেশ'),
        description: l(
          'Proton-linked symport: MCT4 exports lactate from glycolytic muscle; MCT1 mediates rapid uptake into oxidative heart, liver, and red muscle fibers.',
          'MCT4 কঙ্কালপেশি থেকে ল্যাকটেট বের করে দেয় এবং MCT1 হৃৎপিণ্ড ও যকৃতে দ্রুত ল্যাকটেট প্রবেশ করায়।'
        ),
        details: l(
          'Requires ancillary chaperone protein CD147 (basigin) for proper membrane insertion and stability. MCT4 expression is transcriptionally induced by HIF-1alpha under hypoxia.',
          'ঝিল্লিতে টিকে থাকার জন্য CD147 প্রোটিন অপরিহার্য। অক্সিজেনের ঘাটতিতে HIF-1alpha হরমোন MCT4-এর প্রকাশ অনেক বাড়িয়ে দেয়।'
        ),
        sectionId: 'structure',
        color: '#ea580c',
      },
      {
        id: 'node-hepatic-cori-cycle',
        label: l('3. Hepatic Cori Cycle Gluconeogenesis (6 ATP Cost)', '৩. যকৃতের কোরি চক্রে গ্লুকোজ তৈরি (৬টি এটিপি ব্যয়)'),
        description: l(
          'Hepatocytes absorb circulating lactate via MCTs, convert it to pyruvate via LDH-5, and run gluconeogenesis to regenerate free glucose. Net cost: 6 high-energy phosphates.',
          'যকৃৎ ল্যাকটেট গ্রহণ করে LDH-5 দ্বারা পাইরুভেটে পরিণত করে এবং ৬টি এটিপি খরচ করে পুনরায় মুক্ত গ্লুকোজ তৈরি করে রক্তে ছাড়ে।'
        ),
        details: l(
          '2 Lactate + 4 ATP + 2 GTP + 6 H2O -> Glucose + 4 ADP + 2 GDP + 6 Pi. Hepatic beta-oxidation provides the continuous ATP required to fund this peripheral fuel salvage.',
          'যকৃতের ফ্যাটি অ্যাসিড জারণ এই ৬টি এটিপি খরচ সরবরাহ করে; ফলে রক্তের অম্লতা দূর হয় এবং কঙ্কালপেশি নতুন গ্লুকোজ পায়।'
        ),
        sectionId: 'mechanism',
        color: '#d97706',
      },
      {
        id: 'node-cahill-alanine-cycle',
        label: l('4. Glucose-Alanine (Cahill) Cycle: Safe Nitrogen Cargo', '৪. গ্লুকোজ-অ্যালানিন (কাহিল) চক্র: নিরাপদ নাইট্রোজেন বহন'),
        description: l(
          'Muscle transaminates pyruvate to alanine via ALT, carrying both carbon and amino groups to liver. Hepatic ALT regenerates pyruvate for gluconeogenesis and feeds NH4+ to urea cycle.',
          'পেশিতে পাইরুভেট অ্যালানিনে পরিণত হয়ে নাইট্রোজেন বহন করে যকৃতে যায়। যকৃতে অ্যালানিন ভেঙে গ্লুকোজ তৈরি হয় এবং নাইট্রোজেন ইউরিয়া হয়ে বের হয়।'
        ),
        details: l(
          'Pyruvate + Glutamate <-> Alanine + alpha-Ketoglutarate (via ALT / PLP). Unlike the Cori cycle, the Cahill cycle detoxifies muscle amino acid catabolism without hyperammonemia.',
          'কোরি চক্রের চেয়ে উন্নত: এটি পেশির প্রোটিন ভাঙনের ক্ষতিকর অ্যামোনিয়াকে বিষক্রিয়া ছাড়াই নিরাপদে যকৃতে পৌঁছে দেয়।'
        ),
        sectionId: 'mechanism',
        color: '#059669',
      },
      {
        id: 'node-cardiac-lactate-oxidation',
        label: l('5. Cardiac Myocardial Lactate Uptake & H4-LDH Oxidation', '৫. হৃদপেশিতে ল্যাকটেট গ্রহণ ও H4-LDH জারণ'),
        description: l(
          'The human heart prefers lactate over glucose during exercise, clearing up to 60% of circulating lactate via MCT1 and oxidizing it via H4-LDH (LDH-1) directly into the TCA cycle.',
          'ব্যায়ামের সময় হৃৎপিণ্ড গ্লুকোজের চেয়ে ল্যাকটেট বেশি পছন্দ করে; এটি রক্ত থেকে ল্যাকটেট টেনে নিয়ে সরাসরি সাইট্রিক অ্যাসিড চক্রে পুড়িয়ে শক্তি পায়।'
        ),
        details: l(
          'Lactate + NAD+ -> Pyruvate + NADH. Generates 1 NADH plus 1 pyruvate (which yields 1 acetyl-CoA + 1 NADH + 1 FADH2 + 1 GTP), totaling ~15 ATP per lactate fully oxidized.',
          'প্রতিটি ল্যাকটেট সম্পূর্ণ জারিত হয়ে হৃৎপিণ্ডকে প্রায় ১৫টি এটিপি শক্তি জোগায় এবং হৃদপেশির নিজস্ব গ্লাইকোজেন অক্ষত রাখে।'
        ),
        sectionId: 'integration',
        color: '#0284c7',
      },
      {
        id: 'node-brain-anls-engine',
        label: l('6. Astrocyte-Neuron Lactate Shuttle (ANLS) in Cognition', '৬. মস্তিষ্কের অ্যাস্ট্রোসাইট-নিউরন ল্যাকটেট শাটল'),
        description: l(
          'Synaptic glutamate stimulates astrocytic glycolysis; astrocytes export lactate via MCT4; neurons import lactate via MCT2 and oxidize it via LDH-1 to sustain cognitive memory.',
          'স্নায়বিক সংকেত অ্যাস্ট্রোসাইটে গ্লাইকোলাইসিস চালু করে; অ্যাস্ট্রোসাইট ল্যাকটেট তৈরি করে নিউরনে পাঠায় যা স্মৃতি সংরক্ষণে অপরিহার্য।'
        ),
        details: l(
          'Pierre Magistretti model: Neurons prefer lactate over glucose during active firing. Inhibiting astrocytic MCT4 impairs long-term potentiation (LTP) and memory consolidation.',
          'সক্রিয় নিউরন গ্লুকোজের চেয়ে ল্যাকটেট বেশি পছন্দ করে। এই পরিবহন বন্ধ করলে স্মৃতিশক্তি ও শেখার ক্ষমতা নষ্ট হয়ে যায়।'
        ),
        sectionId: 'integration',
        color: '#8b5cf6',
      },
      {
        id: 'node-mloc-complex',
        label: l('7. Mitochondrial Lactate Oxidation Complex (mLOC)', '৭. মাইটোকন্ড্রিয়াল ল্যাকটেট জারণ কমপ্লেক্স (mLOC)'),
        description: l(
          'MCT1 and mitochondrial LDH assemble on the inner mitochondrial membrane, allowing direct intra-organellar oxidation of lactate without entering the bulk cytosol.',
          'MCT1 এবং মাইটোকন্ড্রিয়াল LDH একসাথে যুক্ত হয়ে ল্যাকটেটকে সরাসরি মাইটোকন্ড্রিয়ার ভেতর জারিত করে শক্তি উৎপন্ন করে।'
        ),
        details: l(
          'Facilitates intracellular lactate shuttling between the glycolytic cytoplasm and adjacent mitochondria in highly oxidative muscle fibers.',
          'উচ্চ-দক্ষতাসম্পন্ন পেশিকোষে সাইটোপ্লাজম থেকে সরাসরি সংলগ্ন মাইটোকন্ড্রিয়ায় ল্যাকটেট স্থানান্তরে সাহায্য করে।'
        ),
        sectionId: 'practice',
        color: '#0891b2',
      },
      {
        id: 'node-lactic-acidosis-diff',
        label: l('8. Lactic Acidosis Differential: Type A vs Type B & L/P Ratio', '৮. ল্যাকটিক অ্যাসিডোসিস নির্ণয়: টাইপ এ বনাম বি ও L/P অনুপাত'),
        description: l(
          'Type A (hypoxic: sepsis, shock, cardiac arrest; L/P ratio >30:1); Type B (non-hypoxic: liver failure, metformin MALA, thiamine deficiency; normal or elevated L/P).',
          'টাইপ এ (অক্সিজেন সংকট: সেপসিস, শক; L/P >৩০:১); টাইপ বি (অক্সিজেন ছাড়া: মেটফরমিন, লিভার ফেইলিউর, থায়ামিন ঘাটতি)।'
        ),
        details: l(
          'Normal plasma lactate is <2.0 mmol/L; clinical lactic acidosis requires lactate >4.0 mmol/L with arterial pH <7.35 and elevated anion gap.',
          'স্বাভাবিক ল্যাকটেট <২.০ mmol/L; চিকিৎসাবিজ্ঞানে ল্যাকটিক অ্যাসিডোসিস হতে ল্যাকটেট >৪.০ mmol/L এবং রক্তের pH <৭.৩৫ হতে হয়।'
        ),
        sectionId: 'practice',
        color: '#dc2626',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'Inter-organ circuit diagram showing muscle lactate and alanine export, hepatic Cori recycling, myocardial lactate consumption, brain astrocyte-neuron shuttles, and lactic acidosis differential.',
      'আন্তঃঅঙ্গ বর্তনী মানচিত্র যা পেশির ল্যাকটেট ও অ্যালানিন নির্গমন, যকৃতের কোরি চক্র, হৃদপেশির ল্যাকটেট গ্রহণ, মস্তিষ্কের অ্যাস্ট্রোসাইট শাটল এবং ল্যাকটিক অ্যাসিডোসিস নির্ণয় পদ্ধতি প্রদর্শন করে।'
    ),
    steps: [
      l(
        'Step 1: Glycolytic muscle produces lactate and alanine, exporting them via MCT4 and neutral amino acid transporters to clear protons and nitrogen.',
        'ধাপ ১: কঙ্কালপেশি ল্যাকটেট ও অ্যালানিন তৈরি করে MCT4 বাহক দিয়ে রক্তে বের করে দেয় যাতে কোষে অম্লতা ও নাইট্রোজেন না জমে।'
      ),
      l(
        'Step 2: The liver imports lactate and alanine, investing 6 ATP in gluconeogenesis to regenerate glucose while detoxifying nitrogen via the urea cycle.',
        'ধাপ ২: যকৃৎ ল্যাকটেট ও অ্যালানিন গ্রহণ করে ৬টি এটিপি খরচ করে পুনরায় গ্লুকোজ বানায় এবং নাইট্রোজেনকে ইউরিয়া চক্রে পাঠিয়ে বিষমুক্ত করে।'
      ),
      l(
        'Step 3: The myocardium voraciously oxidizes lactate via LDH-1 as primary fuel; astrocytes shuttle lactate to neurons to sustain cognitive memory consolidation.',
        'ধাপ ৩: হৃদপেশি ল্যাকটেটকে পুড়িয়ে প্রধান জ্বালানি হিসেবে ব্যবহার করে এবং মস্তিষ্কে অ্যাস্ট্রোসাইট কোষ নিউরনকে সচল রাখতে ল্যাকটেট সরবরাহ করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 68-year-old woman with a history of type 2 diabetes and stage 4 chronic kidney disease is brought to the emergency department obtunded, tachypneic with Kussmaul respirations, and hypotensive. Arterial blood gas reveals pH 7.12, pCO2 18 mmHg, bicarbonate 6 mEq/L, and anion gap 28 mEq/L. Blood lactate is 14.2 mmol/L. Review of medications reveals she was recently prescribed metformin 1000 mg twice daily. Serum pyruvate is measured, revealing a normal Lactate/Pyruvate ratio of 15:1. What is the fundamental mechanism of her lactic acidosis, and what classification does it represent?',
      'টাইপ ২ ডায়াবেটিস ও কিডনি রোগে আক্রান্ত ৬৮ বছর বয়সী এক নারী শ্বাসকষ্ট (কুসমল শ্বাস) ও রক্তচাপ কমে গিয়ে হাসপাতালে এলেন। রক্ত পরীক্ষায় pH ৭.১২, বাইকার্বোনেট ৬ mEq/L এবং ল্যাকটেট ১৪.২ mmol/L পাওয়া গেল। জানা গেল তিনি সম্প্রতি মেটফরমিন খাওয়া শুরু করেছিলেন। রক্তে ল্যাকটেট/পাইরুভেট অনুপাত ১৫:১ (স্বাভাবিক)। এই ল্যাকটিক অ্যাসিডোসিসের মূল কারণ কী এবং এটি কোন শ্রেণিভুক্ত?'
    ),
    options: [
      l(
        'Type A lactic acidosis caused by severe cardiogenic shock and systemic tissue hypoperfusion.',
        'টাইপ এ ল্যাকটিক অ্যাসিডোসিস যা তীব্র কার্ডিওজেনিক শক এবং রক্ত চলাচলের অভাবে ঘটেছে।'
      ),
      l(
        'Type B2 lactic acidosis (MALA) caused by metformin accumulation inhibiting mitochondrial Complex I, suppressing hepatic gluconeogenesis and shifting pyruvate to lactate without tissue hypoxia.',
        'টাইপ B2 ল্যাকটিক অ্যাসিডোসিস (MALA) যা মেটফরমিন জমে মাইটোকন্ড্রিয়াল কমপ্লেক্স I অবরুদ্ধ করার কারণে ঘটেছে; এতে কোনো টিস্যু হাইপোক্সিয়া ছাড়াই যকৃতের গ্লুকোজ তৈরি বন্ধ হয়ে রক্তে ল্যাকটেট বেড়ে গেছে।'
      ),
      l(
        'Type B3 lactic acidosis caused by an inborn monogenic deficiency of pyruvate dehydrogenase complex.',
        'টাইপ B3 ল্যাকটিক অ্যাসিডোসিস যা জন্মগত পাইরুভেট ডিহাইড্রোজিনেজের ঘাটতির কারণে হয়েছে।'
      ),
      l(
        'Type A lactic acidosis driven by carbon monoxide poisoning impairing cytochrome c oxidase.',
        'টাইপ এ ল্যাকটিক অ্যাসিডোসিস যা কার্বন মনোক্সাইড বিষক্রিয়ার কারণে ঘটেছে।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'The patient has classic Metformin-Associated Lactic Acidosis (MALA), which represents Type B2 Lactic Acidosis (drug/toxin-induced without tissue hypoxia). Metformin is excreted unchanged by the kidneys; in chronic kidney disease, metformin accumulates to toxic levels, mildly inhibiting mitochondrial Complex I. This impairs hepatic gluconeogenesis (which requires ATP) and prevents the liver from clearing circulating lactate, while shifting the cytosolic redox state. A normal or mildly elevated L/P ratio (15:1) confirms the absence of massive tissue hypoperfusion/hypoxia (which drives L/P >30:1 in Type A).',
      'রোগী মেটফরমিন-সম্পর্কিত ল্যাকটিক অ্যাসিডোসিসে (MALA) আক্রান্ত, যা ধ্রুপদী টাইপ B2 শ্রেণিভুক্ত (ওষুধের কারণে, কোনো অক্সিজেন সংকট ছাড়া)। কিডনি নষ্ট থাকায় মেটফরমিন শরীর থেকে বের হতে না পেরে জমে যায় এবং মাইটোকন্ড্রিয়ার কমপ্লেক্স I অবরুদ্ধ করে। ফলে যকৃৎ শক্তিহীন হয়ে ল্যাকটেট পরিষ্কার করা বন্ধ করে দেয়। স্বাভাবিক L/P অনুপাত (১৫:১) প্রমাণ করে যে কোনো বড় ধরনের টিস্যু হাইপোক্সিয়া বা শক ছাড়াই এটি ঘটেছে।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation Level', 'ভিত্তি স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Great Lactate Misconception: From Waste to Wonder Fuel', 'ল্যাকটেট সম্পর্কে সাধারণ ভুল ধারণা: বর্জ্য থেকে মহৌষধে রূপান্তর'),
          paragraphs: [
            l(
              'For over a century, popular culture and outdated athletic lore taught that lactate—often incorrectly referred to as lactic acid—was a toxic waste product of oxygen-deprived muscles that caused the burning sensation during exercise and triggered delayed-onset muscle soreness the following day. Modern metabolic biochemistry has completely overturned this myth. Lactate is not a metabolic dead end or a fatigue poison; it is one of the most vital, rapidly utilized, and versatile energy fuels in the human body.',
              'এক শতাব্দীরও বেশি সময় ধরে প্রচলিত ধারণা ও খেলাধুলার ভুল তথ্যে শেখানো হতো যে ল্যাকটেট (যাকে প্রায়শই ভুল করে ল্যাকটিক অ্যাসিড বলা হয়) হলো অক্সিজেনের অভাবে পেশিতে তৈরি এক বিষাক্ত বর্জ্য, যা ব্যায়ামের সময় পেশিতে জ্বালাপোড়া এবং পরের দিন তীব্র ব্যথা সৃষ্টি করে। আধুনিক চিকিৎসাবিজ্ঞান এই ভুল ধারণাকে সম্পূর্ণ ভিত্তিহীন প্রমাণ করেছে। ল্যাকটেট কোনো বর্জ্য বা বিষাক্ত পদার্থ নয়; বরং এটি মানবদেহের অন্যতম গতিশীল, দ্রুত ব্যবহারযোগ্য এবং অত্যাবশ্যকীয় শক্তি-জ্বালানি।'
            ),
            l(
              'Under normal aerobic conditions at rest, your body continuously produces and consumes lactate. Cells that are rapidly breaking down glucose export lactate into the blood, where it is avidly absorbed and burned by neighboring oxidative cells, by the beating heart, and by the brain, or recycled back into new glucose by the liver.',
              'স্বাভাবিক বিশ্রামরত অবস্থায়ও আমাদের শরীর অনবরত ল্যাকটেট তৈরি এবং খরচ করে চলেছে। যেসব কোষ দ্রুত গ্লুকোজ ভাঙে তারা রক্তে ল্যাকটেট ছেড়ে দেয়; আর সেই ল্যাকটেটকে রক্ত থেকে পরম আনন্দে গ্রহণ করে জ্বালানি হিসেবে পুড়িয়ে ফেলে আমাদের হৃদপিণ্ড, মস্তিষ্ক ও যকৃৎ, যা শরীরকে নতুন গ্লুকোজ উপহার দেয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Lactate Shuttle: Moving Fuel Across the Body', 'ল্যাকটেট শাটল: সারা শরীরে জ্বালানির সঞ্চালন'),
          paragraphs: [
            l(
              'In the 1980s, exercise physiologist George Brooks formulated the Lactate Shuttle Hypothesis, which transformed our understanding of human bioenergetics. Brooks demonstrated that lactate functions as a central metabolic distribution system, transferring energy from cells with high rates of glycolysis to cells with high rates of oxidative combustion.',
              '১৯৮০-এর দশকে বিজ্ঞানী জর্জ ব্রুকস "ল্যাকটেট শাটল তত্ত্ব" আবিষ্কার করেন, যা মানবদেহের শক্তিবিজ্ঞানকে নতুনভাবে সংজ্ঞায়িত করে। ব্রুকস প্রমাণ করেন যে ল্যাকটেট মূলত একটি কেন্দ্রীয় জ্বালানি বিতরণ ব্যবস্থা হিসেবে কাজ করে, যা দ্রুত গ্লাইকোলাইসিস চলা কোষ থেকে শক্তি নিয়ে বায়বীয় জারণে দক্ষ কোষগুলোতে পৌঁছে দেয়।'
            ),
            l(
              'To cross cell membranes, lactate relies on specialized microscopic revolving doors called Monocarboxylate Transporters (MCTs). MCT4 functions like an emergency exit, rapidly ejecting lactate from hard-working glycolytic muscle fibers; while MCT1 functions like an intake valve, eagerly drawing lactate into the heart, brain, and liver where it is converted back into pyruvate and burned for immense ATP production.',
              'কোষের প্রাচীর পার হতে ল্যাকটেট মনোকার্বক্সাইলেট বাহক (MCT) নামক বিশেষ প্রোটিন গেট ব্যবহার করে। MCT4 গেটটি কঙ্কালপেশি থেকে দ্রুত ল্যাকটেট বের করে দেয়; আর MCT1 গেটটি হৃদপিণ্ড, মস্তিষ্ক ও যকৃতে ল্যাকটেটকে ভেতরে টেনে নেয় যেখানে তা থেকে প্রচুর এটিপি শক্তি উৎপন্ন হয়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Cori Cycle and the Glucose-Alanine Cycle', 'কোরি চক্র এবং গ্লুকোজ-অ্যালানিন চক্র'),
          paragraphs: [
            l(
              'When skeletal muscle works intensely under heavy exertion, it converts stored glycogen into lactate, releasing it into the bloodstream. This lactate travels directly to the liver, which captures it and uses energy to assemble two lactate molecules back into a fresh molecule of glucose. The liver then releases this glucose back into the blood for the muscle to use again. This continuous inter-organ partnership is celebrated as the Cori Cycle, discovered by Nobel laureates Carl and Gerty Cori.',
              'কঠিন ব্যায়ামের সময় কঙ্কালপেশি তার জমানো গ্লাইকোজেন ভেঙে ল্যাকটেট বানিয়ে রক্তে ছেড়ে দেয়। এই ল্যাকটেট সরাসরি যকৃতে পৌঁছায়। যকৃৎ নিজের শক্তি খরচ করে দুটি ল্যাকটেট অণু জোড়া লাগিয়ে আবার একটি নতুন গ্লুকোজ তৈরি করে রক্তে ফেরত পাঠায় যাতে পেশি তা আবার ব্যবহার করতে পারে। যকৃৎ ও পেশির এই অবিরাম অংশীদারিত্বকে আবিষ্কারক কার্ল ও গার্টি কোরির নামানুসারে "কোরি চক্র" বলা হয়।'
            ),
            l(
              'Working hand-in-hand with the Cori cycle is the Glucose-Alanine (Cahill) Cycle. Instead of exporting pure lactate, muscle can attach ammonia to pyruvate to create the amino acid alanine. Alanine travels safely through the blood to the liver, which strips off the nitrogen to create nontoxic urea while turning the carbon backbone back into glucose, safely clearing muscle nitrogen without dangerous ammonia toxicity.',
              'কোরি চক্রের সাথে তাল মিলিয়ে চলে গ্লুকোজ-অ্যালানিন বা কাহিল চক্র। পেশি সরাসরি ল্যাকটেট না পাঠিয়ে বিষাক্ত অ্যামোনিয়াকে পাইরুভেটের সাথে যুক্ত করে অ্যালানিন অ্যামিনো অ্যাসিড বানিয়ে দেয়। অ্যালানিন রক্ত দিয়ে নিরাপদে যকৃতে যায়; যকৃৎ নাইট্রোজেনটিকে ইউরিয়া বানিয়ে প্রস্রাবের সাথে বের করে দেয় এবং বাকি অংশ থেকে নতুন গ্লুকোজ তৈরি করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Heart and Brain: Fueling on Lactate', 'হৃৎপিণ্ড ও মস্তিষ্ক: ল্যাকটেটে চলা দুই বিস্ময়'),
          paragraphs: [
            l(
              'The human heart is an astonishing metabolic omnivore that actually prefers lactate over glucose during physical exercise. When you run, your heart absorbs up to 60% of the lactate pumped out by your legs, burning it cleanly to power cardiac muscle contractions and preserving precious cardiac glycogen for emergencies.',
              'মানুষের হৃদপিণ্ড এক বিস্ময়কর অঙ্গ যা ব্যায়ামের সময় গ্লুকোজের চেয়ে ল্যাকটেট বেশি পছন্দ করে। আপনি যখন দৌড়ান, আপনার হৃদপিণ্ড পায়ের পেশি থেকে নির্গত ৬০% পর্যন্ত ল্যাকটেট শুষে নেয় এবং তা পুড়িয়ে নিরবচ্ছিন্নভাবে রক্ত পাম্প করার শক্তি পায়।'
            ),
            l(
              'Even more remarkably, inside the human brain, supporting star-shaped cells called astrocytes take up glucose from blood vessels, turn it into lactate, and feed that lactate directly to adjacent neurons. Groundbreaking neuroscience research shows that without this astrocytic lactate delivery, neurons cannot consolidate long-term memories or maintain synaptic communication.',
              'আরও বিস্ময়কর হলো আমাদের মস্তিষ্কের অ্যাস্ট্রোসাইট নামক তারকাকার কোষগুলো রক্ত থেকে গ্লুকোজ নিয়ে ল্যাকটেট বানায় এবং সেই ল্যাকটেট খাইয়ে স্নায়ুকোষ বা নিউরনকে বাঁচিয়ে রাখে। আধুনিক স্নায়ুবিজ্ঞান প্রমাণ করেছে যে এই ল্যাকটেট সরবরাহ বন্ধ হলে নিউরন কোনো দীর্ঘমেয়াদী স্মৃতি সংরক্ষণ করতে পারে না।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Lactic Acidosis: When the System Breaks Down', 'ল্যাকটিক অ্যাসিডোসিস: যখন ভারসাম্য নষ্ট হয়'),
          paragraphs: [
            l(
              'Although lactate is a physiological fuel, catastrophic medical conditions can cause blood lactate to surge from its normal resting level (below 2 mmol/L) to dangerous levels exceeding 5 to 15 mmol/L, a condition known as lactic acidosis. In Type A lactic acidosis, severe shock, massive blood loss, or sepsis starves tissues of oxygen, forcing all body cells into emergency anaerobic glycolysis.',
              'যদিও ল্যাকটেট একটি স্বাভাবিক জ্বালানি, বিভিন্ন মারাত্মক রোগে রক্তে এর মাত্রা স্বাভাবিকের (২ mmol/L এর কম) চেয়ে অনেক বেড়ে গিয়ে ৫ থেকে ১৫ mmol/L ছাড়িয়ে যায়, যাকে ল্যাকটিক অ্যাসিডোসিস বলে। টাইপ এ অ্যাসিডোসিসে তীব্র শক, অতিরিক্ত রক্তক্ষরণ বা সেপসিসে অক্সিজেন না পেয়ে সমস্ত কোষ একসাথে অতিরিক্ত ল্যাকটেট তৈরি করতে শুরু করে।'
            ),
            l(
              'In contrast, Type B lactic acidosis occurs without oxygen deprivation, caused by severe liver failure that stops lactate clearance, or by medications like metformin accumulating in patients with kidney failure.',
              'পক্ষান্তরে টাইপ বি অ্যাসিডোসিসে কোনো অক্সিজেনের অভাব থাকে না; বরং লিভার ফেইলিউরের কারণে যকৃৎ রক্ত থেকে ল্যাকটেট পরিষ্কার করতে পারে না, অথবা কিডনি নষ্ট থাকলে মেটফরমিনের মতো ওষুধ জমে এই বিষক্রিয়া ঘটায়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Summary of Lactate Dynamics', 'ল্যাকটেটের মূল গতিবিদ্যার সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Lactate is an indispensable oxidative fuel and signaling molecule linking peripheral muscle contraction to cardiac energy and hepatic gluconeogenesis. Monocarboxylate transporters mediate its inter-organ transfer via the Cori and Glucose-Alanine cycles, while clinical lactic acidosis diagnoses systemic circulatory shock or hepatic failure.',
              'ল্যাকটেট হলো একটি অপরিহার্য বায়বীয় জ্বালানি যা কঙ্কালপেশির কাজকে হৃদপিণ্ডের শক্তি এবং যকৃতের গ্লুকোজ তৈরির সাথে সংযুক্ত করে। এমসিটি বাহকগুলো কোরি ও অ্যালানিন চক্রের মাধ্যমে এই পরিবহন পরিচালনা করে এবং রক্তে অতিরিক্ত ল্যাকটেটের উপস্থিতি রোগীর রক্ত সঞ্চালন বা যকৃতের ব্যর্থতা নির্দেশ করে।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic Level', 'একাডেমিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Biochemical Kinetics of Lactate Dehydrogenase (LDH)', 'ল্যাকটেট ডিহাইড্রোজিনেজের (LDH) জৈবরাসায়নিক গতিবিদ্যা'),
          paragraphs: [
            l(
              'Lactate Dehydrogenase (LDH, EC 1.1.1.27) is a zinc-containing tetrameric oxidoreductase that catalyzes the reversible interconversion of pyruvate and L-lactate: Pyruvate + NADH + H+ <-> L-Lactate + NAD+. The enzyme is assembled from two distinct 35-kDa polypeptide subunits encoded by separate genes: the M (muscle) subunit encoded by LDHA on chromosome 11p15, and the H (heart) subunit encoded by LDHB on chromosome 12p12. Combinatorial assembly yields five tetrameric isozymes designated LDH-1 through LDH-5.',
              'ল্যাকটেট ডিহাইড্রোজিনেজ (LDH) হলো একটি জিংক-যুক্ত টেট্রামেরিক এনজাইম যা পাইরুভেট এবং এল-ল্যাকটেটের উভমুখী রূপান্তর ঘটায়: Pyruvate + NADH + H+ <-> L-Lactate + NAD+। এনজাইমটি দুটি ভিন্ন সাবইউনিট দিয়ে তৈরি: LDHA জিন দ্বারা উৎপন্ন M (পেশি) সাবইউনিট এবং LDHB জিন দ্বারা উৎপন্ন H (হৃদপিণ্ড) সাবইউনিট। এদের সমন্বয়ে পাঁচটি আইসোএনজাইম (LDH-1 থেকে LDH-5) গঠিত হয়।'
            ),
            l(
              'LDH-1 (H4) is expressed predominantly in cardiac myocytes and erythrocytes; it possesses a very low Km for lactate (~1.0 mM) and is allosterically inhibited by high concentrations of pyruvate, optimizing it for lactate consumption and oxidation to pyruvate. In contrast, LDH-5 (M4) is expressed in glycolytic skeletal muscle and liver; it has a higher Km for lactate (~5.0 mM) and is not inhibited by pyruvate, allowing it to rapidly reduce accumulating pyruvate to lactate under high glycolytic flux to sustain cytosolic NAD+ regeneration.',
              'LDH-1 (H4) প্রধানত হৃদপেশি ও লোহিত রক্তকণিকায় থাকে; এর ল্যাকটেটের প্রতি আসক্তি অনেক বেশি (Km ~১.০ mM) এবং অতিরিক্ত পাইরুভেট থাকলে এটি নিজে থেকেই থেমে যায়, যা ল্যাকটেট পুড়িয়ে শক্তি তৈরিতে আদর্শ। বিপরীতভাবে LDH-5 (M4) কঙ্কালপেশি ও যকৃতে থাকে; পাইরুভেট দ্বারা এটি বাধাপ্রাপ্ত হয় না, ফলে দ্রুত পাইরুভেটকে ল্যাকটেটে পরিণত করে সাইটোসলের NAD+ উদ্ধার করে গ্লাইকোলাইসিস চালু রাখতে পারে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Monocarboxylate Transporters (MCTs) & Subcellular Shuttles', 'মনোকার্বক্সাইলেট বাহক (MCT) ও উপ-কোষীয় শাটল ব্যবস্থা'),
          paragraphs: [
            l(
              'Because ionized lactate (pKa 3.86) carries a net negative charge at physiological pH 7.40, it cannot penetrate lipid bilayer membranes by passive diffusion. Transmembrane flux is mediated by Monocarboxylate Transporters (MCTs), an evolutionarily conserved family of 12-transmembrane-helix proton-linked symporters belonging to the SLC16 family. MCTs co-transport one lactate anion strictly with one proton (H+) in an electroneutral 1:1 stoichiometry down their combined electrochemical gradient.',
              'যেহেতু স্বাভাবিক রক্তে (pH ৭.৪০) ল্যাকটেটের ঋণাত্মক আধান থাকে, তাই এটি নিজে নিজে ঝিল্লি ভেদ করতে পারে না। SLC16 পরিবারের মনোকার্বক্সাইলেট বাহক (MCT) প্রোটিনগুলো ১টি ল্যাকটেটের সাথে ঠিক ১টি প্রোটন (H+) যুক্ত করে ঝিল্লি পারাপার করায়।'
            ),
            l(
              'MCT1 (SLC16A1) possesses a high affinity for lactate (Km ~ 3.5–5.0 mM) and is expressed ubiquitously, with highest abundance in oxidative tissues such as myocardium, red skeletal muscle fibers, and neurons where it mediates net inward lactate uptake. MCT4 (SLC16A3) has a low affinity (Km ~ 25–35 mM) but very high maximal turnover velocity (Vmax), making it ideally suited as an efflux pump to export lactate and protons from glycolytic tissues (white skeletal muscle, activated macrophages, hypoxic tumors). Both transporters require the immunoglobulin superfamily chaperone CD147 (basigin) for membrane targeting.',
              'MCT1 বাহকের ল্যাকটেটের প্রতি আসক্তি বেশি (Km ~৩.৫-৫.০ mM) এবং এটি হৃদপেশি ও নিউরনে ল্যাকটেট প্রবেশ করায়। অন্যদিকে MCT4 বাহকের আসক্তি কম হলেও ধারণক্ষমতা প্রচণ্ড বেশি; ফলে কঙ্কালপেশি ও টিউমার কোষ থেকে দ্রুত বিপুল পরিমাণ ল্যাকটেট বের করে দিতে এটি নিখুঁতভাবে কাজ করে। উভয় বাহকের কাজের জন্য CD147 প্রোটিন অপরিহার্য।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Stoichiometric Architecture: The Cori Cycle versus The Cahill Cycle', 'স্টোইকিওমেট্রিক স্থাপত্য: কোরি চক্র বনাম কাহিল চক্র'),
          paragraphs: [
            l(
              'The Cori Cycle (Glucose-Lactate Cycle) coordinates carbon flux between muscle and liver. In muscle: 1 Glucose + 2 ADP + 2 Pi -> 2 Lactate + 2 ATP + 2 H2O. Lactate diffuses into the bloodstream and enters hepatocytes. In the liver: 2 Lactate + 4 ATP + 2 GTP + 6 H2O -> 1 Glucose + 4 ADP + 2 GDP + 6 Pi. The net systemic energetic balance of one complete Cori cycle is: 4 ATP equivalents expended by the organism (-4 ATP net). Hepatic beta-oxidation of fatty acids supplies the ATP required to run this futile cycle.',
              'কোরি চক্র পেশি ও যকৃতের মধ্যে কার্বন বিনিময় পরিচালনা করে। পেশিতে: ১ গ্লুকোজ -> ২ ল্যাকটেট + ২ এটিপি। যকৃতে: ২ ল্যাকটেট + ৪ এটিপি + ২ জিটিপি -> ১ গ্লুকোজ। সম্পূর্ণ কোরি চক্রের সার্বিক শক্তি হিসাব হলো শরীরে নিট ৪টি এটিপি সমতুল্য শক্তি খরচ (-৪ এটিপি)। যকৃতের ফ্যাটি অ্যাসিড জারণ এই শক্তি সরবরাহ করে।'
            ),
            l(
              'The Glucose-Alanine (Cahill) Cycle operates analogously but incorporates amino acid nitrogen carriage. During fasting or exercise, muscle proteolysis generates branched-chain amino acids, which donate amino groups to alpha-ketoglutarate forming glutamate. Alanine Aminotransferase (ALT / GPT, PLP-dependent) transaminates pyruvate to alanine: Pyruvate + Glutamate <-> Alanine + alpha-Ketoglutarate. Alanine travels to the liver, where hepatic ALT regenerates pyruvate for gluconeogenesis while glutamate feeds into carbamoyl phosphate synthetase I (CPS-I) to produce urea, safely clearing muscle nitrogen without hyperammonemia.',
              'কাহিল বা গ্লুকোজ-অ্যালানিন চক্র একইভাবে কাজ করে তবে এটি নাইট্রোজেন পরিবহন করে। পেশিতে প্রোটিন ভাঙনের নাইট্রোজেন পাইরুভেটের সাথে যুক্ত হয়ে অ্যালানিন তৈরি করে: Pyruvate + Glutamate <-> Alanine + alpha-Ketoglutarate। যকৃতে পৌঁছে অ্যালানিন আবার পাইরুভেটে পরিণত হয়ে গ্লুকোজ তৈরি করে এবং নাইট্রোজেন ইউরিয়া চক্রে গিয়ে শরীর থেকে নিষ্ক্রান্ত হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Astrocyte-Neuron Lactate Shuttle (ANLS) Paradigm', 'অ্যাস্ট্রোসাইট-নিউরন ল্যাকটেট শাটল (ANLS) কাঠামো'),
          paragraphs: [
            l(
              'In 1994, Pierre Magistretti and Luc Pellerin proposed the Astrocyte-Neuron Lactate Shuttle (ANLS) hypothesis to resolve the spatial bioenergetics of cerebral activation. Glutamatergic synaptic transmission releases glutamate into the synaptic cleft. Astrocytic end-feet clear glutamate via Na+-dependent excitatory amino acid transporters (EAAT1/GLT-1), co-transporting 3 Na+ ions per glutamate.',
              '১৯৯৪ সালে পিয়েরে ম্যাজিস্ট্রেট্রি মস্তিষ্কের শক্তি ব্যবহারের ওপর ANLS মডেল প্রস্তাব করেন। স্নায়ুকোষ সংকেত আদান-প্রদানের সময় গ্লুটামেট নির্গত করে। অ্যাস্ট্রোসাইট কোষ তিনটি সোডিয়াম আয়নের সাথে গ্লুটামেটকে নিজের ভেতর টেনে নেয়।'
            ),
            l(
              'The resultant intra-astrocytic Na+ surge activates the alpha2 subunit of Na+/K+-ATPase, consuming ATP. This rapid drop in ATP stimulates astrocytic glycolysis, drawing blood glucose through GLUT1 and converting it to lactate. Astrocytes export lactate via MCT4 and MCT1 into the extracellular space. Neighboring neurons, expressing high levels of MCT2 (Km ~0.7 mM) and LDH-1, import this lactate and oxidize it directly to pyruvate, fueling mitochondrial oxidative phosphorylation to sustain synaptic transmission and long-term potentiation.',
              'কোষের ভেতর সোডিয়াম বেড়ে যাওয়ায় সোডিয়াম-পটাশিয়াম পাম্প চালু হয়ে এটিপি খরচ করে। এর ফলে অ্যাস্ট্রোসাইটে দ্রুত গ্লাইকোলাইসিস চালু হয় এবং ল্যাকটেট তৈরি হয়ে MCT4 দিয়ে বাইরে বের হয়। নিউরন MCT2 বাহক দিয়ে এই ল্যাকটেট গ্রহণ করে সরাসরি সাইট্রিক অ্যাসিড চক্রে পুড়িয়ে শক্তি তৈরি করে যা স্মৃতি সংরক্ষণে সাহায্য করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Cytosolic Redox Telemetry: The Lactate/Pyruvate Ratio', 'সাইটোসোলিক রেডক্স পরিমাপ: ল্যাকটেট/পাইরুভেট অনুপাত'),
          paragraphs: [
            l(
              'Because the lactate dehydrogenase reaction is near-equilibrium (Delta-G ~ 0) and operates with rapid kinetics in vivo, the mass action ratio of lactate to pyruvate directly reflects the free cytosolic [NADH]/[NAD+] ratio: [Lactate] / [Pyruvate] = K_eq * ([NADH][H+] / [NAD+]). At physiological pH 7.40 and 37 degrees C, K_eq * [H+] is approximately 1.1 x 10^-4. Therefore, an arterial lactate/pyruvate ratio of 10:1 corresponds to a free cytosolic [NAD+]/[NADH] ratio of approximately 700:1.',
              'যেহেতু ল্যাকটেট ডিহাইড্রোজিনেজ বিক্রিয়াটি প্রায় ভারসাম্যাবস্থায় থাকে, তাই রক্তে ল্যাকটেট ও পাইরুভেটের অনুপাত সরাসরি সাইটোসলের মুক্ত [NADH]/[NAD+] রেডক্স অবস্থা প্রকাশ করে: [Lactate] / [Pyruvate] = K_eq * ([NADH][H+] / [NAD+])। স্বাভাবিক অবস্থায় এই অনুপাত ১০:১ থেকে ২০:১ এর মধ্যে থাকে যা কোষের স্বাভাবিক অক্সিজেন মাত্রা প্রমাণ করে।'
            ),
            l(
              'Whenever cellular hypoxia arrests the mitochondrial electron transport chain, NADH accumulates in the matrix and backs up into the cytosol via the malate-aspartate shuttle. As cytosolic NADH surges, the L/P ratio rises dramatically to 30:1, 50:1, or even >100:1, providing clinicians with a specific biomarker of severe cellular dysoxia and tissue hypoperfusion.',
              'টিস্যুতে অক্সিজেনের অভাব হলে ইলেকট্রন ট্রান্সপোর্ট চেইন বন্ধ হয়ে যায় এবং সাইটোসোলে প্রচুর এনএডিএইচ জমে যায়। এর ফলে L/P অনুপাত দ্রুত বেড়ে ৩০:১ বা ৫০:১ ছাড়িয়ে যায়, যা চিকিৎসকদের কাছে টিস্যুতে চরম অক্সিজেন সংকটের নিখুঁত প্রমাণ হিসেবে কাজ করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Review of Lactate Biology', 'ল্যাকটেট জীববিজ্ঞানের একাডেমিক পর্যালোচনা'),
          paragraphs: [
            l(
              'Lactate is the central circulating carbohydrate currency of human metabolism. Monocarboxylate transporters mediate its bidirectional transfer, the Cori and Cahill cycles coordinate hepatic recycling at a thermodynamic cost of 4 ATP equivalents, and the serum L/P ratio serves as a definitive real-time readout of intracellular redox homeostasis.',
              'ল্যাকটেট হলো মানবদেহের কেন্দ্রীয় শর্করা মুদ্রা। এমসিটি বাহকগুলো এর দ্বিমুখী পরিবহন ঘটায়, কোরি ও কাহিল চক্র ৪টি এটিপি ব্যয়ে যকৃতে এর পুনর্ব্যবহার নিশ্চিত করে এবং রক্তের L/P অনুপাত কোষের রেডক্স ভারসাম্যের নিখুঁত চিত্র তুলে ধরে।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced & Research Level', 'উচ্চতর ও গবেষণা স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('Clinical Taxonomy: Type A versus Type B Lactic Acidosis', 'ক্লিনিক্যাল শ্রেণিবিন্যাস: টাইপ এ বনাম টাইপ বি ল্যাকটিক অ্যাসিডোসিস'),
          paragraphs: [
            l(
              'Lactic acidosis is clinically defined as a serum lactate concentration exceeding 4.0 mmol/L accompanied by metabolic acidemia (arterial pH < 7.35, serum bicarbonate < 20 mEq/L) and an elevated serum anion gap. In 1976, Cohen and Woods established the authoritative clinical classification dividing lactic acidosis into Type A (associated with clinical evidence of tissue hypoperfusion or hypoxia) and Type B (occurring in the absence of overt tissue hypoperfusion).',
              'চিকিৎসাবিজ্ঞানে ল্যাকটিক অ্যাসিডোসিসকে সংজ্ঞায়িত করা হয় রক্তে ল্যাকটেট >৪.০ mmol/L, রক্তে pH <৭.৩৫, বাইকার্বোনেট <২০ mEq/L এবং অ্যানায়ন গ্যাপ বৃদ্ধির সমন্বয় হিসেবে। ১৯৭৬ সালে কোহেন ও উডস একে দুটি প্রধান ভাগে বিভক্ত করেন: টাইপ এ (যেখানে টিস্যুতে অক্সিজেন বা রক্ত প্রবাহের স্পষ্ট ঘাটতি থাকে) এবং টাইপ বি (যেখানে কোনো রক্ত প্রবাহের ঘাটতি ছাড়াই ল্যাকটেট বাড়ে)।'
            ),
            l(
              'Type A represents over 85% of clinical cases, driven by cardiogenic shock, septic shock, hypovolemic shock, cardiac arrest, severe carbon monoxide poisoning, or acute mesenteric ischemia. In Type A, systemic oxygen delivery fails to meet metabolic demand; the mitochondrial electron transport chain stalls, cytosolic NADH surges, and pyruvate is overwhelmingly diverted to lactate, generating marked elevations in the Lactate/Pyruvate ratio (>30:1).',
              'হাসপাতালের প্রায় ৮৫% রোগী টাইপ এ অ্যাসিডোসিসে আক্রান্ত হন যা সেপটিক শক, হার্ট অ্যাটাক, অতিরিক্ত রক্তক্ষরণ বা বিষাক্ত কার্বন মনোক্সাইডের কারণে ঘটে। এতে টিস্যুতে অক্সিজেন না পৌঁছানোয় মাইটোকন্ড্রিয়া বন্ধ হয়ে যায় এবং বিপুল পরিমাণ ল্যাকটেট জমে L/P অনুপাত ৩০:১ ছাড়িয়ে যায়।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Mechanisms of Type B Lactic Acidosis: Metformin, Thiamine & Malignancy', 'টাইপ বি অ্যাসিডোসিসের আণবিক কারণ: মেটফরমিন, থায়ামিন ও ক্যান্সার'),
          paragraphs: [
            l(
              'Type B lactic acidosis is subdivided into three categories: Type B1 (underlying systemic diseases without hypoxia, notably severe cirrhosis halting hepatic gluconeogenic clearance, diabetic ketoacidosis, and acute renal failure); Type B2 (drugs and toxins, including metformin, linezolid, propofol infusion syndrome, nucleoside reverse transcriptase inhibitors [NRTIs], and cyanide); and Type B3 (inborn errors of metabolism, such as pyruvate carboxylase deficiency and mitochondrial encephalomyopathies).',
              'টাইপ বি অ্যাসিডোসিস তিনটি উপভাগে বিভক্ত: টাইপ B1 (লিভার ফেইলিউরের মতো রোগ যেখানে লিভার ল্যাকটেট পরিষ্কার করতে পারে না); টাইপ B2 (মেটফরমিন, সাইনাইড বা লাইনেজোলিড জাতীয় ওষুধ ও বিষ); এবং টাইপ B3 (মাইটোকন্ড্রিয়াল এনজাইমের জন্মগত ত্রুটি)।'
            ),
            l(
              'Metformin-Associated Lactic Acidosis (MALA) occurs when biguanide concentrations accumulate, mildly inhibiting Complex I and halting hepatic gluconeogenesis. Thiamine deficiency produces severe lactic acidosis because the Pyruvate Dehydrogenase Complex (PDC) requires thiamine pyrophosphate (TPP); without TPP, pyruvate cannot enter the citric acid cycle and shunts into lactate. In hematologic malignancies (the Warburg effect in leukemia and lymphoma), tumor overexpression of LDHA and hexokinase generates massive lactate production exceeding hepatic clearance capacity.',
              'মেটফরমিন জমে গেলে কমপ্লেক্স I অবরুদ্ধ হয়ে লিভারের গ্লুকোজ তৈরি বন্ধ হয়ে যায় এবং ল্যাকটেট বাড়ে। থায়ামিনের ঘাটতি হলে পাইরুভেট ডিহাইড্রোজিনেজ (PDC) কাজ করতে পারে না, ফলে সমস্ত পাইরুভেট ল্যাকটেটে পরিণত হয়। ব্লাড ক্যান্সারের মতো টিউমারেও অতিরিক্ত গ্লাইকোলাইসিসের কারণে লিভারের পরিষ্কার করার ক্ষমতার চেয়ে বেশি ল্যাকটেট তৈরি হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Lactate as an Epigenetic Regulator: Histone Lactylation', 'এপিজেনেটিক নিয়ন্ত্রক হিসেবে ল্যাকটেট: হিস্টোন ল্যাকটাইলেশন'),
          paragraphs: [
            l(
              'In 2019, Yingming Zhao and colleagues uncovered a revolutionary paradigm: lactate is not merely an energy metabolite, but a direct epigenetic modifier of gene expression through a novel post-translational modification termed histone lactylation. Elevated intracellular lactate is converted to lactyl-CoA, which p300/CBP histone acetyltransferases transfer onto lysine residues of core histone proteins (e.g., H3K18la).',
              '২০১৯ সালে ইংমিং ঝাও এক বৈপ্লবিক আবিষ্কার প্রকাশ করেন: ল্যাকটেট কেবল শক্তির উৎস নয়, এটি হিস্টোন ল্যাকটাইলেশন নামক প্রক্রিয়ার মাধ্যমে সরাসরি জিনের প্রকাশ নিয়ন্ত্রণ করে। কোষের ভেতর ল্যাকটেট ল্যাকটাইল-কোএ তে পরিণত হয়ে হিস্টোন প্রোটিনের লাইসিন অ্যামিনো অ্যাসিডে যুক্ত হয়।'
            ),
            l(
              'In macrophages exposed to bacterial lipopolysaccharide, the initial pro-inflammatory glycolytic burst produces high intracellular lactate; subsequent histone lactylation at gene promoters switches macrophages from a pro-inflammatory M1 phenotype toward a reparative, anti-inflammatory M2 phenotype by inducing genes such as Arg1. This establishes lactate as an endogenous feedback signal that terminates inflammation and initiates tissue repair.',
              'ব্যাক্টেরিয়া ইনফেকশনে ম্যাক্রোফেজ প্রথমে প্রচুর ল্যাকটেট তৈরি করে; পরবর্তীতে এই ল্যাকটেট হিস্টোনে যুক্ত হয়ে ম্যাক্রোফেজকে প্রদাহ বন্ধ করে টিস্যু মেরামতের কাজে অংশ নিতে নির্দেশ দেয়। এটি প্রমাণ করে যে ল্যাকটেট মানবদেহে প্রদাহ প্রশমন ও ক্ষত নিরাময়ের এক অন্যতম প্রাকৃতিক সংকেত হিসেবে কাজ করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Diagnostic Workup & The Pitfalls of Sodium Bicarbonate Therapy', 'রোগ নির্ণয় পদ্ধতি ও সোডিয়াম বাইকার্বোনেট চিকিৎসার ঝুঁকি'),
          paragraphs: [
            l(
              'Evaluating elevated lactate requires calculating the anion gap: [Na+] - ([Cl-] + [HCO3-]). In lactic acidosis, the unmeasured anion is lactate, widening the anion gap (>12 mEq/L). Crucially, routine administration of intravenous sodium bicarbonate to correct acidemia remains controversial and often harmful in Type A lactic acidosis. Sodium bicarbonate infusion generates carbon dioxide: HCO3- + H+ <-> H2CO3 <-> CO2 + H2O.',
              'ল্যাকটিক অ্যাসিডোসিস নির্ণয়ে অ্যানায়ন গ্যাপ হিসাব করা হয়: [Na+] - ([Cl-] + [HCO3-])। ল্যাকটেট জমার কারণে অ্যানায়ন গ্যাপ ১২ mEq/L-এর চেয়ে বেড়ে যায়। তবে শিরায় সোডিয়াম বাইকার্বোনেট ইনজেকশন দেওয়া অত্যন্ত বিতর্কিত ও ঝুঁকিপূর্ণ কারণ বাইকার্বোনেট রক্তের প্রোটনের সাথে বিক্রিয়া করে প্রচুর কার্বন ডাই-অক্সাইড গ্যাস তৈরি করে।'
            ),
            l(
              'While bicarbonate clears slowly, CO2 diffuses instantly across cell membranes into hepatocytes and myocardium. Inside the cells, CO2 hydrates to carbonic acid, paradoxical intracellular acidosis worsens, and cardiac contractility drops precipitously. The definitive therapy for lactic acidosis is treating the underlying etiology: restoring tissue perfusion with fluids and inotropes in Type A, or initiating urgent hemodialysis to clear metformin in MALA.',
              'CO2 দ্রুত কোষের ভেতর ঢুকে যায় এবং অন্তর্কোষীয় অম্লতা বহুগুণ বাড়িয়ে দিয়ে হৃদযন্ত্রের পাম্প করার ক্ষমতা কমিয়ে দেয়। তাই অ্যাসিডোসিসের মূল চিকিৎসা হলো অন্তর্নিহিত কারণ দূর করা: টাইপ এ-তে রক্ত সঞ্চালন ঠিক করা এবং মেটফরমিন বিষক্রিয়ায় দ্রুত হেমোডায়ালাইসিস করা।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Frontiers in Lactate Research', 'ল্যাকটেট গবেষণার ভবিষ্যৎ দিগন্ত'),
          paragraphs: [
            l(
              'The science of lactate has transitioned from a crude 20th-century myth of muscular fatigue poison to a 21st-century recognition of a master energetic currency, signaling hormone, and epigenetic regulator. Understanding the integrated kinetics of the Lactate Shuttle, the Cori cycle, and cellular redox telemetry remains foundational to modern critical care medicine, sports science, and metabolic oncology.',
              'ল্যাকটেট বিজ্ঞান বিংশ শতাব্দীর ভুল "পেশি বিষ" ধারণা থেকে বেরিয়ে একবিংশ শতাব্দীতে শক্তি মুদ্রা, সংকেত হরমোন ও এপিজেনেটিক নিয়ন্ত্রক হিসেবে প্রতিষ্ঠিত হয়েছে। ল্যাকটেট শাটল, কোরি চক্র এবং রেডক্স ভারসাম্যের সমন্বিত জ্ঞান আধুনিক ক্রিটিক্যাল কেয়ার মেডিসিন ও স্পোর্টস সায়েন্সের অন্যতম মূল ভিত্তি।'
            ),
          ],
        },
      ],
    },
  },
}
