export const site = {
  name: "Pruthvi Shah",
  title: "Full Stack & AI Developer",
  tagline:
    "Full Stack Developer & AI Automation Engineer building scalable web products and intelligent agentic pipelines.",
  email: "Pruthvi.shah12@gmail.com",
  github: "https://github.com/pruthvi189",
  linkedin: "https://www.linkedin.com/in/pruthvishah/",
  resumeUrl: "/resume.pdf",
  formspreeId: "xrbgzvdn",
} as const;

export const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Shipped", value: 12, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "+" },
  { label: "GitHub Contributions", value: 500, suffix: "+" },
] as const;

export const skills = [
  {
    category: "Frontend",
    number: "01",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    number: "02",
    items: [
      "Node.js",
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "AI / LLM",
    number: "03",
    items: [
      "LangChain",
      "OpenAI API",
      "RAG Systems",
      "Vector DBs",
      "TensorFlow",
      "Scikit-learn",
      "NLP",
    ],
  },
  {
    category: "DevOps & DB",
    number: "04",
    items: [
      "Docker",
      "AWS",
      "Git",
      "CI/CD",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
] as const;

export const experience = [
  {
    role: "ML Intern",
    company: "Thick Code",
    location: "Rajkot",
    period: "Jan 2026 — Apr 2026",
    bullets: [
      "Led model development on a 4-person team building a stock forecasting platform benchmarking ARIMA, Prophet, and LSTM models",
      "Applied core ML and data science foundations — NumPy, pandas, and applied statistics — to iterative, hands-on project work",
      "Independently designed and delivered 8+ applied ML projects on biweekly deadlines",
    ],
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "Gleamoro",
    location: "Bhavnagar",
    period: "May 2025 — Jun 2025",
    bullets: [
      "Built and owned an authentication/user-management REST API in Node.js on a 3-person team, deployed via Docker on Linux",
      "Reduced API response latency by an estimated 30% through query optimization and connection pooling",
      "Integrated React/Redux frontend with the authenticated API; diagnosed and fixed a race condition in concurrent requests",
    ],
  },
  {
    role: "B.Tech, Information Technology",
    company: "GCET — CVM University",
    location: "Anand",
    period: "May 2026",
    bullets: [
      "CGPA: 8.60 / 10",
      "Top 25/500 Finalist, CVMU Hackathon — built Medify, an AI medical assistant app",
      "Secretary, ISTE GCET Student Branch — organized technical events and managed member operations",
    ],
  },
] as const;

export const featuredProjects = [
  {
    title: "Football IQ AI",
    description:
      "A Retrieval-Augmented Generation application that answers football questions using information retrieved from a curated knowledge base.",
    tags: ["Python", "FastAPI", "LangChain", "ChromaDB", "Groq"],
    github: "https://github.com/pruthvi189/football-iq-ai",
    live: "#",
    slug: "football-iq-ai",
  },
  {
    title: "Stock Market Forecasting Dashboard",
    description:
      "A Flask web application for exploring historical stock data and forecasting future prices using ARIMA, Prophet, and LSTM models.",
    tags: ["Flask", "TensorFlow", "pmdarima", "scikit-learn", "pandas"],
    github: "https://github.com/pruthvi189/stock-market-analysis",
    live: "#",
    slug: "stock-market-analysis",
  },
  {
    title: "Medify — AI Medical Assistant",
    description:
      "A cross-platform React Native app with AI-powered medical report analysis, OCR for handwritten prescriptions, and real-time patient assistance.",
    tags: ["React Native", "Flask", "MongoDB", "OpenCV", "IBM Watson"],
    github: "https://github.com/pruthvi189/medify",
    live: "#",
    slug: "medify",
  },
] as const;

export const compactProjects = [
  { title: "AI Code Reviewer", tags: ["Python", "OpenAI", "GitHub API"] },
  { title: "Expense Tracker API", tags: ["Node.js", "Express", "MongoDB"] },
  { title: "Sentiment Analyzer", tags: ["Python", "NLP", "Transformers"] },
  { title: "Portfolio v1", tags: ["Next.js", "Tailwind", "Framer Motion"] },
  { title: "Task Scheduler", tags: ["Python", "FastAPI", "Redis"] },
  { title: "Chat Application", tags: ["React", "Socket.io", "Node.js"] },
  { title: "URL Shortener", tags: ["Django", "PostgreSQL", "Docker"] },
] as const;
