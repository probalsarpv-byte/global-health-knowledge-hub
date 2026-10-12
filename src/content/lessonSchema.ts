export const lessonLocales = ['en', 'bn'] as const
export type LessonLocale = typeof lessonLocales[number]
export type ContentDepth = 'foundation' | 'academic' | 'advanced'
export type EvidenceClass = 'established-textbook-synthesis' | 'emerging-evidence' | 'uncertain'
export type ReviewStatus = 'source-checked-expert-review-pending' | 'expert-reviewed'

export type Localized = Record<LessonLocale, string>
export type LessonReference = {
  id: string
  authors: string
  title: string
  organization: string
  year: number
  url: string
  doi?: string
}
export type ReferenceItem = LessonReference
export type LessonSection = {
  id: string
  heading: Localized
  paragraphs: Localized[]
  bullets?: Localized[]
}
export type LessonLevel = {
  label: Localized
  sections: LessonSection[]
}
export type LessonTopic = {
  id: string
  slug: string
  version: number
  updatedAt: string
  title: Localized
  summary: Localized
  subject: string
  evidenceClass: EvidenceClass
  reviewStatus: ReviewStatus
  lastReviewed: string
  objectives: Localized[]
  prerequisiteIds: string[]
  relatedTopicIds: string[]
  references: LessonReference[]
  evidenceBySection: Record<string, string[]>
  levels: Record<ContentDepth, LessonLevel>
  diagram: { accessibleDescription: Localized; steps: Localized[] }
  assessment: { question: Localized; options: Localized[]; correctIndex: number; explanation: Localized }
  chapter?: CellChapter
  anatomyExplorer?: AnatomyExplorerContent
  organ3DExplorer?: Organ3DExplorerContent
  interactiveDiagram?: InteractiveDiagramContent
}

export type CurriculumStatus = 'available' | 'planned'
export type CompletionStatus = 'not-started' | 'in-progress' | 'complete'
export type AnatomyCurriculumChapter = {
  id: string
  order: number
  groupId: string
  slug: string
  title: Localized
  summary: Localized
  status: CurriculumStatus
  completionStatus: CompletionStatus
  prerequisiteIds: string[]
  lessonId?: string
  estimatedMinutes: number
}
export type AnatomyCurriculumGroup = { id: string; order: number; title: Localized; description: Localized }
export type AnatomyCurriculum = {
  id: 'subject.anatomy'
  version: number
  updatedAt: string
  groups: AnatomyCurriculumGroup[]
  chapters: AnatomyCurriculumChapter[]
}
export type AnatomyExplorerContent = {
  title: Localized
  disclaimer: Localized
  description: Localized
  regions: Array<{ id: string; label: Localized; description: Localized; sectionId: string }>
  planes: Array<{ id: string; label: Localized; description: Localized }>
}

export type Organ3DItem = {
  id: string
  name: Localized
  latinName: string
  system: Localized
  cavity: Localized
  position3D: { x: number; y: number; z: number }
  color: string
  highlightColor: string
  shapeType: 'brain' | 'heart' | 'lungs' | 'liver' | 'stomach' | 'kidneys' | 'intestines' | 'pancreas' | 'skeleton'
  description: Localized
  spatialRelations: Localized
  physiology: Localized
  nutritionConnection: Localized
  clinicalSignificance: Localized
  sectionId: string
}

export type Organ3DExplorerContent = {
  title: Localized
  disclaimer: Localized
  description: Localized
  organs: Organ3DItem[]
}

export type CellChapter = {
  toc: Array<{ id: string; label: Localized; sectionId: string }>
  terms: Array<{ term: Localized; definition: Localized }>
  workedExamples: Array<{ title: Localized; steps: Localized[]; conclusion: Localized }>
  checkpoints: Array<{ question: Localized; answer: Localized }>
  organelles: Array<{ id: string; label: Localized; description: Localized; functions: Localized[]; sectionId: string }>
}

export type InteractiveDiagramItem = {
  id: string
  label: Localized
  description: Localized
  details?: Localized
  sectionId?: string
  color?: string
  svgCoords?: {
    cx?: number
    cy?: number
    r?: number
    d?: string
    x?: number
    y?: number
    width?: number
    height?: number
  }
}

export type InteractiveDiagramContent = {
  id: string
  title: Localized
  disclaimer: Localized
  description: Localized
  svgType: string
  items: InteractiveDiagramItem[]
}


export type ContentIssue = { topicId: string; path: string; message: string }
const localizedKeys = lessonLocales
const isLocalized = (value: unknown): value is Localized => typeof value === 'object' && value !== null && localizedKeys.every((locale) => typeof (value as Record<string, unknown>)[locale] === 'string' && (value as Record<string, string>)[locale].trim().length > 0)

/** Editorial gate for static content: catches missing locales, thin core explanations, bad dates/references and broken graph edges. */
export function validateLessons(lessons: readonly LessonTopic[]): ContentIssue[] {
  const issues: ContentIssue[] = []
  const ids = new Set(lessons.map((lesson) => lesson.id))
  const slugs = new Set<string>()
  const issue = (topicId: string, path: string, message: string) => issues.push({ topicId, path, message })
  for (const lesson of lessons) {
    if (slugs.has(lesson.slug)) issue(lesson.id, 'slug', 'Duplicate lesson slug')
    slugs.add(lesson.slug)
    if (!/^topic\.[a-z][a-z0-9.-]+$/.test(lesson.id)) issue(lesson.id, 'id', 'Topic ID must be stable and namespaced')
    if (!Number.isInteger(lesson.version) || lesson.version < 1) issue(lesson.id, 'version', 'Version must be a positive integer')
    for (const datePath of ['updatedAt', 'lastReviewed'] as const) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(lesson[datePath]) || Number.isNaN(Date.parse(`${lesson[datePath]}T00:00:00Z`))) issue(lesson.id, datePath, 'Use a valid ISO calendar date')
    }
    if (!isLocalized(lesson.title) || !isLocalized(lesson.summary)) issue(lesson.id, 'locales', 'Title and summary require non-empty English and Bengali text')
    if (!lesson.objectives.length || lesson.objectives.some((objective) => !isLocalized(objective))) issue(lesson.id, 'objectives', 'Every learning objective requires both locales')
    for (const relation of [...lesson.prerequisiteIds, ...lesson.relatedTopicIds]) if (!ids.has(relation)) issue(lesson.id, 'topicLinks', `Unresolved topic link: ${relation}`)
    if (!lesson.references.length) issue(lesson.id, 'references', 'At least one reference is required')
    const referenceIds = new Set(lesson.references.map((reference) => reference.id))
    lesson.references.forEach((reference, index) => {
      if (!reference.id || !reference.authors || !reference.title || !reference.organization || !Number.isInteger(reference.year)) issue(lesson.id, `references.${index}`, 'Reference metadata is incomplete')
      try { const url = new URL(reference.url); if (!['https:', 'http:'].includes(url.protocol)) throw new Error() } catch { issue(lesson.id, `references.${index}.url`, 'Reference URL is invalid') }
      if (reference.doi && !/^10\.\d{4,9}\//.test(reference.doi)) issue(lesson.id, `references.${index}.doi`, 'DOI format is invalid')
    })
    for (const depth of ['foundation', 'academic', 'advanced'] as const) {
      const level = lesson.levels[depth]
      if (!level || !isLocalized(level.label) || !level.sections.length) { issue(lesson.id, `levels.${depth}`, 'Each depth level needs a bilingual label and structured sections'); continue }
      const sectionIds = new Set<string>()
      const requiredSections = depth === 'advanced' ? ['integration', 'practice'] : ['introduction', 'structure', 'mechanism', 'integration', 'practice', 'takeaways']
      const chapterAliases: Record<string, string> = lesson.chapter ? { structure: 'membrane', mechanism: 'transport', integration: depth === 'advanced' ? 'energy' : 'nucleus' } : {}
      for (const required of requiredSections) if (!level.sections.some((section) => section.id === required || section.id === chapterAliases[required])) issue(lesson.id, `levels.${depth}.${required}`, 'Required educational section is missing')
      for (const section of level.sections) {
        if (sectionIds.has(section.id)) issue(lesson.id, `levels.${depth}.${section.id}`, 'Section IDs must be unique within a level')
        sectionIds.add(section.id)
        if (!isLocalized(section.heading) || !section.paragraphs.length || section.paragraphs.some((paragraph) => !isLocalized(paragraph))) issue(lesson.id, `levels.${depth}.${section.id}`, 'Section headings and paragraphs require both locales')
        if (['introduction', 'mechanism', 'structure', 'integration'].includes(section.id)) {
          for (const locale of lessonLocales) {
            const length = section.paragraphs.map((paragraph) => paragraph[locale] ?? '').join(' ').trim().length
            if (length < 120) issue(lesson.id, `levels.${depth}.${section.id}.${locale}`, 'Core scientific explanation is suspiciously short (minimum 120 characters)')
          }
        }
        if (section.bullets?.some((bullet) => !isLocalized(bullet))) issue(lesson.id, `levels.${depth}.${section.id}.bullets`, 'Bullets require both locales')
        const linkedReferences = lesson.evidenceBySection[section.id] ?? []
        if (!linkedReferences.length) issue(lesson.id, `levels.${depth}.${section.id}.citations`, 'Section has no linked scientific reference')
        for (const referenceId of linkedReferences) if (!referenceIds.has(referenceId)) issue(lesson.id, `levels.${depth}.${section.id}.citations`, `Unresolved reference ID: ${referenceId}`)
      }
    }
    if (!isLocalized(lesson.diagram.accessibleDescription) || lesson.diagram.steps.length < 2 || lesson.diagram.steps.some((step) => !isLocalized(step))) issue(lesson.id, 'diagram', 'Accessible diagram needs a bilingual description and at least two bilingual steps')
    if (!isLocalized(lesson.assessment.question) || !isLocalized(lesson.assessment.explanation) || lesson.assessment.options.length < 2 || lesson.assessment.options.some((option) => !isLocalized(option)) || lesson.assessment.correctIndex < 0 || lesson.assessment.correctIndex >= lesson.assessment.options.length) issue(lesson.id, 'assessment', 'Assessment content or answer key is invalid/incomplete')
    if (lesson.interactiveDiagram) {
      if (!isLocalized(lesson.interactiveDiagram.title) || !isLocalized(lesson.interactiveDiagram.description) || !isLocalized(lesson.interactiveDiagram.disclaimer)) {
        issue(lesson.id, 'interactiveDiagram', 'Interactive diagram metadata requires both locales')
      }
      if (!lesson.interactiveDiagram.items.length) {
        issue(lesson.id, 'interactiveDiagram.items', 'Interactive diagram must include at least one item')
      }
      for (const [index, item] of lesson.interactiveDiagram.items.entries()) {
        if (!isLocalized(item.label) || !isLocalized(item.description)) {
          issue(lesson.id, `interactiveDiagram.items.${index}`, 'Diagram item requires bilingual label and description')
        }
      }
    }
  }
  return issues
}
