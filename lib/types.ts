export type Skill = {
  name: string;
  level: number;
  description?: string;
};

export type SkillGroup = {
  title: string;
  icon: string;
  skills: Skill[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  features: string[];
  image: string;
  imageClassName?: string;
  category: string;
  links: {
    demo?: string;
    github?: string;
  };
  highlights?: string[];
};

export type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  company: string;
  image: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  focus?: string[];
};

export type Social = {
  label: string;
  href: string;
  icon: string;
};

export type Stat = {
  label: string;
  value: string;
  description?: string;
};
