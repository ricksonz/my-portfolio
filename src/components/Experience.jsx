import { useState } from 'react';
import Section from './Section';
import { experience, education } from '../data';
import { ArrowUpRightIcon } from './Icons';
import Highlight from './Highlight';

function Badge({ children, current }) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs font-medium ${current
        ? 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300'
        : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
        }`}
    >
      {children}
    </span>
  )
}

function AccordionItem({ job, id, open, onToggle }) {
  return (
    <li className="border-b border-zinc-200 dark:border-zinc-800">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="group -mx-3 flex w-[calc(100%+1.5rem)] cursor-pointer items-start justify-between gap-4 rounded-lg px-3 py-5 text-left transition-colors duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-900"
        >
          <span>
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-lg font-semibold text-zinc-900 transition-colors group-hover:text-sky-700 dark:text-zinc-50 dark:group-hover:text-sky-300">
                {job.company}
              </span>
              <Badge current={job.status === 'Recent'}>{job.status}</Badge>
            </span>
            <span className="mt-1 block text-sm font-normal text-zinc-600 dark:text-zinc-400">
              {job.period}
            </span>
          </span>
          <svg
            viewBox="0 0 24 24"
            className={`mt-1.5 size-5 shrink-0 text-zinc-500 transition-transform motion-reduce:transition-none ${open ? 'rotate-180' : ''
              }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h3>
      <p className="-mt-2 pb-5 leading-relaxed">
        <Highlight text={job.summary} phrase={job.highlight} />
      </p>
      {/* grid-rows trick animates height from 0 to auto */}
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6">
            <div className="space-y-6">
              {job.roles.map((role) => (
                <div key={role.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">{role.title}</h4>
                    {job.roles.length > 1 && <span className="text-sm">{role.period}</span>}
                  </div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-zinc-400 dark:marker:text-zinc-600">
                    {role.points.map((point) => (
                    <li key={point} className="leading-relaxed">
                      <Highlight text={point} phrase={job.highlight} />
                    </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="overflow-hidden">
              <div className="pb-6">
                <div className="space-y-6">
                  {job.roles.map((role) => (
                    <div key={role.title}>
                      {/* ...your roles code, unchanged */}
                    </div>
                  ))}
                </div>

                {/* 👇 Award goes here, after the roles and before the closing pb-6 div */}
                {job.awards?.map((award) => (
                  <a
                    key={award.title}
                    href={award.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-6 flex items-center gap-4 rounded-xl border border-zinc-200 p-3 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
                  >
                    <img
                      src={award.image}
                      alt={`${award.title}, ${award.date}`}
                      loading="lazy"
                      className="size-20 shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-sky-700 dark:text-sky-300">Award</p>
                      <p className="font-semibold text-zinc-900 dark:text-zinc-50">{award.title}</p>
                      <p className="text-sm">{award.date}</p>
                    </div>
                    <ArrowUpRightIcon className="size-4 shrink-0 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Experience() {
  // Index of the open item, or null when all are closed
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id="experience" title="Experience" description="Where I've worked and what I've built there:">
      <ul className="border-t border-zinc-200 dark:border-zinc-800">
        {experience.map((job, i) => (
          <AccordionItem
            key={job.company}
            id={`job-${i}`}
            job={job}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </ul>

      <div className="mt-12">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{education.degree}</h3>
          <Badge current>{education.status}</Badge>
        </div>
        <p className="mt-1 text-sm">
          {education.school}, {education.period}
        </p>
      </div>
    </Section>
  )
}
