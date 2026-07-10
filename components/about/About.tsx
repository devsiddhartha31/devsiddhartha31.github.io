import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { about } from "@/data/about";

import ImpactGrid from "./ImpactGrid";
import TrustedCompanies from "./TrustedCompanies";

export default function About() {
  return (
    <Section id="about">
      <Container>

        <SectionTitle
          title={about.title}
          subtitle={about.subtitle}
        />

        <ImpactGrid />

        <TrustedCompanies />

      </Container>
    </Section>
  );
}