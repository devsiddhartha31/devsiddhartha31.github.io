import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroButtons from "./HeroButtons";
import GradientBackground from "@/components/ui/GradientBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-[48px] border-b border-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] bg-zinc-900/70 backdrop-blur-xl border border-white/10">
      <GradientBackground />
      <Container>
        <div className="flex min-h-[calc(100svh-4rem)] items-center py-22">
          <div className="grid w-full gap-8 lg:grid-cols-2">
            <HeroContent />

            <HeroImage />

            <div className="lg:hidden">
              <HeroButtons />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}