import { motion } from "framer-motion";
import { Reveal } from "./Reveal.jsx";
import { ease, inView } from "../lib/motion.js";

const boxes = [
  { x: 10, tag: "Browser", title: "React client", lines: ["Vite", "React Router", "TanStack Query"] },
  { x: 285, tag: "Node.js runtime", title: "Express API", lines: ["JWT auth", "Zod validation", "Rate limiting"] },
  { x: 560, tag: "Cloud database", title: "MongoDB Atlas", lines: ["Mongoose models", "Compound indexes", "Aggregation pipelines"] },
];

const links = [
  { x1: 204, x2: 281, mid: 242.5, top: "REST/JSON", bottom: "JWT" },
  { x1: 479, x2: 556, mid: 517.5, top: "Mongoose", bottom: "BSON" },
];

// The diagram builds itself when scrolled to: boxes appear, then the arrows draw in.
const sequence = (gap) => ({ hidden: {}, show: { transition: { staggerChildren: gap } } });
const boxIn = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } };
const draw = { hidden: { pathLength: 0, opacity: 0 }, show: { pathLength: 1, opacity: 1, transition: { duration: 0.55, ease } } };
const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

export default function ArchitectureDiagram() {
  return (
    <Reveal className="mt-10 min-w-0 rounded-xl border border-line bg-surface p-6">
      <h3 className="mb-1 text-lg">How a typical project is wired</h3>
      <p className="mb-4 text-[.92rem] text-muted">
        Every build follows the same request path, so new features land in a familiar place.
      </p>
      <div className="overflow-x-auto">
        <motion.svg
          viewBox="0 0 760 232"
          role="img"
          aria-label="Request path from React client over REST to an Express API, then Mongoose to MongoDB Atlas"
          className="block h-auto w-full min-w-[640px]"
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={sequence(0.2)}
        >
          <defs>
            <marker id="arrow-head" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" className="fill-accent" />
            </marker>
          </defs>

          {boxes.map((b) => (
            <motion.g key={b.title} variants={boxIn}>
              <text x={b.x} y="38" className="fill-accent-text font-mono text-[11px] font-medium uppercase tracking-[.06em]">
                {b.tag}
              </text>
              <rect x={b.x} y="50" width="190" height="130" rx="10" className="fill-bg stroke-line [stroke-width:1.5]" />
              <text x={b.x + 16} y="80" className="fill-fg font-display text-[17px] font-bold">
                {b.title}
              </text>
              {b.lines.map((line, i) => (
                <text key={line} x={b.x + 16} y={106 + i * 20} className="fill-muted font-mono text-xs">
                  {line}
                </text>
              ))}
            </motion.g>
          ))}

          {links.map((l) => (
            <motion.g key={l.top} variants={sequence(0.12)}>
              <motion.line variants={draw} x1={l.x1} y1="100" x2={l.x2} y2="100" markerEnd="url(#arrow-head)" className="fill-none stroke-accent [stroke-width:1.6]" />
              <motion.line variants={draw} x1={l.x2} y1="130" x2={l.x1} y2="130" markerEnd="url(#arrow-head)" className="fill-none stroke-accent [stroke-width:1.6]" />
              <motion.text variants={fadeIn} x={l.mid} y="92" textAnchor="middle" className="fill-muted font-mono text-[11px]">
                {l.top}
              </motion.text>
              <motion.text variants={fadeIn} x={l.mid} y="148" textAnchor="middle" className="fill-muted font-mono text-[11px]">
                {l.bottom}
              </motion.text>
            </motion.g>
          ))}

          <motion.text variants={fadeIn} x="380" y="214" textAnchor="middle" className="fill-muted font-mono text-xs">
            Docker · GitHub Actions · deployed on AWS
          </motion.text>
        </motion.svg>
      </div>
    </Reveal>
  );
}
