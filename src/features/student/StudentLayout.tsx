import { useEffect, useState } from 'react'
import { Activity, ArrowDownRight, ArrowRight, Bone, Calculator, ChevronDown, Command, FlaskConical, HeartPulse, Home, Menu, Search, Settings2, Sparkles, Utensils, X } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Brand } from '../../components/Brand'
import { BackButton } from '../../components/BackButton'
import { GlobalControls } from '../../components/GlobalControls'
import { RouteFrame } from '../../components/RouteFrame'
import { useLocale } from '../../i18n/LocaleContext'
import { modules } from './moduleCatalog'

const navigation = [
  { key: 'navHome' as const, to: '/learn', icon: Home, end: true },
  { key: 'navAnatomy' as const, to: '/learn/anatomy', icon: Bone },
  { key: 'navPhysiology' as const, to: '/learn/physiology', icon: HeartPulse },
  { key: 'navBiochemistry' as const, to: '/learn/biochemistry', icon: FlaskConical },
  { key: 'navMetabolism' as const, to: '/learn/metabolism', icon: Activity },
  { key: 'navNutrition' as const, to: '/learn/nutrition', icon: Utensils },
  { key: 'navCalculators' as const, to: '/learn/calculators', icon: Calculator },
]

export function StudentLayout() {
  const { t } = useLocale()
  const [mobileNav, setMobileNav] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()
  const pathSlug = location.pathname.split('/')[2]
  const activeModule = modules.find((module) => module.slug === pathSlug)
  const searchResults = modules.filter((module) => `${t(module.nameKey)} ${t(module.detailKey)}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  const closeSearch = () => { setSearchOpen(false); setQuery('') }
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMobileNav(false); setSearchOpen(false); setQuery('') }
      if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === 'k') { event.preventDefault(); setSearchOpen((open) => !open) }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return <RouteFrame>
    {mobileNav && <button className="mobile-backdrop" aria-label={t('closeMenu')} onClick={() => setMobileNav(false)} />}
    <aside className={`sidebar${mobileNav ? ' sidebar-open' : ''}`}>
      <Brand />
      <div className="workspace-switch"><span className="workspace-avatar">F</span><span className="workspace-copy"><b>{t('brand')}</b><small>{t('studentDateLabel')}</small></span><ChevronDown size={15} /></div>
      <div className="sidebar-label">{t('navGroup')}</div>
      <nav aria-label={t('navGroup')} className="main-nav">
        {navigation.map(({ key, to, icon: Icon, end }) => <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={() => setMobileNav(false)}><Icon size={18} strokeWidth={1.8} /><span>{t(key)}</span></NavLink>)}
      </nav>
      <div className="sidebar-bottom">
        <div className="streak-card"><div className="streak-icon"><Sparkles size={16} /></div><div><b>{t('demoLabel')}</b><p>{t('progressLabel')}</p></div><ArrowDownRight size={16} className="streak-arrow" /></div>
        <NavLink className="nav-link utility" to="/admin"><Settings2 size={18} /><span>{t('navAdmin')}</span></NavLink>
        <div className="profile-row"><span className="workspace-avatar">S</span><span><b>{t('demoLabel')}</b><small>{t('studentDateLabel')}</small></span><span className="demo-badge">{t('demoLabel')}</span></div>
      </div>
    </aside>

    <main className="main-content">
      <header className="topbar">
        <div className="topbar-left"><button className="icon-button menu-button" aria-label={t('openMenu')} onClick={() => setMobileNav(true)}><Menu size={20} /></button><BackButton fallback="/" /><span className="breadcrumb">{t('navHome')} <span>/</span> <b>{activeModule ? t(activeModule.nameKey) : t('navHome')}</b></span></div>
        <div className="topbar-actions">
          <button className="search-trigger" aria-label={t('searchPlaceholder')} onClick={() => setSearchOpen((open) => !open)}><Search size={16} /><span>{t('searchPlaceholder')}</span><kbd><Command size={11} /> K</kbd></button>
          <GlobalControls />
        </div>
      </header>
      {searchOpen && <div className="search-panel"><Search size={17} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('searchPlaceholder')} aria-label={t('searchPlaceholder')} /><button aria-label={t('closeSearch')} onClick={closeSearch}><X size={17} /></button><div className="search-results">{searchResults.length ? searchResults.map((module) => <Link key={module.slug} to={`/learn/${module.slug}`} onClick={closeSearch}><module.icon size={17} />{t(module.nameKey)}<ArrowRight size={15} /></Link>) : <p>{t('searchNoResults')}</p>}</div></div>}
      <Outlet />
    </main>
  </RouteFrame>
}
