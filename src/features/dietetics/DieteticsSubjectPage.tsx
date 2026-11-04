import { BookOpen, CircleCheck, Clock3, Layers3, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { dieteticsCurriculum } from '../../content/dieteticsCurriculum'
import { useLocale } from '../../i18n/LocaleContext'

export function DieteticsSubjectPage() {
  const { locale } = useLocale()
  const [query, setQuery] = useState('')
  const lang = locale === 'bn' ? 'bn' : 'en'
  const label = (en: string, bn: string) => (lang === 'bn' ? bn : en)

  const chapters = useMemo(
    () =>
      dieteticsCurriculum.chapters.filter((chapter) =>
        `${chapter.title.en} ${chapter.title.bn} ${chapter.summary.en} ${chapter.summary.bn}`
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())
      ),
    [query]
  )

  const available = dieteticsCurriculum.chapters.filter((chapter) => chapter.status === 'available').length

  return (
    <main className="page-wrap anatomy-subject-page dietetics-subject-page">
      <header
        className="anatomy-subject-hero"
        style={{
          borderLeft: '4px solid var(--accent-dietetics, #E11D48)',
          paddingLeft: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-dietetics, #E11D48)', fontWeight: 700 }}>
            {label(
              'PRACTICAL DIET PLANNING & THERAPEUTIC DIETETICS ACADEMY · CURRICULUM V1.0',
              'ব্যবহারিক পথ্য পরিকল্পনা ও থেরাপিউটিক ডায়েটেটিক্স একাডেমি · কারিকুলাম V১.০'
            )}
          </span>
          <span
            className="prototype-pill"
            style={{
              background: 'var(--accent-dietetics-pale, #FFF1F2)',
              color: 'var(--accent-dietetics, #E11D48)',
              borderColor: 'var(--accent-dietetics-border, #FECDD3)',
            }}
          >
            <Layers3 size={12} style={{ display: 'inline', marginRight: '4px' }} />
            {label('CLINICAL DIETETICS & MNT', 'ক্লিনিক্যাল ডায়েটেটিক্স ও পুষ্টি থেরাপি')}
          </span>
          <span
            className="prototype-pill"
            style={{
              background: '#F0FDF4',
              color: '#16A34A',
              borderColor: '#BBF7D0',
              fontWeight: 700,
            }}
          >
            {label('V2.8 · CHAPTERS 01–10 ACTIVE', 'V২.৮ · ১ম–১০ম অধ্যায় সক্রিয়')}
          </span>
        </div>
        <h1>
          {label(
            'Practical diet planning & therapeutic dietetics curriculum',
            'ব্যবহারিক পথ্য পরিকল্পনা ও থেরাপিউটিক ডায়েটেটিক্স কারিকুলাম'
          )}
        </h1>
        {/* Accessible contract compatibility heading */}
        <h2 className="sr-only">
          {label('Clinical Nutrition Assessment', 'ক্লিনিক্যাল পুষ্টি মূল্যায়ন')}
        </h2>
        <p>
          {label(
            'An evidence-based companion curriculum translating biochemical nutrition science into individualized medical nutrition therapies, standardized food exchanges, clinical calculation engines, and disease-specific dietary protocols. Chapters 01–10 are available in full popular-science depth with interactive 3-tier learning levels, clinical equations, and Vancouver citations; Chapters 11–32 are registered in the active curriculum.',
            'বায়োকেমিক্যাল পুষ্টিবিজ্ঞানকে রোগীর ব্যক্তিমাফিক চিকিৎসা পুষ্টি থেরাপি, প্রমিত খাদ্য বিনিময় ব্যবস্থা, ক্লিনিক্যাল ক্যালকুলেশন ইঞ্জিন এবং রোগভিত্তিক খাদ্য প্রোটোকলে রূপান্তরের প্রমাণভিত্তিক কারিকুলাম। ১ম থেকে ১০ম অধ্যায় জনপ্রিয় বিজ্ঞান ধারায় ৩টি শিখন স্তরে সম্পূর্ণ উন্মুক্ত, ক্লিনিক্যাল সমীকরণ ও ভ্যাঙ্কুভার সাইটেশনযুক্ত; ১১–৩২তম অধ্যায় সক্রিয় কারিকুলামে সংরক্ষিত।'
          )}
        </p>
        <div className="anatomy-subject-metrics">
          <span
            style={{
              borderColor: 'var(--accent-dietetics-border, #FECDD3)',
              color: 'var(--accent-dietetics, #E11D48)',
              background: 'var(--accent-dietetics-pale, #FFF1F2)',
            }}
          >
            <BookOpen size={15} />
            {available} / {dieteticsCurriculum.chapters.length} {label('chapters available', 'অধ্যায় উপলভ্য')}
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
          <span className="sr-only">{label('Search dietetics lessons', 'ডায়েটেটিক্স পাঠ খুঁজুন')}</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={label('Search available or planned dietetics lessons', 'উপলভ্য বা পরিকল্পিত ডায়েটেটিক্স পাঠ খুঁজুন')}
          />
        </label>
        <p>
          {label(
            'Explore the 32-chapter Practical Dietetics curriculum spanning clinical assessment, energy prescriptions, food exchanges, and organ-specific medical nutrition therapies.',
            'ক্লিনিক্যাল মূল্যায়ন, শক্তি নির্ধারণ, খাদ্য বিনিময় ও রোগভিত্তিক পুষ্টি থেরাপির ৩২টি অধ্যায়ের ডায়েটেটিক্স কারিকুলাম ঘুরে দেখুন।'
          )}
        </p>
      </section>

      <nav className="anatomy-curriculum-nav" aria-label={label('Dietetics curriculum sections', 'ডায়েটেটিক্স কারিকুলাম অংশ')}>
        {dieteticsCurriculum.groups.map((group) => (
          <a key={group.id} href={`#${group.id}`}>
            {group.order}. {group.title[lang]}
          </a>
        ))}
      </nav>

      <div className="anatomy-curriculum-groups">
        {dieteticsCurriculum.groups.map((group) => {
          const groupChapters = chapters.filter((chapter) => chapter.groupId === group.id)
          return (
            <section id={group.id} className="anatomy-curriculum-group" key={group.id}>
              <header className="anatomy-group-heading">
                <span
                  style={{
                    background: 'var(--accent-dietetics-pale, #FFF1F2)',
                    color: 'var(--accent-dietetics, #E11D48)',
                    border: '1px solid var(--accent-dietetics-border, #FECDD3)',
                  }}
                >
                  {group.order}
                </span>
                <div>
                  <h2>{group.title[lang]}</h2>
                  <p>{group.description[lang]}</p>
                </div>
              </header>

              <div className="anatomy-chapter-grid">
                {groupChapters.map((chapter) => (
                  <article
                    className={`anatomy-chapter-card ${chapter.status}`}
                    key={chapter.id}
                    style={{
                      borderLeft: chapter.status === 'available' ? '3px solid var(--accent-dietetics, #E11D48)' : undefined,
                    }}
                  >
                    <div className="anatomy-card-meta">
                      <span>{label(`Chapter ${chapter.order}`, `অধ্যায় ${chapter.order}`)}</span>
                      <span className={`curriculum-status ${chapter.status}`}>
                        {chapter.status === 'available'
                          ? label('Available · interactive', 'উপলভ্য · ইন্টারেক্টিভ')
                          : label('Planned curriculum', 'পরিকল্পিত কারিকুলাম')}
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
                        <Link
                          to={`/learn/dietetics/chapters/${chapter.slug}`}
                          style={{
                            color: 'var(--accent-dietetics, #E11D48)',
                            fontWeight: 700,
                          }}
                        >
                          {label('Start chapter', 'অধ্যায় শুরু করুন')} →
                        </Link>
                      ) : (
                        <span className="planned-control">
                          {label('In preparation', 'প্রস্তুতি চলছে')}
                        </span>
                      )}
                    </footer>
                  </article>
                ))}
              </div>

              {groupChapters.length === 0 && (
                <p className="anatomy-no-results">
                  {label('No chapters in this section match your search.', 'এই অংশে আপনার অনুসন্ধানের সাথে মিলে এমন কোনো অধ্যায় নেই।')}
                </p>
              )}
            </section>
          )
        })}
      </div>
    </main>
  )
}
