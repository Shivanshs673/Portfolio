import { Header } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";
import { PageFadeIn } from "@/components/motion/page-fade-in";
import { ShellEffects } from "@/components/shell-effects";

export default function Home() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <PageFadeIn>
      <div className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
        <ShellEffects />
        <Header />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <FooterSection lastUpdated={lastUpdated} />
      </div>
    </PageFadeIn>
  );
}
