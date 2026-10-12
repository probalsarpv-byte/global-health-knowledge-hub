import { BookOpen, CircleCheck, Clock3, Search, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { anatomyCurriculum } from '../../content/anatomyCurriculum'
import { useLocale } from '../../i18n/LocaleContext'

export function AnatomySubjectPage() {
  const { locale } = useLocale()
  const [query, setQuery] = useState('')
  const lang = locale === 'bn' ? 'bn' : 'en'
  const label = (en: string, bn: string) => (lang === 'bn' ? bn : en)

  const chapters = useMemo(
    () =>
      anatomyCurriculum.chapters.filter((chapter) =>
        `${chapter.title.en} ${chapter.title.bn} ${chapter.summary.en} ${chapter.summary.bn}`
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())
      ),
    [query]
  )

  const available = anatomyCurriculum.chapters.filter((chapter) => chapter.status === 'available').length

  return (
    <main className="page-wrap anatomy-subject-page">
      <header className="anatomy-subject-hero" style={{ borderLeft: '4px solid var(--accent-anatomy)', paddingLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-anatomy)', fontWeight: 700 }}>
            {label('ANATOMY ACADEMY · CURRICULUM V2.4', 'অ্যানাটমি একাডেমি · কারিকুলাম V2.4')}
          </span>
          <span className="prototype-pill" style={{ background: 'var(--accent-anatomy-pale)', color: 'var(--accent-anatomy)' }}>
            <Sparkles size={11} style={{ display: 'inline', marginRight: '3px' }} />
            {label('HUMAN MORPHOLOGY', 'মানব অঙ্গসংস্থান')}
          </span>
        </div>
        <h1>{label('Anatomy curriculum', 'অ্যানাটমি কারিকুলাম')}</h1>
        <p>
          {label(
            'A subject-by-subject pathway for learning the language, relationships and evidence-aware interpretation of human structure. Only verified chapters are open; planned chapters do not represent completed lessons.',
            'মানবদেহের গঠনের ভাষা, সম্পর্ক ও প্রমাণসচেতন ব্যাখ্যা শেখার জন্য বিষয়ভিত্তিক পথ। কেবল যাচাইকৃত অধ্যায় খোলা; পরিকল্পিত অধ্যায়কে সম্পন্ন পাঠ হিসেবে দেখানো হয় না।'
          )}
        </p>
        <div className="anatomy-subject-metrics">
          <span style={{ borderColor: 'var(--accent-anatomy-border)', color: 'var(--accent-anatomy)', background: 'var(--accent-anatomy-pale)' }}>
            <BookOpen size={15} />
            {available} / {anatomyCurriculum.chapters.length} {label('chapters available', 'অধ্যায় উপলভ্য')}
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
          <span className="sr-only">{label('Search anatomy lessons', 'অ্যানাটমি পাঠ খুঁজুন')}</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={label('Search available or planned lessons', 'উপলভ্য বা পরিকল্পিত পাঠ খুঁজুন')}
          />
        </label>
        <p>
          {label(
            'Completion status: not started. Local progress becomes available only as chapters are completed in this session.',
            'সম্পন্নতার অবস্থা: শুরু হয়নি। এই সেশনে অধ্যায় সম্পন্ন হলেই কেবল স্থানীয় অগ্রগতি দেখা যাবে।'
          )}
        </p>
      </section>

      <nav className="anatomy-curriculum-nav" aria-label={label('Anatomy curriculum sections', 'অ্যানাটমি কারিকুলাম অংশ')}>
        {anatomyCurriculum.groups.map((group) => (
          <a key={group.id} href={`#${group.id}`}>
            {group.order}. {group.title[lang]}
          </a>
        ))}
      </nav>

      <div className="anatomy-curriculum-groups">
        {anatomyCurriculum.groups.map((group) => {
          const groupChapters = chapters.filter((chapter) => chapter.groupId === group.id)
          return (
            <section id={group.id} className="anatomy-curriculum-group" key={group.id}>
              <div className="anatomy-group-heading">
                <span style={{ background: 'var(--accent-anatomy-pale)', color: 'var(--accent-anatomy)' }}>
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
                        <span style={{ fontWeight: 600, color: 'var(--sci-text-muted)' }}>
                          {label('Chapter', 'অধ্যায়')} {String(chapter.order).padStart(2, '0')}
                        </span>
                        <span className={`curriculum-status ${chapter.status}`}>
                          {chapter.status === 'available'
                            ? label('Available', 'উপলভ্য')
                            : label('Planned · Coming soon', 'পরিকল্পিত · শীঘ্রই আসছে')}
                        </span>
                      </div>
                      <h3>{chapter.title[lang]}</h3>
                      <p>{chapter.summary[lang]}</p>
                      <footer>
                        <span>
                          <Clock3 size={13} />
                          {chapter.estimatedMinutes} {label('min', 'মিনিট')}
                        </span>
                        {chapter.status === 'available' ? (
                          <Link to={`/learn/anatomy/chapters/${chapter.slug}`} style={{ color: 'var(--accent-anatomy)' }}>
                            {label('Open chapter', 'অধ্যায় খুলুন')}
                          </Link>
                        ) : (
                          <span
                            className="planned-control"
                            aria-label={label('This chapter is planned and unavailable', 'এই অধ্যায় পরিকল্পিত এবং এখনো উপলভ্য নয়')}
                          >
                            {label('Coming soon', 'শীঘ্রই আসছে')}
                          </span>
                        )}
                      </footer>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="anatomy-no-results">
                  {label('No chapters in this section match your search.', 'এই অংশে আপনার খোঁজের সঙ্গে মেলে এমন অধ্যায় নেই।')}
                </p>
              )}
            </section>
          )
        })}
      </div>
    </main>
  )
}
