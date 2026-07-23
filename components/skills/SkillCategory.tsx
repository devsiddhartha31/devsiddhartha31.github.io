import { SkillCategory as SkillCategoryType } from "@/types/skill";
import Badge from "@/components/ui/Badge";

interface Props {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: Props) {
  return (
    <article
      className="
        rounded-3xl
        border
        border-white/5
        bg-zinc-900/60
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-500/30
        hover:shadow-xl
        hover:shadow-indigo-500/10
      "
    >
      <h3 className="text-lg md:text-xl font-semibold">
        {category.title}
      </h3>

      <p className="mt-2 text-zinc-400">
        {category.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <Badge
            key={skill}
            skill={skill}
          />
        ))}
      </div>
    </article>
  );
}