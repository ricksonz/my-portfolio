import Section from './Section'
import ProjectCard from './ProjectCard'
import { projects } from '../data'

export default function Projects() {
    return (
        <Section id="projects" title="Projects" description="These are my side projects, both past and ongoing:">
            <ul className="space-y-4">
                {projects.map((project) => (
                    <ProjectCard key={project.name} {...project} />
                ))}
            </ul>
        </Section>
    )
}