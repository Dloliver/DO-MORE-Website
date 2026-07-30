import PageHero from '../components/PageHero.jsx'
import { Link } from '../router.jsx'
import { Arrow, Check } from '../components/Icons.jsx'
import { STRATEGY_PAYMENT_URL } from '../paymentConfig.js'

const sessionIncludes = [
  '60-minute product strategy session',
  'MVP and feature-priority guidance',
  'Technical direction and product recommendations',
  'Budget, timeline, and launch discussion',
  'Written next-steps summary',
  '$100 credit toward a qualifying project started within 30 days',
]

const nextSteps = [
  {
    number: '01',
    title: 'Pay securely through Stripe',
    text: 'The $100 strategy-session fee is paid before an appointment is scheduled.',
  },
  {
    number: '02',
    title: 'Complete the session intake',
    text: 'After checkout, tell us about the idea, audience, current stage, and the decisions you need help making.',
  },
  {
    number: '03',
    title: 'Receive scheduling instructions',
    text: 'We verify the payment, review the intake, and send the available appointment options.',
  },
  {
    number: '04',
    title: 'Decide whether we build together',
    text: 'After the session, you receive a practical next-step summary. Qualifying projects can apply the full $100 as a credit.',
  },
]

export default function StartPage() {
  return (
    <>
      <PageHero
        eyebrow="Start Your Project"
        title={
          <>
            Every project begins with{' '}
            <span className="gradient-text">clarity and alignment.</span>
          </>
        }
        text="The $100 Product Strategy Session is the standard first step for app ideas, MVPs, games, platforms, internal tools, and custom digital products."
        primary={{
          label: 'Pay $100 & Start Your Project',
          href: STRATEGY_PAYMENT_URL,
        }}
        secondary={{
          label: 'Review What Is Included',
          to: '#session-details',
        }}
      />

      <section
        id="session-details"
        className="scroll-mt-28 mx-auto grid max-w-7xl gap-6 px-4 pb-12 sm:px-8 sm:pb-16 lg:grid-cols-[1.16fr_.84fr]"
      >
        <article className="rounded-[1.7rem] border border-violet-300/25 bg-violet-300/[0.08] p-5 shadow-2xl shadow-violet-950/20 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-200">
                Paid Project Starting Point
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-[-.045em] sm:text-4xl">
                Product Strategy Session
              </h2>
            </div>

            <div className="rounded-full border border-white/12 bg-black/20 px-5 py-2.5 text-2xl font-black">
              $100
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-6 text-white/62 sm:text-base sm:leading-7">
            This is not a free sales call. It is a focused working session used
            to understand the product, define the right first version, identify
            major risks, and determine whether Do More ATL is the right studio
            to help build it.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {sessionIncludes.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm font-semibold leading-6 text-white/72"
              >
                <span className="mt-0.5 text-violet-200">
                  <Check />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={STRATEGY_PAYMENT_URL}
            data-analytics="start-pay-strategy-session"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 sm:w-auto"
          >
            Pay $100 & Continue to Intake <Arrow />
          </a>

          <p className="mt-4 max-w-3xl text-xs leading-5 text-white/42">
            Paying for the session does not guarantee that Do More ATL will
            accept the full development project. It guarantees the strategy
            session, preparation, and written next-step recommendations.
          </p>
        </article>

        <aside className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-sky-200">
            Why This Comes First
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-[-.035em]">
            A strong build starts with the right questions.
          </h2>

          <div className="mt-5 grid gap-4">
            <div className="rounded-xl border border-white/8 bg-black/15 p-4">
              <p className="text-sm font-extrabold text-white/82">
                Protects your investment
              </p>
              <p className="mt-1 text-sm leading-6 text-white/48">
                We can reduce unnecessary features and identify a realistic
                first version before development begins.
              </p>
            </div>

            <div className="rounded-xl border border-white/8 bg-black/15 p-4">
              <p className="text-sm font-extrabold text-white/82">
                Protects focused working time
              </p>
              <p className="mt-1 text-sm leading-6 text-white/48">
                Every appointment begins with a committed client, clear
                preparation, and a defined purpose.
              </p>
            </div>

            <div className="rounded-xl border border-white/8 bg-black/15 p-4">
              <p className="text-sm font-extrabold text-white/82">
                Creates a better proposal
              </p>
              <p className="mt-1 text-sm leading-6 text-white/48">
                When the project is a fit, the session gives us the information
                needed to discuss scope, timeline, and pricing responsibly.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="border-y border-white/8 bg-white/[0.022] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-200">
            What Happens After Payment
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-[-.045em] sm:text-5xl">
            A simple path from idea to an informed decision.
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {nextSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="text-xs font-black tracking-[.18em] text-white/30">
                  {step.number}
                </div>
                <h3 className="mt-3 text-lg font-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14">
        <div className="grid gap-5 rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-white/38">
              General Business Contact
            </p>
            <h2 className="mt-2 text-xl font-black sm:text-2xl">
              Need support, press information, or want to discuss a partnership?
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/50">
              The general contact page remains available for non-project
              questions. New product ideas and development requests begin with
              the paid strategy session above.
            </p>
          </div>

          <Link
            to="/contact"
            data-analytics="start-general-contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-extrabold transition hover:bg-white/10"
          >
            General Contact
          </Link>
        </div>
      </section>
    </>
  )
}
