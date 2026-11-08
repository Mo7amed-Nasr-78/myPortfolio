import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle.jsx";
import { profile } from "../data/portfolio.js";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="mx-auto flex w-full max-w-page flex-wrap items-center justify-between gap-x-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight">
          <motion.img
            src={profile.logo}
            alt=""
            width="28"
            height="28"
            className="h-9 w-9"
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
          {/* {profile.name} */}
        </Link>

        <nav aria-label="Main" className="order-last -mx-1 flex w-full gap-1 overflow-x-auto pt-2 sm:order-none sm:mx-0 sm:w-auto sm:pt-0">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `relative whitespace-nowrap rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive ? "text-fg" : "text-muted hover:text-fg"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md bg-accent-soft"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
