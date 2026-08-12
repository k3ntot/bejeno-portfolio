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
  focus: "QA • UI/UX • Automation • AI-Assisted Development",
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
    "I am a fourth-year Information Technology student at Quezon City University with an interest in quality assurance, UI/UX development, software development, business automation, and emerging technologies. I enjoy exploring how technology can improve workflows, solve practical problems, and make processes more efficient.",
    "I am particularly interested in AI-assisted programming, UI/UX design, idea development, process improvement, and learning how professional development teams build and maintain reliable software.",
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
  { name: "UI / UX Design", level: "Familiar", category: "Design" },
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
  features: string[];       // key features list
  period?: string;          // e.g. "Jan - May 2025"
  note?: string;            // optional development note
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  category: string;
  image?: string;           // path to image in /public
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: "project-01",
    number: "01",
    title: "HydroXeg",
    description:
      "A Smart Recycling Machine with Automated Waste Segregation and Incentivized Water Dispensing System. Developed to address waste management issues and promote environmental sustainability.",
    features: [
      "Responsive marketing landing page with Features, How It Works, Benefits, and Contact sections",
      "Firebase Auth-aware login — shows 'Maintenance' when already logged in",
      "Admin dashboard with real-time bin stats: total bins, collections, capacity, and water level",
      "Bins tab — live Paper, Tin Cans, and Water level progress bars with last collection/refill times",
      "Maintenance tab — quick actions (Empty Bin, Clear Logs, Report Issue) with filterable system logs",
      "Real-time notifications for bin capacity warnings (≥75%) and water level alerts (<30%)",
    ],
    period: "Jan – May 2025",
    technologies: ["ESP32", "Arduino", "HTML", "JavaScript", "CSS", "Firebase RTDB", "IoT Sensors"],
    githubUrl: "#",
    demoUrl: "",
    category: "IoT / Web",
    image: "/hydroxeg.png",
    imageAlt: "HydroXeg recycling and water dispensing system logo",
  },
  {
    id: "project-02",
    number: "02",
    title: "Budget Planner",
    description:
      "A Windows Forms desktop application for personal budget planning using the 50/30/20 rule. Users can register, log in, plan their budget by user type, track expenses, and review budget history.",
    features: [
      "Two budget modes: Student (allowance with Daily/Weekly/Monthly frequency) and Worker (monthly income)",
      "User registration and login with SHA-256 hashed passwords",
      "50/30/20 rule enforcement with live animated progress bars",
      "Add and remove itemized expenses per category (Needs, Wants, Savings)",
      "Pie chart summary of Needs, Wants, and Savings breakdown",
      "Save, view, and delete personal budget history sessions",
    ],
    note: "This system was created as a school project — its design and features prioritize learning objectives over production-ready functionality.",
    period: "Aug – Dec 2024",
    technologies: ["VB.Net", "Windows Forms", "SQL Server LocalDB"],
    githubUrl: "#",
    demoUrl: "",
    category: "Desktop App",
    image: "/budget-planner.png",
    imageAlt: "Budget Planner desktop application screenshot showing the category selection screen",
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
  icon: string;
}

export const interests: Interest[] = [
  {
    id: "interest-01",
    title: "Business Automation",
    description:
      "Interested in business automation and process improvement — exploring no-code/low-code tools and AI to simplify repetitive business processes and boost efficiency.",
    icon: "⚙️",
  },
  {
    id: "interest-02",
    title: "Process Improvement",
    description:
      "Interested in making workflows more practical and efficient, and enjoy brainstorming ideas that can help businesses or communities solve real problems.",
    icon: "📈",
  },
  {
    id: "interest-03",
    title: "UI / UX Development",
    description:
      "Exploring user interface and experience design — interested in building interfaces that are both functional and visually clean.",
    icon: "🎨",
  },
  {
    id: "interest-04",
    title: "AI & Emerging Technology",
    description:
      "Exploring AI-assisted programming and new developments in the technology landscape, with an interest in how AI can support practical development work.",
    icon: "🤖",
  },
  {
    id: "interest-05",
    title: "Technology",
    description:
      "Reading technology blogs and keeping up with developments across software, hardware, and the IT industry.",
    icon: "💡",
  },
  {
    id: "interest-06",
    title: "Strategy Games",
    description:
      "Enjoying strategy games that encourage planning, resource management, and critical decision-making.",
    icon: "♟️",
  },
];
