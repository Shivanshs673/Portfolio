"use client";

import { GitBranch, GitCommit, Star, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { GlassShimmer } from "@/components/motion/tilt-spotlight-card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";

type GitHubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
} | null;

type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

type GitHubEvent = {
  id: string;
  type: string;
  repo: { name: string; url: string };
  payload: {
    action?: string;
    ref_type?: string;
    commits?: Array<{ sha: string; message: string }>;
  };
  created_at: string;
};

type GithubSectionProps = {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  events: GitHubEvent[];
};

function formatGithubEvent(event: GitHubEvent) {
  const repoName = event.repo.name.replace(/^shivanshs673\//i, "");
  switch (event.type) {
    case "PushEvent": {
      const commitCount = event.payload.commits?.length ?? 1;
      const message = event.payload.commits?.[0]?.message ?? "Update codebase";
      return `Pushed ${commitCount} commit${commitCount > 1 ? "s" : ""} to ${repoName}: "${message}"`;
    }
    case "CreateEvent":
      return `Created a new ${event.payload.ref_type ?? "branch/repository"} in ${repoName}`;
    case "PullRequestEvent":
      return `${event.payload.action === "opened" ? "Opened" : "Merged"} a pull request in ${repoName}`;
    case "IssuesEvent":
      return `${event.payload.action === "opened" ? "Opened" : "Closed"} an issue in ${repoName}`;
    case "WatchEvent":
      return `Starred the repository ${repoName}`;
    default:
      return `Worked on ${repoName}`;
  }
}

export function GithubSection({ profile, repos, events }: GithubSectionProps) {
  // Safe calculations with fallbacks
  const totalRepos = profile?.public_repos ?? 14;
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0) || 5;
  const followersCount = profile?.followers ?? 8;

  // Filter events to unique activities (max 4)
  const filteredEvents = (events || [])
    .filter((e) => e.type !== "MemberEvent")
    .slice(0, 4);

  return (
    <section id="github" className="section-wrapper px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub activity"
          description="Real-time open source contributions, repositories, and recent development activity."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_0.7fr] sm:mt-12 sm:gap-6">
          <div className="space-y-5 sm:space-y-6">
            {/* Heatmap Card */}
            <ScrollReveal direction="left">
              <Card className="relative overflow-hidden p-5 sm:p-6 border-card-border bg-card shadow-sm">
                <GlassShimmer />
                <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">Contribution History</h3>
                <p className="mt-1 text-xs text-muted">My activity grid over the past year</p>
                <div className="mt-6 overflow-x-auto rounded-xl border border-card-border bg-surface p-4 flex justify-center scrollbar-none">
                  {/* Real, live contribution heatmap from ghchart */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://ghchart.rshah.org/3b82f6/shivanshs673"
                    alt="Shivansh Shukla's GitHub contributions chart"
                    className="max-w-none invert-0 dark:invert-0 opacity-90 transition-opacity hover:opacity-100 min-h-[105px]"
                  />
                </div>
              </Card>
            </ScrollReveal>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <ScrollReveal direction="up" delay={0.06}>
                <Card className="relative overflow-hidden p-4 text-center border-card-border bg-card shadow-sm">
                  <GlassShimmer />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <GitBranch className="h-5 w-5 text-primary-accent sm:h-6 sm:w-6" />
                    <span className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">{totalRepos}</span>
                    <p className="text-[10px] uppercase tracking-wider text-muted">Repositories</p>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.12}>
                <Card className="relative overflow-hidden p-4 text-center border-card-border bg-card shadow-sm">
                  <GlassShimmer />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <Star className="h-5 w-5 text-primary-accent sm:h-6 sm:w-6" />
                    <span className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">{totalStars}</span>
                    <p className="text-[10px] uppercase tracking-wider text-muted">Total Stars</p>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.18}>
                <Card className="relative overflow-hidden p-4 text-center border-card-border bg-card shadow-sm">
                  <GlassShimmer />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <Users className="h-5 w-5 text-primary-accent sm:h-6 sm:w-6" />
                    <span className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">{followersCount}</span>
                    <p className="text-[10px] uppercase tracking-wider text-muted">Followers</p>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* Recent Activity Card */}
          <ScrollReveal direction="right" delay={0.1}>
            <Card className="relative flex h-full flex-col overflow-hidden p-5 sm:p-6 border-card-border bg-card shadow-sm">
              <GlassShimmer />
              <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">Recent Activity</h3>
              <p className="mt-1 text-xs text-muted">Real-time commits, pull requests, and stars</p>

              <div className="mt-6 flex-1 space-y-4">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <div key={event.id} className="flex items-start gap-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-card-border bg-surface text-primary-accent">
                        <GitCommit className="h-3.5 w-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-slate-700 dark:text-slate-300 font-medium break-words">
                          {formatGithubEvent(event)}
                        </p>
                        <span className="mt-1 block text-[10px] text-slate-500">
                          {new Date(event.created_at).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex h-full flex-col items-center justify-center text-center p-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Active daily on open-source code.</p>
                    <a
                      href={profile?.html_url || "https://github.com/shivanshs673"}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 text-xs text-primary-accent hover:underline"
                    >
                      View full profile on GitHub
                    </a>
                  </div>
                )}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
