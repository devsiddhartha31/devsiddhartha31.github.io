"use client";

import Image from "next/image";
import { useState } from "react";
import SkillBadge from "@/components/skills/SkillBadge";

import {
  Calendar,
  MapPin,
  Crown,
  BriefcaseBusiness,
  Clock3,
  FileSignature,
  Laptop,
  GraduationCap,
  Monitor,
} from "lucide-react";

import { ExperienceItem } from "@/types/experience";

interface Props {
  experience: ExperienceItem;
}

const employmentTypeMap = {
  founder: Crown,
  fullTime: BriefcaseBusiness,
  partTime: Clock3,
  contract: FileSignature,
  freelance: Laptop,
  internship: GraduationCap,
};

const formatString = (type: string) =>
  type.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());

export function formatDuration(experience: ExperienceItem) {
  const start = new Date(`${experience.startDate}-01`);
  const end = experience.endDate
    ? new Date(`${experience.endDate}-01`)
    : new Date();

  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  });

  const durationRangeParts = [];

  durationRangeParts.push(`${formatter.format(start)}`);
  durationRangeParts.push("-");
  durationRangeParts.push(`${experience.endDate ? formatter.format(end) : "Present"}`);

  const durationRange = durationRangeParts.join(" ");

  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  const splitMonths = (totalMonths % 12)
  const years = (totalMonths - splitMonths) / 12

  const durationParts = [];

  if (years > 0) {
    durationParts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  }

  if (splitMonths > 0) {
    durationParts.push(`${splitMonths} ${splitMonths === 1 ? "mo" : "mos"}`);
  }

  const duration = durationParts.join(" ");

  return {
    durationRange: durationRange,
    duration: duration,
  };
}

export default function ExperienceCard({
  experience,
}: Props) {

  const [isContentCollapsed, setContentCollapsed] = useState(true);

  const companyInitials = experience.company
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const Icon = employmentTypeMap[experience.employmentType];

  const workDurationFormatted = formatDuration(experience);

  return (
    <article
      className="
        rounded-3xl
        border
        border-white/5
        bg-zinc-900/60
        p-6 md:p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-500/30
        hover:shadow-xl
        hover:shadow-indigo-500/10
      "
      onClick={() => setContentCollapsed(!isContentCollapsed)}
    >
      {/* Header */}
      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          {experience.logo ? (
            <Image
              src={experience.logo}
              alt={experience.company}
              width={48}
              height={48}
              className="h-12 w-12 rounded-xl object-contain"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white">
              {companyInitials}
            </div>
          )}

          <div>

            <h3 className="text-lg md:text-xl font-bold">
              {experience.company}
            </h3>

            <p className="mt-1 text-sm md:text-base text-zinc-400">
              {experience.role}
            </p>

          </div>

        </div>

        <div className="hidden md:block">
          {experience.current && (
            <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">

              <div className="mr-2 h-2 w-2 rounded-full bg-green-400" />

              <span className="text-xs font-medium text-green-400">
                Current
              </span>

            </div>
          )}
        </div>

        <div className="md:hidden">
          {experience.current && (
            <div className="m-2 h-2 w-2 rounded-full bg-green-400" />
          )}
        </div>

      </div>

      {/* Duration and location */}
      <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-zinc-500 md:flex md:flex-wrap md:items-center md:gap-5">

        <div className="flex items-center gap-2">
          <Icon size={16} />
          <span>{formatString(experience.employmentType)}</span>
        </div>

        <div className="col-span-2 flex items-center gap-2 md:col-auto">
          <Calendar size={16} />
          <span>{workDurationFormatted.durationRange}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={16} />
          <span>{workDurationFormatted.duration}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{experience.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <Monitor size={16} />
          <span>{formatString(experience.workMode)}</span>
        </div>

      </div>

      {/* Collapsable Content */}
      <div
        className={`transition-all duration-300 ${
          isContentCollapsed ? "hidden" : "block"
        }`}
      >

        {/* Description */}

        <p className="mt-6 leading-7 text-zinc-400">
          {experience.description}
        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-2">

          {experience.technologies.map((tech) => (
            <SkillBadge
              key={tech}
              skill={tech}
            />
          ))}

        </div>

      </div>

    </article>
  );
}