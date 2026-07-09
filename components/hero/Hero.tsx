import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import GradientBackground from "@/components/ui/GradientBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GradientBackground />
      <Container>
        <div className="flex min-h-[calc(100vh-72px)] items-center py-16">
          <div className="grid w-full gap-12 xl:gap-20 lg:grid-cols-2">
            <HeroContent />

            <HeroImage />
          </div>
        </div>
      </Container>
    </section>
  );
}