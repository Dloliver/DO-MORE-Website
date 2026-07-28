const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function ProjectShowcase({ project, reverse = false }) {
  return (
    <article id={project.id} className="relative scroll-mt-20 overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4 sm:scroll-mt-24 sm:rounded-[1.65rem] sm:p-7 lg:p-8">
      <div className={`pointer-events-none absolute inset-0 opacity-70 ${project.glow}`} />
      <div className={`relative grid min-w-0 items-center gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-7 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4">
            <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/75 sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
              {project.category}
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold text-white/65 sm:px-3 sm:text-[11px]">
              {project.status}
            </span>
          </div>

          <h2 className="break-words text-3xl font-black leading-none tracking-[-0.05em] sm:text-5xl">{project.name}</h2>
          <p className="mt-3 max-w-xl text-base font-semibold leading-6 text-white/90 sm:text-xl">{project.tagline}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/62 sm:text-base">{project.description}</p>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:flex sm:flex-wrap">
            {project.features.slice(0, 4).map((feature) => (
              <span key={feature} className="min-w-0 rounded-xl border border-white/10 bg-white/[0.06] px-2.5 py-2 text-center text-[11px] font-semibold leading-4 text-white/70 sm:rounded-full sm:px-3 sm:py-1.5 sm:text-xs">
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-5 grid gap-2.5 sm:mt-6 sm:flex sm:flex-wrap sm:gap-3">
            <a href={project.primaryHref} target="_blank" rel="noreferrer" className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold transition hover:-translate-y-0.5 sm:w-auto ${project.button}`}>
              {project.primaryLabel}<Arrow />
            </a>
            <a href={`#${project.id}-gallery`} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-white/10 sm:w-auto">
              View Screens
            </a>
          </div>
        </div>

        <div id={`${project.id}-gallery`} className="layered-gallery relative mx-auto min-h-[270px] w-full max-w-[620px] scroll-mt-24 sm:min-h-[390px] lg:min-h-[410px]">
          <div className="image-frame absolute left-0 top-[13%] z-10 w-[73%] overflow-hidden rounded-[.9rem] border border-white/15 bg-[#08111f] sm:left-[2%] sm:top-[11%] sm:w-[69%] sm:rounded-[1.45rem]">
            <img src={asset(project.images[0])} alt={`${project.name} desktop screen`} className="block h-auto w-full" />
          </div>
          <div className="image-frame absolute right-0 top-0 z-20 w-[37%] rotate-[1.6deg] overflow-hidden rounded-[1.05rem] border-[4px] border-[#0c1422] bg-[#08111f] sm:right-[1%] sm:w-[37%] sm:rounded-[1.35rem] sm:border-[6px]">
            <img src={asset(project.images[1])} alt={`${project.name} mobile screen`} className="block h-auto w-full" />
          </div>
          <div className="image-frame absolute bottom-0 right-[12%] z-30 w-[34%] -rotate-[1.5deg] overflow-hidden rounded-[1.05rem] border-[4px] border-[#0c1422] bg-[#08111f] sm:right-[11%] sm:w-[34%] sm:rounded-[1.35rem] sm:border-[6px]">
            <img src={asset(project.images[2])} alt={`${project.name} feature screen`} className="block h-auto w-full" />
          </div>
        </div>
      </div>
    </article>
  )
}
