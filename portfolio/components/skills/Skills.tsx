import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { skillCategories } from "@/data/skills";
import SkillCategory from "./SkillCategory";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>

        <SectionTitle
          title="Tech Stack"
          subtitle="Technologies and tools I use to build modern software."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.id}
              category={category}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}