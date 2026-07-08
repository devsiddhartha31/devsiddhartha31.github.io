import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Section from "@/components/ui/Section"

import { about } from "@/data/about";

export default function About() {
  return (
    <Section id="about">
      <Container>

        <SectionTitle
          title={about.title}
        />

        <div className="max-w-3xl space-y-6">
          {about.description.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-8 text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
        </div>

      </Container>
    </Section>
  );
}