import { useState, useRef, useEffect, useMemo } from 'react'
import {
  Activity,
  ChevronLeft,
  ChevronRight,
  Eye,
  FlaskConical,
  Layers,
  Leaf,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import type { InteractiveDiagramContent, LessonLocale } from '../../content/lessonSchema'
import { useTheme } from '../../components/ThemeContext'

interface Point3D {
  x: number
  y: number
  z: number
}

// 3D perspective projection mathematics
function projectPoint(
  p: Point3D,
  rotX: number,
  rotY: number,
  zoom: number,
  viewWidth = 360,
  viewHeight = 420,
  cameraDist = 420
): { sx: number; sy: number; sz: number; scale: number } {
  // Center coordinates (0, 0, 0)
  const dx = p.x
  const dy = p.y
  const dz = p.z

  // Yaw around Y-axis
  const cosY = Math.cos(rotY)
  const sinY = Math.sin(rotY)
  const x1 = dx * cosY + dz * sinY
  const y1 = dy
  const z1 = -dx * sinY + dz * cosY

  // Pitch around X-axis
  const cosX = Math.cos(rotX)
  const sinX = Math.sin(rotX)
  const x2 = x1
  const y2 = y1 * cosX - z1 * sinX
  const z2 = y1 * sinX + z1 * cosX

  // Perspective camera projection
  const depth = cameraDist + z2
  const effectiveDepth = Math.max(60, depth)
  const k = (cameraDist / effectiveDepth) * zoom

  const sx = viewWidth / 2 + x2 * k
  const sy = viewHeight / 2 + y2 * k

  return { sx, sy, sz: z2, scale: k }
}

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
  const [viewMode, setViewMode] = useState<'3d' | 'svg' | 'illustration'>(
    diagram.has3D ? '3d' : 'svg'
  )
  const { isLab, toggleLabMode } = useTheme()
  const lang = locale === 'bn' ? 'bn' : 'en'
  const activeItem = diagram.items.find((item) => item.id === selectedId) || diagram.items[0]

  // 3D Viewport State
  const [rotX, setRotX] = useState(0.12)
  const [rotY, setRotY] = useState(0.24)
  const [zoom, setZoom] = useState(1.05)
  const [isAutoSpinning, setIsAutoSpinning] = useState(false)
  const isDraggingRef = useRef(false)
  const lastPointerRef = useRef({ x: 0, y: 0 })
  const svg3dRef = useRef<SVGSVGElement>(null)

  // Auto-spin animation loop
  useEffect(() => {
    if (!isAutoSpinning || viewMode !== '3d') return
    if (import.meta.env.MODE === 'test') return

    let animId: number
    const animate = () => {
      setRotY((prev) => (prev + 0.007) % (2 * Math.PI))
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [isAutoSpinning, viewMode])

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    isDraggingRef.current = true
    lastPointerRef.current = { x: e.clientX, y: e.clientY }
    setIsAutoSpinning(false)
    if (svg3dRef.current && typeof svg3dRef.current.setPointerCapture === 'function') {
      svg3dRef.current.setPointerCapture(e.pointerId)
    }
  }

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDraggingRef.current) return
    const dx = e.clientX - lastPointerRef.current.x
    const dy = e.clientY - lastPointerRef.current.y
    lastPointerRef.current = { x: e.clientX, y: e.clientY }

    setRotY((prev) => (prev + dx * 0.009) % (2 * Math.PI))
    setRotX((prev) => Math.max(-0.85, Math.min(0.85, prev - dy * 0.009)))
  }

  const handlePointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    isDraggingRef.current = false
    if (
      svg3dRef.current &&
      typeof svg3dRef.current.hasPointerCapture === 'function' &&
      svg3dRef.current.hasPointerCapture(e.pointerId) &&
      typeof svg3dRef.current.releasePointerCapture === 'function'
    ) {
      svg3dRef.current.releasePointerCapture(e.pointerId)
    }
  }

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

  // 3D Double Helix geometry for nutrigenomics
  const helixPoints = useMemo(() => {
    if (diagram.threeDType !== 'nutrigenomics-helix-3d') return []
    const points: Array<{
      s1: Point3D
      s2: Point3D
      basePair: string
      index: number
    }> = []
    const totalRungs = 22
    const radius = 55
    const pitch = 14
    for (let i = 0; i < totalRungs; i++) {
      const theta = i * 0.42
      const y = (i - totalRungs / 2) * pitch
      const s1: Point3D = { x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius }
      const s2: Point3D = {
        x: Math.cos(theta + Math.PI) * radius,
        y,
        z: Math.sin(theta + Math.PI) * radius,
      }
      const basePair = i % 2 === 0 ? 'A-T' : 'G-C'
      points.push({ s1, s2, basePair, index: i })
    }
    return points
  }, [diagram.threeDType])

  // 3D Mitochondrion & Bioenergetics geometry for sports bioenergetics
  const bioenergeticRings = useMemo(() => {
    if (diagram.threeDType !== 'sports-bioenergetics-3d') return []
    const rings: Array<{
      pts: Point3D[]
      color: string
      label?: string
    }> = []
    // Outer mitochondrial capsule loops
    for (let layer = -2; layer <= 2; layer++) {
      const radius = 75 - Math.abs(layer) * 14
      const y = layer * 45
      const pts: Point3D[] = []
      for (let a = 0; a < 16; a++) {
        const theta = (a / 16) * 2 * Math.PI
        pts.push({
          x: Math.cos(theta) * radius,
          y,
          z: Math.sin(theta) * (radius * 0.55),
        })
      }
      rings.push({ pts, color: layer === 0 ? '#10b981' : '#059669' })
    }
    return rings
  }, [diagram.threeDType])

  // 3D TDEE Reactor Orbital Rings (Chapter 01)
  const tdeeRings = useMemo(() => {
    if (diagram.threeDType !== 'tdee-energy-reactor-3d') return []
    const rings: Array<{ pts: Point3D[]; color: string; label: string }> = []
    const configs = [
      { r: 75, tiltX: 0, tiltY: 0, color: '#059669', label: 'BMR (60-70%)' },
      { r: 50, tiltX: 0.55, tiltY: 0.2, color: '#f59e0b', label: 'TEF (10%)' },
      { r: 90, tiltX: -0.4, tiltY: 0.6, color: '#dc2626', label: 'EAT (15-30%)' },
      { r: 65, tiltX: 0.3, tiltY: -0.5, color: '#10b981', label: 'NEAT' },
    ]
    configs.forEach((cfg) => {
      const pts: Point3D[] = []
      for (let a = 0; a < 20; a++) {
        const theta = (a / 20) * 2 * Math.PI
        const x0 = Math.cos(theta) * cfg.r
        const z0 = Math.sin(theta) * cfg.r
        const x = x0 * Math.cos(cfg.tiltY) + z0 * Math.sin(cfg.tiltY)
        const y = x0 * Math.sin(cfg.tiltX)
        const z = -x0 * Math.sin(cfg.tiltY) + z0 * Math.cos(cfg.tiltY)
        pts.push({ x, y, z })
      }
      rings.push({ pts, color: cfg.color, label: cfg.label })
    })
    return rings
  }, [diagram.threeDType])

  // 3D Microvilli Columns for Enterocyte (Chapter 02)
  const microvilliColumns = useMemo(() => {
    if (diagram.threeDType !== 'enterocyte-villus-3d') return []
    const columns: Array<{ top: Point3D; bot: Point3D; color: string }> = []
    const xOffsets = [-70, -35, 0, 35, 70]
    xOffsets.forEach((x, i) => {
      const zOffset = (i % 2 === 0 ? 1 : -1) * 15
      columns.push({
        top: { x, y: -75, z: zOffset },
        bot: { x, y: -20, z: zOffset },
        color: '#10b981',
      })
    })
    return columns
  }, [diagram.threeDType])

  // 3D Amylose Helix & Amylopectin Tree for Carbohydrate Quality (Chapter 03)
  const starchGeometry = useMemo(() => {
    if (diagram.threeDType !== 'carbohydrate-quality-3d') return { amylose: [], amylopectin: [] }
    const amylose: Point3D[] = []
    for (let i = 0; i < 20; i++) {
      const theta = i * 0.48
      const y = -75 + i * 7
      amylose.push({
        x: -45 + Math.cos(theta) * 22,
        y,
        z: Math.sin(theta) * 22,
      })
    }
    const amylopectin: Array<{ from: Point3D; to: Point3D; color: string }> = [
      { from: { x: 35, y: -70, z: 0 }, to: { x: 35, y: 65, z: 0 }, color: '#10b981' },
      { from: { x: 35, y: -40, z: 0 }, to: { x: 65, y: -65, z: 20 }, color: '#34d399' },
      { from: { x: 35, y: -10, z: 0 }, to: { x: 70, y: -25, z: -25 }, color: '#34d399' },
      { from: { x: 35, y: 20, z: 0 }, to: { x: 65, y: 5, z: 25 }, color: '#34d399' },
      { from: { x: 35, y: 45, z: 0 }, to: { x: 70, y: 35, z: -15 }, color: '#34d399' },
    ]
    return { amylose, amylopectin }
  }, [diagram.threeDType])

  // 3D Colonic Crypt Rings for Dietary Fiber & SCFA (Chapter 04)
  const colonicCryptRings = useMemo(() => {
    if (diagram.threeDType !== 'dietary-fiber-scfa-3d') return []
    const rings: Array<{ pts: Point3D[]; color: string }> = []
    const layers = [
      { y: -60, r: 70, color: '#0d9488' },
      { y: -20, r: 55, color: '#059669' },
      { y: 20, r: 45, color: '#10b981' },
      { y: 60, r: 60, color: '#2563eb' },
    ]
    layers.forEach((layer) => {
      const pts: Point3D[] = []
      for (let a = 0; a < 16; a++) {
        const theta = (a / 16) * 2 * Math.PI
        pts.push({
          x: Math.cos(theta) * layer.r,
          y: layer.y,
          z: Math.sin(theta) * (layer.r * 0.6),
        })
      }
      rings.push({ pts, color: layer.color })
    })
    return rings
  }, [diagram.threeDType])

  // 3D Spherical Lipoprotein Micelle for Dietary Lipids (Chapter 05)
  const lipoproteinRings = useMemo(() => {
    if (diagram.threeDType !== 'dietary-lipids-3d') return []
    const rings: Array<{ pts: Point3D[]; color: string }> = []
    const latitudes = [
      { y: -35, r: 48, color: '#06b6d4' },
      { y: 0, r: 65, color: '#2563eb' },
      { y: 35, r: 48, color: '#06b6d4' },
    ]
    latitudes.forEach((lat) => {
      const pts: Point3D[] = []
      for (let a = 0; a < 18; a++) {
        const theta = (a / 18) * 2 * Math.PI
        pts.push({
          x: Math.cos(theta) * lat.r,
          y: lat.y,
          z: Math.sin(theta) * lat.r,
        })
      }
      rings.push({ pts, color: lat.color })
    })
    return rings
  }, [diagram.threeDType])

  // 3D Protein Quality & mTORC1 Lysosomal Assembly for Chapter 06
  const proteinGeometry = useMemo(() => {
    if (diagram.threeDType !== 'protein-quality-mps-3d') return { helix: [], lysosome: [] }
    const helix: Point3D[] = []
    for (let i = 0; i < 20; i++) {
      const theta = i * 0.52
      const y = -75 + i * 6.5
      helix.push({
        x: -45 + Math.cos(theta) * 20,
        y,
        z: Math.sin(theta) * 20,
      })
    }
    const lysosome: Point3D[] = []
    for (let a = 0; a < 20; a++) {
      const theta = (a / 20) * 2 * Math.PI
      lysosome.push({
        x: 35 + Math.cos(theta) * 45,
        y: 40 + Math.sin(theta) * 15,
        z: Math.sin(theta) * 35,
      })
    }
    return { helix, lysosome }
  }, [diagram.threeDType])

  // 3D Satiety Neuroendocrine Axis for Chapter 07
  const satietyGeometry = useMemo(() => {
    if (diagram.threeDType !== 'satiety-neuroendocrine-3d') return { pomcArc: [], npyArc: [], vagusTract: [], gutRings: [] }
    const pomcArc: Point3D[] = []
    const npyArc: Point3D[] = []
    for (let i = 0; i <= 12; i++) {
      const theta = (i / 12) * Math.PI
      pomcArc.push({
        x: Math.cos(theta) * 55,
        y: -60 - Math.sin(theta) * 20,
        z: Math.sin(theta) * 30,
      })
      npyArc.push({
        x: -Math.cos(theta) * 55,
        y: -60 + Math.sin(theta) * 20,
        z: -Math.sin(theta) * 30,
      })
    }
    const vagusTract: Point3D[] = []
    for (let s = 0; s <= 16; s++) {
      const progress = s / 16
      const y = -50 + progress * 115
      const x = Math.sin(progress * Math.PI * 2.5) * 22
      const z = Math.cos(progress * Math.PI * 2) * 18
      vagusTract.push({ x, y, z })
    }
    const gutRings: Array<{ pts: Point3D[]; color: string }> = []
    const layers = [
      { y: 35, r: 42, color: '#ef4444' }, // Stomach fundus (ghrelin)
      { y: 65, r: 52, color: '#10b981' }, // Ileum L-cells (GLP-1/PYY)
    ]
    layers.forEach((layer) => {
      const pts: Point3D[] = []
      for (let a = 0; a < 16; a++) {
        const theta = (a / 16) * 2 * Math.PI
        pts.push({
          x: Math.cos(theta) * layer.r,
          y: layer.y,
          z: Math.sin(theta) * (layer.r * 0.55),
        })
      }
      gutRings.push({ pts, color: layer.color })
    })
    return { pomcArc, npyArc, vagusTract, gutRings }
  }, [diagram.threeDType])

  // 3D Cellular Hydration & Fluid Compartments for Chapter 08
  const hydrationGeometry = useMemo(() => {
    if (diagram.threeDType !== 'hydration-osmoregulation-3d') return { compartmentRings: [], aqpColumns: [], waterFlux: [] }
    const compartmentRings: Array<{ pts: Point3D[]; color: string }> = []
    // ICF (inner cylinder, high K+)
    ;[-35, 0, 35].forEach((y) => {
      const pts: Point3D[] = []
      for (let a = 0; a < 16; a++) {
        const theta = (a / 16) * 2 * Math.PI
        pts.push({ x: -35 + Math.cos(theta) * 35, y, z: Math.sin(theta) * 35 })
      }
      compartmentRings.push({ pts, color: '#3b82f6' })
    })
    // ECF (outer cylinder, high Na+)
    ;[-35, 0, 35].forEach((y) => {
      const pts: Point3D[] = []
      for (let a = 0; a < 16; a++) {
        const theta = (a / 16) * 2 * Math.PI
        pts.push({ x: 35 + Math.cos(theta) * 35, y, z: Math.sin(theta) * 35 })
      }
      compartmentRings.push({ pts, color: '#10b981' })
    })
    // Aquaporin-2 4-tetramer columns at the membrane center
    const aqpColumns: Array<{ top: Point3D; bot: Point3D; color: string }> = [
      { top: { x: -10, y: -55, z: -10 }, bot: { x: -10, y: 55, z: -10 }, color: '#06b6d4' },
      { top: { x: 10, y: -55, z: -10 }, bot: { x: 10, y: 55, z: -10 }, color: '#06b6d4' },
      { top: { x: -10, y: -55, z: 10 }, bot: { x: -10, y: 55, z: 10 }, color: '#06b6d4' },
      { top: { x: 10, y: -55, z: 10 }, bot: { x: 10, y: 55, z: 10 }, color: '#06b6d4' },
    ]
    // Water flux points traversing through channel
    const waterFlux: Point3D[] = []
    for (let i = 0; i < 9; i++) {
      const y = -45 + i * 11
      waterFlux.push({ x: Math.sin(i * 1.2) * 5, y, z: Math.cos(i * 1.2) * 5 })
    }
    return { compartmentRings, aqpColumns, waterFlux }
  }, [diagram.threeDType])

  // 3D Biliary Mixed Micelle & Fat-Soluble Vitamins for Chapter 09
  const fatSolubleGeometry = useMemo(() => {
    if (diagram.threeDType !== 'fat-soluble-vitamins-3d') return { micelleSpokes: [], vitaminOrbits: [] }
    const micelleSpokes: Array<{ from: Point3D; to: Point3D; color: string }> = []
    for (let a = 0; a < 16; a++) {
      const theta = (a / 16) * 2 * Math.PI
      const from: Point3D = { x: Math.cos(theta) * 18, y: Math.sin(theta) * 18, z: 0 }
      const to: Point3D = { x: Math.cos(theta) * 58, y: Math.sin(theta) * 58, z: 0 }
      micelleSpokes.push({ from, to, color: a % 2 === 0 ? '#10b981' : '#f59e0b' })
    }
    const vitaminOrbits: Array<{ pts: Point3D[]; color: string; label: string }> = [
      {
        pts: Array.from({ length: 14 }, (_, i) => {
          const th = (i / 14) * 2 * Math.PI
          return { x: -55 + Math.cos(th) * 22, y: -45 + Math.sin(th) * 15, z: Math.sin(th) * 20 }
        }),
        color: '#10b981',
        label: 'Vit A (RAR/RXR)',
      },
      {
        pts: Array.from({ length: 14 }, (_, i) => {
          const th = (i / 14) * 2 * Math.PI
          return { x: 55 + Math.cos(th) * 22, y: -40 + Math.sin(th) * 15, z: Math.sin(th) * 20 }
        }),
        color: '#2563eb',
        label: 'Vit D (VDR)',
      },
      {
        pts: Array.from({ length: 14 }, (_, i) => {
          const th = (i / 14) * 2 * Math.PI
          return { x: -50 + Math.cos(th) * 20, y: 45 + Math.sin(th) * 14, z: Math.sin(th) * 20 }
        }),
        color: '#d97706',
        label: 'Vit E (Antioxidant)',
      },
      {
        pts: Array.from({ length: 14 }, (_, i) => {
          const th = (i / 14) * 2 * Math.PI
          return { x: 50 + Math.cos(th) * 20, y: 45 + Math.sin(th) * 14, z: Math.sin(th) * 20 }
        }),
        color: '#dc2626',
        label: 'Vit K (VKOR Cycle)',
      },
    ]
    return { micelleSpokes, vitaminOrbits }
  }, [diagram.threeDType])

  // 3D B-Complex Mitochondrial & One-Carbon Hub for Chapter 10
  const bComplexGeometry = useMemo(() => {
    if (diagram.threeDType !== 'b-complex-bioenergetics-3d') return { cristaLoop: [], tcaCycle: [], oneCarbonLoop: [] }
    // Invaginated crista fold
    const cristaLoop: Point3D[] = []
    for (let s = 0; s <= 20; s++) {
      const t = s / 20
      const y = -75 + t * 150
      const x = Math.sin(t * Math.PI * 3) * 35
      const z = Math.cos(t * Math.PI * 2) * 20
      cristaLoop.push({ x, y, z })
    }
    // Krebs TCA cycle ring in matrix
    const tcaCycle: Point3D[] = []
    for (let a = 0; a < 20; a++) {
      const theta = (a / 20) * 2 * Math.PI
      tcaCycle.push({
        x: 35 + Math.cos(theta) * 45,
        y: -10 + Math.sin(theta) * 25,
        z: Math.sin(theta) * 40,
      })
    }
    // One-carbon figure-eight loop (Folate & B12)
    const oneCarbonLoop: Point3D[] = []
    for (let a = 0; a < 24; a++) {
      const theta = (a / 24) * 2 * Math.PI
      const scale = 2 / (3 - Math.cos(2 * theta))
      const x = -35 + scale * Math.cos(theta) * 32
      const y = 45 + (scale * Math.sin(2 * theta) * 20) / 2
      const z = Math.sin(theta) * 25
      oneCarbonLoop.push({ x, y, z })
    }
    return { cristaLoop, tcaCycle, oneCarbonLoop }
  }, [diagram.threeDType])

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
              {diagram.has3D && (
                <span
                  className="prototype-pill"
                  style={{
                    background: '#eff6ff',
                    color: '#2563eb',
                    borderColor: '#bfdbfe',
                  }}
                >
                  <Layers size={12} style={{ display: 'inline', marginRight: '3px' }} />
                  {locale === 'bn' ? '৩ডি অ্যানিমেশন সক্রিয়' : '3D ANIMATION ACTIVE'}
                </span>
              )}
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

      {/* Multi-Modal View Selectors */}
      <div style={{ display: 'flex', gap: '8px', margin: '12px 0 16px', flexWrap: 'wrap' }}>
        {diagram.has3D && (
          <button
            type="button"
            className={viewMode === '3d' ? 'primary-button' : 'secondary-button'}
            style={{
              padding: '6px 14px',
              fontSize: '0.82rem',
              fontWeight: 600,
              background: viewMode === '3d' ? '#2563eb' : undefined,
              color: viewMode === '3d' ? '#ffffff' : undefined,
            }}
            onClick={() => setViewMode('3d')}
          >
            <Layers size={13} style={{ display: 'inline', marginRight: '5px' }} />
            {locale === 'bn' ? 'ইন্টারঅ্যাক্টিভ ৩ডি অ্যানিমেশন' : 'Interactive 3D Animation'}
          </button>
        )}
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
        {diagram.imageUrl && (
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
            <Eye size={13} style={{ display: 'inline', marginRight: '5px' }} />
            {locale === 'bn' ? 'মেডিকেল ইনফোগ্রাফিক ও রেফারেন্স ফটো' : 'Medical Infographic / Photo'}
          </button>
        )}
      </div>

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
          {/* Main Visual Viewport (3D or 2D SVG) */}
          <div
            className="anatomy-explorer-viewport"
            style={{
              position: 'relative',
              background: isLab ? '#0b1626' : 'linear-gradient(145deg, #f0fdf4 0%, #ecfdf5 100%)',
              borderRadius: '12px',
              border: `1px solid ${isLab ? '#1f385c' : '#a7f3d0'}`,
              padding: '16px',
              boxShadow: isLab ? 'inset 0 0 30px rgba(5, 150, 105, 0.15)' : 'none',
              overflow: 'hidden',
            }}
          >
            {/* 3D Interactive Animation Mode */}
            {viewMode === '3d' && diagram.has3D ? (
              <div>
                {/* 3D Action Controls Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    marginBottom: '10px',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      type="button"
                      className="secondary-button"
                      style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                      onClick={() => setIsAutoSpinning((v) => !v)}
                      aria-label={isAutoSpinning ? 'Pause 3D rotation' : 'Play 3D rotation'}
                    >
                      {isAutoSpinning ? (
                        <>
                          <Pause size={12} style={{ display: 'inline', marginRight: '4px' }} />
                          {locale === 'bn' ? 'থামান' : 'Pause'}
                        </>
                      ) : (
                        <>
                          <Play size={12} style={{ display: 'inline', marginRight: '4px' }} />
                          {locale === 'bn' ? 'ঘোরান' : 'Spin 3D'}
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      className="secondary-button"
                      style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                      onClick={() => {
                        setRotX(0.12)
                        setRotY(0.24)
                        setZoom(1.05)
                      }}
                      aria-label="Reset 3D rotation"
                    >
                      <RotateCcw size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      {locale === 'bn' ? 'রিসেট' : 'Reset'}
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      type="button"
                      className="secondary-button"
                      style={{ padding: '4px 8px', fontSize: '0.78rem' }}
                      onClick={() => setZoom((z) => Math.min(1.5, z + 0.1))}
                      aria-label="Zoom in 3D"
                    >
                      <ZoomIn size={12} />
                    </button>
                    <button
                      type="button"
                      className="secondary-button"
                      style={{ padding: '4px 8px', fontSize: '0.78rem' }}
                      onClick={() => setZoom((z) => Math.max(0.7, z - 0.1))}
                      aria-label="Zoom out 3D"
                    >
                      <ZoomOut size={12} />
                    </button>
                  </div>
                </div>

                {/* 3D SVG Canvas with Drag-to-Rotate */}
                <svg
                  ref={svg3dRef}
                  className="anatomy-explorer-svg"
                  viewBox="0 0 360 420"
                  role="img"
                  aria-label={`${diagram.title[lang]} - 3D Interactive Animation`}
                  style={{ minHeight: '380px', cursor: 'grab', touchAction: 'none' }}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                >
                  {/* Background Grid Pattern for Lab Mode */}
                  {isLab && (
                    <pattern id="nutrient-3d-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(37, 99, 235, 0.12)" strokeWidth="0.8" />
                    </pattern>
                  )}
                  {isLab && <rect width="100%" height="100%" fill="url(#nutrient-3d-grid)" />}

                  {/* 3D Bioenergetic Reactor Scene for Sports Nutrition (Chapter 26) */}
                  {diagram.threeDType === 'sports-bioenergetics-3d' && (
                    <g className="sports-3d-scene">
                      {/* Projected Mitochondrion Capsule Rings */}
                      {bioenergeticRings.map((ring, ringIdx) => {
                        const projected = ring.pts.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathD =
                          projected.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') +
                          ' Z'
                        return (
                          <path
                            key={ringIdx}
                            d={pathD}
                            fill="none"
                            stroke={ring.color}
                            strokeWidth="1.6"
                            strokeDasharray="4 3"
                            opacity={0.65}
                          />
                        )
                      })}

                      {/* 3D Sinusoidal Substrate Crossover Ribbons */}
                      {(() => {
                        const carbPts: Point3D[] = []
                        const fatPts: Point3D[] = []
                        for (let step = 0; step <= 14; step++) {
                          const progress = step / 14
                          const x = -100 + progress * 200
                          // Carb ascending curve
                          const yCarb = 50 - progress * 100
                          const zCarb = Math.sin(progress * Math.PI) * 25
                          carbPts.push({ x, y: yCarb, z: zCarb })

                          // Fat descending curve
                          const yFat = -50 + progress * 100
                          const zFat = -Math.sin(progress * Math.PI) * 25
                          fatPts.push({ x, y: yFat, z: zFat })
                        }
                        const pCarb = carbPts.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pFat = fatPts.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const dCarb = pCarb.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        const dFat = pFat.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')

                        return (
                          <g className="crossover-3d-ribbons">
                            <path d={dCarb} fill="none" stroke="#2563eb" strokeWidth="2.8" opacity={0.85} />
                            <path d={dFat} fill="none" stroke="#d97706" strokeWidth="2.8" opacity={0.85} />
                          </g>
                        )
                      })()}
                    </g>
                  )}

                  {/* 3D Double Helix Chromatin Scene for Nutrigenomics (Chapter 27) */}
                  {diagram.threeDType === 'nutrigenomics-helix-3d' && (
                    <g className="nutrigenomics-3d-scene">
                      {/* Histone Octamer Core Spheres in 3D */}
                      {[-40, 40].map((coreY, idx) => {
                        const pCore = projectPoint({ x: 0, y: coreY, z: 0 }, rotX, rotY, zoom)
                        const radius = 24 * pCore.scale
                        return (
                          <g key={idx}>
                            <circle
                              cx={pCore.sx}
                              cy={pCore.sy}
                              r={radius}
                              fill="url(#histone-grad-3d)"
                              stroke="#059669"
                              strokeWidth="1.5"
                              opacity={0.7}
                            />
                            <text
                              x={pCore.sx}
                              y={pCore.sy + 4}
                              textAnchor="middle"
                              fill="#ffffff"
                              fontSize={Math.max(7, 9 * pCore.scale)}
                              fontWeight="700"
                            >
                              Histone Core
                            </text>
                          </g>
                        )
                      })}

                      <defs>
                        <radialGradient id="histone-grad-3d" cx="35%" cy="35%" r="65%">
                          <stop offset="0%" stopColor="#34d399" />
                          <stop offset="60%" stopColor="#059669" />
                          <stop offset="100%" stopColor="#064e3b" />
                        </radialGradient>
                      </defs>

                      {/* Rotating Double Helix Strands & Base Pairs */}
                      {helixPoints.map((rung) => {
                        const p1 = projectPoint(rung.s1, rotX, rotY, zoom)
                        const p2 = projectPoint(rung.s2, rotX, rotY, zoom)
                        const isMethylated = rung.index % 3 === 0
                        return (
                          <g key={rung.index} opacity={0.85}>
                            {/* Connecting Hydrogen Base Pair Rung */}
                            <line
                              x1={p1.sx}
                              y1={p1.sy}
                              x2={p2.sx}
                              y2={p2.sy}
                              stroke={isLab ? '#60a5fa' : '#3b82f6'}
                              strokeWidth={1.8 * ((p1.scale + p2.scale) / 2)}
                              strokeDasharray={isMethylated ? 'none' : '3 2'}
                            />
                            {/* Strand 1 Node */}
                            <circle
                              cx={p1.sx}
                              cy={p1.sy}
                              r={3.8 * p1.scale}
                              fill="#059669"
                              stroke="#ffffff"
                              strokeWidth="0.8"
                            />
                            {/* Strand 2 Node */}
                            <circle
                              cx={p2.sx}
                              cy={p2.sy}
                              r={3.8 * p2.scale}
                              fill="#2563eb"
                              stroke="#ffffff"
                              strokeWidth="0.8"
                            />
                            {/* Glowing Methyl Tag (-CH3) on CpG cytosine */}
                            {isMethylated && (
                              <g>
                                <circle
                                  cx={p1.sx - 6 * p1.scale}
                                  cy={p1.sy - 6 * p1.scale}
                                  r={4.2 * p1.scale}
                                  fill="#f59e0b"
                                  stroke="#ffffff"
                                  strokeWidth="1"
                                />
                                <text
                                  x={p1.sx - 6 * p1.scale}
                                  y={p1.sy - 8 * p1.scale}
                                  fontSize={Math.max(6, 8 * p1.scale)}
                                  fill="#d97706"
                                  fontWeight="800"
                                >
                                  -CH3
                                </text>
                              </g>
                            )}
                          </g>
                        )
                      })}
                    </g>
                  )}

                  {/* 3D TDEE Reactor Scene for Chapter 01 */}
                  {diagram.threeDType === 'tdee-energy-reactor-3d' && (
                    <g className="tdee-3d-scene">
                      {/* Central TDEE Kinetic Core */}
                      {(() => {
                        const pCore = projectPoint({ x: 0, y: 0, z: 0 }, rotX, rotY, zoom)
                        const radius = 22 * pCore.scale
                        return (
                          <g>
                            <circle
                              cx={pCore.sx}
                              cy={pCore.sy}
                              r={radius}
                              fill="url(#tdee-core-grad)"
                              stroke="#059669"
                              strokeWidth="2"
                              opacity={0.8}
                            />
                            <text
                              x={pCore.sx}
                              y={pCore.sy + 4}
                              textAnchor="middle"
                              fill="#ffffff"
                              fontSize={Math.max(7, 9 * pCore.scale)}
                              fontWeight="800"
                            >
                              TDEE CORE
                            </text>
                          </g>
                        )
                      })()}
                      <defs>
                        <radialGradient id="tdee-core-grad" cx="35%" cy="35%" r="65%">
                          <stop offset="0%" stopColor="#34d399" />
                          <stop offset="60%" stopColor="#059669" />
                          <stop offset="100%" stopColor="#064e3b" />
                        </radialGradient>
                      </defs>
                      {/* 4 Partition Orbital Rings */}
                      {tdeeRings.map((ring, ringIdx) => {
                        const projected = ring.pts.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathD =
                          projected.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') +
                          ' Z'
                        return (
                          <path
                            key={ringIdx}
                            d={pathD}
                            fill="none"
                            stroke={ring.color}
                            strokeWidth="2"
                            strokeDasharray={ringIdx % 2 === 0 ? '5 3' : 'none'}
                            opacity={0.7}
                          />
                        )
                      })}
                    </g>
                  )}

                  {/* 3D Enterocyte Microvillus Scene for Chapter 02 */}
                  {diagram.threeDType === 'enterocyte-villus-3d' && (
                    <g className="enterocyte-3d-scene">
                      {/* Microvilli Columns */}
                      {microvilliColumns.map((col, idx) => {
                        const pTop = projectPoint(col.top, rotX, rotY, zoom)
                        const pBot = projectPoint(col.bot, rotX, rotY, zoom)
                        return (
                          <line
                            key={idx}
                            x1={pTop.sx}
                            y1={pTop.sy}
                            x2={pBot.sx}
                            y2={pBot.sy}
                            stroke={col.color}
                            strokeWidth={7 * pTop.scale}
                            strokeLinecap="round"
                            opacity={0.65}
                          />
                        )
                      })}
                      {/* Basolateral Floor Line */}
                      {(() => {
                        const pLeft = projectPoint({ x: -85, y: 55, z: 0 }, rotX, rotY, zoom)
                        const pRight = projectPoint({ x: 85, y: 55, z: 0 }, rotX, rotY, zoom)
                        return (
                          <line
                            x1={pLeft.sx}
                            y1={pLeft.sy}
                            x2={pRight.sx}
                            y2={pRight.sy}
                            stroke="#047857"
                            strokeWidth="3"
                            strokeDasharray="6 4"
                            opacity={0.7}
                          />
                        )
                      })()}
                    </g>
                  )}

                  {/* 3D Starch Quality & Amylose Helix Scene for Chapter 03 */}
                  {diagram.threeDType === 'carbohydrate-quality-3d' && (
                    <g className="carbohydrate-quality-3d-scene">
                      {/* Amylose Tight Coiled Helix */}
                      {(() => {
                        const pAmy = starchGeometry.amylose.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathAmy = pAmy.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g>
                            <path d={pathAmy} fill="none" stroke="#2563eb" strokeWidth="3" opacity={0.8} />
                            {pAmy.filter((_, i) => i % 3 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3 * p.scale} fill="#60a5fa" />
                            ))}
                          </g>
                        )
                      })()}
                      {/* Amylopectin Branched Tree */}
                      {starchGeometry.amylopectin.map((b, idx) => {
                        const pFrom = projectPoint(b.from, rotX, rotY, zoom)
                        const pTo = projectPoint(b.to, rotX, rotY, zoom)
                        return (
                          <line
                            key={idx}
                            x1={pFrom.sx}
                            y1={pFrom.sy}
                            x2={pTo.sx}
                            y2={pTo.sy}
                            stroke={b.color}
                            strokeWidth={idx === 0 ? 3.5 : 2.2}
                            strokeLinecap="round"
                            opacity={0.85}
                          />
                        )
                      })}
                    </g>
                  )}

                  {/* 3D Colonic Crypt & SCFA Fermentation Scene for Chapter 04 */}
                  {diagram.threeDType === 'dietary-fiber-scfa-3d' && (
                    <g className="scfa-3d-scene">
                      {/* Colonic Crypt Concentric Rings */}
                      {colonicCryptRings.map((ring, ringIdx) => {
                        const projected = ring.pts.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathD =
                          projected.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') +
                          ' Z'
                        return (
                          <path
                            key={ringIdx}
                            d={pathD}
                            fill="none"
                            stroke={ring.color}
                            strokeWidth="2"
                            strokeDasharray={ringIdx === 0 ? 'none' : '4 3'}
                            opacity={0.65}
                          />
                        )
                      })}
                      {/* Luminal Mucus Boundary Wave */}
                      {(() => {
                        const pts: Point3D[] = []
                        for (let s = 0; s <= 10; s++) {
                          const x = -80 + s * 16
                          const y = -65 + Math.sin(s * 0.8) * 8
                          pts.push({ x, y, z: 10 })
                        }
                        const projected = pts.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const d = projected.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path d={d} fill="none" stroke="#10b981" strokeWidth="2.5" opacity={0.7} />
                      })()}
                    </g>
                  )}

                  {/* 3D Lipoprotein & Fatty Acid Bilayer Scene for Chapter 05 */}
                  {diagram.threeDType === 'dietary-lipids-3d' && (
                    <g className="lipids-3d-scene">
                      {/* Central Hydrophobic Core Sphere */}
                      {(() => {
                        const pCore = projectPoint({ x: 0, y: 0, z: 0 }, rotX, rotY, zoom)
                        const radius = 24 * pCore.scale
                        return (
                          <circle
                            cx={pCore.sx}
                            cy={pCore.sy}
                            r={radius}
                            fill="#f59e0b"
                            stroke="#d97706"
                            strokeWidth="1.5"
                            opacity={0.75}
                          />
                        )
                      })()}
                      {/* Lipoprotein Phospholipid Shell Rings */}
                      {lipoproteinRings.map((ring, ringIdx) => {
                        const projected = ring.pts.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathD =
                          projected.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') +
                          ' Z'
                        return (
                          <path
                            key={ringIdx}
                            d={pathD}
                            fill="none"
                            stroke={ring.color}
                            strokeWidth="2.2"
                            strokeDasharray="5 3"
                            opacity={0.8}
                          />
                        )
                      })}
                    </g>
                  )}

                  {/* 3D Protein Quality & mTORC1 Lysosomal Scene for Chapter 06 */}
                  {diagram.threeDType === 'protein-quality-mps-3d' && (
                    <g className="protein-quality-3d-scene">
                      {/* Alpha-Helix Polypeptide Strand */}
                      {(() => {
                        const pHelix = proteinGeometry.helix.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathHelix = pHelix.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g>
                            <path d={pathHelix} fill="none" stroke="#3b82f6" strokeWidth="2.8" opacity={0.85} />
                            {pHelix.filter((_, i) => i % 2 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={2.8 * p.scale} fill="#60a5fa" />
                            ))}
                          </g>
                        )
                      })()}
                      {/* Lysosomal Outer Limiting Membrane Ring */}
                      {(() => {
                        const pLyso = proteinGeometry.lysosome.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathLyso =
                          pLyso.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return (
                          <path d={pathLyso} fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="5 3" opacity={0.7} />
                        )
                      })()}
                      {/* mTORC1 Macro-Complex Sphere */}
                      {(() => {
                        const pMtor = projectPoint({ x: 35, y: 35, z: 15 }, rotX, rotY, zoom)
                        const radius = 20 * pMtor.scale
                        return (
                          <g>
                            <circle cx={pMtor.sx} cy={pMtor.sy} r={radius} fill="#ec4899" stroke="#db2777" strokeWidth="1.5" opacity={0.75} />
                            <text x={pMtor.sx} y={pMtor.sy + 3} textAnchor="middle" fill="#ffffff" fontSize={Math.max(6, 8 * pMtor.scale)} fontWeight="800">
                              mTORC1
                            </text>
                          </g>
                        )
                      })()}
                    </g>
                  )}

                  {/* 3D Satiety Neuroendocrine Axis Scene for Chapter 07 */}
                  {diagram.threeDType === 'satiety-neuroendocrine-3d' && (
                    <g className="satiety-3d-scene">
                      {/* Hypothalamic Arcuate Nucleus Dual Circuits */}
                      {(() => {
                        const pPomc = satietyGeometry.pomcArc.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pNpy = satietyGeometry.npyArc.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const dPomc = pPomc.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        const dNpy = pNpy.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g>
                            <path d={dPomc} fill="none" stroke="#2563eb" strokeWidth="2.5" opacity={0.8} />
                            <path d={dNpy} fill="none" stroke="#ef4444" strokeWidth="2.5" opacity={0.8} />
                          </g>
                        )
                      })()}
                      {/* Ascending Vagus Nerve Helical Tract */}
                      {(() => {
                        const pVagus = satietyGeometry.vagusTract.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const dVagus = pVagus.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path d={dVagus} fill="none" stroke="#06b6d4" strokeWidth="2.2" strokeDasharray="4 2" opacity={0.85} />
                      })()}
                      {/* Peripheral Gut Source Rings (Stomach fundus & Ileum L-cells) */}
                      {satietyGeometry.gutRings.map((ring, idx) => {
                        const projected = ring.pts.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathD =
                          projected.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path key={idx} d={pathD} fill="none" stroke={ring.color} strokeWidth="2" strokeDasharray="4 3" opacity={0.7} />
                      })}
                    </g>
                  )}

                  {/* 3D Cellular Hydration & Fluid Compartment Scene for Chapter 08 */}
                  {diagram.threeDType === 'hydration-osmoregulation-3d' && (
                    <g className="hydration-3d-scene">
                      {/* Concentric Compartment Rings (ICF blue vs ECF green) */}
                      {hydrationGeometry.compartmentRings.map((ring, idx) => {
                        const projected = ring.pts.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathD =
                          projected.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path key={idx} d={pathD} fill="none" stroke={ring.color} strokeWidth="1.8" opacity={0.65} />
                      })}
                      {/* Aquaporin-2 Channel Columns */}
                      {hydrationGeometry.aqpColumns.map((col, idx) => {
                        const pTop = projectPoint(col.top, rotX, rotY, zoom)
                        const pBot = projectPoint(col.bot, rotX, rotY, zoom)
                        return (
                          <line
                            key={idx}
                            x1={pTop.sx}
                            y1={pTop.sy}
                            x2={pBot.sx}
                            y2={pBot.sy}
                            stroke={col.color}
                            strokeWidth={4.5 * pTop.scale}
                            strokeLinecap="round"
                            opacity={0.75}
                          />
                        )
                      })}
                      {/* Water Flux Traversing Pore */}
                      {(() => {
                        const pFlux = hydrationGeometry.waterFlux.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        return pFlux.map((p, i) => (
                          <circle key={i} cx={p.sx} cy={p.sy} r={2.5 * p.scale} fill="#38bdf8" opacity={0.85} />
                        ))
                      })()}
                    </g>
                  )}

                  {/* 3D Fat-Soluble Vitamin Micelle & Nuclear Routing Scene for Chapter 09 */}
                  {diagram.threeDType === 'fat-soluble-vitamins-3d' && (
                    <g className="fat-soluble-3d-scene">
                      {/* Central Hydrophobic Core */}
                      {(() => {
                        const pCore = projectPoint({ x: 0, y: 0, z: 0 }, rotX, rotY, zoom)
                        return (
                          <circle cx={pCore.sx} cy={pCore.sy} r={18 * pCore.scale} fill="#059669" stroke="#047857" strokeWidth="1.5" opacity={0.75} />
                        )
                      })()}
                      {/* Radial Micelle Spokes */}
                      {fatSolubleGeometry.micelleSpokes.map((spoke, idx) => {
                        const pFrom = projectPoint(spoke.from, rotX, rotY, zoom)
                        const pTo = projectPoint(spoke.to, rotX, rotY, zoom)
                        return (
                          <line
                            key={idx}
                            x1={pFrom.sx}
                            y1={pFrom.sy}
                            x2={pTo.sx}
                            y2={pTo.sy}
                            stroke={spoke.color}
                            strokeWidth={1.6 * pFrom.scale}
                            opacity={0.7}
                          />
                        )
                      })}
                      {/* Specialized Vitamin Orbits (A, D, E, K) */}
                      {fatSolubleGeometry.vitaminOrbits.map((orb, idx) => {
                        const projected = orb.pts.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathD =
                          projected.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path key={idx} d={pathD} fill="none" stroke={orb.color} strokeWidth="1.8" strokeDasharray="4 2" opacity={0.8} />
                      })}
                    </g>
                  )}

                  {/* 3D B-Complex Mitochondrial & One-Carbon Scene for Chapter 10 */}
                  {diagram.threeDType === 'b-complex-bioenergetics-3d' && (
                    <g className="b-complex-3d-scene">
                      {/* Mitochondrial Crista Fold */}
                      {(() => {
                        const pCrista = bComplexGeometry.cristaLoop.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathCrista = pCrista.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path d={pathCrista} fill="none" stroke="#059669" strokeWidth="2.5" opacity={0.65} />
                      })()}
                      {/* Krebs TCA Cycle Ring in Matrix */}
                      {(() => {
                        const pTca = bComplexGeometry.tcaCycle.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathTca =
                          pTca.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return (
                          <g>
                            <path d={pathTca} fill="none" stroke="#10b981" strokeWidth="2.2" strokeDasharray="5 3" opacity={0.85} />
                            {pTca.filter((_, i) => i % 5 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3 * p.scale} fill="#f59e0b" />
                            ))}
                          </g>
                        )
                      })()}
                      {/* One-Carbon Folate-B12 Figure-Eight Infinity Loop */}
                      {(() => {
                        const pOneC = bComplexGeometry.oneCarbonLoop.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathOneC =
                          pOneC.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path d={pathOneC} fill="none" stroke="#8b5cf6" strokeWidth="2.2" opacity={0.8} />
                      })()}
                      {/* Pyruvate Dehydrogenase Complex Cluster */}
                      {(() => {
                        const pPdc = projectPoint({ x: -45, y: -45, z: 15 }, rotX, rotY, zoom)
                        return (
                          <circle cx={pPdc.sx} cy={pPdc.sy} r={16 * pPdc.scale} fill="#3b82f6" stroke="#2563eb" strokeWidth="1.5" opacity={0.75} />
                        )
                      })()}
                    </g>
                  )}

                  {/* 3D Depth-Sorted Interactive Nodes */}
                  {diagram.items
                    .map((item, idx) => {
                      const pos3d = item.position3D || {
                        x: Math.cos((idx / diagram.items.length) * 2 * Math.PI) * 75,
                        y: (idx - diagram.items.length / 2) * 50,
                        z: Math.sin((idx / diagram.items.length) * 2 * Math.PI) * 75,
                      }
                      const proj = projectPoint(pos3d, rotX, rotY, zoom)
                      return { item, idx, proj }
                    })
                    .sort((a, b) => b.proj.sz - a.proj.sz) // Depth sort back to front
                    .map(({ item, idx, proj }) => {
                      const isSelected = item.id === selectedId
                      const radius = Math.max(9, (isSelected ? 16 : 12) * proj.scale)
                      const itemColor = item.color || '#059669'

                      return (
                        <g
                          key={item.id}
                          className={`nutrient-node ${isSelected ? 'selected' : ''}`}
                          style={{ cursor: 'pointer' }}
                          tabIndex={0}
                          role="button"
                          aria-pressed={isSelected}
                          aria-label={item.label[lang]}
                          onClick={() => handleSelect(item.id, idx)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              handleSelect(item.id, idx)
                            }
                          }}
                        >
                          {/* Selection Halo */}
                          {isSelected && (
                            <circle
                              cx={proj.sx}
                              cy={proj.sy}
                              r={radius + 8}
                              fill="none"
                              stroke={isLab ? '#34d399' : '#059669'}
                              strokeWidth="2.5"
                              strokeDasharray="4 3"
                              opacity={0.9}
                            />
                          )}

                          {/* Node 3D Sphere Marker */}
                          <circle
                            cx={proj.sx}
                            cy={proj.sy}
                            r={radius}
                            fill={itemColor}
                            stroke="#ffffff"
                            strokeWidth="2"
                            filter="drop-shadow(0 2px 5px rgba(0,0,0,0.3))"
                          />

                          {/* Node Label Card Floating Adjacent */}
                          <rect
                            x={proj.sx + radius + 4}
                            y={proj.sy - 12}
                            width={Math.min(180, item.label[lang].length * 6 + 14)}
                            height={24}
                            rx="5"
                            fill={isSelected ? (isLab ? '#064e3b' : '#d1fae5') : isLab ? '#0f291e' : '#ffffff'}
                            stroke={isSelected ? '#059669' : '#a7f3d0'}
                            strokeWidth="1"
                            opacity={0.92}
                          />
                          <text
                            x={proj.sx + radius + 10}
                            y={proj.sy + 4}
                            fontSize={Math.max(9, 10 * proj.scale)}
                            fill={isSelected ? '#065f46' : '#1e293b'}
                            fontWeight={isSelected ? '700' : '600'}
                          >
                            {item.label[lang].length > 25
                              ? `${item.label[lang].substring(0, 24)}…`
                              : item.label[lang]}
                          </text>
                        </g>
                      )
                    })}
                </svg>

                <p style={{ textAlign: 'center', fontSize: '0.78rem', color: isLab ? '#94a3b8' : '#64748b', marginTop: '6px' }}>
                  {locale === 'bn'
                    ? 'মাউস টেনে ৩ডি ভিউ ঘোরান · বোতাম ব্যবহার করে জুম বা অটো-স্পিন নিয়ন্ত্রণ করুন'
                    : 'Click and drag to rotate in 3D · Use controls to zoom or toggle auto-spin'}
                </p>
              </div>
            ) : (
              /* 2D Animated SVG Schematic Mode */
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

                {/* Sports Bioenergetics Crossover Curve (Chapter 26) */}
                {diagram.svgType === 'sports-bioenergetics-trajectory' && (
                  <g className="sports-crossover-curves" opacity={isLab ? 0.85 : 0.7}>
                    <defs>
                      <linearGradient id="carb-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#93c5fd" />
                        <stop offset="100%" stopColor="#2563eb" />
                      </linearGradient>
                      <linearGradient id="fat-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#dc2626" />
                      </linearGradient>
                    </defs>
                    {/* Carb Oxidation Ascending Curve */}
                    <path
                      d="M 30 360 C 100 350, 150 250, 180 200 S 260 90, 330 65"
                      fill="none"
                      stroke="url(#carb-flow-grad)"
                      strokeWidth="3.2"
                      strokeDasharray="6 3"
                      className="animated-flow"
                    />
                    {/* Fat Oxidation Descending Curve */}
                    <path
                      d="M 30 65 C 100 80, 150 160, 180 200 S 260 320, 330 360"
                      fill="none"
                      stroke="url(#fat-flow-grad)"
                      strokeWidth="3.2"
                      strokeDasharray="6 3"
                    />
                    {/* Crossover Node Marker */}
                    <circle cx="180" cy="200" r="7" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
                    <text x="192" y="195" fill={isLab ? '#fcd34d' : '#d97706'} fontSize="9" fontWeight="700">
                      {locale === 'bn' ? 'ক্রসওভার পয়েন্ট (~৬৫% VO2max)' : 'Crossover (~65% VO2max)'}
                    </text>
                  </g>
                )}

                {/* Nutrigenomics Epigenetic Helix Waves (Chapter 27) */}
                {diagram.svgType === 'nutrigenomics-epigenetic-helix' && (
                  <g className="nutrigenomics-helix-waves" opacity={isLab ? 0.85 : 0.7}>
                    <path
                      d="M 25 80 Q 90 20, 180 80 T 335 80 M 25 80 Q 90 140, 180 80 T 335 80"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2.5"
                      strokeDasharray="5 4"
                      className="animated-flow"
                    />
                    <path
                      d="M 25 320 Q 90 260, 180 320 T 335 320 M 25 320 Q 90 380, 180 320 T 335 320"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="2.5"
                      strokeDasharray="5 4"
                      className="animated-flow"
                    />
                    <text x="35" y="45" fill={isLab ? '#60a5fa' : '#2563eb'} fontSize="9" fontWeight="700">
                      {locale === 'bn' ? 'ডিএনএ মিথাইলেশন (SAMe / CpG)' : 'DNA Methylation (SAMe / CpG)'}
                    </text>
                    <text x="210" y="395" fill={isLab ? '#34d399' : '#059669'} fontSize="9" fontWeight="700">
                      {locale === 'bn' ? 'হিস্টোন অ্যাসিটাইলেশন (HDACs)' : 'Histone Acetylation (HDACs)'}
                    </text>
                  </g>
                )}

                {/* Interactive 2D Nodes */}
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
            )}
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
