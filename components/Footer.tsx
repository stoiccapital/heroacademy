export function Footer() {
  return (
    <footer className="border-t border-ink-border py-14">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full border border-ember/60 grid place-items-center text-ember text-sm font-display">
              勇
            </span>
            <span className="font-display text-2xl text-ink-bright">
              Hero <span className="text-ember">Academy</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-ink-muted text-sm leading-relaxed">
            Being formed in Ho Chi Minh City. Four pillars: Mind, Body, Spirit,
            Ikigai. Built with the brothers and sisters who answer the call.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 text-sm text-ink-muted">
          <div className="font-mono">Saigon · forming now</div>
          <div className="font-mono">© {new Date().getFullYear()} Khoa Van</div>
        </div>
      </div>
    </footer>
  );
}
