import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "sip3pl",
    title: "REST SIP3PL",
    description:
      "REST API for Android and web applications that enables field attendance and progress reporting.",
    role: "Backend Developer",
    stack: ["Node.js", "PostgreSQL", "REST API"],
    features: [
      "Location-based attendance",
      "Work progress reporting",
      "Web & mobile access",
      "Android app integration"
    ],
    image: "/images/projects/sip3pl.jpg",
    imageClassName: "object-contain bg-zinc-950/40",
    category: "Government",
    links: {},
    highlights: ["Dinas Perumahan Sumedang"]
  },
  {
    id: "baresto",
    title: "BARESTO POS",
    description:
      "REST APIs for an F&B POS application covering orders, sales reporting, and inventory.",
    role: "Backend Developer",
    stack: ["Node.js", "REST API"],
    features: [
      "Order management",
      "Sales reporting",
      "Ingredient inventory",
      "Access for staff and customers"
    ],
    image: "/images/projects/baresto3.png",
    category: "POS",
    links: {},
    highlights: ["F&B Operations"]
  },
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
    links: {
      demo: "https://carcirus.com"
    },
    highlights: ["California car rental"]
  },
  {
    id: "meeting-arrenger",
    title: "Meeting Arrenger & Guest Book",
    description:
      "Web app for Bappeda Sumedang: daily activities schedule and a guest book with device notifications.",
    role: "Backend & Web Developer",
    stack: ["PHP", "CodeIgniter 3", "MySQL"],
    features: [
      "Digital guest book",
      "Meeting notifications to smartphones",
      "Activity scheduling",
      "Admin panel"
    ],
    image: "/images/projects/meeting.png",
    category: "Government",
    links: {},
    highlights: ["Bappeda Sumedang"]
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
    },
    highlights: ["Government CMS"]
  },
  {
    id: "cms-bpkad",
    title: "CMS BPKAD Sumedang",
    description: "CMS for managing content at BPKAD Kabupaten Sumedang.",
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
    },
    highlights: ["BPKAD Sumedang"]
  },
  {
    id: "pusjatan",
    title: "Material Construction Pusjatan",
    description:
      "Web app and mobile API to find nearby suppliers and inspect equipment.",
    role: "Backend & Web Developer",
    stack: ["PHP", "CodeIgniter 4", "REST API"],
    features: [
      "Nearest supplier search",
      "Construction equipment inspection",
      "Material management",
      "Monitoring dashboard"
    ],
    image: "/images/projects/pusjatan.png",
    category: "Infrastructure",
    links: {},
    highlights: ["Pusjatan Bandung"]
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
