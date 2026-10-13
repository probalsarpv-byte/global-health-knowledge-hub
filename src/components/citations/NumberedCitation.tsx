import React from 'react'
import type { ChapterCitationMap, NumberedReferenceEntry } from './citationTypes'
import {
  formatCitationNumber,
  getCitationAnchorId,
  getReferenceTargetId,
} from './citationManager'
import { jumpToReferenceTarget } from './citationNavigation'

export interface NumberedCitationProps {
  chapterId: string
  referenceIds: string | string[]
  citationMap: ChapterCitationMap
  instanceId?: string
  locale?: 'en' | 'bn'
  className?: string
  prefixText?: string
}

export function NumberedCitation({
  chapterId,
  referenceIds,
  citationMap,
  instanceId = 'inline',
  locale = 'en',
  className = '',
  prefixText,
}: NumberedCitationProps): React.ReactElement | null {
  const ids = Array.isArray(referenceIds) ? referenceIds : [referenceIds]
  if (ids.length === 0) return null

  // Deduplicate and resolve entries
  const seenNumbers = new Set<number>()
  const resolvedEntries: NumberedReferenceEntry[] = []

  ids.forEach((id) => {
    const entry = citationMap.byRefId[id]
    if (entry && !seenNumbers.has(entry.number)) {
      seenNumbers.add(entry.number)
      resolvedEntries.push(entry)
    }
  })

  // Sort sequentially ascending (e.g. [1, 3])
  resolvedEntries.sort((a, b) => a.number - b.number)

  if (resolvedEntries.length === 0) return null

  const handleClick = (e: React.MouseEvent, entry: NumberedReferenceEntry, anchorId: string) => {
    e.preventDefault()
    jumpToReferenceTarget(chapterId, entry.number, anchorId)
  }

  const handleKeyDown = (e: React.KeyboardEvent, entry: NumberedReferenceEntry, anchorId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      jumpToReferenceTarget(chapterId, entry.number, anchorId)
    }
  }

  return (
    <span className={`numbered-citation-group ${className}`.trim()} role="group" aria-label={locale === 'bn' ? 'তথ্যসূত্র উদ্ধৃতি' : 'Citations'}>
      {prefixText && <span className="citation-prefix-text">{prefixText}</span>}
      <span className="citation-brackets" aria-hidden="true">[</span>
      {resolvedEntries.map((entry, idx) => {
        const anchorId = getCitationAnchorId(chapterId, entry.number, `${instanceId}-${idx}`)
        const targetId = getReferenceTargetId(chapterId, entry.number)

        // Register anchor on entry for bi-directional return lookup
        if (!entry.citationAnchorIds.includes(anchorId)) {
          entry.citationAnchorIds.push(anchorId)
        }

        const formattedNum = formatCitationNumber(entry.number, locale)
        const ariaLabel = locale === 'bn'
          ? `তথ্যসূত্র [${formattedNum}]: ${entry.reference.authors} (${entry.reference.year}) ${entry.reference.title}`
          : `Citation [${formattedNum}]: ${entry.reference.authors} (${entry.reference.year}) ${entry.reference.title}`

        const tooltip = `${entry.reference.authors} (${entry.reference.year}). ${entry.reference.title}`

        return (
          <React.Fragment key={entry.reference.id}>
            {idx > 0 && <span className="citation-separator" aria-hidden="true">, </span>}
            <a
              id={anchorId}
              href={`#${targetId}`}
              className="citation-link"
              role="doc-noteref"
              aria-label={ariaLabel}
              title={tooltip}
              onClick={(e) => handleClick(e, entry, anchorId)}
              onKeyDown={(e) => handleKeyDown(e, entry, anchorId)}
            >
              {formattedNum}
            </a>
          </React.Fragment>
        )
      })}
      <span className="citation-brackets" aria-hidden="true">]</span>
    </span>
  )
}
