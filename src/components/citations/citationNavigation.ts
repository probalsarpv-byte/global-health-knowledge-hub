import type { NumberedReferenceEntry } from './citationTypes'
import { getReferenceTargetId } from './citationManager'

// In-memory store for the last-activated citation per chapter
const lastActiveCitationAnchors: Record<string, string> = {}

export function setLastActiveCitation(chapterId: string, anchorId: string): void {
  lastActiveCitationAnchors[chapterId] = anchorId
}

export function getLastActiveCitation(chapterId: string): string | undefined {
  return lastActiveCitationAnchors[chapterId]
}

/**
 * Smoothly scrolls to the targeted bibliography entry and manages keyboard focus.
 */
export function jumpToReferenceTarget(
  chapterId: string,
  refNumber: number,
  sourceAnchorId: string
): void {
  setLastActiveCitation(chapterId, sourceAnchorId)
  const targetId = getReferenceTargetId(chapterId, refNumber)
  const targetEl = document.getElementById(targetId)

  if (targetEl) {
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (typeof targetEl.focus === 'function') {
      targetEl.focus()
    }
    targetEl.classList.add('reference-target-active')
    setTimeout(() => {
      targetEl.classList.remove('reference-target-active')
    }, 2500)
  }

  // Update URL hash cleanly without route recreation
  if (typeof window !== 'undefined' && window.history) {
    try {
      window.history.replaceState(null, '', `#${targetId}`)
    } catch {
      // Ignore if iframe/sandbox blocks history modification
    }
  }
}

/**
 * Returns focus and viewport to the exact reading position where the citation was clicked.
 */
export function returnToCitationAnchor(
  chapterId: string,
  entry: NumberedReferenceEntry
): boolean {
  const lastActive = getLastActiveCitation(chapterId)
  let targetAnchorId: string | undefined

  if (lastActive && lastActive.includes(`-${entry.number}-`)) {
    targetAnchorId = lastActive
  } else if (entry.citationAnchorIds.length > 0) {
    targetAnchorId = entry.citationAnchorIds[0]
  }

  // Fallback to querying the DOM for any matching anchor for this citation number
  if (!targetAnchorId || !document.getElementById(targetAnchorId)) {
    const fallbackEl = document.querySelector(`[id^="cite-${chapterId}-${entry.number}-"]`) as HTMLElement | null
    if (fallbackEl && fallbackEl.id) {
      targetAnchorId = fallbackEl.id
    }
  }

  if (targetAnchorId) {
    const anchorEl = document.getElementById(targetAnchorId)
    if (anchorEl) {
      anchorEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
      if (typeof anchorEl.focus === 'function') {
        anchorEl.focus()
      }
      anchorEl.classList.add('citation-return-active')
      setTimeout(() => {
        anchorEl.classList.remove('citation-return-active')
      }, 2000)

      if (typeof window !== 'undefined' && window.history) {
        try {
          window.history.replaceState(null, '', `#${targetAnchorId}`)
        } catch {
          // Ignore
        }
      }
      return true
    }
  }

  return false
}
