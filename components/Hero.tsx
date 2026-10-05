export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-28 md:pt-40 md:pb-40">
      <div className="absolute inset-0 grain" aria-hidden />
      <div
        className="absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            'radial-gradient(1200px 500px at 50% 0%, rgba(217,119,6,0.14), transparent 60%)',
        }}
      />
      <div
        className="absolute inset-x-0 top-24 h-px hairline"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest-plus text-ember/90">
          <span className="h-px w-8 bg-ember/60" />
          <span>Ho Chi Minh City · forming now</span>
        </div>

        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-ink-bright">
          Raising a generation
          <br />
          <span className="italic text-ember">of warriors.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink-soft leading-relaxed">
          Hero Academy is a school being formed in Saigon for children who will grow
          up intelligent, strong, honorable, and useful to the people around them.
        </p>

        <p className="mt-5 max-w-2xl text-base md:text-lg text-ink-muted leading-relaxed">
          Four pillars. One mission. Built brother to brother, sister to sister,
          by the people who answer the call.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#join"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ember text-ink text-sm font-medium hover:bg-ember-bright transition"
          >
            Build it with us
            <span aria-hidden>→</span>
          </a>
          <a
            href="#pillars"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink-border text-ink-text text-sm hover:border-ember/60 hover:text-ember transition"
          >
            See the four pillars
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {[
            { k: '4', v: 'pillars' },
            { k: '1', v: 'city — Saigon' },
            { k: '8', v: 'children to raise' },
            { k: '∞', v: 'generations after' },
          ].map((s) => (
            <div key={s.v} className="border-l border-ink-border pl-4">
              <div className="font-mono text-2xl text-ember">{s.k}</div>
              <div className="mt-1 text-ink-muted">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
