import {
  Brain,
  Building2,
  Rocket,
  Users,
  Briefcase,
} from "lucide-react";

import { AboutHighlight } from "@/types/about";
import { cn } from "@/libs/utils";

const iconMap = {
  users: Users,
  building: Building2,
  brain: Brain,
  rocket: Rocket,
  experience: Briefcase,
};

interface Props {
  item: AboutHighlight;
}

export default function ImpactCard({ item }: Props) {
  const Icon = iconMap[item.icon];

  return (
    <article
      className={cn(
        "group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10",
        item.size === "span-c2-r1" && "lg:col-span-2",
        item.size === "span-c1-r2" && "lg:row-span-2"
      )}
    >
      <Icon
        size={30}
        className="text-indigo-400 transition-transform duration-300 group-hover:scale-110"
      />

      <h3 className="mt-6 text-5xl font-black">
        {item.value}
      </h3>

      <h4 className="mt-3 text-xl font-semibold">
        {item.title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-zinc-400">
        {item.subtitle}
      </p>
    </article>
  );
}