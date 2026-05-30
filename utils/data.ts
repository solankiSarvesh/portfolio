export interface Project {
  id: string;
  title: string;
  description: string;
  category: "AI-ML" | "FullStack" | "IoT-Embedded";
  image: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  tech: string[];
  type: "work" | "education";
}

export interface SkillCategory {
  title: string;
  skills: { name: string; percentage: number }[];
}

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeColor: "cyan" | "purple" | "blue" | "teal";
  desc: string;
}

export interface WorkflowNode {
  id: string;
  label: string;
  title: string;
  description: string;
  color: string;
}

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "AI-Enhanced Citation Prediction Model",
    description: "An advanced ML system predicting research paper citation statistics using XGBoost, Natural Language Processing (NLP), and fuzzy constraint validation structures. Leverages feature optimization and data parsing pipelines.",
    category: "AI-ML",
    image: "📊",
    tech: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "NumPy", "NLP"],
    github: "https://github.com/solankiSarvesh/Citation-Prediction-Model",
    demo: "https://citation-prediction-model-eo35ryzxo9gksgnomjq6wp.streamlit.app/",
    featured: true
  },
  {
    id: "proj-2",
    title: "Potentiometric Renal Health IoT App",
    description: "Android application linking via IoT to potentiometric sensors. Evaluates concentration levels of Potassium, Sodium, and active pH levels for early non-invasive detections of renal diseases.",
    category: "IoT-Embedded",
    image: "🏥",
    tech: ["Java", "Android Studio", "IoT Telemetry", "Bluetooth API"],
    github: "https://github.com/solankiSarvesh/Ion_Detection_app",
    demo: "https://github.com/solankiSarvesh/Ion_Detection_app",
    featured: true
  },
  {
    id: "proj-3",
    title: "Aethery Full-Stack E-Commerce Website",
    description: "A premium, fully-featured online marketplace named Aethery. Built to provide a seamless shopping experience with advanced herbal catalog listings, interactive shopping carts, order tracking flows, and responsive administration panels.",
    category: "FullStack",
    image: "🌿",
    tech: ["React.js", "Razorpay", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Eternitive-Herbals/store-web",
    demo: "https://github.com/Eternitive-Herbals/store-web",
    featured: true
  },
  {
    id: "proj-4",
    title: "AI-Powered Tic-Tac-Toe Game",
    description: "Algorithmic implementation of Tic-Tac-Toe powered by basic Minimax heuristics. Structured as the terminal release for an AI/ML verification program.",
    category: "AI-ML",
    image: "🎮",
    tech: ["Python", "AI Algorithms", "Minimax", "Game Logic"],
    github: "https://github.com/solankiSarvesh/Ai-powered-Tic-Tac-Toe",
    demo: "https://github.com/solankiSarvesh/Ai-powered-Tic-Tac-Toe",
    featured: false
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Research Intern",
    company: "BITS Pilani, Hyderabad",
    duration: "June 2025 - July 2025",
    description: [
      "Developed a potentiometric Android application measuring concentration levels of Potassium, Sodium, and pH levels, increasing analysis accuracy.",
      "Gained hands-on cleanroom fabrication expertise, working with thermal e-beam evaporators and sputter ion deposition systems to manufacture micro/nanochip semiconductor models."
    ],
    tech: ["Android Studio", "Java", "Semiconductor Fab", "E-beam Evaporation", "Sputter Deposition"],
    type: "work"
  },
  {
    id: "exp-2",
    role: "Software Engineering Intern",
    company: "DigiMind Technologies",
    duration: "June 2024 - July 2024",
    description: [
      "Collaborated to construct a responsive painting collection marketplace website using Django frameworks.",
      "Designed and integrated painting listings displays, responsive admin panels for media handling, and user feedback commenting systems."
    ],
    tech: ["Python", "Django", "JavaScript", "HTML5", "CSS3", "Database Ops"],
    type: "work"
  },
  {
    id: "exp-3",
    role: "B.Tech in Computer Science & Engineering (DS & AI)",
    company: "BML Munjal University (BMU)",
    duration: "2023 - 2027",
    description: [
      "Pursuing specialization in Data Science & Artificial Intelligence with an elite CGPA of 8.81.",
      "Engaged in advanced coursework covering Deep Learning, Machine Learning models, Object-Oriented Programming (OOP), and Distributed Systems."
    ],
    tech: ["Python", "C/C++", "Java", "SQL", "Pandas", "OOP Frameworks"],
    type: "education"
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", percentage: 92 },
      { name: "Java", percentage: 88 },
      { name: "C Language", percentage: 80 },
      { name: "JavaScript", percentage: 78 },
      { name: "HTML & CSS", percentage: 90 },
      { name: "SQL", percentage: 85 }
    ]
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "Next.js / React", percentage: 80 },
      { name: "Django Framework", percentage: 86 },
      { name: "Pandas & NumPy", percentage: 85 },
      { name: "Android Studio", percentage: 82 },
      { name: "Git & GitHub", percentage: 88 },
      { name: "MySQL / MongoDB", percentage: 84 }
    ]
  },
  {
    title: "Engineering Concepts",
    skills: [
      { name: "Data Science & AI", percentage: 85 },
      { name: "Machine Learning (XGBoost)", percentage: 84 },
      { name: "Natural Language Processing (NLP)", percentage: 80 },
      { name: "Object-Oriented Programming (OOP)", percentage: 88 },
      { name: "REST APIs & Agile Development", percentage: 82 }
    ]
  },
  {
    title: "Design & Presentation",
    skills: [
      { name: "Figma (UI/UX)", percentage: 75 },
      { name: "Canva Design", percentage: 80 },
      { name: "Technical Writing", percentage: 82 }
    ]
  }
];

export const credentialsData: Credential[] = [
  {
    id: "cred-1",
    title: "Semiconductor Fab & Microchips Training",
    issuer: "BITS Pilani, Hyderabad",
    date: "2025",
    badgeColor: "cyan",
    desc: "Hands-on cleanroom fabrication expertise utilizing thermal e-beam evaporators and sputter ion deposition systems."
  },
  {
    id: "cred-2",
    title: "PitchQuest Organizer & Lead",
    issuer: "BMU Entrepreneurship Cell",
    date: "2025",
    badgeColor: "purple",
    desc: "Coordinated and managed the PitchQuest event for revolutionary start-up ideas, commanding 100+ student pitches."
  },
  {
    id: "cred-3",
    title: "GD Goenka Singles Lawn Tennis Champion",
    issuer: "GD Goenka University",
    date: "2024",
    badgeColor: "blue",
    desc: "Awarded first place in the University Lawn Tennis Singles Category tournament representing BMU."
  },
  {
    id: "cred-4",
    title: "Python AI & ML Specialization",
    issuer: "BMU Academic Honors",
    date: "2024",
    badgeColor: "teal",
    desc: "Certified AI/ML Course completion, including building algorithmic Game-Theory AI players (Tic-Tac-Toe)."
  }
];

export const workflowPipeline: WorkflowNode[] = [
  {
    id: "step-1",
    label: "01",
    title: "Scoping & Ideas",
    description: "Defining data parameters and engineering scopes, mapping medical pH criteria or citation variables.",
    color: "#00f0ff"
  },
  {
    id: "step-2",
    label: "02",
    title: "Architecture & Design",
    description: "Drafting the DB schemas (MySQL/MongoDB), UI/UX (Figma/Canva), and choosing hardware/API systems.",
    color: "#0066ff"
  },
  {
    id: "step-3",
    label: "03",
    title: "Data Wrangling & NLP",
    description: "Cleaning research citation rows, formatting columns, and extracting text vectors with Pandas & NumPy.",
    color: "#bd00ff"
  },
  {
    id: "step-4",
    label: "04",
    title: "Core Development",
    description: "Building the Django models, potentiometric Bluetooth sockets, and wrapping elements in clean code.",
    color: "#0df2c9"
  },
  {
    id: "step-5",
    label: "05",
    title: "AI Model Tuning",
    description: "Fitting XGBoost trees, optimizing hyperparameters, and verifying predictions against NLP validation sets.",
    color: "#00f0ff"
  },
  {
    id: "step-6",
    label: "06",
    title: "System Telemetry Tests",
    description: "Calibrating potentiometric app voltage counts, debugging hardware sockets, and verifying REST pipelines.",
    color: "#bd00ff"
  },
  {
    id: "step-7",
    label: "07",
    title: "Secure Deployment",
    description: "Pushing to Git networks, packaging executable Android bundles, and deploying active web environments.",
    color: "#0df2c9"
  }
];
