import { Check } from './Icons.jsx'

export default function ServiceCard({ service, detailed = false }) {
  return (
    <article className="glass rounded-[1.35rem] p-5 sm:p-6">
      <div className="text-xs font-black uppercase tracking-[.18em] text-white/30">{service.number}</div>
      <h3 className="mt-3 text-2xl font-black tracking-[-.035em]">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/56 sm:text-base">{service.summary}</p>
      <ul className={`mt-5 grid gap-2.5 ${detailed ? 'sm:grid-cols-2' : ''}`}>
        {service.items.map((item) => (
          <li key={item} className="flex gap-2 text-sm font-semibold text-white/72"><span className="text-sky-300"><Check /></span>{item}</li>
        ))}
      </ul>
    </article>
  )
}
