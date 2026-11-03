import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics09References: LessonReference[] = [
  {
    id: 'ref-holliday-segar-1957',
    authors: 'Holliday MA, Segar WE',
    title: 'The Maintenance Need for Water in Parenteral Fluid Therapy',
    organization: 'Pediatrics',
    year: 1957,
    url: 'https://publications.aap.org/pediatrics/article-abstract/19/5/823/63447/The-Maintenance-Need-for-Water-in-Parenteral-Fluid',
    doi: '10.1542/peds.19.5.823',
  },
  {
    id: 'ref-sterns-hyponatremia-2015',
    authors: 'Sterns RH',
    title: 'Disorders of Plasma Sodium — Causes, Consequences, and Correction',
    organization: 'New England Journal of Medicine',
    year: 2015,
    url: 'https://www.nejm.org/doi/full/10.1056/NEJMra1404489',
    doi: '10.1056/NEJMra1404489',
  },
  {
    id: 'ref-gennari-osmolality-1984',
    authors: 'Gennari FJ',
    title: 'Serum Osmolality: Uses and Limitations',
    organization: 'New England Journal of Medicine',
    year: 1984,
    url: 'https://www.nejm.org/doi/full/10.1056/NEJM198401123100207',
    doi: '10.1056/NEJM198401123100207',
  },
  {
    id: 'ref-verbalis-hyponatremia-guidelines',
    authors: 'Verbalis JG, Goldsmith SR, Bustamante A, et al.',
    title: 'Diagnosis, Evaluation, and Treatment of Hyponatremia: Expert Panel Recommendations',
    organization: 'The American Journal of Medicine',
    year: 2013,
    url: 'https://www.amjmed.com/article/S0002-9343(13)00605-4/fulltext',
    doi: '10.1016/j.amjmed.2013.07.006',
  },
  {
    id: 'ref-hebert-fluid-kinetics',
    authors: 'Hebert PC, et al.',
    title: 'Fluid and Electrolyte Management in the Surgical and Critically Ill Patient',
    organization: 'Critical Care Clinics',
    year: 2018,
    url: 'https://www.criticalcare.theclinics.com/',
  },
]

export const dietetics09FluidElectrolytesLesson: LessonTopic = {
  id: 'topic.dietetics.fluid-electrolyte-prescriptions',
  slug: 'fluid-electrolyte-osmolar-prescriptions',
  title: l(
    '09 · Fluid & Electrolyte Architecture: Osmolar Clearance & Maintenance Formulations',
    '০৯ · তরল ও ইলেক্ট্রোলাইট প্রেসক্রিপশন: অসমোলার ক্লিয়ারেন্স ও রক্ষণাবেক্ষণ'
  ),
  summary: l(
    'Clinical science of fluid and electrolyte prescribing: calculating maintenance hydration via the Holliday-Segar 100/50/20 algorithm, accounting for sensible and pyrexic insensible losses, calculating serum osmolality and the osmolar gap, and engineering fluid restriction protocols for heart failure, cirrhosis, and oliguric renal failure.',
    'তরল ও ইলেক্ট্রোলাইট ব্যবস্থাপত্রের চিকিৎসাবিজ্ঞান: হলিডে-সেগার (১০০/৫০/২০) সূত্রের মাধ্যমে দৈনিক পানির হিসাব, দৃশ্যমান ও জ্বরজনিত অদৃশ্য তরল ক্ষতি নিরূপণ, রক্তের অসমোলারিটি ও অসমোলার গ্যাপ নির্ণয় এবং হার্ট ফেইলিউর, লিভার সিরোসিস ও কিডনি রোগে পানি নিয়ন্ত্রণের সঠিক কৌশল।'
  ),
  subject: 'dietetics',
  version: 1,
  updatedAt: '2026-11-03',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-03',
  prerequisiteIds: ['topic.dietetics.predictive-energy-equations'],
  relatedTopicIds: ['topic.dietetics.predictive-energy-equations', 'topic.metabolism.bioenergetics-atp-thermodynamics'],
  objectives: [
    l(
      'Calculate maintenance fluid requirements using the classic Holliday-Segar (100/50/20 rule) and weight-based methods.',
      'হলিডে-সেগার সমীকরণ (১০০/৫০/২০ নিয়ম) এবং ওজনের ভিত্তিতে দৈনিক স্বাভাবিক তরল ও পানির চাহিদা নির্ণয় করা।'
    ),
    l(
      'Adjust fluid prescriptions for fever and tachypnea by adding 10–12.5% fluid per degree Celsius elevation above 37°C.',
      'জ্বর ও দ্রুত শ্বাস-প্রশ্বাসের কারণে অদৃশ্য বাষ্পীভবন ক্ষতি পূরণে প্রতি ১ ডিগ্রি সেলসিয়াস তাপমাত্রার জন্য ১০-১২.৫% তরল বৃদ্ধি করা।'
    ),
    l(
      'Calculate Serum Osmolality and evaluate the Serum Osmolar Gap to identify exogenous osmolar toxins and severe hyperosmolar dehydration.',
      'রক্তের অসমোলারিটি ও অসমোলার গ্যাপ হিসাব করে তীব্র পানিশূন্যতা ও বিষাক্ত উপাদানের উপস্থিতি চিহ্নিত করা।'
    ),
    l(
      'Prescribe daily maintenance baseline electrolytes (Sodium 1–2 mEq/kg/day, Potassium 1 mEq/kg/day).',
      'প্রতিদিনের স্বাভাবিক ইলেক্ট্রোলাইট চাহিদা (সোডিয়াম ১-২ mEq/কেজি এবং পটাশিয়াম ১ mEq/কেজি) ব্যবস্থাপত্রে নির্ধারণ করা।'
    ),
    l(
      'Design strict fluid restriction regimens (1,000–1,500 mL/day) for dilutional hyponatremia, congestive heart failure, and oliguric end-stage kidney disease.',
      'ডাইলিউশনাল হাইপোনাট্রেমিয়া, হার্ট ফেইলিউর ও কিডনি ফেইলিউরের রোগীদের জন্য কঠোর তরল নিয়ন্ত্রণ (১০০০-১৫০০ মিলি/দিন) প্রোটোকল তৈরি করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A clinical balance scale comparing daily water intake and output compartments: Intake from oral fluids (1,500 mL), food moisture (700 mL), and metabolic oxidation water (300 mL) equals 2,500 mL; Output from urine (1,500 mL sensible), skin and respiratory insensible evaporation (800 mL), and stool (200 mL) balances at 2,500 mL; an adjustment dial highlights a +10% fluid increase per 1°C rise in body temperature.',
      'দৈনিক পানি গ্রহণ ও নির্গমনের ভারসাম্যের চিত্র: গৃহীত তরল (পানীয় ১৫০০ মিলি, খাবারের পানি ৭০০ মিলি, মেটাবলিক পানি ৩০০ মিলি) মোট ২৫০০ মিলি; নির্গত তরল (প্রস্রাব ১৫০০ মিলি, ত্বক ও ফুসফুসের বাষ্প ৮০০ মিলি, মল ২০০ মিলি) মোট ২৫০০ মিলি; একটি নির্দেশক তীর দেখায় যে প্রতি ১ ডিগ্রি সেলসিয়াস জ্বরে ১০% অতিরিক্ত তরল প্রয়োজন হয়।'
    ),
    steps: [
      l(
        'Step 1: Calculate Obligatory Losses. Sensible urinary volume ($>500\\text{ mL/day}$ required for solute clearance) plus insensible dermal/respiratory vaporization (~700–800 mL/day).',
        'ধাপ ১: অপরিহার্য তরল ক্ষতি: প্রস্রাবের প্রয়োজনীয় পরিমাণ (বর্জ্য বের করতে দিনে অন্তত ৫০০ মিলি) এবং ত্বক ও শ্বাস-প্রশ্বাসের অদৃশ্য বাষ্প (~৭০০-৮০০ মিলি)।'
      ),
      l(
        'Step 2: Apply Holliday-Segar Formula. Allocate $100\\text{ mL/kg}$ for first 10 kg, $50\\text{ mL/kg}$ for second 10 kg, and $20\\text{ mL/kg}$ for remaining weight.',
        'ধাপ ২: হলিডে-সেগার সূত্র প্রয়োগ: প্রথম ১০ কেজির জন্য প্রতি কেজিতে ১০০ মিলি, পরবর্তী ১০ কেজির জন্য ৫০ মিলি এবং বাকি ওজনের জন্য ২০ মিলি যোগ করুন।'
      ),
      l(
        'Step 3: Correct for Thermal Pyrexia. For every $1^\\circ\\text{C}$ elevation in core body temperature above $37^\\circ\\text{C}$, increase calculated maintenance fluid by $10\\text{--}12.5\\%$.',
        'ধাপ ৩: জ্বরের সমন্বয়: শরীরের তাপমাত্রা ৩৭ ডিগ্রি সেলসিয়াসের ওপরে প্রতি ১ ডিগ্রি বৃদ্ধির জন্য মোট তরলের ১০ থেকে ১২.৫% বাড়িয়ে দিন।'
      ),
      l(
        'Step 4: Check Osmolar Balance. Compute serum osmolality ($2\\text{Na} + \\text{Glucose}/18 + \\text{BUN}/2.8$); verify serum sodium trajectory to prevent central pontine myelinolysis.',
        'ধাপ ৪: অসমোলারিটি পরীক্ষা: রক্তের অসমোলারিটি হিসাব করে সোডিয়ামের ভারসাম্য ও নিরাপদ হাইড্রেশন নিশ্চিত করুন।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 70-year-old female with severe decompensated Congestive Heart Failure (NYHA Class IV, ejection fraction = 20%) and bilateral pulmonary edema is admitted with gross anasarca. Laboratory results: Serum Sodium = 124 mEq/L (dilutional hyponatremia), BUN = 38 mg/dL, Serum Creatinine = 1.4 mg/dL. Her 24-hour urine output is 800 mL on intravenous furosemide. Which of the following is the most scientifically sound medical nutrition therapy prescription for her fluids and sodium?',
      'তীব্র হার্ট ফেইলিউর ও ফুসফুসে পানি জমার সমস্যায় আক্রান্ত ৭০ বছর বয়সী এক নারী সারা শরীর ফোলা (এনাসার্কা) নিয়ে হাসপাতালে ভর্তি হন। ল্যাব রিপোর্ট: রক্তে সোডিয়াম = ১২৪ mEq/L (ডাইলিউশনাল হাইপোনাট্রেমিয়া), BUN = ৩৮ mg/dL, ক্রিয়েটিনিন = ১.৪ mg/dL। ডাইউরেটিক ওষুধে তার ২৪ ঘণ্টার প্রস্রাব ৮০০ মিলি। এই রোগীর তরল ও সোডিয়াম ব্যবস্থাপনায় সবচেয়ে বিজ্ঞানসম্মত পদক্ষেপ কোনটি?'
    ),
    options: [
      l(
        'Infuse 3% hypertonic saline at 100 mL/hr to rapidly push serum sodium above 135 mEq/L within 6 hours.',
        'রক্তের সোডিয়াম ৬ ঘণ্টার মধ্যে দ্রুত ১৩৫-এর ওপরে তুলতে ঘণ্টায় ১০০ মিলি হারে ৩% হাইপারটনিক স্যালাইন ইনজেকশন দেওয়া।'
      ),
      l(
        'Enforce a strict total fluid restriction of 1,000–1,200 mL/day from all sources (oral fluids, IV flushes, and medications) paired with a 2,000 mg/day (2 g) dietary sodium restriction.',
        'সব উৎস (মুখের পানি, স্যালাইন ও ওষুধ) মিলিয়ে দৈনিক তরল কঠোরভাবে ১০০০-১২০০ মিলিতে সীমাবদ্ধ করা এবং খাবারে দৈনিক সোডিয়াম সর্বোচ্চ ২০০০ মিলিগ্রাম (২ গ্রাম) এ সীমিত রাখা।'
      ),
      l(
        'Encourage the patient to drink at least 3,500 mL of pure distilled water per day to flush out accumulated urea and creatinine.',
        'জমে থাকা ইউরিয়া ও ক্রিয়েটিনিন ধুয়ে বের করতে রোগীকে দিনে অন্তত ৩৫০০ মিলি বিশুদ্ধ পানি পান করতে বলা।'
      ),
      l(
        'Discontinue all fluid and sodium monitoring because heart failure alters only cardiac stroke volume, not renal solute dynamics.',
        'পানি ও লবণের হিসাব বন্ধ করে দেওয়া কারণ হার্ট ফেইলিউরে তরলের কোনো ভূমিকা নেই।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'In decompensated congestive heart failure with hypervolemic dilutional hyponatremia (serum Na = 124 mEq/L), non-osmotic baroreceptor-mediated release of arginine vasopressin (ADH) prevents free water clearance, while aldosterone drives pathological sodium retention. The patient has an excess of total body sodium and a massive excess of total body water. Administering sodium or IV saline will worsen pulmonary edema and trigger acute respiratory arrest. The cornerstone of MNT is strict fluid restriction (1,000–1,200 mL/day) paired with a modest 2g sodium restriction to create a net negative water balance.',
      'তীব্র হার্ট ফেইলিউরে শরীর থেকে অতিরিক্ত পানি বের হতে না পেরে রক্তে সোডিয়াম পাতলা হয়ে কমে যায় (ডাইলিউশনাল হাইপোনাট্রেমিয়া, সোডিয়াম ১২৪ mEq/L)। রোগীর শরীরে লবণ ও পানি উভয়ই অতিরিক্ত জমে আছে। এ অবস্থায় স্যালাইন বা লবণ দিলে ফুসফুসে পানি বেড়ে রোগী শ্বাস বন্ধ হয়ে মারা যেতে পারেন। তাই চিকিৎসার মূল ভিত্তি হলো সব ধরনের তরল দিনে ১০০০-১২০০ মিলিতে কঠোরভাবে সীমাবদ্ধ করা এবং লবণ দিনে সর্বোচ্চ ২ গ্রামে সীমিত রাখা।'
    ),
  },
  evidenceBySection: {
    'sec-fluid-balance-intro': ['ref-holliday-segar-1957', 'ref-hebert-fluid-kinetics'],
    'sec-rule-of-thumb': ['ref-holliday-segar-1957', 'ref-hebert-fluid-kinetics'],
    'sec-fever-fluid': ['ref-hebert-fluid-kinetics', 'ref-holliday-segar-1957'],
    'sec-holliday-segar-math': ['ref-holliday-segar-1957', 'ref-hebert-fluid-kinetics'],
    'sec-pyrexia-insensible': ['ref-hebert-fluid-kinetics', 'ref-holliday-segar-1957'],
    'sec-serum-osmolality-gap': ['ref-gennari-osmolality-1984', 'ref-sterns-hyponatremia-2015'],
    'sec-fluid-restrictions-cardiorenal': ['ref-verbalis-hyponatremia-guidelines', 'ref-sterns-hyponatremia-2015'],
  },
  references: dietetics09References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-fluid-balance-intro',
          heading: l('1. Why Fluid Balance Is a Matter of Life and Death', '১. শরীরে পানির ভারসাম্য কেন জীবন-মরণের বিষয়?'),
          paragraphs: [
            l(
              'Water is the most abundant and vital molecule in the human body, accounting for 50% to 65% of an adult’s total body weight [1]. Every living cell is submerged in fluid, and every chemical reaction requires water. However, the human body cannot store extra water for future use; we constantly lose fluid through urine, bowel movements, breath, and sweat.',
              'পানি মানবদেহের সবচেয়ে গুরুত্বপূর্ণ উপাদান, যা একজন প্রাপ্তবয়স্ক মানুষের মোট ওজনের ৫০% থেকে ৬৫% গঠন করে [1]। আমাদের প্রতিটি জীবন্ত কোষ পানিতে নিমজ্জিত থাকে এবং শরীরের সব জৈব রাসায়নিক বিক্রিয়া পানিতেই ঘটে। কিন্তু মানবদেহ ভবিষ্যতের জন্য কোনো অতিরিক্ত পানি জমিয়ে রাখতে পারে না; আমরা প্রতিনিয়ত প্রস্রাব, মল, নিঃশ্বাস এবং ঘামের মাধ্যমে পানি হারাচ্ছি।'
            ),
            l(
              'If you take in too little fluid, dehydration causes your blood pressure to drop, your blood to become dangerously thick, and your kidneys to fail. Conversely, if a patient with weak heart or kidney function drinks too much fluid, the excess water floods their lungs, drowning them from the inside [2, 4]. Clinical dietitians must calculate hydration with mathematical precision.',
              'প্রয়োজনের চেয়ে কম পানি খেলে পানিশূন্যতা হয়ে রক্তচাপ কমে যায়, রক্ত মারাত্মক ঘন হয়ে যায় এবং কিডনি বিকল হতে পারে। পক্ষান্তরে, দুর্বল হার্ট বা কিডনির রোগী যদি অতিরিক্ত পানি পান করেন, তবে সেই পানি তাদের ফুসফুসে জমে অভ্যন্তরীণ শ্বাসকষ্ট ও মৃত্যুর ঝুঁকি তৈরি করে [2, 4]। তাই পুষ্টিবিদদের রোগীর পানির চাহিদা অত্যন্ত সতর্কতার সাথে হিসাব করতে হয়।'
            ),
          ],
        },
        {
          id: 'sec-rule-of-thumb',
          heading: l('2. The Holliday-Segar Rule for Daily Water Needs', '২. দৈনন্দিন পানির চাহিদায় হলিডে-সেগার নিয়ম'),
          paragraphs: [
            l(
              'To calculate how much water an adult needs each day, clinicians worldwide rely on the **Holliday-Segar 100/50/20 formula** [1]:',
              'একজন মানুষের প্রতিদিন কতটুকু তরল বা পানি প্রয়োজন তা হিসাব করতে চিকিৎসকরা বিশ্বখ্যাত **হলিডে-সেগার (১০০/৫০/২০) নিয়ম** ব্যবহার করেন [1]:'
            ),
            l(
              '• **First 10 kg of body weight:** $100\\text{ mL per kg} = 1,000\\text{ mL}$\n• **Next 10 kg (11 to 20 kg):** $+ 50\\text{ mL per kg} = + 500\\text{ mL}$\n• **Each kg above 20 kg:** $+ 20\\text{ mL per kg}$',
              '• **শরীরের প্রথম ১০ কেজি ওজন:** প্রতি কেজিতে ১০০ মিলি = ১০০০ মিলি\n• **পরবর্তী ১০ কেজি (১১ থেকে ২০ কেজি):** প্রতি কেজিতে ৫০ মিলি = ৫০০ মিলি\n• **২০ কেজির ওপরের প্রতি কেজি ওজন:** প্রতি কেজিতে ২০ মিলি'
            ),
            l(
              'For a 70 kg adult, the calculation is: $1,000\\text{ mL} + 500\\text{ mL} + (50 \\times 20\\text{ mL}) = 1,000 + 500 + 1,000 = 2,500\\text{ mL per day}$ (about 10 cups of total fluid from beverages and food moisture) [1].',
              'একটি ৭০ কেজি ওজনের মানুষের ক্ষেত্রে হিসাবটি হবে: ১০০০ মিলি + ৫০০ মিলি + (৫০ x ২০ মিলি) = ২৫০০ মিলি বা আড়াই লিটার প্রতিদিন (পানীয় ও খাবারের জলীয় অংশ মিলিয়ে) [1]।'
            ),
          ],
        },
        {
          id: 'sec-fever-fluid',
          heading: l('3. Fever Steals Water from Your Body', '৩. জ্বরের সময় শরীরের অতিরিক্ত পানি ক্ষয়'),
          paragraphs: [
            l(
              'When you have a fever, your body temperature rises and you breathe faster, silently evaporating large amounts of invisible water into the room [5]. For every **1°C increase in body temperature above 37°C**, you lose approximately **10% more fluid**. A patient with a high fever of 39°C needs at least 500 mL of extra fluid each day just to break even.',
              'জ্বর হলে শরীরের তাপমাত্রা বাড়ে এবং শ্বাস দ্রুত চলে, যার ফলে ফুসফুস ও ত্বক দিয়ে অদৃশ্যভাবে প্রচুর পানি বাতাসে বাষ্প হয়ে উড়ে যায় [5]। শরীরের তাপমাত্রা **৩৭ ডিগ্রি সেলসিয়াসের ওপরে প্রতি ১ ডিগ্রি বাড়লে** প্রায় **১০% অতিরিক্ত পানি নষ্ট হয়**। ৩৯ ডিগ্রি সেলসিয়াস তীব্র জ্বরের রোগীর ক্ষেত্রে প্রতিদিন অন্তত ৫০০ মিলি অতিরিক্ত তরল সরবরাহ করা বাধ্যতামূলক।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-holliday-segar-math',
          heading: l('1. The Holliday-Segar Fluid Formulation & Weight-Based Kinetics', '১. হলিডে-সেগার তরল সমীকরণ ও ওজনের ভিত্তিতে তরল নির্ধারণ'),
          paragraphs: [
            l(
              'Formulated by Malcolm Holliday and William Segar in 1957, the **100/50/20 algorithm** links fluid requirements directly to caloric energy expenditure [1]. Because cellular metabolism consumes approximately $1.0\\text{ mL of water per 1.0 kcal of energy expended}$, baseline fluid requirements closely track resting metabolic heat dissipation.',
              '১৯৫৭ সালে উদ্ভাবিত হলিডে-সেগারের **১০০/৫০/২০ সূত্রটি** তরলের চাহিদাকে সরাসরি শক্তি খরচের সাথে যুক্ত করে [1]। যেহেতু মানবদেহে প্রতি ১.০ কিলোক্যালোরি শক্তি খরচের জন্য প্রায় ১.০ মিলি পানি প্রয়োজন হয়, তাই স্বাভাবিক সুস্থ মানুষের পানির চাহিদা মেটাবলিক ক্যালোরির সমানুপাতিক।'
            ),
            l(
              'Alternatively, in adult clinical practice, validated weight-based shortcuts are routinely employed based on age-related renal concentrating capacity [1, 5]:',
              'বিকল্পভাবে ক্লিনিক্যাল প্র্যাকটিসে রোগীর বয়স ও কিডনির প্রস্রাব ঘন করার ক্ষমতার ভিত্তিতে দ্রুত ওজনের নিয়ম ব্যবহৃত হয় [1, 5]:'
            ),
            l(
              '$$\\begin{aligned} &\\textbf{Young Active Adults (18--55 yr):} \\quad 35\\text{ mL/kg body weight/day} \\\\ &\\textbf{Older Adults (55--65 yr):} \\quad 30\\text{ mL/kg body weight/day} \\\\ &\\textbf{Elderly Patients (>65 yr):} \\quad 25\\text{ mL/kg body weight/day (or 1.0 mL/kcal)} \\end{aligned}$$',
              '$$\\begin{aligned} &\\textbf{তরুণ কর্মক্ষম প্রাপ্তবয়স্ক (১৮--৫৫ বছর):} \\quad ৩৫\\text{ মিলি/কেজি ওজন/দিন} \\\\ &\\textbf{প্রবীণ প্রাপ্তবয়স্ক (৫৫--৬৫ বছর):} \\quad ৩০\\text{ মিলি/কেজি ওজন/দিন} \\\\ &\\textbf{বয়োজ্যেষ্ঠ রোগী (>৬৫ বছর):} \\quad ২৫\\text{ মিলি/কেজি ওজন/দিন (বা ১.০ মিলি/kcal)} \\end{aligned}$$'
            ),
          ],
        },
        {
          id: 'sec-pyrexia-insensible',
          heading: l('2. Sensible vs Insensible Fluid Flux & Pyrexic Titration', '২. দৃশ্যমান বনাম অদৃশ্য তরল ক্ষয় এবং জ্বরের হিসাব'),
          paragraphs: [
            l(
              'Total daily fluid output consists of two physiological compartments [5]:',
              'দৈনিক তরল নিঃসরণ দুটি শারীরবৃত্তীয় ভাগে বিভক্ত [5]:'
            ),
            l(
              '1. **Sensible Fluid Losses:** Measurable fluid loss via renal urination (minimum $0.5\\text{ mL/kg/hr}$ or $\\ge 500\\text{ mL/day}$ required for obligate solute clearance of urea and creatinine) and gastrointestinal stool ($100\\text{--}200\\text{ mL/day}$ in formed bowel movements).\n2. **Insensible Fluid Losses:** Evaporative water loss through the skin ($300\\text{--}400\\text{ mL/day}$ non-sweat transepidermal diffusion) and humidified respiratory exhalation ($300\\text{--}400\\text{ mL/day}$).',
              '১. **দৃশ্যমান তরল ক্ষয় (Sensible Loss):** যা পাত্রে মাপা যায়—যেমন প্রস্রাব (কিডনির বিষাক্ত বর্জ্য বের করতে প্রতি কেজিতে প্রতি ঘণ্টায় অন্তত ০.৫ মিলি বা দিনে $\\ge ৫০০\\text{ মিলি}$) এবং মলের পানি (১০০-২০০ মিলি)।\n২. **অদৃশ্য তরল ক্ষয় (Insensible Loss):** যা চোখে দেখা যায় না—যেমন ত্বক চুইয়ে বাষ্প হওয়া পানি (৩০০-৪০০ মিলি) এবং নিঃশ্বাসের সাথে ফুসফুস থেকে বের হওয়া জলীয় বাষ্প (৩০০-৪০০ মিলি)।'
            ),
            l(
              'For every $1.0^\\circ\\text{C}$ rise in core temperature above $37.0^\\circ\\text{C}$, insensible cutaneous and respiratory vaporization increases by $10\\%$ to $12.5\\%$ ($100\\text{--}150\\text{ mL/day}$) [1, 5]. In mechanical ventilation without active humidifier circuits, dry medical gases accelerate respiratory losses even further.',
              'শরীরের স্বাভাবিক তাপমাত্রা ৩৭ ডিগ্রির ওপরে প্রতি ১ ডিগ্রি সেলসিয়াস বৃদ্ধির জন্য অদৃশ্য বাষ্পীভবন ১০% থেকে ১২.৫% (দিনে প্রায় ১০০-১৫০ মিলি) বেড়ে যায় [1, 5]। ভেন্টিলেটরে কৃত্রিম আর্দ্রতা না থাকলে এই বাষ্পীভবন ক্ষতি আরও মারাত্মক আকার ধারণ করে।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-serum-osmolality-gap',
          heading: l('1. The Biophysics of Serum Osmolality and The Osmolar Gap', '১. রক্তের অসমোলারিটি ও অসমোলার গ্যাপের জৈবপদার্থবিজ্ঞান'),
          paragraphs: [
            l(
              'Serum osmolality quantifies the concentration of osmotically active solute particles per kilogram of serum water [3]. Under physiological homeostasis, hypothalamic osmoreceptors modulate arginine vasopressin (ADH) secretion to clamp serum osmolality within an extraordinarily narrow range: **275 to 295 mOsm/kg**.',
              'সেরাম অসমোলারিটি হলো রক্তের প্রতি কেজি পানিতে দ্রবীভূত সক্রিয় কণার মোট ঘনত্ব [3]। স্বাভাবিক অবস্থায় মস্তিষ্কের হাইপোথ্যালামাস ADH হরমোন নিয়ন্ত্রণের মাধ্যমে রক্তের অসমোলারিটিকে অত্যন্ত সংবেদনশীলভাবে **২৭৫ থেকে ২৯৫ mOsm/কেজি** সীমার মধ্যে বেঁধে রাখে।'
            ),
            l(
              'Calculated serum osmolality is derived from the standard tripartite clinical formula [3]:',
              'রক্তের প্রধান তিনটি উপাদানের ভিত্তিতে অসমোলারিটি নির্ণয় করা হয় [3]:'
            ),
            l(
              '$$\\text{Calculated Serum Osmolality (mOsm/kg)} = 2 \\times [\\text{Na}^+\\text{ (mEq/L)}] + \\frac{\\text{Serum Glucose (mg/dL)}}{18} + \\frac{\\text{BUN (mg/dL)}}{2.8}$$',
              '$$\\text{হিসাবকৃত অসমোলারিটি (mOsm/কেজি)} = ২ \\times [\\text{সোডিয়াম (mEq/L)}] + \\frac{\\text{গ্লুকোজ (mg/dL)}}{১৮} + \\frac{\\text{BUN (mg/dL)}}{২.৮}$$'
            ),
            l(
              'The multiplier $2$ accounts for the osmotic contribution of the accompanying anions (primarily $\\text{Cl}^-$ and $\\text{HCO}_3^-$). Dividing glucose by $18$ and BUN by $2.8$ converts mass units (mg/dL) into millimoles per liter (mmol/L) [3].',
              'সোডিয়ামকে ২ দিয়ে গুণ করা হয় কারণ তার সাথে ক্লোরাইড ও বাইকার্বনেট সমপরিমাণ থাকে। গ্লুকোজকে ১৮ এবং BUN-কে ২.৮ দিয়ে ভাগ করে মিলিগ্রামকে মিলিঅসমোলে রূপান্তর করা হয় [3]।'
            ),
            l(
              'The **Serum Osmolar Gap** is defined as: $\\text{Measured Osmolality (via osmometer)} - \\text{Calculated Osmolality}$. An elevated osmolar gap ($> 10\\text{ mOsm/kg}$) alerts the clinician to the presence of unmeasured low-molecular-weight exogenous toxins: ethanol, methanol, ethylene glycol, or toxic accumulation of propylene glycol from intravenous lorazepam infusions [3].',
              '**সেরাম অসমোলার গ্যাপ** হলো: ল্যাবের যন্ত্রে সরাসরি পরিমাপকৃত অসমোলারিটি বিয়োগ সূত্রের মাধ্যমে হিসাবকৃত অসমোলারিটি। এই গ্যাপের মান $> ১০\text{ mOsm/কেজি}$ হলে তা রক্তে বিষাক্ত অপদ্রব্যের (যেমন মিথানল, বিষাক্ত অ্যালকোহল বা ওষুধের রাসায়নিক) উপস্থিতি নিশ্চিত করে [3]।'
            ),
          ],
        },
        {
          id: 'sec-fluid-restrictions-cardiorenal',
          heading: l('2. Clinical Fluid Restriction Regimens: Cardiorenal and Hepatic Protocols', '২. তরল নিয়ন্ত্রণের ক্লিনিক্যাল প্রোটোকল: হার্ট, কিডনি ও লিভার সিরোসিস'),
          paragraphs: [
            l(
              'When end-organ failure impairs free water excretion, standard fluid formulations must be abandoned in favor of restrictive clinical protocols [2, 4]:',
              'যখন হার্ট, কিডনি বা লিভার বিকল হয়ে শরীর থেকে স্বাভাবিক পানি বের হতে পারে না, তখন সাধারণ পানির হিসাব বন্ধ করে কঠোর নিয়ন্ত্রণ জারি করতে হয় [2, 4]:'
            ),
            l(
              '1. **Decompensated Heart Failure & Dilutional Hyponatremia:** In hypervolemic hyponatremia ($\text{Na} < 130\text{ mEq/L}$), non-osmotic baroreceptors stimulate massive ADH release. Enforce a **fluid restriction of 1,000–1,500 mL/day** across all intake sources, paired with $< 2,000\text{ mg/day}$ sodium [2, 4].\n2. **Oliguric Acute Kidney Injury & Anuric Dialysis:** Total fluid is capped at: $\\text{Daily Urine Volume} + 500\\text{ mL}$ (insensible buffer). In anuric hemodialysis patients, fluid is restricted to $< 1,000\\text{ mL/day}$ to prevent interdialytic weight gains $> 2.0\\text{--}2.5\\text{ kg}$ which cause acute pulmonary edema.\n3. **Decompensated Cirrhosis with Ascites:** Fluid restriction ($1,000\\text{--}1,500\\text{ mL/day}$) is indicated **only** when profound dilutional hyponatremia occurs (serum $\\text{Na} < 125\\text{ mEq/L}$). Mild hyponatremia (126–135 mEq/L) is managed with sodium restriction ($2\\text{ g/day}$) and diuretics, without restricting water [4].',
              '১. **হার্ট ফেইলিউর ও ডাইলিউশনাল হাইপোনাট্রেমিয়া:** রক্তে সোডিয়াম পাতলা হয়ে $< ১৩০\text{ mEq/L}$ হলে সব পানীয় ও ওষুধ মিলিয়ে মোট তরল **দিনে ১০০০-১৫০০ মিলিতে সীমাবদ্ধ** করতে হবে এবং লবণ দিনে ২ গ্রামের নিচে রাখতে হবে [2, 4]।\n২. **কিডনি ফেইলিউর ও ডায়ালাইসিস:** মোট তরল হবে: $\\text{২৪ ঘণ্টার মোট প্রস্রাব} + ৫০০\text{ মিলি}$। প্রস্রাব সম্পূর্ণ বন্ধ থাকা রোগীদের দিনে ১ লিটারের কম পানি খেতে হয় যাতে দুই ডায়ালাইসিসের মাঝে ২ কেজির বেশি পানি জমে ফুসফুস বন্ধ না হয়ে যায়।\n৩. **লিভার সিরোসিস ও পেটে পানি (Ascites):** তরল নিয়ন্ত্রণ কেবল তখনই করা হয় যখন সোডিয়াম মারাত্মক কমে $< ১২৫\text{ mEq/L}$-এ নেমে আসে। সামান্য কম সোডিয়ামে পানি না কমিয়ে কেবল খাবারে লবণ নিয়ন্ত্রণ করা হয় [4]।'
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Holliday-Segar Formulation & Weight Kinetics', '১. হলিডে-সেগার সমীকরণ ও তরল নির্ধারণ'), sectionId: 'sec-holliday-segar-math' },
      { id: 'toc-2', label: l('2. Sensible vs Insensible Pyrexic Flux', '২. দৃশ্যমান ও অদৃশ্য ক্ষয় এবং জ্বরের হিসাব'), sectionId: 'sec-pyrexia-insensible' },
      { id: 'toc-3', label: l('3. Biophysics of Serum Osmolality & Osmolar Gap', '৩. রক্তের অসমোলারিটি ও অসমোলার গ্যাপ'), sectionId: 'sec-serum-osmolality-gap' },
      { id: 'toc-4', label: l('4. Cardiorenal & Hepatic Fluid Restrictions', '৪. হার্ট, কিডনি ও লিভারের তরল নিয়ন্ত্রণ'), sectionId: 'sec-fluid-restrictions-cardiorenal' },
    ],
    terms: [
      {
        term: l('Holliday-Segar Formula', 'হলিডে-সেগার সূত্র (Holliday-Segar)'),
        definition: l(
          'A standardized clinical fluid calculation: 100 mL/kg for the first 10 kg, 50 mL/kg for 11–20 kg, and 20 mL/kg for each kg thereafter.',
          'দৈনিক তরল নির্ধারণের প্রমিত নিয়ম: প্রথম ১০ কেজিতে ১০০ মিলি/কেজি, পরবর্তী ১০ কেজিতে ৫০ মিলি/কেজি এবং বাকি ওজনের জন্য ২০ মিলি/কেজি।'
        ),
      },
      {
        term: l('Serum Osmolality', 'রক্তের অসমোলারিটি (Serum Osmolality)'),
        definition: l(
          'The concentration of osmotic particles per kilogram of serum water: 2xNa + Glucose/18 + BUN/2.8 (normal range 275–295 mOsm/kg).',
          'রক্তের প্রতি কেজি পানিতে দ্রবীভূত সক্রিয় কণার ঘনত্ব: ২xসোডিয়াম + গ্লুকোজ/১৮ + BUN/২.৮ (স্বাভাবিক মান ২৭৫-২৯৫ mOsm/কেজি)।'
        ),
      },
      {
        term: l('Osmolar Gap', 'অসমোলার গ্যাপ (Osmolar Gap)'),
        definition: l(
          'The difference between measured serum osmolality and calculated osmolality; values > 10 mOsm/kg indicate unmeasured toxic alcohols.',
          'ল্যাবে পরিমাপকৃত অসমোলারিটি এবং সূত্রের হিসাবকৃত অসমোলারিটির পার্থক্য; মান ১০ এর বেশি হলে বিষাক্ত অ্যালকোহলের উপস্থিতি প্রমাণ করে।'
        ),
      },
      {
        term: l('Dilutional Hyponatremia', 'ডাইলিউশনাল হাইপোনাট্রেমিয়া'),
        definition: l(
          'Low serum sodium (Na < 135 mEq/L) caused by excessive water retention and expansion of intravascular volume in heart or liver failure.',
          'হার্ট বা লিভার বিকল হলে শরীরে অতিরিক্ত পানি জমে রক্ত পাতলা হয়ে যাওয়ার কারণে রক্তে সোডিয়ামের ঘনত্ব কমে যাওয়ার অবস্থা।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Comprehensive Maintenance Fluid and Osmolar Calculation in a Febrile Surgical Patient',
          'বাস্তব কেস স্টাডি: জ্বরে আক্রান্ত অস্ত্রোপচারের রোগীর তরল প্রেসক্রিপশন ও অসমোলারিটি নির্ণয়'
        ),
        steps: [
          l(
            'Step 1: Patient Profile. A 68-year-old female post-cholecystectomy is NPO. Weight = 62 kg, Height = 160 cm. Core body temperature is $38.8^\\circ\\text{C}$ ($1.8^\\circ\\text{C}$ above normal). Labs: $\\text{Na}^+ = 138\\text{ mEq/L}$, $\\text{K}^+ = 4.1\\text{ mEq/L}$, $\\text{Glucose} = 144\\text{ mg/dL}$, $\\text{BUN} = 14\\text{ mg/dL}$.',
            'ধাপ ১: রোগীর তথ্য: পিত্তথলি অস্ত্রোপচারের পর মুখে খাবার বন্ধ থাকা ৬৮ বছর বয়সী নারী (ওজন ৬২ কেজি, উচ্চতা ১৬০ সেমি)। তাপমাত্রা ৩৮.৮°C (স্বাভাবিকের চেয়ে ১.৮°C বেশি)। রক্ত পরীক্ষা: সোডিয়াম ১৩৮ mEq/L, পটাশিয়াম ৪.১ mEq/L, গ্লুকোজ ১৪৪ mg/dL, BUN ১৪ mg/dL।'
          ),
          l(
            'Step 2: Calculate Baseline Holliday-Segar Fluid. First 10 kg = $1,000\\text{ mL}$. Next 10 kg = $500\\text{ mL}$. Remaining 42 kg ($62 - 20$) at $20\\text{ mL/kg} = 42 \\times 20 = 840\\text{ mL}$. Baseline Maintenance = $1,000 + 500 + 840 = 2,340\\text{ mL/day}$.',
            'ধাপ ২: স্বাভাবিক হলিডে-সেগার তরল হিসাব: প্রথম ১০ কেজি = ১০০০ মিলি। পরবর্তী ১০ কেজি = ৫০০ মিলি। বাকি ৪২ কেজি x ২০ মিলি = ৮৪০ মিলি। বেসলাইন পানি = ১০০০ + ৫০০ + ৮৪০ = ২৩৪০ মিলি/দিন।'
          ),
          l(
            'Step 3: Adjust for Thermal Pyrexia. Temperature is $1.8^\\circ\\text{C}$ above $37^\\circ\\text{C}$. At 10% increase per $1^\\circ\\text{C}$: Total increase = $1.8 \\times 10\\% = 18\\%$. Thermal fluid adjustment = $2,340 \\times 0.18 = 421.2\\text{ mL}$. Adjusted Fluid Requirement = $2,340 + 421 = 2,761\\text{ mL/day} \\approx 115\\text{ mL/hr}$.',
            'ধাপ ৩: জ্বরের জন্য সমন্বয়: তাপমাত্রা ১.৮ ডিগ্রি বেশি। প্রতি ডিগ্রিতে ১০% বাড়ালে মোট বৃদ্ধি = ১.৮ x ১০% = ১৮%। অতিরিক্ত পানি = ২৩৪০ x ০.১৮ = ৪২১ মিলি। জ্বরে মোট কাঙ্ক্ষিত তরল = ২৩৪০ + ৪২১ = ২৭৬১ মিলি/দিন ($\\\\approx ১১৫\\text{ মিলি/ঘণ্টা}$)।'
          ),
          l(
            'Step 4: Calculate Daily Electrolyte Targets. Sodium ($1.5\\text{ mEq/kg}$) = $62 \\times 1.5 = 93\\text{ mEq/day}$. Potassium ($1.0\\text{ mEq/kg}$) = $62 \\times 1.0 = 62\\text{ mEq/day}$. Prescribe IV fluid: D5 0.45% NaCl + 20 mEq KCl/L running at 115 mL/hr.',
            'ধাপ ৪: ইলেক্ট্রোলাইটের চাহিদা: সোডিয়াম (১.৫ mEq/কেজি) = ৬২ x ১.৫ = ৯৩ mEq/দিন। পটাশিয়াম (১.০ mEq/কেজি) = ৬২ x ১.০ = ৬২ mEq/দিন। প্রেসক্রিপশন: D5 0.45% স্যালাইন সাথে ২০ mEq KCl প্রতি লিটারে ঘণ্টায় ১১৫ মিলি হারে চালানো।'
          ),
          l(
            'Step 5: Calculate Serum Osmolality. $\\text{Osmolality} = 2(138) + (144 / 18) + (14 / 2.8) = 276 + 8.0 + 5.0 = 289.0\\text{ mOsm/kg}$. Conclusion: Perfectly within the normal physiological window (275–295 mOsm/kg), confirming isotonic fluid homeostasis.',
            'ধাপ ৫: অসমোলারিটি হিসাব: $২(১৩৮) + (১৪৪ / ১৮) + (১৪ / ২.৮) = ২৭৬ + ৮.০ + ৫.০ = ২৮৯.০\\text{ mOsm/কেজি}$। সিদ্ধান্ত: রোগীর রক্তের অসমোলারিটি পুরোপুরি স্বাভাবিক সীমার (২৭৫-২৯৫) মধ্যে রয়েছে।'
          ),
        ],
        conclusion: l(
          'Integrating the Holliday-Segar equation with thermal fever corrections prevented acute hypovolemic dehydration, while calculating serum osmolality confirmed that electrolyte tonicity was completely safeguarded.',
          'হলিডে-সেগার সূত্রের সাথে জ্বরের অতিরিক্ত পানির সমন্বয় করায় রোগীর পানিশূন্যতা সফলভাবে প্রতিরোধ করা সম্ভব হয় এবং রক্তের অসমোলারিটি স্বাভাবিক মাত্রায় বজায় থাকে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why must clinicians avoid rapid intravenous administration of sodium in chronic severe hyponatremia?',
          'দীর্ঘমেয়াদী মারাত্মক কম সোডিয়াম থাকা রোগীর ক্ষেত্রে কেন কখনোই শিরাপথে দ্রুত সোডিয়াম বাড়ানো উচিত নয়?'
        ),
        answer: l(
          'Brain cells adapt to chronic hyponatremia by extruding intracellular organic osmolytes to prevent cerebral edema. If serum sodium is raised too rapidly (> 8–10 mEq/L in 24 hours), the abrupt extracellular hypertonicity draws water out of brain cells, collapsing the blood-brain barrier and causing Osmotic Demyelination Syndrome (Central Pontine Myelinolysis), resulting in permanent spastic quadriparesis, pseudobulbar palsy, or death.',
          'রক্তে সোডিয়াম দীর্ঘদিন কম থাকলে মস্তিষ্কের কোষগুলো নিজেদের থেকে পানি ও রাসায়নিক কণা বের করে ভারসাম্য বজায় রাখে। যদি স্যালাইন দিয়ে ২৪ ঘণ্টায় সোডিয়াম খুব দ্রুত (> ৮-১০ mEq/L) বাড়িয়ে দেওয়া হয়, তবে মস্তিষ্কের কোষ থেকে পানি হঠাৎ বাইরে বেরিয়ে এসে ব্রেইনের মায়েলিন স্তর ছিঁড়ে ধ্বংস হয়ে যায় (Central Pontine Myelinolysis)। এর ফলে রোগী প্যারালাইজড হয়ে যেতে পারে বা মৃত্যুবরণ করতে পারে।'
        ),
      },
      {
        question: l(
          'Why does a patient with decompensated liver cirrhosis develop dilutional hyponatremia even though their total body sodium is actually elevated?',
          'লিভার সিরোসিসের রোগীর শরীরে মোট লবণের পরিমাণ বেশি থাকা সত্ত্বেও রক্ত পরীক্ষায় কেন সোডিয়াম কম (Hyponatremia) দেখায়?'
        ),
        answer: l(
          'Cirrhosis causes massive splanchnic arterial vasodilation, which drops systemic arterial vascular resistance and reduces effective arterial blood volume (EABV). In response, the body falsely senses hypovolemia and triggers intense, non-osmotic release of ADH (vasopressin). ADH forces the renal collecting ducts to reabsorb vast volumes of pure water, diluting circulating sodium. The patient has an excess of sodium, but an even greater excess of retained water.',
          'লিভার সিরোসিস হলে পেটের রক্তনালীগুলো অতিরিক্ত প্রসারিত হয়ে রক্তচাপ কমিয়ে দেয়। এর ফলে মস্তিষ্ক মনে করে শরীরে রক্ত বা পানির তীব্র সংকট তৈরি হয়েছে এবং সে প্রচুর পরিমাণে ADH হরমোন নিঃসরণ করে। এই হরমোন কিডনি দিয়ে সব পানি আটকে শরীরে ধরে রাখে। ফলে শরীরে লবণ বেশি থাকলেও পানির পরিমাণ এত বেশি জমে যায় যে সোডিয়াম পাতলা হয়ে রক্ত পরীক্ষায় কম দেখা যায়।'
        ),
      },
    ],
  },
}

