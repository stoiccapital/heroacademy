import { Reveal } from './Reveal';

type Role = {
  title: string;
  body: string;
};

const roles: Role[] = [
  {
    title: 'Co-founders & builders',
    body: 'You see this and want to run it with Khoa — operations, land, curriculum, fundraising, the whole thing.',
  },
  {
    title: 'Coaches & teachers',
    body: 'You teach gymnastics, martial arts, philosophy, finance, or craft — and you teach the person, not just the skill.',
  },
  {
    title: 'Parents of future heroes',
    body: 'You want this for your own children, and you want to be in the room while it is being shaped.',
  },
  {
    title: 'Friends of the mission',
    body: 'You cannot be here full-time, but you want to help — mentorship, capital, connections, prayer.',
  },
];

export function Join() {
  return (
    <section id="join" className="relative py-28 md:py-36 border-t border-ink-border bg-ink-surface/40 overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        aria-hidden
        style={{
          background:
            'radial-gradient(900px 400px at 50% 100%, rgba(217,119,6,0.14), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest-plus text-ember/90">
          <span className="h-px w-8 bg-ember/60" />
          <span>Join the build</span>
        </div>

        <h2 className="mt-6 font-display text-5xl md:text-6xl text-ink-bright leading-[1.05] max-w-3xl">
          If you see yourself in this —
          <br />
          <span className="italic text-ember">hit me up.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-ink-soft text-lg">
          Hero Academy is being formed in person, in Saigon. If any of the four
          roles below describes you, send one message and tell me your story.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 70} className="h-full">
              <div className="h-full rounded-xl border border-ink-border bg-ink p-6 hover:border-ember/50 transition">
                <h3 className="font-display text-2xl text-ink-bright">{r.title}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-ember/40 bg-ink p-8 md:p-10 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest-plus text-ember/90">
              Reach Khoa
            </div>
            <div className="mt-3 font-display text-3xl md:text-4xl text-ink-bright">
              One message. Tell me your story.
            </div>
            <p className="mt-3 text-ink-soft">
              Email is the surest way. I read every message myself.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="mailto:khoa@heroacademy.vn?subject=I%20want%20to%20build%20Hero%20Academy%20with%20you"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ember text-ink font-medium hover:bg-ember-bright transition"
            >
              khoa@heroacademy.vn
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://t.me/khoavan"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-ink-border text-ink-text hover:border-ember/60 hover:text-ember transition"
            >
              Telegram · @khoavan
            </a>
          </div>
        </div>

        <p className="mt-10 text-sm text-ink-muted font-mono">
          No form. No funnel. Just a message, read by a human, answered by Khoa.
        </p>
      </div>
    </section>
  );
}
