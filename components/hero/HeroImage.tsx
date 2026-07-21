import Image from "next/image";
import { profile } from "@/data/profile";
import SkillBadge from "@/components/skills/SkillBadge";
import HeroSocial from "./HeroSocial";

export default function HeroImage() {
  return (
    <div className="flex justify-start lg:justify-end">
      <div className="relative w-full max-w-92 lg:max-w-lg">
        {/* Glow */}
        <div className="absolute inset-0 rounded-[2rem] bg-indigo-500/20 blur-3xl" />

        {/* Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 backdrop-blur-xl shadow-2xl">
          {/* Image */}
          <div className="relative h-68 lg:h-100 overflow-hidden">
            <Image
              src="/images/profile/profile.jpg"
              alt={profile.name}
              fill
              priority
              className="object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent" />
          </div>

          {/* Info */}
          <div className="p-6">

            <h3 className="text-2xl font-bold">
              {profile.name}
            </h3>

            <p className="mt-2 text-xs lg:text-sm text-zinc-400 overflow-hidden text-ellipsis">
              {profile.headline}
            </p>

            <HeroSocial />

          </div>
        </div>
      </div>
    </div>
  );
}