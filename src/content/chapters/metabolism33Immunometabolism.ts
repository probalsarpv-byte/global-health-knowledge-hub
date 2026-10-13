import type { LessonTopic, Localized, Organ3DExplorerContent } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const immunoRefs = [
  {
    id: 'oneill-immunometabolism-nat-rev-immunol-2016',
    authors: "Luke A. J. O'Neill, Rigel J. Kishton, Jeffrey Rathmell",
    title: 'A guide to immunometabolism for immunologists. Nature Reviews Immunology, 16(9):553-565',
    organization: 'Nature Publishing Group',
    year: 2016,
    url: 'https://pubmed.ncbi.nlm.nih.gov/27396447/',
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
    id: 'mills-succinate-hif1-cell-2016',
    authors: "Evanna L. Mills, Beth Kelly, Angela Logan, et al.",
    title: 'Succinate Dehydrogenase Supports Metabolic Repurposing of Mitochondria to Drive Inflammatory Macrophage Phenotype. Cell, 167(2):457-470',
    organization: 'Elsevier / Cell Press',
    year: 2016,
    url: 'https://pubmed.ncbi.nlm.nih.gov/27667687/',
  },
  {
    id: 'michelucci-itaconate-pnas-2013',
    authors: 'Alessandro Michelucci, Thekla Cordes, Jenny Ghelfi, et al.',
    title: 'Immune-responsive gene 1 protein links metabolism to macrophage antimicrobial mechanism through the production of itaconic acid. PNAS, 110(19):7820-7825',
    organization: 'National Academy of Sciences',
    year: 2013,
    url: 'https://pubmed.ncbi.nlm.nih.gov/23610393/',
  },
  {
    id: 'pearce-t-cell-metabolism-immunity-2013',
    authors: 'Erika L. Pearce, Matthew C. Poffenberger, Chih-Hao Chang, Russell G. Jones',
    title: 'Fueling immunity: insights into metabolism and lymphocyte function. Science, 342(6155):1242454',
    organization: 'AAAS',
    year: 2013,
    url: 'https://pubmed.ncbi.nlm.nih.gov/24115444/',
  },
]

const immuno3DData: Organ3DExplorerContent = {
  title: l(
    '3D Multi-Organ Landscape of Immunometabolism & Inflammatory Regulation',
    '৩ডি বহু-অঙ্গীয় প্রতিরোধ-বিপাক ও প্রদাহ নিয়ন্ত্রণের মানচিত্র'
  ),
  disclaimer: l(
    'Interactive 3D anatomical teaching model: explore how immune cell metabolic reprogramming across the spleen, lymphatic hubs, bone marrow niches, and hepatic Kupffer cells coordinates pro-inflammatory effector responses and resolution cascades.',
    'ইন্টারেক্টিভ ৩ডি শারীরস্থানিক শিক্ষামূলক মডেল: পর্যবেক্ষণ করুন কীভাবে প্লীহা, লসিকা গ্রন্থি, অস্থিমজ্জা এবং যকৃতের কুফার কোষে বিপাকীয় পুনর্বিন্যাসের মাধ্যমে প্রদাহ ও রোগ প্রতিরোধ ক্ষমতা পরিচালিত হয়।'
  ),
  description: l(
    'Immunometabolism is the critical nexus where cellular metabolic pathways dictate immune cell fate and function: pro-inflammatory M1 macrophages and effector T cells rewire toward aerobic glycolysis and broken TCA cycles to produce itaconate, succinate, and inflammatory cytokines, whereas M2 macrophages and regulatory T cells depend on oxidative phosphorylation and fatty acid oxidation to resolve inflammation.',
    'প্রতিরোধ-বিপাক হলো এমন একটি গুরুত্বপূর্ণ সংযোগস্থল যেখানে কোষীয় বিপাক সরাসরি রোগ প্রতিরোধকারী কোষের আচরণ নির্ধারণ করে: প্রদাহজনক এম১ ম্যাক্রোফেজ ও টি-কোষ অবাধ গ্লাইকোলাইসিসে চলে গিয়ে সাকসিনেট ও আইটাকোনেট তৈরি করে, অন্যদিকে এম২ ম্যাক্রোফেজ ও ট্রেগ কোষ চর্বি জারণের মাধ্যমে প্রদাহ নিরাময় করে।'
  ),
  organs: [
    {
      id: 'organ-spleen-macrophage-hub',
      name: l('Spleen: Red & White Pulp (Macrophage Metabolic Polarization)', 'প্লীহা: লাল ও সাদা মজ্জা (ম্যাক্রোফেজ বিপাকীয় মেরুকরণ)'),
      latinName: 'Splen (Lien)',
      system: l('Secondary Lymphoid & Reticuloendothelial System', 'গৌণ লসিকাতন্ত্র ও রেটিকুলোএন্ডোথেলিয়াল ব্যবস্থা'),
      cavity: l('Peritoneal Cavity (Left Hypochondrium)', 'পেরিটোনিয়াল গহ্বর (বাম হাইপোকন্ড্রিয়াম)'),
      position3D: { x: -6, y: 195, z: 2 },
      color: '#dc2626',
      highlightColor: '#ef4444',
      shapeType: 'stomach',
      description: l(
        'The largest secondary lymphoid organ in the human body. Splenic red pulp macrophages clear senescent erythrocytes, catabolizing heme into biliverdin and iron. In response to systemic lipopolysaccharide (LPS), splenic macrophages rapidly polarize into pro-inflammatory M1 killers, shutting down OxPhos, activating aerobic glycolysis, and breaking the TCA cycle to accumulate succinate and itaconate.',
        'মানবদেহের সর্ববৃহৎ লসিকা অঙ্গ। প্লীহার ম্যাক্রোফেজগুলো ক্ষতিকর জীবাণুর উপস্থিতিতে দ্রুত প্রদাহজনক এম১ কোষে রূপান্তরিত হয়; মাইটোকন্ড্রিয়াল শ্বসন কমিয়ে এরা অবাধ গ্লাইকোলাইসিস চালু করে এবং সাইট্রিক এসিড চক্র ভেঙে সাকসিনেট ও আইটাকোনেটের মাধ্যমে প্রদাহ তৈরি করে।'
      ),
      spatialRelations: l(
        'Nestled under the left costal margin and diaphragm, directly filtering total splenic arterial blood flow.',
        'বাম পাঁজরের নিচে অবস্থিত যা সরাসরি প্লীহার ধমনীর মাধ্যমে রক্ত ছেঁকে জীবাণু ও পুরনো রক্তকণিকা দূর করে।'
      ),
      physiology: l(
        'M1 polarization induces the pentose phosphate pathway to supply NADPH for the NOX2 respiratory burst, generating superoxide and hypochlorous acid to destroy phagocytosed pathogens.',
        'এম১ মেরুকরণ পেন্টোজ ফসফেট পথকে বাড়িয়ে NADPH সরবরাহ করে, যা NOX2 এনজাইমের মাধ্যমে মুক্ত র্যাডিক্যাল তৈরি করে জীবাণু ধ্বংস করে।'
      ),
      nutritionConnection: l(
        'Omega-3 polyunsaturated fatty acids (EPA and DHA) promote polarization toward the anti-inflammatory M2 phenotype, generating specialized pro-resolving mediators (resolvins, protectins).',
        'খাবারের ওমেগা-৩ ফ্যাটি অ্যাসিড ম্যাক্রোফেজকে প্রদাহ-নিবারক এম২ কোষে রূপান্তরিত করে নিরাময়মূলক রিজলভিন হরমোন তৈরি বাড়ায়।'
      ),
      clinicalSignificance: l(
        'Unchecked M1 splenic hyperactivation drives cytokine release syndrome (sepsis and macrophage activation syndrome), causing systemic vasodilation, capillary leak, and multi-organ failure.',
        'প্লীহার অতিরিক্ত প্রদাহজনক সক্রিয়তা সেপসিস ও সাইটোকাইন স্টর্মের জন্ম দেয়, যা রক্তচাপ কমিয়ে একাধিক অঙ্গ বিকল করে তোলে।'
      ),
      sectionId: 'structure',
    },
    {
      id: 'organ-lymph-nodes-t-cell-glycolysis',
      name: l('Lymph Nodes: Cortical Zones (T Cell Glycolytic Switch)', 'লসিকা গ্রন্থি: কর্টিকাল অঞ্চল (টি-কোষ গ্লাইকোলাইটিক রূপান্তর)'),
      latinName: 'Nodi Lymphoidei',
      system: l('Lymphatic & Adaptive Immune System', 'লসিকাতন্ত্র ও অর্জিত রোগপ্রতিরোধ ব্যবস্থা'),
      cavity: l('Systemic Lymphatic Network (Cervical, Axillary, Inguinal)', 'সার্বিক লসিকা নেটওয়ার্ক (ঘাড়, বগল, কুঁচকি)'),
      position3D: { x: 3, y: 225, z: 2 },
      color: '#3b82f6',
      highlightColor: '#60a5fa',
      shapeType: 'lungs',
      description: l(
        'Lymph nodes are the primary sites where dendritic cells present antigens to naive T cells. Naive T cells are metabolically quiescent, surviving on low-rate fatty acid oxidation and oxidative phosphorylation. Upon T-cell receptor (TCR) and CD28 costimulation, the PI3K-Akt-mTORC1 and Myc transcriptional networks are triggered, causing a dramatic 30-fold upregulation of GLUT1 and switching to aerobic glycolysis and glutaminolysis for explosive clonal expansion.',
        'লসিকা গ্রন্থিতে অ্যান্টিজেন উপস্থাপনের মাধ্যমে টি-কোষ সক্রিয় হয়। শান্ত অবস্থায় এরা চর্বি পুড়িয়ে টিকে থাকে। কিন্তু জীবাণুর উপস্থিতি টের পেলে এরা তাৎক্ষণিকভাবে গ্লাইকোলাইসিসে চলে যায় এবং GLUT1 বাহক ৩০ গুণ বাড়িয়ে দ্রুত সংখ্যাবৃদ্ধি শুরু করে।'
      ),
      spatialRelations: l(
        'Arranged in chains along regional lymphatic vessels, draining interstitial fluid from peripheral tissue beds.',
        'সারাদেহের লসিকা নালীর সমান্তরালে বিন্যস্ত যা প্রান্তীয় কলা থেকে সংগৃহীত তরল ছেঁকে জীবাণুমুক্ত করে।'
      ),
      physiology: l(
        'Aerobic glycolysis provides the carbon skeletons and NADPH needed to synthesize nucleotides, amino acids, and lipids for rapid cell division, while directly post-transcriptionally promoting IFN-gamma translation via GAPDH dissociation from mRNA.',
        'অবাধ গ্লাইকোলাইসিস দ্রুত নতুন কোষ তৈরির কাঁচামাল যোগায় এবং GAPDH এনজাইমকে মুক্ত করে ইন্টারফেরন-গামা প্রোটিনের উৎপাদন বাড়িয়ে তোলে।'
      ),
      nutritionConnection: l(
        'Essential amino acid glutamine is the obligate fuel for anaplerosis in rapidly dividing T cells; glutaminase inhibition cripples effector T cell responses.',
        'দ্রুত বর্ধনশীল টি-কোষের জন্য গ্লুটামিন অ্যামিনো অ্যাসিড অপরিহার্য; গ্লুটামিনের অভাব এদের আক্রমণাত্মক কার্যকারিতা স্তব্ধ করে দেয়।'
      ),
      clinicalSignificance: l(
        'In autoimmune diseases (multiple sclerosis, rheumatoid arthritis), autoreactive Teff cells maintain pathogenic hyper-glycolysis; targeting immunometabolism with dimethyl fumarate (DMF) or 2-deoxyglucose suppresses autoimmunity.',
        'অটোইমিউন রোগে ক্ষতিকর টি-কোষগুলো অতিরিক্ত গ্লাইকোলাইসিসের ওপর নির্ভর করে বাঁচে; এদের বিপাক বন্ধ করার ওষুধ রোগ নিরাময়ে অত্যন্ত কার্যকর।'
      ),
      sectionId: 'mechanism',
    },
    {
      id: 'organ-bone-marrow-trained-immunity',
      name: l('Bone Marrow: Myeloid Niches (Trained Immunity Epigenetics)', 'অস্থিমজ্জা: মায়েলয়েড অঞ্চল (প্রশিক্ষিত রোগপ্রতিরোধ এপিজেনেটিক্স)'),
      latinName: 'Medulla Ossium et Hematopoiesis',
      system: l('Hematopoietic & Innate Immune System', 'রক্তোৎপাদী ও জন্মগত প্রতিরোধ ব্যবস্থা'),
      cavity: l('Medullary Canals (Axial & Appendicular Bones)', 'অস্থির মেডুলারি গহ্বর'),
      position3D: { x: 0, y: 165, z: 0 },
      color: '#7c3aed',
      highlightColor: '#8b5cf6',
      shapeType: 'skeleton',
      description: l(
        'Hematopoietic stem cells (HSCs) and multipotent myeloid progenitors in the bone marrow establish a long-term memory of innate immune challenges termed "Trained Immunity" (central innate memory). Exposure to beta-glucans or BCG vaccines rewires myeloid progenitor metabolism toward glycolysis and the cholesterol mevalonate pathway via mTOR-HIF1alpha, leaving epigenetic marks (H3K4me3) on pro-inflammatory cytokine promoters.',
        'অস্থিমজ্জার রক্তোৎপাদী স্টেম কোষগুলো জন্মগত প্রতিরোধ ব্যবস্থার দীর্ঘমেয়াদী স্মৃতি গড়ে তোলে যাকে "ট্রেইন্ড ইমিউনিটি" বলে। বিসিজি টিকা বা ছত্রাকের প্রভাবে এরা গ্লাইকোলাইসিস ও মেভালোনেট পথকে পুনর্গঠন করে স্মৃতি সংরক্ষণ করে।'
      ),
      spatialRelations: l(
        'Encased within the trabecular vascular sinuses of the pelvic girdle, sternum, ribs, and vertebrae.',
        'শ্রোণীচক্র, স্টার্নাম এবং মেরুদণ্ডের অস্থির অভ্যন্তরীণ রক্তনালী গহ্বরের ভেতর নিবিড়ভাবে সুরক্ষিত থাকে।'
      ),
      physiology: l(
        'Mevalonate pathway intermediate farnesyl pyrophosphate feeds cholesterol synthesis, while accumulation of mevalonate directly activates IGF-1 signaling to reinforce trained progenitor output.',
        'মেভালোনেট পথ থেকে উৎপন্ন উপাদান কোষের বৃদ্ধি ও শক্তিশালী অ্যান্টিবডি তৈরির কার্যক্ষমতাকে দীর্ঘস্থায়ী রূপ দেয়।'
      ),
      nutritionConnection: l(
        'Western-type diets high in saturated fats and refined sugars trigger systemic metaflammation and maladaptive bone marrow myelopoiesis, producing hyper-reactive, atherogenic monocytes.',
        'অতিরিক্ত তেল-চর্বিযুক্ত খাদ্য অস্থিমজ্জায় ভুল প্রশিক্ষণ দেয়, যার ফলে রক্তনালীতে প্রদাহ সৃষ্টিকারী ক্ষতিকর মনোসাইট কোষের জন্ম হয়।'
      ),
      clinicalSignificance: l(
        'Trained immunity provides broad protection against heterologous secondary infections, but maladaptive trained immunity drives accelerated atherosclerosis and chronic inflammatory vascular disease.',
        'প্রশিক্ষিত প্রতিরোধ ব্যবস্থা অন্যান্য ইনফেকশন থেকে রক্ষা করলেও অনিয়ন্ত্রিত হলে তা রক্তনালীতে চর্বি জমিয়ে অ্যাথেরোস্ক্লেরোসিস বাড়িয়ে দেয়।'
      ),
      sectionId: 'integration',
    },
    {
      id: 'organ-liver-kupffer-metaflammation',
      name: l('Liver: Kupffer Cells (LPS Clearance & Metaflammation)', 'যকৃৎ: কুফার কোষ (LPS নিষ্কাশন ও মেটাফ্ল্যামেশন)'),
      latinName: 'Hepar et Macrophagocyti Stellate',
      system: l('Hepato-Immunological System', 'যকৃৎ-প্রতিরোধ ব্যবস্থা'),
      cavity: l('Hepatic Sinusoids (Lining Peritoneal Cavity)', 'হেপাটিক সাইনুসয়েড (যকৃতের রক্তনালী)'),
      position3D: { x: 5, y: 185, z: 2 },
      color: '#d97706',
      highlightColor: '#f59e0b',
      shapeType: 'liver',
      description: l(
        'Kupffer cells, the resident macrophages of the hepatic sinusoids, comprise 80–90% of all tissue macrophages in the human body. Positioned in the portal bloodstream, they continuously encounter gut-derived microbial products (endotoxin / LPS). Under normal conditions, they maintain immune tolerance; in obesity, excess saturated fatty acids and portal LPS shift Kupffer cells into an inflammatory M1 phenotype.',
        'যকৃতের কুফার কোষগুলো মানবদেহের সমস্ত কলা ম্যাক্রোফেজের ৮০–৯০% অংশ গঠন করে। এরা রক্তে আসা ক্ষতিকর ব্যাকটেরিয়াল টক্সিন (LPS) ছেঁকে পরিষ্কার করে। স্থূলতায় এরা ক্ষতিকর এম১ কোষে রূপ নিয়ে যকৃতে তীব্র প্রদাহ ও ফ্যাটি লিভার সৃষ্টি করে।'
      ),
      spatialRelations: l(
        'Anchored to the endothelial lining inside hepatic sinusoids, directly exposed to flowing portal venous blood from the gut.',
        'যকৃতের সূক্ষ্ম রক্তনালীর দেয়ালে নোঙ্গর করে থাকে যা অন্ত্র থেকে আসা সমস্ত রক্ত সরাসরি নিরীক্ষণ করে।'
      ),
      physiology: l(
        'Activated Kupffer cells secrete TNF-alpha, IL-1beta, and CCL2 (MCP-1), recruiting circulating monocytes and stimulating hepatic stellate cells to transdifferentiate into collagen-secreting myofibroblasts.',
        'সক্রিয় কুফার কোষ ক্ষতিকর প্রদাহজনক সাইটোকাইন নিঃসৃত করে যকৃতের কোলাজেন তন্তু বাড়িয়ে ফাইব্রোসিসের সূচনা করে।'
      ),
      nutritionConnection: l(
        'High-fructose diets increase intestinal gut permeability ("leaky gut"), elevating portal LPS translocation and triggering persistent Kupffer cell inflammatory activation.',
        'অতিরিক্ত মিষ্টি ও ফ্রুক্টোজ খেলে অন্ত্রের প্রাচীর দুর্বল হয়ে রক্তে ক্ষতিকর টক্সিন ঢুকে কুফার কোষকে প্রতিনিয়ত ক্ষিপ্ত করে তোলে।'
      ),
      clinicalSignificance: l(
        'Kupffer cell-driven chronic inflammation (metaflammation) is the primary driver of progression from simple steatosis (MASLD) to inflammatory steatohepatitis (MASH) and cirrhosis.',
        'কুফার কোষের দীর্ঘস্থায়ী প্রদাহ সাধারণ ফ্যাটি লিভারকে মারাত্মক লিভার সিরোসিস ও লিভার ফেইলিউরের দিকে ঠেলে দেয়।'
      ),
      sectionId: 'practice',
    },
  ],
}

export const metabolism33ImmunometabolismLesson: LessonTopic = {
  id: 'topic.metabolism.immunometabolism-inflammation',
  slug: 'immunometabolism-inflammation',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '33 · Immunometabolism & Metabolic Regulation of Inflammation',
    '৩৩ · প্রতিরোধ-বিপাক ও প্রদাহের বিপাকীয় নিয়ন্ত্রণ'
  ),
  summary: l(
    'Cellular immunometabolism: pro-inflammatory M1 macrophage Warburg glycolysis, the two-point TCA cycle break (citrate and succinate accumulation), ACOD1/IRG1 itaconate biosynthesis and SDH inhibition, succinate-mediated HIF-1alpha stabilization, M2 macrophage oxidative phosphorylation and arginase-1, T cell metabolic reprogramming (Teff glycolysis vs Treg lipid oxidation), and metaflammation.',
    'কোষীয় প্রতিরোধ-বিপাক: প্রদাহজনক এম১ ম্যাক্রোফেজের ওয়ারবার্গ গ্লাইকোলাইসিস, সাইট্রিক এসিড চক্রের দুই স্থানে ভাঙন (সাইট্রেট ও সাকসিনেট জমা), ACOD1 দ্বারা আইটাকোনেট তৈরি ও SDH বাধা, সাকসিনেট দ্বারা HIF-1alpha স্থায়িত্ব, এম২ ম্যাক্রোফেজের চর্বি জারণ, টি-কোষের বিপাকীয় রূপান্তর এবং মেটাফ্ল্যামেশন।'
  ),
  subject: 'metabolism',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Detail the biochemical mechanics of the two-point TCA cycle break in LPS-activated M1 macrophages, explaining the accumulation of citrate and succinate.',
      'LPS-সক্রিয় এম১ ম্যাক্রোফেজে ক্রেবস চক্রের দুই জায়গায় ভেঙে যাওয়ার আণবিক কারণ এবং সাইট্রেট ও সাকসিনেট জমার কৌশল ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Analyze the biosynthesis of itaconate by ACOD1/IRG1 and explain its endogenous functions as a competitive inhibitor of Complex II and activator of the Nrf2 antioxidant response.',
      'ACOD1 এনজাইম দ্বারা আইটাকোনেট তৈরি এবং কমপ্লেক্স ২-এর প্রতিরোধক হিসেবে এর প্রাকৃতিক প্রদাহ-বিরোধী কার্যকারিতা মূল্যায়ন করা।'
    ),
    l(
      'Contrast the metabolic phenotypes of effector T cells (Teff) versus regulatory T cells (Treg), explaining why FOXP3 enforces reliance on fatty acid oxidation.',
      'আক্রমণাত্মক টি-কোষ (Teff) বনাম নিয়ন্ত্রক টি-কোষের (Treg) বিপাকীয় বৈচিত্র্য বিশ্লেষণ করা এবং FOXP3 কীভাবে চর্বি জারণকে সচল রাখে তা ব্যাখ্যা করা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.metabolism.tca-oxphos'],
  relatedTopicIds: ['topic.metabolism.glycolysis-pyruvate', 'topic.metabolism.glutathione-ros-redox-homeostasis'],
  references: immunoRefs,
  evidenceBySection: {
    introduction: ['oneill-immunometabolism-nat-rev-immunol-2016', 'lehninger-biochem-8e-ch23'],
    structure: ['oneill-immunometabolism-nat-rev-immunol-2016', 'michelucci-itaconate-pnas-2013'],
    mechanism: ['michelucci-itaconate-pnas-2013', 'mills-succinate-hif1-cell-2016'],
    integration: ['pearce-t-cell-metabolism-immunity-2013', 'mills-succinate-hif1-cell-2016'],
    practice: ['pearce-t-cell-metabolism-immunity-2013', 'oneill-immunometabolism-nat-rev-immunol-2016'],
    takeaways: ['oneill-immunometabolism-nat-rev-immunol-2016', 'lehninger-biochem-8e-ch23'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Metabolic Control of Immune Cell Fate', '১. প্রতিরোধ কোষের পরিণতিতে বিপাকীয় নিয়ন্ত্রণ'), sectionId: 'introduction' },
      { id: 'sec-m1-m2', label: l('2. Macrophage Polarization: M1 Glycolysis vs M2 OxPhos', '২. ম্যাক্রোফেজ মেরুকরণ: এম১ গ্লাইকোলাইসিস বনাম এম২ জারণ'), sectionId: 'structure' },
      { id: 'sec-broken-tca', label: l('3. The Broken TCA Cycle: Succinate & Itaconate Dynamics', '৩. ভাঙা ক্রেবস চক্র: সাকসিনেট ও আইটাকোনেট গতিবিদ্যা'), sectionId: 'mechanism' },
      { id: 'sec-tcells', label: l('4. T Cell Immunometabolism: Teff Glycolysis vs Treg FAO', '৪. টি-কোষ প্রতিরোধ-বিপাক: Teff গ্লাইকোলাইসিস বনাম Treg চর্বি জারণ'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Metaflammation & Therapeutics in Autoimmunity', '৫. মেটাফ্ল্যামেশন ও অটোইমিউন রোগের চিকিৎসা'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Core Takeaways & High-Yield Summary', '৬. মূল শিক্ষা ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Itaconate (Itaconic Acid)', 'আইটাকোনেট (আইটাকোনিক অ্যাসিড)'),
        definition: l(
          'Anti-inflammatory metabolite synthesized in M1 macrophages from cis-aconitate by ACOD1 (IRG1); competitively inhibits succinate dehydrogenase (Complex II), alkylates KEAP1 to activate Nrf2, and blocks NLRP3 inflammasome activation.',
          'এম১ ম্যাক্রোফেজে ACOD1 দ্বারা উৎপন্ন প্রাকৃতিক প্রদাহ-বিরোধী যৌগ; যা কমপ্লেক্স ২ এনজাইমকে প্রতিহত করে এবং Nrf2 সক্রিয় করে কোষকে রক্ষা করে।'
        ),
      },
      {
        term: l('The Broken TCA Cycle', 'ভাঙা ক্রেবস চক্র (The Broken TCA Cycle)'),
        definition: l(
          'Metabolic rewiring in LPS-activated M1 macrophages featuring two enzymatic blocks: down-regulation of isocitrate dehydrogenase (IDH) causing citrate buildup, and succinate dehydrogenase (SDH) inhibition causing succinate accumulation.',
          'প্রদাহজনক ম্যাক্রোফেজে সাইট্রিক এসিড চক্রের দুটি জায়গায় বন্ধ হয়ে যাওয়া: যার ফলে সাইট্রেট ও সাকসিনেট জমা হয়ে প্রদাহজনক সংকেত পাঠায়।'
        ),
      },
      {
        term: l('Succinate-HIF1alpha Axis', 'সাকসিনেট-HIF1alpha অক্ষ'),
        definition: l(
          'Mechanism where accumulated cytosolic succinate competitively inhibits prolyl hydroxylases (PHDs), preventing HIF-1alpha degradation; stabilized HIF-1alpha drives transcription of IL-1beta and glycolytic enzymes.',
          'সাইটোপ্লাজমে অতিরিক্ত সাকসিনেট জমা হয়ে HIF-1alpha প্রোটিন ধ্বংস হতে দেয় না; যার ফলে ইন্টারলিউকিন-১ বিটা নামক তীব্র প্রদাহজনক হরমোন তৈরি হয়।'
        ),
      },
      {
        term: l('Arginase-1 (Arg1)', 'আরজিনেজ-১ (Arg1)'),
        definition: l(
          'Hallmark enzyme of anti-inflammatory M2 macrophages; converts L-arginine into L-ornithine and urea, competing with iNOS and feeding polyamine/proline pathways for tissue repair and collagen synthesis.',
          'এম২ ম্যাক্রোফেজের প্রধান এনজাইম; যা আরজিনিন ভেঙে অরনিথিন তৈরি করে টিস্যু মেরামত ও ক্ষত নিরাময়ে কোলাজেন তৈরি বাড়ায়।'
        ),
      },
      {
        term: l('Metaflammation', 'মেটাফ্ল্যামেশন (Metaflammation)'),
        definition: l(
          'Chronic, low-grade, sterile metabolic inflammation triggered by nutrient excess (saturated fatty acids, glucose) in adipose tissue and liver, mediated by macrophage M1 polarization and IKKbeta/NF-kappaB activation.',
          'অতিরিক্ত খাবার ও চর্বির কারণে চর্বিকলা ও যকৃতে শুরু হওয়া মৃদু কিন্তু দীর্ঘস্থায়ী প্রদাহ যা ইনসুলিন রেজিস্ট্যান্স ও ডায়াবেটিসের মূল কারণ।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Biochemical Mechanism of Itaconate as a Metabolic Anti-Inflammatory Checkpoint', 'মেটাবলিক প্রদাহ-নিবারক হিসেবে আইটাকোনেটের আণবিক কার্যকৌশল'),
        steps: [
          l(
            'Step 1: Following toll-like receptor 4 (TLR4) activation by bacterial lipopolysaccharide (LPS), the immune-responsive gene 1 (ACOD1 / IRG1) is transcriptionally upregulated thousands-fold within the mitochondrial matrix.',
            'ধাপ ১: ব্যাকটেরিয়ার টক্সিন (LPS) পেলে ম্যাক্রোফেজের মাইটোকন্ড্রিয়ায় ACOD1 এনজাইম হাজার গুণ বৃদ্ধি পায়।'
          ),
          l(
            'Step 2: ACOD1 captures the TCA cycle intermediate cis-aconitate and catalyzes its stereospecific decarboxylation into itaconate (2-methylidenebutanedioic acid), shunting carbon flux away from isocitrate dehydrogenase.',
            'ধাপ ২: ACOD1 ক্রেবস চক্রের সিস-অ্যাকোনিটেট অণু থেকে কার্বন ডাই-অক্সাইড অপসারণ করে আইটাকোনেট তৈরি করে।'
          ),
          l(
            'Step 3: Itaconate acts as a structural competitive inhibitor of succinate dehydrogenase (SDH / Complex II). Reversible active site blockade stops succinate oxidation, suppressing mitochondrial ROS generation driven by reverse electron transport.',
            'ধাপ ৩: আইটাকোনেট দেখতে সাকসিনেটের মতো হওয়ায় এটি কমপ্লেক্স ২ এনজাইমকে আটকে রাখে, যার ফলে মাইটোকন্ড্রিয়া থেকে ক্ষতিকর মুক্ত র্যাডিক্যাল বের হতে পারে না।'
          ),
          l(
            'Step 4: As an electrophilic dicarboxylic acid, itaconate undergoes Michael addition with nucleophilic cysteinyl sulfhydryls on KEAP1 (specifically Cys151), releasing Nrf2 to transcribe master antioxidant genes (HO-1, NQO1, GCL).',
            'ধাপ ৪: এটি KEAP1 প্রোটিনকে নিষ্ক্রিয় করে বিখ্যাত Nrf2 অ্যান্টিঅক্সিডেন্ট পথ চালু করে যা কোষকে ধ্বংসের হাত থেকে বাঁচায়।'
          ),
          l(
            'Step 5: Itaconate directly alkylates Cys22 on fructose-1,6-bisphosphate aldolase A, blunting glycolytic flux, and directly inhibits the NLRP3 inflammasome, preventing caspase-1 activation and mature IL-1beta secretion.',
            'ধাপ ৫: এটি গ্লাইকোলাইসিস কমিয়ে দেয় এবং NLRP3 ইনফ্লামাসোম বন্ধ করে ইন্টারলিউকিন-১ বিটা নিঃসরণ আটকে দেয়।'
          ),
        ],
        conclusion: l(
          'Itaconate serves as an indispensable endogenous negative feedback brake, allowing macrophages to exert antimicrobial killing while preventing fatal septic shock and hyper-inflammatory tissue destruction.',
          'ফলে আইটাকোনেট একটি শক্তিশালী প্রাকৃতিক ব্রেক হিসেবে কাজ করে যা জীবাণু মারার ক্ষমতা অক্ষুণ্ণ রেখেও প্রাণঘাতী সেপটিক শক ও অতিরিক্ত টিস্যু ক্ষয় প্রতিরোধ করে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why do anti-inflammatory M2 macrophages express high levels of Arginase-1, whereas pro-inflammatory M1 macrophages express Inducible Nitric Oxide Synthase (iNOS)?',
          'প্রদাহ-নিবারক এম২ ম্যাক্রোফেজ কেন প্রচুর আরজিনেজ-১ তৈরি করে অথচ প্রদাহজনক এম১ ম্যাক্রোফেজ iNOS এনজাইম ব্যবহার করে?'
        ),
        answer: l(
          'Both enzymes compete for the same common substrate, L-arginine. In M1 macrophages, IFN-gamma and LPS induce iNOS, which converts arginine to nitric oxide (NO•) and citrulline, producing cytotoxic reactive nitrogen species to kill pathogens. In M2 macrophages, IL-4 and IL-13 induce Arginase-1 (Arg1), which hydrolyzes arginine to L-ornithine and urea. Ornithine feeds ornithine decarboxylase to synthesize polyamines and prolyl residues essential for cell proliferation, collagen deposition, and wound healing.',
          'উভয় এনজাইমই একই সাবস্ট্রেট এল-আরজিনিনের জন্য প্রতিযোগিতা করে। এম১ ম্যাক্রোফেজে iNOS আরজিনিন থেকে বিষাক্ত নাইট্রিক অক্সাইড তৈরি করে জীবাণু ধ্বংস করে। অন্যদিকে এম২ কোষে আরজিনেজ-১ আরজিনিনকে ভেঙে অরনিথিন তৈরি করে যা নতুন কোষ বৃদ্ধি ও ক্ষত নিরাময়ে কোলাজেন প্রোটিন তৈরিতে ব্যবহৃত হয়।'
        ),
      },
    ],
    organelles: [],
  },
  organ3DExplorer: immuno3DData,
  interactiveDiagram: {
    id: 'diag-metabolism33-immunometabolism',
    title: l('Interactive Molecular Circuit of Metabolic Rewiring in Pro-Inflammatory vs Anti-Inflammatory Immune Cells', 'প্রদাহজনক বনাম নিরাময়কারী প্রতিরোধ কোষের বিপাকীয় পুনর্বিন্যাসের ইন্টারেক্টিভ মানচিত্র'),
    disclaimer: l('Interactive educational diagram illustrating macrophage and T cell metabolic reprogramming.', 'ম্যাক্রোফেজ ও টি-কোষের বিপাকীয় পুনর্বিন্যাস প্রদর্শনকারী শিক্ষামূলক ডায়াগ্রাম।'),
    description: l(
      'Follow the divergence of metabolic phenotypes: the broken TCA cycle and itaconate synthesis of M1 macrophages versus the fatty acid oxidation and arginase pathways of M2 tissue-repairing cells.',
      'বিপাকীয় রূপান্তরের পথগুলো পর্যবেক্ষণ করুন: এম১ ম্যাক্রোফেজের ভাঙা ক্রেবস চক্র ও আইটাকোনেট সংশ্লেষণ বনাম এম২ কোষের চর্বি জারণ ও আরজিনেজ পথ।'
    ),
    svgType: 'pathway-nodes',
    items: [
      {
        id: 'node-m1-glycolytic-switch',
        label: l('1. M1 Glycolytic Switch & GLUT1 Upregulation', '১. এম১ গ্লাইকোলাইটিক রূপান্তর ও GLUT1 বৃদ্ধি'),
        description: l('LPS/TLR4 signaling activates mTORC1 and HIF-1alpha, driving massive GLUT1 transcription.', 'LPS সংকেতে mTORC1 ও HIF-1alpha সক্রিয় হয়ে কোষঝিল্লিতে GLUT1 বৃদ্ধি করে।'),
        details: l('Switches energy metabolism to aerobic glycolysis to rapidly generate biosynthetic precursors.', 'দ্রুত শক্তি ও কাঁচামাল পেতে অবাধ গ্লাইকোলাইসিসে মোড় নেয়।'),
        sectionId: 'structure',
        color: '#ef4444',
      },
      {
        id: 'node-citrate-break-lipids',
        label: l('2. TCA Break 1: Citrate Accumulation & Lipid Mediators', '২. ক্রেবস ভাঙন ১: সাইট্রেট সঞ্চয় ও লিপিড সংকেত'),
        description: l('Downregulation of IDH causes citrate to exit via CIC; cleaved by ACLY to acetyl-CoA for prostaglandins.', 'IDH কমে যাওয়ায় সাইট্রেট বের হয়ে প্রোস্টাগ্ল্যান্ডিন ও প্রদাহজনক উপাদান তৈরি করে।'),
        details: l('Supplies acetyl groups for histone acetylation, promoting inflammatory gene transcription.', 'হিস্টোন প্রোটিনে অ্যাসিটাইল গ্রুপ দিয়ে প্রদাহজনক জিনগুলোকে খুলে দেয়।'),
        sectionId: 'mechanism',
        color: '#f59e0b',
      },
      {
        id: 'node-itaconate-synthesis',
        label: l('3. ACOD1 / IRG1 Itaconate Biosynthesis', '৩. ACOD1 / IRG1 আইটাকোনেট জৈবসংশ্লেষণ'),
        description: l('Cis-aconitate is decarboxylated by ACOD1 into itaconate, a master anti-inflammatory metabolite.', 'সিস-অ্যাকোনিটেট ভেঙে আইটাকোনেট তৈরি হয় যা অতিরিক্ত প্রদাহে ব্রেক কষে।'),
        details: l('Inhibits SDH (Complex II), alkylates KEAP1 to trigger Nrf2, and halts inflammasome activity.', 'কমপ্লেক্স ২ বন্ধ করে এবং Nrf2 সক্রিয় করে কোষকে অতিরিক্ত ক্ষতি থেকে বাঁচায়।'),
        sectionId: 'mechanism',
        color: '#10b981',
      },
      {
        id: 'node-succinate-hif1-burst',
        label: l('4. TCA Break 2: Succinate & HIF-1alpha Stabilization', '৪. ক্রেবস ভাঙন ২: সাকসিনেট ও HIF-1alpha স্থায়িত্ব'),
        description: l('SDH inhibition accumulates succinate, blocking PHDs to stabilize HIF-1alpha and transcribe IL-1beta.', 'সাকসিনেট জমে গিয়ে HIF-1alpha ধ্বংস বন্ধ করে ইন্টারলিউকিন-১ বিটা তৈরি বাড়ায়।'),
        details: l('Drives reverse electron transport at Complex I, generating mitochondrial superoxide bursts.', 'কমপ্লেক্স ১-এ উল্টো ইলেকট্রন প্রবাহ ঘটিয়ে ক্ষতিকর মুক্ত র্যাডিক্যাল তৈরি করে।'),
        sectionId: 'mechanism',
        color: '#8b5cf6',
      },
      {
        id: 'node-m2-fao-oxphos',
        label: l('5. M2 Macrophage FAO & Arginase-1 Repair', '৫. এম২ ম্যাক্রোফেজ চর্বি জারণ ও আরজিনেজ-১ নিরাময়'),
        description: l('IL-4 stimulates STAT6/PPARgamma, driving fatty acid oxidation and Arginase-1 to repair tissue.', 'IL-4 হরমোন চর্বি জারণ ও আরজিনেজ বাড়িয়ে নতুন কোষ ও কোলাজেন তৈরি করে ক্ষত সারায়।'),
        details: l('Consumes arginine to starve iNOS, stopping toxic nitric oxide generation.', 'আরজিনিন খরচ করে বিষাক্ত নাইট্রিক অক্সাইড তৈরি বন্ধ করে দেয়।'),
        sectionId: 'integration',
        color: '#06b6d4',
      },
      {
        id: 'node-treg-metabolic-fitness',
        label: l('6. Treg Metabolic Fitness: FOXP3 & CPT-I', '৬. ট্রেগ বিপাকীয় সামর্থ্য: FOXP3 ও CPT-I'),
        description: l('FOXP3 enforces fatty acid oxidation via CPT-I, allowing regulatory T cells to survive in tumors.', 'FOXP3 প্রোটিন চর্বি জারণ সচল রেখে নিয়ন্ত্রক টি-কোষকে দীর্ঘস্থায়ী সুরক্ষা দেয়।'),
        details: l('Thrives in low-glucose, high-lactate microenvironments to suppress auto-immunity.', 'স্বল্প গ্লুকোজ ও উচ্চ ল্যাকটেটের মধ্যেও টিকে থেকে অতিরিক্ত রোগ প্রতিরোধ নিয়ন্ত্রণ করে।'),
        sectionId: 'practice',
        color: '#ec4899',
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'An integrated biochemical map connecting the pro-inflammatory M1 macrophage glycolytic switch, the two-point TCA cycle break, ACOD1 itaconate biosynthesis, succinate-mediated HIF-1alpha stabilization, anti-inflammatory M2 arginase flux, and T cell metabolic divergence.',
      'একটি সমন্বিত জৈবরাসাযনিক মানচিত্র যা এম১ ম্যাক্রোফেজের গ্লাইকোলাইসিস, ক্রেবস চক্রের দুই জায়গায় ভাঙন, ACOD1 আইটাকোনেট তৈরি, সাকসিনেট-HIF-1alpha অক্ষ, এম২ আরজিনেজ পথ এবং টি-কোষের বিপাকীয় রূপান্তরকে সংযুক্ত করে।'
    ),
    steps: [
      l('LPS activates mTORC1/HIF-1alpha to drive GLUT1 and aerobic glycolysis in M1 macrophages.', 'LPS টক্সিন এম১ ম্যাক্রোফেজে GLUT1 এবং অবাধ গ্লাইকোলাইসিস বৃদ্ধি করে।'),
      l('TCA cycle breaks at IDH (accumulating citrate for lipids) and SDH (accumulating succinate).', 'ক্রেবস চক্র ভেঙে গিয়ে সাইট্রেট ও সাকসিনেট জমে প্রদাহজনক সংকেত পাঠায়।'),
      l('ACOD1 synthesizes itaconate, which inhibits SDH and activates the Nrf2 antioxidant response.', 'ACOD1 আইটাকোনেট তৈরি করে যা কমপ্লেক্স ২ বন্ধ করে এবং Nrf2 দ্বারা সুরক্ষা দেয়।'),
      l('IL-4 promotes M2 oxidative phosphorylation and Arginase-1 to produce collagen for tissue healing.', 'IL-4 হরমোন এম২ কোষে চর্বি জারণ ও আরজিনেজ বাড়িয়ে ক্ষত নিরাময় নিশ্চিত করে।'),
    ],
  },
  assessment: {
    question: l(
      'In lipopolysaccharide (LPS)-activated pro-inflammatory M1 macrophages, the TCA cycle is functionally broken at two discrete enzymatic steps. Which two specific enzymes are inhibited, and what critical regulatory metabolites accumulate as a consequence?',
      'LPS দ্বারা সক্রিয় প্রদাহজনক এম১ ম্যাক্রোফেজে সাইট্রিক এসিড চক্র দুটি নির্দিষ্ট স্থানে অকার্যকর হয়ে পড়ে। কোন দুটি নির্দিষ্ট এনজাইম বাধাগ্রস্ত হয় এবং এর ফলে কোন দুটি গুরুত্বপূর্ণ নিয়ন্ত্রক বিপাকীয় উপাদান কোষে জমে যায়?'
    ),
    options: [
      l(
        'Isocitrate dehydrogenase (IDH) is downregulated causing citrate accumulation, and succinate dehydrogenase (SDH) is inhibited by itaconate causing succinate accumulation.',
        'আইসোসাইট্রেট ডিহাইড্রোজিনেজ (IDH) কমে যাওয়ায় সাইট্রেট জমে এবং সাকসিনেট ডিহাইড্রোজিনেজ (SDH) অবরুদ্ধ হওয়ায় সাকসিনেট জমে যায়।'
      ),
      l(
        'Citrate synthase and malate dehydrogenase are irreversibly cleaved by caspase-1.',
        'ক্যাসপেস-১ দ্বারা সাইট্রেট সিন্থেস এবং ম্যালট ডিহাইড্রোজিনেজ ধ্বংস হয়ে যায়।'
      ),
      l(
        'Fumarase and alpha-ketoglutarate dehydrogenase are phosphorylated by protein kinase A.',
        'প্রোটিন কাইনেজ এ দ্বারা ফিউমারেজ এনজাইম নিষ্ক্রিয় হয়ে পড়ে।'
      ),
      l(
        'Pyruvate carboxylase and aconitase are allosterically inhibited by extracellular calcium.',
        'ক্যালসিয়ামের প্রভাবে পাইরুভেট কার্বোক্সিলেজ বন্ধ হয়ে যায়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'In M1 macrophages, the TCA cycle exhibits two breaks: (1) IDH is downregulated, allowing citrate to accumulate and be exported via the citrate carrier (CIC) for inflammatory lipid mediator synthesis; (2) SDH is inhibited by endogenous itaconate produced by ACOD1, causing succinate accumulation. Cytosolic succinate inhibits prolyl hydroxylases (PHDs) to stabilize HIF-1alpha, driving sustained IL-1beta transcription.',
      'এম১ ম্যাক্রোফেজে ক্রেবস চক্রের দুটি জায়গায় ভাঙন দেখা দেয়: (১) IDH কমে যাওয়ায় সাইট্রেট জমে যা সাইটোসোলে এসে প্রদাহজনক লিপিড তৈরি করে; (২) ACOD1 দ্বারা উৎপন্ন আইটাকোনেট SDH-কে বন্ধ করে দেয়, ফলে প্রচুর সাকসিনেট জমা হয়। এই সাকসিনেট HIF-1alpha প্রোটিনকে রক্ষা করে ক্রমাগত ইন্টারলিউকিন-১ বিটা তৈরি করতে থাকে।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Metabolic Soul of the Immune System', 'রোগপ্রতিরোধ ব্যবস্থার বিপাকীয় অন্তঃস্থল'),
          paragraphs: [
            l(
              'For decades, immunology and biochemistry were studied as separate disciplines: immunologists focused on receptors, cytokines, and antibody affinities, while biochemists analyzed enzyme kinetics and metabolic pathways. The emergence of immunometabolism has revealed that cellular metabolism is not merely a supportive housekeeping system that supplies ATP to white blood cells; rather, metabolic fluxes directly dictate immune cell differentiation, activation, and inflammatory output.',
              'বহু দশক ধরে ইমিউনোলজি এবং জৈবরসায়ন আলাদা বিষয় হিসেবে পড়ানো হতো: গবেষকরা একদিকে রিসেপ্টর ও অ্যান্টিবডি নিয়ে কাজ করতেন, অন্যদিকে জৈবরসায়নবিদরা এনজাইমের গতিবিধি দেখতেন। আধুনিক প্রতিরোধ-বিপাক (Immunometabolism) প্রমাণ করেছে যে বিপাক কেবল এটিপি শক্তির জোগানদাতা নয়; বরং কোষে কোন রাসায়নিক বিক্রিয়া চলছে তা সরাসরি রোগপ্রতিরোধকারী কোষের আক্রমণাত্মক বা শান্ত রূপ নির্ধারণ করে।'
            ),
            l(
              'When a macrophage encounters a bacterial pathogen, it undergoes a radical metabolic transformation within minutes, completely dismantling its mitochondrial respiration and ramping up aerobic glycolysis. Understanding these metabolic rewiring events has unlocked revolutionary therapeutic targets for autoimmune disorders, sepsis, and cancer immunotherapy.',
              'একটি ম্যাক্রোফেজ যখন কোনো ব্যাকটেরিয়ার মুখোমুখি হয়, কয়েক মিনিটের মধ্যে এটি তার মাইটোকন্ড্রিয়াল শ্বসন পুরোপুরি ভেঙে ফেলে অবাধ গ্লাইকোলাইসিসে চলে যায়। এই বিপাকীয় পরিবর্তনগুলো বোঝা আধুনিক চিকিৎসা বিজ্ঞানে অটোইমিউন রোগ, সেপসিস এবং ক্যান্সার চিকিৎসার এক নতুন দিগন্ত উন্মোচন করেছে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Macrophage Polarization: The M1 Killer vs M2 Healer Paradigm', 'ম্যাক্রোফেজ মেরুকরণ: এম১ আক্রমণকারী বনাম এম২ নিরাময়কারী রূপ'),
          paragraphs: [
            l(
              'Macrophages exhibit profound functional plasticity, classically categorized into pro-inflammatory M1 and anti-inflammatory M2 phenotypes. Pro-inflammatory M1 macrophages are induced by bacterial endotoxin (lipopolysaccharide, LPS) and interferon-gamma (IFN-gamma). They specialize in antigen presentation, reactive oxygen species (ROS) production, and secretion of cytotoxic cytokines (TNF-alpha, IL-1beta, IL-6).',
              'ম্যাক্রোফেজ কোষগুলো পরিবেশের ওপর নির্ভর করে নিজেদের রূপ বদলাতে পারে, যার প্রধান দুটি রূপ হলো প্রদাহজনক এম১ এবং প্রদাহ-নিবারক এম২। ব্যাকটেরিয়ার টক্সিন (LPS) ও ইন্টারফেরন পেলে এরা আক্রমণাত্মক এম১ কোষে রূপ নেয়। এরা প্রচুর মুক্ত র্যাডিক্যাল তৈরি করে এবং প্রদাহজনক সাইটোকাইন নিঃসরণ করে জীবাণু ধ্বংস করে।'
            ),
            l(
              'To fuel this hostile antimicrobial stance, M1 macrophages execute a metabolic switch identical to the cancer Warburg effect: they dramatically upregulate glucose transporter 1 (GLUT1) and glycolytic enzymes, converting glucose rapidly into lactate even in the presence of atmospheric oxygen. Conversely, anti-inflammatory M2 macrophages (induced by IL-4 and IL-13) depend on fatty acid oxidation and oxidative phosphorylation to fuel tissue repair, matrix remodeling, and resolution of inflammation.',
              'এই আক্রমণাত্মক অবস্থান বজায় রাখতে এম১ কোষগুলো ক্যান্সারের মতো অবাধ গ্লাইকোলাইসিস চালু করে: প্রচুর গ্লুকোজ টেনে নিয়ে তা দ্রুত ল্যাকটেটে পরিণত করে। বিপরীতভাবে, নিরাময়কারী এম২ কোষগুলো চর্বির বিটা-জারণ ও মাইটোকন্ড্রিয়ার স্বাভাবিক শ্বসনের ওপর নির্ভর করে ক্ষত সারায় এবং প্রদাহ প্রশমিত করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Enzymatic Divergence in Arginine Catabolism: iNOS vs Arg1', 'আরজিনিন বিপাকে এনজাইমের ভিন্নতা: iNOS বনাম আরজিনেজ-১'),
          paragraphs: [
            l(
              'A defining metabolic difference between polarized macrophages lies in how they process the amino acid L-arginine. Pro-inflammatory M1 macrophages induce Inducible Nitric Oxide Synthase (iNOS), which oxidizes arginine to generate cytotoxic nitric oxide radicals (NO•) for pathogen destruction. In contrast, anti-inflammatory M2 macrophages express Arginase-1, which hydrolyzes arginine into ornithine and urea to feed collagen synthesis and tissue healing.',
              'মেরুকৃত ম্যাক্রোফেজের সবচেয়ে সুস্পষ্ট পার্থক্য দেখা যায় এল-আরজিনিন ব্যবহারের পদ্ধতিতে। আক্রমণাত্মক এম১ কোষে iNOS এনজাইম আরজিনিনকে ভেঙে জীবাণু ধ্বংসকারী নাইট্রিক অক্সাইড তৈরি করে। অপরপক্ষে নিরাময়কারী এম২ কোষে আরজিনেজ-১ এনজাইম আরজিনিন থেকে ক্ষত নিরাময়ের জন্য প্রয়োজনীয় কোলাজেন ও নতুন কোষ তৈরির কাঁচামাল যোগায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('T Cell Energetics: Effector Glycolysis versus Regulatory Lipid Oxidation', 'টি-কোষ শক্তিবিজ্ঞান: আক্রমণাত্মক গ্লাইকোলাইসিস বনাম নিয়ন্ত্রক চর্বি জারণ'),
          paragraphs: [
            l(
              'T lymphocytes replicate the macrophage paradigm in adaptive immunity. Antigen encounter drives naive T cells into effector T cells (Teff) that rely obligately on high-rate aerobic glycolysis to synthesize effector cytokines. In contrast, regulatory T cells (Tregs) express FOXP3, which enforces fatty acid beta-oxidation, enabling them to survive in nutrient-deprived tissue beds to suppress autoimmunity.',
              'অর্জিত প্রতিরোধ ব্যবস্থায় টি-কোষগুলোও একই নীতি মেনে চলে। জীবাণু শনাক্ত করলে এরা আক্রমণাত্মক টি-কোষে রূপান্তরিত হয়ে দ্রুত গ্লাইকোলাইসিসের মাধ্যমে শক্তি সংগ্রহ করে। অন্যদিকে নিয়ন্ত্রক টি-কোষগুলো (Treg) চর্বি পুড়িয়ে বাঁচে, যার ফলে কঠিন ও অনাহারী পরিবেশেও টিকে থেকে অতিরিক্ত রোগ প্রতিরোধ ব্যবস্থায় ব্রেক কষতে পারে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Metaflammation: When Obesity Turns Nutrition into Chronic Inflammation', 'ক্লিনিক্যাল মেটাফ্ল্যামেশন: স্থূলতায় পুষ্টির অপব্যবহারে দীর্ঘস্থায়ী প্রদাহ'),
          paragraphs: [
            l(
              'In chronic obesity, nutrient overload (excess saturated fatty acids and glucose) triggers sterile, low-grade metabolic inflammation termed metaflammation. Adipose tissue macrophages switch from anti-inflammatory M2 to pro-inflammatory M1 killers, releasing TNF-alpha and IL-1beta that phosphorylate insulin receptor substrate-1 (IRS-1) on inhibitory serine residues, driving systemic insulin resistance.',
              'দীর্ঘস্থায়ী অতিরিক্ত ওজনে পুষ্টির আধিক্যের কারণে চর্বিকলায় কোনো ইনফেকশন ছাড়াই মৃদু কিন্তু মারাত্মক প্রদাহ শুরু হয় যাকে মেটাফ্ল্যামেশন বলে। চর্বিকলার ম্যাক্রোফেজগুলো ক্ষতিকর এম১ রূপ ধারণ করে বিষাক্ত সাইটোকাইন ছাড়ে, যা ইনসুলিন সংবেদক প্রোটিনকে অকেজো করে দিয়ে সারা শরীরে টাইপ ২ ডায়াবেটিস তৈরি করে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Core Principles of Immunometabolic Plasticity and Resolution', 'প্রতিরোধ-বিপাকীয় রূপান্তর ও নিরাময়ের মূল শিক্ষা'),
          paragraphs: [
            l(
              'Immunometabolism demonstrates that metabolic reprogramming is the master gatekeeper of immune function: glycolysis powers aggressive antimicrobial defense and clonal expansion, while mitochondrial oxidative phosphorylation orchestrates tissue resolution and immune tolerance. Modulating these metabolic checkpoints offers revolutionary therapies for human inflammatory diseases.',
              'প্রতিরোধ-বিপাক প্রমাণ করে যে বিপাকীয় রূপান্তরই রোগপ্রতিরোধ ব্যবস্থার মূল নিয়ন্ত্রক: গ্লাইকোলাইসিস আক্রমণাত্মক জীবাণু নিধন ও দ্রুত বংশবৃদ্ধি পরিচালনা করে, আর মাইটোকন্ড্রিয়াল শ্বসন নিরাময় ও সহনশীলতা রক্ষা করে। এই বিপাকীয় নিয়ন্ত্রণ কেন্দ্রগুলোকে লক্ষ্য করে আধুনিক ওষুধ তৈরি জটিল অটোইমিউন রোগ ও প্রদাহ নিরাময়ের শ্রেষ্ঠ উপায়।'
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
          heading: l('The Energetic and Biosynthetic Cost of Pathogen Defense', 'জীবাণু প্রতিরোধে বিপুল শক্তি ও কাঁচামালের প্রয়োজনীয়তা'),
          paragraphs: [
            l(
              'When the immune system is provoked, immune cells undergo one of the most explosive clonal expansions in biology, doubling their mass every eight to twelve hours while secreting picograms of bioactive cytokines and immunoglobulins. This extreme biosynthetic demand requires an instantaneous shift in carbon routing: glucose and glutamine must be shunted into nucleic acid ribose, membrane lipids, and amino acids rather than burned purely for ATP.',
              'জীবাণুর আক্রমণ ঘটলে প্রতিরোধ কোষগুলো প্রতি আট থেকে বারো ঘণ্টায় নিজেদের সংখ্যা দ্বিগুণ করে ফেলে এবং প্রচুর সাইটোকাইন ও অ্যান্টিবডি নিঃসরণ করে। এই বিপুল নতুন উপাদান তৈরির জন্য তাৎক্ষণিকভাবে গ্লুকোজ ও গ্লুটামিনকে সরাসরি ডিএনএ, কোষঝিল্লির চর্বি এবং প্রোটিন তৈরিতে পাঠাতে হয়, কেবল এটিপি তৈরি করে জ্বালানি পুড়িয়ে নষ্ট করা হয় না।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Molecular Mechanics of the Aerobic Glycolytic Switch in Myeloid Cells', 'মায়েলয়েড কোষে অবাধ গ্লাইকোলাইটিক রূপান্তরের আণবিক কৌশল'),
          paragraphs: [
            l(
              'Ligation of TLR4 by LPS recruits MyD88 and TRIF adaptor cascades, which activate the serine/threonine kinase Akt and downstream mTORC1. Active mTORC1 promotes the translation of hypoxia-inducible factor 1-alpha (HIF-1alpha) and c-Myc under normoxic conditions. HIF-1alpha directly binds hypoxia response elements (HREs) in the promoters of GLUT1, hexokinase-2, PFK-1, and LDHA, cementing rapid aerobic glycolytic flux.',
              'LPS টক্সিন কোষঝিল্লির রিসেপ্টরে বসলে Akt এবং mTORC1 এনজাইম সক্রিয় হয়। অক্সিজেনের প্রাচুর্য থাকা সত্ত্বেও এরা HIF-1alpha এবং c-Myc প্রোটিন বৃদ্ধি করে। এই প্রোটিনগুলো সরাসরি GLUT1 বাহক এবং গ্লাইকোলাইসিসের প্রধান এনজাইমগুলোর উৎপাদন বহুগুণ বাড়িয়ে দিয়ে দ্রুত অবাধ গ্লাইকোলাইসিস চালু করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('The Broken TCA Cycle: Succinate & Itaconate Dynamics', 'ভাঙা ক্রেবস চক্র: সাকসিনেট ও আইটাকোনেট গতিবিদ্যা'),
          paragraphs: [
            l(
              'In resting cells, the tricarboxylic acid (TCA) cycle operates as a continuous circular metabolic wheel that completely oxidizes acetyl-CoA to CO2 while harvesting NADH and FADH2. In LPS-activated M1 macrophages, this circular flux is broken at two distinct enzymatic junctions, converting the TCA cycle into an open biosynthetic distributor that accumulates high levels of citrate and succinate.',
              'স্বাভাবিক কোষে সাইট্রিক এসিড চক্র একটি নিরবচ্ছিন্ন চাকার মতো ঘোরে যা অ্যাসিটাইল-কোএ পুড়িয়ে NADH তৈরি করে। কিন্তু প্রদাহজনক এম১ কোষে এই চাকাটি দুটি নির্দিষ্ট জায়গায় ভেঙে যায়, যার ফলে চক্রটি মুক্ত হয়ে প্রচুর পরিমাণে সাইট্রেট ও সাকসিনেট জমা করতে থাকে।'
            ),
            l(
              'The first break occurs at isocitrate dehydrogenase (IDH), which is transcriptionally repressed by inflammatory cytokines. Accumulated mitochondrial citrate exits to the cytosol via the tricarboxylate carrier (CIC / SLC25A1), where ATP citrate lyase (ACLY) cleaves it into oxaloacetate and acetyl-CoA. Acetyl-CoA fuels de novo synthesis of fatty acids and inflammatory prostaglandins, while donating acetyl groups for histone acetylation to unlock pro-inflammatory gene promoters.',
              'প্রথম ভাঙন ঘটে IDH এনজাইমে, যা সাইট্রেট জমিয়ে রাখে। এই সাইট্রেট সাইটোপ্লাজমে বেরিয়ে এসে ACLY দ্বারা ভেঙে অ্যাসিটাইল-কোএ তৈরি করে। এই অ্যাসিটাইল-কোএ প্রদাহজনক প্রোস্টাগ্ল্যান্ডিন তৈরি করে এবং হিস্টোন প্রোটিনে যুক্ত হয়ে প্রদাহের জিনগুলোকে সক্রিয় করে তোলে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Itaconate: The Endogenous Anti-Inflammatory Brake', 'আইটাকোনেট: প্রাকৃতিক প্রদাহ-বিরোধী নিয়ন্ত্রক'),
          paragraphs: [
            l(
              'Concurrently, the mitochondrial matrix enzyme immune-responsive gene 1 (ACOD1 / IRG1) is upregulated more than a thousand-fold. ACOD1 diverts cis-aconitate away from the broken TCA cycle, decarboxylating it into itaconate (2-methylidenebutanedioic acid). Itaconate is an endogenous anti-inflammatory metabolite that acts as a structural competitive inhibitor of succinate dehydrogenase (SDH / Complex II), shutting down mitochondrial ROS production by reverse electron transport.',
              'একই সাথে মাইটোকন্ড্রিয়ায় ACOD1 এনজাইম হাজার গুণ বৃদ্ধি পেয়ে সিস-অ্যাকোনিটেট থেকে প্রচুর আইটাকোনেট তৈরি করে। আইটাকোনেট হলো একটি চমৎকার প্রাকৃতিক প্রদাহ-নিবারক যা সাকসিনেট ডিহাইড্রোজিনেজ (কমপ্লেক্স ২) এনজাইমকে আটকে রেখে ক্ষতিকর মুক্ত র্যাডিক্যাল উৎপাদন বন্ধ করে দেয়।'
            ),
            l(
              'Furthermore, itaconate undergoes electrophilic alkylation with reactive cysteine residues on KEAP1, liberating the master antioxidant transcription factor Nrf2 to transcribe heme oxygenase-1 (HO-1) and glutathione synthesis genes. By simultaneously inhibiting SDH, activating Nrf2, and blocking the NLRP3 inflammasome, itaconate serves as an indispensable cell-intrinsic negative feedback brake that halts lethal hyper-inflammation.',
              'তাছাড়া আইটাকোনেট KEAP1 প্রোটিনের সাথে যুক্ত হয়ে বিখ্যাত Nrf2 অ্যান্টিঅক্সিডেন্ট পথকে উদ্দীপ্ত করে। এভাবে একাধিক উপায়ে কাজ করে আইটাকোনেট কোষের অতিরিক্ত প্রদাহে লাগাম টেনে ধরে এবং শরীরকে মারাত্মক সেপটিক শকের হাত থেকে রক্ষা করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Reverse Electron Transport and Succinate Oxidation in Ischemia-Reperfusion', 'উল্টো ইলেকট্রন পরিবহন এবং ইস্কেমিয়া-রিপারফিউশনে সাকসিনেট জারণ'),
          paragraphs: [
            l(
              'Succinate accumulation has devastating consequences during cardiac and cerebral ischemia-reperfusion injury. During tissue hypoxia, succinate builds up massively. Upon rapid reperfusion of oxygen, succinate dehydrogenase rapidly oxidizes the pooled succinate, driving reverse electron transport (RET) backwards from Complex II into Complex I to generate massive bursts of cytotoxic superoxide, precipitating necrotic cell death.',
              'হার্ট অ্যাটাক বা ব্রেন স্ট্রোকের সময় রক্ত চলাচল বন্ধ থাকলে কোষে বিপুল পরিমাণ সাকসিনেট জমে। পরবর্তীতে হঠাৎ রক্ত চলাচল শুরু হলে জমে থাকা সাকসিনেট খুব দ্রুত জারিত হয়ে কমপ্লেক্স ১-এর মধ্য দিয়ে উল্টো ইলেকট্রন প্রবাহ ঘটিয়ে প্রচুর ধ্বংসাত্মক মুক্ত র্যাডিক্যাল তৈরি করে, যা কলা বা অঙ্গকে চিরতরে নষ্ট করে দেয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Translational Immunometabolism: Therapeutics in Sepsis and Autoimmunity', 'চিকিৎসায় প্রতিরোধ-বিপাকের ব্যবহার: সেপসিস ও অটোইমিউন রোগ'),
          paragraphs: [
            l(
              'Repurposing cellular metabolic pathways offers groundbreaking precision treatments across clinical immunology. Cell-permeable itaconate derivatives (4-octyl itaconate) are under active development to halt septic cytokine storms. In autoimmunity, selective inhibitors of glutaminolysis (CB-839) or glycolysis (2-deoxyglucose) selectively starve pathogenic autoreactive effector T cells while leaving regulatory Tregs unharmed, achieving curative immune tolerance.',
              'কোষীয় বিপাক পরিবর্তন করে চিকিৎসা আধুনিক ইমিউনোলজির সবচেয়ে সম্ভাবনাময় ক্ষেত্র। আইটাকোনেট ডেরিভেটিভ ওষুধ সেপটিক শক ও অতিরিক্ত প্রদাহ নিয়ন্ত্রণে পরীক্ষা করা হচ্ছে। অটোইমিউন রোগে ক্ষতিকর টি-কোষগুলোর গ্লুকোজ বা গ্লুটামিন বন্ধ করে দিয়ে সুস্থ নিয়ন্ত্রক কোষগুলোকে বাঁচিয়ে রাখা সম্ভব হচ্ছে, যা দীর্ঘস্থায়ী নিরাময় নিশ্চিত করে।'
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
          heading: l('T Cell Epigenetic Remodeling via Alpha-KG / Succinate Ratios', 'আলফা-কেজি ও সাকসিনেট অনুপাতের মাধ্যমে টি-কোষের এপিজেনেটিক নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'T cell fate decisions are governed epigenetically by the intracellular ratio of alpha-ketoglutarate to succinate. Alpha-ketoglutarate serves as an obligate co-substrate for DNA demethylases (TET enzymes) and histone demethylases (Jumonji-C domain KDMs), maintaining an open chromatin state that permits differentiation. In contrast, accumulating succinate acts as a competitive antagonist of these dioxygenases, promoting chromatin hypermethylation and enforcing memory T cell stemness.',
              'টি-কোষের দীর্ঘস্থায়ী স্মৃতির রূপ এপিজেনেটিকভাবে আলফা-কিটোগ্লুটারেট এবং সাকসিনেটের অনুপাতের ওপর নির্ভর করে। আলফা-কেজি ডিএনএ ডিমিথিলেজ (TET) এনজাইমকে সচল রেখে ক্রোমাটিন খুলে দেয়। অপরপক্ষে অতিরিক্ত সাকসিনেট এই এনজাইমগুলোকে বন্ধ করে ডিএনএ মিথাইলেশন বাড়ায়, যা মেমোরি টি-কোষকে আজীবন টিকিয়ে রাখতে সাহায্য করে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('T Cell Immunometabolism: Teff Glycolysis vs Treg Lipid Oxidation', 'টি-কোষ প্রতিরোধ-বিপাক: Teff গ্লাইকোলাইসিস বনাম Treg চর্বি জারণ'),
          paragraphs: [
            l(
              'T lymphocytes exhibit equally dramatic metabolic reprogramming during adaptive immune responses. Naive T cells circulate in a quiescent metabolic state supported by low-rate fatty acid oxidation. Upon antigen encounter and CD28 costimulation, the PI3K-Akt-mTORC1 and Myc cascades are triggered, driving explosive upregulation of GLUT1, hexokinase II, and lactate dehydrogenase A (LDHA) to fuel clonal expansion and effector cytokine secretion (IFN-gamma, IL-17).',
              'অর্জিত প্রতিরোধ ব্যবস্থায় টি-কোষগুলোও চমৎকার বিপাকীয় রূপান্তর প্রদর্শন করে। শান্ত টি-কোষগুলো মৃদু চর্বি জারণে বেঁচে থাকে। কিন্তু অ্যান্টিজেন শনাক্ত করলেই mTORC1 ও Myc সক্রিয় হয়ে ওঠে, যা GLUT1 বাহক বহুগুণ বাড়িয়ে দ্রুত অবাধ গ্লাইকোলাইসিস শুরু করে এবং বিপুল সংখ্যাবৃদ্ধি ঘটায়।'
            ),
            l(
              'In stark contrast, immunosuppressive regulatory T cells (Tregs) express the lineage-defining transcription factor FOXP3, which represses Myc and glycolytic gene transcription while upregulating carnitine palmitoyltransferase-1 (CPT-I). Enforced reliance on fatty acid beta-oxidation and oxidative phosphorylation confers a decisive survival advantage, allowing Tregs to thrive in low-glucose, high-lactate tumor microenvironments where effector T cells undergo metabolic exhaustion.',
              'বিপরীতভাবে, নিয়ন্ত্রক টি-কোষগুলো (Tregs) তাদের FOXP3 জিনের মাধ্যমে গ্লাইকোলাইসিস বন্ধ রেখে চর্বি জারণ সচল রাখে। চর্বি পুড়িয়ে বাঁচার এই অনন্য ক্ষমতার কারণে টিউমারের প্রতিকূল ও অ্যাসিডিক পরিবেশে আক্রমণাত্মক টি-কোষগুলো ক্লান্ত হয়ে মারা গেলেও ট্রেগ কোষগুলো দিব্যি বেঁচে থেকে ক্যান্সারকে সুরক্ষা দেয়।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Therapeutic Frontiers in Immunometabolism & Clinical Takeaways', 'প্রতিরোধ-বিপাক চিকিৎসার ভবিষ্যৎ দিগন্ত ও প্রধান শিক্ষা'),
          paragraphs: [
            l(
              'Pharmacological manipulation of immunometabolism has emerged as a frontline therapeutic strategy across multiple disease states. Dimethyl fumarate (DMF), an itaconate-mimetic derivative approved for multiple sclerosis, alkylates cysteine residues to dampen neuroinflammation and activate Nrf2. Meanwhile, in immuno-oncology, overcoming T-cell metabolic exhaustion through checkpoint inhibitors and metabolic reprogramming is revitalizing tumor destruction.',
              'প্রতিরোধ-বিপাক নিয়ন্ত্রণ আধুনিক চিকিৎসায় এক বৈপ্লবিক সাফল্য এনেছে। মাল্টিপল স্ক্লেরোসিসের ওষুধ ডাইমিথাইল ফিউমারেট আইটাকোনেটের মতো কাজ করে স্নায়ুর প্রদাহ কমায়। অন্যদিকে ক্যান্সার চিকিৎসায় ক্লান্ত টি-কোষগুলোর বিপাকীয় শক্তি ফিরিয়ে দিয়ে ক্যান্সার ধ্বংস করার নতুন দ্বার উন্মোচিত হয়েছে।'
            ),
          ],
        },
      ],
    },
  },
}
