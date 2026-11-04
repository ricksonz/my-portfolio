import {
  SiHtml5, SiCss, SiSass, SiJavascript, SiTypescript, SiPhp, SiMysql,
  SiReact, SiVuedotjs, SiNodedotjs, SiLaravel, SiCakephp, SiWordpress,
  SiShopify, SiJquery, SiTailwindcss, SiBootstrap,
  SiGit, SiGithub, SiJira, SiFigma, SiLighthouse, SiFilezilla, SiCursor,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import Section from './Section'
import { skills, realWorldSkills } from '../data'

// Keys must match the skill names in data.js. Skills without an icon show text only.
const icons = {
  HTML: SiHtml5, CSS: SiCss, Sass: SiSass, JavaScript: SiJavascript, TypeScript: SiTypescript,
  PHP: SiPhp, MySQL: SiMysql, React: SiReact, Vue: SiVuedotjs, 'Node.js': SiNodedotjs,
  Laravel: SiLaravel, CakePHP: SiCakephp, WordPress: SiWordpress, Shopify: SiShopify,
  jQuery: SiJquery, 'Tailwind CSS': SiTailwindcss, Bootstrap: SiBootstrap,
  Git: SiGit, GitHub: SiGithub, Jira: SiJira, Figma: SiFigma, Lighthouse: SiLighthouse,
  FileZilla: SiFilezilla, Cursor: SiCursor, 'VS Code': VscVscode,
}

const chip =
  'group inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-sm transition duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-sm'
const base = 'border-zinc-200 hover:border-sky-400 dark:border-zinc-800 dark:hover:border-sky-500'
const gold =
  'border-amber-400 bg-amber-50/60 hover:border-amber-500 hover:shadow-amber-200/60 dark:border-amber-500/80 dark:bg-amber-400/5 dark:hover:border-amber-400 dark:hover:shadow-none'

export default function Skills() {
  const realWorld = new Set(realWorldSkills)

  return (
    <Section id="skills" title="Skills" description="The tools I use day to day:">
      <p className="mb-6 flex items-center gap-2 text-sm">
        <span className="size-3 rounded-sm border border-amber-400 bg-amber-50 dark:border-amber-500/80 dark:bg-amber-400/5" />
        Gold border: used in real-world production work
      </p>

      <dl className="space-y-6">
        {skills.map(({ group, items }) => (
          <div key={group}>
            <dt className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{group}</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {items.map((item) => {
                const Icon = icons[item]
                const proven = realWorld.has(item)
                return (
                  <span
                    key={item}
                    title={proven ? 'Real-world experience' : undefined}
                    className={`${chip} ${proven ? gold : base}`}
                  >
                    {Icon && (
                      <Icon className="size-3.5 text-sky-600 transition-transform duration-200 motion-safe:group-hover:scale-125 dark:text-sky-400" />
                    )}
                    {item}
                  </span>
                )
              })}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
