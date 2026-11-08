export default function Chip({ children }) {
  return (
    <span className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[.8rem]">
      {children}
    </span>
  );
}
