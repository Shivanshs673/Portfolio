import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink, GitBranch, LineChart, UserRound } from "lucide-react";

import { codingProfiles } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

type GitHubShowcase = {
  profile: {
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
    bio: string | null;
  } | null;
  repos: Repo[];
};

async function getContributionData(username: string) {
  try {
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
}

export async function CodingProfilesSection({ githubShowcase }: { githubShowcase: GitHubShowcase }) {
  const contributionData = await getContributionData("shivanshs673");
  const contributionDays: Array<{ date?: string; count?: number; level?: number }> = contributionData?.contributions ?? [];
  const graphCells =
    contributionDays.length > 0
      ? contributionDays.slice(-98)
      : Array.from({ length: 98 }, (_, index) => ({ count: index % 6, level: index % 5 }));

  return (
    <section id="coding-profiles" className="section-wrapper relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Coding Profiles"
          title="Live stats and repository intelligence, grounded in public APIs."
          description="GitHub data is fetched from the public API, with a contribution heatmap and repository showcase for recruiter context."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <Card className="glass p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/8 text-cyan-300">
                <Code2 className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">GitHub</p>
                <h3 className="text-2xl font-semibold text-white">{githubShowcase.profile?.name ?? "Shivansh Shukla"}</h3>
                <p className="text-sm text-slate-400">@{githubShowcase.profile?.login ?? "shivanshs673"}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "Repositories", value: githubShowcase.profile?.public_repos ?? 18 },
                { label: "Followers", value: githubShowcase.profile?.followers ?? 0 },
                { label: "Following", value: githubShowcase.profile?.following ?? 0 },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Coding Profiles</p>
              <div className="grid gap-3">
                {codingProfiles.map((profileLink) => (
                  <Button key={profileLink.name} asChild variant="glass" size="sm" className="justify-between rounded-2xl px-4 py-4">
                    <Link href={profileLink.href} target="_blank" rel="noreferrer">
                      <span>
                        <span className="block text-left text-sm font-medium text-white">{profileLink.name}</span>
                        <span className="block text-left text-xs text-slate-400">{profileLink.label}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="glass p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Contribution Graph</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">Activity heatmap</h3>
                </div>
                <Badge variant="soft">Dynamic</Badge>
              </div>

              <div className="mt-6 grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                {graphCells.map((cell, index) => {
                  const level = cell.level ?? cell.count ?? 0;
                  const opacity = [0.08, 0.18, 0.3, 0.55, 0.85][Math.min(level, 4)];

                  return (
                    <div
                      key={`${index}-${cell.count ?? cell.level ?? 0}`}
                      className="h-3 rounded-sm bg-cyan-400"
                      style={{ opacity }}
                      title={`${cell.count ?? 0} contributions`}
                    />
                  );
                })}
              </div>
            </Card>

            <Card className="glass p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Repository Showcase</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">Recent public work</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {githubShowcase.repos.slice(0, 3).map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-3xl border border-white/8 bg-white/5 p-4 transition hover:-translate-y-1 hover:bg-white/8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{repo.name}</h4>
                        <p className="mt-1 text-sm leading-6 text-slate-300">{repo.description ?? "A polished public repository from the portfolio stack."}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-cyan-300" />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                      <Badge className="bg-white/8 px-3 py-1">{repo.language ?? "Code"}</Badge>
                      <Badge className="bg-white/8 px-3 py-1">{repo.stargazers_count} stars</Badge>
                      <Badge className="bg-white/8 px-3 py-1">{repo.forks_count} forks</Badge>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {codingProfiles.map((profile) => (
            <Card key={profile.name} className="glass p-5">
              <div className="flex items-center gap-3">
                <UserRound className="h-5 w-5 text-cyan-300" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{profile.name}</h3>
                  <p className="text-sm text-slate-400">{profile.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
