import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { Link } from '../router.jsx'

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s start the right conversation." text="Use this page for partnerships, support, feedback, media, speaking, or general questions. Project inquiries have a guided form of their own." />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
        <aside className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 sm:p-6 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300">General Contact</p>
          <h2 className="mt-3 text-2xl font-black">info@domoreatl.com</h2>
          <p className="mt-3 text-sm leading-6 text-white/55">For a new app, platform, or digital product, the project intake provides the fastest path to the right next step.</p>
          <Link to="/start" className="mt-5 inline-flex rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-sm font-extrabold hover:bg-white/10">Start Your Project</Link>
        </aside>
        <ContactForm />
      </section>
    </>
  )
}
