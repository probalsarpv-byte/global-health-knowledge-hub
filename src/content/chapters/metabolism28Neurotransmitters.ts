import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const neuroRefs = [
  {
    id: 'kandel-principles-neural-science-6e-ch13',
    authors: 'Eric R. Kandel, John D. Koester, Sarah H. Mack, Steven A. Siegelbaum',
    title: 'Principles of Neural Science, 6th edition, Chapter 13: Synaptic Transmission & Neurotransmitter Synthesis',
    organization: 'McGraw-Hill Education',
    year: 2021,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=2951',
  },
  {
    id: 'lehninger-biochem-8e-ch18',
    authors: 'David L. Nelson, Michael M. Cox',
    title: 'Lehninger Principles of Biochemistry, 8th edition, Chapter 18: Amino Acid Oxidation and the Production of Urea',
    organization: 'Macmillan Learning / W. H. Freeman',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003',
  },
  {
    id: 'cooper-biochemical-basis-neuropharm-8e',
    authors: 'Jack R. Cooper, Floyd E. Bloom, Robert H. Roth',
    title: 'The Biochemical Basis of Neuropharmacology, 8th edition',
    organization: 'Oxford University Press',
    year: 2003,
    url: 'https://global.oup.com/academic/product/the-biochemical-basis-of-neuropharmacology-9780195140088',
  },
  {
    id: 'nagatsu-tyrosine-hydroxylase-history-2006',
    authors: 'Toshiharu Nagatsu',
    title: 'The catecholamine system: overview. Philosophical Transactions of the Royal Society B, 361(1471):1111-1121',
    organization: 'The Royal Society',
    year: 2006,
    url: 'https://pubmed.ncbi.nlm.nih.gov/16874932/',
  },
  {
    id: 'moncada-higgs-nitric-oxide-fasebj-1995',
    authors: 'Salvador Moncada, E. A. Higgs',
    title: 'Molecular mechanisms and therapeutic considerations of nitric oxide. FASEB Journal, 9(13):1319-1330',
    organization: 'FASEB',
    year: 1995,
    url: 'https://pubmed.ncbi.nlm.nih.gov/7557022/',
  },
]

const neuro3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Neurotransmitter & Biogenic Amine Biosynthesis',
    '৩ডি বহু-অঙ্গীয় নিউরোট্রান্সমিটার ও বায়োজেনিক অ্যামিন জৈবসংশ্লেষণের শারীরস্থানিক মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: rotate and examine the spatial coordinate landscape to trace how dietary amino acids (tyrosine, tryptophan, histidine, arginine) are synthesized and targeted across the brain, adrenal medulla, gastrointestinal tract, and vascular endothelium.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: ত্রিমাত্রিক স্পেসে ঘুরিয়ে পর্যবেক্ষণ করুন কীভাবে খাদ্যস্থ অ্যামিনো অ্যাসিড (টাইরোসিন, ট্রিপটোফ্যান, হিস্টিডিন, আরজিনিন) মস্তিষ্ক, অ্যাড্রেনাল মেডালা, অন্ত্র এবং রক্তনালীতে নিউরোট্রান্সমিটারে রূপান্তরিত হয়।'
  ),
  description: l(
    'Neurotransmitters and specialized biogenic amines are the molecular messengers of human physiology. Catecholamines (dopamine, norepinephrine, epinephrine) coordinate motor planning, alertness, and sympathoadrenal fight-or-flight discharge. Serotonin and melatonin modulate mood, intestinal motility, and circadian rhythmicity. Histamine mediates neuroimmune signaling and gastric acid secretion, while the GABA shunt and nitric oxide provide inhibitory neural balance and hemodynamic tone.',
    'নিউরোট্রান্সমিটার এবং বিশেষ বায়োজেনিক অ্যামিন হলো মানব শারীরবৃত্তের প্রধান রাসায়নিক বার্তাবাহক। ক্যাটাকোলামিন (ডোপামিন, নরএপিনেফ্রিন, এপিনেফ্রিন) গতি, সতর্কতা এবং আপদকালীন উত্তেজনা নিয়ন্ত্রণ করে। সেরোটোনিন ও মেলাটোনিন মানসিক মেজাজ, অন্ত্রের গতি ও জৈব ছন্দ রক্ষা করে। হিস্টামিন অনাক্রম্যতা ও গ্যাস্ট্রিক অ্যাসিড ক্ষরণে কাজ করে, আর গাবা (GABA) এবং নাইট্রিক অক্সাইড স্নায়বিক অবদমন ও রক্তনালীর প্রসারণ ঘটায়।'
  ),
  organs: [
    {
      id: 'organ-brain-central-monoamines',
      name: l('Brain (Substantia Nigra, Locus Coeruleus & Raphe Nuclei)', 'মস্তিষ্ক (সাবস্ট্যানশিয়া নাইগ্রা, লোকাস সিরুলিয়াস ও রাফে নিউক্লিয়াস)'),
      latinName: 'Cerebrum (Nuclei Monoaminergici)',
      system: l('Central Nervous System & Neurochemical System', 'কেন্দ্রীয় স্নায়ুতন্ত্র ও স্নায়ু-রাসায়নিক ব্যবস্থা'),
      cavity: l('Cranial Cavity', 'করোটি গহ্বর'),
      position3D: { x: 0, y: 275, z: 0 },
      color: '#3b82f6',
      highlightColor: '#60a5fa',
      shapeType: 'brain',
      description: l(
        'The primary central processing hub of monoamine signaling. Substantia nigra pars compacta dopaminergic neurons project to the striatum to control motor initiation; locus coeruleus noradrenergic neurons project widely to govern arousal and vigilance; and midbrain raphe serotonergic projections modulate affect, pain perception, and autonomic stability.',
        'মনোঅ্যামিন সংকেতের কেন্দ্রীয় নিয়ন্ত্রণ কেন্দ্র। সাবস্ট্যানশিয়া নাইগ্রার ডোপামিনার্জিক নিউরন স্ট্রিয়াটামে সংকেত পাঠিয়ে অঙ্গ সঞ্চালন শুরু করে; লোকাস সিরুলিয়াসের নরঅ্যাড্রেনার্জিক নিউরন সতর্কতা ও মনোযোগ নিয়ন্ত্রণ করে; এবং রাফে নিউক্লিয়াসের সেরোটোনার্জিক নিউরন আবেগ, অনুভূতির তীব্রতা ও মেজাজ পরিচালনা করে।'
      ),
      spatialRelations: l(
        'Encased within the neurocranium, bounded by the blood-brain barrier which restricts hydrophilic monoamines while transporting precursor neutral amino acids via LAT1.',
        'করোটির অভ্যন্তরে সুরক্ষিত যা রক্ত-মস্তিষ্ক প্রাচীর দ্বারা আবৃত; এটি তৈরি ডোপামিন ঢুকতে দেয় না কিন্তু LAT1 বাহকের মাধ্যমে পূর্বসূরি অ্যামিনো অ্যাসিড গ্রহণ করে।'
      ),
      physiology: l(
        'Synthesizes neurotransmitters locally from amino acid precursors: tyrosine to dopamine, tryptophan to serotonin, and glutamate to GABA via PLP-dependent decarboxylation.',
        'খাদ্যের অ্যামিনো অ্যাসিড থেকে সরাসরি স্নায়ুকোষে বার্তাবাহক তৈরি করে: টাইরোসিন থেকে ডোপামিন, ট্রিপটোফ্যান থেকে সেরোটোনিন এবং ভিটামিন বি৬-নির্ভর এনজাইম দ্বারা গ্লুটামেট থেকে GABA।'
      ),
      nutritionConnection: l(
        'Strictly dependent on dietary supply of essential aromatic amino acids (phenylalanine, tryptophan) and micronutrient cofactors (iron, tetrahydrobiopterin, vitamin B6).',
        'খাদ্যের অপরিহার্য সুগন্ধি অ্যামিনো অ্যাসিড (ফিনাইলঅ্যালানিন, ট্রিপটোফ্যান) এবং ভিটামিন কোফ্যাক্টরের (আয়রন, BH4, ভিটামিন বি৬) নিয়মিত জোগানের ওপর সম্পূর্ণ নির্ভরশীল।'
      ),
      clinicalSignificance: l(
        'Degeneration of substantia nigra dopaminergic neurons causes Parkinson disease; selective serotonin reuptake inhibitors (SSRIs) and MAO inhibitors target synaptic clearance in affective disorders.',
        'সাবস্ট্যানশিয়া নাইগ্রার ডোপামিন কোষ ধ্বংস হলে পারকিনসন্স রোগ দেখা দেয়; অন্যদিকে বিষণ্নতা দূর করতে ব্যবহৃত ওষুধগুলো স্নায়ু সংযোগস্থলে সেরোটোনিনের স্থায়িত্ব বৃদ্ধি করে।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-adrenal-medulla-epinephrine',
      name: l('Adrenal Medulla (PNMT & Sympathoadrenal Epinephrine Surge)', 'অ্যাড্রেনাল মেডালা (PNMT ও আপদকালীন এপিনেফ্রিন নিঃসরণ)'),
      latinName: 'Medulla Glandulae Suprarenalis',
      system: l('Endocrine & Sympathetic Autonomic System', 'অন্তঃক্ষরা ও সিমপ্যাথেটিক স্নায়ুতন্ত্র'),
      cavity: l('Retroperitoneum (Perirenal Space)', 'রেট্রোপেরিটোনিয়াম (পেরিরেনাল স্থান)'),
      position3D: { x: 3, y: 195, z: 2 },
      color: '#e11d48',
      highlightColor: '#f43f5e',
      shapeType: 'kidneys',
      description: l(
        'Modified postganglionic sympathetic ganglion comprised of neuroendocrine chromaffin cells. Expresses phenylethanolamine N-methyltransferase (PNMT), which catalyzes the SAM-dependent N-methylation of norepinephrine to epinephrine. Cortisol carried by the intra-adrenal portal system strongly induces PNMT transcription, guaranteeing that epinephrine comprises >80% of adrenal catecholamine output.',
        'রূপান্তরিত সিমপ্যাথেটিক স্নায়ু কোষ দ্বারা গঠিত অন্তঃক্ষরা অংশ। এতে অনন্য PNMT এনজাইম থাকে যা SAM ব্যবহার করে নরএপিনেফ্রিনকে এপিনেফ্রিনে রূপান্তরিত করে। অ্যাড্রেনাল কর্টেক্সের কর্টিসল হরমোন এই এনজাইমকে শতগুণ বাড়িয়ে দেয়, ফলে অ্যাড্রেনাল মেডালা থেকে নিঃসৃত হরমোনের ৮০%-এর বেশি হয় এপিনেফ্রিন।'
      ),
      spatialRelations: l(
        'Situated atop the superior pole of each kidney within Gerota fascia, receiving direct sympathetic preganglionic innervation from thoracic splanchnic nerves.',
        'উভয় বৃক্কের উপরিভাগে অবস্থিত যা থোরাসিক স্প্ল্যাঙ্কনিক স্নায়ুর মাধ্যমে সরাসরি সিমপ্যাথেটিক স্নায়ুতন্ত্র থেকে বৈদ্যুতিক সংকেত গ্রহণ করে।'
      ),
      physiology: l(
        'Stores epinephrine at molar concentrations within dense-core chromaffin granules complexed with ATP, chromogranin A, and calcium; releases hormones via calcium-dependent exocytosis during stress.',
        'ঘন দানার ভেতরে এটিপি ও ক্রোমোগ্রানিনের সাথে উচ্চ ঘনমাত্রায় এপিনেফ্রিন জমা রাখে এবং মানসিক বা শারীরিক চাপে ক্যালসিয়াম সংকেতের মাধ্যমে সরাসরি রক্তে হরমোন ঢেলে দেয়।'
      ),
      nutritionConnection: l(
        'Requires constant S-adenosylmethionine (SAM) methyl donor supply derived from the hepatic methionine cycle for the PNMT methylation reaction.',
        'PNMT এনজাইমের দ্রুত মিথাইলেশন বিক্রিয়া সম্পন্ন করতে যকৃতে তৈরি হওয়া এস-অ্যাডেনোসিলমেথিওনিন (SAM) মিথাইলদাতার নিরবচ্ছিন্ন জোগান প্রয়োজন হয়।'
      ),
      clinicalSignificance: l(
        'Pheochromocytoma (chromaffin cell neuroendocrine tumor) causes paroxysmal episodic hypertension, palpitations, pallor, and headache due to catastrophic catecholamine hypersecretion.',
        'ফিওক্রোমোসাইটোমা নামক অ্যাড্রেনাল টিউমার অনিয়ন্ত্রিতভাবে প্রচুর ক্যাটাকোলামিন নিঃসরণ করে মারাত্মক রক্তচাপ বৃদ্ধি, বুক ধড়ফড় ও তীব্র মাথাব্যথা সৃষ্টি করে।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-gut-enterochromaffin-serotonin',
      name: l('Gastrointestinal Tract (Enterochromaffin Serotonin & Motility)', 'পরিপাকতন্ত্র (এন্টেরোক্রোমাফিন সেরোটোনিন ও অন্ত্রের চলন)'),
      latinName: 'Tractus Gastrointestinalis (Cellulae Enterochromaffines)',
      system: l('Digestive & Enteric Nervous System', 'পরিপাক ও এন্টেরিক স্নায়ুতন্ত্র'),
      cavity: l('Abdominal & Pelvic Cavity', 'উদর ও শ্রোণি গহ্বর'),
      position3D: { x: 0, y: 155, z: 2 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'intestines',
      description: l(
        'Contains more than 90% of total body serotonin (5-hydroxytryptamine). Enterochromaffin cells in the gut mucosa express tryptophan hydroxylase 1 (TPH1) and aromatic L-amino acid decarboxylase (AADC) to synthesize vast quantities of serotonin from dietary L-tryptophan. Mucosal serotonin is released in response to luminal pressure and nutrients, activating enteric intrinsic primary afferent neurons.',
        'দেহের মোট সেরোটোনিনের ৯০%-এর বেশি এই পরিপাকতন্ত্রেই তৈরি ও সংরক্ষিত থাকে। অন্ত্রের ঝিল্লিতে অবস্থিত এন্টেরোক্রোমাফিন কোষগুলো TPH1 ও AADC এনজাইম ব্যবহার করে খাদ্যের ট্রিপটোফ্যান থেকে প্রচুর সেরোটোনিন তৈরি করে। খাবারের চাপ পেলে এই সেরোটোনিন ক্ষরিত হয়ে অন্ত্রের সংকোচন ও খাদ্য চলাচল নিয়ন্ত্রণ করে।'
      ),
      spatialRelations: l(
        'Spans the mucosal lining of the stomach, small intestine, and colon, adjacent to the submucosal (Meissner) and myenteric (Auerbach) nerve plexuses.',
        'পাকস্থলী ও অন্ত্রের অভ্যন্তরীণ মিউকোসায় বিস্তৃত যা অন্ত্রের অভ্যন্তরীণ স্নায়ুজালকের ঠিক সন্নিকটে অবস্থিত থেকে সংকেত বিনিময় করে।'
      ),
      physiology: l(
        'Serotonin released into the portal circulation is rapidly taken up by circulating platelets via SERT; platelets lack TPH and depend entirely on the gut for their dense-granule serotonin stores.',
        'রক্তে বের হওয়া সেরোটোনিন রক্তের প্লাটিলেট কোষগুলো SERT বাহক দিয়ে শুষে নেয়; প্লাটিলেটের নিজস্ব কোনো তৈরির ক্ষমতা না থাকায় তারা সম্পূর্ণভাবে অন্ত্রের ওপর নির্ভরশীল।'
      ),
      nutritionConnection: l(
        'Tryptophan compete with large neutral amino acids (LNAAs) for intestinal and blood-brain barrier transport; high-carbohydrate meals favor tryptophan uptake by stimulating insulin-mediated BCAA clearance.',
        'খাদ্যের অন্যান্য অ্যামিনো অ্যাসিডের সাথে ট্রিপটোফ্যান পরিবহনে প্রতিযোগিতা হয়; শর্করাযুক্ত খাবার ইনসুলিন বাড়িয়ে পেশিতে অন্যান্য অ্যাসিড ঢুকিয়ে ট্রিপটোফ্যানের শোষণ সহজ করে।'
      ),
      clinicalSignificance: l(
        'Carcinoid tumors (neuroendocrine tumors of enterochromaffin origin) secrete massive quantities of serotonin into the systemic circulation when metastatic to the liver, causing carcinoid syndrome (flushing, diarrhea, right-sided valvular fibrosis).',
        'কার্সিনয়েড টিউমার বিপুল সেরোটোনিন ক্ষরণ করে কার্সিনয়েড সিন্ড্রোম ঘটায়, যার ফলে মুখ লাল হয়ে যাওয়া, তীব্র পাতলা পায়খানা এবং হৃৎপিণ্ডের কপাটিকা নষ্ট হয়ে যায়।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-vascular-endothelium-nitric-oxide',
      name: l('Vascular Endothelium (Endothelial Nitric Oxide Synthase & Vasomotor Tone)', 'রক্তনালীর এন্ডোথেলিয়াম (নাইট্রিক অক্সাইড সিন্থেস ও রক্তচাপ নিয়ন্ত্রণ)'),
      latinName: 'Endothelium Vasculare (Systema eNOS)',
      system: l('Cardiovascular & Hemodynamic System', 'সংবহনতন্ত্র ও রক্তগতিবিদ্যা ব্যবস্থা'),
      cavity: l('Systemic Circulatory Network', 'সার্বিক রক্ত সংবহন জালক'),
      position3D: { x: -2, y: 215, z: 2 },
      color: '#059669',
      highlightColor: '#10b981',
      shapeType: 'heart',
      description: l(
        'The continuous inner monolayer of all blood vessels throughout the human body. Endothelial cells express endothelial nitric oxide synthase (eNOS / NOS3), which utilizes L-arginine, NADPH, oxygen, and the cofactor tetrahydrobiopterin (BH4) to continuously synthesize the gaseous free radical signaling molecule nitric oxide (NO•). NO diffuses into vascular smooth muscle, activating soluble guanylyl cyclase (sGC) to induce vasodilation.',
        'মানবদেহের সমস্ত রক্তনালীর অভ্যন্তরীণ মসৃণ একক কোষস্তর। এন্ডোথেলিয়াল কোষগুলো eNOS এনজাইমের মাধ্যমে এল-আরজিনিন, অক্সিজেন এবং BH4 কোফ্যাক্টর ব্যবহার করে অবিরাম বায়বীয় নাইট্রিক অক্সাইড (NO) গ্যাস তৈরি করে। এই গ্যাস রক্তনালীর মসৃণ পেশিতে প্রবেশ করে রক্তনালীকে শিথিল ও প্রসারিত করে রক্তচাপ স্বাভাবিক রাখে।'
      ),
      spatialRelations: l(
        'Forms the continuous luminal interface of arteries, arterioles, capillaries, and veins, directly sensing fluid shear stress exerted by circulating blood flow.',
        'ধমনী ও শিরার রক্তের সংস্পর্শে থেকে রক্তপ্রবাহের চাপ সরাসরি পরিমাপ করে এবং সেই অনুযায়ী নাইট্রিক অক্সাইড ক্ষরণ কমিয়ে বা বাড়িয়ে রক্তচাপ নিয়ন্ত্রণ করে।'
      ),
      physiology: l(
        'Pulsatile shear stress and agonists (acetylcholine, bradykinin) increase intracellular calcium, activating calmodulin which binds eNOS, promoting electron transfer from NADPH to heme.',
        'রক্তের চাপ বাড়লে এন্ডোথেলিয়ামে ক্যালসিয়াম বৃদ্ধি পায় যা ক্যালমোডিউলিনের সাহায্যে eNOS এনজাইমকে দ্রুত সক্রিয় করে নাইট্রিক অক্সাইড উৎপাদন বাড়িয়ে দেয়।'
      ),
      nutritionConnection: l(
        'Dietary L-citrulline and inorganic nitrates (found in beetroot and leafy greens) effectively boost systemic NO generation, bypassing endothelial arginase and reducing systolic blood pressure.',
        'খাবারের এল-সিট্রোলিন এবং সবুজ শাকসবজি ও বিটরুটের নাইট্রেট রক্তে নাইট্রিক অক্সাইড বহুগুণ বাড়িয়ে স্বাভাবিক রক্তচাপ বজায় রাখতে সাহায্য করে।'
      ),
      clinicalSignificance: l(
        'Oxidative stress in atherosclerosis oxidizes BH4 to BH2, uncoupling eNOS: electrons leak to oxygen, producing cytotoxic superoxide (O2•-) rather than NO, accelerating vascular stiffness and hypertension.',
        'উচ্চ রক্তচাপ ও চর্বি জমলে BH4 নষ্ট হয়ে যায়, ফলে eNOS নাইট্রিক অক্সাইডের বদলে বিষাক্ত সুপারঅক্সাইড তৈরি করে রক্তনালীকে শক্ত ও সংকুচিত করে তোলে।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism28NeurotransmittersLesson: LessonTopic = {
  id: 'topic.metabolism.neurotransmitters-specialized-amines',
  slug: 'neurotransmitters-specialized-amines',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '28 · Neurotransmitters, Biogenic Amines & Neurochemistry',
    '২৮ · নিউরোট্রান্সমিটার, বায়োজেনিক অ্যামিন ও স্নায়ুরসায়ন'
  ),
  summary: l(
    'Molecular pathways of neurotransmitter biosynthesis: catecholamine synthesis via tyrosine hydroxylase (BH4) and PNMT, serotonin from tryptophan (TPH), histamine, GABA shunt, nitric oxide synthase (NOS) isoforms, monoamine degradation via MAO and COMT, and clinical pharmacology of Parkinsonism and L-DOPA.',
    'নিউরোট্রান্সমিটার জৈবসংশ্লেষণের আণবিক গতিপথ: টাইরোসিন হাইড্রোক্সিলেজ (BH4) ও PNMT দ্বারা ক্যাটাকোলামিন সংশ্লেষ, ট্রিপটোফ্যান থেকে সেরোটোনিন (TPH), হিস্টামিন, GABA শান্ট, নাইট্রিক অক্সাইড সিন্থেস (NOS) আইসোফর্ম, MAO ও COMT দ্বারা অবক্ষয় এবং পারকিনসন্স রোগে এল-ডোপার ফার্মাকোলজি।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Detail the enzymatic sequence of catecholamine biosynthesis from L-tyrosine, explaining the regulatory role of BH4 and cortisol induction of PNMT.',
      'টাইরোসিন থেকে ক্যাটাকোলামিন তৈরির ধারাবাহিক রাসায়নিক বিক্রিয়া, BH4-এর নিয়ন্ত্রণমূলক ভূমিকা এবং কর্টিসল দ্বারা PNMT উদ্দীপন ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Analyze the biosynthesis and degradation of indoleamines, histamine, and GABA, contrasting synaptic clearance by reuptake transporters with enzymatic oxidation by MAO and COMT.',
      'সেরোটোনিন, হিস্টামিন ও গাবার সংশ্লেষ ও ধ্বংস প্রক্রিয়া বিশ্লেষণ করা এবং পুনঃশোষণ বাহক বনাম MAO/COMT এনজাইমের ভূমিকা নিরূপণ করতে পারা।'
    ),
    l(
      'Evaluate the mechanism of nitric oxide synthase isoforms, explaining how eNOS uncoupling drives endothelial dysfunction and hypertension.',
      'নাইট্রিক অক্সাইড সিন্থেসের ক্রিয়াকৌশল মূল্যায়ন করা এবং eNOS আনকাপলিং কীভাবে রক্তনালীর প্রদাহ ও উচ্চ রক্তচাপ সৃষ্টি করে তা ব্যাখ্যা করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.amino-acid-catabolism-urea', 'topic.metabolism.carbon-skeletons-specialized-products'],
  relatedTopicIds: ['topic.metabolism.one-carbon-methylation-transsulfuration', 'topic.metabolism.inborn-errors-metabolism'],
  references: neuroRefs,
  evidenceBySection: {
    introduction: ['kandel-principles-neural-science-6e-ch13', 'lehninger-biochem-8e-ch18'],
    structure: ['nagatsu-tyrosine-hydroxylase-history-2006', 'cooper-biochemical-basis-neuropharm-8e'],
    mechanism: ['nagatsu-tyrosine-hydroxylase-history-2006', 'moncada-higgs-nitric-oxide-fasebj-1995'],
    integration: ['cooper-biochemical-basis-neuropharm-8e', 'kandel-principles-neural-science-6e-ch13'],
    practice: ['cooper-biochemical-basis-neuropharm-8e', 'nagatsu-tyrosine-hydroxylase-history-2006'],
    takeaways: ['kandel-principles-neural-science-6e-ch13', 'lehninger-biochem-8e-ch18'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Amino Acids as Neurochemical Substrates', '১. স্নায়ু-রাসায়নিক সাবস্ট্রেট হিসেবে অ্যামিনো অ্যাসিড'), sectionId: 'introduction' },
      { id: 'sec-catechol', label: l('2. The Catecholamine Biosynthetic Cascade', '২. ক্যাটাকোলামিন জৈবসংশ্লেষণের ধারাবাহিক বিক্রিয়া'), sectionId: 'structure' },
      { id: 'sec-indole', label: l('3. Indoleamines: Serotonin & Melatonin', '৩. ইনডোলঅ্যামিন: সেরোটোনিন ও মেলাটোনিন'), sectionId: 'mechanism' },
      { id: 'sec-gaba-no', label: l('4. The GABA Shunt, Nitric Oxide & Creatine', '৪. GABA শান্ট, নাইট্রিক অক্সাইড ও ক্রিয়েটিন'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Clinical Case: Parkinsonism & L-DOPA', '৫. ক্লিনিক্যাল কেস: পারকিনসনিজম ও এল-ডোপা'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Core Takeaways & High-Yield Summary', '৬. মূল শিক্ষা ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Tyrosine Hydroxylase (TH)', 'টাইরোসিন হাইড্রোক্সিলেজ (TH)'),
        definition: l(
          'Rate-limiting enzyme of catecholamine synthesis; oxidizes L-tyrosine to L-DOPA utilizing tetrahydrobiopterin (BH4), molecular oxygen, and non-heme ferrous iron (Fe2+); feedback inhibited by dopamine and norepinephrine.',
          'ক্যাটাকোলামিন তৈরির গতি-নিয়ন্ত্রক এনজাইম; যা টেট্রাহাইড্রোবায়োপ্টেরিন (BH4), অক্সিজেন ও আয়রন ব্যবহার করে টাইরোসিনকে এল-ডোপায় পরিণত করে; ডোপামিন ও নরএপিনেফ্রিন দ্বারা নিয়ন্ত্রিত হয়।'
        ),
      },
      {
        term: l('Aromatic L-Amino Acid Decarboxylase (AADC)', 'অ্যারোমেটিক এল-অ্যামিনো এসিড ডিকার্বোক্সিলেজ (AADC)'),
        definition: l(
          'Pyridoxal phosphate (PLP / Vitamin B6)-dependent cytosolic enzyme decarboxylating L-DOPA to dopamine, and 5-HTP to serotonin; inhibited peripherally by carbidopa and benserazide.',
          'ভিটামিন বি৬ (PLP)-নির্ভর সাইটোসোলিক এনজাইম যা এল-ডোপাকে ডোপামিনে এবং ৫-HTP-কে সেরোটোনিনে রূপান্তর করে; কার্বিডোপা ওষুধ দ্বারা প্রান্তীয় অঞ্চলে অবরুদ্ধ হয়।'
        ),
      },
      {
        term: l('Phenylethanolamine N-Methyltransferase (PNMT)', 'ফিনাইলইথানলঅ্যামিন এন-মিথাইলট্রান্সফারেজ (PNMT)'),
        definition: l(
          'Adrenal medullary enzyme catalyzing SAM-dependent N-methylation of norepinephrine to epinephrine; strongly upregulated transcriptionally by glucocorticoids arriving via the intra-adrenal portal system.',
          'অ্যাড্রেনাল মেডালার এনজাইম যা SAM ব্যবহার করে নরএপিনেফ্রিনকে এপিনেফ্রিনে পরিণত করে; অ্যাড্রেনাল কর্টেক্সের কর্টিসল দ্বারা প্রবলভাবে উদ্দীপ্ত হয়।'
        ),
      },
      {
        term: l('GABA Shunt', 'গাবা শান্ট (GABA Shunt)'),
        definition: l(
          'Metabolic bypass of the alpha-ketoglutarate dehydrogenase step in glial/neuronal TCA cycles: glutamate decarboxylase (GAD, PLP-dependent) forms GABA, transaminated by GABA-T to succinic semialdehyde and oxidized to succinate.',
          'স্নায়ুকোষের সাইট্রিক এসিড চক্রের একটি বিকল্প পথ: GAD এনজাইম গ্লুটামেট থেকে GABA তৈরি করে, যা পরবর্তীতে সাকসিনেট হয়ে পুনরায় ক্রেবস চক্রে শক্তি যোগায়।'
        ),
      },
      {
        term: l('Nitric Oxide Synthase (NOS)', 'নাইট্রিক অক্সাইড সিন্থেস (NOS)'),
        definition: l(
          'Enzyme family (eNOS, nNOS, iNOS) converting L-arginine and O2 to nitric oxide and L-citrulline; requires NADPH, FAD, FMN, heme, calmodulin, and BH4 cofactors.',
          'এনজাইম পরিবার (eNOS, nNOS, iNOS) যা এল-আরজিনিন থেকে নাইট্রিক অক্সাইড ও সিট্রোলিন তৈরি করে; যাতে NADPH, FAD, FMN, হেম, ক্যালমোডিউলিন ও BH4 প্রয়োজন।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Pharmacological Rationale of L-DOPA + Carbidopa Therapy', 'এল-ডোপা ও কার্বিডোপা চিকিৎসার ফার্মাকোলজিক্যাল যুক্তি'),
        steps: [
          l(
            'Step 1: Dopamine is a polar charged catecholamine that cannot cross the blood-brain barrier (BBB). Its metabolic precursor L-DOPA is an amino acid recognized and actively transported across the BBB by the large neutral amino acid transporter (LAT1 / SLC7A5).',
            'ধাপ ১: ডোপামিন একটি চার্জযুক্ত অণু যা রক্ত-মস্তিষ্ক প্রাচীর ভেদ করতে পারে না। কিন্তু এর পূর্বসূরি এল-ডোপা বিশেষ অ্যামিনো অ্যাসিড বাহক LAT1 দিয়ে সহজেই মস্তিষ্কে প্রবেশ করতে পারে।'
          ),
          l(
            'Step 2: If L-DOPA is administered alone, >95% is prematurely converted into dopamine in the systemic peripheral circulation by peripheral AADC, causing severe nausea, cardiac arrhythmias, and hypotension, while leaving <1% to reach the brain.',
            'ধাপ ২: একা এল-ডোপা দিলে প্রান্তীয় রক্তে ৯৫%-এর বেশি অংশ অকালে ডোপামিনে পরিণত হয়ে মারাত্মক বমি ও রক্তচাপ হ্রাস ঘটায় এবং মাত্র ১% মস্তিষ্কে পৌঁছায়।'
          ),
          l(
            'Step 3: Carbidopa is a hydrazine analogue that potently inhibits AADC but cannot penetrate the blood-brain barrier. Co-administering carbidopa blocks peripheral conversion, increasing brain L-DOPA delivery four- to five-fold while abolishing peripheral side effects.',
            'ধাপ ৩: কার্বিডোপা প্রান্তীয় AADC বন্ধ করে কিন্তু মস্তিষ্কে ঢুকতে পারে না। ফলে প্রান্তীয় ডোপামিন তৈরি বন্ধ থাকে, মস্তিষ্কে এল-ডোপার প্রবেশ ৪-৫ গুণ বৃদ্ধি পায় এবং পার্শ্বপ্রতিক্রিয়া দূর হয়।'
          ),
        ],
        conclusion: l(
          'Carbidopa maximizes therapeutic brain delivery of dopamine while eliminating severe peripheral adverse reactions in Parkinsonian patients.',
          'কার্বিডোপা এল-ডোপাকে অক্ষত অবস্থায় মস্তিষ্কে পাঠিয়ে ডোপামিন তৈরি নিশ্চিত করে এবং প্রান্তীয় পার্শ্বপ্রতিক্রিয়া সম্পূর্ণ দূর করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'What critical cofactor is shared by Tyrosine Hydroxylase, Tryptophan Hydroxylase, and Nitric Oxide Synthase?',
          'টাইরোসিন হাইড্রোক্সিলেজ, ট্রিপটোফ্যান হাইড্রোক্সিলেজ এবং নাইট্রিক অক্সাইড সিন্থেসের মধ্যে কোন অপরিহার্য কোফ্যাক্টরটি সাধারণ?'
        ),
        answer: l(
          'Tetrahydrobiopterin (BH4). Inborn errors of BH4 synthesis or recycling impair all three pathways simultaneously, causing atypical hyperphenylalaninemia with catastrophic central monoamine depletion.',
          'টেট্রাহাইড্রোবায়োপ্টেরিন (BH4)। BH4 সংশ্লেষণ বা পুনর্ব্যবহারের জন্মগত ত্রুটি একই সাথে এই তিনটি পথকেই ধ্বংস করে দেয়, যার ফলে মারাত্মক নিউরোট্রান্সমিটারের শূন্যতা সৃষ্টি হয়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: neuro3DData,
  interactiveDiagram: {
    id: 'diag-metabolism28-neurotransmitters',
    title: l('Interactive Pathway of Catecholamine, Indoleamine & Gaseous Neurotransmitter Biosynthesis', 'ক্যাটাকোলামিন, ইনডোলঅ্যামিন ও বায়বীয় নিউরোট্রান্সমিটার জৈবসংশ্লেষণের ইন্টারেক্টিভ মানচিত্র'),
    disclaimer: l('Interactive educational diagram illustrating neurotransmitter pathways and enzyme targets.', 'নিউরোট্রান্সমিটার পথ ও এনজাইম লক্ষ্যসমূহ প্রদর্শনকারী শিক্ষামূলক ডায়াগ্রাম।'),
    description: l(
      'Follow the molecular transformations converting essential dietary amino acids into primary human neurotransmitters, illustrating rate-limiting enzymes, essential cofactors, and clinical pharmacological targets.',
      'অপরিহার্য অ্যামিনো অ্যাসিড থেকে প্রধান নিউরোট্রান্সমিটার তৈরির প্রতিটি বিক্রিয়া ধাপ, গতি-নিয়ন্ত্রক এনজাইম, কোফ্যাক্টর এবং চিকিৎসার লক্ষ্যগুলো পর্যবেক্ষণ করুন।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-tyrosine-hydroxylase',
        label: l('1. Tyrosine Hydroxylase (TH)', '১. টাইরোসিন হাইড্রোক্সিলেজ (TH)'),
        description: l('Converts L-tyrosine to L-DOPA using BH4, Fe2+, and O2; rate-limiting step of catecholamines.', 'টাইরোসিনকে এল-ডোপায় পরিণত করে; ক্যাটাকোলামিন সংশ্লেষণের প্রধান গতি-নিয়ন্ত্রক ধাপ।'),
        details: l('Feedback inhibited by cytosolic dopamine; phosphorylation by PKA and CaMKII increases Vmax.', 'ডোপামিন দ্বারা ঋণাত্মকভাবে নিয়ন্ত্রিত; প্রোটিন কাইনেজ ফসফরাইলেশন এর গতি বৃদ্ধি করে।'),
        sectionId: 'structure',
        color: '#3b82f6',
      },
      {
        id: 'node-aadc-dopamine',
        label: l('2. Aromatic L-Amino Acid Decarboxylase (AADC)', '২. অ্যারোমেটিক এল-অ্যামিনো এসিড ডিকার্বোক্সিলেজ (AADC)'),
        description: l('Decarboxylates L-DOPA to Dopamine using pyridoxal phosphate (PLP / Vitamin B6).', 'ভিটামিন বি৬ ব্যবহার করে এল-ডোপাকে ডোপামিনে রূপান্তর করে।'),
        details: l('Inhibited peripherally by carbidopa and benserazide to enhance brain L-DOPA delivery.', 'কার্বিডোপা দ্বারা প্রান্তীয়ভাবে অবরুদ্ধ হয় যাতে মস্তিষ্কে এল-ডোপা বেশি পৌঁছায়।'),
        sectionId: 'structure',
        color: '#10b981',
      },
      {
        id: 'node-dbh-norepinephrine',
        label: l('3. Dopamine Beta-Hydroxylase (DBH)', '৩. ডোপামিন বিটা-হাইড্রোক্সিলেজ (DBH)'),
        description: l('Converts dopamine to norepinephrine inside synaptic vesicles, requiring copper (Cu2+) and Vitamin C (ascorbate).', 'ভেসিকলের ভেতর তামা ও ভিটামিন সি ব্যবহার করে ডোপামিন থেকে নরএপিনেফ্রিন তৈরি করে।'),
        details: l('Located within chromaffin granules and noradrenergic synaptic vesicles.', 'ক্রোমাফিন দানা এবং স্নায়ু ভেসিকলের অভ্যন্তরীণ ঝিল্লিতে অবস্থান করে।'),
        sectionId: 'mechanism',
        color: '#eab308',
      },
      {
        id: 'node-pnmt-epinephrine',
        label: l('4. Phenylethanolamine N-Methyltransferase (PNMT)', '৪. ফিনাইলইথানলঅ্যামিন এন-মিথাইলট্রান্সফারেজ (PNMT)'),
        description: l('Transfers methyl group from SAM to norepinephrine, producing epinephrine in the adrenal medulla.', 'SAM থেকে মিথাইল নিয়ে নরএপিনেফ্রিনকে এপিনেফ্রিনে পরিণত করে।'),
        details: l('Inducible by glucocorticoids from the adrenal cortex; requires S-adenosylmethionine.', 'কর্টিসল হরমোন দ্বারা উদ্দীপ্ত হয়; এস-অ্যাডেনোসিলমেথিওনিন প্রয়োজন।'),
        sectionId: 'mechanism',
        color: '#ec4899',
      },
      {
        id: 'node-tph-serotonin',
        label: l('5. Tryptophan Hydroxylase (TPH1/2) & Serotonin', '৫. ট্রিপটোফ্যান হাইড্রোক্সিলেজ (TPH1/2) ও সেরোটোনিন'),
        description: l('Converts L-tryptophan to 5-HTP with BH4 and O2; AADC then generates serotonin (5-HT).', 'BH4 সহযোগে ট্রিপটোফ্যান থেকে ৫-HTP তৈরি করে, যা পরে সেরোটোনিনে পরিণত হয়।'),
        details: l('TPH1 operates in gut enterochromaffin cells; TPH2 operates exclusively in brain raphe neurons.', 'TPH1 অন্ত্রে এবং TPH2 মস্তিষ্কের রাফে নিউক্লিয়াসে সক্রিয় থাকে।'),
        sectionId: 'integration',
        color: '#8b5cf6',
      },
      {
        id: 'node-gad-gaba-shunt',
        label: l('6. Glutamate Decarboxylase (GAD65/67) & GABA', '৬. গ্লুটামেট ডিকার্বোক্সিলেজ (GAD) ও GABA'),
        description: l('Decarboxylates glutamate to gamma-aminobutyric acid (GABA), the major inhibitory neurotransmitter.', 'গ্লুটামেট থেকে প্রধান স্নায়ু অবদমনকারী নিউরোট্রান্সমিটার GABA তৈরি করে।'),
        details: l('Strictly requires PLP (Vitamin B6); B6 deficiency precipitates intractable neonatal seizures.', 'ভিটামিন বি৬ অপরিহার্য; বি৬-এর ঘাটতিতে নবজাতকদের মারাত্মক খিঁচুনি দেখা দেয়।'),
        sectionId: 'integration',
        color: '#06b6d4',
      },
      {
        id: 'node-enos-nitric-oxide',
        label: l('7. Nitric Oxide Synthase (eNOS / NOS3)', '৭. এন্ডোথেলিয়াল নাইট্রিক অক্সাইড সিন্থেস (eNOS)'),
        description: l('Oxidizes L-arginine to L-citrulline and gaseous NO• utilizing NADPH, FAD, FMN, heme, and BH4.', 'আরজিনিন থেকে বায়বীয় নাইট্রিক অক্সাইড (NO) তৈরি করে যা রক্তনালী প্রসারিত করে।'),
        details: l('NO activates soluble guanylyl cyclase (sGC) to elevate smooth muscle cGMP, driving vasodilation.', 'NO রক্তনালীর পেশিতে cGMP বৃদ্ধি করে রক্তনালী দ্রুত প্রসারিত করে।'),
        sectionId: 'practice',
        color: '#ef4444',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'An integrated biochemical map connecting the tyrosine catecholamine cascade, tryptophan serotonin axis, histidine histamine pathway, glutamate GABA shunt, and arginine-derived nitric oxide and creatine pathways.',
      'একটি সমন্বিত জৈবরাসাযনিক মানচিত্র যা টাইরোসিন ক্যাটাকোলামিন পথ, ট্রিপটোফ্যান সেরোটোনিন অক্ষ, হিস্টিডিন হিস্টামিন পথ, গ্লুটামেট GABA শান্ট এবং আরজিনিন থেকে নাইট্রিক অক্সাইড ও ক্রিয়েটিন তৈরির গতিপথকে সংযুক্ত করে।'
    ),
    steps: [
      l('Tyrosine is hydroxylated by BH4-dependent TH to L-DOPA, decarboxylated by PLP-dependent AADC to dopamine.', 'টাইরোসিন TH দ্বারা এল-ডোপায় এবং পরে AADC দ্বারা ডোপামিনে রূপান্তরিত হয়।'),
      l('Dopamine is oxidized by copper/ascorbate-dependent DBH to norepinephrine, methylated by SAM/PNMT to epinephrine.', 'ডোপামিন DBH দ্বারা নরএপিনেফ্রিন এবং PNMT দ্বারা এপিনেফ্রিনে পরিণত হয়।'),
      l('Tryptophan is converted by TPH and AADC into serotonin (5-HT), further acetylated and methylated to melatonin.', 'ট্রিপটোফ্যান থেকে সেরোটোনিন এবং পরবর্তীতে মেলাটোনিন তৈরি হয়।'),
      l('Glutamate is decarboxylated by GAD to inhibitory GABA, while L-arginine is oxidized by eNOS to nitric oxide.', 'গ্লুটামেট থেকে GABA এবং এল-আরজিনিন থেকে রক্তনালী প্রসারক নাইট্রিক অক্সাইড উৎপন্ন হয়।'),
    ],
  },
  assessment: {
    question: l(
      'A 68-year-old male with Parkinson’s disease is prescribed oral L-DOPA co-formulated with carbidopa. What is the precise pharmacological and biochemical purpose of including carbidopa in this regimen?',
      'পারকিনসন্স রোগে আক্রান্ত ৬৮ বছর বয়সী এক রোগীকে কার্বিডোপাসহ এল-ডোপা প্রেসক্রাইব করা হলো। এই চিকিৎসায় কার্বিডোপা যুক্ত করার সুনির্দিষ্ট ফার্মাকোলজিক্যাল ও জৈবরাসাযনিক কারণ কী?'
    ),
    options: [
      l(
        'Carbidopa selectively inhibits peripheral aromatic L-amino acid decarboxylase (AADC) without crossing the blood-brain barrier, maximizing L-DOPA delivery to the central nervous system while preventing peripheral adverse effects.',
        'কার্বিডোপা রক্ত-মস্তিষ্ক প্রাচীর অতিক্রম না করে কেবল রক্তের AADC এনজাইমকে অবরুদ্ধ করে, যার ফলে এল-ডোপা অক্ষত অবস্থায় মস্তিষ্কে প্রবেশ করতে পারে এবং প্রান্তীয় পার্শ্বপ্রতিক্রিয়া সম্পূর্ণ বন্ধ থাকে।'
      ),
      l(
        'Carbidopa directly activates striatal dopamine D2 receptors independently of dopamine.',
        'কার্বিডোপা ডোপামিন ছাড়াই সরাসরি মস্তিষ্কের ডোপামিন D2 রিসেপ্টরকে উদ্দীপ্ত করে।'
      ),
      l(
        'Carbidopa functions as an allosteric activator of brain tyrosine hydroxylase.',
        'কার্বিডোপা মস্তিষ্কের টাইরোসিন হাইড্রোক্সিলেজ এনজাইমকে কৃত্রিমভাবে সক্রিয় করে।'
      ),
      l(
        'Carbidopa competitively inhibits monoamine oxidase B (MAO-B) in glial cells.',
        'কার্বিডোপা গ্লিয়াল কোষে মনোঅ্যামিন অক্সিডেজ বি (MAO-B) এনজাইমকে প্রতিহত করে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'L-DOPA crosses the blood-brain barrier via the LAT1 transporter, whereas dopamine cannot. Peripheral AADC rapidly converts oral L-DOPA to dopamine in systemic circulation, causing severe nausea, arrhythmias, and hypotension. Carbidopa is an AADC inhibitor that does not penetrate the blood-brain barrier; it spares L-DOPA in the periphery to enter the brain where central AADC converts it to dopamine, minimizing systemic side effects.',
      'এল-ডোপা LAT1 বাহক দ্বারা রক্ত-মস্তিষ্ক প্রাচীর অতিক্রম করতে পারে কিন্তু ডোপামিন পারে না। রক্তে অবস্থিত AADC এনজাইম এল-ডোপাকে দ্রুত ডোপামিনে রূপান্তর করে বমি ও হৃৎপিণ্ডের সমস্যা তৈরি করে। কার্বিডোপা মস্তিষ্কে ঢুকতে পারে না, তাই এটি কেবল রক্তের AADC-কে বন্ধ রেখে এল-ডোপাকে অক্ষত অবস্থায় মস্তিষ্কে প্রবেশ করতে দেয়।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Chemical Messengers of the Mind & Body', 'মন ও দেহের রাসায়নিক বার্তাবাহক'),
          paragraphs: [
            l(
              'Neurotransmitters and specialized biogenic amines are the molecular signaling agents that orchestrate human consciousness, movement, autonomic regulation, and emotional balance. Rather than constructing entirely novel chemical templates, human evolution repurposed common dietary amino acids as starting materials. Through precise enzymatic hydroxylation, decarboxylation, and methylation, simple amino acids are converted into potent neurochemical messengers.',
              'নিউরোট্রান্সমিটার এবং বিশেষ বায়োজেনিক অ্যামিন হলো সেই আণবিক বার্তাবাহক যা মানুষের চেতনা, গতিশীলতা, স্বায়ত্তশাসিত নিয়ন্ত্রণ এবং মানসিক ভারসাম্য পরিচালনা করে। মানব বিবর্তনে নতুন কোনো জটিল রাসায়নিক ছাঁচ তৈরি না করে সাধারণ খাদ্যের অ্যামিনো অ্যাসিডগুলোকে কাঁচামাল হিসেবে ব্যবহার করা হয়েছে। সুনির্দিষ্ট হাইড্রোক্সিলেশন, ডিকার্বোক্সিলেশন এবং মিথাইলেশনের মাধ্যমে সাধারণ অ্যামিনো অ্যাসিডগুলো অত্যন্ত শক্তিশালী স্নায়ু সংকেত অণুতে রূপান্তরিত হয়।'
            ),
            l(
              'These pathways bridge cellular biochemistry with clinical neuropsychiatry and cardiovascular pharmacology. A deficiency in a single vitamin cofactor or a genetic mutation in an amino acid hydroxylase can abolish dopamine synthesis, triggering the motor paralysis of Parkinson’s disease, or derail serotonin production, precipitating profound depression and autonomic dysregulation.',
              'এই জৈবরাসাযনিক পথগুলো কোষীয় জীববিদ্যার সাথে ক্লিনিক্যাল নিউরোসাইকিয়াট্রি এবং রক্ত সংবহনতন্ত্রের ফার্মাকোলজিকে সরাসরি সংযুক্ত করে। একটিমাত্র ভিটামিন কোফ্যাক্টরের অভাব বা এনজাইমের ক্ষুদ্র ত্রুটি ডোপামিন তৈরি বন্ধ করে পারকিনসন্স রোগের মতো পক্ষাঘাত সৃষ্টি করতে পারে, কিংবা সেরোটোনিনের ঘাটতি ঘটিয়ে চরম বিষণ্নতা ও স্নায়বিক বিপর্যয় ডেকে আনতে পারে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Catecholamine Family: Dopamine, Norepinephrine & Epinephrine', 'ক্যাটাকোলামিন পরিবার: ডোপামিন, নরএপিনেফ্রিন ও এপিনেফ্রিন'),
          paragraphs: [
            l(
              'The catecholamines are characterized by a benzene ring with two adjacent hydroxyl groups (a catechol nucleus) attached to an ethylamine side chain. Synthesized from L-tyrosine, the pathway begins in the cytoplasm of specialized neurons and chromaffin cells. Tyrosine hydroxylase (TH) adds a second hydroxyl group to form L-3,4-dihydroxyphenylalanine (L-DOPA). Aromatic L-amino acid decarboxylase (AADC) then removes the carboxyl group to yield dopamine.',
              'ক্যাটাকোলামিন অণুগুলোর মূল বৈশিষ্ট্য হলো দুটি পাশাপাশি হাইড্রোক্সিল গ্রুপযুক্ত একটি বেনজিন রিং (ক্যাটাকল নিউক্লিয়াস) এবং একটি ইথাইলঅ্যামিন পার্শ্ব শিকল। এল-টাইরোসিন থেকে শুরু হওয়া এই বিক্রিয়াটি সাইটোপ্লাজমে সংঘটিত হয়। টাইরোসিন হাইড্রোক্সিলেজ (TH) টাইরোসিনকে এল-ডোপায় পরিণত করে। এরপর AADC এনজাইম কার্বক্সিল গ্রুপ অপসারণ করে ডোপামিন তৈরি করে।'
            ),
            l(
              'In noradrenergic neurons, dopamine is pumped into synaptic storage vesicles by the vesicular monoamine transporter (VMAT2), where dopamine beta-hydroxylase (DBH) converts it into norepinephrine. In the adrenal medulla, norepinephrine returns to the cytosol to be methylated by PNMT into epinephrine, which is repackaged into chromaffin granules ready for massive sympathoadrenal discharge.',
              'নরঅ্যাড্রেনার্জিক নিউরনে ডোপামিন বিশেষ বাহক (VMAT2) দিয়ে ভেসিকলের ভেতরে প্রবেশ করে, যেখানে ডোপামিন বিটা-হাইড্রোক্সিলেজ (DBH) একে নরএপিনেফ্রিনে রূপান্তরিত করে। অ্যাড্রেনাল মেডালায় নরএপিনেফ্রিন সাইটোপ্লাজমে ফিরে এসে PNMT দ্বারা এপিনেফ্রিনে পরিণত হয় এবং জরুরি মুহূর্তে রক্তে নিঃসৃত হওয়ার জন্য প্রস্তুত থাকে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Enzyme Mechanics & Vitamin Cofactor Dependency', 'এনজাইমের ক্রিয়া ও ভিটামিন কোফ্যাক্টরের নির্ভরতা'),
          paragraphs: [
            l(
              'The catalytic fidelity of monoamine synthesis depends on specific essential micronutrient cofactors. Tyrosine hydroxylase requires non-heme iron and tetrahydrobiopterin (BH4), while AADC requires pyridoxal 5-phosphate (PLP / Vitamin B6). Dopamine beta-hydroxylase requires copper and ascorbic acid (vitamin C) inside storage vesicles to reduce molecular oxygen during hydroxylation.',
              'মনোঅ্যামিন সংশ্লেষণের প্রতিটি ধাপ সুনির্দিষ্ট ভিটামিন কোফ্যাক্টরের ওপর নির্ভরশীল। টাইরোসিন হাইড্রোক্সিলেজের জন্য প্রয়োজন আয়রন এবং টেট্রাহাইড্রোবায়োপ্টেরিন (BH4), আর AADC এনজাইম ভিটামিন বি৬-এর ওপর নির্ভর করে। ভেসিকলের ভেতরে ডোপামিন বিটা-হাইড্রোক্সিলেজ এনজাইমের কাজ চালাতে কপার ও ভিটামিন সি প্রয়োজন হয়।'
            ),
            l(
              'Inborn errors in the synthesis or regeneration of BH4 (such as dihydropteridine reductase deficiency) deplete all catecholamines and serotonin simultaneously. These patients present with severe progressive developmental delay, hypotonia, and chorea despite normal plasma phenylalanine control.',
              'BH4 কোফ্যাক্টর তৈরি বা পুনর্ব্যবহারে জন্মগত ত্রুটি থাকলে ডোপামিন ও সেরোটোনিন উভয়ের উৎপাদন বন্ধ হয়ে যায়। এর ফলে শিশুদের রক্তে ফিনাইলঅ্যালানিন স্বাভাবিক থাকলেও মারাত্মক স্নায়বিক বৈকল্য ও খিঁচুনি দেখা দেয় যা কেবল কোফ্যাক্টর প্রতিস্থাপন করেই নিরাময় সম্ভব।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The Indoleamine & Gaseous Messenger Axis: Serotonin & Nitric Oxide', 'ইনডোলঅ্যামিন ও বায়বীয় বার্তাবাহক অক্ষ: সেরোটোনিন ও নাইট্রিক অক্সাইড'),
          paragraphs: [
            l(
              'L-Tryptophan gives rise to serotonin (5-HT), which regulates intestinal peristalsis, vascular tone, platelet aggregation, and central mood architecture. Tryptophan hydroxylase utilizes BH4 and molecular oxygen to generate 5-hydroxytryptophan, which is decarboxylated by AADC. In the pineal gland, serotonin is diurnal-acetylated and methylated by SAM to form the circadian regulator melatonin.',
              'এল-ট্রিপটোফ্যান থেকে সেরোটোনিন তৈরি হয় যা অন্ত্রের গতিশীলতা, রক্তনালীর সংকোচন এবং মেজাজ পরিচালনা করে। ট্রিপটোফ্যান হাইড্রোক্সিলেজ BH4 ব্যবহার করে ৫-HTP তৈরি করে, যা পরে সেরোটোনিনে রূপান্তরিত হয়। পিনিয়াল গ্রন্থিতে সেরোটোনিন রূপান্তরিত হয়ে ঘুম ও দিবা-রাত্রির চক্র পরিচালনাকারী মেলাটোনিন হরমোনে পরিণত হয়।'
            ),
            l(
              'L-Arginine is oxidized by nitric oxide synthases (eNOS, nNOS, iNOS) to yield the radical gas nitric oxide (NO•) and L-citrulline. NO diffuses instantaneously into adjacent smooth muscle, binding soluble guanylyl cyclase to stimulate cyclic GMP production, inducing rapid smooth muscle relaxation and systemic arterial vasodilation.',
              'এল-আরজিনিন থেকে নাইট্রিক অক্সাইড সিন্থেস এনজাইমের মাধ্যমে রক্তনালী প্রসারক গ্যাস নাইট্রিক অক্সাইড তৈরি হয়। এই ক্ষুদ্র গ্যাসীয় অণু রক্তনালীর মসৃণ পেশিতে ঢুকে সাইক্লিক জিএমপি (cGMP) বৃদ্ধি করে রক্তনালী দ্রুত প্রসারিত করে এবং রক্তচাপ কমিয়ে সংবহনতন্ত্রের স্বাস্থ্য রক্ষা করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Neurochemistry: Pharmacology of Monoamine Degradation', 'ক্লিনিক্যাল স্নায়ুরসায়ন: মনোঅ্যামিন ধ্বংসের ফার্মাকোলজি'),
          paragraphs: [
            l(
              'Neurotransmitter signaling is terminated by high-affinity plasma membrane reuptake transporters (DAT, NET, SERT) coupled to sodium gradients. Once retrieved or spilled into glia, catecholamines are catabolized sequentially by mitochondrial monoamine oxidase (MAO-A and MAO-B) and cytosolic catechol-O-methyltransferase (COMT), yielding homovanillic acid (HVA) and vanillylmandelic acid (VMA).',
              'স্নায়ু সংকেত শেষ করার জন্য বিশেষ পুনঃশোষণ বাহক কাজ করে যা সংকেত অণুগুলোকে কোষের ভেতরে ফিরিয়ে নেয়। এরপর মাইটোকন্ড্রিয়ার MAO এবং সাইটোপ্লাজমের COMT এনজাইম ক্যাটাকোলামিনগুলোকে ভেঙে হোমোভ্যানিলিক এসিড (HVA) ও ভ্যানিলাইলম্যান্ডেলিক এসিডে (VMA) পরিণত করে যা প্রস্রাবের সাথে নির্গত হয়।'
            ),
            l(
              'Pharmacological inhibition of MAO and COMT preserves synaptic transmitter levels, forming frontline therapies for Parkinson disease and treatment-resistant depression. Irreversible MAO-A inhibition requires dietary avoidance of aged cheeses and cured meats to avoid tyramine-induced hypertensive crisis.',
              'MAO এবং COMT এনজাইমকে ওষুধ দ্বারা বন্ধ করে স্নায়ু সংযোগস্থলে ডোপামিনের মাত্রা বাড়িয়ে পারকিনসন্স রোগের চিকিৎসা করা হয়। পুরোনো MAO ইনহিবিটর খেলে টাইরামিনযুক্ত পনির ও প্রক্রিয়াজাত মাংস খাওয়া বন্ধ রাখতে হয় যাতে প্রাণঘাতী রক্তচাপ বৃদ্ধি না ঘটে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Foundations of Human Neurochemistry', 'মানব স্নায়ুরসায়নের প্রধান ভিত্তিমূল'),
          paragraphs: [
            l(
              'Specialized biogenic amines demonstrate how metabolic modularity drives complex physiological communication. A small cohort of amino acids—tyrosine, tryptophan, histidine, glutamate, and arginine—serves as the foundational currency for human movement, mood, vasomotor control, and autonomic survival.',
              'বায়োজেনিক অ্যামিনগুলো প্রমাণ করে কীভাবে সাধারণ বিপাকীয় উপাদানগুলো জটিল স্নায়ু যোগাযোগ পরিচালনা করে। কয়েকটিমাত্র অ্যামিনো অ্যাসিড—টাইরোসিন, ট্রিপটোফ্যান, হিস্টিডিন, গ্লুটামেট ও আরজিনিন—মানুষের গতিশীলতা, মানসিক অনুভূতি এবং সামগ্রিক শারীরবৃত্তীয় সুস্থতার মূল ভিত্তি হিসেবে কাজ করে।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'শিক্ষায়তনিক'),
      sections: [
        {
          id: 'introduction',
          heading: l('Biochemical Principles of Aromatic Amino Acid Decarboxylation', 'অ্যারোমেটিক অ্যামিনো অ্যাসিড ডিকার্বোক্সিলেশনের জৈব-রাসায়নিক মূলনীতি'),
          paragraphs: [
            l(
              'Aromatic L-amino acid decarboxylase (AADC) represents a universal evolutionary nexus for monoamine neurotransmitter production. Operating in both dopaminergic and serotonergic neurons, AADC exhibits broad substrate specificity for L-DOPA, 5-HTP, and trace amines including tyramine and tryptamine, dependent strictly upon active-site pyridoxal 5-phosphate Schiff-base chemistry.',
              'অ্যারোমেটিক এল-অ্যামিনো এসিড ডিকার্বোক্সিলেজ (AADC) হলো মনোঅ্যামিন তৈরির একটি সার্বজনীন এনজাইম। ডোপামিনার্জিক ও সেরোটোনার্জিক উভয় নিউরনেই এটি ভিটামিন বি৬-এর সক্রিয় রূপ PLP-এর সাহায্যে শিফ ক্ষারক তৈরি করে সাবস্ট্রেট থেকে কার্বক্সিল গ্রুপ অপসারণ করে সক্রিয় নিউরোট্রান্সমিটার তৈরি করে।'
            ),
            l(
              'Mutations in the DDC gene encoding AADC cause severe autosomal recessive AADC deficiency, characterized by combined dopamine, norepinephrine, epinephrine, and serotonin depletion with preserved phenylalanine and tyrosine pools, manifesting in infantile oculogyric crises and autonomic crisis.',
              'AADC এনজাইমের জিনগত ত্রুটি ঘটলে দেহে ডোপামিন, নরএপিনেফ্রিন ও সেরোটোনিন সব একসাথে শূন্য হয়ে যায়। এর ফলে নবজাতকের চোখ উল্টে যাওয়া, তীব্র খিঁচুনি ও তাপমাত্রা নিয়ন্ত্রণের ক্ষমতা নষ্ট হয়ে মারাত্মক স্নায়বিক বিপর্যয় ঘটে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Vesicular Storage & Transmembrane Electrochemical Gradients', 'ভেসিকুলার সঞ্চয় ও ঝিল্লির বৈদ্যুতিক রাসায়নিক গ্রেডিয়েন্ট'),
          paragraphs: [
            l(
              'Synthesized cytoplasmic monoamines cannot remain unshielded in the cytosol, where high MAO activity leads to rapid oxidation and toxic quinone formation. The vesicular monoamine transporter (VMAT2 in brain, VMAT1 in adrenal medulla) utilizes a proton electrochemical gradient generated by vesicular vacuolar H+-ATPase to actively sequester cytoplasmic amines into storage vesicles.',
              'সাইটোপ্লাজমে তৈরি হওয়া মনোঅ্যামিনগুলো মুক্ত অবস্থায় থাকলে জারিত হয়ে ক্ষতিকর কুইনোন তৈরি করতে পারে। তাই VMAT2 বাহক ভেসিকুলার প্রোটন পাম্পের শক্তি ব্যবহার করে সাইটোপ্লাজম থেকে দ্রুত সমস্ত নিউরোট্রান্সমিটারকে সুরক্ষিত ভেসিকলের ভেতরে টেনে নেয়।'
            ),
            l(
              'Inside synaptic vesicles, acidic pH (~5.5) keeps monoamines protonated and stable, complexed with ATP and storage granins. Reserpine, an irreversible VMAT inhibitor, causes permanent vesicle depletion, demonstrating that vesicular sequestration is required to protect monoamines from spontaneous oxidative degradation.',
              'ভেসিকলের ভেতরের অম্লীয় পরিবেশ (pH ৫.৫) নিউরোট্রান্সমিটারগুলোকে সুরক্ষিত ও স্থিতিশীল রাখে। রিসারপিন ওষুধ এই VMAT বাহককে বন্ধ করে সমস্ত ভেসিকল খালি করে দেয়, যা প্রমাণ করে যে সাইটোপ্লাজমের অবক্ষয় থেকে রক্ষা পেতে ভেসিকুলার সঞ্চয় অপরিহার্য।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Enzymatic Mechanisms & Essential Cofactor Requirements', 'এনজাইমের অনুঘটন কৌশল ও অপরিহার্য কোফ্যাক্টরের ভূমিকা'),
          paragraphs: [
            l(
              'Tyrosine hydroxylase is an iron-dependent pterin monooxygenase. The enzyme requires non-heme ferrous iron (Fe2+), molecular oxygen (O2), and the reducing cofactor (6R)-L-erythro-5,6,7,8-tetrahydrobiopterin (BH4). During the catalytic cycle, one oxygen atom is incorporated into the meta position of the tyrosine aromatic ring, while the second oxygen atom is reduced to water, simultaneously oxidizing BH4 to 4a-hydroxytetrahydrobiopterin, recycled by pterin-4a-carbinolamine dehydratase and dihydropteridine reductase (DHPR).',
              'টাইরোসিন হাইড্রোক্সিলেজ হলো একটি আয়রন-নির্ভর টেরিন মনোঅক্সিজিনেজ। এই এনজাইমের অনুঘটনের জন্য ফেরাস আয়রন (Fe2+), আণবিক অক্সিজেন (O2) এবং বিজারক কোফ্যাক্টর টেট্রাহাইড্রোবায়োপ্টেরিন (BH4) প্রয়োজন। অনুঘটনকালে একটি অক্সিজেন পরমাণু টাইরোসিনের রিংয়ে যুক্ত হয় এবং অপরটি পানিতে পরিণত হয়; একই সাথে BH4 জারিত হয়ে যায়, যা পরবর্তীতে DHPR এনজাইম দ্বারা পুনরায় সক্রিয় BH4-এ পরিণত হয়।'
            ),
            l(
              'AADC relies on pyridoxal 5-phosphate (PLP, the active form of vitamin B6). The electrophilic aldehyde of PLP forms an internal aldimine Schiff base with an active site lysine; transaldimination transfers the substrate amine to PLP, forming an external aldimine that stabilizes the carbanion intermediate generated upon decarboxylation. Vitamin B6 deficiency profoundly depresses AADC activity, blunting monoamine synthesis across the central and peripheral nervous systems.',
              'AADC এনজাইম ভিটামিন বি৬-এর সক্রিয় রূপ পাইরিডক্সাল ফসফেটের (PLP) ওপর নির্ভর করে। PLP-এর অ্যালডিহাইড গ্রুপ সাবস্ট্রেটের সাথে শিফ ক্ষারক তৈরি করে কার্বক্সিল গ্রুপ অপসারণকে সহজ করে। ভিটামিন বি৬-এর ঘাটতি ঘটলে AADC-এর কার্যকারিতা মারাত্মকভাবে কমে যায়, যার ফলে মস্তিষ্ক ও স্নায়ুতন্ত্রে ডোপামিন, নরএপিনেফ্রিন ও সেরোটোনিন সংশ্লেষণ ব্যাপকভাবে বাধাগ্রস্ত হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Indoleamines, Histamine, The GABA Shunt & Nitric Oxide', 'ইনডোলঅ্যামিন, হিস্টামিন, GABA শান্ট ও নাইট্রিক অক্সাইড'),
          paragraphs: [
            l(
              'L-Tryptophan is the obligate precursor for serotonin (5-hydroxytryptamine, 5-HT) and melatonin. Rate-limiting tryptophan hydroxylase (TPH1 in gut enterochromaffin cells, TPH2 in brain raphe nuclei) utilizes BH4 to generate 5-hydroxytryptophan (5-HTP), decarboxylated by AADC to serotonin. In the pineal gland, serotonin undergoes diurnal N-acetylation by aralkylamine N-acetyltransferase (AANAT, the circadian rate-limiting step) and O-methylation by ASMT using SAM to produce melatonin.',
              'এল-ট্রিপটোফ্যান হলো সেরোটোনিন ও মেলাটোনিনের একমাত্র পূর্বসূরি। গতি-নিয়ন্ত্রক ট্রিপটোফ্যান হাইড্রোক্সিলেজ (TPH1 অন্ত্রে এবং TPH2 মস্তিষ্কে) BH4 ব্যবহার করে ৫-HTP তৈরি করে, যা পরে সেরোটোনিনে পরিণত হয়। পিনিয়াল গ্রন্থিতে সেরোটোনিন দিবা-রাত্রি ছন্দ অনুসারে এসিটাইলেশন ও SAM দ্বারা মিথাইলেশনের মাধ্যমে ঘুম নিয়ন্ত্রণকারী হরমোন মেলাটোনিনে রূপান্তরিত হয়।'
            ),
            l(
              'Nitric oxide synthases (eNOS, nNOS, iNOS) convert L-arginine into L-citrulline and the radical gas nitric oxide (NO•). The homodimeric enzyme transfers electrons from NADPH via flavins (FAD, FMN) to an oxygenase heme, requiring BH4 for coupling. The uncoupling of eNOS in cardiovascular disease diverts electrons to molecular oxygen, generating cytotoxic superoxide (O2•-) rather than vasodilatory NO, promoting endothelial dysfunction.',
              'নাইট্রিক অক্সাইড সিন্থেস এনজাইম এল-আরজিনিনকে এল-সিট্রোলিন এবং বায়বীয় নাইট্রিক অক্সাইডে (NO) রূপান্তরিত করে। এই জটিল এনজাইমে ইলেকট্রন NADPH থেকে ফ্ল্যাভিনের মাধ্যমে হিমে প্রবাহিত হয়, যার জন্য BH4 কাপলিং প্রয়োজন। হৃদরোগে BH4 নষ্ট হয়ে গেলে eNOS নাইট্রিক অক্সাইডের বদলে ক্ষতিকর সুপারঅক্সাইড তৈরি করে রক্তনালীর মারাত্মক প্রদাহ সৃষ্টি করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Molecular Neuropharmacology: Transporters & Inborn Catabolic Defects', 'আণবিক স্নায়ুফার্মাকোলজি: পরিবাহক ও জন্মগত বিপাকীয় ত্রুটি'),
          paragraphs: [
            l(
              'Synaptic neurotransmission is terminated by high-affinity reuptake transporters powered by Na+/Cl- electrochemical gradients (DAT for dopamine, NET for norepinephrine, SERT for serotonin). Pharmacological blockade of SERT by Selective Serotonin Reuptake Inhibitors (SSRIs) elevates synaptic serotonin dwell time, remediating major depressive disorder, while psychostimulants (cocaine, methylphenidate) inhibit DAT, augmenting reward signaling in the nucleus accumbens.',
              'স্নায়ু সংকেত সমাপ্ত হয় সোডিয়াম ও ক্লোরাইড চালিত বিশেষ পুনঃশোষণ বাহকের মাধ্যমে (DAT, NET, SERT)। SSRI শ্রেণীর অ্যান্টিডিপ্রেসেন্ট ওষুধগুলো SERT-কে বন্ধ করে স্নায়ু সংযোগস্থলে সেরোটোনিনের স্থায়িত্ব বাড়িয়ে বিষণ্নতা দূর করে; অন্যদিকে কোকেন ও মিথাইলফেনিডেট DAT-কে বন্ধ করে ডোপামিনের মাত্রা অস্বাভাবিক বৃদ্ধি করে আনন্দ অনুভূতি বাড়ায়।'
            ),
            l(
              'Monoamine catabolism is driven sequentially by monoamine oxidases (MAO-A and MAO-B, localized to the outer mitochondrial membrane) and catechol-O-methyltransferase (COMT). MAO generates reactive hydrogen peroxide and aldehydes (DOPAL, DOPEGAL), while COMT transfers a methyl group from SAM. Irreversible MAO inhibitors require strict dietary tyramine restriction to prevent the life-threatening hypertensive "cheese reaction", caused by massive tyramine-induced norepinephrine displacement.',
              'ক্যাটাকোলামিন ভাঙার কাজ করে মাইটোকন্ড্রিয়ার বাইরের ঝিল্লির মনোঅ্যামিন অক্সিডেজ (MAO-A/B) এবং COMT। MAO এনজাইম হাইড্রোজেন পারঅক্সাইড ও ক্ষতিকর অ্যালডিহাইড তৈরি করে। পুরোনো MAO ইনহিবিটর ওষুধ খাওয়া রোগীদের পনির ও গাঁজানো খাবার (টাইরামিনযুক্ত) পরিহার করতে হয়, নতুবা টাইরামিন জমে তীব্র প্রাণঘাতী উচ্চ রক্তচাপের "চিজ রিঅ্যাকশন" দেখা দেয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Frontiers in Neurochemical Medicine & Clinical Takeaways', 'স্নায়ুরসায়ন চিকিৎসার ভবিষ্যৎ দিগন্ত ও প্রধান শিক্ষা'),
          paragraphs: [
            l(
              'Understanding the metabolic wiring of specialized amines has revolutionized modern neurology and cardiovascular therapeutics. From the clinical synergy of L-DOPA with peripheral decarboxylase inhibitors in Parkinson’s disease to organic nitrates and phosphodiesterase-5 inhibitors enhancing the nitric oxide-cGMP cascade, modulating amino acid derivatives remains a primary foundation of translational pharmacology.',
              'বিশেষ অ্যামিনগুলোর বিপাকীয় গতিপথ বোঝা আধুনিক নিউরোলজি ও কার্ডিওভাসকুলার চিকিৎসায় যুগান্তকারী বিপ্লব এনেছে। পারকিনসন্স রোগে কার্বিডোপার সাথে এল-ডোপার সফল প্রয়োগ থেকে শুরু করে রক্তনালীতে নাইট্রিক অক্সাইড-cGMP অক্ষকে শক্তিশালী করার ওষুধ পর্যন্ত, অ্যামিনো অ্যাসিডের রূপান্তর নিয়ন্ত্রণ আধুনিক ফার্মাকোলজির অন্যতম মূল ভিত্তি।'
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
          heading: l('Structural Biology of Dopaminergic Transmission & Synthetic Pharmacology', 'ডোপামিনার্জিক সংকেতের গাঠনিক জীববিজ্ঞান ও সিন্থেটিক ফার্মাকোলজি'),
          paragraphs: [
            l(
              'High-resolution cryo-electron microscopy of the human dopamine transporter (DAT) and vesicular monoamine transporter 2 (VMAT2) has elucidated the atomic mechanisms of monoamine transport and drug recognition. VMAT2 functions as an alternating-access antiporter, coupling the exit of two lumenal protons to the influx of one protonated cytosolic monoamine substrate.',
              'উচ্চ-রেজোলিউশন ক্রায়ো-ইলেক্ট্রন মাইক্রোস্কোপির সাহায্যে ডোপামিন ট্রান্সপোর্টার (DAT) এবং ভেসিকুলার ট্রান্সপোর্টার (VMAT2) এর পারমাণবিক গঠন ও ওষুধ সংযুক্তি উদঘাটিত হয়েছে। VMAT2 বাহক ভেসিকলের দুটি প্রোটন বের করে দেওয়ার বিনিময়ে সাইটোপ্লাজম থেকে একটি ডোপামিন অণু ভেতরে টেনে নেয়।'
            ),
            l(
              'Novel allosteric modulators of VMAT2, such as valbenazine and deutetrabenazine, selectively downregulate vesicular monoamine packaging in striatal interneurons, effectively treating tardive dyskinesia and Huntington chorea without inducing off-target sedation or refractory peripheral hypotension.',
              'VMAT2 বাহকের আধুনিক ওষুধ ভ্যালবেনাজিন ও ডিউটেট্রাবেনাজিন অতিরিক্ত নড়াচড়া ও হান্টিংটন কোরিয়া রোগের চিকিৎসায় চমৎকার কাজ করে এবং শরীরের কোনো পার্শ্বপ্রতিক্রিয়া না ঘটিয়ে স্নায়ুর ভারসাম্য রক্ষা করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Biochemical Therapeutics in Translational Neurogenetics', 'অনুবাদী স্নায়ু-বংশগতিবিদ্যায় জৈব-রাসায়নিক চিকিৎসা'),
          paragraphs: [
            l(
              'Targeted gene therapy using adeno-associated viral (AAV) vectors encoding human aromatic L-amino acid decarboxylase (AAV2-hAADC) directly infused into the putamen has restored motor function in pediatric patients with congenital AADC deficiency and advanced Parkinsonian motor fluctuations, converting exogenous L-DOPA directly at the striatal target.',
              'জিন থেরাপির মাধ্যমে AAV ভাইরাসের সাহায্যে মানব AADC জিন সরাসরি মস্তিষ্কের পুটামেনে প্রবেশ করিয়ে জন্মগত AADC ঘাটতিযুক্ত শিশুদের স্বাভাবিক চলনক্ষমতা ফিরিয়ে দেওয়া সম্ভব হয়েছে, যা আধুনিক চিকিৎসা বিজ্ঞানের এক অনন্য যুগান্তকারী সাফল্য।'
            ),
          ],
        },
      ],
    },
  },
}
