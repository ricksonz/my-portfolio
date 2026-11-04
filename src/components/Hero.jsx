import { profile } from '../data'
import { MailIcon, ArrowDownIcon, DownloadIcon } from './Icons'
import Highlight from './Highlight'

const button =
  'inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0'

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
      <p className="mt-4 max-w-prose leading-relaxed">
        <Highlight text={profile.intro} phrase="5+ years" />
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
      {/* Primary: filled blue */}
      <a
        href={`mailto:${profile.email}`}
        className={`${button} bg-sky-700 text-white hover:bg-sky-800 hover:shadow-md dark:bg-sky-400 dark:text-zinc-950 dark:hover:bg-sky-300`}
      >
        <MailIcon />
        Send email
      </a>

      {/* Secondary: blue outline */}
      <a
        href="#experience"
        className={`${button} border border-sky-600 text-sky-700 hover:bg-sky-50 dark:border-sky-400 dark:text-sky-300 dark:hover:bg-sky-400/10`}
      >
        <ArrowDownIcon />
        View experience
      </a>

      {/* Tertiary: neutral outline */}
      <a
        href="/resume.pdf"
        download
        className={`${button} border border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800`}
      >
        <DownloadIcon />
        Resume
      </a>
      </div>
    </section>
  )
}
