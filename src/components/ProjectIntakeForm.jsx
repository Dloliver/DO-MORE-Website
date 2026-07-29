import { useState } from 'react'
import { CONTACT_EMAIL, CONTACT_FORM_ENDPOINT } from '../contactConfig.js'
import { useRouter } from '../router.jsx'

const fieldClass = 'mt-2 w-full rounded-xl border border-white/12 bg-[#07111f]/80 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-violet-300/70 focus:ring-2 focus:ring-violet-300/15 sm:rounded-2xl sm:px-4'

export default function ProjectIntakeForm() {
  const { search } = useRouter()
  const requestedService = new URLSearchParams(search).get('service')
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus({ type: 'submitting', message: 'Submitting your project…' })

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setStatus({ type: 'success', message: 'Your project has been submitted. We’ll review it and reply with the best next step.' })
    } catch {
      setStatus({ type: 'error', message: `Your project could not be submitted. Please email ${CONTACT_EMAIL} directly.` })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-white/10 bg-[#07111f]/72 p-4 shadow-2xl shadow-black/25 backdrop-blur sm:p-7">
      <input type="hidden" name="formType" value="Project intake" />
      <input type="hidden" name="subject" value="New project inquiry from domoreatl.com" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">Name<input className={fieldClass} name="name" autoComplete="name" placeholder="Your name" required /></label>
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">Email<input className={fieldClass} type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></label>
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">Company or organization<input className={fieldClass} name="organization" autoComplete="organization" placeholder="Optional" /></label>
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">Best starting point<select className={fieldClass} name="startingPoint" defaultValue={requestedService === 'strategy' ? 'Product Strategy Session' : ''} required><option value="" disabled>Select one</option><option>Product Strategy Session</option><option>Prototype or product planning</option><option>MVP development</option><option>Custom application</option><option>Ongoing product support</option><option>Not sure yet</option></select></label>
      </div>

      <label className="mt-4 block text-xs font-bold uppercase tracking-[.14em] text-white/55">What are you trying to build?<textarea className={`${fieldClass} min-h-32 resize-y`} name="project" placeholder="Describe the idea, problem, or product." required /></label>
      <label className="mt-4 block text-xs font-bold uppercase tracking-[.14em] text-white/55">Who is the product for?<textarea className={`${fieldClass} min-h-24 resize-y`} name="audience" placeholder="Tell us about the intended users or customers." required /></label>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">Current stage<select className={fieldClass} name="stage" defaultValue="" required><option value="" disabled>Select one</option><option>Idea only</option><option>Notes or sketches</option><option>Designed mockups</option><option>Working prototype</option><option>Existing product</option></select></label>
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">Estimated budget<select className={fieldClass} name="budget" defaultValue="" required><option value="" disabled>Select one</option><option>Under $2,500</option><option>$2,500–$5,000</option><option>$5,000–$10,000</option><option>$10,000–$25,000</option><option>$25,000+</option><option>Not sure yet</option></select></label>
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">Desired timeline<select className={fieldClass} name="timeline" defaultValue="" required><option value="" disabled>Select one</option><option>As soon as practical</option><option>1–3 months</option><option>3–6 months</option><option>6+ months</option><option>Flexible</option></select></label>
      </div>

      <label className="mt-4 block text-xs font-bold uppercase tracking-[.14em] text-white/55">Most important features<textarea className={`${fieldClass} min-h-28 resize-y`} name="features" placeholder="What must the first version be able to do?" /></label>
      <label className="mt-4 block text-xs font-bold uppercase tracking-[.14em] text-white/55">Supporting links <span className="normal-case tracking-normal text-white/30">(optional)</span><input className={fieldClass} type="url" name="links" placeholder="Figma, Google Drive, existing website, requirements, or mockups" /></label>
      <label className="mt-4 block text-xs font-bold uppercase tracking-[.14em] text-white/55">Anything else we should know?<textarea className={`${fieldClass} min-h-28 resize-y`} name="additionalDetails" placeholder="Constraints, goals, concerns, or questions." /></label>
      <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status.type === 'submitting'} className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 sm:w-auto">{status.type === 'submitting' ? 'Submitting…' : 'Submit Your Project'}</button>
        <p className="text-xs leading-5 text-white/38 sm:max-w-[20rem] sm:text-right">Submitting does not create a contract or payment obligation. We will review the fit and recommend a next step.</p>
      </div>
      {status.message && <p role="status" className={`mt-5 rounded-xl border px-3 py-3 text-sm ${status.type === 'success' ? 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100' : status.type === 'error' ? 'border-rose-300/25 bg-rose-300/10 text-rose-100' : 'border-violet-300/20 bg-violet-300/10 text-violet-100'}`}>{status.message}</p>}
    </form>
  )
}
