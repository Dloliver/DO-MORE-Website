const Arrow = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function ProjectShowcase({ project, reverse = false }) {
  return (
    <article id={project.id} className="relative scroll-mt-24 overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7 lg:p-8">
      <div className={`pointer-events-none absolute inset-0 opacity-70 ${project.glow}`} />
      <div className={`relative grid items-center gap-7 lg:grid-cols-[0.88fr_1.12fr] ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">
              {project.category}
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-semibold text-white/65">
              {project.status}
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-[-0.05em] sm:text-5xl">{project.name}</h2>
          <p className="mt-3 max-w-xl text-lg font-semibold text-white/90 sm:text-xl">{project.tagline}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/62 sm:text-base">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.features.slice(0, 4).map((feature) => (
              <span key={feature} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/70">
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={project.primaryHref} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold transition hover:-translate-y-0.5 ${project.button}`}>
              {project.primaryLabel}<Arrow />
            </a>
            <a href={`#${project.id}-gallery`} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-white/10">
              View Screens
            </a>
          </div>
        </div>

        <div id={`${project.id}-gallery`} className="relative mx-auto min-h-[330px] w-full max-w-[620px] sm:min-h-[405px]">
          <div className="image-frame absolute left-[2%] top-[11%] w-[69%] overflow-hidden rounded-[1.15rem] border border-white/15 bg-[#08111f] sm:rounded-[1.45rem]">
            <img src={project.images[0]} alt={`${project.name} screen`} className="h-auto w-full" />
          </div>
          <div className="image-frame absolute right-[1%] top-0 w-[37%] rotate-[1.8deg] overflow-hidden rounded-[1.35rem] border-[4px] border-[#0c1422] bg-[#08111f] sm:border-[6px]">
            <img src={project.images[1]} alt={`${project.name} mobile screen`} className="h-auto w-full" />
          </div>
          <div className="image-frame absolute bottom-0 right-[11%] w-[34%] -rotate-[1.7deg] overflow-hidden rounded-[1.35rem] border-[4px] border-[#0c1422] bg-[#08111f] sm:border-[6px]">
            <img src={project.images[2]} alt={`${project.name} feature screen`} className="h-auto w-full" />
          </div>
        </div>
      </div>
    </article>
  )
}
