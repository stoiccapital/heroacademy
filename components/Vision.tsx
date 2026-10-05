export function Vision() {
  return (
    <section id="vision" className="relative py-24 md:py-32 border-t border-ink-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest-plus text-ember/90">
          <span className="h-px w-8 bg-ember/60" />
          <span>The letter</span>
        </div>

        <h2 className="mt-6 font-display text-4xl md:text-5xl text-ink-bright">
          A letter from Khoa.
        </h2>

        <div className="mt-12 space-y-6 text-lg md:text-xl text-ink-text leading-relaxed font-display">
          <p>Hello Brothers and Sisters,</p>

          <p>
            I am Khoa, a warrior from Sydney, Australia.
            <br />
            Born and raised there.
          </p>

          <p>
            I am moving to Ho Chi Minh City to find a wife,
            <br />
            get married, and have <span className="text-ember">eight children</span>.
          </p>

          <p>I want a place for my kids to grow:</p>

          <ol className="space-y-3 pl-6 list-decimal marker:text-ember marker:font-mono marker:text-base">
            <li>
              Intelligent and wise, so they can make good decisions.
            </li>
            <li>
              Strong and capable, great leaders who lead by example.
            </li>
            <li>
              Good and moral, caring for the Vietnamese people and the community.
            </li>
            <li>
              With purpose, and able to make a living by learning the ins and outs
              of providing real value.
            </li>
          </ol>

          <p>
            I know it is a lot to ask for.
            <br />
            So I have decided to build my own academy.
          </p>

          <p className="pt-4 text-ember italic">
            If you see yourself building this with me in HCMC — come find me.
          </p>

          <p className="text-ink-soft not-italic">
            Much love,
            <br />
            <span className="text-ink-bright">Khoa Van.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
