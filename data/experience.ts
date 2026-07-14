import { ExperienceItem } from "@/types/experience";

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "KridAstra",
    role: "Founder & Software Engineer",
    employmentType: "fullTime",
    duration: "Nov 2022 - Present",
    location: "India",
    description:
    "Founded KridAstra to build scalable software products and digital solutions. Leading product development, system architecture, full-stack engineering, and technical strategy while delivering solutions for businesses across multiple domains.",
    technologies: [
      "Project Management",
      "Leadership",
      "Product Development",
      "Full Stack Development",
      "Deployment",
      "Database & Server Management",
      "Cost Effectiveness",
    ],
    current: true,
  },
  {
    id: 2,
    company: "Independent Healthcare Startup",
    role: "AI Research Engineer",
    employmentType: "fullTime",
    duration: "Feb 2026 - July 2026 (6 Months)",
    location: "Germany - Remote",
    description:
      "Conducted AI research for developmental dysplasia of the hip (DDH) detection using pediatric pelvic X-rays. Developed deep learning and computer vision models, evaluated foundation models, and implemented explainable AI techniques for medical imaging.",
    technologies: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "Deep Learning",
      "Medical Imaging",
      "AI",
    ],
  },
  {
    id: 3,
    company: "Moonglade Consultancy",
    role: "Software Engineer (Full Stack)",
    employmentType: "contract",
    duration: "Sept 2023 - Contractual Partnership",
    location: "India - Remote",
    description:
      "Part of a creative, fast-paced team at Moonglade, where I contribute to the planning, development, and optimization of diverse software projects.",
    technologies: [
      "Next.js",
      "Express.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Docker",,
      "AWS",
      "Cloudflare",
      "DigitalOcean",
    ],
  },
];