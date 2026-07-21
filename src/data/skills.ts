export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Machine Learning & AI",
    skills: [
      "Deep Learning",
      "Neural Networks (LSTM)",
      "RAG Systems",
      "Time Series Forecasting",
      "NLP",
      "Computer Vision (OCR)",
      "Scikit-learn",
      "TensorFlow/Keras",
      "statsmodels",
      "pmdarima",
    ],
  },
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "C/C++", "Java"],
  },
  {
    name: "Data Science",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Jupyter",
      "OpenCV",
    ],
  },
  {
    name: "Backend & Web",
    skills: [
      "FastAPI",
      "Flask",
      "Django",
      "Node.js",
      "React",
      "Next.js",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "SQLite",
    ],
  },
  {
    name: "Cloud & Tools",
    skills: [
      "AWS",
      "Docker",
      "Git/GitHub",
      "Postman",
      "Figma",
      "LangChain",
      "ChromaDB",
    ],
  },
];
