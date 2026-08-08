import { useRef, useState } from 'react'
import { trackEvent } from '../analytics.js'
import { CONTACT_EMAIL, CONTACT_FORM_ENDPOINT } from '../contactConfig.js'

const initialStatus = { type: 'idle', message: '' }
const fieldClass = 'mt-2 w-full rounded-xl border border-white/12 bg-[#07111f]/75 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-sky-300/70 focus:ring-2 focus:ring-sky-300/15 sm:rounded-2xl sm:px-4'

export default function ContactForm() {
  const [status, setStatus] = useState(initialStatus)
  const hasStarted = useRef(false)

  const handleFormStart = () => {
    if (hasStarted.current) return
    hasStarted.current = true
    trackEvent('form_start', { form_name: 'contact' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus({ type: 'submitting', message: 'Sending your message…' })

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('Submission failed')
      trackEvent('generate_lead', { form_name: 'contact' })
      form.reset()
      setStatus({ type: 'success', message: 'Thanks — your message has been sent.' })
    } catch {
      setStatus({ type: 'error', message: `The message could not be sent. Please email ${CONTACT_EMAIL} directly.` })
    }
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFormStart} className="rounded-[1.35rem] border border-white/10 bg-[#07111f]/70 p-4 text-left shadow-2xl shadow-black/20 backdrop-blur sm:p-6">
      <input type="hidden" name="formType" value="General contact" />
      <input type="hidden" name="subject" value="New general inquiry from domoreatl.com" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">Name<input className={fieldClass} type="text" name="name" autoComplete="name" placeholder="Your name" required /></label>
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">Email<input className={fieldClass} type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></label>
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">Company <span className="normal-case tracking-normal text-white/30">(optional)</span><input className={fieldClass} type="text" name="company" autoComplete="organization" placeholder="Company or organization" /></label>
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">Reason for reaching out<select className={fieldClass} name="reason" defaultValue=""><option value="" disabled>Select one</option><option>Partnership</option><option>Media or speaking</option><option>Product support</option><option>Testing or feedback</option><option>General question</option></select></label>
      </div>
      <label className="mt-4 block text-xs font-bold uppercase tracking-[.14em] text-white/55">Message<textarea className={`${fieldClass} min-h-40 resize-y`} name="message" placeholder="How can we help?" required /></label>
      <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status.type === 'submitting'} className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 sm:w-auto">{status.type === 'submitting' ? 'Sending…' : 'Send Message'}</button>
        <p className="text-xs leading-5 text-white/38 sm:max-w-[18rem] sm:text-right">We will use your information only to respond to your inquiry.</p>
      </div>
      {status.message && <p role="status" className={`mt-4 rounded-xl border px-3 py-2.5 text-sm ${status.type === 'success' ? 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100' : status.type === 'error' ? 'border-rose-300/25 bg-rose-300/10 text-rose-100' : 'border-sky-300/20 bg-sky-300/10 text-sky-100'}`}>{status.message}</p>}
    </form>
  )
}
