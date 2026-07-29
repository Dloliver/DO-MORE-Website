import { Link } from '../router.jsx'
import { services, pricing } from '../data.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { Arrow } from '../components/Icons.jsx'

const specialties = ['Mobile Apps', 'Web Applications', 'Community Platforms', 'Creator & Streamer Tools', 'Internal Business Software', 'Nonprofit & Civic Technology', 'Games & Interactive Products', 'Product Strategy & Consulting']

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Build the right product—not just more features." text="Do More ATL helps shape, design, build, launch, and improve digital products with a practical focus on the user, business goal, and first version that matters." primary={{ label: 'Start Your Project', to: '/start' }} secondary={{ label: 'Book Strategy First', to: '/strategy' }} />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service) => <ServiceCard key={service.id} service={service} detailed />)}
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.025] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionHeading eyebrow="Product Specialties" title="Broad enough for ambitious ideas. Focused enough to deliver." text="The studio is especially suited for products that combine thoughtful interfaces, user accounts, data, community, content, or cross-platform experiences." />
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {specialties.map((item) => <div key={item} className="glass rounded-xl p-4 text-center text-sm font-extrabold leading-5 sm:rounded-2xl sm:text-base">{item}</div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        <SectionHeading eyebrow="Pricing Guidance" title="Clear starting points without forcing every idea into a fixed package." text="Final pricing depends on scope, complexity, platforms, integrations, and the current stage of the product." />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {pricing.map((item) => (
            <article key={item.title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-2 text-lg font-extrabold text-sky-200">{item.price}</p>
              <p className="mt-3 text-sm leading-6 text-white/55 sm:text-base">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-white/42">Ongoing maintenance, product guidance, analytics reviews, and release support are available through monthly plans based on the product’s needs.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-violet-500/18 via-sky-500/10 to-transparent p-6 sm:p-9">
          <h2 className="text-3xl font-black tracking-[-.045em] sm:text-4xl">Not sure which service fits your idea?</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-white/58">Start with a Product Strategy Session or submit the project. We’ll recommend the most useful next step instead of forcing a larger build before the idea is ready.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/strategy" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-950">Explore Strategy <Arrow /></Link>
            <Link to="/start" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-extrabold hover:bg-white/[0.06]">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  )
}
