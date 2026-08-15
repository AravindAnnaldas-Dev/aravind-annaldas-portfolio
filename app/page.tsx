import { AboutSection } from "@/components/sections/about/about-section";
import { BackendJourneySection } from "@/components/sections/backend-journey/backend-journey-section";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { ExperienceSection } from "@/components/sections/experience/experience-section";
import { ExpertiseSection } from "@/components/sections/expertise/expertise-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <BackendJourneySection />
      <ProjectsSection />
      <ExpertiseSection />
      <ContactSection />
    </main>
  );
}
