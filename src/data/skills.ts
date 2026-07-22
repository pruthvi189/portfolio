export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Flask", "FastAPI"],
  },
  {
    name: "Languages",
    skills: ["Python", "Java", "C", "SQL"],
  },
  {
    name: "AI / ML",
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
  },
  {
    name: "Database",
    skills: ["MongoDB", "PostgreSQL", "SQLite"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];
