/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // Colours point at CSS variables defined in src/index.css,
      // so light and dark themes switch without touching components.
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        "accent-text": "var(--accent-text)",
        "accent-ink": "var(--accent-ink)",
        "accent-soft": "var(--accent-soft)",
        code: {
          bg: "var(--code-bg)",
          fg: "var(--code-fg)",
          muted: "var(--code-muted)",
          key: "var(--s-key)",
          str: "var(--s-str)",
          num: "var(--s-num)",
          kw: "var(--s-kw)",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Segoe UI"', "system-ui", "sans-serif"],
        body: ['"Instrument Sans"', '"Segoe UI"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      maxWidth: {
        page: "1120px",
      },
    },
  },
  plugins: [],
};
