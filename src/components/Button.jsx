import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const base =
  "inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-[.95rem] font-semibold transition-colors";

const variants = {
  primary: "border-accent bg-accent text-accent-ink hover:brightness-110",
  ghost: "border-line bg-transparent text-fg hover:border-accent",
};

/** Renders a router link (to), a plain link (href) or a button, with a small lift on hover. */
export default function Button({ to, href, variant = "primary", className = "", children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  let inner;
  if (to) {
    inner = (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  } else if (href) {
    inner = (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  } else {
    inner = (
      <button type="button" className={cls} {...rest}>
        {children}
      </button>
    );
  }
  return (
    <motion.span
      className="inline-flex"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {inner}
    </motion.span>
  );
}
