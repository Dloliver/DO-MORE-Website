import PageHero from '../components/PageHero.jsx'
import ProjectIntakeForm from '../components/ProjectIntakeForm.jsx'

export default function StartPage() {
  return (
    <>
      <PageHero eyebrow="Start Your Project" title="Tell us what you want to bring to life." text="Share the idea, audience, current stage, budget, and timeline. We’ll review the fit and recommend the most useful next step." />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
        <aside className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 sm:p-6 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-sky-300">What Happens Next</p>
          <ol className="mt-5 grid gap-5">
            <li><div className="text-xs font-black text-white/30">01</div><h2 className="mt-1 font-black">We review the fit</h2><p className="mt-1 text-sm leading-6 text-white/52">The studio looks at the goal, scope, timing, and current stage.</p></li>
            <li><div className="text-xs font-black text-white/30">02</div><h2 className="mt-1 font-black">You receive a recommended path</h2><p className="mt-1 text-sm leading-6 text-white/52">That may be a strategy session, prototype, MVP proposal, or a different next step.</p></li>
            <li><div className="text-xs font-black text-white/30">03</div><h2 className="mt-1 font-black">Nothing starts without agreement</h2><p className="mt-1 text-sm leading-6 text-white/52">Scope, price, timeline, and deliverables are defined before paid project work begins.</p></li>
          </ol>
          <div className="mt-6 rounded-xl border border-violet-300/15 bg-violet-300/[0.07] p-4"><p className="text-sm font-extrabold">Still shaping the idea?</p><p className="mt-1 text-sm leading-6 text-white/52">Choose the $100 Product Strategy Session as your starting point.</p></div>
        </aside>
        <ProjectIntakeForm />
      </section>
    </>
  )
}
