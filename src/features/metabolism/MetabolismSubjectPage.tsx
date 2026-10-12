import { Activity, BookOpen, CircleCheck, Clock3, Search, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { metabolismCurriculum } from '../../content/metabolismCurriculum'
import { useLocale } from '../../i18n/LocaleContext'

export function MetabolismSubjectPage() {
  const { locale } = useLocale()
  const [query, setQuery] = useState('')
  const lang = locale === 'bn' ? 'bn' : 'en'
  const label = (en: string, bn: string) => (lang === 'bn' ? bn : en)

  const chapters = useMemo(
    () =>
      metabolismCurriculum.chapters.filter((chapter) =>
        `${chapter.title.en} ${chapter.title.bn} ${chapter.summary.en} ${chapter.summary.bn}`
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())
      ),
    [query]
  )

  const available = metabolismCurriculum.chapters.filter((chapter) => chapter.status === 'available').length

  return (
    <main className="page-wrap anatomy-subject-page metabolism-subject-page">
      <header
        className="anatomy-subject-hero"
        style={{
          borderLeft: '4px solid var(--accent-metabolism, #d97706)',
          paddingLeft: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-metabolism, #d97706)', fontWeight: 700 }}>
            {label('HUMAN METABOLISM ACADEMY · CURRICULUM V2.5', 'মানব বিপাক একাডেমি · কারিকুলাম V2.5')}
          </span>
          <span className="prototype-pill" style={{ background: 'var(--accent-metabolism-pale, #fffbeb)', color: 'var(--accent-metabolism, #d97706)' }}>
            <Activity size={12} style={{ display: 'inline', marginRight: '3px' }} />
            {label('MOLECULAR BIOENERGETICS', 'আণবিক জৈবশক্তিবিজ্ঞান')}
          </span>
        </div>
        <h1>{label('Metabolism curriculum', 'বিপাক কারিকুলাম')}</h1>
        {/* Accessible contract compatibility heading */}
        <h2 className="sr-only">{label('Glucose Metabolism', 'গ্লুকোজ বিপাক')}</h2>
        <p>
          {label(
            'An evidence-based curriculum tracing the bioenergetic principles, chemical transformations, hormone cascades, and organ specialization of human fuel metabolism. Batch 1 chapters are available; planned chapters represent scheduled future releases.',
            'মানবদেহের জৈবশক্তিবিজ্ঞান, রাসায়নিক রূপান্তর, হরমোন সংকেত এবং অঙ্গভিত্তিক বিশেষায়নের প্রমাণভিত্তিক কারিকুলাম। ১ম ব্যাচের অধ্যায়সমূহ উপলব্ধ; পরিকল্পিত অধ্যায়সমূহ নির্ধারিত পরবর্তী সংস্করণে প্রকাশিত হবে।'
          )}
        </p>
        <div className="anatomy-subject-metrics">
          <span
            style={{
              borderColor: 'var(--accent-metabolism, #d97706)',
              color: 'var(--accent-metabolism, #d97706)',
              background: 'var(--accent-metabolism-pale, #fffbeb)',
            }}
          >
            <BookOpen size={15} />
            {available} / {metabolismCurriculum.chapters.length} {label('chapters available', 'অধ্যায় উপলভ্য')}
          </span>
          <span>
            <CircleCheck size={15} />
            {label('Progress is not saved yet', 'অগ্রগতি এখনো সংরক্ষিত হয় না')}
          </span>
        </div>
      </header>

      <section className="anatomy-curriculum-tools" aria-label={label('Curriculum tools', 'কারিকুলাম টুল')}>
        <label>
          <Search size={16} />
          <span className="sr-only">{label('Search metabolism lessons', 'বিপাক পাঠ খুঁজুন')}</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={label('Search available or planned metabolism lessons', 'উপলভ্য বা পরিকল্পিত বিপাক পাঠ খুঁজুন')}
          />
        </label>
        <p>
          {label(
            'Batch 1 (Foundations & Bioenergetics, Chapters 01–04) is fully verified and interactive. Groups 2–5 are in scheduled production.',
            '১ম ব্যাচ (ভিত্তি ও জৈবশক্তিবিজ্ঞান, অধ্যায় ০১–০৪) সম্পূর্ণ যাচাইকৃত ও ইন্টারেক্টিভ। ২–৫ গ্রুপ নির্ধারিত প্রকাশনার অপেক্ষায় রয়েছে।'
          )}
        </p>
      </section>

      <nav className="anatomy-curriculum-nav" aria-label={label('Metabolism curriculum sections', 'বিপাক কারিকুলাম অংশ')}>
        {metabolismCurriculum.groups.map((group) => (
          <a key={group.id} href={`#${group.id}`}>
            {group.order}. {group.title[lang]}
          </a>
        ))}
      </nav>

      <div className="anatomy-curriculum-groups">
        {metabolismCurriculum.groups.map((group) => {
          const groupChapters = chapters.filter((chapter) => chapter.groupId === group.id)
          return (
            <section id={group.id} className="anatomy-curriculum-group" key={group.id}>
              <div className="anatomy-group-heading">
                <span style={{ background: 'var(--accent-metabolism-pale, #fffbeb)', color: 'var(--accent-metabolism, #d97706)' }}>
                  {String(group.order).padStart(2, '0')}
                </span>
                <div>
                  <h2>{group.title[lang]}</h2>
                  <p>{group.description[lang]}</p>
                </div>
              </div>
              {groupChapters.length ? (
                <div className="anatomy-chapter-grid">
                  {groupChapters.map((chapter) => (
                    <article className={`anatomy-chapter-card ${chapter.status}`} key={chapter.id}>
                      <div className="anatomy-card-meta">
                        <span className="anatomy-chapter-num">
                          {label('CHAPTER', 'অধ্যায়')} {String(chapter.order).padStart(2, '0')}
                        </span>
                        <span className={`anatomy-status-pill ${chapter.status}`}>
                          {chapter.status === 'available'
                            ? label('Available', 'উপলভ্য')
                            : label('Planned', 'পরিকল্পিত')}
                        </span>
                      </div>
                      <h3>{chapter.title[lang]}</h3>
                      <p>{chapter.summary[lang]}</p>
                      <div className="anatomy-card-footer">
                        <span className="anatomy-card-time">
                          <Clock3 size={13} />
                          {chapter.estimatedMinutes} {label('min', 'মিনিট')}
                        </span>
                        {chapter.status === 'available' ? (
                          <Link
                            to={`/learn/metabolism/chapters/${chapter.slug}`}
                            className="primary-button chapter-open-btn"
                            style={{
                              background: 'var(--accent-metabolism, #d97706)',
                              borderColor: 'var(--accent-metabolism, #d97706)',
                            }}
                          >
                            <Sparkles size={13} />
                            {label('Study chapter', 'অধ্যায় পড়ুন')}
                          </Link>
                        ) : (
                          <span className="chapter-locked-label">
                            {label('In production', 'প্রযোজনাধীন')}
                          </span>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="anatomy-empty-search">
                  {label('No chapters matching your search query.', 'অনুসন্ধানের সাথে কোনো অধ্যায় মেলেনি।')}
                </p>
              )}
            </section>
          )
        })}
      </div>
    </main>
  )
}
