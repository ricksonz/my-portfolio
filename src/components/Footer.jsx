import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-2xl border-t border-zinc-200 px-6 py-8 text-sm dark:border-zinc-800">
      <p>
        © {new Date().getFullYear()} {profile.name}.
      </p>
    </footer>
  )
}
