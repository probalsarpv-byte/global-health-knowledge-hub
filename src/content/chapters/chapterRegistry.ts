import type { LessonTopic } from '../lessonSchema'
import { anatomyIntroductionLesson } from '../anatomyIntroductionLesson'
import { chapter02CellsTissuesLesson } from './chapter02CellsTissues'
import { chapter03IntegumentaryLesson } from './chapter03Integumentary'
import { chapter04AxialSkeletonLesson } from './chapter04AxialSkeleton'
import { chapter05AppendicularLesson } from './chapter05Appendicular'
import { chapter06JointsLesson } from './chapter06Joints'
import { chapter07MusclesLesson } from './chapter07Muscles'
import { chapter08UpperLimbLesson } from './chapter08UpperLimb'
import { chapter09LowerLimbLesson } from './chapter09LowerLimb'
import { chapter10CardiovascularLesson } from './chapter10Cardiovascular'
import { chapter11RespiratoryLesson } from './chapter11Respiratory'
import { chapter12DigestiveLesson } from './chapter12Digestive'
import { chapter13UrinaryLesson } from './chapter13Urinary'
import { chapter14ReproductiveLesson } from './chapter14Reproductive'
import { chapter15EndocrineLymphaticLesson } from './chapter15EndocrineLymphatic'
import { chapter16NeuralTissueLesson } from './chapter16NeuralTissue'
import { chapter17SpinalCordLesson } from './chapter17SpinalCord'
import { chapter18BrainLesson } from './chapter18Brain'
import { chapter19SpecialSensesLesson } from './chapter19SpecialSenses'
import { chapter20HeadNeckLesson } from './chapter20HeadNeck'
import { chapter21ThoraxLesson } from './chapter21Thorax'
import { chapter22AbdomenLesson } from './chapter22Abdomen'
import { chapter23PelvisPerineumLesson } from './chapter23PelvisPerineum'
import { chapter24ImagingOrientationLesson } from './chapter24ImagingOrientation'
import { chapter25CrossSectionalLesson } from './chapter25CrossSectional'
import { chapter26SurfaceAnatomyLesson } from './chapter26SurfaceAnatomy'
import { chapter27AnatomicalVariationLesson } from './chapter27AnatomicalVariation'
import { chapter28ClinicalIntegrationLesson } from './chapter28ClinicalIntegration'

export const batch1Chapters: LessonTopic[] = [
  anatomyIntroductionLesson,
  chapter02CellsTissuesLesson,
  chapter03IntegumentaryLesson,
  chapter04AxialSkeletonLesson,
]

export const batch2Chapters: LessonTopic[] = [
  chapter05AppendicularLesson,
  chapter06JointsLesson,
  chapter07MusclesLesson,
  chapter08UpperLimbLesson,
  chapter09LowerLimbLesson,
  chapter10CardiovascularLesson,
]

export const batch3Chapters: LessonTopic[] = [
  chapter11RespiratoryLesson,
  chapter12DigestiveLesson,
  chapter13UrinaryLesson,
  chapter14ReproductiveLesson,
  chapter15EndocrineLymphaticLesson,
  chapter16NeuralTissueLesson,
  chapter17SpinalCordLesson,
  chapter18BrainLesson,
  chapter19SpecialSensesLesson,
]

export const batch4Chapters: LessonTopic[] = [
  chapter20HeadNeckLesson,
  chapter21ThoraxLesson,
  chapter22AbdomenLesson,
  chapter23PelvisPerineumLesson,
  chapter24ImagingOrientationLesson,
]

export const batch5Chapters: LessonTopic[] = [
  chapter25CrossSectionalLesson,
  chapter26SurfaceAnatomyLesson,
  chapter27AnatomicalVariationLesson,
  chapter28ClinicalIntegrationLesson,
]

export const allCompletedChapters: LessonTopic[] = [
  ...batch1Chapters,
  ...batch2Chapters,
  ...batch3Chapters,
  ...batch4Chapters,
  ...batch5Chapters,
]

export const allAnatomyLessonsMap: Record<string, LessonTopic> = {
  [anatomyIntroductionLesson.id]: anatomyIntroductionLesson,
  [chapter02CellsTissuesLesson.id]: chapter02CellsTissuesLesson,
  [chapter03IntegumentaryLesson.id]: chapter03IntegumentaryLesson,
  [chapter04AxialSkeletonLesson.id]: chapter04AxialSkeletonLesson,
  [chapter05AppendicularLesson.id]: chapter05AppendicularLesson,
  [chapter06JointsLesson.id]: chapter06JointsLesson,
  [chapter07MusclesLesson.id]: chapter07MusclesLesson,
  [chapter08UpperLimbLesson.id]: chapter08UpperLimbLesson,
  [chapter09LowerLimbLesson.id]: chapter09LowerLimbLesson,
  [chapter10CardiovascularLesson.id]: chapter10CardiovascularLesson,
  [chapter11RespiratoryLesson.id]: chapter11RespiratoryLesson,
  [chapter12DigestiveLesson.id]: chapter12DigestiveLesson,
  [chapter13UrinaryLesson.id]: chapter13UrinaryLesson,
  [chapter14ReproductiveLesson.id]: chapter14ReproductiveLesson,
  [chapter15EndocrineLymphaticLesson.id]: chapter15EndocrineLymphaticLesson,
  [chapter16NeuralTissueLesson.id]: chapter16NeuralTissueLesson,
  [chapter17SpinalCordLesson.id]: chapter17SpinalCordLesson,
  [chapter18BrainLesson.id]: chapter18BrainLesson,
  [chapter19SpecialSensesLesson.id]: chapter19SpecialSensesLesson,
  [chapter20HeadNeckLesson.id]: chapter20HeadNeckLesson,
  [chapter21ThoraxLesson.id]: chapter21ThoraxLesson,
  [chapter22AbdomenLesson.id]: chapter22AbdomenLesson,
  [chapter23PelvisPerineumLesson.id]: chapter23PelvisPerineumLesson,
  [chapter24ImagingOrientationLesson.id]: chapter24ImagingOrientationLesson,
  [chapter25CrossSectionalLesson.id]: chapter25CrossSectionalLesson,
  [chapter26SurfaceAnatomyLesson.id]: chapter26SurfaceAnatomyLesson,
  [chapter27AnatomicalVariationLesson.id]: chapter27AnatomicalVariationLesson,
  [chapter28ClinicalIntegrationLesson.id]: chapter28ClinicalIntegrationLesson,
}

export const allAnatomyLessonsBySlug: Record<string, LessonTopic> = {
  [anatomyIntroductionLesson.slug]: anatomyIntroductionLesson,
  [chapter02CellsTissuesLesson.slug]: chapter02CellsTissuesLesson,
  [chapter03IntegumentaryLesson.slug]: chapter03IntegumentaryLesson,
  [chapter04AxialSkeletonLesson.slug]: chapter04AxialSkeletonLesson,
  [chapter05AppendicularLesson.slug]: chapter05AppendicularLesson,
  [chapter06JointsLesson.slug]: chapter06JointsLesson,
  [chapter07MusclesLesson.slug]: chapter07MusclesLesson,
  [chapter08UpperLimbLesson.slug]: chapter08UpperLimbLesson,
  [chapter09LowerLimbLesson.slug]: chapter09LowerLimbLesson,
  [chapter10CardiovascularLesson.slug]: chapter10CardiovascularLesson,
  [chapter11RespiratoryLesson.slug]: chapter11RespiratoryLesson,
  [chapter12DigestiveLesson.slug]: chapter12DigestiveLesson,
  [chapter13UrinaryLesson.slug]: chapter13UrinaryLesson,
  [chapter14ReproductiveLesson.slug]: chapter14ReproductiveLesson,
  [chapter15EndocrineLymphaticLesson.slug]: chapter15EndocrineLymphaticLesson,
  [chapter16NeuralTissueLesson.slug]: chapter16NeuralTissueLesson,
  [chapter17SpinalCordLesson.slug]: chapter17SpinalCordLesson,
  [chapter18BrainLesson.slug]: chapter18BrainLesson,
  [chapter19SpecialSensesLesson.slug]: chapter19SpecialSensesLesson,
  [chapter20HeadNeckLesson.slug]: chapter20HeadNeckLesson,
  [chapter21ThoraxLesson.slug]: chapter21ThoraxLesson,
  [chapter22AbdomenLesson.slug]: chapter22AbdomenLesson,
  [chapter23PelvisPerineumLesson.slug]: chapter23PelvisPerineumLesson,
  [chapter24ImagingOrientationLesson.slug]: chapter24ImagingOrientationLesson,
  [chapter25CrossSectionalLesson.slug]: chapter25CrossSectionalLesson,
  [chapter26SurfaceAnatomyLesson.slug]: chapter26SurfaceAnatomyLesson,
  [chapter27AnatomicalVariationLesson.slug]: chapter27AnatomicalVariationLesson,
  [chapter28ClinicalIntegrationLesson.slug]: chapter28ClinicalIntegrationLesson,
}

export function getAnatomyChapterLesson(identifier?: string): LessonTopic | undefined {
  if (!identifier) return undefined
  return allAnatomyLessonsMap[identifier] || allAnatomyLessonsBySlug[identifier]
}

export function getAllAvailableAnatomyLessons(): LessonTopic[] {
  return Object.values(allAnatomyLessonsMap)
}
