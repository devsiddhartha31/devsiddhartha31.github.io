import HeroButtons from "./HeroButtons";
import { profile } from "@/data/profile";
import SkillBadge from "@/components/skills/SkillBadge";

export default function HeroContent() {
  return (
    <div className="flex max-w-xl flex-col items-start justify-center">

      <div className="mb-2 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2">

        <div className="relative mr-2 flex h-2.5 w-2.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>

        <span className="text-sm">
          Available for Opportunities
        </span>

      </div>

      <h1 className="mt-4 max-w-4xl text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.1] tracking-tight">

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

      <p className="mt-6 max-w-xl text-base lg:text-lg text-zinc-300 leading-8">

        {profile.description}

      </p>

      {/*Only for Desktop*/}
      <div className="hidden lg:block">
        <HeroButtons />
      </div>

    </div>
  );
}