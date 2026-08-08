export const GA_MEASUREMENT_ID = 'G-BFTW04F9N5'
export const DOMORE_DATA_LAYER_NAME = 'domoreDataLayer'

let initialized = false

function getDeviceCategory() {
  if (typeof window === 'undefined') return 'unknown'
  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

function cleanParams(params = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== '')
  )
}

function toGa4Event(entry) {
  const { event, timestamp, event_version, ...params } = entry

  const mappings = {
    page_view: ['page_view', params],
    cta_clicked: ['cta_click', params],
    start_project_clicked: ['start_project', params],
    project_selected: [
      'select_content',
      {
        content_type: 'case_study',
        item_id: params.project_name,
        ...params,
      },
    ],
    project_outbound_clicked: ['project_visit', params],
    form_started: ['form_start', params],
    lead_submitted: ['generate_lead', params],
    strategy_checkout_started: [
      'begin_checkout',
      {
        currency: params.currency || 'USD',
        value: params.value || 100,
        items: [
          {
            item_id: 'product_strategy_session',
            item_name: 'Product Strategy Session',
            price: params.value || 100,
            quantity: 1,
          },
        ],
        ...params,
      },
    ],
    strategy_checkout_returned: ['strategy_checkout_return', params],
  }

  return mappings[event] || [event, params]
}

function sendToGa4(entry) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  const [gaEventName, gaParams] = toGa4Event(entry)
  window.gtag('event', gaEventName, cleanParams(gaParams))
}

export function initAnalytics() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  // Do More ATL's vendor-neutral business data layer.
  window[DOMORE_DATA_LAYER_NAME] = window[DOMORE_DATA_LAYER_NAME] || []

  // Google's transport layer. Keep separate from window.domoreDataLayer.
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })

  if (!document.querySelector(`script[src*="gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)
  }
}

export function pushDoMoreEvent(event, params = {}) {
  if (typeof window === 'undefined') return null

  window[DOMORE_DATA_LAYER_NAME] = window[DOMORE_DATA_LAYER_NAME] || []

  const entry = {
    event,
    ...cleanParams(params),
    device_category: getDeviceCategory(),
    timestamp: new Date().toISOString(),
    event_version: '1.0',
  }

  window[DOMORE_DATA_LAYER_NAME].push(entry)
  sendToGa4(entry)
  return entry
}

// Backward-compatible helper used by existing components. It converts the
// previous GA-oriented names into the Do More ATL business event taxonomy.
export function trackEvent(name, params = {}) {
  const aliases = {
    cta_click: 'cta_clicked',
    start_project: 'start_project_clicked',
    select_content: 'project_selected',
    project_visit: 'project_outbound_clicked',
    form_start: 'form_started',
    generate_lead: 'lead_submitted',
    begin_checkout: 'strategy_checkout_started',
    strategy_checkout_return: 'strategy_checkout_returned',
  }

  return pushDoMoreEvent(aliases[name] || name, params)
}

export function trackPageView(path) {
  return pushDoMoreEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path,
    page_name: path.split('?')[0] === '/' ? 'home' : path.split('?')[0].replace(/^\//, '').replaceAll('/', '_'),
  })
}

export function analyticsEventFromElement(element) {
  const label = element?.dataset?.analytics
  if (!label) return null
  const project = element.dataset.project

  if (label.startsWith('project-external-')) {
    return ['project_outbound_clicked', {
      project_name: project || label.replace('project-external-', ''),
      interaction_location: window.location.pathname,
      link_url: element.href,
    }]
  }

  if (label.startsWith('project-case-study-')) {
    return ['project_selected', {
      project_name: project || label.replace('project-case-study-', ''),
      interaction_location: window.location.pathname,
      action: 'open_case_study',
    }]
  }

  if (label.startsWith('project-cta-start-')) {
    return ['start_project_clicked', {
      source: 'project_case_study',
      project_name: project || label.replace('project-cta-start-', ''),
      interaction_location: window.location.pathname,
    }]
  }

  if (label.includes('pay-strategy') || label.includes('checkout')) {
    return ['strategy_checkout_started', {
      currency: 'USD',
      value: 100,
      product_name: 'Product Strategy Session',
      source: label,
      interaction_location: window.location.pathname,
    }]
  }

  if (label.includes('start-project') || label.includes('path-services') || label.includes('bottom-start')) {
    return ['start_project_clicked', {
      source: label,
      interaction_location: window.location.pathname,
    }]
  }

  return ['cta_clicked', {
    cta_name: label,
    interaction_location: window.location.pathname,
  }]
}
