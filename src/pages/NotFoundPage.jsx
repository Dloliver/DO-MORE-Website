import { Link } from '../router.jsx'

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-8">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-300">404</p>
      <h1 className="mt-3 text-4xl font-black tracking-[-.05em] sm:text-6xl">This page has not been built yet.</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-white/58">Return to the studio homepage or explore the current products and services.</p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link to="/" className="rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-950">Go Home</Link><Link to="/work" className="rounded-full border border-white/15 px-6 py-3 text-sm font-extrabold">View Work</Link></div>
    </section>
  )
}
