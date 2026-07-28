const Arrow = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function ProjectShowcase({ project, reverse = false }) {
  return (
    <article id={project.id} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 sm:p-8 lg:p-10">
      <div className={`pointer-events-none absolute inset-0 opacity-70 ${project.glow}`} />
      <div className={`relative grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
              {project.category}
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/65">
              {project.status}
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-6xl">{project.name}</h2>
          <p className="mt-4 max-w-xl text-xl font-semibold text-white/90 sm:text-2xl">{project.tagline}</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.features.map((feature) => (
              <span key={feature} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-white/72">
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={project.primaryHref} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 ${project.button}`}>
              {project.primaryLabel}<Arrow />
            </a>
            <a href={`#${project.id}-gallery`} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/10">
              View Screens
            </a>
          </div>
        </div>

        <div id={`${project.id}-gallery`} className="relative mx-auto min-h-[470px] w-full max-w-[650px] sm:min-h-[560px]">
          <div className="image-frame absolute left-[1%] top-[12%] w-[72%] overflow-hidden rounded-[1.45rem] border border-white/15 bg-[#08111f] sm:w-[68%] sm:rounded-[1.8rem]">
            <img src={project.images[0]} alt={`${project.name} screen`} className="h-auto w-full" />
          </div>
          <div className="image-frame absolute right-[1%] top-0 w-[41%] rotate-[2.2deg] overflow-hidden rounded-[1.65rem] border-[5px] border-[#0c1422] bg-[#08111f] sm:w-[38%] sm:border-[7px]">
            <img src={project.images[1]} alt={`${project.name} mobile screen`} className="h-auto w-full" />
          </div>
          <div className="image-frame absolute bottom-0 right-[10%] w-[38%] -rotate-[2deg] overflow-hidden rounded-[1.65rem] border-[5px] border-[#0c1422] bg-[#08111f] sm:w-[34%] sm:border-[7px]">
            <img src={project.images[2]} alt={`${project.name} feature screen`} className="h-auto w-full" />
          </div>
        </div>
      </div>
    </article>
  )
}
