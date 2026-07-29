import { projects } from '../data.js'
import PageHero from '../components/PageHero.jsx'
import ProjectShowcase from '../components/ProjectShowcase.jsx'

export default function WorkPage() {
  return (
    <>
      <PageHero eyebrow="Our Work" title="Products are stronger when the thinking behind them is visible." text="Explore original products across mobile games, civic technology, and sports strategy—each built from concept through working software." primary={{ label: 'Start Your Project', to: '/start' }} secondary={{ label: 'Explore Services', to: '/services' }} />
      <section className="mx-auto max-w-7xl space-y-6 px-4 pb-16 sm:px-8 sm:pb-20">
        {projects.map((project, index) => <ProjectShowcase key={project.id} project={project} reverse={index % 2 === 1} />)}
      </section>
    </>
  )
}
