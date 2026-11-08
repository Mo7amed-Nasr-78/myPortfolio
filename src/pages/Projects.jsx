import Section from "../components/Section.jsx";
import SectionHead from "../components/SectionHead.jsx";
import ProjectGrid from "../components/ProjectGrid.jsx";
import { projects, projectsIntro } from "../data/portfolio.js";

export default function Projects() {
  return (
    <Section className="!pt-12 md:!pt-16">
      <SectionHead eyebrow="db.projects" title="Selected work">
        {projectsIntro}
      </SectionHead>
      <ProjectGrid projects={projects} filterable />
    </Section>
  );
}
