import { motion } from "framer-motion";
import { profile } from "../data/portfolio.js";
import { ease } from "../lib/motion.js";

const punct = "text-code-muted";

/** Renders one JSON-like value with syntax colours. */
function Val({ v }) {
  if (v && v.raw) return <span className="text-code-kw">{v.raw}</span>;
  if (Array.isArray(v)) {
    return (
      <>
        <span className={punct}>[</span>
        {v.map((x, i) => (
          <span key={i}>
            <Val v={x} />
            {i < v.length - 1 && <span className={punct}>, </span>}
          </span>
        ))}
        <span className={punct}>]</span>
      </>
    );
  }
  if (typeof v === "string") return <span className="text-code-str">"{v}"</span>;
  if (typeof v === "number") return <span className="text-code-num">{v}</span>;
  if (typeof v === "boolean") return <span className="text-code-kw">{String(v)}</span>;
  return <span>{String(v)}</span>;
}

function Line({ index, children }) {
  return (
    <motion.span
      className="block whitespace-pre"
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease, delay: index * 0.07 }}
    >
      {children}
    </motion.span>
  );
}

export default function ProfileDoc() {
  const today = new Date().toISOString().slice(0, 10);
  const doc = {
    _id: { raw: 'ObjectId("66f1c0de5a1b2c3d4e5f6a7b")' },
    name: profile.name,
    role: profile.role,
    experienceYears: profile.years,
    stack: ["MongoDB", "Express", "React", "Node.js"],
    location: profile.location,
    openToWork: profile.available,
    updatedAt: { raw: `ISODate("${today}")` },
  };
  const entries = Object.entries(doc);

  return (
    <div
      className="min-w-0 overflow-hidden rounded-[10px] border border-line bg-code-bg text-code-fg"
      aria-label="Developer profile as a MongoDB document"
    >
      <div className="flex justify-between gap-3 border-b border-white/10 px-[18px] py-3 font-mono text-[.78rem] text-code-muted">
        <span>db.developers.findOne()</span>
        <span>1 document</span>
      </div>
      <pre className="m-0 overflow-x-auto p-[18px] font-mono text-[.8rem] leading-[1.8]">
        <Line index={0}>
          <span className={punct}>{"{"}</span>
        </Line>
        {entries.map(([k, v], i) => (
          <Line key={k} index={i + 1}>
            {"  "}
            <span className="text-code-key">{k}</span>
            <span className={punct}>: </span>
            <Val v={v} />
            {i < entries.length - 1 && <span className={punct}>,</span>}
          </Line>
        ))}
        <Line index={entries.length + 1}>
          <span className={punct}>{"}"}</span>
        </Line>
      </pre>
    </div>
  );
}
