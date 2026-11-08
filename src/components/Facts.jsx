import { Stagger, StaggerItem } from "./Reveal.jsx";
import CountUp from "./CountUp.jsx";
import { facts } from "../data/portfolio.js";

export default function Facts() {
  return (
    <Stagger
      as="dl"
      gap={0.1}
      className="m-0 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 border-y border-line py-7"
    >
      {facts.map((f) => (
        <StaggerItem key={f.label} className="flex min-w-0 flex-col-reverse">
          <dt className="mt-1.5 text-[.9rem] text-muted">{f.label}</dt>
          <dd className="m-0 font-display font-extrabold leading-none tracking-tight tabular-nums [font-size:clamp(1.8rem,4vw,2.5rem)]">
            <CountUp value={f.value} />
          </dd>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
