import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", level: 85, description: "Component architecture" },
      { name: "Next.js", level: 82, description: "App Router, SSR" },
      { name: "JavaScript & jQuery", level: 86, description: "DOM & UI logic" },
      { name: "HTML, CSS, Bootstrap", level: 84, description: "Layout & UI" }
    ]
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "PHP Native", level: 88, description: "Core backend" },
      { name: "Laravel", level: 86, description: "MVC & REST API" },
      { name: "CodeIgniter", level: 84, description: "CI3 & CI4" },
      { name: "Node.js", level: 87, description: "REST API" },
      { name: "Express", level: 85, description: "Services" },
      { name: "NestJS", level: 80, description: "Modular backend" },
      { name: "Golang", level: 70, description: "Services & tooling" },
      { name: "Flask", level: 68, description: "Python API" }
    ]
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", level: 85, description: "Relational DB" },
      { name: "PostgreSQL", level: 82, description: "SQL & schema" },
      { name: "MongoDB", level: 78, description: "NoSQL document" },
      { name: "SQL & NoSQL", level: 80, description: "Querying" }
    ]
  },
  {
    title: "Architecture",
    icon: "cloud",
    skills: [
      { name: "Microservices", level: 78, description: "Service design" },
      { name: "System Security", level: 82, description: "Hardening & auth" }
    ]
  },
  {
    title: "AI / LLM",
    icon: "brain",
    skills: [
      { name: "LLM Integration", level: 70, description: "API integration" },
      { name: "Generative AI", level: 68, description: "Use-case design" },
      { name: "Prompt Engineering", level: 72, description: "System prompts" },
      { name: "RAG", level: 65, description: "Retrieval workflows" }
    ]
  }
];
