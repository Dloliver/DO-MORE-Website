import { Link } from '../router.jsx'
import PageHero from '../components/PageHero.jsx'
import { Arrow } from '../components/Icons.jsx'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
const experience = ['Product development', 'Mobile applications', 'Web applications', 'Analytics', 'Privacy', 'User experience', 'Cross-platform engineering', 'Launch strategy']

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Do More ATL" title="Strong ideas deserve a practical path from concept to launch." text="Do More ATL is an independent product studio that builds original products and partners with founders, nonprofits, creators, and businesses." primary={{ label: 'View Our Work', to: '/work' }} secondary={{ label: 'Start Your Project', to: '/start' }} />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-14 sm:px-8 sm:pb-20 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div className="glass rounded-[1.5rem] p-6 text-center">
          <img src={asset('/images/brand/do-more-fun.png')} alt="Playful Do More logo" className="mx-auto h-44 w-56 rounded-2xl bg-white object-contain p-3 shadow-2xl sm:h-52 sm:w-64" />
          <p className="mt-5 text-xs font-bold uppercase tracking-[.18em] text-white/38">Independent · Atlanta Area · Product Focused</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-sky-300">Founder-Led Studio</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-.045em] sm:text-5xl">Direct collaboration backed by years of digital product experience.</h2>
          <p className="mt-5 text-base leading-7 text-white/58">Do More ATL was founded and is led by Dennis Oliver. The studio brings together hands-on application development with experience in product analytics, privacy, digital experiences, and working through the realities of complex software.</p>
          <p className="mt-4 text-base leading-7 text-white/58">That background shapes a practical approach: understand the user and goal, reduce the idea to a focused first version, build thoughtfully, measure what matters, and prepare the product for a real launch.</p>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.025] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300">Experience Across the Product Lifecycle</p>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">{experience.map((item) => <div key={item} className="glass rounded-xl p-4 text-center text-sm font-extrabold leading-5 sm:rounded-2xl sm:text-base">{item}</div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5"><h3 className="text-xl font-black">Original Product Builder</h3><p className="mt-3 text-sm leading-6 text-white/55">The studio understands ownership because it creates and grows its own products—not only client deliverables.</p></article>
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5"><h3 className="text-xl font-black">Direct Communication</h3><p className="mt-3 text-sm leading-6 text-white/55">The person discussing strategy is directly involved in product decisions, development, and launch.</p></article>
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5"><h3 className="text-xl font-black">Right-Sized Collaboration</h3><p className="mt-3 text-sm leading-6 text-white/55">Projects can begin with strategy or a focused MVP and expand only when the product needs it.</p></article>
        </div>
        <div className="mt-10 text-center"><Link to="/start" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-slate-950">Start a Project <Arrow /></Link></div>
      </section>
    </>
  )
}
