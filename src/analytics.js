export const GA_MEASUREMENT_ID = 'G-BFTW04F9N5'

let initialized = false

export function initAnalytics() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

export function trackPageView(path) {
  trackEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path,
  })
}

export function analyticsEventFromElement(element) {
  const label = element?.dataset?.analytics
  if (!label) return null
  const project = element.dataset.project

  if (label.startsWith('project-external-')) {
    return ['project_visit', { project_name: project || label.replace('project-external-', ''), link_url: element.href }]
  }
  if (label.startsWith('project-case-study-')) {
    return ['select_content', { content_type: 'case_study', item_id: project || label.replace('project-case-study-', '') }]
  }
  if (label.startsWith('project-cta-start-')) {
    return ['start_project', { source: 'project_case_study', project_name: project || label.replace('project-cta-start-', '') }]
  }
  if (label.includes('pay-strategy') || label.includes('checkout')) {
    return ['begin_checkout', { currency: 'USD', value: 100, item_name: 'Product Strategy Session', source: label }]
  }
  if (label.includes('start-project') || label.includes('path-services') || label.includes('bottom-start')) {
    return ['start_project', { source: label }]
  }
  return ['cta_click', { cta_name: label }]
}
