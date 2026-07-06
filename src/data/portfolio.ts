import tencareImg from "@/assets/project-tencare.png";
import posterNeedDesign from "@/assets/gallery-poster-need-design.jpg";
import posterFoodFlyer from "@/assets/gallery-poster-food-flyer.jpg";
import posterWelcomeSchool from "@/assets/gallery-poster-welcome-school.jpg";
import posterNextSemester from "@/assets/gallery-poster-next-semester.jpg";
import posterCreativeAgency from "@/assets/gallery-poster-creative-agency.jpg";
import gFlyer1 from "@/assets/gallery-flyer-1.jpg";
import flyerRevolutionary from "@/assets/gallery-flyer-revolutionary.jpg";
import flyerNewMonth from "@/assets/gallery-flyer-new-month.jpg";
import gLogo1 from "@/assets/gallery-logo-1.jpg";
import logoAfroWoman from "@/assets/gallery-logo-afro-woman.jpg";
import logoAura from "@/assets/gallery-logo-aura.jpg";
import logoWomanProfile from "@/assets/gallery-logo-woman-profile.jpg";
import logoEmberleaf from "@/assets/gallery-logo-emberleaf.jpg";
import logoTribalShield from "@/assets/gallery-logo-tribal-shield.jpg";

export const profile = {
  name: "Yaw Twumasi",
  title: "Frontend Developer · UI/UX Designer · Graphic Designer",
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
    name: "Graphic Design",
    items: [
      { name: "Adobe Photoshop", level: 82 },
      { name: "Branding", level: 78 },
      { name: "Poster Design", level: 85 },
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

export type GalleryItem = {
  id: string;
  title: string;
  category: "Posters" | "Flyers" | "Logos";
  image: string;
  featured?: boolean;
};

export const gallery: GalleryItem[] = [
  { id: "p1", title: "Graphic Design Promotion", category: "Posters", image: posterNeedDesign, featured: true },
  { id: "p2", title: "Sharon Eatery Food Flyer", category: "Posters", image: posterFoodFlyer, featured: true },
  { id: "p3", title: "JCCF Welcome Campaign", category: "Posters", image: posterWelcomeSchool },
  { id: "p4", title: "Next Semester Orientation", category: "Posters", image: posterNextSemester },
  { id: "p5", title: "Webmart Creative Agency Flyer", category: "Posters", image: posterCreativeAgency },
  { id: "f1", title: "Event Flyer", category: "Flyers", image: gFlyer1 },
  { id: "f2", title: "Revolutionary Lifestyle Campaign", category: "Flyers", image: flyerRevolutionary, featured: true },
  { id: "f3", title: "Happy New Month Flyer", category: "Flyers", image: flyerNewMonth },
  { id: "l1", title: "Y Monogram", category: "Logos", image: gLogo1 },
  { id: "l2", title: "Afro Nature Woman", category: "Logos", image: logoAfroWoman, featured: true },
  { id: "l3", title: "Aura Brand Logo", category: "Logos", image: logoAura },
  { id: "l4", title: "Woman & Leaf Profile", category: "Logos", image: logoWomanProfile },
  { id: "l5", title: "Emberleaf Logo", category: "Logos", image: logoEmberleaf },
  { id: "l6", title: "Tribal Shield Mark", category: "Logos", image: logoTribalShield },
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
