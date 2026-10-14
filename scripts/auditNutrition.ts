import { allNutritionLessonsMap } from '../src/content/chapters/chapterRegistry'
import { nutritionCurriculum } from '../src/content/nutritionCurriculum'

interface SectionAudit {
  id: string
  headingEn: string
  headingBn: string
  paraCount: number
  bulletsCount: number
  wordCountEn: number
  wordCountBn: number
  citations: string[]
}

interface LevelAudit {
  name: string
  sectionCount: number
  wordCountEn: number
  wordCountBn: number
  sections: SectionAudit[]
}

interface ChapterAudit {
  order: number
  id: string
  slug: string
  titleEn: string
  titleBn: string
  totalWordCountEn: number
  totalWordCountBn: number
  levels: Record<string, LevelAudit>
  termsCount: number
  workedExamplesCount: number
  checkpointsCount: number
  referencesCount: number
  interactiveDiagram: {
    id: string
    titleEn: string
    itemCount: number
    svgType: string
  } | null
}

const countWords = (text: string): number => {
  if (!text) return 0
  return text.trim().split(/\s+/).filter(Boolean).length
}

const auditResults: ChapterAudit[] = []

for (const curChapter of nutritionCurriculum.chapters) {
  if (curChapter.status !== 'available') continue
  const lesson = curChapter.lessonId ? allNutritionLessonsMap[curChapter.lessonId] : undefined
  if (!lesson) {
    console.warn(`Lesson not found for ${curChapter.id} (${curChapter.lessonId})`)
    continue
  }

  let chWordsEn = 0
  let chWordsBn = 0

  const levelsAudit: Record<string, LevelAudit> = {}

  for (const depth of ['foundation', 'academic', 'advanced'] as const) {
    const lvl = lesson.levels[depth]
    let lvlWordsEn = 0
    let lvlWordsBn = 0
    const secAudits: SectionAudit[] = []

    if (lvl && lvl.sections) {
      for (const sec of lvl.sections) {
        let secWordsEn = 0
        let secWordsBn = 0

        for (const p of sec.paragraphs) {
          secWordsEn += countWords(p.en)
          secWordsBn += countWords(p.bn)
        }
        if (sec.bullets) {
          for (const b of sec.bullets) {
            secWordsEn += countWords(b.en)
            secWordsBn += countWords(b.bn)
          }
        }

        lvlWordsEn += secWordsEn
        lvlWordsBn += secWordsBn

        secAudits.push({
          id: sec.id,
          headingEn: sec.heading.en,
          headingBn: sec.heading.bn,
          paraCount: sec.paragraphs.length,
          bulletsCount: sec.bullets ? sec.bullets.length : 0,
          wordCountEn: secWordsEn,
          wordCountBn: secWordsBn,
          citations: lesson.evidenceBySection[sec.id] || []
        })
      }
    }

    chWordsEn += lvlWordsEn
    chWordsBn += lvlWordsBn

    levelsAudit[depth] = {
      name: depth,
      sectionCount: secAudits.length,
      wordCountEn: lvlWordsEn,
      wordCountBn: lvlWordsBn,
      sections: secAudits
    }
  }

  auditResults.push({
    order: curChapter.order,
    id: lesson.id,
    slug: lesson.slug,
    titleEn: lesson.title.en,
    titleBn: lesson.title.bn,
    totalWordCountEn: chWordsEn,
    totalWordCountBn: chWordsBn,
    levels: levelsAudit,
    termsCount: lesson.chapter?.terms.length || 0,
    workedExamplesCount: lesson.chapter?.workedExamples.length || 0,
    checkpointsCount: lesson.chapter?.checkpoints.length || 0,
    referencesCount: lesson.references.length,
    interactiveDiagram: lesson.interactiveDiagram ? {
      id: lesson.interactiveDiagram.id,
      titleEn: lesson.interactiveDiagram.title.en,
      itemCount: lesson.interactiveDiagram.items.length,
      svgType: lesson.interactiveDiagram.svgType
    } : null
  })
}

import * as fs from 'fs'
fs.writeFileSync('audit-summary.json', JSON.stringify(auditResults, null, 2))
console.log('Audited ' + auditResults.length + ' chapters successfully.')
