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
import { metabolism01BioenergeticsLesson } from './metabolism01Bioenergetics'
import { metabolism02GlycolysisLesson } from './metabolism02Glycolysis'
import { metabolism03TcaOxphosLesson } from './metabolism03TcaOxphos'
import { metabolism04GlycogenGluconeogenesisLesson } from './metabolism04GlycogenGluconeogenesis'
import { metabolism05BetaOxidationLesson } from './metabolism05BetaOxidation'
import { metabolism06LipogenesisLesson } from './metabolism06Lipogenesis'
import { metabolism07CholesterolLesson } from './metabolism07Cholesterol'
import { metabolism08LipoproteinsLesson } from './metabolism08Lipoproteins'
import { metabolism09AminoAcidsUreaLesson } from './metabolism09AminoAcidsUrea'
import { metabolism10CarbonSkeletonsLesson } from './metabolism10CarbonSkeletons'
import { metabolism11PurinesPyrimidinesLesson } from './metabolism11PurinesPyrimidines'
import { metabolism12HemeBilirubinLesson } from './metabolism12HemeBilirubin'
import { metabolism13FuelDynamicsLesson } from './metabolism13FuelDynamics'
import { metabolism14EndocrineRegulationLesson } from './metabolism14EndocrineRegulation'
import { metabolism15OrganSpecializationLesson } from './metabolism15OrganSpecialization'
import { metabolism16MicronutrientsCofactorsLesson } from './metabolism16MicronutrientsCofactors'
import { metabolism17InbornErrorsLesson } from './metabolism17InbornErrors'
import { metabolism18MetabolicDiseaseLesson } from './metabolism18MetabolicDisease'
import { metabolism19EnzymeKineticsLesson } from './metabolism19EnzymeKinetics'
import { metabolism20CompartmentationShuttlesLesson } from './metabolism20CompartmentationShuttles'
import { metabolism21PentosePhosphateLesson } from './metabolism21PentosePhosphate'
import { metabolism22AlternativeSugarsLesson } from './metabolism22AlternativeSugars'
import { metabolism23LactateShuttleCoriLesson } from './metabolism23LactateShuttleCori'
import { metabolism24LipidDigestionChylomicronsLesson } from './metabolism24LipidDigestionChylomicrons'
import { metabolism25ComplexLipidsEicosanoidsLesson } from './metabolism25ComplexLipidsEicosanoids'
import { metabolism26ProteostasisAutophagyLesson } from './metabolism26ProteostasisAutophagy'
import { metabolism27OneCarbonMethylationLesson } from './metabolism27OneCarbonMethylation'
import { metabolism28NeurotransmittersLesson } from './metabolism28Neurotransmitters'
import { metabolism29GlutathioneRedoxLesson } from './metabolism29GlutathioneRedox'
import { metabolism30MitochondrialDynamicsLesson } from './metabolism30MitochondrialDynamics'
import { metabolism31ExerciseBioenergeticsLesson } from './metabolism31ExerciseBioenergetics'
import { metabolism32CircadianMetabolismLesson } from './metabolism32CircadianMetabolism'
import { metabolism33ImmunometabolismLesson } from './metabolism33Immunometabolism'
import { metabolism34CancerReprogrammingLesson } from './metabolism34CancerReprogramming'
import { metabolism35FluxMetabolomicsLesson } from './metabolism35FluxMetabolomics'
import { metabolism36ClinicalCasesLesson } from './metabolism36ClinicalCases'
import { nutrition01EnergyBalanceLesson } from './nutrition01EnergyBalance'
import { nutrition02MacronutrientDigestionLesson } from './nutrition02MacronutrientDigestion'
import { nutrition03CarbohydrateQualityLesson } from './nutrition03CarbohydrateQuality'
import { nutrition04DietaryFiberScfaLesson } from './nutrition04DietaryFiberScfa'
import { nutrition05DietaryLipidsLesson } from './nutrition05DietaryLipids'
import { nutrition06DietaryProteinsLesson } from './nutrition06DietaryProteins'
import { nutrition07SatietyNeuroendocrinologyLesson } from './nutrition07SatietyNeuroendocrinology'
import { nutrition08HydrationElectrolytesLesson } from './nutrition08HydrationElectrolytes'
import { nutrition09FatSolubleVitaminsLesson } from './nutrition09FatSolubleVitamins'
import { nutrition10BComplexBioenergeticsLesson } from './nutrition10BComplexBioenergetics'
import { nutrition11VitaminCTraceMineralsLesson } from './nutrition11VitaminCTraceMinerals'
import { nutrition12MacromineralsBoneMatrixLesson } from './nutrition12MacromineralsBoneMatrix'

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

export const batch1MetabolismChapters: LessonTopic[] = [
  metabolism01BioenergeticsLesson,
  metabolism02GlycolysisLesson,
  metabolism03TcaOxphosLesson,
  metabolism04GlycogenGluconeogenesisLesson,
]

export const batch2MetabolismChapters: LessonTopic[] = [
  metabolism05BetaOxidationLesson,
  metabolism06LipogenesisLesson,
  metabolism07CholesterolLesson,
  metabolism08LipoproteinsLesson,
]

export const batch3MetabolismChapters: LessonTopic[] = [
  metabolism09AminoAcidsUreaLesson,
  metabolism10CarbonSkeletonsLesson,
  metabolism11PurinesPyrimidinesLesson,
  metabolism12HemeBilirubinLesson,
]

export const batch4MetabolismChapters: LessonTopic[] = [
  metabolism13FuelDynamicsLesson,
  metabolism14EndocrineRegulationLesson,
  metabolism15OrganSpecializationLesson,
]

export const batch5MetabolismChapters: LessonTopic[] = [
  metabolism16MicronutrientsCofactorsLesson,
  metabolism17InbornErrorsLesson,
  metabolism18MetabolicDiseaseLesson,
]

export const batch6MetabolismChapters: LessonTopic[] = [
  metabolism19EnzymeKineticsLesson,
  metabolism20CompartmentationShuttlesLesson,
  metabolism21PentosePhosphateLesson,
  metabolism22AlternativeSugarsLesson,
  metabolism23LactateShuttleCoriLesson,
  metabolism24LipidDigestionChylomicronsLesson,
  metabolism25ComplexLipidsEicosanoidsLesson,
  metabolism26ProteostasisAutophagyLesson,
  metabolism27OneCarbonMethylationLesson,
]

export const batch7MetabolismChapters: LessonTopic[] = [
  metabolism28NeurotransmittersLesson,
  metabolism29GlutathioneRedoxLesson,
  metabolism30MitochondrialDynamicsLesson,
  metabolism31ExerciseBioenergeticsLesson,
  metabolism32CircadianMetabolismLesson,
  metabolism33ImmunometabolismLesson,
  metabolism34CancerReprogrammingLesson,
  metabolism35FluxMetabolomicsLesson,
  metabolism36ClinicalCasesLesson,
]

export const allCompletedMetabolismChapters: LessonTopic[] = [
  ...batch1MetabolismChapters,
  ...batch2MetabolismChapters,
  ...batch3MetabolismChapters,
  ...batch4MetabolismChapters,
  ...batch5MetabolismChapters,
  ...batch6MetabolismChapters,
  ...batch7MetabolismChapters,
]

export const allMetabolismLessonsMap: Record<string, LessonTopic> = {
  [metabolism01BioenergeticsLesson.id]: metabolism01BioenergeticsLesson,
  [metabolism02GlycolysisLesson.id]: metabolism02GlycolysisLesson,
  [metabolism03TcaOxphosLesson.id]: metabolism03TcaOxphosLesson,
  [metabolism04GlycogenGluconeogenesisLesson.id]: metabolism04GlycogenGluconeogenesisLesson,
  [metabolism05BetaOxidationLesson.id]: metabolism05BetaOxidationLesson,
  [metabolism06LipogenesisLesson.id]: metabolism06LipogenesisLesson,
  [metabolism07CholesterolLesson.id]: metabolism07CholesterolLesson,
  [metabolism08LipoproteinsLesson.id]: metabolism08LipoproteinsLesson,
  [metabolism09AminoAcidsUreaLesson.id]: metabolism09AminoAcidsUreaLesson,
  [metabolism10CarbonSkeletonsLesson.id]: metabolism10CarbonSkeletonsLesson,
  [metabolism11PurinesPyrimidinesLesson.id]: metabolism11PurinesPyrimidinesLesson,
  [metabolism12HemeBilirubinLesson.id]: metabolism12HemeBilirubinLesson,
  [metabolism13FuelDynamicsLesson.id]: metabolism13FuelDynamicsLesson,
  [metabolism14EndocrineRegulationLesson.id]: metabolism14EndocrineRegulationLesson,
  [metabolism15OrganSpecializationLesson.id]: metabolism15OrganSpecializationLesson,
  [metabolism16MicronutrientsCofactorsLesson.id]: metabolism16MicronutrientsCofactorsLesson,
  [metabolism17InbornErrorsLesson.id]: metabolism17InbornErrorsLesson,
  [metabolism18MetabolicDiseaseLesson.id]: metabolism18MetabolicDiseaseLesson,
  [metabolism19EnzymeKineticsLesson.id]: metabolism19EnzymeKineticsLesson,
  [metabolism20CompartmentationShuttlesLesson.id]: metabolism20CompartmentationShuttlesLesson,
  [metabolism21PentosePhosphateLesson.id]: metabolism21PentosePhosphateLesson,
  [metabolism22AlternativeSugarsLesson.id]: metabolism22AlternativeSugarsLesson,
  [metabolism23LactateShuttleCoriLesson.id]: metabolism23LactateShuttleCoriLesson,
  [metabolism24LipidDigestionChylomicronsLesson.id]: metabolism24LipidDigestionChylomicronsLesson,
  [metabolism25ComplexLipidsEicosanoidsLesson.id]: metabolism25ComplexLipidsEicosanoidsLesson,
  [metabolism26ProteostasisAutophagyLesson.id]: metabolism26ProteostasisAutophagyLesson,
  [metabolism27OneCarbonMethylationLesson.id]: metabolism27OneCarbonMethylationLesson,
  [metabolism28NeurotransmittersLesson.id]: metabolism28NeurotransmittersLesson,
  [metabolism29GlutathioneRedoxLesson.id]: metabolism29GlutathioneRedoxLesson,
  [metabolism30MitochondrialDynamicsLesson.id]: metabolism30MitochondrialDynamicsLesson,
  [metabolism31ExerciseBioenergeticsLesson.id]: metabolism31ExerciseBioenergeticsLesson,
  [metabolism32CircadianMetabolismLesson.id]: metabolism32CircadianMetabolismLesson,
  [metabolism33ImmunometabolismLesson.id]: metabolism33ImmunometabolismLesson,
  [metabolism34CancerReprogrammingLesson.id]: metabolism34CancerReprogrammingLesson,
  [metabolism35FluxMetabolomicsLesson.id]: metabolism35FluxMetabolomicsLesson,
  [metabolism36ClinicalCasesLesson.id]: metabolism36ClinicalCasesLesson,
}

export const allMetabolismLessonsBySlug: Record<string, LessonTopic> = {
  [metabolism01BioenergeticsLesson.slug]: metabolism01BioenergeticsLesson,
  [metabolism02GlycolysisLesson.slug]: metabolism02GlycolysisLesson,
  [metabolism03TcaOxphosLesson.slug]: metabolism03TcaOxphosLesson,
  [metabolism04GlycogenGluconeogenesisLesson.slug]: metabolism04GlycogenGluconeogenesisLesson,
  [metabolism05BetaOxidationLesson.slug]: metabolism05BetaOxidationLesson,
  [metabolism06LipogenesisLesson.slug]: metabolism06LipogenesisLesson,
  [metabolism07CholesterolLesson.slug]: metabolism07CholesterolLesson,
  [metabolism08LipoproteinsLesson.slug]: metabolism08LipoproteinsLesson,
  [metabolism09AminoAcidsUreaLesson.slug]: metabolism09AminoAcidsUreaLesson,
  [metabolism10CarbonSkeletonsLesson.slug]: metabolism10CarbonSkeletonsLesson,
  [metabolism11PurinesPyrimidinesLesson.slug]: metabolism11PurinesPyrimidinesLesson,
  [metabolism12HemeBilirubinLesson.slug]: metabolism12HemeBilirubinLesson,
  [metabolism13FuelDynamicsLesson.slug]: metabolism13FuelDynamicsLesson,
  [metabolism14EndocrineRegulationLesson.slug]: metabolism14EndocrineRegulationLesson,
  [metabolism15OrganSpecializationLesson.slug]: metabolism15OrganSpecializationLesson,
  [metabolism16MicronutrientsCofactorsLesson.slug]: metabolism16MicronutrientsCofactorsLesson,
  [metabolism17InbornErrorsLesson.slug]: metabolism17InbornErrorsLesson,
  [metabolism18MetabolicDiseaseLesson.slug]: metabolism18MetabolicDiseaseLesson,
  [metabolism19EnzymeKineticsLesson.slug]: metabolism19EnzymeKineticsLesson,
  [metabolism20CompartmentationShuttlesLesson.slug]: metabolism20CompartmentationShuttlesLesson,
  [metabolism21PentosePhosphateLesson.slug]: metabolism21PentosePhosphateLesson,
  [metabolism22AlternativeSugarsLesson.slug]: metabolism22AlternativeSugarsLesson,
  [metabolism23LactateShuttleCoriLesson.slug]: metabolism23LactateShuttleCoriLesson,
  [metabolism24LipidDigestionChylomicronsLesson.slug]: metabolism24LipidDigestionChylomicronsLesson,
  [metabolism25ComplexLipidsEicosanoidsLesson.slug]: metabolism25ComplexLipidsEicosanoidsLesson,
  [metabolism26ProteostasisAutophagyLesson.slug]: metabolism26ProteostasisAutophagyLesson,
  [metabolism27OneCarbonMethylationLesson.slug]: metabolism27OneCarbonMethylationLesson,
  [metabolism28NeurotransmittersLesson.slug]: metabolism28NeurotransmittersLesson,
  [metabolism29GlutathioneRedoxLesson.slug]: metabolism29GlutathioneRedoxLesson,
  [metabolism30MitochondrialDynamicsLesson.slug]: metabolism30MitochondrialDynamicsLesson,
  [metabolism31ExerciseBioenergeticsLesson.slug]: metabolism31ExerciseBioenergeticsLesson,
  [metabolism32CircadianMetabolismLesson.slug]: metabolism32CircadianMetabolismLesson,
  [metabolism33ImmunometabolismLesson.slug]: metabolism33ImmunometabolismLesson,
  [metabolism34CancerReprogrammingLesson.slug]: metabolism34CancerReprogrammingLesson,
  [metabolism35FluxMetabolomicsLesson.slug]: metabolism35FluxMetabolomicsLesson,
  [metabolism36ClinicalCasesLesson.slug]: metabolism36ClinicalCasesLesson,
}

export function getMetabolismChapterLesson(identifier?: string): LessonTopic | undefined {
  if (!identifier) return undefined
  return allMetabolismLessonsMap[identifier] || allMetabolismLessonsBySlug[identifier]
}

export function getAllAvailableMetabolismLessons(): LessonTopic[] {
  return Object.values(allMetabolismLessonsMap)
}

export const allNutritionLessonsMap: Record<string, LessonTopic> = {
  [nutrition01EnergyBalanceLesson.id]: nutrition01EnergyBalanceLesson,
  [nutrition02MacronutrientDigestionLesson.id]: nutrition02MacronutrientDigestionLesson,
  [nutrition03CarbohydrateQualityLesson.id]: nutrition03CarbohydrateQualityLesson,
  [nutrition04DietaryFiberScfaLesson.id]: nutrition04DietaryFiberScfaLesson,
  [nutrition05DietaryLipidsLesson.id]: nutrition05DietaryLipidsLesson,
  [nutrition06DietaryProteinsLesson.id]: nutrition06DietaryProteinsLesson,
  [nutrition07SatietyNeuroendocrinologyLesson.id]: nutrition07SatietyNeuroendocrinologyLesson,
  [nutrition08HydrationElectrolytesLesson.id]: nutrition08HydrationElectrolytesLesson,
  [nutrition09FatSolubleVitaminsLesson.id]: nutrition09FatSolubleVitaminsLesson,
  [nutrition10BComplexBioenergeticsLesson.id]: nutrition10BComplexBioenergeticsLesson,
  [nutrition11VitaminCTraceMineralsLesson.id]: nutrition11VitaminCTraceMineralsLesson,
  [nutrition12MacromineralsBoneMatrixLesson.id]: nutrition12MacromineralsBoneMatrixLesson,
}

export const allNutritionLessonsBySlug: Record<string, LessonTopic> = {
  [nutrition01EnergyBalanceLesson.slug]: nutrition01EnergyBalanceLesson,
  [nutrition02MacronutrientDigestionLesson.slug]: nutrition02MacronutrientDigestionLesson,
  [nutrition03CarbohydrateQualityLesson.slug]: nutrition03CarbohydrateQualityLesson,
  [nutrition04DietaryFiberScfaLesson.slug]: nutrition04DietaryFiberScfaLesson,
  [nutrition05DietaryLipidsLesson.slug]: nutrition05DietaryLipidsLesson,
  [nutrition06DietaryProteinsLesson.slug]: nutrition06DietaryProteinsLesson,
  [nutrition07SatietyNeuroendocrinologyLesson.slug]: nutrition07SatietyNeuroendocrinologyLesson,
  [nutrition08HydrationElectrolytesLesson.slug]: nutrition08HydrationElectrolytesLesson,
  [nutrition09FatSolubleVitaminsLesson.slug]: nutrition09FatSolubleVitaminsLesson,
  [nutrition10BComplexBioenergeticsLesson.slug]: nutrition10BComplexBioenergeticsLesson,
  [nutrition11VitaminCTraceMineralsLesson.slug]: nutrition11VitaminCTraceMineralsLesson,
  [nutrition12MacromineralsBoneMatrixLesson.slug]: nutrition12MacromineralsBoneMatrixLesson,
}

export function getNutritionChapterLesson(identifier?: string): LessonTopic | undefined {
  if (!identifier) return undefined
  return allNutritionLessonsMap[identifier] || allNutritionLessonsBySlug[identifier]
}

export function getAllAvailableNutritionLessons(): LessonTopic[] {
  return Object.values(allNutritionLessonsMap)
}

export const batch1NutritionChapters: LessonTopic[] = [
  nutrition01EnergyBalanceLesson,
  nutrition02MacronutrientDigestionLesson,
  nutrition03CarbohydrateQualityLesson,
  nutrition04DietaryFiberScfaLesson,
]

export const batch2NutritionChapters: LessonTopic[] = [
  nutrition05DietaryLipidsLesson,
  nutrition06DietaryProteinsLesson,
  nutrition07SatietyNeuroendocrinologyLesson,
  nutrition08HydrationElectrolytesLesson,
]

export const batch3NutritionChapters: LessonTopic[] = [
  nutrition09FatSolubleVitaminsLesson,
  nutrition10BComplexBioenergeticsLesson,
  nutrition11VitaminCTraceMineralsLesson,
  nutrition12MacromineralsBoneMatrixLesson,
]

export const allCompletedNutritionChapters: LessonTopic[] = [
  ...batch1NutritionChapters,
  ...batch2NutritionChapters,
  ...batch3NutritionChapters,
]


