import { projects } from '../data.js'
import { Link } from '../router.jsx'
import PageHero from '../components/PageHero.jsx'
import { LayeredGallery } from '../components/ProjectShowcase.jsx'
import { Arrow, Check } from '../components/Icons.jsx'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export default function ProjectPage({ slug }) {
  const project = projects.find((item) => item.slug === slug)
  if (!project) return null
  const external = /^https?:\/\//.test(project.primaryHref)

  return (
    <>
      <PageHero eyebrow={`${project.category} · ${project.status}`} title={project.name} text={project.tagline}>
        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 sm:p-7">
          <LayeredGallery project={project} />
        </div>
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-14 sm:px-8 sm:pb-20 lg:grid-cols-2">
        <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-rose-200">The Problem</p>
          <h2 className="mt-3 text-2xl font-black tracking-[-.035em]">The opportunity behind the product</h2>
          <p className="mt-4 text-base leading-7 text-white/58">{project.problem}</p>
        </article>
        <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-sky-200">The Solution</p>
          <h2 className="mt-3 text-2xl font-black tracking-[-.035em]">A focused product response</h2>
          <p className="mt-4 text-base leading-7 text-white/58">{project.solution}</p>
        </article>
      </section>

      <section className="border-y border-white/8 bg-white/[0.025] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300">Product Story</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-.045em] sm:text-4xl">From concept to working experience.</h2>
            <p className="mt-4 text-base leading-7 text-white/58">{project.story}</p>
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-white/35">Platforms</p>
              <div className="mt-3 flex flex-wrap gap-2">{project.platforms.map((platform) => <span key={platform} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/70">{platform}</span>)}</div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => <div key={feature} className="glass flex gap-2 rounded-xl p-4 text-sm font-bold"><span className="text-sky-300"><Check /></span>{feature}</div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-amber-200">What This Demonstrates</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-.045em] sm:text-4xl">The product thinking behind the screens.</h2>
            <p className="mt-4 text-base leading-7 text-white/58">The strongest portfolio evidence is not only what the product looks like—it is the systems, decisions, and launch work required to make it function.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">{project.demonstrates.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm font-extrabold leading-6">{item}</div>)}</div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.slice(3).map((image, index) => <div key={image} className="image-frame overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#08111f]"><img src={asset(image)} alt={`${project.name} additional screen ${index + 1}`} className="h-auto w-full" /></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-violet-500/18 via-sky-500/10 to-amber-300/8 p-6 sm:p-9">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><h2 className="text-3xl font-black tracking-[-.045em]">Have an idea that needs this kind of product thinking?</h2><p className="mt-3 max-w-2xl text-base leading-7 text-white/58">Start with the project intake or a $100 Product Strategy Session.</p></div>
            <div className="flex flex-col gap-3">
              <Link to="/start" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-950">Start Your Project <Arrow /></Link>
              {external && <a href={project.primaryHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-extrabold hover:bg-white/[0.06]">Visit {project.name}</a>}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
