import { Link } from '../router.jsx'
import { Arrow } from './Icons.jsx'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export function LayeredGallery({ project, compact = false }) {
  return (
    <div className={`layered-gallery relative mx-auto w-full max-w-[650px] ${compact ? 'min-h-[250px] sm:min-h-[340px]' : 'min-h-[275px] sm:min-h-[400px] lg:min-h-[420px]'}`}>
      <div className="image-frame absolute left-0 top-[13%] z-10 w-[73%] overflow-hidden rounded-[.9rem] border border-white/15 bg-[#08111f] sm:left-[2%] sm:top-[11%] sm:w-[69%] sm:rounded-[1.45rem]">
        <img src={asset(project.images[0])} alt={`${project.name} desktop screen`} className="block h-auto w-full" />
      </div>
      <div className="image-frame absolute right-0 top-0 z-20 w-[37%] rotate-[1.6deg] overflow-hidden rounded-[1.05rem] border-[4px] border-[#0c1422] bg-[#08111f] sm:right-[1%] sm:rounded-[1.35rem] sm:border-[6px]">
        <img src={asset(project.images[1])} alt={`${project.name} mobile screen`} className="block h-auto w-full" />
      </div>
      <div className="image-frame absolute bottom-0 right-[12%] z-30 w-[34%] -rotate-[1.5deg] overflow-hidden rounded-[1.05rem] border-[4px] border-[#0c1422] bg-[#08111f] sm:right-[11%] sm:rounded-[1.35rem] sm:border-[6px]">
        <img src={asset(project.images[2])} alt={`${project.name} feature screen`} className="block h-auto w-full" />
      </div>
    </div>
  )
}

export default function ProjectShowcase({ project, reverse = false, compact = false }) {
  const externalPrimary = /^https?:\/\//.test(project.primaryHref)
  return (
    <article className={`relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.035] ${compact ? 'p-4 sm:p-6' : 'p-4 sm:p-7 lg:p-8'}`}>
      <div className={`pointer-events-none absolute inset-0 opacity-70 ${project.glow}`} />
      <div className={`relative grid min-w-0 items-center gap-6 lg:grid-cols-[.88fr_1.12fr] lg:gap-8 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.15em] text-white/75 sm:px-3 sm:text-[10px]">{project.category}</span>
            <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold text-white/65 sm:px-3 sm:text-[11px]">{project.status}</span>
          </div>
          <h2 className={`${compact ? 'text-3xl sm:text-4xl' : 'text-3xl sm:text-5xl'} break-words font-black leading-none tracking-[-0.05em]`}>{project.name}</h2>
          <p className="mt-3 max-w-xl text-base font-semibold leading-6 text-white/90 sm:text-xl">{project.tagline}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/62 sm:text-base">{project.description}</p>
          {project.note && <p className="mt-3 text-xs font-semibold text-white/42">{project.note}</p>}

          <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            {project.features.slice(0, 4).map((feature) => (
              <span key={feature} className="rounded-xl border border-white/10 bg-white/[0.06] px-2.5 py-2 text-center text-[11px] font-semibold leading-4 text-white/70 sm:rounded-full sm:px-3 sm:py-1.5 sm:text-xs">{feature}</span>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            {externalPrimary ? (
              <a href={project.primaryHref} target="_blank" rel="noreferrer" data-analytics={`project-external-${project.id}`} data-project={project.id} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold transition hover:-translate-y-0.5 ${project.button}`}>{project.primaryLabel}<Arrow /></a>
            ) : (
              <Link to={project.primaryHref} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold transition hover:-translate-y-0.5 ${project.button}`}>{project.primaryLabel}<Arrow /></Link>
            )}
            {project.primaryHref !== `/work/${project.slug}` && (
              <Link to={`/work/${project.slug}`} data-analytics={`project-case-study-${project.id}`} data-project={project.id} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-extrabold transition hover:bg-white/10">View Case Study</Link>
            )}
          </div>
        </div>
        <LayeredGallery project={project} compact={compact} />
      </div>
    </article>
  )
}
