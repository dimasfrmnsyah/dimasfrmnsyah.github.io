import type { EducationItem } from "@/lib/types";

export const education: EducationItem[] = [
  {
    institution: "Universitas Gadjah Mada",
    degree: "MCS (Master of Computer Science)",
    period: "2024 — 2026",
    location: "Yogyakarta",
    description:
      "Master's program focused on research and strengthening computer science fundamentals.",
    highlights: [
      "Completed master's degree",
      "Advanced systems and software engineering focus"
    ],
    focus: ["Computer Science", "Systems", "Software Engineering"]
  },
  {
    institution: "Indonesian Computer University",
    degree: "Informatics Engineering",
    period: "2015 — 2020",
    location: "Bandung",
    description:
      "Undergraduate program focused on software engineering and system development.",
    highlights: [
      "Completed Informatics Engineering program",
      "Built strong software engineering fundamentals"
    ],
    focus: ["Software Engineering", "Databases", "Programming"]
  },
  {
    institution: "SMAN 26 Bandung",
    degree: "Senior High School",
    period: "2012 — 2015",
    location: "Bandung",
    description:
      "High school education with a foundation in science and technology.",
    highlights: ["Graduated from SMAN 26 Bandung"],
    focus: ["Science", "Technology"]
  }
];
