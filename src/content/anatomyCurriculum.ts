import type { AnatomyCurriculum, AnatomyCurriculumChapter, Localized } from './lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const planned = (id: string, order: number, groupId: string, slug: string, en: string, bn: string, summaryEn: string, summaryBn: string, prerequisites: string[] = []): AnatomyCurriculumChapter => ({
  id, order, groupId, slug, title: l(en, bn), summary: l(summaryEn, summaryBn), status: 'planned', completionStatus: 'not-started', prerequisiteIds: prerequisites, estimatedMinutes: 45,
})

export const anatomyCurriculum: AnatomyCurriculum = {
  id: 'subject.anatomy', version: 1, updatedAt: '2026-10-10',
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
    planned('anatomy.chapter.02', 2, 'anatomy.foundations', 'cells-tissues', '02 · Cells, tissues and membranes', '০২ · কোষ, টিস্যু ও ঝিল্লি', 'Planned foundation for tissue organization.', 'টিস্যু সংগঠনের পরিকল্পিত ভিত্তি।', ['anatomy.chapter.01']),
    planned('anatomy.chapter.03', 3, 'anatomy.foundations', 'integumentary-system', '03 · Integumentary system', '০৩ · আবরণী তন্ত্র', 'Planned survey of skin and associated structures.', 'ত্বক ও সংশ্লিষ্ট গঠনের পরিকল্পিত পাঠ।', ['anatomy.chapter.02']),
    planned('anatomy.chapter.04', 4, 'anatomy.musculoskeletal', 'skeletal-axial', '04 · Axial skeleton', '০৪ · অক্ষীয় কঙ্কাল', 'Planned study of skull, vertebral column and thorax.', 'খুলি, মেরুদণ্ড ও বক্ষপিঞ্জরের পরিকল্পিত অধ্যয়ন।', ['anatomy.chapter.01']),
    planned('anatomy.chapter.05', 5, 'anatomy.musculoskeletal', 'skeletal-appendicular', '05 · Appendicular skeleton', '০৫ · উপাঙ্গীয় কঙ্কাল', 'Planned study of girdles and limbs.', 'গার্ডল ও অঙ্গপ্রত্যঙ্গের পরিকল্পিত অধ্যয়ন।', ['anatomy.chapter.04']),
    planned('anatomy.chapter.06', 6, 'anatomy.musculoskeletal', 'joints', '06 · Joints and connective tissues', '০৬ · সন্ধি ও সংযোজক টিস্যু', 'Planned structural basis of joint movement.', 'সন্ধির চলনের গঠনগত ভিত্তির পরিকল্পিত পাঠ।', ['anatomy.chapter.05']),
    planned('anatomy.chapter.07', 7, 'anatomy.musculoskeletal', 'muscles', '07 · Skeletal muscle anatomy', '০৭ · কঙ্কালপেশীর অ্যানাটমি', 'Planned muscle architecture and attachments.', 'পেশীর স্থাপত্য ও সংযুক্তির পরিকল্পিত পাঠ।', ['anatomy.chapter.06']),
    planned('anatomy.chapter.08', 8, 'anatomy.musculoskeletal', 'upper-limb', '08 · Upper limb', '০৮ · ঊর্ধ্ব অঙ্গ', 'Planned regional musculoskeletal anatomy.', 'পরিকল্পিত আঞ্চলিক পেশী-কঙ্কাল অ্যানাটমি।', ['anatomy.chapter.07']),
    planned('anatomy.chapter.09', 9, 'anatomy.musculoskeletal', 'lower-limb', '09 · Lower limb', '০৯ · নিম্ন অঙ্গ', 'Planned regional musculoskeletal anatomy.', 'পরিকল্পিত আঞ্চলিক পেশী-কঙ্কাল অ্যানাটমি।', ['anatomy.chapter.07']),
    planned('anatomy.chapter.10', 10, 'anatomy.organ-systems', 'cardiovascular', '10 · Cardiovascular anatomy', '১০ · হৃদ্‌-রক্তনালীর অ্যানাটমি', 'Planned heart and vessel organization.', 'হৃদ্‌পিণ্ড ও রক্তনালীর পরিকল্পিত সংগঠন।', ['anatomy.chapter.01']),
    planned('anatomy.chapter.11', 11, 'anatomy.organ-systems', 'respiratory', '11 · Respiratory anatomy', '১১ · শ্বাসতন্ত্রের অ্যানাটমি', 'Planned airways, lungs and pleura.', 'বায়ুপথ, ফুসফুস ও প্লুরার পরিকল্পিত পাঠ।', ['anatomy.chapter.10']),
    planned('anatomy.chapter.12', 12, 'anatomy.organ-systems', 'digestive', '12 · Digestive anatomy', '১২ · পরিপাকতন্ত্রের অ্যানাটমি', 'Planned alimentary tract and accessory organs.', 'পরিপাকনালি ও সহায়ক অঙ্গের পরিকল্পিত পাঠ।', ['anatomy.chapter.01']),
    planned('anatomy.chapter.13', 13, 'anatomy.organ-systems', 'urinary', '13 · Urinary anatomy', '১৩ · মূত্রতন্ত্রের অ্যানাটমি', 'Planned kidneys and urinary passages.', 'কিডনি ও মূত্রপথের পরিকল্পিত পাঠ।', ['anatomy.chapter.01']),
    planned('anatomy.chapter.14', 14, 'anatomy.organ-systems', 'reproductive', '14 · Reproductive anatomy', '১৪ · প্রজননতন্ত্রের অ্যানাটমি', 'Planned reproductive-system organization and variation-aware terminology.', 'প্রজননতন্ত্রের সংগঠন ও ভিন্নতাসচেতন পরিভাষার পরিকল্পিত পাঠ।', ['anatomy.chapter.01']),
    planned('anatomy.chapter.15', 15, 'anatomy.organ-systems', 'endocrine-lymphatic', '15 · Endocrine and lymphatic anatomy', '১৫ · অন্তঃস্রাবী ও লসিকাতন্ত্রের অ্যানাটমি', 'Planned gland and lymphatic organization.', 'গ্রন্থি ও লসিকাতন্ত্রের পরিকল্পিত সংগঠন।', ['anatomy.chapter.01']),
    planned('anatomy.chapter.16', 16, 'anatomy.neuroanatomy', 'neural-tissue', '16 · Neural tissue and peripheral nerves', '১৬ · স্নায়ু টিস্যু ও প্রান্তীয় স্নায়ু', 'Planned neural organization and peripheral pathways.', 'স্নায়বিক সংগঠন ও প্রান্তীয় পথের পরিকল্পিত পাঠ।', ['anatomy.chapter.02']),
    planned('anatomy.chapter.17', 17, 'anatomy.neuroanatomy', 'spinal-cord', '17 · Spinal cord and meninges', '১৭ · মেরুরজ্জু ও মেনিনজেস', 'Planned cord organization and protective coverings.', 'মেরুরজ্জুর সংগঠন ও আবরণের পরিকল্পিত পাঠ।', ['anatomy.chapter.16']),
    planned('anatomy.chapter.18', 18, 'anatomy.neuroanatomy', 'brain', '18 · Brain and cranial nerves', '১৮ · মস্তিষ্ক ও করোটিক স্নায়ু', 'Planned neuroanatomical orientation.', 'নিউরোঅ্যানাটমিক্যাল অরিয়েন্টেশনের পরিকল্পিত পাঠ।', ['anatomy.chapter.17']),
    planned('anatomy.chapter.19', 19, 'anatomy.neuroanatomy', 'special-senses', '19 · Special senses', '১৯ · বিশেষ ইন্দ্রিয়', 'Planned anatomy of visual, auditory and vestibular systems.', 'দৃষ্টি, শ্রবণ ও ভেস্টিবুলার তন্ত্রের পরিকল্পিত অ্যানাটমি।', ['anatomy.chapter.18']),
    planned('anatomy.chapter.20', 20, 'anatomy.regional', 'head-neck', '20 · Head and neck', '২০ · মাথা ও ঘাড়', 'Planned layered regional anatomy.', 'স্তরভিত্তিক আঞ্চলিক অ্যানাটমির পরিকল্পিত পাঠ।', ['anatomy.chapter.18']),
    planned('anatomy.chapter.21', 21, 'anatomy.regional', 'thorax', '21 · Thorax', '২১ · বক্ষ', 'Planned thoracic wall, mediastinum and organ relationships.', 'বক্ষপ্রাচীর, মিডিয়াস্টাইনাম ও অঙ্গসম্পর্কের পরিকল্পিত পাঠ।', ['anatomy.chapter.10']),
    planned('anatomy.chapter.22', 22, 'anatomy.regional', 'abdomen', '22 · Abdomen', '২২ · উদর', 'Planned peritoneal and visceral relationships.', 'পেরিটোনিয়াল ও ভিসেরাল সম্পর্কের পরিকল্পিত পাঠ।', ['anatomy.chapter.12']),
    planned('anatomy.chapter.23', 23, 'anatomy.regional', 'pelvis-perineum', '23 · Pelvis and perineum', '২৩ · পেলভিস ও পেরিনিয়াম', 'Planned pelvic spaces and structures.', 'পেলভিক স্থান ও গঠনের পরিকল্পিত পাঠ।', ['anatomy.chapter.14']),
    planned('anatomy.chapter.24', 24, 'anatomy.imaging-clinical', 'imaging-orientation', '24 · Imaging orientation', '২৪ · ইমেজিং অরিয়েন্টেশন', 'Planned radiographic, CT, MRI and ultrasound orientation.', 'রেডিওগ্রাফি, CT, MRI ও আল্ট্রাসাউন্ড অরিয়েন্টেশনের পরিকল্পিত পাঠ।', ['anatomy.chapter.01']),
    planned('anatomy.chapter.25', 25, 'anatomy.imaging-clinical', 'cross-sectional-anatomy', '25 · Cross-sectional anatomy', '২৫ · ক্রস-সেকশনাল অ্যানাটমি', 'Planned axial, coronal and sagittal interpretation.', 'অক্ষীয়, করোনাল ও স্যাজিটাল ব্যাখ্যার পরিকল্পিত পাঠ।', ['anatomy.chapter.24']),
    planned('anatomy.chapter.26', 26, 'anatomy.imaging-clinical', 'surface-anatomy', '26 · Surface anatomy and landmarks', '২৬ · সারফেস অ্যানাটমি ও ল্যান্ডমার্ক', 'Planned palpation-aware landmark study.', 'স্পর্শনির্ভর ল্যান্ডমার্ক অধ্যয়নের পরিকল্পিত পাঠ।', ['anatomy.chapter.01']),
    planned('anatomy.chapter.27', 27, 'anatomy.imaging-clinical', 'anatomical-variation', '27 · Anatomical variation and safety', '২৭ · অ্যানাটমিক্যাল ভিন্নতা ও নিরাপত্তা', 'Planned variation, terminology and safe interpretation.', 'ভিন্নতা, পরিভাষা ও নিরাপদ ব্যাখ্যার পরিকল্পিত পাঠ।', ['anatomy.chapter.01']),
    planned('anatomy.chapter.28', 28, 'anatomy.imaging-clinical', 'clinical-integration', '28 · Clinical anatomy integration', '২৮ · ক্লিনিক্যাল অ্যানাটমি সমন্বয়', 'Planned case-based integration of relationships and imaging.', 'সম্পর্ক ও ইমেজিংয়ের কেসভিত্তিক সমন্বয়ের পরিকল্পিত পাঠ।', ['anatomy.chapter.25', 'anatomy.chapter.27']),
  ],
}
