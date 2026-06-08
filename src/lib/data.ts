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
  "Results-driven B.Tech graduate specializing in native Android development and software engineering. Experienced in building scalable mobile applications using Kotlin, Jetpack Compose, Supabase, and MVVM architecture. Strong foundation in Data Structures and Algorithms, with proven ability to architect complex systems, integrate RESTful APIs, and deliver user-centric solutions in Agile environments.";

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
      "Android app for learning algorithms with real-time, collaborative study-room features — Supabase auth, chat, and modular Clean Architecture.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Supabase", "Firebase"],
    whyBuilt: "Visual learning makes complex algorithms much easier to grasp, and peer study groups keep developers motivated. I built AlgoViz+ to turn passive algorithm study into a social, interactive experience.",
    keyChallenge: "Handling real-time collaborative state synchronization in study rooms using Supabase Realtime without causing UI lag during complex step-by-step algorithm animations on the canvas.",
    impact: "Enables peers to step through algorithms together interactively in shared rooms, eliminating the need to screen-share or coordinate manually.",
    learnings: "Deepened my skills in Clean Architecture layers, custom Jetpack Compose canvas drawing, performance profiling, and reactive state management with StateFlow.",
    features: [
      "25+ algorithms with step-by-step visualization and customizable inputs",
      "Supabase-backed auth (email/password + Google) and realtime study rooms",
      "Clean Architecture with Hilt, Coroutines, and Flow",
      "Room, Retrofit, and Firebase Messaging integration",
    ],
    github: "https://github.com/Harry0786/ALGOVIZ",
    accent: "from-cyan-400/25 to-blue-500/10",
  },
  {
    name: "FinSetu",
    subtitle: "Expense Management System",
    period: "Apr 2025 – May 2025",
    summary:
      "Real-time expense management app supporting 100+ users with secure authentication and automated expense splitting.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Coroutines"],
    whyBuilt: "I noticed that students in my hostel struggled to track shared expenses and settle group debts without tedious spreadsheets and awkward money discussions.",
    keyChallenge: "Designing a reliable offline-first database cache that syncs automatically with Firebase Realtime Database and handles concurrent offline updates when campus Wi-Fi drops.",
    impact: "Simplified cost-sharing for a test group of 100+ students, cutting calculation errors to zero and speeding up peer settlements.",
    learnings: "Mastered persistent database relationships in Android, managed complex nested UI states in Jetpack Compose, and solved real-time synchronization conflicts.",
    features: [
      "100+ user support with secure authentication",
      "Automated group expense splitting",
      "MVVM architecture with Jetpack Compose",
      "Optimized data sync using Coroutines",
    ],
    github: "https://github.com/Shivanshs673/FinSetu",
    accent: "from-cyan-400/25 to-blue-500/10",
  },
  {
    name: "ShoppingListApp",
    subtitle: "Smart Shopping List",
    period: "Personal Project",
    summary:
      "Feature-rich shopping list app with location-based suggestions, persistent storage, and a polished Compose UI.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Room", "Navigation"],
    whyBuilt: "Built as a practical solution to help family members coordinate shopping list items in real-time while avoiding double-purchases or missed items.",
    keyChallenge: "Integrating Retrofit web service suggestions with a local Room SQLite cache for seamless offline editing and zero-latency UI rendering.",
    impact: "Streamlined family grocery shopping, offering location-aware suggestions and persistent checklists.",
    learnings: "Understood the details of SQLite migrations in Room, lifecycle-aware view models, and building clean, accessible layout structures in Jetpack Compose.",
    features: [
      "Add, edit, delete, and mark items as purchased",
      "Room Database for offline persistence",
      "Retrofit for network requests and location-based features",
      "Jetpack Navigation with lifecycle-aware ViewModels",
    ],
    github: "https://github.com/Shivanshs673/ShoppingListApp",
    accent: "from-cyan-400/25 to-blue-500/10",
  },
  {
    name: "GetLocationApp",
    subtitle: "Location Services Demo",
    period: "Personal Project",
    summary:
      "Android app that fetches and displays the user's current GPS location with seamless runtime permission handling.",
    tech: ["Kotlin", "Jetpack Compose", "Fused Location Provider"],
    whyBuilt: "Created as an open-source utility and learning sandbox to explore Google Play Services location APIs and understand best practices for permission UX.",
    keyChallenge: "Gracefully handling complex location runtime permissions across different API levels, including cases where the user denies or restricts permission settings.",
    impact: "Provides a clean, reusable boilerplate module for other Android developers implementing location-aware features.",
    learnings: "Gained direct expertise with the Fused Location Provider, background service behaviors, and designing user-friendly rationale dialogs.",
    features: [
      "Real-time latitude and longitude display",
      "Runtime location permission handling",
      "Clean Compose UI built for learning and extension",
      "Foundation for maps, geofencing, and location history",
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
    tech: ["Spring Boot", "MySQL", "REST APIs", "Git", "Jira"],
    impact: "Delivered production-grade APIs that reduced query bottlenecks by 20%, and refactored core modules to speed up developer onboarding and debugging cycles by 25%.",
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
    description: "Interned at JOHRISOFT. Collaborated with senior engineers to build 5+ REST APIs using Spring Boot, optimized query times, and adapted to corporate Agile sprints.",
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
