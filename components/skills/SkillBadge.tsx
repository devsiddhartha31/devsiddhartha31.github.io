interface Props {
  skill: string;
}

export default function SkillBadge({ skill }: Props) {
  return (
    <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs lg:text-sm transition hover:border-indigo-500 hover:text-indigo-400">
      {skill}
    </span>
  );
}