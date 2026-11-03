import { GitHubIcon, ArrowUpRightIcon } from './Icons'

export default function ProjectCard({ name, status, description, stack, href, github }) {
    const external = href?.startsWith('http')

    return (
        <li className="group relative rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900">
            <ArrowUpRightIcon className="absolute right-5 top-5 size-4 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pr-8">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {/* Stretched link: the ::after covers the whole card */}
                    <a
                        href={href || '#'}
                        {...(external && { target: '_blank', rel: 'noreferrer' })}
                        className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-sky-500"
                    >
                        {name}
                    </a>
                </h3>
                <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {status}
                </span>
            </div>

            <p className="mt-2 leading-relaxed">{description}</p>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm">
                <p>{stack}</p>
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="relative z-10 inline-flex items-center gap-1.5 font-medium text-zinc-900 hover:underline dark:text-zinc-50"
                    >
                        <GitHubIcon />
                        Source
                    </a>
                )}
            </div>
        </li>
    )
}