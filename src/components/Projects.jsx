import Section from './Section'
import ProjectCard from './ProjectCard'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" description="Websites I've worked on, and the part I played in each:">
      <div className="space-y-12">
        {projects.map(({ company, items }) => (
          <div key={company}>
            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{company}</h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {items.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}