import HeroButtons from "./HeroButtons";
import { profile } from "@/data/profile";
import SkillBadge from "@/components/skills/SkillBadge";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center max-w-xl">

      <div className="mb-8 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2">

        <div className="mr-2 h-2 w-2 rounded-full bg-green-400" />

        <span className="text-sm">
          Available for Opportunities
        </span>

      </div>

      <h1 className="max-w-4xl text-2xl lg:text-4xl xl:text-5xl font-black leading-[0.95] tracking-tight">

        Engineering software

        <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">

        that solves

        </span>

        real-world problems.

      </h1>

      {/* Info */}
      <div className="mt-8 flex flex-wrap gap-2">
        {profile.focus.map((item) => (
          <SkillBadge key={item} skill={item} />
        ))}
      </div>

      <p className="mt-6 max-w-xl text-lg text-zinc-300 leading-8">

        {profile.description}

      </p>

      <HeroButtons />

    </div>
  );
}