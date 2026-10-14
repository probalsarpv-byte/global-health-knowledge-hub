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
    doi: '10.1152/physrev.00018.2016',
  },
  {
    id: 'wright-sglt1-physiology',
    authors: 'Ernest M. Wright, Donald D. F. Loo, Bruce A. Hirayama',
    title: 'Biology of Human Sodium Glucose Cotransporters',
    organization: 'Physiological Reviews',
    year: 2011,
    url: 'https://doi.org/10.1152/physrev.00055.2009',
    doi: '10.1152/physrev.00055.2009',
  },
  {
    id: 'who-ors-formulation',
    authors: 'World Health Organization, UNICEF',
    title: 'Oral rehydration salts: production of the new ORS',
    organization: 'World Health Organization',
    year: 2006,
    url: 'https://apps.who.int/iris/handle/10665/43343',
  },
]

export const nutrition02MacronutrientDigestionLesson: LessonTopic = {
  id: 'topic.nutrition.macronutrient-digestion',
  slug: 'macronutrient-digestion-absorption',
  version: 2,
  updatedAt: '2026-10-14',
  title: l(
    '02 · Macronutrient Digestion, Brush-Border Transport & Absorption Mechanics',
    '০২ · ম্যাক্রোনিউট্রিয়েন্ট পরিপাক, ব্রাশ-বর্ডার পরিবহন ও শোষণ প্রক্রিয়া'
  ),
  summary: l(
    'The molecular physiology of human nutrient assimilation: sequential luminal hydrolysis, duodenal zymogen cascades, enterocyte brush-border kinetics (SGLT1, GLUT5, PepT1), micellar lipid absorption, chylomicron exocytosis, and portal versus lymphatic partitioning.',
    'মানবদেহে পুষ্টি শোষণের আণবিক শারীরবৃত্ত: ধারাবাহিক লুমিনাল আর্দ্রবিশ্লেষণ, ডিওডেনাল জাইমোজেন সক্রিয়করণ, এন্টারোসাইট ব্রাশ-বর্ডার গতিবিদ্যা (SGLT1, GLUT5, PepT1), মাইসেল গঠন, কাইলোমাইক্রন নির্গমন এবং পোর্টাল বনাম লসিকা সঞ্চালন।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-14',
  objectives: [
    l(
      'Map the sequential mechanical and biochemical stages of carbohydrate, protein, and lipid digestion across oral, gastric, duodenal, and jejunal anatomical compartments.',
      'মুখবিবর, পাকস্থলী, ডিওডেনাম ও জেজুনামের মধ্য দিয়ে শর্করা, প্রোটিন ও চর্বি পরিপাকের যান্ত্রিক ও রাসায়নিক ধাপগুলোর ধারাবাহিক শারীরবৃত্তীয় মানচিত্র তৈরি করা।'
    ),
    l(
      'Contrast apical and basolateral enterocyte transport mechanisms, distinguishing secondary active sodium cotransport (SGLT1) and proton cotransport (PepT1) from facilitated diffusion (GLUT5, GLUT2).',
      'এন্টারোসাইটের অ্যাপিক্যাল ও বেসোল্যাটারাল ঝিল্লির পরিবহন ব্যবস্থার তুলনা করা এবং গৌণ সক্রিয় সোডিয়াম পরিবহন (SGLT1) ও প্রোটন পরিবহন (PepT1) থেকে সহায়ক ব্যাপনের (GLUT5, GLUT2) পার্থক্য নিরূপণ করা।'
    ),
    l(
      'Trace the biochemical assembly of chylomicrons via MTP and apoB-48, explaining why long-chain lipids bypass the portal vein into lymphatic lacteals while short- and medium-chain fatty acids enter portal blood.',
      'এমটিপি (MTP) এবং অ্যাপোবি-৪৮ (apoB-48) দিয়ে কাইলোমাইক্রন তৈরির রাসায়নিক প্রক্রিয়া ব্যাখ্যা করা এবং দীর্ঘ ফ্যাটি অ্যাসিড কেন পোর্টাল শিরা এড়িয়ে লসিকায় যায় আর ক্ষুদ্র ও মাঝারি ফ্যাটি অ্যাসিড পোর্টাল রক্তে প্রবেশ করে তা বিশ্লেষণ করা।'
    ),
    l(
      'Apply epithelial transport kinetics to clinical pathologies and therapies, including the stoichiometric physiology of Oral Rehydration Solution (ORS), lactose intolerance, and celiac villous atrophy.',
      'এপিথেলিয়াল পরিবহন গতিবিদ্যাকে ক্লিনিক্যাল রোগ ও চিকিৎসায় প্রয়োগ করা, যার মধ্যে খাবার স্যালাইনের (ORS) স্টইকিওমেট্রিক কার্যপদ্ধতি, ল্যাকটোজ অসহনশীলতা এবং সিলিয়াক ভিলাস অ্যাট্রোফি অন্তর্ভুক্ত।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.energy-balance-tdee'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  references: digestionRefs,
  evidenceBySection: {
    introduction: ['goodman-modern-nutrition-digestion', 'gropper-advanced-nutrition-digestion'],
    structure: ['gropper-advanced-nutrition-digestion', 'krause-nutrition-care-digestion'],
    mechanism: ['goodman-modern-nutrition-digestion', 'broer-physrev-amino-acid-transport', 'wright-sglt1-physiology'],
    integration: ['gropper-advanced-nutrition-digestion', 'goodman-modern-nutrition-digestion', 'who-ors-formulation'],
    practice: ['krause-nutrition-care-digestion', 'broer-physrev-amino-acid-transport', 'who-ors-formulation'],
    takeaways: ['goodman-modern-nutrition-digestion', 'krause-nutrition-care-digestion'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Digestive Architecture & Luminal Hydrolysis', '১. পরিপাকতন্ত্রের কাঠামো ও লুমেনের আর্দ্রবিশ্লেষণ'), sectionId: 'introduction' },
      { id: 'sec-brush-border', label: l('2. Brush-Border Membrane Hydrolases', '২. ব্রাশ-বর্ডার ঝিল্লির হাইড্রোলেজ এনজাইমসমূহ'), sectionId: 'structure' },
      { id: 'sec-transport', label: l('3. Epithelial Transporters: SGLT1, GLUT5, PepT1', '৩. আবরণী পরিবহন প্রোটিন: SGLT1, GLUT5, PepT1'), sectionId: 'mechanism' },
      { id: 'sec-lipids', label: l('4. Lipid Emulsification, Micelles & Chylomicron Assembly', '৪. লিপিড ইমালসিফিকেশন, মাইসেল ও কাইলোমাইক্রন গঠন'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Quantitative Transport Kinetics & Clinical Case Reasoning', '৫. পরিমাণগত পরিবহন গতিবিদ্যা ও ক্লিনিক্যাল কেস বিশ্লেষণ'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Enterocyte', 'এন্টারোসাইট'),
        definition: l(
          'The specialized simple columnar epithelial absorptive cell lining the intestinal mucosa, featuring an apical brush border composed of up to 3,000 microvilli densely coated with glycoprotein glycocalyx enzymes to maximize hydrolytic and transport surface area.',
          'ক্ষুদ্রান্ত্রের অভ্যন্তরীণ মিউকোসায় অবস্থিত স্তম্ভাকার শোষণকারী আবরণী কোষ, যার শীর্ষদেশে প্রায় ৩,০০০ মাইক্রোভিলাই সমৃদ্ধ ব্রাশ-বর্ডার এবং এনজাইমযুক্ত গ্লাইকোক্যালিক্স আবরণ থাকে যা শোষণতলকে কয়েকশ গুণ বৃদ্ধি করে।'
        ),
      },
      {
        term: l('Sodium-Glucose Cotransporter 1 (SGLT1)', 'সোডিয়াম-গ্লুকোজ কো-ট্রান্সপোর্টার ১ (SGLT1)'),
        definition: l(
          'A high-affinity, secondary active symporter protein (SLC5A1) embedded in the apical enterocyte microvillous membrane that simultaneously translocates two extracellular sodium ions down their electrochemical gradient alongside one molecule of D-glucose or D-galactose into the cytosol.',
          'এন্টারোসাইটের শীর্ষ ঝিল্লিতে অবস্থিত একটি উচ্চ-আকর্ষণের গৌণ সক্রিয় সিম্পোর্টার প্রোটিন (SLC5A1), যা কোষের ভেতরের সোডিয়াম গ্রেডিয়েন্ট কাজে লাগিয়ে ২টি সোডিয়াম আয়নের সাথে ১টি গ্লুকোজ বা গ্যালাক্টোজ অণুকে সাইটোসলে টেনে নেয়।'
        ),
      },
      {
        term: l('Peptide Transporter 1 (PepT1)', 'পেপটাইড ট্রান্সপোর্টার ১ (PepT1)'),
        definition: l(
          'A proton-coupled, electrogenic oligopeptide symporter (SLC15A1) localized to the apical enterocyte membrane that utilizes an inward proton electrochemical gradient to transport dietary dipeptides and tripeptides into the enterocyte with greater kinetic efficiency than individual free amino acids.',
          'এন্টারোসাইটের শীর্ষে অবস্থিত একটি প্রোটন-নির্ভর ইলেকট্রোজেনিক পরিবাহক প্রোটিন (SLC15A1), যা প্রোটন গ্রেডিয়েন্ট ব্যবহার করে মুক্ত অ্যামিনো অ্যাসিডের চেয়েও দ্রুত গতিতে খাদ্যের ডাইপেপটাইড ও ট্রাইপেপটাইড শোষণ করে।'
        ),
      },
      {
        term: l('Micelle', 'মাইসেল (Micelle)'),
        definition: l(
          'A cylindrical polymolecular aggregate (4–8 nm in diameter) formed in the duodenal lumen when amphipathic conjugated bile salts and phospholipids surround nonpolar lipid digestion products (2-monoacylglycerols, free fatty acids, cholesterol), enabling them to cross the unstirred aqueous mucus layer.',
          'ডিওডেনামে গঠিত অতি-ক্ষুদ্র নলাকার পলিমলিকুলার কণা (৪-৮ ন্যানোমিটার), যেখানে পিত্ত লবণ ও ফসফোলিপিড চর্বির পরিপাকজাত উপাদানগুলোকে ঘিরে ধরে এবং পানিরোধী মিউকাস স্তর ভেদ করে শোষণ ঝিল্লির কাছে পৌঁছে দেয়।'
        ),
      },
      {
        term: l('Chylomicron', 'কাইলোমাইক্রন (Chylomicron)'),
        definition: l(
          'The largest class of lipoprotein particles (75–600 nm diameter), synthesized exclusively within intestinal enterocyte endoplasmic reticulum and Golgi apparatus by packaging re-esterified triacylglycerols and cholesteryl esters into an amphipathic shell composed of phospholipids, free cholesterol, and apolipoprotein B-48 for exocytosis into central lacteals.',
          'সবচেয়ে বড় আকারের লাইপোপ্রোটিন কণা (৭৫-৬০০ ন্যানোমিটার), যা এন্টারোসাইটের এন্ডোপ্লাজমিক রেটিকুলামে পুনর্গঠিত ট্রাইগ্লিসারাইড ও কোলেস্টেরলকে অ্যাপোবি-৪৮ (apoB-48) প্রোটিন দিয়ে মুড়িয়ে তৈরি করা হয় এবং লসিকা নালির মাধ্যমে রক্তে পাঠানো হয়।'
        ),
      },
      {
        term: l('Zymogen', 'জাইমোজেন (Zymogen / Proenzyme)'),
        definition: l(
          'An inactive catalytic enzyme precursor that requires biochemical cleavage of an inhibitory peptide segment—such as duodenal enteropeptidase cleaving trypsinogen to yield active trypsin—to unmask its catalytic active site, preventing autolytic autodigestion of the pancreas and secretory ducts.',
          'এনজাইমের নিষ্ক্রিয় অগ্রদূত প্রোটিন, যা ক্ষরণকারী অঙ্গকে নিজস্ব পাচক রস থেকে রক্ষা করতে একটি প্রতিরোধী অংশ কেটে ফেলার মাধ্যমে সক্রিয় রূপ ধারণ করে; যেমন এন্টারোপেপটাইডেজ দ্বারা ট্রিপসিনোজেন ট্রিপসিনে রূপান্তরিত হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Biophysical Stoichiometry of WHO Oral Rehydration Solution (ORS)',
          'হু (WHO) খাবার স্যালাইনের (ORS) জৈব-ভৌত স্টইকিওমেট্রিক পরিবহন বিশ্লেষণ'
        ),
        steps: [
          l(
            'Step 1: Clinical Problem Formulation. In severe secretory cholera diarrhea, Vibrio cholerae enterotoxin irreversibly ADP-ribosylates the Gs-alpha subunit of enterocyte adenylate cyclase. Intracellular cyclic AMP (cAMP) climbs pathologically, locking CFTR chloride channels permanently open and driving massive luminal sodium and water efflux, causing fatal dehydration.',
            'ধাপ ১: ক্লিনিক্যাল সমস্যা: কলেরার টক্সিন এন্টারোসাইটের অ্যাডেনাইলেট সাইক্লেজকে অতি-সক্রিয় করে সাইক্লিক এএমপি (cAMP) বহুগুণ বাড়িয়ে দেয়। এর ফলে CFTR ক্লোরাইড চ্যানেল স্থায়ীভাবে খুলে গিয়ে শরীর থেকে ভয়াবহ হারে সোডিয়াম, ক্লোরাইড ও পানি লুমেনে বেরিয়ে গিয়ে মারাত্মক পানিশূন্যতা ঘটায়।'
          ),
          l(
            'Step 2: Identifying the Uninhibited Transport Bypass. While cAMP locks secretor channels and inhibits electroneutral NaCl absorption (NHE3), the sodium-glucose cotransporter SGLT1 (SLC5A1) on the apical brush border remains completely functional and unaffected by intracellular cAMP or cholera toxin.',
            'ধাপ ২: বিকল্প পরিবাহক শনাক্তকরণ: cAMP নিঃসরণ বাড়ালেও শীর্ষে থাকা সোডিয়াম-গ্লুকোজ কো-ট্রান্সপোর্টার ১ (SGLT1) সম্পূর্ণ অক্ষত থাকে এবং টক্সিন সত্ত্বেও স্বাভাবিকভাবে কাজ চালিয়ে যেতে পারে।'
          ),
          l(
            'Step 3: Calculating Stoichiometric Coupling. SGLT1 operates with a fixed stoichiometry: 2 Na+ ions are transported for every 1 D-glucose molecule (2:1 molar ratio). Osmotic solvent drag couples this ion movement: for every 1 osmole of solute translocated into the enterocyte, osmotic pressure draws approximately 260 to 300 mL of water through transcellular aquaporins and paracellular tight junctions into the portal circulation.',
            'ধাপ ৩: স্টইকিওমেট্রিক অনুপাত গণনা: SGLT1 এর অনুপাত সুনির্দিষ্ট: প্রতি ১টি গ্লুকোজ অণুর সাথে ২টি সোডিয়াম আয়ন কোষে প্রবেশ করে। এই দ্রাবকের টানে প্রতিটি অসমোল কণার সাথে প্রায় ২৬০ থেকে ৩০০ মিলি পানি অন্ত্রের প্রাচীর ভেদ করে রক্তে ফিরে আসে।'
          ),
          l(
            'Step 4: Evaluating the WHO Reduced-Osmolarity Formulation. The modern WHO ORS formulation contains 75 mmol/L Glucose and 75 mmol/L Sodium (total osmolarity = 245 mOsm/L). This equimolar balance optimizes SGLT1 transport saturation without creating luminal hyperosmolality, reversing net intestinal fluid secretion into net absorption within minutes.',
            'ধাপ ৪: ডব্লিউএইচও স্যালাইনের অনুপাত: আধুনিক ডব্লিউএইচও ওআরএসে ৭৫ মিলিমোল/লিটার গ্লুকোজ এবং ৭৫ মিলিমোল/লিটার সোডিয়াম থাকে (মোট অসমোলারিটি ২৪৫ mOsm/L)। এই নিখুঁত সমতা অন্ত্রের লুমেনে অতিরিক্ত চাপ না বাড়িয়ে মুহূর্তেই পানি শোষণ শুরু করায় জীবন রক্ষা পায়।'
          ),
        ],
        conclusion: l(
          'Understanding SGLT1 molecular stoichiometry transformed global child mortality: ORS saves over 1 million children annually by exploiting secondary active cotransport to bypass toxin-mediated secretory diarrhea without requiring intravenous fluid replacement.',
          'SGLT1 এর আণবিক স্টইকিওমেট্রি আবিষ্কারের ফলে মুখে খাবার স্যালাইন প্রয়োগ করে শিরায় স্যালাইন দেওয়া ছাড়াই কলেরার ভয়াবহ পানিশূন্যতা রোধ করা সম্ভব হয়েছে, যা বিশ্বজুড়ে বছরে ১০ লক্ষাধিক শিশুর প্রাণ বাঁচায়।'
        ),
      },
      {
        title: l(
          'Nitrogen Absorption Efficiency: Peptide (PepT1) vs Free Amino Acid Transporters',
          'নাইট্রোজেন শোষণের দক্ষতা: পেপটাইড পরিবাহক (PepT1) বনাম মুক্ত অ্যামিনো অ্যাসিড'
        ),
        steps: [
          l(
            'Step 1: Physiological Substrate Comparison. Compare the absorption of 300 mmol of amino acid residues supplied as either 300 mmol of free monomeric L-leucine versus 150 mmol of the dipeptide glycyl-leucine.',
            'ধাপ ১: সাবস্ট্রেটের তুলনা: ৩০০ মিলিমোল অ্যামিনো অ্যাসিড গ্রহণের ক্ষেত্রে ৩০০ মিলিমোল মুক্ত লিউসিন বনাম ১৫০ মিলিমোল গ্লাইসিল-লিউসিন ডাইপেপটাইডের শোষণ দক্ষতার তুলনা।'
          ),
          l(
            'Step 2: Energetic & Kinetic Cost of Free Amino Acids. Free leucine requires the apical System B0 transporter (B0AT1 / SLC6A19), which couples 1 Na+ per leucine molecule. Absorbing 300 mmol of free leucine requires co-transporting 300 mmol of Na+, which must subsequently be extruded by the basolateral Na+/K+-ATPase at a cost of 100 mmol of ATP (3 Na+ extruded per ATP hydrolyzed).',
            'ধাপ ২: মুক্ত অ্যামিনো অ্যাসিডের শক্তি খরচ: মুক্ত লিউসিন শোষণে B0AT1 পরিবাহক ১টি সোডিয়াম ব্যবহার করে। ফলে ৩০০ মিলিমোল সোডিয়াম কোষ থেকে বের করতে বেসোল্যাটারাল পাম্পে ১০০ মিলিমোল এটিপি নষ্ট হয়।'
          ),
          l(
            'Step 3: PepT1 Oligopeptide Kinetic Advantage. Glycyl-leucine is transported via PepT1 (SLC15A1) coupled to 1 H+ ion. Thus, 150 mmol of transport cycles absorb the entire 300 mmol of amino acid residues, transporting only 150 mmol of H+. Protons are recycled back into the lumen via the apical NHE3 antiporter.',
            'ধাপ ৩: PepT1 এর গতিময় শ্রেষ্ঠত্ব: ডাইপেপটাইড হিসেবে PepT1 মাত্র ১৫০টি চক্রে সম্পূর্ণ ৩০০ মিলিমোল অ্যামিনো অ্যাসিড শোষণ করে এবং মাত্র ১৫০ মিলিমোল প্রোটন খরচ করে; যা কোষীয় শক্তির ব্যাপক সাশ্রয় ঘটায়।'
          ),
        ],
        conclusion: l(
          'Over 65% to 75% of dietary protein nitrogen is absorbed across the apical brush border as dipeptides and tripeptides via PepT1 rather than as free amino acids, explaining why semi-elemental peptide enteral formulas exhibit faster absorption and lower osmotic diarrhea risk than elemental free-amino-acid diets in patients with compromised gastrointestinal mucosa.',
          'খাদ্যের প্রোটিন নাইট্রোজেনের ৬৫% থেকে ৭৫% মুক্ত অ্যামিনো অ্যাসিড হিসেবে নয় বরং PepT1 দিয়ে ডাই- ও ট্রাইপেপটাইড হিসেবে শোষিত হয়; যা ব্যাখ্যা করে কেন অসুস্থ অন্ত্রের রোগীদের পেপটাইড-ভিত্তিক ফর্মুলা দিলে মুক্ত অ্যামিনো অ্যাসিডের চেয়ে দ্রুত কাজ করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does congenital absence of enteropeptidase (enterokinase) lead to fatal protein malnutrition despite normal pancreatic proteolytic zymogen synthesis?',
          'অগ্ন্যাশয়ে পাচক এনজাইম স্বাভাবিকভাবে তৈরি হওয়া সত্ত্বেও এন্টারোপেপটাইডেজ এনজাইমের জন্মগত ঘাটতি কেন মারাত্মক প্রোটিন অপুষ্টি সৃষ্টি করে?'
        ),
        answer: l(
          'Pancreatic proteases are secreted as inactive zymogens (trypsinogen, chymotrypsinogen, proelastase, procarboxypeptidases). Enteropeptidase on the duodenal brush border is the obligate physiological "spark" that cleaves trypsinogen into active trypsin. Without active trypsin, none of the downstream zymogens can be cleaved and activated, completely halting intestinal protein digestion.',
          'অগ্ন্যাশয়ের সব প্রোটিওলাইটিক এনজাইম নিষ্ক্রিয় জাইমোজেন হিসেবে বের হয়। ডিওডেনামের ব্রাশ-বর্ডারে থাকা এন্টারোপেপটাইডেজ হলো মূল অনুঘটক যা ট্রিপসিনোজেনকে কেটে ট্রিপসিনে রূপান্তর করে। সক্রিয় ট্রিপসিন না থাকলে অন্যান্য এনজাইম (কাইমোট্রিপসিন, ইলাস্টেজ) কখনোই সক্রিয় হতে পারে না, ফলে প্রোটিন পরিপাক সম্পূর্ণ বন্ধ হয়ে যায়।'
        ),
      },
      {
        question: l(
          'How do medium-chain triglycerides (MCTs, C6–C12) bypass the lymphatic system unlike long-chain dietary fats?',
          'মাঝারি শৃঙ্খলের ট্রাইগ্লিসারাইড (MCT, C6-C12) কীভাবে দীর্ঘ চর্বির মতো লসিকা নালিতে না গিয়ে সরাসরি যকৃতে প্রবেশ করে?'
        ),
        answer: l(
          'Due to their shorter hydrocarbon chain length, medium-chain fatty acids (MCFAs) are water-soluble and do not require bile acid micellar incorporation. Inside the enterocyte, they do not undergo re-esterification into triacylglycerols and are not packaged into chylomicrons; instead, they diffuse directly across the basolateral membrane into mucosal capillaries and travel through the portal vein bound to albumin directly to the liver for immediate beta-oxidation.',
          'কার্বন শৃঙ্খল ছোট হওয়ায় মাঝারি ফ্যাটি অ্যাসিডগুলো পানিতে দ্রবণীয় এবং এদের জন্য পিত্ত লবণের মাইসেল লাগে না। এন্টারোসাইটে প্রবেশ করে এগুলো পুনরায় ট্রাইগ্লিসারাইড গঠন করে না এবং কাইলোমাইক্রনে মোড়কজাত হয় না; বরং সরাসরি বেসোল্যাটারাল ঝিল্লি ভেদ করে রক্তে অ্যালবুমিনের সাথে যুক্ত হয়ে পোর্টাল শিরার মাধ্যমে তৎক্ষণাৎ যকৃতে চলে যায়।'
        ),
      },
      {
        question: l(
          'What distinguishes the transport kinetics of SGLT1 from GLUT5 on the enterocyte apical membrane?',
          'এন্টারোসাইটের শীর্ষে অবস্থিত SGLT1 এবং GLUT5 এর পরিবহন গতিবিদ্যার প্রধান পার্থক্য কী?'
        ),
        answer: l(
          'SGLT1 is a secondary active cotransporter that couples 2 Na+ ions down their electrochemical gradient to pump 1 glucose or galactose molecule against a concentration gradient, achieving uphill transport. In contrast, GLUT5 is a facilitated uniporter specific for D-fructose that operates strictly via downhill facilitated diffusion without ion coupling; it cannot transport fructose against a concentration gradient and exhibits a lower maximal velocity, predisposing to fructose malabsorption under high dietary fructose loads.',
          'SGLT1 হলো গৌণ সক্রিয় পরিবাহক যা সোডিয়াম গ্রেডিয়েন্টের সাহায্যে ঘনত্বের বিপরীত দিকেও গ্লুকোজ বা গ্যালাক্টোজ শোষণ করতে পারে। অন্যদিকে GLUT5 হলো কেবল ফ্রুক্টোজের সহায়ক ব্যাপন পরিবাহক যা কোনো আয়ন ছাড়াই কাজ করে; ফলে এটি ঘনত্বের বিপরীতে কাজ করতে পারে না এবং দ্রুত স্যাচুরেটেড হয়ে ফ্রুক্টোজের পেটের সমস্যা তৈরি করে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'enterocyte-transporters-diagram',
    title: l(
      'Interactive Enterocyte Microvillus Transport Architecture',
      'ইন্টারেক্টিভ এন্টারোসাইট মাইক্রোভিলির পরিবহন রূপরেখা'
    ),
    description: l(
      'Explore the spatial localization and molecular kinetics of apical brush-border hydrolases, active symporters, facilitative carriers, and basolateral exit pathways across the intestinal enterocyte.',
      'অন্ত্রীয় এন্টারোসাইটের শীর্ষ ব্রাশ-বর্ডার হাইড্রোলেজ, সক্রিয় সিম্পোর্টার, সহায়ক পরিবাহক এবং বেসোল্যাটারাল নির্গমন পথের অবস্থান ও গতিবিদ্যা পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Schematic representation of mature human jejunal enterocyte; expression patterns shift dynamically along the crypt-villus axis and proximal-distal intestinal gradient.',
      'সুস্থ মানব জেজুনামের পরিণত এন্টারোসাইটের চিত্র; অন্ত্রের দৈর্ঘ্য এবং ক্রিপ্ট-ভিলাস অক্ষ বরাবর এর ঘনত্ব পরিবর্তিত হতে পারে।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'sglt1-node',
        label: l('SGLT1 (Apical Na+/Glucose Symporter)', 'SGLT1 (শীর্ষ Na+/গ্লুকোজ সিম্পোর্টার)'),
        description: l(
          'Stoichiometrically cotransports 2 Na+ ions alongside 1 glucose or galactose molecule into the cytosol, driven by the inwardly directed sodium gradient.',
          'কোষের ভেতরের সোডিয়াম গ্রেডিয়েন্টের টানে ২টি সোডিয়াম আয়নের সাথে ১টি গ্লুকোজ বা গ্যালাক্টোজ অণুকে সাইটোসলে টেনে নেয়।'
        ),
        details: l(
          'Inhibited phlorizin; completely functional during cholera and E. coli enterotoxigenic diarrhea, serving as the biological engine of Oral Rehydration Therapy.',
          'কলেরার টক্সিনে এটি ক্ষতিগ্রস্ত হয় না, যার ফলে খাবার স্যালাইনের (ORS) মাধ্যমে জীবন রক্ষা সম্ভব হয়।'
        ),
        sectionId: 'mechanism',
        color: '#059669',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'pept1-node',
        label: l('PepT1 (Apical H+/Peptide Symporter)', 'PepT1 (শীর্ষ H+/পেপটাইড সিম্পোর্টার)'),
        description: l(
          'Utilizes the microclimatic proton gradient generated by apical NHE3 to translocate dipeptides and tripeptides into the enterocyte with high kinetic capacity.',
          'শীর্ষ ঝিল্লির প্রোটন গ্রেডিয়েন্ট কাজে লাগিয়ে ডাই- ও ট্রাইপেপটাইডগুলোকে অত্যন্ত দ্রুত গতিতে এন্টারোসাইটের ভেতরে টেনে নেয়।'
        ),
        details: l(
          'Absorbs over 70% of dietary protein nitrogen; also responsible for the oral bioavailability of beta-lactam antibiotics and ACE inhibitors.',
          'খাদ্যের প্রোটিনের সিংহভাগ এই পথেই শোষিত হয়; এমনকি অ্যামোক্সিসিলিনের মতো অ্যান্টিবায়োটিকও এই পথে শরীরে ঢোকে।'
        ),
        sectionId: 'mechanism',
        color: '#10b981',
        svgCoords: { x: 25, y: 95, width: 310, height: 48 },
      },
      {
        id: 'glut5-node',
        label: l('GLUT5 (Apical Fructose Facilitated Carrier)', 'GLUT5 (শীর্ষ ফ্রুক্টোজ সহায়ক বাহক)'),
        description: l(
          'Mediates sodium-independent facilitated diffusion of D-fructose down its chemical concentration gradient into the enterocyte.',
          'সোডিয়াম ছাড়াই ঘনত্বের অনুকূলে ডি-ফ্রুক্টোজ অণুর সহায়ক ব্যাপন সম্পন্ন করে এন্টারোসাইটের ভেতর পৌঁছে দেয়।'
        ),
        details: l(
          'Low capacity and easily saturated; unabsorbed luminal fructose draws water osmotically and undergoes colonic microbial gas fermentation.',
          'এর ধারণক্ষমতা কম হওয়ায় অতিরিক্ত মিষ্টি বা কর্ন সিরাপ খেলে পেটে গ্যাস ও ডায়রিয়া হতে পারে।'
        ),
        sectionId: 'mechanism',
        color: '#34d399',
        svgCoords: { x: 25, y: 155, width: 310, height: 48 },
      },
      {
        id: 'chylomicron-node',
        label: l('Chylomicron Assembly & Lacteal Exocytosis', 'কাইলোমাইক্রন মোড়কীকরণ ও লসিকায় নির্গমন'),
        description: l(
          'Re-esterified triacylglycerols and cholesteryl esters packaged with apolipoprotein B-48 and phospholipids in the ER/Golgi for exocytosis into central lacteals.',
          'এন্টারোসাইটের ভেতরে চর্বিকে পুনরায় ট্রাইগ্লিসারাইড বানিয়ে apoB-48 দিয়ে মুড়িয়ে কাইলোমাইক্রন হিসেবে লসিকা নালিতে পাঠানো হয়।'
        ),
        details: l(
          'Bypasses the hepatic portal vein, entering the venous circulation via the thoracic duct into the left subclavian vein.',
          'এটি যকৃতের পোর্টাল শিরা এড়িয়ে থোরাসিক ডাক্ট দিয়ে সরাসরি সাধারণ রক্তসঞ্চালনে প্রবেশ করে।'
        ),
        sectionId: 'integration',
        color: '#047857',
        svgCoords: { x: 25, y: 215, width: 310, height: 48 },
      },
      {
        id: 'na-k-pump-node',
        label: l('Basolateral Na+/K+-ATPase Engine', 'বেসোল্যাটারাল Na+/K+-ATPase ইঞ্জিন'),
        description: l(
          'Pumps 3 intracellular Na+ ions out in exchange for 2 K+ ions entering, burning 1 ATP to preserve the vital inwardly directed sodium gradient.',
          'প্রতিটি এটিপি খরচ করে ৩টি সোডিয়াম বাইরে বের করে ও ২টি পটাশিয়াম ভেতরে এনে শীর্ষ পরিবহন চালু রাখার গ্রেডিয়েন্ট তৈরি করে।'
        ),
        details: l(
          'The fundamental bioenergetic motor driving all secondary active apical transport throughout the intestinal epithelium.',
          'সমগ্র অন্ত্রের খাদ্য শোষণের প্রধান চালিকাশক্তি হলো এই বেসোল্যাটারাল সোডিয়াম পাম্প।'
        ),
        sectionId: 'structure',
        color: '#065f46',
        svgCoords: { x: 25, y: 275, width: 310, height: 48 },
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'A sequential diagram mapping the flow of digested macronutrients from the intestinal lumen across apical brush-border transporters into the enterocyte and out through basolateral carriers into portal blood and lymphatic lacteals.',
      'অন্ত্রের লুমেন থেকে ব্রাশ-বর্ডার দিয়ে এন্টারোসাইটে পুষ্টি প্রবেশ এবং বেসোল্যাটারাল ঝিল্লি দিয়ে রক্ত ও লসিকায় স্থানান্তরের ক্রমান্বয়িক রূপরেখা।'
    ),
    steps: [
      l(
        'Step 1: Luminal Hydrolysis breakdown by salivary, gastric, and pancreatic enzymes into monosaccharides, oligopeptides, and lipid micelles.',
        'ধাপ ১: লালা, পাকস্থলী ও অগ্ন্যাশয়ের এনজাইম দ্বারা খাদ্য ভেঙে মনোস্যাকারাইড, পেপটাইড ও লিপিড মাইসেলে রূপান্তর।'
      ),
      l(
        'Step 2: Brush-Border Cleavage by surface disaccharidases and peptidases anchored to the microvillus glycocalyx.',
        'ধাপ ২: মাইক্রোভিলাই গ্লাইকোক্যালিক্সে অবস্থিত ডাইস্যাকারাইডেজ ও পেপটাইডেজ দ্বারা চূড়ান্ত একক উপাদানে রূপান্তর।'
      ),
      l(
        'Step 3: Apical Influx via active symporters (SGLT1 for glucose/galactose, PepT1 for peptides) and facilitated uniporters (GLUT5 for fructose).',
        'ধাপ ৩: সক্রিয় পরিবাহক (SGLT1, PepT1) ও সহায়ক বাহক (GLUT5) দিয়ে এন্টারোসাইটের ভেতরে পুষ্টি প্রবেশ।'
      ),
      l(
        'Step 4: Basolateral Efflux into capillaries (sugars and amino acids via GLUT2 and basolateral carriers) and lymphatic lacteals (chylomicrons via exocytosis).',
        'ধাপ ৪: বেসোল্যাটারাল ঝিল্লি দিয়ে রক্তনালিতে শর্করা ও অ্যামিনো অ্যাসিডের এবং লসিকা নালিতে কাইলোমাইক্রনের নির্গমন।'
      ),
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Digestive Journey: From Complex Food to Cellular Nutrients', 'পরিপাকের অভিযাত্রা: জটিল খাদ্য থেকে কোষীয় পুষ্টি'),
          paragraphs: [
            l(
              'Imagine looking at a complete meal: rice, lentils, vegetables, and chicken or fish. To the human eye, these are solid foods, but to the cells of your body, they are giant polymeric molecules that cannot possibly cross through biological membranes in their original form [1, 2]. Proteins are long folded chains of hundreds of amino acids; starches are massive branched polymers containing thousands of glucose rings; and dietary fats are bulky water-insoluble triglycerides [2, 3]. The fundamental purpose of the digestive system is to dismantle these complex food architectures into their microscopic single-unit building blocks: simple sugars (monosaccharides), individual amino acids, small peptides, and free fatty acids [1, 2].',
              'একটি সম্পূর্ণ খাবারের থালার কথা ভাবুন: ভাত, ডাল, শাকসবজি এবং মাছ বা মাংস। আমাদের চোখে এগুলো খাবার হলেও আমাদের কোষের কাছে এগুলো জটিল বৃহদাকার পলিমার অণু, যা কোনোভাবেই রক্তে বা কোষে সরাসরি ঢুকতে পারে না [1, 2]। প্রোটিন হলো শত শত অ্যামিনো অ্যাসিডের লম্বা চেইন; শ্বেতসার হলো হাজার হাজার গ্লুকোজের জটিল পলিমার; আর চর্বি হলো পানিতে অদ্রবণীয় ভারী ট্রাইগ্লিসারাইড [2, 3]। পরিপাকতন্ত্রের মূল উদ্দেশ্য হলো যান্ত্রিক ও রাসায়নিক প্রক্রিয়ার মাধ্যমে এই জটিল খাবারগুলোকে ভেঙে তাদের একক মৌলিক উপাদানে রূপান্তরিত করা: একক শর্করা (মনোস্যাকারাইড), মুক্ত অ্যামিনো অ্যাসিড, ছোট পেপটাইড এবং ফ্যাটি অ্যাসিড [1, 2]।'
            ),
            l(
              'This digestive transformation occurs in an orderly, multi-stage conveyor belt. It begins in the oral cavity, where teeth mechanically grind food into smaller particles while salivary alpha-amylase initiates starch breakdown [2]. In the stomach, muscular churning mixes food with powerful hydrochloric acid (HCl) and the protein-cleaving enzyme pepsin, creating a liquid mixture called chyme [1, 2]. However, the vast majority of all chemical digestion and almost all nutrient absorption occurs in the first two sections of the small intestine: the duodenum and the jejunum [2, 3].',
              'এই রূপান্তরটি পরিপাকনালির একটি সুশৃঙ্খল ধাপে ধাপে সাজানো কনভেয়র বেল্টের মতো ঘটে। মুখবিবরে দাঁত দিয়ে খাবার চর্বণ করার সময় লালাগ্রন্থির অ্যামাইলেজ শ্বেতসার ভাঙা শুরু করে [2]। পাকস্থলীতে পৌঁছালে শক্তিশালী হাইড্রোক্লোরিক অ্যাসিড (HCl) এবং পেপসিন এনজাইম খাবারের জীবাণু ধ্বংস করে ও প্রোটিন ভেঙে এক প্রকার পাতলা লেই তৈরি করে, যাকে কাইম (chyme) বলে [1, 2]। কিন্তু পরিপাকের আসল রাসায়নিক যজ্ঞ এবং পুষ্টির প্রায় সম্পূর্ণ শোষণ সম্পন্ন হয় ক্ষুদ্রান্ত্রের প্রথম দুটি অংশে: ডিওডেনাম এবং জেজুনামে [2, 3]।'
            ),
            l(
              'To achieve this monumental task, the small intestine is engineered with an astonishing anatomical design. If the intestinal lining were simply a smooth pipe, food would pass through far too quickly to be absorbed. Instead, the mucosal surface is folded into macroscopic circular folds, which are carpeted with millions of finger-like projections called villi [1, 2]. Each individual villus is covered by thousands of absorptive cells called enterocytes, and the surface of each enterocyte is covered with microscopic bristles called microvilli [2, 3]. Together, this folding expands the absorptive surface area of the human small intestine to approximately 30 square meters—roughly the size of a tennis court—ensuring that virtually every calorie and nutrient is successfully captured [1, 3].',
              'এই বিশাল দায়িত্ব পালনের জন্য ক্ষুদ্রান্ত্রের গঠনশৈলী অত্যন্ত বিস্ময়কর। অন্ত্র যদি কেবল একটি মসৃণ পাইপের মতো হতো, তবে খাবার শোষিত হওয়ার আগেই শরীর থেকে বেরিয়ে যেত। কিন্তু ক্ষুদ্রান্ত্রের অভ্যন্তরীণ প্রাচীর অজস্র গোলাকার খাঁজে মোড়ানো, যার ওপর ভেলভেটের মতো লক্ষ লক্ষ আঙ্গুলের মতো অভিক্ষেপ বা ভিলাস (villi) সাজানো থাকে [1, 2]। প্রতিটি ভিলাস আবার এন্টারোসাইট নামের হাজার হাজার শোষণকারী কোষ দিয়ে গঠিত, যাদের মাথায় ব্রাশের লোমের মতো মাইক্রোভিলাই থাকে [2, 3]। এই অবিশ্বাস্য গঠনের ফলে ক্ষুদ্রান্ত্রের অভ্যন্তরীণ শোষণতল একটি টেনিস কোর্টের সমান (প্রায় ৩০ বর্গমিটার) বিশাল হয়ে দাঁড়ায়, যা খাবারের প্রতিটি পুষ্টিকণা শোষণে শতভাগ নিশ্চয়তা দেয় [1, 3]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Brush-Border Membrane Hydrolases: The Final Enzymatic Gate', 'ব্রাশ-বর্ডার ঝিল্লির হাইড্রোলেজ এনজাইমসমূহ: চূড়ান্ত পরিপাক ফটক'),
          paragraphs: [
            l(
              'While pancreatic enzymes in the intestinal lumen break down massive starch and protein chains into smaller fragments, they cannot finish the job alone [2]. Pancreatic amylase can only break starches down into two-sugar pairs (maltose), three-sugar chains (maltotriose), and small branched oligosaccharides; it cannot liberate free glucose [2, 3]. Similarly, pancreatic proteases break long proteins into short peptide chains of 2 to 6 amino acids, but not completely into absorbable single units [1, 3].',
              'যদিও অগ্ন্যাশয় থেকে আসা পাচক রস ক্ষুদ্রান্ত্রের ফাঁপা নালির ভেতরে শ্বেতসার ও প্রোটিনকে ভেঙে ছোট ছোট খণ্ডে বিভক্ত করে, তারা কিন্তু একাই কাজটি সম্পূর্ণ করতে পারে না [2]। অগ্ন্যাশয়ের অ্যামাইলেজ শ্বেতসারকে কেবল দুই বা তিন অণুর শর্করার টুকরোতে পরিণত করতে পারে; এটি একা সরাসরি মুক্ত গ্লুকোজ তৈরি করতে পারে না [2, 3]। একইভাবে অগ্ন্যাশয়ের প্রোটিয়েজ এনজাইমগুলো প্রোটিনকে কয়েক টুকরো অ্যামিনো অ্যাসিডের ছোট পেপটাইডে ভাঙে, কিন্তু সরাসরি শোষণযোগ্য একক এককে রূপ দিতে পারে না [1, 3]।'
            ),
            l(
              'The final finishing work is carried out by specialized catalytic enzymes directly anchored to the surface of the microvilli, a microscopic region called the brush-border membrane [2, 3]. This layer is coated with a protective meshwork of sugars and proteins known as the glycocalyx. Embedded within this glycocalyx are disaccharidases, which cleave specific two-sugar molecules: lactase breaks milk sugar (lactose) into glucose and galactose; sucrase-isomaltase breaks table sugar (sucrose) into glucose and fructose and splits branched starch bonds; and maltase cleaves maltose into two glucose molecules [2, 3].',
              'পরিপাকের এই চূড়ান্ত কাজটির দায়িত্ব নেয় এন্টারোসাইটের ব্রাশ-বর্ডার ঝিল্লিতে স্থায়ীভাবে আটকানো বিশেষায়িত এনজাইমসমূহ [2, 3]। মাইক্রোভিলাইয়ের গায়ে গ্লাইকোক্যালিক্স নামের একটি সূক্ষ্ম জালির মতো আবরণ থাকে, যার ভেতরে এই এনজাইমগুলো নোঙর করা থাকে। এখানে থাকা ডাইস্যাকারাইডেজ এনজাইমগুলো সুনির্দিষ্ট শর্করাকে ভেঙে ফেলে: ল্যাকটেজ দুধের শর্করাকে (ল্যাকটোজ) ভেঙে গ্লুকোজ ও গ্যালাক্টোজ তৈরি করে; সুক্রেজ সাধারণ চিনিকে (সুক্রোজ) ভেঙে গ্লুকোজ ও ফ্রুক্টোজ তৈরি করে; আর মল্টেজ মল্টোজকে দুটি গ্লুকোজে পরিণত করে [2, 3]।'
            ),
            l(
              'Simultaneously, a battery of brush-border peptidases attacks the small protein fragments. Enzymes such as aminopeptidases and dipeptidyl peptidases snip amino acids from the ends of peptides, producing free amino acids, dipeptides (two linked amino acids), and tripeptides (three linked amino acids) [1, 4]. Because these final digestive enzymes are physically fixed right next to the transport channels, newly released nutrients can be pumped into the cell instantaneously before they can diffuse away or be consumed by gut bacteria [1, 2].',
              'একই সময়ে ব্রাশ-বর্ডারের পেপটাইডেজ এনজাইমগুলো ছোট প্রোটিন খণ্ডগুলোকে আক্রমণ করে। অ্যামিনোপেপটাইডেজের মতো এনজাইমগুলো পেপটাইডের প্রান্ত থেকে একটি একটি করে অ্যামিনো অ্যাসিড কেটে আলাদা করে এবং মুক্ত অ্যামিনো অ্যাসিড ও ডাই-ট্রাইপেপটাইড তৈরি করে [1, 4]। যেহেতু এই এনজাইমগুলো সরাসরি কোষের পরিবহন দরজার মুখেই নোঙর করা থাকে, তাই খাদ্য ভাঙার সাথে সাথেই পুষ্টিকণাগুলো তৎক্ষণাৎ কোষের ভেতরে ঢুকে পড়ে, কোনো জীবাণু তা ছিনিয়ে নেওয়ার সুযোগ পায় না [1, 2]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Epithelial Transporters: Pumping Nutrients Across the Membrane', 'আবরণী পরিবহন প্রোটিন: ঝিল্লি ভেদ করে পুষ্টি টানার কৌশল'),
          paragraphs: [
            l(
              'Once nutrients are digested into single units, they face a formidable biological barrier: the enterocyte cell membrane, which is made of a hydrophobic lipid bilayer that water-soluble sugars and amino acids cannot freely cross [1, 2]. To enter the bloodstream, nutrients must pass through specialized protein doorways called transporters [2, 3].',
              'খাদ্য ভেঙে একক পুষ্টিকণায় পরিণত হওয়ার পর তারা আরেকটি কঠিন বাধার মুখে পড়ে: এন্টারোসাইটের কোষঝিল্লি, যা তৈলাক্ত লিপিড দিয়ে তৈরি। পানিতে দ্রবণীয় শর্করা ও অ্যামিনো অ্যাসিড এই তৈলাক্ত প্রাচীর ভেদ করে নিজে নিজে ভেতরে ঢুকতে পারে না [1, 2]। এদের রক্তে পৌঁছাতে হলে কোষঝিল্লিতে বসানো বিশেষায়িত পরিবহন প্রোটিনের সাহায্য নিতে হয় [2, 3]।'
            ),
            l(
              'For glucose and galactose, the primary vehicle is the Sodium-Glucose Cotransporter 1 (SGLT1) [3, 5]. SGLT1 works like a revolving door powered by a sodium gradient: the cell actively pumps sodium out through its base using a sodium-potassium pump ($Na^+/K^+$-ATPase), creating low sodium inside the cell. Sodium from the intestinal lumen rushes inward down this concentration gradient, and SGLT1 harnesses that rush of energy to drag glucose and galactose molecules along with it [2, 5]. In contrast, fruit sugar (fructose) does not use sodium; it enters through a different protein called GLUT5 via facilitated diffusion [2, 3].',
              'গ্লুকোজ ও গ্যালাক্টোজের প্রধান বাহক হলো সোডিয়াম-গ্লুকোজ কো-ট্রান্সপোর্টার ১ (SGLT1) [3, 5]। এটি সোডিয়াম গ্রেডিয়েন্টের শক্তিতে চলা একটি ঘূর্ণায়মান দরজার মতো কাজ করে: কোষটি তার পেছনের দেয়াল দিয়ে সোডিয়াম বাইরে পাম্প করে কোষের ভেতর সোডিয়ামের ঘাটতি তৈরি করে। অন্ত্রের লুমেন থেকে সোডিয়াম যখন তীব্র বেগে কোষের ভেতরে ঢুকতে চায়, SGLT1 সেই ধাক্কাকে কাজে লাগিয়ে সোডিয়ামের সাথে গ্লুকোজ ও গ্যালাক্টোজ অণুকেও টেনে ভেতরে নিয়ে আসে [2, 5]। বিপরীতে ফ্রুক্টোজ বা ফলের শর্করা কোনো সোডিয়াম ব্যবহার করে না; এটি GLUT5 নামের একটি পৃথক বাহকের সাহায্যে সহজ ব্যাপনের মাধ্যমে প্রবেশ করে [2, 3]।'
            ),
            l(
              'For dietary proteins, nature utilizes an even faster express pathway: Peptide Transporter 1 (PepT1) [1, 4]. Rather than waiting for proteins to be broken down completely into individual amino acids, PepT1 uses an inward flow of hydrogen ions (protons) to transport whole dipeptides and tripeptides directly into the enterocyte [4]. In fact, the human body absorbs over 70% of its dietary protein in peptide form through PepT1, making it vastly more efficient than transporting single amino acids one by one [1, 4]. Once inside the cell, internal enzymes quickly cleave these peptides into free amino acids before they are exported across the other side of the cell into the bloodstream via GLUT2 and amino acid carriers [1, 2].',
              'প্রোটিনের জন্য প্রকৃতি আরও চমৎকার একটি দ্রুতগামী এক্সপ্রেস লেন তৈরি করেছে: পেপটাইড ট্রান্সপোর্টার ১ (PepT1) [1, 4]। পুরো প্রোটিন ভেঙে একটি একটি অ্যামিনো অ্যাসিড হওয়া পর্যন্ত অপেক্ষা না করে, PepT1 প্রোটনের ধাক্কা কাজে লাগিয়ে একসাথে দুটি বা তিনটি অ্যামিনো অ্যাসিডের পেপটাইডকে সরাসরি কোষে টেনে নেয় [4]। প্রকৃতপক্ষে মানুষ খাদ্যের ৭০ শতাংশেরও বেশি প্রোটিন এই PepT1 এর মাধ্যমে ডাই- ও ট্রাইপেপটাইড হিসেবে শোষণ করে, যা একটি একটি অ্যামিনো অ্যাসিড টানার চেয়ে বহুগুণ বেশি কার্যকর [1, 4]। কোষের ভেতরে ঢোকার পর অভ্যন্তরীণ এনজাইমগুলো এদের ভেঙে একক অ্যামিনো অ্যাসিডে পরিণত করে এবং GLUT2 ও অন্যান্য বাহক দিয়ে রক্তে পাঠিয়ে দেয় [1, 2]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Lipid Emulsification, Micelles & Chylomicron Assembly', 'লিপিড ইমালসিফিকেশন, মাইসেল ও কাইলোমাইক্রন গঠন'),
          paragraphs: [
            l(
              'Fat digestion presents a unique physical challenge: fats are oily and hydrophobic, while the fluids of the stomach and intestine are watery [1, 2]. Without intervention, dietary fats would simply float on top of the stomach contents like oil on water, completely inaccessible to water-soluble enzymes [2]. To solve this, your liver synthesizes bile acids from cholesterol and stores them in the gallbladder. When fat enters the duodenum, the hormone cholecystokinin (CCK) triggers gallbladder contraction, squirting bile into the intestine [1, 2].',
              'চর্বি বা ফ্যাট পরিপাকে একটি সম্পূর্ণ ভিন্ন ভৌত চ্যালেঞ্জ দেখা দেয়: চর্বি তৈলাক্ত ও পানিরোধী, অথচ পরিপাকনালির পাচক রস সম্পূর্ণ জলীয় [1, 2]। কোনো ব্যবস্থা না থাকলে খাদ্যের তেল ও চর্বি পানির ওপর তেলের মতো ভেসে থাকত এবং পাচক রস এদের স্পর্শই করতে পারত না [2]। এই সমস্যা সমাধানের জন্য যকৃত কোলেস্টেরল থেকে পিত্ত অম্ল (bile acids) তৈরি করে পিত্তথলিতে জমা রাখে। চর্বি যখন ডিওডেনামে প্রবেশ করে, তখন সিসিকে (CCK) হরমোনের সংকেতে পিত্তথলি সংকুচিত হয়ে অন্ত্রে পিত্তরস ঢেলে দেয় [1, 2]।'
            ),
            l(
              'Bile acts exactly like dish soap: it emulsifies large fat globules into trillions of microscopic droplets, giving pancreatic lipase and its partner protein colipase an enormous surface area to attack [2, 3]. Lipase cleaves dietary triglycerides into two free fatty acids and one 2-monoacylglycerol molecule [3]. Bile acids then encircle these digested lipid molecules to form tiny spherical packages called micelles (only 4 to 8 nanometers wide) [1, 2]. These micelles transport the oily lipids across the watery mucus layer right to the enterocyte membrane, where fatty acids diffuse directly into the cell [2, 3].',
              'পিত্তরস ঠিক সাবানের মতো কাজ করে: এটি চর্বির বড় বড় ফোঁটাকে ভেঙে কোটি কোটি ক্ষুদ্রাতিক্ষুদ্র বিন্দুতে পরিণত করে (ইমালসিফিকেশন), যাতে অগ্ন্যাশয়ের লাইপেজ এনজাইম সহজে চর্বি ভাঙতে পারে [2, 3]। লাইপেজ ট্রাইগ্লিসারাইডকে ভেঙে দুটি ফ্যাটি অ্যাসিড এবং একটি ২-মনোগ্লিসারাইড অণুতে পরিণত করে [3]। এরপর পিত্ত লবণ এদের চারপাশে ঘিরে ধরে "মাইসেল" (micelle) নামের অতি-ক্ষুদ্র গোলক তৈরি করে। এই মাইসেলগুলো তৈলাক্ত ফ্যাটি অ্যাসিডকে জলীয় মিউকাস স্তর পার করে এন্টারোসাইটের কোষঝিল্লির কাছে পৌঁছে দেয়, যেখানে চর্বি সহজেই কোষের ভেতরে ঢুকে পড়ে [2, 3]।'
            ),
            l(
              'What happens to fat after it enters the cell is one of the most elegant feats of human biochemistry. If large amounts of free fatty acids were dumped directly into the bloodstream, they would act like detergents and destroy red blood cells [1, 2]. Therefore, inside the enterocyte’s endoplasmic reticulum, the cell reconstructs them into new triglycerides [1, 3]. It then coats these triglycerides with phospholipids, cholesterol, and a protein called Apolipoprotein B-48, assembling a microscopic lipoprotein submarine called a chylomicron [1, 2]. Because chylomicrons are too large to fit through the tight pores of ordinary blood capillaries, they are released into central lymphatic lacteals, traveling through the lymphatic system before emptying directly into the main bloodstream near the heart [1, 2].',
              'কোষে প্রবেশের পর চর্বির যে পরিণতি ঘটে তা মানবদেহের সবচেয়ে চমৎকার কৌশলগুলোর একটি। মুক্ত ফ্যাটি অ্যাসিড যদি সরাসরি রক্তে ছেড়ে দেওয়া হতো, তবে তারা সাবানের মতো লোহিত রক্তকণিকাকে গলিয়ে মেরে ফেলত [1, 2]। এজন্য এন্টারোসাইটের এন্ডোপ্লাজমিক রেটিকুলাম এদেরকে পুনরায় ট্রাইগ্লিসারাইডে রূপান্তর করে [1, 3]। এরপর কোষ এর চারপাশে ফসফোলিপিড, কোলেস্টেরল এবং অ্যাপোবি-৪৮ (apoB-48) প্রোটিনের একটি সুরক্ষামূলক খোলস পরিয়ে তৈরি করে "কাইলোমাইক্রন" নামের লাইপোপ্রোটিন সাবমেরিন [1, 2]। কাইলোমাইক্রনগুলো আকারে বড় হওয়ায় সাধারণ রক্তনালির ছিদ্র দিয়ে ঢুকতে পারে না; তাই এরা লসিকা নালির (ল্যাকটিয়েল) ভেতর দিয়ে প্রবাহিত হয়ে থোরাসিক ডাক্ট মারফত সরাসরি হৃৎপিণ্ডের কাছের রক্তে পৌঁছায় [1, 2]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Foundational Assessment & Transport Logic', 'মৌলিক মূল্যায়ন ও পুষ্টি পরিবহনের যুক্তি'),
          paragraphs: [
            l(
              'Understanding intestinal transport mechanics is essential for grasping clinical conditions. For instance, in primary lactose intolerance, the genetic expression of the brush-border enzyme lactase declines after childhood [2]. When an affected adult drinks cow milk, undigested lactose cannot be cleaved or transported across SGLT1; it remains trapped in the intestinal lumen, drawing water in by osmosis to cause watery diarrhea while colon bacteria ferment it into gas, bloating, and abdominal pain [1, 2].',
              'অন্ত্রের পরিবহন ব্যবস্থা বোঝা বিভিন্ন রোগ নির্ণয়ের জন্য অত্যন্ত জরুরি। উদাহরণস্বরূপ, ল্যাকটোজ অসহনশীলতায় শৈশবের পর ব্রাশ-বর্ডারের ল্যাকটেজ এনজাইমের মাত্রা কমে যায় [2]। এই ব্যক্তিরা দুধ পান করলে অক্ষত ল্যাকটোজ SGLT1 দিয়ে রক্তে ঢুকতে পারে না; ফলে তা অন্ত্রের ভেতরেই আটকে থাকে এবং অসমোসিসের মাধ্যমে অতিরিক্ত পানি টেনে এনে পাতলা পায়খানা ঘটায়; একই সাথে বৃহদন্ত্রের জীবাণুরা একে গাঁজন করে পেটে তীব্র গ্যাস ও ব্যথার সৃষ্টি করে [1, 2]।'
            ),
            l(
              'Similarly, in Celiac disease, an immune reaction to dietary gluten causes autoimmune destruction of the intestinal villi, flattening the brush border [1, 2]. With the microvilli obliterated, the surface area collapses from the size of a tennis court to a tiny fraction, destroying SGLT1, PepT1, and lactase enzymes and leading to severe malabsorption of calories, iron, and calcium [1, 3].',
              'একইভাবে সিলিয়াক রোগে খাদ্যের গ্লুটেনের কারণে সৃষ্ট অটোইমিউন প্রতিক্রিয়ায় ক্ষুদ্রান্ত্রের ভিলাসগুলো ধ্বংস হয়ে মসৃণ হয়ে যায় [1, 2]। ব্রাশ-বর্ডার ধ্বংস হওয়ার ফলে অন্ত্রের বিশাল শোষণতল ধ্বংস হয়ে যায় এবং SGLT1, PepT1 ও ল্যাকটেজ এনজাইমের তীব্র সংকট ঘটে; যার ফলে ক্যালোরি, আয়রন ও ক্যালসিয়াম শোষণ বন্ধ হয়ে রোগী ভয়াবহ পুষ্টিহীনতায় ভোগে [1, 3]।'
            ),
          ],
          bullets: [
            l('Digestion begins in the mouth (salivary amylase), continues in stomach (HCl, pepsin), and completes in the duodenum/jejunum [2].', 'পরিপাক মুখবিবরে শুরু হয়, পাকস্থলীতে এগোয় এবং ক্ষুদ্রান্ত্রের ডিওডেনাম ও জেজুনামে সম্পন্ন হয় [2]।'),
            l('Brush-border enzymes (lactase, sucrase, peptidases) perform the final cleavage into single absorbable units right at the cell surface [2].', 'ব্রাশ-বর্ডারের এনজাইমগুলো কোষের দরজার মুখেই খাবারকে চূড়ান্ত শোষণযোগ্য উপাদানে ভেঙে ফেলে [2]।'),
            l('SGLT1 pumps glucose/galactose using a sodium gradient; PepT1 pumps di/tripeptides using a proton gradient [4, 5].', 'SGLT1 সোডিয়াম গ্রেডিয়েন্ট দিয়ে শর্করা টানে; আর PepT1 প্রোটন গ্রেডিয়েন্ট দিয়ে পেপটাইড টানে [4, 5]।'),
            l('Bile acids form micelles to deliver fats to enterocytes; fats are then packaged into chylomicrons and exported into lymphatics [1, 2].', 'পিত্তরস মাইসেল তৈরি করে চর্বিকে কোষে পৌঁছে দেয়; পরে কোষ চর্বিকে কাইলোমাইক্রনে মুড়িয়ে লসিকায় পাঠায় [1, 2]।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Educational Summary', 'মূল শিক্ষা ও শিক্ষামূলক সারাংশ'),
          paragraphs: [
            l(
              'Macronutrient assimilation is a tightly integrated biophysical process: mechanical grinding, luminal zymogen hydrolysis, and brush-border enzyme digestion convert dietary macromolecules into single units [1, 2]. Epithelial uptake relies on specialized molecular transporters: SGLT1 for glucose/galactose, GLUT5 for fructose, and PepT1 for peptides [3, 4].',
              'ম্যাক্রোনিউট্রিয়েন্ট হজম ও শোষণ একটি অত্যন্ত সুসমন্বিত জৈব-ভৌত প্রক্রিয়া: যান্ত্রিক চর্বণ, লুমেনের এনজাইম ও ব্রাশ-বর্ডার হাইড্রোলেজ জটিল খাদ্যকে ভেঙে একক এককে রূপ দেয় [1, 2]। এপিথেলিয়াল শোষণ সুনির্দিষ্ট বাহক প্রোটিনের ওপর নির্ভরশীল: গ্লুকোজ ও গ্যালাক্টোজের জন্য SGLT1, ফ্রুক্টোজের জন্য GLUT5 এবং পেপটাইডের জন্য PepT1 [3, 4]।',
            ),
            l(
              'While water-soluble sugars and amino acids pass through the enterocyte directly into portal capillaries to nourish the liver, long-chain dietary lipids are re-esterified into triacylglycerols and packaged into chylomicrons, which enter the lymphatic lacteals to bypass the liver initially [1, 2]. Mastering these transport pathways is vital for understanding Oral Rehydration Therapy, lactose intolerance, and malabsorption syndromes [1, 6].',
              'পানিতে দ্রবণীয় শর্করা ও অ্যামিনো অ্যাসিড সরাসরি পোর্টাল শিরার রক্ত দিয়ে যকৃতে পৌঁছালেও চর্বির কাইলোমাইক্রনগুলো প্রথমে লসিকা নালির মাধ্যমে সাধারণ রক্তসঞ্চালনে প্রবেশ করে যকৃতকে বাইপাস করে [1, 2]। খাবার স্যালাইনের কার্যপদ্ধতি, দুধের পেটের সমস্যা এবং বিভিন্ন অন্ত্রীয় রোগ বুঝতে এই পরিবহন প্রক্রিয়াগুলো জানা অপরিহার্য [1, 6]।'
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
          heading: l('Luminal Zymogen Cascades & Duodenal Hydrolytic Architecture', 'লুমেনের জাইমোজেন সক্রিয়করণ ও ডিওডেনাল হাইড্রোলাইসিসের আণবিক কাঠামো'),
          paragraphs: [
            l(
              'The luminal phase of digestion is coordinated by the sequential secretion of proenzymes (zymogens) to prevent premature autodigestion of pancreatic acinar tissue and ductal epithelium [1, 2]. Upon the entry of acidic gastric chyme into the duodenal lumen, low pH stimulates enteroendocrine S-cells to secrete secretin, which triggers ductal epithelial secretion of bicarbonate-rich fluid to neutralize gastric acid (raising luminal pH to 6.0–7.0, the optimum for pancreatic enzymes) [2]. Concurrently, luminal fatty acids and amino acids trigger enteroendocrine I-cells to secrete cholecystokinin (CCK), stimulating acinar enzyme exocytosis [1, 2].',
              'পরিপাকের লুমিনাল পর্বটি মূলত প্রো-এনজাইম বা জাইমোজেন ক্ষরণের মাধ্যমে পরিচালিত হয়, যাতে অগ্ন্যাশয়ের নিজস্ব টিস্যু পাচক রসের প্রভাবে ক্ষতিগ্রস্ত না হয় [1, 2]। পাকস্থলীর অম্লীয় কাইম ডিওডেনামে প্রবেশের সাথে সাথে এস-কোষ (S-cells) থেকে সিক্রেটিন হরমোন ক্ষরিত হয়ে অগ্ন্যাশয় থেকে বাইকার্বোনেট সমৃদ্ধ ক্ষারীয় রস নিঃসরণ করায়, যা এসিড প্রশমিত করে লুমেনের পিএইচ ৬.০ থেকে ৭.০ এ উন্নীত করে (যা এনজাইমগুলোর কাজের জন্য আদর্শ) [2]। একই সাথে ফ্যাটি অ্যাসিড ও অ্যামিনো অ্যাসিডের উপস্থিতিতে আই-কোষ (I-cells) থেকে সিসিকে (CCK) ক্ষরিত হয়ে অগ্ন্যাশয়ের মূল পাচক এনজাইমগুলো নিঃসরণ করায় [1, 2]।'
            ),
            l(
              'The critical molecular spark of the intestinal proteolytic cascade is Enteropeptidase (historically termed enterokinase), a transmembrane serine protease anchored to the brush-border membrane of duodenal enterocytes [1, 2]. Enteropeptidase specifically recognizes the tetra-aspartyl-lysine sequence (Asp-Asp-Asp-Asp-Lys) of pancreatic trypsinogen, cleaving an N-terminal hexapeptide to yield active trypsin [2]. Once activated, trypsin functions as the master activator for all other pancreatic zymogens: it autocatalytically cleaves additional trypsinogen, converts chymotrypsinogen into active chymotrypsin (an endopeptidase cleaving at aromatic residues), converts proelastase into elastase (cleaving aliphatic residues), and converts procarboxypeptidases A and B into active zinc-metalloprotease exopeptidases that sequentially remove C-terminal amino acids [1, 3].',
              'ক্ষুদ্রান্ত্রের প্রোটিন পরিপাক শৃঙ্খলের প্রধান চালিকাশক্তি হলো এন্টারোপেপটাইডেজ (Enteropeptidase), যা ডিওডেনামের ব্রাশ-বর্ডারে আটকানো একটি বিশেষায়িত সেরিন প্রোটিয়েজ এনজাইম [1, 2]। এন্টারোপেপটাইডেজ অগ্ন্যাশয়ের নিষ্ক্রিয় ট্রিপসিনোজেনের সুনির্দিষ্ট অ্যামিনো অ্যাসিড সিকোয়েন্স (Asp-Asp-Asp-Asp-Lys) চিনে নিয়ে তার মাথার হেক্সাপেপটাইড কেটে সক্রিয় ট্রিপসিনে রূপান্তর করে [2]। ট্রিপসিন সক্রিয় হওয়ার সাথে সাথেই এটি সমগ্র অগ্ন্যাশয়ের অন্য সব জাইমোজেনের মূল সুইচ হিসেবে কাজ করে: এটি কাইমোট্রিপসিনোজেনকে সক্রিয় কাইমোট্রিপসিনে, প্রো-ইলাস্টেজকে ইলাস্টেজে এবং প্রো-কার্বক্সিপেপটাইডেজকে সক্রিয় কার্বক্সিপেপটাইডেজে পরিণত করে [1, 3]।'
            ),
            l(
              'For carbohydrates, pancreatic alpha-amylase is an endoglucosidase that specifically hydrolyzes internal alpha-1,4-glucosidic bonds of amylose and amylopectin [2, 3]. It cannot cleave terminal bonds or alpha-1,6 branch points, nor can it hydrolyze the adjacent alpha-1,4 bonds. Consequently, luminal amylolytic digestion yields three primary products: the disaccharide maltose (glucose-alpha-1,4-glucose), the trisaccharide maltotriose, and branched alpha-limit dextrins containing an average of 5 to 9 glucose units with alpha-1,6 linkages, necessitating membrane-bound brush-border hydrolases for complete conversion to monomers [2, 3].',
              'শর্করার ক্ষেত্রে অগ্ন্যাশয়ের আলফা-অ্যামাইলেজ একটি এন্ডোগ্লুকোসিডেজ যা শ্বেতসারের কেবল অভ্যন্তরীণ আলফা-১,৪ গ্লাইকোসিডিক বন্ধন ভাঙতে পারে [2, 3]। এটি শেষ প্রান্তের বন্ধন বা আলফা-১,৬ শাখার বন্ধন ভাঙতে পারে না। ফলে লুমেনে শ্বেতসার ভেঙে তিনটি প্রধান উপজাত তৈরি হয়: ডাইস্যাকারাইড মল্টোজ, ট্রাইস্যাকারাইড মল্টোট্রায়োজ এবং আলফা-১,৬ শাখা সম্বলিত আলফা-লিমিট ডেক্সট্রিন; যা পরবর্তী ধাপে একক গ্লুকোজে ভাঙার জন্য ব্রাশ-বর্ডারের ওপর সম্পূর্ণ নির্ভরশীল [2, 3]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Brush-Border Membrane Hydrolases & Glycocalyx Organization', 'ব্রাশ-বর্ডার ঝিল্লির হাইড্রোলেজ ও গ্লাইকোক্যালিক্সের রাসায়নিক বিন্যাস'),
          paragraphs: [
            l(
              'The intestinal brush-border membrane represents a highly organized specialized biochemical organelle [2]. Each enterocyte apical surface projects approximately 3,000 microvilli, supported by an internal actin microfilament cytoskeleton anchored to the terminal web. Covering the microvilli is the glycocalyx, an extensively glycosylated meshwork of transmembrane glycoproteins, mucins, and enzymes that extends 100 to 500 nm into the lumen, creating an acidic, protected unstirred microenvironment [1, 2].',
              'ক্ষুদ্রান্ত্রের ব্রাশ-বর্ডার ঝিল্লি একটি অত্যন্ত সুসংগঠিত বিশেষায়িত আণবিক অঙ্গাণু হিসেবে কাজ করে [2]। প্রতিটি এন্টারোসাইটের শীর্ষে প্রায় ৩,০০০ মাইক্রোভিলাই থাকে, যা অভ্যন্তরীণ অ্যাক্টিন ফিলামেন্টের কাঠামোর ওপর দাঁড়িয়ে থাকে। মাইক্রোভিলাইয়ের বাইরে গ্লাইকোক্যালিক্স নামের একটি ঘন গ্লাইকোপ্রোটিন ও মিউসিনের সুরক্ষা জালিকা থাকে, যা লুমেনের দিকে ১০০ থেকে ৫০০ ন্যানোমিটার বিস্তৃত হয়ে একটি সংরক্ষিত মাইক্রো-পরিবেশ গড়ে তোলে [1, 2]।'
            ),
            l(
              'Anchored within the microvillous membrane are four primary disaccharidase complexes: (1) Sucrase-Isomaltase (SI), a single polypeptide precursor cleaved by luminal trypsin into two catalytically active subunits held by non-covalent interactions: the isomaltase subunit cleaves alpha-1,6 bonds of limit dextrins, while the sucrase subunit cleaves sucrose into glucose and fructose, as well as maltose; (2) Maltase-Glucoamylase (MGA), which sequentially cleaves terminal alpha-1,4 bonds from the non-reducing ends of oligosaccharides; (3) Lactase-Phlorizin Hydrolase (LPH), a beta-galactosidase that hydrolyzes lactose into glucose and galactose; and (4) Trehalase, which splits trehalose into two glucose units [2, 3].',
              'এই ব্রাশ-বর্ডারের ঝিল্লিতে চারটি প্রধান ডাইস্যাকারাইডেজ এনজাইম নোঙর করা থাকে: (১) সুক্রেজ-আইসোমল্টেজ (SI), যার আইসোমল্টেজ অংশ লিমিট ডেক্সট্রিনের আলফা-১,৬ বন্ধন ভাঙে এবং সুক্রেজ অংশ সাধারণ চিনি ও মল্টোজকে ভাঙে; (২) মল্টেজ-গ্লুকোঅ্যামাইলেজ (MGA), যা অলিগোস্যাকারাইডের প্রান্ত থেকে একটি একটি করে গ্লুকোজ আলাদা করে; (৩) ল্যাকটেজ-ফ্লোরিজিন হাইড্রোলেজ (LPH), যা দুধের ল্যাকটোজকে গ্লুকোজ ও গ্যালাক্টোজ অণুতে ভেঙে ফেলে; এবং (৪) ট্রেহ্যালেজ, যা মাশরুমের ট্রেহ্যালোজ শর্করাকে ভেঙে দুটি গ্লুকোজ তৈরি করে [2, 3]।'
            ),
            l(
              'For oligopeptide completion, the brush border expresses an array of endo- and exopeptidases [1, 4]. Aminopeptidase N (CD13) and Aminopeptidase A remove neutral and acidic N-terminal amino acids, respectively; Dipeptidyl peptidase IV (DPP-4) cleaves N-terminal dipeptides adjacent to proline or alanine residues; and Carboxypeptidase P removes C-terminal residues [4]. Intracellular enterocyte cytosol also expresses abundant prolidase, dipeptidases, and tripeptidases, ensuring that oligopeptides absorbed via PepT1 are completely hydrolyzed into free amino acids prior to basolateral exit into the portal vein [1, 4].',
              'পেপটাইড সম্পূর্ণ করার জন্য ব্রাশ-বর্ডারে নানা প্রকার পেপটাইডেজ উপস্থিত থাকে [1, 4]। অ্যামিনোপেপটাইডেজ এন অ্যামিনো প্রান্ত থেকে নিউট্রাল অ্যামিনো অ্যাসিড কাটে; ডিপেপটাইডিল পেপটাইডেজ-৪ (DPP-4) প্রোলিনের পাশের পেপটাইড ভাঙে; এবং সাইটোসলের ভেতরে থাকা ডাইপেপটাইডেজ ও ট্রাইপেপটাইডেজ নিশ্চিত করে যে PepT1 দিয়ে কোষে ঢোকা ক্ষুদ্র পেপটাইডগুলো রক্তে যাওয়ার আগেই যেন সম্পূর্ণ মুক্ত অ্যামিনো অ্যাসিডে পরিণত হয় [1, 4]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Epithelial Transporter Kinetics: SGLT1, GLUT5, PepT1 & Basolateral Efflux', 'এপিথেলিয়াল পরিবহন গতিবিদ্যা: SGLT1, GLUT5, PepT1 ও বেসোল্যাটারাল নির্গমন'),
          paragraphs: [
            l(
              'Intestinal absorption of monosaccharides is mediated by distinct apical and basolateral facilitative and active transport systems [3, 5]. SGLT1 (SLC5A1) is an electrogenic, high-affinity, low-capacity transporter (Km ≈ 0.5 mM for D-glucose). Cryo-electron microscopy reveals an alternating-access transport cycle: binding of two external $Na^+$ ions induces an allosteric conformational shift that opens the sugar-binding pocket to external glucose or galactose; once sugar binds, the transporter closes externally and opens internally, releasing $2 Na^+$ and $1 sugar$ into the cytosol [5]. The electrochemical driving force is maintained continuously by the basolateral $Na^+/K^+$-ATPase, which hydrolyzes 1 ATP to export $3 Na^+$ and import $2 K^+$ [2, 5].',
              'একক শর্করার শোষণ অ্যাপিক্যাল এবং বেসোল্যাটারাল ঝিল্লির সুনির্দিষ্ট পরিবাহক দ্বারা নিয়ন্ত্রিত হয় [3, 5]। SGLT1 (SLC5A1) হলো একটি উচ্চ-আকর্ষণের ইলেকট্রোজেনিক গৌণ সক্রিয় বাহক (Km ≈ ০.৫ mM)। ক্রায়ো-ইলেকট্রন মাইক্রোস্কোপি দেখায় যে প্রথমে দুটি বহিঃকোষীয় সোডিয়াম আয়ন যুক্ত হলে বাহকের প্রোটিন গঠনে পরিবর্তন আসে এবং গ্লুকোজ যুক্ত হওয়ার পকেটটি খুলে যায়; এরপর গ্লুকোজ বসলে বাহকটি বাইরে বন্ধ হয়ে ভেতরে খুলে যায় এবং সাইটোসলে ২টি সোডিয়াম ও ১টি গ্লুকোজ ছেড়ে দেয় [5]। এই পুরো প্রক্রিয়ার চালিকাশক্তি হলো বেসোল্যাটারাল $Na^+/K^+$-ATPase, যা প্রতি এটিপিতে ৩টি সোডিয়াম বাইরে পাঠিয়ে কোষের ভেতরের সোডিয়াম শূন্যতা বজায় রাখে [2, 5]।'
            ),
            l(
              'In contrast, D-fructose absorption across the apical membrane is mediated exclusively by GLUT5 (SLC2A5), a class II facilitative glucose transporter family member with absolute specificity for fructose [2, 3]. GLUT5 operates via non-electrogenic facilitated diffusion (Km ≈ 6 to 11 mM); because it is not coupled to an ion gradient, it cannot transport fructose against an uphill concentration gradient [2]. Following heavy fructose ingestion (e.g., high-fructose corn syrup beverages), GLUT5 capacity is easily exceeded, delivering unabsorbed fructose to colonic microflora and generating osmotic diarrhea and flatulence [2, 3].',
              'বিপরীতে অ্যাপিক্যাল ঝিল্লি দিয়ে ডি-ফ্রুক্টোজের শোষণ কেবল GLUT5 (SLC2A5) নামক সহায়ক বাহকের মাধ্যমে সম্পন্ন হয় [2, 3]। GLUT5 কোনো আয়নের সাহায্য ছাড়াই সহজ ব্যাপন প্রক্রিয়ায় কাজ করে (Km ≈ ৬–১১ mM); ফলে এটি ঘনত্বের অনুকূলে কাজ করলেও ঘনত্বের বিপরীতে ফ্রুক্টোজ পরিবহন করতে সম্পূর্ণ অক্ষম [2]। কোমল পানীয় বা অতিরিক্ত ফ্রুক্টোজ খেলে এই বাহকের ধারণক্ষমতা দ্রুত ছাড়িয়ে যায় এবং অপাচ্য ফ্রুক্টোজ কোলনে পৌঁছে তীব্র গ্যাস ও পাতলা পায়খানা সৃষ্টি করে [2, 3]।'
            ),
            l(
              'For protein breakdown products, PepT1 (SLC15A1) translocates dipeptides and tripeptides via a tertiary active mechanism driven by the apical proton gradient ($H^+$ inward flux) [1, 4]. The apical $Na^+/H^+$ exchanger NHE3 continuously pumps protons into the intestinal unstirred layer, maintaining an acidic microclimate (pH 6.0–6.5) right at the brush-border surface [4]. Free amino acids are transported by distinct sodium-dependent and sodium-independent systems: System $B^0$ ($B^0\text{AT1}$ / SLC6A19) transports neutral amino acids; System $b^{0,+}$ transports basic amino acids and cystine; and System $X_{AG}^-$ transports acidic amino acids (aspartate, glutamate) [1, 4]. At the basolateral membrane, GLUT2 exports glucose, galactose, and fructose into the lamina propria capillaries via facilitated diffusion, while specialized basolateral amino acid exchangers export free amino acids directly into the portal circulation [1, 2].',
              'প্রোটিনের জন্য PepT1 (SLC15A1) অ্যাপিক্যাল প্রোটন গ্রেডিয়েন্ট ($H^+$) ব্যবহার করে ডাই- ও ট্রাইপেপটাইড পরিবহন করে [1, 4]। শীর্ষে অবস্থিত NHE3 এক্সচেঞ্জার অনবরত হাইড্রোজেন আয়ন বাইরে পাম্প করে ব্রাশ-বর্ডারের গায়ে একটি অম্লীয় মাইক্রোক্লাইমেট (পিএইচ ৬.০–৬.৫) তৈরি করে রাখে, যা PepT1 কে শক্তি জোগায় [4]। অন্যদিকে মুক্ত অ্যামিনো অ্যাসিডগুলো $B^0\text{AT1}$ এবং অন্যান্য পৃথক সিস্টেম দিয়ে শোষিত হয় [1, 4]। সবশেষে বেসোল্যাটারাল ঝিল্লিতে থাকা GLUT2 দিয়ে শর্করা এবং বিশেষায়িত অ্যামিনো অ্যাসিড এক্সপোর্টার দিয়ে অ্যামিনো অ্যাসিডগুলো ল্যামিনা প্রোপ্রিয়ার রক্তনালির ভেতর দিয়ে সোজা পোর্টাল শিরার দিকে প্রবাহিত হয় [1, 2]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Lipid Processing, Micellar Thermodynamics & Chylomicron Synthesis', 'লিপিড প্রক্রিয়াকরণ, মাইসেলের তাপগতিবিদ্যা ও কাইলোমাইক্রন সংশ্লেষণ'),
          paragraphs: [
            l(
              'Lipid digestion and absorption require physical-chemical phase transitions due to the extreme hydrophobicity of triacylglycerols and cholesteryl esters [1, 2]. In the duodenal lumen, conjugated bile salts (glycocholate, taurocholate) exhibit an amphipathic structure: a rigid hydrophobic steroid nucleus and a hydrophilic polar face bearing hydroxyl groups and an ionized glycine/taurine conjugate [2, 3]. Above their critical micellar concentration (CMC, ~1–2 mM in the duodenum), bile salts spontaneously aggregate into polymolecular mixed micelles with dietary phospholipids and fatty acids [2, 3].',
              'চর্বি বা লিপিড শোষণ প্রক্রিয়ায় ভৌত ও রাসায়নিক দশার পরিবর্তন ঘটে, কারণ ট্রাইগ্লিসারাইড এবং কোলেস্টেরল অত্যন্ত হাইড্রোফোবিক বা পানিরোধী [1, 2]। ডিওডেনামে থাকা পিত্ত লবণসমূহ (গ্লাইকোকোলেট, টরোকোলেট) উভধর্মী অণু: এদের একদিকে থাকে পানিরোধী স্টেরয়েড রিং এবং অন্যদিকে থাকে পানিতে দ্রবণীয় হাইড্রোক্সিল ও গ্লাইসিন প্রান্ত [2, 3]। সংকটকালীন মাইসেল ঘনত্বের (CMC) ওপরে পিত্ত লবণগুলো ফসফোলিপিডের সাথে মিলে স্বতঃস্ফূর্তভাবে অতি-ক্ষুদ্র মিশ্র মাইসেল গঠন করে [2, 3]।'
            ),
            l(
              'Pancreatic lipase requires its protein cofactor colipase (secreted as procolipase and cleaved by trypsin) to anchor to the bile salt-coated emulsion droplet [2, 3]. Lipase specifically cleaves the sn-1 and sn-3 ester bonds of triglycerides, generating two unesterified free fatty acids and one sn-2-monoacylglycerol (2-MAG) [3]. These products partition into the hydrophobic interior of mixed micelles, which diffuse across the unstirred aqueous mucus layer to contact the enterocyte microvillous membrane. Lipids dissociate from micelles and cross the apical membrane via protein-mediated carriers—including Fatty Acid Translocase (FAT/CD36), Fatty Acid Transport Protein 4 (FATP4), and Niemann-Pick C1-Like 1 (NPC1L1, the target of ezetimibe)—as well as passive flip-flop diffusion [1, 2].',
              'অগ্ন্যাশয়ের লাইপেজ এনজাইমকে চর্বির ফোঁটার গায়ে বসাতে সহ-এনজাইম কোলিপাইপেজের (colipase) প্রয়োজন হয় [2, 3]। লাইপেজ ট্রাইগ্লিসারাইডের ১ ও ৩ নম্বর কার্বনের এস্টার বন্ধন কেটে দুটি মুক্ত ফ্যাটি অ্যাসিড এবং একটি ২-মনোগ্লিসারাইড (2-MAG) তৈরি করে [3]। এই পরিপাকজাত উপাদানগুলো মাইসেলের পেটে ঢুকে জলীয় মিউকাস স্তর পার হয়ে কোষঝিল্লির কাছে পৌঁছায়। সেখানে FAT/CD36 এবং NPC1L1 (যা এজেইটিমিব ওষুধের লক্ষ্য) প্রোটিনের সাহায্যে তারা এন্টারোসাইটে প্রবেশ করে [1, 2]।'
            ),
            l(
              'Inside the enterocyte, Fatty Acid Binding Proteins (I-FABP, L-FABP) traffic hydrophobic lipids to the endoplasmic reticulum, where monoacylglycerol acyltransferase (MGAT) and diacylglycerol acyltransferase (DGAT) re-esterify them into triacylglycerols [1, 3]. Microsomal Triglyceride Transfer Protein (MTP) transfers these newly formed lipids onto nascent Apolipoprotein B-48 (apoB-48), a unique truncated isoform generated in human enterocytes by post-transcriptional apobec-1 mRNA editing (cytidine to uridine deamination, introducing an early stop codon) [1, 2]. The resulting chylomicrons are transported to the Golgi, packaged into secretory vesicles, and exocytosed across the basolateral membrane into central lacteals, entering the systemic circulation via the thoracic duct and completely bypassing initial first-pass hepatic metabolism [1, 2].',
              'এন্টারোসাইটের ভেতরে ফ্যাটি অ্যাসিড বাইন্ডিং প্রোটিন (FABP) চর্বিগুলোকে এন্ডোপ্লাজমিক রেটিকুলামে নিয়ে যায়, যেখানে MGAT এবং DGAT এনজাইম পুনরায় ট্রাইগ্লিসারাইড তৈরি করে [1, 3]। এরপর মাইক্রোসোমাল ট্রাইগ্লিসারাইড ট্রান্সফার প্রোটিন (MTP) এই চর্বিগুলোকে অ্যাপোলাইপোপ্রোটিন বি-৪৮ (apoB-48) এর ওপর বসিয়ে কাইলোমাইক্রন তৈরি করে [1, 2]। মানব অন্ত্রে apobec-1 এনজাইম আরএনএ এডিটিং এর মাধ্যমে এই apoB-48 তৈরি করে। গলগি বডি থেকে ভেসিকলের মাধ্যমে কাইলোমাইক্রন লসিকা নালিতে (ল্যাকটিয়েল) নির্গত হয় এবং থোরাসিক ডাক্ট দিয়ে সরাসরি সাধারণ রক্তসঞ্চালনে প্রবেশ করে যকৃতের প্রথম-পাস মেটাবলিজমকে বাইপাস করে [1, 2]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Reasoning: Malabsorption, Bariatric Alterations & Pharmacotherapy', 'ক্লিনিক্যাল বিশ্লেষণ: অপশোষণ, ব্যারিয়াট্রিক সার্জারি ও ওষুধবিজ্ঞান'),
          paragraphs: [
            l(
              'Disruption at any stage of macronutrient assimilation leads to severe clinical malabsorption syndromes [1, 2]. Pancreatic exocrine insufficiency (secondary to chronic pancreatitis, cystic fibrosis CFTR mutations, or pancreatic ductal adenocarcinoma) deprives the lumen of lipase, colipase, and proteases, resulting in severe steatorrhea (pale, bulky, foul-smelling, floating stools with excessive fecal fat excretion >7 g/day) and fat-soluble vitamin deficiencies (A, D, E, K), which must be treated with enteric-coated Pancreatic Enzyme Replacement Therapy (PERT) taken with meals [1, 2].',
              'পরিপাকের যেকোনো ধাপে বিঘ্ন ঘটলে মারাত্মক অপশোষণ সিন্ড্রোম দেখা দেয় [1, 2]। ক্রনিক প্যানক্রিয়াটাইটিস বা সিস্টিক ফাইব্রোসিসের কারণে অগ্ন্যাশয়ের পাচক রস কমে গেলে তীব্র স্টিয়াটোরিয়া বা চর্বিযুক্ত দুর্গন্ধযুক্ত পাতলা পায়খানা হয় (দৈনিক ৭ গ্রামের বেশি চর্বি মলের সাথে অপচয়) এবং স্নেহ-দ্রবণীয় ভিটামিনের (A, D, E, K) মারাত্মক ঘাটতি দেখা দেয়; যা খাবারের সাথে এন্টারিক-কোটেড এনজাইম (PERT) ওষুধ সেবনের মাধ্যমে চিকিৎসা করতে হয় [1, 2]।'
            ),
            l(
              'Bariatric surgical reconstructions alter digestive physiology fundamentally [1, 2]. In Roux-en-Y gastric bypass (RYGB), creating a small 30 mL gastric pouch connected directly to the Roux jejunal limb bypasses the duodenum and proximal jejunum entirely. This anatomical rearrangement delays pancreatic juice and bile contact until the common channel (biliopancreatic diversion), inducing mild fat malabsorption while drastically impairing iron absorption (which requires duodenal acid and DMT1) and calcium absorption (which relies on duodenal active transcellular transport) [1, 2]. Rapid entry of hyperosmolar carbohydrate chyme into the unadapted jejunum can also trigger "dumping syndrome", characterized by massive fluid shifts into the lumen, hypotension, flushing, and severe reactive hypoglycemia mediated by exaggerated GLP-1 hypersecretion [1, 2].',
              'ব্যারিয়াট্রিক সার্জারির ক্ষেত্রে পরিপাক শারীরবৃত্তে বৈপ্লবিক পরিবর্তন আসে [1, 2]। রুক্স-এন-ওয়াই গ্যাস্ট্রিক বাইপাসে (RYGB) পাকস্থলীর অধিকাংশ এবং ডিওডেনাম সম্পূর্ণ বাইপাস করা হয়। এর ফলে অগ্ন্যাশয়ের পাচক রস বিলম্বে খাবারের সংস্পর্শে আসে, যা চর্বি হজম কমায় এবং ডিওডেনামে ঘটা আয়রন ও ক্যালসিয়াম শোষণ মারাত্মকভাবে ব্যাহত করে [1, 2]। এছাড়া অতিরিক্ত শর্করা সরাসরি জেজুনামে গিয়ে পড়লে "ডাম্পিং সিন্ড্রোম" হতে পারে; যেখানে অন্ত্রে হঠাৎ অতিরিক্ত পানি চলে যাওয়ায় রক্তচাপ কমে যায় এবং মাত্রাতিরিক্ত GLP-1 নিঃসরণের কারণে খাবার পর ভয়াবহ হাইপোগ্লাইসেমিয়া বা রক্তের চিনি বিপজ্জনকভাবে কমে যেতে পারে [1, 2]।'
            ),
          ],
          bullets: [
            l('Enteropeptidase on the duodenal brush border is the obligate activator of trypsinogen into trypsin [2].', 'ডিওডেনামের ব্রাশ-বর্ডারে থাকা এন্টারোপেপটাইডেজ হলো ট্রিপসিনোজেন থেকে ট্রিপসিন তৈরির অপরিহার্য সুইচ [2]।'),
            l('SGLT1 couples 2 Na+ ions per glucose molecule; PepT1 couples 1 H+ ion per di/tripeptide [4, 5].', 'SGLT1 প্রতি গ্লুকোজে ২টি সোডিয়াম ব্যবহার করে; PepT1 প্রতি পেপটাইডে ১টি প্রোটন ব্যবহার করে [4, 5]।'),
            l('Fructose enters via GLUT5 facilitated diffusion and exits basolaterally through GLUT2 alongside glucose [2, 3].', 'ফ্রুক্টোজ GLUT5 দিয়ে কোষে ঢোকে এবং গ্লুকোজের সাথে GLUT2 দিয়ে বের হয়ে রক্তে যায় [2, 3]।'),
            l('ApoB-48 assembly via MTP in the ER/Golgi packages re-esterified lipids into lymphatic chylomicrons [1, 2].', 'এন্ডোপ্লাজমিক রেটিকুলামে MTP এনজাইম apoB-48 দিয়ে চর্বিকে কাইলোমাইক্রনে মুড়িয়ে লসিকায় পাঠায় [1, 2]।'),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Academic Review', 'মূল শিক্ষা ও একাডেমিক সারাংশ'),
          paragraphs: [
            l(
              'Intestinal assimilation of macronutrients represents a precision biochemical relay: luminal zymogen activation by enteropeptidase and trypsin liberates oligomers, which are cleaved to monomers at the microvillus brush border by anchored hydrolases [1, 2]. Epithelial uptake exploits electrochemical ion gradients maintained by the basolateral $Na^+/K^+$-ATPase and apical NHE3, driving uphill nutrient transport [2, 5].',
              'খাদ্য পরিপাক ও শোষণ একটি অত্যন্ত নিখুঁত রাসায়নিক রিলে রেসের মতো: এন্টারোপেপটাইডেজ ও ট্রিপসিন দিয়ে শুরু হওয়া জাইমোজেন ক্যাসকেড খাবারকে ছোট অংশে ভাঙে, যা ব্রাশ-বর্ডার হাইড্রোলেজ দিয়ে একক এককে পরিণত হয় [1, 2]। এপিথেলিয়াল শোষণ বেসোল্যাটারাল সোডিয়াম পাম্প ও শীর্ষ NHE3 এর তৈরি আয়ন গ্রেডিয়েন্ট কাজে লাগিয়ে খাদ্যকে রক্তে টেনে নেয় [2, 5]।'
            ),
            l(
              'Dietary lipids undergo emulsification, micellar diffusion, cytosolic re-esterification, and apolipoprotein B-48 packaging into chylomicrons, which enter the systemic circulation via lymphatic lacteals [1, 3]. Clinical pathologies such as celiac sprue, cystic fibrosis, and post-bariatric dumping syndrome illustrate the precise anatomical compartmentation required for human nutrient absorption [1, 2].',
              'খাদ্যের চর্বি ইমালসিফিকেশন ও মাইসেলের মাধ্যমে কোষে ঢোকে এবং apoB-48 দিয়ে কাইলোমাইক্রনে রূপ নিয়ে লসিকা নালির মাধ্যমে সরাসরি রক্তে প্রবেশ করে [1, 3]। সিলিয়াক রোগ, সিস্টিক ফাইব্রোসিস এবং বাইপাস সার্জারি পরবর্তী জটিলতাগুলো মানব পুষ্টি শোষণে প্রতিটি অঙ্গের সুনির্দিষ্ট শারীরবৃত্তীয় গুরুত্বকে স্পষ্টভাবে তুলে ধরে [1, 2]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'introduction',
          heading: l('Transporter Plasticity, Dynamic GLUT2 Translocation & Apical Regulation', 'পরিবাহক প্লাস্টিসিটি, অ্যাপিক্যাল GLUT2 স্থানান্তর ও আণবিক নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Classical transport physiology held that SGLT1 was the sole apical transporter for D-glucose, with GLUT2 restricted exclusively to basolateral exit [5]. However, groundbreaking investigations by George Kellett and colleagues overturned this static model, uncovering rapid, dynamic apical translocation of GLUT2 under high luminal glucose loads [3, 5]. When luminal glucose concentrations exceed 30 to 50 mM (concentrations typical after carbohydrate-rich meals), the high-affinity SGLT1 carrier becomes fully saturated ($V_{max}$ reached) [5].',
              'প্রচলিত শারীরবৃত্তে ভাবা হতো যে SGLT1 শীর্ষ ঝিল্লির একমাত্র গ্লুকোজ পরিবাহক এবং GLUT2 কেবল পেছনের ঝিল্লিতেই সীমাবদ্ধ থাকে [5]। কিন্তু জর্জ কেল্ট এবং সহকর্মীদের গবেষণা দেখিয়েছে যে খাবারে গ্লুকোজের ঘনত্ব যখন ৩০ থেকে ৫০ মিলিমোল অতিক্রম করে (স্বাভাবিক শর্করাযুক্ত খাবারের পর), তখন উচ্চ-আকর্ষণের SGLT1 পুরোপুরি স্যাচুরেটেড হয়ে যায় [3, 5]।'
            ),
            l(
              'SGLT1 activation triggers calcium influx through Cav1.3 L-type calcium channels and activates protein kinase C beta II (PKC-betaII), inducing the rapid cytoskeletal trafficking and insertion of GLUT2 from intracellular endosomal pools directly into the apical brush-border membrane [5]. Because GLUT2 is a low-affinity, high-capacity facilitated uniporter (Km ≈ 20 to 40 mM), its apical presence increases total intestinal glucose absorptive capacity by 300% to 500%, preventing osmotic fluid loss in the presence of massive carbohydrate ingestion [2, 5]. In insulin-resistant states, apical GLUT2 fails to internalize postprandially, leading to pathological hyperabsorption of sugars and exacerbating postprandial hyperglycemia [1, 5].',
              'SGLT1 সক্রিয় হলে কোষে ক্যালসিয়াম প্রবেশ করে এবং প্রোটিন কাইনেজ সি (PKC-betaII) সক্রিয় হয়, যা সাইটোসলে থাকা GLUT2 পরিবাহককে নিমেষেই শীর্ষ ব্রাশ-বর্ডারে এনে বসিয়ে দেয় [5]। যেহেতু GLUT2 হলো একটি উচ্চ-ধারণক্ষমতার পরিবাহক (Km ≈ ২০–৪০ mM), শীর্ষ ঝিল্লিতে এর আগমন অন্ত্রের গ্লুকোজ শোষণ ক্ষমতা ৩০০% থেকে ৫০০% পর্যন্ত বাড়িয়ে দেয় [2, 5]। কিন্তু ইনসুলিন রেজিস্ট্যান্সের রোগীদের ক্ষেত্রে এই GLUT2 খাবার পরেও শীর্ষে স্থায়ীভাবে আটকে থাকে, যা রক্তে শর্করার ক্ষতিকর বৃদ্ধি ঘটায় [1, 5]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Molecular Genetics of Intestinal Transporter Deficiencies', 'অন্ত্রীয় পরিবাহকের জন্মগত মিউটেশন ও বংশাণুবিজ্ঞান'),
          paragraphs: [
            l(
              'Monogenic disorders of intestinal nutrient transport provide profound mechanistic insights into human epithelial physiology [1, 3]. Congenital Glucose-Galactose Malabsorption (GGM) is an autosomal recessive disorder caused by missense or nonsense mutations in the SLC5A1 gene encoding SGLT1 [5]. Infants homozygous for SGLT1 loss-of-function mutations develop life-threatening, intractable watery diarrhea and severe dehydration immediately upon ingesting breast milk or standard lactose/glucose infant formulas; remarkably, switching entirely to fructose-based formulas (which rely on intact GLUT5) halts diarrhea completely and permits normal growth, confirming the distinct genetic independence of these two transport routes [3, 5].',
              'অন্ত্রীয় পরিবাহকের জন্মগত জেনেটিক ত্রুটি মানব শারীরবৃত্তের গভীর সত্য উদঘাটন করে [1, 3]। জন্মগত গ্লুকোজ-গ্যালাক্টোজ ম্যালঅ্যাবজরপশন (GGM) হলো SLC5A1 জিনের মিউটেশনজনিত একটি বিরল অটোসোমাল রিসেসিভ রোগ [5]। এই রোগে আক্রান্ত শিশুরা মাতৃদুগ্ধ বা সাধারণ ফর্মুলা খাওয়া মাত্রই মারাত্মক পানিশূন্যতা ও ডায়রিয়ায় ভোগে; অথচ এদেরকে ফ্রুক্টোজ-ভিত্তিক ফর্মুলা দিলে (যা অক্ষত GLUT5 দিয়ে শোষিত হয়) ডায়রিয়া তৎক্ষণাৎ বন্ধ হয়ে যায় এবং শিশু স্বাভাবিকভাবে বেড়ে ওঠে, যা প্রমাণ করে এই দুটি পথ জিনগতভাবে সম্পূর্ণ স্বাধীন [3, 5]।'
            ),
            l(
              'Similarly, Hartnup disease results from loss-of-function mutations in SLC6A19, encoding the neutral amino acid transporter $B^0\text{AT1}$ [1, 4]. Affected individuals exhibit marked urinary wasting and intestinal malabsorption of neutral amino acids, particularly tryptophan, predisposing them to pellagra-like photosensitive dermatitis, cerebellar ataxia, and neuropsychiatric symptoms due to impaired NAD+ and serotonin biosynthesis [1, 4]. Crucially, patients with Hartnup disease rarely suffer overt protein-energy malnutrition because intestinal PepT1 (SLC15A1) remains entirely intact, permitting adequate tryptophan and neutral amino acid absorption when provided as dipeptides and tripeptides, establishing PepT1 as a vital clinical rescue pathway [4].',
              'একইভাবে হার্টনাপ ডিজিজ (Hartnup disease) হলো SLC6A19 জিনের মিউটেশনজনিত রোগ যা নিউট্রাল অ্যামিনো অ্যাসিড পরিবাহক $B^0\text{AT1}$ কে অকেজো করে দেয় [1, 4]। রোগীরা ট্রিপটোফ্যান শোষণ করতে না পারায় নিয়াসিন ও সেরোটোনিনের ঘাটতিজনিত পেলাগ্রা ও স্নায়বিক সমস্যায় ভোগে [1, 4]। কিন্তু আশ্চর্যজনকভাবে তাদের সামগ্রিক প্রোটিনের চরম ঘাটতি হয় না, কারণ তাদের অন্ত্রে PepT1 সম্পূর্ণ সচল থাকে এবং খাদ্য থেকে ডাই- ও ট্রাইপেপটাইড আকারে ট্রিপটোফ্যান সহজেই কোষে টেনে নিয়ে জীবন রক্ষা করে [4]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Apolipoprotein B-48 Editing, MTP Regulation & Abetalipoproteinemia', 'অ্যাপোবি-৪৮ আরএনএ এডিটিং, MTP নিয়ন্ত্রণ ও অ্যাবেটালাইপোপ্রোটিনেমিয়া'),
          paragraphs: [
            l(
              'The biogenesis of chylomicrons represents a landmark model of tissue-specific RNA editing [1, 2]. Humans possess a single APOB gene. In the liver, the full-length 14,000-nucleotide mRNA is translated without editing to yield Apolipoprotein B-100 (apoB-100, 512 kDa), the structural backbone of VLDL and LDL that contains the LDL receptor-binding domain [1, 2]. In small intestinal enterocytes, however, the catalytic enzyme Apolipoprotein B mRNA editing enzyme catalytic polypeptide 1 (APOBEC-1) pairs with auxiliary factors to deaminate cytidine 6666 to uridine ($CAA \rightarrow UAA$), converting a glutamine codon into an in-frame stop codon [1, 2].',
              'কাইলোমাইক্রনের বায়োজেনেসিস মানবদেহে টিস্যু-নির্দিষ্ট আরএনএ এডিটিংয়ের সবচেয়ে চমৎকার উদাহরণ [1, 2]। মানুষের দেহে APOB জিন মাত্র একটি। যকৃতে এর সম্পূর্ণ আরএনএ অনুবাদ হয়ে তৈরি হয় অ্যাপোবি-১০০ (apoB-100), যা ভিএলডিএল ও এলডিএলের মেরুদণ্ড [1, 2]। কিন্তু ক্ষুদ্রান্ত্রের এন্টারোসাইটে APOBEC-1 এনজাইম আরএনএর ৬৬৬৬ নম্বর সাইটিডিনকে ইউরিডিনে রূপান্তরিত করে ($CAA \rightarrow UAA$), যা একটি প্রোটিন বন্ধের সংকেত (স্টপ কোডন) তৈরি করে [1, 2]।'
            ),
            l(
              'This post-transcriptional edit truncates translation at 48% of the polypeptide length, yielding Apolipoprotein B-48 (apoB-48, 250 kDa) [1, 2]. Because apoB-48 lacks the C-terminal domain required for LDL receptor binding, chylomicron remnants cannot bind hepatic LDL receptors via apoB; instead, they must acquire apolipoprotein E (apoE) from HDL in the circulation to mediate hepatic remnant clearance through the LRP-1 receptor [1, 2]. In the rare autosomal recessive disease Abetalipoproteinemia, mutations in the MTPS gene encoding Microsomal Triglyceride Transfer Protein abolish the ability to load triglycerides onto nascent apoB-48 and apoB-100. Enterocytes become engorged with giant lipid droplets that cannot be exocytosed, causing profound fat and fat-soluble vitamin malabsorption, acanthocytosis (spiky red blood cells), retinitis pigmentosa, and progressive spinocerebellar ataxia [1, 2].',
              'এই এডিটিংয়ের ফলে প্রোটিনটি ঠিক ৪৮% দৈর্ঘ্যে থেমে গিয়ে তৈরি হয় apoB-48 [1, 2]। এতে এলডিএল রিসেপ্টরে বসার অংশ না থাকায় কাইলোমাইক্রন রেমন্যান্ট রক্ত থেকে apoE গ্রহণ করে যকৃতে ফেরত যায় [1, 2]। বিরল জেনেটিক রোগ অ্যাবেটালাইপোপ্রোটিনেমিয়ায় (Abetalipoproteinemia) MTP এনজাইম অকেজো হওয়ায় এন্টারোসাইট কাইলোমাইক্রন তৈরি করতে পারে না; ফলে অন্ত্রের কোষে চর্বি জমে ফেটে যায় কিন্তু রক্তে যেতে পারে না, যার ফলে চর্বি-দ্রবণীয় ভিটামিনের চরম ঘাটতি, লোহিত রক্তকণিকা বিকৃতি এবং স্নায়ুর মারাত্মক ক্ষতি সাধিত হয় [1, 2]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Glucagon-Like Peptide-2 (GLP-2) & Mucosal Trophic Engineering', 'গ্লুকাগন-লাইক পেপটাইড-২ (GLP-2) ও মিউকোসাল পুনর্গঠন গবেষণা'),
          paragraphs: [
            l(
              'Nutrient absorption is regulated by enteroendocrine feedback loops that actively modulate mucosal surface area [1, 2]. When unabsorbed fatty acids and carbohydrates reach the distal ileum, enteroendocrine L-cells cosecrete Glucagon-Like Peptide-1 (GLP-1) and Glucagon-Like Peptide-2 (GLP-2) via proglucagon cleavage by prohormone convertase 1/3 (PC1/3) [2]. While GLP-1 slows gastric emptying and enhances glucose-dependent insulin secretion, GLP-2 acts as a potent mucosal growth factor [1, 2].',
              'পুষ্টি শোষণ অন্ত্রের নিজস্ব এন্ডোক্রাইন সংকেত দ্বারা সরাসরি নিয়ন্ত্রিত হয় যা মিউকোসার শোষণতলকে পরিবর্তন করতে পারে [1, 2]। অপাচ্য চর্বি ও শর্করা যখন ইলিয়ামের শেষ প্রান্তে পৌঁছায়, তখন এল-কোষ (L-cells) থেকে GLP-1 এর সাথে GLP-2 হরমোন নিঃসৃত হয় [2]। যেখানে GLP-1 পাকস্থলীর গতি কমিয়ে রক্তে ইনসুলিন বাড়ায়, সেখানে GLP-2 কাজ করে অন্ত্রের মিউকোসার শক্তিশালী বৃদ্ধিকারক ফ্যাক্টর হিসেবে [1, 2]।'
            ),
            l(
              'GLP-2 binds to G-protein coupled GLP-2 receptors on subepithelial myofibroblasts and enteric neurons, stimulating the paracrine release of insulin-like growth factor-1 (IGF-1), epidermal growth factor (EGF), and keratinocyte growth factor (KGF) [1, 2]. These growth factors stimulate intestinal crypt stem cell mitosis, suppress enterocyte apoptosis at the villus tip, and upregulate the transcription and membrane insertion of SGLT1 and PepT1 transporters [2, 5]. In clinical medicine, the long-acting synthetic GLP-2 analog Teduglutide has revolutionized the management of Short Bowel Syndrome (SBS), dramatically increasing mucosal surface area and intestinal fluid/macronutrient absorption, allowing many parenterally dependent patients to be successfully weaned off intravenous nutrition support [1, 2].',
              'GLP-2 সাব-এপিথেলিয়াল কোষে যুক্ত হয়ে আইজিএফ-১ (IGF-1) ও অন্যান্য গ্রোথ ফ্যাক্টর নিঃসরণ বাড়ায় [1, 2]। এই ফ্যাক্টরগুলো অন্ত্রের স্টেম সেলের বিভাজন বৃদ্ধি করে, ভিলাসের ক্ষয় কমায় এবং SGLT1 ও PepT1 পরিবাহকের ঘনত্ব বহুগুণ বাড়িয়ে দেয় [2, 5]। চিকিৎসা বিজ্ঞানে দীর্ঘস্থায়ী সিন্থেটিক GLP-2 অ্যানালগ "টেদুগুলুটাইড" (Teduglutide) শর্ট বাওয়েল সিন্ড্রোমের রোগীদের জন্য বৈপ্লবিক পরিবর্তন এনেছে; এটি অন্ত্রের শোষণক্ষমতা এত বাড়িয়ে দেয় যে রোগীরা শিরায় স্যালাইন নির্ভরতা কাটিয়ে স্বাভাবিকভাবে খেতে সক্ষম হয় [1, 2]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Translational Bioenergetics: Modern Elemental vs Peptide Diets & Ezetimibe Pharmacology', 'ফলিত জৈবশক্তিবিজ্ঞান: এলিমেন্টাল বনাম পেপটাইড ফর্মুলা ও এজেইটিমিবের ফার্মাকোলজি'),
          paragraphs: [
            l(
              'Clinical nutrition support heavily exploits transport kinetics when designing specialized enteral formulas for intensive care, Crohn’s disease, and malabsorptive states [1, 4]. Historical elemental diets provided 100% of nitrogen as free crystalline L-amino acids. However, free amino acid solutions exhibit extremely high osmolarity (often exceeding 600–800 mOsm/kg), which draws massive fluid into the intestinal lumen, exacerbating diarrhea and dumping physiology [1, 4]. Furthermore, free amino acid transport is limited by competitive saturation at individual sodium-dependent monomer carriers ($B^0\text{AT1}$, $y^+L$) [4].',
              'আইসিইউ, ক্রোনস ডিজিজ এবং জটিল অপুষ্টির রোগীদের খাদ্য তৈরিতে পুষ্টিবিজ্ঞানীরা পরিবহন গতিবিদ্যাকে কাজে লাগান [1, 4]। পূর্বে প্রচলিত এলিমেন্টাল ফর্মুলায় শতভাগ প্রোটিন মুক্ত অ্যামিনো অ্যাসিড হিসেবে দেওয়া হতো। কিন্তু মুক্ত অ্যামিনো অ্যাসিড দ্রবণের অসমোলারিটি অত্যন্ত বেশি হওয়ায় (৬০০-৮০০ mOsm/kg) তা অন্ত্রে অতিরিক্ত পানি টেনে এনে মারাত্মক ডায়রিয়া সৃষ্টি করত [1, 4]। অধিকন্তু মুক্ত অ্যামিনো অ্যাসিডগুলো একে অপরের সাথে একই পরিবহন দরজায় ধাক্কাধাক্কি করায় শোষণ ধীরগতির হতো [4]।'
            ),
            l(
              'Modern semi-elemental clinical formulas utilize enzymatically hydrolyzed whey or soy proteins consisting predominantly of small di- and tripeptides [1, 4]. These oligopeptide formulas exhibit low osmolarity (avoiding osmotic diarrhea) and utilize the high-capacity, low-energy PepT1 pathway, producing significantly faster plasma amino acid appearance, reduced bacterial translocation, and superior nitrogen retention in critically ill patients [1, 4]. Pharmacologically, targeting enterocyte lipid transporters has transformed cardiology: Ezetimibe specifically binds to and blocks the NPC1L1 sterol transporter on the jejunal microvillus, inhibiting intestinal cholesterol absorption by ~54% without impairing triglyceride or fat-soluble vitamin uptake, providing powerful synergistic LDL-lowering when combined with HMG-CoA reductase inhibitors (statins) [1, 2].',
              'আধুনিক সেমি-এলিমেন্টাল ফর্মুলায় এনজাইম দিয়ে ভাঙা ছোট ডাই- ও ট্রাইপেপটাইড ব্যবহার করা হয় [1, 4]। এই পেপটাইড ফর্মুলার অসমোলারিটি কম থাকে (ফলে ডায়রিয়া হয় না) এবং এরা দ্রুতগতির PepT1 পথ ব্যবহার করে দ্রুত রক্তে পৌঁছায় ও সংকটাপন্ন রোগীর প্রোটিন ক্ষয় রোধ করে [1, 4]। অন্যদিকে কার্ডিওলজিতে এন্টারোসাইটের লিপিড পরিবাহককে নিয়ন্ত্রণ করে বিপ্লব ঘটেছে: এজেইটিমিব (Ezetimibe) ওষুধটি ব্রাশ-বর্ডারের NPC1L1 কোলেস্টেরল বাহককে অবরুদ্ধ করে খাদ্যের কোলেস্টেরল শোষণ ৫৪% কমিয়ে দেয়; অথচ চর্বি বা ভিটামিন শোষণে কোনো বাধা সৃষ্টি করে না, যা স্ট্যাটিন ওষুধের সাথে যুক্ত হয়ে রক্তের এলডিএল কমাতে অত্যন্ত কার্যকর ভূমিকা রাখে [1, 2]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Takeaways & Advanced Research Synthesis', 'মূল শিক্ষা ও উচ্চতর গবেষণা সংশ্লেষ'),
          paragraphs: [
            l(
              'Enterocyte macronutrient transport is a dynamic, highly regulated biological process governed by transporter plasticity (SGLT1 saturation triggering apical GLUT2 insertion), peptide kinetics (PepT1 tertiary active transport surpassing monomeric carriers), and post-transcriptional RNA editing (APOBEC-1 creating apoB-48 for chylomicron exocytosis) [1, 4, 5].',
              'এন্টারোসাইটের পুষ্টি শোষণ একটি গতিশীল ও নিখুঁত জৈবিক প্রক্রিয়া যা পরিবাহক প্লাস্টিসিটি (SGLT1 স্যাচুরেটেড হলে শীর্ষে GLUT2 এর আগমন), পেপটাইড গতিবিদ্যা (PepT1 এর মাধ্যমে দ্রুত শোষণ) এবং পোস্ট-ট্রান্সক্রিপশনাল আরএনএ এডিটিং (apoB-48 কাইলোমাইক্রন তৈরি) দ্বারা পরিচালিত [1, 4, 5]।',
            ),
            l(
              'Clinical translation of intestinal transport biology underpins life-saving therapies: Oral Rehydration Solution exploits uninhibited SGLT1 cotransport; semi-elemental peptide diets exploit PepT1 efficiency in critical illness; GLP-2 analogs (teduglutide) restore absorptive surface in short bowel syndrome; and NPC1L1 blockade (ezetimibe) selectively lowers atherogenic cholesterol [1, 4, 6].',
              'অন্ত্রীয় পরিবহন বিজ্ঞানের প্রায়োগিক সাফল্য অসংখ্য জীবন রক্ষাকারী চিকিৎসার ভিত্তি: খাবার স্যালাইন অক্ষত SGLT1 পথকে কাজে লাগায়; পেপটাইড ডায়েট সংকটাপন্ন রোগীর প্রোটিন ঘাটতি মেটায়; GLP-2 অ্যানালগ অন্ত্রের ক্ষতিগ্রস্ত অংশ পুনর্গঠন করে; এবং NPC1L1 ব্লকার এজেইটিমিব হৃদরোগের ক্ষতিকর কোলেস্টেরল কমিয়ে দেয় [1, 4, 6]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'Why is the therapeutic efficacy of WHO Oral Rehydration Solution (ORS) fully preserved during severe cholera diarrhea caused by Vibrio cholerae enterotoxin?',
      'ভিব্রিও কলেরার বিষাক্ত টক্সিনজনিত মারাত্মক ডায়রিয়ার সময়ও কেন ডব্লিউএইচও খাবার স্যালাইনের (ORS) কার্যকারিতা সম্পূর্ণ অক্ষত থাকে?'
    ),
    options: [
      l('The apical sodium-glucose cotransporter SGLT1 is independent of intracellular cAMP and remains fully operational despite CFTR activation', 'শীর্ষ সোডিয়াম-গ্লুকোজ কো-ট্রান্সপোর্টার SGLT1 সাইক্লিক এএমপি (cAMP) থেকে স্বাধীন হওয়ায় CFTR সক্রিয় হলেও তা পুরোপুরি সচল থাকে'),
      l('Cholera toxin directly enhances the enzymatic activity of brush-border sucrase-isomaltase', 'কলেরা টক্সিন ব্রাশ-বর্ডারের সুক্রেজ-আইসোমল্টেজ এনজাইমকে সরাসরি অতি-সক্রিয় করে তোলে'),
      l('ORS destroys Vibrio cholerae bacteria in the gastric acidic environment', 'খাবার স্যালাইন পাকস্থলীর অম্লীয় পরিবেশে কলেরা ব্যাক্টেরিয়াকে ধ্বংস করে ফেলে'),
      l('Glucose closes basolateral potassium channels, preventing cellular apoptosis', 'গ্লুকোজ পেছনের পটাশিয়াম চ্যানেল বন্ধ করে দিয়ে কোষের মৃত্যু ঠেকায়'),
    ],
    correctIndex: 0,
    explanation: l(
      'While cholera toxin irreversibly elevates intracellular cAMP, opening CFTR chloride channels and driving massive secretory fluid loss, the apical SGLT1 symporter operates independently of cAMP. Co-transporting Na+ and glucose drives powerful osmotic reabsorption of water, effectively reversing life-threatening dehydration.',
      'কলেরা টক্সিন কোষে cAMP বাড়িয়ে CFTR চ্যানেল দিয়ে মারাত্মক পানি ও লবণ বের করে দিলেও শীর্ষে থাকা SGLT1 পরিবাহক cAMP দ্বারা প্রভাবিত হয় না। ফলে স্যালাইনের সোডিয়াম ও গ্লুকোজ শোষিত হওয়ার সময় বিপুল পরিমাণ পানিকে টেনে রক্তে ফিরিয়ে আনে এবং পানিশূন্যতা রোধ করে।'
    ),
  },
}
