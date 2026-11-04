export default function Section({ id, title, description, children }) {
  return (
    <section id={id} className="mt-20 scroll-mt-20">
      <span className="mb-3 block h-1 w-8 rounded-full bg-sky-500" />
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{title}</h2>
      {description && <p className="mt-2">{description}</p>}
      <div className="mt-8">{children}</div>
    </section>
  )
}
