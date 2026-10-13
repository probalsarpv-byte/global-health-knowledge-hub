import { useState, useId, useRef, useEffect, useCallback, useMemo } from 'react'
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Play,
  Pause,
  Layers,
  ChevronRight,
  Eye,
  Info,
  Activity,
  HeartPulse,
  Compass,
} from 'lucide-react'
import type { Organ3DExplorerContent, Organ3DItem, LessonLocale } from '../../content/lessonSchema'

interface Organ3DExplorerProps {
  explorer: Organ3DExplorerContent
  locale: LessonLocale
  onSectionSelect: (sectionId: string) => void
}

type TabType = 'overview' | 'physiology' | 'nutrition' | 'clinical'

interface Point3D {
  x: number
  y: number
  z: number
}

// 3D rotation math around human trunk center (0, 190, 0)
function projectPoint(
  p: Point3D,
  rotX: number, // Pitch in radians
  rotY: number, // Yaw in radians
  zoom: number,
  viewWidth = 360,
  viewHeight = 440,
  cameraDist = 550
): { sx: number; sy: number; sz: number; scale: number } {
  const cx = 0
  const cy = 190
  const cz = 0

  // Center coordinates
  const dx = p.x - cx
  const dy = p.y - cy
  const dz = p.z - cz

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
  const effectiveDepth = Math.max(80, depth)
  const k = (cameraDist / effectiveDepth) * zoom

  const sx = viewWidth / 2 + x2 * k
  const sy = viewHeight / 2 + y2 * k

  return { sx, sy, sz: z2, scale: k }
}

export function Organ3DExplorer({ explorer, locale, onSectionSelect }: Organ3DExplorerProps) {
  const headingId = useId()
  const lang = locale === 'bn' ? 'bn' : 'en'
  const isBn = locale === 'bn'

  // 3D Viewport state
  const [rotY, setRotY] = useState(0.15) // slight default angle for 3D depth
  const [rotX, setRotX] = useState(0.05)
  const [zoom, setZoom] = useState(1.05)
  const [showSkeleton, setShowSkeleton] = useState(true)
  const [isAutoSpinning, setIsAutoSpinning] = useState(false)
  const [currentPreset, setCurrentPreset] = useState<'anterior' | 'posterior' | 'left' | 'right' | 'superior' | 'custom'>('custom')
  const [selectedOrganId, setSelectedOrganId] = useState<string>(explorer.organs[0]?.id ?? 'heart')
  const [activeTab, setActiveTab] = useState<TabType>('overview')

  // Drag interaction state
  const isDraggingRef = useRef(false)
  const lastPointerRef = useRef({ x: 0, y: 0 })
  const svgRef = useRef<SVGSVGElement>(null)

  // Auto-spin animation
  useEffect(() => {
    if (!isAutoSpinning) return
    let animId: number
    const animate = () => {
      setRotY((prev) => (prev + 0.008) % (Math.PI * 2))
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [isAutoSpinning])

  // Drag handlers for mouse & touch
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true
    lastPointerRef.current = { x: e.clientX, y: e.clientY }
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return
    setCurrentPreset('custom')
    const dx = e.clientX - lastPointerRef.current.x
    const dy = e.clientY - lastPointerRef.current.y
    lastPointerRef.current = { x: e.clientX, y: e.clientY }

    // Rotate yaw freely, clamp pitch between -45 deg and +45 deg
    setRotY((prev) => prev + dx * 0.012)
    setRotX((prev) => Math.max(-0.65, Math.min(0.65, prev - dy * 0.012)))
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false
    try {
      ;(e.target as Element).releasePointerCapture?.(e.pointerId)
    } catch {
      // Ignore if not captured
    }
  }

  // Preset view angles
  const setPresetView = (name: 'anterior' | 'posterior' | 'left' | 'right' | 'superior') => {
    setIsAutoSpinning(false)
    setCurrentPreset(name)
    switch (name) {
      case 'anterior':
        setRotY(0)
        setRotX(0.04)
        break
      case 'posterior':
        setRotY(Math.PI)
        setRotX(0.04)
        break
      case 'left':
        setRotY(Math.PI / 2)
        setRotX(0.04)
        break
      case 'right':
        setRotY(-Math.PI / 2)
        setRotX(0.04)
        break
      case 'superior':
        setRotY(0)
        setRotX(0.55)
        break
    }
  }

  const resetView = () => {
    setIsAutoSpinning(false)
    setCurrentPreset('custom')
    setRotY(0.15)
    setRotX(0.05)
    setZoom(1.05)
  }

  // Selected organ details
  const selectedOrgan = useMemo(
    () => explorer.organs.find((o) => o.id === selectedOrganId) ?? explorer.organs[0],
    [explorer.organs, selectedOrganId]
  )

  // Project all organs into 2D view and depth-sort them (Painter's algorithm)
  const projectedOrgans = useMemo(() => {
    return explorer.organs
      .map((organ) => {
        const proj = projectPoint(organ.position3D, rotX, rotY, zoom)
        return {
          organ,
          ...proj,
        }
      })
      .sort((a, b) => a.sz - b.sz) // Render furthest (most negative sz in rotated frame) first
  }, [explorer.organs, rotX, rotY, zoom])

  // Project anatomical skeleton landmarks
  const skeletonLandmarks = useMemo(() => {
    // Spine vertebrae points (C1 to L5)
    const spinePoints: Point3D[] = [
      { x: 0, y: 70, z: -10 },
      { x: 0, y: 110, z: -16 },
      { x: 0, y: 150, z: -18 },
      { x: 0, y: 190, z: -18 },
      { x: 0, y: 230, z: -18 },
      { x: 0, y: 270, z: -16 },
      { x: 0, y: 310, z: -12 },
    ]

    // Rib cage curves
    const ribs: Point3D[][] = [
      // Rib 2
      [
        { x: -8, y: 118, z: -16 },
        { x: -44, y: 122, z: 0 },
        { x: -28, y: 128, z: 22 },
        { x: 0, y: 128, z: 24 },
        { x: 28, y: 128, z: 22 },
        { x: 44, y: 122, z: 0 },
        { x: 8, y: 118, z: -16 },
      ],
      // Rib 5
      [
        { x: -10, y: 152, z: -18 },
        { x: -58, y: 158, z: 0 },
        { x: -36, y: 168, z: 25 },
        { x: 0, y: 168, z: 26 },
        { x: 36, y: 168, z: 25 },
        { x: 58, y: 158, z: 0 },
        { x: 10, y: 152, z: -18 },
      ],
      // Rib 8 (costal margin)
      [
        { x: -10, y: 190, z: -18 },
        { x: -64, y: 202, z: -2 },
        { x: -42, y: 220, z: 20 },
        { x: 0, y: 215, z: 24 },
        { x: 42, y: 220, z: 20 },
        { x: 64, y: 202, z: -2 },
        { x: 10, y: 190, z: -18 },
      ],
      // Pelvic brim
      [
        { x: -48, y: 300, z: 8 },
        { x: -38, y: 330, z: 20 },
        { x: 0, y: 335, z: 24 },
        { x: 38, y: 330, z: 20 },
        { x: 48, y: 300, z: 8 },
      ],
    ]

    return {
      spine: spinePoints.map((pt) => projectPoint(pt, rotX, rotY, zoom)),
      ribs: ribs.map((rib) => rib.map((pt) => projectPoint(pt, rotX, rotY, zoom))),
    }
  }, [rotX, rotY, zoom])

  // Body contour silhouette projected in 3D
  const bodySilhouette = useMemo(() => {
    const headTop = projectPoint({ x: 0, y: 15, z: 0 }, rotX, rotY, zoom)
    const chin = projectPoint({ x: 0, y: 78, z: 0 }, rotX, rotY, zoom)
    const leftShoulder = projectPoint({ x: -75, y: 102, z: 0 }, rotX, rotY, zoom)
    const rightShoulder = projectPoint({ x: 75, y: 102, z: 0 }, rotX, rotY, zoom)
    const leftHip = projectPoint({ x: -62, y: 305, z: 0 }, rotX, rotY, zoom)
    const rightHip = projectPoint({ x: 62, y: 305, z: 0 }, rotX, rotY, zoom)
    const pubic = projectPoint({ x: 0, y: 340, z: 0 }, rotX, rotY, zoom)

    return { headTop, chin, leftShoulder, rightShoulder, leftHip, rightHip, pubic }
  }, [rotX, rotY, zoom])

  // Select an organ
  const handleSelectOrgan = useCallback(
    (organId: string) => {
      setSelectedOrganId(organId)
      setIsAutoSpinning(false)
    },
    []
  )

  // Render specific organ shape based on 3D projected center
  const renderOrganShape = (item: { organ: Organ3DItem; sx: number; sy: number; sz: number; scale: number }) => {
    const { organ, sx, sy, scale } = item
    const isSelected = organ.id === selectedOrganId
    const s = scale

    // Realistic anatomical geometry generators
    switch (organ.shapeType) {
      case 'brain': {
        const rX = 28 * s
        const rY = 24 * s
        return (
          <g className="organ-mesh-group" key={organ.id}>
            {/* Outer brain cranial contour */}
            <ellipse
              cx={sx}
              cy={sy}
              rx={rX}
              ry={rY}
              fill={isSelected ? '#c4b5fd' : '#ddd6fe'}
              stroke={isSelected ? '#6d28d9' : '#8b5cf6'}
              strokeWidth={isSelected ? 3.5 : 2}
              filter={isSelected ? 'url(#organ-glow)' : undefined}
            />
            {/* Cerebral gyri & sulci fissures */}
            <path
              d={`M${sx - 18 * s} ${sy} Q${sx} ${sy - 8 * s} ${sx + 18 * s} ${sy} M${sx - 12 * s} ${sy - 10 * s} Q${sx - 4 * s} ${sy - 2 * s} ${sx + 8 * s} ${sy - 12 * s} M${sx - 10 * s} ${sy + 10 * s} Q${sx} ${sy + 4 * s} ${sx + 12 * s} ${sy + 10 * s}`}
              fill="none"
              stroke={isSelected ? '#5b21b6' : '#7c3aed'}
              strokeWidth={1.8 * s}
              strokeLinecap="round"
            />
            {/* Cerebellum below */}
            <ellipse
              cx={sx}
              cy={sy + 18 * s}
              rx={15 * s}
              ry={8 * s}
              fill={isSelected ? '#a78bfa' : '#c4b5fd'}
              stroke="#7c3aed"
              strokeWidth={1.5}
            />
          </g>
        )
      }

      case 'heart': {
        const hW = 22 * s
        const hH = 26 * s
        return (
          <g className="organ-mesh-group" key={organ.id}>
            {/* Great vessels: Aortic arch & pulmonary trunk */}
            <path
              d={`M${sx - 3 * s} ${sy - hH * 0.9} C${sx - 3 * s} ${sy - hH * 1.3} ${sx + 14 * s} ${sy - hH * 1.3} ${sx + 14 * s} ${sy - hH * 0.6}`}
              fill="none"
              stroke="#e11d48"
              strokeWidth={5 * s}
              strokeLinecap="round"
            />
            <path
              d={`M${sx - 8 * s} ${sy - hH * 0.8} L${sx - 14 * s} ${sy - hH * 1.1}`}
              fill="none"
              stroke="#0284c7"
              strokeWidth={4 * s}
              strokeLinecap="round"
            />
            {/* Muscular Ventricular Myocardium Cone */}
            <path
              d={`M${sx} ${sy + hH} C${sx - hW * 1.1} ${sy + hH * 0.2} ${sx - hW} ${sy - hH * 0.4} ${sx - hW * 0.4} ${sy - hH * 0.7} C${sx} ${sy - hH * 0.9} ${sx} ${sy - hH * 0.4} ${sx} ${sy - hH * 0.4} C${sx} ${sy - hH * 0.4} ${sx} ${sy - hH * 0.9} ${sx + hW * 0.4} ${sy - hH * 0.7} C${sx + hW} ${sy - hH * 0.4} ${sx + hW * 1.1} ${sy + hH * 0.2} ${sx} ${sy + hH} Z`}
              fill={isSelected ? '#f43f5e' : '#fda4af'}
              stroke={isSelected ? '#9f1239' : '#e11d48'}
              strokeWidth={isSelected ? 3.5 : 2}
              filter={isSelected ? 'url(#organ-glow)' : undefined}
            />
            {/* Coronary sulcus line */}
            <path
              d={`M${sx - hW * 0.6} ${sy - hH * 0.1} Q${sx} ${sy + hH * 0.1} ${sx + hW * 0.7} ${sy - hH * 0.2}`}
              fill="none"
              stroke="#be123c"
              strokeWidth={1.8 * s}
            />
          </g>
        )
      }

      case 'lungs': {
        const lW = 24 * s
        const lH = 42 * s
        return (
          <g className="organ-mesh-group" key={organ.id}>
            {/* Left Lung */}
            <path
              d={`M${sx - 4 * s} ${sy - lH * 0.8} C${sx - 16 * s} ${sy - lH * 0.7} ${sx - lW * 1.4} ${sy - lH * 0.2} ${sx - lW * 1.3} ${sy + lH * 0.4} C${sx - lW * 1.2} ${sy + lH * 0.8} ${sx - 18 * s} ${sy + lH * 0.85} ${sx - 8 * s} ${sy + lH * 0.7} C${sx - 12 * s} ${sy + lH * 0.2} ${sx - 10 * s} ${sy - lH * 0.2} ${sx - 4 * s} ${sy - lH * 0.8} Z`}
              fill={isSelected ? '#7dd3fc' : '#bae6fd'}
              stroke={isSelected ? '#0369a1' : '#0284c7'}
              strokeWidth={isSelected ? 3 : 1.8}
              filter={isSelected ? 'url(#organ-glow)' : undefined}
            />
            {/* Right Lung (3 lobes) */}
            <path
              d={`M${sx + 4 * s} ${sy - lH * 0.8} C${sx + 16 * s} ${sy - lH * 0.7} ${sx + lW * 1.5} ${sy - lH * 0.2} ${sx + lW * 1.4} ${sy + lH * 0.4} C${sx + lW * 1.3} ${sy + lH * 0.8} ${sx + 18 * s} ${sy + lH * 0.85} ${sx + 8 * s} ${sy + lH * 0.7} C${sx + 10 * s} ${sy + lH * 0.2} ${sx + 10 * s} ${sy - lH * 0.2} ${sx + 4 * s} ${sy - lH * 0.8} Z`}
              fill={isSelected ? '#7dd3fc' : '#bae6fd'}
              stroke={isSelected ? '#0369a1' : '#0284c7'}
              strokeWidth={isSelected ? 3 : 1.8}
              filter={isSelected ? 'url(#organ-glow)' : undefined}
            />
            {/* Bronchial tree branches */}
            <path
              d={`M${sx} ${sy - lH * 0.9} L${sx} ${sy - lH * 0.4} M${sx} ${sy - lH * 0.4} L${sx - 16 * s} ${sy - lH * 0.1} M${sx} ${sy - lH * 0.4} L${sx + 16 * s} ${sy - lH * 0.1}`}
              fill="none"
              stroke="#0284c7"
              strokeWidth={2 * s}
              strokeLinecap="round"
            />
          </g>
        )
      }

      case 'liver': {
        const livW = 34 * s
        const livH = 22 * s
        return (
          <g className="organ-mesh-group" key={organ.id}>
            {/* Hepatic convex superior surface and inferior visceral margin */}
            <path
              d={`M${sx - livW * 0.9} ${sy + livH * 0.2} C${sx - livW * 0.8} ${sy - livH * 0.8} ${sx + livW * 0.4} ${sx > 0 ? sy - livH * 0.9 : sy - livH * 0.7} ${sx + livW * 0.9} ${sy - livH * 0.1} C${sx + livW * 0.8} ${sy + livH * 0.8} ${sx + livW * 0.1} ${sy + livH * 0.9} ${sx - livW * 0.4} ${sy + livH * 0.7} Z`}
              fill={isSelected ? '#ea580c' : '#fdba74'}
              stroke={isSelected ? '#9a3412' : '#c2410c'}
              strokeWidth={isSelected ? 3.5 : 2}
              filter={isSelected ? 'url(#organ-glow)' : undefined}
            />
            {/* Falciform ligament dividing right/left lobes */}
            <path
              d={`M${sx + livW * 0.05} ${sy - livH * 0.8} Q${sx} ${sy} ${sx - livW * 0.1} ${sy + livH * 0.7}`}
              fill="none"
              stroke="#9a3412"
              strokeWidth={1.8 * s}
            />
            {/* Gallbladder nestled underneath */}
            <ellipse
              cx={sx + livW * 0.2}
              cy={sy + livH * 0.65}
              rx={5 * s}
              ry={8 * s}
              fill="#84cc16"
              stroke="#4d7c0f"
              strokeWidth={1.5}
            />
          </g>
        )
      }

      case 'stomach': {
        const stW = 20 * s
        const stH = 26 * s
        return (
          <g className="organ-mesh-group" key={organ.id}>
            {/* J-shaped visceral outline with fundus and greater curvature */}
            <path
              d={`M${sx + stW * 0.3} ${sy - stH * 0.8} C${sx - stW * 0.5} ${sy - stH * 1.1} ${sx - stW * 1.3} ${sy - stH * 0.2} ${sx - stW * 1.2} ${sy + stH * 0.4} C${sx - stW * 1.1} ${sy + stH * 0.9} ${sx} ${sy + stH * 0.9} ${sx + stW * 0.7} ${sy + stH * 0.5} C${sx + stW * 0.5} ${sy + stH * 0.2} ${sx - stW * 0.1} ${sy + stH * 0.2} ${sx - stW * 0.3} ${sy - stH * 0.1} C${sx - stW * 0.3} ${sy - stH * 0.4} ${sx} ${sy - stH * 0.6} ${sx + stW * 0.3} ${sy - stH * 0.8} Z`}
              fill={isSelected ? '#f59e0b' : '#fde68a'}
              stroke={isSelected ? '#b45309' : '#d97706'}
              strokeWidth={isSelected ? 3.5 : 2}
              filter={isSelected ? 'url(#organ-glow)' : undefined}
            />
            {/* Gastric rugae folds */}
            <path
              d={`M${sx - stW * 0.8} ${sy} Q${sx - stW * 0.4} ${sy + stH * 0.1} ${sx} ${sy - stH * 0.1} M${sx - stW * 0.7} ${sy + stH * 0.4} Q${sx - stW * 0.2} ${sy + stH * 0.5} ${sx + stW * 0.3} ${sy + stH * 0.4}`}
              fill="none"
              stroke="#b45309"
              strokeWidth={1.6 * s}
              strokeLinecap="round"
            />
          </g>
        )
      }

      case 'pancreas': {
        const pW = 28 * s
        const pH = 12 * s
        return (
          <g className="organ-mesh-group" key={organ.id}>
            {/* Transverse comma/tadpole shaped pancreas */}
            <path
              d={`M${sx - pW * 0.8} ${sy - pH * 0.4} C${sx - pW * 0.3} ${sy - pH * 0.9} ${sx + pW * 0.5} ${sy - pH * 0.6} ${sx + pW * 0.9} ${sy} C${sx + pW * 0.8} ${sy + pH * 0.9} ${sx + pW * 0.4} ${sy + pH * 0.7} ${sx - pW * 0.1} ${sy + pH * 0.4} C${sx - pW * 0.5} ${sy + pH * 0.2} ${sx - pW * 0.7} ${sy} ${sx - pW * 0.8} ${sy - pH * 0.4} Z`}
              fill={isSelected ? '#fbbf24' : '#fef08a'}
              stroke={isSelected ? '#d97706' : '#f59e0b'}
              strokeWidth={isSelected ? 3.5 : 2}
              filter={isSelected ? 'url(#organ-glow)' : undefined}
            />
            {/* Pancreatic main duct */}
            <path
              d={`M${sx - pW * 0.7} ${sy - pH * 0.2} Q${sx} ${sy} ${sx + pW * 0.7} ${sy + pH * 0.1}`}
              fill="none"
              stroke="#b45309"
              strokeWidth={1.5 * s}
              strokeDasharray="3 2"
            />
          </g>
        )
      }

      case 'kidneys': {
        const kH = 19 * s
        return (
          <g className="organ-mesh-group" key={organ.id}>
            {/* Left Kidney */}
            <path
              d={`M${sx - 26 * s} ${sy - kH * 0.8} C${sx - 36 * s} ${sy - kH * 0.6} ${sx - 36 * s} ${sy + kH * 0.6} ${sx - 26 * s} ${sy + kH * 0.8} C${sx - 22 * s} ${sy + kH * 0.7} ${sx - 20 * s} ${sy} ${sx - 26 * s} ${sy - kH * 0.8} Z`}
              fill={isSelected ? '#b91c1c' : '#fca5a5'}
              stroke={isSelected ? '#7f1d1d' : '#dc2626'}
              strokeWidth={isSelected ? 3 : 2}
              filter={isSelected ? 'url(#organ-glow)' : undefined}
            />
            {/* Right Kidney */}
            <path
              d={`M${sx + 26 * s} ${sy - kH * 0.6} C${sx + 36 * s} ${sy - kH * 0.4} ${sx + 36 * s} ${sy + kH * 0.8} ${sx + 26 * s} ${sy + kH * 1.0} C${sx + 22 * s} ${sy + kH * 0.9} ${sx + 20 * s} ${sy + kH * 0.2} ${sx + 26 * s} ${sy - kH * 0.6} Z`}
              fill={isSelected ? '#b91c1c' : '#fca5a5'}
              stroke={isSelected ? '#7f1d1d' : '#dc2626'}
              strokeWidth={isSelected ? 3 : 2}
              filter={isSelected ? 'url(#organ-glow)' : undefined}
            />
            {/* Ureters descending */}
            <path
              d={`M${sx - 22 * s} ${sy + 2 * s} Q${sx - 18 * s} ${sy + 24 * s} ${sx - 8 * s} ${sy + 45 * s} M${sx + 22 * s} ${sy + 4 * s} Q${sx + 18 * s} ${sy + 24 * s} ${sx + 8 * s} ${sy + 45 * s}`}
              fill="none"
              stroke="#dc2626"
              strokeWidth={1.5 * s}
              strokeDasharray="4 3"
            />
          </g>
        )
      }

      case 'intestines': {
        const inW = 32 * s
        const inH = 34 * s
        return (
          <g className="organ-mesh-group" key={organ.id}>
            {/* Large Intestine / Colon frame (ascending, transverse, descending) */}
            <path
              d={`M${sx - inW * 0.9} ${sy + inH * 0.8} L${sx - inW * 0.9} ${sy - inH * 0.6} Q${sx} ${sy - inH * 0.8} ${sx + inW * 0.9} ${sy - inH * 0.6} L${sx + inW * 0.9} ${sy + inH * 0.8} L${sx + inW * 0.5} ${sy + inH * 0.9}`}
              fill="none"
              stroke={isSelected ? '#15803d' : '#4ade80'}
              strokeWidth={8 * s}
              strokeLinecap="round"
              strokeLinejoin="round"
              filter={isSelected ? 'url(#organ-glow)' : undefined}
            />
            {/* Small Intestine loops nestled in the center */}
            <path
              d={`M${sx - inW * 0.5} ${sy - inH * 0.2} Q${sx - inW * 0.2} ${sy - inH * 0.4} ${sx + inW * 0.3} ${sy - inH * 0.3} Q${sx + inW * 0.5} ${sy} ${sx - inW * 0.2} ${sy} Q${sx - inW * 0.6} ${sy + inH * 0.3} ${sx + inW * 0.2} ${sy + inH * 0.3} Q${sx + inW * 0.5} ${sy + inH * 0.5} ${sx - inW * 0.1} ${sy + inH * 0.6}`}
              fill="none"
              stroke={isSelected ? '#16a34a' : '#86efac'}
              strokeWidth={6 * s}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )
      }

      default:
        return (
          <circle
            key={organ.id}
            cx={sx}
            cy={sy}
            r={16 * s}
            fill={isSelected ? '#3b82f6' : '#93c5fd'}
            stroke="#1d4ed8"
            strokeWidth={2}
          />
        )
    }
  }

  return (
    <section className="organ-3d-explorer" aria-labelledby={headingId}>
      {/* Header with Title and Disclaimer */}
      <header className="organ-3d-header">
        <div className="organ-3d-kicker-row">
          <span className="section-kicker">
            <Activity size={14} />
            {isBn ? 'ইন্টারেক্টিভ ৩ডি অ্যানাটমিক্যাল মডেল' : '3D INTERACTIVE ORGAN EXPLORER'}
          </span>
          <span className="organ-3d-disclaimer-badge">
            <Info size={13} />
            {explorer.disclaimer[lang]}
          </span>
        </div>
        <h2 id={headingId}>{explorer.title[lang]}</h2>
        <p className="organ-3d-lead">{explorer.description[lang]}</p>
      </header>

      {/* Main Interactive Stage & Detail Card Layout */}
      <div className="organ-3d-stage-layout">
        {/* Left Side: 3D Interactive Viewport */}
        <div className="organ-3d-viewport-card">
          {/* Quick Preset Navigation & Controls Toolbar */}
          <div className="organ-3d-toolbar" role="toolbar" aria-label={isBn ? '৩ডি নিয়ন্ত্রণ' : '3D View Controls'}>
            <div className="organ-3d-presets" role="group" aria-label={isBn ? 'অ্যাঙ্গেল নির্বাচন' : 'View Angles'}>
              <button
                type="button"
                className={`preset-btn ${currentPreset === 'anterior' ? 'active' : ''}`}
                onClick={() => setPresetView('anterior')}
                title={isBn ? 'সম্মুখভাগ (Anterior View)' : 'Anterior View'}
              >
                {isBn ? 'সম্মুখ' : 'Anterior'}
              </button>
              <button
                type="button"
                className={`preset-btn ${currentPreset === 'posterior' ? 'active' : ''}`}
                onClick={() => setPresetView('posterior')}
                title={isBn ? 'পশ্চাৎভাগ (Posterior View)' : 'Posterior View'}
              >
                {isBn ? 'পশ্চাৎ' : 'Posterior'}
              </button>
              <button
                type="button"
                className={`preset-btn ${currentPreset === 'right' ? 'active' : ''}`}
                onClick={() => setPresetView('right')}
                title={isBn ? 'ডান পার্শ্ব (Right Lateral)' : 'Right Lateral'}
              >
                {isBn ? 'ডান পার্শ্ব' : 'Right'}
              </button>
              <button
                type="button"
                className={`preset-btn ${currentPreset === 'left' ? 'active' : ''}`}
                onClick={() => setPresetView('left')}
                title={isBn ? 'বাম পার্শ্ব (Left Lateral)' : 'Left Lateral'}
              >
                {isBn ? 'বাম পার্শ্ব' : 'Left'}
              </button>
              <button
                type="button"
                className={`preset-btn ${currentPreset === 'superior' ? 'active' : ''}`}
                onClick={() => setPresetView('superior')}
                title={isBn ? 'উর্ধ্বভাগ (Superior View)' : 'Superior View'}
              >
                {isBn ? 'উর্ধ্ব' : 'Superior'}
              </button>
            </div>

            <div className="organ-3d-actions">
              <button
                type="button"
                className="tool-btn"
                onClick={() => setZoom((z) => Math.min(1.6, z + 0.15))}
                title={isBn ? 'জুম ইন' : 'Zoom In'}
                aria-label={isBn ? 'জুম ইন' : 'Zoom In'}
              >
                <ZoomIn size={15} />
              </button>
              <button
                type="button"
                className="tool-btn"
                onClick={() => setZoom((z) => Math.max(0.65, z - 0.15))}
                title={isBn ? 'জুম আউট' : 'Zoom Out'}
                aria-label={isBn ? 'জুম আউট' : 'Zoom Out'}
              >
                <ZoomOut size={15} />
              </button>
              <button
                type="button"
                className={`tool-btn ${isAutoSpinning ? 'active-spin' : ''}`}
                onClick={() => setIsAutoSpinning((s) => !s)}
                title={isBn ? 'স্বয়ংক্রিয় ঘূর্ণন' : 'Auto Rotate'}
                aria-label={isBn ? 'স্বয়ংক্রিয় ঘূর্ণন' : 'Auto Rotate'}
                aria-pressed={isAutoSpinning}
              >
                {isAutoSpinning ? <Pause size={14} /> : <Play size={14} />}
              </button>
              <button
                type="button"
                className={`tool-btn ${showSkeleton ? 'active-layer' : ''}`}
                onClick={() => setShowSkeleton((s) => !s)}
                title={isBn ? 'কঙ্কাল ফ্রেম টগল' : 'Toggle Skeleton Cage'}
                aria-label={isBn ? 'কঙ্কাল ফ্রেম টগল' : 'Toggle Skeleton Cage'}
                aria-pressed={showSkeleton}
              >
                <Layers size={15} />
              </button>
              <button
                type="button"
                className="tool-btn"
                onClick={resetView}
                title={isBn ? 'রিসেট' : 'Reset View'}
                aria-label={isBn ? 'রিসেট' : 'Reset View'}
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          {/* Interactive 3D SVG Stage */}
          <div
            className="organ-3d-canvas-wrap"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            tabIndex={0}
            role="application"
            aria-label={
              isBn
                ? 'ইন্টারেক্টিভ ৩ডি মানবদেহ ও অঙ্গ মডেল: ড্র্যাগ করে ঘোরান, টাচ বা ক্লিক করে অঙ্গের বিবরণ দেখুন'
                : 'Interactive 3D anatomical organ model. Drag or touch to rotate in 3D; click organs to inspect descriptions.'
            }
          >
            <svg
              ref={svgRef}
              className="organ-3d-svg"
              viewBox="0 0 360 440"
              role="img"
              aria-label={explorer.title[lang]}
            >
              <defs>
                {/* 3D Radiant glow filter for highlighted organ */}
                <filter id="organ-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.8" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Depth Shading Gradients */}
                <linearGradient id="body-depth-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              {/* 3D Human Body Translucent Contour Frame */}
              <g className="body-silhouette-3d" pointerEvents="none">
                {/* Cranial Contour */}
                <circle
                  cx={bodySilhouette.headTop.sx}
                  cy={bodySilhouette.headTop.sy + 26 * bodySilhouette.headTop.scale}
                  r={28 * bodySilhouette.headTop.scale}
                  fill="url(#body-depth-grad)"
                  stroke="#94a3b8"
                  strokeWidth={1.5}
                  strokeDasharray="4 3"
                />
                {/* Torso & Limb Outlines */}
                <path
                  d={`M${bodySilhouette.chin.sx} ${bodySilhouette.chin.sy} L${bodySilhouette.leftShoulder.sx} ${bodySilhouette.leftShoulder.sy} L${bodySilhouette.leftHip.sx} ${bodySilhouette.leftHip.sy} L${bodySilhouette.pubic.sx} ${bodySilhouette.pubic.sy} L${bodySilhouette.rightHip.sx} ${bodySilhouette.rightHip.sy} L${bodySilhouette.rightShoulder.sx} ${bodySilhouette.rightShoulder.sy} Z`}
                  fill="url(#body-depth-grad)"
                  stroke="#94a3b8"
                  strokeWidth={1.5}
                  strokeDasharray="5 4"
                />
              </g>

              {/* 3D Skeletal Cage (Vertebral Column & Ribs) when enabled */}
              {showSkeleton && (
                <g className="skeleton-cage-3d" pointerEvents="none" opacity={0.45}>
                  {/* Spine connection path */}
                  <path
                    d={skeletonLandmarks.spine.reduce(
                      (acc, pt, idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${pt.sx} ${pt.sy}`,
                      ''
                    )}
                    fill="none"
                    stroke="#64748b"
                    strokeWidth={3 * zoom}
                    strokeLinecap="round"
                  />
                  {/* Vertebral disc markers */}
                  {skeletonLandmarks.spine.map((pt, idx) => (
                    <circle key={idx} cx={pt.sx} cy={pt.sy} r={3.5 * pt.scale} fill="#94a3b8" />
                  ))}
                  {/* Rib arches */}
                  {skeletonLandmarks.ribs.map((rib, rIdx) => (
                    <path
                      key={rIdx}
                      d={rib.reduce((acc, pt, idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${pt.sx} ${pt.sy}`, '')}
                      fill="none"
                      stroke="#94a3b8"
                      strokeWidth={1.8 * zoom}
                      strokeLinecap="round"
                    />
                  ))}
                </g>
              )}

              {/* Depth-sorted 3D Interactive Organs */}
              <g className="organs-layer-3d">
                {projectedOrgans.map((item) => {
                  const isSelected = item.organ.id === selectedOrganId
                  return (
                    <g
                      key={item.organ.id}
                      className={`organ-interactive-node ${isSelected ? 'is-selected' : ''}`}
                      role="button"
                      tabIndex={0}
                      aria-label={`${item.organ.name[lang]} (${item.organ.latinName})`}
                      aria-pressed={isSelected}
                      onClick={() => handleSelectOrgan(item.organ.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleSelectOrgan(item.organ.id)
                        }
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* 3D Organ Mesh */}
                      {renderOrganShape(item)}

                      {/* 3D Pin / Callout Badge */}
                      <g className="organ-pin" transform={`translate(${item.sx}, ${item.sy})`}>
                        <circle
                          r={isSelected ? 10 * item.scale : 6 * item.scale}
                          fill={isSelected ? '#10b981' : '#ffffff'}
                          stroke={isSelected ? '#065f46' : '#475569'}
                          strokeWidth={2}
                          className={isSelected ? 'pulse-pin' : ''}
                        />
                        <text
                          y={3 * item.scale}
                          textAnchor="middle"
                          fill={isSelected ? '#ffffff' : '#0f172a'}
                          fontSize={isSelected ? 9 * item.scale : 7 * item.scale}
                          fontWeight={700}
                          pointerEvents="none"
                        >
                          {item.organ.name[lang].slice(0, 1)}
                        </text>
                      </g>
                    </g>
                  )
                })}
              </g>
            </svg>

            {/* Instruction tooltip overlay */}
            <div className="canvas-touch-hint" aria-hidden="true">
              <Compass size={13} />
              <span>
                {isBn
                  ? 'ঘোরাতে ড্র্যাগ / টাচ করুন · অঙ্গ স্পর্শ করে বিবরণ জানুন'
                  : 'Drag/touch to rotate in 3D · Touch any organ to inspect'}
              </span>
            </div>
          </div>

          {/* Organ Quick Selector Strip */}
          <div className="organ-quick-selector" role="group" aria-label={isBn ? 'অঙ্গ তালিকা' : 'Organ List'}>
            {explorer.organs.map((organ) => {
              const active = organ.id === selectedOrganId
              return (
                <button
                  type="button"
                  key={organ.id}
                  className={`organ-chip ${active ? 'active' : ''}`}
                  onClick={() => handleSelectOrgan(organ.id)}
                  aria-pressed={active}
                >
                  <span className="organ-chip-dot" style={{ backgroundColor: organ.color }} />
                  <span className="organ-chip-name">{organ.name[lang]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Side: Elaborate Organ Description Panel */}
        <aside className="organ-3d-detail-card" aria-live="polite">
          {selectedOrgan ? (
            <>
              {/* Organ Header */}
              <header className="detail-card-header">
                <div className="organ-badge-row">
                  <span className="organ-system-badge">
                    <HeartPulse size={12} />
                    {selectedOrgan.system[lang]}
                  </span>
                  <span className="organ-cavity-badge">{selectedOrgan.cavity[lang]}</span>
                  <span className="organ-latin-badge">{selectedOrgan.latinName}</span>
                </div>
                <h3>{selectedOrgan.name[lang]}</h3>
                <p className="organ-card-lead">{selectedOrgan.description[lang]}</p>
              </header>

              {/* Tab navigation */}
              <div className="detail-tabs-nav" role="tablist" aria-label={isBn ? 'অঙ্গ বিবরণ ট্যাব' : 'Organ detail tabs'}>
                <button
                  type="button"
                  role="tab"
                  id="tab-overview"
                  aria-controls="panel-overview"
                  aria-selected={activeTab === 'overview'}
                  className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <Eye size={13} />
                  {isBn ? 'স্থানিক সম্পর্ক' : 'Relations'}
                </button>
                <button
                  type="button"
                  role="tab"
                  id="tab-physiology"
                  aria-controls="panel-physiology"
                  aria-selected={activeTab === 'physiology'}
                  className={`tab-btn ${activeTab === 'physiology' ? 'active' : ''}`}
                  onClick={() => setActiveTab('physiology')}
                >
                  <Activity size={13} />
                  {isBn ? 'শারীরবৃত্তীয় কাজ' : 'Physiology'}
                </button>
                <button
                  type="button"
                  role="tab"
                  id="tab-nutrition"
                  aria-controls="panel-nutrition"
                  aria-selected={activeTab === 'nutrition'}
                  className={`tab-btn ${activeTab === 'nutrition' ? 'active' : ''}`}
                  onClick={() => setActiveTab('nutrition')}
                >
                  <Info size={13} />
                  {isBn ? 'পুষ্টি ও মেটাবলিজম' : 'Nutrition Link'}
                </button>
                <button
                  type="button"
                  role="tab"
                  id="tab-clinical"
                  aria-controls="panel-clinical"
                  aria-selected={activeTab === 'clinical'}
                  className={`tab-btn ${activeTab === 'clinical' ? 'active' : ''}`}
                  onClick={() => setActiveTab('clinical')}
                >
                  <HeartPulse size={13} />
                  {isBn ? 'ক্লিনিক্যাল নোট' : 'Clinical Note'}
                </button>
              </div>

              {/* Tab Contents */}
              <div className="detail-tab-body">
                {activeTab === 'overview' && (
                  <div
                    role="tabpanel"
                    id="panel-overview"
                    aria-labelledby="tab-overview"
                    className="tab-content"
                  >
                    <h4>{isBn ? 'স্থানিক সম্পর্ক ও অ্যানাটমিক্যাল অবস্থান' : 'Spatial Relations & Orientation'}</h4>
                    <p>{selectedOrgan.spatialRelations ? selectedOrgan.spatialRelations[lang] : selectedOrgan.description[lang]}</p>
                    <div className="orientation-metric-grid">
                      <div className="metric-box">
                        <small>{isBn ? 'দেহগহ্বর' : 'Body Cavity'}</small>
                        <b>{selectedOrgan.cavity[lang]}</b>
                      </div>
                      <div className="metric-box">
                        <small>{isBn ? 'অঙ্গতন্ত্র' : 'Organ System'}</small>
                        <b>{selectedOrgan.system[lang]}</b>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'physiology' && (
                  <div
                    role="tabpanel"
                    id="panel-physiology"
                    aria-labelledby="tab-physiology"
                    className="tab-content"
                  >
                    <h4>{isBn ? 'শারীরবৃত্তীয় কার্যপদ্ধতি ও মেকানিজম' : 'Physiological Role & Mechanisms'}</h4>
                    <p>{selectedOrgan.physiology[lang]}</p>
                  </div>
                )}

                {activeTab === 'nutrition' && (
                  <div
                    role="tabpanel"
                    id="panel-nutrition"
                    aria-labelledby="tab-nutrition"
                    className="tab-content"
                  >
                    <h4>{isBn ? 'পুষ্টি উপাদান ও মেটাবলিক ইন্টারফেস' : 'Nutritional & Metabolic Connections'}</h4>
                    <p>{selectedOrgan.nutritionConnection[lang]}</p>
                  </div>
                )}

                {activeTab === 'clinical' && (
                  <div
                    role="tabpanel"
                    id="panel-clinical"
                    aria-labelledby="tab-clinical"
                    className="tab-content"
                  >
                    <h4>{isBn ? 'ক্লিনিক্যাল গুরুত্ব ও স্বাভাবিক ভিন্নতা' : 'Clinical Context & Normal Variation'}</h4>
                    <p>{selectedOrgan.clinicalSignificance[lang]}</p>
                  </div>
                )}
              </div>

              {/* Jump to linked chapter section */}
              <div className="detail-card-actions">
                <button
                  type="button"
                  className="jump-section-btn"
                  onClick={() => onSectionSelect(selectedOrgan.sectionId)}
                >
                  <span>{isBn ? 'অধ্যায়ের সংশ্লিষ্ট পাঠে যান' : 'Go to linked chapter section'}</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </>
          ) : (
            <p className="no-selection-msg">
              {isBn ? 'যেকোনো অঙ্গ নির্বাচন করে বিস্তারিত বিবরণ দেখুন।' : 'Select an organ to inspect details.'}
            </p>
          )}
        </aside>
      </div>
    </section>
  )
}
