import { useState } from 'react'
import { CONTACT_EMAIL, CONTACT_FORM_ENDPOINT } from '../contactConfig.js'

const initialStatus = { type: 'idle', message: '' }

export default function ContactForm() {
  const [status, setStatus] = useState(initialStatus)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (!CONTACT_FORM_ENDPOINT) {
      const subject = encodeURIComponent(data.get('subject') || 'New inquiry from domoreatl.com')
      const body = encodeURIComponent([
        `Name: ${data.get('name') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Company: ${data.get('company') || 'Not provided'}`,
        `Project type: ${data.get('projectType') || 'Not selected'}`,
        '',
        data.get('message') || '',
      ].join('\n'))

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
      setStatus({ type: 'fallback', message: 'Your email app should open with the message filled in.' })
      return
    }

    setStatus({ type: 'submitting', message: 'Sending your message…' })

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('The form service could not accept the message.')
      }

      form.reset()
      setStatus({ type: 'success', message: 'Thanks — your message has been sent.' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'The message could not be sent. Please email info@domoreatl.com directly.',
      })
    }
  }

  const fieldClass = 'mt-2 w-full rounded-xl border border-white/12 bg-[#07111f]/75 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-sky-300/70 focus:ring-2 focus:ring-sky-300/15 sm:rounded-2xl sm:px-4'

  return (
    <form onSubmit={handleSubmit} className="min-w-0 rounded-[1.25rem] border border-white/10 bg-[#07111f]/65 p-4 text-left shadow-2xl shadow-black/20 backdrop-blur sm:rounded-[1.65rem] sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="min-w-0 text-xs font-bold uppercase tracking-[.14em] text-white/55">
          Name
          <input className={fieldClass} type="text" name="name" autoComplete="name" placeholder="Your name" required />
        </label>
        <label className="min-w-0 text-xs font-bold uppercase tracking-[.14em] text-white/55">
          Email
          <input className={fieldClass} type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
        <label className="min-w-0 text-xs font-bold uppercase tracking-[.14em] text-white/55">
          Company <span className="normal-case tracking-normal text-white/30">(optional)</span>
          <input className={fieldClass} type="text" name="company" autoComplete="organization" placeholder="Company or organization" />
        </label>
        <label className="min-w-0 text-xs font-bold uppercase tracking-[.14em] text-white/55">
          Project type
          <select className={fieldClass} name="projectType" defaultValue="">
            <option value="" disabled>Select one</option>
            <option value="App or game development">App or game development</option>
            <option value="Website development">Website development</option>
            <option value="Product collaboration">Product collaboration</option>
            <option value="Testing or feedback">Testing or feedback</option>
            <option value="General inquiry">General inquiry</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block min-w-0 text-xs font-bold uppercase tracking-[.14em] text-white/55">
        Subject
        <input className={fieldClass} type="text" name="subject" placeholder="What would you like to discuss?" required />
      </label>

      <label className="mt-4 block min-w-0 text-xs font-bold uppercase tracking-[.14em] text-white/55">
        Message
        <textarea className={`${fieldClass} min-h-36 resize-y`} name="message" placeholder="Tell us about the idea, project, or question." required />
      </label>

      <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status.type === 'submitting'} className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 sm:w-auto">
          {status.type === 'submitting' ? 'Sending…' : 'Send Message'}
        </button>
        <p className="text-xs leading-5 text-white/38 sm:max-w-[18rem] sm:text-right">By sending this form, you agree that we may reply to the email address provided.</p>
      </div>

      {status.message && (
        <p role="status" className={`mt-4 rounded-xl border px-3 py-2.5 text-sm ${status.type === 'success' ? 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100' : status.type === 'error' ? 'border-rose-300/25 bg-rose-300/10 text-rose-100' : 'border-sky-300/20 bg-sky-300/10 text-sky-100'}`}>
          {status.message}
        </p>
      )}
    </form>
  )
}
