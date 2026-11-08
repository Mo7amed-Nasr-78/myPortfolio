import Section from "../components/Section.jsx";
import SectionHead from "../components/SectionHead.jsx";
import Timeline from "../components/Timeline.jsx";

export default function Experience() {
  return (
    <Section className="!pt-12 md:!pt-16">
      <SectionHead eyebrow="db.experience" title="Where I have shipped" />
      <Timeline />
    </Section>
  );
}
