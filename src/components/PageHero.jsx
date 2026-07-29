import { Link } from '../router.jsx'
import { Arrow } from './Icons.jsx'

export default function PageHero({ eyebrow, title, text, primary, secondary, children }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-20">
      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-300 sm:text-sm">{eyebrow}</p>
        <h1 className="mt-3 text-balance text-[clamp(2.5rem,8vw,5.4rem)] font-black leading-[.96] tracking-[-0.06em]">{title}</h1>
        <p className="mt-5 max-w-3xl text-balance text-base leading-7 text-white/60 sm:text-xl sm:leading-8">{text}</p>
        {(primary || secondary) && (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {primary && <Link to={primary.to} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5">{primary.label}<Arrow /></Link>}
            {secondary && <Link to={secondary.to} className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-extrabold transition hover:bg-white/10">{secondary.label}</Link>}
          </div>
        )}
      </div>
      {children}
    </section>
  )
}
