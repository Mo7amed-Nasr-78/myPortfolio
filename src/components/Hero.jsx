import { Fragment } from "react";
import { motion } from "framer-motion";
import Button from "./Button.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { profile } from "../data/portfolio.js";
import { ease, fadeUp, staggerParent } from "../lib/motion.js";

const wordIn = {
  hidden: { opacity: 0, y: "0.5em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/** Headline split into words so they rise in one after another. */
function Headline() {
  const { headline, accentWord } = profile;
  let parts = [{ text: headline, accent: false }];
  if (accentWord && headline.includes(accentWord)) {
    const [before, after] = headline.split(accentWord);
    parts = [
      { text: before, accent: false },
      { text: accentWord, accent: true },
      { text: after, accent: false },
    ];
  }
  const words = parts.flatMap((p) => p.text.split(" ").filter(Boolean).map((w) => ({ w, accent: p.accent })));

  return words.map((x, i) => (
    <Fragment key={i}>
      <motion.span variants={wordIn} className={`inline-block ${x.accent ? "text-accent" : ""}`}>
        {x.w}
      </motion.span>{" "}
    </Fragment>
  ));
}

export default function Hero() {
  return (
    <div className="grid items-center gap-9 pb-10 pt-12 md:grid-cols-[1.1fr_.9fr] md:gap-12 md:pb-14 md:pt-[72px]">
      <motion.div className="min-w-0" initial="hidden" animate="show" variants={staggerParent(0.1, 0.1)}>
        <motion.div variants={fadeUp}>
          <Eyebrow>{profile.role} · MongoDB · Express · React · Node.js</Eyebrow>
        </motion.div>

        <motion.h1
          variants={staggerParent(0.05)}
          className="mb-5 mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.035em]"
        >
          <Headline />
        </motion.h1>

        <motion.p variants={fadeUp} className="max-w-[52ch] text-lg text-muted">
          {profile.intro}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          <Button to="/projects">View projects</Button>
          <Button to="/contact" variant="ghost">
            Get in touch
          </Button>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-7 inline-flex items-center gap-2 font-mono text-[.8rem] font-medium text-muted">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            {profile.available && (
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-accent"
                animate={{ scale: [1, 2.6], opacity: [0.6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.available ? "Available for new projects" : "Not taking new projects right now"}
        </motion.p>
      </motion.div>

      <motion.div
        className="mx-auto w-full max-w-[340px] md:max-w-[480px] md:justify-self-end"
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.25 }}
      >
        <motion.img
          src={profile.heroImage}
          alt={`Portrait of ${profile.name}`}
          width="625"
          height="629"
          fetchPriority="high"
          className="h-auto w-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </motion.div>
    </div>
  );
}
