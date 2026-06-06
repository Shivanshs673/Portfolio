import { Header } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { CodingProfilesSection } from "@/components/sections/coding-profiles-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";
import { ShellEffects } from "@/components/shell-effects";
import { getGithubShowcase } from "@/lib/github";

export default async function Home() {
  const githubShowcase = await getGithubShowcase("shivanshs673");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
      <ShellEffects />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ExperienceSection />
        <CodingProfilesSection githubShowcase={githubShowcase} />
        <ResumeSection />
        <BlogSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
