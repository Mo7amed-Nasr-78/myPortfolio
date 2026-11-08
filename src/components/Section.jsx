export default function Section({ children, className = "" }) {
  return <section className={`pt-16 md:pt-24 ${className}`}>{children}</section>;
}
