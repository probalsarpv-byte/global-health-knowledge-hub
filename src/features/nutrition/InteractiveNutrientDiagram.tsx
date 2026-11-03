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
import type { ContentDepth, InteractiveDiagramContent, LessonLocale } from '../../content/lessonSchema'
import { useTheme } from '../../components/ThemeContext'
import { True3DViewer } from '../../components/visualization'

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
  currentDepth = 'academic',
}: {
  diagram: InteractiveDiagramContent
  locale: LessonLocale
  onSectionSelect: (sectionId: string) => void
  currentDepth?: ContentDepth
}) {
  const hasTrue3D = diagram.threeDType === 'enterocyte-villus-3d'
  const [selectedId, setSelectedId] = useState(diagram.items[0]?.id ?? '')
  const [activeIndex, setActiveIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'true-3d' | '3d' | 'svg' | 'illustration'>(
    hasTrue3D ? 'true-3d' : diagram.has3D ? '3d' : 'svg'
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

  // 3D Antioxidant Metalloenzyme Redox Hierarchy for Chapter 11
  const antioxidantGeometry = useMemo(() => {
    if (diagram.threeDType !== 'antioxidant-redox-3d') return { cascadeFunnel: [], collagenTripleHelix: [] }
    const cascadeFunnel: Point3D[] = []
    for (let s = 0; s <= 24; s++) {
      const t = s / 24
      const radius = 18 + (1 - t) * 55
      const angle = t * Math.PI * 4
      const y = -65 + t * 130
      cascadeFunnel.push({
        x: Math.cos(angle) * radius,
        y,
        z: Math.sin(angle) * radius,
      })
    }
    const collagenTripleHelix: Point3D[][] = [[], [], []]
    for (let strand = 0; strand < 3; strand++) {
      const phase = (strand * 2 * Math.PI) / 3
      for (let i = 0; i <= 20; i++) {
        const t = i / 20
        const y = -50 + t * 100
        const theta = t * Math.PI * 3 + phase
        collagenTripleHelix[strand].push({
          x: 45 + Math.cos(theta) * 16,
          y,
          z: Math.sin(theta) * 16,
        })
      }
    }
    return { cascadeFunnel, collagenTripleHelix }
  }, [diagram.threeDType])

  // 3D Hydroxyapatite Crystal & Bone Remodeling Matrix for Chapter 12
  const boneMatrixGeometry = useMemo(() => {
    if (diagram.threeDType !== 'bone-matrix-hydroxyapatite-3d') return { hexagonalLattice: { top: [], bottom: [] }, collagenFibrils: [], remodelingLoop: [] }
    const hexagonalLattice: { top: Point3D[]; bottom: Point3D[] } = { top: [], bottom: [] }
    for (let i = 0; i < 6; i++) {
      const theta = (i / 6) * 2 * Math.PI
      hexagonalLattice.top.push({
        x: Math.cos(theta) * 35,
        y: -45,
        z: Math.sin(theta) * 35,
      })
      hexagonalLattice.bottom.push({
        x: Math.cos(theta) * 35,
        y: 45,
        z: Math.sin(theta) * 35,
      })
    }
    const collagenFibrils: Point3D[][] = []
    const offsets = [-50, -25, 25, 50]
    offsets.forEach((offX) => {
      const fibril: Point3D[] = []
      for (let s = 0; s <= 10; s++) {
        const y = -60 + (s / 10) * 120
        fibril.push({ x: offX, y, z: -20 })
      }
      collagenFibrils.push(fibril)
    })
    const remodelingLoop: Point3D[] = []
    for (let i = 0; i < 24; i++) {
      const theta = (i / 24) * 2 * Math.PI
      remodelingLoop.push({
        x: Math.cos(theta) * 65,
        y: Math.sin(theta) * 25,
        z: Math.sin(theta * 2) * 20,
      })
    }
    return { hexagonalLattice, collagenFibrils, remodelingLoop }
  }, [diagram.threeDType])

  // 3D Duodenal Enterocyte & Ferritin Nanocage Iron Flux for Chapter 13
  const ironBiologyGeometry = useMemo(() => {
    if (diagram.threeDType !== 'iron-biology-hepcidin-3d') return { ferritinShell: [], apicalBorder: [], ferroportinPore: [] }
    const ferritinShell: Point3D[][] = []
    const rings = [-20, 0, 20]
    rings.forEach((ringY) => {
      const ringRadius = Math.sqrt(Math.max(0, 32 * 32 - ringY * ringY))
      const ringPts: Point3D[] = []
      for (let i = 0; i < 16; i++) {
        const theta = (i / 16) * 2 * Math.PI
        ringPts.push({
          x: Math.cos(theta) * ringRadius,
          y: ringY,
          z: Math.sin(theta) * ringRadius,
        })
      }
      ferritinShell.push(ringPts)
    })
    const apicalBorder: Point3D[] = []
    for (let i = 0; i <= 20; i++) {
      const x = -70 + (i / 20) * 140
      const y = -60 + (i % 2 === 0 ? -12 : 0)
      apicalBorder.push({ x, y, z: 20 })
    }
    const ferroportinPore: Point3D[] = []
    for (let i = 0; i < 16; i++) {
      const theta = (i / 16) * 2 * Math.PI
      ferroportinPore.push({
        x: 60 + Math.cos(theta) * 18,
        y: 50,
        z: Math.sin(theta) * 18,
      })
    }
    return { ferritinShell, apicalBorder, ferroportinPore }
  }, [diagram.threeDType])

  // 3D Gut Mucosal Barrier & Tight Junction Scaffold for Chapter 14
  const gutBarrierGeometry = useMemo(() => {
    if (diagram.threeDType !== 'gut-barrier-junctions-3d') return { mucusWaves: [], junctionGrid: [], actomyosinBelt: [] }
    const mucusWaves: Point3D[][] = []
    for (let layer = 0; layer < 2; layer++) {
      const yBase = -65 + layer * 20
      const wave: Point3D[] = []
      for (let i = 0; i <= 16; i++) {
        const x = -75 + (i / 16) * 150
        const y = yBase + Math.sin(i * 0.8) * 6
        const z = Math.cos(i * 0.8) * 15
        wave.push({ x, y, z })
      }
      mucusWaves.push(wave)
    }
    const junctionGrid: Point3D[][] = []
    for (let row = 0; row < 4; row++) {
      const y = -15 + row * 18
      const rowPts: Point3D[] = []
      for (let col = 0; col < 6; col++) {
        const x = -40 + col * 16
        const z = ((col + row) % 2 === 0 ? 8 : -8)
        rowPts.push({ x, y, z })
      }
      junctionGrid.push(rowPts)
    }
    const actomyosinBelt: Point3D[] = []
    for (let i = 0; i < 20; i++) {
      const theta = (i / 20) * 2 * Math.PI
      actomyosinBelt.push({
        x: Math.cos(theta) * 55,
        y: 45 + Math.sin(theta) * 10,
        z: Math.sin(theta) * 30,
      })
    }
    return { mucusWaves, junctionGrid, actomyosinBelt }
  }, [diagram.threeDType])

  // 3D Gut Microbiome Metagenomic Colon & Metabolite Hub for Chapter 15
  const microbiomeGeometry = useMemo(() => {
    if (diagram.threeDType !== 'microbiome-metagenomics-3d') return { lumenRings: [], taxaSpheres: [], metaboliteStreams: [] }
    const lumenRings: Point3D[][] = []
    const yLevels = [-60, -20, 20, 60]
    yLevels.forEach((y) => {
      const ring: Point3D[] = []
      for (let i = 0; i < 18; i++) {
        const theta = (i / 18) * 2 * Math.PI
        ring.push({
          x: Math.cos(theta) * 60,
          y,
          z: Math.sin(theta) * 35,
        })
      }
      lumenRings.push(ring)
    })
    const taxaSpheres: { center: Point3D; color: string; radius: number }[] = [
      { center: { x: -35, y: -30, z: 15 }, color: '#10b981', radius: 14 },
      { center: { x: 35, y: -25, z: -15 }, color: '#3b82f6', radius: 13 },
      { center: { x: -20, y: 30, z: -20 }, color: '#f59e0b', radius: 10 },
      { center: { x: 25, y: 35, z: 20 }, color: '#8b5cf6', radius: 11 },
    ]
    const metaboliteStreams: Point3D[][] = []
    for (let s = 0; s < 3; s++) {
      const angle = (s * 2 * Math.PI) / 3
      const stream: Point3D[] = []
      for (let p = 0; p <= 12; p++) {
        const t = p / 12
        stream.push({
          x: Math.cos(angle) * (10 + t * 45),
          y: -40 + t * 80,
          z: Math.sin(angle) * (10 + t * 30),
        })
      }
      metaboliteStreams.push(stream)
    }
    return { lumenRings, taxaSpheres, metaboliteStreams }
  }, [diagram.threeDType])

  // 3D Prebiotics, Probiotics, Synbiotics & FODMAP Continuum for Chapter 16
  const bioticGeometry = useMemo(() => {
    if (diagram.threeDType !== 'prebiotics-probiotics-synbiotics-3d') return { prebioticChains: [], probioticBacilli: [], scfaBubbles: [], fodmapWave: [] }
    const prebioticChains: Point3D[][] = []
    for (let c = 0; c < 2; c++) {
      const chain: Point3D[] = []
      const offX = -55 + c * 30
      for (let i = 0; i <= 16; i++) {
        const t = i / 16
        chain.push({
          x: offX + Math.sin(t * Math.PI * 3) * 12,
          y: -60 + t * 65,
          z: Math.cos(t * Math.PI * 3) * 12,
        })
      }
      prebioticChains.push(chain)
    }
    const probioticBacilli: { start: Point3D; end: Point3D; color: string }[] = [
      { start: { x: 30, y: -45, z: 15 }, end: { x: 55, y: -35, z: 25 }, color: '#10b981' },
      { start: { x: 40, y: -10, z: -20 }, end: { x: 65, y: 0, z: -10 }, color: '#059669' },
      { start: { x: 20, y: 20, z: 10 }, end: { x: 45, y: 35, z: 20 }, color: '#34d399' },
    ]
    const scfaBubbles: Point3D[] = [
      { x: -20, y: -20, z: 0 },
      { x: -10, y: 5, z: 15 },
      { x: 5, y: -15, z: -10 },
      { x: -15, y: 30, z: -15 },
      { x: 10, y: 40, z: 5 },
    ]
    const fodmapWave: Point3D[] = []
    for (let i = 0; i <= 20; i++) {
      const t = i / 20
      fodmapWave.push({
        x: -70 + t * 140,
        y: 60 + Math.sin(t * Math.PI * 4) * 12,
        z: Math.cos(t * Math.PI * 4) * 15,
      })
    }
    return { prebioticChains, probioticBacilli, scfaBubbles, fodmapWave }
  }, [diagram.threeDType])

  // 3D Food Adverse Reactions, Gliadin & Celiac Enteropathy for Chapter 17
  const foodAdverseGeometry = useMemo(() => {
    if (diagram.threeDType !== 'food-intolerance-celiac-3d') return { villousAtrophyProfile: [], gliadinHelix: [], hlaCleft: [], mastCellRings: [] }
    const villousAtrophyProfile: Point3D[] = []
    for (let i = 0; i <= 24; i++) {
      const t = i / 24
      const x = -75 + t * 150
      const height = (1 - t * 0.75) * 35
      const y = -35 + Math.sin(i * 1.3) * height
      villousAtrophyProfile.push({ x, y, z: Math.cos(i * 1.3) * 10 })
    }
    const gliadinHelix: Point3D[] = []
    for (let i = 0; i <= 22; i++) {
      const t = i / 22
      gliadinHelix.push({
        x: -35 + Math.cos(t * Math.PI * 4) * 20,
        y: 10 + t * 50,
        z: Math.sin(t * Math.PI * 4) * 20,
      })
    }
    const hlaCleft: Point3D[] = []
    for (let i = 0; i < 8; i++) {
      const theta = (i / 8) * 2 * Math.PI
      hlaCleft.push({
        x: 45 + Math.cos(theta) * 24,
        y: 35 + Math.sin(theta) * 15,
        z: Math.sin(theta * 2) * 12,
      })
    }
    const mastCellRings: Point3D[] = []
    for (let i = 0; i < 16; i++) {
      const theta = (i / 16) * 2 * Math.PI
      mastCellRings.push({
        x: -45 + Math.cos(theta) * 22,
        y: 50 + Math.sin(theta) * 22,
        z: Math.sin(theta) * 15,
      })
    }
    return { villousAtrophyProfile, gliadinHelix, hlaCleft, mastCellRings }
  }, [diagram.threeDType])

  // 3D Pathophysiology of T2D & DiRECT Twin Cycles for Chapter 18
  const obesityT2DGeometry = useMemo(() => {
    if (diagram.threeDType !== 'obesity-t2d-mnt-3d') return { hypertrophicAdipocyte: [], twinCycleHepatic: [], twinCyclePancreatic: [], isletCore: [] }
    const hypertrophicAdipocyte: Point3D[][] = []
    const yRings = [-22, 0, 22]
    yRings.forEach((y) => {
      const r = Math.sqrt(Math.max(0, 36 * 36 - y * y))
      const ring: Point3D[] = []
      for (let i = 0; i < 18; i++) {
        const theta = (i / 18) * 2 * Math.PI
        ring.push({
          x: -45 + Math.cos(theta) * r,
          y: -25 + y,
          z: Math.sin(theta) * r,
        })
      }
      hypertrophicAdipocyte.push(ring)
    })
    const twinCycleHepatic: Point3D[] = []
    for (let i = 0; i < 20; i++) {
      const theta = (i / 20) * 2 * Math.PI
      twinCycleHepatic.push({
        x: 35 + Math.cos(theta) * 35,
        y: -35 + Math.sin(theta) * 20,
        z: Math.sin(theta) * 25,
      })
    }
    const twinCyclePancreatic: Point3D[] = []
    for (let i = 0; i < 20; i++) {
      const theta = (i / 20) * 2 * Math.PI
      twinCyclePancreatic.push({
        x: 35 + Math.cos(theta) * 35,
        y: 25 + Math.sin(theta) * 20,
        z: -Math.sin(theta) * 25,
      })
    }
    const isletCore: Point3D[] = []
    for (let i = 0; i < 12; i++) {
      const theta = (i / 12) * 2 * Math.PI
      isletCore.push({
        x: -45 + Math.cos(theta) * 18,
        y: 45 + Math.sin(theta) * 18,
        z: Math.sin(theta) * 12,
      })
    }
    return { hypertrophicAdipocyte, twinCycleHepatic, twinCyclePancreatic, isletCore }
  }, [diagram.threeDType])

  // 3D Cardiovascular Atherogenesis & Hemodynamics for Chapter 19
  const cvdAtheromaGeometry = useMemo(() => {
    if (diagram.threeDType !== 'cardiovascular-apob-atheroma-3d') return { arterialLumen: [], proteoglycanMatrix: [], foamCellCluster: [], dashDilationRing: [] }
    const arterialLumen: Point3D[][] = []
    const yLevels = [-55, -20, 20, 55]
    yLevels.forEach((y) => {
      const arc: Point3D[] = []
      for (let i = 0; i <= 14; i++) {
        const theta = (i / 14) * Math.PI
        arc.push({
          x: Math.cos(theta) * 65,
          y,
          z: Math.sin(theta) * 35,
        })
      }
      arterialLumen.push(arc)
    })
    const proteoglycanMatrix: Point3D[][] = []
    for (let p = 0; p < 3; p++) {
      const strand: Point3D[] = []
      const offX = -35 + p * 35
      for (let s = 0; s <= 10; s++) {
        strand.push({
          x: offX + Math.sin(s * 1.2) * 14,
          y: -40 + s * 8,
          z: -15 + Math.cos(s * 1.2) * 12,
        })
      }
      proteoglycanMatrix.push(strand)
    }
    const foamCellCluster: { center: Point3D; radius: number; color: string }[] = [
      { center: { x: -20, y: 15, z: 10 }, radius: 15, color: '#ef4444' },
      { center: { x: 10, y: 25, z: -10 }, radius: 13, color: '#f97316' },
      { center: { x: -10, y: 35, z: 15 }, radius: 11, color: '#dc2626' },
    ]
    const dashDilationRing: Point3D[] = []
    for (let i = 0; i < 24; i++) {
      const theta = (i / 24) * 2 * Math.PI
      dashDilationRing.push({
        x: Math.cos(theta) * 55,
        y: 50 + Math.sin(theta) * 10,
        z: Math.sin(theta) * 35,
      })
    }
    return { arterialLumen, proteoglycanMatrix, foamCellCluster, dashDilationRing }
  }, [diagram.threeDType])

  // 3D Renal Hyperfiltration & FGF23-Klotho Nephron for Chapter 20
  const renalNephronGeometry = useMemo(() => {
    if (diagram.threeDType !== 'renal-nephron-fgf23-3d') return { capillaryTuft: [], arterioles: [], podocyteSlits: [], fgf23Orbit: [] }
    const capillaryTuft: Point3D[][] = []
    for (let l = 0; l < 4; l++) {
      const loop: Point3D[] = []
      const angle = (l / 4) * 2 * Math.PI
      for (let s = 0; s <= 12; s++) {
        const t = s / 12
        loop.push({
          x: -35 + Math.cos(angle) * (t * 28),
          y: -35 + Math.sin(t * Math.PI) * 22,
          z: Math.sin(angle) * (t * 28),
        })
      }
      capillaryTuft.push(loop)
    }
    const arterioles: { start: Point3D; end: Point3D; width: number; color: string }[] = [
      { start: { x: -75, y: -65, z: 20 }, end: { x: -45, y: -45, z: 10 }, width: 4.5, color: '#f97316' },
      { start: { x: -25, y: -45, z: -10 }, end: { x: 5, y: -65, z: -20 }, width: 2.2, color: '#dc2626' },
    ]
    const podocyteSlits: Point3D[][] = []
    for (let row = 0; row < 3; row++) {
      const slit: Point3D[] = []
      const y = -10 + row * 16
      for (let c = 0; c <= 10; c++) {
        slit.push({
          x: -60 + c * 12,
          y: y + (c % 2 === 0 ? 5 : -5),
          z: (c % 2 === 0 ? 8 : -8),
        })
      }
      podocyteSlits.push(slit)
    }
    const fgf23Orbit: Point3D[] = []
    for (let i = 0; i < 22; i++) {
      const theta = (i / 22) * 2 * Math.PI
      fgf23Orbit.push({
        x: 40 + Math.cos(theta) * 35,
        y: 20 + Math.sin(theta) * 25,
        z: Math.sin(theta * 2) * 20,
      })
    }
    return { capillaryTuft, arterioles, podocyteSlits, fgf23Orbit }
  }, [diagram.threeDType])

  // 3D Hepatobiliary MASLD & Gut Quiescence for Chapter 21
  const hepatobiliaryGeometry = useMemo(() => {
    if (diagram.threeDType !== 'hepatobiliary-masld-ibd-3d') return { hepaticLobule: [], steatosisDroplets: [], fxrPortalLoop: [], eenRepairStrands: [] }
    const hepaticLobule: Point3D[][] = []
    const yOffsets = [-40, 0, 40]
    yOffsets.forEach((y) => {
      const ring: Point3D[] = []
      for (let i = 0; i < 6; i++) {
        const theta = (i / 6) * 2 * Math.PI
        ring.push({
          x: Math.cos(theta) * 60,
          y,
          z: Math.sin(theta) * 45,
        })
      }
      hepaticLobule.push(ring)
    })
    const steatosisDroplets: { center: Point3D; radius: number; color: string }[] = [
      { center: { x: -25, y: -20, z: 15 }, radius: 14, color: '#f59e0b' },
      { center: { x: 30, y: -25, z: -10 }, radius: 16, color: '#fbbf24' },
      { center: { x: -10, y: 15, z: 20 }, radius: 18, color: '#eab308' },
      { center: { x: 25, y: 25, z: 10 }, radius: 12, color: '#f59e0b' },
    ]
    const fxrPortalLoop: Point3D[] = []
    for (let i = 0; i < 20; i++) {
      const theta = (i / 20) * 2 * Math.PI
      fxrPortalLoop.push({
        x: Math.cos(theta) * 35,
        y: 45 + Math.sin(theta) * 18,
        z: Math.sin(theta * 2) * 20,
      })
    }
    const eenRepairStrands: Point3D[][] = []
    for (let s = 0; s < 3; s++) {
      const strand: Point3D[] = []
      const y = -15 + s * 16
      for (let i = 0; i <= 10; i++) {
        strand.push({
          x: -55 + i * 11,
          y: y + Math.sin(i * 0.8) * 6,
          z: Math.cos(i * 0.8) * 12,
        })
      }
      eenRepairStrands.push(strand)
    }
    return { hepaticLobule, steatosisDroplets, fxrPortalLoop, eenRepairStrands }
  }, [diagram.threeDType])

  // 3D Clinical Malnutrition & Refeeding Syndrome for Chapter 22
  const malnutritionRefeedingGeometry = useMemo(() => {
    if (diagram.threeDType !== 'clinical-malnutrition-refeeding-3d') return { atrophyBoundary: [], hexokinaseCascade: [], hypophosphatemiaFunnel: [], enteralVesselTrack: [] }
    const atrophyBoundary: Point3D[][] = []
    const yLevels = [-45, 0, 45]
    yLevels.forEach((y, idx) => {
      const ring: Point3D[] = []
      const r = 50 - idx * 10
      for (let i = 0; i < 14; i++) {
        const theta = (i / 14) * 2 * Math.PI
        ring.push({
          x: -30 + Math.cos(theta) * r,
          y,
          z: Math.sin(theta) * (r * 0.7),
        })
      }
      atrophyBoundary.push(ring)
    })
    const hexokinaseCascade: Point3D[] = []
    for (let i = 0; i <= 18; i++) {
      const t = i / 18
      hexokinaseCascade.push({
        x: -40 + t * 80,
        y: -40 + t * 50,
        z: Math.sin(t * Math.PI * 3) * 22,
      })
    }
    const hypophosphatemiaFunnel: Point3D[] = []
    for (let i = 0; i <= 24; i++) {
      const t = i / 24
      const r = (1 - t * 0.8) * 45
      const theta = t * Math.PI * 6
      hypophosphatemiaFunnel.push({
        x: 35 + Math.cos(theta) * r,
        y: -30 + t * 75,
        z: Math.sin(theta) * r,
      })
    }
    const enteralVesselTrack: Point3D[] = []
    for (let i = 0; i <= 15; i++) {
      const t = i / 15
      enteralVesselTrack.push({
        x: 45 + Math.sin(t * Math.PI * 2) * 15,
        y: -50 + t * 100,
        z: Math.cos(t * Math.PI * 2) * 15,
      })
    }
    return { atrophyBoundary, hexokinaseCascade, hypophosphatemiaFunnel, enteralVesselTrack }
  }, [diagram.threeDType])

  // 3D Maternal-Fetal & Placental/Lactational Axis for Chapter 23
  const maternalFetalGeometry = useMemo(() => {
    if (diagram.threeDType !== 'maternal-fetal-lactation-3d') return { neuralTubeFolds: [], placentalVilli: [], nutrientGradients: [], mammaryAlveolus: [] }
    const neuralTubeFolds: Point3D[][] = []
    for (let f = 0; f < 2; f++) {
      const arch: Point3D[] = []
      const sign = f === 0 ? 1 : -1
      for (let i = 0; i <= 14; i++) {
        const t = (i / 14) * Math.PI
        arch.push({
          x: sign * (25 + Math.sin(t) * 18),
          y: -55 + (i / 14) * 60,
          z: Math.cos(t) * 20,
        })
      }
      neuralTubeFolds.push(arch)
    }
    const placentalVilli: Point3D[][] = []
    for (let v = 0; v < 4; v++) {
      const villus: Point3D[] = []
      const angle = (v / 4) * Math.PI
      for (let s = 0; s <= 10; s++) {
        villus.push({
          x: -40 + Math.cos(angle) * s * 6,
          y: 20 + s * 4,
          z: Math.sin(angle) * s * 6,
        })
      }
      placentalVilli.push(villus)
    }
    const nutrientGradients: Point3D[] = []
    for (let i = 0; i < 20; i++) {
      const theta = (i / 20) * 2 * Math.PI
      nutrientGradients.push({
        x: Math.cos(theta) * 45,
        y: 20 + Math.sin(theta) * 20,
        z: Math.sin(theta * 2) * 22,
      })
    }
    const mammaryAlveolus: Point3D[] = []
    for (let i = 0; i < 16; i++) {
      const theta = (i / 16) * 2 * Math.PI
      mammaryAlveolus.push({
        x: 40 + Math.cos(theta) * 25,
        y: -20 + Math.sin(theta) * 25,
        z: Math.sin(theta) * 15,
      })
    }
    return { neuralTubeFolds, placentalVilli, nutrientGradients, mammaryAlveolus }
  }, [diagram.threeDType])

  // 3D Oncology Nutrition & Cancer Cachexia for Chapter 24
  const cancerCachexiaGeometry = useMemo(() => {
    if (diagram.threeDType !== 'cancer-cachexia-metabolic-3d') return { tumorWarburgCore: [], lactateFunnel: [], cytokineWaves: [], proteasomeBarrels: [] }
    const tumorWarburgCore: Point3D[][] = []
    const yRings = [-25, 0, 25]
    yRings.forEach((y) => {
      const ring: Point3D[] = []
      const r = Math.sqrt(Math.max(0, 32 * 32 - y * y))
      for (let i = 0; i < 16; i++) {
        const theta = (i / 16) * 2 * Math.PI
        ring.push({
          x: -45 + Math.cos(theta) * r,
          y: -20 + y,
          z: Math.sin(theta) * r,
        })
      }
      tumorWarburgCore.push(ring)
    })
    const lactateFunnel: Point3D[] = []
    for (let i = 0; i <= 20; i++) {
      const t = i / 20
      lactateFunnel.push({
        x: -45 + Math.cos(t * Math.PI * 4) * (20 - t * 12),
        y: -20 + t * 65,
        z: Math.sin(t * Math.PI * 4) * (20 - t * 12),
      })
    }
    const cytokineWaves: Point3D[][] = []
    for (let w = 0; w < 3; w++) {
      const wave: Point3D[] = []
      const r = 35 + w * 22
      for (let i = 0; i <= 14; i++) {
        const theta = (i / 14) * Math.PI
        wave.push({
          x: -20 + Math.cos(theta) * r,
          y: 20 + Math.sin(theta) * (r * 0.6),
          z: Math.sin(theta * 2) * 16,
        })
      }
      cytokineWaves.push(wave)
    }
    const proteasomeBarrels: Point3D[][] = []
    for (let b = 0; b < 2; b++) {
      const barrel: Point3D[] = []
      const offX = 35 + b * 25
      for (let s = 0; s <= 12; s++) {
        barrel.push({
          x: offX + Math.cos(s * 0.8) * 12,
          y: -40 + s * 6,
          z: Math.sin(s * 0.8) * 12,
        })
      }
      proteasomeBarrels.push(barrel)
    }
    return { tumorWarburgCore, lactateFunnel, cytokineWaves, proteasomeBarrels }
  }, [diagram.threeDType])

  // 3D Lifespan Nutrition Continuum & Sarcopenia for Chapter 25
  const lifespanContinuumGeometry = useMemo(() => {
    if (diagram.threeDType !== 'lifespan-continuum-sarcopenia-3d') return { trajectoryArc: [], peakBonePrism: [], sarcopeniaFibers: [], leucineThresholdRing: [] }
    const trajectoryArc: Point3D[] = []
    for (let i = 0; i <= 24; i++) {
      const t = i / 24
      const x = -70 + t * 140
      const y = -45 + Math.sin(t * Math.PI) * 50 - t * 25
      const z = Math.cos(t * Math.PI * 2) * 20
      trajectoryArc.push({ x, y, z })
    }
    const peakBonePrism: Point3D[][] = []
    for (let p = 0; p < 3; p++) {
      const strut: Point3D[] = []
      const offX = -20 + p * 18
      for (let s = 0; s <= 8; s++) {
        strut.push({
          x: offX,
          y: -35 + s * 8,
          z: -15 + (s % 2 === 0 ? 8 : -8),
        })
      }
      peakBonePrism.push(strut)
    }
    const sarcopeniaFibers: Point3D[][] = []
    for (let f = 0; f < 3; f++) {
      const fiber: Point3D[] = []
      const y = 20 + f * 14
      for (let i = 0; i <= 10; i++) {
        fiber.push({
          x: 20 + i * 5,
          y,
          z: Math.sin(i * 0.9) * 12,
        })
      }
      sarcopeniaFibers.push(fiber)
    }
    const leucineThresholdRing: Point3D[] = []
    for (let i = 0; i < 18; i++) {
      const theta = (i / 18) * 2 * Math.PI
      leucineThresholdRing.push({
        x: 45 + Math.cos(theta) * 24,
        y: 40 + Math.sin(theta) * 14,
        z: Math.sin(theta) * 18,
      })
    }
    return { trajectoryArc, peakBonePrism, sarcopeniaFibers, leucineThresholdRing }
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

      {/* Multi-Modal View Selectors — Categorized per V2.7 Audit */}
      <div
        role="tablist"
        aria-label={locale === 'bn' ? 'ভিজ্যুয়ালাইজেশন প্রদর্শন মোড' : 'Scientific visualization mode'}
        style={{ display: 'flex', gap: '8px', margin: '12px 0 16px', flexWrap: 'wrap' }}
      >
        {hasTrue3D && (
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'true-3d'}
            className={viewMode === 'true-3d' ? 'primary-button' : 'secondary-button'}
            style={{
              padding: '6px 14px',
              fontSize: '0.82rem',
              fontWeight: 600,
              background: viewMode === 'true-3d' ? '#2563eb' : undefined,
              color: viewMode === 'true-3d' ? '#ffffff' : undefined,
            }}
            onClick={() => setViewMode('true-3d')}
          >
            <Sparkles size={13} style={{ display: 'inline', marginRight: '5px' }} />
            {locale === 'bn' ? 'ট্রু ৩ডি ওয়েবজিএল (Cat A)' : 'True 3D WebGL (Cat A)'}
          </button>
        )}
        {diagram.has3D && (
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === '3d'}
            className={viewMode === '3d' ? 'primary-button' : 'secondary-button'}
            style={{
              padding: '6px 14px',
              fontSize: '0.82rem',
              fontWeight: 600,
              background: viewMode === '3d' ? '#0891b2' : undefined,
              color: viewMode === '3d' ? '#ffffff' : undefined,
            }}
            onClick={() => setViewMode('3d')}
          >
            <Layers size={13} style={{ display: 'inline', marginRight: '5px' }} />
            {locale === 'bn' ? 'প্রোজেক্টেড ৩ডি (Cat B · SVG)' : 'Projected 3D (Cat B · SVG)'}
          </button>
        )}
        <button
          type="button"
          role="tab"
          aria-selected={viewMode === 'svg'}
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
          {locale === 'bn' ? 'ইন্টারঅ্যাক্টিভ ২ডি ডায়াগ্রাম (Cat C)' : 'Interactive 2D (Cat C)'}
        </button>
        {diagram.imageUrl && (
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'illustration'}
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
            {locale === 'bn' ? 'রেফারেন্স মিডিয়া (Cat D)' : 'Reference Media (Cat D)'}
          </button>
        )}
      </div>

      {viewMode === 'true-3d' && hasTrue3D ? (
        <True3DViewer
          currentDepth={currentDepth}
          locale={locale}
          onSectionSelect={onSectionSelect}
        />
      ) : viewMode === 'illustration' && diagram.imageUrl ? (
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

                  {/* 3D Antioxidant Metalloenzyme Redox Scene for Chapter 11 */}
                  {diagram.threeDType === 'antioxidant-redox-3d' && (
                    <g className="antioxidant-redox-3d-scene">
                      {/* Downward Electron Cascade Funnel */}
                      {(() => {
                        const pFunnel = antioxidantGeometry.cascadeFunnel.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathFunnel = pFunnel.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g>
                            <path d={pathFunnel} fill="none" stroke="#f59e0b" strokeWidth="2.4" strokeDasharray="5 3" opacity={0.8} />
                            {pFunnel.filter((_, i) => i % 6 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3.5 * p.scale} fill="#fbbf24" opacity={0.9} />
                            ))}
                          </g>
                        )
                      })()}
                      {/* Catalytic Metal Centers: Cu/Zn and Mn */}
                      {(() => {
                        const pCu = projectPoint({ x: -45, y: -35, z: 15 }, rotX, rotY, zoom)
                        const pZn = projectPoint({ x: -25, y: -45, z: 25 }, rotX, rotY, zoom)
                        const pMn = projectPoint({ x: -35, y: -15, z: -20 }, rotX, rotY, zoom)
                        const pSec = projectPoint({ x: 30, y: -20, z: -15 }, rotX, rotY, zoom)
                        return (
                          <g>
                            <line x1={pCu.sx} y1={pCu.sy} x2={pZn.sx} y2={pZn.sy} stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
                            <circle cx={pCu.sx} cy={pCu.sy} r={7 * pCu.scale} fill="#ea580c" stroke="#fed7aa" strokeWidth="1.5" />
                            <circle cx={pZn.sx} cy={pZn.sy} r={6 * pZn.scale} fill="#0284c7" stroke="#bae6fd" strokeWidth="1.5" />
                            <circle cx={pMn.sx} cy={pMn.sy} r={6.5 * pMn.scale} fill="#7c3aed" stroke="#ddd6fe" strokeWidth="1.5" />
                            <circle cx={pSec.sx} cy={pSec.sy} r={7 * pSec.scale} fill="#059669" stroke="#a7f3d0" strokeWidth="1.5" />
                          </g>
                        )
                      })()}
                      {/* Triple-Helical Prolyl Collagen Strands */}
                      {antioxidantGeometry.collagenTripleHelix.map((strand, sIdx) => {
                        const pStrand = strand.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathStrand = pStrand.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        const colors = ['#10b981', '#059669', '#34d399']
                        return <path key={sIdx} d={pathStrand} fill="none" stroke={colors[sIdx]} strokeWidth="2.2" opacity={0.85} />
                      })}
                    </g>
                  )}

                  {/* 3D Hydroxyapatite Crystal & Bone Remodeling Matrix for Chapter 12 */}
                  {diagram.threeDType === 'bone-matrix-hydroxyapatite-3d' && (
                    <g className="bone-matrix-3d-scene">
                      {/* Hexagonal Hydroxyapatite Crystal Prism */}
                      {(() => {
                        const topPts = boneMatrixGeometry.hexagonalLattice.top.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const botPts = boneMatrixGeometry.hexagonalLattice.bottom.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const topD = topPts.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        const botD = botPts.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return (
                          <g>
                            <path d={topD} fill="none" stroke="#06b6d4" strokeWidth="2.2" opacity={0.85} />
                            <path d={botD} fill="none" stroke="#0891b2" strokeWidth="2.2" opacity={0.7} />
                            {topPts.map((tp, i) => {
                              const bp = botPts[i]
                              return <line key={i} x1={tp.sx} y1={tp.sy} x2={bp.sx} y2={bp.sy} stroke="#22d3ee" strokeWidth="1.5" opacity={0.55} />
                            })}
                          </g>
                        )
                      })()}
                      {/* Parallel Collagen Scaffold Fibrils */}
                      {boneMatrixGeometry.collagenFibrils.map((fibril, fIdx) => {
                        const pFibril = fibril.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pathFibril = pFibril.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path key={fIdx} d={pathFibril} fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 3" opacity={0.75} />
                      })}
                      {/* Bone Remodeling Unit Coupling Orbit */}
                      {(() => {
                        const pLoop = boneMatrixGeometry.remodelingLoop.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const loopD = pLoop.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return (
                          <g>
                            <path d={loopD} fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5 3" opacity={0.8} />
                            {pLoop.filter((_, i) => i % 6 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3.5 * p.scale} fill="#fb7185" />
                            ))}
                          </g>
                        )
                      })()}
                    </g>
                  )}

                  {/* 3D Duodenal Enterocyte & Ferritin Nanocage Iron Flux for Chapter 13 */}
                  {diagram.threeDType === 'iron-biology-hepcidin-3d' && (
                    <g className="iron-biology-3d-scene">
                      {/* Apical Microvillus Border */}
                      {(() => {
                        const pBorder = ironBiologyGeometry.apicalBorder.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const borderD = pBorder.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path d={borderD} fill="none" stroke="#f59e0b" strokeWidth="2.5" opacity={0.85} />
                      })()}
                      {/* 24-Subunit Ferritin Hollow Shell Latitude Rings */}
                      {ironBiologyGeometry.ferritinShell.map((ring, rIdx) => {
                        const pRing = ring.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const ringD = pRing.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path key={rIdx} d={ringD} fill="none" stroke="#10b981" strokeWidth="1.8" strokeDasharray="4 2" opacity={0.8} />
                      })}
                      {/* Ferrihydrite Iron Mineral Core */}
                      {(() => {
                        const pCore = projectPoint({ x: 0, y: 0, z: 0 }, rotX, rotY, zoom)
                        return (
                          <g>
                            <circle cx={pCore.sx} cy={pCore.sy} r={14 * pCore.scale} fill="#dc2626" stroke="#fca5a5" strokeWidth="1.5" opacity={0.85} />
                            <circle cx={pCore.sx} cy={pCore.sy} r={6 * pCore.scale} fill="#fef08a" opacity={0.9} />
                          </g>
                        )
                      })()}
                      {/* Basolateral Ferroportin Export Pore & Hepcidin Occlusion Plug */}
                      {(() => {
                        const pPore = ironBiologyGeometry.ferroportinPore.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const poreD = pPore.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        const pHep = projectPoint({ x: 60, y: 62, z: 0 }, rotX, rotY, zoom)
                        return (
                          <g>
                            <path d={poreD} fill="none" stroke="#3b82f6" strokeWidth="2.2" opacity={0.85} />
                            <circle cx={pHep.sx} cy={pHep.sy} r={9 * pHep.scale} fill="#ec4899" stroke="#fbcfe8" strokeWidth="1.5" opacity={0.9} />
                          </g>
                        )
                      })()}
                    </g>
                  )}

                  {/* 3D Gut Mucosal Barrier & Tight Junction Scaffold for Chapter 14 */}
                  {diagram.threeDType === 'gut-barrier-junctions-3d' && (
                    <g className="gut-barrier-3d-scene">
                      {/* MUC2 Mucus Protective Bilayer Sheets */}
                      {gutBarrierGeometry.mucusWaves.map((wave, wIdx) => {
                        const pWave = wave.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const waveD = pWave.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path key={wIdx} d={waveD} fill="none" stroke={wIdx === 0 ? '#10b981' : '#34d399'} strokeWidth="2.4" opacity={0.75} />
                      })}
                      {/* Claudin & Occludin Intercellular Grid */}
                      {gutBarrierGeometry.junctionGrid.map((row, rIdx) => {
                        const pRow = row.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const rowD = pRow.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g key={rIdx}>
                            <path d={rowD} fill="none" stroke="#06b6d4" strokeWidth="1.8" strokeDasharray="3 2" opacity={0.8} />
                            {pRow.map((p, pIdx) => (
                              <circle key={pIdx} cx={p.sx} cy={p.sy} r={2.8 * p.scale} fill="#22d3ee" />
                            ))}
                          </g>
                        )
                      })}
                      {/* Perijunctional Actomyosin Ring */}
                      {(() => {
                        const pBelt = gutBarrierGeometry.actomyosinBelt.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const beltD = pBelt.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path d={beltD} fill="none" stroke="#8b5cf6" strokeWidth="2.5" opacity={0.85} />
                      })()}
                    </g>
                  )}

                  {/* 3D Gut Microbiome Metagenomic Colon & Metabolite Hub for Chapter 15 */}
                  {diagram.threeDType === 'microbiome-metagenomics-3d' && (
                    <g className="microbiome-3d-scene">
                      {/* Colonic Lumen Cylindrical Rings */}
                      {microbiomeGeometry.lumenRings.map((ring, rIdx) => {
                        const pRing = ring.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const ringD = pRing.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path key={rIdx} d={ringD} fill="none" stroke="#64748b" strokeWidth="1.6" opacity={0.5} strokeDasharray="4 3" />
                      })}
                      {/* Major Bacterial Phyla Ecosystem Clusters */}
                      {microbiomeGeometry.taxaSpheres.map((sphere, sIdx) => {
                        const pSph = projectPoint(sphere.center, rotX, rotY, zoom)
                        return (
                          <g key={sIdx}>
                            <circle cx={pSph.sx} cy={pSph.sy} r={sphere.radius * pSph.scale} fill={sphere.color} opacity={0.7} />
                            <circle cx={pSph.sx} cy={pSph.sy} r={(sphere.radius * 0.45) * pSph.scale} fill="#ffffff" opacity={0.8} />
                          </g>
                        )
                      })}
                      {/* Metabolite Trajectory Streams: SCFA, Bile Acids, TMAO */}
                      {microbiomeGeometry.metaboliteStreams.map((stream, stIdx) => {
                        const pStream = stream.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const streamD = pStream.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        const colors = ['#10b981', '#f59e0b', '#dc2626']
                        return <path key={stIdx} d={streamD} fill="none" stroke={colors[stIdx]} strokeWidth="2.2" strokeDasharray="5 3" opacity={0.8} />
                      })}
                    </g>
                  )}

                  {/* 3D Prebiotics, Probiotics, Synbiotics & FODMAP Continuum for Chapter 16 */}
                  {diagram.threeDType === 'prebiotics-probiotics-synbiotics-3d' && (
                    <g className="biotic-continuum-3d-scene">
                      {/* Prebiotic Inulin/FOS Polysaccharide Helical Chains */}
                      {bioticGeometry.prebioticChains.map((chain, cIdx) => {
                        const pChain = chain.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const chainD = pChain.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g key={cIdx}>
                            <path d={chainD} fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeDasharray="5 3" opacity={0.85} />
                            {pChain.filter((_, i) => i % 4 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3 * p.scale} fill="#fbbf24" />
                            ))}
                          </g>
                        )
                      })}
                      {/* Probiotic Live Bacilli Rods */}
                      {bioticGeometry.probioticBacilli.map((bac, bIdx) => {
                        const pStart = projectPoint(bac.start, rotX, rotY, zoom)
                        const pEnd = projectPoint(bac.end, rotX, rotY, zoom)
                        return (
                          <g key={bIdx}>
                            <line x1={pStart.sx} y1={pStart.sy} x2={pEnd.sx} y2={pEnd.sy} stroke={bac.color} strokeWidth={6 * pStart.scale} strokeLinecap="round" opacity={0.85} />
                            <circle cx={pStart.sx} cy={pStart.sy} r={3 * pStart.scale} fill="#ffffff" opacity={0.7} />
                            <circle cx={pEnd.sx} cy={pEnd.sy} r={3 * pEnd.scale} fill="#ffffff" opacity={0.7} />
                          </g>
                        )
                      })}
                      {/* Fermentation SCFA Metabolite Bubbles */}
                      {bioticGeometry.scfaBubbles.map((bub, bubIdx) => {
                        const pBub = projectPoint(bub, rotX, rotY, zoom)
                        return (
                          <circle key={bubIdx} cx={pBub.sx} cy={pBub.sy} r={5.5 * pBub.scale} fill="#38bdf8" stroke="#bae6fd" strokeWidth="1.2" opacity={0.85} />
                        )
                      })}
                      {/* 3-Phase Low-FODMAP Reintroduction Oscillation Wave */}
                      {(() => {
                        const pWave = bioticGeometry.fodmapWave.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const waveD = pWave.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path d={waveD} fill="none" stroke="#ec4899" strokeWidth="2.2" opacity={0.85} />
                      })()}
                    </g>
                  )}

                  {/* 3D Food Adverse Reactions, Gliadin & Celiac Enteropathy for Chapter 17 */}
                  {diagram.threeDType === 'food-intolerance-celiac-3d' && (
                    <g className="food-adverse-3d-scene">
                      {/* Enterocyte Villous Architecture Profile (Atrophy Gradient) */}
                      {(() => {
                        const pVilli = foodAdverseGeometry.villousAtrophyProfile.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const villiD = pVilli.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path d={villiD} fill="none" stroke="#f59e0b" strokeWidth="2.4" opacity={0.85} />
                      })()}
                      {/* 33-mer Alpha-Gliadin Peptide Backbone Helix */}
                      {(() => {
                        const pGli = foodAdverseGeometry.gliadinHelix.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const gliD = pGli.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g>
                            <path d={gliD} fill="none" stroke="#ef4444" strokeWidth="2.2" opacity={0.85} />
                            {pGli.filter((_, i) => i % 5 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3.5 * p.scale} fill="#fca5a5" />
                            ))}
                          </g>
                        )
                      })()}
                      {/* HLA-DQ2.5 Electrostatic Binding Cleft Cleft */}
                      {(() => {
                        const pHla = foodAdverseGeometry.hlaCleft.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const hlaD = pHla.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path d={hlaD} fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 2" opacity={0.8} />
                      })()}
                      {/* Mast Cell IgE Anaphylactic Degranulation Ring */}
                      {(() => {
                        const pMast = foodAdverseGeometry.mastCellRings.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const mastD = pMast.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return (
                          <g>
                            <path d={mastD} fill="none" stroke="#06b6d4" strokeWidth="1.8" strokeDasharray="3 2" opacity={0.75} />
                            {pMast.filter((_, i) => i % 4 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3 * p.scale} fill="#22d3ee" />
                            ))}
                          </g>
                        )
                      })()}
                    </g>
                  )}

                  {/* 3D Pathophysiology of T2D & DiRECT Twin Cycles for Chapter 18 */}
                  {diagram.threeDType === 'obesity-t2d-mnt-3d' && (
                    <g className="obesity-t2d-3d-scene">
                      {/* Hypertrophic Adipocyte Distended Sphere Rings */}
                      {obesityT2DGeometry.hypertrophicAdipocyte.map((ring, rIdx) => {
                        const pRing = ring.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const ringD = pRing.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path key={rIdx} d={ringD} fill="none" stroke="#ef4444" strokeWidth="2" opacity={0.75} />
                      })}
                      {/* Hepatic Steatosis Twin Cycle (Cycle 1) */}
                      {(() => {
                        const pHep = obesityT2DGeometry.twinCycleHepatic.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const hepD = pHep.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path d={hepD} fill="none" stroke="#eab308" strokeWidth="2.2" strokeDasharray="5 3" opacity={0.8} />
                      })()}
                      {/* Pancreatic Islet Steatosis Twin Cycle (Cycle 2) */}
                      {(() => {
                        const pPanc = obesityT2DGeometry.twinCyclePancreatic.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const pancD = pPanc.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path d={pancD} fill="none" stroke="#8b5cf6" strokeWidth="2.2" strokeDasharray="5 3" opacity={0.8} />
                      })()}
                      {/* DiRECT Beta-Cell Rescue Core */}
                      {(() => {
                        const pIslet = obesityT2DGeometry.isletCore.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const isletD = pIslet.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return (
                          <g>
                            <path d={isletD} fill="none" stroke="#10b981" strokeWidth="2.4" opacity={0.9} />
                            {pIslet.filter((_, i) => i % 3 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={4 * p.scale} fill="#34d399" />
                            ))}
                          </g>
                        )
                      })()}
                    </g>
                  )}

                  {/* 3D Cardiovascular Atherogenesis & Hemodynamics for Chapter 19 */}
                  {diagram.threeDType === 'cardiovascular-apob-atheroma-3d' && (
                    <g className="cardiovascular-3d-scene">
                      {/* Arterial Lumen Wall Curvature Arcs */}
                      {cvdAtheromaGeometry.arterialLumen.map((arc, aIdx) => {
                        const pArc = arc.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const arcD = pArc.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path key={aIdx} d={arcD} fill="none" stroke="#dc2626" strokeWidth="2" opacity={0.65} />
                      })}
                      {/* Subendothelial Proteoglycan Entrapment Strands */}
                      {cvdAtheromaGeometry.proteoglycanMatrix.map((strand, sIdx) => {
                        const pStrand = strand.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const strandD = pStrand.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path key={sIdx} d={strandD} fill="none" stroke="#f97316" strokeWidth="1.8" strokeDasharray="4 2" opacity={0.8} />
                      })}
                      {/* Foam Cell Macrophage Clusters */}
                      {cvdAtheromaGeometry.foamCellCluster.map((foam, fIdx) => {
                        const pFoam = projectPoint(foam.center, rotX, rotY, zoom)
                        return (
                          <g key={fIdx}>
                            <circle cx={pFoam.sx} cy={pFoam.sy} r={foam.radius * pFoam.scale} fill={foam.color} opacity={0.8} />
                            <circle cx={pFoam.sx} cy={pFoam.sy} r={(foam.radius * 0.4) * pFoam.scale} fill="#fef08a" opacity={0.85} />
                          </g>
                        )
                      })}
                      {/* DASH Potassium Dilation Ring */}
                      {(() => {
                        const pDash = cvdAtheromaGeometry.dashDilationRing.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const dashD = pDash.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path d={dashD} fill="none" stroke="#10b981" strokeWidth="2.2" opacity={0.85} />
                      })()}
                    </g>
                  )}

                  {/* 3D Renal Hyperfiltration & FGF23-Klotho Nephron for Chapter 20 */}
                  {diagram.threeDType === 'renal-nephron-fgf23-3d' && (
                    <g className="renal-nephron-3d-scene">
                      {/* Glomerular Capillary Tuft Loops */}
                      {renalNephronGeometry.capillaryTuft.map((loop, lIdx) => {
                        const pLoop = loop.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const loopD = pLoop.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path key={lIdx} d={loopD} fill="none" stroke="#f97316" strokeWidth="2.2" opacity={0.8} />
                      })}
                      {/* Arterioles: Wide Afferent vs Constricted Efferent */}
                      {renalNephronGeometry.arterioles.map((art, aIdx) => {
                        const pS = projectPoint(art.start, rotX, rotY, zoom)
                        const pE = projectPoint(art.end, rotX, rotY, zoom)
                        return <line key={aIdx} x1={pS.sx} y1={pS.sy} x2={pE.sx} y2={pE.sy} stroke={art.color} strokeWidth={art.width * pS.scale} strokeLinecap="round" opacity={0.85} />
                      })}
                      {/* Podocyte Filtration Slit Strands */}
                      {renalNephronGeometry.podocyteSlits.map((slit, sIdx) => {
                        const pSlit = slit.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const slitD = pSlit.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g key={sIdx}>
                            <path d={slitD} fill="none" stroke="#ef4444" strokeWidth="1.8" strokeDasharray="4 2" opacity={0.75} />
                            {pSlit.filter((_, i) => i % 4 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={2.6 * p.scale} fill="#fca5a5" />
                            ))}
                          </g>
                        )
                      })}
                      {/* Osteocyte FGF23-Klotho Endocrine Axis Orbit */}
                      {(() => {
                        const pFgf = renalNephronGeometry.fgf23Orbit.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const fgfD = pFgf.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return (
                          <g>
                            <path d={fgfD} fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5 3" opacity={0.8} />
                            {pFgf.filter((_, i) => i % 5 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3.2 * p.scale} fill="#c084fc" />
                            ))}
                          </g>
                        )
                      })()}
                    </g>
                  )}

                  {/* 3D Hepatobiliary MASLD & Gut Quiescence for Chapter 21 */}
                  {diagram.threeDType === 'hepatobiliary-masld-ibd-3d' && (
                    <g className="hepatobiliary-3d-scene">
                      {/* Hexagonal Hepatic Lobule Prisms */}
                      {hepatobiliaryGeometry.hepaticLobule.map((ring, rIdx) => {
                        const pRing = ring.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const ringD = pRing.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path key={rIdx} d={ringD} fill="none" stroke="#d97706" strokeWidth="2" opacity={0.7} />
                      })}
                      {/* Steatosis Lipid Droplet Spheres */}
                      {hepatobiliaryGeometry.steatosisDroplets.map((drop, dIdx) => {
                        const pDrop = projectPoint(drop.center, rotX, rotY, zoom)
                        return (
                          <g key={dIdx}>
                            <circle cx={pDrop.sx} cy={pDrop.sy} r={drop.radius * pDrop.scale} fill={drop.color} opacity={0.75} />
                            <circle cx={pDrop.sx - 3 * pDrop.scale} cy={pDrop.sy - 3 * pDrop.scale} r={(drop.radius * 0.35) * pDrop.scale} fill="#ffffff" opacity={0.6} />
                          </g>
                        )
                      })}
                      {/* FXR-FGF19 Portal Circulation Orbit */}
                      {(() => {
                        const pFxr = hepatobiliaryGeometry.fxrPortalLoop.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const fxrD = pFxr.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return (
                          <g>
                            <path d={fxrD} fill="none" stroke="#8b5cf6" strokeWidth="2.2" strokeDasharray="5 3" opacity={0.85} />
                            {pFxr.filter((_, i) => i % 4 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3 * p.scale} fill="#a855f7" />
                            ))}
                          </g>
                        )
                      })()}
                      {/* EEN Tight-Junction Mucosal Healing Strands */}
                      {hepatobiliaryGeometry.eenRepairStrands.map((strand, sIdx) => {
                        const pStrand = strand.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const strandD = pStrand.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path key={sIdx} d={strandD} fill="none" stroke="#10b981" strokeWidth="2" opacity={0.8} />
                      })}
                    </g>
                  )}

                  {/* 3D Clinical Malnutrition & Refeeding Syndrome for Chapter 22 */}
                  {diagram.threeDType === 'clinical-malnutrition-refeeding-3d' && (
                    <g className="malnutrition-refeeding-3d-scene">
                      {/* Starvation Atrophy Cell Boundaries */}
                      {malnutritionRefeedingGeometry.atrophyBoundary.map((ring, rIdx) => {
                        const pRing = ring.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const ringD = pRing.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path key={rIdx} d={ringD} fill="none" stroke="#64748b" strokeWidth="1.8" strokeDasharray="4 3" opacity={0.65} />
                      })}
                      {/* Glucose Hexokinase Phosphorylation Stream */}
                      {(() => {
                        const pHk = malnutritionRefeedingGeometry.hexokinaseCascade.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const hkD = pHk.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g>
                            <path d={hkD} fill="none" stroke="#ef4444" strokeWidth="2.4" opacity={0.85} />
                            {pHk.filter((_, i) => i % 3 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3.5 * p.scale} fill="#fca5a5" />
                            ))}
                          </g>
                        )
                      })()}
                      {/* Hypophosphatemic Intracellular Trapping Funnel */}
                      {(() => {
                        const pFunnel = malnutritionRefeedingGeometry.hypophosphatemiaFunnel.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const funnelD = pFunnel.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path d={funnelD} fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 2" opacity={0.75} />
                      })()}
                      {/* Enteral Lumen Flow vs Parenteral Track */}
                      {(() => {
                        const pTrack = malnutritionRefeedingGeometry.enteralVesselTrack.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const trackD = pTrack.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g>
                            <path d={trackD} fill="none" stroke="#10b981" strokeWidth="2.5" opacity={0.85} />
                            {pTrack.filter((_, i) => i % 4 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={4 * p.scale} fill="#34d399" />
                            ))}
                          </g>
                        )
                      })()}
                    </g>
                  )}

                  {/* 3D Maternal-Fetal & Placental/Lactational Axis for Chapter 23 */}
                  {diagram.threeDType === 'maternal-fetal-lactation-3d' && (
                    <g className="maternal-fetal-3d-scene">
                      {/* Neural Tube Closing Fold Arches */}
                      {maternalFetalGeometry.neuralTubeFolds.map((arch, aIdx) => {
                        const pArch = arch.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const archD = pArch.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path key={aIdx} d={archD} fill="none" stroke="#10b981" strokeWidth="2.4" opacity={0.85} />
                      })}
                      {/* Placental Syncytiotrophoblast Branching Villi */}
                      {maternalFetalGeometry.placentalVilli.map((villus, vIdx) => {
                        const pVillus = villus.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const villusD = pVillus.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path key={vIdx} d={villusD} fill="none" stroke="#f97316" strokeWidth="2" opacity={0.8} />
                      })}
                      {/* Transplacental Nutrient Flow Streams */}
                      {(() => {
                        const pNutr = maternalFetalGeometry.nutrientGradients.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const nutrD = pNutr.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return (
                          <g>
                            <path d={nutrD} fill="none" stroke="#ef4444" strokeWidth="1.8" strokeDasharray="4 3" opacity={0.7} />
                            {pNutr.filter((_, i) => i % 5 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3 * p.scale} fill="#fb7185" />
                            ))}
                          </g>
                        )
                      })()}
                      {/* Mammary Alveolus Acinar Ring with HMO Secretor Nodes */}
                      {(() => {
                        const pAlv = maternalFetalGeometry.mammaryAlveolus.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const alvD = pAlv.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return (
                          <g>
                            <path d={alvD} fill="none" stroke="#0284c7" strokeWidth="2.2" opacity={0.85} />
                            {pAlv.filter((_, i) => i % 3 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3.2 * p.scale} fill="#38bdf8" />
                            ))}
                          </g>
                        )
                      })()}
                    </g>
                  )}

                  {/* 3D Oncology Nutrition & Cancer Cachexia for Chapter 24 */}
                  {diagram.threeDType === 'cancer-cachexia-metabolic-3d' && (
                    <g className="cancer-cachexia-3d-scene">
                      {/* Tumor Warburg Core Rings */}
                      {cancerCachexiaGeometry.tumorWarburgCore.map((ring, rIdx) => {
                        const pRing = ring.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const ringD = pRing.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return <path key={rIdx} d={ringD} fill="none" stroke="#f97316" strokeWidth="2" opacity={0.75} />
                      })}
                      {/* Lactic Acid Efflux Spiral Funnel */}
                      {(() => {
                        const pLac = cancerCachexiaGeometry.lactateFunnel.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const lacD = pLac.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g>
                            <path d={lacD} fill="none" stroke="#eab308" strokeWidth="2.2" strokeDasharray="4 2" opacity={0.8} />
                            {pLac.filter((_, i) => i % 4 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={2.8 * p.scale} fill="#fde047" />
                            ))}
                          </g>
                        )
                      })()}
                      {/* Systemic Cytokine Storm Waves (IL-6, TNF-alpha) */}
                      {cancerCachexiaGeometry.cytokineWaves.map((wave, wIdx) => {
                        const pWave = wave.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const waveD = pWave.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path key={wIdx} d={waveD} fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="6 3" opacity={0.8} />
                      })}
                      {/* 26S Ubiquitin-Proteasome Degradation Barrels */}
                      {cancerCachexiaGeometry.proteasomeBarrels.map((barrel, bIdx) => {
                        const pBarrel = barrel.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const barrelD = pBarrel.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g key={bIdx}>
                            <path d={barrelD} fill="none" stroke="#dc2626" strokeWidth="2.2" opacity={0.85} />
                            {pBarrel.filter((_, i) => i % 3 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3 * p.scale} fill="#f87171" />
                            ))}
                          </g>
                        )
                      })}
                    </g>
                  )}

                  {/* 3D Lifespan Nutrition Continuum & Sarcopenia for Chapter 25 */}
                  {diagram.threeDType === 'lifespan-continuum-sarcopenia-3d' && (
                    <g className="lifespan-continuum-3d-scene">
                      {/* Lifespan Trajectory Kinetic Arc */}
                      {(() => {
                        const pArc = lifespanContinuumGeometry.trajectoryArc.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const arcD = pArc.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return (
                          <g>
                            <path d={arcD} fill="none" stroke="#10b981" strokeWidth="3" opacity={0.85} />
                            {pArc.filter((_, i) => i % 4 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3.5 * p.scale} fill="#34d399" />
                            ))}
                          </g>
                        )
                      })()}
                      {/* Adolescent Peak Bone Mineral Struts */}
                      {lifespanContinuumGeometry.peakBonePrism.map((strut, sIdx) => {
                        const pStrut = strut.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const strutD = pStrut.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path key={sIdx} d={strutD} fill="none" stroke="#2563eb" strokeWidth="2.2" opacity={0.8} />
                      })}
                      {/* Sarcopenic Muscle Fiber Atrophy Bundles */}
                      {lifespanContinuumGeometry.sarcopeniaFibers.map((fiber, fIdx) => {
                        const pFiber = fiber.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const fiberD = pFiber.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '')
                        return <path key={fIdx} d={fiberD} fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="5 3" opacity={0.75} />
                      })}
                      {/* Leucine Threshold Activation Ring */}
                      {(() => {
                        const pLeu = lifespanContinuumGeometry.leucineThresholdRing.map((pt) => projectPoint(pt, rotX, rotY, zoom))
                        const leuD = pLeu.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.sx.toFixed(1)} ${p.sy.toFixed(1)}`, '') + ' Z'
                        return (
                          <g>
                            <path d={leuD} fill="none" stroke="#059669" strokeWidth="2.4" opacity={0.9} />
                            {pLeu.filter((_, i) => i % 3 === 0).map((p, i) => (
                              <circle key={i} cx={p.sx} cy={p.sy} r={3 * p.scale} fill="#6ee7b7" />
                            ))}
                          </g>
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
