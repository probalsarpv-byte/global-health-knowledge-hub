import type { AnatomyCurriculum, Localized } from './lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

export const anatomyCurriculum: AnatomyCurriculum = {
  id: 'subject.anatomy', version: 1, updatedAt: '2026-10-12',
  groups: [
    { id: 'anatomy.foundations', order: 1, title: l('Foundations', 'ভিত্তি'), description: l('Language, levels of organization and methods for studying form.', 'গঠন অধ্যয়নের ভাষা, সংগঠনের স্তর ও পদ্ধতি।') },
    { id: 'anatomy.musculoskeletal', order: 2, title: l('Musculoskeletal anatomy', 'পেশী-কঙ্কাল অ্যানাটমি'), description: l('Bones, joints, muscles and movement-oriented regional study.', 'হাড়, সন্ধি, পেশী ও চলনভিত্তিক আঞ্চলিক অধ্যয়ন।') },
    { id: 'anatomy.organ-systems', order: 3, title: l('Organ systems', 'অঙ্গতন্ত্র'), description: l('Gross organization of major visceral systems.', 'প্রধান ভিসেরাল তন্ত্রগুলোর স্থূল সংগঠন।') },
    { id: 'anatomy.neuroanatomy', order: 4, title: l('Neuroanatomy', 'নিউরোঅ্যানাটমি'), description: l('Central and peripheral nervous-system organization.', 'কেন্দ্রীয় ও প্রান্তীয় স্নায়ুতন্ত্রের সংগঠন।') },
    { id: 'anatomy.regional', order: 5, title: l('Regional anatomy', 'আঞ্চলিক অ্যানাটমি'), description: l('Layered relationships in clinically useful body regions.', 'চিকিৎসাবিজ্ঞানে উপযোগী শরীরের অঞ্চলে স্তরভিত্তিক সম্পর্ক।') },
    { id: 'anatomy.imaging-clinical', order: 6, title: l('Imaging and clinical anatomy', 'ইমেজিং ও ক্লিনিক্যাল অ্যানাটমি'), description: l('Orientation, cross-sections, variation and applied interpretation.', 'অরিয়েন্টেশন, ক্রস-সেকশন, ভিন্নতা ও প্রয়োগমূলক ব্যাখ্যা।') },
  ],
  chapters: [
    { id: 'anatomy.chapter.01', order: 1, groupId: 'anatomy.foundations', slug: 'introduction-human-anatomy', title: l('01 · Introduction to Human Anatomy', '০১ · মানব অ্যানাটমির পরিচয়'), summary: l('A detailed, bilingual orientation to anatomical language, organization, planes, cavities and relationships.', 'অ্যানাটমিক্যাল ভাষা, সংগঠন, প্লেন, গহ্বর ও সম্পর্কের বিস্তারিত দ্বিভাষিক পরিচয়।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: [], lessonId: 'topic.anatomy.introduction', estimatedMinutes: 75 },
    { id: 'anatomy.chapter.02', order: 2, groupId: 'anatomy.foundations', slug: 'cells-tissues', title: l('02 · Cells, tissues and membranes', '০২ · কোষ, টিস্যু ও ঝিল্লি'), summary: l('A comprehensive exploration of eukaryotic cell organization, four fundamental tissue classes, intercellular junctions, and biological membranes.', 'ইউক্যারিওটিক কোষের সংগঠন, চারটি মৌলিক টিস্যু শ্রেণি, আন্তঃকোষীয় সংযোগ এবং জৈবঝিল্লির বিস্তারিত অধ্যয়ন।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.01'], lessonId: 'topic.anatomy.cells-tissues', estimatedMinutes: 60 },
    { id: 'anatomy.chapter.03', order: 3, groupId: 'anatomy.foundations', slug: 'integumentary-system', title: l('03 · Integumentary system', '০৩ · আবরণী তন্ত্র'), summary: l('A detailed study of epidermal strata, melanogenesis, dermal microarchitecture, cutaneous appendages, and thermoregulation.', 'এপিডার্মিসের স্তরবিন্যাস, মেলানিন সংশ্লেষ, ডার্মিসের অণুগঠন, ত্বকের উপাঙ্গ এবং তাপনিয়ন্ত্রণের বিশদ পাঠ।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.02'], lessonId: 'topic.anatomy.integumentary-system', estimatedMinutes: 60 },
    { id: 'anatomy.chapter.04', order: 4, groupId: 'anatomy.musculoskeletal', slug: 'skeletal-axial', title: l('04 · Axial skeleton', '০৪ · অক্ষীয় কঙ্কাল'), summary: l('A comprehensive regional study of the 80 axial bones: neurocranium, facial viscerocranium, vertebral column, and thoracic cage.', 'অক্ষীয় কঙ্কালের ৮০টি অস্থির বিশদ অধ্যয়ন: মস্তিষ্ক আধার, মুখমণ্ডলের অস্থি, মেরুদণ্ড এবং বক্ষপিঞ্জরের গঠন ও বলবিদ্যা।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.01'], lessonId: 'topic.anatomy.skeletal-axial', estimatedMinutes: 70 },

    { id: 'anatomy.chapter.05', order: 5, groupId: 'anatomy.musculoskeletal', slug: 'skeletal-appendicular', title: l('05 · Appendicular skeleton', '০৫ · উপাঙ্গীয় কঙ্কাল'), summary: l('A comprehensive osteological and biomechanical study of the 126 appendicular bones: girdles, limbs, and fractures.', 'উপাঙ্গীয় কঙ্কালের ১২৬টি অস্থির বিশদ অধ্যয়ন: বন্ধনী, অঙ্গপ্রত্যঙ্গ এবং ফ্র্যাকচার মেকানিক্স।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.04'], lessonId: 'topic.anatomy.skeletal-appendicular', estimatedMinutes: 65 },
    { id: 'anatomy.chapter.06', order: 6, groupId: 'anatomy.musculoskeletal', slug: 'joints', title: l('06 · Joints and connective tissues', '০৬ · সন্ধি ও সংযোজক টিস্যু'), summary: l('Structural classifications, synovial microarchitecture, degrees of freedom, and clinical ligament arthropathies.', 'গঠনগত শ্রেণিবিভাগ, সাইনোভিয়াল অণুগঠন, চলনমাত্রা এবং লিগামেন্টের বাতব্যাধি।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.05'], lessonId: 'topic.anatomy.joints', estimatedMinutes: 60 },
    { id: 'anatomy.chapter.07', order: 7, groupId: 'anatomy.musculoskeletal', slug: 'muscles', title: l('07 · Skeletal muscle anatomy', '০৭ · কঙ্কালপেশীর অ্যানাটমি'), summary: l('Macro- and microscopic organization of skeletal muscle: fascial envelopes, sarcomeres, cross-bridge kinetics, and myopathies.', 'কঙ্কালপেশীর সংগঠন: ফাসিয়াল আবরণী, সারকোমিয়ার, ক্রস-ব্রিজ চক্র এবং মায়োপ্যাথি।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.06'], lessonId: 'topic.anatomy.muscles', estimatedMinutes: 65 },
    { id: 'anatomy.chapter.08', order: 8, groupId: 'anatomy.musculoskeletal', slug: 'upper-limb', title: l('08 · Upper limb', '০৮ · ঊর্ধ্ব অঙ্গ'), summary: l('Regional anatomy of the upper extremity: axilla, brachial plexus, arm and forearm compartments, carpal tunnel, and palsies.', 'ঊর্ধ্ব অঙ্গের আঞ্চলিক শারীরস্থান: বগল, ব্র্যাকিয়াল প্লেক্সাস, বাহুর কম্পার্টমেন্ট ও কার্পাল টানেল।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.07'], lessonId: 'topic.anatomy.upper-limb', estimatedMinutes: 70 },
    { id: 'anatomy.chapter.09', order: 9, groupId: 'anatomy.musculoskeletal', slug: 'lower-limb', title: l('09 · Lower limb', '০৯ · নিম্ন অঙ্গ'), summary: l('Regional anatomy of the lower extremity: gluteal region, sciatic nerve, femoral triangle, popliteal fossa, and arches of the foot.', 'নিম্ন অঙ্গের আঞ্চলিক শারীরস্থান: নিতম্ব, সায়াটিক স্নায়ু, ফিমোরাল ট্রায়াঙ্গল ও পদতলের আর্চ।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.07'], lessonId: 'topic.anatomy.lower-limb', estimatedMinutes: 70 },
    { id: 'anatomy.chapter.10', order: 10, groupId: 'anatomy.organ-systems', slug: 'cardiovascular', title: l('10 · Cardiovascular anatomy', '১০ · হৃদ্‌-রক্তনালীর অ্যানাটমি'), summary: l('Anatomy of the heart, pericardium, cardiac chambers, coronary circulation, intrinsic conduction, and great vessels.', 'হৃৎপিণ্ড, পেরিকার্ডিয়াম, প্রকোষ্ঠ, করোনারি রক্তসঞ্চালন, বিদ্যুৎ পরিবাহী ব্যবস্থা ও প্রধান রক্তনালী।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.01'], lessonId: 'topic.anatomy.cardiovascular', estimatedMinutes: 75 },
    { id: 'anatomy.chapter.11', order: 11, groupId: 'anatomy.organ-systems', slug: 'respiratory', title: l('11 · Respiratory anatomy', '১১ · শ্বাসতন্ত্রের অ্যানাটমি'), summary: l('Upper and lower respiratory tracts, tracheobronchial arborization, bronchopulmonary segments, alveolar-capillary barrier, and pleural mechanics.', 'উর্ধ্ব ও নিম্ন শ্বাসনালি, ব্রঙ্কোপালমোনারি সেগমেন্ট, অ্যালভিওলার ব্যাপন পর্দা এবং প্লুরার মেকানিক্স।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.10'], lessonId: 'topic.anatomy.respiratory', estimatedMinutes: 70 },
    { id: 'anatomy.chapter.12', order: 12, groupId: 'anatomy.organ-systems', slug: 'digestive', title: l('12 · Digestive anatomy', '১২ · পরিপাকতন্ত্রের অ্যানাটমি'), summary: l('Alimentary canal layers, stomach bed, intestinal specializations, Couinaud hepatic segmentation, biliary-pancreatic ducts, and portosystemic shunts.', 'পরিপাকনালির চার স্তর, ক্ষুদ্রান্ত্র ও বৃহদন্ত্র, যকৃতের কুইনো সেগমেন্টেশন, পিত্তনালি এবং পোর্টাল-সিস্টেমিক শান্ট।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.01'], lessonId: 'topic.anatomy.digestive', estimatedMinutes: 75 },
    { id: 'anatomy.chapter.13', order: 13, groupId: 'anatomy.organ-systems', slug: 'urinary', title: l('13 · Urinary anatomy', '১৩ · মূত্রতন্ত্রের অ্যানাটমি'), summary: l('Retroperitoneal renal topography, cortex and medullary pyramids, podocyte filtration barrier, JGA, ureteral constrictions, and bladder trigone.', 'কিডনির অবস্থান, কর্টেক্স ও মেডুলা, পোডোসাইট ছাঁকনি পর্দা, জাক্সটাগ্লোমেরুলার কমপ্লেক্স, ইউরেটারের খাঁজ ও মূত্রথলি।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.01'], lessonId: 'topic.anatomy.urinary', estimatedMinutes: 65 },
    { id: 'anatomy.chapter.14', order: 14, groupId: 'anatomy.organ-systems', slug: 'reproductive', title: l('14 · Reproductive anatomy', '১৪ · প্রজননতন্ত্রের অ্যানাটমি'), summary: l('Male and female reproductive systems: gonadal descent, spermatic cord, McNeal prostatic zones, uterine ligaments, and pelvic diaphragm.', 'পুরুষ ও স্ত্রী প্রজননতন্ত্র: গোনাড, স্পার্মাটিক কর্ড, প্রোস্টেটের জোন, জরায়ুর লিগামেন্ট এবং পেলভিক মেঝের পেশী।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.01'], lessonId: 'topic.anatomy.reproductive', estimatedMinutes: 70 },
    { id: 'anatomy.chapter.15', order: 15, groupId: 'anatomy.organ-systems', slug: 'endocrine-lymphatic', title: l('15 · Endocrine and lymphatic anatomy', '১৫ · অন্তঃস্রাবী ও লসিকাতন্ত্রের অ্যানাটমি'), summary: l('Hypothalamic-pituitary axis, thyroid-parathyroid topography, adrenal GFR zonation, splenic filtration pulp, lymph node microarchitecture, and thoracic duct.', 'পিটুইটারি অক্ষ, থাইরয়েড ও অ্যাড্রেনাল কর্টেক্স, প্লীহা ও লিম্ফ নোডের অণুগঠন এবং থোরাসিক ডাক্টের গতিপথ।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.01'], lessonId: 'topic.anatomy.endocrine-lymphatic', estimatedMinutes: 70 },
    { id: 'anatomy.chapter.16', order: 16, groupId: 'anatomy.neuroanatomy', slug: 'neural-tissue', title: l('16 · Neural tissue and peripheral nerves', '১৬ · স্নায়ু টিস্যু ও প্রান্তীয় স্নায়ু'), summary: l('Neuronal cytology, axoplasmic transport motors, CNS/PNS neuroglia, blood-brain barrier, peripheral nerve fascial sheaths, and Wallerian degeneration.', 'নিউরনের অঙ্গসংস্থান, অ্যাক্সন পরিবহন, নিউরোগ্লিয়া, রক্ত-মস্তিষ্ক প্রাচীর, স্নায়ুর ফাসিয়া এবং ওয়ালারিয়ান অবক্ষয়।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.02'], lessonId: 'topic.anatomy.neural-tissue', estimatedMinutes: 70 },
    { id: 'anatomy.chapter.17', order: 17, groupId: 'anatomy.neuroanatomy', slug: 'spinal-cord', title: l('17 · Spinal cord and meninges', '১৭ · মেরুরজ্জু ও মেনিনজেস'), summary: l('Conus medullaris, cauda equina, meningeal hierarchy, lumbar cistern, Rexed gray laminae, ascending/descending tracts, and cord syndromes.', 'কোনাস মেডুলারিস, কডা ইকুইনা, মেনিনজেসের তিন স্তর, লাম্বার সিস্টার্ন, রেক্সেড ল্যামিনা, স্নায়ুপথ ও কর্ড সিন্ড্রোম।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.16'], lessonId: 'topic.anatomy.spinal-cord', estimatedMinutes: 75 },
    { id: 'anatomy.chapter.18', order: 18, groupId: 'anatomy.neuroanatomy', slug: 'brain', title: l('18 · Brain and cranial nerves', '১৮ · মস্তিষ্ক ও করোটিক স্নায়ু'), summary: l('Cerebral lobes, Brodmann areas, basal ganglia motor loops, brainstem cranial nerve nuclei I–XII, ventricles, CSF flow, and the Circle of Willis.', 'সেরিব্রাল কর্টেক্স, ব্রডম্যান অঞ্চল, বেসাল গ্যাংলিয়া, ব্রেনস্টেমের ১২ জোড়া স্নায়ু, ভেন্ট্রিকল ও উইলির ধমনী বৃত্ত।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.17'], lessonId: 'topic.anatomy.brain', estimatedMinutes: 80 },
    { id: 'anatomy.chapter.19', order: 19, groupId: 'anatomy.neuroanatomy', slug: 'special-senses', title: l('19 · Special senses', '১৯ · বিশেষ ইন্দ্রিয়'), summary: l('Ocular tunics, refractive media, retinal phototransduction, auditory ossicles, cochlear tonotopy, vestibular balance, olfaction, and gustation.', 'চোখের স্তর ও প্রতিসরণ, রেটিনা, মধ্যকর্ণের অস্থি, ককলিয়ার ফ্রিকোয়েন্সি বিভাজন, ভারসাম্য এবং ঘ্রাণ ও স্বাদ।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.18'], lessonId: 'topic.anatomy.special-senses', estimatedMinutes: 75 },
    { id: 'anatomy.chapter.20', order: 20, groupId: 'anatomy.regional', slug: 'head-neck', title: l('20 · Head and neck', '২০ · মাথা ও ঘাড়'), summary: l('Layered regional anatomy of the head and neck: cervical fascial compartments, triangles of the neck, retropharyngeal danger space, laryngeal framework, and neurovascular conduits.', 'মাথা ও ঘাড়ের স্তরভিত্তিক আঞ্চলিক শারীরস্থান: সার্ভাইকাল ফাসিয়ার স্তরসমূহ, ঘাড়ের প্রধান ত্রিভুজ, রেট্রোফ্যারিঞ্জিয়াল ডেঞ্জার স্পেস, স্বরযন্ত্র ও স্নায়ু-রক্তনালী পথ।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.18'], lessonId: 'topic.anatomy.head-neck', estimatedMinutes: 80 },
    { id: 'anatomy.chapter.21', order: 21, groupId: 'anatomy.regional', slug: 'thorax', title: l('21 · Thorax', '২১ · বক্ষ'), summary: l('Comprehensive regional study of the thoracic cage, intercostal neurovascular bundle, respiratory pump mechanics, pleural spaces, and four-part mediastinum.', 'বক্ষপিঞ্জরের আঞ্চলিক শারীরস্থান: ইন্টারকোস্টাল স্নায়ু ও রক্তনালী, শ্বাসক্রিয়ার বলবিদ্যা, প্লুরার গহ্বর এবং মিডিয়াস্টাইনামের চার স্তর।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.10'], lessonId: 'topic.anatomy.thorax', estimatedMinutes: 75 },
    { id: 'anatomy.chapter.22', order: 22, groupId: 'anatomy.regional', slug: 'abdomen', title: l('22 · Abdomen', '২২ · উদর'), summary: l('Regional study of the anterior abdominal wall, rectus sheath transitions, inguinal canal and hernias, peritoneal spaces, and retroperitoneal organ relationships.', 'উদরপ্রাচীরের আঞ্চলিক শারীরস্থান: রেকটাস খাপের স্তরবিন্যাস, ইনগুইনাল ক্যানাল ও হার্নিয়া, পেরিটোনিয়াল গহ্বর এবং রেট্রোপেরিটোনিয়ামের বিন্যাস।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.12'], lessonId: 'topic.anatomy.abdomen', estimatedMinutes: 80 },
    { id: 'anatomy.chapter.23', order: 23, groupId: 'anatomy.regional', slug: 'pelvis-perineum', title: l('23 · Pelvis and perineum', '২৩ · পেলভিস ও পেরিনিয়াম'), summary: l('Regional study of true/false pelvis, levator ani and pelvic diaphragm, urogenital and anal triangles, perineal pouches, and pudendal neurovasculature.', 'পেলভিস ও পেরিনিয়ামের শারীরস্থান: লিভেটর অ্যানাই ও পেলভিক ডায়াফ্রাম, ইউরোজেনিটাল ও অ্যানাল ত্রিভুজ, পেরিনিয়াল পাউচ এবং পুডেন্ডাল ক্যানাল।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.14'], lessonId: 'topic.anatomy.pelvis-perineum', estimatedMinutes: 75 },
    { id: 'anatomy.chapter.24', order: 24, groupId: 'anatomy.imaging-clinical', slug: 'imaging-orientation', title: l('24 · Imaging and sectional orientation', '২৪ · ইমেজিং ও সেকশনাল ওরিয়েন্টেশন'), summary: l('Diagnostic imaging principles and sectional orientation: radiographic density, CT Hounsfield units and windowing, MRI pulse sequences, ultrasound acoustics, and axial viewing conventions.', 'ডায়াগনস্টিক ইমেজিং ও সেকশনাল ওরিয়েন্টেশন: রেডিওগ্রাফিক ঘনত্ব, সিটি হাউন্সফিল্ড স্কেল ও উইন্ডোয়িং, এমআরআই সিকোয়েন্স, আল্ট্রাসাউন্ড এবং অক্ষীয় সেকশনাল দেখার আন্তর্জাতিক নিয়ম।'), status: 'available', completionStatus: 'not-started', prerequisiteIds: ['anatomy.chapter.01'], lessonId: 'topic.anatomy.imaging-orientation', estimatedMinutes: 75 },
    {
      id: 'anatomy.chapter.25',
      order: 25,
      groupId: 'anatomy.imaging-clinical',
      slug: 'cross-sectional-anatomy',
      title: l('25 · Cross-sectional anatomy', '২৫ · ক্রস-সেকশনাল শারীরস্থান'),
      summary: l(
        'A multi-regional study of human cross-sectional anatomy across standard axial, sagittal, and coronal planes: the T4/T5 thoracic plane, L1 transpyloric plane, L4 aortic bifurcation, and neuroaxial cistern topologies.',
        'অক্ষীয়, স্যাজিটাল ও করোনার তলে মানবদেহের ক্রস-সেকশনাল শারীরস্থানের বিশদ বিশ্লেষণ: T4/T5 থোরাসিক সমতল, L1 ট্রান্সপাইলোরিক সমতল, L4 কশেরুকায় মহাধমনীর বিভাজন এবং নিউরোঅ্যাক্সিয়াল সেকশনাল রূপরেখা।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['anatomy.chapter.24'],
      lessonId: 'topic.anatomy.cross-sectional-anatomy',
      estimatedMinutes: 80,
    },
    {
      id: 'anatomy.chapter.26',
      order: 26,
      groupId: 'anatomy.imaging-clinical',
      slug: 'surface-anatomy',
      title: l('26 · Surface anatomy and landmarks', '২৬ · সারফেস অ্যানাটমি ও ল্যান্ডমার্ক'),
      summary: l(
        'A comprehensive study of human surface anatomy and palpable landmarks: pulse points, the thoracic triangle of safety, McBurney’s point, peripheral pulses, and Tuffier’s line for lumbar puncture.',
        'মানবদেহের বাহ্যিক শারীরস্থান ও স্পর্শনীয় ল্যান্ডমার্কের বিশদ বিশ্লেষণ: পালস পয়েন্ট, বুকের নিরাপদ ত্রিভুজ, ম্যাকবার্নি পয়েন্ট, প্রান্তীয় ধমনীর স্পন্দন এবং লাম্বার পাংচারের টাফিয়ার্স রেখা।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['anatomy.chapter.01'],
      lessonId: 'topic.anatomy.surface-anatomy',
      estimatedMinutes: 75,
    },
    {
      id: 'anatomy.chapter.27',
      order: 27,
      groupId: 'anatomy.imaging-clinical',
      slug: 'anatomical-variation',
      title: l('27 · Anatomical variation and safety', '২৭ · অ্যানাটমিক্যাল ভিন্নতা ও নিরাপত্তা'),
      summary: l(
        'An exploration of normal human anatomical variations and surgical patient safety: replaced hepatic arteries, incomplete circle of Willis, non-recurrent laryngeal nerve, and WHO surgical safety frameworks.',
        'স্বাভাবিক মানব শারীরস্থানিক ভিন্নতা ও অস্ত্রোপচারকালীন নিরাপত্তা: প্রতিস্থাপিত হেপাটিক ধমনী, অপূর্ণ উইলির বৃত্ত, নন-রিকারেন্ট ল্যারিঞ্জিয়াল নার্ভ এবং অস্ত্রোপচার নিরাপত্তা প্রটোকল।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['anatomy.chapter.01'],
      lessonId: 'topic.anatomy.anatomical-variation',
      estimatedMinutes: 75,
    },
    {
      id: 'anatomy.chapter.28',
      order: 28,
      groupId: 'anatomy.imaging-clinical',
      slug: 'clinical-integration',
      title: l('28 · Clinical anatomy integration', '২৮ · ক্লিনিক্যাল অ্যানাটমি সমন্বয়'),
      summary: l(
        'Capstone synthesis uniting regional anatomy, cross-sectional radiology, and operative emergency medicine: mesenteric ischemia watershed boundaries, trauma deceleration, intracranial herniations, compartment syndromes, and surgical corridors.',
        'মানব শারীরস্থানের শীর্ষ সমন্বিত পাঠ: মেসেন্টেরিক ইস্কেমিয়া ওয়াটারশেড অঞ্চল, ট্রমা আঘাতের বলবিদ্যা, ব্রেন হার্নিয়েশন সিন্ড্রোম, কম্পার্টমেন্ট সিন্ড্রোম এবং প্রধান অস্ত্রোপচারিক করিডোর।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['anatomy.chapter.25', 'anatomy.chapter.27'],
      lessonId: 'topic.anatomy.clinical-integration',
      estimatedMinutes: 85,
    },
  ],
}
