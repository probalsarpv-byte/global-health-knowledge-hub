import { Navigate, useParams } from 'react-router-dom'
import { lessons } from '../../content/lessons'
import { LessonRenderer } from '../student/LessonRenderer'

export function NutritionLegacyLessonPage() {
  const { lesson: slug } = useParams()
  const topic = lessons.find((item) => item.subject === 'nutrition' && item.slug === slug)
  if (!topic) return <Navigate to="/learn/nutrition" replace />
  return (
    <main className="page-wrap anatomy-chapter-page nutrition-chapter-page">
      <LessonRenderer lesson={topic} />
    </main>
  )
}
