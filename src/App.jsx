import ContactForm from './components/ContactForm.jsx'
import ProjectShowcase from './components/ProjectShowcase.jsx'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const projects = [
  {
    id: 'gridded',
    name: 'Gridded',
    category: 'Flagship Game',
    status: 'Public Beta',
    tagline: 'Find the words. Travel the world. Race together.',
    description: 'A premium word-grid experience built around daily destinations, relaxing marathon progression, story-driven adventures, and competitive multiplayer.',
    features: ['Daily Challenges', 'Marathon Progression', 'Quest Adventures', 'Multiplayer', 'Mobile Apps'],
    primaryLabel: 'Play Gridded',
    primaryHref: 'https://playgridded.com',
    button: 'bg-violet-400 text-slate-950 hover:bg-violet-300',
    glow: 'bg-[radial-gradient(circle_at_30%_25%,rgba(139,92,246,.22),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,.16),transparent_34%)]',
    images: ['/images/gridded/home.png', '/images/gridded/puzzle.png', '/images/gridded/marathon.png'],
  },
  {
    id: 'swipethevote',
    name: 'SwipeTheVote',
    category: 'Civic Technology',
    status: 'Live Product',
    tagline: 'Explore issues. Understand your civic landscape.',
    description: 'An independent civic education platform that helps people explore government actions through interactive questions, verified source links, saved civic history, and alignment tools.',
    features: ['ZIP-Based Discovery', 'Official Sources', 'Local to National', 'Civic History', 'Match Results'],
    primaryLabel: 'Explore SwipeTheVote',
    primaryHref: '#',
    button: 'bg-rose-400 text-slate-950 hover:bg-rose-300',
    glow: 'bg-[radial-gradient(circle_at_25%_20%,rgba(244,63,94,.18),transparent_38%),radial-gradient(circle_at_85%_75%,rgba(59,130,246,.14),transparent_36%)]',
    images: ['/images/swipethevote/home.png', '/images/swipethevote/question.png', '/images/swipethevote/alignment.png'],
  },
  {
    id: 'perfect5',
    name: 'Perfect 5',
    category: 'Sports Strategy',
    status: 'Playable Prototype',
    tagline: 'Build five. Win possessions. Reach 21.',
    description: 'A fast basketball card duel where players build a five-card roster under a daily budget, then compete through possession-based matchups against the CPU or other players.',
    features: ['Daily Player Pools', 'Roster Budgets', 'Player Attributes', 'CPU Matches', 'Versus Foundation'],
    primaryLabel: 'View Prototype',
    primaryHref: '#',
    button: 'bg-amber-300 text-slate-950 hover:bg-amber-200',
    glow: 'bg-[radial-gradient(circle_at_25%_20%,rgba(250,204,21,.15),transparent_36%),radial-gradient(circle_at_85%_75%,rgba(96,165,250,.16),transparent_38%)]',
    images: ['/images/perfect5/home.png', '/images/perfect5/build.png', '/images/perfect5/versus.png'],
  },
]

const Logo = ({ footer = false }) => (
  <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
    <div className={`shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black ${footer ? 'h-9 w-9' : 'h-9 w-9 sm:h-10 sm:w-10'} shadow-lg shadow-black/25`}>
      <img src={asset('/images/brand/do-more-serious.jpg')} alt="Do More logo" className="h-full w-full object-cover" />
    </div>
    <div className="min-w-0">
      <div className="whitespace-nowrap text-xs font-black tracking-tight sm:text-base">DO MORE ATL</div>
      <div className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[.18em] text-white/42 sm:text-[9px] sm:tracking-[.2em]">Independent Product Studio</div>
    </div>
  </div>
)

export default function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#06101d] text-white selection:bg-violet-400 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 soft-grid opacity-40" />
      <div className="pointer-events-none fixed left-[-28rem] top-[-24rem] h-[50rem] w-[50rem] rounded-full bg-violet-600/10 blur-[140px] sm:left-[-15%] sm:top-[-20%] sm:h-[55rem] sm:w-[55rem]" />
      <div className="pointer-events-none fixed bottom-[-32rem] right-[-32rem] h-[56rem] w-[56rem] rounded-full bg-sky-500/10 blur-[160px] sm:bottom-[-30%] sm:right-[-20%] sm:h-[60rem] sm:w-[60rem]" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#06101d]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-8 sm:py-3">
          <a href="#top" aria-label="Do More ATL home" className="min-w-0"><Logo /></a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-white/65 md:flex">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#work" className="shrink-0 rounded-full bg-white px-3.5 py-2 text-[11px] font-extrabold text-slate-950 transition hover:-translate-y-0.5 sm:px-4 sm:text-xs">
            <span className="hidden sm:inline">Explore </span>Apps
          </a>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-4 pb-10 pt-9 sm:px-8 sm:pb-14 sm:pt-16 lg:pb-18">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-4 inline-flex max-w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-center text-[9px] font-bold uppercase leading-4 tracking-[0.16em] text-white/60 sm:px-4 sm:text-xs sm:tracking-[0.22em]">
            Games · Civic Technology · Interactive Products
          </div>
          <h1 className="mx-auto max-w-5xl text-balance text-[clamp(2.35rem,11vw,4rem)] font-black leading-[.97] tracking-[-0.055em] sm:text-6xl lg:text-[5.2rem] lg:leading-[.96]">
            We turn ideas into experiences people can <span className="bg-gradient-to-r from-violet-300 via-sky-300 to-amber-200 bg-clip-text text-transparent">use, play, and share.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-balance text-base leading-7 text-white/60 sm:mt-5 sm:text-xl sm:leading-8">
            Do More ATL creates original apps, games, and digital products—and partners with others to bring strong ideas from concept through launch.
          </p>
          <div className="mx-auto mt-6 grid max-w-sm gap-2.5 sm:mt-7 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-3">
            <a href="#work" className="w-full rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 sm:w-auto sm:py-3.5">View Our Work</a>
            <a href="#contact" className="w-full rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-extrabold transition hover:bg-white/10 sm:w-auto sm:py-3.5">Start a Conversation</a>
          </div>
        </div>

        <div className="glass mx-auto mt-8 grid max-w-5xl grid-cols-3 gap-1.5 rounded-[1.25rem] p-1.5 sm:mt-10 sm:gap-3 sm:rounded-[1.5rem] sm:p-2">
          {projects.map((project, index) => (
            <a key={project.id} href={`#${project.id}`} className="group min-w-0 rounded-[.95rem] px-2 py-3 text-center transition hover:bg-white/[0.06] sm:rounded-[1.1rem] sm:p-4 sm:text-left">
              <div className="text-[9px] font-bold uppercase tracking-[.16em] text-white/40 sm:text-xs sm:tracking-[.18em]">0{index + 1}</div>
              <div className="mt-1 truncate text-xs font-black sm:mt-2 sm:text-xl">{project.name}</div>
              <div className="mt-1 hidden text-sm text-white/50 sm:block">{project.category}</div>
            </a>
          ))}
        </div>
      </section>

      <section id="work" className="relative mx-auto max-w-7xl space-y-4 px-4 pb-14 sm:space-y-6 sm:px-8 sm:pb-18">
        <div className="mb-6 max-w-2xl sm:mb-8">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-violet-300 sm:text-sm sm:tracking-[.22em]">Selected Work</p>
          <h2 className="mt-2 text-3xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">Products with personality.</h2>
          <p className="mt-3 text-[15px] leading-6 text-white/55 sm:text-base sm:leading-7">Each project is designed around a distinct audience, but they share the same focus: clarity, polish, and an experience people want to return to.</p>
        </div>
        {projects.map((project, index) => <ProjectShowcase key={project.id} project={project} reverse={index % 2 === 1} />)}
      </section>

      <section id="about" className="relative border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div className="min-w-0">
            <div className="mb-4 flex min-w-0 items-center gap-3 sm:mb-5 sm:gap-4">
              <img src={asset('/images/brand/do-more-fun.png')} alt="Playful Do More logo" className="h-14 w-16 shrink-0 rounded-xl bg-white object-contain p-1 shadow-xl sm:h-16 sm:w-20 sm:rounded-2xl" />
              <p className="min-w-0 text-[11px] font-bold uppercase leading-5 tracking-[.14em] text-sky-300 sm:text-sm sm:tracking-[.22em]">About Do More ATL</p>
            </div>
            <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">Built from ideas worth exploring.</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-white/60 sm:text-base">Do More ATL is an independent product studio creating original games, apps, and digital tools while partnering with founders, organizations, and teams to bring new ideas to life. We take products from early strategy through interface design, development, testing, deployment, and app-store publishing.</p>
          </div>
          <div className="grid min-w-0 grid-cols-2 gap-2.5 sm:gap-3">
            {['Product Strategy', 'Interface Design', 'App Development', 'Launch & Publishing'].map((item) => (
              <div key={item} className="glass min-w-0 rounded-xl p-3 text-center text-xs font-extrabold leading-5 sm:rounded-2xl sm:p-4 sm:text-left sm:text-base">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-20">
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-violet-500/20 via-sky-500/10 to-amber-300/10 p-5 sm:rounded-[2rem] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start lg:gap-10">
            <div className="min-w-0 lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-white/55 sm:text-sm sm:tracking-[.22em]">Work With Us</p>
              <h2 className="mt-3 max-w-xl text-balance text-3xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">Have an idea worth building?</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-6 text-white/60 sm:text-base sm:leading-7">Whether you need help shaping an early concept, designing an interface, building an app, or preparing a product for launch, let’s start a conversation.</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/15 p-4">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-white/40">Direct email</p>
                <a href="mailto:info@domoreatl.com" className="mt-2 inline-block break-all text-sm font-extrabold text-white hover:text-sky-200 sm:text-base">info@domoreatl.com</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Logo footer />
          <p className="text-xs leading-5 sm:text-sm">© 2026 Do More Business LLC. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
