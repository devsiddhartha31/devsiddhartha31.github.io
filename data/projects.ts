import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "DDH Deep Learning Classification",
    slug: "ddh-deep-learning-classification",
    description:
    "Medical AI research for Developmental Dysplasia of the Hip (DDH) detection using deep learning, explainable AI, and foundation models.",
    category: "ai",
    status: "research",
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "DINO",
      "GradCAM",
      "Computer Vision",
    ],
    image: "/images/projects/ddh.png",
    featured: true,
  },

  {
    id: 2,
    title: "Llama 3 Fine-Tuning",
    slug: "llama3-fine-tuning",
    description:
      "Fine-tuned Llama 3 for domain-specific text classification and intelligent keyword detection.",
    category: "ai",
    status: "research",
    technologies: [
      "Python",
      "Llama 3",
      "Transformers",
      "Hugging Face",
      "LoRA",
    ],
    image: "/images/projects/ddh.png",
    featured: false,
  },

  {
    id: 3,
    title: "Campaign Management Platform",
    slug: "campaign-management-platform",
    description:
      "Enterprise web platform for managing advertising campaigns, surveys, analytics, and administrative workflows.",
    category: "web",
    status: "enterprise",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
    ],
    image: "/images/projects/ddh.png",
    featured: true,
  },

  {
    id: 4,
    title: "Digital Turbine Admin Panel",
    slug: "digital-turbine-admin-panel",
    description:
      "Administrative dashboard for campaign configuration, management, and reporting.",
    category: "web",
    status: "enterprise",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "REST API",
    ],
    image: "/images/projects/ddh.png",
    featured: true,
  },

  {
    id: 5,
    title: "Beekeepers Platform",
    slug: "beekeepers-platform",
    description:
      "Platform connecting beekeepers with centralized management of beekeeping centers and related information.",
    category: "web",
    status: "production",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Cloud",
    ],
    image: "/images/projects/ddh.png",
    featured: true,
  },

  {
    id: 6,
    title: "Wed-Note",
    slug: "wed-note",
    description:
      "Android application for managing wedding photography projects, clients, events, and delivery workflow.",
    category: "android",
    status: "production",
    technologies: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "Room",
    ],
    image: "/images/projects/ddh.png",
    featured: false,
  },

  {
    id: 7,
    title: "FinancialFab",
    slug: "financialfab",
    description:
      "Personal finance manager for tracking income, expenses, and daily financial records.",
    category: "android",
    status: "personal",
    technologies: [
      "Android",
      "Java",
      "SQLite",
    ],
    image: "/images/projects/ddh.png",
    featured: false,
  },

  {
    id: 8,
    title: "FastAndFurious",
    slug: "fast-and-furious-multiplayer",
    description:
      "Multiplayer 2D racing game built completely in Java with networking and real-time gameplay.",
    category: "game",
    status: "personal",
    technologies: [
      "Java",
      "LibGDX",
      "Networking",
    ],
    image: "/images/projects/ddh.png",
    featured: false,
  },

  {
    id: 9,
    title: "Collision Detection Library",
    slug: "collision-detection-library",
    description:
      "Reusable Java library implementing efficient collision detection for 2D game development.",
    category: "library",
    status: "opensource",
    technologies: [
      "Java",
      "Geometry",
      "Game Development",
    ],
    image: "/images/projects/ddh.png",
    featured: false,
  },

  {
    id: 10,
    title: "3D Object Loader",
    slug: "java-3d-object-loader",
    description:
      "Java library for loading and rendering 3D models, simplifying game development workflows.",
    category: "library",
    status: "opensource",
    technologies: [
      "Java",
      "OpenGL",
      "3D Graphics",
    ],
    image: "/images/projects/ddh.png",
    featured: false,
  },
];