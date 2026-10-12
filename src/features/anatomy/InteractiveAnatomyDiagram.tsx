import { useState } from 'react'
import { FlaskConical } from 'lucide-react'
import type { InteractiveDiagramContent, LessonLocale } from '../../content/lessonSchema'
import { useTheme } from '../../components/ThemeContext'

export function InteractiveAnatomyDiagram({
  diagram,
  locale,
  onSectionSelect,
}: {
  diagram: InteractiveDiagramContent
  locale: LessonLocale
  onSectionSelect: (sectionId: string) => void
}) {
  const [selectedId, setSelectedId] = useState(diagram.items[0]?.id ?? '')
  const { isLab, toggleLabMode } = useTheme()
  const lang = locale === 'bn' ? 'bn' : 'en'
  const activeItem = diagram.items.find((item) => item.id === selectedId) || diagram.items[0]

  return (
    <section className={`anatomy-explorer${isLab ? ' lab-active' : ''}`} aria-labelledby={`diagram-heading-${diagram.id}`}>
      <header>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <div>
            <span className="section-kicker">
              {locale === 'bn' ? 'ইন্টার‌্যাক্টিভ স্কিম্যাটিক' : 'INTERACTIVE SCHEMATIC'}
            </span>
            <h2 id={`diagram-heading-${diagram.id}`}>{diagram.title[lang]}</h2>
          </div>
          <button
            type="button"
            className={`focus-mode-btn${isLab ? ' is-active' : ''}`}
            onClick={toggleLabMode}
            aria-pressed={isLab}
            title={isLab ? (locale === 'bn' ? 'স্বাভাবিক মোড' : 'Exit Lab View') : (locale === 'bn' ? 'ল্যাব মোড' : 'Lab View')}
          >
            <FlaskConical size={14} />
            <span>{isLab ? (locale === 'bn' ? 'ল্যাবরেটরি ভিউ' : 'Lab Mode Active') : (locale === 'bn' ? 'ল্যাব ভিউ' : 'Lab View')}</span>
          </button>
        </div>
        <p>{diagram.description[lang]}</p>
        <small>{diagram.disclaimer[lang]}</small>
      </header>

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
            fill={isLab ? '#081324' : '#f4f6f2'}
            stroke={isLab ? '#1a3b5c' : '#d5decb'}
            strokeWidth="2"
          />

          {/* Render interactive diagram shapes based on SVG items */}
          {diagram.items.map((item, index) => {
            const isSelected = item.id === selectedId
            const coords = item.svgCoords || {
              x: 25,
              y: 35 + index * 60,
              width: 310,
              height: 48,
              cx: 50,
              cy: 60 + index * 60,
              r: 16,
            }

            const activeFill = isLab ? '#114B5F' : '#9dbb92'
            const activeStroke = isLab ? '#22C7D6' : '#405e48'
            const defaultFill = isLab ? '#0E1F36' : (item.color || '#e4eee0')
            const defaultStroke = isLab ? '#1E3A5F' : '#8da488'
            const textColor = isLab ? (isSelected ? '#FFFFFF' : '#94A3B8') : '#243328'

            return (
              <g
                key={item.id}
                role="button"
                tabIndex={0}
                className={`anatomy-region ${isSelected ? 'selected' : ''}`}
                aria-label={item.label[lang]}
                aria-pressed={isSelected}
                onClick={() => setSelectedId(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedId(item.id)
                  }
                }}
              >
                {coords.d ? (
                  <path
                    d={coords.d}
                    fill={isSelected ? activeFill : defaultFill}
                    stroke={isSelected ? activeStroke : defaultStroke}
                    strokeWidth={isSelected ? 3 : 2}
                  />
                ) : coords.width && coords.height ? (
                  <rect
                    x={coords.x}
                    y={coords.y}
                    width={coords.width}
                    height={coords.height}
                    rx="8"
                    fill={isSelected ? activeFill : defaultFill}
                    stroke={isSelected ? activeStroke : defaultStroke}
                    strokeWidth={isSelected ? 3 : 1.5}
                  />
                ) : (
                  <circle
                    cx={coords.cx ?? 180}
                    cy={coords.cy ?? (60 + index * 50)}
                    r={coords.r ?? 22}
                    fill={isSelected ? activeFill : defaultFill}
                    stroke={isSelected ? activeStroke : defaultStroke}
                    strokeWidth={isSelected ? 3 : 2}
                  />
                )}
                <text
                  x={(coords.x ? coords.x + (coords.width ? coords.width / 2 : 150) : (coords.cx ?? 180))}
                  y={(coords.y ? coords.y + (coords.height ? coords.height / 2 + 5 : 25) : ((coords.cy ?? (60 + index * 50)) + 5))}
                  textAnchor="middle"
                  fill={textColor}
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="Manrope, sans-serif"
                >
                  {item.label[lang]}
                </text>
              </g>
            )
          })}
        </svg>

        <div className="anatomy-explorer-panel">
          <div
            className="anatomy-explorer-controls"
            role="group"
            aria-label={locale === 'bn' ? 'অংশ নির্বাচন' : 'Select structure'}
          >
            {diagram.items.map((item) => (
              <button
                type="button"
                key={item.id}
                aria-pressed={selectedId === item.id}
                onClick={() => setSelectedId(item.id)}
              >
                {item.label[lang]}
              </button>
            ))}
          </div>

          {activeItem && (
            <article className="anatomy-selection" aria-live="polite">
              <h3>{activeItem.label[lang]}</h3>
              <p>{activeItem.description[lang]}</p>
              {activeItem.details && (
                <p style={{ marginTop: '6px', fontSize: '10px', color: 'var(--muted)' }}>
                  {activeItem.details[lang]}
                </p>
              )}
              {activeItem.sectionId && (
                <button
                  type="button"
                  onClick={() => onSectionSelect(activeItem.sectionId!)}
                  style={{ marginTop: '8px' }}
                >
                  {locale === 'bn' ? 'সংশ্লিষ্ট অংশে যান' : 'Go to linked section'}
                </button>
              )}
            </article>
          )}
        </div>
      </div>
    </section>
  )
}
