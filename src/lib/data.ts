export const contactInfo = {
  email: "shivanshs673@gmail.com",
  phone: "+91-7987190176",
  linkedin: "https://www.linkedin.com/in/shivansh-shukla-2a9552257/",
  github: "https://github.com/shivanshs673",
  leetcode: "https://leetcode.com/u/Shivanshs673",
  location: "Ujjain, MP, India",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const heroHighlights = [
  "Android Development",
  "Jetpack Compose",
  "Supabase & Firebase",
  "MVVM Architecture",
];

export const professionalSummary =
  "B.Tech CSE Graduate specializing in Native Android Development. Skilled in Kotlin, Jetpack Compose, MVVM, Clean Architecture, and database integrations.";

export const education = {
  school: "Jaypee University of Engineering & Technology",
  location: "Guna, MP",
  degree: "Bachelor of Technology in Computer Science Engineering (B.Tech)",
  period: "2022 – 2026",
  graduation: "June 2026",
};

export const aboutPoints = [
  "B.Tech CSE at JUET, Guna",
  "Native Android Developer",
  "MVVM + Jetpack Compose",
  "Supabase & Firebase",
];

export const skillGroups = [
  {
    title: "Mobile Development",
    skills: ["Jetpack Compose", "Android SDK", "Material Design", "MVVM", "Hilt", "Room", "Retrofit"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["Supabase", "Firebase", "Git", "GitHub", "Coroutines", "StateFlow", "Android Studio", "Jira"],
  },
  {
    title: "Programming Languages",
    skills: ["Kotlin", "C", "C++", "SQL"],
  },
  {
    title: "Databases",
    skills: ["Room", "Supabase", "Firebase Realtime DB", "Cloud Firestore", "SQL"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "REST APIs", "Clean Architecture", "Agile/Scrum", "Problem Solving"],
  },
];

export const projects = [
  {
    name: "AlgoViz+",
    subtitle: "Competitive Learning Platform",
    period: "Feb 2026 – Present",
    summary:
      "Real-time collaborative algorithm learning app with Supabase study rooms.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Supabase", "Firebase"],
    whyBuilt: "Interactive algorithm visualizer and peer study group rooms.",
    keyChallenge: "Real-time collaborative room sync without canvas animation lag.",
    impact: "Enables instant peer study groups, eliminating manual screen sharing.",
    learnings: "Clean architecture, custom Jetpack Compose Canvas, and StateFlow reactiveness.",
    features: [
      "25+ algorithm step-by-step visualizations",
      "Supabase real-time shared study rooms",
      "Hilt, Coroutines, & Flow architecture",
      "Room DB & Firebase Messaging integration",
    ],
    github: "https://github.com/Harry0786/ALGOVIZ",
    accent: "from-cyan-400/25 to-blue-500/10",
  },
  {
    name: "FinSetu",
    subtitle: "Expense Management System",
    period: "Apr 2025 – May 2025",
    summary:
      "Real-time hostel student expense splitting app with secure auth.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Coroutines"],
    whyBuilt: "Hostel student expense tracking and shared debt settlements.",
    keyChallenge: "Offline-first sync and conflict resolution with Firebase Database.",
    impact: "Used by 100+ students; cut debt calculation errors to zero.",
    learnings: "Room relations, nested Compose state management, and real-time sync.",
    features: [
      "Automated group expense splitting",
      "Firebase Realtime DB sync & auth",
      "Room offline-first caching",
      "Coroutines reactive data layers",
    ],
    github: "https://github.com/Shivanshs673/FinSetu",
    accent: "from-cyan-400/25 to-blue-500/10",
  },
  {
    name: "ShoppingListApp",
    subtitle: "Smart Shopping List",
    period: "Personal Project",
    summary:
      "Smart household shopping list app with local cache & api suggestions.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Room", "Navigation"],
    whyBuilt: "Real-time coordinated shopping checklists within families.",
    keyChallenge: "Integrating Retrofit API suggestion lists with Room local database cache.",
    impact: "Coordinated shared list updates; eliminated item purchase duplication.",
    learnings: "SQLite schema migrations, ViewModel lifecycles, and accessible layout flows.",
    features: [
      "Real-time list CRUD & checklist states",
      "Room DB local storage cache",
      "Retrofit API suggestion services",
      "ViewModel & Jetpack Navigation state",
    ],
    github: "https://github.com/Shivanshs673/ShoppingListApp",
    accent: "from-cyan-400/25 to-blue-500/10",
  },
  {
    name: "GetLocationApp",
    subtitle: "Location Services Demo",
    period: "Personal Project",
    summary:
      "Fused Location API demonstration with dynamic permission handler.",
    tech: ["Kotlin", "Jetpack Compose", "Fused Location Provider"],
    whyBuilt: "Open-source sandbox for exploring Fused Location Provider APIs.",
    keyChallenge: "Runtime permission handling across different Android SDK API versions.",
    impact: "Reusable boilerplate code for integrating location services in Android.",
    learnings: "Fused Location client, background execution states, and permission dialogs.",
    features: [
      "Real-time GPS coordinates tracking",
      "Dynamic runtime permission handlers",
      "Clean Jetpack Compose code structure",
      "Boilerplate for maps & geofencing",
    ],
    github: "https://github.com/Shivanshs673/GetLocationApp",
    accent: "from-cyan-400/25 to-blue-500/10",
  },
];

export const experiences = [
  {
    company: "JOHRISOFT",
    role: "Software Development Intern",
    location: "Kota, Rajasthan (Remote)",
    period: "May 2025 – Jul 2025",
    tech: ["MySQL", "REST APIs", "Git", "Jira"],
    impact: "Built REST APIs reducing bottlenecks by 20% and refactored core modules saving 25% debugging time.",
    responsibilities: [
      "Built 5+ RESTful APIs, reducing latency by 20%",
      "Refactored legacy modules, saving 25% developer debug cycles",
      "Collaborated in 5-member Agile team using Git & Jira",
      "Practiced corporate coding standards & Git workflows",
    ],
  },
];

export const activities = [
  {
    org: "Mozilla Phoenix Club – JUET",
    role: "Advisor",
    period: "Aug 2025 – May 2026",
    highlights: [
      "Organized Accenture Mock Test for 300+ students",
      "Led Hacktoberfest 2024 (partnered with MLH)",
    ],
  },
  {
    org: "TEDxJUET",
    role: "Logistics Head",
    period: "May 2025",
    highlights: [
      "Managed logistics and schedules for 100+ attendees",
      "Coordinated vendor communication & event setup",
    ],
  },
];

export const timelineEvents = [
  {
    year: "2022",
    title: "Started Programming Journey",
    description: "Began my Computer Science Engineering B.Tech at JUET. Discovered C++ and fell in love with coding, starting with command-line tools and solving simple algorithm puzzles.",
  },
  {
    year: "2023",
    title: "Discovered Mobile Development",
    description: "Built my first basic Android application. Learned Java, Kotlin, XML layouts, and the Android SDK. Seeing code run in the palm of my hand changed my career direction.",
  },
  {
    year: "2024",
    title: "Built First Production-Grade Project",
    description: "Shifted entirely to modern declarative UI with Jetpack Compose. Adopted clean MVVM architecture, Room database, and local persistence. Focused on writing modular, reusable code.",
  },
  {
    year: "2025",
    title: "Software Engineering Internship",
    description: "Interned at JOHRISOFT. Collaborated with senior engineers to build 5+ REST APIs, optimized query times, and adapted to corporate Agile sprints.",
  },
  {
    year: "2026",
    title: "Graduation & Full-Time Opportunities",
    description: "Graduating in June 2026. Ready to bring high energy, clean Kotlin practices, and a product-focused mindset to a forward-thinking engineering team.",
  },
];

export const socialLinks = [
  { name: "GitHub", href: contactInfo.github, label: "Open-source projects and code" },
  { name: "LeetCode", href: contactInfo.leetcode, label: "250+ problems solved" },
  { name: "LinkedIn", href: contactInfo.linkedin, label: "Professional profile" },
];

export const quickFacts = [
  { label: "Hometown", value: "Ujjain, MP, India" },
  { label: "Education", value: "B.Tech CSE, JUET" },
  { label: "Availability", value: "Open to SDE & Android roles" },
];

export const certifications = [
  {
    title: "Software Engineering and Agile Software Development",
    issuer: "Infosys Springboard",
    date: "March 14, 2026",
    verificationUrl: "https://verify.onwingspan.com",
    downloadUrl: "/AgileSoftwareDevelopment.pdf",
  },
  {
    title: "Angular Web Developer Certification",
    issuer: "Infosys Springboard",
    date: "April 14, 2026",
    verificationUrl: "https://verify.onwingspan.com",
    downloadUrl: "/AngularCertificate.pdf",
  },
];
