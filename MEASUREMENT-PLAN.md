# Do More ATL Measurement Plan

## Data layer

Do More ATL uses a vendor-neutral business data layer:

```js
window.domoreDataLayer
```

Google's required `window.dataLayer` remains in place only as the gtag.js transport layer.

## Event contract

Every Do More ATL event includes:

- `event`
- `device_category`
- `timestamp`
- `event_version`

No form values, names, email addresses, phone numbers, or project descriptions are sent to either data layer or GA4.

| Do More ATL event | GA4 event | Purpose |
|---|---|---|
| `page_view` | `page_view` | SPA page navigation |
| `cta_clicked` | `cta_click` | General CTA engagement |
| `start_project_clicked` | `start_project` | Project-intent CTA |
| `project_selected` | `select_content` | Case study opened |
| `project_outbound_clicked` | `project_visit` | Live product visit |
| `form_started` | `form_start` | First form interaction |
| `lead_submitted` | `generate_lead` | Successful form submission |
| `strategy_checkout_started` | `begin_checkout` | Stripe checkout click |
| `strategy_checkout_returned` | `strategy_checkout_return` | Return from Stripe; not verified purchase |

## Console verification

Open the live site, interact with it, then run:

```js
window.domoreDataLayer
```

Example:

```js
[
  {
    event: 'project_outbound_clicked',
    project_name: 'squadview',
    interaction_location: '/work/squadview',
    link_url: 'https://squadview.app/',
    device_category: 'desktop',
    timestamp: '2026-08-08T13:00:00.000Z',
    event_version: '1.0'
  }
]
```
