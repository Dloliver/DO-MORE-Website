import Layout from './components/Layout.jsx'
import { useRouter } from './router.jsx'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import WorkPage from './pages/WorkPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import StrategyPage from './pages/StrategyPage.jsx'
import StartPage from './pages/StartPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { projects } from './data.js'

export default function App() {
  const { pathname } = useRouter()
  let page

  if (pathname === '/') page = <HomePage />
  else if (pathname === '/services') page = <ServicesPage />
  else if (pathname === '/work') page = <WorkPage />
  else if (pathname === '/strategy') page = <StrategyPage />
  else if (pathname === '/start') page = <StartPage />
  else if (pathname === '/about') page = <AboutPage />
  else if (pathname === '/contact') page = <ContactPage />
  else if (pathname.startsWith('/work/')) {
    const slug = pathname.split('/').filter(Boolean)[1]
    page = projects.some((project) => project.slug === slug) ? <ProjectPage slug={slug} /> : <NotFoundPage />
  }
  else page = <NotFoundPage />

  return <Layout>{page}</Layout>
}
