import { useEffect, useMemo, useState } from 'react'
import { Link, useRouter } from '../router.jsx'
import Logo from './Logo.jsx'
import { MenuIcon } from './Icons.jsx'

const navItems = [
  {
    label: 'Projects',
    to: '/work',
    analytics: 'header-projects',
    matches: (pathname) => pathname.startsWith('/work'),
  },
  {
    label: 'Services',
    to: '/services',
    analytics: 'header-services',
    matches: (pathname) =>
      pathname === '/services' || pathname.startsWith('/strategy'),
  },
  {
    label: 'About',
    to: '/about',
    analytics: 'header-about',
    matches: (pathname) => pathname === '/about',
  },
]

const getCurrentPage = (pathname) => {
  if (pathname === '/') return 'Home'
  if (pathname === '/start') return 'Start Your Project'
  if (pathname === '/contact') return 'Contact'
  if (pathname === '/strategy') return 'Strategy Session'
  if (pathname === '/strategy/confirmed') return 'Payment Confirmation'
  if (pathname === '/strategy/intake') return 'Session Intake'

  return (
    navItems.find((item) => item.matches(pathname))?.label ||
    'Do More ATL'
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useRouter()

  const currentPage = useMemo(
    () => getCurrentPage(pathname),
    [pathname],
  )

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#06101d]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-8 sm:py-3">
        <Logo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-1 text-[13px] font-bold text-white/62 lg:flex">
          {navItems.map((item) => {
            const active = item.matches(pathname)

            return (
              <Link
                key={item.to}
                to={item.to}
                data-analytics={item.analytics}
                aria-current={active ? 'page' : undefined}
                className={`rounded-full px-3 py-2 transition hover:bg-white/[0.06] hover:text-white ${
                  active ? 'bg-white/[0.09] text-white' : ''
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/start"
            data-analytics="header-start-project"
            className="hidden rounded-full bg-white px-4 py-2.5 text-xs font-extrabold text-slate-950 transition hover:-translate-y-0.5 lg:inline-flex"
          >
            Start Your Project
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white lg:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      <div className="border-t border-white/6 bg-[#081423]/88 lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-8">
          <p className="min-w-0 truncate text-[11px] font-semibold text-white/50 sm:text-xs">
            Viewing:
            <span className="ml-1.5 font-extrabold text-sky-100">
              {currentPage}
            </span>
          </p>

          <Link
            to="/start"
            data-analytics="mobile-current-start-project"
            className="shrink-0 text-[11px] font-extrabold text-violet-200 sm:text-xs"
          >
            Start a Project →
          </Link>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/8 bg-[#07111f]/98 px-4 pb-4 pt-3 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1">
            <Link
              to="/"
              data-analytics="mobile-menu-home"
              aria-current={pathname === '/' ? 'page' : undefined}
              className={`rounded-xl px-4 py-3 text-sm font-bold ${
                pathname === '/'
                  ? 'bg-white/[0.09] text-white'
                  : 'text-white/75 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              Home
            </Link>

            {navItems.map((item) => {
              const active = item.matches(pathname)

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  data-analytics={`mobile-${item.analytics}`}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-xl px-4 py-3 text-sm font-bold ${
                    active
                      ? 'bg-white/[0.09] text-white'
                      : 'text-white/75 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            <Link
              to="/contact"
              data-analytics="mobile-menu-contact"
              aria-current={pathname === '/contact' ? 'page' : undefined}
              className={`rounded-xl px-4 py-3 text-sm font-bold ${
                pathname === '/contact'
                  ? 'bg-white/[0.09] text-white'
                  : 'text-white/75 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/start"
              data-analytics="mobile-menu-start-project"
              className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-extrabold text-slate-950"
            >
              Start Your Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
