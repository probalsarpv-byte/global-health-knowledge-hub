import { Activity, Atom, Bone, Calculator, FlaskConical, HeartPulse } from 'lucide-react'
import type { MessageKey } from '../../i18n/messages'

export const modules = [
  { slug: 'anatomy', nameKey: 'navAnatomy', detailKey: 'anatomyDetail', count: 24, icon: Bone, tone: 'peach', progress: 68 },
  { slug: 'physiology', nameKey: 'navPhysiology', detailKey: 'physiologyDetail', count: 32, icon: HeartPulse, tone: 'lavender', progress: 42 },
  { slug: 'biochemistry', nameKey: 'navBiochemistry', detailKey: 'biochemistryDetail', count: 28, icon: FlaskConical, tone: 'mint', progress: 24 },
  { slug: 'metabolism', nameKey: 'navMetabolism', detailKey: 'metabolismDetail', count: 18, icon: Activity, tone: 'yellow', progress: 0 },
  { slug: 'nutrition', nameKey: 'navNutrition', detailKey: 'nutritionDetail', count: 26, icon: Atom, tone: 'blue', progress: 0 },
  { slug: 'calculators', nameKey: 'navCalculators', detailKey: 'calculatorsDetail', count: 8, icon: Calculator, tone: 'pink', progress: 0 },
] satisfies { slug: string; nameKey: MessageKey; detailKey: MessageKey; count: number; icon: typeof Bone; tone: string; progress: number }[]

export const moduleRoutes = [
  { slug: 'anatomy', nameKey: 'navAnatomy' }, { slug: 'physiology', nameKey: 'navPhysiology' },
  { slug: 'biochemistry', nameKey: 'navBiochemistry' }, { slug: 'metabolism', nameKey: 'navMetabolism' },
  { slug: 'nutrition', nameKey: 'navNutrition' }, { slug: 'calculators', nameKey: 'navCalculators' },
] satisfies { slug: string; nameKey: MessageKey }[]
