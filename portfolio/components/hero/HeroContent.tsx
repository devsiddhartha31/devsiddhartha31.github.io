import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";
import { profile } from "@/data/profile";

export default function HeroContent() {
  return (
    <div>

      <div className="mb-8 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2">

        <div className="mr-2 h-2 w-2 rounded-full bg-green-400" />

        <span className="text-sm">
          Available for opportunities
        </span>

      </div>

      <h1 className="text-5xl font-black leading-tight lg:text-7xl">

        Engineering software
        <br />
        that solves
        <br />
        real-world problems.

      </h1>

      <p className="mt-8 text-xl text-zinc-300">

        {profile.headline}

      </p>

      <p className="mt-6 max-w-2xl text-zinc-400 leading-8">

        {profile.description}

      </p>

      <HeroButtons />

      <HeroSocial />

    </div>
  );
}