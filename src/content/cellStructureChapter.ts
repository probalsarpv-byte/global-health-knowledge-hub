import type { LessonSection, LessonTopic, Localized } from './lessonSchema'

const openStaxCells = {
  id: 'openstax-biology-2e-4-3', authors: 'Mary Ann Clark, Matthew Douglas, Jung Choi',
  title: 'Biology 2e, section 4.3: Eukaryotic Cells', organization: 'OpenStax, Rice University', year: 2018,
  url: 'https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells',
}
const openStaxMembrane = {
  id: 'openstax-biology-2e-ch5', authors: 'Mary Ann Clark, Matthew Douglas, Jung Choi',
  title: 'Biology 2e, Chapter 5: Structure and Function of Plasma Membranes', organization: 'OpenStax, Rice University', year: 2018,
  url: 'https://openstax.org/books/biology-2e/pages/5-introduction',
}
const openStaxCytoskeleton = {
  id: 'openstax-biology-2e-4-5', authors: 'Mary Ann Clark, Matthew Douglas, Jung Choi',
  title: 'Biology 2e, section 4.5: The Cytoskeleton', organization: 'OpenStax, Rice University', year: 2018,
  url: 'https://openstax.org/books/biology-2e/pages/4-5-the-cytoskeleton',
}
const openStaxCycle = {
  id: 'openstax-biology-2e-10-2', authors: 'Mary Ann Clark, Matthew Douglas, Jung Choi',
  title: 'Biology 2e, section 10.2: The Cell Cycle', organization: 'OpenStax, Rice University', year: 2018,
  url: 'https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle',
}
const compartmentalization = {
  id: 'alberts-mbc4-12', authors: 'Alberts B, Johnson A, Lewis J, et al.',
  title: 'Molecular Biology of the Cell, 4th ed., chapter 12: The Compartmentalization of Cells', organization: 'NCBI Bookshelf / Garland Science', year: 2002,
  url: 'https://www.ncbi.nlm.nih.gov/books/NBK26907/',
}
const proteinSorting = {
  id: 'cooper-cell-2-9', authors: 'Cooper GM',
  title: 'The Cell: A Molecular Approach, 2nd ed., chapter 9: Protein Sorting and Transport', organization: 'NCBI Bookshelf / Sinauer Associates', year: 2000,
  url: 'https://www.ncbi.nlm.nih.gov/books/NBK9897/',
}
const er = {
  id: 'cooper-cell-2-9-er', authors: 'Cooper GM',
  title: 'The Cell: A Molecular Approach, 2nd ed., chapter 9: The Endoplasmic Reticulum', organization: 'NCBI Bookshelf / Sinauer Associates', year: 2000,
  url: 'https://www.ncbi.nlm.nih.gov/books/NBK9889/',
}

const l = (en: string, bn: string): Localized => ({ en, bn })
const section = (id: string, heading: Localized, paragraphs: Localized[], bullets?: Localized[]): LessonSection => ({ id, heading, paragraphs, bullets })

const content = {
  introduction: {
    heading: l('Cellular organization: a bounded, dynamic system', 'কোষীয় সংগঠন: একটি সীমানাবদ্ধ, গতিশীল ব্যবস্থা'),
    foundation: l(
      'A eukaryotic cell is a living system whose boundary, internal compartments and molecular machines cooperate rather than operate as isolated parts. The plasma membrane controls exchange with the extracellular fluid; the cytosol supports many reactions; membrane-bound organelles concentrate enzymes and substrates. Size, shape and organelle abundance vary with cell specialization, so an “animal cell” diagram is a teaching model, not a universal template.',
      'ইউক্যারিওটিক কোষ এমন একটি জীবন্ত ব্যবস্থা যেখানে সীমানা, অভ্যন্তরীণ প্রকোষ্ঠ এবং অণবিক যন্ত্র একসঙ্গে কাজ করে; এগুলো বিচ্ছিন্ন অংশ নয়। প্লাজমা ঝিল্লি বহিঃকোষীয় তরলের সঙ্গে পদার্থের আদান-প্রদান নিয়ন্ত্রণ করে, সাইটোসোলে বহু বিক্রিয়া ঘটে এবং ঝিল্লিবেষ্টিত অঙ্গাণু এনজাইম ও সাবস্ট্রেটকে নির্দিষ্ট পরিবেশে একত্র করে। কোষের বিশেষায়ন অনুযায়ী আকার, আকৃতি ও অঙ্গাণুর পরিমাণ বদলায়; তাই “প্রাণী কোষের” চিত্র একটি শিক্ষামূলক মডেল, সর্বজনীন নকশা নয়।',
    ),
    academic: l(
      'Compartmentation creates local chemical conditions: pH, ion composition, redox state and macromolecular crowding can differ between cytosol, organelle lumen and mitochondrial matrix. Protein sorting signals and vesicle trafficking maintain these differences while cytoskeletal tracks organize movement. Cellular physiology therefore emerges from controlled fluxes of matter, energy and information across boundaries, not from organelles acting independently.',
      'প্রকোষ্ঠীকরণ স্থানীয় রাসায়নিক পরিবেশ তৈরি করে: সাইটোসোল, অঙ্গাণুর লুমেন এবং মাইটোকন্ড্রিয়ার ম্যাট্রিক্সে pH, আয়ন-সংগঠন, রেডক্স অবস্থা ও অণবিক ঘনত্ব ভিন্ন হতে পারে। প্রোটিন-সোর্টিং সিগন্যাল ও ভেসিকল পরিবহন এই পার্থক্য বজায় রাখে, আর সাইটোস্কেলেটনের ট্র্যাক পদার্থের চলাচল সংগঠিত করে। তাই কোষীয় শারীরবৃত্ত অঙ্গাণুর আলাদা কাজের যোগফল নয়; এটি সীমানা পেরিয়ে পদার্থ, শক্তি ও তথ্যের নিয়ন্ত্রিত প্রবাহ থেকে উদ্ভূত।',
    ),
    advanced: l(
      'At research level, the cell is best treated as a spatially structured, non-equilibrium network. Molecular crowding, phase-separated condensates, organelle contact sites and transient assemblies alter reaction rates and communication without requiring every process to be enclosed by a membrane. Experimental observations also depend on scale and method: fluorescence localization, biochemical fractionation and electron microscopy answer different questions and can produce different apparent views of the same cell.',
      'গবেষণা-স্তরে কোষকে স্থানিকভাবে সংগঠিত, সাম্যাবস্থার বাইরে থাকা একটি নেটওয়ার্ক হিসেবে দেখা অধিক উপযোগী। অণবিক ঘনত্ব, phase separation, অঙ্গাণুর contact site এবং ক্ষণস্থায়ী সমাবেশ ঝিল্লি ছাড়াও বিক্রিয়ার হার ও সংকেত-বিনিময় বদলাতে পারে। পর্যবেক্ষণের ফল পদ্ধতি ও স্কেলের ওপরও নির্ভরশীল: fluorescence localization, biochemical fractionation এবং electron microscopy একই কোষ সম্পর্কে ভিন্ন প্রশ্নের উত্তর দেয় এবং একই কোষের ভিন্ন আপাত চিত্র দিতে পারে।',
    ),
  },
  membrane: {
    heading: l('Plasma membrane: selective boundary and information interface', 'প্লাজমা ঝিল্লি: নির্বাচনী সীমানা ও তথ্য-ইন্টারফেস'),
    foundation: l(
      'Phospholipids arrange into a bilayer because their hydrophilic heads interact with water while hydrophobic tails avoid it. Cholesterol tunes packing and fluidity; proteins form channels, carriers, pumps, receptors and adhesion molecules; carbohydrate chains on glycoproteins and glycolipids contribute to cell recognition. The membrane is selectively permeable, not an absolute wall: small non-polar molecules cross more readily than ions or large polar solutes.',
      'ফসফোলিপিডের জলপ্রিয় মাথা জলের সঙ্গে এবং জলবিমুখ লেজ একে অপরের দিকে মুখ করায় দ্বিস্তর তৈরি হয়। কোলেস্টেরল প্যাকিং ও তরলতা সামঞ্জস্য করে; প্রোটিন চ্যানেল, বাহক, পাম্প, রিসেপ্টর ও সংযুক্তি-অণু হিসেবে কাজ করে; গ্লাইকোপ্রোটিন ও গ্লাইকোলিপিডের কার্বোহাইড্রেট শৃঙ্খল কোষ-পরিচয়ে সাহায্য করে। ঝিল্লি নির্বাচনীভাবে ভেদ্য, সম্পূর্ণ প্রাচীর নয়: ছোট অমেরু অণু আয়ন বা বড় মেরু দ্রবণের তুলনায় সহজে পার হয়।',
    ),
    academic: l(
      'Membrane transport is determined by both a concentration gradient and an electrical gradient. A channel provides a hydrophilic path; a carrier alternates access between sides of the bilayer; an ATP-driven pump changes conformation to move solute against its electrochemical gradient. Membrane asymmetry is actively maintained: lipid composition, protein orientation and extracellular glycans are not random, and vesicle fusion preserves or remodels this organization.',
      'ঝিল্লি পরিবহন ঘনত্ব-ঢাল ও বৈদ্যুতিক-ঢাল—দুটির ওপর নির্ভর করে। চ্যানেল জলপ্রিয় পথ দেয়; carrier দ্বিস্তরের দুই পাশের দিকে পালাক্রমে প্রবেশাধিকার দেয়; ATP-চালিত pump গঠন বদলে দ্রব্যকে তড়িৎ-রাসায়নিক ঢালের বিপরীতে সরায়। ঝিল্লির অসমতা সক্রিয়ভাবে বজায় থাকে: লিপিড-সংগঠন, প্রোটিনের দিকনির্দেশ এবং বহিঃকোষীয় glycan এলোমেলো নয়; ভেসিকল fusion এই সংগঠন সংরক্ষণ বা পুনর্গঠন করে।',
    ),
    advanced: l(
      'The membrane behaves as a two-dimensional fluid constrained by cytoskeletal corrals, lipid domains and protein interactions. Receptor clustering can change signal amplitude; curvature and membrane tension influence budding and fusion; phosphoinositides recruit effectors to specific surfaces. These principles explain why the same ligand can produce different responses in different cells: receptor abundance, adaptor proteins, membrane composition and downstream feedback all alter the input–output relationship.',
      'ঝিল্লি সাইটোস্কেলেটনের সীমা, lipid domain এবং প্রোটিনের পারস্পরিক ক্রিয়ায় নিয়ন্ত্রিত একটি দ্বিমাত্রিক তরল হিসেবে আচরণ করে। রিসেপ্টর cluster হলে সংকেতের মাত্রা বদলাতে পারে; curvature ও membrane tension budding ও fusion-এ প্রভাব ফেলে; phosphoinositide নির্দিষ্ট পৃষ্ঠে effector আনে। তাই একই ligand ভিন্ন কোষে ভিন্ন প্রতিক্রিয়া সৃষ্টি করতে পারে: রিসেপ্টরের পরিমাণ, adaptor protein, ঝিল্লির গঠন এবং downstream feedback input–output সম্পর্ক বদলে দেয়।',
    ),
  },
  transport: {
    heading: l('Transport mechanisms: gradients, pumps and vesicles', 'পরিবহন প্রক্রিয়া: ঢাল, পাম্প ও ভেসিকল'),
    foundation: l(
      'Simple diffusion moves a substance down its gradient without a membrane protein. Facilitated diffusion uses a channel or carrier but still moves down an electrochemical gradient. Primary active transport uses ATP directly, while secondary active transport couples one downhill movement to another uphill movement. Endocytosis bends the membrane inward to form a vesicle; exocytosis fuses a vesicle with the membrane to release cargo.',
      'Simple diffusion-এ কোনো ঝিল্লি-প্রোটিন ছাড়াই দ্রব্য নিজের ঢালের দিকে যায়। Facilitated diffusion-এ channel বা carrier লাগে, কিন্তু তবুও তড়িৎ-রাসায়নিক ঢালের দিকে চলে। Primary active transport সরাসরি ATP ব্যবহার করে, আর secondary active transport একটি নিচের দিকে চলা প্রবাহকে ব্যবহার করে অন্য দ্রব্যকে উপরের দিকে সরায়। Endocytosis-এ ঝিল্লি ভেতরের দিকে বেঁকে vesicle তৈরি করে; exocytosis-এ vesicle ঝিল্লির সঙ্গে মিশে cargo বাইরে ছাড়ে।',
    ),
    academic: l(
      'Consider the Na+/K+-ATPase: each cycle hydrolyses ATP, exports three Na+ and imports two K+ through sequential conformational states. The resulting gradients provide electrical and chemical energy for nutrient cotransport, membrane potential and volume regulation. Receptor-mediated endocytosis adds specificity: ligand binding concentrates cargo in coated pits, scission produces a vesicle, and endosomal sorting decides recycling, degradation or transcytosis. Direction is a biochemical consequence of topology and energy, not merely an arrow on a diagram.',
      'Na+/K+-ATPase বিবেচনা করুন: প্রতিটি cycle-এ ATP hydrolysis করে ধারাবাহিক গঠনগত অবস্থার মাধ্যমে তিনটি Na+ বাইরে ও দুটি K+ ভেতরে আনে। এই ঢাল nutrient cotransport, membrane potential ও কোষের আয়তন নিয়ন্ত্রণে বৈদ্যুতিক ও রাসায়নিক শক্তি দেয়। Receptor-mediated endocytosis-এ ligand binding coated pit-এ cargo ঘনীভূত করে, scission vesicle তৈরি করে এবং endosome sorting পুনর্ব্যবহার, degradation বা transcytosis নির্ধারণ করে। দিকনির্দেশ topology ও শক্তির ফল, চিত্রের তীরমাত্র নয়।',
    ),
    advanced: l(
      'Transport can be analyzed as coupled flux. The electrochemical potential of an ion combines concentration and voltage terms; a pump can maintain a gradient even while leak pathways dissipate it. Vesicle trafficking adds molecular checkpoints: coat assembly selects cargo and curves membrane, Rab GTPases and tethering factors specify a target, and SNARE pairing drives fusion. These mechanisms are dynamic and probabilistic, so cellular transport is a regulated throughput rather than a single fixed route.',
      'পরিবহনকে coupled flux হিসেবে বিশ্লেষণ করা যায়। কোনো আয়নের তড়িৎ-রাসায়নিক potential-এ ঘনত্ব ও voltage—দুই term থাকে; leak pathway ঢাল ক্ষয় করলেও pump তা বজায় রাখতে পারে। ভেসিকল trafficking-এ molecular checkpoint থাকে: coat cargo বেছে ঝিল্লি বাঁকায়, Rab GTPase ও tethering factor target নির্দিষ্ট করে এবং SNARE pairing fusion চালায়। এসব প্রক্রিয়া গতিশীল ও সম্ভাবনাভিত্তিক; তাই কোষীয় পরিবহন একটিমাত্র স্থির পথ নয়, নিয়ন্ত্রিত throughput।',
    ),
  },
  nucleus: {
    heading: l('Nucleus, DNA organization and gene expression', 'নিউক্লিয়াস, DNA-র সংগঠন ও gene expression'),
    foundation: l(
      'The nucleus stores most of a eukaryotic cell’s genome inside a double membrane called the nuclear envelope. Nuclear pore complexes regulate traffic: proteins enter with transport signals, while RNA and ribosomal subunits exit through controlled pathways. DNA is not loose string; it is wrapped around histones into nucleosomes, folded into chromatin and organized so genes can be accessed without losing the genome’s continuity.',
      'নিউক্লিয়াস ইউক্যারিওটিক কোষের অধিকাংশ genome nuclear envelope নামের দ্বিস্তর ঝিল্লির ভেতর রাখে। Nuclear pore complex traffic নিয়ন্ত্রণ করে: transport signal-যুক্ত protein ভেতরে ঢোকে এবং RNA ও ribosomal subunit নিয়ন্ত্রিত পথে বের হয়। DNA আলগা সুতো নয়; এটি histone-এর চারদিকে nucleosome হিসেবে প্যাঁচানো, chromatin-এ ভাঁজ করা এবং এমনভাবে সংগঠিত যাতে genome অক্ষুণ্ণ রেখেও প্রয়োজনীয় gene-এ প্রবেশ করা যায়।',
    ),
    academic: l(
      'A gene is expressed through linked steps: transcription factors and chromatin state influence initiation; RNA polymerase synthesizes a primary transcript; capping, splicing and polyadenylation produce a mature mRNA; export delivers it to ribosomes; translation converts codons into a polypeptide. The nucleolus concentrates rRNA transcription and ribosomal subunit assembly. Nuclear import and export therefore connect genome regulation to cytosolic protein synthesis.',
      'Gene expression ধারাবাহিক ধাপে ঘটে: transcription factor ও chromatin state initiation প্রভাবিত করে; RNA polymerase primary transcript তৈরি করে; capping, splicing ও polyadenylation mature mRNA বানায়; export সেটিকে ribosome-এর কাছে পৌঁছায়; translation codon-কে polypeptide-এ রূপান্তর করে। Nucleolus rRNA transcription ও ribosomal subunit assembly ঘনীভূত করে। ফলে nuclear import–export genome regulation-কে cytosolic protein synthesis-এর সঙ্গে যুক্ত করে।',
    ),
    advanced: l(
      'Chromatin regulation is combinatorial rather than a simple on/off switch. Nucleosome positioning, histone modifications, DNA methylation, enhancer–promoter contacts and three-dimensional genome domains can alter transcriptional probability. DNA replication must preserve both sequence information and chromatin context; DNA damage responses pause the cycle, recruit repair factors and, if damage remains unsafe, can promote senescence or programmed cell death. These are general mechanisms, not a diagnostic explanation for any individual disease.',
      'Chromatin regulation কেবল on/off switch নয়; এটি সমন্বিত বহু উপাদানের ফল। Nucleosome positioning, histone modification, DNA methylation, enhancer–promoter contact এবং genome-এর ত্রিমাত্রিক domain transcription-এর সম্ভাবনা বদলাতে পারে। DNA replication-এ sequence information ও chromatin context দুটোই সংরক্ষণ করতে হয়; DNA damage response cycle থামায়, repair factor আনে এবং ক্ষতি নিরাপদে সারানো না গেলে senescence বা programmed cell death ঘটাতে পারে। এগুলো সাধারণ mechanism, কোনো ব্যক্তির রোগ নির্ণয়ের ব্যাখ্যা নয়।',
    ),
  },
  endomembrane: {
    heading: l('Ribosomes, ER, Golgi, lysosomes and peroxisomes', 'Ribosome, ER, Golgi, lysosome ও peroxisome'),
    foundation: l(
      'Ribosomes read mRNA and join amino acids into protein. Free ribosomes usually make proteins that remain in the cytosol or are imported after synthesis; ribosomes recruited to rough ER make proteins entering the secretory pathway. The ER folds proteins and makes lipids; the Golgi modifies and sorts cargo; lysosomes digest material in an acidic lumen; peroxisomes support fatty-acid oxidation and peroxide handling.',
      'Ribosome mRNA পড়ে amino acid জুড়ে protein তৈরি করে। Free ribosome সাধারণত cytosol-এ থাকা বা synthesis-এর পরে import হওয়া protein বানায়; rough ER-এ যুক্ত ribosome secretory pathway-এ প্রবেশকারী protein বানায়। ER protein folding ও lipid synthesis করে; Golgi cargo modify ও sort করে; lysosome অম্লীয় lumen-এ পদার্থ ভাঙে; peroxisome fatty-acid oxidation ও peroxide নিয়ন্ত্রণে সাহায্য করে।',
    ),
    academic: l(
      'For a secreted protein, translation begins in the cytosol until a signal sequence is recognized by the signal-recognition particle. The ribosome docks at the ER translocon, and the growing chain enters the ER lumen while translation continues. Chaperones assist folding and quality control retains or disposes of misfolded proteins. COPII-dependent export carries selected cargo toward the Golgi; cis-to-trans Golgi processing and sorting then direct cargo to the surface, lysosome or another destination. COPI-mediated retrieval returns resident components.',
      'নিঃসৃত protein-এর translation cytosol-এ শুরু হয়; signal sequence চিনে signal-recognition particle। Ribosome ER translocon-এ dock করলে translation চলার সময়ই বাড়তে থাকা chain ER lumen-এ ঢোকে। Chaperone folding-এ সাহায্য করে এবং quality control ভুল-folded protein আটকে বা সরিয়ে দেয়। COPII-নির্ভর export নির্বাচিত cargo Golgi-র দিকে বহন করে; cis-to-trans Golgi processing ও sorting cargo-কে surface, lysosome বা অন্য গন্তব্যে পাঠায়। COPI-mediated retrieval resident উপাদান ফিরিয়ে আনে।',
    ),
    advanced: l(
      'Organelle identity is maintained by selective retention, retrieval and maturation, not by an immobile boundary. The ER–Golgi system uses coat proteins, Rab GTPases, tethering complexes and SNAREs to make trafficking directional while allowing recycling. Lysosomal enzymes are sorted through receptor-dependent signals and become active in an acidic compartment. Peroxisomal matrix proteins can be imported after folding through targeting signals, illustrating that protein import mechanisms differ among organelles and cannot be reduced to one universal route.',
      'অঙ্গাণুর identity স্থির প্রাচীর দিয়ে নয়; selective retention, retrieval ও maturation দিয়ে বজায় থাকে। ER–Golgi system coat protein, Rab GTPase, tethering complex ও SNARE ব্যবহার করে recycling-এর সুযোগ রেখেও traffic-কে দিকনির্দেশ দেয়। Lysosomal enzyme receptor-dependent signal দিয়ে sort হয় এবং অম্লীয় compartment-এ সক্রিয় হয়। Peroxisomal matrix protein folding-এর পর targeting signal-এর মাধ্যমে import হতে পারে; এতে বোঝা যায় অঙ্গাণুভেদে protein import mechanism আলাদা, একক universal route নয়।',
    ),
  },
  energy: {
    heading: l('Mitochondria and cellular energy metabolism', 'Mitochondria ও কোষীয় energy metabolism'),
    foundation: l(
      'Mitochondria have an outer membrane, an intermembrane space, an inner membrane and a matrix. Glycolysis occurs in the cytosol and produces pyruvate; mitochondrial pathways can convert carbon to acetyl-CoA, release carbon dioxide through the citric-acid cycle and transfer electrons to NADH and FADH2. The respiratory chain uses electron-transfer energy to build a proton gradient, and ATP synthase uses that gradient to make ATP.',
      'Mitochondria-র outer membrane, intermembrane space, inner membrane ও matrix আছে। Glycolysis cytosol-এ ঘটে ও pyruvate তৈরি করে; mitochondrial pathway carbon-কে acetyl-CoA-তে রূপান্তর করতে পারে, citric-acid cycle-এ carbon dioxide ছাড়ে এবং electron-কে NADH ও FADH2-তে স্থানান্তর করে। Respiratory chain electron-transfer-এর শক্তি দিয়ে proton gradient তৈরি করে, আর ATP synthase সেই gradient ব্যবহার করে ATP বানায়।',
    ),
    academic: l(
      'The inner membrane is highly selective, so proton movement through ATP synthase is coupled to phosphorylation rather than free equilibration. Oxygen accepts electrons at the end of the respiratory chain and is reduced to water; this does not mean every oxygen-related reaction is harmless, because electron leakage can produce reactive oxygen species that require antioxidant and repair systems. Mitochondria also participate in calcium handling, apoptosis signaling and biosynthetic precursor supply, so “powerhouse” is an incomplete description.',
      'Inner membrane অত্যন্ত নির্বাচনী; তাই ATP synthase দিয়ে proton চলাচল free equilibration নয়, phosphorylation-এর সঙ্গে coupled। Respiratory chain-এর শেষে oxygen electron গ্রহণ করে water-এ reduced হয়; তবে oxygen-সম্পর্কিত সব reaction নিরাপদ নয়, কারণ electron leakage reactive oxygen species তৈরি করতে পারে এবং antioxidant ও repair system দরকার হয়। Mitochondria calcium handling, apoptosis signaling ও biosynthetic precursor supply-তেও অংশ নেয়; তাই একে শুধু “powerhouse” বলা অসম্পূর্ণ।',
    ),
    advanced: l(
      'Energy metabolism is a network of redox transfers, membrane potentials and substrate choices. Cytosolic NADH reaches mitochondria through shuttle systems rather than crossing the inner membrane freely; respiratory control depends on ADP availability, substrate oxidation, proton leak and tissue context. Mitochondria communicate with ER at contact sites, exchange lipids and calcium, and remodel through fission, fusion and selective removal. These dynamics are mechanistic links, not evidence that a single nutrient or supplement determines whole-body health.',
      'Energy metabolism redox transfer, membrane potential ও substrate choice-এর network। Cytosolic NADH inner membrane পেরিয়ে সরাসরি যায় না; shuttle system দিয়ে reducing equivalent পৌঁছায়। Respiratory control ADP availability, substrate oxidation, proton leak ও tissue context-এর ওপর নির্ভর করে। Mitochondria ER-এর contact site-এ calcium ও lipid আদান-প্রদান করে এবং fission, fusion ও selective removal দিয়ে নিজেকে বদলায়। এগুলো mechanistic link; কোনো একক nutrient বা supplement সমগ্র শরীরের স্বাস্থ্য নির্ধারণ করে—এমন প্রমাণ নয়।',
    ),
  },
  recycling: {
    heading: l('Lysosomes, peroxisomes and cellular quality control', 'Lysosome, peroxisome ও কোষীয় quality control'),
    foundation: l(
      'Lysosomes contain acid-activated hydrolases that break down proteins, nucleic acids, lipids and carbohydrates delivered by endocytosis, phagocytosis or autophagy. Their membrane keeps the enzymes separated from the cytosol and transporters return useful small molecules. Peroxisomes contain oxidative enzymes; catalase and related systems help handle hydrogen peroxide. Both organelles support recycling, but they are not interchangeable digestive bags.',
      'Lysosome-এ acid-activated hydrolase থাকে, যা endocytosis, phagocytosis বা autophagy-তে আসা protein, nucleic acid, lipid ও carbohydrate ভাঙে। এর membrane enzyme-কে cytosol থেকে আলাদা রাখে এবং transporter দরকারি ছোট molecule ফিরিয়ে দেয়। Peroxisome-এ oxidative enzyme থাকে; catalase ও সংশ্লিষ্ট system hydrogen peroxide নিয়ন্ত্রণে সাহায্য করে। দুটিই recycling-এ কাজ করে, কিন্তু একে অপরের বদলি সাধারণ digestive bag নয়।',
    ),
    academic: l(
      'Autophagy begins when a regulated membrane sequesters cytoplasmic material into an autophagosome. Fusion with a lysosome exposes cargo to hydrolases, and products such as amino acids can return to metabolism. Endosomal maturation similarly changes identity before fusion or recycling. Peroxisomal beta-oxidation is especially important for particular long-chain fatty acids and produces peroxide as a chemical consequence; oxidation and detoxification must be coordinated. These pathways help cells adapt to nutrient change and damage but do not by themselves diagnose nutritional deficiency.',
      'Autophagy-তে নিয়ন্ত্রিত membrane cytoplasmic material-কে autophagosome-এ আবদ্ধ করে। Lysosome-এর সঙ্গে fusion হলে cargo hydrolase-এর সংস্পর্শে আসে এবং amino acid-এর মতো product metabolism-এ ফিরতে পারে। একইভাবে endosome maturation-এর সঙ্গে identity বদলে fusion বা recycling হয়। Peroxisomal beta-oxidation নির্দিষ্ট long-chain fatty acid-এ গুরুত্বপূর্ণ এবং রাসায়নিক ফল হিসেবে peroxide তৈরি করে; oxidation ও detoxification সমন্বিত হতে হয়। এই pathway nutrient change ও damage-এ অভিযোজনে সাহায্য করে, কিন্তু একা nutritional deficiency নির্ণয় করে না।',
    ),
    advanced: l(
      'Quality control is distributed across proteasomes, ER-associated degradation, lysosomes and selective autophagy. Ubiquitin tagging can route a protein to the proteasome, while membrane cargo can be delivered to lysosomes through endosomal or autophagic routes. Organelle turnover changes with energy state, stress and differentiation. A clinical phenotype can arise from defects in trafficking, enzyme targeting, acidification or organelle biogenesis, but interpreting such disease mechanisms requires the specific gene, tissue and validated clinical evidence.',
      'Quality control proteasome, ER-associated degradation, lysosome ও selective autophagy-তে বিভক্ত। Ubiquitin tagging protein-কে proteasome-এ পাঠাতে পারে, আর membrane cargo endosomal বা autophagic route-এ lysosome-এ পৌঁছায়। Energy state, stress ও differentiation অনুযায়ী organelle turnover বদলায়। Trafficking, enzyme targeting, acidification বা organelle biogenesis-এর ত্রুটিতে clinical phenotype হতে পারে; তবে রোগ-প্রক্রিয়া ব্যাখ্যার জন্য নির্দিষ্ট gene, tissue ও validated clinical evidence দরকার।',
    ),
  },
  cytoskeleton: {
    heading: l('Cytoskeleton: shape, force and intracellular movement', 'Cytoskeleton: আকৃতি, বল ও অন্তঃকোষীয় চলাচল'),
    foundation: l(
      'Actin filaments, intermediate filaments and microtubules form a dynamic support network. Actin helps shape the cortex and cell edge; intermediate filaments resist mechanical stress; microtubules organize long-range trafficking and the mitotic spindle. Motor proteins convert ATP hydrolysis into movement along cytoskeletal tracks, allowing vesicles and organelles to be positioned rather than simply floating.',
      'Actin filament, intermediate filament ও microtubule মিলে গতিশীল support network তৈরি করে। Actin cortex ও cell edge-এর আকৃতি দিতে সাহায্য করে; intermediate filament যান্ত্রিক চাপ সহ্য করে; microtubule দূরপাল্লার trafficking ও mitotic spindle সংগঠিত করে। Motor protein ATP hydrolysis-কে গতিতে রূপান্তর করে, তাই vesicle ও organelle কেবল ভাসে না—নির্দিষ্ট অবস্থানে যেতে পারে।',
    ),
    academic: l(
      'Actin polymerization can push a membrane forward and myosin can generate contractile force. Kinesin and dynein move cargo in opposite directions on microtubules, while microtubule dynamic instability supports rapid reorganization. Focal adhesions link extracellular matrix to actin through integrins and adaptor proteins; this mechanical connection also transmits signals. Thus cell shape is not decoration: geometry changes transport distances, adhesion, migration and signal interpretation.',
      'Actin polymerization membrane-কে সামনে ঠেলতে পারে এবং myosin contractile force তৈরি করতে পারে। Kinesin ও dynein microtubule-এ বিপরীত দিকে cargo সরায়, আর microtubule-এর dynamic instability দ্রুত পুনর্গঠন সম্ভব করে। Integrin ও adaptor protein-এর মাধ্যমে focal adhesion extracellular matrix-কে actin-এর সঙ্গে যুক্ত করে; এই mechanical connection signal-ও বহন করে। তাই cell shape অলংকার নয়: geometry transport distance, adhesion, migration ও signal interpretation বদলায়।',
    ),
    advanced: l(
      'Cytoskeletal behavior is regulated by nucleotide state, severing and capping proteins, crosslinkers, motors and local signaling. Actin networks can be branched or bundled; microtubule-organizing centers establish polarity; intermediate-filament networks connect to junctions and the nucleus. During division, spindle attachment and tension are monitored before chromosome segregation. Experimental perturbation must distinguish direct mechanical effects from secondary changes in adhesion, signaling or metabolism.',
      'Cytoskeleton-এর আচরণ nucleotide state, severing ও capping protein, crosslinker, motor এবং স্থানীয় signaling নিয়ন্ত্রণ করে। Actin network branched বা bundled হতে পারে; microtubule-organizing center polarity স্থাপন করে; intermediate-filament network junction ও nucleus-এর সঙ্গে যুক্ত থাকে। Division-এর সময় chromosome segregation-এর আগে spindle attachment ও tension পর্যবেক্ষণ করা হয়। Experiment-এ direct mechanical effect-কে adhesion, signaling বা metabolism-এর secondary change থেকে আলাদা করতে হয়।',
    ),
  },
  signaling: {
    heading: l('Cell signaling and organelle communication', 'Cell signaling ও organelle communication'),
    foundation: l(
      'A signal begins when a ligand or physical cue is detected by a receptor. The receptor changes state, recruits intracellular components and can activate second messengers such as cyclic AMP, calcium or phosphoinositides. Kinases and phosphatases then alter target proteins, while transcription factors can change gene expression. Responses are limited by ligand removal, receptor internalization, phosphatases and negative feedback.',
      'কোনো ligand বা physical cue receptor শনাক্ত করলে signal শুরু হয়। Receptor নিজের অবস্থা বদলে intracellular component আনে এবং cyclic AMP, calcium বা phosphoinositide-এর মতো second messenger সক্রিয় করতে পারে। Kinase ও phosphatase target protein বদলায়, আর transcription factor gene expression পরিবর্তন করতে পারে। Ligand অপসারণ, receptor internalization, phosphatase ও negative feedback signal সীমিত করে।',
    ),
    academic: l(
      'Signal transduction is a sequence with amplification and branching, not a single linear wire. A receptor can activate Ras–MAPK for gene-regulatory responses, PI3K–AKT for growth and survival inputs, or calcium-dependent enzymes for rapid responses; the precise outcome depends on cell type and timing. Organelle communication adds spatial control: ER calcium release can affect mitochondria, endosomes can signal before degradation, and mitochondria can release factors that influence apoptosis.',
      'Signal transduction amplification ও branching-যুক্ত একটি sequence, সরল linear wire নয়। Receptor gene-regulatory response-এর জন্য Ras–MAPK, growth ও survival input-এর জন্য PI3K–AKT, অথবা দ্রুত response-এর জন্য calcium-dependent enzyme সক্রিয় করতে পারে; ফল cell type ও timing-এর ওপর নির্ভর করে। Organelle communication স্থানিক নিয়ন্ত্রণ যোগ করে: ER calcium ছাড়লে mitochondria প্রভাবিত হতে পারে, endosome degradation-এর আগেই signal দিতে পারে এবং mitochondria apoptosis প্রভাবিতকারী factor ছাড়তে পারে।',
    ),
    advanced: l(
      'Signaling networks are constrained by compartment, scaffold, feedback and noise. A pathway’s measured activity may reflect abundance, localization, phosphorylation state or pulse frequency rather than a simple concentration. Organelle contact sites create short-range exchange zones, while phase-separated assemblies can concentrate signaling reactions. A pathway diagram is therefore a mechanistic hypothesis with defined context; it should not be read as a universal prediction of a person’s response.',
      'Signaling network compartment, scaffold, feedback ও noise দ্বারা সীমাবদ্ধ। কোনো pathway-এর measured activity শুধু concentration নয়; abundance, localization, phosphorylation state বা pulse frequency-ও তা প্রতিফলিত করতে পারে। Organelle contact site short-range exchange zone তৈরি করে এবং phase-separated assembly signaling reaction ঘনীভূত করতে পারে। তাই pathway diagram নির্দিষ্ট context-সহ একটি mechanistic hypothesis; এটি কোনো ব্যক্তির response-এর universal prediction নয়।',
    ),
  },
  cycle: {
    heading: l('Cell cycle, genome surveillance and clinical relevance', 'Cell cycle, genome surveillance ও clinical relevance'),
    foundation: l(
      'The cell cycle coordinates growth, DNA replication and division. In G1 the cell grows and assesses conditions; S phase copies DNA; G2 prepares for division; M phase separates chromosomes and divides the cytoplasm. Checkpoints delay progression when DNA is damaged, replication is incomplete or spindle attachment is incorrect. Cells can also enter G0, a state outside active division.',
      'Cell cycle growth, DNA replication ও division সমন্বয় করে। G1-এ কোষ বেড়ে ওঠে ও পরিবেশ যাচাই করে; S phase-এ DNA copy হয়; G2 division-এর প্রস্তুতি নেয়; M phase chromosome আলাদা করে ও cytoplasm ভাগ করে। DNA damaged হলে, replication অসম্পূর্ণ থাকলে বা spindle attachment ভুল হলে checkpoint progression থামায়। কোষ G0-তেও যেতে পারে, যা active division-এর বাইরে থাকা অবস্থা।',
    ),
    academic: l(
      'Cyclin–CDK complexes provide timed kinase activity, while inhibitors and ubiquitin-dependent degradation help make transitions directional. The G1/S decision integrates growth signals, nutrients, cell size and DNA integrity. During mitosis, spindle microtubules attach to kinetochores; the metaphase checkpoint prevents premature chromatid separation. Cytokinesis then uses an actomyosin contractile ring to partition the cell. These mechanisms explain why cell division is a regulated physiological program, not simply cell enlargement followed by splitting.',
      'Cyclin–CDK complex সময়নির্ধারিত kinase activity দেয়; inhibitor ও ubiquitin-dependent degradation transition-কে একমুখী করতে সাহায্য করে। G1/S decision growth signal, nutrient, cell size ও DNA integrity একত্র বিবেচনা করে। Mitosis-এ spindle microtubule kinetochore-এ যুক্ত হয়; metaphase checkpoint আগেভাগে chromatid separation ঠেকায়। পরে actomyosin contractile ring cytokinesis ঘটায়। তাই cell division নিয়ন্ত্রিত physiological program, শুধু কোষ বড় হয়ে দুই ভাগ হওয়া নয়।',
    ),
    advanced: l(
      'Cancer biology illustrates how normal cell architecture and control can fail together: mutations may alter growth signaling, checkpoint enforcement, apoptosis, genome maintenance, adhesion or metabolism. The direction of causality is context-dependent, and a molecular mechanism is not by itself a patient-specific diagnosis. Research interpretation should identify the model system, perturbation, tissue and endpoint, then distinguish association from causation. This chapter uses clinical relevance to motivate mechanisms, not to provide screening or treatment advice.',
      'Cancer biology দেখায় normal cell architecture ও control একসঙ্গে কীভাবে ব্যর্থ হতে পারে: mutation growth signaling, checkpoint, apoptosis, genome maintenance, adhesion বা metabolism বদলাতে পারে। Causality context-dependent এবং molecular mechanism একা patient-specific diagnosis নয়। Research interpretation-এ model system, perturbation, tissue ও endpoint চিহ্নিত করে association ও causation আলাদা করতে হয়। এই অধ্যায় clinical relevance ব্যবহার করে mechanism বোঝায়; screening বা treatment advice দেয় না।',
    ),
  },
  practice: {
    heading: l('Worked reasoning and evidence limits', 'Worked reasoning ও evidence-এর সীমা'),
    foundation: l(
      'Worked example: follow a secreted protein. First, a signal sequence directs the translating ribosome to rough ER. Second, the chain enters the ER lumen and folds. Third, vesicles carry it to the Golgi for modification and sorting. Fourth, a secretory vesicle fuses with the plasma membrane. The route explains how compartment structure creates a sequence of molecular checkpoints.',
      'সমাধানসহ উদাহরণ: একটি নিঃসৃত protein অনুসরণ করুন। প্রথমে signal sequence translationরত ribosome-কে rough ER-এ নির্দেশ করে। দ্বিতীয়ত chain ER lumen-এ ঢুকে fold হয়। তৃতীয়ত vesicle সেটিকে Golgi-তে নিয়ে modification ও sorting করায়। চতুর্থত secretory vesicle plasma membrane-এর সঙ্গে fusion করে। এই route দেখায় compartment structure কীভাবে molecular checkpoint-এর ধারাবাহিকতা তৈরি করে।',
    ),
    academic: l(
      'Worked example: predict the direction of glucose-linked transport. A concentration or electrochemical gradient must be identified first; then determine whether a channel, carrier or pump provides the path; finally account for coupling and ATP use. If a membrane potential changes, the direction of an ion-linked transporter can change even when concentration is unchanged. This reasoning prevents the common error of treating every transporter as a passive pore.',
      'সমাধানসহ উদাহরণ: glucose-linked transport-এর দিক অনুমান করুন। প্রথমে concentration বা electrochemical gradient চিহ্নিত করতে হবে; তারপর channel, carrier না pump পথ দিচ্ছে তা নির্ধারণ করতে হবে; শেষে coupling ও ATP use হিসাব করতে হবে। Membrane potential বদলালে concentration একই থাকলেও ion-linked transporter-এর দিক বদলাতে পারে। এতে প্রতিটি transporter-কে passive pore ভাবার সাধারণ ভুল এড়ানো যায়।',
    ),
    advanced: l(
      'Research interpretation example: an altered organelle marker does not automatically prove altered organelle function. Confirm localization with an appropriate method, measure a functional endpoint, include perturbation and rescue where possible, and test whether cell stress or altered abundance explains the result. A chapter model can generate hypotheses, but publication-grade claims require methods, controls, statistics and an evidence trail beyond a schematic diagram.',
      'গবেষণা ব্যাখ্যার উদাহরণ: organelle marker বদলেছে দেখলেই organelle function বদলেছে প্রমাণ হয় না। উপযুক্ত পদ্ধতিতে localization নিশ্চিত করতে হবে, functional endpoint মাপতে হবে, সম্ভব হলে perturbation ও rescue রাখতে হবে এবং cell stress বা abundance change ফলটি ব্যাখ্যা করে কি না পরীক্ষা করতে হবে। অধ্যায়ের model hypothesis তৈরি করতে পারে, কিন্তু publication-grade claim-এর জন্য schematic diagram-এর বাইরে method, control, statistics ও evidence trail দরকার।',
    ),
  },
  takeaways: {
    heading: l('Key terms, synthesis and clinical boundary', 'মূল পরিভাষা, সংশ্লেষণ ও clinical boundary'),
    foundation: l(
      'Key terms: compartmentation means separating reactions into distinct spaces; homeostasis means regulated stability; organelle means a specialized cellular structure; gradient means a difference across distance; trafficking means directed movement of cargo. The main synthesis is that structure enables function: membranes create boundaries, proteins execute mechanisms, and energy and information flows connect the parts.',
      'মূল পরিভাষা: compartmentation হলো পৃথক স্থানে বিক্রিয়া আলাদা রাখা; homeostasis হলো নিয়ন্ত্রিত স্থিতিশীলতা; organelle হলো বিশেষায়িত কোষীয় গঠন; gradient হলো দূরত্ব জুড়ে পার্থক্য; trafficking হলো cargo-র দিকনির্দেশিত চলাচল। মূল সংশ্লেষণ হলো structure function-কে সম্ভব করে: membrane boundary তৈরি করে, protein mechanism চালায় এবং energy ও information flow অংশগুলোকে যুক্ত করে।',
    ),
    academic: l(
      'A useful study sequence is boundary, transport, information, synthesis, energy, recycling, force and division. Ask at each step: what is the compartment, what is the molecular machine, what gradient or energy source is used, what is the destination, and how is error controlled? The same logic connects cell biology to physiology and nutrition without claiming that a diagram can replace measurement of an individual or population.',
      'পড়ার কার্যকর ক্রম হলো boundary, transport, information, synthesis, energy, recycling, force ও division। প্রতিটি ধাপে জিজ্ঞেস করুন: compartment কোনটি, molecular machine কী, কোন gradient বা energy source ব্যবহৃত হচ্ছে, destination কোথায় এবং error কীভাবে নিয়ন্ত্রিত হয়? এই যুক্তি cell biology-কে physiology ও nutrition-এর সঙ্গে যুক্ত করে, কিন্তু কোনো ব্যক্তির বা population-এর measurement-এর বদলি হিসেবে diagram-কে ব্যবহার করে না।',
    ),
    advanced: l(
      'The chapter is an evidence-linked educational synthesis, not an independently reviewed clinical guideline and not individualized medical or nutrition advice. The cited sources support foundational mechanisms; they do not justify a personal diagnosis, treatment choice, supplement recommendation or prediction of disease risk. Claims that depend on population, tissue, dose, disease state or current guidance require additional specialist review and current sources.',
      'এই অধ্যায় evidence-linked educational synthesis; এটি independent clinical guideline নয় এবং ব্যক্তিগত চিকিৎসা বা nutrition advice নয়। উদ্ধৃত source-গুলো মৌলিক mechanism সমর্থন করে; এগুলো personal diagnosis, treatment choice, supplement recommendation বা disease-risk prediction-এর ভিত্তি নয়। Population, tissue, dose, disease state বা বর্তমান guideline-নির্ভর claim-এর জন্য অতিরিক্ত বিশেষজ্ঞ review ও হালনাগাদ source দরকার।',
    ),
  },
} as const

const sectionIds = Object.keys(content) as Array<keyof typeof content>
type ChapterLevel = 'foundation' | 'academic' | 'advanced'
const levelLabels = {
  foundation: l('Foundation', 'ভিত্তি'), academic: l('Academic', 'একাডেমিক'), advanced: l('Advanced / Research', 'উন্নত / গবেষণা'),
}
const makeSections = (level: ChapterLevel) => sectionIds.map((id) => {
  const item = content[id]
  return section(id, item.heading, [item[level]])
})

const organelles = [
  ['membrane', 'Plasma membrane', 'প্লাজমা ঝিল্লি', 'A selectively permeable boundary with channels, carriers, receptors and glycocalyx.', 'চ্যানেল, carrier, receptor ও glycocalyx-যুক্ত নির্বাচনীভাবে ভেদ্য সীমানা।', 'membrane'],
  ['nucleus', 'Nucleus', 'নিউক্লিয়াস', 'Stores most genomic DNA and coordinates regulated gene expression.', 'অধিকাংশ genomic DNA রাখে এবং নিয়ন্ত্রিত gene expression সমন্বয় করে।', 'nucleus'],
  ['er', 'Endoplasmic reticulum', 'Endoplasmic reticulum', 'Synthesizes secretory proteins and lipids; folds and quality-checks cargo.', 'নিঃসৃত protein ও lipid তৈরি করে; cargo fold ও quality-check করে।', 'endomembrane'],
  ['golgi', 'Golgi apparatus', 'Golgi apparatus', 'Modifies, sorts and dispatches proteins and lipids through the secretory pathway.', 'Secretory pathway-এ protein ও lipid পরিবর্তন, sorting ও dispatch করে।', 'endomembrane'],
  ['ribosome', 'Ribosome', 'Ribosome', 'Reads mRNA and builds polypeptides on free or ER-bound ribosomes.', 'mRNA পড়ে free বা ER-bound অবস্থায় polypeptide তৈরি করে।', 'endomembrane'],
  ['mitochondrion', 'Mitochondrion', 'Mitochondrion', 'Uses redox chemistry and a proton gradient to support ATP synthesis.', 'Redox chemistry ও proton gradient ব্যবহার করে ATP synthesis-এ সাহায্য করে।', 'energy'],
  ['lysosome', 'Lysosome', 'Lysosome', 'Acidic compartment for macromolecule degradation and recycling.', 'Macromolecule degradation ও recycling-এর acidic compartment।', 'recycling'],
  ['peroxisome', 'Peroxisome', 'Peroxisome', 'Compartment for selected oxidative reactions and peroxide handling.', 'নির্দিষ্ট oxidative reaction ও peroxide নিয়ন্ত্রণের compartment।', 'recycling'],
  ['cytoskeleton', 'Cytoskeleton', 'Cytoskeleton', 'Actin, intermediate filaments and microtubules organize shape and force.', 'Actin, intermediate filament ও microtubule আকৃতি ও বল সংগঠিত করে।', 'cytoskeleton'],
] as const

export const cellStructureLesson: LessonTopic = {
  id: 'topic.cell.structure', slug: 'cell-structure', version: 2, updatedAt: '2026-10-10',
  title: l('Cell Structure', 'কোষের গঠন'),
  summary: l('A gold-standard chapter on cellular organization, molecular mechanisms, organelle cooperation and evidence-aware biomedical interpretation.', 'কোষীয় সংগঠন, অণবিক mechanism, organelle cooperation এবং evidence-aware biomedical interpretation নিয়ে একটি পূর্ণাঙ্গ অধ্যায়।'),
  subject: 'anatomy', evidenceClass: 'established-textbook-synthesis', reviewStatus: 'source-checked-expert-review-pending', lastReviewed: '2026-10-10',
  objectives: [
    l('Explain how membrane compartments organize cellular chemistry and transport.', 'Membrane compartment কীভাবে কোষীয় chemistry ও transport সংগঠিত করে ব্যাখ্যা করুন।'),
    l('Trace protein, ion and information pathways step by step across organelles.', 'Organelle জুড়ে protein, ion ও information pathway ধাপে ধাপে অনুসরণ করুন।'),
    l('Connect cell structure to energy metabolism, signaling, division and tissue physiology.', 'Cell structure-কে energy metabolism, signaling, division ও tissue physiology-এর সঙ্গে যুক্ত করুন।'),
    l('Interpret clinical relevance without turning educational mechanisms into personal medical advice.', 'Educational mechanism-কে personal medical advice না বানিয়ে clinical relevance ব্যাখ্যা করুন।'),
  ],
  prerequisiteIds: [], relatedTopicIds: ['topic.macronutrient.digestion', 'topic.glucose.metabolism'],
  references: [openStaxCells, openStaxMembrane, openStaxCytoskeleton, openStaxCycle, compartmentalization, proteinSorting, er],
  evidenceBySection: Object.fromEntries(sectionIds.map((id) => [id, [id === 'membrane' || id === 'transport' ? openStaxMembrane.id : id === 'cytoskeleton' ? openStaxCytoskeleton.id : id === 'cycle' ? openStaxCycle.id : ['endomembrane', 'recycling'].includes(id) ? proteinSorting.id : id === 'energy' ? compartmentalization.id : openStaxCells.id]])),
  levels: { foundation: { label: levelLabels.foundation, sections: makeSections('foundation') }, academic: { label: levelLabels.academic, sections: makeSections('academic') }, advanced: { label: levelLabels.advanced, sections: makeSections('advanced') } },
  diagram: { accessibleDescription: l('A schematic, not-to-scale animal cell. Select an organelle to read its role and follow the linked chapter section.', 'এটি scale-অনুযায়ী 3D model নয়; একটি schematic animal cell। কোনো organelle নির্বাচন করলে তার ভূমিকা ও সংশ্লিষ্ট section পড়ুন।'), steps: organelles.map(([, en, bn]) => l(en, bn)) },
  assessment: { question: l('Which sequence best describes the route of a typical secreted protein?', 'একটি সাধারণ নিঃসৃত protein-এর route কোন ক্রমে সঠিকভাবে বর্ণিত?'), options: [l('Ribosome → rough ER → Golgi → secretory vesicle → plasma membrane', 'Ribosome → rough ER → Golgi → secretory vesicle → plasma membrane'), l('Lysosome → nucleus → mitochondrion → plasma membrane', 'Lysosome → nucleus → mitochondrion → plasma membrane'), l('Mitochondrion → peroxisome → nucleolus → Golgi', 'Mitochondrion → peroxisome → nucleolus → Golgi')], correctIndex: 0, explanation: l('A signal sequence targets the translating ribosome to the ER; cargo is folded, processed and sorted before vesicle fusion at the cell surface.', 'Signal sequence translationরত ribosome-কে ER-এ target করে; cell surface-এ vesicle fusion-এর আগে cargo fold, process ও sort হয়।') },
  chapter: {
    toc: sectionIds.map((id) => ({ id, label: content[id].heading, sectionId: id })),
    terms: [
      { term: l('Electrochemical gradient', 'তড়িৎ-রাসায়নিক gradient'), definition: l('The combined chemical concentration and electrical potential difference that influences ion movement.', 'আয়নের চলাচল প্রভাবিত করা chemical concentration ও electrical potential-এর সম্মিলিত পার্থক্য।') },
      { term: l('Protein sorting', 'Protein sorting'), definition: l('Recognition of targeting information that directs a protein to its functional compartment.', 'Targeting information চিনে protein-কে তার functional compartment-এ পাঠানোর প্রক্রিয়া।') },
      { term: l('Organelle contact site', 'Organelle contact site'), definition: l('A close, regulated interface where membranes exchange signals, lipids or ions without fusing.', 'Fusion ছাড়াই membrane signal, lipid বা ion বিনিময় করে এমন নিকটবর্তী নিয়ন্ত্রিত interface।') },
      { term: l('Checkpoint', 'Checkpoint'), definition: l('A control point that delays cell-cycle progression until required conditions are met.', 'প্রয়োজনীয় শর্ত পূরণ না হওয়া পর্যন্ত cell-cycle progression বিলম্বিত করা control point।') },
    ],
    workedExamples: [
      { title: l('Trace a secreted protein', 'একটি নিঃসৃত protein অনুসরণ করুন'), steps: [l('Identify the signal sequence and rough-ER targeting step.', 'Signal sequence ও rough-ER targeting ধাপ চিহ্নিত করুন।'), l('Follow translocation, folding and quality control in the ER.', 'ER-এ translocation, folding ও quality control অনুসরণ করুন।'), l('Follow vesicle trafficking, Golgi processing and plasma-membrane fusion.', 'Vesicle trafficking, Golgi processing ও plasma-membrane fusion অনুসরণ করুন।')], conclusion: l('The route is a sequence of topology, energy and quality-control decisions—not a generic “cell factory” metaphor.', 'এই route topology, energy ও quality-control decision-এর ধারাবাহিকতা; এটি শুধু generic “cell factory” metaphor নয়।') },
      { title: l('Reason about a transporter', 'একটি transporter বিশ্লেষণ করুন'), steps: [l('Name the transported solute and its electrochemical gradient.', 'পরিবাহিত solute ও তার electrochemical gradient নির্ধারণ করুন।'), l('Identify channel, carrier, primary pump or coupled transporter.', 'Channel, carrier, primary pump বা coupled transporter চিহ্নিত করুন।'), l('Account for ATP use, coupling and membrane potential.', 'ATP use, coupling ও membrane potential হিসাব করুন।')], conclusion: l('Transport direction follows mechanism and gradients; it cannot be inferred from the word “transporter” alone.', 'Transporter শব্দটি একা transport-এর দিক বলে না; mechanism ও gradient বিবেচনা করতে হয়।') },
    ],
    checkpoints: [
      { question: l('Why can a membrane be selective without being completely impermeable?', 'সম্পূর্ণ অভেদ্য না হয়েও membrane কীভাবে selective হতে পারে?'), answer: l('The hydrophobic core disfavors ions and large polar solutes, while proteins provide regulated routes for selected cargo.', 'Hydrophobic core ion ও বড় polar solute বাধা দেয়, আর protein নির্বাচিত cargo-র জন্য regulated route দেয়।') },
      { question: l('Why is “mitochondria are the powerhouse” an incomplete explanation?', '“Mitochondria হলো powerhouse”—এটি কেন অসম্পূর্ণ ব্যাখ্যা?'), answer: l('Mitochondria also handle calcium, apoptosis signals, biosynthetic precursors and dynamic contact-site communication.', 'Mitochondria calcium, apoptosis signal, biosynthetic precursor ও contact-site communication-এও কাজ করে।') },
    ],
    organelles: organelles.map(([id, en, bn, descEn, descBn, sectionId]) => ({ id, label: l(en, bn), description: l(descEn, descBn), functions: [l(descEn, descBn)], sectionId })),
  },
}
