import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#06101d] text-white selection:bg-violet-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 soft-grid opacity-35" />
      <div className="pointer-events-none fixed left-[-28rem] top-[-24rem] h-[50rem] w-[50rem] rounded-full bg-violet-600/10 blur-[140px] sm:left-[-15%] sm:top-[-20%] sm:h-[55rem] sm:w-[55rem]" />
      <div className="pointer-events-none fixed bottom-[-32rem] right-[-32rem] h-[56rem] w-[56rem] rounded-full bg-sky-500/10 blur-[160px] sm:bottom-[-30%] sm:right-[-20%] sm:h-[60rem] sm:w-[60rem]" />
      <Header />
      <div className="relative">{children}</div>
      <Footer />
    </main>
  )
}
