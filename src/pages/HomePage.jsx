import { Link } from '../router.jsx'
import { Arrow, Check } from '../components/Icons.jsx'

const paths = [
  {
    number: '01',
    eyebrow: 'Our Products',
    title: 'See what we have built.',
    text: 'Explore Gridded, SwipeTheVote, Perfect 5, and the product thinking behind each experience.',
    to: '/work',
    action: 'Explore Projects',
    analytics: 'home-path-projects',
    accent: 'text-violet-200',
  },
  {
    number: '02',
    eyebrow: 'Work With Us',
    title: 'Turn your idea into a real product.',
    text: 'Start with a paid Product Strategy Session so we can understand the idea, define the right first version, and decide whether we are aligned to build it.',
    to: '/start',
    action: 'Start Your Project',
    analytics: 'home-path-services',
    accent: 'text-sky-200',
  },
  {
    number: '03',
    eyebrow: 'About the Studio',
    title: 'Learn how Do More ATL works.',
    text: 'Meet the independent product studio behind the work, our experience, and our approach to building.',
    to: '/about',
    action: 'Learn About Us',
    analytics: 'home-path-about',
    accent: 'text-emerald-200',
  },
]

const capabilities = [
  'Product Strategy',
  'Product Design',
  'App Development',
  'Launch & Support',
]

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-20">
        <div className="max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-violet-300 sm:text-sm">
            Independent Product Studio
          </p>

          <h1 className="mt-4 text-balance text-[clamp(3rem,8vw,6.4rem)] font-black leading-[.92] tracking-[-0.065em]">
            We turn ideas into{' '}
            <span className="gradient-text">useful digital products.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-balance text-base leading-7 text-white/60 sm:text-xl sm:leading-8">
            Do More ATL helps founders, nonprofits, creators, and businesses
            plan, design, build, and launch web apps, mobile apps, games, and
            digital tools.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/start"
              data-analytics="home-hero-start-project"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5"
            >
              Start Your Project <Arrow />
            </Link>

            <Link
              to="/work"
              data-analytics="home-hero-view-projects"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-extrabold transition hover:bg-white/10"
            >
              View Our Projects
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-t border-white/8 pt-5">
          {capabilities.map((capability) => (
            <span
              key={capability}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-bold text-white/55"
            >
              {capability}
            </span>
          ))}

          <Link
            to="/services"
            data-analytics="home-capabilities-services"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-extrabold text-sky-200 hover:text-white"
          >
            See All Services <Arrow />
          </Link>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.018] py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-white/38">
              Choose Your Path
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-[-.045em] sm:text-5xl">
              What brought you to Do More ATL?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              Each option leads to a focused page, making it easier to find
              what you need and easier for us to understand what visitors care
              about most.
            </p>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {paths.map((path) => (
              <Link
                key={path.number}
                to={path.to}
                data-analytics={path.analytics}
                className="group flex min-h-[17rem] flex-col rounded-[1.45rem] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.055] sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black tracking-[.18em] text-white/28">
                    {path.number}
                  </span>
                  <Arrow className="h-5 w-5 text-white/24 transition group-hover:translate-x-1 group-hover:text-white" />
                </div>

                <p
                  className={`mt-8 text-xs font-bold uppercase tracking-[.18em] ${path.accent}`}
                >
                  {path.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-[-.035em] sm:text-3xl">
                  {path.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/52">
                  {path.text}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-extrabold text-white">
                  {path.action} <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14">
        <div className="grid gap-5 rounded-[1.45rem] border border-white/10 bg-white/[0.025] p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-amber-200">
              One Clear Starting Point
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-[-.035em] sm:text-3xl">
              Every new project begins with a $100 Product Strategy Session.
            </h2>
            <div className="mt-4 grid gap-2 text-sm font-semibold text-white/58 sm:grid-cols-2">
              <div className="flex gap-2">
                <span className="text-amber-200">
                  <Check />
                </span>
                Define the right first version
              </div>
              <div className="flex gap-2">
                <span className="text-amber-200">
                  <Check />
                </span>
                Credit the $100 toward a qualifying project
              </div>
            </div>
          </div>

          <Link
            to="/start"
            data-analytics="home-bottom-start-project"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5"
          >
            Start With Strategy <Arrow />
          </Link>
        </div>
      </section>
    </>
  )
}
