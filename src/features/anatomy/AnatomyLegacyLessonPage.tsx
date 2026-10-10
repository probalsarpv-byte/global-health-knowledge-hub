import { Navigate, useParams } from 'react-router-dom'
import { lessons } from '../../content/lessons'
import { LessonRenderer } from '../student/LessonRenderer'

export function AnatomyLegacyLessonPage() {
  const { lesson: slug } = useParams()
  const topic = lessons.find((item) => item.subject === 'anatomy' && item.slug === slug)
  if (!topic) return <Navigate to="/learn/anatomy" replace />
  return <main className="page-wrap anatomy-chapter-page"><LessonRenderer lesson={topic} /></main>
}
