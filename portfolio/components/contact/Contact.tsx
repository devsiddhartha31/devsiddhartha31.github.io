import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import ContactCard from "./ContactCard";

import { contacts } from "@/data/contacts";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>

        <SectionTitle
          title="Let's Connect"
          subtitle="Whether it's a full-time role, freelance project, collaboration, or simply a conversation about technology, I'd be happy to hear from you."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}