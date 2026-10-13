import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  buildChapterCitationMap,
  formatCitationNumber,
  getCitationAnchorId,
  getReferenceTargetId,
  parseInlineCitationTokens,
  validateChapterReferences,
} from './citationManager'
import { NumberedCitation } from './NumberedCitation'
import { EndOfChapterReferences } from './EndOfChapterReferences'
import type { LessonReference } from '../../content/lessonSchema'
import { LessonRenderer } from '../../features/student/LessonRenderer'
import { lessons } from '../../content/lessons'
import { LocaleProvider } from '../../i18n/LocaleContext'
import { MemoryRouter } from 'react-router-dom'

beforeEach(() => {
  window.history.replaceState({ idx: 0 }, '', '/')
  // Mock scrollIntoView
  Element.prototype.scrollIntoView = vi.fn()
})

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

const sampleRefs: LessonReference[] = [
  {
    id: 'ref-lehninger',
    authors: 'Nelson DL, Cox MM',
    title: 'Lehninger Principles of Biochemistry',
    organization: 'Macmillan Learning',
    year: 2021,
    url: 'https://store.macmillanlearning.com/us/product/Lehninger',
    doi: '10.1016/0006-291X(75)90482-9',
  },
  {
    id: 'ref-harper',
    authors: 'Rodwell VW et al.',
    title: "Harper's Illustrated Biochemistry",
    organization: 'McGraw-Hill',
    year: 2022,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=3202',
  },
  {
    id: 'ref-berg',
    authors: 'Berg JM, Stryer L',
    title: 'Biochemistry',
    organization: 'W. H. Freeman',
    year: 2019,
    url: 'https://www.macmillanlearning.com/biochemistry',
  },
]

describe('Global Vancouver Citation System & Academic Standard', () => {
  describe('Citation Manager & Numbering Logic', () => {
    it('numbers references by first appearance in chapter sections', () => {
      const evidence = {
        intro: ['ref-harper'],
        pathway: ['ref-lehninger'],
        clinical: ['ref-berg'],
      }
      const map = buildChapterCitationMap('ch-test', sampleRefs, evidence, ['intro', 'pathway', 'clinical'])

      expect(map.totalReferences).toBe(3)
      expect(map.byRefId['ref-harper'].number).toBe(1)
      expect(map.byRefId['ref-lehninger'].number).toBe(2)
      expect(map.byRefId['ref-berg'].number).toBe(3)
      expect(map.entries[0].reference.id).toBe('ref-harper')
      expect(map.entries[1].reference.id).toBe('ref-lehninger')
      expect(map.entries[2].reference.id).toBe('ref-berg')
    })

    it('reuses the same number when the same source is cited again in later sections', () => {
      const evidence = {
        intro: ['ref-lehninger'],
        step1: ['ref-harper'],
        step2: ['ref-lehninger'], // Reused!
        summary: ['ref-harper', 'ref-berg'], // Reused harper, new berg
      }
      const map = buildChapterCitationMap('ch-test', sampleRefs, evidence, ['intro', 'step1', 'step2', 'summary'])

      expect(map.byRefId['ref-lehninger'].number).toBe(1)
      expect(map.byRefId['ref-harper'].number).toBe(2)
      expect(map.byRefId['ref-berg'].number).toBe(3)
      expect(map.totalReferences).toBe(3)
    })

    it('appends un-cited bibliography references sequentially so no references are orphaned', () => {
      const evidence = {
        intro: ['ref-berg'],
      }
      const map = buildChapterCitationMap('ch-test', sampleRefs, evidence, ['intro'])

      expect(map.byRefId['ref-berg'].number).toBe(1)
      // Remaining two refs get stable numbers 2 and 3
      expect(map.entries.map((e) => e.number)).toEqual([1, 2, 3])
      expect(map.totalReferences).toBe(3)
    })

    it('detects missing or unresolved reference IDs in evidence mapping', () => {
      const result = validateChapterReferences('ch-test', sampleRefs, {
        intro: ['ref-lehninger', 'non-existent-ref'],
      })
      expect(result.valid).toBe(false)
      expect(result.missingRefIds).toEqual(['non-existent-ref'])
    })

    it('formats citation numbers correctly in English and Bengali', () => {
      expect(formatCitationNumber(1, 'en')).toBe('1')
      expect(formatCitationNumber(12, 'en')).toBe('12')
      expect(formatCitationNumber(1, 'bn')).toBe('১')
      expect(formatCitationNumber(12, 'bn')).toBe('১২')
    })

    it('generates consistent chapter-scoped DOM IDs', () => {
      expect(getCitationAnchorId('topic.metabolism.glycolysis', 2, 'sec-1')).toBe(
        'cite-topic-metabolism-glycolysis-2-sec-1'
      )
      expect(getReferenceTargetId('topic.metabolism.glycolysis', 2)).toBe(
        'ref-topic-metabolism-glycolysis-2'
      )
    })

    it('parses inline citation tokens embedded in paragraph text', () => {
      const raw = 'Hexokinase catalyzes the initial reaction [cite:ref-lehninger] consuming one ATP [cite:ref-harper,ref-berg].'
      const tokens = parseInlineCitationTokens(raw)
      expect(tokens).toEqual([
        { type: 'text', value: 'Hexokinase catalyzes the initial reaction ' },
        { type: 'citation', refIds: ['ref-lehninger'] },
        { type: 'text', value: ' consuming one ATP ' },
        { type: 'citation', refIds: ['ref-harper', 'ref-berg'] },
        { type: 'text', value: '.' },
      ])
    })
  })

  describe('NumberedCitation Component', () => {
    it('renders compact Vancouver bracket notation [1] for a single citation', () => {
      const map = buildChapterCitationMap('ch-1', sampleRefs, { s1: ['ref-lehninger'] })
      render(<NumberedCitation chapterId="ch-1" referenceIds="ref-lehninger" citationMap={map} />)

      const link = screen.getByRole('doc-noteref', { name: /Citation \[1\]/i })
      expect(link).toHaveTextContent('1')
      expect(link).toHaveAttribute('href', '#ref-ch-1-1')
    })

    it('renders multiple sorted citations [1, 2] with accessible comma separation', () => {
      const map = buildChapterCitationMap('ch-1', sampleRefs, {
        s1: ['ref-lehninger', 'ref-harper'],
      })
      render(
        <NumberedCitation
          chapterId="ch-1"
          referenceIds={['ref-harper', 'ref-lehninger']} // Out of order input
          citationMap={map}
        />
      )

      const links = screen.getAllByRole('doc-noteref')
      expect(links).toHaveLength(2)
      // Sorted numerically ascending
      expect(links[0]).toHaveTextContent('1')
      expect(links[1]).toHaveTextContent('2')
    })

    it('renders Bengali numerals when locale is bn', () => {
      const map = buildChapterCitationMap('ch-1', sampleRefs, { s1: ['ref-lehninger'] })
      render(
        <NumberedCitation
          chapterId="ch-1"
          referenceIds="ref-lehninger"
          citationMap={map}
          locale="bn"
        />
      )

      const link = screen.getByRole('doc-noteref')
      expect(link).toHaveTextContent('১')
      expect(link).toHaveAttribute('aria-label', expect.stringContaining('তথ্যসূত্র [১]'))
    })
  })

  describe('EndOfChapterReferences Component', () => {
    it('renders full verified bibliographic entries with Vancouver number badges', () => {
      const map = buildChapterCitationMap('ch-1', sampleRefs, {
        s1: ['ref-lehninger', 'ref-harper'],
      })
      render(<EndOfChapterReferences chapterId="ch-1" citationMap={map} />)

      expect(screen.getByRole('heading', { name: 'Scientific references' })).toBeInTheDocument()
      expect(screen.getByText('Vancouver Numeric Citation System')).toBeInTheDocument()

      expect(screen.getByText('[1]')).toBeInTheDocument()
      expect(screen.getByText('Nelson DL, Cox MM')).toBeInTheDocument()
      expect(screen.getByText('Lehninger Principles of Biochemistry')).toBeInTheDocument()

      expect(screen.getByText('[2]')).toBeInTheDocument()
      expect(screen.getByText('Rodwell VW et al.')).toBeInTheDocument()

      // Verified source links
      const openSourceLinks = screen.getAllByRole('link', { name: /Open source/i })
      expect(openSourceLinks).toHaveLength(3)

      // Verified DOI link for reference 1
      expect(screen.getByRole('link', { name: /DOI: 10\.1016/i })).toHaveAttribute(
        'href',
        'https://doi.org/10.1016/0006-291X(75)90482-9'
      )
    })

    it('renders Bengali headings and return labels in Bengali locale', () => {
      const map = buildChapterCitationMap('ch-1', sampleRefs, { s1: ['ref-lehninger'] })
      render(<EndOfChapterReferences chapterId="ch-1" citationMap={map} locale="bn" />)

      expect(screen.getByRole('heading', { name: 'বৈজ্ঞানিক তথ্যসূত্র' })).toBeInTheDocument()
      expect(screen.getByText('[১]')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /উদ্ধৃতি \[১\]-এ ফিরে যান/i })).toBeInTheDocument()
    })
  })

  describe('Interactive Two-Way Citation Navigation', () => {
    it('clicking an inline citation triggers smooth jump to reference target', async () => {
      const user = userEvent.setup()
      const map = buildChapterCitationMap('ch-jump', sampleRefs, { s1: ['ref-lehninger'] })

      render(
        <div>
          <p>
            Text before citation{' '}
            <NumberedCitation
              chapterId="ch-jump"
              referenceIds="ref-lehninger"
              citationMap={map}
              instanceId="test-callsite"
            />
          </p>
          <EndOfChapterReferences chapterId="ch-jump" citationMap={map} />
        </div>
      )

      const targetEl = document.getElementById('ref-ch-jump-1')
      expect(targetEl).toBeInTheDocument()

      const citationLink = screen.getByRole('doc-noteref', { name: /Citation \[1\]/i })
      await user.click(citationLink)

      expect(targetEl?.scrollIntoView).toHaveBeenCalledWith(
        expect.objectContaining({ behavior: 'smooth' })
      )
    })

    it('clicking return button jumps back to the exact reading position', async () => {
      const user = userEvent.setup()
      const map = buildChapterCitationMap('ch-return', sampleRefs, {
        s1: ['ref-lehninger'],
        s2: ['ref-lehninger'],
      })

      render(
        <div>
          <p id="paragraph-1">
            First occurrence{' '}
            <NumberedCitation
              chapterId="ch-return"
              referenceIds="ref-lehninger"
              citationMap={map}
              instanceId="inst-1"
            />
          </p>
          <p id="paragraph-2">
            Second occurrence{' '}
            <NumberedCitation
              chapterId="ch-return"
              referenceIds="ref-lehninger"
              citationMap={map}
              instanceId="inst-2"
            />
          </p>
          <EndOfChapterReferences chapterId="ch-return" citationMap={map} />
        </div>
      )

      const citation2 = screen.getAllByRole('doc-noteref')[1]
      await user.click(citation2)

      const returnBtn = screen.getByRole('button', { name: /Return to citation \[1\]/i })
      await user.click(returnBtn)

      // The second citation was clicked, so return jumps back to inst-2
      expect(citation2.scrollIntoView).toHaveBeenCalledWith(
        expect.objectContaining({ behavior: 'smooth' })
      )
    })
  })

  describe('Integration with Live Chapter Content via LessonRenderer', () => {
    it('renders cell structure chapter with Vancouver citations and EndOfChapterReferences', async () => {
      const user = userEvent.setup()
      const cell = lessons[0]

      render(
        <MemoryRouter>
          <LocaleProvider>
            <LessonRenderer lesson={cell} />
          </LocaleProvider>
        </MemoryRouter>
      )

      // Should have Vancouver citations in section evidence bars
      const citationLinks = screen.getAllByRole('doc-noteref')
      expect(citationLinks.length).toBeGreaterThan(0)
      expect(citationLinks[0]).toHaveTextContent('1')

      // Should have End of Chapter References
      expect(screen.getByRole('heading', { name: 'Scientific references' })).toBeInTheDocument()
      expect(screen.getByText('Vancouver Numeric Citation System')).toBeInTheDocument()

      // Click citation
      await user.click(citationLinks[0])
      expect(Element.prototype.scrollIntoView).toHaveBeenCalled()

      // Click return to citation
      const returnBtn = screen.getAllByRole('button', { name: /Return to citation \[1\]/i })[0]
      await user.click(returnBtn)
      expect(Element.prototype.scrollIntoView).toHaveBeenCalled()
    })
  })
})
