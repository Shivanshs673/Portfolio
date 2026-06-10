import * as React from "react";
import { 
  Code2, 
  Palette, 
  Layers, 
  Network, 
  Binary, 
  Globe, 
  Milestone, 
  BrainCircuit 
} from "lucide-react";

export function GitHubIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function LinkedInIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

export function LeetCodeIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414L3.89 9.043a1.375 1.375 0 0 0-.025 1.917l2.137 2.15c.26.262.607.393.953.393.308 0 .617-.104.875-.312l9.044-7.464c.26-.215.39-.533.39-.854V1.375a1.375 1.375 0 0 0-1.375-1.375h-2.407zm-5.744 11.234a.688.688 0 0 0-.486.207L2.4 16.29a.688.688 0 0 0-.012.958l1.42 1.428a.688.688 0 0 0 .959-.012l4.851-4.85a.688.688 0 0 0 0-.972l-1.42-1.428a.688.688 0 0 0-.486-.207zm14.183 2.923a1.375 1.375 0 0 0-1.943 0l-4.85 4.85a1.375 1.375 0 0 0 0 1.943l1.42 1.428a1.375 1.375 0 0 0 1.943 0l4.85-4.85a1.375 1.375 0 0 0 0-1.943l-1.42-1.428z" />
    </svg>
  );
}

export function getSkillIcon(skill: string) {
  const normalized = skill.toLowerCase().trim();

  // Devicons (CDN)
  if (normalized === "kotlin") {
    return <i className="devicon-kotlin-plain colored text-sm shrink-0" />;
  }
  if (normalized === "android sdk" || normalized === "jetpack compose" || normalized === "fused location provider") {
    return <i className="devicon-android-plain colored text-sm shrink-0" />;
  }
  if (normalized === "supabase") {
    return <i className="devicon-supabase-plain colored text-sm shrink-0" />;
  }
  if (normalized === "firebase" || normalized === "firebase realtime db" || normalized === "cloud firestore" || normalized === "firebase messaging") {
    return <i className="devicon-firebase-plain colored text-sm shrink-0" />;
  }
  if (normalized === "git") {
    return <i className="devicon-git-plain colored text-sm shrink-0" />;
  }
  if (normalized === "github") {
    return <GitHubIcon className="h-4 w-4 text-slate-900 dark:text-white shrink-0" />;
  }
  if (normalized === "android studio") {
    return <i className="devicon-androidstudio-plain colored text-sm shrink-0" />;
  }
  if (normalized === "jira" || normalized === "agile/scrum") {
    return <i className="devicon-jira-plain colored text-sm shrink-0" />;
  }
  if (normalized === "c") {
    return <i className="devicon-c-plain colored text-sm shrink-0" />;
  }
  if (normalized === "c++") {
    return <i className="devicon-cplusplus-plain colored text-sm shrink-0" />;
  }
  if (normalized === "room" || normalized === "room db" || normalized === "sqlite" || normalized === "sql" || normalized === "mysql") {
    return <i className="devicon-sqlite-plain colored text-sm shrink-0" />;
  }
  if (normalized === "coroutines" || normalized === "stateflow") {
    return <i className="devicon-kotlin-plain colored text-sm shrink-0" />;
  }

  // Lucide icons for concepts
  if (normalized === "material design") {
    return <Palette className="h-3.5 w-3.5 text-[#10B981] shrink-0" />;
  }
  if (normalized === "mvvm") {
    return <Layers className="h-3.5 w-3.5 text-[#10B981] shrink-0" />;
  }
  if (normalized === "hilt") {
    return <Code2 className="h-3.5 w-3.5 text-[#10B981] shrink-0" />;
  }
  if (normalized === "retrofit") {
    return <Network className="h-3.5 w-3.5 text-[#10B981] shrink-0" />;
  }
  if (normalized === "data structures & algorithms") {
    return <Binary className="h-3.5 w-3.5 text-[#10B981] shrink-0" />;
  }
  if (normalized === "rest apis" || normalized === "navigation") {
    return <Globe className="h-3.5 w-3.5 text-[#10B981] shrink-0" />;
  }
  if (normalized === "clean architecture") {
    return <Milestone className="h-3.5 w-3.5 text-[#10B981] shrink-0" />;
  }
  if (normalized === "problem solving") {
    return <BrainCircuit className="h-3.5 w-3.5 text-[#10B981] shrink-0" />;
  }

  return <Code2 className="h-3.5 w-3.5 text-[#B8B8B8] shrink-0" />;
}

