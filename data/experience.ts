import { ExperienceItem } from "@/types/experience";

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Your Current Company",
    role: "Software Engineer",
    duration: "2025 - Present",
    location: "India",

    description:
    "Developing scalable software solutions, backend APIs, cloud-based applications, and contributing to production systems.",

    technologies: [
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "React",
      "Next.js",
    ],

    current: true,
  },

  {
    id: 2,
    company: "Freelance",

    role: "Full-Stack Developer",

    duration: "2022 - Present",

    location: "Remote",

    description:
    "Delivered web, backend, Android, and AI solutions for international clients and startups.",

    technologies: [
      "Android",
      "Next.js",
      "Java",
      "Python",
      "Firebase",
    ],
  },

  {
    id: 3,

    company: "KridAstra",

    role: "Founder",

    duration: "2026 - Present",

    location: "India",

    description:
    "Building software products focused on solving real-world problems using modern technologies.",

    technologies: [
      "Cloud",
      "AI",
      "React",
      "Android",
    ],
  },
];