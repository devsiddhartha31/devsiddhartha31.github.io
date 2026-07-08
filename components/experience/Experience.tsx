import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import ExperienceCard from "./ExperienceCard";

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>

        <SectionTitle
          title="Professional Journey"
          subtitle="Building products, solving problems, and continuously learning."
        />

        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}