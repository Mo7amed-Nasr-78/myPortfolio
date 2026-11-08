import Section from "../components/Section.jsx";
import ContactInfo from "../components/ContactInfo.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { Reveal } from "../components/Reveal.jsx";

export default function Contact() {
  return (
    <Section className="!pt-12 md:!pt-16">
      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <Reveal className="min-w-0">
          <ContactInfo />
        </Reveal>
        <Reveal className="min-w-0" delay={0.12}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
