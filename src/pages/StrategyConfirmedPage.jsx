import { Link } from '../router.jsx'
import PageHero from '../components/PageHero.jsx'
import { Arrow, Check } from '../components/Icons.jsx'
import { CONTACT_EMAIL } from '../contactConfig.js'

const nextSteps = [
  {
    title: 'Complete the session intake',
    text: 'Use the same email address you entered during Stripe checkout.',
  },
  {
    title: 'Payment and intake are matched',
    text: 'Do More ATL verifies the completed Stripe payment before scheduling.',
  },
  {
    title: 'Receive scheduling instructions',
    text: 'Available appointment options are sent after the intake is reviewed.',
  },
]

export default function StrategyConfirmedPage() {
  return (
    <>
      <PageHero
        eyebrow="Payment Confirmation"
        title={
          <>
            Thank you. Your next step is the{' '}
            <span className="gradient-text">session intake.</span>
          </>
        }
        text="Stripe has returned you to Do More ATL after checkout. Complete the intake below so we can verify the payment, prepare for the conversation, and send scheduling instructions."
        primary={{
          label: 'Complete Session Intake',
          to: '/strategy/intake',
        }}
        secondary={{
          label: 'Return Home',
          to: '/',
        }}
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="rounded-[1.6rem] border border-emerald-300/20 bg-emerald-300/[0.07] p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-200">
            Important
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-white/64 sm:text-base sm:leading-7">
            This public page is not proof of payment by itself. Your Stripe
            receipt and the successful transaction inside Stripe are the
            official payment record.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {nextSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5 sm:p-6"
            >
              <div className="text-xs font-black tracking-[.18em] text-white/30">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h2 className="mt-3 text-xl font-black">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/52">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/strategy/intake"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-slate-950"
          >
            Complete Session Intake <Arrow />
          </Link>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-extrabold hover:bg-white/10"
          >
            Payment Question? Email Us
          </a>
        </div>
      </section>
    </>
  )
}
