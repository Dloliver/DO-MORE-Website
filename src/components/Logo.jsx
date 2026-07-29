import { Link } from '../router.jsx'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export default function Logo({ footer = false, onClick }) {
  return (
    <Link to="/" onClick={onClick} aria-label="Do More ATL home" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <span className={`shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black ${footer ? 'h-9 w-9' : 'h-9 w-9 sm:h-10 sm:w-10'} shadow-lg shadow-black/25`}>
        <img src={asset('/images/brand/do-more-serious.jpg')} alt="" className="h-full w-full object-cover" />
      </span>
      <span className="min-w-0">
        <span className="block whitespace-nowrap text-xs font-black tracking-tight sm:text-base">DO MORE ATL</span>
        <span className="block whitespace-nowrap text-[7px] font-bold uppercase tracking-[.13em] text-white/45 min-[390px]:text-[8px] sm:text-[9px] sm:tracking-[.18em]">Independent Product Studio</span>
      </span>
    </Link>
  )
}
