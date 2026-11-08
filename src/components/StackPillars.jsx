import Chip from "./Chip.jsx";
import { Reveal, Stagger, StaggerItem } from "./Reveal.jsx";
import { pillars, also } from "../data/portfolio.js";

export default function StackPillars() {
  return (
    <>
      <Stagger gap={0.1} className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4">
        {pillars.map((p) => (
          <StaggerItem
            as="article"
            key={p.name}
            className="min-w-0 rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent"
            whileHover={{ y: -4 }}
          >
            <div className="font-display text-[3.2rem] font-extrabold leading-none tracking-[-0.04em] text-accent" aria-hidden="true">
              {p.letter}
            </div>
            <h3 className="mt-3.5 text-xl">{p.name}</h3>
            <p className="mt-1 font-mono text-[.78rem] text-muted">{p.role}</p>
            <ul className="mt-4 flex list-none flex-col gap-2 p-0 text-[.95rem]">
              {p.items.map((item) => (
                <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-[.7em] before:h-0.5 before:w-[7px] before:bg-accent">
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-6 flex flex-wrap items-center gap-2">
        <span className="mr-1.5 font-mono text-[.78rem] font-medium text-muted">also working with</span>
        {also.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </Reveal>
    </>
  );
}
