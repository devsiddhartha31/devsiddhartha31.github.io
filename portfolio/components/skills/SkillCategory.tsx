import { SkillCategory as SkillCategoryType } from "@/types/skill";
import SkillBadge from "./SkillBadge";

interface Props {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h3 className="text-xl font-semibold">
        {category.title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {category.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillBadge
            key={skill}
            skill={skill}
          />
        ))}
      </div>

    </div>
  );
}