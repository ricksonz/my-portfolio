import { profile } from '../data'
import { MailIcon, ArrowDownIcon } from './Icons'

const button =
  'inline-flex gap-1 h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors'

export default function Hero() {
  return (
    <section id="top" className="hero-in mt-12">
      <div className="grid size-16 place-items-center rounded-full bg-zinc-900 text-lg font-semibold text-white dark:bg-zinc-50 dark:text-zinc-900">
        <img src={profile.image} alt={profile.name} className="size-16 rounded-full" />
      </div>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        Hey, I'm {profile.firstName}!
      </h1>
      <p className="mt-3 text-lg text-zinc-900 dark:text-zinc-200">{profile.role}</p>
      <p className="mt-4 max-w-prose leading-relaxed">{profile.intro}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className={`${button} bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300`}
        >
          <MailIcon />
          Send email
        </a>
        <a
          href="#experience"
          className={`${button} border border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800`}
        >
          <ArrowDownIcon />
          View experience
        </a>
      </div>
    </section>
  )
}
