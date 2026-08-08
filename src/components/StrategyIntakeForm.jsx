import { useRef, useState } from 'react'
import { trackEvent } from '../analytics.js'
import { CONTACT_EMAIL, CONTACT_FORM_ENDPOINT } from '../contactConfig.js'

const fieldClass =
  'mt-2 w-full rounded-xl border border-white/12 bg-[#07111f]/80 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-violet-300/70 focus:ring-2 focus:ring-violet-300/15 sm:rounded-2xl sm:px-4'

export default function StrategyIntakeForm() {
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const hasStarted = useRef(false)

  const handleFormStart = () => {
    if (hasStarted.current) return
    hasStarted.current = true
    trackEvent('form_start', { form_name: 'strategy' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus({ type: 'submitting', message: 'Submitting your session intake…' })

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Submission failed')

      trackEvent('generate_lead', { form_name: 'strategy' })
      form.reset()
      setStatus({
        type: 'success',
        message:
          'Your session intake has been submitted. We’ll verify the Stripe payment and email the scheduling instructions.',
      })
    } catch {
      setStatus({
        type: 'error',
        message: `Your intake could not be submitted. Please email ${CONTACT_EMAIL} directly.`,
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={handleFormStart}
      className="rounded-[1.5rem] border border-white/10 bg-[#07111f]/72 p-4 shadow-2xl shadow-black/25 backdrop-blur sm:p-7"
    >
      <input
        type="hidden"
        name="formType"
        value="Paid Product Strategy Session intake"
      />
      <input
        type="hidden"
        name="subject"
        value="Paid strategy session intake from domoreatl.com"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">
          Name
          <input
            className={fieldClass}
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </label>

        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">
          Email used at Stripe checkout
          <input
            className={fieldClass}
            type="email"
            name="checkoutEmail"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">
          Company or organization
          <input
            className={fieldClass}
            name="organization"
            autoComplete="organization"
            placeholder="Optional"
          />
        </label>

        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">
          Current stage
          <select
            className={fieldClass}
            name="stage"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select one
            </option>
            <option>Idea only</option>
            <option>Notes or sketches</option>
            <option>Designed mockups</option>
            <option>Working prototype</option>
            <option>Existing product</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block text-xs font-bold uppercase tracking-[.14em] text-white/55">
        What product or idea should we discuss?
        <textarea
          className={`${fieldClass} min-h-32 resize-y`}
          name="productIdea"
          placeholder="Describe the idea, problem, audience, and current vision."
          required
        />
      </label>

      <label className="mt-4 block text-xs font-bold uppercase tracking-[.14em] text-white/55">
        What are the most important questions for the session?
        <textarea
          className={`${fieldClass} min-h-28 resize-y`}
          name="sessionQuestions"
          placeholder="MVP scope, technology, budget, timeline, launch, features, or anything else."
          required
        />
      </label>

      <label className="mt-4 block text-xs font-bold uppercase tracking-[.14em] text-white/55">
        Supporting links{' '}
        <span className="normal-case tracking-normal text-white/30">
          (optional)
        </span>
        <input
          className={fieldClass}
          type="url"
          name="links"
          placeholder="Figma, Google Drive, existing website, notes, or mockups"
        />
      </label>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">
          Time zone
          <input
            className={fieldClass}
            name="timezone"
            placeholder="Example: Eastern Time"
            required
          />
        </label>

        <label className="text-xs font-bold uppercase tracking-[.14em] text-white/55">
          General availability
          <input
            className={fieldClass}
            name="availability"
            placeholder="Example: Weekdays after 2 PM"
            required
          />
        </label>
      </div>

      <label className="mt-4 block text-xs font-bold uppercase tracking-[.14em] text-white/55">
        Anything else we should prepare for?
        <textarea
          className={`${fieldClass} min-h-24 resize-y`}
          name="additionalDetails"
          placeholder="Constraints, concerns, documents, or background."
        />
      </label>

      <input
        type="text"
        name="_gotcha"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-6">
        <button
          type="submit"
          disabled={status.type === 'submitting'}
          className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
        >
          {status.type === 'submitting'
            ? 'Submitting…'
            : 'Submit Session Intake'}
        </button>

        <p className="mt-3 text-xs leading-5 text-white/38">
          An appointment is scheduled only after the Stripe payment is verified
          and this intake is received.
        </p>
      </div>

      {status.message && (
        <p
          role="status"
          className={`mt-5 rounded-xl border px-3 py-3 text-sm ${
            status.type === 'success'
              ? 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100'
              : status.type === 'error'
                ? 'border-rose-300/25 bg-rose-300/10 text-rose-100'
                : 'border-violet-300/20 bg-violet-300/10 text-violet-100'
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  )
}
