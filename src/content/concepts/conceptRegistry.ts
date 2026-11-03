import type { Localized } from '../lessonSchema'

export type AcademyId = 'anatomy' | 'metabolism' | 'nutrition' | 'dietetics'

export type ConceptRelationship =
  | 'metabolic-substrate'
  | 'anatomical-site'
  | 'clinical-counterpart'
  | 'dietary-regulation'
  | 'biochemical-pathway'
  | 'transport-mechanism'
  | 'pathophysiology'

export type BiologicalScale =
  | 'molecular'
  | 'cellular'
  | 'tissue'
  | 'organ-system'
  | 'whole-organism'

export type AcademyConceptLink = {
  academy: AcademyId
  chapterSlug: string
  chapterTitle: Localized
  relationship: ConceptRelationship
  note: Localized
  route: string
}

export type CrossAcademyConcept = {
  id: string
  name: Localized
  summary: Localized
  biologicalScale: BiologicalScale
  clinicalRelevance: Localized
  links: AcademyConceptLink[]
}

const l = (en: string, bn: string): Localized => ({ en, bn })

export const crossAcademyConcepts: CrossAcademyConcept[] = [
  {
    id: 'enterocyte-nutrient-transport',
    name: l('Enterocyte Microvilli & Nutrient Transporter Axis', 'এন্টারোসাইট মাইক্রোভিলি ও পুষ্টি পরিবহনকারী অক্ষ'),
    summary: l(
      'Integration of mucosal villus microanatomy with brush-border apical transporter kinetics (SGLT1, GLUT5, PEPT1, CD36) and downstream cellular metabolic oxidation.',
      'শ্লৈষ্মিক ভিলাসের অণুগঠন, ব্রাশ-বর্ডার অ্যাপিকেল পরিবহন গতিবিদ্যা (SGLT1, GLUT5, PEPT1, CD36) এবং পরবর্তী কোষীয় বিপাকীয় জারণের সমন্বয়।'
    ),
    biologicalScale: 'cellular',
    clinicalRelevance: l(
      'Malabsorptive disorders (celiac sprue, short bowel syndrome) disrupt apical transporter density and tight-junction claudin integrity, impairing both systemic bioenergetics and electrolyte homeostasis.',
      'ম্যালঅ্যাবজরপশন ব্যাধি (সিলিয়াক স্প্রু, শর্ট বাওয়েল সিন্ড্রোম) অ্যাপিকেল পরিবহনকারী এবং টাইট-জাংশন ক্লোডিনের অখণ্ডতা নষ্ট করে শক্তি উৎপাদন ও তরল ভারসাম্য ব্যাহত করে।'
    ),
    links: [
      {
        academy: 'anatomy',
        chapterSlug: 'digestive',
        chapterTitle: l('12 · Digestive anatomy', '১২ · পরিপাকতন্ত্রের শারীরস্থান'),
        relationship: 'anatomical-site',
        note: l(
          'Anatomical mucosa, circular folds of Kerckring, villi, and lacteal lymphatic capillaries.',
          'শ্লৈষ্মিক ঝিল্লি, প্লাইকা সার্কুলারিস, ভিলাস এবং ল্যাকটিয়েল লসিকা জালকের শারীরিক গঠন।'
        ),
        route: '/learn/anatomy/chapters/digestive',
      },
      {
        academy: 'metabolism',
        chapterSlug: 'glycolysis-pyruvate',
        chapterTitle: l('02 · Glycolysis & Pyruvate Metabolism', '০২ · গ্লাইকোলাইসিস ও পাইরুভেট বিপাক'),
        relationship: 'biochemical-pathway',
        note: l(
          'Cytosolic glucose-6-phosphate entry from basolateral GLUT2 hexose flux into glycolysis.',
          'বেসোলেটারাল GLUT2 দ্বারা শোষিত গ্লুকোজের সাইটোসলিক গ্লাইকোলাইসিসে প্রবেশ।'
        ),
        route: '/learn/metabolism/chapters/glycolysis-pyruvate',
      },
      {
        academy: 'nutrition',
        chapterSlug: 'macronutrient-digestion-absorption',
        chapterTitle: l('02 · Macronutrient Digestion & Absorption', '০২ · ম্যাক্রোনিউট্রিয়েন্ট পরিপাক ও শোষণ'),
        relationship: 'dietary-regulation',
        note: l(
          'Macronutrient hydrolysis kinetics, micellar solubilization, and enterocyte absorption.',
          'ম্যাক্রোনিউট্রিয়েন্ট পরিপাক গতিবিদ্যা, মাইসিল দ্রবণীয়করণ এবং এন্টারোসাইটে শোষণ।'
        ),
        route: '/learn/nutrition/chapters/macronutrient-digestion-absorption',
      },
    ],
  },
  {
    id: 'insulin-resistance-lipotoxicity',
    name: l('Insulin Signaling, Lipotoxicity & Fuel Dysregulation', 'ইনসুলিন সংকেত, লিপোটক্সিসিটি ও জ্বালানি নিয়ন্ত্রণহীনতা'),
    summary: l(
      'Coupling of pancreatic beta-cell islet architecture and visceral adipose expansion to diacylglycerol/PKC-epsilon mediated insulin receptor substrate (IRS-1) serine phosphorylation.',
      'অগ্ন্যাশয়ের আইলেট অব ল্যাঙ্গারহ্যান্সের গঠন, ভিসেরাল চর্বির বৃদ্ধি এবং ডাইঅ্যাসাইলগ্লিসারল/PKC-এপসিলন দ্বারা IRS-1 সেরিন ফসফরাইলেশনের সমন্বিত অক্ষ।'
    ),
    biologicalScale: 'organ-system',
    clinicalRelevance: l(
      'Central pathogenesis of metabolic syndrome, non-alcoholic steatohepatitis (MASLD), and type 2 diabetes; reversible through calorie-restricted dietary pattern shifts and targeted macronutrient modification.',
      'মেটাবলিক সিন্ড্রোম, নন-অ্যালকোহলিক হেপাটাইটিস (MASLD) এবং টাইপ ২ ডায়াবেটিসের মূল কারণ; ক্যালোরি-নিয়ন্ত্রিত খাদ্য ও ম্যাক্রোনিউট্রিয়েন্ট পরিবর্তনের মাধ্যমে প্রতিকারযোগ্য।'
    ),
    links: [
      {
        academy: 'anatomy',
        chapterSlug: 'endocrine-lymphatic',
        chapterTitle: l('15 · Endocrine and lymphatic anatomy', '১৫ · অন্তঃস্রাবী ও লসিকাতন্ত্রের শারীরস্থান'),
        relationship: 'anatomical-site',
        note: l(
          'Endocrine pancreas topography, islet microvascular architecture, and visceral fat depots.',
          'অগ্ন্যাশয়ের অন্তঃস্রাবী দ্বীপসমূহ, রক্তনালীর বিন্যাস এবং ভিসেরাল চর্বি স্তরের শারীরিক গঠন।'
        ),
        route: '/learn/anatomy/chapters/endocrine-lymphatic',
      },
      {
        academy: 'metabolism',
        chapterSlug: 'endocrine-fuel-regulation',
        chapterTitle: l('14 · Endocrine Fuel Regulation & Counter-Regulatory Hormones', '১৪ · অন্তঃস্রাবী জ্বালানি নিয়ন্ত্রণ ও হরমোন সমন্বয়'),
        relationship: 'biochemical-pathway',
        note: l(
          'Insulin-glucagon signaling balance, GLUT4 vesicle translocation, and gluconeogenic gene expression.',
          'ইনসুলিন-গ্লুকাগন সংকেত ভারসাম্য, GLUT4 স্থানান্তর এবং গ্লুকোনিওজেনেসিসের জিন নিয়ন্ত্রণ।'
        ),
        route: '/learn/metabolism/chapters/endocrine-fuel-regulation',
      },
      {
        academy: 'nutrition',
        chapterSlug: 'nutrition-obesity-t2d-mnt',
        chapterTitle: l('18 · Obesity, Metabolic Syndrome & Type 2 Diabetes MNT', '১৮ · স্থূলতা, মেটাবলিক সিন্ড্রোম ও টাইপ ২ ডায়াবেটিস এমএনটি'),
        relationship: 'clinical-counterpart',
        note: l(
          'Medical nutrition therapy, glycemic load modulation, dietary fiber, and hypocaloric weight loss protocols.',
          'মেডিকেল নিউট্রিশন থেরাপি (MNT), গ্লাইসেমিক লোড নিয়ন্ত্রণ, খাদ্য আঁশ এবং ওজন হ্রাসের পথ্য।'
        ),
        route: '/learn/nutrition/chapters/nutrition-obesity-t2d-mnt',
      },
    ],
  },
  {
    id: 'urea-cycle-nitrogen-balance',
    name: l('Hepatorenal Nitrogen Clearance & Protein Quality', 'হেপাটোরেনাল নাইট্রোজেন নিষ্কাশন ও প্রোটিন মান'),
    summary: l(
      'Bridging hepatic mitochondrial-cytosolic urea cycle enzymology, renal nephron tubular filtration, and dietary amino acid bioavailability (DIAAS score).',
      'যকৃতের মাইটোকন্ড্রিয়াল-সাইটোসলিক ইউরিয়া চক্রের উৎসেচক, কিডনির নেফ্রন ছাঁকন এবং খাদ্যের অ্যামিনো অ্যাসিডের শোষণযোগ্যতার (DIAAS) সমন্বয়।'
    ),
    biologicalScale: 'organ-system',
    clinicalRelevance: l(
      'Inborn errors of the urea cycle (OTC deficiency) and chronic renal failure demand precision protein prescription with essential amino acid supplementation to avoid encephalopathy while preventing sarcopenia.',
      'ইউরিয়া চক্রের জন্মগত ত্রুটি (OTC ঘাটতি) ও দীর্ঘস্থায়ী কিডনি বিকলতায় এনসেফালোপ্যাথি রোধ ও সারকোপেনিয়া প্রতিরোধে সুনির্দিষ্ট প্রোটিন ব্যবস্থাপনা প্রয়োজন।'
    ),
    links: [
      {
        academy: 'anatomy',
        chapterSlug: 'urinary',
        chapterTitle: l('13 · Urinary anatomy', '১৩ · মূত্রতন্ত্রের শারীরস্থান'),
        relationship: 'anatomical-site',
        note: l(
          'Renal cortex, medullary pyramids, glomerulus, and collecting duct histology.',
          'রেনাল কর্টেক্স, মেডুলারি পিরামিড, গ্লোমেরুলাস এবং সংগ্রাহী নালিকার শারীরস্থান।'
        ),
        route: '/learn/anatomy/chapters/urinary',
      },
      {
        academy: 'metabolism',
        chapterSlug: 'amino-acid-catabolism-urea',
        chapterTitle: l('09 · Amino Acid Catabolism & Urea Cycle', '০৯ · অ্যামিনো অ্যাসিড ভাঙন ও ইউরিয়া চক্র'),
        relationship: 'biochemical-pathway',
        note: l(
          'Transamination, carbamoyl phosphate synthetase 1, ornithine transcarbamylase, and arginase reactions.',
          'ট্রান্সঅ্যামিনেশন, কার্বাময়েল ফসফেট সিন্থেটেজ ১, অরনিথিন ট্রান্সকার্বামাইলেজ ও আর্জিনেজের বিক্রিয়া।'
        ),
        route: '/learn/metabolism/chapters/amino-acid-catabolism-urea',
      },
      {
        academy: 'nutrition',
        chapterSlug: 'protein-quality-diaas-nitrogen-balance',
        chapterTitle: l('06 · Dietary Protein Quality, DIAAS & Nitrogen Balance', '০৬ · প্রোটিনের পুষ্টিমান, DIAAS ও নাইট্রোজেন ভারসাম্য'),
        relationship: 'dietary-regulation',
        note: l(
          'DIAAS scoring, limiting amino acids, leucine kinetic trigger, and obligatory nitrogen loss balance.',
          'DIAAS স্কোরিং, সীমিত অ্যামিনো অ্যাসিড, লিউসিন থ্রেশহোল্ড এবং বাধ্যতামূলক নাইট্রোজেন ক্ষয়।'
        ),
        route: '/learn/nutrition/chapters/protein-quality-diaas-nitrogen-balance',
      },
    ],
  },
  {
    id: 'lipoprotein-atherogenesis',
    name: l('Apolipoprotein-B Flux, Endothelial Trapping & Atheroma Formation', 'অ্যাপোলাইপোপ্রোটিন-বি প্রবাহ, এন্ডোথেলিয়াল আবদ্ধতা ও অ্যাথেরোমা গঠন'),
    summary: l(
      'Integration of arterial wall tunica intima microanatomy with hepatic VLDL/LDL apolipoprotein assembly and dietary saturated/trans-fatty acid regulation.',
      'ধমনীপ্রাচীরের টিউনিকা ইনটিমার অণুগঠন, যকৃতের VLDL/LDL অ্যাপোলাইপোপ্রোটিন সংশ্লেষ এবং খাদ্যস্থিত সম্পৃক্ত/ট্রান্স-ফ্যাটের নিয়ন্ত্রক অক্ষ।'
    ),
    biologicalScale: 'tissue',
    clinicalRelevance: l(
      'Subendothelial ApoB particle retention triggers monocyte chemotaxis, foam cell formation, and fibrous plaque rupture; lowering ApoB via diet and pharmacotherapy directly reduces cardiovascular event risk.',
      'সাব-এন্ডোথেলিয়াল ApoB কণা আবদ্ধ হয়ে ফোম সেল তৈরি ও ফলক ভেঙে হৃদরোগ ঘটায়; খাদ্য ও ওষুধের মাধ্যমে ApoB কমালে ঝুঁকি সরাসরি হ্রাস পায়।'
    ),
    links: [
      {
        academy: 'anatomy',
        chapterSlug: 'cardiovascular',
        chapterTitle: l('10 · Cardiovascular anatomy', '১০ · হৃদ্‌-রক্তনালীর শারীরস্থান'),
        relationship: 'anatomical-site',
        note: l(
          'Arterial wall layers (intima, media, adventitia), coronary artery branching, and shear stress loci.',
          'ধমনীপ্রাচীরের স্তরসমূহ (ইনটিমা, মিডিয়া, অ্যাডভেন্টিশিয়া), করোনারি ধমনী ও রক্তপ্রবাহের চাপস্থল।'
        ),
        route: '/learn/anatomy/chapters/cardiovascular',
      },
      {
        academy: 'metabolism',
        chapterSlug: 'lipoproteins-lipid-flux',
        chapterTitle: l('08 · Lipoproteins, Reverse Cholesterol Transport & Lipid Flux', '০৮ · লাইপোপ্রোটিন, বিপরীত কোলেস্টেরল পরিবহন ও লিপিড প্রবাহ'),
        relationship: 'biochemical-pathway',
        note: l(
          'LDL receptor endocytosis, SREBP-2 transcription, PCSK9 recycling, and reverse cholesterol transport.',
          'এলডিএল রিসেপ্টর এন্ডোসাইটোসিস, SREBP-2 ট্রান্সক্রিপশন, PCSK9 এবং বিপরীত কোলেস্টেরল পরিবহন।'
        ),
        route: '/learn/metabolism/chapters/lipoproteins-lipid-flux',
      },
      {
        academy: 'nutrition',
        chapterSlug: 'dietary-lipids-fatty-acids-pufa',
        chapterTitle: l('05 · Dietary Lipids, Fatty Acids & Cardiovascular Health', '০৫ · খাদ্য লিপিড, ফ্যাটি অ্যাসিড ও হৃদ্‌স্বাস্থ্য'),
        relationship: 'dietary-regulation',
        note: l(
          'SFA vs. PUFA substitution mechanics, trans fatty acid reduction, and phytosterol competitive inhibition.',
          'সম্পৃক্ত চর্বির বদলে পিইউএফএ ব্যবহার, ট্রান্স ফ্যাটের অপকারিতা ও ফাইটোস্টেরলের কোলেস্টেরল হ্রাসকরণ।'
        ),
        route: '/learn/nutrition/chapters/dietary-lipids-fatty-acids-pufa',
      },
    ],
  },
  {
    id: 'nephron-hyperfiltration-ckd',
    name: l('Glomerular Hemodynamics, Tubuloglomerular Feedback & Renal Nutrition', 'গ্লোমেরুলার রক্তগতিবিদ্যা, টিউবুলোগ্লোমেরুলার ফিডব্যাক ও রেনাল পুষ্টি'),
    summary: l(
      'Coupling of podocyte slit diaphragm microarchitecture with amino-acid mediated afferent arteriolar vasodilation and dietary protein/phosphorus restriction.',
      'পোডোসাইটের স্লিট ডায়াফ্রামের অণুগঠন, অ্যামিনো অ্যাসিডের প্রভাবে অ্যাফারেন্ট ধমনিকার প্রসারণ এবং খাদ্য প্রোটিন ও ফসফরাস নিয়ন্ত্রণের সমন্বয়।'
    ),
    biologicalScale: 'cellular',
    clinicalRelevance: l(
      'Chronic high protein intake exacerbates intraglomerular hypertension in early CKD; dietary phosphorus restriction blunts secondary hyperparathyroidism and vascular calcification.',
      'অতিরিক্ত প্রোটিন গ্রহণ কিডনি রোগীদের গ্লোমেরুলার প্রেশার বাড়িয়ে ক্ষতি ত্বরান্বিত করে; ফসফরাস নিয়ন্ত্রণ ভাস্কুলার ক্যালসিফিকেশন প্রতিরোধ করে।'
    ),
    links: [
      {
        academy: 'anatomy',
        chapterSlug: 'urinary',
        chapterTitle: l('13 · Urinary anatomy', '১৩ · মূত্রতন্ত্রের শারীরস্থান'),
        relationship: 'anatomical-site',
        note: l(
          'Glomerulus, Bowman capsule, juxtaglomerular apparatus, and macula densa cellular structure.',
          'গ্লোমেরুলাস, বোম্যান্স ক্যাপসুল, জাক্সটাগ্লোমেরুলার অ্যাপারেটাস এবং ম্যাকুলা ডেনসার গঠন।'
        ),
        route: '/learn/anatomy/chapters/urinary',
      },
      {
        academy: 'metabolism',
        chapterSlug: 'amino-acid-catabolism-urea',
        chapterTitle: l('09 · Amino Acid Catabolism & Urea Cycle', '০৯ · অ্যামিনো অ্যাসিড ভাঙন ও ইউরিয়া চক্র'),
        relationship: 'biochemical-pathway',
        note: l(
          'Glucagon and IGF-1 elevation post-protein feeding driving renal plasma flow changes.',
          'প্রোটিন ভোজনের পর গ্লুকাগন ও IGF-1 বৃদ্ধির ফলে রেনাল প্লাজমা প্রবাহ পরিবর্তন।'
        ),
        route: '/learn/metabolism/chapters/amino-acid-catabolism-urea',
      },
      {
        academy: 'nutrition',
        chapterSlug: 'renal-nutrition-ckd-mnt',
        chapterTitle: l('20 · Renal Nutrition, Chronic Kidney Disease & MNT', '২০ · রেনাল পুষ্টি, দীর্ঘস্থায়ী কিডনি রোগ ও এমএনটি'),
        relationship: 'clinical-counterpart',
        note: l(
          '0.6-0.8 g/kg/d protein targets in non-dialysis CKD, low-potassium planning, and phosphate binder timing.',
          'ডায়ালিসিসহীন সিকেডিতে ০.৬-০.৮ গ্রাম/কেজি প্রোটিন লক্ষ্যমাত্রা, কম পটাশিয়াম ও ফসফেট নিয়ন্ত্রক খাদ্য।'
        ),
        route: '/learn/nutrition/chapters/renal-nutrition-ckd-mnt',
      },
    ],
  },
  {
    id: 'satiety-neuroendocrine-axis',
    name: l('Hypothalamic Arcuate Nucleus & Gut-Peptide Satiety Circuit', 'হাইপোথ্যালামিক আর্কুয়েট নিউক্লিয়াস ও অন্ত্র-পেপটাইড তৃপ্তি অক্ষ'),
    summary: l(
      'Intersection of neuroanatomy (arcuate nucleus, median eminence, vagus nerve) with peripheral enteroendocrine hormone kinetics (GLP-1, PYY, CCK, ghrelin) and dietary macronutrient satiation.',
      'স্নায়বিক গঠন (আর্কুয়েট নিউক্লিয়াস, মিডিয়ান এমিনেন্স, ভেগাস স্নায়ু), অন্ত্রের হরমোন গতিবিদ্যা (GLP-1, PYY, CCK, ঘ্রেলিন) এবং খাদ্যের তৃপ্তিদায়ক উপাদানের মিলনস্থল।'
    ),
    biologicalScale: 'organ-system',
    clinicalRelevance: l(
      'Pathophysiology of obesity and basis of GLP-1 receptor agonist therapies (semaglutide, tirzepatide); dietary volume, protein density, and viscosity enhance endogenous incretin release.',
      'স্থূলতার রোগতত্ত্ব ও GLP-1 রিসেপ্টর অ্যাগোনিস্ট ওষুধের বৈজ্ঞানিক ভিত্তি; প্রোটিনের ঘনত্ব ও সান্দ্র খাদ্য প্রাকৃতিকভাবে ইনক্রেটিন নিঃসরণ বাড়ায়।'
    ),
    links: [
      {
        academy: 'anatomy',
        chapterSlug: 'brain',
        chapterTitle: l('18 · Brain and cranial nerves', '১৮ · মস্তিষ্ক ও করোটিক স্নায়ু'),
        relationship: 'anatomical-site',
        note: l(
          'Third ventricle, median eminence fenestrated capillaries, POMC/CART and NPY/AgRP neuronal circuits.',
          'তৃতীয় ভেন্ট্রিকল, মিডিয়ান এমিনেন্সের রক্তজালক এবং POMC/NPY নিউরোনাল সার্কিট।'
        ),
        route: '/learn/anatomy/chapters/brain',
      },
      {
        academy: 'metabolism',
        chapterSlug: 'fed-fasted-starvation-states',
        chapterTitle: l('13 · Fed, Fasted & Starvation Fuel Switching', '১৩ · ভোজন, উপবাস ও অনাহারকালীন জ্বালানি রূপান্তর'),
        relationship: 'biochemical-pathway',
        note: l(
          'Hepatic glycogenolysis vs. lipolysis signaling and central sensing of glucose and free fatty acids.',
          'যকৃতের গ্লাইকোজেন ভাঙন বনাম লিপোলাইসিস সংকেত এবং মস্তিষ্কের পুষ্টি শনাক্তকরণ।'
        ),
        route: '/learn/metabolism/chapters/fed-fasted-starvation-states',
      },
      {
        academy: 'nutrition',
        chapterSlug: 'satiety-neuroendocrinology-appetite',
        chapterTitle: l('07 · Satiety Neuroendocrinology, Appetite Regulation & Energy Intake', '০৭ · তৃপ্তির স্নায়ু-অন্তঃস্রাবী নিয়ন্ত্রণ, ক্ষুধা ও ক্যালোরি গ্রহণ'),
        relationship: 'dietary-regulation',
        note: l(
          'Holt Satiety Index, protein leveraging hypothesis, and fiber-induced gastric mechanoreceptor distension.',
          'হোল্ট স্যাটাইটি সূচক, প্রোটিন লিভারেজ হাইপোথিসিস এবং খাদ্য আঁশ দ্বারা পাকস্থলীর প্রসারণ।'
        ),
        route: '/learn/nutrition/chapters/satiety-neuroendocrinology-appetite',
      },
    ],
  },
  {
    id: 'warburg-cancer-cachexia',
    name: l('Tumor Aerobic Glycolysis, Systemic Hypercatabolism & Sarcopenia', 'টিউমারের অ্যারোবিক গ্লাইকোলাইসিস, হাইপারক্যাটাবলিজম ও সারকোপেনিয়া'),
    summary: l(
      'Coupling of skeletal muscle sarcomere proteolysis and adipose lipolysis with tumor-driven aerobic glycolysis (Warburg effect) and clinical cancer cachexia management.',
      'কঙ্কালপেশীর সারকোমিয়ার ভাঙন, এডিপোজ লিপোলাইসিস, টিউমার কোষের অ্যারোবিক গ্লাইকোলাইসিস (ওয়ারবার্গ প্রভাব) এবং ক্যান্সার ক্যাকেক্সিয়া ব্যবস্থাপনার অক্ষ।'
    ),
    biologicalScale: 'whole-organism',
    clinicalRelevance: l(
      'Cancer cachexia is a systemic inflammatory metabolic syndrome unresponsive to conventional nutritional support alone; demands multi-modal intervention combining anti-inflammatory nutrition with leucine-rich protein.',
      'ক্যান্সার ক্যাকেক্সিয়া একটি সিস্টেমিক প্রদাহজনিত মেটাবলিক সিন্ড্রোম যা শুধু ক্যালোরি বাড়িয়ে সারে না; প্রদাহরোধী পুষ্টি ও লিউসিনযুক্ত প্রোটিনের সম্মিলিত চিকিৎসা আবশ্যক।'
    ),
    links: [
      {
        academy: 'anatomy',
        chapterSlug: 'muscles',
        chapterTitle: l('07 · Skeletal muscle anatomy', '০৭ · কঙ্কালপেশীর শারীরস্থান'),
        relationship: 'anatomical-site',
        note: l(
          'Skeletal muscle fascicles, sarcomeric actin-myosin filaments, and muscle satellite cell niches.',
          'কঙ্কালপেশীর বান্ডিল, সারকোমিয়ারের অ্যাক্টিন-মায়োসিন ফিলামেন্ট এবং স্যাটেলাইট কোষের গঠন।'
        ),
        route: '/learn/anatomy/chapters/muscles',
      },
      {
        academy: 'metabolism',
        chapterSlug: 'cancer-metabolic-reprogramming',
        chapterTitle: l('34 · Cancer Metabolic Reprogramming & Warburg Effect', '৩৪ · ক্যান্সারের বিপাকীয় রূপান্তর ও ওয়ারবার্গ প্রভাব'),
        relationship: 'biochemical-pathway',
        note: l(
          'Hexokinase 2 overexpression, PKM2 dimer state, hypoxia-inducible factor 1-alpha (HIF-1a), and glutaminolysis.',
          'হেক্সোকাইনেজ ২ বৃদ্ধি, PKM2 ডাইমার রূপ, HIF-1a সক্রিয়করণ এবং গ্লুটামিনোলাইসিস।'
        ),
        route: '/learn/metabolism/chapters/cancer-metabolic-reprogramming',
      },
      {
        academy: 'nutrition',
        chapterSlug: 'oncology-cancer-nutrition-cachexia',
        chapterTitle: l('24 · Oncology Nutrition, Cancer Cachexia & Chemotherapy MNT', '২৪ · ক্যান্সার পুষ্টি, ক্যাকেক্সিয়া ও কেমোথেরাপি এমএনটি'),
        relationship: 'clinical-counterpart',
        note: l(
          "ESPEN cancer guidelines: 1.2-1.5 g/kg protein, omega-3 EPA modulation of proteolysis-inducing factor, and debunking 'sugar feeds cancer' myths.",
          "ইএসপিইএন ক্যান্সার নীতিমালা: ১.২-১.৫ গ্রাম/কেজি প্রোটিন, ওমেগা-৩ ইপিএ দ্বারা প্রদাহ প্রশমন এবং বিভ্রান্তিকর পথ্য বর্জন।"
        ),
        route: '/learn/nutrition/chapters/oncology-cancer-nutrition-cachexia',
      },
    ],
  },
  {
    id: 'hepatic-steatosis-portal-axis',
    name: l('Gut-Liver Axis, Endotoxemia & Steatohepatitis Pathogenesis', 'অন্ত্র-যকৃত অক্ষ, এন্ডোটক্সেমিয়া ও ফ্যাটি লিভার প্যাথোজেনেসিস'),
    summary: l(
      'Integration of portal venous anatomy and hepatic sinusoidal Kupffer cells with high-fructose de novo lipogenesis and intestinal tight-junction barrier breakdown.',
      'পোর্টাল শিরার গঠন, যকৃতের সাইনুসয়েড ও কুফার কোষের সাথে ফ্রুক্টোজ চালিত লিপোজেনেসিস এবং অন্ত্রের ঝিল্লি শিথিলতার সংযোগ।'
    ),
    biologicalScale: 'organ-system',
    clinicalRelevance: l(
      'Bacterial LPS translocation via portal vein activates hepatic TLR4, triggering steatohepatitis (MASLD/MASH) progression; mitigated through Mediterranean diet, fructose reduction, and prebiotic barrier restoration.',
      'পোর্টাল শিরা দিয়ে ব্যাকটেরিয়াল এলপিএস এসে লিভারের TLR4 সক্রিয় করে ফ্যাটি লিভারের প্রদাহ বাড়ায়; ভূমধ্যসাগরীয় খাদ্যাভ্যাস ও প্রিবায়োটিক দ্বারা নিরাময় সম্ভব।'
    ),
    links: [
      {
        academy: 'anatomy',
        chapterSlug: 'digestive',
        chapterTitle: l('12 · Digestive anatomy', '১২ · পরিপাকতন্ত্রের শারীরস্থান'),
        relationship: 'anatomical-site',
        note: l(
          'Hepatic portal vein circulation, sinusoids, space of Disse, and Couinaud liver segments.',
          'হেপাটিক পোর্টাল রক্তসংবহন, সাইনুসয়েড, স্পেস অব ডিসি এবং যকৃতের সেগমেন্টের শারীরস্থান।'
        ),
        route: '/learn/anatomy/chapters/digestive',
      },
      {
        academy: 'metabolism',
        chapterSlug: 'lipogenesis-triglycerides',
        chapterTitle: l('06 · De Novo Lipogenesis, Triglyceride Synthesis & Storage', '০৬ · ডি নোভো লিপোজেনেসিস, ট্রাইগ্লিসারাইড সংশ্লেষ ও জমা'),
        relationship: 'biochemical-pathway',
        note: l(
          'ChREBP and SREBP-1c hepatic activation by fructose flux bypassing phosphofructokinase-1 checkpoint.',
          'ফ্রুক্টোজ দ্বারা PFK-1 চেকপয়েন্ট এড়িয়ে ChREBP ও SREBP-1c সক্রিয়করণের মাধ্যমে ট্রাইগ্লিসারাইড তৈরি।'
        ),
        route: '/learn/metabolism/chapters/lipogenesis-triglycerides',
      },
      {
        academy: 'nutrition',
        chapterSlug: 'gi-liver-nutrition-masld-ibd-fodmap',
        chapterTitle: l('21 · Gastrointestinal & Hepatobiliary Nutrition: MASLD, IBD & Gut Disorders', '২১ · পরিপাক ও যকৃতের পুষ্টি: MASLD, IBD ও অন্ত্রের রোগ'),
        relationship: 'clinical-counterpart',
        note: l(
          'AASLD lifestyle guidelines: 7-10% weight loss, elimination of sugar-sweetened beverages, and choline adequacy.',
          'এএএসএলডি নির্দেশিকা: ৭-১০% ওজন হ্রাস, মিষ্টি পানীয় বর্জন এবং পর্যাপ্ত কোলিন নিশ্চিতকরণ।'
        ),
        route: '/learn/nutrition/chapters/gi-liver-nutrition-masld-ibd-fodmap',
      },
    ],
  },
  {
    id: 'bone-mineral-matrix-calcium-phosphate',
    name: l('Osteoid Remodeling, Vitamin D Receptor & Hydroxyapatite Mineralization', 'অস্থি পুনর্গঠন, ভিটামিন ডি রিসেপ্টর ও হাইড্রোক্সিঅ্যাপাটাইট খনিজায়ন'),
    summary: l(
      'Coupling of cortical/trabecular bone histology and osteoblast-osteoclast coupling with mitochondrial vitamin D 1-alpha-hydroxylase activation and calcium-magnesium-phosphorus intake.',
      'কর্টিকাল ও ট্র্যাবকুলার অস্থির অণুগঠন, অস্টিওব্লাস্ট-অস্টিওক্লাস্ট চক্র, রেনাল ভিটামিন ডি সক্রিয়করণ এবং খাদ্যস্থ ক্যালসিয়াম-ম্যাগনেসিয়ামের অনুপাত।'
    ),
    biologicalScale: 'tissue',
    clinicalRelevance: l(
      'Osteoporosis and renal osteodystrophy require synchronized assessment of bone mineral density (DEXA), active 1,25(OH)2D3, and balanced dietary calcium:phosphorus ratios to prevent fracture.',
      'অস্টিওপোরোসিস ও কিডনিজনিত হাড়ের রোগে ডেক্সা স্ক্যান, সক্রিয় ভিটামিন ডি এবং সঠিক ক্যালসিয়াম-ফসফরাস খাদ্য অনুপাত বজায় রাখা অপরিহার্য।'
    ),
    links: [
      {
        academy: 'anatomy',
        chapterSlug: 'skeletal-axial',
        chapterTitle: l('04 · Axial skeleton', '০৪ · অক্ষীয় কঙ্কাল'),
        relationship: 'anatomical-site',
        note: l(
          'Haversian systems, osteons, lacunae, canaliculi, and trabecular microarchitecture.',
          'হ্যাভারসিয়ান সিস্টেম, অস্টিওন, ল্যাকুনা ও ট্র্যাবকুলার অণুগঠনের শারীরস্থান।'
        ),
        route: '/learn/anatomy/chapters/skeletal-axial',
      },
      {
        academy: 'metabolism',
        chapterSlug: 'micronutrients-cofactors',
        chapterTitle: l('16 · Micronutrients, Mineral Cofactors & Metabolic Metalloproteins', '১৬ · মাইক্রোনিউট্রিয়েন্ট, খনিজ কোফ্যাক্টর ও ধাতব প্রোটিন'),
        relationship: 'biochemical-pathway',
        note: l(
          'Cytochrome P450 CYP27B1 1-alpha-hydroxylation in renal proximal tubules and PTH receptor coupling.',
          'কিডনির প্রক্সিমাল টিউবুলে CYP27B1 এনজাইম দ্বারা ভিটামিন ডি-র ১-আলফা হাইড্রক্সিলেশন।'
        ),
        route: '/learn/metabolism/chapters/micronutrients-cofactors',
      },
      {
        academy: 'nutrition',
        chapterSlug: 'macrominerals-bone-calcium-magnesium',
        chapterTitle: l('12 · Macrominerals, Bone Biology & Calcium-Magnesium Homeostasis', '১২ · ম্যাক্রোমিনারেল, হাড়ের জীববিদ্যা ও ক্যালসিয়াম-ম্যাগনেসিয়াম ভারসাম্য'),
        relationship: 'dietary-regulation',
        note: l(
          'Fractional calcium absorption, phytate/oxalate chelators, and magnesium alkaline phosphatase cofactor kinetics.',
          'ক্যালসিয়াম শোষণ হার, ফাইটেট-অক্সালেটের প্রভাব এবং অ্যালকালাইন ফসফেটেজে ম্যাগনেসিয়ামের ভূমিকা।'
        ),
        route: '/learn/nutrition/chapters/macrominerals-bone-calcium-magnesium',
      },
    ],
  },
  {
    id: 'iron-flux-erythropoiesis',
    name: l('Hepcidin Ferroportin Axis, Transferrin Saturation & Hematopoiesis', 'হেপসিডিন-ফেরোপোর্টিন অক্ষ, ট্রান্সফারিন স্যাচুরেশন ও রক্তকণিকা উৎপাদন'),
    summary: l(
      'Integration of cardiovascular erythrocyte life-cycle and spleen reticuloendothelial macrophages with hepatic hepcidin antimicrobial peptide synthesis and non-heme iron dietary enhancers.',
      'লোহিত রক্তকণিকার জীবনচক্র, প্লীহার ম্যাক্রোফেজ, যকৃতের হেপসিডিন হরমোন সংশ্লেষ এবং খাদ্যের নন-হিম আয়রন শোষণের সমন্বয়।'
    ),
    biologicalScale: 'cellular',
    clinicalRelevance: l(
      'Anemia of chronic disease (functional iron deficiency) features high hepcidin and trapped macrophage iron, refractory to oral iron, whereas absolute iron deficiency benefits from alternate-day dosing with ascorbic acid.',
      'দীর্ঘস্থায়ী প্রদাহজনিত অ্যানিমিয়ায় হেপসিডিন বৃদ্ধির কারণে আয়রন আটকে থাকে, অপরপক্ষে পুষ্টিজনিত অ্যানিমিয়ায় একদিন পর পর ভিটামিন সি সহ আয়রন সেবন অধিক কার্যকর।'
    ),
    links: [
      {
        academy: 'anatomy',
        chapterSlug: 'cardiovascular',
        chapterTitle: l('10 · Cardiovascular anatomy', '১০ · হৃদ্‌-রক্তনালীর শারীরস্থান'),
        relationship: 'anatomical-site',
        note: l(
          'Erythrocyte biconcave cytology, capillary transit, and splenic cords of Billroth filtration.',
          'লোহিত রক্তকণিকার দ্বি-অবতল গঠন, কৈশিক নালী পথ এবং প্লীহার বিলরথ কর্ডের ছাঁকন।'
        ),
        route: '/learn/anatomy/chapters/cardiovascular',
      },
      {
        academy: 'metabolism',
        chapterSlug: 'heme-bilirubin-metabolism',
        chapterTitle: l('12 · Heme Biosynthesis, Porphyrias & Bilirubin Metabolism', '১২ · হিম জৈবসংশ্লেষ, পোরফাইরিয়া ও বিলিরুবিন বিপাক'),
        relationship: 'biochemical-pathway',
        note: l(
          'Mitochondrial ALAS1/ALAS2 rate-limiting steps, ferrochelatase insertion of Fe2+, and biliverdin breakdown.',
          'মাইটোকন্ড্রিয়াল ALAS1/ALAS2 এনজাইম, ফেরোচেলাটেজ দ্বারা আয়রন সংযোজন ও বিলিরুবিন বিপাক।'
        ),
        route: '/learn/metabolism/chapters/heme-bilirubin-metabolism',
      },
      {
        academy: 'nutrition',
        chapterSlug: 'iron-biology-hepcidin-anemia',
        chapterTitle: l('13 · Iron Biology, Hepcidin Regulation & Nutritional Anemias', '১৩ · আয়রন জীববিদ্যা, হেপসিডিন নিয়ন্ত্রণ ও রক্তাল্পতা'),
        relationship: 'dietary-regulation',
        note: l(
          'Ascorbic acid chelation of Fe3+ to Fe2+, dietary polyphenol/calcium inhibition, and physiological hepcidin diurnal spikes.',
          'ভিটামিন সি দ্বারা আয়রন বিজারণ, পলিফেনল ও ক্যালসিয়ামের বাধা এবং হেপসিডিনের দৈনিক ছন্দ।'
        ),
        route: '/learn/nutrition/chapters/iron-biology-hepcidin-anemia',
      },
    ],
  },
  {
    id: 'clinical-nutrition-assessment-metabolic-flux',
    name: l(
      'Clinical Nutrition Assessment & Metabolic Stress Kinetics',
      'ক্লিনিক্যাল পুষ্টি মূল্যায়ন ও বিপাকীয় স্ট্রেস গতিবিদ্যা'
    ),
    summary: l(
      'Integration of anthropometric body composition and visceral negative acute-phase reactants with cellular bioenergetics and clinical malnutrition staging.',
      'শারীরিক গঠন ও রক্তরসের একিউট-ফেজ প্রোটিনের সাথে কোষীয় শক্তিবিজ্ঞান এবং ক্লিনিক্যাল অপুষ্টির সমন্বিত মূল্যায়ন অক্ষ।'
    ),
    biologicalScale: 'whole-organism',
    clinicalRelevance: l(
      'Distinguishing inflammatory hypercatabolism and cytokine-driven hypoalbuminemia from pure starvation is essential for preventing refeeding syndrome and optimizing protein titration in clinical care.',
      'প্রদাহজনিত ক্যাটাবলিক প্রতিক্রিয়া এবং সাইটোকাইন-প্ররোচিত অ্যালবুমিন হ্রাসকে সাধারণ অনাহার থেকে আলাদা করা রিফিডিং সিন্ড্রোম প্রতিরোধ ও সঠিক প্রোটিন নির্ধারণের জন্য অপরিহার্য।'
    ),
    links: [
      {
        academy: 'anatomy',
        chapterSlug: 'digestive',
        chapterTitle: l('12 · Digestive anatomy', '১২ · পরিপাকতন্ত্রের শারীরস্থান'),
        relationship: 'anatomical-site',
        note: l(
          'Gastrointestinal mucosal architecture, nutrient absorptive surface area, and digestive gland secretion.',
          'পরিপাকনালির শ্লৈষ্মিক গঠন, পুষ্টি শোষণের ক্ষেত্রফল এবং পাচক গ্রন্থির ক্ষরণ।'
        ),
        route: '/learn/anatomy/chapters/digestive',
      },
      {
        academy: 'nutrition',
        chapterSlug: 'clinical-malnutrition-enteral-parenteral',
        chapterTitle: l(
          '22 · Clinical Malnutrition, Enteral & Parenteral Nutrition',
          '২২ · ক্লিনিক্যাল অপুষ্টি, এন্টারাল ও প্যারেন্টেরাল পুষ্টি'
        ),
        relationship: 'pathophysiology',
        note: l(
          'Starvation biology, metabolic adaptation, refeeding syndrome risks, and specialized medical nutrition support.',
          'অনাহার শারীরবৃত্ত, বিপাকীয় অভিযোজন, রিফিডিং সিন্ড্রোম ঝুঁকি এবং বিশেষায়িত চিকিৎসা পুষ্টি সহায়তা।'
        ),
        route: '/learn/nutrition/chapters/clinical-malnutrition-enteral-parenteral',
      },
      {
        academy: 'dietetics',
        chapterSlug: 'clinical-nutrition-assessment-abcd',
        chapterTitle: l(
          '01 · Clinical Nutrition Assessment: ABCD Model & Anthropometrics',
          '০১ · ক্লিনিক্যাল পুষ্টি মূল্যায়ন: এ-বি-সি-ডি মডেল ও নৃতাত্ত্বিক পরিমাপ'
        ),
        relationship: 'clinical-counterpart',
        note: l(
          'Application of Hamwi equations, Adjusted Body Weight, visceral acute-phase protein kinetics, and GLIM diagnostic criteria.',
          'হ্যামউই সমীকরণ, সমন্বিত দেহের ওজন, একিউট-ফেজ প্রোটিন গতিবিদ্যা এবং আন্তর্জাতিক GLIM মানদণ্ডের ক্লিনিক্যাল প্রয়োগ।'
        ),
        route: '/learn/dietetics/chapters/clinical-nutrition-assessment-abcd',
      },
    ],
  },
]

export function getAllCrossAcademyConcepts(): CrossAcademyConcept[] {
  return crossAcademyConcepts
}

export function getConceptById(id: string): CrossAcademyConcept | undefined {
  return crossAcademyConcepts.find((c) => c.id === id)
}

export function getConceptsForChapter(academy: AcademyId, slug: string): CrossAcademyConcept[] {
  return crossAcademyConcepts.filter((concept) =>
    concept.links.some((link) => link.academy === academy && link.chapterSlug === slug)
  )
}

export function getRelatedAcademyLinks(academy: AcademyId, slug: string): AcademyConceptLink[] {
  const concepts = getConceptsForChapter(academy, slug)
  const relatedLinks: AcademyConceptLink[] = []

  concepts.forEach((concept) => {
    concept.links.forEach((link) => {
      if (link.academy !== academy || link.chapterSlug !== slug) {
        relatedLinks.push(link)
      }
    })
  })

  return relatedLinks
}

