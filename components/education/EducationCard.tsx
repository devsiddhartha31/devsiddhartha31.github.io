import { Education } from "@/types/education";

interface Props {
  education: Education;
}

export default function EducationCard({
  education,
}: Props) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h3 className="text-2xl font-semibold">
        {education.degree}
      </h3>

      <p className="mt-2 text-zinc-400">
        {education.institution}
      </p>

      <p className="mt-1 text-sm text-zinc-500">
        {education.duration} • {education.location}
      </p>

      <p className="mt-6 leading-7 text-zinc-400">
        {education.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {education.highlights.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
          >
            {item}
          </span>
        ))}
      </div>

    </article>
  );
}