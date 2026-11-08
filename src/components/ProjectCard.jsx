import Chip from "./Chip.jsx";

export default function ProjectCard({ project: p }) {
  return (
    <article className="flex h-full min-w-0 flex-col gap-4 rounded-xl border border-line bg-surface p-[26px] transition-colors hover:border-accent">
      <div className="flex flex-wrap justify-between gap-3 font-mono text-[.76rem]">
        <span className="rounded-[5px] bg-accent-soft px-2.5 py-1 font-medium text-accent-text">{p.category}</span>
        <span className="py-1 text-muted">
          {p.api} · {p.collections} collections
        </span>
      </div>

      <h3 className="text-2xl">{p.title}</h3>
      <p className="text-muted">{p.summary}</p>

      <dl className="m-0 flex flex-wrap gap-7 border-y border-line py-3.5">
        {p.metrics.map((m) => (
          <div key={m.l} className="flex flex-col-reverse">
            <dt className="text-[.82rem] text-muted">{m.l}</dt>
            <dd className="m-0 font-display text-2xl font-extrabold leading-tight tracking-tight tabular-nums">{m.v}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap gap-1.5">
        {p.stack.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>

      <div className="mt-auto flex gap-[18px] text-[.92rem] font-semibold text-accent-text">
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
          Live demo
        </a>
        <a href={p.repo} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
          Source code
        </a>
      </div>
    </article>
  );
}
