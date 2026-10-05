import { Reveal } from './Reveal';

type Pillar = {
  num: string;
  kanji: string;
  name: string;
  tag: string;
  body: string;
  disciplines: string[];
};

const pillars: Pillar[] = [
  {
    num: '01',
    kanji: '智',
    name: 'Mind',
    tag: 'Clear thought. Sound judgment.',
    body:
      'Children who think for themselves. Who can take an argument apart, name a logical fallacy, hold two ideas at once, and still arrive at the right answer.',
    disciplines: ['Critical thinking', 'Logic', 'Philosophy', 'Deep reading'],
  },
  {
    num: '02',
    kanji: '力',
    name: 'Body',
    tag: 'Strong frame. Capable hands.',
    body:
      'A body that moves, lifts, defends, and endures. Physical confidence that comes from doing hard things with your own two hands, year after year.',
    disciplines: ['Gymnastics', 'Martial arts', 'Strength training', 'Movement'],
  },
  {
    num: '03',
    kanji: '義',
    name: 'Spirit',
    tag: 'A code to stand on.',
    body:
      'The virtues that make a person someone you can trust with your life. Not taught by lecture — forged by expectation, example, and consequence.',
    disciplines: [
      'Righteousness',
      'Courage',
      'Benevolence',
      'Respect',
      'Honesty',
      'Duty',
      'Self-control',
      'Honor',
    ],
  },
  {
    num: '04',
    kanji: '生',
    name: 'Ikigai',
    tag: 'A reason to get up.',
    body:
      'Purpose, craft, and the ability to feed a family. Children who know how value is created, how money works, and what their life is actually for.',
    disciplines: ['Entrepreneurship', 'Financial literacy', 'Craft & apprenticeship', 'Purpose'],
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="relative py-24 md:py-32 border-t border-ink-border bg-ink-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest-plus text-ember/90">
          <span className="h-px w-8 bg-ember/60" />
          <span>The four pillars</span>
        </div>

        <h2 className="mt-6 font-display text-4xl md:text-5xl text-ink-bright max-w-3xl">
          Four pillars. One whole person.
        </h2>

        <p className="mt-5 max-w-2xl text-ink-soft text-lg">
          A child trained in only one pillar becomes a specialist, or worse — a
          liability. We train the four together, every week, for as long as they
          are with us.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-border rounded-2xl overflow-hidden border border-ink-border">
          {pillars.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} className="bg-ink h-full">
            <article
              className="h-full p-8 md:p-10 flex flex-col gap-6 relative group hover:bg-ink-raised transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="h-14 w-14 rounded-xl border border-ember/50 grid place-items-center font-display text-3xl text-ember bg-ember/5">
                    {p.kanji}
                  </span>
                  <div>
                    <div className="font-mono text-xs text-ink-muted">{p.num}</div>
                    <h3 className="font-display text-3xl text-ink-bright leading-none mt-1">
                      {p.name}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="font-display text-xl text-ember italic">{p.tag}</p>

              <p className="text-ink-soft leading-relaxed">{p.body}</p>

              <ul className="mt-auto pt-4 flex flex-wrap gap-2 border-t border-ink-border">
                {p.disciplines.map((d) => (
                  <li
                    key={d}
                    className="text-xs font-mono text-ink-text px-3 py-1 rounded-full border border-ink-border bg-ink-raised/60"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
