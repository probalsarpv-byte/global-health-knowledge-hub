import { describe, expect, it } from 'vitest'
import { anatomyCurriculum } from '../anatomyCurriculum'
import { metabolismCurriculum } from '../metabolismCurriculum'
import { nutritionCurriculum } from '../nutritionCurriculum'
import { dieteticsCurriculum } from '../dieteticsCurriculum'
import {
  crossAcademyConcepts,
  getAllCrossAcademyConcepts,
  getConceptById,
  getConceptsForChapter,
  getRelatedAcademyLinks,
} from './conceptRegistry'

describe('Cross-Academy Knowledge Graph Registry', () => {
  const anatomySlugs = new Set(anatomyCurriculum.chapters.map((c) => c.slug))
  const metabolismSlugs = new Set(metabolismCurriculum.chapters.map((c) => c.slug))
  const nutritionSlugs = new Set(nutritionCurriculum.chapters.map((c) => c.slug))
  const dieteticsSlugs = new Set(dieteticsCurriculum.chapters.map((c) => c.slug))

  it('contains at least 10 core cross-academy biological concepts', () => {
    const concepts = getAllCrossAcademyConcepts()
    expect(concepts.length).toBeGreaterThanOrEqual(10)
  })

  it('guarantees unique concept identifiers', () => {
    const ids = crossAcademyConcepts.map((c) => c.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('provides complete bilingual parity (EN and BN) for all concepts', () => {
    crossAcademyConcepts.forEach((concept) => {
      expect(concept.name.en).toBeTruthy()
      expect(concept.name.bn).toBeTruthy()
      expect(concept.summary.en).toBeTruthy()
      expect(concept.summary.bn).toBeTruthy()
      expect(concept.clinicalRelevance.en).toBeTruthy()
      expect(concept.clinicalRelevance.bn).toBeTruthy()

      concept.links.forEach((link) => {
        expect(link.chapterTitle.en).toBeTruthy()
        expect(link.chapterTitle.bn).toBeTruthy()
        expect(link.note.en).toBeTruthy()
        expect(link.note.bn).toBeTruthy()
      })
    })
  })

  it('links every concept across at least two distinct biomedical academies', () => {
    crossAcademyConcepts.forEach((concept) => {
      const distinctAcademies = new Set(concept.links.map((link) => link.academy))
      expect(distinctAcademies.size).toBeGreaterThanOrEqual(2)
    })
  })

  it('verifies that every linked chapter slug authentically exists in curriculum registries', () => {
    crossAcademyConcepts.forEach((concept) => {
      concept.links.forEach((link) => {
        // Must start with valid application route
        expect(link.route).toBe(`/learn/${link.academy}/chapters/${link.chapterSlug}`)

        // Slug must exist in the real published curriculum
        if (link.academy === 'anatomy') {
          expect(
            anatomySlugs.has(link.chapterSlug),
            `Anatomy chapter slug "${link.chapterSlug}" in concept "${concept.id}" must exist in anatomyCurriculum`
          ).toBe(true)
        } else if (link.academy === 'metabolism') {
          expect(
            metabolismSlugs.has(link.chapterSlug),
            `Metabolism chapter slug "${link.chapterSlug}" in concept "${concept.id}" must exist in metabolismCurriculum`
          ).toBe(true)
        } else if (link.academy === 'nutrition') {
          expect(
            nutritionSlugs.has(link.chapterSlug),
            `Nutrition chapter slug "${link.chapterSlug}" in concept "${concept.id}" must exist in nutritionCurriculum`
          ).toBe(true)
        } else if (link.academy === 'dietetics') {
          expect(
            dieteticsSlugs.has(link.chapterSlug),
            `Dietetics chapter slug "${link.chapterSlug}" in concept "${concept.id}" must exist in dieteticsCurriculum`
          ).toBe(true)
        }
      })
    })
  })

  it('correctly retrieves concepts by chapter academy and slug', () => {
    // Nutrition chapter 02: macronutrient-digestion-absorption
    const digestionConcepts = getConceptsForChapter('nutrition', 'macronutrient-digestion-absorption')
    expect(digestionConcepts.length).toBeGreaterThan(0)
    expect(digestionConcepts[0].id).toBe('enterocyte-nutrient-transport')

    // Anatomy chapter 10: cardiovascular
    const cvConcepts = getConceptsForChapter('anatomy', 'cardiovascular')
    expect(cvConcepts.length).toBeGreaterThanOrEqual(1)
    const cvIds = cvConcepts.map((c) => c.id)
    expect(cvIds).toContain('lipoprotein-atherogenesis')
    expect(cvIds).toContain('iron-flux-erythropoiesis')

    // Metabolism chapter 09: amino-acid-catabolism-urea
    const aaConcepts = getConceptsForChapter('metabolism', 'amino-acid-catabolism-urea')
    const aaIds = aaConcepts.map((c) => c.id)
    expect(aaIds).toContain('urea-cycle-nitrogen-balance')
    expect(aaIds).toContain('nephron-hyperfiltration-ckd')
  })

  it('correctly retrieves concept by ID or returns undefined', () => {
    const concept = getConceptById('enterocyte-nutrient-transport')
    expect(concept).toBeDefined()
    expect(concept?.biologicalScale).toBe('cellular')

    const nonExistent = getConceptById('non-existent-concept-xyz')
    expect(nonExistent).toBeUndefined()
  })

  it('correctly retrieves related links excluding the query chapter', () => {
    const related = getRelatedAcademyLinks('nutrition', 'macronutrient-digestion-absorption')
    expect(related.length).toBeGreaterThanOrEqual(2)
    // None of the related links should be the queried chapter
    related.forEach((link) => {
      const isQueried =
        link.academy === 'nutrition' && link.chapterSlug === 'macronutrient-digestion-absorption'
      expect(isQueried).toBe(false)
    })
  })
})

