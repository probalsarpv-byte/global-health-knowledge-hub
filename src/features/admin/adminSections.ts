import type { MessageKey } from '../../i18n/messages'

export const adminSections = [
  { slug: 'content', labelKey: 'adminContent' },
  { slug: 'anatomy-models', labelKey: 'adminModels' },
  { slug: 'simulations', labelKey: 'adminSimulations' },
  { slug: 'nutrient-interactions', labelKey: 'adminInteractions' },
  { slug: 'calculators', labelKey: 'adminCalculators' },
  { slug: 'quizzes', labelKey: 'adminQuizzes' },
  { slug: 'users', labelKey: 'adminUsers' },
  { slug: 'feature-access', labelKey: 'adminAccess' },
  { slug: 'scientific-reviews', labelKey: 'adminReviews' },
  { slug: 'analytics', labelKey: 'adminAnalytics' },
  { slug: 'settings', labelKey: 'adminSettings' },
] satisfies { slug: string; labelKey: MessageKey }[]
