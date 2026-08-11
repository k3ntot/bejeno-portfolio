// ============================================================
// PORTFOLIO DATA — Edit all personal info here in one place
// ============================================================

export const siteConfig = {
  name: "John Kenneth Bejeno",
  firstName: "John Kenneth",
  role: "Fourth-Year Information Technology Student",
  university: "Quezon City University",
  program: "Bachelor of Science in Information Technology",
  yearLevel: "Fourth Year",
  focus: "QA • Automation • AI-Assisted Development",
  email: "bejenojohnkenneth@gmail.com",
  github: "https://github.com/k3ntot", // <-- replace with your GitHub URL
  resumeUrl: "https://john-kenneth-bejeno-cv.tiiny.site", // <-- replace with your actual resume file
  statusText: "Open to OJT Opportunities",
  seo: {
    title: "John Kenneth Bejeno | Information Technology Student",
    description:
      "Portfolio of John Kenneth Bejeno, a fourth-year Information Technology student at Quezon City University seeking an OJT opportunity and interested in QA, automation, AI-assisted programming, and technology.",
    ogImage: "/og-image.png",
    siteUrl: "https://bejeno-portfolio.vercel.app", // <-- update after deploy
  },
};

export const about = {
  heading: "Building practical solutions while continuously learning.",
  paragraphs: [
    "I am a fourth-year Information Technology student at Quezon City University with an interest in quality assurance, software development, business automation, and emerging technologies. I enjoy exploring how technology can improve workflows, solve practical problems, and make processes more efficient.",
    "I am particularly interested in AI-assisted programming, idea development, process improvement, and learning how professional development teams build and maintain reliable software.",
    "I am currently seeking an OJT / internship opportunity where I can apply my technical skills, contribute to real projects, and grow under the guidance of experienced professionals.",
  ],
};

export type SkillLevel = "Basic" | "Familiar" | "Working Knowledge" | "Intermediate";

export interface TechnicalSkill {
  name: string;
  level: SkillLevel;
  category: string;
}

export const technicalSkills: TechnicalSkill[] = [
  { name: "Microsoft Excel", level: "Intermediate", category: "Productivity" },
  { name: "HTML / CSS", level: "Working Knowledge", category: "Web" },
  { name: "Java", level: "Familiar", category: "Programming" },
  { name: "Git", level: "Familiar", category: "Tools" },
  { name: "Basic Machine Learning", level: "Basic", category: "AI / ML" },
  { name: "Google Workspace", level: "Intermediate", category: "Productivity" },
  { name: "Canva", level: "Working Knowledge", category: "Design" },
];

export const softSkills: string[] = [
  "Communication",
  "Teamwork",
  "Problem-Solving",
  "Time Management",
  "Adaptability",
  "Attention to Detail",
  "Critical Thinking",
  "Willingness to Learn",
];

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string; // set to "#" if not available
  demoUrl: string;   // set to "" to hide button
  category: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: "project-01",
    number: "01",
    title: "Project Title One",
    description:
      "A short description of this project. Replace this with what the project actually does, the problem it solves, and what you learned from it.",
    technologies: ["HTML", "CSS", "Java", "Git"],
    githubUrl: "#", // replace with real URL
    demoUrl: "",
    category: "Web Development",
    imageAlt: "Screenshot of Project Title One",
  },
  {
    id: "project-02",
    number: "02",
    title: "Project Title Two",
    description:
      "A short description of this project. Replace this with what the project actually does, the problem it solves, and what you learned from it.",
    technologies: ["Java", "Git"],
    githubUrl: "#",
    demoUrl: "",
    category: "Software Development",
    imageAlt: "Screenshot of Project Title Two",
  },
  {
    id: "project-03",
    number: "03",
    title: "Project Title Three",
    description:
      "A short description of this project. Replace this with what the project actually does, the problem it solves, and what you learned from it.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "#",
    demoUrl: "",
    category: "Web Development",
    imageAlt: "Screenshot of Project Title Three",
  },
  {
    id: "project-04",
    number: "04",
    title: "Project Title Four",
    description:
      "A short description of this project. Replace this with what the project actually does, the problem it solves, and what you learned from it.",
    technologies: ["Google Workspace", "Excel"],
    githubUrl: "#",
    demoUrl: "",
    category: "Automation",
    imageAlt: "Screenshot of Project Title Four",
  },
];

export interface Certification {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
  certificateUrl: string; // set to "" if not available yet
}

export const certifications: Certification[] = [
  {
    id: "cert-01",
    title: "Occupational Safety for IT Laboratories",
    organization: "Quezon City University",
    year: "2023",
    category: "Safety & Compliance",
    certificateUrl: "", // replace with actual URL or file path
  },
  {
    id: "cert-02",
    title: "Navigating the Digital Frontier: Trends, Innovation, and Cybersecurity in the Modern IT Landscape",
    organization: "Quezon City University",
    year: "2023",
    category: "Technology & Cybersecurity",
    certificateUrl: "",
  },
  {
    id: "cert-03",
    title: "Seminar on Cybersecurity Awareness and Data Privacy",
    organization: "Quezon City University",
    year: "2025",
    category: "Cybersecurity",
    certificateUrl: "",
  },
  {
    id: "cert-04",
    title: "A Spec-Driven Development Demonstration with Kiro",
    organization: "Quezon City University",
    year: "2026",
    category: "Software Development",
    certificateUrl: "",
  },
  {
    id: "cert-05",
    title: "Legal, Ethical, and Professional Issues in the Philippines Cyber Space",
    organization: "Quezon City University",
    year: "2026",
    category: "Ethics & Law",
    certificateUrl: "",
  },
];

export interface Interest {
  id: string;
  title: string;
  description: string;
  icon: string; // emoji icon — swap for an SVG if preferred
}

export const interests: Interest[] = [
  {
    id: "interest-01",
    title: "Business Automation",
    description:
      "Exploring ways technology can simplify repetitive business processes and increase operational efficiency.",
    icon: "⚙️",
  },
  {
    id: "interest-02",
    title: "Process Improvement",
    description:
      "Interested in making workflows more practical and efficient using structured thinking and the right tools.",
    icon: "📈",
  },
  {
    id: "interest-03",
    title: "AI & Emerging Technology",
    description:
      "Exploring AI-assisted programming, no-code/low-code tools, and new developments in the technology landscape.",
    icon: "🤖",
  },
  {
    id: "interest-04",
    title: "Technology",
    description:
      "Reading technology blogs and keeping up with developments across software, hardware, and the IT industry.",
    icon: "💡",
  },
  {
    id: "interest-05",
    title: "Strategy Games",
    description:
      "Enjoying strategy games that encourage planning, resource management, and critical decision-making.",
    icon: "♟️",
  },
];
