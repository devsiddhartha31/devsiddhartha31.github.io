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
      overview:
        "A centralized platform used to configure, launch, and monitor large-scale digital marketing campaigns. It streamlines campaign setup, survey management, reporting, and administrative workflows across multiple clients.",
      highlights: [
        "Designed and implemented multiple platform modules",
        "Developed campaign configuration and management features",
        "Optimized backend APIs and database queries",
        "Improved scalability for production deployments",
      ],
      challenges:
        "Balancing flexibility for different campaign requirements while maintaining performance and a consistent user experience.",
      outcome:
        "Delivered a scalable platform supporting enterprise campaign operations and ongoing feature development.",
    }
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
    preview: {
      overview:
        "Interactive consumer campaign integrated with an enterprise administration platform for campaign management and analytics.",
      highlights: [
        "Built responsive campaign experience",
        "Integrated multiple external APIs",
        "Connected campaign with CMS platform",
        "Supported large production traffic",
      ],
      challenges:
        "Coordinating multiple third-party integrations while ensuring reliable campaign execution.",
      outcome:
        "Successfully deployed as part of a production marketing campaign.",
    }
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
    preview: {
      overview:
        "QR-based interactive web games allowing users to participate in promotional experiences directly from their mobile devices.",
      highlights: [
        "Implemented real-time gameplay",
        "Developed backend session management",
        "Integrated mobile QR workflow",
        "Optimized for live event usage",
      ],
      challenges:
        "Maintaining smooth gameplay across different mobile devices and network conditions.",
      outcome:
        "Delivered engaging interactive experiences for marketing activations.",
    }
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
    preview: {
      overview:
        "Interactive football experience where players scan a QR code to control gameplay on a large shared display.",
      highlights: [
        "Real-time mobile controls",
        "Large-screen game rendering",
        "Backend session synchronization",
        "Production event deployment",
      ],
      challenges:
        "Keeping gameplay synchronized with minimal latency during live demonstrations.",
      outcome:
        "Successfully supported live promotional events.",
    }
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
    preview: {
      overview:
        "Interactive Tetris-inspired promotional game controlled from smartphones after scanning a QR code.",
      highlights: [
        "Built interactive browser game",
        "Implemented mobile controller workflow",
        "Integrated with campaign backend",
        "Responsive gameplay across devices",
      ],
      challenges:
        "Creating an intuitive multiplayer interaction while keeping controls responsive.",
      outcome:
        "Provided an engaging branded promotional experience.",
    }
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
    preview: {
      overview:
        "Consumer engagement campaign featuring interactive surveys and promotional workflows.",
      highlights: [
        "Responsive survey interface",
        "Integrated campaign APIs",
        "Collected customer responses",
        "Optimized user journey",
      ],
      challenges:
        "Designing a simple survey flow while supporting campaign-specific requirements.",
      outcome:
        "Successfully deployed as part of a consumer engagement campaign.",
    }
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
    preview: {
      overview:
        "Administrative dashboard for configuring campaigns, managing data, and monitoring operational activity.",
      highlights: [
        "Built reusable dashboard components",
        "Implemented reporting features",
        "Developed REST API integrations",
        "Improved administrative workflows",
      ],
      challenges:
        "Keeping administrative tools flexible while maintaining usability.",
      outcome:
        "Enhanced operational efficiency for campaign management.",
    }
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
    preview: {
      overview:
        "Production platform connecting beekeepers with centralized management of beekeeping centers, resources, and operational data.",
      highlights: [
        "Developed full-stack platform",
        "Designed scalable backend services",
        "Integrated cloud deployment",
        "Implemented responsive user interface",
      ],
      challenges:
        "Building a system capable of managing multiple operational workflows within a single platform.",
      outcome:
        "Delivered a production-ready platform for managing beekeeping operations.",
    }
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
    preview: {
      overview:
        "Android application helping photographers organize clients, events, project timelines, and delivery workflows.",
      highlights: [
        "Built using Jetpack Compose",
        "Managed client information",
        "Organized photography projects",
        "Simplified delivery tracking",
      ],
      challenges:
        "Designing an intuitive workflow for managing multiple ongoing photography projects.",
      outcome:
        "Reduced manual effort involved in wedding photography management.",
    }
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
    preview: {
      overview:
        "Educational application teaching children letters, numbers, and pronunciation through interactive activities and mini games.",
      highlights: [
        "Interactive educational gameplay",
        "Child-friendly interface",
        "Learning through visual feedback",
        "Gamified progression",
      ],
      challenges:
        "Keeping educational content engaging while remaining easy to understand.",
      outcome:
        "Created a fun learning experience for young children.",
    }
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
    preview: {
      overview:
        "Medical AI research exploring deep learning models for automated classification of Developmental Dysplasia of the Hip using pediatric X-ray images.",
      highlights: [
        "Compared CNN and Vision Transformer models",
        "Implemented preprocessing pipeline",
        "Applied Grad-CAM explainability",
        "Evaluated multiple datasets",
      ],
      challenges:
        "Working with limited annotated medical datasets while maintaining model generalization.",
      outcome:
        "Demonstrated strong classification performance and explainable predictions.",
    }
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
    preview: {
      overview:
        "Python library implementing graph algorithms for shortest-path computation and route optimization.",
      highlights: [
        "Implemented graph algorithms",
        "Reusable Python package",
        "Optimized route calculations",
        "Designed clean API",
      ],
    }
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
    preview: {
      overview:
        "Android application providing real-time camera effects and visual filters using OpenGL rendering.",
      highlights: [
        "Live camera processing",
        "GPU-based rendering",
        "Green screen effects",
        "Custom visual filters",
      ],
    }
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
    preview: {
      overview:
        "Desktop messaging application demonstrating real-time communication using socket programming.",
      highlights: [
        "Client-server architecture",
        "Real-time messaging",
        "Java socket programming",
        "Network communication",
      ],
    }
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
    preview: {
      overview:
        "Reusable Java library for viewing, zooming, panning, and rendering high-resolution images.",
      highlights: [
        "Zoom and pan support",
        "Reusable Swing component",
        "Smooth image rendering",
        "Simple integration API",
      ],
    }
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
    preview: {
      overview:
        "Collection of reusable libraries simplifying development of 2D Java games.",
      highlights: [
        "Sprite management",
        "Animation system",
        "Tile map support",
        "Physics utilities",
      ],
    }
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
    preview: {
      overview:
        "Java library for importing and rendering 3D models inside custom graphics applications.",
      highlights: [
        "OBJ model loading",
        "OpenGL rendering",
        "Reusable graphics library",
        "Game development support",
      ],
    }
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
    preview: {
      overview:
        "Android application for recording income, expenses, and personal financial transactions.",
      highlights: [
        "Expense tracking",
        "Income management",
        "Local data storage",
        "Simple reporting",
      ],
    }
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
    preview: {
      overview:
        "Desktop application providing secure encryption and decryption for personal files.",
      highlights: [
        "AES and DES encryption",
        "File protection",
        "Binary and hexadecimal utilities",
        "Desktop application",
      ],
    }
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
    preview: {
      overview:
        "A fan-made 2D action game inspired by the classic GTA series, built as a learning project to explore game development concepts.",
      highlights: [
        "2D game engine",
        "Character movement and collision",
        "Physics and world interactions",
        "Custom level design",
      ],
    }
  },
];