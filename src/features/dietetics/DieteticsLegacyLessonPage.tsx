import { Navigate, useParams } from 'react-router-dom'
import { getDieteticsChapterLesson } from '../../content/chapters/chapterRegistry'
import { LessonRenderer } from '../student/LessonRenderer'

export function DieteticsLegacyLessonPage() {
  const { lesson: slug } = useParams()
  const topic = getDieteticsChapterLesson(slug)
  if (!topic) return <Navigate to="/learn/dietetics" replace />
  return (
    <main className="page-wrap anatomy-chapter-page dietetics-chapter-page">
      <LessonRenderer lesson={topic} />
    </main>
  )
}

