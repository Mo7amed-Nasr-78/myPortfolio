import Eyebrow from "./Eyebrow.jsx";
import { Reveal } from "./Reveal.jsx";

export default function SectionHead({ eyebrow, title, children }) {
  return (
    <Reveal className="mb-9 flex max-w-[60ch] flex-col gap-3">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold">{title}</h2>
      {children && <p className="text-muted">{children}</p>}
    </Reveal>
  );
}
