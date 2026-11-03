import Section from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" description="The tools I use day to day:">
      <dl className="space-y-6">
        {skills.map(({ group, items }) => (
          <div key={group}>
            <dt className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{group}</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-zinc-200 px-2.5 py-1 text-sm dark:border-zinc-800"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
