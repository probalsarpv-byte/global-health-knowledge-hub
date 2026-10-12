import { Navigate, useParams } from 'react-router-dom'
import { lessons } from '../../content/lessons'
import { LessonRenderer } from '../student/LessonRenderer'

export function MetabolismLegacyLessonPage() {
  const { lesson: slug } = useParams()
  const topic = lessons.find((item) => item.subject === 'metabolism' && item.slug === slug)
  if (!topic) return <Navigate to="/learn/metabolism" replace />
  return <main className="page-wrap anatomy-chapter-page metabolism-chapter-page"><LessonRenderer lesson={topic} /></main>
}
