import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-page px-4">
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-line py-7 text-sm text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-xs">Preview with demo content</span>
      </div>
    </footer>
  );
}
