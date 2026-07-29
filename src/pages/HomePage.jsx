import { Link } from '../router.jsx'
import { projects, services, processSteps } from '../data.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProjectShowcase from '../components/ProjectShowcase.jsx'
import { Arrow } from '../components/Icons.jsx'

const reasons = [
  { title: 'End-to-End Product Thinking', text: 'Strategy, interface, technology, launch, and long-term direction are considered together.' },
  { title: 'Real Product Experience', text: 'The portfolio includes accounts, data, multiplayer, analytics, privacy needs, and mobile publishing.' },
  { title: 'Analytics & Privacy', text: 'Products are planned with useful measurement and responsible data practices in mind.' },
  { title: 'Direct Collaboration', text: 'Work directly with the person planning and building the product, without unnecessary agency layers.' },
]

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Independent Product Studio"
        title={<>Turning ideas into products people <span className="gradient-text">love to use.</span></>}
        text="We design, build, and launch web apps, mobile apps, and digital products for founders, nonprofits, creators, and businesses."
        primary={{ label: 'Start Your Project', to: '/start' }}
        secondary={{ label: 'View Our Work', to: '/work' }}
      >
        <div className="glass mt-10 grid gap-1.5 rounded-[1.35rem] p-1.5 sm:grid-cols-3 sm:gap-3 sm:p-2">
          {projects.map((project, index) => (
            <Link key={project.id} to={`/work/${project.slug}`} className="group min-w-0 rounded-[1rem] px-4 py-3 transition hover:bg-white/[0.06] sm:p-5">
              <div className="text-[10px] font-bold uppercase tracking-[.18em] text-white/35">0{index + 1} · {project.category}</div>
              <div className="mt-2 flex items-center justify-between gap-3">
                <div>
                  <div className="text-lg font-black sm:text-xl">{project.name}</div>
                  <div className="mt-1 text-xs text-white/48 sm:text-sm">{project.status}</div>
                </div>
                <Arrow className="h-5 w-5 text-white/25 transition group-hover:translate-x-1 group-hover:text-white" />
              </div>
            </Link>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="What We Do" title="A practical path from idea to launch." text="Choose the support your product needs now, with room to grow into design, development, publishing, and ongoing improvement." />
          <Link to="/services" className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-sky-200 hover:text-white">Explore Services <Arrow /></Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.018] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Selected Work" title="Products built to solve different problems." text="Original products demonstrate the studio’s approach to product thinking, interface design, development, testing, and launch." />
            <Link to="/work" className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-violet-200 hover:text-white">See All Work <Arrow /></Link>
          </div>
          <div className="mt-8 space-y-5">
            {projects.map((project, index) => <ProjectShowcase key={project.id} project={project} reverse={index % 2 === 1} compact />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        <SectionHeading eyebrow="Why Do More ATL" title="A product partner, not just a code vendor." text="Built through years of working with complex digital products and creating software from early concept through launch." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <div className="text-xs font-black uppercase tracking-[.18em] text-white/28">0{index + 1}</div>
              <h3 className="mt-3 text-xl font-black tracking-[-.03em]">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55 sm:text-base">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="scroll-mt-24 border-y border-white/8 bg-white/[0.025] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionHeading eyebrow="How We Work" title="Clear steps from the first conversation to launch." text="A structured process removes uncertainty while keeping each project flexible enough to respond to real feedback." />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.number} className="glass rounded-[1.25rem] p-5">
                <div className="text-xs font-black tracking-[.18em] text-sky-300">{step.number}</div>
                <h3 className="mt-3 text-xl font-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        <div className="overflow-hidden rounded-[1.75rem] border border-violet-300/15 bg-gradient-to-br from-violet-500/22 via-sky-500/10 to-amber-300/10 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-200">Product Strategy Session · $100</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-.045em] sm:text-5xl">Turn the idea in your head into a practical next-step plan.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">A focused 60-minute session covering your MVP, features, technical direction, timeline, budget, launch strategy, and questions—with a written summary afterward.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/strategy" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5">View Strategy Session <Arrow /></Link>
              <Link to="/start?service=strategy" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-extrabold hover:bg-white/10">Request a Session</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
