import { useState } from 'react'
import type { CellChapter, LessonLocale } from '../../content/lessonSchema'

export function CellOrganelleDiagram({ chapter, locale, onSectionSelect }: { chapter: CellChapter; locale: LessonLocale; onSectionSelect: (sectionId: string) => void }) {
  const [selectedId, setSelectedId] = useState(chapter.organelles[0]?.id ?? '')
  const selected = chapter.organelles.find((item) => item.id === selectedId) ?? chapter.organelles[0]
  const text = (value: { en: string; bn: string }) => value[locale]
  const select = (id: string) => {
    setSelectedId(id)
    const organelle = chapter.organelles.find((item) => item.id === id)
    if (organelle) onSectionSelect(organelle.sectionId)
  }
  const nodes = [
    { id: 'nucleus', x: 160, y: 126, rx: 49, ry: 39 }, { id: 'er', x: 103, y: 93, rx: 42, ry: 17 },
    { id: 'golgi', x: 222, y: 185, rx: 30, ry: 14 }, { id: 'mitochondrion', x: 84, y: 198, rx: 32, ry: 16 },
    { id: 'lysosome', x: 249, y: 102, rx: 13, ry: 13 }, { id: 'peroxisome', x: 76, y: 143, rx: 12, ry: 12 },
    { id: 'ribosome', x: 196, y: 76, rx: 9, ry: 9 }, { id: 'cytoskeleton', x: 158, y: 218, rx: 43, ry: 8 },
    { id: 'membrane', x: 45, y: 125, rx: 8, ry: 50 },
  ]
  return <section className="cell-diagram-card" aria-labelledby="cell-diagram-heading">
    <div className="cell-diagram-heading"><div><span className="section-kicker">{locale === 'bn' ? 'SCHEMATIC EXPLORATION' : 'SCHEMATIC EXPLORATION'}</span><h2 id="cell-diagram-heading">{locale === 'bn' ? 'অঙ্গাণু নির্বাচন করে জানুন' : 'Select an organelle to explore'}</h2></div><span className="diagram-disclaimer">{locale === 'bn' ? '3D model নয় · scale অনুযায়ী নয়' : 'Not a 3D model · not to scale'}</span></div>
    <div className="cell-diagram-layout">
      <svg className="cell-diagram-svg" viewBox="0 0 320 260" role="img" aria-labelledby="cell-diagram-title cell-diagram-desc">
        <title id="cell-diagram-title">{locale === 'bn' ? 'প্রাণী কোষের schematic diagram' : 'Schematic animal cell diagram'}</title>
        <desc id="cell-diagram-desc">{locale === 'bn' ? 'এই schematic diagram-এ label করা organelle নির্বাচন করুন।' : 'Select labelled organelles in this schematic diagram.'}</desc>
        <ellipse cx="160" cy="130" rx="137" ry="105" className="cell-diagram-body" />
        <path d="M35 78 Q160 20 285 78 M35 182 Q160 238 285 182" className="cell-diagram-membrane" />
        {nodes.map((node) => {
          const organelle = chapter.organelles.find((item) => item.id === node.id)
          if (!organelle) return null
          const active = organelle.id === selected?.id
          return <g key={node.id} role="button" tabIndex={0} aria-label={text(organelle.label)} aria-pressed={active} className={`cell-organelle-node node-${node.id} ${active ? 'is-selected' : ''}`} onClick={() => select(node.id)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); select(node.id) } }}>
            <ellipse cx={node.x} cy={node.y} rx={node.rx} ry={node.ry} />
            <title>{text(organelle.label)}</title>
          </g>
        })}
      </svg>
      <div className="cell-diagram-detail" aria-live="polite">
        {selected && <><span className="section-kicker">{locale === 'bn' ? 'SELECTED PART' : 'SELECTED PART'}</span><h3>{text(selected.label)}</h3><p>{text(selected.description)}</p><ul>{selected.functions.map((item) => <li key={item.en}>{text(item)}</li>)}</ul><button type="button" className="diagram-section-link" onClick={() => onSectionSelect(selected.sectionId)}>{locale === 'bn' ? 'অধ্যায়ের সংশ্লিষ্ট অংশে যান' : 'Go to linked chapter section'}</button></>}
      </div>
    </div>
    <div className="cell-diagram-key" aria-label={locale === 'bn' ? 'অঙ্গাণু তালিকা' : 'Organelle list'}>{chapter.organelles.map((organelle) => <button type="button" key={organelle.id} className={organelle.id === selected?.id ? 'is-selected' : ''} onClick={() => select(organelle.id)}>{text(organelle.label)}</button>)}</div>
  </section>
}
