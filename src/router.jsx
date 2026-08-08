import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { analyticsEventFromElement, initAnalytics, trackEvent, trackPageView } from './analytics.js'

const RouterContext = createContext(null)

const readRedirect = () => {
  const redirect = window.sessionStorage.getItem('do-more-atl-redirect')
  if (redirect) {
    window.sessionStorage.removeItem('do-more-atl-redirect')
    window.history.replaceState({}, '', redirect)
  }
}

const currentLocation = () => ({
  pathname: window.location.pathname.replace(/\/+$/, '') || '/',
  search: window.location.search,
  hash: window.location.hash,
})

export function RouterProvider({ children }) {
  readRedirect()
  const [location, setLocation] = useState(currentLocation)

  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`)
  }, [location.pathname, location.search])

  useEffect(() => {
    const handleAnalyticsClick = (event) => {
      const element = event.target.closest?.('[data-analytics]')
      if (!element) return
      const mapped = analyticsEventFromElement(element)
      if (mapped) trackEvent(mapped[0], mapped[1])
    }
    document.addEventListener('click', handleAnalyticsClick)
    return () => document.removeEventListener('click', handleAnalyticsClick)
  }, [])

  useEffect(() => {
    const handlePopState = () => setLocation(currentLocation())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (location.hash) {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo(0, 0)
      }
    }, 0)
    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  const navigate = useCallback((to, options = {}) => {
    const url = new URL(to, window.location.href)
    const next = `${url.pathname}${url.search}${url.hash}`
    window.history[options.replace ? 'replaceState' : 'pushState']({}, '', next)
    setLocation(currentLocation())
  }, [])

  const value = useMemo(() => ({ ...location, navigate }), [location, navigate])
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) throw new Error('useRouter must be used inside RouterProvider')
  return context
}

export function Link({ to, onClick, target, children, ...props }) {
  const { navigate } = useRouter()

  const handleClick = (event) => {
    onClick?.(event)
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      target === '_blank' ||
      /^https?:\/\//i.test(to) ||
      to.startsWith('mailto:')
    ) return

    event.preventDefault()
    navigate(to)
  }

  return <a href={to} target={target} onClick={handleClick} {...props}>{children}</a>
}
