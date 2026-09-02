// ============================================================================
//  SITE CONFIG — edit EVERYTHING about your site in this ONE file.
//
//  You never need to touch the page/component files. Sections below:
//    1. SETTINGS        — accent color
//    2. PAGE TEXT       — headings + intro paragraphs of each page
//    3. RESUME          — name, title, summary, contact, experience,
//                         education, skills (the home page)
//    4. PROJECTS        — the cards on /projects
//    5. CERTIFICATIONS  — the cards on /certifications
//    6. CONTACT SECTION — heading, blurb, optional Formspree form
//
//  Anything marked "(sample)" is placeholder content — replace it with your
//  real info. Optional fields (marked with ?) can simply be deleted.
// ============================================================================

// ----------------------------------------------------------------------------
// Types — these document every field you can use. No need to edit them.
// ----------------------------------------------------------------------------

export interface SiteSettings {
  /** The single accent color used for links, headings, and highlights. */
  accentColor: string;
  /** Show the subtle animated geometric shapes behind the page. */
  animatedBackground: boolean;
}

export interface PageText {
  projectsTitle: string;
  projectsIntro: string;
  certificationsTitle: string;
  certificationsIntro: string;
}

export interface ContactInfo {
  email: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string; // e.g. "Jun 2023"
  endDate: string; // "Present" is allowed
  location?: string;
  highlights: string[]; // resume bullet points
}

export interface EducationItem {
  school: string;
  degree: string; // e.g. "B.S. Computer Science"
  startDate?: string;
  endDate?: string;
  details?: string[]; // GPA, honors, relevant coursework
}

export interface SkillGroup {
  category: string; // e.g. "Languages", "Frameworks", "Tools"
  skills: string[];
}

export interface Resume {
  name: string;
  title: string;
  summary: string;
  /**
   * Path to your resume PDF inside the public/ folder, e.g. "/resume.pdf"
   * (drop the file at public/resume.pdf). When set, a "Download Resume"
   * button appears under your contact info on the home page.
   * Delete this line to hide the button.
   */
  resumePdf?: string;
  contact: ContactInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
}

export interface Project {
  name: string;
  description: string;
  techStack: string[]; // rendered as tags
  repoUrl?: string;
  liveUrl?: string;
  /**
   * Optional screenshot shown at the top of the project card. Drop the image
   * into the public/ folder (e.g. public/screenshots/taskflow.png) and
   * reference it from the site root: "/screenshots/taskflow.png" — the site
   * adds the GitHub Pages path prefix for you. Landscape (16:9) images look
   * best; anything else is center-cropped. Delete to show a text-only card.
   */
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  /** Optional, e.g. "Mar 2025". Delete this line if you don't want to show a date. */
  issueDate?: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string; // verification link
  badgeImage?: string; // reserved for future use — drop the file in public/ and reference it from the site root, e.g. "/badges/aws.png"
}

export interface Publication {
  /** Paper title. */
  title: string;
  /** Where it was published, e.g. "IRJET (Research Journal)". */
  venue: string;
  /** Optional, e.g. "Jun 2023". Delete this line to omit it. */
  date?: string;
  /** Optional link to the paper (PDF or landing page). */
  url?: string;
}

export interface ContactSectionConfig {
  /** Heading of the section at the bottom of the home page, e.g. "Get in touch". */
  heading: string;
  /** Short invitation paragraph shown under the heading. */
  blurb: string;
  /**
   * Optional Formspree endpoint, e.g. "https://formspree.io/f/yourFormId".
   * Create a free form at formspree.io and paste its endpoint here to show a
   * working name/email/message contact form — it posts straight to Formspree,
   * so it works on this static site with no server or JavaScript.
   * Delete this line to show a simple "Email me" button (uses contact.email)
   * plus your GitHub/LinkedIn links instead.
   */
  formspreeEndpoint?: string;
}

export interface SiteConfig {
  settings: SiteSettings;
  pageText: PageText;
  resume: Resume;
  projects: Project[];
  certifications: Certification[];
  publications: Publication[];
  contactSection: ContactSectionConfig;
}

// ============================================================================
// 1. SETTINGS
// ============================================================================

const settings: SiteSettings = {
  accentColor: "#2563eb", // blue — change once, restyles the whole site
  animatedBackground: true, // floating geometric shapes behind the page
};

// ============================================================================
// 2. PAGE TEXT
// ============================================================================

const pageText: PageText = {
  projectsTitle: "Projects",
  projectsIntro:
    "A selection of things I've built. Source code and live demos are linked where available.",
  certificationsTitle: "Certifications & Research",
  certificationsIntro:
    "Credentials I've earned and research I've published, with links where available.",
};

// ============================================================================
// 3. RESUME (the home page)
// ============================================================================

const resume: Resume = {
  name: "Danny Austin",
  title: "Software Developer",
  summary:
    "Recent computer science graduate and software engineer with strong experience in " +
    "full-stack and distributed systems, building production-like projects from the ground up. " +
    "Hands-on with TypeScript/React/Next.js, Go, C++23, PostgreSQL, Redis, and modern DevOps " +
    "practices including Docker, Kubernetes (k3s), GitHub Actions CI/CD, and Dapr. A proven " +
    "collaborator and communicator through end-to-end design, rapid iteration with peers, and " +
    "clear documentation. Eager to join a fast-paced team to own features, optimize workflows, " +
    "and ship scalable systems.",
  // resumePdf: "/resume.pdf", // (sample) drop your PDF at public/resume.pdf, then uncomment
  contact: {
    email: "dannyaustin891@gmail.com",
    location: "Tampa, FL",
    githubUrl: "https://github.com/DannyAustin",
    linkedinUrl: "https://www.linkedin.com/in/dannyaustinb",
  },
  experience: [
    {
      company: "Matching Donors Inc",
      role: "AI Software Developer",
      startDate: "Mar 2026",
      endDate: "Present",
      location: "Canton, MA · Remote",
      highlights: [
        "Building an AI-powered content-generation platform that creates plain-language medical articles from trusted, vetted research and news sources, with source-based fact checking before publication.",
        "Producing high-quality, search-optimized educational content to steadily grow organic traffic and expand awareness of MatchingDonors' organ-donor matching services.",
      ],
    },
    {
      company: "University of North Carolina at Charlotte",
      role: "Graduate Teaching Assistant",
      startDate: "Aug 2025",
      endDate: "Dec 2025",
      location: "Charlotte, NC · On-site",
      highlights: [
        "Delivered actionable feedback while grading programming assignments, Python projects, and assessments for a class of 70+ students, which helped strengthen their problem-solving skills and algorithmic approach.",
        "Conducted detailed code reviews of individual student projects and led a live coding demonstration, helping students make stronger modeling decisions and develop more effective solutions.",
      ],
    },
    {
      company: "Chegg India (Freelance)",
      role: "Subject Matter Expert",
      startDate: "Mar 2023",
      endDate: "Dec 2023",
      location: "Bengaluru, India · Remote",
      // TODO: add 1-2 bullet points describing what you did at Chegg.
      highlights: [],
    },
  ],
  education: [
    {
      school: "University of North Carolina at Charlotte",
      degree: "M.S. Computer Science",
      startDate: "2024",
      endDate: "2025",
      details: [
        "Relevant coursework: Software System Design and Implementation, Artificial Intelligence, Algorithms and Data Structures, Database Systems",
      ],
    },
    {
      school: "REVA University",
      degree: "B.Tech. Computer Science and Engineering",
      startDate: "2019",
      endDate: "2023",
    },
  ],
  skills: [
    {
      category: "Languages",
      skills: [
        "C++",
        "JavaScript",
        "TypeScript",
        "Go",
        "Python",
        "SQL",
        "HTML",
        "CSS",
        "Bash",
        "Rust",
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Redux",
        "Django",
        "Tailwind CSS",
        "FastAPI",
        "JSON/AJAX",
        "STL",
      ],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite"],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Git",
        "GitLab",
        "Docker",
        "Jenkins",
        "Kubernetes",
        "GitHub Actions",
        "JWT Auth",
        "AWS",
        "Postman",
        "CMake",
        "WebSocket",
        "Firebase",
        "Vercel",
        "VS Code",
        "Linux",
      ],
    },
    {
      category: "Methodologies",
      skills: ["Agile CI/CD", "RESTful APIs", "Scrum"],
    },
    {
      category: "AI Tools",
      skills: [
        "GitHub Copilot",
        "Claude Code",
        "OpenClaw",
        "Cursor",
        "Windsurf",
        "ChatGPT 5.2",
        "Kimi K2.5",
      ],
    },
  ],
};

// ============================================================================
// 4. PROJECTS (the /projects page)
// ============================================================================

const projects: Project[] = [
  {
    name: "MedResearch Blog",
    description:
      "An autonomous AI publishing platform for medical news, built at Matching Donors. A scheduled pipeline pulls sources from PubMed, Semantic Scholar and curated RSS feeds, has an LLM draft a plain-language article with inline citations, then fact-checks every claim against those same sources. Only fully verified articles publish automatically — anything uncertain is held as a draft for editorial review. Ongoing work; the repository is private.",
    techStack: ["Next.js", "TypeScript", "Supabase", "Groq LLM", "Vercel"],
    liveUrl: "https://medresearch-blog.vercel.app",
    image: "/screenshots/medresearch-blog.png",
  },
  {
    name: "Campus Marketplace",
    description:
      "A full-stack student marketplace: post items for sale with a photo, browse with server-side search, category, condition and price filters, then check out from a cart. Checkout claims each item with a single conditional MongoDB update, so the same item can never be sold to two buyers.",
    techStack: ["React", "Go", "MongoDB", "JWT", "React Router"],
    repoUrl: "https://github.com/DannyAustin/campus-marketplace",
    image: "/screenshots/campus-marketplace.png",
  },
  {
    name: "Tic-Tac-Toe (Win32 + Browser)",
    description:
      "A native Windows game built directly on the Win32 API, with an unbeatable minimax opponent and a two-player mode. Game logic stays in pure C++ separate from the GUI, so an exhaustive test suite can prove the AI never loses — and the same logic is ported to JavaScript for the playable browser version.",
    techStack: ["C++17", "Win32 API", "CMake", "CTest", "JavaScript"],
    repoUrl: "https://github.com/DannyAustin/tic-tac-toe-gui",
    liveUrl: "https://dannyaustin.github.io/tic-tac-toe-gui/",
    image: "/screenshots/tic-tac-toe.png",
  },
  {
    name: "Portfolio Website",
    description:
      "This site — a resume-style portfolio with project and certification pages, statically exported and deployed to GitHub Pages.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Pages"],
    repoUrl: "https://github.com/DannyAustin/DannyAustin.github.io",
  },
];

// ============================================================================
// 5. CERTIFICATIONS (the /certifications page)
// ============================================================================

const certifications: Certification[] = [
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    // issueDate: "Mon YYYY", // add the month/year if you want it shown
    credentialUrl:
      "https://coursera.org/share/ab0fdef630e9b6aec201d452f584b547",
  },
  {
    name: "Data Engineering",
    issuer: "AWS Academy",
    // issueDate: "Mon YYYY",
    credentialUrl:
      "https://www.credly.com/badges/99aea9ea-c4b5-4d6c-a88d-90a8fbf0503e/print",
  },
];

// Research papers and publications, shown under "Research" on the same page.
const publications: Publication[] = [
  {
    title: "Image Forgery Detection Using Deep Neural Network",
    venue: "IRJET (International Research Journal of Engineering and Technology)",
    // date: "Jun 2023", // add if you want the date shown
    url: "https://www.irjet.net/archives/V10/i6/IRJET-V10I6167.pdf",
  },
];

// ============================================================================
// 6. CONTACT SECTION (bottom of the home page)
// ============================================================================

const contactSection: ContactSectionConfig = {
  heading: "Get in touch",
  blurb:
    "Whether you have a question, an opportunity, or just want to say hi — " +
    "my inbox is open.",
  // formspreeEndpoint: "https://formspree.io/f/yourFormId", // (sample) create a free form at formspree.io, then uncomment
};

// ----------------------------------------------------------------------------
// Assembled config — the site reads everything from this export.
// ----------------------------------------------------------------------------

export const siteConfig: SiteConfig = {
  settings,
  pageText,
  resume,
  projects,
  certifications,
  publications,
  contactSection,
};
