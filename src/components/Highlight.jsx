import { Fragment } from 'react'

const style =
  'font-medium text-zinc-900 underline decoration-amber-400 decoration-2 underline-offset-4 dark:text-zinc-50 dark:decoration-amber-500'

// Wraps every occurrence of `phrase` inside `text` with the gold underline
export default function Highlight({ text, phrase }) {
  if (!phrase) return text
  return text.split(phrase).map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <span className={style}>{phrase}</span>}
      {part}
    </Fragment>
  ))
}