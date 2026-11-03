export default function Section({ id, title, description, children }) {
  return (
    <section id={id} className="mt-20 scroll-mt-20">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{title}</h2>
      {description && <p className="mt-2">{description}</p>}
      <div className="mt-8">{children}</div>
    </section>
  )
}
