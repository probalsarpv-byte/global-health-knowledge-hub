import { BookOpen, CircleCheck, Clock3, Leaf, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { nutritionCurriculum } from '../../content/nutritionCurriculum'
import { useLocale } from '../../i18n/LocaleContext'

export function NutritionSubjectPage() {
  const { locale } = useLocale()
  const [query, setQuery] = useState('')
  const lang = locale === 'bn' ? 'bn' : 'en'
  const label = (en: string, bn: string) => (lang === 'bn' ? bn : en)

  const chapters = useMemo(
    () =>
      nutritionCurriculum.chapters.filter((chapter) =>
        `${chapter.title.en} ${chapter.title.bn} ${chapter.summary.en} ${chapter.summary.bn}`
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())
      ),
    [query]
  )

  const available = nutritionCurriculum.chapters.filter((chapter) => chapter.status === 'available').length

  return (
    <main className="page-wrap anatomy-subject-page nutrition-subject-page">
      <header
        className="anatomy-subject-hero"
        style={{
          borderLeft: '4px solid var(--accent-nutrition, #059669)',
          paddingLeft: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="section-kicker" style={{ color: 'var(--accent-nutrition, #059669)', fontWeight: 700 }}>
            {label('FUNCTIONAL NUTRITION & DIETETICS ACADEMY · CURRICULUM V1.0', 'কার্যকরী পুষ্টি ও ডায়েটেটিক্স একাডেমি · কারিকুলাম V১.০')}
          </span>
          <span
            className="prototype-pill"
            style={{
              background: 'var(--accent-nutrition-pale, #ecfdf5)',
              color: 'var(--accent-nutrition, #059669)',
              borderColor: 'var(--accent-nutrition-border, #a7f3d0)',
            }}
          >
            <Leaf size={12} style={{ display: 'inline', marginRight: '3px' }} />
            {label('MOLECULAR & CLINICAL DIETETICS', 'আণবিক ও ক্লিনিক্যাল পুষ্টিবিজ্ঞান')}
          </span>
        </div>
        <h1>{label('Nutrition & dietetics curriculum', 'পুষ্টি ও ডায়েটেটিক্স কারিকুলাম')}</h1>
        {/* Accessible contract compatibility heading */}
        <h2 className="sr-only">{label('Macronutrient Digestion', 'ম্যাক্রোনিউট্রিয়েন্টের পরিপাক')}</h2>
        <p>
          {label(
            'An evidence-based curriculum tracing the bioenergetics, digestive mechanics, micronutrient cofactors, gut microbiome metagenomics, and medical nutrition therapy of human dietetics. All 27 comprehensive chapters are fully available across Groups 1–6.',
            'মানব খাদ্যাভ্যাসের জৈবশক্তিবিজ্ঞান, পরিপাক প্রক্রিয়া, ক্ষুদ্র পুষ্টি উপাদান, অন্ত্রীয় মাইক্রোবায়োম এবং ক্লিনিক্যাল পুষ্টি থেরাপির প্রমাণভিত্তিক কারিকুলাম। ১–৬ গ্রুপের ২৭টি পূর্ণাঙ্গ অধ্যায় বর্তমানে সম্পূর্ণ উন্মুক্ত।'
          )}
        </p>
        <div className="anatomy-subject-metrics">
          <span
            style={{
              borderColor: 'var(--accent-nutrition-border, #a7f3d0)',
              color: 'var(--accent-nutrition, #059669)',
              background: 'var(--accent-nutrition-pale, #ecfdf5)',
            }}
          >
            <BookOpen size={15} />
            {available} / {nutritionCurriculum.chapters.length} {label('chapters available', 'অধ্যায় উপলভ্য')}
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
          <span className="sr-only">{label('Search nutrition lessons', 'পুষ্টি পাঠ খুঁজুন')}</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={label('Search available or planned nutrition lessons', 'উপলভ্য বা পরিকল্পিত পুষ্টি পাঠ খুঁজুন')}
          />
        </label>
        <p>
          {label(
            'All 27 chapters across Groups 1–6 are fully verified, interactive, and aligned with the Vancouver citation standard.',
            '১–৬ গ্রুপের ২৭টি অধ্যায় সম্পূর্ণ যাচাইকৃত, ইন্টারেক্টিভ ও ভ্যাঙ্কুভার সাইটেশন মানসম্মত।'
          )}
        </p>
      </section>

      <nav className="anatomy-curriculum-nav" aria-label={label('Nutrition curriculum sections', 'পুষ্টি কারিকুলাম অংশ')}>
        {nutritionCurriculum.groups.map((group) => (
          <a key={group.id} href={`#${group.id}`}>
            {group.order}. {group.title[lang]}
          </a>
        ))}
      </nav>

      <div className="anatomy-curriculum-groups">
        {nutritionCurriculum.groups.map((group) => {
          const groupChapters = chapters.filter((chapter) => chapter.groupId === group.id)
          return (
            <section id={group.id} className="anatomy-curriculum-group" key={group.id}>
              <header className="anatomy-group-heading">
                <span
                  style={{
                    background: 'var(--accent-nutrition-pale, #ecfdf5)',
                    color: 'var(--accent-nutrition, #059669)',
                    border: '1px solid var(--accent-nutrition-border, #a7f3d0)',
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
                      borderLeft: chapter.status === 'available' ? '3px solid var(--accent-nutrition, #059669)' : undefined,
                    }}
                  >
                    <div className="anatomy-card-meta">
                      <span>{label(`Chapter ${chapter.order}`, `অধ্যায় ${chapter.order}`)}</span>
                      <span className={`curriculum-status ${chapter.status}`}>
                        {chapter.status === 'available'
                          ? label('Available · interactive', 'উপলভ্য · ইন্টারেক্টিভ')
                          : label('Planned chapter', 'পরিকল্পিত অধ্যায়')}
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
                          to={`/learn/nutrition/chapters/${chapter.slug}`}
                          style={{
                            color: 'var(--accent-nutrition, #059669)',
                            fontWeight: 700,
                          }}
                        >
                          {label('Start chapter', 'অধ্যায় শুরু করুন')} →
                        </Link>
                      ) : (
                        <span className="planned-control">
                          {label('Scheduled release', 'নির্ধারিত প্রকাশনা')}
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
