import Section from './Section'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { profile } from '../data'

const icons = { GitHub: GitHubIcon, LinkedIn: LinkedInIcon }

const link =
  'text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors group-hover:decoration-zinc-900 dark:text-zinc-50 dark:decoration-zinc-600 dark:group-hover:decoration-zinc-50'

export default function Contact() {
  const links = profile.links.filter((l) => l.href)

  return (
    <>
      {links.length > 0 && (
        <Section id="links" title="Find me on" description="You can find me on the following platforms:">
          <ul className="space-y-3">
            {links.map(({ label, href }) => {
              const Icon = icons[label]
              return (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2.5">
                    {Icon && <Icon className="size-5 text-zinc-500 dark:text-zinc-400" />}
                    <span className={link}>{label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </Section>
      )}

      <Section id="contact" title="Get in touch">
        <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2.5">
          <MailIcon className="size-5 text-zinc-500 dark:text-zinc-400" />
          <span className={link}>{profile.email}</span>
        </a>
      </Section>
    </>
  )
}