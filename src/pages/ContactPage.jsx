import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { Link } from '../router.jsx'
import { Arrow } from '../components/Icons.jsx'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s start the right conversation."
        text="Use this page for partnerships, support, feedback, media, speaking, existing-client questions, or other general business communication."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
        <aside className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 sm:p-6 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300">
            General Contact
          </p>
          <h2 className="mt-3 text-2xl font-black">info@domoreatl.com</h2>

          <p className="mt-3 text-sm leading-6 text-white/55">
            This contact option is not a free project consultation. New app
            ideas, product planning, development requests, budgets, and feature
            discussions begin through the paid Product Strategy Session.
          </p>

          <div className="mt-5 rounded-xl border border-violet-300/15 bg-violet-300/[0.07] p-4">
            <p className="text-sm font-extrabold text-white/82">
              Ready to discuss a new product?
            </p>
            <p className="mt-1 text-sm leading-6 text-white/50">
              Start with the $100 session so we can prepare, understand the
              idea, and decide whether the project is a strong fit.
            </p>
          </div>

          <Link
            to="/start"
            data-analytics="contact-start-project"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-slate-950"
          >
            Start Your Project <Arrow />
          </Link>
        </aside>

        <ContactForm />
      </section>
    </>
  )
}
