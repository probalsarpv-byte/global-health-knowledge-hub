import { ArrowRight, Atom, BookOpen, Dna, Layers3, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import type {
  AcademyId,
  BiologicalScale,
  ConceptRelationship,
  CrossAcademyConcept,
} from '../../content/concepts/conceptRegistry'

interface CrossAcademyConceptCardProps {
  concepts: CrossAcademyConcept[]
  currentAcademy: AcademyId
  currentSlug: string
  locale: 'en' | 'bn'
}

const ACADEMY_THEME: Record<
  AcademyId,
  {
    name: { en: string; bn: string }
    color: string
    bgLight: string
    borderColor: string
  }
> = {
  anatomy: {
    name: { en: 'Anatomy', bn: 'অ্যানাটমি' },
    color: 'var(--accent-anatomy, #D95D39)',
    bgLight: 'var(--accent-anatomy-pale, #FDF2E9)',
    borderColor: 'var(--accent-anatomy-border, #F6CBB7)',
  },
  metabolism: {
    name: { en: 'Metabolism', bn: 'বিপাকবিজ্ঞান' },
    color: 'var(--accent-metabolism, #D97706)',
    bgLight: 'var(--accent-metabolism-pale, #FFFBEB)',
    borderColor: 'var(--accent-metabolism-border, #FDE68A)',
  },
  nutrition: {
    name: { en: 'Nutrition', bn: 'পুষ্টিবিজ্ঞান' },
    color: 'var(--accent-nutrition, #059669)',
    bgLight: 'var(--accent-nutrition-pale, #ECFDF5)',
    borderColor: 'var(--accent-nutrition-border, #A7F3D0)',
  },
}

const RELATIONSHIP_LABELS: Record<ConceptRelationship, { en: string; bn: string }> = {
  'metabolic-substrate': { en: 'Metabolic Substrate', bn: 'বিপাকীয় সাবস্ট্রেট' },
  'anatomical-site': { en: 'Anatomical Localization', bn: 'শারীরস্থানিক অবস্থান' },
  'clinical-counterpart': { en: 'Clinical Counterpart (MNT)', bn: 'ক্লিনিক্যাল প্রয়োগ (MNT)' },
  'dietary-regulation': { en: 'Dietary Regulation', bn: 'খাদ্যতাত্ত্বিক নিয়ন্ত্রণ' },
  'biochemical-pathway': { en: 'Biochemical Pathway', bn: 'জৈবরাসায়নিক পথ' },
  'transport-mechanism': { en: 'Transport Mechanism', bn: 'পরিবহন প্রক্রিয়া' },
  pathophysiology: { en: 'Pathophysiology', bn: 'রোগতত্ত্ব' },
}

const SCALE_LABELS: Record<BiologicalScale, { en: string; bn: string }> = {
  molecular: { en: 'Molecular Scale', bn: 'আণবিক স্তর' },
  cellular: { en: 'Cellular Scale', bn: 'কোষীয় স্তর' },
  tissue: { en: 'Tissue Architecture', bn: 'টিস্যু স্তর' },
  'organ-system': { en: 'Organ System Axis', bn: 'অঙ্গতন্ত্র অক্ষ' },
  'whole-organism': { en: 'Systemic / Whole Body', bn: 'সার্বদৈহিক সমন্বয়' },
}

export function CrossAcademyConceptCard({
  concepts,
  currentAcademy,
  currentSlug,
  locale,
}: CrossAcademyConceptCardProps) {
  if (!concepts || concepts.length === 0) {
    return null
  }

  const isBn = locale === 'bn'
  const text = (en: string, bn: string) => (isBn ? bn : en)

  return (
    <section
      className="cross-academy-hub-section"
      aria-labelledby="cross-academy-heading"
      style={{
        margin: '2.5rem 0 1.5rem',
        padding: '1.75rem',
        borderRadius: 'var(--radius-lg, 14px)',
        border: '1px solid var(--sci-border, #DDE5ED)',
        background: 'var(--panel, #FFFFFF)',
        boxShadow: 'var(--shadow-sci-sm, 0 2px 6px rgba(16, 37, 63, 0.06))',
      }}
    >
      <header style={{ marginBottom: '1.5rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 10px',
            borderRadius: '9999px',
            background: 'var(--sci-teal-pale, #E6F7F5)',
            color: 'var(--sci-teal-hover, #0F766E)',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '0.6rem',
          }}
        >
          <Dna size={14} aria-hidden="true" />
          <span>{text('CROSS-ACADEMY KNOWLEDGE INTEGRATION', 'আন্তঃ-একাডেমি জ্ঞান সমন্বয়')}</span>
        </div>
        <h2
          id="cross-academy-heading"
          style={{
            fontSize: '1.35rem',
            margin: '0 0 0.5rem 0',
            fontWeight: 800,
            color: 'var(--sci-text-primary, #152B40)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Atom size={22} style={{ color: 'var(--sci-teal, #0D9488)' }} aria-hidden="true" />
          {text('Interdisciplinary Biological Bridges', 'আন্তঃবিষয়ক সমন্বিত জৈববিজ্ঞান সেতু')}
        </h2>
        <p
          style={{
            fontSize: '0.92rem',
            lineHeight: 1.55,
            color: 'var(--sci-text-secondary, #52677A)',
            margin: 0,
            maxWidth: '820px',
          }}
        >
          {text(
            'Mastering biomedical science requires synthesizing macroscopic organ architecture with cellular metabolic flux and systemic clinical dietetics. The cross-academy graph connects this lesson directly to related sister chapters.',
            'চিকিৎসা ও পুষ্টিবিজ্ঞানে পারদর্শিতার জন্য ম্যাক্রোস্কোপিক শারীরিক গঠন, কোষীয় বিপাকীয় প্রবাহ এবং রোগ নিরাময়মূলক পথ্যের সমন্বিত বোঝাপড়া প্রয়োজন। এই অধ্যায়টির সাথে সরাসরি যুক্ত অন্যান্য অ্যাকাডেমির অধ্যায়সমূহ নিচে অন্বেষণ করুন।'
          )}
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {concepts.map((concept) => {
          const scaleLabel = SCALE_LABELS[concept.biologicalScale]

          return (
            <article
              key={concept.id}
              className="cross-academy-card"
              style={{
                borderRadius: 'var(--radius-md, 10px)',
                border: '1px solid var(--sci-border, #DDE5ED)',
                background: 'var(--panel-soft, #F7FAFC)',
                padding: '1.35rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--sci-text-muted, #7E92A2)',
                      marginBottom: '4px',
                    }}
                  >
                    <Layers3 size={13} aria-hidden="true" />
                    <span>{isBn ? scaleLabel.bn : scaleLabel.en}</span>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      margin: 0,
                      color: 'var(--sci-text-primary, #152B40)',
                    }}
                  >
                    {isBn ? concept.name.bn : concept.name.en}
                  </h3>
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.55,
                  color: 'var(--sci-text-secondary, #52677A)',
                  margin: 0,
                }}
              >
                {isBn ? concept.summary.bn : concept.summary.en}
              </p>

              {/* Clinical relevance callout */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm, 6px)',
                  background: 'rgba(13, 148, 136, 0.08)',
                  borderLeft: '4px solid var(--sci-teal, #0D9488)',
                  fontSize: '0.85rem',
                  color: 'var(--sci-text-primary, #152B40)',
                  lineHeight: 1.5,
                }}
              >
                <Sparkles
                  size={18}
                  style={{ color: 'var(--sci-teal, #0D9488)', flexShrink: 0, marginTop: '2px' }}
                  aria-hidden="true"
                />
                <div>
                  <strong style={{ color: 'var(--sci-teal-hover, #0F766E)', marginRight: '6px' }}>
                    {text('Clinical & Mechanistic Link:', 'ক্লিনিক্যাল ও পদ্ধতিগত প্রাসঙ্গিকতা:')}
                  </strong>
                  <span>{isBn ? concept.clinicalRelevance.bn : concept.clinicalRelevance.en}</span>
                </div>
              </div>

              {/* Connected Chapters Grid */}
              <div>
                <h4
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--sci-text-muted, #7E92A2)',
                    margin: '0 0 0.6rem 0',
                  }}
                >
                  {text('Linked Academy Chapters', 'সংযুক্ত অ্যাকাডেমি অধ্যায়সমূহ')}
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '10px',
                  }}
                >
                  {concept.links.map((link) => {
                    const isCurrent =
                      link.academy === currentAcademy && link.chapterSlug === currentSlug
                    const theme = ACADEMY_THEME[link.academy]
                    const rel = RELATIONSHIP_LABELS[link.relationship]

                    return (
                      <div
                        key={`${link.academy}-${link.chapterSlug}`}
                        style={{
                          borderRadius: 'var(--radius-sm, 6px)',
                          border: `1px solid ${isCurrent ? theme.color : 'var(--sci-border, #DDE5ED)'}`,
                          background: isCurrent ? theme.bgLight : 'var(--panel, #FFFFFF)',
                          padding: '12px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          gap: '10px',
                          transition: 'border-color var(--trans-fast, 140ms ease)',
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '6px',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                background: theme.bgLight,
                                color: theme.color,
                                border: `1px solid ${theme.borderColor}`,
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                              }}
                            >
                              {isBn ? theme.name.bn : theme.name.en}
                            </span>
                            <span
                              style={{
                                fontSize: '0.72rem',
                                color: 'var(--sci-text-muted, #7E92A2)',
                                fontWeight: 500,
                              }}
                            >
                              {isBn ? rel.bn : rel.en}
                            </span>
                          </div>

                          <div
                            style={{
                              fontSize: '0.88rem',
                              fontWeight: 700,
                              color: 'var(--sci-text-primary, #152B40)',
                              marginBottom: '4px',
                              lineHeight: 1.35,
                            }}
                          >
                            {isBn ? link.chapterTitle.bn : link.chapterTitle.en}
                          </div>

                          <p
                            style={{
                              fontSize: '0.8rem',
                              color: 'var(--sci-text-secondary, #52677A)',
                              margin: 0,
                              lineHeight: 1.45,
                            }}
                          >
                            {isBn ? link.note.bn : link.note.en}
                          </p>
                        </div>

                        <div>
                          {isCurrent ? (
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                color: theme.color,
                              }}
                            >
                              <BookOpen size={13} aria-hidden="true" />
                              {text('Current Reading Position', 'বর্তমান পাঠ্য অধ্যায়')}
                            </span>
                          ) : (
                            <Link
                              to={link.route}
                              className="cross-academy-link-btn"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '6px 12px',
                                borderRadius: 'var(--radius-xs, 4px)',
                                background: 'var(--panel-soft, #F7FAFC)',
                                border: '1px solid var(--sci-border, #DDE5ED)',
                                color: 'var(--sci-text-primary, #152B40)',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                transition: 'all var(--trans-fast, 140ms ease)',
                              }}
                            >
                              <span>{text('Explore Sister Chapter', 'সংযুক্ত অধ্যায় পড়ুন')}</span>
                              <ArrowRight size={13} aria-hidden="true" />
                            </Link>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

