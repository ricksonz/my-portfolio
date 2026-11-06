import {
  SiHtml5, SiCss, SiSass, SiJavascript, SiTypescript, SiPhp, SiMysql,
  SiReact, SiVuedotjs, SiNodedotjs, SiLaravel, SiCakephp, SiWordpress,
  SiShopify, SiJquery, SiTailwindcss, SiBootstrap,
  SiGit, SiGithub, SiJira, SiFigma, SiLighthouse, SiFilezilla, SiCursor,
  SiGithubcopilot, SiClaude, SiNextdotjs, SiWoocommerce,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import Section from './Section'
import { skills } from '../data'

// Keys must match the skill names in data.js. Skills without an icon show text only.
const icons = {
  HTML: SiHtml5, CSS: SiCss, JavaScript: SiJavascript, PHP: SiPhp, MySQL: SiMysql,
  CakePHP: SiCakephp, 'WordPress (Divi, Elementor)': SiWordpress, jQuery: SiJquery,
  'Tailwind CSS': SiTailwindcss, Bootstrap: SiBootstrap,
  Git: SiGit, GitHub: SiGithub, Jira: SiJira, Figma: SiFigma, Lighthouse: SiLighthouse,
  FileZilla: SiFilezilla, 'VS Code': VscVscode, Cursor: SiCursor,
  'GitHub Copilot': SiGithubcopilot, Claude: SiClaude,
  'Sass/SCSS': SiSass, TypeScript: SiTypescript, React: SiReact, Vue: SiVuedotjs,
  'Node.js': SiNodedotjs, Laravel: SiLaravel, WooCommerce: SiWoocommerce,
  Shopify: SiShopify, 'Next.js': SiNextdotjs,
}

const chip =
  'group inline-flex items-center gap-1.5 rounded-md border border-zinc-200 px-2.5 py-1 text-sm transition duration-200 hover:border-sky-400 hover:shadow-sm motion-safe:hover:-translate-y-0.5 dark:border-zinc-800 dark:hover:border-sky-500'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" description="The tools I use day to day:">
      <dl className="space-y-6">
        {skills.map(({ group, items }) => (
          <div key={group}>
            <dt className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{group}</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {items.map((item) => {
                const Icon = icons[item]
                return (
                  <span key={item} className={chip}>
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
