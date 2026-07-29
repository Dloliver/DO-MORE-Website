import { Link } from '../router.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Logo footer />
          <p className="mt-4 max-w-md text-sm leading-6 text-white/45">Original products and client partnerships—from early strategy through design, development, launch, and growth.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-semibold text-white/55 sm:grid-cols-3">
          <Link to="/work" className="hover:text-white">Work</Link>
          <Link to="/services" className="hover:text-white">Services</Link>
          <Link to="/strategy" className="hover:text-white">Strategy</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
          <Link to="/start" className="hover:text-white">Start a Project</Link>
        </div>
      </div>
      <div className="border-t border-white/6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/35 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Do More Business LLC. All rights reserved.</p>
          <a href="mailto:info@domoreatl.com" className="hover:text-white">info@domoreatl.com</a>
        </div>
      </div>
    </footer>
  )
}
