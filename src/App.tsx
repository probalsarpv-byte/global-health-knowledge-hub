import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AdminLayout } from './features/admin/AdminLayout'
import { AdminOverview } from './features/admin/AdminOverview'
import { AdminPlaceholder } from './features/admin/AdminPlaceholder'
import { adminSections } from './features/admin/adminSections'
import { LocaleProvider } from './i18n/LocaleContext'
import { PublicHome } from './features/public/PublicHome'
import { KnowledgeIndex } from './features/public/KnowledgeIndex'
import { StudentDashboard } from './features/student/StudentDashboard'
import { StudentLayout } from './features/student/StudentLayout'
import { ModulePage } from './features/student/ModulePage'
import { AnatomySubjectPage } from './features/anatomy/AnatomySubjectPage'
import { AnatomyChapterPage } from './features/anatomy/AnatomyChapterPage'
import { AnatomyLegacyLessonPage } from './features/anatomy/AnatomyLegacyLessonPage'
import { ThemeProvider } from './components/ThemeContext'

export default function App() {
  return (
    <LocaleProvider>
      <ThemeProvider>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicHome />} />
          <Route path="/knowledge" element={<KnowledgeIndex />} />
          <Route element={<StudentLayout />}>
            <Route path="/learn" element={<StudentDashboard />} />
            <Route path="/learn/anatomy" element={<AnatomySubjectPage />} />
            <Route path="/learn/anatomy/chapters/:chapter" element={<AnatomyChapterPage />} />
            <Route path="/learn/anatomy/lessons/:lesson" element={<AnatomyLegacyLessonPage />} />
            <Route path="/learn/:module" element={<ModulePage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminOverview />} />
            {adminSections.map((section) => <Route key={section.slug} path={section.slug} element={<AdminPlaceholder section={section} />} />)}
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
       </BrowserRouter>
      </ThemeProvider>
    </LocaleProvider>
  )
}
