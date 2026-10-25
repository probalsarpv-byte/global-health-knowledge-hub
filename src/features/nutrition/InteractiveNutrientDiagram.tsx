import { useState } from 'react'
import { Activity, ChevronLeft, ChevronRight, FlaskConical, ImageIcon, Leaf, Sparkles } from 'lucide-react'
import type { InteractiveDiagramContent, LessonLocale } from '../../content/lessonSchema'
import { useTheme } from '../../components/ThemeContext'

export function InteractiveNutrientDiagram({
  diagram,
  locale,
  onSectionSelect,
}: {
  diagram: InteractiveDiagramContent
  locale: LessonLocale
  onSectionSelect: (sectionId: string) => void
}) {
  const [selectedId, setSelectedId] = useState(diagram.items[0]?.id ?? '')
  const [activeIndex, setActiveIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'svg' | 'illustration'>('svg')
  const { isLab, toggleLabMode } = useTheme()
  const lang = locale === 'bn' ? 'bn' : 'en'
  const activeItem = diagram.items.find((item) => item.id === selectedId) || diagram.items[0]

  const handleSelect = (id: string, index: number) => {
    setSelectedId(id)
    setActiveIndex(index)
  }

  const handleStepChange = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < diagram.items.length) {
      setActiveIndex(newIndex)
      setSelectedId(diagram.items[newIndex].id)
    }
  }

  return (
    <section
      className={`anatomy-explorer nutrient-explorer${isLab ? ' lab-active' : ''}`}
      aria-labelledby={`nutrient-heading-${diagram.id}`}
      style={{
        borderLeft: '4px solid var(--accent-nutrition, #059669)',
      }}
    >
      <header>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="section-kicker" style={{ color: 'var(--accent-nutrition, #059669)', fontWeight: 700 }}>
                {locale === 'bn' ? 'কার্যকরী পুষ্টি ও পরিপাক সিমুলেশন' : 'FUNCTIONAL NUTRITION SIMULATION'}
              </span>
              <span
                className="prototype-pill"
                style={{
                  background: 'var(--accent-nutrition-pale, #ecfdf5)',
                  color: 'var(--accent-nutrition, #059669)',
                  borderColor: 'var(--accent-nutrition-border, #a7f3d0)',
                }}
              >
                <Leaf size={12} style={{ display: 'inline', marginRight: '3px' }} />
                {locale === 'bn' ? 'পুষ্টি শারীরবৃত্ত' : 'NUTRIENT PHYSIOLOGY'}
              </span>
            </div>
            <h2 id={`nutrient-heading-${diagram.id}`}>{diagram.title[lang]}</h2>
          </div>
          <button
            type="button"
            className={`focus-mode-btn${isLab ? ' is-active' : ''}`}
            onClick={toggleLabMode}
            aria-pressed={isLab}
            title={isLab ? (locale === 'bn' ? 'স্বাভাবিক মোড' : 'Exit Lab View') : (locale === 'bn' ? 'ল্যাব মোড' : 'Lab View')}
          >
            <FlaskConical size={14} />
            <span>{isLab ? (locale === 'bn' ? 'ল্যাবরেটরি ভিউ সক্রিয়' : 'Lab Mode Active') : (locale === 'bn' ? 'ল্যাব ভিউ' : 'Lab View')}</span>
          </button>
        </div>
        <p>{diagram.description[lang]}</p>
        <small>{diagram.disclaimer[lang]}</small>
      </header>

      {/* Stepped Pathway Progress Controls */}
      <div
        className="nutrient-step-navigator"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          background: isLab ? '#081324' : '#ecfdf5',
          border: `1px solid ${isLab ? '#1a3b5c' : '#a7f3d0'}`,
          borderRadius: '10px',
          margin: '12px 0 16px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            className="secondary-button"
            style={{ padding: '6px 12px', fontSize: '0.85rem' }}
            disabled={activeIndex === 0}
            onClick={() => handleStepChange(activeIndex - 1)}
            aria-label={locale === 'bn' ? 'পূর্ববর্তী নোড' : 'Previous nutrient node'}
          >
            <ChevronLeft size={14} />
            {locale === 'bn' ? 'পূর্ববর্তী' : 'Previous'}
          </button>
          <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>
            {new Intl.NumberFormat(lang === 'bn' ? 'bn-BD' : 'en-US').format(activeIndex + 1)} /{' '}
            {new Intl.NumberFormat(lang === 'bn' ? 'bn-BD' : 'en-US').format(diagram.items.length)}
          </span>
          <button
            type="button"
            className="secondary-button"
            style={{ padding: '6px 12px', fontSize: '0.85rem' }}
            disabled={activeIndex === diagram.items.length - 1}
            onClick={() => handleStepChange(activeIndex + 1)}
            aria-label={locale === 'bn' ? 'পরবর্তী নোড' : 'Next nutrient node'}
          >
            {locale === 'bn' ? 'পরবর্তী' : 'Next'}
            <ChevronRight size={14} />
          </button>
        </div>
        <span style={{ fontSize: '0.82rem', color: isLab ? '#a0aec0' : '#047857' }}>
          <Sparkles size={13} style={{ display: 'inline', marginRight: '4px' }} />
          {locale === 'bn'
            ? 'যে কোনো উপাদান নির্বাচন করে তার বিস্তারিত প্রক্রিয়া পর্যবেক্ষণ করুন'
            : 'Select any component to inspect its physiological mechanism'}
        </span>
      </div>

      {diagram.imageUrl && (
        <div style={{ display: 'flex', gap: '8px', margin: '12px 0 16px', flexWrap: 'wrap' }}>
          <button
            type="button"
            className={viewMode === 'svg' ? 'primary-button' : 'secondary-button'}
            style={{
              padding: '6px 14px',
              fontSize: '0.82rem',
              fontWeight: 600,
              background: viewMode === 'svg' ? 'var(--accent-nutrition, #059669)' : undefined,
              color: viewMode === 'svg' ? '#ffffff' : undefined,
            }}
            onClick={() => setViewMode('svg')}
          >
            <Activity size={13} style={{ display: 'inline', marginRight: '5px' }} />
            {locale === 'bn' ? 'অ্যানিমেটেড এসভিজি সিমুলেশন' : 'Animated SVG Schematic'}
          </button>
          <button
            type="button"
            className={viewMode === 'illustration' ? 'primary-button' : 'secondary-button'}
            style={{
              padding: '6px 14px',
              fontSize: '0.82rem',
              fontWeight: 600,
              background: viewMode === 'illustration' ? 'var(--accent-nutrition, #059669)' : undefined,
              color: viewMode === 'illustration' ? '#ffffff' : undefined,
            }}
            onClick={() => setViewMode('illustration')}
          >
            <ImageIcon size={13} style={{ display: 'inline', marginRight: '5px' }} />
            {locale === 'bn' ? 'মেডিকেল ইনফোগ্রাফিক ও রেফারেন্স ফটো' : 'Medical Infographic / Photo'}
          </button>
        </div>
      )}

      {viewMode === 'illustration' && diagram.imageUrl ? (
        <div
          style={{
            marginTop: '15px',
            background: isLab ? '#0b1626' : 'var(--panel)',
            border: `1px solid ${isLab ? '#1f385c' : 'var(--border)'}`,
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <img
            src={diagram.imageUrl}
            alt={diagram.imageCaption ? diagram.imageCaption[lang] : diagram.title[lang]}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          {diagram.imageCaption && (
            <div
              style={{
                padding: '12px 16px',
                fontSize: '0.86rem',
                lineHeight: '1.6',
                color: isLab ? '#94a3b8' : 'var(--subtle)',
                background: isLab ? '#081324' : '#f8fafc',
                borderTop: `1px solid ${isLab ? '#1f385c' : 'var(--border)'}`,
              }}
            >
              <strong style={{ color: 'var(--accent-nutrition, #059669)' }}>
                {locale === 'bn' ? 'মেডিকেল রেফারেন্স চিত্র: ' : 'Medical Reference Figure: '}
              </strong>
              {diagram.imageCaption[lang]}
            </div>
          )}
        </div>
      ) : (
        <div className="anatomy-explorer-layout">
          {/* Interactive SVG Diagram Viewport */}
          <div
            className="anatomy-explorer-viewport"
            style={{
              position: 'relative',
              background: isLab ? '#0b1626' : 'linear-gradient(145deg, #f0fdf4 0%, #ecfdf5 100%)',
              borderRadius: '12px',
              border: `1px solid ${isLab ? '#1f385c' : '#a7f3d0'}`,
              padding: '16px',
              boxShadow: isLab ? 'inset 0 0 30px rgba(5, 150, 105, 0.15)' : 'none',
            }}
          >
            <svg
              className="anatomy-explorer-svg"
              viewBox="0 0 360 420"
              role="img"
              aria-label={diagram.title[lang]}
              style={{ minHeight: '380px' }}
            >
              {/* Background Grid Pattern for Lab Mode */}
              {isLab && (
                <pattern id="nutrient-lab-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(5, 150, 105, 0.12)" strokeWidth="0.8" />
                </pattern>
              )}
              {isLab && <rect width="100%" height="100%" fill="url(#nutrient-lab-grid)" />}

              {/* Connecting Guide Lines */}
              <g className="anatomy-plane-lines" opacity={isLab ? 0.7 : 0.45}>
                <path
                  d="M 180 50 L 180 370"
                  stroke={isLab ? '#10b981' : '#059669'}
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  className="animated-flow"
                  fill="none"
                />
              </g>

              {/* Lifespan Continuum Trajectory Curve */}
              {diagram.svgType === 'lifespan-trajectory' && (
                <g className="lifespan-svg-curves" opacity={isLab ? 0.85 : 0.65}>
                  <defs>
                    <linearGradient id="lifespan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="35%" stopColor="#059669" />
                      <stop offset="65%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 25 100 C 60 40, 140 30, 200 80 S 300 280, 335 370"
                    fill="none"
                    stroke="url(#lifespan-grad)"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                    className="animated-flow"
                  />
                  {/* Subtle trajectory milestone tags */}
                  <text x="35" y="65" fill={isLab ? '#34d399' : '#059669'} fontSize="9" fontWeight="700">
                    {locale === 'bn' ? 'শৈশব ও বৃদ্ধি' : 'Growth & Infancy'}
                  </text>
                  <text x="180" y="55" fill={isLab ? '#fbbf24' : '#d97706'} fontSize="9" fontWeight="700">
                    {locale === 'bn' ? 'অস্থি সঞ্চয় ও পরিপক্কতা' : 'Peak Bone Mass'}
                  </text>
                  <text x="235" y="380" fill={isLab ? '#f87171' : '#dc2626'} fontSize="9" fontWeight="700">
                    {locale === 'bn' ? 'সারকোপেনিয়া প্রতিরোধ' : 'Sarcopenia Defense'}
                  </text>
                </g>
              )}

            {/* Interactive Nodes */}
            {diagram.items.map((item, idx) => {
              const isSelected = item.id === selectedId
              const coords = {
                x: item.svgCoords?.x ?? 25,
                y: item.svgCoords?.y ?? (30 + idx * 58),
                width: item.svgCoords?.width ?? 310,
                height: item.svgCoords?.height ?? 48,
              }
              const itemColor = item.color || '#059669'

              return (
                <g
                  key={item.id}
                  className={`nutrient-node ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(item.id, idx)}
                  style={{ cursor: 'pointer' }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={item.label[lang]}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleSelect(item.id, idx)
                    }
                  }}
                >
                  {/* Outer Glow / Halo when selected */}
                  {isSelected && (
                    <rect
                      x={coords.x - 4}
                      y={coords.y - 4}
                      width={coords.width + 8}
                      height={coords.height + 8}
                      rx="10"
                      fill="none"
                      stroke={isLab ? '#34d399' : '#059669'}
                      strokeWidth="2.5"
                      strokeDasharray={isLab ? '6 3' : 'none'}
                      opacity={0.85}
                    />
                  )}

                  {/* Node Body Card */}
                  <rect
                    x={coords.x}
                    y={coords.y}
                    width={coords.width}
                    height={coords.height}
                    rx="8"
                    fill={isSelected ? (isLab ? '#064e3b' : '#d1fae5') : isLab ? '#0f291e' : '#ffffff'}
                    stroke={isSelected ? (isLab ? '#34d399' : '#059669') : isLab ? '#1e4033' : '#a7f3d0'}
                    strokeWidth={isSelected ? '2' : '1'}
                  />

                  {/* Accent Pill Dot / Marker */}
                  <circle
                    cx={coords.x + 18}
                    cy={coords.y + coords.height / 2}
                    r={isSelected ? 7 : 5}
                    fill={itemColor}
                    stroke={isSelected ? '#ffffff' : 'none'}
                    strokeWidth="1.5"
                  />

                  {/* Node Label Text */}
                  <text
                    x={coords.x + 36}
                    y={coords.y + coords.height / 2 + 4}
                    fill={isSelected ? (isLab ? '#ecfdf5' : '#065f46') : isLab ? '#d1fae5' : '#1e293b'}
                    fontSize="11"
                    fontFamily="inherit"
                    fontWeight={isSelected ? '700' : '600'}
                  >
                    {item.label[lang].length > 40
                      ? `${item.label[lang].substring(0, 39)}…`
                      : item.label[lang]}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Detailed Inspector Panel */}
        <div className="anatomy-explorer-panel">
          <div className="anatomy-explorer-controls">
            {diagram.items.map((item, idx) => (
              <button
                type="button"
                key={item.id}
                aria-pressed={item.id === selectedId}
                onClick={() => handleSelect(item.id, idx)}
                style={{
                  borderLeft: item.id === selectedId ? '3px solid var(--accent-nutrition, #059669)' : undefined,
                }}
              >
                {item.label[lang]}
              </button>
            ))}
          </div>

          {activeItem && (
            <div className="anatomy-selection">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: activeItem.color || 'var(--accent-nutrition, #059669)',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--accent-nutrition, #059669)',
                    textTransform: 'uppercase',
                  }}
                >
                  {locale === 'bn' ? 'বিশ্লেষণ ও শারীরবৃত্তীয় প্রভাব' : 'PHYSIOLOGICAL MECHANISM'}
                </span>
              </div>
              <h3>{activeItem.label[lang]}</h3>
              <p>{activeItem.description[lang]}</p>

              {activeItem.details && (
                <div
                  style={{
                    margin: '12px 0',
                    padding: '10px 12px',
                    background: isLab ? '#081324' : '#f0fdf4',
                    border: `1px solid ${isLab ? '#1f385c' : '#bbf7d0'}`,
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    lineHeight: '1.6',
                  }}
                >
                  <strong>{locale === 'bn' ? 'আণবিক ও ক্লিনিক্যাল তথ্য: ' : 'Molecular & Clinical Details: '}</strong>
                  <span>{activeItem.details[lang]}</span>
                </div>
              )}

              {activeItem.sectionId && (
                <button
                  type="button"
                  className="primary-button"
                  style={{
                    marginTop: '8px',
                    padding: '8px 14px',
                    background: 'var(--accent-nutrition, #059669)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                  onClick={() => onSectionSelect(activeItem.sectionId!)}
                >
                  <Activity size={14} style={{ display: 'inline', marginRight: '6px' }} />
                  {locale === 'bn' ? 'অধ্যায়ের প্রাসঙ্গিক অংশে যান' : 'Jump to Related Section'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      )}
    </section>
  )
}
