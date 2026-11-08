import { motion } from "framer-motion";
import { ease, fadeUp, inView, staggerParent } from "../lib/motion.js";

/** Fades and lifts its children into view when scrolled to. */
export function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Parent that reveals its StaggerItem children one after another. */
export function Stagger({ children, className = "", gap = 0.08, as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag className={className} initial="hidden" whileInView="show" viewport={inView} variants={staggerParent(gap)}>
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className = "", as = "div", ...rest }) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={fadeUp} {...rest}>
      {children}
    </Tag>
  );
}
