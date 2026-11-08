import { motion } from "framer-motion";
import Chip from "./Chip.jsx";
import { experience } from "../data/portfolio.js";
import { ease } from "../lib/motion.js";

function Job({ job }) {
  return (
    <motion.li
      className="grid gap-1.5 border-t border-line py-7 last:border-b md:grid-cols-[200px_1fr] md:gap-8"
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease }}
    >
      <div className="pt-1.5 font-mono text-[.85rem] text-muted">{job.period}</div>
      <div className="min-w-0">
        <h3 className="text-[1.4rem]">{job.role}</h3>
        <p className="mt-1 font-semibold text-accent-text">{job.org}</p>
        <ul className="mt-3.5 flex flex-col gap-1.5 pl-[18px] text-muted">
          {job.points.map((point) => (
            <li key={point} className="list-disc">
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {job.stack.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </div>
    </motion.li>
  );
}

export default function Timeline() {
  return (
    <ol className="m-0 flex list-none flex-col p-0">
      {experience.map((job) => (
        <Job key={job.role + job.org} job={job} />
      ))}
    </ol>
  );
}
