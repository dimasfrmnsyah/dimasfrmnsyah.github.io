import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "carcirus",
    title: "Carcirus Car Rental",
    description:
      "Car rental platform in California with end-to-end booking, fleet, and customer management.",
    role: "Full-Stack Developer",
    stack: ["Next.js", "Node.js", "MySQL", "REST API"],
    features: [
      "Vehicle catalog & availability",
      "Booking & reservation flow",
      "Fleet and pricing management",
      "Customer records & admin tools"
    ],
    image: "/images/projects/carcirus.jpeg",
    category: "Mobility",
    links: {},
    highlights: ["California car rental"]
  },
  {
    id: "cms-bappeda",
    title: "CMS Bappeda Sumedang",
    description:
      "Content management system for Bappeda Sumedang news, photos, and videos.",
    role: "Backend & Web Developer",
    stack: ["PHP", "CodeIgniter 3", "MySQL"],
    features: [
      "News management",
      "Photo & video gallery",
      "Admin dashboard",
      "Content access control"
    ],
    image: "/images/projects/cms-bappeda.png",
    category: "CMS",
    links: {
      demo: "https://example.com"
    },
    highlights: ["Government CMS"]
  },
  {
    id: "cms-bpkad",
    title: "CMS BPKAD Sumedang",
    description:
      "CMS for managing content at BPKAD Kabupaten Sumedang.",
    role: "Backend & Web Developer",
    stack: ["PHP", "CodeIgniter 3", "MySQL"],
    features: [
      "News management",
      "Photo & video uploads",
      "Data dashboards",
      "Admin access control"
    ],
    image: "/images/projects/bpkad.png",
    category: "CMS",
    links: {
      demo: "https://example.com"
    },
    highlights: ["BPKAD Sumedang"]
  },
  {
    id: "karlo-api",
    title: "REST API for Karlo",
    description:
      "API for web and Android apps on one of Indonesia's largest logistics platforms.",
    role: "Backend Developer",
    stack: ["Node.js", "MongoDB", "REST API"],
    features: [
      "Logistics service integration",
      "Trip data management",
      "Authentication & authorization",
      "Service monitoring"
    ],
    image: "/images/projects/karlo.png",
    category: "Logistics",
    links: {
      demo: "https://karlo.id"
    },
    highlights: ["Platform logistik nasional"]
  },
  {
    id: "lerero",
    title: "API for LERERO",
    description:
      "Learning platform with 10 core modules and analytics to improve learning outcomes.",
    role: "Backend Developer",
    stack: ["Node.js", "REST API"],
    features: [
      "Modular learning stages",
      "Learning analytics",
      "Module integration",
      "Admin dashboard"
    ],
    image: "/images/projects/lms-lerero.png",
    category: "EdTech",
    links: {
      demo: "https://lerero.com"
    },
    highlights: ["Learning analytics"]
  }
];
