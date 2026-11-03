import React, { useEffect, useRef, useState, useMemo } from 'react'
import * as THREE from 'three'
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Play,
  Pause,
  ChevronRight,
  Compass,
  Sparkles,
} from 'lucide-react'
import type { ContentDepth, LessonLocale } from '../../content/lessonSchema'
import {
  INTESTINAL_ABSORPTION_STRUCTURES,
  type True3DStructureInfo,
} from './intestinalAbsorptionData'

export type { True3DStructureInfo }
export { INTESTINAL_ABSORPTION_STRUCTURES }

export interface True3DViewerProps {
  currentDepth: ContentDepth
  locale: LessonLocale
  onSectionSelect: (sectionId: string) => void
  className?: string
}

function checkWebGLSupport(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    return Boolean(gl)
  } catch {
    return false
  }
}

export function True3DViewer({
  currentDepth,
  locale,
  onSectionSelect,
  className = '',
}: True3DViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedId, setSelectedId] = useState<string>('sglt1')
  const [isRotating, setIsRotating] = useState(false)
  const [hasWebGL, setHasWebGL] = useState<boolean>(() => checkWebGLSupport())
  const [isHovered, setIsHovered] = useState(false)

  const isBn = locale === 'bn'
  const lang = isBn ? 'bn' : 'en'
  const activeStructure = useMemo(
    () => INTESTINAL_ABSORPTION_STRUCTURES.find((s) => s.id === selectedId) || INTESTINAL_ABSORPTION_STRUCTURES[0],
    [selectedId]
  )

  // Internal Three.js refs
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const meshesByIdRef = useRef<Map<string, THREE.Object3D>>(new Map())
  const animFrameIdRef = useRef<number | null>(null)

  // Camera orbit state
  const orbitAngleRef = useRef<{ theta: number; phi: number; radius: number }>({
    theta: 0.3,
    phi: 0.55,
    radius: 36,
  })
  const isPointerDownRef = useRef(false)
  const pointerStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  const handleToggleRotate = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)')
      if (media.matches) return
    }
    setIsRotating((prev) => !prev)
  }

  // Initialize Three.js Scene
  useEffect(() => {
    if (!hasWebGL || !canvasRef.current || !containerRef.current) return

    const canvas = canvasRef.current
    const container = containerRef.current
    const width = container.clientWidth || 600
    const height = Math.max(380, Math.min(500, Math.round(width * 0.65)))

    // 1. Scene
    const scene = new THREE.Scene()
    scene.background = null // Transparent for theme support
    sceneRef.current = scene

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000)
    cameraRef.current = camera

    const updateCameraPos = () => {
      const { theta, phi, radius } = orbitAngleRef.current
      camera.position.x = radius * Math.sin(phi) * Math.sin(theta)
      camera.position.y = radius * Math.cos(phi)
      camera.position.z = radius * Math.sin(phi) * Math.cos(theta)
      camera.lookAt(0, 1.5, 0)
    }
    updateCameraPos()

    // 3. Renderer
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      })
    } catch {
      setTimeout(() => setHasWebGL(false), 0)
      return
    }
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    rendererRef.current = renderer

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.85)
    mainLight.position.set(15, 25, 20)
    scene.add(mainLight)

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.45)
    rimLight.position.set(-20, -10, -15)
    scene.add(rimLight)

    // 5. Construct 3D Anatomical & Molecular Model
    const meshesMap = new Map<string, THREE.Object3D>()

    // A. Lamina Propria Villus Core Substrate
    const stromaGeo = new THREE.CylinderGeometry(8.5, 9.5, 3.5, 32)
    const stromaMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      roughness: 0.65,
      metalness: 0.1,
      transparent: true,
      opacity: 0.85,
    })
    const stromaMesh = new THREE.Mesh(stromaGeo, stromaMat)
    stromaMesh.position.set(0, -2.5, 0)
    scene.add(stromaMesh)

    // B. Subepithelial Capillary Loop (Red Tube)
    const capillaryCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4, -3.5, -2),
      new THREE.Vector3(-3, -1.2, 0),
      new THREE.Vector3(0, -0.8, 1),
      new THREE.Vector3(3, -1.2, 0),
      new THREE.Vector3(4, -3.5, -2),
    ])
    const capillaryGeo = new THREE.TubeGeometry(capillaryCurve, 24, 0.55, 12, false)
    const capillaryMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      roughness: 0.35,
      metalness: 0.2,
      emissive: 0x450a0a,
      emissiveIntensity: 0.2,
    })
    const capillaryMesh = new THREE.Mesh(capillaryGeo, capillaryMat)
    capillaryMesh.userData = { id: 'capillary' }
    scene.add(capillaryMesh)
    meshesMap.set('capillary', capillaryMesh)

    // C. Central Lacteal Lymphatic Vessel (Amber Tube)
    const lactealCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -4, 0),
      new THREE.Vector3(0, -1.5, 0),
      new THREE.Vector3(0, 0.2, 0),
    ])
    const lactealGeo = new THREE.TubeGeometry(lactealCurve, 16, 0.75, 12, false)
    const lactealMat = new THREE.MeshStandardMaterial({
      color: 0xca8a04,
      roughness: 0.4,
      metalness: 0.15,
      emissive: 0x422006,
      emissiveIntensity: 0.2,
    })
    const lactealMesh = new THREE.Mesh(lactealGeo, lactealMat)
    lactealMesh.userData = { id: 'lacteal' }
    scene.add(lactealMesh)
    meshesMap.set('lacteal', lactealMesh)

    // D. Columnar Enterocyte Cells (Monolayer Array)
    const enterocyteGroup = new THREE.Group()
    const cellGeo = new THREE.BoxGeometry(2.1, 5.2, 2.1)
    const cellMat = new THREE.MeshStandardMaterial({
      color: 0xfef9c3,
      roughness: 0.45,
      metalness: 0.05,
      transparent: true,
      opacity: 0.9,
    })

    const nucleusGeo = new THREE.SphereGeometry(0.65, 16, 16)
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0x9333ea, // Purple nucleus
      roughness: 0.3,
    })

    const cellPositions = [
      { x: -5.5, z: 0 },
      { x: -2.75, z: 0 },
      { x: 0, z: 0 },
      { x: 2.75, z: 0 },
      { x: 5.5, z: 0 },
      { x: -2.75, z: -2.5 },
      { x: 0, z: -2.5 },
      { x: 2.75, z: -2.5 },
    ]

    cellPositions.forEach((pos) => {
      const cellMesh = new THREE.Mesh(cellGeo, cellMat)
      cellMesh.position.set(pos.x, 2.2, pos.z)
      cellMesh.userData = { id: 'enterocyte' }
      enterocyteGroup.add(cellMesh)

      const nucMesh = new THREE.Mesh(nucleusGeo, nucleusMat)
      nucMesh.position.set(pos.x, 1.2, pos.z)
      enterocyteGroup.add(nucMesh)
    })
    scene.add(enterocyteGroup)
    meshesMap.set('enterocyte', enterocyteGroup)

    // E. Apical Brush-Border Microvilli Carpet
    const brushBorderGroup = new THREE.Group()
    const microvillusGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.1, 6)
    const microvillusMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.4,
      emissive: 0x064e3b,
      emissiveIntensity: 0.15,
    })

    for (let x = -6.5; x <= 6.5; x += 0.55) {
      for (let z = -3.2; z <= 1.2; z += 0.55) {
        const mv = new THREE.Mesh(microvillusGeo, microvillusMat)
        mv.position.set(x + (Math.random() - 0.5) * 0.1, 5.25, z + (Math.random() - 0.5) * 0.1)
        brushBorderGroup.add(mv)
      }
    }
    brushBorderGroup.userData = { id: 'brush-border' }
    scene.add(brushBorderGroup)
    meshesMap.set('brush-border', brushBorderGroup)

    // F. Apical SGLT1 Transporter Complexes (Amber Gold Cylinders)
    const sglt1Group = new THREE.Group()
    const sglt1Geo = new THREE.CylinderGeometry(0.35, 0.35, 0.7, 12)
    const sglt1Mat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.25,
      metalness: 0.4,
      emissive: 0x78350f,
      emissiveIntensity: 0.35,
    })

    const sglt1Coords = [
      { x: -4.2, z: 0.2 },
      { x: -1.5, z: -0.8 },
      { x: 1.2, z: 0.4 },
      { x: 3.8, z: -0.5 },
    ]
    sglt1Coords.forEach((coord) => {
      const mesh = new THREE.Mesh(sglt1Geo, sglt1Mat)
      mesh.position.set(coord.x, 5.4, coord.z)
      mesh.userData = { id: 'sglt1' }
      sglt1Group.add(mesh)
    })
    sglt1Group.userData = { id: 'sglt1' }
    scene.add(sglt1Group)
    meshesMap.set('sglt1', sglt1Group)

    // G. Basolateral GLUT2 Carriers (Royal Blue Capsules)
    const glut2Group = new THREE.Group()
    const glut2Geo = new THREE.CapsuleGeometry(0.28, 0.5, 8, 12)
    const glut2Mat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      roughness: 0.3,
      metalness: 0.3,
      emissive: 0x1e3a8a,
      emissiveIntensity: 0.3,
    })

    const glut2Coords = [
      { x: -3.8, y: 0.3, z: 1.1 },
      { x: -1.2, y: 0.3, z: 1.1 },
      { x: 1.6, y: 0.3, z: 1.1 },
      { x: 4.1, y: 0.3, z: 1.1 },
    ]
    glut2Coords.forEach((coord) => {
      const mesh = new THREE.Mesh(glut2Geo, glut2Mat)
      mesh.rotation.x = Math.PI / 2
      mesh.position.set(coord.x, coord.y, coord.z)
      mesh.userData = { id: 'glut2' }
      glut2Group.add(mesh)
    })
    glut2Group.userData = { id: 'glut2' }
    scene.add(glut2Group)
    meshesMap.set('glut2', glut2Group)

    // H. Basolateral Na+/K+-ATPase Pumps (Crimson Rings)
    const nakGroup = new THREE.Group()
    const nakGeo = new THREE.TorusGeometry(0.3, 0.12, 8, 16)
    const nakMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      roughness: 0.3,
      metalness: 0.35,
      emissive: 0x7f1d1d,
      emissiveIntensity: 0.4,
    })

    const nakCoords = [
      { x: -2.6, y: 0.3, z: 1.1 },
      { x: 0.2, y: 0.3, z: 1.1 },
      { x: 2.9, y: 0.3, z: 1.1 },
    ]
    nakCoords.forEach((coord) => {
      const mesh = new THREE.Mesh(nakGeo, nakMat)
      mesh.position.set(coord.x, coord.y, coord.z)
      mesh.userData = { id: 'na-k-atpase' }
      nakGroup.add(mesh)
    })
    nakGroup.userData = { id: 'na-k-atpase' }
    scene.add(nakGroup)
    meshesMap.set('na-k-atpase', nakGroup)

    meshesByIdRef.current = meshesMap

    // Render loop
    const animate = () => {
      if (isRotating && !isHovered) {
        orbitAngleRef.current.theta += 0.006
        updateCameraPos()
      }
      renderer.render(scene, camera)
      animFrameIdRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Handle container resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return
      const w = containerRef.current.clientWidth
      const h = Math.max(380, Math.min(500, Math.round(w * 0.65)))
      cameraRef.current.aspect = w / h
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current)
      }
      renderer.dispose()
      scene.clear()
    }
  }, [hasWebGL, isRotating, isHovered])

  // Raycasting pointer interaction
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isPointerDownRef.current = true
    pointerStartRef.current = { x: e.clientX, y: e.clientY }
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isPointerDownRef.current || !cameraRef.current) return
    const dx = e.clientX - pointerStartRef.current.x
    const dy = e.clientY - pointerStartRef.current.y
    pointerStartRef.current = { x: e.clientX, y: e.clientY }

    orbitAngleRef.current.theta -= dx * 0.008
    orbitAngleRef.current.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, orbitAngleRef.current.phi - dy * 0.008))

    const { theta, phi, radius } = orbitAngleRef.current
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta)
    cameraRef.current.position.y = radius * Math.cos(phi)
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta)
    cameraRef.current.lookAt(0, 1.5, 0)
    rendererRef.current?.render(sceneRef.current!, cameraRef.current)
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isPointerDownRef.current = false
    // Raycasting check for structure picking
    if (!canvasRef.current || !cameraRef.current || !sceneRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1

    const raycaster = new THREE.Raycaster()
    raycaster.setFromCamera(new THREE.Vector2(x, y), cameraRef.current)
    const intersects = raycaster.intersectObjects(sceneRef.current.children, true)

    if (intersects.length > 0) {
      let cur: THREE.Object3D | null = intersects[0].object
      while (cur && cur !== sceneRef.current) {
        if (cur.userData && cur.userData.id) {
          setSelectedId(cur.userData.id)
          break
        }
        cur = cur.parent
      }
    }
  }

  // Camera Orbit Controls Helpers
  const rotateCamera = (deltaTheta: number, deltaPhi: number) => {
    if (!cameraRef.current || !sceneRef.current || !rendererRef.current) return
    orbitAngleRef.current.theta += deltaTheta
    orbitAngleRef.current.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, orbitAngleRef.current.phi + deltaPhi))
    const { theta, phi, radius } = orbitAngleRef.current
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta)
    cameraRef.current.position.y = radius * Math.cos(phi)
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta)
    cameraRef.current.lookAt(0, 1.5, 0)
    rendererRef.current.render(sceneRef.current, cameraRef.current)
  }

  const zoomCamera = (delta: number) => {
    if (!cameraRef.current || !sceneRef.current || !rendererRef.current) return
    orbitAngleRef.current.radius = Math.max(16, Math.min(60, orbitAngleRef.current.radius + delta))
    const { theta, phi, radius } = orbitAngleRef.current
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta)
    cameraRef.current.position.y = radius * Math.cos(phi)
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta)
    cameraRef.current.lookAt(0, 1.5, 0)
    rendererRef.current.render(sceneRef.current, cameraRef.current)
  }

  const resetCamera = () => {
    orbitAngleRef.current = { theta: 0.3, phi: 0.55, radius: 36 }
    if (!cameraRef.current || !sceneRef.current || !rendererRef.current) return
    const { theta, phi, radius } = orbitAngleRef.current
    cameraRef.current.position.x = radius * Math.sin(phi) * Math.sin(theta)
    cameraRef.current.position.y = radius * Math.cos(phi)
    cameraRef.current.position.z = radius * Math.sin(phi) * Math.cos(theta)
    cameraRef.current.lookAt(0, 1.5, 0)
    rendererRef.current.render(sceneRef.current, cameraRef.current)
  }

  // 2D SVG Fallback View
  if (!hasWebGL) {
    return (
      <section className={`true3d-card true3d-fallback ${className}`.trim()} aria-label={isBn ? 'ভিলাই ও শোষণ ২ডি ডায়াগ্রাম' : 'Intestinal Absorption 2D Architecture'}>
        <div className="true3d-header">
          <div>
            <span className="true3d-badge category-fallback">
              {isBn ? '২ডি ফলব্যাক চিত্র (WebGL অনুপলব্ধ)' : '2D Scientific Fallback (WebGL Unavailable)'}
            </span>
            <h3>{isBn ? 'অন্ত্রীয় এন্টারোসাইট ও পোলারাইজড পুষ্টি পরিবহন' : 'Intestinal Enterocyte & Polarized Nutrient Transport'}</h3>
          </div>
        </div>

        <div className="true3d-fallback-canvas">
          <svg viewBox="0 0 500 240" className="true3d-fallback-svg" role="img" aria-label={isBn ? 'অন্ত্রীয় শোষণ ২ডি স্কেমেটিক' : 'Intestinal absorption schematic'}>
            <rect x="20" y="20" width="460" height="40" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" rx="6" />
            <text x="250" y="45" textAnchor="middle" fill="#065f46" fontWeight="700" fontSize="13">
              {isBn ? 'অন্ত্রীয় লুমেন (খাদ্যদ্রব্য ও সোডিয়াম পুল)' : 'Intestinal Lumen (Nutrient & Na+ Pool)'}
            </text>

            <rect x="20" y="70" width="460" height="25" fill="#10b981" rx="4" />
            <text x="250" y="87" textAnchor="middle" fill="#ffffff" fontWeight="600" fontSize="11">
              {isBn ? 'শীর্ষ ব্রাশ-বর্ডার ঝিল্লি (মাইক্রোভিলাই carpet, SGLT1, GLUT5)' : 'Apical Brush-Border Membrane (Microvilli carpet, SGLT1, GLUT5)'}
            </text>

            <rect x="20" y="105" width="460" height="65" fill="#fef9c3" stroke="#eab308" strokeWidth="1.5" rx="6" />
            <text x="250" y="142" textAnchor="middle" fill="#854d0e" fontWeight="700" fontSize="13">
              {isBn ? 'পোলারাইজড স্তম্ভাকার এন্টারোসাইট সাইটোপ্লাজম' : 'Polarized Columnar Enterocyte Cytoplasm'}
            </text>

            <rect x="20" y="180" width="460" height="20" fill="#3b82f6" rx="4" />
            <text x="250" y="195" textAnchor="middle" fill="#ffffff" fontWeight="600" fontSize="10">
              {isBn ? 'বেসোল্যাটারাল ঝিল্লি (GLUT2 বাহক & Na+/K+-এটিপেজ পাম্প)' : 'Basolateral Membrane (GLUT2 carrier & Na+/K+-ATPase pump)'}
            </text>

            <rect x="40" y="210" width="180" height="22" fill="#fee2e2" stroke="#dc2626" rx="4" />
            <text x="130" y="225" textAnchor="middle" fill="#991b1b" fontWeight="600" fontSize="9">
              {isBn ? 'রক্তজালক (পোর্টাল শিরা)' : 'Capillary (Portal Vein)'}
            </text>

            <rect x="280" y="210" width="180" height="22" fill="#fef08a" stroke="#ca8a04" rx="4" />
            <text x="370" y="225" textAnchor="middle" fill="#854d0e" fontWeight="600" fontSize="9">
              {isBn ? 'কেন্দ্রীয় ল্যাকটিয়েল (লসিকা)' : 'Central Lacteal (Lymph)'}
            </text>
          </svg>
        </div>

        {/* Structure Selector */}
        <div className="true3d-structure-tabs" role="tablist" aria-label={isBn ? 'অংশ নির্বাচন' : 'Structure Selection'}>
          {INTESTINAL_ABSORPTION_STRUCTURES.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={selectedId === s.id}
              className={`true3d-tab-btn ${selectedId === s.id ? 'is-selected' : ''}`}
              onClick={() => setSelectedId(s.id)}
            >
              {s.name[lang]}
            </button>
          ))}
        </div>

        {/* Contextual Explanation Card */}
        <div className="true3d-detail-panel">
          <div className="true3d-detail-header">
            <h4>{activeStructure.name[lang]}</h4>
            <span className="true3d-meta-pill">{activeStructure.category[lang]}</span>
          </div>
          <p className="true3d-detail-loc">
            <strong>{isBn ? 'অবস্থান: ' : 'Location: '}</strong>{activeStructure.membraneLocation[lang]}
          </p>
          <p className="true3d-detail-stoich">
            <strong>{isBn ? 'স্টইকিওমেট্রি: ' : 'Stoichiometry: '}</strong>{activeStructure.stoichiometry[lang]}
          </p>
          <div className="true3d-depth-badge">
            <span>{isBn ? 'শেখার স্তর: ' : 'Learning Depth: '}</span>
            <strong>{currentDepth.toUpperCase()}</strong>
          </div>
          <p className="true3d-explanation-text">
            {activeStructure.explanations[currentDepth][lang]}
          </p>
          <button
            type="button"
            className="true3d-section-jump-btn"
            onClick={() => onSectionSelect(activeStructure.sectionId)}
          >
            <span>{isBn ? 'অধ্যায়ের সংশ্লিষ্ট অনুচ্ছেদে যান' : 'Jump to matching academic section'}</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={containerRef}
      className={`true3d-card ${className}`.trim()}
      aria-label={isBn ? 'ইন্টারেক্টিভ ট্রু ৩ডি শোষণ মডেল' : 'Interactive True 3D Absorption Model'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="true3d-header">
        <div>
          <span className="true3d-badge category-true3d">
            <Sparkles size={11} aria-hidden="true" />
            {isBn ? 'ক্যাটাগরি এ — ট্রু ৩ডি দৃশ্য (WebGL / Three.js)' : 'Category A — True 3D Scene (WebGL / Three.js)'}
          </span>
          <h3>{isBn ? 'অন্ত্রীয় এন্টারোসাইট ও পোলারাইজড পুষ্টি পরিবহন ৩ডি এক্সপ্লোরার' : 'Intestinal Enterocyte & Polarized Nutrient Transport 3D Explorer'}</h3>
          <p className="true3d-subtitle">
            {isBn
              ? 'ঘোরান, জুম করুন বা সরাসরি আণবিক কাঠামোতে ক্লিক করে শারীরবৃত্তীয় প্রক্রিয়া দেখুন।'
              : 'Rotate, zoom, and select structures directly to examine cellular transport mechanisms.'}
          </p>
        </div>

        {/* Orbit & View Controls */}
        <div className="true3d-toolbar">
          <button
            type="button"
            className={`true3d-tool-btn ${isRotating ? 'is-active' : ''}`}
            onClick={handleToggleRotate}
            aria-pressed={isRotating}
            title={isRotating ? (isBn ? 'ঘূর্ণন থামান' : 'Pause rotation') : (isBn ? 'ঘূর্ণন চালান' : 'Auto-rotate')}
          >
            {isRotating ? <Pause size={14} /> : <Play size={14} />}
            <span className="sr-only">{isRotating ? 'Pause' : 'Play'}</span>
          </button>

          <button
            type="button"
            className="true3d-tool-btn"
            onClick={() => zoomCamera(-5)}
            title={isBn ? 'কাছে আনুন (Zoom In)' : 'Zoom In'}
            aria-label={isBn ? 'কাছে আনুন' : 'Zoom In'}
          >
            <ZoomIn size={14} />
          </button>

          <button
            type="button"
            className="true3d-tool-btn"
            onClick={() => zoomCamera(5)}
            title={isBn ? 'দূরে নিন (Zoom Out)' : 'Zoom Out'}
            aria-label={isBn ? 'দূরে নিন' : 'Zoom Out'}
          >
            <ZoomOut size={14} />
          </button>

          <button
            type="button"
            className="true3d-tool-btn"
            onClick={resetCamera}
            title={isBn ? 'ক্যামেরা রিসেট' : 'Reset Camera'}
            aria-label={isBn ? 'ক্যামেরা রিসেট' : 'Reset Camera'}
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas Viewport */}
      <div className="true3d-viewport-wrapper">
        <canvas
          ref={canvasRef}
          className="true3d-canvas"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          role="img"
          aria-label={isBn ? 'ইন্টারেক্টিভ ৩ডি ক্যানভাস' : 'Interactive 3D anatomical canvas'}
        />

        {/* Keyboard Angle Control Overlay */}
        <div className="true3d-keyboard-dpad" aria-label={isBn ? 'কিবোর্ড দিক নিয়ন্ত্রণ' : 'Keyboard Direction Controls'}>
          <button type="button" onClick={() => rotateCamera(0, -0.12)} aria-label={isBn ? 'উপরে কাত করুন' : 'Tilt Up'}>
            ▲
          </button>
          <div className="dpad-horizontal">
            <button type="button" onClick={() => rotateCamera(-0.15, 0)} aria-label={isBn ? 'বামে ঘোরান' : 'Rotate Left'}>
              ◀
            </button>
            <button type="button" onClick={resetCamera} aria-label={isBn ? 'রিসেট' : 'Reset'}>
              <Compass size={11} />
            </button>
            <button type="button" onClick={() => rotateCamera(0.15, 0)} aria-label={isBn ? 'ডানে ঘোরান' : 'Rotate Right'}>
              ▶
            </button>
          </div>
          <button type="button" onClick={() => rotateCamera(0, 0.12)} aria-label={isBn ? 'নিচে কাত করুন' : 'Tilt Down'}>
            ▼
          </button>
        </div>
      </div>

      {/* Structure Selector Pill Tabs */}
      <div className="true3d-structure-tabs" role="tablist" aria-label={isBn ? 'শারীরবৃত্তীয় অংশ নির্বাচন' : 'Structure Selection'}>
        {INTESTINAL_ABSORPTION_STRUCTURES.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={selectedId === s.id}
            className={`true3d-tab-btn ${selectedId === s.id ? 'is-selected' : ''}`}
            onClick={() => setSelectedId(s.id)}
          >
            <span
              className="true3d-color-dot"
              style={{ backgroundColor: `#${s.color.toString(16).padStart(6, '0')}` }}
              aria-hidden="true"
            />
            {s.name[lang]}
          </button>
        ))}
      </div>

      {/* Depth-Aware Contextual Explanation Card */}
      <div className="true3d-detail-panel" role="region" aria-live="polite" aria-label={isBn ? 'কাঠামোগত বিবরণ' : 'Structure explanation'}>
        <div className="true3d-detail-header">
          <div>
            <h4>{activeStructure.name[lang]}</h4>
            <span className="true3d-meta-pill">{activeStructure.category[lang]}</span>
          </div>
          <div className="true3d-depth-badge">
            <span>{isBn ? 'পাঠের গভীরতা: ' : 'Depth: '}</span>
            <strong>{currentDepth.toUpperCase()}</strong>
          </div>
        </div>

        <div className="true3d-quick-facts">
          <p>
            <strong>{isBn ? 'অবস্থান: ' : 'Location: '}</strong>
            <span>{activeStructure.membraneLocation[lang]}</span>
          </p>
          <p>
            <strong>{isBn ? 'স্টইকিওমেট্রি: ' : 'Stoichiometry: '}</strong>
            <span>{activeStructure.stoichiometry[lang]}</span>
          </p>
        </div>

        <div className="true3d-explanation-block">
          <p className="true3d-explanation-text">
            {activeStructure.explanations[currentDepth][lang]}
          </p>
        </div>

        <div className="true3d-action-bar">
          <button
            type="button"
            className="true3d-section-jump-btn"
            onClick={() => onSectionSelect(activeStructure.sectionId)}
          >
            <span>{isBn ? 'অধ্যায়ের সংশ্লিষ্ট বৈজ্ঞানিক অনুচ্ছেদে যান' : 'Jump to related academic section'}</span>
            <ChevronRight size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

