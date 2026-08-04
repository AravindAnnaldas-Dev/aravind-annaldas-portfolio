import AboutMetrics from "@/components/AboutMetrics";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TopNavBar from "@/components/TopNavBar";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main style={{ paddingTop: "96px", overflowX: "hidden" }}>
        <HeroSection />
        <AboutMetrics />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <PhilosophySection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
