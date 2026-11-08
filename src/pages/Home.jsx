import Hero from "../components/Hero.jsx";
import Facts from "../components/Facts.jsx";
import Section from "../components/Section.jsx";
import SectionHead from "../components/SectionHead.jsx";
import ProfileDoc from "../components/ProfileDoc.jsx";
import StackPillars from "../components/StackPillars.jsx";
import ArchitectureDiagram from "../components/ArchitectureDiagram.jsx";
import ProjectGrid from "../components/ProjectGrid.jsx";
import Button from "../components/Button.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { profile, projects, contact } from "../data/portfolio.js";

export default function Home() {
  return (
    <>
      <Hero />
      <Facts />

      <Section>
        <div className="grid items-start gap-9 md:grid-cols-2 md:gap-12">
          <div className="min-w-0">
            <SectionHead eyebrow="db.developers" title="About me">
              {profile.about}
            </SectionHead>
          </div>
          <ProfileDoc />
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="db.skills" title="One language across the whole stack">
          {profile.stackIntro}
        </SectionHead>
        <StackPillars />
        <ArchitectureDiagram />
      </Section>

      <Section>
        <SectionHead eyebrow="db.projects" title="Recent work" />
        <ProjectGrid projects={projects.slice(0, 2)} />
        <Reveal className="mt-6">
          <Button to="/projects" variant="ghost">
            See all projects
          </Button>
        </Reveal>
      </Section>

      <Section>
        <Reveal className="flex flex-col items-start gap-5 rounded-xl border border-line bg-surface p-8 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-extrabold">{contact.title}</h2>
            <p className="mt-2 max-w-[48ch] text-muted">{contact.text}</p>
          </div>
          <Button to="/contact">Start a conversation</Button>
        </Reveal>
      </Section>
    </>
  );
}
