import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import EducationCard from "./EducationCard";

import { education } from "@/data/education";

export default function Education() {
  return (
    <Section id="education">
      <Container>

        <SectionTitle
          title="Education"
          subtitle="My academic journey and research background."
        />

        <div className="space-y-6">
          {education.map((item) => (
            <EducationCard
              key={item.id}
              education={item}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}