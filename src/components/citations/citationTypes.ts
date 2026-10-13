import type { LessonReference } from '../../content/lessonSchema'

export type ReferenceItem = LessonReference

export interface NumberedReferenceEntry {
  number: number
  reference: ReferenceItem
  firstAppearanceSectionId?: string
  citationAnchorIds: string[]
}

export interface ChapterCitationMap {
  chapterId: string
  entries: NumberedReferenceEntry[]
  byRefId: Record<string, NumberedReferenceEntry>
  byNumber: Record<number, NumberedReferenceEntry>
  totalReferences: number
}
