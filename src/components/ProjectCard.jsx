import { GitHubIcon, ArrowUpRightIcon } from './Icons'

const display = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

function Preview({ name, href, image }) {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center gap-1.5 border-b border-zinc-200 px-3 py-2 dark:border-zinc-800">
        <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="ml-2 truncate rounded bg-white px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
          {display(href)}
        </span>
      </div>
      {image ? (
        <img
          src={image}
          alt={`${name} homepage`}
          loading="lazy"
          className="aspect-[16/8] w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
        />
      ) : (
        <div className="grid aspect-[16/8] place-items-center bg-linear-to-br from-sky-50 via-white to-zinc-100 dark:from-sky-950/40 dark:via-zinc-900 dark:to-zinc-900">
          <span className="text-2xl font-semibold tracking-tight text-sky-700/70 dark:text-sky-300/70">{name}</span>
        </div>
      )}
    </div>
  )
}

export default function ProjectCard({ name, status, description, href, github, image, featured }) {
  return (
    <li
      className={`group relative flex flex-col rounded-xl border border-zinc-200 p-4 transition duration-200 hover:border-sky-400 hover:shadow-md motion-safe:hover:-translate-y-0.5 dark:border-zinc-800 dark:hover:border-sky-500 ${
        featured ? 'sm:col-span-2' : ''
      }`}
    >
      <Preview name={name} href={href} image={image} />

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 pr-6">
        <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {/* Stretched link: the ::after covers the whole card */}
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-sky-500"
          >
            {name}
          </a>
        </h4>
        {status && (
          <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
            {status}
          </span>
        )}
      </div>

      <ArrowUpRightIcon className="absolute bottom-4 right-4 size-4 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-600" />

      <p className="mt-2 leading-relaxed">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 pr-6">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
          >
            <GitHubIcon />
            Source
          </a>
        )}
      </div>
    </li>
  )
}