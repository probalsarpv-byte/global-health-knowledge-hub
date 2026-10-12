import { ChevronLeft, CircleCheck, Eye } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { metabolismCurriculum } from '../../content/metabolismCurriculum'
import { getMetabolismChapterLesson } from '../../content/chapters/chapterRegistry'
import { useLocale } from '../../i18n/LocaleContext'
import { LessonRenderer } from '../student/LessonRenderer'

export function MetabolismChapterPage() {
  const { chapter: slug } = useParams()
  const { locale } = useLocale()
  const [complete, setComplete] = useState(false)
  const [focusMode, setFocusMode] = useState(false)
  const lang = locale === 'bn' ? 'bn' : 'en'
  const label = (en: string, bn: string) => (lang === 'bn' ? bn : en)

  const chapter = metabolismCurriculum.chapters.find((item) => item.slug === slug)
  const lesson = chapter?.lessonId ? getMetabolismChapterLesson(chapter.lessonId) : undefined

  if (!chapter || chapter.status !== 'available' || !lesson) {
    return <Navigate to="/learn/metabolism" replace />
  }

  const prev = chapter.order > 1
    ? metabolismCurriculum.chapters.find((item) => item.order === chapter.order - 1)
    : undefined
  const next = metabolismCurriculum.chapters.find((item) => item.order === chapter.order + 1)

  return (
    <main className={`page-wrap anatomy-chapter-page metabolism-chapter-page${focusMode ? ' focus-reading-active' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <nav className="anatomy-breadcrumb" aria-label={label('Chapter navigation', 'অধ্যায় নেভিগেশন')}>
          <Link to="/learn/metabolism">
            <ChevronLeft size={15} />
            {label('Metabolism curriculum', 'বিপাক কারিকুলাম')}
          </Link>
          <span>{chapter.title[lang]}</span>
        </nav>
        <div className="reading-focus-controls">
          <button
            type="button"
            className={`focus-mode-btn${focusMode ? ' is-active' : ''}`}
            onClick={() => setFocusMode((current) => !current)}
            aria-pressed={focusMode}
          >
            <Eye size={14} />
            <span>{focusMode ? label('Exit focus mode', 'মনোযোগ মোড বন্ধ') : label('Focus view', 'মনোযোগ ভিউ')}</span>
          </button>
        </div>
      </div>

      <LessonRenderer lesson={lesson} />

      <section className="anatomy-completion" aria-label={label('Chapter completion', 'অধ্যায় সম্পন্নতা')}>
        <div>
          <CircleCheck size={20} />
          <div>
            <h2>
              {complete
                ? label('Marked complete for this session', 'এই সেশনের জন্য সম্পন্ন চিহ্নিত')
                : label('Completion status: not started', 'সম্পন্নতার অবস্থা: শুরু হয়নি')}
            </h2>
            <p>
              {label(
                'Progress is local to this session and is not stored because this prototype has no durable database or user account.',
                'এই অগ্রগতি এই সেশনে স্থানীয় এবং সংরক্ষিত নয়, কারণ prototype-এ স্থায়ী ডাটাবেস বা ব্যবহারকারী অ্যাকাউন্ট নেই।'
              )}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setComplete((current) => !current)}
          aria-pressed={complete}
        >
          {complete
            ? label('Mark not started', 'শুরু হয়নি চিহ্নিত করুন')
            : label('Mark complete for this session', 'এই সেশনের জন্য সম্পন্ন চিহ্নিত করুন')}
        </button>
      </section>

      <nav className="anatomy-prev-next" aria-label={label('Previous and next chapter', 'পূর্ববর্তী ও পরবর্তী অধ্যায়')}>
        {prev && prev.status === 'available' ? (
          <Link to={`/learn/metabolism/chapters/${prev.slug}`}>
            <ChevronLeft size={16} />
            <span>
              <small>{label('Previous', 'পূর্ববর্তী')}</small>
              {prev.title[lang]}
            </span>
          </Link>
        ) : (
          <Link to="/learn/metabolism">
            <ChevronLeft size={16} />
            <span>
              <small>{label('Previous', 'পূর্ববর্তী')}</small>
              {label('Curriculum overview', 'কারিকুলাম সংক্ষিপ্তসার')}
            </span>
          </Link>
        )}

        {next && next.status === 'available' ? (
          <Link to={`/learn/metabolism/chapters/${next.slug}`}>
            <span>
              <small>{label('Next', 'পরবর্তী')}</small>
              {next.title[lang]}
            </span>
            <ChevronLeft size={16} style={{ transform: 'rotate(180deg)' }} />
          </Link>
        ) : (
          <Link to="/learn/metabolism">
            <span>
              <small>{label('Next', 'পরবর্তী')}</small>
              {label('Curriculum overview', 'কারিকুলাম সংক্ষিপ্তসার')}
            </span>
            <ChevronLeft size={16} style={{ transform: 'rotate(180deg)' }} />
          </Link>
        )}
      </nav>
    </main>
  )
}
