import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from '../../App'

beforeEach(() => { window.history.replaceState({ idx: 0 }, '', '/') })
afterEach(cleanup)

describe('platform navigation', () => {
  it('navigates from the public home to the learning dashboard', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getAllByRole('link', { name: /Explore learning/i })[0])
    expect(screen.getByRole('heading', { name: 'Your learning library' })).toBeInTheDocument()
  })

  it('opens each learning module from the student sidebar', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getAllByRole('link', { name: /Explore learning/i })[0])
    for (const name of ['Anatomy', 'Physiology', 'Biochemistry', 'Metabolism', 'Nutrition', 'Calculators']) {
      await user.click(screen.getByRole('link', { name: new RegExp(`^${name}$`) }))
      const expectedHeading = name === 'Anatomy' ? 'Anatomy curriculum' : name === 'Metabolism' ? 'Glucose Metabolism' : name === 'Nutrition' ? 'Macronutrient Digestion' : name
      expect(screen.getByRole('heading', { name: expectedHeading })).toBeInTheDocument()
    }
  }, 15000)

  it('uses in-app history for Back and preserves route navigation', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getAllByRole('link', { name: /Explore learning/i })[0])
    await user.click(screen.getByRole('link', { name: 'Anatomy' }))
    await user.click(screen.getByRole('button', { name: 'Back' }))
    await waitFor(() => expect(screen.getByRole('heading', { name: 'Your learning library' })).toBeInTheDocument())
    await user.click(screen.getByRole('link', { name: 'Anatomy' }))
    await waitFor(() => expect(screen.getByRole('heading', { name: 'Anatomy curriculum' })).toBeInTheDocument())
  }, 15000)

  it('uses the safe public fallback when opened directly on a student module', async () => {
    window.history.replaceState({}, '', '/learn/anatomy')
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Back' }))
    expect(screen.getByRole('heading', { name: 'Understand the science of being human.' })).toBeInTheDocument()
  })

  it('opens the admin overview and management placeholder routes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getAllByRole('link', { name: /Explore learning/i })[0])
    await user.click(screen.getByRole('link', { name: 'Admin' }))
    expect(screen.getByRole('heading', { name: 'Platform overview' })).toBeInTheDocument()
    for (const name of ['Content', 'Anatomy Models', 'Simulations', 'Nutrient Interactions', 'Calculators', 'Quizzes', 'Users', 'Feature Access', 'Scientific Reviews', 'Analytics', 'Settings']) {
      await user.click(screen.getAllByRole('link', { name: new RegExp(`^${name}$`) })[0])
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
      expect(screen.getByText('No connected data')).toBeInTheDocument()
    }
  }, 15000)

  it('uses the admin fallback on direct admin subpage entry and keeps the main-site link available', async () => {
    window.history.replaceState({}, '', '/admin/content')
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Back' }))
    expect(screen.getByRole('heading', { name: 'Platform overview' })).toBeInTheDocument()
    await user.click(screen.getAllByRole('link', { name: 'Back to Main Website' })[0])
    expect(screen.getByRole('heading', { name: 'Understand the science of being human.' })).toBeInTheDocument()
  })

  it('lets mobile navigation close with Escape and after selecting a route', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getAllByRole('link', { name: /Explore learning/i })[0])
    await user.click(screen.getByRole('button', { name: 'Open navigation' }))
    expect(document.querySelector('.sidebar')).toHaveClass('sidebar-open')
    await user.keyboard('{Escape}')
    expect(document.querySelector('.sidebar')).not.toHaveClass('sidebar-open')
    await user.click(screen.getByRole('link', { name: 'Admin' }))
    await user.click(screen.getByRole('button', { name: 'Open navigation' }))
    expect(document.querySelector('.admin-sidebar')).toHaveClass('admin-sidebar-open')
    await user.click(screen.getAllByRole('link', { name: 'Content' })[0])
    expect(document.querySelector('.admin-sidebar')).not.toHaveClass('admin-sidebar-open')
  })

  it('switches the interface and document language to Bengali', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Switch language' }))
    expect(document.documentElement).toHaveAttribute('lang', 'bn')
    expect(screen.getByRole('heading', { name: 'মানবদেহের বিজ্ঞানের সঙ্গে পরিচিত হোন।' })).toBeInTheDocument()
    await user.click(screen.getAllByRole('link', { name: 'শেখা শুরু করুন' })[0])
    expect(screen.getByRole('button', { name: 'ফিরে যান' })).toBeInTheDocument()
  })
})
