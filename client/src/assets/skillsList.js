export const skillsByCategory = {
  Programming: [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "C",
    "C++",
    "C#",
    "Go",
    "Rust",
    "PHP",
    "Kotlin",
    "Swift",
  ],

  "Web Development": [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Angular",
    "Vue.js",
    "Node.js",
    "Express.js",
    "REST API",
    "GraphQL",
  ],

  Database: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Firebase", "Redis"],

  "Cloud & DevOps": [
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Git",
    "GitHub",
    "CI/CD",
    "Linux",
  ],

  "Data Science": [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Power BI",
    "Tableau",
    "Machine Learning",
    "Deep Learning",
  ],

  "UI/UX Design": [
    "Figma",
    "Adobe XD",
    "Photoshop",
    "Illustrator",
    "Wireframing",
    "Prototyping",
    "User Research",
  ],

  Networking: ["TCP/IP", "DNS", "Routing", "Switching", "Cisco", "CCNA", "VPN"],

  Cybersecurity: [
    "Ethical Hacking",
    "Penetration Testing",
    "OWASP",
    "Burp Suite",
    "Kali Linux",
    "SIEM",
    "Network Security",
  ],

  Management: [
    "Agile",
    "Scrum",
    "Jira",
    "Project Management",
    "Leadership",
    "Team Management",
  ],

  Marketing: [
    "SEO",
    "SEM",
    "Google Ads",
    "Meta Ads",
    "Content Marketing",
    "Email Marketing",
    "Social Media Marketing",
  ],
};

// Flat list (useful anywhere)
export const allSkills = Object.values(skillsByCategory).flat();
