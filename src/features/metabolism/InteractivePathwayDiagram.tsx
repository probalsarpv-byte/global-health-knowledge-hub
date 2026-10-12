import { useState } from 'react'
import { Activity, ChevronLeft, ChevronRight, FlaskConical, Sparkles } from 'lucide-react'
import type { InteractiveDiagramContent, LessonLocale } from '../../content/lessonSchema'
import { useTheme } from '../../components/ThemeContext'

export function InteractivePathwayDiagram({
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
      className={`anatomy-explorer pathway-explorer${isLab ? ' lab-active' : ''}`}
      aria-labelledby={`pathway-heading-${diagram.id}`}
      style={{
        borderLeft: '4px solid var(--accent-metabolism, #d97706)',
      }}
    >
      <header>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="section-kicker" style={{ color: 'var(--accent-metabolism, #d97706)', fontWeight: 700 }}>
                {locale === 'bn' ? 'বিপাকীয় গতিপথ সিমুলেশন' : 'METABOLIC PATHWAY SIMULATION'}
              </span>
              <span className="prototype-pill" style={{ background: 'var(--accent-metabolism-pale, #fffbeb)', color: 'var(--accent-metabolism, #d97706)' }}>
                <Activity size={12} style={{ display: 'inline', marginRight: '3px' }} />
                {locale === 'bn' ? 'শক্তি প্রবাহ' : 'BIOENERGETIC FLUX'}
              </span>
            </div>
            <h2 id={`pathway-heading-${diagram.id}`}>{diagram.title[lang]}</h2>
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
        className="pathway-step-navigator"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          background: isLab ? '#081324' : '#fffbeb',
          border: `1px solid ${isLab ? '#1a3b5c' : '#fde68a'}`,
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
            aria-label={locale === 'bn' ? 'আগের নোড' : 'Previous pathway node'}
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
            aria-label={locale === 'bn' ? 'পরের নোড' : 'Next pathway node'}
          >
            {locale === 'bn' ? 'পরবর্তী' : 'Next'}
            <ChevronRight size={14} />
          </button>
        </div>
        <span style={{ fontSize: '0.85rem', color: isLab ? '#94A3B8' : '#78350f', fontWeight: 600 }}>
          <Sparkles size={13} style={{ display: 'inline', marginRight: '4px' }} />
          {locale === 'bn' ? 'সক্রিয় নোড: ' : 'Active Node: '}
          <strong>{activeItem?.label[lang]}</strong>
        </span>
      </div>

      <div className="anatomy-explorer-layout">
        <svg
          className="anatomy-explorer-svg"
          viewBox="0 0 360 380"
          role="img"
          aria-labelledby={`svg-title-${diagram.id} svg-desc-${diagram.id}`}
        >
          <title id={`svg-title-${diagram.id}`}>{diagram.title[lang]}</title>
          <desc id={`svg-desc-${diagram.id}`}>{diagram.disclaimer[lang]}</desc>

          {/* Background schematic grid / frame */}
          <rect
            x="10"
            y="10"
            width="340"
            height="360"
            rx="14"
            fill={isLab ? '#081324' : '#fffdfa'}
            stroke={isLab ? '#1a3b5c' : '#fde68a'}
            strokeWidth="2"
          />

          {/* Flux connecting flow lines between nodes */}
          {diagram.items.map((_, index) => {
            if (index >= diagram.items.length - 1) return null
            const y1 = 35 + index * 58 + 48
            const y2 = 35 + (index + 1) * 58
            return (
              <line
                key={`flow-${index}`}
                x1="180"
                y1={y1}
                x2="180"
                y2={y2}
                stroke={isLab ? '#22C7D6' : '#d97706'}
                strokeWidth={index === activeIndex ? '3' : '1.5'}
                strokeDasharray={index === activeIndex ? '4 2' : undefined}
                opacity={0.7}
              />
            )
          })}

          {/* Render interactive diagram nodes */}
          {diagram.items.map((item, index) => {
            const isSelected = item.id === selectedId
            const coords = item.svgCoords || {
              x: 25,
              y: 30 + index * 58,
              width: 310,
              height: 48,
              cx: 50,
              cy: 54 + index * 58,
              r: 16,
            }

            const activeFill = isLab ? '#1E3A5F' : '#fef3c7'
            const activeStroke = isLab ? '#22C7D6' : '#d97706'
            const defaultFill = isLab ? '#0E1F36' : (item.color ? `${item.color}20` : '#fef9ee')
            const defaultStroke = isLab ? '#1E3A5F' : '#f59e0b'
            const textColor = isLab ? (isSelected ? '#FFFFFF' : '#94A3B8') : '#1e293b'

            return (
              <g
                key={item.id}
                role="button"
                tabIndex={0}
                className={`anatomy-region ${isSelected ? 'selected' : ''}`}
                aria-label={item.label[lang]}
                aria-pressed={isSelected}
                onClick={() => handleSelect(item.id, index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleSelect(item.id, index)
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                {/* Node Box */}
                <rect
                  x={coords.x ?? 25}
                  y={coords.y ?? (30 + index * 58)}
                  width={coords.width ?? 310}
                  height={coords.height ?? 48}
                  rx="10"
                  fill={isSelected ? activeFill : defaultFill}
                  stroke={isSelected ? activeStroke : defaultStroke}
                  strokeWidth={isSelected ? '2.5' : '1.5'}
                />

                {/* Left accent color badge */}
                <rect
                  x={(coords.x ?? 25) + 3}
                  y={(coords.y ?? (30 + index * 58)) + 3}
                  width="8"
                  height={(coords.height ?? 48) - 6}
                  rx="4"
                  fill={item.color || (isLab ? '#22C7D6' : '#d97706')}
                />

                {/* Step number badge circle */}
                <circle
                  cx={(coords.x ?? 25) + 26}
                  cy={(coords.y ?? (30 + index * 58)) + 24}
                  r="11"
                  fill={isSelected ? (isLab ? '#22C7D6' : '#d97706') : (isLab ? '#1a3b5c' : '#fde68a')}
                />
                <text
                  x={(coords.x ?? 25) + 26}
                  y={(coords.y ?? (30 + index * 58)) + 28}
                  textAnchor="middle"
                  fill={isSelected ? '#FFFFFF' : (isLab ? '#E2E8F0' : '#78350f')}
                  fontSize="11"
                  fontWeight="700"
                >
                  {index + 1}
                </text>

                {/* Node Label Text */}
                <text
                  x={(coords.x ?? 25) + 44}
                  y={(coords.y ?? (30 + index * 58)) + 28}
                  fill={textColor}
                  fontSize="11.5"
                  fontWeight={isSelected ? '700' : '500'}
                >
                  {item.label[lang].length > 34 ? `${item.label[lang].slice(0, 32)}...` : item.label[lang]}
                </text>
              </g>
            )
          })}
        </svg>

        {/* Selected Item Detail Panel */}
        <div className="anatomy-explorer-details" aria-live="polite">
          {activeItem ? (
            <div className="anatomy-detail-card" style={{ borderColor: isLab ? '#22C7D6' : 'var(--accent-metabolism, #d97706)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                <span className="anatomy-region-badge" style={{ background: isLab ? '#114B5F' : 'var(--accent-metabolism-pale, #fffbeb)', color: isLab ? '#22C7D6' : 'var(--accent-metabolism, #d97706)' }}>
                  {locale === 'bn' ? `ধাপ ${activeIndex + 1}` : `Step ${activeIndex + 1}`}
                </span>
                {activeItem.color && (
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: activeItem.color }}>
                    ● {locale === 'bn' ? 'এনজাইম চেকপয়েন্ট' : 'Enzyme Checkpoint'}
                  </span>
                )}
              </div>
              <h3>{activeItem.label[lang]}</h3>
              <p>{activeItem.description[lang]}</p>
              {activeItem.details && (
                <div
                  style={{
                    marginTop: '10px',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: isLab ? '#081324' : '#fffbeb',
                    border: `1px solid ${isLab ? '#1a3b5c' : '#fde68a'}`,
                    fontSize: '0.85rem',
                    color: isLab ? '#CBD5E1' : '#78350f',
                    lineHeight: 1.5,
                  }}
                >
                  <strong>{locale === 'bn' ? 'স্টয়কিওমেট্রি ও নিয়ন্ত্রণ: ' : 'Stoichiometry & Regulation: '}</strong>
                  {activeItem.details[lang]}
                </div>
              )}
              {activeItem.sectionId && (
                <button
                  type="button"
                  className="anatomy-jump-link"
                  style={{ color: 'var(--accent-metabolism, #d97706)', marginTop: '12px' }}
                  onClick={() => onSectionSelect(activeItem.sectionId!)}
                >
                  {locale === 'bn' ? 'সম্পর্কিত পাঠ্য অংশ পড়ুন →' : 'Read full section in text →'}
                </button>
              )}
            </div>
          ) : (
            <div className="anatomy-detail-placeholder">
              <p>{locale === 'bn' ? 'একটি বিপাকীয় নোড নির্বাচন করুন' : 'Select a metabolic node to view detailed biochemical telemetry.'}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
