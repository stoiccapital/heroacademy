export function About() {
  return (
    <section id="khoa" className="relative py-24 md:py-32 border-t border-ink-border">
      <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-5 gap-12 md:gap-16 items-start">
        <div className="md:col-span-2">
          <div className="aspect-[4/5] rounded-2xl border border-ink-border bg-ink-raised relative overflow-hidden">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center px-6">
                <div className="font-display text-7xl md:text-8xl text-ember leading-none">勇</div>
                <div className="mt-6 h-px w-10 bg-ember/40 mx-auto" />
                <div className="mt-6 font-display text-2xl text-ink-bright">Khoa Van</div>
                <div className="mt-2 text-xs uppercase tracking-widest-plus text-ink-muted font-mono">
                  Sydney → Saigon
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest-plus text-ember/90">
            <span className="h-px w-8 bg-ember/60" />
            <span>Who's behind this</span>
          </div>

          <h2 className="mt-6 font-display text-4xl md:text-5xl text-ink-bright leading-tight">
            I am Khoa — and this is why I am moving home.
          </h2>

          <div className="mt-8 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              I grew up in Sydney. Vietnamese by blood, Australian by passport, warrior
              by choice. I spent my years training my body, sharpening my mind, and
              building a code I actually want to pass down.
            </p>
            <p>
              I'm not waiting for a perfect school to exist for my future children.
              I'm moving to Ho Chi Minh City to build it — and to build a family
              worthy of it.
            </p>
            <p>
              If any part of this stirs something in you — as a parent, a coach,
              a teacher, a founder, a brother or sister with the same fire — I
              want to meet you.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="text-ink-muted uppercase tracking-widest-plus text-xs">Based in</dt>
              <dd className="mt-2 font-display text-xl text-ink-bright">Ho Chi Minh City</dd>
            </div>
            <div>
              <dt className="text-ink-muted uppercase tracking-widest-plus text-xs">From</dt>
              <dd className="mt-2 font-display text-xl text-ink-bright">Sydney, Australia</dd>
            </div>
            <div>
              <dt className="text-ink-muted uppercase tracking-widest-plus text-xs">Mission</dt>
              <dd className="mt-2 font-display text-xl text-ink-bright">Hero Academy</dd>
            </div>
            <div>
              <dt className="text-ink-muted uppercase tracking-widest-plus text-xs">Status</dt>
              <dd className="mt-2 font-display text-xl text-ember">Forming the team</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
