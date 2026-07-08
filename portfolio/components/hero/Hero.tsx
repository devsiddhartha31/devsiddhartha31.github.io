import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Container>
        <div className="grid min-h-screen items-center gap-16 py-20 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}