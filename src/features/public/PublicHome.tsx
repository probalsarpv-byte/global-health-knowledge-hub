import { ArrowRight, BookOpen, Bone, Dna, FlaskConical, HeartPulse, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GlobalControls } from '../../components/GlobalControls'
import { RouteFrame } from '../../components/RouteFrame'
import { useLocale } from '../../i18n/LocaleContext'

export function PublicHome() {
  const { t } = useLocale()
  return <RouteFrame><main className="public-page">
    <header className="public-header"><Link className="brand" to="/learn"><span className="brand-mark"><Dna size={21} /></span><span className="brand-name">{t('brand')}<small>{t('brandSub')}</small></span></Link><div className="public-header-actions"><Link className="public-admin-link" to="/admin">{t('adminPreview')}</Link><GlobalControls /><Link className="public-start-button" to="/learn">{t('exploreLearning')} <ArrowRight size={15} /></Link></div></header>
    <section className="public-hero"><span className="public-kicker"><span />{t('publicEyebrow')}</span><h1>{t('publicTitle')}</h1><p>{t('publicDescription')}</p><Link className="public-cta" to="/learn">{t('exploreLearning')}<ArrowRight size={17} /></Link><div className="public-ornament" aria-hidden="true"><div className="public-orbit" /><div className="public-orbit public-orbit-inner" /><span className="public-orbit-center"><Dna size={48} /></span><span className="public-sprout"><Leaf size={33} /></span><span className="public-molecule"><FlaskConical size={24} /></span></div></section>
    <section className="public-subjects"><span className="section-kicker">{t('exploreLabel')}</span><h2>{t('learningLibrary')}</h2><div className="public-subject-grid"><div><Bone size={23} /><b>{t('navAnatomy')}</b></div><div><HeartPulse size={23} /><b>{t('navPhysiology')}</b></div><div><FlaskConical size={23} /><b>{t('navBiochemistry')}</b></div><div><Leaf size={23} /><b>{t('navNutrition')}</b></div><div><BookOpen size={23} /><b>{t('navCalculators')}</b></div></div></section>
    <footer className="public-footer"><span>{t('publicNote')}</span><Link to="/learn">{t('navHome')}<ArrowRight size={14} /></Link></footer>
  </main></RouteFrame>
}
