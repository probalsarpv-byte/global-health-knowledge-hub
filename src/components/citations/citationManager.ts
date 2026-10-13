import type { LessonReference } from '../../content/lessonSchema'
import type { ChapterCitationMap, NumberedReferenceEntry } from './citationTypes'

/**
 * Normalizes an arbitrary ID into a safe CSS/DOM ID component.
 */
export function sanitizeId(raw: string): string {
  return raw.replace(/[^a-zA-Z0-9_-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}

/**
 * Returns a chapter-scoped citation anchor ID for the inline reading position.
 */
export function getCitationAnchorId(chapterId: string, refNumber: number, instanceId: string = '0'): string {
  return `cite-${sanitizeId(chapterId)}-${refNumber}-${sanitizeId(instanceId)}`
}

/**
 * Returns a chapter-scoped reference target ID for the end-of-chapter bibliography item.
 */
export function getReferenceTargetId(chapterId: string, refNumber: number): string {
  return `ref-${sanitizeId(chapterId)}-${refNumber}`
}

/**
 * Converts a number to Bengali numerals if locale is 'bn'.
 */
export function formatCitationNumber(num: number, locale: 'en' | 'bn' = 'en'): string {
  if (locale === 'bn') {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
    return String(num)
      .split('')
      .map((d) => {
        const parsed = parseInt(d, 10)
        return Number.isNaN(parsed) ? d : bengaliDigits[parsed]
      })
      .join('')
  }
  return String(num)
}

/**
 * Builds a Vancouver-style citation map for a chapter.
 * References are numbered strictly by order of first appearance across sections.
 * Repeated references retain their first assigned number.
 * Any unreferenced bibliography items are appended sequentially at the end.
 */
export function buildChapterCitationMap(
  chapterId: string,
  references: LessonReference[] = [],
  evidenceBySection: Record<string, string[]> = {},
  orderedSectionIds?: string[]
): ChapterCitationMap {
  const refMapById = new Map<string, LessonReference>()
  references.forEach((ref) => {
    if (ref && ref.id) {
      refMapById.set(ref.id, ref)
    }
  })

  // Determine section order
  const sectionIdsToScan = orderedSectionIds && orderedSectionIds.length > 0
    ? orderedSectionIds
    : Object.keys(evidenceBySection)

  let nextNumber = 1
  const assignedByRefId = new Map<string, NumberedReferenceEntry>()
  const orderedEntries: NumberedReferenceEntry[] = []

  // 1. Scan sections in order of appearance
  sectionIdsToScan.forEach((sectionId) => {
    const sectionRefIds = evidenceBySection[sectionId] || []
    sectionRefIds.forEach((refId) => {
      const ref = refMapById.get(refId)
      if (ref && !assignedByRefId.has(refId)) {
        const entry: NumberedReferenceEntry = {
          number: nextNumber++,
          reference: ref,
          firstAppearanceSectionId: sectionId,
          citationAnchorIds: [],
        }
        assignedByRefId.set(refId, entry)
        orderedEntries.push(entry)
      }
    })
  })

  // 2. Append any un-cited references so every bibliography item has a valid, stable number
  references.forEach((ref) => {
    if (ref && ref.id && !assignedByRefId.has(ref.id)) {
      const entry: NumberedReferenceEntry = {
        number: nextNumber++,
        reference: ref,
        citationAnchorIds: [],
      }
      assignedByRefId.set(ref.id, entry)
      orderedEntries.push(entry)
    }
  })

  const byRefId: Record<string, NumberedReferenceEntry> = {}
  const byNumber: Record<number, NumberedReferenceEntry> = {}

  orderedEntries.forEach((entry) => {
    byRefId[entry.reference.id] = entry
    byNumber[entry.number] = entry
  })

  return {
    chapterId,
    entries: orderedEntries,
    byRefId,
    byNumber,
    totalReferences: orderedEntries.length,
  }
}

/**
 * Validates that all evidenceBySection entries point to known reference IDs.
 */
export function validateChapterReferences(
  _chapterId: string,
  references: LessonReference[],
  evidenceBySection: Record<string, string[]> = {}
): { valid: boolean; missingRefIds: string[] } {
  const existingIds = new Set(references.map((r) => r.id))
  const missing = new Set<string>()

  Object.entries(evidenceBySection).forEach(([, refIds]) => {
    refIds.forEach((id) => {
      if (!existingIds.has(id)) {
        missing.add(id)
      }
    })
  })

  const missingList = Array.from(missing)
  return {
    valid: missingList.length === 0,
    missingRefIds: missingList,
  }
}

/**
 * Parses optional inline citation tokens like `[cite:refId]` or `[cite:ref1,ref2]`
 * in educational text while preserving surrounding natural prose.
 */
export function parseInlineCitationTokens(
  text: string
): Array<{ type: 'text'; value: string } | { type: 'citation'; refIds: string[] }> {
  const regex = /\[cite:([a-zA-Z0-9_,.-]+)\]/g
  const result: Array<{ type: 'text'; value: string } | { type: 'citation'; refIds: string[] }> = []

  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push({ type: 'text', value: text.substring(lastIndex, match.index) })
    }
    const ids = match[1].split(',').map((s) => s.trim()).filter(Boolean)
    if (ids.length > 0) {
      result.push({ type: 'citation', refIds: ids })
    }
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    result.push({ type: 'text', value: text.substring(lastIndex) })
  }

  return result
}
