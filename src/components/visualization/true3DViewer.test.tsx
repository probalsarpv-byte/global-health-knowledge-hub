import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { True3DViewer } from './True3DViewer'

// Mock Three.js WebGLRenderer at module level
vi.mock('three', async (importOriginal) => {
  const actual = await importOriginal<typeof import('three')>()
  class MockWebGLRenderer {
    domElement = document.createElement('canvas')
    setSize = vi.fn()
    setPixelRatio = vi.fn()
    render = vi.fn()
    dispose = vi.fn()
  }
  return {
    ...actual,
    WebGLRenderer: MockWebGLRenderer,
  }
})

describe('True3DViewer Component', () => {
  describe('2D Fallback Mode (WebGL Unavailable)', () => {
    beforeEach(() => {
      // Simulate environment without WebGL
      vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
    })

    it('renders 2D fallback schematic, structure list, and allows selecting a structure', () => {
      const handleSectionSelect = vi.fn()
      render(
        <True3DViewer
          currentDepth="academic"
          locale="en"
          onSectionSelect={handleSectionSelect}
        />
      )

      // Fallback schematic SVG is rendered
      expect(screen.getByRole('img', { name: /Intestinal absorption schematic/i })).toBeInTheDocument()

      // SGLT1 is selected by default in tabs and heading
      expect(screen.getByRole('tab', { name: /SGLT1 Transporter Complex/i })).toBeInTheDocument()
      expect(screen.getByText(/2 Na\+ : 1 D-Glucose/i)).toBeInTheDocument()

      // Select Na+/K+-ATPase pump tab
      const atpaseTab = screen.getByRole('tab', { name: /Na\+\/K\+-ATPase/i })
      fireEvent.click(atpaseTab)

      // Shows ATPase details
      expect(screen.getByText(/3 Na\+ Out : 2 K\+ In : 1 ATP/i)).toBeInTheDocument()
      expect(screen.getAllByText(/Basolateral Membrane/i).length).toBeGreaterThan(0)
    })

    it('adapts scientific explanations across Foundation, Academic, and Advanced learning depths', () => {
      const handleSectionSelect = vi.fn()
      const { rerender } = render(
        <True3DViewer
          currentDepth="foundation"
          locale="en"
          onSectionSelect={handleSectionSelect}
        />
      )

      // Foundation explanation for SGLT1
      expect(screen.getByText(/molecular gate powered by salt/i)).toBeInTheDocument()

      // Switch to Academic depth
      rerender(
        <True3DViewer
          currentDepth="academic"
          locale="en"
          onSectionSelect={handleSectionSelect}
        />
      )
      expect(screen.getByText(/High-affinity \(Km ~0\.5 mM\)/i)).toBeInTheDocument()

      // Switch to Advanced / Research depth
      rerender(
        <True3DViewer
          currentDepth="advanced"
          locale="en"
          onSectionSelect={handleSectionSelect}
        />
      )
      expect(screen.getByText(/Electrogenic transport mechanism/i)).toBeInTheDocument()
    })

    it('triggers onSectionSelect with linked sectionId when jump button is clicked', () => {
      const handleSectionSelect = vi.fn()
      render(
        <True3DViewer
          currentDepth="academic"
          locale="en"
          onSectionSelect={handleSectionSelect}
        />
      )

      // Default SGLT1 links to 'mechanism'
      const jumpBtn = screen.getByRole('button', { name: /Jump to matching academic section/i })
      fireEvent.click(jumpBtn)

      expect(handleSectionSelect).toHaveBeenCalledWith('mechanism')

      // Switch to Central Lacteal which links to 'integration'
      const lactealTab = screen.getByRole('tab', { name: /Central Lacteal Lymphatic Vessel/i })
      fireEvent.click(lactealTab)

      fireEvent.click(screen.getByRole('button', { name: /Jump to matching academic section/i }))
      expect(handleSectionSelect).toHaveBeenCalledWith('integration')
    })

    it('renders correctly in Bengali locale with Bengali terminology and explanations', () => {
      const handleSectionSelect = vi.fn()
      render(
        <True3DViewer
          currentDepth="foundation"
          locale="bn"
          onSectionSelect={handleSectionSelect}
        />
      )

      // Bengali heading and structure name
      expect(screen.getByRole('tab', { name: /এসজিএলটি১ পরিবহনকারী কমপ্লেক্স/i })).toBeInTheDocument()
      expect(screen.getByText(/লবণের শক্তিতে চালিত আণবিক ফটক/i)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /অধ্যায়ের সংশ্লিষ্ট অনুচ্ছেদে যান/i })).toBeInTheDocument()
    })
  })

  describe('Category A WebGL Mode (When WebGL is supported)', () => {
    beforeEach(() => {
      // Simulate WebGL support
      vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation((contextId: string) => {
        if (contextId === 'webgl' || contextId === 'experimental-webgl') {
          return {} as WebGLRenderingContext
        }
        return null
      })
    })

    it('renders WebGL 3D canvas, toolbar controls, and accessible D-pad', () => {
      const handleSectionSelect = vi.fn()
      render(
        <True3DViewer
          currentDepth="academic"
          locale="en"
          onSectionSelect={handleSectionSelect}
        />
      )

      // 3D Canvas
      expect(screen.getByRole('img', { name: /Interactive 3D anatomical canvas/i })).toBeInTheDocument()

      // D-pad camera buttons
      const tiltUp = screen.getByRole('button', { name: /Tilt Up/i })
      const tiltDown = screen.getByRole('button', { name: /Tilt Down/i })
      const rotateLeft = screen.getByRole('button', { name: /Rotate Left/i })
      const rotateRight = screen.getByRole('button', { name: /Rotate Right/i })
      const resetCamera = screen.getByRole('button', { name: /^Reset$/i })
      const resetToolbar = screen.getByRole('button', { name: /Reset Camera/i })

      expect(tiltUp).toBeInTheDocument()
      expect(tiltDown).toBeInTheDocument()
      expect(rotateLeft).toBeInTheDocument()
      expect(rotateRight).toBeInTheDocument()
      expect(resetCamera).toBeInTheDocument()
      expect(resetToolbar).toBeInTheDocument()

      // Interactions should not throw
      fireEvent.click(tiltUp)
      fireEvent.click(rotateLeft)
      fireEvent.click(resetCamera)
    })
  })
})
