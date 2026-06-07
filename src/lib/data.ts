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
  "Results-driven B.Tech graduate specializing in native Android development and software engineering. Experienced in building scalable mobile applications using Kotlin, Jetpack Compose, Supabase, and MVVM architecture. Strong foundation in Data Structures and Algorithms, with proven ability to architect complex systems, integrate RESTful APIs, and deliver user-centric solutions in Agile environments.";

export const education = {
  school: "Jaypee University of Engineering & Technology",
  location: "Guna, MP",
  degree: "Bachelor of Technology in Computer Science Engineering (B.Tech)",
  period: "2022 – 2026",
  graduation: "Completed: June 2026",
};

export const aboutPoints = [
  "B.Tech CSE (Completed)",
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
      "Android app for learning algorithms with real-time, collaborative study-room features — Supabase auth, chat, and modular Clean Architecture.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Supabase", "Firebase"],
    features: [
      "25+ algorithms with step-by-step visualization and customizable inputs",
      "Supabase-backed auth (email/password + Google) and realtime study rooms",
      "Clean Architecture with Hilt, Coroutines, and Flow",
      "Room, Retrofit, and Firebase Messaging integration",
    ],
    github: "https://github.com/Harry0786/ALGOVIZ",
    accent: "from-blue-400/35 to-cyan-500/20",
  },
  {
    name: "FinSetu",
    subtitle: "Expense Management System",
    period: "Apr 2025 – May 2025",
    summary:
      "Real-time expense management app supporting 100+ users with secure authentication and automated expense splitting.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Coroutines"],
    features: [
      "100+ user support with secure authentication",
      "Automated group expense splitting",
      "MVVM architecture with Jetpack Compose",
      "Optimized data sync using Coroutines",
    ],
    github: "https://github.com/Shivanshs673/FinSetu",
    accent: "from-cyan-400/35 to-blue-500/20",
  },
  {
    name: "ShoppingListApp",
    subtitle: "Smart Shopping List",
    period: "Personal Project",
    summary:
      "Feature-rich shopping list app with location-based suggestions, persistent storage, and a polished Compose UI.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Room", "Navigation"],
    features: [
      "Add, edit, delete, and mark items as purchased",
      "Room Database for offline persistence",
      "Retrofit for network requests and location-based features",
      "Jetpack Navigation with lifecycle-aware ViewModels",
    ],
    github: "https://github.com/Shivanshs673/ShoppingListApp",
    accent: "from-violet-400/35 to-fuchsia-500/20",
  },
  {
    name: "GetLocationApp",
    subtitle: "Location Services Demo",
    period: "Personal Project",
    summary:
      "Android app that fetches and displays the user's current GPS location with seamless runtime permission handling.",
    tech: ["Kotlin", "Jetpack Compose", "Fused Location Provider"],
    features: [
      "Real-time latitude and longitude display",
      "Runtime location permission handling",
      "Clean Compose UI built for learning and extension",
      "Foundation for maps, geofencing, and location history",
    ],
    github: "https://github.com/Shivanshs673/GetLocationApp",
    accent: "from-emerald-400/35 to-teal-500/20",
  },
];

export const experiences = [
  {
    company: "JOHRISOFT",
    role: "Software Development Intern",
    location: "Kota, Rajasthan",
    period: "May 2025 – Jul 2025",
    responsibilities: [
      "Developed and integrated 5+ RESTful APIs, improving backend data flow and reducing API response latency by approximately 20%",
      "Collaborated in a 5-member Agile team using Git and Jira, delivering features on time",
      "Refactored legacy modules into reusable components, reducing debugging time by approximately 25%",
      "Gained hands-on experience with corporate workflows and industry-level engineering standards",
    ],
  },
];

export const activities = [
  {
    org: "Mozilla Phoenix Club – JUET",
    role: "Advisor",
    period: "Aug 2025 – May 2026",
    highlights: [
      "Organized an Accenture Mock Test for 300+ students using a student-built website platform",
      "Initiated Hacktoberfest 2024 in collaboration with Major League Hacking (MLH)",
    ],
  },
  {
    org: "TEDxJUET",
    role: "Logistics Head",
    period: "May 2025",
    highlights: [
      "Managed operations for 100+ participants and coordinated team schedules for the event held on 3 May 2025",
      "Handled vendor communication, event setup, and post-event wrap-up with zero operational delays",
    ],
  },
];

export const socialLinks = [
  { name: "GitHub", href: contactInfo.github, label: "Open-source projects and code" },
  { name: "LeetCode", href: contactInfo.leetcode, label: "250+ problems solved" },
  { name: "LinkedIn", href: contactInfo.linkedin, label: "Professional profile" },
];

export const quickFacts = [
  { label: "Hometown", value: "Ujjain, MP, India" },
  { label: "Education", value: "B.Tech CSE, JUET (Completed)" },
  { label: "Availability", value: "Open to SDE & Android roles" },
];
