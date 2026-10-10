import { ArrowRight, ChevronLeft, CircleCheck } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { anatomyCurriculum } from '../../content/anatomyCurriculum'
import { anatomyIntroductionLesson } from '../../content/anatomyIntroductionLesson'
import { useLocale } from '../../i18n/LocaleContext'
import { LessonRenderer } from '../student/LessonRenderer'

export function AnatomyChapterPage() {
  const { chapter: slug } = useParams()
  const { locale } = useLocale()
  const [complete, setComplete] = useState(false)
  const lang = locale === 'bn' ? 'bn' : 'en'
  const label = (en: string, bn: string) => lang === 'bn' ? bn : en
  const chapter = anatomyCurriculum.chapters.find((item) => item.slug === slug)
  if (!chapter || chapter.status !== 'available' || chapter.lessonId !== anatomyIntroductionLesson.id) return <Navigate to="/learn/anatomy" replace />
  const next = anatomyCurriculum.chapters.find((item) => item.order === chapter.order + 1)
  return <main className="page-wrap anatomy-chapter-page"><nav className="anatomy-breadcrumb" aria-label={label('Chapter navigation', 'অধ্যায় নেভিগেশন')}><Link to="/learn/anatomy"><ChevronLeft size={15} />{label('Anatomy curriculum', 'অ্যানাটমি কারিকুলাম')}</Link><span>{chapter.title[lang]}</span></nav><LessonRenderer lesson={anatomyIntroductionLesson} /><section className="anatomy-completion" aria-label={label('Chapter completion', 'অধ্যায় সম্পন্নতা')}><div><CircleCheck size={20} /><div><h2>{complete ? label('Marked complete for this session', 'এই সেশনের জন্য সম্পন্ন চিহ্নিত') : label('Completion status: not started', 'সম্পন্নতার অবস্থা: শুরু হয়নি')}</h2><p>{label('Progress is local to this page and is not stored because this prototype has no learner account or saved progress.', 'এই অগ্রগতি এই পৃষ্ঠে স্থানীয় এবং সংরক্ষিত নয়, কারণ prototype-এ learner account বা saved progress নেই।')}</p></div></div><button type="button" onClick={() => setComplete((current) => !current)} aria-pressed={complete}>{complete ? label('Mark not started', 'শুরু হয়নি চিহ্নিত করুন') : label('Mark complete for this session', 'এই সেশনের জন্য সম্পন্ন চিহ্নিত করুন')}</button></section><nav className="anatomy-prev-next" aria-label={label('Previous and next chapter', 'পূর্ববর্তী ও পরবর্তী অধ্যায়')}><Link to="/learn/anatomy"><ChevronLeft size={16} /><span><small>{label('Previous', 'পূর্ববর্তী')}</small>{label('Curriculum overview', 'কারিকুলাম সংক্ষিপ্তসার')}</span></Link>{next && <div className="anatomy-next-planned"><span><small>{label('Next', 'পরবর্তী')}</small>{next.title[lang]}</span><span className="curriculum-status planned">{label('Planned · Coming soon', 'পরিকল্পিত · শীঘ্রই আসছে')}</span><ArrowRight size={16} /></div>}</nav></main>
}
