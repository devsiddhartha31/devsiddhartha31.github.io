import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
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
    image: "/images/projects/campaign_management_system.png",
    featured: true,
    preview: {
      overview: "Campaign Management System",
      highlights: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
      ]
    },
  },
  {
    id: 2,
    title: "KawalityWalls Campaign",
    slug: "kawalitywalls-campaign",
    description: "Interactive campaign platform integrated with an enterprise administration panel for campaign management.",
    category: "web",
    status: "enterprise",
    technologies: [
      "React",
      "CMS API",
      "Pixel Fire",
      "Weather API",
      "Geolocation API"
    ],
    image: "/images/projects/walls_campaign.png",
    featured: true,
  },
  {
    id: 3,
    title: "Nestlé Interactive Games",
    slug: "nestle-interactive-games",
    description: "QR-powered interactive web games controlled from mobile devices for experiential marketing campaigns.",
    category: "web",
    status: "enterprise",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JavaScript",
      "HTML5",
      "CSS"
    ],
    image: "/images/projects/indonesia_live_pic.png",
    featured: true,
  },
  {
    id: 4,
    title: "Scan & Play Football",
    slug: "scan-and-play-football",
    description: "Interactive football game played on a large display and controlled in real time from a mobile device via QR code.",
    category: "web",
    status: "enterprise",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JavaScript",
      "HTML5",
      "CSS"
    ],
    image: "/images/projects/milo_campaign.png",
    featured: true,
  },
  {
    id: 5,
    title: "Scan & Play KitKat",
    slug: "scan-and-play-kitkat",
    description: "Interactive Tetris-style promotional game controlled from mobile devices for experiential marketing campaigns.",
    category: "web",
    status: "enterprise",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JavaScript",
      "HTML5",
      "CSS"
    ],
    image: "/images/projects/kitkat_campaign.png",
    featured: true,
  },
  {
    id: 6,
    title: "Sunsilk Survey",
    slug: "sunsilk-campaign",
    description: "Promotional campaign platform developed for Sunsilk featuring surveys and customer engagement workflows.",
    category: "web",
    status: "enterprise",
    technologies: [
      "HTML",
      "CSS",
      "JS",
      "Consumer API"
    ],
    image: "/images/projects/sunsilk_survey_form.png",
    featured: true,
  },
  {
    id: 7,
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
    image: "/images/projects/dt_portfolio.png",
    featured: true,
  },
  {
    id: 8,
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
      "Express.js",
      "React"
    ],
    image: "/images/projects/beehive.png",
    featured: true,
  },
  {
    id: 9,
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
      "MySQL",
    ],
    image: "/images/projects/wednote.png",
    featured: true,
  },
  {
    id: 10,
    title: "ProLearning",
    slug: "prolearning",
    description: "Educational learning application for children teaching letters, numbers, and pronunciation through interactive gameplay.",
    category: "game",
    status: "production",
    technologies: [
      "Java",
      "Game Development",
      "Product Design"
    ],
    image: "/images/projects/pro_learning.png",
    featured: true,
  },
  {
    id: 11,
    title: "DDH Deep Learning Classification",
    slug: "ddh-deep-learning-classification",
    description:
    "Medical AI research for Developmental Dysplasia of the Hip (DDH) detection.",
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
    id: 12,
    title: "Shortest Path Generator",
    slug: "shortest-path-generator",
    description: "Python application implementing shortest path algorithms for route optimization and delivery planning.",
    category: "library",
    status: "opensource",
    technologies: [
      "Python",
      "Graphs",
      "Algorithms"
    ],
    image: "/images/projects/shortest_path.png",
    featured: true,
  },
  {
    id: 13,
    title: "Live Video Filter",
    slug: "ivs-live-video-filter",
    description: "Live video application with real-time visual effects, camera filter processing and green screen filter.",
    category: "library",
    status: "opensource",
    technologies: [
      "Android",
      "Kotlin",
      "Java",
      "OpenGL"
    ],
    image: "/images/projects/video_filter.png",
    featured: true,
  },
  {
    id: 14,
    title: "Messenger",
    slug: "sockets-messenger",
    description: "Real-time desktop messaging application built using socket programming for instant communication.",
    category: "library",
    status: "opensource",
    technologies: [
      "Java",
      "Sockets",
      "Networking"
    ],
    image: "/images/projects/messaging.png",
    featured: true,
  },
  {
    id: 15,
    title: "Image Viewer Library",
    slug: "image-viewer-library",
    description: "Reusable Java library providing image viewing, zooming, panning, and rendering capabilities.",
    category: "library",
    status: "opensource",
    technologies: [
      "Java",
      "Swing"
    ],
    image: "/images/projects/image_viewer.png",
    featured: true,
  },
  {
    id: 16,
    title: "Java 2D Game Development Toolkit",
    slug: "java-2d-game-development-toolkit",
    description: "Collection of reusable libraries including sprite/map loader, character animation, game physics, and level mechanics.",
    category: "library",
    status: "opensource",
    technologies: [
      "Java",
      "OpenGL",
      "Swing"
    ],
    image: "/images/projects/java_game_dev_kit.png",
    featured: true,
  },
  {
    id: 17,
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
    image: "/images/projects/3d_car_object.png",
    featured: true,
  },
  {
    id: 18,
    title: "FinancialFab",
    slug: "financialfab",
    description:
      "Personal finance manager for tracking income, expenses, and daily financial records.",
    category: "android",
    status: "personal",
    technologies: [
      "Android",
      "Java",
      "Kotlin",
      "Room"
    ],
    image: "/images/projects/financials_fab.png",
    featured: true,
  },
  {
    id: 19,
    title: "EDcryptFab",
    slug: "edcryptfab",
    description: "Desktop application for secure file encryption and decryption using modern cryptographic techniques.",
    category: "desktop",
    status: "personal",
    technologies: [
      "Java",
      "Swing",
      "Cryptography",
      "AES & DES",
      "Binary",
      "Hex"
    ],
    image: "/images/projects/edcrypt_fab.png",
    featured: true,
  },
  {
    id: 20,
    title: "GTA 2D",
    slug: "gta-2d",
    description: "Fan-made 2D adaptation inspired by the GTA series featuring a compact open-world environment.",
    category: "game",
    status: "personal",
    technologies: [
      "Java",
      "Game Development",
      "Game Physics",
      "Level Design"
    ],
    image: "/images/projects/gta.png",
    featured: true,
  },
];