export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-ink-border/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="h-7 w-7 rounded-full border border-ember/60 grid place-items-center text-ember text-xs font-display">
            勇
          </span>
          <span className="font-display text-lg tracking-wide text-ink-bright">
            Hero <span className="text-ember">Academy</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          <a href="#vision" className="hover:text-ink-bright transition">Vision</a>
          <a href="#pillars" className="hover:text-ink-bright transition">Pillars</a>
          <a href="#khoa" className="hover:text-ink-bright transition">Khoa</a>
        </div>
        <a
          href="#join"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember/60 text-ember text-sm hover:bg-ember hover:text-ink transition"
        >
          Join the build
          <span aria-hidden>→</span>
        </a>
      </div>
    </nav>
  );
}
