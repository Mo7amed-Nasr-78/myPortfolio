import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard.jsx";
import { ease } from "../lib/motion.js";

/** Grid of project cards. Pass filterable to show category filters. */
export default function ProjectGrid({ projects, filterable = false }) {
  const [active, setActive] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const visible = projects.filter((p) => active === "All" || p.category === active);

  return (
    <>
      {filterable && (
        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={c === active}
              onClick={() => setActive(c)}
              className={`relative rounded-md border px-3.5 py-2 font-mono text-[.82rem] font-medium transition-colors ${
                c === active
                  ? "border-accent text-accent-ink"
                  : "border-line bg-transparent text-muted hover:border-accent hover:text-fg"
              }`}
            >
              {c === active && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-[5px] bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-4">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              className="h-full"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, ease, delay: (i % 2) * 0.08 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
