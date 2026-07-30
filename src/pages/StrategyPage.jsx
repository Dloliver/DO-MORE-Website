import PageHero from '../components/PageHero.jsx'
import { Arrow, Check } from '../components/Icons.jsx'
import { STRATEGY_PAYMENT_URL } from '../paymentConfig.js'

const idealFor = [
  'An app or startup idea',
  'A nonprofit platform',
  'A creator or community tool',
  'Internal business software',
  'An existing product that needs direction',
  'A concept you are not ready to fully build yet',
]

const covers = [
  'MVP definition and product scope',
  'Feature prioritization',
  'Technical recommendations',
  'Timeline and budget guidance',
  'Launch strategy',
  'Open questions and next steps',
]

export default function StrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Strategy Session"
        title={
          <>
            Turn your idea into a practical product plan.{' '}
            <span className="gradient-text">$100.</span>
          </>
        }
        text="A focused 60-minute working session and the standard first step for every new Do More ATL product or development project."
        primary={{
          label: 'Pay $100 & Start Your Project',
          href: STRATEGY_PAYMENT_URL,
        }}
        secondary={{ label: 'See How It Works', to: '#details' }}
      />

      <section
        id="details"
        className="scroll-mt-24 mx-auto grid max-w-7xl gap-5 px-4 pb-14 sm:px-8 sm:pb-20 lg:grid-cols-2"
      >
        <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300">
            Perfect If You Have
          </p>
          <ul className="mt-5 grid gap-3">
            {idealFor.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm font-semibold text-white/72 sm:text-base"
              >
                <span className="text-violet-300">
                  <Check />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-sky-300">
            During the Session
          </p>
          <ul className="mt-5 grid gap-3">
            {covers.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm font-semibold text-white/72 sm:text-base"
              >
                <span className="text-sky-300">
                  <Check />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="border-y border-white/8 bg-white/[0.025] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="glass rounded-[1.35rem] p-5 sm:p-6">
              <div className="text-xs font-black tracking-[.18em] text-white/30">
                01
              </div>
              <h3 className="mt-3 text-xl font-black">Pay Securely</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Complete the one-time $100 payment through Stripe before an
                appointment is scheduled.
              </p>
            </article>

            <article className="glass rounded-[1.35rem] p-5 sm:p-6">
              <div className="text-xs font-black tracking-[.18em] text-white/30">
                02
              </div>
              <h3 className="mt-3 text-xl font-black">Complete the Intake</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Share the product, audience, current stage, and the decisions
                you need help working through.
              </p>
            </article>

            <article className="glass rounded-[1.35rem] p-5 sm:p-6">
              <div className="text-xs font-black tracking-[.18em] text-white/30">
                03
              </div>
              <h3 className="mt-3 text-xl font-black">
                Meet & Receive the Plan
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                We work through the product together, followed by a written
                summary of recommended next steps.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        <div className="rounded-[1.75rem] border border-emerald-300/18 bg-emerald-300/[0.07] p-6 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-200">
            Your Session Can Become the First Project Step
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-[-.045em] sm:text-5xl">
            Move forward within 30 days and the full $100 can be credited
            toward a qualifying Do More ATL development project.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/58">
            The payment covers the strategy session whether or not a larger
            project follows. Development begins only after scope, price,
            contract, and payment terms are separately agreed upon.
          </p>

          <a
            href={STRATEGY_PAYMENT_URL}
            data-analytics="strategy-bottom-payment"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-slate-950"
          >
            Pay $100 & Start Your Project <Arrow />
          </a>
        </div>
      </section>
    </>
  )
}
