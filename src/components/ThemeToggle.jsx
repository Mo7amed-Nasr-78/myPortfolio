import useTheme from "../hooks/useTheme.js";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch colour theme"
      className="rounded-md border border-line px-3 py-1.5 font-mono text-[.8rem] font-medium text-fg transition hover:border-accent"
    >
      {theme === "dark" ? "light mode" : "dark mode"}
    </button>
  );
}
