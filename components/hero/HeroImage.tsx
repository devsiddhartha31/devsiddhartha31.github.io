import Image from "next/image";
import { profile } from "@/data/profile";
import SkillBadge from "@/components/skills/SkillBadge";

export default function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative w-full max-w-sm">
        {/* Glow */}
        <div className="absolute inset-0 rounded-[2rem] bg-indigo-500/20 blur-3xl" />

        {/* Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 backdrop-blur-xl shadow-2xl">
          {/* Image */}
          <div className="relative h-80 overflow-hidden">
            <Image
              src="/images/profile/profile.jpg"
              alt="Siddhartha Kumar"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="p-6">

            <h3 className="text-2xl font-bold">
              {profile.name}
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              {profile.headline}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}