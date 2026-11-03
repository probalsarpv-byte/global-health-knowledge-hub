import type { ContentDepth } from '../../content/lessonSchema'

export interface True3DStructureInfo {
  id: string
  name: { en: string; bn: string }
  category: { en: string; bn: string }
  membraneLocation: { en: string; bn: string }
  stoichiometry: { en: string; bn: string }
  sectionId: string
  color: number
  explanations: Record<ContentDepth, { en: string; bn: string }>
}

export const INTESTINAL_ABSORPTION_STRUCTURES: True3DStructureInfo[] = [
  {
    id: 'sglt1',
    name: {
      en: 'SGLT1 Transporter Complex',
      bn: 'এসজিএলটি১ পরিবহনকারী কমপ্লেক্স',
    },
    category: {
      en: 'Secondary Active Symporter',
      bn: 'সেকেন্ডারি সক্রিয় সিমপোর্টার',
    },
    membraneLocation: {
      en: 'Apical Brush-Border Membrane',
      bn: 'শীর্ষ ব্রাশ-বর্ডার ঝিল্লি',
    },
    stoichiometry: {
      en: '2 Na+ : 1 D-Glucose / D-Galactose',
      bn: '২ Na+ : ১ ডি-গ্লুকোজ / ডি-গ্যালাকটোজ',
    },
    sectionId: 'mechanism',
    color: 0xf59e0b, // Amber Gold
    explanations: {
      foundation: {
        en: 'SGLT1 is a molecular gate powered by salt. Because the enterocyte continuously pumps sodium outside into the blood, sodium strongly rushes in from digested food, pulling glucose inside with it even when sugar levels in the cell are high.',
        bn: 'এসজিএলটি১ লবণের শক্তিতে চালিত আণবিক ফটক। কোষ প্রতিনিয়ত রক্তে সোডিয়াম বের করে দেয়ায় পরিপাককৃত খাবার থেকে সোডিয়াম হুড়মুড় করে কোষে ঢোকে এবং চিনির অণুকে নিজের সাথে টেনে কোষের ভেতরে নিয়ে আসে।',
      },
      academic: {
        en: 'High-affinity (Km ~0.5 mM), low-capacity secondary active symporter. Binding of 2 extracellular Na+ ions induces an allosteric conformational shift from outward-facing to inward-facing state, transferring D-glucose against its chemical concentration gradient.',
        bn: 'উচ্চ-আসক্তিসম্পন্ন (Km ~০.৫ মিলি মোলার) সেকেন্ডারি সক্রিয় সিমপোর্টার। বহিঃকোষীয় ২টি সোডিয়াম আয়ন যুক্ত হলে বাহকের রূপান্তর ঘটে, যা রাসায়নিক ঘনমাত্রার বিপরীত দিকে ডি-গ্লুকোজ পরিবহন করে।',
      },
      advanced: {
        en: 'Electrogenic transport mechanism generating ~2 inward elementary charges per cycle. Under high postprandial luminal glucose (>30 mM), apical SGLT1 signaling mobilizes rapid cytoskeletal-assisted recruitment of reserve GLUT2 vesicles directly into the brush border (Kellett & Brot-Laroche model).',
        bn: 'ইলেক্ট্রোজেঙ্ক পরিবহন চক্র প্রতি ~২ একক ধনাত্মক আধান কোষে আনে। খাদ্যগ্রহণের পর লুমেনে গ্লুকোজের উচ্চ ঘনমাত্রায় (>৩০ মিলি মোলার) এটি ক্যালসিয়াম সংকেতের মাধ্যমে বেসোল্যাটারাল GLUT2 ভেসিকলকে শীর্ষ ব্রাশ-বর্ডারে স্থানান্তরিত করে শোষণ ক্ষমতা বহুগুণ বৃদ্ধি করে।',
      },
    },
  },
  {
    id: 'glut2',
    name: {
      en: 'Basolateral GLUT2 Carrier',
      bn: 'বেসোল্যাটারাল গ্লুট২ বাহক',
    },
    category: {
      en: 'Facilitated Diffusion Uniporter',
      bn: 'সহায়তাপ্রাপ্ত ব্যাপন ইউনিপোর্টার',
    },
    membraneLocation: {
      en: 'Basolateral Membrane & Subepithelial Pole',
      bn: 'বেসোল্যাটারাল ঝিল্লি ও সাব-এপিথেলিয়াল প্রান্ত',
    },
    stoichiometry: {
      en: 'Hexose Uniporter (Glucose, Fructose, Galactose)',
      bn: 'হেক্সোজ ইউনিপোর্টার (গ্লুকোজ, ফ্রুক্টোজ, গ্যালাকটোজ)',
    },
    sectionId: 'mechanism',
    color: 0x3b82f6, // Royal Blue
    explanations: {
      foundation: {
        en: 'GLUT2 acts as an exit tunnel at the bottom of the intestinal cell. Once glucose and other sugars build up inside the cell, GLUT2 lets them flow out smoothly into the bloodstream without using any energy.',
        bn: 'গ্লুট২ অন্ত্রের কোষের নিচের দিকের নির্গমন পথ হিসেবে কাজ করে। কোষের ভেতরে গ্লুকোজ জমে উঠলে এটি কোনো বাড়তি শক্তি ছাড়াই অনায়াসে রক্তপ্রবাহে বের হয়ে যেতে সাহায্য করে।',
      },
      academic: {
        en: 'Low-affinity, high-capacity facilitated diffusion carrier (Km ~15–20 mM). It operates down the chemical concentration gradient, delivering monosaccharides into the lamina propria interstitial fluid for capillary uptake.',
        bn: 'স্বল্প-আসক্তি কিন্তু উচ্চ-ক্ষমতাসম্পন্ন সহায়তাপ্রাপ্ত ব্যাপন বাহক (Km ~১৫-২০ মিলি মোলার)। এটি ঘনমাত্রার নতিমাত্রা অনুযায়ী রক্তনালির সাব-এন্ডোথেলিয়াল ফাঁকা স্থানে মনোস্যাকারাইড নির্গমন করে।',
      },
      advanced: {
        en: 'Bi-directional Class I hexose uniporter. Mutations in SLC2A2 cause Fanconi-Bickel syndrome (glycogen accumulation and intestinal malabsorption). Dynamic trafficking between basolateral and apical poles is regulated by luminal sweetness and stress kinase p38 MAPK.',
        bn: 'দ্বিমুখী ক্লাস ১ হেক্সোজ ইউনিপোর্টার। SLC2A2 জিনের মিউটেশন ফ্যানকোনি-বিকেল সিন্ড্রোম ঘটায়। খাদ্যের মিষ্টতা এবং p38 MAPK কাইনেজ দ্বারা এর বেসোল্যাটারাল ও শীর্ষ ঝিল্লির মাঝে ট্রাফিকিং নিয়ন্ত্রিত হয়।',
      },
    },
  },
  {
    id: 'na-k-atpase',
    name: {
      en: 'Basolateral Na+/K+-ATPase Pump',
      bn: 'বেসোল্যাটারাল Na+/K+-এটিপেজ পাম্প',
    },
    category: {
      en: 'Primary Active Ion Translocase',
      bn: 'প্রাথমিক সক্রিয় আয়ন পাম্প',
    },
    membraneLocation: {
      en: 'Basolateral Membrane',
      bn: 'বেসোল্যাটারাল ঝিল্লি',
    },
    stoichiometry: {
      en: '3 Na+ out : 2 K+ in : 1 ATP hydrolyzed',
      bn: '৩ Na+ বহির্গমন : ২ K+ প্রবেশ : ১ ATP হাইড্রোলাইসিস',
    },
    sectionId: 'mechanism',
    color: 0xef4444, // Crimson Red
    explanations: {
      foundation: {
        en: 'The battery of the gut cell. It burns cellular energy (ATP) around the clock to pump 3 sodium ions out for every 2 potassium ions brought in, keeping the cell interior low in sodium so absorption never stops.',
        bn: 'অন্ত্রের কোষের মূল বিদ্যুৎকেন্দ্র বা ব্যাটারি। এটি কোষের শক্তি (ATP) খরচ করে অনবরত ৩টি সোডিয়াম বাইরে ঠেলে দেয় এবং ২টি পটাশিয়াম ভেতরে আনে, যার ফলে কোষে সোডিয়ামের ঘাটতি বজায় থাকে এবং শোষণ নিরবচ্ছিন্ন থাকে।',
      },
      academic: {
        en: 'P-type ATPase maintaining the steep intracellular-to-extracellular electrochemical sodium gradient (~12–15 mM inside vs. ~140 mM extracellular). This gradient drives secondary active transport across the apical membrane.',
        bn: 'পি-টাইপ এটিপেজ যা কোষের ভেতরে ও বাইরে তীব্র সোডিয়াম ইলেক্ট্রোকেমিক্যাল গ্রেডিয়েন্ট বজায় রাখে (কোষে ~১২-১৫ মিলি মোলার বনাম রক্তে ~১৪০ মিলি মোলার)। এই গ্রেডিয়েন্টই ব্রাশ-বর্ডারের শোষণকে সচল রাখে।',
      },
      advanced: {
        en: 'Consumes ~30-40% of enterocyte resting metabolic ATP production. Inhibited specifically by cardiac glycosides (ouabain). Downregulation during severe metabolic endotoxemia or mucosal ischemia collapses transepithelial water and nutrient flux.',
        bn: 'এন্টারোসাইটের বিশ্রামকালীন ৩০-৪০% ATP এই পাম্পেই ব্যয় হয়। কার্ডিয়াক গ্লাইকোসাইড (উয়াবাইন) দ্বারা এটি বাধাপ্রাপ্ত হয়। গুরুতর এন্দোটক্সেমিয়া বা রক্তস্বল্পতায় এটি নিষ্ক্রিয় হলে অন্ত্রের পানি ও পুষ্টি শোষণ সম্পূর্ণ ধসে পড়ে।',
      },
    },
  },
  {
    id: 'brush-border',
    name: {
      en: 'Microvillar Brush-Border Carpet',
      bn: 'মাইক্রোভিলাই ব্রাশ-বর্ডার গালিচা',
    },
    category: {
      en: 'Specialized Apical Surface Area',
      bn: 'বিশেষায়িত শীর্ষ শোষণ তল',
    },
    membraneLocation: {
      en: 'Apical Enterocyte Membrane',
      bn: 'শীর্ষ এন্টারোসাইট ঝিল্লি',
    },
    stoichiometry: {
      en: 'Thousands of actin-anchored microvilli per cell',
      bn: 'প্রতি কোষে কয়েক হাজার অ্যাক্টিন-সংযুক্ত মাইক্রোভিলাই',
    },
    sectionId: 'structure',
    color: 0x10b981, // Emerald Green
    explanations: {
      foundation: {
        en: 'Microscopic hair-like projections covering the top of each cell like a thick carpet. They expand the absorbing surface of your intestine to the size of a tennis court so food is absorbed quickly and completely.',
        bn: 'প্রতিটি কোষের মাথার ওপর পুরু গালিচার মতো ঘন ক্ষুদ্র চুলের মতো বর্ধিতাংশ। এগুলো অন্ত্রের শোষণক্ষম তলকে একটি টেনিস কোর্টের সমান বিস্তৃত করে, যাতে খাদ্য দ্রুত ও সম্পূর্ণরূপে শোষিত হতে পারে।',
      },
      academic: {
        en: 'Cylindrical apical extensions (~1 μm length, ~0.1 μm diameter) supported by actin microfilament bundles crosslinked with fimbrin and villin. Embedded with digestive disaccharidases (lactase, sucrase-isomaltase) and peptidases.',
        bn: 'অ্যাক্টিন মাইক্রোফিলামেন্ট এবং ভিলিন প্রোটিন দ্বারা গঠিত নলাকার প্রবর্ধক (~১ মাইক্রোমিটার দীর্ঘ)। এর ঝিল্লিতে ল্যাকটেজ, সুক্রেজ-আইসোমল্টেজ এবং পেপটাইডেজের মতো পরিপাককারী উৎসেচকগুলো সরাসরি প্রোথিত থাকে।',
      },
      advanced: {
        en: 'Negative surface glycocalyx charge prevents bacterial adhesion while concentrating cationic co-substrates ($Ca^{2+}, Na^+$). Microvillar disruption characterizes celiac sprue enteropathy, pediatric rotaviral diarrhea, and severe zinc deficiency.',
        bn: 'গ্লাইকোক্যালিক্সের ঋণাত্মক আধান ক্ষতিকর ব্যাকটেরিয়া আটকাতে সাহায্য করে এবং ক্যাটায়ন ($Ca^{2+}, Na^+$) পুষ্টিকে ঘনীভূত করে। সিলিয়াক ডিজিজ, রোটাভাইরাস ডায়রিয়া এবং তীব্র জিংকের ঘাটতিতে এই ব্রাশ-বর্ডার ধ্বংসপ্রাপ্ত হয়।',
      },
    },
  },
  {
    id: 'enterocyte',
    name: {
      en: 'Polarized Columnar Enterocyte',
      bn: 'পোলারাইজড স্তম্ভাকার এন্টারোসাইট কোষ',
    },
    category: {
      en: 'Primary Intestinal Absorptive Cell',
      bn: 'প্রধান অন্ত্রীয় শোষণকারী কোষ',
    },
    membraneLocation: {
      en: 'Simple Epithelial Monolayer',
      bn: 'একস্তরী কলামনার এপিথেলিয়াম',
    },
    stoichiometry: {
      en: 'Tight junctions seal paracellular space (<15 Å pore size)',
      bn: 'টাইট জাংশন প্যারাসেলুলার পথ নিয়ন্ত্রণ করে (<১৫ Å ছিদ্র)',
    },
    sectionId: 'structure',
    color: 0xfde047, // Yellow Gold
    explanations: {
      foundation: {
        en: 'Tall, specialized intestinal cells that stand side-by-side like bricks with watertight cement (tight junctions) between them. They ensure food only enters through monitored molecular doorways.',
        bn: 'অন্ত্রের লম্বা বিশেষায়িত কোষ যা ইটের মতো পাশাপাশি দাঁড়িয়ে থাকে এবং মাঝখানে পানি-অভেদ্য সিমেন্ট (টাইট জাংশন) থাকে। ফলে পুষ্টি উপাদান কেবল নিয়ন্ত্রিত দরজা দিয়েই ভেতরে ঢুকতে পারে।',
      },
      academic: {
        en: 'Asymmetric columnar epithelial cell characterized by apical-basolateral polarity maintained by tight junctions (claudins, occludins, ZO-1). Life span of 3–5 days before exfoliation at the villus tip.',
        bn: 'শীর্ষ ও পার্শ্বীয় মেরুকরণযুক্ত কলামনার কোষ, যা টাইট জাংশন (ক্লডিন, অকলুডিন, ZO-1) দ্বারা দৃঢ়ভাবে আবদ্ধ থাকে। এর আয়ুষ্কাল মাত্র ৩-৫ দিন, যার পর এটি ভিলাইয়ের শীর্ষ থেকে খসে পড়ে নতুন কোষ দ্বারা প্রতিস্থাপিত হয়।',
      },
      advanced: {
        en: 'Constant crypt-to-villus migration driven by Wnt/$\beta$-catenin and Notch signaling pathways. Differentiated enterocytes synthesize apolipoprotein B-48 and Microsomal Triglyceride Transfer Protein (MTP) for chylomicron biogenesis.',
        bn: 'Wnt/$\beta$-ক্যাটেনিন এবং নচ সিগন্যালিং দ্বারা ক্রিপ্ট থেকে ভিলাইয়ের দিকে অবিরাম কোষ স্থানান্তরিত হয়। পরিপক্ক কোষগুলো কাইলোমাইক্রন তৈরির জন্য অ্যাপোপ্রোটিন B-48 এবং MTP এনজাইম সংশ্লেষ করে।',
      },
    },
  },
  {
    id: 'capillary',
    name: {
      en: 'Lamina Propria Capillary Loop',
      bn: 'ল্যামিনা প্রোপ্রিয়ার রক্তজালক',
    },
    category: {
      en: 'Fenestrated Vascular Microcirculation',
      bn: 'ছিদ্রযুক্ত সূক্ষ্ম রক্তজালক',
    },
    membraneLocation: {
      en: 'Subepithelial Lamina Propria',
      bn: 'সাব-এপিথেলিয়াল ল্যামিনা প্রোপ্রিয়া',
    },
    stoichiometry: {
      en: 'Direct drain to Mesenteric Venules -> Hepatic Portal Vein',
      bn: 'মেসেন্টেরিক শিরা হয়ে সরাসরি হেপাটিক পোর্টাল শিরায় গমন',
    },
    sectionId: 'integration',
    color: 0xb91c1c, // Dark Red
    explanations: {
      foundation: {
        en: 'Tiny blood vessels right under the cells that scoop up absorbed sugars, amino acids, and water-soluble vitamins, carrying them directly to the liver for distribution.',
        bn: 'কোষগুলোর ঠিক নিচে অবস্থিত ক্ষুদ্র রক্তনালি যা শোষিত শর্করা, অ্যামিনো অ্যাসিড এবং পানিতে দ্রবণীয় ভিটামিন গ্রহণ করে সরাসরি যকৃতে (লিভারে) পৌঁছে দেয়।',
      },
      academic: {
        en: 'Fenestrated microvascular endothelial loop positioned within 1–2 μm of the basolateral membrane. High blood flow preserves the driving gradient for diffusion into blood and portal venous transport.',
        bn: 'বেসোল্যাটারাল ঝিল্লির মাত্র ১-২ মাইক্রোমিটারের মধ্যে অবস্থিত ছিদ্রযুক্ত রক্তজালক। এর উচ্চ রক্তপ্রবাহ ব্যাপনের অনুকূল নতিমাত্রা বজায় রাখে এবং পোর্টাল শিরায় পুষ্টি সঞ্চালন করে।',
      },
      advanced: {
        en: 'Counter-current blood flow in the villus creates an osmotic gradient with hypertonicity at the villus tip. Susceptible to ischemic tip necrosis during systemic hypotension, septic shock, or mesenteric hypoperfusion.',
        bn: 'ভিলাইয়ের কাউন্টার-কারেন্ট রক্তপ্রবাহ শীর্ষভাগে একটি হাইপারটনিক অসমোটিক গ্রেডিয়েন্ট তৈরি করে। রক্তচাপ কমে গেলে বা সেপটিক শকে ভিলাইয়ের শীর্ষভাগ তীব্র রক্তস্বল্পতায় ক্ষতিগ্রস্ত হয়।',
      },
    },
  },
  {
    id: 'lacteal',
    name: {
      en: 'Central Lacteal Lymphatic Vessel',
      bn: 'কেন্দ্রীয় ল্যাকটিয়েল লসিকা নালি',
    },
    category: {
      en: 'Lymphatic Lipoprotein Conduit',
      bn: 'লসিকাতন্ত্রের লিপোপ্রোটিন পরিবহন নালি',
    },
    membraneLocation: {
      en: 'Central Axis of Intestinal Villus',
      bn: 'অন্ত্রীয় ভিলাইয়ের কেন্দ্রবিন্দু',
    },
    stoichiometry: {
      en: 'Absorbs chylomicrons (>75 nm) -> Thoracic Duct -> Systemic Blood',
      bn: 'কাইলোমাইক্রন (>৭৫ ন্যানোমিটার) শোষণ -> থোরাসিক ডাক্ট -> রক্তসঞ্চালন',
    },
    sectionId: 'integration',
    color: 0xca8a04, // Olive / Gold
    explanations: {
      foundation: {
        en: 'A specialized lymphatic drain running down the middle of the villus. Because fat particles (chylomicrons) are too large to fit into tiny capillaries, they take this wide lymphatic highway instead.',
        bn: 'ভিলাইয়ের মাঝখান দিয়ে নেমে যাওয়া বিশেষ লসিকা নালি। চর্বির কণাগুলো (কাইলোমাইক্রন) আকারে খুব বড় হওয়ায় রক্তজালকে ঢুকতে পারে না, তাই সেগুলো এই প্রশস্ত লসিকা পথ ব্যবহার করে।',
      },
      academic: {
        en: 'Blind-ended central lymphatic capillary with button-like endothelial junctions that open in response to interstitial pressure, admitting large chylomicrons and fat-soluble vitamins (A, D, E, K).',
        bn: 'বন্ধ-প্রান্তীয় কেন্দ্রীয় লসিকা রক্তজালক যার বোতামের মতো সংযোগস্থল ইন্টারস্টিশিয়াল চাপের প্রতিক্রিয়ায় খুলে যায় এবং বৃহদাকার কাইলোমাইক্রন ও চর্বিতে দ্রবণীয় ভিটামিনকে ভেতরে প্রবেশ করতে দেয়।',
      },
      advanced: {
        en: 'Contraction of smooth muscle cells along the lacteal rhythmically pumps lymph toward mesenteric lymph nodes and the thoracic duct, bypassing the liver initially to prevent hepatic lipotoxicity.',
        bn: 'ল্যাকটিয়েলের মসৃণ পেশির ছন্দোবদ্ধ সংকোচন লসিকাকে থোরাসিক ডাক্টের দিকে ঠেলে দেয়, যা খাবারপরবর্তী প্রাথমিক ধাপে লিভারকে চর্বির ক্ষতিকর আধিক্য থেকে রক্ষা করে সরাসরি রক্তে পাঠায়।',
      },
    },
  },
]

