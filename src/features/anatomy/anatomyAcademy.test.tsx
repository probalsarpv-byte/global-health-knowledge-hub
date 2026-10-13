import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from '../../App'
import { anatomyCurriculum } from '../../content/anatomyCurriculum'
import { anatomyIntroductionLesson } from '../../content/anatomyIntroductionLesson'
import {
  batch1Chapters,
  batch2Chapters,
  batch3Chapters,
  batch4Chapters,
  batch5Chapters,
} from '../../content/chapters/chapterRegistry'
import { lessons } from '../../content/lessons'
import { validateLessons } from '../../content/lessonSchema'

beforeEach(() => window.history.replaceState({ idx: 0 }, '', '/'))
afterEach(cleanup)

describe('Anatomy Academy curriculum and all 28 Chapters (Batches 1–5 complete)', () => {
  it('defines an ordered 28-chapter curriculum with all 28 chapters available', () => {
    expect(anatomyCurriculum.chapters).toHaveLength(28)
    expect(anatomyCurriculum.groups.map((group) => group.id)).toEqual([
      'anatomy.foundations',
      'anatomy.musculoskeletal',
      'anatomy.organ-systems',
      'anatomy.neuroanatomy',
      'anatomy.regional',
      'anatomy.imaging-clinical',
    ])
    expect(anatomyCurriculum.chapters.map((chapter) => chapter.order)).toEqual(
      Array.from({ length: 28 }, (_, index) => index + 1)
    )
    expect(
      anatomyCurriculum.chapters.filter((chapter) => chapter.status === 'available').map((chapter) => chapter.id)
    ).toEqual(Array.from({ length: 28 }, (_, index) => `anatomy.chapter.${String(index + 1).padStart(2, '0')}`))
    expect(anatomyCurriculum.chapters.filter((chapter) => chapter.status === 'planned')).toHaveLength(0)
  })

  it('validates complete bilingual Batch 1, 2, 3, 4 & 5 records and reference metadata', () => {
    const allChapters = [
      ...batch1Chapters,
      ...batch2Chapters,
      ...batch3Chapters,
      ...batch4Chapters,
      ...batch5Chapters,
    ]
    expect(allChapters).toHaveLength(28)
    expect(validateLessons([...lessons, ...allChapters])).toEqual([])
    for (const chapter of allChapters) {
      for (const depth of ['foundation', 'academic', 'advanced'] as const) {
        const level = chapter.levels[depth]
        expect(level.sections.length).toBeGreaterThanOrEqual(2)
        expect(level.sections.every((section) => section.paragraphs[0].en.length >= 120 && section.paragraphs[0].bn.length >= 120)).toBe(true)
      }
      expect(chapter.references.every((reference) => reference.url.startsWith('https://') && reference.authors && reference.year)).toBe(true)
    }
    expect(anatomyIntroductionLesson.anatomyExplorer?.planes).toHaveLength(3)
    expect(anatomyIntroductionLesson.anatomyExplorer?.regions).toHaveLength(4)
  })

  it('navigates the curriculum to Chapter 01 and operates explorer controls', async () => {
    window.history.replaceState({}, '', '/learn/anatomy')
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Anatomy curriculum' })).toBeInTheDocument()
    expect(screen.getAllByText('Available')[0]).toBeInTheDocument()
    expect(screen.queryByText('Planned · Coming soon')).not.toBeInTheDocument()
    await user.click(screen.getAllByRole('link', { name: 'Open chapter' })[0])
    expect(await screen.findByRole('heading', { name: /Introduction to Human Anatomy/ })).toBeInTheDocument()
    expect(screen.getAllByText(/Original 2D teaching schematic/)[0]).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interactive 3D Organ Explorer/ })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Frontal / coronal plane' }))
    expect(screen.getByRole('button', { name: 'Frontal / coronal plane' })).toHaveAttribute('aria-pressed', 'true')
    await user.click(screen.getAllByRole('button', { name: 'Upper limb' })[0])
    expect(screen.getByText(/proximal and distal terms/)).toBeInTheDocument()
    await user.keyboard('{Enter}')
  }, 30000)

  it('switches Chapter 01 and explorer content to Bengali', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/introduction-human-anatomy')
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Switch language' }))
    expect(await screen.findByRole('heading', { name: /মানব অ্যানাটমির পরিচয়/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'স্যাজিটাল প্লেন' })).toBeInTheDocument()
    expect(screen.getAllByText(/মূল 2D শিক্ষামূলক schematic/)[0]).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /ইন্টারেক্টিভ ৩ডি অর্গান এক্সপ্লোরার/ })).toBeInTheDocument()
  })

  it('interacts with 3D organ explorer, switches organ selection and views descriptions', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/introduction-human-anatomy')
    const user = userEvent.setup()
    render(<App />)
    expect(await screen.findByRole('heading', { name: /Interactive 3D Organ Explorer/ })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Liver' }))
    expect(screen.getAllByText(/Right Hypochondrium/)[0]).toBeInTheDocument()
    expect(screen.getByText(/metabolic powerhouse/i)).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: 'Physiology' }))
    expect(screen.getByText(/Synthesizes albumin/)).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: 'Nutrition Link' }))
    expect(screen.getByText(/stores fat-soluble vitamins/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Superior' }))
    expect(screen.getByRole('button', { name: 'Superior' })).toHaveClass('active')
  })

  it('navigates to Chapter 02 (Cells, tissues and membranes) and interacts with tissue diagram', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/cells-tissues')
    const user = userEvent.setup()
    render(<App />)
    expect(await screen.findByRole('heading', { name: /02 · Cells, Tissues and Membranes/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interactive Tissue Architecture & Junction Matrix/ })).toBeInTheDocument()
    await user.click(screen.getAllByRole('button', { name: /Connective Tissue/ })[0])
    expect(screen.getByText(/most abundant body tissue/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Academic' }))
    expect(screen.getByText(/During early mammalian gastrulation/i)).toBeInTheDocument()
  })

  it('navigates to Chapter 03 (Integumentary system) and operates skin layers diagram in Bengali', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/integumentary-system')
    const user = userEvent.setup()
    render(<App />)
    expect(await screen.findByRole('heading', { name: /03 · Integumentary System/ })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Switch language' }))
    expect(await screen.findByRole('heading', { name: /০৩ · আবরণী তন্ত্র/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /ইন্টারেক্টিভ ত্বকের স্তর ও উপাঙ্গ নির্দেশক/ })).toBeInTheDocument()
    await user.click(screen.getAllByRole('button', { name: /প্যাপিলারি ডার্মিস/ })[0])
    expect(screen.getByText(/ডার্মিসের ওপরের ২০%/)).toBeInTheDocument()
  })

  it('navigates to Chapter 04 (Axial skeleton) and Chapter 05 (Appendicular skeleton)', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/skeletal-axial')
    const user = userEvent.setup()
    render(<App />)
    expect(await screen.findByRole('heading', { name: /04 · Axial Skeleton/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interactive Axial Skeleton Modular Anatomy/ })).toBeInTheDocument()
    await user.click(screen.getByRole('radio', { name: /Anterior branch of the middle meningeal artery/ }))
    expect(screen.getByRole('status')).toHaveTextContent(/The pterion is the thin junction/i)

    // Navigate to Chapter 05
    await user.click(screen.getByRole('link', { name: /05 · Appendicular skeleton/ }))
    expect(await screen.findByRole('heading', { name: /05 · Appendicular Skeleton/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interactive Appendicular Skeleton Modular Anatomy/ })).toBeInTheDocument()
    await user.click(screen.getByRole('radio', { name: /Avascular necrosis of the proximal pole of the scaphoid/ }))
    expect(screen.getByRole('status')).toHaveTextContent(/Tenderness in the anatomical snuffbox/i)
  })

  it('navigates to Chapter 10 (Cardiovascular anatomy) and interacts with cardiovascular diagram', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/cardiovascular')
    const user = userEvent.setup()
    render(<App />)
    expect(await screen.findByRole('heading', { name: /10 · Cardiovascular Anatomy/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interactive Cardiovascular & Cardiac Chamber Anatomy/ })).toBeInTheDocument()
    await user.click(screen.getAllByRole('button', { name: /Coronary Vessels & Nodal Conduction/ })[0])
    expect(screen.getByText(/Coronary arteries arise from aortic sinuses/i)).toBeInTheDocument()
    await user.click(screen.getByRole('radio', { name: /Left anterior descending/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/precordial leads V1 through V4/i)
  })

  it('navigates to Chapter 11 (Respiratory anatomy) and operates respiratory diagram and assessment', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/respiratory')
    const user = userEvent.setup()
    render(<App />)
    expect(await screen.findByRole('heading', { name: /11 · Respiratory Anatomy/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interactive Respiratory System & Alveolar Arborization/ })).toBeInTheDocument()
    await user.click(screen.getAllByRole('button', { name: /Alveolar-Capillary Gas Exchange Unit/ })[0])
    expect(screen.getAllByText(/Ultra-thin/i)[0]).toBeInTheDocument()
    await user.click(screen.getByRole('radio', { name: /Right main bronchus/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/wider, shorter/i)
  })

  it('navigates to Chapter 18 (Brain and cranial nerves) and verifies Brodmann and stroke assessment', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/brain')
    const user = userEvent.setup()
    render(<App />)
    expect(await screen.findByRole('heading', { name: /18 · Brain and Cranial Nerves/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interactive Encephalon Architecture & Cranial Nerve Emergence/ })).toBeInTheDocument()
    await user.click(screen.getAllByRole('button', { name: /Brainstem & Cranial Nerves I–XII/ })[0])
    expect(screen.getByText(/Vital cardiorespiratory centers/i)).toBeInTheDocument()
    await user.click(screen.getByRole('radio', { name: /Superior division of the left middle cerebral artery/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/lateral convexity of the left frontal lobe/i)
  })

  it('navigates to Chapter 20 (Head and neck) and operates cervical fascial spaces diagram', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/head-neck')
    const user = userEvent.setup()
    render(<App />)
    expect(await screen.findByRole('heading', { name: /20 · Head and Neck/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interactive Cervical Triangles/ })).toBeInTheDocument()
    await user.click(screen.getAllByRole('button', { name: /Deep Cervical Fascia/ })[0])
    expect(screen.getAllByText(/Retropharyngeal infections/i)[0]).toBeInTheDocument()
    await user.click(screen.getByRole('radio', { name: /Bilateral vocal cord adduction/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/sole abductor of the vocal cords/i)
  })

  it('navigates to Chapter 24 (Imaging orientation) and verifies Hounsfield CT and viewing convention', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/imaging-orientation')
    const user = userEvent.setup()
    render(<App />)
    expect(await screen.findByRole('heading', { name: /24 · Imaging and Sectional Anatomy Orientation/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interactive Medical Imaging Modalities & Sectional Orientation Planes/ })).toBeInTheDocument()
    await user.click(screen.getAllByRole('button', { name: /Computed Tomography/ })[0])
    expect(screen.getAllByText(/Hounsfield units/i)[0]).toBeInTheDocument()
    await user.click(screen.getByRole('radio', { name: /Top-left quadrant of the screen/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/patient’s anatomical right is located on the viewer’s left side/i)
  })

  it('navigates to Chapter 25 (Cross-sectional anatomy) and operates transpyloric plane and nutcracker assessment', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/cross-sectional-anatomy')
    const user = userEvent.setup()
    render(<App />)
    expect(await screen.findByRole('heading', { name: /25 · Cross-Sectional Anatomy/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interactive Sectional Anatomy & Multilevel Axial Planes/ })).toBeInTheDocument()
    await user.click(screen.getAllByRole('button', { name: /L1 Transpyloric Plane of Addison/i })[0])
    expect(screen.getAllByText(/Nutcracker space/i)[0]).toBeInTheDocument()
    await user.click(screen.getByRole('radio', { name: /Left renal vein/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/acute aortomesenteric angle/i)
  })

  it('navigates to Chapter 28 (Clinical anatomy integration) and operates Pringle maneuver and surgical assessment', async () => {
    window.history.replaceState({}, '', '/learn/anatomy/chapters/clinical-integration')
    const user = userEvent.setup()
    render(<App />)
    expect(await screen.findByRole('heading', { name: /28 · Clinical Anatomy Integration/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interactive Clinical Anatomy & Operative Emergency Matrix/ })).toBeInTheDocument()
    await user.click(screen.getAllByRole('button', { name: /Master Surgical Corridors: Pringle & Kocher/i })[0])
    expect(screen.getAllByText(/Pringle maneuver clamps hepatoduodenal ligament/i)[0]).toBeInTheDocument()
    await user.click(screen.getByRole('radio', { name: /Retrohepatic inferior vena cava or main hepatic veins/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/Pringle maneuver compresses the hepatoduodenal ligament/i)
  })
})


