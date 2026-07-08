import { ExperienceItem } from "@/types/experience";

interface Props {
  experience: ExperienceItem;
}

export default function ExperienceCard({
  experience,
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-xl font-semibold">
            {experience.role}
          </h3>

          <p className="mt-1 text-zinc-400">
            {experience.company}
          </p>

        </div>

        {experience.current && (
          <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
            Current
          </span>
        )}

      </div>

      <p className="mt-4 text-sm text-zinc-500">
        {experience.duration} • {experience.location}
      </p>

      <p className="mt-6 leading-7 text-zinc-400">
        {experience.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}

      </div>

    </div>
  );
}