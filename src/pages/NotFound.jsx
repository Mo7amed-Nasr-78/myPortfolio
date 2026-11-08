import Section from "../components/Section.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <Section className="!pt-16">
      <div className="flex flex-col items-start gap-5">
        <Eyebrow>404 · document not found</Eyebrow>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold">This page does not exist</h1>
        <p className="max-w-[44ch] text-muted">The link may be old or mistyped. Head back to the home page.</p>
        <Button to="/">Back home</Button>
      </div>
    </Section>
  );
}
