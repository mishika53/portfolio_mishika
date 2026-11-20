// src/data.js
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = {
  github: "https://github.com/mishika53",
  linkedin: "#",
  leetcode: "#",
};

export const stats = [
  { label: "CGPA", value: "8.27/10" },
  { label: "DSA Problems Solved", value: "600+" },
  { label: "LeetCode Rating", value: "1715" },
  { label: "Graduation", value: "2027" },
];

export const skills = {
  "Programming Languages": ["Java", "C++", "JavaScript", "SQL"],
  "Frontend": ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI"],
  "Backend": ["Java", "Spring Boot", "REST APIs", "JWT Authentication"],
  "Databases": ["MySQL", "PostgreSQL"],
  "Core CS": ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  "AI Fundamentals": ["Generative AI", "LLMs", "RAG Concepts"],
  "Tools": ["Git", "GitHub", "Postman", "VS Code"],
};

export const projects = [
  {
    title: "MediLink 360",
    description: "Full‑stack healthcare platform with appointment booking, emergency chat, and doctor/patient management.",
    tech: ["React.js", "Spring Boot", "Java", "MySQL", "JWT", "REST APIs"],
    github: "#",
    live: "#",
  },
  {
    title: "GoalForge",
    description: "Full‑stack goal‑tracking app with analytics dashboards and AI‑driven recommendations.",
    tech: ["React.js", "Spring Boot", "Java", "MySQL", "JWT", "REST APIs", "Generative AI"],
    github: "#",
    live: "#",
  },
];

export const achievements = [
  "600+ DSA Problems Solved on LeetCode & GeeksforGeeks",
  "LeetCode Rating: 1715",
  "Codeforces Rating: 1100",
  "Silver Certificate in NPTEL Course",
  "Active participation in competitive programming contests",
];

export const education = [
  {
    institution: "Chandigarh University",
    degree: "B.E. Computer Science & Engineering",
    period: "2023 – 2027",
    details: "CGPA: 8.27/10",
  },
  {
    institution: "Police Public School",
    degree: "Class XII",
    period: "",
    details: "80%",
  },
  {
    institution: "St. Xavier's School",
    degree: "Class X",
    period: "",
    details: "90.45%",
  },
];
