import PageHero from '../components/PageHero.jsx'
import StrategyIntakeForm from '../components/StrategyIntakeForm.jsx'

export default function StrategyIntakePage() {
  return (
    <>
      <PageHero
        eyebrow="Strategy Session Intake"
        title="Help us prepare for a useful working session."
        text="Complete this form after paying through Stripe. We’ll match the checkout email to the payment, review your goals, and send scheduling instructions."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
        <aside className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 sm:p-6 lg:sticky lg:top-32">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300">
            Before Scheduling
          </p>

          <ol className="mt-5 grid gap-5">
            <li>
              <div className="text-xs font-black text-white/30">01</div>
              <h2 className="mt-1 font-black">Payment is verified</h2>
              <p className="mt-1 text-sm leading-6 text-white/52">
                We match the email entered here to the completed Stripe
                checkout.
              </p>
            </li>

            <li>
              <div className="text-xs font-black text-white/30">02</div>
              <h2 className="mt-1 font-black">Your goals are reviewed</h2>
              <p className="mt-1 text-sm leading-6 text-white/52">
                The intake helps us prepare around the product, audience, and
                decisions that matter most.
              </p>
            </li>

            <li>
              <div className="text-xs font-black text-white/30">03</div>
              <h2 className="mt-1 font-black">Scheduling instructions arrive</h2>
              <p className="mt-1 text-sm leading-6 text-white/52">
                Once payment and intake are confirmed, you receive the next
                available appointment options.
              </p>
            </li>
          </ol>
        </aside>

        <StrategyIntakeForm />
      </section>
    </>
  )
}
