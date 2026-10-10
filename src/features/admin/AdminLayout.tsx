import { useEffect, useState } from 'react'
import { Activity, Atom, Bone, Calculator, ChevronLeft, CircleHelp, FlaskConical, Home, Menu, Settings2, ShieldCheck, Users } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'
import { GlobalControls } from '../../components/GlobalControls'
import { RouteFrame } from '../../components/RouteFrame'
import { useLocale } from '../../i18n/LocaleContext'
import { adminSections } from './adminSections'

const sectionIcons = [FlaskConical, Bone, Activity, Atom, Calculator, CircleHelp, Users, ShieldCheck, FlaskConical, Activity, Settings2]

export function AdminLayout() {
  const { t } = useLocale()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const backFallback = location.pathname.replace(/\/$/, '') === '/admin' ? '/' : '/admin'
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])
  return <RouteFrame>
    {open && <button className="admin-backdrop" aria-label={t('closeMenu')} onClick={() => setOpen(false)} />}
    <aside className={`admin-sidebar${open ? ' admin-sidebar-open' : ''}`}>
      <Link className="admin-brand" to="/admin"><span className="admin-brand-mark"><ShieldCheck size={20} /></span><span><b>{t('adminTitle')}</b><small>{t('adminBrandLabel')}</small></span></Link>
      <nav className="admin-nav" aria-label={t('adminSidebar')}>
        <NavLink to="/admin" end className={({ isActive }) => `admin-nav-link${isActive ? ' active' : ''}`} onClick={() => setOpen(false)}><Home size={17} />{t('adminOverview')}</NavLink>
        <span className="admin-nav-label">{t('adminManagement')}</span>
        {adminSections.map(({ slug, labelKey }, index) => { const Icon = sectionIcons[index]; return <NavLink key={slug} to={`/admin/${slug}`} className={({ isActive }) => `admin-nav-link${isActive ? ' active' : ''}`} onClick={() => setOpen(false)}><Icon size={17} />{t(labelKey)}</NavLink> })}
      </nav>
      <Link className="admin-back-link" to="/learn"><ChevronLeft size={16} />{t('navHome')}</Link>
      <Link className="admin-website-link" to="/"><Home size={16} />{t('backToMainWebsite')}</Link>
    </aside>
    <main className="admin-main">
      <header className="admin-topbar"><div className="admin-topbar-left"><button className="icon-button admin-menu-button" aria-label={t('openMenu')} onClick={() => setOpen(true)}><Menu size={19} /></button><BackButton fallback={backFallback} /></div><div className="admin-topbar-right"><Link className="admin-header-website" to="/"><Home size={15} />{t('backToMainWebsite')}</Link><GlobalControls /></div></header>
      <div className="admin-content"><Outlet /></div>
    </main>
  </RouteFrame>
}
