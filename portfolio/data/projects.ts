import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,

    title: "DDH Classification using Deep Learning",

    description:
    "AI-based classification of Developmental Dysplasia of the Hip using deep learning, medical image preprocessing, explainability, and computer vision.",

    image: "/images/projects/ddh.png",

    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "GradCAM",
      "Vision Transformer",
    ],

    github: "",

    featured: true,

    category: "Research",
  },

  {
    id: 2,

    title: "Wedding Photography Management",

    description:
    "Android application for managing wedding photography bookings, albums, clients, and payments.",

    image: "/images/projects/wednote.jpg",

    technologies: [
      "Android",
      "Compose",
      "Room",
      "Material 3",
    ],

    github: "",

    featured: true,

    category: "Android",
  },

  {
    id: 3,

    title: "Scan & Play Game",

    description:
    "Scan to play game, which you can play with your phone by scanning qr from the big screen",

    image: "/images/projects/nestle_scan_and_play.png",

    technologies: [
      "Next.js",
      "Node.js",
      "Prisma",
      "PostgreSQL",
    ],

    github: "",

    live: "",

    featured: true,

    category: "Web",
  },
];