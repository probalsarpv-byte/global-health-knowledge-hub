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
  {
    id: 'qin-nature-human-gut-microbial-gene-catalogue',
    authors: 'Junjie Qin et al.',
    title: 'A human gut microbial gene catalogue established by metagenomic sequencing',
    organization: 'Nature',
    year: 2010,
    url: 'https://doi.org/10.1038/nature08821',
    doi: '10.1038/nature08821',
  },
]

export const nutrition15GutMicrobiomeLesson: LessonTopic = {
  id: 'topic.nutrition.gut-microbiome-metagenomics',
  slug: 'gut-microbiome-metagenomics',
  version: 2,
  updatedAt: '2026-10-25',
  title: l(
    '15 · The Human Gut Microbiome: Taxonomic Architecture & Metagenomics',
    '১৫ · মানব অন্ত্রের মাইক্রোবায়োম: শ্রেণিবিন্যাস কাঠামো ও মেটাজেনোমিক্স'
  ),
  summary: l(
    'The molecular ecosystem of the human gastrointestinal microbiome: quantitative microbial cell censuses (1:1 stoichiometric ratio with human somatic cells), phylum-level architecture (Bacillota, Bacteroidota, Actinomycetota, Pseudomonadota, Verrucomicrobiota), ecological diversity metrics (alpha versus beta diversity), microbial bile salt hydrolase and 7alpha-dehydroxylation transforming primary into secondary bile acids, tryptophan catabolism into aryl hydrocarbon receptor (AhR) protective indoles, and dietary choline/carnitine cleavage via CutC/D lyases into pro-atherogenic trimethylamine N-oxide (TMAO).',
    'মানব অন্ত্রের অণুজীব বাস্তুতন্ত্রের আণবিক জীববিদ্যা: কোষীয় অনুপাত (মানব দেহকোষ ও ব্যাকটেরিয়ার ১:১ অনুপাত), পর্বভিত্তিক শ্রেণিবিন্যাস (Bacillota, Bacteroidota, Actinomycetota, Verrucomicrobiota), বাস্তুতাত্ত্বিক বৈচিত্র্য পরিমাপ (আলফা বনাম বিটা ডাইভার্সিটি), পিত্ত অম্লের রূপান্তর ও রিসেপ্টর সংকেত, ট্রিপটোফ্যান থেকে উৎপন্ন প্রতিরক্ষামূলক ইনডোল যৌগ এবং কোলিন ও কার্নিটিন থেকে রক্তনালির ক্ষতিসাধনকারী TMAO তৈরির ক্ষতিকর প্রক্রিয়া।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-25',
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
    structure: ['sender-cell-human-microbiome-numbers', 'qin-nature-human-gut-microbial-gene-catalogue'],
    mechanism: ['wahlstrom-cell-metab-bile-acids-microbiome', 'zelante-immunity-tryptophan-microbiome'],
    integration: ['tang-nejm-tmao-cardiovascular', 'sonnenburg-nature-microbiota-diet'],
    practice: ['wahlstrom-cell-metab-bile-acids-microbiome', 'tang-nejm-tmao-cardiovascular'],
    takeaways: ['sender-cell-human-microbiome-numbers', 'qin-nature-human-gut-microbial-gene-catalogue'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Superorganism: Microbial Census & Taxonomic Architecture', '১. জীবজগতের মহা-বাস্তুতন্ত্র: অণুজীব গণনা ও শ্রেণিবিন্যাস কাঠামো'), sectionId: 'introduction' },
      { id: 'sec-metagenomics', label: l('2. Metagenomic Profiling & Ecological Diversity Metrics', '২. মেটাজেনোমিক প্রোফাইলিং ও বাস্তুতাত্ত্বিক বৈচিত্র্য পরিমাপ'), sectionId: 'structure' },
      { id: 'sec-bile-acids', label: l('3. Microbial Bile Acid Biotransformation: FXR & TGR5 Signaling', '৩. অণুজীবীয় পিত্ত অম্লের রূপান্তর: FXR ও TGR5 রিসেপ্টর সংকেত'), sectionId: 'mechanism' },
      { id: 'sec-tmao', label: l('4. CutC Choline Lyase & Hepatic FMO3: The TMAO Atherogenic Axis', '৪. CutC কোলিন লাইয়েজ ও হেপাটিক FMO3: TMAO এথেরোজেনিক অক্ষ'), sectionId: 'integration' },
      { id: 'sec-indoles', label: l('5. Tryptophan Catabolites, AhR Activation & Clinical Metabolomics', '৫. ট্রিপটোফ্যান ক্যাটাবোলাইটস, AhR সক্রিয়করণ ও ক্লিনিক্যাল মেটাবোলোমিক্স'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('6. High-Yield Takeaways & Practice Questions', '৬. মূল শিক্ষণীয় সারসংক্ষেপ ও অনুশীলন'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Metagenomics (Shotgun vs 16S rRNA)', 'মেটাজেনোমিক্স (শটগান বনাম ১৬এস আরআরএনএ)'),
        definition: l(
          'The genomic analysis of microbial communities: 16S rRNA gene sequencing amplifies hypervariable regions (V3–V4) for taxonomic profiling, whereas whole-genome shotgun (WGS) metagenomics sequences all untargeted microbial DNA to resolve strains and functional metabolic gene pathways.',
          'অণুজীব সম্প্রদায়ের জিনগত বিশ্লেষণ: ১৬এস আরআরএনএ সিকোয়েন্সিং হাইপারভেরিয়েবল অঞ্চল (V3–V4) বিশ্লেষণ করে ট্যাক্সোনমি নির্ণয় করে, আর শটগান মেটাজেনোমিক্স সমস্ত অণুজীবের ডিএনএ বিশ্লেষণ করে নির্দিষ্ট ব্যাকটেরিয়াল স্ট্রেন ও এনজাইমেটিক মেটাবলিক পথ শনাক্ত করে।'
        ),
      },
      {
        term: l('Alpha vs Beta Diversity', 'আলফা বনাম বিটা বৈচিত্র্য'),
        definition: l(
          'Ecological metrics of microbiome composition: Alpha diversity quantifies species richness and evenness within a single host sample (e.g., Shannon index, Chao1), whereas Beta diversity quantifies the phylogenetic dissimilarity or taxonomic turnover between different host samples (e.g., Bray-Curtis, UniFrac).',
          'মাইক্রোবায়োম বৈচিত্র্য পরিমাপের দুটি পদ্ধতি: আলফা বৈচিত্র্য একজন ব্যক্তির পরিপাকতন্ত্রে প্রজাতির প্রাচুর্য ও সমতা পরিমাপ করে (শানন সূচক), পক্ষান্তরে বিটা বৈচিত্র্য একাধিক ব্যক্তির অণুজীব বাস্তুতন্ত্রের মধ্যকার দূরবর্তী বংশগত বা গঠনগত পার্থক্য নির্ণয় করে (ব্রেই-কার্টিস, ইউনিফ্র্যাক)।'
        ),
      },
      {
        term: l('Bile Salt Hydrolase (BSH)', 'বাইল সল্ট হাইড্রোলেজ (BSH)'),
        definition: l(
          'A bacterial amidase widely expressed across gut commensals that hydrolyzes the amide bond conjugating glycine or taurine to primary bile acids, releasing unconjugated cholic acid and chenodeoxycholic acid for downstream microbial transformation and host receptor modulation.',
          'একটি অণুজীবীয় এনজাইম যা যকৃতে তৈরি প্রাথমিক পিত্ত অম্লের সাথে যুক্ত গ্লাইসিন বা টরিনকে ভেঙে মুক্ত পিত্ত অম্ল তৈরি করে, যা পরবর্তীতে গৌণ পিত্ত অম্লে রূপান্তরিত হয়ে মানবদেহের FXR ও TGR5 রিসেপ্টর নিয়ন্ত্রণ করে।'
        ),
      },
      {
        term: l('CutC/CutD Choline Trimethylamine-Lyase', 'CutC/CutD কোলিন ট্রাইমিথাইলঅ্যামিন-লাইয়েজ'),
        definition: l(
          'A glycyl radical enzyme complex expressed by specific gut microbes that cleaves the carbon-nitrogen bond of dietary choline, releasing trimethylamine (TMA) gas, which travels via the portal vein to the liver to be oxidized into atherogenic TMAO by FMO3.',
          'নির্দিষ্ট কিছু অন্ত্রীয় ব্যাকটেরিয়ার গ্লাইসিল র্যাডিক্যাল এনজাইম যা খাদ্যের কোলিনের কার্বন-নাইট্রোজেন বন্ধন ভেঙে ট্রাইমিথাইলঅ্যামিন (TMA) তৈরি করে, যা যকৃতে গিয়ে FMO3 এনজাইম দ্বারা হৃদরোগ সৃষ্টিকারী TMAO-তে রূপান্তরিত হয়।'
        ),
      },
      {
        term: l('Aryl Hydrocarbon Receptor (AhR) Indoles', 'অ্যারিল হাইড্রোকার্বন রিসেপ্টর (AhR) ইনডোলস'),
        definition: l(
          'Microbially synthesized metabolites of dietary L-tryptophan (e.g., indole-3-propionic acid, indole-3-aldehyde) that act as endogenous ligands for the AhR transcription factor, stimulating mucosal ILC3 cells to secrete barrier-protective interleukin-22.',
          'খাদ্যের ট্রিপটোফ্যান অ্যামিনো অ্যাসিড থেকে অন্ত্রের ব্যাকটেরিয়া দ্বারা উৎপন্ন জৈব যৌগ (যেমন ইনডোল-৩-প্রোপিওনিক অ্যাসিড) যা এপিথেলিয়ামের AhR গ্রাহকে আবদ্ধ হয়ে ILC3 কোষ থেকে প্রাচীর সুরক্ষাকারী ইন্টারলিউকিন-২২ (IL-22) ক্ষরণ বৃদ্ধি করে।'
        ),
      },
      {
        term: l('Firmicutes/Bacteroidetes (F/B) Ratio', 'ফার্মিকিউটিস/ব্যাকটেরয়ডেটিস (F/B) অনুপাত'),
        definition: l(
          'A classic high-level taxonomic metric comparing the relative abundance of the two dominant bacterial phyla (now officially Bacillota and Bacteroidota), historically linked to variations in metabolic energy harvest efficiency and adiposity.',
          'অন্ত্রের প্রধান দুটি ব্যাকটেরিয়াল পর্বের (বর্তমানে Bacillota ও Bacteroidota) আপেক্ষিক অনুপাত, যা ঐতিহাসিকভাবে খাদ্যের অপাচ্য অংশ থেকে অতিরিক্ত ক্যালোরি শোষণ ও স্থূলতার সাথে সম্পর্কিত হিসেবে বিবেচিত হয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Computing Alpha Diversity: Shannon Index (H\') and Simpson Reciprocal Index (1/D)', 'আলফা বৈচিত্র্য গণনা: শানন সূচক (H\') এবং সিম্পসনের রেসিপ্রোকাল সূচক (1/D) নির্ণয়'),
        steps: [
          l(
            'Step 1: Clinical Dataset Extraction: A 38-year-old patient with inflammatory bowel disease in clinical remission undergoes 16S rRNA stool metagenomic sequencing. Relative abundance across the top 5 operational taxonomic units (OTUs) is tabulated: Faecalibacterium prausnitzii (p1 = 0.35), Bacteroides vulgatus (p2 = 0.25), Roseburia intestinalis (p3 = 0.20), Akkermansia muciniphila (p4 = 0.15), and Escherichia coli (p5 = 0.05).',
            'ধাপ ১: ক্লিনিক্যাল ডেটাসেট বিশ্লেষণ: আইবিডি (IBD) রোগ থেকে মুক্ত হওয়া এক রোগীর মলের ১৬এস আরআরএনএ সিকোয়েন্সিং থেকে শীর্ষ ৫টি ব্যাকটেরিয়াল ট্যাক্সার আপেক্ষিক অনুপাত পাওয়া গেল: ফাইক্যালিঅ্যাকটেরিয়াম (০.৩৫), ব্যাকটেরয়ডিস (০.২৫), রোজবুরিয়া (০.২০), আকেরম্যানসিয়া (০.১৫) এবং ই-কোলাই (০.০৫)।'
          ),
          l(
            'Step 2: Calculate Shannon Diversity Index (H\'): Apply the equation H\' = -SUM [pi * ln(pi)]. Individual computations: 0.35 * ln(0.35) = 0.35 * (-1.0498) = -0.3674; 0.25 * ln(0.25) = 0.25 * (-1.3863) = -0.3466; 0.20 * ln(0.20) = 0.20 * (-1.6094) = -0.3219; 0.15 * ln(0.15) = 0.15 * (-1.8971) = -0.2846; 0.05 * ln(0.05) = 0.05 * (-2.9957) = -0.1498. Sum of values = -1.4703. Therefore, H\' = 1.470.',
            'ধাপ ২: শানন বৈচিত্র্য সূচক গণনা: H\' = -SUM [pi * ln(pi)] সূত্র প্রয়োগ করে প্রতিটি অনুপাতের প্রাকৃতিক লগারিদম গুণ করে যোগফল পাওয়া গেল -১.৪৭০৩। অতএব মাইনাস চিহ্নের পর শানন সূচক H\' = ১.৪৭০।'
          ),
          l(
            'Step 3: Calculate Simpson Reciprocal Diversity Index (1/D): Simpson index D = SUM (pi^2) = (0.35)^2 + (0.25)^2 + (0.20)^2 + (0.15)^2 + (0.05)^2 = 0.1225 + 0.0625 + 0.0400 + 0.0225 + 0.0025 = 0.2500. Calculate Reciprocal Index: 1/D = 1 / 0.2500 = 4.00. This indicates an effective species diversity equivalent to 4 perfectly codominant, equally abundant microbial species.',
            'ধাপ ৩: সিম্পসনের রেসিপ্রোকাল সূচক (1/D) গণনা: প্রতিটি অনুপাতের বর্গ যোগ করে পাওয়া গেল D = ০.২৫০০। এর বিপরীত মান 1/D = ১ / ০.২৫০০ = ৪.০০। এর অর্থ অণুজীব বাস্তুতন্ত্রের কার্যকর বৈচিত্র্য চারটি সমান প্রভাব বিস্তারকারী প্রজাতির সমান।'
          ),
          l(
            'Step 4: Clinical Interpretation & Dietary Prescription: An H\' of 1.47 across these major taxa indicates robust diversity with a favorable dominance of butyrate-producing commensals (F. prausnitzii and Roseburia accounting for 55% of the community). To sustain this high diversity and prevent dysbiosis recurrence, prescribe 30 g/day of diverse prebiotic dietary fibers (inulin, resistant starch, acacia gum) and polyphenol-rich berries to nourish Akkermansia muciniphila.',
            'ধাপ ৪: ক্লিনিক্যাল ব্যাখ্যা ও পুষ্টি পরিকল্পনা: ১.৪৭ শানন মান সুস্থ বৈচিত্র্য এবং বিউটাইরেট তৈরি কারী ব্যাকটেরিয়ার (৫৫%) আধিক্য প্রমাণ করে। এই সুস্থ বাস্তুতন্ত্র ধরে রাখতে রোগীকে প্রতিদিন ৩০ গ্রাম মিশ্র প্রিবায়োটিক আঁশ (ইনুলিন, রেজিস্ট্যান্ট স্টার্চ) এবং পলিফেনল সমৃদ্ধ খাদ্য গ্রহণ করার নির্দেশ দেওয়া হলো।'
          ),
        ],
        conclusion: l(
          'Quantitative mathematical evaluation of alpha diversity metrics translates raw metagenomic readouts into actionable clinical indicators of gut microbial ecosystem resilience.',
          'আলফা বৈচিত্র্যের গাণিতিক পরিমাপ জটিল মেটাজেনোমিক ডেটাকে অন্ত্রের অণুজীব বাস্তুতন্ত্রের সহনশীলতা ও চিকিৎসার কার্যকর নির্দেশকে রূপান্তর করে।'
        ),
      },
      {
        title: l('Cardiovascular Risk Stratification: Serum TMAO & Dietary Choline Lyase Modulation', 'হৃদরোগ ঝুঁকি নিরূপণ: সিরাম টিএমএও (TMAO) ও খাদ্যের কোলিন লাইয়েজ নিয়ন্ত্রণ'),
        steps: [
          l(
            'Step 1: Clinical Presentation: A 58-year-old male with established coronary artery disease and elevated LDL-C (142 mg/dL) consumes a high-protein animal diet (6 eggs/day, 300 g red meat/day, carnitine supplements). Fasting serum Trimethylamine N-Oxide (TMAO) is quantified using stable-isotope dilution LC-MS/MS.',
            'ধাপ ১: রোগীর তথ্য: করোনারি হৃদরোগে আক্রান্ত ৫৮ বছর বয়সী এক ব্যক্তি প্রচুর ডিম, লাল মাংস ও কার্নিটিন সাপ্লিমেন্ট গ্রহণ করেন। এলসি-এমএস (LC-MS/MS) পরীক্ষার মাধ্যমে রক্তে ট্রাইমিথাইলঅ্যামিন এন-অক্সাইড (TMAO) এর মাত্রা পরিমাপ করা হলো।'
          ),
          l(
            'Step 2: Laboratory Assessment & Atherogenic Thresholds: Fasting serum TMAO returns at 14.8 micromol/L. Established prospective cardiovascular outcome trials define low risk as <3.5 micromol/L, intermediate risk as 3.5–6.2 micromol/L, and high risk as >=6.2 micromol/L. The patient’s value of 14.8 micromol/L confers a >2.5-fold increased hazard ratio for major adverse cardiac events (MACE).',
            'ধাপ ২: ল্যাবরেটরি মানদণ্ড মূল্যায়ন: রোগীর সিরাম TMAO মাত্রা পাওয়া গেল ১৪.৮ মাইক্রোমোল/লিটার। হৃদরোগ গবেষণায় ৩.৫ এর নিচে স্বাভাবিক এবং ৬.২ এর বেশি হলে অত্যন্ত ঝুঁকিপূর্ণ বিবেচনা করা হয়। রোগীর ১৪.৮ মান হৃদরোগের ঝুঁকি আড়াই গুণেরও বেশি বাড়িয়ে দিয়েছে।'
          ),
          l(
            'Step 3: Molecular Pathophysiology: Dietary phosphatidylcholine, choline, and L-carnitine are cleaved by bacterial glycyl radical enzymes (CutC/CutD and CntA/CntB) in the colon, yielding gaseous Trimethylamine (TMA). TMA is passively absorbed into the portal vein and oxidized by hepatic Flavin-containing Monooxygenase 3 (FMO3) to TMAO. Circulating TMAO promotes macrophage scavenger receptor (CD36, SR-A1) upregulation, inhibits reverse cholesterol transport, and triggers endothelial platelet hyperreactivity via IP3-dependent intracellular Ca2+ release.',
            'ধাপ ৩: আণবিক রোগশারীরবৃত্ত: ব্যাকটেরিয়ার CutC/CutD এনজাইম খাদ্যের কোলিন ভেঙে TMA গ্যাস তৈরি করে। এই গ্যাস রক্তে মিশে যকৃতে গেলে FMO3 এনজাইম একে বিষাক্ত TMAO-তে রূপান্তরিত করে। রক্তে TMAO বাড়লে তা ম্যাক্রোফেজে চর্বি জমিয়ে ফোম সেল তৈরি করে এবং রক্তের অণুচক্রিকাকে উত্তেজিত করে রক্ত জমাট বাঁধায়।'
          ),
          l(
            'Step 4: Targeted Dietary & Microbiome Intervention: Implement an intensive Mediterranean plant-forward diet: eliminate red meat and supplemental carnitine, restrict whole eggs to <=2/week, replace animal protein with legumes and cold-pressed extra virgin olive oil (rich in 3,3-dimethyl-1-butanol [DMB], a natural non-lethal inhibitor of microbial CutC lyase). Re-evaluate serum TMAO at 8 weeks with a therapeutic target of <4.0 micromol/L.',
            'ধাপ ৪: চিকিৎসাগত পুষ্টি হস্তক্ষেপ: রোগীকে ভূমধ্যসাগরীয় উদ্ভিজ্জ খাদ্যাভ্যাসে স্থানান্তরিত করা হলো: লাল মাংস ও কার্নিটিন সম্পূর্ণ বন্ধ, ডিম সীমিতকরণ এবং অলিভ অয়েল (যার DMB যৌগ ব্যাকটেরিয়ার CutC এনজাইমকে দমন করে) ব্যবহারের নির্দেশ দেওয়া হলো। ৮ সপ্তাহ পর সিরাম TMAO ৪.০ এর নিচে নামিয়ে আনার লক্ষ্য নির্ধারণ করা হলো।'
          ),
        ],
        conclusion: l(
          'Targeting the microbial CutC-hepatic FMO3 metabolic axis allows precision dietary suppression of atherogenic TMAO, uncoupling dietary choline intake from cardiovascular disease risk.',
          'অণুজীবের CutC এবং যকৃতের FMO3 বিপাকীয় পথ নিয়ন্ত্রণ করার মাধ্যমে খাদ্যের ক্ষতিকর প্রভাব কমিয়ে হৃদরোগের ঝুঁকি অভাবনীয়ভাবে হ্রাস করা সম্ভব।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'How does microbial Bile Salt Hydrolase (BSH) alter host metabolism through the nuclear Farnesoid X Receptor (FXR) and membrane TGR5 GPCR signaling pathways?',
          'অণুজীবীয় বাইল সল্ট হাইড্রোলেজ (BSH) এনজাইম কোন সুনির্দিষ্ট আণবিক প্রক্রিয়ায় FXR ও TGR5 রিসেপ্টরের মাধ্যমে মানবদেহের বিপাকীয় ক্রিয়া নিয়ন্ত্রণ করে?'
        ),
        answer: l(
          'Bile Salt Hydrolase (BSH) cleaves the amide bond connecting glycine or taurine to conjugated primary bile acids (taurocholic and glycocholic acids), yielding unconjugated free bile acids. Downstream bacterial 7alpha-dehydroxylases convert free cholic and chenodeoxycholic acids into the secondary bile acids deoxycholic acid (DCA) and lithocholic acid (LCA). Unconjugated bile acids and secondary bile acids exhibit fundamentally altered receptor pharmacodynamics: chenodeoxycholic acid is the most potent natural agonist of the nuclear Farnesoid X Receptor (FXR), which suppresses hepatic de novo lipogenesis via SHP and stimulates ileal FGF19 secretion to downregulate bile acid synthesis (CYP7A1). Conversely, the secondary bile acid LCA acts as the premier agonist of the G-protein coupled bile acid receptor TGR5 (GPBAR1) on enteroendocrine L-cells and brown adipose tissue, stimulating intracellular cAMP/PKA signaling that induces GLP-1 secretion and upregulates mitochondrial uncoupling protein-1 (UCP1) thermogenesis.',
          'বাইল সল্ট হাইড্রোলেজ (BSH) পিত্ত অম্লের সাথে যুক্ত গ্লাইসিন ও টরিন আলাদা করে মুক্ত পিত্ত অম্ল তৈরি করে, যা পরবর্তীতে ব্যাকটেরিয়ার এনজাইম দ্বারা সেকেন্ডারি পিত্ত অম্লে (DCA ও LCA) রূপান্তরিত হয়। এই রূপান্তর রিসেপ্টর সংকেত সম্পূর্ণ বদলে দেয়: মুক্ত পিত্ত অম্ল যকৃতের FXR রিসেপ্টরকে উত্তেজিত করে অতিরিক্ত চর্বি তৈরি বন্ধ করে এবং অন্ত্র থেকে FGF19 হরমোন ক্ষরণ করায়। অপরপক্ষে সেকেন্ডারি পিত্ত অম্ল (LCA) অন্ত্রের এল-কোষের TGR5 রিসেপ্টরকে উদ্দীপিত করে রক্তে ইনসুলিন বৃদ্ধিকারী GLP-1 হরমোন ক্ষরণ করায় এবং বাদামি চর্বি কোষে UCP1 সক্রিয় করে ক্যালোরি জ্বালিয়ে দেহের ওজন নিয়ন্ত্রণে সহায়তা করে।'
        ),
      },
      {
        question: l(
          'What is the precise enzymatic mechanism by which the bacterial CutC/CutD choline trimethylamine-lyase pathway generates pro-atherogenic Trimethylamine N-Oxide (TMAO)?',
          'কোন সুনির্দিষ্ট এনজাইমেটিক প্রক্রিয়ায় ব্যাকটেরিয়াল CutC/CutD পাথওয়ে খাদ্যের কোলিন থেকে রক্তনালির জন্য ক্ষতিকর TMAO তৈরি করে?'
        ),
        answer: l(
          'Dietary phosphatidylcholine (lecithin), free choline, and L-carnitine that reach the distal ileum and cecum encounter commensal bacteria harboring the choline utilization gene cluster (CutC/CutD). CutC functions as a glycyl radical enzyme that forms a carbon-centered radical on its active-site cysteine, which executes homolytic cleavage of the carbon-nitrogen bond in choline, generating acetaldehyde and volatile Trimethylamine (TMA) gas. CutD operates as the obligate activating radical S-adenosylmethionine (SAM) oxidoreductase that regenerates the active CutC glycyl radical. The generated TMA gas rapidly diffuses across the colonic epithelium into portal blood, where hepatic Flavin-containing Monooxygenase isoform 3 (FMO3) oxidizes TMA into Trimethylamine N-Oxide (TMAO). Circulating TMAO directly promotes vascular atherosclerosis by upregulating CD36 and SR-A1 scavenger receptors on macrophages (accelerating foam cell formation) and sensitizing platelet inositol 1,4,5-trisphosphate (IP3) signaling to promote hyperactive thrombosis.',
          'খাবারের লেসিথিন, কোলিন ও কার্নিটিন বৃহদন্ত্রে পৌঁছালে ব্যাকটেরিয়ার CutC/CutD এনজাইম জটিল এদের মুখোমুখি হয়। CutC একটি গ্লাইসিল র্যাডিক্যাল এনজাইম যা কোলিনের কার্বন-নাইট্রোজেন বন্ধন ভেঙে অ্যাসিটালডিহাইড এবং ট্রাইমিথাইলঅ্যামিন (TMA) গ্যাস তৈরি করে। এই TMA গ্যাস রক্তে শোষিত হয়ে যকৃতে পৌঁছায় এবং যকৃতের FMO3 এনজাইম একে ট্রাইমিথাইলঅ্যামিন এন-অক্সাইড (TMAO)-তে জারিত করে। রক্তে ভাসমান TMAO ম্যাক্রোফেজ কোষে অতিরিক্ত কোলেস্টেরল জমিয়ে রক্তনালী বন্ধ করে দেয় এবং অণুচক্রিকাকে উত্তেজিত করে হৃদরোগ ও স্ট্রোকের ঝুঁকি বহুগুণ বাড়িয়ে তোলে।'
        ),
      },
      {
        question: l(
          'How do commensal microbial tryptophan catabolites activate the Aryl Hydrocarbon Receptor (AhR) to maintain mucosal integrity and interleukin-22 secretion?',
          'অন্ত্রের অণুজীব দ্বারা তৈরি ট্রিপটোফ্যান উপজাতগুলো কীভাবে AhR রিসেপ্টর সক্রিয় করে পরিপাক প্রাচীরের অখণ্ডতা এবং IL-22 ক্ষরণ নিশ্চিত করে?'
        ),
        answer: l(
          'Commensal gut bacteria possessing tryptophanase and aromatic aminotransferases (e.g., Lactobacillus reuteri, Clostridium sporogenes) metabolize dietary L-tryptophan into specific indole metabolites, including indole-3-propionic acid (IPA), indole-3-aldehyde (IAld), and indole-3-acetic acid (IAA). These indoles act as potent physiological ligands that bind the cytosolic transcription factor Aryl Hydrocarbon Receptor (AhR). Ligand binding induces AhR nuclear translocation, heterodimerization with the AhR Nuclear Translocator (ARNT), and binding to Xenobiotic Response Elements (XRE) in the promoter regions of target genes. Within group 3 innate lymphoid cells (ILC3s), AhR activation drives robust transcription of Interleukin-22 (IL-22). Secreted IL-22 binds IL-22R1 on enterocytes and Paneth cells, activating STAT3 phosphorylation, which induces the expression of antimicrobial C-type lectins (REG3gamma, REG3beta), stimulates goblet cell MUC2 mucin synthesis, and promotes epithelial stem cell proliferation to accelerate mucosal wound healing.',
          'খাদ্যের এল-ট্রিপটোফ্যান অ্যামিনো অ্যাসিডকে অন্ত্রের উপকারী ব্যাকটেরিয়া ভেঙে ইনডোল-৩-প্রোপিওনিক অ্যাসিড (IPA) ও ইনডোল-৩-অ্যালডিহাইড (IAld) তৈরি করে। এই ইনডোল যৌগগুলো কোষের ভেতরের অ্যারিল হাইড্রোকার্বন রিসেপ্টরে (AhR) বসে নিউক্লিয়াসে প্রবেশ করে জিনের প্রকাশ ঘটায়। অন্ত্রের বিশেষ অনাক্রম্য কোষের (ILC3) ভেতরে AhR সক্রিয় হলে প্রচুর পরিমাণে ইন্টারলিউকিন-২২ (IL-22) ক্ষরিত হয়। এই IL-22 হরমোন এন্টারোসাইটের STAT3 প্রোটিনকে উদ্দীপ্ত করে প্যানেথ কোষ থেকে REG3gamma অণুজীবনাশক পেপটাইড নিঃসৃত করায়, মিউসিন স্তরকে পুরু করে এবং ক্ষতিগ্রস্ত কোষ মেরামত করে অন্ত্রের প্রাচীরকে আজীবন শক্তিশালী রাখে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'microbiome-taxonomic-metabolite-axis',
    title: l(
      'The Human Gut Microbiome: Taxonomic Architecture & Metabolite Networks',
      'মানব অন্ত্রের মাইক্রোবায়োম: ট্যাক্সোনমিক কাঠামো ও বিপাকীয় নেটওয়ার্ক'
    ),
    description: l(
      'Interactive architecture of gut microbial phyla, alpha/beta diversity metrics, secondary bile acid transformation via BSH, and CutC/FMO3 TMAO synthesis.',
      'অন্ত্রের প্রধান ব্যাকটেরিয়াল পর্ব, আলফা ও বিটা বৈচিত্র্য পরিমাপ, BSH এনজাইমে পিত্ত অম্ল রূপান্তর এবং CutC ও FMO3 এর মাধ্যমে TMAO তৈরির ইন্টারঅ্যাক্টিভ রূপরেখা।'
    ),
    disclaimer: l(
      'Educational metagenomic pathway simulation; clinical microbiome interventions require validated diagnostic profiling.',
      'শিক্ষামূলক মেটাজেনোমিক সিমুলেশন; অণুজীব সংক্রান্ত যেকোনো ক্লিনিক্যাল চিকিৎসার পূর্বে সঠিক পরীক্ষা আবশ্যক।'
    ),
    svgType: 'microbiome-axis',
    imageUrl: '/assets/gut_microbiome_metagenomics_overview.jpg',
    imageCaption: l(
      'Medical textbook illustration of the human gut microbiome ecosystem and metabolic networks: 3.8 x 10^13 bacterial census across Bacillota, Bacteroidota, and Verrucomicrobiota phyla, alpha vs beta ecological biodiversity metrics, microbial Bile Salt Hydrolase (BSH) and 7alpha-dehydroxylase producing secondary bile acids (DCA, LCA) for FXR/TGR5 signaling, and CutC/D choline lyase producing Trimethylamine oxidized by hepatic FMO3 into atherogenic TMAO.',
      'মানব অন্ত্রের মাইক্রোবায়োম বাস্তুতন্ত্র ও বিপাকীয় নেটওয়ার্কের মেডিকেল ইলাস্ট্রেশন: ব্যাকিলটা, ব্যাক্টেরয়ডটা ও ভেরুকোমাইক্রোবায়োটা পর্বের ৩.৮ x ১০^১৩ ব্যাকটেরিয়াল জনশুমারি, আলফা ও বিটা পরিবেশগত জীববৈচিত্র্য পরিমাপ, ব্যাকটেরিয়াল BSH ও ৭-আলফা ডিহাইড্রোক্সিলেজে সেকেন্ডারি পিত্ত অম্ল (DCA, LCA) তৈরি যা FXR/TGR5 নিয়ন্ত্রণ করে এবং CutC/D কোলিন লাইয়েজে উৎপন্ন TMA যকৃতের FMO3 দ্বারা হৃদরোগ সৃষ্টিকারী TMAO তে রূপান্তর।'
    ),
    has3D: true,
    threeDType: 'microbiome-metagenomics-3d',
    items: [
      {
        id: 'node-phyla-census',
        label: l('Taxonomic Phyla & Microbial Census', 'ট্যাক্সোনমিক পর্ব ও অণুজীব গণনা'),
        description: l(
          'Over 3.8 x 10^13 bacterial cells dominated by Bacillota, Bacteroidota, Actinomycetota, Pseudomonadota, and Verrucomicrobiota.',
          'প্রায় ৩.৮ x ১০^১৩ ব্যাকটেরিয়া যার ৯৫% এর বেশি Bacillota, Bacteroidota, Actinomycetota ও Verrucomicrobiota পর্বের অন্তর্ভুক্ত।'
        ),
        details: l(
          'Revised cell counting establishes a 1:1 stoichiometry with human cells (3.8 x 10^13 bacteria vs 3.0 x 10^13 human cells). Bacillota and Bacteroidota comprise >90% of all taxa in healthy adults.',
          'আধুনিক গবেষণায় দেখা গেছে মানবদেহের কোষ ও ব্যাকটেরিয়ার অনুপাত প্রায় ১:১। সুস্থ মানুষের অন্ত্রে ব্যাকিলটা ও ব্যাক্টেরয়ডটা পর্ব দুটিই শতকরা ৯০ ভাগের বেশি আধিপত্য বিস্তার করে।'
        ),
        color: '#10b981',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
        position3D: { x: -80, y: -50, z: 20 },
      },
      {
        id: 'node-alpha-beta-diversity',
        label: l('Alpha vs Beta Biodiversity Metrics', 'আলফা বনাম বিটা জীববৈচিত্র্য পরিমাপ'),
        description: l(
          'Alpha diversity measures within-sample richness (Shannon H\'), while Beta diversity measures phylogenetic dissimilarity between subjects (UniFrac).',
          'আলফা বৈচিত্র্য একজন ব্যক্তির অন্ত্রের প্রজাতির প্রাচুর্য (শানন সূচক) এবং বিটা বৈচিত্র্য একাধিক ব্যক্তির মধ্যকার পার্থক্য পরিমাপ করে।'
        ),
        details: l(
          'High alpha diversity is a hallmark of ecological resilience. Low diversity correlates with metabolic syndrome, IBD, and recurrent C. difficile infections. Beta diversity quantifies distance across dietary and geographic cohorts.',
          'উচ্চ আলফা বৈচিত্র্য সুস্থ অন্ত্রের প্রতীক। বৈচিত্র্য কমে গেলে পেটের প্রদাহজনক রোগ (IBD) ও ডায়াবেটিসের ঝুঁকি বাড়ে। বিটা বৈচিত্র্যের মাধ্যমে বিভিন্ন দেশের খাদ্যাভ্যাসের পার্থক্য বিশ্লেষণ করা হয়।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
        position3D: { x: 80, y: -50, z: -20 },
      },
      {
        id: 'node-secondary-bile-acids',
        label: l('Bile Salt Hydrolase (BSH) & Secondary Bile Acids', 'বাইল সল্ট হাইড্রোলেজ (BSH) ও সেকেন্ডারি পিত্ত অম্ল'),
        description: l(
          'Microbial BSH deconjugates tauro/glyco-bile acids, and 7alpha-dehydroxylase generates DCA and LCA to activate FXR and TGR5.',
          'ব্যাকটেরিয়ার BSH এনজাইম পিত্ত অম্ল থেকে গ্লাইসিন/টরিন মুক্ত করে এবং ৭-আলফা ডিহাইড্রোক্সিলেজ এনজাইম DCA ও LCA তৈরি করে FXR ও TGR5 নিয়ন্ত্রণ করে।'
        ),
        details: l(
          'Deconjugated free bile acids and secondary bile acids serve as hormonal signaling molecules: CDCA is the potent agonist for nuclear FXR (controlling lipids and bile synthesis), while LCA activates membrane TGR5 on L-cells to drive GLP-1 secretion.',
          'মুক্ত পিত্ত অম্ল যকৃতের FXR রিসেপ্টরকে উদ্দীপিত করে চর্বি নিয়ন্ত্রণ করে এবং সেকেন্ডারি পিত্ত অম্ল TGR5 সক্রিয় করে ইনসুলিন উদ্দীপক GLP-1 হরমোন ক্ষরণ করায়।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
        position3D: { x: -80, y: 50, z: -20 },
      },
      {
        id: 'node-cutc-tmao',
        label: l('CutC Choline Lyase & Hepatic FMO3 TMAO', 'CutC কোলিন লাইয়েজ ও হেপাটিক FMO3 TMAO'),
        description: l(
          'CutC/D cleaves dietary choline into Trimethylamine (TMA), oxidized by hepatic FMO3 into atherogenic Trimethylamine N-Oxide (TMAO).',
          'CutC/D এনজাইম কোলিন ভেঙে TMA গ্যাস তৈরি করে, যা যকৃতের FMO3 দ্বারা হৃদরোগ সৃষ্টিকারী TMAO-তে রূপান্তরিত হয়।'
        ),
        details: l(
          'CutC/D cleaves dietary choline into Trimethylamine (TMA). TMA traverses the portal vein where hepatic Flavin-containing Monooxygenase 3 (FMO3) oxidizes it into Trimethylamine N-Oxide (TMAO), promoting foam cell formation and platelet aggregation.',
          'CutC/D cleaves dietary choline into Trimethylamine (TMA). রক্তে শোষিত TMA যকৃতের FMO3 দ্বারা TMAO তে পরিণত হয়, যা রক্তনালীতে চর্বি জমিয়ে এবং রক্ত জমাট বাঁধিয়ে হৃদরোগ ও স্ট্রোকের ঝুঁকি বহুগুণ বৃদ্ধি করে।'
        ),
        color: '#dc2626',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
        position3D: { x: 80, y: 50, z: 25 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'মৌলিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. The Superorganism: Microbial Census & Taxonomic Architecture', '১. জীবজগতের মহা-বাস্তুতন্ত্র: অণুজীব গণনা ও শ্রেণিবিন্যাস কাঠামো'),
          paragraphs: [
            l(
              'The human body is not a solitary biological entity, but rather an intricate, co-evolved holobiont—a collective "superorganism" comprising tens of trillions of human eukaryotic somatic cells living in tight metabolic symbiosis with an astronomical ecosystem of prokaryotes, archaea, fungi, and viruses [1, 2]. Historical scientific estimates from the 1970s famously claimed that bacterial cells outnumbered human cells by a ratio of 10:1 [1]. However, landmark rigorous quantitative revisions published by Sender, Fuchs, and Milo in 2016 established that the reference human adult (weighing 70 kg) contains approximately 3.0 x 10^13 human somatic cells and 3.8 x 10^13 bacterial cells—a near-equal stoichiometric ratio of roughly 1:1 [1]. Over 99% of this staggering microbial biomass resides within the warm, anoxic lumen of the gastrointestinal tract, primarily concentrated in the distal colon [1, 2].',
              'মানবদেহ কোনো একক বিচ্ছিন্ন জৈবিক সত্তা নয়; বরং এটি কোটি কোটি বছর ধরে বিবর্তিত এক অনন্য মহা-বাস্তুতন্ত্র বা "সুপারঅর্গানিজম"—যেখানে ট্রিলিয়ন ট্রিলিয়ন মানব কোষের সাথে এক অনন্ত অণুজীব বাস্তুতন্ত্র (ব্যাকটেরিয়া, আর্কিয়া, ছত্রাক ও ভাইরাস) পরম বিপাকীয় মৈত্রীতে বসবাস করে [১, ২]। ১৯৭০-এর দশকের পুরনো বৈজ্ঞানিক ধারণায় বলা হতো মানবদেহে কোষের চেয়ে ব্যাকটেরিয়ার সংখ্যা নাকি ১০ গুণ বেশি [১]। কিন্তু ২০১৬ সালে সেল জার্নালে প্রকাশিত সেন্ডার, ফুকস ও মিলোর ঐতিহাসিক গবেষণায় প্রমাণিত হয়েছে যে একজন ৭০ কেজি ওজনের সুস্থ মানুষের দেহে প্রায় ৩.০ x ১০^১৩ টি মানব কোষ এবং ৩.৮ x ১০^১৩ টি ব্যাকটেরিয়া থাকে—অর্থাৎ মানব কোষ ও ব্যাকটেরিয়ার অনুপাত প্রায় সমান বা ১:১ [১]। এই বিপুল অণুজীব সাম্রাজ্যের শতকরা ৯৯ ভাগের বেশি বাস করে আমাদের বৃহদন্ত্রের পুষ্টিসমৃদ্ধ ও অক্সিজেনহীন অন্ধকূপে [১, ২]।'
            ),
            l(
              'At the highest taxonomic level of biological classification, the adult human gut microbiome is dominated by five primary bacterial phyla: Bacillota (formerly Firmicutes), Bacteroidota (formerly Bacteroidetes), Actinomycetota (formerly Actinobacteria), Pseudomonadota (formerly Proteobacteria), and Verrucomicrobiota [1, 6]. Together, the two dominant phyla—Bacillota and Bacteroidota—comprise more than 90% of the entire microbial community in a healthy human gut [1, 2]. Bacillota encompass major anaerobic, gram-positive spore-forming and non-spore-forming fermenters, including dominant butyrate-producing genera such as Faecalibacterium, Roseburia, Eubacterium, and Ruminococcus [2, 6]. Bacteroidota are gram-negative, non-spore-forming obligate anaerobes, dominated by the genera Bacteroides and Prevotella, renowned for their unparalleled genomic machinery dedicated to harvesting and hydrolyzing complex dietary polysaccharides [2, 6].',
              'শ্রেণিবিন্যাসের সর্বোচ্চ স্তরে প্রাপ্তবয়স্ক মানুষের অন্ত্রের অণুজীব সম্প্রদায় মূলত পাঁচটি প্রধান ব্যাকটেরিয়াল পর্ব দ্বারা নিয়ন্ত্রিত হয়: Bacillota (পূর্বনাম ফার্মিকিউটিস), Bacteroidota (পূর্বনাম ব্যাকটেরয়ডেটিস), Actinomycetota (অ্যাক্টিনোব্যাকটেরিয়া), Pseudomonadota (প্রোটিওব্যাকটেরিয়া) এবং Verrucomicrobiota [১, ৬]। এর মধ্যে প্রথম দুটি পর্ব—Bacillota এবং Bacteroidota—একত্রিতভাবে সুস্থ অন্ত্রের শতকরা ৯০ ভাগের বেশি স্থান দখল করে থাকে [১, ২]। Bacillota পর্বের মধ্যে রয়েছে প্রধান বিউটাইরেট তৈরি কারী বন্ধু ব্যাকটেরিয়া (যেমন Faecalibacterium, Roseburia ও Ruminococcus) [২, ৬]। অপরপক্ষে Bacteroidota পর্বের ব্যাকটেরয়ডিস ও প্রিভোটেলা ব্যাকটেরিয়াগুলো জটিল আঁশ ও অপাচ্য শর্করা ভেঙে মানবদেহের জন্য দরকারি শক্তি তৈরিতে পৃথিবীর সবচেয়ে পারদর্শী কারিগর [২, ৬]।'
            ),
            l(
              'The minor phyla, while representing a lower percentage of the total cell count, play outsized ecological and immunological roles within the gut ecosystem [1, 2]. Actinomycetota includes the critically important genus Bifidobacterium, which dominates the infant gut during breastfeeding, metabolizing human milk oligosaccharides (HMOs) to establish early mucosal immune tolerance and intestinal barrier defense [2]. Verrucomicrobiota is represented in humans primarily by a single keystone species, Akkermansia muciniphila [2, 6]. Residing directly within the colonic mucus hydrogel, A. muciniphila consumes MUC2 mucin glycans as its primary fuel source; this specialized grazing stimulates goblet cells to continuously secrete fresh, thick mucus while releasing short-chain fatty acids that nourish adjacent enterocytes [2, 6]. Conversely, an expansion of the phylum Pseudomonadota (which houses opportunistic pathobionts such as Escherichia coli, Klebsiella, and Salmonella) serves as a classic diagnostic hallmark of epithelial oxygenation breakdown and mucosal dysbiosis [2, 6].',
              'তুলনামূলক কম সংখ্যায় থাকলেও অন্যান্য অপ্রধান পর্বগুলো অন্ত্রের অনাক্রম্যতা রক্ষায় অত্যন্ত প্রভাবশালী ভূমিকা পালন করে [১, ২]। Actinomycetota পর্বের মধ্যে রয়েছে বাইফিডোব্যাকটেরিয়া, যা মায়ের বুকের দুধ পান করা নবজাতকের পেটে শতকরা ৯০ ভাগ স্থান দখল করে থাকে এবং মাতৃদুগ্ধের জটিল শর্করা (HMO) ভেঙে শিশুর অন্ত্রীয় প্রতিরক্ষা গড়ে তোলে [২]। Verrucomicrobiota পর্বের সবচেয়ে পরিচিত সদস্য হলো আকেরম্যানসিয়া মিউসিনিফিলা (Akkermansia muciniphila) [২, ৬]। মিউসিন স্তরের মধ্যে বাস করে এই ব্যাকটেরিয়াটি পুরনো মিউসিন খেয়ে বেঁচে থাকে এবং একই সাথে গবলেট কোষগুলোকে অবিরাম নতুন মিউসিন তৈরিতে উদ্দীপিত করে দেয়ালকে পুরু রাখে [২, ৬]। অপরপক্ষে Pseudomonadota পর্বের (যেমন ই-কোলাই ও সালমোনেলা) বৃদ্ধি পাওয়া পেটের দেয়াল ক্ষতিগ্রস্ত হওয়া এবং ক্ষতিকর প্রদাহ বা ডিসবায়োসিসের সুস্পষ্ট লক্ষণ [২, ৬]।'
            ),
            l(
              'Collectively, this vast intestinal microbiome encodes a collective genetic reservoir—termed the human metagenome—exceeding 3 to 5 million unique microbial genes, dwarfing the approximately 20,000 to 25,000 protein-coding genes of the human nuclear genome by a factor of over 150 [1, 6]. This extraordinary auxiliary genetic repository endows the human host with metabolic capabilities that our own mammalian genome never evolved, including the enzymatic digestion of plant cell-wall polysaccharides, de novo synthesis of essential B-complex vitamins and vitamin K, conversion of primary bile acids into endocrine signaling molecules, and detoxification of xenobiotics [2, 6]. Understanding the taxonomic structure and genomic wealth of this superorganism is foundational to mastering modern clinical nutrition and metabolic medicine [1, 2, 4].',
              'একত্রিতভাবে এই ট্রিলিয়ন ট্রিলিয়ন অণুজীবের জিনগত সমষ্টি—যাকে মেটাজেনোম বলা হয়—৩০ থেকে ৫০ লক্ষেরও বেশি অনন্য জিন বহন করে, যা মানুষের নিজস্ব ২০,০০০ জিনের চেয়ে প্রায় ১৫০ গুণ বেশি [১, ৬]। এই সুবিশাল জিনগত ভাণ্ডার মানবদেহকে এমন সব রাসায়নিক ক্ষমতা উপহার দিয়েছে যা আমাদের নিজস্ব কোষগুলো বিবর্তনের মাধ্যমে অর্জন করতে পারেনি; যেমন জটিল খাদ্য আঁশ ভেঙে শক্তি তৈরি, ভিটামিন বি ও ভিটামিন কে তৈরি, পিত্ত অম্লের রূপান্তর এবং খাদ্যের বিষাক্ত পদার্থ নিষ্ক্রিয়করণ [২, ৬]। এই জীবন্ত মহা-বাস্তুতন্ত্রের আণবিক ভিত্তি জানা আধুনিক পুষ্টিবিজ্ঞান ও ক্লিনিক্যাল চিকিৎসাবিজ্ঞানের প্রতিটি শিক্ষার্থীর জন্য অত্যন্ত অপরিহার্য [১, ২, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Metagenomic Profiling & Ecological Diversity Metrics', '২. মেটাজেনোমিক প্রোফাইলিং ও বাস্তুতাত্ত্বিক বৈচিত্র্য পরিমাপ'),
          paragraphs: [
            l(
              'To explore and quantify the astronomical diversity of the human gut microbiome, scientific methodology has evolved from traditional, biased anaerobic culture techniques toward high-throughput culture-independent molecular genomics [1, 6]. The two primary molecular methodologies employed in modern clinical and academic research are targeted 16S ribosomal RNA (16S rRNA) amplicon sequencing and whole-genome shotgun (WGS) metagenomics [6]. The 16S rRNA gene is universally conserved across all bacteria and archaea, encoding the RNA component of the 30S small ribosomal subunit [6]. Crucially, the ~1,500-base-pair 16S rRNA gene contains nine highly conserved structural framework regions interspersed with nine hypervariable regions (designated V1 through V9) [6]. By designing universal PCR primers that bind the invariant flanking sequences, researchers amplify and sequence specific hypervariable windows (most commonly V3–V4 or V4), comparing the resulting sequence divergence against curated taxonomic reference databases to identify bacterial genera and species [6].',
              'মানব অন্ত্রের এই সুবিশাল অণুজীব বৈচিত্র্য পরীক্ষা করার জন্য চিকিৎসাবিজ্ঞান পুরনো ল্যাবরেটরি কালচার পদ্ধতি থেকে আধুনিক জিনোম সিকোয়েন্সিং প্রযুক্তিতে রূপান্তরিত হয়েছে [১, ৬]। বর্তমানে গবেষণায় দুটি প্রধান প্রযুক্তি ব্যবহৃত হয়: ১৬এস আরআরএনএ (16S rRNA) অ্যাম্পলিকন সিকোয়েন্সিং এবং হোল-জিনোম শটগান (WGS) মেটাজেনোমিক্স [৬]। ১৬এস আরআরএনএ জিনটি সকল ব্যাকটেরিয়া ও আর্কিয়ার মধ্যে সংরক্ষিত থাকে এবং এটি ব্যাকটেরিয়াল রাইবোজোমের ৩০এস সাবইউনিট তৈরি করে [৬]। প্রায় ১৫০০ বেস-পেয়ারের এই জিনটিতে নয়টি অতি-সংরক্ষিত অঞ্চলের মাঝে নয়টি চরম পরিবর্তনশীল অঞ্চল (V1 থেকে V9) থাকে [৬]। বিজ্ঞানীরা এই পরিবর্তনশীল অঞ্চলগুলোর (প্রধানত V3–V4) ডিএনএ সিকোয়েন্স করে কম্পিউটারের সাহায্যে ডাটাবেসের সাথে মিলিয়ে মুহূর্তেই অন্ত্রে কোন কোন প্রজাতির ব্যাকটেরিয়া বাস করছে তা নিখুঁতভাবে শনাক্ত করতে পারেন [৬]।'
            ),
            l(
              'While 16S rRNA sequencing provides cost-effective taxonomic profiling, it suffers from inherent biological limitations: it cannot reliably resolve down to the strain level, cannot detect bacteriophages, viruses, or fungi, and yields no direct data on functional gene pathways [6]. To overcome these hurdles, comprehensive academic studies rely on whole-genome shotgun (WGS) metagenomic sequencing [6]. In WGS, total genomic DNA is extracted directly from the fecal or mucosal sample, randomly fragmented into millions of short fragments, and sequenced in an untargeted fashion [6]. Advanced computational bioinformatics pipelines then map these sequence reads to reference genomes or perform de novo assembly into metagenome-assembled genomes (MAGs) [6]. WGS metagenomics not only resolves bacterial strains with single-nucleotide precision, but also catalogs the entire functional metabolic capacity—annotating the presence and copy number of antibiotic resistance genes, carbohydrate-active enzymes (CAZymes), and biosynthetic gene clusters [2, 6].',
              'যদিও ১৬এস আরআরএনএ প্রযুক্তি সাশ্রয়ীভাবে ব্যাকটেরিয়ার উপস্থিতি জানিয়ে দেয়, তবে এর কিছু সীমাবদ্ধতা রয়েছে: এটি ব্যাকটেরিয়ার সূক্ষ্ম স্ট্রেন বা উপপ্রজাতি শনাক্ত করতে পারে না, কোনো ভাইরাস বা ছত্রাক ধরতে পারে না এবং ব্যাকটেরিয়ার বিপাকীয় জিন সম্পর্কে কোনো তথ্য দিতে পারে না [৬]। এই ত্রুটি দূর করার জন্য আধুনিক গবেষণায় হোল-জিনোম শটগান মেটাজেনোমিক্স (WGS) ব্যবহৃত হয় [৬]। এই পদ্ধতিতে মলের সমস্ত ডিএনএ একসাথে বের করে লাখ লাখ ক্ষুদ্র টুকরোয় ভেঙে উচ্চ ক্ষমতাসম্পন্ন কম্পিউটারের সাহায্যে সরাসরি সিকোয়েন্স করা হয় [৬]। শটগান মেটাজেনোমিক্স কেবল ব্যাকটেরিয়ার স্ট্রেনই নিখুঁতভাবে নির্ধারণ করে না, বরং অণুজীবগুলোর মধ্যে কোন কোন বিপাকীয় এনজাইম, অ্যান্টিবায়োটিক প্রতিরোধী জিন এবং বিষাক্ত পদার্থ তৈরির জিন রয়েছে তা সম্পূর্ণ উন্মোচিত করে দেয় [২, ৬]।'
            ),
            l(
              'To interpret the vast datasets generated by metagenomics, researchers apply principles from macroscopic macro-ecology, primarily quantified through Alpha Diversity and Beta Diversity [1, 6]. Alpha diversity quantifies the biodiversity within a single host ecosystem—evaluating both "richness" (the absolute count of distinct taxa present) and "evenness" (how equitably individual bacterial cells are distributed among those taxa) [6]. The most widely recognized mathematical metric is the Shannon Diversity Index (H\'), which integrates richness and relative abundance; a high Shannon index indicates a diverse, balanced ecosystem where no single species dominates aberrantly [6]. The Chao1 index estimates total species richness including rare, low-abundance taxa, whereas the Simpson Reciprocal Index (1/D) emphasizes species dominance [6]. Clinically, high alpha diversity is universally regarded as a hallmark of mucosal health, reflecting an ecologically resilient community capable of resisting pathogen invasion and metabolic stress [1, 2, 6].',
              'মেটাজেনোমিক্সের এই বিপুল তথ্য বিশ্লেষণ করার জন্য বাস্তুবিজ্ঞানের দুটি প্রধান ধারণা প্রয়োগ করা হয়: আলফা বৈচিত্র্য (Alpha Diversity) এবং বিটা বৈচিত্র্য (Beta Diversity) [১, ৬]। আলফা বৈচিত্র্য একজন একক ব্যক্তির অন্ত্রের নিজস্ব অভ্যন্তরীণ জীববৈচিত্র্য পরিমাপ করে—যা মূলত প্রজাতির মোট সংখ্যা (Richness) এবং প্রতিটি প্রজাতির আনুপাতিক সমতা (Evenness) বিবেচনা করে [৬]। এর সবচেয়ে জনপ্রিয় গাণিতিক পরিমাপ হলো শানন সূচক (Shannon Index, H\'); উচ্চ শানন সূচক নির্দেশ করে যে ব্যক্তির পেটে প্রচুর প্রজাতির ব্যাকটেরিয়া সুষম ভারসাম্যে বসবাস করছে এবং কোনো ক্ষতিকর প্রজাতি একা আধিপত্য করছে না [৬]। চিকিৎসাবিজ্ঞানে উচ্চ আলফা বৈচিত্র্য সুস্থ অন্ত্রের প্রধান মাপকাঠি হিসেবে স্বীকৃত, যা রোগজীবাণুর আক্রমণ ও বিপাকীয় জটিলতা প্রতিরোধে অন্ত্রকে বিপুল সহনশীলতা প্রদান করে [১, ২, ৬]।'
            ),
            l(
              'Beta diversity, in contrast, evaluates the ecological dissimilarity or compositional turnover between different biological samples or patient cohorts [6]. Utilizing distance matrices such as Bray-Curtis dissimilarity (which incorporates taxonomic relative abundances) or UniFrac distance (which accounts for the phylogenetic evolutionary relationships among taxa), researchers calculate the mathematical "distance" between individual microbiomes [6]. These multidimensional distances are visualized using Principal Coordinates Analysis (PCoA) plots, where samples that cluster closely together share similar microbial communities, while distant points represent fundamentally divergent ecosystems [6]. Beta diversity analysis has conclusively demonstrated that human gut microbiomes segregate dramatically based on geographic origin, industrialization, dietary fiber intake, and the presence of chronic metabolic or inflammatory diseases [2, 6].',
              'বিপরীতে বিটা বৈচিত্র্য একাধিক ভিন্ন ব্যক্তি বা রোগীর দলের অণুজীব বাস্তুতন্ত্রের মধ্যকার দূরবর্তী বংশগত বা গঠনগত পার্থক্য পরিমাপ করে [৬]। ব্রেই-কার্টিস ডাইসিমিলারিটি কিংবা ইউনিফ্র্যাক দূরত্বের মতো গাণিতিক সূত্রের সাহায্যে দুজন ব্যক্তির অন্ত্রের মধ্যকার পার্থক্য গণনা করা হয় [৬]। এই জটিল পার্থক্যগুলোকে কম্পিউটারে PCoA প্লটের মাধ্যমে চিত্রিত করা হয়, যেখানে কাছাকাছি থাকা বিন্দুগুলো একই ধরণের খাদ্যাভ্যাস নির্দেশ করে এবং দূরের বিন্দুগুলো ভিন্ন বাস্তুতন্ত্র তুলে ধরে [৬]। বিটা বৈচিত্র্যের গবেষণায় প্রমাণিত হয়েছে যে ভৌগোলিক অবস্থান, শিল্পায়ন, খাদ্যতালিকায় আঁশের পরিমাণ এবং ডায়াবেটিস বা পেটের প্রদাহের উপস্থিতির ওপর ভিত্তি করে মানুষের অন্ত্রের অণুজীব সম্প্রদায় নাটকীয়ভাবে পরিবর্তিত হয়ে যায় [২, ৬]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Microbial Bile Acid Biotransformation: FXR & TGR5 Signaling', '৩. অণুজীবীয় পিত্ত অম্লের রূপান্তর: FXR ও TGR5 রিসেপ্টর সংকেত'),
          paragraphs: [
            l(
              'Beyond their traditional role as dietary lipid detergents in the duodenum, bile acids function as potent systemic steroid hormones that regulate glucose homeostasis, lipid metabolism, energy expenditure, and mucosal immune defense [3, 4]. Primary bile acids—cholic acid (CA) and chenodeoxycholic acid (CDCA)—are synthesized de novo from cholesterol in human hepatocytes via the rate-limiting enzyme cholesterol 7alpha-hydroxylase (CYP7A1) [3]. Before being secreted into the biliary tree, hepatocytes covalently conjugate these primary bile acids to the amino acids glycine (in humans, a ~3:1 ratio) or taurine, creating amphipathic conjugated bile salts (glycocholic acid, taurocholic acid, glycochenodeoxycholic acid, taurochenodeoxycholic acid) that are stored in the gallbladder and released upon meal-stimulated cholecystokinin (CCK) secretion [3, 4].',
              'ক্ষুদ্রান্ত্রে খাদ্যের চর্বি পরিপাক ও ইমালসিফিকেশন করার পাশাপাশি পিত্ত অম্লসমূহ (Bile Acids) মানবদেহে অত্যন্ত শক্তিশালী স্টেরয়েড হরমোন হিসেবে কাজ করে যা গ্লুকোজ, চর্বি বিপাক, শক্তি ব্যয় এবং অনাক্রম্য প্রতিরক্ষা নিয়ন্ত্রণ করে [৩, ৪]। মানুষের যকৃতে কোলেস্টেরল থেকে CYP7A1 নামক এনজাইমের মাধ্যমে দুটি প্রাথমিক পিত্ত অম্ল তৈরি হয়: কোলিক অ্যাসিড (CA) এবং চেনোডিঅক্সিকোলিক অ্যাসিড (CDCA) [৩]। পিত্তথলিতে জমা হওয়ার পূর্বে হেপাটোসাইট কোষগুলো এদের সাথে গ্লাইসিন বা টরিন অ্যামিনো অ্যাসিড যুক্ত করে কনজুগেটেড পিত্ত লবণে রূপান্তর করে, যা খাবার গ্রহণের পর CCK হরমোনের উদ্দীপনায় পিত্তথলি সংকুচিত হয়ে খাদ্য পরিপাকের জন্য অন্ত্রে নির্গত হয় [৩, ৪]।'
            ),
            l(
              'Approximately 95% of secreted bile salts are actively reabsorbed in the terminal ileum via the apical sodium-dependent bile acid transporter (ASBT/SLC10A2) and returned to the liver via the portal vein in the enterohepatic circulation [3]. However, the remaining 5% (~400 to 800 mg per day) escapes ileal absorption and enters the cecum and colon, where it encounters the metabolic engine of the gut microbiota [3, 4]. The initial and rate-limiting microbial enzymatic step is catalyzed by Bile Salt Hydrolase (BSH), an intracellular amidase widely expressed across all major bacterial phyla (including Lactobacillus, Bifidobacterium, Clostridium, and Bacteroides) [3]. BSH catalyzes the hydrolytic cleavage of the carbon-nitrogen amide bond between the steroid nucleus and the conjugated glycine or taurine, releasing unconjugated free cholic acid and free chenodeoxycholic acid while liberating glycine and taurine as carbon, nitrogen, and sulfur sources for microbial growth [3].',
              'নিঃসৃত পিত্ত লবণের শতকরা প্রায় ৯৫ ভাগই ক্ষুদ্রান্ত্রের শেষ প্রান্তে (টার্মিনাল ইলিয়াম) ASBT পরিবহক দ্বারা সক্রিয়ভাবে পুনঃশোষিত হয়ে পোর্টাল রক্তের মাধ্যমে পুনরায় যকৃতে ফিরে যায়, যাকে এন্টারোহেপাটিক সংবহন বলা হয় [৩]। কিন্তু বাকি ৫ ভাগ (দৈনিক প্রায় ৪০০ থেকে ৮০০ মিলিগ্রাম) কোলনে প্রবেশ করে, যেখানে এরা অন্ত্রীয় ব্যাকটেরিয়ার বিপাকীয় এনজাইমের মুখোমুখি হয় [৩, ৪]। ব্যাকটেরিয়ার প্রধান এনজাইম বাইল সল্ট হাইড্রোলেজ (BSH) কনজুগেটেড পিত্ত লবণ থেকে গ্লাইসিন ও টরিনকে কেটে আলাদা করে দেয়, যার ফলে মুক্ত কোলিক অ্যাসিড ও মুক্ত চেনোডিঅক্সিকোলিক অ্যাসিড তৈরি হয় [৩]। এই ডিকনজুগেশন প্রক্রিয়াটি অন্ত্রীয় ব্যাকটেরিয়ার বংশবৃদ্ধির জন্য পুষ্টি সরবরাহ করার পাশাপাশি পিত্ত অম্লের রাসায়নিক রূপ পুরোপুরি বদলে দেয় [৩]।'
            ),
            l(
              'Following deconjugation, specialized anaerobic bacteria belonging to the order Clostridiales (primarily species such as Clostridium scindens and Clostridium hiranonis) execute a multi-step enzymatic biotransformation known as 7alpha-dehydroxylation, encoded by the multi-gene bai (bile acid inducible) operon [3]. Through sequential oxidation, dehydration, and reduction reactions, the microbial Bai enzyme complex removes the hydroxyl group at the C-7 position of the steroid ring [3]. This dehydroxylation converts free cholic acid into the secondary bile acid Deoxycholic Acid (DCA), and converts free chenodeoxycholic acid into Lithocholic Acid (LCA) [3, 4]. Concurrently, other commensals express stereospecific 7beta-hydroxysteroid dehydrogenases that epimerize CDCA into Ursodeoxycholic Acid (UDCA), a hydrophilic and cytoprotective tertiary bile acid [3].',
              'ডিকনজুগেশন সম্পন্ন হওয়ার পর ক্লস্ট্রিডিয়াম গোত্রের কিছু বিশেষায়িত ব্যাকটেরিয়া (যেমন Clostridium scindens) তাদের bai জিন কাঠামোর মাধ্যমে ৭-আলফা ডিহাইড্রোক্সিলেশন নামক এক জটিল রাসায়নিক বিক্রিয়া সম্পন্ন করে [৩]। এই এনজাইমগুলো পিত্ত অম্লের স্টেরয়েড কাঠামোর ৭ নম্বর কার্বন থেকে হাইড্রোক্সিল (-OH) মূলকটি অপসারণ করে [৩]। এর ফলে মুক্ত কোলিক অ্যাসিড রূপান্তরিত হয় সেকেন্ডারি পিত্ত অম্ল ডিঅক্সিকোলিক অ্যাসিডে (DCA) এবং চেনোডিঅক্সিকোলিক অ্যাসিড রূপান্তরিত হয় লিথোকোলিক অ্যাসিডে (LCA) [৩, ৪]। একই সাথে কিছু উপকারী ব্যাকটেরিয়া এই অ্যাসিডগুলোকে আরসোডিঅক্সিকোলিক অ্যাসিডে (UDCA) রূপান্তরিত করে, যা যকৃত ও অন্ত্রের জন্য অত্যন্ত সুরক্ষাকারী এক অনন্য অম্ল [৩]।'
            ),
            l(
              'This microbial conversion from conjugated primary to unconjugated secondary bile acids fundamentally shifts host metabolic signaling through two master receptors: the nuclear Farnesoid X Receptor (FXR) and the membrane G-protein coupled bile acid receptor TGR5 (GPBAR1) [3, 4]. Unconjugated CDCA is the most potent endogenous ligand for nuclear FXR [3]. Activation of ileal enterocyte FXR stimulates the transcription and secretion of Fibroblast Growth Factor 19 (FGF19), which travels through portal blood to bind the hepatic FGFR4/beta-Klotho complex, repressing CYP7A1 expression to shut off bile acid synthesis while downregulating hepatic lipogenesis and improving peripheral insulin sensitivity [3, 4]. Conversely, the secondary bile acid LCA acts as the premier agonist for membrane TGR5 on intestinal enteroendocrine L-cells [3]. TGR5 activation triggers an intracellular cAMP/PKA cascade that stimulates the exocytosis of Glucagon-Like Peptide-1 (GLP-1), enhancing glucose-dependent insulin secretion, suppressing appetite in the hypothalamus, and activating mitochondrial UCP1 thermogenesis in brown adipose tissue [3, 4].',
              'প্রাথমিক পিত্ত অম্ল থেকে গৌণ পিত্ত অম্লে এই রূপান্তর মানবদেহের দুটি প্রধান রিসেপ্টরের সংকেত প্রবাহ নাটকীয়ভাবে পরিবর্তন করে: নিউক্লিয়াসের FXR গ্রাহক এবং কোষঝিল্লির TGR5 গ্রাহক [৩, ৪]। মুক্ত CDCA হলো নিউক্লিয়ার FXR গ্রাহকের সবচেয়ে শক্তিশালী উদ্দীপক [৩]। অন্ত্রের কোষে FXR সক্রিয় হলে তা রক্তে FGF19 হরমোন ক্ষরণ করায়, যা যকৃতে পৌঁছে নতুন পিত্ত অম্ল তৈরি বন্ধ করে এবং যকৃতের চর্বি কমিয়ে ইনসুলিন সংবেদনশীলতা বাড়ায় [৩, ৪]। অপরপক্ষে সেকেন্ডারি পিত্ত অম্ল LCA অন্ত্রের এল-কোষে থাকা TGR5 রিসেপ্টরে আবদ্ধ হয় [৩]। TGR5 সক্রিয় হওয়ার সাথে সাথে কোষে সাইক্লিক এএমপি (cAMP) বৃদ্ধি পায় এবং ইনসুলিন উদ্দীপক GLP-1 হরমোন ক্ষরিত হয়, যা রক্তে চিনি নিয়ন্ত্রণ করে, ক্ষুধা কমায় এবং ক্যালোরি জ্বালিয়ে দেহের অতিরিক্ত মেদ কমাতে সাহায্য করে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. CutC Choline Lyase & Hepatic FMO3: The TMAO Atherogenic Axis', '৪. CutC কোলিন লাইয়েজ ও হেপাটিক FMO3: TMAO এথেরোজেনিক অক্ষ'),
          paragraphs: [
            l(
              'While the gut microbiota produces numerous beneficial metabolites, diet-microbiome interactions can also generate potent pro-atherogenic compounds that accelerate cardiovascular pathology [2, 4]. A prime paradigm of this pathogenic host-microbe crosstalk is the microbial generation of Trimethylamine N-Oxide (TMAO) [4]. Humans consume substantial quantities of dietary choline, phosphatidylcholine (lecithin), and L-carnitine, abundant in animal-derived foods such as egg yolks, red meat, organ meats, full-fat dairy, and energy supplements [4]. While a portion of dietary choline is absorbed in the upper small intestine, surplus unabsorbed choline, alongside carnitine, reaches the dense microbial fermenter of the distal ileum and cecum [2, 4].',
              'অন্ত্রের অণুজীব সম্প্রদায় মানবদেহের জন্য বহুবিধ উপকারী যৌগ তৈরি করলেও, ভুল খাদ্যাভ্যাসের কারণে এরা এমন কিছু মারাত্মক রাসায়নিক তৈরি করতে পারে যা রক্তনালী বন্ধ করে হৃদরোগের সৃষ্টি করে [২, ৪]। এর সবচেয়ে ভয়াবহ উদাহরণ হলো অণুজীব দ্বারা উৎপন্ন ট্রাইমিথাইলঅ্যামিন এন-অক্সাইড (TMAO) [৪]। আধুনিক খাদ্যাভ্যাসে মানুষ ডিমের কুসুম, লাল মাংস, কলিজা এবং কার্নিটিন সাপ্লিমেন্টের মাধ্যমে প্রচুর পরিমাণে কোলিন, লেসিথিন ও কার্নিটিন গ্রহণ করে থাকে [৪]। এই উপাদানের একটি অংশ ক্ষুদ্রান্ত্রে শোষিত হলেও, অতিরিক্ত অপাচ্য অংশটি বৃহদন্ত্রের ঘন ব্যাকটেরিয়াল অঞ্চলে পৌঁছে যায় [২, ৪]।'
            ),
            l(
              'Within the anaerobic colonic lumen, specific commensal and opportunistic bacteria—spanning species within the Bacillota, Pseudomonadota, and Actinomycetota phyla—express the choline utilization (cut) gene cluster, centered on the enzyme Choline Trimethylamine-Lyase (CutC) and its activating partner CutD [4]. CutC is a complex glycyl radical enzyme that catalyzes the homolytic cleavage of the strong carbon-nitrogen bond in choline, generating acetaldehyde and releasing volatile Trimethylamine (TMA) gas [4]. A parallel microbial pathway, encoded by the two-component Rieske-type carnitine monooxygenase complex (CntA/CntB), cleaves L-carnitine to liberate TMA [4]. Gaseous TMA is non-polar and highly volatile; it diffuses freely and passively across the colonic epithelial monolayer, entering the mesenteric capillary network and traveling directly via the portal vein to the human liver [4].',
              'বৃহদন্ত্রের অক্সিজেনহীন পরিবেশে নির্দিষ্ট কিছু ব্যাকটেরিয়া তাদের CutC ও CutD নামক বিশেষ এনজাইমের মাধ্যমে খাদ্যের কোলিনের কার্বন-নাইট্রোজেন বন্ধন ভেঙে ট্রাইমিথাইলঅ্যামিন (TMA) নামক বিষাক্ত গ্যাস তৈরি করে [৪]। একইভাবে ব্যাকটেরিয়ার CntA/CntB এনজাইম খাদ্যের কার্নিটিন ভেঙেও এই TMA গ্যাস তৈরি করে [৪]। এই গ্যাসটি অত্যন্ত সহজে অন্ত্রের কোষপ্রাচীর ভেদ করে রক্তপ্রবাহে ঢুকে পড়ে এবং পোর্টাল শিরার মাধ্যমে সরাসরি মানুষের যকৃতে পৌঁছে যায় [৪]। CutC/D cleaves dietary choline into Trimethylamine (TMA). This microbial cleavage represents the obligate first step of the metabolic axis.'
            ),
            l(
              'Upon arrival in the liver, TMA is encountered by hepatic parenchymal cells expressing high levels of the microsomal enzyme Flavin-containing Monooxygenase isoform 3 (FMO3) [4]. FMO3 executes the rapid, NADPH- and O2-dependent monooxygenation of the tertiary amine nitrogen of TMA, converting it into Trimethylamine N-Oxide (TMAO) [4]. TMAO is an uncharged zwitterionic osmolyte that is released into the systemic arterial circulation [4]. Landmark translational and clinical investigations led by Hazen and colleagues demonstrated that elevated fasting plasma TMAO concentrations are strongly and independently predictive of major adverse cardiac events (MACE)—including myocardial infarction, stroke, and cardiovascular death—independent of traditional Framingham cardiovascular risk factors, lipid panels, and glycemic markers [4].',
              'যকৃতে পৌঁছানোর পর হেপাটোসাইট কোষে থাকা FMO3 নামক বিশেষ এনজাইম এই TMA গ্যাসকে দ্রুত জারিত করে ট্রাইমিথাইলঅ্যামিন এন-অক্সাইড (TMAO)-তে রূপান্তর করে [৪]। তৈরি হওয়া এই TMAO সরাসরি সারা দেহের ধমনী রক্তে ছড়িয়ে পড়ে [৪]। ক্লিভল্যান্ড ক্লিনিকের বিখ্যাত হৃদরোগ গবেষণায় প্রমাণিত হয়েছে যে রক্তে TMAO এর মাত্রা বৃদ্ধি পাওয়া হার্ট অ্যাটাক, স্ট্রোক এবং অকালমৃত্যুর এক চরম স্বাধীন ঝুঁকি নির্দেশ করে—যা সাধারণ কোলেস্টেরল বা ডায়াবেটিসের ঝুঁকির চেয়েও অনেক বেশি মারাত্মক হতে পারে [৪]।'
            ),
            l(
              'The molecular atherogenic mechanisms driven by circulating TMAO are multi-factorial and devastating to vascular homeostasis [4]. In vascular macrophages, TMAO upregulates the scavenger receptors CD36 and Scavenger Receptor A1 (SR-A1), accelerating the unregulated endocytosis of oxidized LDL and driving the pathological transformation of macrophages into lipid-laden foam cells within the subendothelial intima [4]. Furthermore, TMAO suppresses hepatic reverse cholesterol transport by repressing the primary bile acid synthetic enzymes CYP7A1 and CYP27A1, trapping cholesterol in peripheral tissues [3, 4]. In vascular platelets, TMAO sensitizes inositol 1,4,5-trisphosphate (IP3) receptors on the dense tubular system, lowering the threshold for intracellular Ca2+ release in response to physiological agonists (thrombin, collagen), precipitating platelet hyperreactivity and arterial thrombosis [4]. Restricting dietary animal choline/carnitine, increasing plant-based proteins, and incorporating extra virgin olive oil containing 3,3-dimethyl-1-butanol (DMB)—a natural structural analogue that non-lethally inhibits bacterial CutC lyase—dramatically lowers plasma TMAO and abrogates arterial plaque formation [4].',
              'রক্তে ভাসমান TMAO একাধিক ধ্বংসাত্মক উপায়ে আমাদের রক্তনালীর ক্ষতি করে [৪]। এটি রক্তনালীর ম্যাক্রোফেজ কোষের CD36 গ্রাহককে অতিরিক্ত সক্রিয় করে ফেলে, যার ফলে ম্যাক্রোফেজগুলো অতিরিক্ত অক্সিডাইজড কোলেস্টেরল গিলে ফেলে ফোম কোষে পরিণত হয় এবং ধমনীতে চর্বির প্লাক তৈরি করে রক্ত চলাচল বন্ধ করে দেয় [৪]। এছাড়া TMAO যকৃতের পিত্ত অম্ল তৈরির পথ অবদমিত করে দেহ থেকে কোলেস্টেরল বের করে দেওয়ার প্রক্রিয়া থামিয়ে দেয় [৩, ৪]। এমনকি এটি রক্তের অণুচক্রিকার ক্যালসিয়াম সংকেতকে অতি-সংবেদনশীল করে তোলে, ফলে সামান্য রক্তনালী ক্ষতেই রক্ত জমাট বেঁধে হার্ট অ্যাটাক ঘটে [৪]। লাল মাংস ও অতিরিক্ত ডিম পরিহার করে উদ্ভিজ্জ খাদ্য গ্রহণ এবং এক্সট্রা ভার্জিন অলিভ অয়েল ব্যবহার (যার DMB যৌগ ব্যাকটেরিয়ার CutC এনজাইমকে থামিয়ে দেয়) রক্তে TMAO কমিয়ে হার্টকে সুরক্ষিত রাখার প্রমাণিত বৈজ্ঞানিক উপায় [৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Tryptophan Catabolites, AhR Activation & Clinical Metabolomics', '৫. ট্রিপটোফ্যান ক্যাটাবোলাইটস, AhR সক্রিয়করণ ও ক্লিনিক্যাল মেটাবোলোমিক্স'),
          paragraphs: [
            l(
              'While microbial choline cleavage generates vascular toxins, the microbial catabolism of dietary L-tryptophan provides an inspiring example of mutualistic host-microbe metabolic synergy [2, 5]. Dietary tryptophan is an essential aromatic amino acid whose metabolic fate is partitioned into three major pathways: the host kynurenine pathway (accounting for ~95% of systemic tryptophan flux via IDO1/TDO), the host serotonin/melatonin pathway via TPH1, and the microbial indole pathway executed by gut commensals in the distal intestine [5]. Commensal gut bacteria belonging to the genera Lactobacillus, Clostridium, and Peptostreptococcus express tryptophanase and aromatic amino acid aminotransferases that metabolize luminal tryptophan into a diverse repertoire of bioactive indoles, including Indole-3-Propionic Acid (IPA), Indole-3-Aldehyde (IAld), Indole-3-Acetic Acid (IAA), and Indole-3-Lactic Acid (ILA) [5].',
              'ব্যাকটেরিয়ার কোলিন বিপাক রক্তনালীর জন্য ক্ষতিকর বিষ তৈরি করলেও, খাদ্যের এল-ট্রিপটোফ্যান অ্যামিনো অ্যাসিডের অণুজীবীয় রূপান্তর মানবদেহের জন্য এক পরম আশীর্বাদ হিসেবে কাজ করে [২, ৫]। ট্রিপটোফ্যান হলো একটি অপরিহার্য অ্যামিনো অ্যাসিড যার বেশিরভাগ মানবদেহে সেরোটোনিন ও কাইনুরেনিন তৈরিতে ব্যবহৃত হলেও, একটি অংশ অন্ত্রের ব্যাকটেরিয়ার কাছে পৌঁছায় [৫]। ল্যাকটোব্যাসিলাস ও ক্লস্ট্রিডিয়ামের মতো বন্ধু ব্যাকটেরিয়াগুলো বিশেষ এনজাইমের মাধ্যমে এই ট্রিপটোফ্যানকে ভেঙে অত্যন্ত সুরক্ষাকারী কিছু বায়োঅ্যাক্টিভ ইনডোল যৌগে (যেমন ইনডোল-৩-প্রোপিওনিক অ্যাসিড বা IPA, এবং ইনডোল-৩-অ্যালডিহাইড বা IAld) রূপান্তরিত করে [৫]। Commensal gut bacteria metabolize dietary L-tryptophan into indole metabolites that act as endogenous ligands for the AhR transcription factor.'
            ),
            l(
              'These microbially derived indoles function as crucial endogenous ligands for the Aryl Hydrocarbon Receptor (AhR)—a ligand-activated basic helix-loop-helix transcription factor highly expressed in intestinal epithelial cells, dendritic cells, and group 3 innate lymphoid cells (ILC3s) [5]. In the cytoplasm of mucosal ILC3s, ligand binding by microbial IAld triggers the dissociation of chaperone proteins (Hsp90, XAP2), permitting AhR to translocate into the nucleus and heterodimerize with the AhR Nuclear Translocator (ARNT) [5]. The AhR/ARNT complex binds Xenobiotic Response Elements (XRE) in the promoter of the Il22 gene, driving robust transcription and secretion of the barrier-protective cytokine Interleukin-22 (IL-22) [5].',
              'এই অণুজীবীয় ইনডোল যৌগগুলো অন্ত্রের অনাক্রম্য কোষসমূহের (ILC3) ভেতরে থাকা অ্যারিল হাইড্রোকার্বন রিসেপ্টর (AhR) নামক এক বিশেষ জিন-নিয়ামক রিসেপ্টরে আবদ্ধ হয় [৫]। ইনডোল যুক্ত হওয়ার সাথে সাথে AhR রিসেপ্টরটি কোষের নিউক্লিয়াসে প্রবেশ করে এবং ARNT প্রোটিনের সাথে জোড় বেঁধে জিনের ওপর বসে [৫]। এর ফলে অনাক্রম্য কোষগুলো বিপুল পরিমাণে ইন্টারলিউকিন-২২ (IL-22) নামক এক অত্যন্ত শক্তিশালী প্রতিরক্ষামূলক সাইটোকাইন ক্ষরণ শুরু করে [৫]। This AhR-ILC3-IL-22 signaling axis represents the premier immunometabolic mechanism preserving mucosal barrier defense.'
            ),
            l(
              'Secreted IL-22 acts exclusively on non-hematopoietic epithelial cells expressing the heterodimeric IL-22R1/IL-10R2 receptor complex [2, 5]. Ligation of IL-22R1 activates Janus kinase 1 (JAK1) and Tyk2, phosphorylating Signal Transducer and Activator of Transcription 3 (STAT3) on Tyr705 [5]. Phosphorylated STAT3 dimers translocate to the enterocyte nucleus to initiate a robust anti-microbial and regenerative transcriptional program [5]. In Paneth cells and absorptive enterocytes, STAT3 activation upregulates the antimicrobial C-type lectins REG3gamma and REG3beta, which physically clear bacteria approaching the epithelial surface [2, 5]. In goblet cells, IL-22 signaling stimulates MUC2 gene transcription and terminal fucosylation, thickening the protective mucus hydrogel [2]. Simultaneously, STAT3 induces anti-apoptotic proteins (Bcl-2, Bcl-xL) and cyclins in crypt stem cells, accelerating mucosal re-epithelialization following inflammatory damage [2, 5].',
              'নিঃসৃত IL-22 সাইটোকাইন সরাসরি অন্ত্রের এপিথেলিয়াল ও প্যানেথ কোষের গায়ে থাকা IL-22R1 রিসেপ্টরে বসে কোষে STAT3 এনজাইমকে সক্রিয় করে [২, ৫]। সক্রিয় STAT3 নিউক্লিয়াসে প্রবেশ করে এক যুগান্তকারী প্রতিরক্ষামূলক জিন কর্মসূচি চালু করে দেয় [৫]। এটি প্যানেথ কোষ থেকে REG3gamma অণুজীবনাশক পেপটাইড ক্ষরণ করায় যা ক্ষতিকর ব্যাকটেরিয়া মেরে ফেলে, গবলেট কোষ থেকে MUC2 মিউসিন নিঃসরণ বাড়িয়ে দেয়ালকে পুরু করে এবং ক্রিপ্টের স্টেম কোষের বিভাজন বাড়িয়ে যেকোনো ঘা বা ক্ষত দ্রুত সারিয়ে তোলে [২, ৫]। STAT3 transcriptionally upregulates REG3gamma and MUC2 mucin to restore mucosal architecture.'
            ),
            l(
              'Concurrently, Indole-3-Propionic Acid (IPA) acts as a powerful circulating antioxidant and agonist of the Pregnane X Receptor (PXR/NR1I2) on enterocytes, directly repressing enterocyte TNF-alpha expression and upregulating tight junction claudin-1 and occludin [5]. Reduced circulating levels of microbial indoles—often secondary to low dietary tryptophan intake or broad-spectrum antibiotic eradication of indole-producing commensals—severely compromise AhR activation, collapsing IL-22 secretion and leaving the mucosal barrier vulnerable to inflammatory breakdown and pathogen invasion [2, 5]. Precision nutritional therapy addresses this axis by providing dietary tryptophan (from legumes, poultry, nuts), cruciferous vegetable indoles (indole-3-carbinol), and targeted probiotics (such as Lactobacillus reuteri) that reconstitute luminal AhR ligand pools and restore mucosal resilience [2, 5].',
              'একই সাথে ইনডোল-৩-প্রোপিওনিক অ্যাসিড (IPA) রক্তে মিশে গিয়ে এক শক্তিশালী অ্যান্টিঅক্সিডেন্ট হিসেবে কাজ করে এবং PXR রিসেপ্টরের মাধ্যমে কোষের প্রদাহ দমন করে টাইট জাংশনের ক্লডিন-১ ও অক্লুডিন প্রোটিনকে সুদৃঢ় করে [৫]। খাদ্যে ট্রিপটোফ্যানের অভাব হলে বা অতিরিক্ত অ্যান্টিবায়োটিক ব্যবহারের ফলে যদি এই বন্ধু ব্যাকটেরিয়াগুলো মারা যায়, তবে রক্তে ইনডোলের মাত্রা শূন্যের কোঠায় নেমে আসে এবং অন্ত্রের সুরক্ষাবলয় ভেঙে পড়ে [২, ৫]। তাই বাদাম, ডাল এবং ব্রকলির মতো ক্রুসিফেরাস সবজি খাওয়ার মাধ্যমে অন্ত্রে ইনডোল বৃদ্ধি করা এবং ল্যাকটোব্যাসিলাস প্রোবায়োটিক গ্রহণ করা পরিপাক প্রাচীরকে আজীবন শক্তিশালী রাখার বিজ্ঞানসম্মত উপায় [২, ৫]। Precision nutrition restores mucosal AhR ligand pools.'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Takeaways & Practice Questions', '৬. মূল শিক্ষণীয় সারসংক্ষেপ ও অনুশীলন'),
          paragraphs: [
            l(
              'The human gut microbiome is an integrated superorganism containing approximately 3.8 x 10^13 bacterial cells (stoichiometrically matching human cells in a ~1:1 ratio), dominated (>90%) by the phyla Bacillota (Firmicutes) and Bacteroidota, alongside essential keystone contributions from Actinomycetota (Bifidobacterium) and Verrucomicrobiota (Akkermansia muciniphila) [1, 2]. This auxiliary genome (metagenome) encodes over 3 to 5 million unique microbial genes, endowing the human host with vital metabolic capacities for complex carbohydrate fermentation, vitamin biosynthesis, and endocrine signaling [1, 6].',
              'মানব অন্ত্রের অণুজীব সম্প্রদায় হলো একটি জীবন্ত মহা-বাস্তুতন্ত্র যাতে প্রায় ৩.৮ x ১০^১৩ টি ব্যাকটেরিয়া থাকে (মানব দেহকোষের সাথে প্রায় ১:১ অনুপাতে), যার শতকরা ৯০ ভাগের বেশি Bacillota ও Bacteroidota পর্বের অন্তর্ভুক্ত এবং যার মধ্যে Bifidobacterium ও Akkermansia muciniphila এর মতো বন্ধু ব্যাকটেরিয়া বাস করে [১, ২]। এই অণুজীব মেটাজেনোম ৩০ থেকে ৫০ লক্ষাধিক অনন্য জিন বহন করে যা আঁশ পরিপাক, ভিটামিন তৈরি এবং হরমোন নিয়ন্ত্রণে অপরিহার্য ভূমিকা পালন করে [১, ৬]। This superorganism is an obligate partner in human metabolic physiology.'
            ),
            l(
              'Metagenomic analysis evaluates microbiome architecture through high-throughput sequencing: 16S rRNA gene amplicon sequencing profiles hypervariable regions (V3–V4) for taxonomic census, whereas whole-genome shotgun (WGS) metagenomics sequences untargeted DNA to resolve strain-level taxonomy and functional metabolic pathways [6]. Alpha diversity quantifies richness and evenness within an individual (Shannon H\', Chao1), serving as a universal hallmark of ecosystem resilience [6]. Beta diversity (Bray-Curtis, UniFrac) quantifies phylogenetic dissimilarity between cohorts, mapping environmental, dietary, and pathological divergence across populations [6].',
              'মেটাজেনোমিক বিশ্লেষণ দুটি প্রধান প্রযুক্তিতে পরিচালিত হয়: ১৬এস আরআরএনএ সিকোয়েন্সিং হাইপারভেরিয়েবল অঞ্চল (V3–V4) বিশ্লেষণ করে ট্যাক্সোনমি নির্ণয় করে, আর শটগান মেটাজেনোমিক্স সমস্ত ডিএনএ বিশ্লেষণ করে নির্দিষ্ট স্ট্রেন ও এনজাইমের গতিপথ শনাক্ত করে [৬]। আলফা বৈচিত্র্য (শানন সূচক) ব্যক্তির নিজস্ব অণুজীবের প্রাচুর্য ও সমতা পরিমাপ করে সুস্থতার বার্তা দেয়, পক্ষান্তরে বিটা বৈচিত্র্য বিভিন্ন দলের মধ্যকার পার্থক্য তুলে ধরে খাদ্যাভ্যাস ও ভৌগোলিক বৈচিত্র্য উন্মোচন করে [৬]। Alpha diversity reflects ecosystem health while beta diversity maps inter-individual variation.'
            ),
            l(
              'Bile acid biotransformation illustrates host-microbe metabolic synergy: bacterial Bile Salt Hydrolase (BSH) deconjugates primary bile acids, and microbial 7alpha-dehydroxylase generates the secondary bile acids DCA and LCA [3]. Deconjugated free CDCA potently activates nuclear FXR to suppress hepatic lipogenesis and stimulate ileal FGF19 secretion, whereas secondary LCA activates membrane TGR5 on enteroendocrine L-cells to stimulate GLP-1 release and brown adipose thermogenesis [3, 4]. Conversely, bacterial CutC/CutD choline lyases cleave dietary choline into Trimethylamine (TMA), oxidized by hepatic FMO3 into atherogenic TMAO, which accelerates macrophage foam cell formation, impairs reverse cholesterol transport, and triggers platelet hyperreactivity [4].',
              'পিত্ত অম্লের রূপান্তর অণুজীব ও মানবদেহের এক অপূর্ব মেলবন্ধন: ব্যাকটেরিয়ার BSH এনজাইম পিত্ত অম্লকে ডিকনজুগেট করে এবং ৭-আলফা ডিহাইড্রোক্সিলেজ এনজাইম DCA ও LCA তৈরি করে [৩]। মুক্ত CDCA যকৃতের FXR সক্রিয় করে চর্বি কমায় এবং সেকেন্ডারি পিত্ত অম্ল TGR5 রিসেপ্টর সক্রিয় করে ইনসুলিন উদ্দীপক GLP-1 ক্ষরণ করায় [৩, ৪]। কিন্তু ব্যাকটেরিয়ার CutC এনজাইম খাদ্যের অতিরিক্ত কোলিন ভেঙে TMA গ্যাস তৈরি করে যা যকৃতে গিয়ে হৃদরোগ সৃষ্টিকারী TMAO-তে রূপান্তরিত হয় এবং রক্তনালী বন্ধ করে হার্ট অ্যাটাকের ঝুঁকি বাড়ায় [৪]। Host-microbe crosstalk regulates FXR, TGR5, and cardiovascular risk.'
            ),
            l(
              'Microbial tryptophan catabolism generates bioactive indoles (IPA, IAld) that bind the cytosolic Aryl Hydrocarbon Receptor (AhR) in mucosal ILC3 cells, driving the transcription and secretion of Interleukin-22 (IL-22) [5]. IL-22 phosphorylates epithelial STAT3, inducing Paneth cell antimicrobial lectins (REG3gamma), stimulating goblet cell MUC2 mucin synthesis, and accelerating epithelial stem cell renewal to reinforce mucosal barrier integrity [2, 5]. Precision nutritional therapy—emphasizing high-fiber prebiotic foods, cruciferous vegetable indoles, extra virgin olive oil (containing DMB to inhibit CutC lyase), and targeted probiotics—optimizes this metabolic superorganism to protect against cardiometabolic disease and mucosal dysbiosis [2, 4, 5, 6].',
              'ব্যাকটেরিয়ার ট্রিপটোফ্যান বিপাক থেকে তৈরি ইনডোল যৌগগুলো অনাক্রম্য কোষের AhR রিসেপ্টরে বসে ইন্টারলিউকিন-২২ (IL-22) ক্ষরণ করায় [৫]। এই IL-22 এপিথেলিয়ামের STAT3 এনজাইমকে সক্রিয় করে প্যানেথ কোষ থেকে REG3gamma পেপটাইড ক্ষরণ করায়, মিউসিন স্তরকে পুরু করে এবং স্টেম কোষের মাধ্যমে দেয়াল মেরামত করে [২, ৫]। আঁশযুক্ত খাবার, ক্রুসিফেরাস সবজি, অলিভ অয়েল (যার DMB যৌগ ক্ষতিকর TMAO তৈরি বন্ধ করে) এবং প্রোবায়োটিক গ্রহণের মাধ্যমে এই মহা-বাস্তুতন্ত্রকে সুসংহত রেখে হৃদরোগ ও অন্ত্রের যাবতীয় প্রদাহ নির্মূল করা সম্ভব [২, ৪, ৫, ৬]। Precision nutritional medicine harnesses microbial biochemistry to optimize whole-body metabolic health.'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'শিক্ষায়তনিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. The Superorganism: Microbial Census & Taxonomic Architecture', '১. জীবজগতের মহা-বাস্তুতন্ত্র: অণুজীব গণনা ও শ্রেণিবিন্যাস কাঠামো'),
          paragraphs: [
            l(
              'The human gastrointestinal tract harbors one of the densest and most metabolically active microbial ecosystems on Earth [1, 2]. Modern microbiological revisions have corrected early historical dogmas, confirming that a standard reference adult human houses approximately 3.8 x 10^13 bacterial cells alongside 3.0 x 10^13 human somatic cells [1]. This demonstrates that humans are holobionts operating at an approximate 1:1 cellular equilibrium [1]. The vast majority of these microorganisms reside within the cecum and colon, where luminal transit slowing, neutral to mildly acidic pH (5.7–6.8), and abundant unabsorbed carbohydrates foster biomass densities exceeding 10^11 to 10^12 viable cells per gram of wet stool [1, 2].',
              'মানব পরিপাকতন্ত্র পৃথিবীর অন্যতম ঘন এবং সবচেয়ে সক্রিয় অণুজীব বাস্তুতন্ত্রের আবাসস্থল [১, ২]। আধুনিক বৈজ্ঞানিক গবেষণায় পুরনো ভুল ধারণা সংশোধন করে প্রমাণিত হয়েছে যে একজন সুস্থ প্রাপ্তবয়স্ক মানুষের দেহে প্রায় ৩.৮ x ১০^১৩ টি ব্যাকটেরিয়া এবং ৩.০ x ১০^১৩ টি মানব কোষ থাকে [১]। অর্থাৎ মানবদেহ কোষীয় ভারসাম্যে ১:১ অনুপাতে পরিচালিত এক অখণ্ড সুপারঅর্গানিজম [১]। এই অণুজীবগুলোর সিংহভাগই বাস করে বৃহদন্ত্রের ভেতর, যেখানে খাবারের মন্থর গতি এবং প্রচুর অপাচ্য আঁশের উপস্থিতিতে প্রতি গ্রাম মলে ১০^১১ থেকে ১০^১২ টি জীবন্ত ব্যাকটেরিয়া বসবাস করে [১, ২]। The colonic lumen provides an ideal anaerobic bioreactor.'
            ),
            l(
              'Phylogenetically, the intestinal microbiota is classified into bacteria, archaea (primarily the methanogen Methanobrevibacter smithii), microscopic eukaryotes (fungi/mycobiome such as Candida and Saccharomyces), and an immense virome predominantly composed of bacteriophages belonging to the Caudoviricetes [1, 2]. Among bacteria, two phyla dominate: Bacillota (Gram-positive firmicutes) and Bacteroidota (Gram-negative bacteroidetes), which together account for >90% of all assigned reads [1, 6]. Bacillota species excel at fermenting complex starches and dietary fibers into short-chain fatty acids, while Bacteroidota species possess extensive polysaccharide utilization loci (PULs) encoding outer membrane TonB-dependent transport systems (SusC/SusD complexes) dedicated to glycan harvest [2, 6].',
              'শ্রেণিবিন্যাসের দিক থেকে অন্ত্রের অণুজীব সম্প্রদায়ের মধ্যে রয়েছে ব্যাকটেরিয়া, মিথেন তৈরি কারী আর্কিয়া, ছত্রাক এবং কোটি কোটি ব্যাকটেরিওফাজ ভাইরাস [১, ২]। ব্যাকটেরিয়ার মধ্যে Bacillota এবং Bacteroidota পর্ব দুটিই ৯০ শতাংশের বেশি আধিপত্য বিস্তার করে [১, ৬]। Bacillota পর্বের ব্যাকটেরিয়াগুলো জটিল আঁশকে গাঁজন প্রক্রিয়ায় বিউটাইরেটে রূপান্তর করতে পারদর্শী, আর Bacteroidota পর্বের ব্যাকটেরিয়াগুলো তাদের বিশেষ জিন কাঠামোর মাধ্যমে যেকোনো জটিল উদ্ভিজ্জ পলিস্যাকারাইড ভেঙে মানবদেহের জন্য দরকারি শক্তি উৎপাদন করে [২, ৬]। These co-dominant phyla drive primary colonic fermentation.'
            ),
            l(
              'The phylum Actinomycetota represents early colonizers of the human infant gut, dominated by the genus Bifidobacterium [2]. Bifidobacteria utilize a unique "fructose-6-phosphate phosphoketolase" pathway (the bifid shunt) to ferment carbohydrates into acetate and lactate, acidifying the luminal environment to suppress opportunistic Enterobacteriaceae [2]. The phylum Verrucomicrobiota is represented predominantly by Akkermansia muciniphila, a strictly anaerobic mucin-degrading specialist residing in the mucosal hydrogel [2, 6]. By releasing outer membrane vesicles containing the protein Amuc_1100, A. muciniphila signals through enterocyte TLR2 to enhance tight junction expression and stimulate mucosal wound repair [2, 6].',
              'Actinomycetota পর্বের বাইফিডোব্যাকটেরিয়া হলো নবজাতকের অন্ত্রের প্রথম বাসিন্দা [২]। এরা বিশেষ এনজাইমেটিক পথের (বাইফিড শান্ট) মাধ্যমে শর্করা ভেঙে অ্যাসিটেট ও ল্যাকটিক অ্যাসিড তৈরি করে লুমেনকে অম্লীয় করে তোলে, যা ক্ষতিকর জীবাণুর বংশবৃদ্ধি বন্ধ করে [২]। Verrucomicrobiota পর্বের একমাত্র প্রধান প্রতিনিধি আকেরম্যানসিয়া মিউসিনিফিলা (Akkermansia muciniphila) মিউসিন খেয়ে বেঁচে থাকে এবং এর ঝিল্লির Amuc_1100 প্রোটিনের মাধ্যমে এন্টারোসাইটের TLR2 রিসেপ্টর উদ্দীপিত করে টাইট জাংশনকে শক্ত করে ও ক্ষত নিরাময় করে [২, ৬]। Akkermansia muciniphila is an indispensable mucosal sentinel.'
            ),
            l(
              'In contrast, an overrepresentation of the phylum Pseudomonadota (Proteobacteria) serves as a classic diagnostic signature of environmental and ecological instability [2, 6]. Facultative anaerobes within this phylum, such as members of the family Enterobacteriaceae, utilize host-derived electron acceptors (e.g., nitrate and oxygen leaking from inflamed, dysfunctional colonocytes) to outcompete obligate anaerobic fermenters [2, 6]. Consequently, tracking phylum-level shifts and species abundances provides deep academic insights into the metabolic equilibrium between host mucosal cells and the commensal microbiota [1, 2, 6].',
              'এর বিপরীতে Pseudomonadota পর্বের অস্বাভাবিক বৃদ্ধি অন্ত্রের পরিবেশগত বিপর্যয়ের সুস্পষ্ট লক্ষণ [২, ৬]। এই পর্বের ক্ষতিকর ব্যাকটেরিয়াগুলো (যেমন ই-কোলাই) ক্ষতিগ্রস্ত এপিথেলিয়াল কোষ থেকে বের হওয়া অক্সিজেন ও নাইট্রেট গ্রহণ করে দ্রুত বংশবৃদ্ধি করে এবং আমাদের উপকারী বন্ধু ব্যাকটেরিয়াগুলোকে বিতাড়িত করে দেয় [২, ৬]। তাই পর্বভিত্তিক এই অনুপাতগুলো বিশ্লেষণ করে চিকিৎসাবিজ্ঞানীরা অন্ত্রের প্রদাহ ও বিপাকীয় সুস্থতার গভীর অন্তর্দৃষ্টি লাভ করে থাকেন [১, ২, ৬]। Pseudomonadota blooms signify mucosal dysbiosis.'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Metagenomic Profiling & Ecological Diversity Metrics', '২. মেটাজেনোমিক প্রোফাইলিং ও বাস্তুতাত্ত্বিক বৈচিত্র্য পরিমাপ'),
          paragraphs: [
            l(
              'The molecular elucidation of the intestinal microbiome relies on culture-independent high-throughput sequencing technologies that interrogate genomic DNA directly from fecal or endoscopic biopsy specimens [1, 6]. Targeted 16S rRNA gene amplicon sequencing relies on polymerase chain reaction (PCR) amplification of hypervariable regions within the prokaryotic 16S gene [6]. Sequence reads are computationally clustered into Operational Taxonomic Units (OTUs) at a standard 97% sequence identity threshold, or grouped into Amplicon Sequence Variants (ASVs) using error-correcting algorithms (such as DADA2) to achieve single-nucleotide biological resolution [6]. While fast and scalable, 16S amplicon profiling is limited by PCR amplification bias, variable gene copy numbers across bacterial species, and an inability to resolve species-level or strain-level functional variations [6].',
              'অন্ত্রের অণুজীব সম্প্রদায়ের আণবিক বিশ্লেষণ নির্ভর করে জিনোম সিকোয়েন্সিং প্রযুক্তির ওপর যা সরাসরি মল বা বায়োপসি থেকে ডিএনএ বিশ্লেষণ করে [১, ৬]। ১৬এস আরআরএনএ অ্যাম্পলিকন সিকোয়েন্সিংয়ে ব্যাকটেরিয়াল জিনের পরিবর্তনশীল অংশ পিসিআর (PCR) দিয়ে বৃদ্ধি করে ৯৭% মিলের ভিত্তিতে OTU বা একক নিউক্লিওটাইডের নির্ভুলতায় ASV হিসেবে সাজানো হয় [৬]। যদিও এটি দ্রুত এবং বহুল ব্যবহৃত, তবে বিভিন্ন ব্যাকটেরিয়ায় জিনের সংখ্যার তারতম্য থাকার কারণে এটি নির্দিষ্ট স্ট্রেন শনাক্ত করতে পারে না [৬]। 16S amplicon sequencing provides broad taxonomic classification.'
            ),
            l(
              'Whole-genome shotgun (WGS) metagenomics provides an untargeted, comprehensive view of the entire microbial metagenome [6]. By fragmenting total environmental DNA and performing deep sequencing on high-throughput platforms, WGS captures reads from bacteria, archaea, DNA viruses, and eukaryotic microbes simultaneously [6]. Advanced computational assemblers reconstruct contiguous genomic fragments into Metagenome-Assembled Genomes (MAGs) through binning algorithms based on tetra-nucleotide frequencies and differential coverage across samples [6]. WGS enables direct functional gene annotation by mapping reads against the Kyoto Encyclopedia of Genes and Genomes (KEGG) and the Carbohydrate-Active enZYmes (CAZy) database, illuminating the precise enzymatic capabilities of the community [2, 6].',
              'হোল-জিনোম শটগান মেটাজেনোমিক্স (WGS) অণুজীবের সমগ্র জিনোমকে উন্মোচিত করে [৬]। কোনো পূর্ব-নির্ধারিত জিন ছাড়াই সমস্ত ডিএনএকে ক্ষুদ্র টুকরোয় ভেঙে গভীর সিকোয়েন্সিং করার মাধ্যমে এটি ব্যাকটেরিয়া, ভাইরাস ও ছত্রাকের যাবতীয় তথ্য একসাথে সংগ্রহ করে [৬]। বায়োইনফরমেটিক্স অ্যালগরিদমগুলো এই খণ্ডগুলোকে জোড়া লাগিয়ে আস্ত ব্যাকটেরিয়াল জিনোম (MAGs) পুনর্গঠন করে এবং KEGG ও CAZy ডাটাবেসের সাহায্যে অণুজীবগুলো কোন কোন এনজাইম তৈরি করতে পারে তা নিখুঁতভাবে জানিয়ে দেয় [২, ৬]। WGS metagenomics provides functional gene cataloging.'
            ),
            l(
              'Ecological diversity within a single microbiome sample is rigorously quantified through Alpha Diversity indices [6]. Species richness denotes the absolute number of distinct taxa observed, whereas species evenness reflects the equitability of relative taxon abundances [6]. The Shannon Diversity Index (H\') is derived from information theory: H\' = -SUM [pi * ln(pi)], where pi represents the relative abundance of taxon i [6]. The Shannon index increases as both species richness and species evenness increase, penalizing communities dominated by a few hyper-abundant taxa [6]. The Chao1 index uses non-parametric estimation to calculate the true species richness by accounting for rare taxa represented by singletons or doubletons [6]. High alpha diversity reflects a stable, climax ecosystem capable of functional redundancy and resistance against colonization by enteric pathogens [1, 2, 6].',
              'একক অণুজীব নমুনার ভেতরের বৈচিত্র্য পরিমাপ করা হয় আলফা বৈচিত্র্যের বিভিন্ন গাণিতিক সূত্রের সাহায্যে [৬]। প্রজাতির মোট সংখ্যা এবং তাদের মধ্যকার আনুপাতিক সমতা উভয়কে বিবেচনা করে শানন সূচক (Shannon Index, H\') নির্ণয় করা হয়: H\' = -SUM [pi * ln(pi)] [৬]। এই শানন মান যত বেশি হয়, অণুজীব সম্প্রদায় তত বেশি ভারসাম্যপূর্ণ হিসেবে গণ্য হয় [৬]। অপরদিকে Chao1 সূচক বিরল প্রজাতির ব্যাকটেরিয়ার সংখ্যা গণনা করে প্রকৃত বৈচিত্র্য অনুমান করে [৬]। উচ্চ আলফা বৈচিত্র্য নির্দেশ করে যে অন্ত্রের বাস্তুতন্ত্র অত্যন্ত স্থিতিশীল এবং ক্ষতিকর জীবাণুর আক্রমণ ঠেকাতে পুরোপুরি সক্ষম [১, ২, ৬]। High alpha diversity is an index of ecosystem robustness.'
            ),
            l(
              'Beta diversity measures compositional divergence between different communities, quantifying the extent of taxon turnover across space, time, or clinical intervention groups [6]. The Bray-Curtis dissimilarity metric calculates distance based on absolute or relative taxonomic abundances, whereas phylogenetic metrics like UniFrac calculate the fraction of evolutionary branch length on a phylogenetic tree that is unique to either sample [6]. Unweighted UniFrac evaluates presence/absence (phylogenetic richness distance), whereas weighted UniFrac incorporates relative abundance weighting [6]. Distance matrices are visualized using ordination techniques such as Principal Coordinates Analysis (PCoA) or Non-Metric Multidimensional Scaling (NMDS), allowing researchers to identify statistical clusters driven by dietary patterns, antibiotic exposures, or chronic disease phenotypes [2, 6].',
              'বিটা বৈচিত্র্য একাধিক ভিন্ন দলের মধ্যকার অণুজীবের বংশগত বা গঠনগত পার্থক্য পরিমাপ করে [৬]। ব্রেই-কার্টিস ডাইসিমিলারিটি ব্যাকটেরিয়ার সংখ্যার তারতম্য হিসাব করে, আর ইউনিফ্র্যাক (UniFrac) পদ্ধতি ব্যাকটেরিয়ার বিবর্তনীয় বৃক্ষের শাখার দূরত্বের ওপর ভিত্তি করে পার্থক্য গণনা করে [৬]। এই জটিল পার্থক্যগুলোকে PCoA বা NMDS গ্রাফের মাধ্যমে দ্বিমাত্রিক বা ত্রিমাত্রিক তলে প্রকাশ করা হয়, যা দেখে সহজেই বোঝা যায় কোন কোন খাদ্যাভ্যাস বা ওষুধ রোগীদের অণুজীব সম্প্রদায়কে সুস্থ মানুষ থেকে সম্পূর্ণ আলাদা করে দিয়েছে [২, ৬]। Beta diversity visualizes cohort-level microbial divergence.'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Microbial Bile Acid Biotransformation: FXR & TGR5 Signaling', '৩. অণুজীবীয় পিত্ত অম্লের রূপান্তর: FXR ও TGR5 রিসেপ্টর সংকেত'),
          paragraphs: [
            l(
              'Bile acid metabolism represents an exquisitely regulated endocrine circuit operating at the boundary of host genetics and microbial enzymology [3, 4]. In the liver, cholesterol is oxidized into the primary bile acids Cholic Acid (CA, 3alpha,7alpha,12alpha-trihydroxy) and Chenodeoxycholic Acid (CDCA, 3alpha,7alpha-dihydroxy) via the classical neutral pathway (CYP7A1) or the alternative acidic pathway (CYP27A1) [3]. Before biliary secretion, bile acid-CoA:amino acid N-acyltransferase (BAAT) conjugates the carboxyl group of CA and CDCA to glycine or taurine [3]. Conjugation lowers the pKa from ~5.0 to 3.7 (glycine) or 1.5 (taurine), ensuring that bile acids exist entirely as fully ionized, hydrophilic bile salts at duodenal pH, preventing premature passive absorption across enterocyte membranes [3, 4].',
              'পিত্ত অম্ল বিপাক হলো মানব জিন ও অণুজীবীয় এনজাইমের মধ্যকার এক অনন্য অন্তঃক্ষরা নিয়ন্ত্রণ ব্যবস্থা [৩, ৪]। যকৃতে কোলেস্টেরল থেকে CYP7A1 এনজাইমের মাধ্যমে দুটি প্রধান প্রাথমিক পিত্ত অম্ল তৈরি হয়: কোলিক অ্যাসিড (CA) এবং চেনোডিঅক্সিকোলিক অ্যাসিড (CDCA) [৩]। পিত্তরসে নির্গত হওয়ার পূর্বে যকৃতের BAAT এনজাইম এদের সাথে গ্লাইসিন বা টরিন যুক্ত করে কনজুগেটেড পিত্ত লবণে রূপান্তর করে [৩]। এই কনজুগেশনের ফলে এদের pKa অনেক কমে যায়, যার ফলে ক্ষুদ্রান্ত্রের ক্ষারীয় পরিবেশে এরা সম্পূর্ণ আয়নিত অবস্থায় থাকে এবং অকালে শোষিত না হয়ে খাবার পরিপাকের কাজ নিখুঁতভাবে সম্পন্ন করতে পারে [৩, ৪]। Conjugation ensures high aqueous solubility for fat digestion.'
            ),
            l(
              'While ~95% of bile acids undergo active sodium-coupled reabsorption in the terminal ileum via ASBT, the unabsorbed 5% enters the colonic lumen [3]. Here, the enzyme Bile Salt Hydrolase (BSH, EC 3.5.1.24) catalyzes the hydrolytic cleavage of the amide bond, releasing free CA and free CDCA [3]. BSH is widely conserved across all major intestinal bacterial taxa, functioning as a microbial detoxification mechanism (unconjugated bile acids are often less toxic to intracellular bacterial machinery at neutral pH) [3]. Unconjugated bile acids are significantly more hydrophobic, allowing a fraction to passively diffuse across the colonic epithelium into the portal circulation [3, 4].',
              'ক্ষুদ্রান্ত্রের শেষে ৯৫% পিত্ত লবণ শোষিত হলেও বাকি ৫% কোলনে পৌঁছায় [৩]। সেখানে ব্যাকটেরিয়ার বাইল সল্ট হাইড্রোলেজ (BSH) এনজাইম গ্লাইসিন ও টরিনকে ভেঙে মুক্ত কোলিক অ্যাসিড ও চেনোডিঅক্সিকোলিক অ্যাসিড তৈরি করে [৩]। অন্ত্রের প্রায় সব প্রধান ব্যাকটেরিয়ার মধ্যেই BSH এনজাইম থাকে যা তাদের নিজস্ব সুরক্ষায় সাহায্য করে [৩]। মুক্ত পিত্ত অম্লগুলো অনেক বেশি হাইড্রোফোবিক হওয়ায় এদের একটি অংশ প্যাসিভ পদ্ধতিতে অন্ত্রের দেয়াল ভেদ করে রক্তে ফিরে যায় [৩, ৪]। BSH catalyzes the obligate gateway reaction in bile acid metabolism.'
            ),
            l(
              'Following deconjugation, free CA and CDCA serve as substrates for microbial 7alpha-dehydroxylation, executed by a restricted consortium of strictly anaerobic Clostridiales species possessing the bile acid inducible (bai) operon [3]. The Bai enzymatic cascade utilizes BaiA (alcohol dehydrogenase), BaiB (bile acid-CoA ligase), BaiCD/BaiH (pyridine nucleotide-dependent oxidoreductases), and BaiE (7alpha-dehydratase) to stereospecifically remove the 7alpha-hydroxyl group [3]. This transformation converts cholic acid into Deoxycholic Acid (DCA) and chenodeoxycholic acid into Lithocholic Acid (LCA) [3, 4]. DCA and LCA are highly hydrophobic, cytotoxic secondary bile acids that modulate bacterial membrane integrity and execute host metabolic signaling [3].',
              'ডিকনজুগেশনের পর মুক্ত পিত্ত অম্লগুলো ক্লস্ট্রিডিয়াম ব্যাকটেরিয়ার bai জিন কাঠামোর এনজাইম দ্বারা ৭-আলফা ডিহাইড্রোক্সিলেশন বিক্রিয়ার মধ্য দিয়ে যায় [৩]। Bai এনজাইম কমপ্লেক্সটি জটিল রাসায়নিক প্রক্রিয়ায় ৭ নম্বর কার্বন থেকে হাইড্রোক্সিল মূলক অপসারণ করে কোলিক অ্যাসিডকে ডিঅক্সিকোলিক অ্যাসিডে (DCA) এবং চেনোডিঅক্সিকোলিক অ্যাসিডকে লিথোকোলিক অ্যাসিডে (LCA) রূপান্তরিত করে [৩, ৪]। এই সেকেন্ডারি পিত্ত অম্লগুলো অত্যন্ত হাইড্রোফোবিক এবং শক্তিশালী জৈব সংকেত বাহক হিসেবে কাজ করে [৩]। The microbial bai operon executes multistep stereospecific 7alpha-dehydroxylation.'
            ),
            l(
              'The distinct chemical structures of primary vs secondary bile acids dictate their relative affinities for host metabolic receptors [3, 4]. Free CDCA binds the nuclear receptor FXR with nanomolar affinity (CDCA > DCA > LCA > CA) [3]. Activated FXR induces Small Heterodimer Partner (SHP), which represses LRH-1-dependent transcription of CYP7A1, and stimulates enterocyte FGF19 secretion, providing dual-tissue feedback inhibition of bile acid synthesis and repressing hepatic SREBP-1c lipogenesis [3, 4]. In contrast, the secondary bile acid LCA is the most potent natural agonist for the membrane G-protein coupled receptor TGR5 (LCA > DCA > CDCA > CA) [3]. On enteroendocrine L-cells, TGR5 couples to Galpha-s, stimulating adenylyl cyclase, elevating intracellular cAMP, and driving Epac2/PKA-mediated exocytosis of GLP-1 and PYY to enhance insulin secretion and central satiety [3, 4].',
              'প্রাথমিক ও গৌণ পিত্ত অম্লের ভিন্ন গঠনের কারণে এরা মানবদেহের রিসেপ্টরগুলোতে ভিন্ন শক্তিতে আবদ্ধ হয় [৩, ৪]। মুক্ত CDCA সবচেয়ে শক্তিশালীভাবে নিউক্লিয়ার FXR রিসেপ্টরে বসে যকৃতে চর্বি তৈরি বন্ধ করে এবং অন্ত্র থেকে FGF19 হরমোন ক্ষরণ করায় [৩, ৪]। পক্ষান্তরে সেকেন্ডারি পিত্ত অম্ল LCA অন্ত্রের এল-কোষে থাকা TGR5 রিসেপ্টরে সবচেয়ে শক্তভাবে বসে কোষে সাইক্লিক এএমপি (cAMP) বৃদ্ধি করে ইনসুলিন উদ্দীপক GLP-1 ও ক্ষুধা দমনকারী PYY হরমোন ক্ষরণ করায় [৩, ৪]। Differential receptor selectivity governs metabolic homeostasis.'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. CutC Choline Lyase & Hepatic FMO3: The TMAO Atherogenic Axis', '৪. CutC কোলিন লাইয়েজ ও হেপাটিক FMO3: TMAO এথেরোজেনিক অক্ষ'),
          paragraphs: [
            l(
              'Cardiovascular disease pathogenesis is increasingly recognized to involve direct metabolic crosstalk between dietary inputs and the intestinal microbiota [2, 4]. Choline, an essential quaternary ammonium nutrient, and L-carnitine, a trimethylated amino acid derivative, are abundant in red meat, poultry, egg yolks, and liver [4]. In healthy physiology, choline serves as a precursor for the neurotransmitter acetylcholine, membrane phosphatidylcholine, and the methyl donor betaine [4]. However, excessive dietary intake of choline and carnitine provides surplus substrate that escapes small intestinal absorption and enters the microbial bioreactor of the colon [4].',
              'হৃদরোগের কারণ হিসেবে খাদ্য ও অন্ত্রের অণুজীবের পারস্পরিক ক্ষতিকর ক্রিয়া এখন চিকিৎসাবিজ্ঞানে এক প্রমাণিত সত্য [২, ৪]। ডিমের কুসুম, লাল মাংস এবং কলিজায় প্রচুর পরিমাণে কোলিন ও এল-কার্নিটিন থাকে [৪]। সুস্থ শরীরে কোলিন স্নায়ুর অ্যাসিটাইলকোলিন এবং কোষঝিল্লির লেসিথিন তৈরিতে ব্যবহৃত হয় [৪]। কিন্তু খাদ্যে প্রয়োজনের অতিরিক্ত কোলিন ও কার্নিটিন গ্রহণ করলে তার একটি বড় অংশ অপাচ্য অবস্থায় বৃহদন্ত্রের ব্যাকটেরিয়ার কাছে পৌঁছে যায় [৪]। Excess dietary quaternary amines fuel colonic microbial cleavage.'
            ),
            l(
              'In the colonic lumen, specific commensal bacterial species express the choline utilization (cut) operon, which encodes the glycyl radical enzyme Choline Trimethylamine-Lyase (CutC) and its obligate activating enzyme CutD [4]. The catalytic cycle of CutC relies on a stable, post-translationally generated glycyl radical on Gly821, generated by CutD via S-adenosylmethionine (SAM) cleavage and single-electron transfer [4]. The activated glycyl radical generates a thiyl radical on active-site Cys489, which abstracts a hydrogen atom from the choline substrate, driving homolytic C-N bond cleavage to release acetaldehyde and gaseous Trimethylamine (TMA) [4]. A distinct microbial system, CntA/CntB, utilizes a Rieske-type iron-sulfur domain to cleave L-carnitine into TMA [4].',
              'বৃহদন্ত্রে ব্যাকটেরিয়ার CutC ও CutD এনজাইম জটিল কোলিন বিপাকে মূল ভূমিকা পালন করে [৪]। CutC একটি গ্লাইসিল র্যাডিক্যাল এনজাইম যার সক্রিয় অংশে একটি র্যাডিক্যাল তৈরি করে CutD এনজাইম [৪]। এই সক্রিয় এনজাইমটি কোলিনের অত্যন্ত শক্তিশালী কার্বন-নাইট্রোজেন বন্ধন ভেঙে এক মুহূর্তেই বিষাক্ত ট্রাইমিথাইলঅ্যামিন (TMA) গ্যাস ও অ্যাসিটালডিহাইড তৈরি করে [৪]। একইভাবে CntA/CntB এনজাইম খাদ্যের কার্নিটিন ভেঙেও এই TMA গ্যাস তৈরি করে [৪]। The CutC/CutD complex catalyzes homolytic C-N bond cleavage.'
            ),
            l(
              'Because TMA is a volatile, small lipophilic tertiary amine (molecular weight 59 Da), it rapidly and passively diffuses across the colonic mucosal barrier and is absorbed directly into the mesenteric venules [4]. Entering the portal vein, TMA travels to the liver, where it encounters hepatic parenchymal cells expressing Flavin-containing Monooxygenase isoform 3 (FMO3) [4]. Utilizing NADPH and molecular oxygen, FMO3 inserts an oxygen atom onto the lone pair of electrons on the nitrogen atom of TMA, yielding Trimethylamine N-Oxide (TMAO) [4]. TMAO is released into the systemic circulation, where high fasting levels (>6.2 micromol/L) correlate strongly and prospectively with myocardial infarction, stroke, heart failure, and chronic kidney disease progression [4].',
              'TMA একটি ক্ষুদ্র ও উদ্বায়ী গ্যাস হওয়ায় এটি অন্ত্রের দেয়াল ভেদ করে রক্তে ঢুকে পোর্টাল শিরার মাধ্যমে যকৃতে পৌঁছায় [৪]। যকৃতের কোষে থাকা FMO3 নামক বিশেষ এনজাইম অক্সিজেন ও NADPH ব্যবহার করে এই TMA গ্যাসকে জারিত করে ট্রাইমিথাইলঅ্যামিন এন-অক্সাইড (TMAO)-তে রূপান্তর করে [৪]। তৈরি হওয়া এই TMAO সারা দেহের ধমনী রক্তে ছড়িয়ে পড়ে এবং রক্তে এর মাত্রা বৃদ্ধি পেলে তা হার্ট অ্যাটাক, স্ট্রোক, হার্ট ফেইলিউর এবং কিডনি বিকল হওয়ার ঝুঁকি বহুগুণ বাড়িয়ে দেয় [৪]। Hepatic FMO3 converts volatile portal TMA into circulating TMAO.'
            ),
            l(
              'Mechanistic investigations have demonstrated that TMAO exerts direct pathological actions on multiple cardiovascular cellular targets [4]. In tissue macrophages, TMAO upregulates the scavenger receptors CD36 and SR-A1 through mitogen-activated protein kinase (MAPK) signaling, accelerating the uptake of modified low-density lipoproteins and precipitating foam cell accumulation in the subendothelial vascular space [4]. Concurrently, TMAO alters bile acid synthesis by downregulating hepatic CYP7A1, impairing reverse cholesterol transport [3, 4]. In human platelets, TMAO acts on intracellular calcium stores, sensitizing IP3-dependent release from the dense tubular system and dramatically increasing platelet adhesion, activation, and thrombus formation at sites of arterial shear stress [4]. Targeting the CutC enzyme with structural analogues like 3,3-dimethyl-1-butanol (DMB) or fluoromethylcholine (FMC) prevents TMA formation, proving that the gut microbiome can be drugged to prevent cardiovascular disease [4].',
              'গবেষণায় দেখা গেছে যে রক্তে ভাসমান TMAO একাধিক উপায়ে রক্তনালীর মারাত্মক ক্ষতি সাধন করে [৪]। এটি ম্যাক্রোফেজ কোষের CD36 গ্রাহককে উত্তেজিত করে কোষে অতিরিক্ত চর্বি জমিয়ে ফোম সেল তৈরি করে এবং রক্তনালীতে চর্বির ব্লক বা প্লাক তৈরি করে [৪]। পাশাপাশি এটি যকৃতের CYP7A1 এনজাইম বন্ধ করে দেহ থেকে কোলেস্টেরল বের করে দেওয়া ব্যাহত করে [৩, ৪]। রক্তে থাকা অণুচক্রিকার ক্যালসিয়াম সংকেতকে অতি-সংবেদনশীল করে তুলে এটি নিমেষেই রক্ত জমাট বাঁধায় যা হার্ট অ্যাটাকের সরাসরি কারণ [৪]। DMB বা FMC যৌগের সাহায্যে ব্যাকটেরিয়ার CutC এনজাইম বন্ধ করে এই ক্ষতিকর TMAO তৈরি ঠেকানো সম্ভব, যা প্রমাণ করে যে অন্ত্রের ব্যাকটেরিয়াকে ওষুধ দিয়ে নিয়ন্ত্রণ করে হৃদরোগ নিরাময় করা সম্পূর্ণ বাস্তবসম্মত [৪]। TMAO promotes foam cell formation, impairs RCT, and primes thrombosis.'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Tryptophan Catabolites, AhR Activation & Clinical Metabolomics', '৫. ট্রিপটোফ্যান ক্যাটাবোলাইটস, AhR সক্রিয়করণ ও ক্লিনিক্যাল মেটাবোলোমিক্স'),
          paragraphs: [
            l(
              'The metabolic fate of dietary L-tryptophan provides a compelling clinical example of how commensal microbial enzymology supports host mucosal homeostasis [2, 5]. Tryptophan is an essential aromatic amino acid whose systemic utilization is partitioned into host and microbial pathways [5]. While host tissue IDO1 converts the majority of tryptophan into kynurenine, intestinal microbes possessing tryptophanase (TnaA) and aromatic amino acid transaminases convert luminal tryptophan into indole derivatives [5]. Key bacterial species—including Lactobacillus reuteri, Clostridium sporogenes, and Peptostreptococcus russellii—catalyze the generation of Indole-3-Propionic Acid (IPA), Indole-3-Aldehyde (IAld), Indole-3-Acetic Acid (IAA), and Indole-3-Lactic Acid (ILA) [5].',
              'খাদ্যের ট্রিপটোফ্যান অ্যামিনো অ্যাসিডের অণুজীবীয় বিপাক মানবদেহের সুরক্ষায় এক অপরিসীম ভূমিকা পালন করে [২, ৫]। ট্রিপটোফ্যান হলো একটি অপরিহার্য অ্যামিনো অ্যাসিড যার বেশিরভাগ মানবদেহে কাইনুরেনিন তৈরিতে ব্যবহৃত হলেও, একটি অংশ অন্ত্রের ব্যাকটেরিয়ার কাছে পৌঁছায় [৫]। ল্যাকটোব্যাসিলাস ও ক্লস্ট্রিডিয়ামের মতো বন্ধু ব্যাকটেরিয়াগুলো বিশেষ এনজাইমের মাধ্যমে এই ট্রিপটোফ্যানকে ভেঙে অত্যন্ত দরকারি কিছু বায়োঅ্যাক্টিভ ইনডোল যৌগে (যেমন ইনডোল-৩-প্রোপিওনিক অ্যাসিড বা IPA, এবং ইনডোল-৩-অ্যালডিহাইড বা IAld) রূপান্তরিত করে [৫]। Bacterial tryptophanase generates a spectrum of bioactive indoles.'
            ),
            l(
              'These microbially synthesized indoles serve as crucial physiological ligands for the Aryl Hydrocarbon Receptor (AhR), a basic helix-loop-helix transcription factor that acts as a master sensor of mucosal integrity [5]. In the cytoplasm of mucosal innate lymphoid cells (primarily type 3 ILCs, or ILC3s), IAld and other indoles bind AhR, releasing heat shock protein 90 (Hsp90) and promoting AhR translocation into the nucleus [5]. Within the nucleus, AhR heterodimerizes with ARNT and binds Xenobiotic Response Elements (XREs) in the promoter of the Il22 gene, triggering rapid transcription and exocytosis of Interleukin-22 (IL-22) [5].',
              'এই অণুজীবীয় ইনডোল যৌগগুলো অন্ত্রের অনাক্রম্য কোষসমূহের (ILC3) ভেতরে থাকা অ্যারিল হাইড্রোকার্বন রিসেপ্টর (AhR) নামক এক বিশেষ জিন-নিয়ামক রিসেপ্টরে আবদ্ধ হয় [৫]। ইনডোল যুক্ত হওয়ার সাথে সাথে AhR রিসেপ্টরটি কোষের নিউক্লিয়াসে প্রবেশ করে এবং ARNT প্রোটিনের সাথে জোড় বেঁধে জিনের ওপর বসে [৫]। এর ফলে অনাক্রম্য কোষগুলো বিপুল পরিমাণে ইন্টারলিউকিন-২২ (IL-22) নামক এক অত্যন্ত শক্তিশালী সুরক্ষাকারী সাইটোকাইন ক্ষরণ শুরু করে [৫]। AhR activation in ILC3s drives robust IL-22 transcription.'
            ),
            l(
              'Secreted IL-22 coordinates a multi-tiered epithelial defense program by binding the heterodimeric IL-22R1/IL-10R2 receptor complex expressed selectively on enterocytes, Paneth cells, and crypt stem cells [2, 5]. Ligation of IL-22R1 activates Tyk2 and JAK1, phosphorylating STAT3 on Tyr705 [5]. Phosphorylated STAT3 dimers translocate to the nucleus to induce the transcription of antimicrobial C-type lectins (REG3gamma and REG3beta), which bind peptidoglycan and form hexameric membrane-disrupting pores that lyse Gram-positive bacteria [2, 5]. Simultaneously, STAT3 activation upregulates MUC2 mucin synthesis in goblet cells and induces proliferative cyclins in Lgr5+ crypt stem cells, promoting rapid mucosal re-epithelialization following inflammatory or infectious damage [2, 5].',
              'নিঃসৃত IL-22 সাইটোকাইন সরাসরি অন্ত্রের এপিথেলিয়াল ও প্যানেথ কোষের গায়ে থাকা IL-22R1 রিসেপ্টরে বসে কোষে STAT3 এনজাইমকে সক্রিয় করে [২, ৫]। সক্রিয় STAT3 নিউক্লিয়াসে প্রবেশ করে এক যুগান্তকারী প্রতিরক্ষামূলক জিন কর্মসূচি চালু করে দেয় [৫]। এটি প্যানেথ কোষ থেকে REG3gamma অণুজীবনাশক পেপটাইড ক্ষরণ করায় যা ক্ষতিকর ব্যাকটেরিয়া মেরে ফেলে, গবলেট কোষ থেকে MUC2 মিউসিন নিঃসরণ বাড়িয়ে দেয়ালকে পুরু করে এবং ক্রিপ্টের স্টেম কোষের বিভাজন বাড়িয়ে যেকোনো ঘা বা ক্ষত দ্রুত সারিয়ে তোলে [২, ৫]। IL-22 acts on enterocytes to orchestrate antimicrobial defense and repair.'
            ),
            l(
              'In clinical practice, circulating Indole-3-Propionic Acid (IPA) serves as a biomarker of mucosal barrier competence and cardiometabolic resilience [5]. IPA binds the nuclear Pregnane X Receptor (PXR/NR1I2) on enterocytes, downregulating mucosal TNF-alpha and increasing the expression of sealing tight junction proteins (claudin-1, occludin) [5]. Decreased circulating IPA and indole metabolites—frequently observed following broad-spectrum antibiotic therapy, in active ulcerative colitis, or in individuals consuming diets low in dietary fiber and plant protein—correlate with barrier breakdown and systemic endotoxemia [2, 5]. Nutritional repletion strategies emphasizing unrefined legumes, cruciferous vegetables (rich in glucobrassicin, yielding the AhR ligand indole-3-carbinol), and targeted probiotics (e.g., Lactobacillus reuteri DSM 17938) restore the microbial AhR-IL-22 axis and reinforce mucosal defenses [2, 5].',
              'চিকিৎসা বিজ্ঞানে রক্তে ইনডোল-৩-প্রোপিওনিক অ্যাসিডের (IPA) মাত্রা অন্ত্রের দেয়ালের সুস্থতা ও দীর্ঘায়ুর এক অনন্য বায়োমার্কার হিসেবে ব্যবহৃত হয় [৫]। IPA এন্টারোসাইটের PXR রিসেপ্টরে বসে প্রদাহ কমিয়ে দেয় এবং টাইট জাংশনের ক্লডিন-১ ও অক্লুডিন প্রোটিন বাড়িয়ে দেয়ালকে সিল করে [৫]। অতিরিক্ত অ্যান্টিবায়োটিক গ্রহণ বা আঁশহীন খাদ্যাভ্যাসে রক্তে এই ইনডোলের মাত্রা কমে গেলে অন্ত্রের প্রাচীর ভেঙে পড়ে এবং রক্তে বিষাক্ত উপাদান ঢুকে পড়ে [২, ৫]। তাই ডাল, ব্রকলি, ফুলকপি এবং বিশেষ বন্ধু ব্যাকটেরিয়া (যেমন ল্যাকটোব্যাসিলাস রিউটেরি) গ্রহণের মাধ্যমে অন্ত্রে ইনডোল বাড়িয়ে অন্ত্রের দেয়ালকে আজীবন অটুট রাখা সম্ভব [২, ৫]। Circulating indoles are clinically actionable biomarkers of barrier integrity.'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Takeaways & Practice Questions', '৬. মূল শিক্ষণীয় সারসংক্ষেপ ও অনুশীলন'),
          paragraphs: [
            l(
              'The human gut microbiome is an integrated metabolic organ comprising ~3.8 x 10^13 bacterial cells (a 1:1 cellular stoichiometry with human somatic cells), dominated by Bacillota (Firmicutes) and Bacteroidota, with crucial functional contributions from Actinomycetota (Bifidobacterium) and Verrucomicrobiota (Akkermansia muciniphila) [1, 2]. The gut metagenome encodes over 3 million unique microbial genes, endowing the host with essential capacities for complex carbohydrate fermentation, secondary bile acid signaling, vitamin synthesis, and immunomodulation [1, 6].',
              'মানব অন্ত্রের অণুজীব সম্প্রদায় হলো একটি জীবন্ত বিপাকীয় অঙ্গ যাতে প্রায় ৩.৮ x ১০^১৩ টি ব্যাকটেরিয়া থাকে (মানব দেহকোষের সাথে প্রায় ১:১ অনুপাতে), যার শতকরা ৯০ ভাগের বেশি Bacillota ও Bacteroidota পর্বের অন্তর্ভুক্ত এবং যার মধ্যে Bifidobacterium ও Akkermansia muciniphila বাস করে [১, ২]। এই অণুজীব মেটাজেনোম ৩০ লক্ষাধিক অনন্য জিন বহন করে যা জটিল আঁশ পরিপাক, পিত্ত অম্ল রূপান্তর এবং ভিটামিন তৈরিতে অপরিহার্য ভূমিকা পালন করে [১, ৬]। The gut microbiome is an essential metabolic partner in human biology.'
            ),
            l(
              'Molecular profiling relies on 16S rRNA gene amplicon sequencing (evaluating hypervariable regions V3–V4 for taxonomic identification) and whole-genome shotgun (WGS) metagenomics (untargeted sequencing of total DNA to achieve strain resolution and functional CAZyme/pathway annotation) [6]. Alpha diversity (Shannon H\', Chao1) quantifies within-individual richness and evenness, representing an established index of ecological resilience [6]. Beta diversity (Bray-Curtis, UniFrac) measures compositional dissimilarity between hosts, mapping ecological shifts driven by diet, geography, and disease [6].',
              'মেটাজেনোমিক বিশ্লেষণ পরিচালিত হয় ১৬এস আরআরএনএ সিকোয়েন্সিং (V3–V4 অঞ্চল দিয়ে ট্যাক্সোনমি নির্ণয়) এবং হোল-জিনোম শটগান মেটাজেনোমিক্স (সমস্ত ডিএনএ বিশ্লেষণ করে নির্দিষ্ট স্ট্রেন ও এনজাইমের গতিপথ শনাক্তকরণ) এর মাধ্যমে [৬]। আলফা বৈচিত্র্য (শানন সূচক) ব্যক্তির নিজস্ব অণুজীবের প্রাচুর্য ও সমতা পরিমাপ করে সুস্থতার মাত্রা জানায়, আর বিটা বৈচিত্র্য একাধিক ভিন্ন মানুষের মধ্যকার অণুজীবের পার্থক্যের চিত্র তুলে ধরে [৬]। Metagenomic indices provide quantitative measurements of microbial health.'
            ),
            l(
              'Microbial bile acid biotransformation is initiated by Bile Salt Hydrolase (BSH) deconjugation, followed by Clostridiales 7alpha-dehydroxylation generating the secondary bile acids DCA and LCA [3]. Unconjugated CDCA potently activates nuclear FXR to repress hepatic CYP7A1 and lipogenesis, while LCA activates membrane TGR5 on L-cells to drive GLP-1 secretion and brown adipose thermogenesis [3, 4]. In contrast, bacterial CutC/CutD choline lyases cleave dietary choline to yield Trimethylamine (TMA), oxidized by hepatic FMO3 into atherogenic TMAO, which upregulates macrophage CD36, impairs reverse cholesterol transport, and triggers platelet hyperreactivity [4].',
              'পিত্ত অম্লের রূপান্তর অণুজীব ও মানবদেহের এক অপূর্ব মেলবন্ধন: ব্যাকটেরিয়ার BSH এনজাইম পিত্ত অম্লকে ডিকনজুগেট করে এবং ৭-আলফা ডিহাইড্রোক্সিলেজ এনজাইম DCA ও LCA তৈরি করে [৩]। মুক্ত CDCA যকৃতের FXR সক্রিয় করে চর্বি কমায় এবং সেকেন্ডারি পিত্ত অম্ল TGR5 রিসেপ্টর সক্রিয় করে ইনসুলিন উদ্দীপক GLP-1 ক্ষরণ করায় [৩, ৪]। কিন্তু ব্যাকটেরিয়ার CutC এনজাইম খাদ্যের অতিরিক্ত কোলিন ভেঙে TMA গ্যাস তৈরি করে যা যকৃতে গিয়ে হৃদরোগ সৃষ্টিকারী TMAO-তে রূপান্তরিত হয় এবং রক্তনালী বন্ধ করে হার্ট অ্যাটাকের ঝুঁকি বাড়ায় [৪]। Microbial bile and choline pathways govern systemic cardiometabolic fate.'
            ),
            l(
              'Microbial tryptophan catabolism yields bioactive indoles (IPA, IAld) that bind the cytosolic transcription factor AhR in mucosal ILC3 cells, driving robust transcription of Interleukin-22 (IL-22) [5]. IL-22 activates epithelial STAT3 phosphorylation, inducing Paneth cell antimicrobial lectins (REG3gamma), stimulating goblet cell MUC2 synthesis, and promoting stem cell proliferation to reinforce the mucosal barrier [2, 5]. Precision nutritional therapy leverages soluble prebiotic fibers, cruciferous indoles, extra virgin olive oil (rich in DMB to inhibit CutC), and targeted probiotics to optimize this metabolic superorganism and prevent systemic inflammation [2, 4, 5, 6].',
              'ব্যাকটেরিয়ার ট্রিপটোফ্যান বিপাক থেকে তৈরি ইনডোল যৌগগুলো অনাক্রম্য কোষের AhR রিসেপ্টরে বসে ইন্টারলিউকিন-২২ (IL-22) ক্ষরণ করায় [৫]। এই IL-22 এপিথেলিয়ামের STAT3 এনজাইমকে সক্রিয় করে প্যানেথ কোষ থেকে REG3gamma পেপটাইড ক্ষরণ করায়, মিউসিন স্তরকে পুরু করে এবং স্টেম কোষের মাধ্যমে দেয়াল মেরামত করে [২, ৫]। আঁশযুক্ত খাবার, ক্রুসিফেরাস সবজি, অলিভ অয়েল (যার DMB যৌগ ক্ষতিকর TMAO তৈরি বন্ধ করে) এবং প্রোবায়োটিক গ্রহণের মাধ্যমে এই মহা-বাস্তুতন্ত্রকে সুসংহত রেখে হৃদরোগ ও অন্ত্রের যাবতীয় প্রদাহ নির্মূল করা সম্ভব [২, ৪, ৫, ৬]। Nutritional medicine harnesses microbial indoles and bile acids for health.'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উচ্চতর স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. The Superorganism: Microbial Census & Taxonomic Architecture', '১. জীবজগতের মহা-বাস্তুতন্ত্র: অণুজীব গণনা ও শ্রেণিবিন্যাস কাঠামো'),
          paragraphs: [
            l(
              'From an advanced systems biology and thermodynamic perspective, the human gastrointestinal microbiome constitutes a self-organizing dissipative open ecosystem operating under extreme selective pressures [1, 2]. Revised biophysical cell censuses demonstrate that a standard adult human body contains 3.0 x 10^13 somatic cells and approximately 3.8 x 10^13 bacterial cells, dispelling the decades-old 10:1 ratio while establishing that the prokaryotic and eukaryotic compartments exist in stoichiometric parity [1]. The total wet weight of this microbial biomass approaches 0.2 to 0.5 kg, with an aggregated metabolic flux that rivals that of the human liver [1, 2]. Luminal oxygen concentrations plummet from approximately 30 to 60 mmHg in the proximal duodenum to partial pressures <1 mmHg in the distal transverse and descending colon, creating an ultra-strict anaerobic chemostat that selects for obligate fermenters capable of anaerobic respiration or substrate-level phosphorylation [2].',
              'সিস্টেম বায়োলজি এবং তাপগতিবিদ্যার দৃষ্টিকোণ থেকে মানব অন্ত্রের অণুজীব সম্প্রদায় হলো এক স্ব-নিয়ন্ত্রিত গতিশীল খোলা বাস্তুতন্ত্র যা তীব্র নির্বাচনী চাপের মুখে টিকে থাকে [১, ২]। আধুনিক গণনায় দেখা গেছে মানুষের দেহে ৩.০ x ১০^১৩ টি দেহকোষের বিপরীতে প্রায় ৩.৮ x ১০^১৩ টি ব্যাকটেরিয়া থাকে, যা প্রমাণ করে যে মানব কোষ ও অণুজীব প্রায় সমান অনুপাতে বসবাস করে [১]। এই অণুজীব ভাণ্ডারের মোট ওজন প্রায় ২০০ থেকে ৫০০ গ্রাম এবং এদের সম্মিলিত রাসায়নিক বিপাকীয় ক্ষমতা মানবদেহের যকৃতের সমান [১, ২]। ডুওডেনাম থেকে কোলনের দিকে নামার সাথে সাথে অক্সিজেনের চাপ ৩০-৬০ mmHg থেকে শূন্যের কোঠায় (<১ mmHg) নেমে আসে, যার ফলে এখানে কেবল এমন সব অবলিগেট অ্যানেরোবিক ব্যাকটেরিয়া টিকে থাকে যারা সম্পূর্ণ অক্সিজেনহীন পরিবেশে খাবার গাঁজন করে শক্তি উৎপাদনে সক্ষম [২]। The colonic lumen represents an ultra-low oxygen thermodynamic chemostat.'
            ),
            l(
              'The evolutionary taxonomy of the gut microbiome reflects profound metabolic specialization [1, 6]. The phylum Bacillota (Firmicutes) is predominantly partitioned into the classes Clostridia and Bacilli [2]. Within Clostridia, families such as Ruminococcaceae and Lachnospiraceae express high-affinity multienzyme cellulosome-like complexes that hydrolyze resistant starch and cellulose into hexoses, feeding the wood-Werkman or butyryl-CoA:acetate CoA-transferase pathway to synthesize butyrate [2]. The phylum Bacteroidota (Bacteroidetes) is characterized by massive genomic expansion of Polysaccharide Utilization Loci (PULs) [2, 6]. In Bacteroides thetaiotaomicron, over 80 independent PULs encode outer-membrane TonB-dependent SusC/SusD complexes that recognize, cleave, and import specific glycans (arabinoxylans, pectins, beta-glucans), generating acetate and propionate via the succinate pathway [2, 6].',
              'অন্ত্রের অণুজীবদের বিবর্তনীয় শ্রেণিবিন্যাস এদের গভীর বিপাকীয় বিশেষায়নকে প্রতিফলিত করে [১, ৬]। Bacillota পর্বের Clostridia ক্লাসের Ruminococcaceae ও Lachnospiraceae পরিবারের ব্যাকটেরিয়াগুলো বিশেষ মাল্টি-এনজাইম কাঠামোর মাধ্যমে অপাচ্য শর্করা ও সেলুলোজকে ভেঙে বিউটাইরেট তৈরি করে যা অন্ত্রের কোষকে শক্তি জোগায় [২]। অপরদিকে Bacteroidota পর্বের ব্যাকটেরয়ডিস থিটায়োটামাইক্রন (Bacteroides thetaiotaomicron) ব্যাকটেরিয়ার জিনোমে ৮০ টিরও বেশি স্বাধীন PUL লোকাস থাকে যা SusC/SusD প্রোটিন কমপ্লেক্সের মাধ্যমে যেকোনো জটিল আঁশকে দ্রুত শনাক্ত করে কেটে ভেতরে টেনে নেয় এবং সাকসিনেট পাথওয়ের মাধ্যমে প্রোপিওনেট ও অ্যাসিটেট তৈরি করে [২, ৬]। PUL systems represent molecular machines for polysaccharide harvesting.'
            ),
            l(
              'Actinomycetota and Verrucomicrobiota execute specialized niche functions crucial for host developmental and mucosal immunity [2]. Bifidobacterium species encode unique beta-fructofuranosidases, sialidases, and fucosidases that orchestrate the internal degradation of complex human milk oligosaccharides (HMOs such as 2\'-fucosyllactose and lacto-N-tetraose) in neonates, generating indole-3-lactic acid (ILA) that promotes Treg expansion and suppresses enteric inflammation [2]. In adults, Akkermansia muciniphila occupies the mucosal interface, expressing over 60 distinct mucin-degrading glycoside hydrolases and sulfatases [2, 6]. The specific utilization of mucin glycans by A. muciniphila stimulates goblet cell renewal, maintains the sterile inner mucus layer, and prevents pathobiont direct contact with apical enterocyte microvilli [2, 6].',
              'Actinomycetota এবং Verrucomicrobiota পর্ব দুটি অন্ত্রের অনাক্রম্যতা ও প্রাচীর সুরক্ষায় অত্যন্ত সুনির্দিষ্ট দায়িত্ব পালন করে [২]। বাইফিডোব্যাকটেরিয়া বিশেষ এনজাইমের মাধ্যমে নবজাতকের পেটে মায়ের বুকের দুধের জটিল শর্করা (HMO) ভেঙে ইনডোল-৩-ল্যাকটিক অ্যাসিড (ILA) তৈরি করে যা অনাক্রম্য সহনশীলতা গড়ে তোলে [২]। প্রাপ্তবয়স্কদের ক্ষেত্রে আকেরম্যানসিয়া মিউসিনিফিলা (Akkermansia muciniphila) ৬০ টিরও বেশি এনজাইমের সাহায্যে পুরনো মিউসিন জেল ভেঙে নতুন মিউসিন তৈরিতে গবলেট কোষকে উদ্দীপিত করে এবং দেয়ালকে সর্বদা পুরু ও জীবাণুমুক্ত রাখে [২, ৬]। Akkermansia muciniphila preserves the inner colonic mucus architecture.'
            ),
            l(
              'The breakdown of obligate anaerobic conditions triggers an expansion of facultative anaerobic Pseudomonadota (Enterobacteriaceae), a hallmark of intestinal dysbiosis [2, 6]. In healthy colonocytes, high mitochondrial beta-oxidation of butyrate consumes local oxygen, maintaining epithelial hypoxia (<1% O2) and high expression of Hypoxia-Inducible Factor-1alpha (HIF-1alpha) [2]. When epithelial metabolism shifts toward anaerobic glycolysis (due to inflammation, antibiotics, or butyrate depletion), epithelial oxygenation increases, and inducible nitric oxide synthase (iNOS) generates nitrate [2, 6]. Enterobacteriaceae utilize this host-derived nitrate and oxygen as terminal electron acceptors for respiratory growth, outcompeting obligate anaerobic fermenters and driving inflammatory enteropathies [2, 6].',
              'অক্সিজেনহীন পরিবেশ বিঘ্নিত হলে অ্যানেরোবিক বন্ধু ব্যাকটেরিয়া মারা যায় এবং ক্ষতিকর Pseudomonadota (ই-কোলাই গোত্রীয়) ব্যাকটেরিয়াগুলো দ্রুত ছড়িয়ে পড়ে, যা অন্ত্রের ডিসবায়োসিসের মূল কারণ [২, ৬]। সুস্থ কোলন কোষে বিউটাইরেটের বিটা-জারণের ফলে স্থানীয় সমস্ত অক্সিজেন খরচ হয়ে যায় এবং তীব্র হাইপোক্সিয়া (<১% অক্সিজেন) বজায় থাকে যা HIF-1alpha প্রোটিনকে অক্ষত রাখে [২]। কিন্তু প্রদাহ বা অ্যান্টিবায়োটিকের কারণে এই কোষগুলো ক্ষতিগ্রস্ত হলে টিস্যু থেকে অক্সিজেন ও নাইট্রেট লুমেনে চুইয়ে পড়ে [২, ৬]। ক্ষতিকর ব্যাকটেরিয়ারা এই অক্সিজেন ব্যবহার করে দ্রুত বংশবৃদ্ধি করে বন্ধু ব্যাকটেরিয়াগুলোকে ধ্বংস করে ফেলে [২, ৬]। Epithelial oxygenation breakdown fuels Enterobacteriaceae blooms.'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Metagenomic Profiling & Ecological Diversity Metrics', '২. মেটাজেনোমিক প্রোফাইলিং ও বাস্তুতাত্ত্বিক বৈচিত্র্য পরিমাপ'),
          paragraphs: [
            l(
              'The technological evolution of metagenomics has unlocked unprecedented resolution of the taxonomic and functional landscape of the human microbiome [1, 6]. Targeted 16S rRNA gene amplicon sequencing targets hypervariable regions flanked by conserved ribosomal RNA sequences [6]. Modern bioinformatic pipelines avoid arbitrary 97% clustering by implementing Divisive Amplicon Denoising Algorithms (DADA2), which construct biological Amplicon Sequence Variants (ASVs) based on statistical error models of the sequencer [6]. However, 16S sequencing cannot discriminate between functionally divergent strains, is prone to copy-number variations (ranging from 1 to 15 copies of the rrn operon per bacterial genome), and cannot sequence viral or fungal genomes [6].',
              'মেটাজেনোমিক্স প্রযুক্তির অভূতপূর্ব অগ্রগতি অন্ত্রের অণুজীবদের শ্রেণিবিন্যাস ও কার্যগত রূপরেখাকে নির্ভুলভাবে উন্মোচিত করেছে [১, ৬]। ১৬এস আরআরএনএ সিকোয়েন্সিংয়ে রাইবোজোমের পরিবর্তনশীল অংশকে পিসিআর করে আধুনিক DADA2 অ্যালগরিদমের মাধ্যমে একক নিউক্লিওটাইডের নির্ভুলতায় ASV হিসেবে সাজানো হয় [৬]। তবে এই প্রযুক্তির কিছু প্রাকৃতিক সীমাবদ্ধতা রয়েছে; কারণ এটি ব্যাকটেরিয়ার ভিন্ন স্ট্রেন আলাদা করতে পারে না এবং বিভিন্ন ব্যাকটেরিয়ায় এই জিনের সংখ্যার তারতম্য থাকায় এদের কার্যক্ষমতার পূর্ণ তথ্য পাওয়া যায় না [৬]। DADA2 resolves exact biological sequence variants.'
            ),
            l(
              'Whole-genome shotgun (WGS) metagenomics overcomes these barriers by sequencing total extracted environmental DNA across high-throughput platforms [6]. Sequence libraries are subjected to quality filtering, removal of human host reads via alignment to the GRCh38 human reference genome, and profiling against comprehensive databases [6]. Metagenomic classifiers such as MetaPhlAn use clade-specific marker genes to profile taxonomic abundance down to the species and subspecies level, whereas Kraken2 utilizes exact k-mer matching against complete RefSeq genomes [6]. De novo assembly utilizing graph-based algorithms (e.g., MEGAHIT, metaSPAdes) reconstructs contiguous sequences (contigs), which are grouped into Metagenome-Assembled Genomes (MAGs) via differential coverage binning (MetaBAT2) [6]. WGS provides single-nucleotide resolution of bacterial strains and catalogs the entire pan-genome of metabolic genes, antibiotic resistance determinants (resistome), and virulence factors [2, 6].',
              'হোল-জিনোম শটগান মেটাজেনোমিক্স (WGS) এই সমস্ত বাধা দূর করে মলের সমস্ত ডিএনএ একসাথে উচ্চ ক্ষমতাসম্পন্ন প্ল্যাটফর্মে সিকোয়েন্স করে [৬]। মানবদেহের নিজস্ব ডিএনএ আলাদা করে ফেলার পর বিশেষ সফটওয়্যার (যেমন MetaPhlAn ও Kraken2) প্রতিটি ব্যাকটেরিয়ার স্ট্রেন নিখুঁতভাবে শনাক্ত করে [৬]। জটিল গ্রাফ-ভিত্তিক অ্যালগরিদমগুলো এই ডিএনএ খণ্ডগুলোকে জোড়া লাগিয়ে সম্পূর্ণ ব্যাকটেরিয়াল জিনোম (MAGs) তৈরি করে [৬]। শটগান মেটাজেনোমিক্স কেবল ব্যাকটেরিয়ার স্ট্রেনই জানায় না, বরং এদের অ্যান্টিবায়োটিক প্রতিরোধী জিন এবং বিষাক্ত পদার্থ তৈরির জিন ভাণ্ডারকে সম্পূর্ণ উন্মোচিত করে [২, ৬]। WGS enables de novo reconstruction of metagenome-assembled genomes.'
            ),
            l(
              'Alpha diversity evaluates the information entropy and richness within a localized ecosystem [6]. The Shannon Diversity Index (H\') quantifies uncertainty: H\' = -SUM [pi * ln(pi)], integrating both species richness and species evenness [6]. The Gini-Simpson index (1 - D) calculates the probability that two randomly selected individuals from a community belong to different species, where D = SUM (pi^2) [6]. The Chao1 richness estimator models low-abundance species using singletons (taxa detected only once, F1) and doubletons (taxa detected twice, F2): S_Chao1 = S_obs + [F1^2 / (2 * F2)] [6]. In clinical cohorts, depressed alpha diversity is universally associated with metabolic dysfunction, loss of metabolic redundancy, reduced short-chain fatty acid flux, and susceptibility to Clostridioides difficile colonization [1, 2, 6].',
              'আলফা বৈচিত্র্য একটি একক বাস্তুতন্ত্রের অভ্যন্তরীণ তথ্য ও প্রজাতির প্রাচুর্য পরিমাপ করে [৬]। শানন সূচক (Shannon Index, H\') প্রজাতির সংখ্যা ও তাদের আনুপাতিক সমতাকে একসাথে সমন্বয় করে: H\' = -SUM [pi * ln(pi)] [৬]। জিনি-সিম্পসন সূচক (১ - D) অণুজীবদের মধ্যকার বৈচিত্র্যের সম্ভাবনা নির্ণয় করে [৬]। অপরদিকে Chao1 সূচক একক ও দ্বৈত ব্যাকটেরিয়ার সংখ্যা বিবেচনা করে মোট সম্ভাব্য প্রজাতির সংখ্যা বের করে: S_Chao1 = S_obs + [F1^2 / (2 * F2)] [৬]। চিকিৎসাবিজ্ঞানে দেখা গেছে, আলফা বৈচিত্র্য কমে যাওয়া মেটাবলিক সিন্ড্রোম, ডায়াবেটিস এবং সি-ডিফিসিল ইনফেকশনের প্রধান কারণ [১, ২, ৬]। Depressed alpha diversity signifies functional collapse of the microbiome.'
            ),
            l(
              'Beta diversity measures ecological turnover between distinct ecosystems using distance matrices [6]. Non-phylogenetic metrics include the Bray-Curtis dissimilarity, calculated as d_BC = 1 - [2 * C_ij / (S_i + S_j)], where C_ij is the sum of lesser abundances for shared species [6]. Phylogenetic metrics incorporate evolutionary lineage: Unweighted UniFrac measures the fraction of unshared branch length on a phylogenetic tree (sensitive to rare lineages), whereas Weighted UniFrac weights branch lengths by relative abundance, capturing shifts in dominant community members [6]. Dimensionality reduction through Principal Coordinates Analysis (PCoA) visualizes these high-dimensional distance matrices across orthogonal eigenvectors [6]. Permutational Multivariate Analysis of Variance (PERMANOVA) statistically tests whether community composition differs significantly between healthy controls and diseased cohorts [2, 6].',
              'বিটা বৈচিত্র্য একাধিক ভিন্ন মানুষের অণুজীব বাস্তুতন্ত্রের মধ্যকার দূরবর্তী বংশগত বা গঠনগত পার্থক্য পরিমাপ করে [৬]। ব্রেই-কার্টিস সূত্র ব্যাকটেরিয়ার সংখ্যার আপেক্ষিক তারতম্য হিসাব করে, আর ইউনিফ্র্যাক (UniFrac) পদ্ধতি ব্যাকটেরিয়ার বিবর্তনীয় বৃক্ষের শাখার দূরত্বের ওপর ভিত্তি করে পার্থক্য গণনা করে [৬]। আনওয়েটেড ইউনিফ্র্যাক বিরল প্রজাতি শনাক্ত করে এবং ওয়েটেড ইউনিফ্র্যাক প্রধান প্রজাতির পরিবর্তন পর্যবেক্ষণ করে [৬]। PCoA গ্রাফের মাধ্যমে এই জটিল বহুমাত্রিক ডেটা বিশ্লেষণ করা হয় এবং PERMANOVA স্ট্যাটিস্টিকাল পরীক্ষার মাধ্যমে সুস্থ ও অসুস্থ রোগীদের অণুজীবের পার্থক্য প্রমাণিত হয় [২, ৬]। Beta diversity distance metrics map cohort-level phylogenetic divergence.'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Microbial Bile Acid Biotransformation: FXR & TGR5 Signaling', '৩. অণুজীবীয় পিত্ত অম্লের রূপান্তর: FXR ও TGR5 রিসেপ্টর সংকেত'),
          paragraphs: [
            l(
              'Bile acid metabolism represents an intricate biochemical inter-kingdom communication network governing energy expenditure, lipid flux, and mucosal immunity [3, 4]. Primary bile acids are synthesized in hepatocytes from cholesterol via two enzymatic pathways: the neutral pathway initiated by microsomal CYP7A1 (yielding CA and CDCA) and the acidic pathway initiated by mitochondrial CYP27A1 (yielding predominantly CDCA) [3]. Hepatocellular BAAT covalently conjugates the steroid C-24 carboxyl group to glycine or taurine [3]. These conjugated bile salts are pumped into bile canaliculi via the Bile Salt Export Pump (BSEP/ABCB11), stored in the gallbladder, and exocytosed into the duodenum following CCK-dependent gallbladder contraction [3, 4].',
              'পিত্ত অম্ল বিপাক হলো মানবদেহ ও অণুজীবের মধ্যকার এক অত্যন্ত জটিল আন্তঃ-সাম্রাজ্য জৈবরাসায়নিক সংকেত ব্যবস্থা যা শক্তি ব্যয়, চর্বি বিপাক এবং অনাক্রম্য প্রতিরক্ষা নিয়ন্ত্রণ করে [৩, ৪]। যকৃতে কোলেস্টেরল থেকে CYP7A1 ও CYP27A1 এনজাইমের মাধ্যমে কোলিক অ্যাসিড (CA) এবং চেনোডিঅক্সিকোলিক অ্যাসিড (CDCA) তৈরি হয় [৩]। যকৃতের BAAT এনজাইম এদের সাথে গ্লাইসিন বা টরিন যুক্ত করে কনজুগেটেড পিত্ত লবণে রূপান্তর করে [৩]। BSEP পাম্পের মাধ্যমে এরা পিত্তরসে ক্ষরিত হয়ে পিত্তথলিতে জমা থাকে এবং খাবার গ্রহণের পর CCK হরমোনের উদ্দীপনায় ডুওডেনামে নির্গত হয় [৩, ৪]। Hepatocellular enzymes orchestrate primary bile acid biosynthesis.'
            ),
            l(
              'While terminal ileal ASBT recovers ~95% of bile salts, the ~5% entering the cecum undergoes obligate microbial deconjugation mediated by Bile Salt Hydrolase (BSH, EC 3.5.1.24) [3]. BSH enzymes belong to the N-terminal nucleophile (Ntn) hydrolase superfamily, utilizing a conserved catalytic Cys1 residue to execute nucleophilic attack on the amide bond of conjugated bile salts [3]. Deconjugation is thermodynamically irreversible under physiological colonic conditions, producing free CA, free CDCA, and unconjugated glycine or taurine [3]. BSH activity alters bile acid solubility and reduces their passive reabsorption, ensuring their retention within the colonic lumen for downstream bacterial transformation [3, 4].',
              'টার্মিনাল ইলিয়ামের ASBT পাম্প ৯৫% পিত্ত লবণ শোষণ করলেও বাকি ৫% কোলনে পৌঁছায় এবং ব্যাকটেরিয়ার BSH এনজাইম দ্বারা ডিকনজুগেটেড হয় [৩]। BSH এনজাইমগুলো Ntn-হাইড্রোলেজ পরিবারের অন্তর্ভুক্ত যা তাদের Cys1 অ্যামিনো অ্যাসিডের সাহায্যে পিত্ত লবণের অ্যামাইড বন্ধন ভেঙে মুক্ত কোলিক অ্যাসিড ও চেনোডিঅক্সিকোলিক অ্যাসিড তৈরি করে [৩]। এই ডিকনজুগেশন বিক্রিয়াটি কোলনে অপরিবর্তনীয় এবং এটি পিত্ত অম্লকে ব্যাকটেরিয়ার পরবর্তী এনজাইমেটিক রূপান্তরের জন্য প্রস্তুত করে [৩, ৪]। BSH catalyzes irreversible nucleophilic cleavage of bile conjugates.'
            ),
            l(
              'Unconjugated primary bile acids then encounter the bile acid inducible (bai) multienzyme operon expressed by select Clostridiales (e.g., Clostridium scindens) [3]. The pathway proceeds via sequential multi-step enzymology: BaiB (bile acid-CoA ligase) activates free CA or CDCA into a CoA thioester; BaiA (3alpha-hydroxysteroid dehydrogenase) oxidizes the C-3 hydroxyl to a 3-oxo intermediate; BaiCD/BaiH (flavoenzymes) introduce a double bond between C-4 and C-5; BaiE (7alpha-dehydratase) executes stereospecific elimination of the 7alpha-hydroxyl group, yielding an unconjugated intermediate; and downstream reductases reduce the steroid ring to yield the secondary bile acids Deoxycholic Acid (DCA from CA) and Lithocholic Acid (LCA from CDCA) [3, 4]. Concurrently, 7beta-HSDH expressed by Ruminococcus species epimerizes CDCA into Ursodeoxycholic Acid (UDCA) [3].',
              'ডিকনজুগেশনের পর মুক্ত পিত্ত অম্লগুলো ক্লস্ট্রিডিয়াম ব্যাকটেরিয়ার bai জিন কাঠামোর বহু-এনজাইম ব্যবস্থার মুখোমুখি হয় [৩]। BaiB এনজাইম পিত্ত অম্লকে CoA থায়োএস্টারে রূপান্তর করে, BaiA একে জারিত করে, BaiE এনজাইম ৭ নম্বর কার্বন থেকে হাইড্রোক্সিল মূলকটি অপসারণ করে এবং অন্যান্য এনজাইমগুলো বিজারণ ঘটিয়ে কোলিক অ্যাসিডকে ডিঅক্সিকোলিক অ্যাসিডে (DCA) এবং চেনোডিঅক্সিকোলিক অ্যাসিডকে লিথোকোলিক অ্যাসিডে (LCA) রূপান্তরিত করে [৩, ৪]। একই সাথে কিছু উপকারী ব্যাকটেরিয়া CDCA-কে আরসোডিঅক্সিকোলিক অ্যাসিডে (UDCA) রূপান্তরিত করে যা লিভার সুরক্ষায় কাজ করে [৩]। The bacterial bai operon coordinates stereospecific multistep 7alpha-dehydroxylation.'
            ),
            l(
              'The biotransformation from primary to secondary bile acids alters receptor pharmacodynamics across the FXR and TGR5 pathways [3, 4]. CDCA is the premier endogenous agonist for the nuclear receptor FXR (EC50 ~10 micromol/L), which heterodimerizes with Retinoid X Receptor (RXR) to bind FXR response elements (FXRE) [3]. In the ileum, FXR drives the transcription of FGF19, which acts via hepatic FGFR4/beta-Klotho to activate the ERK1/2 pathway, repressing CYP7A1 transcription and suppressing SREBP-1c-driven de novo lipogenesis [3, 4]. In contrast, the secondary bile acid LCA is the most potent natural ligand for the membrane receptor TGR5 (GPBAR1, EC50 ~0.5 micromol/L) [3]. On enteroendocrine L-cells, TGR5 couples to Galpha-s, elevating cAMP and activating Epac2/PKA to stimulate exocytosis of GLP-1, while in brown adipose tissue, TGR5 stimulates iodothyronine deiodinase 2 (DIO2), converting T4 to active T3 to stimulate UCP1-dependent mitochondrial thermogenesis [3, 4].',
              'প্রাথমিক থেকে সেকেন্ডারি পিত্ত অম্লে এই রূপান্তর FXR এবং TGR5 রিসেপ্টরের সংকেত প্রবাহ নাটকীয়ভাবে পরিবর্তন করে [৩, ৪]। মুক্ত CDCA সবচেয়ে শক্তিশালীভাবে নিউক্লিয়ার FXR রিসেপ্টরে বসে Retinoid X Receptor (RXR) এর সাথে জোড় বাঁধে এবং অন্ত্র থেকে FGF19 হরমোন ক্ষরণ করায় যা যকৃতে চর্বি তৈরি বন্ধ করে এবং ইনসুলিন সংবেদনশীলতা বাড়ায় [৩, ৪]। অপরদিকে সেকেন্ডারি পিত্ত অম্ল LCA অন্ত্রের এল-কোষে থাকা TGR5 রিসেপ্টরে সবচেয়ে শক্তভাবে বসে সাইক্লিক এএমপি (cAMP) বাড়িয়ে ইনসুলিন উদ্দীপক GLP-1 ক্ষরণ করায় এবং বাদামি চর্বি কোষে থাইরয়েড হরমোন সক্রিয় করে ক্যালোরি জ্বালিয়ে দেহের অতিরিক্ত মেদ কমাতে সাহায্য করে [৩, ৪]। FXR and TGR5 activation differentially govern lipid, glucose, and energy flux.'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. CutC Choline Lyase & Hepatic FMO3: The TMAO Atherogenic Axis', '৪. CutC কোলিন লাইয়েজ ও হেপাটিক FMO3: TMAO এথেরোজেনিক অক্ষ'),
          paragraphs: [
            l(
              'The metabolic axis linking dietary quaternary amines to atherothrombosis highlights the profound clinical impact of diet-microbiome interactions [2, 4]. Choline (a component of phosphatidylcholine/lecithin) and L-carnitine are consumed abundantly in red meat, egg yolks, poultry, and fish [4]. While physiological amounts of choline are absorbed in the jejunum via active and facilitated transporters, diets rich in animal protein saturate small intestinal transport capacity, shunting grams of intact choline, betaine, and carnitine into the cecum and colon [4]. Here, these quaternary ammonium compounds become substrates for anaerobic microbial fermentation [4].',
              'খাদ্যের কোয়াটারনারি অ্যামিন ও অণুজীবের পারস্পরিক ক্রিয়ায় রক্তনালী বন্ধ হওয়ার প্রক্রিয়া আধুনিক প্রিভেন্টিভ কার্ডিওলজির এক অন্যতম প্রধান আবিষ্কার [২, ৪]। ডিমের কুসুম, লাল মাংস এবং কলিজায় প্রচুর পরিমাণে কোলিন ও এল-কার্নিটিন থাকে [৪]। সুস্থ শরীরে কোলিনের একটি অংশ ক্ষুদ্রান্ত্রে শোষিত হলেও, অতিরিক্ত প্রাণীজ প্রোটিন গ্রহণ করলে পরিবহন ব্যবস্থা স্যাচুরেটেড হয়ে যায় এবং বিপুল পরিমাণ কোলিন ও কার্নিটিন সরাসরি কোলনের ব্যাকটেরিয়ার কাছে পৌঁছে যায় [৪]। High animal protein diets flood the colonic bioreactor with quaternary amines.'
            ),
            l(
              'Within the colonic microbiome, the choline utilization (cut) gene cluster encodes the glycyl radical enzyme Choline Trimethylamine-Lyase (CutC) and its radical S-adenosylmethionine (SAM) activating partner CutD [4]. The crystal structure of CutC reveals a catalytic core featuring a conserved Gly821 residue positioned adjacent to active-site Cys489 [4]. Activation by CutD cleaves SAM via single-electron reduction, transferring an electron from a [4Fe-4S] cluster to generate a transient 5\'-deoxyadenosyl radical, which abstracts a hydrogen atom from Gly821 to create a stable glycyl radical [4]. During catalysis, the glycyl radical generates a thiyl radical on Cys489, which abstracts a hydrogen atom from C-1 of choline, triggering homolytic elimination of Trimethylamine (TMA) gas and generating acetaldehyde [4]. A parallel microbial pathway, encoded by the two-component Rieske-type carnitine monooxygenase (CntA/CntB), cleaves L-carnitine to liberate TMA [4].',
              'বৃহদন্ত্রে ব্যাকটেরিয়ার CutC ও CutD এনজাইম জটিল কোলিন বিপাকে মূল ভূমিকা পালন করে [৪]। CutC এর আণবিক কাঠামোতে Gly821 অ্যামিনো অ্যাসিডের পাশে Cys489 থাকে [৪]। CutD এনজাইম আয়রন-সালফার ক্লাস্টারের সাহায্যে একটি ইলেকট্রন স্থানান্তর করে Gly821 এ একটি শক্তিশালী গ্লাইসিল র্যাডিক্যাল তৈরি করে [৪]। এই সক্রিয় র্যাডিক্যালটি কোলিনের অত্যন্ত শক্তিশালী কার্বন-নাইট্রোজেন বন্ধন ভেঙে এক মুহূর্তেই বিষাক্ত ট্রাইমিথাইলঅ্যামিন (TMA) গ্যাস ও অ্যাসিটালডিহাইড তৈরি করে [৪]। একইভাবে ব্যাকটেরিয়ার CntA/CntB এনজাইম খাদ্যের কার্নিটিন ভেঙেও এই TMA গ্যাস তৈরি করে [৪]। The CutC glycyl radical machinery mediates homolytic C-N bond fission.'
            ),
            l(
              'Because Trimethylamine (TMA) is an uncharged, low-molecular-weight lipophilic gas, it rapidly diffuses across the colonic epithelium into the portal circulation [4]. In the liver, hepatic parenchymal cells express Flavin-containing Monooxygenase isoform 3 (FMO3), which utilizes FAD, NADPH, and molecular oxygen to monooxygenate the tertiary amine nitrogen, generating Trimethylamine N-Oxide (TMAO) [4]. TMAO is released into systemic arterial blood, where physiological renal clearance maintains plasma levels <3.5 micromol/L in healthy individuals consuming plant-forward diets [4]. In patients with high animal protein intake or impaired renal excretion, plasma TMAO escalates to >10 to 30 micromol/L, conferring severe clinical risks for cardiovascular events and all-cause mortality [4].',
              'TMA একটি ক্ষুদ্র ও লিপোফিলিক গ্যাস হওয়ায় এটি অন্ত্রের দেয়াল ভেদ করে রক্তে ঢুকে পোর্টাল শিরার মাধ্যমে যকৃতে পৌঁছায় [৪]। যকৃতের কোষে থাকা FMO3 নামক বিশেষ এনজাইম অক্সিজেন ও NADPH ব্যবহার করে এই TMA গ্যাসকে জারিত করে ট্রাইমিথাইলঅ্যামিন এন-অক্সাইড (TMAO)-তে রূপান্তর করে [৪]। তৈরি হওয়া এই TMAO সারা দেহের ধমনী রক্তে ছড়িয়ে পড়ে এবং সুস্থ মানুষের রক্তে এর মাত্রা ৩.৫ মাইক্রোমোল/লিটারের নিচে থাকে [৪]। কিন্তু অতিরিক্ত মাংসাশী খাদ্যাভ্যাসে রক্তে এর মাত্রা ১০ থেকে ৩০ মাইক্রোমোল/লিটার পর্যন্ত উঠে যায় যা হার্ট অ্যাটাক ও অকালমৃত্যুর মারাত্মক ঝুঁকি সৃষ্টি করে [৪]। Hepatic FMO3 monooxygenation produces the pro-atherogenic zwitterion TMAO.'
            ),
            l(
              'TMAO accelerates atherosclerosis and arterial thrombosis via multi-target cellular mechanisms [4]. In vascular macrophages, TMAO activates the MAPK/JNK and p38 pathways, upregulating the class B scavenger receptor CD36 and class A scavenger receptor SR-A1, which accelerates the uncontrolled endocytosis of oxidized LDL and promotes foam cell formation in the arterial intima [4]. Furthermore, TMAO represses hepatic CYP7A1, impairing reverse cholesterol transport and trapping sterols in peripheral arteries [3, 4]. Crucially, in human platelets, TMAO sensitizes inositol 1,4,5-trisphosphate (IP3) receptors on the dense tubular system, lowering the threshold for intracellular Ca2+ release in response to submaximal concentrations of thrombin or collagen, precipitating platelet hyperreactivity and catastrophic occlusive thrombosis [4]. Developing small-molecule non-lethal inhibitors of bacterial CutC (such as 3,3-dimethyl-1-butanol [DMB] or iodomethylcholine [IMC]) successfully suppresses plasma TMAO and arrests atherosclerotic progression without exerting antibiotic selective pressure, providing proof-of-concept for drugging the gut microbiome [4].',
              'রক্তে ভাসমান TMAO একাধিক ধ্বংসাত্মক উপায়ে আমাদের রক্তনালীর ক্ষতি করে [৪]। এটি ম্যাক্রোফেজ কোষের MAPK সংকেত সক্রিয় করে CD36 ও SR-A1 গ্রাহক বাড়িয়ে দেয়, যার ফলে ম্যাক্রোফেজগুলো অতিরিক্ত অক্সিডাইজড কোলেস্টেরল গিলে ফেলে ফোম কোষে পরিণত হয় এবং ধমনীতে চর্বির প্লাক তৈরি করে রক্ত চলাচল বন্ধ করে দেয় [৪]। পাশাপাশি এটি যকৃতের CYP7A1 এনজাইম বন্ধ করে দেহ থেকে কোলেস্টেরল বের করে দেওয়া ব্যাহত করে [৩, ৪]। রক্তে থাকা অণুচক্রিকার IP3 গ্রাহককে অতি-সংবেদনশীল করে তুলে এটি নিমেষেই রক্ত জমাট বাঁধায় যা হার্ট অ্যাটাকের সরাসরি কারণ [৪]। DMB বা IMC যৌগের সাহায্যে ব্যাকটেরিয়ার CutC এনজাইম বন্ধ করে ব্যাকটেরিয়ার ক্ষতি না করেই এই ক্ষতিকর TMAO তৈরি ঠেকানো সম্ভব, যা প্রমাণ করে যে অন্ত্রের ব্যাকটেরিয়াকে ওষুধ দিয়ে নিয়ন্ত্রণ করে হৃদরোগ নিরাময় করা সম্পূর্ণ বাস্তবসম্মত [৪]। Non-lethal CutC inhibition represents a transformative paradigm in preventive cardiology.'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Tryptophan Catabolites, AhR Activation & Clinical Metabolomics', '৫. ট্রিপটোফ্যান ক্যাটাবোলাইটস, AhR সক্রিয়করণ ও ক্লিনিক্যাল মেটাবোলোমিক্স'),
          paragraphs: [
            l(
              'The metabolic processing of dietary L-tryptophan provides an exquisite model of host-microbiome metabolic mutualism [2, 5]. Tryptophan is an essential aromatic amino acid whose systemic utilization is governed by three primary pathways: host Indoleamine 2,3-Dioxygenase 1 (IDO1) generating kynurenine (~95% of total flux); host Tryptophan Hydroxylase 1 (TPH1) generating serotonin; and microbial tryptophanase (TnaA) generating indoles [5]. Gut commensals belonging to Lactobacillus, Clostridium, and Peptostreptococcus utilize pyridoxal 5\'-phosphate (PLP)-dependent tryptophanase and transaminases to catabolize luminal tryptophan into a diverse spectrum of indoles, including Indole-3-Propionic Acid (IPA), Indole-3-Aldehyde (IAld), Indole-3-Acetic Acid (IAA), and Indole-3-Lactic Acid (ILA) [5].',
              'খাদ্যের ট্রিপটোফ্যান অ্যামিনো অ্যাসিডের অণুজীবীয় বিপাক মানবদেহের সুরক্ষায় এক অপরিসীম ভূমিকা পালন করে [২, ৫]। ট্রিপটোফ্যান হলো একটি অপরিহার্য অ্যামিনো অ্যাসিড যার বেশিরভাগ মানবদেহে কাইনুরেনিন তৈরিতে ব্যবহৃত হলেও, একটি অংশ অন্ত্রের ব্যাকটেরিয়ার কাছে পৌঁছায় [৫]। ল্যাকটোব্যাসিলাস ও ক্লস্ট্রিডিয়ামের মতো বন্ধু ব্যাকটেরিয়াগুলো বিশেষ এনজাইমের মাধ্যমে এই ট্রিপটোফ্যানকে ভেঙে অত্যন্ত দরকারি কিছু বায়োঅ্যাক্টিভ ইনডোল যৌগে (যেমন ইনডোল-৩-প্রোপিওনিক অ্যাসিড বা IPA, এবং ইনডোল-৩-অ্যালডিহাইড বা IAld) রূপান্তরিত করে [৫]। Bacterial PLP-dependent enzymes convert tryptophan into diverse indole metabolites.'
            ),
            l(
              'These microbial indoles function as potent physiological agonists for the Aryl Hydrocarbon Receptor (AhR)—a ligand-activated basic helix-loop-helix transcription factor that serves as a master regulator of mucosal immunity and epithelial integrity [5]. In mucosal group 3 innate lymphoid cells (ILC3s), unliganded AhR is sequestered in the cytoplasm within a multiprotein complex containing Hsp90, XAP2, and p23 [5]. Ligand binding by microbial IAld triggers a conformational change that exposes a nuclear localization signal, driving AhR translocation into the nucleus [5]. Dissociating from its chaperones, nuclear AhR heterodimerizes with the AhR Nuclear Translocator (ARNT) and binds Xenobiotic Response Elements (XRE: 5\'-TNGCGTG-3\') in the promoter of the Il22 gene, driving robust transcription of Interleukin-22 (IL-22) [5].',
              'এই অণুজীবীয় ইনডোল যৌগগুলো অন্ত্রের অনাক্রম্য কোষসমূহের (ILC3) ভেতরে থাকা অ্যারিল হাইড্রোকার্বন রিসেপ্টর (AhR) নামক এক বিশেষ জিন-নিয়ামক রিসেপ্টরে আবদ্ধ হয় [৫]। ইনডোল যুক্ত হওয়ার সাথে সাথে AhR রিসেপ্টরটি Hsp90 প্রোটিন থেকে মুক্ত হয়ে কোষের নিউক্লিয়াসে প্রবেশ করে এবং ARNT প্রোটিনের সাথে জোড় বেঁধে জিনের ওপর বসে [৫]। এর ফলে অনাক্রম্য কোষগুলো বিপুল পরিমাণে ইন্টারলিউকিন-২২ (IL-22) নামক এক অত্যন্ত শক্তিশালী সুরক্ষাকারী সাইটোকাইন ক্ষরণ শুরু করে [৫]। Ligand-bound AhR/ARNT heterodimers drive ILC3-mediated IL-22 transcription.'
            ),
            l(
              'Secreted IL-22 acts on enterocytes, Paneth cells, and Lgr5+ crypt stem cells expressing the heterodimeric IL-22R1/IL-10R2 receptor complex [2, 5]. Ligation of IL-22R1 recruits Tyk2 and JAK1, phosphorylating STAT3 on Tyr705 [5]. Phosphorylated STAT3 homodimers translocate to the nucleus, binding gamma-interferon-activated sites (GAS) to execute a comprehensive epithelial defense program [5]. In Paneth cells, STAT3 induces transcription of antimicrobial C-type lectins (REG3gamma and REG3beta), which oligomerize into hexameric 2.5-nm pores that selectively lyse Gram-positive bacteria [2, 5]. In goblet cells, IL-22 stimulates MUC2 mucin synthesis and Fut2-dependent alpha-1,2-fucosylation of mucin glycans, establishing an impenetrable barrier [2]. In crypt base columnar stem cells, STAT3 induces proliferative cyclins and anti-apoptotic Bcl-2, accelerating mucosal re-epithelialization following inflammatory injury [2, 5].',
              'নিঃসৃত IL-22 সাইটোকাইন সরাসরি অন্ত্রের এপিথেলিয়াল ও প্যানেথ কোষের গায়ে থাকা IL-22R1 রিসেপ্টরে বসে কোষে STAT3 এনজাইমকে সক্রিয় করে [২, ৫]। সক্রিয় STAT3 নিউক্লিয়াসে প্রবেশ করে এক যুগান্তকারী প্রতিরক্ষামূলক জিন কর্মসূচি চালু করে দেয় [৫]। এটি প্যানেথ কোষ থেকে REG3gamma অণুজীবনাশক পেপটাইড ক্ষরণ করায় যা ক্ষতিকর ব্যাকটেরিয়া মেরে ফেলে, গবলেট কোষ থেকে MUC2 মিউসিন নিঃসরণ বাড়িয়ে দেয়ালকে পুরু করে এবং ক্রিপ্টের স্টেম কোষের বিভাজন বাড়িয়ে যেকোনো ঘা বা ক্ষত দ্রুত সারিয়ে তোলে [২, ৫]। STAT3 drives a coordinated transcriptional program of antimicrobial defense and mucosal repair.'
            ),
            l(
              'Concurrently, Indole-3-Propionic Acid (IPA) acts as a powerful circulating antioxidant and agonist of the nuclear receptor Pregnane X Receptor (PXR/NR1I2) on enterocytes [5]. PXR activation downregulates enterocyte Toll-like receptor 4 (TLR4) and TNF-alpha expression, while upregulating tight junction claudin-1 and occludin, directly sealing the paracellular leak pathway [1, 5]. In clinical metabolomics, serum IPA concentrations <1.5 micromol/L correlate strongly with mucosal inflammation in inflammatory bowel disease, metabolic endotoxemia, and accelerated cardiovascular disease [2, 5]. Precision nutritional therapy addresses this axis by providing dietary tryptophan, cruciferous vegetable indoles (yielding the AhR agonist indole-3-carbinol), and targeted probiotics (Lactobacillus reuteri DSM 17938) that reconstitute luminal AhR ligand pools and restore mucosal barrier resilience [2, 5].',
              'একই সাথে ইনডোল-৩-প্রোপিওনিক অ্যাসিড (IPA) রক্তে মিশে গিয়ে এক শক্তিশালী অ্যান্টিঅক্সিডেন্ট হিসেবে কাজ করে এবং PXR রিসেপ্টরের মাধ্যমে কোষের প্রদাহ দমন করে টাইট জাংশনের ক্লডিন-১ ও অক্লুডিন প্রোটিনকে সুদৃঢ় করে [৫]। খাদ্যে ট্রিপটোফ্যানের অভাব হলে বা অতিরিক্ত অ্যান্টিবায়োটিক ব্যবহারের ফলে যদি এই বন্ধু ব্যাকটেরিয়াগুলো মারা যায়, তবে রক্তে ইনডোলের মাত্রা কমে গিয়ে অন্ত্রের প্রাচীর ভেঙে পড়ে এবং রক্তে বিষাক্ত উপাদান ঢুকে পড়ে [২, ৫]। তাই বাদাম, ডাল এবং ব্রকলির মতো ক্রুসিফেরাস সবজি খাওয়ার মাধ্যমে অন্ত্রে ইনডোল বৃদ্ধি করা এবং ল্যাকটোব্যাসিলাস প্রোবায়োটিক গ্রহণ করা পরিপাক প্রাচীরকে আজীবন শক্তিশালী রাখার বিজ্ঞানসম্মত উপায় [২, ৫]। Serum IPA serves as an authoritative metabolomic readout of mucosal integrity.'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Takeaways & Practice Questions', '৬. মূল শিক্ষণীয় সারসংক্ষেপ ও অনুশীলন'),
          paragraphs: [
            l(
              'The human intestinal microbiome is an integrated metabolic organ containing ~3.8 x 10^13 bacterial cells (a 1:1 cellular stoichiometry with human somatic cells), dominated by Bacillota (Firmicutes) and Bacteroidota, with crucial functional contributions from Actinomycetota (Bifidobacterium) and Verrucomicrobiota (Akkermansia muciniphila) [1, 2]. The gut metagenome encodes over 3 million unique microbial genes, endowing the host with essential capacities for complex carbohydrate fermentation, secondary bile acid signaling, vitamin synthesis, and immunomodulation [1, 6].',
              'মানব অন্ত্রের অণুজীব সম্প্রদায় হলো একটি জীবন্ত বিপাকীয় অঙ্গ যাতে প্রায় ৩.৮ x ১০^১৩ টি ব্যাকটেরিয়া থাকে (মানব দেহকোষের সাথে প্রায় ১:১ অনুপাতে), যার শতকরা ৯০ ভাগের বেশি Bacillota ও Bacteroidota পর্বের অন্তর্ভুক্ত এবং যার মধ্যে Bifidobacterium ও Akkermansia muciniphila বাস করে [১, ২]। এই অণুজীব মেটাজেনোম ৩০ লক্ষাধিক অনন্য জিন বহন করে যা জটিল আঁশ পরিপাক, পিত্ত অম্ল রূপান্তর এবং ভিটামিন তৈরিতে অপরিহার্য ভূমিকা পালন করে [১, ৬]। The gut microbiome represents an essential metabolic partner in human biology.'
            ),
            l(
              'Molecular profiling relies on 16S rRNA gene amplicon sequencing (evaluating hypervariable regions V3–V4 for taxonomic identification) and whole-genome shotgun (WGS) metagenomics (untargeted sequencing of total DNA to achieve strain resolution and functional CAZyme/pathway annotation) [6]. Alpha diversity (Shannon H\', Chao1) quantifies within-individual richness and evenness, representing an established index of ecological resilience [6]. Beta diversity (Bray-Curtis, UniFrac) measures compositional dissimilarity between hosts, mapping ecological shifts driven by diet, geography, and disease [6].',
              'মেটাজেনোমিক বিশ্লেষণ পরিচালিত হয় ১৬এস আরআরএনএ সিকোয়েন্সিং (V3–V4 অঞ্চল দিয়ে ট্যাক্সোনমি নির্ণয়) এবং হোল-জিনোম শটগান মেটাজেনোমিক্স (সমস্ত ডিএনএ বিশ্লেষণ করে নির্দিষ্ট স্ট্রেন ও এনজাইমের গতিপথ শনাক্তকরণ) এর মাধ্যমে [৬]। আলফা বৈচিত্র্য (শানন সূচক) ব্যক্তির নিজস্ব অণুজীবের প্রাচুর্য ও সমতা পরিমাপ করে সুস্থতার মাত্রা জানায়, আর বিটা বৈচিত্র্য একাধিক ভিন্ন মানুষের মধ্যকার অণুজীবের পার্থক্যের চিত্র তুলে ধরে [৬]। Metagenomic diversity metrics provide quantitative readouts of microbial resilience.'
            ),
            l(
              'Microbial bile acid biotransformation is initiated by Bile Salt Hydrolase (BSH) deconjugation, followed by Clostridiales 7alpha-dehydroxylation generating the secondary bile acids DCA and LCA [3]. Unconjugated CDCA potently activates nuclear FXR to repress hepatic CYP7A1 and lipogenesis, while LCA activates membrane TGR5 on L-cells to drive GLP-1 secretion and brown adipose thermogenesis [3, 4]. In contrast, bacterial CutC/CutD choline lyases cleave dietary choline to yield Trimethylamine (TMA), oxidized by hepatic FMO3 into atherogenic TMAO, which upregulates macrophage CD36, impairs reverse cholesterol transport, and triggers platelet hyperreactivity [4].',
              'পিত্ত অম্লের রূপান্তর অণুজীব ও মানবদেহের এক অপূর্ব মেলবন্ধন: ব্যাকটেরিয়ার BSH এনজাইম পিত্ত অম্লকে ডিকনজুগেট করে এবং ৭-আলফা ডিহাইড্রোক্সিলেজ এনজাইম DCA ও LCA তৈরি করে [৩]। মুক্ত CDCA যকৃতের FXR সক্রিয় করে চর্বি কমায় এবং সেকেন্ডারি পিত্ত অম্ল TGR5 রিসেপ্টর সক্রিয় করে ইনসুলিন উদ্দীপক GLP-1 ক্ষরণ করায় [৩, ৪]। কিন্তু ব্যাকটেরিয়ার CutC এনজাইম খাদ্যের অতিরিক্ত কোলিন ভেঙে TMA গ্যাস তৈরি করে যা যকৃতে গিয়ে হৃদরোগ সৃষ্টিকারী TMAO-তে রূপান্তরিত হয় এবং রক্তনালী বন্ধ করে হার্ট অ্যাটাকের ঝুঁকি বাড়ায় [৪]। Microbial enzymology profoundly alters systemic cardiometabolic outcomes.'
            ),
            l(
              'Microbial tryptophan catabolism yields bioactive indoles (IPA, IAld) that bind the cytosolic transcription factor AhR in mucosal ILC3 cells, driving robust transcription of Interleukin-22 (IL-22) [5]. IL-22 activates epithelial STAT3 phosphorylation, inducing Paneth cell antimicrobial lectins (REG3gamma), stimulating goblet cell MUC2 synthesis, and promoting stem cell proliferation to reinforce the mucosal barrier [2, 5]. Precision nutritional therapy leverages soluble prebiotic fibers, cruciferous indoles, extra virgin olive oil (rich in DMB to inhibit CutC), and targeted probiotics to optimize this metabolic superorganism and prevent systemic inflammation [2, 4, 5, 6].',
              'ব্যাকটেরিয়ার ট্রিপটোফ্যান বিপাক থেকে তৈরি ইনডোল যৌগগুলো অনাক্রম্য কোষের AhR রিসেপ্টরে বসে ইন্টারলিউকিন-২২ (IL-22) ক্ষরণ করায় [৫]। এই IL-22 এপিথেলিয়ামের STAT3 এনজাইমকে সক্রিয় করে প্যানেথ কোষ থেকে REG3gamma পেপটাইড ক্ষরণ করায়, মিউসিন স্তরকে পুরু করে এবং স্টেম কোষের মাধ্যমে দেয়াল মেরামত করে [২, ৫]। আঁশযুক্ত খাবার, ক্রুসিফেরাস সবজি, অলিভ অয়েল (যার DMB যৌগ ক্ষতিকর TMAO তৈরি বন্ধ করে) এবং প্রোবায়োটিক গ্রহণের মাধ্যমে এই মহা-বাস্তুতন্ত্রকে সুসংহত রেখে হৃদরোগ ও অন্ত্রের যাবতীয় প্রদাহ নির্মূল করা সম্ভব [২, ৪, ৫, ৬]। Precision nutritional medicine harnesses microbial indoles and bile acids for health.'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Flowchart tracing gut microbiome taxonomic phyla, microbial bile acid transformation by BSH, choline cleavage by CutC/CutD into TMA and hepatic TMAO, and tryptophan catabolism into AhR-protective indoles.',
      'অন্ত্রের প্রধান ব্যাকটেরিয়াল পর্ব, BSH দ্বারা পিত্ত অম্লের রূপান্তর, CutC/CutD দ্বারা কোলিন ভেঙে TMA ও TMAO তৈরি এবং ট্রিপটোফ্যান থেকে AhR সুরক্ষাকারী ইনডোল তৈরির ধারাবাহিক ফ্লোচার্ট।'
    ),
    steps: [
      l(
        'Step 1: Over 3.8 x 10^13 bacterial cells dominated by Bacillota and Bacteroidota colonize the distal gastrointestinal lumen.',
        'ধাপ ১: প্রায় ৩.৮ x ১০^১৩ ব্যাকটেরিয়া যার শতকরা ৯০ ভাগের বেশি Bacillota ও Bacteroidota পর্বের অন্তর্ভুক্ত, অন্ত্রের লুমেনে বসবাস করে।'
      ),
      l(
        'Step 2: Microbial Bile Salt Hydrolase (BSH) deconjugates primary bile acids, and bacterial 7alpha-dehydroxylase generates DCA and LCA to modulate host FXR and TGR5 receptors.',
        'ধাপ ২: ব্যাকটেরিয়ার BSH এনজাইম পিত্ত অম্লকে ডিকনজুগেট করে এবং ৭-আলফা ডিহাইড্রোক্সিলেজ এনজাইম DCA ও LCA তৈরি করে FXR ও TGR5 রিসেপ্টর নিয়ন্ত্রণ করে।'
      ),
      l(
        'Step 3: Bacterial CutC/CutD choline lyases cleave dietary choline into Trimethylamine (TMA) gas, which travels via the portal vein to be oxidized into atherogenic TMAO by hepatic FMO3.',
        'ধাপ ৩: ব্যাকটেরিয়ার CutC/CutD এনজাইম খাদ্যের কোলিন ভেঙে TMA গ্যাস তৈরি করে, যা যকৃতের FMO3 দ্বারা হৃদরোগ সৃষ্টিকারী TMAO-তে রূপান্তরিত হয়।'
      ),
      l(
        'Step 4: Commensal tryptophan catabolites (IPA, IAld) bind cytosolic AhR in mucosal ILC3 cells, stimulating IL-22 secretion to upregulate REG3gamma and reinforce tight junctions.',
        'ধাপ ৪: ব্যাকটেরিয়ার ট্রিপটোফ্যান উপজাতগুলো AhR রিসেপ্টরে বসে ইন্টারলিউকিন-২২ (IL-22) ক্ষরণ করায়, যা REG3gamma পেপটাইড তৈরি করে অন্ত্রের প্রাচীরকে শক্তিশালী রাখে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 60-year-old patient with coronary artery disease and elevated serum TMAO (12.4 micromol/L) is placed on a dietary intervention. Which of the following describes the exact biochemical mechanism by which gut microbes contribute to elevated plasma TMAO?',
      'করোনারি হৃদরোগ ও উচ্চ সিরাম TMAO (১২.৪ মাইক্রোমোল/লিটার) থাকা ৬০ বছর বয়সী এক রোগীর পুষ্টি চিকিৎসা চলছে। নিচের কোনটি অন্ত্রের অণুজীব দ্বারা রক্তে TMAO তৈরি হওয়ার সঠিক জৈবরাসায়নিক প্রক্রিয়া ব্যাখ্যা করে?'
    ),
    options: [
      l(
        'Bacterial CutC/CutD glycyl radical lyases cleave dietary choline into gaseous TMA, which is oxidized into TMAO by hepatic FMO3.',
        'ব্যাকটেরিয়ার CutC/CutD গ্লাইসিল র্যাডিক্যাল এনজাইম খাদ্যের কোলিন ভেঙে TMA গ্যাস তৈরি করে, যা যকৃতের FMO3 দ্বারা TMAO-তে জারিত হয়।'
      ),
      l(
        'Bacterial Bile Salt Hydrolase (BSH) oxidizes chenodeoxycholic acid directly into circulating TMAO.',
        'ব্যাকটেরিয়ার বাইল সল্ট হাইড্রোলেজ (BSH) সরাসরি চেনোডিঅক্সিকোলিক অ্যাসিডকে জারিত করে TMAO-তে রূপান্তর করে।'
      ),
      l(
        'Paneth cell REG3gamma cleaves systemic phosphatidylcholine into circulating TMAO in the portal vein.',
        'প্যানেথ কোষের REG3gamma পোর্টাল শিরার ভেতর লেসিথিন ভেঙে সরাসরি TMAO তৈরি করে।'
      ),
      l(
        'Enterocyte TLR4 receptors directly synthesize TMAO upon stimulation by Gram-negative bacterial LPS.',
        'গ্রাম-নেগেটিভ ব্যাকটেরিয়ার LPS দ্বারা উদ্দীপিত হয়ে এন্টারোসাইটের TLR4 গ্রাহক সরাসরি TMAO তৈরি করে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Correct answer is Option 1. The microbial generation of pro-atherogenic Trimethylamine N-Oxide (TMAO) requires a two-step inter-kingdom metabolic pathway: (1) In the colonic lumen, commensal bacteria expressing the glycyl radical enzyme complex CutC/CutD cleave the carbon-nitrogen bond of dietary choline, releasing volatile Trimethylamine (TMA) gas; and (2) TMA is absorbed into the portal vein and oxidized by hepatic Flavin-containing Monooxygenase isoform 3 (FMO3) into Trimethylamine N-Oxide (TMAO).',
      'সঠিক উত্তর হলো অপশন ১। অণুজীব দ্বারা হৃদরোগ সৃষ্টিকারী TMAO তৈরির পথটি দুটি ধাপে ঘটে: (১) কোলনের লুমেনে ব্যাকটেরিয়ার CutC/CutD এনজাইম খাদ্যের কোলিন ভেঙে উদ্বায়ী TMA গ্যাস তৈরি করে; এবং (২) এই TMA গ্যাস রক্তে শোষিত হয়ে যকৃতে পৌঁছালে যকৃতের FMO3 এনজাইম একে জারিত করে ক্ষতিকর TMAO-তে রূপান্তরিত করে।'
    ),
  },
}
