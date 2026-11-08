import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts a number up when it scrolls into view.
 * Keeps any prefix or suffix, so "99.95%" and "120ms" both work.
 * Values with no number in them are shown as they are.
 */
export default function CountUp({ value, duration = 1.6 }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const text = String(value);
  const match = text.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2]) : 0;
  const decimals = match ? (match[2].split(".")[1] || "").length : 0;
  const suffix = match ? match[3] : "";
  const animated = Boolean(match) && !reduce;

  const [shown, setShown] = useState(animated ? prefix + (0).toFixed(decimals) + suffix : text);

  useEffect(() => {
    if (!animated || !seen) return undefined;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setShown(prefix + v.toFixed(decimals) + suffix),
    });
    return () => controls.stop();
  }, [animated, seen, target, decimals, prefix, suffix, duration]);

  return <span ref={ref}>{shown}</span>;
}
