import React from 'react'
import { ExternalLink, CornerUpLeft } from 'lucide-react'
import type { ChapterCitationMap, NumberedReferenceEntry } from './citationTypes'
import { formatCitationNumber, getReferenceTargetId } from './citationManager'
import { returnToCitationAnchor } from './citationNavigation'

export interface EndOfChapterReferencesProps {
  chapterId: string
  citationMap: ChapterCitationMap
  locale?: 'en' | 'bn'
  className?: string
  headingText?: string
  noteText?: string
}

export function EndOfChapterReferences({
  chapterId,
  citationMap,
  locale = 'en',
  className = '',
  headingText,
  noteText,
}: EndOfChapterReferencesProps): React.ReactElement {
  const isBn = locale === 'bn'
  const defaultHeading = isBn ? 'বৈজ্ঞানিক তথ্যসূত্র' : 'Scientific references'
  const heading = headingText || defaultHeading

  const defaultNote = isBn
    ? 'তথ্যসূত্রের বিবরণ প্রকাশক বা পিয়ার-রিভিউড ডাটাবেজ রেকর্ডের সঙ্গে যুক্ত; সাইটেশন শিক্ষামূলক বিশ্লেষণ সমর্থন করে, ব্যক্তিগত চিকিৎসা বা পুষ্টি-পরামর্শ নয়।'
    : 'Reference metadata is linked to authoritative publisher or peer-reviewed records; citations support the educational synthesis, not individualized care recommendations.'
  const note = noteText || defaultNote

  const handleReturn = (entry: NumberedReferenceEntry) => {
    returnToCitationAnchor(chapterId, entry)
  }

  return (
    <section
      id={`references-${chapterId}`}
      className={`lesson-references chapter-references-section ${className}`.trim()}
      aria-labelledby={`references-heading-${chapterId}`}
    >
      <div className="references-header">
        <h2 id={`references-heading-${chapterId}`}>{heading}</h2>
        <span className="references-system-badge">
          {isBn ? 'ভ্যাঙ্কুভার সংখ্যায়ন পদ্ধতি (Vancouver Style)' : 'Vancouver Numeric Citation System'}
        </span>
      </div>

      <ol className="chapter-references-list">
        {citationMap.entries.map((entry) => {
          const targetId = getReferenceTargetId(chapterId, entry.number)
          const formattedNum = formatCitationNumber(entry.number, locale)
          const ref = entry.reference

          const returnLabel = isBn
            ? `উদ্ধৃতি [${formattedNum}]-এ ফিরে যান`
            : `Return to citation [${formattedNum}] in text`

          return (
            <li
              key={ref.id}
              id={targetId}
              className="reference-item"
              tabIndex={-1}
            >
              <div className="reference-item-content">
                <span className="reference-number-pill" aria-hidden="true">
                  [{formattedNum}]
                </span>

                <div className="reference-citation-text">
                  <span className="reference-authors">{ref.authors}</span>{' '}
                  <span className="reference-year">({ref.year}).</span>{' '}
                  <cite className="reference-title">{ref.title}</cite>.{' '}
                  <span className="reference-organization">{ref.organization}.</span>
                </div>

                <div className="reference-actions">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="reference-source-link"
                  >
                    <span>{isBn ? 'উৎস খুলুন' : 'Open source'}</span>
                    <ExternalLink size={13} aria-hidden="true" />
                    <span className="sr-only">: {ref.title}</span>
                  </a>

                  {ref.doi && (
                    <a
                      href={`https://doi.org/${ref.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="reference-doi-link"
                    >
                      <span>DOI: {ref.doi}</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  )}

                  <button
                    type="button"
                    className="citation-return-btn"
                    onClick={() => handleReturn(entry)}
                    aria-label={returnLabel}
                    title={returnLabel}
                  >
                    <CornerUpLeft size={13} aria-hidden="true" />
                    <span>{isBn ? `উদ্ধৃতিতে ফিরে যান [${formattedNum}]` : `Return to citation [${formattedNum}]`}</span>
                  </button>
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      <p className="references-footer-note">{note}</p>
    </section>
  )
}
