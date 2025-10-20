export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  gradient?: string;
}

export type Experience = {
  company: string;
  role: string;
  period: string;
  details: string[];
}

export const projects: Project[] = [
  {
    title: "Url Shortener ",
    description: "A serverless URL shortener built with AWS services",
    tech: ["React", "Python", "AWS", "Terraform"],
    link: "#",
    github: "https://github.com/rainUee/url-shortener",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack shopping platform with seamless payments",
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    link: "#",
    github: "#",
    gradient: "from-blue-400 to-purple-400"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather forecast with data visualization",
    tech: ["React", "D3.js", "API"],
    link: "#",
    github: "#",
    gradient: "from-pink-400 to-purple-400"
  },
  {
    title: "Task Management",
    description: "Collaborative project tool with real-time sync",
    tech: ["Vue.js", "Firebase"],
    link: "#",
    github: "#",
    gradient: "from-purple-400 to-indigo-400"
  }
];

export const experiences: Experience[] = [
  {
    company: 'Dalhousie University',
    role: 'MACS Student',
    period: 'Sep. 2024 – Present',
    details: [
      'Expanding expertise into full-stack development and cloud technologies through hands-on projects',
    ]
  },
  {
    company: 'Garena Online Private Limited',
    role: 'Front-End Engineer',
    period: 'Feb. 2022 – Nov. 2022',
    details: [
      'Built DevOps CMDB platform with React & TypeScript for real-time infrastructure monitoring',
      'Created low-code page builder using JSON Schema, reducing development time by 30%',
      'Refactored legacy PHP codebase into maintainable object-oriented architecture'
    ]
  },
  {
    company: 'Tezign (Shanghai) Information Technology',
    role: 'Front-End Engineer',
    period: 'Aug. 2020 – Jan. 2022',
    details: [
      'Developed Digital Asset Management SaaS platform with React + TypeScript',
      'Optimized state management with Zustand, improving home render by 25% and list load by 0.8s',
      'Established CI/CD pipeline with Jenkins & Docker for automated deployments'
    ]
  }
];

export const about = {
  title: 'About Me',
  paragraphs: [
    "I'm a Frontend-focused Full Stack Engineer who loves building beautiful and functional web applications. With expertise in modern web technologies, I create solutions that make a difference.",
    "I specialize in TypeScript, React, and Node.js, and I'm always excited to learn new technologies and tackle challenging problems."
  ],
  techTitle: 'Tech Stack'
};

export const skills: string[] = ["React/Next.js", "TypeScript", "TailwindCSS", "Python", "Node.js", "WebSockets", "Java", "Vue.js", "MongoDB", "PostgreSQL", "Docker", "AWS"];

export const hero = {
  name: 'Shiyu Huang',
  tagline: 'Full Stack Developer crafting beautiful and innovative digital experiences',
  links: {
    github: 'https://github.com/rainUee',
    linkedin: 'https://linkedin.com/in/shiyu-huang-69a473328/',
    mail: 'yuzi.lr@gmail.com'
  }
};
