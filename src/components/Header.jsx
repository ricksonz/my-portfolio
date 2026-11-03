import ThemeToggle from './ThemeToggle'
import { profile } from '../data'

export default function Header() {
  return (
    <header className="mx-auto flex items-center justify-between px-6 py-5">
      <a href="#top" className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {profile.initials}
      </a>
      <ThemeToggle />
    </header>
  )
}
