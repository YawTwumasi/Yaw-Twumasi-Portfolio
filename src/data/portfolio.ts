import tencareImg from "@/assets/project-tencare.png";

export const profile = {
  name: "Yaw Twumasi",
  title: "Frontend Developer · UI/UX Designer",
  tagline: "Crafting clean, modern, and interactive web experiences through code and design.",
  location: "Tema Community 22, Accra, Ghana",
  email: "twumasiy23@gmail.com",
  phone: "0257492161",
  whatsapp: "233201575110",
  github: "#",
};

export const skillGroups = [
  {
    name: "Frontend Development",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    name: "UI / UX Design",
    items: [
      { name: "Wireframing", level: 85 },
      { name: "UI Design", level: 88 },
      { name: "UX Design", level: 80 },
    ],
  },

  {
    name: "Other",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Responsive Design", level: 92 },
      { name: "Excel Data Entry", level: 88 },
      { name: "Problem Solving", level: 90 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: "Web App" | "Design";
  description: string;
  long: string;
  stack: string[];
  live?: string;
  code?: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "tencare",
    title: "TENCARE",
    category: "Web App",
    description: "Mental health assessment web app that predicts patient well-being.",
    long: "TENCARE is a mental health assessment platform that guides patients through structured questionnaires and predicts overall mental well-being using rule-based scoring. It offers therapist-friendly dashboards, secure sessions, and personalized recommendations.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    live: "https://tencare-7nwi.vercel.app/",
    code: "#",
    image: tencareImg,
    featured: true,
  },
];



export const experience = [
  {
    role: "Data Entry Intern & Software Developer",
    company: "Tema Oil Refinery",
    period: "3 Months",
    points: [
      "Performed high-volume data entry using Microsoft Excel with strict accuracy standards.",
      "Assisted the software team on internal tooling and workflow improvements.",
      "Improved data pipeline accuracy and reduced manual review time.",
    ],
  },
];

export const education = [
  {
    degree: "Diploma in Information Technology",
    school: "Central University, Ghana",
    period: "Level 400 · Currently studying",
    points: [
      "Focused on software engineering, web technologies and UI design.",
      "Building portfolio projects alongside coursework.",
    ],
  },
];
