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
    images: [asset('images/gridded/home.png'), asset('images/gridded/puzzle.png'), asset('images/gridded/marathon.png')],
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
    images: [asset('images/swipethevote/home.png'), asset('images/swipethevote/question.png'), asset('images/swipethevote/alignment.png')],
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
    images: [asset('images/perfect5/home.png'), asset('images/perfect5/build.png'), asset('images/perfect5/versus.png')],
  },
]

const Logo = ({ footer = false }) => (
  <div className="flex items-center gap-3">
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-black ${footer ? 'h-9 w-9' : 'h-10 w-10'} shadow-lg shadow-black/25`}>
      <img src={asset('images/brand/do-more-serious.jpg')} alt="Do More logo" className="h-full w-full object-cover" />
    </div>
    <div>
      <div className="text-sm font-black tracking-tight sm:text-base">DO MORE ATL</div>
      <div className="text-[9px] font-bold uppercase tracking-[.2em] text-white/42">Product Studio</div>
    </div>
  </div>
)

export default function App() {
  return (
    <main className="min-h-screen bg-[#06101d] text-white selection:bg-violet-400 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 soft-grid opacity-40" />
      <div className="pointer-events-none fixed left-[-15%] top-[-20%] h-[55rem] w-[55rem] rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none fixed bottom-[-30%] right-[-20%] h-[60rem] w-[60rem] rounded-full bg-sky-500/10 blur-[160px]" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#06101d]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#top" aria-label="Do More ATL home"><Logo /></a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-white/65 md:flex">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#work" className="rounded-full bg-white px-4 py-2 text-xs font-extrabold text-slate-950 transition hover:-translate-y-0.5">Explore Apps</a>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 sm:pt-16 lg:pb-18">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/60">
            Games · Civic Technology · Interactive Products
          </div>
          <h1 className="text-balance text-4xl font-black tracking-[-0.06em] sm:text-6xl lg:text-[5.2rem] lg:leading-[.96]">
            We turn ideas into experiences people can <span className="bg-gradient-to-r from-violet-300 via-sky-300 to-amber-200 bg-clip-text text-transparent">use, play, and share.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-balance text-lg leading-8 text-white/60 sm:text-xl">
            Do More ATL creates polished mobile games, civic tools, and digital products—from the first concept through launch.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#work" className="rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5">View Our Work</a>
            <a href="#contact" className="rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-extrabold transition hover:bg-white/10">Start a Conversation</a>
          </div>
        </div>

        <div className="glass mx-auto mt-10 grid max-w-5xl gap-3 rounded-[1.5rem] p-2 sm:grid-cols-3">
          {projects.map((project, index) => (
            <a key={project.id} href={`#${project.id}`} className="group rounded-[1.1rem] p-4 transition hover:bg-white/[0.06]">
              <div className="text-xs font-bold uppercase tracking-[.18em] text-white/40">0{index + 1}</div>
              <div className="mt-2 text-xl font-black">{project.name}</div>
              <div className="mt-1 text-sm text-white/50">{project.category}</div>
            </a>
          ))}
        </div>
      </section>

      <section id="work" className="relative mx-auto max-w-7xl space-y-6 px-5 pb-18 sm:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-violet-300">Selected Work</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.045em] sm:text-5xl">Products with personality.</h2>
          <p className="mt-3 text-base leading-7 text-white/55">Each project is designed around a distinct audience, but they share the same focus: clarity, polish, and an experience people want to return to.</p>
        </div>
        {projects.map((project, index) => <ProjectShowcase key={project.id} project={project} reverse={index % 2 === 1} />)}
      </section>

      <section id="about" className="relative border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <img src={asset('images/brand/do-more-fun.png')} alt="Playful Do More logo" className="h-16 w-20 rounded-2xl bg-white object-contain p-1 shadow-xl" />
              <p className="text-sm font-bold uppercase tracking-[.22em] text-sky-300">About Do More ATL</p>
            </div>
            <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-[-0.045em] sm:text-5xl">Built from ideas worth exploring.</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/60">Do More ATL is an independent product studio creating games, apps, and digital tools. We take products from early concept through interface design, development, testing, deployment, and app-store publishing.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['Product Strategy', 'Interface Design', 'Web Development', 'Mobile Publishing'].map((item) => (
              <div key={item} className="glass rounded-2xl p-4 text-sm font-extrabold sm:text-base">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/20 via-sky-500/10 to-amber-300/10 p-7 text-center sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-white/55">Work With Us</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-balance text-3xl font-black tracking-[-0.05em] sm:text-5xl">Have an idea worth building?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/60">Reach out about product collaborations, testing, development work, or any of the apps featured here.</p>
          <a href="mailto:info@domoreatl.com" className="mt-6 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5">info@domoreatl.com</a>
        </div>
      </section>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Logo footer />
          <p>© 2026 Do More Business LLC. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
